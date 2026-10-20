import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
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
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import {
  AuthDeptNode,
  CodeItem,
  OtApplyPersonalListDetailRow,
  OtApplyPersonalListRow,
  OtType,
} from './view-ot-apply-personal-list.model';
import { ViewOtApplyPersonalListService } from './view-ot-apply-personal-list.service';
import { PAGE_SIZE_OPTIONS } from '../shared/table.constants';

/** Mã cha danh mục Loại nhân viên - đúng parentNo="13864" của JSP cũ. */
const EMP_TYPE_PARENT_CODE = '13864';
/** Mã cha danh mục Tổ ca (班组) - đúng parentNo="400223" của JSP cũ. */
const SHIFT_PARENT_CODE = '400223';

type NumField = 'otTotal' | 'weekdayOtTotal' | 'weekendOtTotal' | 'holidayOtTotal'
  | 'mealOtIncen' | 'nightIncen' | 'saturdayIncen';

interface VoaplNumCol {
  field: NumField;
  key: string;
  fallback: string;
  /** Hiển thị kèm đơn vị "Tiếng" - giống JSP cũ (chỉ 4 cột giờ tăng ca). */
  hour: boolean;
  /** null = không có link chi tiết (cột Tổng - giống JSP cũ). */
  otType: OtType | null;
  sortFn: (a: OtApplyPersonalListRow, b: OtApplyPersonalListRow) => number;
}

const numSort = (field: NumField) => (a: OtApplyPersonalListRow, b: OtApplyPersonalListRow) =>
  (Number(a[field]) || 0) - (Number(b[field]) || 0);

/** Các cột số theo đúng thứ tự JSP cũ - dùng lại đúng message key của JSP cũ (đã có đủ 5 file properties). */
const NUM_COLS: VoaplNumCol[] = [
  { field: 'otTotal', key: 'ess.viewpersonalpainfo.heji', fallback: 'Tổng', hour: true, otType: null },
  { field: 'weekdayOtTotal', key: 'ar.viewitemparameter.title.pingshi', fallback: 'Ngày thường', hour: true, otType: 'WEEKDAY' },
  { field: 'weekendOtTotal', key: 'ar.viewitemparameter.title.zhoumo', fallback: 'Cuối tuần', hour: true, otType: 'WEEKEND' },
  { field: 'holidayOtTotal', key: 'ar.arForDeptCountInfoList.FADINGJIEJIARI.b', fallback: 'Ngày lễ', hour: true, otType: 'HOLIDAY' },
  { field: 'mealOtIncen', key: 'ess.viewMonthDetailList.OT_INCENTIVE.b', fallback: 'Hỗ trợ ăn ca', hour: false, otType: 'MEAL' },
  { field: 'nightIncen', key: 'ess.viewMonthDetailList.NIGHT_INCENTIVE.b', fallback: 'Hỗ trợ làm đêm', hour: false, otType: 'NIGHT' },
  { field: 'saturdayIncen', key: 'ess.viewMonthDetailList.OT_SATURDAY_INCENTIVE.b', fallback: 'Hỗ trợ làm thứ 7', hour: false, otType: 'SATURDAY' },
].map((c) => ({ ...c, sortFn: numSort(c.field as NumField) })) as VoaplNumCol[];

/** Các key message.properties dùng trong trang - toàn bộ là key sẵn có (phần lớn dùng lại đúng key của JSP cũ). */
const I18N_KEYS = [
  'hr.viewPersonalInfo.title.DEPTNAME', 'vdp.search.dept.placeholder',
  'hr.viewContractByInsert.title.EMPIDANDLOCALNAME', 'vdp.search.empKeyword.placeholder',
  'ess.infoApply.employee_type', 'hr.viewPersonalInfo.title.banzu', 'common.selectAll',
  'public.title.startDate', 'public.title.endDate',
  'public.title.search', 'essDept.clearFilter', 'ess.infoApply.export_to_Excel', 'common.quickFilter',
  'common.stt', 'ess.infoApply.EMPID', 'public.title.empName', 'ess.infoApply.DEPT_NAME', 'ess.infoApply.Rank',
  'ar.viewitemparameter.title.xiaoshi', 'common.totalRows', 'otsl.msg.noData', 'otsl.msg.noDataToExport',
  'otsl.msg.loadOtFailed', 'mep.msg.loadDeptFailed',
  // Popup chi tiết (viewOtApplySingleList.jsp cũ)
  'otsl.modal.detailTitle', 'ess.message.work_shift', 'ess.infoApply.working_hours', 'ess.infoApply.date',
  'ess.infoApply.overtime_type', 'ess.infoApply.in_door_time', 'ess.infoApply.out_door_time',
  'ess.infoApply.title.startTime', 'ess.infoApply.end_time', 'ess.infoApply.duration',
  'ar.viewsummaryparameteritem.title.hour', 'otsl.msg.noDataDetail', 'otsl.msg.loadDetailFailed',
  ...NUM_COLS.map((c) => c.key),
];

