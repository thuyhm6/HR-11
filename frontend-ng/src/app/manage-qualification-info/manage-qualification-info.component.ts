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
import { EmployeeOption, HrQualificationDto, QualificationSavePayload } from './manage-qualification-info.model';
import { ManageQualificationInfoService } from './manage-qualification-info.service';

/** Các key message.properties dùng trong trang này - hrm.empinfo.qual.* đã có sẵn từ trước (dành riêng
 *  cho trang này), cộng các key chung, tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'common.stt', 'common.empId', 'common.empName', 'common.action', 'common.addNew', 'common.edit',
  'common.delete', 'common.save', 'common.close', 'common.confirm', 'common.cancel', 'common.yes', 'common.no',
  'common.saveSuccess', 'common.saveFail', 'common.deleteSuccess', 'common.deleteFail',
  'common.loadFail', 'common.noData', 'common.totalRows', 'common.placeholder.enterEmpId', 'common.placeholder.enterEmpName',
  'essDept.search', 'essDept.clearFilter', 'essDept.exportExcel', 'hrm.empinfo.workexp.selectEmp',
  'hrm.empinfo.qual.title', 'hrm.empinfo.qual.addTitle', 'hrm.empinfo.qual.editTitle', 'hrm.empinfo.qual.employee',
  'hrm.empinfo.qual.qualName', 'hrm.empinfo.qual.dateObtained', 'hrm.empinfo.qual.qualCardNo',
  'hrm.empinfo.qual.qualInstitute', 'hrm.empinfo.qual.validityDate', 'hrm.empinfo.qual.qualLevel',
  'hrm.empinfo.qual.qualGrade', 'hrm.empinfo.qual.acquisitionModes', 'hrm.empinfo.qual.paymentAllowanceYN',
  'hrm.empinfo.qual.qualSubmitDate', 'hrm.empinfo.qual.qualRemark', 'hrm.empinfo.qual.searchQualName',
  'hrm.empinfo.qual.pleaseSelectAndName', 'hrm.empinfo.qual.confirmDelete', 'hrm.empinfo.qual.colCertName',
  'hrm.empinfo.qual.colSerialNo', 'hrm.empinfo.qual.colIssuer', 'hrm.empinfo.qual.colExpiry', 'hrm.empinfo.qual.colGrade',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200];

interface QualificationForm {
  qualNo: number | null;
  personId: string;
  empId: string;
  localName: string;
  deptName: string;
  qualName: string;
  dateObtained: Date | null;
  qualCardNo: string;
  qualInstitute: string;
  validityDate: Date | null;
  qualLevel: string;
  qualGrade: string;
  acquisitionModes: string;
  paymentAllowanceYN: string;
  qualSubmitDate: string;
  qualRemark: string;
}

const EMPTY_FORM: QualificationForm = {
  qualNo: null, personId: '', empId: '', localName: '', deptName: '', qualName: '', dateObtained: null,
  qualCardNo: '', qualInstitute: '', validityDate: null, qualLevel: '', qualGrade: '', acquisitionModes: '',
  paymentAllowanceYN: 'N', qualSubmitDate: '', qualRemark: '',
};

/**
 * Bản Angular của hrm/empinfo/viewQualification.html (Thymeleaf + jQuery DataTables) - quản lý chứng
 * chỉ của nhân viên (bảng HR_QUALIFICATION). Gọi lại nguyên API JSON đã có sẵn ở HrEmpinfoController
 * (xem ManageQualificationInfoService) - không đổi backend. Dùng nz-table (phân trang client-side,
 * đúng hành vi DataTables gốc: BE trả toàn bộ danh sách theo bộ lọc, không phân trang server) thay cho
 * jQuery DataTables; nz-modal thay modal Bootstrap; nz-autocomplete thay cho EmployeeSearchModal jQuery
 * toàn cục (giống PunishmentInfoComponent/FamilyInfoComponent). dateObtained/validityDate là LocalDate
 * nên dùng nz-date-picker; qualSubmitDate là cột VARCHAR lưu chuỗi thô YYYYMMDD (không phải LocalDate,
 * xem HrQualification.java) nên giữ nguyên input text như bản gốc để không đổi định dạng dữ liệu đã
 * lưu. Route đặt tên 'manage-qualification-info' (khác 'qualification-info' - route đó đã dùng cho
 * trang ESS tự khai báo chứng chỉ của nhân viên, khác bảng/khác luồng). Bản gốc chưa làm xuất Excel
 * (chỉ có nút export DataTables phía client) - nay làm bằng thư viện xlsx (SheetJS) theo đúng quy ước
 * xuất .xlsx của các trang khác (xem CLAUDE.md), giống PunishmentInfoComponent.
 */
