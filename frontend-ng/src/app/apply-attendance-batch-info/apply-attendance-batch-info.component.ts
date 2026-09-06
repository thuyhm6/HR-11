import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { TabService } from '../shell/tab.service';
import { ApplyAttendanceBatchInfoService } from './apply-attendance-batch-info.service';
import {
  ApprovalInfo,
  CodeItem,
  EmployeeOption,
  LeaveApplyApiRow,
  LeaveApplyDetailResponse,
  LeaveApplyRow,
} from './apply-attendance-batch-info.model';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'common.empId', 'common.empName', 'common.deptName', 'common.fromDate', 'common.toDate',
  'common.placeholder.enterEmpId', 'common.placeholder.enterEmpName', 'common.selectAll',
  'common.search', 'common.clearFilter', 'common.addNew', 'common.save', 'common.action',
  'common.reason', 'common.status', 'common.creator', 'common.updater', 'common.approver',
  'common.shift', 'common.startTime', 'common.endTime', 'common.downloadTemplate', 'common.importExcel',
  'common.loadFail', 'common.saveSuccess', 'common.saveFail', 'common.stt', 'common.totalRows',
  'ess.viewApply.title.length',
  'applyAtt.remainLeave', 'applyAtt.leaveType', 'applyAtt.leaveTypeFull', 'applyAtt.selectLeaveType',
  'applyAtt.selectEmp', 'applyAtt.notSaved', 'applyAtt.day', 'applyAtt.hour', 'applyAtt.cancelLeave',
  'applyAtt.msg.notSelectEmp', 'applyAtt.msg.notSelectLeaveType', 'applyAtt.msg.notSelectFrom',
  'applyAtt.msg.notSelectTo', 'applyAtt.msg.selectToCancel', 'applyAtt.msg.confirmCancel',
  'applyAtt.msg.cancelSuccess', 'applyAtt.msg.cancelFailed', 'applyAtt.msg.loadLeaveTypeFailed',
  'applyAtt.msg.invalidMinute', 'applyAtt.msg.timeOverlap', 'applyAtt.msg.nothingToSave',
  'applyAtt.search.affirmFlag', 'applyAtt.search.confirmFlag',
  'applyAtt.affirmFlag.waiting', 'applyAtt.affirmFlag.approved', 'applyAtt.affirmFlag.approving',
  'applyAtt.affirmFlag.sent', 'applyAtt.affirmFlag.cancelled', 'applyAtt.confirmFlag.notConfirmed',
  'applyAtt.confirmFlag.confirmed', 'applyAtt.confirmFlag.rejected', 'applyAtt.saveError',
  'applyAtt.sendError', 'applyAtt.importResult', 'applyAtt.loadFailed', 'applyAtt.empInfo',
  'applyAtt.leaveInfo', 'applyAtt.approvalSeq', 'applyAtt.approvalStatus', 'applyAtt.opinion',
  'applyAtt.actionTime', 'applyAtt.noApprovalData', 'arOtf.msg.confirmResubmit', 'arOtf.msg.resubmitSuccess',
];

/** Mã trạng thái đơn nghỉ phép (AFFIRM_FLAG) - dùng chung giá trị hardcode giống bản gốc. */
const AFFIRM_APPROVED = '14014308';
const AFFIRM_REJECTED_CODE = '14014309';
const EMP_OFFICE_HTSV = '15119';

/** Các mốc phút hợp lệ khi chọn giờ nghỉ - đúng quy tắc chấm công gốc (abValidateMinutes), phút chọn
 *  sẽ tự động làm tròn xuống mốc gần nhất trong danh sách này. */
const ALLOWED_MINUTES = [0, 2, 15, 17, 30, 32, 45, 47];