/**
 * Tình hình tăng ca nhân viên (个人加班现状) - chuyển đổi từ JSP /ess/viewDept/viewOtApplyPersonalList
 * (Hanwha_HTSV). Giữ nguyên bộ lọc (phòng ban, mã/tên NV, loại NV, từ ngày - đến ngày, tổ ca) và các cột
 * cố định của JSP cũ (Tổng / Ngày thường / Cuối tuần / Ngày lễ / Hỗ trợ ăn ca / làm đêm / làm thứ 7);
 * click số giờ mở popup chi tiết (thay viewOtApplySingleList.jsp). nz-table phân trang client-side
 * (BE trả toàn bộ danh sách - giống dataTable cũ), lọc nhanh client-side thay ô "sSearch" của dataTable,
 * export excel .xlsx client-side bằng SheetJS (thay autoExcel SQL_SEQMEAN=147).
 */
@Component({
  selector: 'app-view-ot-apply-personal-list',
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
    TranslatePipe,
  ],
  templateUrl: './view-ot-apply-personal-list.component.html',
  styleUrl: './view-ot-apply-personal-list.component.css',
})
export class ViewOtApplyPersonalListComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly numCols = NUM_COLS;

  readonly rows = signal<OtApplyPersonalListRow[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly deptTreeErrorMessage = signal<string | null>(null);

  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly empTypeOptions = signal<CodeItem[]>([]);
  readonly shiftOptions = signal<CodeItem[]>([]);

  /** Dùng signal để computed filteredRows tự tính lại khi gõ lọc nhanh. */
  readonly quickFilter = signal('');
  readonly filteredRows = computed(() => {
    const kw = this.quickFilter().trim().toLowerCase();
    if (!kw) return this.rows();
    return this.rows().filter((r) =>
      [r.empId, r.localName, r.deptName, r.postName].some((v) => (v || '').toLowerCase().includes(kw)),
    );
  });

  readonly detailVisible = signal(false);
  readonly detailTitle = signal('');
  readonly detailRows = signal<OtApplyPersonalListDetailRow[]>([]);
  readonly detailLoading = signal(false);
  readonly detailErrorMessage = signal<string | null>(null);

  /** id -> danh sách id con trực tiếp - dùng để mở rộng lựa chọn cây phòng ban khi tra cứu. */
  private deptChildrenMap = new Map<string, string[]>();

  keyword = '';
  deptNos: string[] = [];
  empTypeCode: string | null = null;
  shiftNo: string | null = null;
  startDate: Date | null = null;
  endDate: Date | null = null;

  /** Khoảng ngày của lần tra cứu gần nhất - popup chi tiết dùng đúng khoảng ngày của dữ liệu đang hiển thị. */
  private searchedStart = '';
  private searchedEnd = '';

  constructor(
    private readonly api: ViewOtApplyPersonalListService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
    this.api.getCodeList(EMP_TYPE_PARENT_CODE).subscribe((list) => this.empTypeOptions.set(list ?? []));
    this.api.getCodeList(SHIFT_PARENT_CODE).subscribe((list) => this.shiftOptions.set(list ?? []));
    this.setDefaultDateRange();
    this.search();
  }

  search(): void {
    this.searchedStart = this.formatDmy(this.startDate);
    this.searchedEnd = this.formatDmy(this.endDate);
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api
      .getSummary({
        keyword: this.keyword.trim(),
        deptNos: this.expandDeptSelection(this.deptNos).join(','),
        empTypeCode: this.empTypeCode ?? '',
        shiftNo: this.shiftNo ?? '',
        startDate: this.searchedStart,
        endDate: this.searchedEnd,
      })
      .subscribe({
        next: (rows) => {
          this.rows.set(rows ?? []);
          this.loading.set(false);
        },
        error: () => {
          this.errorMessage.set(this.i18n.t('otsl.msg.loadOtFailed', 'Không tải được dữ liệu tình hình tăng ca.'));
          this.rows.set([]);
          this.loading.set(false);
        },
      });
  }

  clearSearch(): void {
    this.keyword = '';
    this.deptNos = [];
    this.empTypeCode = null;
    this.shiftNo = null;
    this.quickFilter.set('');
    this.setDefaultDateRange();
    this.search();
  }

  /** Định dạng số: bỏ số 0 vô nghĩa, tối đa 2 chữ số thập phân. */
  fmt(v: number | string | null | undefined): string {
    const n = Number(v);
    if (v === null || v === undefined || v === '' || isNaN(n)) return '0';
    return n % 1 === 0 ? String(n) : n.toFixed(2).replace(/\.?0+$/, '');
  }

  num(v: number | null | undefined): number {
    return Number(v) || 0;
  }

  // ==================== Popup chi tiết (thay viewOtApplySingleList.jsp) ====================

  openDetail(row: OtApplyPersonalListRow, col: VoaplNumCol): void {
    if (!col.otType) return;
    this.detailTitle.set(`${this.i18n.t(col.key, col.fallback)} - ${row.empId} ${row.localName ?? ''}`);
    this.detailRows.set([]);
    this.detailErrorMessage.set(null);
    this.detailVisible.set(true);
    this.detailLoading.set(true);
    this.api.getDetail(row.personId, col.otType, this.searchedStart, this.searchedEnd).subscribe({
      next: (rows) => {
        this.detailRows.set(rows ?? []);
        this.detailLoading.set(false);
      },
      error: () => {
        this.detailErrorMessage.set(this.i18n.t('otsl.msg.loadDetailFailed', 'Tải dữ liệu thất bại.'));
        this.detailLoading.set(false);
      },
    });
  }

  closeDetail(): void {
    this.detailVisible.set(false);
  }

  // ==================== Xuất excel (.xlsx, đúng danh sách đang lọc trên giao diện) ====================

  exportExcel(): void {
    const data = this.filteredRows();
    if (!data.length) {
      this.message.warning(this.i18n.t('otsl.msg.noDataToExport', 'Không có dữ liệu để xuất.'));
      return;
    }
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const hourUnit = t('ar.viewitemparameter.title.xiaoshi', 'Tiếng');
    const headers = [
      t('common.stt', 'STT'), t('ess.infoApply.EMPID', 'Mã nhân viên'), t('public.title.empName', 'Họ tên'),
      t('ess.infoApply.DEPT_NAME', 'Phòng ban'), t('ess.infoApply.Rank', 'Chức vụ'),
      ...NUM_COLS.map((c) => (c.hour ? `${t(c.key, c.fallback)} (${hourUnit})` : t(c.key, c.fallback))),
    ];
    const dataRows = data.map((r, i) => [
      i + 1, r.empId, r.localName, r.deptName, r.postName,
      ...NUM_COLS.map((c) => this.num(r[c.field])),
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'OT');
    const range = `${this.searchedStart}_${this.searchedEnd}`.replace(/\//g, '');
    XLSX.writeFile(workbook, `tinh_hinh_tang_ca_${range}.xlsx`);
  }

  // ==================== Ngày mặc định ====================

  /** Giống JSP cũ: mặc định từ ngày 1 tháng hiện tại đến hôm nay. */
  private setDefaultDateRange(): void {
    const now = new Date();
    this.startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    this.endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  }

  private formatDmy(d: Date | null): string {
    return d ? formatDate(d, 'dd/MM/yyyy', 'en-US') : '';
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

  /** nz-tree-select chỉ trả về key node được tick trực tiếp - tự mở rộng xuống phòng ban con (giống
   *  START WITH ... CONNECT BY của SQL cũ) trước khi gửi lên backend. */
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
}