@Component({
  selector: 'app-manage-qualification-info',
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
  templateUrl: './manage-qualification-info.component.html',
  styleUrl: './manage-qualification-info.component.css',
})
export class ManageQualificationInfoComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<HrQualificationDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  searchEmpId = '';
  searchLocalName = '';
  searchQualName = '';

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew()
      ? this.i18n.t('hrm.empinfo.qual.addTitle', 'Thêm mới Chứng chỉ')
      : this.i18n.t('hrm.empinfo.qual.editTitle', 'Cập nhật Chứng chỉ'),
  );
  form: QualificationForm = { ...EMPTY_FORM };

  empKeyword = '';
  readonly empOptions = signal<EmployeeOption[]>([]);
  private empSearchTimer?: ReturnType<typeof setTimeout>;

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private deleteTarget: HrQualificationDto | null = null;

  constructor(
    private readonly api: ManageQualificationInfoService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.search();
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api
      .search({ empId: this.searchEmpId, localName: this.searchLocalName, qualName: this.searchQualName })
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
    this.searchQualName = '';
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

  openEditModal(row: HrQualificationDto): void {
    this.isNew.set(false);
    this.form = {
      qualNo: row.qualNo,
      personId: row.personId,
      empId: row.empId || '',
      localName: row.localName || '',
      deptName: row.deptName || '',
      qualName: row.qualName || '',
      dateObtained: row.dateObtained ? new Date(row.dateObtained) : null,
      qualCardNo: row.qualCardNo || '',
      qualInstitute: row.qualInstitute || '',
      validityDate: row.validityDate ? new Date(row.validityDate) : null,
      qualLevel: row.qualLevel || '',
      qualGrade: row.qualGrade || '',
      acquisitionModes: row.acquisitionModes || '',
      paymentAllowanceYN: row.paymentAllowanceYN || 'N',
      qualSubmitDate: row.qualSubmitDate || '',
      qualRemark: row.qualRemark || '',
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
    this.form.deptName = option.deptName;
    this.empKeyword = `${option.empId} - ${option.localName}`;
    this.empOptions.set([]);
  }

  saveForm(): void {
    if (!this.form.personId || !this.form.qualName.trim()) {
      this.message.warning(this.i18n.t('hrm.empinfo.qual.pleaseSelectAndName', 'Vui lòng chọn Nhân viên và nhập Tên chứng chỉ'));
      return;
    }
    const payload: QualificationSavePayload = {
      qualNo: this.form.qualNo,
      personId: this.form.personId,
      qualName: this.form.qualName,
      dateObtained: this.formatYmd(this.form.dateObtained),
      qualCardNo: this.form.qualCardNo,
      qualInstitute: this.form.qualInstitute,
      validityDate: this.formatYmd(this.form.validityDate),
      qualLevel: this.form.qualLevel,
      qualGrade: this.form.qualGrade,
      acquisitionModes: this.form.acquisitionModes,
      paymentAllowanceYN: this.form.paymentAllowanceYN,
      qualSubmitDate: this.form.qualSubmitDate,
      qualRemark: this.form.qualRemark,
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

  openDeleteConfirm(row: HrQualificationDto): void {
    this.deleteTarget = row;
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get deleteTargetName(): string {
    return this.deleteTarget ? `${this.deleteTarget.empId} - ${this.deleteTarget.localName} (${this.deleteTarget.qualName})` : '';
  }

  confirmDelete(): void {
    if (!this.deleteTarget?.qualNo) return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.qualNo).subscribe({
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

  /** Xuất excel client-side (bản gốc chỉ có nút export của DataTables) - dùng thư viện xlsx (SheetJS)
   *  để tạo đúng file .xlsx nhị phân (xem CLAUDE.md). */
  exportExcel(): void {
    const headers = [
      this.i18n.t('common.stt', 'STT'),
      this.i18n.t('common.empId', 'Mã NV'),
      this.i18n.t('common.empName', 'Họ tên'),
      this.i18n.t('hrm.empinfo.qual.colCertName', 'Tên chứng chỉ'),
      this.i18n.t('hrm.empinfo.qual.dateObtained', 'Ngày nhận'),
      this.i18n.t('hrm.empinfo.qual.colSerialNo', 'Số hiệu'),
      this.i18n.t('hrm.empinfo.qual.colIssuer', 'Nơi cấp'),
      this.i18n.t('hrm.empinfo.qual.colExpiry', 'Ngày hết hạn'),
      this.i18n.t('hrm.empinfo.qual.colGrade', 'Xếp loại'),
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1, r.empId, r.localName, r.qualName, r.dateObtained, r.qualCardNo, r.qualInstitute,
      r.validityDate, r.qualGrade,
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSach');
    XLSX.writeFile(workbook, 'qualification_info_list.xlsx');
  }

  private formatYmd(d: Date | null): string | null {
    return d ? formatDate(d, 'yyyy-MM-dd', 'vi') : null;
  }
}
