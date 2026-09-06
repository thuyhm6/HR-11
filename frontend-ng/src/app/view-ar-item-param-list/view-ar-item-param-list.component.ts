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
import { ArItemOption, ArItemParamDto, ArItemParamSavePayload } from './view-ar-item-param-list.model';
import { ViewArItemParamListService } from './view-ar-item-param-list.service';

/** 3 lựa chọn chiều bù trừ quẹt thẻ (cardFromRelation/cardToRelation) - tái dùng key có sẵn
 *  ar.viewitemparameter.title.dayu/xiaoyu/dengyu (>, <, =), thay cho input text tự do của bản gốc
 *  (placeholder "< / > / =") để tránh nhập sai giá trị. */
const RELATION_OPTIONS = [
  { value: '>', key: 'ar.viewitemparameter.title.dayu', fallback: 'Lớn hơn (>)' },
  { value: '<', key: 'ar.viewitemparameter.title.xiaoyu', fallback: 'Nhỏ hơn (<)' },
  { value: '=', key: 'ar.viewitemparameter.title.dengyu', fallback: 'Bằng (=)' },
];

/** Các key message.properties dùng trong trang này - dùng lại 2 namespace đã có sẵn: arItemParam.* và
 *  ar.viewitemparameter.title.* (chuẩn bị trước cho viewArItemParamList.html/viewItemParameter.html;
 *  10 key trong đó còn để nguyên text tiếng Trung chưa dịch nên đã sửa lại ở vi/en/ko - xem
 *  messages_vi_VN.properties), kết hợp common.* dùng chung. Tải trước 1 lần ở ngOnInit. */
const I18N_KEYS = [
  'common.stt', 'common.action', 'common.addNew', 'common.edit', 'common.delete', 'common.save', 'common.close',
  'common.confirm', 'common.cancel', 'common.search', 'common.clearFilter', 'common.saveSuccess', 'common.saveFail',
  'common.deleteSuccess', 'common.deleteFail', 'common.loadFail', 'common.noData', 'common.totalRows',
  'common.status', 'common.active', 'common.inactive', 'common.sortOrder', 'common.yes', 'common.no',
  'common.placeholder.select',
  'arItemParam.itemCode', 'arItemParam.itemName', 'arItemParam.paramCode', 'arItemParam.basicSection',
  'arItemParam.cardSection', 'arItemParam.applySection', 'arItemParam.modalAddTitle', 'arItemParam.modalEditTitle',
  'arItemParam.confirmDelete', 'arItemParam.dependItem', 'arItemParam.replaceItem', 'arItemParam.hrPolicyNote',
  'arItemParam.unitValue', 'arItemParam.searchPlaceholder', 'arItemParam.msg.pleaseSelectItem',
  'ar.viewitemparameter.title.unit', 'ar.viewitemparameter.title.zumingcheng',
  'ar.viewitemparameter.title.zuixiaozhi', 'ar.viewitemparameter.title.zuidazhi',
  'ar.viewitemparameter.title.cankaoshuaka', 'ar.viewitemparameter.title.dakakaishibiaozhi',
  'ar.viewitemparameter.title.dakakaishipianyi', 'ar.viewitemparameter.title.dakakaishipianyifangxiang',
  'ar.viewitemparameter.title.dakajieshubiaozhi', 'ar.viewitemparameter.title.dakajieshupianyi',
  'ar.viewitemparameter.title.dakajieshupianyifangxiang', 'ar.viewitemparameter.title.shifoucankaoshenqing',
  'ar.viewitemparameter.title.shenqingleixing', 'ar.viewitemparameter.title.shenqingmanyirishuzhi',
  'ar.viewitemparameter.title.shenqingdakayouxianji', 'ar.viewitemparameter.title.riqileixing',
  'ar.viewitemparameter.title.dayu', 'ar.viewitemparameter.title.xiaoyu', 'ar.viewitemparameter.title.dengyu',
  'essDept.exportExcel',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200];

interface ArItemParamForm {
  arParamNo: string | null;
  itemNo: string | null;
  groupNo: string;
  unit: string;
  unitValue: number | null;
  minValue: number | null;
  maxValue: number | null;
  dependItem: string;
  replaceItem: string;
  cardFlag: number;
  cardFromFlag: number;
  cardFromOffset: number | null;
  cardFromRelation: string | null;
  cardToFlag: number;
  cardToOffset: number | null;
  cardToRelation: string | null;
  applyFlag: number;
  applyType: string;
  applyFulldayValue: number | null;
  applyCardPriority: number;
  dateType: string;
  detailContent: string;
  orderno: number | null;
  activity: number;
}

