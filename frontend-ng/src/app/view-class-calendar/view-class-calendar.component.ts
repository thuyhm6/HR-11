import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import {
  ArCalenderGroupDto,
  ArShift010Dto,
  ClassCalendarAddForm,
  ClassCalendarDayCell,
  ClassCalendarEditForm,
  CodeItem,
} from './view-class-calendar.model';
import { ViewClassCalendarService } from './view-class-calendar.service';

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'cccal.btn.prevMonth', 'cccal.btn.nextMonth', 'cccal.btn.search', 'cccal.btn.addNew', 'cccal.btn.close', 'cccal.btn.save',
  'cccal.month.1', 'cccal.month.2', 'cccal.month.3', 'cccal.month.4', 'cccal.month.5', 'cccal.month.6',
  'cccal.month.7', 'cccal.month.8', 'cccal.month.9', 'cccal.month.10', 'cccal.month.11', 'cccal.month.12',
  'cccal.day.sun', 'cccal.day.mon', 'cccal.day.tue', 'cccal.day.wed', 'cccal.day.thu', 'cccal.day.fri', 'cccal.day.sat',
  'cccal.legend.workday', 'cccal.legend.restday', 'cccal.legend.today',
  'cccal.modal.addTitle', 'cccal.modal.editTitle', 'cccal.modal.editTitlePrefix', 'cccal.modal.editTitleGroup',
  'cccal.label.fromDate', 'cccal.label.toDate', 'cccal.label.groupShift', 'cccal.select.chooseGroup',
  'cccal.label.workShift', 'cccal.label.restShift', 'cccal.label.workdayflag',
  'cccal.option.restday', 'cccal.option.workday', 'cccal.label.shiftNo', 'cccal.label.typeidDefault',
  'cccal.label.typeid', 'cccal.label.overtypeid', 'cccal.label.operationId',
  'cccal.label.orderno', 'cccal.label.activity', 'cccal.option.active', 'cccal.option.inactive',
  'cccal.msg.loadError', 'cccal.msg.noData', 'cccal.status.work', 'cccal.status.rest',
  'cccal.tag.weekend', 'cccal.tag.noData', 'cccal.msg.selectGroup', 'cccal.msg.requiredFields',
  'cccal.msg.addSuccess', 'cccal.msg.error', 'cccal.msg.connectionError', 'cccal.msg.notFound',
  'cccal.msg.invalidData', 'cccal.msg.saveSuccess', 'cccal.msg.unknownError',
];

/** Nhóm ca mặc định khi thanh lọc chưa chọn - giữ đúng fallback của bản Thymeleaf gốc (cccalLoad()). */
const DEFAULT_GROUP_ID = '400224';
/** GROUP_SHIFT_CODE (data-parent-code="400223" bản gốc) - nhóm ca cho combo lọc + combo trong modal thêm mới. */
const GROUP_SHIFT_PARENT_CODE = '400223';
/** TYPE_CODE (data-parent-code="1439" bản gốc) - dùng cho 3 combo TypeID/OvertypeID/TypeID mặc định. */
const TYPE_PARENT_CODE = '1439';

const YEAR_RANGE = 5;

const EMPTY_ADD_FORM: ClassCalendarAddForm = { dateRange: null, groupId: null, workShift: null, restShift: null };
const EMPTY_EDIT_FORM: ClassCalendarEditForm = {
  arDateStr: '', groupId: '', workdayflag: 0, shiftNo: null, typeid: null, overtypeid: null,
  typeidDefault: null, operationId: null, orderno: 0, activity: 1,
};

/**
 * Bản Angular của ar/attendanceSettings/viewClassCalendar.html (Thymeleaf + jQuery) - lịch làm việc
 * tháng theo Nhóm ca, dạng lưới 7 cột (không phải bảng danh sách nên không dùng nz-table, tham khảo
 * cùng cách làm với ess-view-emp-calendar - trang lịch song sinh đã migrate trước). Gọi lại nguyên
 * API JSON đã có sẵn ở ArCalenderController/ArShiftController (xem ViewClassCalendarService) - không
 * đổi backend. Khác với ess-view-emp-calendar (chỉ xem), trang này có đủ 2 modal sửa: Thêm mới theo
 * khoảng ngày (gọi thủ tục AR_ADD_CALENDER_DATE_BANCI_P) và Cập nhật 1 ngày.
 */
@Component({
  selector: 'app-view-class-calendar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzSelectModule,
    NzInputModule,
    NzInputNumberModule,
    NzDatePickerModule,
    NzModalModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './view-class-calendar.component.html',
  styleUrl: './view-class-calendar.component.css',
})
export class ViewClassCalendarComponent implements OnInit {
  readonly monthKeys = ['cccal.month.1', 'cccal.month.2', 'cccal.month.3', 'cccal.month.4', 'cccal.month.5', 'cccal.month.6',
    'cccal.month.7', 'cccal.month.8', 'cccal.month.9', 'cccal.month.10', 'cccal.month.11', 'cccal.month.12'];
  readonly monthOptions = Array.from({ length: 12 }, (_, i) => i + 1);
  readonly yearOptions = this.buildYearOptions();

