import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { SyRoleGroupDto } from '../view-roles-group-list/view-roles-group-list.model';
import { SyUserDto, UserRelationsPayload } from './view-login-user.model';
import { ViewLoginUserService } from './view-login-user.service';

const DEFAULT_PASSWORD = '123456A@';

/** Các key message.properties dùng trong trang này - toàn bộ đã có sẵn từ bản Thymeleaf gốc (namespace
 *  sys.role.viewLoginUser) và các key common.* dùng chung, không cần thêm key mới. Tải trước 1 lần ở
 *  ngOnInit. */
const I18N_KEYS = [
  'common.search', 'common.clearFilter', 'common.exportExcel', 'common.close', 'common.confirm',
  'common.noData', 'common.totalRows', 'common.loadFail', 'common.saveSuccess', 'common.saveFail',
  'sys.role.viewLoginUser.search.keyword', 'sys.role.viewLoginUser.search.keyword.placeholder',
  'sys.role.viewLoginUser.col.no', 'sys.role.viewLoginUser.col.loginId', 'sys.role.viewLoginUser.col.fullName',
  'sys.role.viewLoginUser.col.dept', 'sys.role.viewLoginUser.col.empCode', 'sys.role.viewLoginUser.col.accountType',
  'sys.role.viewLoginUser.col.action', 'sys.role.viewLoginUser.rolePanel.title',
  'sys.role.viewLoginUser.rolePanel.titlePrefix', 'sys.role.viewLoginUser.hint.selectUser',
  'sys.role.viewLoginUser.noRoleData', 'sys.role.viewLoginUser.btn.saveRoleGroup',
  'sys.role.viewLoginUser.modal.resetPassword.title', 'sys.role.viewLoginUser.modal.resetPassword.loginId',
  'sys.role.viewLoginUser.modal.resetPassword.newPassword', 'sys.role.viewLoginUser.modal.resetPassword.defaultNote',
];

const PAGE_SIZE_OPTIONS = [20, 50, 100, 200];

/**
 * Bản Angular của sys/syRole/viewLoginUser.html (Thymeleaf + jQuery DataTables) - quản lý danh sách
 * người dùng đăng nhập (SY_USER), gán Nhóm quyền (SY_ROLE_GROUP) cho từng user và reset mật khẩu. Gọi
 * lại nguyên API JSON đã có sẵn ở SyUserController (xem ViewLoginUserService) - không đổi backend;
 * backend đã tự chặn quyền truy cập (chỉ ADMIN/SYS/HRM) qua session ở từng API.
 *
 * Danh sách user bên trái: DataTables -> nz-table (phân trang/lọc client-side vì API gốc trả toàn bộ
 * mảng, không phân trang server), chọn 1 dòng để xem/sửa danh sách Nhóm quyền được gán bên phải.
 *
 * Panel phải: bản gốc render danh sách Nhóm quyền dạng list-group + checkbox phẳng (không phải cây) nên
 * giữ nguyên dạng checkbox phẳng (nz-checkbox), tham khảo cách làm ở ViewRolesGroupListComponent (cùng
 * kiểu "gán danh sách phẳng" chứ không phải cây menu như ViewAttendanceKeeperComponent).
 *
 * Reset mật khẩu: bản gốc dùng modal Bootstrap nhập tay mật khẩu mới (mặc định 123456A@) - thay bằng
 * nz-modal, giữ nguyên hành vi.
 *
 * Endpoint export cũ (GET /sys/api/user/export) thực chất xuất file .csv nên không dùng lại - xuất excel
 * làm client-side bằng thư viện xlsx (SheetJS) để đúng định dạng .xlsx thật (xem CLAUDE.md).
 */
