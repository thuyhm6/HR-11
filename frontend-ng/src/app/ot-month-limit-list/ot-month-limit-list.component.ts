import { CommonModule } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { OtMonthLimitDeptNode, OtMonthLimitPeriod, OtMonthLimitPeriodColumn, OtMonthLimitRow } from './ot-month-limit-list.model';
import { OtMonthLimitListService } from './ot-month-limit-list.service';

/** 13 nhóm cột kỳ trên bảng: "Cả năm" (yearTotal, nhãn ghép động với năm đang chọn) + 12 tháng. */
const PERIOD_COLUMNS: OtMonthLimitPeriodColumn[] = [
  { key: 'yearTotal', labelKey: null },
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

/** 5 cột con trong mỗi nhóm kỳ - thứ tự hiển thị theo đúng mẫu tham khảo (Tổng/OT duyệt/PC t7 duyệt/OT đăng ký/PC t7 đăng ký). */
const OT_LIMIT_SUBTYPES: { key: keyof OtMonthLimitPeriod; labelKey: string }[] = [
  { key: 'total', labelKey: 'omll.col.total' },
  { key: 'approval', labelKey: 'omll.col.otApproval' },
  { key: 'satApproval', labelKey: 'omll.col.satApproval' },
  { key: 'request', labelKey: 'omll.col.otRequest' },
  { key: 'satRequest', labelKey: 'omll.col.satRequest' },
];

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'common.year', 'essDept.keyword', 'vdp.search.empKeyword.placeholder',
  'essDept.dept', 'vdp.search.dept.placeholder', 'mep.msg.loadDeptFailed',
  'essDept.search', 'essDept.exportExcel', 'common.search',
  'common.stt', 'common.empId', 'common.empName', 'common.totalRows',
  'vapl.msg.noData', 'omll.msg.loadFailed',
  'omll.col.total', 'omll.col.otApproval', 'omll.col.satApproval', 'omll.col.otRequest', 'omll.col.satRequest',
  'common.month.01', 'common.month.02', 'common.month.03', 'common.month.04',
  'common.month.05', 'common.month.06', 'common.month.07', 'common.month.08',
  'common.month.09', 'common.month.10', 'common.month.11', 'common.month.12',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100];

/**
 * Theo dõi tăng ca tháng (/ess/infoApply/viewOverTimeLimtShenPiList) - tổng hợp tăng ca (Tổng/Đã duyệt/
 * Đăng ký, cả tăng ca thường lẫn phụ cấp thứ 7) cả năm và từng tháng cho từng nhân viên. Cấu trúc bảng
 * (header 2 hàng rowspan/colspan, không dùng nzScroll) và ô lọc phòng ban (nz-tree-select) tham khảo lại
 * tab "Tăng ca" của ar-count-info-list; layout form + nz-table tham khảo manage-emp-position-info.
 */
