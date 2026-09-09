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

// src/app/attendance-personal-info-list/attendance-personal-info-list.service.ts
var API_BASE = "/ess/infoApplyAttendance/api/attendancePersonal";
var AttendancePersonalInfoListService = class _AttendancePersonalInfoListService {
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
    return this.http.get(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
  }
  static \u0275fac = function AttendancePersonalInfoListService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AttendancePersonalInfoListService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AttendancePersonalInfoListService, factory: _AttendancePersonalInfoListService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttendancePersonalInfoListService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/attendance-personal-info-list/attendance-personal-info-list.component.ts
var _c0 = () => [25, 50, 100, 200];
var _c1 = () => ({ x: "1200px" });
function AttendancePersonalInfoListComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 29)(2, "table", 30)(3, "colgroup");
    \u0275\u0275element(4, "col", 31)(5, "col", 32)(6, "col", 31)(7, "col", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "tbody")(9, "tr")(10, "th", 33);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 33);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "tr")(21, "th", 33);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 33);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "tr")(32, "th", 33);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "td");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th", 33);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "td");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "tr")(43, "th", 33);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "td");
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th", 33);
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
function AttendancePersonalInfoListComponent_nz_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 34);
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r3.itemNo)("nzLabel", c_r3.itemName || c_r3.itemNo);
  }
}
function AttendancePersonalInfoListComponent_nz_alert_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 35);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r3.errorMessage() ?? "");
  }
}
function AttendancePersonalInfoListComponent_tr_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 36);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 36);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 36);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 36);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 36);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r6 + 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.localName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.empId);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.deptName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.deptName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.itemName || row_r5.itemNo || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.itemName || row_r5.itemNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.workHour);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.arDateStr);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.indoorTime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.outdoorTime);
  }
}
function AttendancePersonalInfoListComponent_ng_template_64_Template(rf, ctx) {
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
  "atpi.label.category",
  "atpi.select.allOption",
  "atpi.label.time",
  "atpi.btn.search",
  "atpi.placeholder.quickFilter",
  "atpi.col.fullName",
  "atpi.col.empId",
  "atpi.col.deptName",
  "atpi.col.category",
  "atpi.col.duration",
  "atpi.col.time",
  "atpi.col.startTime",
  "atpi.col.endTime",
  "atpi.js.loadError",
  "common.stt",
  "common.totalRows"
];
var AttendancePersonalInfoListComponent = class _AttendancePersonalInfoListComponent {
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
      return rows.filter((r) => [r.localName, r.empId, r.deptName, r.itemName, r.arDateStr, r.indoorTime, r.outdoorTime].some((v) => v && String(v).toLowerCase().includes(kw)));
    },
    ...ngDevMode ? [{ debugName: "filteredRows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  itemNoSearch = null;
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
      itemNoSearch: this.itemNoSearch ?? ""
    }).subscribe({
      next: (rows) => {
        this.rows.set(rows ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("atpi.js.loadError", "L\u1ED7i t\u1EA3i d\u1EEF li\u1EC7u"));
        this.rows.set([]);
        this.loading.set(false);
      }
    });
  }
  /** Mặc định từ ngày 01 đến ngày cuối tháng hiện tại - giữ đúng hành vi atpiGetDefaultDateRange() bản gốc. */
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
  static \u0275fac = function AttendancePersonalInfoListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AttendancePersonalInfoListComponent)(\u0275\u0275directiveInject(AttendancePersonalInfoListService), \u0275\u0275directiveInject(I18nService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AttendancePersonalInfoListComponent, selectors: [["app-attendance-personal-info-list"]], decls: 66, vars: 73, consts: [["atpiTable", ""], ["atpiTotalTpl", ""], [1, "row"], [1, "col-12"], ["class", "card mb-3", 4, "ngIf"], [1, "card", "mb-3"], [1, "card-body"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["name", "itemNoSearch", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "d-flex", "align-items-center", "gap-2"], ["name", "startDate", "nzFormat", "dd/MM/yyyy", 2, "width", "150px", 3, "ngModelChange", "ngModel"], ["name", "endDate", "nzFormat", "dd/MM/yyyy", 2, "width", "150px", 3, "ngModelChange", "ngModel"], [1, "col-md-2", "d-flex", "align-items-end"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], [1, "d-flex", "align-items-center", "gap-2", "mb-2"], ["nz-input", "", 2, "max-width", "220px", 3, "ngModelChange", "ngModel", "placeholder"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [1, "table-nowrap", 3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "50px", 1, "text-center"], ["nzWidth", "150px"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "100px", 1, "text-center"], ["nzWidth", "130px", 1, "text-center"], [4, "ngFor", "ngForOf"], [1, "card-body", "p-0"], [1, "table", "table-bordered", "table-sm", "align-middle", "mb-0", 2, "table-layout", "fixed"], [2, "width", "15%"], [2, "width", "35%"], [1, "table-light", "text-center"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], [1, "text-center"]], template: function AttendancePersonalInfoListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
      \u0275\u0275template(2, AttendancePersonalInfoListComponent_div_2_Template, 53, 40, "div", 4);
      \u0275\u0275elementStart(3, "div", 5)(4, "div", 6)(5, "form", 7);
      \u0275\u0275listener("ngSubmit", function AttendancePersonalInfoListComponent_Template_form_ngSubmit_5_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(6, "div", 8)(7, "label", 9);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "nz-select", 10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function AttendancePersonalInfoListComponent_Template_nz_select_ngModelChange_10_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.itemNoSearch, $event) || (ctx.itemNoSearch = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(12, AttendancePersonalInfoListComponent_nz_option_12_Template, 1, 2, "nz-option", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 12)(14, "label", 9);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 13)(18, "nz-date-picker", 14);
      \u0275\u0275twoWayListener("ngModelChange", function AttendancePersonalInfoListComponent_Template_nz_date_picker_ngModelChange_18_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.startDate, $event) || (ctx.startDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(19, "span");
      \u0275\u0275text(20, "~");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "nz-date-picker", 15);
      \u0275\u0275twoWayListener("ngModelChange", function AttendancePersonalInfoListComponent_Template_nz_date_picker_ngModelChange_21_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.endDate, $event) || (ctx.endDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 16)(23, "button", 17);
      \u0275\u0275element(24, "i", 18);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(27, "div", 19)(28, "input", 20);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function AttendancePersonalInfoListComponent_Template_input_ngModelChange_28_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.quickFilterKeyword, $event) || (ctx.quickFilterKeyword = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275template(30, AttendancePersonalInfoListComponent_nz_alert_30_Template, 1, 1, "nz-alert", 21);
      \u0275\u0275elementStart(31, "nz-table", 22, 0)(33, "thead")(34, "tr")(35, "th", 23);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "th", 24);
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "th", 25);
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "th", 24);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "th", 24);
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "th", 26);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "th", 25);
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "th", 27);
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "th", 27);
      \u0275\u0275text(60);
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(62, "tbody");
      \u0275\u0275template(63, AttendancePersonalInfoListComponent_tr_63_Template, 19, 12, "tr", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275template(64, AttendancePersonalInfoListComponent_ng_template_64_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      const atpiTable_r8 = \u0275\u0275reference(32);
      const atpiTotalTpl_r9 = \u0275\u0275reference(65);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.basicInfo());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 29, "atpi.label.category", "Ph\xE2n lo\u1EA1i"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.itemNoSearch);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(11, 32, "atpi.select.allOption", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.itemOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 35, "atpi.label.time", "Th\u1EDDi gian"));
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.startDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.endDate);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 38, "atpi.btn.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.quickFilterKeyword);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(29, 41, "atpi.placeholder.quickFilter", "L\u1ECDc nhanh..."));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.filteredRows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", \u0275\u0275pureFunction0(71, _c0))("nzShowTotal", atpiTotalTpl_r9)("nzScroll", \u0275\u0275pureFunction0(72, _c1));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 44, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 47, "atpi.col.fullName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 50, "atpi.col.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 53, "atpi.col.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 56, "atpi.col.category", "Ph\xE2n lo\u1EA1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(52, 59, "atpi.col.duration", "Th\u1EDDi l\u01B0\u1EE3ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(55, 62, "atpi.col.time", "Th\u1EDDi gian"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(58, 65, "atpi.col.startTime", "Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(61, 68, "atpi.col.endTime", "Th\u1EDDi gian k\u1EBFt th\xFAc"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", atpiTable_r8.data);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzDatePickerModule, NzDatePickerComponent, NzAlertModule, NzAlertComponent, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttendancePersonalInfoListComponent, [{
    type: Component,
    args: [{ selector: "app-attendance-personal-info-list", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzInputModule,
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
        <form class="row g-3" (ngSubmit)="search()">
          <div class="col-md-3">
            <label class="form-label">{{ 'atpi.label.category' | translate:'Ph\xE2n lo\u1EA1i' }}</label>
            <nz-select class="w-100" [(ngModel)]="itemNoSearch" name="itemNoSearch" nzAllowClear
                       [nzPlaceHolder]="'atpi.select.allOption' | translate:'-- T\u1EA5t c\u1EA3 --'">
              <nz-option *ngFor="let c of itemOptions()" [nzValue]="c.itemNo" [nzLabel]="c.itemName || c.itemNo"></nz-option>
            </nz-select>
          </div>
          <div class="col-md-4">
            <label class="form-label">{{ 'atpi.label.time' | translate:'Th\u1EDDi gian' }}</label>
            <div class="d-flex align-items-center gap-2">
              <nz-date-picker style="width:150px;" [(ngModel)]="startDate" name="startDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
              <span>~</span>
              <nz-date-picker style="width:150px;" [(ngModel)]="endDate" name="endDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
            </div>
          </div>
          <div class="col-md-2 d-flex align-items-end">
            <button nz-button nzType="primary" type="submit">
              <i class="bx bx-search"></i> {{ 'atpi.btn.search' | translate:'Tra c\u1EE9u' }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- ===== Toolbar l\u1ECDc nhanh ===== -->
    <div class="d-flex align-items-center gap-2 mb-2">
      <input nz-input style="max-width:220px;" [(ngModel)]="quickFilterKeyword"
             [placeholder]="'atpi.placeholder.quickFilter' | translate:'L\u1ECDc nhanh...'">
    </div>

    <!-- ===== B\u1EA3ng danh s\xE1ch ===== -->
    <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

    <nz-table [nzData]="filteredRows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
              [nzPageSizeOptions]="[25, 50, 100, 200]" [nzShowTotal]="atpiTotalTpl"
              [nzScroll]="{ x: '1200px' }" class="table-nowrap" #atpiTable>
      <thead>
        <tr>
          <th class="text-center" nzWidth="50px">{{ 'common.stt' | translate:'STT' }}</th>
          <th nzWidth="150px">{{ 'atpi.col.fullName' | translate:'H\u1ECD t\xEAn' }}</th>
          <th class="text-center" nzWidth="110px">{{ 'atpi.col.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
          <th nzWidth="150px">{{ 'atpi.col.deptName' | translate:'Ph\xF2ng ban' }}</th>
          <th nzWidth="150px">{{ 'atpi.col.category' | translate:'Ph\xE2n lo\u1EA1i' }}</th>
          <th class="text-center" nzWidth="100px">{{ 'atpi.col.duration' | translate:'Th\u1EDDi l\u01B0\u1EE3ng' }}</th>
          <th class="text-center" nzWidth="110px">{{ 'atpi.col.time' | translate:'Th\u1EDDi gian' }}</th>
          <th class="text-center" nzWidth="130px">{{ 'atpi.col.startTime' | translate:'Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u' }}</th>
          <th class="text-center" nzWidth="130px">{{ 'atpi.col.endTime' | translate:'Th\u1EDDi gian k\u1EBFt th\xFAc' }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of atpiTable.data; let i = index">
          <td class="text-center">{{ i + 1 }}</td>
          <td [attr.title]="row.localName || null">{{ row.localName }}</td>
          <td class="text-center">{{ row.empId }}</td>
          <td [attr.title]="row.deptName || null">{{ row.deptName }}</td>
          <td [attr.title]="row.itemName || row.itemNo || null">{{ row.itemName || row.itemNo }}</td>
          <td class="text-center">{{ row.workHour }}</td>
          <td class="text-center">{{ row.arDateStr }}</td>
          <td class="text-center">{{ row.indoorTime }}</td>
          <td class="text-center">{{ row.outdoorTime }}</td>
        </tr>
      </tbody>
      <ng-template #atpiTotalTpl let-total>
        {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
      </ng-template>
    </nz-table>

  </div>
</div>
` }]
  }], () => [{ type: AttendancePersonalInfoListService }, { type: I18nService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AttendancePersonalInfoListComponent, { className: "AttendancePersonalInfoListComponent", filePath: "src/app/attendance-personal-info-list/attendance-personal-info-list.component.ts", lineNumber: 55 });
})();
export {
  AttendancePersonalInfoListComponent
};
//# debugId=8466bfb9-d95a-5234-945e-060bc83319ac
//# sourceMappingURL=chunk-MBI4PD4M.js.map
