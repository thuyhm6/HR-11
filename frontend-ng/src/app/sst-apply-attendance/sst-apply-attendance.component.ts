import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { ApproverInfo, CodeItem, EssBasicInfoDto, VacationInfoMap } from './sst-apply-attendance.model';
import { SstApplyAttendanceService } from './sst-apply-attendance.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'essEmpCard.localName', 'essEmpCard.empId', 'essEmpCard.deptName', 'essEmpCard.headDept',
  'essEmpCard.postFamily', 'essEmpCard.postGrade', 'essEmpCard.positionName', 'essEmpCard.dateStarted',
  'sa.label.leaveType', 'sa.placeholder.leaveType', 'sa.label.startTime', 'sa.label.endTime',
  'sa.label.duration', 'sa.label.reason', 'sa.btn.submit',
  'sa.col.stt', 'sa.col.approver', 'sa.col.empId', 'sa.col.dept', 'sa.col.position',
  'sa.msg.selectLeaveTypeFirst', 'sa.msg.calculating', 'sa.msg.loading', 'sa.msg.noApprovalData',
  'sa.msg.noApprover', 'sa.msg.loadApproverFailed', 'sa.msg.selectLeaveType', 'sa.msg.enterStartTime',
  'sa.msg.enterEndTime', 'sa.msg.enterReason', 'sa.msg.confirmSubmit', 'sa.msg.sending',
  'sa.msg.submitSuccess', 'sa.msg.submitError', 'sa.msg.submitConnError',
  'sa.vac.totalYear', 'sa.vac.yearVac', 'sa.vac.lastYear', 'sa.vac.special', 'sa.vac.used', 'sa.vac.remain',
  'sa.unit.days', 'sa.unit.hours',
];

/**
 * Bản Angular của ess/infoApplyAttendance/viewSSTApplyAttendance.html (Thymeleaf + jQuery) - Form xin
 * nghỉ phép của chính nhân viên đang đăng nhập (chọn loại nghỉ, thời gian, xem thông tin phép năm +
 * danh sách người phê duyệt trước khi gửi). Gọi lại nguyên các API JSON đã có sẵn (không đổi backend)
 * - xem SstApplyAttendanceService. Trang gốc không dùng DataTables (chỉ có 1 bảng HTML tĩnh hiển thị
 * danh sách người phê duyệt) nhưng vẫn đổi sang nz-table cho bảng đó theo yêu cầu đồng bộ UI với các
 * trang khác (tham khảo manage-emp-position-info). confirm() JS gốc -> NzModalService.confirm();
 * toastr -> NzMessageService. Phần đính kèm file trong bản gốc đã bị comment out (chưa hoàn thiện) nên
 * không chuyển sang đây - giữ đúng phạm vi trang gốc.
 */
@Component({
  selector: 'app-sst-apply-attendance',
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
    TranslatePipe,
  ],
  templateUrl: './sst-apply-attendance.component.html',
  styleUrl: './sst-apply-attendance.component.css',
})
export class SstApplyAttendanceComponent implements OnInit {
  readonly basicInfo = signal<EssBasicInfoDto | null>(null);
  readonly leaveTypeOptions = signal<CodeItem[]>([]);
  readonly vacationInfoText = signal('');
  readonly approvers = signal<ApproverInfo[]>([]);
  readonly approversLoading = signal(false);
  readonly approversLoaded = signal(false);
  readonly duration = signal('-');
  readonly submitting = signal(false);

  leaveTypeCode: string | null = null;
  fromTime: Date | null = null;
  toTime: Date | null = null;
  reason = '';

  private personId = '';
  private localName = '';
  private durationTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(
    private readonly api: SstApplyAttendanceService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.setDefaultTimes();
    this.api.getCodeList('21').subscribe((list) => this.leaveTypeOptions.set(list ?? []));
    this.api.getBasicInfo().subscribe((data) => {
      this.basicInfo.set(data);
      this.personId = data?.personId || '';
      this.localName = data?.localName || '';
      this.loadVacationInfo();
      this.loadApprovers();
    });
  }

  onLeaveTypeChange(): void {
    this.loadVacationInfo();
    this.loadApprovers();
    this.calcDuration();
  }

  onTimeChange(): void {
    this.calcDuration();
  }

  submit(): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    if (!this.leaveTypeCode) { this.message.warning(t('sa.msg.selectLeaveType', 'Vui lòng chọn loại nghỉ phép!')); return; }
    if (!this.fromTime) { this.message.warning(t('sa.msg.enterStartTime', 'Vui lòng nhập thời gian bắt đầu!')); return; }
    if (!this.toTime) { this.message.warning(t('sa.msg.enterEndTime', 'Vui lòng nhập thời gian kết thúc!')); return; }
    const reason = this.reason.trim();
    if (!reason) { this.message.warning(t('sa.msg.enterReason', 'Vui lòng nhập lý do!')); return; }

