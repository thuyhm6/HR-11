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
  computed,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
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
  ɵɵtwoWayProperty
} from "./chunk-VTW5U2M5.js";

// src/app/view-year-use-info-list/view-year-use-info-list.service.ts
var API_BASE = "/ess/tempEmp/api/yearUseInfoList";
var ViewYearUseInfoListService = class _ViewYearUseInfoListService {
  constructor(http) {
    this.http = http;
  }
  http;
  getList(params) {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value)
        httpParams = httpParams.set(key, value);
    }
    return this.http.get(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
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
  static \u0275fac = function ViewYearUseInfoListService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewYearUseInfoListService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewYearUseInfoListService, factory: _ViewYearUseInfoListService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewYearUseInfoListService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-year-use-info-list/view-year-use-info-list.component.ts
var _c0 = () => ({ x: "1500px", y: "calc(100vh - 420px)" });
function ViewYearUseInfoListComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.deptTreeErrorMessage());
  }
}
function ViewYearUseInfoListComponent_nz_option_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 39);
  }
  if (rf & 2) {
    const y_r3 = ctx.$implicit;
    \u0275\u0275property("nzValue", y_r3)("nzLabel", y_r3);
  }
}
function ViewYearUseInfoListComponent_nz_option_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 39);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const o_r4 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r4.value)("nzLabel", \u0275\u0275pipeBind2(1, 2, o_r4.labelKey, o_r4.fallback));
  }
}
function ViewYearUseInfoListComponent_nz_option_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 39);
  }
  if (rf & 2) {
    const o_r5 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r5.codeNo)("nzLabel", o_r5.codeName);
  }
}
function ViewYearUseInfoListComponent_nz_alert_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 40);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ViewYearUseInfoListComponent_tr_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 41);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 41);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 41);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 41);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 41);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 42);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 42);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 42);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 42);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 42);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td", 42);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r7 + 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.deptName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.deptName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.empId || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.empId);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.localName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.dateStarted);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.year);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.strtDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.endDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.totalVac);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.addVac);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.specialVac);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.lastYearVac);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.usedVac);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.remainVac);
  }
}
function ViewYearUseInfoListComponent_ng_template_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r8 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r8, " ");
  }
}
var EMP_TYPE_OPTIONS = [
  { value: "MTSVN", labelKey: "ess.viewMonthDetailList.empType.mtsvn", fallback: "MTSVN" },
  { value: "THOIVU", labelKey: "ess.viewMonthDetailList.empType.thoiVu", fallback: "Th\u1EDDi v\u1EE5" }
];
var EMP_OFFICE_PARENT_CODE = "15118";
var I18N_KEYS = [
  "yuil.title",
  "essDept.keyword",
  "vdp.search.empKeyword.placeholder",
  "essDept.dept",
  "vdp.search.dept.placeholder",
  "common.year",
  "essDept.empType",
  "essDept.status",
  "common.selectAll",
  "ess.viewMonthDetailList.empType.mtsvn",
  "ess.viewMonthDetailList.empType.thoiVu",
  "essDept.search",
  "essDept.clearFilter",
  "essDept.exportExcel",
  "common.quickFilter",
  "common.stt",
  "common.deptName",
  "common.empId",
  "common.empName",
  "common.dateJoined",
  "yuil.label.strtDate",
  "yuil.label.endDate",
  "yuil.col.totalVac",
  "yuil.col.addVac",
  "yuil.col.specialVac",
  "yuil.col.lastYearVac",
  "yuil.col.usedVac",
  "yuil.col.remainVac",
  "common.totalRows",
  "common.loadFail",
  "mep.msg.loadDeptFailed"
];
var PAGE_SIZE_OPTIONS = [25, 50, 100, 200, 500];
var YEAR_RANGE = 5;
var ViewYearUseInfoListComponent = class _ViewYearUseInfoListComponent {
  constructor(api, i18n) {
    this.api = api;
    this.i18n = i18n;
  }
  api;
  i18n;
  pageSizeOptions = PAGE_SIZE_OPTIONS;
  empTypeOptions = EMP_TYPE_OPTIONS;
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
  empOfficeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "empOfficeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  quickFilter = "";
  filteredRows = computed(
    () => {
      const kw = this.quickFilter.trim().toLowerCase();
      if (!kw)
        return this.rows();
      return this.rows().filter((r) => (r.empId || "").toLowerCase().includes(kw) || (r.localName || "").toLowerCase().includes(kw) || (r.deptName || "").toLowerCase().includes(kw));
    },
    ...ngDevMode ? [{ debugName: "filteredRows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** id -> danh sách id con trực tiếp - dùng để mở rộng lựa chọn cây phòng ban khi tra cứu (xem search()). */
  deptChildrenMap = /* @__PURE__ */ new Map();
  keyword = "";
  deptNos = [];
  year = String((/* @__PURE__ */ new Date()).getFullYear());
  empTypeCode = null;
  empOffice = null;
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
    this.api.getCodeList(EMP_OFFICE_PARENT_CODE).subscribe((list) => this.empOfficeOptions.set(list ?? []));
    this.search();
  }
  search() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getList({
      keyword: this.keyword.trim(),
      deptNos: this.expandDeptSelection(this.deptNos).join(","),
      year: this.year,
      empTypeCode: this.empTypeCode ?? "",
      empOffice: this.empOffice ?? ""
    }).subscribe({
      next: (rows) => {
        this.rows.set(rows ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.rows.set([]);
        this.loading.set(false);
      }
    });
  }
  clearSearch() {
    this.keyword = "";
    this.deptNos = [];
    this.year = String((/* @__PURE__ */ new Date()).getFullYear());
    this.empTypeCode = null;
    this.empOffice = null;
    this.quickFilter = "";
    this.search();
  }
  // ==================== Xuất excel (client-side, đúng danh sách đang lọc trên giao diện) ====================
  exportExcel() {
    const t = (key, fallback) => this.i18n.t(key, fallback);
    const headers = [
      t("common.stt", "STT"),
      t("common.deptName", "Ph\xF2ng ban"),
      t("common.empId", "M\xE3 nh\xE2n vi\xEAn"),
      t("common.empName", "H\u1ECD t\xEAn"),
      t("common.dateJoined", "Ng\xE0y v\xE0o l\xE0m"),
      t("common.year", "N\u0103m"),
      t("yuil.label.strtDate", "Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u"),
      t("yuil.label.endDate", "Th\u1EDDi gian k\u1EBFt th\xFAc"),
      t("yuil.col.totalVac", "T\u1ED5ng ph\xE9p n\u0103m"),
      t("yuil.col.addVac", "T\u1EA1o ph\xE9p n\u0103m"),
      t("yuil.col.specialVac", "\u0110\u1EB7c bi\u1EC7t"),
      t("yuil.col.lastYearVac", "C\xF2n l\u1EA1i n\u0103m ngo\xE1i"),
      t("yuil.col.usedVac", "\u0110\xE3 ngh\u1EC9"),
      t("yuil.col.remainVac", "C\xF2n l\u1EA1i")
    ];
    const dataRows = this.filteredRows().map((r, i) => [
      i + 1,
      r.deptName,
      r.empId,
      r.localName,
      r.dateStarted,
      r.year,
      r.strtDate,
      r.endDate,
      r.totalVac,
      r.addVac,
      r.specialVac,
      r.lastYearVac,
      r.usedVac,
      r.remainVac
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "NghiPhepNam");
    writeFileSync(workbook, "thong_tin_nghi_phep_nam.xlsx");
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
  static \u0275fac = function ViewYearUseInfoListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewYearUseInfoListComponent)(\u0275\u0275directiveInject(ViewYearUseInfoListService), \u0275\u0275directiveInject(I18nService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewYearUseInfoListComponent, selectors: [["app-view-year-use-info-list"]], decls: 108, vars: 133, consts: [["yuilTable", ""], ["yuilTotalTpl", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", "align-items-end", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["nz-input", "", "name", "keyword", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "deptNos", "nzCheckable", "", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["class", "text-danger small mt-1", 4, "ngIf"], [1, "col-md-2"], ["name", "year", 1, "w-100", 3, "ngModelChange", "ngModel"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["name", "empTypeCode", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["name", "empOffice", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [1, "col-12", "d-flex", "align-items-end", "gap-2", "flex-wrap", "justify-content-end"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], ["nz-button", "", "nzType", "default", "type", "button", 3, "click"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [1, "d-flex", "align-items-center", "gap-2", "mb-2", "flex-wrap", "justify-content-end"], [1, "small"], ["nz-input", "", "name", "quickFilter", 2, "max-width", "200px", 3, "ngModelChange", "ngModel", "placeholder"], [1, "table-nowrap", 3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "160px"], ["nzWidth", "100px", 1, "text-center"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "80px", 1, "text-center"], ["nzWidth", "120px", 1, "text-center"], ["nzWidth", "110px", 1, "text-end"], ["nzWidth", "90px", 1, "text-end"], ["nzWidth", "130px", 1, "text-end"], [4, "ngFor", "ngForOf"], [1, "text-danger", "small", "mt-1"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], [1, "text-center"], [1, "text-end"]], template: function ViewYearUseInfoListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "nz-card", 4)(3, "form", 5);
      \u0275\u0275listener("ngSubmit", function ViewYearUseInfoListComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 6)(5, "label", 7);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewYearUseInfoListComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.keyword, $event) || (ctx.keyword = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 6)(11, "label", 7);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "nz-tree-select", 9);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewYearUseInfoListComponent_Template_nz_tree_select_ngModelChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.deptNos, $event) || (ctx.deptNos = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275template(16, ViewYearUseInfoListComponent_div_16_Template, 2, 1, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 11)(18, "label", 7);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "nz-select", 12);
      \u0275\u0275twoWayListener("ngModelChange", function ViewYearUseInfoListComponent_Template_nz_select_ngModelChange_21_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.year, $event) || (ctx.year = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(22, ViewYearUseInfoListComponent_nz_option_22_Template, 1, 2, "nz-option", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 11)(24, "label", 7);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "nz-select", 14);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewYearUseInfoListComponent_Template_nz_select_ngModelChange_27_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.empTypeCode, $event) || (ctx.empTypeCode = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(29, ViewYearUseInfoListComponent_nz_option_29_Template, 2, 5, "nz-option", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 11)(31, "label", 7);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "nz-select", 15);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewYearUseInfoListComponent_Template_nz_select_ngModelChange_34_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.empOffice, $event) || (ctx.empOffice = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(36, ViewYearUseInfoListComponent_nz_option_36_Template, 1, 2, "nz-option", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 16)(38, "button", 17);
      \u0275\u0275element(39, "i", 18);
      \u0275\u0275text(40);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "button", 19);
      \u0275\u0275listener("click", function ViewYearUseInfoListComponent_Template_button_click_42_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(43, "i", 20);
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "button", 21);
      \u0275\u0275listener("click", function ViewYearUseInfoListComponent_Template_button_click_46_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(47, "i", 22);
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(50, "nz-card");
      \u0275\u0275template(51, ViewYearUseInfoListComponent_nz_alert_51_Template, 1, 1, "nz-alert", 23);
      \u0275\u0275elementStart(52, "div", 24)(53, "span", 25);
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "input", 26);
      \u0275\u0275pipe(57, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewYearUseInfoListComponent_Template_input_ngModelChange_56_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.quickFilter, $event) || (ctx.quickFilter = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "nz-table", 27, 0)(60, "thead")(61, "tr")(62, "th", 28);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "th", 29);
      \u0275\u0275text(66);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "th", 30);
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "th", 29);
      \u0275\u0275text(72);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "th", 31);
      \u0275\u0275text(75);
      \u0275\u0275pipe(76, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "th", 32);
      \u0275\u0275text(78);
      \u0275\u0275pipe(79, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "th", 33);
      \u0275\u0275text(81);
      \u0275\u0275pipe(82, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "th", 33);
      \u0275\u0275text(84);
      \u0275\u0275pipe(85, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "th", 34);
      \u0275\u0275text(87);
      \u0275\u0275pipe(88, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "th", 34);
      \u0275\u0275text(90);
      \u0275\u0275pipe(91, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "th", 35);
      \u0275\u0275text(93);
      \u0275\u0275pipe(94, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "th", 36);
      \u0275\u0275text(96);
      \u0275\u0275pipe(97, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "th", 35);
      \u0275\u0275text(99);
      \u0275\u0275pipe(100, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "th", 35);
      \u0275\u0275text(102);
      \u0275\u0275pipe(103, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(104, "tbody");
      \u0275\u0275template(105, ViewYearUseInfoListComponent_tr_105_Template, 29, 17, "tr", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275template(106, ViewYearUseInfoListComponent_ng_template_106_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const yuilTable_r9 = \u0275\u0275reference(59);
      const yuilTotalTpl_r10 = \u0275\u0275reference(107);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 48, "essDept.keyword", "M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.keyword);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 51, "vdp.search.empKeyword.placeholder", "Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 54, "essDept.dept", "Ph\xF2ng ban"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzNodes", ctx.deptNodes());
      \u0275\u0275twoWayProperty("ngModel", ctx.deptNos);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(15, 57, "vdp.search.dept.placeholder", "Ch\u1ECDn ph\xF2ng ban"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.deptTreeErrorMessage());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 60, "common.year", "N\u0103m"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.year);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.yearOptions);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 63, "essDept.empType", "Lo\u1EA1i nh\xE2n vi\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.empTypeCode);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(28, 66, "common.selectAll", "L\u1EF1a ch\u1ECDn"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.empTypeOptions);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 69, "essDept.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.empOffice);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(35, 72, "common.selectAll", "L\u1EF1a ch\u1ECDn"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.empOfficeOptions());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(41, 75, "essDept.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(45, 78, "essDept.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(49, 81, "essDept.exportExcel", "Xu\u1EA5t Excel"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(55, 84, "common.quickFilter", "L\u1ECDc nhanh"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.quickFilter);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(57, 87, "common.quickFilter", "L\u1ECDc nhanh"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("nzData", ctx.filteredRows())("nzLoading", ctx.loading())("nzPageSize", 50)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", yuilTotalTpl_r10)("nzScroll", \u0275\u0275pureFunction0(132, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(64, 90, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(67, 93, "common.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(70, 96, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(73, 99, "common.empName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(76, 102, "common.dateJoined", "Ng\xE0y v\xE0o l\xE0m"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(79, 105, "common.year", "N\u0103m"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(82, 108, "yuil.label.strtDate", "Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(85, 111, "yuil.label.endDate", "Th\u1EDDi gian k\u1EBFt th\xFAc"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(88, 114, "yuil.col.totalVac", "T\u1ED5ng ph\xE9p n\u0103m"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(91, 117, "yuil.col.addVac", "T\u1EA1o ph\xE9p n\u0103m"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(94, 120, "yuil.col.specialVac", "\u0110\u1EB7c bi\u1EC7t"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(97, 123, "yuil.col.lastYearVac", "C\xF2n l\u1EA1i n\u0103m ngo\xE1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(100, 126, "yuil.col.usedVac", "\u0110\xE3 ngh\u1EC9"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(103, 129, "yuil.col.remainVac", "C\xF2n l\u1EA1i"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", yuilTable_r9.data);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzTreeSelectModule, NzTreeSelectComponent, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=view-year-use-info-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewYearUseInfoListComponent, [{
    type: Component,
    args: [{ selector: "app-view-year-use-info-list", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzSelectModule,
      NzButtonModule,
      NzTreeSelectModule,
      NzAlertModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm - \u0111\u1EE9ng im khi cu\u1ED9n (xem .sticky-filter-card trong styles.css) -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3 align-items-end" (ngSubmit)="search()">
        <div class="col-md-3">
          <label class="form-label">{{ 'essDept.keyword' | translate:'M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn' }}</label>
          <input nz-input [(ngModel)]="keyword" name="keyword"
                 [placeholder]="'vdp.search.empKeyword.placeholder' | translate:'Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn'">
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'essDept.dept' | translate:'Ph\xF2ng ban' }}</label>
          <nz-tree-select class="w-100" [nzNodes]="deptNodes()" [(ngModel)]="deptNos" name="deptNos"
                           nzCheckable nzShowSearch nzAllowClear
                           [nzPlaceHolder]="'vdp.search.dept.placeholder' | translate:'Ch\u1ECDn ph\xF2ng ban'"></nz-tree-select>
          <div *ngIf="deptTreeErrorMessage()" class="text-danger small mt-1">{{ deptTreeErrorMessage() }}</div>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'common.year' | translate:'N\u0103m' }}</label>
          <nz-select class="w-100" [(ngModel)]="year" name="year">
            <nz-option *ngFor="let y of yearOptions" [nzValue]="y" [nzLabel]="y"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'essDept.empType' | translate:'Lo\u1EA1i nh\xE2n vi\xEAn' }}</label>
          <nz-select class="w-100" [(ngModel)]="empTypeCode" name="empTypeCode" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'L\u1EF1a ch\u1ECDn'">
            <nz-option *ngFor="let o of empTypeOptions" [nzValue]="o.value" [nzLabel]="o.labelKey | translate:o.fallback"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'essDept.status' | translate:'Tr\u1EA1ng th\xE1i' }}</label>
          <nz-select class="w-100" [(ngModel)]="empOffice" name="empOffice" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'L\u1EF1a ch\u1ECDn'">
            <nz-option *ngFor="let o of empOfficeOptions()" [nzValue]="o.codeNo" [nzLabel]="o.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-12 d-flex align-items-end gap-2 flex-wrap justify-content-end">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'essDept.search' | translate:'Tra c\u1EE9u' }}
          </button>
          <button nz-button type="button" (click)="clearSearch()">
            <i class="bx bx-x"></i> {{ 'essDept.clearFilter' | translate:'X\xF3a l\u1ECDc' }}
          </button>
          <button nz-button nzType="default" type="button" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'essDept.exportExcel' | translate:'Xu\u1EA5t Excel' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <div class="d-flex align-items-center gap-2 mb-2 flex-wrap justify-content-end">
        <span class="small">{{ 'common.quickFilter' | translate:'L\u1ECDc nhanh' }}</span>
        <input nz-input [(ngModel)]="quickFilter" name="quickFilter"
               [placeholder]="'common.quickFilter' | translate:'L\u1ECDc nhanh'" style="max-width:200px;">
      </div>

      <nz-table [nzData]="filteredRows()" [nzLoading]="loading()" [nzPageSize]="50" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="yuilTotalTpl"
                [nzScroll]="{ x: '1500px', y: 'calc(100vh - 420px)' }"
                class="table-nowrap" #yuilTable>
        <!-- nzWidth khai b\xE1o cho t\u1EEBng c\u1ED9t \u0111\u1EC3 \u0111\u1ED3ng b\u1ED9 \u0111\u1ED9 r\u1ED9ng header/body khi d\xF9ng nzScroll (xem
             gi\u1EA3i th\xEDch \u1EDF dept-ot-apply-info.component.html). -->
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th nzWidth="160px">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
            <th nzWidth="160px">{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'common.dateJoined' | translate:'Ng\xE0y v\xE0o l\xE0m' }}</th>
            <th class="text-center" nzWidth="80px">{{ 'common.year' | translate:'N\u0103m' }}</th>
            <th class="text-center" nzWidth="120px">{{ 'yuil.label.strtDate' | translate:'Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u' }}</th>
            <th class="text-center" nzWidth="120px">{{ 'yuil.label.endDate' | translate:'Th\u1EDDi gian k\u1EBFt th\xFAc' }}</th>
            <th class="text-end" nzWidth="110px">{{ 'yuil.col.totalVac' | translate:'T\u1ED5ng ph\xE9p n\u0103m' }}</th>
            <th class="text-end" nzWidth="110px">{{ 'yuil.col.addVac' | translate:'T\u1EA1o ph\xE9p n\u0103m' }}</th>
            <th class="text-end" nzWidth="90px">{{ 'yuil.col.specialVac' | translate:'\u0110\u1EB7c bi\u1EC7t' }}</th>
            <th class="text-end" nzWidth="130px">{{ 'yuil.col.lastYearVac' | translate:'C\xF2n l\u1EA1i n\u0103m ngo\xE1i' }}</th>
            <th class="text-end" nzWidth="90px">{{ 'yuil.col.usedVac' | translate:'\u0110\xE3 ngh\u1EC9' }}</th>
            <th class="text-end" nzWidth="90px">{{ 'yuil.col.remainVac' | translate:'C\xF2n l\u1EA1i' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of yuilTable.data; let i = index">
            <td class="text-center">{{ i + 1 }}</td>
            <td [attr.title]="row.deptName || null">{{ row.deptName }}</td>
            <td class="text-center" [attr.title]="row.empId || null">{{ row.empId }}</td>
            <td [attr.title]="row.localName || null">{{ row.localName }}</td>
            <td class="text-center">{{ row.dateStarted }}</td>
            <td class="text-center">{{ row.year }}</td>
            <td class="text-center">{{ row.strtDate }}</td>
            <td class="text-center">{{ row.endDate }}</td>
            <td class="text-end">{{ row.totalVac }}</td>
            <td class="text-end">{{ row.addVac }}</td>
            <td class="text-end">{{ row.specialVac }}</td>
            <td class="text-end">{{ row.lastYearVac }}</td>
            <td class="text-end">{{ row.usedVac }}</td>
            <td class="text-end">{{ row.remainVac }}</td>
          </tr>
        </tbody>
        <ng-template #yuilTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>
`, styles: ["/* src/app/view-year-use-info-list/view-year-use-info-list.component.css */\ntable td,\ntable th {\n  white-space: nowrap;\n}\ntable td {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=view-year-use-info-list.component.css.map */\n"] }]
  }], () => [{ type: ViewYearUseInfoListService }, { type: I18nService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewYearUseInfoListComponent, { className: "ViewYearUseInfoListComponent", filePath: "src/app/view-year-use-info-list/view-year-use-info-list.component.ts", lineNumber: 78 });
})();
export {
  ViewYearUseInfoListComponent
};
//# debugId=0a1fb58c-4a32-5e7f-b4dd-9ebf7cff2dd6
//# sourceMappingURL=chunk-MIKS6GO5.js.map
