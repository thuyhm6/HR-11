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

// src/app/view-ot-apply-personal-list/view-ot-apply-personal-list.service.ts
var API_BASE = "/ess/viewDept/api/arPersonalList";
var ViewOtApplyPersonalListService = class _ViewOtApplyPersonalListService {
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
  static \u0275fac = function ViewOtApplyPersonalListService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewOtApplyPersonalListService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewOtApplyPersonalListService, factory: _ViewOtApplyPersonalListService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewOtApplyPersonalListService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-ot-apply-personal-list/view-ot-apply-personal-list.component.ts
var _c0 = () => ({ "max-height": "70vh", "overflow-y": "auto" });
function ViewOtApplyPersonalListComponent_div_10_Template(rf, ctx) {
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
function ViewOtApplyPersonalListComponent_nz_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 36);
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r3.codeNo)("nzLabel", c_r3.codeName);
  }
}
function ViewOtApplyPersonalListComponent_nz_alert_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 37);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ViewOtApplyPersonalListComponent_th_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const it_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(it_r4.itemName);
  }
}
function ViewOtApplyPersonalListComponent_tr_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 39);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 5 + ctx_r1.items().length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, "vapl.msg.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"), " ");
  }
}
function ViewOtApplyPersonalListComponent_tr_68_td_11_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 43);
    \u0275\u0275listener("click", function ViewOtApplyPersonalListComponent_tr_68_td_11_a_1_Template_a_click_0_listener() {
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
function ViewOtApplyPersonalListComponent_tr_68_td_11_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1, "0");
    \u0275\u0275elementEnd();
  }
}
function ViewOtApplyPersonalListComponent_tr_68_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41);
    \u0275\u0275template(1, ViewOtApplyPersonalListComponent_tr_68_td_11_a_1_Template, 2, 1, "a", 42)(2, ViewOtApplyPersonalListComponent_tr_68_td_11_ng_template_2_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const it_r6 = ctx.$implicit;
    const voaplZeroTpl_r8 = \u0275\u0275reference(3);
    const row_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.qty(row_r7, it_r6.itemId) > 0)("ngIfElse", voaplZeroTpl_r8);
  }
}
function ViewOtApplyPersonalListComponent_tr_68_Template(rf, ctx) {
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
    \u0275\u0275template(11, ViewOtApplyPersonalListComponent_tr_68_td_11_Template, 4, 2, "td", 40);
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
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.items());
  }
}
function ViewOtApplyPersonalListComponent_ng_template_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r10 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r10, " ");
  }
}
function ViewOtApplyPersonalListComponent_ng_container_73_nz_alert_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 54);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzMessage", ctx_r1.detailErrorMessage() ?? "");
  }
}
function ViewOtApplyPersonalListComponent_ng_container_73_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 55);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "otsl.msg.selectHint", "Ch\u1ECDn v\xE0o t\u1EEBng con s\u1ED1 \u0111\u1EC3 xem chi ti\u1EBFt."), " ");
  }
}
function ViewOtApplyPersonalListComponent_ng_container_73_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 56);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 56);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 56);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 56);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 56);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 56);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 56);
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
function ViewOtApplyPersonalListComponent_ng_container_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ViewOtApplyPersonalListComponent_ng_container_73_nz_alert_1_Template, 1, 1, "nz-alert", 45);
    \u0275\u0275elementStart(2, "nz-table", 46)(3, "thead")(4, "tr")(5, "th", 47);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 48);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 49);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 50);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 48);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 51);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 52);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 52);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th", 53);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "tbody");
    \u0275\u0275template(33, ViewOtApplyPersonalListComponent_ng_container_73_tr_33_Template, 4, 4, "tr", 31)(34, ViewOtApplyPersonalListComponent_ng_container_73_tr_34_Template, 19, 9, "tr", 32);
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 24, "otsl.col.shift", "Ca"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 27, "otsl.col.date", "Ng\xE0y"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 30, "otsl.col.otType", "Lo\u1EA1i t\u0103ng ca"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 33, "otsl.col.startTime", "Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 36, "otsl.col.endTime", "Th\u1EDDi gian k\u1EBFt th\xFAc"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 39, "otsl.col.duration", "Th\u1EDDi l\u01B0\u1EE3ng"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.detailLoading() && ctx_r1.detailRows().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.detailRows());
  }
}
var ITEM_GROUP = "1433";
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
  "vapl.msg.position",
  "vapl.msg.noData",
  "vapl.msg.noDataExport",
  "otsl.msg.loadOtFailed",
  "otsl.modal.detailTitle",
  "otsl.col.shift",
  "otsl.col.date",
  "otsl.col.otType",
  "otsl.col.startTime",
  "otsl.col.endTime",
  "otsl.col.duration",
  "otsl.msg.selectHint",
  "otsl.msg.noDataDetail",
  "otsl.msg.loadDetailFailed",
  "mep.msg.loadDeptFailed"
];
var PAGE_SIZE_OPTIONS = [25, 50, 100];
var ViewOtApplyPersonalListComponent = class _ViewOtApplyPersonalListComponent {
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
        this.errorMessage.set(this.i18n.t("otsl.msg.loadOtFailed", "Kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c d\u1EEF li\u1EC7u t\xECnh h\xECnh t\u0103ng ca."));
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
        this.detailErrorMessage.set(this.i18n.t("otsl.msg.loadDetailFailed", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i."));
        this.detailLoading.set(false);
      }
    });
  }
  closeDetail() {
    this.detailVisible.set(false);
  }
  /** Xuất excel client-side (bản gốc dùng trick HTML-table .xls, không phải .xlsx thật) - dùng thư
   *  viện xlsx (SheetJS) để tạo đúng file .xlsx nhị phân, giống view-ar-personal-list. */
  exportExcel() {
    const items = this.items();
    const headers = [
      this.i18n.t("common.stt", "STT"),
      this.i18n.t("common.empId", "M\xE3 nh\xE2n vi\xEAn"),
      this.i18n.t("common.empName", "H\u1ECD t\xEAn"),
      this.i18n.t("common.deptName", "Ph\xF2ng ban"),
      this.i18n.t("vapl.msg.position", "Ch\u1EE9c v\u1EE5"),
      ...items.map((it) => it.itemName)
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      r["EMPID"],
      r["LOCAL_NAME"],
      r["DEPT_NAME"],
      r["POSITION_NAME"],
      ...items.map((it) => this.fmtQty(r[it.itemId]))
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "TangCa");
    writeFileSync(workbook, "tinh_hinh_tang_ca_nhan_vien.xlsx");
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
  /** Mặc định: ngày 25 tháng trước đến ngày 24 tháng này - giống bản Thymeleaf gốc (voapl_defaultDateRange). */
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
   *  (giống hệt lý do trong view-ar-personal-list.component.ts / manage-emp-position-info.component.ts). */
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
  static \u0275fac = function ViewOtApplyPersonalListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewOtApplyPersonalListComponent)(\u0275\u0275directiveInject(ViewOtApplyPersonalListService), \u0275\u0275directiveInject(I18nService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewOtApplyPersonalListComponent, selectors: [["app-view-ot-apply-personal-list"]], decls: 74, vars: 87, consts: [["voaplTable", ""], ["voaplTotalTpl", ""], ["voaplZeroTpl", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", "align-items-end", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["name", "deptNos", "nzCheckable", "", "nzShowSearch", "", "nzAllowClear", "", "nzDropdownClassName", "voapl-dept-tree-dropdown", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["class", "text-danger small mt-1", 4, "ngIf"], ["nz-input", "", "name", "keyword", 3, "ngModelChange", "ngModel", "placeholder"], [1, "col-md-2"], ["name", "empTypeCode", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["name", "startDate", "nzFormat", "yyyy/MM/dd", 1, "w-100", 3, "ngModelChange", "ngModel", "nzAllowClear"], ["name", "endDate", "nzFormat", "yyyy/MM/dd", 1, "w-100", 3, "ngModelChange", "ngModel", "nzAllowClear"], [1, "col-12", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "nzType", "default", "type", "button", 1, "btn-export", 3, "click"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [1, "table-scroll-wrapper"], ["nzShowSizeChanger", "", 1, "voapl-table", 3, "nzData", "nzLoading", "nzPageSize", "nzPageSizeOptions", "nzShowTotal"], [1, "voapl-sticky", "voapl-sticky-0", "text-center"], [1, "voapl-sticky", "voapl-sticky-1", "text-center"], [1, "voapl-sticky", "voapl-sticky-2"], [1, "voapl-sticky", "voapl-sticky-3"], [1, "voapl-nowrap"], ["class", "voapl-num", 4, "ngFor", "ngForOf"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["nzWidth", "900px", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzBodyStyle", "nzFooter"], [4, "nzModalContent"], [1, "text-danger", "small", "mt-1"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], [1, "voapl-num"], [1, "text-center", "text-muted"], ["class", "voapl-num text-center", 4, "ngFor", "ngForOf"], [1, "voapl-num", "text-center"], ["href", "javascript:void(0)", "class", "fw-bold", 3, "click", 4, "ngIf", "ngIfElse"], ["href", "javascript:void(0)", 1, "fw-bold", 3, "click"], [1, "text-muted"], ["nzType", "error", "class", "mb-2", 3, "nzMessage", 4, "ngIf"], ["nzSize", "small", 3, "nzData", "nzLoading", "nzShowPagination"], [1, "text-center", 2, "width", "50px"], [1, "text-center", 2, "width", "110px"], [2, "min-width", "140px"], [2, "min-width", "120px"], [2, "min-width", "150px"], [1, "text-center", 2, "width", "120px"], [1, "text-center", 2, "width", "90px"], ["nzType", "error", 1, "mb-2", 3, "nzMessage"], ["colspan", "9", 1, "text-center", "text-muted"], [1, "text-center"]], template: function ViewOtApplyPersonalListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "nz-card", 5)(3, "form", 6);
      \u0275\u0275listener("ngSubmit", function ViewOtApplyPersonalListComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 7)(5, "label", 8);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "nz-tree-select", 9);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewOtApplyPersonalListComponent_Template_nz_tree_select_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.deptNos, $event) || (ctx.deptNos = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275template(10, ViewOtApplyPersonalListComponent_div_10_Template, 2, 1, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 7)(12, "label", 8);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "input", 11);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewOtApplyPersonalListComponent_Template_input_ngModelChange_15_listener($event) {
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
      \u0275\u0275twoWayListener("ngModelChange", function ViewOtApplyPersonalListComponent_Template_nz_select_ngModelChange_21_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.empTypeCode, $event) || (ctx.empTypeCode = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(23, ViewOtApplyPersonalListComponent_nz_option_23_Template, 1, 2, "nz-option", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 12)(25, "label", 8);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "nz-date-picker", 15);
      \u0275\u0275twoWayListener("ngModelChange", function ViewOtApplyPersonalListComponent_Template_nz_date_picker_ngModelChange_28_listener($event) {
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
      \u0275\u0275twoWayListener("ngModelChange", function ViewOtApplyPersonalListComponent_Template_nz_date_picker_ngModelChange_33_listener($event) {
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
      \u0275\u0275listener("click", function ViewOtApplyPersonalListComponent_Template_button_click_39_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(40, "i", 21);
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(43, "nz-card");
      \u0275\u0275template(44, ViewOtApplyPersonalListComponent_nz_alert_44_Template, 1, 1, "nz-alert", 22);
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
      \u0275\u0275template(65, ViewOtApplyPersonalListComponent_th_65_Template, 2, 1, "th", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "tbody");
      \u0275\u0275template(67, ViewOtApplyPersonalListComponent_tr_67_Template, 4, 5, "tr", 31)(68, ViewOtApplyPersonalListComponent_tr_68_Template, 12, 10, "tr", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275template(69, ViewOtApplyPersonalListComponent_ng_template_69_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(71, "nz-modal", 33);
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewOtApplyPersonalListComponent_Template_nz_modal_nzOnCancel_71_listener() {
        return ctx.closeDetail();
      });
      \u0275\u0275template(73, ViewOtApplyPersonalListComponent_ng_container_73_Template, 35, 42, "ng-container", 34);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const voaplTable_r13 = \u0275\u0275reference(47);
      const voaplTotalTpl_r14 = \u0275\u0275reference(70);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 38, "essDept.dept", "Ph\xF2ng ban"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzNodes", ctx.deptNodes());
      \u0275\u0275twoWayProperty("ngModel", ctx.deptNos);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(9, 41, "vdp.search.dept.placeholder", "Ch\u1ECDn ph\xF2ng ban"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.deptTreeErrorMessage());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 44, "essDept.keyword", "M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.keyword);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(16, 47, "vdp.search.empKeyword.placeholder", "Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 50, "vapl.label.empType", "Lo\u1EA1i nh\xE2n vi\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.empTypeCode);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(22, 53, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.empTypeOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 56, "vapl.label.startDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.startDate);
      \u0275\u0275property("nzAllowClear", false);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 59, "vapl.label.endDate", "Ng\xE0y k\u1EBFt th\xFAc"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.endDate);
      \u0275\u0275property("nzAllowClear", false);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(38, 62, "essDept.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(42, 65, "essDept.exportExcel", "Xu\u1EA5t Excel"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance(2);
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", voaplTotalTpl_r14);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(52, 68, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(55, 71, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(58, 74, "common.empName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(61, 77, "common.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(64, 80, "vapl.msg.position", "Ch\u1EE9c v\u1EE5"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.items());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.loading() && voaplTable_r13.data.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", voaplTable_r13.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.detailVisible())("nzTitle", ctx.detailTitle() || \u0275\u0275pipeBind2(72, 83, "otsl.modal.detailTitle", "Chi ti\u1EBFt t\u0103ng ca"))("nzBodyStyle", \u0275\u0275pureFunction0(86, _c0))("nzFooter", null);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzDatePickerModule, NzDatePickerComponent, NzTreeSelectModule, NzTreeSelectComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\n.table-scroll-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.voapl-table[_ngcontent-%COMP%] {\n  table-layout: fixed;\n}\n.voapl-sticky[_ngcontent-%COMP%] {\n  position: sticky;\n  z-index: 2;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  background-color: #fff;\n}\n.voapl-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .voapl-sticky[_ngcontent-%COMP%] {\n  background-color: #e6f4ff;\n  z-index: 3;\n}\n.voapl-sticky-0[_ngcontent-%COMP%] {\n  width: 40px;\n  left: 0;\n}\n.voapl-sticky-1[_ngcontent-%COMP%] {\n  width: 90px;\n  left: 40px;\n}\n.voapl-sticky-2[_ngcontent-%COMP%] {\n  width: 160px;\n  left: 130px;\n}\n.voapl-sticky-3[_ngcontent-%COMP%] {\n  width: 150px;\n  left: 290px;\n  box-shadow: 6px 0 10px -2px rgba(0, 0, 0, .25);\n}\n.voapl-nowrap[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.voapl-num[_ngcontent-%COMP%] {\n  width: 60px;\n}\n.voapl-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.voapl-num[_ngcontent-%COMP%] {\n  white-space: normal;\n  word-break: break-word;\n}\n.btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=view-ot-apply-personal-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewOtApplyPersonalListComponent, [{
    type: Component,
    args: [{ selector: "app-view-ot-apply-personal-list", standalone: true, imports: [
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
                           nzDropdownClassName="voapl-dept-tree-dropdown"></nz-tree-select>
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

    <!-- B\u1EA3ng: m\u1ED7i h\xE0ng = 1 nh\xE2n vi\xEAn, c\u1ED9t t\u0103ng ca dynamic t\u1EEB AR_ITEM (itemGroup=1433) -->
    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <div class="table-scroll-wrapper">
        <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" nzShowSizeChanger
                  [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="voaplTotalTpl"
                  class="voapl-table" #voaplTable>
          <thead>
            <tr>
              <th class="voapl-sticky voapl-sticky-0 text-center">{{ 'common.stt' | translate:'STT' }}</th>
              <th class="voapl-sticky voapl-sticky-1 text-center">{{ 'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
              <th class="voapl-sticky voapl-sticky-2">{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
              <th class="voapl-sticky voapl-sticky-3">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
              <th class="voapl-nowrap">{{ 'vapl.msg.position' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
              <th class="voapl-num" *ngFor="let it of items()">{{ it.itemName }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="!loading() && voaplTable.data.length === 0">
              <td [attr.colspan]="5 + items().length" class="text-center text-muted">
                {{ 'vapl.msg.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}
              </td>
            </tr>
            <tr *ngFor="let row of voaplTable.data; let i = index">
              <td class="voapl-sticky voapl-sticky-0 text-center">{{ i + 1 }}</td>
              <td class="voapl-sticky voapl-sticky-1 text-center" [attr.title]="row['EMPID'] || null">{{ row['EMPID'] }}</td>
              <td class="voapl-sticky voapl-sticky-2" [attr.title]="row['LOCAL_NAME'] || null">{{ row['LOCAL_NAME'] }}</td>
              <td class="voapl-sticky voapl-sticky-3" [attr.title]="row['DEPT_NAME'] || null">{{ row['DEPT_NAME'] }}</td>
              <td class="voapl-nowrap" [attr.title]="row['POSITION_NAME'] || null">{{ row['POSITION_NAME'] }}</td>
              <td class="voapl-num text-center" *ngFor="let it of items()">
                <a *ngIf="qty(row, it.itemId) > 0; else voaplZeroTpl" href="javascript:void(0)"
                   class="fw-bold" (click)="openDetail(row, it)">{{ fmtQty(row[it.itemId]) }}</a>
                <ng-template #voaplZeroTpl><span class="text-muted">0</span></ng-template>
              </td>
            </tr>
          </tbody>
          <ng-template #voaplTotalTpl let-total>
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
          <th style="min-width:120px">{{ 'otsl.col.shift' | translate:'Ca' }}</th>
          <th class="text-center" style="width:110px">{{ 'otsl.col.date' | translate:'Ng\xE0y' }}</th>
          <th style="min-width:150px">{{ 'otsl.col.otType' | translate:'Lo\u1EA1i t\u0103ng ca' }}</th>
          <th class="text-center" style="width:120px">{{ 'otsl.col.startTime' | translate:'Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u' }}</th>
          <th class="text-center" style="width:120px">{{ 'otsl.col.endTime' | translate:'Th\u1EDDi gian k\u1EBFt th\xFAc' }}</th>
          <th class="text-center" style="width:90px">{{ 'otsl.col.duration' | translate:'Th\u1EDDi l\u01B0\u1EE3ng' }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngIf="!detailLoading() && detailRows().length === 0">
          <td colspan="9" class="text-center text-muted">
            {{ 'otsl.msg.selectHint' | translate:'Ch\u1ECDn v\xE0o t\u1EEBng con s\u1ED1 \u0111\u1EC3 xem chi ti\u1EBFt.' }}
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
`, styles: ["/* src/app/view-ot-apply-personal-list/view-ot-apply-personal-list.component.css */\n.table-scroll-wrapper {\n  overflow-x: auto;\n}\n.voapl-table {\n  table-layout: fixed;\n}\n.voapl-sticky {\n  position: sticky;\n  z-index: 2;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  background-color: #fff;\n}\n.voapl-table thead .voapl-sticky {\n  background-color: #e6f4ff;\n  z-index: 3;\n}\n.voapl-sticky-0 {\n  width: 40px;\n  left: 0;\n}\n.voapl-sticky-1 {\n  width: 90px;\n  left: 40px;\n}\n.voapl-sticky-2 {\n  width: 160px;\n  left: 130px;\n}\n.voapl-sticky-3 {\n  width: 150px;\n  left: 290px;\n  box-shadow: 6px 0 10px -2px rgba(0, 0, 0, .25);\n}\n.voapl-nowrap {\n  white-space: nowrap;\n}\n.voapl-num {\n  width: 60px;\n}\n.voapl-table thead th.voapl-num {\n  white-space: normal;\n  word-break: break-word;\n}\n.btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=view-ot-apply-personal-list.component.css.map */\n"] }]
  }], () => [{ type: ViewOtApplyPersonalListService }, { type: I18nService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewOtApplyPersonalListComponent, { className: "ViewOtApplyPersonalListComponent", filePath: "src/app/view-ot-apply-personal-list/view-ot-apply-personal-list.component.ts", lineNumber: 78 });
})();
export {
  ViewOtApplyPersonalListComponent
};
//# debugId=0ac61048-d385-508b-b6d9-94764534a0f4
//# sourceMappingURL=chunk-KWHOMS6U.js.map
