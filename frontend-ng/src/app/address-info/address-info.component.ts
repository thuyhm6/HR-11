import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import {
  AddressSavePayload,
  CodeItem,
  EmployeeOption,
  HrAddressMattersDto,
} from './address-info.model';
import { AddressInfoService } from './address-info.service';

/** Các key message.properties dùng trong trang này - đều đã có sẵn (hrm.empinfo.address.* dành riêng
 *  cho trang này, cộng các key chung), tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'common.stt', 'common.empId', 'common.empName', 'common.action', 'common.addNew', 'common.edit',
  'common.delete', 'common.save', 'common.close', 'common.confirm', 'common.cancel',
  'common.saveSuccess', 'common.saveFail', 'common.deleteSuccess', 'common.deleteFail',
  'common.loadFail', 'common.noData', 'common.totalRows', 'common.placeholder.enterEmpId', 'common.placeholder.enterEmpName',
  'common.selectAll', 'essDept.search', 'essDept.clearFilter', 'essDept.exportExcel',
  'hrm.empinfo.workexp.selectEmp',
  'hrm.empinfo.address.addTitle', 'hrm.empinfo.address.editTitle', 'hrm.empinfo.address.employee',
  'hrm.empinfo.address.addressType', 'hrm.empinfo.address.effectiveStartDate', 'hrm.empinfo.address.nationality',
  'hrm.empinfo.address.addressContent', 'hrm.empinfo.address.searchContent', 'hrm.empinfo.address.addressTypePlaceholder',
  'hrm.empinfo.address.colType', 'hrm.empinfo.address.colEffDate', 'hrm.empinfo.address.colContent',
  'hrm.empinfo.address.colNationality', 'hrm.empinfo.address.pleaseSelect', 'hrm.empinfo.address.confirmDelete',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200];

/** parentCodeNo của bảng SY_CODE - dùng chung với PersonalInfoComponent (addressTypeOptions/nationalityOptions). */
const ADDRESS_TYPE_PARENT_CODE = '14013840';
const NATIONALITY_PARENT_CODE = '870';

interface AddressForm {
  addressNo: number | null;
  personId: string;
  empId: string;
  localName: string;
  addressType: string | null;
  effectiveStartDate: Date | null;
  addressContent: string;
  nationality: string | null;
}

const EMPTY_FORM: AddressForm = {
  addressNo: null, personId: '', empId: '', localName: '', addressType: null,
  effectiveStartDate: null, addressContent: '', nationality: null,
};

/**
 * Bản Angular của hrm/empinfo/addressSearch.html (Thymeleaf + jQuery DataTables) - quản lý địa chỉ của
 * nhân viên (bảng hr_address_matters). Gọi lại nguyên API JSON đã có sẵn ở HrEmpinfoController (xem
 * AddressInfoService) - không đổi backend. Dùng nz-table (phân trang client-side, đúng hành vi
 * DataTables gốc: BE trả toàn bộ danh sách theo bộ lọc, không phân trang server, tham khảo
 * ManageEmpPositionInfoComponent) thay cho jQuery DataTables; nz-modal thay modal Bootstrap;
 * nz-autocomplete thay cho EmployeeSearchModal jQuery toàn cục (giống WorkExperienceInfoComponent/
 * EmergencyAddressInfoComponent) - mapper update() có cập nhật PERSON_ID nên form cho đổi nhân viên
 * cả khi sửa, không cần khóa readonly. nz-select cho Loại địa chỉ (addressType, parentCodeNo
 * '14013840') và Quốc gia (nationality, parentCodeNo '870') dùng chung 2 code list mà
 * PersonalInfoComponent (mục địa chỉ ESS) đang dùng - BE có resolve tên qua GET_GLOBAL_NAME cho cả 2
 * field này (khác EmergencyAddressInfoComponent: HR_EMERGENCY_ADDRESS.NATIONALITY không được resolve
 * tên nên giữ free text). Xuất excel làm client-side (không có endpoint export riêng ở backend - bản
 * gốc cũng xuất client-side qua DataTables Buttons).
 */
