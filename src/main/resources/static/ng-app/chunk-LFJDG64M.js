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
  __spreadValues,
  computed,
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

// src/app/recognition-info/recognition-info.service.ts
var API_BASE = "/hrm/empinfo/api/reward";
var RecognitionInfoService = class _RecognitionInfoService {
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
    if (params.rewardType)
      httpParams = httpParams.set("rewardType", params.rewardType);
    return this.http.get(API_BASE, { params: httpParams, withCredentials: true });
  }
  save(payload) {
    return this.http.post(`${API_BASE}/save`, payload, { withCredentials: true });
  }
  delete(rewardNo) {
    return this.http.delete(`${API_BASE}/delete/${rewardNo}`, { withCredentials: true });
  }
  searchEmployees(keyword) {
    let params = new HttpParams();
    if (keyword)
      params = params.set("keyword", keyword);
    return this.http.get("/hrm/empinfo/api/employee/search", { params, withCredentials: true });
  }
  static \u0275fac = function RecognitionInfoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecognitionInfoService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RecognitionInfoService, factory: _RecognitionInfoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecognitionInfoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/recognition-info/recognition-info.component.ts
var _c0 = () => ({ x: "1300px", y: "calc(100vh - 420px)" });
function RecognitionInfoComponent_nz_alert_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 36);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function RecognitionInfoComponent_tr_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 37);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function RecognitionInfoComponent_tr_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 38);
    \u0275\u0275text(2);
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
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 38);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 38)(20, "button", 39);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275listener("click", function RecognitionInfoComponent_tr_78_Template_button_click_20_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditModal(row_r4));
    });
    \u0275\u0275element(22, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 39);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275listener("click", function RecognitionInfoComponent_tr_78_Template_button_click_23_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDeleteConfirm(row_r4));
    });
    \u0275\u0275element(25, "i", 41);
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
    \u0275\u0275attribute("title", row_r4.deptName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.deptName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.rewardType || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.rewardType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.rewardDate);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.rewardCnpy || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.rewardCnpy);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.reward || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.reward);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.remarks || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.remarks);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(21, 18, "common.edit", "S\u1EEDa"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(24, 21, "common.delete", "X\xF3a"));
  }
}
function RecognitionInfoComponent_ng_template_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r6 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r6, " ");
  }
}
function RecognitionInfoComponent_ng_container_84_nz_auto_option_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-auto-option", 56);
    \u0275\u0275listener("click", function RecognitionInfoComponent_ng_container_84_nz_auto_option_12_Template_nz_auto_option_click_0_listener() {
      const opt_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onEmpSelected(opt_r9));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "small", 57);
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
function RecognitionInfoComponent_ng_container_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 42)(2, "div", 43)(3, "label", 44);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span", 45);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "input", 46);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275listener("ngModelChange", function RecognitionInfoComponent_ng_container_84_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEmpKeywordChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(10, "nz-autocomplete", null, 2);
    \u0275\u0275template(12, RecognitionInfoComponent_ng_container_84_nz_auto_option_12_Template, 4, 4, "nz-auto-option", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 48)(14, "label", 44);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function RecognitionInfoComponent_ng_container_84_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.rewardType, $event) || (ctx_r1.form.rewardType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 48)(19, "label", 44);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "nz-date-picker", 50);
    \u0275\u0275twoWayListener("ngModelChange", function RecognitionInfoComponent_ng_container_84_Template_nz_date_picker_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.rewardDate, $event) || (ctx_r1.form.rewardDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 48)(24, "label", 44);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function RecognitionInfoComponent_ng_container_84_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.rewardCnpy, $event) || (ctx_r1.form.rewardCnpy = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 48)(29, "label", 44);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function RecognitionInfoComponent_ng_container_84_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.reward, $event) || (ctx_r1.form.reward = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 48)(34, "label", 44);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function RecognitionInfoComponent_ng_container_84_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.rewardTypeCode, $event) || (ctx_r1.form.rewardTypeCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 48)(39, "label", 44);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "nz-date-picker", 50);
    \u0275\u0275twoWayListener("ngModelChange", function RecognitionInfoComponent_ng_container_84_Template_nz_date_picker_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.rewardPayDate, $event) || (ctx_r1.form.rewardPayDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 48)(44, "label", 51);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "nz-select", 52);
    \u0275\u0275twoWayListener("ngModelChange", function RecognitionInfoComponent_ng_container_84_Template_nz_select_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.personnelCardInquiry, $event) || (ctx_r1.form.personnelCardInquiry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(48, "nz-option", 53);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275element(50, "nz-option", 54);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 48)(53, "label", 51);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "nz-select", 52);
    \u0275\u0275twoWayListener("ngModelChange", function RecognitionInfoComponent_ng_container_84_Template_nz_select_ngModelChange_56_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.payAppearIsnot, $event) || (ctx_r1.form.payAppearIsnot = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(57, "nz-option", 53);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275element(59, "nz-option", 54);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 48)(62, "label", 44);
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function RecognitionInfoComponent_ng_container_84_Template_input_ngModelChange_65_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.lineId, $event) || (ctx_r1.form.lineId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 48)(67, "label", 44);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function RecognitionInfoComponent_ng_container_84_Template_input_ngModelChange_70_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.otherType, $event) || (ctx_r1.form.otherType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 4)(72, "label", 44);
    \u0275\u0275text(73);
    \u0275\u0275pipe(74, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "textarea", 55);
    \u0275\u0275twoWayListener("ngModelChange", function RecognitionInfoComponent_ng_container_84_Template_textarea_ngModelChange_75_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.remarks, $event) || (ctx_r1.form.remarks = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const riEmpAuto_r10 = \u0275\u0275reference(11);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 31, "hrm.empinfo.reward.employee", "Nh\xE2n vi\xEAn"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.empKeyword)("nzAutocomplete", riEmpAuto_r10)("placeholder", \u0275\u0275pipeBind2(9, 34, "hrm.empinfo.workexp.selectEmp", "Ch\u1ECDn nh\xE2n vi\xEAn..."));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.empOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 37, "hrm.empinfo.reward.rewardType", "Lo\u1EA1i h\xECnh khen th\u01B0\u1EDFng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.rewardType);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 40, "hrm.empinfo.reward.rewardDate", "Ng\xE0y khen th\u01B0\u1EDFng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.rewardDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 43, "hrm.empinfo.reward.rewardCnpy", "C\u01A1 quan khen th\u01B0\u1EDFng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.rewardCnpy);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 46, "hrm.empinfo.reward.reward", "Ph\u1EA7n th\u01B0\u1EDFng/Hi\u1EC7n v\u1EADt"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.reward);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 49, "hrm.empinfo.reward.rewardTypeCode", "M\xE3 lo\u1EA1i th\u01B0\u1EDFng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.rewardTypeCode);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 52, "hrm.empinfo.reward.rewardPayDate", "Ng\xE0y chi tr\u1EA3"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.rewardPayDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 55, "hrm.empinfo.reward.personnelCardInquiry", "Hi\u1EC3n th\u1ECB th\u1EBB nh\xE2n s\u1EF1"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.personnelCardInquiry);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(49, 58, "common.no", "Kh\xF4ng"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(51, 61, "common.yes", "C\xF3"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(55, 64, "hrm.empinfo.reward.payAppearIsnot", "Ph\u1EA3n \xE1nh l\u01B0\u01A1ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.payAppearIsnot);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(58, 67, "common.no", "Kh\xF4ng"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(60, 70, "common.yes", "C\xF3"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(64, 73, "hrm.empinfo.reward.lineId", "LINE ID"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.lineId);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 76, "hrm.empinfo.reward.otherType", "Lo\u1EA1i kh\xE1c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.otherType);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(74, 79, "hrm.empinfo.reward.remarks", "Ghi ch\xFA"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.remarks);
    \u0275\u0275control();
  }
}
function RecognitionInfoComponent_ng_container_89_Template(rf, ctx) {
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "hrm.empinfo.reward.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a b\u1EA3n ghi n\xE0y?"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.deleteTargetName);
  }
}
var I18N_KEYS = [
  "common.stt",
  "common.empId",
  "common.empName",
  "common.deptName",
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
  "essDept.search",
  "essDept.clearFilter",
  "essDept.exportExcel",
  "hrm.empinfo.workexp.selectEmp",
  "hrm.empinfo.reward.addTitle",
  "hrm.empinfo.reward.editTitle",
  "hrm.empinfo.reward.employee",
  "hrm.empinfo.reward.rewardType",
  "hrm.empinfo.reward.rewardDate",
  "hrm.empinfo.reward.rewardCnpy",
  "hrm.empinfo.reward.reward",
  "hrm.empinfo.reward.rewardTypeCode",
  "hrm.empinfo.reward.rewardPayDate",
  "hrm.empinfo.reward.personnelCardInquiry",
  "hrm.empinfo.reward.payAppearIsnot",
  "hrm.empinfo.reward.lineId",
  "hrm.empinfo.reward.otherType",
  "hrm.empinfo.reward.remarks",
  "hrm.empinfo.reward.searchType",
  "hrm.empinfo.reward.colDate",
  "hrm.empinfo.reward.colCnpy",
  "hrm.empinfo.reward.colReward",
  "hrm.empinfo.reward.confirmDelete",
  "hrm.empinfo.reward.pleaseSelectEmp"
];
var PAGE_SIZE_OPTIONS = [25, 50, 100, 200];
var EMPTY_FORM = {
  rewardNo: null,
  personId: "",
  empId: "",
  localName: "",
  deptName: "",
  rewardType: "",
  rewardDate: null,
  rewardCnpy: "",
  reward: "",
  rewardTypeCode: "",
  rewardPayDate: null,
  personnelCardInquiry: "N",
  payAppearIsnot: "N",
  lineId: "",
  otherType: "",
  remarks: ""
};
var RecognitionInfoComponent = class _RecognitionInfoComponent {
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
  searchEmpId = "";
  searchLocalName = "";
  searchRewardType = "";
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
    () => this.isNew() ? this.i18n.t("hrm.empinfo.reward.addTitle", "Th\xEAm m\u1EDBi khen th\u01B0\u1EDFng") : this.i18n.t("hrm.empinfo.reward.editTitle", "C\u1EADp nh\u1EADt khen th\u01B0\u1EDFng"),
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
    this.search();
  }
  search() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.search({ empId: this.searchEmpId, localName: this.searchLocalName, rewardType: this.searchRewardType }).subscribe({
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
    this.searchRewardType = "";
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
      rewardNo: row.rewardNo,
      personId: row.personId,
      empId: row.empId || "",
      localName: row.localName || "",
      deptName: row.deptName || "",
      rewardType: row.rewardType || "",
      rewardDate: row.rewardDate ? new Date(row.rewardDate) : null,
      rewardCnpy: row.rewardCnpy || "",
      reward: row.reward || "",
      rewardTypeCode: row.rewardTypeCode || "",
      rewardPayDate: row.rewardPayDate ? new Date(row.rewardPayDate) : null,
      personnelCardInquiry: row.personnelCardInquiry || "N",
      payAppearIsnot: row.payAppearIsnot || "N",
      lineId: row.lineId || "",
      otherType: row.otherType || "",
      remarks: row.remarks || ""
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
    this.form.deptName = option.deptName;
    this.empKeyword = `${option.empId} - ${option.localName}`;
    this.empOptions.set([]);
  }
  saveForm() {
    if (!this.form.personId) {
      this.message.warning(this.i18n.t("hrm.empinfo.reward.pleaseSelectEmp", "Vui l\xF2ng ch\u1ECDn nh\xE2n vi\xEAn"));
      return;
    }
    const payload = {
      rewardNo: this.form.rewardNo,
      personId: this.form.personId,
      rewardType: this.form.rewardType,
      rewardDate: this.formatYmd(this.form.rewardDate),
      rewardCnpy: this.form.rewardCnpy,
      reward: this.form.reward,
      rewardTypeCode: this.form.rewardTypeCode,
      rewardPayDate: this.formatYmd(this.form.rewardPayDate),
      personnelCardInquiry: this.form.personnelCardInquiry,
      payAppearIsnot: this.form.payAppearIsnot,
      lineId: this.form.lineId,
      otherType: this.form.otherType,
      remarks: this.form.remarks
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
    return this.deleteTarget ? `${this.deleteTarget.empId} - ${this.deleteTarget.localName} (${this.deleteTarget.rewardType})` : "";
  }
  confirmDelete() {
    if (!this.deleteTarget?.rewardNo)
      return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.rewardNo).subscribe({
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
  /** Xuất excel client-side (bản gốc chưa làm - nút chỉ alert "đang phát triển") - dùng thư viện xlsx
   *  (SheetJS) để tạo đúng file .xlsx nhị phân (xem CLAUDE.md). */
  exportExcel() {
    const headers = [
      this.i18n.t("common.stt", "STT"),
      this.i18n.t("common.empId", "M\xE3 NV"),
      this.i18n.t("common.empName", "H\u1ECD t\xEAn"),
      this.i18n.t("common.deptName", "Ph\xF2ng ban"),
      this.i18n.t("hrm.empinfo.reward.rewardType", "Lo\u1EA1i h\xECnh"),
      this.i18n.t("hrm.empinfo.reward.colDate", "Ng\xE0y KT"),
      this.i18n.t("hrm.empinfo.reward.colCnpy", "C\u01A1 quan KT"),
      this.i18n.t("hrm.empinfo.reward.colReward", "Ph\u1EA7n th\u01B0\u1EDFng"),
      this.i18n.t("hrm.empinfo.reward.remarks", "Ghi ch\xFA")
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      r.empId,
      r.localName,
      r.deptName,
      r.rewardType,
      r.rewardDate,
      r.rewardCnpy,
      r.reward,
      r.remarks
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "DanhSach");
    writeFileSync(workbook, "recognition_info_list.xlsx");
  }
  formatYmd(d) {
    return d ? formatDate(d, "yyyy-MM-dd", "vi") : null;
  }
  static \u0275fac = function RecognitionInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecognitionInfoComponent)(\u0275\u0275directiveInject(RecognitionInfoService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecognitionInfoComponent, selectors: [["app-recognition-info"]], decls: 90, vars: 119, consts: [["riTable", ""], ["riTotalTpl", ""], ["riEmpAuto", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["nz-input", "", "name", "riSearchEmpId", 3, "ngModelChange", "ngModel", "placeholder"], ["nz-input", "", "name", "riSearchLocalName", 3, "ngModelChange", "ngModel", "placeholder"], ["nz-input", "", "name", "riSearchRewardType", 3, "ngModelChange", "ngModel", "placeholder"], [1, "col-md-3", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], [1, "col-12", "d-flex", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzType", "default", "type", "button", 1, "ri-btn-export", 3, "click"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "100px", 1, "text-center"], ["nzWidth", "150px"], ["nzWidth", "160px"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "180px"], ["nzWidth", "90px", 1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["nzWidth", "800px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "10", 1, "text-center", "text-muted"], [1, "text-center"], ["nz-button", "", "nzType", "text", "nzSize", "small", 3, "click", "title"], [1, "bx", "bx-edit", "text-warning"], [1, "bx", "bx-trash", "text-danger"], [1, "row", "g-3"], [1, "col-md-12"], [1, "form-label", "fw-semibold"], [1, "text-danger"], ["nz-input", "", 3, "ngModelChange", "ngModel", "nzAutocomplete", "placeholder"], [3, "nzValue", "click", 4, "ngFor", "ngForOf"], [1, "col-md-6"], ["nz-input", "", 3, "ngModelChange", "ngModel"], ["nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], [1, "form-label", "fw-semibold", "d-block"], [1, "w-100", 3, "ngModelChange", "ngModel"], ["nzValue", "N", 3, "nzLabel"], ["nzValue", "Y", 3, "nzLabel"], ["nz-input", "", "rows", "2", 3, "ngModelChange", "ngModel"], [3, "click", "nzValue"], [1, "text-muted"], [1, "mb-1"], [1, "fw-bold", "mb-0"]], template: function RecognitionInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "nz-card", 5)(3, "form", 6);
      \u0275\u0275listener("ngSubmit", function RecognitionInfoComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 7)(5, "label", 8);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 9);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function RecognitionInfoComponent_Template_input_ngModelChange_8_listener($event) {
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
      \u0275\u0275twoWayListener("ngModelChange", function RecognitionInfoComponent_Template_input_ngModelChange_14_listener($event) {
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
      \u0275\u0275twoWayListener("ngModelChange", function RecognitionInfoComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchRewardType, $event) || (ctx.searchRewardType = $event);
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
      \u0275\u0275listener("click", function RecognitionInfoComponent_Template_button_click_27_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(28, "i", 16);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 17)(32, "button", 18);
      \u0275\u0275listener("click", function RecognitionInfoComponent_Template_button_click_32_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(33, "i", 19);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "button", 20);
      \u0275\u0275listener("click", function RecognitionInfoComponent_Template_button_click_36_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(37, "i", 21);
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(40, "nz-card");
      \u0275\u0275template(41, RecognitionInfoComponent_nz_alert_41_Template, 1, 1, "nz-alert", 22);
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
      \u0275\u0275elementStart(55, "th", 27);
      \u0275\u0275text(56);
      \u0275\u0275pipe(57, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "th", 26);
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "th", 28);
      \u0275\u0275text(62);
      \u0275\u0275pipe(63, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "th", 27);
      \u0275\u0275text(65);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "th", 27);
      \u0275\u0275text(68);
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "th", 29);
      \u0275\u0275text(71);
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "th", 30);
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(76, "tbody");
      \u0275\u0275template(77, RecognitionInfoComponent_tr_77_Template, 4, 4, "tr", 31)(78, RecognitionInfoComponent_tr_78_Template, 26, 24, "tr", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275template(79, RecognitionInfoComponent_ng_template_79_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(81, "nz-modal", 33);
      \u0275\u0275pipe(82, "translate");
      \u0275\u0275pipe(83, "translate");
      \u0275\u0275listener("nzOnCancel", function RecognitionInfoComponent_Template_nz_modal_nzOnCancel_81_listener() {
        return ctx.closeModal();
      })("nzOnOk", function RecognitionInfoComponent_Template_nz_modal_nzOnOk_81_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(84, RecognitionInfoComponent_ng_container_84_Template, 76, 82, "ng-container", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "nz-modal", 35);
      \u0275\u0275pipe(86, "translate");
      \u0275\u0275pipe(87, "translate");
      \u0275\u0275pipe(88, "translate");
      \u0275\u0275listener("nzOnCancel", function RecognitionInfoComponent_Template_nz_modal_nzOnCancel_85_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function RecognitionInfoComponent_Template_nz_modal_nzOnOk_85_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(89, RecognitionInfoComponent_ng_container_89_Template, 6, 5, "ng-container", 34);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const riTable_r11 = \u0275\u0275reference(43);
      const riTotalTpl_r12 = \u0275\u0275reference(80);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 43, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchEmpId);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 46, "common.placeholder.enterEmpId", "Nh\u1EADp m\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 49, "common.empName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchLocalName);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(15, 52, "common.placeholder.enterEmpName", "Nh\u1EADp h\u1ECD t\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 55, "hrm.empinfo.reward.searchType", "Lo\u1EA1i h\xECnh khen th\u01B0\u1EDFng"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchRewardType);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(21, 58, "hrm.empinfo.reward.searchType", "Nh\u1EADp lo\u1EA1i h\xECnh"));
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 61, "essDept.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(30, 64, "essDept.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(35, 67, "common.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(39, 70, "essDept.exportExcel", "Xu\u1EA5t excel"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", riTotalTpl_r12)("nzScroll", \u0275\u0275pureFunction0(118, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 73, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 76, "common.empId", "M\xE3 NV"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 79, "common.empName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 82, "common.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(60, 85, "hrm.empinfo.reward.rewardType", "Lo\u1EA1i h\xECnh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(63, 88, "hrm.empinfo.reward.colDate", "Ng\xE0y KT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(66, 91, "hrm.empinfo.reward.colCnpy", "C\u01A1 quan KT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 94, "hrm.empinfo.reward.colReward", "Ph\u1EA7n th\u01B0\u1EDFng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(72, 97, "hrm.empinfo.reward.remarks", "Ghi ch\xFA"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(75, 100, "common.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", riTable_r11.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", ctx.modalTitle())("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(82, 103, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(83, 106, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(4);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(86, 109, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(87, 112, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(88, 115, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzDatePickerModule, NzDatePickerComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, NzAutocompleteModule, NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, TranslatePipe], styles: ["\n.ri-btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=recognition-info.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecognitionInfoComponent, [{
    type: Component,
    args: [{ selector: "app-recognition-info", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzSelectModule,
      NzDatePickerModule,
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
          <input nz-input [(ngModel)]="searchEmpId" name="riSearchEmpId"
                 [placeholder]="'common.placeholder.enterEmpId' | translate:'Nh\u1EADp m\xE3 nh\xE2n vi\xEAn'">
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</label>
          <input nz-input [(ngModel)]="searchLocalName" name="riSearchLocalName"
                 [placeholder]="'common.placeholder.enterEmpName' | translate:'Nh\u1EADp h\u1ECD t\xEAn'">
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'hrm.empinfo.reward.searchType' | translate:'Lo\u1EA1i h\xECnh khen th\u01B0\u1EDFng' }}</label>
          <input nz-input [(ngModel)]="searchRewardType" name="riSearchRewardType"
                 [placeholder]="'hrm.empinfo.reward.searchType' | translate:'Nh\u1EADp lo\u1EA1i h\xECnh'">
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
          <button nz-button nzType="default" type="button" class="ri-btn-export" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'essDept.exportExcel' | translate:'Xu\u1EA5t excel' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <!-- nzWidth khai b\xE1o cho t\u1EEBng c\u1ED9t \u0111\u1EC3 \u0111\u1ED3ng b\u1ED9 \u0111\u1ED9 r\u1ED9ng header/body khi d\xF9ng nzScroll. -->
      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="riTotalTpl"
                [nzScroll]="{ x: '1300px', y: 'calc(100vh - 420px)' }" #riTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'common.empId' | translate:'M\xE3 NV' }}</th>
            <th nzWidth="150px">{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
            <th nzWidth="160px">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
            <th nzWidth="150px">{{ 'hrm.empinfo.reward.rewardType' | translate:'Lo\u1EA1i h\xECnh' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'hrm.empinfo.reward.colDate' | translate:'Ng\xE0y KT' }}</th>
            <th nzWidth="160px">{{ 'hrm.empinfo.reward.colCnpy' | translate:'C\u01A1 quan KT' }}</th>
            <th nzWidth="160px">{{ 'hrm.empinfo.reward.colReward' | translate:'Ph\u1EA7n th\u01B0\u1EDFng' }}</th>
            <th nzWidth="180px">{{ 'hrm.empinfo.reward.remarks' | translate:'Ghi ch\xFA' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'common.action' | translate:'Thao t\xE1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="10" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of riTable.data; let i = index">
            <td class="text-center">{{ i + 1 }}</td>
            <td class="text-center" [attr.title]="row.empId || null">{{ row.empId }}</td>
            <td [attr.title]="row.localName || null">{{ row.localName }}</td>
            <td [attr.title]="row.deptName || null">{{ row.deptName }}</td>
            <td [attr.title]="row.rewardType || null">{{ row.rewardType }}</td>
            <td class="text-center">{{ row.rewardDate }}</td>
            <td [attr.title]="row.rewardCnpy || null">{{ row.rewardCnpy }}</td>
            <td [attr.title]="row.reward || null">{{ row.reward }}</td>
            <td [attr.title]="row.remarks || null">{{ row.remarks }}</td>
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
        <ng-template #riTotalTpl let-total>
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
      <div class="col-md-12">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.reward.employee' | translate:'Nh\xE2n vi\xEAn' }} <span class="text-danger">*</span></label>
        <input nz-input [ngModel]="empKeyword" (ngModelChange)="onEmpKeywordChange($event)"
               [nzAutocomplete]="riEmpAuto" [placeholder]="'hrm.empinfo.workexp.selectEmp' | translate:'Ch\u1ECDn nh\xE2n vi\xEAn...'">
        <nz-autocomplete #riEmpAuto>
          <nz-auto-option *ngFor="let opt of empOptions()" [nzValue]="opt" (click)="onEmpSelected(opt)">
            {{ opt.empId }} - {{ opt.localName }} <small class="text-muted">({{ opt.deptName }})</small>
          </nz-auto-option>
        </nz-autocomplete>
      </div>

      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.reward.rewardType' | translate:'Lo\u1EA1i h\xECnh khen th\u01B0\u1EDFng' }}</label>
        <input nz-input [(ngModel)]="form.rewardType">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.reward.rewardDate' | translate:'Ng\xE0y khen th\u01B0\u1EDFng' }}</label>
        <nz-date-picker class="w-100" [(ngModel)]="form.rewardDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
      </div>

      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.reward.rewardCnpy' | translate:'C\u01A1 quan khen th\u01B0\u1EDFng' }}</label>
        <input nz-input [(ngModel)]="form.rewardCnpy">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.reward.reward' | translate:'Ph\u1EA7n th\u01B0\u1EDFng/Hi\u1EC7n v\u1EADt' }}</label>
        <input nz-input [(ngModel)]="form.reward">
      </div>

      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.reward.rewardTypeCode' | translate:'M\xE3 lo\u1EA1i th\u01B0\u1EDFng' }}</label>
        <input nz-input [(ngModel)]="form.rewardTypeCode">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.reward.rewardPayDate' | translate:'Ng\xE0y chi tr\u1EA3' }}</label>
        <nz-date-picker class="w-100" [(ngModel)]="form.rewardPayDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
      </div>

      <div class="col-md-6">
        <label class="form-label fw-semibold d-block">{{ 'hrm.empinfo.reward.personnelCardInquiry' | translate:'Hi\u1EC3n th\u1ECB th\u1EBB nh\xE2n s\u1EF1' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.personnelCardInquiry">
          <nz-option nzValue="N" [nzLabel]="'common.no' | translate:'Kh\xF4ng'"></nz-option>
          <nz-option nzValue="Y" [nzLabel]="'common.yes' | translate:'C\xF3'"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold d-block">{{ 'hrm.empinfo.reward.payAppearIsnot' | translate:'Ph\u1EA3n \xE1nh l\u01B0\u01A1ng' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.payAppearIsnot">
          <nz-option nzValue="N" [nzLabel]="'common.no' | translate:'Kh\xF4ng'"></nz-option>
          <nz-option nzValue="Y" [nzLabel]="'common.yes' | translate:'C\xF3'"></nz-option>
        </nz-select>
      </div>

      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.reward.lineId' | translate:'LINE ID' }}</label>
        <input nz-input [(ngModel)]="form.lineId">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.reward.otherType' | translate:'Lo\u1EA1i kh\xE1c' }}</label>
        <input nz-input [(ngModel)]="form.otherType">
      </div>

      <div class="col-12">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.reward.remarks' | translate:'Ghi ch\xFA' }}</label>
        <textarea nz-input [(ngModel)]="form.remarks" rows="2"></textarea>
      </div>
    </div>
  </ng-container>
</nz-modal>

<!-- Modal x\xE1c nh\u1EADn x\xF3a -->
<nz-modal [nzVisible]="deleteVisible()" [nzTitle]="'common.confirm' | translate:'X\xE1c nh\u1EADn'"
          (nzOnCancel)="closeDeleteConfirm()" (nzOnOk)="confirmDelete()" [nzOkLoading]="deleting()"
          [nzOkText]="'common.confirm' | translate:'X\xE1c nh\u1EADn'" [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'">
  <ng-container *nzModalContent>
    <p class="mb-1">{{ 'hrm.empinfo.reward.confirmDelete' | translate:'B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a b\u1EA3n ghi n\xE0y?' }}</p>
    <p class="fw-bold mb-0">{{ deleteTargetName }}</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/recognition-info/recognition-info.component.css */\n.ri-btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=recognition-info.component.css.map */\n"] }]
  }], () => [{ type: RecognitionInfoService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecognitionInfoComponent, { className: "RecognitionInfoComponent", filePath: "src/app/recognition-info/recognition-info.component.ts", lineNumber: 99 });
})();
export {
  RecognitionInfoComponent
};
//# debugId=efa5fcd9-6151-5df5-9ace-bf885daa0e1b
//# sourceMappingURL=chunk-LFJDG64M.js.map
