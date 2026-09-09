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

// src/app/apply-attendance-batch-info/apply-attendance-batch-info.service.ts
var API_BASE = "/ar/attendanceMintenance/api/leaveApply";
var EXCEL_TEMPLATE_NAME = "AttendanceApply_add_Template";
var ApplyAttendanceBatchInfoService = class _ApplyAttendanceBatchInfoService {
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
  getEmpDefaultInfo(personId) {
    return this.http.get(`${API_BASE}/empDefaultInfo`, {
      params: new HttpParams().set("personId", personId),
      withCredentials: true
    });
  }
  getAffirmorsPreview(personId, leaveTypeCode) {
    let httpParams = new HttpParams().set("personId", personId);
    if (leaveTypeCode)
      httpParams = httpParams.set("leaveTypeCode", leaveTypeCode);
    return this.http.get(`${API_BASE}/affirmorsPreview`, { params: httpParams, withCredentials: true });
  }
  calcLeaveLength(personId, fromTime, toTime, leaveTypeCode) {
    let httpParams = new HttpParams().set("personId", personId).set("fromTime", fromTime).set("toTime", toTime);
    if (leaveTypeCode)
      httpParams = httpParams.set("leaveTypeCode", leaveTypeCode);
    return this.http.get(`${API_BASE}/calcLeaveLength`, { params: httpParams, withCredentials: true });
  }
  save(payload) {
    return this.http.post(`${API_BASE}/save`, payload, { withCredentials: true });
  }
  resubmit(payload) {
    return this.http.post(`${API_BASE}/resubmit`, payload, { withCredentials: true });
  }
  cancel(applyNo) {
    return this.http.post(`${API_BASE}/cancel`, { applyNo }, { withCredentials: true });
  }
  searchEmployees(keyword, empOffice) {
    let httpParams = new HttpParams().set("keyword", keyword);
    if (empOffice)
      httpParams = httpParams.set("empOffice", empOffice);
    return this.http.get("/hrm/empinfo/api/employee/search", { params: httpParams, withCredentials: true });
  }
  getCodeList(parentCodeNo) {
    return this.http.get("/sys/api/getCode/list", {
      params: new HttpParams().set("parentCodeNo", parentCodeNo),
      withCredentials: true
    });
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
  static \u0275fac = function ApplyAttendanceBatchInfoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApplyAttendanceBatchInfoService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApplyAttendanceBatchInfoService, factory: _ApplyAttendanceBatchInfoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApplyAttendanceBatchInfoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/apply-attendance-batch-info/apply-attendance-batch-info.component.ts
var _c0 = () => ({ x: "2400px", y: "calc(100vh - 320px)" });
var _c1 = () => ({ "max-height": "75vh", "overflow-y": "auto" });
var _c2 = () => ({ nzFormat: "HH:mm" });
function ApplyAttendanceBatchInfoComponent_nz_option_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 52);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const o_r2 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r2.value)("nzLabel", \u0275\u0275pipeBind2(1, 2, o_r2.labelKey, o_r2.fallback));
  }
}
function ApplyAttendanceBatchInfoComponent_nz_option_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 52);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const o_r3 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r3.value)("nzLabel", \u0275\u0275pipeBind2(1, 2, o_r3.labelKey, o_r3.fallback));
  }
}
function ApplyAttendanceBatchInfoComponent_nz_option_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 52);
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r4.codeNo)("nzLabel", c_r4.codeName);
  }
}
function ApplyAttendanceBatchInfoComponent_nz_alert_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 53);
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r5.errorMessage() ?? "");
  }
}
function ApplyAttendanceBatchInfoComponent_tr_132_label_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 65);
    \u0275\u0275twoWayListener("ngModelChange", function ApplyAttendanceBatchInfoComponent_tr_132_label_2_Template_label_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const row_r9 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r9.selected, $event) || (row_r9.selected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r9.selected);
    \u0275\u0275control();
  }
}
function ApplyAttendanceBatchInfoComponent_tr_132_ng_container_6_nz_auto_option_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-auto-option", 68);
    \u0275\u0275listener("click", function ApplyAttendanceBatchInfoComponent_tr_132_ng_container_6_nz_auto_option_5_Template_nz_auto_option_click_0_listener() {
      const opt_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const row_r9 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onEmpSelected(row_r9, opt_r12));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "small", 69);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r12 = ctx.$implicit;
    \u0275\u0275property("nzValue", opt_r12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", opt_r12.empId, " - ", opt_r12.localName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", opt_r12.deptName, ")");
  }
}
function ApplyAttendanceBatchInfoComponent_tr_132_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "input", 66);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("ngModelChange", function ApplyAttendanceBatchInfoComponent_tr_132_ng_container_6_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const row_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onEmpKeywordChange(row_r9, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(3, "nz-autocomplete", null, 4);
    \u0275\u0275template(5, ApplyAttendanceBatchInfoComponent_tr_132_ng_container_6_nz_auto_option_5_Template, 4, 4, "nz-auto-option", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const empAuto_r13 = \u0275\u0275reference(4);
    const row_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", row_r9.empKeyword)("nzAutocomplete", empAuto_r13)("placeholder", \u0275\u0275pipeBind2(2, 4, "applyAtt.selectEmp", "Ch\u1ECDn NV..."));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", row_r9.empOptions);
  }
}
function ApplyAttendanceBatchInfoComponent_tr_132_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 70);
    \u0275\u0275listener("click", function ApplyAttendanceBatchInfoComponent_tr_132_ng_template_7_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const row_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.openDetail(row_r9));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", row_r9.empId, " - ", row_r9.localName);
  }
}
function ApplyAttendanceBatchInfoComponent_tr_132_nz_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 52);
  }
  if (rf & 2) {
    const c_r15 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r15.codeNo)("nzLabel", c_r15.codeName);
  }
}
function ApplyAttendanceBatchInfoComponent_tr_132_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "br");
    \u0275\u0275elementStart(3, "small", 69);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.createdBy);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r9.createDate);
  }
}
function ApplyAttendanceBatchInfoComponent_tr_132_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275element(2, "br");
    \u0275\u0275elementStart(3, "small", 69);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.updatedBy);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r9.updateDate);
  }
}
function ApplyAttendanceBatchInfoComponent_tr_132_button_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 71);
    \u0275\u0275listener("click", function ApplyAttendanceBatchInfoComponent_tr_132_button_38_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const row_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.removeNewRow(row_r9));
    });
    \u0275\u0275element(1, "i", 72);
    \u0275\u0275elementEnd();
  }
}
function ApplyAttendanceBatchInfoComponent_tr_132_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 73);
    \u0275\u0275listener("click", function ApplyAttendanceBatchInfoComponent_tr_132_button_39_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const row_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.resubmitLine(row_r9));
    });
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("nzLoading", row_r9.resubmitting);
  }
}
function ApplyAttendanceBatchInfoComponent_tr_132_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 54);
    \u0275\u0275template(2, ApplyAttendanceBatchInfoComponent_tr_132_label_2_Template, 1, 1, "label", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275template(6, ApplyAttendanceBatchInfoComponent_tr_132_ng_container_6_Template, 6, 7, "ng-container", 56)(7, ApplyAttendanceBatchInfoComponent_tr_132_ng_template_7_Template, 2, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 57);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "nz-select", 58);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ApplyAttendanceBatchInfoComponent_tr_132_Template_nz_select_ngModelChange_16_listener($event) {
      const row_r9 = \u0275\u0275restoreView(_r7).$implicit;
      \u0275\u0275twoWayBindingSet(row_r9.leaveTypeCode, $event) || (row_r9.leaveTypeCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ApplyAttendanceBatchInfoComponent_tr_132_Template_nz_select_ngModelChange_16_listener() {
      const row_r9 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onLeaveTypeChange(row_r9));
    });
    \u0275\u0275template(18, ApplyAttendanceBatchInfoComponent_tr_132_nz_option_18_Template, 1, 2, "nz-option", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td")(20, "nz-date-picker", 59);
    \u0275\u0275listener("ngModelChange", function ApplyAttendanceBatchInfoComponent_tr_132_Template_nz_date_picker_ngModelChange_20_listener($event) {
      const row_r9 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onDateChange(row_r9, "from", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "nz-date-picker", 59);
    \u0275\u0275listener("ngModelChange", function ApplyAttendanceBatchInfoComponent_tr_132_Template_nz_date_picker_ngModelChange_22_listener($event) {
      const row_r9 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onDateChange(row_r9, "to", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 57);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td")(26, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function ApplyAttendanceBatchInfoComponent_tr_132_Template_input_ngModelChange_26_listener($event) {
      const row_r9 = \u0275\u0275restoreView(_r7).$implicit;
      \u0275\u0275twoWayBindingSet(row_r9.leaveReason, $event) || (row_r9.leaveReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td", 54)(28, "nz-tag", 61);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "td");
    \u0275\u0275template(32, ApplyAttendanceBatchInfoComponent_tr_132_ng_container_32_Template, 5, 2, "ng-container", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "td");
    \u0275\u0275template(34, ApplyAttendanceBatchInfoComponent_tr_132_ng_container_34_Template, 5, 2, "ng-container", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "td");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "td", 54);
    \u0275\u0275template(38, ApplyAttendanceBatchInfoComponent_tr_132_button_38_Template, 2, 0, "button", 63)(39, ApplyAttendanceBatchInfoComponent_tr_132_button_39_Template, 2, 1, "button", 64);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    const i_r18 = ctx.index;
    const empDisplay_r19 = \u0275\u0275reference(8);
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !row_r9.isNew && row_r9.affirmFlag === ctx_r5.AFFIRM_APPROVED);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r18 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r9.isNew)("ngIfElse", empDisplay_r19);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("title", row_r9.deptName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.deptName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.annualLeaveCount || "0");
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r9.shiftName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.shiftName);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", row_r9.leaveTypeCode);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(17, 26, "applyAtt.selectLeaveType", "-- Lo\u1EA1i ngh\u1EC9 --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r5.typeList());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", row_r9.fromDate)("nzShowTime", \u0275\u0275pureFunction0(32, _c2));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", row_r9.toDate)("nzShowTime", \u0275\u0275pureFunction0(33, _c2));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r5.formatDuration(row_r9));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", row_r9.leaveReason);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColor", ctx_r5.affirmBadge(row_r9.affirmFlag).color || void 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r5.affirmBadge(row_r9.affirmFlag).labelKey ? \u0275\u0275pipeBind2(30, 29, ctx_r5.affirmBadge(row_r9.affirmFlag).labelKey, ctx_r5.affirmBadge(row_r9.affirmFlag).fallback) : ctx_r5.affirmBadge(row_r9.affirmFlag).fallback, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !row_r9.isNew);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !row_r9.isNew);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r9.affirmStr || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.affirmStr);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r9.isNew);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !row_r9.isNew && row_r9.affirmFlag === ctx_r5.AFFIRM_APPROVED);
  }
}
function ApplyAttendanceBatchInfoComponent_ng_template_133_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r20 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r20, " ");
  }
}
function ApplyAttendanceBatchInfoComponent_ng_container_137_nz_alert_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 53);
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzMessage", ctx_r5.detailErrorMessage() ?? "");
  }
}
function ApplyAttendanceBatchInfoComponent_ng_container_137_ng_container_2_tr_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 85);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "applyAtt.noApprovalData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u ph\xEA duy\u1EC7t"));
  }
}
function ApplyAttendanceBatchInfoComponent_ng_container_137_ng_container_2_tr_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 54);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 54);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 54);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r21 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r5.approvalSeqLabel(item_r21));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r21.affirmTypeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r21.affirmFlagName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r5.approvalRowLabel(item_r21));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r21.affirmContent);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r21.updateDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r21.deptName);
  }
}
function ApplyAttendanceBatchInfoComponent_ng_container_137_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h6", 74);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "nz-descriptions", 75)(5, "nz-descriptions-item", 76);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "nz-descriptions-item", 76);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "nz-descriptions-item", 76);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "nz-descriptions-item", 76);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "nz-descriptions-item", 76);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "nz-descriptions-item", 76);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "nz-descriptions-item", 76);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "nz-descriptions-item", 76);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "nz-descriptions-item", 77);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "h6", 74);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 78)(36, "nz-table", 79)(37, "thead")(38, "tr")(39, "th", 80);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "th", 81);
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
    \u0275\u0275template(61, ApplyAttendanceBatchInfoComponent_ng_container_137_ng_container_2_tr_61_Template, 4, 4, "tr", 62)(62, ApplyAttendanceBatchInfoComponent_ng_container_137_ng_container_2_tr_62_Template, 15, 7, "tr", 84);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const d_r22 = ctx.ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 33, "applyAtt.empInfo", "Th\xF4ng tin nh\xE2n vi\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColumn", 2);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(6, 36, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r22.employeeInfo?.["empId"]);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(9, 39, "common.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r22.employeeInfo?.["localName"]);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(12, 42, "common.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r22.employeeInfo?.["deptName"]);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(15, 45, "applyAtt.leaveTypeFull", "Lo\u1EA1i ngh\u1EC9 ph\xE9p"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r22.leaveInfo?.["leaveTypeName"]);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(18, 48, "common.startTime", "Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r22.leaveInfo?.["leaveFromTime"]);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(21, 51, "common.endTime", "Th\u1EDDi gian k\u1EBFt th\xFAc"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r22.leaveInfo?.["leaveToTime"]);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(24, 54, "ess.viewApply.title.length", "Th\u1EDDi l\u01B0\u1EE3ng"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r22.leaveInfo?.["applyLength"]);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(27, 57, "common.status", "Tr\u1EA1ng th\xE1i"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r22.leaveInfo?.["affirmFlagName"]);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(30, 60, "common.reason", "L\xFD do"))("nzSpan", 2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r22.leaveInfo?.["leaveReason"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 63, "applyAtt.approvalSeq", "Tr\xECnh t\u1EF1 duy\u1EC7t"));
    \u0275\u0275advance(3);
    \u0275\u0275property("nzData", d_r22.approvalList)("nzShowPagination", false);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 66, "common.stt", "STT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 69, "applyAtt.approvalSeq", "Tr\xECnh t\u1EF1 duy\u1EC7t"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(47, 72, "applyAtt.approvalStatus", "Tr\u1EA1ng th\xE1i duy\u1EC7t"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 75, "common.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(53, 78, "applyAtt.opinion", "\xDD ki\u1EBFn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(56, 81, "applyAtt.actionTime", "Th\u1EDDi gian th\u1EF1c hi\u1EC7n"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(59, 84, "common.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !d_r22.approvalList?.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", d_r22.approvalList);
  }
}
function ApplyAttendanceBatchInfoComponent_ng_container_137_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ApplyAttendanceBatchInfoComponent_ng_container_137_nz_alert_1_Template, 1, 1, "nz-alert", 35)(2, ApplyAttendanceBatchInfoComponent_ng_container_137_ng_container_2_Template, 63, 87, "ng-container", 62);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r5.detailErrorMessage());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r5.detailLoading() && ctx_r5.detailData());
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
  "common.shift",
  "common.startTime",
  "common.endTime",
  "common.downloadTemplate",
  "common.importExcel",
  "common.loadFail",
  "common.saveSuccess",
  "common.saveFail",
  "common.stt",
  "common.totalRows",
  "ess.viewApply.title.length",
  "applyAtt.remainLeave",
  "applyAtt.leaveType",
  "applyAtt.leaveTypeFull",
  "applyAtt.selectLeaveType",
  "applyAtt.selectEmp",
  "applyAtt.notSaved",
  "applyAtt.day",
  "applyAtt.hour",
  "applyAtt.cancelLeave",
  "applyAtt.msg.notSelectEmp",
  "applyAtt.msg.notSelectLeaveType",
  "applyAtt.msg.notSelectFrom",
  "applyAtt.msg.notSelectTo",
  "applyAtt.msg.selectToCancel",
  "applyAtt.msg.confirmCancel",
  "applyAtt.msg.cancelSuccess",
  "applyAtt.msg.cancelFailed",
  "applyAtt.msg.loadLeaveTypeFailed",
  "applyAtt.msg.invalidMinute",
  "applyAtt.msg.timeOverlap",
  "applyAtt.msg.nothingToSave",
  "applyAtt.search.affirmFlag",
  "applyAtt.search.confirmFlag",
  "applyAtt.affirmFlag.waiting",
  "applyAtt.affirmFlag.approved",
  "applyAtt.affirmFlag.approving",
  "applyAtt.affirmFlag.sent",
  "applyAtt.affirmFlag.cancelled",
  "applyAtt.confirmFlag.notConfirmed",
  "applyAtt.confirmFlag.confirmed",
  "applyAtt.confirmFlag.rejected",
  "applyAtt.saveError",
  "applyAtt.sendError",
  "applyAtt.importResult",
  "applyAtt.loadFailed",
  "applyAtt.empInfo",
  "applyAtt.leaveInfo",
  "applyAtt.approvalSeq",
  "applyAtt.approvalStatus",
  "applyAtt.opinion",
  "applyAtt.actionTime",
  "applyAtt.noApprovalData",
  "arOtf.msg.confirmResubmit",
  "arOtf.msg.resubmitSuccess"
];
var AFFIRM_APPROVED = "14014308";
var AFFIRM_REJECTED_CODE = "14014309";
var EMP_OFFICE_HTSV = "15119";
var ALLOWED_MINUTES = [0, 2, 15, 17, 30, 32, 45, 47];
var AFFIRM_FLAG_OPTIONS = [
  { value: AFFIRM_REJECTED_CODE, labelKey: "applyAtt.affirmFlag.waiting", fallback: "Ch\u1EDD duy\u1EC7t" },
  { value: AFFIRM_APPROVED, labelKey: "applyAtt.affirmFlag.approved", fallback: "\u0110\xE3 duy\u1EC7t" },
  { value: "14014307", labelKey: "applyAtt.affirmFlag.approving", fallback: "\u0110ang duy\u1EC7t" },
  { value: "14014306", labelKey: "applyAtt.affirmFlag.sent", fallback: "G\u1EEDi" },
  { value: "14014310", labelKey: "applyAtt.affirmFlag.cancelled", fallback: "\u0110\xE3 h\u1EE7y" }
];
var CONFIRM_FLAG_OPTIONS = [
  { value: "0", labelKey: "applyAtt.confirmFlag.notConfirmed", fallback: "Ch\u01B0a x\xE1c nh\u1EADn" },
  { value: "1", labelKey: "applyAtt.confirmFlag.confirmed", fallback: "\u0110\xE3 x\xE1c nh\u1EADn" },
  { value: "2", labelKey: "applyAtt.confirmFlag.rejected", fallback: "T\u1EEB ch\u1ED1i" }
];
var AFFIRM_BADGE = {
  "14014306": { color: "gold", labelKey: "applyAtt.affirmFlag.sent", fallback: "G\u1EEDi" },
  "14014307": { color: "blue", labelKey: "applyAtt.affirmFlag.approving", fallback: "\u0110ang duy\u1EC7t" },
  [AFFIRM_APPROVED]: { color: "green", labelKey: "applyAtt.affirmFlag.approved", fallback: "\u0110\xE3 duy\u1EC7t" },
  [AFFIRM_REJECTED_CODE]: { color: "red", labelKey: "applyAtt.confirmFlag.rejected", fallback: "T\u1EEB ch\u1ED1i" },
  "14014310": { color: "", labelKey: "applyAtt.affirmFlag.cancelled", fallback: "\u0110\xE3 h\u1EE7y" }
};
var ApplyAttendanceBatchInfoComponent = class _ApplyAttendanceBatchInfoComponent {
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
  /** Chỉ dòng đã duyệt (AFFIRM_APPROVED) mới có checkbox để Hủy đơn/Lưu lại - xem template. */
  AFFIRM_APPROVED = AFFIRM_APPROVED;
  typeList = signal(
    [],
    ...ngDevMode ? [{ debugName: "typeList" }] : (
      /* istanbul ignore next */
      []
    )
  );
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
  searchLeaveTypeCode = null;
  empSearchTimers = /* @__PURE__ */ new Map();
  durationTimers = /* @__PURE__ */ new Map();
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.initDefaultDateRange();
    this.api.getCodeList("21").subscribe({
      next: (list) => this.typeList.set(list ?? []),
      error: () => this.message.error(this.i18n.t("applyAtt.msg.loadLeaveTypeFailed", "Kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c danh s\xE1ch lo\u1EA1i ngh\u1EC9!"))
    });
    this.search();
  }
  affirmBadge(affirmFlag) {
    if (!affirmFlag)
      return { color: "", labelKey: "", fallback: this.i18n.t("applyAtt.notSaved", "Ch\u01B0a l\u01B0u") };
    return AFFIRM_BADGE[affirmFlag] ?? { color: "", labelKey: "", fallback: affirmFlag };
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
      confirmFlag: this.searchConfirmFlag ?? "",
      leaveTypeCode: this.searchLeaveTypeCode ?? ""
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
    this.searchLeaveTypeCode = null;
    this.initDefaultDateRange();
    this.newRows.set([]);
    this.search();
  }
  /** Mặc định Từ ngày/Đến ngày = tuần hiện tại (Thứ 2 - Chủ nhật) - đúng abInitDate() bản gốc. */
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
  get approvedRows() {
    return this.serverRows().filter((r) => r.affirmFlag === AFFIRM_APPROVED);
  }
  get allApprovedSelected() {
    const rows = this.approvedRows;
    return rows.length > 0 && rows.every((r) => r.selected);
  }
  get someApprovedSelected() {
    return this.approvedRows.some((r) => r.selected) && !this.allApprovedSelected;
  }
  toggleSelectAll(checked) {
    this.approvedRows.forEach((r) => r.selected = checked);
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
    return {
      isNew: true,
      applyNo: null,
      personId: "",
      empId: "",
      localName: "",
      deptNo: "",
      deptName: "",
      annualLeaveCount: "0",
      shiftName: "",
      leaveTypeCode: "",
      leaveFromTime: "",
      leaveToTime: "",
      applyLength: "0",
      dayHours: "0",
      leaveReason: "",
      affirmFlag: "",
      affirmStr: "",
      createdBy: "",
      createDate: "",
      updatedBy: "",
      updateDate: "",
      fromDate: null,
      toDate: null,
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
      fromDate: this.parseDt(r.leaveFromTime),
      toDate: this.parseDt(r.leaveToTime),
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
    this.loadEmpDefaultInfo(row);
  }
  loadEmpDefaultInfo(row) {
    this.api.getEmpDefaultInfo(row.personId).subscribe((res) => {
      if (!res)
        return;
      row.deptName = res.DEPT_NAME || row.deptName;
      row.annualLeaveCount = res.VAC_COUNT || "0";
      row.shiftName = res.SHIFT_NAME || "";
      if (res.START_TIME) {
        row.leaveFromTime = this.normalizeDt(res.START_TIME);
        row.fromDate = this.parseDt(row.leaveFromTime);
      }
      if (res.END_TIME) {
        row.leaveToTime = this.normalizeDt(res.END_TIME);
        row.toDate = this.parseDt(row.leaveToTime);
      }
      this.recalcAffirmors(row);
      this.recalcDuration(row);
    });
  }
  // ==================== Loại nghỉ / thời gian / thời lượng ====================
  onLeaveTypeChange(row) {
    this.recalcDuration(row);
    if (row.isNew && row.personId)
      this.recalcAffirmors(row);
  }
  onDateChange(row, which, value) {
    const snapped = value ? this.snapMinutes(value) : null;
    if (which === "from") {
      row.fromDate = snapped;
      row.leaveFromTime = snapped ? this.formatDt(snapped) : "";
    } else {
      row.toDate = snapped;
      row.leaveToTime = snapped ? this.formatDt(snapped) : "";
    }
    this.recalcDuration(row);
  }
  /** Làm tròn phút chọn về mốc hợp lệ gần nhất (không vượt quá) trong ALLOWED_MINUTES - đúng quy tắc
   *  abValidateMinutes() bản gốc. */
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
  recalcDuration(row) {
    if (!row.personId || !row.leaveFromTime || !row.leaveToTime || !row.leaveTypeCode)
      return;
    const timer = this.durationTimers.get(row);
    if (timer)
      clearTimeout(timer);
    this.durationTimers.set(row, setTimeout(() => {
      this.api.calcLeaveLength(row.personId, row.leaveFromTime, row.leaveToTime, row.leaveTypeCode).subscribe({
        next: (res) => {
          row.applyLength = res?.LEAVE_LENGTH != null ? String(res.LEAVE_LENGTH) : "0";
        },
        error: () => void 0
      });
    }, 300));
  }
  recalcAffirmors(row) {
    if (!row.personId)
      return;
    this.api.getAffirmorsPreview(row.personId, row.leaveTypeCode).subscribe({
      next: (res) => row.affirmStr = res?.affirmStr || "",
      error: () => void 0
    });
  }
  /** Hiển thị thời lượng dạng "X Ngày Y Giờ" - đúng abFormatDuration() bản gốc. dayHours không được
   *  backend trả về ở calcLeaveLength (chỉ list ban đầu có) nên phần lớn trường hợp chỉ hiện số thô -
   *  giữ nguyên hành vi này, không tự vá thêm logic nghiệp vụ không được yêu cầu. */
  formatDuration(row) {
    const len = parseFloat(row.applyLength);
    const dh = parseFloat(row.dayHours);
    if (isNaN(len) || isNaN(dh) || dh === 0)
      return row.applyLength || "";
    const days = Math.floor(len / dh);
    const hours = len - days * dh;
    let text = "";
    if (days > 0)
      text += `${days} ${this.i18n.t("applyAtt.day", "Ng\xE0y")}`;
    if (hours > 0)
      text += (text ? " " : "") + `${hours} ${this.i18n.t("applyAtt.hour", "Gi\u1EDD")}`;
    return text || String(len);
  }
  // ==================== Xem chi tiết đơn (dòng đã lưu) ====================
  openDetail(row) {
    if (row.isNew || !row.applyNo)
      return;
    this.detailVisible.set(true);
    this.detailLoading.set(true);
    this.detailErrorMessage.set(null);
    this.detailData.set(null);
    this.api.getDetail(String(row.applyNo), row.leaveTypeCode).subscribe({
      next: (res) => {
        this.detailData.set(res);
        this.detailLoading.set(false);
      },
      error: () => {
        this.detailErrorMessage.set(this.i18n.t("applyAtt.loadFailed", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i"));
        this.detailLoading.set(false);
      }
    });
  }
  closeDetail() {
    this.detailVisible.set(false);
  }
  approvalRowLabel(item) {
    return item.affirmName || "";
  }
  /** STT dòng phê duyệt - affirmLevel=100 là dòng xác nhận của HR (valRenderApprovalRows() bản gốc). */
  approvalSeqLabel(item) {
    return String(item.affirmLevel) === "100" ? "HR" : item.affirmLevel;
  }
  // ==================== Lưu (dòng mới + dòng đã duyệt được chọn để lưu lại) ====================
  saveAll() {
    const t = (key, fallback) => this.i18n.t(key, fallback);
    const newPayloads = [];
    const resubmitPayloads = [];
    let validationError = null;
    for (const row of this.newRows()) {
      if (!row.personId) {
        validationError = t("applyAtt.msg.notSelectEmp", "Ch\u01B0a ch\u1ECDn nh\xE2n vi\xEAn!");
        break;
      }
      if (!row.leaveTypeCode) {
        validationError = t("applyAtt.msg.notSelectLeaveType", "Ch\u01B0a ch\u1ECDn lo\u1EA1i ngh\u1EC9!");
        break;
      }
      if (!row.leaveFromTime) {
        validationError = t("applyAtt.msg.notSelectFrom", "Ch\u01B0a ch\u1ECDn T\u1EEB l\xFAc!");
        break;
      }
      if (!row.leaveToTime) {
        validationError = t("applyAtt.msg.notSelectTo", "Ch\u01B0a ch\u1ECDn \u0110\u1EBFn l\xFAc!");
        break;
      }
      newPayloads.push({
        personId: row.personId,
        localName: row.localName,
        leaveTypeCode: row.leaveTypeCode,
        leaveFromTime: row.leaveFromTime,
        leaveToTime: row.leaveToTime,
        applyLength: row.applyLength,
        leaveReason: row.leaveReason,
        affirmStr: null
      });
    }
    if (!validationError) {
      for (const row of this.serverRows()) {
        if (row.affirmFlag !== AFFIRM_APPROVED || !row.selected)
          continue;
        if (!row.personId) {
          validationError = `${t("applyAtt.msg.notSelectEmp", "Ch\u01B0a ch\u1ECDn nh\xE2n vi\xEAn!")} (${row.applyNo})`;
          break;
        }
        if (!row.leaveTypeCode) {
          validationError = `${t("applyAtt.msg.notSelectLeaveType", "Ch\u01B0a ch\u1ECDn lo\u1EA1i ngh\u1EC9!")} (${row.applyNo})`;
          break;
        }
        if (!row.leaveFromTime) {
          validationError = `${t("applyAtt.msg.notSelectFrom", "Ch\u01B0a ch\u1ECDn T\u1EEB l\xFAc!")} (${row.applyNo})`;
          break;
        }
        if (!row.leaveToTime) {
          validationError = `${t("applyAtt.msg.notSelectTo", "Ch\u01B0a ch\u1ECDn \u0110\u1EBFn l\xFAc!")} (${row.applyNo})`;
          break;
        }
        resubmitPayloads.push({
          applyNo: row.applyNo,
          personId: row.personId,
          localName: row.localName,
          leaveTypeCode: row.leaveTypeCode,
          leaveFromTime: row.leaveFromTime,
          leaveToTime: row.leaveToTime,
          applyLength: row.applyLength,
          leaveReason: row.leaveReason
        });
      }
    }
    if (validationError) {
      this.message.warning(validationError);
      return;
    }
    if (!newPayloads.length && !resubmitPayloads.length) {
      this.message.info(t("applyAtt.msg.nothingToSave", "Kh\xF4ng c\xF3 d\xF2ng m\u1EDBi v\xE0 kh\xF4ng c\xF3 \u0111\u01A1n \u0111\xE3 duy\u1EC7t n\xE0o \u0111\u01B0\u1EE3c ch\u1ECDn \u0111\u1EC3 l\u01B0u!"));
      return;
    }
    if (this.hasTimeOverlap([...newPayloads, ...resubmitPayloads])) {
      this.message.error(t("applyAtt.msg.timeOverlap", "C\xE1c d\xF2ng d\u1EEF li\u1EC7u b\u1ECB tr\xF9ng nhau v\u1EC1 th\u1EDDi gian, xin ki\u1EC3m tra l\u1EA1i!"));
      return;
    }
    if (resubmitPayloads.length > 0) {
      this.modal.confirm({
        nzTitle: t("common.save", "L\u01B0u"),
        nzContent: t("arOtf.msg.confirmResubmit", "\u0110\u01A1n n\xE0y \u0111\xE3 \u0111\u01B0\u1EE3c duy\u1EC7t. Vi\u1EC7c l\u01B0u s\u1EBD x\xF3a \u0111\u01A1n hi\u1EC7n t\u1EA1i v\xE0 t\u1EA1o \u0111\u01A1n m\u1EDBi. Ti\u1EBFp t\u1EE5c?"),
        nzOnOk: () => this.runSaveAll(newPayloads, resubmitPayloads)
      });
    } else {
      this.runSaveAll(newPayloads, resubmitPayloads);
    }
  }
  /** Kiểm tra trùng thời gian nghỉ giữa các dòng CÙNG nhân viên sắp lưu - đúng logic abSaveAllNewRows()
   *  bản gốc (coi khoảng to<=from là qua ngày hôm sau để so trùng giờ qua đêm). */
  hasTimeOverlap(payloads) {
    const items = payloads.map((p) => ({
      personId: String(p["personId"] || ""),
      from: /* @__PURE__ */ new Date(String(p["leaveFromTime"]).replace(" ", "T") + ":00"),
      to: /* @__PURE__ */ new Date(String(p["leaveToTime"]).replace(" ", "T") + ":00")
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
  async runSaveAll(newPayloads, resubmitPayloads) {
    this.saving.set(true);
    const errors = [];
    for (let i = 0; i < newPayloads.length; i++) {
      try {
        const res = await firstValueFrom(this.api.save(newPayloads[i]));
        if (!res.success)
          errors.push(res.error || `${this.i18n.t("applyAtt.saveError", "L\u1ED7i l\u01B0u d\u1EEF li\u1EC7u")} (#${i + 1})`);
      } catch {
        errors.push(`${this.i18n.t("applyAtt.sendError", "L\u1ED7i khi g\u1EEDi d\u1EEF li\u1EC7u!")} (#${i + 1})`);
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
      this.message.error(errors.join("; "));
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
      this.message.warning(t("applyAtt.msg.notSelectEmp", "Ch\u01B0a ch\u1ECDn nh\xE2n vi\xEAn!"));
      return;
    }
    if (!row.leaveTypeCode) {
      this.message.warning(t("applyAtt.msg.notSelectLeaveType", "Ch\u01B0a ch\u1ECDn lo\u1EA1i ngh\u1EC9!"));
      return;
    }
    if (!row.leaveFromTime) {
      this.message.warning(t("applyAtt.msg.notSelectFrom", "Ch\u01B0a ch\u1ECDn T\u1EEB l\xFAc!"));
      return;
    }
    if (!row.leaveToTime) {
      this.message.warning(t("applyAtt.msg.notSelectTo", "Ch\u01B0a ch\u1ECDn \u0110\u1EBFn l\xFAc!"));
      return;
    }
    this.modal.confirm({
      nzTitle: t("common.save", "L\u01B0u"),
      nzContent: t("arOtf.msg.confirmResubmit", "\u0110\u01A1n n\xE0y \u0111\xE3 \u0111\u01B0\u1EE3c duy\u1EC7t. Vi\u1EC7c l\u01B0u s\u1EBD x\xF3a \u0111\u01A1n hi\u1EC7n t\u1EA1i v\xE0 t\u1EA1o \u0111\u01A1n m\u1EDBi. Ti\u1EBFp t\u1EE5c?"),
      nzOnOk: () => this.doResubmitLine(row)
    });
  }
  doResubmitLine(row) {
    row.resubmitting = true;
    this.api.resubmit({
      applyNo: row.applyNo,
      personId: row.personId,
      localName: row.localName,
      leaveTypeCode: row.leaveTypeCode,
      leaveFromTime: row.leaveFromTime,
      leaveToTime: row.leaveToTime,
      applyLength: row.applyLength,
      leaveReason: row.leaveReason
    }).subscribe({
      next: (res) => {
        row.resubmitting = false;
        if (res.success) {
          this.message.success(res.message || this.i18n.t("arOtf.msg.resubmitSuccess", "L\u01B0u l\u1EA1i \u0111\u01A1n th\xE0nh c\xF4ng"));
          this.search();
        } else {
          this.message.error(res.error || this.i18n.t("applyAtt.saveError", "L\u1ED7i l\u01B0u d\u1EEF li\u1EC7u"));
        }
      },
      error: () => {
        row.resubmitting = false;
        this.message.error(this.i18n.t("applyAtt.sendError", "L\u1ED7i khi g\u1EEDi d\u1EEF li\u1EC7u!"));
      }
    });
  }
  // ==================== Hủy đơn đã chọn ====================
  cancelSelected() {
    const t = (key, fallback) => this.i18n.t(key, fallback);
    const applyNos = this.serverRows().filter((r) => r.affirmFlag === AFFIRM_APPROVED && r.selected).map((r) => String(r.applyNo));
    if (!applyNos.length) {
      this.message.warning(t("applyAtt.msg.selectToCancel", "Vui l\xF2ng ch\u1ECDn \u0111\u01A1n c\u1EA7n h\u1EE7y!"));
      return;
    }
    this.modal.confirm({
      nzTitle: t("applyAtt.cancelLeave", "H\u1EE7y \u0111\u01A1n"),
      nzContent: t("applyAtt.msg.confirmCancel", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n h\u1EE7y \u0111\u01A1n \u0111\xE3 ch\u1ECDn kh\xF4ng?"),
      nzOnOk: () => this.runCancel(applyNos)
    });
  }
  async runCancel(applyNos) {
    this.cancelling.set(true);
    const errors = [];
    for (const applyNo of applyNos) {
      try {
        const res = await firstValueFrom(this.api.cancel(applyNo));
        if (!res.success)
          errors.push(res.error || applyNo);
      } catch {
        errors.push(applyNo);
      }
    }
    this.cancelling.set(false);
    if (errors.length) {
      this.message.error(`${this.i18n.t("applyAtt.msg.cancelFailed", "H\u1EE7y \u0111\u01A1n th\u1EA5t b\u1EA1i!")} (${errors.join(", ")})`);
    } else {
      this.message.success(this.i18n.t("applyAtt.msg.cancelSuccess", "H\u1EE7y \u0111\u01A1n th\xE0nh c\xF4ng!"));
      this.search();
    }
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
        this.tabs.openTab("/ar/attendanceMintenance/viewImportAttendanceTempList", this.i18n.t("applyAtt.importResult", "K\u1EBFt qu\u1EA3 nh\u1EADp"), "external");
      },
      error: () => {
        this.importing.set(false);
        this.message.error(this.i18n.t("applyAtt.sendError", "L\u1ED7i khi g\u1EEDi d\u1EEF li\u1EC7u!"));
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
  static \u0275fac = function ApplyAttendanceBatchInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApplyAttendanceBatchInfoComponent)(\u0275\u0275directiveInject(ApplyAttendanceBatchInfoService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService), \u0275\u0275directiveInject(NzModalService), \u0275\u0275directiveInject(TabService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApplyAttendanceBatchInfoComponent, selectors: [["app-apply-attendance-batch-info"]], decls: 138, vars: 170, consts: [["importFileInput", ""], ["aabTable", ""], ["aabTotalTpl", ""], ["empDisplay", ""], ["empAuto", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-2"], [1, "form-label"], ["nz-input", "", "name", "searchEmpId", 3, "ngModelChange", "ngModel", "placeholder"], ["nz-input", "", "name", "searchEmpName", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "searchFromDate", "nzFormat", "yyyy-MM-dd", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "searchToDate", "nzFormat", "yyyy-MM-dd", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "searchAffirmFlag", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["name", "searchConfirmFlag", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [1, "col-md-3"], ["name", "searchLeaveTypeCode", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [1, "col-md-9", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click", "nzLoading"], [1, "bx", "bx-save"], ["nz-button", "", "nzDanger", "", "type", "button", 3, "click", "nzLoading"], [1, "bx", "bx-x-circle"], [1, "bx", "bx-download"], ["nz-button", "", "type", "button", 3, "click", "nzLoading"], [1, "bx", "bx-upload"], ["type", "file", "hidden", "", "accept", ".xlsx,.xls", 3, "change"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [1, "table-nowrap", 3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "50px"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel", "nzIndeterminate"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "220px"], ["nzWidth", "150px"], ["nzWidth", "90px", 1, "text-center"], ["nzWidth", "120px"], ["nzWidth", "200px"], ["nzWidth", "180px"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "160px"], ["nzWidth", "80px", 1, "text-center"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["nzWidth", "55vw", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzBodyStyle", "nzFooter"], [4, "nzModalContent"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], [1, "text-center"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "text-end"], [1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["nzFormat", "yyyy-MM-dd HH:mm", 1, "w-100", 3, "ngModelChange", "ngModel", "nzShowTime"], ["nz-input", "", 3, "ngModelChange", "ngModel"], [3, "nzColor"], [4, "ngIf"], ["nz-button", "", "nzDanger", "", "nzSize", "small", "nzShape", "circle", "title", "Lo\u1EA1i b\u1ECF d\xF2ng n\xE0y", 3, "click", 4, "ngIf"], ["nz-button", "", "nzType", "primary", "nzSize", "small", "nzShape", "circle", "title", "L\u01B0u l\u1EA1i \u0111\u01A1n", 3, "nzLoading", "click", 4, "ngIf"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel"], ["nz-input", "", 3, "ngModelChange", "ngModel", "nzAutocomplete", "placeholder"], [3, "nzValue", "click", 4, "ngFor", "ngForOf"], [3, "click", "nzValue"], [1, "text-muted"], ["href", "javascript:void(0)", 3, "click"], ["nz-button", "", "nzDanger", "", "nzSize", "small", "nzShape", "circle", "title", "Lo\u1EA1i b\u1ECF d\xF2ng n\xE0y", 3, "click"], [1, "bx", "bx-minus"], ["nz-button", "", "nzType", "primary", "nzSize", "small", "nzShape", "circle", "title", "L\u01B0u l\u1EA1i \u0111\u01A1n", 3, "click", "nzLoading"], [1, "fw-bold", "mb-2"], ["nzBordered", "", "nzSize", "small", 1, "mb-3", 3, "nzColumn"], [3, "nzTitle"], [3, "nzTitle", "nzSpan"], [1, "table-responsive"], ["nzSize", "small", 3, "nzData", "nzShowPagination"], [1, "text-center", 2, "width", "50px"], [1, "text-center", 2, "width", "110px"], [1, "text-center", 2, "width", "170px"], [2, "width", "120px"], [4, "ngFor", "ngForOf"], ["colspan", "7", 1, "text-center", "text-muted"]], template: function ApplyAttendanceBatchInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "nz-card", 7)(3, "form", 8);
      \u0275\u0275listener("ngSubmit", function ApplyAttendanceBatchInfoComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 9)(5, "label", 10);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 11);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ApplyAttendanceBatchInfoComponent_Template_input_ngModelChange_8_listener($event) {
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
      \u0275\u0275twoWayListener("ngModelChange", function ApplyAttendanceBatchInfoComponent_Template_input_ngModelChange_14_listener($event) {
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
      \u0275\u0275twoWayListener("ngModelChange", function ApplyAttendanceBatchInfoComponent_Template_nz_date_picker_ngModelChange_20_listener($event) {
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
      \u0275\u0275twoWayListener("ngModelChange", function ApplyAttendanceBatchInfoComponent_Template_nz_date_picker_ngModelChange_25_listener($event) {
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
      \u0275\u0275twoWayListener("ngModelChange", function ApplyAttendanceBatchInfoComponent_Template_nz_select_ngModelChange_30_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchAffirmFlag, $event) || (ctx.searchAffirmFlag = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(32, ApplyAttendanceBatchInfoComponent_nz_option_32_Template, 2, 5, "nz-option", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 9)(34, "label", 10);
      \u0275\u0275text(35);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "nz-select", 17);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ApplyAttendanceBatchInfoComponent_Template_nz_select_ngModelChange_37_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchConfirmFlag, $event) || (ctx.searchConfirmFlag = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(39, ApplyAttendanceBatchInfoComponent_nz_option_39_Template, 2, 5, "nz-option", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 18)(41, "label", 10);
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "nz-select", 19);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ApplyAttendanceBatchInfoComponent_Template_nz_select_ngModelChange_44_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchLeaveTypeCode, $event) || (ctx.searchLeaveTypeCode = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(46, ApplyAttendanceBatchInfoComponent_nz_option_46_Template, 1, 2, "nz-option", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 20)(48, "button", 21);
      \u0275\u0275element(49, "i", 22);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "button", 23);
      \u0275\u0275listener("click", function ApplyAttendanceBatchInfoComponent_Template_button_click_52_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(53, "i", 24);
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "button", 25);
      \u0275\u0275listener("click", function ApplyAttendanceBatchInfoComponent_Template_button_click_56_listener() {
        return ctx.addEmptyRow();
      });
      \u0275\u0275element(57, "i", 26);
      \u0275\u0275text(58);
      \u0275\u0275pipe(59, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "button", 27);
      \u0275\u0275listener("click", function ApplyAttendanceBatchInfoComponent_Template_button_click_60_listener() {
        return ctx.saveAll();
      });
      \u0275\u0275element(61, "i", 28);
      \u0275\u0275text(62);
      \u0275\u0275pipe(63, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "button", 29);
      \u0275\u0275listener("click", function ApplyAttendanceBatchInfoComponent_Template_button_click_64_listener() {
        return ctx.cancelSelected();
      });
      \u0275\u0275element(65, "i", 30);
      \u0275\u0275text(66);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "button", 23);
      \u0275\u0275listener("click", function ApplyAttendanceBatchInfoComponent_Template_button_click_68_listener() {
        return ctx.downloadTemplate();
      });
      \u0275\u0275element(69, "i", 31);
      \u0275\u0275text(70);
      \u0275\u0275pipe(71, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "button", 32);
      \u0275\u0275listener("click", function ApplyAttendanceBatchInfoComponent_Template_button_click_72_listener() {
        \u0275\u0275restoreView(_r1);
        const importFileInput_r5 = \u0275\u0275reference(77);
        return \u0275\u0275resetView(importFileInput_r5.click());
      });
      \u0275\u0275element(73, "i", 33);
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "input", 34, 0);
      \u0275\u0275listener("change", function ApplyAttendanceBatchInfoComponent_Template_input_change_76_listener($event) {
        return ctx.onImportFileSelected($event);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(78, "nz-card");
      \u0275\u0275template(79, ApplyAttendanceBatchInfoComponent_nz_alert_79_Template, 1, 1, "nz-alert", 35);
      \u0275\u0275elementStart(80, "nz-table", 36, 1)(82, "thead")(83, "tr")(84, "th", 37)(85, "label", 38);
      \u0275\u0275listener("ngModelChange", function ApplyAttendanceBatchInfoComponent_Template_label_ngModelChange_85_listener($event) {
        return ctx.toggleSelectAll($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "th", 39);
      \u0275\u0275text(87);
      \u0275\u0275pipe(88, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "th", 40);
      \u0275\u0275text(90);
      \u0275\u0275pipe(91, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "th", 41);
      \u0275\u0275text(93);
      \u0275\u0275pipe(94, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "th", 42);
      \u0275\u0275text(96);
      \u0275\u0275pipe(97, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "th", 43);
      \u0275\u0275text(99);
      \u0275\u0275pipe(100, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "th", 44);
      \u0275\u0275text(102);
      \u0275\u0275pipe(103, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "th", 45);
      \u0275\u0275text(105);
      \u0275\u0275pipe(106, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "th", 45);
      \u0275\u0275text(108);
      \u0275\u0275pipe(109, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "th", 46);
      \u0275\u0275text(111);
      \u0275\u0275pipe(112, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "th", 40);
      \u0275\u0275text(114);
      \u0275\u0275pipe(115, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "th", 46);
      \u0275\u0275text(117);
      \u0275\u0275pipe(118, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "th", 47);
      \u0275\u0275text(120);
      \u0275\u0275pipe(121, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "th", 47);
      \u0275\u0275text(123);
      \u0275\u0275pipe(124, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "th", 40);
      \u0275\u0275text(126);
      \u0275\u0275pipe(127, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "th", 48);
      \u0275\u0275text(129);
      \u0275\u0275pipe(130, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(131, "tbody");
      \u0275\u0275template(132, ApplyAttendanceBatchInfoComponent_tr_132_Template, 40, 34, "tr", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275template(133, ApplyAttendanceBatchInfoComponent_ng_template_133_Template, 2, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(135, "nz-modal", 50);
      \u0275\u0275pipe(136, "translate");
      \u0275\u0275listener("nzOnCancel", function ApplyAttendanceBatchInfoComponent_Template_nz_modal_nzOnCancel_135_listener() {
        return ctx.closeDetail();
      });
      \u0275\u0275template(137, ApplyAttendanceBatchInfoComponent_ng_container_137_Template, 3, 2, "ng-container", 51);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const aabTable_r23 = \u0275\u0275reference(81);
      const aabTotalTpl_r24 = \u0275\u0275reference(134);
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
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 81, "applyAtt.search.affirmFlag", "Tr\u1EA1ng th\xE1i \u0111\u01A1n ngh\u1EC9 ph\xE9p"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchAffirmFlag);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(31, 84, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.affirmFlagOptions);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 87, "applyAtt.search.confirmFlag", "Tr\u1EA1ng th\xE1i x\xE1c nh\u1EADn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchConfirmFlag);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(38, 90, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.confirmFlagOptions);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 93, "applyAtt.leaveTypeFull", "Lo\u1EA1i ngh\u1EC9 ph\xE9p"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchLeaveTypeCode);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(45, 96, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.typeList());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(51, 99, "common.search", "T\xECm ki\u1EBFm"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(55, 102, "common.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(59, 105, "common.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.saving());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(63, 108, "common.save", "L\u01B0u"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.cancelling());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(67, 111, "applyAtt.cancelLeave", "H\u1EE7y \u0111\u01A1n"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(71, 114, "common.downloadTemplate", "T\u1EA3i File M\u1EABu"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.importing());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(75, 117, "common.importExcel", "Import Excel"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", aabTotalTpl_r24)("nzScroll", \u0275\u0275pureFunction0(168, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.allApprovedSelected)("nzIndeterminate", ctx.someApprovedSelected);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(88, 120, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(91, 123, "common.empName", "Nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(94, 126, "common.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(97, 129, "applyAtt.remainLeave", "Ph\xE9p c\xF2n"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(100, 132, "common.shift", "Ca l\xE0m vi\u1EC7c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(103, 135, "applyAtt.leaveType", "Lo\u1EA1i ngh\u1EC9"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(106, 138, "common.startTime", "Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(109, 141, "common.endTime", "Th\u1EDDi gian k\u1EBFt th\xFAc"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(112, 144, "ess.viewApply.title.length", "Th\u1EDDi l\u01B0\u1EE3ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(115, 147, "common.reason", "L\xFD do"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(118, 150, "common.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(121, 153, "common.creator", "Ng\u01B0\u1EDDi t\u1EA1o"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(124, 156, "common.updater", "Ng\u01B0\u1EDDi s\u1EEDa"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(127, 159, "common.approver", "Ng\u01B0\u1EDDi duy\u1EC7t"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(130, 162, "common.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", aabTable_r23.data)("ngForTrackBy", ctx.trackByRow);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.detailVisible())("nzTitle", \u0275\u0275pipeBind2(136, 165, "applyAtt.leaveInfo", "Th\xF4ng tin xin ph\xE9p"))("nzBodyStyle", \u0275\u0275pureFunction0(169, _c1))("nzFooter", null);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzDatePickerModule, NzDatePickerComponent, NzCheckboxModule, NzCheckboxComponent, NzAutocompleteModule, NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzTagModule, NzTagComponent, NzAlertModule, NzAlertComponent, NzDescriptionsModule, NzDescriptionsComponent, NzDescriptionsItemComponent, TranslatePipe], styles: ["\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=apply-attendance-batch-info.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApplyAttendanceBatchInfoComponent, [{
    type: Component,
    args: [{ selector: "app-apply-attendance-batch-info", standalone: true, imports: [
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
          <label class="form-label">{{ 'applyAtt.search.affirmFlag' | translate:'Tr\u1EA1ng th\xE1i \u0111\u01A1n ngh\u1EC9 ph\xE9p' }}</label>
          <nz-select class="w-100" [(ngModel)]="searchAffirmFlag" name="searchAffirmFlag" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let o of affirmFlagOptions" [nzValue]="o.value" [nzLabel]="o.labelKey | translate:o.fallback"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'applyAtt.search.confirmFlag' | translate:'Tr\u1EA1ng th\xE1i x\xE1c nh\u1EADn' }}</label>
          <nz-select class="w-100" [(ngModel)]="searchConfirmFlag" name="searchConfirmFlag" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let o of confirmFlagOptions" [nzValue]="o.value" [nzLabel]="o.labelKey | translate:o.fallback"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'applyAtt.leaveTypeFull' | translate:'Lo\u1EA1i ngh\u1EC9 ph\xE9p' }}</label>
          <nz-select class="w-100" [(ngModel)]="searchLeaveTypeCode" name="searchLeaveTypeCode" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let c of typeList()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-9 d-flex align-items-end gap-2 flex-wrap">
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
            <i class="bx bx-x-circle"></i> {{ 'applyAtt.cancelLeave' | translate:'H\u1EE7y \u0111\u01A1n' }}
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
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="aabTotalTpl"
                [nzScroll]="{ x: '2400px', y: 'calc(100vh - 320px)' }"
                class="table-nowrap" #aabTable>
        <!-- nzWidth khai b\xE1o cho t\u1EEBng c\u1ED9t \u0111\u1EC3 \u0111\u1ED3ng b\u1ED9 \u0111\u1ED9 r\u1ED9ng header/body khi d\xF9ng nzScroll (xem
             gi\u1EA3i th\xEDch \u1EDF dept-ot-apply-info.component.html). -->
        <thead>
          <tr>
            <th nzWidth="50px">
              <label nz-checkbox [ngModel]="allApprovedSelected" [nzIndeterminate]="someApprovedSelected"
                     (ngModelChange)="toggleSelectAll($event)"></label>
            </th>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th nzWidth="220px">{{ 'common.empName' | translate:'Nh\xE2n vi\xEAn' }}</th>
            <th nzWidth="150px">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'applyAtt.remainLeave' | translate:'Ph\xE9p c\xF2n' }}</th>
            <th nzWidth="120px">{{ 'common.shift' | translate:'Ca l\xE0m vi\u1EC7c' }}</th>
            <th nzWidth="200px">{{ 'applyAtt.leaveType' | translate:'Lo\u1EA1i ngh\u1EC9' }}</th>
            <th nzWidth="180px">{{ 'common.startTime' | translate:'Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u' }}</th>
            <th nzWidth="180px">{{ 'common.endTime' | translate:'Th\u1EDDi gian k\u1EBFt th\xFAc' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'ess.viewApply.title.length' | translate:'Th\u1EDDi l\u01B0\u1EE3ng' }}</th>
            <th nzWidth="220px">{{ 'common.reason' | translate:'L\xFD do' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
            <th nzWidth="160px">{{ 'common.creator' | translate:'Ng\u01B0\u1EDDi t\u1EA1o' }}</th>
            <th nzWidth="160px">{{ 'common.updater' | translate:'Ng\u01B0\u1EDDi s\u1EEDa' }}</th>
            <th nzWidth="220px">{{ 'common.approver' | translate:'Ng\u01B0\u1EDDi duy\u1EC7t' }}</th>
            <th class="text-center" nzWidth="80px">{{ 'common.action' | translate:'Thao t\xE1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of aabTable.data; let i = index; trackBy: trackByRow">
            <td class="text-center">
              <label nz-checkbox *ngIf="!row.isNew && row.affirmFlag === AFFIRM_APPROVED" [(ngModel)]="row.selected"></label>
            </td>
            <td class="text-center">{{ i + 1 }}</td>

            <!-- Nh\xE2n vi\xEAn: d\xF2ng m\u1EDBi -> g\xF5 t\xECm (nz-autocomplete), d\xF2ng \u0111\xE3 l\u01B0u -> link m\u1EDF chi ti\u1EBFt \u0111\u01A1n -->
            <td>
              <ng-container *ngIf="row.isNew; else empDisplay">
                <input nz-input [ngModel]="row.empKeyword" (ngModelChange)="onEmpKeywordChange(row, $event)"
                       [nzAutocomplete]="empAuto" [placeholder]="'applyAtt.selectEmp' | translate:'Ch\u1ECDn NV...'">
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
            <td class="text-end">{{ row.annualLeaveCount || '0' }}</td>
            <td [attr.title]="row.shiftName || null">{{ row.shiftName }}</td>

            <td>
              <nz-select class="w-100" [(ngModel)]="row.leaveTypeCode" (ngModelChange)="onLeaveTypeChange(row)"
                         [nzPlaceHolder]="'applyAtt.selectLeaveType' | translate:'-- Lo\u1EA1i ngh\u1EC9 --'">
                <nz-option *ngFor="let c of typeList()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
              </nz-select>
            </td>
            <td>
              <nz-date-picker class="w-100" [ngModel]="row.fromDate" (ngModelChange)="onDateChange(row, 'from', $event)"
                               nzFormat="yyyy-MM-dd HH:mm" [nzShowTime]="{ nzFormat: 'HH:mm' }"></nz-date-picker>
            </td>
            <td>
              <nz-date-picker class="w-100" [ngModel]="row.toDate" (ngModelChange)="onDateChange(row, 'to', $event)"
                               nzFormat="yyyy-MM-dd HH:mm" [nzShowTime]="{ nzFormat: 'HH:mm' }"></nz-date-picker>
            </td>
            <td class="text-end">{{ formatDuration(row) }}</td>
            <td>
              <input nz-input [(ngModel)]="row.leaveReason">
            </td>
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
            <td [attr.title]="row.affirmStr || null">{{ row.affirmStr }}</td>

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
        <ng-template #aabTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal chi ti\u1EBFt \u0111\u01A1n ngh\u1EC9 ph\xE9p (d\xF2ng \u0111\xE3 l\u01B0u) -->
<nz-modal [nzVisible]="detailVisible()" [nzTitle]="'applyAtt.leaveInfo' | translate:'Th\xF4ng tin xin ph\xE9p'" nzWidth="55vw"
          [nzBodyStyle]="{ 'max-height': '75vh', 'overflow-y': 'auto' }"
          (nzOnCancel)="closeDetail()" [nzFooter]="null">
  <ng-container *nzModalContent>
    <nz-alert *ngIf="detailErrorMessage()" nzType="error" [nzMessage]="detailErrorMessage() ?? ''" class="mb-3"></nz-alert>
    <ng-container *ngIf="!detailLoading() && detailData() as d">
      <h6 class="fw-bold mb-2">{{ 'applyAtt.empInfo' | translate:'Th\xF4ng tin nh\xE2n vi\xEAn' }}</h6>
      <nz-descriptions nzBordered [nzColumn]="2" nzSize="small" class="mb-3">
        <nz-descriptions-item [nzTitle]="'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn'">{{ d.employeeInfo?.['empId'] }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'common.empName' | translate:'H\u1ECD t\xEAn'">{{ d.employeeInfo?.['localName'] }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'common.deptName' | translate:'Ph\xF2ng ban'">{{ d.employeeInfo?.['deptName'] }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'applyAtt.leaveTypeFull' | translate:'Lo\u1EA1i ngh\u1EC9 ph\xE9p'">{{ d.leaveInfo?.['leaveTypeName'] }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'common.startTime' | translate:'Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u'">{{ d.leaveInfo?.['leaveFromTime'] }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'common.endTime' | translate:'Th\u1EDDi gian k\u1EBFt th\xFAc'">{{ d.leaveInfo?.['leaveToTime'] }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'ess.viewApply.title.length' | translate:'Th\u1EDDi l\u01B0\u1EE3ng'">{{ d.leaveInfo?.['applyLength'] }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'common.status' | translate:'Tr\u1EA1ng th\xE1i'">{{ d.leaveInfo?.['affirmFlagName'] }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'common.reason' | translate:'L\xFD do'" [nzSpan]="2">{{ d.leaveInfo?.['leaveReason'] }}</nz-descriptions-item>
      </nz-descriptions>

      <h6 class="fw-bold mb-2">{{ 'applyAtt.approvalSeq' | translate:'Tr\xECnh t\u1EF1 duy\u1EC7t' }}</h6>
      <div class="table-responsive">
        <nz-table [nzData]="d.approvalList" [nzShowPagination]="false" nzSize="small">
          <thead>
            <tr>
              <th class="text-center" style="width:50px">{{ 'common.stt' | translate:'STT' }}</th>
              <th class="text-center" style="width:110px">{{ 'applyAtt.approvalSeq' | translate:'Tr\xECnh t\u1EF1 duy\u1EC7t' }}</th>
              <th class="text-center" style="width:110px">{{ 'applyAtt.approvalStatus' | translate:'Tr\u1EA1ng th\xE1i duy\u1EC7t' }}</th>
              <th>{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
              <th>{{ 'applyAtt.opinion' | translate:'\xDD ki\u1EBFn' }}</th>
              <th class="text-center" style="width:170px">{{ 'applyAtt.actionTime' | translate:'Th\u1EDDi gian th\u1EF1c hi\u1EC7n' }}</th>
              <th style="width:120px">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="!d.approvalList?.length">
              <td colspan="7" class="text-center text-muted">{{ 'applyAtt.noApprovalData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u ph\xEA duy\u1EC7t' }}</td>
            </tr>
            <tr *ngFor="let item of d.approvalList">
              <td class="text-center">{{ approvalSeqLabel(item) }}</td>
              <td class="text-center">{{ item.affirmTypeName }}</td>
              <td class="text-center">{{ item.affirmFlagName }}</td>
              <td>{{ approvalRowLabel(item) }}</td>
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
`, styles: ["/* src/app/apply-attendance-batch-info/apply-attendance-batch-info.component.css */\ntable td,\ntable th {\n  white-space: nowrap;\n}\ntable td {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=apply-attendance-batch-info.component.css.map */\n"] }]
  }], () => [{ type: ApplyAttendanceBatchInfoService }, { type: I18nService }, { type: NzMessageService }, { type: NzModalService }, { type: TabService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApplyAttendanceBatchInfoComponent, { className: "ApplyAttendanceBatchInfoComponent", filePath: "src/app/apply-attendance-batch-info/apply-attendance-batch-info.component.ts", lineNumber: 123 });
})();
export {
  ApplyAttendanceBatchInfoComponent
};
//# debugId=3467d030-9519-515a-9830-aab2ae774364
//# sourceMappingURL=chunk-QGEOHNW5.js.map
