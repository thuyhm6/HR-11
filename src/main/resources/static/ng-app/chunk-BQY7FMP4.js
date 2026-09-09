import {
  NzInputNumberComponent,
  NzInputNumberModule
} from "./chunk-IXCMIWQQ.js";
import "./chunk-VO7C5C6M.js";
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
import "./chunk-2GOAB54B.js";
import {
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

// src/app/year-use-info/year-use-info.service.ts
var API_BASE = "/ess/viewDept/api/yearUseInfo";
var YearUseInfoService = class _YearUseInfoService {
  constructor(http) {
    this.http = http;
  }
  http;
  getBasicInfo() {
    return this.http.get("/ess/empinfo/api/personalInfo/myInfo", { withCredentials: true });
  }
  getVacationRows(year) {
    let httpParams = new HttpParams();
    if (year)
      httpParams = httpParams.set("year", year);
    return this.http.get(`${API_BASE}/vacationRows`, { params: httpParams, withCredentials: true });
  }
  getLeaveUsage(year) {
    let httpParams = new HttpParams();
    if (year)
      httpParams = httpParams.set("year", year);
    return this.http.get(`${API_BASE}/leaveUsage`, { params: httpParams, withCredentials: true });
  }
  static \u0275fac = function YearUseInfoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _YearUseInfoService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _YearUseInfoService, factory: _YearUseInfoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(YearUseInfoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/year-use-info/year-use-info.component.ts
var _c0 = () => [25, 50, 100];
function YearUseInfoComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 20)(2, "table", 21)(3, "colgroup");
    \u0275\u0275element(4, "col", 22)(5, "col", 23)(6, "col", 22)(7, "col", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "tbody")(9, "tr")(10, "th", 24);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 24);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "tr")(21, "th", 24);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 24);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "tr")(32, "th", 24);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "td");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th", 24);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "td");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "tr")(43, "th", 24);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "td");
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th", 24);
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
function YearUseInfoComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.vacErrorMessage());
  }
}
function YearUseInfoComponent_tr_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "yuif.msg.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function YearUseInfoComponent_tr_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 15);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 15);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 15);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 15);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r5 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.strtDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.endDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.total);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.lastYearVac);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.addVac);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.useVac);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.affirmUseVac);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r4.remainVac);
  }
}
function YearUseInfoComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.leaveErrorMessage());
  }
}
function YearUseInfoComponent_tr_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 27);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "yuif.msg.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function YearUseInfoComponent_tr_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 15);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 15);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r7 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r6.leaveFromDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r6.leaveFromTime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r6.leaveToDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r6.leaveToTime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r6.applyLength);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r6.affirmFlagName);
  }
}
function YearUseInfoComponent_ng_template_80_Template(rf, ctx) {
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
  "essEmpCard.localName",
  "essEmpCard.empId",
  "essEmpCard.deptName",
  "essEmpCard.headDept",
  "essEmpCard.postFamily",
  "essEmpCard.postGrade",
  "essEmpCard.positionName",
  "essEmpCard.dateStarted",
  "yuif.btn.search",
  "yuif.section.vacInfo",
  "yuif.section.leaveUsage",
  "yuif.col.startDate",
  "yuif.col.endDate",
  "yuif.col.startTime",
  "yuif.col.endTime",
  "yuif.col.totalVac",
  "yuif.col.lastYearVac",
  "yuif.col.addVac",
  "yuif.col.useVac",
  "yuif.col.pendingVac",
  "yuif.col.remainVac",
  "yuif.col.duration",
  "yuif.col.approvalStatus",
  "yuif.msg.noData",
  "yuif.msg.loadError",
  "common.stt",
  "common.totalRows"
];
var YearUseInfoComponent = class _YearUseInfoComponent {
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
  vacRows = signal(
    [],
    ...ngDevMode ? [{ debugName: "vacRows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  vacLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "vacLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  vacErrorMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "vacErrorMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  leaveRows = signal(
    [],
    ...ngDevMode ? [{ debugName: "leaveRows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  leaveLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "leaveLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  leaveErrorMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "leaveErrorMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  year = (/* @__PURE__ */ new Date()).getFullYear();
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadBasicInfo();
    this.search();
  }
  search() {
    const year = this.year != null ? String(this.year) : "";
    this.vacLoading.set(true);
    this.vacErrorMessage.set(null);
    this.api.getVacationRows(year).subscribe({
      next: (rows) => {
        this.vacRows.set(rows ?? []);
        this.vacLoading.set(false);
      },
      error: () => {
        this.vacErrorMessage.set(this.i18n.t("yuif.msg.loadError", "L\u1ED7i t\u1EA3i d\u1EEF li\u1EC7u"));
        this.vacRows.set([]);
        this.vacLoading.set(false);
      }
    });
    this.leaveLoading.set(true);
    this.leaveErrorMessage.set(null);
    this.api.getLeaveUsage(year).subscribe({
      next: (rows) => {
        this.leaveRows.set(rows ?? []);
        this.leaveLoading.set(false);
      },
      error: () => {
        this.leaveErrorMessage.set(this.i18n.t("yuif.msg.loadError", "L\u1ED7i t\u1EA3i d\u1EEF li\u1EC7u"));
        this.leaveRows.set([]);
        this.leaveLoading.set(false);
      }
    });
  }
  loadBasicInfo() {
    this.api.getBasicInfo().subscribe({
      next: (data) => this.basicInfo.set(data)
    });
  }
  static \u0275fac = function YearUseInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _YearUseInfoComponent)(\u0275\u0275directiveInject(YearUseInfoService), \u0275\u0275directiveInject(I18nService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _YearUseInfoComponent, selectors: [["app-year-use-info"]], decls: 82, vars: 97, consts: [["yuifLeaveTable", ""], ["yuifTotalTpl", ""], [1, "row"], [1, "col-12"], ["class", "card mb-3", 4, "ngIf"], [1, "card", "mb-3"], [1, "card-body"], [1, "d-flex", "align-items-center", "gap-2", 3, "ngSubmit"], ["name", "year", 2, "width", "100px", 3, "ngModelChange", "ngModel", "nzMin", "nzMax", "nzStep"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bi", "bi-search"], [1, "mb-3", 3, "nzTitle"], ["class", "text-danger small mb-2", 4, "ngIf"], [2, "overflow-x", "auto"], ["nzSize", "small", 2, "white-space", "nowrap", 3, "nzData", "nzLoading", "nzShowPagination"], [1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "nzTitle"], ["nzSize", "small", 2, "white-space", "nowrap", 3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal"], [1, "card-body", "p-0"], [1, "table", "table-bordered", "table-sm", "align-middle", "mb-0", 2, "table-layout", "fixed"], [2, "width", "15%"], [2, "width", "35%"], [1, "table-light", "text-center"], [1, "text-danger", "small", "mb-2"], ["colspan", "9", 1, "text-center", "text-muted"], ["colspan", "7", 1, "text-center", "text-muted"]], template: function YearUseInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
      \u0275\u0275template(2, YearUseInfoComponent_div_2_Template, 53, 40, "div", 4);
      \u0275\u0275elementStart(3, "div", 5)(4, "div", 6)(5, "form", 7);
      \u0275\u0275listener("ngSubmit", function YearUseInfoComponent_Template_form_ngSubmit_5_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(6, "nz-input-number", 8);
      \u0275\u0275twoWayListener("ngModelChange", function YearUseInfoComponent_Template_nz_input_number_ngModelChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.year, $event) || (ctx.year = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(7, "button", 9);
      \u0275\u0275element(8, "i", 10);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "nz-card", 11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275template(13, YearUseInfoComponent_div_13_Template, 2, 1, "div", 12);
      \u0275\u0275elementStart(14, "div", 13)(15, "nz-table", 14)(16, "thead")(17, "tr")(18, "th", 15);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "th", 15);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th", 15);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "th", 15);
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th", 15);
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th", 15);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "th", 15);
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "th", 15);
      \u0275\u0275text(40);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "th", 15);
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(45, "tbody");
      \u0275\u0275template(46, YearUseInfoComponent_tr_46_Template, 4, 4, "tr", 16)(47, YearUseInfoComponent_tr_47_Template, 19, 9, "tr", 17);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(48, "nz-card", 18);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275template(50, YearUseInfoComponent_div_50_Template, 2, 1, "div", 12);
      \u0275\u0275elementStart(51, "div", 13)(52, "nz-table", 19, 0)(54, "thead")(55, "tr")(56, "th", 15);
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "th", 15);
      \u0275\u0275text(60);
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "th", 15);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "th", 15);
      \u0275\u0275text(66);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "th", 15);
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "th", 15);
      \u0275\u0275text(72);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "th", 15);
      \u0275\u0275text(75);
      \u0275\u0275pipe(76, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "tbody");
      \u0275\u0275template(78, YearUseInfoComponent_tr_78_Template, 4, 4, "tr", 16)(79, YearUseInfoComponent_tr_79_Template, 15, 7, "tr", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275template(80, YearUseInfoComponent_ng_template_80_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      const yuifLeaveTable_r9 = \u0275\u0275reference(53);
      const yuifTotalTpl_r10 = \u0275\u0275reference(81);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.basicInfo());
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.year);
      \u0275\u0275property("nzMin", 2e3)("nzMax", 2099)("nzStep", 1);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 39, "yuif.btn.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(12, 42, "yuif.section.vacInfo", "Th\xF4ng tin ngh\u1EC9 ph\xE9p n\u0103m"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.vacErrorMessage());
      \u0275\u0275advance(2);
      \u0275\u0275property("nzData", ctx.vacRows())("nzLoading", ctx.vacLoading())("nzShowPagination", false);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 45, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 48, "yuif.col.startDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 51, "yuif.col.endDate", "Ng\xE0y k\u1EBFt th\xFAc"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 54, "yuif.col.totalVac", "T\u1ED5ng ph\xE9p n\u0103m"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 57, "yuif.col.lastYearVac", "Ph\xE9p n\u0103m ngo\xE0i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 60, "yuif.col.addVac", "\u0110\u1EB7c bi\u1EC7t"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(38, 63, "yuif.col.useVac", "\u0110\xE3 ngh\u1EC9"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 66, "yuif.col.pendingVac", "Ch\u1EDD duy\u1EC7t"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 69, "yuif.col.remainVac", "C\xF2n l\u1EA1i"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.vacLoading() && ctx.vacRows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.vacRows());
      \u0275\u0275advance();
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(49, 72, "yuif.section.leaveUsage", "T\xECnh tr\u1EA1ng s\u1EED d\u1EE5ng ph\xE9p n\u0103m"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.leaveErrorMessage());
      \u0275\u0275advance(2);
      \u0275\u0275property("nzData", ctx.leaveRows())("nzLoading", ctx.leaveLoading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", \u0275\u0275pureFunction0(96, _c0))("nzShowTotal", yuifTotalTpl_r10);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(58, 75, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(61, 78, "yuif.col.startDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(64, 81, "yuif.col.startTime", "Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(67, 84, "yuif.col.endDate", "Ng\xE0y k\u1EBFt th\xFAc"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(70, 87, "yuif.col.endTime", "Th\u1EDDi gian k\u1EBFt th\xFAc"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(73, 90, "yuif.col.duration", "Th\u1EDDi l\u01B0\u1EE3ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(76, 93, "yuif.col.approvalStatus", "Tr\u1EA1ng th\xE1i duy\u1EC7t"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.leaveLoading() && yuifLeaveTable_r9.data.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", yuifLeaveTable_r9.data);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzInputNumberModule, NzInputNumberComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzCardModule, NzCardComponent, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(YearUseInfoComponent, [{
    type: Component,
    args: [{ selector: "app-year-use-info", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzInputNumberModule,
      NzButtonModule,
      NzCardModule,
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
        <form class="d-flex align-items-center gap-2" (ngSubmit)="search()">
          <nz-input-number style="width:100px;" [(ngModel)]="year" name="year" [nzMin]="2000" [nzMax]="2099" [nzStep]="1"></nz-input-number>
          <button nz-button nzType="primary" type="submit">
            <i class="bi bi-search"></i> {{ 'yuif.btn.search' | translate:'Tra c\u1EE9u' }}
          </button>
        </form>
      </div>
    </div>

    <!-- ===== Section 1: Th\xF4ng tin ngh\u1EC9 ph\xE9p n\u0103m ===== -->
    <nz-card [nzTitle]="'yuif.section.vacInfo' | translate:'Th\xF4ng tin ngh\u1EC9 ph\xE9p n\u0103m'" class="mb-3">
      <div class="text-danger small mb-2" *ngIf="vacErrorMessage()">{{ vacErrorMessage() }}</div>
      <div style="overflow-x:auto;">
        <nz-table [nzData]="vacRows()" [nzLoading]="vacLoading()" [nzShowPagination]="false"
                  nzSize="small" style="white-space:nowrap;">
          <thead>
            <tr>
              <th class="text-center">{{ 'common.stt' | translate:'STT' }}</th>
              <th class="text-center">{{ 'yuif.col.startDate' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u' }}</th>
              <th class="text-center">{{ 'yuif.col.endDate' | translate:'Ng\xE0y k\u1EBFt th\xFAc' }}</th>
              <th class="text-center">{{ 'yuif.col.totalVac' | translate:'T\u1ED5ng ph\xE9p n\u0103m' }}</th>
              <th class="text-center">{{ 'yuif.col.lastYearVac' | translate:'Ph\xE9p n\u0103m ngo\xE0i' }}</th>
              <th class="text-center">{{ 'yuif.col.addVac' | translate:'\u0110\u1EB7c bi\u1EC7t' }}</th>
              <th class="text-center">{{ 'yuif.col.useVac' | translate:'\u0110\xE3 ngh\u1EC9' }}</th>
              <th class="text-center">{{ 'yuif.col.pendingVac' | translate:'Ch\u1EDD duy\u1EC7t' }}</th>
              <th class="text-center">{{ 'yuif.col.remainVac' | translate:'C\xF2n l\u1EA1i' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="!vacLoading() && vacRows().length === 0">
              <td colspan="9" class="text-center text-muted">{{ 'yuif.msg.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
            </tr>
            <tr *ngFor="let r of vacRows(); let i = index">
              <td class="text-center">{{ i + 1 }}</td>
              <td class="text-center">{{ r.strtDate }}</td>
              <td class="text-center">{{ r.endDate }}</td>
              <td class="text-center">{{ r.total }}</td>
              <td class="text-center">{{ r.lastYearVac }}</td>
              <td class="text-center">{{ r.addVac }}</td>
              <td class="text-center">{{ r.useVac }}</td>
              <td class="text-center">{{ r.affirmUseVac }}</td>
              <td class="text-center">{{ r.remainVac }}</td>
            </tr>
          </tbody>
        </nz-table>
      </div>
    </nz-card>

    <!-- ===== Section 2: T\xECnh tr\u1EA1ng s\u1EED d\u1EE5ng ph\xE9p n\u0103m ===== -->
    <nz-card [nzTitle]="'yuif.section.leaveUsage' | translate:'T\xECnh tr\u1EA1ng s\u1EED d\u1EE5ng ph\xE9p n\u0103m'">
      <div class="text-danger small mb-2" *ngIf="leaveErrorMessage()">{{ leaveErrorMessage() }}</div>
      <div style="overflow-x:auto;">
        <nz-table [nzData]="leaveRows()" [nzLoading]="leaveLoading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                  [nzPageSizeOptions]="[25, 50, 100]" [nzShowTotal]="yuifTotalTpl"
                  nzSize="small" style="white-space:nowrap;" #yuifLeaveTable>
          <thead>
            <tr>
              <th class="text-center">{{ 'common.stt' | translate:'STT' }}</th>
              <th class="text-center">{{ 'yuif.col.startDate' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u' }}</th>
              <th class="text-center">{{ 'yuif.col.startTime' | translate:'Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u' }}</th>
              <th class="text-center">{{ 'yuif.col.endDate' | translate:'Ng\xE0y k\u1EBFt th\xFAc' }}</th>
              <th class="text-center">{{ 'yuif.col.endTime' | translate:'Th\u1EDDi gian k\u1EBFt th\xFAc' }}</th>
              <th class="text-center">{{ 'yuif.col.duration' | translate:'Th\u1EDDi l\u01B0\u1EE3ng' }}</th>
              <th class="text-center">{{ 'yuif.col.approvalStatus' | translate:'Tr\u1EA1ng th\xE1i duy\u1EC7t' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="!leaveLoading() && yuifLeaveTable.data.length === 0">
              <td colspan="7" class="text-center text-muted">{{ 'yuif.msg.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
            </tr>
            <tr *ngFor="let r of yuifLeaveTable.data; let i = index">
              <td class="text-center">{{ i + 1 }}</td>
              <td class="text-center">{{ r.leaveFromDate }}</td>
              <td class="text-center">{{ r.leaveFromTime }}</td>
              <td class="text-center">{{ r.leaveToDate }}</td>
              <td class="text-center">{{ r.leaveToTime }}</td>
              <td class="text-center">{{ r.applyLength }}</td>
              <td>{{ r.affirmFlagName }}</td>
            </tr>
          </tbody>
          <ng-template #yuifTotalTpl let-total>
            {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
          </ng-template>
        </nz-table>
      </div>
    </nz-card>

  </div>
</div>
` }]
  }], () => [{ type: YearUseInfoService }, { type: I18nService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(YearUseInfoComponent, { className: "YearUseInfoComponent", filePath: "src/app/year-use-info/year-use-info.component.ts", lineNumber: 49 });
})();
export {
  YearUseInfoComponent
};
//# debugId=aa27707b-a7dc-5485-ae12-fe162a768d0e
//# sourceMappingURL=chunk-BQY7FMP4.js.map
