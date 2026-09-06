import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import {
  AuthDeptNode,
  CodeItem,
  RecruitEducation,
  RecruitEmployee,
  RecruitEmployeeListParams,
  RecruitFamily,
  RecruitWorkExp,
} from './view-recruit-list.model';
import { ViewRecruitListService } from './view-recruit-list.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'recruit.list.tab.inProgress', 'recruit.list.tab.completed', 'recruit.list.tab.general',
  'recruit.list.tab.extra', 'recruit.list.tab.education', 'recruit.list.tab.workExp', 'recruit.list.tab.family',
  'recruit.list.placeholder.searchName', 'recruit.list.placeholder.searchEmpId', 'recruit.list.placeholder.selectDept',
  'recruit.list.btn.confirm', 'recruit.list.btn.cancelConfirm',
  'recruit.list.label.selectEmployee', 'recruit.list.label.newEmployee', 'recruit.list.label.employees',
  'recruit.list.field.localName', 'recruit.list.field.empId', 'recruit.list.field.englishName',
  'recruit.list.field.koreanName', 'recruit.list.field.sexcode', 'recruit.list.field.dob',
  'recruit.list.field.nationalityCode', 'recruit.list.field.nationCode', 'recruit.list.field.maritalStatusCode',
  'recruit.list.field.deptNo', 'recruit.list.field.postFamily', 'recruit.list.field.postGradeNo',
  'recruit.list.field.positionNo', 'recruit.list.field.empTypeCode', 'recruit.list.field.joinType',
  'recruit.list.field.joinDetailType', 'recruit.list.field.dateStarted', 'recruit.list.field.fullTimeEmployee',
  'recruit.list.field.endProbationDate', 'recruit.list.field.contractStartDate', 'recruit.list.field.costCenter',
  'recruit.list.field.homePhone', 'recruit.list.field.companyPhone', 'recruit.list.field.officePhone',
  'recruit.list.field.email', 'recruit.list.field.idcardNo', 'recruit.list.field.documentType',
  'recruit.list.field.idcardStartDate', 'recruit.list.field.issuingAuthority', 'recruit.list.field.addressContent',
  'recruit.list.field.hujiaddressContent', 'recruit.list.field.nationality', 'recruit.list.field.accountNo',
  'recruit.list.field.oldPay', 'recruit.list.field.experience', 'recruit.list.field.recruitType',
  'recruit.list.field.recommend', 'recruit.list.field.remark',
  'recruit.list.edu.degreeCode', 'recruit.list.edu.degreesCode', 'recruit.list.edu.institutionName',
  'recruit.list.edu.subject', 'recruit.list.edu.startDate', 'recruit.list.edu.endDate',
  'recruit.list.edu.finalDegree', 'recruit.list.edu.studyAbroad',
  'recruit.list.work.cpnyName', 'recruit.list.work.deptName', 'recruit.list.work.position',
  'recruit.list.work.startDate', 'recruit.list.work.endDate', 'recruit.list.work.payroll', 'recruit.list.work.leftReason',
  'recruit.list.family.famName', 'recruit.list.family.famTypeCode', 'recruit.list.family.gender',
  'recruit.list.family.famBorndate', 'recruit.list.family.famPhone', 'recruit.list.family.emergencyYn',
  'recruit.list.family.occupation',
  'recruit.list.js.selectFirst', 'recruit.list.js.noChanges', 'recruit.list.js.selectRow',
  'recruit.list.js.confirmDelete', 'recruit.list.js.confirmExecute', 'recruit.list.js.confirmCancel',
  'common.add', 'common.delete', 'common.save', 'common.cancel', 'common.search', 'common.clearFilter',
  'common.success', 'common.error', 'common.noData', 'common.yes', 'common.no', 'common.description',
  'common.stt', 'common.empId', 'common.empName', 'common.deptName', 'common.action', 'common.totalRows',
  'common.loadFail', 'common.select', 'mep.msg.loadDeptFailed',
];

const PAGE_SIZE = 20;

function emptyEmployee(): RecruitEmployee {
  return { personId: '' };
}

interface EduForm {
  seq: number | null;
  personId: string;
  degreeCode: string | null;
  degreesCode: string;
  institutionName: string;
  subject: string;
  startDatePicker: Date | null;
  endDatePicker: Date | null;
  finalDegreeWhether: string;
  experienceStudyAbroad: string;
  remark: string;
}

