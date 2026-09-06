import { CommonModule, formatDate } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import {
  CodeItem,
  EducationApplyPayload,
  EssBasicInfoDto,
  HrEducation,
  HrQualification,
  HrReward,
  QualificationApplyPayload,
} from './qualification-info.model';
import { QualificationInfoService } from './qualification-info.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'essEmpCard.localName', 'essEmpCard.empId', 'essEmpCard.deptName', 'essEmpCard.headDept',
  'essEmpCard.postFamily', 'essEmpCard.postGrade', 'essEmpCard.positionName', 'essEmpCard.dateStarted',
  'qi.section.education', 'qi.section.qualification', 'qi.section.reward',
  'qi.field.educLevel', 'qi.field.startDate', 'qi.field.endDate', 'qi.field.startMonth', 'qi.field.endMonth',
  'qi.field.institution', 'qi.field.subject', 'qi.field.academicTitle', 'qi.field.degreeNum',
  'qi.field.qualName', 'qi.field.qualLevel', 'qi.field.dateObtained', 'qi.field.validityDate',
  'qi.field.qualCardNo', 'qi.field.qualInstitute', 'qi.field.qualGrade',
  'qi.field.rewardType', 'qi.field.rewardDate', 'qi.field.rewardCnpy', 'qi.field.rewardAmount',
  'qi.modal.addEduc', 'qi.modal.editEduc', 'qi.modal.addQual', 'qi.modal.editQual',
  'qi.msg.loadError.educ', 'qi.msg.loadError.qual', 'qi.msg.loadError.reward',
  'qi.msg.validate.educLevel', 'qi.msg.validate.qualName', 'qi.placeholder.mmyyyy',
  'epi.field.remark', 'epi.field.attachFiles', 'epi.btn.addNew', 'epi.btn.submitRequest',
  'epi.msg.noData', 'epi.msg.applyNote', 'epi.msg.applySuccess', 'epi.msg.systemError',
  'epi.msg.uploadHint', 'epi.select.choose', 'common.close', 'common.loadFail',
];

interface EducForm {
  educNo: number | null;
  degreeCode: string | null;
  institutionName: string;
  startDate: string;
  endDate: string;
  subject: string;
  degreesCode: string;
  eduDegNum: string;
  remark: string;
}

interface QualForm {
  qualNo: number | null;
  qualName: string;
  qualLevel: string;
  dateObtained: Date | null;
  validityDate: Date | null;
  qualCardNo: string;
  qualInstitute: string;
  qualGrade: string;
  qualRemark: string;
}

const EMPTY_EDUC_FORM: EducForm = {
  educNo: null, degreeCode: null, institutionName: '', startDate: '', endDate: '', subject: '', degreesCode: '', eduDegNum: '', remark: '',
};

const EMPTY_QUAL_FORM: QualForm = {
  qualNo: null, qualName: '', qualLevel: '', dateObtained: null, validityDate: null, qualCardNo: '', qualInstitute: '', qualGrade: '', qualRemark: '',
};

/**
 * Bản Angular của ess/empinfo/viewQualificationInfo.html (Thymeleaf + jQuery) - Trình độ học vấn +
 * Chứng chỉ + Khen thưởng (chỉ đọc) của chính nhân viên đang đăng nhập, gửi yêu cầu thêm/sửa học
 * vấn/chứng chỉ qua workflow duyệt. Gọi lại nguyên API JSON đã có sẵn ở EssEmpInfoController (xem
 * QualificationInfoService) - không đổi backend. Dùng nz-table thay bảng HTML tự build chuỗi jQuery,
 * nz-modal thay modal Bootstrap. Card "Thông tin nhân viên" gộp thẳng vào đây (xem giải thích tương
 * tự ở personal-info.component.ts). Ngày nhập học/tốt nghiệp trong modal Học vấn là input text tự do
 * MM/YYYY (không phải LocalDate ở DB) - giữ input text như bản gốc thay vì nz-date-picker.
 */
@Component({
  selector: 'app-qualification-info',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzDatePickerModule,
    NzModalModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './qualification-info.component.html',
  styleUrl: './qualification-info.component.css',
})
export class QualificationInfoComponent implements OnInit {
  @ViewChild('educFileInput') educFileInputRef?: ElementRef<HTMLInputElement>;
  @ViewChild('qualFileInput') qualFileInputRef?: ElementRef<HTMLInputElement>;

