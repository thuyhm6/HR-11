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
import { NzTreeModule, NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { SyMenuDto } from '../view-menu-list/view-menu-list.model';
import { RoleRelationsPayload, RoleSavePayload, SyRoleDto } from './view-roles-group.model';
import { ViewRolesGroupService } from './view-roles-group.service';

/** Các key message.properties dùng trong trang này - tất cả đều đã có sẵn từ bản Thymeleaf gốc (namespace
 *  sys.role.viewRolesGroup.*), chỉ thêm 2 key mới opt.hub/opt.partner cho combo Loại hệ thống (bản gốc
 *  hardcode "Hub"/"Partner" thẳng trong HTML, không qua message.properties - xem CLAUDE.md). Tải trước
 *  1 lần ở ngOnInit. */
const I18N_KEYS = [
  'common.stt', 'common.action', 'common.search', 'common.clearFilter', 'common.addNew', 'common.exportExcel',
  'common.save', 'common.close', 'common.edit', 'common.delete', 'common.confirm', 'common.cancel',
  'common.noData', 'common.totalRows', 'common.loadFail', 'common.saveSuccess', 'common.saveFail',
  'common.deleteSuccess', 'common.deleteFail',
  'sys.role.viewRolesGroup.search.keyword', 'sys.role.viewRolesGroup.search.keyword.placeholder',
  'sys.role.viewRolesGroup.col.roleId', 'sys.role.viewRolesGroup.col.nameVi', 'sys.role.viewRolesGroup.col.sysType',
  'sys.role.viewRolesGroup.menuPanel.title', 'sys.role.viewRolesGroup.btn.savePermission',
  'sys.role.viewRolesGroup.hint.selectRole', 'sys.role.viewRolesGroup.label.roleId',
  'sys.role.viewRolesGroup.label.roleId.placeholder', 'sys.role.viewRolesGroup.label.nameVi',
  'sys.role.viewRolesGroup.label.nameEn', 'sys.role.viewRolesGroup.label.nameZh',
  'sys.role.viewRolesGroup.label.nameKo', 'sys.role.viewRolesGroup.label.sysType',
  'sys.role.viewRolesGroup.label.orderNo', 'sys.role.viewRolesGroup.label.activity',
  'sys.role.viewRolesGroup.msg.addTitle', 'sys.role.viewRolesGroup.msg.editTitle',
  'sys.role.viewRolesGroup.msg.noRoleSelected', 'sys.role.viewRolesGroup.msg.confirmDelete',
  'sys.role.viewRolesGroup.msg.menuPanelPrefix', 'sys.role.viewRolesGroup.opt.hub',
  'sys.role.viewRolesGroup.opt.partner',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200];

interface RoleForm {
  roleNo: string | null;
  roleId: string;
  nameVi: string;
  nameEn: string;
  nameZh: string;
  nameKo: string;
  sysType: string;
  orderNo: number;
  activity: boolean;
}

const EMPTY_FORM: RoleForm = {
  roleNo: null, roleId: '', nameVi: '', nameEn: '', nameZh: '', nameKo: '', sysType: '0', orderNo: 0,
  activity: true,
};

/**
 * Bản Angular của sys/syRole/viewRolesGroup.html (Thymeleaf + jQuery DataTables) - quản lý nhóm quyền
 * (SY_ROLE) và phân quyền menu cho từng nhóm (SY_ROLE_RELATION). Gọi lại nguyên API JSON đã có sẵn ở
 * SyRoleController (xem ViewRolesGroupService) - không đổi backend; lưu ý trang gốc gọi
 * /sys/api/role/*, KHÔNG phải /sys/api/role_group/* (đó là API của 1 trang khác -
 * SyRoleGroupController/viewSyRolesGroupList - dễ nhầm vì tên file gần giống nhau).
 *
 * Danh sách nhóm quyền bên trái: DataTables -> nz-table (thay bằng danh sách phân trang client-side,
 * tham khảo AddressInfoComponent), chọn 1 dòng để xem/sửa phân quyền bên phải, nz-modal thay modal
 * Bootstrap cho thêm/sửa.
 *
 * Cây phân quyền menu bên phải: bản gốc tự viết đệ quy jQuery (tick 1 menu -> tick hết menu con +
 * tick tất cả menu cha, không tick lại toàn bộ cha khi bỏ tick con) - thay bằng nz-tree nzCheckable
 * (cascade cha/con chuẩn có sẵn, tham khảo ViewAttendanceKeeperComponent - cùng kiểu "cây checkbox
 * phân quyền") thay vì cố chép lại đúng logic đệ quy cũ.
 *
 * sysType (Loại hệ thống) là String ở model gốc (SyRole.sysType) nhưng JS gốc lại parseInt/so sánh số
 * khi hiển thị badge (data === 0 ? Hub : Partner) - vì field trả về là chuỗi "0"/"1" nên so sánh này
 * luôn sai (luôn hiện "Partner"). Ở đây so sánh đúng kiểu chuỗi để hiển thị chính xác, không lặp lại
 * lỗi hiển thị của bản gốc.
 *
 * Endpoint export cũ (GET /sys/api/role/export) thực chất xuất file .csv nên không dùng lại - xuất
 * excel làm client-side bằng thư viện xlsx (SheetJS) để đúng định dạng .xlsx thật (xem CLAUDE.md).
 */
@Component({
  selector: 'app-view-roles-group',
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
    NzTreeModule,
    TranslatePipe,
  ],
  templateUrl: './view-roles-group.component.html',
  styleUrl: './view-roles-group.component.css',
})
export class ViewRolesGroupComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<SyRoleDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  searchKeyword = '';

  readonly menuTreeNodes = signal<NzTreeNodeOptions[]>([]);
  readonly selectedRoleNo = signal<string | null>(null);
  readonly selectedRoleLabel = signal<string | null>(null);
  readonly checkedMenuKeys = signal<string[]>([]);
  readonly relationsLoading = signal(false);
  readonly savingRelations = signal(false);

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew()
      ? this.i18n.t('sys.role.viewRolesGroup.msg.addTitle', 'Thêm mới Nhóm quyền')
      : this.i18n.t('sys.role.viewRolesGroup.msg.editTitle', 'Cập nhật Nhóm quyền'),
  );
  form: RoleForm = { ...EMPTY_FORM };

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private deleteTarget: SyRoleDto | null = null;

  constructor(
    private readonly api: ViewRolesGroupService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getMenuTree().subscribe({
      next: (list) => this.menuTreeNodes.set(this.buildMenuTree(list ?? [])),
      error: () => this.menuTreeNodes.set([]),
    });
    this.search();
  }

  sysTypeLabel(sysType: string | null): string {
    return sysType === '0'
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

  // ==================== Chọn nhóm quyền -> tải cây phân quyền ====================

  selectRole(row: SyRoleDto): void {
    this.selectedRoleNo.set(row.roleNo);
    this.selectedRoleLabel.set(row.nameVi || row.roleId);
    this.relationsLoading.set(true);
    this.checkedMenuKeys.set([]);
    this.api.detail(row.roleNo).subscribe({
      next: (res) => {
        this.checkedMenuKeys.set((res?.roleRelations ?? []).map((r) => r.menuNo));
        this.relationsLoading.set(false);
      },
      error: () => {
        this.relationsLoading.set(false);
      },
    });
  }

  onMenuCheckedKeysChange(keys: Array<string | number>): void {
    this.checkedMenuKeys.set(keys.map(String));
  }

  saveRelations(): void {
    const roleNo = this.selectedRoleNo();
    if (!roleNo) {
      this.message.warning(this.i18n.t('sys.role.viewRolesGroup.msg.noRoleSelected', 'Chưa chọn nhóm quyền!'));
      return;
    }
    const payload: RoleRelationsPayload = {
      roleNo,
      roleRelations: this.checkedMenuKeys().map((menuNo) => ({
        menuNo, selectr: '1', insertr: '1', updater: '1', deleter: '1',
      })),
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

  openEditModal(row: SyRoleDto): void {
    this.isNew.set(false);
    this.form = {
      roleNo: row.roleNo,
      roleId: row.roleId || '',
      nameVi: row.nameVi || '',
      nameEn: row.nameEn || '',
      nameZh: row.nameZh || '',
      nameKo: row.nameKo || '',
      sysType: row.sysType || '0',
      orderNo: row.orderNo ?? 0,
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
    const payload: RoleSavePayload = {
      roleNo: this.form.roleNo,
      cpnyId: null,
      nameVi: this.form.nameVi,
      nameEn: this.form.nameEn || null,
      nameZh: this.form.nameZh || null,
      nameKo: this.form.nameKo || null,
      sysType: this.form.sysType,
      orderNo: this.form.orderNo,
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

  openDeleteConfirm(row: SyRoleDto): void {
    this.deleteTarget = row;
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get deleteTargetName(): string {
    return this.deleteTarget ? `${this.deleteTarget.roleId} - ${this.deleteTarget.nameVi ?? ''}` : '';
  }

  confirmDelete(): void {
    if (!this.deleteTarget?.roleNo) return;
    const roleNo = this.deleteTarget.roleNo;
    this.deleting.set(true);
    this.api.delete(roleNo).subscribe({
      next: (res) => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        if (res.success) {
          this.message.success(res.message || this.i18n.t('common.deleteSuccess', 'Xóa thành công!'));
          if (this.selectedRoleNo() === roleNo) {
            this.selectedRoleNo.set(null);
            this.selectedRoleLabel.set(null);
            this.checkedMenuKeys.set([]);
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

  /** Xuất excel client-side (endpoint /sys/api/role/export cũ thực chất trả .csv nên không dùng lại) -
   *  dùng thư viện xlsx (SheetJS) để tạo đúng file .xlsx nhị phân (xem CLAUDE.md). */
  exportExcel(): void {
    const headers = [
      this.i18n.t('common.stt', 'STT'),
      this.i18n.t('sys.role.viewRolesGroup.col.roleId', 'Role ID'),
      this.i18n.t('sys.role.viewRolesGroup.col.nameVi', 'Tên TV'),
      this.i18n.t('sys.role.viewRolesGroup.col.sysType', 'Hệ thống'),
    ];
    const dataRows = this.rows().map((r, i) => [i + 1, r.roleId, r.nameVi, this.sysTypeLabel(r.sysType)]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSach');
    XLSX.writeFile(workbook, 'role_group_list.xlsx');
  }

  // ==================== Dựng cây menu phân quyền ====================

  private buildMenuTree(list: SyMenuDto[]): NzTreeNodeOptions[] {
    const idSet = new Set(list.map((m) => m.menuNo));
    const map = new Map<string, NzTreeNodeOptions & { parent: string }>();
    list.forEach((item) => {
      let parent = item.menuParentNo;
      if (!parent || !idSet.has(parent)) parent = '#';
      map.set(item.menuNo, {
        title: item.nameVi || item.menuCode || item.menuNo,
        key: item.menuNo,
        parent,
        children: [],
      });
    });
    const roots: NzTreeNodeOptions[] = [];
    map.forEach((node) => {
      if (node.parent !== '#' && map.has(node.parent)) {
        map.get(node.parent)!.children!.push(node);
      } else {
        roots.push(node);
      }
    });
    const markLeaf = (nodes: NzTreeNodeOptions[], expand: boolean) => {
      nodes.forEach((n) => {
        n.isLeaf = !n.children || n.children.length === 0;
        n.expanded = expand;
        if (n.children?.length) markLeaf(n.children, false);
      });
    };
    markLeaf(roots, true);
    return roots;
  }
}
