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

// src/app/manage-qualification-info/manage-qualification-info.service.ts
var API_BASE = "/hrm/empinfo/api/qualification";
var ManageQualificationInfoService = class _ManageQualificationInfoService {
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
    if (params.qualName)
      httpParams = httpParams.set("qualName", params.qualName);
    return this.http.get(API_BASE, { params: httpParams, withCredentials: true });
  }
  save(payload) {
    return this.http.post(`${API_BASE}/save`, payload, { withCredentials: true });
  }
  delete(qualNo) {
    return this.http.delete(`${API_BASE}/delete/${qualNo}`, { withCredentials: true });
  }
  searchEmployees(keyword) {
    let params = new HttpParams();
    if (keyword)
      params = params.set("keyword", keyword);
    return this.http.get("/hrm/empinfo/api/employee/search", { params, withCredentials: true });
  }
  static \u0275fac = function ManageQualificationInfoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ManageQualificationInfoService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ManageQualificationInfoService, factory: _ManageQualificationInfoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManageQualificationInfoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/manage-qualification-info/manage-qualification-info.component.ts
var _c0 = () => ({ x: "1300px", y: "calc(100vh - 420px)" });
function ManageQualificationInfoComponent_nz_alert_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 38);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ManageQualificationInfoComponent_tr_77_Template(rf, ctx) {
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
function ManageQualificationInfoComponent_tr_78_Template(rf, ctx) {
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
    \u0275\u0275elementStart(9, "td", 40);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 40);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 40)(20, "button", 41);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275listener("click", function ManageQualificationInfoComponent_tr_78_Template_button_click_20_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditModal(row_r4));
    });
    \u0275\u0275element(22, "i", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 41);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275listener("click", function ManageQualificationInfoComponent_tr_78_Template_button_click_23_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDeleteConfirm(row_r4));
    });
    \u0275\u0275element(25, "i", 43);
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
    \u0275\u0275attribute("title", row_r4.qualName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.qualName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.dateObtained);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.qualCardNo || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.qualCardNo);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.qualInstitute || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.qualInstitute);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.validityDate);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.qualGrade || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.qualGrade);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(21, 17, "common.edit", "S\u1EEDa"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(24, 20, "common.delete", "X\xF3a"));
  }
}
function ManageQualificationInfoComponent_ng_template_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r6 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r6, " ");
  }
}
function ManageQualificationInfoComponent_ng_container_84_nz_auto_option_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-auto-option", 59);
    \u0275\u0275listener("click", function ManageQualificationInfoComponent_ng_container_84_nz_auto_option_12_Template_nz_auto_option_click_0_listener() {
      const opt_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onEmpSelected(opt_r9));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "small", 60);
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
function ManageQualificationInfoComponent_ng_container_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 44)(2, "div", 45)(3, "label", 46);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span", 47);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "input", 48);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275listener("ngModelChange", function ManageQualificationInfoComponent_ng_container_84_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEmpKeywordChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(10, "nz-autocomplete", null, 2);
    \u0275\u0275template(12, ManageQualificationInfoComponent_ng_container_84_nz_auto_option_12_Template, 4, 4, "nz-auto-option", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 50)(14, "label", 46);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementStart(17, "span", 47);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function ManageQualificationInfoComponent_ng_container_84_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.qualName, $event) || (ctx_r1.form.qualName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 50)(21, "label", 46);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "nz-date-picker", 52);
    \u0275\u0275twoWayListener("ngModelChange", function ManageQualificationInfoComponent_ng_container_84_Template_nz_date_picker_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.dateObtained, $event) || (ctx_r1.form.dateObtained = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 50)(26, "label", 46);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function ManageQualificationInfoComponent_ng_container_84_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.qualCardNo, $event) || (ctx_r1.form.qualCardNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 50)(31, "label", 46);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function ManageQualificationInfoComponent_ng_container_84_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.qualInstitute, $event) || (ctx_r1.form.qualInstitute = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 50)(36, "label", 46);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "nz-date-picker", 52);
    \u0275\u0275twoWayListener("ngModelChange", function ManageQualificationInfoComponent_ng_container_84_Template_nz_date_picker_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.validityDate, $event) || (ctx_r1.form.validityDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 50)(41, "label", 46);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function ManageQualificationInfoComponent_ng_container_84_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.qualLevel, $event) || (ctx_r1.form.qualLevel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 50)(46, "label", 46);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function ManageQualificationInfoComponent_ng_container_84_Template_input_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.qualGrade, $event) || (ctx_r1.form.qualGrade = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 50)(51, "label", 46);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function ManageQualificationInfoComponent_ng_container_84_Template_input_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.acquisitionModes, $event) || (ctx_r1.form.acquisitionModes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 50)(56, "label", 53);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "nz-select", 54);
    \u0275\u0275twoWayListener("ngModelChange", function ManageQualificationInfoComponent_ng_container_84_Template_nz_select_ngModelChange_59_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.paymentAllowanceYN, $event) || (ctx_r1.form.paymentAllowanceYN = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(60, "nz-option", 55);
    \u0275\u0275pipe(61, "translate");
    \u0275\u0275element(62, "nz-option", 56);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 50)(65, "label", 46);
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function ManageQualificationInfoComponent_ng_container_84_Template_input_ngModelChange_68_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.qualSubmitDate, $event) || (ctx_r1.form.qualSubmitDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 4)(70, "label", 46);
    \u0275\u0275text(71);
    \u0275\u0275pipe(72, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "textarea", 58);
    \u0275\u0275twoWayListener("ngModelChange", function ManageQualificationInfoComponent_ng_container_84_Template_textarea_ngModelChange_73_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.qualRemark, $event) || (ctx_r1.form.qualRemark = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const mqiEmpAuto_r10 = \u0275\u0275reference(11);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 29, "hrm.empinfo.qual.employee", "Nh\xE2n vi\xEAn"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.empKeyword)("nzAutocomplete", mqiEmpAuto_r10)("placeholder", \u0275\u0275pipeBind2(9, 32, "hrm.empinfo.workexp.selectEmp", "Ch\u1ECDn nh\xE2n vi\xEAn..."));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.empOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(16, 35, "hrm.empinfo.qual.qualName", "T\xEAn ch\u1EE9ng ch\u1EC9"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.qualName);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 38, "hrm.empinfo.qual.dateObtained", "Ng\xE0y nh\u1EADn"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.dateObtained);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 41, "hrm.empinfo.qual.qualCardNo", "S\u1ED1 ch\u1EE9ng ch\u1EC9"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.qualCardNo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 44, "hrm.empinfo.qual.qualInstitute", "N\u01A1i c\u1EA5p"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.qualInstitute);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(38, 47, "hrm.empinfo.qual.validityDate", "Ng\xE0y h\u1EBFt h\u1EA1n"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.validityDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 50, "hrm.empinfo.qual.qualLevel", "C\u1EA5p \u0111\u1ED9"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.qualLevel);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 53, "hrm.empinfo.qual.qualGrade", "X\u1EBFp lo\u1EA1i"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.qualGrade);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(53, 56, "hrm.empinfo.qual.acquisitionModes", "H\xECnh th\u1EE9c \u0111\u1EA1t \u0111\u01B0\u1EE3c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.acquisitionModes);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(58, 59, "hrm.empinfo.qual.paymentAllowanceYN", "Tr\u1EA3 ph\u1EE5 c\u1EA5p"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.paymentAllowanceYN);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(61, 62, "common.no", "Kh\xF4ng"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(63, 65, "common.yes", "C\xF3"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(67, 68, "hrm.empinfo.qual.qualSubmitDate", "Ng\xE0y n\u1ED9p"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.qualSubmitDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(72, 71, "hrm.empinfo.qual.qualRemark", "Ghi ch\xFA"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.qualRemark);
    \u0275\u0275control();
  }
}
function ManageQualificationInfoComponent_ng_container_89_Template(rf, ctx) {
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "hrm.empinfo.qual.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a b\u1EA3n ghi n\xE0y?"));
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
  "essDept.search",
  "essDept.clearFilter",
  "essDept.exportExcel",
  "hrm.empinfo.workexp.selectEmp",
  "hrm.empinfo.qual.title",
  "hrm.empinfo.qual.addTitle",
  "hrm.empinfo.qual.editTitle",
  "hrm.empinfo.qual.employee",
  "hrm.empinfo.qual.qualName",
  "hrm.empinfo.qual.dateObtained",
  "hrm.empinfo.qual.qualCardNo",
  "hrm.empinfo.qual.qualInstitute",
  "hrm.empinfo.qual.validityDate",
  "hrm.empinfo.qual.qualLevel",
  "hrm.empinfo.qual.qualGrade",
  "hrm.empinfo.qual.acquisitionModes",
  "hrm.empinfo.qual.paymentAllowanceYN",
  "hrm.empinfo.qual.qualSubmitDate",
  "hrm.empinfo.qual.qualRemark",
  "hrm.empinfo.qual.searchQualName",
  "hrm.empinfo.qual.pleaseSelectAndName",
  "hrm.empinfo.qual.confirmDelete",
  "hrm.empinfo.qual.colCertName",
  "hrm.empinfo.qual.colSerialNo",
  "hrm.empinfo.qual.colIssuer",
  "hrm.empinfo.qual.colExpiry",
  "hrm.empinfo.qual.colGrade"
];
var PAGE_SIZE_OPTIONS = [25, 50, 100, 200];
var EMPTY_FORM = {
  qualNo: null,
  personId: "",
  empId: "",
  localName: "",
  deptName: "",
  qualName: "",
  dateObtained: null,
  qualCardNo: "",
  qualInstitute: "",
  validityDate: null,
  qualLevel: "",
  qualGrade: "",
  acquisitionModes: "",
  paymentAllowanceYN: "N",
  qualSubmitDate: "",
  qualRemark: ""
};
var ManageQualificationInfoComponent = class _ManageQualificationInfoComponent {
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
  searchQualName = "";
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
    () => this.isNew() ? this.i18n.t("hrm.empinfo.qual.addTitle", "Th\xEAm m\u1EDBi Ch\u1EE9ng ch\u1EC9") : this.i18n.t("hrm.empinfo.qual.editTitle", "C\u1EADp nh\u1EADt Ch\u1EE9ng ch\u1EC9"),
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
    this.api.search({ empId: this.searchEmpId, localName: this.searchLocalName, qualName: this.searchQualName }).subscribe({
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
    this.searchQualName = "";
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
      qualNo: row.qualNo,
      personId: row.personId,
      empId: row.empId || "",
      localName: row.localName || "",
      deptName: row.deptName || "",
      qualName: row.qualName || "",
      dateObtained: row.dateObtained ? new Date(row.dateObtained) : null,
      qualCardNo: row.qualCardNo || "",
      qualInstitute: row.qualInstitute || "",
      validityDate: row.validityDate ? new Date(row.validityDate) : null,
      qualLevel: row.qualLevel || "",
      qualGrade: row.qualGrade || "",
      acquisitionModes: row.acquisitionModes || "",
      paymentAllowanceYN: row.paymentAllowanceYN || "N",
      qualSubmitDate: row.qualSubmitDate || "",
      qualRemark: row.qualRemark || ""
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
    if (!this.form.personId || !this.form.qualName.trim()) {
      this.message.warning(this.i18n.t("hrm.empinfo.qual.pleaseSelectAndName", "Vui l\xF2ng ch\u1ECDn Nh\xE2n vi\xEAn v\xE0 nh\u1EADp T\xEAn ch\u1EE9ng ch\u1EC9"));
      return;
    }
    const payload = {
      qualNo: this.form.qualNo,
      personId: this.form.personId,
      qualName: this.form.qualName,
      dateObtained: this.formatYmd(this.form.dateObtained),
      qualCardNo: this.form.qualCardNo,
      qualInstitute: this.form.qualInstitute,
      validityDate: this.formatYmd(this.form.validityDate),
      qualLevel: this.form.qualLevel,
      qualGrade: this.form.qualGrade,
      acquisitionModes: this.form.acquisitionModes,
      paymentAllowanceYN: this.form.paymentAllowanceYN,
      qualSubmitDate: this.form.qualSubmitDate,
      qualRemark: this.form.qualRemark
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
    return this.deleteTarget ? `${this.deleteTarget.empId} - ${this.deleteTarget.localName} (${this.deleteTarget.qualName})` : "";
  }
  confirmDelete() {
    if (!this.deleteTarget?.qualNo)
      return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.qualNo).subscribe({
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
  /** Xuất excel client-side (bản gốc chỉ có nút export của DataTables) - dùng thư viện xlsx (SheetJS)
   *  để tạo đúng file .xlsx nhị phân (xem CLAUDE.md). */
  exportExcel() {
    const headers = [
      this.i18n.t("common.stt", "STT"),
      this.i18n.t("common.empId", "M\xE3 NV"),
      this.i18n.t("common.empName", "H\u1ECD t\xEAn"),
      this.i18n.t("hrm.empinfo.qual.colCertName", "T\xEAn ch\u1EE9ng ch\u1EC9"),
      this.i18n.t("hrm.empinfo.qual.dateObtained", "Ng\xE0y nh\u1EADn"),
      this.i18n.t("hrm.empinfo.qual.colSerialNo", "S\u1ED1 hi\u1EC7u"),
      this.i18n.t("hrm.empinfo.qual.colIssuer", "N\u01A1i c\u1EA5p"),
      this.i18n.t("hrm.empinfo.qual.colExpiry", "Ng\xE0y h\u1EBFt h\u1EA1n"),
      this.i18n.t("hrm.empinfo.qual.colGrade", "X\u1EBFp lo\u1EA1i")
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      r.empId,
      r.localName,
      r.qualName,
      r.dateObtained,
      r.qualCardNo,
      r.qualInstitute,
      r.validityDate,
      r.qualGrade
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "DanhSach");
    writeFileSync(workbook, "qualification_info_list.xlsx");
  }
  formatYmd(d) {
    return d ? formatDate(d, "yyyy-MM-dd", "vi") : null;
  }
  static \u0275fac = function ManageQualificationInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ManageQualificationInfoComponent)(\u0275\u0275directiveInject(ManageQualificationInfoService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManageQualificationInfoComponent, selectors: [["app-manage-qualification-info"]], decls: 90, vars: 119, consts: [["mqiTable", ""], ["mqiTotalTpl", ""], ["mqiEmpAuto", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["nz-input", "", "name", "mqiSearchEmpId", 3, "ngModelChange", "ngModel", "placeholder"], ["nz-input", "", "name", "mqiSearchLocalName", 3, "ngModelChange", "ngModel", "placeholder"], ["nz-input", "", "name", "mqiSearchQualName", 3, "ngModelChange", "ngModel", "placeholder"], [1, "col-md-3", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], [1, "col-12", "d-flex", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzType", "default", "type", "button", 1, "mqi-btn-export", 3, "click"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "100px", 1, "text-center"], ["nzWidth", "150px"], ["nzWidth", "180px"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "130px"], ["nzWidth", "160px"], ["nzWidth", "100px"], ["nzWidth", "90px", 1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["nzWidth", "800px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "10", 1, "text-center", "text-muted"], [1, "text-center"], ["nz-button", "", "nzType", "text", "nzSize", "small", 3, "click", "title"], [1, "bx", "bx-edit", "text-warning"], [1, "bx", "bx-trash", "text-danger"], [1, "row", "g-3"], [1, "col-md-12"], [1, "form-label", "fw-semibold"], [1, "text-danger"], ["nz-input", "", 3, "ngModelChange", "ngModel", "nzAutocomplete", "placeholder"], [3, "nzValue", "click", 4, "ngFor", "ngForOf"], [1, "col-md-6"], ["nz-input", "", 3, "ngModelChange", "ngModel"], ["nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], [1, "form-label", "fw-semibold", "d-block"], [1, "w-100", 3, "ngModelChange", "ngModel"], ["nzValue", "N", 3, "nzLabel"], ["nzValue", "Y", 3, "nzLabel"], ["nz-input", "", "placeholder", "YYYYMMDD", 3, "ngModelChange", "ngModel"], ["nz-input", "", "rows", "2", 3, "ngModelChange", "ngModel"], [3, "click", "nzValue"], [1, "text-muted"], [1, "mb-1"], [1, "fw-bold", "mb-0"]], template: function ManageQualificationInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "nz-card", 5)(3, "form", 6);
      \u0275\u0275listener("ngSubmit", function ManageQualificationInfoComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 7)(5, "label", 8);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 9);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ManageQualificationInfoComponent_Template_input_ngModelChange_8_listener($event) {
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
      \u0275\u0275twoWayListener("ngModelChange", function ManageQualificationInfoComponent_Template_input_ngModelChange_14_listener($event) {
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
      \u0275\u0275twoWayListener("ngModelChange", function ManageQualificationInfoComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchQualName, $event) || (ctx.searchQualName = $event);
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
      \u0275\u0275listener("click", function ManageQualificationInfoComponent_Template_button_click_27_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(28, "i", 16);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 17)(32, "button", 18);
      \u0275\u0275listener("click", function ManageQualificationInfoComponent_Template_button_click_32_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(33, "i", 19);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "button", 20);
      \u0275\u0275listener("click", function ManageQualificationInfoComponent_Template_button_click_36_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(37, "i", 21);
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(40, "nz-card");
      \u0275\u0275template(41, ManageQualificationInfoComponent_nz_alert_41_Template, 1, 1, "nz-alert", 22);
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
      \u0275\u0275elementStart(61, "th", 29);
      \u0275\u0275text(62);
      \u0275\u0275pipe(63, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "th", 30);
      \u0275\u0275text(65);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "th", 28);
      \u0275\u0275text(68);
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "th", 31);
      \u0275\u0275text(71);
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "th", 32);
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(76, "tbody");
      \u0275\u0275template(77, ManageQualificationInfoComponent_tr_77_Template, 4, 4, "tr", 33)(78, ManageQualificationInfoComponent_tr_78_Template, 26, 23, "tr", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275template(79, ManageQualificationInfoComponent_ng_template_79_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(81, "nz-modal", 35);
      \u0275\u0275pipe(82, "translate");
      \u0275\u0275pipe(83, "translate");
      \u0275\u0275listener("nzOnCancel", function ManageQualificationInfoComponent_Template_nz_modal_nzOnCancel_81_listener() {
        return ctx.closeModal();
      })("nzOnOk", function ManageQualificationInfoComponent_Template_nz_modal_nzOnOk_81_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(84, ManageQualificationInfoComponent_ng_container_84_Template, 74, 74, "ng-container", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "nz-modal", 37);
      \u0275\u0275pipe(86, "translate");
      \u0275\u0275pipe(87, "translate");
      \u0275\u0275pipe(88, "translate");
      \u0275\u0275listener("nzOnCancel", function ManageQualificationInfoComponent_Template_nz_modal_nzOnCancel_85_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function ManageQualificationInfoComponent_Template_nz_modal_nzOnOk_85_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(89, ManageQualificationInfoComponent_ng_container_89_Template, 6, 5, "ng-container", 36);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const mqiTable_r11 = \u0275\u0275reference(43);
      const mqiTotalTpl_r12 = \u0275\u0275reference(80);
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
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 55, "hrm.empinfo.qual.searchQualName", "T\xEAn ch\u1EE9ng ch\u1EC9"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQualName);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(21, 58, "hrm.empinfo.qual.searchQualName", "Nh\u1EADp t\xEAn ch\u1EE9ng ch\u1EC9"));
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
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", mqiTotalTpl_r12)("nzScroll", \u0275\u0275pureFunction0(118, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 73, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 76, "common.empId", "M\xE3 NV"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 79, "common.empName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 82, "hrm.empinfo.qual.colCertName", "T\xEAn ch\u1EE9ng ch\u1EC9"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(60, 85, "hrm.empinfo.qual.dateObtained", "Ng\xE0y nh\u1EADn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(63, 88, "hrm.empinfo.qual.colSerialNo", "S\u1ED1 hi\u1EC7u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(66, 91, "hrm.empinfo.qual.colIssuer", "N\u01A1i c\u1EA5p"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 94, "hrm.empinfo.qual.colExpiry", "Ng\xE0y h\u1EBFt h\u1EA1n"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(72, 97, "hrm.empinfo.qual.colGrade", "X\u1EBFp lo\u1EA1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(75, 100, "common.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", mqiTable_r11.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", ctx.modalTitle())("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(82, 103, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(83, 106, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(4);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(86, 109, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(87, 112, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(88, 115, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzDatePickerModule, NzDatePickerComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, NzAutocompleteModule, NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, TranslatePipe], styles: ["\n.mqi-btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=manage-qualification-info.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManageQualificationInfoComponent, [{
    type: Component,
    args: [{ selector: "app-manage-qualification-info", standalone: true, imports: [
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
          <input nz-input [(ngModel)]="searchEmpId" name="mqiSearchEmpId"
                 [placeholder]="'common.placeholder.enterEmpId' | translate:'Nh\u1EADp m\xE3 nh\xE2n vi\xEAn'">
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</label>
          <input nz-input [(ngModel)]="searchLocalName" name="mqiSearchLocalName"
                 [placeholder]="'common.placeholder.enterEmpName' | translate:'Nh\u1EADp h\u1ECD t\xEAn'">
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'hrm.empinfo.qual.searchQualName' | translate:'T\xEAn ch\u1EE9ng ch\u1EC9' }}</label>
          <input nz-input [(ngModel)]="searchQualName" name="mqiSearchQualName"
                 [placeholder]="'hrm.empinfo.qual.searchQualName' | translate:'Nh\u1EADp t\xEAn ch\u1EE9ng ch\u1EC9'">
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
          <button nz-button nzType="default" type="button" class="mqi-btn-export" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'essDept.exportExcel' | translate:'Xu\u1EA5t excel' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <!-- nzWidth khai b\xE1o cho t\u1EEBng c\u1ED9t \u0111\u1EC3 \u0111\u1ED3ng b\u1ED9 \u0111\u1ED9 r\u1ED9ng header/body khi d\xF9ng nzScroll. -->
      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="mqiTotalTpl"
                [nzScroll]="{ x: '1300px', y: 'calc(100vh - 420px)' }" #mqiTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'common.empId' | translate:'M\xE3 NV' }}</th>
            <th nzWidth="150px">{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
            <th nzWidth="180px">{{ 'hrm.empinfo.qual.colCertName' | translate:'T\xEAn ch\u1EE9ng ch\u1EC9' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'hrm.empinfo.qual.dateObtained' | translate:'Ng\xE0y nh\u1EADn' }}</th>
            <th nzWidth="130px">{{ 'hrm.empinfo.qual.colSerialNo' | translate:'S\u1ED1 hi\u1EC7u' }}</th>
            <th nzWidth="160px">{{ 'hrm.empinfo.qual.colIssuer' | translate:'N\u01A1i c\u1EA5p' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'hrm.empinfo.qual.colExpiry' | translate:'Ng\xE0y h\u1EBFt h\u1EA1n' }}</th>
            <th nzWidth="100px">{{ 'hrm.empinfo.qual.colGrade' | translate:'X\u1EBFp lo\u1EA1i' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'common.action' | translate:'Thao t\xE1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="10" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of mqiTable.data; let i = index">
            <td class="text-center">{{ i + 1 }}</td>
            <td class="text-center" [attr.title]="row.empId || null">{{ row.empId }}</td>
            <td [attr.title]="row.localName || null">{{ row.localName }}</td>
            <td [attr.title]="row.qualName || null">{{ row.qualName }}</td>
            <td class="text-center">{{ row.dateObtained }}</td>
            <td [attr.title]="row.qualCardNo || null">{{ row.qualCardNo }}</td>
            <td [attr.title]="row.qualInstitute || null">{{ row.qualInstitute }}</td>
            <td class="text-center">{{ row.validityDate }}</td>
            <td [attr.title]="row.qualGrade || null">{{ row.qualGrade }}</td>
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
        <ng-template #mqiTotalTpl let-total>
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
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.qual.employee' | translate:'Nh\xE2n vi\xEAn' }} <span class="text-danger">*</span></label>
        <input nz-input [ngModel]="empKeyword" (ngModelChange)="onEmpKeywordChange($event)"
               [nzAutocomplete]="mqiEmpAuto" [placeholder]="'hrm.empinfo.workexp.selectEmp' | translate:'Ch\u1ECDn nh\xE2n vi\xEAn...'">
        <nz-autocomplete #mqiEmpAuto>
          <nz-auto-option *ngFor="let opt of empOptions()" [nzValue]="opt" (click)="onEmpSelected(opt)">
            {{ opt.empId }} - {{ opt.localName }} <small class="text-muted">({{ opt.deptName }})</small>
          </nz-auto-option>
        </nz-autocomplete>
      </div>

      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.qual.qualName' | translate:'T\xEAn ch\u1EE9ng ch\u1EC9' }} <span class="text-danger">*</span></label>
        <input nz-input [(ngModel)]="form.qualName">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.qual.dateObtained' | translate:'Ng\xE0y nh\u1EADn' }}</label>
        <nz-date-picker class="w-100" [(ngModel)]="form.dateObtained" nzFormat="dd/MM/yyyy"></nz-date-picker>
      </div>

      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.qual.qualCardNo' | translate:'S\u1ED1 ch\u1EE9ng ch\u1EC9' }}</label>
        <input nz-input [(ngModel)]="form.qualCardNo">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.qual.qualInstitute' | translate:'N\u01A1i c\u1EA5p' }}</label>
        <input nz-input [(ngModel)]="form.qualInstitute">
      </div>

      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.qual.validityDate' | translate:'Ng\xE0y h\u1EBFt h\u1EA1n' }}</label>
        <nz-date-picker class="w-100" [(ngModel)]="form.validityDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.qual.qualLevel' | translate:'C\u1EA5p \u0111\u1ED9' }}</label>
        <input nz-input [(ngModel)]="form.qualLevel">
      </div>

      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.qual.qualGrade' | translate:'X\u1EBFp lo\u1EA1i' }}</label>
        <input nz-input [(ngModel)]="form.qualGrade">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.qual.acquisitionModes' | translate:'H\xECnh th\u1EE9c \u0111\u1EA1t \u0111\u01B0\u1EE3c' }}</label>
        <input nz-input [(ngModel)]="form.acquisitionModes">
      </div>

      <div class="col-md-6">
        <label class="form-label fw-semibold d-block">{{ 'hrm.empinfo.qual.paymentAllowanceYN' | translate:'Tr\u1EA3 ph\u1EE5 c\u1EA5p' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.paymentAllowanceYN">
          <nz-option nzValue="N" [nzLabel]="'common.no' | translate:'Kh\xF4ng'"></nz-option>
          <nz-option nzValue="Y" [nzLabel]="'common.yes' | translate:'C\xF3'"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.qual.qualSubmitDate' | translate:'Ng\xE0y n\u1ED9p' }}</label>
        <input nz-input [(ngModel)]="form.qualSubmitDate" placeholder="YYYYMMDD">
      </div>

      <div class="col-12">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.qual.qualRemark' | translate:'Ghi ch\xFA' }}</label>
        <textarea nz-input [(ngModel)]="form.qualRemark" rows="2"></textarea>
      </div>
    </div>
  </ng-container>
</nz-modal>

<!-- Modal x\xE1c nh\u1EADn x\xF3a -->
<nz-modal [nzVisible]="deleteVisible()" [nzTitle]="'common.confirm' | translate:'X\xE1c nh\u1EADn'"
          (nzOnCancel)="closeDeleteConfirm()" (nzOnOk)="confirmDelete()" [nzOkLoading]="deleting()"
          [nzOkText]="'common.confirm' | translate:'X\xE1c nh\u1EADn'" [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'">
  <ng-container *nzModalContent>
    <p class="mb-1">{{ 'hrm.empinfo.qual.confirmDelete' | translate:'B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a b\u1EA3n ghi n\xE0y?' }}</p>
    <p class="fw-bold mb-0">{{ deleteTargetName }}</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/manage-qualification-info/manage-qualification-info.component.css */\n.mqi-btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=manage-qualification-info.component.css.map */\n"] }]
  }], () => [{ type: ManageQualificationInfoService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageQualificationInfoComponent, { className: "ManageQualificationInfoComponent", filePath: "src/app/manage-qualification-info/manage-qualification-info.component.ts", lineNumber: 98 });
})();
export {
  ManageQualificationInfoComponent
};
//# debugId=ea57370d-4d16-5eed-9656-b099bc26a547
//# sourceMappingURL=chunk-XPD3LF62.js.map
