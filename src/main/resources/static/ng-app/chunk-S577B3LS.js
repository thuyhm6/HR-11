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
import "./chunk-VWYGF7JF.js";
import "./chunk-JSOAL7UF.js";
import "./chunk-2QLZSMGV.js";
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
  ɵɵinterpolate1,
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

// src/app/view-org-cost-center/view-org-cost-center.service.ts
var API_BASE = "/org/api/costCenter";
var ViewOrgCostCenterService = class _ViewOrgCostCenterService {
  constructor(http) {
    this.http = http;
  }
  http;
  getList(payload) {
    return this.http.post(`${API_BASE}/list`, payload, { withCredentials: true });
  }
  save(obj) {
    return this.http.post(`${API_BASE}/save`, obj, { withCredentials: true });
  }
  delete(seq) {
    return this.http.post(`${API_BASE}/delete`, null, {
      params: new HttpParams().set("seq", seq),
      withCredentials: true
    });
  }
  static \u0275fac = function ViewOrgCostCenterService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewOrgCostCenterService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewOrgCostCenterService, factory: _ViewOrgCostCenterService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewOrgCostCenterService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-org-cost-center/view-org-cost-center.component.ts
var _c0 = () => ({ x: "1300px" });
function ViewOrgCostCenterComponent_tr_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewOrgCostCenterComponent_tr_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 31);
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
    \u0275\u0275elementStart(11, "td", 31);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 31);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 31);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 31)(18, "button", 32);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275listener("click", function ViewOrgCostCenterComponent_tr_63_Template_button_click_18_listener() {
      const row_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openEditModal(row_r3));
    });
    \u0275\u0275element(20, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 32);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275listener("click", function ViewOrgCostCenterComponent_tr_63_Template_button_click_21_listener() {
      const row_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openDeleteConfirm(row_r3));
    });
    \u0275\u0275element(23, "i", 34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    const i_r5 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r5 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.codeNo);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r3.codeName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r3.codeName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r3.codeEngName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r3.codeEngName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r3.remark || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r3.remark);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.startDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.endDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.activity);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", \u0275\u0275interpolate1("vocc_btnEdit_", row_r3.seq))("title", \u0275\u0275pipeBind2(19, 17, "common.edit", "S\u1EEDa"));
    \u0275\u0275advance(3);
    \u0275\u0275property("id", \u0275\u0275interpolate1("vocc_btnDelete_", row_r3.seq))("title", \u0275\u0275pipeBind2(22, 20, "common.delete", "X\xF3a"));
  }
}
function ViewOrgCostCenterComponent_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r6 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r6, " ");
  }
}
function ViewOrgCostCenterComponent_ng_container_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 35)(2, "div", 36)(3, "label", 37);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span", 38);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function ViewOrgCostCenterComponent_ng_container_69_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.codeNo, $event) || (ctx_r3.form.codeNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 36)(10, "label", 37);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "nz-input-number", 40);
    \u0275\u0275twoWayListener("ngModelChange", function ViewOrgCostCenterComponent_ng_container_69_Template_nz_input_number_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.orderNo, $event) || (ctx_r3.form.orderNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 36)(15, "label", 37);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function ViewOrgCostCenterComponent_ng_container_69_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.codeName, $event) || (ctx_r3.form.codeName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 36)(20, "label", 37);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function ViewOrgCostCenterComponent_ng_container_69_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.codeEngName, $event) || (ctx_r3.form.codeEngName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 36)(25, "label", 37);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function ViewOrgCostCenterComponent_ng_container_69_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.codeKoreanName, $event) || (ctx_r3.form.codeKoreanName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 36)(30, "label", 37);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function ViewOrgCostCenterComponent_ng_container_69_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.codeVietnameseName, $event) || (ctx_r3.form.codeVietnameseName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 36)(35, "label", 37);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function ViewOrgCostCenterComponent_ng_container_69_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.startDate, $event) || (ctx_r3.form.startDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 36)(40, "label", 37);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function ViewOrgCostCenterComponent_ng_container_69_Template_input_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.endDate, $event) || (ctx_r3.form.endDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 36)(45, "label", 37);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function ViewOrgCostCenterComponent_ng_container_69_Template_input_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.country, $event) || (ctx_r3.form.country = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 36)(50, "label", 37);
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function ViewOrgCostCenterComponent_ng_container_69_Template_input_ngModelChange_53_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.activity, $event) || (ctx_r3.form.activity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 3)(55, "label", 37);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function ViewOrgCostCenterComponent_ng_container_69_Template_input_ngModelChange_58_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.address, $event) || (ctx_r3.form.address = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 3)(60, "label", 37);
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "textarea", 50);
    \u0275\u0275twoWayListener("ngModelChange", function ViewOrgCostCenterComponent_ng_container_69_Template_textarea_ngModelChange_63_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.businessScope, $event) || (ctx_r3.form.businessScope = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 3)(65, "label", 37);
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "textarea", 51);
    \u0275\u0275twoWayListener("ngModelChange", function ViewOrgCostCenterComponent_ng_container_69_Template_textarea_ngModelChange_68_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.profitCenter, $event) || (ctx_r3.form.profitCenter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 3)(70, "label", 37);
    \u0275\u0275text(71);
    \u0275\u0275pipe(72, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "textarea", 52);
    \u0275\u0275twoWayListener("ngModelChange", function ViewOrgCostCenterComponent_ng_container_69_Template_textarea_ngModelChange_73_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.remark, $event) || (ctx_r3.form.remark = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 29, "orgCompose.costCenter", "M\xE3 chi ph\xED"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.codeNo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 32, "orgBusiness.orderNo", "Th\u1EE9 t\u1EF1 hi\u1EC3n th\u1ECB"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.orderNo);
    \u0275\u0275property("nzMin", 0);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 35, "orgCostCenter.codeName", "T\xEAn ti\u1EBFng Vi\u1EC7t"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.codeName);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 38, "orgCostCenter.codeEngName", "T\xEAn ti\u1EBFng Anh"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.codeEngName);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 41, "orgCostCenter.codeKoreanName", "T\xEAn ti\u1EBFng H\xE0n"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.codeKoreanName);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 44, "orgCostCenter.codeVietnameseName", "T\xEAn ti\u1EBFng Vi\u1EC7t quy \u0111\u1ECBnh"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.codeVietnameseName);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 47, "common.startDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.startDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 50, "common.endDate", "Ng\xE0y k\u1EBFt th\xFAc"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.endDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(47, 53, "org.title.COUNTRY", "Qu\u1ED1c gia"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.country);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(52, 56, "common.status", "Tr\u1EA1ng th\xE1i"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.activity);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 59, "org.title.ADDRESS", "\u0110\u1ECBa ch\u1EC9"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.address);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(62, 62, "orgCostCenter.businessScope", "Ph\u1EA1m vi kinh doanh (Business Scope)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.businessScope);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(67, 65, "orgCostCenter.profitCenter", "Trung t\xE2m l\u1EE3i nhu\u1EADn (Profit Center)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.profitCenter);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(72, 68, "common.remark", "Ghi ch\xFA"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.remark);
    \u0275\u0275control();
  }
}
function ViewOrgCostCenterComponent_ng_container_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 53);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 54);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "orgCostCenter.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a trung t\xE2m chi ph\xED n\xE0y?"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.deleteTargetName);
  }
}
var I18N_KEYS = [
  "org.orgManage.viewOrgCostCenter.title",
  "orgCompose.costCenter",
  "orgCostCenter.codeNoPlaceholder",
  "orgCostCenter.searchName",
  "orgCostCenter.searchNamePlaceholder",
  "orgCostCenter.codeName",
  "orgCostCenter.codeEngName",
  "orgCostCenter.codeKoreanName",
  "orgCostCenter.codeVietnameseName",
  "orgCostCenter.businessScope",
  "orgCostCenter.profitCenter",
  "orgCostCenter.modalAddTitle",
  "orgCostCenter.modalEditTitle",
  "orgCostCenter.confirmDelete",
  "orgCostCenter.msg.pleaseEnterCodeNo",
  "orgBusiness.orderNo",
  "org.title.COUNTRY",
  "org.title.ADDRESS",
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
  "common.remark",
  "common.startDate",
  "common.endDate",
  "common.loadFail",
  "common.saveFail",
  "common.deleteFail",
  "alert.message.add_success",
  "alert.message.update_success",
  "alert.message.delete_success"
];
var PAGE_SIZE_OPTIONS = [10, 20, 50, 100];
var EMPTY_FORM = {
  seq: null,
  codeNo: "",
  codeName: "",
  codeEngName: "",
  codeKoreanName: "",
  codeVietnameseName: "",
  orderNo: 0,
  startDate: "",
  endDate: "",
  country: "",
  address: "",
  activity: "",
  remark: "",
  businessScope: "",
  profitCenter: ""
};
var ViewOrgCostCenterComponent = class _ViewOrgCostCenterComponent {
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
  loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  searchCodeNo = "";
  searchCodeName = "";
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
    () => this.isNew() ? this.i18n.t("orgCostCenter.modalAddTitle", "Th\xEAm m\u1EDBi Trung t\xE2m chi ph\xED") : this.i18n.t("orgCostCenter.modalEditTitle", "C\u1EADp nh\u1EADt Trung t\xE2m chi ph\xED"),
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
  search() {
    this.loading.set(true);
    this.api.getList({ codeNo: this.searchCodeNo, codeName: this.searchCodeName }).subscribe({
      next: (res) => {
        this.rows.set(res.data ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.rows.set([]);
        this.loading.set(false);
        this.message.error(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  clearSearch() {
    this.searchCodeNo = "";
    this.searchCodeName = "";
    this.search();
  }
  // ==================== Modal Thêm mới / Cập nhật ====================
  openAddModal() {
    this.isNew.set(true);
    this.form = __spreadValues({}, EMPTY_FORM);
    this.modalVisible.set(true);
  }
  openEditModal(row) {
    this.isNew.set(false);
    this.form = {
      seq: row.seq,
      codeNo: row.codeNo,
      codeName: row.codeName || "",
      codeEngName: row.codeEngName || "",
      codeKoreanName: row.codeKoreanName || "",
      codeVietnameseName: row.codeVietnameseName || "",
      orderNo: row.orderNo ?? 0,
      startDate: row.startDate || "",
      endDate: row.endDate || "",
      country: row.country || "",
      address: row.address || "",
      activity: row.activity || "",
      remark: row.remark || "",
      businessScope: row.businessScope || "",
      profitCenter: row.profitCenter || ""
    };
    this.modalVisible.set(true);
  }
  closeModal() {
    this.modalVisible.set(false);
  }
  saveForm() {
    if (!this.form.codeNo?.trim()) {
      this.message.warning(this.i18n.t("orgCostCenter.msg.pleaseEnterCodeNo", "Vui l\xF2ng nh\u1EADp M\xE3 chi ph\xED"));
      return;
    }
    const payload = {
      seq: this.form.seq,
      codeNo: this.form.codeNo.trim(),
      codeName: this.form.codeName,
      codeEngName: this.form.codeEngName,
      codeKoreanName: this.form.codeKoreanName,
      codeVietnameseName: this.form.codeVietnameseName,
      orderNo: this.form.orderNo,
      startDate: this.form.startDate,
      endDate: this.form.endDate,
      country: this.form.country,
      address: this.form.address,
      activity: this.form.activity,
      remark: this.form.remark,
      businessScope: this.form.businessScope,
      profitCenter: this.form.profitCenter,
      createdBy: null,
      createDate: null,
      updatedBy: null,
      updateDate: null
    };
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: () => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.message.success(this.isNew() ? this.i18n.t("alert.message.add_success", "Th\xEAm th\xE0nh c\xF4ng!") : this.i18n.t("alert.message.update_success", "S\u1EEDa th\xE0nh c\xF4ng!"));
        this.search();
      },
      error: () => {
        this.saving.set(false);
        this.message.error(this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!"));
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
    return this.deleteTarget ? `${this.deleteTarget.codeNo} - ${this.deleteTarget.codeName ?? ""}` : "";
  }
  confirmDelete() {
    if (!this.deleteTarget?.seq)
      return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.seq).subscribe({
      next: () => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.message.success(this.i18n.t("alert.message.delete_success", "X\xF3a th\xE0nh c\xF4ng!"));
        this.search();
      },
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t("common.deleteFail", "X\xF3a th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  static \u0275fac = function ViewOrgCostCenterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewOrgCostCenterComponent)(\u0275\u0275directiveInject(ViewOrgCostCenterService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewOrgCostCenterComponent, selectors: [["app-view-org-cost-center"]], decls: 75, vars: 101, consts: [["voccTable", ""], ["voccTotalTpl", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["nz-input", "", "id", "vocc_searchCodeNo", "name", "vocc_searchCodeNo", 3, "ngModelChange", "ngModel", "placeholder"], ["nz-input", "", "id", "vocc_searchCodeName", "name", "vocc_searchCodeName", 3, "ngModelChange", "ngModel", "placeholder"], [1, "col-md-6", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "button", "id", "vocc_btnAdd", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzType", "default", "type", "submit", "id", "vocc_btnSearch"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", "id", "vocc_btnClear", 3, "click"], [1, "bx", "bx-x"], [1, "table-nowrap", 3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "130px"], ["nzWidth", "180px"], ["nzWidth", "200px"], ["nzWidth", "120px", 1, "text-center"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "100px", 1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["nzWidth", "800px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], ["colspan", "9", 1, "text-center", "text-muted"], [1, "text-center"], ["nz-button", "", "nzType", "text", "nzSize", "small", 3, "click", "id", "title"], [1, "bx", "bx-edit", "text-warning"], [1, "bx", "bx-trash", "text-danger"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label", "fw-semibold"], [1, "text-danger"], ["nz-input", "", "id", "vocc_formCodeNo", "name", "vocc_formCodeNo", 3, "ngModelChange", "ngModel"], ["id", "vocc_formOrderNo", "name", "vocc_formOrderNo", 1, "w-100", 3, "ngModelChange", "ngModel", "nzMin"], ["nz-input", "", "id", "vocc_formCodeName", "name", "vocc_formCodeName", 3, "ngModelChange", "ngModel"], ["nz-input", "", "id", "vocc_formCodeEngName", "name", "vocc_formCodeEngName", 3, "ngModelChange", "ngModel"], ["nz-input", "", "id", "vocc_formCodeKoreanName", "name", "vocc_formCodeKoreanName", 3, "ngModelChange", "ngModel"], ["nz-input", "", "id", "vocc_formCodeVietnameseName", "name", "vocc_formCodeVietnameseName", 3, "ngModelChange", "ngModel"], ["nz-input", "", "id", "vocc_formStartDate", "name", "vocc_formStartDate", "placeholder", "YYYY-MM-DD", 3, "ngModelChange", "ngModel"], ["nz-input", "", "id", "vocc_formEndDate", "name", "vocc_formEndDate", "placeholder", "YYYY-MM-DD", 3, "ngModelChange", "ngModel"], ["nz-input", "", "id", "vocc_formCountry", "name", "vocc_formCountry", 3, "ngModelChange", "ngModel"], ["nz-input", "", "id", "vocc_formActivity", "name", "vocc_formActivity", 3, "ngModelChange", "ngModel"], ["nz-input", "", "id", "vocc_formAddress", "name", "vocc_formAddress", 3, "ngModelChange", "ngModel"], ["nz-input", "", "id", "vocc_formBusinessScope", "name", "vocc_formBusinessScope", "rows", "2", 3, "ngModelChange", "ngModel"], ["nz-input", "", "id", "vocc_formProfitCenter", "name", "vocc_formProfitCenter", "rows", "2", 3, "ngModelChange", "ngModel"], ["nz-input", "", "id", "vocc_formRemark", "name", "vocc_formRemark", "rows", "2", 3, "ngModelChange", "ngModel"], [1, "mb-1"], [1, "fw-bold", "mb-0"]], template: function ViewOrgCostCenterComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "nz-card", 4)(3, "form", 5);
      \u0275\u0275listener("ngSubmit", function ViewOrgCostCenterComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 6)(5, "label", 7);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewOrgCostCenterComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchCodeNo, $event) || (ctx.searchCodeNo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 6)(11, "label", 7);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "input", 9);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewOrgCostCenterComponent_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchCodeName, $event) || (ctx.searchCodeName = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 10)(17, "button", 11);
      \u0275\u0275listener("click", function ViewOrgCostCenterComponent_Template_button_click_17_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(18, "i", 12);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 13);
      \u0275\u0275element(22, "i", 14);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "button", 15);
      \u0275\u0275listener("click", function ViewOrgCostCenterComponent_Template_button_click_25_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(26, "i", 16);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "nz-card")(30, "nz-table", 17, 0)(32, "thead")(33, "tr")(34, "th", 18);
      \u0275\u0275text(35);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th", 19);
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "th", 20);
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "th", 20);
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "th", 21);
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "th", 22);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "th", 22);
      \u0275\u0275text(53);
      \u0275\u0275pipe(54, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "th", 23);
      \u0275\u0275text(56);
      \u0275\u0275pipe(57, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "th", 24);
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(61, "tbody");
      \u0275\u0275template(62, ViewOrgCostCenterComponent_tr_62_Template, 4, 4, "tr", 25)(63, ViewOrgCostCenterComponent_tr_63_Template, 24, 23, "tr", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275template(64, ViewOrgCostCenterComponent_ng_template_64_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(66, "nz-modal", 27);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275pipe(68, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewOrgCostCenterComponent_Template_nz_modal_nzOnCancel_66_listener() {
        return ctx.closeModal();
      })("nzOnOk", function ViewOrgCostCenterComponent_Template_nz_modal_nzOnOk_66_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(69, ViewOrgCostCenterComponent_ng_container_69_Template, 74, 71, "ng-container", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "nz-modal", 29);
      \u0275\u0275pipe(71, "translate");
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewOrgCostCenterComponent_Template_nz_modal_nzOnCancel_70_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function ViewOrgCostCenterComponent_Template_nz_modal_nzOnOk_70_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(74, ViewOrgCostCenterComponent_ng_container_74_Template, 6, 5, "ng-container", 28);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const voccTable_r8 = \u0275\u0275reference(31);
      const voccTotalTpl_r9 = \u0275\u0275reference(65);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 37, "orgCompose.costCenter", "M\xE3 chi ph\xED"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchCodeNo);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 40, "orgCostCenter.codeNoPlaceholder", "Nh\u1EADp m\xE3 chi ph\xED"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 43, "orgCostCenter.searchName", "T\xEAn chi ph\xED"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchCodeName);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(15, 46, "orgCostCenter.searchNamePlaceholder", "Nh\u1EADp t\xEAn chi ph\xED"));
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(20, 49, "common.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(24, 52, "common.search", "T\xECm ki\u1EBFm"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(28, 55, "common.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 20)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", voccTotalTpl_r9)("nzScroll", \u0275\u0275pureFunction0(100, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 58, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 61, "orgCompose.costCenter", "M\xE3 chi ph\xED"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 64, "orgCostCenter.codeName", "T\xEAn ti\u1EBFng Vi\u1EC7t"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 67, "orgCostCenter.codeEngName", "T\xEAn ti\u1EBFng Anh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 70, "common.remark", "Ghi ch\xFA"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 73, "common.startDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 76, "common.endDate", "Ng\xE0y k\u1EBFt th\xFAc"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 79, "common.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(60, 82, "common.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", voccTable_r8.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", ctx.modalTitle())("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(67, 85, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(68, 88, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(4);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(71, 91, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(72, 94, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(73, 97, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzInputNumberModule, NzInputNumberComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, TranslatePipe], styles: ["\n/*# sourceMappingURL=view-org-cost-center.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewOrgCostCenterComponent, [{
    type: Component,
    args: [{ selector: "app-view-org-cost-center", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzButtonModule,
      NzCardModule,
      NzInputModule,
      NzInputNumberModule,
      NzModalModule,
      NzTableModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3" (ngSubmit)="search()">
        <div class="col-md-3">
          <label class="form-label">{{ 'orgCompose.costCenter' | translate:'M\xE3 chi ph\xED' }}</label>
          <input nz-input id="vocc_searchCodeNo" [(ngModel)]="searchCodeNo" name="vocc_searchCodeNo"
                 [placeholder]="'orgCostCenter.codeNoPlaceholder' | translate:'Nh\u1EADp m\xE3 chi ph\xED'">
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'orgCostCenter.searchName' | translate:'T\xEAn chi ph\xED' }}</label>
          <input nz-input id="vocc_searchCodeName" [(ngModel)]="searchCodeName" name="vocc_searchCodeName"
                 [placeholder]="'orgCostCenter.searchNamePlaceholder' | translate:'Nh\u1EADp t\xEAn chi ph\xED'">
        </div>
        <div class="col-md-6 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="button" id="vocc_btnAdd" (click)="openAddModal()">
            <i class="bx bx-plus"></i> {{ 'common.addNew' | translate:'Th\xEAm m\u1EDBi' }}
          </button>
          <button nz-button nzType="default" type="submit" id="vocc_btnSearch">
            <i class="bx bx-search"></i> {{ 'common.search' | translate:'T\xECm ki\u1EBFm' }}
          </button>
          <button nz-button type="button" id="vocc_btnClear" (click)="clearSearch()">
            <i class="bx bx-x"></i> {{ 'common.clearFilter' | translate:'X\xF3a l\u1ECDc' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="20" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="voccTotalTpl"
                [nzScroll]="{ x: '1300px' }" class="table-nowrap" #voccTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th nzWidth="130px">{{ 'orgCompose.costCenter' | translate:'M\xE3 chi ph\xED' }}</th>
            <th nzWidth="180px">{{ 'orgCostCenter.codeName' | translate:'T\xEAn ti\u1EBFng Vi\u1EC7t' }}</th>
            <th nzWidth="180px">{{ 'orgCostCenter.codeEngName' | translate:'T\xEAn ti\u1EBFng Anh' }}</th>
            <th nzWidth="200px">{{ 'common.remark' | translate:'Ghi ch\xFA' }}</th>
            <th class="text-center" nzWidth="120px">{{ 'common.startDate' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u' }}</th>
            <th class="text-center" nzWidth="120px">{{ 'common.endDate' | translate:'Ng\xE0y k\u1EBFt th\xFAc' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'common.action' | translate:'Thao t\xE1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="9" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of voccTable.data; let i = index">
            <td class="text-center">{{ i + 1 }}</td>
            <td>{{ row.codeNo }}</td>
            <td [attr.title]="row.codeName || null">{{ row.codeName }}</td>
            <td [attr.title]="row.codeEngName || null">{{ row.codeEngName }}</td>
            <td [attr.title]="row.remark || null">{{ row.remark }}</td>
            <td class="text-center">{{ row.startDate }}</td>
            <td class="text-center">{{ row.endDate }}</td>
            <td class="text-center">{{ row.activity }}</td>
            <td class="text-center">
              <button nz-button nzType="text" nzSize="small" id="vocc_btnEdit_{{ row.seq }}"
                      [title]="'common.edit' | translate:'S\u1EEDa'" (click)="openEditModal(row)">
                <i class="bx bx-edit text-warning"></i>
              </button>
              <button nz-button nzType="text" nzSize="small" id="vocc_btnDelete_{{ row.seq }}"
                      [title]="'common.delete' | translate:'X\xF3a'" (click)="openDeleteConfirm(row)">
                <i class="bx bx-trash text-danger"></i>
              </button>
            </td>
          </tr>
        </tbody>
        <ng-template #voccTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal Th\xEAm m\u1EDBi / C\u1EADp nh\u1EADt -->
<nz-modal [nzVisible]="modalVisible()" [nzTitle]="modalTitle()" nzWidth="800px"
          (nzOnCancel)="closeModal()" (nzOnOk)="saveForm()" [nzOkLoading]="saving()"
          [nzOkText]="'common.save' | translate:'L\u01B0u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <div class="row g-3">
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'orgCompose.costCenter' | translate:'M\xE3 chi ph\xED' }} <span class="text-danger">*</span></label>
        <input nz-input id="vocc_formCodeNo" [(ngModel)]="form.codeNo" name="vocc_formCodeNo">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'orgBusiness.orderNo' | translate:'Th\u1EE9 t\u1EF1 hi\u1EC3n th\u1ECB' }}</label>
        <nz-input-number class="w-100" id="vocc_formOrderNo" [(ngModel)]="form.orderNo" name="vocc_formOrderNo" [nzMin]="0"></nz-input-number>
      </div>

      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'orgCostCenter.codeName' | translate:'T\xEAn ti\u1EBFng Vi\u1EC7t' }}</label>
        <input nz-input id="vocc_formCodeName" [(ngModel)]="form.codeName" name="vocc_formCodeName">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'orgCostCenter.codeEngName' | translate:'T\xEAn ti\u1EBFng Anh' }}</label>
        <input nz-input id="vocc_formCodeEngName" [(ngModel)]="form.codeEngName" name="vocc_formCodeEngName">
      </div>

      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'orgCostCenter.codeKoreanName' | translate:'T\xEAn ti\u1EBFng H\xE0n' }}</label>
        <input nz-input id="vocc_formCodeKoreanName" [(ngModel)]="form.codeKoreanName" name="vocc_formCodeKoreanName">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'orgCostCenter.codeVietnameseName' | translate:'T\xEAn ti\u1EBFng Vi\u1EC7t quy \u0111\u1ECBnh' }}</label>
        <input nz-input id="vocc_formCodeVietnameseName" [(ngModel)]="form.codeVietnameseName" name="vocc_formCodeVietnameseName">
      </div>

      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'common.startDate' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u' }}</label>
        <input nz-input id="vocc_formStartDate" [(ngModel)]="form.startDate" name="vocc_formStartDate" placeholder="YYYY-MM-DD">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'common.endDate' | translate:'Ng\xE0y k\u1EBFt th\xFAc' }}</label>
        <input nz-input id="vocc_formEndDate" [(ngModel)]="form.endDate" name="vocc_formEndDate" placeholder="YYYY-MM-DD">
      </div>

      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'org.title.COUNTRY' | translate:'Qu\u1ED1c gia' }}</label>
        <input nz-input id="vocc_formCountry" [(ngModel)]="form.country" name="vocc_formCountry">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</label>
        <input nz-input id="vocc_formActivity" [(ngModel)]="form.activity" name="vocc_formActivity">
      </div>

      <div class="col-12">
        <label class="form-label fw-semibold">{{ 'org.title.ADDRESS' | translate:'\u0110\u1ECBa ch\u1EC9' }}</label>
        <input nz-input id="vocc_formAddress" [(ngModel)]="form.address" name="vocc_formAddress">
      </div>
      <div class="col-12">
        <label class="form-label fw-semibold">{{ 'orgCostCenter.businessScope' | translate:'Ph\u1EA1m vi kinh doanh (Business Scope)' }}</label>
        <textarea nz-input id="vocc_formBusinessScope" [(ngModel)]="form.businessScope" name="vocc_formBusinessScope" rows="2"></textarea>
      </div>
      <div class="col-12">
        <label class="form-label fw-semibold">{{ 'orgCostCenter.profitCenter' | translate:'Trung t\xE2m l\u1EE3i nhu\u1EADn (Profit Center)' }}</label>
        <textarea nz-input id="vocc_formProfitCenter" [(ngModel)]="form.profitCenter" name="vocc_formProfitCenter" rows="2"></textarea>
      </div>
      <div class="col-12">
        <label class="form-label fw-semibold">{{ 'common.remark' | translate:'Ghi ch\xFA' }}</label>
        <textarea nz-input id="vocc_formRemark" [(ngModel)]="form.remark" name="vocc_formRemark" rows="2"></textarea>
      </div>
    </div>
  </ng-container>
