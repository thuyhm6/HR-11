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
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { AttendanceExBatchInfoService } from './attendance-ex-batch-info.service';
import { ApplyPayloadRow, AttendanceExApiRow, AttendanceExRow, AuthDeptNode, CodeItem, ShiftOption } from './attendance-ex-batch-info.model';

/** Toàn bộ key bên dưới đã có sẵn trong message.properties (namespace "ex" - dùng riêng cho trang này,
 *  "common"/"mep" dùng chung với các trang khác) - không cần thêm key mới. */
const I18N_KEYS = [
  'ex.field.empIdOrName', 'ex.placeholder.empIdOrName', 'ex.field.dept', 'ex.placeholder.dept',
  'ex.field.fromDate', 'ex.field.toDate', 'ex.field.postFamily', 'ex.field.shiftNo', 'ex.field.leaveType',
  'ex.field.inTime', 'ex.field.outTime',
  'ex.opt.all', 'ex.opt.select', 'ex.opt.unauthorized', 'ex.opt.earlyLeave', 'ex.opt.lateArrival', 'ex.opt.forgotSwipe',
  'ex.btn.search', 'ex.btn.apply', 'ex.btn.export', 'ex.btn.applyAll',
  'ex.col.no', 'ex.col.empId', 'ex.col.fullName', 'ex.col.dept', 'ex.col.position', 'ex.col.workDate',
  'ex.col.absenceType', 'ex.col.swipeTime', 'ex.col.actualTime', 'ex.col.reason', 'ex.col.approver',
  'ex.js.in', 'ex.js.out', 'ex.placeholder.remark',
  'ex.msg.selectMinOne', 'ex.msg.missingData', 'ex.msg.fillTimeRequired', 'ex.msg.submitSuccess',
  'ex.msg.submitFailed', 'ex.msg.submitError', 'ex.msg.selectMinOneBatch', 'ex.msg.enterBatchTime',
  'ex.msg.batchApplied', 'common.loadFail', 'mep.msg.loadDeptFailed',
];

/** Mã cha nhóm nhân viên (POST_FAMILY) dùng cho bộ lọc "Nhóm nhân viên" - đúng data-parent-code="14015812" bản gốc. */
const POST_FAMILY_PARENT_CODE = '14015812';

/** 4 loại bất thường được phép xin phép ở trang này - hardcode y hệt option cứng trong bản gốc (cũng
 *  đúng danh sách ITEM_NO IN (...) mà EssAttendanceExForBatchMapper.xml lọc sẵn ở phía backend). */
const ITEM_NO_OPTIONS: { value: string; labelKey: string; fallback: string }[] = [
  { value: '141443', labelKey: 'ex.opt.unauthorized', fallback: 'Nghỉ không phép' },
  { value: '141442', labelKey: 'ex.opt.earlyLeave', fallback: 'Về sớm' },
  { value: '141441', labelKey: 'ex.opt.lateArrival', fallback: 'Đến muộn' },
  { value: '14015448', labelKey: 'ex.opt.forgotSwipe', fallback: 'Quên quẹt thẻ' },
];

/**
 * Bản Angular của ess/infoApplyAttendance/viewAttendanceExForBatchInfoList.html (Thymeleaf + DataTables
 * + jQuery) - Danh sách chấm công bất thường (đi muộn/về sớm/quên quẹt thẻ/nghỉ không phép) của nhân
 * viên cấp dưới, cho phép quản lý tick chọn dòng rồi "Xin phép" hàng loạt. Gọi lại nguyên các API JSON
 * đã có sẵn ở EssInfoApplyAttendanceController (xem AttendanceExBatchInfoService) - không đổi backend.
 * Kiến trúc bám theo ApplyAttendanceBatchInfoComponent/OtApplyBatchInfoComponent (nz-table thay
 * DataTables, checkbox + input inline trong <td>) cho phần bảng, và ManageEmpPositionInfoComponent
 * (nz-tree-select + expandDeptSelection) cho bộ lọc phòng ban.
 *
 * 2 khác biệt cố ý so với bản gốc:
 * 1) Checkbox "chọn tất cả" áp dụng cho TOÀN BỘ danh sách đang tải (không chỉ trang hiện tại như
 *    DataTables page:'current') - nz-table chỉ phân trang hiển thị phía client, chọn theo state trên
 *    từng row object nên không có khái niệm "trang hiện tại" tách biệt dữ liệu như DataTables.
 * 2) Format ngày giờ gửi lên BE giữ nguyên dạng có dấu "/" (yyyy/MM/dd, yyyy/MM/dd HH:mm) đúng như bản
 *    gốc - BẮT BUỘC vì EssAttendanceExForBatchMapper.xml so sánh AR_DATE_STR bằng chuỗi thô (không qua
 *    TO_DATE), khác với các trang migrate khác trong hệ thống dùng "-" (yyyy-MM-dd).
 */
