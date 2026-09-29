import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { HIS_CODE_PARENTS } from '../hrm-info-search/hrm-info-search.config';
import { CodeItem } from '../hrm-info-search/hrm-info-search.model';
import { HrmInfoSearchService } from '../hrm-info-search/hrm-info-search.service';
import { ExperienceListCriteria, ExperienceListItem } from './view-experience-list.model';
import { ViewExperienceListService } from './view-experience-list.service';

const I18N_KEYS = [
  'common.search.empIdOrName', 'common.deptName', 'common.includeSubDept', 'common.joinDate', 'common.empType',
  'common.fromDate', 'common.toDate', 'common.empName', 'common.empId', 'common.stt', 'common.search',
  'common.clearFilter', 'common.exportExcel', 'common.totalRows', 'common.noData', 'common.loadFail',
  'common.placeholder.select', 'common.quickFilter',
  'hrSearch.postFamily', 'hrSearch.grade', 'hrSearch.mainBusiness', 'hrSearch.empOffice',
  'vel.orderDate', 'vel.transCode', 'vel.transReason',
];

/** Tình trạng làm việc mặc định = "Đang làm việc" (giống EMP_OFFICE_Multi='15119' ở controller gốc). */
const DEFAULT_EMP_OFFICE = '15119';
/** Khoảng ngày mặc định: 3 tháng trước → hôm nay (DateUtil.getMonthStrAgo(3) ở controller gốc). */
const DEFAULT_MONTHS_AGO = 3;

interface VelFilterForm {
  keyword: string;
  startDate: Date | null;
  endDate: Date | null;
  transCodes: string[];
  transReasons: string[];
  deptNo: string | null;
  includeSubDept: boolean;
  postFamilies: string[];
  empTypeCodes: string[];
  empOffices: string[];
  startDateJoin: Date | null;
  endDateJoin: Date | null;
}

function defaultFilter(): VelFilterForm {
  const today = new Date();
  const monthsAgo = new Date(today.getFullYear(), today.getMonth() - DEFAULT_MONTHS_AGO, today.getDate());
  return {
    keyword: '', startDate: monthsAgo, endDate: today, transCodes: [], transReasons: [],
    deptNo: null, includeSubDept: false, postFamilies: [], empTypeCodes: [], empOffices: [DEFAULT_EMP_OFFICE],
    startDateJoin: new Date(monthsAgo), endDateJoin: new Date(today),
  };
}

interface VelColumn {
  field: keyof ExperienceListItem;
  labelKey: string;
  fallback: string;
  width: string;
  center?: boolean;
}

const COLUMNS: VelColumn[] = [
  { field: 'orderDate', labelKey: 'vel.orderDate', fallback: 'Ngày phát lệnh', width: '110px', center: true },
  { field: 'transCodeName', labelKey: 'vel.transCode', fallback: 'Loại phát lệnh', width: '150px' },
  { field: 'transResourceName', labelKey: 'vel.transReason', fallback: 'Lý do phát lệnh', width: '170px' },
  { field: 'localName', labelKey: 'common.empName', fallback: 'Họ tên', width: '170px' },
  { field: 'empId', labelKey: 'common.empId', fallback: 'Mã nhân viên', width: '110px', center: true },
  { field: 'deptName', labelKey: 'common.deptName', fallback: 'Phòng ban', width: '200px' },
  { field: 'empTypeName', labelKey: 'common.empType', fallback: 'Loại nhân viên', width: '130px' },
  { field: 'postGradeName', labelKey: 'hrSearch.grade', fallback: 'Chức cấp', width: '130px' },
  { field: 'mainBusinessName', labelKey: 'hrSearch.mainBusiness', fallback: 'Nghiệp vụ chính', width: '180px' },
];

/**
 * Bản Angular của hrm/recruitManage/viewExperienceList.jsp (Hanwha_HTSV) - Tra cứu phát lệnh (lịch sử
 * quyết định nhân sự HR_EXPERIENCE_INSIDE). Khác bản gốc:
 *  - Ô chọn nhân viên dạng popup thay bằng ô từ khóa Mã NV/Họ tên.
 *  - "Lý do phát lệnh" lấy danh mục con của các "Loại phát lệnh" đã chọn và thực sự được lọc (bản gốc
 *    đặt tên input seach_TRANS_REASON_Multi nhưng SQL đọc TRANS_RESOURCE_Multi nên điều kiện này bị bỏ qua).
 *  - Xuất Excel qua SQL master (SQL_SEQMEAN=151) thay bằng xuất .xlsx ở client.
 * Tiền tố id phần tử: "vel".
 */