  readonly basicInfo = signal<EssBasicInfoDto | null>(null);

  readonly educList = signal<HrEducation[]>([]);
  readonly educLoading = signal(false);
  readonly educError = signal<string | null>(null);

  readonly qualList = signal<HrQualification[]>([]);
  readonly qualLoading = signal(false);
  readonly qualError = signal<string | null>(null);

  readonly rewardList = signal<HrReward[]>([]);
  readonly rewardLoading = signal(false);
  readonly rewardError = signal<string | null>(null);

  readonly degreeOptions = signal<CodeItem[]>([]);

  readonly educModalVisible = signal(false);
  readonly educSaving = signal(false);
  readonly educIsNew = signal(true);
  readonly educModalTitle = computed(() =>
    this.educIsNew() ? this.i18n.t('qi.modal.addEduc', 'Thêm mới học vấn') : this.i18n.t('qi.modal.editEduc', 'Cập nhật học vấn'),
  );
  educForm: EducForm = { ...EMPTY_EDUC_FORM };
  educFiles: File[] = [];

  readonly qualModalVisible = signal(false);
  readonly qualSaving = signal(false);
  readonly qualIsNew = signal(true);
  readonly qualModalTitle = computed(() =>
    this.qualIsNew() ? this.i18n.t('qi.modal.addQual', 'Thêm mới chứng chỉ') : this.i18n.t('qi.modal.editQual', 'Cập nhật chứng chỉ'),
  );
  qualForm: QualForm = { ...EMPTY_QUAL_FORM };
  qualFiles: File[] = [];

  constructor(
    private readonly api: QualificationInfoService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getCodeList('13769').subscribe((list) => this.degreeOptions.set(list ?? []));
    this.loadBasicInfo();
    this.loadEducation();
    this.loadQualification();
    this.loadReward();
  }

  /** Định dạng ngày hiển thị theo DD/MM/YYYY (xem CLAUDE.md) - dữ liệu từ API là chuỗi yyyy-MM-dd. */
  formatDisplayDate(dateStr: string | null | undefined): string {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? dateStr : formatDate(d, 'dd/MM/yyyy', 'vi');
  }

  private loadBasicInfo(): void {
    this.api.getBasicInfo().subscribe({
      next: (data) => this.basicInfo.set(data),
    });
  }

  private loadEducation(): void {
    this.educLoading.set(true);
    this.educError.set(null);
    this.api.getEducation().subscribe({
      next: (list) => {
        this.educList.set(list ?? []);
        this.educLoading.set(false);
      },
      error: () => {
        this.educError.set(this.i18n.t('qi.msg.loadError.educ', 'Lỗi tải dữ liệu học vấn'));
        this.educList.set([]);
        this.educLoading.set(false);
      },
    });
  }

  private loadQualification(): void {
    this.qualLoading.set(true);
    this.qualError.set(null);
    this.api.getQualification().subscribe({
      next: (list) => {
        this.qualList.set(list ?? []);
        this.qualLoading.set(false);
      },
      error: () => {
        this.qualError.set(this.i18n.t('qi.msg.loadError.qual', 'Lỗi tải dữ liệu chứng chỉ'));
        this.qualList.set([]);
        this.qualLoading.set(false);
      },
    });
  }

  private loadReward(): void {
    this.rewardLoading.set(true);
    this.rewardError.set(null);
    this.api.getReward().subscribe({
      next: (list) => {
        this.rewardList.set(list ?? []);
        this.rewardLoading.set(false);
      },
      error: () => {
        this.rewardError.set(this.i18n.t('qi.msg.loadError.reward', 'Lỗi tải dữ liệu khen thưởng'));
        this.rewardList.set([]);
        this.rewardLoading.set(false);
      },
    });
  }

  // ==================== Modal: Học vấn ====================

  openEducModal(row: HrEducation | null): void {
    this.educIsNew.set(!row);
    this.educForm = row
      ? {
          educNo: row.educNo,
          degreeCode: row.degreeCode || null,
          institutionName: row.institutionName || '',
          startDate: row.startDate || '',
          endDate: row.endDate || '',
          subject: row.subject || '',
          degreesCode: row.degreesCode || '',
          eduDegNum: row.eduDegNum || '',
          remark: row.remark || '',
        }
      : { ...EMPTY_EDUC_FORM };
    this.educFiles = [];
    if (this.educFileInputRef) this.educFileInputRef.nativeElement.value = '';
    this.educModalVisible.set(true);
  }

