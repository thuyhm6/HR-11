import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import {
  AuthDeptNode,
  CodeItem,
  RecruitActionResult,
  RecruitEducation,
  RecruitEmployee,
  RecruitFamily,
  RecruitWorkExp,
} from './view-recruit-list.model';
import { ViewRecruitListService } from './view-recruit-list.service';

/** Message key dùng lại nguyên key của viewRecruitList.jsp / viewAddRecruitInfo*.jsp bản gốc (dự án HTSV). */
const I18N_KEYS = [
  // Điều kiện + nút
  'hrm.recruitManage.The_entry', 'hrm.recruitManage.The_entry_end', 'hrm.recruitManage.RUZHI_FALING_DATE.Z',
  'ar.viewarcardrecord.title.shujulaiyuan', 'hrm.recruitManage.SHOUDONG_SHURU.Z', 'hrm.recruitManage.ZHAOPIN_WORK.Z',
  'hrm.recruitManage.Back_by_qualified', 'hrm.recruitManage.Confirm', 'button.search', 'hrm.empinfo.EXPORT',
  'button.add', 'button.delete', 'button.sys.affirm.save',
  // Danh sách
  'hrm.empinfo.name', 'hrm.empinfo.empid', 'hrm.recruitManage.DATE_STARTED', 'hrm.empinfo.END_PROBATION_DATE',
  'hrm.recruitManage.JOIN_TYPE.Z', 'hrm.recruitManage.JOIN_DETAIL_TYPE.Z', 'hrm.empinfo.ORG_NAME_LOCAL',
  'hrm.empinfo.EMP_TYPE_CODE_NAME', 'ess.personalinfo.title.IDCardNo', 'hrm.empinfo.SEXCODE', 'hrm.empinfo.NATIONALITY_CODE',
  // Tab
  'hrm.recruitManage.Basic_information', 'hrm.recruitManage.Additional_information',
  'hrm.recruitManage.educational_information', 'hrm.recruitManage.Experience_information',
  'hrm.recruitManage.Family_information', 'hrm.recruitManage.Photo_collection',
  // Thông tin cơ bản
  'hrm.empinfo.ENGLISH_NAME', 'hrm.recruitManage.IS_PROBATION.Z', 'hrm.recruitManage.TIME_STARTED.Z',
  'hrm.recruitManage.XIANZHIWEI_RENDING_DATE.Z', 'hrm.empinfo.MAIN_BUSINESS_NAME', 'hrm.empinfo.COST_CENTER_NAME_LOCAL',
  'hrm.empinfo.POST_FAMILY', 'hrm.contract.Rank', 'hrm.contract.POSITION_NO', 'hrm.recruitManage.ZHILIU_YEAR.Z',
  'hr.viewPersonalInfo.title.banzu', 'ar.viewArShiftMonthCheckList.ZHENGCHANGBAN.b', 'hrm.empinfo.personSupplier',
  // Thông tin bổ sung
  'hrm.recruitManage.I_MATTER', 'hrm.empinfo.award_date', 'hrm.empinfo.QIANFA_JIGUAN.Z', 'hrm.empinfo.FAM_BORNDATE',
  'hrm.empinfo.MARITAL_STATUS_NAME', 'hrm.empinfo.NATION_CODE', 'ess.personalinfo.title.familyTelphone',
  'hrm.empinfo.CELLPHONE', 'hrm.empinfo.EagLem.Z', 'hrm.empinfo.EagLem_ID.Z', 'hrm.empinfo.EMAIL',
  'hrm.empinfo.CV_update_status.Z', 'ess.empInfo.religion', 'hrm.empinfo.JINGLI_QIJIAN.Z', 'hrm.empinfo.HUJIDIZHI',
  'hrm.empinfo.ORIGIN.Z', 'hr.viewRelation.title.FAM_ADDRESS', 'hrm.empinfo.FAM_ADDRESS_TYPE',
  'hrm.approve.EFFECTIVE_START_DATE', 'hrm.empinfo.country', 'hrm.contractInfo.HUIJIDIZHI',
  // Giáo dục / Kinh nghiệm / Gia đình
  'hrm.recruitManage.Education_matters', 'hr.viewPersonalInfo.title.SCHOOL', 'hrm.empinfo.DEGREE_CODE',
  'hrm.recruitManage.FINAL_DEGREE_WHETHER', 'hrm.recruitManage.START_DATE', 'hrm.recruitManage.END_DATE',
  'hrm.recruitManage.SUBJECT', 'hr.hrm.empinfo.SUBJECT_SECOND.Z', 'hrm.empinfo.graduation_Certificate_number',
  'hrm.empinfo.REMARK', 'hrm.empinfo.UPDATED_BY', 'hrm.empinfo.UPDATE_DATE', 'hrm.recruitManage.INSTITUTION_NAME',
  'hrm.empinfo.COMPANY_NAME', 'edu.teacherManager.BUMEN.a', 'hr.hrm.empinfo.MONTH_SALARY.Z', 'hrm.recruitManage.LEAVE_DATE',
  'ess.trans.title.resignReason', 'hr.viewBadArchives.title.REMARK', 'hrm.empinfo.FAM_TYPE_CODE_NAME',
  'hr.viewPersonalInfo.title.SEX', 'hrm.recruitManage.EMERGENCY_CONTACT_YN', 'hrm.recruitManage.FAM_EMAIL',
  'hrm.empinfo.FAM_FAMILY_PHONE', 'sys.basicMaint.title.companyTelPhoneNo',
  // Hình ảnh
  'hrm.recruitManage.ENCLOSURE', 'hr.alert.message.upload_success', 'hr.alert.message.upload_failure',
  'hr.alert.message.checkBoxForChecked_upload_photo',
  // Kiểm tra dữ liệu + thông báo
  'hrm.empinfo.deptname_notcompleted', 'hrm.empinfo.EMP_TYPE_CODE_notcompleted', 'hrm.empinfo.JOIN_TYPE_notcompleted',
  'hrm.empinfo.POST_FAMILY_notcompleted', 'hrm.alert.recruitManage.SEXCODE_notcompleted',
  'hrm.alert.recruitManage.NATIONALITY_CODE_notcompleted', 'hrm.alert.recruitManage.NATION_CODE_notcompleted',
  'hrm.alert.recruitManage.MARITAL_STATUS_notcompleted', 'hr.alert.message.viewHire.checkNotNullIdcardNo.error',
  'ar.alert.message.viewCardAssociate.enddatemustbigger', 'vsp.js.required', 'recruit.list.js.selectFirst',
  'zxc.hr.viewEvaluate.title.SAVE_CONFIRM', 'hrm.alert.empinfo.Perform_operation',
  'hrm.alert.empinfo.Choice_Perform_operation', 'button.delete.sure', 'hrm.alert.empinfo.Sure.delete',
  'alert.message.add_success', 'alert.message.add_fail', 'alert.message.delete_success', 'alert.message.delete_fail',
  'liang.alert.message.org.execute_success', 'hrm.recruitManage.EMPID_EXISTENCE.Z',
  'hr.viewCondSql.title.QINGXUANZE', 'common.all', 'common.total', 'common.noData', 'common.loadFail', 'common.error',
  'mep.msg.loadDeptFailed',
];

