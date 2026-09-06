import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { TabService } from '../shell/tab.service';
import { OtApplyInfoListService } from './ot-apply-info-list.service';
import { CodeItem, EssBasicInfoDto, OtApplyDetailResponse, OtApplyDisplayRow } from './ot-apply-info-list.model';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'essEmpCard.localName', 'essEmpCard.empId', 'essEmpCard.deptName', 'essEmpCard.headDept',
  'essEmpCard.postFamily', 'essEmpCard.postGrade', 'essEmpCard.positionName', 'essEmpCard.dateStarted',
  'poi.field.otType', 'poi.field.dateRange', 'poi.col.otDate', 'poi.col.mealRest', 'poi.col.approvalSeq',
  'poi.col.actionTime', 'poi.col.hours', 'poi.btn.applyOt', 'poi.label.rows',
  'poi.modal.title', 'poi.modal.subject', 'poi.modal.applicant', 'poi.modal.empInfo', 'poi.modal.otInfo',
  'poi.modal.opinion',
  'poi.msg.loading', 'poi.msg.noData', 'poi.msg.loadError', 'poi.msg.noApprovalData', 'poi.msg.selectMinOne',
  'poi.msg.confirmCancel1', 'poi.msg.confirmCancel2', 'poi.msg.cancelSuccess', 'poi.msg.cancelFailed',
  'poi.msg.cancelError', 'poi.msg.loadApprovalFailed', 'poi.msg.loadDetailFailed',
  'poi.val.yes', 'poi.val.no', 'poi.unit.hour', 'poi.unit.minute',
  'common.selectOne', 'common.approvalStatus', 'common.search', 'common.quickFilter', 'common.cancel',
  'common.no.serial', 'common.startTime', 'common.endTime', 'common.duration', 'common.reason',
  'common.status', 'common.name', 'common.empId', 'common.deptName', 'common.position', 'common.close',
  'common.selectAll', 'common.stt', 'common.totalRows',
];

/** applyNo chỉ hủy được khi AFFIRM_FLAG thuộc nhóm này (Gửi/Đang duyệt/Đã duyệt) - đúng
 *  ['14014306','14014307','14014308'] của bản gốc (giống hệt CANCELABLE_FLAGS ở
 *  apply-attendance-info-list, dùng chung mã trạng thái duyệt trong hệ thống). */
const CANCELABLE_FLAGS = ['14014306', '14014307', '14014308'];

/**
 * Bản Angular của ess/infoApply/viewPOtApplyInfoList.html (Thymeleaf + jQuery) - Danh sách đơn xin
 * tăng ca của chính nhân viên đang đăng nhập, cho phép hủy đơn chưa duyệt xong và mở modal xem chi
 * tiết luồng phê duyệt. Gọi lại nguyên các API JSON đã có sẵn (không đổi backend) - xem
 * OtApplyInfoListService. Cấu trúc gần như giống hệt apply-attendance-info-list.component.ts (danh
 * sách đơn nghỉ phép) - cùng cơ chế lọc nhanh client-side, chọn dòng hủy đơn, modal chi tiết dùng
 * chung layout nz-descriptions + nz-table (chỉ khác endpoint /overtime/detail và cách định dạng thời
 * lượng: OT hiển thị "X Tiếng Y Phút" trực tiếp từ otApplyHour, khác với đơn nghỉ phép cần chia
 * applyLength/dayHours). Nút "Xin tăng ca" mở tab route Angular /sst-ot-apply-info (đã migrate).
 */
@Component({
  selector: 'app-ot-apply-info-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzDatePickerModule,
    NzCheckboxModule,
    NzModalModule,
    NzAlertModule,
    NzDescriptionsModule,
    TranslatePipe,
  ],
  templateUrl: './ot-apply-info-list.component.html',
  styleUrl: './ot-apply-info-list.component.css',
})
export class OtApplyInfoListComponent implements OnInit {
  readonly basicInfo = signal<EssBasicInfoDto | null>(null);
  readonly otTypeOptions = signal<CodeItem[]>([]);
  readonly affirmFlagOptions = signal<CodeItem[]>([]);

