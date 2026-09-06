import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTreeModule, NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { AuthDeptNode, CodeItem, EmployeeSearchDto } from '../change-user/change-user.model';
import { ChangeUserService } from '../change-user/change-user.service';
import { DeptTreeNode, PaSupervisorDto, PaSupervisorSavePayload } from './view-pa-supervisor.model';
import { ViewPaSupervisorService } from './view-pa-supervisor.service';

/** Các key message.properties dùng trong trang này - đã có sẵn đầy đủ ở namespace pa.supervisor.*
 *  (dùng chung cho cả bản Thymeleaf gốc) cộng thêm common.*, essDept.exportExcel và các key
 *  empSearch.x / arSupervisor.x / epi.field.position / vdp.search.dept.placeholder /
 *  mep.msg.loadDeptFailed dùng chung cho popup tìm nhân viên (tái dùng đúng pattern
 *  ChangeUserComponent, xem giải thích ở constructor). Tải trước 1 lần ở ngOnInit. */
const I18N_KEYS = [
  'pa.supervisor.pageTitle', 'pa.supervisor.no', 'pa.supervisor.empId', 'pa.supervisor.localName',
  'pa.supervisor.dept', 'pa.supervisor.deptPlaceholder', 'pa.supervisor.empOffice', 'pa.supervisor.empSearch',
  'pa.supervisor.createDate', 'pa.supervisor.createdBy', 'pa.supervisor.action', 'pa.supervisor.supervisor',
  'pa.supervisor.empSelectPlaceholder', 'pa.supervisor.activity', 'pa.supervisor.activity.active',
  'pa.supervisor.activity.inactive', 'pa.supervisor.orderNo', 'pa.supervisor.search', 'pa.supervisor.addNew',
  'pa.supervisor.delete', 'pa.supervisor.save', 'pa.supervisor.addTitle', 'pa.supervisor.editTitle',
  'pa.supervisor.validateRequired', 'pa.supervisor.leftPaneTitle', 'pa.supervisor.rightPaneTitle',
  'pa.supervisor.infoPlaceholder', 'pa.supervisor.saveDepts', 'pa.supervisor.confirmDeleteFull',
  'pa.supervisor.deptSaved',
  'common.confirm', 'common.cancel', 'common.close', 'common.search', 'common.clearFilter', 'common.noData',
  'common.totalRows', 'common.selectAll', 'common.loadFail', 'common.saveSuccess', 'common.saveFail',
  'common.deleteSuccess', 'common.deleteFail', 'common.empId', 'common.empName', 'common.deptName', 'common.edit',
  'essDept.exportExcel',
  'arSupervisor.btn.select', 'arSupervisor.js.empSelected',
  'empSearch.title', 'empSearch.field.keyword', 'empSearch.placeholder.keyword', 'empSearch.field.dept',
  'empSearch.field.empOffice', 'empSearch.btn.clearFilter', 'empSearch.col.no', 'epi.field.position',
  'vdp.search.dept.placeholder', 'mep.msg.loadDeptFailed',
];

const EMP_OFFICE_PARENT_CODE = '15118';
const PAGE_SIZE_OPTIONS = [10, 20, 50, 100];

interface SupervisorForm {
  personId: string | null;
  empDisplay: string;
  activity: number;
  orderNo: number | null;
}

const EMPTY_FORM: SupervisorForm = { personId: null, empDisplay: '', activity: 1, orderNo: 0 };

/**
 * Bản Angular của pa/wagebase/viewPaSupervisor.html (Thymeleaf + jQuery, cây phòng ban tự viết) - quản
 * lý danh sách người phụ trách lương (PA_SUPERVISOR) và cấu hình nhóm phòng ban mỗi người được quản lý
 * (PA_SUPERVISOR_INFO). Trang gốc không dùng DataTables mà là 1 danh sách list-group lọc phía client;
 * tuy nhiên BE đã có sẵn API /api/supervisor/list phân trang kiểu DataTables (draw/start/length +
 * recordsFiltered) đầy đủ điều kiện lọc (empSearch/deptNos/empOfficeSearch) và message key tương ứng
 * (pa.supervisor.no/empId/localName/dept/empOffice/createDate/createdBy/action) - cho thấy ý định thiết
 * kế ban đầu là bảng dữ liệu, nên đổi cột trái sang nz-table (server-side pagination, tham khảo
 * ViewPaEmpAccountComponent) thay cho list-group. Cây checkbox phòng ban bên phải đổi sang nz-tree
 * (nzCheckable, cascade check cha/con có sẵn - thay hoàn toàn cho hàm createDeptLi đệ quy thủ công ở
 * bản gốc, tham khảo ViewAttendanceKeeperComponent - cùng kiểu 1 người quản lý nhiều phòng ban). Click
 * vào 1 dòng trong bảng (trừ 2 nút Sửa/Xóa) để chọn người phụ trách và tải cây phòng ban bên phải - đúng
 * hành vi bản gốc. Modal tìm nhân viên khi thêm mới dùng lại đúng pattern + service của
 * ChangeUserComponent (searchEmployees/getAuthorizedDepartments/getCodeList) thay cho EmployeeSearchModal
 * (jQuery); khi sửa ẩn nút chọn nhân viên vì PERSON_ID không đổi - giống bản gốc.
 * Bản gốc chưa có export Excel riêng - nay làm client-side bằng xlsx (SheetJS) theo đúng quy ước xuất
 * .xlsx của các trang khác (xem CLAUDE.md), gọi lại API danh sách với length=recordsFiltered để lấy
 * toàn bộ kết quả đang lọc rồi xuất.
 */
