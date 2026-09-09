import {
  utils,
  writeFileSync
} from "./chunk-6KSHLFTP.js";
import {
  NzModalComponent,
  NzModalContentDirective,
  NzModalModule
} from "./chunk-OEYWCHIN.js";
import {
  NzTreeSelectComponent,
  NzTreeSelectModule
} from "./chunk-2D6TQZG3.js";
import "./chunk-PD7KBOBI.js";
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

// src/app/attendance-search/attendance-search.service.ts
var API_BASE = "/ar/attendanceMintenance/api";
var AttendanceSearchService = class _AttendanceSearchService {
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
    return this.http.get(`${API_BASE}/attendanceSearch/list`, {
      params: httpParams,
      withCredentials: true
    });
  }
  getShiftOptions() {
    return this.http.get("/ar/attendanceSettings/api/shift", { withCredentials: true });
  }
  getItemOptions() {
    return this.http.get("/ar/attendanceSettings/api/arItemParam/options", {
      params: new HttpParams().set("type", "attendance"),
      withCredentials: true
    });
  }
  getCodeList(parentCodeNo) {
    return this.http.get("/sys/api/getCode/list", {
      params: new HttpParams().set("parentCodeNo", parentCodeNo),
      withCredentials: true
    });
  }
  getAuthorizedDepartments() {
    return this.http.get("/ar/attendanceSettings/api/arSupervisor/authorized-departments", {
      withCredentials: true
    });
  }
  syncCleverseTest(payload) {
    return this.http.post(`${API_BASE}/syncCleverse/test`, payload, { withCredentials: true });
  }
  static \u0275fac = function AttendanceSearchService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AttendanceSearchService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AttendanceSearchService, factory: _AttendanceSearchService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttendanceSearchService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/attendance-search/attendance-search.component.ts
