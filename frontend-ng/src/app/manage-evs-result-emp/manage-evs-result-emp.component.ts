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
import { NzAlertModule } from 'ng-zorro-antd/alert';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { AuthDeptNode, CodeItem, ManageEvsResultEmpDto } from './manage-evs-result-emp.model';
import { ManageEvsResultEmpService } from './manage-evs-result-emp.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'vmer.field.empIdOrName', 'vmer.placeholder.empIdOrName',
  'vmer.field.dept', 'vmer.placeholder.dept',
  'vmer.field.joinDateFrom', 'vmer.field.joinDateTo', 'vmer.field.evalYear',
  'common.empGroup', 'common.empType', 'common.status',
  'essDept.search', 'essDept.clearFilter', 'essDept.exportExcel', 'common.selectAll',
  'common.stt', 'common.empId', 'common.empName', 'common.deptName', 'essDept.year',
  'vmer.col.month.01', 'vmer.col.month.02', 'vmer.col.month.03', 'vmer.col.month.04',
  'vmer.col.month.05', 'vmer.col.month.06', 'vmer.col.month.07', 'vmer.col.month.08',
  'vmer.col.month.09', 'vmer.col.month.10', 'vmer.col.month.11', 'vmer.col.month.12',
  'vmer.col.competency',
  'mep.msg.loadDeptFailed', 'common.loadFail', 'common.totalRows',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200, 500];

const DEFAULT_EMP_OFFICE = '15119';

/** Mã grade → suffix màu badge Bootstrap - giữ nguyên bảng màu từ evsGradeBadge() bản Thymeleaf gốc. */
const GRADE_COLORS: Record<string, string> = { EX: 'success', VG: 'primary', GD: 'info', NI: 'warning', UN: 'danger' };

/**
 * Bản Angular của ess/viewDept/viewManageEvsResultEmpList.html (Thymeleaf + DataTables), gọi lại
 * nguyên API JSON đã có sẵn (xem ManageEvsResultEmpService) - không đổi backend. Dùng nz-table
 * (phân trang client-side, BE trả toàn bộ danh sách theo bộ lọc, không phân trang server) thay cho
 * DataTables; nz-tree-select thay widget cây phòng ban tự viết (DeptTree.js), giống hệt cách làm ở
 * ManageEmpPositionInfoComponent/ManageCountInfoComponent. Xuất excel làm client-side (không có
 * endpoint export riêng ở backend - bản gốc cũng xuất client-side qua DataTables Buttons).
 */
@Component({
  selector: 'app-manage-evs-result-emp',
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
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './manage-evs-result-emp.component.html',
  styleUrl: './manage-evs-result-emp.component.css',
})
export class ManageEvsResultEmpComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly monthKeys = ['evsMonth1', 'evsMonth2', 'evsMonth3', 'evsMonth4', 'evsMonth5', 'evsMonth6',
    'evsMonth7', 'evsMonth8', 'evsMonth9', 'evsMonth10', 'evsMonth11', 'evsMonth12'] as const;

  readonly rows = signal<ManageEvsResultEmpDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly deptTreeErrorMessage = signal<string | null>(null);

  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly postFamilyOptions = signal<CodeItem[]>([]);
  readonly empTypeOptions = signal<CodeItem[]>([]);
  readonly empOfficeOptions = signal<CodeItem[]>([]);

  /** id -> danh sách id con trực tiếp - dùng để mở rộng lựa chọn cây phòng ban khi tra cứu (xem search()). */
  private deptChildrenMap = new Map<string, string[]>();

  keyword = '';
  deptNos: string[] = [];
  fromDate: Date | null = null;
  toDate: Date | null = null;
  year: number | null = new Date().getFullYear();
  postFamily: string | null = null;
  empTypeCode: string | null = null;
  empOffice: string | null = DEFAULT_EMP_OFFICE;

  constructor(
    private readonly api: ManageEvsResultEmpService,
    private readonly i18n: I18nService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
    this.loadCodeOptions();
    this.search();
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api
      .getList({
        keyword: this.keyword,
        deptNos: this.expandDeptSelection(this.deptNos).join(','),
        fromDate: this.formatYmd(this.fromDate),
        toDate: this.formatYmd(this.toDate),
        year: this.year ? String(this.year) : '',
        postFamily: this.postFamily ?? '',
        empTypeCode: this.empTypeCode ?? '',
        empOffice: this.empOffice ?? '',
      })
      .subscribe({
        next: (rows) => {
          this.rows.set(rows ?? []);
          this.loading.set(false);
        },
        error: () => {
          this.errorMessage.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
          this.rows.set([]);
          this.loading.set(false);
        },
      });
  }

  clearSearch(): void {
    this.keyword = '';
    this.deptNos = [];
    this.fromDate = null;
    this.toDate = null;
    this.year = new Date().getFullYear();
    this.postFamily = null;
    this.empTypeCode = null;
    this.empOffice = DEFAULT_EMP_OFFICE;
    this.search();
  }

  /** Suffix màu badge Bootstrap ('' nếu không có grade / grade lạ → hiển thị badge xám mặc định). */
  gradeColor(value: string | null | undefined): string {
    return (value && GRADE_COLORS[value]) || 'secondary';
  }

  /** Xuất excel client-side (giống bản gốc DataTables Buttons, không có endpoint export riêng ở
   *  backend) - dùng thư viện xlsx (SheetJS) để tạo đúng file .xlsx nhị phân. */
  exportExcel(): void {
    const headers = [
      this.i18n.t('common.stt', 'STT'),
      this.i18n.t('common.empId', 'Mã NV'),
      this.i18n.t('common.empName', 'Họ tên'),
      this.i18n.t('common.deptName', 'Phòng ban'),
      this.i18n.t('essDept.year', 'Năm'),
      ...this.monthKeys.map((_, i) => this.i18n.t(`vmer.col.month.${String(i + 1).padStart(2, '0')}`, `T${i + 1}`)),
      this.i18n.t('vmer.col.competency', 'Năng lực'),
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1, r.empId, r.localName, r.deptName, r.evsYear,
      ...this.monthKeys.map((key) => (r as any)[key]),
      r.evsMonth13,
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSach');
    XLSX.writeFile(workbook, 'view_manage_evs_result_emp_list.xlsx');
  }

  private formatYmd(d: Date | null): string {
    return d ? formatDate(d, 'yyyy-MM-dd', 'vi') : '';
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

  /** nz-tree-select chỉ trả về key của node được tick trực tiếp - KHÔNG tự cascade xuống phòng ban
   *  con (xem giải thích chi tiết ở ManageEmpPositionInfoComponent.expandDeptSelection). */
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

  private loadCodeOptions(): void {
    this.api.getCodeList('14015812').subscribe((list) => this.postFamilyOptions.set(list ?? []));
    this.api.getCodeList('13864').subscribe((list) => this.empTypeOptions.set(list ?? []));
    this.api.getCodeList('15118').subscribe((list) => this.empOfficeOptions.set(list ?? []));
  }
}
