import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { ViewMonthDetailListService } from './view-month-detail-list.service';
import { AuthDeptNode, CodeItem, MonthDetailDate, MonthDetailRow } from './view-month-detail-list.model';

const NATIONALITY_PARENT_CODE = '870';
const EMP_OFFICE_PARENT_CODE = '15118';
/** Loại báo cáo của nút "Xuất Excel" bản gốc (autoExcel SQL_SEQMEAN=305). */
const EXPORT_REPORT_TYPE = '305';
/** AR_CALENDER.TYPEID của ngày làm việc - các ngày khác (nghỉ/lễ) tô xám như bản gốc. */
const WORKDAY_TYPE_ID = '1440';

/** Nhãn cột: key message.properties + fallback tiếng Việt (+ hậu tố), hoặc chữ cố định (VD '150%').
 *  Có suffixKey thì hậu tố là text đa ngôn ngữ đặt trong ngoặc (suffix là fallback), không thì suffix là chữ cố định. */
interface ColLabel {
  key?: string;
  fallback: string;
  suffix?: string;
  suffixKey?: string;
}

/** Cột số = tổng các cột plus - tổng các cột minus (giống biểu thức EL cộng REG_ + PROB_ trong JSP gốc). */
interface NumCol {
  label?: ColLabel;
  plus: string[];
  minus?: string[];
}

/** Nhóm cột ở hàng header 1. single = true: 1 cột rowspan=2 (không có hàng header 2). */
interface NumGroup {
  label: ColLabel;
  single?: boolean;
  cols: NumCol[];
}

const L = (key: string, fallback: string, suffix?: string): ColLabel => ({ key, fallback, suffix });
const T = (text: string): ColLabel => ({ fallback: text });
const DAY_OT = L('ess.viewMonthDetailList.DAY_OT.b', 'TC NGÀY');
const NIGHT_OT = L('ess.viewMonthDetailList.NIGHT_OT.b', 'TC ĐÊM');
const DURATION = L('ess.infoApply.duration', 'Thời lượng');
const COUNT = L('ess.viewMonthDetailList.COUNT_NUMBER.b', 'Số ngày');
/** REG_x + PROB_x (chính thức + thử việc). */
const rp = (k: string): string[] => ['REG_' + k, 'PROB_' + k];
/** Số ngày công gốc = ngày làm việc + ngày nghỉ hưởng lương (chính thức + thử việc). */
const BASE_DAYS = [...rp('WORK_DAYS'), ...rp('REST_PAY_DAYS')];
const single = (label: ColLabel, plus: string[], minus?: string[]): NumGroup => ({ label, single: true, cols: [{ plus, minus }] });

