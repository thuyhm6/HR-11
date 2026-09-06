import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { EvsFormulaDto, EvsFormulaSavePayload } from './evs-formula-list.model';
import { EvsFormulaListService } from './evs-formula-list.service';

/** Các key message.properties dùng trong trang này - toàn bộ key evs.manage.viewEvsFormulaList.* đã có
 *  sẵn (dùng chung với bản Thymeleaf cũ, không tạo mới - xem CLAUDE.md mục 3). Tải trước 1 lần ở
 *  ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'evs.manage.viewEvsFormulaList.search.code', 'evs.manage.viewEvsFormulaList.search.name',
  'evs.manage.viewEvsFormulaList.search.status', 'evs.manage.viewEvsFormulaList.search.allOption',
  'evs.manage.viewEvsFormulaList.search.active', 'evs.manage.viewEvsFormulaList.search.inactive',
  'evs.manage.viewEvsFormulaList.btn.search', 'evs.manage.viewEvsFormulaList.btn.clearFilter',
  'evs.manage.viewEvsFormulaList.btn.addNew', 'evs.manage.viewEvsFormulaList.col.no',
  'evs.manage.viewEvsFormulaList.col.code', 'evs.manage.viewEvsFormulaList.col.name',
  'evs.manage.viewEvsFormulaList.col.formula', 'evs.manage.viewEvsFormulaList.col.remark',
  'evs.manage.viewEvsFormulaList.col.status', 'evs.manage.viewEvsFormulaList.col.orderNo',
  'evs.manage.viewEvsFormulaList.col.action', 'evs.manage.viewEvsFormulaList.modal.addTitle',
  'evs.manage.viewEvsFormulaList.modal.editTitle', 'evs.manage.viewEvsFormulaList.modal.code',
  'evs.manage.viewEvsFormulaList.modal.name', 'evs.manage.viewEvsFormulaList.modal.formula',
  'evs.manage.viewEvsFormulaList.modal.remark', 'evs.manage.viewEvsFormulaList.modal.orderNo',
  'evs.manage.viewEvsFormulaList.modal.status', 'evs.manage.viewEvsFormulaList.modal.activeLabel',
  'evs.manage.viewEvsFormulaList.modal.auditInfo', 'evs.manage.viewEvsFormulaList.modal.deleteTitle',
  'evs.manage.viewEvsFormulaList.modal.deleteConfirm', 'evs.manage.viewEvsFormulaList.badge.active',
  'evs.manage.viewEvsFormulaList.badge.inactive', 'evs.manage.viewEvsFormulaList.msg.loadError',
  'evs.manage.viewEvsFormulaList.msg.enterCode', 'evs.manage.viewEvsFormulaList.msg.enterName',
  'evs.manage.viewEvsFormulaList.msg.saveError', 'evs.manage.viewEvsFormulaList.msg.deleteError',
  'evs.manage.viewEvsFormulaList.btn.edit', 'evs.manage.viewEvsFormulaList.btn.delete',
  'common.close', 'common.save', 'common.cancel', 'common.stt', 'common.action', 'common.noData',
  'common.totalRows',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200];
const PREVIEW_LEN = 80;

interface FormulaForm {
  seq: string | null;
  codeNo: string;
  codeName: string;
  formula: string;
  remark: string;
  orderNo: number | null;
  activity: boolean;
  updatedBy: string | null;
  updateDate: string | null;
}

const EMPTY_FORM: FormulaForm = {
  seq: null, codeNo: '', codeName: '', formula: '', remark: '', orderNo: null, activity: true,
  updatedBy: null, updateDate: null,
};

/**
 * Bản Angular của evs/manage/viewEvsFormulaList.html (Thymeleaf + jQuery DataTables) - Danh sách công
 * thức đánh giá (bảng EVS_FORMULA - mã/tên/nội dung công thức dạng text tự do dùng ở các trang evs-*
 * khác qua combo "Hình thức tiêu chuẩn", xem EvsParamPanelComponent). Gọi lại nguyên API JSON đã có sẵn
 * ở EvsManageController (xem EvsFormulaListService) - không đổi backend.
 *
 * Cấu trúc CRUD modal đơn giản (search + nz-table + nz-modal, tham khảo EvsDistributionRatePanelComponent/
 * EvsResumeListComponent - trang chị em cùng module) - KHÔNG theo pattern ViewPaFormulaComponent (cây
 * hạng mục bên trái + panel điều kiện/công thức/công cụ chèn nhanh bên phải) vì EVS_FORMULA là danh mục
 * phẳng (mã/tên/công thức/ghi chú/thứ tự/trạng thái, không có khái niệm ITEM_NO/CONDITION_SEQ/hạng mục
 * cha như PA_FORMULAR) - cấu trúc master-detail của viewPaFormula.html không khớp dữ liệu trang này.
 *
 * codeNo không cho sửa sau khi tạo (BE không cập nhật CODE_NO ở UPDATE, xem EvsFormulaMapper.xml) - giữ
 * nguyên hành vi readonly-khi-sửa của bản gốc. Công thức/Ghi chú hiển thị rút gọn trong bảng (tooltip
 * xem đầy đủ) - đúng render() cắt chuỗi ở bản gốc.
 */
