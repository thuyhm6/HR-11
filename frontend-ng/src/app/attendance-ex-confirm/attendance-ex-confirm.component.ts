import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { AttendanceExConfirmService } from './attendance-ex-confirm.service';
import { AttendanceExConfirmUiRow, AttendanceExDetailResponse } from './attendance-ex-confirm.model';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService).
 *  Namespace "aec" đã được tạo sẵn riêng cho trang này (chỉ thiếu 4 key msg.confirm* dùng cho nội dung
 *  hộp thoại xác nhận, được thêm mới cùng lúc với trang này); "lc"/"applyAtt"/"ps"/"common"/"ck" dùng
 *  chung với viewLeaveConfirmList/viewApprovalEmail/ot-apply-batch-info - không tạo trùng key đã có. */
const I18N_KEYS = [
  'aec.col.itemName', 'aec.col.arDateStr', 'aec.col.scanTime', 'aec.col.shiftName', 'aec.col.applyTime',
  'aec.msg.confirmApproveLine', 'aec.msg.confirmRejectLine', 'aec.msg.confirmApproveBatch', 'aec.msg.confirmRejectBatch',
  'lc.btn.batchApprove', 'lc.btn.batchReject', 'lc.btn.approve', 'lc.btn.reject',
  'lc.col.affirmStatus', 'lc.col.hrConfirm', 'lc.col.hrComment', 'lc.dialog.hrComment',
  'lc.msg.selectApply', 'lc.msg.approveSuccess', 'lc.msg.rejectSuccess', 'lc.msg.hrCommentRequired',
  'applyAtt.search.confirmFlag', 'applyAtt.confirmFlag.notConfirmed', 'applyAtt.confirmFlag.confirmed',
  'applyAtt.confirmFlag.rejected', 'applyAtt.applicant', 'applyAtt.subject', 'applyAtt.approvalSeq',
  'applyAtt.approvalStatus', 'applyAtt.opinion', 'applyAtt.actionTime', 'applyAtt.empInfo', 'applyAtt.leaveInfo',
  'applyAtt.leaveTypeFull', 'applyAtt.leaveDuration', 'applyAtt.loadingData', 'applyAtt.noApprovalData',
  'applyAtt.loadFailed', 'applyAtt.sendError',
  'common.search.empIdOrName', 'common.placeholder.empId', 'common.fromDate', 'common.toDate', 'common.no.serial',
  'common.empId', 'common.empName', 'common.deptName', 'common.position', 'common.reason', 'common.selectAll',
  'common.clearFilter', 'common.search', 'common.no', 'common.close', 'common.confirm', 'common.stt',
  'common.totalRows', 'common.loadFail', 'common.noData', 'common.startTime', 'common.endTime',
  'ps.col.indoorTime', 'ps.col.outdoorTime',
  'ck.modal.title',
];

const CONFIRM_FLAG_OPTIONS: { value: string; labelKey: string; fallback: string }[] = [
  { value: '', labelKey: 'common.selectAll', fallback: '-- Tất cả --' },
  { value: '0', labelKey: 'applyAtt.confirmFlag.notConfirmed', fallback: 'Chưa xác nhận' },
  { value: '1', labelKey: 'applyAtt.confirmFlag.confirmed', fallback: 'Đã xác nhận' },
  { value: '2', labelKey: 'applyAtt.confirmFlag.rejected', fallback: 'Từ chối' },
];

/** Trạng thái xác nhận mặc định khi vào trang / bấm Xóa lọc - đúng option selected mặc định bản gốc. */
const DEFAULT_CONFIRM_FLAG = '0';

