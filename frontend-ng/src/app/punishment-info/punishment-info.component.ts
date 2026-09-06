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
import { EmployeeOption, HrPunishmentDto, PunishmentSavePayload } from './punishment-info.model';
import { PunishmentInfoService } from './punishment-info.service';

/** Các key message.properties dùng trong trang này - đều đã có sẵn (hrm.empinfo.punish.* dành riêng
 *  cho trang này, cộng các key chung), tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'common.stt', 'common.empId', 'common.empName', 'common.deptName', 'common.action', 'common.addNew', 'common.edit',
  'common.delete', 'common.save', 'common.close', 'common.confirm', 'common.cancel', 'common.yes', 'common.no',
  'common.saveSuccess', 'common.saveFail', 'common.deleteSuccess', 'common.deleteFail',
  'common.loadFail', 'common.noData', 'common.totalRows', 'common.placeholder.enterEmpId', 'common.placeholder.enterEmpName',
  'essDept.search', 'essDept.clearFilter', 'essDept.exportExcel', 'hrm.empinfo.workexp.selectEmp',
  'hrm.empinfo.punish.addTitle', 'hrm.empinfo.punish.editTitle', 'hrm.empinfo.punish.employee',
  'hrm.empinfo.punish.punishCode', 'hrm.empinfo.punish.punishCodeLabel', 'hrm.empinfo.punish.punishDate',
  'hrm.empinfo.punish.punishReason', 'hrm.empinfo.punish.releaseDate', 'hrm.empinfo.punish.punishDept',
  'hrm.empinfo.punish.punishScore', 'hrm.empinfo.punish.faultTypeCode', 'hrm.empinfo.punish.paycutStartDate',
  'hrm.empinfo.punish.paycutEndDate', 'hrm.empinfo.punish.personnelCardInquiry', 'hrm.empinfo.punish.remarks',
  'hrm.empinfo.punish.searchCode', 'hrm.empinfo.punish.colPunishCode', 'hrm.empinfo.punish.colPunishDate',
  'hrm.empinfo.punish.colReason', 'hrm.empinfo.punish.colDept', 'hrm.empinfo.punish.colScore',
  'hrm.empinfo.punish.pleaseSelectEmp', 'hrm.empinfo.punish.confirmDelete',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200];

interface PunishmentForm {
  punishNo: number | null;
  personId: string;
  empId: string;
  localName: string;
  deptName: string;
  punishDate: Date | null;
  punishCode: string;
  punishReason: string;
  releaseDate: Date | null;
  punishDepartment: string;
  punishScore: string;
  paycutStartDate: Date | null;
  paycutEndDate: Date | null;
  personnelCardInquiry: string;
  faultTypeCode: string;
  remarks: string;
}

const EMPTY_FORM: PunishmentForm = {
  punishNo: null, personId: '', empId: '', localName: '', deptName: '', punishDate: null,
  punishCode: '', punishReason: '', releaseDate: null, punishDepartment: '', punishScore: '',
  paycutStartDate: null, paycutEndDate: null, personnelCardInquiry: 'N', faultTypeCode: '', remarks: '',
};

/**
 * Bản Angular của hrm/empinfo/punishmentSearch.html (Thymeleaf + jQuery DataTables) - quản lý kỷ luật
 * của nhân viên (bảng hr_punishment). Gọi lại nguyên API JSON đã có sẵn ở HrEmpinfoController (xem
 * PunishmentInfoService) - không đổi backend. Dùng nz-table (phân trang client-side, đúng hành vi
 * DataTables gốc: BE trả toàn bộ danh sách theo bộ lọc, không phân trang server, tham khảo
 * ManageEmpPositionInfoComponent) thay cho jQuery DataTables; nz-modal thay modal Bootstrap;
 * nz-autocomplete thay cho EmployeeSearchModal jQuery toàn cục (giống RecognitionInfoComponent và các
 * trang empinfo khác đã migrate) - mapper update() có cập nhật PERSON_ID nên form cho đổi nhân viên cả
 * khi sửa. Không có field nào được BE resolve tên qua GET_GLOBAL_NAME (xem HrPunishmentMapper.xml) nên
 * giữ nguyên text input như bản gốc, không đổi sang nz-select. Toàn bộ 4 field ngày là LocalDate nên
 * dùng nz-date-picker. Bản gốc chưa làm xuất Excel (nút "Xuất Excel" chỉ alert "đang phát triển") - nay
 * làm luôn client-side bằng xlsx (SheetJS) theo đúng quy ước xuất .xlsx của các trang khác (xem
 * CLAUDE.md), giống RecognitionInfoComponent.
 */
