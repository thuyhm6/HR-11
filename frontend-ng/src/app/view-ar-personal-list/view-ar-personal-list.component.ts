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
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import {
  ArPersonalListDetailRow,
  ArPersonalListItem,
  ArPersonalListSummaryRow,
  AuthDeptNode,
  CodeItem,
} from './view-ar-personal-list.model';
import { ViewArPersonalListService } from './view-ar-personal-list.service';

/** Nhóm AR_ITEM cần loại trừ khi build cột động (nhóm nghỉ phép) - giữ nguyên giá trị bản Thymeleaf gốc. */
const ITEM_GROUP = '!1433';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'essDept.dept', 'vdp.search.dept.placeholder', 'essDept.keyword', 'vdp.search.empKeyword.placeholder',
  'vapl.label.empType', 'common.selectAll', 'vapl.label.startDate', 'vapl.label.endDate',
  'essDept.search', 'essDept.exportExcel',
  'common.stt', 'common.empId', 'common.empName', 'common.deptName', 'common.totalRows', 'common.loadFail',
  'vapl.msg.position', 'vapl.msg.normalWork', 'vapl.msg.lateEarlyGoTotal',
  'vapl.msg.noData', 'vapl.msg.loadFailed', 'vapl.msg.noDataExport',
  'apsl.modal.title', 'apsl.detail.col.shift', 'apsl.detail.col.date', 'apsl.detail.col.leaveType',
  'apsl.detail.col.startTime', 'apsl.detail.col.endTime', 'apsl.detail.col.duration', 'apsl.detail.hint',
  'apsl.msg.noDataDetail', 'apsl.msg.loadDetailFailed', 'mep.msg.loadDeptFailed',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100];

/**
 * Bản Angular của ess/viewDept/viewArPersonalList.html (Thymeleaf + bảng tự viết tay), gọi lại nguyên
 * các API JSON đã có sẵn ở backend (xem ViewArPersonalListService) - không đổi backend. Dùng nz-table
 * (phân trang client-side, giống hệt hành vi bản gốc: BE trả toàn bộ danh sách theo bộ lọc) thay cho
 * bảng tự render; nz-tree-select thay widget cây phòng ban tự viết (DeptTree.js), giống
 * manage-emp-position-info; nz-modal thay modal Bootstrap cho chi tiết chấm công. Cột STT/Mã NV/Họ
 * tên/Phòng ban giữ sticky bằng CSS position:sticky thủ công (xem .component.css) vì số cột động
 * (theo AR_ITEM) không xác định trước, không hợp với cách khai nzWidth cố định của nzScroll. Xuất
 * excel client-side bằng thư viện xlsx (SheetJS) để tạo đúng file .xlsx nhị phân, thay cho trick
 * HTML-table .xls của bản gốc.
 */