const AFFIRM_FLAG_OPTIONS: { value: string; labelKey: string; fallback: string }[] = [
  { value: AFFIRM_REJECTED_CODE, labelKey: 'applyAtt.affirmFlag.waiting', fallback: 'Chờ duyệt' },
  { value: AFFIRM_APPROVED, labelKey: 'applyAtt.affirmFlag.approved', fallback: 'Đã duyệt' },
  { value: '14014307', labelKey: 'applyAtt.affirmFlag.approving', fallback: 'Đang duyệt' },
  { value: '14014306', labelKey: 'applyAtt.affirmFlag.sent', fallback: 'Gửi' },
  { value: '14014310', labelKey: 'applyAtt.affirmFlag.cancelled', fallback: 'Đã hủy' },
];

const CONFIRM_FLAG_OPTIONS: { value: string; labelKey: string; fallback: string }[] = [
  { value: '0', labelKey: 'applyAtt.confirmFlag.notConfirmed', fallback: 'Chưa xác nhận' },
  { value: '1', labelKey: 'applyAtt.confirmFlag.confirmed', fallback: 'Đã xác nhận' },
  { value: '2', labelKey: 'applyAtt.confirmFlag.rejected', fallback: 'Từ chối' },
];

/** Màu badge + key nhãn theo AFFIRM_FLAG - AFFIRM_REJECTED_CODE (14014309) hiển thị đỏ/"Từ chối" giữ
 *  đúng hành vi bản gốc dù nhãn ở bộ lọc lại ghi "Chờ duyệt" (bất nhất sẵn có trong dữ liệu gốc, lặp
 *  lại giống hệt ở viewPiciOtAffirmLBatchList.html - không tự sửa lại nghiệp vụ khi chỉ chuyển giao diện). */
const AFFIRM_BADGE: Record<string, { color: string; labelKey: string; fallback: string }> = {
  '14014306': { color: 'gold', labelKey: 'applyAtt.affirmFlag.sent', fallback: 'Gửi' },
  '14014307': { color: 'blue', labelKey: 'applyAtt.affirmFlag.approving', fallback: 'Đang duyệt' },
  [AFFIRM_APPROVED]: { color: 'green', labelKey: 'applyAtt.affirmFlag.approved', fallback: 'Đã duyệt' },
  [AFFIRM_REJECTED_CODE]: { color: 'red', labelKey: 'applyAtt.confirmFlag.rejected', fallback: 'Từ chối' },
  '14014310': { color: '', labelKey: 'applyAtt.affirmFlag.cancelled', fallback: 'Đã hủy' },
};

/**
 * Bản Angular của ess/infoApplyAttendance/viewApplyAttenanceBatchInfoList.html (Thymeleaf + DataTables
 * + jQuery) - Đăng ký/quản lý đơn nghỉ phép hàng loạt cho nhân viên cấp dưới (quản lý/HR). Gọi lại
 * nguyên các API JSON đã có sẵn ở EssLeaveApplyController (xem ApplyAttendanceBatchInfoService) -
 * không đổi backend. Dùng nz-table (phân trang client-side, giống ManageEmpPositionInfoComponent -
 * BE trả toàn bộ danh sách theo bộ lọc) thay cho DataTables. Dòng mới thêm bằng addEmptyRow() được
 * giữ ở mảng riêng newRows và luôn hiển thị phía trên các dòng đã lưu (serverRows) - giống cách nối
 * mảng _ab_addedRows + dbRows ở dataSrc bản gốc. Widget tìm nhân viên dùng nz-autocomplete (gõ để tìm,
 * gọi lại đúng API /hrm/empinfo/api/employee/search mà EmployeeSearchModal.js gốc dùng) thay cho modal
 * Bootstrap + DataTables riêng - đơn giản hơn nhưng cùng 1 API, không cần thêm modal con.
 */
@Component({
  selector: 'app-apply-attendance-batch-info',
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
    NzAutocompleteModule,
    NzModalModule,
    NzTagModule,
    NzAlertModule,
    NzDescriptionsModule,
    TranslatePipe,
  ],
  templateUrl: './apply-attendance-batch-info.component.html',
  styleUrl: './apply-attendance-batch-info.component.css',
})
export class ApplyAttendanceBatchInfoComponent implements OnInit {
  readonly affirmFlagOptions = AFFIRM_FLAG_OPTIONS;
  readonly confirmFlagOptions = CONFIRM_FLAG_OPTIONS;
  readonly pageSizeOptions = [25, 50, 100, 200];
  /** Chỉ dòng đã duyệt (AFFIRM_APPROVED) mới có checkbox để Hủy đơn/Lưu lại - xem template. */
  readonly AFFIRM_APPROVED = AFFIRM_APPROVED;

