import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
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
  EducationSavePayload,
  EmployeeOption,
  HrEducationDto,
} from './education-info.model';
import { EducationInfoService } from './education-info.service';

/** Các key message.properties dùng trong trang này - đều đã có sẵn (hrm.empinfo.educ.* dành riêng cho
 *  trang này, cộng các key chung), tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'common.stt', 'common.empId', 'common.empName', 'common.action', 'common.addNew', 'common.edit',
  'common.delete', 'common.save', 'common.close', 'common.confirm', 'common.cancel', 'common.yes', 'common.no',
  'common.saveSuccess', 'common.saveFail', 'common.deleteSuccess', 'common.deleteFail',
  'common.loadFail', 'common.noData', 'common.totalRows', 'common.placeholder.enterEmpId', 'common.placeholder.enterEmpName',
  'common.selectAll', 'essDept.search', 'essDept.clearFilter', 'essDept.exportExcel',
  'hrm.empinfo.workexp.selectEmp',
  'hrm.empinfo.educ.addTitle', 'hrm.empinfo.educ.editTitle', 'hrm.empinfo.educ.employee',
  'hrm.empinfo.educ.institutionName', 'hrm.empinfo.educ.degreeCode', 'hrm.empinfo.educ.subject',
  'hrm.empinfo.educ.startDate', 'hrm.empinfo.educ.endDate', 'hrm.empinfo.educ.schoolLength',
  'hrm.empinfo.educ.siteCountry', 'hrm.empinfo.educ.place', 'hrm.empinfo.educ.thesisNameLocal',
  'hrm.empinfo.educ.thesisNameEng', 'hrm.empinfo.educ.subjectSecond', 'hrm.empinfo.educ.eduDegNum',
  'hrm.empinfo.educ.degreesCode', 'hrm.empinfo.educ.studyExperience', 'hrm.empinfo.educ.finalDegreeWhether',
  'hrm.empinfo.educ.remark', 'hrm.empinfo.educ.searchInstitution', 'hrm.empinfo.educ.colInstitution',
  'hrm.empinfo.educ.colDegree', 'hrm.empinfo.educ.colSubject', 'hrm.empinfo.educ.colFrom',
  'hrm.empinfo.educ.colTo', 'hrm.empinfo.educ.colLength', 'hrm.empinfo.educ.colCountry',
  'hrm.empinfo.educ.colRemark', 'hrm.empinfo.educ.pleaseSelect', 'hrm.empinfo.educ.confirmDelete',
];

const PAGE_SIZE_OPTIONS = [25, 50, 100, 200];

/** parentCodeNo của bảng SY_CODE - dùng chung với PersonalInfoComponent (finalDegreeOptions/nationalityOptions). */
const DEGREE_PARENT_CODE = '13769';
const SITE_COUNTRY_PARENT_CODE = '870';

interface EducationForm {
  educNo: number | null;
  personId: string;
  empId: string;
  localName: string;
  institutionName: string;
  degreeCode: string | null;
  subject: string;
  startDate: string;
  endDate: string;
  schoolLength: string;
  siteCountry: string | null;
  place: string;
  thesisNameLocal: string;
  thesisNameEng: string;
  subjectSecond: string;
  eduDegNum: string;
  degreesCode: string;
  studyExperience: string;
  finalDegreeWhether: string;
  remark: string;
}

const EMPTY_FORM: EducationForm = {
  educNo: null, personId: '', empId: '', localName: '', institutionName: '', degreeCode: null,
  subject: '', startDate: '', endDate: '', schoolLength: '', siteCountry: null, place: '',
  thesisNameLocal: '', thesisNameEng: '', subjectSecond: '', eduDegNum: '', degreesCode: '',
  studyExperience: 'N', finalDegreeWhether: 'N', remark: '',
};

/**
 * Bản Angular của hrm/empinfo/educationSearch.html (Thymeleaf + jQuery DataTables) - quản lý quá trình
 * học tập của nhân viên (bảng hr_education). Gọi lại nguyên API JSON đã có sẵn ở HrEmpinfoController
 * (xem EducationInfoService) - không đổi backend. Dùng nz-table (phân trang client-side, đúng hành vi
 * DataTables gốc: BE trả toàn bộ danh sách theo bộ lọc, không phân trang server, tham khảo
 * ManageEmpPositionInfoComponent) thay cho jQuery DataTables; nz-modal thay modal Bootstrap;
 * nz-autocomplete thay cho EmployeeSearchModal jQuery toàn cục (giống các trang empinfo khác đã
 * migrate) - mapper update() có cập nhật PERSON_ID nên form cho đổi nhân viên cả khi sửa. nz-select cho
 * Bằng cấp (degreeCode, parentCodeNo '13769') và Quốc gia (siteCountry, parentCodeNo '870') dùng chung
 * 2 code list mà PersonalInfoComponent (finalDegreeOptions/nationalityOptions) đang dùng - BE có
 * resolve tên qua GET_GLOBAL_NAME cho cả 2 field này. Giữ nguyên startDate/endDate dạng text
 * "YYYYMMDD" như bản gốc (cột kiểu String, không phải LocalDate - giống WorkExperienceInfoComponent).
 * Xuất excel làm client-side (không có endpoint export riêng ở backend - bản gốc cũng xuất client-side
 * qua DataTables Buttons).
 */
