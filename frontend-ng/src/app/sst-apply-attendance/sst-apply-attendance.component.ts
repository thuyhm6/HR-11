import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { ApproverInfo, CodeItem, EssBasicInfoDto, VacationInfoMap } from './sst-apply-attendance.model';
import { SstApplyAttendanceService } from './sst-apply-attendance.service';

/** Key gốc của viewSSTApplyAttendance.jsp (đã có đủ 5 file properties) + key card thông tin NV đang dùng chung. */
const I18N_KEYS = [
  'essEmpCard.localName', 'essEmpCard.empId', 'essEmpCard.deptName', 'essEmpCard.headDept',
  'essEmpCard.postFamily', 'essEmpCard.postGrade', 'essEmpCard.positionName', 'essEmpCard.dateStarted',
  'ess.infoApply.attendance_type', 'hr.viewCondSql.title.QINGXUANZE', 'ess.infoApply.title.startTime', 'ess.infoApply.end_time',
  'ar.viewArAdjustRest.title.APPLYLENGTH', 'ess.infoApply.Reason', 'ess.infoApply.title.apply',
  'ar.viewitemparameter.title.dayofunit', 'ar.viewitemparameter.title.xiaoshi',
  'ess.infoApply.nianjiazongtianshu', 'ar.viewVacEmpList.SHENGCHENGNIANJIA.b', 'ar.viewVacEmpList.YINIANNIANJIA.b',
  'ar.viewVacEmpList.TESHUNIANJIA.b', 'ar.viewArAdjustRest.title.DAYSUSEED', 'ar.viewArAdjustRest.title.shengyutianshu',
  'hrm.recruitManage.ATTACHED_FILE', 'public.title.delete', 'hr.viewBadArchives.title.FILE',
  'sys.affirm.title.affirmPerson', 'hr.enpinfo.title.EMP.EMPNUMBER', 'hr.viewPersonalInfo.title.DEPTNAME', 'hrm.contract.POSITION_NO',
  'ess.infoApplyAttendance.PLEASE_ATTENDANCE_SDATE.Z', 'ess.infoApplyAttendance.ATTENDANCE_LONGER_THAN_0.Z',
  'ess.infoApplyAttendance.PLEASE_ATTENDANCE_EDATE.Z', 'ess.infoApplyAttendance.PLEASE_ATTENDANCE_TYPE.Z',
  'ess.infoApplyAttendance.ATTENDANCE_SDATE_THAN_EDATE.Z', 'alert.message.GERENHUNJIAZUIDUOSANTIAN.b',
  'alert.message.CHANJIAZUIDUOYIBAIBASHITIAN.b', 'alert.message.YOUXINSANGJIAZUIDUOSANTIAN.b',
  'alert.message.ess.infoApply.applyTimeCanNotLessThanMinValue', 'alert.message.pleaseFirstSetRuler.b',
  'ess.message.confirm_sava', 'alert.message.save_success', 'alert.message.add_fail', 'js.upload.msg.firstSelectDelete',
];

/** Giờ 00..23, phút theo đúng <select fromTime_fen> bản gốc. */
const HOURS = Array.from({ length: 24 }, (_, h) => String(h).padStart(2, '0'));
const MINUTES = ['00', '02', '10', '15', '17', '30', '32', '45', '47'];
/** Phép năm - chỉ khi chọn loại này mới hiện thông tin phép năm. */
const LEAVE_ANNUAL = '26';
/** Loại nghỉ chỉ dành cho nam/nữ - kiểm tra giới tính khi chọn (getLeaveDateSST bản gốc). */
const GENDER_CHECK_TYPES = ['27', '16415', '28', '482'];
/** Các loại nghỉ chỉ được xin tròn ngày. */
const FULL_DAY_LEAVE_TYPES = ['27', '482', '15821', '14013816', '25', '14015956', '14015957'];

interface AttachItem {
  file: File;
  checked: boolean;
}

