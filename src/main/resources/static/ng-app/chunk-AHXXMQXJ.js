import {
  NzInputNumberComponent,
  NzInputNumberModule
} from "./chunk-IXCMIWQQ.js";
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
  NzOptionComponent,
  NzSelectComponent,
  NzSelectModule
} from "./chunk-2QLZSMGV.js";
import {
  NzAlertComponent,
  NzAlertModule
} from "./chunk-BYJYXGGS.js";
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
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTW5U2M5.js";

// src/app/view-company-calendar/view-company-calendar.service.ts
var API_BASE = "/ar/attendanceSettings/api/calender";
var SHIFT_API = "/ar/attendanceSettings/api/shift";
var ViewCompanyCalendarService = class _ViewCompanyCalendarService {
  constructor(http) {
    this.http = http;
  }
  http;
  getMonth(year, month) {
    const params = new HttpParams().set("year", year).set("month", month);
    return this.http.get(`${API_BASE}/month`, { params, withCredentials: true });
  }
  getDayDetail(ddateStr) {
    const params = new HttpParams().set("ddateStr", ddateStr);
    return this.http.get(`${API_BASE}/holidays/detail`, { params, withCredentials: true });
  }
  saveDay(payload) {
    return this.http.post(`${API_BASE}/holidays/save`, payload, {
      withCredentials: true
    });
  }
  getShiftList() {
    return this.http.get(SHIFT_API, { withCredentials: true });
  }
  getCodeList(parentCodeNo) {
    return this.http.get("/sys/api/getCode/list", {
      params: new HttpParams().set("parentCodeNo", parentCodeNo),
      withCredentials: true
    });
  }
  static \u0275fac = function ViewCompanyCalendarService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewCompanyCalendarService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewCompanyCalendarService, factory: _ViewCompanyCalendarService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewCompanyCalendarService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-company-calendar/view-company-calendar.component.ts
function ViewCompanyCalendarComponent_nz_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 32);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const m_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzValue", m_r1)("nzLabel", \u0275\u0275pipeBind1(1, 2, ctx_r1.monthKeys[m_r1 - 1]));
  }
}
function ViewCompanyCalendarComponent_nz_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 32);
  }
  if (rf & 2) {
    const y_r3 = ctx.$implicit;
    \u0275\u0275property("nzValue", y_r3)("nzLabel", y_r3);
  }
}
function ViewCompanyCalendarComponent_nz_alert_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 33);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ViewCompanyCalendarComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1, "...");
    \u0275\u0275elementEnd();
  }
}
function ViewCompanyCalendarComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewCompanyCalendarComponent_ng_container_51_div_1_div_1_ng_container_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "cccal.tag.weekend", "Cu\u1ED1i tu\u1EA7n"));
  }
}
function ViewCompanyCalendarComponent_ng_container_51_div_1_div_1_ng_container_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, cell_r5.hasWork ? "cccal.status.work" : "companyCal.dayOff", cell_r5.hasWork ? "Ng\xE0y th\u01B0\u1EDDng" : "Ngh\u1EC9"));
  }
}
function ViewCompanyCalendarComponent_ng_container_51_div_1_div_1_ng_container_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cell_r5.item?.shiftName || ctx_r1.shiftLabel(cell_r5.item?.shiftNo) || "Ca h\xE0nh ch\xEDnh");
  }
}
function ViewCompanyCalendarComponent_ng_container_51_div_1_div_1_ng_container_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 51);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2605 ", \u0275\u0275pipeBind2(2, 1, "companyCal.statutory", "L\u1EC5 ph\xE1p \u0111\u1ECBnh"));
  }
}
function ViewCompanyCalendarComponent_ng_container_51_div_1_div_1_ng_container_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cell_r5.item?.typeidName);
  }
}
function ViewCompanyCalendarComponent_ng_container_51_div_1_div_1_ng_container_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275attribute("title", cell_r5.item?.remark);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2014 ", cell_r5.item?.remark);
  }
}
function ViewCompanyCalendarComponent_ng_container_51_div_1_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 39)(2, "span", 40);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 41);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 42);
    \u0275\u0275template(9, ViewCompanyCalendarComponent_ng_container_51_div_1_div_1_ng_container_1_span_9_Template, 3, 4, "span", 43)(10, ViewCompanyCalendarComponent_ng_container_51_div_1_div_1_ng_container_1_span_10_Template, 3, 4, "span", 44)(11, ViewCompanyCalendarComponent_ng_container_51_div_1_div_1_ng_container_1_span_11_Template, 2, 1, "span", 45)(12, ViewCompanyCalendarComponent_ng_container_51_div_1_div_1_ng_container_1_span_12_Template, 3, 4, "span", 46)(13, ViewCompanyCalendarComponent_ng_container_51_div_1_div_1_ng_container_1_span_13_Template, 2, 1, "span", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, ViewCompanyCalendarComponent_ng_container_51_div_1_div_1_ng_container_1_div_14_Template, 2, 2, "div", 47);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-sun", cell_r5.isSunday)("is-sat", cell_r5.isSaturday);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cell_r5.day);
    \u0275\u0275advance();
    \u0275\u0275classProp("s-holiday", cell_r5.isStatutory)("s-work", !cell_r5.isStatutory && cell_r5.hasWork)("s-rest", !cell_r5.isStatutory && !cell_r5.hasWork);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cell_r5.isStatutory ? \u0275\u0275pipeBind2(6, 18, "companyCal.statutory", "L\u1EC5 ph\xE1p \u0111\u1ECBnh") : \u0275\u0275pipeBind1(7, 21, cell_r5.hasWork ? "cccal.status.work" : "cccal.status.rest"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", cell_r5.isWeekend);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !cell_r5.isWeekend);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cell_r5.hasWork);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cell_r5.isStatutory);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cell_r5.item?.typeidName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cell_r5.item?.remark);
  }
}
function ViewCompanyCalendarComponent_ng_container_51_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275listener("click", function ViewCompanyCalendarComponent_ng_container_51_div_1_div_1_Template_div_click_0_listener() {
      const cell_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.dayClick(cell_r5));
    });
    \u0275\u0275template(1, ViewCompanyCalendarComponent_ng_container_51_div_1_div_1_ng_container_1_Template, 15, 23, "ng-container", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r5 = ctx.$implicit;
    \u0275\u0275classProp("is-empty", cell_r5.isEmpty)("is-today", cell_r5.isToday)("is-statutory", !cell_r5.isEmpty && cell_r5.isStatutory)("is-rest", !cell_r5.isEmpty && !cell_r5.isStatutory && !cell_r5.hasWork)("is-work", !cell_r5.isEmpty && !cell_r5.isStatutory && cell_r5.hasWork)("vcompcal-clickable", !cell_r5.isEmpty);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !cell_r5.isEmpty);
  }
}
function ViewCompanyCalendarComponent_ng_container_51_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275template(1, ViewCompanyCalendarComponent_ng_container_51_div_1_div_1_Template, 2, 13, "div", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const week_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", week_r6);
  }
}
function ViewCompanyCalendarComponent_ng_container_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ViewCompanyCalendarComponent_ng_container_51_div_1_Template, 2, 1, "div", 35);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.weeks());
  }
}
function ViewCompanyCalendarComponent_ng_container_72_nz_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 32);
  }
  if (rf & 2) {
    const s_r8 = ctx.$implicit;
    \u0275\u0275property("nzValue", s_r8.shiftNo)("nzLabel", s_r8.nameVi || s_r8.shiftNo);
  }
}
function ViewCompanyCalendarComponent_ng_container_72_nz_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 32);
  }
  if (rf & 2) {
    const t_r9 = ctx.$implicit;
    \u0275\u0275property("nzValue", t_r9.codeNo)("nzLabel", t_r9.codeName);
  }
}
function ViewCompanyCalendarComponent_ng_container_72_nz_option_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 32);
  }
  if (rf & 2) {
    const t_r10 = ctx.$implicit;
    \u0275\u0275property("nzValue", t_r10.codeNo)("nzLabel", t_r10.codeName);
  }
}
function ViewCompanyCalendarComponent_ng_container_72_nz_option_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 32);
  }
  if (rf & 2) {
    const t_r11 = ctx.$implicit;
    \u0275\u0275property("nzValue", t_r11.codeNo)("nzLabel", t_r11.codeName);
  }
}
function ViewCompanyCalendarComponent_ng_container_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 53)(2, "div", 54)(3, "div", 55)(4, "label");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "nz-select", 56);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCompanyCalendarComponent_ng_container_72_Template_nz_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.workdayflag, $event) || (ctx_r1.editForm.workdayflag = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(8, "nz-option", 32);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275element(10, "nz-option", 32);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 55)(13, "label");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "nz-select", 57);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCompanyCalendarComponent_ng_container_72_Template_nz_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.shiftNo, $event) || (ctx_r1.editForm.shiftNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(17, ViewCompanyCalendarComponent_ng_container_72_nz_option_17_Template, 1, 2, "nz-option", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 58)(19, "div", 55)(20, "label");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "nz-select", 59);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCompanyCalendarComponent_ng_container_72_Template_nz_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.typeid, $event) || (ctx_r1.editForm.typeid = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(24, ViewCompanyCalendarComponent_ng_container_72_nz_option_24_Template, 1, 2, "nz-option", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 55)(26, "label");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "nz-select", 60);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCompanyCalendarComponent_ng_container_72_Template_nz_select_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.overtypeid, $event) || (ctx_r1.editForm.overtypeid = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(30, ViewCompanyCalendarComponent_ng_container_72_nz_option_30_Template, 1, 2, "nz-option", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 55)(32, "label");
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "nz-select", 61);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCompanyCalendarComponent_ng_container_72_Template_nz_select_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.typeidDefault, $event) || (ctx_r1.editForm.typeidDefault = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(36, ViewCompanyCalendarComponent_ng_container_72_nz_option_36_Template, 1, 2, "nz-option", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 54)(38, "div", 55)(39, "label");
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "nz-select", 62);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCompanyCalendarComponent_ng_container_72_Template_nz_select_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.statutoryFlag, $event) || (ctx_r1.editForm.statutoryFlag = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(43, "nz-option", 32);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275element(45, "nz-option", 32);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 55)(48, "label");
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCompanyCalendarComponent_ng_container_72_Template_input_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.operationId, $event) || (ctx_r1.editForm.operationId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 58)(53, "div", 55)(54, "label");
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "nz-input-number", 64);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCompanyCalendarComponent_ng_container_72_Template_nz_input_number_ngModelChange_57_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.orderno, $event) || (ctx_r1.editForm.orderno = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 55)(59, "label");
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "nz-select", 65);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCompanyCalendarComponent_ng_container_72_Template_nz_select_ngModelChange_62_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.activity, $event) || (ctx_r1.editForm.activity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(63, "nz-option", 32);
    \u0275\u0275pipe(64, "translate");
    \u0275\u0275element(65, "nz-option", 32);
    \u0275\u0275pipe(66, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275element(67, "div", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 55)(69, "label");
    \u0275\u0275text(70);
    \u0275\u0275pipe(71, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCompanyCalendarComponent_ng_container_72_Template_input_ngModelChange_72_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.remark, $event) || (ctx_r1.editForm.remark = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 41, "cccal.label.workdayflag", "Ng\xE0y l\xE0m vi\u1EC7c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.workdayflag);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzValue", 0)("nzLabel", \u0275\u0275pipeBind2(9, 44, "cccal.option.restday", "0 \u2014 Ng\xE0y ngh\u1EC9"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzValue", 1)("nzLabel", \u0275\u0275pipeBind2(11, 47, "cccal.option.workday", "1 \u2014 Ng\xE0y l\xE0m vi\u1EC7c"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 50, "cccal.label.shiftNo", "Ca l\xE0m vi\u1EC7c (Shift No)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.shiftNo);
    \u0275\u0275property("nzAllowClear", true);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.shiftOptions());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 53, "cccal.label.typeid", "TypeID"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.typeid);
    \u0275\u0275property("nzAllowClear", true);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.typeOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 56, "cccal.label.overtypeid", "OvertypeID"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.overtypeid);
    \u0275\u0275property("nzAllowClear", true);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.typeOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 59, "cccal.label.typeidDefault", "TypeID m\u1EB7c \u0111\u1ECBnh"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.typeidDefault);
    \u0275\u0275property("nzAllowClear", true);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.typeOptions());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 62, "companyCal.statutoryFlag", "Ng\xE0y l\u1EC5 ph\xE1p \u0111\u1ECBnh"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.statutoryFlag);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzValue", 0)("nzLabel", \u0275\u0275pipeBind2(44, 65, "common.no", "Kh\xF4ng"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzValue", 1)("nzLabel", \u0275\u0275pipeBind2(46, 68, "companyCal.statutory", "L\u1EC5 ph\xE1p \u0111\u1ECBnh"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 71, "cccal.label.operationId", "Operation ID"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.operationId);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(56, 74, "cccal.label.orderno", "S\u1EAFp x\u1EBFp"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.orderno);
    \u0275\u0275property("nzMin", 0);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(61, 77, "cccal.label.activity", "Tr\u1EA1ng th\xE1i"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.activity);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzValue", 1)("nzLabel", \u0275\u0275pipeBind2(64, 80, "cccal.option.active", "Ho\u1EA1t \u0111\u1ED9ng"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzValue", 0)("nzLabel", \u0275\u0275pipeBind2(66, 83, "cccal.option.inactive", "Ng\u1EEBng"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(71, 86, "shl.description", "Ghi ch\xFA"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.remark);
    \u0275\u0275control();
  }
}
var TYPE_PARENT_CODE = "1439";
var YEAR_RANGE = 5;
var I18N_KEYS = [
  "cccal.btn.prevMonth",
  "cccal.btn.nextMonth",
  "cccal.btn.search",
  "cccal.btn.addNew",
  "cccal.btn.close",
  "cccal.btn.save",
  "cccal.month.1",
  "cccal.month.2",
  "cccal.month.3",
  "cccal.month.4",
  "cccal.month.5",
  "cccal.month.6",
  "cccal.month.7",
  "cccal.month.8",
  "cccal.month.9",
  "cccal.month.10",
  "cccal.month.11",
  "cccal.month.12",
  "cccal.day.sun",
  "cccal.day.mon",
  "cccal.day.tue",
  "cccal.day.wed",
  "cccal.day.thu",
  "cccal.day.fri",
  "cccal.day.sat",
  "cccal.legend.workday",
  "cccal.legend.restday",
  "cccal.legend.today",
  "cccal.modal.editTitle",
  "cccal.label.workdayflag",
  "cccal.option.restday",
  "cccal.option.workday",
  "cccal.label.shiftNo",
  "cccal.label.typeidDefault",
  "cccal.label.typeid",
  "cccal.label.overtypeid",
  "cccal.label.operationId",
  "cccal.label.orderno",
  "cccal.label.activity",
  "cccal.option.active",
  "cccal.option.inactive",
  "cccal.status.work",
  "cccal.status.rest",
  "cccal.tag.weekend",
  "cccal.msg.invalidData",
  "cccal.msg.error",
  "cccal.msg.unknownError",
  "common.noData",
  "common.addNew",
  "common.no",
  "shl.description",
  "companyCal.statutoryFlag",
  "companyCal.statutory",
  "companyCal.dayOff",
  "companyCal.loadFail",
  "companyCal.saveSuccess",
  "companyCal.saveFail"
];
var EMPTY_EDIT_FORM = {
  ddateStr: "",
  workdayflag: 0,
  shiftNo: null,
  typeid: null,
  overtypeid: null,
  typeidDefault: null,
  statutoryFlag: 0,
  operationId: null,
  orderno: 0,
  remark: null,
  activity: 1
};
var ViewCompanyCalendarComponent = class _ViewCompanyCalendarComponent {
  constructor(api, i18n, message) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
  }
  api;
  i18n;
  message;
  monthKeys = [
    "cccal.month.1",
    "cccal.month.2",
    "cccal.month.3",
    "cccal.month.4",
    "cccal.month.5",
    "cccal.month.6",
    "cccal.month.7",
    "cccal.month.8",
    "cccal.month.9",
    "cccal.month.10",
    "cccal.month.11",
    "cccal.month.12"
  ];
  monthOptions = Array.from({ length: 12 }, (_, i) => i + 1);
  yearOptions = this.buildYearOptions();
  weeks = signal(
    [],
    ...ngDevMode ? [{ debugName: "weeks" }] : (
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
  shiftOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "shiftOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  typeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "typeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedMonth = (/* @__PURE__ */ new Date()).getMonth() + 1;
  selectedYear = (/* @__PURE__ */ new Date()).getFullYear();
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
    () => {
      const [y, m, d] = (this.editForm.ddateStr || "").split("/");
      const display = y && m && d ? `${d}/${m}/${y}` : "";
      return `${this.isNew() ? this.i18n.t("common.addNew", "Th\xEAm m\u1EDBi") : this.i18n.t("cccal.modal.editTitle", "C\u1EADp nh\u1EADt ng\xE0y")} \u2014 ${display}`;
    },
    ...ngDevMode ? [{ debugName: "modalTitle" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editForm = __spreadValues({}, EMPTY_EDIT_FORM);
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getCodeList(TYPE_PARENT_CODE).subscribe((list) => this.typeOptions.set(list ?? []));
    this.api.getShiftList().subscribe((list) => this.shiftOptions.set(list ?? []));
    this.loadMonth();
  }
  prevMonth() {
    if (--this.selectedMonth < 1) {
      this.selectedMonth = 12;
      this.selectedYear--;
    }
    this.loadMonth();
  }
  nextMonth() {
    if (++this.selectedMonth > 12) {
      this.selectedMonth = 1;
      this.selectedYear++;
    }
    this.loadMonth();
  }
  search() {
    this.loadMonth();
  }
  shiftLabel(shiftNo) {
    if (!shiftNo)
      return "";
    const shift = this.shiftOptions().find((s) => s.shiftNo === shiftNo);
    return shift?.nameVi || shiftNo;
  }
  dayClick(cell) {
    if (cell.isEmpty)
      return;
    this.openModal(cell.dateKey, cell.item);
  }
  // ==================== Modal Thêm mới / Cập nhật 1 ngày ====================
  openAddModal() {
    const t = /* @__PURE__ */ new Date();
    const key = `${t.getFullYear()}/${String(t.getMonth() + 1).padStart(2, "0")}/${String(t.getDate()).padStart(2, "0")}`;
    this.openModal(key, null);
  }
  openModal(ddateStr, existing) {
    if (existing) {
      this.isNew.set(false);
      this.editForm = {
        ddateStr,
        workdayflag: existing.workdayflag ?? 0,
        shiftNo: existing.shiftNo || null,
        typeid: existing.typeid || null,
        overtypeid: existing.overtypeid || null,
        typeidDefault: existing.typeidDefault || null,
        statutoryFlag: existing.statutoryFlag ?? 0,
        operationId: existing.operationId || null,
        orderno: existing.orderno ?? 0,
        remark: existing.remark || null,
        activity: existing.activity ?? 1
      };
      this.modalVisible.set(true);
      return;
    }
    this.api.getDayDetail(ddateStr).subscribe({
      next: (data) => this.openModal(ddateStr, data),
      error: () => {
        this.isNew.set(true);
        const [y, m, d] = ddateStr.split("/").map(Number);
        const dow = new Date(y, m - 1, d).getDay();
        this.editForm = __spreadProps(__spreadValues({}, EMPTY_EDIT_FORM), { ddateStr, workdayflag: dow === 0 || dow === 6 ? 0 : 1 });
        this.modalVisible.set(true);
      }
    });
  }
  closeModal() {
    this.modalVisible.set(false);
  }
  saveDay() {
    const f = this.editForm;
    if (!f.ddateStr) {
      this.message.warning(this.i18n.t("cccal.msg.invalidData", "D\u1EEF li\u1EC7u kh\xF4ng h\u1EE3p l\u1EC7!"));
      return;
    }
    const payload = {
      ddateStr: f.ddateStr,
      workdayflag: Number(f.workdayflag) || 0,
      shiftNo: f.shiftNo || null,
      typeid: f.typeid || null,
      overtypeid: f.overtypeid || null,
      typeidDefault: f.typeidDefault || null,
      statutoryFlag: Number(f.statutoryFlag) || 0,
      operationId: f.operationId || null,
      orderno: Number(f.orderno) || 0,
      remark: f.remark || null,
      activity: Number(f.activity) || 1
    };
    this.saving.set(true);
    this.api.saveDay(payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        if (res.success) {
          this.message.success(res.message || this.i18n.t("companyCal.saveSuccess", "L\u01B0u l\u1ECBch c\xF4ng ty th\xE0nh c\xF4ng!"));
          this.modalVisible.set(false);
          this.loadMonth();
        } else {
          this.message.error(res.error || this.i18n.t("companyCal.saveFail", "L\u01B0u l\u1ECBch c\xF4ng ty th\u1EA5t b\u1EA1i!"));
        }
      },
      error: (err) => {
        this.saving.set(false);
        const msg = err?.error?.error || this.i18n.t("cccal.msg.unknownError", "L\u1ED7i kh\xF4ng x\xE1c \u0111\u1ECBnh");
        this.message.error(`${this.i18n.t("cccal.msg.error", "L\u1ED7i!")} ${msg}`);
      }
    });
  }
  // ==================== Data loading ====================
  loadMonth() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getMonth(this.selectedYear, this.selectedMonth).subscribe({
      next: (records) => {
        this.weeks.set(this.buildWeeks(records ?? []));
        this.loading.set(false);
      },
      error: () => {
        this.weeks.set([]);
        this.errorMessage.set(this.i18n.t("companyCal.loadFail", "T\u1EA3i l\u1ECBch c\xF4ng ty th\u1EA5t b\u1EA1i!"));
        this.loading.set(false);
      }
    });
  }
  /** Dựng lưới 7 cột từ danh sách phẳng do backend trả về - cùng thuật toán với renderCalendar() trong
   *  bản Thymeleaf gốc: chèn ô rỗng trước ngày đầu tiên theo đúng thứ trong tuần, sau đó chia đều 7
   *  ô/hàng. Mỗi ngày AR_CALENDER chỉ có 1 dòng (khác lịch nhóm ca có thể nhiều dòng/ngày). */
  buildWeeks(records) {
    if (!records.length)
      return [];
    const sorted = [...records].sort((a, b) => (a.ddateStr || "").localeCompare(b.ddateStr || ""));
    const today = /* @__PURE__ */ new Date();
    const todayKey = `${today.getFullYear()}/${String(today.getMonth() + 1).padStart(2, "0")}/${String(today.getDate()).padStart(2, "0")}`;
    const [fy, fm, fd] = (sorted[0].ddateStr || "").split("/").map(Number);
    const firstDow = new Date(fy, fm - 1, fd).getDay();
    const cells = [];
    const emptyCell = () => ({
      item: null,
      dateKey: "",
      day: 0,
      isEmpty: true,
      isToday: false,
      isSunday: false,
      isSaturday: false,
      isWeekend: false,
      hasWork: false,
      isStatutory: false
    });
    for (let i = 0; i < firstDow; i++)
      cells.push(emptyCell());
    sorted.forEach((rec, idx) => {
      const key = rec.ddateStr || "";
      const day = parseInt(key.split("/")[2], 10);
      const dow = (firstDow + idx) % 7;
      const isSunday = dow === 0;
      const isSaturday = dow === 6;
      cells.push({
        item: rec,
        dateKey: key,
        day,
        isEmpty: false,
        isToday: key === todayKey,
        isSunday,
        isSaturday,
        isWeekend: isSunday || isSaturday,
        hasWork: rec.workdayflag === 1,
        isStatutory: rec.statutoryFlag === 1
      });
    });
    while (cells.length % 7 !== 0)
      cells.push(emptyCell());
    const weeks = [];
    for (let i = 0; i < cells.length; i += 7)
      weeks.push(cells.slice(i, i + 7));
    return weeks;
  }
  buildYearOptions() {
    const cur = (/* @__PURE__ */ new Date()).getFullYear();
    const years = [];
    for (let y = cur - YEAR_RANGE; y <= cur + YEAR_RANGE; y++)
      years.push(y);
    return years;
  }
  static \u0275fac = function ViewCompanyCalendarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewCompanyCalendarComponent)(\u0275\u0275directiveInject(ViewCompanyCalendarService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewCompanyCalendarComponent, selectors: [["app-view-company-calendar"]], decls: 73, vars: 79, consts: [[1, "vcompcal-wrap"], [1, "vcompcal-toolbar"], [1, "vcompcal-nav"], ["nz-button", "", "nzType", "default", "nzShape", "circle", 3, "click"], [1, "bx", "bx-chevron-left"], [1, "vcompcal-combo", 3, "ngModelChange", "ngModel"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "vcompcal-combo", "vcompcal-year", 3, "ngModelChange", "ngModel"], [1, "bx", "bx-chevron-right"], [1, "vcompcal-actions"], ["nz-button", "", "nzType", "default", 3, "click"], [1, "bx", "bx-refresh"], ["nz-button", "", "nzType", "primary", 3, "click"], [1, "bx", "bx-plus"], ["nzType", "error", "class", "mb-2", 3, "nzMessage", 4, "ngIf"], [1, "vcompcal-grid-wrap"], [1, "vcompcal-hrow"], [1, "vcompcal-hcell", "vcompcal-col-sun"], [1, "bx", "bxs-sun"], [1, "vcompcal-hcell"], [1, "vcompcal-hcell", "vcompcal-col-sat"], [1, "bx", "bxs-star"], ["class", "vcompcal-status-msg", 4, "ngIf"], [4, "ngIf"], [1, "vcompcal-legend"], [1, "vcompcal-legend-item"], [1, "vcompcal-legend-dot", "vcompcal-lg-work"], [1, "vcompcal-legend-dot", "vcompcal-lg-rest"], [1, "vcompcal-legend-dot", "vcompcal-lg-holiday"], [1, "vcompcal-legend-dot", "vcompcal-lg-today"], ["nzWidth", "640px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-2", 3, "nzMessage"], [1, "vcompcal-status-msg"], ["class", "vcompcal-week", 4, "ngFor", "ngForOf"], [1, "vcompcal-week"], ["class", "vcompcal-day", 3, "is-empty", "is-today", "is-statutory", "is-rest", "is-work", "vcompcal-clickable", "click", 4, "ngFor", "ngForOf"], [1, "vcompcal-day", 3, "click"], [1, "vcompcal-day-top"], [1, "vcompcal-day-num"], [1, "vcompcal-status"], [1, "vcompcal-tags"], ["class", "vcompcal-tag t-we", 4, "ngIf"], ["class", "vcompcal-tag t-wd", 4, "ngIf"], ["class", "vcompcal-tag t-sh", 4, "ngIf"], ["class", "vcompcal-tag t-hol", 4, "ngIf"], ["class", "vcompcal-remark", 4, "ngIf"], [1, "vcompcal-tag", "t-we"], [1, "vcompcal-tag", "t-wd"], [1, "vcompcal-tag", "t-sh"], [1, "vcompcal-tag", "t-hol"], [1, "vcompcal-remark"], [1, "vcompcal-form"], [1, "vcompcal-form-row-2"], [1, "vcompcal-form-row"], ["name", "workdayflag", 3, "ngModelChange", "ngModel"], ["name", "shiftNo", 3, "ngModelChange", "ngModel", "nzAllowClear"], [1, "vcompcal-form-row-3"], ["name", "typeid", 3, "ngModelChange", "ngModel", "nzAllowClear"], ["name", "overtypeid", 3, "ngModelChange", "ngModel", "nzAllowClear"], ["name", "typeidDefault", 3, "ngModelChange", "ngModel", "nzAllowClear"], ["name", "statutoryFlag", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "operationId", 3, "ngModelChange", "ngModel"], ["name", "orderno", 2, "width", "100%", 3, "ngModelChange", "ngModel", "nzMin"], ["name", "activity", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "remark", 3, "ngModelChange", "ngModel"]], template: function ViewCompanyCalendarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275listener("click", function ViewCompanyCalendarComponent_Template_button_click_3_listener() {
        return ctx.prevMonth();
      });
      \u0275\u0275element(5, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "nz-select", 5);
      \u0275\u0275twoWayListener("ngModelChange", function ViewCompanyCalendarComponent_Template_nz_select_ngModelChange_6_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedMonth, $event) || (ctx.selectedMonth = $event);
        return $event;
      });
      \u0275\u0275template(7, ViewCompanyCalendarComponent_nz_option_7_Template, 2, 4, "nz-option", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(8, "nz-select", 7);
      \u0275\u0275twoWayListener("ngModelChange", function ViewCompanyCalendarComponent_Template_nz_select_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedYear, $event) || (ctx.selectedYear = $event);
        return $event;
      });
      \u0275\u0275template(9, ViewCompanyCalendarComponent_nz_option_9_Template, 1, 2, "nz-option", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(10, "button", 3);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275listener("click", function ViewCompanyCalendarComponent_Template_button_click_10_listener() {
        return ctx.nextMonth();
      });
      \u0275\u0275element(12, "i", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 9)(14, "button", 10);
      \u0275\u0275listener("click", function ViewCompanyCalendarComponent_Template_button_click_14_listener() {
        return ctx.search();
      });
      \u0275\u0275element(15, "i", 11);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 12);
      \u0275\u0275listener("click", function ViewCompanyCalendarComponent_Template_button_click_18_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(19, "i", 13);
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(22, ViewCompanyCalendarComponent_nz_alert_22_Template, 1, 1, "nz-alert", 14);
      \u0275\u0275elementStart(23, "div", 15)(24, "div", 16)(25, "div", 17);
      \u0275\u0275element(26, "i", 18);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 19);
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 19);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 19);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 19);
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 19);
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 20);
      \u0275\u0275element(45, "i", 21);
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div");
      \u0275\u0275template(49, ViewCompanyCalendarComponent_div_49_Template, 2, 0, "div", 22)(50, ViewCompanyCalendarComponent_div_50_Template, 3, 4, "div", 22)(51, ViewCompanyCalendarComponent_ng_container_51_Template, 2, 1, "ng-container", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 24)(53, "span", 25);
      \u0275\u0275element(54, "span", 26);
      \u0275\u0275text(55);
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "span", 25);
      \u0275\u0275element(58, "span", 27);
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "span", 25);
      \u0275\u0275element(62, "span", 28);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "span", 25);
      \u0275\u0275element(66, "span", 29);
      \u0275\u0275text(67);
      \u0275\u0275pipe(68, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(69, "nz-modal", 30);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275pipe(71, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewCompanyCalendarComponent_Template_nz_modal_nzOnCancel_69_listener() {
        return ctx.closeModal();
      })("nzOnOk", function ViewCompanyCalendarComponent_Template_nz_modal_nzOnOk_69_listener() {
        return ctx.saveDay();
      });
      \u0275\u0275template(72, ViewCompanyCalendarComponent_ng_container_72_Template, 73, 89, "ng-container", 31);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275attribute("title", \u0275\u0275pipeBind2(4, 28, "cccal.btn.prevMonth", "Th\xE1ng tr\u01B0\u1EDBc"));
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedMonth);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.monthOptions);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedYear);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.yearOptions);
      \u0275\u0275advance();
      \u0275\u0275attribute("title", \u0275\u0275pipeBind2(11, 31, "cccal.btn.nextMonth", "Th\xE1ng sau"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(17, 34, "cccal.btn.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(21, 37, "cccal.btn.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(28, 40, "cccal.day.sun", "CN"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 43, "cccal.day.mon", "T2"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 46, "cccal.day.tue", "T3"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 49, "cccal.day.wed", "T4"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 52, "cccal.day.thu", "T5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 55, "cccal.day.fri", "T6"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(47, 58, "cccal.day.sat", "T7"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.weeks().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(56, 61, "cccal.legend.workday", "Ng\xE0y l\xE0m vi\u1EC7c"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(60, 64, "cccal.legend.restday", "Ng\xE0y ngh\u1EC9"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(64, 67, "companyCal.statutoryFlag", "Ng\xE0y l\u1EC5 ph\xE1p \u0111\u1ECBnh"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(68, 70, "cccal.legend.today", "H\xF4m nay"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", ctx.modalTitle())("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(70, 73, "cccal.btn.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(71, 76, "cccal.btn.close", "\u0110\xF3ng"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzInputModule, NzInputDirective, NzInputNumberModule, NzInputNumberComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\n@keyframes _ngcontent-%COMP%_vcompcal-pulse {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(59, 130, 246, .4);\n  }\n  50% {\n    box-shadow: 0 0 0 6px rgba(59, 130, 246, 0);\n  }\n}\n@keyframes _ngcontent-%COMP%_vcompcal-slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.vcompcal-wrap[_ngcontent-%COMP%] {\n  display: block;\n}\n.vcompcal-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #e2e8f0 100%);\n  border: 1px solid #cbd5e1;\n  border-radius: 8px 8px 0 0;\n  padding: 8px 14px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, .06);\n}\n.vcompcal-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin: 0 auto;\n}\n.vcompcal-combo[_ngcontent-%COMP%] {\n  width: 130px;\n}\n.vcompcal-combo.vcompcal-year[_ngcontent-%COMP%] {\n  width: 90px;\n}\n.vcompcal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.vcompcal-grid-wrap[_ngcontent-%COMP%] {\n  border: 1px solid #cbd5e1;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  overflow: hidden;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, .06);\n}\n.vcompcal-hrow[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #334155 100%);\n}\n.vcompcal-hcell[_ngcontent-%COMP%] {\n  padding: 8px;\n  text-align: center;\n  font-weight: 700;\n  font-size: .82rem;\n  color: #e2e8f0;\n  letter-spacing: .5px;\n  border-right: 1px solid rgba(255, 255, 255, .08);\n}\n.vcompcal-hcell[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.vcompcal-col-sun[_ngcontent-%COMP%] {\n  color: #fca5a5 !important;\n}\n.vcompcal-col-sat[_ngcontent-%COMP%] {\n  color: #86efac !important;\n}\n.vcompcal-status-msg[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  color: #64748b;\n}\n.vcompcal-week[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  border-bottom: 1px solid #e2e8f0;\n  animation: _ngcontent-%COMP%_vcompcal-slideDown .3s ease-out both;\n}\n.vcompcal-week[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.vcompcal-day[_ngcontent-%COMP%] {\n  min-height: 90px;\n  padding: 6px 8px;\n  border-right: 1px solid #e2e8f0;\n  background: #fff;\n  overflow: hidden;\n  transition: all .2s ease;\n  position: relative;\n}\n.vcompcal-day[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.vcompcal-day.is-empty[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  min-height: 0;\n}\n.vcompcal-day.is-today[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff 0%,\n      #dbeafe 100%);\n  animation: _ngcontent-%COMP%_vcompcal-pulse 2.5s infinite;\n}\n.vcompcal-day.is-rest[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #fef2f2 100%);\n}\n.vcompcal-day.is-work[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #f0fdf4 100%);\n}\n.vcompcal-day.is-statutory[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #fffbeb 100%);\n}\n.vcompcal-day.vcompcal-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.vcompcal-day.vcompcal-clickable[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n  z-index: 2;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, .1);\n  border-radius: 4px;\n}\n.vcompcal-day-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 4px;\n}\n.vcompcal-day-num[_ngcontent-%COMP%] {\n  font-size: .95rem;\n  font-weight: 800;\n  color: #1e293b;\n  white-space: nowrap;\n  line-height: 1.2;\n}\n.vcompcal-day-num.is-sun[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.vcompcal-day-num.is-sat[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.vcompcal-status[_ngcontent-%COMP%] {\n  font-size: .62rem;\n  padding: 2px 7px;\n  border-radius: 10px;\n  font-weight: 700;\n  white-space: nowrap;\n  line-height: 1.3;\n  letter-spacing: .3px;\n  text-transform: uppercase;\n}\n.vcompcal-status.s-rest[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fecaca,\n      #fca5a5);\n  color: #7f1d1d;\n}\n.vcompcal-status.s-work[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #bbf7d0,\n      #86efac);\n  color: #166534;\n}\n.vcompcal-status.s-holiday[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fde68a,\n      #fbbf24);\n  color: #78350f;\n  box-shadow: 0 1px 4px rgba(251, 191, 36, .3);\n}\n.vcompcal-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 3px;\n  margin-top: 4px;\n}\n.vcompcal-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: .58rem;\n  padding: 1px 6px;\n  border-radius: 8px;\n  line-height: 1.6;\n  white-space: nowrap;\n  font-weight: 600;\n}\n.vcompcal-tag.t-we[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #991b1b;\n}\n.vcompcal-tag.t-wd[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e3a8a;\n}\n.vcompcal-tag.t-sh[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.vcompcal-tag.t-hol[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7,\n      #fde68a);\n  color: #92400e;\n  border: 1px solid #fbbf24;\n}\n.vcompcal-remark[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  font-size: .58rem;\n  color: #94a3b8;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-style: italic;\n}\n.vcompcal-legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 8px 14px;\n  background: #f8fafc;\n  border: 1px solid #cbd5e1;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  margin-top: -1px;\n  flex-wrap: wrap;\n}\n.vcompcal-legend-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: .72rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.vcompcal-legend-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  border: 1px solid rgba(0, 0, 0, .1);\n}\n.vcompcal-lg-work[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #86efac,\n      #4ade80);\n}\n.vcompcal-lg-rest[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fca5a5,\n      #f87171);\n}\n.vcompcal-lg-holiday[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fde68a,\n      #fbbf24);\n}\n.vcompcal-lg-today[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #93c5fd,\n      #3b82f6);\n}\n.vcompcal-form-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 12px;\n}\n.vcompcal-form-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: .82rem;\n  font-weight: 600;\n  color: #334155;\n}\n.vcompcal-form-row-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.vcompcal-form-row-3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n/*# sourceMappingURL=view-company-calendar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewCompanyCalendarComponent, [{
    type: Component,
    args: [{ selector: "app-view-company-calendar", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzButtonModule,
      NzSelectModule,
      NzInputModule,
      NzInputNumberModule,
      NzModalModule,
      NzAlertModule,
      TranslatePipe
    ], template: `<div class="vcompcal-wrap">
  <!-- ===== Toolbar ===== -->
  <div class="vcompcal-toolbar">
    <div class="vcompcal-nav">
      <button nz-button nzType="default" nzShape="circle" [attr.title]="'cccal.btn.prevMonth' | translate:'Th\xE1ng tr\u01B0\u1EDBc'" (click)="prevMonth()">
        <i class="bx bx-chevron-left"></i>
      </button>
      <nz-select class="vcompcal-combo" [(ngModel)]="selectedMonth">
        <nz-option *ngFor="let m of monthOptions" [nzValue]="m" [nzLabel]="monthKeys[m - 1] | translate"></nz-option>
      </nz-select>
      <nz-select class="vcompcal-combo vcompcal-year" [(ngModel)]="selectedYear">
        <nz-option *ngFor="let y of yearOptions" [nzValue]="y" [nzLabel]="y"></nz-option>
      </nz-select>
      <button nz-button nzType="default" nzShape="circle" [attr.title]="'cccal.btn.nextMonth' | translate:'Th\xE1ng sau'" (click)="nextMonth()">
        <i class="bx bx-chevron-right"></i>
      </button>
    </div>
    <div class="vcompcal-actions">
      <button nz-button nzType="default" (click)="search()">
        <i class="bx bx-refresh"></i> {{ 'cccal.btn.search' | translate:'Tra c\u1EE9u' }}
      </button>
      <button nz-button nzType="primary" (click)="openAddModal()">
        <i class="bx bx-plus"></i> {{ 'cccal.btn.addNew' | translate:'Th\xEAm m\u1EDBi' }}
      </button>
    </div>
  </div>

  <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-2"></nz-alert>

  <!-- ===== Calendar grid ===== -->
  <div class="vcompcal-grid-wrap">
    <div class="vcompcal-hrow">
      <div class="vcompcal-hcell vcompcal-col-sun"><i class="bx bxs-sun"></i> {{ 'cccal.day.sun' | translate:'CN' }}</div>
      <div class="vcompcal-hcell">{{ 'cccal.day.mon' | translate:'T2' }}</div>
      <div class="vcompcal-hcell">{{ 'cccal.day.tue' | translate:'T3' }}</div>
      <div class="vcompcal-hcell">{{ 'cccal.day.wed' | translate:'T4' }}</div>
      <div class="vcompcal-hcell">{{ 'cccal.day.thu' | translate:'T5' }}</div>
      <div class="vcompcal-hcell">{{ 'cccal.day.fri' | translate:'T6' }}</div>
      <div class="vcompcal-hcell vcompcal-col-sat"><i class="bx bxs-star"></i> {{ 'cccal.day.sat' | translate:'T7' }}</div>
    </div>

    <div>
      <div *ngIf="loading()" class="vcompcal-status-msg">...</div>
      <div *ngIf="!loading() && weeks().length === 0" class="vcompcal-status-msg">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</div>

      <ng-container *ngIf="!loading()">
        <div class="vcompcal-week" *ngFor="let week of weeks()">
          <div *ngFor="let cell of week"
               class="vcompcal-day"
               [class.is-empty]="cell.isEmpty"
               [class.is-today]="cell.isToday"
               [class.is-statutory]="!cell.isEmpty && cell.isStatutory"
               [class.is-rest]="!cell.isEmpty && !cell.isStatutory && !cell.hasWork"
               [class.is-work]="!cell.isEmpty && !cell.isStatutory && cell.hasWork"
               [class.vcompcal-clickable]="!cell.isEmpty"
               (click)="dayClick(cell)">
            <ng-container *ngIf="!cell.isEmpty">
              <div class="vcompcal-day-top">
                <span class="vcompcal-day-num" [class.is-sun]="cell.isSunday" [class.is-sat]="cell.isSaturday">{{ cell.day }}</span>
                <span class="vcompcal-status" [class.s-holiday]="cell.isStatutory" [class.s-work]="!cell.isStatutory && cell.hasWork" [class.s-rest]="!cell.isStatutory && !cell.hasWork">
                  {{ cell.isStatutory ? ('companyCal.statutory' | translate:'L\u1EC5 ph\xE1p \u0111\u1ECBnh') : ((cell.hasWork ? 'cccal.status.work' : 'cccal.status.rest') | translate) }}
                </span>
              </div>
              <div class="vcompcal-tags">
                <span class="vcompcal-tag t-we" *ngIf="cell.isWeekend">{{ 'cccal.tag.weekend' | translate:'Cu\u1ED1i tu\u1EA7n' }}</span>
                <span class="vcompcal-tag t-wd" *ngIf="!cell.isWeekend">{{ (cell.hasWork ? 'cccal.status.work' : 'companyCal.dayOff') | translate:(cell.hasWork ? 'Ng\xE0y th\u01B0\u1EDDng' : 'Ngh\u1EC9') }}</span>
                <span class="vcompcal-tag t-sh" *ngIf="cell.hasWork">{{ cell.item?.shiftName || shiftLabel(cell.item?.shiftNo) || 'Ca h\xE0nh ch\xEDnh' }}</span>
                <span class="vcompcal-tag t-hol" *ngIf="cell.isStatutory">\u2605 {{ 'companyCal.statutory' | translate:'L\u1EC5 ph\xE1p \u0111\u1ECBnh' }}</span>
                <span class="vcompcal-tag t-wd" *ngIf="cell.item?.typeidName">{{ cell.item?.typeidName }}</span>
              </div>
              <div class="vcompcal-remark" *ngIf="cell.item?.remark" [attr.title]="cell.item?.remark">\u2014 {{ cell.item?.remark }}</div>
            </ng-container>
          </div>
        </div>
      </ng-container>
    </div>
  </div>

  <!-- ===== Legend ===== -->
  <div class="vcompcal-legend">
    <span class="vcompcal-legend-item"><span class="vcompcal-legend-dot vcompcal-lg-work"></span> {{ 'cccal.legend.workday' | translate:'Ng\xE0y l\xE0m vi\u1EC7c' }}</span>
    <span class="vcompcal-legend-item"><span class="vcompcal-legend-dot vcompcal-lg-rest"></span> {{ 'cccal.legend.restday' | translate:'Ng\xE0y ngh\u1EC9' }}</span>
    <span class="vcompcal-legend-item"><span class="vcompcal-legend-dot vcompcal-lg-holiday"></span> {{ 'companyCal.statutoryFlag' | translate:'Ng\xE0y l\u1EC5 ph\xE1p \u0111\u1ECBnh' }}</span>
    <span class="vcompcal-legend-item"><span class="vcompcal-legend-dot vcompcal-lg-today"></span> {{ 'cccal.legend.today' | translate:'H\xF4m nay' }}</span>
  </div>
</div>

<!-- ===== Modal Th\xEAm m\u1EDBi / C\u1EADp nh\u1EADt 1 ng\xE0y ===== -->
<nz-modal [nzVisible]="modalVisible()" [nzTitle]="modalTitle()"
          nzWidth="640px" (nzOnCancel)="closeModal()" [nzOkLoading]="saving()"
          [nzOkText]="'cccal.btn.save' | translate:'L\u01B0u'" [nzCancelText]="'cccal.btn.close' | translate:'\u0110\xF3ng'"
          (nzOnOk)="saveDay()">
  <ng-container *nzModalContent>
    <form class="vcompcal-form">
      <div class="vcompcal-form-row-2">
        <div class="vcompcal-form-row">
          <label>{{ 'cccal.label.workdayflag' | translate:'Ng\xE0y l\xE0m vi\u1EC7c' }}</label>
          <nz-select [(ngModel)]="editForm.workdayflag" name="workdayflag">
            <nz-option [nzValue]="0" [nzLabel]="'cccal.option.restday' | translate:'0 \u2014 Ng\xE0y ngh\u1EC9'"></nz-option>
            <nz-option [nzValue]="1" [nzLabel]="'cccal.option.workday' | translate:'1 \u2014 Ng\xE0y l\xE0m vi\u1EC7c'"></nz-option>
          </nz-select>
        </div>
        <div class="vcompcal-form-row">
          <label>{{ 'cccal.label.shiftNo' | translate:'Ca l\xE0m vi\u1EC7c (Shift No)' }}</label>
          <nz-select [(ngModel)]="editForm.shiftNo" name="shiftNo" [nzAllowClear]="true">
            <nz-option *ngFor="let s of shiftOptions()" [nzValue]="s.shiftNo" [nzLabel]="s.nameVi || s.shiftNo"></nz-option>
          </nz-select>
        </div>
      </div>
      <div class="vcompcal-form-row-3">
        <div class="vcompcal-form-row">
          <label>{{ 'cccal.label.typeid' | translate:'TypeID' }}</label>
          <nz-select [(ngModel)]="editForm.typeid" name="typeid" [nzAllowClear]="true">
            <nz-option *ngFor="let t of typeOptions()" [nzValue]="t.codeNo" [nzLabel]="t.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="vcompcal-form-row">
          <label>{{ 'cccal.label.overtypeid' | translate:'OvertypeID' }}</label>
          <nz-select [(ngModel)]="editForm.overtypeid" name="overtypeid" [nzAllowClear]="true">
            <nz-option *ngFor="let t of typeOptions()" [nzValue]="t.codeNo" [nzLabel]="t.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="vcompcal-form-row">
          <label>{{ 'cccal.label.typeidDefault' | translate:'TypeID m\u1EB7c \u0111\u1ECBnh' }}</label>
          <nz-select [(ngModel)]="editForm.typeidDefault" name="typeidDefault" [nzAllowClear]="true">
            <nz-option *ngFor="let t of typeOptions()" [nzValue]="t.codeNo" [nzLabel]="t.codeName"></nz-option>
          </nz-select>
        </div>
      </div>
      <div class="vcompcal-form-row-2">
        <div class="vcompcal-form-row">
          <label>{{ 'companyCal.statutoryFlag' | translate:'Ng\xE0y l\u1EC5 ph\xE1p \u0111\u1ECBnh' }}</label>
          <nz-select [(ngModel)]="editForm.statutoryFlag" name="statutoryFlag">
            <nz-option [nzValue]="0" [nzLabel]="'common.no' | translate:'Kh\xF4ng'"></nz-option>
            <nz-option [nzValue]="1" [nzLabel]="'companyCal.statutory' | translate:'L\u1EC5 ph\xE1p \u0111\u1ECBnh'"></nz-option>
          </nz-select>
        </div>
        <div class="vcompcal-form-row">
          <label>{{ 'cccal.label.operationId' | translate:'Operation ID' }}</label>
          <input nz-input [(ngModel)]="editForm.operationId" name="operationId">
        </div>
      </div>
      <div class="vcompcal-form-row-3">
        <div class="vcompcal-form-row">
          <label>{{ 'cccal.label.orderno' | translate:'S\u1EAFp x\u1EBFp' }}</label>
          <nz-input-number [(ngModel)]="editForm.orderno" name="orderno" [nzMin]="0" style="width:100%"></nz-input-number>
        </div>
        <div class="vcompcal-form-row">
          <label>{{ 'cccal.label.activity' | translate:'Tr\u1EA1ng th\xE1i' }}</label>
          <nz-select [(ngModel)]="editForm.activity" name="activity">
            <nz-option [nzValue]="1" [nzLabel]="'cccal.option.active' | translate:'Ho\u1EA1t \u0111\u1ED9ng'"></nz-option>
            <nz-option [nzValue]="0" [nzLabel]="'cccal.option.inactive' | translate:'Ng\u1EEBng'"></nz-option>
          </nz-select>
        </div>
        <div class="vcompcal-form-row"></div>
      </div>
      <div class="vcompcal-form-row">
        <label>{{ 'shl.description' | translate:'Ghi ch\xFA' }}</label>
        <input nz-input [(ngModel)]="editForm.remark" name="remark">
      </div>
    </form>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-company-calendar/view-company-calendar.component.css */\n@keyframes vcompcal-pulse {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(59, 130, 246, .4);\n  }\n  50% {\n    box-shadow: 0 0 0 6px rgba(59, 130, 246, 0);\n  }\n}\n@keyframes vcompcal-slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.vcompcal-wrap {\n  display: block;\n}\n.vcompcal-toolbar {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #e2e8f0 100%);\n  border: 1px solid #cbd5e1;\n  border-radius: 8px 8px 0 0;\n  padding: 8px 14px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, .06);\n}\n.vcompcal-nav {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin: 0 auto;\n}\n.vcompcal-combo {\n  width: 130px;\n}\n.vcompcal-combo.vcompcal-year {\n  width: 90px;\n}\n.vcompcal-actions {\n  display: flex;\n  gap: 6px;\n}\n.vcompcal-grid-wrap {\n  border: 1px solid #cbd5e1;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  overflow: hidden;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, .06);\n}\n.vcompcal-hrow {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #334155 100%);\n}\n.vcompcal-hcell {\n  padding: 8px;\n  text-align: center;\n  font-weight: 700;\n  font-size: .82rem;\n  color: #e2e8f0;\n  letter-spacing: .5px;\n  border-right: 1px solid rgba(255, 255, 255, .08);\n}\n.vcompcal-hcell:last-child {\n  border-right: none;\n}\n.vcompcal-col-sun {\n  color: #fca5a5 !important;\n}\n.vcompcal-col-sat {\n  color: #86efac !important;\n}\n.vcompcal-status-msg {\n  padding: 20px;\n  text-align: center;\n  color: #64748b;\n}\n.vcompcal-week {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  border-bottom: 1px solid #e2e8f0;\n  animation: vcompcal-slideDown .3s ease-out both;\n}\n.vcompcal-week:last-child {\n  border-bottom: none;\n}\n.vcompcal-day {\n  min-height: 90px;\n  padding: 6px 8px;\n  border-right: 1px solid #e2e8f0;\n  background: #fff;\n  overflow: hidden;\n  transition: all .2s ease;\n  position: relative;\n}\n.vcompcal-day:last-child {\n  border-right: none;\n}\n.vcompcal-day.is-empty {\n  background: #f8fafc;\n  min-height: 0;\n}\n.vcompcal-day.is-today {\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff 0%,\n      #dbeafe 100%);\n  animation: vcompcal-pulse 2.5s infinite;\n}\n.vcompcal-day.is-rest {\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #fef2f2 100%);\n}\n.vcompcal-day.is-work {\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #f0fdf4 100%);\n}\n.vcompcal-day.is-statutory {\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #fffbeb 100%);\n}\n.vcompcal-day.vcompcal-clickable {\n  cursor: pointer;\n}\n.vcompcal-day.vcompcal-clickable:hover {\n  transform: scale(1.02);\n  z-index: 2;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, .1);\n  border-radius: 4px;\n}\n.vcompcal-day-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 4px;\n}\n.vcompcal-day-num {\n  font-size: .95rem;\n  font-weight: 800;\n  color: #1e293b;\n  white-space: nowrap;\n  line-height: 1.2;\n}\n.vcompcal-day-num.is-sun {\n  color: #dc2626;\n}\n.vcompcal-day-num.is-sat {\n  color: #16a34a;\n}\n.vcompcal-status {\n  font-size: .62rem;\n  padding: 2px 7px;\n  border-radius: 10px;\n  font-weight: 700;\n  white-space: nowrap;\n  line-height: 1.3;\n  letter-spacing: .3px;\n  text-transform: uppercase;\n}\n.vcompcal-status.s-rest {\n  background:\n    linear-gradient(\n      135deg,\n      #fecaca,\n      #fca5a5);\n  color: #7f1d1d;\n}\n.vcompcal-status.s-work {\n  background:\n    linear-gradient(\n      135deg,\n      #bbf7d0,\n      #86efac);\n  color: #166534;\n}\n.vcompcal-status.s-holiday {\n  background:\n    linear-gradient(\n      135deg,\n      #fde68a,\n      #fbbf24);\n  color: #78350f;\n  box-shadow: 0 1px 4px rgba(251, 191, 36, .3);\n}\n.vcompcal-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 3px;\n  margin-top: 4px;\n}\n.vcompcal-tag {\n  display: inline-flex;\n  align-items: center;\n  font-size: .58rem;\n  padding: 1px 6px;\n  border-radius: 8px;\n  line-height: 1.6;\n  white-space: nowrap;\n  font-weight: 600;\n}\n.vcompcal-tag.t-we {\n  background: #fde8e8;\n  color: #991b1b;\n}\n.vcompcal-tag.t-wd {\n  background: #dbeafe;\n  color: #1e3a8a;\n}\n.vcompcal-tag.t-sh {\n  background: #d1fae5;\n  color: #065f46;\n}\n.vcompcal-tag.t-hol {\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7,\n      #fde68a);\n  color: #92400e;\n  border: 1px solid #fbbf24;\n}\n.vcompcal-remark {\n  margin-top: 3px;\n  font-size: .58rem;\n  color: #94a3b8;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-style: italic;\n}\n.vcompcal-legend {\n  display: flex;\n  gap: 16px;\n  padding: 8px 14px;\n  background: #f8fafc;\n  border: 1px solid #cbd5e1;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  margin-top: -1px;\n  flex-wrap: wrap;\n}\n.vcompcal-legend-item {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: .72rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.vcompcal-legend-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  border: 1px solid rgba(0, 0, 0, .1);\n}\n.vcompcal-lg-work {\n  background:\n    linear-gradient(\n      135deg,\n      #86efac,\n      #4ade80);\n}\n.vcompcal-lg-rest {\n  background:\n    linear-gradient(\n      135deg,\n      #fca5a5,\n      #f87171);\n}\n.vcompcal-lg-holiday {\n  background:\n    linear-gradient(\n      135deg,\n      #fde68a,\n      #fbbf24);\n}\n.vcompcal-lg-today {\n  background:\n    linear-gradient(\n      135deg,\n      #93c5fd,\n      #3b82f6);\n}\n.vcompcal-form-row {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 12px;\n}\n.vcompcal-form-row label {\n  font-size: .82rem;\n  font-weight: 600;\n  color: #334155;\n}\n.vcompcal-form-row-2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.vcompcal-form-row-3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n/*# sourceMappingURL=view-company-calendar.component.css.map */\n"] }]
  }], () => [{ type: ViewCompanyCalendarService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewCompanyCalendarComponent, { className: "ViewCompanyCalendarComponent", filePath: "src/app/view-company-calendar/view-company-calendar.component.ts", lineNumber: 77 });
})();
export {
  ViewCompanyCalendarComponent
};
//# debugId=965f752e-6849-58d8-86a2-be195550cb76
//# sourceMappingURL=chunk-AHXXMQXJ.js.map
