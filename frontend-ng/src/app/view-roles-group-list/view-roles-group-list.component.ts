import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { SyRoleDto } from '../view-roles-group/view-roles-group.model';
import { RoleGroupRelationsPayload, RoleGroupSavePayload, SyRoleGroupDto } from './view-roles-group-list.model';
import { ViewRolesGroupListService } from './view-roles-group-list.service';

/** Các key message.properties dùng trong trang này - toàn bộ đã có sẵn từ bản Thymeleaf gốc (namespace
 *  sys.role.viewRolesGroupList và các label/opt dùng chung của sys.role.viewRolesGroup), không cần thêm
 *  key mới. Tải trước 1 lần ở ngOnInit. */
const I18N_KEYS = [
  'common.stt', 'common.action', 'common.search', 'common.clearFilter', 'common.addNew', 'common.exportExcel',
  'common.save', 'common.close', 'common.edit', 'common.delete', 'common.confirm', 'common.cancel',
  'common.noData', 'common.totalRows', 'common.loadFail', 'common.saveSuccess', 'common.saveFail',
  'common.deleteSuccess', 'common.deleteFail', 'common.active', 'common.inactive',
  'sys.role.viewRolesGroupList.search.keyword', 'sys.role.viewRolesGroupList.search.keyword.placeholder',
  'sys.role.viewRolesGroupList.col.roleGroupId', 'sys.role.viewRolesGroupList.col.nameVi',
  'sys.role.viewRolesGroupList.col.sysType', 'sys.role.viewRolesGroupList.col.joinDefault',
  'sys.role.viewRolesGroupList.col.status', 'sys.role.viewRolesGroupList.panel.title',
  'sys.role.viewRolesGroupList.btn.saveRelations', 'sys.role.viewRolesGroupList.hint.selectGroup',
  'sys.role.viewRolesGroupList.modal.title', 'sys.role.viewRolesGroupList.label.roleGroupId',
  'sys.role.viewRolesGroupList.label.roleGroupId.placeholder', 'sys.role.viewRolesGroupList.label.joinDefault',
  'sys.role.viewRolesGroupList.msg.addTitle', 'sys.role.viewRolesGroupList.msg.editTitle',
  'sys.role.viewRolesGroupList.msg.confirmDelete', 'sys.role.viewRolesGroupList.msg.noRoleData',
  'sys.role.viewRolesGroupList.msg.panelPrefix',
  'sys.role.viewRolesGroup.label.nameVi', 'sys.role.viewRolesGroup.label.nameEn',
  'sys.role.viewRolesGroup.label.nameZh', 'sys.role.viewRolesGroup.label.nameKo',
  'sys.role.viewRolesGroup.label.sysType', 'sys.role.viewRolesGroup.label.orderNo',
  'sys.role.viewRolesGroup.label.activity', 'sys.role.viewRolesGroup.opt.hub', 'sys.role.viewRolesGroup.opt.partner',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200];

interface RoleGroupForm {
  roleGroupNo: string | null;
  roleGroupId: string;
  nameVi: string;
  nameEn: string;
  nameZh: string;
  nameKo: string;
  sysType: number;
  orderNo: number;
  joinDefault: boolean;
  activity: boolean;
}

const EMPTY_FORM: RoleGroupForm = {
  roleGroupNo: null, roleGroupId: '', nameVi: '', nameEn: '', nameZh: '', nameKo: '', sysType: 0, orderNo: 0,
  joinDefault: false, activity: true,
};

/**
 * Bản Angular của sys/syRole/viewSyRolesGroupList.html (Thymeleaf + jQuery DataTables) - quản lý nhóm
 * quyền (SY_ROLE_GROUP) và gán các Role (SY_ROLE) cho từng nhóm (SY_ROLE_GROUP_RELATION). Gọi lại nguyên
 * API JSON đã có sẵn ở SyRoleGroupController (xem ViewRolesGroupListService) - không đổi backend; lưu ý
 * trang này gọi /sys/api/role_group/*, KHÁC với module view-roles-group (SY_ROLE, /sys/api/role/*) - 2
 * trang tên gần giống nhau nhưng quản lý 2 bảng khác nhau.
 *
 * Danh sách nhóm quyền bên trái: DataTables -> nz-table (phân trang/lọc client-side vì API gốc trả toàn
 * bộ mảng, không phân trang server), chọn 1 dòng để xem/sửa danh sách Role được gán bên phải, nz-modal
 * thay modal Bootstrap cho thêm/sửa.
 *
 * Panel phải: bản gốc render danh sách Role dạng list-group + checkbox phẳng (không phải cây như menu)
 * nên giữ nguyên dạng checkbox phẳng (nz-checkbox), không dùng nz-tree.
 *
 * Endpoint export cũ (GET /sys/api/role_group/export) thực chất xuất file .csv nên không dùng lại - xuất
 * excel làm client-side bằng thư viện xlsx (SheetJS) để đúng định dạng .xlsx thật (xem CLAUDE.md).
 */
