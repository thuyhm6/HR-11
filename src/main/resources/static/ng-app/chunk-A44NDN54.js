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

// src/app/punishment-info/punishment-info.service.ts
var API_BASE = "/hrm/empinfo/api/punishment";
var PunishmentInfoService = class _PunishmentInfoService {
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
    if (params.punishCode)
      httpParams = httpParams.set("punishCode", params.punishCode);
    return this.http.get(API_BASE, { params: httpParams, withCredentials: true });
  }
  save(payload) {
    return this.http.post(`${API_BASE}/save`, payload, { withCredentials: true });
  }
  delete(punishNo) {
    return this.http.delete(`${API_BASE}/delete/${punishNo}`, { withCredentials: true });
  }
  searchEmployees(keyword) {
    let params = new HttpParams();
    if (keyword)
      params = params.set("keyword", keyword);
    return this.http.get("/hrm/empinfo/api/employee/search", { params, withCredentials: true });
  }
  static \u0275fac = function PunishmentInfoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PunishmentInfoService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PunishmentInfoService, factory: _PunishmentInfoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PunishmentInfoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/punishment-info/punishment-info.component.ts
var _c0 = () => ({ x: "1300px", y: "calc(100vh - 420px)" });
function PunishmentInfoComponent_nz_alert_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 37);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function PunishmentInfoComponent_tr_80_Template(rf, ctx) {
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
function PunishmentInfoComponent_tr_81_Template(rf, ctx) {
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
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 39);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 39)(22, "button", 40);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275listener("click", function PunishmentInfoComponent_tr_81_Template_button_click_22_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditModal(row_r4));
    });
    \u0275\u0275element(24, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 40);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275listener("click", function PunishmentInfoComponent_tr_81_Template_button_click_25_listener() {
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
    \u0275\u0275attribute("title", row_r4.deptName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.deptName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.punishCode || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.punishCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.punishDate);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.punishReason || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.punishReason);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.punishDepartment || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.punishDepartment);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.punishScore);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.remarks || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.remarks);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(23, 19, "common.edit", "S\u1EEDa"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(26, 22, "common.delete", "X\xF3a"));
  }
}
function PunishmentInfoComponent_ng_template_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r6 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r6, " ");
  }
}
function PunishmentInfoComponent_ng_container_87_nz_auto_option_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-auto-option", 57);
    \u0275\u0275listener("click", function PunishmentInfoComponent_ng_container_87_nz_auto_option_12_Template_nz_auto_option_click_0_listener() {
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
function PunishmentInfoComponent_ng_container_87_Template(rf, ctx) {
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
    \u0275\u0275listener("ngModelChange", function PunishmentInfoComponent_ng_container_87_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEmpKeywordChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(10, "nz-autocomplete", null, 2);
    \u0275\u0275template(12, PunishmentInfoComponent_ng_container_87_nz_auto_option_12_Template, 4, 4, "nz-auto-option", 48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 49)(14, "label", 45);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function PunishmentInfoComponent_ng_container_87_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.punishCode, $event) || (ctx_r1.form.punishCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 49)(19, "label", 45);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "nz-date-picker", 51);
    \u0275\u0275twoWayListener("ngModelChange", function PunishmentInfoComponent_ng_container_87_Template_nz_date_picker_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.punishDate, $event) || (ctx_r1.form.punishDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 4)(24, "label", 45);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "textarea", 52);
    \u0275\u0275twoWayListener("ngModelChange", function PunishmentInfoComponent_ng_container_87_Template_textarea_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.punishReason, $event) || (ctx_r1.form.punishReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 49)(29, "label", 45);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "nz-date-picker", 51);
    \u0275\u0275twoWayListener("ngModelChange", function PunishmentInfoComponent_ng_container_87_Template_nz_date_picker_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.releaseDate, $event) || (ctx_r1.form.releaseDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 49)(34, "label", 45);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function PunishmentInfoComponent_ng_container_87_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.punishDepartment, $event) || (ctx_r1.form.punishDepartment = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 49)(39, "label", 45);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function PunishmentInfoComponent_ng_container_87_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.punishScore, $event) || (ctx_r1.form.punishScore = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 49)(44, "label", 45);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function PunishmentInfoComponent_ng_container_87_Template_input_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.faultTypeCode, $event) || (ctx_r1.form.faultTypeCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 49)(49, "label", 45);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "nz-date-picker", 51);
    \u0275\u0275twoWayListener("ngModelChange", function PunishmentInfoComponent_ng_container_87_Template_nz_date_picker_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.paycutStartDate, $event) || (ctx_r1.form.paycutStartDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 49)(54, "label", 45);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "nz-date-picker", 51);
    \u0275\u0275twoWayListener("ngModelChange", function PunishmentInfoComponent_ng_container_87_Template_nz_date_picker_ngModelChange_57_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.paycutEndDate, $event) || (ctx_r1.form.paycutEndDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 49)(59, "label", 53);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "nz-select", 54);
    \u0275\u0275twoWayListener("ngModelChange", function PunishmentInfoComponent_ng_container_87_Template_nz_select_ngModelChange_62_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.personnelCardInquiry, $event) || (ctx_r1.form.personnelCardInquiry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(63, "nz-option", 55);
    \u0275\u0275pipe(64, "translate");
    \u0275\u0275element(65, "nz-option", 56);
    \u0275\u0275pipe(66, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 4)(68, "label", 45);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "textarea", 52);
    \u0275\u0275twoWayListener("ngModelChange", function PunishmentInfoComponent_ng_container_87_Template_textarea_ngModelChange_71_listener($event) {
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
    const piEmpAuto_r10 = \u0275\u0275reference(11);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 29, "hrm.empinfo.punish.employee", "Nh\xE2n vi\xEAn"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.empKeyword)("nzAutocomplete", piEmpAuto_r10)("placeholder", \u0275\u0275pipeBind2(9, 32, "hrm.empinfo.workexp.selectEmp", "Ch\u1ECDn nh\xE2n vi\xEAn..."));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.empOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 35, "hrm.empinfo.punish.punishCodeLabel", "Lo\u1EA1i k\u1EF7 lu\u1EADt (M\xE3)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.punishCode);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 38, "hrm.empinfo.punish.punishDate", "Ng\xE0y k\u1EF7 lu\u1EADt"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.punishDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 41, "hrm.empinfo.punish.punishReason", "L\xFD do k\u1EF7 lu\u1EADt"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.punishReason);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 44, "hrm.empinfo.punish.releaseDate", "Ng\xE0y g\u1EE1 b\u1ECF/H\u1EBFt h\u1EA1n"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.releaseDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 47, "hrm.empinfo.punish.punishDept", "B\u1ED9 ph\u1EADn/C\u01A1 quan k\u1EF7 lu\u1EADt"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.punishDepartment);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 50, "hrm.empinfo.punish.punishScore", "\u0110i\u1EC3m k\u1EF7 lu\u1EADt/ph\u1EA1t"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.punishScore);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 53, "hrm.empinfo.punish.faultTypeCode", "M\xE3 lo\u1EA1i l\u1ED7i"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.faultTypeCode);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 56, "hrm.empinfo.punish.paycutStartDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u gi\u1EA3m l\u01B0\u01A1ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.paycutStartDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(56, 59, "hrm.empinfo.punish.paycutEndDate", "Ng\xE0y k\u1EBFt th\xFAc gi\u1EA3m l\u01B0\u01A1ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.paycutEndDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(61, 62, "hrm.empinfo.punish.personnelCardInquiry", "Hi\u1EC3n th\u1ECB th\u1EBB nh\xE2n s\u1EF1"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.personnelCardInquiry);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(64, 65, "common.no", "Kh\xF4ng"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(66, 68, "common.yes", "C\xF3"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(70, 71, "hrm.empinfo.punish.remarks", "Ghi ch\xFA"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.remarks);
    \u0275\u0275control();
  }
}
function PunishmentInfoComponent_ng_container_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 59);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 60);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "hrm.empinfo.punish.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a b\u1EA3n ghi n\xE0y?"));
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
  "hrm.empinfo.punish.addTitle",
  "hrm.empinfo.punish.editTitle",
  "hrm.empinfo.punish.employee",
  "hrm.empinfo.punish.punishCode",
  "hrm.empinfo.punish.punishCodeLabel",
  "hrm.empinfo.punish.punishDate",
  "hrm.empinfo.punish.punishReason",
  "hrm.empinfo.punish.releaseDate",
  "hrm.empinfo.punish.punishDept",
  "hrm.empinfo.punish.punishScore",
  "hrm.empinfo.punish.faultTypeCode",
  "hrm.empinfo.punish.paycutStartDate",
  "hrm.empinfo.punish.paycutEndDate",
  "hrm.empinfo.punish.personnelCardInquiry",
  "hrm.empinfo.punish.remarks",
  "hrm.empinfo.punish.searchCode",
  "hrm.empinfo.punish.colPunishCode",
  "hrm.empinfo.punish.colPunishDate",
  "hrm.empinfo.punish.colReason",
  "hrm.empinfo.punish.colDept",
  "hrm.empinfo.punish.colScore",
  "hrm.empinfo.punish.pleaseSelectEmp",
  "hrm.empinfo.punish.confirmDelete"
];
var PAGE_SIZE_OPTIONS = [25, 50, 100, 200];
var EMPTY_FORM = {
  punishNo: null,
  personId: "",
  empId: "",
  localName: "",
  deptName: "",
  punishDate: null,
  punishCode: "",
  punishReason: "",
  releaseDate: null,
  punishDepartment: "",
  punishScore: "",
  paycutStartDate: null,
  paycutEndDate: null,
  personnelCardInquiry: "N",
  faultTypeCode: "",
  remarks: ""
};
var PunishmentInfoComponent = class _PunishmentInfoComponent {
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
  searchPunishCode = "";
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
    () => this.isNew() ? this.i18n.t("hrm.empinfo.punish.addTitle", "Th\xEAm m\u1EDBi k\u1EF7 lu\u1EADt") : this.i18n.t("hrm.empinfo.punish.editTitle", "C\u1EADp nh\u1EADt k\u1EF7 lu\u1EADt"),
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
    this.api.search({ empId: this.searchEmpId, localName: this.searchLocalName, punishCode: this.searchPunishCode }).subscribe({
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
    this.searchPunishCode = "";
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
      punishNo: row.punishNo,
      personId: row.personId,
      empId: row.empId || "",
      localName: row.localName || "",
      deptName: row.deptName || "",
      punishDate: row.punishDate ? new Date(row.punishDate) : null,
      punishCode: row.punishCode || "",
      punishReason: row.punishReason || "",
      releaseDate: row.releaseDate ? new Date(row.releaseDate) : null,
      punishDepartment: row.punishDepartment || "",
      punishScore: row.punishScore || "",
      paycutStartDate: row.paycutStartDate ? new Date(row.paycutStartDate) : null,
      paycutEndDate: row.paycutEndDate ? new Date(row.paycutEndDate) : null,
      personnelCardInquiry: row.personnelCardInquiry || "N",
      faultTypeCode: row.faultTypeCode || "",
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
      this.message.warning(this.i18n.t("hrm.empinfo.punish.pleaseSelectEmp", "Vui l\xF2ng ch\u1ECDn nh\xE2n vi\xEAn"));
      return;
    }
    const payload = {
      punishNo: this.form.punishNo,
      personId: this.form.personId,
      punishDate: this.formatYmd(this.form.punishDate),
      punishCode: this.form.punishCode,
      punishReason: this.form.punishReason,
      releaseDate: this.formatYmd(this.form.releaseDate),
      punishDepartment: this.form.punishDepartment,
      punishScore: this.form.punishScore,
      paycutStartDate: this.formatYmd(this.form.paycutStartDate),
      paycutEndDate: this.formatYmd(this.form.paycutEndDate),
      personnelCardInquiry: this.form.personnelCardInquiry,
      faultTypeCode: this.form.faultTypeCode,
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
    return this.deleteTarget ? `${this.deleteTarget.empId} - ${this.deleteTarget.localName} (${this.deleteTarget.punishCode})` : "";
  }
  confirmDelete() {
    if (!this.deleteTarget?.punishNo)
      return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.punishNo).subscribe({
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
      this.i18n.t("hrm.empinfo.punish.colPunishCode", "Lo\u1EA1i KL"),
      this.i18n.t("hrm.empinfo.punish.colPunishDate", "Ng\xE0y KL"),
      this.i18n.t("hrm.empinfo.punish.colReason", "L\xFD do"),
      this.i18n.t("hrm.empinfo.punish.colDept", "B\u1ED9 ph\u1EADn KL"),
      this.i18n.t("hrm.empinfo.punish.colScore", "\u0110i\u1EC3m"),
      this.i18n.t("hrm.empinfo.punish.remarks", "Ghi ch\xFA")
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      r.empId,
      r.localName,
      r.deptName,
      r.punishCode,
      r.punishDate,
      r.punishReason,
      r.punishDepartment,
      r.punishScore,
      r.remarks
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "DanhSach");
    writeFileSync(workbook, "punishment_info_list.xlsx");
  }
  formatYmd(d) {
    return d ? formatDate(d, "yyyy-MM-dd", "vi") : null;
  }
  static \u0275fac = function PunishmentInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PunishmentInfoComponent)(\u0275\u0275directiveInject(PunishmentInfoService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PunishmentInfoComponent, selectors: [["app-punishment-info"]], decls: 93, vars: 123, consts: [["piTable", ""], ["piTotalTpl", ""], ["piEmpAuto", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["nz-input", "", "name", "piSearchEmpId", 3, "ngModelChange", "ngModel", "placeholder"], ["nz-input", "", "name", "piSearchLocalName", 3, "ngModelChange", "ngModel", "placeholder"], ["nz-input", "", "name", "piSearchPunishCode", 3, "ngModelChange", "ngModel", "placeholder"], [1, "col-md-3", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], [1, "col-12", "d-flex", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzType", "default", "type", "button", 1, "pi-btn-export", 3, "click"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "100px", 1, "text-center"], ["nzWidth", "150px"], ["nzWidth", "160px"], ["nzWidth", "120px"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "200px"], ["nzWidth", "90px", 1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["nzWidth", "800px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "11", 1, "text-center", "text-muted"], [1, "text-center"], ["nz-button", "", "nzType", "text", "nzSize", "small", 3, "click", "title"], [1, "bx", "bx-edit", "text-warning"], [1, "bx", "bx-trash", "text-danger"], [1, "row", "g-3"], [1, "col-md-12"], [1, "form-label", "fw-semibold"], [1, "text-danger"], ["nz-input", "", 3, "ngModelChange", "ngModel", "nzAutocomplete", "placeholder"], [3, "nzValue", "click", 4, "ngFor", "ngForOf"], [1, "col-md-6"], ["nz-input", "", 3, "ngModelChange", "ngModel"], ["nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "rows", "2", 3, "ngModelChange", "ngModel"], [1, "form-label", "fw-semibold", "d-block"], [1, "w-100", 3, "ngModelChange", "ngModel"], ["nzValue", "N", 3, "nzLabel"], ["nzValue", "Y", 3, "nzLabel"], [3, "click", "nzValue"], [1, "text-muted"], [1, "mb-1"], [1, "fw-bold", "mb-0"]], template: function PunishmentInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "nz-card", 5)(3, "form", 6);
      \u0275\u0275listener("ngSubmit", function PunishmentInfoComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 7)(5, "label", 8);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 9);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function PunishmentInfoComponent_Template_input_ngModelChange_8_listener($event) {
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
      \u0275\u0275twoWayListener("ngModelChange", function PunishmentInfoComponent_Template_input_ngModelChange_14_listener($event) {
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
      \u0275\u0275twoWayListener("ngModelChange", function PunishmentInfoComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchPunishCode, $event) || (ctx.searchPunishCode = $event);
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
      \u0275\u0275listener("click", function PunishmentInfoComponent_Template_button_click_27_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(28, "i", 16);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 17)(32, "button", 18);
      \u0275\u0275listener("click", function PunishmentInfoComponent_Template_button_click_32_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(33, "i", 19);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "button", 20);
      \u0275\u0275listener("click", function PunishmentInfoComponent_Template_button_click_36_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(37, "i", 21);
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(40, "nz-card");
      \u0275\u0275template(41, PunishmentInfoComponent_nz_alert_41_Template, 1, 1, "nz-alert", 22);
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
      \u0275\u0275elementStart(67, "th", 26);
      \u0275\u0275text(68);
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "th", 31);
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
      \u0275\u0275template(80, PunishmentInfoComponent_tr_80_Template, 4, 4, "tr", 32)(81, PunishmentInfoComponent_tr_81_Template, 28, 25, "tr", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275template(82, PunishmentInfoComponent_ng_template_82_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(84, "nz-modal", 34);
      \u0275\u0275pipe(85, "translate");
      \u0275\u0275pipe(86, "translate");
      \u0275\u0275listener("nzOnCancel", function PunishmentInfoComponent_Template_nz_modal_nzOnCancel_84_listener() {
        return ctx.closeModal();
      })("nzOnOk", function PunishmentInfoComponent_Template_nz_modal_nzOnOk_84_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(87, PunishmentInfoComponent_ng_container_87_Template, 72, 74, "ng-container", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "nz-modal", 36);
      \u0275\u0275pipe(89, "translate");
      \u0275\u0275pipe(90, "translate");
      \u0275\u0275pipe(91, "translate");
      \u0275\u0275listener("nzOnCancel", function PunishmentInfoComponent_Template_nz_modal_nzOnCancel_88_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function PunishmentInfoComponent_Template_nz_modal_nzOnOk_88_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(92, PunishmentInfoComponent_ng_container_92_Template, 6, 5, "ng-container", 35);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const piTable_r11 = \u0275\u0275reference(43);
      const piTotalTpl_r12 = \u0275\u0275reference(83);
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
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 56, "hrm.empinfo.punish.searchCode", "Lo\u1EA1i k\u1EF7 lu\u1EADt"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchPunishCode);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(21, 59, "hrm.empinfo.punish.searchCode", "Nh\u1EADp lo\u1EA1i k\u1EF7 lu\u1EADt"));
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
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", piTotalTpl_r12)("nzScroll", \u0275\u0275pureFunction0(122, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 74, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 77, "common.empId", "M\xE3 NV"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 80, "common.empName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 83, "common.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(60, 86, "hrm.empinfo.punish.colPunishCode", "Lo\u1EA1i KL"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(63, 89, "hrm.empinfo.punish.colPunishDate", "Ng\xE0y KL"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(66, 92, "hrm.empinfo.punish.colReason", "L\xFD do"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 95, "hrm.empinfo.punish.colDept", "B\u1ED9 ph\u1EADn KL"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(72, 98, "hrm.empinfo.punish.colScore", "\u0110i\u1EC3m"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(75, 101, "hrm.empinfo.punish.remarks", "Ghi ch\xFA"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(78, 104, "common.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", piTable_r11.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", ctx.modalTitle())("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(85, 107, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(86, 110, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(4);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(89, 113, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(90, 116, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(91, 119, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzDatePickerModule, NzDatePickerComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, NzAutocompleteModule, NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, TranslatePipe], styles: ["\n.pi-btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=punishment-info.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PunishmentInfoComponent, [{
    type: Component,
    args: [{ selector: "app-punishment-info", standalone: true, imports: [
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
          <input nz-input [(ngModel)]="searchEmpId" name="piSearchEmpId"
                 [placeholder]="'common.placeholder.enterEmpId' | translate:'Nh\u1EADp m\xE3 nh\xE2n vi\xEAn'">
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</label>
          <input nz-input [(ngModel)]="searchLocalName" name="piSearchLocalName"
                 [placeholder]="'common.placeholder.enterEmpName' | translate:'Nh\u1EADp h\u1ECD t\xEAn'">
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'hrm.empinfo.punish.searchCode' | translate:'Lo\u1EA1i k\u1EF7 lu\u1EADt' }}</label>
          <input nz-input [(ngModel)]="searchPunishCode" name="piSearchPunishCode"
                 [placeholder]="'hrm.empinfo.punish.searchCode' | translate:'Nh\u1EADp lo\u1EA1i k\u1EF7 lu\u1EADt'">
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
          <button nz-button nzType="default" type="button" class="pi-btn-export" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'essDept.exportExcel' | translate:'Xu\u1EA5t excel' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <!-- nzWidth khai b\xE1o cho t\u1EEBng c\u1ED9t \u0111\u1EC3 \u0111\u1ED3ng b\u1ED9 \u0111\u1ED9 r\u1ED9ng header/body khi d\xF9ng nzScroll. -->
      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="piTotalTpl"
                [nzScroll]="{ x: '1300px', y: 'calc(100vh - 420px)' }" #piTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'common.empId' | translate:'M\xE3 NV' }}</th>
            <th nzWidth="150px">{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
            <th nzWidth="160px">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
            <th nzWidth="120px">{{ 'hrm.empinfo.punish.colPunishCode' | translate:'Lo\u1EA1i KL' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'hrm.empinfo.punish.colPunishDate' | translate:'Ng\xE0y KL' }}</th>
            <th nzWidth="200px">{{ 'hrm.empinfo.punish.colReason' | translate:'L\xFD do' }}</th>
            <th nzWidth="150px">{{ 'hrm.empinfo.punish.colDept' | translate:'B\u1ED9 ph\u1EADn KL' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'hrm.empinfo.punish.colScore' | translate:'\u0110i\u1EC3m' }}</th>
            <th nzWidth="160px">{{ 'hrm.empinfo.punish.remarks' | translate:'Ghi ch\xFA' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'common.action' | translate:'Thao t\xE1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="11" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of piTable.data; let i = index">
            <td class="text-center">{{ i + 1 }}</td>
            <td class="text-center" [attr.title]="row.empId || null">{{ row.empId }}</td>
            <td [attr.title]="row.localName || null">{{ row.localName }}</td>
            <td [attr.title]="row.deptName || null">{{ row.deptName }}</td>
            <td [attr.title]="row.punishCode || null">{{ row.punishCode }}</td>
            <td class="text-center">{{ row.punishDate }}</td>
            <td [attr.title]="row.punishReason || null">{{ row.punishReason }}</td>
            <td [attr.title]="row.punishDepartment || null">{{ row.punishDepartment }}</td>
            <td class="text-center">{{ row.punishScore }}</td>
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
        <ng-template #piTotalTpl let-total>
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
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.punish.employee' | translate:'Nh\xE2n vi\xEAn' }} <span class="text-danger">*</span></label>
        <input nz-input [ngModel]="empKeyword" (ngModelChange)="onEmpKeywordChange($event)"
               [nzAutocomplete]="piEmpAuto" [placeholder]="'hrm.empinfo.workexp.selectEmp' | translate:'Ch\u1ECDn nh\xE2n vi\xEAn...'">
        <nz-autocomplete #piEmpAuto>
          <nz-auto-option *ngFor="let opt of empOptions()" [nzValue]="opt" (click)="onEmpSelected(opt)">
            {{ opt.empId }} - {{ opt.localName }} <small class="text-muted">({{ opt.deptName }})</small>
          </nz-auto-option>
        </nz-autocomplete>
      </div>

      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.punish.punishCodeLabel' | translate:'Lo\u1EA1i k\u1EF7 lu\u1EADt (M\xE3)' }}</label>
        <input nz-input [(ngModel)]="form.punishCode">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.punish.punishDate' | translate:'Ng\xE0y k\u1EF7 lu\u1EADt' }}</label>
        <nz-date-picker class="w-100" [(ngModel)]="form.punishDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
      </div>

      <div class="col-12">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.punish.punishReason' | translate:'L\xFD do k\u1EF7 lu\u1EADt' }}</label>
        <textarea nz-input [(ngModel)]="form.punishReason" rows="2"></textarea>
      </div>

      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.punish.releaseDate' | translate:'Ng\xE0y g\u1EE1 b\u1ECF/H\u1EBFt h\u1EA1n' }}</label>
        <nz-date-picker class="w-100" [(ngModel)]="form.releaseDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.punish.punishDept' | translate:'B\u1ED9 ph\u1EADn/C\u01A1 quan k\u1EF7 lu\u1EADt' }}</label>
        <input nz-input [(ngModel)]="form.punishDepartment">
      </div>

      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.punish.punishScore' | translate:'\u0110i\u1EC3m k\u1EF7 lu\u1EADt/ph\u1EA1t' }}</label>
        <input nz-input [(ngModel)]="form.punishScore">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.punish.faultTypeCode' | translate:'M\xE3 lo\u1EA1i l\u1ED7i' }}</label>
        <input nz-input [(ngModel)]="form.faultTypeCode">
      </div>

      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.punish.paycutStartDate' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u gi\u1EA3m l\u01B0\u01A1ng' }}</label>
        <nz-date-picker class="w-100" [(ngModel)]="form.paycutStartDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.punish.paycutEndDate' | translate:'Ng\xE0y k\u1EBFt th\xFAc gi\u1EA3m l\u01B0\u01A1ng' }}</label>
        <nz-date-picker class="w-100" [(ngModel)]="form.paycutEndDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
      </div>

      <div class="col-md-6">
        <label class="form-label fw-semibold d-block">{{ 'hrm.empinfo.punish.personnelCardInquiry' | translate:'Hi\u1EC3n th\u1ECB th\u1EBB nh\xE2n s\u1EF1' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.personnelCardInquiry">
          <nz-option nzValue="N" [nzLabel]="'common.no' | translate:'Kh\xF4ng'"></nz-option>
          <nz-option nzValue="Y" [nzLabel]="'common.yes' | translate:'C\xF3'"></nz-option>
        </nz-select>
      </div>

      <div class="col-12">
        <label class="form-label fw-semibold">{{ 'hrm.empinfo.punish.remarks' | translate:'Ghi ch\xFA' }}</label>
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
    <p class="mb-1">{{ 'hrm.empinfo.punish.confirmDelete' | translate:'B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a b\u1EA3n ghi n\xE0y?' }}</p>
    <p class="fw-bold mb-0">{{ deleteTargetName }}</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/punishment-info/punishment-info.component.css */\n.pi-btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=punishment-info.component.css.map */\n"] }]
  }], () => [{ type: PunishmentInfoService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PunishmentInfoComponent, { className: "PunishmentInfoComponent", filePath: "src/app/punishment-info/punishment-info.component.ts", lineNumber: 99 });
})();
export {
  PunishmentInfoComponent
};
//# debugId=b3988d9a-cc28-5e7a-8bc4-db4748447890
//# sourceMappingURL=chunk-A44NDN54.js.map
