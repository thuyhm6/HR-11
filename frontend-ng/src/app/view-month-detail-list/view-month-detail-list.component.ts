import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
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
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { ViewMonthDetailListService } from './view-month-detail-list.service';
import { AuthDeptNode, MonthDetailListDto } from './view-month-detail-list.model';

/** Loại nhân viên (đúng 2 option đang hiển thị ở bản gốc, "-- Tất cả --" là giá trị rỗng). */
const EMP_TYPE_OPTIONS: { value: string; labelKey: string; fallback: string }[] = [
  { value: 'MTSVN', labelKey: 'ess.viewMonthDetailList.empType.mtsvn', fallback: 'MTSVN' },
  { value: 'THOIVU', labelKey: 'ess.viewMonthDetailList.empType.thoiVu', fallback: 'Thời vụ' },
];

/** Loại báo cáo - CHỈ giữ đúng 1 option đang hoạt động ở bản gốc (305=Công tính lương), các loại
 *  khác (bonus13th, referralBonus, workDuration, workOtPrint, diligence) đang bị comment sẵn ở bản
 *  Thymeleaf gốc nên không đưa vào đây - bật lại sau này chỉ cần thêm phần tử vào mảng này. */
const REPORT_TYPE_OPTIONS: { value: string; labelKey: string; fallback: string }[] = [
  { value: '305', labelKey: 'ess.viewMonthDetailList.reportType.salary', fallback: 'Công tính lương' },
];

/** Các key message.properties dùng trong trang này - tải trước 1 lần ở ngOnInit (xem I18nService). */
const I18N_KEYS = [
  'common.month', 'common.year', 'essDept.keyword', 'vdp.search.empKeyword.placeholder',
  'common.deptName', 'vdp.search.dept.placeholder', 'common.type', 'common.all',
  'ess.viewMonthDetailList.empType.mtsvn', 'ess.viewMonthDetailList.empType.thoiVu',
  'ess.viewMonthDetailList.reportType', 'ess.viewMonthDetailList.reportType.salary',
  'essDept.search', 'ess.viewMonthDetailList.btnExport', 'common.total', 'common.quickFilter',
  'common.stt', 'ess.viewMonthDetailList.BASIC_INFO.b', 'ess.viewMonthDetailList.OT_ON_WEEKDAY.b',
  'ess.viewMonthDetailList.OT_ON_WEEKEND.b', 'ess.viewMonthDetailList.OT_ON_HOLIDAY.b',
  'ess.viewMonthDetailList.WORK_DAYS.b', 'common.empId', 'common.empName', 'epi.field.dob',
  'common.duty', 'common.dateJoined', 'hr.enpinfo.title.EMP.PROBATION_END_DATE',
  'ess.viewMonthDetailList.DAY_OT.b', 'ess.viewMonthDetailList.NIGHT_OT.b',
  'ess.viewMonthDetailList.NIGHT_OT_210.b', 'ar.viewArShiftMonthCheckList.ZHENGCHANGBAN.b',
  'ess.viewMonthDetailList.NIGHT_SHIFT.b', 'ar.viewSearchOtInfo.YINGCHUQIN.b',
  'ess.viewMonthDetailList.msg.noData', 'ess.viewMonthDetailList.msg.loadFailed',
  'ess.viewMonthDetailList.msg.selectReportType', 'common.loadFail', 'mep.msg.loadDeptFailed',
];

const YEAR_RANGE = 5;

