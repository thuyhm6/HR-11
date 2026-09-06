import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { MenuSavePayload, SyMenuDto } from './view-menu-list.model';
import { ViewMenuListService } from './view-menu-list.service';

/** Các key message.properties dùng trong trang này - đều đã có sẵn (sys.basic.viewMenuList.* dành
 *  riêng cho trang này, cộng các key chung), tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'common.stt', 'common.action', 'common.status', 'common.active', 'common.inactive',
  'common.search', 'common.clearFilter', 'common.addNew', 'common.exportExcel',
  'common.save', 'common.close', 'common.delete', 'common.edit', 'common.confirm', 'common.cancel',
  'common.noData', 'common.totalRows', 'common.loadFail', 'common.saveSuccess', 'common.saveFail',
  'common.deleteSuccess', 'common.deleteFail',
  'sys.basic.viewMenuList.search.keyword', 'sys.basic.viewMenuList.search.keyword.placeholder',
  'sys.basic.viewMenuList.col.menuCode', 'sys.basic.viewMenuList.col.nameVi', 'sys.basic.viewMenuList.col.nameEn',
  'sys.basic.viewMenuList.col.parentMenu', 'sys.basic.viewMenuList.col.url', 'sys.basic.viewMenuList.col.orderNo',
  'sys.basic.viewMenuList.label.menuCode', 'sys.basic.viewMenuList.label.parentMenuCode',
  'sys.basic.viewMenuList.label.parentMenuCode.placeholder', 'sys.basic.viewMenuList.label.nameVi',
  'sys.basic.viewMenuList.label.nameEn', 'sys.basic.viewMenuList.label.nameZh', 'sys.basic.viewMenuList.label.nameKo',
  'sys.basic.viewMenuList.label.url', 'sys.basic.viewMenuList.label.icon', 'sys.basic.viewMenuList.label.depth',
  'sys.basic.viewMenuList.label.orderNo', 'sys.basic.viewMenuList.label.activity',
  'sys.basic.viewMenuList.msg.addTitle', 'sys.basic.viewMenuList.msg.editTitle',
  'sys.basic.viewMenuList.msg.confirmDelete',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200];

interface MenuForm {
  menuNo: string | null;
  menuParentNo: string;
  menuCode: string;
  menuImg: string;
  menuUrl: string;
  depth: number;
  orderNo: number;
  activity: boolean;
  nameVi: string;
  nameEn: string;
  nameZh: string;
  nameKo: string;
}

const EMPTY_FORM: MenuForm = {
  menuNo: null, menuParentNo: '', menuCode: '', menuImg: '', menuUrl: '', depth: 0, orderNo: 0, activity: true,
  nameVi: '', nameEn: '', nameZh: '', nameKo: '',
};

/**
 * Bản Angular của sys/basicMaintenance/viewMenuList.html (Thymeleaf + jQuery DataTables) - quản lý
 * menu hệ thống (bảng sy_menu). Gọi lại nguyên API JSON đã có sẵn ở SyMenuController (xem
 * ViewMenuListService) - không đổi backend. Dùng nz-table (phân trang client-side, đúng hành vi
 * DataTables gốc: BE trả toàn bộ danh sách theo bộ lọc, không phân trang server, tham khảo
 * AddressInfoComponent) thay cho jQuery DataTables; nz-modal thay modal Bootstrap. Endpoint export cũ
 * (GET /sys/api/menu/export) thực chất xuất file .csv (đặt sai tên .csv dù Content-Type
 * octet-stream) nên không dùng lại - xuất excel làm client-side bằng thư viện xlsx (SheetJS) để đúng
 * định dạng .xlsx thật (xem CLAUDE.md), giống AddressInfoComponent.
 */
