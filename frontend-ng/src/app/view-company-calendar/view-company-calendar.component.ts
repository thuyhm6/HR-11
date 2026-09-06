import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { ArShift010Dto, CodeItem } from '../view-class-calendar/view-class-calendar.model';
import { ArCalenderDto, CompanyCalendarDayCell, CompanyCalendarEditForm } from './view-company-calendar.model';
import { ViewCompanyCalendarService } from './view-company-calendar.service';

/** TYPE_CODE (data-parent-code="1439" bản gốc) - dùng cho 3 combo TypeID/OvertypeID/TypeID mặc định,
 *  cùng danh mục với ViewClassCalendarComponent (trang chị em cùng dữ liệu lịch). */
const TYPE_PARENT_CODE = '1439';

const YEAR_RANGE = 5;

/** Các key message.properties dùng trong trang này - dùng lại nguyên namespace cccal.* đã có sẵn đầy
 *  đủ ở cả 5 locale (chuẩn bị chung cho các trang lịch dạng lưới, đã dùng ở ViewClassCalendarComponent),
 *  cộng một số key companyCal.* riêng cho khái niệm "Ngày lễ pháp định" (statutoryFlag) - đã bổ sung
 *  vào en/ko/zh/mặc định (xem messages_vi_VN.properties). Tải trước 1 lần ở ngOnInit. */
const I18N_KEYS = [
  'cccal.btn.prevMonth', 'cccal.btn.nextMonth', 'cccal.btn.search', 'cccal.btn.addNew', 'cccal.btn.close', 'cccal.btn.save',
  'cccal.month.1', 'cccal.month.2', 'cccal.month.3', 'cccal.month.4', 'cccal.month.5', 'cccal.month.6',
  'cccal.month.7', 'cccal.month.8', 'cccal.month.9', 'cccal.month.10', 'cccal.month.11', 'cccal.month.12',
  'cccal.day.sun', 'cccal.day.mon', 'cccal.day.tue', 'cccal.day.wed', 'cccal.day.thu', 'cccal.day.fri', 'cccal.day.sat',
  'cccal.legend.workday', 'cccal.legend.restday', 'cccal.legend.today',
  'cccal.modal.editTitle', 'cccal.label.workdayflag', 'cccal.option.restday', 'cccal.option.workday',
  'cccal.label.shiftNo', 'cccal.label.typeidDefault', 'cccal.label.typeid', 'cccal.label.overtypeid',
  'cccal.label.operationId', 'cccal.label.orderno', 'cccal.label.activity', 'cccal.option.active', 'cccal.option.inactive',
  'cccal.status.work', 'cccal.status.rest', 'cccal.tag.weekend',
  'cccal.msg.invalidData', 'cccal.msg.error', 'cccal.msg.unknownError',
  'common.noData', 'common.addNew', 'common.no', 'shl.description',
  'companyCal.statutoryFlag', 'companyCal.statutory', 'companyCal.dayOff', 'companyCal.loadFail',
  'companyCal.saveSuccess', 'companyCal.saveFail',
];

const EMPTY_EDIT_FORM: CompanyCalendarEditForm = {
  ddateStr: '', workdayflag: 0, shiftNo: null, typeid: null, overtypeid: null, typeidDefault: null,
  statutoryFlag: 0, operationId: null, orderno: 0, remark: null, activity: 1,
};

/**
 * Bản Angular của ar/attendanceSettings/viewCompanyCalendar.html (Thymeleaf + jQuery, tự inject CSS
 * runtime) - lịch làm việc công ty dạng lưới 7 cột theo tháng (bảng AR_CALENDER, 1 dòng/ngày). Đây KHÔNG
 * phải trang danh sách dạng bảng nên không dùng nz-table (đúng bản chất giao diện gốc là lưới lịch, xem
 * ViewClassCalendarComponent - trang chị em cùng kiểu lịch lưới AR_CALENDER_GROUP đã migrate trước; tái
 * dùng nguyên cấu trúc CSS .vcc-* và các type ArShift010Dto/CodeItem/pattern combo code của trang đó).
 * Gọi lại nguyên API JSON đã có sẵn ở ArCalenderController (xem ViewCompanyCalendarService) - không đổi
 * backend; dùng chung 2 endpoint .../holidays/detail và .../holidays/save với
 * ViewStatutoryHolidaysComponent (cùng bảng AR_CALENDER) vì bản gốc cũng dùng đúng 2 API đó cho việc
 * sửa 1 ngày. Khác ViewClassCalendarComponent (modal Thêm riêng theo khoảng ngày, gọi thủ tục batch),
 * trang này dùng đúng 1 modal chung cho cả Thêm mới và Cập nhật 1 ngày, giống bản gốc.
 */