@Component({
  selector: 'app-address-info',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzSelectModule,
    NzDatePickerModule,
    NzButtonModule,
    NzModalModule,
    NzAlertModule,
    NzAutocompleteModule,
    TranslatePipe,
  ],
  templateUrl: './address-info.component.html',
  styleUrl: './address-info.component.css',
})
export class AddressInfoComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<HrAddressMattersDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  readonly addressTypeOptions = signal<CodeItem[]>([]);
  readonly nationalityOptions = signal<CodeItem[]>([]);

  searchEmpId = '';
  searchLocalName = '';
  searchAddressContent = '';

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew()
      ? this.i18n.t('hrm.empinfo.address.addTitle', 'Thêm mới Địa chỉ')
      : this.i18n.t('hrm.empinfo.address.editTitle', 'Cập nhật Địa chỉ'),
  );
  form: AddressForm = { ...EMPTY_FORM };

  empKeyword = '';
  readonly empOptions = signal<EmployeeOption[]>([]);
  private empSearchTimer?: ReturnType<typeof setTimeout>;

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private deleteTarget: HrAddressMattersDto | null = null;

  constructor(
    private readonly api: AddressInfoService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getCodeList(ADDRESS_TYPE_PARENT_CODE).subscribe((list) => this.addressTypeOptions.set(list ?? []));
    this.api.getCodeList(NATIONALITY_PARENT_CODE).subscribe((list) => this.nationalityOptions.set(list ?? []));
    this.search();
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api
      .search({ empId: this.searchEmpId, localName: this.searchLocalName, addressContent: this.searchAddressContent })
      .subscribe({
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
    this.searchEmpId = '';
    this.searchLocalName = '';
    this.searchAddressContent = '';
    this.search();
  }

  // ==================== Modal Thêm mới / Cập nhật ====================

  openAddModal(): void {
    this.isNew.set(true);
    this.form = { ...EMPTY_FORM };
    this.empKeyword = '';
    this.empOptions.set([]);
    this.modalVisible.set(true);
  }

  openEditModal(row: HrAddressMattersDto): void {
    this.isNew.set(false);
    this.form = {
      addressNo: row.addressNo,
      personId: row.personId,
      empId: row.empId || '',
      localName: row.localName || '',
      addressType: row.addressType || null,
      effectiveStartDate: row.effectiveStartDate ? new Date(row.effectiveStartDate) : null,
      addressContent: row.addressContent || '',
      nationality: row.nationality || null,
    };
    this.empKeyword = `${this.form.empId} - ${this.form.localName}`;
    this.empOptions.set([]);
    this.modalVisible.set(true);
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  onEmpKeywordChange(value: string): void {
    this.empKeyword = value;
    this.form.personId = '';
    if (this.empSearchTimer) clearTimeout(this.empSearchTimer);
    const keyword = value.trim();
    if (!keyword) {
      this.empOptions.set([]);
      return;
    }
    this.empSearchTimer = setTimeout(() => {
      this.api.searchEmployees(keyword).subscribe({
        next: (list) => this.empOptions.set(list ?? []),
        error: () => this.empOptions.set([]),
      });
    }, 300);
  }

  onEmpSelected(option: EmployeeOption): void {
    this.form.personId = option.personId;
    this.form.empId = option.empId;
    this.form.localName = option.localName;
    this.empKeyword = `${option.empId} - ${option.localName}`;
    this.empOptions.set([]);
  }

  saveForm(): void {
    if (!this.form.personId || !this.form.addressType) {
      this.message.warning(this.i18n.t('hrm.empinfo.address.pleaseSelect', 'Vui lòng chọn Nhân viên và nhập Loại địa chỉ'));
      return;
    }
    const payload: AddressSavePayload = {
      addressNo: this.form.addressNo,
      personId: this.form.personId,
      addressType: this.form.addressType,
      effectiveStartDate: this.formatYmd(this.form.effectiveStartDate),
      addressContent: this.form.addressContent,
      nationality: this.form.nationality ?? '',
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

  openDeleteConfirm(row: HrAddressMattersDto): void {
    this.deleteTarget = row;
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get deleteTargetName(): string {
    return this.deleteTarget ? `${this.deleteTarget.empId} - ${this.deleteTarget.localName} (${this.deleteTarget.addressTypeName})` : '';
  }

  confirmDelete(): void {
    if (!this.deleteTarget?.addressNo) return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.addressNo).subscribe({
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

  /** Xuất excel client-side (giống bản gốc DataTables Buttons, không có endpoint export riêng ở
   *  backend) - dùng thư viện xlsx (SheetJS) để tạo đúng file .xlsx nhị phân (xem CLAUDE.md). */
  exportExcel(): void {
    const headers = [
      this.i18n.t('common.stt', 'STT'),
      this.i18n.t('common.empId', 'Mã NV'),
      this.i18n.t('common.empName', 'Họ tên'),
      this.i18n.t('hrm.empinfo.address.colType', 'Loại địa chỉ'),
      this.i18n.t('hrm.empinfo.address.colEffDate', 'Ngày hiệu lực'),
      this.i18n.t('hrm.empinfo.address.colContent', 'Nội dung địa chỉ'),
      this.i18n.t('hrm.empinfo.address.colNationality', 'Quốc gia'),
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1, r.empId, r.localName, r.addressTypeName, r.effectiveStartDate, r.addressContent, r.nationalityName,
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSach');
    XLSX.writeFile(workbook, 'address_info_list.xlsx');
  }

  private formatYmd(d: Date | null): string | null {
    return d ? formatDate(d, 'yyyy-MM-dd', 'vi') : null;
  }
}
