import {
  NzInputNumberComponent,
  NzInputNumberModule
} from "./chunk-IXCMIWQQ.js";
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
import {
  NzCheckboxComponent,
  NzCheckboxModule
} from "./chunk-VWYGF7JF.js";
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

// src/app/view-pa-compute-item-param-list/view-pa-compute-item-param-list.service.ts
var API_BASE = "/pa/salary/computeitemparam/api";
var ViewPaComputeItemParamListService = class _ViewPaComputeItemParamListService {
  constructor(http) {
    this.http = http;
  }
  http;
  getList(params) {
    let httpParams = new HttpParams().set("draw", params.draw).set("start", params.start).set("length", params.length);
    if (params.aliasNameSearch)
      httpParams = httpParams.set("aliasNameSearch", params.aliasNameSearch);
    return this.http.get(`${API_BASE}/list`, {
      params: httpParams,
      withCredentials: true
    });
  }
  getOne(paramNo) {
    return this.http.get(`${API_BASE}/${paramNo}`, { withCredentials: true });
  }
  insert(payload) {
    return this.http.post(`${API_BASE}/insert`, payload, { withCredentials: true });
  }
  update(payload) {
    return this.http.put(`${API_BASE}/update`, payload, { withCredentials: true });
  }
  deleteList(paramNos) {
    return this.http.request("DELETE", `${API_BASE}/deleteList`, {
      body: paramNos,
      withCredentials: true
    });
  }
  getItemOptions() {
    return this.http.get(`${API_BASE}/itemList`, { withCredentials: true });
  }
  getApplyTypeOptions() {
    return this.http.get(`${API_BASE}/applyTypeList`, { withCredentials: true });
  }
  swapOrder(paramNo, direction) {
    return this.http.put(`${API_BASE}/swapOrder`, { paramNo, direction }, { withCredentials: true });
  }
  static \u0275fac = function ViewPaComputeItemParamListService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewPaComputeItemParamListService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewPaComputeItemParamListService, factory: _ViewPaComputeItemParamListService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewPaComputeItemParamListService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-pa-compute-item-param-list/view-pa-compute-item-param-list.component.ts
var _c0 = () => ({ x: "1100px", y: "calc(100vh - 420px)" });
function ViewPaComputeItemParamListComponent_nz_alert_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 33);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ViewPaComputeItemParamListComponent_tr_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 34);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewPaComputeItemParamListComponent_tr_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 35);
    \u0275\u0275listener("click", function ViewPaComputeItemParamListComponent_tr_57_Template_tr_click_0_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditModal(row_r4));
    });
    \u0275\u0275elementStart(1, "td", 36);
    \u0275\u0275listener("click", function ViewPaComputeItemParamListComponent_tr_57_Template_td_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "label", 37);
    \u0275\u0275listener("ngModelChange", function ViewPaComputeItemParamListComponent_tr_57_Template_label_ngModelChange_2_listener($event) {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleChecked(row_r4, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 38);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 38);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 36);
    \u0275\u0275listener("click", function ViewPaComputeItemParamListComponent_tr_57_Template_td_click_15_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(16, "span", 39);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 40);
    \u0275\u0275listener("click", function ViewPaComputeItemParamListComponent_tr_57_Template_button_click_18_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.swapOrder(row_r4, "up"));
    });
    \u0275\u0275element(19, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 42);
    \u0275\u0275listener("click", function ViewPaComputeItemParamListComponent_tr_57_Template_button_click_20_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.swapOrder(row_r4, "down"));
    });
    \u0275\u0275element(21, "i", 43);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.isChecked(row_r4));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r1.pageIndex - 1) * ctx_r1.pageSize + i_r5 + 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.cpnyName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.cpnyName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.aliasName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.aliasName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.pricision);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.carryBit);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.applyTypeName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.applyTypeName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r4.calcuOrder);
  }
}
function ViewPaComputeItemParamListComponent_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r6 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r6, " ");
  }
}
function ViewPaComputeItemParamListComponent_ng_container_64_nz_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 53);
  }
  if (rf & 2) {
    const opt_r8 = ctx.$implicit;
    \u0275\u0275property("nzValue", opt_r8.itemNo)("nzLabel", opt_r8.itemName || opt_r8.itemId || opt_r8.itemNo);
  }
}
function ViewPaComputeItemParamListComponent_ng_container_64_nz_option_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 53);
  }
  if (rf & 2) {
    const opt_r9 = ctx.$implicit;
    \u0275\u0275property("nzValue", opt_r9.applyType)("nzLabel", opt_r9.applyTypeName || opt_r9.applyType);
  }
}
function ViewPaComputeItemParamListComponent_ng_container_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 44)(2, "div", 3)(3, "label", 45);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span", 46);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "nz-select", 47);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaComputeItemParamListComponent_ng_container_64_Template_nz_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.addForm.itemNo, $event) || (ctx_r1.addForm.itemNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(10, ViewPaComputeItemParamListComponent_ng_container_64_nz_option_10_Template, 1, 2, "nz-option", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 49)(12, "label", 45);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "nz-input-number", 50);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaComputeItemParamListComponent_ng_container_64_Template_nz_input_number_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.addForm.pricision, $event) || (ctx_r1.addForm.pricision = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 49)(17, "label", 45);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "nz-input-number", 51);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaComputeItemParamListComponent_ng_container_64_Template_nz_input_number_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.addForm.carryBit, $event) || (ctx_r1.addForm.carryBit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 3)(22, "label", 45);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "nz-select", 52);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaComputeItemParamListComponent_ng_container_64_Template_nz_select_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.addForm.applyType, $event) || (ctx_r1.addForm.applyType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(26, ViewPaComputeItemParamListComponent_ng_container_64_nz_option_26_Template, 1, 2, "nz-option", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 13, "pa.computeItemParam.itemName", "T\xEAn h\u1EA1ng m\u1EE5c"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.addForm.itemNo);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(9, 16, "common.confirm", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.itemOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 19, "pa.computeItemParam.pricision", "\u0110\u1ED9 ch\xEDnh x\xE1c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.addForm.pricision);
    \u0275\u0275property("nzMin", 0)("nzPrecision", 0);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 22, "pa.computeItemParam.carryBit", "S\u1ED1 ch\u1EEF s\u1ED1 sau d\u1EA5u ph\u1EA9y"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.addForm.carryBit);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 25, "pa.computeItemParam.applyType", "Lo\u1EA1i \xE1p d\u1EE5ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.addForm.applyType);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.applyTypeOptions());
  }
}
function ViewPaComputeItemParamListComponent_ng_container_69_nz_option_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 53);
  }
  if (rf & 2) {
    const opt_r11 = ctx.$implicit;
    \u0275\u0275property("nzValue", opt_r11.applyType)("nzLabel", opt_r11.applyTypeName || opt_r11.applyType);
  }
}
function ViewPaComputeItemParamListComponent_ng_container_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 44)(2, "div", 49)(3, "label", 45);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 54);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 49)(9, "label", 45);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 54);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 49)(15, "label", 45);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "nz-input-number", 55);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaComputeItemParamListComponent_ng_container_69_Template_nz_input_number_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.pricision, $event) || (ctx_r1.editForm.pricision = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 49)(20, "label", 45);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "nz-input-number", 56);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaComputeItemParamListComponent_ng_container_69_Template_nz_input_number_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.carryBit, $event) || (ctx_r1.editForm.carryBit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 3)(25, "label", 45);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "nz-select", 57);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaComputeItemParamListComponent_ng_container_69_Template_nz_select_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.applyType, $event) || (ctx_r1.editForm.applyType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(29, ViewPaComputeItemParamListComponent_ng_container_69_nz_option_29_Template, 1, 2, "nz-option", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 13, "pa.computeItemParam.company", "C\xF4ng ty"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.editForm.cpnyName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 16, "pa.computeItemParam.itemName", "T\xEAn h\u1EA1ng m\u1EE5c"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.editForm.aliasName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 19, "pa.computeItemParam.pricision", "\u0110\u1ED9 ch\xEDnh x\xE1c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.pricision);
    \u0275\u0275property("nzMin", 0)("nzPrecision", 0);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 22, "pa.computeItemParam.carryBit", "S\u1ED1 ch\u1EEF s\u1ED1 sau d\u1EA5u ph\u1EA9y"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.carryBit);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 25, "pa.computeItemParam.applyType", "Lo\u1EA1i \xE1p d\u1EE5ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.applyType);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.applyTypeOptions());
  }
}
function ViewPaComputeItemParamListComponent_ng_container_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 58);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(3, 2, "pa.computeItemParam.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a c\xE1c b\u1EA3n ghi \u0111\xE3 ch\u1ECDn?"), " (", ctx_r1.selectedCount, ")");
  }
}
var I18N_KEYS = [
  "common.close",
  "common.confirm",
  "common.cancel",
  "common.loadFail",
  "common.noData",
  "common.totalRows",
  "pa.computeItemParam.pageTitle",
  "pa.computeItemParam.no",
  "pa.computeItemParam.company",
  "pa.computeItemParam.itemName",
  "pa.computeItemParam.pricision",
  "pa.computeItemParam.carryBit",
  "pa.computeItemParam.calcuOrder",
  "pa.computeItemParam.applyType",
  "pa.computeItemParam.search",
  "pa.computeItemParam.addNew",
  "pa.computeItemParam.edit",
  "pa.computeItemParam.delete",
  "pa.computeItemParam.save",
  "pa.computeItemParam.addTitle",
  "pa.computeItemParam.editTitle",
  "pa.computeItemParam.confirmDelete",
  "pa.computeItemParam.selectRequired",
  "pa.computeItemParam.selectOne",
  "pa.computeItemParam.validateRequired"
];
var PAGE_SIZE_OPTIONS = [10, 20, 50, 100];
var DEFAULT_PAGE_SIZE = 20;
var EMPTY_ADD_FORM = { itemNo: null, pricision: null, carryBit: null, applyType: null };
var EMPTY_EDIT_FORM = {
  paramNo: null,
  cpnyName: "",
  aliasName: "",
  pricision: null,
  carryBit: null,
  applyType: null
};
var ViewPaComputeItemParamListComponent = class _ViewPaComputeItemParamListComponent {
  constructor(api, i18n, message) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
  }
  api;
  i18n;
  message;
  pageSizeOptions = PAGE_SIZE_OPTIONS;
  rows = signal(
    [],
    ...ngDevMode ? [{ debugName: "rows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  totalRecords = signal(
    0,
    ...ngDevMode ? [{ debugName: "totalRecords" }] : (
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
  applyTypeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "applyTypeOptions" }] : (
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
  pageIndex = 1;
  pageSize = DEFAULT_PAGE_SIZE;
  draw = 1;
  searchAliasName = "";
  checkedKeys = signal(
    /* @__PURE__ */ new Set(),
    ...ngDevMode ? [{ debugName: "checkedKeys" }] : (
      /* istanbul ignore next */
      []
    )
  );
  addModalVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "addModalVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  adding = signal(
    false,
    ...ngDevMode ? [{ debugName: "adding" }] : (
      /* istanbul ignore next */
      []
    )
  );
  addForm = __spreadValues({}, EMPTY_ADD_FORM);
  editModalVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "editModalVisible" }] : (
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
  editForm = __spreadValues({}, EMPTY_EDIT_FORM);
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
    this.api.getApplyTypeOptions().subscribe({
      next: (list) => this.applyTypeOptions.set(list ?? []),
      error: () => this.applyTypeOptions.set([])
    });
    this.search();
  }
  // ==================== Tìm kiếm + phân trang server-side ====================
  search() {
    this.pageIndex = 1;
    this.load();
  }
  onPageIndexChange(index) {
    this.pageIndex = index;
    this.load();
  }
  onPageSizeChange(size) {
    this.pageSize = size;
    this.pageIndex = 1;
    this.load();
  }
  load() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.checkedKeys.set(/* @__PURE__ */ new Set());
    this.draw += 1;
    this.api.getList({
      aliasNameSearch: this.searchAliasName.trim(),
      draw: this.draw,
      start: (this.pageIndex - 1) * this.pageSize,
      length: this.pageSize
    }).subscribe({
      next: (res) => {
        this.rows.set(res.data ?? []);
        this.totalRecords.set(res.recordsTotal ?? 0);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.rows.set([]);
        this.totalRecords.set(0);
        this.loading.set(false);
      }
    });
  }
  // ==================== Chọn nhiều dòng (checkbox) ====================
  isChecked(row) {
    return this.checkedKeys().has(row.paramNo);
  }
  toggleChecked(row, checked) {
    const next = new Set(this.checkedKeys());
    if (checked)
      next.add(row.paramNo);
    else
      next.delete(row.paramNo);
    this.checkedKeys.set(next);
  }
  get allChecked() {
    const list = this.rows();
    return list.length > 0 && list.every((r) => this.isChecked(r));
  }
  get someChecked() {
    return this.checkedKeys().size > 0 && !this.allChecked;
  }
  toggleAllChecked(checked) {
    const next = new Set(this.checkedKeys());
    this.rows().forEach((r) => checked ? next.add(r.paramNo) : next.delete(r.paramNo));
    this.checkedKeys.set(next);
  }
  // ==================== Trình tự tính (lên/xuống) ====================
  swapOrder(row, direction) {
    this.api.swapOrder(row.paramNo, direction).subscribe({
      next: () => this.load(),
      error: (err) => this.message.error(err?.error?.error || "L\u1ED7i kh\xF4ng x\xE1c \u0111\u1ECBnh")
    });
  }
  // ==================== Modal Thêm mới ====================
  openAddModal() {
    this.addForm = __spreadValues({}, EMPTY_ADD_FORM);
    this.api.getItemOptions().subscribe({
      next: (list) => this.itemOptions.set(list ?? []),
      error: () => this.itemOptions.set([])
    });
    this.addModalVisible.set(true);
  }
  closeAddModal() {
    this.addModalVisible.set(false);
  }
  saveAdd() {
    if (!this.addForm.itemNo) {
      this.message.warning(this.i18n.t("pa.computeItemParam.validateRequired", "Vui l\xF2ng nh\u1EADp \u0111\u1EA7y \u0111\u1EE7 th\xF4ng tin b\u1EAFt bu\u1ED9c!"));
      return;
    }
    const payload = {
      itemNo: this.addForm.itemNo,
      pricision: this.addForm.pricision,
      carryBit: this.addForm.carryBit,
      applyType: this.addForm.applyType
    };
    this.adding.set(true);
    this.api.insert(payload).subscribe({
      next: (res) => {
        this.adding.set(false);
        this.addModalVisible.set(false);
        this.message.success(res.message || this.i18n.t("pa.computeItemParam.save", "L\u01B0u"));
        this.search();
      },
      error: (err) => {
        this.adding.set(false);
        this.message.error(err?.error?.error || "L\u1ED7i kh\xF4ng x\xE1c \u0111\u1ECBnh");
      }
    });
  }
  // ==================== Modal Chỉnh sửa ====================
  editSelected() {
    const selected = this.rows().filter((r) => this.isChecked(r));
    if (selected.length !== 1) {
      this.message.warning(this.i18n.t("pa.computeItemParam.selectOne", "Vui l\xF2ng ch\u1ECDn \u0111\xFAng m\u1ED9t b\u1EA3n ghi \u0111\u1EC3 s\u1EEDa!"));
      return;
    }
    this.openEditModal(selected[0]);
  }
  openEditModal(row) {
    this.api.getOne(row.paramNo).subscribe({
      next: (dto) => {
        this.editForm = {
          paramNo: dto.paramNo,
          cpnyName: dto.cpnyName || dto.cpnyId || "",
          aliasName: dto.aliasName || dto.itemId || "",
          pricision: dto.pricision,
          carryBit: dto.carryBit,
          applyType: dto.applyType
        };
        this.editModalVisible.set(true);
      },
      error: (err) => {
        this.message.error(err?.error?.error || this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  closeEditModal() {
    this.editModalVisible.set(false);
  }
  saveEdit() {
    if (!this.editForm.paramNo)
      return;
    const payload = {
      paramNo: this.editForm.paramNo,
      pricision: this.editForm.pricision,
      carryBit: this.editForm.carryBit,
      applyType: this.editForm.applyType
    };
    this.saving.set(true);
    this.api.update(payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        this.editModalVisible.set(false);
        this.message.success(res.message || this.i18n.t("pa.computeItemParam.save", "L\u01B0u"));
        this.load();
      },
      error: (err) => {
        this.saving.set(false);
        this.message.error(err?.error?.error || "L\u1ED7i kh\xF4ng x\xE1c \u0111\u1ECBnh");
      }
    });
  }
  // ==================== Xóa nhiều dòng ====================
  openDeleteConfirm() {
    if (this.checkedKeys().size === 0) {
      this.message.warning(this.i18n.t("pa.computeItemParam.selectRequired", "Vui l\xF2ng ch\u1ECDn \xEDt nh\u1EA5t m\u1ED9t b\u1EA3n ghi!"));
      return;
    }
    this.deleteVisible.set(true);
  }
  closeDeleteConfirm() {
    this.deleteVisible.set(false);
  }
  get selectedCount() {
    return this.checkedKeys().size;
  }
  confirmDelete() {
    const paramNos = this.rows().filter((r) => this.isChecked(r)).map((r) => r.paramNo);
    if (paramNos.length === 0) {
      this.deleteVisible.set(false);
      return;
    }
    this.deleting.set(true);
    this.api.deleteList(paramNos).subscribe({
      next: (res) => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.message.success(res.message || "X\xF3a th\xE0nh c\xF4ng");
        this.search();
      },
      error: (err) => {
        this.deleting.set(false);
        this.message.error(err?.error?.error || "L\u1ED7i kh\xF4ng x\xE1c \u0111\u1ECBnh");
      }
    });
  }
  static \u0275fac = function ViewPaComputeItemParamListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewPaComputeItemParamListComponent)(\u0275\u0275directiveInject(ViewPaComputeItemParamListService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewPaComputeItemParamListComponent, selectors: [["app-view-pa-compute-item-param-list"]], decls: 75, vars: 107, consts: [["vpciplTable", ""], ["vpciplTotalTpl", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-4"], [1, "form-label"], ["nz-input", "", "name", "vpciplSearchAliasName", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "col-md-8", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzType", "default", "type", "button", 3, "click"], [1, "bx", "bx-edit"], ["nz-button", "", "nzDanger", "", "type", "button", 3, "click"], [1, "bx", "bx-trash"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [3, "nzPageIndexChange", "nzPageSizeChange", "nzData", "nzFrontPagination", "nzLoading", "nzTotal", "nzPageIndex", "nzPageSize", "nzPageSizeOptions", "nzShowSizeChanger", "nzShowTotal", "nzScroll"], ["nzWidth", "40px", 1, "text-center"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel", "nzIndeterminate"], ["nzWidth", "50px", 1, "text-center"], ["nzWidth", "130px"], ["nzWidth", "120px", 1, "text-center"], ["nzWidth", "140px", 1, "text-center"], ["nzWidth", "180px"], ["nzWidth", "130px", 1, "text-center"], [4, "ngIf"], ["class", "vpcipl-row-clickable", 3, "click", 4, "ngFor", "ngForOf"], ["nzWidth", "600px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "8", 1, "text-center", "text-muted"], [1, "vpcipl-row-clickable", 3, "click"], [1, "text-center", 3, "click"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel"], [1, "text-center"], [1, "me-1"], ["nz-button", "", "nzType", "text", "nzSize", "small", "title", "L\xEAn", 3, "click"], [1, "bx", "bx-up-arrow-alt", "text-success"], ["nz-button", "", "nzType", "text", "nzSize", "small", "title", "Xu\u1ED1ng", 3, "click"], [1, "bx", "bx-down-arrow-alt", "text-primary"], [1, "row", "g-3"], [1, "form-label", "fw-semibold"], [1, "text-danger"], ["name", "vpciplAddItemNo", "nzShowSearch", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col-md-6"], ["name", "vpciplAddPricision", 1, "w-100", 3, "ngModelChange", "ngModel", "nzMin", "nzPrecision"], ["name", "vpciplAddCarryBit", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vpciplAddApplyType", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], [3, "nzValue", "nzLabel"], [1, "form-control-plaintext"], ["name", "vpciplEditPricision", 1, "w-100", 3, "ngModelChange", "ngModel", "nzMin", "nzPrecision"], ["name", "vpciplEditCarryBit", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vpciplEditApplyType", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], [1, "mb-0"]], template: function ViewPaComputeItemParamListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "nz-card", 4)(3, "form", 5);
      \u0275\u0275listener("ngSubmit", function ViewPaComputeItemParamListComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 6)(5, "label", 7);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function ViewPaComputeItemParamListComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchAliasName, $event) || (ctx.searchAliasName = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("keyup.enter", function ViewPaComputeItemParamListComponent_Template_input_keyup_enter_8_listener() {
        return ctx.search();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 9)(10, "button", 10);
      \u0275\u0275element(11, "i", 11);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 12);
      \u0275\u0275listener("click", function ViewPaComputeItemParamListComponent_Template_button_click_14_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(15, "i", 13);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 14);
      \u0275\u0275listener("click", function ViewPaComputeItemParamListComponent_Template_button_click_18_listener() {
        return ctx.editSelected();
      });
      \u0275\u0275element(19, "i", 15);
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "button", 16);
      \u0275\u0275listener("click", function ViewPaComputeItemParamListComponent_Template_button_click_22_listener() {
        return ctx.openDeleteConfirm();
      });
      \u0275\u0275element(23, "i", 17);
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(26, "nz-card");
      \u0275\u0275template(27, ViewPaComputeItemParamListComponent_nz_alert_27_Template, 1, 1, "nz-alert", 18);
      \u0275\u0275elementStart(28, "nz-table", 19, 0);
      \u0275\u0275listener("nzPageIndexChange", function ViewPaComputeItemParamListComponent_Template_nz_table_nzPageIndexChange_28_listener($event) {
        return ctx.onPageIndexChange($event);
      })("nzPageSizeChange", function ViewPaComputeItemParamListComponent_Template_nz_table_nzPageSizeChange_28_listener($event) {
        return ctx.onPageSizeChange($event);
      });
      \u0275\u0275elementStart(30, "thead")(31, "tr")(32, "th", 20)(33, "label", 21);
      \u0275\u0275listener("ngModelChange", function ViewPaComputeItemParamListComponent_Template_label_ngModelChange_33_listener($event) {
        return ctx.toggleAllChecked($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "th", 22);
      \u0275\u0275text(35);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th", 23);
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "th");
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
      \u0275\u0275elementStart(52, "th", 27);
      \u0275\u0275text(53);
      \u0275\u0275pipe(54, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "tbody");
      \u0275\u0275template(56, ViewPaComputeItemParamListComponent_tr_56_Template, 4, 4, "tr", 28)(57, ViewPaComputeItemParamListComponent_tr_57_Template, 22, 11, "tr", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275template(58, ViewPaComputeItemParamListComponent_ng_template_58_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(60, "nz-modal", 30);
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275pipe(62, "translate");
      \u0275\u0275pipe(63, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewPaComputeItemParamListComponent_Template_nz_modal_nzOnCancel_60_listener() {
        return ctx.closeAddModal();
      })("nzOnOk", function ViewPaComputeItemParamListComponent_Template_nz_modal_nzOnOk_60_listener() {
        return ctx.saveAdd();
      });
      \u0275\u0275template(64, ViewPaComputeItemParamListComponent_ng_container_64_Template, 27, 28, "ng-container", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "nz-modal", 30);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275pipe(68, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewPaComputeItemParamListComponent_Template_nz_modal_nzOnCancel_65_listener() {
        return ctx.closeEditModal();
      })("nzOnOk", function ViewPaComputeItemParamListComponent_Template_nz_modal_nzOnOk_65_listener() {
        return ctx.saveEdit();
      });
      \u0275\u0275template(69, ViewPaComputeItemParamListComponent_ng_container_69_Template, 30, 28, "ng-container", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "nz-modal", 32);
      \u0275\u0275pipe(71, "translate");
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewPaComputeItemParamListComponent_Template_nz_modal_nzOnCancel_70_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function ViewPaComputeItemParamListComponent_Template_nz_modal_nzOnOk_70_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(74, ViewPaComputeItemParamListComponent_ng_container_74_Template, 4, 5, "ng-container", 31);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const vpciplTable_r12 = \u0275\u0275reference(29);
      const vpciplTotalTpl_r13 = \u0275\u0275reference(59);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 43, "pa.computeItemParam.itemName", "T\xEAn h\u1EA1ng m\u1EE5c"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchAliasName);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(13, 46, "pa.computeItemParam.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(17, 49, "pa.computeItemParam.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(21, 52, "pa.computeItemParam.edit", "S\u1EEDa"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(25, 55, "pa.computeItemParam.delete", "X\xF3a"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzFrontPagination", false)("nzLoading", ctx.loading())("nzTotal", ctx.totalRecords())("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowSizeChanger", true)("nzShowTotal", vpciplTotalTpl_r13)("nzScroll", \u0275\u0275pureFunction0(106, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.allChecked)("nzIndeterminate", ctx.someChecked);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 58, "pa.computeItemParam.no", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 61, "pa.computeItemParam.company", "C\xF4ng ty"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 64, "pa.computeItemParam.itemName", "T\xEAn h\u1EA1ng m\u1EE5c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 67, "pa.computeItemParam.pricision", "T\xEDnh ch\xEDnh x\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 70, "pa.computeItemParam.carryBit", "Ti\u1EC1n 1 \u0111\u01A1n v\u1ECB"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 73, "pa.computeItemParam.applyType", "Lo\u1EA1i \xE1p d\u1EE5ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 76, "pa.computeItemParam.calcuOrder", "Tr\xECnh t\u1EF1 t\xEDnh"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", vpciplTable_r12.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.addModalVisible())("nzTitle", \u0275\u0275pipeBind2(61, 79, "pa.computeItemParam.addTitle", "Th\xEAm m\u1EDBi th\xF4ng s\u1ED1 m\u1EE5c t\xEDnh to\xE1n"))("nzOkLoading", ctx.adding())("nzOkText", \u0275\u0275pipeBind2(62, 82, "pa.computeItemParam.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(63, 85, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(5);
      \u0275\u0275property("nzVisible", ctx.editModalVisible())("nzTitle", \u0275\u0275pipeBind2(66, 88, "pa.computeItemParam.editTitle", "Ch\u1EC9nh s\u1EEDa th\xF4ng s\u1ED1 m\u1EE5c t\xEDnh to\xE1n"))("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(67, 91, "pa.computeItemParam.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(68, 94, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(5);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(71, 97, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(72, 100, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(73, 103, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzInputNumberModule, NzInputNumberComponent, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzCheckboxModule, NzCheckboxComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\n.vpcipl-row-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=view-pa-compute-item-param-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewPaComputeItemParamListComponent, [{
    type: Component,
    args: [{ selector: "app-view-pa-compute-item-param-list", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzInputNumberModule,
      NzSelectModule,
      NzButtonModule,
      NzCheckboxModule,
      NzModalModule,
      NzAlertModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3" (ngSubmit)="search()">
        <div class="col-md-4">
          <label class="form-label">{{ 'pa.computeItemParam.itemName' | translate:'T\xEAn h\u1EA1ng m\u1EE5c' }}</label>
          <input nz-input [(ngModel)]="searchAliasName" name="vpciplSearchAliasName" (keyup.enter)="search()">
        </div>
        <div class="col-md-8 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'pa.computeItemParam.search' | translate:'Tra c\u1EE9u' }}
          </button>
          <button nz-button nzType="primary" type="button" (click)="openAddModal()">
            <i class="bx bx-plus"></i> {{ 'pa.computeItemParam.addNew' | translate:'Th\xEAm m\u1EDBi' }}
          </button>
          <button nz-button nzType="default" type="button" (click)="editSelected()">
            <i class="bx bx-edit"></i> {{ 'pa.computeItemParam.edit' | translate:'S\u1EEDa' }}
          </button>
          <button nz-button nzDanger type="button" (click)="openDeleteConfirm()">
            <i class="bx bx-trash"></i> {{ 'pa.computeItemParam.delete' | translate:'X\xF3a' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <!-- Server-side pagination (draw/start/length -> recordsTotal), \u0111\xFAng h\xE0nh vi DataTables g\u1ED1c. -->
      <nz-table [nzData]="rows()" [nzFrontPagination]="false" [nzLoading]="loading()" [nzTotal]="totalRecords()"
                [nzPageIndex]="pageIndex" [nzPageSize]="pageSize" [nzPageSizeOptions]="pageSizeOptions"
                [nzShowSizeChanger]="true" [nzShowTotal]="vpciplTotalTpl"
                (nzPageIndexChange)="onPageIndexChange($event)" (nzPageSizeChange)="onPageSizeChange($event)"
                [nzScroll]="{ x: '1100px', y: 'calc(100vh - 420px)' }" #vpciplTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="40px">
              <label nz-checkbox [ngModel]="allChecked" [nzIndeterminate]="someChecked" (ngModelChange)="toggleAllChecked($event)"></label>
            </th>
            <th class="text-center" nzWidth="50px">{{ 'pa.computeItemParam.no' | translate:'STT' }}</th>
            <th nzWidth="130px">{{ 'pa.computeItemParam.company' | translate:'C\xF4ng ty' }}</th>
            <th>{{ 'pa.computeItemParam.itemName' | translate:'T\xEAn h\u1EA1ng m\u1EE5c' }}</th>
            <th class="text-center" nzWidth="120px">{{ 'pa.computeItemParam.pricision' | translate:'T\xEDnh ch\xEDnh x\xE1c' }}</th>
            <th class="text-center" nzWidth="140px">{{ 'pa.computeItemParam.carryBit' | translate:'Ti\u1EC1n 1 \u0111\u01A1n v\u1ECB' }}</th>
            <th nzWidth="180px">{{ 'pa.computeItemParam.applyType' | translate:'Lo\u1EA1i \xE1p d\u1EE5ng' }}</th>
            <th class="text-center" nzWidth="130px">{{ 'pa.computeItemParam.calcuOrder' | translate:'Tr\xECnh t\u1EF1 t\xEDnh' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="8" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of vpciplTable.data; let i = index" class="vpcipl-row-clickable" (click)="openEditModal(row)">
            <td class="text-center" (click)="$event.stopPropagation()">
              <label nz-checkbox [ngModel]="isChecked(row)" (ngModelChange)="toggleChecked(row, $event)"></label>
            </td>
            <td class="text-center">{{ (pageIndex - 1) * pageSize + i + 1 }}</td>
            <td [attr.title]="row.cpnyName || null">{{ row.cpnyName }}</td>
            <td [attr.title]="row.aliasName || null">{{ row.aliasName }}</td>
            <td class="text-center">{{ row.pricision }}</td>
            <td class="text-center">{{ row.carryBit }}</td>
            <td [attr.title]="row.applyTypeName || null">{{ row.applyTypeName }}</td>
            <td class="text-center" (click)="$event.stopPropagation()">
              <span class="me-1">{{ row.calcuOrder }}</span>
              <button nz-button nzType="text" nzSize="small" title="L\xEAn" (click)="swapOrder(row, 'up')">
                <i class="bx bx-up-arrow-alt text-success"></i>
              </button>
              <button nz-button nzType="text" nzSize="small" title="Xu\u1ED1ng" (click)="swapOrder(row, 'down')">
                <i class="bx bx-down-arrow-alt text-primary"></i>
              </button>
            </td>
          </tr>
        </tbody>
        <ng-template #vpciplTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal Th\xEAm m\u1EDBi -->
<nz-modal [nzVisible]="addModalVisible()" [nzTitle]="'pa.computeItemParam.addTitle' | translate:'Th\xEAm m\u1EDBi th\xF4ng s\u1ED1 m\u1EE5c t\xEDnh to\xE1n'"
          nzWidth="600px" (nzOnCancel)="closeAddModal()" (nzOnOk)="saveAdd()" [nzOkLoading]="adding()"
          [nzOkText]="'pa.computeItemParam.save' | translate:'L\u01B0u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <div class="row g-3">
      <div class="col-12">
        <label class="form-label fw-semibold">{{ 'pa.computeItemParam.itemName' | translate:'T\xEAn h\u1EA1ng m\u1EE5c' }} <span class="text-danger">*</span></label>
        <nz-select class="w-100" [(ngModel)]="addForm.itemNo" name="vpciplAddItemNo" nzShowSearch
                   [nzPlaceHolder]="'common.confirm' | translate:'-- Ch\u1ECDn --'">
          <nz-option *ngFor="let opt of itemOptions()" [nzValue]="opt.itemNo" [nzLabel]="opt.itemName || opt.itemId || opt.itemNo"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.computeItemParam.pricision' | translate:'\u0110\u1ED9 ch\xEDnh x\xE1c' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="addForm.pricision" name="vpciplAddPricision" [nzMin]="0" [nzPrecision]="0"></nz-input-number>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.computeItemParam.carryBit' | translate:'S\u1ED1 ch\u1EEF s\u1ED1 sau d\u1EA5u ph\u1EA9y' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="addForm.carryBit" name="vpciplAddCarryBit"></nz-input-number>
      </div>
      <div class="col-12">
        <label class="form-label fw-semibold">{{ 'pa.computeItemParam.applyType' | translate:'Lo\u1EA1i \xE1p d\u1EE5ng' }}</label>
        <nz-select class="w-100" [(ngModel)]="addForm.applyType" name="vpciplAddApplyType" nzAllowClear>
          <nz-option *ngFor="let opt of applyTypeOptions()" [nzValue]="opt.applyType" [nzLabel]="opt.applyTypeName || opt.applyType"></nz-option>
        </nz-select>
      </div>
    </div>
  </ng-container>
</nz-modal>

<!-- Modal Ch\u1EC9nh s\u1EEDa -->
<nz-modal [nzVisible]="editModalVisible()" [nzTitle]="'pa.computeItemParam.editTitle' | translate:'Ch\u1EC9nh s\u1EEDa th\xF4ng s\u1ED1 m\u1EE5c t\xEDnh to\xE1n'"
          nzWidth="600px" (nzOnCancel)="closeEditModal()" (nzOnOk)="saveEdit()" [nzOkLoading]="saving()"
          [nzOkText]="'pa.computeItemParam.save' | translate:'L\u01B0u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <div class="row g-3">
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.computeItemParam.company' | translate:'C\xF4ng ty' }}</label>
        <div class="form-control-plaintext">{{ editForm.cpnyName }}</div>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.computeItemParam.itemName' | translate:'T\xEAn h\u1EA1ng m\u1EE5c' }}</label>
        <div class="form-control-plaintext">{{ editForm.aliasName }}</div>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.computeItemParam.pricision' | translate:'\u0110\u1ED9 ch\xEDnh x\xE1c' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="editForm.pricision" name="vpciplEditPricision" [nzMin]="0" [nzPrecision]="0"></nz-input-number>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.computeItemParam.carryBit' | translate:'S\u1ED1 ch\u1EEF s\u1ED1 sau d\u1EA5u ph\u1EA9y' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="editForm.carryBit" name="vpciplEditCarryBit"></nz-input-number>
      </div>
      <div class="col-12">
        <label class="form-label fw-semibold">{{ 'pa.computeItemParam.applyType' | translate:'Lo\u1EA1i \xE1p d\u1EE5ng' }}</label>
        <nz-select class="w-100" [(ngModel)]="editForm.applyType" name="vpciplEditApplyType" nzAllowClear>
          <nz-option *ngFor="let opt of applyTypeOptions()" [nzValue]="opt.applyType" [nzLabel]="opt.applyTypeName || opt.applyType"></nz-option>
        </nz-select>
      </div>
    </div>
  </ng-container>
</nz-modal>

<!-- Modal x\xE1c nh\u1EADn x\xF3a nhi\u1EC1u d\xF2ng -->
<nz-modal [nzVisible]="deleteVisible()" [nzTitle]="'common.confirm' | translate:'X\xE1c nh\u1EADn'"
          (nzOnCancel)="closeDeleteConfirm()" (nzOnOk)="confirmDelete()" [nzOkLoading]="deleting()"
          [nzOkText]="'common.confirm' | translate:'X\xE1c nh\u1EADn'" [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'">
  <ng-container *nzModalContent>
    <p class="mb-0">{{ 'pa.computeItemParam.confirmDelete' | translate:'B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a c\xE1c b\u1EA3n ghi \u0111\xE3 ch\u1ECDn?' }} ({{ selectedCount }})</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-pa-compute-item-param-list/view-pa-compute-item-param-list.component.css */\n.vpcipl-row-clickable {\n  cursor: pointer;\n}\n/*# sourceMappingURL=view-pa-compute-item-param-list.component.css.map */\n"] }]
  }], () => [{ type: ViewPaComputeItemParamListService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewPaComputeItemParamListComponent, { className: "ViewPaComputeItemParamListComponent", filePath: "src/app/view-pa-compute-item-param-list/view-pa-compute-item-param-list.component.ts", lineNumber: 97 });
})();
export {
  ViewPaComputeItemParamListComponent
};
//# debugId=8b08ee02-c71e-5f7f-9181-b82b09c89136
//# sourceMappingURL=chunk-6EJ3235F.js.map
