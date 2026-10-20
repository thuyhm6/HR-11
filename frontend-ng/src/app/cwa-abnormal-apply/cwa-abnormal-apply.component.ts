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
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzCardModule } from 'ng-zorro-antd/card';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { CwaAbnormalApplyService } from './cwa-abnormal-apply.service';
import { AttendanceExApplyItem, CwaAbnormalDisplayRow, EssBasicInfoDto, EssCwaAbnormalDto } from './cwa-abnormal-apply.model';
import { AttendanceExBatchInfoService } from '../attendance-ex-batch-info/attendance-ex-batch-info.service';
import { PAGE_SIZE_OPTIONS } from '../shared/table.constants';

/** Key gốc của viewShowCwaAbnormalApply.jsp (đã có đủ 5 file properties) + key card thông tin NV dùng chung. */
const I18N_KEYS = [
  'essEmpCard.localName', 'essEmpCard.empId', 'essEmpCard.deptName', 'essEmpCard.headDept',
  'essEmpCard.postFamily', 'essEmpCard.postGrade', 'essEmpCard.positionName', 'essEmpCard.dateStarted',
  'ar.viewcycleparameter.title.kaishiriqi', 'ar.viewcycleparameter.title.jieshuriqi', 'button.search',
  'ess.infoApply.in_door_card', 'ess.infoApply.out_door_card', 'ess.message.all_reaction', 'ess.infoApply.title.apply',
  'ess.infoApply.yichangleixing', 'ess.infoApply.attendance_date', 'ess.infoApply.card_clock_time',
  'ess.infoApply.time_quantum', 'ess.infoApply.Reason', 'ess.infoApply.juecaizheliebiao',
  'ess.infoApply.PLEASE_SELECT_OPERTE.Z', 'ess.infoApply.PLEASE_SELECT_CORRECT_TIME.Z',
  'ar.alert.message.viewArAnnualStandard.consubmit', 'alert.message.abnormalAttendanceApplySuccess.b',
  'alert.message.abnormalAttendanceApplyFail.b', 'common.loadFail', 'common.totalRows',
];

/** Giờ 00..23 và các mốc phút ô "Thực hiện tất cả" - đúng <select fromTime_shi / fromTime_fen> bản gốc. */
const HOURS = Array.from({ length: 24 }, (_, h) => String(h).padStart(2, '0'));
const BULK_MINUTES = ['00', '02', '15', '17', '30', '32', '45', '47'];
/** Giờ quẹt thẻ thiếu hiển thị '**:**' - không gửi làm FROM/TO (đúng điều kiện ne '**:**' bản gốc). */
const NO_SWIPE = '**:**';

/**
 * Xin xác nhận chấm công bất thường của chính nhân viên - bản Angular của ess/infoApply/viewShowCwaAbnormalApply.jsp
 * (Hanwha_HTSV). Danh sách đi muộn/về sớm/quên quẹt thẻ/nghỉ không phép chưa xin phép trong kỳ; nhập giờ vào/ra
 * thực tế (ngày + giờ + phút) và lý do rồi "Xin phép". Lưu qua EssInfoApplyAttendanceController /api/attendanceEx/apply
 * (cùng nghiệp vụ addCwaAbnormalApply bản gốc: xóa bất thường, ghi ESS_CARD_APPLY_TB, tạo tuyến duyệt 218197).
 *
 * Khác biệt cố ý: kiểm tra chốt công (AR_GET_ATT_EX_CLASH) chạy ở server nên chặn được thật sự (bản gốc gọi ajax
 * bất đồng bộ); tuyến duyệt dự kiến lấy 1 lần thay vì gọi đồng bộ từng dòng.
 */
@Component({
  selector: 'app-cwa-abnormal-apply',
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
    NzAlertModule,
    NzCardModule,
    TranslatePipe,
  ],
  templateUrl: './cwa-abnormal-apply.component.html',
  styleUrl: './cwa-abnormal-apply.component.css',
})
export class CwaAbnormalApplyComponent implements OnInit {
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly hours = HOURS;
  readonly bulkMinutes = BULK_MINUTES;