    this.modal.confirm({
      nzTitle: t('sa.btn.submit', 'Xin phép'),
      nzContent: t('sa.msg.confirmSubmit', 'Bạn có chắc chắn muốn gửi đơn xin phép này không?'),
      nzOnOk: () => this.doSubmit(),
    });
  }

  private doSubmit(): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    this.submitting.set(true);
    this.api
      .save({
        applyNo: '',
        personId: this.personId,
        localName: this.localName,
        leaveTypeCode: this.leaveTypeCode,
        leaveFromTime: this.formatDt(this.fromTime),
        leaveToTime: this.formatDt(this.toTime),
        applyLength: null,
        leaveReason: this.reason,
      })
      .subscribe({
        next: (res) => {
          this.submitting.set(false);
          if (res?.success) {
            this.message.success(res.message || t('sa.msg.submitSuccess', 'Xin phép thành công!'));
            this.resetForm();
          } else {
            this.message.error(res?.error || t('sa.msg.submitError', 'Lỗi khi gửi đơn!'));
          }
        },
        error: () => {
          this.submitting.set(false);
          this.message.error(t('sa.msg.submitConnError', 'Lỗi kết nối khi gửi đơn!'));
        },
      });
  }

  private resetForm(): void {
    this.leaveTypeCode = null;
    this.vacationInfoText.set('');
    this.reason = '';
    this.setDefaultTimes();
    this.calcDuration();
    this.approversLoaded.set(false);
    this.approvers.set([]);
  }

  private loadVacationInfo(): void {
    this.api.getVacationInfo().subscribe((data) => this.vacationInfoText.set(this.formatVacInfo(data)));
  }

  private loadApprovers(): void {
    if (!this.personId) return;
    this.approversLoading.set(true);
    this.approversLoaded.set(false);
    this.api.getApprovers(this.personId, this.leaveTypeCode || '').subscribe({
      next: (list) => {
        this.approvers.set((list ?? []).filter((item) => String(item.affirmLevel) !== '0'));
        this.approversLoading.set(false);
        this.approversLoaded.set(true);
      },
      error: () => {
        this.approvers.set([]);
        this.approversLoading.set(false);
        this.approversLoaded.set(true);
      },
    });
  }

  /** Debounce 300ms - đúng hành vi saCalcDuration() bản gốc (tránh gọi API liên tục khi gõ/đổi giờ). */
  private calcDuration(): void {
    if (this.durationTimer) clearTimeout(this.durationTimer);
    if (!this.fromTime || !this.toTime || !this.leaveTypeCode) {
      this.duration.set('-');
      return;
    }
    this.duration.set(this.i18n.t('sa.msg.calculating', 'Đang tính...'));
    this.durationTimer = setTimeout(() => {
      this.api.getLeaveLength(this.formatDt(this.fromTime), this.formatDt(this.toTime), this.leaveTypeCode || '').subscribe({
        next: (res) => {
          const leaveLen = Number(res?.LEAVE_LENGTH);
          const dayHour = Number(res?.DAY_HOUR);
          if (isNaN(leaveLen) || isNaN(dayHour) || dayHour === 0) {
            this.duration.set('-');
            return;
          }
          const days = Math.floor(leaveLen / dayHour);
          const hours = leaveLen - days * dayHour;
          let text = '';
          if (days > 0) text += `${days} ${this.i18n.t('sa.unit.days', 'Ngày')}`;
          if (hours > 0) text += (text ? ' ' : '') + `${hours} ${this.i18n.t('sa.unit.hours', 'Giờ')}`;
          this.duration.set(text || '0');
        },
        error: () => this.duration.set('-'),
      });
    }, 300);
  }

  private formatVacInfo(d: VacationInfoMap | null): string {
    if (!d) return '';
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    const f = (v: string | number | undefined) => (v !== null && v !== undefined && v !== '' ? v : '0');
    return `${t('sa.vac.totalYear', 'Tổng phép năm:')} ${f(d.TOT_VAC_CNT)}/  `
      + `${t('sa.vac.yearVac', 'Tạo phép năm:')} ${f(d.YEAR_VAC_CNT)}/  `
      + `${t('sa.vac.lastYear', 'Còn lại năm ngoái:')} ${f(d.LAST_YEAR_VAC)}/  `
      + `${t('sa.vac.special', 'Đặc biệt:')} ${f(d.ADD_VAC)}/  `
      + `${t('sa.vac.used', 'Số ngày đã sử dụng:')} ${f(d.USE_VAC)}/  `
      + `${t('sa.vac.remain', 'Số ngày còn lại:')} ${f(d.REMAIN_VAC)}`;
  }

  /** Mặc định từ 08:00 đến 17:00 hôm nay - giữ đúng hành vi saBootPage()/saResetForm() bản gốc. */
  private setDefaultTimes(): void {
    const now = new Date();
    this.fromTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 0);
    this.toTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 17, 0);
  }

  private formatDt(d: Date | null): string {
    return d ? formatDate(d, 'yyyy-MM-dd HH:mm', 'vi') : '';
  }
}
