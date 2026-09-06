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
import { ArStaItemDto, ArStaItemSavePayload } from './view-summary-item.model';
import { ViewSummaryItemService } from './view-summary-item.service';

/** Các key message.properties dùng trong trang này - dùng lại nguyên namespace staItem.* đã chuẩn bị
 *  sẵn cho đúng trang này (trước đó chỉ có ở bản tiếng Việt, đã bổ sung đủ en/ko/zh/mặc định - xem
 *  messages_vi_VN.properties), kết hợp common.* dùng chung và key thông báo bắt buộc tên tiếng Việt đã
 *  dùng ở ViewArItemComponent (arItem.msg.pleaseEnterNameVi - cùng nội dung, tái dùng thay vì tạo mới).
 *  Tải trước 1 lần ở ngOnInit. */
const I18N_KEYS = [
  'common.stt', 'common.action', 'common.addNew', 'common.edit', 'common.delete', 'common.save', 'common.close',
  'common.confirm', 'common.cancel', 'common.search', 'common.clearFilter', 'common.noData', 'common.totalRows',
  'common.status', 'common.active', 'common.inactive', 'common.sortOrder', 'common.multilingualInfo',
  'common.nameVi', 'common.nameEn', 'common.nameZh', 'common.nameKo', 'common.yes', 'common.no',
  'staItem.itemCode', 'staItem.itemName', 'staItem.unit', 'staItem.itemProps', 'staItem.modalAddTitle',
  'staItem.modalEditTitle', 'staItem.confirmDelete', 'staItem.saveSuccess', 'staItem.saveFail',
  'staItem.deleteSuccess', 'staItem.deleteFail', 'staItem.loadFail', 'staItem.staItemId', 'staItem.showYn',
  'staItem.showOrder', 'staItem.searchPlaceholder', 'arItem.msg.pleaseEnterNameVi',
  'essDept.exportExcel',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200];

interface StaItemForm {
  itemNo: string | null;
  nameVi: string;
  nameEn: string;
  nameZh: string;
  nameKo: string;
  unit: string;
  staItemId: string;
  orderno: number | null;
  showYn: string;
  showOrder: number | null;
  activity: number;
}

const EMPTY_FORM: StaItemForm = {
  itemNo: null, nameVi: '', nameEn: '', nameZh: '', nameKo: '', unit: '', staItemId: '',
  orderno: null, showYn: 'Y', showOrder: null, activity: 1,
};

/**
 * Bản Angular của ar/attendanceSettings/viewSummaryItem.html (Thymeleaf + jQuery DataTables) - quản lý
 * hạng mục chỉ tiêu tổng hợp (bảng AR_STA_ITEM + tên đa ngôn ngữ ở SY_GLOBAL_NAME) - hạng mục "cha" mà
 * ViewSummaryParamItemComponent (trang chị em) dùng làm nguồn cho combo "Chọn Hạng mục". Gọi lại nguyên
 * API JSON đã có sẵn ở ArStaItemController (xem ViewSummaryItemService) - không đổi backend. Dùng
 * nz-table (phân trang client-side, tham khảo ManageEmpPositionInfoComponent) thay DataTables, nz-modal
 * thay modal Bootstrap - cùng pattern itemNo tự sinh + tên đa ngôn ngữ với ViewArItemComponent/
 * ViewCycleComponent (trang chị em cùng module attendanceSettings).
 *
 * Không có field "datatype" trên form vì BE luôn tự gán cố định '1492' khi lưu (xem
 * ArStaItemServiceImpl#saveItem, comment "As requested: DATATYPE always 1492"), đúng như bản gốc
 * (form không có field này).
 */
