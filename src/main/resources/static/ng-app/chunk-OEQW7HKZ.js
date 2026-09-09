import {
  NzTreeSelectComponent,
  NzTreeSelectModule
} from "./chunk-2D6TQZG3.js";
import "./chunk-PD7KBOBI.js";
import {
  NzDatePickerComponent,
  NzDatePickerModule
} from "./chunk-TWXZW7YB.js";
import "./chunk-5TI46VEX.js";
import {
  NzInputDirective,
  NzInputModule
} from "./chunk-VO7C5C6M.js";
import {
  I18nService,
  TranslatePipe
} from "./chunk-MZSSMIRT.js";
import {
  NzCardComponent,
  NzCardModule
} from "./chunk-FNWKNPAX.js";
import {
  NzTableCellDirective,
  NzTableComponent,
  NzTableModule,
  NzTbodyComponent,
  NzThMeasureDirective,
  NzTheadComponent,
  NzTrDirective
} from "./chunk-ON5PSYJR.js";
import "./chunk-VWYGF7JF.js";
import "./chunk-JSOAL7UF.js";
import "./chunk-2QLZSMGV.js";
import {
  NzAlertComponent,
  NzAlertModule
} from "./chunk-BYJYXGGS.js";
import "./chunk-2GOAB54B.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-TNYKEBYQ.js";
import {
  CommonModule,
  Component,
  HttpClient,
  HttpParams,
  Injectable,
  NgForOf,
  NgIf,
  NzButtonComponent,
  NzButtonModule,
  NzTransitionPatchDirective,
  NzWaveDirective,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTW5U2M5.js";

// src/app/view-ot-report/view-ot-report.service.ts
var API_BASE = "/ess/infoApply/api/otReport";
var ViewOtReportService = class _ViewOtReportService {
  constructor(http) {
    this.http = http;
  }
  http;
  getPageList(params) {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      httpParams = httpParams.set(key, String(value));
    }
    return this.http.get(`${API_BASE}/list`, {
      params: httpParams,
      withCredentials: true
    });
  }
  buildExportUrl(params) {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      httpParams = httpParams.set(key, String(value));
    }
    return `${API_BASE}/export?${httpParams.toString()}`;
  }
  getAuthorizedDepartments() {
    return this.http.get("/ar/attendanceSettings/api/arSupervisor/authorized-departments", {
      withCredentials: true
    });
  }
  static \u0275fac = function ViewOtReportService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewOtReportService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewOtReportService, factory: _ViewOtReportService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewOtReportService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-ot-report/view-ot-report.component.ts
function ViewOtReportComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.deptTreeErrorMessage());
  }
}
function ViewOtReportComponent_nz_alert_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 28);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r0.errorMessage() ?? "");
  }
}
function ViewOtReportComponent_th_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, m_r2.labelKey, m_r2.fallback));
  }
}
function ViewOtReportComponent_th_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, m_r3.labelKey, m_r3.fallback));
  }
}
function ViewOtReportComponent_th_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, m_r4.labelKey, m_r4.fallback));
  }
}
function ViewOtReportComponent_tr_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 31);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 34);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewOtReportComponent_tr_75_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r5 = ctx.$implicit;
    const row_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6[m_r5.monthField]);
  }
}
function ViewOtReportComponent_tr_75_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r7 = ctx.$implicit;
    const row_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6[m_r7.officialField]);
  }
}
function ViewOtReportComponent_tr_75_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r8 = ctx.$implicit;
    const row_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6[m_r8.probationField]);
  }
}
function ViewOtReportComponent_tr_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 32);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 32);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 32);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, ViewOtReportComponent_tr_75_td_15_Template, 2, 1, "td", 33)(16, ViewOtReportComponent_tr_75_td_16_Template, 2, 1, "td", 33)(17, ViewOtReportComponent_tr_75_td_17_Template, 2, 1, "td", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r0.pageIndex - 1) * ctx_r0.pageSize + i_r9 + 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.empId || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.empId);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.localName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.localName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.deptName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.deptName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.totalOtMonth);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.preMonthlyTotalQty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.totalOtYear);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.otMetricColumns);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.otMetricColumns);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.otMetricColumns);
  }
}
var OT_METRIC_COLUMNS = [
  { labelKey: "ess.viewArPersonalYearList.WORKDAYOT150_HOURS.b", fallback: "T\u0103ng ca ng\xE0y th\u01B0\u1EDDng 150%", monthField: "otRegular150Month", officialField: "otRegular150ExcessOfficial", probationField: "otRegular150ExcessProbation" },
  { labelKey: "ess.viewArPersonalYearList.WORKDAYOT200_HOURS.b", fallback: "T\u0103ng ca ng\xE0y th\u01B0\u1EDDng 200%", monthField: "otRegular200Month", officialField: "otRegular200ExcessOfficial", probationField: "otRegular200ExcessProbation" },
  { labelKey: "ess.viewArPersonalYearList.WORKDAYOT210_HOURS.b", fallback: "T\u0103ng ca ng\xE0y th\u01B0\u1EDDng 210%", monthField: "otRegular210Month", officialField: "otRegular210ExcessOfficial", probationField: "otRegular210ExcessProbation" },
  { labelKey: "ess.viewArPersonalYearList.SATURDAYOT200_HOURS.b", fallback: "T\u0103ng ca ng\xE0y h\u01B0\u1EDFng l\u01B0\u01A1ng 200%", monthField: "otSaturday200Month", officialField: "otSaturday200ExcessOfficial", probationField: "otSaturday200ExcessProbation" },
  { labelKey: "ess.viewArPersonalYearList.SATURDAYOT270_HOURS.b", fallback: "T\u0103ng ca ng\xE0y h\u01B0\u1EDFng l\u01B0\u01A1ng 270%", monthField: "otSaturday270Month", officialField: "otSaturday270ExcessOfficial", probationField: "otSaturday270ExcessProbation" },
  { labelKey: "ess.viewArPersonalYearList.WEEKLYOT200_HOURS.b", fallback: "T\u0103ng ca cu\u1ED1i tu\u1EA7n 200%", monthField: "otWeekend200Month", officialField: "otWeekend200ExcessOfficial", probationField: "otWeekend200ExcessProbation" },
  { labelKey: "ess.viewArPersonalYearList.WEEKLYOT270_HOURS.b", fallback: "T\u0103ng ca cu\u1ED1i tu\u1EA7n 270%", monthField: "otWeekend270Month", officialField: "otWeekend270ExcessOfficial", probationField: "otWeekend270ExcessProbation" },
  { labelKey: "ess.viewArPersonalYearList.HOLIDAYOT300_HOURS.b", fallback: "T\u0103ng ca ng\xE0y L\u1EC5 300%", monthField: "otHoliday300Month", officialField: "otHoliday300ExcessOfficial", probationField: "otHoliday300ExcessProbation" },
  { labelKey: "ess.viewArPersonalYearList.HOLIDAYOT390_HOURS.b", fallback: "T\u0103ng ca ng\xE0y L\u1EC5 390%", monthField: "otHoliday390Month", officialField: "otHoliday390ExcessOfficial", probationField: "otHoliday390ExcessProbation" }
];
var I18N_KEYS = [
  "common.month",
  "essDept.keyword",
  "vdp.search.empKeyword.placeholder",
  "common.deptName",
  "ex.placeholder.dept",
  "essDept.search",
  "ess.viewMonthDetailList.btnExport",
  "common.stt",
  "common.empId",
  "common.empName",
  "ess.viewOtReport.totalOtMonth.b",
  "ess.viewOtReport.preMonthlyTotalQty.b",
  "ess.viewOtReport.totalOtYear.b",
  "ess.viewOtReport.excessOt.b",
  "ess.viewArPersonalYearList.REGULAR_DAYS.b",
  "ess.viewArPersonalYearList.PROBATION_DAYS.b",
  "common.total",
  "common.noData",
  "common.loadFail",
  "mep.msg.loadDeptFailed",
  ...OT_METRIC_COLUMNS.map((m) => m.labelKey)
];
var ViewOtReportComponent = class _ViewOtReportComponent {
  constructor(api, i18n) {
    this.api = api;
    this.i18n = i18n;
  }
  api;
  i18n;
  otMetricColumns = OT_METRIC_COLUMNS;
  pageSizeOptions = [10, 25, 50, 100];
  rows = signal(
    [],
    ...ngDevMode ? [{ debugName: "rows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  errorMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "errorMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  recordsTotal = signal(
    0,
    ...ngDevMode ? [{ debugName: "recordsTotal" }] : (
      /* istanbul ignore next */
      []
    )
  );
  deptNodes = signal(
    [],
    ...ngDevMode ? [{ debugName: "deptNodes" }] : (
      /* istanbul ignore next */
      []
    )
  );
  deptTreeErrorMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "deptTreeErrorMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  monthValue = /* @__PURE__ */ new Date();
  keyword = "";
  deptNos = [];
  pageIndex = 1;
  pageSize = 25;
  /** id -> danh sách id con trực tiếp - dùng để mở rộng lựa chọn cây phòng ban khi tra cứu (xem search()). */
  deptChildrenMap = /* @__PURE__ */ new Map();
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
  }
  search() {
    this.pageIndex = 1;
    this.loadPage();
  }
  onPageIndexChange(pageIndex) {
    this.pageIndex = pageIndex;
    this.loadPage();
  }
  onPageSizeChange(pageSize) {
    this.pageSize = pageSize;
    this.pageIndex = 1;
    this.loadPage();
  }
  exportReport() {
    const { month, year } = this.monthYear();
    const deptNos = this.expandDeptSelection(this.deptNos).join(",");
    const url = this.api.buildExportUrl({ month, year, keyword: this.keyword, deptNos });
    window.location.href = url;
  }
  loadPage() {
    const { month, year } = this.monthYear();
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getPageList({
      month,
      year,
      keyword: this.keyword,
      deptNos: this.expandDeptSelection(this.deptNos).join(","),
      draw: this.pageIndex,
      start: (this.pageIndex - 1) * this.pageSize,
      length: this.pageSize
    }).subscribe({
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
        this.errorMessage.set(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.loading.set(false);
      }
    });
  }
  monthYear() {
    const d = this.monthValue;
    return { month: String(d.getMonth() + 1).padStart(2, "0"), year: String(d.getFullYear()) };
  }
  // ==================== Cây phòng ban ====================
  loadDeptTree() {
    this.api.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(this.buildDeptTree(list ?? [])),
      error: () => this.deptTreeErrorMessage.set(this.i18n.t("mep.msg.loadDeptFailed", "L\u1ED7i khi t\u1EA3i danh s\xE1ch ph\xF2ng ban"))
    });
  }
  buildDeptTree(list) {
    const map = /* @__PURE__ */ new Map();
    list.forEach((d) => map.set(d.id, { title: d.text, key: d.id, parent: d.parent, children: [] }));
    this.deptChildrenMap = /* @__PURE__ */ new Map();
    const roots = [];
    map.forEach((node) => {
      if (node.parent && node.parent !== "0" && map.has(node.parent)) {
        map.get(node.parent).children.push(node);
        const siblings = this.deptChildrenMap.get(node.parent) ?? [];
        siblings.push(node.key);
        this.deptChildrenMap.set(node.parent, siblings);
      } else {
        roots.push(node);
      }
    });
    const markLeaf = (nodes) => {
      nodes.forEach((n) => {
        n.isLeaf = !n.children || n.children.length === 0;
        if (n.children?.length)
          markLeaf(n.children);
      });
    };
    markLeaf(roots);
    return roots;
  }
  /** nz-tree-select chỉ trả về key của node được tick trực tiếp - phải tự mở rộng xuống các phòng ban
   *  con trước khi gửi deptNos lên, giống ManageEmpPositionInfoComponent/AttendanceExBatchInfoComponent. */
  expandDeptSelection(selected) {
    const result = /* @__PURE__ */ new Set();
    const stack = [...selected];
    while (stack.length) {
      const id = stack.pop();
      if (result.has(id))
        continue;
      result.add(id);
      const children = this.deptChildrenMap.get(id);
      if (children)
        stack.push(...children);
    }
    return Array.from(result);
  }
  static \u0275fac = function ViewOtReportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewOtReportComponent)(\u0275\u0275directiveInject(ViewOtReportService), \u0275\u0275directiveInject(I18nService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewOtReportComponent, selectors: [["app-view-ot-report"]], decls: 76, vars: 95, consts: [[1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", "align-items-end", 3, "ngSubmit"], [1, "col-md-2"], [1, "form-label"], ["name", "month", "nzMode", "month", "nzFormat", "MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel", "nzAllowClear"], [1, "col-md-3"], ["nz-input", "", "name", "keyword", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "deptNos", "nzCheckable", "", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["class", "text-danger small mt-1", 4, "ngIf"], [1, "col-md-4"], ["nz-button", "", "nzType", "primary", "type", "submit"], ["nz-button", "", "nzType", "default", "type", "button", 1, "ms-2", 3, "click"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [1, "fw-bold", "mb-2"], [1, "table-scroll-wrapper"], ["nzShowSizeChanger", "", 1, "table-nowrap", 3, "nzPageIndexChange", "nzPageSizeChange", "nzData", "nzFrontPagination", "nzLoading", "nzTotal", "nzPageIndex", "nzPageSize", "nzPageSizeOptions"], ["rowspan", "3", 1, "otr-col-stt"], ["rowspan", "3", 1, "otr-col-emp-id"], ["rowspan", "3", 1, "otr-col-emp-name"], ["rowspan", "3", 1, "otr-col-dept"], ["rowspan", "3", 1, "otr-col-total"], ["rowspan", "3", "class", "ot-metric-col", 4, "ngFor", "ngForOf"], ["class", "ot-metric-col", 4, "ngFor", "ngForOf"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "text-danger", "small", "mt-1"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["rowspan", "3", 1, "ot-metric-col"], [1, "ot-metric-col"], [1, "text-center"], [1, "text-end"], ["class", "text-end ot-metric-col", 4, "ngFor", "ngForOf"], [1, "text-end", "ot-metric-col"]], template: function ViewOtReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "nz-card", 2)(3, "form", 3);
      \u0275\u0275listener("ngSubmit", function ViewOtReportComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 4)(5, "label", 5);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "nz-date-picker", 6);
      \u0275\u0275twoWayListener("ngModelChange", function ViewOtReportComponent_Template_nz_date_picker_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.monthValue, $event) || (ctx.monthValue = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 7)(10, "label", 5);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "input", 8);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewOtReportComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.keyword, $event) || (ctx.keyword = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 7)(16, "label", 5);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "nz-tree-select", 9);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewOtReportComponent_Template_nz_tree_select_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.deptNos, $event) || (ctx.deptNos = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275template(21, ViewOtReportComponent_div_21_Template, 2, 1, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 11)(23, "button", 12);
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "button", 13);
      \u0275\u0275listener("click", function ViewOtReportComponent_Template_button_click_26_listener() {
        return ctx.exportReport();
      });
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "nz-card");
      \u0275\u0275template(30, ViewOtReportComponent_nz_alert_30_Template, 1, 1, "nz-alert", 14);
      \u0275\u0275elementStart(31, "div", 15);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 16)(35, "nz-table", 17);
      \u0275\u0275listener("nzPageIndexChange", function ViewOtReportComponent_Template_nz_table_nzPageIndexChange_35_listener($event) {
        return ctx.onPageIndexChange($event);
      })("nzPageSizeChange", function ViewOtReportComponent_Template_nz_table_nzPageSizeChange_35_listener($event) {
        return ctx.onPageSizeChange($event);
      });
      \u0275\u0275elementStart(36, "thead")(37, "tr")(38, "th", 18);
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "th", 19);
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "th", 20);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "th", 21);
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "th", 22);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "th", 22);
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "th", 22);
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(59, ViewOtReportComponent_th_59_Template, 3, 4, "th", 23);
      \u0275\u0275elementStart(60, "th");
      \u0275\u0275text(61);
      \u0275\u0275pipe(62, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "tr")(64, "th");
      \u0275\u0275text(65);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "th");
      \u0275\u0275text(68);
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "tr");
      \u0275\u0275template(71, ViewOtReportComponent_th_71_Template, 3, 4, "th", 24)(72, ViewOtReportComponent_th_72_Template, 3, 4, "th", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "tbody");
      \u0275\u0275template(74, ViewOtReportComponent_tr_74_Template, 4, 5, "tr", 25)(75, ViewOtReportComponent_tr_75_Template, 18, 13, "tr", 26);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 41, "common.month", "Th\xE1ng"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.monthValue);
      \u0275\u0275property("nzAllowClear", false);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 44, "essDept.keyword", "M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.keyword);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(14, 47, "vdp.search.empKeyword.placeholder", "Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 50, "common.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzNodes", ctx.deptNodes());
      \u0275\u0275twoWayProperty("ngModel", ctx.deptNos);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(20, 53, "ex.placeholder.dept", "Ch\u1ECDn ph\xF2ng ban"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.deptTreeErrorMessage());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 56, "essDept.search", "Tra c\u1EE9u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 59, "ess.viewMonthDetailList.btnExport", "Xu\u1EA5t b\xE1o c\xE1o"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(33, 62, "common.total", "T\u1ED5ng"), ": ", ctx.recordsTotal());
      \u0275\u0275advance(3);
      \u0275\u0275property("nzData", ctx.rows())("nzFrontPagination", false)("nzLoading", ctx.loading())("nzTotal", ctx.recordsTotal())("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzPageSizeOptions", ctx.pageSizeOptions);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 65, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 68, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 71, "common.empName", "T\xEAn nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 74, "common.deptName", "B\u1ED9 ph\u1EADn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(52, 77, "ess.viewOtReport.totalOtMonth.b", "T\u1ED5ng t\u0103ng ca th\xE1ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(55, 80, "ess.viewOtReport.preMonthlyTotalQty.b", "T\u1ED5ng t\u0103ng ca th\xE1ng tr\u01B0\u1EDBc"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(58, 83, "ess.viewOtReport.totalOtYear.b", "T\u1ED5ng t\u0103ng ca n\u0103m"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.otMetricColumns);
      \u0275\u0275advance();
      \u0275\u0275attribute("colspan", 18);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(62, 86, "ess.viewOtReport.excessOt.b", "T\u0103ng ca v\u01B0\u1EE3t"));
      \u0275\u0275advance(3);
      \u0275\u0275attribute("colspan", 9);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(66, 89, "ess.viewArPersonalYearList.REGULAR_DAYS.b", "Ch\xEDnh th\u1EE9c"));
      \u0275\u0275advance(2);
      \u0275\u0275attribute("colspan", 9);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 92, "ess.viewArPersonalYearList.PROBATION_DAYS.b", "Th\u1EED vi\u1EC7c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.otMetricColumns);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.otMetricColumns);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.rows());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzDatePickerModule, NzDatePickerComponent, NzInputModule, NzInputDirective, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzCardModule, NzCardComponent, NzAlertModule, NzAlertComponent, NzTreeSelectModule, NzTreeSelectComponent, TranslatePipe], styles: ["\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  white-space: normal;\n  word-break: break-word;\n  text-align: center;\n  vertical-align: middle;\n}\n.ot-metric-col[_ngcontent-%COMP%] {\n  width: 90px;\n  min-width: 90px;\n  max-width: 90px;\n}\n.otr-col-stt[_ngcontent-%COMP%] {\n  width: 55px;\n  min-width: 55px;\n}\n.otr-col-emp-id[_ngcontent-%COMP%] {\n  width: 110px;\n  min-width: 110px;\n}\n.otr-col-emp-name[_ngcontent-%COMP%] {\n  width: 160px;\n  min-width: 160px;\n}\n.otr-col-dept[_ngcontent-%COMP%] {\n  width: 200px;\n  min-width: 200px;\n}\n.otr-col-total[_ngcontent-%COMP%] {\n  width: 110px;\n  min-width: 110px;\n}\ntd.ot-metric-col[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.table-scroll-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n/*# sourceMappingURL=view-ot-report.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewOtReportComponent, [{
    type: Component,
    args: [{ selector: "app-view-ot-report", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzDatePickerModule,
      NzInputModule,
      NzButtonModule,
      NzCardModule,
      NzAlertModule,
      NzTreeSelectModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- Form t\xECm ki\u1EBFm - \u0111\u1EE9ng im khi cu\u1ED9n (xem .sticky-filter-card trong styles.css) -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3 align-items-end" (ngSubmit)="search()">
        <div class="col-md-2">
          <label class="form-label">{{ 'common.month' | translate:'Th\xE1ng' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="monthValue" name="month" nzMode="month" nzFormat="MM/yyyy"
                          [nzAllowClear]="false"></nz-date-picker>
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'essDept.keyword' | translate:'M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn' }}</label>
          <input nz-input [(ngModel)]="keyword" name="keyword"
                 [placeholder]="'vdp.search.empKeyword.placeholder' | translate:'Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn'">
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</label>
          <nz-tree-select class="w-100" [nzNodes]="deptNodes()" [(ngModel)]="deptNos" name="deptNos"
                           nzCheckable nzShowSearch nzAllowClear
                           [nzPlaceHolder]="'ex.placeholder.dept' | translate:'Ch\u1ECDn ph\xF2ng ban'"></nz-tree-select>
          <div *ngIf="deptTreeErrorMessage()" class="text-danger small mt-1">{{ deptTreeErrorMessage() }}</div>
        </div>
        <div class="col-md-4">
          <button nz-button nzType="primary" type="submit">{{ 'essDept.search' | translate:'Tra c\u1EE9u' }}</button>
          <button nz-button nzType="default" type="button" class="ms-2" (click)="exportReport()">{{ 'ess.viewMonthDetailList.btnExport' | translate:'Xu\u1EA5t b\xE1o c\xE1o' }}</button>
        </div>
      </form>
    </nz-card>

    <!-- B\u1EA3ng b\xE1o c\xE1o t\u0103ng ca theo th\xE1ng -->
    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <div class="fw-bold mb-2">{{ 'common.total' | translate:'T\u1ED5ng' }}: {{ recordsTotal() }}</div>

      <!-- B\u1ECDc div cu\u1ED9n ngang th\u1EE7 c\xF4ng (kh\xF4ng d\xF9ng nzScroll) - xem gi\u1EA3i th\xEDch trong
           dept-ot-apply-info.component.html: header 3 h\xE0ng rowspan/colspan \u1EDF \u0111\xE2y c\xF3 34 c\u1ED9t l\xE1
           nh\u01B0ng h\xE0ng 1 c\xF3 \xF4 g\u1ED9p colspan kh\xF4ng c\xF3 nzWidth, khi\u1EBFn colgroup \u0111\u1ED3ng b\u1ED9 sai n\u1EBFu b\u1EADt nzScroll. -->
      <div class="table-scroll-wrapper">
        <nz-table [nzData]="rows()" [nzFrontPagination]="false" [nzLoading]="loading()"
                  [nzTotal]="recordsTotal()" [nzPageIndex]="pageIndex" [nzPageSize]="pageSize"
                  [nzPageSizeOptions]="pageSizeOptions" nzShowSizeChanger
                  (nzPageIndexChange)="onPageIndexChange($event)" (nzPageSizeChange)="onPageSizeChange($event)"
                  class="table-nowrap">
          <thead>
            <tr>
              <th rowspan="3" class="otr-col-stt">{{ 'common.stt' | translate:'STT' }}</th>
              <th rowspan="3" class="otr-col-emp-id">{{ 'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
              <th rowspan="3" class="otr-col-emp-name">{{ 'common.empName' | translate:'T\xEAn nh\xE2n vi\xEAn' }}</th>
              <th rowspan="3" class="otr-col-dept">{{ 'common.deptName' | translate:'B\u1ED9 ph\u1EADn' }}</th>
              <th rowspan="3" class="otr-col-total">{{ 'ess.viewOtReport.totalOtMonth.b' | translate:'T\u1ED5ng t\u0103ng ca th\xE1ng' }}</th>
              <th rowspan="3" class="otr-col-total">{{ 'ess.viewOtReport.preMonthlyTotalQty.b' | translate:'T\u1ED5ng t\u0103ng ca th\xE1ng tr\u01B0\u1EDBc' }}</th>
              <th rowspan="3" class="otr-col-total">{{ 'ess.viewOtReport.totalOtYear.b' | translate:'T\u1ED5ng t\u0103ng ca n\u0103m' }}</th>
              <th rowspan="3" class="ot-metric-col" *ngFor="let m of otMetricColumns">{{ m.labelKey | translate:m.fallback }}</th>
              <th [attr.colspan]="18">{{ 'ess.viewOtReport.excessOt.b' | translate:'T\u0103ng ca v\u01B0\u1EE3t' }}</th>
            </tr>
            <tr>
              <th [attr.colspan]="9">{{ 'ess.viewArPersonalYearList.REGULAR_DAYS.b' | translate:'Ch\xEDnh th\u1EE9c' }}</th>
              <th [attr.colspan]="9">{{ 'ess.viewArPersonalYearList.PROBATION_DAYS.b' | translate:'Th\u1EED vi\u1EC7c' }}</th>
            </tr>
            <tr>
              <th class="ot-metric-col" *ngFor="let m of otMetricColumns">{{ m.labelKey | translate:m.fallback }}</th>
              <th class="ot-metric-col" *ngFor="let m of otMetricColumns">{{ m.labelKey | translate:m.fallback }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="!loading() && rows().length === 0">
              <td [attr.colspan]="34" class="text-center">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
            </tr>
            <tr *ngFor="let row of rows(); let i = index">
              <td class="text-center">{{ (pageIndex - 1) * pageSize + i + 1 }}</td>
              <td class="text-center" [attr.title]="row.empId || null">{{ row.empId }}</td>
              <td [attr.title]="row.localName || null">{{ row.localName }}</td>
              <td [attr.title]="row.deptName || null">{{ row.deptName }}</td>
              <td class="text-end">{{ row.totalOtMonth }}</td>
              <td class="text-end">{{ row.preMonthlyTotalQty }}</td>
              <td class="text-end">{{ row.totalOtYear }}</td>
              <td class="text-end ot-metric-col" *ngFor="let m of otMetricColumns">{{ row[m.monthField] }}</td>
              <td class="text-end ot-metric-col" *ngFor="let m of otMetricColumns">{{ row[m.officialField] }}</td>
              <td class="text-end ot-metric-col" *ngFor="let m of otMetricColumns">{{ row[m.probationField] }}</td>
            </tr>
          </tbody>
        </nz-table>
      </div>
    </nz-card>
  </div>
</div>
`, styles: ["/* src/app/view-ot-report/view-ot-report.component.css */\ntable td,\ntable th {\n  white-space: nowrap;\n}\ntable th {\n  white-space: normal;\n  word-break: break-word;\n  text-align: center;\n  vertical-align: middle;\n}\n.ot-metric-col {\n  width: 90px;\n  min-width: 90px;\n  max-width: 90px;\n}\n.otr-col-stt {\n  width: 55px;\n  min-width: 55px;\n}\n.otr-col-emp-id {\n  width: 110px;\n  min-width: 110px;\n}\n.otr-col-emp-name {\n  width: 160px;\n  min-width: 160px;\n}\n.otr-col-dept {\n  width: 200px;\n  min-width: 200px;\n}\n.otr-col-total {\n  width: 110px;\n  min-width: 110px;\n}\ntd.ot-metric-col {\n  white-space: nowrap;\n}\n.table-scroll-wrapper {\n  overflow-x: auto;\n}\n/*# sourceMappingURL=view-ot-report.component.css.map */\n"] }]
  }], () => [{ type: ViewOtReportService }, { type: I18nService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewOtReportComponent, { className: "ViewOtReportComponent", filePath: "src/app/view-ot-report/view-ot-report.component.ts", lineNumber: 71 });
})();
export {
  ViewOtReportComponent
};
//# debugId=2a4be3a4-effb-5b0f-8aa8-ad57cb4d97d6
//# sourceMappingURL=chunk-OEQW7HKZ.js.map
