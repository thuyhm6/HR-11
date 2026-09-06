import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTreeModule, NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { AuthDeptNode, CodeItem, EmployeeSearchDto } from '../change-user/change-user.model';
import { ChangeUserService } from '../change-user/change-user.service';
import { ArSupervisorDto, ArSupervisorSavePayload, DeptTreeNode } from './view-attendance-keeper.model';
import { ViewAttendanceKeeperService } from './view-attendance-keeper.service';

/** Các key message.properties dùng trong trang này - tái dùng nguyên namespace arSupervisor.* (đã có
 *  sẵn đủ cho đúng trang này từ bản Thymeleaf gốc, kể cả các chuỗi từng nằm trong biến JS _i18n) cộng
 *  thêm các key empSearch.* và common.* dùng chung với modal tìm nhân viên của ChangeUserComponent
 *  (xem giải thích ở constructor). Tải trước 1 lần ở ngOnInit. */
const I18N_KEYS = [
  'arSupervisor.pageTitle', 'arSupervisor.orgChart', 'arSupervisor.saveDepts', 'arSupervisor.hint',
  'arSupervisor.field.emp', 'arSupervisor.placeholder.selectEmp', 'arSupervisor.field.orderno',
  'arSupervisor.field.modifyYn', 'arSupervisor.field.activity', 'arSupervisor.opt.allow',
  'arSupervisor.opt.disallow', 'arSupervisor.opt.active', 'arSupervisor.opt.inactive',
  'arSupervisor.btn.saveData', 'arSupervisor.js.noDeptData', 'arSupervisor.js.noSupervisor',
  'arSupervisor.js.titleAdd', 'arSupervisor.js.empSelected', 'arSupervisor.js.pleaseSearch',
  'arSupervisor.js.connectionError', 'arSupervisor.js.deleteConfirm', 'arSupervisor.js.noPersonId',
  'arSupervisor.js.configDeptFor', 'arSupervisor.js.loading', 'arSupervisor.js.deptError',
  'arSupervisor.js.serverError', 'arSupervisor.js.saveConnError', 'arSupervisor.btn.addNew',
  'arSupervisor.placeholder.search', 'arSupervisor.btn.select', 'arSupervisor.btn.close',
  'arSupervisor.js.deptLoaded', 'arSupervisor.js.deptLoadedSuf', 'arSupervisor.js.savedDeptsPrefix',
  'arSupervisor.js.savedDeptsSuf', 'arSupervisor.js.deleteError',
  'common.save', 'common.close', 'common.confirm', 'common.cancel', 'common.search', 'common.selectAll',
  'common.empId', 'common.empName', 'common.deptName', 'common.loadFail',
  'empSearch.title', 'empSearch.field.keyword', 'empSearch.placeholder.keyword', 'empSearch.field.dept',
  'empSearch.field.empOffice', 'empSearch.btn.clearFilter', 'empSearch.col.no', 'epi.field.position',
  'vdp.search.dept.placeholder', 'mep.msg.loadDeptFailed',
];

const EMP_OFFICE_PARENT_CODE = '15118';

interface ArSupervisorForm {
  personId: string | null;
  empDisplay: string;
  orderno: number | null;
  modifyYn: number;
  activity: number;
}

const EMPTY_FORM: ArSupervisorForm = { personId: null, empDisplay: '', orderno: null, modifyYn: 0, activity: 1 };

