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
import { LeaveConfirmService } from './leave-confirm.service';
import { LeaveConfirmUiRow, LeaveDetailResponse, LeaveTypeOption } from './leave-confirm.model';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService).
 *  Namespace "lc"/"applyAtt"/"common"/"ck" dùng chung với viewAttendanceExConfirm đã migrate
 *  (AttendanceExConfirmComponent) - không tạo trùng key đã có, kể cả 4 key msg.confirm* (tái sử dụng
 *  "aec.msg.*" vì nội dung hộp thoại xác nhận Duyệt/Từ chối chung chung, không riêng nghiệp vụ nào). */
const I18N_KEYS = [
  'lc.col.applyDate', 'lc.col.leaveTime', 'lc.col.representative', 'lc.col.affirmStatus', 'lc.col.hrConfirm',
  'lc.col.hrComment', 'lc.dialog.hrComment', 'lc.btn.batchApprove', 'lc.btn.batchReject', 'lc.btn.approve',
  'lc.btn.reject', 'lc.msg.selectApply', 'lc.msg.approveSuccess', 'lc.msg.rejectSuccess', 'lc.msg.hrCommentRequired',
  'aec.msg.confirmApproveLine', 'aec.msg.confirmRejectLine', 'aec.msg.confirmApproveBatch', 'aec.msg.confirmRejectBatch',
  'ess.viewApply.title.length', 'applyAtt.affirmFlag.approved',
  'applyAtt.search.confirmFlag', 'applyAtt.confirmFlag.notConfirmed', 'applyAtt.confirmFlag.confirmed',
  'applyAtt.confirmFlag.rejected', 'applyAtt.applicant', 'applyAtt.subject', 'applyAtt.approvalSeq',
  'applyAtt.approvalStatus', 'applyAtt.opinion', 'applyAtt.actionTime', 'applyAtt.empInfo', 'applyAtt.leaveInfo',
  'applyAtt.leaveTypeFull', 'applyAtt.leaveDuration', 'applyAtt.loadingData', 'applyAtt.noApprovalData',
  'applyAtt.loadFailed', 'applyAtt.sendError', 'applyAtt.applyTitleFallback',
  'common.search.empIdOrName', 'common.placeholder.empId', 'common.fromDate', 'common.toDate', 'common.no.serial',
  'common.empId', 'common.empName', 'common.deptName', 'common.position', 'common.reason', 'common.selectAll',
  'common.clearFilter', 'common.search', 'common.no', 'common.close', 'common.confirm', 'common.stt',
  'common.totalRows', 'common.loadFail', 'common.noData', 'common.startTime', 'common.endTime',
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
 * Bản Angular của ess/arConfirm/viewLeaveConfirmList.html (Thymeleaf + DataTables serverSide) - Xác
 * nhận (HR) các đơn nghỉ phép đã được duyệt xong quy trình phê duyệt. Gọi lại nguyên các API JSON đã
 * có sẵn ở EssLeaveConfirmController (xem LeaveConfirmService) - không đổi backend. Kiến trúc bám sát
 * AttendanceExConfirmComponent (trang chị em cùng controller, cùng cơ chế xác nhận HR) - phân trang
 * server-side qua nzFrontPagination=false + DataTablesResponse<T>, checkbox chọn dòng + sửa ý kiến
 * nhân sự inline chỉ áp dụng cho các dòng trong trang đang xem (dữ liệu serverSide chỉ tải 1 trang tại
 * 1 thời điểm, đúng hành vi bản gốc).
 *
 * Cột "Trạng thái duyệt" luôn hiển thị tĩnh "Đã duyệt" - đúng bản gốc (script render cứng
 * '<span class="badge bg-success">Đã duyệt</span>' cho mọi dòng, vì điều kiện SQL cố định chỉ trả về
 * đơn đã duyệt xong quy trình - EssLeaveConfirmMapper.xml: AFFIRM_FLAG = 14014308).
 *
 * Modal chi tiết đơn chỉ hiển thị (không có nút Duyệt/Từ chối) - đúng hành vi bản gốc: hàm
 * valOpenApplyDetail(applyNo, applyType) ở trang này được gọi KHÔNG kèm affirmContext (tham số ctx thứ
 * 3), nên modal gốc không bao giờ hiện nút hành động.
 */
@Component({
  selector: 'app-leave-confirm',
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
  templateUrl: './leave-confirm.component.html',
  styleUrl: './leave-confirm.component.css',
})
export class LeaveConfirmComponent implements OnInit {
  readonly confirmFlagOptions = CONFIRM_FLAG_OPTIONS;
  readonly pageSizeOptions = [25, 50, 100, 200];
  readonly leaveTypeOptions = signal<LeaveTypeOption[]>([]);

  readonly rows = signal<LeaveConfirmUiRow[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly recordsTotal = signal(0);

  searchEmpId = '';
  fromDate: Date | null = null;
  toDate: Date | null = null;
  leaveTypeCode: string | null = null;
  confirmFlag: string = DEFAULT_CONFIRM_FLAG;

  pageIndex = 1;
  pageSize = 25;

  readonly batchRejectVisible = signal(false);
  batchRejectComment = '';
  private pendingBatchApplyNos: string[] = [];

  readonly detailVisible = signal(false);
  readonly detailLoading = signal(false);
  readonly detailErrorMessage = signal<string | null>(null);
  readonly detailData = signal<LeaveDetailResponse | null>(null);

  constructor(
    private readonly api: LeaveConfirmService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
  ) {}

  private showError(msg: string): void {
    this.message.error(msg, { nzDuration: 6000 });
  }

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getLeaveTypeOptions().subscribe((list) => this.leaveTypeOptions.set(list ?? []));
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
    this.leaveTypeCode = null;
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
        searchLeaveTypeCode: this.leaveTypeCode ?? '',
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

  confirmLine(row: LeaveConfirmUiRow, flag: '1' | '2'): void {
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

  private runConfirmLine(row: LeaveConfirmUiRow, flag: '1' | '2', hrComment: string): void {
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

  openDetail(row: LeaveConfirmUiRow): void {
    if (!row.applyNo) return;
    this.detailVisible.set(true);
    this.detailLoading.set(true);
    this.detailErrorMessage.set(null);
    this.detailData.set(null);
    this.api.getDetail(row.applyNo).subscribe({
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

  detailInfo(d: LeaveDetailResponse): Record<string, any> {
    return d.leaveInfo || {};
  }

  detailEmployeeInfo(d: LeaveDetailResponse): Record<string, any> {
    return d.employeeInfo || this.detailInfo(d);
  }

  detailModalTitle(d: LeaveDetailResponse | null): string {
    if (!d) return '';
    const info = this.detailInfo(d);
    return `[${info['leaveTypeName'] || this.i18n.t('applyAtt.applyTitleFallback', 'Xin nghỉ phép')}]`;
  }

  /** Dòng "Tiêu đề" trong modal - đúng valBuildApplyTitle() bản gốc. */
  detailApplyTitle(d: LeaveDetailResponse): string {
    const info = this.detailInfo(d);
    const typeName = info['leaveTypeName'];
    const fromTime = info['leaveFromTime'];
    const toTime = info['leaveToTime'];
    const localName = info['localName'] || '';
    if (!typeName && !localName && !fromTime && !toTime) return '';
    return `${typeName || ''}/Apply(${localName})[Date: ${fromTime || ''} ~ ${toTime || ''}]`;
  }

  detailApplicant(d: LeaveDetailResponse): string {
    const emp = this.detailEmployeeInfo(d);
    return `${emp['localName'] || ''}/${emp['postGradeName'] || ''}/${emp['deptName'] || ''}`;
  }

  detailDuration(d: LeaveDetailResponse): string {
    const info = this.detailInfo(d);
    return this.formatDuration(info['applyLength'], info['dayHours']);
  }

  /** Quy đổi thời lượng nghỉ phép ra Ngày/Giờ theo dayHours - đúng lcFormatDuration() bản gốc, dùng cả
   *  ở cột "Thời lượng" trong bảng lẫn trong modal chi tiết. */
  rowDuration(row: LeaveConfirmUiRow): string {
    return this.formatDuration(row.applyLength, row.dayHours);
  }

  private formatDuration(applyLength: string | undefined, dayHours: string | undefined): string {
    const len = parseFloat(applyLength ?? '');
    const dh = parseFloat(dayHours ?? '');
    if (isNaN(len) || isNaN(dh) || dh === 0) return applyLength ?? '';
    const days = Math.floor(len / dh);
    const hours = len - days * dh;
    let text = '';
    if (days > 0) text += `${days} Ngày`;
    if (hours > 0) text += (text ? ' ' : '') + `${hours} Giờ`;
    return text || String(len);
  }

  /** STT hàng phê duyệt - dòng tổng hợp xác nhận của HR có affirmLevel='100' hiển thị là 'HR' thay vì
   *  số thứ tự thô, đúng valRenderApprovalRows() bản gốc. */
  approvalStt(affirmLevel: string, index: number): string {
    const stt = affirmLevel || String(index + 1);
    return stt === '100' ? 'HR' : stt;
  }

  // ==================== Helpers ====================

  private formatYmd(d: Date | null): string {
    return d ? formatDate(d, 'yyyy-MM-dd', 'vi') : '';
  }
}
