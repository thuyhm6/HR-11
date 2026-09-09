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

// src/app/education-info/education-info.service.ts
var API_BASE = "/hrm/empinfo/api/education";
var EducationInfoService = class _EducationInfoService {
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
    if (params.institutionName)
      httpParams = httpParams.set("institutionName", params.institutionName);
    return this.http.get(API_BASE, { params: httpParams, withCredentials: true });
  }
  save(payload) {
    return this.http.post(`${API_BASE}/save`, payload, { withCredentials: true });
  }
  delete(educNo) {
    return this.http.delete(`${API_BASE}/delete/${educNo}`, { withCredentials: true });
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
  static \u0275fac = function EducationInfoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EducationInfoService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EducationInfoService, factory: _EducationInfoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EducationInfoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/education-info/education-info.component.ts
var _c0 = () => ({ x: "1480px", y: "calc(100vh - 420px)" });
function EducationInfoComponent_nz_alert_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 36);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function EducationInfoComponent_tr_83_Template(rf, ctx) {
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
function EducationInfoComponent_tr_84_Template(rf, ctx) {
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
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 38);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 38);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 38)(24, "button", 39);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275listener("click", function EducationInfoComponent_tr_84_Template_button_click_24_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditModal(row_r4));
    });
    \u0275\u0275element(26, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 39);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275listener("click", function EducationInfoComponent_tr_84_Template_button_click_27_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDeleteConfirm(row_r4));
    });
    \u0275\u0275element(29, "i", 41);
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
    \u0275\u0275attribute("title", row_r4.institutionName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.institutionName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.degreeName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.degreeName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.subject || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.subject);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.startDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.endDate);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.schoolLength || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.schoolLength);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.siteCountryName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.siteCountryName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.remark || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.remark);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(25, 21, "common.edit", "S\u1EEDa"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(28, 24, "common.delete", "X\xF3a"));
  }
}
function EducationInfoComponent_ng_template_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r6 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r6, " ");
  }
}
function EducationInfoComponent_ng_container_90_nz_auto_option_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-auto-option", 57);
    \u0275\u0275listener("click", function EducationInfoComponent_ng_container_90_nz_auto_option_12_Template_nz_auto_option_click_0_listener() {
      const opt_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onEmpSelected(opt_r9));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "small", 58);
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
function EducationInfoComponent_ng_container_90_nz_option_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 59);
  }
  if (rf & 2) {
    const c_r10 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r10.codeNo)("nzLabel", c_r10.codeName);
  }
}
function EducationInfoComponent_ng_container_90_nz_option_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 59);
  }
  if (rf & 2) {
    const c_r11 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r11.codeNo)("nzLabel", c_r11.codeName);
  }
}
function EducationInfoComponent_ng_container_90_Template(rf, ctx) {
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
    \u0275\u0275listener("ngModelChange", function EducationInfoComponent_ng_container_90_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEmpKeywordChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(10, "nz-autocomplete", null, 2);
    \u0275\u0275template(12, EducationInfoComponent_ng_container_90_nz_auto_option_12_Template, 4, 4, "nz-auto-option", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 43)(14, "label", 44);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementStart(17, "span", 45);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function EducationInfoComponent_ng_container_90_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.institutionName, $event) || (ctx_r1.form.institutionName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 43)(21, "label", 44);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "nz-select", 49);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EducationInfoComponent_ng_container_90_Template_nz_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.degreeCode, $event) || (ctx_r1.form.degreeCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(26, EducationInfoComponent_ng_container_90_nz_option_26_Template, 1, 2, "nz-option", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 43)(28, "label", 44);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function EducationInfoComponent_ng_container_90_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.subject, $event) || (ctx_r1.form.subject = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 43)(33, "label", 44);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function EducationInfoComponent_ng_container_90_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.startDate, $event) || (ctx_r1.form.startDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 43)(38, "label", 44);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function EducationInfoComponent_ng_container_90_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.endDate, $event) || (ctx_r1.form.endDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 43)(43, "label", 44);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function EducationInfoComponent_ng_container_90_Template_input_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.schoolLength, $event) || (ctx_r1.form.schoolLength = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 43)(48, "label", 44);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "nz-select", 49);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EducationInfoComponent_ng_container_90_Template_nz_select_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.siteCountry, $event) || (ctx_r1.form.siteCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(53, EducationInfoComponent_ng_container_90_nz_option_53_Template, 1, 2, "nz-option", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 43)(55, "label", 44);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function EducationInfoComponent_ng_container_90_Template_input_ngModelChange_58_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.place, $event) || (ctx_r1.form.place = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 43)(60, "label", 44);
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function EducationInfoComponent_ng_container_90_Template_input_ngModelChange_63_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.thesisNameLocal, $event) || (ctx_r1.form.thesisNameLocal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 43)(65, "label", 44);
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function EducationInfoComponent_ng_container_90_Template_input_ngModelChange_68_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.thesisNameEng, $event) || (ctx_r1.form.thesisNameEng = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 43)(70, "label", 44);
    \u0275\u0275text(71);
    \u0275\u0275pipe(72, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function EducationInfoComponent_ng_container_90_Template_input_ngModelChange_73_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.subjectSecond, $event) || (ctx_r1.form.subjectSecond = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 7)(75, "label", 44);
    \u0275\u0275text(76);
    \u0275\u0275pipe(77, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function EducationInfoComponent_ng_container_90_Template_input_ngModelChange_78_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.eduDegNum, $event) || (ctx_r1.form.eduDegNum = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "div", 7)(80, "label", 44);
    \u0275\u0275text(81);
    \u0275\u0275pipe(82, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function EducationInfoComponent_ng_container_90_Template_input_ngModelChange_83_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.degreesCode, $event) || (ctx_r1.form.degreesCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "div", 7)(85, "label", 52);
    \u0275\u0275text(86);
    \u0275\u0275pipe(87, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "nz-select", 53);
    \u0275\u0275twoWayListener("ngModelChange", function EducationInfoComponent_ng_container_90_Template_nz_select_ngModelChange_88_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.studyExperience, $event) || (ctx_r1.form.studyExperience = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(89, "nz-option", 54);
    \u0275\u0275pipe(90, "translate");
    \u0275\u0275element(91, "nz-option", 55);
    \u0275\u0275pipe(92, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "div", 7)(94, "label", 52);
    \u0275\u0275text(95);
    \u0275\u0275pipe(96, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "nz-select", 53);
    \u0275\u0275twoWayListener("ngModelChange", function EducationInfoComponent_ng_container_90_Template_nz_select_ngModelChange_97_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.finalDegreeWhether, $event) || (ctx_r1.form.finalDegreeWhether = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(98, "nz-option", 54);
    \u0275\u0275pipe(99, "translate");
    \u0275\u0275element(100, "nz-option", 55);
    \u0275\u0275pipe(101, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "div", 4)(103, "label", 44);
    \u0275\u0275text(104);
    \u0275\u0275pipe(105, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "textarea", 56);
    \u0275\u0275twoWayListener("ngModelChange", function EducationInfoComponent_ng_container_90_Template_textarea_ngModelChange_106_listener($event) {
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
    const eiEmpAuto_r12 = \u0275\u0275reference(11);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 45, "hrm.empinfo.educ.employee", "Nh\xE2n vi\xEAn"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.empKeyword)("nzAutocomplete", eiEmpAuto_r12)("placeholder", \u0275\u0275pipeBind2(9, 48, "hrm.empinfo.workexp.selectEmp", "Ch\u1ECDn nh\xE2n vi\xEAn..."));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.empOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(16, 51, "hrm.empinfo.educ.institutionName", "T\xEAn tr\u01B0\u1EDDng/C\u01A1 s\u1EDF"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.institutionName);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 54, "hrm.empinfo.educ.degreeCode", "B\u1EB1ng c\u1EA5p"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.degreeCode);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(25, 57, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.degreeOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 60, "hrm.empinfo.educ.subject", "Chuy\xEAn ng\xE0nh ch\xEDnh"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.subject);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 63, "hrm.empinfo.educ.startDate", "T\u1EEB ng\xE0y"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.startDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 66, "hrm.empinfo.educ.endDate", "\u0110\u1EBFn ng\xE0y"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.endDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 69, "hrm.empinfo.educ.schoolLength", "Th\u1EDDi gian h\u1ECDc (H\u1EC7 \u0111\xE0o t\u1EA1o)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.schoolLength);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 72, "hrm.empinfo.educ.siteCountry", "Qu\u1ED1c gia"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.siteCountry);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(52, 75, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.siteCountryOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 78, "hrm.empinfo.educ.place", "\u0110\u1ECBa \u0111i\u1EC3m"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.place);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(62, 81, "hrm.empinfo.educ.thesisNameLocal", "T\xEAn lu\u1EADn v\u0103n"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.thesisNameLocal);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(67, 84, "hrm.empinfo.educ.thesisNameEng", "T\xEAn lu\u1EADn v\u0103n (Anh)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.thesisNameEng);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(72, 87, "hrm.empinfo.educ.subjectSecond", "Chuy\xEAn ng\xE0nh 2"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.subjectSecond);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(77, 90, "hrm.empinfo.educ.eduDegNum", "S\u1ED1 b\u1EB1ng c\u1EA5p"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.eduDegNum);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(82, 93, "hrm.empinfo.educ.degreesCode", "M\xE3 h\u1ECDc v\u1ECB"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.degreesCode);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(87, 96, "hrm.empinfo.educ.studyExperience", "Du h\u1ECDc"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.studyExperience);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(90, 99, "common.no", "Kh\xF4ng"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(92, 102, "common.yes", "C\xF3"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(96, 105, "hrm.empinfo.educ.finalDegreeWhether", "B\u1EB1ng cao nh\u1EA5t"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.finalDegreeWhether);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(99, 108, "common.no", "Kh\xF4ng"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(101, 111, "common.yes", "C\xF3"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(105, 114, "hrm.empinfo.educ.remark", "Ghi ch\xFA"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.remark);
    \u0275\u0275control();
  }
}
function EducationInfoComponent_ng_container_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 60);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 61);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "hrm.empinfo.educ.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a b\u1EA3n ghi n\xE0y?"));
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
  "hrm.empinfo.educ.addTitle",
  "hrm.empinfo.educ.editTitle",
  "hrm.empinfo.educ.employee",
  "hrm.empinfo.educ.institutionName",
  "hrm.empinfo.educ.degreeCode",
  "hrm.empinfo.educ.subject",
  "hrm.empinfo.educ.startDate",
  "hrm.empinfo.educ.endDate",
  "hrm.empinfo.educ.schoolLength",
  "hrm.empinfo.educ.siteCountry",
  "hrm.empinfo.educ.place",
  "hrm.empinfo.educ.thesisNameLocal",
  "hrm.empinfo.educ.thesisNameEng",
  "hrm.empinfo.educ.subjectSecond",
  "hrm.empinfo.educ.eduDegNum",
  "hrm.empinfo.educ.degreesCode",
  "hrm.empinfo.educ.studyExperience",
  "hrm.empinfo.educ.finalDegreeWhether",
  "hrm.empinfo.educ.remark",
  "hrm.empinfo.educ.searchInstitution",
  "hrm.empinfo.educ.colInstitution",
  "hrm.empinfo.educ.colDegree",
  "hrm.empinfo.educ.colSubject",
  "hrm.empinfo.educ.colFrom",
  "hrm.empinfo.educ.colTo",
  "hrm.empinfo.educ.colLength",
  "hrm.empinfo.educ.colCountry",
  "hrm.empinfo.educ.colRemark",
  "hrm.empinfo.educ.pleaseSelect",
  "hrm.empinfo.educ.confirmDelete"
];
var PAGE_SIZE_OPTIONS = [25, 50, 100, 200];
var DEGREE_PARENT_CODE = "13769";
var SITE_COUNTRY_PARENT_CODE = "870";
var EMPTY_FORM = {
  educNo: null,
  personId: "",
  empId: "",
  localName: "",
  institutionName: "",
  degreeCode: null,
  subject: "",
  startDate: "",
  endDate: "",
  schoolLength: "",
  siteCountry: null,
  place: "",
  thesisNameLocal: "",
  thesisNameEng: "",
  subjectSecond: "",
  eduDegNum: "",
  degreesCode: "",
  studyExperience: "N",
  finalDegreeWhether: "N",
  remark: ""
};
var EducationInfoComponent = class _EducationInfoComponent {
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
  degreeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "degreeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  siteCountryOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "siteCountryOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  searchEmpId = "";
  searchLocalName = "";
  searchInstitutionName = "";
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
    () => this.isNew() ? this.i18n.t("hrm.empinfo.educ.addTitle", "Th\xEAm m\u1EDBi Qu\xE1 tr\xECnh h\u1ECDc t\u1EADp") : this.i18n.t("hrm.empinfo.educ.editTitle", "C\u1EADp nh\u1EADt Qu\xE1 tr\xECnh h\u1ECDc t\u1EADp"),
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
    this.api.getCodeList(DEGREE_PARENT_CODE).subscribe((list) => this.degreeOptions.set(list ?? []));
    this.api.getCodeList(SITE_COUNTRY_PARENT_CODE).subscribe((list) => this.siteCountryOptions.set(list ?? []));
    this.search();
  }
  search() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.search({ empId: this.searchEmpId, localName: this.searchLocalName, institutionName: this.searchInstitutionName }).subscribe({
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
    this.searchInstitutionName = "";
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
      educNo: row.educNo,
      personId: row.personId,
      empId: row.empId || "",
      localName: row.localName || "",
      institutionName: row.institutionName || "",
      degreeCode: row.degreeCode || null,
      subject: row.subject || "",
      startDate: row.startDate || "",
      endDate: row.endDate || "",
      schoolLength: row.schoolLength || "",
      siteCountry: row.siteCountry || null,
      place: row.place || "",
      thesisNameLocal: row.thesisNameLocal || "",
      thesisNameEng: row.thesisNameEng || "",
      subjectSecond: row.subjectSecond || "",
      eduDegNum: row.eduDegNum || "",
      degreesCode: row.degreesCode || "",
      studyExperience: row.studyExperience || "N",
      finalDegreeWhether: row.finalDegreeWhether || "N",
      remark: row.remark || ""
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
    if (!this.form.personId || !this.form.institutionName) {
      this.message.warning(this.i18n.t("hrm.empinfo.educ.pleaseSelect", "Vui l\xF2ng ch\u1ECDn Nh\xE2n vi\xEAn v\xE0 nh\u1EADp T\xEAn tr\u01B0\u1EDDng"));
      return;
    }
    const payload = {
      educNo: this.form.educNo,
      personId: this.form.personId,
      degreeCode: this.form.degreeCode ?? "",
      finalDegreeWhether: this.form.finalDegreeWhether,
      degreesCode: this.form.degreesCode,
      institutionName: this.form.institutionName,
      subject: this.form.subject,
      startDate: this.form.startDate,
      endDate: this.form.endDate,
      schoolLength: this.form.schoolLength,
      thesisNameLocal: this.form.thesisNameLocal,
      thesisNameEng: this.form.thesisNameEng,
      subjectSecond: this.form.subjectSecond,
      eduDegNum: this.form.eduDegNum,
      siteCountry: this.form.siteCountry ?? "",
      remark: this.form.remark,
      place: this.form.place,
      studyExperience: this.form.studyExperience
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
    return this.deleteTarget ? `${this.deleteTarget.empId} - ${this.deleteTarget.localName} (${this.deleteTarget.institutionName})` : "";
  }
  confirmDelete() {
    if (!this.deleteTarget?.educNo)
      return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.educNo).subscribe({
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
      this.i18n.t("hrm.empinfo.educ.colInstitution", "T\xEAn tr\u01B0\u1EDDng"),
      this.i18n.t("hrm.empinfo.educ.colDegree", "B\u1EB1ng c\u1EA5p"),
      this.i18n.t("hrm.empinfo.educ.colSubject", "Chuy\xEAn ng\xE0nh"),
      this.i18n.t("hrm.empinfo.educ.colFrom", "T\u1EEB ng\xE0y"),
      this.i18n.t("hrm.empinfo.educ.colTo", "\u0110\u1EBFn ng\xE0y"),
      this.i18n.t("hrm.empinfo.educ.colLength", "H\xECnh th\u1EE9c"),
      this.i18n.t("hrm.empinfo.educ.colCountry", "Qu\u1ED1c gia"),
      this.i18n.t("hrm.empinfo.educ.colRemark", "Ghi ch\xFA")
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      r.empId,
      r.localName,
      r.institutionName,
      r.degreeName,
      r.subject,
      r.startDate,
      r.endDate,
      r.schoolLength,
      r.siteCountryName,
      r.remark
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "DanhSach");
    writeFileSync(workbook, "education_info_list.xlsx");
  }
  static \u0275fac = function EducationInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EducationInfoComponent)(\u0275\u0275directiveInject(EducationInfoService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EducationInfoComponent, selectors: [["app-education-info"]], decls: 96, vars: 127, consts: [["eiTable", ""], ["eiTotalTpl", ""], ["eiEmpAuto", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["nz-input", "", "name", "eiSearchEmpId", 3, "ngModelChange", "ngModel", "placeholder"], ["nz-input", "", "name", "eiSearchLocalName", 3, "ngModelChange", "ngModel", "placeholder"], ["nz-input", "", "name", "eiSearchInstitutionName", 3, "ngModelChange", "ngModel", "placeholder"], [1, "col-md-3", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], [1, "col-12", "d-flex", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzType", "default", "type", "button", 1, "ei-btn-export", 3, "click"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "100px", 1, "text-center"], ["nzWidth", "150px"], ["nzWidth", "180px"], ["nzWidth", "120px"], ["nzWidth", "160px"], ["nzWidth", "90px", 1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["nzWidth", "900px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "12", 1, "text-center", "text-muted"], [1, "text-center"], ["nz-button", "", "nzType", "text", "nzSize", "small", 3, "click", "title"], [1, "bx", "bx-edit", "text-warning"], [1, "bx", "bx-trash", "text-danger"], [1, "row", "g-3"], [1, "col-md-4"], [1, "form-label", "fw-semibold"], [1, "text-danger"], ["nz-input", "", 3, "ngModelChange", "ngModel", "nzAutocomplete", "placeholder"], [3, "nzValue", "click", 4, "ngFor", "ngForOf"], ["nz-input", "", 3, "ngModelChange", "ngModel"], ["nzAllowClear", "", "nzShowSearch", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nz-input", "", "placeholder", "YYYYMMDD", 3, "ngModelChange", "ngModel"], [1, "form-label", "fw-semibold", "d-block"], [1, "w-100", 3, "ngModelChange", "ngModel"], ["nzValue", "N", 3, "nzLabel"], ["nzValue", "Y", 3, "nzLabel"], ["nz-input", "", "rows", "2", 3, "ngModelChange", "ngModel"], [3, "click", "nzValue"], [1, "text-muted"], [3, "nzValue", "nzLabel"], [1, "mb-1"], [1, "fw-bold", "mb-0"]], template: function EducationInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "nz-card", 5)(3, "form", 6);
      \u0275\u0275listener("ngSubmit", function EducationInfoComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 7)(5, "label", 8);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 9);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function EducationInfoComponent_Template_input_ngModelChange_8_listener($event) {
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
      \u0275\u0275twoWayListener("ngModelChange", function EducationInfoComponent_Template_input_ngModelChange_14_listener($event) {
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
      \u0275\u0275twoWayListener("ngModelChange", function EducationInfoComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchInstitutionName, $event) || (ctx.searchInstitutionName = $event);
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
      \u0275\u0275listener("click", function EducationInfoComponent_Template_button_click_27_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(28, "i", 16);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 17)(32, "button", 18);
      \u0275\u0275listener("click", function EducationInfoComponent_Template_button_click_32_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(33, "i", 19);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "button", 20);
      \u0275\u0275listener("click", function EducationInfoComponent_Template_button_click_36_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(37, "i", 21);
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(40, "nz-card");
      \u0275\u0275template(41, EducationInfoComponent_nz_alert_41_Template, 1, 1, "nz-alert", 22);
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
      \u0275\u0275elementStart(58, "th", 28);
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "th", 26);
      \u0275\u0275text(62);
      \u0275\u0275pipe(63, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "th", 25);
      \u0275\u0275text(65);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "th", 25);
      \u0275\u0275text(68);
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "th", 28);
      \u0275\u0275text(71);
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "th", 28);
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "th", 29);
      \u0275\u0275text(77);
      \u0275\u0275pipe(78, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "th", 30);
      \u0275\u0275text(80);
      \u0275\u0275pipe(81, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(82, "tbody");
      \u0275\u0275template(83, EducationInfoComponent_tr_83_Template, 4, 4, "tr", 31)(84, EducationInfoComponent_tr_84_Template, 30, 27, "tr", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275template(85, EducationInfoComponent_ng_template_85_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(87, "nz-modal", 33);
      \u0275\u0275pipe(88, "translate");
      \u0275\u0275pipe(89, "translate");
      \u0275\u0275listener("nzOnCancel", function EducationInfoComponent_Template_nz_modal_nzOnCancel_87_listener() {
        return ctx.closeModal();
      })("nzOnOk", function EducationInfoComponent_Template_nz_modal_nzOnOk_87_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(90, EducationInfoComponent_ng_container_90_Template, 107, 117, "ng-container", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "nz-modal", 35);
      \u0275\u0275pipe(92, "translate");
      \u0275\u0275pipe(93, "translate");
      \u0275\u0275pipe(94, "translate");
      \u0275\u0275listener("nzOnCancel", function EducationInfoComponent_Template_nz_modal_nzOnCancel_91_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function EducationInfoComponent_Template_nz_modal_nzOnOk_91_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(95, EducationInfoComponent_ng_container_95_Template, 6, 5, "ng-container", 34);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const eiTable_r13 = \u0275\u0275reference(43);
      const eiTotalTpl_r14 = \u0275\u0275reference(86);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 45, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchEmpId);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 48, "common.placeholder.enterEmpId", "Nh\u1EADp m\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 51, "common.empName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchLocalName);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(15, 54, "common.placeholder.enterEmpName", "Nh\u1EADp h\u1ECD t\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 57, "hrm.empinfo.educ.searchInstitution", "T\xEAn tr\u01B0\u1EDDng/C\u01A1 s\u1EDF"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchInstitutionName);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(21, 60, "hrm.empinfo.educ.searchInstitution", "Nh\u1EADp t\xEAn tr\u01B0\u1EDDng"));
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 63, "essDept.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(30, 66, "essDept.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(35, 69, "common.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(39, 72, "essDept.exportExcel", "Xu\u1EA5t excel"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", eiTotalTpl_r14)("nzScroll", \u0275\u0275pureFunction0(126, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 75, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 78, "common.empId", "M\xE3 NV"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 81, "common.empName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 84, "hrm.empinfo.educ.colInstitution", "T\xEAn tr\u01B0\u1EDDng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(60, 87, "hrm.empinfo.educ.colDegree", "B\u1EB1ng c\u1EA5p"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(63, 90, "hrm.empinfo.educ.colSubject", "Chuy\xEAn ng\xE0nh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(66, 93, "hrm.empinfo.educ.colFrom", "T\u1EEB ng\xE0y"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 96, "hrm.empinfo.educ.colTo", "\u0110\u1EBFn ng\xE0y"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(72, 99, "hrm.empinfo.educ.colLength", "H\xECnh th\u1EE9c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(75, 102, "hrm.empinfo.educ.colCountry", "Qu\u1ED1c gia"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(78, 105, "hrm.empinfo.educ.colRemark", "Ghi ch\xFA"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(81, 108, "common.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", eiTable_r13.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", ctx.modalTitle())("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(88, 111, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(89, 114, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(4);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(92, 117, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(93, 120, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(94, 123, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, NzAutocompleteModule, NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, TranslatePipe], styles: ["\n.ei-btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=education-info.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EducationInfoComponent, [{
    type: Component,
    args: [{ selector: "app-education-info", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzSelectModule,
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
          <input nz-input [(ngModel)]="searchEmpId" name="eiSearchEmpId"
                 [placeholder]="'common.placeholder.enterEmpId' | translate:'Nh\u1EADp m\xE3 nh\xE2n vi\xEAn'">
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</label>
          <input nz-input [(ngModel)]="searchLocalName" name="eiSearchLocalName"
                 [placeholder]="'common.placeholder.enterEmpName' | translate:'Nh\u1EADp h\u1ECD t\xEAn'">
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'hrm.empinfo.educ.searchInstitution' | translate:'T\xEAn tr\u01B0\u1EDDng/C\u01A1 s\u1EDF' }}</label>
          <input nz-input [(ngModel)]="searchInstitutionName" name="eiSearchInstitutionName"
                 [placeholder]="'hrm.empinfo.educ.searchInstitution' | translate:'Nh\u1EADp t\xEAn tr\u01B0\u1EDDng'">
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
          <button nz-button nzType="default" type="button" class="ei-btn-export" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'essDept.exportExcel' | translate:'Xu\u1EA5t excel' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <!-- nzWidth khai b\xE1o cho t\u1EEBng c\u1ED9t \u0111\u1EC3 \u0111\u1ED3ng b\u1ED9 \u0111\u1ED9 r\u1ED9ng header/body khi d\xF9ng nzScroll. -->
      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="eiTotalTpl"
                [nzScroll]="{ x: '1480px', y: 'calc(100vh - 420px)' }" #eiTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'common.empId' | translate:'M\xE3 NV' }}</th>
            <th nzWidth="150px">{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
            <th nzWidth="180px">{{ 'hrm.empinfo.educ.colInstitution' | translate:'T\xEAn tr\u01B0\u1EDDng' }}</th>
            <th nzWidth="120px">{{ 'hrm.empinfo.educ.colDegree' | translate:'B\u1EB1ng c\u1EA5p' }}</th>
            <th nzWidth="150px">{{ 'hrm.empinfo.educ.colSubject' | translate:'Chuy\xEAn ng\xE0nh' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'hrm.empinfo.educ.colFrom' | translate:'T\u1EEB ng\xE0y' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'hrm.empinfo.educ.colTo' | translate:'\u0110\u1EBFn ng\xE0y' }}</th>
            <th nzWidth="120px">{{ 'hrm.empinfo.educ.colLength' | translate:'H\xECnh th\u1EE9c' }}</th>
            <th nzWidth="120px">{{ 'hrm.empinfo.educ.colCountry' | translate:'Qu\u1ED1c gia' }}</th>
            <th nzWidth="160px">{{ 'hrm.empinfo.educ.colRemark' | translate:'Ghi ch\xFA' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'common.action' | translate:'Thao t\xE1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="12" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of eiTable.data; let i = index">
            <td class="text-center">{{ i + 1 }}</td>
            <td class="text-center" [attr.title]="row.empId || null">{{ row.empId }}</td>
            <td [attr.title]="row.localName || null">{{ row.localName }}</td>
            <td [attr.title]="row.institutionName || null">{{ row.institutionName }}</td>
            <td [attr.title]="row.degreeName || null">{{ row.degreeName }}</td>
            <td [attr.title]="row.subject || null">{{ row.subject }}</td>
            <td class="text-center">{{ row.startDate }}</td>
            <td class="text-center">{{ row.endDate }}</td>
            <td [attr.title]="row.schoolLength || null">{{ row.schoolLength }}</td>
            <td [attr.title]="row.siteCountryName || null">{{ row.siteCountryName }}</td>
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
        <ng-template #eiTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal Th\xEAm m\u1EDBi / C\u1EADp nh\u1EADt -->
<nz-modal [nzVisible]="modalVisible()" [nzTitle]="modalTitle()" nzWidth="900px"
          (nzOnCancel)="closeModal()" (nzOnOk)="saveForm()" [nzOkLoading]="saving()"
          [nzOkText]="'common.save' | translate:'L\u01B0u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <div class="row g-3">
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.educ.employee' | translate:'Nh\xE2n vi\xEAn' }} <span class="text-danger">*</span></label>
        <input nz-input [ngModel]="empKeyword" (ngModelChange)="onEmpKeywordChange($event)"
               [nzAutocomplete]="eiEmpAuto" [placeholder]="'hrm.empinfo.workexp.selectEmp' | translate:'Ch\u1ECDn nh\xE2n vi\xEAn...'">
        <nz-autocomplete #eiEmpAuto>
          <nz-auto-option *ngFor="let opt of empOptions()" [nzValue]="opt" (click)="onEmpSelected(opt)">
            {{ opt.empId }} - {{ opt.localName }} <small class="text-muted">({{ opt.deptName }})</small>
          </nz-auto-option>
        </nz-autocomplete>
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.educ.institutionName' | translate:'T\xEAn tr\u01B0\u1EDDng/C\u01A1 s\u1EDF' }} <span class="text-danger">*</span></label>
        <input nz-input [(ngModel)]="form.institutionName">
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.educ.degreeCode' | translate:'B\u1EB1ng c\u1EA5p' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.degreeCode" nzAllowClear nzShowSearch
                   [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
          <nz-option *ngFor="let c of degreeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
        </nz-select>
      </div>

      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.educ.subject' | translate:'Chuy\xEAn ng\xE0nh ch\xEDnh' }}</label>
        <input nz-input [(ngModel)]="form.subject">
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.educ.startDate' | translate:'T\u1EEB ng\xE0y' }}</label>
        <input nz-input [(ngModel)]="form.startDate" placeholder="YYYYMMDD">
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.educ.endDate' | translate:'\u0110\u1EBFn ng\xE0y' }}</label>
        <input nz-input [(ngModel)]="form.endDate" placeholder="YYYYMMDD">
      </div>

      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.educ.schoolLength' | translate:'Th\u1EDDi gian h\u1ECDc (H\u1EC7 \u0111\xE0o t\u1EA1o)' }}</label>
        <input nz-input [(ngModel)]="form.schoolLength">
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.educ.siteCountry' | translate:'Qu\u1ED1c gia' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.siteCountry" nzAllowClear nzShowSearch
                   [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
          <nz-option *ngFor="let c of siteCountryOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.educ.place' | translate:'\u0110\u1ECBa \u0111i\u1EC3m' }}</label>
        <input nz-input [(ngModel)]="form.place">
      </div>

      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.educ.thesisNameLocal' | translate:'T\xEAn lu\u1EADn v\u0103n' }}</label>
        <input nz-input [(ngModel)]="form.thesisNameLocal">
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.educ.thesisNameEng' | translate:'T\xEAn lu\u1EADn v\u0103n (Anh)' }}</label>
        <input nz-input [(ngModel)]="form.thesisNameEng">
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.educ.subjectSecond' | translate:'Chuy\xEAn ng\xE0nh 2' }}</label>
        <input nz-input [(ngModel)]="form.subjectSecond">
      </div>

      <div class="col-md-3">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.educ.eduDegNum' | translate:'S\u1ED1 b\u1EB1ng c\u1EA5p' }}</label>
        <input nz-input [(ngModel)]="form.eduDegNum">
      </div>
      <div class="col-md-3">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.educ.degreesCode' | translate:'M\xE3 h\u1ECDc v\u1ECB' }}</label>
        <input nz-input [(ngModel)]="form.degreesCode">
      </div>
      <div class="col-md-3">
        <label class="form-label fw-semibold d-block">{{ 'hrm.empinfo.educ.studyExperience' | translate:'Du h\u1ECDc' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.studyExperience">
          <nz-option nzValue="N" [nzLabel]="'common.no' | translate:'Kh\xF4ng'"></nz-option>
          <nz-option nzValue="Y" [nzLabel]="'common.yes' | translate:'C\xF3'"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-3">
        <label class="form-label fw-semibold d-block">{{ 'hrm.empinfo.educ.finalDegreeWhether' | translate:'B\u1EB1ng cao nh\u1EA5t' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.finalDegreeWhether">
          <nz-option nzValue="N" [nzLabel]="'common.no' | translate:'Kh\xF4ng'"></nz-option>
          <nz-option nzValue="Y" [nzLabel]="'common.yes' | translate:'C\xF3'"></nz-option>
        </nz-select>
      </div>

      <div class="col-12">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.educ.remark' | translate:'Ghi ch\xFA' }}</label>
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
    <p class="mb-1">{{ 'hrm.empinfo.educ.confirmDelete' | translate:'B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a b\u1EA3n ghi n\xE0y?' }}</p>
    <p class="fw-bold mb-0">{{ deleteTargetName }}</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/education-info/education-info.component.css */\n.ei-btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=education-info.component.css.map */\n"] }]
  }], () => [{ type: EducationInfoService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EducationInfoComponent, { className: "EducationInfoComponent", filePath: "src/app/education-info/education-info.component.ts", lineNumber: 115 });
})();
export {
  EducationInfoComponent
};
//# debugId=21fe720b-323c-520b-b0bb-37d30a1ce358
//# sourceMappingURL=chunk-6ZT6YKUS.js.map