@Component({
  selector: 'app-attendance-ex-batch-info',
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
    NzTreeSelectModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './attendance-ex-batch-info.component.html',
  styleUrl: './attendance-ex-batch-info.component.css',
})
export class AttendanceExBatchInfoComponent implements OnInit {
  readonly itemNoOptions = ITEM_NO_OPTIONS;
  readonly pageSizeOptions = [25, 50, 100, 200];

  readonly rows = signal<AttendanceExRow[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly applying = signal(false);
  readonly deptTreeErrorMessage = signal<string | null>(null);

  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly postFamilyOptions = signal<CodeItem[]>([]);
  readonly shiftOptions = signal<ShiftOption[]>([]);

  keyword = '';
  deptNos: string[] = [];
  fromDate: Date | null = null;
  toDate: Date | null = null;
  postFamily: string | null = null;
  shiftNo: string | null = null;
  itemNo: string | null = null;

  bulkInTime: Date | null = null;
  bulkOutTime: Date | null = null;

  /** id -> danh sách id con trực tiếp - dùng để mở rộng lựa chọn cây phòng ban khi tra cứu (xem search()). */
  private deptChildrenMap = new Map<string, string[]>();

  constructor(
    private readonly api: AttendanceExBatchInfoService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.initDefaultDateRange();
    this.loadDeptTree();
    this.api.getCodeList(POST_FAMILY_PARENT_CODE).subscribe((list) => this.postFamilyOptions.set(list ?? []));
    this.api.getShiftOptions().subscribe((list) => this.shiftOptions.set(list ?? []));
    this.search();
  }

  /** Mặc định Từ ngày/Đến ngày = tuần hiện tại (Thứ 2 - Chủ nhật) - đúng exInitDefaultDateRange() bản gốc. */
  private initDefaultDateRange(): void {
    const now = new Date();
    const day = now.getDay() || 7;
    const monday = new Date(now);
    monday.setDate(now.getDate() - day + 1);
    const sunday = new Date(now);
    sunday.setDate(now.getDate() - day + 7);
    this.fromDate = monday;
    this.toDate = sunday;
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api
      .getList({
        keyword: this.keyword.trim(),
        deptNos: this.expandDeptSelection(this.deptNos).join(','),
        fromDate: this.formatYmdSlash(this.fromDate),
        toDate: this.formatYmdSlash(this.toDate),
        postFamily: this.postFamily ?? '',
        shiftNo: this.shiftNo ?? '',
        itemNo: this.itemNo ?? '',
      })
      .subscribe({
        next: (list) => {
          this.rows.set((list ?? []).map((r) => this.toRow(r)));
          this.loading.set(false);
        },
        error: () => {
          this.errorMessage.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
          this.rows.set([]);
          this.loading.set(false);
        },
      });
  }

  private toRow(r: AttendanceExApiRow): AttendanceExRow {
    // Prefill ô "Thời gian thực tế" bằng giờ ca chuẩn (shiftStartTime/shiftEndTime), không phải
    // fromDateTime/toDateTime (giờ chấm công bất thường gốc) - đúng exInitTable() bản gốc.
    const fromDate = this.parseDt(r.shiftStartTime);
    const toDate = this.parseDt(r.shiftEndTime);
    return {
      ...r,
      selected: false,
      fromDate,
      toDate,
      fromDateTime: fromDate ? this.formatDt(fromDate) : '',
      toDateTime: toDate ? this.formatDt(toDate) : '',
    };
  }

  trackByRow = (_: number, row: AttendanceExRow): string => this.rowKey(row);

  private rowKey(row: AttendanceExApiRow): string {
    if (row.applyNo) return String(row.applyNo);
    return [row.personId, row.arDateStr, row.empId, row.itemNo, row.shiftNo].join('|');
  }

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

  onDateChange(row: AttendanceExRow, which: 'from' | 'to', value: Date | null): void {
    if (which === 'from') {
      row.fromDate = value;
      row.fromDateTime = value ? this.formatDt(value) : '';
    } else {
      row.toDate = value;
      row.toDateTime = value ? this.formatDt(value) : '';
    }
    // Gõ/chỉnh giờ tự động tick chọn dòng - đúng hành vi input change ở exBindRowSelectionEvents() bản gốc.
    if (value) row.selected = true;
  }

  onRemarkChange(row: AttendanceExRow, value: string): void {
    row.remark = value;
    if (value.trim()) row.selected = true;
  }

  // ==================== Xin phép (dòng đã chọn) ====================

  applySelected(): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const selectedRows = this.rows().filter((r) => r.selected);

    if (!selectedRows.length) {
      this.message.warning(t('ex.msg.selectMinOne', 'Vui lòng tick chọn ít nhất một dòng.'));
      return;
    }
    for (const row of selectedRows) {
      if (!row.personId || !row.itemNo || !row.arDateStr) {
        this.message.warning(t('ex.msg.missingData', 'Thiếu dữ liệu bắt buộc ở dòng đã chọn: nhân viên/loại nghỉ/ngày công.'));
        return;
      }
      if (!row.fromDateTime || !row.toDateTime) {
        this.message.warning(t('ex.msg.fillTimeRequired', 'Vui lòng nhập đầy đủ thời gian vào/ra cho tất cả dòng đã chọn.'));
        return;
      }
    }

    const payload: ApplyPayloadRow[] = selectedRows.map((row) => ({
      applyNo: row.applyNo || '',
      personId: row.personId,
      empId: row.empId,
      localName: row.localName,
      itemNo: row.itemNo,
      arDateStr: row.arDateStr,
      fromDateTime: row.fromDateTime,
      toDateTime: row.toDateTime,
      workHour: row.workHour || '',
      remark: row.remark || '',
    }));

    this.applying.set(true);
    this.api.apply(payload).subscribe({
      next: (res) => {
        this.applying.set(false);
        if (res && res.success) {
          this.message.success(res.message || t('ex.msg.submitSuccess', 'Xin phép thành công.'));
          this.search();
        } else {
          this.message.error((res && res.error) || t('ex.msg.submitFailed', 'Xin phép thất bại.'));
        }
      },
      error: () => {
        this.applying.set(false);
        this.message.error(t('ex.msg.submitError', 'Lỗi khi gửi dữ liệu xin phép.'));
      },
    });
  }

