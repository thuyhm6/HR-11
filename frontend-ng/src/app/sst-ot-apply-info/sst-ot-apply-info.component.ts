import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { ApproverInfo, EssBasicInfoDto, OtDateInfoMap } from './sst-ot-apply-info.model';
import { SstOtApplyInfoService } from './sst-ot-apply-info.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService).
 *  sa.col.* tái dùng từ sst-apply-attendance (bảng người phê duyệt giống hệt cấu trúc cột). */
const I18N_KEYS = [
  'essEmpCard.localName', 'essEmpCard.empId', 'essEmpCard.deptName', 'essEmpCard.headDept',
  'essEmpCard.postFamily', 'essEmpCard.postGrade', 'essEmpCard.positionName', 'essEmpCard.dateStarted',
  'essOt.applyDate', 'essOt.otStatus', 'essOt.otStartTimeLabel', 'essOt.otType', 'essOt.inOutTime',
  'essOt.inTime', 'essOt.outTime', 'essOt.shift', 'essOt.duration', 'essOt.mealBreak', 'essOt.yes',
  'essOt.reason', 'essOt.approverList', 'essOt.approver', 'essOt.submit', 'essOt.selectDateFirst',
  'essOt.msg.loading', 'essOt.msg.noApprover', 'essOt.msg.loadApproverFailed', 'essOt.msg.selectDate',
  'essOt.msg.empNotLoaded', 'essOt.msg.enterTime', 'essOt.msg.invalidDuration', 'essOt.msg.submitSuccess',
  'essOt.msg.submitError', 'essOt.msg.submitConnError', 'essOt.msg.endAfterStart', 'essOt.msg.otTypeMissing',
  'essOt.msg.hoursMustBePositive', 'essOt.msg.monthLimitExceeded', 'essOt.msg.yearLimitExceeded',
  'essOt.stat.thisMonth', 'essOt.stat.weekday', 'essOt.stat.maxOt', 'essOt.stat.thisYear',
  'essOt.limited', 'essOt.unlimitedMonth', 'essOt.unlimitedYear',
  'sa.col.stt', 'sa.col.empId', 'sa.col.dept', 'sa.col.position',
];

/** otTypeCode='32' (nghỉ lễ/cuối tuần) mặc định OT tính từ giờ kết thúc ca +2h - đúng logic
 *  soaLoadDateInfo() bản gốc. */
const OT_TYPE_HOLIDAY = '32';
const OT_LIMIT_MONTH_HOURS = 40;
const OT_LIMIT_YEAR_HOURS = 300;

/**
 * Bản Angular của ess/infoApply/viewSSTOtApplyInfo.html (Thymeleaf + jQuery) - Form xin tăng ca của
 * chính nhân viên đang đăng nhập (chọn ngày, xem thông tin ca/giờ vào ra, thời gian tăng ca tự tính
 * theo loại ngày, xem thống kê tăng ca tháng/năm + danh sách người phê duyệt trước khi gửi). Gọi lại
 * nguyên các API JSON đã có sẵn (không đổi backend) - xem SstOtApplyInfoService. Cấu trúc giống hệt
 * sst-apply-attendance.component.ts (form xin nghỉ phép) - cùng cơ chế approvers/submit, chỉ khác
 * applyTypeNo và các quy tắc tính giờ/giới hạn tăng ca riêng của OT.
 */
@Component({
  selector: 'app-sst-ot-apply-info',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzInputModule,
    NzButtonModule,
    NzDatePickerModule,
    NzCheckboxModule,
    TranslatePipe,
  ],
  templateUrl: './sst-ot-apply-info.component.html',
  styleUrl: './sst-ot-apply-info.component.css',
})
export class SstOtApplyInfoComponent implements OnInit {
  readonly basicInfo = signal<EssBasicInfoDto | null>(null);

  applyDate: Date | null = null;
  otFromTime: Date | null = null;
  otToTime: Date | null = null;
  mealCheck = false;
  reason = '';

  readonly shiftName = signal('--');
  readonly workTimeText = signal('--');
  readonly indoorTime = signal('**:**');
  readonly outdoorTime = signal('**:**');
  readonly otTypeName = signal('--');
  readonly duration = signal('--');

  readonly otTotalMonth = signal(0);
  readonly otWeekdayTotal = signal(0);
  readonly otLimitEnabled = signal(false);
  readonly otTotalYear = signal(0);
  readonly otLimit100Enabled = signal(false);

  readonly approvers = signal<ApproverInfo[]>([]);
  readonly approversLoading = signal(false);
  readonly approversLoaded = signal(false);
  readonly submitting = signal(false);

  private personId = '';
  private localName = '';
  private empId = '';
  private otTypeCode = '';
  private otLength = 0;