var _c0 = () => ({ x: "1360px", y: "calc(100vh - 420px)" });
function AttendanceSearchComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.deptTreeErrorMessage());
  }
}
function AttendanceSearchComponent_nz_option_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 42);
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r3.codeNo)("nzLabel", c_r3.codeName);
  }
}
function AttendanceSearchComponent_nz_option_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 42);
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    \u0275\u0275property("nzValue", s_r4.shiftNo)("nzLabel", s_r4.nameVi || s_r4.shiftName || s_r4.shiftNo);
  }
}
function AttendanceSearchComponent_nz_option_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 42);
  }
  if (rf & 2) {
    const it_r5 = ctx.$implicit;
    \u0275\u0275property("nzValue", it_r5.itemNo)("nzLabel", it_r5.itemName);
  }
}
function AttendanceSearchComponent_nz_alert_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 43);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function AttendanceSearchComponent_tr_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 44);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 44);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 44);
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
    \u0275\u0275elementStart(13, "td", 44);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 44);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 44);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 45);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 44);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r7 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.arDateStr);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.empId || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.empId);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.localName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.localName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.deptName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.deptName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.postGradeName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.postGradeName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.shiftName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.shiftName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.itemName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.itemName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.fromTime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.toTime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.unit);
  }
}
function AttendanceSearchComponent_ng_template_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r8 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r8, " ");
  }
}
function AttendanceSearchComponent_ng_container_113_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label", 49);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "nz-alert", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const res_r10 = ctx.ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 3, "attSearch.syncModal.result", "K\u1EBFt qu\u1EA3"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzType", res_r10.success ? "success" : "error")("nzMessage", res_r10.text);
  }
}
function AttendanceSearchComponent_ng_container_113_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "nz-alert", 46);
    \u0275\u0275elementStart(2, "form", 47)(3, "div", 48)(4, "label", 49);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function AttendanceSearchComponent_ng_container_113_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.syncForm.enterCd, $event) || (ctx_r1.syncForm.enterCd = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 48)(9, "label", 49);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function AttendanceSearchComponent_ng_container_113_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.syncForm.sabun, $event) || (ctx_r1.syncForm.sabun = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 48)(14, "label", 49);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function AttendanceSearchComponent_ng_container_113_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.syncForm.gntCd, $event) || (ctx_r1.syncForm.gntCd = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 6)(19, "label", 49);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function AttendanceSearchComponent_ng_container_113_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.syncForm.sYmd, $event) || (ctx_r1.syncForm.sYmd = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 6)(24, "label", 49);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function AttendanceSearchComponent_ng_container_113_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.syncForm.eYmd, $event) || (ctx_r1.syncForm.eYmd = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 55)(29, "label", 49);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function AttendanceSearchComponent_ng_container_113_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.syncForm.instanceId, $event) || (ctx_r1.syncForm.instanceId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 6)(34, "label", 49);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "nz-select", 57);
    \u0275\u0275twoWayListener("ngModelChange", function AttendanceSearchComponent_ng_container_113_Template_nz_select_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.syncForm.cancelYn, $event) || (ctx_r1.syncForm.cancelYn = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(38, "nz-option", 58)(39, "nz-option", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 6)(41, "label", 49);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function AttendanceSearchComponent_ng_container_113_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.syncForm.ifId, $event) || (ctx_r1.syncForm.ifId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 6)(46, "label", 49);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "nz-select", 61);
    \u0275\u0275twoWayListener("ngModelChange", function AttendanceSearchComponent_ng_container_113_Template_nz_select_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.syncForm.status, $event) || (ctx_r1.syncForm.status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(50, "nz-option", 62)(51, "nz-option", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 6)(53, "label", 49);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function AttendanceSearchComponent_ng_container_113_Template_input_ngModelChange_56_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.syncForm.reason, $event) || (ctx_r1.syncForm.reason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275element(57, "hr");
    \u0275\u0275template(58, AttendanceSearchComponent_ng_container_113_div_58_Template, 5, 6, "div", 65);
    \u0275\u0275elementStart(59, "div", 66)(60, "button", 67);
    \u0275\u0275listener("click", function AttendanceSearchComponent_ng_container_113_Template_button_click_60_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeSyncModal());
    });
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "button", 68);
    \u0275\u0275listener("click", function AttendanceSearchComponent_ng_container_113_Template_button_click_63_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sendSyncCleverse());
    });
    \u0275\u0275element(64, "i", 69);
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 24, "attSearch.syncModal.enterCd", "M\xE3 c\xF4ng ty"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.syncForm.enterCd);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 27, "attSearch.syncModal.sabun", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.syncForm.sabun);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 30, "attSearch.syncModal.gntCd", "M\xE3 ch\u1EA5m c\xF4ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.syncForm.gntCd);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 33, "attSearch.syncModal.sYmd", "Ng\xE0y b\u1EAFt \u0111\u1EA7u (YYYYMMDD)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.syncForm.sYmd);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 36, "attSearch.syncModal.eYmd", "Ng\xE0y k\u1EBFt th\xFAc (YYYYMMDD)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.syncForm.eYmd);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 39, "attSearch.syncModal.instanceId", "Instance ID"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.syncForm.instanceId);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 42, "attSearch.syncModal.cancelYn", "H\u1EE7y (Y/N)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.syncForm.cancelYn);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 45, "attSearch.syncModal.ifId", "Interface ID"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.syncForm.ifId);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 48, "attSearch.syncModal.status", "Tr\u1EA1ng th\xE1i"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.syncForm.status);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(55, 51, "attSearch.syncModal.reason", "L\xFD do"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.syncForm.reason);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.syncResult());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(62, 54, "common.cancel", "\u0110\xF3ng"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLoading", ctx_r1.syncSending());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(66, 57, "attSearch.syncModal.send", "G\u1EEDi"), " ");
  }
}
var I18N_KEYS = [
  "common.search.empIdOrName",
  "common.placeholder.enterEmpId",
  "common.deptName",
  "common.select",
  "common.fromDate",
  "common.toDate",
  "attSearch.empGroup",
  "attSearch.selectAttCode",
  "attSearch.shiftType",
  "attSearch.leaveType",
  "attSearch.all",
  "common.search",
  "common.clearFilter",
  "common.exportExcel",
  "attSearch.syncCleverseDev",
  "common.stt",
  "attSearch.workDate",
  "common.empId",
  "common.empName",
  "attSearch.position",
  "attSearch.fromTime",
  "attSearch.toTime",
  "attSearch.quantity",
  "attSearch.unit",
  "common.totalRows",
  "common.loadFail",
  "mep.msg.loadDeptFailed",
  "attSearch.syncModal.title",
  "attSearch.syncModal.enterCd",
  "attSearch.syncModal.sabun",
  "attSearch.syncModal.gntCd",
  "attSearch.syncModal.sYmd",
  "attSearch.syncModal.eYmd",
  "attSearch.syncModal.instanceId",
  "attSearch.syncModal.cancelYn",
  "attSearch.syncModal.ifId",
  "attSearch.syncModal.status",
  "attSearch.syncModal.reason",
  "attSearch.syncModal.send",
  "attSearch.syncModal.result",
  "common.cancel"
];
var PAGE_SIZE_OPTIONS = [25, 50, 100, 200, 500];
var AttendanceSearchComponent = class _AttendanceSearchComponent {
  constructor(api, i18n) {
    this.api = api;
    this.i18n = i18n;
  }
  api;
  i18n;
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
  deptTreeErrorMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "deptTreeErrorMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  deptNodes = signal(
    [],
    ...ngDevMode ? [{ debugName: "deptNodes" }] : (
      /* istanbul ignore next */
      []
    )
  );
  postFamilyOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "postFamilyOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  shiftOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "shiftOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  itemOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "itemOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** id -> danh sách id con trực tiếp - dùng để mở rộng lựa chọn cây phòng ban khi tra cứu (xem search()). */
  deptChildrenMap = /* @__PURE__ */ new Map();
  keyword = "";
  deptNos = [];
  fromDate = null;
  toDate = null;
  postFamily = null;
  shiftNo = null;
  itemNo = null;
  syncModalVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "syncModalVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  syncSending = signal(
    false,
    ...ngDevMode ? [{ debugName: "syncSending" }] : (
      /* istanbul ignore next */
      []
    )
  );
  syncResult = signal(
    null,
    ...ngDevMode ? [{ debugName: "syncResult" }] : (
      /* istanbul ignore next */
      []
    )
  );
  syncForm = this.defaultSyncForm();
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.initDefaultDateRange();
    this.loadDeptTree();
    this.loadCodeOptions();
    this.search();
  }
  search() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getList({
      keyword: this.keyword,
      deptNos: this.expandDeptSelection(this.deptNos).join(","),
      fromDate: this.formatYmd(this.fromDate),
      toDate: this.formatYmd(this.toDate),
      postFamily: this.postFamily ?? "",
      shiftNo: this.shiftNo ?? "",
      itemNo: this.itemNo ?? ""
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
    this.keyword = "";
    this.deptNos = [];
    this.postFamily = null;
    this.shiftNo = null;
    this.itemNo = null;
    this.initDefaultDateRange();
    this.search();
  }
  /** Xuất excel client-side (giống bản gốc DataTables Buttons, không có endpoint export riêng ở
   *  backend) - dùng thư viện xlsx (SheetJS) để tạo đúng file .xlsx nhị phân. */
  exportExcel() {
    const headers = [
      this.i18n.t("common.stt", "STT"),
      this.i18n.t("attSearch.workDate", "Ng\xE0y c\xF4ng"),
      this.i18n.t("common.empId", "M\xE3 nh\xE2n vi\xEAn"),
      this.i18n.t("common.empName", "T\xEAn nh\xE2n vi\xEAn"),
      this.i18n.t("common.deptName", "Ph\xF2ng ban"),
      this.i18n.t("attSearch.position", "Ch\u1EE9c v\u1EE5"),
      this.i18n.t("attSearch.shiftType", "Ca l\xE0m vi\u1EC7c"),
      this.i18n.t("attSearch.leaveType", "Lo\u1EA1i ngh\u1EC9 ph\xE9p"),
      this.i18n.t("attSearch.fromTime", "T\u1EEB th\u1EDDi gian"),
      this.i18n.t("attSearch.toTime", "\u0110\u1EBFn th\u1EDDi gian"),
      this.i18n.t("attSearch.quantity", "S\u1ED1 l\u01B0\u1EE3ng"),
      this.i18n.t("attSearch.unit", "\u0110\u01A1n v\u1ECB")
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      r.arDateStr,
      r.empId,
      r.localName,
      r.deptName,
      r.postGradeName,
      r.shiftName,
      r.itemName,
      r.fromTime,
      r.toTime,
      r.quantity,
      r.unit
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "TraCuuChamCong");
    writeFileSync(workbook, "attendance_search_export.xlsx");
  }
  openSyncModal() {
    this.syncForm = this.defaultSyncForm();
    this.syncResult.set(null);
    this.syncModalVisible.set(true);
  }
  closeSyncModal() {
    this.syncModalVisible.set(false);
  }
  sendSyncCleverse() {
    const f = this.syncForm;
    if (!f.enterCd?.trim() || !f.sabun?.trim() || !f.gntCd?.trim() || !f.sYmd?.trim() || !f.eYmd?.trim() || !f.instanceId?.trim()) {
      this.syncResult.set({
        success: false,
        text: "Vui l\xF2ng nh\u1EADp \u0111\u1EA7y \u0111\u1EE7 c\xE1c tr\u01B0\u1EDDng b\u1EAFt bu\u1ED9c: M\xE3 c\xF4ng ty, M\xE3 nh\xE2n vi\xEAn, M\xE3 ch\u1EA5m c\xF4ng, Ng\xE0y b\u1EAFt \u0111\u1EA7u, Ng\xE0y k\u1EBFt th\xFAc, Instance ID."
      });
      return;
    }
    this.syncSending.set(true);
    this.syncResult.set(null);
    this.api.syncCleverseTest(f).subscribe({
      next: (res) => {
        this.syncSending.set(false);
        this.syncResult.set(res.success ? { success: true, text: "K\u1EBFt qu\u1EA3: " + (res.result ?? "") } : { success: false, text: "L\u1ED7i: " + (res.message ?? "") });
      },
      error: (err) => {
        this.syncSending.set(false);
        this.syncResult.set({ success: false, text: "L\u1ED7i k\u1EBFt n\u1ED1i: " + (err?.status ?? "") + " " + (err?.statusText ?? "") });
      }
    });
  }
  defaultSyncForm() {
    return {
      enterCd: "HAPM",
      sabun: "19945437",
      gntCd: "517_EH",
      sYmd: "20260612",
      eYmd: "20260612",
      orgCd: "",
      instanceId: "HAPM19910157Q28242988",
      cancelYn: "N",
      ifId: "HHR",
      status: "0",
      reason: "Refresh"
    };
  }
  initDefaultDateRange() {
    const today = /* @__PURE__ */ new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    this.fromDate = yesterday;
    this.toDate = today;
  }
  formatYmd(d) {
    return d ? formatDate(d, "yyyy-MM-dd", "vi") : "";
  }
  loadDeptTree() {
    this.api.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(this.buildDeptTree(list ?? [])),
      error: () => this.deptTreeErrorMessage.set(this.i18n.t("mep.msg.loadDeptFailed", "L\u1ED7i khi t\u1EA3i danh s\xE1ch ph\xF2ng ban"))
    });
  }
  buildDeptTree(list) {
    const map = /* @__PURE__ */ new Map();
    list.forEach((d) => map.set(d.id, { title: d.text, key: d.id, parent: d.parent, children: [] }));
    this.deptChildrenMap = /* @__PURE__ */ new Map();
    const roots = [];
    map.forEach((node) => {
      if (node.parent && node.parent !== "0" && map.has(node.parent)) {
        map.get(node.parent).children.push(node);
        const siblings = this.deptChildrenMap.get(node.parent) ?? [];
        siblings.push(node.key);
        this.deptChildrenMap.set(node.parent, siblings);
      } else {
        roots.push(node);
      }
    });
    const markLeaf = (nodes) => {
      nodes.forEach((n) => {
        n.isLeaf = !n.children || n.children.length === 0;
        if (n.children?.length)
          markLeaf(n.children);
      });
    };
    markLeaf(roots);
    return roots;
  }
  /** nz-tree-select chỉ trả về key của node được tick trực tiếp - KHÔNG tự cascade xuống phòng ban
   *  con như widget DeptTree.js gốc. Backend lọc theo deptNos IN (...) đúng từng mã, nên nếu không
   *  mở rộng thủ công ở đây, chọn 1 phòng ban cha sẽ bỏ sót toàn bộ nhân viên ở các phòng ban con. */
  expandDeptSelection(selected) {
    const result = /* @__PURE__ */ new Set();
    const stack = [...selected];
    while (stack.length) {
      const id = stack.pop();
      if (result.has(id))
        continue;
      result.add(id);
      const children = this.deptChildrenMap.get(id);
      if (children)
        stack.push(...children);
    }
    return Array.from(result);
  }
  loadCodeOptions() {
    this.api.getCodeList("14015812").subscribe((list) => this.postFamilyOptions.set(list ?? []));
    this.api.getShiftOptions().subscribe((list) => this.shiftOptions.set(list ?? []));
    this.api.getItemOptions().subscribe((list) => this.itemOptions.set(list ?? []));
  }
  static \u0275fac = function AttendanceSearchComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AttendanceSearchComponent)(\u0275\u0275directiveInject(AttendanceSearchService), \u0275\u0275directiveInject(I18nService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AttendanceSearchComponent, selectors: [["app-attendance-search"]], decls: 114, vars: 140, consts: [["asTable", ""], ["asTotalTpl", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["nz-input", "", "name", "keyword", "id", "as-keyword", 3, "ngModelChange", "ngModel", "placeholder"], ["id", "as-deptNo", "name", "deptNos", "nzCheckable", "", "nzShowSearch", "", "nzAllowClear", "", "nzDropdownClassName", "as-dept-tree-dropdown", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["class", "text-danger small mt-1", 4, "ngIf"], [1, "col-md-2"], ["id", "as-fromDate", "name", "fromDate", "nzFormat", "yyyy-MM-dd", 1, "w-100", 3, "ngModelChange", "ngModel"], ["id", "as-toDate", "name", "toDate", "nzFormat", "yyyy-MM-dd", 1, "w-100", 3, "ngModelChange", "ngModel"], ["id", "as-postFamily", "name", "postFamily", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["id", "as-shiftNo", "name", "shiftNo", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["id", "as-itemNo", "name", "itemNo", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [1, "col-md-6", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit", "id", "as-btn-search"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", "id", "as-btn-clear", 3, "click"], [1, "bx", "bx-x"], ["nz-button", "", "nzType", "default", "type", "button", "id", "as-btn-export", 1, "btn-export", 3, "click"], [1, "bx", "bx-export"], ["nz-button", "", "nzType", "default", "type", "button", "id", "as-btn-sync-dev", 1, "btn-sync-dev", 3, "click"], [1, "bx", "bx-transfer"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [1, "table-nowrap", 3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "100px", 1, "text-center"], ["nzWidth", "150px"], ["nzWidth", "160px"], ["nzWidth", "120px"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "140px"], ["nzWidth", "90px", 1, "text-end"], ["nzWidth", "80px", 1, "text-center"], [4, "ngFor", "ngForOf"], ["nzWidth", "720px", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzFooter"], [4, "nzModalContent"], [1, "text-danger", "small", "mt-1"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], [1, "text-center"], [1, "text-end"], ["nzType", "info", "nzMessage", "DEV Endpoint: https://epdev.cleverse.hanwha.com/soap/org/neoHrWs", 1, "mb-3"], [1, "row", "g-3"], [1, "col-md-4"], [1, "form-label", "fw-bold"], ["nz-input", "", "id", "as-sync-enterCd", "name", "syncEnterCd", "maxlength", "10", 3, "ngModelChange", "ngModel"], ["nz-input", "", "id", "as-sync-sabun", "name", "syncSabun", "maxlength", "13", 3, "ngModelChange", "ngModel"], ["nz-input", "", "id", "as-sync-gntCd", "name", "syncGntCd", "maxlength", "10", 3, "ngModelChange", "ngModel"], ["nz-input", "", "id", "as-sync-sYmd", "name", "syncSYmd", "maxlength", "8", 3, "ngModelChange", "ngModel"], ["nz-input", "", "id", "as-sync-eYmd", "name", "syncEYmd", "maxlength", "8", 3, "ngModelChange", "ngModel"], [1, "col-md-6"], ["nz-input", "", "id", "as-sync-instanceId", "name", "syncInstanceId", "maxlength", "25", 3, "ngModelChange", "ngModel"], ["id", "as-sync-cancelYn", "name", "syncCancelYn", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nzValue", "N", "nzLabel", "N"], ["nzValue", "Y", "nzLabel", "Y"], ["nz-input", "", "id", "as-sync-ifId", "name", "syncIfId", "maxlength", "13", 3, "ngModelChange", "ngModel"], ["id", "as-sync-status", "name", "syncStatus", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nzValue", "0", "nzLabel", "0"], ["nzValue", "1", "nzLabel", "1"], ["nz-input", "", "id", "as-sync-reason", "name", "syncReason", "maxlength", "128", 3, "ngModelChange", "ngModel"], [4, "ngIf"], [1, "d-flex", "justify-content-end", "gap-2", "mt-3"], ["nz-button", "", "type", "button", 3, "click"], ["nz-button", "", "nzType", "primary", "type", "button", "id", "as-sync-send-btn", 3, "click", "nzLoading"], [1, "bx", "bx-send"], [3, "nzType", "nzMessage"]], template: function AttendanceSearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "nz-card", 4)(3, "form", 5);
      \u0275\u0275listener("ngSubmit", function AttendanceSearchComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 6)(5, "label", 7);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function AttendanceSearchComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.keyword, $event) || (ctx.keyword = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 6)(11, "label", 7);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "nz-tree-select", 9);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function AttendanceSearchComponent_Template_nz_tree_select_ngModelChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.deptNos, $event) || (ctx.deptNos = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275template(16, AttendanceSearchComponent_div_16_Template, 2, 1, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 11)(18, "label", 7);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "nz-date-picker", 12);
      \u0275\u0275twoWayListener("ngModelChange", function AttendanceSearchComponent_Template_nz_date_picker_ngModelChange_21_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.fromDate, $event) || (ctx.fromDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 11)(23, "label", 7);
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "nz-date-picker", 13);
      \u0275\u0275twoWayListener("ngModelChange", function AttendanceSearchComponent_Template_nz_date_picker_ngModelChange_26_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.toDate, $event) || (ctx.toDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 11)(28, "label", 7);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "nz-select", 14);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function AttendanceSearchComponent_Template_nz_select_ngModelChange_31_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.postFamily, $event) || (ctx.postFamily = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(33, AttendanceSearchComponent_nz_option_33_Template, 1, 2, "nz-option", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 6)(35, "label", 7);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "nz-select", 16);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function AttendanceSearchComponent_Template_nz_select_ngModelChange_38_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.shiftNo, $event) || (ctx.shiftNo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(40, AttendanceSearchComponent_nz_option_40_Template, 1, 2, "nz-option", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 6)(42, "label", 7);
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "nz-select", 17);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function AttendanceSearchComponent_Template_nz_select_ngModelChange_45_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.itemNo, $event) || (ctx.itemNo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(47, AttendanceSearchComponent_nz_option_47_Template, 1, 2, "nz-option", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 18)(49, "button", 19);
      \u0275\u0275element(50, "i", 20);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "button", 21);
      \u0275\u0275listener("click", function AttendanceSearchComponent_Template_button_click_53_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(54, "i", 22);
      \u0275\u0275text(55);
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "button", 23);
      \u0275\u0275listener("click", function AttendanceSearchComponent_Template_button_click_57_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(58, "i", 24);
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "button", 25);
      \u0275\u0275listener("click", function AttendanceSearchComponent_Template_button_click_61_listener() {
        return ctx.openSyncModal();
      });
      \u0275\u0275element(62, "i", 26);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(65, "nz-card");
      \u0275\u0275template(66, AttendanceSearchComponent_nz_alert_66_Template, 1, 1, "nz-alert", 27);
      \u0275\u0275elementStart(67, "nz-table", 28, 0)(69, "thead")(70, "tr")(71, "th", 29);
      \u0275\u0275text(72);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "th", 30);
      \u0275\u0275text(75);
      \u0275\u0275pipe(76, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "th", 30);
      \u0275\u0275text(78);
      \u0275\u0275pipe(79, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "th", 31);
      \u0275\u0275text(81);
      \u0275\u0275pipe(82, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "th", 32);
      \u0275\u0275text(84);
      \u0275\u0275pipe(85, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "th", 33);
      \u0275\u0275text(87);
      \u0275\u0275pipe(88, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "th", 34);
      \u0275\u0275text(90);
      \u0275\u0275pipe(91, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "th", 35);
      \u0275\u0275text(93);
      \u0275\u0275pipe(94, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "th", 30);
      \u0275\u0275text(96);
      \u0275\u0275pipe(97, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "th", 30);
      \u0275\u0275text(99);
      \u0275\u0275pipe(100, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "th", 36);
      \u0275\u0275text(102);
      \u0275\u0275pipe(103, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "th", 37);
      \u0275\u0275text(105);
      \u0275\u0275pipe(106, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(107, "tbody");
      \u0275\u0275template(108, AttendanceSearchComponent_tr_108_Template, 25, 18, "tr", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275template(109, AttendanceSearchComponent_ng_template_109_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(111, "nz-modal", 39);
      \u0275\u0275pipe(112, "translate");
      \u0275\u0275listener("nzOnCancel", function AttendanceSearchComponent_Template_nz_modal_nzOnCancel_111_listener() {
        return ctx.closeSyncModal();
      });
      \u0275\u0275template(113, AttendanceSearchComponent_ng_container_113_Template, 67, 60, "ng-container", 40);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const asTable_r11 = \u0275\u0275reference(68);
      const asTotalTpl_r12 = \u0275\u0275reference(110);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 52, "common.search.empIdOrName", "M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.keyword);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 55, "common.placeholder.enterEmpId", "Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 58, "common.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzNodes", ctx.deptNodes());
      \u0275\u0275twoWayProperty("ngModel", ctx.deptNos);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(15, 61, "common.select", "Ch\u1ECDn ph\xF2ng ban"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.deptTreeErrorMessage());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 64, "common.fromDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.fromDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 67, "common.toDate", "Ng\xE0y k\u1EBFt th\xFAc"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.toDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 70, "attSearch.empGroup", "Nh\xF3m nh\xE2n vi\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.postFamily);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(32, 73, "attSearch.selectAttCode", "-- Ch\u1ECDn m\xE3 ch\u1EA5m c\xF4ng --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.postFamilyOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 76, "attSearch.shiftType", "Ca l\xE0m vi\u1EC7c"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.shiftNo);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(39, 79, "attSearch.all", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.shiftOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 82, "attSearch.leaveType", "Lo\u1EA1i ngh\u1EC9 ph\xE9p"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.itemNo);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(46, 85, "attSearch.all", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.itemOptions());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(52, 88, "common.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(56, 91, "common.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(60, 94, "common.exportExcel", "Xu\u1EA5t excel"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(64, 97, "attSearch.syncCleverseDev", "Test \u0110\u1ED3ng B\u1ED9 Cleverse (DEV)"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", asTotalTpl_r12)("nzScroll", \u0275\u0275pureFunction0(139, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(73, 100, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(76, 103, "attSearch.workDate", "Ng\xE0y c\xF4ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(79, 106, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(82, 109, "common.empName", "T\xEAn nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(85, 112, "common.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(88, 115, "attSearch.position", "Ch\u1EE9c v\u1EE5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(91, 118, "attSearch.shiftType", "Ca l\xE0m vi\u1EC7c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(94, 121, "attSearch.leaveType", "Lo\u1EA1i ngh\u1EC9 ph\xE9p"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(97, 124, "attSearch.fromTime", "T\u1EEB th\u1EDDi gian"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(100, 127, "attSearch.toTime", "\u0110\u1EBFn th\u1EDDi gian"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(103, 130, "attSearch.quantity", "S\u1ED1 l\u01B0\u1EE3ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(106, 133, "attSearch.unit", "\u0110\u01A1n v\u1ECB"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", asTable_r11.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.syncModalVisible())("nzTitle", \u0275\u0275pipeBind2(112, 136, "attSearch.syncModal.title", "Test G\u1EEDi Ch\u1EA5m C\xF4ng L\xEAn Cleverse"))("nzFooter", null);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzDatePickerModule, NzDatePickerComponent, NzTreeSelectModule, NzTreeSelectComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\n.btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n.btn-sync-dev[_ngcontent-%COMP%] {\n  color: #faad14;\n  border-color: #faad14;\n}\n/*# sourceMappingURL=attendance-search.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttendanceSearchComponent, [{
    type: Component,
    args: [{ selector: "app-attendance-search", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzSelectModule,
      NzButtonModule,
      NzDatePickerModule,
      NzTreeSelectModule,
      NzModalModule,
      NzAlertModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm - \u0111\u1EE9ng im khi cu\u1ED9n (xem .sticky-filter-card trong styles.css) -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3" (ngSubmit)="search()">
        <div class="col-md-3">
          <label class="form-label">{{ 'common.search.empIdOrName' | translate:'M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn' }}</label>
          <input nz-input [(ngModel)]="keyword" name="keyword" id="as-keyword"
                 [placeholder]="'common.placeholder.enterEmpId' | translate:'Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn'">
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</label>
          <nz-tree-select class="w-100" id="as-deptNo" [nzNodes]="deptNodes()" [(ngModel)]="deptNos" name="deptNos"
                           nzCheckable nzShowSearch nzAllowClear
                           [nzPlaceHolder]="'common.select' | translate:'Ch\u1ECDn ph\xF2ng ban'"
                           nzDropdownClassName="as-dept-tree-dropdown"></nz-tree-select>
          <div *ngIf="deptTreeErrorMessage()" class="text-danger small mt-1">{{ deptTreeErrorMessage() }}</div>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'common.fromDate' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u' }}</label>
          <nz-date-picker class="w-100" id="as-fromDate" [(ngModel)]="fromDate" name="fromDate" nzFormat="yyyy-MM-dd"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'common.toDate' | translate:'Ng\xE0y k\u1EBFt th\xFAc' }}</label>
          <nz-date-picker class="w-100" id="as-toDate" [(ngModel)]="toDate" name="toDate" nzFormat="yyyy-MM-dd"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'attSearch.empGroup' | translate:'Nh\xF3m nh\xE2n vi\xEAn' }}</label>
          <nz-select class="w-100" id="as-postFamily" [(ngModel)]="postFamily" name="postFamily" nzAllowClear
                     [nzPlaceHolder]="'attSearch.selectAttCode' | translate:'-- Ch\u1ECDn m\xE3 ch\u1EA5m c\xF4ng --'">
            <nz-option *ngFor="let c of postFamilyOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'attSearch.shiftType' | translate:'Ca l\xE0m vi\u1EC7c' }}</label>
          <nz-select class="w-100" id="as-shiftNo" [(ngModel)]="shiftNo" name="shiftNo" nzAllowClear
                     [nzPlaceHolder]="'attSearch.all' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let s of shiftOptions()" [nzValue]="s.shiftNo" [nzLabel]="s.nameVi || s.shiftName || s.shiftNo"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'attSearch.leaveType' | translate:'Lo\u1EA1i ngh\u1EC9 ph\xE9p' }}</label>
          <nz-select class="w-100" id="as-itemNo" [(ngModel)]="itemNo" name="itemNo" nzAllowClear
                     [nzPlaceHolder]="'attSearch.all' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let it of itemOptions()" [nzValue]="it.itemNo" [nzLabel]="it.itemName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-6 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit" id="as-btn-search">
            <i class="bx bx-search"></i> {{ 'common.search' | translate:'Tra c\u1EE9u' }}
          </button>
          <button nz-button type="button" id="as-btn-clear" (click)="clearSearch()">
            <i class="bx bx-x"></i> {{ 'common.clearFilter' | translate:'X\xF3a l\u1ECDc' }}
          </button>
          <button nz-button nzType="default" type="button" class="btn-export" id="as-btn-export" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'common.exportExcel' | translate:'Xu\u1EA5t excel' }}
          </button>
          <button nz-button nzType="default" class="btn-sync-dev" type="button" id="as-btn-sync-dev" (click)="openSyncModal()">
            <i class="bx bx-transfer"></i> {{ 'attSearch.syncCleverseDev' | translate:'Test \u0110\u1ED3ng B\u1ED9 Cleverse (DEV)' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="asTotalTpl"
                [nzScroll]="{ x: '1360px', y: 'calc(100vh - 420px)' }"
                class="table-nowrap" #asTable>
        <!-- nzWidth khai b\xE1o cho t\u1EEBng c\u1ED9t \u0111\u1EC3 \u0111\u1ED3ng b\u1ED9 \u0111\u1ED9 r\u1ED9ng header/body khi d\xF9ng nzScroll. -->
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'attSearch.workDate' | translate:'Ng\xE0y c\xF4ng' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
            <th nzWidth="150px">{{ 'common.empName' | translate:'T\xEAn nh\xE2n vi\xEAn' }}</th>
            <th nzWidth="160px">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
            <th nzWidth="120px">{{ 'attSearch.position' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'attSearch.shiftType' | translate:'Ca l\xE0m vi\u1EC7c' }}</th>
            <th nzWidth="140px">{{ 'attSearch.leaveType' | translate:'Lo\u1EA1i ngh\u1EC9 ph\xE9p' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'attSearch.fromTime' | translate:'T\u1EEB th\u1EDDi gian' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'attSearch.toTime' | translate:'\u0110\u1EBFn th\u1EDDi gian' }}</th>
            <th class="text-end" nzWidth="90px">{{ 'attSearch.quantity' | translate:'S\u1ED1 l\u01B0\u1EE3ng' }}</th>
            <th class="text-center" nzWidth="80px">{{ 'attSearch.unit' | translate:'\u0110\u01A1n v\u1ECB' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of asTable.data; let i = index">
            <td class="text-center">{{ i + 1 }}</td>
            <td class="text-center">{{ row.arDateStr }}</td>
            <td class="text-center" [attr.title]="row.empId || null">{{ row.empId }}</td>
            <td [attr.title]="row.localName || null">{{ row.localName }}</td>
            <td [attr.title]="row.deptName || null">{{ row.deptName }}</td>
            <td [attr.title]="row.postGradeName || null">{{ row.postGradeName }}</td>
            <td class="text-center" [attr.title]="row.shiftName || null">{{ row.shiftName }}</td>
            <td [attr.title]="row.itemName || null">{{ row.itemName }}</td>
            <td class="text-center">{{ row.fromTime }}</td>
            <td class="text-center">{{ row.toTime }}</td>
            <td class="text-end">{{ row.quantity }}</td>
            <td class="text-center">{{ row.unit }}</td>
          </tr>
        </tbody>
        <ng-template #asTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal test \u0111\u1ED3ng b\u1ED9 Cleverse (DEV) - c\xF4ng c\u1EE5 n\u1ED9i b\u1ED9, gi\u1EEF nguy\xEAn h\xE0nh vi b\u1EA3n g\u1ED1c (g\u1ECDi l\u1EA1i API
     /ar/attendanceMintenance/api/syncCleverse/test, kh\xF4ng \u0111\u1ED5i backend). -->
<nz-modal [nzVisible]="syncModalVisible()" [nzTitle]="'attSearch.syncModal.title' | translate:'Test G\u1EEDi Ch\u1EA5m C\xF4ng L\xEAn Cleverse'"
          nzWidth="720px" (nzOnCancel)="closeSyncModal()" [nzFooter]="null">
  <ng-container *nzModalContent>
    <nz-alert nzType="info" class="mb-3"
              nzMessage="DEV Endpoint: https://epdev.cleverse.hanwha.com/soap/org/neoHrWs"></nz-alert>
    <form class="row g-3">
      <div class="col-md-4">
        <label class="form-label fw-bold">{{ 'attSearch.syncModal.enterCd' | translate:'M\xE3 c\xF4ng ty' }}</label>
        <input nz-input id="as-sync-enterCd" [(ngModel)]="syncForm.enterCd" name="syncEnterCd" maxlength="10">
      </div>
      <div class="col-md-4">
        <label class="form-label fw-bold">{{ 'attSearch.syncModal.sabun' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</label>
        <input nz-input id="as-sync-sabun" [(ngModel)]="syncForm.sabun" name="syncSabun" maxlength="13">
      </div>
      <div class="col-md-4">
        <label class="form-label fw-bold">{{ 'attSearch.syncModal.gntCd' | translate:'M\xE3 ch\u1EA5m c\xF4ng' }}</label>
        <input nz-input id="as-sync-gntCd" [(ngModel)]="syncForm.gntCd" name="syncGntCd" maxlength="10">
      </div>
      <div class="col-md-3">
        <label class="form-label fw-bold">{{ 'attSearch.syncModal.sYmd' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u (YYYYMMDD)' }}</label>
        <input nz-input id="as-sync-sYmd" [(ngModel)]="syncForm.sYmd" name="syncSYmd" maxlength="8">
      </div>
      <div class="col-md-3">
        <label class="form-label fw-bold">{{ 'attSearch.syncModal.eYmd' | translate:'Ng\xE0y k\u1EBFt th\xFAc (YYYYMMDD)' }}</label>
        <input nz-input id="as-sync-eYmd" [(ngModel)]="syncForm.eYmd" name="syncEYmd" maxlength="8">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-bold">{{ 'attSearch.syncModal.instanceId' | translate:'Instance ID' }}</label>
        <input nz-input id="as-sync-instanceId" [(ngModel)]="syncForm.instanceId" name="syncInstanceId" maxlength="25">
      </div>
      <div class="col-md-3">
        <label class="form-label fw-bold">{{ 'attSearch.syncModal.cancelYn' | translate:'H\u1EE7y (Y/N)' }}</label>
        <nz-select class="w-100" id="as-sync-cancelYn" [(ngModel)]="syncForm.cancelYn" name="syncCancelYn">
          <nz-option nzValue="N" nzLabel="N"></nz-option>
          <nz-option nzValue="Y" nzLabel="Y"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-3">
        <label class="form-label fw-bold">{{ 'attSearch.syncModal.ifId' | translate:'Interface ID' }}</label>
        <input nz-input id="as-sync-ifId" [(ngModel)]="syncForm.ifId" name="syncIfId" maxlength="13">
      </div>
      <div class="col-md-3">
        <label class="form-label fw-bold">{{ 'attSearch.syncModal.status' | translate:'Tr\u1EA1ng th\xE1i' }}</label>
        <nz-select class="w-100" id="as-sync-status" [(ngModel)]="syncForm.status" name="syncStatus">
          <nz-option nzValue="0" nzLabel="0"></nz-option>
          <nz-option nzValue="1" nzLabel="1"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-3">
        <label class="form-label fw-bold">{{ 'attSearch.syncModal.reason' | translate:'L\xFD do' }}</label>
        <input nz-input id="as-sync-reason" [(ngModel)]="syncForm.reason" name="syncReason" maxlength="128">
      </div>
    </form>
    <hr>
    <div *ngIf="syncResult() as res">
      <label class="form-label fw-bold">{{ 'attSearch.syncModal.result' | translate:'K\u1EBFt qu\u1EA3' }}</label>
      <nz-alert [nzType]="res.success ? 'success' : 'error'" [nzMessage]="res.text"></nz-alert>
    </div>
    <div class="d-flex justify-content-end gap-2 mt-3">
      <button nz-button type="button" (click)="closeSyncModal()">{{ 'common.cancel' | translate:'\u0110\xF3ng' }}</button>
      <button nz-button nzType="primary" type="button" id="as-sync-send-btn" [nzLoading]="syncSending()" (click)="sendSyncCleverse()">
        <i class="bx bx-send"></i> {{ 'attSearch.syncModal.send' | translate:'G\u1EEDi' }}
      </button>
    </div>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/attendance-search/attendance-search.component.css */\n.btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n.btn-sync-dev {\n  color: #faad14;\n  border-color: #faad14;\n}\n/*# sourceMappingURL=attendance-search.component.css.map */\n"] }]
  }], () => [{ type: AttendanceSearchService }, { type: I18nService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AttendanceSearchComponent, { className: "AttendanceSearchComponent", filePath: "src/app/attendance-search/attendance-search.component.ts", lineNumber: 73 });
})();
export {
  AttendanceSearchComponent
};
//# debugId=037710af-a735-5479-b579-e3335146ae67
//# sourceMappingURL=chunk-YXNBIGDR.js.map