/**
 * Bản Angular của ess/arConfirm/viewAttendanceExConfirm.html (Thymeleaf + DataTables serverSide) -
 * Xác nhận (HR) các đơn điều chỉnh chấm công/nghỉ bất thường đã được duyệt xong quy trình phê duyệt.
 * Gọi lại nguyên các API JSON đã có sẵn ở EssLeaveConfirmController (xem AttendanceExConfirmService) -
 * không đổi backend. Kiến trúc phân trang bám theo CoordApplyAttendanceInfoComponent (nz-table
 * server-side qua nzFrontPagination=false + DataTablesResponse<T>); checkbox chọn dòng + sửa ý kiến
 * nhân sự inline bám theo OtApplyBatchInfoComponent - do dữ liệu chỉ tải 1 trang tại 1 thời điểm
 * (serverSide), "Chọn tất cả"/Duyệt-Từ chối hàng loạt chỉ áp dụng cho các dòng trong trang đang xem,
 * đúng hành vi bản gốc (DataTables serverSide chỉ render các dòng của trang hiện tại vào DOM).
 *
 * Modal chi tiết đơn chỉ hiển thị (không có nút Duyệt/Từ chối) - đúng hành vi bản gốc: hàm
 * atexOpenApplyDetail(applyNo, itemNo) ở trang này được gọi KHÔNG kèm affirmContext (tham số ctx thứ 3),
 * nên _atex_affirmCtx luôn null và modal gốc không bao giờ hiện nút hành động (mọi đơn ở đây đều đã đi
 * hết quy trình phê duyệt - điều kiện SQL cố định AFFIRM_FLAG đã duyệt xong).
 */
@Component({
  selector: 'app-attendance-ex-confirm',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzDatePickerModule,
    NzCheckboxModule,
    NzTagModule,
    NzModalModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './attendance-ex-confirm.component.html',
  styleUrl: './attendance-ex-confirm.component.css',
})
export class AttendanceExConfirmComponent implements OnInit {
  readonly confirmFlagOptions = CONFIRM_FLAG_OPTIONS;
  readonly pageSizeOptions = [25, 50, 100, 200];

  readonly rows = signal<AttendanceExConfirmUiRow[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly recordsTotal = signal(0);

  searchEmpId = '';
  fromDate: Date | null = null;
  toDate: Date | null = null;
  confirmFlag: string = DEFAULT_CONFIRM_FLAG;

  pageIndex = 1;
  pageSize = 25;

  readonly batchRejectVisible = signal(false);
  batchRejectComment = '';
  private pendingBatchApplyNos: string[] = [];

  readonly detailVisible = signal(false);
  readonly detailLoading = signal(false);
  readonly detailErrorMessage = signal<string | null>(null);
  readonly detailData = signal<AttendanceExDetailResponse | null>(null);

  constructor(
    private readonly api: AttendanceExConfirmService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
  ) {}

  private showError(msg: string): void {
    this.message.error(msg, { nzDuration: 6000 });
  }

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.search();
  }

  search(): void {
    this.pageIndex = 1;
    this.loadPage();
  }

  clearSearch(): void {
    this.searchEmpId = '';
    this.fromDate = null;
    this.toDate = null;
    this.confirmFlag = DEFAULT_CONFIRM_FLAG;
    this.search();
  }

  onPageIndexChange(pageIndex: number): void {
    this.pageIndex = pageIndex;
    this.loadPage();
  }

  onPageSizeChange(pageSize: number): void {
    this.pageSize = pageSize;
    this.pageIndex = 1;
    this.loadPage();
  }

  private loadPage(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api
      .getPageList({
        searchEmpId: this.searchEmpId.trim(),
        fromDate: this.formatYmd(this.fromDate),
        toDate: this.formatYmd(this.toDate),
        confirmFlag: this.confirmFlag,
        draw: this.pageIndex,
        start: (this.pageIndex - 1) * this.pageSize,
        length: this.pageSize,
      })
      .subscribe({
        next: (res) => {
          if (res.error) {
            this.errorMessage.set(res.error);
            this.rows.set([]);
            this.recordsTotal.set(0);
          } else {
            this.rows.set((res.data ?? []).map((r) => ({ ...r, selected: false })));
            this.recordsTotal.set(res.recordsTotal ?? 0);
          }
          this.loading.set(false);
        },
        error: () => {
          this.errorMessage.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
          this.rows.set([]);
          this.recordsTotal.set(0);
          this.loading.set(false);
        },
      });
  }