  readonly typeList = signal<CodeItem[]>([]);
  readonly serverRows = signal<LeaveApplyRow[]>([]);
  readonly newRows = signal<LeaveApplyRow[]>([]);
  readonly rows = computed(() => [...this.newRows(), ...this.serverRows()]);

  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly saving = signal(false);
  readonly cancelling = signal(false);
  readonly importing = signal(false);

  readonly detailVisible = signal(false);
  readonly detailLoading = signal(false);
  readonly detailErrorMessage = signal<string | null>(null);
  readonly detailData = signal<LeaveApplyDetailResponse | null>(null);

  searchEmpId = '';
  searchEmpName = '';
  searchFromDate: Date | null = null;
  searchToDate: Date | null = null;
  searchAffirmFlag: string | null = null;
  searchConfirmFlag: string | null = null;
  searchLeaveTypeCode: string | null = null;

  private empSearchTimers = new Map<LeaveApplyRow, ReturnType<typeof setTimeout>>();
  private durationTimers = new Map<LeaveApplyRow, ReturnType<typeof setTimeout>>();

  constructor(
    private readonly api: ApplyAttendanceBatchInfoService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
    private readonly tabs: TabService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.initDefaultDateRange();
    this.api.getCodeList('21').subscribe({
      next: (list) => this.typeList.set(list ?? []),
      error: () => this.message.error(this.i18n.t('applyAtt.msg.loadLeaveTypeFailed', 'Không tải được danh sách loại nghỉ!')),
    });
    this.search();
  }

  affirmBadge(affirmFlag: string) {
    if (!affirmFlag) return { color: '', labelKey: '', fallback: this.i18n.t('applyAtt.notSaved', 'Chưa lưu') };
    return AFFIRM_BADGE[affirmFlag] ?? { color: '', labelKey: '', fallback: affirmFlag };
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api
      .getList({
        empId: this.searchEmpId.trim(),
        localName: this.searchEmpName.trim(),
        fromDate: this.formatYmd(this.searchFromDate),
        toDate: this.formatYmd(this.searchToDate),
        affirmFlag: this.searchAffirmFlag ?? '',
        confirmFlag: this.searchConfirmFlag ?? '',
        leaveTypeCode: this.searchLeaveTypeCode ?? '',
      })
      .subscribe({
        next: (list) => {
          this.serverRows.set((list ?? []).map((r) => this.toRow(r)));
          this.loading.set(false);
        },
        error: () => {
          this.errorMessage.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
          this.serverRows.set([]);
          this.loading.set(false);
        },
      });
  }

  clearSearch(): void {
    this.searchEmpId = '';
    this.searchEmpName = '';
    this.searchAffirmFlag = null;
    this.searchConfirmFlag = null;
    this.searchLeaveTypeCode = null;
    this.initDefaultDateRange();
    this.newRows.set([]);
    this.search();
  }

  /** Mặc định Từ ngày/Đến ngày = tuần hiện tại (Thứ 2 - Chủ nhật) - đúng abInitDate() bản gốc. */
  private initDefaultDateRange(): void {
    const now = new Date();
    const day = now.getDay() || 7;
    const monday = new Date(now);
    monday.setDate(now.getDate() - day + 1);
    const sunday = new Date(now);
    sunday.setDate(now.getDate() - day + 7);
    this.searchFromDate = monday;
    this.searchToDate = sunday;
  }

  get approvedRows(): LeaveApplyRow[] {
    return this.serverRows().filter((r) => r.affirmFlag === AFFIRM_APPROVED);
  }

  get allApprovedSelected(): boolean {
    const rows = this.approvedRows;
    return rows.length > 0 && rows.every((r) => r.selected);
  }

