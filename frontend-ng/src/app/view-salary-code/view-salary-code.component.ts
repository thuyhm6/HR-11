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
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { PaSalaryCodeDto, PaSalaryCodeSavePayload } from './view-salary-code.model';
import { ViewSalaryCodeService } from './view-salary-code.service';

/** Các key message.properties dùng trong trang này - đã có sẵn đầy đủ ở namespace pa.salaryCode.*
 *  (dùng chung cho cả bản Thymeleaf gốc) và common.*. Tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'common.close', 'common.confirm', 'common.cancel', 'common.loadFail', 'common.noData', 'common.totalRows',
  'pa.salaryCode.pageTitle', 'pa.salaryCode.no', 'pa.salaryCode.itemType', 'pa.salaryCode.itemId',
  'pa.salaryCode.itemName', 'pa.salaryCode.dataType', 'pa.salaryCode.descr', 'pa.salaryCode.mapCode',
  'pa.salaryCode.createdBy', 'pa.salaryCode.createDate', 'pa.salaryCode.search', 'pa.salaryCode.addNew',
  'pa.salaryCode.delete', 'pa.salaryCode.save', 'pa.salaryCode.addTitle', 'pa.salaryCode.editTitle',
  'pa.salaryCode.confirmDelete', 'pa.salaryCode.selectRequired', 'pa.salaryCode.validateRequired',
  'pa.salaryCode.itemType.all', 'pa.salaryCode.itemType.std', 'pa.salaryCode.itemType.adj',
  'pa.salaryCode.itemType.excPay', 'pa.salaryCode.itemType.adjDed', 'pa.salaryCode.itemType.excDed',
  'pa.salaryCode.itemType.calc', 'pa.salaryCode.nameEn', 'pa.salaryCode.nameKo', 'pa.salaryCode.nameVi',
  'pa.salaryCode.nameZh', 'pa.salaryCode.dataType.number', 'pa.salaryCode.dataType.varchar',
  'pa.salaryCode.companyUsage',
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

const COMPANY_USAGE_OPTIONS = ['HTSV', 'HAE'];

interface SalaryCodeForm {
  itemNo: string | null;
  itemType: number;
  itemId: string;
  nameEn: string;
  nameKo: string;
  nameVi: string;
  nameZh: string;
  dataType: string;
  descr: string;
  companyUsage: string[];
}

const EMPTY_FORM: SalaryCodeForm = {
  itemNo: null, itemType: 1, itemId: '', nameEn: '', nameKo: '', nameVi: '', nameZh: '',
  dataType: 'NUMBER(14,4)', descr: '', companyUsage: [],
};

function rowKey(itemType: number, itemNo: string): string {
  return `${itemType}_${itemNo}`;
}

/**
 * Bản Angular của pa/salarycode/viewSalaryCodeList.html (Thymeleaf + jQuery DataTables server-side) -
 * quản lý danh mục hạng mục lương (PA_PARAM_ITEM cho itemType 1-5, PA_ITEM cho itemType=6, hợp nhất ở
 * BE qua UNION ALL - xem PaSalaryCodeMapper.xml). Gọi lại nguyên API JSON đã có sẵn ở
 * PaSalaryCodeController (xem ViewSalaryCodeService) - không đổi backend. Giữ nguyên phân trang
 * server-side (draw/start/length -> recordsTotal) đúng hành vi DataTables gốc thay vì đổi sang
 * client-side, vì danh mục này có thể nhiều bản ghi (tham khảo pattern nzFrontPagination=false ở
 * ViewRecruitListComponent) - dùng nz-table thay cho jQuery DataTables.
 * Chọn nhiều dòng bằng checkbox (Set<string> khóa "itemType_itemNo", theo đúng hành vi bản gốc: danh
 * sách chọn chỉ áp dụng cho các dòng đang hiển thị trên trang hiện tại, reset khi tải lại/đổi trang) để
 * xóa hàng loạt qua modal xác nhận (thay cho window.confirm() JS ở bản gốc). Click vào dòng (trừ ô
 * checkbox) mở modal sửa - API chi tiết trả đủ 4 tên theo ngôn ngữ + companyUsage (API danh sách chỉ
 * trả itemName đã ghép theo ngôn ngữ hiện tại + companyUsageStr để hiển thị bảng).
 */
