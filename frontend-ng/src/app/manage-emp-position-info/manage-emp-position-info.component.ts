import { CommonModule } from '@angular/common';
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
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { formatDate } from '@angular/common';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import {
  AuthDeptNode,
  CodeItem,
  ManageEmpPositionInfoDto,
  ManageEmpPositionInsideDto,
} from './manage-emp-position-info.model';
import { ManageEmpPositionInfoService } from './manage-emp-position-info.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'essDept.keyword', 'vdp.search.empKeyword.placeholder',
  'essDept.dept', 'vdp.search.dept.placeholder',
  'essDept.fromDate', 'essDept.toDate',
  'essDept.empGroup', 'essDept.empType', 'essDept.status', 'mep.field.asOfDate', 'essDept.nationality',
  'essDept.search', 'essDept.clearFilter', 'essDept.exportExcel', 'common.selectAll',
  'common.stt', 'common.empId', 'common.empName', 'common.deptName',
  'mep.col.duty', 'mep.col.jobTitle', 'mep.col.positionTitle', 'mep.field.nationality',
  'essDept.status', 'mep.col.dateJoined', 'mep.col.manager',
  'mep.modal.detailTitle', 'mep.detail.orgNameLocal', 'mep.detail.mainBusiness',
  'mep.detail.employeeOwned', 'mep.detail.manager', 'mep.detail.managerEmp',
  'mep.section.insideProcess', 'essDept.attStartDate', 'mep.col.mainBusiness', 'mep.col.transType',
  'mep.msg.noData', 'mep.msg.noInsideExp', 'mep.msg.loadInsideEmpFailed', 'mep.detail.noImage',
  'mep.msg.loadDeptFailed', 'common.loadFail', 'common.totalRows',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200, 500];

const DEFAULT_EMP_OFFICE = '15119';

/**
 * Bản Angular của ess/viewDept/ManageEmpPositionInfoList.html (Thymeleaf + DataTables), gọi lại
 * nguyên các API JSON đã có sẵn (xem ManageEmpPositionInfoService) - không đổi backend. Dùng nz-table
 * (phân trang client-side, giống hệt hành vi DataTables gốc: BE trả toàn bộ danh sách theo bộ lọc,
 * không phân trang server) thay cho DataTables; nz-tree-select thay widget cây phòng ban tự viết
 * (DeptTree.js); nz-modal thay modal Bootstrap cho chi tiết nhân viên + quá trình nội bộ. Xuất excel
 * làm client-side (không có endpoint export riêng ở backend - bản gốc cũng xuất client-side qua
 * DataTables Buttons).
 */
