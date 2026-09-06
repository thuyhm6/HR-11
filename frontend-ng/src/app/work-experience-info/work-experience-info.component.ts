import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { EmployeeOption, HrWorkExperienceDto, WorkExperienceSavePayload } from './work-experience-info.model';
import { WorkExperienceInfoService } from './work-experience-info.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'common.stt', 'common.empId', 'common.empName', 'common.action', 'common.addNew', 'common.edit',
  'common.delete', 'common.save', 'common.close', 'common.confirm', 'common.cancel',
  'common.saveSuccess', 'common.saveFail', 'common.deleteSuccess', 'common.deleteFail',
  'common.loadFail', 'common.noData', 'common.totalRows', 'common.placeholder.enterEmpId', 'common.placeholder.enterEmpName',
  'essDept.search', 'essDept.clearFilter', 'essDept.exportExcel',
  'hrm.empinfo.workexp.addTitle', 'hrm.empinfo.workexp.editTitle', 'hrm.empinfo.workexp.employee',
  'hrm.empinfo.workexp.companyName', 'hrm.empinfo.workexp.deptName', 'hrm.empinfo.workexp.position',
  'hrm.empinfo.workexp.startDate', 'hrm.empinfo.workexp.endDate', 'hrm.empinfo.workexp.duty',
  'hrm.empinfo.workexp.payYear', 'hrm.empinfo.workexp.resignReason', 'hrm.empinfo.workexp.remark',
  'hrm.empinfo.workexp.searchCompany', 'hrm.empinfo.workexp.selectEmp',
  'hrm.empinfo.workexp.pleaseSelectAndCompany', 'hrm.empinfo.workexp.confirmDelete',
  'hrm.empinfo.workexp.colCompany', 'hrm.empinfo.workexp.colDept', 'hrm.empinfo.workexp.colPosition',
  'hrm.empinfo.workexp.colFrom', 'hrm.empinfo.workexp.colTo', 'hrm.empinfo.workexp.colDuty',
  'hrm.empinfo.workexp.colResignReason', 'hrm.empinfo.workexp.colSalary', 'hrm.empinfo.workexp.colRemark',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200];

interface WorkExpForm {
  workExpNo: number | null;
  personId: string;
  empId: string;
  localName: string;
  cpnyName: string;
  deptName: string;
  position: string;
  startDate: string;
  endDate: string;
  duty: string;
  payYear: string;
  resignReason: string;
  remark: string;
}

const EMPTY_FORM: WorkExpForm = {
  workExpNo: null, personId: '', empId: '', localName: '', cpnyName: '', deptName: '',
  position: '', startDate: '', endDate: '', duty: '', payYear: '', resignReason: '', remark: '',
};

/**
 * Bản Angular của hrm/empinfo/viewWorkInformation.html (Thymeleaf + jQuery DataTables) - quản lý kinh
 * nghiệm làm việc trước đây của nhân viên (bảng hr_work_experience). Gọi lại nguyên API JSON đã có sẵn
 * ở HrEmpinfoController (xem WorkExperienceInfoService) - không đổi backend. Dùng nz-table (phân trang
 * client-side, đúng hành vi DataTables gốc: BE trả toàn bộ danh sách theo bộ lọc, không phân trang
 * server) thay cho jQuery DataTables; nz-modal thay modal Bootstrap; nz-autocomplete thay cho
 * EmployeeSearchModal jQuery toàn cục (giống OtApplyBatchInfoComponent/ViewTempEmpInfoListComponent).
 * Xuất excel làm client-side (không có endpoint export riêng ở backend - bản gốc cũng xuất client-side
 * qua DataTables Buttons).
 *
 * Chỉ cho đổi nhân viên khi THÊM MỚI: mapper update() không cập nhật PERSON_ID (xem
 * HrWorkExperienceMapper.xml) nên khi sửa, đổi nhân viên trên form không có tác dụng ở backend - hiển
 * thị readonly để tránh gây hiểu nhầm (giống quy ước ở ViewTempEmpInfoListComponent).
 */
