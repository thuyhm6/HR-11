import { CommonModule, formatDate } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, computed, signal } from '@angular/core';
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
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import * as XLSX from 'xlsx';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import {
  AuthDeptNode,
  CodeItem,
  RecruitBatchActionResult,
  RecruitBatchItem,
  RecruitBatchListParams,
  RecruitBatchRegister,
} from './view-recruit-batch-list.model';
import { ViewRecruitBatchListService } from './view-recruit-batch-list.service';
import { PAGE_SIZE_OPTIONS } from '../shared/table.constants';

/** Message key dùng lại nguyên key của viewRecruitBatchList.jsp / viewAddRegisterInfo.jsp bản gốc (dự án HTSV). */
const I18N_KEYS = [
  'hrm.recruitManage.ZHUCE_DATE.Z', 'hrm.recruitManage.ZHUCE.Z', 'hrm.empinfo.REGISTRATION_DATE',
  'ar.addempshift.title.downloadmodule', 'hrm.recruitManage.Confirm', 'button.add', 'button.sys.affirm.save',
  'button.delete', 'button.search', 'hrm.empinfo.EXPORT', 'ar.addempshift.title.excelimport', 'hrm.empinfo.close',
  'hrm.empinfo.Already_processed', 'hrm.empinfo.empid', 'hrm.recruitManage.YUENAN_NAME.Z', 'hr.empinfo.english.name',
  'hrm.empinfo.FAM_BORNDATE', 'hrm.empinfo.DATE_STARTED', 'hr.enpinfo.title.EMP.PROBATION_END_DATE',
  'hrm.recruitManage.JOIN_TYPE.Z', 'hrm.recruitManage.JOIN_DETAIL_TYPE.Z', 'hrm.empinfo.ORG_NAME_LOCAL',
  'hrm.empinfo.POST_FAMILY', 'hrm.contract.Rank', 'hrm.empinfo.MAIN_BUSINESS_NAME', 'hrm.contract.POSITION_NO',
  'hrm.empinfo.EMP_TYPE_CODE_NAME', 'hrm.empinfo.COST_CENTER_NAME_LOCAL', 'ess.empInfo.final_education',
  'ess.empInfo.graduation_date', 'hrm.recruitManage.INSTITUTION_SCHOOL', 'hr.viewPersonalInfo.title.SUBJECTNAME',
  'pa.insurance.title.idNumber', 'hrm.recruitManage.IDCARD_QIANFA_DATE.Z', 'hrm.recruitManage.IDCARD_QIANFA_JIGUAN.Z',
  'hrm.empinfo.SEXCODE', 'hrm.empinfo.NATIONALITY_CODE', 'hrm.empinfo.NATION_CODE', 'ess.empInfo.religion',
  'hrm.empinfo.MARITAL_STATUS_NAME', 'hrm.empinfo.GEREN_EMAIL.Z', 'hrm.empinfo.EagLem_ID.Z', 'hr.viewHire.title.HOME_PHONE',
  'hrm.empinfo.CELLPHONE', 'ess.empInfo.present_address', 'hrm.empinfo.HUJIDIZHI', 'hr.viewCondSql.title.QINGXUANZE',
  'hrm.alert.empinfo.Perform_operation', 'hrm.alert.empinfo.Sure.delete', 'hrm.empinfo.SAVE_CONFIRM',
  'hrm.alert.empinfo.Choice_Perform_operation', 'liang.alert.message.org.execute_success',
  'alert.message.add_success', 'alert.message.update_success', 'alert.message.add_fail',
  'alert.message.delete_success', 'alert.message.delete_fail', 'hrm.recruitManage.EMPID_EXISTENCE.Z',
  'rbl.js.selectRegister', 'rbl.js.importSuccess', 'rbl.js.importFailed', 'rbl.modal.edit.title',
  'common.total', 'common.noData', 'common.loadFail', 'common.error', 'mep.msg.loadDeptFailed',
];

const PAGE_SIZE = 100;

