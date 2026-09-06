import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { AuthService } from '../auth/auth.service';
import { AuthDeptNode, CodeItem, EmployeeSearchDto } from '../change-user/change-user.model';
import { ChangeUserService } from '../change-user/change-user.service';
import { ArEmpCalenderDto, EmpCalendarDayCell, EmpCalendarSavePayload, ShiftOption } from './view-emp-calendar.model';
import { ViewEmpCalendarService } from './view-emp-calendar.service';

/** Các key message.properties dùng trong trang này - phần lớn tái dùng namespace esscal.x (đã có sẵn
 *  cho EssViewEmpCalendarComponent, cùng 1 lưới lịch), addShift.x/arSupervisor.x/empSearch.x cho form
 *  Ca làm việc/Loại ngày và popup tìm nhân viên (đã có sẵn từ AddEmpShiftComponent/
 *  ViewAttendanceKeeperComponent), cộng 2 key mới thuộc namespace empCal.x (đã seed sẵn cho đúng trang
 *  này) - đã bổ sung vào messages.properties/messages_vi_VN.properties. */
const I18N_KEYS = [
  'esscal.nav.prevMonth', 'esscal.nav.nextMonth',
  'esscal.legend.workDay', 'esscal.legend.restDay', 'esscal.legend.holiday', 'esscal.legend.today',
  'esscal.msg.loading', 'esscal.msg.noCalData', 'esscal.msg.loadError',
  'esscal.status.holiday', 'esscal.status.rest', 'esscal.status.work',
  'esscal.status.weekend', 'esscal.status.weekday', 'esscal.status.holidayStar', 'esscal.status.adminShift',
  'common.month.01', 'common.month.02', 'common.month.03', 'common.month.04',
  'common.month.05', 'common.month.06', 'common.month.07', 'common.month.08',
  'common.month.09', 'common.month.10', 'common.month.11', 'common.month.12',
  'common.day.sun', 'common.day.mon', 'common.day.tue', 'common.day.wed',
  'common.day.thu', 'common.day.fri', 'common.day.sat',
  'button.search',
  'common.date', 'common.remark', 'common.close', 'common.save', 'common.saveSuccess', 'common.saveFail',
  'common.loadFail', 'common.empId', 'common.empName', 'common.deptName', 'common.selectAll',
  'addShift.shift', 'addShift.dayType', 'addShift.selectShift',
  'arSupervisor.field.emp', 'arSupervisor.placeholder.selectEmp', 'arSupervisor.btn.select',
  'empCal.searchTitle', 'empCal.modalTitle', 'empCal.viewMyCalendar', 'empCal.msg.invalidData',
  'empSearch.title', 'empSearch.field.keyword', 'empSearch.placeholder.keyword', 'empSearch.field.dept',
  'empSearch.field.empOffice', 'empSearch.btn.clearFilter', 'empSearch.col.no', 'epi.field.position',
  'vdp.search.dept.placeholder', 'mep.msg.loadDeptFailed',
];

const MONTH_KEYS = [
  'common.month.01', 'common.month.02', 'common.month.03', 'common.month.04',
  'common.month.05', 'common.month.06', 'common.month.07', 'common.month.08',
  'common.month.09', 'common.month.10', 'common.month.11', 'common.month.12',
];

const YEAR_RANGE = 5;
const EMP_OFFICE_PARENT_CODE = '15118';
const DAY_TYPE_PARENT_CODE = '1439';

interface DayForm {
  arDateStr: string;
  personId: string;
  empDisplay: string;
  dateDisplay: string;
  shiftNo: string | null;
  typeid: string | null;
  remark: string;
}