/** Thứ tự & công thức bám đúng viewMonthDetailList.jsp bản gốc (Hanwha_HTSV). */
const NUM_GROUPS: NumGroup[] = [
  {
    label: L('ess.viewMonthDetailList.OT_ON_WEEKDAY.b', 'HÀNH CHÍNH'),
    cols: [
      { label: DAY_OT, plus: rp('DAY_OT_WEEKDAY') },
      { label: NIGHT_OT, plus: rp('NIGHT_OT_WEEKDAY') },
      { label: { ...NIGHT_OT, suffix: '(210%)' }, plus: rp('NIGHT_OT_WEEKDAY_210') },
    ],
  },
  {
    label: L('ess.viewMonthDetailList.OT_ON_SATURDAY.b', 'NGHỈ HƯỞNG LƯƠNG'),
    cols: [
      { label: DAY_OT, plus: rp('DAY_OT_SATURDAY') },
      { label: NIGHT_OT, plus: rp('NIGHT_OT_SATURDAY') },
    ],
  },
  {
    label: L('ess.viewMonthDetailList.OT_ON_WEEKEND.b', 'NGÀY NGHỈ'),
    cols: [
      { label: DAY_OT, plus: rp('DAY_OT_WEEKEND') },
      { label: NIGHT_OT, plus: rp('NIGHT_OT_WEEKEND') },
    ],
  },
  {
    label: L('ess.viewMonthDetailList.OT_ON_HOLIDAY.b', 'LỄ TẾT'),
    cols: [
      { label: DAY_OT, plus: rp('DAY_OT_HOLIDAY') },
      { label: NIGHT_OT, plus: rp('NIGHT_OT_HOLIDAY') },
    ],
  },
  {
    label: L('ess.viewMonthDetailList.OT_INCENTIVE.b', 'Hỗ trợ ăn ca'),
    cols: [
      { label: T('150%'), plus: rp('OT_INCENTIVE') },
      { label: T('200%'), plus: rp('OT_INCENTIVE_200') },
      { label: T('270%'), plus: rp('OT_INCENTIVE_270') },
      { label: T('300%'), plus: rp('OT_INCENTIVE_300') },
      { label: T('390%'), plus: rp('OT_INCENTIVE_390') },
    ],
  },
  {
    label: L('ess.viewMonthDetailList.NIGHT_INCENTIVE.b', 'Hỗ trợ làm đêm'),
    cols: [
      { label: T('200%'), plus: rp('NIGHT_INCENTIVE_200') },
      { label: T('270%'), plus: rp('NIGHT_INCENTIVE_270') },
      { label: T('390%'), plus: rp('NIGHT_INCENTIVE_390') },
    ],
  },
  {
    label: L('ess.viewMonthDetailList.OT_SATURDAY_INCENTIVE.b', 'Hỗ trợ làm thứ 7'),
    cols: [
      { label: T('200%'), plus: rp('DAY_SATURDAY') },
      { label: T('270%'), plus: rp('NIGHT_SATURDAY') },
    ],
  },
  {
    label: L('ess.viewMonthDetailList.WORK_DAYS.b', 'Số ngày làm việc'),
    cols: [
      {
        label: L('ar.viewArShiftMonthCheckList.ZHENGCHANGBAN.b', 'Ca hành chính'),
        plus: BASE_DAYS,
        minus: [...rp('LEAVE_NOT_PAY_DAYS'), ...rp('LEAVE_PAY_DAYS')],
      },
      { label: L('ess.viewMonthDetailList.NIGHT_SHIFT.b', 'CA ĐÊM'), plus: rp('NIGHT_WORK_DAYS') },
      {
        label: { ...L('ess.viewMonthDetailList.NIGHT_SHIFT.b', 'CA ĐÊM'), suffixKey: 'ar.viewitemparameter.title.xiaoshi', suffix: 'Tiếng' },
        plus: rp('NIGHT_WORK_HOURS'),
      },
    ],
  },
  single(L('ess.infoApply.yingchuqintianshu', 'Ngày công chuẩn'), BASE_DAYS),
  single(L('ess.viewMonthDetailList.REAL_WORK_DAYS.b', 'Ngày LV thực tế(Đã quy đổi)'), BASE_DAYS, [
    ...rp('LEAVE_NOT_PAY_DAYS'),
    ...rp('LEAVE_PAY_DAYS'),
  ]),
  single(L('ess.viewMonthDetailList.MONTH_WORK_DAYS.b', 'Ngày LV trong tháng'), BASE_DAYS, rp('LEAVE_NOT_PAY_DAYS')),
  {
    label: L('ar.monthwork.title.Lateness', 'Đến muộn'),
    cols: [
      { label: DURATION, plus: rp('LATE_ARRIVE_HOURS') },
      { label: COUNT, plus: rp('LATE_ARRIVE_COUNT') },
    ],
  },
  {
    label: L('ar.monthwork.title.EarlyLeave', 'Về sớm'),
    cols: [
      { label: DURATION, plus: rp('EARLY_LEAVE_HOURS') },
      { label: COUNT, plus: rp('EARLY_LEAVE_COUNT') },
    ],
  },
  single(L('ar.viewArAnnualStandard.title.ninjia', 'Nghỉ phép năm'), ['ANNUAL_LEAVE_DAYS']),
  single(L('ess.viewMonthDetailList.UNPAID_LEAVE_RESON.b', 'Nghỉ có phép'), rp('UNPAID_RAESON_DAYS')),
  single(L('ess.viewMonthDetailList.UNPAID_LEAVE_UNRESON.b', 'Nghỉ không phép'), rp('UNPAID_UNRAESON_DAYS')),
  single(L('ar.menu.title.bingjia', 'Nghỉ ốm'), rp('SICK_LEAVE_DAYS')),
  single(L('ar.menu.title.keepHelth', 'Nghỉ dưỡng sức'), rp('HELTH_LEAVE_DAYS')),
  single(L('ar.menu.title.chanjia', 'Nghỉ thai sản'), rp('MATERNITYLEAVE_DAYS')),
  single(L('ess.viewMonthDetailList.HUNSANGJIA.b', 'Nghỉ hiếu, hỉ'), rp('HUNSANGJIA_DAYS')),
  single(L('is.joininstance.title.gongshang', 'Tai nạn lao động'), rp('ACCIDENT_DAYS')),
  single(L('ess.viewMonthDetailList.COVID19.b', 'Nghỉ ngừng việc'), rp('SHUTDOWN_LEAVE_DAYS')),
];

