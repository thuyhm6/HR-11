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
import { OtApplyBatchInfoService } from './ot-apply-batch-info.service';
import { ApprovalInfo, EmployeeOption, OtBatchApiRow, OtBatchRow, OtDetailResponse } from './ot-apply-batch-info.model';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService).
 *  Toàn bộ key bên dưới đã tồn tại sẵn (namespace arOtf, impOt.deductYn, ps.col, common, applyAtt -
 *  dùng chung với apply-attendance-batch-info) - không cần thêm key mới trong message properties. */
const I18N_KEYS = [
  'common.empId', 'common.empName', 'common.deptName', 'common.fromDate', 'common.toDate',
  'common.placeholder.enterEmpId', 'common.placeholder.enterEmpName', 'common.selectAll',
  'common.search', 'common.clearFilter', 'common.addNew', 'common.save', 'common.action',
  'common.reason', 'common.status', 'common.creator', 'common.updater', 'common.approver',
  'common.hours', 'common.downloadTemplate', 'common.importExcel', 'common.loadFail',
  'common.saveSuccess', 'common.stt', 'common.totalRows',
  'arOtf.otType', 'arOtf.otDate', 'arOtf.fromHour', 'arOtf.toHour', 'arOtf.selectEmp',
  'arOtf.noEmpComp', 'arOtf.importResult', 'arOtf.status.cancelled', 'arOtf.msg.notSelectEmp',
  'arOtf.msg.notSelectDate', 'arOtf.msg.notEnterTime', 'arOtf.msg.noHour',
  'arOtf.msg.confirmCancelBatch', 'arOtf.msg.cancelBatchSuccess', 'arOtf.msg.noCancelSelected',
  'arOtf.cancelBatch', 'arOtf.msg.confirmResubmit', 'arOtf.msg.resubmitSuccess', 'arOtf.affirmFlag',
  'arOtf.affirmFlag.waitApprove', 'arOtf.affirmFlag.approved', 'arOtf.affirmFlag.approving',
  'arOtf.affirmFlag.sent', 'arOtf.confirmFlag', 'arOtf.confirmFlag.notConfirmed',
  'arOtf.confirmFlag.confirmed', 'arOtf.confirmFlag.rejected', 'arOtf.otTotalMonth',
  'arOtf.otTotalYear', 'arOtf.empInfo', 'arOtf.otInfo', 'arOtf.approvalSeq', 'arOtf.approvalStatus',
  'arOtf.opinion', 'arOtf.actionTime', 'arOtf.noApprovalData', 'arOtf.loadFailed',
  'impOt.deductYn', 'ps.col.indoorTime', 'ps.col.outdoorTime',
  'applyAtt.notSaved', 'applyAtt.msg.nothingToSave', 'applyAtt.msg.timeOverlap',
  'applyAtt.msg.cancelFailed', 'applyAtt.msg.invalidMinute', 'applyAtt.saveError', 'applyAtt.sendError',
];

/** Mã trạng thái đơn tăng ca (AFFIRM_FLAG) - dùng chung giá trị hardcode giống bản gốc. */
const AFFIRM_SENT = '14014306';
const AFFIRM_APPROVING = '14014307';
const AFFIRM_APPROVED = '14014308';
const AFFIRM_WAITING = '14014309';
const AFFIRM_CANCELLED = '14014310';
/** Các trạng thái còn cho phép chọn (checkbox) để Hủy đơn / Lưu lại - đúng cancelableFlags bản gốc. */
const CANCELABLE_FLAGS = [AFFIRM_SENT, AFFIRM_APPROVING, AFFIRM_APPROVED];
const EMP_OFFICE_HTSV = '15119';

/** Các mốc phút hợp lệ khi chọn giờ tăng ca - đúng quy tắc pioabValidateMinutes() bản gốc, phút chọn
 *  sẽ tự động làm tròn xuống mốc gần nhất trong danh sách này. */
const ALLOWED_MINUTES = [0, 2, 15, 17, 30, 32, 45, 47];