/**
 * Bản Angular của ar/attendanceSettings/viewEmpCalendar.html (Thymeleaf + jQuery) - trang lịch làm
 * việc tháng dạng lưới 7 cột cho HR admin xem/sửa lịch của BẤT KỲ nhân viên nào (khác bản ESS chỉ xem
 * lịch của chính mình). Gọi lại nguyên API JSON đã có sẵn ở ArCalenderController (xem
 * ViewEmpCalendarService) - không đổi backend, kể cả logic phân quyền resolvePersonIdForRequest/
 * resolvePersonIdForWrite (chỉ ADMIN/SYS mới xem/sửa được lịch người khác - user thường sẽ tự động bị
 * BE ép về lịch của chính mình dù có personId khác trong request). Kiến trúc lưới lịch (buildWeeks,
 * cấu trúc tuần/ô) và CSS port nguyên từ EssViewEmpCalendarComponent (đổi tiền tố .essvc-* thành
 * .vec-* để tránh trùng lặp class - xem CLAUDE.md) - bản này bật hrmMode thật (luôn true, khác cờ giữ
 * chỗ hrmMode=false ở bản ESS) và bổ sung: (1) toolbar chọn nhân viên bất kỳ dùng lại đúng pattern +
 * service của ChangeUserComponent (searchEmployees/getAuthorizedDepartments/getCodeList, tham khảo
 * ViewAttendanceKeeperComponent) thay cho EmployeeSearchModal, mặc định là nhân viên đang đăng nhập lấy
 * từ AuthService.currentUser() (thay vì model attribute defaultPersonId Thymeleaf server-render); (2)
 * modal click-ngày mở thật (không còn ẩn) với các trường Ca làm việc/Loại ngày/Ghi chú nối vào 2 API
 * detail/save vốn ESS không gọi tới. Combo Loại ngày (data-parent-code="1439" ở bản gốc) tái dùng
 * ChangeUserService.getCodeList, giống combo Trạng thái làm việc trong popup tìm nhân viên.
 *
 * Payload lưu gửi field "arDateStr" (không phải "ddateStr" như bản gốc) - xem giải thích lỗi ở
 * EmpCalendarSavePayload trong view-emp-calendar.model.ts: bản Thymeleaf gốc gửi sai tên field khiến
 * API save luôn no-op âm thầm dù vẫn báo thành công; sửa lại đúng tên field BE thực sự đọc
 * (ArCalenderServiceImpl.saveEmpCalendarDay dùng dto.getArDateStr()).
 */
@Component({
  selector: 'app-view-emp-calendar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    NzSelectModule,
    NzInputModule,
    NzModalModule,
    NzAlertModule,
    NzTreeSelectModule,
    NzTableModule,
    TranslatePipe,
  ],
  templateUrl: './view-emp-calendar.component.html',
  styleUrl: './view-emp-calendar.component.css',
})
export class ViewEmpCalendarComponent implements OnInit {
  readonly monthKeys = MONTH_KEYS;
  readonly monthOptions = Array.from({ length: 12 }, (_, i) => i + 1);
  readonly yearOptions = this.buildYearOptions();

  readonly weeks = signal<EmpCalendarDayCell[][]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly emptyMessage = signal<string | null>(null);
  readonly shiftOptions = signal<ShiftOption[]>([]);
  readonly dayTypeOptions = signal<CodeItem[]>([]);

  selectedMonth = new Date().getMonth() + 1;
  selectedYear = new Date().getFullYear();

  personId = '';
  empDisplay = '';
  private defaultPersonId = '';
  private defaultEmpDisplay = '';

  readonly modalVisible = signal(false);
  readonly saving = signal(false);
  form: DayForm = { arDateStr: '', personId: '', empDisplay: '', dateDisplay: '', shiftNo: null, typeid: null, remark: '' };

  // ==================== Popup tìm kiếm nhân viên (tái dùng pattern ChangeUserComponent) ====================
  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly empOfficeOptions = signal<CodeItem[]>([]);
  readonly deptTreeErrorMessage = signal<string | null>(null);
  readonly pickerVisible = signal(false);
  readonly pickerRows = signal<EmployeeSearchDto[]>([]);
  readonly pickerLoading = signal(false);
  readonly pickerErrorMessage = signal<string | null>(null);
  pickerKeyword = '';
  pickerDeptNos: string[] = [];
  pickerEmpOffice: string | null = null;
  private deptChildrenMap = new Map<string, string[]>();

