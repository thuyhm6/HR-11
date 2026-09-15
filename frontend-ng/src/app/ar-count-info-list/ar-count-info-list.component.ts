import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import {
  ArCountInfoLeaveDetailRow,
  ArCountInfoLeaveItem,
  ArCountInfoLeaveSummaryRow,
  ArCountInfoOtMonth,
  ArCountInfoOtRow,
  AuthDeptNode,
  CodeItem,
  OtMonthColumn,
  ShiftOption,
} from './ar-count-info-list.model';
import { ArCountInfoListService } from './ar-count-info-list.service';

/** Nhóm AR_ITEM cần loại trừ khi build cột động cho tab "Nghỉ phép" (nhóm tăng ca) - giống view-ar-personal-list. */
const LEAVE_ITEM_GROUP = '!1433';

/** 12 cột tháng của tab "Tăng ca" - lặp *ngFor thay vì viết tay, label lấy từ key common.month.01..12 đã có sẵn. */
const MONTH_COLUMNS: OtMonthColumn[] = [
  { key: 'january', labelKey: 'common.month.01' },
  { key: 'february', labelKey: 'common.month.02' },
  { key: 'march', labelKey: 'common.month.03' },
  { key: 'april', labelKey: 'common.month.04' },
  { key: 'may', labelKey: 'common.month.05' },
  { key: 'june', labelKey: 'common.month.06' },
  { key: 'july', labelKey: 'common.month.07' },
  { key: 'august', labelKey: 'common.month.08' },
  { key: 'september', labelKey: 'common.month.09' },
  { key: 'october', labelKey: 'common.month.10' },
  { key: 'november', labelKey: 'common.month.11' },
  { key: 'december', labelKey: 'common.month.12' },
];

/** 7 loại tăng ca chi tiết trong 1 tháng - hiển thị trong modal khi bấm vào số liệu 1 tháng. */
const OT_SUBTYPES: { key: keyof ArCountInfoOtMonth; labelKey: string }[] = [
  { key: 'normalWork', labelKey: 'acil.sub.normalWork' },
  { key: 'saturday', labelKey: 'acil.sub.saturday' },
  { key: 'weeklyHoliday', labelKey: 'acil.sub.weeklyHoliday' },
  { key: 'publicHoliday', labelKey: 'acil.sub.publicHoliday' },
  { key: 'mealOtIncen', labelKey: 'acil.sub.mealOtIncen' },
  { key: 'nightIncen', labelKey: 'acil.sub.nightIncen' },
  { key: 'saturdayIncen', labelKey: 'acil.sub.saturdayIncen' },
];

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'essDept.dept', 'vdp.search.dept.placeholder', 'essDept.keyword', 'vdp.search.empKeyword.placeholder',
  'vapl.label.empType', 'common.selectAll', 'vapl.label.startDate', 'vapl.label.endDate',
  'common.shift', 'attSearch.all', 'essDept.search', 'essDept.exportExcel',
  'ar.arCountInfoList.GERENKAOQINXIANKUANG.b', 'ar.arCountInfoList.GERENJIABANXIANKUANG.b',
  'common.stt', 'common.empId', 'common.empName', 'common.deptName', 'common.totalRows', 'common.loadFail',
  'common.empType', 'essDept.year', 'mep.msg.loadDeptFailed',
  'vapl.msg.position', 'vapl.msg.normalWork', 'vapl.msg.lateEarlyGoTotal',
  'vapl.msg.noData', 'vapl.msg.loadFailed', 'vapl.msg.noDataExport',
  'apsl.modal.title', 'apsl.detail.col.shift', 'apsl.detail.col.date', 'apsl.detail.col.leaveType',
  'apsl.detail.col.startTime', 'apsl.detail.col.endTime', 'apsl.detail.col.duration', 'apsl.detail.hint',
  'apsl.msg.noDataDetail', 'apsl.msg.loadDetailFailed',
  'acil.col.teamName', 'acil.col.otTotal', 'acil.msg.loadOtFailed', 'acil.msg.noDataExport',
  'acil.sub.normalWork', 'acil.sub.saturday', 'acil.sub.weeklyHoliday', 'acil.sub.publicHoliday',
  'acil.sub.mealOtIncen', 'acil.sub.nightIncen', 'acil.sub.saturdayIncen',
  'common.month.01', 'common.month.02', 'common.month.03', 'common.month.04',
  'common.month.05', 'common.month.06', 'common.month.07', 'common.month.08',
  'common.month.09', 'common.month.10', 'common.month.11', 'common.month.12',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100];