@Component({
  selector: 'app-manage-emp-position-info',
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
    NzDescriptionsModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './manage-emp-position-info.component.html',
  styleUrl: './manage-emp-position-info.component.css',
})
export class ManageEmpPositionInfoComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<ManageEmpPositionInfoDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly insideErrorMessage = signal<string | null>(null);
  readonly deptTreeErrorMessage = signal<string | null>(null);

  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly postFamilyOptions = signal<CodeItem[]>([]);
  readonly empTypeOptions = signal<CodeItem[]>([]);
  readonly empOfficeOptions = signal<CodeItem[]>([]);
  readonly nationalityOptions = signal<CodeItem[]>([]);

  readonly detailVisible = signal(false);
  readonly detailRow = signal<ManageEmpPositionInfoDto | null>(null);
  readonly insideRows = signal<ManageEmpPositionInsideDto[]>([]);
  readonly insideLoading = signal(false);
  readonly photoBroken = signal(false);

  /** id -> danh sách id con trực tiếp - dùng để mở rộng lựa chọn cây phòng ban khi tra cứu (xem search()). */
  private deptChildrenMap = new Map<string, string[]>();

  keyword = '';
  deptNos: string[] = [];
  fromDate: Date | null = null;
  toDate: Date | null = null;
  postFamily: string | null = null;
  empTypeCode: string | null = null;
  empOffice: string | null = DEFAULT_EMP_OFFICE;
  nationalityCode: string | null = null;
  asOfDate: Date | null = null;

  get showAsOfDate(): boolean {
    return this.empOffice === DEFAULT_EMP_OFFICE;
  }

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

  onEmpOfficeChange(): void {
    if (!this.showAsOfDate) this.asOfDate = null;
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
        postFamily: this.postFamily ?? '',
        empTypeCode: this.empTypeCode ?? '',
        empOffice: this.empOffice ?? '',
        nationalityCode: this.nationalityCode ?? '',
        asOfDate: this.formatYmd(this.asOfDate),
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
    this.asOfDate = null;
    this.postFamily = null;
    this.empTypeCode = null;
    this.empOffice = DEFAULT_EMP_OFFICE;
    this.nationalityCode = null;
    this.search();
  }

  openDetail(row: ManageEmpPositionInfoDto): void {
    this.detailRow.set(row);
    this.insideRows.set([]);
    this.insideErrorMessage.set(null);
    this.photoBroken.set(false);
    this.detailVisible.set(true);
    if (!row.personId) return;
    this.insideLoading.set(true);
    this.api.getInsideExperience(row.personId).subscribe({
      next: (rows) => {
        this.insideRows.set(rows ?? []);
        this.insideLoading.set(false);
      },
      error: () => {
        this.insideErrorMessage.set(
          this.i18n.t('mep.msg.loadInsideEmpFailed', 'Không tải được quá trình nội bộ của nhân viên.'),
        );
        this.insideLoading.set(false);
      },
    });
  }

  closeDetail(): void {
    this.detailVisible.set(false);
  }

  onPhotoError(): void {
    this.photoBroken.set(true);
  }

  resolvePhotoUrl(photoPath: string | null | undefined): string | null {
    if (!photoPath) return null;
    const normalized = photoPath.trim();
    if (!normalized) return null;
    if (/^(https?:)?\/\//i.test(normalized) || normalized.startsWith('data:')) return normalized;
    return normalized.startsWith('/') ? normalized : '/' + normalized.replace(/^\/+/, '');
  }

  /** Xuất excel client-side (giống bản gốc DataTables Buttons, không có endpoint export riêng ở
   *  backend) - dùng thư viện xlsx (SheetJS, bản vá lỗi từ cdn.sheetjs.com vì bản trên npm registry
   *  đang dính lỗi bảo mật chưa được vá) để tạo đúng file .xlsx nhị phân thay vì trick HTML-table. */
  exportExcel(): void {
    const headers = [
      this.i18n.t('common.stt', 'STT'),
      this.i18n.t('common.empId', 'Mã nhân viên'),
      this.i18n.t('common.empName', 'Họ tên'),
      this.i18n.t('common.deptName', 'Phòng ban'),
      this.i18n.t('essDept.empGroup', 'Nhóm nhân viên'),
      this.i18n.t('essDept.empType', 'Loại nhân viên'),
      this.i18n.t('mep.col.duty', 'Chức vụ'),
      this.i18n.t('mep.col.jobTitle', 'Chức danh'),
      this.i18n.t('mep.col.positionTitle', 'Vị trí'),
      this.i18n.t('essDept.nationality', 'Quốc tịch'),
      this.i18n.t('essDept.status', 'Trạng thái'),
      this.i18n.t('mep.col.dateJoined', 'Ngày vào làm'),
      this.i18n.t('mep.col.manager', 'Quản lý'),
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1, r.empId, r.localName, r.deptName, r.postFamilyName, r.empTypeName, r.dutyName,
      r.postGradeNo, r.positionNoName || r.positionName || '', r.nationalityName,
      r.empOfficeName, r.dateStarted, r.managerName,
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSach');
    XLSX.writeFile(workbook, 'manage_emp_position_info_list.xlsx');
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
   *  con như widget DeptTree.js gốc (hàm checkChildren() đệ quy). Backend lọc theo deptNos IN (...)
   *  đúng từng mã, nên nếu không mở rộng thủ công ở đây, chọn 1 phòng ban cha (VD "HTSV") sẽ chỉ lọc
   *  đúng nhân viên gán trực tiếp vào phòng đó, bỏ sót toàn bộ nhân viên ở các phòng ban con - khiến
   *  kết quả tra cứu trống hoặc thiếu dữ liệu. */
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
    this.api.getCodeList('870').subscribe((list) => this.nationalityOptions.set(list ?? []));
  }
}
