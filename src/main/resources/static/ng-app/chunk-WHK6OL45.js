import {
  utils,
  writeFileSync
} from "./chunk-6KSHLFTP.js";
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
  NzCellEllipsisDirective,
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
  ViewChild,
  formatDate,
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
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-VTW5U2M5.js";

// src/app/manage-count-info/manage-count-info.service.ts
var API_BASE = "/ess/viewDept/api/manageCountInfo";
var ManageCountInfoService = class _ManageCountInfoService {
  constructor(http) {
    this.http = http;
  }
  http;
  getSummary(params) {
    return this.http.get(`${API_BASE}/summary`, {
      params: this.toHttpParams(params),
      withCredentials: true
    });
  }
  getList(params) {
    return this.http.get(`${API_BASE}/list`, {
      params: this.toHttpParams(params),
      withCredentials: true
    });
  }
  getCodeList(parentCodeNo) {
    return this.http.get("/sys/api/getCode/list", {
      params: new HttpParams().set("parentCodeNo", parentCodeNo),
      withCredentials: true
    });
  }
  getAuthorizedDepartments() {
    return this.http.get("/ar/attendanceSettings/api/arSupervisor/authorized-departments", {
      withCredentials: true
    });
  }
  toHttpParams(params) {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value)
        httpParams = httpParams.set(key, value);
    }
    return httpParams;
  }
  static \u0275fac = function ManageCountInfoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ManageCountInfoService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ManageCountInfoService, factory: _ManageCountInfoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManageCountInfoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/manage-count-info/manage-count-info.component.ts
