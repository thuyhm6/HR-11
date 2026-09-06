import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { ArItemDto, ArItemSavePayload, CodeItem } from './view-ar-item.model';
import { ViewArItemService } from './view-ar-item.service';

/** Combo Mã nhóm hạng mục lấy theo parentCodeNo=1429 (xem viewArItem.html gốc, data-parent-code="1429"). */
const ITEM_GROUP_PARENT_CODE = '1429';

/** Các key message.properties dùng trong trang này - dùng lại namespace arItem.* đã có sẵn (chuẩn bị
 *  trước cho trang này) kết hợp common.* dùng chung, bổ sung thêm vài key còn thiếu (xem
 *  messages_vi_VN.properties). Tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'common.stt', 'common.action', 'common.addNew', 'common.edit', 'common.delete', 'common.save', 'common.close',
  'common.confirm', 'common.cancel', 'common.search', 'common.clearFilter', 'common.saveSuccess', 'common.saveFail',
  'common.deleteSuccess', 'common.deleteFail', 'common.loadFail', 'common.noData', 'common.totalRows',
  'common.status', 'common.active', 'common.inactive', 'common.sortOrder', 'common.multilingualInfo',
  'common.nameVi', 'common.nameEn', 'common.nameZh', 'common.nameKo', 'common.name', 'common.placeholder.select',
  'arItem.itemCode', 'arItem.unit', 'arItem.itemType', 'arItem.itemInfo', 'arItem.modalAddTitle',
  'arItem.modalEditTitle', 'arItem.confirmDelete', 'arItem.itemId', 'arItem.shortName', 'arItem.description',
  'arItem.idMapping', 'arItem.ordernoSst', 'arItem.searchPlaceholder', 'arItem.msg.pleaseEnterNameVi',
  'essDept.exportExcel',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200];

interface ArItemForm {
  itemNo: string | null;
  nameVi: string;
  nameEn: string;
  nameZh: string;
  nameKo: string;
  itemId: string;
  shortName: string;
  description: string;
  unit: string;
  itemGroupCode: string | null;
  itemIdMapping: string;
  orderno: number | null;
  ordernoSst: number | null;
  activity: number;
}

const EMPTY_FORM: ArItemForm = {
  itemNo: null, nameVi: '', nameEn: '', nameZh: '', nameKo: '',
  itemId: '', shortName: '', description: '', unit: '', itemGroupCode: null, itemIdMapping: '',
  orderno: null, ordernoSst: null, activity: 1,
};

/**
 * Bản Angular của ar/attendanceSettings/viewArItem.html (Thymeleaf + jQuery DataTables) - quản lý danh
 * mục hạng mục chấm công (bảng AR_ITEM + tên đa ngôn ngữ ở SY_GLOBAL_NAME). Gọi lại nguyên API JSON đã
 * có sẵn ở ArItemController (xem ViewArItemService) - không đổi backend. Dùng nz-table (phân trang
 * client-side, đúng hành vi DataTables gốc: BE trả toàn bộ danh sách theo bộ lọc, không phân trang
 * server, tham khảo ManageEmpPositionInfoComponent) thay cho jQuery DataTables; nz-modal thay modal
 * Bootstrap (tham khảo PunishmentInfoComponent cho pattern CRUD, và ViewCycleComponent cho trang chị
 * em cùng module attendanceSettings có cùng cơ chế itemNo tự sinh + tên đa ngôn ngữ). itemNo do BE tự
 * sinh khi thêm mới (SyGlobalNameMapper.getNextNoSeq, xem ArItemServiceImpl) nên form không cho nhập
 * itemNo, giống bản gốc (input ẩn). Combo "Mã nhóm hạng mục" (itemGroupCode) load qua API code hệ
 * thống dùng chung GET /sys/api/getCode/list?parentCodeNo=1429 (tham khảo AddressInfoComponent). Bản
 * gốc chưa có export Excel riêng (chỉ dùng nút Buttons của DataTables) - nay làm client-side bằng xlsx
 * (SheetJS) theo đúng quy ước xuất .xlsx của các trang khác.
 */
