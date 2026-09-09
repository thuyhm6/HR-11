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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTW5U2M5.js";

// src/app/dept-ot-apply-info/dept-ot-apply-info.service.ts
var API_BASE = "/ess/infoApply/api/deptOtApplyInfo";
var DeptOtApplyInfoService = class _DeptOtApplyInfoService {
  constructor(http) {
    this.http = http;
  }
  http;
  getPageList(params) {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      httpParams = httpParams.set(key, String(value));
    }
    return this.http.get(`${API_BASE}/list`, {
      params: httpParams,
      withCredentials: true
    });
  }
  buildExportUrl(params) {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      httpParams = httpParams.set(key, String(value));
    }
    return `${API_BASE}/export?${httpParams.toString()}`;
  }
  static \u0275fac = function DeptOtApplyInfoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DeptOtApplyInfoService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DeptOtApplyInfoService, factory: _DeptOtApplyInfoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeptOtApplyInfoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/dept-ot-apply-info/dept-ot-apply-info.component.ts
function DeptOtApplyInfoComponent_nz_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 21);
  }
  if (rf & 2) {
    const y_r1 = ctx.$implicit;
    \u0275\u0275property("nzValue", y_r1)("nzLabel", y_r1);
  }
}
function DeptOtApplyInfoComponent_nz_alert_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 22);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function DeptOtApplyInfoComponent_th_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, m_r3.labelKey, "Th\xE1ng " + m_r3.key));
  }
}
function DeptOtApplyInfoComponent_ng_container_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "common.approved", "\u0110\xE3 duy\u1EC7t"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 5, "ess.viewDeptOtApplyInfo.apply.b", "Xin ph\xE9p"));
  }
}
function DeptOtApplyInfoComponent_tr_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 28);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function DeptOtApplyInfoComponent_tr_56_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "td", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const m_r4 = ctx.$implicit;
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5[m_r4.approvedField]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5[m_r4.applyField]);
  }
}
function DeptOtApplyInfoComponent_tr_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, DeptOtApplyInfoComponent_tr_56_ng_container_9_Template, 5, 2, "ng-container", 19);
    \u0275\u0275elementEnd();
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
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.monthColumns);
  }
}
var MONTH_COLUMNS = Array.from({ length: 12 }, (_, i) => {
  const mm = String(i + 1).padStart(2, "0");
  return {
    key: mm,
    labelKey: `common.month.${mm}`,
    approvedField: `m${mm}Approved`,
    applyField: `m${mm}Apply`
  };
});
var I18N_KEYS = [
  "common.year",
  "essDept.keyword",
  "vdp.search.empKeyword.placeholder",
  "common.deptName",
  "essDept.deptNos.placeholder",
  "essDept.search",
  "ess.viewMonthDetailList.btnExport",
  "common.stt",
  "common.empId",
  "common.empName",
  "common.approved",
  "ess.viewDeptOtApplyInfo.apply.b",
  "common.noData",
  "common.loadFail",
  ...MONTH_COLUMNS.map((m) => m.labelKey)
];
var DeptOtApplyInfoComponent = class _DeptOtApplyInfoComponent {
  constructor(api, i18n) {
    this.api = api;
    this.i18n = i18n;
  }
  api;
  i18n;
  monthColumns = MONTH_COLUMNS;
  years = this.buildYearOptions();
  pageSizeOptions = [10, 25, 50, 100];
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
  year = (/* @__PURE__ */ new Date()).getFullYear().toString();
  keyword = "";
  deptNos = "";
  pageIndex = 1;
  pageSize = 25;
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.search();
  }
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
  exportReport() {
    const url = this.api.buildExportUrl({ year: this.year, keyword: this.keyword, deptNos: this.deptNos });
    window.location.href = url;
  }
  loadPage() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getPageList({
      year: this.year,
      keyword: this.keyword,
      deptNos: this.deptNos,
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
        this.loading.set(false);
      }
    });
  }
  buildYearOptions() {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    const years = [];
    for (let y = currentYear + 1; y >= currentYear - 5; y--)
      years.push(String(y));
    return years;
  }
  static \u0275fac = function DeptOtApplyInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DeptOtApplyInfoComponent)(\u0275\u0275directiveInject(DeptOtApplyInfoService), \u0275\u0275directiveInject(I18nService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeptOtApplyInfoComponent, selectors: [["app-dept-ot-apply-info"]], decls: 57, vars: 66, consts: [[1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", "align-items-end", 3, "ngSubmit"], [1, "col-md-2"], [1, "form-label"], ["name", "year", 1, "w-100", 3, "ngModelChange", "ngModel"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col-md-3"], ["nz-input", "", "name", "keyword", 3, "ngModelChange", "ngModel", "placeholder"], ["nz-input", "", "name", "deptNos", 3, "ngModelChange", "ngModel", "placeholder"], [1, "col-md-4"], ["nz-button", "", "nzType", "primary", "type", "submit"], ["nz-button", "", "nzType", "default", "type", "button", 1, "ms-2", 3, "click"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [1, "table-scroll-wrapper"], ["nzShowSizeChanger", "", 1, "table-nowrap", 3, "nzPageIndexChange", "nzPageSizeChange", "nzData", "nzFrontPagination", "nzLoading", "nzTotal", "nzPageIndex", "nzPageSize", "nzPageSizeOptions"], ["rowspan", "3"], ["colspan", "2", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "2"], [1, "text-center"], [1, "text-end"]], template: function DeptOtApplyInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "nz-card", 2)(3, "form", 3);
      \u0275\u0275listener("ngSubmit", function DeptOtApplyInfoComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 4)(5, "label", 5);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "nz-select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function DeptOtApplyInfoComponent_Template_nz_select_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.year, $event) || (ctx.year = $event);
        return $event;
      });
      \u0275\u0275template(9, DeptOtApplyInfoComponent_nz_option_9_Template, 1, 2, "nz-option", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 8)(11, "label", 5);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "input", 9);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function DeptOtApplyInfoComponent_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.keyword, $event) || (ctx.keyword = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 8)(17, "label", 5);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "input", 10);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function DeptOtApplyInfoComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.deptNos, $event) || (ctx.deptNos = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 11)(23, "button", 12);
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "button", 13);
      \u0275\u0275listener("click", function DeptOtApplyInfoComponent_Template_button_click_26_listener() {
        return ctx.exportReport();
      });
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "nz-card");
      \u0275\u0275template(30, DeptOtApplyInfoComponent_nz_alert_30_Template, 1, 1, "nz-alert", 14);
      \u0275\u0275elementStart(31, "div", 15)(32, "nz-table", 16);
      \u0275\u0275listener("nzPageIndexChange", function DeptOtApplyInfoComponent_Template_nz_table_nzPageIndexChange_32_listener($event) {
        return ctx.onPageIndexChange($event);
      })("nzPageSizeChange", function DeptOtApplyInfoComponent_Template_nz_table_nzPageSizeChange_32_listener($event) {
        return ctx.onPageSizeChange($event);
      });
      \u0275\u0275elementStart(33, "thead")(34, "tr")(35, "th", 17);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "th", 17);
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "th", 17);
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "th", 17);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "th");
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "tr");
      \u0275\u0275template(51, DeptOtApplyInfoComponent_th_51_Template, 3, 4, "th", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "tr");
      \u0275\u0275template(53, DeptOtApplyInfoComponent_ng_container_53_Template, 7, 8, "ng-container", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "tbody");
      \u0275\u0275template(55, DeptOtApplyInfoComponent_tr_55_Template, 4, 5, "tr", 20)(56, DeptOtApplyInfoComponent_tr_56_Template, 10, 8, "tr", 19);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 30, "common.year", "N\u0103m"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.year);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.years);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 33, "essDept.keyword", "M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.keyword);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(15, 36, "vdp.search.empKeyword.placeholder", "Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 39, "common.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.deptNos);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(21, 42, "essDept.deptNos.placeholder", "VD: D001,D002"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 45, "essDept.search", "Tra c\u1EE9u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 48, "ess.viewMonthDetailList.btnExport", "Xu\u1EA5t b\xE1o c\xE1o"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance(2);
      \u0275\u0275property("nzData", ctx.rows())("nzFrontPagination", false)("nzLoading", ctx.loading())("nzTotal", ctx.recordsTotal())("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzPageSizeOptions", ctx.pageSizeOptions);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 51, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 54, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 57, "common.empName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 60, "common.deptName", "B\u1ED9 ph\u1EADn"));
      \u0275\u0275advance(2);
      \u0275\u0275attribute("colspan", 24);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(49, 63, "common.year", "N\u0103m"), " ", ctx.year);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.monthColumns);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.monthColumns);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.rows());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzInputModule, NzInputDirective, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzCardModule, NzCardComponent, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.table-scroll-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n/*# sourceMappingURL=dept-ot-apply-info.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeptOtApplyInfoComponent, [{
    type: Component,
    args: [{ selector: "app-dept-ot-apply-info", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzSelectModule,
      NzInputModule,
      NzButtonModule,
      NzCardModule,
      NzAlertModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- Form t\xECm ki\u1EBFm - \u0111\u1EE9ng im khi cu\u1ED9n (xem .sticky-filter-card trong styles.css) -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3 align-items-end" (ngSubmit)="search()">
        <div class="col-md-2">
          <label class="form-label">{{ 'common.year' | translate:'N\u0103m' }}</label>
          <nz-select [(ngModel)]="year" name="year" class="w-100">
            <nz-option *ngFor="let y of years" [nzValue]="y" [nzLabel]="y"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'essDept.keyword' | translate:'M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn' }}</label>
          <input nz-input [(ngModel)]="keyword" name="keyword"
                 [placeholder]="'vdp.search.empKeyword.placeholder' | translate:'Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn'">
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</label>
          <input nz-input [(ngModel)]="deptNos" name="deptNos"
                 [placeholder]="'essDept.deptNos.placeholder' | translate:'VD: D001,D002'">
        </div>
        <div class="col-md-4">
          <button nz-button nzType="primary" type="submit">{{ 'essDept.search' | translate:'Tra c\u1EE9u' }}</button>
          <button nz-button nzType="default" type="button" class="ms-2" (click)="exportReport()">{{ 'ess.viewMonthDetailList.btnExport' | translate:'Xu\u1EA5t b\xE1o c\xE1o' }}</button>
        </div>
      </form>
    </nz-card>

    <!-- B\u1EA3ng t\u1ED5ng h\u1EE3p OT \u0110\xE3 duy\u1EC7t / Xin ph\xE9p theo th\xE1ng -->
    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <!-- B\u1ECDc div cu\u1ED9n ngang th\u1EE7 c\xF4ng (kh\xF4ng d\xF9ng nzScroll) v\xEC nz-table ch\u1EC9 \u0111\u1ED3ng b\u1ED9 \u0111\u1ED9 r\u1ED9ng c\u1ED9t
           theo H\xC0NG \u0110\u1EA6U TI\xCAN c\u1EE7a thead (xem NzTheadComponent.ngAfterContentInit trong
           ng-zorro-antd/table) - header 3 h\xE0ng rowspan/colspan \u1EDF \u0111\xE2y c\xF3 28 c\u1ED9t l\xE1 nh\u01B0ng h\xE0ng 1 ch\u1EC9 c\xF3
           5 th (1 \xF4 g\u1ED9p colspan=24 kh\xF4ng c\xF3 nzWidth), khi\u1EBFn colgroup \u0111\u1ED3ng b\u1ED9 sai v\xE0 24 c\u1ED9t th\xE1ng b\u1ECB co
           v\u1EC1 0 khi b\u1EADt nzScroll. Kh\xF4ng d\xF9ng nzScroll th\xEC nz-table render b\u1EA3ng HTML thu\u1EA7n
           (tableLayout=auto), tr\xECnh duy\u1EC7t t\u1EF1 x\u1EED l\xFD rowspan/colspan \u0111\xFAng chu\u1EA9n, kh\xF4ng c\u1EA7n \u0111\u1ED3ng b\u1ED9. -->
      <div class="table-scroll-wrapper">
        <nz-table [nzData]="rows()" [nzFrontPagination]="false" [nzLoading]="loading()"
                  [nzTotal]="recordsTotal()" [nzPageIndex]="pageIndex" [nzPageSize]="pageSize"
                  [nzPageSizeOptions]="pageSizeOptions" nzShowSizeChanger
                  (nzPageIndexChange)="onPageIndexChange($event)" (nzPageSizeChange)="onPageSizeChange($event)"
                  class="table-nowrap">
          <thead>
              <tr>
                <th rowspan="3">{{ 'common.stt' | translate:'STT' }}</th>
                <th rowspan="3">{{ 'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
                <th rowspan="3">{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
                <th rowspan="3">{{ 'common.deptName' | translate:'B\u1ED9 ph\u1EADn' }}</th>
                <th [attr.colspan]="24">{{ 'common.year' | translate:'N\u0103m' }} {{ year }}</th>
              </tr>
              <tr>
                <th *ngFor="let m of monthColumns" colspan="2">{{ m.labelKey | translate:('Th\xE1ng ' + m.key) }}</th>
              </tr>
              <tr>
                <ng-container *ngFor="let m of monthColumns">
                  <th>{{ 'common.approved' | translate:'\u0110\xE3 duy\u1EC7t' }}</th>
                  <th>{{ 'ess.viewDeptOtApplyInfo.apply.b' | translate:'Xin ph\xE9p' }}</th>
                </ng-container>
              </tr>
            </thead>
            <tbody>
              <tr *ngIf="!loading() && rows().length === 0">
                <td [attr.colspan]="28" class="text-center">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
              </tr>
              <tr *ngFor="let row of rows(); let i = index">
                <td class="text-center">{{ (pageIndex - 1) * pageSize + i + 1 }}</td>
                <td class="text-center" [attr.title]="row.empId || null">{{ row.empId }}</td>
                <td [attr.title]="row.localName || null">{{ row.localName }}</td>
                <td [attr.title]="row.deptName || null">{{ row.deptName }}</td>
                <ng-container *ngFor="let m of monthColumns">
                  <td class="text-end">{{ row[m.approvedField] }}</td>
                  <td class="text-end">{{ row[m.applyField] }}</td>
                </ng-container>
              </tr>
            </tbody>
        </nz-table>
      </div>
    </nz-card>
  </div>
</div>
`, styles: ["/* src/app/dept-ot-apply-info/dept-ot-apply-info.component.css */\ntable td,\ntable th {\n  white-space: nowrap;\n}\n.table-scroll-wrapper {\n  overflow-x: auto;\n}\n/*# sourceMappingURL=dept-ot-apply-info.component.css.map */\n"] }]
  }], () => [{ type: DeptOtApplyInfoService }, { type: I18nService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeptOtApplyInfoComponent, { className: "DeptOtApplyInfoComponent", filePath: "src/app/dept-ot-apply-info/dept-ot-apply-info.component.ts", lineNumber: 60 });
})();
export {
  DeptOtApplyInfoComponent
};
//# debugId=fb4e8cc2-320a-5056-be6c-0135e2162f51
//# sourceMappingURL=chunk-ZH3O7M4G.js.map