@Component({
  selector: 'app-view-experience-list',
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
  templateUrl: './view-experience-list.component.html',
  styleUrl: './view-experience-list.component.css',
})
export class ViewExperienceListComponent implements OnInit {
  readonly columns = COLUMNS;
  readonly scrollX = `${COLUMNS.reduce((s, c) => s + parseInt(c.width, 10), 60)}px`;

  filter: VelFilterForm = defaultFilter();

  readonly rows = signal<ExperienceListItem[]>([]);
  readonly loading = signal(false);
  pageIndex = 1;
  pageSize = 50;

  readonly quickFilter = signal('');
  readonly filteredRows = computed(() => {
    const kw = this.quickFilter().trim().toLowerCase();
    if (!kw) return this.rows();
    return this.rows().filter((r) => COLUMNS.some((c) => String(r[c.field] ?? '').toLowerCase().includes(kw)));
  });

  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly transCodeOptions = signal<CodeItem[]>([]);
  readonly transReasonOptions = signal<CodeItem[]>([]);
  readonly postFamilyOptions = signal<CodeItem[]>([]);
  readonly empTypeOptions = signal<CodeItem[]>([]);
  readonly empOfficeOptions = signal<CodeItem[]>([]);

  constructor(
    private readonly api: ViewExperienceListService,
    private readonly common: HrmInfoSearchService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.common.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(buildDeptTree(list ?? []).nodes),
      error: () => this.deptNodes.set([]),
    });
    this.common.getCodeList(HIS_CODE_PARENTS.transCode).subscribe((l) => this.transCodeOptions.set(l ?? []));
    this.common.getCodeList(HIS_CODE_PARENTS.postFamily).subscribe((l) => this.postFamilyOptions.set(l ?? []));
    this.common.getCodeList(HIS_CODE_PARENTS.empType).subscribe((l) => this.empTypeOptions.set(l ?? []));
    this.common.getCodeList(HIS_CODE_PARENTS.empOffice).subscribe((l) => this.empOfficeOptions.set(l ?? []));
  }

  private t(key: string, fallback: string): string {
    return this.i18n.t(key, fallback);
  }

  trackColumn(_: number, c: VelColumn): string {
    return c.field;
  }

  /** Lý do phát lệnh = danh mục con của các loại phát lệnh đã chọn. */
  onTransCodesChange(values: string[]): void {
    this.filter.transCodes = values ?? [];
    this.filter.transReasons = [];
    this.common.getCodeListMulti(this.filter.transCodes).subscribe({
      next: (list) => this.transReasonOptions.set(list),
      error: () => this.transReasonOptions.set([]),
    });
  }

  search(): void {
    const f = this.filter;
    const criteria: ExperienceListCriteria = {
      keyword: f.keyword.trim(),
      startDate: this.fmt(f.startDate),
      endDate: this.fmt(f.endDate),
      transCodes: f.transCodes,
      transReasons: f.transReasons,
      deptNo: f.deptNo,
      includeSubDept: f.includeSubDept,
      postFamilies: f.postFamilies,
      empTypeCodes: f.empTypeCodes,
      empOffices: f.empOffices,
      startDateJoin: this.fmt(f.startDateJoin),
      endDateJoin: this.fmt(f.endDateJoin),
    };
    this.loading.set(true);
    this.api.getList(criteria).subscribe({
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
    this.filter = defaultFilter();
    this.transReasonOptions.set([]);
    this.quickFilter.set('');
  }

  private fmt(d: Date | null): string {
    return d ? formatDate(d, 'dd/MM/yyyy', 'en-US') : '';
  }

  exportExcel(): void {
    const header = [this.t('common.stt', 'STT'), ...COLUMNS.map((c) => this.t(c.labelKey, c.fallback))];
    const body = this.filteredRows().map((r, i) => [i + 1, ...COLUMNS.map((c) => r[c.field] ?? '')]);
    const sheet = XLSX.utils.aoa_to_sheet([header, ...body]);
    sheet['!cols'] = [{ wch: 6 }, ...COLUMNS.map((c) => ({ wch: Math.max(10, Math.round(parseInt(c.width, 10) / 7)) }))];
    const book = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, sheet, 'Experience');
    XLSX.writeFile(book, `tra_cuu_phat_lenh_${formatDate(new Date(), 'yyyyMMdd', 'en-US')}.xlsx`);
  }
}
