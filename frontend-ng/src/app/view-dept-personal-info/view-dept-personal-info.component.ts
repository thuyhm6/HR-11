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
import { CodeItem, ManageEmpPositionInfoDto } from '../manage-emp-position-info/manage-emp-position-info.model';
import { ManageEmpPositionInfoService } from '../manage-emp-position-info/manage-emp-position-info.service';
import { buildDeptTree, expandDeptSelection } from '../manage-emp-position-info/dept-tree.util';
import {
  EmpPositionDetailModalComponent,
  resolveEmpPhotoUrl,
} from '../manage-emp-position-info/emp-position-detail-modal.component';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'essDept.dept', 'vdp.search.dept.placeholder', 'essDept.keyword', 'vdp.search.empKeyword.placeholder',
  'essDept.empType', 'essDept.status', 'essDept.nationality', 'common.selectAll',
  'essDept.search', 'essDept.exportExcel', 'common.totalRows', 'common.stt', 'common.empId',
  'common.empName', 'mep.col.jobTitle', 'mep.col.dateJoined', 'mep.msg.noData', 'mep.msg.loadDeptFailed',
  'common.loadFail',
  'vdpi.card.job', 'vdpi.card.costCode', 'vdpi.card.workDuration', 'vdpi.card.school',
  'vdpi.card.deptManager', 'vdpi.quickFilter', 'vdpi.pageSize', 'vdpi.duration',
];

const PAGE_SIZE_OPTIONS = [10, 25, 50, 100, 200];

const DEFAULT_EMP_OFFICE = '15119';

/**
 * Bản Angular của ess/viewDept/viewDeptPersonalInfoManageList.html (Thymeleaf) - "Thông tin nhân sự"
 * dạng thẻ (ảnh + thông tin tóm tắt mỗi nhân viên), là cách hiển thị khác của cùng dữ liệu với
 * ManageEmpPositionInfoComponent. Dùng lại nguyên API /ess/viewDept/api/manageEmpPositionInfo/list qua
 * ManageEmpPositionInfoService (không tạo controller/service/mapper mới), modal chi tiết dùng chung
 * EmpPositionDetailModalComponent. Danh sách vẫn render qua nz-table (1 dòng = 1 thẻ nhân viên, ẩn
 * header) để tận dụng phân trang client-side giống bản gốc DataTables.
 */