  // ==================== Chọn dòng (checkbox - chỉ trong phạm vi trang hiện tại) ====================

  get allSelected(): boolean {
    const rows = this.rows();
    return rows.length > 0 && rows.every((r) => r.selected);
  }

  get someSelected(): boolean {
    return this.rows().some((r) => r.selected) && !this.allSelected;
  }

  toggleSelectAll(checked: boolean): void {
    this.rows().forEach((r) => (r.selected = checked));
  }

  // ==================== Duyệt / Từ chối từng dòng ====================

  confirmLine(row: AttendanceExConfirmUiRow, flag: '1' | '2'): void {
    const hrComment = (row.hrComment || '').trim();
    if (flag === '2' && !hrComment) {
      this.message.warning(this.i18n.t('lc.msg.hrCommentRequired', 'Vui lòng nhập ý kiến khi từ chối!'));
      return;
    }
    const content =
      flag === '1'
        ? this.i18n.t('aec.msg.confirmApproveLine', 'Bạn có chắc chắn muốn duyệt đơn này?')
        : this.i18n.t('aec.msg.confirmRejectLine', 'Bạn có chắc chắn muốn từ chối đơn này?');
    this.modal.confirm({
      nzTitle: this.i18n.t('common.confirm', 'Xác nhận'),
      nzContent: content,
      nzOnOk: () => this.runConfirmLine(row, flag, hrComment),
    });
  }

  private runConfirmLine(row: AttendanceExConfirmUiRow, flag: '1' | '2', hrComment: string): void {
    this.api.confirm(row.applyNo, flag, hrComment).subscribe({
      next: (res) => {
        if (res.success) {
          this.message.success(
            flag === '1'
              ? this.i18n.t('lc.msg.approveSuccess', 'Duyệt thành công!')
              : this.i18n.t('lc.msg.rejectSuccess', 'Từ chối thành công!'),
          );
          this.loadPage();
        } else {
          this.showError(res.error || this.i18n.t('applyAtt.sendError', 'Lỗi khi gửi dữ liệu!'));
        }
      },
      error: () => this.showError(this.i18n.t('applyAtt.sendError', 'Lỗi khi gửi dữ liệu!')),
    });
  }

  // ==================== Duyệt / Từ chối hàng loạt (các dòng đã chọn trong trang hiện tại) ====================

  batchApprove(): void {
    const applyNos = this.rows()
      .filter((r) => r.selected)
      .map((r) => r.applyNo);
    if (!applyNos.length) {
      this.message.warning(this.i18n.t('lc.msg.selectApply', 'Vui lòng chọn đơn cần xử lý!'));
      return;
    }
    this.modal.confirm({
      nzTitle: this.i18n.t('common.confirm', 'Xác nhận'),
      nzContent: this.i18n
        .t('aec.msg.confirmApproveBatch', 'Bạn có chắc chắn muốn duyệt {n} đơn đã chọn?')
        .replace('{n}', String(applyNos.length)),
      nzOnOk: () => this.runConfirmBatch(applyNos, '1', ''),
    });
  }

  openBatchReject(): void {
    const applyNos = this.rows()
      .filter((r) => r.selected)
      .map((r) => r.applyNo);
    if (!applyNos.length) {
      this.message.warning(this.i18n.t('lc.msg.selectApply', 'Vui lòng chọn đơn cần xử lý!'));
      return;
    }
    this.pendingBatchApplyNos = applyNos;
    this.batchRejectComment = '';
    this.batchRejectVisible.set(true);
  }

  cancelBatchReject(): void {
    this.batchRejectVisible.set(false);
  }

