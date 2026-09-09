import {
  NzAutocompleteComponent,
  NzAutocompleteModule,
  NzAutocompleteOptionComponent,
  NzAutocompleteTriggerDirective
} from "./chunk-I3OGIUJB.js";
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

// src/app/emergency-address-info/emergency-address-info.service.ts
var API_BASE = "/hrm/empinfo/api/emergency-address";
var EmergencyAddressInfoService = class _EmergencyAddressInfoService {
  constructor(http) {
    this.http = http;
  }
  http;
  search(params) {
    let httpParams = new HttpParams();
    if (params.empId)
      httpParams = httpParams.set("empId", params.empId);
    if (params.localName)
      httpParams = httpParams.set("localName", params.localName);
    if (params.emerName)
      httpParams = httpParams.set("emerName", params.emerName);
    return this.http.get(API_BASE, { params: httpParams, withCredentials: true });
  }
  save(payload) {
    return this.http.post(`${API_BASE}/save`, payload, { withCredentials: true });
  }
  delete(emergencyNo) {
    return this.http.delete(`${API_BASE}/delete/${emergencyNo}`, { withCredentials: true });
  }
  searchEmployees(keyword) {
    let params = new HttpParams();
    if (keyword)
      params = params.set("keyword", keyword);
    return this.http.get("/hrm/empinfo/api/employee/search", { params, withCredentials: true });
  }
  getCodeList(parentCodeNo) {
    return this.http.get("/sys/api/getCode/list", {
      params: new HttpParams().set("parentCodeNo", parentCodeNo),
      withCredentials: true
    });
  }
  static \u0275fac = function EmergencyAddressInfoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmergencyAddressInfoService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EmergencyAddressInfoService, factory: _EmergencyAddressInfoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmergencyAddressInfoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/emergency-address-info/emergency-address-info.component.ts
var _c0 = () => ({ x: "1320px", y: "calc(100vh - 420px)" });
function EmergencyAddressInfoComponent_nz_alert_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 37);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function EmergencyAddressInfoComponent_tr_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 38);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function EmergencyAddressInfoComponent_tr_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 39);
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
    \u0275\u0275elementStart(11, "td", 39);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 39);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 39)(22, "button", 40);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275listener("click", function EmergencyAddressInfoComponent_tr_81_Template_button_click_22_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditModal(row_r4));
    });
    \u0275\u0275element(24, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 40);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275listener("click", function EmergencyAddressInfoComponent_tr_81_Template_button_click_25_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDeleteConfirm(row_r4));
    });
    \u0275\u0275element(27, "i", 42);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r5 + 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.empId || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.empId);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.localName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.localName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.emerName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.emerName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.emerTypeName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.emerTypeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.emerPhone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.emerCellphone);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.emerEmail || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.emerEmail);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.emerAddress || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.emerAddress);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.nationality || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.nationality);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(23, 19, "common.edit", "S\u1EEDa"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(26, 22, "common.delete", "X\xF3a"));
  }
}
function EmergencyAddressInfoComponent_ng_template_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r6 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r6, " ");
  }
}
function EmergencyAddressInfoComponent_ng_container_87_nz_auto_option_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-auto-option", 60);
    \u0275\u0275listener("click", function EmergencyAddressInfoComponent_ng_container_87_nz_auto_option_12_Template_nz_auto_option_click_0_listener() {
      const opt_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onEmpSelected(opt_r9));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "small", 61);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r9 = ctx.$implicit;
    \u0275\u0275property("nzValue", opt_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", opt_r9.empId, " - ", opt_r9.localName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", opt_r9.deptName, ")");
  }
}
function EmergencyAddressInfoComponent_ng_container_87_nz_option_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 62);
  }
  if (rf & 2) {
    const c_r10 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r10.codeNo)("nzLabel", c_r10.codeName);
  }
}
function EmergencyAddressInfoComponent_ng_container_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 43)(2, "div", 44)(3, "label", 45);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span", 46);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "input", 47);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275listener("ngModelChange", function EmergencyAddressInfoComponent_ng_container_87_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEmpKeywordChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(10, "nz-autocomplete", null, 2);
    \u0275\u0275template(12, EmergencyAddressInfoComponent_ng_container_87_nz_auto_option_12_Template, 4, 4, "nz-auto-option", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 44)(14, "label", 45);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementStart(17, "span", 46);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function EmergencyAddressInfoComponent_ng_container_87_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.emerName, $event) || (ctx_r1.form.emerName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 44)(21, "label", 45);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "nz-select", 50);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EmergencyAddressInfoComponent_ng_container_87_Template_nz_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.emerTypeCode, $event) || (ctx_r1.form.emerTypeCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(26, EmergencyAddressInfoComponent_ng_container_87_nz_option_26_Template, 1, 2, "nz-option", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 7)(28, "label", 45);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function EmergencyAddressInfoComponent_ng_container_87_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.emerPhone, $event) || (ctx_r1.form.emerPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 7)(33, "label", 45);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function EmergencyAddressInfoComponent_ng_container_87_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.emerCellphone, $event) || (ctx_r1.form.emerCellphone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 7)(38, "label", 45);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function EmergencyAddressInfoComponent_ng_container_87_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.emerWorkPhone, $event) || (ctx_r1.form.emerWorkPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 7)(43, "label", 45);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function EmergencyAddressInfoComponent_ng_container_87_Template_input_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.emerPhoneSecond, $event) || (ctx_r1.form.emerPhoneSecond = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 44)(48, "label", 45);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function EmergencyAddressInfoComponent_ng_container_87_Template_input_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.emerEmail, $event) || (ctx_r1.form.emerEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 44)(53, "label", 45);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function EmergencyAddressInfoComponent_ng_container_87_Template_input_ngModelChange_56_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.emerAddress, $event) || (ctx_r1.form.emerAddress = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 44)(58, "label", 45);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function EmergencyAddressInfoComponent_ng_container_87_Template_input_ngModelChange_61_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nationality, $event) || (ctx_r1.form.nationality = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 53)(63, "label", 45);
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function EmergencyAddressInfoComponent_ng_container_87_Template_input_ngModelChange_66_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.mainContactAddress, $event) || (ctx_r1.form.mainContactAddress = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 7)(68, "label", 54);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "nz-select", 55);
    \u0275\u0275twoWayListener("ngModelChange", function EmergencyAddressInfoComponent_ng_container_87_Template_nz_select_ngModelChange_71_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.mainLiaisonOffice, $event) || (ctx_r1.form.mainLiaisonOffice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(72, "nz-option", 56);
    \u0275\u0275pipe(73, "translate");
    \u0275\u0275element(74, "nz-option", 57);
    \u0275\u0275pipe(75, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 58)(77, "label", 59);
    \u0275\u0275twoWayListener("ngModelChange", function EmergencyAddressInfoComponent_ng_container_87_Template_label_ngModelChange_77_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.isEmergencyAddress, $event) || (ctx_r1.form.isEmergencyAddress = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(78);
    \u0275\u0275pipe(79, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const eaiEmpAuto_r11 = \u0275\u0275reference(11);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 33, "hrm.empinfo.emer.employee", "Nh\xE2n vi\xEAn"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.empKeyword)("nzAutocomplete", eaiEmpAuto_r11)("placeholder", \u0275\u0275pipeBind2(9, 36, "hrm.empinfo.workexp.selectEmp", "Ch\u1ECDn nh\xE2n vi\xEAn..."));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.empOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(16, 39, "hrm.empinfo.emer.emerName", "T\xEAn ng\u01B0\u1EDDi li\xEAn h\u1EC7"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.emerName);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 42, "hrm.empinfo.emer.emerType", "Quan h\u1EC7"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.emerTypeCode);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(25, 45, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.emerTypeOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 48, "hrm.empinfo.emer.emerPhone", "\u0110i\u1EC7n tho\u1EA1i"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.emerPhone);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 51, "hrm.empinfo.emer.emerCellphone", "Di \u0111\u1ED9ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.emerCellphone);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 54, "hrm.empinfo.emer.emerWorkPhone", "\u0110i\u1EC7n tho\u1EA1i c\xF4ng ty"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.emerWorkPhone);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 57, "hrm.empinfo.emer.emerPhoneSecond", "\u0110i\u1EC7n tho\u1EA1i kh\xE1c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.emerPhoneSecond);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 60, "hrm.empinfo.emer.emerEmail", "Email"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.emerEmail);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(55, 63, "hrm.empinfo.emer.emerAddress", "\u0110\u1ECBa ch\u1EC9"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.emerAddress);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(60, 66, "hrm.empinfo.emer.nationality", "Qu\u1ED1c gia"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nationality);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(65, 69, "hrm.empinfo.emer.mainContactAddress", "\u0110\u1ECBa ch\u1EC9 li\xEAn h\u1EC7 ch\xEDnh"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.mainContactAddress);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(70, 72, "hrm.empinfo.emer.mainLiaisonOffice", "VP li\xEAn l\u1EA1c ch\xEDnh"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.mainLiaisonOffice);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(73, 75, "common.no", "Kh\xF4ng"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(75, 78, "common.yes", "C\xF3"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.isEmergencyAddress);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(79, 81, "hrm.empinfo.emer.isEmergencyAddress", "L\xE0 \u0110C kh\u1EA9n c\u1EA5p ch\xEDnh"), " ");
  }
}
function EmergencyAddressInfoComponent_ng_container_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 63);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 64);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "hrm.empinfo.emer.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a b\u1EA3n ghi n\xE0y?"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.deleteTargetName);
  }
}
var I18N_KEYS = [
  "common.stt",
  "common.empId",
  "common.empName",
  "common.action",
  "common.addNew",
  "common.edit",
  "common.delete",
  "common.save",
  "common.close",
  "common.confirm",
  "common.cancel",
  "common.yes",
  "common.no",
  "common.saveSuccess",
  "common.saveFail",
  "common.deleteSuccess",
  "common.deleteFail",
  "common.loadFail",
  "common.noData",
  "common.totalRows",
  "common.placeholder.enterEmpId",
  "common.placeholder.enterEmpName",
  "common.selectAll",
  "essDept.search",
  "essDept.clearFilter",
  "essDept.exportExcel",
  "hrm.empinfo.workexp.selectEmp",
  "hrm.empinfo.emer.addTitle",
  "hrm.empinfo.emer.editTitle",
  "hrm.empinfo.emer.employee",
  "hrm.empinfo.emer.emerName",
  "hrm.empinfo.emer.emerType",
  "hrm.empinfo.emer.emerPhone",
  "hrm.empinfo.emer.emerCellphone",
  "hrm.empinfo.emer.emerWorkPhone",
  "hrm.empinfo.emer.emerPhoneSecond",
  "hrm.empinfo.emer.emerEmail",
  "hrm.empinfo.emer.emerAddress",
  "hrm.empinfo.emer.nationality",
  "hrm.empinfo.emer.mainContactAddress",
  "hrm.empinfo.emer.mainLiaisonOffice",
  "hrm.empinfo.emer.isEmergencyAddress",
  "hrm.empinfo.emer.searchEmerName",
  "hrm.empinfo.emer.colEmerName",
  "hrm.empinfo.emer.colRelation",
  "hrm.empinfo.emer.colPhone",
  "hrm.empinfo.emer.colMobile",
  "hrm.empinfo.emer.colEmail",
  "hrm.empinfo.emer.colAddress",
  "hrm.empinfo.emer.colNationality",
  "hrm.empinfo.emer.pleaseSelect",
  "hrm.empinfo.emer.confirmDelete"
];
var PAGE_SIZE_OPTIONS = [25, 50, 100, 200];
var EMER_TYPE_PARENT_CODE = "1693";
var EMPTY_FORM = {
  emergencyNo: null,
  personId: "",
  empId: "",
  localName: "",
  emerName: "",
  emerTypeCode: null,
  emerPhone: "",
  emerCellphone: "",
  emerWorkPhone: "",
  emerPhoneSecond: "",
  emerEmail: "",
  emerAddress: "",
  nationality: "",
  mainContactAddress: "",
  mainLiaisonOffice: "N",
  isEmergencyAddress: false
};
var EmergencyAddressInfoComponent = class _EmergencyAddressInfoComponent {
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
  errorMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "errorMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  emerTypeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "emerTypeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  searchEmpId = "";
  searchLocalName = "";
  searchEmerName = "";
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
    () => this.isNew() ? this.i18n.t("hrm.empinfo.emer.addTitle", "Th\xEAm m\u1EDBi \u0110C Kh\u1EA9n c\u1EA5p") : this.i18n.t("hrm.empinfo.emer.editTitle", "C\u1EADp nh\u1EADt \u0110C Kh\u1EA9n c\u1EA5p"),
    ...ngDevMode ? [{ debugName: "modalTitle" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = __spreadValues({}, EMPTY_FORM);
  empKeyword = "";
  empOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "empOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  empSearchTimer;
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
    this.api.getCodeList(EMER_TYPE_PARENT_CODE).subscribe((list) => this.emerTypeOptions.set(list ?? []));
    this.search();
  }
  search() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.search({ empId: this.searchEmpId, localName: this.searchLocalName, emerName: this.searchEmerName }).subscribe({
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
  clearSearch() {
    this.searchEmpId = "";
    this.searchLocalName = "";
    this.searchEmerName = "";
    this.search();
  }
  // ==================== Modal Thêm mới / Cập nhật ====================
  openAddModal() {
    this.isNew.set(true);
    this.form = __spreadValues({}, EMPTY_FORM);
    this.empKeyword = "";
    this.empOptions.set([]);
    this.modalVisible.set(true);
  }
  openEditModal(row) {
    this.isNew.set(false);
    this.form = {
      emergencyNo: row.emergencyNo,
      personId: row.personId,
      empId: row.empId || "",
      localName: row.localName || "",
      emerName: row.emerName || "",
      emerTypeCode: row.emerTypeCode || null,
      emerPhone: row.emerPhone || "",
      emerCellphone: row.emerCellphone || "",
      emerWorkPhone: row.emerWorkPhone || "",
      emerPhoneSecond: row.emerPhoneSecond || "",
      emerEmail: row.emerEmail || "",
      emerAddress: row.emerAddress || "",
      nationality: row.nationality || "",
      mainContactAddress: row.mainContactAddress || "",
      mainLiaisonOffice: row.mainLiaisonOffice || "N",
      isEmergencyAddress: this.toBool(row.isEmergencyAddress)
    };
    this.empKeyword = `${this.form.empId} - ${this.form.localName}`;
    this.empOptions.set([]);
    this.modalVisible.set(true);
  }
  closeModal() {
    this.modalVisible.set(false);
  }
  onEmpKeywordChange(value) {
    this.empKeyword = value;
    this.form.personId = "";
    if (this.empSearchTimer)
      clearTimeout(this.empSearchTimer);
    const keyword = value.trim();
    if (!keyword) {
      this.empOptions.set([]);
      return;
    }
    this.empSearchTimer = setTimeout(() => {
      this.api.searchEmployees(keyword).subscribe({
        next: (list) => this.empOptions.set(list ?? []),
        error: () => this.empOptions.set([])
      });
    }, 300);
  }
  onEmpSelected(option) {
    this.form.personId = option.personId;
    this.form.empId = option.empId;
    this.form.localName = option.localName;
    this.empKeyword = `${option.empId} - ${option.localName}`;
    this.empOptions.set([]);
  }
  saveForm() {
    if (!this.form.personId || !this.form.emerName) {
      this.message.warning(this.i18n.t("hrm.empinfo.emer.pleaseSelect", "Vui l\xF2ng \u0111i\u1EC1n \u0111\u1EE7: Nh\xE2n vi\xEAn, T\xEAn ng\u01B0\u1EDDi li\xEAn h\u1EC7"));
      return;
    }
    const payload = {
      emergencyNo: this.form.emergencyNo,
      personId: this.form.personId,
      emerName: this.form.emerName,
      emerTypeCode: this.form.emerTypeCode ?? "",
      emerPhone: this.form.emerPhone,
      emerCellphone: this.form.emerCellphone,
      emerWorkPhone: this.form.emerWorkPhone,
      emerPhoneSecond: this.form.emerPhoneSecond,
      emerEmail: this.form.emerEmail,
      emerAddress: this.form.emerAddress,
      nationality: this.form.nationality,
      mainContactAddress: this.form.mainContactAddress,
      mainLiaisonOffice: this.form.mainLiaisonOffice,
      isEmergencyAddress: this.form.isEmergencyAddress ? "1" : "0"
    };
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: () => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.message.success(this.i18n.t("common.saveSuccess", "L\u01B0u th\xE0nh c\xF4ng!"));
        this.search();
      },
      error: (err) => {
        this.saving.set(false);
        const msg = err?.error?.error || this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!");
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
    return this.deleteTarget ? `${this.deleteTarget.empId} - ${this.deleteTarget.localName} (${this.deleteTarget.emerName})` : "";
  }
  confirmDelete() {
    if (!this.deleteTarget?.emergencyNo)
      return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.emergencyNo).subscribe({
      next: () => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.message.success(this.i18n.t("common.deleteSuccess", "X\xF3a th\xE0nh c\xF4ng!"));
        this.search();
      },
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t("common.deleteFail", "X\xF3a th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  // ==================== Xuất Excel ====================
  /** Xuất excel client-side (giống bản gốc DataTables Buttons, không có endpoint export riêng ở
   *  backend) - dùng thư viện xlsx (SheetJS) để tạo đúng file .xlsx nhị phân (xem CLAUDE.md). */
  exportExcel() {
    const headers = [
      this.i18n.t("common.stt", "STT"),
      this.i18n.t("common.empId", "M\xE3 NV"),
      this.i18n.t("common.empName", "H\u1ECD t\xEAn"),
      this.i18n.t("hrm.empinfo.emer.colEmerName", "T\xEAn ng\u01B0\u1EDDi li\xEAn h\u1EC7"),
      this.i18n.t("hrm.empinfo.emer.colRelation", "Quan h\u1EC7"),
      this.i18n.t("hrm.empinfo.emer.colPhone", "S\u0110T"),
      this.i18n.t("hrm.empinfo.emer.colMobile", "Di \u0111\u1ED9ng"),
      this.i18n.t("hrm.empinfo.emer.colEmail", "Email"),
      this.i18n.t("hrm.empinfo.emer.colAddress", "\u0110\u1ECBa ch\u1EC9"),
      this.i18n.t("hrm.empinfo.emer.colNationality", "Qu\u1ED1c gia")
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      r.empId,
      r.localName,
      r.emerName,
      r.emerTypeName,
      r.emerPhone,
      r.emerCellphone,
      r.emerEmail,
      r.emerAddress,
      r.nationality
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "DanhSach");
    writeFileSync(workbook, "emergency_address_info_list.xlsx");
  }
  toBool(v) {
    return v === "1" || v === "Y" || v === "true";
  }
  static \u0275fac = function EmergencyAddressInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmergencyAddressInfoComponent)(\u0275\u0275directiveInject(EmergencyAddressInfoService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmergencyAddressInfoComponent, selectors: [["app-emergency-address-info"]], decls: 93, vars: 123, consts: [["eaiTable", ""], ["eaiTotalTpl", ""], ["eaiEmpAuto", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["nz-input", "", "name", "eaiSearchEmpId", 3, "ngModelChange", "ngModel", "placeholder"], ["nz-input", "", "name", "eaiSearchLocalName", 3, "ngModelChange", "ngModel", "placeholder"], ["nz-input", "", "name", "eaiSearchEmerName", 3, "ngModelChange", "ngModel", "placeholder"], [1, "col-md-3", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], [1, "col-12", "d-flex", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzType", "default", "type", "button", 1, "eai-btn-export", 3, "click"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "100px", 1, "text-center"], ["nzWidth", "150px"], ["nzWidth", "110px"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "160px"], ["nzWidth", "180px"], ["nzWidth", "90px", 1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["nzWidth", "800px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "11", 1, "text-center", "text-muted"], [1, "text-center"], ["nz-button", "", "nzType", "text", "nzSize", "small", 3, "click", "title"], [1, "bx", "bx-edit", "text-warning"], [1, "bx", "bx-trash", "text-danger"], [1, "row", "g-3"], [1, "col-md-4"], [1, "form-label", "fw-semibold"], [1, "text-danger"], ["nz-input", "", 3, "ngModelChange", "ngModel", "nzAutocomplete", "placeholder"], [3, "nzValue", "click", 4, "ngFor", "ngForOf"], ["nz-input", "", 3, "ngModelChange", "ngModel"], ["nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nz-input", "", "type", "email", 3, "ngModelChange", "ngModel"], [1, "col-md-6"], [1, "form-label", "fw-semibold", "d-block"], [1, "w-100", 3, "ngModelChange", "ngModel"], ["nzValue", "N", 3, "nzLabel"], ["nzValue", "Y", 3, "nzLabel"], [1, "col-md-3", "d-flex", "align-items-end"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel"], [3, "click", "nzValue"], [1, "text-muted"], [3, "nzValue", "nzLabel"], [1, "mb-1"], [1, "fw-bold", "mb-0"]], template: function EmergencyAddressInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "nz-card", 5)(3, "form", 6);
      \u0275\u0275listener("ngSubmit", function EmergencyAddressInfoComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 7)(5, "label", 8);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 9);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function EmergencyAddressInfoComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchEmpId, $event) || (ctx.searchEmpId = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7)(11, "label", 8);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "input", 10);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function EmergencyAddressInfoComponent_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchLocalName, $event) || (ctx.searchLocalName = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 7)(17, "label", 8);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "input", 11);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function EmergencyAddressInfoComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchEmerName, $event) || (ctx.searchEmerName = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 12)(23, "button", 13);
      \u0275\u0275element(24, "i", 14);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "button", 15);
      \u0275\u0275listener("click", function EmergencyAddressInfoComponent_Template_button_click_27_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(28, "i", 16);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 17)(32, "button", 18);
      \u0275\u0275listener("click", function EmergencyAddressInfoComponent_Template_button_click_32_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(33, "i", 19);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "button", 20);
      \u0275\u0275listener("click", function EmergencyAddressInfoComponent_Template_button_click_36_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(37, "i", 21);
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(40, "nz-card");
      \u0275\u0275template(41, EmergencyAddressInfoComponent_nz_alert_41_Template, 1, 1, "nz-alert", 22);
      \u0275\u0275elementStart(42, "nz-table", 23, 0)(44, "thead")(45, "tr")(46, "th", 24);
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "th", 25);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "th", 26);
      \u0275\u0275text(53);
      \u0275\u0275pipe(54, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "th", 26);
      \u0275\u0275text(56);
      \u0275\u0275pipe(57, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "th", 27);
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "th", 28);
      \u0275\u0275text(62);
      \u0275\u0275pipe(63, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "th", 28);
      \u0275\u0275text(65);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "th", 29);
      \u0275\u0275text(68);
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "th", 30);
      \u0275\u0275text(71);
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "th", 27);
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "th", 31);
      \u0275\u0275text(77);
      \u0275\u0275pipe(78, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(79, "tbody");
      \u0275\u0275template(80, EmergencyAddressInfoComponent_tr_80_Template, 4, 4, "tr", 32)(81, EmergencyAddressInfoComponent_tr_81_Template, 28, 25, "tr", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275template(82, EmergencyAddressInfoComponent_ng_template_82_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(84, "nz-modal", 34);
      \u0275\u0275pipe(85, "translate");
      \u0275\u0275pipe(86, "translate");
      \u0275\u0275listener("nzOnCancel", function EmergencyAddressInfoComponent_Template_nz_modal_nzOnCancel_84_listener() {
        return ctx.closeModal();
      })("nzOnOk", function EmergencyAddressInfoComponent_Template_nz_modal_nzOnOk_84_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(87, EmergencyAddressInfoComponent_ng_container_87_Template, 80, 84, "ng-container", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "nz-modal", 36);
      \u0275\u0275pipe(89, "translate");
      \u0275\u0275pipe(90, "translate");
      \u0275\u0275pipe(91, "translate");
      \u0275\u0275listener("nzOnCancel", function EmergencyAddressInfoComponent_Template_nz_modal_nzOnCancel_88_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function EmergencyAddressInfoComponent_Template_nz_modal_nzOnOk_88_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(92, EmergencyAddressInfoComponent_ng_container_92_Template, 6, 5, "ng-container", 35);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const eaiTable_r12 = \u0275\u0275reference(43);
      const eaiTotalTpl_r13 = \u0275\u0275reference(83);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 44, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchEmpId);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 47, "common.placeholder.enterEmpId", "Nh\u1EADp m\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 50, "common.empName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchLocalName);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(15, 53, "common.placeholder.enterEmpName", "Nh\u1EADp h\u1ECD t\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 56, "hrm.empinfo.emer.searchEmerName", "T\xEAn ng\u01B0\u1EDDi li\xEAn h\u1EC7"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchEmerName);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(21, 59, "hrm.empinfo.emer.searchEmerName", "T\xEAn ng\u01B0\u1EDDi li\xEAn h\u1EC7"));
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 62, "essDept.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(30, 65, "essDept.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(35, 68, "common.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(39, 71, "essDept.exportExcel", "Xu\u1EA5t excel"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", eaiTotalTpl_r13)("nzScroll", \u0275\u0275pureFunction0(122, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 74, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 77, "common.empId", "M\xE3 NV"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 80, "common.empName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 83, "hrm.empinfo.emer.colEmerName", "T\xEAn ng\u01B0\u1EDDi li\xEAn h\u1EC7"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(60, 86, "hrm.empinfo.emer.colRelation", "Quan h\u1EC7"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(63, 89, "hrm.empinfo.emer.colPhone", "S\u0110T"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(66, 92, "hrm.empinfo.emer.colMobile", "Di \u0111\u1ED9ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 95, "hrm.empinfo.emer.colEmail", "Email"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(72, 98, "hrm.empinfo.emer.colAddress", "\u0110\u1ECBa ch\u1EC9"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(75, 101, "hrm.empinfo.emer.colNationality", "Qu\u1ED1c gia"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(78, 104, "common.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", eaiTable_r12.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", ctx.modalTitle())("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(85, 107, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(86, 110, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(4);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(89, 113, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(90, 116, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(91, 119, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzCheckboxModule, NzCheckboxComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, NzAutocompleteModule, NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, TranslatePipe], styles: ["\n.eai-btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=emergency-address-info.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmergencyAddressInfoComponent, [{
    type: Component,
    args: [{ selector: "app-emergency-address-info", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzSelectModule,
      NzCheckboxModule,
      NzButtonModule,
      NzModalModule,
      NzAlertModule,
      NzAutocompleteModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm - \u0111\u1EE9ng im khi cu\u1ED9n (xem .sticky-filter-card trong styles.css) -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3" (ngSubmit)="search()">
        <div class="col-md-3">
          <label class="form-label">{{ 'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</label>
          <input nz-input [(ngModel)]="searchEmpId" name="eaiSearchEmpId"
                 [placeholder]="'common.placeholder.enterEmpId' | translate:'Nh\u1EADp m\xE3 nh\xE2n vi\xEAn'">
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</label>
          <input nz-input [(ngModel)]="searchLocalName" name="eaiSearchLocalName"
                 [placeholder]="'common.placeholder.enterEmpName' | translate:'Nh\u1EADp h\u1ECD t\xEAn'">
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'hrm.empinfo.emer.searchEmerName' | translate:'T\xEAn ng\u01B0\u1EDDi li\xEAn h\u1EC7' }}</label>
          <input nz-input [(ngModel)]="searchEmerName" name="eaiSearchEmerName"
                 [placeholder]="'hrm.empinfo.emer.searchEmerName' | translate:'T\xEAn ng\u01B0\u1EDDi li\xEAn h\u1EC7'">
        </div>
        <div class="col-md-3 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'essDept.search' | translate:'Tra c\u1EE9u' }}
          </button>
          <button nz-button type="button" (click)="clearSearch()">
            <i class="bx bx-x"></i> {{ 'essDept.clearFilter' | translate:'X\xF3a l\u1ECDc' }}
          </button>
        </div>
        <div class="col-12 d-flex gap-2 flex-wrap">
          <button nz-button nzType="primary" type="button" (click)="openAddModal()">
            <i class="bx bx-plus"></i> {{ 'common.addNew' | translate:'Th\xEAm m\u1EDBi' }}
          </button>
          <button nz-button nzType="default" type="button" class="eai-btn-export" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'essDept.exportExcel' | translate:'Xu\u1EA5t excel' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <!-- nzWidth khai b\xE1o cho t\u1EEBng c\u1ED9t \u0111\u1EC3 \u0111\u1ED3ng b\u1ED9 \u0111\u1ED9 r\u1ED9ng header/body khi d\xF9ng nzScroll. -->
      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="eaiTotalTpl"
                [nzScroll]="{ x: '1320px', y: 'calc(100vh - 420px)' }" #eaiTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'common.empId' | translate:'M\xE3 NV' }}</th>
            <th nzWidth="150px">{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
            <th nzWidth="150px">{{ 'hrm.empinfo.emer.colEmerName' | translate:'T\xEAn ng\u01B0\u1EDDi li\xEAn h\u1EC7' }}</th>
            <th nzWidth="110px">{{ 'hrm.empinfo.emer.colRelation' | translate:'Quan h\u1EC7' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'hrm.empinfo.emer.colPhone' | translate:'S\u0110T' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'hrm.empinfo.emer.colMobile' | translate:'Di \u0111\u1ED9ng' }}</th>
            <th nzWidth="160px">{{ 'hrm.empinfo.emer.colEmail' | translate:'Email' }}</th>
            <th nzWidth="180px">{{ 'hrm.empinfo.emer.colAddress' | translate:'\u0110\u1ECBa ch\u1EC9' }}</th>
            <th nzWidth="110px">{{ 'hrm.empinfo.emer.colNationality' | translate:'Qu\u1ED1c gia' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'common.action' | translate:'Thao t\xE1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="11" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of eaiTable.data; let i = index">
            <td class="text-center">{{ i + 1 }}</td>
            <td class="text-center" [attr.title]="row.empId || null">{{ row.empId }}</td>
            <td [attr.title]="row.localName || null">{{ row.localName }}</td>
            <td [attr.title]="row.emerName || null">{{ row.emerName }}</td>
            <td [attr.title]="row.emerTypeName || null">{{ row.emerTypeName }}</td>
            <td class="text-center">{{ row.emerPhone }}</td>
            <td class="text-center">{{ row.emerCellphone }}</td>
            <td [attr.title]="row.emerEmail || null">{{ row.emerEmail }}</td>
            <td [attr.title]="row.emerAddress || null">{{ row.emerAddress }}</td>
            <td [attr.title]="row.nationality || null">{{ row.nationality }}</td>
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
        <ng-template #eaiTotalTpl let-total>
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
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.emer.employee' | translate:'Nh\xE2n vi\xEAn' }} <span class="text-danger">*</span></label>
        <input nz-input [ngModel]="empKeyword" (ngModelChange)="onEmpKeywordChange($event)"
               [nzAutocomplete]="eaiEmpAuto" [placeholder]="'hrm.empinfo.workexp.selectEmp' | translate:'Ch\u1ECDn nh\xE2n vi\xEAn...'">
        <nz-autocomplete #eaiEmpAuto>
          <nz-auto-option *ngFor="let opt of empOptions()" [nzValue]="opt" (click)="onEmpSelected(opt)">
            {{ opt.empId }} - {{ opt.localName }} <small class="text-muted">({{ opt.deptName }})</small>
          </nz-auto-option>
        </nz-autocomplete>
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.emer.emerName' | translate:'T\xEAn ng\u01B0\u1EDDi li\xEAn h\u1EC7' }} <span class="text-danger">*</span></label>
        <input nz-input [(ngModel)]="form.emerName">
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.emer.emerType' | translate:'Quan h\u1EC7' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.emerTypeCode" nzAllowClear
                   [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
          <nz-option *ngFor="let c of emerTypeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
        </nz-select>
      </div>

      <div class="col-md-3">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.emer.emerPhone' | translate:'\u0110i\u1EC7n tho\u1EA1i' }}</label>
        <input nz-input [(ngModel)]="form.emerPhone">
      </div>
      <div class="col-md-3">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.emer.emerCellphone' | translate:'Di \u0111\u1ED9ng' }}</label>
        <input nz-input [(ngModel)]="form.emerCellphone">
      </div>
      <div class="col-md-3">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.emer.emerWorkPhone' | translate:'\u0110i\u1EC7n tho\u1EA1i c\xF4ng ty' }}</label>
        <input nz-input [(ngModel)]="form.emerWorkPhone">
      </div>
      <div class="col-md-3">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.emer.emerPhoneSecond' | translate:'\u0110i\u1EC7n tho\u1EA1i kh\xE1c' }}</label>
        <input nz-input [(ngModel)]="form.emerPhoneSecond">
      </div>

      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.emer.emerEmail' | translate:'Email' }}</label>
        <input nz-input [(ngModel)]="form.emerEmail" type="email">
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.emer.emerAddress' | translate:'\u0110\u1ECBa ch\u1EC9' }}</label>
        <input nz-input [(ngModel)]="form.emerAddress">
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.emer.nationality' | translate:'Qu\u1ED1c gia' }}</label>
        <input nz-input [(ngModel)]="form.nationality">
      </div>

      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.emer.mainContactAddress' | translate:'\u0110\u1ECBa ch\u1EC9 li\xEAn h\u1EC7 ch\xEDnh' }}</label>
        <input nz-input [(ngModel)]="form.mainContactAddress">
      </div>
      <div class="col-md-3">
        <label class="form-label fw-semibold d-block">{{ 'hrm.empinfo.emer.mainLiaisonOffice' | translate:'VP li\xEAn l\u1EA1c ch\xEDnh' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.mainLiaisonOffice">
          <nz-option nzValue="N" [nzLabel]="'common.no' | translate:'Kh\xF4ng'"></nz-option>
          <nz-option nzValue="Y" [nzLabel]="'common.yes' | translate:'C\xF3'"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-3 d-flex align-items-end">
        <label nz-checkbox [(ngModel)]="form.isEmergencyAddress">
          {{ 'hrm.empinfo.emer.isEmergencyAddress' | translate:'L\xE0 \u0110C kh\u1EA9n c\u1EA5p ch\xEDnh' }}
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
    <p class="mb-1">{{ 'hrm.empinfo.emer.confirmDelete' | translate:'B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a b\u1EA3n ghi n\xE0y?' }}</p>
    <p class="fw-bold mb-0">{{ deleteTargetName }}</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/emergency-address-info/emergency-address-info.component.css */\n.eai-btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=emergency-address-info.component.css.map */\n"] }]
  }], () => [{ type: EmergencyAddressInfoService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmergencyAddressInfoComponent, { className: "EmergencyAddressInfoComponent", filePath: "src/app/emergency-address-info/emergency-address-info.component.ts", lineNumber: 109 });
})();
export {
  EmergencyAddressInfoComponent
};
//# debugId=7ef61729-f89a-5153-8419-a9a7ed9a9c6d
//# sourceMappingURL=chunk-ZENDAELI.js.map
