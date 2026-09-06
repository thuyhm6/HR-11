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
import { ArStaItemParamDto, ArStaItemParamSavePayload, AvailableItemOption } from './view-summary-param-item.model';
import { ViewSummaryParamItemService } from './view-summary-param-item.service';

/** 4 đơn vị cố định (UNIT) của bảng AR_STA_ITEM_PARAM (mã nghiệp vụ, không phải danh mục chung nên
 *  giữ hardcode đúng như bản gốc) - nhãn hiển thị dùng key staParamItem.unitDay/unitHour/unitMinute/unitCount. */
const UNIT_OPTIONS = [
  { value: 'DAY', key: 'staParamItem.unitDay', fallback: 'Ngày' },
  { value: 'HOUR', key: 'staParamItem.unitHour', fallback: 'Giờ' },
  { value: 'MINUTE', key: 'staParamItem.unitMinute', fallback: 'Phút' },
  { value: 'TIME', key: 'staParamItem.unitCount', fallback: 'Lần' },
];

/** 5 mức đơn vị tối thiểu cố định (MIN_UNIT) - bản gốc hardcode y hệt (select cứng, không phải danh
 *  mục chung). */
const MIN_UNIT_OPTIONS = [1, 0.5, 0.25, 0.05, 0.01];

/** Các key message.properties dùng trong trang này - dùng lại nguyên namespace staParamItem.* đã
 *  chuẩn bị sẵn cho đúng trang này (trước đó chỉ có ở bản tiếng Việt, đã bổ sung đủ en/ko/zh/mặc định
 *  - xem messages_vi_VN.properties), kết hợp common.* dùng chung. Tải trước 1 lần ở ngOnInit. */
const I18N_KEYS = [
  'common.stt', 'common.action', 'common.addNew', 'common.edit', 'common.delete', 'common.save', 'common.close',
  'common.confirm', 'common.cancel', 'common.search', 'common.clearFilter', 'common.noData', 'common.totalRows',
  'common.status', 'common.active', 'common.inactive', 'common.sortOrder', 'common.placeholder.select',
  'staParamItem.itemCode', 'staParamItem.itemName', 'staParamItem.unitDay', 'staParamItem.unitHour',
  'staParamItem.unitMinute', 'staParamItem.unitCount', 'staParamItem.modalAddTitle', 'staParamItem.modalEditTitle',
  'staParamItem.confirmDelete', 'staParamItem.saveSuccess', 'staParamItem.saveFail', 'staParamItem.deleteSuccess',
  'staParamItem.deleteFail', 'staParamItem.loadFail', 'staParamItem.minUnit', 'staParamItem.calOrder',
  'staParamItem.manageFlag', 'staParamItem.paramNo', 'staParamItem.searchPlaceholder', 'staParamItem.selectItem',
  'staParamItem.selectItemPlaceholder', 'staParamItem.msg.pleaseSelectItem', 'staParamItem.calOrderHint',
  'staParamItem.itemInfoTitle', 'staParamItem.configTitle', 'ar.viewitemparameter.title.unit', 'essDept.exportExcel',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200];

interface StaItemParamForm {
  paramNo: string | null;
  itemNo: string | null;
  unit: string;
  minUnit: number;
  calOrder: number | null;
  manageFlag: number | null;
  orderno: number | null;
  activity: number;
}

const EMPTY_FORM: StaItemParamForm = {
  paramNo: null, itemNo: null, unit: 'DAY', minUnit: 1, calOrder: null, manageFlag: null, orderno: null, activity: 1,
};

/**
 * Bản Angular của ar/attendanceSettings/viewSummaryParamItem.html (Thymeleaf + jQuery DataTables +
 * select2) - quản lý thông số hạng mục chỉ tiêu tổng hợp (bảng AR_STA_ITEM_PARAM). Gọi lại nguyên API
 * JSON đã có sẵn ở ArStaItemParamController (xem ViewSummaryParamItemService) - không đổi backend.
 * Dùng nz-table (phân trang client-side, tham khảo ManageEmpPositionInfoComponent) thay DataTables,
 * nz-select (nzShowSearch) thay select2, nz-modal thay modal Bootstrap.
 *
 * Khác biệt có chủ đích so với bản gốc (nhất quán với các trang chị em cùng module attendanceSettings,
 * ví dụ ViewArItemParamListComponent): bỏ cột "Tên công ty" khỏi bảng - cpnyId luôn bị
 * LanguageParameterInterceptor ghi đè theo session đăng nhập ở mọi câu lệnh MyBatis (findAll dùng
 * WHERE CPNY_ID = #{cpnyId} bắt buộc), nên mọi dòng trong bảng luôn cùng 1 công ty - cột này chỉ là
 * giá trị hằng số, không mang thông tin phân biệt, hiển thị sẽ gây rối không cần thiết.
 *
 * calOrder (Thứ tự tính toán) chỉ hiển thị và cho sửa ở chế độ Cập nhật, ẩn khi Thêm mới - vì BE tự
 * tính = MAX(CAL_ORDER)+1 khi tạo mới (xem ArStaItemParamServiceImpl#saveItem), giống hệt hành vi
 * readonly + ẩn field của bản gốc.
 */