  confirmBatchReject(): void {
    const comment = this.batchRejectComment.trim();
    if (!comment) {
      this.message.warning(this.i18n.t('lc.msg.hrCommentRequired', 'Vui lòng nhập ý kiến khi từ chối!'));
      return;
    }
    this.batchRejectVisible.set(false);
    this.runConfirmBatch(this.pendingBatchApplyNos, '2', comment);
  }

  private runConfirmBatch(applyNos: string[], flag: '1' | '2', hrComment: string): void {
    this.api.confirmBatch(applyNos, flag, hrComment).subscribe({
      next: (res) => {
        if (res.success) {
          this.message.success(
            flag === '1'
              ? this.i18n.t('lc.msg.approveSuccess', 'Duyệt thành công!')
              : this.i18n.t('lc.msg.rejectSuccess', 'Từ chối thành công!'),
          );
        } else {
          this.showError(res.error || this.i18n.t('applyAtt.sendError', 'Lỗi khi gửi dữ liệu!'));
        }
        this.loadPage();
      },
      error: () => {
        this.showError(this.i18n.t('applyAtt.sendError', 'Lỗi khi gửi dữ liệu!'));
        this.loadPage();
      },
    });
  }

  // ==================== Modal chi tiết đơn (chỉ xem - xem giải thích ở docblock class) ====================

  openDetail(row: AttendanceExConfirmUiRow): void {
    if (!row.applyNo) return;
    this.detailVisible.set(true);
    this.detailLoading.set(true);
    this.detailErrorMessage.set(null);
    this.detailData.set(null);
    this.api.getDetail(row.applyNo, row.itemNo).subscribe({
      next: (res) => {
        this.detailData.set(res);
        this.detailLoading.set(false);
      },
      error: () => {
        this.detailErrorMessage.set(this.i18n.t('applyAtt.loadFailed', 'Tải dữ liệu thất bại'));
        this.detailLoading.set(false);
      },
    });
  }

  closeDetail(): void {
    this.detailVisible.set(false);
  }

  detailInfo(d: AttendanceExDetailResponse): Record<string, any> {
    return d.leaveInfo || {};
  }

  detailEmployeeInfo(d: AttendanceExDetailResponse): Record<string, any> {
    return d.employeeInfo || this.detailInfo(d);
  }

  detailModalTitle(d: AttendanceExDetailResponse | null): string {
    if (!d) return '';
    const info = this.detailInfo(d);
    return `[${info['leaveTypeName'] || this.i18n.t('ck.modal.title', 'Thông tin phê duyệt')}]`;
  }

  /** Dòng "Tiêu đề" trong modal - đúng atexRenderData() bản gốc. */
  detailApplyTitle(d: AttendanceExDetailResponse): string {
    const info = this.detailInfo(d);
    const typeName = info['leaveTypeName'];
    const fromTime = info['leaveFromTime'];
    const toTime = info['leaveToTime'];
    const localName = info['localName'] || '';
    if (!typeName && !localName && !fromTime && !toTime) return '';
    return `${typeName || ''}/Apply(${localName})[Date: ${fromTime || ''} ~ ${toTime || ''}]`;
  }

  detailApplicant(d: AttendanceExDetailResponse): string {
    const emp = this.detailEmployeeInfo(d);
    return `${emp['localName'] || ''}/${emp['postGradeName'] || ''}/${emp['deptName'] || ''}`;
  }

  /** STT hàng phê duyệt - dòng tổng hợp xác nhận của HR có affirmLevel='100' hiển thị là 'HR' thay vì
   *  số thứ tự thô, đúng vaotRenderApprovalRows() bản gốc. */
  approvalStt(affirmLevel: string, index: number): string {
    const stt = affirmLevel || String(index + 1);
    return stt === '100' ? 'HR' : stt;
  }

  // ==================== Helpers ====================

  private formatYmd(d: Date | null): string {
    return d ? formatDate(d, 'yyyy-MM-dd', 'vi') : '';
  }
}
