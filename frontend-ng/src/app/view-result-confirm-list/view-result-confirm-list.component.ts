import { CommonModule } from '@angular/common';
import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTooltipModule } from 'ng-zorro-antd/tooltip';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { Observable } from 'rxjs';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { buildDeptTree } from '../manage-emp-position-info/dept-tree.util';
import { PaChartSeries, PaCompareChartComponent } from '../pa-salary-check/pa-compare-chart.component';
import { PaMonthDifDetailComponent } from '../pa-salary-check/pa-month-dif-detail.component';
import { PaPayPeriodComponent } from '../pa-salary-check/pa-pay-period.component';
import {
  EMP_COLUMNS,
  MONTH_DIF_GROUPS,
  PaCheckColumn,
  PaMonthDifItem,
  PaResultConfirmSummary,
  PaSalaryCheckQuery,
  PaSalaryCheckRow,
  apiError,
  compareBy,
  diff,
  displayDate,
} from '../pa-salary-check/pa-salary-check.model';
import { PaSalaryCheckService } from '../pa-salary-check/pa-salary-check.service';
import { PAGE_SIZE_OPTIONS } from '../shared/table.constants';
import { ViewPaPayStubService } from '../view-pa-pay-stub/view-pa-pay-stub.service';

/** Cột có định dạng số: 'int' = #,##0 | 'dec' = tối đa 4 số lẻ (thuế suất, số người phụ thuộc). */
interface ConfirmColumn extends PaCheckColumn<PaSalaryCheckRow> {
  format?: 'int' | 'dec';
}

const OT_COLUMNS: ConfirmColumn[] = [
  ...EMP_COLUMNS,
  { field: 'itemName', key: 'ess.empInfo.project', fallback: 'Hạng mục', width: '150px' },
  { field: 'calValue', key: 'pa.viewResultConfirmSonList.SHIJIJINE.b', fallback: 'Số tiền thực tế', width: '120px', format: 'int' },
  { field: 'formularValue', key: 'pa.viewResultConfirmSonList.JISUANSHI.b', fallback: 'Công thức tính', width: '260px' },
];

const OT_DETAIL_COLUMNS: ConfirmColumn[] = [
  { field: 'localName', key: 'ess.infoApply.NAME', fallback: 'Họ tên', width: '160px' },
  { field: 'empId', key: 'ess.infoApply.EMP_ID', fallback: 'Mã nhân viên', width: '110px' },
  { field: 'arDate', key: 'ess.infoApply.date', fallback: 'Ngày', width: '110px' },
  { field: 'shiftName', key: 'ess.message.work_shift', fallback: 'Ca', width: '140px' },
  { field: 'itemName', key: 'sys.affirm.title.type', fallback: 'Loại hình', width: '160px' },
  { field: 'fromTime', key: 'ar.viewshift.title.start', fallback: 'Bắt đầu', width: '140px' },
  { field: 'toTime', key: 'ar.viewshift.title.end', fallback: 'Kết thúc', width: '140px' },
  { field: 'quantity', key: 'ess.infoApply.duration', fallback: 'Thời lượng', width: '100px', format: 'dec' },
];

const INSURANCE_COLUMNS: ConfirmColumn[] = [
  ...EMP_COLUMNS,
  { field: 'socialInsPersonal', key: 'pa.viewResultConfirmSonList.SHEHUIBAOXIANGEREN.b', fallback: 'BHXH (cá nhân)', width: '130px', format: 'int' },
  { field: 'medicalInsPersonal', key: 'pa.viewResultConfirmSonList.YILIAOBAOXIANGEREN.b', fallback: 'BHYT (cá nhân)', width: '130px', format: 'int' },
  { field: 'unemploymentInsPersonal', key: 'pa.viewResultConfirmSonList.SHIYEBAOXIANGEREN.b', fallback: 'BHTN (cá nhân)', width: '130px', format: 'int' },
  { field: 'personalInsTotal', key: 'pa.viewResultConfirmSonList.GERENSHEBAOHEJI.b', fallback: 'Tổng BHXH cá nhân', width: '140px', format: 'int' },
];