  constructor(
    private readonly api: ViewEmpCalendarService,
    private readonly empApi: ChangeUserService,
    private readonly auth: AuthService,
    readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);

    const user = this.auth.currentUser();
    this.defaultPersonId = user?.personId ?? '';
    this.defaultEmpDisplay = user?.employeeName ?? '';
    this.personId = this.defaultPersonId;
    this.empDisplay = this.defaultEmpDisplay;

    this.api.getShiftList().subscribe((list) => this.shiftOptions.set(list ?? []));
    this.empApi.getCodeList(DAY_TYPE_PARENT_CODE).subscribe((list) => this.dayTypeOptions.set(list ?? []));
    this.empApi.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(this.buildPickerDeptTree(list ?? [])),
      error: () =>
        this.deptTreeErrorMessage.set(this.i18n.t('mep.msg.loadDeptFailed', 'Lỗi khi tải danh sách phòng ban')),
    });
    this.empApi.getCodeList(EMP_OFFICE_PARENT_CODE).subscribe((list) => this.empOfficeOptions.set(list ?? []));

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

  viewMyCalendar(): void {
    this.personId = this.defaultPersonId;
    this.empDisplay = this.defaultEmpDisplay;
    this.loadMonth();
  }

  statusKey(cell: EmpCalendarDayCell): string {
    if (cell.isHoliday) return 'esscal.status.holiday';
    if (cell.isRest) return 'esscal.status.rest';
    return 'esscal.status.work';
  }

  shiftLabel(cell: EmpCalendarDayCell): string {
    const rec = cell.record;
    return rec?.shiftName || rec?.shiftNo || this.i18n.t('esscal.status.adminShift', 'Ca hành chính');
  }

  private loadMonth(): void {
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

  private buildWeeks(records: ArEmpCalenderDto[]): EmpCalendarDayCell[][] {
    if (!records.length) return [];

    const today = new Date();
    const todayKey = `${today.getFullYear()}/${String(today.getMonth() + 1).padStart(2, '0')}/${String(today.getDate()).padStart(2, '0')}`;

    const firstKey = (records[0].ddateStr || records[0].ddateFormatted || '').replace(/-/g, '/');
    const [fy, fm, fd] = firstKey.split('/').map(Number);
    const firstDow = new Date(fy, fm - 1, fd).getDay();

    const cells: EmpCalendarDayCell[] = [];
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

    const weeks: EmpCalendarDayCell[][] = [];
    for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
    return weeks;
  }

  private buildYearOptions(): number[] {
    const cur = new Date().getFullYear();
    const years: number[] = [];
    for (let y = cur - YEAR_RANGE; y <= cur + YEAR_RANGE; y++) years.push(y);
    return years;
  }

  // ==================== Modal Cập nhật ngày ====================

  dayClick(cell: EmpCalendarDayCell): void {
    if (cell.isEmpty) return;
    const [y, m, d] = cell.dateKey.split('/');
    this.form = {
      arDateStr: cell.dateKey,
      personId: this.personId,
      empDisplay: this.empDisplay || this.i18n.t('empCal.viewMyCalendar', 'Xem lịch của bản thân'),
      dateDisplay: `${d}/${m}/${y}`,
      shiftNo: null,
      typeid: null,
      remark: '',
    };
    this.api.getEmpScheduleDetail(cell.dateKey, this.personId).subscribe({
      next: (d) => {
        if (d) {
          this.form.shiftNo = d.shiftNo || null;
          this.form.typeid = d.typeid || null;
          this.form.remark = d.remark || '';
        }
        this.modalVisible.set(true);
      },
      error: () => this.modalVisible.set(true),
    });
  }

  closeModal(): void {
    this.modalVisible.set(false);
  }

  get modalTitle(): string {
    const prefix = this.i18n.t('empCal.modalTitle', 'Cài đặt lịch');
    return `${prefix} — ${this.form.dateDisplay} / ${this.form.empDisplay}`;
  }

  saveForm(): void {
    if (!this.form.arDateStr || !this.form.personId) {
      this.message.warning(this.i18n.t('empCal.msg.invalidData', 'Dữ liệu không hợp lệ!'));
      return;
    }
    const payload: EmpCalendarSavePayload = {
      arDateStr: this.form.arDateStr,
      personId: this.form.personId,
      shiftNo: this.form.shiftNo,
      typeid: this.form.typeid,
      remark: this.form.remark,
    };
    this.saving.set(true);
    this.api.saveEmpCalendarDay(payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        if (!res.success) {
          this.message.error(res.error || this.i18n.t('common.saveFail', 'Lưu thất bại!'));
          return;
        }
        this.modalVisible.set(false);
        this.message.success(res.message || this.i18n.t('common.saveSuccess', 'Lưu thành công!'));
        this.loadMonth();
      },
      error: (err) => {
        this.saving.set(false);
        this.message.error(err?.error?.error || this.i18n.t('common.saveFail', 'Lưu thất bại!'));
      },
    });
  }

  // ==================== Popup tìm kiếm nhân viên ====================

  openPicker(): void {
    this.pickerKeyword = '';
    this.pickerDeptNos = [];
    this.pickerEmpOffice = null;
    this.pickerVisible.set(true);
    this.pickerSearch();
  }

  closePicker(): void {
    this.pickerVisible.set(false);
  }

  pickerSearch(): void {
    this.pickerLoading.set(true);
    this.pickerErrorMessage.set(null);
    this.empApi
      .searchEmployees({
        keyword: this.pickerKeyword.trim(),
        deptCodes: this.expandDeptSelection(this.pickerDeptNos),
        empOffice: this.pickerEmpOffice ?? '',
      })
      .subscribe({
        next: (rows) => {
          this.pickerRows.set(rows ?? []);
          this.pickerLoading.set(false);
        },
        error: () => {
          this.pickerErrorMessage.set(this.i18n.t('common.loadFail', 'Tải dữ liệu thất bại!'));
          this.pickerRows.set([]);
          this.pickerLoading.set(false);
        },
      });
  }

  pickerClear(): void {
    this.pickerKeyword = '';
    this.pickerDeptNos = [];
    this.pickerEmpOffice = null;
    this.pickerSearch();
  }

  selectEmployee(row: EmployeeSearchDto): void {
    this.personId = row.personId;
    this.empDisplay = `${row.empId} - ${row.localName}`;
    this.pickerVisible.set(false);
    this.loadMonth();
  }

  private buildPickerDeptTree(list: AuthDeptNode[]): NzTreeNodeOptions[] {
    const map = new Map<string, NzTreeNodeOptions & { parent: string }>();
    list.forEach((d) => map.set(d.id, { title: d.text, key: d.id, parent: d.parent, children: [] }));

    this.deptChildrenMap = new Map<string, string[]>();
    const roots: NzTreeNodeOptions[] = [];
    map.forEach((node) => {
      if (node.parent && node.parent !== '0' && map.has(node.parent)) {
        map.get(node.parent)!.children!.push(node);
        const siblings = this.deptChildrenMap.get(node.parent) ?? [];
        siblings.push(node.key);
        this.deptChildrenMap.set(node.parent, siblings);
      } else {
        roots.push(node);
      }
    });

    const markLeaf = (nodes: NzTreeNodeOptions[]) => {
      nodes.forEach((n) => {
        n.isLeaf = !n.children || n.children.length === 0;
        if (n.children?.length) markLeaf(n.children);
      });
    };
    markLeaf(roots);
    return roots;
  }

  private expandDeptSelection(selected: string[]): string[] {
    const result = new Set<string>();
    const stack = [...selected];
    while (stack.length) {
      const id = stack.pop()!;
      if (result.has(id)) continue;
      result.add(id);
      const children = this.deptChildrenMap.get(id);
      if (children) stack.push(...children);
    }
    return Array.from(result);
  }
}
