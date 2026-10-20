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
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { TabService } from '../shell/tab.service';
import { ApplyAttendanceInfoListService } from './apply-attendance-info-list.service';
import {
  CodeItem,
  EssBasicInfoDto,
  MyLeaveApplyDisplayRow,
} from './apply-attendance-info-list.model';
import { PAGE_SIZE_OPTIONS } from '../shared/table.constants';
import { LeaveApplyDetailComponent } from '../shared/leave-apply-detail/leave-apply-detail.component';
import { LeaveApplyDetail } from '../shared/leave-apply-detail/leave-apply-detail.model';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'essEmpCard.localName', 'essEmpCard.empId', 'essEmpCard.deptName', 'essEmpCard.headDept',
  'essEmpCard.postFamily', 'essEmpCard.postGrade', 'essEmpCard.positionName', 'essEmpCard.dateStarted',
  'al.label.leaveType', 'al.label.affirmFlag', 'al.label.workDate', 'al.select.allOption',
  'al.placeholder.quickFilter', 'al.btn.search', 'al.btn.cancel', 'al.btn.applyLeave', 'al.btn.close',
  'al.col.leaveType', 'al.col.applyDate', 'al.col.fromDate', 'al.col.fromTime', 'al.col.toDate',
  'al.col.toTime', 'al.col.duration', 'al.col.reason', 'al.col.status', 'al.col.hrComment',
  'al.col.confirm', 'al.col.inputBy',
  'ess.infoApply.attendance_application', 'common.print', 'common.close',
  'al.js.loading', 'al.js.loadingData', 'al.js.noData', 'al.js.loadError', 'al.js.loadDetailFail',
  'al.js.day', 'al.js.hour', 'al.js.selectRowAlert', 'al.js.cancelConfirm', 'al.js.cancelSuccess',
  'al.js.cancelFail', 'al.js.cancelError', 'al.js.noApprovalData', 'al.js.loadApprovalFail',
  'common.selectAll', 'common.stt', 'common.totalRows', 'common.status',
];

/** applyNo chỉ hủy được khi AFFIRM_FLAG thuộc nhóm này (Gửi/Đang duyệt/Đã duyệt) - đúng
 *  _al_cancelableFlags của bản gốc. */
const CANCELABLE_FLAGS = ['14014306', '14014307', '14014308'];

/**
 * Bản Angular của ess/infoApplyAttendance/viewApplyAttendanceInfoList.html (Thymeleaf + jQuery) -
 * Danh sách đơn xin nghỉ phép của chính nhân viên đang đăng nhập, cho phép hủy đơn chưa duyệt xong và
 * mở modal xem chi tiết luồng phê duyệt. Gọi lại nguyên các API JSON đã có sẵn (không đổi backend) -
 * xem ApplyAttendanceInfoListService. Dùng nz-table (BE trả toàn bộ danh sách theo bộ lọc) thay bảng
 * HTML tự build chuỗi jQuery - tương tự manage-emp-position-info. Lọc nhanh (quick filter) làm
 * client-side qua computed filteredRows() - đúng hành vi alQuickFilter() bản gốc. Popup chi tiết dùng
 * chung LeaveApplyDetailComponent (giao diện viewApprovaledLeaveInfo bản gốc, API
 * /ar/attendanceMintenance/api/leaveApply/detail) - giống apply-attendance-batch-info.
 * Nút "Xin nghỉ phép" mở tab route Angular /sst-apply-attendance (đã migrate) qua TabService thay vì
 * tabSystem.openTab() bản gốc.
 */