/** Tất cả các cột số theo thứ tự hiển thị (phẳng từ NUM_GROUPS) - dùng cho tbody. */
const NUM_COLS: NumCol[] = NUM_GROUPS.flatMap((g) => g.cols);

/** Các cột text dùng cho ô "Lọc nhanh" (bản gốc: DataTables sSearch lọc trên toàn bảng). */
const QUICK_FILTER_FIELDS = [
  'EMPID', 'LOCAL_NAME', 'DEPT_NAME', 'POST_GRADE_NAME', 'POSITION_NAME', 'EMP_TYPE_NAME', 'DATE_STARTED', 'DATE_LEFT',
];

const I18N_KEYS = [
  ...new Set([
    'ar.excelexport.title.month', 'hrm.empinfo.nameAndEmpid', 'vdp.search.empKeyword.placeholder',
    'ess.infoApply.DEPT', 'vdp.search.dept.placeholder', 'hrm.empinfo.NATIONALITY_CODE', 'hrm.empinfo.EMP_OFFICE_NAME',
    'common.all', 'org.title.SELECT', 'ess.infoApply.EXCEL_OUT', 'common.total', 'common.quickFilter', 'common.stt',
    'ess.empInfo.essential_information', 'ess.infoApply.EMPID', 'ess.infoApply.NAME', 'ess.trans.title.postGradeName',
    'sys.affirm.title.duty', 'ess.infoApply.employee_type', 'ess.trans.title.entryJobDate', 'hrm.recruitManage.LEAVE_DATE',
    'ess.viewMonthDetailList.DAY_LEAVE_DETAIL.b',
    'ess.viewMonthDetailList.DAY_OT_DETAIL.b', 'ess.viewMonthDetailList.NIGHT_OT_DETAIL.b',
    'ess.viewMonthDetailList.msg.noData', 'ess.viewMonthDetailList.msg.loadFailed', 'mep.msg.loadDeptFailed',
    ...NUM_GROUPS.flatMap((g) => [g.label.key, ...g.cols.flatMap((c) => [c.label?.key, c.label?.suffixKey])])
      .filter((k): k is string => !!k),
  ]),
];

/** Dòng hiển thị: dữ liệu gốc + giá trị các cột số đã tính sẵn (tránh tính lại mỗi lần change detection). */
interface ViewRow {
  raw: MonthDetailRow;
  nums: string[];
  searchText: string;
}

/**
 * Bản Angular của ess/tempEmp/viewMonthDetailList.jsp (Hanwha_HTSV) - Chi tiết chấm công tháng theo kỳ công
 * 25 tháng trước -> 24 tháng chọn: thông tin nhân viên, tổng hợp tăng ca/phụ cấp/ngày công/nghỉ phép và 3 nhóm
 * cột chi tiết theo ngày (công, TC ngày, TC đêm). Dữ liệu lấy 1 lần từ /detail (cùng SQL với báo cáo 305),
 * lọc nhanh + sắp xếp + phân trang ở client như DataTables bản gốc. 4 cột đầu cố định khi cuộn ngang
 * (fixedColumns leftColumns: 4 bản gốc) bằng CSS sticky - pattern giống ViewArPersonalListComponent vì
 * header 2 hàng rowspan/colspan + số cột động không tương thích nzScroll/nzLeft.
 */
@Component({
  selector: 'app-view-month-detail-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NzTableModule,
    NzCardModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzDatePickerModule,
    NzTreeSelectModule,
    NzAlertModule,
    TranslatePipe,
  ],
  templateUrl: './view-month-detail-list.component.html',
  styleUrl: './view-month-detail-list.component.css',
})
export class ViewMonthDetailListComponent implements OnInit {
  readonly pageSizeOptions = [50, 100, 200, 500];
  readonly numGroups = NUM_GROUPS;
  readonly workdayTypeId = WORKDAY_TYPE_ID;

  readonly dates = signal<MonthDetailDate[]>([]);
  readonly allRows = signal<ViewRow[]>([]);
  readonly quickFilter = signal('');
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly deptTreeErrorMessage = signal<string | null>(null);
  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly nationalityOptions = signal<CodeItem[]>([]);
  readonly empOfficeOptions = signal<CodeItem[]>([]);

  readonly rows = computed(() => {
    const kw = this.quickFilter().trim().toLowerCase();
    const all = this.allRows();
    return kw ? all.filter((r) => r.searchText.includes(kw)) : all;
  });

  monthValue: Date = new Date();
  keyword = '';
  deptNos: string[] = [];
  nationalityCode: string | null = null;
  empOffice: string | null = null;