@Component({
  selector: 'app-ot-month-limit-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzTreeSelectModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './ot-month-limit-list.component.html',
  styleUrl: './ot-month-limit-list.component.css',
})
export class OtMonthLimitListComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly periodColumns = PERIOD_COLUMNS;
  readonly otLimitSubtypes = OT_LIMIT_SUBTYPES;
  readonly years = this.buildYearOptions();

  year = new Date().getFullYear().toString();
  keyword = '';
  deptNos: string[] = [];
  /** Ô lọc nhanh phía trên bảng (lọc trên dữ liệu đã tải, không gọi lại API) - tương ứng ô "Search:" trong ảnh mẫu. */
  quickSearch = '';

  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly deptTreeErrorMessage = signal<string | null>(null);

  readonly rows = signal<OtMonthLimitRow[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  /** Lọc theo mã nhân viên/họ tên ngay trên danh sách đã tải - áp dụng cho ô "Search:" phía trên bảng. */
  readonly filteredRows = computed(() => {
    const kw = this.quickSearch.trim().toLowerCase();
    if (!kw) return this.rows();
    return this.rows().filter(
      (r) => (r.empId ?? '').toLowerCase().includes(kw) || (r.localName ?? '').toLowerCase().includes(kw),
    );
  });

  /** id -> danh sách id con trực tiếp - dùng để mở rộng lựa chọn cây phòng ban khi tra cứu. */
  private deptChildrenMap = new Map<string, string[]>();

  constructor(
    private readonly api: OtMonthLimitListService,
    private readonly i18n: I18nService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
    // Không tự tra cứu ngay khi mở trang - chỉ tải dữ liệu khi người dùng bấm "Tra cứu".
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api
      .getOtMonthLimitList({
        year: this.year,
        keyword: this.keyword,
        deptNos: this.expandDeptSelection(this.deptNos).join(','),
      })
      .subscribe({
        next: (rows) => {
          this.rows.set(rows ?? []);
          this.loading.set(false);
        },
        error: () => {
          this.errorMessage.set(this.i18n.t('omll.msg.loadFailed', 'Lỗi tải dữ liệu tăng ca tháng.'));
          this.rows.set([]);
          this.loading.set(false);
        },
      });
  }

  /** row[column.key] chỉ đúng kiểu OtMonthLimitPeriod với các cột kỳ (periodColumns) - tách riêng hàm
   *  này để dùng an toàn trong template thay vì ép kiểu trực tiếp trong HTML. */
  periodValue(row: OtMonthLimitRow, column: OtMonthLimitPeriodColumn): OtMonthLimitPeriod {
    return row[column.key] as OtMonthLimitPeriod;
  }

  /** Định dạng số lượng: bỏ số 0 vô nghĩa, giữ tối đa 2 chữ số thập phân. */
  fmtQty(v: unknown): string {
    const n = parseFloat(String(v));
    if (isNaN(n) || n === 0) return '0';
    return n % 1 === 0 ? String(n) : n.toFixed(2).replace(/\.?0+$/, '');
  }

  /** Xuất excel với tiêu đề 2 hàng + ô gộp (merge) đúng cấu trúc bảng trên giao diện (hàng 1: tên kỳ
   *  gộp 5 cột; hàng 2: 5 cột con Tổng/OT duyệt/PC t7 duyệt/OT đăng ký/PC t7 đăng ký) thay vì ghép
   *  chuỗi "Kỳ - Loại" phẳng trên 1 hàng như trước. */
  exportExcel(): void {
    const subtypeCount = this.otLimitSubtypes.length;
    const fixedColCount = 3; // STT, Mã nhân viên, Họ tên

    const headerRow1: unknown[] = [
      this.i18n.t('common.stt', 'STT'),
      this.i18n.t('common.empId', 'Mã nhân viên'),
      this.i18n.t('common.empName', 'Họ tên'),
      ...this.periodColumns.flatMap((pc) => {
        const periodLabel = pc.labelKey ? this.i18n.t(pc.labelKey, pc.labelKey) : `${this.i18n.t('common.year', 'Năm')} ${this.year}`;
        return [periodLabel, ...Array(subtypeCount - 1).fill('')];
      }),
    ];
    const headerRow2: unknown[] = [
      '', '', '',
      ...this.periodColumns.flatMap(() => this.otLimitSubtypes.map((st) => this.i18n.t(st.labelKey, st.labelKey))),
    ];
    const dataRows = this.filteredRows().map((r, i) => [
      i + 1,
      r.empId,
      r.localName,
      ...this.periodColumns.flatMap((pc) => this.otLimitSubtypes.map((st) => this.fmtQty(this.periodValue(r, pc)[st.key]))),
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headerRow1, headerRow2, ...dataRows]);
    // Merge dọc 2 hàng đầu cho 3 cột cố định (STT/Mã NV/Họ tên) + merge ngang 5 cột con cho từng nhóm kỳ.
    worksheet['!merges'] = [
      ...Array.from({ length: fixedColCount }, (_, c) => ({ s: { r: 0, c }, e: { r: 1, c } })),
      ...this.periodColumns.map((_, i) => {
        const startCol = fixedColCount + i * subtypeCount;
        return { s: { r: 0, c: startCol }, e: { r: 0, c: startCol + subtypeCount - 1 } };
      }),
    ];

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'TangCaThang');
    XLSX.writeFile(workbook, `theo_doi_tang_ca_thang_${this.year}.xlsx`);
  }

  private buildYearOptions(): string[] {
    const currentYear = new Date().getFullYear();
    const years: string[] = [];
    for (let y = currentYear + 1; y >= currentYear - 5; y--) years.push(String(y));
    return years;
  }

  private loadDeptTree(): void {
    this.api.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(this.buildDeptTree(list ?? [])),
      error: () =>
        this.deptTreeErrorMessage.set(this.i18n.t('mep.msg.loadDeptFailed', 'Lỗi khi tải danh sách phòng ban')),
    });
  }

  private buildDeptTree(list: OtMonthLimitDeptNode[]): NzTreeNodeOptions[] {
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
   *  trước khi gửi lên backend (giống hệt ar-count-info-list / manage-emp-position-info). */
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
