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

// src/app/view-ar-card-record-day/view-ar-card-record-day.service.ts
var API_BASE = "/ar/attendanceMintenance/api/cardRecordDay";
var ViewArCardRecordDayService = class _ViewArCardRecordDayService {
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
  static \u0275fac = function ViewArCardRecordDayService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewArCardRecordDayService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewArCardRecordDayService, factory: _ViewArCardRecordDayService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewArCardRecordDayService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-ar-card-record-day/view-ar-card-record-day.component.ts
var _c0 = () => ({ x: "1700px", y: "calc(100vh - 380px)" });
function ViewArCardRecordDayComponent_div_26_Template(rf, ctx) {
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
function ViewArCardRecordDayComponent_nz_option_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 36);
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    \u0275\u0275property("nzValue", s_r3.shiftNo)("nzLabel", s_r3.nameVi || s_r3.shiftNo);
  }
}
function ViewArCardRecordDayComponent_nz_alert_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 37);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ViewArCardRecordDayComponent_tr_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 38);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 38);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 38);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 38);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 38);
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
    \u0275\u0275elementStart(29, "td", 38);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r1.pageIndex - 1) * ctx_r1.pageSize + i_r5 + 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.empId || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.empId);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.localName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.localName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.deptTeam || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.deptTeam);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.deptName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.deptName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.postGradeNoName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.postGradeNoName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.arDateStr);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.inDay);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.inTime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.outDay);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.outTime);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.leaveContent || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.leaveContent);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", ctx_r1.shiftDisplay(row_r4));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.shiftDisplay(row_r4));
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.changeShiftPerson || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.changeShiftPerson);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.eatTimes);
  }
}
function ViewArCardRecordDayComponent_ng_template_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r6 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r6, " ");
  }
}
var I18N_KEYS = [
  "acrd.title",
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
  "common.totalRows",
  "mep.msg.loadDeptFailed"
];
var ViewArCardRecordDayComponent = class _ViewArCardRecordDayComponent {
  constructor(api, i18n) {
    this.api = api;
    this.i18n = i18n;
  }
  api;
  i18n;
  pageSizeOptions = [25, 50, 100, 200];
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
  // ==================== Tìm kiếm + phân trang server-side ====================
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
  /** Ghép tên ca + khung giờ giống render cột "acrd.col.shiftName" ở bản DataTables gốc. */
  shiftDisplay(row) {
    const name = row.shiftName || "";
    const time = row.shiftTime || "";
    return name + (time ? ` (${time})` : "");
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
      this.shiftDisplay(r),
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
  static \u0275fac = function ViewArCardRecordDayComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewArCardRecordDayComponent)(\u0275\u0275directiveInject(ViewArCardRecordDayService), \u0275\u0275directiveInject(I18nService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewArCardRecordDayComponent, selectors: [["app-view-ar-card-record-day"]], decls: 111, vars: 141, consts: [["acrdTotalTpl", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", "align-items-end", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["nz-input", "", "name", "keyword", 3, "ngModelChange", "ngModel", "placeholder"], [1, "col-md-2"], ["name", "fromDate", "nzFormat", "yyyy-MM-dd", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "toDate", "nzFormat", "yyyy-MM-dd", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "deptNos", "nzCheckable", "", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["class", "text-danger small mt-1", 4, "ngIf"], ["name", "shiftNoFilter", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["name", "missingCard", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["nzValue", "1", 3, "nzLabel"], ["nzValue", "2", 3, "nzLabel"], [1, "col-12", "d-flex", "align-items-end", "gap-2", "flex-wrap", "justify-content-end"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], ["nz-button", "", "nzType", "default", "type", "button", 3, "click"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], ["nzShowSizeChanger", "", 1, "table-nowrap", 3, "nzPageIndexChange", "nzPageSizeChange", "nzData", "nzFrontPagination", "nzLoading", "nzTotal", "nzPageIndex", "nzPageSize", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "100px", 1, "text-center"], ["nzWidth", "140px"], ["nzWidth", "100px"], ["nzWidth", "160px"], ["nzWidth", "120px"], ["nzWidth", "150px"], [4, "ngFor", "ngForOf"], [1, "text-danger", "small", "mt-1"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], [1, "text-center"]], template: function ViewArCardRecordDayComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "nz-card", 3)(3, "form", 4);
      \u0275\u0275listener("ngSubmit", function ViewArCardRecordDayComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 5)(5, "label", 6);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 7);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewArCardRecordDayComponent_Template_input_ngModelChange_8_listener($event) {
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
      \u0275\u0275twoWayListener("ngModelChange", function ViewArCardRecordDayComponent_Template_nz_date_picker_ngModelChange_14_listener($event) {
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
      \u0275\u0275twoWayListener("ngModelChange", function ViewArCardRecordDayComponent_Template_nz_date_picker_ngModelChange_19_listener($event) {
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
      \u0275\u0275twoWayListener("ngModelChange", function ViewArCardRecordDayComponent_Template_nz_tree_select_ngModelChange_24_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.deptNos, $event) || (ctx.deptNos = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275template(26, ViewArCardRecordDayComponent_div_26_Template, 2, 1, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 8)(28, "label", 6);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "nz-select", 13);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewArCardRecordDayComponent_Template_nz_select_ngModelChange_31_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.shiftNoFilter, $event) || (ctx.shiftNoFilter = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(33, ViewArCardRecordDayComponent_nz_option_33_Template, 1, 2, "nz-option", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 5)(35, "label", 6);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "nz-select", 15);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewArCardRecordDayComponent_Template_nz_select_ngModelChange_38_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.missingCard, $event) || (ctx.missingCard = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275element(40, "nz-option", 16);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275element(42, "nz-option", 17);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 18)(45, "button", 19);
      \u0275\u0275element(46, "i", 20);
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "button", 21);
      \u0275\u0275listener("click", function ViewArCardRecordDayComponent_Template_button_click_49_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(50, "i", 22);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "button", 23);
      \u0275\u0275listener("click", function ViewArCardRecordDayComponent_Template_button_click_53_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(54, "i", 24);
      \u0275\u0275text(55);
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(57, "nz-card");
      \u0275\u0275template(58, ViewArCardRecordDayComponent_nz_alert_58_Template, 1, 1, "nz-alert", 25);
      \u0275\u0275elementStart(59, "nz-table", 26);
      \u0275\u0275listener("nzPageIndexChange", function ViewArCardRecordDayComponent_Template_nz_table_nzPageIndexChange_59_listener($event) {
        return ctx.onPageIndexChange($event);
      })("nzPageSizeChange", function ViewArCardRecordDayComponent_Template_nz_table_nzPageSizeChange_59_listener($event) {
        return ctx.onPageSizeChange($event);
      });
      \u0275\u0275elementStart(60, "thead")(61, "tr")(62, "th", 27);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "th", 28);
      \u0275\u0275text(66);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "th", 29);
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "th", 30);
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
      \u0275\u0275elementStart(80, "th", 28);
      \u0275\u0275text(81);
      \u0275\u0275pipe(82, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "th", 28);
      \u0275\u0275text(84);
      \u0275\u0275pipe(85, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "th", 28);
      \u0275\u0275text(87);
      \u0275\u0275pipe(88, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "th", 28);
      \u0275\u0275text(90);
      \u0275\u0275pipe(91, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "th", 28);
      \u0275\u0275text(93);
      \u0275\u0275pipe(94, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "th", 31);
      \u0275\u0275text(96);
      \u0275\u0275pipe(97, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "th", 33);
      \u0275\u0275text(99);
      \u0275\u0275pipe(100, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "th", 33);
      \u0275\u0275text(102);
      \u0275\u0275pipe(103, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "th", 28);
      \u0275\u0275text(105);
      \u0275\u0275pipe(106, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(107, "tbody");
      \u0275\u0275template(108, ViewArCardRecordDayComponent_tr_108_Template, 31, 23, "tr", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275template(109, ViewArCardRecordDayComponent_ng_template_109_Template, 2, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const acrdTotalTpl_r7 = \u0275\u0275reference(110);
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
      \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(41, 80, "acrd.missingCard.yes", "Thi\u1EBFu th\u1EBB"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(43, 83, "acrd.missingCard.no", "\u0110\u1EE7 th\u1EBB"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(48, 86, "common.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(52, 89, "common.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(56, 92, "common.exportExcel", "Xu\u1EA5t Excel"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzFrontPagination", false)("nzLoading", ctx.loading())("nzTotal", ctx.recordsTotal())("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", acrdTotalTpl_r7)("nzScroll", \u0275\u0275pureFunction0(140, _c0));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(64, 95, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(67, 98, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(70, 101, "common.empName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(73, 104, "acrd.col.team", "TEAM"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(76, 107, "common.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(79, 110, "common.position", "Ch\u1EE9c v\u1EE5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(82, 113, "attSearch.workDate", "Ng\xE0y c\xF4ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(85, 116, "acrd.col.inDay", "Ng\xE0y v\xE0o"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(88, 119, "acrd.col.inTime", "Th\u1EDDi gian v\xE0o"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(91, 122, "acrd.col.outDay", "Ng\xE0y ra"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(94, 125, "acrd.col.outTime", "Th\u1EDDi gian ra"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(97, 128, "acr.col.remark", "Ghi ch\xFA"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(100, 131, "acrd.col.shiftName", "Ca l\xE0m"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(103, 134, "acrd.col.changeShiftPerson", "Ng\u01B0\u1EDDi thay \u0111\u1ED5i Ca l\xE0m"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(106, 137, "acrd.col.eatTime", "Eat time"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.rows());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzDatePickerModule, NzDatePickerComponent, NzTreeSelectModule, NzTreeSelectComponent, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=view-ar-card-record-day.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewArCardRecordDayComponent, [{
    type: Component,
    args: [{ selector: "app-view-ar-card-record-day", standalone: true, imports: [
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
            <nz-option nzValue="1" [nzLabel]="'acrd.missingCard.yes' | translate:'Thi\u1EBFu th\u1EBB'"></nz-option>
            <nz-option nzValue="2" [nzLabel]="'acrd.missingCard.no' | translate:'\u0110\u1EE7 th\u1EBB'"></nz-option>
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
                [nzPageSizeOptions]="pageSizeOptions" nzShowSizeChanger [nzShowTotal]="acrdTotalTpl"
                (nzPageIndexChange)="onPageIndexChange($event)" (nzPageSizeChange)="onPageSizeChange($event)"
                [nzScroll]="{ x: '1700px', y: 'calc(100vh - 380px)' }"
                class="table-nowrap">
        <!-- nzWidth khai b\xE1o cho t\u1EEBng c\u1ED9t \u0111\u1EC3 \u0111\u1ED3ng b\u1ED9 \u0111\u1ED9 r\u1ED9ng header/body khi d\xF9ng nzScroll (xem
             gi\u1EA3i th\xEDch \u1EDF dept-ot-apply-info.component.html). -->
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
            <th nzWidth="140px">{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
            <th nzWidth="100px">{{ 'acrd.col.team' | translate:'TEAM' }}</th>
            <th nzWidth="160px">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
            <th nzWidth="120px">{{ 'common.position' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'attSearch.workDate' | translate:'Ng\xE0y c\xF4ng' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'acrd.col.inDay' | translate:'Ng\xE0y v\xE0o' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'acrd.col.inTime' | translate:'Th\u1EDDi gian v\xE0o' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'acrd.col.outDay' | translate:'Ng\xE0y ra' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'acrd.col.outTime' | translate:'Th\u1EDDi gian ra' }}</th>
            <th nzWidth="160px">{{ 'acr.col.remark' | translate:'Ghi ch\xFA' }}</th>
            <th nzWidth="150px">{{ 'acrd.col.shiftName' | translate:'Ca l\xE0m' }}</th>
            <th nzWidth="150px">{{ 'acrd.col.changeShiftPerson' | translate:'Ng\u01B0\u1EDDi thay \u0111\u1ED5i Ca l\xE0m' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'acrd.col.eatTime' | translate:'Eat time' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of rows(); let i = index">
            <td class="text-center">{{ (pageIndex - 1) * pageSize + i + 1 }}</td>
            <td class="text-center" [attr.title]="row.empId || null">{{ row.empId }}</td>
            <td [attr.title]="row.localName || null">{{ row.localName }}</td>
            <td [attr.title]="row.deptTeam || null">{{ row.deptTeam }}</td>
            <td [attr.title]="row.deptName || null">{{ row.deptName }}</td>
            <td [attr.title]="row.postGradeNoName || null">{{ row.postGradeNoName }}</td>
            <td class="text-center">{{ row.arDateStr }}</td>
            <td class="text-center">{{ row.inDay }}</td>
            <td class="text-center">{{ row.inTime }}</td>
            <td class="text-center">{{ row.outDay }}</td>
            <td class="text-center">{{ row.outTime }}</td>
            <td [attr.title]="row.leaveContent || null">{{ row.leaveContent }}</td>
            <td [attr.title]="shiftDisplay(row)">{{ shiftDisplay(row) }}</td>
            <td [attr.title]="row.changeShiftPerson || null">{{ row.changeShiftPerson }}</td>
            <td class="text-center">{{ row.eatTimes }}</td>
          </tr>
        </tbody>
        <ng-template #acrdTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>
`, styles: ["/* src/app/view-ar-card-record-day/view-ar-card-record-day.component.css */\ntable td,\ntable th {\n  white-space: nowrap;\n}\ntable td {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=view-ar-card-record-day.component.css.map */\n"] }]
  }], () => [{ type: ViewArCardRecordDayService }, { type: I18nService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewArCardRecordDayComponent, { className: "ViewArCardRecordDayComponent", filePath: "src/app/view-ar-card-record-day/view-ar-card-record-day.component.ts", lineNumber: 62 });
})();
export {
  ViewArCardRecordDayComponent
};
//# debugId=8a7d25f6-2bac-53e6-9779-9d44a6bacf12
//# sourceMappingURL=chunk-W5B2BHY5.js.map
