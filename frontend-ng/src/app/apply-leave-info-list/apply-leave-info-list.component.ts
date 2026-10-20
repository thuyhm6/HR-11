import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, ViewChild, computed, signal } from '@angular/core';
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
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { ApplyLeaveInfoListService } from './apply-leave-info-list.service';
import {
  CardApplyDisplayRow,
  CodeItem,
  EssBasicInfoDto,
} from './apply-leave-info-list.model';
import { PAGE_SIZE_OPTIONS } from '../shared/table.constants';
import { AttendanceExApplyDetailComponent } from '../shared/attendance-ex-apply-detail/attendance-ex-apply-detail.component';
import { AttendanceExApplyDetail } from '../shared/attendance-ex-apply-detail/attendance-ex-apply-detail.model';

/** Các key message.properties dùng trong trang này (toàn bộ tái sử dụng từ namespace essLeave, essCommon,
 *  common đã có sẵn - không thêm key mới) - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'essEmpCard.localName', 'essEmpCard.empId', 'essEmpCard.deptName', 'essEmpCard.headDept',
  'essEmpCard.postFamily', 'essEmpCard.postGrade', 'essEmpCard.positionName', 'essEmpCard.dateStarted',
  'essLeave.startDate', 'essLeave.endDate', 'essLeave.approvalStatus', 'essLeave.search', 'essLeave.cancelBtn',
  'essCommon.quickFilter', 'essCommon.attendanceDate', 'essCommon.category', 'essCommon.cardSwipeTime',
  'essCommon.shift', 'essCommon.workTime', 'essCommon.hrOpinion', 'essCommon.cancelSuccess',
  'essCommon.cancelFail', 'essCommon.selectAtLeastOne', 'essCommon.confirmCancel1', 'essCommon.confirmCancel2',
  'essCwa.inLabel', 'essCwa.outLabel', 'essOt.timeRange', 'common.remark', 'common.stt', 'common.close',
  'common.totalRows', 'common.selectAll', 'common.loadFail', 'common.print',
  'ess.infoApply.check_error_attendance',
];

/** applyNo chỉ hủy được khi AFFIRM_FLAG thuộc nhóm này (Gửi/Đang duyệt/Đã duyệt) - đúng danh sách
 *  điều kiện hiện checkbox của aliRenderPage() bản gốc. */
const CANCELABLE_FLAGS = ['14014306', '14014307', '14014308'];

/**
 * Bản Angular của ess/infoApplyLeave/viewApplyLeaveInfoList.html (Thymeleaf + jQuery, tự build bảng +
 * phân trang bằng tay - KHÔNG dùng DataTables) - Danh sách đơn xin điều chỉnh chấm công/thẻ
 * (ESS_CARD_APPLY_TB) của chính nhân viên đang đăng nhập, cho phép hủy đơn chưa duyệt xong và mở modal
 * xem chi tiết luồng phê duyệt. Gọi lại nguyên các API JSON đã có sẵn (không đổi backend) - xem
 * ApplyLeaveInfoListService. LƯU Ý: đây là 1 tính năng khác (backend/DTO khác) với
 * apply-attendance-info-list dù giao diện rất giống nhau - trang đó migrate
 * ess/infoApplyAttendance/viewApplyAttendanceInfoList.html (EssLeaveApplyDto, API
 * /ess/infoApplyAttendance/api/myLeaveApply/**), còn trang này dùng EssCardApplyListDto, API
 * /ess/infoApplyLeave/api/myCardApply/** (chỉ endpoint chi tiết phê duyệt là gọi sang controller
 * infoApplyAttendance khác - đúng như aliOpenDetail() bản gốc). Dùng nz-table (BE trả toàn bộ danh
 * sách theo bộ lọc) thay bảng HTML tự build chuỗi jQuery - tương tự manage-emp-position-info. Lọc
 * nhanh (quick filter) làm client-side qua computed filteredRows() - đúng hành vi aliQuickFilter() bản
 * gốc. Modal chi tiết dùng chung AttendanceExApplyDetailComponent (bản Angular của
 * /ess/infoApply/viewAttendanceEx dự án Hanwha_HTSV).
 */
