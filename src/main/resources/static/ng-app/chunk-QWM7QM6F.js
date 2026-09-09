import {
  NzInputNumberComponent,
  NzInputNumberModule
} from "./chunk-IXCMIWQQ.js";
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

// src/app/view-company/view-company.service.ts
var API_BASE = "/sys/api/company";
var ViewCompanyService = class _ViewCompanyService {
  constructor(http) {
    this.http = http;
  }
  http;
  list(keyword) {
    let params = new HttpParams();
    if (keyword)
      params = params.set("keyword", keyword);
    return this.http.get(`${API_BASE}/list`, { params, withCredentials: true });
  }
  save(payload) {
    return this.http.post(`${API_BASE}/save`, payload, { withCredentials: true });
  }
  delete(cpnyNo) {
    const params = new HttpParams().set("cpnyNo", cpnyNo);
    return this.http.post(`${API_BASE}/delete`, null, { params, withCredentials: true });
  }
  static \u0275fac = function ViewCompanyService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewCompanyService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewCompanyService, factory: _ViewCompanyService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewCompanyService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-company/view-company.component.ts
var _c0 = () => ({ x: "1000px", y: "calc(100vh - 380px)" });
function ViewCompanyComponent_nz_alert_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 29);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ViewCompanyComponent_tr_53_Template(rf, ctx) {
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
function ViewCompanyComponent_tr_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
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
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 31)(16, "button", 32);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275listener("click", function ViewCompanyComponent_tr_54_Template_button_click_16_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditModal(row_r4));
    });
    \u0275\u0275element(18, "i", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 32);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275listener("click", function ViewCompanyComponent_tr_54_Template_button_click_19_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDeleteConfirm(row_r4));
    });
    \u0275\u0275element(21, "i", 34);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r5 + 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.cpnyId || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.cpnyId);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.nameVi || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.nameVi);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.nameEn || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.nameEn);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.cpnyAddr || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.cpnyAddr);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.cpnyTelNo || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.cpnyTelNo);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.cpnyWebAddr || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.cpnyWebAddr);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(17, 15, "common.edit", "S\u1EEDa"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(20, 18, "common.delete", "X\xF3a"));
  }
}
function ViewCompanyComponent_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r6 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r6, " ");
  }
}
function ViewCompanyComponent_ng_container_60_Template(rf, ctx) {
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
    \u0275\u0275twoWayListener("ngModelChange", function ViewCompanyComponent_ng_container_60_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.cpnyId, $event) || (ctx_r1.form.cpnyId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 36)(10, "label", 37);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCompanyComponent_ng_container_60_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.operationId, $event) || (ctx_r1.form.operationId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 36)(15, "label", 37);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementStart(18, "span", 38);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCompanyComponent_ng_container_60_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nameVi, $event) || (ctx_r1.form.nameVi = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 36)(22, "label", 37);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCompanyComponent_ng_container_60_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nameEn, $event) || (ctx_r1.form.nameEn = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 36)(27, "label", 37);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCompanyComponent_ng_container_60_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nameZh, $event) || (ctx_r1.form.nameZh = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 36)(32, "label", 37);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCompanyComponent_ng_container_60_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nameKo, $event) || (ctx_r1.form.nameKo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 45)(37, "label", 37);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCompanyComponent_ng_container_60_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.cpnyAddr, $event) || (ctx_r1.form.cpnyAddr = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 36)(42, "label", 37);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCompanyComponent_ng_container_60_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.cpnyPostalcode, $event) || (ctx_r1.form.cpnyPostalcode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 36)(47, "label", 37);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCompanyComponent_ng_container_60_Template_input_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.cpnyLocation, $event) || (ctx_r1.form.cpnyLocation = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 36)(52, "label", 37);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCompanyComponent_ng_container_60_Template_input_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.cpnyTelNo, $event) || (ctx_r1.form.cpnyTelNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 36)(57, "label", 37);
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCompanyComponent_ng_container_60_Template_input_ngModelChange_60_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.cpnyFaxNo, $event) || (ctx_r1.form.cpnyFaxNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 45)(62, "label", 37);
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCompanyComponent_ng_container_60_Template_input_ngModelChange_65_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.cpnyWebAddr, $event) || (ctx_r1.form.cpnyWebAddr = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 45)(67, "label", 37);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "textarea", 52);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCompanyComponent_ng_container_60_Template_textarea_ngModelChange_70_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.cpnyIntro, $event) || (ctx_r1.form.cpnyIntro = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 45)(72, "label", 37);
    \u0275\u0275text(73);
    \u0275\u0275pipe(74, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "textarea", 53);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCompanyComponent_ng_container_60_Template_textarea_ngModelChange_75_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.cpnyHistory, $event) || (ctx_r1.form.cpnyHistory = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 4)(77, "label", 37);
    \u0275\u0275text(78);
    \u0275\u0275pipe(79, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "nz-input-number", 54);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCompanyComponent_ng_container_60_Template_nz_input_number_ngModelChange_80_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.orderNo, $event) || (ctx_r1.form.orderNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "div", 55)(82, "label", 56);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCompanyComponent_ng_container_60_Template_label_ngModelChange_82_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.ggsYn, $event) || (ctx_r1.form.ggsYn = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(83);
    \u0275\u0275pipe(84, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "div", 55)(86, "label", 57);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCompanyComponent_ng_container_60_Template_label_ngModelChange_86_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.activity, $event) || (ctx_r1.form.activity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(87);
    \u0275\u0275pipe(88, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 36, "sys.basic.viewCompany.label.cpnyId", "M\xE3 C\xF4ng ty (ID)"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.cpnyId);
    \u0275\u0275property("readOnly", !ctx_r1.isNew());
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 39, "sys.basic.viewCompany.label.operationId", "Operation ID"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.operationId);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(17, 42, "sys.basic.viewMenuList.label.nameVi", "T\xEAn Ti\u1EBFng Vi\u1EC7t"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nameVi);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 45, "sys.basic.viewMenuList.label.nameEn", "T\xEAn Ti\u1EBFng Anh"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nameEn);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 48, "sys.basic.viewMenuList.label.nameZh", "T\xEAn Ti\u1EBFng Trung"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nameZh);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 51, "sys.basic.viewMenuList.label.nameKo", "T\xEAn Ti\u1EBFng H\xE0n"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nameKo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 54, "sys.basicMaint.title.companyAddress", "\u0110\u1ECBa ch\u1EC9"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.cpnyAddr);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 57, "sys.basic.viewCompany.label.cpnyPostalcode", "M\xE3 b\u01B0u \u0111i\u1EC7n"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.cpnyPostalcode);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 60, "sys.basicMaint.title.companyArea", "Khu v\u1EF1c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.cpnyLocation);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 63, "sys.basicMaint.title.companyTelPhoneNo", "\u0110i\u1EC7n tho\u1EA1i c\xF4ng ty"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.cpnyTelNo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(59, 66, "sys.basicMaint.title.companyFaxNo", "Fax"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.cpnyFaxNo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(64, 69, "sys.basicMaint.title.companyNetAddress", "Website"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.cpnyWebAddr);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 72, "sys.basicMaint.title.companyIntroduction", "Gi\u1EDBi thi\u1EC7u"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.cpnyIntro);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(74, 75, "sys.basicMaint.title.companyHistory", "L\u1ECBch s\u1EED"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.cpnyHistory);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(79, 78, "sys.basic.viewMenuList.label.orderNo", "Th\u1EE9 t\u1EF1"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.orderNo);
    \u0275\u0275property("nzMin", 0);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.ggsYn);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(84, 81, "sys.basic.viewCompany.label.ggsYn", "S\u1EED d\u1EE5ng GGS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.activity);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(88, 84, "sys.basic.viewMenuList.label.activity", "Ho\u1EA1t \u0111\u1ED9ng"), " ");
  }
}
function ViewCompanyComponent_ng_container_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 58);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 59);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "sys.basic.viewCompany.msg.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a c\xF4ng ty n\xE0y?"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.deleteTargetName);
  }
}
var I18N_KEYS = [
  "sys.basic.viewCompany.title",
  "sys.basic.viewCompany.search.placeholder",
  "sys.basic.viewCompany.modal.addTitle",
  "sys.basic.viewCompany.modal.editTitle",
  "sys.basic.viewCompany.label.cpnyId",
  "sys.basic.viewCompany.label.operationId",
  "sys.basic.viewCompany.label.cpnyPostalcode",
  "sys.basic.viewCompany.label.ggsYn",
  "sys.basic.viewCompany.msg.confirmDelete",
  "sys.basic.viewCompany.col.cpnyId",
  "sys.basicMaint.title.companyAddress",
  "sys.basicMaint.title.companyArea",
  "sys.basicMaint.title.companyTelPhoneNo",
  "sys.basicMaint.title.companyFaxNo",
  "sys.basicMaint.title.companyNetAddress",
  "sys.basicMaint.title.companyIntroduction",
  "sys.basicMaint.title.companyHistory",
  "sys.basic.viewMenuList.label.nameVi",
  "sys.basic.viewMenuList.label.nameEn",
  "sys.basic.viewMenuList.label.nameZh",
  "sys.basic.viewMenuList.label.nameKo",
  "sys.basic.viewMenuList.label.orderNo",
  "sys.basic.viewMenuList.label.activity",
  "sys.basic.viewMenuList.col.nameVi",
  "sys.basic.viewMenuList.col.nameEn",
  "common.stt",
  "common.action",
  "common.addNew",
  "common.exportExcel",
  "common.save",
  "common.close",
  "common.edit",
  "common.delete",
  "common.confirm",
  "common.cancel",
  "common.noData",
  "common.totalRows",
  "common.loadFail",
  "common.saveSuccess",
  "common.saveFail",
  "common.deleteSuccess",
  "common.deleteFail",
  "common.search",
  "common.clearFilter",
  "common.keyword"
];
var PAGE_SIZE_OPTIONS = [10, 25, 50, 100];
var EMPTY_FORM = {
  cpnyId: "",
  cpnyNo: null,
  operationId: "",
  nameVi: "",
  nameEn: "",
  nameZh: "",
  nameKo: "",
  cpnyAddr: "",
  cpnyPostalcode: "",
  cpnyLocation: "",
  cpnyTelNo: "",
  cpnyFaxNo: "",
  cpnyWebAddr: "",
  cpnyIntro: "",
  cpnyHistory: "",
  orderNo: 0,
  ggsYn: false,
  activity: true
};
var ViewCompanyComponent = class _ViewCompanyComponent {
  constructor(api, i18n, message) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
  }
  api;
  i18n;
  message;
  pageSizeOptions = PAGE_SIZE_OPTIONS;
  keyword = "";
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
    () => this.isNew() ? this.i18n.t("sys.basic.viewCompany.modal.addTitle", "Th\xEAm m\u1EDBi C\xF4ng ty") : this.i18n.t("sys.basic.viewCompany.modal.editTitle", "C\u1EADp nh\u1EADt C\xF4ng ty"),
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
    this.loadTable();
  }
  search() {
    this.loadTable();
  }
  clearSearch() {
    this.keyword = "";
    this.loadTable();
  }
  loadTable() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.list(this.keyword).subscribe({
      next: (list) => {
        this.rows.set(list ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.rows.set([]);
        this.loading.set(false);
      }
    });
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
      cpnyId: row.cpnyId,
      cpnyNo: row.cpnyNo,
      operationId: row.operationId || "",
      nameVi: row.nameVi || "",
      nameEn: row.nameEn || "",
      nameZh: row.nameZh || "",
      nameKo: row.nameKo || "",
      cpnyAddr: row.cpnyAddr || "",
      cpnyPostalcode: row.cpnyPostalcode || "",
      cpnyLocation: row.cpnyLocation || "",
      cpnyTelNo: row.cpnyTelNo || "",
      cpnyFaxNo: row.cpnyFaxNo || "",
      cpnyWebAddr: row.cpnyWebAddr || "",
      cpnyIntro: row.cpnyIntro || "",
      cpnyHistory: row.cpnyHistory || "",
      orderNo: row.orderNo ?? 0,
      ggsYn: row.ggsYn === "Y",
      activity: row.activity !== "0"
    };
    this.modalVisible.set(true);
  }
  closeModal() {
    this.modalVisible.set(false);
  }
  saveForm() {
    if (!this.form.cpnyId || !this.form.nameVi) {
      this.message.warning(this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!"));
      return;
    }
    const payload = {
      cpnyId: this.form.cpnyId,
      cpnyNo: this.form.cpnyNo,
      operationId: this.form.operationId || null,
      nameVi: this.form.nameVi,
      nameEn: this.form.nameEn || null,
      nameZh: this.form.nameZh || null,
      nameKo: this.form.nameKo || null,
      cpnyAddr: this.form.cpnyAddr || null,
      cpnyPostalcode: this.form.cpnyPostalcode || null,
      cpnyLocation: this.form.cpnyLocation || null,
      cpnyTelNo: this.form.cpnyTelNo || null,
      cpnyFaxNo: this.form.cpnyFaxNo || null,
      cpnyWebAddr: this.form.cpnyWebAddr || null,
      cpnyIntro: this.form.cpnyIntro || null,
      cpnyHistory: this.form.cpnyHistory || null,
      orderNo: this.form.orderNo,
      ggsYn: this.form.ggsYn ? "Y" : "N",
      activity: this.form.activity ? "1" : "0"
    };
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        if (res.success) {
          this.modalVisible.set(false);
          this.message.success(res.message || this.i18n.t("common.saveSuccess", "L\u01B0u th\xE0nh c\xF4ng!"));
          this.loadTable();
        } else {
          this.message.error(res.message || this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!"));
        }
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
    return this.deleteTarget ? `${this.deleteTarget.cpnyId} - ${this.deleteTarget.nameVi ?? ""}` : "";
  }
  confirmDelete() {
    if (!this.deleteTarget?.cpnyNo)
      return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.cpnyNo).subscribe({
      next: (res) => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        if (res.success) {
          this.message.success(res.message || this.i18n.t("common.deleteSuccess", "X\xF3a th\xE0nh c\xF4ng!"));
          this.loadTable();
        } else {
          this.message.error(res.message || this.i18n.t("common.deleteFail", "X\xF3a th\u1EA5t b\u1EA1i!"));
        }
      },
      error: () => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.message.error(this.i18n.t("common.deleteFail", "X\xF3a th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  // ==================== Xuất Excel ====================
  /** Xuất excel client-side (endpoint /sys/api/company/export cũ thực chất trả .csv nên không dùng lại -
   *  xem giải thích ở đầu file) - dùng thư viện xlsx (SheetJS) để tạo đúng file .xlsx nhị phân. */
  exportExcel() {
    const headers = [
      this.i18n.t("common.stt", "STT"),
      this.i18n.t("sys.basic.viewCompany.col.cpnyId", "M\xE3 ID"),
      this.i18n.t("sys.basic.viewMenuList.col.nameVi", "T\xEAn TV"),
      this.i18n.t("sys.basic.viewMenuList.col.nameEn", "T\xEAn TA"),
      this.i18n.t("sys.basicMaint.title.companyAddress", "\u0110\u1ECBa ch\u1EC9"),
      this.i18n.t("sys.basicMaint.title.companyTelPhoneNo", "\u0110i\u1EC7n tho\u1EA1i c\xF4ng ty"),
      this.i18n.t("sys.basicMaint.title.companyNetAddress", "Website")
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      r.cpnyId,
      r.nameVi,
      r.nameEn,
      r.cpnyAddr,
      r.cpnyTelNo,
      r.cpnyWebAddr
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "DanhSach");
    writeFileSync(workbook, "company_list.xlsx");
  }
  static \u0275fac = function ViewCompanyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewCompanyComponent)(\u0275\u0275directiveInject(ViewCompanyService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewCompanyComponent, selectors: [["app-view-company"]], decls: 66, vars: 93, consts: [["vcoTable", ""], ["vcoTotalTpl", ""], [3, "nzTitle"], [1, "row", "g-3", "mb-3", 3, "ngSubmit"], [1, "col-md-4"], ["nz-input", "", "id", "vcoSearchKeyword", "name", "vcoSearchKeyword", 3, "ngModelChange", "ngModel", "placeholder"], [1, "col-md-8", "d-flex", "align-items-start", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "nzType", "default", "type", "button", 3, "click"], [1, "bx", "bx-x"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzType", "default", "type", "button", 1, "vco-btn-export", 3, "click"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "120px"], ["nzWidth", "180px"], ["nzWidth", "220px"], ["nzWidth", "140px"], ["nzWidth", "160px"], ["nzWidth", "90px", 1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["nzWidth", "800px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "8", 1, "text-center", "text-muted"], [1, "text-center"], ["nz-button", "", "nzType", "text", "nzSize", "small", 3, "click", "title"], [1, "bx", "bx-edit", "text-warning"], [1, "bx", "bx-trash", "text-danger"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label", "fw-semibold"], [1, "text-danger"], ["nz-input", "", "name", "vcoCpnyId", 3, "ngModelChange", "ngModel", "readOnly"], ["nz-input", "", "name", "vcoOperationId", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vcoNameVi", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vcoNameEn", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vcoNameZh", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vcoNameKo", 3, "ngModelChange", "ngModel"], [1, "col-md-12"], ["nz-input", "", "name", "vcoCpnyAddr", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vcoCpnyPostalcode", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vcoCpnyLocation", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vcoCpnyTelNo", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vcoCpnyFaxNo", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vcoCpnyWebAddr", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vcoCpnyIntro", "rows", "2", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vcoCpnyHistory", "rows", "2", 3, "ngModelChange", "ngModel"], ["name", "vcoOrderNo", 1, "w-100", 3, "ngModelChange", "ngModel", "nzMin"], [1, "col-md-4", "d-flex", "align-items-end"], ["nz-checkbox", "", "name", "vcoGgsYn", 3, "ngModelChange", "ngModel"], ["nz-checkbox", "", "name", "vcoActivity", 3, "ngModelChange", "ngModel"], [1, "mb-1"], [1, "fw-bold", "mb-0"]], template: function ViewCompanyComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "nz-card", 2);
      \u0275\u0275pipe(1, "translate");
      \u0275\u0275elementStart(2, "form", 3);
      \u0275\u0275listener("ngSubmit", function ViewCompanyComponent_Template_form_ngSubmit_2_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(3, "div", 4)(4, "input", 5);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewCompanyComponent_Template_input_ngModelChange_4_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.keyword, $event) || (ctx.keyword = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 6)(7, "button", 7);
      \u0275\u0275element(8, "i", 8);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 9);
      \u0275\u0275listener("click", function ViewCompanyComponent_Template_button_click_11_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(12, "i", 10);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 11);
      \u0275\u0275listener("click", function ViewCompanyComponent_Template_button_click_15_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(16, "i", 12);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 13);
      \u0275\u0275listener("click", function ViewCompanyComponent_Template_button_click_19_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(20, "i", 14);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(23, ViewCompanyComponent_nz_alert_23_Template, 1, 1, "nz-alert", 15);
      \u0275\u0275elementStart(24, "nz-table", 16, 0)(26, "thead")(27, "tr")(28, "th", 17);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th", 18);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "th", 19);
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
      \u0275\u0275elementStart(43, "th", 21);
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "th", 22);
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "th", 23);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "tbody");
      \u0275\u0275template(53, ViewCompanyComponent_tr_53_Template, 4, 4, "tr", 24)(54, ViewCompanyComponent_tr_54_Template, 22, 21, "tr", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275template(55, ViewCompanyComponent_ng_template_55_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "nz-modal", 26);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275pipe(59, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewCompanyComponent_Template_nz_modal_nzOnCancel_57_listener() {
        return ctx.closeModal();
      })("nzOnOk", function ViewCompanyComponent_Template_nz_modal_nzOnOk_57_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(60, ViewCompanyComponent_ng_container_60_Template, 89, 87, "ng-container", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "nz-modal", 28);
      \u0275\u0275pipe(62, "translate");
      \u0275\u0275pipe(63, "translate");
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewCompanyComponent_Template_nz_modal_nzOnCancel_61_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function ViewCompanyComponent_Template_nz_modal_nzOnOk_61_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(65, ViewCompanyComponent_ng_container_65_Template, 6, 5, "ng-container", 27);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const vcoTable_r8 = \u0275\u0275reference(25);
      const vcoTotalTpl_r9 = \u0275\u0275reference(56);
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(1, 35, "sys.basic.viewCompany.title", "Qu\u1EA3n l\xFD c\xF4ng ty"));
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.keyword);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(5, 38, "sys.basic.viewCompany.search.placeholder", "Nh\u1EADp m\xE3 ho\u1EB7c t\xEAn c\xF4ng ty"));
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 41, "common.search", "T\xECm ki\u1EBFm"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 44, "common.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(18, 47, "common.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(22, 50, "common.exportExcel", "Xu\u1EA5t Excel"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 10)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", vcoTotalTpl_r9)("nzScroll", \u0275\u0275pureFunction0(92, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 53, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 56, "sys.basic.viewCompany.col.cpnyId", "M\xE3 ID"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 59, "sys.basic.viewMenuList.col.nameVi", "T\xEAn TV"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 62, "sys.basic.viewMenuList.col.nameEn", "T\xEAn TA"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 65, "sys.basicMaint.title.companyAddress", "\u0110\u1ECBa ch\u1EC9"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 68, "sys.basicMaint.title.companyTelPhoneNo", "\u0110i\u1EC7n tho\u1EA1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 71, "sys.basicMaint.title.companyNetAddress", "Website"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 74, "common.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", vcoTable_r8.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", ctx.modalTitle())("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(58, 77, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(59, 80, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(4);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(62, 83, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(63, 86, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(64, 89, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzInputNumberModule, NzInputNumberComponent, NzCheckboxModule, NzCheckboxComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\n.vco-btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=view-company.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewCompanyComponent, [{
    type: Component,
    args: [{ selector: "app-view-company", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzInputNumberModule,
      NzCheckboxModule,
      NzButtonModule,
      NzModalModule,
      NzAlertModule,
      TranslatePipe
    ], template: `<nz-card [nzTitle]="'sys.basic.viewCompany.title' | translate:'Qu\u1EA3n l\xFD c\xF4ng ty'">
  <form class="row g-3 mb-3" (ngSubmit)="search()">
    <div class="col-md-4">
      <input nz-input id="vcoSearchKeyword" name="vcoSearchKeyword" [(ngModel)]="keyword"
             [placeholder]="'sys.basic.viewCompany.search.placeholder' | translate:'Nh\u1EADp m\xE3 ho\u1EB7c t\xEAn c\xF4ng ty'">
    </div>
    <div class="col-md-8 d-flex align-items-start gap-2 flex-wrap">
      <button nz-button nzType="primary" type="submit">
        <i class="bx bx-search"></i> {{ 'common.search' | translate:'T\xECm ki\u1EBFm' }}
      </button>
      <button nz-button nzType="default" type="button" (click)="clearSearch()">
        <i class="bx bx-x"></i> {{ 'common.clearFilter' | translate:'X\xF3a l\u1ECDc' }}
      </button>
      <button nz-button nzType="primary" type="button" (click)="openAddModal()">
        <i class="bx bx-plus"></i> {{ 'common.addNew' | translate:'Th\xEAm m\u1EDBi' }}
      </button>
      <button nz-button nzType="default" type="button" class="vco-btn-export" (click)="exportExcel()">
        <i class="bx bx-export"></i> {{ 'common.exportExcel' | translate:'Xu\u1EA5t Excel' }}
      </button>
    </div>
  </form>

  <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

  <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="10" [nzShowSizeChanger]="true"
            [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="vcoTotalTpl"
            [nzScroll]="{ x: '1000px', y: 'calc(100vh - 380px)' }" #vcoTable>
    <thead>
      <tr>
        <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
        <th nzWidth="120px">{{ 'sys.basic.viewCompany.col.cpnyId' | translate:'M\xE3 ID' }}</th>
        <th nzWidth="180px">{{ 'sys.basic.viewMenuList.col.nameVi' | translate:'T\xEAn TV' }}</th>
        <th nzWidth="180px">{{ 'sys.basic.viewMenuList.col.nameEn' | translate:'T\xEAn TA' }}</th>
        <th nzWidth="220px">{{ 'sys.basicMaint.title.companyAddress' | translate:'\u0110\u1ECBa ch\u1EC9' }}</th>
        <th nzWidth="140px">{{ 'sys.basicMaint.title.companyTelPhoneNo' | translate:'\u0110i\u1EC7n tho\u1EA1i' }}</th>
        <th nzWidth="160px">{{ 'sys.basicMaint.title.companyNetAddress' | translate:'Website' }}</th>
        <th class="text-center" nzWidth="90px">{{ 'common.action' | translate:'Thao t\xE1c' }}</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngIf="!loading() && rows().length === 0">
        <td colspan="8" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
      </tr>
      <tr *ngFor="let row of vcoTable.data; let i = index">
        <td class="text-center">{{ i + 1 }}</td>
        <td [attr.title]="row.cpnyId || null">{{ row.cpnyId }}</td>
        <td [attr.title]="row.nameVi || null">{{ row.nameVi }}</td>
        <td [attr.title]="row.nameEn || null">{{ row.nameEn }}</td>
        <td [attr.title]="row.cpnyAddr || null">{{ row.cpnyAddr }}</td>
        <td [attr.title]="row.cpnyTelNo || null">{{ row.cpnyTelNo }}</td>
        <td [attr.title]="row.cpnyWebAddr || null">{{ row.cpnyWebAddr }}</td>
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
    <ng-template #vcoTotalTpl let-total>
      {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
    </ng-template>
  </nz-table>
</nz-card>

<!-- Modal Th\xEAm m\u1EDBi / C\u1EADp nh\u1EADt -->
<nz-modal [nzVisible]="modalVisible()" [nzTitle]="modalTitle()" nzWidth="800px"
          (nzOnCancel)="closeModal()" (nzOnOk)="saveForm()" [nzOkLoading]="saving()"
          [nzOkText]="'common.save' | translate:'L\u01B0u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <div class="row g-3">
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'sys.basic.viewCompany.label.cpnyId' | translate:'M\xE3 C\xF4ng ty (ID)' }} <span class="text-danger">*</span></label>
        <input nz-input [(ngModel)]="form.cpnyId" name="vcoCpnyId" [readOnly]="!isNew()">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'sys.basic.viewCompany.label.operationId' | translate:'Operation ID' }}</label>
        <input nz-input [(ngModel)]="form.operationId" name="vcoOperationId">
      </div>

      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'sys.basic.viewMenuList.label.nameVi' | translate:'T\xEAn Ti\u1EBFng Vi\u1EC7t' }} <span class="text-danger">*</span></label>
        <input nz-input [(ngModel)]="form.nameVi" name="vcoNameVi">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'sys.basic.viewMenuList.label.nameEn' | translate:'T\xEAn Ti\u1EBFng Anh' }}</label>
        <input nz-input [(ngModel)]="form.nameEn" name="vcoNameEn">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'sys.basic.viewMenuList.label.nameZh' | translate:'T\xEAn Ti\u1EBFng Trung' }}</label>
        <input nz-input [(ngModel)]="form.nameZh" name="vcoNameZh">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'sys.basic.viewMenuList.label.nameKo' | translate:'T\xEAn Ti\u1EBFng H\xE0n' }}</label>
        <input nz-input [(ngModel)]="form.nameKo" name="vcoNameKo">
      </div>

      <div class="col-md-12">
        <label class="form-label fw-semibold">{{ 'sys.basicMaint.title.companyAddress' | translate:'\u0110\u1ECBa ch\u1EC9' }}</label>
        <input nz-input [(ngModel)]="form.cpnyAddr" name="vcoCpnyAddr">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'sys.basic.viewCompany.label.cpnyPostalcode' | translate:'M\xE3 b\u01B0u \u0111i\u1EC7n' }}</label>
        <input nz-input [(ngModel)]="form.cpnyPostalcode" name="vcoCpnyPostalcode">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'sys.basicMaint.title.companyArea' | translate:'Khu v\u1EF1c' }}</label>
        <input nz-input [(ngModel)]="form.cpnyLocation" name="vcoCpnyLocation">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'sys.basicMaint.title.companyTelPhoneNo' | translate:'\u0110i\u1EC7n tho\u1EA1i c\xF4ng ty' }}</label>
        <input nz-input [(ngModel)]="form.cpnyTelNo" name="vcoCpnyTelNo">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'sys.basicMaint.title.companyFaxNo' | translate:'Fax' }}</label>
        <input nz-input [(ngModel)]="form.cpnyFaxNo" name="vcoCpnyFaxNo">
      </div>
      <div class="col-md-12">
        <label class="form-label fw-semibold">{{ 'sys.basicMaint.title.companyNetAddress' | translate:'Website' }}</label>
        <input nz-input [(ngModel)]="form.cpnyWebAddr" name="vcoCpnyWebAddr">
      </div>

      <div class="col-md-12">
        <label class="form-label fw-semibold">{{ 'sys.basicMaint.title.companyIntroduction' | translate:'Gi\u1EDBi thi\u1EC7u' }}</label>
        <textarea nz-input [(ngModel)]="form.cpnyIntro" name="vcoCpnyIntro" rows="2"></textarea>
      </div>
      <div class="col-md-12">
        <label class="form-label fw-semibold">{{ 'sys.basicMaint.title.companyHistory' | translate:'L\u1ECBch s\u1EED' }}</label>
        <textarea nz-input [(ngModel)]="form.cpnyHistory" name="vcoCpnyHistory" rows="2"></textarea>
      </div>

      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'sys.basic.viewMenuList.label.orderNo' | translate:'Th\u1EE9 t\u1EF1' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.orderNo" name="vcoOrderNo" [nzMin]="0"></nz-input-number>
      </div>
      <div class="col-md-4 d-flex align-items-end">
        <label nz-checkbox [(ngModel)]="form.ggsYn" name="vcoGgsYn">
          {{ 'sys.basic.viewCompany.label.ggsYn' | translate:'S\u1EED d\u1EE5ng GGS' }}
        </label>
      </div>
      <div class="col-md-4 d-flex align-items-end">
        <label nz-checkbox [(ngModel)]="form.activity" name="vcoActivity">
          {{ 'sys.basic.viewMenuList.label.activity' | translate:'Ho\u1EA1t \u0111\u1ED9ng' }}
        </label>
      </div>
    </div>
  </ng-container>
</nz-modal>

<!-- Modal x\xE1c nh\u1EADn x\xF3a -->
<nz-modal [nzVisible]="deleteVisible()" [nzTitle]="'common.confirm' | translate:'X\xE1c nh\u1EADn'"
          (nzOnCancel)="closeDeleteConfirm()" (nzOnOk)="confirmDelete()" [nzOkLoading]="deleting()"
          [nzOkText]="'common.confirm' | translate:'X\xE1c nh\u1EADn'" [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'">
  <ng-container *nzModalContent>
    <p class="mb-1">{{ 'sys.basic.viewCompany.msg.confirmDelete' | translate:'B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a c\xF4ng ty n\xE0y?' }}</p>
    <p class="fw-bold mb-0">{{ deleteTargetName }}</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-company/view-company.component.css */\n.vco-btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=view-company.component.css.map */\n"] }]
  }], () => [{ type: ViewCompanyService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewCompanyComponent, { className: "ViewCompanyComponent", filePath: "src/app/view-company/view-company.component.ts", lineNumber: 103 });
})();
export {
  ViewCompanyComponent
};
//# debugId=6c7287f9-4a01-5264-9ad9-72422c46001a
//# sourceMappingURL=chunk-QWM7QM6F.js.map
