import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTreeModule, NzFormatEmitEvent, NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import {
  PaFormulaDto,
  PaFormulaSavePayload,
  PaFormulaToolItem,
} from './view-pa-formula.model';
import { ViewPaFormulaService } from './view-pa-formula.service';

/** Các key message.properties dùng trong trang này - toàn bộ đã có sẵn từ trước dưới namespace
 *  pa.formula.* (dùng riêng cho đúng trang này, xem PaFormulaController) cộng thêm vài key common.*
 *  dùng chung toàn hệ thống. Tải trước 1 lần ở ngOnInit. */
const I18N_KEYS = [
  'common.stt', 'common.save', 'common.close', 'common.confirm', 'common.cancel', 'common.noData',
  'common.totalRows', 'common.loadFail', 'common.saveFail', 'common.deleteSuccess', 'common.deleteFail',
  'arItemParam.treeSearchPlaceholder',
  'pa.formula.itemList', 'pa.formula.formulaConfig', 'pa.formula.addNew', 'pa.formula.delete', 'pa.formula.no',
  'pa.formula.conditionSeq', 'pa.formula.condition', 'pa.formula.formular', 'pa.formula.description',
  'pa.formula.configItem', 'pa.formula.addTitle', 'pa.formula.editTitle', 'pa.formula.conditionLabel',
  'pa.formula.formularLabel', 'pa.formula.descriptionLabel', 'pa.formula.confirmDelete',
  'pa.formula.selectItemFirst', 'pa.formula.formularRequired', 'pa.formula.selectRequired',
  'pa.formula.toolPanel', 'pa.formula.toolParamItem', 'pa.formula.toolSalaryItem',
  'pa.formula.toolAttendanceItem', 'pa.formula.toolFixedParam',
];

const PAGE_SIZE_OPTIONS = [10, 20, 50, 100];

interface PaFormulaForm {
  formularNo: number | null;
  itemNo: string;
  condition: string;
  formular: string;
  description: string;
}

const EMPTY_FORM: Omit<PaFormulaForm, 'itemNo'> = {
  formularNo: null,
  condition: '',
  formular: '',
  description: '',
};

type FocusField = 'condition' | 'formular';

/**
 * Bản Angular của pa/salary/viewPaFormula.html (Thymeleaf + jQuery DataTables) - quản lý công thức
 * tính hạng mục lương (bảng PA_FORMULAR) theo dạng duyệt danh sách hạng mục tính bên trái, chọn 1
 * hạng mục để xem/thêm/sửa/xóa các công thức của riêng hạng mục đó bên phải, cùng pattern với
 * ViewSummaryFormulaComponent (trang chị em - cùng khái niệm điều kiện/công thức/công cụ chèn, khác
 * bảng dữ liệu AR_STA_FORMULAR). Gọi lại nguyên API JSON đã có sẵn ở PaFormulaController (xem
 * ViewPaFormulaService) - không đổi backend. jQuery DataTables (server-side) được thay bằng nz-table
 * (phân trang client-side, gọi API 1 lần với length lớn - xem ViewPaFormulaService.search), nz-modal
 * thay modal Bootstrap cho form thêm/sửa kèm 4 panel công cụ chèn nhanh vào ô điều kiện/công thức.
 *
 * Khác biệt có chủ đích so với bản gốc:
 * - Danh sách hạng mục bên trái đổi từ list div thường sang nz-tree (nzSelectMode, danh sách phẳng có
 *   thể tìm kiếm qua nzSearchValue) - cùng cách ViewSummaryFormulaComponent/ViewItemParameterComponent
 *   đã làm với dữ liệu phẳng tương tự, để đồng bộ trải nghiệm giữa các trang duyệt-hạng-mục trong hệ
 *   thống.
 * - Xác nhận xóa hàng loạt đổi từ window.confirm() sang nz-modal (deleteVisible/confirmDelete) - đồng
 *   bộ với mọi trang Angular khác trong hệ thống, không đổi hành vi nghiệp vụ (vẫn xóa nhiều dòng đã
 *   chọn theo checkbox).
 * - Giữ nguyên hành vi chèn mã hạng mục vào đúng vị trí con trỏ của ô đang focus (condition hoặc
 *   formular) - dùng document.getElementById theo id cố định của textarea (giống cách bản gốc dùng
 *   jQuery selector) vì nội dung nằm trong *nzModalContent chỉ được Angular tạo ra khi modal mở, không
 *   thể query bằng @ViewChild lúc component khởi tạo.
 */
