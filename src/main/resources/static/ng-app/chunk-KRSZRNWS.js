import {
  NzInputNumberComponent,
  NzInputNumberModule
} from "./chunk-IXCMIWQQ.js";
import {
  NzTagComponent,
  NzTagModule
} from "./chunk-HTQAHYN3.js";
import {
  NzMessageService
} from "./chunk-XWW7CXU6.js";
import {
  NzModalComponent,
  NzModalContentDirective,
  NzModalModule
} from "./chunk-OEYWCHIN.js";
import {
  NzTreeComponent,
  NzTreeModule
} from "./chunk-PD7KBOBI.js";
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
  NgModel,
  RequiredValidator
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
  __spreadProps,
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
  ɵɵpureFunction1,
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

// src/app/view-summary-formula/view-summary-formula.service.ts
var API_BASE = "/ar/attendanceSettings/api/arStaFormula";
var ViewSummaryFormulaService = class _ViewSummaryFormulaService {
  constructor(http) {
    this.http = http;
  }
  http;
  getTreeItems() {
    return this.http.get(`${API_BASE}/treeItems`, { withCredentials: true });
  }
  search(itemNo) {
    return this.http.get(API_BASE, {
      params: new HttpParams().set("itemNo", itemNo),
      withCredentials: true
    });
  }
  getById(formularNo) {
    return this.http.get(`${API_BASE}/${formularNo}`, { withCredentials: true });
  }
  getAttItems() {
    return this.http.get(`${API_BASE}/tools/attItems`, { withCredentials: true });
  }
  getStaItems() {
    return this.http.get(`${API_BASE}/tools/staItems`, { withCredentials: true });
  }
  getBasicInfos() {
    return this.http.get(`${API_BASE}/tools/basicInfos`, { withCredentials: true });
  }
  save(payload) {
    return this.http.post(`${API_BASE}/save`, payload, { withCredentials: true });
  }
  delete(formularNo) {
    return this.http.delete(`${API_BASE}/delete/${formularNo}`, {
      withCredentials: true
    });
  }
  static \u0275fac = function ViewSummaryFormulaService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewSummaryFormulaService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewSummaryFormulaService, factory: _ViewSummaryFormulaService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewSummaryFormulaService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-summary-formula/view-summary-formula.component.ts
var _c0 = (a0) => [a0];
var _c1 = () => [];
var _c2 = () => ({ y: "calc(100vh - 420px)" });
function ViewSummaryFormulaComponent_nz_alert_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 24);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ViewSummaryFormulaComponent_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 25);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewSummaryFormulaComponent_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 27);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 26);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 26)(10, "nz-tag", 28);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 26)(15, "button", 29);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275listener("click", function ViewSummaryFormulaComponent_tr_42_Template_button_click_15_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditModal(row_r4));
    });
    \u0275\u0275element(17, "i", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 29);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275listener("click", function ViewSummaryFormulaComponent_tr_42_Template_button_click_18_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDeleteConfirm(row_r4));
    });
    \u0275\u0275element(20, "i", 31);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r5 + 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.condition || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.condition);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.formular || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.formular);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.orderno);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColor", row_r4.activity === 1 ? "success" : "default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.activity === 1 ? \u0275\u0275pipeBind2(12, 10, "common.active", "Ho\u1EA1t \u0111\u1ED9ng") : \u0275\u0275pipeBind2(13, 13, "common.inactive", "Ng\u1EEBng"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(16, 16, "common.edit", "S\u1EEDa"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(19, 19, "common.delete", "X\xF3a"));
  }
}
function ViewSummaryFormulaComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r6 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r6, " ");
  }
}
function ViewSummaryFormulaComponent_ng_container_48_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275listener("click", function ViewSummaryFormulaComponent_ng_container_48_div_42_Template_div_click_0_listener() {
      const itm_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.insertToFormula("ATT_ITEM." + itm_r9.itemId));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const itm_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(itm_r9.itemName);
  }
}
function ViewSummaryFormulaComponent_ng_container_48_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275listener("click", function ViewSummaryFormulaComponent_ng_container_48_div_49_Template_div_click_0_listener() {
      const itm_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.insertToFormula("STA_ITEM." + itm_r11.staItemId));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const itm_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(itm_r11.itemName);
  }
}
function ViewSummaryFormulaComponent_ng_container_48_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275listener("click", function ViewSummaryFormulaComponent_ng_container_48_div_56_Template_div_click_0_listener() {
      const itm_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.insertToFormula("STA_ITEM." + itm_r13.distinctField));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const itm_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(itm_r13.fieldName);
  }
}
function ViewSummaryFormulaComponent_ng_container_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "nz-alert", 32);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "div", 33)(4, "div", 34)(5, "label", 35);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "textarea", 36);
    \u0275\u0275twoWayListener("ngModelChange", function ViewSummaryFormulaComponent_ng_container_48_Template_textarea_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.condition, $event) || (ctx_r1.form.condition = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 34)(10, "label", 35);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementStart(13, "span", 37);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "textarea", 38);
    \u0275\u0275twoWayListener("ngModelChange", function ViewSummaryFormulaComponent_ng_container_48_Template_textarea_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.formular, $event) || (ctx_r1.form.formular = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 39)(17, "label", 35);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "nz-input-number", 40);
    \u0275\u0275twoWayListener("ngModelChange", function ViewSummaryFormulaComponent_ng_container_48_Template_nz_input_number_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.orderno, $event) || (ctx_r1.form.orderno = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 39)(22, "label", 41);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "nz-select", 42);
    \u0275\u0275twoWayListener("ngModelChange", function ViewSummaryFormulaComponent_ng_container_48_Template_nz_select_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.activity, $event) || (ctx_r1.form.activity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(26, "nz-option", 43);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275element(28, "nz-option", 43);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 44)(31, "h6", 45);
    \u0275\u0275element(32, "i", 46);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 47)(36, "div", 48)(37, "div", 49)(38, "div", 50);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 51);
    \u0275\u0275template(42, ViewSummaryFormulaComponent_ng_container_48_div_42_Template, 2, 1, "div", 52);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 48)(44, "div", 49)(45, "div", 50);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 51);
    \u0275\u0275template(49, ViewSummaryFormulaComponent_ng_container_48_div_49_Template, 2, 1, "div", 52);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "div", 48)(51, "div", 49)(52, "div", 50);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 51);
    \u0275\u0275template(56, ViewSummaryFormulaComponent_ng_container_48_div_56_Template, 2, 1, "div", 52);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("nzMessage", \u0275\u0275pipeBind2(2, 20, "pa.formula.configItem", "H\u1EA1ng m\u1EE5c \u0111ang c\u1EA5u h\xECnh:") + " " + ctx_r1.selectedItemLabel());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 23, "pa.formula.conditionLabel", "\u0110i\u1EC1u ki\u1EC7n (Condition)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.condition);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(12, 26, "pa.formula.formularLabel", "C\xF4ng th\u1EE9c (Formular)"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.formular);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 29, "common.sortOrder", "S\u1EAFp x\u1EBFp"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.orderno);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 32, "common.status", "Tr\u1EA1ng th\xE1i"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.activity);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzValue", 1)("nzLabel", \u0275\u0275pipeBind2(27, 35, "common.active", "Ho\u1EA1t \u0111\u1ED9ng"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzValue", 0)("nzLabel", \u0275\u0275pipeBind2(29, 38, "common.inactive", "Ng\u1EEBng"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(34, 41, "pa.formula.toolPanel", "C\xF4ng c\u1EE5"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(40, 44, "ar.viewSummaryFormula.title.kaoqingxiangmuliebiao", "Danh s\xE1ch h\u1EA1ng m\u1EE5c ch\u1EA5m c\xF4ng"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.attItems());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(47, 47, "ar.viewSummaryFormula.title.kaoqinghuizongliebiao", "B\u1EA3ng t\u1ED5ng h\u1EE3p ch\u1EA5m c\xF4ng"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.staItems());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(54, 50, "ar.viewSummaryFormula.title.renyuanjibenxinxi", "Th\xF4ng tin c\u01A1 b\u1EA3n"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.basicInfos());
  }
}
function ViewSummaryFormulaComponent_ng_container_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 54);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 55);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "pa.formula.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a c\xF4ng th\u1EE9c \u0111\xE3 ch\u1ECDn?"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.deleteTargetName);
  }
}
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
  "common.noData",
  "common.totalRows",
  "common.status",
  "common.active",
  "common.inactive",
  "common.sortOrder",
  "arItemParam.treeSearchPlaceholder",
  "ar.viewSummaryFormula.title.huizongxiangmuliebiao",
  "ar.viewSummaryFormula.title.kaoqingxiangmuliebiao",
  "ar.viewSummaryFormula.title.kaoqinghuizongliebiao",
  "ar.viewSummaryFormula.title.renyuanjibenxinxi",
  "pa.formula.configItem",
  "pa.formula.addTitle",
  "pa.formula.editTitle",
  "pa.formula.conditionLabel",
  "pa.formula.formularLabel",
  "pa.formula.selectItemFirst",
  "pa.formula.formularRequired",
  "pa.formula.confirmDelete",
  "pa.formula.condition",
  "pa.formula.formular",
  "pa.formula.toolPanel",
  "staFormula.pageTitle",
  "staFormula.saveSuccess",
  "staFormula.saveFail",
  "staFormula.deleteSuccess",
  "staFormula.deleteFail",
  "staFormula.loadFail"
];
var PAGE_SIZE_OPTIONS = [25, 50, 100, 200];
var EMPTY_FORM = {
  formularNo: null,
  condition: "",
  formular: "",
  orderno: null,
  activity: 1
};
var ViewSummaryFormulaComponent = class _ViewSummaryFormulaComponent {
  constructor(api, i18n, message) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
  }
  api;
  i18n;
  message;
  pageSizeOptions = PAGE_SIZE_OPTIONS;
  treeItems = signal(
    [],
    ...ngDevMode ? [{ debugName: "treeItems" }] : (
      /* istanbul ignore next */
      []
    )
  );
  treeNodes = computed(
    () => this.treeItems().map((o) => ({ title: o.nameVi || o.itemNo, key: o.itemNo, isLeaf: true })),
    ...ngDevMode ? [{ debugName: "treeNodes" }] : (
      /* istanbul ignore next */
      []
    )
  );
  treeSearchValue = "";
  selectedItemNo = null;
  selectedItemLabel = signal(
    null,
    ...ngDevMode ? [{ debugName: "selectedItemLabel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  panelTitle = computed(
    () => this.selectedItemLabel() ? `${this.i18n.t("staFormula.pageTitle", "C\xF4ng th\u1EE9c t\u1ED5ng h\u1EE3p")}: ${this.selectedItemLabel()}` : this.i18n.t("staFormula.pageTitle", "C\xF4ng th\u1EE9c t\u1ED5ng h\u1EE3p"),
    ...ngDevMode ? [{ debugName: "panelTitle" }] : (
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
  attItems = signal(
    [],
    ...ngDevMode ? [{ debugName: "attItems" }] : (
      /* istanbul ignore next */
      []
    )
  );
  staItems = signal(
    [],
    ...ngDevMode ? [{ debugName: "staItems" }] : (
      /* istanbul ignore next */
      []
    )
  );
  basicInfos = signal(
    [],
    ...ngDevMode ? [{ debugName: "basicInfos" }] : (
      /* istanbul ignore next */
      []
    )
  );
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
    () => this.isNew() ? this.i18n.t("pa.formula.addTitle", "Th\xEAm m\u1EDBi c\xF4ng th\u1EE9c") : this.i18n.t("pa.formula.editTitle", "C\u1EADp nh\u1EADt c\xF4ng th\u1EE9c"),
    ...ngDevMode ? [{ debugName: "modalTitle" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = __spreadProps(__spreadValues({}, EMPTY_FORM), { itemNo: "" });
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
    this.api.getTreeItems().subscribe({
      next: (list) => this.treeItems.set(list ?? []),
      error: () => this.treeItems.set([])
    });
    this.api.getAttItems().subscribe((list) => this.attItems.set(list ?? []));
    this.api.getStaItems().subscribe((list) => this.staItems.set(list ?? []));
    this.api.getBasicInfos().subscribe((list) => this.basicInfos.set(list ?? []));
  }
  onTreeClick(event) {
    const node = event.node;
    if (!node)
      return;
    this.selectedItemNo = node.key;
    this.selectedItemLabel.set(node.title);
    this.search();
  }
  search() {
    if (!this.selectedItemNo) {
      this.rows.set([]);
      return;
    }
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.search(this.selectedItemNo).subscribe({
      next: (rows) => {
        this.rows.set(rows ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("staFormula.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.rows.set([]);
        this.loading.set(false);
      }
    });
  }
  // ==================== Modal Thêm mới / Cập nhật ====================
  openAddModal() {
    if (!this.selectedItemNo) {
      this.message.warning(this.i18n.t("pa.formula.selectItemFirst", "Vui l\xF2ng ch\u1ECDn H\u1EA1ng m\u1EE5c \u1EDF b\xEAn tr\xE1i tr\u01B0\u1EDBc!"));
      return;
    }
    this.isNew.set(true);
    this.form = __spreadProps(__spreadValues({}, EMPTY_FORM), { itemNo: this.selectedItemNo });
    this.modalVisible.set(true);
  }
  openEditModal(row) {
    this.isNew.set(false);
    this.form = {
      formularNo: row.formularNo,
      itemNo: row.itemNo,
      condition: row.condition || "",
      formular: row.formular || "",
      orderno: row.orderno,
      activity: row.activity ?? 1
    };
    this.modalVisible.set(true);
  }
  closeModal() {
    this.modalVisible.set(false);
  }
  /** Chèn nhanh mã tham chiếu vào cuối ô công thức - thay cho onclick="insertToFormular(...)" gọi trực
   *  tiếp vào textarea DOM ở bản gốc. */
  insertToFormula(text) {
    this.form.formular = this.form.formular ? `${this.form.formular} ${text}` : text;
  }
  saveForm() {
    if (!this.form.formular) {
      this.message.warning(this.i18n.t("pa.formula.formularRequired", "Vui l\xF2ng nh\u1EADp n\u1ED9i dung c\xF4ng th\u1EE9c!"));
      return;
    }
    const payload = {
      formularNo: this.form.formularNo,
      itemNo: this.form.itemNo,
      condition: this.form.condition,
      formular: this.form.formular,
      orderno: this.form.orderno,
      activity: this.form.activity
    };
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: () => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.message.success(this.i18n.t("staFormula.saveSuccess", "L\u01B0u c\xF4ng th\u1EE9c th\xE0nh c\xF4ng!"));
        this.search();
      },
      error: (err) => {
        this.saving.set(false);
        const msg = err?.error?.error || this.i18n.t("staFormula.saveFail", "L\u01B0u c\xF4ng th\u1EE9c th\u1EA5t b\u1EA1i!");
        this.message.error(msg);
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
    return this.deleteTarget ? `${this.deleteTarget.formularNo} - ${this.deleteTarget.formular}` : "";
  }
  confirmDelete() {
    if (!this.deleteTarget?.formularNo)
      return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.formularNo).subscribe({
      next: () => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.message.success(this.i18n.t("staFormula.deleteSuccess", "X\xF3a c\xF4ng th\u1EE9c th\xE0nh c\xF4ng!"));
        this.search();
      },
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t("staFormula.deleteFail", "X\xF3a c\xF4ng th\u1EE9c th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  static \u0275fac = function ViewSummaryFormulaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewSummaryFormulaComponent)(\u0275\u0275directiveInject(ViewSummaryFormulaService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewSummaryFormulaComponent, selectors: [["app-view-summary-formula"]], decls: 54, vars: 80, consts: [["vsfTable", ""], ["vsfTotalTpl", ""], [1, "row"], [1, "col-md-3", "mb-3"], [3, "nzTitle"], ["nz-input", "", "name", "vsfTreeSearch", 1, "mb-2", 3, "ngModelChange", "ngModel", "placeholder"], [1, "vsf-tree-scroll"], ["nzSelectMode", "", 3, "nzClick", "nzData", "nzSearchValue", "nzSelectedKeys"], [1, "col-md-9", "mb-3"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3", "flex-wrap", "gap-2"], [1, "fw-bold"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "260px"], ["nzWidth", "90px", 1, "text-center"], ["nzWidth", "110px", 1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["nzWidth", "1000px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "6", 1, "text-center", "text-muted"], [1, "text-center"], [1, "vsf-cell-wrap"], [3, "nzColor"], ["nz-button", "", "nzType", "text", "nzSize", "small", 3, "click", "title"], [1, "bx", "bx-edit", "text-warning"], [1, "bx", "bx-trash", "text-danger"], ["nzType", "info", 1, "mb-3", 3, "nzMessage"], [1, "row", "g-3", "mb-3"], [1, "col-md-12"], [1, "form-label", "fw-semibold"], ["nz-input", "", "name", "vsfFormCondition", "rows", "2", 3, "ngModelChange", "ngModel"], [1, "text-danger"], ["nz-input", "", "name", "vsfFormFormular", "rows", "3", "required", "", 3, "ngModelChange", "ngModel"], [1, "col-md-6"], ["name", "vsfFormOrderno", 1, "w-100", 3, "ngModelChange", "ngModel"], [1, "form-label", "fw-semibold", "d-block"], ["name", "vsfFormActivity", 1, "w-100", 3, "ngModelChange", "ngModel"], [3, "nzValue", "nzLabel"], [1, "border-top", "pt-3"], [1, "text-secondary"], [1, "bx", "bx-wrench"], [1, "row", "gx-2"], [1, "col-md-4"], [1, "card", "h-100", "shadow-none", "border"], [1, "card-header", "bg-light", "p-2", "fw-bold", "vsf-tool-header"], [1, "card-body", "p-0", "overflow-auto", "vsf-tool-body"], ["class", "p-1 border-bottom vsf-tool-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "p-1", "border-bottom", "vsf-tool-item", 3, "click"], [1, "mb-1"], [1, "fw-bold", "mb-0"]], template: function ViewSummaryFormulaComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "nz-card", 4);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementStart(4, "input", 5);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewSummaryFormulaComponent_Template_input_ngModelChange_4_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.treeSearchValue, $event) || (ctx.treeSearchValue = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(6, "div", 6)(7, "nz-tree", 7);
      \u0275\u0275listener("nzClick", function ViewSummaryFormulaComponent_Template_nz_tree_nzClick_7_listener($event) {
        return ctx.onTreeClick($event);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(8, "div", 8)(9, "nz-card")(10, "div", 9)(11, "span", 10);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 11);
      \u0275\u0275listener("click", function ViewSummaryFormulaComponent_Template_button_click_13_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(14, "i", 12);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(17, ViewSummaryFormulaComponent_nz_alert_17_Template, 1, 1, "nz-alert", 13);
      \u0275\u0275elementStart(18, "nz-table", 14, 0)(20, "thead")(21, "tr")(22, "th", 15);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "th", 16);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th");
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th", 17);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "th", 18);
      \u0275\u0275text(35);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th", 17);
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "tbody");
      \u0275\u0275template(41, ViewSummaryFormulaComponent_tr_41_Template, 4, 4, "tr", 19)(42, ViewSummaryFormulaComponent_tr_42_Template, 21, 22, "tr", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275template(43, ViewSummaryFormulaComponent_ng_template_43_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(45, "nz-modal", 21);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewSummaryFormulaComponent_Template_nz_modal_nzOnCancel_45_listener() {
        return ctx.closeModal();
      })("nzOnOk", function ViewSummaryFormulaComponent_Template_nz_modal_nzOnOk_45_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(48, ViewSummaryFormulaComponent_ng_container_48_Template, 57, 53, "ng-container", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "nz-modal", 23);
      \u0275\u0275pipe(50, "translate");
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewSummaryFormulaComponent_Template_nz_modal_nzOnCancel_49_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function ViewSummaryFormulaComponent_Template_nz_modal_nzOnOk_49_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(53, ViewSummaryFormulaComponent_ng_container_53_Template, 6, 5, "ng-container", 22);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const vsfTable_r14 = \u0275\u0275reference(19);
      const vsfTotalTpl_r15 = \u0275\u0275reference(44);
      \u0275\u0275advance(2);
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(3, 34, "ar.viewSummaryFormula.title.huizongxiangmuliebiao", "Danh s\xE1ch h\u1EA1ng m\u1EE5c t\u1ED5ng h\u1EE3p"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.treeSearchValue);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(5, 37, "arItemParam.treeSearchPlaceholder", "T\xECm ki\u1EBFm h\u1EA1ng m\u1EE5c..."));
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275property("nzData", ctx.treeNodes())("nzSearchValue", ctx.treeSearchValue)("nzSelectedKeys", ctx.selectedItemNo ? \u0275\u0275pureFunction1(76, _c0, ctx.selectedItemNo) : \u0275\u0275pureFunction0(78, _c1));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.panelTitle());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(16, 40, "common.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", vsfTotalTpl_r15)("nzScroll", \u0275\u0275pureFunction0(79, _c2));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 43, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 46, "pa.formula.condition", "\u0110i\u1EC1u ki\u1EC7n"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 49, "pa.formula.formular", "C\xF4ng th\u1EE9c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 52, "common.sortOrder", "S\u1EAFp x\u1EBFp"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 55, "common.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 58, "common.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", vsfTable_r14.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", ctx.modalTitle())("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(46, 61, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(47, 64, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(4);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(50, 67, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(51, 70, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(52, 73, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, NgModel, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzInputNumberModule, NzInputNumberComponent, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, NzTagModule, NzTagComponent, NzTreeModule, NzTreeComponent, TranslatePipe], styles: ["\n.vsf-tree-scroll[_ngcontent-%COMP%] {\n  max-height: 700px;\n  overflow-y: auto;\n}\n.vsf-cell-wrap[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.vsf-tool-header[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.vsf-tool-body[_ngcontent-%COMP%] {\n  height: 250px;\n  font-size: 0.85rem;\n}\n.vsf-tool-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.vsf-tool-item[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n}\n/*# sourceMappingURL=view-summary-formula.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewSummaryFormulaComponent, [{
    type: Component,
    args: [{ selector: "app-view-summary-formula", standalone: true, imports: [
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
      NzTreeModule,
      TranslatePipe
    ], template: `<div class="row">
  <!-- C\xE2y h\u1EA1ng m\u1EE5c b\xEAn tr\xE1i -->
  <div class="col-md-3 mb-3">
    <nz-card [nzTitle]="'ar.viewSummaryFormula.title.huizongxiangmuliebiao' | translate:'Danh s\xE1ch h\u1EA1ng m\u1EE5c t\u1ED5ng h\u1EE3p'">
      <input nz-input class="mb-2" [(ngModel)]="treeSearchValue" name="vsfTreeSearch"
             [placeholder]="'arItemParam.treeSearchPlaceholder' | translate:'T\xECm ki\u1EBFm h\u1EA1ng m\u1EE5c...'">
      <div class="vsf-tree-scroll">
        <nz-tree [nzData]="treeNodes()" [nzSearchValue]="treeSearchValue" nzSelectMode
                 [nzSelectedKeys]="selectedItemNo ? [selectedItemNo] : []"
                 (nzClick)="onTreeClick($event)"></nz-tree>
      </div>
    </nz-card>
  </div>

  <!-- Danh s\xE1ch c\xF4ng th\u1EE9c b\xEAn ph\u1EA3i -->
  <div class="col-md-9 mb-3">
    <nz-card>
      <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <span class="fw-bold">{{ panelTitle() }}</span>
        <button nz-button nzType="primary" type="button" (click)="openAddModal()">
          <i class="bx bx-plus"></i> {{ 'common.addNew' | translate:'Th\xEAm m\u1EDBi' }}
        </button>
      </div>

      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="vsfTotalTpl"
                [nzScroll]="{ y: 'calc(100vh - 420px)' }" #vsfTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th nzWidth="260px">{{ 'pa.formula.condition' | translate:'\u0110i\u1EC1u ki\u1EC7n' }}</th>
            <th>{{ 'pa.formula.formular' | translate:'C\xF4ng th\u1EE9c' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'common.sortOrder' | translate:'S\u1EAFp x\u1EBFp' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'common.action' | translate:'Thao t\xE1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="6" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of vsfTable.data; let i = index">
            <td class="text-center">{{ i + 1 }}</td>
            <td [attr.title]="row.condition || null" class="vsf-cell-wrap">{{ row.condition }}</td>
            <td [attr.title]="row.formular || null" class="vsf-cell-wrap">{{ row.formular }}</td>
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
        <ng-template #vsfTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal Th\xEAm m\u1EDBi / C\u1EADp nh\u1EADt -->
<nz-modal [nzVisible]="modalVisible()" [nzTitle]="modalTitle()" nzWidth="1000px"
          (nzOnCancel)="closeModal()" (nzOnOk)="saveForm()" [nzOkLoading]="saving()"
          [nzOkText]="'common.save' | translate:'L\u01B0u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <nz-alert nzType="info"
              [nzMessage]="(('pa.formula.configItem' | translate:'H\u1EA1ng m\u1EE5c \u0111ang c\u1EA5u h\xECnh:')) + ' ' + selectedItemLabel()"
              class="mb-3"></nz-alert>

    <div class="row g-3 mb-3">
      <div class="col-md-12">
        <label class="form-label fw-semibold">{{ 'pa.formula.conditionLabel' | translate:'\u0110i\u1EC1u ki\u1EC7n (Condition)' }}</label>
        <textarea nz-input [(ngModel)]="form.condition" name="vsfFormCondition" rows="2"></textarea>
      </div>
      <div class="col-md-12">
        <label class="form-label fw-semibold">{{ 'pa.formula.formularLabel' | translate:'C\xF4ng th\u1EE9c (Formular)' }} <span class="text-danger">*</span></label>
        <textarea nz-input [(ngModel)]="form.formular" name="vsfFormFormular" rows="3" required></textarea>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'common.sortOrder' | translate:'S\u1EAFp x\u1EBFp' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.orderno" name="vsfFormOrderno"></nz-input-number>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold d-block">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.activity" name="vsfFormActivity">
          <nz-option [nzValue]="1" [nzLabel]="'common.active' | translate:'Ho\u1EA1t \u0111\u1ED9ng'"></nz-option>
          <nz-option [nzValue]="0" [nzLabel]="'common.inactive' | translate:'Ng\u1EEBng'"></nz-option>
        </nz-select>
      </div>
    </div>

    <!-- C\xF4ng c\u1EE5 ch\xE8n nhanh v\xE0o \xF4 c\xF4ng th\u1EE9c -->
    <div class="border-top pt-3">
      <h6 class="text-secondary"><i class="bx bx-wrench"></i> {{ 'pa.formula.toolPanel' | translate:'C\xF4ng c\u1EE5' }}</h6>
      <div class="row gx-2">
        <div class="col-md-4">
          <div class="card h-100 shadow-none border">
            <div class="card-header bg-light p-2 fw-bold vsf-tool-header">
              {{ 'ar.viewSummaryFormula.title.kaoqingxiangmuliebiao' | translate:'Danh s\xE1ch h\u1EA1ng m\u1EE5c ch\u1EA5m c\xF4ng' }}
            </div>
            <div class="card-body p-0 overflow-auto vsf-tool-body">
              <div *ngFor="let itm of attItems()" class="p-1 border-bottom vsf-tool-item"
                   (click)="insertToFormula('ATT_ITEM.' + itm.itemId)">{{ itm.itemName }}</div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 shadow-none border">
            <div class="card-header bg-light p-2 fw-bold vsf-tool-header">
              {{ 'ar.viewSummaryFormula.title.kaoqinghuizongliebiao' | translate:'B\u1EA3ng t\u1ED5ng h\u1EE3p ch\u1EA5m c\xF4ng' }}
            </div>
            <div class="card-body p-0 overflow-auto vsf-tool-body">
              <div *ngFor="let itm of staItems()" class="p-1 border-bottom vsf-tool-item"
                   (click)="insertToFormula('STA_ITEM.' + itm.staItemId)">{{ itm.itemName }}</div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 shadow-none border">
            <div class="card-header bg-light p-2 fw-bold vsf-tool-header">
              {{ 'ar.viewSummaryFormula.title.renyuanjibenxinxi' | translate:'Th\xF4ng tin c\u01A1 b\u1EA3n' }}
            </div>
            <div class="card-body p-0 overflow-auto vsf-tool-body">
              <div *ngFor="let itm of basicInfos()" class="p-1 border-bottom vsf-tool-item"
                   (click)="insertToFormula('STA_ITEM.' + itm.distinctField)">{{ itm.fieldName }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ng-container>
</nz-modal>

<!-- Modal x\xE1c nh\u1EADn x\xF3a -->
<nz-modal [nzVisible]="deleteVisible()" [nzTitle]="'common.confirm' | translate:'X\xE1c nh\u1EADn'"
          (nzOnCancel)="closeDeleteConfirm()" (nzOnOk)="confirmDelete()" [nzOkLoading]="deleting()"
          [nzOkText]="'common.confirm' | translate:'X\xE1c nh\u1EADn'" [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'">
  <ng-container *nzModalContent>
    <p class="mb-1">{{ 'pa.formula.confirmDelete' | translate:'B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a c\xF4ng th\u1EE9c \u0111\xE3 ch\u1ECDn?' }}</p>
    <p class="fw-bold mb-0">{{ deleteTargetName }}</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-summary-formula/view-summary-formula.component.css */\n.vsf-tree-scroll {\n  max-height: 700px;\n  overflow-y: auto;\n}\n.vsf-cell-wrap {\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.vsf-tool-header {\n  font-size: 0.9rem;\n}\n.vsf-tool-body {\n  height: 250px;\n  font-size: 0.85rem;\n}\n.vsf-tool-item {\n  cursor: pointer;\n}\n.vsf-tool-item:hover {\n  background-color: #f5f5f5;\n}\n/*# sourceMappingURL=view-summary-formula.component.css.map */\n"] }]
  }], () => [{ type: ViewSummaryFormulaService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewSummaryFormulaComponent, { className: "ViewSummaryFormulaComponent", filePath: "src/app/view-summary-formula/view-summary-formula.component.ts", lineNumber: 97 });
})();
export {
  ViewSummaryFormulaComponent
};
//# debugId=d76afc0c-00c6-5426-ae6e-0ce214afb99f
//# sourceMappingURL=chunk-KRSZRNWS.js.map
