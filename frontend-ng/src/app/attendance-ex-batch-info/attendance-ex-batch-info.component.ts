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
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { AttendanceExBatchInfoService } from './attendance-ex-batch-info.service';
import { ApplyPayloadRow, AttendanceExApiRow, AttendanceExRow, AuthDeptNode } from './attendance-ex-batch-info.model';
import { PAGE_SIZE_OPTIONS } from '../shared/table.constants';

/** Toàn bộ là key gốc của viewAttendanceExForBatchInfoList.jsp, đã có đủ 5 file messages*.properties. */
const I18N_KEYS = [
  'hrm.empinfo.nameAndEmpid', 'hr.viewPersonalInfo.title.DEPTNAME', 'org.title.DATE', 'ess.infoApply.yichangleixing',
  'org.title.PLEASE_SELECT', 'ar.monthwork.title.kuanggong', 'ar.monthwork.title.EarlyLeave', 'ar.monthwork.title.Lateness',
  'ess.title.LOUKA', 'ess.infoApply.in_door_card', 'ess.infoApply.out_door_card', 'ess.message.all_reaction',
  'org.title.SELECT', 'display.paecc.shenqing', 'hrm.empinfo.EXPORT', 'ess.infoApply.EMPID', 'ess.infoApply.NAME',
  'ess.infoApply.DEPT', 'ess.infoApply.attendance_date', 'ess.infoApply.card_clock_time', 'ar.viewardetail.title.dateduan',
  'ess.infoApply.Reason', 'hrm.contractInfo.APPROVAL_PERSON', 'ess.infoApply.PLEASE_SELECT_OPERTE.Z',
  'ess.infoApply.PLEASE_SELECT_CORRECT_TIME.Z', 'ar.alert.message.viewardetail.choosetoadd',
  'ar.alert.message.viewArAnnualStandard.consubmit', 'alert.message.add_fail', 'alert.message.save_success', 'common.loadFail',
  'common.totalRows',
];

/** 4 loại bất thường được phép xin phép - đúng <select name="seach_ITEM_NO"> bản gốc. */
const ITEM_NO_OPTIONS: { value: string; labelKey: string; fallback: string }[] = [
  { value: '141443', labelKey: 'ar.monthwork.title.kuanggong', fallback: 'Nghỉ không phép' },
  { value: '141442', labelKey: 'ar.monthwork.title.EarlyLeave', fallback: 'Về sớm' },
  { value: '141441', labelKey: 'ar.monthwork.title.Lateness', fallback: 'Đến muộn' },
  { value: '14015448', labelKey: 'ess.title.LOUKA', fallback: 'Quên quẹt thẻ' },
];

/** Giờ 00..23 và các mốc phút của ô "Thực hiện tất cả" - đúng các <select> IN_TIME/IN_MI bản gốc. */
const HOURS = Array.from({ length: 24 }, (_, h) => String(h).padStart(2, '0'));
const BULK_MINUTES = ['00', '02', '15', '17', '30', '32', '45', '47'];

/** Bản gốc: mở trang mặc định cả tháng, nếu quá 2000 dòng thì chỉ lấy ngày hôm qua. */
const FIRST_LOAD_MAX_ROWS = 2000;