/** Loại nhân viên không bắt buộc kiểm tra dữ liệu (bản gốc: employee_type != '14015550'). */
const EMP_TYPE_SKIP_VALIDATE = '14015550';
/** Ca mặc định khi nhận việc (bản gốc: hidden SHIFT_NO = 400224 - Ca hành chính). */
const DEFAULT_SHIFT_NO = '400224';
/** Địa chỉ hộ khẩu - loại địa chỉ mặc định (bản gốc HUJIADDRESS_TYPE selected=14013843). */
const DEFAULT_HUJI_ADDRESS_TYPE = '14013843';
/** Quốc tịch Trung Quốc - kiểm tra định dạng CMND (bản gốc). */
const NATIONALITY_CHINA = '871';
/** Nhóm nhân viên văn phòng / thường: thử việc 2 tháng; sản xuất: 1 tháng (bản gốc group()). */
const POST_FAMILY_PROBATION_MONTHS: Record<string, number> = { '14015813': 2, '14015814': 2, '14015815': 1 };

type BasicDateField = 'dateStarted' | 'endProbationDate' | 'timeStarted' | 'positionConfirmationDate';
type PersonalDateField = 'idcardStartDate' | 'dob' | 'effectiveStartDate' | 'hujiyouxiaoStartDate';

interface EduForm {
  seq: number | null;
  degreeCode: string | null;
  finalDegree: boolean;
  institutionName: string;
  startMonth: Date | null;
  endMonth: Date | null;
  subject: string;
  subjectSecond: string;
  siteCountry: string | null;
  eduDegNum: string;
  remark: string;
  updatedBy: string;
  updateDate: string;
}

interface WorkForm {
  seq: number | null;
  cpnyName: string;
  deptName: string;
  payroll: string;
  startMonth: Date | null;
  endMonth: Date | null;
  leftReason: string;
  remark: string;
  updatedBy: string;
  updateDate: string;
}

interface FamilyForm {
  seq: number | null;
  famName: string;
  famTypeCode: string | null;
  gender: string | null;
  famBorndate: Date | null;
  emergency: boolean;
  famAddress: string;
  famPhone: string;
  famEmail: string;
  famFamilyPhone: string;
  workPhone: string;
  remark: string;
  updatedBy: string;
  updateDate: string;
}

function emptyEmployee(): RecruitEmployee {
  return { personId: '', shiftNo: DEFAULT_SHIFT_NO, hujiaddressType: DEFAULT_HUJI_ADDRESS_TYPE, isProbation: '0' };
}