/**
 * Xin nghỉ phép cá nhân - bản Angular của ess/infoApplyAttendance/viewSSTApplyAttendance.jsp (Hanwha_HTSV).
 * Chọn loại nghỉ, ngày + giờ + phút bắt đầu/kết thúc, xem thời lượng, tuyến duyệt dự kiến, đính kèm file rồi
 * "Xin phép". Lưu qua /ess/infoApplyAttendance/api/sstApply/save (dùng lại EssLeaveApplyService.saveLeaveApply).
 *
 * Khác biệt cố ý: kiểm tra trùng lịch / chốt công / phép năm (AR_GET_LEAVE_CLASH) chạy ở server nên chặn được
 * thật sự (bản gốc gọi ajax bất đồng bộ); phần thêm/xóa người duyệt thủ công chỉ dành cho công ty HAE ở bản gốc
 * nên không đưa vào.
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
    NzCheckboxModule,
    NzModalModule,
    TranslatePipe,
  ],
  templateUrl: './sst-apply-attendance.component.html',
  styleUrl: './sst-apply-attendance.component.css',
})
export class SstApplyAttendanceComponent implements OnInit {
  readonly hours = HOURS;
  readonly minutes = MINUTES;
  readonly LEAVE_ANNUAL = LEAVE_ANNUAL;

  readonly basicInfo = signal<EssBasicInfoDto | null>(null);
  readonly leaveTypeOptions = signal<CodeItem[]>([]);
  readonly vacInfo = signal<VacationInfoMap | null>(null);
  readonly approvers = signal<ApproverInfo[]>([]);
  readonly approversLoading = signal(false);
  readonly durationText = signal('');
  readonly submitting = signal(false);
  readonly attachments = signal<AttachItem[]>([]);

  leaveTypeCode: string | null = null;
  fromDate: Date | null = null;
  fromHour = '08';
  fromMinute = '00';
  toDate: Date | null = null;
  toHour = '17';
  toMinute = '00';
  reason = '';

  /** Số giờ nghỉ (APPLY_LENGTH), số giờ / ngày công và số ngày quy đổi (shenqingshichang / dayHour / shenchangFormatHour). */
  private applyLength = 8;
  private dayHour = 8;
  private lengthDays = 1;
  private personId = '';
  private localName = '';

  constructor(
    private readonly api: SstApplyAttendanceService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.resetTimes();
    this.api.getCodeList('21').subscribe({ next: (list) => this.leaveTypeOptions.set(list ?? []), error: () => undefined });
    this.api.getVacationInfo().subscribe({ next: (data) => this.vacInfo.set(data), error: () => undefined });
    this.api.getBasicInfo().subscribe((data) => {
      this.basicInfo.set(data);
      this.personId = data?.personId || '';
      this.localName = data?.localName || '';
      this.loadApprovers();
    });
  }

  private t(key: string, fallback: string): string {
    return this.i18n.t(key, fallback);
  }

  private showError(msg: string): void {
    this.message.error(msg, { nzDuration: 6000 });
  }

  /** Thông tin phép năm (chỉ hiện khi chọn phép năm) - đúng div view_vac_sub bản gốc. */
  vacText(): string {
    const d = this.vacInfo();
    if (!d) return '';
    const v = (x: string | number | undefined) => (x !== null && x !== undefined && x !== '' ? x : '0');
    const remain = d.REMAIN_VAC !== undefined && d.REMAIN_VAC !== '' ? d.REMAIN_VAC : (Number(d.TOT_VAC_CNT) || 0) - (Number(d.USE_VAC) || 0);
    return `${this.t('ess.infoApply.nianjiazongtianshu', 'Tổng phép năm')}:${v(d.TOT_VAC_CNT)}/ `
      + `${this.t('ar.viewVacEmpList.SHENGCHENGNIANJIA.b', 'Tạo phép năm')}:${v(d.YEAR_VAC_CNT)}/ `
      + `${this.t('ar.viewVacEmpList.YINIANNIANJIA.b', 'Còn lại năm ngoái')}:${v(d.LAST_YEAR_VAC)}/ `
      + `${this.t('ar.viewVacEmpList.TESHUNIANJIA.b', 'Đặc biệt')}:${v(d.ADD_VAC)}/ `
      + `${this.t('ar.viewArAdjustRest.title.DAYSUSEED', 'Số ngày đã sử dụng')}:${v(d.USE_VAC)}/ `
      + `${this.t('ar.viewArAdjustRest.title.shengyutianshu', 'Số ngày còn lại')}:${remain}`;
  }

  // ==================== Loại nghỉ / thời gian ====================

  onLeaveTypeChange(value: string | null): void {
    this.leaveTypeCode = value;
    if (value && GENDER_CHECK_TYPES.includes(value)) {
      this.api.checkLeaveType(value).subscribe({
        next: (res) => {
          if (res && !res.success) {
            this.showError(res.error || '');
            this.leaveTypeCode = null;
          }
          this.calcLength();
        },
        error: () => this.calcLength(),
      });
      return;
    }
    this.calcLength();
  }

  onTimeChange(): void {
    this.calcLength();
  }

  /**
   * Tính thời lượng - đúng callength() bản gốc: thời gian kết thúc không sau thời gian bắt đầu thì tự đặt ngày
   * kết thúc = ngày bắt đầu; hiển thị "x Ngày y Tiếng"; sau đó tải lại tuyến duyệt (getAffirmor).
   */
  private calcLength(): void {
    if (!this.fromDate) return;
    if (!this.toDate || this.compose(this.toDate, this.toHour, this.toMinute) <= this.compose(this.fromDate, this.fromHour, this.fromMinute)) {
      this.toDate = this.fromDate;
    }
    const from = this.formatDt(this.fromDate, this.fromHour, this.fromMinute);
    const to = this.formatDt(this.toDate, this.toHour, this.toMinute);
    this.api.getLeaveLength(from, to, this.leaveTypeCode || '').subscribe({
      next: (res) => {
        const length = Number(res?.LEAVE_LENGTH) || 0;
        const dayHour = Number(res?.DAY_HOUR) || 0;
        this.applyLength = length;
        this.dayHour = dayHour;
        this.lengthDays = dayHour ? length / dayHour : 0;
        const dayLabel = this.t('ar.viewitemparameter.title.dayofunit', 'Ngày');
        const hourLabel = this.t('ar.viewitemparameter.title.xiaoshi', 'Tiếng');
        let text = '';
        if (dayHour) {
          const days = Math.floor(length / dayHour);
          if (days > 0) text += `${days} ${dayLabel}`;
          const rest = Number((length % dayHour).toFixed(1));
          if (rest > 0) text += `${text ? ' ' : ''}${rest} ${hourLabel}`;
        }
        this.durationText.set(text || `0 ${hourLabel}`);
        this.loadApprovers();
      },
      error: () => this.loadApprovers(),
    });
  }

  /** Tuyến duyệt dự kiến theo loại nghỉ + thời lượng (viewAffirmorList bản gốc). */
  private loadApprovers(): void {
    if (!this.personId) return;
    this.approversLoading.set(true);
    this.api.getApprovers(this.personId, this.leaveTypeCode || '', String(this.applyLength)).subscribe({
      next: (list) => {
        this.approvers.set((list ?? []).filter((item) => String(item.affirmLevel) !== '0'));
        this.approversLoading.set(false);
      },
      error: () => {
        this.approvers.set([]);
        this.approversLoading.set(false);
      },
    });
  }

  // ==================== File đính kèm ====================

  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = Array.from(input.files ?? []);
    input.value = '';
    if (!files.length) return;
    this.attachments.update((list) => [...list, ...files.map((file) => ({ file, checked: false }))]);
  }

  removeCheckedFiles(): void {
    if (!this.attachments().some((a) => a.checked)) {
      this.message.warning(this.t('js.upload.msg.firstSelectDelete', 'Xin chọn file cần xóa'));
      return;
    }
    this.attachments.update((list) => list.filter((a) => !a.checked));
  }

  // ==================== Xin phép ====================

  submit(): void {
    const error = this.validate();
    if (error) {
      this.showError(error);
      return;
    }
    this.modal.confirm({
      nzTitle: this.t('ess.infoApply.title.apply', 'Xin phép'),
      nzContent: this.t('ess.message.confirm_sava', 'Đồng ý lưu không?'),
      nzOnOk: () => this.doSubmit(),
    });
  }

  /** Các kiểm tra của nút lưu bản gốc (theo đúng thứ tự). */
  private validate(): string | null {
    const type = this.leaveTypeCode ?? '';
    if (!this.fromDate) return this.t('ess.infoApplyAttendance.PLEASE_ATTENDANCE_SDATE.Z', 'Xin chọn thời gian bắt đầu nghỉ phép!');
    if (!this.applyLength) return this.t('ess.infoApplyAttendance.ATTENDANCE_LONGER_THAN_0.Z', 'Thời gian nghỉ phép phải lớn hơn 0');
    if (!this.toDate) return this.t('ess.infoApplyAttendance.PLEASE_ATTENDANCE_EDATE.Z', 'Xin chọn thời gian kết thúc');
    if (!type) return this.t('ess.infoApplyAttendance.PLEASE_ATTENDANCE_TYPE.Z', 'Xin chọn loại nghỉ phép');
    if (this.compose(this.toDate, this.toHour, this.toMinute) <= this.compose(this.fromDate, this.fromHour, this.fromMinute)) {
      return this.t('ess.infoApplyAttendance.ATTENDANCE_SDATE_THAN_EDATE.Z', 'Thời gian kết thúc không được sớm hơn thời gian bắt đầu');
    }
    const minMsg = this.t('alert.message.ess.infoApply.applyTimeCanNotLessThanMinValue', 'Thời lượng xin phép không được nhỏ hơn giá trị nhỏ nhất.!');
    if (type === '22' && this.lengthDays > 3) return this.t('alert.message.GERENHUNJIAZUIDUOSANTIAN.b', 'Nghỉ kết hôn tối đa 3 ngày!');
    if (type === '27' && this.lengthDays > 180) return this.t('alert.message.CHANJIAZUIDUOYIBAIBASHITIAN.b', 'Nghỉ thai sản tối đa 180 ngày!');
    if (FULL_DAY_LEAVE_TYPES.includes(type) && this.dayHour && this.dayHour !== 7.67 && this.applyLength % this.dayHour !== 0) return minMsg;
    if (type === '23' && this.lengthDays > 3) return this.t('alert.message.YOUXINSANGJIAZUIDUOSANTIAN.b', 'Nghỉ hiếu có lương tối đa 3 ngày!');
    if (type === LEAVE_ANNUAL && this.dayHour && this.dayHour !== 7.67 && this.applyLength % (this.dayHour / 2) !== 0) return minMsg;
    if (!this.approvers().length) return this.t('alert.message.pleaseFirstSetRuler.b', 'Xin thiết lập người duyệt');
    return null;
  }

  private doSubmit(): void {
    this.submitting.set(true);
    const payload = {
      applyNo: '',
      personId: this.personId,
      localName: this.localName,
      leaveTypeCode: this.leaveTypeCode,
      leaveFromTime: this.formatDt(this.fromDate, this.fromHour, this.fromMinute),
      leaveToTime: this.formatDt(this.toDate, this.toHour, this.toMinute),
      applyLength: String(this.applyLength),
      leaveReason: this.reason,
    };
    this.api.save(payload, this.attachments().map((a) => a.file)).subscribe({
      next: (res) => {
        this.submitting.set(false);
        if (res?.success) {
          this.message.success(res.message || this.t('alert.message.save_success', 'Lưu thành công!'));
          this.resetForm();
        } else {
          this.showError(res?.error || this.t('alert.message.add_fail', 'Thêm thất bại!'));
        }
      },
      error: () => {
        this.submitting.set(false);
        this.showError(this.t('alert.message.add_fail', 'Thêm thất bại!'));
      },
    });
  }

  private resetForm(): void {
    this.leaveTypeCode = null;
    this.reason = '';
    this.attachments.set([]);
    this.resetTimes();
    this.loadApprovers();
  }

  /** Mặc định hôm nay 08:00 - 17:00, thời lượng "1 Ngày" - đúng giá trị khởi tạo form bản gốc. */
  private resetTimes(): void {
    const today = new Date();
    this.fromDate = today;
    this.toDate = today;
    this.fromHour = '08';
    this.fromMinute = '00';
    this.toHour = '17';
    this.toMinute = '00';
    this.applyLength = 8;
    this.dayHour = 8;
    this.lengthDays = 1;
    this.durationText.set(`1 ${this.t('ar.viewitemparameter.title.dayofunit', 'Ngày')}`);
  }

  private compose(date: Date, hour: string, minute: string): number {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), Number(hour), Number(minute)).getTime();
  }

  private formatDt(date: Date | null, hour: string, minute: string): string {
    return date ? `${formatDate(date, 'yyyy-MM-dd', 'vi')} ${hour}:${minute}` : '';
  }
}