const AFFIRM_FLAG_OPTIONS: { value: string; labelKey: string; fallback: string }[] = [
  { value: AFFIRM_WAITING, labelKey: 'arOtf.affirmFlag.waitApprove', fallback: 'Chờ duyệt' },
  { value: AFFIRM_APPROVED, labelKey: 'arOtf.affirmFlag.approved', fallback: 'Đã duyệt' },
  { value: AFFIRM_APPROVING, labelKey: 'arOtf.affirmFlag.approving', fallback: 'Đang duyệt' },
  { value: AFFIRM_SENT, labelKey: 'arOtf.affirmFlag.sent', fallback: 'Gửi' },
  { value: AFFIRM_CANCELLED, labelKey: 'arOtf.status.cancelled', fallback: 'Đã hủy' },
];

const CONFIRM_FLAG_OPTIONS: { value: string; labelKey: string; fallback: string }[] = [
  { value: '0', labelKey: 'arOtf.confirmFlag.notConfirmed', fallback: 'Chưa xác nhận' },
  { value: '1', labelKey: 'arOtf.confirmFlag.confirmed', fallback: 'Đã xác nhận' },
  { value: '2', labelKey: 'arOtf.confirmFlag.rejected', fallback: 'Từ chối' },
];

/** Màu badge + key nhãn theo AFFIRM_FLAG - AFFIRM_WAITING (14014309) hiển thị đỏ/"Từ chối" giữ đúng
 *  hành vi bản gốc dù nhãn ở bộ lọc lại ghi "Chờ duyệt" (bất nhất sẵn có trong dữ liệu gốc, xem cùng
 *  quy ước ở apply-attendance-batch-info.component.ts - không tự sửa lại nghiệp vụ khi chỉ chuyển giao diện). */
const AFFIRM_BADGE: Record<string, { color: string; labelKey: string; fallback: string }> = {
  [AFFIRM_SENT]: { color: 'gold', labelKey: 'arOtf.affirmFlag.sent', fallback: 'Gửi' },
  [AFFIRM_APPROVING]: { color: 'blue', labelKey: 'arOtf.affirmFlag.approving', fallback: 'Đang duyệt' },
  [AFFIRM_APPROVED]: { color: 'green', labelKey: 'arOtf.affirmFlag.approved', fallback: 'Đã duyệt' },
  [AFFIRM_WAITING]: { color: 'red', labelKey: 'arOtf.confirmFlag.rejected', fallback: 'Từ chối' },
  [AFFIRM_CANCELLED]: { color: '', labelKey: 'arOtf.status.cancelled', fallback: 'Đã hủy' },
};

/**
 * Bản Angular của ess/infoApply/viewPiciOtAffirmLBatchList.html (Thymeleaf + DataTables + jQuery) -
 * Đăng ký/quản lý đơn tăng ca hàng loạt cho nhân viên cấp dưới (quản lý/HR). Gọi lại nguyên các API
 * JSON đã có sẵn ở ArOvertimeManagentController (xem OtApplyBatchInfoService) - không đổi backend.
 * Kiến trúc bám sát ApplyAttendanceBatchInfoComponent (trang xin nghỉ phép hàng loạt, cùng nhóm tính
 * năng) - dùng nz-table (phân trang client-side, BE trả toàn bộ danh sách theo bộ lọc) thay cho
 * DataTables, nz-autocomplete thay cho EmployeeSearchModal.
 *
 * 2 khác biệt cố ý so với bản gốc (đều đã có tiền lệ ở ApplyAttendanceBatchInfoComponent):
 * 1) Checkbox chọn dòng chỉ hiện với dòng đã lưu ở trạng thái còn xử lý được (CANCELABLE_FLAGS: Gửi/
 *    Đang duyệt/Đã duyệt) - dùng để Hủy đơn hoặc để Lưu lại (batch) khi bấm nút Lưu chung. Dòng mới
 *    luôn được lưu khi bấm nút Lưu (không cần tick chọn) - muốn loại 1 dòng mới thì bấm nút xóa dòng
 *    (removeNewRow) thay vì bỏ tick, đơn giản hơn nhưng cùng kết quả với bản gốc.
 * 2) Trong số các dòng đã chọn để Lưu: dòng AFFIRM_APPROVED (đã duyệt) gọi API resubmit (xóa đơn cũ +
 *    tạo lại, giữ đúng hành vi bản gốc vì đơn đã duyệt cần duyệt lại từ đầu); dòng Gửi/Đang duyệt (chưa
 *    duyệt) gọi chung API saveBatch với các dòng mới (update tại chỗ vì đơn chưa duyệt, applyNo có sẵn
 *    nên backend UPDATE thay vì INSERT - đúng logic ArOvertimeManagentServiceImpl.save()).
 */
