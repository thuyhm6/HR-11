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
import { NzTreeModule, NzFormatEmitEvent, NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import {
  ArItemOption,
  ArItemParamDto,
  ArItemParamSavePayload,
} from '../view-ar-item-param-list/view-ar-item-param-list.model';
import { ViewArItemParamListService } from '../view-ar-item-param-list/view-ar-item-param-list.service';

/** 3 lựa chọn chiều bù trừ quẹt thẻ (cardFromRelation/cardToRelation) - xem giải thích ở
 *  ViewArItemParamListComponent (trang chị em cùng dữ liệu AR_ITEM_PARAM). */
const RELATION_OPTIONS = [
  { value: '>', key: 'ar.viewitemparameter.title.dayu', fallback: 'Lớn hơn (>)' },
  { value: '<', key: 'ar.viewitemparameter.title.xiaoyu', fallback: 'Nhỏ hơn (<)' },
  { value: '=', key: 'ar.viewitemparameter.title.dengyu', fallback: 'Bằng (=)' },
];

/** Các key message.properties dùng trong trang này - giống hệt ViewArItemParamListComponent (cùng
 *  dữ liệu AR_ITEM_PARAM) cộng thêm vài key riêng cho cây hạng mục bên trái. Tải trước 1 lần ở
 *  ngOnInit. */
const I18N_KEYS = [
  'common.stt', 'common.action', 'common.addNew', 'common.edit', 'common.delete', 'common.save', 'common.close',
  'common.confirm', 'common.cancel', 'common.saveSuccess', 'common.saveFail',
  'common.deleteSuccess', 'common.deleteFail', 'common.loadFail', 'common.noData', 'common.totalRows',
  'common.status', 'common.active', 'common.inactive', 'common.sortOrder', 'common.yes', 'common.no',
  'common.placeholder.select',
  'arItemParam.itemCode', 'arItemParam.itemName', 'arItemParam.paramCode', 'arItemParam.basicSection',
  'arItemParam.cardSection', 'arItemParam.applySection', 'arItemParam.modalAddTitle', 'arItemParam.modalEditTitle',
  'arItemParam.confirmDelete', 'arItemParam.dependItem', 'arItemParam.replaceItem', 'arItemParam.hrPolicyNote',
  'arItemParam.unitValue', 'arItemParam.treeTitle', 'arItemParam.treeSearchPlaceholder',
  'arItemParam.paramListTitle', 'arItemParam.msg.pleaseSelectItemFromTree',
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
  itemNo: string;
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

const EMPTY_FORM: Omit<ArItemParamForm, 'itemNo'> = {
  arParamNo: null, groupNo: '', unit: '', unitValue: null, minValue: null, maxValue: null,
  dependItem: '', replaceItem: '', cardFlag: 1, cardFromFlag: 1, cardFromOffset: 0, cardFromRelation: null,
  cardToFlag: 1, cardToOffset: 0, cardToRelation: null, applyFlag: 1, applyType: '', applyFulldayValue: null,
  applyCardPriority: 1, dateType: '', detailContent: '', orderno: 0, activity: 1,
};

/**
 * Bản Angular của ar/attendanceSettings/viewItemParameter.html (Thymeleaf + jQuery DataTables + jsTree)
 * - quản lý thông số hạng mục chấm công (bảng AR_ITEM_PARAM) theo dạng duyệt cây hạng mục bên trái,
 * chọn 1 hạng mục để xem/thêm/sửa/xóa thông số của riêng hạng mục đó bên phải. Đây là trang chị em của
 * ViewArItemParamListComponent (cùng bảng AR_ITEM_PARAM, cùng API, cùng bộ field modal) chỉ khác cách
 * duyệt: trang kia tìm theo combo chọn hạng mục, trang này duyệt qua cây - nên dùng lại nguyên
 * ViewArItemParamListService và các model/interface đã có (ArItemParamDto, ArItemParamSavePayload,
 * ArItemOption) thay vì tạo lại. jsTree (jQuery) được thay bằng nz-tree (NG-ZORRO) - dữ liệu AR_ITEM
 * vốn không có quan hệ cha/con thật (bản gốc cũng chỉ set parent:'#' cho mọi node) nên cây ở đây thực
 * chất là 1 danh sách phẳng có thể tìm kiếm, dùng đúng nzSearchValue có sẵn của nz-tree thay cho
 * jstree(true).search(v).
 *
 * Khác biệt có chủ đích so với bản gốc (áp dụng đồng nhất với ViewArItemParamListComponent):
 * - Bỏ hẳn ô chọn "Pháp nhân (Công ty)" ở modal thêm/sửa: đọc mã nguồn LanguageParameterInterceptor
 *   (MyBatis interceptor toàn hệ thống) cho thấy field cpnyId LUÔN bị ghi đè bằng company của session
 *   đăng nhập ở mọi câu lệnh, bất kể giá trị client gửi lên - ô chọn công ty trong bản gốc là dead UI.
 * - Ô "Chiều độ lệch" (cardFromRelation/cardToRelation) đổi từ input text tự do (placeholder "< / =")
 *   sang nz-select 3 lựa chọn cố định (>, <, =) để tránh nhập sai giá trị, không đổi hành vi lưu trữ.
 * - Ô chọn hạng mục trong modal giữ đúng hành vi disabled của bản gốc (chỉ hiển thị hạng mục đang chọn
 *   trên cây, không cho đổi hạng mục ngay trong modal) - hiển thị bằng input readonly thay vì select bị
 *   khóa, rõ ràng hơn cho người dùng.
 */
@Component({
  selector: 'app-view-item-parameter',
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
    NzTreeModule,
    TranslatePipe,
  ],
  templateUrl: './view-item-parameter.component.html',
  styleUrl: './view-item-parameter.component.css',
})
export class ViewItemParameterComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly relationOptions = RELATION_OPTIONS;

  readonly itemOptions = signal<ArItemOption[]>([]);
  readonly treeNodes = computed<NzTreeNodeOptions[]>(() =>
    this.itemOptions()
      .filter((o) => o.activity === 1)
      .map((o) => ({ title: this.itemLabel(o), key: o.itemNo, isLeaf: true })),
  );
  treeSearchValue = '';
  selectedItemNo: string | null = null;
  selectedItemLabel = signal<string | null>(null);
  readonly panelTitle = computed(() =>
    this.selectedItemLabel()
      ? `${this.i18n.t('arItemParam.paramListTitle', 'Danh sách tham số')}: ${this.selectedItemLabel()}`
      : this.i18n.t('arItemParam.paramListTitle', 'Danh sách tham số'),
  );

  readonly rows = signal<ArItemParamDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew()
      ? this.i18n.t('arItemParam.modalAddTitle', 'Thêm thông số hạng mục')
      : this.i18n.t('arItemParam.modalEditTitle', 'Chỉnh sửa thông số hạng mục'),
  );
  form: ArItemParamForm = { ...EMPTY_FORM, itemNo: '' };

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
    this.api.getItemOptions().subscribe({
      next: (list) => this.itemOptions.set(list ?? []),
      error: () => this.itemOptions.set([]),
    });
  }

  itemLabel(opt: ArItemOption): string {
    return opt.nameVi || opt.shortName || opt.itemNo;
  }

  onTreeClick(event: NzFormatEmitEvent): void {
    const node = event.node;
    if (!node) return;
    this.selectedItemNo = node.key;
    this.selectedItemLabel.set(node.title);
    this.search();
  }

  search(): void {
    if (!this.selectedItemNo) {
      this.rows.set([]);
      return;
    }
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.search(this.selectedItemNo).subscribe({
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

  // ==================== Modal Thêm mới / Cập nhật ====================

  openAddModal(): void {
    if (!this.selectedItemNo) {
      this.message.warning(this.i18n.t('arItemParam.msg.pleaseSelectItemFromTree', 'Vui lòng chọn một hạng mục trên danh sách bên trái trước khi thêm mới.'));
      return;
    }
    this.isNew.set(true);
    this.form = { ...EMPTY_FORM, itemNo: this.selectedItemNo };
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

  get formItemLabel(): string {
    const opt = this.itemOptions().find((o) => o.itemNo === this.form.itemNo);
    return opt ? this.itemLabel(opt) : this.form.itemNo;
  }

  saveForm(): void {
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
    XLSX.writeFile(workbook, 'item_parameter_list.xlsx');
  }
}