@Component({
  selector: 'app-view-summary-param-item',
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
  templateUrl: './view-summary-param-item.component.html',
  styleUrl: './view-summary-param-item.component.css',
})
export class ViewSummaryParamItemComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly unitOptions = UNIT_OPTIONS;
  readonly minUnitOptions = MIN_UNIT_OPTIONS;

  readonly rows = signal<ArStaItemParamDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  readonly availableItems = signal<AvailableItemOption[]>([]);

  searchText = '';

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew()
      ? this.i18n.t('staParamItem.modalAddTitle', 'Thêm mới Thông số tổng hợp')
      : `${this.i18n.t('staParamItem.modalEditTitle', 'Cập nhật Thông số')}: ${this.form.paramNo ?? ''}`,
  );
  form: StaItemParamForm = { ...EMPTY_FORM };

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private deleteTarget: ArStaItemParamDto | null = null;

  constructor(
    private readonly api: ViewSummaryParamItemService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.search();
  }

  itemLabel(opt: AvailableItemOption): string {
    const name = opt.nameVi || opt.nameEn || opt.itemNo;
    return `${name} (${opt.itemNo})`;
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
        this.errorMessage.set(this.i18n.t('staParamItem.loadFail', 'Tải dữ liệu thất bại!'));
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

  private loadAvailableItems(current: AvailableItemOption | null): void {
    this.api.getAvailableItems().subscribe({
      next: (list) => {
        const options = list ?? [];
        this.availableItems.set(current ? [current, ...options] : options);
      },
      error: () => this.availableItems.set(current ? [current] : []),
    });
  }

  openAddModal(): void {
    this.isNew.set(true);
    this.form = { ...EMPTY_FORM };
    this.loadAvailableItems(null);
    this.modalVisible.set(true);
  }

  openEditModal(row: ArStaItemParamDto): void {
    this.api.getById(row.paramNo).subscribe({
      next: (data) => {
        this.isNew.set(false);
        this.form = {
          paramNo: data.paramNo,
          itemNo: data.itemNo,
          unit: data.unit || 'DAY',
          minUnit: data.minUnit ?? 1,
          calOrder: data.calOrder,
          manageFlag: data.manageFlag,
          orderno: data.orderno,
          activity: data.activity ?? 1,
        };
        this.loadAvailableItems({
          itemNo: data.itemNo,
          nameVi: data.itemNameVi,
          nameEn: data.itemNameEn,
          nameZh: data.itemNameZh,
          nameKo: data.itemNameKo,
        });
        this.modalVisible.set(true);
      },
      error: () => this.message.error(this.i18n.t('staParamItem.loadFail', 'Tải dữ liệu thất bại!')),
    });
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  saveForm(): void {
    if (!this.form.itemNo) {
      this.message.warning(this.i18n.t('staParamItem.msg.pleaseSelectItem', 'Vui lòng chọn Hạng mục tổng hợp!'));
      return;
    }
    const payload: ArStaItemParamSavePayload = {
      paramNo: this.form.paramNo,
      itemNo: this.form.itemNo,
      unit: this.form.unit,
      minUnit: this.form.minUnit,
      manageFlag: this.form.manageFlag,
      orderno: this.form.orderno,
      activity: this.form.activity,
    };
    if (!this.isNew()) {
      payload.calOrder = this.form.calOrder;
    }
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: () => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.message.success(this.i18n.t('staParamItem.saveSuccess', 'Lưu thành công!'));
        this.search();
      },
      error: () => {
        this.saving.set(false);
        this.message.error(this.i18n.t('staParamItem.saveFail', 'Lưu thất bại!'));
      },
    });
  }

  // ==================== Xóa ====================

  openDeleteConfirm(row: ArStaItemParamDto): void {
    this.deleteTarget = row;
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get deleteTargetName(): string {
    return this.deleteTarget ? `${this.deleteTarget.paramNo} - ${this.deleteTarget.itemNameVi ?? this.deleteTarget.itemNo}` : '';
  }

  confirmDelete(): void {
    if (!this.deleteTarget?.paramNo) return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.paramNo).subscribe({
      next: () => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.message.success(this.i18n.t('staParamItem.deleteSuccess', 'Xóa thành công!'));
        this.search();
      },
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t('staParamItem.deleteFail', 'Xóa thất bại!'));
      },
    });
  }

  // ==================== Xuất Excel ====================

  /** Xuất excel client-side (bản gốc chỉ có nút Buttons của DataTables) - dùng thư viện xlsx (SheetJS)
   *  để tạo đúng file .xlsx nhị phân (xem CLAUDE.md). */
  exportExcel(): void {
    const headers = [
      this.i18n.t('common.stt', 'STT'),
      this.i18n.t('staParamItem.paramNo', 'Mã tham số'),
      this.i18n.t('staParamItem.itemCode', 'Mã hạng mục'),
      this.i18n.t('staParamItem.itemName', 'Tên hạng mục'),
      this.i18n.t('ar.viewitemparameter.title.unit', 'Đơn vị'),
      this.i18n.t('staParamItem.minUnit', 'Đơn vị tối thiểu'),
      this.i18n.t('staParamItem.calOrder', 'Thứ tự tính toán'),
      this.i18n.t('staParamItem.manageFlag', 'Cờ quản lý'),
      this.i18n.t('common.sortOrder', 'Sắp xếp'),
      this.i18n.t('common.status', 'Trạng thái'),
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1, r.paramNo, r.itemNo, r.itemNameVi, r.unit, r.minUnit, r.calOrder, r.manageFlag, r.orderno,
      r.activity === 1 ? this.i18n.t('common.active', 'Hoạt động') : this.i18n.t('common.inactive', 'Ngừng'),
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSach');
    XLSX.writeFile(workbook, 'summary_param_item_list.xlsx');
  }
}
