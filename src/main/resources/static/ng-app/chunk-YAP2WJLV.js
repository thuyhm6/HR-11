import {
  NzModalComponent,
  NzModalContentDirective,
  NzModalModule
} from "./chunk-OEYWCHIN.js";
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
  HttpHeaders,
  HttpParams,
  Injectable,
  NgForOf,
  NgIf,
  NzButtonComponent,
  NzButtonModule,
  NzTransitionPatchDirective,
  NzWaveDirective,
  __spreadValues,
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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

// src/app/view-ar-card-record-for-self/view-ar-card-record-for-self.service.ts
var API_BASE = "/ar/attendanceMintenance/api/cardRecordForSelf";
var ViewArCardRecordForSelfService = class _ViewArCardRecordForSelfService {
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
  exportExcelUrl(params) {
    const httpParams = new HttpParams({ fromObject: __spreadValues({}, params) });
    return `${API_BASE}/exportExcel?${httpParams.toString()}`;
  }
  importFromDevice(fromDate, toDate) {
    const body = new HttpParams().set("fromDate", fromDate).set("toDate", toDate);
    const headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");
    return this.http.post(`${API_BASE}/importFromDevice`, body.toString(), { headers, withCredentials: true });
  }
  getAuthorizedDepartments() {
    return this.http.get("/ar/attendanceSettings/api/arSupervisor/authorized-departments", {
      withCredentials: true
    });
  }
  static \u0275fac = function ViewArCardRecordForSelfService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewArCardRecordForSelfService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewArCardRecordForSelfService, factory: _ViewArCardRecordForSelfService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewArCardRecordForSelfService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-ar-card-record-for-self/view-ar-card-record-for-self.component.ts
var _c0 = () => ({ x: "1100px", y: "calc(100vh - 380px)" });
function ViewArCardRecordForSelfComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.deptTreeErrorMessage());
  }
}
function ViewArCardRecordForSelfComponent_nz_alert_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 32);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ViewArCardRecordForSelfComponent_tr_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 33);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 33);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 33);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 33);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r1.pageIndex - 1) * ctx_r1.pageSize + i_r4 + 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r3.empId || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r3.empId);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r3.localName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r3.localName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r3.deptName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r3.deptName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.swipeDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.swipeTime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.doorType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.dataSourceName);
  }
}
function ViewArCardRecordForSelfComponent_ng_template_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r5 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r5, " ");
  }
}
function ViewArCardRecordForSelfComponent_ng_container_77_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "div", 41);
    \u0275\u0275elementStart(2, "div", 42);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 1, "acr.imp.processing", "\u0110ang k\u1EBFt n\u1ED1i v\xE0 \u0111\u1ECDc d\u1EEF li\u1EC7u..."));
  }
}
function ViewArCardRecordForSelfComponent_ng_container_77_div_13_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 46)(1, "li");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "li");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "strong", 47);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "li");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementStart(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "li");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementStart(19, "strong", 48);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const res_r7 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(3, 8, "acr.imp.result.total", "T\u1ED5ng b\u1EA3n ghi t\u1EEB m\xE1y ch\u1EE7"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(res_r7.total || 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(8, 11, "acr.imp.result.imported", "\u0110\xE3 l\u01B0u m\u1EDBi"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(res_r7.imported || 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(13, 14, "acr.imp.result.skipped", "B\u1ECF qua (tr\xF9ng)"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(res_r7.skipped || 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(18, 17, "acr.imp.result.notFound", "Kh\xF4ng t\xECm th\u1EA5y nh\xE2n vi\xEAn"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(res_r7.notFound || 0);
  }
}
function ViewArCardRecordForSelfComponent_ng_container_77_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275element(1, "hr")(2, "nz-alert", 44);
    \u0275\u0275template(3, ViewArCardRecordForSelfComponent_ng_container_77_div_13_ul_3_Template, 21, 20, "ul", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const res_r7 = ctx.ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275property("nzType", res_r7.success ? "success" : "error")("nzMessage", res_r7.message || "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", res_r7.success);
  }
}
function ViewArCardRecordForSelfComponent_ng_container_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 34)(2, "div", 35)(3, "label");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "nz-date-picker", 36);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArCardRecordForSelfComponent_ng_container_77_Template_nz_date_picker_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.impFromDate, $event) || (ctx_r1.impFromDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 35)(8, "label");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "nz-date-picker", 37);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArCardRecordForSelfComponent_ng_container_77_Template_nz_date_picker_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.impToDate, $event) || (ctx_r1.impToDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, ViewArCardRecordForSelfComponent_ng_container_77_div_12_Template, 5, 4, "div", 38)(13, ViewArCardRecordForSelfComponent_ng_container_77_div_13_Template, 4, 3, "div", 39);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 6, "common.fromDate", "T\u1EEB ng\xE0y"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.impFromDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 9, "common.toDate", "\u0110\u1EBFn ng\xE0y"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.impToDate);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.impRunning());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.impRunning() && ctx_r1.impResult());
  }
}
var I18N_KEYS = [
  "common.search.empIdOrName",
  "common.placeholder.enterEmpId",
  "common.fromDate",
  "common.toDate",
  "common.deptName",
  "common.select",
  "acr.btn.importFromDevice",
  "common.search",
  "common.exportExcel",
  "common.stt",
  "common.empId",
  "common.empName",
  "acr.col.swipeDate",
  "acr.col.swipeTime",
  "acr.col.doorType",
  "acr.col.dataSource",
  "common.loadFail",
  "common.totalRows",
  "mep.msg.loadDeptFailed",
  "acr.imp.title",
  "acr.imp.btnRun",
  "common.close",
  "acr.imp.processing",
  "acr.imp.msg.selectDate",
  "acr.imp.result.total",
  "acr.imp.result.imported",
  "acr.imp.result.skipped",
  "acr.imp.result.notFound"
];
var ViewArCardRecordForSelfComponent = class _ViewArCardRecordForSelfComponent {
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
  keyword = "";
  deptNos = [];
  fromDate = null;
  toDate = null;
  pageIndex = 1;
  pageSize = 25;
  impModalVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "impModalVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  impRunning = signal(
    false,
    ...ngDevMode ? [{ debugName: "impRunning" }] : (
      /* istanbul ignore next */
      []
    )
  );
  impResult = signal(
    null,
    ...ngDevMode ? [{ debugName: "impResult" }] : (
      /* istanbul ignore next */
      []
    )
  );
  impFromDate = null;
  impToDate = null;
  /** id -> danh sách id con trực tiếp - dùng để mở rộng lựa chọn cây phòng ban khi tra cứu (xem search()). */
  deptChildrenMap = /* @__PURE__ */ new Map();
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.initDefaultDateRange();
    this.loadDeptTree();
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
  // ==================== Xuất excel (server-side, toàn bộ dữ liệu theo điều kiện lọc - xem docblock class) ====================
  exportExcel() {
    window.location.href = this.api.exportExcelUrl({
      keyword: this.keyword.trim(),
      deptNos: this.expandDeptSelection(this.deptNos).join(","),
      fromDate: this.formatYmd(this.fromDate),
      toDate: this.formatYmd(this.toDate)
    });
  }
  // ==================== Đọc dữ liệu quẹt thẻ từ máy chủ ====================
  openImportModal() {
    this.impFromDate = this.fromDate;
    this.impToDate = this.toDate;
    this.impResult.set(null);
    this.impModalVisible.set(true);
  }
  closeImportModal() {
    this.impModalVisible.set(false);
  }
  runImport() {
    const t = (key, fallback) => this.i18n.t(key, fallback);
    if (!this.impFromDate || !this.impToDate) {
      this.impResult.set({ success: false, message: t("acr.imp.msg.selectDate", "Vui l\xF2ng ch\u1ECDn kho\u1EA3ng th\u1EDDi gian c\u1EA7n \u0111\u1ECDc d\u1EEF li\u1EC7u") });
      return;
    }
    this.impRunning.set(true);
    this.impResult.set(null);
    this.api.importFromDevice(this.formatYmd(this.impFromDate), this.formatYmd(this.impToDate)).subscribe({
      next: (res) => {
        this.impRunning.set(false);
        this.impResult.set(res);
        if (res.success)
          this.loadPage();
      },
      error: () => {
        this.impRunning.set(false);
        this.impResult.set({ success: false, message: "L\u1ED7i k\u1EBFt n\u1ED1i m\xE1y ch\u1EE7, vui l\xF2ng th\u1EED l\u1EA1i." });
      }
    });
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
  static \u0275fac = function ViewArCardRecordForSelfComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewArCardRecordForSelfComponent)(\u0275\u0275directiveInject(ViewArCardRecordForSelfService), \u0275\u0275directiveInject(I18nService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewArCardRecordForSelfComponent, selectors: [["app-view-ar-card-record-for-self"]], decls: 78, vars: 100, consts: [["acrcfsTotalTpl", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", "align-items-end", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["nz-input", "", "name", "keyword", 3, "ngModelChange", "ngModel", "placeholder"], [1, "col-md-2"], ["name", "fromDate", "nzFormat", "yyyy-MM-dd", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "toDate", "nzFormat", "yyyy-MM-dd", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "deptNos", "nzCheckable", "", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["class", "text-danger small mt-1", 4, "ngIf"], [1, "col-12", "d-flex", "align-items-end", "gap-2", "flex-wrap", "justify-content-end"], ["nz-button", "", "nzType", "default", "type", "button", 3, "click"], [1, "bx", "bx-card"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], ["nzShowSizeChanger", "", 1, "table-nowrap", 3, "nzPageIndexChange", "nzPageSizeChange", "nzData", "nzFrontPagination", "nzLoading", "nzTotal", "nzPageIndex", "nzPageSize", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "100px", 1, "text-center"], ["nzWidth", "160px"], ["nzWidth", "180px"], ["nzWidth", "120px", 1, "text-center"], ["nzWidth", "130px", 1, "text-center"], ["nzWidth", "90px", 1, "text-center"], [4, "ngFor", "ngForOf"], ["nzWidth", "480px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [1, "text-danger", "small", "mt-1"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], [1, "text-center"], [1, "acrcfs-form-row-2"], [1, "acrcfs-form-row"], ["name", "impFromDate", "nzFormat", "yyyy-MM-dd", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "impToDate", "nzFormat", "yyyy-MM-dd", 1, "w-100", 3, "ngModelChange", "ngModel"], ["class", "text-center mt-3", 4, "ngIf"], ["class", "mt-3", 4, "ngIf"], [1, "text-center", "mt-3"], ["role", "status", 1, "spinner-border", "text-warning"], [1, "mt-2", "text-muted"], [1, "mt-3"], ["nzShowIcon", "", 3, "nzType", "nzMessage"], ["class", "mt-2 mb-0", 4, "ngIf"], [1, "mt-2", "mb-0"], [1, "text-success"], [1, "text-warning"]], template: function ViewArCardRecordForSelfComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "nz-card", 3)(3, "form", 4);
      \u0275\u0275listener("ngSubmit", function ViewArCardRecordForSelfComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 5)(5, "label", 6);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 7);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewArCardRecordForSelfComponent_Template_input_ngModelChange_8_listener($event) {
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
      \u0275\u0275twoWayListener("ngModelChange", function ViewArCardRecordForSelfComponent_Template_nz_date_picker_ngModelChange_14_listener($event) {
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
      \u0275\u0275twoWayListener("ngModelChange", function ViewArCardRecordForSelfComponent_Template_nz_date_picker_ngModelChange_19_listener($event) {
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
      \u0275\u0275twoWayListener("ngModelChange", function ViewArCardRecordForSelfComponent_Template_nz_tree_select_ngModelChange_24_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.deptNos, $event) || (ctx.deptNos = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275template(26, ViewArCardRecordForSelfComponent_div_26_Template, 2, 1, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 13)(28, "button", 14);
      \u0275\u0275listener("click", function ViewArCardRecordForSelfComponent_Template_button_click_28_listener() {
        return ctx.openImportModal();
      });
      \u0275\u0275element(29, "i", 15);
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "button", 16);
      \u0275\u0275element(33, "i", 17);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "button", 14);
      \u0275\u0275listener("click", function ViewArCardRecordForSelfComponent_Template_button_click_36_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(37, "i", 18);
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(40, "nz-card");
      \u0275\u0275template(41, ViewArCardRecordForSelfComponent_nz_alert_41_Template, 1, 1, "nz-alert", 19);
      \u0275\u0275elementStart(42, "nz-table", 20);
      \u0275\u0275listener("nzPageIndexChange", function ViewArCardRecordForSelfComponent_Template_nz_table_nzPageIndexChange_42_listener($event) {
        return ctx.onPageIndexChange($event);
      })("nzPageSizeChange", function ViewArCardRecordForSelfComponent_Template_nz_table_nzPageSizeChange_42_listener($event) {
        return ctx.onPageSizeChange($event);
      });
      \u0275\u0275elementStart(43, "thead")(44, "tr")(45, "th", 21);
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "th", 22);
      \u0275\u0275text(49);
      \u0275\u0275pipe(50, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "th", 23);
      \u0275\u0275text(52);
      \u0275\u0275pipe(53, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "th", 24);
      \u0275\u0275text(55);
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "th", 25);
      \u0275\u0275text(58);
      \u0275\u0275pipe(59, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "th", 26);
      \u0275\u0275text(61);
      \u0275\u0275pipe(62, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "th", 27);
      \u0275\u0275text(64);
      \u0275\u0275pipe(65, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "th", 25);
      \u0275\u0275text(67);
      \u0275\u0275pipe(68, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(69, "tbody");
      \u0275\u0275template(70, ViewArCardRecordForSelfComponent_tr_70_Template, 17, 11, "tr", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275template(71, ViewArCardRecordForSelfComponent_ng_template_71_Template, 2, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(73, "nz-modal", 29);
      \u0275\u0275pipe(74, "translate");
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275pipe(76, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewArCardRecordForSelfComponent_Template_nz_modal_nzOnCancel_73_listener() {
        return ctx.closeImportModal();
      })("nzOnOk", function ViewArCardRecordForSelfComponent_Template_nz_modal_nzOnOk_73_listener() {
        return ctx.runImport();
      });
      \u0275\u0275template(77, ViewArCardRecordForSelfComponent_ng_container_77_Template, 14, 12, "ng-container", 30);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const acrcfsTotalTpl_r8 = \u0275\u0275reference(72);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 39, "common.search.empIdOrName", "M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.keyword);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 42, "common.placeholder.enterEmpId", "Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 45, "common.fromDate", "T\u1EEB ng\xE0y"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.fromDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 48, "common.toDate", "\u0110\u1EBFn ng\xE0y"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.toDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 51, "common.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzNodes", ctx.deptNodes());
      \u0275\u0275twoWayProperty("ngModel", ctx.deptNos);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(25, 54, "common.select", "Ch\u1ECDn ph\xF2ng ban"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.deptTreeErrorMessage());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(31, 57, "acr.btn.importFromDevice", "\u0110\u1ECDc d\u1EEF li\u1EC7u qu\u1EB9t th\u1EBB"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(35, 60, "common.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(39, 63, "common.exportExcel", "Xu\u1EA5t Excel"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzFrontPagination", false)("nzLoading", ctx.loading())("nzTotal", ctx.recordsTotal())("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", acrcfsTotalTpl_r8)("nzScroll", \u0275\u0275pureFunction0(99, _c0));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(47, 66, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 69, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(53, 72, "common.empName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(56, 75, "common.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(59, 78, "acr.col.swipeDate", "Ng\xE0y qu\u1EB9t th\u1EBB"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(62, 81, "acr.col.swipeTime", "Th\u1EDDi gian qu\u1EB9t th\u1EBB"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(65, 84, "acr.col.doorType", "Lo\u1EA1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(68, 87, "acr.col.dataSource", "Ngu\u1ED3n d\u1EEF li\u1EC7u"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.rows());
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.impModalVisible())("nzTitle", \u0275\u0275pipeBind2(74, 90, "acr.imp.title", "\u0110\u1ECDc d\u1EEF li\u1EC7u qu\u1EB9t th\u1EBB t\u1EEB m\xE1y ch\u1EE7"))("nzOkLoading", ctx.impRunning())("nzOkText", \u0275\u0275pipeBind2(75, 93, "acr.imp.btnRun", "Th\u1EF1c hi\u1EC7n"))("nzCancelText", \u0275\u0275pipeBind2(76, 96, "common.close", "\u0110\xF3ng"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzDatePickerModule, NzDatePickerComponent, NzTreeSelectModule, NzTreeSelectComponent, NzAlertModule, NzAlertComponent, NzModalModule, NzModalComponent, NzModalContentDirective, TranslatePipe], styles: ["\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.acrcfs-form-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 12px;\n}\n.acrcfs-form-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: .82rem;\n  font-weight: 600;\n  color: #334155;\n}\n.acrcfs-form-row-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n/*# sourceMappingURL=view-ar-card-record-for-self.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewArCardRecordForSelfComponent, [{
    type: Component,
    args: [{ selector: "app-view-ar-card-record-for-self", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzButtonModule,
      NzDatePickerModule,
      NzTreeSelectModule,
      NzAlertModule,
      NzModalModule,
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
        <div class="col-12 d-flex align-items-end gap-2 flex-wrap justify-content-end">
          <button nz-button nzType="default" type="button" (click)="openImportModal()">
            <i class="bx bx-card"></i> {{ 'acr.btn.importFromDevice' | translate:'\u0110\u1ECDc d\u1EEF li\u1EC7u qu\u1EB9t th\u1EBB' }}
          </button>
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'common.search' | translate:'Tra c\u1EE9u' }}
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
                [nzPageSizeOptions]="pageSizeOptions" nzShowSizeChanger [nzShowTotal]="acrcfsTotalTpl"
                (nzPageIndexChange)="onPageIndexChange($event)" (nzPageSizeChange)="onPageSizeChange($event)"
                [nzScroll]="{ x: '1100px', y: 'calc(100vh - 380px)' }"
                class="table-nowrap">
        <!-- nzWidth khai b\xE1o cho t\u1EEBng c\u1ED9t \u0111\u1EC3 \u0111\u1ED3ng b\u1ED9 \u0111\u1ED9 r\u1ED9ng header/body khi d\xF9ng nzScroll (xem
             gi\u1EA3i th\xEDch \u1EDF dept-ot-apply-info.component.html). -->
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
            <th nzWidth="160px">{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
            <th nzWidth="180px">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
            <th class="text-center" nzWidth="120px">{{ 'acr.col.swipeDate' | translate:'Ng\xE0y qu\u1EB9t th\u1EBB' }}</th>
            <th class="text-center" nzWidth="130px">{{ 'acr.col.swipeTime' | translate:'Th\u1EDDi gian qu\u1EB9t th\u1EBB' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'acr.col.doorType' | translate:'Lo\u1EA1i' }}</th>
            <th class="text-center" nzWidth="120px">{{ 'acr.col.dataSource' | translate:'Ngu\u1ED3n d\u1EEF li\u1EC7u' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of rows(); let i = index">
            <td class="text-center">{{ (pageIndex - 1) * pageSize + i + 1 }}</td>
            <td class="text-center" [attr.title]="row.empId || null">{{ row.empId }}</td>
            <td [attr.title]="row.localName || null">{{ row.localName }}</td>
            <td [attr.title]="row.deptName || null">{{ row.deptName }}</td>
            <td class="text-center">{{ row.swipeDate }}</td>
            <td class="text-center">{{ row.swipeTime }}</td>
            <td class="text-center">{{ row.doorType }}</td>
            <td class="text-center">{{ row.dataSourceName }}</td>
          </tr>
        </tbody>
        <ng-template #acrcfsTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- ===== Modal \u0110\u1ECDc d\u1EEF li\u1EC7u qu\u1EB9t th\u1EBB t\u1EEB m\xE1y ch\u1EE7 ===== -->
<nz-modal [nzVisible]="impModalVisible()" [nzTitle]="'acr.imp.title' | translate:'\u0110\u1ECDc d\u1EEF li\u1EC7u qu\u1EB9t th\u1EBB t\u1EEB m\xE1y ch\u1EE7'"
          nzWidth="480px" (nzOnCancel)="closeImportModal()" [nzOkLoading]="impRunning()"
          [nzOkText]="'acr.imp.btnRun' | translate:'Th\u1EF1c hi\u1EC7n'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'"
          (nzOnOk)="runImport()">
  <ng-container *nzModalContent>
    <div class="acrcfs-form-row-2">
      <div class="acrcfs-form-row">
        <label>{{ 'common.fromDate' | translate:'T\u1EEB ng\xE0y' }}</label>
        <nz-date-picker class="w-100" [(ngModel)]="impFromDate" name="impFromDate" nzFormat="yyyy-MM-dd"></nz-date-picker>
      </div>
      <div class="acrcfs-form-row">
        <label>{{ 'common.toDate' | translate:'\u0110\u1EBFn ng\xE0y' }}</label>
        <nz-date-picker class="w-100" [(ngModel)]="impToDate" name="impToDate" nzFormat="yyyy-MM-dd"></nz-date-picker>
      </div>
    </div>

    <div *ngIf="impRunning()" class="text-center mt-3">
      <div class="spinner-border text-warning" role="status"></div>
      <div class="mt-2 text-muted">{{ 'acr.imp.processing' | translate:'\u0110ang k\u1EBFt n\u1ED1i v\xE0 \u0111\u1ECDc d\u1EEF li\u1EC7u...' }}</div>
    </div>

    <div *ngIf="!impRunning() && impResult() as res" class="mt-3">
      <hr>
      <nz-alert [nzType]="res.success ? 'success' : 'error'" [nzMessage]="res.message || ''" nzShowIcon></nz-alert>
      <ul *ngIf="res.success" class="mt-2 mb-0">
        <li>{{ 'acr.imp.result.total' | translate:'T\u1ED5ng b\u1EA3n ghi t\u1EEB m\xE1y ch\u1EE7' }}: <strong>{{ res.total || 0 }}</strong></li>
        <li>{{ 'acr.imp.result.imported' | translate:'\u0110\xE3 l\u01B0u m\u1EDBi' }}: <strong class="text-success">{{ res.imported || 0 }}</strong></li>
        <li>{{ 'acr.imp.result.skipped' | translate:'B\u1ECF qua (tr\xF9ng)' }}: <strong>{{ res.skipped || 0 }}</strong></li>
        <li>{{ 'acr.imp.result.notFound' | translate:'Kh\xF4ng t\xECm th\u1EA5y nh\xE2n vi\xEAn' }}: <strong class="text-warning">{{ res.notFound || 0 }}</strong></li>
      </ul>
    </div>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-ar-card-record-for-self/view-ar-card-record-for-self.component.css */\ntable td,\ntable th {\n  white-space: nowrap;\n}\ntable td {\n  vertical-align: middle;\n}\n.acrcfs-form-row {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 12px;\n}\n.acrcfs-form-row label {\n  font-size: .82rem;\n  font-weight: 600;\n  color: #334155;\n}\n.acrcfs-form-row-2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n/*# sourceMappingURL=view-ar-card-record-for-self.component.css.map */\n"] }]
  }], () => [{ type: ViewArCardRecordForSelfService }, { type: I18nService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewArCardRecordForSelfComponent, { className: "ViewArCardRecordForSelfComponent", filePath: "src/app/view-ar-card-record-for-self/view-ar-card-record-for-self.component.ts", lineNumber: 62 });
})();
export {
  ViewArCardRecordForSelfComponent
};
//# debugId=2c28cfe1-662b-5b49-b050-57ab1e00732a
//# sourceMappingURL=chunk-YAP2WJLV.js.map