const TAX_COLUMNS: ConfirmColumn[] = [
  ...EMP_COLUMNS.slice(0, 5),
  { field: 'positionName', key: 'ess.trans.title.dutyName', fallback: 'Chức danh', width: '130px' },
  { field: 'incomeBeforeTax', key: 'pa.viewResultConfirmSonList.SHUIQIANGONGZI.b', fallback: 'Lương trước thuế', width: '130px', format: 'int' },
  { field: 'attDeductTotal', key: 'pa.viewResultConfirmSonList.KAOQINKOUCHU.b', fallback: 'Khoản trừ', width: '120px', format: 'int' },
  { field: 'personalInsTotal', key: 'pa.viewResultConfirmSonList.GERENSHEBAOHEJI.b', fallback: 'Tổng BHXH cá nhân', width: '130px', format: 'int' },
  { field: 'taxDeductStd', key: 'pa.viewResultConfirmSonList.KOUSHUIJIZHUN.b', fallback: 'Tiêu chuẩn trừ thuế', width: '130px', format: 'int' },
  { field: 'taxFamilyDeductStd', key: 'pa.viewResultConfirmSonList.TESHUKOUSHUIJIZHUN.b', fallback: 'Giảm trừ bản thân', width: '130px', format: 'int' },
  { field: 'taxFamilyDeductCount', key: 'pa.viewResultConfirmSonList.TESHUKOUSHUIRENSHU.b', fallback: 'Người phụ thuộc', width: '110px', format: 'int' },
  { field: 'taxableIncome', key: 'pa.viewResultConfirmSonList.YINGNASHUISUODEE.b', fallback: 'Thu nhập tính thuế', width: '130px', format: 'int' },
  { field: 'ptTaxRate', key: 'pa.viewResultConfirmSonList.SHUILV.b', fallback: 'Thuế suất', width: '90px', format: 'dec' },
  { field: 'quickDeductionTax', key: 'pa.viewResultConfirmSonList.SUSUANKOUCHUSHU.b', fallback: 'Số tiền trừ nhanh', width: '120px', format: 'dec' },
  { field: 'personalTax', key: 'ess.viewpersonalpainfo.gerensuodeshui', fallback: 'Thuế TNCN', width: '120px', format: 'int' },
  { field: 'realWages', key: 'ess.viewpersonalpainfo.shifagongzi', fallback: 'Lương thực lĩnh', width: '130px', format: 'int' },
];

/** Thứ tự tab giống bản gốc viewResultConfirmList.jsp. */
type ConfirmTab = 'summary' | 'payItem' | 'ot' | 'insItem' | 'insurance' | 'tax';
const TABS: { id: ConfirmTab; key: string; fallback: string }[] = [
  { id: 'summary', key: 'pa.viewResultConfirmList.BIANDONGMINGXI.b', fallback: 'Thay đổi chi tiết' },
  { id: 'payItem', key: 'pa.viewResultConfirmList.ZHIFUXIANGMUDUIBI.b', fallback: 'Đối chiếu hạng mục trả lương' },
  { id: 'ot', key: 'pa.viewResultConfirmList.JIABANTONGJI.b', fallback: 'Thống kê tăng ca' },
  { id: 'insItem', key: 'pa.viewResultConfirmList.BAOXIANDUIBI.b', fallback: 'Đối chiếu bảo hiểm' },
  { id: 'insurance', key: 'pa.viewResultConfirmList.BAOXIANMINGXI.b', fallback: 'Chi tiết bảo hiểm' },
  { id: 'tax', key: 'display.pa.tax', fallback: 'Tiền thuế' },
];

/** 1 nhóm MONTH_DIF của tab đối chiếu hạng mục (bản gốc treeTable demoTree1/demoTree2). */
interface DifGroupView {
  monthDif: string;
  key: string;
  fallback: string;
  personNum: number;
  items: PaMonthDifItem[];
  expanded: boolean;
}

/** Trạng thái tab đối chiếu hạng mục (tab 2: ITEM_TYPE 1, tab 4: ITEM_TYPE 3). */
interface DifTabState {
  itemType: number;
  groups: DifGroupView[];
  loading: boolean;
  selectedKey: string | null;
  detailQuery: PaSalaryCheckQuery | null;
}

