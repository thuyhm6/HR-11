import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import {
  PaApplyTypeOption,
  PaComputeItemParamDto,
  PaComputeItemParamInsertPayload,
  PaComputeItemParamUpdatePayload,
  PaItemOption,
} from './view-pa-compute-item-param-list.model';
import { ViewPaComputeItemParamListService } from './view-pa-compute-item-param-list.service';

/** Các key message.properties dùng trong trang này - đã có sẵn đầy đủ ở namespace pa.computeItemParam.*
 *  (dùng chung cho cả bản Thymeleaf gốc) và common.*. Tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'common.close', 'common.confirm', 'common.cancel', 'common.loadFail', 'common.noData', 'common.totalRows',
  'pa.computeItemParam.pageTitle', 'pa.computeItemParam.no', 'pa.computeItemParam.company',
  'pa.computeItemParam.itemName', 'pa.computeItemParam.pricision', 'pa.computeItemParam.carryBit',
  'pa.computeItemParam.calcuOrder', 'pa.computeItemParam.applyType', 'pa.computeItemParam.search',
  'pa.computeItemParam.addNew', 'pa.computeItemParam.edit', 'pa.computeItemParam.delete',
  'pa.computeItemParam.save', 'pa.computeItemParam.addTitle', 'pa.computeItemParam.editTitle',
  'pa.computeItemParam.confirmDelete', 'pa.computeItemParam.selectRequired', 'pa.computeItemParam.selectOne',
  'pa.computeItemParam.validateRequired',
];

const PAGE_SIZE_OPTIONS = [10, 20, 50, 100];
const DEFAULT_PAGE_SIZE = 20;

interface AddForm {
  itemNo: string | null;
  pricision: number | null;
  carryBit: number | null;
  applyType: string | null;
}

interface EditForm {
  paramNo: string | null;
  cpnyName: string;
  aliasName: string;
  pricision: number | null;
  carryBit: number | null;
  applyType: string | null;
}

const EMPTY_ADD_FORM: AddForm = { itemNo: null, pricision: null, carryBit: null, applyType: null };
const EMPTY_EDIT_FORM: EditForm = {
  paramNo: null, cpnyName: '', aliasName: '', pricision: null, carryBit: null, applyType: null,
};

/**
 * Bản Angular của pa/salary/viewPaComputeItemParamList.html (Thymeleaf + jQuery DataTables server-side)
 * - quản lý thông số mục tính toán (bảng PA_ITEM_PARAM). Gọi lại nguyên API JSON đã có sẵn ở
 * PaComputeItemParamController (xem ViewPaComputeItemParamListService) - không đổi backend. Giữ nguyên
 * phân trang server-side (draw/start/length -> recordsTotal) đúng hành vi DataTables gốc (tham khảo
 * pattern nzFrontPagination=false ở ViewSalaryCodeComponent/ViewPaInputItemParamComponent - cùng module
 * PA salary) - dùng nz-table thay cho jQuery DataTables.
 * Cột "Trình tự tính" giữ nguyên 2 nút lên/xuống gọi API swapOrder rồi tải lại ĐÚNG trang hiện tại
 * (không reset về trang 1, giống ajax.reload(null, false) ở bản gốc) - tham khảo icon bx-up-arrow-alt/
 * bx-down-arrow-alt ở ViewPaFormulaComponent (trang chị em cùng khái niệm trình tự tính).
 * Chọn nhiều dòng bằng checkbox để xóa hàng loạt (nút "Xóa") hoặc sửa đúng 1 dòng (nút "Sửa", validate
 * selectOne đúng bản gốc); click vào dòng (trừ ô checkbox/nút lên-xuống) cũng mở modal sửa. Modal Thêm
 * mới đổ combo "Tên hạng mục" từ PA_ITEM chưa có PA_ITEM_PARAM (itemList) - combo này cần tải lại mỗi
 * lần mở modal vì danh sách thay đổi sau mỗi lần thêm/xóa.
 */