@Component({
  selector: 'app-apply-attendance-info-list',
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
    NzSpinModule,
    LeaveApplyDetailComponent,
    TranslatePipe,
  ],
  templateUrl: './apply-attendance-info-list.component.html',
  styleUrl: './apply-attendance-info-list.component.css',
})
export class ApplyAttendanceInfoListComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly basicInfo = signal<EssBasicInfoDto | null>(null);
  readonly leaveTypeOptions = signal<CodeItem[]>([]);
  readonly affirmFlagOptions = signal<CodeItem[]>([]);

  readonly rows = signal<MyLeaveApplyDisplayRow[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly cancelling = signal(false);

  quickFilterKeyword = '';
  readonly filteredRows = computed(() => {
    const kw = this.quickFilterKeyword.trim().toLowerCase();
    const rows = this.rows();
    if (!kw) return rows;
    return rows.filter((r) =>
      [r.leaveTypeName, r.leaveTypeCode, r.applyDate, r.leaveFromDate, r.leaveToDate, r.leaveReason,
        r.affirmFlagName, r.hrComment, r.confirmFlagName, r.createdBy, r.createdIp]
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
  readonly detailData = signal<LeaveApplyDetail | null>(null);
  @ViewChild(LeaveApplyDetailComponent) private ladDetail?: LeaveApplyDetailComponent;

  leaveTypeCode: string | null = null;
  affirmFlag: string | null = null;
  fromDate: Date | null = null;
  toDate: Date | null = null;

  constructor(
    private readonly api: ApplyAttendanceInfoListService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
    private readonly tabs: TabService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadBasicInfo();
    this.api.getCodeList('21').subscribe((list) => this.leaveTypeOptions.set(list ?? []));
    this.api.getCodeList('14014304').subscribe((list) => this.affirmFlagOptions.set(list ?? []));
    this.initDefaultDateRange();
    this.search();
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api
      .getList({
        leaveTypeCode: this.leaveTypeCode ?? '',
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
          this.errorMessage.set(this.i18n.t('al.js.loadError', 'Lỗi tải dữ liệu'));
          this.rows.set([]);
          this.loading.set(false);
        },
      });
  }

  /** Mặc định từ ngày 01 đến ngày cuối tháng hiện tại - giữ đúng hành vi alGetDefaultDateRange() bản gốc. */
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
      this.message.warning(t('al.js.selectRowAlert', 'Vui lòng chọn ít nhất một dòng để hủy bỏ.'));
      return;
    }
    const confirmMsg = t('al.js.cancelConfirm', 'Bạn có chắc muốn hủy bỏ {0} đơn xin nghỉ phép đã chọn?').replace('{0}', String(selected.length));
    this.modal.confirm({
      nzTitle: t('al.btn.cancel', 'Hủy bỏ'),
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
          this.message.success(res.message || t('al.js.cancelSuccess', 'Hủy bỏ thành công.'));
          this.search();
        } else {
          this.message.error(res?.error || t('al.js.cancelFail', 'Hủy bỏ thất bại.'));
        }
      },
      error: () => {
        this.cancelling.set(false);
        this.message.error(t('al.js.cancelError', 'Lỗi khi hủy bỏ đơn.'));
      },
    });
  }

  goApply(): void {
    this.tabs.openTab('/sst-apply-attendance', this.i18n.t('al.btn.applyLeave', 'Xin nghỉ phép'), 'route');
  }

  openDetail(row: MyLeaveApplyDisplayRow): void {
    this.detailVisible.set(true);
    this.detailLoading.set(true);
    this.detailErrorMessage.set(null);
    this.detailData.set(null);
    this.api.getDetail(String(row.applyNo), row.leaveTypeCode).subscribe({
      next: (res) => {
        this.detailData.set(res);
        this.detailLoading.set(false);
      },
      error: () => {
        this.detailErrorMessage.set(this.i18n.t('al.js.loadDetailFail', 'Tải dữ liệu thất bại'));
        this.detailLoading.set(false);
      },
    });
  }

  closeDetail(): void {
    this.detailVisible.set(false);
  }

  /** In popup chi tiết (nút In - printDialog() bản gốc). */
  printDetail(): void {
    this.ladDetail?.print();
  }

  /** Hiển thị thời lượng dạng "X Ngày Y Giờ" - đúng alFormatDuration() bản gốc. */
  formatDuration(applyLength: string | null | undefined, dayHours: string | null | undefined): string {
    const len = parseFloat(applyLength || '');
    const dh = parseFloat(dayHours || '');
    if (isNaN(len) || isNaN(dh) || dh === 0) return applyLength || '';
    const days = Math.floor(len / dh);
    const hours = len - days * dh;
    let text = '';
    if (days > 0) text += `${days} ${this.i18n.t('al.js.day', 'Ngày')}`;
    if (hours > 0) text += (text ? ' ' : '') + `${hours} ${this.i18n.t('al.js.hour', 'Giờ')}`;
    return text || String(len);
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