  readonly basicInfo = signal<EssBasicInfoDto | null>(null);
  readonly rows = signal<CwaAbnormalDisplayRow[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly submitting = signal(false);

  startDate: Date | null = null;
  endDate: Date | null = null;

  // "Thực hiện tất cả" - mặc định 08:00 / 17:00 đúng bản gốc
  bulkInDate: Date | null = null;
  bulkInHour = '08';
  bulkInMinute = '00';
  bulkOutDate: Date | null = null;
  bulkOutHour = '17';
  bulkOutMinute = '00';

  private personId = '';
  private localName = '';
  private empId = '';

  constructor(
    private readonly api: CwaAbnormalApplyService,
    private readonly exApi: AttendanceExBatchInfoService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
    private readonly modal: NzModalService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    // Mặc định cả tháng hiện tại - đúng viewShowCwaAbnormalApply bản gốc
    const now = new Date();
    this.startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    this.endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    this.api.getBasicInfo().subscribe((data) => {
      this.basicInfo.set(data);
      this.personId = data?.personId || '';
      this.localName = data?.localName || '';
      this.empId = data?.empId || '';
      this.search();
    });
  }

  private t(key: string, fallback: string): string {
    return this.i18n.t(key, fallback);
  }

  private showError(msg: string): void {
    this.message.error(msg, { nzDuration: 6000 });
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getList({ startDate: this.formatDmy(this.startDate), endDate: this.formatDmy(this.endDate) }).subscribe({
      next: (list) => {
        const rows = (list ?? []).map((r) => this.toRow(r));
        this.rows.set(rows);
        this.loading.set(false);
        this.loadAffirmors(rows);
      },
      error: () => {
        this.errorMessage.set(this.t('common.loadFail', 'Tải dữ liệu thất bại!'));
        this.rows.set([]);
        this.loading.set(false);
      },
    });
  }

  private toRow(r: EssCwaAbnormalDto): CwaAbnormalDisplayRow {
    return {
      ...r,
      selected: false,
      inDate: this.parseDmy(r.shiftStartYyyy),
      inHour: '',
      inMinute: '',
      outDate: this.parseDmy(r.shiftEndYyyy),
      outHour: '',
      outMinute: '',
      remark: '',
      affirmStr: '',
    };
  }

  /** Tuyến duyệt dự kiến (getAffirmor_Ex bản gốc) - mọi dòng cùng là của người đăng nhập. */
  private loadAffirmors(rows: CwaAbnormalDisplayRow[]): void {
    const personIds = Array.from(new Set(rows.map((r) => r.personId || this.personId).filter((id) => !!id)));
    if (!personIds.length) return;
    this.exApi.getAffirmorPreview(personIds).subscribe({
      next: (map) => {
        rows.forEach((r) => (r.affirmStr = map?.[r.personId || this.personId] ?? ''));
        this.rows.set([...rows]);
      },
      error: () => undefined,
    });
  }

  trackByRow = (_: number, row: CwaAbnormalDisplayRow): string => row.pkNo;

  canSelect(row: CwaAbnormalDisplayRow): boolean {
    return row.lockYn === 'N';
  }

  private selectableRows(): CwaAbnormalDisplayRow[] {
    return this.rows().filter((r) => this.canSelect(r));
  }

  get allSelected(): boolean {
    const rows = this.selectableRows();
    return rows.length > 0 && rows.every((r) => r.selected);
  }

  get someSelected(): boolean {
    return this.selectableRows().some((r) => r.selected) && !this.allSelected;
  }

  toggleSelectAll(checked: boolean): void {
    this.selectableRows().forEach((r) => (r.selected = checked));
  }

  /** Chỉ cho nhập số trong giới hạn (giờ 0-23, phút 0-59) - đúng class "digits" min/max bản gốc. */
  normalizeNumber(value: string, max: number): string {
    const digits = (value ?? '').replace(/\D/g, '').slice(0, 2);
    if (!digits) return '';
    return Number(digits) > max ? String(max) : digits;
  }

  /** Áp ngày + giờ vào/ra cho các dòng đã tick - đúng nút check_all bản gốc. */
  fillSelected(): void {
    const selected = this.rows().filter((r) => r.selected);
    if (!selected.length) {
      this.showError(this.t('ess.infoApply.PLEASE_SELECT_OPERTE.Z', 'Xin chọn đối tượng cần thực hiện'));
      return;
    }
    selected.forEach((row) => {
      row.inDate = this.bulkInDate;
      row.inHour = this.bulkInHour;
      row.inMinute = this.bulkInMinute;
      row.outDate = this.bulkOutDate;
      row.outHour = this.bulkOutHour;
      row.outMinute = this.bulkOutMinute;
    });
    this.rows.set([...this.rows()]);
  }

  // ==================== Xin phép ====================

  submit(): void {
    const selected = this.rows().filter((r) => r.selected && this.canSelect(r));
    if (!selected.length) {
      this.showError(this.t('ess.infoApply.PLEASE_SELECT_OPERTE.Z', 'Xin chọn đối tượng cần thực hiện'));
      return;
    }
    for (const row of selected) {
      if (!row.inDate || row.inHour === '' || !row.outDate || row.outHour === '') {
        this.showError(this.t('ess.infoApply.PLEASE_SELECT_CORRECT_TIME.Z', 'Xin chọn thời gian chính xác'));
        return;
      }
    }
    this.modal.confirm({
      nzTitle: this.t('ess.infoApply.title.apply', 'Xin phép'),
      nzContent: this.t('ar.alert.message.viewArAnnualStandard.consubmit', 'Đồng ý lưu không?'),
      nzOnOk: () => this.doSubmit(selected),
    });
  }

  private doSubmit(selected: CwaAbnormalDisplayRow[]): void {
    const items: AttendanceExApplyItem[] = selected.map((row) => {
      const arDate = this.parseDmy(row.arDateStr);
      const arYmd = arDate ? formatDate(arDate, 'yyyy/MM/dd', 'vi') : '';
      return {
        applyNo: row.pkNo,
        personId: row.personId || this.personId,
        empId: row.empId || this.empId,
        localName: this.localName,
        itemNo: row.itemNo,
        arDateStr: arYmd,
        // FROM/TO = ngày công + giờ quẹt thẻ thực tế (bỏ trống nếu thiếu quẹt) - đúng addCwaAbnormalApply bản gốc
        fromDateTime: row.indoorTime && row.indoorTime !== NO_SWIPE ? `${arYmd} ${row.indoorTime}` : '',
        toDateTime: row.outdoorTime && row.outdoorTime !== NO_SWIPE ? `${arYmd} ${row.outdoorTime}` : '',
        inTime: this.composeDateTime(row.inDate, row.inHour, row.inMinute),
        outTime: this.composeDateTime(row.outDate, row.outHour, row.outMinute),
        workHour: '',
        remark: row.remark || '',
      };
    });
    this.submitting.set(true);
    this.api.submit(items).subscribe({
      next: (res) => {
        this.submitting.set(false);
        if (res?.success) {
          this.message.success(this.t('alert.message.abnormalAttendanceApplySuccess.b', 'Xin xác nhận quẹt thẻ thành công!'));
          this.search();
        } else {
          this.showError(res?.error || this.t('alert.message.abnormalAttendanceApplyFail.b', 'Xin xác nhận quẹt thẻ thất bại!'));
        }
      },
      error: () => {
        this.submitting.set(false);
        this.showError(this.t('alert.message.abnormalAttendanceApplyFail.b', 'Xin xác nhận quẹt thẻ thất bại!'));
      },
    });
  }

  // ==================== Helpers ngày giờ ====================

  private formatDmy(d: Date | null): string {
    return d ? formatDate(d, 'dd/MM/yyyy', 'vi') : '';
  }

  private composeDateTime(date: Date | null, hour: string, minute: string): string {
    if (!date) return '';
    return `${formatDate(date, 'yyyy/MM/dd', 'vi')} ${hour.padStart(2, '0')}:${(minute || '0').padStart(2, '0')}`;
  }

  /** Parse 'dd/MM/yyyy' (hoặc 'dd.MM.yyyy') về Date. */
  private parseDmy(value: string | null | undefined): Date | null {
    if (!value) return null;
    const match = value.trim().match(/^(\d{2})[/.](\d{2})[/.](\d{4})/);
    if (!match) return null;
    const [, d, mo, y] = match;
    return new Date(Number(y), Number(mo) - 1, Number(d));
  }
}