/**
 * Quyết định nhận việc - bản Angular của hrm/recruitManage/viewRecruitList + viewAddRecruitInfoPanel /
 * viewAddRecruitInfo (dự án HTSV): bên trái danh sách nhân viên chờ nhận việc (lọc trạng thái / ngày /
 * nguồn dữ liệu, chọn nhiều dòng để Xác nhận hoặc Kéo lại), bên phải 6 tab Thông tin cơ bản / bổ sung /
 * Giáo dục / Kinh nghiệm / Gia đình / Hình ảnh. Nhân viên đã xác nhận (ACTIVITY=1) chỉ xem.
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
    NzRadioModule,
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
  // ==================== Điều kiện tìm kiếm ====================
  searchObject = '0';
  searchStartDate: Date | null = null;
  searchEndDate: Date | null = null;
  searchDataSources = '';
  /** Trạng thái của lần tìm kiếm gần nhất (quyết định nút Xác nhận / Kéo lại). */
  readonly listObject = signal('0');

  // ==================== Danh sách ====================
  readonly employees = signal<RecruitEmployee[]>([]);
  readonly loadingList = signal(false);
  readonly checkedPersonIds = signal<Set<string>>(new Set());

  // ==================== Nhân viên đang chọn ====================
  readonly selectedPersonId = signal<string | null>(null);
  readonly detailLoading = signal(false);
  readonly saving = signal(false);
  readonly activeTabIndex = signal(0);
  form: RecruitEmployee = emptyEmployee();
  basicDates: Record<BasicDateField, Date | null> = this.emptyBasicDates();
  personalDates: Record<PersonalDateField, Date | null> = this.emptyPersonalDates();
  readonly readOnly = computed(() => this.detailActivity() === '1');
  private readonly detailActivity = signal<string | null>(null);

  // ==================== Tab Giáo dục / Kinh nghiệm / Gia đình ====================
  readonly eduRows = signal<RecruitEducation[]>([]);
  eduForm: EduForm = this.emptyEduForm();
  readonly workRows = signal<RecruitWorkExp[]>([]);
  workForm: WorkForm = this.emptyWorkForm();
  readonly familyRows = signal<RecruitFamily[]>([]);
  familyForm: FamilyForm = this.emptyFamilyForm();

  // ==================== Tab Hình ảnh ====================
  photoFile: File | null = null;
  readonly photoPreview = signal<string | null>(null);

  // ==================== Danh mục ====================
  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly deptTreeErrorMessage = signal<string | null>(null);
  readonly joinTypeOptions = signal<CodeItem[]>([]);
  readonly joinDetailTypeOptions = signal<CodeItem[]>([]);
  readonly empTypeOptions = signal<CodeItem[]>([]);
  readonly mainBusinessOptions = signal<CodeItem[]>([]);
  readonly postFamilyOptions = signal<CodeItem[]>([]);
  readonly postGradeOptions = signal<CodeItem[]>([]);
  readonly positionNoOptions = signal<CodeItem[]>([]);
  readonly supplierOptions = signal<string[]>([]);
  readonly sexOptions = signal<CodeItem[]>([]);
  readonly maritalStatusOptions = signal<CodeItem[]>([]);
  readonly nationalityOptions = signal<CodeItem[]>([]);
  readonly nationOptions = signal<CodeItem[]>([]);
  readonly existSingleOptions = signal<CodeItem[]>([]);
  readonly cvUpdateStatusOptions = signal<CodeItem[]>([]);
  readonly addressTypeOptions = signal<CodeItem[]>([]);
  readonly degreeOptions = signal<CodeItem[]>([]);
  readonly famTypeOptions = signal<CodeItem[]>([]);

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
    this.search();
  }

  private t(key: string, fallback: string): string {
    return this.i18n.t(key, fallback);
  }

  private resultMessage(res: RecruitActionResult, fallbackKey: string, fallbackText: string): string {
    if (res.messageKey) return this.t(res.messageKey, res.message || fallbackText);
    return res.message || this.t(fallbackKey, fallbackText);
  }

  // ==================== Danh sách + tìm kiếm ====================

  search(): void {
    this.loadingList.set(true);
    this.checkedPersonIds.set(new Set());
    const object = this.searchObject;
    this.api
      .getEmployeeList({
        searchObject: object,
        searchStartDate: this.toDmy(this.searchStartDate),
        searchEndDate: this.toDmy(this.searchEndDate),
        searchDataSources: this.searchDataSources,
      })
      .subscribe({
        next: (rows) => {
          const list = rows ?? [];
          this.employees.set(list);
          this.listObject.set(object);
          this.loadingList.set(false);
          // Bản gốc: mở dòng đầu tiên, không có dữ liệu thì mở form thêm mới
          const keep = list.find((r) => r.personId === this.selectedPersonId());
          if (keep) this.selectEmployee(keep);
          else if (list.length) this.selectEmployee(list[0]);
          else this.newEmployee();
        },
        error: () => {
          this.message.error(this.t('common.loadFail', 'Tải dữ liệu thất bại!'));
          this.employees.set([]);
          this.loadingList.set(false);
        },
      });
  }

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
    this.checkedPersonIds.set(checked ? new Set(this.employees().map((r) => r.personId)) : new Set());
  }

  /** CONFIRM = Xác nhận quyết định nhận việc; CANCEL = Kéo lại người đã hoàn thành (bản gốc executeRecruit). */
  executeAction(type: 'CONFIRM' | 'CANCEL'): void {
    const personIds = Array.from(this.checkedPersonIds());
    if (!personIds.length) {
      this.message.error(this.t('hrm.alert.empinfo.Choice_Perform_operation', 'Xin chọn thao tác cần thực hiện'));
      return;
    }
    this.modal.confirm({
      nzTitle: this.t('hrm.alert.empinfo.Perform_operation', 'Đồng ý thực hiện không?'),
      nzOnOk: () => {
        this.api.execute(personIds.join(','), type).subscribe({
          next: (res) => {
            if (res.success) {
              this.message.success(this.t('liang.alert.message.org.execute_success', 'Thực hiện thành công'));
              this.selectedPersonId.set(null);
              this.search();
            } else {
              this.message.error(this.resultMessage(res, 'common.error', 'Lỗi'));
            }
          },
          error: () => this.message.error(this.t('common.error', 'Lỗi')),
        });
      },
    });
  }

  exportExcel(): void {
    const headers = [
      'No.', this.t('hrm.empinfo.name', 'Họ tên'), this.t('hrm.empinfo.empid', 'Mã nhân viên'),
      this.t('hrm.recruitManage.DATE_STARTED', 'Ngày vào làm'), this.t('hrm.empinfo.END_PROBATION_DATE', 'Ngày kết thúc thử việc'),
      this.t('hrm.recruitManage.JOIN_TYPE.Z', 'Hình thức nhận việc'), this.t('hrm.recruitManage.JOIN_DETAIL_TYPE.Z', 'Chi tiết nhận việc'),
      this.t('hrm.empinfo.ORG_NAME_LOCAL', 'Phòng ban'), this.t('hrm.empinfo.EMP_TYPE_CODE_NAME', 'Loại nhân viên'),
      this.t('ess.personalinfo.title.IDCardNo', 'CMND'), this.t('hrm.empinfo.SEXCODE', 'Giới tính'),
      this.t('hrm.empinfo.NATIONALITY_CODE', 'Quốc tịch'),
    ];
    const data = this.employees().map((r, i) => [
      i + 1, r.localName, r.empId, r.dateStarted, r.endProbationDate, r.joinTypeName, r.joinDetailName, r.deptName,
      r.empTypeName, r.idcardNo, r.sexName, r.nationalityName,
    ]);
    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...data]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'RecruitList');
    XLSX.writeFile(workbook, 'RecruitList.xlsx');
  }

  // ==================== Chọn nhân viên / thêm mới ====================

  selectEmployee(row: RecruitEmployee): void {
    this.selectedPersonId.set(row.personId);
    this.detailLoading.set(true);
    this.api.getEmployeeDetail(row.personId).subscribe({
      next: (d) => {
        this.applyEmployee({ ...emptyEmployee(), ...d });
        this.detailLoading.set(false);
        this.loadSubTabs();
      },
      error: () => {
        this.message.error(this.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.detailLoading.set(false);
      },
    });
  }

  /** Nút Thêm (bản gốc viewAddRecruitInfoPanel?PERSON_ID=8888): form trống ở tab Thông tin cơ bản. */
  newEmployee(): void {
    this.selectedPersonId.set(null);
    this.activeTabIndex.set(0);
    this.applyEmployee(emptyEmployee());
    this.eduRows.set([]);
    this.workRows.set([]);
    this.familyRows.set([]);
    this.eduForm = this.emptyEduForm();
    this.workForm = this.emptyWorkForm();
    this.familyForm = this.emptyFamilyForm();
  }

  private applyEmployee(d: RecruitEmployee): void {
    this.form = d;
    this.detailActivity.set(d.activity ?? null);
    this.basicDates = {
      dateStarted: this.parseDmy(d.dateStarted),
      endProbationDate: this.parseDmy(d.endProbationDate),
      timeStarted: this.parseDmy(d.timeStarted),
      positionConfirmationDate: this.parseDmy(d.positionConfirmationDate),
    };
    this.personalDates = {
      idcardStartDate: this.parseDmy(d.idcardStartDate),
      dob: this.parseDmy(d.dob),
      effectiveStartDate: this.parseDmy(d.effectiveStartDate),
      hujiyouxiaoStartDate: this.parseDmy(d.hujiyouxiaoStartDate),
    };
    this.photoFile = null;
    this.photoPreview.set(null);
    this.loadJoinDetailOptions(d.joinType ?? null);
    this.loadPostGradeOptions(d.postFamily ?? null);
  }

  private loadSubTabs(): void {
    this.loadEducation();
    this.loadWorkExp();
    this.loadFamily();
  }

  // ==================== Tab Thông tin cơ bản ====================

  onJoinTypeChange(value: string | null): void {
    this.form.joinType = value;
    this.form.joinDetailType = null;
    this.loadJoinDetailOptions(value);
  }

  onPostFamilyChange(value: string | null): void {
    this.form.postFamily = value;
    this.form.postGradeNo = null;
    this.loadPostGradeOptions(value);
    this.calcEndProbationDate();
  }

  onDateStartedChange(value: Date | null): void {
    this.basicDates.dateStarted = value;
    this.calcEndProbationDate();
  }

  /** Bản gốc group(): Ngày kết thúc thử việc = ADD_MONTHS(Ngày vào làm - 1, 2 hoặc 1 tháng) theo nhóm nhân viên. */
  private calcEndProbationDate(): void {
    const start = this.basicDates.dateStarted;
    const months = POST_FAMILY_PROBATION_MONTHS[this.form.postFamily ?? ''];
    if (!start || !months) return;
    const base = new Date(start.getFullYear(), start.getMonth(), start.getDate() - 1);
    this.basicDates.endProbationDate = this.addMonths(base, months);
  }

  /** Giống Oracle ADD_MONTHS: ngày cuối tháng -> ngày cuối tháng đích; ngày vượt quá -> ngày cuối tháng đích. */
  private addMonths(d: Date, months: number): Date {
    const lastDayOfTarget = new Date(d.getFullYear(), d.getMonth() + months + 1, 0).getDate();
    const isLastDay = d.getDate() === new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
    const day = isLastDay ? lastDayOfTarget : Math.min(d.getDate(), lastDayOfTarget);
    return new Date(d.getFullYear(), d.getMonth() + months, day);
  }

  /** Bản gốc: đổi phòng ban thì Mã chi phí lấy theo phòng ban. */
  onDeptNoChange(value: string | null): void {
    this.form.deptNo = value;
    this.form.costCenter = value;
  }

  saveBasic(): void {
    const f = this.form;
    if (f.empTypeCode !== EMP_TYPE_SKIP_VALIDATE) {
      const error = !f.localName?.trim() || !this.basicDates.dateStarted
        ? this.t('vsp.js.required', 'Vui lòng nhập đầy đủ thông tin bắt buộc')
        : !f.deptNo ? this.t('hrm.empinfo.deptname_notcompleted', 'Chưa điền phòng ban')
        : !f.empTypeCode ? this.t('hrm.empinfo.EMP_TYPE_CODE_notcompleted', 'Chưa điền loại nhân viên')
        : !f.joinType ? this.t('hrm.empinfo.JOIN_TYPE_notcompleted', 'Chưa chọn hình thức nhận việc')
        : !f.postFamily ? this.t('hrm.empinfo.POST_FAMILY_notcompleted', 'Chưa điền nhóm chức vụ')
        : null;
      if (error) {
        this.message.error(error);
        return;
      }
    }
    const dto: RecruitEmployee = {
      ...f,
      shiftNo: f.shiftNo || DEFAULT_SHIFT_NO,
      isProbation: f.isProbation === '1' ? '1' : '0',
      dateStarted: this.toDmy(this.basicDates.dateStarted),
      endProbationDate: this.toDmy(this.basicDates.endProbationDate),
      timeStarted: this.toDmy(this.basicDates.timeStarted),
      positionConfirmationDate: this.toDmy(this.basicDates.positionConfirmationDate),
    };
    this.confirmSave(() =>
      this.api.saveEmployeeBasic(dto).subscribe({
        next: (res) => this.afterEmployeeSaved(res, res.personId ?? f.personId),
        error: () => this.saveFailed(),
      }),
    );
  }

  deleteEmployee(): void {
    const personId = this.form.personId;
    if (!personId) {
      this.message.warning(this.t('recruit.list.js.selectFirst', 'Vui lòng chọn nhân viên trước'));
      return;
    }
    this.modal.confirm({
      nzTitle: this.t('button.delete.sure', 'Đồng ý xóa không?'),
      nzOkDanger: true,
      nzOnOk: () =>
        this.api.deleteEmployee(personId).subscribe({
          next: (res) => {
            if (res.success) {
              this.message.success(this.t('alert.message.delete_success', 'Xóa thành công!'));
              this.selectedPersonId.set(null);
              this.search();
            } else {
              this.message.error(this.resultMessage(res, 'alert.message.delete_fail', 'Xóa thất bại!'));
            }
          },
          error: () => this.message.error(this.t('alert.message.delete_fail', 'Xóa thất bại!')),
        }),
    });
  }

  // ==================== Tab Thông tin bổ sung ====================

  savePersonal(): void {
    const f = this.form;
    if (!f.personId) {
      this.message.warning(this.t('recruit.list.js.selectFirst', 'Vui lòng chọn nhân viên trước'));
      return;
    }
    if (f.empTypeCode !== EMP_TYPE_SKIP_VALIDATE) {
      const idPattern = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      const error = !f.idcardNo?.trim() || !f.companyPhone?.trim()
        ? this.t('vsp.js.required', 'Vui lòng nhập đầy đủ thông tin bắt buộc')
        : f.nationalityCode === NATIONALITY_CHINA && !idPattern.test(f.idcardNo.trim())
          ? this.t('hr.alert.message.viewHire.checkNotNullIdcardNo.error', 'Mã giấy tờ có lỗi, xin kiểm tra lại')
        : !f.sexcode ? this.t('hrm.alert.recruitManage.SEXCODE_notcompleted', 'Chưa điền giới tính')
        : !f.nationalityCode ? this.t('hrm.alert.recruitManage.NATIONALITY_CODE_notcompleted', 'Chưa điền quốc tịch')
        : !f.nationCode ? this.t('hrm.alert.recruitManage.NATION_CODE_notcompleted', 'Chưa điền dân tộc')
        : !f.maritalStatusCode ? this.t('hrm.alert.recruitManage.MARITAL_STATUS_notcompleted', 'Chưa điền tình trạng hôn nhân')
        : null;
      if (error) {
        this.message.error(error);
        return;
      }
    }
    const dto: RecruitEmployee = {
      ...f,
      idcardStartDate: this.toDmy(this.personalDates.idcardStartDate),
      dob: this.toDmy(this.personalDates.dob),
      effectiveStartDate: this.toDmy(this.personalDates.effectiveStartDate),
      hujiyouxiaoStartDate: this.toDmy(this.personalDates.hujiyouxiaoStartDate),
    };
    this.confirmSave(() =>
      this.api.saveEmployeePersonal(dto).subscribe({
        next: (res) => this.afterEmployeeSaved(res, f.personId),
        error: () => this.saveFailed(),
      }),
    );
  }

  private afterEmployeeSaved(res: RecruitActionResult, personId: string): void {
    this.saving.set(false);
    if (!res.success) {
      this.message.error(this.resultMessage(res, 'alert.message.add_fail', 'Lưu thất bại!'));
      return;
    }
    this.message.success(this.t('alert.message.add_success', 'Thêm thành công!'));
    this.selectedPersonId.set(personId || null);
    this.search();
  }

  // ==================== Tab Giáo dục ====================

  private emptyEduForm(): EduForm {
    return {
      seq: null, degreeCode: null, finalDegree: false, institutionName: '', startMonth: null, endMonth: null,
      subject: '', subjectSecond: '', siteCountry: null, eduDegNum: '', remark: '', updatedBy: '', updateDate: '',
    };
  }

  private loadEducation(selectSeq?: number | null): void {
    const personId = this.selectedPersonId();
    if (!personId) return;
    this.api.getEducationList(personId).subscribe({
      next: (rows) => {
        this.eduRows.set(rows ?? []);
        const row = (rows ?? []).find((r) => r.seq === selectSeq) ?? rows?.[0];
        if (row) this.selectEdu(row);
        else this.eduForm = this.emptyEduForm();
      },
      error: () => this.message.error(this.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
  }

  selectEdu(row: RecruitEducation): void {
    this.eduForm = {
      seq: row.seq ?? null,
      degreeCode: row.degreeCode ?? null,
      finalDegree: row.finalDegreeWhether === 'Y',
      institutionName: row.institutionName ?? '',
      startMonth: this.parseMonth(row.startDate),
      endMonth: this.parseMonth(row.endDate),
      subject: row.subject ?? '',
      subjectSecond: row.subjectSecond ?? '',
      siteCountry: row.siteCountry ?? null,
      eduDegNum: row.eduDegNum ?? '',
      remark: row.remark ?? '',
      updatedBy: row.updatedBy ?? '',
      updateDate: row.updateDate ?? '',
    };
  }

  newEdu(): void {
    this.eduForm = this.emptyEduForm();
  }

  saveEdu(): void {
    const personId = this.selectedPersonId();
    const f = this.eduForm;
    if (!personId) {
      this.message.warning(this.t('recruit.list.js.selectFirst', 'Vui lòng chọn nhân viên trước'));
      return;
    }
    if (this.form.empTypeCode !== EMP_TYPE_SKIP_VALIDATE) {
      if (!f.institutionName.trim()) {
        this.message.error(this.t('vsp.js.required', 'Vui lòng nhập đầy đủ thông tin bắt buộc'));
        return;
      }
      if (!this.isMonthRangeValid(f.startMonth, f.endMonth)) return;
    }
    const dto: RecruitEducation = {
      seq: f.seq,
      personId,
      degreeCode: f.degreeCode,
      finalDegreeWhether: f.finalDegree ? 'Y' : null,
      institutionName: f.institutionName,
      startDate: this.toMonth(f.startMonth),
      endDate: this.toMonth(f.endMonth),
      subject: f.subject,
      subjectSecond: f.subjectSecond,
      siteCountry: f.siteCountry,
      eduDegNum: f.eduDegNum,
      remark: f.remark,
    };
    this.confirmSave(() =>
      this.api.saveEducation(dto).subscribe({
        next: (res) => this.afterSubSaved(res, () => this.loadEducation(f.seq)),
        error: () => this.saveFailed(),
      }),
    );
  }

  deleteEdu(): void {
    const seq = this.eduForm.seq;
    this.confirmDelete(seq, (s) => this.api.deleteEducation(s), () => this.loadEducation());
  }

  // ==================== Tab Kinh nghiệm ====================

  private emptyWorkForm(): WorkForm {
    return {
      seq: null, cpnyName: '', deptName: '', payroll: '', startMonth: null, endMonth: null, leftReason: '', remark: '',
      updatedBy: '', updateDate: '',
    };
  }

  private loadWorkExp(selectSeq?: number | null): void {
    const personId = this.selectedPersonId();
    if (!personId) return;
    this.api.getWorkExpList(personId).subscribe({
      next: (rows) => {
        this.workRows.set(rows ?? []);
        const row = (rows ?? []).find((r) => r.seq === selectSeq) ?? rows?.[0];
        if (row) this.selectWork(row);
        else this.workForm = this.emptyWorkForm();
      },
      error: () => this.message.error(this.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
  }

  selectWork(row: RecruitWorkExp): void {
    this.workForm = {
      seq: row.seq ?? null,
      cpnyName: row.cpnyName ?? '',
      deptName: row.deptName ?? '',
      payroll: row.payroll ?? '',
      startMonth: this.parseMonth(row.startDate),
      endMonth: this.parseMonth(row.endDate),
      leftReason: row.leftReason ?? '',
      remark: row.remark ?? '',
      updatedBy: row.updatedBy ?? '',
      updateDate: row.updateDate ?? '',
    };
  }

  newWork(): void {
    this.workForm = this.emptyWorkForm();
  }

  saveWork(): void {
    const personId = this.selectedPersonId();
    const f = this.workForm;
    if (!personId) {
      this.message.warning(this.t('recruit.list.js.selectFirst', 'Vui lòng chọn nhân viên trước'));
      return;
    }
    if (this.form.empTypeCode !== EMP_TYPE_SKIP_VALIDATE) {
      if (!f.cpnyName.trim() || !f.startMonth || !f.endMonth) {
        this.message.error(this.t('vsp.js.required', 'Vui lòng nhập đầy đủ thông tin bắt buộc'));
        return;
      }
      if (!this.isMonthRangeValid(f.startMonth, f.endMonth)) return;
    }
    const dto: RecruitWorkExp = {
      seq: f.seq,
      personId,
      cpnyName: f.cpnyName,
      deptName: f.deptName,
      payroll: f.payroll,
      startDate: this.toMonth(f.startMonth),
      endDate: this.toMonth(f.endMonth),
      leftReason: f.leftReason,
      remark: f.remark,
    };
    this.confirmSave(() =>
      this.api.saveWorkExp(dto).subscribe({
        next: (res) => this.afterSubSaved(res, () => this.loadWorkExp(f.seq)),
        error: () => this.saveFailed(),
      }),
    );
  }

  deleteWork(): void {
    const seq = this.workForm.seq;
    this.confirmDelete(seq, (s) => this.api.deleteWorkExp(s), () => this.loadWorkExp());
  }

  // ==================== Tab Gia đình ====================

  private emptyFamilyForm(): FamilyForm {
    return {
      seq: null, famName: '', famTypeCode: null, gender: null, famBorndate: null, emergency: false, famAddress: '',
      famPhone: '', famEmail: '', famFamilyPhone: '', workPhone: '', remark: '', updatedBy: '', updateDate: '',
    };
  }

  private loadFamily(selectSeq?: number | null): void {
    const personId = this.selectedPersonId();
    if (!personId) return;
    this.api.getFamilyList(personId).subscribe({
      next: (rows) => {
        this.familyRows.set(rows ?? []);
        const row = (rows ?? []).find((r) => r.seq === selectSeq) ?? rows?.[0];
        if (row) this.selectFamily(row);
        else this.familyForm = this.emptyFamilyForm();
      },
      error: () => this.message.error(this.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
  }

  selectFamily(row: RecruitFamily): void {
    this.familyForm = {
      seq: row.seq ?? null,
      famName: row.famName ?? '',
      famTypeCode: row.famTypeCode ?? null,
      gender: row.gender ?? null,
      famBorndate: this.parseDmy(row.famBorndate),
      emergency: row.emergencyContactYn === 'Y',
      famAddress: row.famAddress ?? '',
      famPhone: row.famPhone ?? '',
      famEmail: row.famEmail ?? '',
      famFamilyPhone: row.famFamilyPhone ?? '',
      workPhone: row.workPhone ?? '',
      remark: row.remark ?? '',
      updatedBy: row.updatedBy ?? '',
      updateDate: row.updateDate ?? '',
    };
  }

  newFamily(): void {
    this.familyForm = this.emptyFamilyForm();
  }

  saveFamily(): void {
    const personId = this.selectedPersonId();
    const f = this.familyForm;
    if (!personId) {
      this.message.warning(this.t('recruit.list.js.selectFirst', 'Vui lòng chọn nhân viên trước'));
      return;
    }
    if (this.form.empTypeCode !== EMP_TYPE_SKIP_VALIDATE && !f.famName.trim()) {
      this.message.error(this.t('vsp.js.required', 'Vui lòng nhập đầy đủ thông tin bắt buộc'));
      return;
    }
    const dto: RecruitFamily = {
      seq: f.seq,
      personId,
      famName: f.famName,
      famTypeCode: f.famTypeCode,
      gender: f.gender,
      famBorndate: this.toDmy(f.famBorndate),
      emergencyContactYn: f.emergency ? 'Y' : 'N',
      famAddress: f.famAddress,
      famPhone: f.famPhone,
      famEmail: f.famEmail,
      famFamilyPhone: f.famFamilyPhone,
      workPhone: f.workPhone,
      remark: f.remark,
    };
    this.confirmSave(() =>
      this.api.saveFamily(dto).subscribe({
        next: (res) => this.afterSubSaved(res, () => this.loadFamily(f.seq)),
        error: () => this.saveFailed(),
      }),
    );
  }

  deleteFamily(): void {
    const seq = this.familyForm.seq;
    this.confirmDelete(seq, (s) => this.api.deleteFamily(s), () => this.loadFamily());
  }

  // ==================== Tab Hình ảnh ====================

  /** PHOTO_PATH bản gốc dạng /resources/photo/<cpny>/<EMPID>.jpg (dữ liệu cũ có thể thiếu "/" đầu). */
  photoUrl(): string {
    const path = this.form.photoPath || '/resources/photo/default.jpg';
    return /^(https?:)?\//.test(path) ? path : `/${path}`;
  }

  onPhotoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;
    this.photoFile = file;
    if (!file) {
      this.photoPreview.set(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => this.photoPreview.set(reader.result as string);
    reader.readAsDataURL(file);
  }

  uploadPhoto(): void {
    const personId = this.form.personId;
    if (!personId) {
      this.message.warning(this.t('recruit.list.js.selectFirst', 'Vui lòng chọn nhân viên trước'));
      return;
    }
    if (!this.photoFile) {
      this.message.info(this.t('hr.alert.message.checkBoxForChecked_upload_photo', 'Chọn hình ảnh tải lên'));
      return;
    }
    this.saving.set(true);
    this.api.uploadPhoto(personId, this.photoFile).subscribe({
      next: (res) => {
        this.saving.set(false);
        if (res.success && res.photoPath) {
          this.form.photoPath = `${res.photoPath}?t=${Date.now()}`;
          this.photoFile = null;
          this.photoPreview.set(null);
          this.message.success(this.t('hr.alert.message.upload_success', 'Tải thành công'));
        } else {
          this.message.error(this.resultMessage(res, 'hr.alert.message.upload_failure', 'Tải thất bại'));
        }
      },
      error: () => {
        this.saving.set(false);
        this.message.error(this.t('hr.alert.message.upload_failure', 'Tải thất bại'));
      },
    });
  }

  // ==================== Dùng chung: xác nhận lưu / xóa ====================

  private confirmSave(doSave: () => void): void {
    this.modal.confirm({
      nzTitle: this.t('zxc.hr.viewEvaluate.title.SAVE_CONFIRM', 'Đồng ý lưu không?'),
      nzOnOk: () => {
        this.saving.set(true);
        doSave();
      },
    });
  }

  private saveFailed(): void {
    this.saving.set(false);
    this.message.error(this.t('alert.message.add_fail', 'Lưu thất bại!'));
  }

  private afterSubSaved(res: RecruitActionResult, reload: () => void): void {
    this.saving.set(false);
    if (res.success) {
      this.message.success(this.t('alert.message.add_success', 'Thêm thành công!'));
      reload();
    } else {
      this.message.error(this.resultMessage(res, 'alert.message.add_fail', 'Lưu thất bại!'));
    }
  }

  private confirmDelete(
    seq: number | null,
    call: (seq: number) => ReturnType<ViewRecruitListService['deleteEducation']>,
    reload: () => void,
  ): void {
    if (!seq) {
      this.message.warning(this.t('hrm.alert.empinfo.Choice_Perform_operation', 'Xin chọn thao tác cần thực hiện'));
      return;
    }
    this.modal.confirm({
      nzTitle: this.t('hrm.alert.empinfo.Sure.delete', 'Đồng ý Xóa không?'),
      nzOkDanger: true,
      nzOnOk: () =>
        call(seq).subscribe({
          next: (res) => {
            if (res.success) {
              this.message.success(this.t('alert.message.delete_success', 'Xóa thành công!'));
              reload();
            } else {
              this.message.error(this.resultMessage(res, 'alert.message.delete_fail', 'Xóa thất bại!'));
            }
          },
          error: () => this.message.error(this.t('alert.message.delete_fail', 'Xóa thất bại!')),
        }),
    });
  }

  /** Bản gốc: ngày kết thúc phải lớn hơn ngày bắt đầu. */
  private isMonthRangeValid(start: Date | null, end: Date | null): boolean {
    if (start && end && this.toYm(start) >= this.toYm(end)) {
      this.message.error(this.t('ar.alert.message.viewCardAssociate.enddatemustbigger', 'Thời gian kết thúc phải lớn hơn thời gian bắt đầu'));
      return false;
    }
    return true;
  }

  // ==================== Danh mục + cây phòng ban ====================

  private loadJoinDetailOptions(joinType: string | null): void {
    if (!joinType) {
      this.joinDetailTypeOptions.set([]);
      return;
    }
    this.api.getCodeList(joinType).subscribe((list) => this.joinDetailTypeOptions.set(list ?? []));
  }

  private loadPostGradeOptions(postFamily: string | null): void {
    if (!postFamily) {
      this.postGradeOptions.set([]);
      return;
    }
    this.api.getCodeList(postFamily).subscribe((list) => this.postGradeOptions.set(list ?? []));
  }

  private loadDeptTree(): void {
    this.api.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(this.buildDeptTree(list ?? [])),
      error: () => this.deptTreeErrorMessage.set(this.t('mep.msg.loadDeptFailed', 'Lỗi khi tải danh sách phòng ban')),
    });
  }

  private buildDeptTree(list: AuthDeptNode[]): NzTreeNodeOptions[] {
    const map = new Map<string, NzTreeNodeOptions & { parent: string }>();
    list.forEach((d) => map.set(d.id, { title: d.text, key: d.id, parent: d.parent, children: [] }));
    const roots: NzTreeNodeOptions[] = [];
    map.forEach((node) => {
      if (node.parent && node.parent !== '0' && map.has(node.parent)) map.get(node.parent)!.children!.push(node);
      else roots.push(node);
    });
    const markLeaf = (nodes: NzTreeNodeOptions[]) =>
      nodes.forEach((n) => {
        n.isLeaf = !n.children || n.children.length === 0;
        if (n.children?.length) markLeaf(n.children);
      });
    markLeaf(roots);
    return roots;
  }

  /** Mã danh mục cha theo đúng viewAddRecruitInfo.jsp bản gốc. */
  private loadCodeOptions(): void {
    const load = (parent: string, target: { set: (v: CodeItem[]) => void }) =>
      this.api.getCodeList(parent).subscribe((list) => target.set(list ?? []));
    load('1359', this.joinTypeOptions);
    load('13864', this.empTypeOptions);
    load('400098', this.mainBusinessOptions);
    load('14015812', this.postFamilyOptions);
    load('14014036', this.positionNoOptions);
    load('1324', this.sexOptions);
    load('1709', this.maritalStatusOptions);
    load('870', this.nationalityOptions);
    load('210942', this.nationOptions);
    load('14013861', this.existSingleOptions);
    load('90000302', this.cvUpdateStatusOptions);
    load('14013840', this.addressTypeOptions);
    load('13769', this.degreeOptions);
    load('950', this.famTypeOptions);
    this.api.getPersonSupplierNames().subscribe((list) => this.supplierOptions.set(list ?? []));
  }

  // ==================== Helpers ngày tháng (DD/MM/YYYY và MM/YYYY như bản gốc) ====================

  private emptyBasicDates(): Record<BasicDateField, Date | null> {
    return { dateStarted: null, endProbationDate: null, timeStarted: null, positionConfirmationDate: null };
  }

  private emptyPersonalDates(): Record<PersonalDateField, Date | null> {
    return { idcardStartDate: null, dob: null, effectiveStartDate: null, hujiyouxiaoStartDate: null };
  }

  private parseDmy(value: string | null | undefined): Date | null {
    if (!value) return null;
    const p = value.trim().split(/[/.\-]/).map(Number);
    if (p.length !== 3) return null;
    const d = String(p[0]).length === 4 ? new Date(p[0], p[1] - 1, p[2]) : new Date(p[2], p[1] - 1, p[0]);
    return isNaN(d.getTime()) ? null : d;
  }

  private parseMonth(value: string | null | undefined): Date | null {
    if (!value) return null;
    const p = value.trim().split(/[/.\-]/).map(Number);
    if (p.length === 2) {
      const d = String(p[0]).length === 4 ? new Date(p[0], p[1] - 1, 1) : new Date(p[1], p[0] - 1, 1);
      return isNaN(d.getTime()) ? null : d;
    }
    return this.parseDmy(value);
  }

  private toDmy(d: Date | null): string {
    return d ? formatDate(d, 'dd/MM/yyyy', 'en-US') : '';
  }

  private toMonth(d: Date | null): string {
    return d ? formatDate(d, 'MM/yyyy', 'en-US') : '';
  }

  private toYm(d: Date): string {
    return formatDate(d, 'yyyyMM', 'en-US');
  }
}
