import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { ChangeUserService } from '../change-user/change-user.service';
import { AuthDeptNode, CodeItem, EmployeeSearchDto, PaEmpAccountDto, PaEmpAccountSavePayload } from './view-pa-emp-account.model';
import { ViewPaEmpAccountService } from './view-pa-emp-account.service';

/** Các key message.properties dùng trong trang này - đã có sẵn đầy đủ ở namespace pa.empAccount.* (dùng
 *  chung cho cả bản Thymeleaf gốc), common.* và các key empSearch.x / arSupervisor.x dùng chung cho popup
 *  tìm nhân viên (tái dùng đúng namespace của AddEmpShiftComponent). Tải trước 1 lần ở ngOnInit. */
const I18N_KEYS = [
  'pa.empAccount.pageTitle', 'pa.empAccount.no', 'pa.empAccount.empId', 'pa.empAccount.localName',
  'pa.empAccount.dept', 'pa.empAccount.deptPlaceholder', 'pa.empAccount.position', 'pa.empAccount.dateStarted',
  'pa.empAccount.bank', 'pa.empAccount.accountNo', 'pa.empAccount.accountAddress', 'pa.empAccount.accountName',
  'pa.empAccount.securityNo', 'pa.empAccount.fundNo', 'pa.empAccount.securityPayDate', 'pa.empAccount.fundPayDate',
  'pa.empAccount.taxNo', 'pa.empAccount.activity', 'pa.empAccount.activity.active', 'pa.empAccount.activity.inactive',
  'pa.empAccount.empOffice', 'pa.empAccount.empSearch', 'pa.empAccount.createdBy', 'pa.empAccount.createDate',
  'pa.empAccount.updatedBy', 'pa.empAccount.updateDate', 'pa.empAccount.supervisor',
  'pa.empAccount.empSelectPlaceholder', 'pa.empAccount.search', 'pa.empAccount.addNew', 'pa.empAccount.delete',
  'pa.empAccount.save', 'pa.empAccount.addTitle', 'pa.empAccount.editTitle', 'pa.empAccount.confirmDelete',
  'pa.empAccount.selectRequired', 'pa.empAccount.validateRequired',
  'common.stt', 'common.action', 'common.confirm', 'common.cancel', 'common.close', 'common.search',
  'common.clearFilter', 'common.noData', 'common.totalRows', 'common.selectAll', 'common.loadFail',
  'common.saveSuccess', 'common.saveFail', 'common.deleteSuccess', 'common.deleteFail',
  'essDept.exportExcel',
  'arSupervisor.field.emp', 'arSupervisor.placeholder.selectEmp', 'arSupervisor.btn.select',
  'arSupervisor.js.empSelected',
  'empSearch.title', 'empSearch.field.keyword', 'empSearch.placeholder.keyword', 'empSearch.field.dept',
  'empSearch.field.empOffice', 'empSearch.btn.clearFilter', 'empSearch.col.no', 'epi.field.position',
  'vdp.search.dept.placeholder', 'mep.msg.loadDeptFailed',
];

const BANK_PARENT_CODE = '14015883';
const EMP_OFFICE_PARENT_CODE = '15118';
const PAGE_SIZE_OPTIONS = [10, 20, 50, 100];

interface EmpAccountForm {
  paEmpAccountNo: number | null;
  personId: string | null;
  empDisplay: string;
  accountType: number | null;
  accountNo: string;
  accountAddress: string;
  accountName: string;
  securityNo: string;
  securityPayDate: string;
  fundNo: string;
  fundPayDate: string;
  taxNo: string;
  activity: number;
}

const EMPTY_FORM: EmpAccountForm = {
  paEmpAccountNo: null, personId: null, empDisplay: '', accountType: null, accountNo: '', accountAddress: '',
  accountName: '', securityNo: '', securityPayDate: '', fundNo: '', fundPayDate: '', taxNo: '', activity: 1,
};