/**
 * Bản Angular của ar/attendanceSettings/viewAttendanceKeeper.html (Thymeleaf + jQuery + jsTree) - quản
 * lý danh sách nhân viên được phân quyền làm người chấm công (AR_SUPERVISOR) và cấu hình nhóm phòng
 * ban mỗi người được quản lý (AR_SUPERVISOR_INFO). Trang gốc không dùng DataTables (chỉ có 1 danh sách
 * list-group lọc phía client + 1 cây checkbox phòng ban tự viết bằng jQuery) nên giữ nguyên dạng danh
 * sách bên trái, chỉ đổi cây checkbox phòng ban bên phải sang nz-tree (nzCheckable, cascade check
 * cha/con có sẵn - thay hoàn toàn cho hàm createDeptLi/dept-checkbox đệ quy thủ công ở bản gốc). Riêng
 * modal tìm nhân viên khi thêm mới dùng lại đúng pattern + service của ChangeUserComponent
 * (searchEmployees/getAuthorizedDepartments/getCodeList) thay cho fragment employeeSearchModal.html
 * (jQuery + DataTables) - dùng nz-table cho bảng kết quả tìm kiếm này (khớp yêu cầu "không dùng
 * DataTables mà dùng nz-table" dù trang gốc không có bảng nào khác để đổi).
 */
@Component({
  selector: 'app-view-attendance-keeper',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzCardModule,
    NzInputModule,
    NzInputNumberModule,
    NzSelectModule,
    NzButtonModule,
    NzModalModule,
    NzAlertModule,
    NzTagModule,
    NzTableModule,
    NzTreeSelectModule,
    NzTreeModule,
    TranslatePipe,
  ],
  templateUrl: './view-attendance-keeper.component.html',
  styleUrl: './view-attendance-keeper.component.css',
})
export class ViewAttendanceKeeperComponent implements OnInit {
  readonly supervisors = signal<ArSupervisorDto[]>([]);
  readonly loadingList = signal(false);
  readonly searchKeyword = signal('');
  readonly filteredSupervisors = computed(() => {
    const kw = this.searchKeyword().trim().toLowerCase();
    const list = this.supervisors();
    if (!kw) return list;
    return list.filter((s) => `${s.empId ?? ''} ${s.empName ?? ''} ${s.deptName ?? ''}`.toLowerCase().includes(kw));
  });

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
  form: ArSupervisorForm = { ...EMPTY_FORM };

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private deleteTarget: ArSupervisorDto | null = null;

  // ==================== Modal tìm kiếm nhân viên (tái dùng pattern ChangeUserComponent) ====================
  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly empOfficeOptions = signal<CodeItem[]>([]);
  readonly deptTreeErrorMessage = signal<string | null>(null);
  readonly pickerVisible = signal(false);
  readonly pickerRows = signal<EmployeeSearchDto[]>([]);
  readonly pickerLoading = signal(false);
  readonly pickerErrorMessage = signal<string | null>(null);
  pickerKeyword = '';
  pickerDeptNos: string[] = [];
  pickerEmpOffice: string | null = null;
  private deptChildrenMap = new Map<string, string[]>();

