import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, WritableSignal, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { buildDeptTree } from '../manage-emp-position-info/dept-tree.util';
import { HIS_CODE_PARENTS, HIS_MODE_CONFIGS } from './hrm-info-search.config';
import {
  CodeItem,
  HisColumn,
  HisFilterField,
  HisModeConfig,
  HrInfoSearchCriteria,
  HrInfoSearchResult,
  HrmInfoSearchMode,
} from './hrm-info-search.model';
import { HrmInfoSearchService } from './hrm-info-search.service';

/** Các key message.properties dùng trong trang - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'common.search.empIdOrName', 'common.deptName', 'common.includeSubDept', 'common.joinDate', 'common.period',
  'common.fromDate', 'common.toDate', 'common.empType', 'common.empName', 'common.empId', 'common.stt',
  'common.search', 'common.clearFilter', 'common.exportExcel', 'common.totalRows', 'common.noData',
  'common.loadFail', 'common.placeholder.select', 'common.quickFilter',
  'hrSearch.postFamily', 'hrSearch.grade', 'hrSearch.mainBusiness', 'hrSearch.empOffice',
  'his.companyName', 'his.expStartDate', 'his.expEndDate', 'his.payYear', 'his.dateLeft', 'his.leaveReason',
  'his.cellphone', 'his.qualName', 'his.qualLevel', 'his.dateObtained', 'his.validityDate', 'his.qualInstitute',
  'his.positionName', 'his.promotionDay',
];

interface HisFilterForm {
  keyword: string;
  deptNo: string | null;
  includeSubDept: boolean;
  joinDateFrom: Date | null;
  joinDateTo: Date | null;
  periodFrom: Date | null;
  periodTo: Date | null;
  companyName: string;
  qualName: string;
  qualLevel: string;
  postFamilies: string[];
  gradeNos: string[];
  mainBusinesses: string[];
  empTypeCodes: string[];
  empOffices: string[];
}

function emptyFilter(): HisFilterForm {
  return {
    keyword: '', deptNo: null, includeSubDept: false, joinDateFrom: null, joinDateTo: null,
    periodFrom: null, periodTo: null, companyName: '', qualName: '', qualLevel: '',
    postFamilies: [], gradeNos: [], mainBusinesses: [], empTypeCodes: [], empOffices: [],
  };
}

/**
 * Bản Angular của 4 trang JSP tra cứu thông tin nhân sự ở Hanwha_HTSV (hrm/empinfo/experienceSearch,
 * retireSearch, bidSearch, gradeSearch). 4 trang gốc có cùng khung (ô tìm kiếm nhân viên/phòng ban/nhóm
 * chức/chức cấp... + bảng DataTables client-side + Xuất Excel) và chỉ khác nhau vài ô lọc/cột, nên gộp
 * thành 1 component cấu hình theo route data `mode` (xem HIS_MODE_CONFIGS) thay vì lặp 4 bản code gần
 * giống hệt nhau. Khác bản gốc:
 *  - Ô chọn nhân viên dạng popup (viewEmpInfoListTanchu) thay bằng ô từ khóa Mã NV/Họ tên.
 *  - Các ô chọn danh mục dạng popup (searchTanchu) thay bằng nz-select nhiều lựa chọn.
 *  - Xuất Excel qua SQL master (SQL_SEQMEAN) thay bằng xuất .xlsx ở client từ dữ liệu đang hiển thị.
 * Tiền tố id phần tử: "his".
 */
@Component({
  selector: 'app-hrm-info-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzTreeSelectModule,
    TranslatePipe,
  ],
  templateUrl: './hrm-info-search.component.html',
  styleUrl: './hrm-info-search.component.css',
})
export class HrmInfoSearchComponent implements OnInit {
  readonly mode: HrmInfoSearchMode;
  readonly config: HisModeConfig;

  filter: HisFilterForm = emptyFilter();

  readonly rows = signal<HrInfoSearchResult[]>([]);
  readonly loading = signal(false);
  pageIndex = 1;
  pageSize = 20;

  readonly quickFilter = signal('');
  readonly filteredRows = computed(() => {
    const kw = this.quickFilter().trim().toLowerCase();
    if (!kw) return this.rows();
    const fields = this.config.columns.map((c) => c.field);
    return this.rows().filter((r) => fields.some((f) => String(r[f] ?? '').toLowerCase().includes(kw)));
  });

  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly postFamilyOptions = signal<CodeItem[]>([]);
  readonly gradeOptions = signal<CodeItem[]>([]);
  readonly mainBusinessOptions = signal<CodeItem[]>([]);
  readonly empTypeOptions = signal<CodeItem[]>([]);
  readonly empOfficeOptions = signal<CodeItem[]>([]);

  readonly scrollX: string;