@Component({
  selector: 'app-view-ar-personal-list',
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
  templateUrl: './view-ar-personal-list.component.html',
  styleUrl: './view-ar-personal-list.component.css',
})
export class ViewArPersonalListComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly items = signal<ArPersonalListItem[]>([]);
  readonly rows = signal<ArPersonalListSummaryRow[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly deptTreeErrorMessage = signal<string | null>(null);

  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly empTypeOptions = signal<CodeItem[]>([]);

  readonly detailVisible = signal(false);
  readonly detailTitle = signal('');
  readonly detailRows = signal<ArPersonalListDetailRow[]>([]);
  readonly detailLoading = signal(false);
  readonly detailErrorMessage = signal<string | null>(null);

  /** id -> danh sách id con trực tiếp - dùng để mở rộng lựa chọn cây phòng ban khi tra cứu (xem search()). */
  private deptChildrenMap = new Map<string, string[]>();

  keyword = '';
  deptNos: string[] = [];
  empTypeCode: string | null = null;
  startDate: Date | null = null;
  endDate: Date | null = null;

  constructor(
    private readonly api: ViewArPersonalListService,
    private readonly i18n: I18nService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
    this.loadEmpTypeOptions();
    this.setDefaultDateRange();
    this.loadItemsThenSearch();
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api
      .getSummary({
        keyword: this.keyword,
        deptNos: this.expandDeptSelection(this.deptNos).join(','),
        empTypeCode: this.empTypeCode ?? '',
        startDate: this.formatYmd(this.startDate),
        endDate: this.formatYmd(this.endDate),
        itemGroup: ITEM_GROUP,
      })
      .subscribe({
        next: (rows) => {
          this.rows.set(rows ?? []);
          this.loading.set(false);
        },
        error: () => {
          this.errorMessage.set(this.i18n.t('vapl.msg.loadFailed', 'Lỗi tải dữ liệu chấm công.'));
          this.rows.set([]);
          this.loading.set(false);
        },
      });
  }

  /** Số lượng cột động - trả về 0 nếu không lớn hơn 0, dùng để quyết định hiện link chi tiết hay không. */
  qty(row: ArPersonalListSummaryRow, itemId: string): number {
    return parseFloat(String(row[itemId])) || 0;
  }

  /** Định dạng số lượng: bỏ số 0 vô nghĩa, giữ tối đa 2 chữ số thập phân - giống bản Thymeleaf gốc. */
  fmtQty(v: unknown): string {
    const n = parseFloat(String(v));
    if (isNaN(n) || n === 0) return '0';
    return n % 1 === 0 ? String(n) : n.toFixed(2).replace(/\.?0+$/, '');
  }

  /** arDateStr trả về từ backend theo định dạng YYYY/MM/DD (so sánh trực tiếp với AR_DATE_STR) -
   *  chuyển sang DD/MM/YYYY để hiển thị theo quy định định dạng ngày của dự án. */
  formatDetailDate(s: string | null | undefined): string {
    if (!s) return '';
    const p = s.split('/');
    return p.length === 3 ? `${p[2]}/${p[1]}/${p[0]}` : s;
  }

  openDetail(row: ArPersonalListSummaryRow, item: ArPersonalListItem): void {
    const personId = String(row['PERSON_ID'] ?? '');
    this.detailTitle.set(item.itemName);
    this.detailRows.set([]);
    this.detailErrorMessage.set(null);
    this.detailVisible.set(true);
    if (!personId) return;
    this.detailLoading.set(true);
    this.api
      .getDetail(personId, item.itemId, this.formatYmd(this.startDate), this.formatYmd(this.endDate))
      .subscribe({
        next: (rows) => {
          this.detailRows.set(rows ?? []);
          this.detailLoading.set(false);
        },
        error: () => {
          this.detailErrorMessage.set(this.i18n.t('apsl.msg.loadDetailFailed', 'Tải dữ liệu thất bại.'));
          this.detailLoading.set(false);
        },
      });
  }

  closeDetail(): void {
    this.detailVisible.set(false);
  }

  /** Xuất excel client-side (bản gốc dùng trick HTML-table .xls, không phải .xlsx thật) - dùng thư
   *  viện xlsx (SheetJS) để tạo đúng file .xlsx nhị phân, giống manage-emp-position-info. */
  exportExcel(): void {
    const items = this.items();
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
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      r['EMPID'],
      r['LOCAL_NAME'],
      r['DEPT_NAME'],
      r['POSITION_NAME'],
      this.fmtQty(r['NORMAL_WORK']),
      this.fmtQty(r['LATE_EARLY_GO_TOTAL']),
      ...items.map((it) => this.fmtQty(r[it.itemId])),
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'ChamCong');
    XLSX.writeFile(workbook, 'tinh_hinh_cham_cong_nhan_vien.xlsx');
  }

  private loadItemsThenSearch(): void {
    this.api.getItems(ITEM_GROUP).subscribe({
      next: (list) => {
        this.items.set(list ?? []);
        this.search();
      },
      error: () => {
        this.items.set([]);
        this.search();
      },
    });
  }

  /** Mặc định: ngày 25 tháng trước đến ngày 24 tháng này - giống bản Thymeleaf gốc (vaplDefaultDateRange). */
  private setDefaultDateRange(): void {
    const now = new Date();
    const y = now.getFullYear();
    const m = now.getMonth(); // 0-based
    const prevY = m === 0 ? y - 1 : y;
    const prevM = m === 0 ? 11 : m - 1; // tháng trước, 0-based

    this.startDate = new Date(prevY, prevM, 25);
    this.endDate = new Date(y, m, 24);
  }

  private formatYmd(d: Date | null): string {
    return d ? formatDate(d, 'yyyy/MM/dd', 'vi') : '';
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

  /** nz-tree-select chỉ trả về key của node được tick trực tiếp - KHÔNG tự cascade xuống phòng ban con
   *  như widget DeptTree.js gốc, nên phải tự mở rộng xuống các phòng ban con trước khi gửi lên backend
   *  (giống hệt lý do trong manage-emp-position-info.component.ts). */
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
}