@Component({
  selector: 'app-view-roles-group-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzInputNumberModule,
    NzSelectModule,
    NzCheckboxModule,
    NzButtonModule,
    NzModalModule,
    NzAlertModule,
    NzTagModule,
    TranslatePipe,
  ],
  templateUrl: './view-roles-group-list.component.html',
  styleUrl: './view-roles-group-list.component.css',
})
export class ViewRolesGroupListComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<SyRoleGroupDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  searchKeyword = '';

  readonly allRoles = signal<SyRoleDto[]>([]);
  readonly selectedGroupNo = signal<string | null>(null);
  readonly selectedGroupLabel = signal<string | null>(null);
  readonly checkedRoleNos = signal<string[]>([]);
  readonly relationsLoading = signal(false);
  readonly savingRelations = signal(false);

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew()
      ? this.i18n.t('sys.role.viewRolesGroupList.msg.addTitle', 'Thêm mới Nhóm quyền')
      : this.i18n.t('sys.role.viewRolesGroupList.msg.editTitle', 'Cập nhật Nhóm quyền'),
  );
  form: RoleGroupForm = { ...EMPTY_FORM };

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private deleteTarget: SyRoleGroupDto | null = null;

  constructor(
    private readonly api: ViewRolesGroupListService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getAllRoles().subscribe({
      next: (list) => this.allRoles.set(list ?? []),
      error: () => this.allRoles.set([]),
    });
    this.search();
  }

  sysTypeLabel(sysType: number | null): string {
    return sysType === 0
      ? this.i18n.t('sys.role.viewRolesGroup.opt.hub', 'Hub')
      : this.i18n.t('sys.role.viewRolesGroup.opt.partner', 'Partner');
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.list(this.searchKeyword).subscribe({
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
    this.searchKeyword = '';
    this.search();
  }

  // ==================== Chọn nhóm quyền -> tải danh sách Role đã gán ====================

  selectGroup(row: SyRoleGroupDto): void {
    this.selectedGroupNo.set(row.roleGroupNo);
    this.selectedGroupLabel.set(row.nameVi || row.roleGroupId);
    this.relationsLoading.set(true);
    this.checkedRoleNos.set([]);
    this.api.detail(row.roleGroupNo).subscribe({
      next: (res) => {
        this.checkedRoleNos.set(res?.roleNos ?? []);
        this.relationsLoading.set(false);
      },
      error: () => {
        this.relationsLoading.set(false);
      },
    });
  }

  isRoleChecked(roleNo: string): boolean {
    return this.checkedRoleNos().includes(roleNo);
  }

  toggleRole(roleNo: string, checked: boolean): void {
    const current = this.checkedRoleNos();
    this.checkedRoleNos.set(
      checked ? [...current, roleNo] : current.filter((no) => no !== roleNo),
    );
  }

  saveRelations(): void {
    const roleGroupNo = this.selectedGroupNo();
    if (!roleGroupNo) return;
    const payload: RoleGroupRelationsPayload = {
      roleGroupNo,
      roleNos: this.checkedRoleNos(),
    };
    this.savingRelations.set(true);
    this.api.saveRelations(payload).subscribe({
      next: (res) => {
        this.savingRelations.set(false);
        if (res.success) {
          this.message.success(res.message || this.i18n.t('common.saveSuccess', 'Lưu thành công!'));
        } else {
          this.message.error(res.message || this.i18n.t('common.saveFail', 'Lưu thất bại!'));
        }
      },
      error: () => {
        this.savingRelations.set(false);
        this.message.error(this.i18n.t('common.saveFail', 'Lưu thất bại!'));
      },
    });
  }

  // ==================== Modal Thêm mới / Cập nhật ====================

  openAddModal(): void {
    this.isNew.set(true);
    this.form = { ...EMPTY_FORM };
    this.modalVisible.set(true);
  }

  openEditModal(row: SyRoleGroupDto): void {
    this.isNew.set(false);
    this.form = {
      roleGroupNo: row.roleGroupNo,
      roleGroupId: row.roleGroupId || '',
      nameVi: row.nameVi || '',
      nameEn: row.nameEn || '',
      nameZh: row.nameZh || '',
      nameKo: row.nameKo || '',
      sysType: row.sysType ?? 0,
      orderNo: row.orderNo ?? 0,
      joinDefault: row.joinDefault === 1,
      activity: row.activity !== 0,
    };
    this.modalVisible.set(true);
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  saveForm(): void {
    if (!this.form.nameVi) {
      this.message.warning(this.i18n.t('common.saveFail', 'Lưu thất bại!'));
      return;
    }
    const payload: RoleGroupSavePayload = {
      roleGroupNo: this.form.roleGroupNo,
      cpnyId: null,
      nameVi: this.form.nameVi,
      nameEn: this.form.nameEn || null,
      nameZh: this.form.nameZh || null,
      nameKo: this.form.nameKo || null,
      sysType: this.form.sysType,
      orderNo: this.form.orderNo,
      joinDefault: this.form.joinDefault ? 1 : 0,
      activity: this.form.activity ? 1 : 0,
    };
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        if (res.success) {
          this.modalVisible.set(false);
          this.message.success(res.message || this.i18n.t('common.saveSuccess', 'Lưu thành công!'));
          this.search();
        } else {
          this.message.error(res.message || this.i18n.t('common.saveFail', 'Lưu thất bại!'));
        }
      },
      error: () => {
        this.saving.set(false);
        this.message.error(this.i18n.t('common.saveFail', 'Lưu thất bại!'));
      },
    });
  }

  // ==================== Xóa ====================

  openDeleteConfirm(row: SyRoleGroupDto): void {
    this.deleteTarget = row;
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get deleteTargetName(): string {
    return this.deleteTarget ? `${this.deleteTarget.roleGroupId} - ${this.deleteTarget.nameVi ?? ''}` : '';
  }

  confirmDelete(): void {
    if (!this.deleteTarget?.roleGroupId) return;
    const roleGroupNo = this.deleteTarget.roleGroupNo;
    const roleGroupId = this.deleteTarget.roleGroupId;
    this.deleting.set(true);
    this.api.delete(roleGroupId).subscribe({
      next: (res) => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        if (res.success) {
          this.message.success(res.message || this.i18n.t('common.deleteSuccess', 'Xóa thành công!'));
          if (this.selectedGroupNo() === roleGroupNo) {
            this.selectedGroupNo.set(null);
            this.selectedGroupLabel.set(null);
            this.checkedRoleNos.set([]);
          }
          this.search();
        } else {
          this.message.error(res.message || this.i18n.t('common.deleteFail', 'Xóa thất bại!'));
        }
      },
      error: () => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.message.error(this.i18n.t('common.deleteFail', 'Xóa thất bại!'));
      },
    });
  }

  // ==================== Xuất Excel ====================

  /** Xuất excel client-side (endpoint /sys/api/role_group/export cũ thực chất trả .csv nên không dùng
   *  lại) - dùng thư viện xlsx (SheetJS) để tạo đúng file .xlsx nhị phân (xem CLAUDE.md). */
  exportExcel(): void {
    const headers = [
      this.i18n.t('common.stt', 'STT'),
      this.i18n.t('sys.role.viewRolesGroupList.col.roleGroupId', 'Mã Nhóm (ID)'),
      this.i18n.t('sys.role.viewRolesGroupList.col.nameVi', 'Tên TV'),
      this.i18n.t('sys.role.viewRolesGroupList.col.sysType', 'Hệ thống'),
      this.i18n.t('sys.role.viewRolesGroupList.col.joinDefault', 'Mặc định'),
      this.i18n.t('sys.role.viewRolesGroupList.col.status', 'Trạng thái'),
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      r.roleGroupId,
      r.nameVi,
      this.sysTypeLabel(r.sysType),
      r.joinDefault === 1 ? this.i18n.t('common.active', 'Hoạt động') : '',
      r.activity === 1 ? this.i18n.t('common.active', 'Hoạt động') : this.i18n.t('common.inactive', 'Ngừng hoạt động'),
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSach');
    XLSX.writeFile(workbook, 'role_group_list.xlsx');
  }
}