  constructor(
    private readonly api: SstOtApplyInfoService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.applyDate = new Date();
    this.api.getBasicInfo().subscribe((data) => {
      this.basicInfo.set(data);
      this.personId = data?.personId || '';
      this.localName = data?.localName || '';
      this.empId = data?.empId || '';
      this.loadDateInfo();
      this.loadApprovers();
    });
  }

  onDateChange(): void {
    this.loadDateInfo();
    this.loadApprovers();
  }

  onTimeChange(): void {
    this.calcDuration();
  }

  onMealCheckChange(): void {
    this.calcDuration();
  }

  submit(): void {
    const t = (key: string, fallback: string) => this.i18n.t(key, fallback);
    if (!this.applyDate) { this.message.warning(t('essOt.msg.selectDate', 'Vui lòng chọn ngày tăng ca.')); return; }
    if (!this.personId) { this.message.warning(t('essOt.msg.empNotLoaded', 'Chưa tải thông tin nhân viên.')); return; }
    if (!this.otFromTime || !this.otToTime) { this.message.warning(t('essOt.msg.enterTime', 'Vui lòng nhập thời gian tăng ca.')); return; }
    if (this.otToTime <= this.otFromTime) { this.message.warning(t('essOt.msg.endAfterStart', 'Thời gian kết thúc phải sau thời gian bắt đầu.')); return; }
    if (this.duration() === '--') { this.message.warning(t('essOt.msg.invalidDuration', 'Thời lượng không hợp lệ.')); return; }
    if (!this.otTypeCode) { this.message.warning(t('essOt.msg.otTypeMissing', 'Chưa xác định loại tăng ca. Vui lòng chọn lại ngày tăng ca.')); return; }

    const otApplyHour = this.otLength > 0 ? String(this.otLength) : '0';
    if (this.otLength <= 0) { this.message.warning(t('essOt.msg.hoursMustBePositive', 'Số giờ tăng ca phải lớn hơn 0.')); return; }

    if (this.otLimitEnabled() && this.otLength + this.otTotalMonth() > OT_LIMIT_MONTH_HOURS) {
      this.message.warning(
        t('essOt.msg.monthLimitExceeded', 'Tổng tăng ca tháng này sẽ là {0}h, vượt quá giới hạn {1}h!')
          .replace('{0}', (this.otLength + this.otTotalMonth()).toFixed(1))
          .replace('{1}', String(OT_LIMIT_MONTH_HOURS)),
      );
      return;
    }
    if (this.otLimit100Enabled() && this.otLength + this.otTotalYear() > OT_LIMIT_YEAR_HOURS) {
      this.message.warning(
        t('essOt.msg.yearLimitExceeded', 'Tổng tăng ca năm nay sẽ là {0}h, vượt quá giới hạn {1}h!')
          .replace('{0}', (this.otLength + this.otTotalYear()).toFixed(1))
          .replace('{1}', String(OT_LIMIT_YEAR_HOURS)),
      );
      return;
    }

    this.submitting.set(true);
    this.api
      .save({
        applyNo: '',
        personId: this.personId,
        localName: this.localName,
        empId: this.empId,
        otTypeNo: '31',
        otTypeCode: this.otTypeCode,
        applyOtDate: this.formatYmd(this.applyDate),
        otFromTime: this.formatDt(this.otFromTime),
        otToTime: this.formatDt(this.otToTime),
        otApplyHour,
        applyOtRemark: this.reason,
        deductYn: this.mealCheck ? '1' : '0',
      })
      .subscribe({
        next: (res) => {
          this.submitting.set(false);
          if (res?.success) {
            this.message.success(res.message || t('essOt.msg.submitSuccess', 'Xin tăng ca thành công!'));
            this.resetForm();
          } else {
            this.message.error(res?.error || t('essOt.msg.submitError', 'Lỗi khi gửi đơn!'));
          }
        },
        error: () => {
          this.submitting.set(false);
          this.message.error(t('essOt.msg.submitConnError', 'Lỗi kết nối khi gửi đơn!'));
        },
      });
  }

  private resetForm(): void {
    this.applyDate = null;
    this.otFromTime = null;
    this.otToTime = null;
    this.reason = '';
    this.mealCheck = false;
    this.clearDateInfo();
    this.calcDuration();
    this.approversLoaded.set(false);
    this.approvers.set([]);
  }