/**
 * Xin phép chấm công bất thường hàng loạt cho cấp dưới - bản Angular của
 * ess/infoApplyAttendance/viewAttendanceExForBatchInfoList.jsp (Hanwha_HTSV, DWZ + DataTables).
 * Danh sách đi muộn / về sớm / quên quẹt thẻ / nghỉ không phép chưa xin phép; quản lý nhập giờ vào/ra thực
 * tế (ngày + giờ + phút) và lý do rồi bấm "Xin phép". API ở EssInfoApplyAttendanceController.
 *
 * Khác biệt cố ý: kiểm tra chốt công (AR_GET_ATT_EX_CLASH) chạy ở server nên chặn được thật sự (bản gốc gọi
 * ajax bất đồng bộ); tuyến duyệt dự kiến lấy 1 lần cho cả trang thay vì gọi đồng bộ từng dòng.
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
    NzModalModule,
    TranslatePipe,
  ],
  templateUrl: './attendance-ex-batch-info.component.html',
  styleUrl: './attendance-ex-batch-info.component.css',
})
export class AttendanceExBatchInfoComponent implements OnInit {
  readonly itemNoOptions = ITEM_NO_OPTIONS;
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly hours = HOURS;
  readonly bulkMinutes = BULK_MINUTES;

  readonly rows = signal<AttendanceExRow[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly applying = signal(false);
  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);

  keyword = '';
  deptNos: string[] = [];
  fromDate: Date | null = null;
  toDate: Date | null = null;
  itemNo: string | null = null;

  // "Thực hiện tất cả" - mặc định 08:00 / 17:00 đúng bản gốc
  bulkInDate: Date | null = null;
  bulkInHour = '08';
  bulkInMinute = '00';
  bulkOutDate: Date | null = null;
  bulkOutHour = '17';
  bulkOutMinute = '00';

  private firstLoad = true;
  private deptChildrenMap = new Map<string, string[]>();

  constructor(
    private readonly api: AttendanceExBatchInfoService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    const now = new Date();
    this.fromDate = new Date(now.getFullYear(), now.getMonth(), 1);
    this.toDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    this.loadDeptTree();
    this.search();
  }

  private t(key: string, fallback: string): string {
    return this.i18n.t(key, fallback);
  }

  private showError(msg: string): void {
    this.message.error(msg, { nzDuration: 6000 });
  }

  search(): void {
    const firstLoad = this.firstLoad;
    this.firstLoad = false;
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api
      .getList({
        keyword: this.keyword.trim(),
        deptNos: this.expandDeptSelection(this.deptNos).join(','),
        fromDate: this.formatYmdSlash(this.fromDate),
        toDate: this.formatYmdSlash(this.toDate),
        itemNo: this.itemNo ?? '',
      })
      .subscribe({
        next: (list) => {
          // Lần mở trang: quá 2000 dòng trong tháng thì chỉ lấy ngày hôm qua (đúng bản gốc)
          if (firstLoad && (list?.length ?? 0) > FIRST_LOAD_MAX_ROWS) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            this.fromDate = yesterday;
            this.toDate = yesterday;
            this.search();
            return;
          }
          const rows = (list ?? []).map((r) => this.toRow(r));
          this.rows.set(rows);
          this.loading.set(false);
          this.loadAffirmors(rows);
        },
        error: () => {
          this.errorMessage.set(this.t('common.loadFail', 'Tải dữ liệu thất bại!'));
          this.rows.set([]);
          this.loading.set(false);
        },
      });
  }

  private toRow(r: AttendanceExApiRow): AttendanceExRow {
    return {
      ...r,
      selected: false,
      inDate: this.parseDatePart(r.shiftStartTime) ?? this.parseDatePart(r.arDateStr),
      inHour: '',
      inMinute: '',
      outDate: this.parseDatePart(r.shiftEndTime) ?? this.parseDatePart(r.arDateStr),
      outHour: '',
      outMinute: '',
      affirmStr: '',
    };
  }

  /** Tuyến duyệt dự kiến cho từng NV (getAffirmor_ess3434 bản gốc) - 1 request cho cả danh sách. */
  private loadAffirmors(rows: AttendanceExRow[]): void {
    const personIds = Array.from(new Set(rows.map((r) => r.personId).filter((id) => !!id)));
    if (!personIds.length) return;
    this.api.getAffirmorPreview(personIds).subscribe({
      next: (map) => {
        rows.forEach((r) => (r.affirmStr = map?.[r.personId] ?? ''));
        this.rows.set([...rows]);
      },
      error: () => undefined,
    });
  }

  trackByRow = (_: number, row: AttendanceExRow): string =>
    row.applyNo ? String(row.applyNo) : [row.personId, row.arDateStr, row.itemNo].join('|');

  /** Chỉ dòng chưa khóa (LOCK_YN = N) mới được chọn xin phép. */
  canSelect(row: AttendanceExRow): boolean {
    return row.lockYn === 'N';
  }

  private selectableRows(): AttendanceExRow[] {
    return this.rows().filter((r) => this.canSelect(r));
  }

  get allSelected(): boolean {
    const rows = this.selectableRows();
    return rows.length > 0 && rows.every((r) => r.selected);
  }

  get someSelected(): boolean {
    return this.selectableRows().some((r) => r.selected) && !this.allSelected;
  }

  toggleSelectAll(checked: boolean): void {
    this.selectableRows().forEach((r) => (r.selected = checked));
  }

  /** Nhập lý do thì tự tick dòng - đúng editable onblur bản gốc. */
  onRemarkChange(row: AttendanceExRow, value: string): void {
    row.remark = value;
    if (this.canSelect(row)) row.selected = true;
  }

  /** Chỉ cho nhập số trong giới hạn (giờ 0-23, phút 0-59) - đúng class "digits" min/max bản gốc. */
  normalizeNumber(value: string, max: number): string {
    const digits = (value ?? '').replace(/\D/g, '').slice(0, 2);
    if (!digits) return '';
    return Number(digits) > max ? String(max) : digits;
  }

  // ==================== Thực hiện tất cả ====================

  /** Áp ngày + giờ vào/ra cho các dòng đã tick - đúng ex_fillItem() bản gốc. */
  fillSelected(): void {
    const selected = this.rows().filter((r) => r.selected);
    if (!selected.length) {
      this.showError(this.t('ess.infoApply.PLEASE_SELECT_OPERTE.Z', 'Xin chọn đối tượng cần thực hiện'));
      return;
    }
    selected.forEach((row) => {
      row.inDate = this.bulkInDate;
      row.inHour = this.bulkInHour;
      row.inMinute = this.bulkInMinute;
      row.outDate = this.bulkOutDate;
      row.outHour = this.bulkOutHour;
      row.outMinute = this.bulkOutMinute;
    });
    this.rows.set([...this.rows()]);
  }

  // ==================== Xin phép ====================

  applySelected(): void {
    const selected = this.rows().filter((r) => r.selected && this.canSelect(r));
    if (!selected.length) {
      this.showError(this.t('ar.alert.message.viewardetail.choosetoadd', 'Xin chọn dữ liệu cần thêm'));
      return;
    }
    for (const row of selected) {
      if (!row.inDate || row.inHour === '' || !row.outDate || row.outHour === '') {
        const label = row.localName ? `${row.localName}: ` : '';
        this.showError(label + this.t('ess.infoApply.PLEASE_SELECT_CORRECT_TIME.Z', 'Xin chọn thời gian chính xác'));
        return;
      }
    }
    this.modal.confirm({
      nzTitle: this.t('display.paecc.shenqing', 'Xin phép'),
      nzContent: this.t('ar.alert.message.viewArAnnualStandard.consubmit', 'Đồng ý lưu không?'),
      nzOnOk: () => this.runApply(selected),
    });
  }

  private runApply(selected: AttendanceExRow[]): void {
    const payload: ApplyPayloadRow[] = selected.map((row) => ({
      applyNo: row.applyNo || '',
      personId: row.personId,
      empId: row.empId,
      localName: row.localName,
      itemNo: row.itemNo,
      arDateStr: row.arDateStr,
      fromDateTime: row.fromDateTime || '',
      toDateTime: row.toDateTime || '',
      inTime: this.composeDateTime(row.inDate, row.inHour, row.inMinute),
      outTime: this.composeDateTime(row.outDate, row.outHour, row.outMinute),
      workHour: row.workHour || '',
      remark: row.remark || '',
    }));
    this.applying.set(true);
    this.api.apply(payload).subscribe({
      next: (res) => {
        this.applying.set(false);
        if (res?.success) {
          this.message.success(this.t('alert.message.save_success', 'Lưu thành công!'));
          this.search();
        } else {
          this.showError(res?.error || this.t('alert.message.add_fail', 'Thêm thất bại!'));
        }
      },
      error: () => {
        this.applying.set(false);
        this.showError(this.t('alert.message.add_fail', 'Thêm thất bại!'));
      },
    });
  }

  // ==================== Xuất excel (client-side, thay /disc/autoExcel/exportLOtImportExcel?SQL_SEQMEAN=314) ====================

  exportExcel(): void {
    const inLabel = this.t('ess.infoApply.in_door_card', 'Vào:');
    const outLabel = this.t('ess.infoApply.out_door_card', 'Ra:');
    const headers = [
      'NO', this.t('ess.infoApply.EMPID', 'Mã nhân viên'), this.t('ess.infoApply.NAME', 'Họ tên'),
      this.t('ess.infoApply.DEPT', 'Phòng ban'), this.t('ess.infoApply.attendance_date', 'Ngày công'),
      this.t('ess.infoApply.yichangleixing', 'Phân loại'), this.t('ess.infoApply.card_clock_time', 'Thời gian quẹt thẻ'),
      this.t('ess.infoApply.Reason', 'Lý do'), this.t('hrm.contractInfo.APPROVAL_PERSON', 'Người duyệt'),
    ];
    const data = this.rows().map((r, i) => [
      i + 1, r.empId, r.localName, r.deptName, this.displayDate(r.arDateStr), r.itemNoName,
      `${inLabel}${r.inDoorTime || ''} ${outLabel}${r.outDoorTime || ''}`, r.remark || '',
      (r.affirmStr || '').replace(/&nbsp;/g, ' ').replace(/<br\s*\/?>/gi, '\n').trim(),
    ]);
    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...data]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSach');
    XLSX.writeFile(workbook, `attendance_ex_for_batch_${formatDate(new Date(), 'yyyyMMddHHmm', 'vi')}.xlsx`);
  }

  // ==================== Cây phòng ban ====================

  private loadDeptTree(): void {
    this.api.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(this.buildDeptTree(list ?? [])),
      error: () => undefined,
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
    const markLeaf = (nodes: NzTreeNodeOptions[]) =>
      nodes.forEach((n) => {
        n.isLeaf = !n.children || n.children.length === 0;
        if (n.children?.length) markLeaf(n.children);
      });
    markLeaf(roots);
    return roots;
  }

  /** nz-tree-select không tự cascade xuống phòng ban con -> tự mở rộng trước khi gửi (backend lọc INSTR từng mã). */
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

  // ==================== Helpers ngày giờ ====================

  /** Ngày công 'yyyy/MM/dd' -> 'dd/MM/yyyy' (bản gốc hiển thị DD/MM/YYYY). */
  displayDate(value: string): string {
    const d = this.parseDatePart(value);
    return d ? formatDate(d, 'dd/MM/yyyy', 'vi') : value ?? '';
  }

  /** Backend so sánh AR_DATE_STR bằng chuỗi thô dạng 'yyyy/MM/dd' nên phải giữ dấu "/". */
  private formatYmdSlash(d: Date | null): string {
    return d ? formatDate(d, 'yyyy/MM/dd', 'vi') : '';
  }

  private composeDateTime(date: Date | null, hour: string, minute: string): string {
    if (!date) return '';
    return `${formatDate(date, 'yyyy/MM/dd', 'vi')} ${hour.padStart(2, '0')}:${(minute || '0').padStart(2, '0')}`;
  }

  /** Lấy phần ngày của chuỗi 'yyyy/MM/dd[ HH:mm]' hoặc 'yyyy-MM-dd[ HH:mm]'. */
  private parseDatePart(value: string | null | undefined): Date | null {
    if (!value) return null;
    const match = value.trim().match(/^(\d{4})[/-](\d{2})[/-](\d{2})/);
    if (!match) return null;
    const [, y, mo, d] = match;
    return new Date(Number(y), Number(mo) - 1, Number(d));
  }
}
