import { CommonModule, formatDate } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { EssBasicInfoDto, HrWorkExperience, InsideExperienceDto, WorkExperienceApplyPayload } from './work-info.model';
import { WorkInfoService } from './work-info.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'essEmpCard.localName', 'essEmpCard.empId', 'essEmpCard.deptName', 'essEmpCard.headDept',
  'essEmpCard.postFamily', 'essEmpCard.postGrade', 'essEmpCard.positionName', 'essEmpCard.dateStarted',
  'epi.section.hrDecision', 'epi.section.workExp',
  'epi.field.period', 'epi.field.decision', 'epi.field.reason', 'epi.field.department', 'epi.field.work',
  'epi.field.cpnyName', 'epi.field.startDate', 'epi.field.endDate', 'epi.field.startMonth', 'epi.field.endMonth',
  'epi.field.position', 'epi.field.resignReason', 'epi.field.witness', 'epi.field.remark', 'epi.field.attachFiles',
  'epi.btn.addNew', 'epi.btn.submitRequest',
  'epi.modal.workExp', 'epi.modal.addWorkExp', 'epi.modal.editWorkExp',
  'epi.msg.noData', 'epi.msg.loadError.workInfo', 'epi.msg.loadError.workExp', 'epi.msg.validate.cpnyName',
  'epi.msg.applyNote', 'epi.msg.applySuccess', 'epi.msg.saveError.workExp', 'epi.msg.systemError',
  'epi.msg.uploadHint', 'common.close', 'common.loadFail',
];

interface WorkExpForm {
  workExpNo: number | null;
  cpnyName: string;
  deptName: string;
  startMonth: string;
  endMonth: string;
  position: string;
  resignReason: string;
  witness: string;
  remark: string;
}

const EMPTY_WORK_EXP_FORM: WorkExpForm = {
  workExpNo: null, cpnyName: '', deptName: '', startMonth: '', endMonth: '', position: '', resignReason: '', witness: '', remark: '',
};

/**
 * Bản Angular của ess/empinfo/viewEssPersonalInfo.html (Thymeleaf + jQuery) - Thông tin Công việc của
 * chính nhân viên đang đăng nhập (Quyết định nhân sự + Kinh nghiệm làm việc, gửi yêu cầu thêm/sửa kinh
 * nghiệm qua workflow duyệt). Gọi lại nguyên API JSON đã có sẵn ở EssEmpInfoController (xem
 * WorkInfoService) - không đổi backend. Dùng nz-table thay bảng HTML tự build chuỗi jQuery, nz-modal
 * thay modal Bootstrap. Card "Thông tin nhân viên" (fragments/essEmpInfoCard.html gốc) gộp thẳng vào
 * đây (xem giải thích tương tự ở personal-info.component.ts). Cột "Lý do" trong bảng Quyết định nhân
 * sự luôn để trống - đúng behaviour bản gốc (ManageEmpPositionInsideDto không có field lý do).
 */
@Component({
  selector: 'app-work-info',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzInputModule,
    NzButtonModule,
    NzModalModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './work-info.component.html',
  styleUrl: './work-info.component.css',
})
export class WorkInfoComponent implements OnInit {
  @ViewChild('workExpFileInput') workExpFileInputRef?: ElementRef<HTMLInputElement>;

  readonly basicInfo = signal<EssBasicInfoDto | null>(null);

  readonly insideList = signal<InsideExperienceDto[]>([]);
  readonly insideLoading = signal(false);
  readonly insideError = signal<string | null>(null);

  readonly workExpList = signal<HrWorkExperience[]>([]);
  readonly workExpLoading = signal(false);
  readonly workExpError = signal<string | null>(null);

  readonly workExpModalVisible = signal(false);
  readonly workExpSaving = signal(false);
  readonly workExpIsNew = signal(true);
  readonly workExpModalTitle = computed(() =>
    this.workExpIsNew()
      ? this.i18n.t('epi.modal.addWorkExp', 'Thêm mới kinh nghiệm')
      : this.i18n.t('epi.modal.editWorkExp', 'Cập nhật kinh nghiệm'),
  );
  workExpForm: WorkExpForm = { ...EMPTY_WORK_EXP_FORM };
  workExpFiles: File[] = [];

  constructor(
    private readonly api: WorkInfoService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadBasicInfo();
    this.loadInsideExperience();
    this.loadWorkExperience();
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

  private loadInsideExperience(): void {
    this.insideLoading.set(true);
    this.insideError.set(null);
    this.api.getInsideExperience().subscribe({
      next: (list) => {
        this.insideList.set(list ?? []);
        this.insideLoading.set(false);
      },
      error: () => {
        this.insideError.set(this.i18n.t('epi.msg.loadError.workInfo', 'Lỗi tải dữ liệu công việc'));
        this.insideList.set([]);
        this.insideLoading.set(false);
      },
    });
  }

  private loadWorkExperience(): void {
    this.workExpLoading.set(true);
    this.workExpError.set(null);
    this.api.getWorkExperience().subscribe({
      next: (list) => {
        this.workExpList.set(list ?? []);
        this.workExpLoading.set(false);
      },
      error: () => {
        this.workExpError.set(this.i18n.t('epi.msg.loadError.workExp', 'Lỗi tải dữ liệu kinh nghiệm'));
        this.workExpList.set([]);
        this.workExpLoading.set(false);
      },
    });
  }

  openWorkExpModal(row: HrWorkExperience | null): void {
    this.workExpIsNew.set(!row);
    this.workExpForm = row
      ? {
          workExpNo: row.workExpNo,
          cpnyName: row.cpnyName || '',
          deptName: row.deptName || '',
          startMonth: row.startMonth || row.startDate || '',
          endMonth: row.endMonth || row.endDate || '',
          position: row.position || '',
          resignReason: row.resignReason || '',
          witness: row.witness || '',
          remark: row.remark || '',
        }
      : { ...EMPTY_WORK_EXP_FORM };
    this.workExpFiles = [];
    if (this.workExpFileInputRef) this.workExpFileInputRef.nativeElement.value = '';
    this.workExpModalVisible.set(true);
  }

  closeWorkExpModal(): void {
    this.workExpModalVisible.set(false);
  }

  onWorkExpFilesChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.workExpFiles = input.files ? Array.from(input.files) : [];
  }

  saveWorkExp(): void {
    const f = this.workExpForm;
    if (!f.cpnyName) {
      this.message.error(this.i18n.t('epi.msg.validate.cpnyName', 'Vui lòng nhập Tên công ty!'));
      return;
    }
    const payload: WorkExperienceApplyPayload = {
      cpnyName: f.cpnyName,
      deptName: f.deptName,
      startMonth: f.startMonth,
      endMonth: f.endMonth,
      position: f.position,
      resignReason: f.resignReason,
      witness: f.witness,
      remark: f.remark,
      updateWorkExperNo: f.workExpNo ?? undefined,
    };
    this.workExpSaving.set(true);
    this.api.saveWorkExperienceApply(payload, this.workExpFiles).subscribe({
      next: () => {
        this.workExpSaving.set(false);
        this.workExpModalVisible.set(false);
        this.message.success(this.i18n.t('epi.msg.applySuccess', 'Gửi yêu cầu thành công! Chờ người quản lý xét duyệt.'));
        this.loadWorkExperience();
      },
      error: (err) => {
        this.workExpSaving.set(false);
        const msg = err?.error?.error || this.i18n.t('epi.msg.saveError.workExp', 'Lỗi khi gửi yêu cầu kinh nghiệm làm việc!');
        this.message.error(msg);
      },
    });
  }
}
