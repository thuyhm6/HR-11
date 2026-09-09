import {
  NzInputNumberComponent,
  NzInputNumberModule
} from "./chunk-IXCMIWQQ.js";
import {
  NzTagComponent,
  NzTagModule
} from "./chunk-HTQAHYN3.js";
import {
  utils,
  writeFileSync
} from "./chunk-6KSHLFTP.js";
import {
  NzMessageService
} from "./chunk-XWW7CXU6.js";
import {
  NzModalComponent,
  NzModalContentDirective,
  NzModalModule
} from "./chunk-OEYWCHIN.js";
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
  __spreadValues,
  computed,
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

// src/app/view-summary-param-item/view-summary-param-item.service.ts
var API_BASE = "/ar/attendanceSettings/api/arStaItemParam";
var ViewSummaryParamItemService = class _ViewSummaryParamItemService {
  constructor(http) {
    this.http = http;
  }
  http;
  search(searchText) {
    let params = new HttpParams();
    if (searchText)
      params = params.set("searchText", searchText);
    return this.http.get(API_BASE, { params, withCredentials: true });
  }
  getById(paramNo) {
    return this.http.get(`${API_BASE}/${paramNo}`, { withCredentials: true });
  }
  getAvailableItems() {
    return this.http.get(`${API_BASE}/availableItems`, { withCredentials: true });
  }
  save(payload) {
    return this.http.post(`${API_BASE}/save`, payload, { withCredentials: true });
  }
  delete(paramNo) {
    return this.http.delete(`${API_BASE}/delete/${paramNo}`, { withCredentials: true });
  }
  static \u0275fac = function ViewSummaryParamItemService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewSummaryParamItemService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewSummaryParamItemService, factory: _ViewSummaryParamItemService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewSummaryParamItemService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-summary-param-item/view-summary-param-item.component.ts
var _c0 = () => ({ x: "1400px", y: "calc(100vh - 420px)" });
function ViewSummaryParamItemComponent_nz_alert_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 35);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ViewSummaryParamItemComponent_tr_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewSummaryParamItemComponent_tr_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
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
    \u0275\u0275elementStart(11, "td", 37);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 37);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 37);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 37);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 37)(20, "nz-tag", 38);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td", 37)(25, "button", 39);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275listener("click", function ViewSummaryParamItemComponent_tr_69_Template_button_click_25_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditModal(row_r4));
    });
    \u0275\u0275element(27, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 39);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275listener("click", function ViewSummaryParamItemComponent_tr_69_Template_button_click_28_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDeleteConfirm(row_r4));
    });
    \u0275\u0275element(30, "i", 41);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r5 + 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.paramNo || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.paramNo);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.itemNo || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.itemNo);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.itemNameVi || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.itemNameVi);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.unit || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.unit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.minUnit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.calOrder);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.manageFlag);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.orderno);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColor", row_r4.activity === 1 ? "success" : "default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.activity === 1 ? \u0275\u0275pipeBind2(22, 17, "common.active", "Ho\u1EA1t \u0111\u1ED9ng") : \u0275\u0275pipeBind2(23, 20, "common.inactive", "Ng\u1EEBng"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(26, 23, "common.edit", "S\u1EEDa"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(29, 26, "common.delete", "X\xF3a"));
  }
}
function ViewSummaryParamItemComponent_ng_template_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r6 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r6, " ");
  }
}
function ViewSummaryParamItemComponent_ng_container_75_nz_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 58);
  }
  if (rf & 2) {
    const opt_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzValue", opt_r8.itemNo)("nzLabel", ctx_r1.itemLabel(opt_r8));
  }
}
function ViewSummaryParamItemComponent_ng_container_75_nz_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 58);
  }
  if (rf & 2) {
    const u_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzValue", u_r9.value)("nzLabel", ctx_r1.i18n.t(u_r9.key, u_r9.fallback));
  }
}
function ViewSummaryParamItemComponent_ng_container_75_nz_option_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 58);
  }
  if (rf & 2) {
    const u_r10 = ctx.$implicit;
    \u0275\u0275property("nzValue", u_r10)("nzLabel", u_r10);
  }
}
function ViewSummaryParamItemComponent_ng_container_75_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "label", 45);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "nz-input-number", 59);
    \u0275\u0275twoWayListener("ngModelChange", function ViewSummaryParamItemComponent_ng_container_75_div_30_Template_nz_input_number_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.calOrder, $event) || (ctx_r1.form.calOrder = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(5, "small", 60);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 4, "staParamItem.calOrder", "Th\u1EE9 t\u1EF1 t\xEDnh to\xE1n (Cal Order)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.calOrder);
    \u0275\u0275property("nzDisabled", true);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 7, "staParamItem.calOrderHint", "T\u1EF1 \u0111\u1ED9ng t\u0103ng khi th\xEAm m\u1EDBi"));
  }
}
function ViewSummaryParamItemComponent_ng_container_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h6", 42);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 43)(5, "div", 44)(6, "label", 45);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "span", 46);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "nz-select", 47);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewSummaryParamItemComponent_ng_container_75_Template_nz_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.itemNo, $event) || (ctx_r1.form.itemNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(13, ViewSummaryParamItemComponent_ng_container_75_nz_option_13_Template, 1, 2, "nz-option", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "h6", 42);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 49)(18, "div", 50)(19, "label", 45);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "nz-select", 51);
    \u0275\u0275twoWayListener("ngModelChange", function ViewSummaryParamItemComponent_ng_container_75_Template_nz_select_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.unit, $event) || (ctx_r1.form.unit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(23, ViewSummaryParamItemComponent_ng_container_75_nz_option_23_Template, 1, 2, "nz-option", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 50)(25, "label", 45);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "nz-select", 52);
    \u0275\u0275twoWayListener("ngModelChange", function ViewSummaryParamItemComponent_ng_container_75_Template_nz_select_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.minUnit, $event) || (ctx_r1.form.minUnit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(29, ViewSummaryParamItemComponent_ng_container_75_nz_option_29_Template, 1, 2, "nz-option", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, ViewSummaryParamItemComponent_ng_container_75_div_30_Template, 8, 10, "div", 53);
    \u0275\u0275elementStart(31, "div", 50)(32, "label", 45);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "nz-input-number", 54);
    \u0275\u0275twoWayListener("ngModelChange", function ViewSummaryParamItemComponent_ng_container_75_Template_nz_input_number_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.manageFlag, $event) || (ctx_r1.form.manageFlag = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 50)(37, "label", 45);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "nz-input-number", 55);
    \u0275\u0275twoWayListener("ngModelChange", function ViewSummaryParamItemComponent_ng_container_75_Template_nz_input_number_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.orderno, $event) || (ctx_r1.form.orderno = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 50)(42, "label", 56);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "nz-select", 57);
    \u0275\u0275twoWayListener("ngModelChange", function ViewSummaryParamItemComponent_ng_container_75_Template_nz_select_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.activity, $event) || (ctx_r1.form.activity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(46, "nz-option", 58);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275element(48, "nz-option", 58);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 24, "staParamItem.itemInfoTitle", "Th\xF4ng tin H\u1EA1ng m\u1EE5c"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(8, 27, "staParamItem.selectItem", "Ch\u1ECDn H\u1EA1ng m\u1EE5c (ITEM_NO)"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.itemNo);
    \u0275\u0275property("nzDisabled", !ctx_r1.isNew())("nzPlaceHolder", \u0275\u0275pipeBind2(12, 30, "staParamItem.selectItemPlaceholder", "-- Ch\u1ECDn h\u1EA1ng m\u1EE5c ch\u01B0a c\xF3 th\xF4ng s\u1ED1 --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.availableItems());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 33, "staParamItem.configTitle", "C\u1EA5u h\xECnh th\xF4ng s\u1ED1 (Parameters)"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 36, "ar.viewitemparameter.title.unit", "\u0110\u01A1n v\u1ECB (ng\xE0y, gi\u1EDD, ph\xFAt)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.unit);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.unitOptions);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 39, "staParamItem.minUnit", "\u0110\u01A1n v\u1ECB t\u1ED1i thi\u1EC3u (Min Unit)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.minUnit);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.minUnitOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isNew());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 42, "staParamItem.manageFlag", "C\u1EDD qu\u1EA3n l\xFD (Manage Flag)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.manageFlag);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 45, "common.sortOrder", "S\u1EAFp x\u1EBFp (Orderno)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.orderno);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 48, "common.status", "Tr\u1EA1ng th\xE1i"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.activity);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzValue", 1)("nzLabel", \u0275\u0275pipeBind2(47, 51, "common.active", "Ho\u1EA1t \u0111\u1ED9ng"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzValue", 0)("nzLabel", \u0275\u0275pipeBind2(49, 54, "common.inactive", "Ng\u1EEBng"));
  }
}
function ViewSummaryParamItemComponent_ng_container_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 61);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 62);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "staParamItem.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a th\xF4ng s\u1ED1 n\xE0y?"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.deleteTargetName);
  }
}
var UNIT_OPTIONS = [
  { value: "DAY", key: "staParamItem.unitDay", fallback: "Ng\xE0y" },
  { value: "HOUR", key: "staParamItem.unitHour", fallback: "Gi\u1EDD" },
  { value: "MINUTE", key: "staParamItem.unitMinute", fallback: "Ph\xFAt" },
  { value: "TIME", key: "staParamItem.unitCount", fallback: "L\u1EA7n" }
];
var MIN_UNIT_OPTIONS = [1, 0.5, 0.25, 0.05, 0.01];
var I18N_KEYS = [
  "common.stt",
  "common.action",
  "common.addNew",
  "common.edit",
  "common.delete",
  "common.save",
  "common.close",
  "common.confirm",
  "common.cancel",
  "common.search",
  "common.clearFilter",
  "common.noData",
  "common.totalRows",
  "common.status",
  "common.active",
  "common.inactive",
  "common.sortOrder",
  "common.placeholder.select",
  "staParamItem.itemCode",
  "staParamItem.itemName",
  "staParamItem.unitDay",
  "staParamItem.unitHour",
  "staParamItem.unitMinute",
  "staParamItem.unitCount",
  "staParamItem.modalAddTitle",
  "staParamItem.modalEditTitle",
  "staParamItem.confirmDelete",
  "staParamItem.saveSuccess",
  "staParamItem.saveFail",
  "staParamItem.deleteSuccess",
  "staParamItem.deleteFail",
  "staParamItem.loadFail",
  "staParamItem.minUnit",
  "staParamItem.calOrder",
  "staParamItem.manageFlag",
  "staParamItem.paramNo",
  "staParamItem.searchPlaceholder",
  "staParamItem.selectItem",
  "staParamItem.selectItemPlaceholder",
  "staParamItem.msg.pleaseSelectItem",
  "staParamItem.calOrderHint",
  "staParamItem.itemInfoTitle",
  "staParamItem.configTitle",
  "ar.viewitemparameter.title.unit",
  "essDept.exportExcel"
];
var PAGE_SIZE_OPTIONS = [25, 50, 100, 200];
var EMPTY_FORM = {
  paramNo: null,
  itemNo: null,
  unit: "DAY",
  minUnit: 1,
  calOrder: null,
  manageFlag: null,
  orderno: null,
  activity: 1
};
var ViewSummaryParamItemComponent = class _ViewSummaryParamItemComponent {
  constructor(api, i18n, message) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
  }
  api;
  i18n;
  message;
  pageSizeOptions = PAGE_SIZE_OPTIONS;
  unitOptions = UNIT_OPTIONS;
  minUnitOptions = MIN_UNIT_OPTIONS;
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
  availableItems = signal(
    [],
    ...ngDevMode ? [{ debugName: "availableItems" }] : (
      /* istanbul ignore next */
      []
    )
  );
  searchText = "";
  modalVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "modalVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  saving = signal(
    false,
    ...ngDevMode ? [{ debugName: "saving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isNew = signal(
    true,
    ...ngDevMode ? [{ debugName: "isNew" }] : (
      /* istanbul ignore next */
      []
    )
  );
  modalTitle = computed(
    () => this.isNew() ? this.i18n.t("staParamItem.modalAddTitle", "Th\xEAm m\u1EDBi Th\xF4ng s\u1ED1 t\u1ED5ng h\u1EE3p") : `${this.i18n.t("staParamItem.modalEditTitle", "C\u1EADp nh\u1EADt Th\xF4ng s\u1ED1")}: ${this.form.paramNo ?? ""}`,
    ...ngDevMode ? [{ debugName: "modalTitle" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = __spreadValues({}, EMPTY_FORM);
  deleteVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "deleteVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  deleting = signal(
    false,
    ...ngDevMode ? [{ debugName: "deleting" }] : (
      /* istanbul ignore next */
      []
    )
  );
  deleteTarget = null;
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.search();
  }
  itemLabel(opt) {
    const name = opt.nameVi || opt.nameEn || opt.itemNo;
    return `${name} (${opt.itemNo})`;
  }
  search() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.search(this.searchText).subscribe({
      next: (rows) => {
        this.rows.set(rows ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("staParamItem.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.rows.set([]);
        this.loading.set(false);
      }
    });
  }
  clearSearch() {
    this.searchText = "";
    this.search();
  }
  // ==================== Modal Thêm mới / Cập nhật ====================
  loadAvailableItems(current) {
    this.api.getAvailableItems().subscribe({
      next: (list) => {
        const options = list ?? [];
        this.availableItems.set(current ? [current, ...options] : options);
      },
      error: () => this.availableItems.set(current ? [current] : [])
    });
  }
  openAddModal() {
    this.isNew.set(true);
    this.form = __spreadValues({}, EMPTY_FORM);
    this.loadAvailableItems(null);
    this.modalVisible.set(true);
  }
  openEditModal(row) {
    this.api.getById(row.paramNo).subscribe({
      next: (data) => {
        this.isNew.set(false);
        this.form = {
          paramNo: data.paramNo,
          itemNo: data.itemNo,
          unit: data.unit || "DAY",
          minUnit: data.minUnit ?? 1,
          calOrder: data.calOrder,
          manageFlag: data.manageFlag,
          orderno: data.orderno,
          activity: data.activity ?? 1
        };
        this.loadAvailableItems({
          itemNo: data.itemNo,
          nameVi: data.itemNameVi,
          nameEn: data.itemNameEn,
          nameZh: data.itemNameZh,
          nameKo: data.itemNameKo
        });
        this.modalVisible.set(true);
      },
      error: () => this.message.error(this.i18n.t("staParamItem.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"))
    });
  }
  closeModal() {
    this.modalVisible.set(false);
  }
  saveForm() {
    if (!this.form.itemNo) {
      this.message.warning(this.i18n.t("staParamItem.msg.pleaseSelectItem", "Vui l\xF2ng ch\u1ECDn H\u1EA1ng m\u1EE5c t\u1ED5ng h\u1EE3p!"));
      return;
    }
    const payload = {
      paramNo: this.form.paramNo,
      itemNo: this.form.itemNo,
      unit: this.form.unit,
      minUnit: this.form.minUnit,
      manageFlag: this.form.manageFlag,
      orderno: this.form.orderno,
      activity: this.form.activity
    };
    if (!this.isNew()) {
      payload.calOrder = this.form.calOrder;
    }
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: () => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.message.success(this.i18n.t("staParamItem.saveSuccess", "L\u01B0u th\xE0nh c\xF4ng!"));
        this.search();
      },
      error: () => {
        this.saving.set(false);
        this.message.error(this.i18n.t("staParamItem.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  // ==================== Xóa ====================
  openDeleteConfirm(row) {
    this.deleteTarget = row;
    this.deleteVisible.set(true);
  }
  closeDeleteConfirm() {
    this.deleteVisible.set(false);
  }
  get deleteTargetName() {
    return this.deleteTarget ? `${this.deleteTarget.paramNo} - ${this.deleteTarget.itemNameVi ?? this.deleteTarget.itemNo}` : "";
  }
  confirmDelete() {
    if (!this.deleteTarget?.paramNo)
      return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.paramNo).subscribe({
      next: () => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.message.success(this.i18n.t("staParamItem.deleteSuccess", "X\xF3a th\xE0nh c\xF4ng!"));
        this.search();
      },
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t("staParamItem.deleteFail", "X\xF3a th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  // ==================== Xuất Excel ====================
  /** Xuất excel client-side (bản gốc chỉ có nút Buttons của DataTables) - dùng thư viện xlsx (SheetJS)
   *  để tạo đúng file .xlsx nhị phân (xem CLAUDE.md). */
  exportExcel() {
    const headers = [
      this.i18n.t("common.stt", "STT"),
      this.i18n.t("staParamItem.paramNo", "M\xE3 tham s\u1ED1"),
      this.i18n.t("staParamItem.itemCode", "M\xE3 h\u1EA1ng m\u1EE5c"),
      this.i18n.t("staParamItem.itemName", "T\xEAn h\u1EA1ng m\u1EE5c"),
      this.i18n.t("ar.viewitemparameter.title.unit", "\u0110\u01A1n v\u1ECB"),
      this.i18n.t("staParamItem.minUnit", "\u0110\u01A1n v\u1ECB t\u1ED1i thi\u1EC3u"),
      this.i18n.t("staParamItem.calOrder", "Th\u1EE9 t\u1EF1 t\xEDnh to\xE1n"),
      this.i18n.t("staParamItem.manageFlag", "C\u1EDD qu\u1EA3n l\xFD"),
      this.i18n.t("common.sortOrder", "S\u1EAFp x\u1EBFp"),
      this.i18n.t("common.status", "Tr\u1EA1ng th\xE1i")
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      r.paramNo,
      r.itemNo,
      r.itemNameVi,
      r.unit,
      r.minUnit,
      r.calOrder,
      r.manageFlag,
      r.orderno,
      r.activity === 1 ? this.i18n.t("common.active", "Ho\u1EA1t \u0111\u1ED9ng") : this.i18n.t("common.inactive", "Ng\u1EEBng")
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "DanhSach");
    writeFileSync(workbook, "summary_param_item_list.xlsx");
  }
  static \u0275fac = function ViewSummaryParamItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewSummaryParamItemComponent)(\u0275\u0275directiveInject(ViewSummaryParamItemService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewSummaryParamItemComponent, selectors: [["app-view-summary-param-item"]], decls: 81, vars: 105, consts: [["vspiTable", ""], ["vspiTotalTpl", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-4"], [1, "form-label"], ["nz-input", "", "name", "vspiSearchText", 3, "ngModelChange", "ngModel", "placeholder"], [1, "col-md-8", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], [1, "col-12", "d-flex", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzType", "default", "type", "button", 1, "vspi-btn-export", 3, "click"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "110px"], ["nzWidth", "130px"], ["nzWidth", "180px"], ["nzWidth", "100px"], ["nzWidth", "130px", 1, "text-center"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "90px", 1, "text-center"], ["nzWidth", "120px", 1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["nzWidth", "700px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "11", 1, "text-center", "text-muted"], [1, "text-center"], [3, "nzColor"], ["nz-button", "", "nzType", "text", "nzSize", "small", 3, "click", "title"], [1, "bx", "bx-edit", "text-warning"], [1, "bx", "bx-trash", "text-danger"], [1, "mb-3", "text-primary", "border-bottom", "pb-2"], [1, "row", "g-3", "mb-4"], [1, "col-md-12"], [1, "form-label", "fw-semibold"], [1, "text-danger"], ["name", "vspiFormItemNo", "nzShowSearch", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzDisabled", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "row", "g-3"], [1, "col-md-6"], ["name", "vspiFormUnit", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vspiFormMinUnit", 1, "w-100", 3, "ngModelChange", "ngModel"], ["class", "col-md-6", 4, "ngIf"], ["name", "vspiFormManageFlag", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vspiFormOrderno", 1, "w-100", 3, "ngModelChange", "ngModel"], [1, "form-label", "fw-semibold", "d-block"], ["name", "vspiFormActivity", 1, "w-100", 3, "ngModelChange", "ngModel"], [3, "nzValue", "nzLabel"], ["name", "vspiFormCalOrder", 1, "w-100", 3, "ngModelChange", "ngModel", "nzDisabled"], [1, "text-muted"], [1, "mb-1"], [1, "fw-bold", "mb-0"]], template: function ViewSummaryParamItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "nz-card", 4)(3, "form", 5);
      \u0275\u0275listener("ngSubmit", function ViewSummaryParamItemComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 6)(5, "label", 7);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewSummaryParamItemComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 9)(11, "button", 10);
      \u0275\u0275element(12, "i", 11);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 12);
      \u0275\u0275listener("click", function ViewSummaryParamItemComponent_Template_button_click_15_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(16, "i", 13);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 14)(20, "button", 15);
      \u0275\u0275listener("click", function ViewSummaryParamItemComponent_Template_button_click_20_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(21, "i", 16);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 17);
      \u0275\u0275listener("click", function ViewSummaryParamItemComponent_Template_button_click_24_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(25, "i", 18);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(28, "nz-card");
      \u0275\u0275template(29, ViewSummaryParamItemComponent_nz_alert_29_Template, 1, 1, "nz-alert", 19);
      \u0275\u0275elementStart(30, "nz-table", 20, 0)(32, "thead")(33, "tr")(34, "th", 21);
      \u0275\u0275text(35);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th", 22);
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "th", 23);
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "th", 24);
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "th", 25);
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "th", 26);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "th", 26);
      \u0275\u0275text(53);
      \u0275\u0275pipe(54, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "th", 27);
      \u0275\u0275text(56);
      \u0275\u0275pipe(57, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "th", 28);
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "th", 29);
      \u0275\u0275text(62);
      \u0275\u0275pipe(63, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "th", 28);
      \u0275\u0275text(65);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(67, "tbody");
      \u0275\u0275template(68, ViewSummaryParamItemComponent_tr_68_Template, 4, 4, "tr", 30)(69, ViewSummaryParamItemComponent_tr_69_Template, 31, 29, "tr", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275template(70, ViewSummaryParamItemComponent_ng_template_70_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(72, "nz-modal", 32);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275pipe(74, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewSummaryParamItemComponent_Template_nz_modal_nzOnCancel_72_listener() {
        return ctx.closeModal();
      })("nzOnOk", function ViewSummaryParamItemComponent_Template_nz_modal_nzOnOk_72_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(75, ViewSummaryParamItemComponent_ng_container_75_Template, 50, 57, "ng-container", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "nz-modal", 34);
      \u0275\u0275pipe(77, "translate");
      \u0275\u0275pipe(78, "translate");
      \u0275\u0275pipe(79, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewSummaryParamItemComponent_Template_nz_modal_nzOnCancel_76_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function ViewSummaryParamItemComponent_Template_nz_modal_nzOnOk_76_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(80, ViewSummaryParamItemComponent_ng_container_80_Template, 6, 5, "ng-container", 33);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const vspiTable_r12 = \u0275\u0275reference(31);
      const vspiTotalTpl_r13 = \u0275\u0275reference(71);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 38, "common.search", "T\xECm ki\u1EBFm"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 41, "staParamItem.searchPlaceholder", "Nh\u1EADp m\xE3 h\u1EA1ng m\u1EE5c / T\xEAn h\u1EA1ng m\u1EE5c"));
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 44, "common.search", "T\xECm ki\u1EBFm"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(18, 47, "common.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(23, 50, "common.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(27, 53, "essDept.exportExcel", "Xu\u1EA5t excel"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", vspiTotalTpl_r13)("nzScroll", \u0275\u0275pureFunction0(104, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 56, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 59, "staParamItem.paramNo", "Param No"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 62, "staParamItem.itemCode", "M\xE3 h\u1EA1ng m\u1EE5c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 65, "staParamItem.itemName", "T\xEAn h\u1EA1ng m\u1EE5c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 68, "ar.viewitemparameter.title.unit", "\u0110\u01A1n v\u1ECB"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 71, "staParamItem.minUnit", "\u0110\u01A1n v\u1ECB t\u1ED1i thi\u1EC3u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 74, "staParamItem.calOrder", "Th\u1EE9 t\u1EF1 t\xEDnh to\xE1n"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 77, "staParamItem.manageFlag", "C\u1EDD qu\u1EA3n l\xFD"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(60, 80, "common.sortOrder", "S\u1EAFp x\u1EBFp"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(63, 83, "common.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(66, 86, "common.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", vspiTable_r12.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", ctx.modalTitle())("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(73, 89, "common.save", "L\u01B0u d\u1EEF li\u1EC7u"))("nzCancelText", \u0275\u0275pipeBind2(74, 92, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(4);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(77, 95, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(78, 98, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(79, 101, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzInputNumberModule, NzInputNumberComponent, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, NzTagModule, NzTagComponent, TranslatePipe], styles: ["\n.vspi-btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=view-summary-param-item.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewSummaryParamItemComponent, [{
    type: Component,
    args: [{ selector: "app-view-summary-param-item", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzInputNumberModule,
      NzSelectModule,
      NzButtonModule,
      NzModalModule,
      NzAlertModule,
      NzTagModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm - \u0111\u1EE9ng im khi cu\u1ED9n (xem .sticky-filter-card trong styles.css) -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3" (ngSubmit)="search()">
        <div class="col-md-4">
          <label class="form-label">{{ 'common.search' | translate:'T\xECm ki\u1EBFm' }}</label>
          <input nz-input [(ngModel)]="searchText" name="vspiSearchText"
                 [placeholder]="'staParamItem.searchPlaceholder' | translate:'Nh\u1EADp m\xE3 h\u1EA1ng m\u1EE5c / T\xEAn h\u1EA1ng m\u1EE5c'">
        </div>
        <div class="col-md-8 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'common.search' | translate:'T\xECm ki\u1EBFm' }}
          </button>
          <button nz-button type="button" (click)="clearSearch()">
            <i class="bx bx-x"></i> {{ 'common.clearFilter' | translate:'X\xF3a l\u1ECDc' }}
          </button>
        </div>
        <div class="col-12 d-flex gap-2 flex-wrap">
          <button nz-button nzType="primary" type="button" (click)="openAddModal()">
            <i class="bx bx-plus"></i> {{ 'common.addNew' | translate:'Th\xEAm m\u1EDBi' }}
          </button>
          <button nz-button nzType="default" type="button" class="vspi-btn-export" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'essDept.exportExcel' | translate:'Xu\u1EA5t excel' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <!-- nzWidth khai b\xE1o cho t\u1EEBng c\u1ED9t \u0111\u1EC3 \u0111\u1ED3ng b\u1ED9 \u0111\u1ED9 r\u1ED9ng header/body khi d\xF9ng nzScroll. -->
      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="vspiTotalTpl"
                [nzScroll]="{ x: '1400px', y: 'calc(100vh - 420px)' }" #vspiTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th nzWidth="110px">{{ 'staParamItem.paramNo' | translate:'Param No' }}</th>
            <th nzWidth="130px">{{ 'staParamItem.itemCode' | translate:'M\xE3 h\u1EA1ng m\u1EE5c' }}</th>
            <th nzWidth="180px">{{ 'staParamItem.itemName' | translate:'T\xEAn h\u1EA1ng m\u1EE5c' }}</th>
            <th nzWidth="100px">{{ 'ar.viewitemparameter.title.unit' | translate:'\u0110\u01A1n v\u1ECB' }}</th>
            <th class="text-center" nzWidth="130px">{{ 'staParamItem.minUnit' | translate:'\u0110\u01A1n v\u1ECB t\u1ED1i thi\u1EC3u' }}</th>
            <th class="text-center" nzWidth="130px">{{ 'staParamItem.calOrder' | translate:'Th\u1EE9 t\u1EF1 t\xEDnh to\xE1n' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'staParamItem.manageFlag' | translate:'C\u1EDD qu\u1EA3n l\xFD' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'common.sortOrder' | translate:'S\u1EAFp x\u1EBFp' }}</th>
            <th class="text-center" nzWidth="120px">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'common.action' | translate:'Thao t\xE1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="11" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of vspiTable.data; let i = index">
            <td class="text-center">{{ i + 1 }}</td>
            <td [attr.title]="row.paramNo || null">{{ row.paramNo }}</td>
            <td [attr.title]="row.itemNo || null">{{ row.itemNo }}</td>
            <td [attr.title]="row.itemNameVi || null">{{ row.itemNameVi }}</td>
            <td [attr.title]="row.unit || null">{{ row.unit }}</td>
            <td class="text-center">{{ row.minUnit }}</td>
            <td class="text-center">{{ row.calOrder }}</td>
            <td class="text-center">{{ row.manageFlag }}</td>
            <td class="text-center">{{ row.orderno }}</td>
            <td class="text-center">
              <nz-tag [nzColor]="row.activity === 1 ? 'success' : 'default'">
                {{ row.activity === 1 ? ('common.active' | translate:'Ho\u1EA1t \u0111\u1ED9ng') : ('common.inactive' | translate:'Ng\u1EEBng') }}
              </nz-tag>
            </td>
            <td class="text-center">
              <button nz-button nzType="text" nzSize="small" [title]="'common.edit' | translate:'S\u1EEDa'" (click)="openEditModal(row)">
                <i class="bx bx-edit text-warning"></i>
              </button>
              <button nz-button nzType="text" nzSize="small" [title]="'common.delete' | translate:'X\xF3a'" (click)="openDeleteConfirm(row)">
                <i class="bx bx-trash text-danger"></i>
              </button>
            </td>
          </tr>
        </tbody>
        <ng-template #vspiTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal Th\xEAm m\u1EDBi / C\u1EADp nh\u1EADt -->
<nz-modal [nzVisible]="modalVisible()" [nzTitle]="modalTitle()" nzWidth="700px"
          (nzOnCancel)="closeModal()" (nzOnOk)="saveForm()" [nzOkLoading]="saving()"
          [nzOkText]="'common.save' | translate:'L\u01B0u d\u1EEF li\u1EC7u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <h6 class="mb-3 text-primary border-bottom pb-2">{{ 'staParamItem.itemInfoTitle' | translate:'Th\xF4ng tin H\u1EA1ng m\u1EE5c' }}</h6>
    <div class="row g-3 mb-4">
      <div class="col-md-12">
        <label class="form-label fw-semibold">{{ 'staParamItem.selectItem' | translate:'Ch\u1ECDn H\u1EA1ng m\u1EE5c (ITEM_NO)' }} <span class="text-danger">*</span></label>
        <nz-select class="w-100" [(ngModel)]="form.itemNo" name="vspiFormItemNo" nzShowSearch [nzDisabled]="!isNew()"
                   [nzPlaceHolder]="'staParamItem.selectItemPlaceholder' | translate:'-- Ch\u1ECDn h\u1EA1ng m\u1EE5c ch\u01B0a c\xF3 th\xF4ng s\u1ED1 --'">
          <nz-option *ngFor="let opt of availableItems()" [nzValue]="opt.itemNo" [nzLabel]="itemLabel(opt)"></nz-option>
        </nz-select>
      </div>
    </div>

    <h6 class="mb-3 text-primary border-bottom pb-2">{{ 'staParamItem.configTitle' | translate:'C\u1EA5u h\xECnh th\xF4ng s\u1ED1 (Parameters)' }}</h6>
    <div class="row g-3">
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'ar.viewitemparameter.title.unit' | translate:'\u0110\u01A1n v\u1ECB (ng\xE0y, gi\u1EDD, ph\xFAt)' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.unit" name="vspiFormUnit">
          <nz-option *ngFor="let u of unitOptions" [nzValue]="u.value" [nzLabel]="i18n.t(u.key, u.fallback)"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'staParamItem.minUnit' | translate:'\u0110\u01A1n v\u1ECB t\u1ED1i thi\u1EC3u (Min Unit)' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.minUnit" name="vspiFormMinUnit">
          <nz-option *ngFor="let u of minUnitOptions" [nzValue]="u" [nzLabel]="u"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-6" *ngIf="!isNew()">
        <label class="form-label fw-semibold">{{ 'staParamItem.calOrder' | translate:'Th\u1EE9 t\u1EF1 t\xEDnh to\xE1n (Cal Order)' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.calOrder" name="vspiFormCalOrder" [nzDisabled]="true"></nz-input-number>
        <small class="text-muted">{{ 'staParamItem.calOrderHint' | translate:'T\u1EF1 \u0111\u1ED9ng t\u0103ng khi th\xEAm m\u1EDBi' }}</small>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'staParamItem.manageFlag' | translate:'C\u1EDD qu\u1EA3n l\xFD (Manage Flag)' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.manageFlag" name="vspiFormManageFlag"></nz-input-number>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'common.sortOrder' | translate:'S\u1EAFp x\u1EBFp (Orderno)' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.orderno" name="vspiFormOrderno"></nz-input-number>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold d-block">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.activity" name="vspiFormActivity">
          <nz-option [nzValue]="1" [nzLabel]="'common.active' | translate:'Ho\u1EA1t \u0111\u1ED9ng'"></nz-option>
          <nz-option [nzValue]="0" [nzLabel]="'common.inactive' | translate:'Ng\u1EEBng'"></nz-option>
        </nz-select>
      </div>
    </div>
  </ng-container>
</nz-modal>

<!-- Modal x\xE1c nh\u1EADn x\xF3a -->
<nz-modal [nzVisible]="deleteVisible()" [nzTitle]="'common.confirm' | translate:'X\xE1c nh\u1EADn'"
          (nzOnCancel)="closeDeleteConfirm()" (nzOnOk)="confirmDelete()" [nzOkLoading]="deleting()"
          [nzOkText]="'common.confirm' | translate:'X\xE1c nh\u1EADn'" [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'">
  <ng-container *nzModalContent>
    <p class="mb-1">{{ 'staParamItem.confirmDelete' | translate:'B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a th\xF4ng s\u1ED1 n\xE0y?' }}</p>
    <p class="fw-bold mb-0">{{ deleteTargetName }}</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-summary-param-item/view-summary-param-item.component.css */\n.vspi-btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=view-summary-param-item.component.css.map */\n"] }]
  }], () => [{ type: ViewSummaryParamItemService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewSummaryParamItemComponent, { className: "ViewSummaryParamItemComponent", filePath: "src/app/view-summary-param-item/view-summary-param-item.component.ts", lineNumber: 103 });
})();
export {
  ViewSummaryParamItemComponent
};
//# debugId=12b1871a-514c-56da-85c8-38f358c01023
//# sourceMappingURL=chunk-QYYJROSK.js.map