  constructor(
    route: ActivatedRoute,
    private readonly api: HrmInfoSearchService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {
    const mode = route.snapshot.data['mode'] as HrmInfoSearchMode;
    this.mode = HIS_MODE_CONFIGS[mode] ? mode : 'experience';
    this.config = HIS_MODE_CONFIGS[this.mode];
    const width = this.config.columns.reduce((sum, c) => sum + parseInt(c.width, 10), 60);
    this.scrollX = `${width}px`;
  }

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
    this.loadCodeOptions();
  }

  private t(key: string, fallback: string): string {
    return this.i18n.t(key, fallback);
  }

  has(field: HisFilterField): boolean {
    return this.config.filters.includes(field);
  }

  trackColumn(_: number, c: HisColumn): string {
    return c.field;
  }

  // ==================== Tìm kiếm ====================

  search(): void {
    this.loading.set(true);
    this.api.search(this.mode, this.buildCriteria()).subscribe({
      next: (res) => {
        this.loading.set(false);
        if (!res.success) {
          this.message.error(this.t('common.loadFail', 'Tải dữ liệu thất bại!'));
          return;
        }
        this.rows.set(res.data ?? []);
        this.pageIndex = 1;
      },
      error: () => {
        this.loading.set(false);
        this.message.error(this.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  clearFilter(): void {
    this.filter = emptyFilter();
    this.quickFilter.set('');
    this.loadGradeOptions();
  }

  private buildCriteria(): HrInfoSearchCriteria {
    const f = this.filter;
    return {
      keyword: f.keyword.trim(),
      deptNo: f.deptNo,
      includeSubDept: f.includeSubDept,
      joinDateFrom: this.fmt(f.joinDateFrom),
      joinDateTo: this.fmt(f.joinDateTo),
      periodFrom: this.has('period') ? this.fmt(f.periodFrom) : '',
      periodTo: this.has('period') ? this.fmt(f.periodTo) : '',
      companyName: this.has('companyName') ? f.companyName.trim() : '',
      qualName: this.has('qualName') ? f.qualName.trim() : '',
      qualLevel: this.has('qualLevel') ? f.qualLevel.trim() : '',
      postFamilies: this.has('postFamily') ? f.postFamilies : [],
      gradeNos: this.has('grade') ? f.gradeNos : [],
      mainBusinesses: this.has('mainBusiness') ? f.mainBusinesses : [],
      empTypeCodes: this.has('empType') ? f.empTypeCodes : [],
      empOffices: this.has('empOffice') ? f.empOffices : [],
    };
  }

  private fmt(d: Date | null): string {
    return d ? formatDate(d, 'dd/MM/yyyy', 'en-US') : '';
  }

  // ==================== Danh mục ====================

  /** Chức cấp phụ thuộc nhóm chức đã chọn (giống changeZhijiXXX() ở JSP gốc). */
  onPostFamiliesChange(values: string[]): void {
    this.filter.postFamilies = values ?? [];
    this.filter.gradeNos = [];
    this.loadGradeOptions();
  }

  private loadGradeOptions(): void {
    const parents = this.filter.postFamilies.length ? this.filter.postFamilies : [HIS_CODE_PARENTS.gradeAll];
    this.api.getCodeListMulti(parents).subscribe({
      next: (list) => this.gradeOptions.set(list),
      error: () => this.gradeOptions.set([]),
    });
  }

  private loadCodeOptions(): void {
    const load = (field: HisFilterField, parent: string, target: WritableSignal<CodeItem[]>) => {
      if (!this.has(field)) return;
      this.api.getCodeList(parent).subscribe({ next: (list) => target.set(list ?? []), error: () => target.set([]) });
    };
    load('postFamily', HIS_CODE_PARENTS.postFamily, this.postFamilyOptions);
    load('mainBusiness', HIS_CODE_PARENTS.mainBusiness, this.mainBusinessOptions);
    load('empType', HIS_CODE_PARENTS.empType, this.empTypeOptions);
    load('empOffice', HIS_CODE_PARENTS.empOffice, this.empOfficeOptions);
    if (this.has('grade')) this.loadGradeOptions();
  }

  private loadDeptTree(): void {
    this.api.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(buildDeptTree(list ?? []).nodes),
      error: () => this.deptNodes.set([]),
    });
  }

  // ==================== Xuất Excel (.xlsx) ====================

  exportExcel(): void {
    const cols = this.config.columns;
    const header = [this.t('common.stt', 'STT'), ...cols.map((c) => this.t(c.labelKey, c.fallback))];
    const body = this.filteredRows().map((r, i) => [i + 1, ...cols.map((c) => r[c.field] ?? '')]);
    const sheet = XLSX.utils.aoa_to_sheet([header, ...body]);
    sheet['!cols'] = [{ wch: 6 }, ...cols.map((c) => ({ wch: Math.max(10, Math.round(parseInt(c.width, 10) / 7)) }))];
    const book = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, sheet, 'Data');
    XLSX.writeFile(book, `${this.config.exportFileName}_${formatDate(new Date(), 'yyyyMMdd', 'en-US')}.xlsx`);
  }
}