interface EditForm {
  seq: string;
  empId: string;
  vietnamName: string;
  englishName: string;
  dobPicker: Date | null;
  dateStartedPicker: Date | null;
  endProbationDatePicker: Date | null;
  joinType: string | null;
  joinDetailType: string | null;
  deptno: string | null;
  postFamily: string | null;
  postGradeNo: string | null;
  mainBusiness: string | null;
  positionNo: string | null;
  empTypeCode: string | null;
  costCenter: string | null;
  finalDegreeCode: string | null;
  endDatePicker: Date | null;
  institutionName: string;
  subjectName: string;
  idcardNo: string;
  idcardSDatePicker: Date | null;
  issuingAuthority: string;
  sexcode: string | null;
  nationalityCode: string | null;
  nationCode: string | null;
  religionCode: string;
  maritalStatusCode: string | null;
  emailSecond: string;
  singId: string;
  homePhone: string;
  telephone: string;
  addressContent: string;
  regPlace: string;
  activity: string;
}

/**
 * Nhận việc hàng loạt - bản Angular của hrm/recruitManage/viewRecruitBatchList (dự án HTSV): chọn "Ngày
 * tạo" (đợt đăng ký), import Excel hoặc Thêm dòng trống rồi sửa từng dòng (bản gốc sửa trực tiếp trên
 * lưới - ở đây sửa qua popup), Xóa các dòng đã chọn, Xác nhận cả đợt (PR_RECRUIT_EXECUTE type=CONFIRM_BATCH).
 * Đợt đã xử lý (ACTIVITY=1) chỉ còn nút Tra cứu. Ngày lưu dạng YYYY/MM/DD, ngày tốt nghiệp dạng MM/YYYY như bản gốc.
 */