  private loadDateInfo(): void {
    if (!this.applyDate) return;
    this.shiftName.set(this.i18n.t('essOt.msg.loading', 'Đang tải...'));
    this.workTimeText.set('');
    this.indoorTime.set('**:**');
    this.outdoorTime.set('**:**');
    this.otTypeName.set('...');
    this.otTypeCode = '';

    this.api.getOtDateInfo(this.formatYmd(this.applyDate)).subscribe({
      next: (d) => {
        if (!d) { this.clearDateInfo(); return; }

        this.shiftName.set(d.SHIFT_NAME || '--');
        const shiftStart = this.extractTime(d.SHIFT_START_TIME);
        const shiftEnd = this.extractTime(d.SHIFT_END_TIME);
        this.workTimeText.set(shiftStart && shiftEnd ? `${shiftStart}~${shiftEnd}` : '--');
        this.indoorTime.set(d.INDOOR_TIME || '**:**');
        this.outdoorTime.set(d.OUTDOOR_TIME || '**:**');

        this.otTypeCode = String(d.OT_TYPE_CODE || '');
        this.otTypeName.set(d.OT_TYPE_NAME || '--');

        const shiftStartDt = this.parseDt(d.SHIFT_START_TIME);
        const shiftEndDt = this.parseDt(d.SHIFT_END_TIME);
        if (this.otTypeCode === OT_TYPE_HOLIDAY) {
          if (shiftEndDt) {
            this.otFromTime = shiftEndDt;
            this.otToTime = new Date(shiftEndDt.getTime() + 2 * 3600000);
          }
        } else {
          if (shiftStartDt) this.otFromTime = shiftStartDt;
          if (shiftEndDt) this.otToTime = shiftEndDt;
        }

        this.otTotalMonth.set(Number(d.OT_TOTAIL_MONTH) || 0);
        this.otWeekdayTotal.set(Number(d.WEEKDAY_OT_TOTAIL) || 0);
        this.otTotalYear.set(Number(d.OT_TOTAIL) || 0);
        this.otLimitEnabled.set(String(d.OT_LIMIT) === '1');
        this.otLimit100Enabled.set(String(d.OT_LIMIT_100) === '1');

        this.calcDuration();
      },
      error: () => this.clearDateInfo(),
    });
  }

  private clearDateInfo(): void {
    this.shiftName.set('--');
    this.workTimeText.set('--');
    this.indoorTime.set('**:**');
    this.outdoorTime.set('**:**');
    this.otTypeName.set('--');
    this.otTypeCode = '';
    this.otTotalMonth.set(0);
    this.otWeekdayTotal.set(0);
    this.otTotalYear.set(0);
    this.otLimitEnabled.set(false);
    this.otLimit100Enabled.set(false);
    this.otLength = 0;
  }

  private loadApprovers(): void {
    if (!this.personId) return;
    this.approversLoading.set(true);
    this.approversLoaded.set(false);
    const diff = this.otFromTime && this.otToTime && this.otToTime > this.otFromTime
      ? (this.otToTime.getTime() - this.otFromTime.getTime()) / 3600000
      : 0;
    this.api.getApprovers(this.personId, this.otTypeCode, String(diff)).subscribe({
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

  private calcDuration(): void {
    if (!this.applyDate || !this.otFromTime || !this.otToTime) {
      this.otLength = 0;
      this.duration.set('--');
      return;
    }
    this.api
      .getOtDuration(this.formatYmd(this.applyDate), this.formatDt(this.otFromTime), this.formatDt(this.otToTime), this.mealCheck ? '1' : '0')
      .subscribe({
        next: (res) => {
          const len = res?.OT_LENGTH != null ? parseFloat(String(res.OT_LENGTH)) : 0;
          this.otLength = isNaN(len) ? 0 : len;
          this.duration.set(this.otLength > 0 ? `${this.otLength} h` : '--');
        },
        error: () => {
          this.otLength = 0;
          this.duration.set('--');
        },
      });
  }

  /** Trích xuất HH:mm từ chuỗi "yyyy-MM-dd HH:mm" hoặc "HH:mm" - đúng soaExtractTime() bản gốc. */
  private extractTime(value: string | undefined): string {
    if (!value) return '';
    const idx = value.indexOf(' ');
    return idx > -1 ? value.substring(idx + 1) : value;
  }

  /** Parse 'yyyy-MM-dd HH:mm[:ss]' về Date - trả null nếu chuỗi rỗng/không hợp lệ. */
  private parseDt(value: string | undefined): Date | null {
    if (!value) return null;
    const normalized = value.trim().replace('T', ' ');
    const match = normalized.match(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})/);
    if (!match) return null;
    const [, y, mo, d, h, mi] = match;
    return new Date(Number(y), Number(mo) - 1, Number(d), Number(h), Number(mi));
  }

  private formatYmd(d: Date | null): string {
    return d ? formatDate(d, 'yyyy-MM-dd', 'vi') : '';
  }

  private formatDt(d: Date | null): string {
    return d ? formatDate(d, 'yyyy-MM-dd HH:mm', 'vi') : '';
  }
}