@Component({
  selector: 'app-ot-apply-batch-info',
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
  templateUrl: './ot-apply-batch-info.component.html',
  styleUrl: './ot-apply-batch-info.component.css',
})
export class OtApplyBatchInfoComponent implements OnInit {
  readonly affirmFlagOptions = AFFIRM_FLAG_OPTIONS;
  readonly confirmFlagOptions = CONFIRM_FLAG_OPTIONS;
  readonly pageSizeOptions = [25, 50, 100, 200];
  readonly AFFIRM_APPROVED = AFFIRM_APPROVED;

  readonly serverRows = signal<OtBatchRow[]>([]);
  readonly newRows = signal<OtBatchRow[]>([]);
  readonly rows = computed(() => [...this.newRows(), ...this.serverRows()]);

  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly saving = signal(false);
  readonly cancelling = signal(false);
  readonly importing = signal(false);

  readonly detailVisible = signal(false);
  readonly detailLoading = signal(false);
  readonly detailErrorMessage = signal<string | null>(null);
  readonly detailData = signal<OtDetailResponse | null>(null);

  searchEmpId = '';
  searchEmpName = '';
  searchFromDate: Date | null = null;
  searchToDate: Date | null = null;
  searchAffirmFlag: string | null = null;
  searchConfirmFlag: string | null = null;

  private empSearchTimers = new Map<OtBatchRow, ReturnType<typeof setTimeout>>();
  private resolveTimers = new Map<OtBatchRow, ReturnType<typeof setTimeout>>();
  private totalsTimers = new Map<OtBatchRow, ReturnType<typeof setTimeout>>();

  constructor(
    private readonly api: OtApplyBatchInfoService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
    private readonly tabs: TabService,
  ) {}

