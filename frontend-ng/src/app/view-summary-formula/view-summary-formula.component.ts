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
import { NzTreeModule, NzFormatEmitEvent, NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import {
  ArStaFormulaAttItem,
  ArStaFormulaBasicInfo,
  ArStaFormulaDto,
  ArStaFormulaSavePayload,
  ArStaFormulaStaItem,
  ArStaFormulaTreeItem,
} from './view-summary-formula.model';
import { ViewSummaryFormulaService } from './view-summary-formula.service';

/** Các key message.properties dùng trong trang này - phần lớn tái dùng nguyên namespace pa.formula.*
 *  (trang chị em pa/salary/viewPaFormula.html - cùng khái niệm điều kiện/công thức/công cụ chèn, xem
 *  PaFormulaController) và ar.viewSummaryFormula.title.* (đã có sẵn riêng cho đúng trang này, dùng cho
 *  tiêu đề cây bên trái + 3 panel công cụ), cộng thêm vài key staFormula.* dành riêng cho thông báo kết
 *  quả lưu/xóa. Tải trước 1 lần ở ngOnInit. */
const I18N_KEYS = [
  'common.stt', 'common.action', 'common.addNew', 'common.edit', 'common.delete', 'common.save', 'common.close',
  'common.confirm', 'common.cancel', 'common.noData', 'common.totalRows', 'common.status', 'common.active',
  'common.inactive', 'common.sortOrder',
  'arItemParam.treeSearchPlaceholder',
  'ar.viewSummaryFormula.title.huizongxiangmuliebiao', 'ar.viewSummaryFormula.title.kaoqingxiangmuliebiao',
  'ar.viewSummaryFormula.title.kaoqinghuizongliebiao', 'ar.viewSummaryFormula.title.renyuanjibenxinxi',
  'pa.formula.configItem', 'pa.formula.addTitle', 'pa.formula.editTitle', 'pa.formula.conditionLabel',
  'pa.formula.formularLabel', 'pa.formula.selectItemFirst', 'pa.formula.formularRequired',
  'pa.formula.confirmDelete', 'pa.formula.condition', 'pa.formula.formular', 'pa.formula.toolPanel',
  'staFormula.pageTitle', 'staFormula.saveSuccess', 'staFormula.saveFail', 'staFormula.deleteSuccess',
  'staFormula.deleteFail', 'staFormula.loadFail',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200];

interface ArStaFormulaForm {
  formularNo: number | null;
  itemNo: string;
  condition: string;
  formular: string;
  orderno: number | null;
  activity: number;
}

const EMPTY_FORM: Omit<ArStaFormulaForm, 'itemNo'> = {
  formularNo: null,
  condition: '',
  formular: '',
  orderno: null,
  activity: 1,
};

/**
 * Bản Angular của ar/attendanceSettings/viewSummaryFormula.html (Thymeleaf + jQuery DataTables +
 * jsTree) - quản lý công thức tính hạng mục tổng hợp (bảng AR_STA_FORMULAR) theo dạng duyệt cây hạng
 * mục bên trái, chọn 1 hạng mục để xem/thêm/sửa/xóa các công thức của riêng hạng mục đó bên phải, cùng
 * pattern với ViewItemParameterComponent (trang chị em, cùng module attendanceSettings). Gọi lại
 * nguyên API JSON đã có sẵn ở ArStaFormulaController (xem ViewSummaryFormulaService) - không đổi
 * backend. jsTree (jQuery) được thay bằng nz-tree - dữ liệu AR_STA_ITEM_PARAM vốn không có quan hệ
 * cha/con (bản gốc cũng chỉ set parent:'#' cho mọi node) nên cây ở đây thực chất là 1 danh sách phẳng
 * có thể tìm kiếm qua nzSearchValue, dùng nz-table (phân trang client-side) thay DataTables, nz-modal
 * thay modal Bootstrap cho form thêm/sửa kèm 3 panel công cụ chèn nhanh vào ô công thức.
 */
@Component({
  selector: 'app-view-summary-formula',
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
  templateUrl: './view-summary-formula.component.html',
  styleUrl: './view-summary-formula.component.css',
})
export class ViewSummaryFormulaComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly treeItems = signal<ArStaFormulaTreeItem[]>([]);
  readonly treeNodes = computed<NzTreeNodeOptions[]>(() =>
    this.treeItems().map((o) => ({ title: o.nameVi || o.itemNo, key: o.itemNo, isLeaf: true })),
  );
  treeSearchValue = '';
  selectedItemNo: string | null = null;
  selectedItemLabel = signal<string | null>(null);
  readonly panelTitle = computed(() =>
    this.selectedItemLabel()
      ? `${this.i18n.t('staFormula.pageTitle', 'Công thức tổng hợp')}: ${this.selectedItemLabel()}`
      : this.i18n.t('staFormula.pageTitle', 'Công thức tổng hợp'),
  );

  readonly rows = signal<ArStaFormulaDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  readonly attItems = signal<ArStaFormulaAttItem[]>([]);
  readonly staItems = signal<ArStaFormulaStaItem[]>([]);
  readonly basicInfos = signal<ArStaFormulaBasicInfo[]>([]);

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew()
      ? this.i18n.t('pa.formula.addTitle', 'Thêm mới công thức')
      : this.i18n.t('pa.formula.editTitle', 'Cập nhật công thức'),
  );
  form: ArStaFormulaForm = { ...EMPTY_FORM, itemNo: '' };

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private deleteTarget: ArStaFormulaDto | null = null;

  constructor(
    private readonly api: ViewSummaryFormulaService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getTreeItems().subscribe({
      next: (list) => this.treeItems.set(list ?? []),
      error: () => this.treeItems.set([]),
    });
    this.api.getAttItems().subscribe((list) => this.attItems.set(list ?? []));
    this.api.getStaItems().subscribe((list) => this.staItems.set(list ?? []));
    this.api.getBasicInfos().subscribe((list) => this.basicInfos.set(list ?? []));
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
        this.errorMessage.set(this.i18n.t('staFormula.loadFail', 'Tải dữ liệu thất bại!'));
        this.rows.set([]);
        this.loading.set(false);
      },
    });
  }

  // ==================== Modal Thêm mới / Cập nhật ====================

  openAddModal(): void {
    if (!this.selectedItemNo) {
      this.message.warning(this.i18n.t('pa.formula.selectItemFirst', 'Vui lòng chọn Hạng mục ở bên trái trước!'));
      return;
    }
    this.isNew.set(true);
    this.form = { ...EMPTY_FORM, itemNo: this.selectedItemNo };
    this.modalVisible.set(true);
  }

  openEditModal(row: ArStaFormulaDto): void {
    this.isNew.set(false);
    this.form = {
      formularNo: row.formularNo,
      itemNo: row.itemNo,
      condition: row.condition || '',
      formular: row.formular || '',
      orderno: row.orderno,
      activity: row.activity ?? 1,
    };
    this.modalVisible.set(true);
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  /** Chèn nhanh mã tham chiếu vào cuối ô công thức - thay cho onclick="insertToFormular(...)" gọi trực
   *  tiếp vào textarea DOM ở bản gốc. */
  insertToFormula(text: string): void {
    this.form.formular = this.form.formular ? `${this.form.formular} ${text}` : text;
  }

  saveForm(): void {
    if (!this.form.formular) {
      this.message.warning(this.i18n.t('pa.formula.formularRequired', 'Vui lòng nhập nội dung công thức!'));
      return;
    }
    const payload: ArStaFormulaSavePayload = {
      formularNo: this.form.formularNo,
      itemNo: this.form.itemNo,
      condition: this.form.condition,
      formular: this.form.formular,
      orderno: this.form.orderno,
      activity: this.form.activity,
    };
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: () => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.message.success(this.i18n.t('staFormula.saveSuccess', 'Lưu công thức thành công!'));
        this.search();
      },
      error: (err) => {
        this.saving.set(false);
        const msg = err?.error?.error || this.i18n.t('staFormula.saveFail', 'Lưu công thức thất bại!');
        this.message.error(msg);
      },
    });
  }

  // ==================== Xóa ====================

  openDeleteConfirm(row: ArStaFormulaDto): void {
    this.deleteTarget = row;
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get deleteTargetName(): string {
    return this.deleteTarget ? `${this.deleteTarget.formularNo} - ${this.deleteTarget.formular}` : '';
  }

  confirmDelete(): void {
    if (!this.deleteTarget?.formularNo) return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.formularNo).subscribe({
      next: () => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.message.success(this.i18n.t('staFormula.deleteSuccess', 'Xóa công thức thành công!'));
        this.search();
      },
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t('staFormula.deleteFail', 'Xóa công thức thất bại!'));
      },
    });
  }
}
