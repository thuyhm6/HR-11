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

// src/app/view-ar-personal-list/view-ar-personal-list.service.ts
var API_BASE = "/ess/viewDept/api/arPersonalList";
var ViewArPersonalListService = class _ViewArPersonalListService {
  constructor(http) {
    this.http = http;
  }
  http;
  getItems(itemGroup) {
    return this.http.get(`${API_BASE}/items`, {
      params: new HttpParams().set("itemGroup", itemGroup),
      withCredentials: true
    });
  }
  getSummary(params) {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value)
        httpParams = httpParams.set(key, value);
    }
    return this.http.get(`${API_BASE}/summary`, {
      params: httpParams,
      withCredentials: true
    });
  }
  getDetail(personId, itemId, startDate, endDate) {
    let httpParams = new HttpParams().set("personId", personId).set("itemId", itemId);
    if (startDate)
      httpParams = httpParams.set("startDate", startDate);
    if (endDate)
      httpParams = httpParams.set("endDate", endDate);
    return this.http.get(`${API_BASE}/detail`, {
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
  getAuthorizedDepartments() {
    return this.http.get("/ar/attendanceSettings/api/arSupervisor/authorized-departments", {
      withCredentials: true
    });
  }
  static \u0275fac = function ViewArPersonalListService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewArPersonalListService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewArPersonalListService, factory: _ViewArPersonalListService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewArPersonalListService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-ar-personal-list/view-ar-personal-list.component.ts
var _c0 = () => ({ "max-height": "70vh", "overflow-y": "auto" });
function ViewArPersonalListComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.deptTreeErrorMessage());
  }
}
function ViewArPersonalListComponent_nz_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 37);
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r3.codeNo)("nzLabel", c_r3.codeName);
  }
}
function ViewArPersonalListComponent_nz_alert_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 38);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ViewArPersonalListComponent_th_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const it_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(it_r4.itemName);
  }
}
function ViewArPersonalListComponent_tr_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 39);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 7 + ctx_r1.items().length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, "vapl.msg.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"), " ");
  }
}
function ViewArPersonalListComponent_tr_74_td_15_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 44);
    \u0275\u0275listener("click", function ViewArPersonalListComponent_tr_74_td_15_a_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const it_r6 = \u0275\u0275nextContext().$implicit;
      const row_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDetail(row_r7, it_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const it_r6 = \u0275\u0275nextContext().$implicit;
    const row_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fmtQty(row_r7[it_r6.itemId]));
  }
}
function ViewArPersonalListComponent_tr_74_td_15_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1, "0");
    \u0275\u0275elementEnd();
  }
}
function ViewArPersonalListComponent_tr_74_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 42);
    \u0275\u0275template(1, ViewArPersonalListComponent_tr_74_td_15_a_1_Template, 2, 1, "a", 43)(2, ViewArPersonalListComponent_tr_74_td_15_ng_template_2_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const it_r6 = ctx.$implicit;
    const vaplZeroTpl_r8 = \u0275\u0275reference(3);
    const row_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.qty(row_r7, it_r6.itemId) > 0)("ngIfElse", vaplZeroTpl_r8);
  }
}
function ViewArPersonalListComponent_tr_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 27);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 28);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 29);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 40);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 40);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, ViewArPersonalListComponent_tr_74_td_15_Template, 4, 2, "td", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r9 + 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r7["EMPID"] || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r7["EMPID"]);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r7["LOCAL_NAME"] || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r7["LOCAL_NAME"]);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r7["DEPT_NAME"] || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r7["DEPT_NAME"]);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r7["POSITION_NAME"] || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r7["POSITION_NAME"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmtQty(row_r7["NORMAL_WORK"]));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmtQty(row_r7["LATE_EARLY_GO_TOTAL"]));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.items());
  }
}
function ViewArPersonalListComponent_ng_template_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r10 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r10, " ");
  }
}
function ViewArPersonalListComponent_ng_container_79_nz_alert_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 55);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzMessage", ctx_r1.detailErrorMessage() ?? "");
  }
}
function ViewArPersonalListComponent_ng_container_79_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 56);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "apsl.detail.hint", "Ch\u1ECDn v\xE0o t\u1EEBng con s\u1ED1 \u0111\u1EC3 xem chi ti\u1EBFt."), " ");
  }
}
function ViewArPersonalListComponent_ng_container_79_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 57);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 57);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 57);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 57);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 57);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 57);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 57);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r12 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r11.empId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r11.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r11.shiftName || d_r11.shiftNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDetailDate(d_r11.arDateStr));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r11.itemName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r11.fromTimeStr);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r11.toTimeStr);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmtQty(d_r11.quantity));
  }
}
function ViewArPersonalListComponent_ng_container_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ViewArPersonalListComponent_ng_container_79_nz_alert_1_Template, 1, 1, "nz-alert", 46);
    \u0275\u0275elementStart(2, "nz-table", 47)(3, "thead")(4, "tr")(5, "th", 48);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 49);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 50);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 51);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 49);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 52);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 53);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 53);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th", 54);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "tbody");
    \u0275\u0275template(33, ViewArPersonalListComponent_ng_container_79_tr_33_Template, 4, 4, "tr", 32)(34, ViewArPersonalListComponent_ng_container_79_tr_34_Template, 19, 9, "tr", 33);
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 15, "common.stt", "STT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 18, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 21, "common.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 24, "apsl.detail.col.shift", "Ca"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 27, "apsl.detail.col.date", "Ng\xE0y"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 30, "apsl.detail.col.leaveType", "Lo\u1EA1i ngh\u1EC9 ph\u1EE5 l\u1EE5c"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 33, "apsl.detail.col.startTime", "Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 36, "apsl.detail.col.endTime", "Th\u1EDDi gian k\u1EBFt th\xFAc"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 39, "apsl.detail.col.duration", "Th\u1EDDi l\u01B0\u1EE3ng"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.detailLoading() && ctx_r1.detailRows().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.detailRows());
  }
}
var ITEM_GROUP = "!1433";
var I18N_KEYS = [
  "essDept.dept",
  "vdp.search.dept.placeholder",
  "essDept.keyword",
  "vdp.search.empKeyword.placeholder",
  "vapl.label.empType",
  "common.selectAll",
  "vapl.label.startDate",
  "vapl.label.endDate",
  "essDept.search",
  "essDept.exportExcel",
  "common.stt",
  "common.empId",
  "common.empName",
  "common.deptName",
  "common.totalRows",
  "common.loadFail",
  "vapl.msg.position",
  "vapl.msg.normalWork",
  "vapl.msg.lateEarlyGoTotal",
  "vapl.msg.noData",
  "vapl.msg.loadFailed",
  "vapl.msg.noDataExport",
  "apsl.modal.title",
  "apsl.detail.col.shift",
  "apsl.detail.col.date",
  "apsl.detail.col.leaveType",
  "apsl.detail.col.startTime",
  "apsl.detail.col.endTime",
  "apsl.detail.col.duration",
  "apsl.detail.hint",
  "apsl.msg.noDataDetail",
  "apsl.msg.loadDetailFailed",
  "mep.msg.loadDeptFailed"
];
var PAGE_SIZE_OPTIONS = [25, 50, 100];
var ViewArPersonalListComponent = class _ViewArPersonalListComponent {
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
  empTypeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "empTypeOptions" }] : (
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
  /** id -> danh sách id con trực tiếp - dùng để mở rộng lựa chọn cây phòng ban khi tra cứu (xem search()). */
  deptChildrenMap = /* @__PURE__ */ new Map();
  keyword = "";
  deptNos = [];
  empTypeCode = null;
  startDate = null;
  endDate = null;
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
    this.loadEmpTypeOptions();
    this.setDefaultDateRange();
    this.loadItemsThenSearch();
  }
  search() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getSummary({
      keyword: this.keyword,
      deptNos: this.expandDeptSelection(this.deptNos).join(","),
      empTypeCode: this.empTypeCode ?? "",
      startDate: this.formatYmd(this.startDate),
      endDate: this.formatYmd(this.endDate),
      itemGroup: ITEM_GROUP
    }).subscribe({
      next: (rows) => {
        this.rows.set(rows ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("vapl.msg.loadFailed", "L\u1ED7i t\u1EA3i d\u1EEF li\u1EC7u ch\u1EA5m c\xF4ng."));
        this.rows.set([]);
        this.loading.set(false);
      }
    });
  }
  /** Số lượng cột động - trả về 0 nếu không lớn hơn 0, dùng để quyết định hiện link chi tiết hay không. */
  qty(row, itemId) {
    return parseFloat(String(row[itemId])) || 0;
  }
  /** Định dạng số lượng: bỏ số 0 vô nghĩa, giữ tối đa 2 chữ số thập phân - giống bản Thymeleaf gốc. */
  fmtQty(v) {
    const n = parseFloat(String(v));
    if (isNaN(n) || n === 0)
      return "0";
    return n % 1 === 0 ? String(n) : n.toFixed(2).replace(/\.?0+$/, "");
  }
  /** arDateStr trả về từ backend theo định dạng YYYY/MM/DD (so sánh trực tiếp với AR_DATE_STR) -
   *  chuyển sang DD/MM/YYYY để hiển thị theo quy định định dạng ngày của dự án. */
  formatDetailDate(s) {
    if (!s)
      return "";
    const p = s.split("/");
    return p.length === 3 ? `${p[2]}/${p[1]}/${p[0]}` : s;
  }
  openDetail(row, item) {
    const personId = String(row["PERSON_ID"] ?? "");
    this.detailTitle.set(item.itemName);
    this.detailRows.set([]);
    this.detailErrorMessage.set(null);
    this.detailVisible.set(true);
    if (!personId)
      return;
    this.detailLoading.set(true);
    this.api.getDetail(personId, item.itemId, this.formatYmd(this.startDate), this.formatYmd(this.endDate)).subscribe({
      next: (rows) => {
        this.detailRows.set(rows ?? []);
        this.detailLoading.set(false);
      },
      error: () => {
        this.detailErrorMessage.set(this.i18n.t("apsl.msg.loadDetailFailed", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i."));
        this.detailLoading.set(false);
      }
    });
  }
  closeDetail() {
    this.detailVisible.set(false);
  }
  /** Xuất excel client-side (bản gốc dùng trick HTML-table .xls, không phải .xlsx thật) - dùng thư
   *  viện xlsx (SheetJS) để tạo đúng file .xlsx nhị phân, giống manage-emp-position-info. */
  exportExcel() {
    const items = this.items();
    const headers = [
      this.i18n.t("common.stt", "STT"),
      this.i18n.t("common.empId", "M\xE3 nh\xE2n vi\xEAn"),
      this.i18n.t("common.empName", "H\u1ECD t\xEAn"),
      this.i18n.t("common.deptName", "Ph\xF2ng ban"),
      this.i18n.t("vapl.msg.position", "Ch\u1EE9c v\u1EE5"),
      this.i18n.t("vapl.msg.normalWork", "T\u1ED5ng gi\u1EDD c\xF4ng"),
      this.i18n.t("vapl.msg.lateEarlyGoTotal", "T\u1ED5ng (mu\u1ED9n/s\u1EDBm/ra ngo\xE0i)"),
      ...items.map((it) => it.itemName)
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      r["EMPID"],
      r["LOCAL_NAME"],
      r["DEPT_NAME"],
      r["POSITION_NAME"],
      this.fmtQty(r["NORMAL_WORK"]),
      this.fmtQty(r["LATE_EARLY_GO_TOTAL"]),
      ...items.map((it) => this.fmtQty(r[it.itemId]))
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "ChamCong");
    writeFileSync(workbook, "tinh_hinh_cham_cong_nhan_vien.xlsx");
  }
  loadItemsThenSearch() {
    this.api.getItems(ITEM_GROUP).subscribe({
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
  /** Mặc định: ngày 25 tháng trước đến ngày 24 tháng này - giống bản Thymeleaf gốc (vaplDefaultDateRange). */
  setDefaultDateRange() {
    const now = /* @__PURE__ */ new Date();
    const y = now.getFullYear();
    const m = now.getMonth();
    const prevY = m === 0 ? y - 1 : y;
    const prevM = m === 0 ? 11 : m - 1;
    this.startDate = new Date(prevY, prevM, 25);
    this.endDate = new Date(y, m, 24);
  }
  formatYmd(d) {
    return d ? formatDate(d, "yyyy/MM/dd", "vi") : "";
  }
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
   *  như widget DeptTree.js gốc, nên phải tự mở rộng xuống các phòng ban con trước khi gửi lên backend
   *  (giống hệt lý do trong manage-emp-position-info.component.ts). */
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
  loadEmpTypeOptions() {
    this.api.getCodeList("13864").subscribe((list) => this.empTypeOptions.set(list ?? []));
  }
  static \u0275fac = function ViewArPersonalListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewArPersonalListComponent)(\u0275\u0275directiveInject(ViewArPersonalListService), \u0275\u0275directiveInject(I18nService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewArPersonalListComponent, selectors: [["app-view-ar-personal-list"]], decls: 80, vars: 95, consts: [["vaplTable", ""], ["vaplTotalTpl", ""], ["vaplZeroTpl", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", "align-items-end", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["name", "deptNos", "nzCheckable", "", "nzShowSearch", "", "nzAllowClear", "", "nzDropdownClassName", "vapl-dept-tree-dropdown", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["class", "text-danger small mt-1", 4, "ngIf"], ["nz-input", "", "name", "keyword", 3, "ngModelChange", "ngModel", "placeholder"], [1, "col-md-2"], ["name", "empTypeCode", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["name", "startDate", "nzFormat", "yyyy/MM/dd", 1, "w-100", 3, "ngModelChange", "ngModel", "nzAllowClear"], ["name", "endDate", "nzFormat", "yyyy/MM/dd", 1, "w-100", 3, "ngModelChange", "ngModel", "nzAllowClear"], [1, "col-12", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "nzType", "default", "type", "button", 1, "btn-export", 3, "click"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [1, "table-scroll-wrapper"], ["nzShowSizeChanger", "", 1, "vapl-table", 3, "nzData", "nzLoading", "nzPageSize", "nzPageSizeOptions", "nzShowTotal"], [1, "vapl-sticky", "vapl-sticky-0", "text-center"], [1, "vapl-sticky", "vapl-sticky-1", "text-center"], [1, "vapl-sticky", "vapl-sticky-2"], [1, "vapl-sticky", "vapl-sticky-3"], [1, "vapl-nowrap"], [1, "vapl-num"], ["class", "vapl-num", 4, "ngFor", "ngForOf"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["nzWidth", "900px", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzBodyStyle", "nzFooter"], [4, "nzModalContent"], [1, "text-danger", "small", "mt-1"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], [1, "text-center", "text-muted"], [1, "vapl-num", "text-center", "fw-bold"], ["class", "vapl-num text-center", 4, "ngFor", "ngForOf"], [1, "vapl-num", "text-center"], ["href", "javascript:void(0)", "class", "fw-bold", 3, "click", 4, "ngIf", "ngIfElse"], ["href", "javascript:void(0)", 1, "fw-bold", 3, "click"], [1, "text-muted"], ["nzType", "error", "class", "mb-2", 3, "nzMessage", 4, "ngIf"], ["nzSize", "small", 3, "nzData", "nzLoading", "nzShowPagination"], [1, "text-center", 2, "width", "50px"], [1, "text-center", 2, "width", "110px"], [2, "min-width", "140px"], [2, "min-width", "120px"], [2, "min-width", "150px"], [1, "text-center", 2, "width", "120px"], [1, "text-center", 2, "width", "90px"], ["nzType", "error", 1, "mb-2", 3, "nzMessage"], ["colspan", "9", 1, "text-center", "text-muted"], [1, "text-center"]], template: function ViewArPersonalListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "nz-card", 5)(3, "form", 6);
      \u0275\u0275listener("ngSubmit", function ViewArPersonalListComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 7)(5, "label", 8);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "nz-tree-select", 9);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewArPersonalListComponent_Template_nz_tree_select_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.deptNos, $event) || (ctx.deptNos = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275template(10, ViewArPersonalListComponent_div_10_Template, 2, 1, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 7)(12, "label", 8);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "input", 11);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewArPersonalListComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.keyword, $event) || (ctx.keyword = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 12)(18, "label", 8);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "nz-select", 13);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewArPersonalListComponent_Template_nz_select_ngModelChange_21_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.empTypeCode, $event) || (ctx.empTypeCode = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(23, ViewArPersonalListComponent_nz_option_23_Template, 1, 2, "nz-option", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 12)(25, "label", 8);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "nz-date-picker", 15);
      \u0275\u0275twoWayListener("ngModelChange", function ViewArPersonalListComponent_Template_nz_date_picker_ngModelChange_28_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.startDate, $event) || (ctx.startDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 12)(30, "label", 8);
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "nz-date-picker", 16);
      \u0275\u0275twoWayListener("ngModelChange", function ViewArPersonalListComponent_Template_nz_date_picker_ngModelChange_33_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.endDate, $event) || (ctx.endDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 17)(35, "button", 18);
      \u0275\u0275element(36, "i", 19);
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "button", 20);
      \u0275\u0275listener("click", function ViewArPersonalListComponent_Template_button_click_39_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(40, "i", 21);
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(43, "nz-card");
      \u0275\u0275template(44, ViewArPersonalListComponent_nz_alert_44_Template, 1, 1, "nz-alert", 22);
      \u0275\u0275elementStart(45, "div", 23)(46, "nz-table", 24, 0)(48, "thead")(49, "tr")(50, "th", 25);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "th", 26);
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "th", 27);
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "th", 28);
      \u0275\u0275text(60);
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "th", 29);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "th", 30);
      \u0275\u0275text(66);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "th", 30);
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(71, ViewArPersonalListComponent_th_71_Template, 2, 1, "th", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "tbody");
      \u0275\u0275template(73, ViewArPersonalListComponent_tr_73_Template, 4, 5, "tr", 32)(74, ViewArPersonalListComponent_tr_74_Template, 16, 12, "tr", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275template(75, ViewArPersonalListComponent_ng_template_75_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(77, "nz-modal", 34);
      \u0275\u0275pipe(78, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewArPersonalListComponent_Template_nz_modal_nzOnCancel_77_listener() {
        return ctx.closeDetail();
      });
      \u0275\u0275template(79, ViewArPersonalListComponent_ng_container_79_Template, 35, 42, "ng-container", 35);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const vaplTable_r13 = \u0275\u0275reference(47);
      const vaplTotalTpl_r14 = \u0275\u0275reference(76);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 40, "essDept.dept", "Ph\xF2ng ban"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzNodes", ctx.deptNodes());
      \u0275\u0275twoWayProperty("ngModel", ctx.deptNos);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(9, 43, "vdp.search.dept.placeholder", "Ch\u1ECDn ph\xF2ng ban"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.deptTreeErrorMessage());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 46, "essDept.keyword", "M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.keyword);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(16, 49, "vdp.search.empKeyword.placeholder", "Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 52, "vapl.label.empType", "Lo\u1EA1i nh\xE2n vi\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.empTypeCode);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(22, 55, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.empTypeOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 58, "vapl.label.startDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.startDate);
      \u0275\u0275property("nzAllowClear", false);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 61, "vapl.label.endDate", "Ng\xE0y k\u1EBFt th\xFAc"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.endDate);
      \u0275\u0275property("nzAllowClear", false);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(38, 64, "essDept.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(42, 67, "essDept.exportExcel", "Xu\u1EA5t Excel"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance(2);
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", vaplTotalTpl_r14);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(52, 70, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(55, 73, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(58, 76, "common.empName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(61, 79, "common.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(64, 82, "vapl.msg.position", "Ch\u1EE9c v\u1EE5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(67, 85, "vapl.msg.normalWork", "T\u1ED5ng gi\u1EDD c\xF4ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(70, 88, "vapl.msg.lateEarlyGoTotal", "T\u1ED5ng (mu\u1ED9n/s\u1EDBm/ra ngo\xE0i)"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.items());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.loading() && vaplTable_r13.data.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", vaplTable_r13.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.detailVisible())("nzTitle", ctx.detailTitle() || \u0275\u0275pipeBind2(78, 91, "apsl.modal.title", "Chi ti\u1EBFt ch\u1EA5m c\xF4ng"))("nzBodyStyle", \u0275\u0275pureFunction0(94, _c0))("nzFooter", null);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzDatePickerModule, NzDatePickerComponent, NzTreeSelectModule, NzTreeSelectComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\n.table-scroll-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.vapl-table[_ngcontent-%COMP%] {\n  table-layout: fixed;\n}\n.vapl-sticky[_ngcontent-%COMP%] {\n  position: sticky;\n  z-index: 2;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  background-color: #fff;\n}\n.vapl-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .vapl-sticky[_ngcontent-%COMP%] {\n  background-color: #e6f4ff;\n  z-index: 3;\n}\n.vapl-sticky-0[_ngcontent-%COMP%] {\n  width: 40px;\n  left: 0;\n}\n.vapl-sticky-1[_ngcontent-%COMP%] {\n  width: 90px;\n  left: 40px;\n}\n.vapl-sticky-2[_ngcontent-%COMP%] {\n  width: 160px;\n  left: 130px;\n}\n.vapl-sticky-3[_ngcontent-%COMP%] {\n  width: 150px;\n  left: 290px;\n  box-shadow: 6px 0 10px -2px rgba(0, 0, 0, .25);\n}\n.vapl-nowrap[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.vapl-num[_ngcontent-%COMP%] {\n  width: 60px;\n}\n.vapl-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.vapl-num[_ngcontent-%COMP%] {\n  white-space: normal;\n  word-break: break-word;\n}\n.btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=view-ar-personal-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewArPersonalListComponent, [{
    type: Component,
    args: [{ selector: "app-view-ar-personal-list", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzSelectModule,
      NzButtonModule,
      NzDatePickerModule,
      NzTreeSelectModule,
      NzModalModule,
      NzAlertModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm - \u0111\u1EE9ng im khi cu\u1ED9n (xem .sticky-filter-card trong styles.css) -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3 align-items-end" (ngSubmit)="search()">
        <div class="col-md-3">
          <label class="form-label">{{ 'essDept.dept' | translate:'Ph\xF2ng ban' }}</label>
          <nz-tree-select class="w-100" [nzNodes]="deptNodes()" [(ngModel)]="deptNos" name="deptNos"
                           nzCheckable nzShowSearch nzAllowClear
                           [nzPlaceHolder]="'vdp.search.dept.placeholder' | translate:'Ch\u1ECDn ph\xF2ng ban'"
                           nzDropdownClassName="vapl-dept-tree-dropdown"></nz-tree-select>
          <div *ngIf="deptTreeErrorMessage()" class="text-danger small mt-1">{{ deptTreeErrorMessage() }}</div>
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'essDept.keyword' | translate:'M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn' }}</label>
          <input nz-input [(ngModel)]="keyword" name="keyword"
                 [placeholder]="'vdp.search.empKeyword.placeholder' | translate:'Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn'">
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'vapl.label.empType' | translate:'Lo\u1EA1i nh\xE2n vi\xEAn' }}</label>
          <nz-select class="w-100" [(ngModel)]="empTypeCode" name="empTypeCode" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let c of empTypeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'vapl.label.startDate' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="startDate" name="startDate" nzFormat="yyyy/MM/dd"
                           [nzAllowClear]="false"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'vapl.label.endDate' | translate:'Ng\xE0y k\u1EBFt th\xFAc' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="endDate" name="endDate" nzFormat="yyyy/MM/dd"
                           [nzAllowClear]="false"></nz-date-picker>
        </div>
        <div class="col-12 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'essDept.search' | translate:'Tra c\u1EE9u' }}
          </button>
          <button nz-button nzType="default" type="button" class="btn-export" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'essDept.exportExcel' | translate:'Xu\u1EA5t Excel' }}
          </button>
        </div>
      </form>
    </nz-card>

    <!-- B\u1EA3ng: m\u1ED7i h\xE0ng = 1 nh\xE2n vi\xEAn, c\u1ED9t ch\u1EA5m c\xF4ng dynamic t\u1EEB AR_ITEM -->
    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <div class="table-scroll-wrapper">
        <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" nzShowSizeChanger
                  [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="vaplTotalTpl"
                  class="vapl-table" #vaplTable>
          <thead>
            <tr>
              <th class="vapl-sticky vapl-sticky-0 text-center">{{ 'common.stt' | translate:'STT' }}</th>
              <th class="vapl-sticky vapl-sticky-1 text-center">{{ 'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
              <th class="vapl-sticky vapl-sticky-2">{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
              <th class="vapl-sticky vapl-sticky-3">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
              <th class="vapl-nowrap">{{ 'vapl.msg.position' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
              <th class="vapl-num">{{ 'vapl.msg.normalWork' | translate:'T\u1ED5ng gi\u1EDD c\xF4ng' }}</th>
              <th class="vapl-num">{{ 'vapl.msg.lateEarlyGoTotal' | translate:'T\u1ED5ng (mu\u1ED9n/s\u1EDBm/ra ngo\xE0i)' }}</th>
              <th class="vapl-num" *ngFor="let it of items()">{{ it.itemName }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="!loading() && vaplTable.data.length === 0">
              <td [attr.colspan]="7 + items().length" class="text-center text-muted">
                {{ 'vapl.msg.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}
              </td>
            </tr>
            <tr *ngFor="let row of vaplTable.data; let i = index">
              <td class="vapl-sticky vapl-sticky-0 text-center">{{ i + 1 }}</td>
              <td class="vapl-sticky vapl-sticky-1 text-center" [attr.title]="row['EMPID'] || null">{{ row['EMPID'] }}</td>
              <td class="vapl-sticky vapl-sticky-2" [attr.title]="row['LOCAL_NAME'] || null">{{ row['LOCAL_NAME'] }}</td>
              <td class="vapl-sticky vapl-sticky-3" [attr.title]="row['DEPT_NAME'] || null">{{ row['DEPT_NAME'] }}</td>
              <td class="vapl-nowrap" [attr.title]="row['POSITION_NAME'] || null">{{ row['POSITION_NAME'] }}</td>
              <td class="vapl-num text-center fw-bold">{{ fmtQty(row['NORMAL_WORK']) }}</td>
              <td class="vapl-num text-center fw-bold">{{ fmtQty(row['LATE_EARLY_GO_TOTAL']) }}</td>
              <td class="vapl-num text-center" *ngFor="let it of items()">
                <a *ngIf="qty(row, it.itemId) > 0; else vaplZeroTpl" href="javascript:void(0)"
                   class="fw-bold" (click)="openDetail(row, it)">{{ fmtQty(row[it.itemId]) }}</a>
                <ng-template #vaplZeroTpl><span class="text-muted">0</span></ng-template>
              </td>
            </tr>
          </tbody>
          <ng-template #vaplTotalTpl let-total>
            {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
          </ng-template>
        </nz-table>
      </div>
    </nz-card>
  </div>
</div>

<!-- Modal chi ti\u1EBFt ch\u1EA5m c\xF4ng -->
<nz-modal [nzVisible]="detailVisible()"
          [nzTitle]="detailTitle() || ('apsl.modal.title' | translate:'Chi ti\u1EBFt ch\u1EA5m c\xF4ng')"
          nzWidth="900px" [nzBodyStyle]="{ 'max-height': '70vh', 'overflow-y': 'auto' }"
          (nzOnCancel)="closeDetail()" [nzFooter]="null">
  <ng-container *nzModalContent>
    <nz-alert *ngIf="detailErrorMessage()" nzType="error" [nzMessage]="detailErrorMessage() ?? ''" class="mb-2"></nz-alert>
    <nz-table [nzData]="detailRows()" [nzLoading]="detailLoading()" [nzShowPagination]="false" nzSize="small">
      <thead>
        <tr>
          <th class="text-center" style="width:50px">{{ 'common.stt' | translate:'STT' }}</th>
          <th class="text-center" style="width:110px">{{ 'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
          <th style="min-width:140px">{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
          <th style="min-width:120px">{{ 'apsl.detail.col.shift' | translate:'Ca' }}</th>
          <th class="text-center" style="width:110px">{{ 'apsl.detail.col.date' | translate:'Ng\xE0y' }}</th>
          <th style="min-width:150px">{{ 'apsl.detail.col.leaveType' | translate:'Lo\u1EA1i ngh\u1EC9 ph\u1EE5 l\u1EE5c' }}</th>
          <th class="text-center" style="width:120px">{{ 'apsl.detail.col.startTime' | translate:'Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u' }}</th>
          <th class="text-center" style="width:120px">{{ 'apsl.detail.col.endTime' | translate:'Th\u1EDDi gian k\u1EBFt th\xFAc' }}</th>
          <th class="text-center" style="width:90px">{{ 'apsl.detail.col.duration' | translate:'Th\u1EDDi l\u01B0\u1EE3ng' }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngIf="!detailLoading() && detailRows().length === 0">
          <td colspan="9" class="text-center text-muted">
            {{ 'apsl.detail.hint' | translate:'Ch\u1ECDn v\xE0o t\u1EEBng con s\u1ED1 \u0111\u1EC3 xem chi ti\u1EBFt.' }}
          </td>
        </tr>
        <tr *ngFor="let d of detailRows(); let i = index">
          <td class="text-center">{{ i + 1 }}</td>
          <td class="text-center">{{ d.empId }}</td>
          <td>{{ d.localName }}</td>
          <td class="text-center">{{ d.shiftName || d.shiftNo }}</td>
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
`, styles: ["/* src/app/view-ar-personal-list/view-ar-personal-list.component.css */\n.table-scroll-wrapper {\n  overflow-x: auto;\n}\n.vapl-table {\n  table-layout: fixed;\n}\n.vapl-sticky {\n  position: sticky;\n  z-index: 2;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  background-color: #fff;\n}\n.vapl-table thead .vapl-sticky {\n  background-color: #e6f4ff;\n  z-index: 3;\n}\n.vapl-sticky-0 {\n  width: 40px;\n  left: 0;\n}\n.vapl-sticky-1 {\n  width: 90px;\n  left: 40px;\n}\n.vapl-sticky-2 {\n  width: 160px;\n  left: 130px;\n}\n.vapl-sticky-3 {\n  width: 150px;\n  left: 290px;\n  box-shadow: 6px 0 10px -2px rgba(0, 0, 0, .25);\n}\n.vapl-nowrap {\n  white-space: nowrap;\n}\n.vapl-num {\n  width: 60px;\n}\n.vapl-table thead th.vapl-num {\n  white-space: normal;\n  word-break: break-word;\n}\n.btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=view-ar-personal-list.component.css.map */\n"] }]
  }], () => [{ type: ViewArPersonalListService }, { type: I18nService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewArPersonalListComponent, { className: "ViewArPersonalListComponent", filePath: "src/app/view-ar-personal-list/view-ar-personal-list.component.ts", lineNumber: 75 });
})();
export {
  ViewArPersonalListComponent
};
//# debugId=b8669af1-cd67-550e-9e93-c29baf3bc079
//# sourceMappingURL=chunk-HUDMJORR.js.map
