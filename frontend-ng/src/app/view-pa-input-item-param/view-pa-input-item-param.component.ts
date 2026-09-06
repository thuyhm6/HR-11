import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import {
  PaDistinctListItem,
  PaInputItemParamDto,
  PaInputItemParamUpdatePayload,
} from './view-pa-input-item-param.model';
import { ViewPaInputItemParamService } from './view-pa-input-item-param.service';

/** Các key message.properties dùng trong trang này - đã có sẵn đầy đủ ở namespace pa.inputItemParam.*
 *  và pa.salaryCode.itemType.* (dùng chung cho cả bản Thymeleaf gốc) và common.*. Tải trước 1 lần ở
 *  ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'common.close', 'common.confirm', 'common.cancel', 'common.loadFail', 'common.noData', 'common.totalRows',
  'pa.inputItemParam.pageTitle', 'pa.inputItemParam.no', 'pa.inputItemParam.company', 'pa.inputItemParam.itemType',
  'pa.inputItemParam.distinctField1', 'pa.inputItemParam.distinctField2', 'pa.inputItemParam.defaultVal',
  'pa.inputItemParam.itemName', 'pa.inputItemParam.activity', 'pa.inputItemParam.activity.use',
  'pa.inputItemParam.activity.notUse', 'pa.inputItemParam.search', 'pa.inputItemParam.edit',
  'pa.inputItemParam.delete', 'pa.inputItemParam.save', 'pa.inputItemParam.editTitle',
  'pa.inputItemParam.confirmDelete', 'pa.inputItemParam.selectRequired', 'pa.inputItemParam.selectOne',
  'pa.inputItemParam.validateRequired',
  'pa.salaryCode.itemType.all', 'pa.salaryCode.itemType.std', 'pa.salaryCode.itemType.adj',
  'pa.salaryCode.itemType.excPay', 'pa.salaryCode.itemType.adjDed', 'pa.salaryCode.itemType.excDed',
  'pa.salaryCode.itemType.calc',
];

const PAGE_SIZE_OPTIONS = [10, 20, 50, 100];
const DEFAULT_PAGE_SIZE = 20;

interface ItemTypeOption {
  value: number;
  key: string;
  fallback: string;
}

const ITEM_TYPES: ItemTypeOption[] = [
  { value: 1, key: 'pa.salaryCode.itemType.std', fallback: 'Hạng mục tiêu chuẩn' },
  { value: 2, key: 'pa.salaryCode.itemType.adj', fallback: 'Điều chỉnh trả lương' },
  { value: 3, key: 'pa.salaryCode.itemType.excPay', fallback: 'Trả lương ngoại lệ' },
  { value: 4, key: 'pa.salaryCode.itemType.adjDed', fallback: 'Điều chỉnh khoản trừ' },
  { value: 5, key: 'pa.salaryCode.itemType.excDed', fallback: 'Khoản trừ ngoại lệ' },
  { value: 6, key: 'pa.salaryCode.itemType.calc', fallback: 'Hạng mục tính toán' },
];

interface EditForm {
  paramNo: string | null;
  cpnyId: string;
  itemTypeLabel: string;
  aliasName: string;
  distinctField: string | null;
  distinctField2nd: string | null;
  defaultVal: string;
  activity: number;
}

const EMPTY_FORM: EditForm = {
  paramNo: null, cpnyId: '', itemTypeLabel: '', aliasName: '',
  distinctField: null, distinctField2nd: null, defaultVal: '', activity: 1,
};

/**
 * Bản Angular của pa/salary/viewPaInputItemParam.html (Thymeleaf + jQuery DataTables server-side) -
 * quản lý thông số mục nhập (bảng PA_PARAM_ITEM_PARAM). Gọi lại nguyên API JSON đã có sẵn ở
 * PaInputItemParamController (xem ViewPaInputItemParamService) - không đổi backend. Giữ nguyên phân
 * trang server-side (draw/start/length -> recordsTotal) đúng hành vi DataTables gốc thay vì đổi sang
 * client-side (tham khảo pattern nzFrontPagination=false ở ViewSalaryCodeComponent - cùng module PA
 * salary, cùng khái niệm itemType 1-6) - dùng nz-table thay cho jQuery DataTables.
 * Không có "Thêm mới": PA_PARAM_ITEM_PARAM chỉ được sinh kèm khi tạo PA_PARAM_ITEM, đúng bản gốc chỉ
 * cho Sửa/Xóa. Chọn nhiều dòng bằng checkbox để xóa hàng loạt (nút "Xóa") hoặc sửa đúng 1 dòng (nút
 * "Sửa", validate selectOne đúng bản gốc); click vào dòng (trừ ô checkbox) cũng mở modal sửa như
 * ViewSalaryCodeComponent, tiện hơn bản gốc (bản gốc chỉ bind click ở drawCallback của DataTables).
 * Modal sửa: Công ty/Loại hạng mục/Tên hạng mục hiển thị readonly (server không cho sửa các trường
 * này), chỉ Hạng mục phân biệt 1/2 (combo đổ từ PA_DISTINCT_LIST), Giá trị mặc định, Tình trạng sử
 * dụng là sửa được - đúng PaInputItemParamMapper.xml#updateOne.
 */