@Component({
  selector: 'app-view-summary-item',
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
  templateUrl: './view-summary-item.component.html',
  styleUrl: './view-summary-item.component.css',
})
export class ViewSummaryItemComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<ArStaItemDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  searchText = '';

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew()
      ? this.i18n.t('staItem.modalAddTitle', 'Thêm mới Hạng mục tổng hợp')
      : `${this.i18n.t('staItem.modalEditTitle', 'Cập nhật Hạng mục tổng hợp')}: ${this.form.itemNo ?? ''}`,
  );
  form: StaItemForm = { ...EMPTY_FORM };

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private deleteTarget: ArStaItemDto | null = null;

  constructor(
    private readonly api: ViewSummaryItemService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.search();
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.search(this.searchText).subscribe({
      next: (rows) => {
        this.rows.set(rows ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t('staItem.loadFail', 'Tải dữ liệu thất bại!'));
        this.rows.set([]);
        this.loading.set(false);
      },
    });
  }

  clearSearch(): void {
    this.searchText = '';
    this.search();
  }

  // ==================== Modal Thêm mới / Cập nhật ====================

  openAddModal(): void {
    this.isNew.set(true);
    this.form = { ...EMPTY_FORM };
    this.modalVisible.set(true);
  }

  openEditModal(row: ArStaItemDto): void {
    this.api.getById(row.itemNo).subscribe({
      next: (data) => {
        this.isNew.set(false);
        this.form = {
          itemNo: data.itemNo,
          nameVi: data.nameVi || '',
          nameEn: data.nameEn || '',
          nameZh: data.nameZh || '',
          nameKo: data.nameKo || '',
          unit: data.unit || '',
          staItemId: data.staItemId || '',
          orderno: data.orderno,
          showYn: data.showYn || 'Y',
          showOrder: data.showOrder,
          activity: data.activity ?? 1,
        };
        this.modalVisible.set(true);
      },
      error: () => this.message.error(this.i18n.t('staItem.loadFail', 'Tải dữ liệu thất bại!')),
    });
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  saveForm(): void {
    if (!this.form.nameVi) {
      this.message.warning(this.i18n.t('arItem.msg.pleaseEnterNameVi', 'Vui lòng nhập Tên tiếng Việt'));
      return;
    }
    const payload: ArStaItemSavePayload = {
      itemNo: this.form.itemNo,
      nameVi: this.form.nameVi,
      nameEn: this.form.nameEn,
      nameZh: this.form.nameZh,
      nameKo: this.form.nameKo,
      unit: this.form.unit,
      staItemId: this.form.staItemId,
      orderno: this.form.orderno,
      showYn: this.form.showYn,
      showOrder: this.form.showOrder,
      activity: this.form.activity,
    };
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: () => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.message.success(this.i18n.t('staItem.saveSuccess', 'Lưu thành công!'));
        this.search();
      },
      error: () => {
        this.saving.set(false);
        this.message.error(this.i18n.t('staItem.saveFail', 'Lưu thất bại!'));
      },
    });
  }

  // ==================== Xóa ====================

  openDeleteConfirm(row: ArStaItemDto): void {
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
        this.message.success(this.i18n.t('staItem.deleteSuccess', 'Xóa thành công!'));
        this.search();
      },
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t('staItem.deleteFail', 'Xóa thất bại!'));
      },
    });
  }

  // ==================== Xuất Excel ====================

  /** Xuất excel client-side (bản gốc chỉ có nút Buttons của DataTables) - dùng thư viện xlsx (SheetJS)
   *  để tạo đúng file .xlsx nhị phân (xem CLAUDE.md). */
  exportExcel(): void {
    const headers = [
      this.i18n.t('common.stt', 'STT'),
      this.i18n.t('staItem.itemCode', 'Mã hạng mục'),
      this.i18n.t('staItem.itemName', 'Tên hạng mục'),
      this.i18n.t('staItem.unit', 'Đơn vị'),
      this.i18n.t('staItem.staItemId', 'ID Hạng mục'),
      this.i18n.t('common.sortOrder', 'Sắp xếp'),
      this.i18n.t('staItem.showYn', 'Hiển thị'),
      this.i18n.t('staItem.showOrder', 'Thứ tự hiển thị'),
      this.i18n.t('common.status', 'Trạng thái'),
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1, r.itemNo, r.nameVi, r.unit, r.staItemId, r.orderno,
      r.showYn === 'Y' ? this.i18n.t('common.yes', 'Có') : this.i18n.t('common.no', 'Không'),
      r.showOrder,
      r.activity === 1 ? this.i18n.t('common.active', 'Hoạt động') : this.i18n.t('common.inactive', 'Ngừng'),
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSach');
    XLSX.writeFile(workbook, 'summary_item_list.xlsx');
  }
}