@Component({
  selector: 'app-view-login-user',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzCheckboxModule,
    NzButtonModule,
    NzModalModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './view-login-user.component.html',
  styleUrl: './view-login-user.component.css',
})
export class ViewLoginUserComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<SyUserDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  searchKeyword = '';

  readonly allRoleGroups = signal<SyRoleGroupDto[]>([]);
  readonly selectedUserNo = signal<string | null>(null);
  readonly selectedUserLabel = signal<string | null>(null);
  readonly checkedRoleGroupNos = signal<string[]>([]);
  readonly relationsLoading = signal(false);
  readonly savingRelations = signal(false);

  readonly resetVisible = signal(false);
  readonly resetting = signal(false);
  resetUserNo = '';
  resetUserName = '';
  resetNewPassword = DEFAULT_PASSWORD;

  constructor(
    private readonly api: ViewLoginUserService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getAllRoleGroups().subscribe({
      next: (list) => this.allRoleGroups.set(list ?? []),
      error: () => this.allRoleGroups.set([]),
    });
    this.search();
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

  // ==================== Chọn user -> tải danh sách Nhóm quyền đã gán ====================

  selectUser(row: SyUserDto): void {
    this.selectedUserNo.set(row.userNo);
    this.selectedUserLabel.set(row.userName || row.userNo);
    this.relationsLoading.set(true);
    this.checkedRoleGroupNos.set([]);
    this.api.detail(row.userNo).subscribe({
      next: (res) => {
        this.checkedRoleGroupNos.set(res?.roleGroupNos ?? []);
        this.relationsLoading.set(false);
      },
      error: () => {
        this.relationsLoading.set(false);
      },
    });
  }

  isRoleGroupChecked(roleGroupNo: string): boolean {
    return this.checkedRoleGroupNos().includes(roleGroupNo);
  }

  toggleRoleGroup(roleGroupNo: string, checked: boolean): void {
    const current = this.checkedRoleGroupNos();
    this.checkedRoleGroupNos.set(
      checked ? [...current, roleGroupNo] : current.filter((no) => no !== roleGroupNo),
    );
  }

  saveRelations(): void {
    const userNo = this.selectedUserNo();
    if (!userNo) return;
    const payload: UserRelationsPayload = {
      userNo,
      roleGroupNos: this.checkedRoleGroupNos(),
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

  // ==================== Reset mật khẩu ====================

  openResetPassword(row: SyUserDto): void {
    this.resetUserNo = row.userNo;
    this.resetUserName = row.userName;
    this.resetNewPassword = DEFAULT_PASSWORD;
    this.resetVisible.set(true);
  }

  closeResetPassword(): void {
    this.resetVisible.set(false);
  }

  confirmResetPassword(): void {
    if (!this.resetNewPassword) {
      this.message.warning(this.i18n.t('common.saveFail', 'Lưu thất bại!'));
      return;
    }
    this.resetting.set(true);
    this.api.resetPassword(this.resetUserNo, this.resetNewPassword).subscribe({
      next: (res) => {
        this.resetting.set(false);
        if (res.success) {
          this.resetVisible.set(false);
          this.message.success(res.message || this.i18n.t('common.saveSuccess', 'Lưu thành công!'));
        } else {
          this.message.error(res.message || this.i18n.t('common.saveFail', 'Lưu thất bại!'));
        }
      },
      error: () => {
        this.resetting.set(false);
        this.message.error(this.i18n.t('common.saveFail', 'Lưu thất bại!'));
      },
    });
  }

  // ==================== Xuất Excel ====================

  /** Xuất excel client-side (endpoint /sys/api/user/export cũ thực chất trả .csv nên không dùng lại) -
   *  dùng thư viện xlsx (SheetJS) để tạo đúng file .xlsx nhị phân (xem CLAUDE.md). */
  exportExcel(): void {
    const headers = [
      this.i18n.t('sys.role.viewLoginUser.col.no', 'STT'),
      this.i18n.t('sys.role.viewLoginUser.col.loginId', 'ID Đăng nhập'),
      this.i18n.t('sys.role.viewLoginUser.col.fullName', 'Họ tên'),
      this.i18n.t('sys.role.viewLoginUser.col.dept', 'Phòng ban'),
      this.i18n.t('sys.role.viewLoginUser.col.empCode', 'Mã NV'),
      this.i18n.t('sys.role.viewLoginUser.col.accountType', 'Loại TK'),
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1, r.userName, r.empName || r.userName, r.deptName, r.personId, r.userType,
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSach');
    XLSX.writeFile(workbook, 'login_user_list.xlsx');
  }
}
