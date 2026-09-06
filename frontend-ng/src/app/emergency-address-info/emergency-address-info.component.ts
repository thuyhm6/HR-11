import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import {
  CodeItem,
  EmergencyAddressSavePayload,
  EmployeeOption,
  HrEmergencyAddressDto,
} from './emergency-address-info.model';
import { EmergencyAddressInfoService } from './emergency-address-info.service';

/** Các key message.properties dùng trong trang này - đều đã có sẵn (từ trang ESS liên hệ khẩn cấp và
 *  các trang tra cứu tương tự), tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'common.stt', 'common.empId', 'common.empName', 'common.action', 'common.addNew', 'common.edit',
  'common.delete', 'common.save', 'common.close', 'common.confirm', 'common.cancel', 'common.yes', 'common.no',
  'common.saveSuccess', 'common.saveFail', 'common.deleteSuccess', 'common.deleteFail',
  'common.loadFail', 'common.noData', 'common.totalRows', 'common.placeholder.enterEmpId', 'common.placeholder.enterEmpName',
  'common.selectAll', 'essDept.search', 'essDept.clearFilter', 'essDept.exportExcel',
  'hrm.empinfo.workexp.selectEmp',
  'hrm.empinfo.emer.addTitle', 'hrm.empinfo.emer.editTitle', 'hrm.empinfo.emer.employee',
  'hrm.empinfo.emer.emerName', 'hrm.empinfo.emer.emerType', 'hrm.empinfo.emer.emerPhone',
  'hrm.empinfo.emer.emerCellphone', 'hrm.empinfo.emer.emerWorkPhone', 'hrm.empinfo.emer.emerPhoneSecond',
  'hrm.empinfo.emer.emerEmail', 'hrm.empinfo.emer.emerAddress', 'hrm.empinfo.emer.nationality',
  'hrm.empinfo.emer.mainContactAddress', 'hrm.empinfo.emer.mainLiaisonOffice', 'hrm.empinfo.emer.isEmergencyAddress',
  'hrm.empinfo.emer.searchEmerName', 'hrm.empinfo.emer.colEmerName', 'hrm.empinfo.emer.colRelation',
  'hrm.empinfo.emer.colPhone', 'hrm.empinfo.emer.colMobile', 'hrm.empinfo.emer.colEmail',
  'hrm.empinfo.emer.colAddress', 'hrm.empinfo.emer.colNationality', 'hrm.empinfo.emer.pleaseSelect',
  'hrm.empinfo.emer.confirmDelete',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200];

/** parentCodeNo của bảng SY_CODE cho quan hệ người liên hệ khẩn cấp - dùng chung với PersonalInfoComponent (emerTypeOptions). */
const EMER_TYPE_PARENT_CODE = '1693';

interface EmergencyForm {
  emergencyNo: number | null;
  personId: string;
  empId: string;
  localName: string;
  emerName: string;
  emerTypeCode: string | null;
  emerPhone: string;
  emerCellphone: string;
  emerWorkPhone: string;
  emerPhoneSecond: string;
  emerEmail: string;
  emerAddress: string;
  nationality: string;
  mainContactAddress: string;
  mainLiaisonOffice: string;
  isEmergencyAddress: boolean;
}

const EMPTY_FORM: EmergencyForm = {
  emergencyNo: null, personId: '', empId: '', localName: '', emerName: '', emerTypeCode: null,
  emerPhone: '', emerCellphone: '', emerWorkPhone: '', emerPhoneSecond: '', emerEmail: '', emerAddress: '',
  nationality: '', mainContactAddress: '', mainLiaisonOffice: 'N', isEmergencyAddress: false,
};

/**
 * Bản Angular của hrm/empinfo/emergencyAddressSearch.html (Thymeleaf + jQuery DataTables) - quản lý
 * địa chỉ khẩn cấp của nhân viên (bảng hr_emergency_address). Gọi lại nguyên API JSON đã có sẵn ở
 * HrEmpinfoController (xem EmergencyAddressInfoService) - không đổi backend. Dùng nz-table (phân
 * trang client-side, đúng hành vi DataTables gốc: BE trả toàn bộ danh sách theo bộ lọc, không phân
 * trang server, tham khảo ManageEmpPositionInfoComponent) thay cho jQuery DataTables; nz-modal thay
 * modal Bootstrap; nz-autocomplete thay cho EmployeeSearchModal jQuery toàn cục (giống
 * WorkExperienceInfoComponent) - khác WorkExperienceInfo, mapper update() ở đây có cập nhật PERSON_ID
 * nên form cho đổi nhân viên cả khi sửa, không cần khóa readonly. nz-select cho Quan hệ (emerTypeCode)
 * dùng chung parentCodeNo '1693' mà PersonalInfoComponent (mục liên hệ khẩn cấp ESS) đang dùng - BE có
 * resolve tên qua GET_GLOBAL_NAME nên đây là field mã hóa, không phải free text như bản gốc. Xuất excel
 * làm client-side (không có endpoint export riêng ở backend - bản gốc cũng xuất client-side qua
 * DataTables Buttons).
 */