  /** Toast lỗi (vd: vượt giới hạn 40h/tháng, 300h/năm...) hiển thị lâu hơn mặc định của NG-ZORRO
   *  (nzDuration mặc định chỉ 3s, dễ bị bỏ lỡ vì message nằm trên cùng màn hình, không như toastr ở
   *  bản gốc) - cho người dùng đủ thời gian đọc nội dung lỗi nghiệp vụ trước khi tự động biến mất. */
  private showError(msg: string): void {
    this.message.error(msg, { nzDuration: 6000 });
  }

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.initDefaultDateRange();
    this.search();
  }

  affirmBadge(affirmFlag: string) {
    if (!affirmFlag) return { color: '', labelKey: '', fallback: this.i18n.t('applyAtt.notSaved', 'Chưa lưu') };
    return AFFIRM_BADGE[affirmFlag] ?? { color: '', labelKey: '', fallback: affirmFlag };
  }

  isCancelable(row: OtBatchRow): boolean {
    return !row.isNew && CANCELABLE_FLAGS.includes(row.affirmFlag);
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
    this.initDefaultDateRange();
    this.newRows.set([]);
    this.search();
  }

  /** Mặc định Từ ngày/Đến ngày = tuần hiện tại (Thứ 2 - Chủ nhật) - đúng pioabInitDate() bản gốc. */
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

  get cancelableRows(): OtBatchRow[] {
    return this.serverRows().filter((r) => this.isCancelable(r));
  }

  get allCancelableSelected(): boolean {
    const rows = this.cancelableRows;
    return rows.length > 0 && rows.every((r) => r.selected);
  }

  get someCancelableSelected(): boolean {
    return this.cancelableRows.some((r) => r.selected) && !this.allCancelableSelected;
  }

  toggleSelectAll(checked: boolean): void {
    this.cancelableRows.forEach((r) => (r.selected = checked));
  }

  /** applyNo ổn định cho dòng đã lưu; dùng chính object cho dòng mới (chưa có applyNo) - giữ focus
   *  input/autocomplete không bị mất khi mảng rows() được tính lại (computed). */
  trackByRow = (_: number, row: OtBatchRow): unknown => (row.isNew ? row : row.applyNo);

  addEmptyRow(): void {
    this.newRows.update((rows) => [this.createEmptyRow(), ...rows]);
  }

  removeNewRow(row: OtBatchRow): void {
    this.newRows.update((rows) => rows.filter((r) => r !== row));
  }

  private createEmptyRow(): OtBatchRow {
    const today = new Date();
    return {
      isNew: true,
      applyNo: null,
      personId: '',
      empId: '',
      localName: '',
      deptNo: '',
      deptName: '',
      otTypeNo: '',
      otTypeCode: '',
      otTypeName: '',
      applyOtDate: this.formatYmd(today),
      otFromTime: '',
      otToTime: '',
      otApplyHour: '',
      applyOtRemark: '',
      deductYn: '0',
      indoorTime: '',
      outdoorTime: '',
      otTotalMonth: '',
      otTotalYear: '',
      affirmFlag: '',
      affirmStr: '',
      createdBy: '',
      createDate: '',
      updatedBy: '',
      updateDate: '',
      applyOtDateObj: today,
      otFromTimeObj: null,
      otToTimeObj: null,
      selected: false,
      empKeyword: '',
      empOptions: [],
      empSearching: false,
      resubmitting: false,
    };
  }

  private toRow(r: OtBatchApiRow): OtBatchRow {
    return {
      ...r,
      isNew: false,
      applyOtDateObj: this.parseYmd(r.applyOtDate),
      otFromTimeObj: this.parseDt(r.otFromTime),
      otToTimeObj: this.parseDt(r.otToTime),
      selected: false,
      empKeyword: '',
      empOptions: [],
      empSearching: false,
      resubmitting: false,
    };
  }

  // ==================== Tìm nhân viên cho dòng mới (nz-autocomplete) ====================

  onEmpKeywordChange(row: OtBatchRow, value: string): void {
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

  onEmpSelected(row: OtBatchRow, option: EmployeeOption): void {
    row.personId = option.personId;
    row.empId = option.empId;
    row.localName = option.localName;
    row.deptName = option.deptName;
    row.empKeyword = `${option.empId} - ${option.localName}`;
    row.empOptions = [];
    if (row.applyOtDate) {
      this.autoFillByEmp(row);
      this.fetchOtTotals(row);
    }
  }

  /** Nạp sẵn loại tăng ca/giờ mặc định theo NV + ngày - đúng pioabAutoFillByEmp() bản gốc, chỉ áp
   *  dụng cho dòng mới (khi vừa chọn NV hoặc đổi ngày mà đã có NV). */
  private autoFillByEmp(row: OtBatchRow): void {
    if (!row.personId || !row.applyOtDate) return;
    this.api.getAutoFillByEmp(row.personId, row.applyOtDate, row.deductYn || '0').subscribe((data) => {
      if (!data) return;
      if (data.deptName) row.deptName = data.deptName;
      row.otTypeCode = data.otTypeCode || '';
      row.otTypeName = data.otTypeName || '';
      const fromVal = this.normalizeDt(data.otFromTime || '');
      const toVal = this.normalizeDt(data.otToTime || '');
      if (fromVal) {
        row.otFromTime = fromVal;
        row.otFromTimeObj = this.parseDt(fromVal);
      }
      if (toVal) {
        row.otToTime = toVal;
        row.otToTimeObj = this.parseDt(toVal);
      }
      row.otApplyHour = data.otApplyHour || this.calcApplyHour(row.applyOtDate, row.otFromTime, row.otToTime);
    });
  }

  // ==================== Ngày / giờ tăng ca ====================

  onDateChange(row: OtBatchRow, value: Date | null): void {
    row.applyOtDateObj = value;
    row.applyOtDate = value ? this.formatYmd(value) : '';
    if (row.isNew && row.personId && row.applyOtDate) {
      this.autoFillByEmp(row);
      this.fetchOtTotals(row);
      return;
    }
    row.otApplyHour = this.calcApplyHour(row.applyOtDate, row.otFromTime, row.otToTime);
    this.scheduleResolveDefaultOtInfo(row);
    if (row.personId && row.applyOtDate) this.fetchOtTotals(row);
  }

  onTimeChange(row: OtBatchRow, which: 'from' | 'to', value: Date | null): void {
    const snapped = value ? this.snapMinutes(value) : null;
    if (which === 'from') {
      row.otFromTimeObj = snapped;
      row.otFromTime = snapped ? this.formatDt(snapped) : '';
    } else {
      row.otToTimeObj = snapped;
      row.otToTime = snapped ? this.formatDt(snapped) : '';
    }
    // Ngày tăng ca lấy theo ngày của giờ Từ (nếu có) - đúng pioabSyncRowData() bản gốc.
    if (which === 'from' && snapped) {
      row.applyOtDateObj = snapped;
      row.applyOtDate = this.formatYmd(snapped);
    }
    row.otApplyHour = this.calcApplyHour(row.applyOtDate, row.otFromTime, row.otToTime);
    this.scheduleResolveDefaultOtInfo(row);
  }

  onDeductYnChange(row: OtBatchRow, checked: boolean): void {
    row.deductYn = checked ? '1' : '0';
    this.scheduleResolveDefaultOtInfo(row, 0);
  }

  /** Làm tròn phút chọn về mốc hợp lệ gần nhất (không vượt quá) trong ALLOWED_MINUTES - đúng quy tắc
   *  pioabValidateMinutes() bản gốc. */
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

  /** Tính nhanh số giờ tăng ca ở client (fallback hiển thị ngay) - đúng công thức pioabCalcApplyHour()
   *  bản gốc, sẽ được ghi đè bằng giá trị chuẩn từ server khi resolveDefaultOtInfo() trả về. */
  private calcApplyHour(applyOtDate: string, fromTime: string, toTime: string): string {
    const start = this.parseDt(fromTime) ?? (applyOtDate && fromTime ? this.parseDt(`${applyOtDate} ${fromTime}`) : null);
    const end = this.parseDt(toTime) ?? (applyOtDate && toTime ? this.parseDt(`${applyOtDate} ${toTime}`) : null);
    if (!start || !end) return '';
    const adjustedEnd = end < start ? new Date(end.getTime() + 86400000) : end;
    const diffMinutes = Math.round((adjustedEnd.getTime() - start.getTime()) / 60000);
    if (diffMinutes < 0) return '';
    const hours = diffMinutes / 60;
    return String(Math.round(hours * 100) / 100);
  }

  /** Nhờ backend tính lại loại tăng ca/số giờ chuẩn theo NV + ngày + giờ - đúng
   *  pioabResolveDefaultOtInfo() bản gốc (debounce 300ms để tránh gọi API liên tục khi gõ). */
  private scheduleResolveDefaultOtInfo(row: OtBatchRow, delay = 300): void {
    const timer = this.resolveTimers.get(row);
    if (timer) clearTimeout(timer);
    if (!row.personId || !row.applyOtDate || !row.otFromTime || !row.otToTime) {
      row.otTypeCode = '';
      row.otTypeName = '';
      return;
    }
    this.resolveTimers.set(
      row,
      setTimeout(() => {
        this.api.getDefaultOtInfo(row.personId, row.applyOtDate, row.otFromTime, row.otToTime, row.deductYn || '0').subscribe({
          next: (res) => {
            row.otTypeCode = res?.otTypeCode || '';
            row.otTypeName = res?.otTypeName || '';
            row.otApplyHour = res?.otApplyHour || this.calcApplyHour(row.applyOtDate, row.otFromTime, row.otToTime);
          },
          error: () => undefined,
        });
      }, delay),
    );
  }

  private fetchOtTotals(row: OtBatchRow): void {
    const timer = this.totalsTimers.get(row);
    if (timer) clearTimeout(timer);
    this.totalsTimers.set(
      row,
      setTimeout(() => {
        this.api.getOtTotals(row.personId, row.applyOtDate).subscribe({
          next: (res) => {
            row.otTotalMonth = res?.otTotalMonth || '';
            row.otTotalYear = res?.otTotalYear || '';
          },
          error: () => undefined,
        });
      }, 300),
    );
  }

  // ==================== Xem chi tiết đơn (dòng đã lưu) ====================

  openDetail(row: OtBatchRow): void {
    if (row.isNew || !row.applyNo) return;
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
        this.detailErrorMessage.set(this.i18n.t('arOtf.loadFailed', 'Tải dữ liệu thất bại'));
        this.detailLoading.set(false);
      },
    });
  }

  closeDetail(): void {
    this.detailVisible.set(false);
  }

  /** STT hàng phê duyệt - dòng tổng hợp xác nhận của HR có affirmLevel='100' hiển thị là 'HR' thay vì
   *  số thứ tự thô, đúng vaotRenderApprovalRows() ở viewApprovaledOt.html bản gốc. */
  approvalStt(item: ApprovalInfo, index: number): string {
    const stt = item.affirmLevel || String(index + 1);
    return stt === '100' ? 'HR' : stt;
  }

  // ==================== Lưu (dòng mới + dòng đã chọn để lưu lại/cập nhật) ====================

  saveAll(): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const savePayloads: Record<string, unknown>[] = [];
    const resubmitPayloads: Record<string, unknown>[] = [];
    let validationError: string | null = null;

    const validate = (row: OtBatchRow, label: string): string | null => {
      if (!row.personId) return `${t('arOtf.msg.notSelectEmp', 'Chưa chọn nhân viên')}${label}`;
      if (!row.applyOtDate) return `${t('arOtf.msg.notSelectDate', 'Chưa chọn ngày tăng ca')}${label}`;
      if (!row.otFromTime || !row.otToTime) return `${t('arOtf.msg.notEnterTime', 'Chưa nhập giờ tăng ca')}${label}`;
      if (!row.otApplyHour) return `${t('arOtf.msg.noHour', 'Không tính được số giờ tăng ca')}${label}`;
      return null;
    };

    for (const row of this.newRows()) {
      validationError = validate(row, '');
      if (validationError) break;
      savePayloads.push(this.buildPayload(row));
    }

    if (!validationError) {
      for (const row of this.serverRows()) {
        if (!row.selected || !this.isCancelable(row)) continue;
        validationError = validate(row, ` (${row.applyNo})`);
        if (validationError) break;
        if (row.affirmFlag === AFFIRM_APPROVED) {
          resubmitPayloads.push(this.buildPayload(row));
        } else {
          savePayloads.push(this.buildPayload(row));
        }
      }
    }

    if (validationError) {
      this.message.warning(validationError);
      return;
    }
    if (!savePayloads.length && !resubmitPayloads.length) {
      this.message.info(t('applyAtt.msg.nothingToSave', 'Không có dòng mới và không có đơn nào được chọn để lưu!'));
      return;
    }
    if (this.hasTimeOverlap([...savePayloads, ...resubmitPayloads])) {
      this.showError(t('applyAtt.msg.timeOverlap', 'Các dòng dữ liệu bị trùng nhau về thời gian, xin kiểm tra lại!'));
      return;
    }

    if (resubmitPayloads.length > 0) {
      this.modal.confirm({
        nzTitle: t('common.save', 'Lưu'),
        nzContent: t('arOtf.msg.confirmResubmit', 'Đơn này đã được duyệt. Lưu sẽ xóa đơn hiện tại và tạo lại đơn mới. Bạn có muốn tiếp tục không?'),
        nzOnOk: () => this.runSaveAll(savePayloads, resubmitPayloads),
      });
    } else {
      this.runSaveAll(savePayloads, resubmitPayloads);
    }
  }

  private buildPayload(row: OtBatchRow): Record<string, unknown> {
    return {
      applyNo: row.applyNo || '',
      personId: row.personId,
      localName: row.localName,
      empId: row.empId,
      otTypeNo: '31',
      otTypeCode: row.otTypeCode,
      applyOtDate: row.applyOtDate,
      otFromTime: row.otFromTime,
      otToTime: row.otToTime,
      otApplyHour: row.otApplyHour,
      applyOtRemark: row.applyOtRemark,
      deductYn: row.deductYn || '0',
    };
  }

  /** Kiểm tra trùng thời gian tăng ca giữa các dòng CÙNG nhân viên sắp lưu - đúng logic
   *  pioabCheckBatchTimeOverlap() bản gốc (coi khoảng to<=from là qua ngày hôm sau để so trùng giờ qua đêm). */
  private hasTimeOverlap(payloads: Record<string, unknown>[]): boolean {
    const items = payloads.map((p) => ({
      personId: String(p['personId'] || ''),
      from: new Date(String(p['otFromTime']).replace(' ', 'T') + ':00'),
      to: new Date(String(p['otToTime']).replace(' ', 'T') + ':00'),
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

  private async runSaveAll(savePayloads: Record<string, unknown>[], resubmitPayloads: Record<string, unknown>[]): Promise<void> {
    this.saving.set(true);
    const errors: string[] = [];

    if (savePayloads.length > 0) {
      try {
        const res = await firstValueFrom(this.api.saveBatch(savePayloads));
        if (!res.success) errors.push(res.error || this.i18n.t('applyAtt.saveError', 'Lỗi lưu dữ liệu'));
      } catch {
        errors.push(this.i18n.t('applyAtt.sendError', 'Lỗi khi gửi dữ liệu!'));
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
      this.showError(errors.join('; '));
    } else {
      this.message.success(this.i18n.t('common.saveSuccess', 'Lưu thành công!'));
      this.newRows.set([]);
      this.search();
    }
  }

  // ==================== Lưu lại 1 dòng đã duyệt (nút riêng trên từng dòng) ====================

  resubmitLine(row: OtBatchRow): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    if (!row.personId) { this.message.warning(t('arOtf.msg.notSelectEmp', 'Chưa chọn nhân viên')); return; }
    if (!row.applyOtDate) { this.message.warning(t('arOtf.msg.notSelectDate', 'Chưa chọn ngày tăng ca')); return; }
    if (!row.otFromTime || !row.otToTime) { this.message.warning(t('arOtf.msg.notEnterTime', 'Chưa nhập giờ tăng ca')); return; }
    if (!row.otApplyHour) { this.message.warning(t('arOtf.msg.noHour', 'Không tính được số giờ tăng ca')); return; }

    this.modal.confirm({
      nzTitle: t('common.save', 'Lưu'),
      nzContent: t('arOtf.msg.confirmResubmit', 'Đơn này đã được duyệt. Lưu sẽ xóa đơn hiện tại và tạo lại đơn mới. Bạn có muốn tiếp tục không?'),
      nzOnOk: () => this.doResubmitLine(row),
    });
  }

  private doResubmitLine(row: OtBatchRow): void {
    row.resubmitting = true;
    this.api.resubmit(this.buildPayload(row)).subscribe({
      next: (res) => {
        row.resubmitting = false;
        if (res.success) {
          this.message.success(res.message || this.i18n.t('arOtf.msg.resubmitSuccess', 'Đã lưu lại đơn tăng ca thành công'));
          this.search();
        } else {
          this.showError(res.error || this.i18n.t('applyAtt.saveError', 'Lỗi lưu dữ liệu'));
        }
      },
      error: () => {
        row.resubmitting = false;
        this.showError(this.i18n.t('applyAtt.sendError', 'Lỗi khi gửi dữ liệu!'));
      },
    });
  }

  // ==================== Hủy đơn đã chọn ====================

  cancelSelected(): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const applyNos = this.serverRows()
      .filter((r) => this.isCancelable(r) && r.selected && r.applyNo)
      .map((r) => String(r.applyNo));
    if (!applyNos.length) {
      this.message.warning(t('arOtf.msg.noCancelSelected', 'Vui lòng chọn ít nhất một đơn tăng ca để hủy'));
      return;
    }
    this.modal.confirm({
      nzTitle: t('arOtf.cancelBatch', 'Hủy bỏ'),
      nzContent: t('arOtf.msg.confirmCancelBatch', 'Bạn có chắc chắn muốn hủy {n} đơn tăng ca đã chọn không?').replace('{n}', String(applyNos.length)),
      nzOnOk: () => this.runCancelBatch(applyNos),
    });
  }

  private runCancelBatch(applyNos: string[]): void {
    this.cancelling.set(true);
    this.api.cancelBatch(applyNos).subscribe({
      next: (res) => {
        this.cancelling.set(false);
        if (res.success) {
          this.message.success(
            this.i18n.t('arOtf.msg.cancelBatchSuccess', 'Đã hủy thành công {n} đơn tăng ca').replace('{n}', String(res.count ?? applyNos.length)),
          );
          this.search();
        } else {
          this.showError(res.error || this.i18n.t('applyAtt.msg.cancelFailed', 'Hủy đơn thất bại!'));
        }
      },
      error: () => {
        this.cancelling.set(false);
        this.showError(this.i18n.t('applyAtt.sendError', 'Lỗi khi gửi dữ liệu!'));
      },
    });
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
        this.tabs.openTab('/ar/attendanceMintenance/viewImportOtTempList', this.i18n.t('arOtf.importResult', 'Kết quả nhập'), 'external');
      },
      error: () => {
        this.importing.set(false);
        this.showError(this.i18n.t('applyAtt.sendError', 'Lỗi khi gửi dữ liệu!'));
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

  /** Parse 'yyyy-MM-dd' về Date - trả null nếu chuỗi rỗng/không hợp lệ. */
  private parseYmd(value: string | null | undefined): Date | null {
    if (!value) return null;
    const match = value.trim().match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (!match) return null;
    const [, y, mo, d] = match;
    return new Date(Number(y), Number(mo) - 1, Number(d));
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