@Component({
  selector: 'app-view-pa-formula',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzButtonModule,
    NzModalModule,
    NzAlertModule,
    NzCheckboxModule,
    NzTreeModule,
    TranslatePipe,
  ],
  templateUrl: './view-pa-formula.component.html',
  styleUrl: './view-pa-formula.component.css',
})
export class ViewPaFormulaComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly treeItems = signal<PaFormulaDto[]>([]);
  readonly treeNodes = computed<NzTreeNodeOptions[]>(() =>
    this.treeItems().map((o) => ({ title: o.itemName || o.itemNo, key: o.itemNo, isLeaf: true })),
  );
  treeSearchValue = '';
  selectedItemNo: string | null = null;
  selectedItemLabel = signal<string | null>(null);
  readonly panelTitle = computed(
    () => this.selectedItemLabel() ?? this.i18n.t('pa.formula.formulaConfig', 'Cấu hình công thức'),
  );

  readonly rows = signal<PaFormulaDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  /** ITEM_ID → ITEM_NAME toàn hệ thống - dùng hiển thị tên thay cho mã trong ô điều kiện/công thức. */
  readonly itemNameMap = signal<Record<string, string>>({});

  readonly toolParamItems = signal<PaFormulaToolItem[]>([]);
  readonly toolSalaryItems = signal<PaFormulaToolItem[]>([]);
  readonly toolAttendanceItems = signal<PaFormulaToolItem[]>([]);
  readonly toolFixedParams = signal<PaFormulaToolItem[]>([]);

  readonly checkedFormularNos = signal<Set<number>>(new Set());
  readonly allChecked = computed(() => {
    const rows = this.rows();
    const checked = this.checkedFormularNos();
    return rows.length > 0 && rows.every((r) => r.formularNo != null && checked.has(r.formularNo));
  });

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew()
      ? this.i18n.t('pa.formula.addTitle', 'Thêm mới công thức')
      : this.i18n.t('pa.formula.editTitle', 'Cập nhật công thức'),
  );
  form: PaFormulaForm = { ...EMPTY_FORM, itemNo: '' };
  private lastFocusedField: FocusField = 'formular';

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);

  constructor(
    private readonly api: ViewPaFormulaService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getItemList().subscribe({
      next: (list) => this.treeItems.set(list ?? []),
      error: () => this.treeItems.set([]),
    });
    this.api.getToolItems().subscribe({
      next: (tools) => {
        this.toolParamItems.set(tools.paramItems ?? []);
        this.toolSalaryItems.set(tools.salaryItems ?? []);
        this.toolAttendanceItems.set(tools.attendanceItems ?? []);
        this.toolFixedParams.set(tools.fixedParams ?? []);
      },
    });
    this.api.getAllItemNames().subscribe({
      next: (list) => {
        const map: Record<string, string> = {};
        (list ?? []).forEach((item) => {
          if (item.itemId && item.itemName) map[item.itemId] = item.itemName;
        });
        this.itemNameMap.set(map);
      },
    });
  }

  onTreeClick(event: NzFormatEmitEvent): void {
    const node = event.node;
    if (!node) return;
    this.selectedItemNo = node.key;
    this.selectedItemLabel.set(node.title);
    this.checkedFormularNos.set(new Set());
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

  /** Thay mã hạng mục (\S+ token) bằng tên hạng mục (nếu tra được) để dễ đọc, giữ nguyên hành vi
   *  vpfReplaceItemIds() của bản gốc. */
  highlightExpr(expr: string | null): SafeHtml {
    if (!expr) return '';
    const map = this.itemNameMap();
    const html = expr.replace(/\S+/g, (token) => {
      const name = map[token];
      if (name && name !== token) {
        return `<span class="text-primary fw-semibold" title="${this.escapeHtml(token)}">${this.escapeHtml(name)}</span>`;
      }
      return this.escapeHtml(token);
    });
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  private escapeHtml(text: string): string {
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // ==================== Chọn dòng (checkbox) ====================

  isChecked(formularNo: number | null): boolean {
    return formularNo != null && this.checkedFormularNos().has(formularNo);
  }

  toggleChecked(formularNo: number | null, checked: boolean): void {
    if (formularNo == null) return;
    const next = new Set(this.checkedFormularNos());
    if (checked) next.add(formularNo);
    else next.delete(formularNo);
    this.checkedFormularNos.set(next);
  }

  toggleAllChecked(checked: boolean): void {
    const next = new Set(this.checkedFormularNos());
    this.rows().forEach((r) => {
      if (r.formularNo == null) return;
      if (checked) next.add(r.formularNo);
      else next.delete(r.formularNo);
    });
    this.checkedFormularNos.set(next);
  }

  // ==================== Trình tự tính (lên/xuống) ====================

  swapSeq(row: PaFormulaDto, direction: 'up' | 'down'): void {
    if (row.formularNo == null) return;
    this.api.swapSeq(row.formularNo, row.itemNo, direction).subscribe({
      next: () => this.search(),
      error: (err) => this.message.error(err?.error?.error || this.i18n.t('common.saveFail', 'Lưu thất bại!')),
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
    this.lastFocusedField = 'formular';
    this.modalVisible.set(true);
  }

  openEditModal(row: PaFormulaDto): void {
    if (row.formularNo == null) return;
    this.isNew.set(false);
    this.form = {
      formularNo: row.formularNo,
      itemNo: row.itemNo,
      condition: row.condition || '',
      formular: row.formular || '',
      description: row.description || '',
    };
    this.lastFocusedField = 'formular';
    this.modalVisible.set(true);
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  onFieldFocus(field: FocusField): void {
    this.lastFocusedField = field;
  }

  /** Chèn mã tham chiếu vào đúng vị trí con trỏ của ô (điều kiện hoặc công thức) đang focus gần nhất -
   *  giữ nguyên hành vi của bản gốc (thao tác trực tiếp trên DOM textarea qua id cố định vì nội dung
   *  nằm trong *nzModalContent chỉ tồn tại trong DOM khi modal đang mở). */
  insertToFocusedField(itemId: string): void {
    const targetId = this.lastFocusedField === 'condition' ? 'vpf_condition' : 'vpf_formular';
    const el = document.getElementById(targetId) as HTMLTextAreaElement | null;
    const currentValue = this.lastFocusedField === 'condition' ? this.form.condition : this.form.formular;
    const start = el?.selectionStart ?? currentValue.length;
    const end = el?.selectionEnd ?? currentValue.length;
    const newValue = currentValue.substring(0, start) + itemId + currentValue.substring(end);
    if (this.lastFocusedField === 'condition') this.form.condition = newValue;
    else this.form.formular = newValue;

    if (el) {
      setTimeout(() => {
        el.focus();
        const pos = start + itemId.length;
        el.setSelectionRange(pos, pos);
      });
    }
  }

  saveForm(): void {
    if (!this.form.formular || !this.form.formular.trim()) {
      this.message.warning(this.i18n.t('pa.formula.formularRequired', 'Vui lòng nhập nội dung công thức!'));
      return;
    }
    const payload: PaFormulaSavePayload = {
      formularNo: this.form.formularNo,
      itemNo: this.form.itemNo,
      condition: this.form.condition,
      formular: this.form.formular,
      description: this.form.description,
    };
    this.saving.set(true);
    const request$ = this.isNew() ? this.api.insert(payload) : this.api.update(payload);
    request$.subscribe({
      next: (res) => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.message.success(res.message || this.i18n.t('common.save', 'Lưu'));
        this.search();
      },
      error: (err) => {
        this.saving.set(false);
        this.message.error(err?.error?.error || this.i18n.t('common.saveFail', 'Lưu thất bại!'));
      },
    });
  }

  // ==================== Xóa hàng loạt ====================

  openDeleteConfirm(): void {
    if (this.checkedFormularNos().size === 0) {
      this.message.warning(this.i18n.t('pa.formula.selectRequired', 'Vui lòng chọn ít nhất một bản ghi!'));
      return;
    }
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  confirmDelete(): void {
    const selected = Array.from(this.checkedFormularNos());
    if (selected.length === 0) return;
    this.deleting.set(true);
    this.deleteNext(selected, 0);
  }

  private deleteNext(selected: number[], index: number): void {
    if (index >= selected.length) {
      this.deleting.set(false);
      this.deleteVisible.set(false);
      this.checkedFormularNos.set(new Set());
      this.message.success(this.i18n.t('common.deleteSuccess', 'Xóa thành công!'));
      this.search();
      return;
    }
    this.api.delete(selected[index]).subscribe({
      next: () => this.deleteNext(selected, index + 1),
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t('common.deleteFail', 'Xóa thất bại!'));
      },
    });
  }
}