interface WorkForm {
  seq: number | null;
  personId: string;
  cpnyName: string;
  deptName: string;
  position: string;
  startDatePicker: Date | null;
  endDatePicker: Date | null;
  payroll: string;
  leftReason: string;
  remark: string;
}

interface FamilyForm {
  seq: number | null;
  personId: string;
  famName: string;
  famTypeCode: string | null;
  gender: string | null;
  famBorndatePicker: Date | null;
  famPhone: string;
  emergencyContactYn: string;
  occupation: string;
  remark: string;
}

/**
 * Bản Angular của hrm/recruitManage/viewRecruitList.html (Thymeleaf + jQuery tự build DOM) - Danh sách
 * quyết định nhận việc: chọn nhân viên ở bảng bên trái, sửa 5 nhóm thông tin ở bên phải (Thông tin
 * chung/bổ sung sửa trực tiếp trên form, Giáo dục/Quá trình làm việc/Gia đình quản lý qua nz-table +
 * nz-modal thêm/sửa - thay cho kiểu "click vào dòng để sửa inline" của bản gốc, theo đúng pattern
 * CRUD đã dùng nhất quán ở các trang Angular khác trong dự án, vd. view-ar-card-record). Gọi lại
 * nguyên API JSON đã có sẵn ở HrRecruitManageController (xem ViewRecruitListService) - không đổi
 * backend. Các trường ngày tháng lưu ở backend dạng chuỗi yyyy-MM-dd (mặc định của
 * dateRangePickerHelper.js bản gốc) - ở đây hiển thị dd/MM/yyyy qua nz-date-picker (xem CLAUDE.md),
 * quy đổi 2 chiều qua toDate()/toYmd().
 */
@Component({
  selector: 'app-view-recruit-list',
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
    NzDatePickerModule,
    NzTreeSelectModule,
    NzTabsModule,
    NzModalModule,
    TranslatePipe,
  ],
  templateUrl: './view-recruit-list.component.html',
  styleUrl: './view-recruit-list.component.css',
})
export class ViewRecruitListComponent implements OnInit {
  readonly pageSize = PAGE_SIZE;

  // ==================== Danh sách nhân viên (bên trái) ====================
  readonly employees = signal<RecruitEmployee[]>([]);
  readonly totalRecords = signal(0);
  readonly loadingList = signal(false);
  pageIndex = 1;
  showCompleted = false;
  searchName = '';
  searchEmpId = '';
  readonly checkedPersonIds = signal<Set<string>>(new Set());

  // ==================== Nhân viên đang chọn + form chi tiết ====================
  readonly selectedPersonId = signal<string | null>(null);
  readonly detailLoading = signal(false);
  readonly savingEmployee = signal(false);
  form: RecruitEmployee = emptyEmployee();
  dobPicker: Date | null = null;
  dateStartedPicker: Date | null = null;
  endProbationDatePicker: Date | null = null;
  contractStartDatePicker: Date | null = null;
  idcardStartDatePicker: Date | null = null;

  readonly activeTabIndex = signal(0);

  // ==================== Danh mục (code list) + cây phòng ban ====================
  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly deptTreeErrorMessage = signal<string | null>(null);
  readonly sexOptions = signal<CodeItem[]>([]);
  readonly nationalityOptions = signal<CodeItem[]>([]);
  readonly nationOptions = signal<CodeItem[]>([]);
  readonly maritalStatusOptions = signal<CodeItem[]>([]);
  readonly postFamilyOptions = signal<CodeItem[]>([]);
  readonly postGradeOptions = signal<CodeItem[]>([]);
  readonly positionOptions = signal<CodeItem[]>([]);
  readonly empTypeOptions = signal<CodeItem[]>([]);
  readonly joinTypeOptions = signal<CodeItem[]>([]);
  readonly joinDetailTypeOptions = signal<CodeItem[]>([]);
  readonly degreeOptions = signal<CodeItem[]>([]);
  readonly famTypeOptions = signal<CodeItem[]>([]);

  // ==================== Tab Giáo dục ====================
  readonly eduRows = signal<RecruitEducation[]>([]);
  readonly eduLoaded = signal(false);
  readonly eduLoading = signal(false);
  readonly eduModalVisible = signal(false);
  readonly eduSaving = signal(false);
  readonly eduIsNew = signal(true);
  eduForm: EduForm = this.emptyEduForm();