  // ==================== Thực hiện tất cả (áp giờ hàng loạt cho dòng đã chọn - client-side) ====================

  applyBatchTime(): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const selectedRows = this.rows().filter((r) => r.selected);

    if (!selectedRows.length) {
      this.message.warning(t('ex.msg.selectMinOneBatch', 'Vui lòng chọn ít nhất một dòng để thực hiện.'));
      return;
    }
    if (!this.bulkInTime && !this.bulkOutTime) {
      this.message.warning(t('ex.msg.enterBatchTime', 'Vui lòng nhập thời gian vào hoặc thời gian ra.'));
      return;
    }

    for (const row of selectedRows) {
      if (this.bulkInTime) {
        row.fromDate = this.bulkInTime;
        row.fromDateTime = this.formatDt(this.bulkInTime);
      }
      if (this.bulkOutTime) {
        row.toDate = this.bulkOutTime;
        row.toDateTime = this.formatDt(this.bulkOutTime);
      }
    }
    this.rows.set([...this.rows()]);
    this.message.success(t('ex.msg.batchApplied', 'Đã áp dụng thời gian cho các dòng đã chọn.'));
  }

  // ==================== Xuất excel (client-side, không có endpoint export riêng ở backend) ====================

  exportExcel(): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const inLabel = t('ex.js.in', 'Vào');
    const outLabel = t('ex.js.out', 'Ra');
    const headers = [
      t('ex.col.no', 'No.'), t('ex.col.empId', 'Mã nhân viên'), t('ex.col.fullName', 'Họ tên'),
      t('ex.col.dept', 'Phòng ban'), t('ex.col.position', 'Chức vụ'), t('ex.col.workDate', 'Ngày công'),
      t('ex.col.absenceType', 'Phân loại'), t('ex.col.swipeTime', 'Thời gian quẹt thẻ'),
      t('ex.col.actualTime', 'Thời gian thực tế'), t('ex.col.reason', 'Lý do'), t('ex.col.approver', 'Người duyệt'),
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1, r.empId, r.localName, r.deptName, r.postGradeName, r.arDateStr, r.itemNoName,
      `${inLabel}: ${r.inDoorTime || ''} ${outLabel}: ${r.outDoorTime || ''}`,
      `${inLabel}: ${r.fromDateTime || ''} ${outLabel}: ${r.toDateTime || ''}`,
      r.remark || '', r.updatedBy || '',
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSach');
    XLSX.writeFile(workbook, 'attendance_ex_for_batch_export.xlsx');
  }

  // ==================== Cây phòng ban ====================

  private loadDeptTree(): void {
    this.api.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(this.buildDeptTree(list ?? [])),
      error: () =>
        this.deptTreeErrorMessage.set(this.i18n.t('mep.msg.loadDeptFailed', 'Lỗi khi tải danh sách phòng ban')),
    });
  }

  private buildDeptTree(list: AuthDeptNode[]): NzTreeNodeOptions[] {
    const map = new Map<string, NzTreeNodeOptions & { parent: string }>();
    list.forEach((d) => map.set(d.id, { title: d.text, key: d.id, parent: d.parent, children: [] }));

    this.deptChildrenMap = new Map<string, string[]>();
    const roots: NzTreeNodeOptions[] = [];
    map.forEach((node) => {
      if (node.parent && node.parent !== '0' && map.has(node.parent)) {
        map.get(node.parent)!.children!.push(node);
        const siblings = this.deptChildrenMap.get(node.parent) ?? [];
        siblings.push(node.key);
        this.deptChildrenMap.set(node.parent, siblings);
      } else {
        roots.push(node);
      }
    });

    const markLeaf = (nodes: NzTreeNodeOptions[]) => {
      nodes.forEach((n) => {
        n.isLeaf = !n.children || n.children.length === 0;
        if (n.children?.length) markLeaf(n.children);
      });
    };
    markLeaf(roots);
    return roots;
  }

  /** nz-tree-select chỉ trả về key của node được tick trực tiếp - KHÔNG tự cascade xuống phòng ban con
   *  như widget DeptTree.js gốc. Backend lọc theo INSTR(...) đúng từng mã, nên phải tự mở rộng xuống
   *  các phòng ban con trước khi gửi deptNos lên (xem giải thích đầy đủ ở ManageEmpPositionInfoComponent). */
  private expandDeptSelection(selected: string[]): string[] {
    const result = new Set<string>();
    const stack = [...selected];
    while (stack.length) {
      const id = stack.pop()!;
      if (result.has(id)) continue;
      result.add(id);
      const children = this.deptChildrenMap.get(id);
      if (children) stack.push(...children);
    }
    return Array.from(result);
  }

  // ==================== Helpers ngày giờ (giữ định dạng "/" đúng bản gốc - xem docblock class) ====================

  private formatYmdSlash(d: Date | null): string {
    return d ? formatDate(d, 'yyyy/MM/dd', 'vi') : '';
  }

  private formatDt(d: Date): string {
    return formatDate(d, 'yyyy/MM/dd HH:mm', 'vi');
  }

  /** Parse 'yyyy/MM/dd HH:mm[:ss]' hoặc 'yyyy-MM-dd HH:mm[:ss]' về Date - trả null nếu chuỗi rỗng/không
   *  hợp lệ. Chấp nhận cả 2 dấu phân cách vì GET_AR_SHIFT_START_TIME/GET_AR_SHIFT_END_TIME (dùng để
   *  prefill ô "Thời gian thực tế") trả về dạng "-" trong khi FROM_TIME/TO_TIME của bảng dùng dạng "/"
   *  - đúng lý do exNormalizeDateTimeValue() bản gốc cũng tự nhận diện cả 2 dạng này. */
  private parseDt(value: string | null | undefined): Date | null {
    if (!value) return null;
    const normalized = value.trim().replace('T', ' ');
    const match = normalized.match(/^(\d{4})[/-](\d{2})[/-](\d{2}) (\d{2}):(\d{2})/);
    if (!match) return null;
    const [, y, mo, d, h, mi] = match;
    return new Date(Number(y), Number(mo) - 1, Number(d), Number(h), Number(mi));
  }
}
