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

// src/app/view-entry-info-list/view-entry-info-list.service.ts
var API_BASE = "/ess/viewDept/api/entryInfoList";
var ViewEntryInfoListService = class _ViewEntryInfoListService {
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
  getShiftList() {
    return this.http.get("/ar/attendanceSettings/api/shift", { withCredentials: true });
  }
  getAuthorizedDepartments() {
    return this.http.get("/ar/attendanceSettings/api/arSupervisor/authorized-departments", {
      withCredentials: true
    });
  }
  static \u0275fac = function ViewEntryInfoListService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewEntryInfoListService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewEntryInfoListService, factory: _ViewEntryInfoListService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewEntryInfoListService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-entry-info-list/view-entry-info-list.component.ts
var _c0 = () => ({ x: "1700px", y: "calc(100vh - 400px)" });
function ViewEntryInfoListComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.deptTreeErrorMessage());
  }
}
function ViewEntryInfoListComponent_nz_option_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 36);
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    \u0275\u0275property("nzValue", s_r3.shiftNo)("nzLabel", s_r3.nameVi || s_r3.shiftNo);
  }
}
function ViewEntryInfoListComponent_nz_option_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 36);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const o_r4 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r4.value)("nzLabel", \u0275\u0275pipeBind2(1, 2, o_r4.labelKey, o_r4.fallback));
  }
}
function ViewEntryInfoListComponent_nz_alert_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 37);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ViewEntryInfoListComponent_tr_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 38);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewEntryInfoListComponent_tr_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 39);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 39);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 39);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 39);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 39);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 39);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td", 39);
    \u0275\u0275text(30);
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
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.deptTeam);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.deptName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.deptName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.postGradeNoName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.postGradeNoName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.arDateStr);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.inDay);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.inTime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.outDay);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.outTime);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.leaveContent || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.leaveContent);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", ctx_r1.shiftLabel(row_r5) || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.shiftLabel(row_r5));
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.changeShiftPerson || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.changeShiftPerson);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.eatTimes);
  }
}
function ViewEntryInfoListComponent_ng_template_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r7 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r7, " ");
  }
}
var I18N_KEYS = [
  "common.search.empIdOrName",
  "common.placeholder.enterEmpId",
  "common.fromDate",
  "common.toDate",
  "common.deptName",
  "common.select",
  "attSearch.shiftType",
  "attSearch.all",
  "acrd.col.missingCard",
  "acrd.missingCard.all",
  "acrd.missingCard.yes",
  "acrd.missingCard.no",
  "common.search",
  "common.clearFilter",
  "common.exportExcel",
  "common.stt",
  "common.empId",
  "common.empName",
  "acrd.col.team",
  "common.position",
  "attSearch.workDate",
  "acrd.col.inDay",
  "acrd.col.inTime",
  "acrd.col.outDay",
  "acrd.col.outTime",
  "acr.col.remark",
  "acrd.col.shiftName",
  "acrd.col.changeShiftPerson",
  "acrd.col.eatTime",
  "common.loadFail",
  "common.noData",
  "common.totalRows",
  "mep.msg.loadDeptFailed"
];
var MISSING_CARD_OPTIONS = [
  { value: "1", labelKey: "acrd.missingCard.yes", fallback: "Thi\u1EBFu th\u1EBB" },
  { value: "2", labelKey: "acrd.missingCard.no", fallback: "\u0110\u1EE7 th\u1EBB" }
];
var ViewEntryInfoListComponent = class _ViewEntryInfoListComponent {
  constructor(api, i18n) {
    this.api = api;
    this.i18n = i18n;
  }
  api;
  i18n;
  pageSizeOptions = [25, 50, 100, 200, 500];
  missingCardOptions = MISSING_CARD_OPTIONS;
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
  shiftOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "shiftOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  keyword = "";
  deptNos = [];
  fromDate = null;
  toDate = null;
  shiftNoFilter = null;
  missingCard = null;
  pageIndex = 1;
  pageSize = 50;
  /** id -> danh sách id con trực tiếp - dùng để mở rộng lựa chọn cây phòng ban khi tra cứu (xem search()). */
  deptChildrenMap = /* @__PURE__ */ new Map();
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.initDefaultDateRange();
    this.loadDeptTree();
    this.api.getShiftList().subscribe((list) => this.shiftOptions.set(list ?? []));
    this.search();
  }
  initDefaultDateRange() {
    const today = /* @__PURE__ */ new Date();
    this.fromDate = today;
    this.toDate = today;
  }
  search() {
    this.pageIndex = 1;
    this.loadPage();
  }
  clearSearch() {
    this.keyword = "";
    this.deptNos = [];
    this.shiftNoFilter = null;
    this.missingCard = null;
    this.initDefaultDateRange();
    this.search();
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
  loadPage() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getPageList({
      keyword: this.keyword.trim(),
      deptNos: this.expandDeptSelection(this.deptNos).join(","),
      fromDate: this.formatYmd(this.fromDate),
      toDate: this.formatYmd(this.toDate),
      shiftNoFilter: this.shiftNoFilter ?? "",
      missingCard: this.missingCard ?? "",
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
        this.rows.set([]);
        this.recordsTotal.set(0);
        this.loading.set(false);
      }
    });
  }
  shiftLabel(row) {
    const name = row.shiftName || "";
    return row.shiftTime ? `${name} (${row.shiftTime})` : name;
  }
  // ==================== Xuất excel (client-side, đúng trang dữ liệu đang tải - xem docblock class) ====================
  exportExcel() {
    const t = (key, fallback) => this.i18n.t(key, fallback);
    const headers = [
      t("common.stt", "STT"),
      t("common.empId", "M\xE3 nh\xE2n vi\xEAn"),
      t("common.empName", "H\u1ECD t\xEAn"),
      t("acrd.col.team", "TEAM"),
      t("common.deptName", "Ph\xF2ng ban"),
      t("common.position", "Ch\u1EE9c v\u1EE5"),
      t("attSearch.workDate", "Ng\xE0y c\xF4ng"),
      t("acrd.col.inDay", "Ng\xE0y v\xE0o"),
      t("acrd.col.inTime", "Th\u1EDDi gian v\xE0o"),
      t("acrd.col.outDay", "Ng\xE0y ra"),
      t("acrd.col.outTime", "Th\u1EDDi gian ra"),
      t("acr.col.remark", "Ghi ch\xFA"),
      t("acrd.col.shiftName", "Ca l\xE0m"),
      t("acrd.col.changeShiftPerson", "Ng\u01B0\u1EDDi thay \u0111\u1ED5i Ca l\xE0m"),
      t("acrd.col.eatTime", "Eat time")
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      r.empId,
      r.localName,
      r.deptTeam,
      r.deptName,
      r.postGradeNoName,
      r.arDateStr,
      r.inDay,
      r.inTime,
      r.outDay,
      r.outTime,
      r.leaveContent,
      this.shiftLabel(r),
      r.changeShiftPerson,
      r.eatTimes
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "DuLieuQuetThe");
    writeFileSync(workbook, "du_lieu_quet_the_ca_lam.xlsx");
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
  formatYmd(d) {
    return d ? formatDate(d, "yyyy-MM-dd", "vi") : "";
  }
  static \u0275fac = function ViewEntryInfoListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewEntryInfoListComponent)(\u0275\u0275directiveInject(ViewEntryInfoListService), \u0275\u0275directiveInject(I18nService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewEntryInfoListComponent, selectors: [["app-view-entry-info-list"]], decls: 109, vars: 135, consts: [["veilTotalTpl", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", "align-items-end", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["nz-input", "", "name", "keyword", 3, "ngModelChange", "ngModel", "placeholder"], [1, "col-md-2"], ["name", "fromDate", "nzFormat", "yyyy-MM-dd", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "toDate", "nzFormat", "yyyy-MM-dd", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "deptNos", "nzCheckable", "", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["class", "text-danger small mt-1", 4, "ngIf"], ["name", "shiftNoFilter", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["name", "missingCard", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [1, "col-12", "d-flex", "align-items-end", "gap-2", "flex-wrap", "justify-content-end"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], ["nz-button", "", "nzType", "default", "type", "button", 3, "click"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], ["nzShowSizeChanger", "", 1, "table-nowrap", 3, "nzPageIndexChange", "nzPageSizeChange", "nzData", "nzFrontPagination", "nzLoading", "nzTotal", "nzPageIndex", "nzPageSize", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "100px", 1, "text-center"], ["nzWidth", "140px"], ["nzWidth", "90px", 1, "text-center"], ["nzWidth", "160px"], ["nzWidth", "120px"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "150px"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "text-danger", "small", "mt-1"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], [1, "text-center", "text-muted"], [1, "text-center"]], template: function ViewEntryInfoListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "nz-card", 3)(3, "form", 4);
      \u0275\u0275listener("ngSubmit", function ViewEntryInfoListComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 5)(5, "label", 6);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 7);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewEntryInfoListComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.keyword, $event) || (ctx.keyword = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 8)(11, "label", 6);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "nz-date-picker", 9);
      \u0275\u0275twoWayListener("ngModelChange", function ViewEntryInfoListComponent_Template_nz_date_picker_ngModelChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.fromDate, $event) || (ctx.fromDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 8)(16, "label", 6);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "nz-date-picker", 10);
      \u0275\u0275twoWayListener("ngModelChange", function ViewEntryInfoListComponent_Template_nz_date_picker_ngModelChange_19_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.toDate, $event) || (ctx.toDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 5)(21, "label", 6);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "nz-tree-select", 11);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewEntryInfoListComponent_Template_nz_tree_select_ngModelChange_24_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.deptNos, $event) || (ctx.deptNos = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275template(26, ViewEntryInfoListComponent_div_26_Template, 2, 1, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 8)(28, "label", 6);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "nz-select", 13);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewEntryInfoListComponent_Template_nz_select_ngModelChange_31_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.shiftNoFilter, $event) || (ctx.shiftNoFilter = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(33, ViewEntryInfoListComponent_nz_option_33_Template, 1, 2, "nz-option", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 5)(35, "label", 6);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "nz-select", 15);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewEntryInfoListComponent_Template_nz_select_ngModelChange_38_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.missingCard, $event) || (ctx.missingCard = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(40, ViewEntryInfoListComponent_nz_option_40_Template, 2, 5, "nz-option", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 16)(42, "button", 17);
      \u0275\u0275element(43, "i", 18);
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "button", 19);
      \u0275\u0275listener("click", function ViewEntryInfoListComponent_Template_button_click_46_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(47, "i", 20);
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "button", 21);
      \u0275\u0275listener("click", function ViewEntryInfoListComponent_Template_button_click_50_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(51, "i", 22);
      \u0275\u0275text(52);
      \u0275\u0275pipe(53, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(54, "nz-card");
      \u0275\u0275template(55, ViewEntryInfoListComponent_nz_alert_55_Template, 1, 1, "nz-alert", 23);
      \u0275\u0275elementStart(56, "nz-table", 24);
      \u0275\u0275listener("nzPageIndexChange", function ViewEntryInfoListComponent_Template_nz_table_nzPageIndexChange_56_listener($event) {
        return ctx.onPageIndexChange($event);
      })("nzPageSizeChange", function ViewEntryInfoListComponent_Template_nz_table_nzPageSizeChange_56_listener($event) {
        return ctx.onPageSizeChange($event);
      });
      \u0275\u0275elementStart(57, "thead")(58, "tr")(59, "th", 25);
      \u0275\u0275text(60);
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "th", 26);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "th", 27);
      \u0275\u0275text(66);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "th", 28);
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "th", 29);
      \u0275\u0275text(72);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "th", 30);
      \u0275\u0275text(75);
      \u0275\u0275pipe(76, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "th", 26);
      \u0275\u0275text(78);
      \u0275\u0275pipe(79, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "th", 26);
      \u0275\u0275text(81);
      \u0275\u0275pipe(82, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "th", 31);
      \u0275\u0275text(84);
      \u0275\u0275pipe(85, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "th", 26);
      \u0275\u0275text(87);
      \u0275\u0275pipe(88, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "th", 31);
      \u0275\u0275text(90);
      \u0275\u0275pipe(91, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "th", 29);
      \u0275\u0275text(93);
      \u0275\u0275pipe(94, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "th", 32);
      \u0275\u0275text(96);
      \u0275\u0275pipe(97, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "th", 32);
      \u0275\u0275text(99);
      \u0275\u0275pipe(100, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "th", 26);
      \u0275\u0275text(102);
      \u0275\u0275pipe(103, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(104, "tbody");
      \u0275\u0275template(105, ViewEntryInfoListComponent_tr_105_Template, 4, 5, "tr", 33)(106, ViewEntryInfoListComponent_tr_106_Template, 31, 22, "tr", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275template(107, ViewEntryInfoListComponent_ng_template_107_Template, 2, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const veilTotalTpl_r8 = \u0275\u0275reference(108);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 50, "common.search.empIdOrName", "M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.keyword);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 53, "common.placeholder.enterEmpId", "Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 56, "common.fromDate", "T\u1EEB ng\xE0y"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.fromDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 59, "common.toDate", "\u0110\u1EBFn ng\xE0y"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.toDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 62, "common.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzNodes", ctx.deptNodes());
      \u0275\u0275twoWayProperty("ngModel", ctx.deptNos);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(25, 65, "common.select", "Ch\u1ECDn ph\xF2ng ban"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.deptTreeErrorMessage());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 68, "attSearch.shiftType", "Ca l\xE0m vi\u1EC7c"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.shiftNoFilter);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(32, 71, "attSearch.all", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.shiftOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 74, "acrd.col.missingCard", "Tr\u1EA1ng th\xE1i thi\u1EBFu th\u1EBB"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.missingCard);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(39, 77, "acrd.missingCard.all", "T\u1EA5t c\u1EA3"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.missingCardOptions);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(45, 80, "common.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(49, 83, "common.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(53, 86, "common.exportExcel", "Xu\u1EA5t Excel"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzFrontPagination", false)("nzLoading", ctx.loading())("nzTotal", ctx.recordsTotal())("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", veilTotalTpl_r8)("nzScroll", \u0275\u0275pureFunction0(134, _c0));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(61, 89, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(64, 92, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(67, 95, "common.empName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(70, 98, "acrd.col.team", "TEAM"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(73, 101, "common.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(76, 104, "common.position", "Ch\u1EE9c v\u1EE5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(79, 107, "attSearch.workDate", "Ng\xE0y c\xF4ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(82, 110, "acrd.col.inDay", "Ng\xE0y v\xE0o"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(85, 113, "acrd.col.inTime", "Th\u1EDDi gian v\xE0o"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(88, 116, "acrd.col.outDay", "Ng\xE0y ra"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(91, 119, "acrd.col.outTime", "Th\u1EDDi gian ra"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(94, 122, "acr.col.remark", "Ghi ch\xFA"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(97, 125, "acrd.col.shiftName", "Ca l\xE0m"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(100, 128, "acrd.col.changeShiftPerson", "Ng\u01B0\u1EDDi thay \u0111\u1ED5i Ca l\xE0m"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(103, 131, "acrd.col.eatTime", "Eat time"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.rows());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzDatePickerModule, NzDatePickerComponent, NzTreeSelectModule, NzTreeSelectComponent, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=view-entry-info-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewEntryInfoListComponent, [{
    type: Component,
    args: [{ selector: "app-view-entry-info-list", standalone: true, imports: [
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
        <div class="col-md-3">
          <label class="form-label">{{ 'common.search.empIdOrName' | translate:'M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn' }}</label>
          <input nz-input [(ngModel)]="keyword" name="keyword"
                 [placeholder]="'common.placeholder.enterEmpId' | translate:'Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn'">
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'common.fromDate' | translate:'T\u1EEB ng\xE0y' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="fromDate" name="fromDate" nzFormat="yyyy-MM-dd"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'common.toDate' | translate:'\u0110\u1EBFn ng\xE0y' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="toDate" name="toDate" nzFormat="yyyy-MM-dd"></nz-date-picker>
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</label>
          <nz-tree-select class="w-100" [nzNodes]="deptNodes()" [(ngModel)]="deptNos" name="deptNos"
                           nzCheckable nzShowSearch nzAllowClear
                           [nzPlaceHolder]="'common.select' | translate:'Ch\u1ECDn ph\xF2ng ban'"></nz-tree-select>
          <div *ngIf="deptTreeErrorMessage()" class="text-danger small mt-1">{{ deptTreeErrorMessage() }}</div>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'attSearch.shiftType' | translate:'Ca l\xE0m vi\u1EC7c' }}</label>
          <nz-select class="w-100" [(ngModel)]="shiftNoFilter" name="shiftNoFilter" nzAllowClear
                     [nzPlaceHolder]="'attSearch.all' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let s of shiftOptions()" [nzValue]="s.shiftNo" [nzLabel]="s.nameVi || s.shiftNo"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'acrd.col.missingCard' | translate:'Tr\u1EA1ng th\xE1i thi\u1EBFu th\u1EBB' }}</label>
          <nz-select class="w-100" [(ngModel)]="missingCard" name="missingCard" nzAllowClear
                     [nzPlaceHolder]="'acrd.missingCard.all' | translate:'T\u1EA5t c\u1EA3'">
            <nz-option *ngFor="let o of missingCardOptions" [nzValue]="o.value" [nzLabel]="o.labelKey | translate:o.fallback"></nz-option>
          </nz-select>
        </div>
        <div class="col-12 d-flex align-items-end gap-2 flex-wrap justify-content-end">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'common.search' | translate:'Tra c\u1EE9u' }}
          </button>
          <button nz-button type="button" (click)="clearSearch()">
            <i class="bx bx-x"></i> {{ 'common.clearFilter' | translate:'X\xF3a l\u1ECDc' }}
          </button>
          <button nz-button nzType="default" type="button" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'common.exportExcel' | translate:'Xu\u1EA5t Excel' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <nz-table [nzData]="rows()" [nzFrontPagination]="false" [nzLoading]="loading()"
                [nzTotal]="recordsTotal()" [nzPageIndex]="pageIndex" [nzPageSize]="pageSize"
                [nzPageSizeOptions]="pageSizeOptions" nzShowSizeChanger [nzShowTotal]="veilTotalTpl"
                (nzPageIndexChange)="onPageIndexChange($event)" (nzPageSizeChange)="onPageSizeChange($event)"
                [nzScroll]="{ x: '1700px', y: 'calc(100vh - 400px)' }"
                class="table-nowrap">
        <!-- nzWidth khai b\xE1o cho t\u1EEBng c\u1ED9t \u0111\u1EC3 \u0111\u1ED3ng b\u1ED9 \u0111\u1ED9 r\u1ED9ng header/body khi d\xF9ng nzScroll (xem
             gi\u1EA3i th\xEDch \u1EDF dept-ot-apply-info.component.html). -->
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
            <th nzWidth="140px">{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'acrd.col.team' | translate:'TEAM' }}</th>
            <th nzWidth="160px">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
            <th nzWidth="120px">{{ 'common.position' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'attSearch.workDate' | translate:'Ng\xE0y c\xF4ng' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'acrd.col.inDay' | translate:'Ng\xE0y v\xE0o' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'acrd.col.inTime' | translate:'Th\u1EDDi gian v\xE0o' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'acrd.col.outDay' | translate:'Ng\xE0y ra' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'acrd.col.outTime' | translate:'Th\u1EDDi gian ra' }}</th>
            <th nzWidth="160px">{{ 'acr.col.remark' | translate:'Ghi ch\xFA' }}</th>
            <th nzWidth="150px">{{ 'acrd.col.shiftName' | translate:'Ca l\xE0m' }}</th>
            <th nzWidth="150px">{{ 'acrd.col.changeShiftPerson' | translate:'Ng\u01B0\u1EDDi thay \u0111\u1ED5i Ca l\xE0m' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'acrd.col.eatTime' | translate:'Eat time' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td [attr.colspan]="15" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of rows(); let i = index">
            <td class="text-center">{{ (pageIndex - 1) * pageSize + i + 1 }}</td>
            <td class="text-center" [attr.title]="row.empId || null">{{ row.empId }}</td>
            <td [attr.title]="row.localName || null">{{ row.localName }}</td>
            <td class="text-center">{{ row.deptTeam }}</td>
            <td [attr.title]="row.deptName || null">{{ row.deptName }}</td>
            <td [attr.title]="row.postGradeNoName || null">{{ row.postGradeNoName }}</td>
            <td class="text-center">{{ row.arDateStr }}</td>
            <td class="text-center">{{ row.inDay }}</td>
            <td class="text-center">{{ row.inTime }}</td>
            <td class="text-center">{{ row.outDay }}</td>
            <td class="text-center">{{ row.outTime }}</td>
            <td [attr.title]="row.leaveContent || null">{{ row.leaveContent }}</td>
            <td [attr.title]="shiftLabel(row) || null">{{ shiftLabel(row) }}</td>
            <td [attr.title]="row.changeShiftPerson || null">{{ row.changeShiftPerson }}</td>
            <td class="text-center">{{ row.eatTimes }}</td>
          </tr>
        </tbody>
        <ng-template #veilTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>
`, styles: ["/* src/app/view-entry-info-list/view-entry-info-list.component.css */\ntable td,\ntable th {\n  white-space: nowrap;\n}\ntable td {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=view-entry-info-list.component.css.map */\n"] }]
  }], () => [{ type: ViewEntryInfoListService }, { type: I18nService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewEntryInfoListComponent, { className: "ViewEntryInfoListComponent", filePath: "src/app/view-entry-info-list/view-entry-info-list.component.ts", lineNumber: 67 });
})();
export {
  ViewEntryInfoListComponent
};
//# debugId=25ff5509-440d-5c74-b2e0-8976dd2b7575
//# sourceMappingURL=chunk-JLPXYZVT.js.map