@Component({
  selector: 'app-view-company-calendar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzSelectModule,
    NzInputModule,
    NzInputNumberModule,
    NzModalModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './view-company-calendar.component.html',
  styleUrl: './view-company-calendar.component.css',
})
export class ViewCompanyCalendarComponent implements OnInit {
  readonly monthKeys = ['cccal.month.1', 'cccal.month.2', 'cccal.month.3', 'cccal.month.4', 'cccal.month.5', 'cccal.month.6',
    'cccal.month.7', 'cccal.month.8', 'cccal.month.9', 'cccal.month.10', 'cccal.month.11', 'cccal.month.12'];
  readonly monthOptions = Array.from({ length: 12 }, (_, i) => i + 1);
  readonly yearOptions = this.buildYearOptions();

  readonly weeks = signal<CompanyCalendarDayCell[][]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  readonly shiftOptions = signal<ArShift010Dto[]>([]);
  readonly typeOptions = signal<CodeItem[]>([]);

  selectedMonth = new Date().getMonth() + 1;
  selectedYear = new Date().getFullYear();

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  readonly isNew = signal(true);
  readonly modalTitle = computed(() => {
    const [y, m, d] = (this.editForm.ddateStr || '').split('/');
    const display = y && m && d ? `${d}/${m}/${y}` : '';
    return `${this.isNew() ? this.i18n.t('common.addNew', 'Thêm mới') : this.i18n.t('cccal.modal.editTitle', 'Cập nhật ngày')} — ${display}`;
  });
  editForm: CompanyCalendarEditForm = { ...EMPTY_EDIT_FORM };

  constructor(
    private readonly api: ViewCompanyCalendarService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getCodeList(TYPE_PARENT_CODE).subscribe((list) => this.typeOptions.set(list ?? []));
    this.api.getShiftList().subscribe((list) => this.shiftOptions.set(list ?? []));
    this.loadMonth();
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

  shiftLabel(shiftNo: string | null | undefined): string {
    if (!shiftNo) return '';
    const shift = this.shiftOptions().find((s) => s.shiftNo === shiftNo);
    return shift?.nameVi || shiftNo;
  }

  dayClick(cell: CompanyCalendarDayCell): void {
    if (cell.isEmpty) return;
    this.openModal(cell.dateKey, cell.item);
  }

  // ==================== Modal Thêm mới / Cập nhật 1 ngày ====================

  openAddModal(): void {
    const t = new Date();
    const key = `${t.getFullYear()}/${String(t.getMonth() + 1).padStart(2, '0')}/${String(t.getDate()).padStart(2, '0')}`;
    this.openModal(key, null);
  }

  private openModal(ddateStr: string, existing: ArCalenderDto | null): void {
    if (existing) {
      this.isNew.set(false);
      this.editForm = {
        ddateStr,
        workdayflag: existing.workdayflag ?? 0,
        shiftNo: existing.shiftNo || null,
        typeid: existing.typeid || null,
        overtypeid: existing.overtypeid || null,
        typeidDefault: existing.typeidDefault || null,
        statutoryFlag: existing.statutoryFlag ?? 0,
        operationId: existing.operationId || null,
        orderno: existing.orderno ?? 0,
        remark: existing.remark || null,
        activity: existing.activity ?? 1,
      };
      this.modalVisible.set(true);
      return;
    }

    // Bấm chọn 1 ngày chưa có dữ liệu, hoặc "Thêm mới" - vẫn thử tải chi tiết trước (giống fillModal()
    // bản gốc: gọi API .../holidays/detail, lỗi/không có thì mới dùng mặc định theo thứ trong tuần).
    this.api.getDayDetail(ddateStr).subscribe({
      next: (data) => this.openModal(ddateStr, data),
      error: () => {
        this.isNew.set(true);
        const [y, m, d] = ddateStr.split('/').map(Number);
        const dow = new Date(y, m - 1, d).getDay();
        this.editForm = { ...EMPTY_EDIT_FORM, ddateStr, workdayflag: dow === 0 || dow === 6 ? 0 : 1 };
        this.modalVisible.set(true);
      },
    });
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  saveDay(): void {
    const f = this.editForm;
    if (!f.ddateStr) {
      this.message.warning(this.i18n.t('cccal.msg.invalidData', 'Dữ liệu không hợp lệ!'));
      return;
    }
    const payload: Partial<ArCalenderDto> = {
      ddateStr: f.ddateStr,
      workdayflag: Number(f.workdayflag) || 0,
      shiftNo: f.shiftNo || null,
      typeid: f.typeid || null,
      overtypeid: f.overtypeid || null,
      typeidDefault: f.typeidDefault || null,
      statutoryFlag: Number(f.statutoryFlag) || 0,
      operationId: f.operationId || null,
      orderno: Number(f.orderno) || 0,
      remark: f.remark || null,
      activity: Number(f.activity) || 1,
    };
    this.saving.set(true);
    this.api.saveDay(payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        if (res.success) {
          this.message.success(res.message || this.i18n.t('companyCal.saveSuccess', 'Lưu lịch công ty thành công!'));
          this.modalVisible.set(false);
          this.loadMonth();
        } else {
          this.message.error(res.error || this.i18n.t('companyCal.saveFail', 'Lưu lịch công ty thất bại!'));
        }
      },
      error: (err) => {
        this.saving.set(false);
        const msg = err?.error?.error || this.i18n.t('cccal.msg.unknownError', 'Lỗi không xác định');
        this.message.error(`${this.i18n.t('cccal.msg.error', 'Lỗi!')} ${msg}`);
      },
    });
  }