  // ==================== Tab Quá trình làm việc ====================
  readonly workRows = signal<RecruitWorkExp[]>([]);
  readonly workLoaded = signal(false);
  readonly workLoading = signal(false);
  readonly workModalVisible = signal(false);
  readonly workSaving = signal(false);
  readonly workIsNew = signal(true);
  workForm: WorkForm = this.emptyWorkForm();

  // ==================== Tab Gia đình ====================
  readonly familyRows = signal<RecruitFamily[]>([]);
  readonly familyLoaded = signal(false);
  readonly familyLoading = signal(false);
  readonly familyModalVisible = signal(false);
  readonly familySaving = signal(false);
  readonly familyIsNew = signal(true);
  familyForm: FamilyForm = this.emptyFamilyForm();

  private deptNameById = new Map<string, string>();

  constructor(
    private readonly api: ViewRecruitListService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
    this.loadCodeOptions();
    this.loadList();
  }

  private t(key: string, fallback: string): string {
    return this.i18n.t(key, fallback);
  }

  // ==================== Danh sách + tìm kiếm ====================

  search(): void {
    this.pageIndex = 1;
    this.checkedPersonIds.set(new Set());
    this.loadList();
  }

  onPageIndexChange(index: number): void {
    this.pageIndex = index;
    this.loadList();
  }