@Component({
  selector: 'app-view-recruit-batch-list',
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
    NzModalModule,
    TranslatePipe,
  ],
  templateUrl: './view-recruit-batch-list.component.html',
  styleUrl: './view-recruit-batch-list.component.css',
})
export class ViewRecruitBatchListComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  @ViewChild('vrblExcelFileInput') excelFileInputRef?: ElementRef<HTMLInputElement>;

  pageSize = PAGE_SIZE;

  readonly registers = signal<RecruitBatchRegister[]>([]);
  readonly selectedRegisterSeq = signal<string | null>(null);

  readonly rows = signal<RecruitBatchItem[]>([]);
  readonly totalRecords = signal(0);
  readonly allProcessed = signal(false);
  readonly loading = signal(false);
  pageIndex = 1;
  readonly checkedSeqs = signal<Set<string>>(new Set());
  readonly importing = signal(false);

  /** Đợt đã xác nhận (bản gốc ACTIVITY eq '1') -> chỉ xem. */
  readonly readOnly = computed(() => {
    const reg = this.registers().find((r) => r.registerSeq === this.selectedRegisterSeq());
    return reg?.registerActivity === '1' || this.allProcessed();
  });

  // ==================== Popup Đăng ký ====================
  readonly registerModalVisible = signal(false);
  readonly registerSaving = signal(false);
  regDatePicker: Date | null = null;

  // ==================== Popup sửa dòng ====================
  readonly editModalVisible = signal(false);
  readonly editSaving = signal(false);
  editForm: EditForm = this.emptyEditForm();

  // ==================== Danh mục ====================
  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly deptTreeErrorMessage = signal<string | null>(null);
  readonly joinTypeOptions = signal<CodeItem[]>([]);
  readonly joinDetailTypeOptions = signal<CodeItem[]>([]);
  readonly postFamilyOptions = signal<CodeItem[]>([]);
  readonly postGradeOptions = signal<CodeItem[]>([]);
  readonly mainBusinessOptions = signal<CodeItem[]>([]);
  readonly positionOptions = signal<CodeItem[]>([]);
  readonly empTypeOptions = signal<CodeItem[]>([]);
  readonly degreeOptions = signal<CodeItem[]>([]);
  readonly sexOptions = signal<CodeItem[]>([]);
  readonly nationalityOptions = signal<CodeItem[]>([]);
  readonly nationOptions = signal<CodeItem[]>([]);
  readonly maritalStatusOptions = signal<CodeItem[]>([]);

  constructor(
    private readonly api: ViewRecruitBatchListService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
    this.loadCodeOptions();
    this.loadRegisterList();
  }

  private t(key: string, fallback: string): string {
    return this.i18n.t(key, fallback);
  }

  private resultMessage(res: RecruitBatchActionResult, fallbackKey: string, fallbackText: string): string {
    if (res.messageKey) return this.t(res.messageKey, res.message || fallbackText);
    return res.message || this.t(fallbackKey, fallbackText);
  }

  // ==================== Đợt đăng ký ====================

  /** Bản gốc: mặc định chọn đợt mới nhất. */
  private loadRegisterList(selectSeq?: string): void {
    this.api.getRegisterList().subscribe({
      next: (list) => {
        const regs = list ?? [];
        this.registers.set(regs);
        const want = selectSeq ?? this.selectedRegisterSeq();
        const seq = regs.some((r) => r.registerSeq === want) ? want : (regs[0]?.registerSeq ?? null);
        this.selectedRegisterSeq.set(seq);
        this.pageIndex = 1;
        this.search();
      },
      error: () => this.message.error(this.t('common.loadFail', 'Tải dữ liệu thất bại!')),
    });
  }

  onRegisterChange(seq: string | null): void {
    this.selectedRegisterSeq.set(seq);
    this.pageIndex = 1;
    this.search();
  }

  search(): void {
    const registerSeq = this.selectedRegisterSeq();
    this.checkedSeqs.set(new Set());
    if (!registerSeq) {
      this.rows.set([]);
      this.totalRecords.set(0);
      this.allProcessed.set(false);
      return;
    }
    this.loading.set(true);
    const params: RecruitBatchListParams = {
      draw: this.pageIndex,
      start: (this.pageIndex - 1) * this.pageSize,
      length: this.pageSize,
      registerSeq,
    };
    this.api.getBatchList(params).subscribe({
      next: (res) => {
        this.rows.set(res.data ?? []);
        this.totalRecords.set(res.recordsTotal ?? 0);
        this.allProcessed.set(!!res.allProcessed);
        this.loading.set(false);
      },
      error: () => {
        this.message.error(this.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.loading.set(false);
      },
    });
  }

  onPageIndexChange(index: number): void {
    this.pageIndex = index;
    this.search();
  }

  onPageSizeChange(size: number): void {
    this.pageSize = size;
    this.pageIndex = 1;
    this.search();
  }

  openRegisterModal(): void {
    this.regDatePicker = new Date();
    this.registerModalVisible.set(true);
  }

  closeRegisterModal(): void {
    this.registerModalVisible.set(false);
  }

  saveRegister(): void {
    if (!this.regDatePicker) {
      this.message.warning(this.t('hrm.empinfo.REGISTRATION_DATE', 'Ngày đăng ký'));
      return;
    }
    const registerDate = formatDate(this.regDatePicker, 'dd/MM/yyyy', 'en-US');
    this.modal.confirm({
      nzTitle: this.t('hrm.empinfo.SAVE_CONFIRM', 'Đồng ý lưu không?'),
      nzOnOk: () => {
        this.registerSaving.set(true);
        this.api.register(registerDate).subscribe({
          next: (res) => {
            this.registerSaving.set(false);
            if (res.success) {
              this.message.success(this.t('alert.message.add_success', 'Thêm thành công!'));
              this.registerModalVisible.set(false);
              this.loadRegisterList(res.registerSeq);
            } else {
              this.message.error(this.resultMessage(res, 'alert.message.add_fail', 'Lưu thất bại!'));
            }
          },
          error: () => {
            this.registerSaving.set(false);
            this.message.error(this.t('alert.message.add_fail', 'Lưu thất bại!'));
          },
        });
      },
    });
  }

  // ==================== Chọn dòng ====================

  isChecked(seq: string): boolean {
    return this.checkedSeqs().has(seq);
  }

  toggleChecked(seq: string, checked: boolean): void {
    const next = new Set(this.checkedSeqs());
    if (checked) next.add(seq);
    else next.delete(seq);
    this.checkedSeqs.set(next);
  }

  get allChecked(): boolean {
    const rows = this.rows();
    return rows.length > 0 && rows.every((r) => this.isChecked(r.seq));
  }

  toggleAllChecked(checked: boolean): void {
    this.checkedSeqs.set(checked ? new Set(this.rows().map((r) => r.seq)) : new Set());
  }

  // ==================== Xác nhận / Thêm / Xóa ====================

  /** Bản gốc executeRecruitBatch('CONFIRM_BATCH'): empIds = SEQ đợt đăng ký. */
  confirmExecute(): void {
    const registerSeq = this.selectedRegisterSeq();
    if (!registerSeq) {
      this.message.warning(this.t('rbl.js.selectRegister', 'Vui lòng chọn Ngày đăng ký trước'));
      return;
    }
    this.modal.confirm({
      nzTitle: this.t('hrm.alert.empinfo.Perform_operation', 'Đồng ý thực hiện không?'),
      nzOnOk: () => {
        this.api.executeConfirmBatch(registerSeq).subscribe({
          next: (res) => {
            if (res.success) {
              this.message.success(this.t('liang.alert.message.org.execute_success', 'Thực hiện thành công'));
              this.loadRegisterList(registerSeq);
            } else {
              this.message.error(this.resultMessage(res, 'common.error', 'Lỗi'));
            }
          },
          error: () => this.message.error(this.t('common.error', 'Lỗi')),
        });
      },
    });
  }

  /** Bản gốc viewRecruitBatchList?FLAG=ADD: thêm 1 dòng trống rồi nhập thông tin. */
  addRow(): void {
    const registerSeq = this.selectedRegisterSeq();
    if (!registerSeq) {
      this.message.warning(this.t('rbl.js.selectRegister', 'Vui lòng chọn Ngày đăng ký trước'));
      return;
    }
    this.api.addBatchItem(registerSeq).subscribe({
      next: (res) => {
        if (res.success && res.seq) {
          this.search();
          this.openEditModal({ seq: res.seq, activity: '0' });
        } else {
          this.message.error(this.resultMessage(res, 'alert.message.add_fail', 'Lưu thất bại!'));
        }
      },
      error: () => this.message.error(this.t('alert.message.add_fail', 'Lưu thất bại!')),
    });
  }

  deleteSelected(): void {
    const seqs = Array.from(this.checkedSeqs());
    if (!seqs.length) {
      this.message.warning(this.t('hrm.alert.empinfo.Choice_Perform_operation', 'Xin chọn thao tác cần thực hiện'));
      return;
    }
    this.modal.confirm({
      nzTitle: this.t('hrm.alert.empinfo.Sure.delete', 'Đồng ý Xóa không?'),
      nzOkDanger: true,
      nzOnOk: () => {
        let remaining = seqs.length;
        let failed = false;
        const done = () => {
          remaining -= 1;
          if (remaining > 0) return;
          if (failed) this.message.error(this.t('alert.message.delete_fail', 'Xóa thất bại!'));
          else this.message.success(this.t('alert.message.delete_success', 'Xóa thành công!'));
          this.search();
        };
        seqs.forEach((seq) =>
          this.api.deleteBatchItem(seq).subscribe({
            next: (res) => {
              if (!res.success) failed = true;
              done();
            },
            error: () => {
              failed = true;
              done();
            },
          }),
        );
      },
    });
  }

  // ==================== Mẫu / Import / Xuất Excel ====================

  downloadTemplate(): void {
    window.location.href = this.api.downloadTemplateUrl();
  }

  openImportPicker(): void {
    if (!this.selectedRegisterSeq()) {
      this.message.warning(this.t('rbl.js.selectRegister', 'Vui lòng chọn Ngày đăng ký trước'));
      return;
    }
    this.excelFileInputRef?.nativeElement.click();
  }

  onExcelFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    const registerSeq = this.selectedRegisterSeq();
    if (!file || !registerSeq) return;
    this.importing.set(true);
    this.api.importExcel(file, registerSeq).subscribe({
      next: (res) => {
        this.importing.set(false);
        if (res.success) {
          const msg = `${this.t('rbl.js.importSuccess', 'Nhập file thành công')} (${res.successCount ?? 0})`;
          if (res.errorCount) this.message.warning(`${msg} - ${res.errors ?? ''}`, { nzDuration: 8000 });
          else this.message.success(msg);
        } else {
          this.message.error(res.message || this.t('rbl.js.importFailed', 'Nhập file thất bại'));
        }
        this.search();
      },
      error: () => {
        this.importing.set(false);
        this.message.error(this.t('rbl.js.importFailed', 'Nhập file thất bại'));
      },
    });
  }

  exportExcel(): void {
    if (!this.selectedRegisterSeq()) {
      this.message.warning(this.t('rbl.js.selectRegister', 'Vui lòng chọn Ngày đăng ký trước'));
      return;
    }
    const headers = [
      'No.', this.t('hrm.empinfo.Already_processed', 'Đã xử lý'), this.t('hrm.empinfo.empid', 'Mã nhân viên'),
      this.t('hrm.recruitManage.YUENAN_NAME.Z', 'Họ tên'), this.t('hr.empinfo.english.name', 'Tên tiếng Anh'),
      this.t('hrm.empinfo.FAM_BORNDATE', 'Ngày sinh'), this.t('hrm.empinfo.DATE_STARTED', 'Ngày vào làm'),
      this.t('hr.enpinfo.title.EMP.PROBATION_END_DATE', 'Ngày kết thúc thử việc'),
      this.t('hrm.recruitManage.JOIN_TYPE.Z', 'Hình thức nhận việc'),
      this.t('hrm.recruitManage.JOIN_DETAIL_TYPE.Z', 'Chi tiết nhận việc'), this.t('hrm.empinfo.ORG_NAME_LOCAL', 'Phòng ban'),
      this.t('hrm.empinfo.POST_FAMILY', 'Nhóm nhân viên'), this.t('hrm.contract.Rank', 'Chức vụ'),
      this.t('hrm.empinfo.MAIN_BUSINESS_NAME', 'Công việc'), this.t('hrm.contract.POSITION_NO', 'Chức danh'),
      this.t('hrm.empinfo.EMP_TYPE_CODE_NAME', 'Loại nhân viên'), this.t('hrm.empinfo.COST_CENTER_NAME_LOCAL', 'Mã chi phí'),
      this.t('ess.empInfo.final_education', 'Trình độ học vấn'), this.t('ess.empInfo.graduation_date', 'Ngày tốt nghiệp'),
      this.t('hrm.recruitManage.INSTITUTION_SCHOOL', 'Trường tốt nghiệp'),
      this.t('hr.viewPersonalInfo.title.SUBJECTNAME', 'Chuyên ngành'), this.t('pa.insurance.title.idNumber', 'CMND'),
      this.t('hrm.recruitManage.IDCARD_QIANFA_DATE.Z', 'Ngày cấp'), this.t('hrm.recruitManage.IDCARD_QIANFA_JIGUAN.Z', 'Nơi cấp'),
      this.t('hrm.empinfo.SEXCODE', 'Giới tính'), this.t('hrm.empinfo.NATIONALITY_CODE', 'Quốc tịch'),
      this.t('hrm.empinfo.NATION_CODE', 'Dân tộc'), this.t('ess.empInfo.religion', 'Tôn giáo'),
      this.t('hrm.empinfo.MARITAL_STATUS_NAME', 'Tình trạng hôn nhân'), this.t('hrm.empinfo.GEREN_EMAIL.Z', 'Email'),
      this.t('hrm.empinfo.EagLem_ID.Z', 'EagleM ID'), this.t('hr.viewHire.title.HOME_PHONE', 'Điện thoại gia đình'),
      this.t('hrm.empinfo.CELLPHONE', 'Điện thoại'), this.t('ess.empInfo.present_address', 'Địa chỉ tạm trú'),
      this.t('hrm.empinfo.HUJIDIZHI', 'Hộ khẩu'),
    ];
    const offset = (this.pageIndex - 1) * this.pageSize;
    const data = this.rows().map((r, i) => [
      offset + i + 1, r.activity === '1' ? 'Y' : '', r.empId, r.vietnamName, r.englishName, this.displayDate(r.dob),
      this.displayDate(r.dateStarted), this.displayDate(r.endProbationDate), r.joinTypeName, r.joinDetailTypeName,
      r.deptName, r.postFamilyName, r.postGradeName, r.mainBusinessName, r.positionNoName, r.empTypeName,
      r.costCenterName || r.costCenter, r.finalDegreeName, this.displayMonth(r.endDate), r.institutionName, r.subjectName,
      r.idcardNo, this.displayDate(r.idcardSDate), r.issuingAuthority, r.sexName, r.nationalityName, r.nationName,
      r.religionCode, r.maritalStatusName, r.emailSecond, r.singId, r.homePhone, r.telephone, r.addressContent, r.regPlace,
    ]);
    const worksheet = XLSX.utils.aoa_to_sheet([headers, ...data]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'RecruitBatch');
    XLSX.writeFile(workbook, `RecruitBatch_${this.selectedRegisterSeq()}.xlsx`);
  }

  // ==================== Popup sửa dòng ====================

  private emptyEditForm(): EditForm {
    return {
      seq: '', empId: '', vietnamName: '', englishName: '', dobPicker: null, dateStartedPicker: null,
      endProbationDatePicker: null, joinType: null, joinDetailType: null, deptno: null, postFamily: null,
      postGradeNo: null, mainBusiness: null, positionNo: null, empTypeCode: null, costCenter: null,
      finalDegreeCode: null, endDatePicker: null, institutionName: '', subjectName: '', idcardNo: '',
      idcardSDatePicker: null, issuingAuthority: '', sexcode: null, nationalityCode: null, nationCode: null,
      religionCode: '', maritalStatusCode: null, emailSecond: '', singId: '', homePhone: '', telephone: '',
      addressContent: '', regPlace: '', activity: '0',
    };
  }

  openEditModal(row: RecruitBatchItem): void {
    this.editForm = {
      seq: row.seq,
      empId: row.empId ?? '',
      vietnamName: row.vietnamName ?? '',
      englishName: row.englishName ?? '',
      dobPicker: this.parseDate(row.dob),
      dateStartedPicker: this.parseDate(row.dateStarted),
      endProbationDatePicker: this.parseDate(row.endProbationDate),
      joinType: row.joinType ?? null,
      joinDetailType: row.joinDetailType ?? null,
      deptno: row.deptno ?? null,
      postFamily: row.postFamily ?? null,
      postGradeNo: row.postGradeNo ?? null,
      mainBusiness: row.mainBusiness ?? null,
      positionNo: row.positionNo ?? null,
      empTypeCode: row.empTypeCode ?? null,
      costCenter: row.costCenter ?? null,
      finalDegreeCode: row.finalDegreeCode ?? null,
      endDatePicker: this.parseDate(row.endDate),
      institutionName: row.institutionName ?? '',
      subjectName: row.subjectName ?? '',
      idcardNo: row.idcardNo ?? '',
      idcardSDatePicker: this.parseDate(row.idcardSDate),
      issuingAuthority: row.issuingAuthority ?? '',
      sexcode: row.sexcode ?? null,
      nationalityCode: row.nationalityCode ?? null,
      nationCode: row.nationCode ?? null,
      religionCode: row.religionCode ?? '',
      maritalStatusCode: row.maritalStatusCode ?? null,
      emailSecond: row.emailSecond ?? '',
      singId: row.singId ?? '',
      homePhone: row.homePhone ?? '',
      telephone: row.telephone ?? '',
      addressContent: row.addressContent ?? '',
      regPlace: row.regPlace ?? '',
      activity: row.activity ?? '0',
    };
    this.loadJoinDetailOptions(this.editForm.joinType);
    this.loadPostGradeOptions(this.editForm.postFamily);
    this.editModalVisible.set(true);
  }

  closeEditModal(): void {
    this.editModalVisible.set(false);
  }

  get canEditRow(): boolean {
    return !this.readOnly() && this.editForm.activity !== '1';
  }

  /** Bản gốc: đổi phòng ban thì Mã chi phí lấy theo phòng ban. */
  onEditDeptnoChange(value: string | null): void {
    this.editForm.deptno = value;
    this.editForm.costCenter = value;
  }

  onEditJoinTypeChange(value: string | null): void {
    this.editForm.joinType = value;
    this.editForm.joinDetailType = null;
    this.loadJoinDetailOptions(value);
  }

  onEditPostFamilyChange(value: string | null): void {
    this.editForm.postFamily = value;
    this.editForm.postGradeNo = null;
    this.loadPostGradeOptions(value);
  }

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

  saveEdit(): void {
    if (!this.editForm.seq || !this.canEditRow) return;
    const f = this.editForm;
    const dto: RecruitBatchItem = {
      seq: f.seq,
      empId: f.empId,
      vietnamName: f.vietnamName,
      englishName: f.englishName,
      dob: this.toYmd(f.dobPicker),
      dateStarted: this.toYmd(f.dateStartedPicker),
      endProbationDate: this.toYmd(f.endProbationDatePicker),
      joinType: f.joinType,
      joinDetailType: f.joinDetailType,
      deptno: f.deptno,
      postFamily: f.postFamily,
      postGradeNo: f.postGradeNo,
      mainBusiness: f.mainBusiness,
      positionNo: f.positionNo,
      empTypeCode: f.empTypeCode,
      costCenter: f.costCenter,
      finalDegreeCode: f.finalDegreeCode,
      endDate: f.endDatePicker ? formatDate(f.endDatePicker, 'MM/yyyy', 'en-US') : '',
      institutionName: f.institutionName,
      subjectName: f.subjectName,
      idcardNo: f.idcardNo,
      idcardSDate: this.toYmd(f.idcardSDatePicker),
      issuingAuthority: f.issuingAuthority,
      sexcode: f.sexcode,
      nationalityCode: f.nationalityCode,
      nationCode: f.nationCode,
      religionCode: f.religionCode,
      maritalStatusCode: f.maritalStatusCode,
      emailSecond: f.emailSecond,
      singId: f.singId,
      homePhone: f.homePhone,
      telephone: f.telephone,
      addressContent: f.addressContent,
      regPlace: f.regPlace,
    };
    this.editSaving.set(true);
    this.api.updateBatchItem(dto).subscribe({
      next: (res) => {
        this.editSaving.set(false);
        if (res.success) {
          this.message.success(this.t('alert.message.update_success', 'Sửa thành công!'));
          this.editModalVisible.set(false);
          this.search();
        } else {
          this.message.error(this.resultMessage(res, 'alert.message.add_fail', 'Lưu thất bại!'));
        }
      },
      error: () => {
        this.editSaving.set(false);
        this.message.error(this.t('alert.message.add_fail', 'Lưu thất bại!'));
      },
    });
  }

  // ==================== Danh mục + cây phòng ban ====================

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

  /** Mã danh mục cha theo đúng RecruitManageCtroller.viewRecruitBatchList bản gốc. */
  private loadCodeOptions(): void {
    this.api.getCodeList('1359').subscribe((list) => this.joinTypeOptions.set(list ?? []));
    this.api.getCodeList('14015812').subscribe((list) => this.postFamilyOptions.set(list ?? []));
    this.api.getCodeList('400098').subscribe((list) => this.mainBusinessOptions.set(list ?? []));
    this.api.getCodeList('14014036').subscribe((list) => this.positionOptions.set(list ?? []));
    this.api.getCodeList('13864').subscribe((list) => this.empTypeOptions.set(list ?? []));
    this.api.getCodeList('13769').subscribe((list) => this.degreeOptions.set(list ?? []));
    this.api.getCodeList('1324').subscribe((list) => this.sexOptions.set(list ?? []));
    this.api.getCodeList('870').subscribe((list) => this.nationalityOptions.set(list ?? []));
    this.api.getCodeList('210942').subscribe((list) => this.nationOptions.set(list ?? []));
    this.api.getCodeList('1709').subscribe((list) => this.maritalStatusOptions.set(list ?? []));
  }

  // ==================== Helpers ngày tháng ====================

  /** Đọc các dạng YYYY/MM/DD (dữ liệu import), DD/MM/YYYY, MM/YYYY. */
  private parseDate(value: string | null | undefined): Date | null {
    if (!value) return null;
    const parts = value.trim().split(/[/.\-]/).map(Number);
    let d: Date | null = null;
    if (parts.length === 3 && String(parts[0]).length === 4) d = new Date(parts[0], parts[1] - 1, parts[2]);
    else if (parts.length === 3) d = new Date(parts[2], parts[1] - 1, parts[0]);
    else if (parts.length === 2) d = new Date(parts[1], parts[0] - 1, 1);
    return d && !isNaN(d.getTime()) ? d : null;
  }

  private toYmd(d: Date | null): string {
    return d ? formatDate(d, 'yyyy/MM/dd', 'en-US') : '';
  }

  displayDate(value: string | null | undefined): string {
    const d = this.parseDate(value);
    return d ? formatDate(d, 'dd/MM/yyyy', 'en-US') : (value ?? '');
  }

  displayMonth(value: string | null | undefined): string {
    const d = this.parseDate(value);
    return d ? formatDate(d, 'MM/yyyy', 'en-US') : (value ?? '');
  }
}