@Component({
  selector: 'app-education-info',
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
    NzAlertModule,
    NzAutocompleteModule,
    TranslatePipe,
  ],
  templateUrl: './education-info.component.html',
  styleUrl: './education-info.component.css',
})
export class EducationInfoComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  readonly rows = signal<HrEducationDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  readonly degreeOptions = signal<CodeItem[]>([]);
  readonly siteCountryOptions = signal<CodeItem[]>([]);

  searchEmpId = '';
  searchLocalName = '';
  searchInstitutionName = '';

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() =>
    this.isNew()
      ? this.i18n.t('hrm.empinfo.educ.addTitle', 'Thêm mới Quá trình học tập')
      : this.i18n.t('hrm.empinfo.educ.editTitle', 'Cập nhật Quá trình học tập'),
  );
  form: EducationForm = { ...EMPTY_FORM };

  empKeyword = '';
  readonly empOptions = signal<EmployeeOption[]>([]);
  private empSearchTimer?: ReturnType<typeof setTimeout>;

  readonly deleteVisible = signal(false);
  readonly deleting = signal(false);
  private deleteTarget: HrEducationDto | null = null;

  constructor(
    private readonly api: EducationInfoService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getCodeList(DEGREE_PARENT_CODE).subscribe((list) => this.degreeOptions.set(list ?? []));
    this.api.getCodeList(SITE_COUNTRY_PARENT_CODE).subscribe((list) => this.siteCountryOptions.set(list ?? []));
    this.search();
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api
      .search({ empId: this.searchEmpId, localName: this.searchLocalName, institutionName: this.searchInstitutionName })
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
    this.searchInstitutionName = '';
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

  openEditModal(row: HrEducationDto): void {
    this.isNew.set(false);
    this.form = {
      educNo: row.educNo,
      personId: row.personId,
      empId: row.empId || '',
      localName: row.localName || '',
      institutionName: row.institutionName || '',
      degreeCode: row.degreeCode || null,
      subject: row.subject || '',
      startDate: row.startDate || '',
      endDate: row.endDate || '',
      schoolLength: row.schoolLength || '',
      siteCountry: row.siteCountry || null,
      place: row.place || '',
      thesisNameLocal: row.thesisNameLocal || '',
      thesisNameEng: row.thesisNameEng || '',
      subjectSecond: row.subjectSecond || '',
      eduDegNum: row.eduDegNum || '',
      degreesCode: row.degreesCode || '',
      studyExperience: row.studyExperience || 'N',
      finalDegreeWhether: row.finalDegreeWhether || 'N',
      remark: row.remark || '',
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
    if (!this.form.personId || !this.form.institutionName) {
      this.message.warning(this.i18n.t('hrm.empinfo.educ.pleaseSelect', 'Vui lòng chọn Nhân viên và nhập Tên trường'));
      return;
    }
    const payload: EducationSavePayload = {
      educNo: this.form.educNo,
      personId: this.form.personId,
      degreeCode: this.form.degreeCode ?? '',
      finalDegreeWhether: this.form.finalDegreeWhether,
      degreesCode: this.form.degreesCode,
      institutionName: this.form.institutionName,
      subject: this.form.subject,
      startDate: this.form.startDate,
      endDate: this.form.endDate,
      schoolLength: this.form.schoolLength,
      thesisNameLocal: this.form.thesisNameLocal,
      thesisNameEng: this.form.thesisNameEng,
      subjectSecond: this.form.subjectSecond,
      eduDegNum: this.form.eduDegNum,
      siteCountry: this.form.siteCountry ?? '',
      remark: this.form.remark,
      place: this.form.place,
      studyExperience: this.form.studyExperience,
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

  openDeleteConfirm(row: HrEducationDto): void {
    this.deleteTarget = row;
    this.deleteVisible.set(true);
  }

  closeDeleteConfirm(): void {
    this.deleteVisible.set(false);
  }

  get deleteTargetName(): string {
    return this.deleteTarget ? `${this.deleteTarget.empId} - ${this.deleteTarget.localName} (${this.deleteTarget.institutionName})` : '';
  }

  confirmDelete(): void {
    if (!this.deleteTarget?.educNo) return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.educNo).subscribe({
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
      this.i18n.t('hrm.empinfo.educ.colInstitution', 'Tên trường'),
      this.i18n.t('hrm.empinfo.educ.colDegree', 'Bằng cấp'),
      this.i18n.t('hrm.empinfo.educ.colSubject', 'Chuyên ngành'),
      this.i18n.t('hrm.empinfo.educ.colFrom', 'Từ ngày'),
      this.i18n.t('hrm.empinfo.educ.colTo', 'Đến ngày'),
      this.i18n.t('hrm.empinfo.educ.colLength', 'Hình thức'),
      this.i18n.t('hrm.empinfo.educ.colCountry', 'Quốc gia'),
      this.i18n.t('hrm.empinfo.educ.colRemark', 'Ghi chú'),
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1, r.empId, r.localName, r.institutionName, r.degreeName, r.subject,
      r.startDate, r.endDate, r.schoolLength, r.siteCountryName, r.remark,
    ]);

    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DanhSach');
    XLSX.writeFile(workbook, 'education_info_list.xlsx');
  }
}