@Component({
  selector: 'app-apply-leave-info-list',
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
    AttendanceExApplyDetailComponent,
    TranslatePipe,
  ],
  templateUrl: './apply-leave-info-list.component.html',
  styleUrl: './apply-leave-info-list.component.css',
})
export class ApplyLeaveInfoListComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly basicInfo = signal<EssBasicInfoDto | null>(null);
  readonly affirmFlagOptions = signal<CodeItem[]>([]);

  readonly rows = signal<CardApplyDisplayRow[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly cancelling = signal(false);

  quickFilterKeyword = '';
  readonly filteredRows = computed(() => {
    const kw = this.quickFilterKeyword.trim().toLowerCase();
    const rows = this.rows();
    if (!kw) return rows;
    return rows.filter((r) =>
      [r.itemName, r.itemNo, r.arDateStr, r.fromTime, r.toTime, r.shiftName, r.applyReason, r.affirmFlagName]
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
  readonly detailData = signal<AttendanceExApplyDetail | null>(null);

  @ViewChild(AttendanceExApplyDetailComponent) private aedDetail?: AttendanceExApplyDetailComponent;

  affirmFlag: string | null = null;
  startDate: Date | null = null;
  endDate: Date | null = null;

  constructor(
    private readonly api: ApplyLeaveInfoListService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadBasicInfo();
    this.api.getCodeList('14014304').subscribe((list) => this.affirmFlagOptions.set(list ?? []));
    this.initDefaultDateRange();
    this.search();
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api
      .getList({
        affirmFlag: this.affirmFlag ?? '',
        startDate: this.formatDmy(this.startDate),
        endDate: this.formatDmy(this.endDate),
      })
      .subscribe({
        next: (rows) => {
          this.rows.set((rows ?? []).map((r) => ({ ...r, selected: false })));
          this.loading.set(false);
        },
        error: () => {
          this.errorMessage.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
          this.rows.set([]);
          this.loading.set(false);
        },
      });
  }

  /** Mặc định từ ngày 01 đến ngày cuối tháng hiện tại - giữ đúng hành vi aliGetDefaultDateRange() bản gốc. */
  private initDefaultDateRange(): void {
    const now = new Date();
    this.startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    this.endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  }

  toggleSelectAll(checked: boolean): void {
    this.cancelableRows().forEach((r) => (r.selected = checked));
  }

  cancelSelected(): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const selected = this.rows().filter((r) => r.selected);
    if (!selected.length) {
      this.message.warning(t('essCommon.selectAtLeastOne', 'Vui lòng chọn ít nhất một dòng để hủy bỏ.'));
      return;
    }
    const confirmMsg = `${t('essCommon.confirmCancel1', 'Bạn có chắc muốn hủy bỏ')} ${selected.length} ${t('essCommon.confirmCancel2', 'đơn đã chọn?')}`;
    this.modal.confirm({
      nzTitle: t('essLeave.cancelBtn', 'Hủy bỏ'),
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
          this.message.success(res.message || t('essCommon.cancelSuccess', 'Hủy bỏ thành công.'));
          this.search();
        } else {
          this.message.error(res?.error || t('essCommon.cancelFail', 'Hủy bỏ thất bại.'));
        }
      },
      error: () => {
        this.cancelling.set(false);
        this.message.error(t('essCommon.cancelFail', 'Hủy bỏ thất bại.'));
      },
    });
  }

  openDetail(row: CardApplyDisplayRow): void {
    this.detailVisible.set(true);
    this.detailLoading.set(true);
    this.detailErrorMessage.set(null);
    this.detailData.set(null);
    this.api.getDetail(String(row.applyNo), row.itemNo).subscribe({
      next: (res) => {
        this.detailData.set(res ? { ...res, approvalList: res.approvalList ?? [] } : null);
        this.detailLoading.set(false);
      },
      error: () => {
        this.detailErrorMessage.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.detailLoading.set(false);
      },
    });
  }

  closeDetail(): void {
    this.detailVisible.set(false);
  }

  printDetail(): void {
    this.aedDetail?.print();
  }

  /** Tách "từ ~ đến" thành 2 dòng - đúng aliFormatWorkTime() bản gốc. */
  formatWorkTime(workTime: string | null | undefined): { from: string; to: string } {
    if (!workTime) return { from: '', to: '' };
    const p = workTime.split('~');
    if (p.length !== 2) return { from: workTime, to: '' };
    return { from: p[0].trim(), to: p[1].trim() };
  }

  private loadBasicInfo(): void {
    this.api.getBasicInfo().subscribe({
      next: (data) => this.basicInfo.set(data),
    });
  }

  private formatDmy(d: Date | null): string {
    return d ? formatDate(d, 'dd/MM/yyyy', 'vi') : '';
  }
}