  pageIndex = 1;
  pageSize = 50;

  readonly sortEmpId = (a: ViewRow, b: ViewRow) => this.compareText(a, b, 'EMPID');
  readonly sortName = (a: ViewRow, b: ViewRow) => this.compareText(a, b, 'LOCAL_NAME');
  readonly sortDept = (a: ViewRow, b: ViewRow) => this.compareText(a, b, 'DEPT_NAME');

  /** id -> danh sách id con trực tiếp - dùng để mở rộng lựa chọn cây phòng ban khi tra cứu. */
  private deptChildrenMap = new Map<string, string[]>();

  constructor(
    private readonly api: ViewMonthDetailListService,
    private readonly i18n: I18nService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
    this.api.getCodeList(NATIONALITY_PARENT_CODE).subscribe((list) => this.nationalityOptions.set(list ?? []));
    this.api.getCodeList(EMP_OFFICE_PARENT_CODE).subscribe((list) => this.empOfficeOptions.set(list ?? []));
    this.search();
  }

  search(): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getDetailView(this.searchParams()).subscribe({
      next: (res) => {
        this.dates.set(res?.dates ?? []);
        this.allRows.set((res?.rows ?? []).map((r) => this.toViewRow(r)));
        this.pageIndex = 1;
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t('ess.viewMonthDetailList.msg.loadFailed', 'Tải dữ liệu thất bại'));
        this.dates.set([]);
        this.allRows.set([]);
        this.loading.set(false);
      },
    });
  }

  onQuickFilterChange(value: string): void {
    this.quickFilter.set(value);
    this.pageIndex = 1;
  }

  exportExcel(): void {
    window.location.href = this.api.buildExportUrl({ ...this.searchParams(), reportType: EXPORT_REPORT_TYPE });
  }

  labelText(label: ColLabel | undefined): string {
    if (!label) return '';
    const text = label.key ? this.i18n.t(label.key, label.fallback) : label.fallback;
    if (label.suffixKey) return `${text} (${this.i18n.t(label.suffixKey, label.suffix)})`;
    return label.suffix ? `${text} ${label.suffix}` : text;
  }

  isOffDay(d: MonthDetailDate): boolean {
    return String(d.typeId) !== WORKDAY_TYPE_ID;
  }

  private searchParams() {
    const d = this.monthValue ?? new Date();
    return {
      month: String(d.getMonth() + 1).padStart(2, '0'),
      year: String(d.getFullYear()),
      keyword: this.keyword.trim(),
      deptNos: this.expandDeptSelection(this.deptNos).join(','),
      nationalityCode: this.nationalityCode ?? '',
      empOffice: this.empOffice ?? '',
    };
  }

  private toViewRow(raw: MonthDetailRow): ViewRow {
    return {
      raw,
      nums: NUM_COLS.map((c) => this.formatNum(this.sum(raw, c.plus) - this.sum(raw, c.minus ?? []))),
      searchText: QUICK_FILTER_FIELDS.map((f) => raw[f] ?? '').join(' ').toLowerCase(),
    };
  }

  private sum(raw: MonthDetailRow, keys: string[]): number {
    return keys.reduce((acc, k) => acc + (Number(raw[k]) || 0), 0);
  }

  /** Làm tròn 2 chữ số để tránh sai số dấu phẩy động khi cộng/trừ (VD 0.1 + 0.2). */
  private formatNum(v: number): string {
    return String(Math.round(v * 100) / 100);
  }

  private compareText(a: ViewRow, b: ViewRow, field: string): number {
    const x = a.raw[field] ?? '';
    const y = b.raw[field] ?? '';
    if (typeof x === 'number' && typeof y === 'number') return x - y;
    return String(x).localeCompare(String(y));
  }

  // ==================== Cây phòng ban ====================

  private loadDeptTree(): void {
    this.api.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(this.buildDeptTree(list ?? [])),
      error: () =>
        this.deptTreeErrorMessage.set(this.i18n.t('mep.msg.loadDeptFailed', 'Lỗi khi tải danh sách phòng ban')),
    });
  }

  private buildDeptTree(list: AuthDeptNode[]): NzTreeNodeOptions[] {
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

  /** nz-tree-select chỉ trả về key của node được tick trực tiếp - KHÔNG tự cascade xuống phòng ban con
   *  như widget deptTreeMulti gốc. Backend lọc theo deptNos đúng từng mã, nên phải tự mở rộng xuống các
   *  phòng ban con trước khi gửi lên (xem giải thích đầy đủ ở ManageEmpPositionInfoComponent). */
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
