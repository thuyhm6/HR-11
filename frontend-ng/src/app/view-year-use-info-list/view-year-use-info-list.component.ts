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
import { ViewYearUseInfoListService } from './view-year-use-info-list.service';
import { AuthDeptNode, CodeItem, YearUseInfoListDto } from './view-year-use-info-list.model';

/** Loại nhân viên - giữ đúng 2 giá trị tĩnh (MTSVN/THOIVU) như bên viewMonthDetailList (trang cùng
 *  module ess/tempEmp), không dùng danh mục SY_CODE vì backend lọc theo EMP_TYPE_CODE cứng (xem
 *  YearUseInfoListMapper.xml / MonthDetailListMapper.xml). */
const EMP_TYPE_OPTIONS: { value: string; labelKey: string; fallback: string }[] = [
  { value: 'MTSVN', labelKey: 'ess.viewMonthDetailList.empType.mtsvn', fallback: 'MTSVN' },
  { value: 'THOIVU', labelKey: 'ess.viewMonthDetailList.empType.thoiVu', fallback: 'Thời vụ' },
];

/** Mã cha danh mục Trạng thái làm việc (EMP_OFFICE) - đúng data-parent-code="15118" dùng chung ở
 *  ManageEmpPositionInfoComponent / viewVacEmpList.html. */
const EMP_OFFICE_PARENT_CODE = '15118';

/** Các key message.properties dùng trong trang này. Namespace "yuil" tạo mới cho trang này (không có
 *  bản Thymeleaf gốc để tái dùng key), còn lại dùng chung key sẵn có toàn hệ thống. */
const I18N_KEYS = [
  'yuil.title', 'essDept.keyword', 'vdp.search.empKeyword.placeholder',
  'essDept.dept', 'vdp.search.dept.placeholder', 'common.year',
  'essDept.empType', 'essDept.status', 'common.selectAll',
  'ess.viewMonthDetailList.empType.mtsvn', 'ess.viewMonthDetailList.empType.thoiVu',
  'essDept.search', 'essDept.clearFilter', 'essDept.exportExcel', 'common.quickFilter',
  'common.stt', 'common.deptName', 'common.empId', 'common.empName', 'common.dateJoined',
  'yuil.label.strtDate', 'yuil.label.endDate', 'yuil.col.totalVac', 'yuil.col.addVac',
  'yuil.col.specialVac', 'yuil.col.lastYearVac', 'yuil.col.usedVac', 'yuil.col.remainVac',
  'common.totalRows', 'common.loadFail', 'mep.msg.loadDeptFailed',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200, 500];
const YEAR_RANGE = 5;

/**
 * Thông tin nghỉ phép năm của nhân viên (nhiều nhân viên/năm) - giao diện TẠO MỚI (không phải chuyển
 * đổi trang cũ), theo mẫu ManageEmpPositionInfoComponent (nz-table phân trang client-side, BE trả
 * toàn bộ danh sách theo bộ lọc; nz-tree-select + expandDeptSelection cho bộ lọc phòng ban; export
 * excel client-side bằng thư viện xlsx). Gọi API mới /ess/tempEmp/api/yearUseInfoList/list (tạo cùng
 * lúc ở EssTempEmpController - xem YearUseInfoListMapper.xml): công thức tính các cột phép năm giữ
 * NGUYÊN như YearUseInfoMapper.selectVacationRowsByYear (trang ESS tự xem phép của chính mình), chỉ mở
 * rộng ra nhiều nhân viên + thêm bộ lọc phòng ban/loại nhân viên/trạng thái, giống cách
 * ManageEmpPositionInfoMapper mở rộng phạm vi xem theo cây phòng ban quản lý (EXISTS ...).
 *
 * Bộ lọc nhanh (quickFilter) lọc CLIENT-SIDE trên danh sách đã tải (không gọi lại server) vì toàn bộ
 * dữ liệu đã có sẵn trong rows() - khác với viewMonthDetailList (server-side, dữ liệu phân trang).
 */
@Component({
  selector: 'app-view-year-use-info-list',
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
  templateUrl: './view-year-use-info-list.component.html',
  styleUrl: './view-year-use-info-list.component.css',
})
export class ViewYearUseInfoListComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly empTypeOptions = EMP_TYPE_OPTIONS;
  readonly yearOptions = this.buildYearOptions();

  readonly rows = signal<YearUseInfoListDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly deptTreeErrorMessage = signal<string | null>(null);

  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly empOfficeOptions = signal<CodeItem[]>([]);

  quickFilter = '';
  readonly filteredRows = computed(() => {
    const kw = this.quickFilter.trim().toLowerCase();
    if (!kw) return this.rows();
    return this.rows().filter(
      (r) =>
        (r.empId || '').toLowerCase().includes(kw) ||
        (r.localName || '').toLowerCase().includes(kw) ||
        (r.deptName || '').toLowerCase().includes(kw),
    );
  });

  /** id -> danh sách id con trực tiếp - dùng để mở rộng lựa chọn cây phòng ban khi tra cứu (xem search()). */
  private deptChildrenMap = new Map<string, string[]>();

  keyword = '';
  deptNos: string[] = [];
  year: string = String(new Date().getFullYear());
  empTypeCode: string | null = null;
  empOffice: string | null = null;

  constructor(
    private readonly api: ViewYearUseInfoListService,
    private readonly i18n: I18nService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
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
    this.quickFilter = '';
    this.search();
  }

  // ==================== Xuất excel (client-side, đúng danh sách đang lọc trên giao diện) ====================

  exportExcel(): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const headers = [
      t('common.stt', 'STT'), t('common.deptName', 'Phòng ban'), t('common.empId', 'Mã nhân viên'),
      t('common.empName', 'Họ tên'), t('common.dateJoined', 'Ngày vào làm'), t('common.year', 'Năm'),
      t('yuil.label.strtDate', 'Thời gian bắt đầu'), t('yuil.label.endDate', 'Thời gian kết thúc'),
      t('yuil.col.totalVac', 'Tổng phép năm'), t('yuil.col.addVac', 'Tạo phép năm'),
      t('yuil.col.specialVac', 'Đặc biệt'), t('yuil.col.lastYearVac', 'Còn lại năm ngoái'),
      t('yuil.col.usedVac', 'Đã nghỉ'), t('yuil.col.remainVac', 'Còn lại'),
    ];
    const dataRows = this.filteredRows().map((r, i) => [
      i + 1, r.deptName, r.empId, r.localName, r.dateStarted, r.year,
      r.strtDate, r.endDate, r.totalVac, r.addVac, r.specialVac, r.lastYearVac, r.usedVac, r.remainVac,
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'NghiPhepNam');
    XLSX.writeFile(workbook, 'thong_tin_nghi_phep_nam.xlsx');
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
   *  như widget DeptTree.js gốc. Backend lọc theo deptNos đúng từng mã, nên phải tự mở rộng xuống các
   *  phòng ban con trước khi gửi lên (xem giải thích đầy đủ ở ManageEmpPositionInfoComponent). */
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