@Component({
  selector: 'app-emergency-address-info',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzSelectModule,
    NzCheckboxModule,
    NzButtonModule,
    NzModalModule,
    NzAlertModule,
    NzAutocompleteModule,
    TranslatePipe,
  ],
  templateUrl: './emergency-address-info.component.html',
  styleUrl: './emergency-address-info.component.css',
})
export class EmergencyAddressInfoComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<HrEmergencyAddressDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  readonly emerTypeOptions = signal<CodeItem[]>([]);

  searchEmpId = '';
  searchLocalName = '';
  searchEmerName = '';

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew()
      ? this.i18n.t('hrm.empinfo.emer.addTitle', 'Thêm mới ĐC Khẩn cấp')
      : this.i18n.t('hrm.empinfo.emer.editTitle', 'Cập nhật ĐC Khẩn cấp'),
  );
  form: EmergencyForm = { ...EMPTY_FORM };

  empKeyword = '';
  readonly empOptions = signal<EmployeeOption[]>([]);
  private empSearchTimer?: ReturnType<typeof setTimeout>;

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private deleteTarget: HrEmergencyAddressDto | null = null;

  constructor(
    private readonly api: EmergencyAddressInfoService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getCodeList(EMER_TYPE_PARENT_CODE).subscribe((list) => this.emerTypeOptions.set(list ?? []));
    this.search();
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api
      .search({ empId: this.searchEmpId, localName: this.searchLocalName, emerName: this.searchEmerName })
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
    this.searchEmerName = '';
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

  openEditModal(row: HrEmergencyAddressDto): void {
    this.isNew.set(false);
    this.form = {
      emergencyNo: row.emergencyNo,
      personId: row.personId,
      empId: row.empId || '',
      localName: row.localName || '',
      emerName: row.emerName || '',
      emerTypeCode: row.emerTypeCode || null,
      emerPhone: row.emerPhone || '',
      emerCellphone: row.emerCellphone || '',
      emerWorkPhone: row.emerWorkPhone || '',
      emerPhoneSecond: row.emerPhoneSecond || '',
      emerEmail: row.emerEmail || '',
      emerAddress: row.emerAddress || '',
      nationality: row.nationality || '',
      mainContactAddress: row.mainContactAddress || '',
      mainLiaisonOffice: row.mainLiaisonOffice || 'N',
      isEmergencyAddress: this.toBool(row.isEmergencyAddress),
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
    if (!this.form.personId || !this.form.emerName) {
      this.message.warning(this.i18n.t('hrm.empinfo.emer.pleaseSelect', 'Vui lòng điền đủ: Nhân viên, Tên người liên hệ'));
      return;
    }
    const payload: EmergencyAddressSavePayload = {
      emergencyNo: this.form.emergencyNo,
      personId: this.form.personId,
      emerName: this.form.emerName,
      emerTypeCode: this.form.emerTypeCode ?? '',
      emerPhone: this.form.emerPhone,
      emerCellphone: this.form.emerCellphone,
      emerWorkPhone: this.form.emerWorkPhone,
      emerPhoneSecond: this.form.emerPhoneSecond,
      emerEmail: this.form.emerEmail,
      emerAddress: this.form.emerAddress,
      nationality: this.form.nationality,
      mainContactAddress: this.form.mainContactAddress,
      mainLiaisonOffice: this.form.mainLiaisonOffice,
      isEmergencyAddress: this.form.isEmergencyAddress ? '1' : '0',
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

  openDeleteConfirm(row: HrEmergencyAddressDto): void {
    this.deleteTarget = row;
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get deleteTargetName(): string {
    return this.deleteTarget ? `${this.deleteTarget.empId} - ${this.deleteTarget.localName} (${this.deleteTarget.emerName})` : '';
  }

  confirmDelete(): void {
    if (!this.deleteTarget?.emergencyNo) return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.emergencyNo).subscribe({
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
      this.i18n.t('hrm.empinfo.emer.colEmerName', 'Tên người liên hệ'),
      this.i18n.t('hrm.empinfo.emer.colRelation', 'Quan hệ'),
      this.i18n.t('hrm.empinfo.emer.colPhone', 'SĐT'),
      this.i18n.t('hrm.empinfo.emer.colMobile', 'Di động'),
      this.i18n.t('hrm.empinfo.emer.colEmail', 'Email'),
      this.i18n.t('hrm.empinfo.emer.colAddress', 'Địa chỉ'),
      this.i18n.t('hrm.empinfo.emer.colNationality', 'Quốc gia'),
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1, r.empId, r.localName, r.emerName, r.emerTypeName, r.emerPhone,
      r.emerCellphone, r.emerEmail, r.emerAddress, r.nationality,
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSach');
    XLSX.writeFile(workbook, 'emergency_address_info_list.xlsx');
  }

  private toBool(v: string | null | undefined): boolean {
    return v === '1' || v === 'Y' || v === 'true';
  }
}