@Component({
  selector: 'app-view-pa-input-item-param',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzCheckboxModule,
    NzModalModule,
    NzAlertModule,
    NzTagModule,
    TranslatePipe,
  ],
  templateUrl: './view-pa-input-item-param.component.html',
  styleUrl: './view-pa-input-item-param.component.css',
})
export class ViewPaInputItemParamComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly itemTypes = ITEM_TYPES;

  readonly rows = signal<PaInputItemParamDto[]>([]);
  readonly totalRecords = signal(0);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  readonly distinctOptions = signal<PaDistinctListItem[]>([]);

  pageIndex = 1;
  pageSize = DEFAULT_PAGE_SIZE;
  private draw = 1;

  searchItemType: number | null = null;
  searchAliasName = '';

  readonly checkedKeys = signal<Set<string>>(new Set());

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly modalTitle = computed(() => this.i18n.t('pa.inputItemParam.editTitle', 'Chỉnh sửa thông số mục nhập'));
  form: EditForm = { ...EMPTY_FORM };

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);

  constructor(
    private readonly api: ViewPaInputItemParamService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getDistinctList().subscribe({
      next: (list) => this.distinctOptions.set(list ?? []),
      error: () => this.distinctOptions.set([]),
    });
    this.search();
  }

  itemTypeLabel(value: number): string {
    const item = this.itemTypes.find((i) => i.value === value);
    return item ? this.i18n.t(item.key, item.fallback) : String(value);
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
      itemTypeSearch: this.searchItemType,
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

  isChecked(row: PaInputItemParamDto): boolean {
    return this.checkedKeys().has(row.paramNo);
  }

  toggleChecked(row: PaInputItemParamDto, checked: boolean): void {
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

  // ==================== Modal chỉnh sửa ====================

  editSelected(): void {
    const selected = this.rows().filter((r) => this.isChecked(r));
    if (selected.length !== 1) {
      this.message.warning(this.i18n.t('pa.inputItemParam.selectOne', 'Vui lòng chọn đúng một bản ghi để sửa!'));
      return;
    }
    this.openEditModal(selected[0]);
  }

  openEditModal(row: PaInputItemParamDto): void {
    this.api.getOne(row.paramNo).subscribe({
      next: (dto) => {
        this.form = {
          paramNo: dto.paramNo,
          cpnyId: dto.cpnyId || '',
          itemTypeLabel: this.itemTypeLabel(dto.itemType),
          aliasName: dto.aliasName || '',
          distinctField: dto.distinctField,
          distinctField2nd: dto.distinctField2nd,
          defaultVal: dto.defaultVal || '',
          activity: dto.activity ?? 1,
        };
        this.modalVisible.set(true);
      },
      error: (err) => {
        this.message.error(err?.error?.error || this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  saveForm(): void {
    if (!this.form.paramNo) return;
    const payload: PaInputItemParamUpdatePayload = {
      paramNo: this.form.paramNo,
      distinctField: this.form.distinctField || null,
      distinctField2nd: this.form.distinctField2nd || null,
      defaultVal: this.form.defaultVal.trim(),
      activity: this.form.activity,
    };
    this.saving.set(true);
    this.api.update(payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.message.success(res.message || this.i18n.t('pa.inputItemParam.save', 'Lưu'));
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
      this.message.warning(this.i18n.t('pa.inputItemParam.selectRequired', 'Vui lòng chọn ít nhất một bản ghi!'));
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
        this.load();
      },
      error: (err) => {
        this.deleting.set(false);
        this.message.error(err?.error?.error || 'Lỗi không xác định');
      },
    });
  }
}