  get someApprovedSelected(): boolean {
    return this.approvedRows.some((r) => r.selected) && !this.allApprovedSelected;
  }

  toggleSelectAll(checked: boolean): void {
    this.approvedRows.forEach((r) => (r.selected = checked));
  }

  /** applyNo ổn định cho dòng đã lưu; dùng chính object cho dòng mới (chưa có applyNo) - giữ focus
   *  input/autocomplete không bị mất khi mảng rows() được tính lại (computed). */
  trackByRow = (_: number, row: LeaveApplyRow): unknown => (row.isNew ? row : row.applyNo);

  addEmptyRow(): void {
    this.newRows.update((rows) => [this.createEmptyRow(), ...rows]);
  }

  removeNewRow(row: LeaveApplyRow): void {
    this.newRows.update((rows) => rows.filter((r) => r !== row));
  }

  private createEmptyRow(): LeaveApplyRow {
    return {
      isNew: true,
      applyNo: null,
      personId: '',
      empId: '',
      localName: '',
      deptNo: '',
      deptName: '',
      annualLeaveCount: '0',
      shiftName: '',
      leaveTypeCode: '',
      leaveFromTime: '',
      leaveToTime: '',
      applyLength: '0',
      dayHours: '0',
      leaveReason: '',
      affirmFlag: '',
      affirmStr: '',
      createdBy: '',
      createDate: '',
      updatedBy: '',
      updateDate: '',
      fromDate: null,
      toDate: null,
      selected: false,
      empKeyword: '',
      empOptions: [],
      empSearching: false,
      resubmitting: false,
    };
  }

  private toRow(r: LeaveApplyApiRow): LeaveApplyRow {
    return {
      ...r,
      isNew: false,
      fromDate: this.parseDt(r.leaveFromTime),
      toDate: this.parseDt(r.leaveToTime),
      selected: false,
      empKeyword: '',
      empOptions: [],
      empSearching: false,
      resubmitting: false,
    };
  }

  // ==================== Tìm nhân viên cho dòng mới (nz-autocomplete) ====================

  onEmpKeywordChange(row: LeaveApplyRow, value: string): void {
    row.empKeyword = value;
    row.personId = '';
    const timer = this.empSearchTimers.get(row);
    if (timer) clearTimeout(timer);
    const keyword = value.trim();
    if (!keyword) {
      row.empOptions = [];
      return;
    }
    this.empSearchTimers.set(
      row,
      setTimeout(() => {
        row.empSearching = true;
        this.api.searchEmployees(keyword, EMP_OFFICE_HTSV).subscribe({
          next: (list) => {
            row.empOptions = list ?? [];
            row.empSearching = false;
          },
          error: () => {
            row.empOptions = [];
            row.empSearching = false;
          },
        });
      }, 300),
    );
  }

  onEmpSelected(row: LeaveApplyRow, option: EmployeeOption): void {
    row.personId = option.personId;
    row.empId = option.empId;
    row.localName = option.localName;
    row.deptName = option.deptName;
    row.empKeyword = `${option.empId} - ${option.localName}`;
    row.empOptions = [];
    this.loadEmpDefaultInfo(row);
  }

  private loadEmpDefaultInfo(row: LeaveApplyRow): void {
    this.api.getEmpDefaultInfo(row.personId).subscribe((res) => {
      if (!res) return;
      row.deptName = res.DEPT_NAME || row.deptName;
      row.annualLeaveCount = res.VAC_COUNT || '0';
      row.shiftName = res.SHIFT_NAME || '';
      if (res.START_TIME) {
        row.leaveFromTime = this.normalizeDt(res.START_TIME);
        row.fromDate = this.parseDt(row.leaveFromTime);
      }
      if (res.END_TIME) {
        row.leaveToTime = this.normalizeDt(res.END_TIME);
        row.toDate = this.parseDt(row.leaveToTime);
      }
      this.recalcAffirmors(row);
      this.recalcDuration(row);
    });
  }

  // ==================== Loại nghỉ / thời gian / thời lượng ====================

  onLeaveTypeChange(row: LeaveApplyRow): void {
    this.recalcDuration(row);
    if (row.isNew && row.personId) this.recalcAffirmors(row);
  }

