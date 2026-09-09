import {
  NzAutocompleteComponent,
  NzAutocompleteModule,
  NzAutocompleteOptionComponent,
  NzAutocompleteTriggerDirective
} from "./chunk-I3OGIUJB.js";
import {
  NzTagComponent,
  NzTagModule
} from "./chunk-HTQAHYN3.js";
import {
  TabService
} from "./chunk-DUA22MI5.js";
import {
  NzDescriptionsComponent,
  NzDescriptionsItemComponent,
  NzDescriptionsModule
} from "./chunk-Q45A6SWP.js";
import {
  NzMessageService
} from "./chunk-XWW7CXU6.js";
import {
  NzModalComponent,
  NzModalContentDirective,
  NzModalModule,
  NzModalService
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
  __spreadProps,
  __spreadValues,
  computed,
  firstValueFrom,
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
  ɵɵsanitizeHtml,
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

// src/app/ot-apply-batch-info/ot-apply-batch-info.service.ts
var API_BASE = "/ar/attendanceMintenance/api/overtime";
var EXCEL_TEMPLATE_NAME = "OvertimeApply_add_Template";
var OtApplyBatchInfoService = class _OtApplyBatchInfoService {
  constructor(http) {
    this.http = http;
  }
  http;
  getList(params) {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value)
        httpParams = httpParams.set(key, value);
    }
    return this.http.get(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
  }
  getDetail(applyNo, applyType) {
    let httpParams = new HttpParams().set("applyNo", applyNo);
    if (applyType)
      httpParams = httpParams.set("applyType", applyType);
    return this.http.get(`${API_BASE}/detail`, { params: httpParams, withCredentials: true });
  }
  getAutoFillByEmp(personId, applyOtDate, deductYn) {
    const httpParams = new HttpParams().set("personId", personId).set("applyOtDate", applyOtDate).set("deductYn", deductYn);
    return this.http.get(`${API_BASE}/auto-fill-by-emp`, { params: httpParams, withCredentials: true });
  }
  getDefaultOtInfo(personId, applyOtDate, otFromTime, otToTime, deductYn) {
    const httpParams = new HttpParams().set("personId", personId).set("applyOtDate", applyOtDate).set("otFromTime", otFromTime).set("otToTime", otToTime).set("deductYn", deductYn);
    return this.http.get(`${API_BASE}/default-info`, { params: httpParams, withCredentials: true });
  }
  getOtTotals(personId, applyOtDate) {
    const httpParams = new HttpParams().set("personId", personId).set("applyOtDate", applyOtDate);
    return this.http.get(`${API_BASE}/ot-totals`, {
      params: httpParams,
      withCredentials: true
    });
  }
  saveBatch(payloads) {
    return this.http.post(`${API_BASE}/saveBatch`, payloads, { withCredentials: true });
  }
  resubmit(payload) {
    return this.http.post(`${API_BASE}/resubmit`, payload, { withCredentials: true });
  }
  cancelBatch(applyNos) {
    return this.http.post(`${API_BASE}/cancel-batch`, { applyNos }, { withCredentials: true });
  }
  searchEmployees(keyword, empOffice) {
    let httpParams = new HttpParams().set("keyword", keyword);
    if (empOffice)
      httpParams = httpParams.set("empOffice", empOffice);
    return this.http.get("/hrm/empinfo/api/employee/search", { params: httpParams, withCredentials: true });
  }
  downloadTemplateUrl() {
    return `/sy/excel/api/downloadTemplate?templateName=${EXCEL_TEMPLATE_NAME}`;
  }
  importExcel(file) {
    const fd = new FormData();
    fd.append("templateName", EXCEL_TEMPLATE_NAME);
    fd.append("file", file);
    return this.http.post("/sy/excel/api/importTemplate", fd, { withCredentials: true });
  }
  static \u0275fac = function OtApplyBatchInfoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OtApplyBatchInfoService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OtApplyBatchInfoService, factory: _OtApplyBatchInfoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OtApplyBatchInfoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/ot-apply-batch-info/ot-apply-batch-info.component.ts
var _c0 = () => ({ x: "2500px", y: "calc(100vh - 320px)" });
var _c1 = () => ({ "max-height": "75vh", "overflow-y": "auto" });
var _c2 = () => ({ nzFormat: "HH:mm" });
function OtApplyBatchInfoComponent_nz_option_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 50);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const o_r2 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r2.value)("nzLabel", \u0275\u0275pipeBind2(1, 2, o_r2.labelKey, o_r2.fallback));
  }
}
function OtApplyBatchInfoComponent_nz_option_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 50);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const o_r3 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r3.value)("nzLabel", \u0275\u0275pipeBind2(1, 2, o_r3.labelKey, o_r3.fallback));
  }
}
function OtApplyBatchInfoComponent_nz_alert_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 51);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r4.errorMessage() ?? "");
  }
}
function OtApplyBatchInfoComponent_tr_137_label_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 58);
    \u0275\u0275twoWayListener("ngModelChange", function OtApplyBatchInfoComponent_tr_137_label_2_Template_label_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const row_r8 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r8.selected, $event) || (row_r8.selected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r8.selected);
    \u0275\u0275control();
  }
}
function OtApplyBatchInfoComponent_tr_137_ng_container_6_nz_auto_option_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-auto-option", 67);
    \u0275\u0275listener("click", function OtApplyBatchInfoComponent_tr_137_ng_container_6_nz_auto_option_5_Template_nz_auto_option_click_0_listener() {
      const opt_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const row_r8 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onEmpSelected(row_r8, opt_r11));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "small", 68);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r11 = ctx.$implicit;
    \u0275\u0275property("nzValue", opt_r11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", opt_r11.empId, " - ", opt_r11.localName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", opt_r11.deptName, ")");
  }
}
function OtApplyBatchInfoComponent_tr_137_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "input", 65);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function OtApplyBatchInfoComponent_tr_137_ng_container_6_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const row_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onEmpKeywordChange(row_r8, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(3, "nz-autocomplete", null, 4);
    \u0275\u0275template(5, OtApplyBatchInfoComponent_tr_137_ng_container_6_nz_auto_option_5_Template, 4, 4, "nz-auto-option", 66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const empAuto_r12 = \u0275\u0275reference(4);
    const row_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", row_r8.empKeyword)("nzAutocomplete", empAuto_r12)("placeholder", \u0275\u0275pipeBind2(2, 4, "arOtf.selectEmp", "Ch\u1ECDn NV..."));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", row_r8.empOptions);
  }
}
function OtApplyBatchInfoComponent_tr_137_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 69);
    \u0275\u0275listener("click", function OtApplyBatchInfoComponent_tr_137_ng_template_7_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const row_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.openDetail(row_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", row_r8.empId, " - ", row_r8.localName);
  }
}
function OtApplyBatchInfoComponent_tr_137_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "br");
    \u0275\u0275elementStart(3, "small", 68);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r8.createdBy);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r8.createDate);
  }
}
function OtApplyBatchInfoComponent_tr_137_ng_container_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "br");
    \u0275\u0275elementStart(3, "small", 68);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r8.updatedBy);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r8.updateDate);
  }
}
function OtApplyBatchInfoComponent_tr_137_button_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 70);
    \u0275\u0275listener("click", function OtApplyBatchInfoComponent_tr_137_button_43_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const row_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.removeNewRow(row_r8));
    });
    \u0275\u0275element(1, "i", 71);
    \u0275\u0275elementEnd();
  }
}
function OtApplyBatchInfoComponent_tr_137_button_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 72);
    \u0275\u0275listener("click", function OtApplyBatchInfoComponent_tr_137_button_44_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const row_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.resubmitLine(row_r8));
    });
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("nzLoading", row_r8.resubmitting);
  }
}
function OtApplyBatchInfoComponent_tr_137_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 52);
    \u0275\u0275template(2, OtApplyBatchInfoComponent_tr_137_label_2_Template, 1, 1, "label", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 52);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275template(6, OtApplyBatchInfoComponent_tr_137_ng_container_6_Template, 6, 7, "ng-container", 54)(7, OtApplyBatchInfoComponent_tr_137_ng_template_7_Template, 2, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "nz-date-picker", 55);
    \u0275\u0275listener("ngModelChange", function OtApplyBatchInfoComponent_tr_137_Template_nz_date_picker_ngModelChange_14_listener($event) {
      const row_r8 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onDateChange(row_r8, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "nz-date-picker", 56);
    \u0275\u0275listener("ngModelChange", function OtApplyBatchInfoComponent_tr_137_Template_nz_date_picker_ngModelChange_16_listener($event) {
      const row_r8 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onTimeChange(row_r8, "from", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "nz-date-picker", 56);
    \u0275\u0275listener("ngModelChange", function OtApplyBatchInfoComponent_tr_137_Template_nz_date_picker_ngModelChange_18_listener($event) {
      const row_r8 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onTimeChange(row_r8, "to", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 52);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 52);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 57);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 52)(26, "label", 58);
    \u0275\u0275listener("ngModelChange", function OtApplyBatchInfoComponent_tr_137_Template_label_ngModelChange_26_listener($event) {
      const row_r8 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onDeductYnChange(row_r8, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td")(28, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function OtApplyBatchInfoComponent_tr_137_Template_input_ngModelChange_28_listener($event) {
      const row_r8 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(row_r8.applyOtRemark, $event) || (row_r8.applyOtRemark = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td", 52);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td", 52);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "td", 52)(34, "nz-tag", 60);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "td");
    \u0275\u0275template(38, OtApplyBatchInfoComponent_tr_137_ng_container_38_Template, 5, 2, "ng-container", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "td");
    \u0275\u0275template(40, OtApplyBatchInfoComponent_tr_137_ng_container_40_Template, 5, 2, "ng-container", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "td", 62);
    \u0275\u0275elementStart(42, "td", 52);
    \u0275\u0275template(43, OtApplyBatchInfoComponent_tr_137_button_43_Template, 2, 0, "button", 63)(44, OtApplyBatchInfoComponent_tr_137_button_44_Template, 2, 1, "button", 64);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    const i_r16 = ctx.index;
    const empDisplay_r17 = \u0275\u0275reference(8);
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r4.isCancelable(row_r8));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r16 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r8.isNew)("ngIfElse", empDisplay_r17);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("title", row_r8.deptName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r8.deptName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r8.otTypeName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r8.otTypeName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", row_r8.applyOtDateObj);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", row_r8.otFromTimeObj)("nzShowTime", \u0275\u0275pureFunction0(31, _c2));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", row_r8.otToTimeObj)("nzShowTime", \u0275\u0275pureFunction0(32, _c2));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.indoorTime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.outdoorTime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.otApplyHour);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", row_r8.deductYn === "1");
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", row_r8.applyOtRemark);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.otTotalMonth);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.otTotalYear);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColor", ctx_r4.affirmBadge(row_r8.affirmFlag).color || void 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.affirmBadge(row_r8.affirmFlag).labelKey ? \u0275\u0275pipeBind2(36, 28, ctx_r4.affirmBadge(row_r8.affirmFlag).labelKey, ctx_r4.affirmBadge(row_r8.affirmFlag).fallback) : ctx_r4.affirmBadge(row_r8.affirmFlag).fallback, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !row_r8.isNew);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !row_r8.isNew);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", row_r8.affirmStr, \u0275\u0275sanitizeHtml);
    \u0275\u0275attribute("title", row_r8.affirmStr || null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r8.isNew);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !row_r8.isNew && row_r8.affirmFlag === ctx_r4.AFFIRM_APPROVED);
  }
}
function OtApplyBatchInfoComponent_ng_template_138_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r18 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r18, " ");
  }
}
function OtApplyBatchInfoComponent_ng_container_142_nz_alert_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 51);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzMessage", ctx_r4.detailErrorMessage() ?? "");
  }
}
function OtApplyBatchInfoComponent_ng_container_142_ng_container_2_tr_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 85);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "arOtf.noApprovalData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u ph\xEA duy\u1EC7t"));
  }
}
function OtApplyBatchInfoComponent_ng_container_142_ng_container_2_tr_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 52);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 52);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 52);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 52);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.approvalStt(item_r19, i_r20));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r19.affirmTypeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r19.affirmFlagName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r19.affirmName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r19.affirmContent);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r19.updateDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r19.deptName);
  }
}
function OtApplyBatchInfoComponent_ng_container_142_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h6", 73);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "nz-descriptions", 74)(5, "nz-descriptions-item", 75);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "nz-descriptions-item", 75);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "nz-descriptions-item", 75);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "nz-descriptions-item", 75);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "nz-descriptions-item", 75);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "nz-descriptions-item", 75);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "nz-descriptions-item", 75);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "nz-descriptions-item", 75);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "nz-descriptions-item", 76);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "h6", 73);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 77)(36, "nz-table", 78)(37, "thead")(38, "tr")(39, "th", 79);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "th", 80);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th", 81);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th");
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "th");
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "th", 82);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "th", 83);
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "tbody");
    \u0275\u0275template(61, OtApplyBatchInfoComponent_ng_container_142_ng_container_2_tr_61_Template, 4, 4, "tr", 61)(62, OtApplyBatchInfoComponent_ng_container_142_ng_container_2_tr_62_Template, 15, 7, "tr", 84);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const d_r21 = ctx.ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 33, "arOtf.empInfo", "Th\xF4ng tin nh\xE2n vi\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColumn", 2);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(6, 36, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r21.employeeInfo?.["empId"]);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(9, 39, "common.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r21.employeeInfo?.["localName"]);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(12, 42, "common.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r21.employeeInfo?.["deptName"]);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(15, 45, "arOtf.otType", "Lo\u1EA1i t\u0103ng ca"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r21.otInfo?.["otTypeName"]);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(18, 48, "arOtf.fromHour", "T\u1EEB gi\u1EDD"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r21.otInfo?.["otFromTime"]);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(21, 51, "arOtf.toHour", "\u0110\u1EBFn gi\u1EDD"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r21.otInfo?.["otToTime"]);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(24, 54, "common.hours", "S\u1ED1 gi\u1EDD"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r21.otInfo?.["otApplyHour"]);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(27, 57, "common.status", "Tr\u1EA1ng th\xE1i"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r21.otInfo?.["affirmFlagName"]);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(30, 60, "common.reason", "L\xFD do"))("nzSpan", 2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r21.otInfo?.["applyOtRemark"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 63, "arOtf.approvalSeq", "Tr\xECnh t\u1EF1 duy\u1EC7t"));
    \u0275\u0275advance(3);
    \u0275\u0275property("nzData", d_r21.approvalList)("nzShowPagination", false);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 66, "common.stt", "STT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 69, "arOtf.approvalSeq", "Tr\xECnh t\u1EF1 duy\u1EC7t"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(47, 72, "arOtf.approvalStatus", "Tr\u1EA1ng th\xE1i duy\u1EC7t"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 75, "common.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(53, 78, "arOtf.opinion", "\xDD ki\u1EBFn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(56, 81, "arOtf.actionTime", "Th\u1EDDi gian th\u1EF1c hi\u1EC7n"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(59, 84, "common.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !d_r21.approvalList?.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", d_r21.approvalList);
  }
}
function OtApplyBatchInfoComponent_ng_container_142_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, OtApplyBatchInfoComponent_ng_container_142_nz_alert_1_Template, 1, 1, "nz-alert", 33)(2, OtApplyBatchInfoComponent_ng_container_142_ng_container_2_Template, 63, 87, "ng-container", 61);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.detailErrorMessage());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r4.detailLoading() && ctx_r4.detailData());
  }
}
var I18N_KEYS = [
  "common.empId",
  "common.empName",
  "common.deptName",
  "common.fromDate",
  "common.toDate",
  "common.placeholder.enterEmpId",
  "common.placeholder.enterEmpName",
  "common.selectAll",
  "common.search",
  "common.clearFilter",
  "common.addNew",
  "common.save",
  "common.action",
  "common.reason",
  "common.status",
  "common.creator",
  "common.updater",
  "common.approver",
  "common.hours",
  "common.downloadTemplate",
  "common.importExcel",
  "common.loadFail",
  "common.saveSuccess",
  "common.stt",
  "common.totalRows",
  "arOtf.otType",
  "arOtf.otDate",
  "arOtf.fromHour",
  "arOtf.toHour",
  "arOtf.selectEmp",
  "arOtf.noEmpComp",
  "arOtf.importResult",
  "arOtf.status.cancelled",
  "arOtf.msg.notSelectEmp",
  "arOtf.msg.notSelectDate",
  "arOtf.msg.notEnterTime",
  "arOtf.msg.noHour",
  "arOtf.msg.confirmCancelBatch",
  "arOtf.msg.cancelBatchSuccess",
  "arOtf.msg.noCancelSelected",
  "arOtf.cancelBatch",
  "arOtf.msg.confirmResubmit",
  "arOtf.msg.resubmitSuccess",
  "arOtf.affirmFlag",
  "arOtf.affirmFlag.waitApprove",
  "arOtf.affirmFlag.approved",
  "arOtf.affirmFlag.approving",
  "arOtf.affirmFlag.sent",
  "arOtf.confirmFlag",
  "arOtf.confirmFlag.notConfirmed",
  "arOtf.confirmFlag.confirmed",
  "arOtf.confirmFlag.rejected",
  "arOtf.otTotalMonth",
  "arOtf.otTotalYear",
  "arOtf.empInfo",
  "arOtf.otInfo",
  "arOtf.approvalSeq",
  "arOtf.approvalStatus",
  "arOtf.opinion",
  "arOtf.actionTime",
  "arOtf.noApprovalData",
  "arOtf.loadFailed",
  "impOt.deductYn",
  "ps.col.indoorTime",
  "ps.col.outdoorTime",
  "applyAtt.notSaved",
  "applyAtt.msg.nothingToSave",
  "applyAtt.msg.timeOverlap",
  "applyAtt.msg.cancelFailed",
  "applyAtt.msg.invalidMinute",
  "applyAtt.saveError",
  "applyAtt.sendError"
];
var AFFIRM_SENT = "14014306";
var AFFIRM_APPROVING = "14014307";
var AFFIRM_APPROVED = "14014308";
var AFFIRM_WAITING = "14014309";
var AFFIRM_CANCELLED = "14014310";
var CANCELABLE_FLAGS = [AFFIRM_SENT, AFFIRM_APPROVING, AFFIRM_APPROVED];
var EMP_OFFICE_HTSV = "15119";
var ALLOWED_MINUTES = [0, 2, 15, 17, 30, 32, 45, 47];
var AFFIRM_FLAG_OPTIONS = [
  { value: AFFIRM_WAITING, labelKey: "arOtf.affirmFlag.waitApprove", fallback: "Ch\u1EDD duy\u1EC7t" },
  { value: AFFIRM_APPROVED, labelKey: "arOtf.affirmFlag.approved", fallback: "\u0110\xE3 duy\u1EC7t" },
  { value: AFFIRM_APPROVING, labelKey: "arOtf.affirmFlag.approving", fallback: "\u0110ang duy\u1EC7t" },
  { value: AFFIRM_SENT, labelKey: "arOtf.affirmFlag.sent", fallback: "G\u1EEDi" },
  { value: AFFIRM_CANCELLED, labelKey: "arOtf.status.cancelled", fallback: "\u0110\xE3 h\u1EE7y" }
];
var CONFIRM_FLAG_OPTIONS = [
  { value: "0", labelKey: "arOtf.confirmFlag.notConfirmed", fallback: "Ch\u01B0a x\xE1c nh\u1EADn" },
  { value: "1", labelKey: "arOtf.confirmFlag.confirmed", fallback: "\u0110\xE3 x\xE1c nh\u1EADn" },
  { value: "2", labelKey: "arOtf.confirmFlag.rejected", fallback: "T\u1EEB ch\u1ED1i" }
];
var AFFIRM_BADGE = {
  [AFFIRM_SENT]: { color: "gold", labelKey: "arOtf.affirmFlag.sent", fallback: "G\u1EEDi" },
  [AFFIRM_APPROVING]: { color: "blue", labelKey: "arOtf.affirmFlag.approving", fallback: "\u0110ang duy\u1EC7t" },
  [AFFIRM_APPROVED]: { color: "green", labelKey: "arOtf.affirmFlag.approved", fallback: "\u0110\xE3 duy\u1EC7t" },
  [AFFIRM_WAITING]: { color: "red", labelKey: "arOtf.confirmFlag.rejected", fallback: "T\u1EEB ch\u1ED1i" },
  [AFFIRM_CANCELLED]: { color: "", labelKey: "arOtf.status.cancelled", fallback: "\u0110\xE3 h\u1EE7y" }
};
var OtApplyBatchInfoComponent = class _OtApplyBatchInfoComponent {
  constructor(api, i18n, message, modal, tabs) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
    this.modal = modal;
    this.tabs = tabs;
  }
  api;
  i18n;
  message;
  modal;
  tabs;
  affirmFlagOptions = AFFIRM_FLAG_OPTIONS;
  confirmFlagOptions = CONFIRM_FLAG_OPTIONS;
  pageSizeOptions = [25, 50, 100, 200];
  AFFIRM_APPROVED = AFFIRM_APPROVED;
  serverRows = signal(
    [],
    ...ngDevMode ? [{ debugName: "serverRows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  newRows = signal(
    [],
    ...ngDevMode ? [{ debugName: "newRows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  rows = computed(
    () => [...this.newRows(), ...this.serverRows()],
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
  saving = signal(
    false,
    ...ngDevMode ? [{ debugName: "saving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  cancelling = signal(
    false,
    ...ngDevMode ? [{ debugName: "cancelling" }] : (
      /* istanbul ignore next */
      []
    )
  );
  importing = signal(
    false,
    ...ngDevMode ? [{ debugName: "importing" }] : (
      /* istanbul ignore next */
      []
    )
  );
  detailVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "detailVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  detailLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "detailLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  detailErrorMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "detailErrorMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  detailData = signal(
    null,
    ...ngDevMode ? [{ debugName: "detailData" }] : (
      /* istanbul ignore next */
      []
    )
  );
  searchEmpId = "";
  searchEmpName = "";
  searchFromDate = null;
  searchToDate = null;
  searchAffirmFlag = null;
  searchConfirmFlag = null;
  empSearchTimers = /* @__PURE__ */ new Map();
  resolveTimers = /* @__PURE__ */ new Map();
  totalsTimers = /* @__PURE__ */ new Map();
  /** Toast lỗi (vd: vượt giới hạn 40h/tháng, 300h/năm...) hiển thị lâu hơn mặc định của NG-ZORRO
   *  (nzDuration mặc định chỉ 3s, dễ bị bỏ lỡ vì message nằm trên cùng màn hình, không như toastr ở
   *  bản gốc) - cho người dùng đủ thời gian đọc nội dung lỗi nghiệp vụ trước khi tự động biến mất. */
  showError(msg) {
    this.message.error(msg, { nzDuration: 6e3 });
  }
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.initDefaultDateRange();
    this.search();
  }
  affirmBadge(affirmFlag) {
    if (!affirmFlag)
      return { color: "", labelKey: "", fallback: this.i18n.t("applyAtt.notSaved", "Ch\u01B0a l\u01B0u") };
    return AFFIRM_BADGE[affirmFlag] ?? { color: "", labelKey: "", fallback: affirmFlag };
  }
  isCancelable(row) {
    return !row.isNew && CANCELABLE_FLAGS.includes(row.affirmFlag);
  }
  search() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getList({
      empId: this.searchEmpId.trim(),
      localName: this.searchEmpName.trim(),
      fromDate: this.formatYmd(this.searchFromDate),
      toDate: this.formatYmd(this.searchToDate),
      affirmFlag: this.searchAffirmFlag ?? "",
      confirmFlag: this.searchConfirmFlag ?? ""
    }).subscribe({
      next: (list) => {
        this.serverRows.set((list ?? []).map((r) => this.toRow(r)));
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.serverRows.set([]);
        this.loading.set(false);
      }
    });
  }
  clearSearch() {
    this.searchEmpId = "";
    this.searchEmpName = "";
    this.searchAffirmFlag = null;
    this.searchConfirmFlag = null;
    this.initDefaultDateRange();
    this.newRows.set([]);
    this.search();
  }
  /** Mặc định Từ ngày/Đến ngày = tuần hiện tại (Thứ 2 - Chủ nhật) - đúng pioabInitDate() bản gốc. */
  initDefaultDateRange() {
    const now = /* @__PURE__ */ new Date();
    const day = now.getDay() || 7;
    const monday = new Date(now);
    monday.setDate(now.getDate() - day + 1);
    const sunday = new Date(now);
    sunday.setDate(now.getDate() - day + 7);
    this.searchFromDate = monday;
    this.searchToDate = sunday;
  }
  get cancelableRows() {
    return this.serverRows().filter((r) => this.isCancelable(r));
  }
  get allCancelableSelected() {
    const rows = this.cancelableRows;
    return rows.length > 0 && rows.every((r) => r.selected);
  }
  get someCancelableSelected() {
    return this.cancelableRows.some((r) => r.selected) && !this.allCancelableSelected;
  }
  toggleSelectAll(checked) {
    this.cancelableRows.forEach((r) => r.selected = checked);
  }
  /** applyNo ổn định cho dòng đã lưu; dùng chính object cho dòng mới (chưa có applyNo) - giữ focus
   *  input/autocomplete không bị mất khi mảng rows() được tính lại (computed). */
  trackByRow = (_, row) => row.isNew ? row : row.applyNo;
  addEmptyRow() {
    this.newRows.update((rows) => [this.createEmptyRow(), ...rows]);
  }
  removeNewRow(row) {
    this.newRows.update((rows) => rows.filter((r) => r !== row));
  }
  createEmptyRow() {
    const today = /* @__PURE__ */ new Date();
    return {
      isNew: true,
      applyNo: null,
      personId: "",
      empId: "",
      localName: "",
      deptNo: "",
      deptName: "",
      otTypeNo: "",
      otTypeCode: "",
      otTypeName: "",
      applyOtDate: this.formatYmd(today),
      otFromTime: "",
      otToTime: "",
      otApplyHour: "",
      applyOtRemark: "",
      deductYn: "0",
      indoorTime: "",
      outdoorTime: "",
      otTotalMonth: "",
      otTotalYear: "",
      affirmFlag: "",
      affirmStr: "",
      createdBy: "",
      createDate: "",
      updatedBy: "",
      updateDate: "",
      applyOtDateObj: today,
      otFromTimeObj: null,
      otToTimeObj: null,
      selected: false,
      empKeyword: "",
      empOptions: [],
      empSearching: false,
      resubmitting: false
    };
  }
  toRow(r) {
    return __spreadProps(__spreadValues({}, r), {
      isNew: false,
      applyOtDateObj: this.parseYmd(r.applyOtDate),
      otFromTimeObj: this.parseDt(r.otFromTime),
      otToTimeObj: this.parseDt(r.otToTime),
      selected: false,
      empKeyword: "",
      empOptions: [],
      empSearching: false,
      resubmitting: false
    });
  }
  // ==================== Tìm nhân viên cho dòng mới (nz-autocomplete) ====================
  onEmpKeywordChange(row, value) {
    row.empKeyword = value;
    row.personId = "";
    const timer = this.empSearchTimers.get(row);
    if (timer)
      clearTimeout(timer);
    const keyword = value.trim();
    if (!keyword) {
      row.empOptions = [];
      return;
    }
    this.empSearchTimers.set(row, setTimeout(() => {
      row.empSearching = true;
      this.api.searchEmployees(keyword, EMP_OFFICE_HTSV).subscribe({
        next: (list) => {
          row.empOptions = list ?? [];
          row.empSearching = false;
        },
        error: () => {
          row.empOptions = [];
          row.empSearching = false;
        }
      });
    }, 300));
  }
  onEmpSelected(row, option) {
    row.personId = option.personId;
    row.empId = option.empId;
    row.localName = option.localName;
    row.deptName = option.deptName;
    row.empKeyword = `${option.empId} - ${option.localName}`;
    row.empOptions = [];
    if (row.applyOtDate) {
      this.autoFillByEmp(row);
      this.fetchOtTotals(row);
    }
  }
  /** Nạp sẵn loại tăng ca/giờ mặc định theo NV + ngày - đúng pioabAutoFillByEmp() bản gốc, chỉ áp
   *  dụng cho dòng mới (khi vừa chọn NV hoặc đổi ngày mà đã có NV). */
  autoFillByEmp(row) {
    if (!row.personId || !row.applyOtDate)
      return;
    this.api.getAutoFillByEmp(row.personId, row.applyOtDate, row.deductYn || "0").subscribe((data) => {
      if (!data)
        return;
      if (data.deptName)
        row.deptName = data.deptName;
      row.otTypeCode = data.otTypeCode || "";
      row.otTypeName = data.otTypeName || "";
      const fromVal = this.normalizeDt(data.otFromTime || "");
      const toVal = this.normalizeDt(data.otToTime || "");
      if (fromVal) {
        row.otFromTime = fromVal;
        row.otFromTimeObj = this.parseDt(fromVal);
      }
      if (toVal) {
        row.otToTime = toVal;
        row.otToTimeObj = this.parseDt(toVal);
      }
      row.otApplyHour = data.otApplyHour || this.calcApplyHour(row.applyOtDate, row.otFromTime, row.otToTime);
    });
  }
  // ==================== Ngày / giờ tăng ca ====================
  onDateChange(row, value) {
    row.applyOtDateObj = value;
    row.applyOtDate = value ? this.formatYmd(value) : "";
    if (row.isNew && row.personId && row.applyOtDate) {
      this.autoFillByEmp(row);
      this.fetchOtTotals(row);
      return;
    }
    row.otApplyHour = this.calcApplyHour(row.applyOtDate, row.otFromTime, row.otToTime);
    this.scheduleResolveDefaultOtInfo(row);
    if (row.personId && row.applyOtDate)
      this.fetchOtTotals(row);
  }
  onTimeChange(row, which, value) {
    const snapped = value ? this.snapMinutes(value) : null;
    if (which === "from") {
      row.otFromTimeObj = snapped;
      row.otFromTime = snapped ? this.formatDt(snapped) : "";
    } else {
      row.otToTimeObj = snapped;
      row.otToTime = snapped ? this.formatDt(snapped) : "";
    }
    if (which === "from" && snapped) {
      row.applyOtDateObj = snapped;
      row.applyOtDate = this.formatYmd(snapped);
    }
    row.otApplyHour = this.calcApplyHour(row.applyOtDate, row.otFromTime, row.otToTime);
    this.scheduleResolveDefaultOtInfo(row);
  }
  onDeductYnChange(row, checked) {
    row.deductYn = checked ? "1" : "0";
    this.scheduleResolveDefaultOtInfo(row, 0);
  }
  /** Làm tròn phút chọn về mốc hợp lệ gần nhất (không vượt quá) trong ALLOWED_MINUTES - đúng quy tắc
   *  pioabValidateMinutes() bản gốc. */
  snapMinutes(date) {
    const m = date.getMinutes();
    if (ALLOWED_MINUTES.includes(m))
      return date;
    let closest = 0;
    for (let i = ALLOWED_MINUTES.length - 1; i >= 0; i--) {
      if (m >= ALLOWED_MINUTES[i]) {
        closest = ALLOWED_MINUTES[i];
        break;
      }
    }
    const snapped = new Date(date);
    snapped.setMinutes(closest, 0, 0);
    const padded = closest < 10 ? `0${closest}` : String(closest);
    this.message.warning(`${this.i18n.t("applyAtt.msg.invalidMinute", "Minute kh\xF4ng h\u1EE3p l\u1EC7, h\u1EC7 th\u1ED1ng \u0111\xE3 t\u1EF1 \u0111\u1ED9ng \u0111i\u1EC1u ch\u1EC9nh v\u1EC1 ")}${padded}`);
    return snapped;
  }
  /** Tính nhanh số giờ tăng ca ở client (fallback hiển thị ngay) - đúng công thức pioabCalcApplyHour()
   *  bản gốc, sẽ được ghi đè bằng giá trị chuẩn từ server khi resolveDefaultOtInfo() trả về. */
  calcApplyHour(applyOtDate, fromTime, toTime) {
    const start = this.parseDt(fromTime) ?? (applyOtDate && fromTime ? this.parseDt(`${applyOtDate} ${fromTime}`) : null);
    const end = this.parseDt(toTime) ?? (applyOtDate && toTime ? this.parseDt(`${applyOtDate} ${toTime}`) : null);
    if (!start || !end)
      return "";
    const adjustedEnd = end < start ? new Date(end.getTime() + 864e5) : end;
    const diffMinutes = Math.round((adjustedEnd.getTime() - start.getTime()) / 6e4);
    if (diffMinutes < 0)
      return "";
    const hours = diffMinutes / 60;
    return String(Math.round(hours * 100) / 100);
  }
  /** Nhờ backend tính lại loại tăng ca/số giờ chuẩn theo NV + ngày + giờ - đúng
   *  pioabResolveDefaultOtInfo() bản gốc (debounce 300ms để tránh gọi API liên tục khi gõ). */
  scheduleResolveDefaultOtInfo(row, delay = 300) {
    const timer = this.resolveTimers.get(row);
    if (timer)
      clearTimeout(timer);
    if (!row.personId || !row.applyOtDate || !row.otFromTime || !row.otToTime) {
      row.otTypeCode = "";
      row.otTypeName = "";
      return;
    }
    this.resolveTimers.set(row, setTimeout(() => {
      this.api.getDefaultOtInfo(row.personId, row.applyOtDate, row.otFromTime, row.otToTime, row.deductYn || "0").subscribe({
        next: (res) => {
          row.otTypeCode = res?.otTypeCode || "";
          row.otTypeName = res?.otTypeName || "";
          row.otApplyHour = res?.otApplyHour || this.calcApplyHour(row.applyOtDate, row.otFromTime, row.otToTime);
        },
        error: () => void 0
      });
    }, delay));
  }
  fetchOtTotals(row) {
    const timer = this.totalsTimers.get(row);
    if (timer)
      clearTimeout(timer);
    this.totalsTimers.set(row, setTimeout(() => {
      this.api.getOtTotals(row.personId, row.applyOtDate).subscribe({
        next: (res) => {
          row.otTotalMonth = res?.otTotalMonth || "";
          row.otTotalYear = res?.otTotalYear || "";
        },
        error: () => void 0
      });
    }, 300));
  }
  // ==================== Xem chi tiết đơn (dòng đã lưu) ====================
  openDetail(row) {
    if (row.isNew || !row.applyNo)
      return;
    this.detailVisible.set(true);
    this.detailLoading.set(true);
    this.detailErrorMessage.set(null);
    this.detailData.set(null);
    this.api.getDetail(String(row.applyNo), row.otTypeCode).subscribe({
      next: (res) => {
        this.detailData.set(res);
        this.detailLoading.set(false);
      },
      error: () => {
        this.detailErrorMessage.set(this.i18n.t("arOtf.loadFailed", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i"));
        this.detailLoading.set(false);
      }
    });
  }
  closeDetail() {
    this.detailVisible.set(false);
  }
  /** STT hàng phê duyệt - dòng tổng hợp xác nhận của HR có affirmLevel='100' hiển thị là 'HR' thay vì
   *  số thứ tự thô, đúng vaotRenderApprovalRows() ở viewApprovaledOt.html bản gốc. */
  approvalStt(item, index) {
    const stt = item.affirmLevel || String(index + 1);
    return stt === "100" ? "HR" : stt;
  }
  // ==================== Lưu (dòng mới + dòng đã chọn để lưu lại/cập nhật) ====================
  saveAll() {
    const t = (key, fallback) => this.i18n.t(key, fallback);
    const savePayloads = [];
    const resubmitPayloads = [];
    let validationError = null;
    const validate = (row, label) => {
      if (!row.personId)
        return `${t("arOtf.msg.notSelectEmp", "Ch\u01B0a ch\u1ECDn nh\xE2n vi\xEAn")}${label}`;
      if (!row.applyOtDate)
        return `${t("arOtf.msg.notSelectDate", "Ch\u01B0a ch\u1ECDn ng\xE0y t\u0103ng ca")}${label}`;
      if (!row.otFromTime || !row.otToTime)
        return `${t("arOtf.msg.notEnterTime", "Ch\u01B0a nh\u1EADp gi\u1EDD t\u0103ng ca")}${label}`;
      if (!row.otApplyHour)
        return `${t("arOtf.msg.noHour", "Kh\xF4ng t\xEDnh \u0111\u01B0\u1EE3c s\u1ED1 gi\u1EDD t\u0103ng ca")}${label}`;
      return null;
    };
    for (const row of this.newRows()) {
      validationError = validate(row, "");
      if (validationError)
        break;
      savePayloads.push(this.buildPayload(row));
    }
    if (!validationError) {
      for (const row of this.serverRows()) {
        if (!row.selected || !this.isCancelable(row))
          continue;
        validationError = validate(row, ` (${row.applyNo})`);
        if (validationError)
          break;
        if (row.affirmFlag === AFFIRM_APPROVED) {
          resubmitPayloads.push(this.buildPayload(row));
        } else {
          savePayloads.push(this.buildPayload(row));
        }
      }
    }
    if (validationError) {
      this.message.warning(validationError);
      return;
    }
    if (!savePayloads.length && !resubmitPayloads.length) {
      this.message.info(t("applyAtt.msg.nothingToSave", "Kh\xF4ng c\xF3 d\xF2ng m\u1EDBi v\xE0 kh\xF4ng c\xF3 \u0111\u01A1n n\xE0o \u0111\u01B0\u1EE3c ch\u1ECDn \u0111\u1EC3 l\u01B0u!"));
      return;
    }
    if (this.hasTimeOverlap([...savePayloads, ...resubmitPayloads])) {
      this.showError(t("applyAtt.msg.timeOverlap", "C\xE1c d\xF2ng d\u1EEF li\u1EC7u b\u1ECB tr\xF9ng nhau v\u1EC1 th\u1EDDi gian, xin ki\u1EC3m tra l\u1EA1i!"));
      return;
    }
    if (resubmitPayloads.length > 0) {
      this.modal.confirm({
        nzTitle: t("common.save", "L\u01B0u"),
        nzContent: t("arOtf.msg.confirmResubmit", "\u0110\u01A1n n\xE0y \u0111\xE3 \u0111\u01B0\u1EE3c duy\u1EC7t. L\u01B0u s\u1EBD x\xF3a \u0111\u01A1n hi\u1EC7n t\u1EA1i v\xE0 t\u1EA1o l\u1EA1i \u0111\u01A1n m\u1EDBi. B\u1EA1n c\xF3 mu\u1ED1n ti\u1EBFp t\u1EE5c kh\xF4ng?"),
        nzOnOk: () => this.runSaveAll(savePayloads, resubmitPayloads)
      });
    } else {
      this.runSaveAll(savePayloads, resubmitPayloads);
    }
  }
  buildPayload(row) {
    return {
      applyNo: row.applyNo || "",
      personId: row.personId,
      localName: row.localName,
      empId: row.empId,
      otTypeNo: "31",
      otTypeCode: row.otTypeCode,
      applyOtDate: row.applyOtDate,
      otFromTime: row.otFromTime,
      otToTime: row.otToTime,
      otApplyHour: row.otApplyHour,
      applyOtRemark: row.applyOtRemark,
      deductYn: row.deductYn || "0"
    };
  }
  /** Kiểm tra trùng thời gian tăng ca giữa các dòng CÙNG nhân viên sắp lưu - đúng logic
   *  pioabCheckBatchTimeOverlap() bản gốc (coi khoảng to<=from là qua ngày hôm sau để so trùng giờ qua đêm). */
  hasTimeOverlap(payloads) {
    const items = payloads.map((p) => ({
      personId: String(p["personId"] || ""),
      from: /* @__PURE__ */ new Date(String(p["otFromTime"]).replace(" ", "T") + ":00"),
      to: /* @__PURE__ */ new Date(String(p["otToTime"]).replace(" ", "T") + ":00")
    }));
    for (let i = 0; i < items.length; i++) {
      for (let j = i + 1; j < items.length; j++) {
        const a = items[i];
        const b = items[j];
        if (a.personId !== b.personId)
          continue;
        if (isNaN(a.from.getTime()) || isNaN(a.to.getTime()) || isNaN(b.from.getTime()) || isNaN(b.to.getTime()))
          continue;
        const aTo = a.to <= a.from ? new Date(a.to.getTime() + 864e5) : a.to;
        const bTo = b.to <= b.from ? new Date(b.to.getTime() + 864e5) : b.to;
        if (a.from < bTo && b.from < aTo)
          return true;
      }
    }
    return false;
  }
  async runSaveAll(savePayloads, resubmitPayloads) {
    this.saving.set(true);
    const errors = [];
    if (savePayloads.length > 0) {
      try {
        const res = await firstValueFrom(this.api.saveBatch(savePayloads));
        if (!res.success)
          errors.push(res.error || this.i18n.t("applyAtt.saveError", "L\u1ED7i l\u01B0u d\u1EEF li\u1EC7u"));
      } catch {
        errors.push(this.i18n.t("applyAtt.sendError", "L\u1ED7i khi g\u1EEDi d\u1EEF li\u1EC7u!"));
      }
    }
    for (const payload of resubmitPayloads) {
      try {
        const res = await firstValueFrom(this.api.resubmit(payload));
        if (!res.success)
          errors.push(res.error || `${this.i18n.t("applyAtt.saveError", "L\u1ED7i l\u01B0u d\u1EEF li\u1EC7u")} (${payload["applyNo"]})`);
      } catch {
        errors.push(`${this.i18n.t("applyAtt.sendError", "L\u1ED7i khi g\u1EEDi d\u1EEF li\u1EC7u!")} (${payload["applyNo"]})`);
      }
    }
    this.saving.set(false);
    if (errors.length) {
      this.showError(errors.join("; "));
    } else {
      this.message.success(this.i18n.t("common.saveSuccess", "L\u01B0u th\xE0nh c\xF4ng!"));
      this.newRows.set([]);
      this.search();
    }
  }
  // ==================== Lưu lại 1 dòng đã duyệt (nút riêng trên từng dòng) ====================
  resubmitLine(row) {
    const t = (key, fallback) => this.i18n.t(key, fallback);
    if (!row.personId) {
      this.message.warning(t("arOtf.msg.notSelectEmp", "Ch\u01B0a ch\u1ECDn nh\xE2n vi\xEAn"));
      return;
    }
    if (!row.applyOtDate) {
      this.message.warning(t("arOtf.msg.notSelectDate", "Ch\u01B0a ch\u1ECDn ng\xE0y t\u0103ng ca"));
      return;
    }
    if (!row.otFromTime || !row.otToTime) {
      this.message.warning(t("arOtf.msg.notEnterTime", "Ch\u01B0a nh\u1EADp gi\u1EDD t\u0103ng ca"));
      return;
    }
    if (!row.otApplyHour) {
      this.message.warning(t("arOtf.msg.noHour", "Kh\xF4ng t\xEDnh \u0111\u01B0\u1EE3c s\u1ED1 gi\u1EDD t\u0103ng ca"));
      return;
    }
    this.modal.confirm({
      nzTitle: t("common.save", "L\u01B0u"),
      nzContent: t("arOtf.msg.confirmResubmit", "\u0110\u01A1n n\xE0y \u0111\xE3 \u0111\u01B0\u1EE3c duy\u1EC7t. L\u01B0u s\u1EBD x\xF3a \u0111\u01A1n hi\u1EC7n t\u1EA1i v\xE0 t\u1EA1o l\u1EA1i \u0111\u01A1n m\u1EDBi. B\u1EA1n c\xF3 mu\u1ED1n ti\u1EBFp t\u1EE5c kh\xF4ng?"),
      nzOnOk: () => this.doResubmitLine(row)
    });
  }
  doResubmitLine(row) {
    row.resubmitting = true;
    this.api.resubmit(this.buildPayload(row)).subscribe({
      next: (res) => {
        row.resubmitting = false;
        if (res.success) {
          this.message.success(res.message || this.i18n.t("arOtf.msg.resubmitSuccess", "\u0110\xE3 l\u01B0u l\u1EA1i \u0111\u01A1n t\u0103ng ca th\xE0nh c\xF4ng"));
          this.search();
        } else {
          this.showError(res.error || this.i18n.t("applyAtt.saveError", "L\u1ED7i l\u01B0u d\u1EEF li\u1EC7u"));
        }
      },
      error: () => {
        row.resubmitting = false;
        this.showError(this.i18n.t("applyAtt.sendError", "L\u1ED7i khi g\u1EEDi d\u1EEF li\u1EC7u!"));
      }
    });
  }
  // ==================== Hủy đơn đã chọn ====================
  cancelSelected() {
    const t = (key, fallback) => this.i18n.t(key, fallback);
    const applyNos = this.serverRows().filter((r) => this.isCancelable(r) && r.selected && r.applyNo).map((r) => String(r.applyNo));
    if (!applyNos.length) {
      this.message.warning(t("arOtf.msg.noCancelSelected", "Vui l\xF2ng ch\u1ECDn \xEDt nh\u1EA5t m\u1ED9t \u0111\u01A1n t\u0103ng ca \u0111\u1EC3 h\u1EE7y"));
      return;
    }
    this.modal.confirm({
      nzTitle: t("arOtf.cancelBatch", "H\u1EE7y b\u1ECF"),
      nzContent: t("arOtf.msg.confirmCancelBatch", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n h\u1EE7y {n} \u0111\u01A1n t\u0103ng ca \u0111\xE3 ch\u1ECDn kh\xF4ng?").replace("{n}", String(applyNos.length)),
      nzOnOk: () => this.runCancelBatch(applyNos)
    });
  }
  runCancelBatch(applyNos) {
    this.cancelling.set(true);
    this.api.cancelBatch(applyNos).subscribe({
      next: (res) => {
        this.cancelling.set(false);
        if (res.success) {
          this.message.success(this.i18n.t("arOtf.msg.cancelBatchSuccess", "\u0110\xE3 h\u1EE7y th\xE0nh c\xF4ng {n} \u0111\u01A1n t\u0103ng ca").replace("{n}", String(res.count ?? applyNos.length)));
          this.search();
        } else {
          this.showError(res.error || this.i18n.t("applyAtt.msg.cancelFailed", "H\u1EE7y \u0111\u01A1n th\u1EA5t b\u1EA1i!"));
        }
      },
      error: () => {
        this.cancelling.set(false);
        this.showError(this.i18n.t("applyAtt.sendError", "L\u1ED7i khi g\u1EEDi d\u1EEF li\u1EC7u!"));
      }
    });
  }
  // ==================== Import / Export Excel ====================
  downloadTemplate() {
    window.location.href = this.api.downloadTemplateUrl();
  }
  onImportFileSelected(event) {
    const input = event.target;
    const file = input.files?.[0];
    input.value = "";
    if (!file)
      return;
    this.importing.set(true);
    this.api.importExcel(file).subscribe({
      next: (res) => {
        this.importing.set(false);
        if (res?.success)
          this.message.success(res.message || this.i18n.t("common.saveSuccess", "L\u01B0u th\xE0nh c\xF4ng!"));
        else
          this.message.warning(res?.message || this.i18n.t("applyAtt.saveError", "L\u1ED7i l\u01B0u d\u1EEF li\u1EC7u"));
        this.search();
        this.tabs.openTab("/ar/attendanceMintenance/viewImportOtTempList", this.i18n.t("arOtf.importResult", "K\u1EBFt qu\u1EA3 nh\u1EADp"), "external");
      },
      error: () => {
        this.importing.set(false);
        this.showError(this.i18n.t("applyAtt.sendError", "L\u1ED7i khi g\u1EEDi d\u1EEF li\u1EC7u!"));
      }
    });
  }
  // ==================== Helpers ====================
  formatYmd(d) {
    return d ? formatDate(d, "yyyy-MM-dd", "vi") : "";
  }
  formatDt(d) {
    return formatDate(d, "yyyy-MM-dd HH:mm", "vi");
  }
  /** Parse 'yyyy-MM-dd' về Date - trả null nếu chuỗi rỗng/không hợp lệ. */
  parseYmd(value) {
    if (!value)
      return null;
    const match = value.trim().match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (!match)
      return null;
    const [, y, mo, d] = match;
    return new Date(Number(y), Number(mo) - 1, Number(d));
  }
  /** Parse 'yyyy-MM-dd HH:mm[:ss]' về Date - trả null nếu chuỗi rỗng/không hợp lệ. */
  parseDt(value) {
    if (!value)
      return null;
    const normalized = value.trim().replace("T", " ");
    const match = normalized.match(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})/);
    if (!match)
      return null;
    const [, y, mo, d, h, mi] = match;
    return new Date(Number(y), Number(mo) - 1, Number(d), Number(h), Number(mi));
  }
  normalizeDt(value) {
    const d = this.parseDt(value);
    return d ? this.formatDt(d) : "";
  }
  static \u0275fac = function OtApplyBatchInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OtApplyBatchInfoComponent)(\u0275\u0275directiveInject(OtApplyBatchInfoService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService), \u0275\u0275directiveInject(NzModalService), \u0275\u0275directiveInject(TabService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OtApplyBatchInfoComponent, selectors: [["app-ot-apply-batch-info"]], decls: 143, vars: 176, consts: [["importFileInput", ""], ["oabTable", ""], ["oabTotalTpl", ""], ["empDisplay", ""], ["empAuto", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-2"], [1, "form-label"], ["nz-input", "", "name", "searchEmpId", 3, "ngModelChange", "ngModel", "placeholder"], ["nz-input", "", "name", "searchEmpName", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "searchFromDate", "nzFormat", "yyyy-MM-dd", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "searchToDate", "nzFormat", "yyyy-MM-dd", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "searchAffirmFlag", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["name", "searchConfirmFlag", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [1, "col-12", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click", "nzLoading"], [1, "bx", "bx-save"], ["nz-button", "", "nzDanger", "", "type", "button", 3, "click", "nzLoading"], [1, "bx", "bx-x-circle"], [1, "bx", "bx-download"], ["nz-button", "", "type", "button", 3, "click", "nzLoading"], [1, "bx", "bx-upload"], ["type", "file", "hidden", "", "accept", ".xlsx,.xls", 3, "change"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [1, "table-nowrap", 3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "50px"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel", "nzIndeterminate"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "220px"], ["nzWidth", "150px"], ["nzWidth", "180px"], ["nzWidth", "100px", 1, "text-center"], ["nzWidth", "80px", 1, "text-end"], ["nzWidth", "90px", 1, "text-center"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "160px"], ["nzWidth", "80px", 1, "text-center"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["nzWidth", "55vw", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzBodyStyle", "nzFooter"], [4, "nzModalContent"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], [1, "text-center"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["nzFormat", "yyyy-MM-dd", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nzFormat", "yyyy-MM-dd HH:mm", 1, "w-100", 3, "ngModelChange", "ngModel", "nzShowTime"], [1, "text-end"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel"], ["nz-input", "", 3, "ngModelChange", "ngModel"], [3, "nzColor"], [4, "ngIf"], [3, "innerHTML"], ["nz-button", "", "nzDanger", "", "nzSize", "small", "nzShape", "circle", "title", "Lo\u1EA1i b\u1ECF d\xF2ng n\xE0y", 3, "click", 4, "ngIf"], ["nz-button", "", "nzType", "primary", "nzSize", "small", "nzShape", "circle", "title", "L\u01B0u l\u1EA1i \u0111\u01A1n", 3, "nzLoading", "click", 4, "ngIf"], ["nz-input", "", 3, "ngModelChange", "ngModel", "nzAutocomplete", "placeholder"], [3, "nzValue", "click", 4, "ngFor", "ngForOf"], [3, "click", "nzValue"], [1, "text-muted"], ["href", "javascript:void(0)", 3, "click"], ["nz-button", "", "nzDanger", "", "nzSize", "small", "nzShape", "circle", "title", "Lo\u1EA1i b\u1ECF d\xF2ng n\xE0y", 3, "click"], [1, "bx", "bx-minus"], ["nz-button", "", "nzType", "primary", "nzSize", "small", "nzShape", "circle", "title", "L\u01B0u l\u1EA1i \u0111\u01A1n", 3, "click", "nzLoading"], [1, "fw-bold", "mb-2"], ["nzBordered", "", "nzSize", "small", 1, "mb-3", 3, "nzColumn"], [3, "nzTitle"], [3, "nzTitle", "nzSpan"], [1, "table-responsive"], ["nzSize", "small", 3, "nzData", "nzShowPagination"], [1, "text-center", 2, "width", "50px"], [1, "text-center", 2, "width", "90px"], [1, "text-center", 2, "width", "110px"], [1, "text-center", 2, "width", "170px"], [2, "width", "120px"], [4, "ngFor", "ngForOf"], ["colspan", "7", 1, "text-center", "text-muted"]], template: function OtApplyBatchInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "nz-card", 7)(3, "form", 8);
      \u0275\u0275listener("ngSubmit", function OtApplyBatchInfoComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 9)(5, "label", 10);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 11);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function OtApplyBatchInfoComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchEmpId, $event) || (ctx.searchEmpId = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 9)(11, "label", 10);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "input", 12);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function OtApplyBatchInfoComponent_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchEmpName, $event) || (ctx.searchEmpName = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 9)(17, "label", 10);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "nz-date-picker", 13);
      \u0275\u0275twoWayListener("ngModelChange", function OtApplyBatchInfoComponent_Template_nz_date_picker_ngModelChange_20_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchFromDate, $event) || (ctx.searchFromDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 9)(22, "label", 10);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "nz-date-picker", 14);
      \u0275\u0275twoWayListener("ngModelChange", function OtApplyBatchInfoComponent_Template_nz_date_picker_ngModelChange_25_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchToDate, $event) || (ctx.searchToDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 9)(27, "label", 10);
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "nz-select", 15);
      \u0275\u0275pipe(31, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function OtApplyBatchInfoComponent_Template_nz_select_ngModelChange_30_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchAffirmFlag, $event) || (ctx.searchAffirmFlag = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(32, OtApplyBatchInfoComponent_nz_option_32_Template, 2, 5, "nz-option", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 9)(34, "label", 10);
      \u0275\u0275text(35);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "nz-select", 17);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function OtApplyBatchInfoComponent_Template_nz_select_ngModelChange_37_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchConfirmFlag, $event) || (ctx.searchConfirmFlag = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(39, OtApplyBatchInfoComponent_nz_option_39_Template, 2, 5, "nz-option", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 18)(41, "button", 19);
      \u0275\u0275element(42, "i", 20);
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "button", 21);
      \u0275\u0275listener("click", function OtApplyBatchInfoComponent_Template_button_click_45_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(46, "i", 22);
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "button", 23);
      \u0275\u0275listener("click", function OtApplyBatchInfoComponent_Template_button_click_49_listener() {
        return ctx.addEmptyRow();
      });
      \u0275\u0275element(50, "i", 24);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "button", 25);
      \u0275\u0275listener("click", function OtApplyBatchInfoComponent_Template_button_click_53_listener() {
        return ctx.saveAll();
      });
      \u0275\u0275element(54, "i", 26);
      \u0275\u0275text(55);
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "button", 27);
      \u0275\u0275listener("click", function OtApplyBatchInfoComponent_Template_button_click_57_listener() {
        return ctx.cancelSelected();
      });
      \u0275\u0275element(58, "i", 28);
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "button", 21);
      \u0275\u0275listener("click", function OtApplyBatchInfoComponent_Template_button_click_61_listener() {
        return ctx.downloadTemplate();
      });
      \u0275\u0275element(62, "i", 29);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "button", 30);
      \u0275\u0275listener("click", function OtApplyBatchInfoComponent_Template_button_click_65_listener() {
        \u0275\u0275restoreView(_r1);
        const importFileInput_r4 = \u0275\u0275reference(70);
        return \u0275\u0275resetView(importFileInput_r4.click());
      });
      \u0275\u0275element(66, "i", 31);
      \u0275\u0275text(67);
      \u0275\u0275pipe(68, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "input", 32, 0);
      \u0275\u0275listener("change", function OtApplyBatchInfoComponent_Template_input_change_69_listener($event) {
        return ctx.onImportFileSelected($event);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(71, "nz-card");
      \u0275\u0275template(72, OtApplyBatchInfoComponent_nz_alert_72_Template, 1, 1, "nz-alert", 33);
      \u0275\u0275elementStart(73, "nz-table", 34, 1)(75, "thead")(76, "tr")(77, "th", 35)(78, "label", 36);
      \u0275\u0275listener("ngModelChange", function OtApplyBatchInfoComponent_Template_label_ngModelChange_78_listener($event) {
        return ctx.toggleSelectAll($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "th", 37);
      \u0275\u0275text(80);
      \u0275\u0275pipe(81, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "th", 38);
      \u0275\u0275text(83);
      \u0275\u0275pipe(84, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "th", 39);
      \u0275\u0275text(86);
      \u0275\u0275pipe(87, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "th", 39);
      \u0275\u0275text(89);
      \u0275\u0275pipe(90, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "th", 39);
      \u0275\u0275text(92);
      \u0275\u0275pipe(93, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "th", 40);
      \u0275\u0275text(95);
      \u0275\u0275pipe(96, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "th", 40);
      \u0275\u0275text(98);
      \u0275\u0275pipe(99, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "th", 41);
      \u0275\u0275text(101);
      \u0275\u0275pipe(102, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "th", 41);
      \u0275\u0275text(104);
      \u0275\u0275pipe(105, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "th", 42);
      \u0275\u0275text(107);
      \u0275\u0275pipe(108, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "th", 43);
      \u0275\u0275text(110);
      \u0275\u0275pipe(111, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "th", 38);
      \u0275\u0275text(113);
      \u0275\u0275pipe(114, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "th", 44);
      \u0275\u0275text(116);
      \u0275\u0275pipe(117, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "th", 44);
      \u0275\u0275text(119);
      \u0275\u0275pipe(120, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "th", 44);
      \u0275\u0275text(122);
      \u0275\u0275pipe(123, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "th", 45);
      \u0275\u0275text(125);
      \u0275\u0275pipe(126, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "th", 45);
      \u0275\u0275text(128);
      \u0275\u0275pipe(129, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "th", 38);
      \u0275\u0275text(131);
      \u0275\u0275pipe(132, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "th", 46);
      \u0275\u0275text(134);
      \u0275\u0275pipe(135, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(136, "tbody");
      \u0275\u0275template(137, OtApplyBatchInfoComponent_tr_137_Template, 45, 33, "tr", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275template(138, OtApplyBatchInfoComponent_ng_template_138_Template, 2, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(140, "nz-modal", 48);
      \u0275\u0275pipe(141, "translate");
      \u0275\u0275listener("nzOnCancel", function OtApplyBatchInfoComponent_Template_nz_modal_nzOnCancel_140_listener() {
        return ctx.closeDetail();
      });
      \u0275\u0275template(142, OtApplyBatchInfoComponent_ng_container_142_Template, 3, 2, "ng-container", 49);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const oabTable_r22 = \u0275\u0275reference(74);
      const oabTotalTpl_r23 = \u0275\u0275reference(139);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 63, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchEmpId);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 66, "common.placeholder.enterEmpId", "Nh\u1EADp m\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 69, "common.empName", "T\xEAn nh\xE2n vi\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchEmpName);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(15, 72, "common.placeholder.enterEmpName", "Nh\u1EADp t\xEAn nh\xE2n vi\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 75, "common.fromDate", "T\u1EEB ng\xE0y"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchFromDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 78, "common.toDate", "\u0110\u1EBFn ng\xE0y"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchToDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 81, "arOtf.affirmFlag", "Tr\u1EA1ng th\xE1i \u0111\u01A1n t\u0103ng ca"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchAffirmFlag);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(31, 84, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.affirmFlagOptions);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 87, "arOtf.confirmFlag", "Tr\u1EA1ng th\xE1i x\xE1c nh\u1EADn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchConfirmFlag);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(38, 90, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.confirmFlagOptions);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(44, 93, "common.search", "T\xECm ki\u1EBFm"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(48, 96, "common.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(52, 99, "common.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.saving());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(56, 102, "common.save", "L\u01B0u"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.cancelling());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(60, 105, "arOtf.cancelBatch", "H\u1EE7y b\u1ECF"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(64, 108, "common.downloadTemplate", "T\u1EA3i File M\u1EABu"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.importing());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(68, 111, "common.importExcel", "Import Excel"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", oabTotalTpl_r23)("nzScroll", \u0275\u0275pureFunction0(174, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.allCancelableSelected)("nzIndeterminate", ctx.someCancelableSelected);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(81, 114, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(84, 117, "common.empName", "Nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(87, 120, "common.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(90, 123, "arOtf.otType", "Lo\u1EA1i t\u0103ng ca"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(93, 126, "arOtf.otDate", "Ng\xE0y t\u0103ng ca"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(96, 129, "arOtf.fromHour", "T\u1EEB gi\u1EDD"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(99, 132, "arOtf.toHour", "\u0110\u1EBFn gi\u1EDD"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(102, 135, "ps.col.indoorTime", "Gi\u1EDD v\xE0o"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(105, 138, "ps.col.outdoorTime", "Gi\u1EDD ra"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(108, 141, "common.hours", "S\u1ED1 gi\u1EDD"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(111, 144, "impOt.deductYn", "Tr\u1EEB \u0103n ngh\u1EC9"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(114, 147, "common.reason", "L\xFD do"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(117, 150, "arOtf.otTotalMonth", "T\u1ED5ng t\u0103ng ca th\xE1ng n\xE0y"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(120, 153, "arOtf.otTotalYear", "T\u1ED5ng t\u0103ng ca n\u0103m n\xE0y"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(123, 156, "common.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(126, 159, "common.creator", "Ng\u01B0\u1EDDi t\u1EA1o"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(129, 162, "common.updater", "Ng\u01B0\u1EDDi s\u1EEDa"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(132, 165, "common.approver", "Ng\u01B0\u1EDDi duy\u1EC7t"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(135, 168, "common.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", oabTable_r22.data)("ngForTrackBy", ctx.trackByRow);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.detailVisible())("nzTitle", \u0275\u0275pipeBind2(141, 171, "arOtf.otInfo", "Th\xF4ng tin t\u0103ng ca"))("nzBodyStyle", \u0275\u0275pureFunction0(175, _c1))("nzFooter", null);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzDatePickerModule, NzDatePickerComponent, NzCheckboxModule, NzCheckboxComponent, NzAutocompleteModule, NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzTagModule, NzTagComponent, NzAlertModule, NzAlertComponent, NzDescriptionsModule, NzDescriptionsComponent, NzDescriptionsItemComponent, TranslatePipe], styles: ["\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=ot-apply-batch-info.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OtApplyBatchInfoComponent, [{
    type: Component,
    args: [{ selector: "app-ot-apply-batch-info", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzSelectModule,
      NzButtonModule,
      NzDatePickerModule,
      NzCheckboxModule,
      NzAutocompleteModule,
      NzModalModule,
      NzTagModule,
      NzAlertModule,
      NzDescriptionsModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm - \u0111\u1EE9ng im khi cu\u1ED9n (xem .sticky-filter-card trong styles.css) -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3" (ngSubmit)="search()">
        <div class="col-md-2">
          <label class="form-label">{{ 'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</label>
          <input nz-input [(ngModel)]="searchEmpId" name="searchEmpId"
                 [placeholder]="'common.placeholder.enterEmpId' | translate:'Nh\u1EADp m\xE3 nh\xE2n vi\xEAn'">
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'common.empName' | translate:'T\xEAn nh\xE2n vi\xEAn' }}</label>
          <input nz-input [(ngModel)]="searchEmpName" name="searchEmpName"
                 [placeholder]="'common.placeholder.enterEmpName' | translate:'Nh\u1EADp t\xEAn nh\xE2n vi\xEAn'">
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'common.fromDate' | translate:'T\u1EEB ng\xE0y' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="searchFromDate" name="searchFromDate" nzFormat="yyyy-MM-dd"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'common.toDate' | translate:'\u0110\u1EBFn ng\xE0y' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="searchToDate" name="searchToDate" nzFormat="yyyy-MM-dd"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'arOtf.affirmFlag' | translate:'Tr\u1EA1ng th\xE1i \u0111\u01A1n t\u0103ng ca' }}</label>
          <nz-select class="w-100" [(ngModel)]="searchAffirmFlag" name="searchAffirmFlag" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let o of affirmFlagOptions" [nzValue]="o.value" [nzLabel]="o.labelKey | translate:o.fallback"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'arOtf.confirmFlag' | translate:'Tr\u1EA1ng th\xE1i x\xE1c nh\u1EADn' }}</label>
          <nz-select class="w-100" [(ngModel)]="searchConfirmFlag" name="searchConfirmFlag" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let o of confirmFlagOptions" [nzValue]="o.value" [nzLabel]="o.labelKey | translate:o.fallback"></nz-option>
          </nz-select>
        </div>
        <div class="col-12 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'common.search' | translate:'T\xECm ki\u1EBFm' }}
          </button>
          <button nz-button type="button" (click)="clearSearch()">
            <i class="bx bx-x"></i> {{ 'common.clearFilter' | translate:'X\xF3a l\u1ECDc' }}
          </button>
          <button nz-button nzType="primary" type="button" (click)="addEmptyRow()">
            <i class="bx bx-plus"></i> {{ 'common.addNew' | translate:'Th\xEAm m\u1EDBi' }}
          </button>
          <button nz-button nzType="primary" type="button" [nzLoading]="saving()" (click)="saveAll()">
            <i class="bx bx-save"></i> {{ 'common.save' | translate:'L\u01B0u' }}
          </button>
          <button nz-button nzDanger type="button" [nzLoading]="cancelling()" (click)="cancelSelected()">
            <i class="bx bx-x-circle"></i> {{ 'arOtf.cancelBatch' | translate:'H\u1EE7y b\u1ECF' }}
          </button>
          <button nz-button type="button" (click)="downloadTemplate()">
            <i class="bx bx-download"></i> {{ 'common.downloadTemplate' | translate:'T\u1EA3i File M\u1EABu' }}
          </button>
          <button nz-button type="button" [nzLoading]="importing()" (click)="importFileInput.click()">
            <i class="bx bx-upload"></i> {{ 'common.importExcel' | translate:'Import Excel' }}
          </button>
          <input #importFileInput type="file" hidden accept=".xlsx,.xls" (change)="onImportFileSelected($event)">
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="oabTotalTpl"
                [nzScroll]="{ x: '2500px', y: 'calc(100vh - 320px)' }"
                class="table-nowrap" #oabTable>
        <!-- nzWidth khai b\xE1o cho t\u1EEBng c\u1ED9t \u0111\u1EC3 \u0111\u1ED3ng b\u1ED9 \u0111\u1ED9 r\u1ED9ng header/body khi d\xF9ng nzScroll (xem
             gi\u1EA3i th\xEDch \u1EDF dept-ot-apply-info.component.html). -->
        <thead>
          <tr>
            <th nzWidth="50px">
              <label nz-checkbox [ngModel]="allCancelableSelected" [nzIndeterminate]="someCancelableSelected"
                     (ngModelChange)="toggleSelectAll($event)"></label>
            </th>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th nzWidth="220px">{{ 'common.empName' | translate:'Nh\xE2n vi\xEAn' }}</th>
            <th nzWidth="150px">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
            <th nzWidth="150px">{{ 'arOtf.otType' | translate:'Lo\u1EA1i t\u0103ng ca' }}</th>
            <th nzWidth="150px">{{ 'arOtf.otDate' | translate:'Ng\xE0y t\u0103ng ca' }}</th>
            <th nzWidth="180px">{{ 'arOtf.fromHour' | translate:'T\u1EEB gi\u1EDD' }}</th>
            <th nzWidth="180px">{{ 'arOtf.toHour' | translate:'\u0110\u1EBFn gi\u1EDD' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'ps.col.indoorTime' | translate:'Gi\u1EDD v\xE0o' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'ps.col.outdoorTime' | translate:'Gi\u1EDD ra' }}</th>
            <th class="text-end" nzWidth="80px">{{ 'common.hours' | translate:'S\u1ED1 gi\u1EDD' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'impOt.deductYn' | translate:'Tr\u1EEB \u0103n ngh\u1EC9' }}</th>
            <th nzWidth="220px">{{ 'common.reason' | translate:'L\xFD do' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'arOtf.otTotalMonth' | translate:'T\u1ED5ng t\u0103ng ca th\xE1ng n\xE0y' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'arOtf.otTotalYear' | translate:'T\u1ED5ng t\u0103ng ca n\u0103m n\xE0y' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
            <th nzWidth="160px">{{ 'common.creator' | translate:'Ng\u01B0\u1EDDi t\u1EA1o' }}</th>
            <th nzWidth="160px">{{ 'common.updater' | translate:'Ng\u01B0\u1EDDi s\u1EEDa' }}</th>
            <th nzWidth="220px">{{ 'common.approver' | translate:'Ng\u01B0\u1EDDi duy\u1EC7t' }}</th>
            <th class="text-center" nzWidth="80px">{{ 'common.action' | translate:'Thao t\xE1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of oabTable.data; let i = index; trackBy: trackByRow">
            <td class="text-center">
              <label nz-checkbox *ngIf="isCancelable(row)" [(ngModel)]="row.selected"></label>
            </td>
            <td class="text-center">{{ i + 1 }}</td>

            <!-- Nh\xE2n vi\xEAn: d\xF2ng m\u1EDBi -> g\xF5 t\xECm (nz-autocomplete), d\xF2ng \u0111\xE3 l\u01B0u -> link m\u1EDF chi ti\u1EBFt \u0111\u01A1n -->
            <td>
              <ng-container *ngIf="row.isNew; else empDisplay">
                <input nz-input [ngModel]="row.empKeyword" (ngModelChange)="onEmpKeywordChange(row, $event)"
                       [nzAutocomplete]="empAuto" [placeholder]="'arOtf.selectEmp' | translate:'Ch\u1ECDn NV...'">
                <nz-autocomplete #empAuto>
                  <nz-auto-option *ngFor="let opt of row.empOptions" [nzValue]="opt" (click)="onEmpSelected(row, opt)">
                    {{ opt.empId }} - {{ opt.localName }} <small class="text-muted">({{ opt.deptName }})</small>
                  </nz-auto-option>
                </nz-autocomplete>
              </ng-container>
              <ng-template #empDisplay>
                <a href="javascript:void(0)" (click)="openDetail(row)">{{ row.empId }} - {{ row.localName }}</a>
              </ng-template>
            </td>

            <td [attr.title]="row.deptName || null">{{ row.deptName }}</td>
            <td [attr.title]="row.otTypeName || null">{{ row.otTypeName }}</td>

            <td>
              <nz-date-picker class="w-100" [ngModel]="row.applyOtDateObj" (ngModelChange)="onDateChange(row, $event)"
                              nzFormat="yyyy-MM-dd"></nz-date-picker>
            </td>
            <td>
              <nz-date-picker class="w-100" [ngModel]="row.otFromTimeObj" (ngModelChange)="onTimeChange(row, 'from', $event)"
                              nzFormat="yyyy-MM-dd HH:mm" [nzShowTime]="{ nzFormat: 'HH:mm' }"></nz-date-picker>
            </td>
            <td>
              <nz-date-picker class="w-100" [ngModel]="row.otToTimeObj" (ngModelChange)="onTimeChange(row, 'to', $event)"
                              nzFormat="yyyy-MM-dd HH:mm" [nzShowTime]="{ nzFormat: 'HH:mm' }"></nz-date-picker>
            </td>
            <td class="text-center">{{ row.indoorTime }}</td>
            <td class="text-center">{{ row.outdoorTime }}</td>
            <td class="text-end">{{ row.otApplyHour }}</td>
            <td class="text-center">
              <label nz-checkbox [ngModel]="row.deductYn === '1'" (ngModelChange)="onDeductYnChange(row, $event)"></label>
            </td>
            <td>
              <input nz-input [(ngModel)]="row.applyOtRemark">
            </td>
            <td class="text-center">{{ row.otTotalMonth }}</td>
            <td class="text-center">{{ row.otTotalYear }}</td>
            <td class="text-center">
              <nz-tag [nzColor]="affirmBadge(row.affirmFlag).color || undefined">
                {{ affirmBadge(row.affirmFlag).labelKey ? (affirmBadge(row.affirmFlag).labelKey | translate:affirmBadge(row.affirmFlag).fallback) : affirmBadge(row.affirmFlag).fallback }}
              </nz-tag>
            </td>
            <td>
              <ng-container *ngIf="!row.isNew">{{ row.createdBy }}<br><small class="text-muted">{{ row.createDate }}</small></ng-container>
            </td>
            <td>
              <ng-container *ngIf="!row.isNew">{{ row.updatedBy }}<br><small class="text-muted">{{ row.updateDate }}</small></ng-container>
            </td>
            <td [attr.title]="row.affirmStr || null" [innerHTML]="row.affirmStr"></td>

            <td class="text-center">
              <button *ngIf="row.isNew" nz-button nzDanger nzSize="small" nzShape="circle" (click)="removeNewRow(row)" title="Lo\u1EA1i b\u1ECF d\xF2ng n\xE0y">
                <i class="bx bx-minus"></i>
              </button>
              <button *ngIf="!row.isNew && row.affirmFlag === AFFIRM_APPROVED" nz-button nzType="primary" nzSize="small" nzShape="circle"
                      [nzLoading]="row.resubmitting" (click)="resubmitLine(row)" title="L\u01B0u l\u1EA1i \u0111\u01A1n">
                <i class="bx bx-save"></i>
              </button>
            </td>
          </tr>
        </tbody>
        <ng-template #oabTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal chi ti\u1EBFt \u0111\u01A1n t\u0103ng ca (d\xF2ng \u0111\xE3 l\u01B0u) -->
<nz-modal [nzVisible]="detailVisible()" [nzTitle]="'arOtf.otInfo' | translate:'Th\xF4ng tin t\u0103ng ca'" nzWidth="55vw"
          [nzBodyStyle]="{ 'max-height': '75vh', 'overflow-y': 'auto' }"
          (nzOnCancel)="closeDetail()" [nzFooter]="null">
  <ng-container *nzModalContent>
    <nz-alert *ngIf="detailErrorMessage()" nzType="error" [nzMessage]="detailErrorMessage() ?? ''" class="mb-3"></nz-alert>
    <ng-container *ngIf="!detailLoading() && detailData() as d">
      <h6 class="fw-bold mb-2">{{ 'arOtf.empInfo' | translate:'Th\xF4ng tin nh\xE2n vi\xEAn' }}</h6>
      <nz-descriptions nzBordered [nzColumn]="2" nzSize="small" class="mb-3">
        <nz-descriptions-item [nzTitle]="'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn'">{{ d.employeeInfo?.['empId'] }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'common.empName' | translate:'H\u1ECD t\xEAn'">{{ d.employeeInfo?.['localName'] }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'common.deptName' | translate:'Ph\xF2ng ban'">{{ d.employeeInfo?.['deptName'] }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'arOtf.otType' | translate:'Lo\u1EA1i t\u0103ng ca'">{{ d.otInfo?.['otTypeName'] }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'arOtf.fromHour' | translate:'T\u1EEB gi\u1EDD'">{{ d.otInfo?.['otFromTime'] }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'arOtf.toHour' | translate:'\u0110\u1EBFn gi\u1EDD'">{{ d.otInfo?.['otToTime'] }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'common.hours' | translate:'S\u1ED1 gi\u1EDD'">{{ d.otInfo?.['otApplyHour'] }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'common.status' | translate:'Tr\u1EA1ng th\xE1i'">{{ d.otInfo?.['affirmFlagName'] }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'common.reason' | translate:'L\xFD do'" [nzSpan]="2">{{ d.otInfo?.['applyOtRemark'] }}</nz-descriptions-item>
      </nz-descriptions>

      <h6 class="fw-bold mb-2">{{ 'arOtf.approvalSeq' | translate:'Tr\xECnh t\u1EF1 duy\u1EC7t' }}</h6>
      <div class="table-responsive">
        <nz-table [nzData]="d.approvalList" [nzShowPagination]="false" nzSize="small">
          <thead>
            <tr>
              <th class="text-center" style="width:50px">{{ 'common.stt' | translate:'STT' }}</th>
              <th class="text-center" style="width:90px">{{ 'arOtf.approvalSeq' | translate:'Tr\xECnh t\u1EF1 duy\u1EC7t' }}</th>
              <th class="text-center" style="width:110px">{{ 'arOtf.approvalStatus' | translate:'Tr\u1EA1ng th\xE1i duy\u1EC7t' }}</th>
              <th>{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
              <th>{{ 'arOtf.opinion' | translate:'\xDD ki\u1EBFn' }}</th>
              <th class="text-center" style="width:170px">{{ 'arOtf.actionTime' | translate:'Th\u1EDDi gian th\u1EF1c hi\u1EC7n' }}</th>
              <th style="width:120px">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="!d.approvalList?.length">
              <td colspan="7" class="text-center text-muted">{{ 'arOtf.noApprovalData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u ph\xEA duy\u1EC7t' }}</td>
            </tr>
            <tr *ngFor="let item of d.approvalList; let i = index">
              <td class="text-center">{{ approvalStt(item, i) }}</td>
              <td class="text-center">{{ item.affirmTypeName }}</td>
              <td class="text-center">{{ item.affirmFlagName }}</td>
              <td>{{ item.affirmName }}</td>
              <td>{{ item.affirmContent }}</td>
              <td class="text-center">{{ item.updateDate }}</td>
              <td>{{ item.deptName }}</td>
            </tr>
          </tbody>
        </nz-table>
      </div>
    </ng-container>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/ot-apply-batch-info/ot-apply-batch-info.component.css */\ntable td,\ntable th {\n  white-space: nowrap;\n}\ntable td {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=ot-apply-batch-info.component.css.map */\n"] }]
  }], () => [{ type: OtApplyBatchInfoService }, { type: I18nService }, { type: NzMessageService }, { type: NzModalService }, { type: TabService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OtApplyBatchInfoComponent, { className: "OtApplyBatchInfoComponent", filePath: "src/app/ot-apply-batch-info/ot-apply-batch-info.component.ts", lineNumber: 129 });
})();
export {
  OtApplyBatchInfoComponent
};
//# debugId=b0d8a7fb-2443-5165-bd1a-48cc3d647c9f
//# sourceMappingURL=chunk-4EKEKTN2.js.map
