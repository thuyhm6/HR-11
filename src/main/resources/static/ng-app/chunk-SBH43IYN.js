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
import {
  NzCheckboxComponent,
  NzCheckboxModule
} from "./chunk-VWYGF7JF.js";
import "./chunk-JSOAL7UF.js";
import "./chunk-2QLZSMGV.js";
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
  DomSanitizer,
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
  map,
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
  ɵɵsanitizeHtml,
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

// src/app/view-pa-formula/view-pa-formula.service.ts
var API_BASE = "/pa/salary/formula/api";
var FETCH_ALL_LENGTH = 1e5;
var ViewPaFormulaService = class _ViewPaFormulaService {
  constructor(http) {
    this.http = http;
  }
  http;
  getItemList() {
    return this.http.get(`${API_BASE}/itemList`, { withCredentials: true });
  }
  getToolItems() {
    return this.http.get(`${API_BASE}/toolItems`, { withCredentials: true });
  }
  getAllItemNames() {
    return this.http.get(`${API_BASE}/allItemNames`, { withCredentials: true });
  }
  search(itemNo) {
    const params = new HttpParams().set("itemNo", itemNo).set("start", 0).set("length", FETCH_ALL_LENGTH);
    return this.http.get(`${API_BASE}/list`, { params, withCredentials: true }).pipe(map((res) => res.data ?? []));
  }
  getById(formularNo) {
    return this.http.get(`${API_BASE}/${formularNo}`, { withCredentials: true });
  }
  insert(payload) {
    return this.http.post(`${API_BASE}/insert`, payload, { withCredentials: true });
  }
  update(payload) {
    return this.http.put(`${API_BASE}/update`, payload, { withCredentials: true });
  }
  delete(formularNo) {
    return this.http.delete(`${API_BASE}/delete/${formularNo}`, { withCredentials: true });
  }
  swapSeq(formularNo, itemNo, direction) {
    return this.http.put(`${API_BASE}/swapSeq`, { formularNo: String(formularNo), itemNo, direction }, { withCredentials: true });
  }
  static \u0275fac = function ViewPaFormulaService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewPaFormulaService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewPaFormulaService, factory: _ViewPaFormulaService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewPaFormulaService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-pa-formula/view-pa-formula.component.ts
var _c0 = (a0) => [a0];
var _c1 = () => [];
var _c2 = () => ({ y: "calc(100vh - 420px)" });
function ViewPaFormulaComponent_nz_alert_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 28);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ViewPaFormulaComponent_tr_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewPaFormulaComponent_tr_46_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function ViewPaFormulaComponent_tr_46_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const row_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.swapSeq(row_r4, "up"));
    });
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275elementEnd();
  }
}
function ViewPaFormulaComponent_tr_46_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function ViewPaFormulaComponent_tr_46_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const row_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.swapSeq(row_r4, "down"));
    });
    \u0275\u0275element(1, "i", 41);
    \u0275\u0275elementEnd();
  }
}
function ViewPaFormulaComponent_tr_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 30);
    \u0275\u0275listener("click", function ViewPaFormulaComponent_tr_46_Template_tr_click_0_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditModal(row_r4));
    });
    \u0275\u0275elementStart(1, "td", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 32);
    \u0275\u0275listener("click", function ViewPaFormulaComponent_tr_46_Template_td_click_3_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(4, "label", 20);
    \u0275\u0275listener("ngModelChange", function ViewPaFormulaComponent_tr_46_Template_label_ngModelChange_4_listener($event) {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleChecked(row_r4.formularNo, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 32);
    \u0275\u0275listener("click", function ViewPaFormulaComponent_tr_46_Template_td_click_5_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(6, "span", 33);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ViewPaFormulaComponent_tr_46_button_8_Template, 2, 0, "button", 34)(9, ViewPaFormulaComponent_tr_46_button_9_Template, 2, 0, "button", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "td", 36)(11, "td", 36);
    \u0275\u0275elementStart(12, "td", 37);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r7 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.isChecked(row_r4.formularNo));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r4.conditionSeq);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r4.maxSeq == null || row_r4.conditionSeq !== row_r4.maxSeq);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r4.minSeq == null || row_r4.conditionSeq !== row_r4.minSeq);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r1.highlightExpr(row_r4.condition), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r1.highlightExpr(row_r4.formular), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.description);
  }
}
function ViewPaFormulaComponent_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r8 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r8, " ");
  }
}
function ViewPaFormulaComponent_ng_container_52_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function ViewPaFormulaComponent_ng_container_52_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275listener("click", function ViewPaFormulaComponent_ng_container_52_div_34_Template_div_click_0_listener() {
      const itm_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.insertToFocusedField(itm_r11.itemId));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const itm_r11 = ctx.$implicit;
    \u0275\u0275property("title", itm_r11.itemId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(itm_r11.itemName || itm_r11.itemId);
  }
}
function ViewPaFormulaComponent_ng_container_52_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function ViewPaFormulaComponent_ng_container_52_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275listener("click", function ViewPaFormulaComponent_ng_container_52_div_42_Template_div_click_0_listener() {
      const itm_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.insertToFocusedField(itm_r13.itemId));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const itm_r13 = ctx.$implicit;
    \u0275\u0275property("title", itm_r13.itemId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(itm_r13.itemName || itm_r13.itemId);
  }
}
function ViewPaFormulaComponent_ng_container_52_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function ViewPaFormulaComponent_ng_container_52_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275listener("click", function ViewPaFormulaComponent_ng_container_52_div_50_Template_div_click_0_listener() {
      const itm_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.insertToFocusedField(itm_r15.itemId));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const itm_r15 = ctx.$implicit;
    \u0275\u0275property("title", itm_r15.itemId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(itm_r15.itemName || itm_r15.itemId);
  }
}
function ViewPaFormulaComponent_ng_container_52_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function ViewPaFormulaComponent_ng_container_52_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275listener("click", function ViewPaFormulaComponent_ng_container_52_div_58_Template_div_click_0_listener() {
      const itm_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.insertToFocusedField(itm_r17.itemId));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const itm_r17 = ctx.$implicit;
    \u0275\u0275property("title", itm_r17.itemId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(itm_r17.itemName || itm_r17.itemId);
  }
}
function ViewPaFormulaComponent_ng_container_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "nz-alert", 42);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "div", 43)(4, "div", 44)(5, "label", 45);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "textarea", 46);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaFormulaComponent_ng_container_52_Template_textarea_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.condition, $event) || (ctx_r1.form.condition = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("focus", function ViewPaFormulaComponent_ng_container_52_Template_textarea_focus_8_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFieldFocus("condition"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 44)(10, "label", 45);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementStart(13, "span", 47);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "textarea", 48);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaFormulaComponent_ng_container_52_Template_textarea_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.formular, $event) || (ctx_r1.form.formular = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("focus", function ViewPaFormulaComponent_ng_container_52_Template_textarea_focus_15_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFieldFocus("formular"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 44)(17, "label", 45);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "textarea", 49);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaFormulaComponent_ng_container_52_Template_textarea_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.description, $event) || (ctx_r1.form.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 50)(22, "h6", 51);
    \u0275\u0275element(23, "i", 52);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 53)(27, "div", 54)(28, "div", 55)(29, "div", 56);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 57);
    \u0275\u0275template(33, ViewPaFormulaComponent_ng_container_52_div_33_Template, 2, 0, "div", 58)(34, ViewPaFormulaComponent_ng_container_52_div_34_Template, 2, 2, "div", 59);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 54)(36, "div", 55)(37, "div", 56);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 57);
    \u0275\u0275template(41, ViewPaFormulaComponent_ng_container_52_div_41_Template, 2, 0, "div", 58)(42, ViewPaFormulaComponent_ng_container_52_div_42_Template, 2, 2, "div", 59);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 54)(44, "div", 55)(45, "div", 56);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 57);
    \u0275\u0275template(49, ViewPaFormulaComponent_ng_container_52_div_49_Template, 2, 0, "div", 58)(50, ViewPaFormulaComponent_ng_container_52_div_50_Template, 2, 2, "div", 59);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 54)(52, "div", 55)(53, "div", 56);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 57);
    \u0275\u0275template(57, ViewPaFormulaComponent_ng_container_52_div_57_Template, 2, 0, "div", 58)(58, ViewPaFormulaComponent_ng_container_52_div_58_Template, 2, 2, "div", 59);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("nzMessage", \u0275\u0275pipeBind2(2, 20, "pa.formula.configItem", "H\u1EA1ng m\u1EE5c \u0111ang c\u1EA5u h\xECnh:") + " " + (ctx_r1.selectedItemLabel() ?? ctx_r1.form.itemNo));
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 29, "pa.formula.descriptionLabel", "M\xF4 t\u1EA3 (Description)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.description);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(25, 32, "pa.formula.toolPanel", "C\xF4ng c\u1EE5"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(31, 35, "pa.formula.toolParamItem", "Danh s\xE1ch m\u1EE5c nh\u1EADp"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.toolParamItems().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.toolParamItems());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(39, 38, "pa.formula.toolSalaryItem", "Danh s\xE1ch h\u1EA1ng m\u1EE5c l\u01B0\u01A1ng"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.toolSalaryItems().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.toolSalaryItems());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(47, 41, "pa.formula.toolAttendanceItem", "H\u1EA1ng m\u1EE5c ch\u1EA5m c\xF4ng"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.toolAttendanceItems().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.toolAttendanceItems());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(55, 44, "pa.formula.toolFixedParam", "Tham s\u1ED1 c\u1ED1 \u0111\u1ECBnh"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.toolFixedParams().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.toolFixedParams());
  }
}
function ViewPaFormulaComponent_ng_container_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 62);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "pa.formula.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a c\xF4ng th\u1EE9c \u0111\xE3 ch\u1ECDn?"));
  }
}
var I18N_KEYS = [
  "common.stt",
  "common.save",
  "common.close",
  "common.confirm",
  "common.cancel",
  "common.noData",
  "common.totalRows",
  "common.loadFail",
  "common.saveFail",
  "common.deleteSuccess",
  "common.deleteFail",
  "arItemParam.treeSearchPlaceholder",
  "pa.formula.itemList",
  "pa.formula.formulaConfig",
  "pa.formula.addNew",
  "pa.formula.delete",
  "pa.formula.no",
  "pa.formula.conditionSeq",
  "pa.formula.condition",
  "pa.formula.formular",
  "pa.formula.description",
  "pa.formula.configItem",
  "pa.formula.addTitle",
  "pa.formula.editTitle",
  "pa.formula.conditionLabel",
  "pa.formula.formularLabel",
  "pa.formula.descriptionLabel",
  "pa.formula.confirmDelete",
  "pa.formula.selectItemFirst",
  "pa.formula.formularRequired",
  "pa.formula.selectRequired",
  "pa.formula.toolPanel",
  "pa.formula.toolParamItem",
  "pa.formula.toolSalaryItem",
  "pa.formula.toolAttendanceItem",
  "pa.formula.toolFixedParam"
];
var PAGE_SIZE_OPTIONS = [10, 20, 50, 100];
var EMPTY_FORM = {
  formularNo: null,
  condition: "",
  formular: "",
  description: ""
};
var ViewPaFormulaComponent = class _ViewPaFormulaComponent {
  constructor(api, i18n, message, sanitizer) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
    this.sanitizer = sanitizer;
  }
  api;
  i18n;
  message;
  sanitizer;
  pageSizeOptions = PAGE_SIZE_OPTIONS;
  treeItems = signal(
    [],
    ...ngDevMode ? [{ debugName: "treeItems" }] : (
      /* istanbul ignore next */
      []
    )
  );
  treeNodes = computed(
    () => this.treeItems().map((o) => ({ title: o.itemName || o.itemNo, key: o.itemNo, isLeaf: true })),
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
    () => this.selectedItemLabel() ?? this.i18n.t("pa.formula.formulaConfig", "C\u1EA5u h\xECnh c\xF4ng th\u1EE9c"),
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
  /** ITEM_ID → ITEM_NAME toàn hệ thống - dùng hiển thị tên thay cho mã trong ô điều kiện/công thức. */
  itemNameMap = signal(
    {},
    ...ngDevMode ? [{ debugName: "itemNameMap" }] : (
      /* istanbul ignore next */
      []
    )
  );
  toolParamItems = signal(
    [],
    ...ngDevMode ? [{ debugName: "toolParamItems" }] : (
      /* istanbul ignore next */
      []
    )
  );
  toolSalaryItems = signal(
    [],
    ...ngDevMode ? [{ debugName: "toolSalaryItems" }] : (
      /* istanbul ignore next */
      []
    )
  );
  toolAttendanceItems = signal(
    [],
    ...ngDevMode ? [{ debugName: "toolAttendanceItems" }] : (
      /* istanbul ignore next */
      []
    )
  );
  toolFixedParams = signal(
    [],
    ...ngDevMode ? [{ debugName: "toolFixedParams" }] : (
      /* istanbul ignore next */
      []
    )
  );
  checkedFormularNos = signal(
    /* @__PURE__ */ new Set(),
    ...ngDevMode ? [{ debugName: "checkedFormularNos" }] : (
      /* istanbul ignore next */
      []
    )
  );
  allChecked = computed(
    () => {
      const rows = this.rows();
      const checked = this.checkedFormularNos();
      return rows.length > 0 && rows.every((r) => r.formularNo != null && checked.has(r.formularNo));
    },
    ...ngDevMode ? [{ debugName: "allChecked" }] : (
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
  lastFocusedField = "formular";
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
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getItemList().subscribe({
      next: (list) => this.treeItems.set(list ?? []),
      error: () => this.treeItems.set([])
    });
    this.api.getToolItems().subscribe({
      next: (tools) => {
        this.toolParamItems.set(tools.paramItems ?? []);
        this.toolSalaryItems.set(tools.salaryItems ?? []);
        this.toolAttendanceItems.set(tools.attendanceItems ?? []);
        this.toolFixedParams.set(tools.fixedParams ?? []);
      }
    });
    this.api.getAllItemNames().subscribe({
      next: (list) => {
        const map2 = {};
        (list ?? []).forEach((item) => {
          if (item.itemId && item.itemName)
            map2[item.itemId] = item.itemName;
        });
        this.itemNameMap.set(map2);
      }
    });
  }
  onTreeClick(event) {
    const node = event.node;
    if (!node)
      return;
    this.selectedItemNo = node.key;
    this.selectedItemLabel.set(node.title);
    this.checkedFormularNos.set(/* @__PURE__ */ new Set());
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
        this.errorMessage.set(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.rows.set([]);
        this.loading.set(false);
      }
    });
  }
  /** Thay mã hạng mục (\S+ token) bằng tên hạng mục (nếu tra được) để dễ đọc, giữ nguyên hành vi
   *  vpfReplaceItemIds() của bản gốc. */
  highlightExpr(expr) {
    if (!expr)
      return "";
    const map2 = this.itemNameMap();
    const html = expr.replace(/\S+/g, (token) => {
      const name = map2[token];
      if (name && name !== token) {
        return `<span class="text-primary fw-semibold" title="${this.escapeHtml(token)}">${this.escapeHtml(name)}</span>`;
      }
      return this.escapeHtml(token);
    });
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
  escapeHtml(text) {
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  // ==================== Chọn dòng (checkbox) ====================
  isChecked(formularNo) {
    return formularNo != null && this.checkedFormularNos().has(formularNo);
  }
  toggleChecked(formularNo, checked) {
    if (formularNo == null)
      return;
    const next = new Set(this.checkedFormularNos());
    if (checked)
      next.add(formularNo);
    else
      next.delete(formularNo);
    this.checkedFormularNos.set(next);
  }
  toggleAllChecked(checked) {
    const next = new Set(this.checkedFormularNos());
    this.rows().forEach((r) => {
      if (r.formularNo == null)
        return;
      if (checked)
        next.add(r.formularNo);
      else
        next.delete(r.formularNo);
    });
    this.checkedFormularNos.set(next);
  }
  // ==================== Trình tự tính (lên/xuống) ====================
  swapSeq(row, direction) {
    if (row.formularNo == null)
      return;
    this.api.swapSeq(row.formularNo, row.itemNo, direction).subscribe({
      next: () => this.search(),
      error: (err) => this.message.error(err?.error?.error || this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!"))
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
    this.lastFocusedField = "formular";
    this.modalVisible.set(true);
  }
  openEditModal(row) {
    if (row.formularNo == null)
      return;
    this.isNew.set(false);
    this.form = {
      formularNo: row.formularNo,
      itemNo: row.itemNo,
      condition: row.condition || "",
      formular: row.formular || "",
      description: row.description || ""
    };
    this.lastFocusedField = "formular";
    this.modalVisible.set(true);
  }
  closeModal() {
    this.modalVisible.set(false);
  }
  onFieldFocus(field) {
    this.lastFocusedField = field;
  }
  /** Chèn mã tham chiếu vào đúng vị trí con trỏ của ô (điều kiện hoặc công thức) đang focus gần nhất -
   *  giữ nguyên hành vi của bản gốc (thao tác trực tiếp trên DOM textarea qua id cố định vì nội dung
   *  nằm trong *nzModalContent chỉ tồn tại trong DOM khi modal đang mở). */
  insertToFocusedField(itemId) {
    const targetId = this.lastFocusedField === "condition" ? "vpf_condition" : "vpf_formular";
    const el = document.getElementById(targetId);
    const currentValue = this.lastFocusedField === "condition" ? this.form.condition : this.form.formular;
    const start = el?.selectionStart ?? currentValue.length;
    const end = el?.selectionEnd ?? currentValue.length;
    const newValue = currentValue.substring(0, start) + itemId + currentValue.substring(end);
    if (this.lastFocusedField === "condition")
      this.form.condition = newValue;
    else
      this.form.formular = newValue;
    if (el) {
      setTimeout(() => {
        el.focus();
        const pos = start + itemId.length;
        el.setSelectionRange(pos, pos);
      });
    }
  }
  saveForm() {
    if (!this.form.formular || !this.form.formular.trim()) {
      this.message.warning(this.i18n.t("pa.formula.formularRequired", "Vui l\xF2ng nh\u1EADp n\u1ED9i dung c\xF4ng th\u1EE9c!"));
      return;
    }
    const payload = {
      formularNo: this.form.formularNo,
      itemNo: this.form.itemNo,
      condition: this.form.condition,
      formular: this.form.formular,
      description: this.form.description
    };
    this.saving.set(true);
    const request$ = this.isNew() ? this.api.insert(payload) : this.api.update(payload);
    request$.subscribe({
      next: (res) => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.message.success(res.message || this.i18n.t("common.save", "L\u01B0u"));
        this.search();
      },
      error: (err) => {
        this.saving.set(false);
        this.message.error(err?.error?.error || this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  // ==================== Xóa hàng loạt ====================
  openDeleteConfirm() {
    if (this.checkedFormularNos().size === 0) {
      this.message.warning(this.i18n.t("pa.formula.selectRequired", "Vui l\xF2ng ch\u1ECDn \xEDt nh\u1EA5t m\u1ED9t b\u1EA3n ghi!"));
      return;
    }
    this.deleteVisible.set(true);
  }
  closeDeleteConfirm() {
    this.deleteVisible.set(false);
  }
  confirmDelete() {
    const selected = Array.from(this.checkedFormularNos());
    if (selected.length === 0)
      return;
    this.deleting.set(true);
    this.deleteNext(selected, 0);
  }
  deleteNext(selected, index) {
    if (index >= selected.length) {
      this.deleting.set(false);
      this.deleteVisible.set(false);
      this.checkedFormularNos.set(/* @__PURE__ */ new Set());
      this.message.success(this.i18n.t("common.deleteSuccess", "X\xF3a th\xE0nh c\xF4ng!"));
      this.search();
      return;
    }
    this.api.delete(selected[index]).subscribe({
      next: () => this.deleteNext(selected, index + 1),
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t("common.deleteFail", "X\xF3a th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  static \u0275fac = function ViewPaFormulaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewPaFormulaComponent)(\u0275\u0275directiveInject(ViewPaFormulaService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService), \u0275\u0275directiveInject(DomSanitizer));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewPaFormulaComponent, selectors: [["app-view-pa-formula"]], decls: 58, vars: 81, consts: [["vpfTable", ""], ["vpfTotalTpl", ""], [1, "row"], [1, "col-md-3", "mb-3"], [3, "nzTitle"], ["nz-input", "", "name", "vpfTreeSearch", 1, "mb-2", 3, "ngModelChange", "ngModel", "placeholder"], [1, "vpf-tree-scroll"], ["nzSelectMode", "", 3, "nzClick", "nzData", "nzSearchValue", "nzSelectedKeys"], [1, "col-md-9", "mb-3"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3", "flex-wrap", "gap-2"], [1, "fw-bold", "text-primary"], [1, "d-flex", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzType", "default", "nzDanger", "", "type", "button", 3, "click"], [1, "bx", "bx-trash"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "50px", 1, "text-center"], ["nzWidth", "40px", 1, "text-center"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel"], ["nzWidth", "120px", 1, "text-center"], ["nzWidth", "30%"], [4, "ngIf"], ["class", "vpf-row", 3, "click", 4, "ngFor", "ngForOf"], ["nzWidth", "1000px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "6", 1, "text-center", "text-muted"], [1, "vpf-row", 3, "click"], [1, "text-center"], [1, "text-center", 3, "click"], [1, "me-1"], ["nz-button", "", "nzType", "text", "nzSize", "small", "title", "L\xEAn", 3, "click", 4, "ngIf"], ["nz-button", "", "nzType", "text", "nzSize", "small", "title", "Xu\u1ED1ng", 3, "click", 4, "ngIf"], [1, "vpf-cell-wrap", 3, "innerHTML"], [1, "vpf-cell-wrap"], ["nz-button", "", "nzType", "text", "nzSize", "small", "title", "L\xEAn", 3, "click"], [1, "bx", "bx-up-arrow-alt", "text-success"], ["nz-button", "", "nzType", "text", "nzSize", "small", "title", "Xu\u1ED1ng", 3, "click"], [1, "bx", "bx-down-arrow-alt", "text-primary"], ["nzType", "info", 1, "mb-3", 3, "nzMessage"], [1, "row", "g-3", "mb-3"], [1, "col-12"], [1, "form-label", "fw-semibold"], ["nz-input", "", "id", "vpf_condition", "name", "vpfFormCondition", "rows", "2", 1, "vpf-mono", 3, "ngModelChange", "focus", "ngModel"], [1, "text-danger"], ["nz-input", "", "id", "vpf_formular", "name", "vpfFormFormular", "rows", "3", "required", "", 1, "vpf-mono", 3, "ngModelChange", "focus", "ngModel"], ["nz-input", "", "name", "vpfFormDescription", "rows", "2", 3, "ngModelChange", "ngModel"], [1, "border-top", "pt-3"], [1, "text-secondary"], [1, "bx", "bx-wrench"], [1, "row", "gx-2"], [1, "col-md-3"], [1, "card", "h-100", "shadow-none", "border"], [1, "card-header", "bg-light", "p-2", "fw-bold", "vpf-tool-header"], [1, "card-body", "p-0", "overflow-auto", "vpf-tool-body"], ["class", "text-muted small p-2 text-center", 4, "ngIf"], ["class", "p-1 border-bottom vpf-tool-item", 3, "title", "click", 4, "ngFor", "ngForOf"], [1, "text-muted", "small", "p-2", "text-center"], [1, "p-1", "border-bottom", "vpf-tool-item", 3, "click", "title"], [1, "mb-0"]], template: function ViewPaFormulaComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "nz-card", 4);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementStart(4, "input", 5);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewPaFormulaComponent_Template_input_ngModelChange_4_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.treeSearchValue, $event) || (ctx.treeSearchValue = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(6, "div", 6)(7, "nz-tree", 7);
      \u0275\u0275listener("nzClick", function ViewPaFormulaComponent_Template_nz_tree_nzClick_7_listener($event) {
        return ctx.onTreeClick($event);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(8, "div", 8)(9, "nz-card")(10, "div", 9)(11, "span", 10);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 11)(14, "button", 12);
      \u0275\u0275listener("click", function ViewPaFormulaComponent_Template_button_click_14_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(15, "i", 13);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 14);
      \u0275\u0275listener("click", function ViewPaFormulaComponent_Template_button_click_18_listener() {
        return ctx.openDeleteConfirm();
      });
      \u0275\u0275element(19, "i", 15);
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(22, ViewPaFormulaComponent_nz_alert_22_Template, 1, 1, "nz-alert", 16);
      \u0275\u0275elementStart(23, "nz-table", 17, 0)(25, "thead")(26, "tr")(27, "th", 18);
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th", 19)(31, "label", 20);
      \u0275\u0275listener("ngModelChange", function ViewPaFormulaComponent_Template_label_ngModelChange_31_listener($event) {
        return ctx.toggleAllChecked($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th", 21);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "th", 22);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "th", 22);
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "th");
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(44, "tbody");
      \u0275\u0275template(45, ViewPaFormulaComponent_tr_45_Template, 4, 4, "tr", 23)(46, ViewPaFormulaComponent_tr_46_Template, 14, 8, "tr", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275template(47, ViewPaFormulaComponent_ng_template_47_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(49, "nz-modal", 25);
      \u0275\u0275pipe(50, "translate");
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewPaFormulaComponent_Template_nz_modal_nzOnCancel_49_listener() {
        return ctx.closeModal();
      })("nzOnOk", function ViewPaFormulaComponent_Template_nz_modal_nzOnOk_49_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(52, ViewPaFormulaComponent_ng_container_52_Template, 59, 47, "ng-container", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "nz-modal", 27);
      \u0275\u0275pipe(54, "translate");
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewPaFormulaComponent_Template_nz_modal_nzOnCancel_53_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function ViewPaFormulaComponent_Template_nz_modal_nzOnOk_53_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(57, ViewPaFormulaComponent_ng_container_57_Template, 4, 4, "ng-container", 26);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const vpfTable_r18 = \u0275\u0275reference(24);
      const vpfTotalTpl_r19 = \u0275\u0275reference(48);
      \u0275\u0275advance(2);
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(3, 35, "pa.formula.itemList", "H\u1EA1ng m\u1EE5c t\xEDnh"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.treeSearchValue);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(5, 38, "arItemParam.treeSearchPlaceholder", "T\xECm ki\u1EBFm h\u1EA1ng m\u1EE5c..."));
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275property("nzData", ctx.treeNodes())("nzSearchValue", ctx.treeSearchValue)("nzSelectedKeys", ctx.selectedItemNo ? \u0275\u0275pureFunction1(77, _c0, ctx.selectedItemNo) : \u0275\u0275pureFunction0(79, _c1));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.panelTitle());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(17, 41, "pa.formula.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(21, 44, "pa.formula.delete", "X\xF3a"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 20)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", vpfTotalTpl_r19)("nzScroll", \u0275\u0275pureFunction0(80, _c2));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 47, "pa.formula.no", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.allChecked());
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 50, "pa.formula.conditionSeq", "Tr\xECnh t\u1EF1 t\xEDnh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 53, "pa.formula.condition", "\u0110i\u1EC1u ki\u1EC7n"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 56, "pa.formula.formular", "C\xF4ng th\u1EE9c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 59, "pa.formula.description", "M\xF4 t\u1EA3"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", vpfTable_r18.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", ctx.modalTitle())("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(50, 62, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(51, 65, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(4);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(54, 68, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(55, 71, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(56, 74, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, NgModel, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, NzCheckboxModule, NzCheckboxComponent, NzTreeModule, NzTreeComponent, TranslatePipe], styles: ["\n.vpf-tree-scroll[_ngcontent-%COMP%] {\n  max-height: 700px;\n  overflow-y: auto;\n}\n.vpf-cell-wrap[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.vpf-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.vpf-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 0.875rem;\n}\n.vpf-tool-header[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.vpf-tool-body[_ngcontent-%COMP%] {\n  height: 180px;\n  font-size: 0.85rem;\n}\n.vpf-tool-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.vpf-tool-item[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n}\n/*# sourceMappingURL=view-pa-formula.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewPaFormulaComponent, [{
    type: Component,
    args: [{ selector: "app-view-pa-formula", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzButtonModule,
      NzModalModule,
      NzAlertModule,
      NzCheckboxModule,
      NzTreeModule,
      TranslatePipe
    ], template: `<div class="row">
  <!-- Danh s\xE1ch h\u1EA1ng m\u1EE5c t\xEDnh b\xEAn tr\xE1i -->
  <div class="col-md-3 mb-3">
    <nz-card [nzTitle]="'pa.formula.itemList' | translate:'H\u1EA1ng m\u1EE5c t\xEDnh'">
      <input nz-input class="mb-2" [(ngModel)]="treeSearchValue" name="vpfTreeSearch"
             [placeholder]="'arItemParam.treeSearchPlaceholder' | translate:'T\xECm ki\u1EBFm h\u1EA1ng m\u1EE5c...'">
      <div class="vpf-tree-scroll">
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
        <span class="fw-bold text-primary">{{ panelTitle() }}</span>
        <div class="d-flex gap-2 flex-wrap">
          <button nz-button nzType="primary" type="button" (click)="openAddModal()">
            <i class="bx bx-plus"></i> {{ 'pa.formula.addNew' | translate:'Th\xEAm m\u1EDBi' }}
          </button>
          <button nz-button nzType="default" nzDanger type="button" (click)="openDeleteConfirm()">
            <i class="bx bx-trash"></i> {{ 'pa.formula.delete' | translate:'X\xF3a' }}
          </button>
        </div>
      </div>

      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="20" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="vpfTotalTpl"
                [nzScroll]="{ y: 'calc(100vh - 420px)' }" #vpfTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="50px">{{ 'pa.formula.no' | translate:'STT' }}</th>
            <th class="text-center" nzWidth="40px">
              <label nz-checkbox [ngModel]="allChecked()" (ngModelChange)="toggleAllChecked($event)"></label>
            </th>
            <th class="text-center" nzWidth="120px">{{ 'pa.formula.conditionSeq' | translate:'Tr\xECnh t\u1EF1 t\xEDnh' }}</th>
            <th nzWidth="30%">{{ 'pa.formula.condition' | translate:'\u0110i\u1EC1u ki\u1EC7n' }}</th>
            <th nzWidth="30%">{{ 'pa.formula.formular' | translate:'C\xF4ng th\u1EE9c' }}</th>
            <th>{{ 'pa.formula.description' | translate:'M\xF4 t\u1EA3' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="6" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of vpfTable.data; let i = index" class="vpf-row" (click)="openEditModal(row)">
            <td class="text-center">{{ i + 1 }}</td>
            <td class="text-center" (click)="$event.stopPropagation()">
              <label nz-checkbox [ngModel]="isChecked(row.formularNo)"
                     (ngModelChange)="toggleChecked(row.formularNo, $event)"></label>
            </td>
            <td class="text-center" (click)="$event.stopPropagation()">
              <span class="me-1">{{ row.conditionSeq }}</span>
              <button nz-button nzType="text" nzSize="small" title="L\xEAn"
                      *ngIf="row.maxSeq == null || row.conditionSeq !== row.maxSeq"
                      (click)="swapSeq(row, 'up')">
                <i class="bx bx-up-arrow-alt text-success"></i>
              </button>
              <button nz-button nzType="text" nzSize="small" title="Xu\u1ED1ng"
                      *ngIf="row.minSeq == null || row.conditionSeq !== row.minSeq"
                      (click)="swapSeq(row, 'down')">
                <i class="bx bx-down-arrow-alt text-primary"></i>
              </button>
            </td>
            <td class="vpf-cell-wrap" [innerHTML]="highlightExpr(row.condition)"></td>
            <td class="vpf-cell-wrap" [innerHTML]="highlightExpr(row.formular)"></td>
            <td class="vpf-cell-wrap">{{ row.description }}</td>
          </tr>
        </tbody>
        <ng-template #vpfTotalTpl let-total>
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
              [nzMessage]="(('pa.formula.configItem' | translate:'H\u1EA1ng m\u1EE5c \u0111ang c\u1EA5u h\xECnh:')) + ' ' + (selectedItemLabel() ?? form.itemNo)"
              class="mb-3"></nz-alert>

    <div class="row g-3 mb-3">
      <div class="col-12">
        <label class="form-label fw-semibold">{{ 'pa.formula.conditionLabel' | translate:'\u0110i\u1EC1u ki\u1EC7n (Condition)' }}</label>
        <textarea nz-input id="vpf_condition" [(ngModel)]="form.condition" name="vpfFormCondition" rows="2"
                  class="vpf-mono" (focus)="onFieldFocus('condition')"></textarea>
      </div>
      <div class="col-12">
        <label class="form-label fw-semibold">{{ 'pa.formula.formularLabel' | translate:'C\xF4ng th\u1EE9c (Formular)' }} <span class="text-danger">*</span></label>
        <textarea nz-input id="vpf_formular" [(ngModel)]="form.formular" name="vpfFormFormular" rows="3" required
                  class="vpf-mono" (focus)="onFieldFocus('formular')"></textarea>
      </div>
      <div class="col-12">
        <label class="form-label fw-semibold">{{ 'pa.formula.descriptionLabel' | translate:'M\xF4 t\u1EA3 (Description)' }}</label>
        <textarea nz-input [(ngModel)]="form.description" name="vpfFormDescription" rows="2"></textarea>
      </div>
    </div>

    <!-- C\xF4ng c\u1EE5 ch\xE8n nhanh v\xE0o \xF4 \u0111i\u1EC1u ki\u1EC7n/c\xF4ng th\u1EE9c -->
    <div class="border-top pt-3">
      <h6 class="text-secondary"><i class="bx bx-wrench"></i> {{ 'pa.formula.toolPanel' | translate:'C\xF4ng c\u1EE5' }}</h6>
      <div class="row gx-2">
        <div class="col-md-3">
          <div class="card h-100 shadow-none border">
            <div class="card-header bg-light p-2 fw-bold vpf-tool-header">
              {{ 'pa.formula.toolParamItem' | translate:'Danh s\xE1ch m\u1EE5c nh\u1EADp' }}
            </div>
            <div class="card-body p-0 overflow-auto vpf-tool-body">
              <div *ngIf="toolParamItems().length === 0" class="text-muted small p-2 text-center">-</div>
              <div *ngFor="let itm of toolParamItems()" class="p-1 border-bottom vpf-tool-item"
                   [title]="itm.itemId" (click)="insertToFocusedField(itm.itemId)">{{ itm.itemName || itm.itemId }}</div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card h-100 shadow-none border">
            <div class="card-header bg-light p-2 fw-bold vpf-tool-header">
              {{ 'pa.formula.toolSalaryItem' | translate:'Danh s\xE1ch h\u1EA1ng m\u1EE5c l\u01B0\u01A1ng' }}
            </div>
            <div class="card-body p-0 overflow-auto vpf-tool-body">
              <div *ngIf="toolSalaryItems().length === 0" class="text-muted small p-2 text-center">-</div>
              <div *ngFor="let itm of toolSalaryItems()" class="p-1 border-bottom vpf-tool-item"
                   [title]="itm.itemId" (click)="insertToFocusedField(itm.itemId)">{{ itm.itemName || itm.itemId }}</div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card h-100 shadow-none border">
            <div class="card-header bg-light p-2 fw-bold vpf-tool-header">
              {{ 'pa.formula.toolAttendanceItem' | translate:'H\u1EA1ng m\u1EE5c ch\u1EA5m c\xF4ng' }}
            </div>
            <div class="card-body p-0 overflow-auto vpf-tool-body">
              <div *ngIf="toolAttendanceItems().length === 0" class="text-muted small p-2 text-center">-</div>
              <div *ngFor="let itm of toolAttendanceItems()" class="p-1 border-bottom vpf-tool-item"
                   [title]="itm.itemId" (click)="insertToFocusedField(itm.itemId)">{{ itm.itemName || itm.itemId }}</div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card h-100 shadow-none border">
            <div class="card-header bg-light p-2 fw-bold vpf-tool-header">
              {{ 'pa.formula.toolFixedParam' | translate:'Tham s\u1ED1 c\u1ED1 \u0111\u1ECBnh' }}
            </div>
            <div class="card-body p-0 overflow-auto vpf-tool-body">
              <div *ngIf="toolFixedParams().length === 0" class="text-muted small p-2 text-center">-</div>
              <div *ngFor="let itm of toolFixedParams()" class="p-1 border-bottom vpf-tool-item"
                   [title]="itm.itemId" (click)="insertToFocusedField(itm.itemId)">{{ itm.itemName || itm.itemId }}</div>
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
    <p class="mb-0">{{ 'pa.formula.confirmDelete' | translate:'B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a c\xF4ng th\u1EE9c \u0111\xE3 ch\u1ECDn?' }}</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-pa-formula/view-pa-formula.component.css */\n.vpf-tree-scroll {\n  max-height: 700px;\n  overflow-y: auto;\n}\n.vpf-cell-wrap {\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.vpf-row {\n  cursor: pointer;\n}\n.vpf-mono {\n  font-family: monospace;\n  font-size: 0.875rem;\n}\n.vpf-tool-header {\n  font-size: 0.9rem;\n}\n.vpf-tool-body {\n  height: 180px;\n  font-size: 0.85rem;\n}\n.vpf-tool-item {\n  cursor: pointer;\n}\n.vpf-tool-item:hover {\n  background-color: #f5f5f5;\n}\n/*# sourceMappingURL=view-pa-formula.component.css.map */\n"] }]
  }], () => [{ type: ViewPaFormulaService }, { type: I18nService }, { type: NzMessageService }, { type: DomSanitizer }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewPaFormulaComponent, { className: "ViewPaFormulaComponent", filePath: "src/app/view-pa-formula/view-pa-formula.component.ts", lineNumber: 100 });
})();
export {
  ViewPaFormulaComponent
};
//# debugId=3c413509-d818-51e6-b1d3-6e14d9713e93
//# sourceMappingURL=chunk-SBH43IYN.js.map
