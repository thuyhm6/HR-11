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
import "./chunk-VWYGF7JF.js";
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

// src/app/work-experience-info/work-experience-info.service.ts
var API_BASE = "/hrm/empinfo/api/work-experience";
var WorkExperienceInfoService = class _WorkExperienceInfoService {
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
    if (params.companyName)
      httpParams = httpParams.set("companyName", params.companyName);
    return this.http.get(API_BASE, { params: httpParams, withCredentials: true });
  }
  save(payload) {
    return this.http.post(`${API_BASE}/save`, payload, { withCredentials: true });
  }
  delete(workExpNo) {
    return this.http.delete(`${API_BASE}/delete/${workExpNo}`, { withCredentials: true });
  }
  searchEmployees(keyword) {
    let params = new HttpParams();
    if (keyword)
      params = params.set("keyword", keyword);
    return this.http.get("/hrm/empinfo/api/employee/search", { params, withCredentials: true });
  }
  static \u0275fac = function WorkExperienceInfoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkExperienceInfoService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WorkExperienceInfoService, factory: _WorkExperienceInfoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkExperienceInfoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/work-experience-info/work-experience-info.component.ts
var _c0 = () => ({ x: "1520px", y: "calc(100vh - 420px)" });
function WorkExperienceInfoComponent_nz_alert_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 38);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function WorkExperienceInfoComponent_tr_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 39);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function WorkExperienceInfoComponent_tr_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 40);
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
    \u0275\u0275elementStart(13, "td", 40);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 40);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 40);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 40)(26, "button", 41);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275listener("click", function WorkExperienceInfoComponent_tr_87_Template_button_click_26_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditModal(row_r4));
    });
    \u0275\u0275element(28, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 41);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275listener("click", function WorkExperienceInfoComponent_tr_87_Template_button_click_29_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDeleteConfirm(row_r4));
    });
    \u0275\u0275element(31, "i", 43);
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
    \u0275\u0275attribute("title", row_r4.cpnyName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.cpnyName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.deptName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.deptName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.position || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.position);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.startDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.endDate);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.duty || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.duty);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.resignReason || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.resignReason);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.payYear);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.remark || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.remark);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(27, 22, "common.edit", "S\u1EEDa"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(30, 25, "common.delete", "X\xF3a"));
  }
}
function WorkExperienceInfoComponent_ng_template_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r6 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r6, " ");
  }
}
function WorkExperienceInfoComponent_ng_container_93_ng_container_8_nz_auto_option_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-auto-option", 54);
    \u0275\u0275listener("click", function WorkExperienceInfoComponent_ng_container_93_ng_container_8_nz_auto_option_5_Template_nz_auto_option_click_0_listener() {
      const opt_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onEmpSelected(opt_r10));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "small", 55);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r10 = ctx.$implicit;
    \u0275\u0275property("nzValue", opt_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", opt_r10.empId, " - ", opt_r10.localName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", opt_r10.deptName, ")");
  }
}
function WorkExperienceInfoComponent_ng_container_93_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "input", 52);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function WorkExperienceInfoComponent_ng_container_93_ng_container_8_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onEmpKeywordChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(3, "nz-autocomplete", null, 3);
    \u0275\u0275template(5, WorkExperienceInfoComponent_ng_container_93_ng_container_8_nz_auto_option_5_Template, 4, 4, "nz-auto-option", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const weiEmpAuto_r11 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.empKeyword)("nzAutocomplete", weiEmpAuto_r11)("placeholder", \u0275\u0275pipeBind2(2, 4, "hrm.empinfo.workexp.selectEmp", "Ch\u1ECDn nh\xE2n vi\xEAn..."));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.empOptions());
  }
}
function WorkExperienceInfoComponent_ng_container_93_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "input", 56);
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r1.employeeDisplay);
    \u0275\u0275control();
  }
}
function WorkExperienceInfoComponent_ng_container_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 44)(2, "div", 45)(3, "label", 46);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span", 47);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, WorkExperienceInfoComponent_ng_container_93_ng_container_8_Template, 6, 7, "ng-container", 48)(9, WorkExperienceInfoComponent_ng_container_93_ng_template_9_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 45)(12, "label", 46);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementStart(15, "span", 47);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function WorkExperienceInfoComponent_ng_container_93_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.cpnyName, $event) || (ctx_r1.form.cpnyName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 45)(19, "label", 46);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function WorkExperienceInfoComponent_ng_container_93_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.deptName, $event) || (ctx_r1.form.deptName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 45)(24, "label", 46);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function WorkExperienceInfoComponent_ng_container_93_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.position, $event) || (ctx_r1.form.position = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 45)(29, "label", 46);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function WorkExperienceInfoComponent_ng_container_93_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.startDate, $event) || (ctx_r1.form.startDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 45)(34, "label", 46);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function WorkExperienceInfoComponent_ng_container_93_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.endDate, $event) || (ctx_r1.form.endDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 5)(39, "label", 46);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "textarea", 51);
    \u0275\u0275twoWayListener("ngModelChange", function WorkExperienceInfoComponent_ng_container_93_Template_textarea_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.duty, $event) || (ctx_r1.form.duty = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 45)(44, "label", 46);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function WorkExperienceInfoComponent_ng_container_93_Template_input_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.payYear, $event) || (ctx_r1.form.payYear = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 45)(49, "label", 46);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function WorkExperienceInfoComponent_ng_container_93_Template_input_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.resignReason, $event) || (ctx_r1.form.resignReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 5)(54, "label", 46);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "textarea", 51);
    \u0275\u0275twoWayListener("ngModelChange", function WorkExperienceInfoComponent_ng_container_93_Template_textarea_ngModelChange_57_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.remark, $event) || (ctx_r1.form.remark = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const weiEmpReadonly_r12 = \u0275\u0275reference(10);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 21, "hrm.empinfo.workexp.employee", "Nh\xE2n vi\xEAn"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.isNew())("ngIfElse", weiEmpReadonly_r12);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(14, 24, "hrm.empinfo.workexp.companyName", "T\xEAn c\xF4ng ty"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.cpnyName);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 27, "hrm.empinfo.workexp.deptName", "B\u1ED9 ph\u1EADn"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.deptName);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 30, "hrm.empinfo.workexp.position", "V\u1ECB tr\xED"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.position);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 33, "hrm.empinfo.workexp.startDate", "T\u1EEB ng\xE0y"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.startDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 36, "hrm.empinfo.workexp.endDate", "\u0110\u1EBFn ng\xE0y"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.endDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 39, "hrm.empinfo.workexp.duty", "Nhi\u1EC7m v\u1EE5"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.duty);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 42, "hrm.empinfo.workexp.payYear", "M\u1EE9c l\u01B0\u01A1ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.payYear);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 45, "hrm.empinfo.workexp.resignReason", "L\xFD do ngh\u1EC9"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.resignReason);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(56, 48, "hrm.empinfo.workexp.remark", "Ghi ch\xFA"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.remark);
    \u0275\u0275control();
  }
}
function WorkExperienceInfoComponent_ng_container_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 57);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 58);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "hrm.empinfo.workexp.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a b\u1EA3n ghi n\xE0y?"));
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
  "hrm.empinfo.workexp.addTitle",
  "hrm.empinfo.workexp.editTitle",
  "hrm.empinfo.workexp.employee",
  "hrm.empinfo.workexp.companyName",
  "hrm.empinfo.workexp.deptName",
  "hrm.empinfo.workexp.position",
  "hrm.empinfo.workexp.startDate",
  "hrm.empinfo.workexp.endDate",
  "hrm.empinfo.workexp.duty",
  "hrm.empinfo.workexp.payYear",
  "hrm.empinfo.workexp.resignReason",
  "hrm.empinfo.workexp.remark",
  "hrm.empinfo.workexp.searchCompany",
  "hrm.empinfo.workexp.selectEmp",
  "hrm.empinfo.workexp.pleaseSelectAndCompany",
  "hrm.empinfo.workexp.confirmDelete",
  "hrm.empinfo.workexp.colCompany",
  "hrm.empinfo.workexp.colDept",
  "hrm.empinfo.workexp.colPosition",
  "hrm.empinfo.workexp.colFrom",
  "hrm.empinfo.workexp.colTo",
  "hrm.empinfo.workexp.colDuty",
  "hrm.empinfo.workexp.colResignReason",
  "hrm.empinfo.workexp.colSalary",
  "hrm.empinfo.workexp.colRemark"
];
var PAGE_SIZE_OPTIONS = [25, 50, 100, 200];
var EMPTY_FORM = {
  workExpNo: null,
  personId: "",
  empId: "",
  localName: "",
  cpnyName: "",
  deptName: "",
  position: "",
  startDate: "",
  endDate: "",
  duty: "",
  payYear: "",
  resignReason: "",
  remark: ""
};
var WorkExperienceInfoComponent = class _WorkExperienceInfoComponent {
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
  searchCompanyName = "";
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
    () => this.isNew() ? this.i18n.t("hrm.empinfo.workexp.addTitle", "Th\xEAm m\u1EDBi Kinh nghi\u1EC7m l\xE0m vi\u1EC7c") : this.i18n.t("hrm.empinfo.workexp.editTitle", "C\u1EADp nh\u1EADt Kinh nghi\u1EC7m l\xE0m vi\u1EC7c"),
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
    this.api.search({ empId: this.searchEmpId, localName: this.searchLocalName, companyName: this.searchCompanyName }).subscribe({
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
    this.searchCompanyName = "";
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
      workExpNo: row.workExpNo,
      personId: row.personId,
      empId: row.empId || "",
      localName: row.localName || "",
      cpnyName: row.cpnyName || "",
      deptName: row.deptName || "",
      position: row.position || "",
      startDate: row.startDate || "",
      endDate: row.endDate || "",
      duty: row.duty || "",
      payYear: row.payYear || "",
      resignReason: row.resignReason || "",
      remark: row.remark || ""
    };
    this.modalVisible.set(true);
  }
  closeModal() {
    this.modalVisible.set(false);
  }
  get employeeDisplay() {
    return this.form.empId || this.form.localName ? `${this.form.empId} - ${this.form.localName}` : "";
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
    if (!this.form.personId || !this.form.cpnyName) {
      this.message.warning(this.i18n.t("hrm.empinfo.workexp.pleaseSelectAndCompany", "Vui l\xF2ng ch\u1ECDn Nh\xE2n vi\xEAn v\xE0 nh\u1EADp T\xEAn c\xF4ng ty"));
      return;
    }
    const payload = {
      workExpNo: this.form.workExpNo,
      personId: this.form.personId,
      cpnyName: this.form.cpnyName,
      deptName: this.form.deptName,
      position: this.form.position,
      startDate: this.form.startDate,
      endDate: this.form.endDate,
      duty: this.form.duty,
      payYear: this.form.payYear,
      resignReason: this.form.resignReason,
      remark: this.form.remark
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
    return this.deleteTarget ? `${this.deleteTarget.empId} - ${this.deleteTarget.localName} (${this.deleteTarget.cpnyName})` : "";
  }
  confirmDelete() {
    if (!this.deleteTarget?.workExpNo)
      return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.workExpNo).subscribe({
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
      this.i18n.t("common.empId", "M\xE3 nh\xE2n vi\xEAn"),
      this.i18n.t("common.empName", "H\u1ECD t\xEAn"),
      this.i18n.t("hrm.empinfo.workexp.colCompany", "C\xF4ng ty"),
      this.i18n.t("hrm.empinfo.workexp.colDept", "B\u1ED9 ph\u1EADn"),
      this.i18n.t("hrm.empinfo.workexp.colPosition", "V\u1ECB tr\xED"),
      this.i18n.t("hrm.empinfo.workexp.colFrom", "T\u1EEB ng\xE0y"),
      this.i18n.t("hrm.empinfo.workexp.colTo", "\u0110\u1EBFn ng\xE0y"),
      this.i18n.t("hrm.empinfo.workexp.colDuty", "Nhi\u1EC7m v\u1EE5"),
      this.i18n.t("hrm.empinfo.workexp.colResignReason", "L\xFD do ngh\u1EC9"),
      this.i18n.t("hrm.empinfo.workexp.colSalary", "M\u1EE9c l\u01B0\u01A1ng"),
      this.i18n.t("hrm.empinfo.workexp.colRemark", "Ghi ch\xFA")
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      r.empId,
      r.localName,
      r.cpnyName,
      r.deptName,
      r.position,
      r.startDate,
      r.endDate,
      r.duty,
      r.resignReason,
      r.payYear,
      r.remark
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "DanhSach");
    writeFileSync(workbook, "work_experience_info_list.xlsx");
  }
  static \u0275fac = function WorkExperienceInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkExperienceInfoComponent)(\u0275\u0275directiveInject(WorkExperienceInfoService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkExperienceInfoComponent, selectors: [["app-work-experience-info"]], decls: 99, vars: 131, consts: [["weiTable", ""], ["weiTotalTpl", ""], ["weiEmpReadonly", ""], ["weiEmpAuto", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["nz-input", "", "name", "weiSearchEmpId", 3, "ngModelChange", "ngModel", "placeholder"], ["nz-input", "", "name", "weiSearchLocalName", 3, "ngModelChange", "ngModel", "placeholder"], ["nz-input", "", "name", "weiSearchCompanyName", 3, "ngModelChange", "ngModel", "placeholder"], [1, "col-md-3", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], [1, "col-12", "d-flex", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzType", "default", "type", "button", 1, "wei-btn-export", 3, "click"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "100px", 1, "text-center"], ["nzWidth", "150px"], ["nzWidth", "160px"], ["nzWidth", "140px"], ["nzWidth", "120px"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "90px", 1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["nzWidth", "700px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "13", 1, "text-center", "text-muted"], [1, "text-center"], ["nz-button", "", "nzType", "text", "nzSize", "small", 3, "click", "title"], [1, "bx", "bx-edit", "text-warning"], [1, "bx", "bx-trash", "text-danger"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label", "fw-semibold"], [1, "text-danger"], [4, "ngIf", "ngIfElse"], ["nz-input", "", 3, "ngModelChange", "ngModel"], ["nz-input", "", "placeholder", "YYYYMMDD", 3, "ngModelChange", "ngModel"], ["nz-input", "", "rows", "2", 3, "ngModelChange", "ngModel"], ["nz-input", "", 3, "ngModelChange", "ngModel", "nzAutocomplete", "placeholder"], [3, "nzValue", "click", 4, "ngFor", "ngForOf"], [3, "click", "nzValue"], [1, "text-muted"], ["nz-input", "", "readonly", "", 3, "ngModel"], [1, "mb-1"], [1, "fw-bold", "mb-0"]], template: function WorkExperienceInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "nz-card", 6)(3, "form", 7);
      \u0275\u0275listener("ngSubmit", function WorkExperienceInfoComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 8)(5, "label", 9);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 10);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function WorkExperienceInfoComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchEmpId, $event) || (ctx.searchEmpId = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 8)(11, "label", 9);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "input", 11);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function WorkExperienceInfoComponent_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchLocalName, $event) || (ctx.searchLocalName = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 8)(17, "label", 9);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "input", 12);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function WorkExperienceInfoComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchCompanyName, $event) || (ctx.searchCompanyName = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 13)(23, "button", 14);
      \u0275\u0275element(24, "i", 15);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "button", 16);
      \u0275\u0275listener("click", function WorkExperienceInfoComponent_Template_button_click_27_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(28, "i", 17);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 18)(32, "button", 19);
      \u0275\u0275listener("click", function WorkExperienceInfoComponent_Template_button_click_32_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(33, "i", 20);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "button", 21);
      \u0275\u0275listener("click", function WorkExperienceInfoComponent_Template_button_click_36_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(37, "i", 22);
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(40, "nz-card");
      \u0275\u0275template(41, WorkExperienceInfoComponent_nz_alert_41_Template, 1, 1, "nz-alert", 23);
      \u0275\u0275elementStart(42, "nz-table", 24, 0)(44, "thead")(45, "tr")(46, "th", 25);
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
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "th", 28);
      \u0275\u0275text(56);
      \u0275\u0275pipe(57, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "th", 29);
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "th", 30);
      \u0275\u0275text(62);
      \u0275\u0275pipe(63, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "th", 26);
      \u0275\u0275text(65);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "th", 26);
      \u0275\u0275text(68);
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "th", 28);
      \u0275\u0275text(71);
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "th", 29);
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "th", 31);
      \u0275\u0275text(77);
      \u0275\u0275pipe(78, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "th", 28);
      \u0275\u0275text(80);
      \u0275\u0275pipe(81, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "th", 32);
      \u0275\u0275text(83);
      \u0275\u0275pipe(84, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(85, "tbody");
      \u0275\u0275template(86, WorkExperienceInfoComponent_tr_86_Template, 4, 4, "tr", 33)(87, WorkExperienceInfoComponent_tr_87_Template, 32, 28, "tr", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275template(88, WorkExperienceInfoComponent_ng_template_88_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(90, "nz-modal", 35);
      \u0275\u0275pipe(91, "translate");
      \u0275\u0275pipe(92, "translate");
      \u0275\u0275listener("nzOnCancel", function WorkExperienceInfoComponent_Template_nz_modal_nzOnCancel_90_listener() {
        return ctx.closeModal();
      })("nzOnOk", function WorkExperienceInfoComponent_Template_nz_modal_nzOnOk_90_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(93, WorkExperienceInfoComponent_ng_container_93_Template, 58, 51, "ng-container", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "nz-modal", 37);
      \u0275\u0275pipe(95, "translate");
      \u0275\u0275pipe(96, "translate");
      \u0275\u0275pipe(97, "translate");
      \u0275\u0275listener("nzOnCancel", function WorkExperienceInfoComponent_Template_nz_modal_nzOnCancel_94_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function WorkExperienceInfoComponent_Template_nz_modal_nzOnOk_94_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(98, WorkExperienceInfoComponent_ng_container_98_Template, 6, 5, "ng-container", 36);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const weiTable_r13 = \u0275\u0275reference(43);
      const weiTotalTpl_r14 = \u0275\u0275reference(89);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 46, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchEmpId);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 49, "common.placeholder.enterEmpId", "Nh\u1EADp m\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 52, "common.empName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchLocalName);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(15, 55, "common.placeholder.enterEmpName", "Nh\u1EADp h\u1ECD t\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 58, "hrm.empinfo.workexp.searchCompany", "T\xEAn c\xF4ng ty"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchCompanyName);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(21, 61, "hrm.empinfo.workexp.searchCompany", "T\xEAn c\xF4ng ty"));
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 64, "essDept.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(30, 67, "essDept.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(35, 70, "common.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(39, 73, "essDept.exportExcel", "Xu\u1EA5t excel"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", weiTotalTpl_r14)("nzScroll", \u0275\u0275pureFunction0(130, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 76, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 79, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 82, "common.empName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 85, "hrm.empinfo.workexp.colCompany", "C\xF4ng ty"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(60, 88, "hrm.empinfo.workexp.colDept", "B\u1ED9 ph\u1EADn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(63, 91, "hrm.empinfo.workexp.colPosition", "V\u1ECB tr\xED"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(66, 94, "hrm.empinfo.workexp.colFrom", "T\u1EEB ng\xE0y"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 97, "hrm.empinfo.workexp.colTo", "\u0110\u1EBFn ng\xE0y"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(72, 100, "hrm.empinfo.workexp.colDuty", "Nhi\u1EC7m v\u1EE5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(75, 103, "hrm.empinfo.workexp.colResignReason", "L\xFD do ngh\u1EC9"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(78, 106, "hrm.empinfo.workexp.colSalary", "M\u1EE9c l\u01B0\u01A1ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(81, 109, "hrm.empinfo.workexp.colRemark", "Ghi ch\xFA"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(84, 112, "common.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", weiTable_r13.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", ctx.modalTitle())("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(91, 115, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(92, 118, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(4);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(95, 121, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(96, 124, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(97, 127, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, NzAutocompleteModule, NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, TranslatePipe], styles: ["\n.wei-btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=work-experience-info.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkExperienceInfoComponent, [{
    type: Component,
    args: [{ selector: "app-work-experience-info", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
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
          <input nz-input [(ngModel)]="searchEmpId" name="weiSearchEmpId"
                 [placeholder]="'common.placeholder.enterEmpId' | translate:'Nh\u1EADp m\xE3 nh\xE2n vi\xEAn'">
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</label>
          <input nz-input [(ngModel)]="searchLocalName" name="weiSearchLocalName"
                 [placeholder]="'common.placeholder.enterEmpName' | translate:'Nh\u1EADp h\u1ECD t\xEAn'">
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'hrm.empinfo.workexp.searchCompany' | translate:'T\xEAn c\xF4ng ty' }}</label>
          <input nz-input [(ngModel)]="searchCompanyName" name="weiSearchCompanyName"
                 [placeholder]="'hrm.empinfo.workexp.searchCompany' | translate:'T\xEAn c\xF4ng ty'">
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
          <button nz-button nzType="default" type="button" class="wei-btn-export" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'essDept.exportExcel' | translate:'Xu\u1EA5t excel' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <!-- nzWidth khai b\xE1o cho t\u1EEBng c\u1ED9t \u0111\u1EC3 \u0111\u1ED3ng b\u1ED9 \u0111\u1ED9 r\u1ED9ng header/body khi d\xF9ng nzScroll. -->
      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="weiTotalTpl"
                [nzScroll]="{ x: '1520px', y: 'calc(100vh - 420px)' }" #weiTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
            <th nzWidth="150px">{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
            <th nzWidth="160px">{{ 'hrm.empinfo.workexp.colCompany' | translate:'C\xF4ng ty' }}</th>
            <th nzWidth="140px">{{ 'hrm.empinfo.workexp.colDept' | translate:'B\u1ED9 ph\u1EADn' }}</th>
            <th nzWidth="120px">{{ 'hrm.empinfo.workexp.colPosition' | translate:'V\u1ECB tr\xED' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'hrm.empinfo.workexp.colFrom' | translate:'T\u1EEB ng\xE0y' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'hrm.empinfo.workexp.colTo' | translate:'\u0110\u1EBFn ng\xE0y' }}</th>
            <th nzWidth="160px">{{ 'hrm.empinfo.workexp.colDuty' | translate:'Nhi\u1EC7m v\u1EE5' }}</th>
            <th nzWidth="140px">{{ 'hrm.empinfo.workexp.colResignReason' | translate:'L\xFD do ngh\u1EC9' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'hrm.empinfo.workexp.colSalary' | translate:'M\u1EE9c l\u01B0\u01A1ng' }}</th>
            <th nzWidth="160px">{{ 'hrm.empinfo.workexp.colRemark' | translate:'Ghi ch\xFA' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'common.action' | translate:'Thao t\xE1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="13" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of weiTable.data; let i = index">
            <td class="text-center">{{ i + 1 }}</td>
            <td class="text-center" [attr.title]="row.empId || null">{{ row.empId }}</td>
            <td [attr.title]="row.localName || null">{{ row.localName }}</td>
            <td [attr.title]="row.cpnyName || null">{{ row.cpnyName }}</td>
            <td [attr.title]="row.deptName || null">{{ row.deptName }}</td>
            <td [attr.title]="row.position || null">{{ row.position }}</td>
            <td class="text-center">{{ row.startDate }}</td>
            <td class="text-center">{{ row.endDate }}</td>
            <td [attr.title]="row.duty || null">{{ row.duty }}</td>
            <td [attr.title]="row.resignReason || null">{{ row.resignReason }}</td>
            <td class="text-center">{{ row.payYear }}</td>
            <td [attr.title]="row.remark || null">{{ row.remark }}</td>
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
        <ng-template #weiTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal Th\xEAm m\u1EDBi / C\u1EADp nh\u1EADt -->
<nz-modal [nzVisible]="modalVisible()" [nzTitle]="modalTitle()" nzWidth="700px"
          (nzOnCancel)="closeModal()" (nzOnOk)="saveForm()" [nzOkLoading]="saving()"
          [nzOkText]="'common.save' | translate:'L\u01B0u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <div class="row g-3">
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.workexp.employee' | translate:'Nh\xE2n vi\xEAn' }} <span class="text-danger">*</span></label>
        <!-- Ch\u1EC9 cho \u0111\u1ED5i nh\xE2n vi\xEAn khi th\xEAm m\u1EDBi - xem gi\u1EA3i th\xEDch \u1EDF component (mapper update() kh\xF4ng ghi PERSON_ID). -->
        <ng-container *ngIf="isNew(); else weiEmpReadonly">
          <input nz-input [ngModel]="empKeyword" (ngModelChange)="onEmpKeywordChange($event)"
                 [nzAutocomplete]="weiEmpAuto" [placeholder]="'hrm.empinfo.workexp.selectEmp' | translate:'Ch\u1ECDn nh\xE2n vi\xEAn...'">
          <nz-autocomplete #weiEmpAuto>
            <nz-auto-option *ngFor="let opt of empOptions()" [nzValue]="opt" (click)="onEmpSelected(opt)">
              {{ opt.empId }} - {{ opt.localName }} <small class="text-muted">({{ opt.deptName }})</small>
            </nz-auto-option>
          </nz-autocomplete>
        </ng-container>
        <ng-template #weiEmpReadonly>
          <input nz-input [ngModel]="employeeDisplay" readonly>
        </ng-template>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.workexp.companyName' | translate:'T\xEAn c\xF4ng ty' }} <span class="text-danger">*</span></label>
        <input nz-input [(ngModel)]="form.cpnyName">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.workexp.deptName' | translate:'B\u1ED9 ph\u1EADn' }}</label>
        <input nz-input [(ngModel)]="form.deptName">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.workexp.position' | translate:'V\u1ECB tr\xED' }}</label>
        <input nz-input [(ngModel)]="form.position">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.workexp.startDate' | translate:'T\u1EEB ng\xE0y' }}</label>
        <input nz-input [(ngModel)]="form.startDate" placeholder="YYYYMMDD">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.workexp.endDate' | translate:'\u0110\u1EBFn ng\xE0y' }}</label>
        <input nz-input [(ngModel)]="form.endDate" placeholder="YYYYMMDD">
      </div>
      <div class="col-12">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.workexp.duty' | translate:'Nhi\u1EC7m v\u1EE5' }}</label>
        <textarea nz-input [(ngModel)]="form.duty" rows="2"></textarea>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.workexp.payYear' | translate:'M\u1EE9c l\u01B0\u01A1ng' }}</label>
        <input nz-input [(ngModel)]="form.payYear">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.workexp.resignReason' | translate:'L\xFD do ngh\u1EC9' }}</label>
        <input nz-input [(ngModel)]="form.resignReason">
      </div>
      <div class="col-12">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.workexp.remark' | translate:'Ghi ch\xFA' }}</label>
        <textarea nz-input [(ngModel)]="form.remark" rows="2"></textarea>
      </div>
    </div>
  </ng-container>
</nz-modal>

<!-- Modal x\xE1c nh\u1EADn x\xF3a -->
<nz-modal [nzVisible]="deleteVisible()" [nzTitle]="'common.confirm' | translate:'X\xE1c nh\u1EADn'"
          (nzOnCancel)="closeDeleteConfirm()" (nzOnOk)="confirmDelete()" [nzOkLoading]="deleting()"
          [nzOkText]="'common.confirm' | translate:'X\xE1c nh\u1EADn'" [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'">
  <ng-container *nzModalContent>
    <p class="mb-1">{{ 'hrm.empinfo.workexp.confirmDelete' | translate:'B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a b\u1EA3n ghi n\xE0y?' }}</p>
    <p class="fw-bold mb-0">{{ deleteTargetName }}</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/work-experience-info/work-experience-info.component.css */\n.wei-btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=work-experience-info.component.css.map */\n"] }]
  }], () => [{ type: WorkExperienceInfoService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkExperienceInfoComponent, { className: "WorkExperienceInfoComponent", filePath: "src/app/work-experience-info/work-experience-info.component.ts", lineNumber: 91 });
})();
export {
  WorkExperienceInfoComponent
};
//# debugId=aea05e2c-2cbe-5e4d-983f-266aafd21ea6
//# sourceMappingURL=chunk-GS6RLY64.js.map