@Component({
  selector: 'app-view-ar-item',
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
    NzModalModule,
    NzAlertModule,
    NzTagModule,
    TranslatePipe,
  ],
  templateUrl: './view-ar-item.component.html',
  styleUrl: './view-ar-item.component.css',
})
export class ViewArItemComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<ArItemDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  readonly itemGroupOptions = signal<CodeItem[]>([]);

  searchItemNo = '';

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew()
      ? this.i18n.t('arItem.modalAddTitle', 'Thêm mới hạng mục')
      : this.i18n.t('arItem.modalEditTitle', 'Cập nhật hạng mục'),
  );
  form: ArItemForm = { ...EMPTY_FORM };

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private deleteTarget: ArItemDto | null = null;

  constructor(
    private readonly api: ViewArItemService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.search();
    this.api.getCodeList(ITEM_GROUP_PARENT_CODE).subscribe({
      next: (list) => this.itemGroupOptions.set(list ?? []),
      error: () => this.itemGroupOptions.set([]),
    });
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.search(this.searchItemNo).subscribe({
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
    this.searchItemNo = '';
    this.search();
  }

  // ==================== Modal Thêm mới / Cập nhật ====================

  openAddModal(): void {
    this.isNew.set(true);
    this.form = { ...EMPTY_FORM };
    this.modalVisible.set(true);
  }

  openEditModal(row: ArItemDto): void {
    this.isNew.set(false);
    this.form = {
      itemNo: row.itemNo,
      nameVi: row.nameVi || '',
      nameEn: row.nameEn || '',
      nameZh: row.nameZh || '',
      nameKo: row.nameKo || '',
      itemId: row.itemId || '',
      shortName: row.shortName || '',
      description: row.description || '',
      unit: row.unit || '',
      itemGroupCode: row.itemGroupCode,
      itemIdMapping: row.itemIdMapping || '',
      orderno: row.orderno,
      ordernoSst: row.ordernoSst,
      activity: row.activity ?? 1,
    };
    this.modalVisible.set(true);
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  saveForm(): void {
    if (!this.form.nameVi) {
      this.message.warning(this.i18n.t('arItem.msg.pleaseEnterNameVi', 'Vui lòng nhập Tên tiếng Việt'));
      return;
    }
    const payload: ArItemSavePayload = {
      itemNo: this.form.itemNo,
      nameVi: this.form.nameVi,
      nameEn: this.form.nameEn,
      nameZh: this.form.nameZh,
      nameKo: this.form.nameKo,
      itemId: this.form.itemId,
      shortName: this.form.shortName,
      description: this.form.description,
      unit: this.form.unit,
      itemGroupCode: this.form.itemGroupCode,
      itemIdMapping: this.form.itemIdMapping,
      orderno: this.form.orderno,
      ordernoSst: this.form.ordernoSst,
      activity: this.form.activity,
    };
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: () => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.message.success(this.i18n.t('common.saveSuccess', 'Lưu thành công!'));
        this.search();
      },
      error: (err) => {
        this.saving.set(false);
        const msg = err?.error?.error || this.i18n.t('common.saveFail', 'Lưu thất bại!');
        this.message.error(msg);
      },
    });
  }

  // ==================== Xóa ====================

  openDeleteConfirm(row: ArItemDto): void {
    this.deleteTarget = row;
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get deleteTargetName(): string {
    return this.deleteTarget ? `${this.deleteTarget.itemNo} - ${this.deleteTarget.nameVi ?? ''}` : '';
  }

  confirmDelete(): void {
    if (!this.deleteTarget?.itemNo) return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.itemNo).subscribe({
      next: () => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.message.success(this.i18n.t('common.deleteSuccess', 'Xóa thành công!'));
        this.search();
      },
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t('common.deleteFail', 'Xóa thất bại!'));
      },
    });
  }

  // ==================== Xuất Excel ====================

  /** Xuất excel client-side (bản gốc chỉ có nút Buttons của DataTables) - dùng thư viện xlsx (SheetJS)
   *  để tạo đúng file .xlsx nhị phân (xem CLAUDE.md). */
  exportExcel(): void {
    const headers = [
      this.i18n.t('common.stt', 'STT'),
      this.i18n.t('arItem.itemCode', 'Mã hạng mục'),
      this.i18n.t('arItem.itemId', 'ID hạng mục'),
      this.i18n.t('arItem.shortName', 'Tên viết tắt'),
      this.i18n.t('arItem.description', 'Mô tả'),
      this.i18n.t('arItem.unit', 'Đơn vị'),
      this.i18n.t('arItem.itemType', 'Mã nhóm'),
      this.i18n.t('common.name', 'Tên'),
      this.i18n.t('common.sortOrder', 'Sắp xếp'),
      this.i18n.t('common.status', 'Trạng thái'),
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1, r.itemNo, r.itemId, r.shortName, r.description, r.unit, r.itemGroupCode, r.nameVi, r.orderno,
      r.activity === 1 ? this.i18n.t('common.active', 'Hoạt động') : this.i18n.t('common.inactive', 'Ngừng'),
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSach');
    XLSX.writeFile(workbook, 'ar_item_list.xlsx');
  }
}
