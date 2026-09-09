import {
  utils,
  writeFileSync
} from "./chunk-6KSHLFTP.js";
import {
  NzModalComponent,
  NzModalContentDirective,
  NzModalModule
} from "./chunk-OEYWCHIN.js";
import {
  NzDatePickerComponent,
  NzDatePickerModule
} from "./chunk-TWXZW7YB.js";
import "./chunk-5TI46VEX.js";
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

// src/app/view-ot-apply-personal-self-list/view-ot-apply-personal-self-list.service.ts
var API_BASE = "/ess/viewDept/api/otApplyPersonalSelf";
var ViewOtApplyPersonalSelfListService = class _ViewOtApplyPersonalSelfListService {
  constructor(http) {
    this.http = http;
  }
  http;
  getItems() {
    return this.http.get(`${API_BASE}/items`, { withCredentials: true });
  }
  getSummary(params) {
    let httpParams = new HttpParams();
    if (params.startDate)
      httpParams = httpParams.set("startDate", params.startDate);
    if (params.endDate)
      httpParams = httpParams.set("endDate", params.endDate);
    return this.http.get(`${API_BASE}/summary`, { params: httpParams, withCredentials: true });
  }
  getDetail(personId, itemNo, startDate, endDate) {
    let httpParams = new HttpParams().set("personId", personId).set("itemNo", itemNo);
    if (startDate)
      httpParams = httpParams.set("startDate", startDate);
    if (endDate)
      httpParams = httpParams.set("endDate", endDate);
    return this.http.get(`${API_BASE}/detail`, { params: httpParams, withCredentials: true });
  }
  static \u0275fac = function ViewOtApplyPersonalSelfListService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewOtApplyPersonalSelfListService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewOtApplyPersonalSelfListService, factory: _ViewOtApplyPersonalSelfListService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewOtApplyPersonalSelfListService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-ot-apply-personal-self-list/view-ot-apply-personal-self-list.component.ts
var _c0 = () => ({ "max-height": "70vh", "overflow-y": "auto" });
function ViewOtApplyPersonalSelfListComponent_nz_alert_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 29);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ViewOtApplyPersonalSelfListComponent_th_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const it_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(it_r3.itemName);
  }
}
function ViewOtApplyPersonalSelfListComponent_tr_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 5 + ctx_r1.items().length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, "otsl.msg.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"), " ");
  }
}
function ViewOtApplyPersonalSelfListComponent_tr_48_td_11_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 35);
    \u0275\u0275listener("click", function ViewOtApplyPersonalSelfListComponent_tr_48_td_11_a_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const it_r5 = \u0275\u0275nextContext().$implicit;
      const row_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDetail(row_r6, it_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const it_r5 = \u0275\u0275nextContext().$implicit;
    const row_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fmtQty(row_r6.items[it_r5.itemNo]));
  }
}
function ViewOtApplyPersonalSelfListComponent_tr_48_td_11_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, "0");
    \u0275\u0275elementEnd();
  }
}
function ViewOtApplyPersonalSelfListComponent_tr_48_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 33);
    \u0275\u0275template(1, ViewOtApplyPersonalSelfListComponent_tr_48_td_11_a_1_Template, 2, 1, "a", 34)(2, ViewOtApplyPersonalSelfListComponent_tr_48_td_11_ng_template_2_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const it_r5 = ctx.$implicit;
    const votslZeroTpl_r7 = \u0275\u0275reference(3);
    const row_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (row_r6.items[it_r5.itemNo] || 0) > 0)("ngIfElse", votslZeroTpl_r7);
  }
}
function ViewOtApplyPersonalSelfListComponent_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 22);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 31);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ViewOtApplyPersonalSelfListComponent_tr_48_td_11_Template, 4, 2, "td", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r8 + 1);
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
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmtQty(row_r6.total));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.items());
  }
}
function ViewOtApplyPersonalSelfListComponent_ng_template_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r9 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r9, " ");
  }
}
function ViewOtApplyPersonalSelfListComponent_ng_container_53_nz_alert_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 46);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzMessage", ctx_r1.detailErrorMessage() ?? "");
  }
}
function ViewOtApplyPersonalSelfListComponent_ng_container_53_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 47);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "otsl.msg.selectHint", "Ch\u1ECDn v\xE0o t\u1EEBng con s\u1ED1 \u0111\u1EC3 xem chi ti\u1EBFt."), " ");
  }
}
function ViewOtApplyPersonalSelfListComponent_ng_container_53_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 48);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 48);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 48);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 48);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 48);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 48);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 48);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r11 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r10.empId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r10.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r10.shiftName || d_r10.shiftNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r10.workTime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDetailDate(d_r10.arDateStr));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r10.itemName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r10.fromTimeStr);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r10.toTimeStr);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmtQty(d_r10.quantity));
  }
}
function ViewOtApplyPersonalSelfListComponent_ng_container_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ViewOtApplyPersonalSelfListComponent_ng_container_53_nz_alert_1_Template, 1, 1, "nz-alert", 37);
    \u0275\u0275elementStart(2, "nz-table", 38)(3, "thead")(4, "tr")(5, "th", 39);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 40);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 41);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 42);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 43);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 40);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 44);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 43);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th", 43);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th", 45);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "tbody");
    \u0275\u0275template(36, ViewOtApplyPersonalSelfListComponent_ng_container_53_tr_36_Template, 4, 4, "tr", 25)(37, ViewOtApplyPersonalSelfListComponent_ng_container_53_tr_37_Template, 21, 10, "tr", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.detailErrorMessage());
    \u0275\u0275advance();
    \u0275\u0275property("nzData", ctx_r1.detailRows())("nzLoading", ctx_r1.detailLoading())("nzShowPagination", false);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 16, "common.stt", "STT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 19, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 22, "common.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 25, "otsl.col.shift", "Ca"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 28, "otsl.col.workTime", "Th\u1EDDi gian l\xE0m vi\u1EC7c"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 31, "otsl.col.date", "Ng\xE0y"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 34, "otsl.col.otType", "T\u0103ng ca"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 37, "otsl.col.startTime", "Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 40, "otsl.col.endTime", "Th\u1EDDi gian k\u1EBFt th\xFAc"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 43, "otsl.col.duration", "Th\u1EDDi l\u01B0\u1EE3ng"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.detailLoading() && ctx_r1.detailRows().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.detailRows());
  }
}
var I18N_KEYS = [
  "otsl.label.startDate",
  "otsl.label.endDate",
  "otsl.modal.detailTitle",
  "otsl.col.shift",
  "otsl.col.workTime",
  "otsl.col.date",
  "otsl.col.otType",
  "otsl.col.startTime",
  "otsl.col.endTime",
  "otsl.col.duration",
  "otsl.msg.stt",
  "otsl.msg.empId",
  "otsl.msg.empName",
  "otsl.msg.deptName",
  "otsl.msg.total",
  "otsl.msg.noData",
  "otsl.msg.loadOtFailed",
  "otsl.msg.noDataToExport",
  "otsl.msg.noDataDetail",
  "otsl.msg.loadDetailFailed",
  "otsl.msg.selectHint",
  "common.search",
  "common.exportExcel",
  "common.stt",
  "common.empId",
  "common.empName",
  "common.totalRows"
];
var PAGE_SIZE_OPTIONS = [25, 50, 100];
var ViewOtApplyPersonalSelfListComponent = class _ViewOtApplyPersonalSelfListComponent {
  constructor(api, i18n) {
    this.api = api;
    this.i18n = i18n;
  }
  api;
  i18n;
  pageSizeOptions = PAGE_SIZE_OPTIONS;
  items = signal(
    [],
    ...ngDevMode ? [{ debugName: "items" }] : (
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
  detailVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "detailVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  detailTitle = signal(
    "",
    ...ngDevMode ? [{ debugName: "detailTitle" }] : (
      /* istanbul ignore next */
      []
    )
  );
  detailRows = signal(
    [],
    ...ngDevMode ? [{ debugName: "detailRows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  detailLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "detailLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  detailErrorMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "detailErrorMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  startDate = null;
  endDate = null;
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.setDefaultDateRange();
    this.loadItemsThenSearch();
  }
  search() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getSummary({ startDate: this.formatDmy(this.startDate), endDate: this.formatDmy(this.endDate) }).subscribe({
      next: (rows) => {
        this.rows.set(this.buildPivot(rows ?? []));
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("otsl.msg.loadOtFailed", "Kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c d\u1EEF li\u1EC7u t\xECnh h\xECnh t\u0103ng ca."));
        this.rows.set([]);
        this.loading.set(false);
      }
    });
  }
  /** Định dạng số lượng: bỏ số 0 vô nghĩa, giữ tối đa 2 chữ số thập phân - giống otslFmtQty() bản gốc. */
  fmtQty(v) {
    const n = parseFloat(String(v));
    if (isNaN(n) || n === 0)
      return "0";
    return n % 1 === 0 ? String(n) : n.toFixed(2).replace(/\.?0+$/, "");
  }
  /** arDateStr trả về từ backend theo định dạng YYYY/MM/DD - chuyển sang DD/MM/YYYY để hiển thị theo
   *  quy định định dạng ngày của dự án - đúng otslFmtDate() bản gốc. */
  formatDetailDate(s) {
    if (!s)
      return "";
    const p = s.split("/");
    return p.length === 3 ? `${p[2]}/${p[1]}/${p[0]}` : s;
  }
  openDetail(row, item) {
    this.detailTitle.set(item.itemName);
    this.detailRows.set([]);
    this.detailErrorMessage.set(null);
    this.detailVisible.set(true);
    if (!row.personId)
      return;
    this.detailLoading.set(true);
    this.api.getDetail(row.personId, item.itemNo, this.formatDmy(this.startDate), this.formatDmy(this.endDate)).subscribe({
      next: (rows) => {
        this.detailRows.set(rows ?? []);
        this.detailLoading.set(false);
      },
      error: () => {
        this.detailErrorMessage.set(this.i18n.t("otsl.msg.loadDetailFailed", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i."));
        this.detailLoading.set(false);
      }
    });
  }
  closeDetail() {
    this.detailVisible.set(false);
  }
  /** Xuất excel client-side (bản gốc dùng trick HTML-table .xls, không phải .xlsx thật) - dùng thư
   *  viện xlsx (SheetJS) để tạo đúng file .xlsx nhị phân. */
  exportExcel() {
    const rows = this.rows();
    if (!rows.length) {
      this.errorMessage.set(this.i18n.t("otsl.msg.noDataToExport", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u \u0111\u1EC3 xu\u1EA5t."));
      return;
    }
    const items = this.items();
    const headers = [
      this.i18n.t("otsl.msg.stt", "STT"),
      this.i18n.t("otsl.msg.empId", "M\xE3 NV"),
      this.i18n.t("otsl.msg.empName", "H\u1ECD t\xEAn"),
      this.i18n.t("otsl.msg.deptName", "Ph\xF2ng ban"),
      this.i18n.t("otsl.msg.total", "T\u1ED5ng"),
      ...items.map((it) => it.itemName)
    ];
    const dataRows = rows.map((r, i) => [
      i + 1,
      r.empId,
      r.localName,
      r.deptName,
      this.fmtQty(r.total),
      ...items.map((it) => this.fmtQty(r.items[it.itemNo] || 0))
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "TangCa");
    writeFileSync(workbook, "tinh_hinh_tang_ca_ca_nhan.xlsx");
  }
  /** Pivot dữ liệu thô (mỗi dòng 1 cặp personId/itemNo) theo personId - đúng otslPivot() bản gốc. */
  buildPivot(rows) {
    const map = /* @__PURE__ */ new Map();
    const order = [];
    for (const row of rows) {
      let entry = map.get(row.personId);
      if (!entry) {
        entry = { personId: row.personId, empId: row.empId, localName: row.localName, deptName: row.deptName, total: 0, items: {} };
        map.set(row.personId, entry);
        order.push(row.personId);
      }
      const qty = parseFloat(String(row.totalQuantity)) || 0;
      entry.items[row.itemNo] = qty;
      entry.total += qty;
    }
    return order.map((pid) => map.get(pid));
  }
  loadItemsThenSearch() {
    this.api.getItems().subscribe({
      next: (list) => {
        this.items.set(list ?? []);
        this.search();
      },
      error: () => {
        this.items.set([]);
        this.search();
      }
    });
  }
  /** Mặc định từ ngày 01 đến ngày cuối tháng hiện tại - đúng otslDefaultCurrentMonth() bản gốc. */
  setDefaultDateRange() {
    const now = /* @__PURE__ */ new Date();
    this.startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    this.endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  }
  formatDmy(d) {
    return d ? formatDate(d, "dd/MM/yyyy", "vi") : "";
  }
  static \u0275fac = function ViewOtApplyPersonalSelfListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewOtApplyPersonalSelfListComponent)(\u0275\u0275directiveInject(ViewOtApplyPersonalSelfListService), \u0275\u0275directiveInject(I18nService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewOtApplyPersonalSelfListComponent, selectors: [["app-view-ot-apply-personal-self-list"]], decls: 54, vars: 55, consts: [["votslTable", ""], ["votslTotalTpl", ""], ["votslZeroTpl", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", "align-items-end", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["name", "startDate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "endDate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], [1, "col-md-6", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "nzType", "default", "type", "button", 1, "btn-export", 3, "click"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [1, "table-scroll-wrapper"], ["nzShowSizeChanger", "", 1, "votsl-table", 3, "nzData", "nzLoading", "nzPageSize", "nzPageSizeOptions", "nzShowTotal"], [1, "votsl-sticky", "votsl-sticky-0", "text-center"], [1, "votsl-sticky", "votsl-sticky-1", "text-center"], [1, "votsl-sticky", "votsl-sticky-2"], [1, "votsl-sticky", "votsl-sticky-3"], [1, "votsl-num"], ["class", "votsl-num", 4, "ngFor", "ngForOf"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["nzWidth", "950px", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzBodyStyle", "nzFooter"], [4, "nzModalContent"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], [1, "text-center", "text-muted"], [1, "votsl-num", "text-center", "fw-bold"], ["class", "votsl-num text-center", 4, "ngFor", "ngForOf"], [1, "votsl-num", "text-center"], ["href", "javascript:void(0)", "class", "fw-bold", 3, "click", 4, "ngIf", "ngIfElse"], ["href", "javascript:void(0)", 1, "fw-bold", 3, "click"], [1, "text-muted"], ["nzType", "error", "class", "mb-2", 3, "nzMessage", 4, "ngIf"], ["nzSize", "small", 3, "nzData", "nzLoading", "nzShowPagination"], [1, "text-center", 2, "width", "50px"], [1, "text-center", 2, "width", "110px"], [2, "min-width", "140px"], [2, "min-width", "120px"], [1, "text-center", 2, "width", "130px"], [2, "min-width", "150px"], [1, "text-center", 2, "width", "90px"], ["nzType", "error", 1, "mb-2", 3, "nzMessage"], ["colspan", "10", 1, "text-center", "text-muted"], [1, "text-center"]], template: function ViewOtApplyPersonalSelfListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "nz-card", 5)(3, "form", 6);
      \u0275\u0275listener("ngSubmit", function ViewOtApplyPersonalSelfListComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 7)(5, "label", 8);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "nz-date-picker", 9);
      \u0275\u0275twoWayListener("ngModelChange", function ViewOtApplyPersonalSelfListComponent_Template_nz_date_picker_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.startDate, $event) || (ctx.startDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 7)(10, "label", 8);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "nz-date-picker", 10);
      \u0275\u0275twoWayListener("ngModelChange", function ViewOtApplyPersonalSelfListComponent_Template_nz_date_picker_ngModelChange_13_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.endDate, $event) || (ctx.endDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 11)(15, "button", 12);
      \u0275\u0275element(16, "i", 13);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 14);
      \u0275\u0275listener("click", function ViewOtApplyPersonalSelfListComponent_Template_button_click_19_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(20, "i", 15);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(23, "nz-card");
      \u0275\u0275template(24, ViewOtApplyPersonalSelfListComponent_nz_alert_24_Template, 1, 1, "nz-alert", 16);
      \u0275\u0275elementStart(25, "div", 17)(26, "nz-table", 18, 0)(28, "thead")(29, "tr")(30, "th", 19);
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th", 20);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "th", 21);
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "th", 22);
      \u0275\u0275text(40);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "th", 23);
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(45, ViewOtApplyPersonalSelfListComponent_th_45_Template, 2, 1, "th", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "tbody");
      \u0275\u0275template(47, ViewOtApplyPersonalSelfListComponent_tr_47_Template, 4, 5, "tr", 25)(48, ViewOtApplyPersonalSelfListComponent_tr_48_Template, 12, 9, "tr", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275template(49, ViewOtApplyPersonalSelfListComponent_ng_template_49_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(51, "nz-modal", 27);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewOtApplyPersonalSelfListComponent_Template_nz_modal_nzOnCancel_51_listener() {
        return ctx.closeDetail();
      });
      \u0275\u0275template(53, ViewOtApplyPersonalSelfListComponent_ng_container_53_Template, 38, 46, "ng-container", 28);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const votslTable_r12 = \u0275\u0275reference(27);
      const votslTotalTpl_r13 = \u0275\u0275reference(50);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 24, "otsl.label.startDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.startDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 27, "otsl.label.endDate", "Ng\xE0y k\u1EBFt th\xFAc"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.endDate);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(18, 30, "common.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(22, 33, "common.exportExcel", "Xu\u1EA5t Excel"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance(2);
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", votslTotalTpl_r13);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 36, "otsl.msg.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 39, "otsl.msg.empId", "M\xE3 NV"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(38, 42, "otsl.msg.empName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 45, "otsl.msg.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 48, "otsl.msg.total", "T\u1ED5ng"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.items());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.loading() && votslTable_r12.data.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", votslTable_r12.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.detailVisible())("nzTitle", ctx.detailTitle() || \u0275\u0275pipeBind2(52, 51, "otsl.modal.detailTitle", "Chi ti\u1EBFt t\u0103ng ca"))("nzBodyStyle", \u0275\u0275pureFunction0(54, _c0))("nzFooter", null);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzDatePickerModule, NzDatePickerComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\n.table-scroll-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.votsl-table[_ngcontent-%COMP%] {\n  table-layout: fixed;\n}\n.votsl-sticky[_ngcontent-%COMP%] {\n  position: sticky;\n  z-index: 2;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  background-color: #fff;\n}\n.votsl-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .votsl-sticky[_ngcontent-%COMP%] {\n  background-color: #e6f4ff;\n  z-index: 3;\n}\n.votsl-sticky-0[_ngcontent-%COMP%] {\n  width: 40px;\n  left: 0;\n}\n.votsl-sticky-1[_ngcontent-%COMP%] {\n  width: 90px;\n  left: 40px;\n}\n.votsl-sticky-2[_ngcontent-%COMP%] {\n  width: 160px;\n  left: 130px;\n}\n.votsl-sticky-3[_ngcontent-%COMP%] {\n  width: 150px;\n  left: 290px;\n  box-shadow: 6px 0 10px -2px rgba(0, 0, 0, .25);\n}\n.votsl-num[_ngcontent-%COMP%] {\n  width: 60px;\n}\n.votsl-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.votsl-num[_ngcontent-%COMP%] {\n  white-space: normal;\n  word-break: break-word;\n}\n.btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=view-ot-apply-personal-self-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewOtApplyPersonalSelfListComponent, [{
    type: Component,
    args: [{ selector: "app-view-ot-apply-personal-self-list", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzButtonModule,
      NzDatePickerModule,
      NzModalModule,
      NzAlertModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3 align-items-end" (ngSubmit)="search()">
        <div class="col-md-3">
          <label class="form-label">{{ 'otsl.label.startDate' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="startDate" name="startDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'otsl.label.endDate' | translate:'Ng\xE0y k\u1EBFt th\xFAc' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="endDate" name="endDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
        </div>
        <div class="col-md-6 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'common.search' | translate:'Tra c\u1EE9u' }}
          </button>
          <button nz-button nzType="default" type="button" class="btn-export" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'common.exportExcel' | translate:'Xu\u1EA5t Excel' }}
          </button>
        </div>
      </form>
    </nz-card>

    <!-- B\u1EA3ng pivot: m\u1ED7i h\xE0ng = ch\xEDnh nh\xE2n vi\xEAn \u0111ang \u0111\u0103ng nh\u1EADp, c\u1ED9t t\u0103ng ca dynamic t\u1EEB AR_ITEM -->
    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <div class="table-scroll-wrapper">
        <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" nzShowSizeChanger
                  [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="votslTotalTpl"
                  class="votsl-table" #votslTable>
          <thead>
            <tr>
              <th class="votsl-sticky votsl-sticky-0 text-center">{{ 'otsl.msg.stt' | translate:'STT' }}</th>
              <th class="votsl-sticky votsl-sticky-1 text-center">{{ 'otsl.msg.empId' | translate:'M\xE3 NV' }}</th>
              <th class="votsl-sticky votsl-sticky-2">{{ 'otsl.msg.empName' | translate:'H\u1ECD t\xEAn' }}</th>
              <th class="votsl-sticky votsl-sticky-3">{{ 'otsl.msg.deptName' | translate:'Ph\xF2ng ban' }}</th>
              <th class="votsl-num">{{ 'otsl.msg.total' | translate:'T\u1ED5ng' }}</th>
              <th class="votsl-num" *ngFor="let it of items()">{{ it.itemName }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="!loading() && votslTable.data.length === 0">
              <td [attr.colspan]="5 + items().length" class="text-center text-muted">
                {{ 'otsl.msg.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}
              </td>
            </tr>
            <tr *ngFor="let row of votslTable.data; let i = index">
              <td class="votsl-sticky votsl-sticky-0 text-center">{{ i + 1 }}</td>
              <td class="votsl-sticky votsl-sticky-1 text-center" [attr.title]="row.empId || null">{{ row.empId }}</td>
              <td class="votsl-sticky votsl-sticky-2" [attr.title]="row.localName || null">{{ row.localName }}</td>
              <td class="votsl-sticky votsl-sticky-3" [attr.title]="row.deptName || null">{{ row.deptName }}</td>
              <td class="votsl-num text-center fw-bold">{{ fmtQty(row.total) }}</td>
              <td class="votsl-num text-center" *ngFor="let it of items()">
                <a *ngIf="(row.items[it.itemNo] || 0) > 0; else votslZeroTpl" href="javascript:void(0)"
                   class="fw-bold" (click)="openDetail(row, it)">{{ fmtQty(row.items[it.itemNo]) }}</a>
                <ng-template #votslZeroTpl><span class="text-muted">0</span></ng-template>
              </td>
            </tr>
          </tbody>
          <ng-template #votslTotalTpl let-total>
            {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
          </ng-template>
        </nz-table>
      </div>
    </nz-card>
  </div>
</div>

<!-- Modal chi ti\u1EBFt t\u0103ng ca -->
<nz-modal [nzVisible]="detailVisible()"
          [nzTitle]="detailTitle() || ('otsl.modal.detailTitle' | translate:'Chi ti\u1EBFt t\u0103ng ca')"
          nzWidth="950px" [nzBodyStyle]="{ 'max-height': '70vh', 'overflow-y': 'auto' }"
          (nzOnCancel)="closeDetail()" [nzFooter]="null">
  <ng-container *nzModalContent>
    <nz-alert *ngIf="detailErrorMessage()" nzType="error" [nzMessage]="detailErrorMessage() ?? ''" class="mb-2"></nz-alert>
    <nz-table [nzData]="detailRows()" [nzLoading]="detailLoading()" [nzShowPagination]="false" nzSize="small">
      <thead>
        <tr>
          <th class="text-center" style="width:50px">{{ 'common.stt' | translate:'STT' }}</th>
          <th class="text-center" style="width:110px">{{ 'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
          <th style="min-width:140px">{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
          <th style="min-width:120px">{{ 'otsl.col.shift' | translate:'Ca' }}</th>
          <th class="text-center" style="width:130px">{{ 'otsl.col.workTime' | translate:'Th\u1EDDi gian l\xE0m vi\u1EC7c' }}</th>
          <th class="text-center" style="width:110px">{{ 'otsl.col.date' | translate:'Ng\xE0y' }}</th>
          <th style="min-width:150px">{{ 'otsl.col.otType' | translate:'T\u0103ng ca' }}</th>
          <th class="text-center" style="width:130px">{{ 'otsl.col.startTime' | translate:'Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u' }}</th>
          <th class="text-center" style="width:130px">{{ 'otsl.col.endTime' | translate:'Th\u1EDDi gian k\u1EBFt th\xFAc' }}</th>
          <th class="text-center" style="width:90px">{{ 'otsl.col.duration' | translate:'Th\u1EDDi l\u01B0\u1EE3ng' }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngIf="!detailLoading() && detailRows().length === 0">
          <td colspan="10" class="text-center text-muted">
            {{ 'otsl.msg.selectHint' | translate:'Ch\u1ECDn v\xE0o t\u1EEBng con s\u1ED1 \u0111\u1EC3 xem chi ti\u1EBFt.' }}
          </td>
        </tr>
        <tr *ngFor="let d of detailRows(); let i = index">
          <td class="text-center">{{ i + 1 }}</td>
          <td class="text-center">{{ d.empId }}</td>
          <td>{{ d.localName }}</td>
          <td class="text-center">{{ d.shiftName || d.shiftNo }}</td>
          <td class="text-center">{{ d.workTime }}</td>
          <td class="text-center">{{ formatDetailDate(d.arDateStr) }}</td>
          <td>{{ d.itemName }}</td>
          <td class="text-center">{{ d.fromTimeStr }}</td>
          <td class="text-center">{{ d.toTimeStr }}</td>
          <td class="text-center">{{ fmtQty(d.quantity) }}</td>
        </tr>
      </tbody>
    </nz-table>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-ot-apply-personal-self-list/view-ot-apply-personal-self-list.component.css */\n.table-scroll-wrapper {\n  overflow-x: auto;\n}\n.votsl-table {\n  table-layout: fixed;\n}\n.votsl-sticky {\n  position: sticky;\n  z-index: 2;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  background-color: #fff;\n}\n.votsl-table thead .votsl-sticky {\n  background-color: #e6f4ff;\n  z-index: 3;\n}\n.votsl-sticky-0 {\n  width: 40px;\n  left: 0;\n}\n.votsl-sticky-1 {\n  width: 90px;\n  left: 40px;\n}\n.votsl-sticky-2 {\n  width: 160px;\n  left: 130px;\n}\n.votsl-sticky-3 {\n  width: 150px;\n  left: 290px;\n  box-shadow: 6px 0 10px -2px rgba(0, 0, 0, .25);\n}\n.votsl-num {\n  width: 60px;\n}\n.votsl-table thead th.votsl-num {\n  white-space: normal;\n  word-break: break-word;\n}\n.btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=view-ot-apply-personal-self-list.component.css.map */\n"] }]
  }], () => [{ type: ViewOtApplyPersonalSelfListService }, { type: I18nService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewOtApplyPersonalSelfListComponent, { className: "ViewOtApplyPersonalSelfListComponent", filePath: "src/app/view-ot-apply-personal-self-list/view-ot-apply-personal-self-list.component.ts", lineNumber: 66 });
})();
export {
  ViewOtApplyPersonalSelfListComponent
};
//# debugId=59a79fe8-bbee-53d9-a9f1-dcd19e7705ca
//# sourceMappingURL=chunk-5BRIOEQT.js.map