/**
 * Bản Angular của ess/tempEmp/viewMonthDetailList.html (Thymeleaf + DataTables serverSide) - Chi tiết
 * chấm công tháng (nhân viên MTSVN/Thời vụ), chỉ đọc + xuất báo cáo. Gọi lại nguyên API JSON đã có sẵn
 * ở EssTempEmpController (xem ViewMonthDetailListService) - không đổi backend. Kiến trúc bám theo
 * ViewOtReportComponent (nz-date-picker nzMode="month" cho ô Tháng, nz-table phân trang server-side)
 * và ManageEmpPositionInfoComponent (nz-tree-select + expandDeptSelection cho bộ lọc phòng ban thay
 * DeptTree.js). Header bảng giữ 2 hàng rowspan/colspan như bản gốc, không dùng nzScroll (xem giải
 * thích ở dept-ot-apply-info.component.html vì sao rowspan/colspan không tương thích nzScroll).
 *
 * Combo "Loại báo cáo" (reportType) và "Năm" (dùng riêng cho reportYear khi xuất báo cáo, độc lập với
 * năm trong ô Tháng) giữ đúng 2 tham số tách biệt như bản gốc dù hiện chỉ có 1 loại báo cáo đang bật -
 * không gộp lại để không phá vỡ các loại báo cáo theo năm sẽ bật lại sau này (xem comment trong HTML gốc).
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
  readonly pageSizeOptions = [25, 50, 100, 200];
  readonly empTypeOptions = EMP_TYPE_OPTIONS;
  readonly reportTypeOptions = REPORT_TYPE_OPTIONS;
  readonly yearOptions = this.buildYearOptions();

  readonly rows = signal<MonthDetailListDto[]>([]);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly recordsTotal = signal(0);
  readonly deptTreeErrorMessage = signal<string | null>(null);

  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);

  monthValue: Date = new Date();
  reportYear: string = String(new Date().getFullYear());
  keyword = '';
  deptNos: string[] = [];
  empTypeCode: string | null = null;
  reportType: string | null = REPORT_TYPE_OPTIONS[0]?.value ?? null;
  quickFilter = '';

  pageIndex = 1;
  pageSize = 25;

  /** id -> danh sách id con trực tiếp - dùng để mở rộng lựa chọn cây phòng ban khi tra cứu (xem search()). */
  private deptChildrenMap = new Map<string, string[]>();
  private quickFilterTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(
    private readonly api: ViewMonthDetailListService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
    this.search();
  }

  search(): void {
    this.pageIndex = 1;
    this.loadPage();
  }

  onQuickFilterChange(): void {
    if (this.quickFilterTimer) clearTimeout(this.quickFilterTimer);
    this.quickFilterTimer = setTimeout(() => this.search(), 400);
  }

  onPageIndexChange(pageIndex: number): void {
    this.pageIndex = pageIndex;
    this.loadPage();
  }

  onPageSizeChange(pageSize: number): void {
    this.pageSize = pageSize;
    this.pageIndex = 1;
    this.loadPage();
  }

  exportReport(): void {
    if (!this.reportType) {
      this.message.warning(this.i18n.t('ess.viewMonthDetailList.msg.selectReportType', 'Vui lòng chọn loại báo cáo'));
      return;
    }
    const { month, year } = this.monthYear();
    const url = this.api.buildExportUrl({
      month, year,
      keyword: this.keyword,
      quickFilter: this.quickFilter,
      deptNos: this.expandDeptSelection(this.deptNos).join(','),
      empTypeCode: this.empTypeCode ?? '',
      reportType: this.reportType,
      reportYear: this.reportYear,
    });
    window.location.href = url;
  }

  private loadPage(): void {
    const { month, year } = this.monthYear();
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api
      .getPageList({
        month, year,
        keyword: this.keyword,
        quickFilter: this.quickFilter,
        deptNos: this.expandDeptSelection(this.deptNos).join(','),
        empTypeCode: this.empTypeCode ?? '',
        draw: this.pageIndex,
        start: (this.pageIndex - 1) * this.pageSize,
        length: this.pageSize,
      })
      .subscribe({
        next: (res) => {
          if (res.error) {
            this.errorMessage.set(res.error);
            this.rows.set([]);
            this.recordsTotal.set(0);
          } else {
            this.rows.set(res.data ?? []);
            this.recordsTotal.set(res.recordsTotal ?? 0);
          }
          this.loading.set(false);
        },
        error: () => {
          this.errorMessage.set(this.i18n.t('ess.viewMonthDetailList.msg.loadFailed', 'Tải dữ liệu thất bại'));
          this.rows.set([]);
          this.recordsTotal.set(0);
          this.loading.set(false);
        },
      });
  }

  private monthYear(): { month: string; year: string } {
    const d = this.monthValue;
    return { month: String(d.getMonth() + 1).padStart(2, '0'), year: String(d.getFullYear()) };
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
   *  như widget DeptTree.js gốc. Backend lọc theo deptNos đúng từng mã, nên phải tự mở rộng xuống các
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

  private buildYearOptions(): string[] {
    const cur = new Date().getFullYear();
    const years: string[] = [];
    for (let y = cur + 1; y >= cur - YEAR_RANGE; y--) years.push(String(y));
    return years;
  }
}