@Component({
  selector: 'app-punishment-info',
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
  templateUrl: './punishment-info.component.html',
  styleUrl: './punishment-info.component.css',
})
export class PunishmentInfoComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<HrPunishmentDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  searchEmpId = '';
  searchLocalName = '';
  searchPunishCode = '';

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew()
      ? this.i18n.t('hrm.empinfo.punish.addTitle', 'Thêm mới kỷ luật')
      : this.i18n.t('hrm.empinfo.punish.editTitle', 'Cập nhật kỷ luật'),
  );
  form: PunishmentForm = { ...EMPTY_FORM };

  empKeyword = '';
  readonly empOptions = signal<EmployeeOption[]>([]);
  private empSearchTimer?: ReturnType<typeof setTimeout>;

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private deleteTarget: HrPunishmentDto | null = null;

  constructor(
    private readonly api: PunishmentInfoService,
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
      .search({ empId: this.searchEmpId, localName: this.searchLocalName, punishCode: this.searchPunishCode })
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
    this.searchPunishCode = '';
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

  openEditModal(row: HrPunishmentDto): void {
    this.isNew.set(false);
    this.form = {
      punishNo: row.punishNo,
      personId: row.personId,
      empId: row.empId || '',
      localName: row.localName || '',
      deptName: row.deptName || '',
      punishDate: row.punishDate ? new Date(row.punishDate) : null,
      punishCode: row.punishCode || '',
      punishReason: row.punishReason || '',
      releaseDate: row.releaseDate ? new Date(row.releaseDate) : null,
      punishDepartment: row.punishDepartment || '',
      punishScore: row.punishScore || '',
      paycutStartDate: row.paycutStartDate ? new Date(row.paycutStartDate) : null,
      paycutEndDate: row.paycutEndDate ? new Date(row.paycutEndDate) : null,
      personnelCardInquiry: row.personnelCardInquiry || 'N',
      faultTypeCode: row.faultTypeCode || '',
      remarks: row.remarks || '',
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
    if (!this.form.personId) {
      this.message.warning(this.i18n.t('hrm.empinfo.punish.pleaseSelectEmp', 'Vui lòng chọn nhân viên'));
      return;
    }
    const payload: PunishmentSavePayload = {
      punishNo: this.form.punishNo,
      personId: this.form.personId,
      punishDate: this.formatYmd(this.form.punishDate),
      punishCode: this.form.punishCode,
      punishReason: this.form.punishReason,
      releaseDate: this.formatYmd(this.form.releaseDate),
      punishDepartment: this.form.punishDepartment,
      punishScore: this.form.punishScore,
      paycutStartDate: this.formatYmd(this.form.paycutStartDate),
      paycutEndDate: this.formatYmd(this.form.paycutEndDate),
      personnelCardInquiry: this.form.personnelCardInquiry,
      faultTypeCode: this.form.faultTypeCode,
      remarks: this.form.remarks,
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

  openDeleteConfirm(row: HrPunishmentDto): void {
    this.deleteTarget = row;
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get deleteTargetName(): string {
    return this.deleteTarget ? `${this.deleteTarget.empId} - ${this.deleteTarget.localName} (${this.deleteTarget.punishCode})` : '';
  }

  confirmDelete(): void {
    if (!this.deleteTarget?.punishNo) return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.punishNo).subscribe({
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

  /** Xuất excel client-side (bản gốc chưa làm - nút chỉ alert "đang phát triển") - dùng thư viện xlsx
   *  (SheetJS) để tạo đúng file .xlsx nhị phân (xem CLAUDE.md). */
  exportExcel(): void {
    const headers = [
      this.i18n.t('common.stt', 'STT'),
      this.i18n.t('common.empId', 'Mã NV'),
      this.i18n.t('common.empName', 'Họ tên'),
      this.i18n.t('common.deptName', 'Phòng ban'),
      this.i18n.t('hrm.empinfo.punish.colPunishCode', 'Loại KL'),
      this.i18n.t('hrm.empinfo.punish.colPunishDate', 'Ngày KL'),
      this.i18n.t('hrm.empinfo.punish.colReason', 'Lý do'),
      this.i18n.t('hrm.empinfo.punish.colDept', 'Bộ phận KL'),
      this.i18n.t('hrm.empinfo.punish.colScore', 'Điểm'),
      this.i18n.t('hrm.empinfo.punish.remarks', 'Ghi chú'),
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1, r.empId, r.localName, r.deptName, r.punishCode, r.punishDate, r.punishReason,
      r.punishDepartment, r.punishScore, r.remarks,
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSach');
    XLSX.writeFile(workbook, 'punishment_info_list.xlsx');
  }

  private formatYmd(d: Date | null): string | null {
    return d ? formatDate(d, 'yyyy-MM-dd', 'vi') : null;
  }
}
