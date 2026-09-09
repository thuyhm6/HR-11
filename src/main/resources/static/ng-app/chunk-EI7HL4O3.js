import {
  NzInputNumberComponent,
  NzInputNumberModule
} from "./chunk-IXCMIWQQ.js";
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

// src/app/person-ot-apply-info-list/person-ot-apply-info-list.service.ts
var API_BASE = "/ess/infoApply/api/personOt";
var PersonOtApplyInfoListService = class _PersonOtApplyInfoListService {
  constructor(http) {
    this.http = http;
  }
  http;
  getBasicInfo() {
    return this.http.get("/ess/empinfo/api/personalInfo/myInfo", { withCredentials: true });
  }
  getItemList() {
    return this.http.get(`${API_BASE}/items`, { withCredentials: true });
  }
  getList(params) {
    let httpParams = new HttpParams();
    if (params.startDate)
      httpParams = httpParams.set("startDate", params.startDate);
    if (params.endDate)
      httpParams = httpParams.set("endDate", params.endDate);
    if (params.itemNoSearch)
      httpParams = httpParams.set("itemNoSearch", params.itemNoSearch);
    if (params.minQuantity)
      httpParams = httpParams.set("minQuantity", params.minQuantity);
    return this.http.get(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
  }
  static \u0275fac = function PersonOtApplyInfoListService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PersonOtApplyInfoListService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PersonOtApplyInfoListService, factory: _PersonOtApplyInfoListService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersonOtApplyInfoListService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/person-ot-apply-info-list/person-ot-apply-info-list.component.ts
var _c0 = () => [25, 50, 100, 200];
var _c1 = () => ({ x: "1400px" });
function PersonOtApplyInfoListComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 34)(2, "table", 35)(3, "colgroup");
    \u0275\u0275element(4, "col", 36)(5, "col", 37)(6, "col", 36)(7, "col", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "tbody")(9, "tr")(10, "th", 38);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 38);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "tr")(21, "th", 38);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 38);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "tr")(32, "th", 38);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "td");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th", 38);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "td");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "tr")(43, "th", 38);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "td");
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th", 38);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "td");
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const info_r2 = ctx.ngIf;
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 16, "essEmpCard.localName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 19, "essEmpCard.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.empId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 22, "essEmpCard.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.deptName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 25, "essEmpCard.headDept", "Tr\u01B0\u1EDFng ph\xF2ng"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.headDepartment);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 28, "essEmpCard.postFamily", "Nh\xF3m nh\xE2n vi\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.postFamilyName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 31, "essEmpCard.postGrade", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.postGradeName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 34, "essEmpCard.positionName", "Ch\u1EE9c danh"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.positionNoName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 37, "essEmpCard.dateStarted", "Ng\xE0y v\xE0o l\xE0m"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.dateStarted);
  }
}
function PersonOtApplyInfoListComponent_nz_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 39);
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r3.itemNo)("nzLabel", c_r3.itemName || c_r3.itemNo);
  }
}
function PersonOtApplyInfoListComponent_nz_alert_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 40);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r3.errorMessage() ?? "");
  }
}
function PersonOtApplyInfoListComponent_tr_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 41);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
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
    \u0275\u0275elementStart(17, "td", 41);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 41);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 41);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r6 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.arDateStr);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.dayOfWeek(row_r5.arDateStr));
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.itemName || row_r5.itemNo || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.itemName || row_r5.itemNo);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.shiftName || row_r5.shiftNo || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.shiftName || row_r5.shiftNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.workTime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.indoorTime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.outdoorTime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.otStartTime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.otEndTime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.workHour);
  }
}
function PersonOtApplyInfoListComponent_ng_template_79_Template(rf, ctx) {
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
  "essEmpCard.localName",
  "essEmpCard.empId",
  "essEmpCard.deptName",
  "essEmpCard.headDept",
  "essEmpCard.postFamily",
  "essEmpCard.postGrade",
  "essEmpCard.positionName",
  "essEmpCard.dateStarted",
  "poai.field.otCategory",
  "poai.opt.all",
  "poai.field.durationGte",
  "poai.field.dateRange",
  "poai.btn.search",
  "poai.label.quickFilter",
  "poai.col.dayOfWeek",
  "poai.col.ot",
  "poai.col.workTime",
  "poai.col.checkIn",
  "poai.col.checkOut",
  "poai.col.otStartTime",
  "poai.col.otEndTime",
  "poai.col.otDuration",
  "poai.msg.loadError",
  "poai.weekdays",
  "common.no.serial",
  "common.date",
  "common.shift",
  "common.totalRows"
];
var DEFAULT_WEEKDAYS = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
var PersonOtApplyInfoListComponent = class _PersonOtApplyInfoListComponent {
  constructor(api, i18n) {
    this.api = api;
    this.i18n = i18n;
  }
  api;
  i18n;
  basicInfo = signal(
    null,
    ...ngDevMode ? [{ debugName: "basicInfo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  itemOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "itemOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
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
  quickFilterKeyword = "";
  filteredRows = computed(
    () => {
      const kw = this.quickFilterKeyword.trim().toLowerCase();
      const rows = this.rows();
      if (!kw)
        return rows;
      return rows.filter((r) => [r.arDateStr, r.itemName, r.shiftName, r.workTime, r.otStartTime, r.otEndTime, r.workHour].some((v) => v && String(v).toLowerCase().includes(kw)));
    },
    ...ngDevMode ? [{ debugName: "filteredRows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  itemNoSearch = null;
  minQuantity = null;
  startDate = null;
  endDate = null;
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadBasicInfo();
    this.api.getItemList().subscribe((list) => this.itemOptions.set(list ?? []));
    this.initDefaultDateRange();
    this.search();
  }
  search() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getList({
      startDate: this.formatDmy(this.startDate),
      endDate: this.formatDmy(this.endDate),
      itemNoSearch: this.itemNoSearch ?? "",
      minQuantity: this.minQuantity != null ? String(this.minQuantity) : ""
    }).subscribe({
      next: (rows) => {
        this.rows.set(rows ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("poai.msg.loadError", "L\u1ED7i t\u1EA3i d\u1EEF li\u1EC7u"));
        this.rows.set([]);
        this.loading.set(false);
      }
    });
  }
  /** Tính thứ từ arDateStr - đúng poaiDayOfWeek() bản gốc (tách theo '/', year/month/day). */
  dayOfWeek(arDateStr) {
    if (!arDateStr)
      return "";
    const p = arDateStr.split("/");
    if (p.length !== 3)
      return "";
    const d = new Date(+p[0], +p[1] - 1, +p[2]);
    if (isNaN(d.getTime()))
      return "";
    const weekdays = this.i18n.t("poai.weekdays", DEFAULT_WEEKDAYS.join(",")).split(",");
    return weekdays[d.getDay()] ?? DEFAULT_WEEKDAYS[d.getDay()];
  }
  /** Mặc định từ ngày 01 đến ngày cuối tháng hiện tại - giữ đúng hành vi poaiGetDefaultDateRange() bản gốc. */
  initDefaultDateRange() {
    const now = /* @__PURE__ */ new Date();
    this.startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    this.endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  }
  loadBasicInfo() {
    this.api.getBasicInfo().subscribe({
      next: (data) => this.basicInfo.set(data)
    });
  }
  formatDmy(d) {
    return d ? formatDate(d, "dd/MM/yyyy", "vi") : "";
  }
  static \u0275fac = function PersonOtApplyInfoListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PersonOtApplyInfoListComponent)(\u0275\u0275directiveInject(PersonOtApplyInfoListService), \u0275\u0275directiveInject(I18nService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PersonOtApplyInfoListComponent, selectors: [["app-person-ot-apply-info-list"]], decls: 81, vars: 88, consts: [["poaiTable", ""], ["poaiTotalTpl", ""], [1, "row"], [1, "col-12"], ["class", "card mb-3", 4, "ngIf"], [1, "card", "mb-3"], [1, "card-body"], [1, "row", "gy-3", 3, "ngSubmit"], [1, "col-md-4"], [1, "border", "rounded", "p-2", "h-100"], [1, "small", "text-muted", "mb-2"], ["name", "itemNoSearch", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["name", "minQuantity", "nzPlaceHolder", "0", 2, "max-width", "140px", 3, "ngModelChange", "ngModel", "nzMin", "nzStep"], [1, "d-flex", "flex-wrap", "align-items-center", "gap-2"], ["name", "startDate", "nzFormat", "dd/MM/yyyy", 2, "width", "130px", 3, "ngModelChange", "ngModel"], ["name", "endDate", "nzFormat", "dd/MM/yyyy", 2, "width", "130px", 3, "ngModelChange", "ngModel"], ["nz-button", "", "nzType", "primary", "nzSize", "small", "type", "submit"], [1, "bi", "bi-search"], [1, "d-flex", "align-items-center", "gap-2", "mb-2"], [1, "small"], ["nz-input", "", 2, "max-width", "200px", 3, "ngModelChange", "ngModel"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [1, "table-nowrap", 3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "50px", 1, "text-center"], ["nzWidth", "100px", 1, "text-center"], ["nzWidth", "55px", 1, "text-center"], ["nzWidth", "140px"], ["nzWidth", "120px"], ["nzWidth", "140px", 1, "text-center"], ["nzWidth", "65px", 1, "text-center"], ["nzWidth", "170px", 1, "text-center"], ["nzWidth", "120px", 1, "text-center"], [4, "ngFor", "ngForOf"], [1, "card-body", "p-0"], [1, "table", "table-bordered", "table-sm", "align-middle", "mb-0", 2, "table-layout", "fixed"], [2, "width", "15%"], [2, "width", "35%"], [1, "table-light", "text-center"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], [1, "text-center"]], template: function PersonOtApplyInfoListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
      \u0275\u0275template(2, PersonOtApplyInfoListComponent_div_2_Template, 53, 40, "div", 4);
      \u0275\u0275elementStart(3, "div", 5)(4, "div", 6)(5, "form", 7);
      \u0275\u0275listener("ngSubmit", function PersonOtApplyInfoListComponent_Template_form_ngSubmit_5_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(6, "div", 8)(7, "div", 9)(8, "div", 10);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "nz-select", 11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function PersonOtApplyInfoListComponent_Template_nz_select_ngModelChange_11_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.itemNoSearch, $event) || (ctx.itemNoSearch = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(13, PersonOtApplyInfoListComponent_nz_option_13_Template, 1, 2, "nz-option", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 8)(15, "div", 9)(16, "div", 10);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "nz-input-number", 13);
      \u0275\u0275twoWayListener("ngModelChange", function PersonOtApplyInfoListComponent_Template_nz_input_number_ngModelChange_19_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.minQuantity, $event) || (ctx.minQuantity = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 8)(21, "div", 9)(22, "div", 10);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 14)(26, "nz-date-picker", 15);
      \u0275\u0275twoWayListener("ngModelChange", function PersonOtApplyInfoListComponent_Template_nz_date_picker_ngModelChange_26_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.startDate, $event) || (ctx.startDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(27, "span");
      \u0275\u0275text(28, "~");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "nz-date-picker", 16);
      \u0275\u0275twoWayListener("ngModelChange", function PersonOtApplyInfoListComponent_Template_nz_date_picker_ngModelChange_29_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.endDate, $event) || (ctx.endDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(30, "button", 17);
      \u0275\u0275element(31, "i", 18);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(34, "div", 19)(35, "span", 20);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "input", 21);
      \u0275\u0275twoWayListener("ngModelChange", function PersonOtApplyInfoListComponent_Template_input_ngModelChange_38_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.quickFilterKeyword, $event) || (ctx.quickFilterKeyword = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275template(39, PersonOtApplyInfoListComponent_nz_alert_39_Template, 1, 1, "nz-alert", 22);
      \u0275\u0275elementStart(40, "nz-table", 23, 0)(42, "thead")(43, "tr")(44, "th", 24);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "th", 25);
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "th", 26);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "th", 27);
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "th", 28);
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "th", 29);
      \u0275\u0275text(60);
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "th", 30);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "th", 30);
      \u0275\u0275text(66);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "th", 31);
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "th", 31);
      \u0275\u0275text(72);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "th", 32);
      \u0275\u0275text(75);
      \u0275\u0275pipe(76, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "tbody");
      \u0275\u0275template(78, PersonOtApplyInfoListComponent_tr_78_Template, 23, 13, "tr", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275template(79, PersonOtApplyInfoListComponent_ng_template_79_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      const poaiTable_r8 = \u0275\u0275reference(41);
      const poaiTotalTpl_r9 = \u0275\u0275reference(80);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.basicInfo());
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 35, "poai.field.otCategory", "Ph\xE2n lo\u1EA1i t\u0103ng ca"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.itemNoSearch);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(12, 38, "poai.opt.all", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.itemOptions());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 41, "poai.field.durationGte", "Th\u1EDDi l\u01B0\u1EE3ng (>=)"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.minQuantity);
      \u0275\u0275property("nzMin", 0)("nzStep", 0.5);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 44, "poai.field.dateRange", "Th\u1EDDi gian"));
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.startDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.endDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(33, 47, "poai.btn.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 50, "poai.label.quickFilter", "L\u1ECDc nhanh"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.quickFilterKeyword);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.filteredRows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", \u0275\u0275pureFunction0(86, _c0))("nzShowTotal", poaiTotalTpl_r9)("nzScroll", \u0275\u0275pureFunction0(87, _c1));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 53, "common.no.serial", "NO"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 56, "common.date", "Ng\xE0y"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(52, 59, "poai.col.dayOfWeek", "Th\u1EE9"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(55, 62, "poai.col.ot", "T\u0103ng ca"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(58, 65, "common.shift", "Ca"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(61, 68, "poai.col.workTime", "Th\u1EDDi gian l\xE0m vi\u1EC7c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(64, 71, "poai.col.checkIn", "V\xE0o"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(67, 74, "poai.col.checkOut", "Ra"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(70, 77, "poai.col.otStartTime", "Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u t\u0103ng ca"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(73, 80, "poai.col.otEndTime", "Th\u1EDDi gian k\u1EBFt th\xFAc"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(76, 83, "poai.col.otDuration", "Th\u1EDDi l\u01B0\u1EE3ng t\u0103ng ca"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", poaiTable_r8.data);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzInputModule, NzInputDirective, NzInputNumberModule, NzInputNumberComponent, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzDatePickerModule, NzDatePickerComponent, NzAlertModule, NzAlertComponent, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersonOtApplyInfoListComponent, [{
    type: Component,
    args: [{ selector: "app-person-ot-apply-info-list", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzInputModule,
      NzInputNumberModule,
      NzSelectModule,
      NzButtonModule,
      NzDatePickerModule,
      NzAlertModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">

    <!-- ===== Th\xF4ng tin nh\xE2n vi\xEAn (t\u01B0\u01A1ng \u0111\u01B0\u01A1ng fragments/essEmpInfoCard.html) ===== -->
    <div class="card mb-3" *ngIf="basicInfo() as info">
      <div class="card-body p-0">
        <table class="table table-bordered table-sm align-middle mb-0" style="table-layout:fixed;">
          <colgroup>
            <col style="width:15%;"><col style="width:35%;"><col style="width:15%;"><col style="width:35%;">
          </colgroup>
          <tbody>
            <tr>
              <th class="table-light text-center">{{ 'essEmpCard.localName' | translate:'H\u1ECD t\xEAn' }}</th>
              <td>{{ info.localName }}</td>
              <th class="table-light text-center">{{ 'essEmpCard.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
              <td>{{ info.empId }}</td>
            </tr>
            <tr>
              <th class="table-light text-center">{{ 'essEmpCard.deptName' | translate:'Ph\xF2ng ban' }}</th>
              <td>{{ info.deptName }}</td>
              <th class="table-light text-center">{{ 'essEmpCard.headDept' | translate:'Tr\u01B0\u1EDFng ph\xF2ng' }}</th>
              <td>{{ info.headDepartment }}</td>
            </tr>
            <tr>
              <th class="table-light text-center">{{ 'essEmpCard.postFamily' | translate:'Nh\xF3m nh\xE2n vi\xEAn' }}</th>
              <td>{{ info.postFamilyName }}</td>
              <th class="table-light text-center">{{ 'essEmpCard.postGrade' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
              <td>{{ info.postGradeName }}</td>
            </tr>
            <tr>
              <th class="table-light text-center">{{ 'essEmpCard.positionName' | translate:'Ch\u1EE9c danh' }}</th>
              <td>{{ info.positionNoName }}</td>
              <th class="table-light text-center">{{ 'essEmpCard.dateStarted' | translate:'Ng\xE0y v\xE0o l\xE0m' }}</th>
              <td>{{ info.dateStarted }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- ===== \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm ===== -->
    <div class="card mb-3">
      <div class="card-body">
        <form class="row gy-3" (ngSubmit)="search()">
          <div class="col-md-4">
            <div class="border rounded p-2 h-100">
              <div class="small text-muted mb-2">{{ 'poai.field.otCategory' | translate:'Ph\xE2n lo\u1EA1i t\u0103ng ca' }}</div>
              <nz-select class="w-100" [(ngModel)]="itemNoSearch" name="itemNoSearch" nzAllowClear
                         [nzPlaceHolder]="'poai.opt.all' | translate:'-- T\u1EA5t c\u1EA3 --'">
                <nz-option *ngFor="let c of itemOptions()" [nzValue]="c.itemNo" [nzLabel]="c.itemName || c.itemNo"></nz-option>
              </nz-select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="border rounded p-2 h-100">
              <div class="small text-muted mb-2">{{ 'poai.field.durationGte' | translate:'Th\u1EDDi l\u01B0\u1EE3ng (>=)' }}</div>
              <nz-input-number style="max-width:140px;" [(ngModel)]="minQuantity" name="minQuantity"
                                [nzMin]="0" [nzStep]="0.5" nzPlaceHolder="0"></nz-input-number>
            </div>
          </div>
          <div class="col-md-4">
            <div class="border rounded p-2 h-100">
              <div class="small text-muted mb-2">{{ 'poai.field.dateRange' | translate:'Th\u1EDDi gian' }}</div>
              <div class="d-flex flex-wrap align-items-center gap-2">
                <nz-date-picker style="width:130px;" [(ngModel)]="startDate" name="startDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
                <span>~</span>
                <nz-date-picker style="width:130px;" [(ngModel)]="endDate" name="endDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
                <button nz-button nzType="primary" nzSize="small" type="submit">
                  <i class="bi bi-search"></i> {{ 'poai.btn.search' | translate:'Tra c\u1EE9u' }}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

    <!-- ===== Toolbar l\u1ECDc nhanh ===== -->
    <div class="d-flex align-items-center gap-2 mb-2">
      <span class="small">{{ 'poai.label.quickFilter' | translate:'L\u1ECDc nhanh' }}</span>
      <input nz-input style="max-width:200px;" [(ngModel)]="quickFilterKeyword">
    </div>

    <!-- ===== B\u1EA3ng danh s\xE1ch ===== -->
    <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

    <nz-table [nzData]="filteredRows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
              [nzPageSizeOptions]="[25, 50, 100, 200]" [nzShowTotal]="poaiTotalTpl"
              [nzScroll]="{ x: '1400px' }" class="table-nowrap" #poaiTable>
      <thead>
        <tr>
          <th class="text-center" nzWidth="50px">{{ 'common.no.serial' | translate:'NO' }}</th>
          <th class="text-center" nzWidth="100px">{{ 'common.date' | translate:'Ng\xE0y' }}</th>
          <th class="text-center" nzWidth="55px">{{ 'poai.col.dayOfWeek' | translate:'Th\u1EE9' }}</th>
          <th nzWidth="140px">{{ 'poai.col.ot' | translate:'T\u0103ng ca' }}</th>
          <th nzWidth="120px">{{ 'common.shift' | translate:'Ca' }}</th>
          <th class="text-center" nzWidth="140px">{{ 'poai.col.workTime' | translate:'Th\u1EDDi gian l\xE0m vi\u1EC7c' }}</th>
          <th class="text-center" nzWidth="65px">{{ 'poai.col.checkIn' | translate:'V\xE0o' }}</th>
          <th class="text-center" nzWidth="65px">{{ 'poai.col.checkOut' | translate:'Ra' }}</th>
          <th class="text-center" nzWidth="170px">{{ 'poai.col.otStartTime' | translate:'Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u t\u0103ng ca' }}</th>
          <th class="text-center" nzWidth="170px">{{ 'poai.col.otEndTime' | translate:'Th\u1EDDi gian k\u1EBFt th\xFAc' }}</th>
          <th class="text-center" nzWidth="120px">{{ 'poai.col.otDuration' | translate:'Th\u1EDDi l\u01B0\u1EE3ng t\u0103ng ca' }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of poaiTable.data; let i = index">
          <td class="text-center">{{ i + 1 }}</td>
          <td class="text-center">{{ row.arDateStr }}</td>
          <td class="text-center">{{ dayOfWeek(row.arDateStr) }}</td>
          <td [attr.title]="row.itemName || row.itemNo || null">{{ row.itemName || row.itemNo }}</td>
          <td [attr.title]="row.shiftName || row.shiftNo || null">{{ row.shiftName || row.shiftNo }}</td>
          <td class="text-center">{{ row.workTime }}</td>
          <td class="text-center">{{ row.indoorTime }}</td>
          <td class="text-center">{{ row.outdoorTime }}</td>
          <td class="text-center">{{ row.otStartTime }}</td>
          <td class="text-center">{{ row.otEndTime }}</td>
          <td class="text-center">{{ row.workHour }}</td>
        </tr>
      </tbody>
      <ng-template #poaiTotalTpl let-total>
        {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
      </ng-template>
    </nz-table>

  </div>
</div>
` }]
  }], () => [{ type: PersonOtApplyInfoListService }, { type: I18nService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PersonOtApplyInfoListComponent, { className: "PersonOtApplyInfoListComponent", filePath: "src/app/person-ot-apply-info-list/person-ot-apply-info-list.component.ts", lineNumber: 61 });
})();
export {
  PersonOtApplyInfoListComponent
};
//# debugId=e1d2a0b7-b242-53d7-8c18-c7d90a4b8184
//# sourceMappingURL=chunk-EI7HL4O3.js.map