const EMPTY_FORM: ArItemParamForm = {
  arParamNo: null, itemNo: null, groupNo: '', unit: '', unitValue: null, minValue: null, maxValue: null,
  dependItem: '', replaceItem: '', cardFlag: 1, cardFromFlag: 1, cardFromOffset: 0, cardFromRelation: null,
  cardToFlag: 1, cardToOffset: 0, cardToRelation: null, applyFlag: 1, applyType: '', applyFulldayValue: null,
  applyCardPriority: 1, dateType: '', detailContent: '', orderno: 0, activity: 1,
};

/**
 * Bản Angular của ar/attendanceSettings/viewArItemParamList.html (Thymeleaf + jQuery DataTables) -
 * quản lý thông số hạng mục chấm công (bảng AR_ITEM_PARAM). Gọi lại nguyên API JSON đã có sẵn ở
 * ArItemParamController (xem ViewArItemParamListService) - không đổi backend. Dùng nz-table (phân
 * trang client-side, đúng hành vi DataTables gốc, tham khảo ManageEmpPositionInfoComponent) thay cho
 * jQuery DataTables; nz-modal thay modal Bootstrap (tham khảo PunishmentInfoComponent cho pattern CRUD,
 * và ViewArItemComponent cho combo hạng mục cùng module).
 *
 * Khác biệt có chủ đích so với bản gốc:
 * - Bỏ hẳn ô chọn "Pháp nhân (Công ty)" ở cả tìm kiếm và modal thêm/sửa: đọc mã nguồn
 *   LanguageParameterInterceptor (MyBatis interceptor toàn hệ thống) cho thấy field cpnyId LUÔN bị ghi
 *   đè bằng company của session đăng nhập ở mọi câu lệnh MyBatis (kể cả khi FE gửi giá trị khác) - ô
 *   chọn công ty trong bản gốc không có tác dụng thực tế nào (dead UI), giữ lại sẽ gây hiểu nhầm.
 * - Ô tìm kiếm "Hạng mục" đổi từ input text tự do sang nz-select (vì ArItemParamMapper.findAll so khớp
 *   itemNo tuyệt đối "=", không phải LIKE, nên gõ tự do gần như không bao giờ khớp) và ô nhập
 *   cardFromRelation/cardToRelation đổi từ input text tự do (placeholder "< / > / =") sang nz-select 3
 *   lựa chọn cố định - cả hai đều không đổi hành vi lưu trữ, chỉ đảm bảo dữ liệu nhập vào hợp lệ.
 */