const I18N_KEYS = [
  ...TABS.map((t) => t.key), ...MONTH_DIF_GROUPS.map((g) => g.key),
  ...[OT_COLUMNS, OT_DETAIL_COLUMNS, INSURANCE_COLUMNS, TAX_COLUMNS].flatMap((cols) => cols.map((c) => c.key)),
  'ess.infoApply.DEPT', 'pa.result.deptPlaceholder', 'mep.msg.loadDeptFailed', 'pa.salaryCheck.msgSelectPayDate',
  'display.emp.ben.or.benhs68', 'pa.monthPersonCountInfoList.DANGYUE.b', 'org.title.ADDORDELETTE',
  'pa.viewResultConfirmSonList.DUIXIANGRENYUAN.b', 'pa.viewResultConfirmSonList.GONGZIZONGE.b',
  'pa.viewResultConfirmSonList.KOUCHUHEJI.b', 'pa.viewResultConfirmSonList.SHIDEGONGZI.b',
  'pa.title.pa.excel.thecountnumberofemployee', 'pa.viewResultConfirmSonList.REN.b', 'sys.rights.title.employee',
  'ess.empInfo.amount_of_money', 'pa.viewResultConfirmSonList.GONGZIXIANGMUBIEANLI.b', 'empsubject.totalCnt',
  'pa.insurance.title.projectName', 'pa.viewResultConfirmSonList.SHANGYUEJINE.b', 'pa.viewResultConfirmSonList.BENYUEJINE.b',
  'ess.infoApply.difference', 'pa.salaryDetail.clickRowHint', 'pa.salaryCheck.clickCountHint',
  'public.title.search', 'common.stt', 'common.noData', 'common.loadFail', 'common.totalRows',
];

/**
 * Xác nhận kết quả - bản Angular của /pa/workManagement/viewResultConfirmList (JSP + DWZ, dự án Hanwha_HTSV).
 * Điều kiện: phân loại lương, ngày phát tháng trước ~ tháng này, phòng ban. 6 tab (mỗi tab chỉ tải khi được mở):
 *  1. Thay đổi chi tiết (viewResultConfirmSonList0): tổng hợp 2 kỳ + 2 biểu đồ (bản gốc highcharts -> SVG).
 *  2. Đối chiếu hạng mục trả lương (SonList3, ITEM_TYPE 1, PAGE_TYPE 2) + danh sách NV bên phải (List3Right).
 *  3. Thống kê tăng ca (SonList2) + chi tiết tăng ca của NV được chọn (List2Bottom).
 *  4. Đối chiếu bảo hiểm (SonList3, ITEM_TYPE 3).
 *  5. Chi tiết bảo hiểm (SonList6).   6. Thuế (SonList5).
 */
@Component({
  selector: 'app-view-result-confirm-list',
  standalone: true,
  imports: [CommonModule, FormsModule, NzCardModule, NzButtonModule, NzTabsModule, NzTableModule, NzTreeSelectModule,
    NzTooltipModule, TranslatePipe, PaPayPeriodComponent, PaCompareChartComponent, PaMonthDifDetailComponent],
  templateUrl: './view-result-confirm-list.component.html',
  styleUrl: './view-result-confirm-list.component.css',
})
export class ViewResultConfirmListComponent implements OnInit {
  readonly tabs = TABS;
  readonly otColumns = OT_COLUMNS;
  readonly otDetailColumns = OT_DETAIL_COLUMNS;
  readonly insuranceColumns = INSURANCE_COLUMNS;
  readonly taxColumns = TAX_COLUMNS;
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;
  readonly sortFns = new Map(
    [...OT_COLUMNS, ...INSURANCE_COLUMNS, ...TAX_COLUMNS].map((c) => [c.field, compareBy<PaSalaryCheckRow>(c.field)]));

  readonly deptNodes = signal<NzTreeNodeOptions[]>([]);
  readonly deptErrorMessage = signal<string | null>(null);

  salaryDistinNo: string | null = null;
  payDate: string | null = null;
  payDatePro: string | null = null;
  deptNo: string | null = null;
  tabIndex = 0;

  /** Điều kiện của lần tra cứu gần nhất - các tab dùng chung. */
  private searched: PaSalaryCheckQuery | null = null;
  /** Tab đã tải theo lần tra cứu hiện tại. */
  private loaded = new Set<ConfirmTab>();

  // ── Tab 1: Thay đổi chi tiết ──
  readonly summary = signal<PaResultConfirmSummary | null>(null);
  readonly summaryLoading = signal(false);
  readonly personChart = signal<PaChartSeries[]>([]);
  readonly amountChart = signal<PaChartSeries[]>([]);
  readonly chartCategories = signal<string[]>([]);

  // ── Tab 2 / 4: Đối chiếu hạng mục ──
  readonly difTabs = signal<Record<'payItem' | 'insItem', DifTabState>>({
    payItem: this.emptyDifTab(1),
    insItem: this.emptyDifTab(3),
  });

  // ── Tab 3: Thống kê tăng ca ──
  readonly otRows = signal<PaSalaryCheckRow[]>([]);
  readonly otLoading = signal(false);
  readonly otSelected = signal<PaSalaryCheckRow | null>(null);
  readonly otDetailRows = signal<PaSalaryCheckRow[]>([]);
  readonly otDetailLoading = signal(false);
  otPageIndex = 1;
  otPageSize = 50;