/**
 * Bản Angular của pa/workManagement/viewPaEmpAccount.html (Thymeleaf + jQuery DataTables serverSide) -
 * quản lý tài khoản lương nhân viên (bảng PA_EMP_ACCOUNT). Gọi lại nguyên API JSON đã có sẵn ở
 * PaWorkManagementController (xem ViewPaEmpAccountService) - không đổi backend, kể cả cơ chế phân trang
 * server-side kiểu DataTables cũ (draw/start/length + recordsFiltered).
 * Dùng nz-table với nzFrontPagination=false (tham khảo ViewPaPayObjComponent - cùng kiểu backend
 * DataTablesResponse) thay cho jQuery DataTables serverSide; nz-tree-select thay widget cây phòng ban tự
 * viết (DeptTree.js, tham khảo ManageEmpPositionInfoComponent); popup tìm nhân viên dùng lại đúng pattern
 * + service của ChangeUserComponent (searchEmployees/getAuthorizedDepartments/getCodeList, tham khảo
 * AddEmpShiftComponent) thay cho EmployeeSearchModal (jQuery + DataTables); nz-modal thay modal Bootstrap
 * cho thêm mới/chỉnh sửa. Click vào 1 dòng trong bảng (trừ ô checkbox) để mở modal sửa, chọn nhiều dòng
 * bằng checkbox rồi bấm "Xóa" để xóa hàng loạt - đúng hành vi bản gốc.
 * Bản gốc chưa có export Excel riêng - nay làm client-side bằng xlsx (SheetJS) theo đúng quy ước xuất
 * .xlsx của các trang khác (xem CLAUDE.md): gọi lại API danh sách với length=recordsFiltered để lấy toàn
 * bộ kết quả đang lọc rồi xuất.
 */
