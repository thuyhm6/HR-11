import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { ArEmpCalenderDto, EssCalendarDayCell } from './ess-view-emp-calendar.model';
import { EssViewEmpCalendarService } from './ess-view-emp-calendar.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'esscal.nav.prevMonth', 'esscal.nav.nextMonth',
  'esscal.legend.workDay', 'esscal.legend.restDay', 'esscal.legend.holiday', 'esscal.legend.today',
  'esscal.msg.loading', 'esscal.msg.loadError', 'esscal.msg.noCalData', 'esscal.msg.empNotFound',
  'esscal.msg.loadEmpFailed',
  'esscal.status.holiday', 'esscal.status.rest', 'esscal.status.work',
  'esscal.status.weekend', 'esscal.status.weekday', 'esscal.status.holidayStar', 'esscal.status.adminShift',
  'esscal.modal.dayDetail',
  'common.month.01', 'common.month.02', 'common.month.03', 'common.month.04',
  'common.month.05', 'common.month.06', 'common.month.07', 'common.month.08',
  'common.month.09', 'common.month.10', 'common.month.11', 'common.month.12',
  'common.day.sun', 'common.day.mon', 'common.day.tue', 'common.day.wed',
  'common.day.thu', 'common.day.fri', 'common.day.sat',
  'button.search',
  'common.date', 'common.status', 'common.shift', 'common.type', 'common.remark',
];

const MONTH_KEYS = [
  'common.month.01', 'common.month.02', 'common.month.03', 'common.month.04',
  'common.month.05', 'common.month.06', 'common.month.07', 'common.month.08',
  'common.month.09', 'common.month.10', 'common.month.11', 'common.month.12',
];

const YEAR_RANGE = 5;

/**
 * Bản Angular của ess/viewDept/viewEmpCalendar.html (Thymeleaf + jQuery) - trang lịch làm việc tháng
 * dạng lưới 7 cột (không phải bảng danh sách nên không dùng nz-table), gọi lại nguyên các API JSON
 * đã có sẵn (xem EssViewEmpCalendarService) - không đổi backend. Luôn xem lịch của chính nhân viên
 * đang đăng nhập (personId lấy qua /ess/empinfo/api/personalInfo/myInfo), không có picker chọn nhân
 * viên khác như bản HRM gốc (/ar/attendanceSettings/viewEmpCalendar).
 *
 * Modal chi tiết ngày (click vào 1 ô) được giữ lại trong code nhưng luôn ẩn (hrmMode = false) vì
 * trang ESS chỉ xem lịch của chính mình, giống hệt cách bản Thymeleaf gốc khoá click bằng CSS khi
 * sysMode !== 'hrm' - để dành sẵn nếu sau này cần dùng chung component cho 1 trang HRM.
 */
@Component({
  selector: 'app-ess-view-emp-calendar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzSelectModule,
    NzModalModule,
    NzAlertModule,
    NzDescriptionsModule,
    TranslatePipe,
  ],
  templateUrl: './ess-view-emp-calendar.component.html',
  styleUrl: './ess-view-emp-calendar.component.css',
})
export class EssViewEmpCalendarComponent implements OnInit {
  readonly monthKeys = MONTH_KEYS;
  readonly monthOptions = Array.from({ length: 12 }, (_, i) => i + 1);
  readonly yearOptions = this.buildYearOptions();

  /** Trang ESS chỉ xem, không sửa - modal chi tiết ngày luôn ẩn (xem giải thích ở JSDoc component). */
  readonly hrmMode = false;

  readonly weeks = signal<EssCalendarDayCell[][]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly emptyMessage = signal<string | null>(null);

  readonly detailVisible = signal(false);
  readonly detailCell = signal<EssCalendarDayCell | null>(null);

  selectedMonth = new Date().getMonth() + 1;
  selectedYear = new Date().getFullYear();

  private personId = '';

  constructor(
    private readonly api: EssViewEmpCalendarService,
    private readonly i18n: I18nService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadMyInfo();
  }

  prevMonth(): void {
    if (--this.selectedMonth < 1) { this.selectedMonth = 12; this.selectedYear--; }
    this.loadMonth();
  }

  nextMonth(): void {
    if (++this.selectedMonth > 12) { this.selectedMonth = 1; this.selectedYear++; }
    this.loadMonth();
  }

  search(): void {
    this.loadMonth();
  }