</nz-modal>

<!-- Modal x\xE1c nh\u1EADn x\xF3a -->
<nz-modal [nzVisible]="deleteVisible()" [nzTitle]="'common.confirm' | translate:'X\xE1c nh\u1EADn'"
          (nzOnCancel)="closeDeleteConfirm()" (nzOnOk)="confirmDelete()" [nzOkLoading]="deleting()"
          [nzOkText]="'common.confirm' | translate:'X\xE1c nh\u1EADn'" [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'">
  <ng-container *nzModalContent>
    <p class="mb-1">{{ 'orgCostCenter.confirmDelete' | translate:'B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a trung t\xE2m chi ph\xED n\xE0y?' }}</p>
    <p class="fw-bold mb-0">{{ deleteTargetName }}</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-org-cost-center/view-org-cost-center.component.css */\n/*# sourceMappingURL=view-org-cost-center.component.css.map */\n"] }]
  }], () => [{ type: ViewOrgCostCenterService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewOrgCostCenterComponent, { className: "ViewOrgCostCenterComponent", filePath: "src/app/view-org-cost-center/view-org-cost-center.component.ts", lineNumber: 85 });
})();
export {
  ViewOrgCostCenterComponent
};
//# debugId=5f9b42a3-44c8-5431-bae1-f5eb5a81b515
//# sourceMappingURL=chunk-S577B3LS.js.map
