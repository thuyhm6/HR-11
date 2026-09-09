import {
  NzMessageService
} from "./chunk-XWW7CXU6.js";
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
import {
  NzOptionComponent,
  NzSelectComponent,
  NzSelectModule
} from "./chunk-2QLZSMGV.js";
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTW5U2M5.js";

// src/app/view-month-detail-list/view-month-detail-list.service.ts
var API_BASE = "/ess/tempEmp/api/monthDetailList";
var ViewMonthDetailListService = class _ViewMonthDetailListService {
  constructor(http) {
    this.http = http;
  }
  http;
  getPageList(params) {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      httpParams = httpParams.set(key, String(value));
    }
    return this.http.get(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
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
  static \u0275fac = function ViewMonthDetailListService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewMonthDetailListService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewMonthDetailListService, factory: _ViewMonthDetailListService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewMonthDetailListService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-month-detail-list/view-month-detail-list.component.ts
function ViewMonthDetailListComponent_nz_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 32);
  }
  if (rf & 2) {
    const y_r1 = ctx.$implicit;
    \u0275\u0275property("nzValue", y_r1)("nzLabel", y_r1);
  }
}
function ViewMonthDetailListComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.deptTreeErrorMessage());
  }
}
function ViewMonthDetailListComponent_nz_option_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 32);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const o_r3 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r3.value)("nzLabel", \u0275\u0275pipeBind2(1, 2, o_r3.labelKey, o_r3.fallback));
  }
}
function ViewMonthDetailListComponent_nz_option_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 32);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const o_r4 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r4.value)("nzLabel", \u0275\u0275pipeBind2(1, 2, o_r4.labelKey, o_r4.fallback));
  }
}
function ViewMonthDetailListComponent_nz_alert_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 34);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ViewMonthDetailListComponent_tr_137_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 35);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 18);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "ess.viewMonthDetailList.msg.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewMonthDetailListComponent_tr_138_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 29);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 29);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 29);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 29);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 36);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 36);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 36);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 36);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 36);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td", 36);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td", 36);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td", 36);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "td", 36);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "td", 36);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r1.pageIndex - 1) * ctx_r1.pageSize + i_r6 + 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.empId || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.empId);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.localName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.localName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.deptName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.deptName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.dob);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.dutyName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.dutyName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.dateStarted);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.endProbationDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.hcDayOt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.hcNightOt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.hcNightOt210);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.restDayOt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.restNightOt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.holDayOt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.holNightOt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.adminShiftDays);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.nightShiftDays);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.standardWorkDays);
  }
}
var EMP_TYPE_OPTIONS = [
  { value: "MTSVN", labelKey: "ess.viewMonthDetailList.empType.mtsvn", fallback: "MTSVN" },
  { value: "THOIVU", labelKey: "ess.viewMonthDetailList.empType.thoiVu", fallback: "Th\u1EDDi v\u1EE5" }
];
var REPORT_TYPE_OPTIONS = [
  { value: "305", labelKey: "ess.viewMonthDetailList.reportType.salary", fallback: "C\xF4ng t\xEDnh l\u01B0\u01A1ng" }
];
var I18N_KEYS = [
  "common.month",
  "common.year",
  "essDept.keyword",
  "vdp.search.empKeyword.placeholder",
  "common.deptName",
  "vdp.search.dept.placeholder",
  "common.type",
  "common.all",
  "ess.viewMonthDetailList.empType.mtsvn",
  "ess.viewMonthDetailList.empType.thoiVu",
  "ess.viewMonthDetailList.reportType",
  "ess.viewMonthDetailList.reportType.salary",
  "essDept.search",
  "ess.viewMonthDetailList.btnExport",
  "common.total",
  "common.quickFilter",
  "common.stt",
  "ess.viewMonthDetailList.BASIC_INFO.b",
  "ess.viewMonthDetailList.OT_ON_WEEKDAY.b",
  "ess.viewMonthDetailList.OT_ON_WEEKEND.b",
  "ess.viewMonthDetailList.OT_ON_HOLIDAY.b",
  "ess.viewMonthDetailList.WORK_DAYS.b",
  "common.empId",
  "common.empName",
  "epi.field.dob",
  "common.duty",
  "common.dateJoined",
  "hr.enpinfo.title.EMP.PROBATION_END_DATE",
  "ess.viewMonthDetailList.DAY_OT.b",
  "ess.viewMonthDetailList.NIGHT_OT.b",
  "ess.viewMonthDetailList.NIGHT_OT_210.b",
  "ar.viewArShiftMonthCheckList.ZHENGCHANGBAN.b",
  "ess.viewMonthDetailList.NIGHT_SHIFT.b",
  "ar.viewSearchOtInfo.YINGCHUQIN.b",
  "ess.viewMonthDetailList.msg.noData",
  "ess.viewMonthDetailList.msg.loadFailed",
  "ess.viewMonthDetailList.msg.selectReportType",
  "common.loadFail",
  "mep.msg.loadDeptFailed"
];
var YEAR_RANGE = 5;
var ViewMonthDetailListComponent = class _ViewMonthDetailListComponent {
  constructor(api, i18n, message) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
  }
  api;
  i18n;
  message;
  pageSizeOptions = [25, 50, 100, 200];
  empTypeOptions = EMP_TYPE_OPTIONS;
  reportTypeOptions = REPORT_TYPE_OPTIONS;
  yearOptions = this.buildYearOptions();
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
  deptTreeErrorMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "deptTreeErrorMessage" }] : (
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
  monthValue = /* @__PURE__ */ new Date();
  reportYear = String((/* @__PURE__ */ new Date()).getFullYear());
  keyword = "";
  deptNos = [];
  empTypeCode = null;
  reportType = REPORT_TYPE_OPTIONS[0]?.value ?? null;
  quickFilter = "";
  pageIndex = 1;
  pageSize = 25;
  /** id -> danh sách id con trực tiếp - dùng để mở rộng lựa chọn cây phòng ban khi tra cứu (xem search()). */
  deptChildrenMap = /* @__PURE__ */ new Map();
  quickFilterTimer = null;
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
    this.search();
  }
  search() {
    this.pageIndex = 1;
    this.loadPage();
  }
  onQuickFilterChange() {
    if (this.quickFilterTimer)
      clearTimeout(this.quickFilterTimer);
    this.quickFilterTimer = setTimeout(() => this.search(), 400);
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
    if (!this.reportType) {
      this.message.warning(this.i18n.t("ess.viewMonthDetailList.msg.selectReportType", "Vui l\xF2ng ch\u1ECDn lo\u1EA1i b\xE1o c\xE1o"));
      return;
    }
    const { month, year } = this.monthYear();
    const url = this.api.buildExportUrl({
      month,
      year,
      keyword: this.keyword,
      quickFilter: this.quickFilter,
      deptNos: this.expandDeptSelection(this.deptNos).join(","),
      empTypeCode: this.empTypeCode ?? "",
      reportType: this.reportType,
      reportYear: this.reportYear
    });
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
      quickFilter: this.quickFilter,
      deptNos: this.expandDeptSelection(this.deptNos).join(","),
      empTypeCode: this.empTypeCode ?? "",
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
        this.errorMessage.set(this.i18n.t("ess.viewMonthDetailList.msg.loadFailed", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i"));
        this.rows.set([]);
        this.recordsTotal.set(0);
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
  /** nz-tree-select chỉ trả về key của node được tick trực tiếp - KHÔNG tự cascade xuống phòng ban con
   *  như widget DeptTree.js gốc. Backend lọc theo deptNos đúng từng mã, nên phải tự mở rộng xuống các
   *  phòng ban con trước khi gửi lên (xem giải thích đầy đủ ở ManageEmpPositionInfoComponent). */
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
  buildYearOptions() {
    const cur = (/* @__PURE__ */ new Date()).getFullYear();
    const years = [];
    for (let y = cur + 1; y >= cur - YEAR_RANGE; y--)
      years.push(String(y));
    return years;
  }
  static \u0275fac = function ViewMonthDetailListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewMonthDetailListComponent)(\u0275\u0275directiveInject(ViewMonthDetailListService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewMonthDetailListComponent, selectors: [["app-view-month-detail-list"]], decls: 139, vars: 177, consts: [[1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", "align-items-end", 3, "ngSubmit"], [1, "col-md-2"], [1, "form-label"], ["name", "month", "nzMode", "month", "nzFormat", "MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel", "nzAllowClear"], ["name", "reportYear", 1, "w-100", 3, "ngModelChange", "ngModel"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col-md-3"], ["nz-input", "", "name", "keyword", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "deptNos", "nzCheckable", "", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["class", "text-danger small mt-1", 4, "ngIf"], ["name", "empTypeCode", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["name", "reportType", 1, "w-100", 3, "ngModelChange", "ngModel"], [1, "col-12", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "nzType", "default", "type", "button", 3, "click"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [1, "d-flex", "align-items-center", "gap-2", "mb-2", "flex-wrap"], [1, "fw-bold"], [1, "ms-auto", "d-flex", "align-items-center", "gap-2"], [1, "small"], ["nz-input", "", "name", "quickFilter", 2, "max-width", "200px", 3, "ngModelChange", "ngModel", "placeholder"], [1, "table-scroll-wrapper"], ["nzShowSizeChanger", "", 1, "table-nowrap", 3, "nzPageIndexChange", "nzPageSizeChange", "nzData", "nzFrontPagination", "nzLoading", "nzTotal", "nzPageIndex", "nzPageSize", "nzPageSizeOptions"], ["rowspan", "2", 1, "text-center"], [1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"], [1, "text-danger", "small", "mt-1"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], [1, "text-center", "text-muted"], [1, "text-end"]], template: function ViewMonthDetailListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "nz-card", 2)(3, "form", 3);
      \u0275\u0275listener("ngSubmit", function ViewMonthDetailListComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 4)(5, "label", 5);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "nz-date-picker", 6);
      \u0275\u0275twoWayListener("ngModelChange", function ViewMonthDetailListComponent_Template_nz_date_picker_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.monthValue, $event) || (ctx.monthValue = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 4)(10, "label", 5);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "nz-select", 7);
      \u0275\u0275twoWayListener("ngModelChange", function ViewMonthDetailListComponent_Template_nz_select_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.reportYear, $event) || (ctx.reportYear = $event);
        return $event;
      });
      \u0275\u0275template(14, ViewMonthDetailListComponent_nz_option_14_Template, 1, 2, "nz-option", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 9)(16, "label", 5);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "input", 10);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewMonthDetailListComponent_Template_input_ngModelChange_19_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.keyword, $event) || (ctx.keyword = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 9)(22, "label", 5);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "nz-tree-select", 11);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewMonthDetailListComponent_Template_nz_tree_select_ngModelChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.deptNos, $event) || (ctx.deptNos = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275template(27, ViewMonthDetailListComponent_div_27_Template, 2, 1, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 4)(29, "label", 5);
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "nz-select", 13);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewMonthDetailListComponent_Template_nz_select_ngModelChange_32_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.empTypeCode, $event) || (ctx.empTypeCode = $event);
        return $event;
      });
      \u0275\u0275template(34, ViewMonthDetailListComponent_nz_option_34_Template, 2, 5, "nz-option", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 9)(36, "label", 5);
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "nz-select", 14);
      \u0275\u0275twoWayListener("ngModelChange", function ViewMonthDetailListComponent_Template_nz_select_ngModelChange_39_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.reportType, $event) || (ctx.reportType = $event);
        return $event;
      });
      \u0275\u0275template(40, ViewMonthDetailListComponent_nz_option_40_Template, 2, 5, "nz-option", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 15)(42, "button", 16);
      \u0275\u0275element(43, "i", 17);
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "button", 18);
      \u0275\u0275listener("click", function ViewMonthDetailListComponent_Template_button_click_46_listener() {
        return ctx.exportReport();
      });
      \u0275\u0275element(47, "i", 19);
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(50, "nz-card");
      \u0275\u0275template(51, ViewMonthDetailListComponent_nz_alert_51_Template, 1, 1, "nz-alert", 20);
      \u0275\u0275elementStart(52, "div", 21)(53, "span", 22);
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 23)(57, "span", 24);
      \u0275\u0275text(58);
      \u0275\u0275pipe(59, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "input", 25);
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewMonthDetailListComponent_Template_input_ngModelChange_60_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.quickFilter, $event) || (ctx.quickFilter = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ViewMonthDetailListComponent_Template_input_ngModelChange_60_listener() {
        return ctx.onQuickFilterChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 26)(63, "nz-table", 27);
      \u0275\u0275listener("nzPageIndexChange", function ViewMonthDetailListComponent_Template_nz_table_nzPageIndexChange_63_listener($event) {
        return ctx.onPageIndexChange($event);
      })("nzPageSizeChange", function ViewMonthDetailListComponent_Template_nz_table_nzPageSizeChange_63_listener($event) {
        return ctx.onPageSizeChange($event);
      });
      \u0275\u0275elementStart(64, "thead")(65, "tr")(66, "th", 28);
      \u0275\u0275text(67);
      \u0275\u0275pipe(68, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "th", 29);
      \u0275\u0275text(70);
      \u0275\u0275pipe(71, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "th", 29);
      \u0275\u0275text(73);
      \u0275\u0275pipe(74, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "th", 29);
      \u0275\u0275text(76);
      \u0275\u0275pipe(77, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "th", 29);
      \u0275\u0275text(79);
      \u0275\u0275pipe(80, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "th", 29);
      \u0275\u0275text(82);
      \u0275\u0275pipe(83, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "tr")(85, "th", 29);
      \u0275\u0275text(86);
      \u0275\u0275pipe(87, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "th", 29);
      \u0275\u0275text(89);
      \u0275\u0275pipe(90, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "th", 29);
      \u0275\u0275text(92);
      \u0275\u0275pipe(93, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "th", 29);
      \u0275\u0275text(95);
      \u0275\u0275pipe(96, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "th", 29);
      \u0275\u0275text(98);
      \u0275\u0275pipe(99, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "th", 29);
      \u0275\u0275text(101);
      \u0275\u0275pipe(102, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "th", 29);
      \u0275\u0275text(104);
      \u0275\u0275pipe(105, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "th", 29);
      \u0275\u0275text(107);
      \u0275\u0275pipe(108, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "th", 29);
      \u0275\u0275text(110);
      \u0275\u0275pipe(111, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "th", 29);
      \u0275\u0275text(113);
      \u0275\u0275pipe(114, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "th", 29);
      \u0275\u0275text(116);
      \u0275\u0275pipe(117, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "th", 29);
      \u0275\u0275text(119);
      \u0275\u0275pipe(120, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "th", 29);
      \u0275\u0275text(122);
      \u0275\u0275pipe(123, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "th", 29);
      \u0275\u0275text(125);
      \u0275\u0275pipe(126, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "th", 29);
      \u0275\u0275text(128);
      \u0275\u0275pipe(129, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "th", 29);
      \u0275\u0275text(131);
      \u0275\u0275pipe(132, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "th", 29);
      \u0275\u0275text(134);
      \u0275\u0275pipe(135, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(136, "tbody");
      \u0275\u0275template(137, ViewMonthDetailListComponent_tr_137_Template, 4, 5, "tr", 30)(138, ViewMonthDetailListComponent_tr_138_Template, 37, 22, "tr", 31);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 66, "common.month", "Th\xE1ng"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.monthValue);
      \u0275\u0275property("nzAllowClear", false);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 69, "common.year", "N\u0103m"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.reportYear);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.yearOptions);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 72, "essDept.keyword", "M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.keyword);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(20, 75, "vdp.search.empKeyword.placeholder", "Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 78, "common.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzNodes", ctx.deptNodes());
      \u0275\u0275twoWayProperty("ngModel", ctx.deptNos);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(26, 81, "vdp.search.dept.placeholder", "Ch\u1ECDn ph\xF2ng ban"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.deptTreeErrorMessage());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 84, "common.type", "Lo\u1EA1i"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.empTypeCode);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(33, 87, "common.all", "T\u1EA5t c\u1EA3"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.empTypeOptions);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(38, 90, "ess.viewMonthDetailList.reportType", "Lo\u1EA1i b\xE1o c\xE1o"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.reportType);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.reportTypeOptions);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(45, 93, "essDept.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(49, 96, "ess.viewMonthDetailList.btnExport", "XU\u1EA4T B\xC1O C\xC1O"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(55, 99, "common.total", "T\u1ED5ng"), ": ", ctx.recordsTotal());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(59, 102, "common.quickFilter", "L\u1ECDc nhanh"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.quickFilter);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(61, 105, "common.quickFilter", "L\u1ECDc nhanh"));
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275property("nzData", ctx.rows())("nzFrontPagination", false)("nzLoading", ctx.loading())("nzTotal", ctx.recordsTotal())("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzPageSizeOptions", ctx.pageSizeOptions);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(68, 108, "common.stt", "NO."));
      \u0275\u0275advance(2);
      \u0275\u0275attribute("colspan", 7);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(71, 111, "ess.viewMonthDetailList.BASIC_INFO.b", "Th\xF4ng tin c\u01A1 b\u1EA3n"));
      \u0275\u0275advance(2);
      \u0275\u0275attribute("colspan", 3);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(74, 114, "ess.viewMonthDetailList.OT_ON_WEEKDAY.b", "H\xC0NH CH\xCDNH"));
      \u0275\u0275advance(2);
      \u0275\u0275attribute("colspan", 2);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(77, 117, "ess.viewMonthDetailList.OT_ON_WEEKEND.b", "NG\xC0Y NGH\u1EC8"));
      \u0275\u0275advance(2);
      \u0275\u0275attribute("colspan", 2);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(80, 120, "ess.viewMonthDetailList.OT_ON_HOLIDAY.b", "L\u1EC4 T\u1EBET"));
      \u0275\u0275advance(2);
      \u0275\u0275attribute("colspan", 3);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(83, 123, "ess.viewMonthDetailList.WORK_DAYS.b", "S\u1ED1 ng\xE0y l\xE0m vi\u1EC7c"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(87, 126, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(90, 129, "common.empName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(93, 132, "common.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(96, 135, "epi.field.dob", "Ng\xE0y sinh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(99, 138, "common.duty", "Ch\u1EE9c v\u1EE5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(102, 141, "common.dateJoined", "Ng\xE0y v\xE0o l\xE0m"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(105, 144, "hr.enpinfo.title.EMP.PROBATION_END_DATE", "Ng\xE0y k\u1EBFt th\xFAc th\u1EED vi\u1EC7c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(108, 147, "ess.viewMonthDetailList.DAY_OT.b", "TC NG\xC0Y"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(111, 150, "ess.viewMonthDetailList.NIGHT_OT.b", "TC \u0110\xCAM"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(114, 153, "ess.viewMonthDetailList.NIGHT_OT_210.b", "TC \u0110\xCAM(210%)"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(117, 156, "ess.viewMonthDetailList.DAY_OT.b", "TC NG\xC0Y"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(120, 159, "ess.viewMonthDetailList.NIGHT_OT.b", "TC \u0110\xCAM"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(123, 162, "ess.viewMonthDetailList.DAY_OT.b", "TC NG\xC0Y"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(126, 165, "ess.viewMonthDetailList.NIGHT_OT.b", "TC \u0110\xCAM"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(129, 168, "ar.viewArShiftMonthCheckList.ZHENGCHANGBAN.b", "Ca h\xE0nh ch\xEDnh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(132, 171, "ess.viewMonthDetailList.NIGHT_SHIFT.b", "CA \u0110\xCAM"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(135, 174, "ar.viewSearchOtInfo.YINGCHUQIN.b", "Ng\xE0y c\xF4ng chu\u1EA9n"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.rows());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzDatePickerModule, NzDatePickerComponent, NzTreeSelectModule, NzTreeSelectComponent, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.table-scroll-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n/*# sourceMappingURL=view-month-detail-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewMonthDetailListComponent, [{
    type: Component,
    args: [{ selector: "app-view-month-detail-list", standalone: true, imports: [
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
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm - \u0111\u1EE9ng im khi cu\u1ED9n (xem .sticky-filter-card trong styles.css) -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3 align-items-end" (ngSubmit)="search()">
        <div class="col-md-2">
          <label class="form-label">{{ 'common.month' | translate:'Th\xE1ng' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="monthValue" name="month" nzMode="month" nzFormat="MM/yyyy"
                          [nzAllowClear]="false"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'common.year' | translate:'N\u0103m' }}</label>
          <nz-select class="w-100" [(ngModel)]="reportYear" name="reportYear">
            <nz-option *ngFor="let y of yearOptions" [nzValue]="y" [nzLabel]="y"></nz-option>
          </nz-select>
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
                           [nzPlaceHolder]="'vdp.search.dept.placeholder' | translate:'Ch\u1ECDn ph\xF2ng ban'"></nz-tree-select>
          <div *ngIf="deptTreeErrorMessage()" class="text-danger small mt-1">{{ deptTreeErrorMessage() }}</div>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'common.type' | translate:'Lo\u1EA1i' }}</label>
          <nz-select class="w-100" [(ngModel)]="empTypeCode" name="empTypeCode" nzAllowClear
                     [nzPlaceHolder]="'common.all' | translate:'T\u1EA5t c\u1EA3'">
            <nz-option *ngFor="let o of empTypeOptions" [nzValue]="o.value" [nzLabel]="o.labelKey | translate:o.fallback"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'ess.viewMonthDetailList.reportType' | translate:'Lo\u1EA1i b\xE1o c\xE1o' }}</label>
          <nz-select class="w-100" [(ngModel)]="reportType" name="reportType">
            <nz-option *ngFor="let o of reportTypeOptions" [nzValue]="o.value" [nzLabel]="o.labelKey | translate:o.fallback"></nz-option>
          </nz-select>
        </div>
        <div class="col-12 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'essDept.search' | translate:'Tra c\u1EE9u' }}
          </button>
          <button nz-button nzType="default" type="button" (click)="exportReport()">
            <i class="bx bx-export"></i> {{ 'ess.viewMonthDetailList.btnExport' | translate:'XU\u1EA4T B\xC1O C\xC1O' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <div class="d-flex align-items-center gap-2 mb-2 flex-wrap">
        <span class="fw-bold">{{ 'common.total' | translate:'T\u1ED5ng' }}: {{ recordsTotal() }}</span>
        <div class="ms-auto d-flex align-items-center gap-2">
          <span class="small">{{ 'common.quickFilter' | translate:'L\u1ECDc nhanh' }}</span>
          <input nz-input [(ngModel)]="quickFilter" (ngModelChange)="onQuickFilterChange()" name="quickFilter"
                 [placeholder]="'common.quickFilter' | translate:'L\u1ECDc nhanh'" style="max-width:200px;">
        </div>
      </div>

      <!-- B\u1ECDc div cu\u1ED9n ngang th\u1EE7 c\xF4ng (kh\xF4ng d\xF9ng nzScroll) v\xEC nz-table ch\u1EC9 \u0111\u1ED3ng b\u1ED9 \u0111\u1ED9 r\u1ED9ng c\u1ED9t
           theo H\xC0NG \u0110\u1EA6U TI\xCAN c\u1EE7a thead khi header c\xF3 rowspan/colspan (xem gi\u1EA3i th\xEDch \u0111\u1EA7y \u0111\u1EE7 \u1EDF
           dept-ot-apply-info.component.html). -->
      <div class="table-scroll-wrapper">
        <nz-table [nzData]="rows()" [nzFrontPagination]="false" [nzLoading]="loading()"
                  [nzTotal]="recordsTotal()" [nzPageIndex]="pageIndex" [nzPageSize]="pageSize"
                  [nzPageSizeOptions]="pageSizeOptions" nzShowSizeChanger
                  (nzPageIndexChange)="onPageIndexChange($event)" (nzPageSizeChange)="onPageSizeChange($event)"
                  class="table-nowrap">
          <thead>
            <tr>
              <th rowspan="2" class="text-center">{{ 'common.stt' | translate:'NO.' }}</th>
              <th [attr.colspan]="7" class="text-center">{{ 'ess.viewMonthDetailList.BASIC_INFO.b' | translate:'Th\xF4ng tin c\u01A1 b\u1EA3n' }}</th>
              <th [attr.colspan]="3" class="text-center">{{ 'ess.viewMonthDetailList.OT_ON_WEEKDAY.b' | translate:'H\xC0NH CH\xCDNH' }}</th>
              <th [attr.colspan]="2" class="text-center">{{ 'ess.viewMonthDetailList.OT_ON_WEEKEND.b' | translate:'NG\xC0Y NGH\u1EC8' }}</th>
              <th [attr.colspan]="2" class="text-center">{{ 'ess.viewMonthDetailList.OT_ON_HOLIDAY.b' | translate:'L\u1EC4 T\u1EBET' }}</th>
              <th [attr.colspan]="3" class="text-center">{{ 'ess.viewMonthDetailList.WORK_DAYS.b' | translate:'S\u1ED1 ng\xE0y l\xE0m vi\u1EC7c' }}</th>
            </tr>
            <tr>
              <th class="text-center">{{ 'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
              <th class="text-center">{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
              <th class="text-center">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
              <th class="text-center">{{ 'epi.field.dob' | translate:'Ng\xE0y sinh' }}</th>
              <th class="text-center">{{ 'common.duty' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
              <th class="text-center">{{ 'common.dateJoined' | translate:'Ng\xE0y v\xE0o l\xE0m' }}</th>
              <th class="text-center">{{ 'hr.enpinfo.title.EMP.PROBATION_END_DATE' | translate:'Ng\xE0y k\u1EBFt th\xFAc th\u1EED vi\u1EC7c' }}</th>
              <th class="text-center">{{ 'ess.viewMonthDetailList.DAY_OT.b' | translate:'TC NG\xC0Y' }}</th>
              <th class="text-center">{{ 'ess.viewMonthDetailList.NIGHT_OT.b' | translate:'TC \u0110\xCAM' }}</th>
              <th class="text-center">{{ 'ess.viewMonthDetailList.NIGHT_OT_210.b' | translate:'TC \u0110\xCAM(210%)' }}</th>
              <th class="text-center">{{ 'ess.viewMonthDetailList.DAY_OT.b' | translate:'TC NG\xC0Y' }}</th>
              <th class="text-center">{{ 'ess.viewMonthDetailList.NIGHT_OT.b' | translate:'TC \u0110\xCAM' }}</th>
              <th class="text-center">{{ 'ess.viewMonthDetailList.DAY_OT.b' | translate:'TC NG\xC0Y' }}</th>
              <th class="text-center">{{ 'ess.viewMonthDetailList.NIGHT_OT.b' | translate:'TC \u0110\xCAM' }}</th>
              <th class="text-center">{{ 'ar.viewArShiftMonthCheckList.ZHENGCHANGBAN.b' | translate:'Ca h\xE0nh ch\xEDnh' }}</th>
              <th class="text-center">{{ 'ess.viewMonthDetailList.NIGHT_SHIFT.b' | translate:'CA \u0110\xCAM' }}</th>
              <th class="text-center">{{ 'ar.viewSearchOtInfo.YINGCHUQIN.b' | translate:'Ng\xE0y c\xF4ng chu\u1EA9n' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="!loading() && rows().length === 0">
              <td [attr.colspan]="18" class="text-center text-muted">{{ 'ess.viewMonthDetailList.msg.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
            </tr>
            <tr *ngFor="let row of rows(); let i = index">
              <td class="text-center">{{ (pageIndex - 1) * pageSize + i + 1 }}</td>
              <td class="text-center" [attr.title]="row.empId || null">{{ row.empId }}</td>
              <td [attr.title]="row.localName || null">{{ row.localName }}</td>
              <td [attr.title]="row.deptName || null">{{ row.deptName }}</td>
              <td class="text-center">{{ row.dob }}</td>
              <td class="text-center" [attr.title]="row.dutyName || null">{{ row.dutyName }}</td>
              <td class="text-center">{{ row.dateStarted }}</td>
              <td class="text-center">{{ row.endProbationDate }}</td>
              <td class="text-end">{{ row.hcDayOt }}</td>
              <td class="text-end">{{ row.hcNightOt }}</td>
              <td class="text-end">{{ row.hcNightOt210 }}</td>
              <td class="text-end">{{ row.restDayOt }}</td>
              <td class="text-end">{{ row.restNightOt }}</td>
              <td class="text-end">{{ row.holDayOt }}</td>
              <td class="text-end">{{ row.holNightOt }}</td>
              <td class="text-end">{{ row.adminShiftDays }}</td>
              <td class="text-end">{{ row.nightShiftDays }}</td>
              <td class="text-end">{{ row.standardWorkDays }}</td>
            </tr>
          </tbody>
        </nz-table>
      </div>
    </nz-card>
  </div>
</div>
`, styles: ["/* src/app/view-month-detail-list/view-month-detail-list.component.css */\ntable td,\ntable th {\n  white-space: nowrap;\n}\n.table-scroll-wrapper {\n  overflow-x: auto;\n}\n/*# sourceMappingURL=view-month-detail-list.component.css.map */\n"] }]
  }], () => [{ type: ViewMonthDetailListService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewMonthDetailListComponent, { className: "ViewMonthDetailListComponent", filePath: "src/app/view-month-detail-list/view-month-detail-list.component.ts", lineNumber: 84 });
})();
export {
  ViewMonthDetailListComponent
};
//# debugId=40145829-dcb9-592a-a1dd-e4c329385b3e
//# sourceMappingURL=chunk-OCU3UPY6.js.map
