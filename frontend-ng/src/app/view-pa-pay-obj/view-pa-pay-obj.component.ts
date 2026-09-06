import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import {
  CodeItem,
  EmployeeSearchDto,
  PaPayObjDto,
  PaPayScheduleOption,
} from './view-pa-pay-obj.model';
import { ViewPaPayObjService } from './view-pa-pay-obj.service';

/** Các key message.properties dùng trong trang này - đã có sẵn đầy đủ ở namespace pa.payObj.* và
 *  common.*, cùng các key empSearch.* / tempEmp.pickEmp / epi.field.position dùng chung cho modal chọn
 *  nhân viên (đã dùng ở ContractInfoListComponent). Tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'common.stt', 'common.action', 'common.confirm', 'common.cancel', 'common.close',
  'common.loadFail', 'common.saveFail', 'common.deleteFail', 'common.saveSuccess', 'common.deleteSuccess',
  'common.noData', 'common.totalRows', 'common.selectAll', 'common.empId', 'common.empName', 'common.deptName',
  'pa.payObj.title', 'pa.payObj.empSearch', 'pa.payObj.empSearch.placeholder', 'pa.payObj.empId',
  'pa.payObj.empName', 'pa.payObj.deptName', 'pa.payObj.includeType', 'pa.payObj.includeType.all',
  'pa.payObj.includeType.join', 'pa.payObj.includeType.notJoin', 'pa.payObj.payScheduleNo',
  'pa.payObj.empOffice', 'pa.payObj.createdBy', 'pa.payObj.createDate', 'pa.payObj.updatedBy',
  'pa.payObj.updateDate', 'pa.payObj.no', 'pa.payObj.search', 'pa.payObj.addNew', 'pa.payObj.delete',
  'pa.payObj.save', 'pa.payObj.exportExcel', 'pa.payObj.addTitle', 'pa.payObj.confirmDelete',
  'pa.payObj.selectRequired', 'pa.payObj.validateRequired',
  'empSearch.title', 'empSearch.field.keyword', 'empSearch.placeholder.keyword', 'empSearch.col.no',
  'epi.field.position', 'tempEmp.pickEmp',
];

const PAGE_SIZE_OPTIONS = [10, 20, 50, 100];

interface AddForm {
  payScheduleNo: string | null;
  empId: string;
  empDisplay: string;
  includeType: number;
}

const EMPTY_ADD_FORM: AddForm = { payScheduleNo: null, empId: '', empDisplay: '', includeType: 1 };

/**
 * Bản Angular của pa/workManagement/viewPaPayObj.html (Thymeleaf + jQuery DataTables serverSide) - quản
 * lý đối tượng nhận lương theo từng kế hoạch trả lương (bảng PA_PAY_OBJECT). Gọi lại nguyên API JSON đã
 * có sẵn ở PaWorkManagementController (xem ViewPaPayObjService) - không đổi backend, kể cả cơ chế phân
 * trang server-side kiểu DataTables cũ (draw/start/length + recordsFiltered).
 * Dùng nz-table với nzFrontPagination=false (tham khảo ContractInfoListComponent) thay cho jQuery
 * DataTables serverSide; nz-modal thay modal Bootstrap cho thêm mới; modal chọn nhân viên tự xây (dùng
 * lại /hrm/empinfo/api/employee/search, tham khảo ContractInfoListComponent) thay cho EmployeeSearchModal
 * (jQuery) vì trang cũ dùng chung component đó chỉ cho các trang Thymeleaf chưa migrate.
 * Sửa includeType trực tiếp trên bảng (inline select) rồi bấm "Lưu" để cập nhật hàng loạt - đúng hành vi
 * bản gốc (vppo_dirtyRows); chọn nhiều dòng bằng checkbox rồi bấm "Xóa" để xóa hàng loạt. Cả lựa chọn
 * (checkbox) lẫn thay đổi chưa lưu (dirty) chỉ áp dụng cho các dòng đang hiển thị ở trang hiện tại và bị
 * xóa khi đổi trang/tìm kiếm lại - đúng giới hạn của bản gốc (DataTables serverSide chỉ giữ checkbox/
 * select đang có trong DOM của trang hiện tại).
 * Bản gốc có nút "Xuất Excel" trỏ tới GET .../export nhưng endpoint này không tồn tại ở backend (nút
 * luôn lỗi 404) - nay làm client-side bằng xlsx (SheetJS): gọi lại API danh sách với length=recordsFiltered
 * để lấy toàn bộ kết quả đang lọc rồi xuất .xlsx (xem CLAUDE.md).
 */