@Component({
  selector: 'app-view-ar-item-param-list',
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
  templateUrl: './view-ar-item-param-list.component.html',
  styleUrl: './view-ar-item-param-list.component.css',
})
export class ViewArItemParamListComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly relationOptions = RELATION_OPTIONS;

  readonly rows = signal<ArItemParamDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  readonly itemOptions = signal<ArItemOption[]>([]);

  searchItemNo: string | null = null;

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew()
      ? this.i18n.t('arItemParam.modalAddTitle', 'Thêm thông số hạng mục')
      : this.i18n.t('arItemParam.modalEditTitle', 'Chỉnh sửa thông số hạng mục'),
  );
  form: ArItemParamForm = { ...EMPTY_FORM };

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private deleteTarget: ArItemParamDto | null = null;

  constructor(
    private readonly api: ViewArItemParamListService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.search();
    this.api.getItemOptions().subscribe({
      next: (list) => this.itemOptions.set(list ?? []),
      error: () => this.itemOptions.set([]),
    });
  }

  itemLabel(opt: ArItemOption): string {
    return opt.nameVi || opt.shortName || opt.itemNo;
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.search(this.searchItemNo ?? '').subscribe({
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
    this.searchItemNo = null;
    this.search();
  }

  // ==================== Modal Thêm mới / Cập nhật ====================

  openAddModal(): void {
    this.isNew.set(true);
    this.form = { ...EMPTY_FORM };
    this.modalVisible.set(true);
  }

  openEditModal(row: ArItemParamDto): void {
    this.isNew.set(false);
    this.form = {
      arParamNo: row.arParamNo,
      itemNo: row.itemNo,
      groupNo: row.groupNo || '',
      unit: row.unit || '',
      unitValue: row.unitValue,
      minValue: row.minValue,
      maxValue: row.maxValue,
      dependItem: row.dependItem || '',
      replaceItem: row.replaceItem || '',
      cardFlag: row.cardFlag ?? 1,
      cardFromFlag: row.cardFromFlag ?? 1,
      cardFromOffset: row.cardFromOffset,
      cardFromRelation: row.cardFromRelation,
      cardToFlag: row.cardToFlag ?? 1,
      cardToOffset: row.cardToOffset,
      cardToRelation: row.cardToRelation,
      applyFlag: row.applyFlag ?? 1,
      applyType: row.applyType || '',
      applyFulldayValue: row.applyFulldayValue,
      applyCardPriority: row.applyCardPriority ?? 1,
      dateType: row.dateType || '',
      detailContent: row.detailContent || '',
      orderno: row.orderno,
      activity: row.activity ?? 1,
    };
    this.modalVisible.set(true);
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  saveForm(): void {
    if (!this.form.itemNo) {
      this.message.warning(this.i18n.t('arItemParam.msg.pleaseSelectItem', 'Vui lòng chọn Hạng mục'));
      return;
    }
    const payload: ArItemParamSavePayload = {
      arParamNo: this.form.arParamNo,
      itemNo: this.form.itemNo,
      groupNo: this.form.groupNo,
      unit: this.form.unit,
      unitValue: this.form.unitValue,
      minValue: this.form.minValue,
      maxValue: this.form.maxValue,
      dependItem: this.form.dependItem,
      replaceItem: this.form.replaceItem,
      cardFlag: this.form.cardFlag,
      cardFromFlag: this.form.cardFromFlag,
      cardFromOffset: this.form.cardFromOffset,
      cardFromRelation: this.form.cardFromRelation,
      cardToFlag: this.form.cardToFlag,
      cardToOffset: this.form.cardToOffset,
      cardToRelation: this.form.cardToRelation,
      applyFlag: this.form.applyFlag,
      applyType: this.form.applyType,
      applyFulldayValue: this.form.applyFulldayValue,
      applyCardPriority: this.form.applyCardPriority,
      dateType: this.form.dateType,
      detailContent: this.form.detailContent,
      orderno: this.form.orderno,
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

  openDeleteConfirm(row: ArItemParamDto): void {
    this.deleteTarget = row;
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get deleteTargetName(): string {
    return this.deleteTarget ? `${this.deleteTarget.arParamNo} - ${this.deleteTarget.itemNameVi ?? this.deleteTarget.itemNo}` : '';
  }

  confirmDelete(): void {
    if (!this.deleteTarget?.arParamNo) return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.arParamNo).subscribe({
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
    const yesNo = (v: number | null) => (v === 1 ? this.i18n.t('common.yes', 'Có') : this.i18n.t('common.no', 'Không'));
    const headers = [
      this.i18n.t('common.stt', 'STT'),
      this.i18n.t('arItemParam.paramCode', 'Mã tham số'),
      this.i18n.t('arItemParam.itemCode', 'Mã hạng mục'),
      this.i18n.t('arItemParam.itemName', 'Tên hạng mục'),
      this.i18n.t('ar.viewitemparameter.title.unit', 'Đơn vị'),
      this.i18n.t('ar.viewitemparameter.title.zumingcheng', 'Nhóm hiệu'),
      this.i18n.t('ar.viewitemparameter.title.zuixiaozhi', 'Giới hạn tối thiểu'),
      this.i18n.t('ar.viewitemparameter.title.zuidazhi', 'Giới hạn tối đa'),
      this.i18n.t('arItemParam.dependItem', 'Hạng mục phụ thuộc'),
      this.i18n.t('arItemParam.replaceItem', 'Hạng mục thay thế'),
      this.i18n.t('ar.viewitemparameter.title.cankaoshuaka', 'Tham chiếu quẹt thẻ'),
      this.i18n.t('common.sortOrder', 'Sắp xếp'),
      this.i18n.t('common.status', 'Trạng thái'),
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1, r.arParamNo, r.itemNo, r.itemNameVi, r.unit, r.groupNo, r.minValue, r.maxValue,
      r.dependItem, r.replaceItem, yesNo(r.cardFlag), r.orderno,
      r.activity === 1 ? this.i18n.t('common.active', 'Hoạt động') : this.i18n.t('common.inactive', 'Ngừng'),
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSach');
    XLSX.writeFile(workbook, 'ar_item_param_list.xlsx');
  }
}