  onDateChange(row: LeaveApplyRow, which: 'from' | 'to', value: Date | null): void {
    const snapped = value ? this.snapMinutes(value) : null;
    if (which === 'from') {
      row.fromDate = snapped;
      row.leaveFromTime = snapped ? this.formatDt(snapped) : '';
    } else {
      row.toDate = snapped;
      row.leaveToTime = snapped ? this.formatDt(snapped) : '';
    }
    this.recalcDuration(row);
  }

  /** Làm tròn phút chọn về mốc hợp lệ gần nhất (không vượt quá) trong ALLOWED_MINUTES - đúng quy tắc
   *  abValidateMinutes() bản gốc. */
  private snapMinutes(date: Date): Date {
    const m = date.getMinutes();
    if (ALLOWED_MINUTES.includes(m)) return date;
    let closest = 0;
    for (let i = ALLOWED_MINUTES.length - 1; i >= 0; i--) {
      if (m >= ALLOWED_MINUTES[i]) {
        closest = ALLOWED_MINUTES[i];
        break;
      }
    }
    const snapped = new Date(date);
    snapped.setMinutes(closest, 0, 0);
    const padded = closest < 10 ? `0${closest}` : String(closest);
    this.message.warning(`${this.i18n.t('applyAtt.msg.invalidMinute', 'Minute không hợp lệ, hệ thống đã tự động điều chỉnh về ')}${padded}`);
    return snapped;
  }

  private recalcDuration(row: LeaveApplyRow): void {
    if (!row.personId || !row.leaveFromTime || !row.leaveToTime || !row.leaveTypeCode) return;
    const timer = this.durationTimers.get(row);
    if (timer) clearTimeout(timer);
    this.durationTimers.set(
      row,
      setTimeout(() => {
        this.api.calcLeaveLength(row.personId, row.leaveFromTime, row.leaveToTime, row.leaveTypeCode).subscribe({
          next: (res) => {
            row.applyLength = res?.LEAVE_LENGTH != null ? String(res.LEAVE_LENGTH) : '0';
          },
          error: () => undefined,
        });
      }, 300),
    );
  }

  private recalcAffirmors(row: LeaveApplyRow): void {
    if (!row.personId) return;
    this.api.getAffirmorsPreview(row.personId, row.leaveTypeCode).subscribe({
      next: (res) => (row.affirmStr = res?.affirmStr || ''),
      error: () => undefined,
    });
  }

  /** Hiển thị thời lượng dạng "X Ngày Y Giờ" - đúng abFormatDuration() bản gốc. dayHours không được
   *  backend trả về ở calcLeaveLength (chỉ list ban đầu có) nên phần lớn trường hợp chỉ hiện số thô -
   *  giữ nguyên hành vi này, không tự vá thêm logic nghiệp vụ không được yêu cầu. */
  formatDuration(row: LeaveApplyRow): string {
    const len = parseFloat(row.applyLength);
    const dh = parseFloat(row.dayHours);
    if (isNaN(len) || isNaN(dh) || dh === 0) return row.applyLength || '';
    const days = Math.floor(len / dh);
    const hours = len - days * dh;
    let text = '';
    if (days > 0) text += `${days} ${this.i18n.t('applyAtt.day', 'Ngày')}`;
    if (hours > 0) text += (text ? ' ' : '') + `${hours} ${this.i18n.t('applyAtt.hour', 'Giờ')}`;
    return text || String(len);
  }

  // ==================== Xem chi tiết đơn (dòng đã lưu) ====================