@Component({
  selector: 'app-work-experience-info',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzButtonModule,
    NzModalModule,
    NzAlertModule,
    NzAutocompleteModule,
    TranslatePipe,
  ],
  templateUrl: './work-experience-info.component.html',
  styleUrl: './work-experience-info.component.css',
})
export class WorkExperienceInfoComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<HrWorkExperienceDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  searchEmpId = '';
  searchLocalName = '';
  searchCompanyName = '';

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew()
      ? this.i18n.t('hrm.empinfo.workexp.addTitle', 'Thêm mới Kinh nghiệm làm việc')
      : this.i18n.t('hrm.empinfo.workexp.editTitle', 'Cập nhật Kinh nghiệm làm việc'),
  );
  form: WorkExpForm = { ...EMPTY_FORM };

  empKeyword = '';
  readonly empOptions = signal<EmployeeOption[]>([]);
  private empSearchTimer?: ReturnType<typeof setTimeout>;

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private deleteTarget: HrWorkExperienceDto | null = null;

  constructor(
    private readonly api: WorkExperienceInfoService,
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
      .search({ empId: this.searchEmpId, localName: this.searchLocalName, companyName: this.searchCompanyName })
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
    this.searchCompanyName = '';
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

  openEditModal(row: HrWorkExperienceDto): void {
    this.isNew.set(false);
    this.form = {
      workExpNo: row.workExpNo,
      personId: row.personId,
      empId: row.empId || '',
      localName: row.localName || '',
      cpnyName: row.cpnyName || '',
      deptName: row.deptName || '',
      position: row.position || '',
      startDate: row.startDate || '',
      endDate: row.endDate || '',
      duty: row.duty || '',
      payYear: row.payYear || '',
      resignReason: row.resignReason || '',
      remark: row.remark || '',
    };
    this.modalVisible.set(true);
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  get employeeDisplay(): string {
    return this.form.empId || this.form.localName ? `${this.form.empId} - ${this.form.localName}` : '';
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
    if (!this.form.personId || !this.form.cpnyName) {
      this.message.warning(
        this.i18n.t('hrm.empinfo.workexp.pleaseSelectAndCompany', 'Vui lòng chọn Nhân viên và nhập Tên công ty'),
      );
      return;
    }
    const payload: WorkExperienceSavePayload = {
      workExpNo: this.form.workExpNo,
      personId: this.form.personId,
      cpnyName: this.form.cpnyName,
      deptName: this.form.deptName,
      position: this.form.position,
      startDate: this.form.startDate,
      endDate: this.form.endDate,
      duty: this.form.duty,
      payYear: this.form.payYear,
      resignReason: this.form.resignReason,
      remark: this.form.remark,
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

  openDeleteConfirm(row: HrWorkExperienceDto): void {
    this.deleteTarget = row;
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get deleteTargetName(): string {
    return this.deleteTarget ? `${this.deleteTarget.empId} - ${this.deleteTarget.localName} (${this.deleteTarget.cpnyName})` : '';
  }

  confirmDelete(): void {
    if (!this.deleteTarget?.workExpNo) return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.workExpNo).subscribe({
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
      this.i18n.t('common.empId', 'Mã nhân viên'),
      this.i18n.t('common.empName', 'Họ tên'),
      this.i18n.t('hrm.empinfo.workexp.colCompany', 'Công ty'),
      this.i18n.t('hrm.empinfo.workexp.colDept', 'Bộ phận'),
      this.i18n.t('hrm.empinfo.workexp.colPosition', 'Vị trí'),
      this.i18n.t('hrm.empinfo.workexp.colFrom', 'Từ ngày'),
      this.i18n.t('hrm.empinfo.workexp.colTo', 'Đến ngày'),
      this.i18n.t('hrm.empinfo.workexp.colDuty', 'Nhiệm vụ'),
      this.i18n.t('hrm.empinfo.workexp.colResignReason', 'Lý do nghỉ'),
      this.i18n.t('hrm.empinfo.workexp.colSalary', 'Mức lương'),
      this.i18n.t('hrm.empinfo.workexp.colRemark', 'Ghi chú'),
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1, r.empId, r.localName, r.cpnyName, r.deptName, r.position,
      r.startDate, r.endDate, r.duty, r.resignReason, r.payYear, r.remark,
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSach');
    XLSX.writeFile(workbook, 'work_experience_info_list.xlsx');
  }
}