/**
 * Hiện trạng chấm công của nhân viên (/ar/countAttendance/arCountInfoList) - gồm 2 tab dùng chung 1 bộ
 * lọc phía trên: "Nghỉ phép" tái sử dụng nguyên API của ArPersonalListService (giống hệt
 * view-ar-personal-list, chỉ khác nơi hiển thị là 1 tab thay vì cả trang); "Tăng ca" gọi API riêng
 * (ArCountInfoListController) trả tổng hợp tăng ca năm theo từng tháng. Nút Tra cứu / Xuất Excel áp
 * dụng cho tab đang được chọn (activeTabIndex).
 */
@Component({
  selector: 'app-ar-count-info-list',
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
    NzTreeSelectModule,
    NzModalModule,
    NzAlertModule,
    NzTabsModule,
    TranslatePipe,
  ],
  templateUrl: './ar-count-info-list.component.html',
  styleUrl: './ar-count-info-list.component.css',
})
export class ArCountInfoListComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly monthColumns = MONTH_COLUMNS;
  readonly otSubtypes = OT_SUBTYPES;

  readonly activeTabIndex = signal(0);

  // --- Bộ lọc dùng chung cho cả 2 tab ---
  keyword = '';
  deptNos: string[] = [];
  empTypeCode: string | null = null;
  shiftNo: string | null = null;
  startDate: Date | null = null;
  endDate: Date | null = null;

  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly deptTreeErrorMessage = signal<string | null>(null);
  readonly empTypeOptions = signal<CodeItem[]>([]);
  readonly shiftOptions = signal<ShiftOption[]>([]);

  // --- Tab "Nghỉ phép" ---
  private leaveLoaded = false;
  readonly leaveItems = signal<ArCountInfoLeaveItem[]>([]);
  readonly leaveRows = signal<ArCountInfoLeaveSummaryRow[]>([]);
  readonly leaveLoading = signal(false);
  readonly leaveErrorMessage = signal<string | null>(null);

  readonly leaveDetailVisible = signal(false);
  readonly leaveDetailTitle = signal('');
  readonly leaveDetailRows = signal<ArCountInfoLeaveDetailRow[]>([]);
  readonly leaveDetailLoading = signal(false);
  readonly leaveDetailErrorMessage = signal<string | null>(null);

  // --- Tab "Tăng ca" ---
  private otLoaded = false;
  readonly otRows = signal<ArCountInfoOtRow[]>([]);
  readonly otLoading = signal(false);
  readonly otErrorMessage = signal<string | null>(null);

  /** id -> danh sách id con trực tiếp - dùng để mở rộng lựa chọn cây phòng ban khi tra cứu. */
  private deptChildrenMap = new Map<string, string[]>();

  constructor(
    private readonly api: ArCountInfoListService,
    private readonly i18n: I18nService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
    this.loadEmpTypeOptions();
    this.loadShiftOptions();
    this.setDefaultDateRange();
    this.loadLeaveItemsThenSearch();
  }

  onTabIndexChange(index: number): void {
    this.activeTabIndex.set(index);
    if (index === 1 && !this.otLoaded) this.searchOt();
  }

  /** Tra cứu theo tab đang chọn. */
  search(): void {
    if (this.activeTabIndex() === 1) {
      this.searchOt();
    } else {
      this.searchLeave();
    }
  }

  /** Xuất excel theo tab đang chọn. */
  exportExcel(): void {
    if (this.activeTabIndex() === 1) {
      this.exportOtExcel();
    } else {
      this.exportLeaveExcel();
    }
  }

  // ==================== Tab "Nghỉ phép" ====================

  private searchLeave(): void {
    this.leaveLoading.set(true);
    this.leaveErrorMessage.set(null);
    this.api
      .getLeaveSummary({
        keyword: this.keyword,
        deptNos: this.expandDeptSelection(this.deptNos).join(','),
        empTypeCode: this.empTypeCode ?? '',
        startDate: this.formatYmd(this.startDate),
        endDate: this.formatYmd(this.endDate),
        itemGroup: LEAVE_ITEM_GROUP,
      })
      .subscribe({
        next: (rows) => {
          this.leaveRows.set(rows ?? []);
          this.leaveLoading.set(false);
          this.leaveLoaded = true;
        },
        error: () => {
          this.leaveErrorMessage.set(this.i18n.t('vapl.msg.loadFailed', 'Lỗi tải dữ liệu chấm công.'));
          this.leaveRows.set([]);
          this.leaveLoading.set(false);
          this.leaveLoaded = true;
        },
      });
  }

  private loadLeaveItemsThenSearch(): void {
    this.api.getLeaveItems(LEAVE_ITEM_GROUP).subscribe({
      next: (list) => {
        this.leaveItems.set(list ?? []);
        this.searchLeave();
      },
      error: () => {
        this.leaveItems.set([]);
        this.searchLeave();
      },
    });
  }

  /** Số lượng cột động - trả về 0 nếu không lớn hơn 0, dùng để quyết định hiện link chi tiết hay không. */
  qty(row: ArCountInfoLeaveSummaryRow, itemId: string): number {
    return parseFloat(String(row[itemId])) || 0;
  }

  /** arDateStr trả về từ backend theo YYYY/MM/DD - chuyển sang DD/MM/YYYY theo quy định hiển thị ngày. */
  formatDetailDate(s: string | null | undefined): string {
    if (!s) return '';
    const p = s.split('/');
    return p.length === 3 ? `${p[2]}/${p[1]}/${p[0]}` : s;
  }

  openLeaveDetail(row: ArCountInfoLeaveSummaryRow, item: ArCountInfoLeaveItem): void {
    const personId = String(row['PERSON_ID'] ?? '');
    this.leaveDetailTitle.set(item.itemName);
    this.leaveDetailRows.set([]);
    this.leaveDetailErrorMessage.set(null);
    this.leaveDetailVisible.set(true);
    if (!personId) return;
    this.leaveDetailLoading.set(true);
    this.api
      .getLeaveDetail(personId, item.itemId, this.formatYmd(this.startDate), this.formatYmd(this.endDate))
      .subscribe({
        next: (rows) => {
          this.leaveDetailRows.set(rows ?? []);
          this.leaveDetailLoading.set(false);
        },
        error: () => {
          this.leaveDetailErrorMessage.set(this.i18n.t('apsl.msg.loadDetailFailed', 'Tải dữ liệu thất bại.'));
          this.leaveDetailLoading.set(false);
        },
      });
  }

  closeLeaveDetail(): void {
    this.leaveDetailVisible.set(false);
  }

  private exportLeaveExcel(): void {
    const items = this.leaveItems();
    const headers = [
      this.i18n.t('common.stt', 'STT'),
      this.i18n.t('common.empId', 'Mã nhân viên'),
      this.i18n.t('common.empName', 'Họ tên'),
      this.i18n.t('common.deptName', 'Phòng ban'),
      this.i18n.t('vapl.msg.position', 'Chức vụ'),
      this.i18n.t('vapl.msg.normalWork', 'Tổng giờ công'),
      this.i18n.t('vapl.msg.lateEarlyGoTotal', 'Tổng (muộn/sớm/ra ngoài)'),
      ...items.map((it) => it.itemName),
    ];
    const dataRows = this.leaveRows().map((r, i) => [
      i + 1,
      r['EMPID'],
      r['LOCAL_NAME'],
      r['DEPT_NAME'],
      r['POSITION_NAME'],
      this.fmtQty(r['NORMAL_WORK']),
      this.fmtQty(r['LATE_EARLY_GO_TOTAL']),
      ...items.map((it) => this.fmtQty(r[it.itemId])),
    ]);
    this.writeExcelFile(headers, dataRows, 'ChamCong', 'tinh_hinh_nghi_phep_nhan_vien.xlsx');
  }

  // ==================== Tab "Tăng ca" ====================

  private searchOt(): void {
    this.otLoading.set(true);
    this.otErrorMessage.set(null);
    this.api
      .getOtSummary({
        keyword: this.keyword,
        deptNos: this.expandDeptSelection(this.deptNos).join(','),
        empTypeCode: this.empTypeCode ?? '',
        shiftNo: this.shiftNo ?? '',
        startTime: this.formatDmy(this.startDate),
      })
      .subscribe({
        next: (rows) => {
          this.otRows.set(rows ?? []);
          this.otLoading.set(false);
          this.otLoaded = true;
        },
        error: () => {
          this.otErrorMessage.set(this.i18n.t('acil.msg.loadOtFailed', 'Lỗi tải dữ liệu tăng ca.'));
          this.otRows.set([]);
          this.otLoading.set(false);
          this.otLoaded = true;
        },
      });
  }

  /** row[column.key] chỉ đúng kiểu ArCountInfoOtMonth với các cột tháng (monthColumns) - tách riêng
   *  hàm này để dùng an toàn trong template thay vì ép kiểu trực tiếp trong HTML. */
  monthValue(row: ArCountInfoOtRow, column: OtMonthColumn): ArCountInfoOtMonth {
    return row[column.key] as ArCountInfoOtMonth;
  }

  private exportOtExcel(): void {
    const headers = [
      this.i18n.t('common.stt', 'STT'),
      this.i18n.t('common.empId', 'Mã nhân viên'),
      this.i18n.t('common.empName', 'Họ tên'),
      this.i18n.t('common.deptName', 'Phòng ban'),
      this.i18n.t('acil.col.teamName', 'Tổ/Nhóm'),
      this.i18n.t('vapl.msg.position', 'Chức vụ'),
      this.i18n.t('common.empType', 'Loại nhân viên'),
      this.i18n.t('common.shift', 'Ca'),
      this.i18n.t('essDept.year', 'Năm'),
      this.i18n.t('acil.col.otTotal', 'Tổng tăng ca năm'),
      // Mỗi tháng x 7 loại tăng ca -> header dạng "Tháng 01 - Ngày thường" cho dễ đọc trên 1 hàng tiêu đề phẳng.
      ...this.monthColumns.flatMap((mc) =>
        this.otSubtypes.map((st) => `${this.i18n.t(mc.labelKey, mc.labelKey)} - ${this.i18n.t(st.labelKey, st.labelKey)}`),
      ),
    ];
    const dataRows = this.otRows().map((r, i) => [
      i + 1,
      r.empId,
      r.localName,
      r.deptName,
      r.teamName,
      r.postGradeName,
      r.empTypeName,
      r.shiftName,
      r.year,
      this.fmtQty(r.otTotal),
      ...this.monthColumns.flatMap((mc) =>
        this.otSubtypes.map((st) => this.fmtQty(this.monthValue(r, mc)[st.key])),
      ),
    ]);
    this.writeExcelFile(headers, dataRows, 'TangCa', 'tinh_hinh_tang_ca_nhan_vien.xlsx');
  }

  // ==================== Dùng chung ====================

  /** Định dạng số lượng: bỏ số 0 vô nghĩa, giữ tối đa 2 chữ số thập phân. */
  fmtQty(v: unknown): string {
    const n = parseFloat(String(v));
    if (isNaN(n) || n === 0) return '0';
    return n % 1 === 0 ? String(n) : n.toFixed(2).replace(/\.?0+$/, '');
  }

  private writeExcelFile(headers: unknown[], dataRows: unknown[][], sheetName: string, fileName: string): void {
    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
    XLSX.writeFile(workbook, fileName);
  }

  /** Mặc định: ngày 25 tháng trước đến ngày 24 tháng này - giống bản Thymeleaf gốc (vaplDefaultDateRange). */
  private setDefaultDateRange(): void {
    const now = new Date();
    const y = now.getFullYear();
    const m = now.getMonth(); // 0-based
    const prevY = m === 0 ? y - 1 : y;
    const prevM = m === 0 ? 11 : m - 1;

    this.startDate = new Date(prevY, prevM, 25);
    this.endDate = new Date(y, m, 24);
  }

  private formatYmd(d: Date | null): string {
    return d ? formatDate(d, 'yyyy/MM/dd', 'vi') : '';
  }

  /** Backend tab "Tăng ca" nhận startTime theo định dạng DD/MM/YYYY (xem ArCountInfoListMapper.xml). */
  private formatDmy(d: Date | null): string {
    return d ? formatDate(d, 'dd/MM/yyyy', 'vi') : '';
  }

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

  /** nz-tree-select chỉ trả về key của node được tick trực tiếp - phải tự mở rộng xuống phòng ban con
   *  trước khi gửi lên backend (giống hệt view-ar-personal-list / manage-emp-position-info). */
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

  private loadEmpTypeOptions(): void {
    this.api.getCodeList('13864').subscribe((list) => this.empTypeOptions.set(list ?? []));
  }

  private loadShiftOptions(): void {
    this.api.getShiftOptions().subscribe({
      next: (list) => this.shiftOptions.set(list ?? []),
      error: () => this.shiftOptions.set([]),
    });
  }
}