  openDetail(row: LeaveApplyRow): void {
    if (row.isNew || !row.applyNo) return;
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
        this.detailErrorMessage.set(this.i18n.t('applyAtt.loadFailed', 'Tải dữ liệu thất bại'));
        this.detailLoading.set(false);
      },
    });
  }

  closeDetail(): void {
    this.detailVisible.set(false);
  }

  approvalRowLabel(item: ApprovalInfo): string {
    return item.affirmName || '';
  }

  /** STT dòng phê duyệt - affirmLevel=100 là dòng xác nhận của HR (valRenderApprovalRows() bản gốc). */
  approvalSeqLabel(item: ApprovalInfo): string {
    return String(item.affirmLevel) === '100' ? 'HR' : item.affirmLevel;
  }

  // ==================== Lưu (dòng mới + dòng đã duyệt được chọn để lưu lại) ====================

  saveAll(): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const newPayloads: Record<string, unknown>[] = [];
    const resubmitPayloads: Record<string, unknown>[] = [];
    let validationError: string | null = null;

    for (const row of this.newRows()) {
      if (!row.personId) { validationError = t('applyAtt.msg.notSelectEmp', 'Chưa chọn nhân viên!'); break; }
      if (!row.leaveTypeCode) { validationError = t('applyAtt.msg.notSelectLeaveType', 'Chưa chọn loại nghỉ!'); break; }
      if (!row.leaveFromTime) { validationError = t('applyAtt.msg.notSelectFrom', 'Chưa chọn Từ lúc!'); break; }
      if (!row.leaveToTime) { validationError = t('applyAtt.msg.notSelectTo', 'Chưa chọn Đến lúc!'); break; }
      newPayloads.push({
        personId: row.personId,
        localName: row.localName,
        leaveTypeCode: row.leaveTypeCode,
        leaveFromTime: row.leaveFromTime,
        leaveToTime: row.leaveToTime,
        applyLength: row.applyLength,
        leaveReason: row.leaveReason,
        affirmStr: null,
      });
    }

    if (!validationError) {
      for (const row of this.serverRows()) {
        if (row.affirmFlag !== AFFIRM_APPROVED || !row.selected) continue;
        if (!row.personId) { validationError = `${t('applyAtt.msg.notSelectEmp', 'Chưa chọn nhân viên!')} (${row.applyNo})`; break; }
        if (!row.leaveTypeCode) { validationError = `${t('applyAtt.msg.notSelectLeaveType', 'Chưa chọn loại nghỉ!')} (${row.applyNo})`; break; }
        if (!row.leaveFromTime) { validationError = `${t('applyAtt.msg.notSelectFrom', 'Chưa chọn Từ lúc!')} (${row.applyNo})`; break; }
        if (!row.leaveToTime) { validationError = `${t('applyAtt.msg.notSelectTo', 'Chưa chọn Đến lúc!')} (${row.applyNo})`; break; }
        resubmitPayloads.push({
          applyNo: row.applyNo,
          personId: row.personId,
          localName: row.localName,
          leaveTypeCode: row.leaveTypeCode,
          leaveFromTime: row.leaveFromTime,
          leaveToTime: row.leaveToTime,
          applyLength: row.applyLength,
          leaveReason: row.leaveReason,
        });
      }
    }

    if (validationError) {
      this.message.warning(validationError);
      return;
    }
    if (!newPayloads.length && !resubmitPayloads.length) {
      this.message.info(t('applyAtt.msg.nothingToSave', 'Không có dòng mới và không có đơn đã duyệt nào được chọn để lưu!'));
      return;
    }
    if (this.hasTimeOverlap([...newPayloads, ...resubmitPayloads])) {
      this.message.error(t('applyAtt.msg.timeOverlap', 'Các dòng dữ liệu bị trùng nhau về thời gian, xin kiểm tra lại!'));
      return;
    }

    if (resubmitPayloads.length > 0) {
      this.modal.confirm({
        nzTitle: t('common.save', 'Lưu'),
        nzContent: t('arOtf.msg.confirmResubmit', 'Đơn này đã được duyệt. Việc lưu sẽ xóa đơn hiện tại và tạo đơn mới. Tiếp tục?'),
        nzOnOk: () => this.runSaveAll(newPayloads, resubmitPayloads),
      });
    } else {
      this.runSaveAll(newPayloads, resubmitPayloads);
    }
  }

  /** Kiểm tra trùng thời gian nghỉ giữa các dòng CÙNG nhân viên sắp lưu - đúng logic abSaveAllNewRows()
   *  bản gốc (coi khoảng to<=from là qua ngày hôm sau để so trùng giờ qua đêm). */
  private hasTimeOverlap(payloads: Record<string, unknown>[]): boolean {
    const items = payloads.map((p) => ({
      personId: String(p['personId'] || ''),
      from: new Date(String(p['leaveFromTime']).replace(' ', 'T') + ':00'),
      to: new Date(String(p['leaveToTime']).replace(' ', 'T') + ':00'),
    }));
    for (let i = 0; i < items.length; i++) {
      for (let j = i + 1; j < items.length; j++) {
        const a = items[i];
        const b = items[j];
        if (a.personId !== b.personId) continue;
        if (isNaN(a.from.getTime()) || isNaN(a.to.getTime()) || isNaN(b.from.getTime()) || isNaN(b.to.getTime())) continue;
        const aTo = a.to <= a.from ? new Date(a.to.getTime() + 86400000) : a.to;
        const bTo = b.to <= b.from ? new Date(b.to.getTime() + 86400000) : b.to;
        if (a.from < bTo && b.from < aTo) return true;
      }
    }
    return false;
  }

  private async runSaveAll(newPayloads: Record<string, unknown>[], resubmitPayloads: Record<string, unknown>[]): Promise<void> {
    this.saving.set(true);
    const errors: string[] = [];

    for (let i = 0; i < newPayloads.length; i++) {
      try {
        const res = await firstValueFrom(this.api.save(newPayloads[i]));
        if (!res.success) errors.push(res.error || `${this.i18n.t('applyAtt.saveError', 'Lỗi lưu dữ liệu')} (#${i + 1})`);
      } catch {
        errors.push(`${this.i18n.t('applyAtt.sendError', 'Lỗi khi gửi dữ liệu!')} (#${i + 1})`);
      }
    }
    for (const payload of resubmitPayloads) {
      try {
        const res = await firstValueFrom(this.api.resubmit(payload));
        if (!res.success) errors.push(res.error || `${this.i18n.t('applyAtt.saveError', 'Lỗi lưu dữ liệu')} (${payload['applyNo']})`);
      } catch {
        errors.push(`${this.i18n.t('applyAtt.sendError', 'Lỗi khi gửi dữ liệu!')} (${payload['applyNo']})`);
      }
    }

    this.saving.set(false);
    if (errors.length) {
      this.message.error(errors.join('; '));
    } else {
      this.message.success(this.i18n.t('common.saveSuccess', 'Lưu thành công!'));
      this.newRows.set([]);
      this.search();
    }
  }

  // ==================== Lưu lại 1 dòng đã duyệt (nút riêng trên từng dòng) ====================

  resubmitLine(row: LeaveApplyRow): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    if (!row.personId) { this.message.warning(t('applyAtt.msg.notSelectEmp', 'Chưa chọn nhân viên!')); return; }
    if (!row.leaveTypeCode) { this.message.warning(t('applyAtt.msg.notSelectLeaveType', 'Chưa chọn loại nghỉ!')); return; }
    if (!row.leaveFromTime) { this.message.warning(t('applyAtt.msg.notSelectFrom', 'Chưa chọn Từ lúc!')); return; }
    if (!row.leaveToTime) { this.message.warning(t('applyAtt.msg.notSelectTo', 'Chưa chọn Đến lúc!')); return; }

    this.modal.confirm({
      nzTitle: t('common.save', 'Lưu'),
      nzContent: t('arOtf.msg.confirmResubmit', 'Đơn này đã được duyệt. Việc lưu sẽ xóa đơn hiện tại và tạo đơn mới. Tiếp tục?'),
      nzOnOk: () => this.doResubmitLine(row),
    });
  }

  private doResubmitLine(row: LeaveApplyRow): void {
    row.resubmitting = true;
    this.api
      .resubmit({
        applyNo: row.applyNo,
        personId: row.personId,
        localName: row.localName,
        leaveTypeCode: row.leaveTypeCode,
        leaveFromTime: row.leaveFromTime,
        leaveToTime: row.leaveToTime,
        applyLength: row.applyLength,
        leaveReason: row.leaveReason,
      })
      .subscribe({
        next: (res) => {
          row.resubmitting = false;
          if (res.success) {
            this.message.success(res.message || this.i18n.t('arOtf.msg.resubmitSuccess', 'Lưu lại đơn thành công'));
            this.search();
          } else {
            this.message.error(res.error || this.i18n.t('applyAtt.saveError', 'Lỗi lưu dữ liệu'));
          }
        },
        error: () => {
          row.resubmitting = false;
          this.message.error(this.i18n.t('applyAtt.sendError', 'Lỗi khi gửi dữ liệu!'));
        },
      });
  }

  // ==================== Hủy đơn đã chọn ====================

  cancelSelected(): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const applyNos = this.serverRows()
      .filter((r) => r.affirmFlag === AFFIRM_APPROVED && r.selected)
      .map((r) => String(r.applyNo));
    if (!applyNos.length) {
      this.message.warning(t('applyAtt.msg.selectToCancel', 'Vui lòng chọn đơn cần hủy!'));
      return;
    }
    this.modal.confirm({
      nzTitle: t('applyAtt.cancelLeave', 'Hủy đơn'),
      nzContent: t('applyAtt.msg.confirmCancel', 'Bạn có chắc chắn muốn hủy đơn đã chọn không?'),
      nzOnOk: () => this.runCancel(applyNos),
    });
  }

  private async runCancel(applyNos: string[]): Promise<void> {
    this.cancelling.set(true);
    const errors: string[] = [];
    for (const applyNo of applyNos) {
      try {
        const res = await firstValueFrom(this.api.cancel(applyNo));
        if (!res.success) errors.push(res.error || applyNo);
      } catch {
        errors.push(applyNo);
      }
    }
    this.cancelling.set(false);
    if (errors.length) {
      this.message.error(`${this.i18n.t('applyAtt.msg.cancelFailed', 'Hủy đơn thất bại!')} (${errors.join(', ')})`);
    } else {
      this.message.success(this.i18n.t('applyAtt.msg.cancelSuccess', 'Hủy đơn thành công!'));
      this.search();
    }
  }

  // ==================== Import / Export Excel ====================

  downloadTemplate(): void {
    window.location.href = this.api.downloadTemplateUrl();
  }

  onImportFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (!file) return;
    this.importing.set(true);
    this.api.importExcel(file).subscribe({
      next: (res) => {
        this.importing.set(false);
        if (res?.success) this.message.success(res.message || this.i18n.t('common.saveSuccess', 'Lưu thành công!'));
        else this.message.warning(res?.message || this.i18n.t('applyAtt.saveError', 'Lỗi lưu dữ liệu'));
        this.search();
        this.tabs.openTab(
          '/ar/attendanceMintenance/viewImportAttendanceTempList',
          this.i18n.t('applyAtt.importResult', 'Kết quả nhập'),
          'external',
        );
      },
      error: () => {
        this.importing.set(false);
        this.message.error(this.i18n.t('applyAtt.sendError', 'Lỗi khi gửi dữ liệu!'));
      },
    });
  }

  // ==================== Helpers ====================

  private formatYmd(d: Date | null): string {
    return d ? formatDate(d, 'yyyy-MM-dd', 'vi') : '';
  }

  private formatDt(d: Date): string {
    return formatDate(d, 'yyyy-MM-dd HH:mm', 'vi');
  }

  /** Parse 'yyyy-MM-dd HH:mm[:ss]' về Date - trả null nếu chuỗi rỗng/không hợp lệ. */
  private parseDt(value: string | null | undefined): Date | null {
    if (!value) return null;
    const normalized = value.trim().replace('T', ' ');
    const match = normalized.match(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})/);
    if (!match) return null;
    const [, y, mo, d, h, mi] = match;
    return new Date(Number(y), Number(mo) - 1, Number(d), Number(h), Number(mi));
  }

  private normalizeDt(value: string): string {
    const d = this.parseDt(value);
    return d ? this.formatDt(d) : '';
  }
}