@Component({
  selector: 'app-view-salary-code',
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
    TranslatePipe,
  ],
  templateUrl: './view-salary-code.component.html',
  styleUrl: './view-salary-code.component.css',
})
export class ViewSalaryCodeComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly itemTypes = ITEM_TYPES;
  readonly companyUsageOptions = COMPANY_USAGE_OPTIONS;

  readonly rows = signal<PaSalaryCodeDto[]>([]);
  readonly totalRecords = signal(0);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  pageIndex = 1;
  pageSize = DEFAULT_PAGE_SIZE;
  private draw = 1;

  searchItemName = '';
  searchItemType: number | null = null;

  readonly checkedKeys = signal<Set<string>>(new Set());

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew()
      ? this.i18n.t('pa.salaryCode.addTitle', 'Thêm mới hạng mục lương')
      : this.i18n.t('pa.salaryCode.editTitle', 'Chỉnh sửa hạng mục lương'),
  );
  form: SalaryCodeForm = { ...EMPTY_FORM };

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);

  constructor(
    private readonly api: ViewSalaryCodeService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
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
      itemNameSearch: this.searchItemName.trim(),
      itemTypeSearch: this.searchItemType,
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

  rowKey(row: PaSalaryCodeDto): string {
    return rowKey(row.itemType, row.itemNo);
  }

  isChecked(row: PaSalaryCodeDto): boolean {
    return this.checkedKeys().has(this.rowKey(row));
  }

  toggleChecked(row: PaSalaryCodeDto, checked: boolean): void {
    const next = new Set(this.checkedKeys());
    if (checked) next.add(this.rowKey(row));
    else next.delete(this.rowKey(row));
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
    this.rows().forEach((r) => (checked ? next.add(this.rowKey(r)) : next.delete(this.rowKey(r))));
    this.checkedKeys.set(next);
  }

  // ==================== Modal Thêm mới / Chỉnh sửa ====================

  openAddModal(): void {
    this.isNew.set(true);
    this.form = { ...EMPTY_FORM };
    this.modalVisible.set(true);
  }

  openEditModal(row: PaSalaryCodeDto): void {
    this.isNew.set(false);
    this.api.getOne(row.itemType, row.itemNo).subscribe({
      next: (dto) => {
        this.form = {
          itemNo: dto.itemNo,
          itemType: dto.itemType,
          itemId: dto.itemId ?? '',
          nameEn: dto.nameEn ?? '',
          nameKo: dto.nameKo ?? '',
          nameVi: dto.nameVi ?? '',
          nameZh: dto.nameZh ?? '',
          dataType: dto.dataType ?? 'NUMBER(14,4)',
          descr: dto.descr ?? '',
          companyUsage: dto.companyUsage ?? [],
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

  isCompanyChecked(code: string): boolean {
    return this.form.companyUsage.includes(code);
  }

  toggleCompanyUsage(code: string, checked: boolean): void {
    this.form.companyUsage = checked
      ? [...this.form.companyUsage, code]
      : this.form.companyUsage.filter((c) => c !== code);
  }

  saveForm(): void {
    const itemId = this.form.itemId.trim();
    if (!this.form.itemType || !itemId) {
      this.message.warning(this.i18n.t('pa.salaryCode.validateRequired', 'Vui lòng nhập đầy đủ thông tin bắt buộc!'));
      return;
    }
    const payload: PaSalaryCodeSavePayload = {
      itemNo: this.form.itemNo,
      itemType: this.form.itemType,
      itemId,
      nameEn: this.form.nameEn.trim(),
      nameKo: this.form.nameKo.trim(),
      nameVi: this.form.nameVi.trim(),
      nameZh: this.form.nameZh.trim(),
      dataType: this.form.dataType,
      descr: this.form.descr.trim(),
      companyUsage: this.form.companyUsage,
    };
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.message.success(res.message || this.i18n.t('pa.salaryCode.save', 'Lưu'));
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
      this.message.warning(this.i18n.t('pa.salaryCode.selectRequired', 'Vui lòng chọn ít nhất một bản ghi!'));
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
    const keys = this.rows()
      .filter((r) => this.isChecked(r))
      .map((r) => ({ itemNo: r.itemNo, itemType: r.itemType }));
    if (keys.length === 0) {
      this.deleteVisible.set(false);
      return;
    }
    this.deleting.set(true);
    this.api.deleteList(keys).subscribe({
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