  // ==================== Data loading ====================

  private loadMonth(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getMonth(this.selectedYear, this.selectedMonth).subscribe({
      next: (records) => {
        this.weeks.set(this.buildWeeks(records ?? []));
        this.loading.set(false);
      },
      error: () => {
        this.weeks.set([]);
        this.errorMessage.set(this.i18n.t('companyCal.loadFail', 'Tải lịch công ty thất bại!'));
        this.loading.set(false);
      },
    });
  }

  /** Dựng lưới 7 cột từ danh sách phẳng do backend trả về - cùng thuật toán với renderCalendar() trong
   *  bản Thymeleaf gốc: chèn ô rỗng trước ngày đầu tiên theo đúng thứ trong tuần, sau đó chia đều 7
   *  ô/hàng. Mỗi ngày AR_CALENDER chỉ có 1 dòng (khác lịch nhóm ca có thể nhiều dòng/ngày). */
  private buildWeeks(records: ArCalenderDto[]): CompanyCalendarDayCell[][] {
    if (!records.length) return [];

    const sorted = [...records].sort((a, b) => (a.ddateStr || '').localeCompare(b.ddateStr || ''));
    const today = new Date();
    const todayKey = `${today.getFullYear()}/${String(today.getMonth() + 1).padStart(2, '0')}/${String(today.getDate()).padStart(2, '0')}`;

    const [fy, fm, fd] = (sorted[0].ddateStr || '').split('/').map(Number);
    const firstDow = new Date(fy, fm - 1, fd).getDay();

    const cells: CompanyCalendarDayCell[] = [];
    const emptyCell = (): CompanyCalendarDayCell => ({
      item: null, dateKey: '', day: 0, isEmpty: true, isToday: false, isSunday: false, isSaturday: false,
      isWeekend: false, hasWork: false, isStatutory: false,
    });
    for (let i = 0; i < firstDow; i++) cells.push(emptyCell());

    sorted.forEach((rec, idx) => {
      const key = rec.ddateStr || '';
      const day = parseInt(key.split('/')[2], 10);
      const dow = (firstDow + idx) % 7;
      const isSunday = dow === 0;
      const isSaturday = dow === 6;
      cells.push({
        item: rec,
        dateKey: key,
        day,
        isEmpty: false,
        isToday: key === todayKey,
        isSunday,
        isSaturday,
        isWeekend: isSunday || isSaturday,
        hasWork: rec.workdayflag === 1,
        isStatutory: rec.statutoryFlag === 1,
      });
    });

    while (cells.length % 7 !== 0) cells.push(emptyCell());

    const weeks: CompanyCalendarDayCell[][] = [];
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