  readonly rows = signal<OtApplyDisplayRow[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly cancelling = signal(false);

  quickFilterKeyword = '';
  readonly filteredRows = computed(() => {
    const kw = this.quickFilterKeyword.trim().toLowerCase();
    const rows = this.rows();
    if (!kw) return rows;
    return rows.filter((r) =>
      [r.otTypeName, r.otTypeCode, r.applyOtDate, r.otFromTime, r.otToTime, r.applyOtRemark,
        r.affirmFlagName, r.confirmFlagName]
        .some((v) => v && String(v).toLowerCase().includes(kw)),
    );
  });

  readonly cancelableRows = computed(() => this.rows().filter((r) => CANCELABLE_FLAGS.includes(String(r.affirmFlag))));
  readonly allCancelableSelected = computed(() => {
    const rows = this.cancelableRows();
    return rows.length > 0 && rows.every((r) => r.selected);
  });
  readonly someCancelableSelected = computed(() => this.cancelableRows().some((r) => r.selected) && !this.allCancelableSelected());

  readonly detailVisible = signal(false);
  readonly detailLoading = signal(false);
  readonly detailErrorMessage = signal<string | null>(null);
  readonly detailData = signal<OtApplyDetailResponse | null>(null);

  otTypeCode: string | null = null;
  affirmFlag: string | null = null;
  fromDate: Date | null = null;
  toDate: Date | null = null;

  constructor(
    private readonly api: OtApplyInfoListService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
    private readonly tabs: TabService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadBasicInfo();
    this.api.getCodeList('31').subscribe((list) => this.otTypeOptions.set(list ?? []));
    this.api.getCodeList('14014304').subscribe((list) => this.affirmFlagOptions.set(list ?? []));
    this.initDefaultDateRange();
    this.search();
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api
      .getList({
        otTypeCode: this.otTypeCode ?? '',
        affirmFlag: this.affirmFlag ?? '',
        fromDate: this.formatYmd(this.fromDate),
        toDate: this.formatYmd(this.toDate),
      })
      .subscribe({
        next: (rows) => {
          this.rows.set((rows ?? []).map((r) => ({ ...r, selected: false })));
          this.loading.set(false);
        },
        error: () => {
          this.errorMessage.set(this.i18n.t('poi.msg.loadError', 'Lỗi tải dữ liệu'));
          this.rows.set([]);
          this.loading.set(false);
        },
      });
  }

  /** Mặc định từ ngày 01 đến ngày cuối tháng hiện tại - giữ đúng hành vi poiGetDefaultDateRange() bản gốc. */
  private initDefaultDateRange(): void {
    const now = new Date();
    this.fromDate = new Date(now.getFullYear(), now.getMonth(), 1);
    this.toDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  }

  toggleSelectAll(checked: boolean): void {
    this.cancelableRows().forEach((r) => (r.selected = checked));
  }

  cancelSelected(): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const selected = this.rows().filter((r) => r.selected);
    if (!selected.length) {
      this.message.warning(t('poi.msg.selectMinOne', 'Vui lòng chọn ít nhất một dòng để hủy bỏ.'));
      return;
    }
    const confirmMsg = `${t('poi.msg.confirmCancel1', 'Bạn có chắc muốn hủy bỏ')} ${selected.length} ${t('poi.msg.confirmCancel2', 'đơn xin tăng ca đã chọn?')}`;
    this.modal.confirm({
      nzTitle: t('common.cancel', 'Hủy'),
      nzContent: confirmMsg,
      nzOnOk: () => this.runCancel(selected.map((r) => String(r.applyNo))),
    });
  }

  private runCancel(applyNos: string[]): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    this.cancelling.set(true);
    this.api.cancel(applyNos).subscribe({
      next: (res) => {
        this.cancelling.set(false);
        if (res?.success) {
          this.message.success(res.message || t('poi.msg.cancelSuccess', 'Hủy bỏ thành công.'));
          this.search();
        } else {
          this.message.error(res?.error || t('poi.msg.cancelFailed', 'Hủy bỏ thất bại.'));
        }
      },
      error: () => {
        this.cancelling.set(false);
        this.message.error(t('poi.msg.cancelError', 'Lỗi khi hủy bỏ đơn.'));
      },
    });
  }

  goApply(): void {
    this.tabs.openTab('/sst-ot-apply-info', this.i18n.t('poi.btn.applyOt', 'Xin tăng ca'), 'route');
  }

  openDetail(row: OtApplyDisplayRow): void {
    this.detailVisible.set(true);
    this.detailLoading.set(true);
    this.detailErrorMessage.set(null);
    this.detailData.set(null);
    this.api.getDetail(String(row.applyNo), row.otTypeCode).subscribe({
      next: (res) => {
        this.detailData.set(res);
        this.detailLoading.set(false);
      },
      error: () => {
        this.detailErrorMessage.set(this.i18n.t('poi.msg.loadDetailFailed', 'Tải dữ liệu thất bại'));
        this.detailLoading.set(false);
      },
    });
  }

  closeDetail(): void {
    this.detailVisible.set(false);
  }

  /** STT dòng phê duyệt - affirmLevel=100 là dòng xác nhận của HR (poiRenderApprovalRows() bản gốc). */
  approvalSeqLabel(item: { affirmLevel: string }): string {
    return String(item.affirmLevel) === '100' ? 'HR' : item.affirmLevel;
  }

  deductLabel(deductYn: string | null | undefined): string {
    return deductYn === '1' ? this.i18n.t('poi.val.yes', 'Có') : this.i18n.t('poi.val.no', 'Không');
  }

  /** Hiển thị thời lượng dạng "X Tiếng Y Phút" - đúng poiFormatHour() bản gốc. */
  formatDuration(otApplyHour: string | number | null | undefined): string {
    const v = parseFloat(String(otApplyHour));
    if (isNaN(v)) return otApplyHour != null ? String(otApplyHour) : '';
    const hrs = Math.floor(v);
    const mins = Math.round((v - hrs) * 60);
    let text = '';
    if (hrs > 0) text += `${hrs} ${this.i18n.t('poi.unit.hour', 'Tiếng')}`;
    if (mins > 0) text += (text ? ' ' : '') + `${mins} ${this.i18n.t('poi.unit.minute', 'Phút')}`;
    return text || String(v);
  }

  private loadBasicInfo(): void {
    this.api.getBasicInfo().subscribe({
      next: (data) => this.basicInfo.set(data),
    });
  }

  private formatYmd(d: Date | null): string {
    return d ? formatDate(d, 'yyyy-MM-dd', 'vi') : '';
  }
}