  constructor(
    private readonly api: ViewAttendanceKeeperService,
    private readonly empApi: ChangeUserService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getDepartmentTree().subscribe({
      next: (list) => {
        this.deptTreeItems = list ?? [];
        this.deptTreeNodes.set(this.buildDeptTree(this.deptTreeItems));
      },
      error: () => this.deptTreeNodes.set([]),
    });
    this.loadSupervisors();
    this.empApi.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(this.buildPickerDeptTree(list ?? [])),
      error: () =>
        this.deptTreeErrorMessage.set(this.i18n.t('mep.msg.loadDeptFailed', 'Lỗi khi tải danh sách phòng ban')),
    });
    this.empApi.getCodeList(EMP_OFFICE_PARENT_CODE).subscribe((list) => this.empOfficeOptions.set(list ?? []));
  }

  loadSupervisors(): void {
    this.loadingList.set(true);
    this.api.getSupervisors().subscribe({
      next: (list) => {
        this.supervisors.set(list ?? []);
        this.loadingList.set(false);
        this.resetRightPane();
      },
      error: () => {
        this.supervisors.set([]);
        this.loadingList.set(false);
      },
    });
  }

  empLabel(row: ArSupervisorDto): string {
    return row.empId ? `${row.empId} - ${row.empName ?? ''}` : row.personId;
  }

  selectSupervisor(row: ArSupervisorDto): void {
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
        this.deptInfoError.set(this.i18n.t('arSupervisor.js.deptError', 'Lỗi dữ liệu phòng ban.'));
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

  /** nzCheckedKeysChange trả thẳng danh sách key đã cascade cha/con (tick cha -> tick hết con, tick
   *  đủ con -> tick cha) - nz-tree tự lo phần này, không cần tự viết đệ quy như hàm dept-checkbox
   *  change ở bản gốc. */
  onDeptCheckedKeysChange(keys: Array<string | number>): void {
    this.checkedDeptKeys.set(keys.map(String));
  }

  saveDepartments(): void {
    const personId = this.selectedPersonId();
    if (!personId) {
      this.message.error(this.i18n.t('arSupervisor.js.noPersonId', 'Chưa có ID nhân sự được chọn.'));
      return;
    }
    const keys = this.checkedDeptKeys();
    this.savingDepts.set(true);
    this.api.saveDepartments(personId, keys).subscribe({
      next: () => {
        this.savingDepts.set(false);
        const prefix = this.i18n.t('arSupervisor.js.savedDeptsPrefix', 'Đã lưu');
        const suffix = this.i18n.t('arSupervisor.js.savedDeptsSuf', ' phòng ban phân quyền cho NV!');
        this.message.success(`${prefix} ${keys.length}${suffix}`);
      },
      error: () => {
        this.savingDepts.set(false);
        this.message.error(this.i18n.t('arSupervisor.js.saveConnError', 'Lỗi kết nối khi lưu!'));
      },
    });
  }

  private buildDeptTree(list: DeptTreeNode[]): NzTreeNodeOptions[] {
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

  // ==================== Modal Thêm mới nhân viên phân quyền ====================

  openAddModal(): void {
    this.form = { ...EMPTY_FORM };
    this.modalVisible.set(true);
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  saveForm(): void {
    if (!this.form.personId) {
      this.message.warning(this.i18n.t('arSupervisor.js.pleaseSearch', 'Vui lòng Tra cứu để đảm bảo mã NV hợp lệ.'));
      return;
    }
    const payload: ArSupervisorSavePayload = {
      personId: this.form.personId,
      orderno: this.form.orderno,
      modifyYn: this.form.modifyYn,
      activity: this.form.activity,
    };
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.message.success(res.message || this.i18n.t('common.save', 'Lưu'));
        this.loadSupervisors();
      },
      error: (err) => {
        this.saving.set(false);
        this.message.error(err?.error?.error || this.i18n.t('arSupervisor.js.serverError', 'Lỗi xử lý server'));
      },
    });
  }

  // ==================== Xóa ====================

  openDeleteConfirm(row: ArSupervisorDto, event: MouseEvent): void {
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
        this.message.success(res.message || 'Xóa thành công!');
        if (this.selectedPersonId() === personId) this.resetRightPane();
        this.loadSupervisors();
      },
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t('arSupervisor.js.deleteError', 'Lỗi khi xóa!'));
      },
    });
  }

  // ==================== Modal tìm kiếm nhân viên ====================

  openPicker(): void {
    this.pickerKeyword = '';
    this.pickerDeptNos = [];
    this.pickerEmpOffice = null;
    this.pickerVisible.set(true);
    this.pickerSearch();
  }

  closePicker(): void {
    this.pickerVisible.set(false);
  }

  pickerSearch(): void {
    this.pickerLoading.set(true);
    this.pickerErrorMessage.set(null);
    this.empApi
      .searchEmployees({
        keyword: this.pickerKeyword.trim(),
        deptCodes: this.expandDeptSelection(this.pickerDeptNos),
        empOffice: this.pickerEmpOffice ?? '',
      })
      .subscribe({
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

  private buildPickerDeptTree(list: AuthDeptNode[]): NzTreeNodeOptions[] {
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