@Component({
  selector: 'app-view-pa-compute-item-param-list',
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
    NzCheckboxModule,
    NzModalModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './view-pa-compute-item-param-list.component.html',
  styleUrl: './view-pa-compute-item-param-list.component.css',
})
export class ViewPaComputeItemParamListComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<PaComputeItemParamDto[]>([]);
  readonly totalRecords = signal(0);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  readonly applyTypeOptions = signal<PaApplyTypeOption[]>([]);
  readonly itemOptions = signal<PaItemOption[]>([]);

  pageIndex = 1;
  pageSize = DEFAULT_PAGE_SIZE;
  private draw = 1;

  searchAliasName = '';

  readonly checkedKeys = signal<Set<string>>(new Set());

  readonly addModalVisible = signal(false);
  readonly adding = signal(false);
  addForm: AddForm = { ...EMPTY_ADD_FORM };

  readonly editModalVisible = signal(false);
  readonly saving = signal(false);
  editForm: EditForm = { ...EMPTY_EDIT_FORM };

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);

  constructor(
    private readonly api: ViewPaComputeItemParamListService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getApplyTypeOptions().subscribe({
      next: (list) => this.applyTypeOptions.set(list ?? []),
      error: () => this.applyTypeOptions.set([]),
    });
    this.search();
  }

  // ==================== Tìm kiếm + phân trang server-side ====================

  search(): void {
    this.pageIndex = 1;
    this.load();
  }

  onPageIndexChange(index: number): void {
    this.pageIndex = index;
    this.load();
  }

  onPageSizeChange(size: number): void {
    this.pageSize = size;
    this.pageIndex = 1;
    this.load();
  }

  private load(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.checkedKeys.set(new Set());
    this.draw += 1;
    this.api.getList({
      aliasNameSearch: this.searchAliasName.trim(),
      draw: this.draw,
      start: (this.pageIndex - 1) * this.pageSize,
      length: this.pageSize,
    }).subscribe({
      next: (res) => {
        this.rows.set(res.data ?? []);
        this.totalRecords.set(res.recordsTotal ?? 0);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.rows.set([]);
        this.totalRecords.set(0);
        this.loading.set(false);
      },
    });
  }

  // ==================== Chọn nhiều dòng (checkbox) ====================

  isChecked(row: PaComputeItemParamDto): boolean {
    return this.checkedKeys().has(row.paramNo);
  }

  toggleChecked(row: PaComputeItemParamDto, checked: boolean): void {
    const next = new Set(this.checkedKeys());
    if (checked) next.add(row.paramNo);
    else next.delete(row.paramNo);
    this.checkedKeys.set(next);
  }

  get allChecked(): boolean {
    const list = this.rows();
    return list.length > 0 && list.every((r) => this.isChecked(r));
  }

  get someChecked(): boolean {
    return this.checkedKeys().size > 0 && !this.allChecked;
  }

  toggleAllChecked(checked: boolean): void {
    const next = new Set(this.checkedKeys());
    this.rows().forEach((r) => (checked ? next.add(r.paramNo) : next.delete(r.paramNo)));
    this.checkedKeys.set(next);
  }

  // ==================== Trình tự tính (lên/xuống) ====================

  swapOrder(row: PaComputeItemParamDto, direction: 'up' | 'down'): void {
    this.api.swapOrder(row.paramNo, direction).subscribe({
      next: () => this.load(),
      error: (err) => this.message.error(err?.error?.error || 'Lỗi không xác định'),
    });
  }

  // ==================== Modal Thêm mới ====================

  openAddModal(): void {
    this.addForm = { ...EMPTY_ADD_FORM };
    this.api.getItemOptions().subscribe({
      next: (list) => this.itemOptions.set(list ?? []),
      error: () => this.itemOptions.set([]),
    });
    this.addModalVisible.set(true);
  }

  closeAddModal(): void {
    this.addModalVisible.set(false);
  }

  saveAdd(): void {
    if (!this.addForm.itemNo) {
      this.message.warning(this.i18n.t('pa.computeItemParam.validateRequired', 'Vui lòng nhập đầy đủ thông tin bắt buộc!'));
      return;
    }
    const payload: PaComputeItemParamInsertPayload = {
      itemNo: this.addForm.itemNo,
      pricision: this.addForm.pricision,
      carryBit: this.addForm.carryBit,
      applyType: this.addForm.applyType,
    };
    this.adding.set(true);
    this.api.insert(payload).subscribe({
      next: (res) => {
        this.adding.set(false);
        this.addModalVisible.set(false);
        this.message.success(res.message || this.i18n.t('pa.computeItemParam.save', 'Lưu'));
        this.search();
      },
      error: (err) => {
        this.adding.set(false);
        this.message.error(err?.error?.error || 'Lỗi không xác định');
      },
    });
  }

  // ==================== Modal Chỉnh sửa ====================

  editSelected(): void {
    const selected = this.rows().filter((r) => this.isChecked(r));
    if (selected.length !== 1) {
      this.message.warning(this.i18n.t('pa.computeItemParam.selectOne', 'Vui lòng chọn đúng một bản ghi để sửa!'));
      return;
    }
    this.openEditModal(selected[0]);
  }

  openEditModal(row: PaComputeItemParamDto): void {
    this.api.getOne(row.paramNo).subscribe({
      next: (dto) => {
        this.editForm = {
          paramNo: dto.paramNo,
          cpnyName: dto.cpnyName || dto.cpnyId || '',
          aliasName: dto.aliasName || dto.itemId || '',
          pricision: dto.pricision,
          carryBit: dto.carryBit,
          applyType: dto.applyType,
        };
        this.editModalVisible.set(true);
      },
      error: (err) => {
        this.message.error(err?.error?.error || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  closeEditModal(): void {
    this.editModalVisible.set(false);
  }

  saveEdit(): void {
    if (!this.editForm.paramNo) return;
    const payload: PaComputeItemParamUpdatePayload = {
      paramNo: this.editForm.paramNo,
      pricision: this.editForm.pricision,
      carryBit: this.editForm.carryBit,
      applyType: this.editForm.applyType,
    };
    this.saving.set(true);
    this.api.update(payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        this.editModalVisible.set(false);
        this.message.success(res.message || this.i18n.t('pa.computeItemParam.save', 'Lưu'));
        this.load();
      },
      error: (err) => {
        this.saving.set(false);
        this.message.error(err?.error?.error || 'Lỗi không xác định');
      },
    });
  }

  // ==================== Xóa nhiều dòng ====================

  openDeleteConfirm(): void {
    if (this.checkedKeys().size === 0) {
      this.message.warning(this.i18n.t('pa.computeItemParam.selectRequired', 'Vui lòng chọn ít nhất một bản ghi!'));
      return;
    }
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get selectedCount(): number {
    return this.checkedKeys().size;
  }

  confirmDelete(): void {
    const paramNos = this.rows().filter((r) => this.isChecked(r)).map((r) => r.paramNo);
    if (paramNos.length === 0) {
      this.deleteVisible.set(false);
      return;
    }
    this.deleting.set(true);
    this.api.deleteList(paramNos).subscribe({
      next: (res) => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.message.success(res.message || 'Xóa thành công');
        this.search();
      },
      error: (err) => {
        this.deleting.set(false);
        this.message.error(err?.error?.error || 'Lỗi không xác định');
      },
    });
  }
}
