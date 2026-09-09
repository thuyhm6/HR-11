import {
  NzDatePickerComponent,
  NzDatePickerModule
} from "./chunk-TWXZW7YB.js";
import "./chunk-5TI46VEX.js";
import {
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

// src/app/workgroup-exper-list/workgroup-exper-list.service.ts
var API_BASE = "/ess/workgroup/api";
var WorkgroupExperListService = class _WorkgroupExperListService {
  constructor(http) {
    this.http = http;
  }
  http;
  getBasicInfo() {
    return this.http.get("/ess/empinfo/api/personalInfo/myInfo", { withCredentials: true });
  }
  getList(params) {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value)
        httpParams = httpParams.set(key, value);
    }
    return this.http.get(`${API_BASE}/workGroup/myList`, {
      params: httpParams,
      withCredentials: true
    });
  }
  getCodeList(parentCodeNo) {
    return this.http.get("/sys/api/getCode/list", {
      params: new HttpParams().set("parentCodeNo", parentCodeNo),
      withCredentials: true
    });
  }
  static \u0275fac = function WorkgroupExperListService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkgroupExperListService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WorkgroupExperListService, factory: _WorkgroupExperListService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkgroupExperListService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/workgroup-exper-list/workgroup-exper-list.component.ts
var _c0 = () => [15, 25, 50, 100];
function WorkgroupExperListComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26)(2, "table", 27)(3, "colgroup");
    \u0275\u0275element(4, "col", 28)(5, "col", 29)(6, "col", 28)(7, "col", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "tbody")(9, "tr")(10, "th", 30);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 30);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "tr")(21, "th", 30);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 30);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "tr")(32, "th", 30);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "td");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th", 30);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "td");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "tr")(43, "th", 30);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "td");
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th", 30);
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
function WorkgroupExperListComponent_nz_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 31);
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r3.codeNo)("nzLabel", c_r3.codeName);
  }
}
function WorkgroupExperListComponent_nz_alert_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 32);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r3.errorMessage() ?? "");
  }
}
function WorkgroupExperListComponent_tr_50_Template(rf, ctx) {
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
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r6 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.startDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.shiftName(row_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.remark);
  }
}
function WorkgroupExperListComponent_ng_template_51_Template(rf, ctx) {
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
  "wg.label.shiftNo",
  "wg.label.fromDate",
  "wg.label.toDate",
  "wg.btn.search",
  "wg.btn.clearFilter",
  "wg.col.seq",
  "wg.col.startDate",
  "wg.col.shift",
  "wg.col.reason",
  "common.selectAll",
  "common.loadFail",
  "common.totalRows"
];
var SHIFT_PARENT_CODE = "400223";
var WorkgroupExperListComponent = class _WorkgroupExperListComponent {
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
  shiftOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "shiftOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  shiftNameMap = computed(
    () => {
      const map = /* @__PURE__ */ new Map();
      this.shiftOptions().forEach((c) => map.set(c.codeNo, c.codeName));
      return map;
    },
    ...ngDevMode ? [{ debugName: "shiftNameMap" }] : (
      /* istanbul ignore next */
      []
    )
  );
  shiftNo = null;
  fromDate = null;
  toDate = null;
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadBasicInfo();
    this.api.getCodeList(SHIFT_PARENT_CODE).subscribe((list) => this.shiftOptions.set(list ?? []));
    this.search();
  }
  search() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getList({
      shiftNo: this.shiftNo ?? "",
      fromDate: this.formatYmd(this.fromDate),
      toDate: this.formatYmd(this.toDate)
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
    this.shiftNo = null;
    this.fromDate = null;
    this.toDate = null;
    this.search();
  }
  /** SHIFT_NAME không được BE trả về ở query ESS (xem giải thích ở đầu file) - tự map từ danh sách ca làm. */
  shiftName(row) {
    return row.shiftName || this.shiftNameMap().get(row.shiftNo) || row.shiftNo || "";
  }
  loadBasicInfo() {
    this.api.getBasicInfo().subscribe({
      next: (data) => this.basicInfo.set(data)
    });
  }
  formatYmd(d) {
    return d ? formatDate(d, "yyyy-MM-dd", "vi") : "";
  }
  static \u0275fac = function WorkgroupExperListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkgroupExperListComponent)(\u0275\u0275directiveInject(WorkgroupExperListService), \u0275\u0275directiveInject(I18nService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkgroupExperListComponent, selectors: [["app-workgroup-exper-list"]], decls: 53, vars: 54, consts: [["wgeTable", ""], ["wgeTotalTpl", ""], [1, "row"], [1, "col-12"], ["class", "card mb-3", 4, "ngIf"], [1, "card"], [1, "card-body"], [1, "row", "g-3", "mb-4", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["name", "shiftNo", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col-md-2"], ["name", "fromDate", "nzFormat", "yyyy-MM-dd", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "toDate", "nzFormat", "yyyy-MM-dd", 1, "w-100", 3, "ngModelChange", "ngModel"], [1, "col-md-5", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [1, "table-nowrap", 3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "140px", 1, "text-center"], [4, "ngFor", "ngForOf"], [1, "card", "mb-3"], [1, "card-body", "p-0"], [1, "table", "table-bordered", "table-sm", "align-middle", "mb-0", 2, "table-layout", "fixed"], [2, "width", "15%"], [2, "width", "35%"], [1, "table-light", "text-center"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], [1, "text-center"]], template: function WorkgroupExperListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
      \u0275\u0275template(2, WorkgroupExperListComponent_div_2_Template, 53, 40, "div", 4);
      \u0275\u0275elementStart(3, "div", 5)(4, "div", 6)(5, "form", 7);
      \u0275\u0275listener("ngSubmit", function WorkgroupExperListComponent_Template_form_ngSubmit_5_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(6, "div", 8)(7, "label", 9);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "nz-select", 10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function WorkgroupExperListComponent_Template_nz_select_ngModelChange_10_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.shiftNo, $event) || (ctx.shiftNo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(12, WorkgroupExperListComponent_nz_option_12_Template, 1, 2, "nz-option", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 12)(14, "label", 9);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "nz-date-picker", 13);
      \u0275\u0275twoWayListener("ngModelChange", function WorkgroupExperListComponent_Template_nz_date_picker_ngModelChange_17_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.fromDate, $event) || (ctx.fromDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 12)(19, "label", 9);
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "nz-date-picker", 14);
      \u0275\u0275twoWayListener("ngModelChange", function WorkgroupExperListComponent_Template_nz_date_picker_ngModelChange_22_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.toDate, $event) || (ctx.toDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 15)(24, "button", 16);
      \u0275\u0275element(25, "i", 17);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "button", 18);
      \u0275\u0275listener("click", function WorkgroupExperListComponent_Template_button_click_28_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(29, "i", 19);
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(32, WorkgroupExperListComponent_nz_alert_32_Template, 1, 1, "nz-alert", 20);
      \u0275\u0275elementStart(33, "nz-table", 21, 0)(35, "thead")(36, "tr")(37, "th", 22);
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "th", 23);
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "th");
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "th");
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "tbody");
      \u0275\u0275template(50, WorkgroupExperListComponent_tr_50_Template, 9, 4, "tr", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275template(51, WorkgroupExperListComponent_ng_template_51_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      const wgeTable_r8 = \u0275\u0275reference(34);
      const wgeTotalTpl_r9 = \u0275\u0275reference(52);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.basicInfo());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 23, "wg.label.shiftNo", "Ca l\xE0m"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.shiftNo);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(11, 26, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.shiftOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 29, "wg.label.fromDate", "Th\u1EDDi gian t\u1EEB"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.fromDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 32, "wg.label.toDate", "Th\u1EDDi gian \u0111\u1EBFn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.toDate);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(27, 35, "wg.btn.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(31, 38, "wg.btn.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 15)("nzShowSizeChanger", true)("nzPageSizeOptions", \u0275\u0275pureFunction0(53, _c0))("nzShowTotal", wgeTotalTpl_r9);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 41, "wg.col.seq", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 44, "wg.col.startDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 47, "wg.col.shift", "Ca"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 50, "wg.col.reason", "Nguy\xEAn nh\xE2n"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", wgeTable_r8.data);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    FormsModule,
    \u0275NgNoValidate,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    NgForm,
    NzTableModule,
    NzTableComponent,
    NzTableCellDirective,
    NzThMeasureDirective,
    NzTheadComponent,
    NzTbodyComponent,
    NzTrDirective,
    NzInputModule,
    NzSelectModule,
    NzOptionComponent,
    NzSelectComponent,
    NzButtonModule,
    NzButtonComponent,
    NzTransitionPatchDirective,
    NzWaveDirective,
    NzDatePickerModule,
    NzDatePickerComponent,
    NzAlertModule,
    NzAlertComponent,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkgroupExperListComponent, [{
    type: Component,
    args: [{ selector: "app-workgroup-exper-list", standalone: true, imports: [
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

    <!-- ===== \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm + B\u1EA3ng d\u1EEF li\u1EC7u ===== -->
    <div class="card">
      <div class="card-body">

        <form class="row g-3 mb-4" (ngSubmit)="search()">
          <div class="col-md-3">
            <label class="form-label">{{ 'wg.label.shiftNo' | translate:'Ca l\xE0m' }}</label>
            <nz-select class="w-100" [(ngModel)]="shiftNo" name="shiftNo" nzAllowClear
                       [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
              <nz-option *ngFor="let c of shiftOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
            </nz-select>
          </div>
          <div class="col-md-2">
            <label class="form-label">{{ 'wg.label.fromDate' | translate:'Th\u1EDDi gian t\u1EEB' }}</label>
            <nz-date-picker class="w-100" [(ngModel)]="fromDate" name="fromDate" nzFormat="yyyy-MM-dd"></nz-date-picker>
          </div>
          <div class="col-md-2">
            <label class="form-label">{{ 'wg.label.toDate' | translate:'Th\u1EDDi gian \u0111\u1EBFn' }}</label>
            <nz-date-picker class="w-100" [(ngModel)]="toDate" name="toDate" nzFormat="yyyy-MM-dd"></nz-date-picker>
          </div>
          <div class="col-md-5 d-flex align-items-end gap-2 flex-wrap">
            <button nz-button nzType="primary" type="submit">
              <i class="bx bx-search"></i> {{ 'wg.btn.search' | translate:'Tra c\u1EE9u' }}
            </button>
            <button nz-button type="button" (click)="clearSearch()">
              <i class="bx bx-x"></i> {{ 'wg.btn.clearFilter' | translate:'X\xF3a l\u1ECDc' }}
            </button>
          </div>
        </form>

        <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

        <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="15" [nzShowSizeChanger]="true"
                  [nzPageSizeOptions]="[15, 25, 50, 100]" [nzShowTotal]="wgeTotalTpl"
                  class="table-nowrap" #wgeTable>
          <thead>
            <tr>
              <th class="text-center" nzWidth="60px">{{ 'wg.col.seq' | translate:'STT' }}</th>
              <th class="text-center" nzWidth="140px">{{ 'wg.col.startDate' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u' }}</th>
              <th>{{ 'wg.col.shift' | translate:'Ca' }}</th>
              <th>{{ 'wg.col.reason' | translate:'Nguy\xEAn nh\xE2n' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let row of wgeTable.data; let i = index">
              <td class="text-center">{{ i + 1 }}</td>
              <td class="text-center">{{ row.startDate }}</td>
              <td>{{ shiftName(row) }}</td>
              <td>{{ row.remark }}</td>
            </tr>
          </tbody>
          <ng-template #wgeTotalTpl let-total>
            {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
          </ng-template>
        </nz-table>

      </div>
    </div>

  </div>
</div>
` }]
  }], () => [{ type: WorkgroupExperListService }, { type: I18nService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkgroupExperListComponent, { className: "WorkgroupExperListComponent", filePath: "src/app/workgroup-exper-list/workgroup-exper-list.component.ts", lineNumber: 54 });
})();
export {
  WorkgroupExperListComponent
};
//# debugId=1703e607-3371-5817-aba6-0b4652538866
//# sourceMappingURL=chunk-SV2KYUZD.js.map
