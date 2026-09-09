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
  MaxLengthValidator,
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

// src/app/view-pa-pay-schedule/view-pa-pay-schedule.service.ts
var API_BASE = "/pa/workManagement/api/paySchedule";
var ViewPaPayScheduleService = class _ViewPaPayScheduleService {
  constructor(http) {
    this.http = http;
  }
  http;
  search(params) {
    let httpParams = new HttpParams();
    if (params.fromDate)
      httpParams = httpParams.set("fromDate", params.fromDate);
    if (params.toDate)
      httpParams = httpParams.set("toDate", params.toDate);
    if (params.salaryDistinNo)
      httpParams = httpParams.set("salaryDistinNo", params.salaryDistinNo);
    return this.http.get(API_BASE, { params: httpParams, withCredentials: true });
  }
  getOne(payScheduleNo) {
    return this.http.get(`${API_BASE}/${payScheduleNo}`, { withCredentials: true });
  }
  save(payload) {
    return this.http.post(`${API_BASE}/save`, payload, { withCredentials: true });
  }
  delete(payScheduleNo) {
    return this.http.delete(`${API_BASE}/delete/${payScheduleNo}`, { withCredentials: true });
  }
  getCodeList(parentCodeNo) {
    return this.http.get("/sys/api/getCode/list", {
      params: new HttpParams().set("parentCodeNo", parentCodeNo),
      withCredentials: true
    });
  }
  static \u0275fac = function ViewPaPayScheduleService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewPaPayScheduleService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewPaPayScheduleService, factory: _ViewPaPayScheduleService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewPaPayScheduleService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-pa-pay-schedule/view-pa-pay-schedule.component.ts
var _c0 = () => ({ x: "1700px", y: "calc(100vh - 420px)" });
function ViewPaPayScheduleComponent_nz_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 39);
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r2.codeNo)("nzLabel", c_r2.codeName);
  }
}
function ViewPaPayScheduleComponent_nz_alert_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 40);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r2.errorMessage() ?? "");
  }
}
function ViewPaPayScheduleComponent_tr_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 41);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewPaPayScheduleComponent_tr_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 42);
    \u0275\u0275listener("click", function ViewPaPayScheduleComponent_tr_85_Template_tr_click_0_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openEditModal(row_r5));
    });
    \u0275\u0275elementStart(1, "td", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 43);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 43);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 43);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 43);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 43);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 43);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 43);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 43);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 43)(26, "button", 44);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275listener("click", function ViewPaPayScheduleComponent_tr_85_Template_button_click_26_listener($event) {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.openDeleteConfirm(row_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(28, "i", 45);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r6 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.toDmy(row_r5.payDate));
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.salaryDistinName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.salaryDistinName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.toDmy(row_r5.hrStartDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.toDmy(row_r5.hrEndDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.toDmy(row_r5.arStartDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.toDmy(row_r5.arEndDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.toDmy(row_r5.paOpenDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.toDmy(row_r5.paTransDate));
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.empOpinion || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.empOpinion);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.updatedBy);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.updateDate);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(27, 15, "common.delete", "X\xF3a"));
  }
}
function ViewPaPayScheduleComponent_ng_template_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r7 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r7, " ");
  }
}
function ViewPaPayScheduleComponent_ng_container_91_nz_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 39);
  }
  if (rf & 2) {
    const c_r9 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r9.codeNo)("nzLabel", c_r9.codeName);
  }
}
function ViewPaPayScheduleComponent_ng_container_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 46)(2, "div", 47)(3, "label", 48);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span", 49);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "nz-date-picker", 50);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaPayScheduleComponent_ng_container_91_Template_nz_date_picker_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.payDate, $event) || (ctx_r2.form.payDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 47)(10, "label", 48);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementStart(13, "span", 49);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "nz-select", 51);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaPayScheduleComponent_ng_container_91_Template_nz_select_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.salaryDistinNo, $event) || (ctx_r2.form.salaryDistinNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(16, ViewPaPayScheduleComponent_ng_container_91_nz_option_16_Template, 1, 2, "nz-option", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 47)(18, "label", 48);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "nz-date-picker", 52);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaPayScheduleComponent_ng_container_91_Template_nz_date_picker_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.hrStartDate, $event) || (ctx_r2.form.hrStartDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 47)(23, "label", 48);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "nz-date-picker", 53);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaPayScheduleComponent_ng_container_91_Template_nz_date_picker_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.hrEndDate, $event) || (ctx_r2.form.hrEndDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 47)(28, "label", 48);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "nz-date-picker", 54);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaPayScheduleComponent_ng_container_91_Template_nz_date_picker_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.arStartDate, $event) || (ctx_r2.form.arStartDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 47)(33, "label", 48);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "nz-date-picker", 55);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaPayScheduleComponent_ng_container_91_Template_nz_date_picker_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.arEndDate, $event) || (ctx_r2.form.arEndDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 47)(38, "label", 48);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "nz-date-picker", 56);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaPayScheduleComponent_ng_container_91_Template_nz_date_picker_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.paOpenDate, $event) || (ctx_r2.form.paOpenDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 47)(43, "label", 48);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "nz-date-picker", 57);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaPayScheduleComponent_ng_container_91_Template_nz_date_picker_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.paTransDate, $event) || (ctx_r2.form.paTransDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 3)(48, "label", 48);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "textarea", 58);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaPayScheduleComponent_ng_container_91_Template_textarea_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.empOpinion, $event) || (ctx_r2.form.empOpinion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 19, "pa.paySchedule.payDate", "Ng\xE0y ph\xE1t"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.payDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(12, 22, "pa.paySchedule.salaryDistinNo", "Ph\xE2n lo\u1EA1i l\u01B0\u01A1ng"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.salaryDistinNo);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.salaryDistinOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 25, "pa.paySchedule.hrStartDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u quy\u1EBFt \u0111\u1ECBnh"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.hrStartDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 28, "pa.paySchedule.hrEndDate", "Ng\xE0y k\u1EBFt th\xFAc quy\u1EBFt \u0111\u1ECBnh"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.hrEndDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 31, "pa.paySchedule.arStartDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u ch\u1EA5m c\xF4ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.arStartDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 34, "pa.paySchedule.arEndDate", "Ng\xE0y k\u1EBFt th\xFAc ch\u1EA5m c\xF4ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.arEndDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 37, "pa.paySchedule.paOpenDate", "Ng\xE0y m\u1EDF l\u01B0\u01A1ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.paOpenDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 40, "pa.paySchedule.paTransDate", "Ng\xE0y chuy\u1EC3n h\xF3a \u0111\u01A1n"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.paTransDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 43, "pa.paySchedule.empOpinion", "\xDD ki\u1EBFn"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.empOpinion);
    \u0275\u0275control();
  }
}
function ViewPaPayScheduleComponent_ng_container_96_Template(rf, ctx) {
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
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "pa.paySchedule.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a b\u1EA3n ghi n\xE0y?"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.deleteTargetName);
  }
}
var I18N_KEYS = [
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
  "common.saveSuccess",
  "common.saveFail",
  "common.deleteSuccess",
  "common.deleteFail",
  "common.loadFail",
  "common.noData",
  "common.totalRows",
  "common.selectAll",
  "pa.paySchedule.title",
  "pa.paySchedule.timeRange",
  "pa.paySchedule.salaryDistinNo",
  "pa.paySchedule.search",
  "pa.paySchedule.addNew",
  "pa.paySchedule.edit",
  "pa.paySchedule.delete",
  "pa.paySchedule.no",
  "pa.paySchedule.payDate",
  "pa.paySchedule.hrStartDate",
  "pa.paySchedule.hrEndDate",
  "pa.paySchedule.arStartDate",
  "pa.paySchedule.arEndDate",
  "pa.paySchedule.paOpenDate",
  "pa.paySchedule.paTransDate",
  "pa.paySchedule.empOpinion",
  "pa.paySchedule.updatedBy",
  "pa.paySchedule.updateDate",
  "pa.paySchedule.addTitle",
  "pa.paySchedule.editTitle",
  "pa.paySchedule.confirmDelete",
  "pa.paySchedule.validateRequired",
  "essDept.exportExcel"
];
var PAGE_SIZE_OPTIONS = [25, 50, 100, 200];
var SALARY_DISTIN_PARENT_CODE = "14013797";
var EMPTY_FORM = {
  payScheduleNo: null,
  payDate: null,
  salaryDistinNo: null,
  hrStartDate: null,
  hrEndDate: null,
  arStartDate: null,
  arEndDate: null,
  paOpenDate: null,
  paTransDate: null,
  empOpinion: ""
};
var ViewPaPayScheduleComponent = class _ViewPaPayScheduleComponent {
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
  salaryDistinOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "salaryDistinOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  searchFromDate = null;
  searchToDate = null;
  searchSalaryDistinNo = null;
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
    () => this.isNew() ? this.i18n.t("pa.paySchedule.addTitle", "Th\xEAm m\u1EDBi k\u1EBF ho\u1EA1ch tr\u1EA3 l\u01B0\u01A1ng") : this.i18n.t("pa.paySchedule.editTitle", "C\u1EADp nh\u1EADt k\u1EBF ho\u1EA1ch tr\u1EA3 l\u01B0\u01A1ng"),
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
    this.loadSalaryDistinOptions();
    this.search();
  }
  loadSalaryDistinOptions() {
    this.api.getCodeList(SALARY_DISTIN_PARENT_CODE).subscribe((list) => this.salaryDistinOptions.set(list ?? []));
  }
  search() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.search({
      fromDate: this.formatYmd(this.searchFromDate),
      toDate: this.formatYmd(this.searchToDate),
      salaryDistinNo: this.searchSalaryDistinNo
    }).subscribe({
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
    this.searchFromDate = null;
    this.searchToDate = null;
    this.searchSalaryDistinNo = null;
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
    this.api.getOne(row.payScheduleNo).subscribe({
      next: (detail) => {
        this.form = {
          payScheduleNo: detail.payScheduleNo,
          payDate: this.parseYmd(detail.payDate),
          salaryDistinNo: detail.salaryDistinNo,
          hrStartDate: this.parseYmd(detail.hrStartDate),
          hrEndDate: this.parseYmd(detail.hrEndDate),
          arStartDate: this.parseYmd(detail.arStartDate),
          arEndDate: this.parseYmd(detail.arEndDate),
          paOpenDate: this.parseYmd(detail.paOpenDate),
          paTransDate: this.parseYmd(detail.paTransDate),
          empOpinion: detail.empOpinion || ""
        };
        this.modalVisible.set(true);
      },
      error: (err) => {
        this.message.error(err?.error?.error || this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  closeModal() {
    this.modalVisible.set(false);
  }
  saveForm() {
    if (!this.form.payDate || !this.form.salaryDistinNo) {
      this.message.warning(this.i18n.t("pa.paySchedule.validateRequired", "Vui l\xF2ng nh\u1EADp \u0111\u1EA7y \u0111\u1EE7 th\xF4ng tin b\u1EAFt bu\u1ED9c!"));
      return;
    }
    const payload = {
      payScheduleNo: this.form.payScheduleNo,
      payDate: this.formatYmd(this.form.payDate),
      salaryDistinNo: this.form.salaryDistinNo,
      hrStartDate: this.formatYmd(this.form.hrStartDate),
      hrEndDate: this.formatYmd(this.form.hrEndDate),
      arStartDate: this.formatYmd(this.form.arStartDate),
      arEndDate: this.formatYmd(this.form.arEndDate),
      paOpenDate: this.formatYmd(this.form.paOpenDate),
      paTransDate: this.formatYmd(this.form.paTransDate),
      empOpinion: this.form.empOpinion || null
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
    return this.deleteTarget ? `${this.deleteTarget.payDate ?? ""} - ${this.deleteTarget.salaryDistinName ?? ""}` : "";
  }
  confirmDelete() {
    if (!this.deleteTarget?.payScheduleNo)
      return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.payScheduleNo).subscribe({
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
  /** Xuất excel client-side (bản gốc không có export) - dùng thư viện xlsx (SheetJS) để tạo đúng file
   *  .xlsx nhị phân (xem CLAUDE.md). */
  exportExcel() {
    const headers = [
      this.i18n.t("common.stt", "STT"),
      this.i18n.t("pa.paySchedule.payDate", "Ng\xE0y ph\xE1t"),
      this.i18n.t("pa.paySchedule.salaryDistinNo", "Ph\xE2n lo\u1EA1i l\u01B0\u01A1ng"),
      this.i18n.t("pa.paySchedule.hrStartDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u quy\u1EBFt \u0111\u1ECBnh"),
      this.i18n.t("pa.paySchedule.hrEndDate", "Ng\xE0y k\u1EBFt th\xFAc quy\u1EBFt \u0111\u1ECBnh"),
      this.i18n.t("pa.paySchedule.arStartDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u ch\u1EA5m c\xF4ng"),
      this.i18n.t("pa.paySchedule.arEndDate", "Ng\xE0y k\u1EBFt th\xFAc ch\u1EA5m c\xF4ng"),
      this.i18n.t("pa.paySchedule.paOpenDate", "Ng\xE0y m\u1EDF l\u01B0\u01A1ng"),
      this.i18n.t("pa.paySchedule.paTransDate", "Ng\xE0y chuy\u1EC3n h\xF3a \u0111\u01A1n"),
      this.i18n.t("pa.paySchedule.empOpinion", "\xDD ki\u1EBFn"),
      this.i18n.t("pa.paySchedule.updatedBy", "Ng\u01B0\u1EDDi thay \u0111\u1ED5i"),
      this.i18n.t("pa.paySchedule.updateDate", "Th\u1EDDi gian thay \u0111\u1ED5i")
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      this.toDmy(r.payDate),
      r.salaryDistinName,
      this.toDmy(r.hrStartDate),
      this.toDmy(r.hrEndDate),
      this.toDmy(r.arStartDate),
      this.toDmy(r.arEndDate),
      this.toDmy(r.paOpenDate),
      this.toDmy(r.paTransDate),
      r.empOpinion,
      r.updatedBy,
      r.updateDate
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "KeHoachTraLuong");
    writeFileSync(workbook, "pa_pay_schedule_list.xlsx");
  }
  /** Chuyển 'DD-MM-YYYY' (BE trả về ở API list) sang 'dd/MM/yyyy' để hiển thị theo CLAUDE.md. */
  toDmy(dmy) {
    if (!dmy)
      return "";
    return dmy.replace(/-/g, "/");
  }
  /** Parse 'YYYY-MM-DD' (BE trả về ở API chi tiết) sang Date cho nz-date-picker. */
  parseYmd(ymd) {
    if (!ymd)
      return null;
    const [y, m, d] = ymd.split("-").map((v) => parseInt(v, 10));
    return y && m && d ? new Date(y, m - 1, d) : null;
  }
  formatYmd(d) {
    return d ? formatDate(d, "yyyy-MM-dd", "vi") : null;
  }
  static \u0275fac = function ViewPaPayScheduleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewPaPayScheduleComponent)(\u0275\u0275directiveInject(ViewPaPayScheduleService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewPaPayScheduleComponent, selectors: [["app-view-pa-pay-schedule"]], decls: 97, vars: 120, consts: [["vppsTable", ""], ["vppsTotalTpl", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-5"], [1, "form-label"], [1, "d-flex", "align-items-center", "gap-2"], ["name", "vppsSearchFromDate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], [1, "text-muted"], ["name", "vppsSearchToDate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], [1, "col-md-3"], ["name", "vppsSearchSalaryDistinNo", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col-md-4", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], [1, "col-12", "d-flex", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzType", "default", "type", "button", 1, "vpps-btn-export", 3, "click"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "150px"], ["nzWidth", "130px", 1, "text-center"], ["nzWidth", "200px"], ["nzWidth", "150px", 1, "text-center"], ["nzWidth", "90px", 1, "text-center"], [4, "ngIf"], ["class", "vpps-row-clickable", 3, "click", 4, "ngFor", "ngForOf"], ["nzWidth", "700px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "13", 1, "text-center", "text-muted"], [1, "vpps-row-clickable", 3, "click"], [1, "text-center"], ["nz-button", "", "nzType", "text", "nzSize", "small", 3, "click", "title"], [1, "bx", "bx-trash", "text-danger"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label", "fw-semibold"], [1, "text-danger"], ["name", "vppsFormPayDate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vppsFormSalaryDistinNo", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vppsFormHrStartDate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vppsFormHrEndDate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vppsFormArStartDate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vppsFormArEndDate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vppsFormPaOpenDate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vppsFormPaTransDate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vppsFormEmpOpinion", "rows", "3", "maxlength", "2000", 3, "ngModelChange", "ngModel"], [1, "mb-1"], [1, "fw-bold", "mb-0"]], template: function ViewPaPayScheduleComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "nz-card", 4)(3, "form", 5);
      \u0275\u0275listener("ngSubmit", function ViewPaPayScheduleComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 6)(5, "label", 7);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 8)(9, "nz-date-picker", 9);
      \u0275\u0275twoWayListener("ngModelChange", function ViewPaPayScheduleComponent_Template_nz_date_picker_ngModelChange_9_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchFromDate, $event) || (ctx.searchFromDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(10, "span", 10);
      \u0275\u0275text(11, "-");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "nz-date-picker", 11);
      \u0275\u0275twoWayListener("ngModelChange", function ViewPaPayScheduleComponent_Template_nz_date_picker_ngModelChange_12_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchToDate, $event) || (ctx.searchToDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 12)(14, "label", 7);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "nz-select", 13);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewPaPayScheduleComponent_Template_nz_select_ngModelChange_17_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchSalaryDistinNo, $event) || (ctx.searchSalaryDistinNo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(19, ViewPaPayScheduleComponent_nz_option_19_Template, 1, 2, "nz-option", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 15)(21, "button", 16);
      \u0275\u0275element(22, "i", 17);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "button", 18);
      \u0275\u0275listener("click", function ViewPaPayScheduleComponent_Template_button_click_25_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(26, "i", 19);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 20)(30, "button", 21);
      \u0275\u0275listener("click", function ViewPaPayScheduleComponent_Template_button_click_30_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(31, "i", 22);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "button", 23);
      \u0275\u0275listener("click", function ViewPaPayScheduleComponent_Template_button_click_34_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(35, "i", 24);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(38, "nz-card");
      \u0275\u0275template(39, ViewPaPayScheduleComponent_nz_alert_39_Template, 1, 1, "nz-alert", 25);
      \u0275\u0275elementStart(40, "nz-table", 26, 0)(42, "thead")(43, "tr")(44, "th", 27);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "th", 28);
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "th", 29);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "th", 30);
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "th", 30);
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "th", 30);
      \u0275\u0275text(60);
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "th", 30);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "th", 28);
      \u0275\u0275text(66);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "th", 30);
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "th", 31);
      \u0275\u0275text(72);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "th", 28);
      \u0275\u0275text(75);
      \u0275\u0275pipe(76, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "th", 32);
      \u0275\u0275text(78);
      \u0275\u0275pipe(79, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "th", 33);
      \u0275\u0275text(81);
      \u0275\u0275pipe(82, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(83, "tbody");
      \u0275\u0275template(84, ViewPaPayScheduleComponent_tr_84_Template, 4, 4, "tr", 34)(85, ViewPaPayScheduleComponent_tr_85_Template, 29, 18, "tr", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275template(86, ViewPaPayScheduleComponent_ng_template_86_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(88, "nz-modal", 36);
      \u0275\u0275pipe(89, "translate");
      \u0275\u0275pipe(90, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewPaPayScheduleComponent_Template_nz_modal_nzOnCancel_88_listener() {
        return ctx.closeModal();
      })("nzOnOk", function ViewPaPayScheduleComponent_Template_nz_modal_nzOnOk_88_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(91, ViewPaPayScheduleComponent_ng_container_91_Template, 52, 46, "ng-container", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "nz-modal", 38);
      \u0275\u0275pipe(93, "translate");
      \u0275\u0275pipe(94, "translate");
      \u0275\u0275pipe(95, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewPaPayScheduleComponent_Template_nz_modal_nzOnCancel_92_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function ViewPaPayScheduleComponent_Template_nz_modal_nzOnOk_92_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(96, ViewPaPayScheduleComponent_ng_container_96_Template, 6, 5, "ng-container", 37);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const vppsTable_r10 = \u0275\u0275reference(41);
      const vppsTotalTpl_r11 = \u0275\u0275reference(87);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 44, "pa.paySchedule.timeRange", "Th\u1EDDi gian"));
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchFromDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchToDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 47, "pa.paySchedule.salaryDistinNo", "Ph\xE2n lo\u1EA1i l\u01B0\u01A1ng"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchSalaryDistinNo);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(18, 50, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.salaryDistinOptions());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(24, 53, "pa.paySchedule.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(28, 56, "common.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(33, 59, "pa.paySchedule.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(37, 62, "essDept.exportExcel", "Xu\u1EA5t excel"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", vppsTotalTpl_r11)("nzScroll", \u0275\u0275pureFunction0(119, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 65, "pa.paySchedule.no", "No"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 68, "pa.paySchedule.payDate", "Ng\xE0y ph\xE1t"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(52, 71, "pa.paySchedule.salaryDistinNo", "Ph\xE2n lo\u1EA1i l\u01B0\u01A1ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(55, 74, "pa.paySchedule.hrStartDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u quy\u1EBFt \u0111\u1ECBnh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(58, 77, "pa.paySchedule.hrEndDate", "Ng\xE0y k\u1EBFt th\xFAc quy\u1EBFt \u0111\u1ECBnh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(61, 80, "pa.paySchedule.arStartDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u ch\u1EA5m c\xF4ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(64, 83, "pa.paySchedule.arEndDate", "Ng\xE0y k\u1EBFt th\xFAc ch\u1EA5m c\xF4ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(67, 86, "pa.paySchedule.paOpenDate", "Ng\xE0y m\u1EDF l\u01B0\u01A1ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(70, 89, "pa.paySchedule.paTransDate", "Ng\xE0y chuy\u1EC3n h\xF3a \u0111\u01A1n"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(73, 92, "pa.paySchedule.empOpinion", "\xDD ki\u1EBFn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(76, 95, "pa.paySchedule.updatedBy", "Ng\u01B0\u1EDDi thay \u0111\u1ED5i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(79, 98, "pa.paySchedule.updateDate", "Th\u1EDDi gian thay \u0111\u1ED5i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(82, 101, "common.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", vppsTable_r10.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", ctx.modalTitle())("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(89, 104, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(90, 107, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(4);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(93, 110, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(94, 113, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(95, 116, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzDatePickerModule, NzDatePickerComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\n.vpps-btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n.vpps-row-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=view-pa-pay-schedule.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewPaPayScheduleComponent, [{
    type: Component,
    args: [{ selector: "app-view-pa-pay-schedule", standalone: true, imports: [
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
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm - \u0111\u1EE9ng im khi cu\u1ED9n (xem .sticky-filter-card trong styles.css) -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3" (ngSubmit)="search()">
        <div class="col-md-5">
          <label class="form-label">{{ 'pa.paySchedule.timeRange' | translate:'Th\u1EDDi gian' }}</label>
          <div class="d-flex align-items-center gap-2">
            <nz-date-picker class="w-100" [(ngModel)]="searchFromDate" name="vppsSearchFromDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
            <span class="text-muted">-</span>
            <nz-date-picker class="w-100" [(ngModel)]="searchToDate" name="vppsSearchToDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
          </div>
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'pa.paySchedule.salaryDistinNo' | translate:'Ph\xE2n lo\u1EA1i l\u01B0\u01A1ng' }}</label>
          <nz-select class="w-100" [(ngModel)]="searchSalaryDistinNo" name="vppsSearchSalaryDistinNo" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let c of salaryDistinOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-4 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'pa.paySchedule.search' | translate:'Tra c\u1EE9u' }}
          </button>
          <button nz-button type="button" (click)="clearSearch()">
            <i class="bx bx-x"></i> {{ 'common.clearFilter' | translate:'X\xF3a l\u1ECDc' }}
          </button>
        </div>
        <div class="col-12 d-flex gap-2 flex-wrap">
          <button nz-button nzType="primary" type="button" (click)="openAddModal()">
            <i class="bx bx-plus"></i> {{ 'pa.paySchedule.addNew' | translate:'Th\xEAm m\u1EDBi' }}
          </button>
          <button nz-button nzType="default" type="button" class="vpps-btn-export" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'essDept.exportExcel' | translate:'Xu\u1EA5t excel' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <!-- nzWidth khai b\xE1o cho t\u1EEBng c\u1ED9t \u0111\u1EC3 \u0111\u1ED3ng b\u1ED9 \u0111\u1ED9 r\u1ED9ng header/body khi d\xF9ng nzScroll. -->
      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="vppsTotalTpl"
                [nzScroll]="{ x: '1700px', y: 'calc(100vh - 420px)' }" #vppsTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'pa.paySchedule.no' | translate:'No' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'pa.paySchedule.payDate' | translate:'Ng\xE0y ph\xE1t' }}</th>
            <th nzWidth="150px">{{ 'pa.paySchedule.salaryDistinNo' | translate:'Ph\xE2n lo\u1EA1i l\u01B0\u01A1ng' }}</th>
            <th class="text-center" nzWidth="130px">{{ 'pa.paySchedule.hrStartDate' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u quy\u1EBFt \u0111\u1ECBnh' }}</th>
            <th class="text-center" nzWidth="130px">{{ 'pa.paySchedule.hrEndDate' | translate:'Ng\xE0y k\u1EBFt th\xFAc quy\u1EBFt \u0111\u1ECBnh' }}</th>
            <th class="text-center" nzWidth="130px">{{ 'pa.paySchedule.arStartDate' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u ch\u1EA5m c\xF4ng' }}</th>
            <th class="text-center" nzWidth="130px">{{ 'pa.paySchedule.arEndDate' | translate:'Ng\xE0y k\u1EBFt th\xFAc ch\u1EA5m c\xF4ng' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'pa.paySchedule.paOpenDate' | translate:'Ng\xE0y m\u1EDF l\u01B0\u01A1ng' }}</th>
            <th class="text-center" nzWidth="130px">{{ 'pa.paySchedule.paTransDate' | translate:'Ng\xE0y chuy\u1EC3n h\xF3a \u0111\u01A1n' }}</th>
            <th nzWidth="200px">{{ 'pa.paySchedule.empOpinion' | translate:'\xDD ki\u1EBFn' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'pa.paySchedule.updatedBy' | translate:'Ng\u01B0\u1EDDi thay \u0111\u1ED5i' }}</th>
            <th class="text-center" nzWidth="150px">{{ 'pa.paySchedule.updateDate' | translate:'Th\u1EDDi gian thay \u0111\u1ED5i' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'common.action' | translate:'Thao t\xE1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="13" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of vppsTable.data; let i = index" class="vpps-row-clickable" (click)="openEditModal(row)">
            <td class="text-center">{{ i + 1 }}</td>
            <td class="text-center">{{ toDmy(row.payDate) }}</td>
            <td [attr.title]="row.salaryDistinName || null">{{ row.salaryDistinName }}</td>
            <td class="text-center">{{ toDmy(row.hrStartDate) }}</td>
            <td class="text-center">{{ toDmy(row.hrEndDate) }}</td>
            <td class="text-center">{{ toDmy(row.arStartDate) }}</td>
            <td class="text-center">{{ toDmy(row.arEndDate) }}</td>
            <td class="text-center">{{ toDmy(row.paOpenDate) }}</td>
            <td class="text-center">{{ toDmy(row.paTransDate) }}</td>
            <td [attr.title]="row.empOpinion || null">{{ row.empOpinion }}</td>
            <td class="text-center">{{ row.updatedBy }}</td>
            <td class="text-center">{{ row.updateDate }}</td>
            <td class="text-center">
              <button nz-button nzType="text" nzSize="small" [title]="'common.delete' | translate:'X\xF3a'" (click)="openDeleteConfirm(row); $event.stopPropagation()">
                <i class="bx bx-trash text-danger"></i>
              </button>
            </td>
          </tr>
        </tbody>
        <ng-template #vppsTotalTpl let-total>
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
        <label class="form-label fw-semibold">{{ 'pa.paySchedule.payDate' | translate:'Ng\xE0y ph\xE1t' }} <span class="text-danger">*</span></label>
        <nz-date-picker class="w-100" [(ngModel)]="form.payDate" name="vppsFormPayDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.paySchedule.salaryDistinNo' | translate:'Ph\xE2n lo\u1EA1i l\u01B0\u01A1ng' }} <span class="text-danger">*</span></label>
        <nz-select class="w-100" [(ngModel)]="form.salaryDistinNo" name="vppsFormSalaryDistinNo">
          <nz-option *ngFor="let c of salaryDistinOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.paySchedule.hrStartDate' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u quy\u1EBFt \u0111\u1ECBnh' }}</label>
        <nz-date-picker class="w-100" [(ngModel)]="form.hrStartDate" name="vppsFormHrStartDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.paySchedule.hrEndDate' | translate:'Ng\xE0y k\u1EBFt th\xFAc quy\u1EBFt \u0111\u1ECBnh' }}</label>
        <nz-date-picker class="w-100" [(ngModel)]="form.hrEndDate" name="vppsFormHrEndDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.paySchedule.arStartDate' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u ch\u1EA5m c\xF4ng' }}</label>
        <nz-date-picker class="w-100" [(ngModel)]="form.arStartDate" name="vppsFormArStartDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.paySchedule.arEndDate' | translate:'Ng\xE0y k\u1EBFt th\xFAc ch\u1EA5m c\xF4ng' }}</label>
        <nz-date-picker class="w-100" [(ngModel)]="form.arEndDate" name="vppsFormArEndDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.paySchedule.paOpenDate' | translate:'Ng\xE0y m\u1EDF l\u01B0\u01A1ng' }}</label>
        <nz-date-picker class="w-100" [(ngModel)]="form.paOpenDate" name="vppsFormPaOpenDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.paySchedule.paTransDate' | translate:'Ng\xE0y chuy\u1EC3n h\xF3a \u0111\u01A1n' }}</label>
        <nz-date-picker class="w-100" [(ngModel)]="form.paTransDate" name="vppsFormPaTransDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
      </div>
      <div class="col-12">
        <label class="form-label fw-semibold">{{ 'pa.paySchedule.empOpinion' | translate:'\xDD ki\u1EBFn' }}</label>
        <textarea nz-input [(ngModel)]="form.empOpinion" name="vppsFormEmpOpinion" rows="3" maxlength="2000"></textarea>
      </div>
    </div>
  </ng-container>
</nz-modal>

<!-- Modal x\xE1c nh\u1EADn x\xF3a -->
<nz-modal [nzVisible]="deleteVisible()" [nzTitle]="'common.confirm' | translate:'X\xE1c nh\u1EADn'"
          (nzOnCancel)="closeDeleteConfirm()" (nzOnOk)="confirmDelete()" [nzOkLoading]="deleting()"
          [nzOkText]="'common.confirm' | translate:'X\xE1c nh\u1EADn'" [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'">
  <ng-container *nzModalContent>
    <p class="mb-1">{{ 'pa.paySchedule.confirmDelete' | translate:'B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a b\u1EA3n ghi n\xE0y?' }}</p>
    <p class="fw-bold mb-0">{{ deleteTargetName }}</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-pa-pay-schedule/view-pa-pay-schedule.component.css */\n.vpps-btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n.vpps-row-clickable {\n  cursor: pointer;\n}\n/*# sourceMappingURL=view-pa-pay-schedule.component.css.map */\n"] }]
  }], () => [{ type: ViewPaPayScheduleService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewPaPayScheduleComponent, { className: "ViewPaPayScheduleComponent", filePath: "src/app/view-pa-pay-schedule/view-pa-pay-schedule.component.ts", lineNumber: 94 });
})();
export {
  ViewPaPayScheduleComponent
};
//# debugId=b5a98120-d4f0-5543-8e7e-b67597d834a2
//# sourceMappingURL=chunk-VE2NUTLT.js.map
