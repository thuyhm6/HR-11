import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
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
import { ViewUseOfAnnualLeaveListService } from './view-use-of-annual-leave-list.service';
import { AuthDeptNode, CodeItem, UseOfAnnualLeaveDto } from './view-use-of-annual-leave-list.model';

/** Mã cha danh mục Loại nhân viên - đúng parentNo="13864" của JSP cũ (ait:SelectSyCodeByCpnyID). */
const EMP_TYPE_PARENT_CODE = '13864';
/** Mã cha danh mục Trạng thái làm việc (EMP_OFFICE) - đúng parentNo="15118" của JSP cũ. */
const EMP_OFFICE_PARENT_CODE = '15118';

/** Các key message.properties dùng trong trang - toàn bộ là key sẵn có (dùng lại đúng key của JSP cũ). */
const I18N_KEYS = [
  'ess.infoApply.nianjiashiyongqingkuang', 'essDept.keyword', 'vdp.search.empKeyword.placeholder',
  'essDept.dept', 'vdp.search.dept.placeholder', 'pa.payear.title.payear',
  'org.title.EMP_TYPE', 'ess.infoApply.renzhizhuangtai', 'common.selectAll',
  'essDept.search', 'essDept.clearFilter', 'essDept.exportExcel', 'common.quickFilter',
  'common.stt', 'common.deptName', 'common.empId', 'common.empName', 'common.dateJoined',
  'ess.infoApply.title.startTime', 'ess.infoApply.end_time', 'ess.infoApply.sum_year_leave_days',
  'ar.viewVacEmpList.SHENGCHENGNIANJIA.b', 'ar.viewVacEmpList.TESHUNIANJIA.b',
  'ar.viewVacEmpList.YINIANNIANJIA.b', 'ess.infoApply.nianjiashiyong', 'ess.infoApply.nianjiashengyu',
  'common.totalRows', 'common.loadFail', 'mep.msg.loadDeptFailed',
];

/** Giống lengthMenu của dataTable JSP cũ: [50, 100, 200, 500], mặc định 50. */
const PAGE_SIZE_OPTIONS = [50, 100, 200, 500];
/** JSP cũ: ait:date yearPlus="10". */
const YEAR_RANGE = 10;

/**
 * Tình trạng sử dụng phép năm (nội vụ / trưởng bộ phận) - chuyển đổi từ JSP
 * /ess/viewDept/viewUseOfAnnualLeaveList (Hanwha_HTSV). Bố cục theo mẫu ViewYearUseInfoListComponent:
 * nz-table phân trang client-side (BE trả toàn bộ danh sách - giống dataTable cũ), nz-tree-select cho
 * phòng ban (thay ait:deptTreeMulti), export excel .xlsx client-side (thay autoExcel SQL_SEQMEAN=206).
 * Lọc nhanh client-side thay ô "sSearch" của dataTable cũ.
 */
@Component({
  selector: 'app-view-use-of-annual-leave-list',
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
  templateUrl: './view-use-of-annual-leave-list.component.html',
  styleUrl: './view-use-of-annual-leave-list.component.css',
})
export class ViewUseOfAnnualLeaveListComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly yearOptions = this.buildYearOptions();

  readonly rows = signal<UseOfAnnualLeaveDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly deptTreeErrorMessage = signal<string | null>(null);

  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly empTypeOptions = signal<CodeItem[]>([]);
  readonly empOfficeOptions = signal<CodeItem[]>([]);

  /** Dùng signal để computed filteredRows tự tính lại khi gõ lọc nhanh. */
  readonly quickFilter = signal('');
  readonly filteredRows = computed(() => {
    const kw = this.quickFilter().trim().toLowerCase();
    if (!kw) return this.rows();
    return this.rows().filter((r) =>
      [r.empId, r.localName, r.deptName, r.dateStarted, r.strtDate, r.endDate]
        .some((v) => (v || '').toLowerCase().includes(kw)),
    );
  });

  /** id -> danh sách id con trực tiếp - dùng để mở rộng lựa chọn cây phòng ban khi tra cứu. */
  private deptChildrenMap = new Map<string, string[]>();

  keyword = '';
  deptNos: string[] = [];
  year: string = String(new Date().getFullYear());
  empTypeCode: string | null = null;
  empOffice: string | null = null;

  constructor(
    private readonly api: ViewUseOfAnnualLeaveListService,
    private readonly i18n: I18nService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
    this.api.getCodeList(EMP_TYPE_PARENT_CODE).subscribe((list) => this.empTypeOptions.set(list ?? []));
    this.api.getCodeList(EMP_OFFICE_PARENT_CODE).subscribe((list) => this.empOfficeOptions.set(list ?? []));
    this.search();
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api
      .getList({
        keyword: this.keyword.trim(),
        deptNos: this.expandDeptSelection(this.deptNos).join(','),
        year: this.year,
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
    this.year = String(new Date().getFullYear());
    this.empTypeCode = null;
    this.empOffice = null;
    this.quickFilter.set('');
    this.search();
  }

  // ==================== Xuất excel (.xlsx, đúng danh sách đang lọc trên giao diện) ====================

  exportExcel(): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const headers = [
      t('common.stt', 'STT'), t('common.deptName', 'Phòng ban'), t('common.empId', 'Mã nhân viên'),
      t('common.empName', 'Họ tên'), t('common.dateJoined', 'Ngày vào làm'), t('pa.payear.title.payear', 'Năm'),
      t('ess.infoApply.title.startTime', 'Thời gian bắt đầu'), t('ess.infoApply.end_time', 'Thời gian kết thúc'),
      t('ess.infoApply.sum_year_leave_days', 'Tổng phép năm'),
      t('ar.viewVacEmpList.SHENGCHENGNIANJIA.b', 'Tạo phép năm'),
      t('ar.viewVacEmpList.TESHUNIANJIA.b', 'Đặc biệt'),
      t('ar.viewVacEmpList.YINIANNIANJIA.b', 'Còn lại năm ngoái'),
      t('ess.infoApply.nianjiashiyong', 'Đã nghỉ'), t('ess.infoApply.nianjiashengyu', 'Còn lại'),
    ];
    const num = (v: string) => (v === null || v === undefined || v === '' ? '' : Number(v));
    const dataRows = this.filteredRows().map((r, i) => [
      i + 1, r.deptName, r.empId, r.localName, r.dateStarted, r.vacId, r.strtDate, r.endDate,
      num(r.totalVac), num(r.totVacCnt), num(r.addVac), num(r.lastYearVac), num(r.usedVac), num(r.remainVac),
    ]);

    const title = t('ess.infoApply.nianjiashiyongqingkuang', 'Tình trạng sử dụng phép năm');
    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    // Tên sheet Excel tối đa 31 ký tự và không chứa : \ / ? * [ ]
    XLSX.utils.book_append_sheet(workbook, worksheet, title.replace(/[:\\/?*[\]]/g, '').substring(0, 31));
    XLSX.writeFile(workbook, `${title}_${this.year}.xlsx`);
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
   *  ait:deptTreeMulti cũ) trước khi gửi lên backend. */
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

  private buildYearOptions(): string[] {
    const cur = new Date().getFullYear();
    const years: string[] = [];
    for (let y = cur + 1; y >= cur - YEAR_RANGE; y--) years.push(String(y));
    return years;
  }
}