  private loadList(): void {
    this.loadingList.set(true);
    const params: RecruitEmployeeListParams = {
      draw: this.pageIndex,
      start: (this.pageIndex - 1) * this.pageSize,
      length: this.pageSize,
      activity: this.showCompleted ? '1' : '0',
      searchName: this.searchName,
      searchEmpId: this.searchEmpId,
    };
    this.api.getEmployeeList(params).subscribe({
      next: (res) => {
        this.employees.set(res.data ?? []);
        this.totalRecords.set(res.recordsTotal ?? 0);
        this.loadingList.set(false);
      },
      error: () => {
        this.message.error(this.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.employees.set([]);
        this.loadingList.set(false);
      },
    });
  }

  // ==================== Chọn dòng (checkbox xác nhận/hủy xác nhận) ====================

  isChecked(personId: string): boolean {
    return this.checkedPersonIds().has(personId);
  }

  toggleChecked(personId: string, checked: boolean): void {
    const next = new Set(this.checkedPersonIds());
    if (checked) next.add(personId);
    else next.delete(personId);
    this.checkedPersonIds.set(next);
  }

  get allChecked(): boolean {
    const rows = this.employees();
    return rows.length > 0 && rows.every((r) => this.isChecked(r.personId));
  }

  toggleAllChecked(checked: boolean): void {
    const next = new Set(this.checkedPersonIds());
    this.employees().forEach((r) => (checked ? next.add(r.personId) : next.delete(r.personId)));
    this.checkedPersonIds.set(next);
  }

  executeAction(type: 'CONFIRM' | 'CANCEL'): void {
    const personIds = Array.from(this.checkedPersonIds());
    if (!personIds.length) {
      this.message.warning(this.t('recruit.list.js.selectRow', 'Vui lòng chọn ít nhất một dòng'));
      return;
    }
    const contentKey = type === 'CONFIRM' ? 'recruit.list.js.confirmExecute' : 'recruit.list.js.confirmCancel';
    const contentFallback =
      type === 'CONFIRM'
        ? 'Xác nhận nhận việc cho các nhân viên đã chọn?'
        : 'Hủy xác nhận nhận việc cho các nhân viên đã chọn?';
    this.modal.confirm({
      nzTitle: this.t(type === 'CONFIRM' ? 'recruit.list.btn.confirm' : 'recruit.list.btn.cancelConfirm', 'Xác nhận'),
      nzContent: this.t(contentKey, contentFallback),
      nzOnOk: () => {
        this.api.execute(personIds.join(','), type).subscribe({
          next: (res) => {
            if (res.success) {
              this.message.success(res.message || this.t('common.success', 'Thành công'));
              this.checkedPersonIds.set(new Set());
              this.clearSelection();
              this.loadList();
            } else {
              this.message.error(res.message || this.t('common.error', 'Lỗi'));
            }
          },
          error: () => this.message.error(this.t('common.error', 'Lỗi')),
        });
      },
    });
  }

  // ==================== Chọn nhân viên / thêm mới ====================

  selectEmployee(row: RecruitEmployee): void {
    this.selectedPersonId.set(row.personId);
    this.activeTabIndex.set(0);
    this.resetSubTabs();
    this.detailLoading.set(true);
    this.api.getEmployeeDetail(row.personId).subscribe({
      next: (d) => {
        this.form = { ...emptyEmployee(), ...d };
        this.dobPicker = this.toDate(this.form.dob);
        this.dateStartedPicker = this.toDate(this.form.dateStarted);
        this.endProbationDatePicker = this.toDate(this.form.endProbationDate);
        this.contractStartDatePicker = this.toDate(this.form.contractStartDate);
        this.idcardStartDatePicker = this.toDate(this.form.idcardStartDate);
        if (this.form.postFamily) this.loadPostGradeOptions(this.form.postFamily);
        if (this.form.joinType) this.loadJoinDetailOptions(this.form.joinType);
        this.detailLoading.set(false);
      },
      error: () => {
        this.message.error(this.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.detailLoading.set(false);
      },
    });
  }

  clearSelection(): void {
    this.selectedPersonId.set(null);
    this.activeTabIndex.set(0);
    this.form = emptyEmployee();
    this.dobPicker = null;
    this.dateStartedPicker = null;
    this.endProbationDatePicker = null;
    this.contractStartDatePicker = null;
    this.idcardStartDatePicker = null;
    this.postGradeOptions.set([]);
    this.joinDetailTypeOptions.set([]);
    this.resetSubTabs();
  }

  private resetSubTabs(): void {
    this.eduRows.set([]);
    this.workRows.set([]);
    this.familyRows.set([]);
    this.eduLoaded.set(false);
    this.workLoaded.set(false);
    this.familyLoaded.set(false);
  }

  onTabIndexChange(index: number): void {
    this.activeTabIndex.set(index);
    if (!this.selectedPersonId()) return;
    if (index === 2 && !this.eduLoaded()) this.loadEducation();
    if (index === 3 && !this.workLoaded()) this.loadWorkExp();
    if (index === 4 && !this.familyLoaded()) this.loadFamily();
  }

  onDeptNoChange(value: string | null): void {
    this.form.deptNo = value ?? '';
    this.form.costCenter = value ?? '';
  }

  onPostFamilyChange(value: string | null): void {
    this.form.postFamily = value ?? '';
    this.form.postGradeNo = '';
    this.loadPostGradeOptions(value);
  }

  onJoinTypeChange(value: string | null): void {
    this.form.joinType = value ?? '';
    this.form.joinDetailType = '';
    this.loadJoinDetailOptions(value);
  }

  private loadPostGradeOptions(parent: string | null | undefined): void {
    if (!parent) {
      this.postGradeOptions.set([]);
      return;
    }
    this.api.getCodeList(parent).subscribe((list) => this.postGradeOptions.set(list ?? []));
  }

  private loadJoinDetailOptions(parent: string | null | undefined): void {
    if (!parent) {
      this.joinDetailTypeOptions.set([]);
      return;
    }
    this.api.getCodeList(parent).subscribe((list) => this.joinDetailTypeOptions.set(list ?? []));
  }

  saveEmployee(): void {
    this.form.dob = this.toYmd(this.dobPicker);
    this.form.dateStarted = this.toYmd(this.dateStartedPicker);
    this.form.endProbationDate = this.toYmd(this.endProbationDatePicker);
    this.form.contractStartDate = this.toYmd(this.contractStartDatePicker);
    this.form.idcardStartDate = this.toYmd(this.idcardStartDatePicker);
    this.savingEmployee.set(true);
    this.api.saveEmployee(this.form).subscribe({
      next: (res) => {
        this.savingEmployee.set(false);
        if (res.success) {
          if (!this.form.personId && res.personId) {
            this.form.personId = res.personId;
            this.selectedPersonId.set(res.personId);
          }
          this.message.success(res.message || this.t('common.success', 'Thành công'));
          this.loadList();
        } else {
          this.message.error(res.message || this.t('common.error', 'Lỗi'));
        }
      },
      error: () => {
        this.savingEmployee.set(false);
        this.message.error(this.t('common.error', 'Lỗi'));
      },
    });
  }

  // ==================== Tab Giáo dục ====================

  private emptyEduForm(): EduForm {
    return {
      seq: null,
      personId: '',
      degreeCode: null,
      degreesCode: '',
      institutionName: '',
      subject: '',
      startDatePicker: null,
      endDatePicker: null,
      finalDegreeWhether: 'N',
      experienceStudyAbroad: 'N',
      remark: '',
    };
  }

  private loadEducation(): void {
    const personId = this.selectedPersonId();
    if (!personId) return;
    this.eduLoading.set(true);
    this.api.getEducationList(personId).subscribe({
      next: (rows) => {
        this.eduRows.set(rows ?? []);
        this.eduLoaded.set(true);
        this.eduLoading.set(false);
      },
      error: () => {
        this.message.error(this.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.eduLoading.set(false);
      },
    });
  }

  openEduModal(row: RecruitEducation | null): void {
    if (!row && !this.selectedPersonId()) {
      this.message.warning(this.t('recruit.list.js.selectFirst', 'Vui lòng chọn nhân viên trước'));
      return;
    }
    this.eduIsNew.set(!row);
    this.eduForm = row
      ? {
          seq: row.seq,
          personId: row.personId,
          degreeCode: row.degreeCode ?? null,
          degreesCode: row.degreesCode ?? '',
          institutionName: row.institutionName ?? '',
          subject: row.subject ?? '',
          startDatePicker: this.toDate(row.startDate),
          endDatePicker: this.toDate(row.endDate),
          finalDegreeWhether: row.finalDegreeWhether ?? 'N',
          experienceStudyAbroad: row.experienceStudyAbroad ?? 'N',
          remark: row.remark ?? '',
        }
      : { ...this.emptyEduForm(), personId: this.selectedPersonId() ?? '' };
    this.eduModalVisible.set(true);
  }

  closeEduModal(): void {
    this.eduModalVisible.set(false);
  }

  saveEdu(): void {
    const f = this.eduForm;
    const dto: RecruitEducation = {
      seq: f.seq,
      personId: f.personId,
      degreeCode: f.degreeCode,
      degreesCode: f.degreesCode,
      institutionName: f.institutionName,
      subject: f.subject,
      startDate: this.toYmd(f.startDatePicker),
      endDate: this.toYmd(f.endDatePicker),
      finalDegreeWhether: f.finalDegreeWhether,
      experienceStudyAbroad: f.experienceStudyAbroad,
      remark: f.remark,
    };
    this.eduSaving.set(true);
    this.api.saveEducation(dto).subscribe({
      next: (res) => {
        this.eduSaving.set(false);
        if (res.success) {
          this.eduModalVisible.set(false);
          this.message.success(res.message || this.t('common.success', 'Thành công'));
          this.loadEducation();
        } else {
          this.message.error(res.message || this.t('common.error', 'Lỗi'));
        }
      },
      error: () => {
        this.eduSaving.set(false);
        this.message.error(this.t('common.error', 'Lỗi'));
      },
    });
  }

  deleteEdu(row: RecruitEducation): void {
    this.modal.confirm({
      nzTitle: this.t('common.delete', 'Xóa'),
      nzContent: this.t('recruit.list.js.confirmDelete', 'Xác nhận xóa dữ liệu đã chọn?'),
      nzOnOk: () => {
        this.api.deleteEducation(row.seq!).subscribe({
          next: (res) => {
            if (res.success) {
              this.message.success(res.message || this.t('common.success', 'Thành công'));
              this.loadEducation();
            } else {
              this.message.error(res.message || this.t('common.error', 'Lỗi'));
            }
          },
          error: () => this.message.error(this.t('common.error', 'Lỗi')),
        });
      },
    });
  }

  // ==================== Tab Quá trình làm việc ====================

  private emptyWorkForm(): WorkForm {
    return {
      seq: null,
      personId: '',
      cpnyName: '',
      deptName: '',
      position: '',
      startDatePicker: null,
      endDatePicker: null,
      payroll: '',
      leftReason: '',
      remark: '',
    };
  }

  private loadWorkExp(): void {
    const personId = this.selectedPersonId();
    if (!personId) return;
    this.workLoading.set(true);
    this.api.getWorkExpList(personId).subscribe({
      next: (rows) => {
        this.workRows.set(rows ?? []);
        this.workLoaded.set(true);
        this.workLoading.set(false);
      },
      error: () => {
        this.message.error(this.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.workLoading.set(false);
      },
    });
  }

  openWorkModal(row: RecruitWorkExp | null): void {
    if (!row && !this.selectedPersonId()) {
      this.message.warning(this.t('recruit.list.js.selectFirst', 'Vui lòng chọn nhân viên trước'));
      return;
    }
    this.workIsNew.set(!row);
    this.workForm = row
      ? {
          seq: row.seq,
          personId: row.personId,
          cpnyName: row.cpnyName ?? '',
          deptName: row.deptName ?? '',
          position: row.position ?? '',
          startDatePicker: this.toDate(row.startDate),
          endDatePicker: this.toDate(row.endDate),
          payroll: row.payroll ?? '',
          leftReason: row.leftReason ?? '',
          remark: row.remark ?? '',
        }
      : { ...this.emptyWorkForm(), personId: this.selectedPersonId() ?? '' };
    this.workModalVisible.set(true);
  }

  closeWorkModal(): void {
    this.workModalVisible.set(false);
  }

  saveWork(): void {
    const f = this.workForm;
    const dto: RecruitWorkExp = {
      seq: f.seq,
      personId: f.personId,
      cpnyName: f.cpnyName,
      deptName: f.deptName,
      position: f.position,
      startDate: this.toYmd(f.startDatePicker),
      endDate: this.toYmd(f.endDatePicker),
      payroll: f.payroll,
      leftReason: f.leftReason,
      remark: f.remark,
    };
    this.workSaving.set(true);
    this.api.saveWorkExp(dto).subscribe({
      next: (res) => {
        this.workSaving.set(false);
        if (res.success) {
          this.workModalVisible.set(false);
          this.message.success(res.message || this.t('common.success', 'Thành công'));
          this.loadWorkExp();
        } else {
          this.message.error(res.message || this.t('common.error', 'Lỗi'));
        }
      },
      error: () => {
        this.workSaving.set(false);
        this.message.error(this.t('common.error', 'Lỗi'));
      },
    });
  }

  deleteWork(row: RecruitWorkExp): void {
    this.modal.confirm({
      nzTitle: this.t('common.delete', 'Xóa'),
      nzContent: this.t('recruit.list.js.confirmDelete', 'Xác nhận xóa dữ liệu đã chọn?'),
      nzOnOk: () => {
        this.api.deleteWorkExp(row.seq!).subscribe({
          next: (res) => {
            if (res.success) {
              this.message.success(res.message || this.t('common.success', 'Thành công'));
              this.loadWorkExp();
            } else {
              this.message.error(res.message || this.t('common.error', 'Lỗi'));
            }
          },
          error: () => this.message.error(this.t('common.error', 'Lỗi')),
        });
      },
    });
  }

  // ==================== Tab Gia đình ====================

  private emptyFamilyForm(): FamilyForm {
    return {
      seq: null,
      personId: '',
      famName: '',
      famTypeCode: null,
      gender: null,
      famBorndatePicker: null,
      famPhone: '',
      emergencyContactYn: 'N',
      occupation: '',
      remark: '',
    };
  }

  private loadFamily(): void {
    const personId = this.selectedPersonId();
    if (!personId) return;
    this.familyLoading.set(true);
    this.api.getFamilyList(personId).subscribe({
      next: (rows) => {
        this.familyRows.set(rows ?? []);
        this.familyLoaded.set(true);
        this.familyLoading.set(false);
      },
      error: () => {
        this.message.error(this.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.familyLoading.set(false);
      },
    });
  }

  openFamilyModal(row: RecruitFamily | null): void {
    if (!row && !this.selectedPersonId()) {
      this.message.warning(this.t('recruit.list.js.selectFirst', 'Vui lòng chọn nhân viên trước'));
      return;
    }
    this.familyIsNew.set(!row);
    this.familyForm = row
      ? {
          seq: row.seq,
          personId: row.personId,
          famName: row.famName ?? '',
          famTypeCode: row.famTypeCode ?? null,
          gender: row.gender ?? null,
          famBorndatePicker: this.toDate(row.famBorndate),
          famPhone: row.famPhone ?? '',
          emergencyContactYn: row.emergencyContactYn ?? 'N',
          occupation: row.occupation ?? '',
          remark: row.remark ?? '',
        }
      : { ...this.emptyFamilyForm(), personId: this.selectedPersonId() ?? '' };
    this.familyModalVisible.set(true);
  }

  closeFamilyModal(): void {
    this.familyModalVisible.set(false);
  }

  saveFamily(): void {
    const f = this.familyForm;
    const dto: RecruitFamily = {
      seq: f.seq,
      personId: f.personId,
      famName: f.famName,
      famTypeCode: f.famTypeCode,
      gender: f.gender,
      famBorndate: this.toYmd(f.famBorndatePicker),
      famPhone: f.famPhone,
      emergencyContactYn: f.emergencyContactYn,
      occupation: f.occupation,
      remark: f.remark,
    };
    this.familySaving.set(true);
    this.api.saveFamily(dto).subscribe({
      next: (res) => {
        this.familySaving.set(false);
        if (res.success) {
          this.familyModalVisible.set(false);
          this.message.success(res.message || this.t('common.success', 'Thành công'));
          this.loadFamily();
        } else {
          this.message.error(res.message || this.t('common.error', 'Lỗi'));
        }
      },
      error: () => {
        this.familySaving.set(false);
        this.message.error(this.t('common.error', 'Lỗi'));
      },
    });
  }

  deleteFamily(row: RecruitFamily): void {
    this.modal.confirm({
      nzTitle: this.t('common.delete', 'Xóa'),
      nzContent: this.t('recruit.list.js.confirmDelete', 'Xác nhận xóa dữ liệu đã chọn?'),
      nzOnOk: () => {
        this.api.deleteFamily(row.seq!).subscribe({
          next: (res) => {
            if (res.success) {
              this.message.success(res.message || this.t('common.success', 'Thành công'));
              this.loadFamily();
            } else {
              this.message.error(res.message || this.t('common.error', 'Lỗi'));
            }
          },
          error: () => this.message.error(this.t('common.error', 'Lỗi')),
        });
      },
    });
  }

  // ==================== Cây phòng ban + danh mục dùng chung ====================

  private loadDeptTree(): void {
    this.api.getAuthorizedDepartments().subscribe({
      next: (list) => {
        (list ?? []).forEach((d) => this.deptNameById.set(d.id, d.text));
        this.deptNodes.set(this.buildDeptTree(list ?? []));
      },
      error: () => this.deptTreeErrorMessage.set(this.t('mep.msg.loadDeptFailed', 'Lỗi khi tải danh sách phòng ban')),
    });
  }

  private buildDeptTree(list: AuthDeptNode[]): NzTreeNodeOptions[] {
    const map = new Map<string, NzTreeNodeOptions & { parent: string }>();
    list.forEach((d) => map.set(d.id, { title: d.text, key: d.id, parent: d.parent, children: [] }));

    const roots: NzTreeNodeOptions[] = [];
    map.forEach((node) => {
      if (node.parent && node.parent !== '0' && map.has(node.parent)) {
        map.get(node.parent)!.children!.push(node);
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

  private loadCodeOptions(): void {
    this.api.getCodeList('1324').subscribe((list) => this.sexOptions.set(list ?? []));
    this.api.getCodeList('870').subscribe((list) => this.nationalityOptions.set(list ?? []));
    this.api.getCodeList('210942').subscribe((list) => this.nationOptions.set(list ?? []));
    this.api.getCodeList('1709').subscribe((list) => this.maritalStatusOptions.set(list ?? []));
    this.api.getCodeList('14015812').subscribe((list) => this.postFamilyOptions.set(list ?? []));
    this.api.getCodeList('14014036').subscribe((list) => this.positionOptions.set(list ?? []));
    this.api.getCodeList('13864').subscribe((list) => this.empTypeOptions.set(list ?? []));
    this.api.getCodeList('1359').subscribe((list) => this.joinTypeOptions.set(list ?? []));
    this.api.getCodeList('13769').subscribe((list) => this.degreeOptions.set(list ?? []));
    this.api.getCodeList('950').subscribe((list) => this.famTypeOptions.set(list ?? []));
  }

  // ==================== Helpers ngày tháng + hiển thị ====================

  private toDate(dateStr: string | null | undefined): Date | null {
    if (!dateStr) return null;
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? null : d;
  }

  private toYmd(d: Date | null): string {
    return d ? formatDate(d, 'yyyy-MM-dd', 'vi') : '';
  }

  formatDisplayDate(dateStr: string | null | undefined): string {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? dateStr : formatDate(d, 'dd/MM/yyyy', 'vi');
  }
}