@Component({
  selector: 'app-evs-formula-list',
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
    NzSwitchModule,
    NzModalModule,
    NzAlertModule,
    NzTagModule,
    TranslatePipe,
  ],
  templateUrl: './evs-formula-list.component.html',
  styleUrl: './evs-formula-list.component.css',
})
export class EvsFormulaListComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<EvsFormulaDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  searchCodeNo = '';
  searchCodeName = '';
  searchActivity: string | null = null;

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew()
      ? this.i18n.t('evs.manage.viewEvsFormulaList.modal.addTitle', 'Thêm mới công thức')
      : this.i18n.t('evs.manage.viewEvsFormulaList.modal.editTitle', 'Chỉnh sửa công thức'),
  );
  form: FormulaForm = { ...EMPTY_FORM };

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private deleteTarget: EvsFormulaDto | null = null;

  constructor(
    private readonly api: EvsFormulaListService,
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
    this.api.getList(this.searchCodeNo.trim(), this.searchCodeName.trim(), this.searchActivity ?? '').subscribe({
      next: (rows) => {
        this.rows.set(rows ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t('evs.manage.viewEvsFormulaList.msg.loadError', 'Lỗi khi tải thông tin công thức.'));
        this.rows.set([]);
        this.loading.set(false);
      },
    });
  }

  clearSearch(): void {
    this.searchCodeNo = '';
    this.searchCodeName = '';
    this.searchActivity = null;
    this.search();
  }

  activityTagColor(activity: string | null): string {
    return activity === '1' ? 'success' : 'default';
  }

  preview(text: string | null, maxLen: number = PREVIEW_LEN): string {
    if (!text) return '';
    return text.length > maxLen ? text.substring(0, maxLen) + '…' : text;
  }

  // ==================== Modal Thêm mới / Cập nhật ====================

  openAddModal(): void {
    this.isNew.set(true);
    this.form = { ...EMPTY_FORM };
    this.modalVisible.set(true);
  }

  openEditModal(row: EvsFormulaDto): void {
    this.api.getOne(row.seq).subscribe({
      next: (r) => {
        if (!r) return;
        this.isNew.set(false);
        this.form = {
          seq: r.seq,
          codeNo: r.codeNo || '',
          codeName: r.codeName || '',
          formula: r.formula || '',
          remark: r.remark || '',
          orderNo: r.orderNo != null && r.orderNo !== '' ? Number(r.orderNo) : null,
          activity: r.activity === '1',
          updatedBy: r.updatedBy || null,
          updateDate: r.updateDate || null,
        };
        this.modalVisible.set(true);
      },
      error: () => this.message.error(this.i18n.t('evs.manage.viewEvsFormulaList.msg.loadError', 'Lỗi khi tải thông tin công thức.')),
    });
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  saveForm(): void {
    const codeNo = this.form.codeNo.trim();
    if (!codeNo) {
      this.message.warning(this.i18n.t('evs.manage.viewEvsFormulaList.msg.enterCode', 'Vui lòng nhập Mã.'));
      return;
    }
    const codeName = this.form.codeName.trim();
    if (!codeName) {
      this.message.warning(this.i18n.t('evs.manage.viewEvsFormulaList.msg.enterName', 'Vui lòng nhập Tên.'));
      return;
    }

    const payload: EvsFormulaSavePayload = {
      seq: this.form.seq,
      codeNo,
      codeName,
      formula: this.form.formula,
      remark: this.form.remark,
      orderNo: this.form.orderNo != null ? String(this.form.orderNo) : null,
      activity: this.form.activity ? '1' : '0',
    };

    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: () => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.search();
      },
      error: () => {
        this.saving.set(false);
        this.message.error(this.i18n.t('evs.manage.viewEvsFormulaList.msg.saveError', 'Lỗi khi lưu dữ liệu. Vui lòng thử lại.'));
      },
    });
  }

  // ==================== Xóa ====================

  openDeleteConfirm(row: EvsFormulaDto): void {
    this.deleteTarget = row;
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get deleteConfirmMessage(): string {
    const template = this.i18n.t('evs.manage.viewEvsFormulaList.modal.deleteConfirm', 'Bạn có chắc muốn xóa công thức "{0}"?');
    return template.replace('{0}', this.deleteTarget?.codeName ?? '');
  }

  confirmDelete(): void {
    if (!this.deleteTarget) return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.seq).subscribe({
      next: () => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.search();
      },
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t('evs.manage.viewEvsFormulaList.msg.deleteError', 'Lỗi khi xóa dữ liệu. Vui lòng thử lại.'));
      },
    });
  }
}