@Component({
  selector: 'app-view-pa-pay-obj',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzModalModule,
    NzCheckboxModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './view-pa-pay-obj.component.html',
  styleUrl: './view-pa-pay-obj.component.css',
})
export class ViewPaPayObjComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<PaPayObjDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly recordsFiltered = signal(0);
  readonly exporting = signal(false);

  pageIndex = 1;
  pageSize = 20;

  empSearch = '';
  searchPayScheduleNo: string | null = null;
  searchIncludeType = '';
  searchEmpOffice: string | null = null;

  readonly payScheduleOptions = signal<PaPayScheduleOption[]>([]);
  readonly empOfficeOptions = signal<CodeItem[]>([]);

  readonly checkedKeys = signal<Set<string>>(new Set());
  private readonly dirtyMap = new Map<string, { payScheduleNo: string; empId: string; includeType: number }>();
  readonly dirtyKeys = signal<Set<string>>(new Set());
  readonly saving = signal(false);

  readonly addModalVisible = signal(false);
  readonly addSaving = signal(false);
  addForm: AddForm = { ...EMPTY_ADD_FORM };

  readonly pickerVisible = signal(false);
  readonly pickerRows = signal<EmployeeSearchDto[]>([]);
  readonly pickerLoading = signal(false);
  pickerKeyword = '';

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);

  constructor(
    private readonly api: ViewPaPayObjService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadPayScheduleOptions();
    this.loadEmpOfficeOptions();
    this.search();
  }

  private loadPayScheduleOptions(): void {
    this.api.getPayScheduleOptions().subscribe((list) => this.payScheduleOptions.set(list ?? []));
  }

  private loadEmpOfficeOptions(): void {
    this.api.getCodeList('15118').subscribe((list) => this.empOfficeOptions.set(list ?? []));
  }

  payScheduleLabel(p: PaPayScheduleOption): string {
    return `${p.payDate ?? ''} - ${p.salaryDistinName ?? ''}`;
  }

  rowKey(row: { payScheduleNo: string; empId: string }): string {
    return `${row.payScheduleNo}_${row.empId}`;
  }

  search(): void {
    this.pageIndex = 1;
    this.resetSelection();
    this.loadPage();
  }

  clearSearch(): void {
    this.empSearch = '';
    this.searchPayScheduleNo = null;
    this.searchIncludeType = '';
    this.searchEmpOffice = null;
    this.search();
  }

  onPageIndexChange(pageIndex: number): void {
    this.pageIndex = pageIndex;
    this.resetSelection();
    this.loadPage();
  }

  onPageSizeChange(pageSize: number): void {
    this.pageSize = pageSize;
    this.pageIndex = 1;
    this.resetSelection();
    this.loadPage();
  }

  private resetSelection(): void {
    this.checkedKeys.set(new Set());
    this.dirtyMap.clear();
    this.dirtyKeys.set(new Set());
  }

  private loadPage(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getPageList({
      empSearch: this.empSearch.trim(),
      payScheduleNo: this.searchPayScheduleNo,
      includeType: this.searchIncludeType,
      empOffice: this.searchEmpOffice,
      draw: this.pageIndex,
      start: (this.pageIndex - 1) * this.pageSize,
      length: this.pageSize,
    }).subscribe({
      next: (res) => {
        if (res.error) {
          this.errorMessage.set(res.error);
          this.rows.set([]);
          this.recordsFiltered.set(0);
        } else {
          this.rows.set(res.data ?? []);
          this.recordsFiltered.set(res.recordsFiltered ?? 0);
        }
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.rows.set([]);
        this.recordsFiltered.set(0);
        this.loading.set(false);
      },
    });
  }

  // ==================== Chọn dòng (checkbox) ====================

  isChecked(row: PaPayObjDto): boolean {
    return this.checkedKeys().has(this.rowKey(row));
  }

  toggleRow(row: PaPayObjDto, checked: boolean): void {
    const set = new Set(this.checkedKeys());
    checked ? set.add(this.rowKey(row)) : set.delete(this.rowKey(row));
    this.checkedKeys.set(set);
  }

  get allChecked(): boolean {
    return this.rows().length > 0 && this.rows().every((r) => this.checkedKeys().has(this.rowKey(r)));
  }

  get someChecked(): boolean {
    return this.rows().some((r) => this.checkedKeys().has(this.rowKey(r))) && !this.allChecked;
  }

  toggleAll(checked: boolean): void {
    this.checkedKeys.set(checked ? new Set(this.rows().map((r) => this.rowKey(r))) : new Set());
  }

  // ==================== Sửa includeType inline + Lưu hàng loạt ====================

  isDirty(row: PaPayObjDto): boolean {
    return this.dirtyKeys().has(this.rowKey(row));
  }

  onIncludeTypeChange(row: PaPayObjDto, value: number): void {
    row.includeType = value;
    const key = this.rowKey(row);
    this.dirtyMap.set(key, { payScheduleNo: row.payScheduleNo, empId: row.empId, includeType: value });
    this.dirtyKeys.set(new Set(this.dirtyMap.keys()));
  }

  saveDirty(): void {
    const items = Array.from(this.dirtyMap.values());
    if (items.length === 0) {
      this.message.info(this.i18n.t('pa.payObj.selectRequired', 'Không có dữ liệu thay đổi'));
      return;
    }
    this.saving.set(true);
    this.api.saveList(items).subscribe({
      next: () => {
        this.saving.set(false);
        this.dirtyMap.clear();
        this.dirtyKeys.set(new Set());
        this.message.success(this.i18n.t('common.saveSuccess', 'Lưu thành công!'));
        this.loadPage();
      },
      error: () => {
        this.saving.set(false);
        this.message.error(this.i18n.t('common.saveFail', 'Lưu thất bại!'));
      },
    });
  }

  // ==================== Thêm mới ====================

  openAddModal(): void {
    this.addForm = { ...EMPTY_ADD_FORM, payScheduleNo: this.searchPayScheduleNo };
    this.addModalVisible.set(true);
  }

  closeAddModal(): void {
    this.addModalVisible.set(false);
  }

  saveNew(): void {
    if (!this.addForm.payScheduleNo || !this.addForm.empId) {
      this.message.warning(this.i18n.t('pa.payObj.validateRequired', 'Vui lòng nhập đầy đủ thông tin bắt buộc!'));
      return;
    }
    this.addSaving.set(true);
    this.api.save({
      payScheduleNo: this.addForm.payScheduleNo,
      empId: this.addForm.empId,
      includeType: this.addForm.includeType,
    }).subscribe({
      next: () => {
        this.addSaving.set(false);
        this.addModalVisible.set(false);
        this.message.success(this.i18n.t('common.saveSuccess', 'Lưu thành công!'));
        this.search();
      },
      error: (err) => {
        this.addSaving.set(false);
        const msg = err?.error?.error || this.i18n.t('common.saveFail', 'Lưu thất bại!');
        this.message.error(msg);
      },
    });
  }

  // ==================== Modal chọn nhân viên ====================

  openPicker(): void {
    this.pickerKeyword = '';
    this.pickerRows.set([]);
    this.pickerVisible.set(true);
  }

  closePicker(): void {
    this.pickerVisible.set(false);
  }

  pickerSearch(): void {
    this.pickerLoading.set(true);
    this.api.searchEmployees(this.pickerKeyword.trim()).subscribe({
      next: (rows) => {
        this.pickerRows.set(rows ?? []);
        this.pickerLoading.set(false);
      },
      error: () => {
        this.pickerRows.set([]);
        this.pickerLoading.set(false);
        this.message.error(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  selectPickedEmployee(emp: EmployeeSearchDto): void {
    this.addForm.empId = emp.empId;
    this.addForm.empDisplay = `${emp.empId} - ${emp.localName}`;
    this.pickerVisible.set(false);
  }

  // ==================== Xóa hàng loạt ====================

  openDeleteConfirm(): void {
    if (this.checkedKeys().size === 0) {
      this.message.warning(this.i18n.t('pa.payObj.selectRequired', 'Vui lòng chọn ít nhất một bản ghi!'));
      return;
    }
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get deleteCount(): number {
    return this.checkedKeys().size;
  }

  confirmDelete(): void {
    const keys = this.rows()
      .filter((r) => this.checkedKeys().has(this.rowKey(r)))
      .map((r) => ({ payScheduleNo: r.payScheduleNo, empId: r.empId }));
    if (keys.length === 0) return;
    this.deleting.set(true);
    this.api.deleteList(keys).subscribe({
      next: () => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.message.success(this.i18n.t('common.deleteSuccess', 'Xóa thành công!'));
        this.resetSelection();
        this.loadPage();
      },
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t('common.deleteFail', 'Xóa thất bại!'));
      },
    });
  }

  // ==================== Xuất Excel ====================

  exportExcel(): void {
    this.exporting.set(true);
    this.api.getPageList({
      empSearch: this.empSearch.trim(),
      payScheduleNo: this.searchPayScheduleNo,
      includeType: this.searchIncludeType,
      empOffice: this.searchEmpOffice,
      draw: 1,
      start: 0,
      length: Math.max(this.recordsFiltered(), 1),
    }).subscribe({
      next: (res) => {
        this.exporting.set(false);
        this.downloadXlsx(res.data ?? []);
      },
      error: () => {
        this.exporting.set(false);
        this.message.error(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
      },
    });
  }

  private downloadXlsx(list: PaPayObjDto[]): void {
    const headers = [
      this.i18n.t('pa.payObj.no', 'No.'),
      this.i18n.t('pa.payObj.empName', 'Họ tên'),
      this.i18n.t('pa.payObj.empId', 'Mã nhân viên'),
      this.i18n.t('pa.payObj.deptName', 'Phòng ban'),
      this.i18n.t('pa.payObj.includeType', 'Phân biệt'),
      this.i18n.t('pa.payObj.createdBy', 'Người tạo'),
      this.i18n.t('pa.payObj.createDate', 'Thời gian tạo'),
      this.i18n.t('pa.payObj.updatedBy', 'Người thay đổi'),
      this.i18n.t('pa.payObj.updateDate', 'Thời gian thay đổi'),
    ];
    const dataRows = list.map((r, i) => [
      i + 1, r.empName, r.empId, r.deptName,
      r.includeType === 1
        ? this.i18n.t('pa.payObj.includeType.join', 'Tham gia')
        : this.i18n.t('pa.payObj.includeType.notJoin', 'Không tham gia'),
      r.createdBy, r.createDate, r.updatedBy, r.updateDate,
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DoiTuongNhanLuong');
    XLSX.writeFile(workbook, 'pa_pay_obj_list.xlsx');
  }
}