var _c0 = ["genderChartEl"];
var _c1 = ["empTypeChartEl"];
var _c2 = ["deptChartEl"];
var _c3 = ["postFamilyChartEl"];
var _c4 = ["postGradeChartEl"];
var _c5 = ["ageChartEl"];
var _c6 = () => ({ x: "1300px" });
function ManageCountInfoComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.deptTreeErrorMessage());
  }
}
function ManageCountInfoComponent_nz_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 54);
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r3.codeNo)("nzLabel", c_r3.codeName);
  }
}
function ManageCountInfoComponent_nz_option_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 54);
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r4.codeNo)("nzLabel", c_r4.codeName);
  }
}
function ManageCountInfoComponent_nz_option_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 54);
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r5.codeNo)("nzLabel", c_r5.codeName);
  }
}
function ManageCountInfoComponent_nz_alert_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 55);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ManageCountInfoComponent_tr_145_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 56);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 57);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 58);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 58);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 57);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 57);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 57);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 56);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 56);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 56);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 57);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r7 + 1);
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
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.postFamilyName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.postFamilyName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.postGradeNo || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.postGradeNo);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.empTypeName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.empTypeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.dob);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.sexName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.dateStarted);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.empOfficeName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.empOfficeName);
  }
}
function ManageCountInfoComponent_ng_template_146_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r8 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r8, " ");
  }
}
var I18N_KEYS = [
  "essDept.keyword",
  "vdp.search.empKeyword.placeholder",
  "essDept.dept",
  "vdp.search.dept.placeholder",
  "common.empGroup",
  "common.empType",
  "common.status",
  "mci.field.asOfDate",
  "essDept.search",
  "essDept.clearFilter",
  "essDept.exportExcel",
  "essDept.weeklyReport",
  "common.selectAll",
  "common.stt",
  "common.empId",
  "common.empName",
  "common.deptName",
  "mci.col.postGrade",
  "mci.col.dob",
  "mci.col.gender",
  "common.dateJoined",
  "mci.detail.title",
  "mci.stats.total",
  "mci.stats.byGender",
  "mci.stats.byEmpType",
  "mci.stats.byDept",
  "mci.stats.byPostFamily",
  "mci.stats.byPostGrade",
  "mci.stats.byAge",
  "mci.msg.noData",
  "mci.msg.loadFailed",
  "mci.msg.chartNoData",
  "mep.msg.loadDeptFailed",
  "common.totalRows"
];
var PAGE_SIZE_OPTIONS = [25, 50, 100, 200, 500];
var DEFAULT_EMP_OFFICE = "15119";
var AS_OF_DATE_FORMAT = "yyyy/MM/dd";
var ManageCountInfoComponent = class _ManageCountInfoComponent {
  constructor(api, i18n) {
    this.api = api;
    this.i18n = i18n;
  }
  api;
  i18n;
  genderChartEl;
  empTypeChartEl;
  deptChartEl;
  postFamilyChartEl;
  postGradeChartEl;
  ageChartEl;
  pageSizeOptions = PAGE_SIZE_OPTIONS;
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
  totalCount = signal(
    0,
    ...ngDevMode ? [{ debugName: "totalCount" }] : (
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
  postFamilyOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "postFamilyOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  empTypeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "empTypeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  empOfficeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "empOfficeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** id -> danh sách id con trực tiếp - dùng để mở rộng lựa chọn cây phòng ban khi tra cứu (xem search()). */
  deptChildrenMap = /* @__PURE__ */ new Map();
  charts = {};
  keyword = "";
  deptNos = [];
  postFamily = null;
  empTypeCode = null;
  empOffice = DEFAULT_EMP_OFFICE;
  asOfDate = /* @__PURE__ */ new Date();
  ngAfterViewInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
    this.loadCodeOptions();
    this.search();
  }
  ngOnDestroy() {
    this.destroyCharts();
  }
  search() {
    this.loading.set(true);
    this.errorMessage.set(null);
    const params = {
      keyword: this.keyword,
      deptNos: this.expandDeptSelection(this.deptNos).join(","),
      postFamily: this.postFamily ?? "",
      empTypeCode: this.empTypeCode ?? "",
      empOffice: this.empOffice ?? "",
      asOfDate: this.formatAsOfDate(this.asOfDate)
    };
    this.api.getSummary(params).subscribe({
      next: (summary) => this.renderCharts(summary),
      error: () => this.errorMessage.set(this.i18n.t("mci.msg.loadFailed", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i"))
    });
    this.api.getList(params).subscribe({
      next: (rows) => {
        this.rows.set(rows ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("mci.msg.loadFailed", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i"));
        this.rows.set([]);
        this.loading.set(false);
      }
    });
  }
  clearSearch() {
    this.keyword = "";
    this.deptNos = [];
    this.postFamily = null;
    this.empTypeCode = null;
    this.empOffice = DEFAULT_EMP_OFFICE;
    this.asOfDate = /* @__PURE__ */ new Date();
    this.search();
  }
  /** Xuất excel client-side (giống bản gốc DataTables Buttons, không có endpoint export riêng ở backend). */
  exportExcel() {
    const headers = [
      this.i18n.t("common.stt", "STT"),
      this.i18n.t("common.empId", "M\xE3 NV"),
      this.i18n.t("common.empName", "H\u1ECD t\xEAn"),
      this.i18n.t("common.deptName", "Ph\xF2ng ban"),
      this.i18n.t("common.empGroup", "Nh\xF3m NV"),
      this.i18n.t("mci.col.postGrade", "Ch\u1EE9c danh"),
      this.i18n.t("common.empType", "Lo\u1EA1i NV"),
      this.i18n.t("mci.col.dob", "Ng\xE0y sinh"),
      this.i18n.t("mci.col.gender", "Gi\u1EDBi t\xEDnh"),
      this.i18n.t("common.dateJoined", "Ng\xE0y v\xE0o l\xE0m"),
      this.i18n.t("common.status", "Tr\u1EA1ng th\xE1i")
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      r.empId,
      r.localName,
      r.deptName,
      r.postFamilyName,
      r.postGradeNo,
      r.empTypeName,
      r.dob,
      r.sexName,
      r.dateStarted,
      r.empOfficeName
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "DanhSach");
    writeFileSync(workbook, "manage_count_info_list.xlsx");
  }
  /** Điều hướng tải file .xlsx báo cáo nhân sự theo tuần - endpoint ghi trực tiếp vào response, không
   *  trả JSON nên không gọi qua HttpClient (giống hành vi window.location.href ở bản gốc). */
  exportWeeklyReport() {
    const asOfDate = this.formatAsOfDate(this.asOfDate);
    window.location.href = `/ess/viewDept/api/manageCountInfo/weeklyReport?asOfDate=${encodeURIComponent(asOfDate)}`;
  }
  formatAsOfDate(d) {
    return d ? formatDate(d, AS_OF_DATE_FORMAT, "vi") : "";
  }
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
   *  (xem giải thích chi tiết ở ManageEmpPositionInfoComponent.expandDeptSelection). */
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
  loadCodeOptions() {
    this.api.getCodeList("14015812").subscribe((list) => this.postFamilyOptions.set(list ?? []));
    this.api.getCodeList("13864").subscribe((list) => this.empTypeOptions.set(list ?? []));
    this.api.getCodeList("15118").subscribe((list) => this.empOfficeOptions.set(list ?? []));
  }
  destroyCharts() {
    Object.keys(this.charts).forEach((key) => {
      this.charts[key]?.destroy?.();
      delete this.charts[key];
    });
  }
  renderCharts(summary) {
    this.destroyCharts();
    this.totalCount.set(summary.totalCount || 0);
    this.createDonutChart("gender", this.genderChartEl, summary.byGender, 200);
    this.createDonutChart("empType", this.empTypeChartEl, summary.byEmpType, 200);
    this.createBarChart("dept", this.deptChartEl, summary.byDept, 250);
    this.createDonutChart("postFamily", this.postFamilyChartEl, summary.byPostFamily, 200);
    this.createBarChart("postGrade", this.postGradeChartEl, summary.byPostGrade, 200);
    this.createBarChart("age", this.ageChartEl, summary.byAge, 220);
  }
  createDonutChart(key, elRef, items, height) {
    const el = elRef?.nativeElement;
    if (!el)
      return;
    el.innerHTML = "";
    if (!items || !items.length) {
      el.innerHTML = `<p class="text-center text-muted small py-3">${this.i18n.t("mci.msg.chartNoData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u th\u1ED1ng k\xEA")}</p>`;
      return;
    }
    const labels = items.map((i) => i.label || i.code || "?");
    const values = items.map((i) => i.count || 0);
    const options = {
      chart: { type: "donut", height, toolbar: { show: false } },
      series: values,
      labels,
      legend: { position: "bottom", fontSize: "11px" },
      dataLabels: { enabled: true, formatter: (_val, opts) => opts.w.globals.series[opts.seriesIndex] },
      tooltip: { y: { formatter: (val) => val + " NV" } },
      plotOptions: { pie: { donut: { size: "55%" } } }
    };
    this.charts[key] = new ApexCharts(el, options);
    this.charts[key].render();
  }
  createBarChart(key, elRef, items, height) {
    const el = elRef?.nativeElement;
    if (!el)
      return;
    el.innerHTML = "";
    if (!items || !items.length) {
      el.innerHTML = `<p class="text-center text-muted small py-3">${this.i18n.t("mci.msg.chartNoData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u th\u1ED1ng k\xEA")}</p>`;
      return;
    }
    const labels = items.map((i) => i.label || i.code || "?");
    const values = items.map((i) => i.count || 0);
    const autoHeight = Math.max(height, labels.length * 28 + 60);
    const options = {
      chart: { type: "bar", height: autoHeight, toolbar: { show: false } },
      series: [{ name: "S\u1ED1 NV", data: values }],
      xaxis: { categories: labels, labels: { style: { fontSize: "11px" } } },
      yaxis: { labels: { style: { fontSize: "11px" } } },
      plotOptions: { bar: { horizontal: true, borderRadius: 3, dataLabels: { position: "top" } } },
      dataLabels: { enabled: true, offsetX: 20, style: { fontSize: "11px", colors: ["#333"] } },
      tooltip: { y: { formatter: (val) => val + " NV" } },
      colors: ["#4e73df"]
    };
    this.charts[key] = new ApexCharts(el, options);
    this.charts[key].render();
  }
  static \u0275fac = function ManageCountInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ManageCountInfoComponent)(\u0275\u0275directiveInject(ManageCountInfoService), \u0275\u0275directiveInject(I18nService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManageCountInfoComponent, selectors: [["app-manage-count-info"]], viewQuery: function ManageCountInfoComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5)(_c1, 5)(_c2, 5)(_c3, 5)(_c4, 5)(_c5, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.genderChartEl = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.empTypeChartEl = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.deptChartEl = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.postFamilyChartEl = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.postGradeChartEl = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.ageChartEl = _t.first);
    }
  }, decls: 148, vars: 162, consts: [["genderChartEl", ""], ["empTypeChartEl", ""], ["deptChartEl", ""], ["postFamilyChartEl", ""], ["postGradeChartEl", ""], ["ageChartEl", ""], ["mciTable", ""], ["mciTotalTpl", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["nz-input", "", "name", "keyword", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "deptNos", "nzCheckable", "", "nzShowSearch", "", "nzAllowClear", "", "nzDropdownClassName", "mci-dept-tree-dropdown", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["class", "text-danger small mt-1", 4, "ngIf"], [1, "col-md-2"], ["name", "postFamily", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["name", "empTypeCode", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["name", "empOffice", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["name", "asOfDate", "nzFormat", "yyyy/MM/dd", 1, "w-100", 3, "ngModelChange", "ngModel"], [1, "col-12", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], ["nz-button", "", "nzType", "default", "type", "button", 1, "btn-export", 3, "click"], [1, "bx", "bx-export"], ["nz-button", "", "nzType", "default", "type", "button", 3, "click"], [1, "bx", "bx-calendar-week"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [1, "row", "g-3", "mb-3"], [1, "col-md-4"], [1, "h-100", "mci-total-card"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center", "text-center"], [1, "text-muted", "mb-1", "fw-semibold"], [1, "mci-total-count"], [1, "text-muted", "mt-1", "small"], [1, "h-100", 3, "nzTitle"], [1, "col-md-8"], [1, "col-md-6"], [3, "nzTitle"], [1, "table-nowrap", 3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "100px", "nzEllipsis", "", 1, "text-center"], ["nzWidth", "160px", "nzEllipsis", ""], ["nzWidth", "180px", "nzEllipsis", ""], ["nzWidth", "120px", "nzEllipsis", "", 1, "text-center"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "100px", 1, "text-center"], [4, "ngFor", "ngForOf"], [1, "text-danger", "small", "mt-1"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], [1, "text-center"], ["nzEllipsis", "", 1, "text-center"], ["nzEllipsis", ""]], template: function ManageCountInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "nz-card", 10)(3, "form", 11);
      \u0275\u0275listener("ngSubmit", function ManageCountInfoComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 12)(5, "label", 13);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 14);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ManageCountInfoComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.keyword, $event) || (ctx.keyword = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 12)(11, "label", 13);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "nz-tree-select", 15);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ManageCountInfoComponent_Template_nz_tree_select_ngModelChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.deptNos, $event) || (ctx.deptNos = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275template(16, ManageCountInfoComponent_div_16_Template, 2, 1, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 17)(18, "label", 13);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "nz-select", 18);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ManageCountInfoComponent_Template_nz_select_ngModelChange_21_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.postFamily, $event) || (ctx.postFamily = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(23, ManageCountInfoComponent_nz_option_23_Template, 1, 2, "nz-option", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 17)(25, "label", 13);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "nz-select", 20);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ManageCountInfoComponent_Template_nz_select_ngModelChange_28_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.empTypeCode, $event) || (ctx.empTypeCode = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(30, ManageCountInfoComponent_nz_option_30_Template, 1, 2, "nz-option", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 17)(32, "label", 13);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "nz-select", 21);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ManageCountInfoComponent_Template_nz_select_ngModelChange_35_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.empOffice, $event) || (ctx.empOffice = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(37, ManageCountInfoComponent_nz_option_37_Template, 1, 2, "nz-option", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 17)(39, "label", 13);
      \u0275\u0275text(40);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "nz-date-picker", 22);
      \u0275\u0275twoWayListener("ngModelChange", function ManageCountInfoComponent_Template_nz_date_picker_ngModelChange_42_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.asOfDate, $event) || (ctx.asOfDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 23)(44, "button", 24);
      \u0275\u0275element(45, "i", 25);
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "button", 26);
      \u0275\u0275listener("click", function ManageCountInfoComponent_Template_button_click_48_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(49, "i", 27);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "button", 28);
      \u0275\u0275listener("click", function ManageCountInfoComponent_Template_button_click_52_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(53, "i", 29);
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "button", 30);
      \u0275\u0275listener("click", function ManageCountInfoComponent_Template_button_click_56_listener() {
        return ctx.exportWeeklyReport();
      });
      \u0275\u0275element(57, "i", 31);
      \u0275\u0275text(58);
      \u0275\u0275pipe(59, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(60, ManageCountInfoComponent_nz_alert_60_Template, 1, 1, "nz-alert", 32);
      \u0275\u0275elementStart(61, "div", 33)(62, "div", 34)(63, "nz-card", 35)(64, "div", 36)(65, "div", 37);
      \u0275\u0275text(66);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 38);
      \u0275\u0275text(69);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div", 39);
      \u0275\u0275text(71);
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(73, "div", 34)(74, "nz-card", 40);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275element(76, "div", null, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div", 34)(79, "nz-card", 40);
      \u0275\u0275pipe(80, "translate");
      \u0275\u0275element(81, "div", null, 1);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(83, "div", 33)(84, "div", 41)(85, "nz-card", 40);
      \u0275\u0275pipe(86, "translate");
      \u0275\u0275element(87, "div", null, 2);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "div", 34)(90, "nz-card", 40);
      \u0275\u0275pipe(91, "translate");
      \u0275\u0275element(92, "div", null, 3);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(94, "div", 33)(95, "div", 42)(96, "nz-card", 40);
      \u0275\u0275pipe(97, "translate");
      \u0275\u0275element(98, "div", null, 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "div", 42)(101, "nz-card", 40);
      \u0275\u0275pipe(102, "translate");
      \u0275\u0275element(103, "div", null, 5);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(105, "nz-card", 43);
      \u0275\u0275pipe(106, "translate");
      \u0275\u0275elementStart(107, "nz-table", 44, 6)(109, "thead")(110, "tr")(111, "th", 45);
      \u0275\u0275text(112);
      \u0275\u0275pipe(113, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "th", 46);
      \u0275\u0275text(115);
      \u0275\u0275pipe(116, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "th", 47);
      \u0275\u0275text(118);
      \u0275\u0275pipe(119, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "th", 48);
      \u0275\u0275text(121);
      \u0275\u0275pipe(122, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "th", 49);
      \u0275\u0275text(124);
      \u0275\u0275pipe(125, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "th", 49);
      \u0275\u0275text(127);
      \u0275\u0275pipe(128, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "th", 49);
      \u0275\u0275text(130);
      \u0275\u0275pipe(131, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "th", 50);
      \u0275\u0275text(133);
      \u0275\u0275pipe(134, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "th", 51);
      \u0275\u0275text(136);
      \u0275\u0275pipe(137, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "th", 50);
      \u0275\u0275text(139);
      \u0275\u0275pipe(140, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "th", 49);
      \u0275\u0275text(142);
      \u0275\u0275pipe(143, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(144, "tbody");
      \u0275\u0275template(145, ManageCountInfoComponent_tr_145_Template, 23, 18, "tr", 52);
      \u0275\u0275elementEnd();
      \u0275\u0275template(146, ManageCountInfoComponent_ng_template_146_Template, 2, 5, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const mciTable_r9 = \u0275\u0275reference(108);
      const mciTotalTpl_r10 = \u0275\u0275reference(147);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 56, "essDept.keyword", "M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.keyword);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 59, "vdp.search.empKeyword.placeholder", "Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 62, "essDept.dept", "Ph\xF2ng ban"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzNodes", ctx.deptNodes());
      \u0275\u0275twoWayProperty("ngModel", ctx.deptNos);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(15, 65, "vdp.search.dept.placeholder", "Ch\u1ECDn ph\xF2ng ban"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.deptTreeErrorMessage());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 68, "common.empGroup", "Nh\xF3m nh\xE2n vi\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.postFamily);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(22, 71, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.postFamilyOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 74, "common.empType", "Lo\u1EA1i nh\xE2n vi\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.empTypeCode);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(29, 77, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.empTypeOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 80, "common.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.empOffice);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(36, 83, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.empOfficeOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 86, "mci.field.asOfDate", "Ng\xE0y truy v\u1EA5n"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.asOfDate);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(47, 89, "essDept.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(51, 92, "essDept.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(55, 95, "essDept.exportExcel", "Xu\u1EA5t excel"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(59, 98, "essDept.weeklyReport", "B\xE1o c\xE1o nh\xE2n s\u1EF1 theo tu\u1EA7n"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(67, 101, "mci.stats.total", "T\u1ED5ng s\u1ED1 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.totalCount());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(72, 104, "common.empName", "Nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(75, 107, "mci.stats.byGender", "Theo gi\u1EDBi t\xEDnh"));
      \u0275\u0275advance(5);
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(80, 110, "mci.stats.byEmpType", "Theo lo\u1EA1i nh\xE2n vi\xEAn"));
      \u0275\u0275advance(6);
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(86, 113, "mci.stats.byDept", "Theo ph\xF2ng ban"));
      \u0275\u0275advance(5);
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(91, 116, "mci.stats.byPostFamily", "Theo nh\xF3m nh\xE2n vi\xEAn"));
      \u0275\u0275advance(6);
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(97, 119, "mci.stats.byPostGrade", "Theo ch\u1EE9c danh"));
      \u0275\u0275advance(5);
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(102, 122, "mci.stats.byAge", "Theo \u0111\u1ED9 tu\u1ED5i"));
      \u0275\u0275advance(4);
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(106, 125, "mci.detail.title", "Danh s\xE1ch nh\xE2n vi\xEAn chi ti\u1EBFt"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", mciTotalTpl_r10)("nzScroll", \u0275\u0275pureFunction0(161, _c6));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(113, 128, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(116, 131, "common.empId", "M\xE3 NV"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(119, 134, "common.empName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(122, 137, "common.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(125, 140, "common.empGroup", "Nh\xF3m NV"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(128, 143, "mci.col.postGrade", "Ch\u1EE9c danh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(131, 146, "common.empType", "Lo\u1EA1i NV"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(134, 149, "mci.col.dob", "Ng\xE0y sinh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(137, 152, "mci.col.gender", "Gi\u1EDBi t\xEDnh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(140, 155, "common.dateJoined", "Ng\xE0y v\xE0o l\xE0m"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(143, 158, "common.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", mciTable_r9.data);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCellEllipsisDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzDatePickerModule, NzDatePickerComponent, NzTreeSelectModule, NzTreeSelectComponent, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\n.mci-total-card[_ngcontent-%COMP%] {\n  border-color: #1a3fa0;\n}\n.mci-total-count[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #1a3fa0;\n  line-height: 1.2;\n}\n.btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=manage-count-info.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManageCountInfoComponent, [{
    type: Component,
    args: [{ selector: "app-manage-count-info", standalone: true, imports: [
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
      <form class="row g-3" (ngSubmit)="search()">
        <div class="col-md-3">
          <label class="form-label">{{ 'essDept.keyword' | translate:'M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn' }}</label>
          <input nz-input [(ngModel)]="keyword" name="keyword"
                 [placeholder]="'vdp.search.empKeyword.placeholder' | translate:'Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn'">
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'essDept.dept' | translate:'Ph\xF2ng ban' }}</label>
          <nz-tree-select class="w-100" [nzNodes]="deptNodes()" [(ngModel)]="deptNos" name="deptNos"
                           nzCheckable nzShowSearch nzAllowClear
                           [nzPlaceHolder]="'vdp.search.dept.placeholder' | translate:'Ch\u1ECDn ph\xF2ng ban'"
                           nzDropdownClassName="mci-dept-tree-dropdown"></nz-tree-select>
          <div *ngIf="deptTreeErrorMessage()" class="text-danger small mt-1">{{ deptTreeErrorMessage() }}</div>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'common.empGroup' | translate:'Nh\xF3m nh\xE2n vi\xEAn' }}</label>
          <nz-select class="w-100" [(ngModel)]="postFamily" name="postFamily" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let c of postFamilyOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'common.empType' | translate:'Lo\u1EA1i nh\xE2n vi\xEAn' }}</label>
          <nz-select class="w-100" [(ngModel)]="empTypeCode" name="empTypeCode" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let c of empTypeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</label>
          <nz-select class="w-100" [(ngModel)]="empOffice" name="empOffice" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let c of empOfficeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'mci.field.asOfDate' | translate:'Ng\xE0y truy v\u1EA5n' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="asOfDate" name="asOfDate" nzFormat="yyyy/MM/dd"></nz-date-picker>
        </div>
        <div class="col-12 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'essDept.search' | translate:'Tra c\u1EE9u' }}
          </button>
          <button nz-button type="button" (click)="clearSearch()">
            <i class="bx bx-x"></i> {{ 'essDept.clearFilter' | translate:'X\xF3a l\u1ECDc' }}
          </button>
          <button nz-button nzType="default" type="button" class="btn-export" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'essDept.exportExcel' | translate:'Xu\u1EA5t excel' }}
          </button>
          <button nz-button nzType="default" type="button" (click)="exportWeeklyReport()">
            <i class="bx bx-calendar-week"></i> {{ 'essDept.weeklyReport' | translate:'B\xE1o c\xE1o nh\xE2n s\u1EF1 theo tu\u1EA7n' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

    <!-- Khu v\u1EF1c th\u1ED1ng k\xEA -->
    <div class="row g-3 mb-3">
      <div class="col-md-4">
        <nz-card class="h-100 mci-total-card">
          <div class="d-flex flex-column align-items-center justify-content-center text-center">
            <div class="text-muted mb-1 fw-semibold">{{ 'mci.stats.total' | translate:'T\u1ED5ng s\u1ED1 nh\xE2n vi\xEAn' }}</div>
            <div class="mci-total-count">{{ totalCount() }}</div>
            <div class="text-muted mt-1 small">{{ 'common.empName' | translate:'Nh\xE2n vi\xEAn' }}</div>
          </div>
        </nz-card>
      </div>
      <div class="col-md-4">
        <nz-card [nzTitle]="'mci.stats.byGender' | translate:'Theo gi\u1EDBi t\xEDnh'" class="h-100">
          <div #genderChartEl></div>
        </nz-card>
      </div>
      <div class="col-md-4">
        <nz-card [nzTitle]="'mci.stats.byEmpType' | translate:'Theo lo\u1EA1i nh\xE2n vi\xEAn'" class="h-100">
          <div #empTypeChartEl></div>
        </nz-card>
      </div>
    </div>

    <div class="row g-3 mb-3">
      <div class="col-md-8">
        <nz-card [nzTitle]="'mci.stats.byDept' | translate:'Theo ph\xF2ng ban'" class="h-100">
          <div #deptChartEl></div>
        </nz-card>
      </div>
      <div class="col-md-4">
        <nz-card [nzTitle]="'mci.stats.byPostFamily' | translate:'Theo nh\xF3m nh\xE2n vi\xEAn'" class="h-100">
          <div #postFamilyChartEl></div>
        </nz-card>
      </div>
    </div>

    <div class="row g-3 mb-3">
      <div class="col-md-6">
        <nz-card [nzTitle]="'mci.stats.byPostGrade' | translate:'Theo ch\u1EE9c danh'" class="h-100">
          <div #postGradeChartEl></div>
        </nz-card>
      </div>
      <div class="col-md-6">
        <nz-card [nzTitle]="'mci.stats.byAge' | translate:'Theo \u0111\u1ED9 tu\u1ED5i'" class="h-100">
          <div #ageChartEl></div>
        </nz-card>
      </div>
    </div>

    <!-- Danh s\xE1ch nh\xE2n vi\xEAn chi ti\u1EBFt -->
    <nz-card [nzTitle]="'mci.detail.title' | translate:'Danh s\xE1ch nh\xE2n vi\xEAn chi ti\u1EBFt'">
      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="mciTotalTpl"
                [nzScroll]="{ x: '1300px' }" class="table-nowrap" #mciTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th class="text-center" nzWidth="100px" nzEllipsis>{{ 'common.empId' | translate:'M\xE3 NV' }}</th>
            <th nzWidth="160px" nzEllipsis>{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
            <th nzWidth="180px" nzEllipsis>{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
            <th class="text-center" nzWidth="120px" nzEllipsis>{{ 'common.empGroup' | translate:'Nh\xF3m NV' }}</th>
            <th class="text-center" nzWidth="120px" nzEllipsis>{{ 'mci.col.postGrade' | translate:'Ch\u1EE9c danh' }}</th>
            <th class="text-center" nzWidth="120px" nzEllipsis>{{ 'common.empType' | translate:'Lo\u1EA1i NV' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'mci.col.dob' | translate:'Ng\xE0y sinh' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'mci.col.gender' | translate:'Gi\u1EDBi t\xEDnh' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'common.dateJoined' | translate:'Ng\xE0y v\xE0o l\xE0m' }}</th>
            <th class="text-center" nzWidth="120px" nzEllipsis>{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of mciTable.data; let i = index">
            <td class="text-center">{{ i + 1 }}</td>
            <td class="text-center" nzEllipsis [attr.title]="row.empId || null">{{ row.empId }}</td>
            <td nzEllipsis [attr.title]="row.localName || null">{{ row.localName }}</td>
            <td nzEllipsis [attr.title]="row.deptName || null">{{ row.deptName }}</td>
            <td class="text-center" nzEllipsis [attr.title]="row.postFamilyName || null">{{ row.postFamilyName }}</td>
            <td class="text-center" nzEllipsis [attr.title]="row.postGradeNo || null">{{ row.postGradeNo }}</td>
            <td class="text-center" nzEllipsis [attr.title]="row.empTypeName || null">{{ row.empTypeName }}</td>
            <td class="text-center">{{ row.dob }}</td>
            <td class="text-center">{{ row.sexName }}</td>
            <td class="text-center">{{ row.dateStarted }}</td>
            <td class="text-center" nzEllipsis [attr.title]="row.empOfficeName || null">{{ row.empOfficeName }}</td>
          </tr>
        </tbody>
        <ng-template #mciTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>
`, styles: ["/* src/app/manage-count-info/manage-count-info.component.css */\n.mci-total-card {\n  border-color: #1a3fa0;\n}\n.mci-total-count {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #1a3fa0;\n  line-height: 1.2;\n}\n.btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=manage-count-info.component.css.map */\n"] }]
  }], () => [{ type: ManageCountInfoService }, { type: I18nService }], { genderChartEl: [{
    type: ViewChild,
    args: ["genderChartEl"]
  }], empTypeChartEl: [{
    type: ViewChild,
    args: ["empTypeChartEl"]
  }], deptChartEl: [{
    type: ViewChild,
    args: ["deptChartEl"]
  }], postFamilyChartEl: [{
    type: ViewChild,
    args: ["postFamilyChartEl"]
  }], postGradeChartEl: [{
    type: ViewChild,
    args: ["postGradeChartEl"]
  }], ageChartEl: [{
    type: ViewChild,
    args: ["ageChartEl"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageCountInfoComponent, { className: "ManageCountInfoComponent", filePath: "src/app/manage-count-info/manage-count-info.component.ts", lineNumber: 72 });
})();
export {
  ManageCountInfoComponent
};
//# debugId=180c6b44-cf86-5c22-ae7c-64e447f6c878
//# sourceMappingURL=chunk-WHK6OL45.js.map