@Component({
  selector: 'app-view-pa-emp-account',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzDatePickerModule,
    NzTreeSelectModule,
    NzModalModule,
    NzCheckboxModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './view-pa-emp-account.component.html',
  styleUrl: './view-pa-emp-account.component.css',
})
export class ViewPaEmpAccountComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<PaEmpAccountDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly recordsFiltered = signal(0);
  readonly exporting = signal(false);

  pageIndex = 1;
  pageSize = 20;

  empSearch = '';
  deptNos: string[] = [];
  empOfficeSearch: string | null = null;
  bankSearch: string | null = null;
  fromDate: Date | null = null;
  toDate: Date | null = null;

  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly bankOptions = signal<CodeItem[]>([]);
  readonly empOfficeOptions = signal<CodeItem[]>([]);
  readonly deptTreeErrorMessage = signal<string | null>(null);
  private deptChildrenMap = new Map<string, string[]>();

  readonly checkedKeys = signal<Set<number>>(new Set());

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  form: EmpAccountForm = { ...EMPTY_FORM };

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);

  // ==================== Popup tìm kiếm nhân viên (tái dùng pattern ChangeUserComponent) ====================
  readonly pickerVisible = signal(false);
  readonly pickerRows = signal<EmployeeSearchDto[]>([]);
  readonly pickerLoading = signal(false);
  readonly pickerErrorMessage = signal<string | null>(null);
  pickerKeyword = '';
  pickerDeptNos: string[] = [];
  pickerEmpOffice: string | null = null;

  constructor(
    private readonly api: ViewPaEmpAccountService,
    private readonly empApi: ChangeUserService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
    this.empApi.getCodeList(BANK_PARENT_CODE).subscribe((list) => this.bankOptions.set(list ?? []));
    this.empApi.getCodeList(EMP_OFFICE_PARENT_CODE).subscribe((list) => this.empOfficeOptions.set(list ?? []));
    this.search();
  }

  private loadDeptTree(): void {
    this.empApi.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(this.buildDeptTree(list ?? [])),
      error: () =>
        this.deptTreeErrorMessage.set(this.i18n.t('mep.msg.loadDeptFailed', 'Lỗi khi tải danh sách phòng ban')),
    });
  }

  private buildDeptTree(list: AuthDeptNode[]): NzTreeNodeOptions[] {
    const map = new Map<string, NzTreeNodeOptions & { parent: string }>();
    list.forEach((d) => map.set(d.id, { title: d.text, key: d.id, parent: d.parent, children: [] }));

    this.deptChildrenMap = new Map<string, string[]>();
    const roots: NzTreeNodeOptions[] = [];
    map.forEach((node) => {
      if (node.parent && node.parent !== '0' && map.has(node.parent)) {
        map.get(node.parent)!.children!.push(node);
        const siblings = this.deptChildrenMap.get(node.parent) ?? [];
        siblings.push(node.key);
        this.deptChildrenMap.set(node.parent, siblings);
      } else {
        roots.push(node);
      }
    });

    const markLeaf = (nodes: NzTreeNodeOptions[]) => {
      nodes.forEach((n) => {
        n.isLeaf = !n.children || n.children.length === 0;
        if (n.children?.length) markLeaf(n.children);
      });
    };
    markLeaf(roots);
    return roots;
  }

  /** nz-tree-select chỉ trả về key của node được tick trực tiếp - mở rộng xuống các phòng ban con để
   *  khớp hành vi cascade của widget DeptTree.js gốc (xem giải thích ở ManageEmpPositionInfoComponent). */
  private expandDeptSelection(selected: string[]): string[] {
    const result = new Set<string>();
    const stack = [...selected];
    while (stack.length) {
      const id = stack.pop()!;
      if (result.has(id)) continue;
      result.add(id);
      const children = this.deptChildrenMap.get(id);
      if (children) stack.push(...children);
    }
    return Array.from(result);
  }

  // ==================== Tra cứu ====================

  search(): void {
    this.pageIndex = 1;
    this.checkedKeys.set(new Set());
    this.loadPage();
  }

  clearSearch(): void {
    this.empSearch = '';
    this.deptNos = [];
    this.empOfficeSearch = null;
    this.bankSearch = null;
    this.fromDate = null;
    this.toDate = null;
    this.search();
  }

  onPageIndexChange(pageIndex: number): void {
    this.pageIndex = pageIndex;
    this.checkedKeys.set(new Set());
    this.loadPage();
  }

  onPageSizeChange(pageSize: number): void {
    this.pageSize = pageSize;
    this.pageIndex = 1;
    this.checkedKeys.set(new Set());
    this.loadPage();
  }

  private loadPage(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getPageList({
      empSearch: this.empSearch.trim(),
      deptNos: this.expandDeptSelection(this.deptNos).join(','),
      empOfficeSearch: this.empOfficeSearch,
      bankSearch: this.bankSearch,
      fromDateStarted: this.formatYmd(this.fromDate),
      toDateStarted: this.formatYmd(this.toDate),
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

  isChecked(row: PaEmpAccountDto): boolean {
    return this.checkedKeys().has(row.paEmpAccountNo);
  }

  toggleRow(row: PaEmpAccountDto, checked: boolean): void {
    const set = new Set(this.checkedKeys());
    checked ? set.add(row.paEmpAccountNo) : set.delete(row.paEmpAccountNo);
    this.checkedKeys.set(set);
  }

  get allChecked(): boolean {
    return this.rows().length > 0 && this.rows().every((r) => this.checkedKeys().has(r.paEmpAccountNo));
  }

  get someChecked(): boolean {
    return this.rows().some((r) => this.checkedKeys().has(r.paEmpAccountNo)) && !this.allChecked;
  }

  toggleAll(checked: boolean): void {
    this.checkedKeys.set(checked ? new Set(this.rows().map((r) => r.paEmpAccountNo)) : new Set());
  }

  // ==================== Modal Thêm mới / Chỉnh sửa ====================

  openAddModal(): void {
    this.isNew.set(true);
    this.form = { ...EMPTY_FORM };
    this.modalVisible.set(true);
  }

  openEditModal(row: PaEmpAccountDto): void {
    this.api.getOne(row.paEmpAccountNo).subscribe({
      next: (d) => {
        this.isNew.set(false);
        this.form = {
          paEmpAccountNo: d.paEmpAccountNo,
          personId: d.personId,
          empDisplay: `${d.empId || ''} - ${d.localName || ''}`,
          accountType: d.accountType,
          accountNo: d.accountNo || '',
          accountAddress: d.accountAddress || '',
          accountName: d.accountName || '',
          securityNo: d.securityNo || '',
          securityPayDate: d.securityPayDate || '',
          fundNo: d.fundNo || '',
          fundPayDate: d.fundPayDate || '',
          taxNo: d.taxNo || '',
          activity: d.activity != null ? d.activity : 1,
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
    if (!this.form.personId) {
      this.message.warning(this.i18n.t('pa.empAccount.validateRequired', 'Vui lòng chọn nhân viên!'));
      return;
    }
    const payload: PaEmpAccountSavePayload = {
      paEmpAccountNo: this.form.paEmpAccountNo,
      personId: this.form.personId,
      accountType: this.form.accountType,
      accountNo: this.form.accountNo.trim() || null,
      accountAddress: this.form.accountAddress.trim() || null,
      accountName: this.form.accountName.trim() || null,
      securityNo: this.form.securityNo.trim() || null,
      securityPayDate: this.form.securityPayDate.trim() || null,
      fundNo: this.form.fundNo.trim() || null,
      fundPayDate: this.form.fundPayDate.trim() || null,
      taxNo: this.form.taxNo.trim() || null,
      activity: this.form.activity,
    };
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.message.success(res.message || this.i18n.t('common.saveSuccess', 'Lưu thành công!'));
        this.search();
      },
      error: (err) => {
        this.saving.set(false);
        const msg = err?.error?.error || this.i18n.t('common.saveFail', 'Lưu thất bại!');
        this.message.error(msg);
      },
    });
  }

  // ==================== Popup tìm kiếm nhân viên ====================

  openPicker(): void {
    this.pickerKeyword = '';
    this.pickerDeptNos = [];
    this.pickerEmpOffice = null;
    this.pickerRows.set([]);
    this.pickerErrorMessage.set(null);
    this.pickerVisible.set(true);
  }

  closePicker(): void {
    this.pickerVisible.set(false);
  }

  pickerSearch(): void {
    this.pickerLoading.set(true);
    this.pickerErrorMessage.set(null);
    this.empApi.searchEmployees({
      keyword: this.pickerKeyword.trim(),
      deptCodes: this.expandDeptSelection(this.pickerDeptNos),
      empOffice: this.pickerEmpOffice ?? '',
    }).subscribe({
      next: (rows) => {
        this.pickerRows.set(rows ?? []);
        this.pickerLoading.set(false);
      },
      error: () => {
        this.pickerErrorMessage.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.pickerRows.set([]);
        this.pickerLoading.set(false);
      },
    });
  }

  pickerClear(): void {
    this.pickerKeyword = '';
    this.pickerDeptNos = [];
    this.pickerEmpOffice = null;
    this.pickerSearch();
  }

  selectEmployee(row: EmployeeSearchDto): void {
    this.form.personId = row.personId;
    this.form.empDisplay = `${row.empId} - ${row.localName}`;
    this.pickerVisible.set(false);
  }

  // ==================== Xóa hàng loạt ====================

  openDeleteConfirm(): void {
    if (this.checkedKeys().size === 0) {
      this.message.warning(this.i18n.t('pa.empAccount.selectRequired', 'Vui lòng chọn ít nhất một bản ghi!'));
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
    const ids = Array.from(this.checkedKeys());
    if (ids.length === 0) return;
    this.deleting.set(true);
    this.api.deleteList(ids).subscribe({
      next: (res) => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.message.success(res.message || this.i18n.t('common.deleteSuccess', 'Xóa thành công!'));
        this.checkedKeys.set(new Set());
        this.loadPage();
      },
      error: (err) => {
        this.deleting.set(false);
        this.message.error(err?.error?.error || this.i18n.t('common.deleteFail', 'Xóa thất bại!'));
      },
    });
  }

  // ==================== Xuất Excel ====================

  exportExcel(): void {
    this.exporting.set(true);
    this.api.getPageList({
      empSearch: this.empSearch.trim(),
      deptNos: this.expandDeptSelection(this.deptNos).join(','),
      empOfficeSearch: this.empOfficeSearch,
      bankSearch: this.bankSearch,
      fromDateStarted: this.formatYmd(this.fromDate),
      toDateStarted: this.formatYmd(this.toDate),
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

  private downloadXlsx(list: PaEmpAccountDto[]): void {
    const headers = [
      this.i18n.t('pa.empAccount.no', 'STT'),
      this.i18n.t('pa.empAccount.empId', 'Mã nhân viên'),
      this.i18n.t('pa.empAccount.localName', 'Họ tên'),
      this.i18n.t('pa.empAccount.dept', 'Phòng ban'),
      this.i18n.t('pa.empAccount.position', 'Chức vụ'),
      this.i18n.t('pa.empAccount.dateStarted', 'Ngày vào làm'),
      this.i18n.t('pa.empAccount.bank', 'Ngân hàng'),
      this.i18n.t('pa.empAccount.accountNo', 'Tài khoản ngân hàng'),
      this.i18n.t('pa.empAccount.accountAddress', 'Chi nhánh'),
      this.i18n.t('pa.empAccount.securityNo', 'Mã số BH'),
      this.i18n.t('pa.empAccount.taxNo', 'Mã số thuế'),
      this.i18n.t('pa.empAccount.createdBy', 'Người tạo'),
      this.i18n.t('pa.empAccount.createDate', 'Thời gian tạo'),
      this.i18n.t('pa.empAccount.updatedBy', 'Người thay đổi'),
      this.i18n.t('pa.empAccount.updateDate', 'Thời gian thay đổi'),
    ];
    const dataRows = list.map((r, i) => [
      i + 1, r.empId, r.localName, r.deptName, r.postGradeName, this.toDmy(r.dateStarted), r.accountTypeName,
      r.accountNo, r.accountAddress, r.securityNo, r.taxNo, r.createdBy, this.toDmy(r.createDate),
      r.updatedBy, this.toDmy(r.updateDate),
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'TaiKhoanLuong');
    XLSX.writeFile(workbook, 'pa_emp_account_list.xlsx');
  }

  /** Chuyển 'YYYY-MM-DD' (BE) sang 'dd/MM/yyyy' để hiển thị theo CLAUDE.md. */
  toDmy(ymd: string | null): string {
    if (!ymd) return '';
    const [y, m, d] = ymd.split('-');
    return y && m && d ? `${d}/${m}/${y}` : ymd;
  }

  private formatYmd(d: Date | null): string | null {
    return d ? formatDate(d, 'yyyy-MM-dd', 'vi') : null;
  }
}