@Component({
  selector: 'app-view-menu-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzInputNumberModule,
    NzCheckboxModule,
    NzButtonModule,
    NzModalModule,
    NzTagModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './view-menu-list.component.html',
  styleUrl: './view-menu-list.component.css',
})
export class ViewMenuListComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<SyMenuDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  searchKeyword = '';

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew()
      ? this.i18n.t('sys.basic.viewMenuList.msg.addTitle', 'Thêm mới Menu')
      : this.i18n.t('sys.basic.viewMenuList.msg.editTitle', 'Cập nhật Menu'),
  );
  form: MenuForm = { ...EMPTY_FORM };

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private deleteTarget: SyMenuDto | null = null;

  constructor(
    private readonly api: ViewMenuListService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
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

  // ==================== Modal Thêm mới / Cập nhật ====================

  openAddModal(): void {
    this.isNew.set(true);
    this.form = { ...EMPTY_FORM };
    this.modalVisible.set(true);
  }

  openEditModal(row: SyMenuDto): void {
    this.isNew.set(false);
    this.form = {
      menuNo: row.menuNo,
      menuParentNo: row.menuParentNo || '',
      menuCode: row.menuCode || '',
      menuImg: row.menuImg || '',
      menuUrl: row.menuUrl || '',
      depth: row.depth ?? 0,
      orderNo: row.orderNo ?? 0,
      activity: row.activity === 1,
      nameVi: row.nameVi || '',
      nameEn: row.nameEn || '',
      nameZh: row.nameZh || '',
      nameKo: row.nameKo || '',
    };
    this.modalVisible.set(true);
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  saveForm(): void {
    if (!this.form.menuCode || !this.form.nameVi) {
      this.message.warning(this.i18n.t('common.saveFail', 'Lưu thất bại!'));
      return;
    }
    const payload: MenuSavePayload = {
      menuNo: this.form.menuNo,
      menuParentNo: this.form.menuParentNo || null,
      menuCode: this.form.menuCode,
      menuImg: this.form.menuImg || null,
      menuUrl: this.form.menuUrl || null,
      depth: this.form.depth,
      orderNo: this.form.orderNo,
      activity: this.form.activity ? 1 : 0,
      nameVi: this.form.nameVi,
      nameEn: this.form.nameEn || null,
      nameZh: this.form.nameZh || null,
      nameKo: this.form.nameKo || null,
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

  openDeleteConfirm(row: SyMenuDto): void {
    this.deleteTarget = row;
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get deleteTargetName(): string {
    return this.deleteTarget ? `${this.deleteTarget.menuCode} - ${this.deleteTarget.nameVi ?? ''}` : '';
  }

  confirmDelete(): void {
    if (!this.deleteTarget?.menuNo) return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.menuNo).subscribe({
      next: (res) => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        if (res.success) {
          this.message.success(res.message || this.i18n.t('common.deleteSuccess', 'Xóa thành công!'));
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

  /** Xuất excel client-side (endpoint /sys/api/menu/export cũ thực chất trả .csv nên không dùng lại -
   *  xem giải thích ở đầu file) - dùng thư viện xlsx (SheetJS) để tạo đúng file .xlsx nhị phân. */
  exportExcel(): void {
    const headers = [
      this.i18n.t('common.stt', 'STT'),
      this.i18n.t('sys.basic.viewMenuList.col.menuCode', 'Menu Code'),
      this.i18n.t('sys.basic.viewMenuList.col.nameVi', 'Tên TV'),
      this.i18n.t('sys.basic.viewMenuList.col.nameEn', 'Tên TA'),
      this.i18n.t('sys.basic.viewMenuList.col.parentMenu', 'Menu Cha'),
      this.i18n.t('sys.basic.viewMenuList.col.url', 'URL'),
      this.i18n.t('sys.basic.viewMenuList.col.orderNo', 'Thứ tự'),
      this.i18n.t('common.status', 'Trạng thái'),
    ];
    const activeText = this.i18n.t('common.active', 'Hoạt động');
    const inactiveText = this.i18n.t('common.inactive', 'Không hoạt động');
    const dataRows = this.rows().map((r, i) => [
      i + 1, r.menuCode, r.nameVi, r.nameEn, r.parentMenuName, r.menuUrl, r.orderNo,
      r.activity === 1 ? activeText : inactiveText,
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSach');
    XLSX.writeFile(workbook, 'menu_list.xlsx');
  }
}