  closeEducModal(): void {
    this.educModalVisible.set(false);
  }

  onEducFilesChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.educFiles = input.files ? Array.from(input.files) : [];
  }

  saveEduc(): void {
    const f = this.educForm;
    if (!f.degreeCode) {
      this.message.error(this.i18n.t('qi.msg.validate.educLevel', 'Vui lòng chọn Trình độ học vấn!'));
      return;
    }
    const payload: EducationApplyPayload = {
      degreeCode: f.degreeCode,
      institutionName: f.institutionName,
      startDate: f.startDate,
      endDate: f.endDate,
      subject: f.subject,
      degreesCode: f.degreesCode,
      eduDegNum: f.eduDegNum,
      remark: f.remark,
      updateEducNo: f.educNo ?? undefined,
    };
    this.educSaving.set(true);
    this.api.saveEducationApply(payload, this.educFiles).subscribe({
      next: () => {
        this.educSaving.set(false);
        this.educModalVisible.set(false);
        this.message.success(this.i18n.t('epi.msg.applySuccess', 'Gửi yêu cầu thành công! Chờ người quản lý xét duyệt.'));
        this.loadEducation();
      },
      error: (err) => {
        this.educSaving.set(false);
        const msg = err?.error?.error || this.i18n.t('epi.msg.systemError', 'Lỗi hệ thống');
        this.message.error(msg);
      },
    });
  }

  // ==================== Modal: Chứng chỉ ====================

  openQualModal(row: HrQualification | null): void {
    this.qualIsNew.set(!row);
    this.qualForm = row
      ? {
          qualNo: row.qualNo,
          qualName: row.qualName || '',
          qualLevel: row.qualLevel || '',
          dateObtained: this.toDate(row.dateObtained),
          validityDate: this.toDate(row.validityDate),
          qualCardNo: row.qualCardNo || '',
          qualInstitute: row.qualInstitute || '',
          qualGrade: row.qualGrade || '',
          qualRemark: row.qualRemark || '',
        }
      : { ...EMPTY_QUAL_FORM };
    this.qualFiles = [];
    if (this.qualFileInputRef) this.qualFileInputRef.nativeElement.value = '';
    this.qualModalVisible.set(true);
  }

  closeQualModal(): void {
    this.qualModalVisible.set(false);
  }

  onQualFilesChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.qualFiles = input.files ? Array.from(input.files) : [];
  }

  saveQual(): void {
    const f = this.qualForm;
    if (!f.qualName) {
      this.message.error(this.i18n.t('qi.msg.validate.qualName', 'Vui lòng nhập Tên chứng chỉ!'));
      return;
    }
    const payload: QualificationApplyPayload = {
      qualName: f.qualName,
      qualLevel: f.qualLevel,
      dateObtained: this.formatYmd(f.dateObtained),
      validityDate: this.formatYmd(f.validityDate),
      qualCardNo: f.qualCardNo,
      qualInstitute: f.qualInstitute,
      qualGrade: f.qualGrade,
      qualRemark: f.qualRemark,
      updateQualNo: f.qualNo ?? undefined,
    };
    this.qualSaving.set(true);
    this.api.saveQualificationApply(payload, this.qualFiles).subscribe({
      next: () => {
        this.qualSaving.set(false);
        this.qualModalVisible.set(false);
        this.message.success(this.i18n.t('epi.msg.applySuccess', 'Gửi yêu cầu thành công! Chờ người quản lý xét duyệt.'));
        this.loadQualification();
      },
      error: (err) => {
        this.qualSaving.set(false);
        const msg = err?.error?.error || this.i18n.t('epi.msg.systemError', 'Lỗi hệ thống');
        this.message.error(msg);
      },
    });
  }

  // ==================== Helpers ====================

  private toDate(dateStr: string | null | undefined): Date | null {
    if (!dateStr) return null;
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? null : d;
  }

  private formatYmd(d: Date | null): string {
    return d ? formatDate(d, 'yyyy-MM-dd', 'vi') : '';
  }
}