  dayClick(cell: EssCalendarDayCell): void {
    if (!this.hrmMode || cell.isEmpty) return;
    this.detailCell.set(cell);
    this.detailVisible.set(true);
  }

  closeDetail(): void {
    this.detailVisible.set(false);
  }

  statusKey(cell: EssCalendarDayCell): string {
    if (cell.isHoliday) return 'esscal.status.holiday';
    if (cell.isRest) return 'esscal.status.rest';
    return 'esscal.status.work';
  }

  shiftLabel(cell: EssCalendarDayCell): string {
    const rec = cell.record;
    return rec?.shiftName || rec?.shiftNo || this.i18n.t('esscal.status.adminShift', 'Ca hành chính');
  }

  private loadMyInfo(): void {
    this.api.getMyInfo().subscribe({
      next: (info) => {
        if (!info?.personId) {
          this.errorMessage.set(this.i18n.t('esscal.msg.empNotFound', 'Không tìm thấy thông tin nhân viên.'));
          return;
        }
        this.personId = info.personId;
        this.loadMonth();
      },
      error: () => this.errorMessage.set(this.i18n.t('esscal.msg.loadEmpFailed', 'Không lấy được thông tin nhân viên!')),
    });
  }

  private loadMonth(): void {
    if (!this.personId) return;
    this.loading.set(true);
    this.errorMessage.set(null);
    this.emptyMessage.set(null);
    this.api.getEmpCalendarMonth(this.selectedYear, this.selectedMonth, this.personId).subscribe({
      next: (records) => {
        this.weeks.set(this.buildWeeks(records ?? []));
        if (!records || records.length === 0) {
          this.emptyMessage.set(this.i18n.t('esscal.msg.noCalData', 'Không có dữ liệu lịch trong tháng này.'));
        }
        this.loading.set(false);
      },
      error: () => {
        this.weeks.set([]);
        this.errorMessage.set(this.i18n.t('esscal.msg.loadError', 'Lỗi tải lịch!'));
        this.loading.set(false);
      },
    });
  }

  /** Dựng lưới 7 cột từ danh sách ngày phẳng do backend trả về - cùng thuật toán với esscalRender()
   *  trong bản Thymeleaf gốc: chèn ô rỗng trước ngày 1 theo đúng thứ trong tuần, sau đó chia đều 7
   *  ô/hàng theo thứ tự liên tiếp của records (giả định backend luôn trả đủ, không thiếu ngày). */
  private buildWeeks(records: ArEmpCalenderDto[]): EssCalendarDayCell[][] {
    if (!records.length) return [];

    const today = new Date();
    const todayKey = `${today.getFullYear()}/${String(today.getMonth() + 1).padStart(2, '0')}/${String(today.getDate()).padStart(2, '0')}`;

    const firstKey = (records[0].ddateStr || records[0].ddateFormatted || '').replace(/-/g, '/');
    const [fy, fm, fd] = firstKey.split('/').map(Number);
    const firstDow = new Date(fy, fm - 1, fd).getDay();

    const cells: EssCalendarDayCell[] = [];
    for (let i = 0; i < firstDow; i++) {
      cells.push({ record: null, dateKey: '', day: 0, isEmpty: true, isToday: false, isSunday: false, isSaturday: false, isWeekend: false, isRest: false, isHoliday: false });
    }

    records.forEach((rec, idx) => {
      const key = (rec.ddateStr || rec.ddateFormatted || '').replace(/-/g, '/');
      const parts = key.split('/');
      const day = parseInt(parts[2], 10);
      const dow = (firstDow + idx) % 7;
      const isSunday = dow === 0;
      const isSaturday = dow === 6;
      cells.push({
        record: rec,
        dateKey: key,
        day,
        isEmpty: false,
        isToday: key === todayKey,
        isSunday,
        isSaturday,
        isWeekend: isSunday || isSaturday,
        isRest: rec.workdayflag === 0,
        isHoliday: rec.statutoryFlag === 1,
      });
    });

    while (cells.length % 7 !== 0) {
      cells.push({ record: null, dateKey: '', day: 0, isEmpty: true, isToday: false, isSunday: false, isSaturday: false, isWeekend: false, isRest: false, isHoliday: false });
    }

    const weeks: EssCalendarDayCell[][] = [];
    for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
    return weeks;
  }

  private buildYearOptions(): number[] {
    const cur = new Date().getFullYear();
    const years: number[] = [];
    for (let y = cur - YEAR_RANGE; y <= cur + YEAR_RANGE; y++) years.push(y);
    return years;
  }
}