@Component({
  selector: 'app-view-pa-supervisor',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzInputNumberModule,
    NzSelectModule,
    NzButtonModule,
    NzTreeSelectModule,
    NzTreeModule,
    NzModalModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './view-pa-supervisor.component.html',
  styleUrl: './view-pa-supervisor.component.css',
})
export class ViewPaSupervisorComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<PaSupervisorDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly recordsFiltered = signal(0);
  readonly exporting = signal(false);

  pageIndex = 1;
  pageSize = 20;

  empSearch = '';
  deptNos: string[] = [];
  empOfficeSearch: string | null = null;

  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly empOfficeOptions = signal<CodeItem[]>([]);
  readonly deptTreeErrorMessage = signal<string | null>(null);
  private deptChildrenMap = new Map<string, string[]>();

  // ==================== Cây phòng ban bên phải (cấu hình cho supervisor đang chọn) ====================
  private deptTreeItems: DeptTreeNode[] = [];
  readonly deptTreeNodes = signal<NzTreeNodeOptions[]>([]);
  readonly selectedPersonId = signal<string | null>(null);
  readonly selectedEmpLabel = signal<string | null>(null);
  readonly checkedDeptKeys = signal<string[]>([]);
  readonly deptInfoLoading = signal(false);
  readonly deptInfoError = signal<string | null>(null);
  readonly savingDepts = signal(false);

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  form: SupervisorForm = { ...EMPTY_FORM };

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private deleteTarget: PaSupervisorDto | null = null;

  // ==================== Popup tìm kiếm nhân viên (tái dùng pattern ChangeUserComponent) ====================
  readonly pickerVisible = signal(false);
  readonly pickerRows = signal<EmployeeSearchDto[]>([]);
  readonly pickerLoading = signal(false);
  readonly pickerErrorMessage = signal<string | null>(null);
  pickerKeyword = '';
  pickerDeptNos: string[] = [];
  pickerEmpOffice: string | null = null;

  constructor(
    private readonly api: ViewPaSupervisorService,
    private readonly empApi: ChangeUserService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
    this.api.getDepartmentTree().subscribe({
      next: (list) => {
        this.deptTreeItems = list ?? [];
        this.deptTreeNodes.set(this.buildFullDeptTree(this.deptTreeItems));
      },
      error: () => this.deptTreeNodes.set([]),
    });
    this.empApi.getCodeList(EMP_OFFICE_PARENT_CODE).subscribe((list) => this.empOfficeOptions.set(list ?? []));
    this.search();
  }

  private loadDeptTree(): void {
    this.empApi.getAuthorizedDepartments().subscribe({
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

  private buildFullDeptTree(list: DeptTreeNode[]): NzTreeNodeOptions[] {
    const map = new Map<string, NzTreeNodeOptions & { parent: string }>();
    list.forEach((d) => {
      let parent = d.parent;
      if (!parent || parent === d.id || parent === '0') parent = '#';
      map.set(d.id, { title: `${d.text} (${d.id})`, key: d.id, parent, children: [] });
    });
    const roots: NzTreeNodeOptions[] = [];
    map.forEach((node) => {
      if (node.parent !== '#' && map.has(node.parent)) {
        map.get(node.parent)!.children!.push(node);
      } else {
        roots.push(node);
      }
    });
    const markLeaf = (nodes: NzTreeNodeOptions[]) => {
      nodes.forEach((n) => {
        n.isLeaf = !n.children || n.children.length === 0;
        n.expanded = true;
        if (n.children?.length) markLeaf(n.children);
      });
    };
    markLeaf(roots);
    return roots;
  }

  /** nz-tree-select chỉ trả về key của node được tick trực tiếp - mở rộng xuống các phòng ban con để
   *  khớp hành vi cascade của widget DeptTree.js gốc (xem giải thích ở ManageEmpPositionInfoComponent). */
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

  empOfficeLabel(code: string | null): string {
    if (!code) return '';
    return this.empOfficeOptions().find((c) => c.codeNo === code)?.codeName || code;
  }

  // ==================== Tra cứu ====================

  search(): void {
    this.pageIndex = 1;
    this.resetRightPane();
    this.loadPage();
  }

  clearSearch(): void {
    this.empSearch = '';
    this.deptNos = [];
    this.empOfficeSearch = null;
    this.search();
  }

  onPageIndexChange(pageIndex: number): void {
    this.pageIndex = pageIndex;
    this.loadPage();
  }

  onPageSizeChange(pageSize: number): void {
    this.pageSize = pageSize;
    this.pageIndex = 1;
    this.loadPage();
  }

  private loadPage(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getPageList({
      empSearch: this.empSearch.trim(),
      deptNos: this.expandDeptSelection(this.deptNos).join(','),
      empOfficeSearch: this.empOfficeSearch,
      draw: this.pageIndex,
      start: (this.pageIndex - 1) * this.pageSize,
      length: this.pageSize,
    }).subscribe({
      next: (res) => {
        if (res.error) {
          this.errorMessage.set(res.error);
          this.rows.set([]);
          this.recordsFiltered.set(0);
        } else {
          this.rows.set(res.data ?? []);
          this.recordsFiltered.set(res.recordsFiltered ?? 0);
        }
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.rows.set([]);
        this.recordsFiltered.set(0);
        this.loading.set(false);
      },
    });
  }

  // ==================== Chọn dòng -> cấu hình phòng ban bên phải ====================

  empLabel(row: PaSupervisorDto): string {
    return row.empId ? `${row.empId} - ${row.localName ?? ''}` : row.personId;
  }

  selectSupervisor(row: PaSupervisorDto): void {
    this.selectedPersonId.set(row.personId);
    this.selectedEmpLabel.set(this.empLabel(row));
    this.deptInfoLoading.set(true);
    this.deptInfoError.set(null);
    this.checkedDeptKeys.set([]);
    this.api.getSupervisorDepartments(row.personId).subscribe({
      next: (depts) => {
        this.checkedDeptKeys.set(depts ?? []);
        this.deptInfoLoading.set(false);
      },
      error: () => {
        this.deptInfoError.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.deptInfoLoading.set(false);
      },
    });
  }

  private resetRightPane(): void {
    this.selectedPersonId.set(null);
    this.selectedEmpLabel.set(null);
    this.checkedDeptKeys.set([]);
    this.deptInfoError.set(null);
  }

  /** nzCheckedKeysChange trả thẳng danh sách key đã cascade cha/con - nz-tree tự lo phần này, không
   *  cần tự viết đệ quy như hàm dept-checkbox change ở bản gốc. */
  onDeptCheckedKeysChange(keys: Array<string | number>): void {
    this.checkedDeptKeys.set(keys.map(String));
  }

  saveDepartments(): void {
    const personId = this.selectedPersonId();
    if (!personId) return;
    const keys = this.checkedDeptKeys();
    this.savingDepts.set(true);
    this.api.saveDepartments(personId, keys).subscribe({
      next: () => {
        this.savingDepts.set(false);
        this.message.success(this.i18n.t('pa.supervisor.deptSaved', 'Lưu phân quyền phòng ban thành công!'));
      },
      error: () => {
        this.savingDepts.set(false);
        this.message.error(this.i18n.t('common.saveFail', 'Lưu thất bại!'));
      },
    });
  }

  // ==================== Modal Thêm mới / Chỉnh sửa ====================

  openAddModal(): void {
    this.isNew.set(true);
    this.form = { ...EMPTY_FORM };
    this.modalVisible.set(true);
  }

  openEditModal(row: PaSupervisorDto, event: MouseEvent): void {
    event.stopPropagation();
    this.api.getOne(row.personId).subscribe({
      next: (d) => {
        this.isNew.set(false);
        this.form = {
          personId: d.personId,
          empDisplay: `${d.empId || ''} - ${d.localName || ''}`,
          activity: d.activity != null ? d.activity : 1,
          orderNo: d.orderNo != null ? d.orderNo : 0,
        };
        this.modalVisible.set(true);
      },
      error: (err) => {
        this.message.error(err?.error?.error || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  saveForm(): void {
    if (!this.form.personId) {
      this.message.warning(this.i18n.t('pa.supervisor.validateRequired', 'Vui lòng chọn người phụ trách!'));
      return;
    }
    const payload: PaSupervisorSavePayload = {
      personId: this.form.personId,
      activity: this.form.activity,
      orderNo: this.form.orderNo ?? 0,
    };
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.message.success(res.message || this.i18n.t('common.saveSuccess', 'Lưu thành công!'));
        this.loadPage();
      },
      error: (err) => {
        this.saving.set(false);
        const msg = err?.error?.error || this.i18n.t('common.saveFail', 'Lưu thất bại!');
        this.message.error(msg);
      },
    });
  }

  // ==================== Popup tìm kiếm nhân viên ====================

  openPicker(): void {
    this.pickerKeyword = '';
    this.pickerDeptNos = [];
    this.pickerEmpOffice = null;
    this.pickerRows.set([]);
    this.pickerErrorMessage.set(null);
    this.pickerVisible.set(true);
  }

  closePicker(): void {
    this.pickerVisible.set(false);
  }

  pickerSearch(): void {
    this.pickerLoading.set(true);
    this.pickerErrorMessage.set(null);
    this.empApi.searchEmployees({
      keyword: this.pickerKeyword.trim(),
      deptCodes: this.expandDeptSelection(this.pickerDeptNos),
      empOffice: this.pickerEmpOffice ?? '',
    }).subscribe({
      next: (rows) => {
        this.pickerRows.set(rows ?? []);
        this.pickerLoading.set(false);
      },
      error: () => {
        this.pickerErrorMessage.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.pickerRows.set([]);
        this.pickerLoading.set(false);
      },
    });
  }

  pickerClear(): void {
    this.pickerKeyword = '';
    this.pickerDeptNos = [];
    this.pickerEmpOffice = null;
    this.pickerSearch();
  }

  selectEmployee(row: EmployeeSearchDto): void {
    this.form.personId = row.personId;
    this.form.empDisplay = `${row.empId} - ${row.localName}`;
    this.pickerVisible.set(false);
  }

  // ==================== Xóa ====================

  openDeleteConfirm(row: PaSupervisorDto, event: MouseEvent): void {
    event.stopPropagation();
    this.deleteTarget = row;
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get deleteTargetName(): string {
    return this.deleteTarget ? this.empLabel(this.deleteTarget) : '';
  }

  confirmDelete(): void {
    if (!this.deleteTarget) return;
    const personId = this.deleteTarget.personId;
    this.deleting.set(true);
    this.api.delete(personId).subscribe({
      next: (res) => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.message.success(res.message || this.i18n.t('common.deleteSuccess', 'Xóa thành công!'));
        if (this.selectedPersonId() === personId) this.resetRightPane();
        this.loadPage();
      },
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t('common.deleteFail', 'Xóa thất bại!'));
      },
    });
  }

  // ==================== Xuất Excel ====================

  exportExcel(): void {
    this.exporting.set(true);
    this.api.getPageList({
      empSearch: this.empSearch.trim(),
      deptNos: this.expandDeptSelection(this.deptNos).join(','),
      empOfficeSearch: this.empOfficeSearch,
      draw: 1,
      start: 0,
      length: Math.max(this.recordsFiltered(), 1),
    }).subscribe({
      next: (res) => {
        this.exporting.set(false);
        this.downloadXlsx(res.data ?? []);
      },
      error: () => {
        this.exporting.set(false);
        this.message.error(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  private downloadXlsx(list: PaSupervisorDto[]): void {
    const headers = [
      this.i18n.t('pa.supervisor.no', 'STT'),
      this.i18n.t('pa.supervisor.empId', 'Mã nhân viên'),
      this.i18n.t('pa.supervisor.localName', 'Họ tên'),
      this.i18n.t('pa.supervisor.dept', 'Phòng ban'),
      this.i18n.t('pa.supervisor.empOffice', 'Trạng thái làm việc'),
      this.i18n.t('pa.supervisor.orderNo', 'Thứ tự'),
      this.i18n.t('pa.supervisor.createdBy', 'Người tạo'),
      this.i18n.t('pa.supervisor.createDate', 'Thời gian tạo'),
    ];
    const dataRows = list.map((r, i) => [
      i + 1, r.empId, r.localName, r.deptName, this.empOfficeLabel(r.empOffice), r.orderNo, r.createdBy,
      this.toDmy(r.createDate),
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'NguoiPhuTrachLuong');
    XLSX.writeFile(workbook, 'pa_supervisor_list.xlsx');
  }

  /** Chuyển 'YYYY-MM-DD' (BE) sang 'dd/MM/yyyy' để hiển thị theo CLAUDE.md. */
  toDmy(ymd: string | null): string {
    if (!ymd) return '';
    const [y, m, d] = ymd.split('-');
    return y && m && d ? `${d}/${m}/${y}` : ymd;
  }
}