  readonly weeks = signal<ClassCalendarDayCell[][]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly emptyMessage = signal<string | null>(null);

  readonly groupOptions = signal<CodeItem[]>([]);
  readonly shiftOptions = signal<ArShift010Dto[]>([]);
  readonly typeOptions = signal<CodeItem[]>([]);

  selectedMonth = new Date().getMonth() + 1;
  selectedYear = new Date().getFullYear();
  selectedGroupId: string | null = null;

  readonly addModalVisible = signal(false);
  readonly addSaving = signal(false);
  addForm: ClassCalendarAddForm = { ...EMPTY_ADD_FORM };

  readonly editModalVisible = signal(false);
  readonly editSaving = signal(false);
  readonly editModalTitle = signal('');
  editForm: ClassCalendarEditForm = { ...EMPTY_EDIT_FORM };

  constructor(
    private readonly api: ViewClassCalendarService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getCodeList(GROUP_SHIFT_PARENT_CODE).subscribe((list) => this.groupOptions.set(list ?? []));
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

  onGroupFilterChange(): void {
    this.loadMonth();
  }

  shiftLabel(shiftNo: string | null | undefined): string {
    if (!shiftNo) return '';
    const shift = this.shiftOptions().find((s) => s.shiftNo === shiftNo);
    return shift?.nameVi || shiftNo;
  }

  dayClick(cell: ClassCalendarDayCell): void {
    if (cell.isEmpty) return;
    const groupId = this.selectedGroupId || '';
    if (!groupId) {
      this.message.warning(this.i18n.t('cccal.msg.selectGroup', 'Vui lòng chọn Nhóm ca ở thanh lọc trước khi sửa!'));
      return;
    }
    this.openEditModal(cell.dateKey, groupId);
  }

  // ==================== Modal: Thêm mới (batch) ====================

  openAddModal(): void {
    this.addForm = { ...EMPTY_ADD_FORM };
    this.addModalVisible.set(true);
  }

  closeAddModal(): void {
    this.addModalVisible.set(false);
  }

  saveBatch(): void {
    const f = this.addForm;
    const start = f.dateRange?.[0] ?? null;
    const end = f.dateRange?.[1] ?? null;
    if (!start || !end || !f.groupId || !f.workShift || !f.restShift) {
      this.message.warning(this.i18n.t('cccal.msg.requiredFields', 'Vui lòng điền đủ thông tin bắt buộc!'));
      return;
    }
    this.addSaving.set(true);
    const startDate = formatDate(start, 'dd-MM-yyyy', 'vi');
    const endDate = formatDate(end, 'dd-MM-yyyy', 'vi');
    this.api.saveGroupCalendarBatch(startDate, endDate, f.groupId, f.workShift, f.restShift).subscribe({
      next: (res) => {
        this.addSaving.set(false);
        if (res?.success) {
          this.message.success(res.message || this.i18n.t('cccal.msg.addSuccess', 'Thêm mới thành công!'));
          this.addModalVisible.set(false);
          this.loadMonth();
        } else {
          this.message.error(res?.error || this.i18n.t('cccal.msg.error', 'Lỗi!'));
        }
      },
      error: () => {
        this.addSaving.set(false);
        this.message.error(this.i18n.t('cccal.msg.connectionError', 'Lỗi kết nối!'));
      },
    });
  }

  // ==================== Modal: Cập nhật 1 ngày ====================

  private openEditModal(dateStr: string, groupId: string): void {
    this.api.getGroupCalendarDetail(dateStr, groupId).subscribe({
      next: (item) => {
        if (!item) {
          this.message.warning(this.i18n.t('cccal.msg.notFound', 'Không tìm thấy dữ liệu!'));
          return;
        }
        const [y, m, d] = dateStr.split('/');
        const display = `${d}/${m}/${y}`;
        this.editModalTitle.set(
          `${this.i18n.t('cccal.modal.editTitlePrefix', 'Cập nhật — ')}${display}${this.i18n.t('cccal.modal.editTitleGroup', ' / Nhóm: ')}${item.groupName || item.groupId}`,
        );
        this.editForm = {
          arDateStr: item.arDateStr,
          groupId: item.groupId,
          workdayflag: item.workdayflag ?? 0,
          shiftNo: item.shiftNo || null,
          typeid: item.typeid || null,
          overtypeid: item.overtypeid || null,
          typeidDefault: item.typeidDefault || null,
          operationId: item.operationId || null,
          orderno: item.orderno ?? 0,
          activity: item.activity ?? 1,
        };
        this.editModalVisible.set(true);
      },
      error: () => this.message.error(this.i18n.t('cccal.msg.notFound', 'Không tìm thấy dữ liệu!')),
    });
  }

  closeEditModal(): void {
    this.editModalVisible.set(false);
  }

  saveEdit(): void {
    const f = this.editForm;
    if (!f.arDateStr) {
      this.message.warning(this.i18n.t('cccal.msg.invalidData', 'Dữ liệu không hợp lệ!'));
      return;
    }
    const payload: Partial<ArCalenderGroupDto> = {
      arDateStr: f.arDateStr,
      groupId: f.groupId,
      workdayflag: Number(f.workdayflag) || 0,
      shiftNo: f.shiftNo || null,
      typeid: f.typeid || null,
      overtypeid: f.overtypeid || null,
      typeidDefault: f.typeidDefault || null,
      operationId: f.operationId || null,
      orderno: Number(f.orderno) || 0,
      activity: Number(f.activity) || 1,
    };
    this.editSaving.set(true);
    this.api.saveGroupCalendarSingle(payload).subscribe({
      next: (res) => {
        this.editSaving.set(false);
        if (res?.success) {
          this.message.success(res.message || this.i18n.t('cccal.msg.saveSuccess', 'Lưu thành công!'));
          this.editModalVisible.set(false);
          this.loadMonth();
        } else {
          this.message.error(res?.error || this.i18n.t('cccal.msg.error', 'Lỗi!'));
        }
      },
      error: (err) => {
        this.editSaving.set(false);
        const msg = err?.error?.error || this.i18n.t('cccal.msg.unknownError', 'Lỗi không xác định');
        this.message.error(`${this.i18n.t('cccal.msg.error', 'Lỗi!')} ${msg}`);
      },
    });
  }

  // ==================== Data loading ====================

  private loadMonth(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.emptyMessage.set(null);
    const groupId = this.selectedGroupId || DEFAULT_GROUP_ID;
    this.api.getGroupCalendarMonth(this.selectedYear, this.selectedMonth, groupId).subscribe({
      next: (records) => {
        this.weeks.set(this.buildWeeks(records ?? []));
        if (!records || records.length === 0) {
          this.emptyMessage.set(this.i18n.t('cccal.msg.noData', 'Không có dữ liệu lịch nhóm ca trong khoảng thời gian này.'));
        }
        this.loading.set(false);
      },
      error: () => {
        this.weeks.set([]);
        this.errorMessage.set(this.i18n.t('cccal.msg.loadError', 'Lỗi tải lịch nhóm ca!'));
        this.loading.set(false);
      },
    });
  }

  /** Dựng lưới 7 cột từ danh sách phẳng do backend trả về - cùng thuật toán với cccalRender() trong
   *  bản Thymeleaf gốc: gom nhóm theo ngày (1 ngày có thể có nhiều dòng/nhiều ca), chèn ô rỗng trước
   *  ngày đầu tiên theo đúng thứ trong tuần, sau đó chia đều 7 ô/hàng theo thứ tự các ngày đã gom. */
  private buildWeeks(records: ArCalenderGroupDto[]): ClassCalendarDayCell[][] {
    if (!records.length) return [];

    const map = new Map<string, ArCalenderGroupDto[]>();
    records.forEach((r) => {
      const key = (r.arDateStr || '').replace(/-/g, '/');
      if (!key) return;
      const items = map.get(key) ?? [];
      items.push(r);
      map.set(key, items);
    });

    const dateKeys = Array.from(map.keys()).sort();
    if (!dateKeys.length) return [];

    const today = new Date();
    const todayKey = `${today.getFullYear()}/${String(today.getMonth() + 1).padStart(2, '0')}/${String(today.getDate()).padStart(2, '0')}`;

    const [fy, fm, fd] = dateKeys[0].split('/').map(Number);
    const firstDow = new Date(fy, fm - 1, fd).getDay();

    const cells: ClassCalendarDayCell[] = [];
    for (let i = 0; i < firstDow; i++) {
      cells.push({ items: [], dateKey: '', day: 0, isEmpty: true, isToday: false, isSunday: false, isSaturday: false, isWeekend: false, hasWork: false });
    }

    dateKeys.forEach((key, idx) => {
      const items = map.get(key) ?? [];
      const day = parseInt(key.split('/')[2], 10);
      const dow = (firstDow + idx) % 7;
      const isSunday = dow === 0;
      const isSaturday = dow === 6;
      const defaultWork = !(isSunday || isSaturday);
      const hasWork = items.length > 0 ? items.some((it) => it.workdayflag === 1) : defaultWork;
      cells.push({
        items,
        dateKey: key,
        day,
        isEmpty: false,
        isToday: key === todayKey,
        isSunday,
        isSaturday,
        isWeekend: isSunday || isSaturday,
        hasWork,
      });
    });

    while (cells.length % 7 !== 0) {
      cells.push({ items: [], dateKey: '', day: 0, isEmpty: true, isToday: false, isSunday: false, isSaturday: false, isWeekend: false, hasWork: false });
    }

    const weeks: ClassCalendarDayCell[][] = [];
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