@Component({
  selector: 'app-view-dept-personal-info',
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
    EmpPositionDetailModalComponent,
  ],
  templateUrl: './view-dept-personal-info.component.html',
  styleUrl: './view-dept-personal-info.component.css',
})
export class ViewDeptPersonalInfoComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<ManageEmpPositionInfoDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly deptTreeErrorMessage = signal<string | null>(null);

  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly empTypeOptions = signal<CodeItem[]>([]);
  readonly empOfficeOptions = signal<CodeItem[]>([]);
  readonly nationalityOptions = signal<CodeItem[]>([]);

  readonly detailVisible = signal(false);
  readonly detailRow = signal<ManageEmpPositionInfoDto | null>(null);
  /** empId của những nhân viên có ảnh lỗi (404...) -> hiển thị chữ cái đầu thay ảnh. */
  readonly brokenPhotos = signal<Set<string>>(new Set());

  /** Lọc nhanh client-side trên dữ liệu đã tải (giống ô search của DataTables bản gốc). */
  readonly quickFilter = signal('');
  readonly filteredRows = computed(() => {
    const kw = this.normalize(this.quickFilter());
    if (!kw) return this.rows();
    return this.rows().filter((r) => this.normalize(this.buildSearchText(r)).includes(kw));
  });

  pageSize = 50;
  pageIndex = 1;

  private deptChildrenMap = new Map<string, string[]>();

  keyword = '';
  deptNos: string[] = [];
  empTypeCode: string | null = null;
  empOffice: string | null = DEFAULT_EMP_OFFICE;
  nationalityCode: string | null = null;

  constructor(
    private readonly api: ManageEmpPositionInfoService,
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
    this.pageIndex = 1;
    this.api
      .getList({
        keyword: this.keyword,
        deptNos: expandDeptSelection(this.deptNos, this.deptChildrenMap).join(','),
        fromDate: '',
        toDate: '',
        postFamily: '',
        empTypeCode: this.empTypeCode ?? '',
        empOffice: this.empOffice ?? '',
        nationalityCode: this.nationalityCode ?? '',
        asOfDate: '',
      })
      .subscribe({
        next: (rows) => {
          this.rows.set(rows ?? []);
          this.brokenPhotos.set(new Set());
          this.loading.set(false);
        },
        error: () => {
          this.errorMessage.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
          this.rows.set([]);
          this.loading.set(false);
        },
      });
  }

  onQuickFilterChange(value: string): void {
    this.quickFilter.set(value);
    this.pageIndex = 1;
  }

  onPageSizeChange(size: number): void {
    this.pageSize = size;
    this.pageIndex = 1;
  }

  openDetail(row: ManageEmpPositionInfoDto): void {
    this.detailRow.set(row);
    this.detailVisible.set(true);
  }

  closeDetail(): void {
    this.detailVisible.set(false);
  }

  photoUrl(row: ManageEmpPositionInfoDto): string | null {
    if (this.brokenPhotos().has(row.empId)) return null;
    return resolveEmpPhotoUrl(row.photoPath);
  }

  onPhotoError(row: ManageEmpPositionInfoDto): void {
    this.brokenPhotos.update((set) => new Set(set).add(row.empId));
  }

  initials(name: string | null | undefined): string {
    const words = (name ?? '').trim().split(/\s+/).filter(Boolean);
    if (words.length === 0) return 'NV';
    if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
    return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase();
  }

  jobTitle(row: ManageEmpPositionInfoDto): string {
    return row.postGradeNo || row.dutyName || '';
  }

  deptManager(row: ManageEmpPositionInfoDto): string {
    return row.managerEmpName || row.managerName || '';
  }

  /** Thời gian làm việc tính từ ngày vào làm (DATE_STARTED dạng DD/MM/YYYY) đến hôm nay. */
  workDuration(dateStarted: string | null | undefined): string {
    const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec((dateStarted ?? '').trim());
    if (!m) return '';
    const started = new Date(+m[3], +m[2] - 1, +m[1]);
    const today = new Date();
    let years = today.getFullYear() - started.getFullYear();
    let months = today.getMonth() - started.getMonth();
    let days = today.getDate() - started.getDate();
    if (days < 0) {
      months -= 1;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }
    if (years < 0) return '';
    return this.i18n
      .t('vdpi.duration', '{0} năm {1} tháng {2} ngày')
      .replace('{0}', String(years))
      .replace('{1}', String(months))
      .replace('{2}', String(days));
  }

  /** Xuất excel client-side (.xlsx qua SheetJS, giống ManageEmpPositionInfoComponent) - xuất theo kết
   *  quả đang lọc nhanh, đúng các trường hiển thị trên thẻ. */
  exportExcel(): void {
    const headers = [
      this.i18n.t('common.stt', 'STT'),
      this.i18n.t('common.empId', 'Mã nhân viên'),
      this.i18n.t('common.empName', 'Họ tên'),
      this.i18n.t('mep.col.jobTitle', 'Chức danh'),
      this.i18n.t('vdpi.card.job', 'Công việc'),
      this.i18n.t('essDept.empType', 'Loại nhân viên'),
      this.i18n.t('vdpi.card.costCode', 'Mã chi phí'),
      this.i18n.t('vdpi.card.deptManager', 'Trưởng phòng'),
      this.i18n.t('vdpi.card.workDuration', 'Thời gian làm việc'),
      this.i18n.t('mep.col.dateJoined', 'Ngày vào làm'),
      this.i18n.t('vdpi.card.school', 'Trường tốt nghiệp'),
    ];
    const dataRows = this.filteredRows().map((r, i) => [
      i + 1, r.empId, r.localName, this.jobTitle(r), r.mainBusiness, r.empTypeName, r.costCenter,
      this.deptManager(r), this.workDuration(r.dateStarted), r.dateStarted, r.schoolName,
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSach');
    XLSX.writeFile(workbook, 'view_dept_personal_info_list.xlsx');
  }

  private buildSearchText(r: ManageEmpPositionInfoDto): string {
    return [
      r.empId, r.localName, r.mainBusiness, this.jobTitle(r), r.empTypeName, r.costCenter,
      this.deptManager(r), r.dateStarted, r.schoolName, r.deptName,
    ].join(' ');
  }

  /** Bỏ dấu + chữ hoa để lọc nhanh không phân biệt dấu/hoa thường (tương tự CONVERTTOUNSIGN ở DB). */
  private normalize(text: string): string {
    return (text ?? '')
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D')
      .toUpperCase()
      .trim();
  }

  private loadDeptTree(): void {
    this.api.getAuthorizedDepartments().subscribe({
      next: (list) => {
        const tree = buildDeptTree(list ?? []);
        this.deptChildrenMap = tree.childrenMap;
        this.deptNodes.set(tree.nodes);
      },
      error: () =>
        this.deptTreeErrorMessage.set(this.i18n.t('mep.msg.loadDeptFailed', 'Lỗi khi tải danh sách phòng ban')),
    });
  }

  private loadCodeOptions(): void {
    this.api.getCodeList('13864').subscribe((list) => this.empTypeOptions.set(list ?? []));
    this.api.getCodeList('15118').subscribe((list) => this.empOfficeOptions.set(list ?? []));
    this.api.getCodeList('870').subscribe((list) => this.nationalityOptions.set(list ?? []));
  }
}