  // ── Tab 5 / 6: Bảo hiểm / Thuế ──
  readonly insuranceRows = signal<PaSalaryCheckRow[]>([]);
  readonly insuranceLoading = signal(false);
  readonly taxRows = signal<PaSalaryCheckRow[]>([]);
  readonly taxLoading = signal(false);
  insPageIndex = 1;
  insPageSize = 50;
  taxPageIndex = 1;
  taxPageSize = 50;

  constructor(
    private readonly api: PaSalaryCheckService,
    private readonly payStubApi: ViewPaPayStubService,
    private readonly i18n: I18nService,
    private readonly message: NzMessageService,
  ) {}

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
    this.payStubApi.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(buildDeptTree(list ?? []).nodes),
      error: () => this.deptErrorMessage.set(this.i18n.t('mep.msg.loadDeptFailed', 'Lỗi khi tải danh sách phòng ban')),
    });
  }

  t(key: string, fallback: string): string {
    return this.i18n.t(key, fallback);
  }

  /** Bản gốc navTabSearcha(): tải lại tab đang mở với điều kiện mới. */
  search(): void {
    if (!this.salaryDistinNo || !this.payDate || !this.payDatePro) {
      this.message.warning(this.t('pa.salaryCheck.msgSelectPayDate', 'Vui lòng chọn phân loại lương và ngày phát!'));
      return;
    }
    this.searched = {
      salaryDistinNo: this.salaryDistinNo,
      payDate: this.payDate,
      payDatePro: this.payDatePro,
      deptNo: this.deptNo,
    };
    this.loaded.clear();
    this.resetTabs();
    this.loadTab(this.tabs[this.tabIndex].id);
  }

  onTabChange(index: number): void {
    this.tabIndex = index;
    if (this.searched) this.loadTab(this.tabs[index].id);
  }

  // ── Tab 2 / 4 ──

  difState(tab: 'payItem' | 'insItem'): DifTabState {
    return this.difTabs()[tab];
  }

  toggleGroup(group: DifGroupView): void {
    group.expanded = !group.expanded;
    this.difTabs.update((s) => ({ ...s }));
  }

  /** Bản gốc changeUrlDetail(ITEM_ID, MONTH_DIF, ITEM_TYPE) -> viewResultConfirmList3Right?PAGE_TYPE=2. */
  selectDifItem(tab: 'payItem' | 'insItem', item: PaMonthDifItem): void {
    if (!this.searched) return;
    const state = this.difTabs()[tab];
    this.difTabs.update((s) => ({
      ...s,
      [tab]: {
        ...state,
        selectedKey: `${item.itemId},${item.monthDif}`,
        detailQuery: {
          payDate: this.searched!.payDate,
          salaryDistinNo: this.searched!.salaryDistinNo,
          itemType: state.itemType,
          itemId: item.itemId,
          monthDif: item.monthDif,
          pageType: '2',
        },
      },
    }));
  }

  difOf(item: PaMonthDifItem): number {
    return diff(item.monthNow, item.monthPro);
  }

  // ── Tab 3 ──

  /** Bản gốc changeUrlDetail(PERSON_ID, AR_START_DATE, AR_END_DATE) -> viewResultConfirmList2Bottom. */
  selectOtRow(row: PaSalaryCheckRow): void {
    this.otSelected.set(row);
    this.otDetailRows.set([]);
    this.otDetailLoading.set(true);
    this.api.getResultConfirmOtDetails({ personId: row.personId, arStartDate: row.arStartDate, arEndDate: row.arEndDate })
      .subscribe({
        next: (rows) => {
          this.otDetailRows.set(rows ?? []);
          this.otDetailLoading.set(false);
        },
        error: (err) => {
          this.otDetailLoading.set(false);
          this.showError(err);
        },
      });
  }

  isOtSelected(row: PaSalaryCheckRow): boolean {
    const cur = this.otSelected();
    return !!cur && cur.personId === row.personId && cur.itemName === row.itemName;
  }

  title(c: ConfirmColumn): string {
    return this.t(c.key, c.fallback);
  }

  // ── Tải dữ liệu theo tab ──

  private loadTab(tab: ConfirmTab): void {
    if (!this.searched || this.loaded.has(tab)) return;
    this.loaded.add(tab);
    const q = this.searched;
    switch (tab) {
      case 'summary':
        this.loadSummary(q);
        break;
      case 'payItem':
      case 'insItem':
        this.loadDifGroups(tab, q);
        break;
      case 'ot':
        this.loadList(this.otLoading, this.otRows, this.api.getResultConfirmOt(q), () => (this.otPageIndex = 1));
        break;
      case 'insurance':
        this.loadList(this.insuranceLoading, this.insuranceRows, this.api.getResultConfirmInsurance(q),
          () => (this.insPageIndex = 1));
        break;
      case 'tax':
        this.loadList(this.taxLoading, this.taxRows, this.api.getResultConfirmTax(q), () => (this.taxPageIndex = 1));
        break;
    }
  }

  private loadSummary(q: PaSalaryCheckQuery): void {
    this.summaryLoading.set(true);
    this.api.getResultConfirmSummary(q).subscribe({
      next: (s) => {
        const sum = s && 'payDateCur' in s ? s : null;
        this.summary.set(sum);
        this.buildCharts(sum);
        this.summaryLoading.set(false);
      },
      error: (err) => {
        this.summaryLoading.set(false);
        this.loaded.delete('summary');
        this.showError(err);
      },
    });
  }

  /** Bản gốc pa1019_container / pa1019_container2: 2 biểu đồ đường tháng trước -> tháng này. */
  private buildCharts(s: PaResultConfirmSummary | null): void {
    if (!s) {
      this.chartCategories.set([]);
      this.personChart.set([]);
      this.amountChart.set([]);
      return;
    }
    this.chartCategories.set([displayDate(s.payDatePro), displayDate(s.payDateCur)]);
    this.personChart.set([{ name: this.t('sys.rights.title.employee', 'Nhân viên'), data: [s.personNumPro, s.personNumCur] }]);
    this.amountChart.set([
      { name: this.t('pa.viewResultConfirmSonList.GONGZIZONGE.b', 'Tổng thu nhập'), data: [s.salaryTotalPro, s.salaryTotalCur] },
      { name: this.t('pa.viewResultConfirmSonList.KOUCHUHEJI.b', 'Tổng khoản trừ'), data: [s.withholdTotalPro, s.withholdTotalCur] },
      { name: this.t('pa.viewResultConfirmSonList.SHIDEGONGZI.b', 'Lương thực lĩnh'), data: [s.netPayPro, s.netPayCur] },
    ]);
  }

  private loadDifGroups(tab: 'payItem' | 'insItem', q: PaSalaryCheckQuery): void {
    const itemType = this.difTabs()[tab].itemType;
    this.patchDifTab(tab, { loading: true });
    this.api.getMonthDifGroups({ ...q, itemType, pageType: '2' }).subscribe({
      next: (items) => {
        const list = items ?? [];
        const groups: DifGroupView[] = MONTH_DIF_GROUPS.map((g) => {
          const groupItems = list.filter((i) => String(i.monthDif) === g.monthDif);
          return {
            ...g,
            items: groupItems,
            personNum: groupItems.reduce((sum, i) => sum + (Number(i.personNum) || 0), 0),
            expanded: true,
          };
        });
        this.patchDifTab(tab, { loading: false, groups });
      },
      error: (err) => {
        this.patchDifTab(tab, { loading: false });
        this.loaded.delete(tab);
        this.showError(err);
      },
    });
  }

  private loadList(loading: WritableSignal<boolean>, rows: WritableSignal<PaSalaryCheckRow[]>,
                   source: Observable<PaSalaryCheckRow[]>, onDone: () => void): void {
    loading.set(true);
    source.subscribe({
      next: (list) => {
        rows.set(list ?? []);
        onDone();
        loading.set(false);
      },
      error: (err) => {
        loading.set(false);
        this.showError(err);
      },
    });
  }

  private patchDifTab(tab: 'payItem' | 'insItem', patch: Partial<DifTabState>): void {
    this.difTabs.update((s) => ({ ...s, [tab]: { ...s[tab], ...patch } }));
  }

  private resetTabs(): void {
    this.summary.set(null);
    this.buildCharts(null);
    this.difTabs.set({ payItem: this.emptyDifTab(1), insItem: this.emptyDifTab(3) });
    this.otRows.set([]);
    this.otSelected.set(null);
    this.otDetailRows.set([]);
    this.insuranceRows.set([]);
    this.taxRows.set([]);
  }

  private emptyDifTab(itemType: number): DifTabState {
    return { itemType, groups: [], loading: false, selectedKey: null, detailQuery: null };
  }

  private showError(err: unknown): void {
    this.message.error(apiError(err) || this.t('common.loadFail', 'Tải dữ liệu thất bại!'));
  }
}
