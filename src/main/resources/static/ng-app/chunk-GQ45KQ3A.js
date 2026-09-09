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
  NzDatePickerComponent,
  NzDatePickerModule,
  NzRangePickerComponent
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
  HttpHeaders,
  HttpParams,
  Injectable,
  NgForOf,
  NgIf,
  NzButtonComponent,
  NzButtonModule,
  NzTransitionPatchDirective,
  NzWaveDirective,
  __spreadValues,
  formatDate,
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

// src/app/view-class-calendar/view-class-calendar.service.ts
var API_BASE = "/ar/attendanceSettings/api/calender/group";
var SHIFT_API = "/ar/attendanceSettings/api/shift";
var ViewClassCalendarService = class _ViewClassCalendarService {
  constructor(http) {
    this.http = http;
  }
  http;
  getGroupCalendarMonth(year, month, groupId) {
    const params = new HttpParams().set("year", year).set("month", month).set("groupId", groupId);
    return this.http.get(`${API_BASE}/month`, { params, withCredentials: true });
  }
  getGroupCalendarDetail(arDateStr, groupId) {
    const params = new HttpParams().set("arDateStr", arDateStr).set("groupId", groupId);
    return this.http.get(`${API_BASE}/detail`, { params, withCredentials: true });
  }
  saveGroupCalendarBatch(startDate, endDate, groupId, workShift, restShift) {
    const body = new HttpParams().set("startDate", startDate).set("endDate", endDate).set("groupId", groupId).set("workShift", workShift).set("restShift", restShift);
    const headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");
    return this.http.post(`${API_BASE}/batch_save`, body.toString(), {
      headers,
      withCredentials: true
    });
  }
  saveGroupCalendarSingle(dto) {
    return this.http.post(`${API_BASE}/save`, dto, { withCredentials: true });
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
  static \u0275fac = function ViewClassCalendarService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewClassCalendarService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewClassCalendarService, factory: _ViewClassCalendarService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewClassCalendarService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-class-calendar/view-class-calendar.component.ts
function ViewClassCalendarComponent_nz_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 33);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const m_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzValue", m_r1)("nzLabel", \u0275\u0275pipeBind1(1, 2, ctx_r1.monthKeys[m_r1 - 1]));
  }
}
function ViewClassCalendarComponent_nz_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 33);
  }
  if (rf & 2) {
    const y_r3 = ctx.$implicit;
    \u0275\u0275property("nzValue", y_r3)("nzLabel", y_r3);
  }
}
function ViewClassCalendarComponent_nz_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 33);
  }
  if (rf & 2) {
    const g_r4 = ctx.$implicit;
    \u0275\u0275property("nzValue", g_r4.codeNo)("nzLabel", g_r4.codeName);
  }
}
function ViewClassCalendarComponent_nz_alert_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 34);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ViewClassCalendarComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1, "...");
    \u0275\u0275elementEnd();
  }
}
function ViewClassCalendarComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.emptyMessage());
  }
}
function ViewClassCalendarComponent_ng_container_51_div_1_div_1_ng_container_1_ng_container_8_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "cccal.tag.weekend", "Cu\u1ED1i tu\u1EA7n"));
  }
}
function ViewClassCalendarComponent_ng_container_51_div_1_div_1_ng_container_1_ng_container_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "cccal.tag.noData", "Ch\u01B0a c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewClassCalendarComponent_ng_container_51_div_1_div_1_ng_container_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ViewClassCalendarComponent_ng_container_51_div_1_div_1_ng_container_1_ng_container_8_span_1_Template, 3, 4, "span", 45)(2, ViewClassCalendarComponent_ng_container_51_div_1_div_1_ng_container_1_ng_container_8_span_2_Template, 3, 4, "span", 46);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cell_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cell_r6.isWeekend);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !cell_r6.isWeekend);
  }
}
function ViewClassCalendarComponent_ng_container_51_div_1_div_1_ng_container_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const it_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(it_r7.shiftName || ctx_r1.shiftLabel(it_r7.shiftNo));
  }
}
function ViewClassCalendarComponent_ng_container_51_div_1_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 40)(2, "span", 41);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 42);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 43);
    \u0275\u0275template(8, ViewClassCalendarComponent_ng_container_51_div_1_div_1_ng_container_1_ng_container_8_Template, 3, 2, "ng-container", 24)(9, ViewClassCalendarComponent_ng_container_51_div_1_div_1_ng_container_1_span_9_Template, 2, 1, "span", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cell_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-sun", cell_r6.isSunday)("is-sat", cell_r6.isSaturday);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cell_r6.day);
    \u0275\u0275advance();
    \u0275\u0275classProp("s-work", cell_r6.hasWork)("s-rest", !cell_r6.hasWork);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 12, cell_r6.hasWork ? "cccal.status.work" : "cccal.status.rest"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", cell_r6.items.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", cell_r6.items);
  }
}
function ViewClassCalendarComponent_ng_container_51_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275listener("click", function ViewClassCalendarComponent_ng_container_51_div_1_div_1_Template_div_click_0_listener() {
      const cell_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.dayClick(cell_r6));
    });
    \u0275\u0275template(1, ViewClassCalendarComponent_ng_container_51_div_1_div_1_ng_container_1_Template, 10, 14, "ng-container", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r6 = ctx.$implicit;
    \u0275\u0275classProp("is-empty", cell_r6.isEmpty)("is-today", cell_r6.isToday)("is-rest", !cell_r6.isEmpty && !cell_r6.hasWork)("is-work", !cell_r6.isEmpty && cell_r6.hasWork)("vcc-clickable", !cell_r6.isEmpty);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !cell_r6.isEmpty);
  }
}
function ViewClassCalendarComponent_ng_container_51_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275template(1, ViewClassCalendarComponent_ng_container_51_div_1_div_1_Template, 2, 11, "div", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const week_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", week_r8);
  }
}
function ViewClassCalendarComponent_ng_container_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ViewClassCalendarComponent_ng_container_51_div_1_Template, 2, 1, "div", 36);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.weeks());
  }
}
function ViewClassCalendarComponent_ng_container_69_nz_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 33);
  }
  if (rf & 2) {
    const g_r10 = ctx.$implicit;
    \u0275\u0275property("nzValue", g_r10.codeNo)("nzLabel", g_r10.codeName);
  }
}
function ViewClassCalendarComponent_ng_container_69_nz_option_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 33);
  }
  if (rf & 2) {
    const s_r11 = ctx.$implicit;
    \u0275\u0275property("nzValue", s_r11.shiftNo)("nzLabel", s_r11.nameVi || s_r11.shiftNo);
  }
}
function ViewClassCalendarComponent_ng_container_69_nz_option_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 33);
  }
  if (rf & 2) {
    const s_r12 = ctx.$implicit;
    \u0275\u0275property("nzValue", s_r12.shiftNo)("nzLabel", s_r12.nameVi || s_r12.shiftNo);
  }
}
function ViewClassCalendarComponent_ng_container_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 50)(2, "div", 51)(3, "label");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span", 52);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementStart(10, "span", 52);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "nz-range-picker", 53);
    \u0275\u0275twoWayListener("ngModelChange", function ViewClassCalendarComponent_ng_container_69_Template_nz_range_picker_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.addForm.dateRange, $event) || (ctx_r1.addForm.dateRange = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 51)(14, "label");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementStart(17, "span", 52);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "nz-select", 54);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewClassCalendarComponent_ng_container_69_Template_nz_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.addForm.groupId, $event) || (ctx_r1.addForm.groupId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(21, ViewClassCalendarComponent_ng_container_69_nz_option_21_Template, 1, 2, "nz-option", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 55)(23, "div", 51)(24, "label");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementStart(27, "span", 52);
    \u0275\u0275text(28, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "nz-select", 56);
    \u0275\u0275twoWayListener("ngModelChange", function ViewClassCalendarComponent_ng_container_69_Template_nz_select_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.addForm.workShift, $event) || (ctx_r1.addForm.workShift = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(30, ViewClassCalendarComponent_ng_container_69_nz_option_30_Template, 1, 2, "nz-option", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 51)(32, "label");
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementStart(35, "span", 52);
    \u0275\u0275text(36, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "nz-select", 57);
    \u0275\u0275twoWayListener("ngModelChange", function ViewClassCalendarComponent_ng_container_69_Template_nz_select_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.addForm.restShift, $event) || (ctx_r1.addForm.restShift = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(38, ViewClassCalendarComponent_ng_container_69_nz_option_38_Template, 1, 2, "nz-option", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 13, "cccal.label.fromDate", "T\u1EEB ng\xE0y"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" / ", \u0275\u0275pipeBind2(9, 16, "cccal.label.toDate", "\u0110\u1EBFn ng\xE0y"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.addForm.dateRange);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(16, 19, "cccal.label.groupShift", "Nh\xF3m ca"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.addForm.groupId);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(20, 22, "cccal.select.chooseGroup", "-- Ch\u1ECDn nh\xF3m ca --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.groupOptions());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(26, 25, "cccal.label.workShift", "Ca l\xE0m vi\u1EC7c (Work Shift)"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.addForm.workShift);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.shiftOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(34, 28, "cccal.label.restShift", "Ca ngh\u1EC9 ng\u01A1i (Rest Shift)"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.addForm.restShift);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.shiftOptions());
  }
}
function ViewClassCalendarComponent_ng_container_73_nz_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 33);
  }
  if (rf & 2) {
    const s_r14 = ctx.$implicit;
    \u0275\u0275property("nzValue", s_r14.shiftNo)("nzLabel", s_r14.nameVi || s_r14.shiftNo);
  }
}
function ViewClassCalendarComponent_ng_container_73_nz_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 33);
  }
  if (rf & 2) {
    const t_r15 = ctx.$implicit;
    \u0275\u0275property("nzValue", t_r15.codeNo)("nzLabel", t_r15.codeName);
  }
}
function ViewClassCalendarComponent_ng_container_73_nz_option_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 33);
  }
  if (rf & 2) {
    const t_r16 = ctx.$implicit;
    \u0275\u0275property("nzValue", t_r16.codeNo)("nzLabel", t_r16.codeName);
  }
}
function ViewClassCalendarComponent_ng_container_73_nz_option_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 33);
  }
  if (rf & 2) {
    const t_r17 = ctx.$implicit;
    \u0275\u0275property("nzValue", t_r17.codeNo)("nzLabel", t_r17.codeName);
  }
}
function ViewClassCalendarComponent_ng_container_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 50)(2, "div", 55)(3, "div", 51)(4, "label");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "nz-select", 58);
    \u0275\u0275twoWayListener("ngModelChange", function ViewClassCalendarComponent_ng_container_73_Template_nz_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.workdayflag, $event) || (ctx_r1.editForm.workdayflag = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(8, "nz-option", 33);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275element(10, "nz-option", 33);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 51)(13, "label");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "nz-select", 59);
    \u0275\u0275twoWayListener("ngModelChange", function ViewClassCalendarComponent_ng_container_73_Template_nz_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.shiftNo, $event) || (ctx_r1.editForm.shiftNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(17, ViewClassCalendarComponent_ng_container_73_nz_option_17_Template, 1, 2, "nz-option", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 60)(19, "div", 51)(20, "label");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "nz-select", 61);
    \u0275\u0275twoWayListener("ngModelChange", function ViewClassCalendarComponent_ng_container_73_Template_nz_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.typeid, $event) || (ctx_r1.editForm.typeid = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(24, ViewClassCalendarComponent_ng_container_73_nz_option_24_Template, 1, 2, "nz-option", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 51)(26, "label");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "nz-select", 62);
    \u0275\u0275twoWayListener("ngModelChange", function ViewClassCalendarComponent_ng_container_73_Template_nz_select_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.overtypeid, $event) || (ctx_r1.editForm.overtypeid = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(30, ViewClassCalendarComponent_ng_container_73_nz_option_30_Template, 1, 2, "nz-option", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 51)(32, "label");
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "nz-select", 63);
    \u0275\u0275twoWayListener("ngModelChange", function ViewClassCalendarComponent_ng_container_73_Template_nz_select_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.typeidDefault, $event) || (ctx_r1.editForm.typeidDefault = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(36, ViewClassCalendarComponent_ng_container_73_nz_option_36_Template, 1, 2, "nz-option", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 60)(38, "div", 51)(39, "label");
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function ViewClassCalendarComponent_ng_container_73_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.operationId, $event) || (ctx_r1.editForm.operationId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 51)(44, "label");
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "nz-input-number", 65);
    \u0275\u0275twoWayListener("ngModelChange", function ViewClassCalendarComponent_ng_container_73_Template_nz_input_number_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.orderno, $event) || (ctx_r1.editForm.orderno = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 51)(49, "label");
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "nz-select", 66);
    \u0275\u0275twoWayListener("ngModelChange", function ViewClassCalendarComponent_ng_container_73_Template_nz_select_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editForm.activity, $event) || (ctx_r1.editForm.activity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(53, "nz-option", 33);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275element(55, "nz-option", 33);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 33, "cccal.label.workdayflag", "Ng\xE0y l\xE0m vi\u1EC7c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.workdayflag);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzValue", 0)("nzLabel", \u0275\u0275pipeBind2(9, 36, "cccal.option.restday", "0 \u2014 Ng\xE0y ngh\u1EC9"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzValue", 1)("nzLabel", \u0275\u0275pipeBind2(11, 39, "cccal.option.workday", "1 \u2014 Ng\xE0y l\xE0m vi\u1EC7c"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 42, "cccal.label.shiftNo", "Ca l\xE0m vi\u1EC7c (Shift No)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.shiftNo);
    \u0275\u0275property("nzAllowClear", true);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.shiftOptions());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 45, "cccal.label.typeid", "TypeID"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.typeid);
    \u0275\u0275property("nzAllowClear", true);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.typeOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 48, "cccal.label.overtypeid", "OvertypeID"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.overtypeid);
    \u0275\u0275property("nzAllowClear", true);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.typeOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 51, "cccal.label.typeidDefault", "TypeID m\u1EB7c \u0111\u1ECBnh"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.typeidDefault);
    \u0275\u0275property("nzAllowClear", true);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.typeOptions());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 54, "cccal.label.operationId", "Operation ID"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.operationId);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 57, "cccal.label.orderno", "S\u1EAFp x\u1EBFp"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.orderno);
    \u0275\u0275property("nzMin", 0);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 60, "cccal.label.activity", "Tr\u1EA1ng th\xE1i"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editForm.activity);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzValue", 1)("nzLabel", \u0275\u0275pipeBind2(54, 63, "cccal.option.active", "Ho\u1EA1t \u0111\u1ED9ng"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzValue", 0)("nzLabel", \u0275\u0275pipeBind2(56, 66, "cccal.option.inactive", "Ng\u1EEBng"));
  }
}
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
  "cccal.modal.addTitle",
  "cccal.modal.editTitle",
  "cccal.modal.editTitlePrefix",
  "cccal.modal.editTitleGroup",
  "cccal.label.fromDate",
  "cccal.label.toDate",
  "cccal.label.groupShift",
  "cccal.select.chooseGroup",
  "cccal.label.workShift",
  "cccal.label.restShift",
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
  "cccal.msg.loadError",
  "cccal.msg.noData",
  "cccal.status.work",
  "cccal.status.rest",
  "cccal.tag.weekend",
  "cccal.tag.noData",
  "cccal.msg.selectGroup",
  "cccal.msg.requiredFields",
  "cccal.msg.addSuccess",
  "cccal.msg.error",
  "cccal.msg.connectionError",
  "cccal.msg.notFound",
  "cccal.msg.invalidData",
  "cccal.msg.saveSuccess",
  "cccal.msg.unknownError"
];
var DEFAULT_GROUP_ID = "400224";
var GROUP_SHIFT_PARENT_CODE = "400223";
var TYPE_PARENT_CODE = "1439";
var YEAR_RANGE = 5;
var EMPTY_ADD_FORM = { dateRange: null, groupId: null, workShift: null, restShift: null };
var EMPTY_EDIT_FORM = {
  arDateStr: "",
  groupId: "",
  workdayflag: 0,
  shiftNo: null,
  typeid: null,
  overtypeid: null,
  typeidDefault: null,
  operationId: null,
  orderno: 0,
  activity: 1
};
var ViewClassCalendarComponent = class _ViewClassCalendarComponent {
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
  emptyMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "emptyMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  groupOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "groupOptions" }] : (
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
  selectedGroupId = null;
  addModalVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "addModalVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  addSaving = signal(
    false,
    ...ngDevMode ? [{ debugName: "addSaving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  addForm = __spreadValues({}, EMPTY_ADD_FORM);
  editModalVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "editModalVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editSaving = signal(
    false,
    ...ngDevMode ? [{ debugName: "editSaving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editModalTitle = signal(
    "",
    ...ngDevMode ? [{ debugName: "editModalTitle" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editForm = __spreadValues({}, EMPTY_EDIT_FORM);
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getCodeList(GROUP_SHIFT_PARENT_CODE).subscribe((list) => this.groupOptions.set(list ?? []));
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
  onGroupFilterChange() {
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
    const groupId = this.selectedGroupId || "";
    if (!groupId) {
      this.message.warning(this.i18n.t("cccal.msg.selectGroup", "Vui l\xF2ng ch\u1ECDn Nh\xF3m ca \u1EDF thanh l\u1ECDc tr\u01B0\u1EDBc khi s\u1EEDa!"));
      return;
    }
    this.openEditModal(cell.dateKey, groupId);
  }
  // ==================== Modal: Thêm mới (batch) ====================
  openAddModal() {
    this.addForm = __spreadValues({}, EMPTY_ADD_FORM);
    this.addModalVisible.set(true);
  }
  closeAddModal() {
    this.addModalVisible.set(false);
  }
  saveBatch() {
    const f = this.addForm;
    const start = f.dateRange?.[0] ?? null;
    const end = f.dateRange?.[1] ?? null;
    if (!start || !end || !f.groupId || !f.workShift || !f.restShift) {
      this.message.warning(this.i18n.t("cccal.msg.requiredFields", "Vui l\xF2ng \u0111i\u1EC1n \u0111\u1EE7 th\xF4ng tin b\u1EAFt bu\u1ED9c!"));
      return;
    }
    this.addSaving.set(true);
    const startDate = formatDate(start, "dd-MM-yyyy", "vi");
    const endDate = formatDate(end, "dd-MM-yyyy", "vi");
    this.api.saveGroupCalendarBatch(startDate, endDate, f.groupId, f.workShift, f.restShift).subscribe({
      next: (res) => {
        this.addSaving.set(false);
        if (res?.success) {
          this.message.success(res.message || this.i18n.t("cccal.msg.addSuccess", "Th\xEAm m\u1EDBi th\xE0nh c\xF4ng!"));
          this.addModalVisible.set(false);
          this.loadMonth();
        } else {
          this.message.error(res?.error || this.i18n.t("cccal.msg.error", "L\u1ED7i!"));
        }
      },
      error: () => {
        this.addSaving.set(false);
        this.message.error(this.i18n.t("cccal.msg.connectionError", "L\u1ED7i k\u1EBFt n\u1ED1i!"));
      }
    });
  }
  // ==================== Modal: Cập nhật 1 ngày ====================
  openEditModal(dateStr, groupId) {
    this.api.getGroupCalendarDetail(dateStr, groupId).subscribe({
      next: (item) => {
        if (!item) {
          this.message.warning(this.i18n.t("cccal.msg.notFound", "Kh\xF4ng t\xECm th\u1EA5y d\u1EEF li\u1EC7u!"));
          return;
        }
        const [y, m, d] = dateStr.split("/");
        const display = `${d}/${m}/${y}`;
        this.editModalTitle.set(`${this.i18n.t("cccal.modal.editTitlePrefix", "C\u1EADp nh\u1EADt \u2014 ")}${display}${this.i18n.t("cccal.modal.editTitleGroup", " / Nh\xF3m: ")}${item.groupName || item.groupId}`);
        this.editForm = {
          arDateStr: item.arDateStr,
          groupId: item.groupId,
          workdayflag: item.workdayflag ?? 0,
          shiftNo: item.shiftNo || null,
          typeid: item.typeid || null,
          overtypeid: item.overtypeid || null,
          typeidDefault: item.typeidDefault || null,
          operationId: item.operationId || null,
          orderno: item.orderno ?? 0,
          activity: item.activity ?? 1
        };
        this.editModalVisible.set(true);
      },
      error: () => this.message.error(this.i18n.t("cccal.msg.notFound", "Kh\xF4ng t\xECm th\u1EA5y d\u1EEF li\u1EC7u!"))
    });
  }
  closeEditModal() {
    this.editModalVisible.set(false);
  }
  saveEdit() {
    const f = this.editForm;
    if (!f.arDateStr) {
      this.message.warning(this.i18n.t("cccal.msg.invalidData", "D\u1EEF li\u1EC7u kh\xF4ng h\u1EE3p l\u1EC7!"));
      return;
    }
    const payload = {
      arDateStr: f.arDateStr,
      groupId: f.groupId,
      workdayflag: Number(f.workdayflag) || 0,
      shiftNo: f.shiftNo || null,
      typeid: f.typeid || null,
      overtypeid: f.overtypeid || null,
      typeidDefault: f.typeidDefault || null,
      operationId: f.operationId || null,
      orderno: Number(f.orderno) || 0,
      activity: Number(f.activity) || 1
    };
    this.editSaving.set(true);
    this.api.saveGroupCalendarSingle(payload).subscribe({
      next: (res) => {
        this.editSaving.set(false);
        if (res?.success) {
          this.message.success(res.message || this.i18n.t("cccal.msg.saveSuccess", "L\u01B0u th\xE0nh c\xF4ng!"));
          this.editModalVisible.set(false);
          this.loadMonth();
        } else {
          this.message.error(res?.error || this.i18n.t("cccal.msg.error", "L\u1ED7i!"));
        }
      },
      error: (err) => {
        this.editSaving.set(false);
        const msg = err?.error?.error || this.i18n.t("cccal.msg.unknownError", "L\u1ED7i kh\xF4ng x\xE1c \u0111\u1ECBnh");
        this.message.error(`${this.i18n.t("cccal.msg.error", "L\u1ED7i!")} ${msg}`);
      }
    });
  }
  // ==================== Data loading ====================
  loadMonth() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.emptyMessage.set(null);
    const groupId = this.selectedGroupId || DEFAULT_GROUP_ID;
    this.api.getGroupCalendarMonth(this.selectedYear, this.selectedMonth, groupId).subscribe({
      next: (records) => {
        this.weeks.set(this.buildWeeks(records ?? []));
        if (!records || records.length === 0) {
          this.emptyMessage.set(this.i18n.t("cccal.msg.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u l\u1ECBch nh\xF3m ca trong kho\u1EA3ng th\u1EDDi gian n\xE0y."));
        }
        this.loading.set(false);
      },
      error: () => {
        this.weeks.set([]);
        this.errorMessage.set(this.i18n.t("cccal.msg.loadError", "L\u1ED7i t\u1EA3i l\u1ECBch nh\xF3m ca!"));
        this.loading.set(false);
      }
    });
  }
  /** Dựng lưới 7 cột từ danh sách phẳng do backend trả về - cùng thuật toán với cccalRender() trong
   *  bản Thymeleaf gốc: gom nhóm theo ngày (1 ngày có thể có nhiều dòng/nhiều ca), chèn ô rỗng trước
   *  ngày đầu tiên theo đúng thứ trong tuần, sau đó chia đều 7 ô/hàng theo thứ tự các ngày đã gom. */
  buildWeeks(records) {
    if (!records.length)
      return [];
    const map = /* @__PURE__ */ new Map();
    records.forEach((r) => {
      const key = (r.arDateStr || "").replace(/-/g, "/");
      if (!key)
        return;
      const items = map.get(key) ?? [];
      items.push(r);
      map.set(key, items);
    });
    const dateKeys = Array.from(map.keys()).sort();
    if (!dateKeys.length)
      return [];
    const today = /* @__PURE__ */ new Date();
    const todayKey = `${today.getFullYear()}/${String(today.getMonth() + 1).padStart(2, "0")}/${String(today.getDate()).padStart(2, "0")}`;
    const [fy, fm, fd] = dateKeys[0].split("/").map(Number);
    const firstDow = new Date(fy, fm - 1, fd).getDay();
    const cells = [];
    for (let i = 0; i < firstDow; i++) {
      cells.push({ items: [], dateKey: "", day: 0, isEmpty: true, isToday: false, isSunday: false, isSaturday: false, isWeekend: false, hasWork: false });
    }
    dateKeys.forEach((key, idx) => {
      const items = map.get(key) ?? [];
      const day = parseInt(key.split("/")[2], 10);
      const dow = (firstDow + idx) % 7;
      const isSunday = dow === 0;
      const isSaturday = dow === 6;
      const defaultWork = !(isSunday || isSaturday);
      const hasWork = items.length > 0 ? items.some((it) => it.workdayflag === 1) : defaultWork;
      cells.push({
        items,
        dateKey: key,
        day,
        isEmpty: false,
        isToday: key === todayKey,
        isSunday,
        isSaturday,
        isWeekend: isSunday || isSaturday,
        hasWork
      });
    });
    while (cells.length % 7 !== 0) {
      cells.push({ items: [], dateKey: "", day: 0, isEmpty: true, isToday: false, isSunday: false, isSaturday: false, isWeekend: false, hasWork: false });
    }
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
  static \u0275fac = function ViewClassCalendarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewClassCalendarComponent)(\u0275\u0275directiveInject(ViewClassCalendarService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewClassCalendarComponent, selectors: [["app-view-class-calendar"]], decls: 74, vars: 92, consts: [[1, "vcc-wrap"], ["id", "vcc_toolbar", 1, "vcc-toolbar"], [1, "vcc-nav"], ["nz-button", "", "nzType", "default", "nzShape", "circle", 3, "click"], [1, "bx", "bx-chevron-left"], ["id", "vcc_monthSel", 1, "vcc-combo", 3, "ngModelChange", "ngModel"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["id", "vcc_yearSel", 1, "vcc-combo", "vcc-year", 3, "ngModelChange", "ngModel"], ["id", "vcc_groupFilter", 1, "vcc-combo", "vcc-group", 3, "ngModelChange", "ngModel", "nzAllowClear", "nzPlaceHolder"], [1, "vcc-actions"], ["id", "vcc_searchBtn", "nz-button", "", "nzType", "default", 3, "click"], [1, "bx", "bx-refresh"], ["id", "vcc_addBtn", "nz-button", "", "nzType", "primary", 3, "click"], [1, "bx", "bx-plus"], ["nzType", "error", "class", "mb-2", 3, "nzMessage", 4, "ngIf"], ["id", "vcc_gridWrap", 1, "vcc-grid-wrap"], [1, "vcc-hrow"], [1, "vcc-hcell", "vcc-col-sun"], [1, "bx", "bxs-sun"], [1, "vcc-hcell"], [1, "vcc-hcell", "vcc-col-sat"], [1, "bx", "bxs-star"], ["id", "vcc_body"], ["class", "vcc-status-msg", 4, "ngIf"], [4, "ngIf"], [1, "vcc-legend"], [1, "vcc-legend-item"], [1, "vcc-legend-dot", "vcc-lg-work"], [1, "vcc-legend-dot", "vcc-lg-rest"], [1, "vcc-legend-dot", "vcc-lg-today"], ["nzWidth", "520px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], ["nzWidth", "640px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-2", 3, "nzMessage"], [1, "vcc-status-msg"], ["class", "vcc-week", 4, "ngFor", "ngForOf"], [1, "vcc-week"], ["class", "vcc-day", 3, "is-empty", "is-today", "is-rest", "is-work", "vcc-clickable", "click", 4, "ngFor", "ngForOf"], [1, "vcc-day", 3, "click"], [1, "vcc-day-top"], [1, "vcc-day-num"], [1, "vcc-status"], [1, "vcc-tags"], ["class", "vcc-tag t-sh", 4, "ngFor", "ngForOf"], ["class", "vcc-tag t-rest", 4, "ngIf"], ["class", "vcc-tag t-wd", 4, "ngIf"], [1, "vcc-tag", "t-rest"], [1, "vcc-tag", "t-wd"], [1, "vcc-tag", "t-sh"], [1, "vcc-form"], [1, "vcc-form-row"], [1, "vcc-required"], ["id", "vcc_dateRange", "name", "addDateRange", "nzFormat", "dd/MM/yyyy", 3, "ngModelChange", "ngModel"], ["id", "vcc_addGroupId", "name", "addGroupId", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [1, "vcc-form-row-2"], ["id", "vcc_workShift", "name", "workShift", 3, "ngModelChange", "ngModel"], ["id", "vcc_restShift", "name", "restShift", 3, "ngModelChange", "ngModel"], ["id", "vcc_workdayflag", "name", "workdayflag", 3, "ngModelChange", "ngModel"], ["id", "vcc_shiftNo", "name", "shiftNo", 3, "ngModelChange", "ngModel", "nzAllowClear"], [1, "vcc-form-row-3"], ["id", "vcc_typeid", "name", "typeid", 3, "ngModelChange", "ngModel", "nzAllowClear"], ["id", "vcc_overtypeid", "name", "overtypeid", 3, "ngModelChange", "ngModel", "nzAllowClear"], ["id", "vcc_typeidDefault", "name", "typeidDefault", 3, "ngModelChange", "ngModel", "nzAllowClear"], ["nz-input", "", "id", "vcc_operationId", "name", "operationId", 3, "ngModelChange", "ngModel"], ["id", "vcc_orderno", "name", "orderno", 2, "width", "100%", 3, "ngModelChange", "ngModel", "nzMin"], ["id", "vcc_activity", "name", "activity", 3, "ngModelChange", "ngModel"]], template: function ViewClassCalendarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275listener("click", function ViewClassCalendarComponent_Template_button_click_3_listener() {
        return ctx.prevMonth();
      });
      \u0275\u0275element(5, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "nz-select", 5);
      \u0275\u0275twoWayListener("ngModelChange", function ViewClassCalendarComponent_Template_nz_select_ngModelChange_6_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedMonth, $event) || (ctx.selectedMonth = $event);
        return $event;
      });
      \u0275\u0275template(7, ViewClassCalendarComponent_nz_option_7_Template, 2, 4, "nz-option", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(8, "nz-select", 7);
      \u0275\u0275twoWayListener("ngModelChange", function ViewClassCalendarComponent_Template_nz_select_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedYear, $event) || (ctx.selectedYear = $event);
        return $event;
      });
      \u0275\u0275template(9, ViewClassCalendarComponent_nz_option_9_Template, 1, 2, "nz-option", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(10, "nz-select", 8);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewClassCalendarComponent_Template_nz_select_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedGroupId, $event) || (ctx.selectedGroupId = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ViewClassCalendarComponent_Template_nz_select_ngModelChange_10_listener() {
        return ctx.onGroupFilterChange();
      });
      \u0275\u0275template(12, ViewClassCalendarComponent_nz_option_12_Template, 1, 2, "nz-option", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 9)(14, "button", 10);
      \u0275\u0275listener("click", function ViewClassCalendarComponent_Template_button_click_14_listener() {
        return ctx.search();
      });
      \u0275\u0275element(15, "i", 11);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 12);
      \u0275\u0275listener("click", function ViewClassCalendarComponent_Template_button_click_18_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(19, "i", 13);
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(22, ViewClassCalendarComponent_nz_alert_22_Template, 1, 1, "nz-alert", 14);
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
      \u0275\u0275elementStart(48, "div", 22);
      \u0275\u0275template(49, ViewClassCalendarComponent_div_49_Template, 2, 0, "div", 23)(50, ViewClassCalendarComponent_div_50_Template, 2, 1, "div", 23)(51, ViewClassCalendarComponent_ng_container_51_Template, 2, 1, "ng-container", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 25)(53, "span", 26);
      \u0275\u0275element(54, "span", 27);
      \u0275\u0275text(55);
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "span", 26);
      \u0275\u0275element(58, "span", 28);
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "span", 26);
      \u0275\u0275element(62, "span", 29);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "nz-modal", 30);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275pipe(68, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewClassCalendarComponent_Template_nz_modal_nzOnCancel_65_listener() {
        return ctx.closeAddModal();
      })("nzOnOk", function ViewClassCalendarComponent_Template_nz_modal_nzOnOk_65_listener() {
        return ctx.saveBatch();
      });
      \u0275\u0275template(69, ViewClassCalendarComponent_ng_container_69_Template, 39, 31, "ng-container", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "nz-modal", 32);
      \u0275\u0275pipe(71, "translate");
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewClassCalendarComponent_Template_nz_modal_nzOnCancel_70_listener() {
        return ctx.closeEditModal();
      })("nzOnOk", function ViewClassCalendarComponent_Template_nz_modal_nzOnOk_70_listener() {
        return ctx.saveEdit();
      });
      \u0275\u0275template(73, ViewClassCalendarComponent_ng_container_73_Template, 57, 69, "ng-container", 31);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275attribute("title", \u0275\u0275pipeBind2(4, 35, "cccal.btn.prevMonth", "Th\xE1ng tr\u01B0\u1EDBc"));
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
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedGroupId);
      \u0275\u0275property("nzAllowClear", true)("nzPlaceHolder", \u0275\u0275pipeBind2(11, 38, "cccal.select.chooseGroup", "-- Ch\u1ECDn nh\xF3m ca --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.groupOptions());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(17, 41, "cccal.btn.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(21, 44, "cccal.btn.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(28, 47, "cccal.day.sun", "CN"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 50, "cccal.day.mon", "T2"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 53, "cccal.day.tue", "T3"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 56, "cccal.day.wed", "T4"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 59, "cccal.day.thu", "T5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 62, "cccal.day.fri", "T6"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(47, 65, "cccal.day.sat", "T7"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.emptyMessage());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(56, 68, "cccal.legend.workday", "Ng\xE0y l\xE0m vi\u1EC7c"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(60, 71, "cccal.legend.restday", "Ng\xE0y ngh\u1EC9"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(64, 74, "cccal.legend.today", "H\xF4m nay"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzVisible", ctx.addModalVisible())("nzTitle", \u0275\u0275pipeBind2(66, 77, "cccal.modal.addTitle", "Th\xEAm M\u1EDBi L\u1ECBch Nh\xF3m Ca"))("nzOkLoading", ctx.addSaving())("nzOkText", \u0275\u0275pipeBind2(67, 80, "cccal.btn.addNew", "Th\xEAm M\u1EDBi"))("nzCancelText", \u0275\u0275pipeBind2(68, 83, "cccal.btn.close", "\u0110\xF3ng"));
      \u0275\u0275advance(5);
      \u0275\u0275property("nzVisible", ctx.editModalVisible())("nzTitle", ctx.editModalTitle())("nzOkLoading", ctx.editSaving())("nzOkText", \u0275\u0275pipeBind2(71, 86, "cccal.btn.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(72, 89, "cccal.btn.close", "\u0110\xF3ng"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzInputModule, NzInputDirective, NzInputNumberModule, NzInputNumberComponent, NzDatePickerModule, NzDatePickerComponent, NzRangePickerComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\n@keyframes _ngcontent-%COMP%_vcc-pulse {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(59, 130, 246, .4);\n  }\n  50% {\n    box-shadow: 0 0 0 6px rgba(59, 130, 246, 0);\n  }\n}\n@keyframes _ngcontent-%COMP%_vcc-slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.vcc-wrap[_ngcontent-%COMP%] {\n  display: block;\n}\n.vcc-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #e2e8f0 100%);\n  border: 1px solid #cbd5e1;\n  border-radius: 8px 8px 0 0;\n  padding: 8px 14px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, .06);\n}\n.vcc-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin: 0 auto;\n}\n.vcc-combo[_ngcontent-%COMP%] {\n  width: 130px;\n}\n.vcc-combo.vcc-year[_ngcontent-%COMP%] {\n  width: 90px;\n}\n.vcc-combo.vcc-group[_ngcontent-%COMP%] {\n  width: 180px;\n}\n.vcc-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.vcc-grid-wrap[_ngcontent-%COMP%] {\n  border: 1px solid #cbd5e1;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  overflow: hidden;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, .06);\n}\n.vcc-hrow[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #334155 100%);\n}\n.vcc-hcell[_ngcontent-%COMP%] {\n  padding: 8px;\n  text-align: center;\n  font-weight: 700;\n  font-size: .82rem;\n  color: #e2e8f0;\n  letter-spacing: .5px;\n  border-right: 1px solid rgba(255, 255, 255, .08);\n}\n.vcc-hcell[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.vcc-col-sun[_ngcontent-%COMP%] {\n  color: #fca5a5 !important;\n}\n.vcc-col-sat[_ngcontent-%COMP%] {\n  color: #86efac !important;\n}\n.vcc-status-msg[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  color: #64748b;\n}\n.vcc-week[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  border-bottom: 1px solid #e2e8f0;\n  animation: _ngcontent-%COMP%_vcc-slideDown .3s ease-out both;\n}\n.vcc-week[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.vcc-day[_ngcontent-%COMP%] {\n  min-height: 90px;\n  padding: 6px 8px;\n  border-right: 1px solid #e2e8f0;\n  background: #fff;\n  overflow: hidden;\n  transition: all .2s ease;\n  position: relative;\n}\n.vcc-day[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.vcc-day.is-empty[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  min-height: 0;\n}\n.vcc-day.is-today[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff 0%,\n      #dbeafe 100%);\n  animation: _ngcontent-%COMP%_vcc-pulse 2.5s infinite;\n}\n.vcc-day.is-rest[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #fef2f2 100%);\n}\n.vcc-day.is-work[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #f0fdf4 100%);\n}\n.vcc-day.vcc-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.vcc-day.vcc-clickable[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n  z-index: 2;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, .1);\n  border-radius: 4px;\n}\n.vcc-day-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 4px;\n}\n.vcc-day-num[_ngcontent-%COMP%] {\n  font-size: .95rem;\n  font-weight: 800;\n  color: #1e293b;\n  white-space: nowrap;\n  line-height: 1.2;\n}\n.vcc-day-num.is-sun[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.vcc-day-num.is-sat[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.vcc-status[_ngcontent-%COMP%] {\n  font-size: .62rem;\n  padding: 2px 7px;\n  border-radius: 10px;\n  font-weight: 700;\n  white-space: nowrap;\n  line-height: 1.3;\n  letter-spacing: .3px;\n  text-transform: uppercase;\n}\n.vcc-status.s-rest[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fecaca,\n      #fca5a5);\n  color: #7f1d1d;\n}\n.vcc-status.s-work[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #bbf7d0,\n      #86efac);\n  color: #166534;\n}\n.vcc-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 3px;\n  margin-top: 4px;\n}\n.vcc-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: .58rem;\n  padding: 1px 6px;\n  border-radius: 8px;\n  line-height: 1.6;\n  white-space: nowrap;\n  font-weight: 600;\n}\n.vcc-tag.t-rest[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #991b1b;\n}\n.vcc-tag.t-wd[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e3a8a;\n}\n.vcc-tag.t-sh[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.vcc-legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 8px 14px;\n  background: #f8fafc;\n  border: 1px solid #cbd5e1;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  margin-top: -1px;\n  flex-wrap: wrap;\n}\n.vcc-legend-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: .72rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.vcc-legend-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  border: 1px solid rgba(0, 0, 0, .1);\n}\n.vcc-lg-work[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #86efac,\n      #4ade80);\n}\n.vcc-lg-rest[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fca5a5,\n      #f87171);\n}\n.vcc-lg-today[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #93c5fd,\n      #3b82f6);\n}\n.vcc-form-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 12px;\n}\n.vcc-form-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: .82rem;\n  font-weight: 600;\n  color: #334155;\n}\n.vcc-form-row-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.vcc-form-row-3[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n.vcc-required[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n/*# sourceMappingURL=view-class-calendar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewClassCalendarComponent, [{
    type: Component,
    args: [{ selector: "app-view-class-calendar", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzButtonModule,
      NzSelectModule,
      NzInputModule,
      NzInputNumberModule,
      NzDatePickerModule,
      NzModalModule,
      NzAlertModule,
      TranslatePipe
    ], template: `<div class="vcc-wrap">
  <!-- ===== Toolbar ===== -->
  <div id="vcc_toolbar" class="vcc-toolbar">
    <div class="vcc-nav">
      <button nz-button nzType="default" nzShape="circle" [attr.title]="'cccal.btn.prevMonth' | translate:'Th\xE1ng tr\u01B0\u1EDBc'" (click)="prevMonth()">
        <i class="bx bx-chevron-left"></i>
      </button>
      <nz-select id="vcc_monthSel" class="vcc-combo" [(ngModel)]="selectedMonth">
        <nz-option *ngFor="let m of monthOptions" [nzValue]="m" [nzLabel]="monthKeys[m - 1] | translate"></nz-option>
      </nz-select>
      <nz-select id="vcc_yearSel" class="vcc-combo vcc-year" [(ngModel)]="selectedYear">
        <nz-option *ngFor="let y of yearOptions" [nzValue]="y" [nzLabel]="y"></nz-option>
      </nz-select>
      <nz-select id="vcc_groupFilter" class="vcc-combo vcc-group" [(ngModel)]="selectedGroupId"
                 [nzAllowClear]="true" [nzPlaceHolder]="'cccal.select.chooseGroup' | translate:'-- Ch\u1ECDn nh\xF3m ca --'"
                 (ngModelChange)="onGroupFilterChange()">
        <nz-option *ngFor="let g of groupOptions()" [nzValue]="g.codeNo" [nzLabel]="g.codeName"></nz-option>
      </nz-select>
    </div>
    <div class="vcc-actions">
      <button id="vcc_searchBtn" nz-button nzType="default" (click)="search()">
        <i class="bx bx-refresh"></i> {{ 'cccal.btn.search' | translate:'Tra c\u1EE9u' }}
      </button>
      <button id="vcc_addBtn" nz-button nzType="primary" (click)="openAddModal()">
        <i class="bx bx-plus"></i> {{ 'cccal.btn.addNew' | translate:'Th\xEAm m\u1EDBi' }}
      </button>
    </div>
  </div>

  <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-2"></nz-alert>

  <!-- ===== Calendar grid ===== -->
  <div id="vcc_gridWrap" class="vcc-grid-wrap">
    <div class="vcc-hrow">
      <div class="vcc-hcell vcc-col-sun"><i class="bx bxs-sun"></i> {{ 'cccal.day.sun' | translate:'CN' }}</div>
      <div class="vcc-hcell">{{ 'cccal.day.mon' | translate:'T2' }}</div>
      <div class="vcc-hcell">{{ 'cccal.day.tue' | translate:'T3' }}</div>
      <div class="vcc-hcell">{{ 'cccal.day.wed' | translate:'T4' }}</div>
      <div class="vcc-hcell">{{ 'cccal.day.thu' | translate:'T5' }}</div>
      <div class="vcc-hcell">{{ 'cccal.day.fri' | translate:'T6' }}</div>
      <div class="vcc-hcell vcc-col-sat"><i class="bx bxs-star"></i> {{ 'cccal.day.sat' | translate:'T7' }}</div>
    </div>

    <div id="vcc_body">
      <div *ngIf="loading()" class="vcc-status-msg">...</div>
      <div *ngIf="!loading() && emptyMessage()" class="vcc-status-msg">{{ emptyMessage() }}</div>

      <ng-container *ngIf="!loading()">
        <div class="vcc-week" *ngFor="let week of weeks()">
          <div *ngFor="let cell of week"
               class="vcc-day"
               [class.is-empty]="cell.isEmpty"
               [class.is-today]="cell.isToday"
               [class.is-rest]="!cell.isEmpty && !cell.hasWork"
               [class.is-work]="!cell.isEmpty && cell.hasWork"
               [class.vcc-clickable]="!cell.isEmpty"
               (click)="dayClick(cell)">
            <ng-container *ngIf="!cell.isEmpty">
              <div class="vcc-day-top">
                <span class="vcc-day-num" [class.is-sun]="cell.isSunday" [class.is-sat]="cell.isSaturday">{{ cell.day }}</span>
                <span class="vcc-status" [class.s-work]="cell.hasWork" [class.s-rest]="!cell.hasWork">
                  {{ (cell.hasWork ? 'cccal.status.work' : 'cccal.status.rest') | translate }}
                </span>
              </div>
              <div class="vcc-tags">
                <ng-container *ngIf="cell.items.length === 0">
                  <span class="vcc-tag t-rest" *ngIf="cell.isWeekend">{{ 'cccal.tag.weekend' | translate:'Cu\u1ED1i tu\u1EA7n' }}</span>
                  <span class="vcc-tag t-wd" *ngIf="!cell.isWeekend">{{ 'cccal.tag.noData' | translate:'Ch\u01B0a c\xF3 d\u1EEF li\u1EC7u' }}</span>
                </ng-container>
                <span class="vcc-tag t-sh" *ngFor="let it of cell.items">{{ it.shiftName || shiftLabel(it.shiftNo) }}</span>
              </div>
            </ng-container>
          </div>
        </div>
      </ng-container>
    </div>
  </div>

  <!-- ===== Legend ===== -->
  <div class="vcc-legend">
    <span class="vcc-legend-item"><span class="vcc-legend-dot vcc-lg-work"></span> {{ 'cccal.legend.workday' | translate:'Ng\xE0y l\xE0m vi\u1EC7c' }}</span>
    <span class="vcc-legend-item"><span class="vcc-legend-dot vcc-lg-rest"></span> {{ 'cccal.legend.restday' | translate:'Ng\xE0y ngh\u1EC9' }}</span>
    <span class="vcc-legend-item"><span class="vcc-legend-dot vcc-lg-today"></span> {{ 'cccal.legend.today' | translate:'H\xF4m nay' }}</span>
  </div>
</div>

<!-- ===== Modal Th\xEAm m\u1EDBi (batch theo kho\u1EA3ng ng\xE0y) ===== -->
<nz-modal [nzVisible]="addModalVisible()" [nzTitle]="'cccal.modal.addTitle' | translate:'Th\xEAm M\u1EDBi L\u1ECBch Nh\xF3m Ca'"
          nzWidth="520px" (nzOnCancel)="closeAddModal()" [nzOkLoading]="addSaving()"
          [nzOkText]="'cccal.btn.addNew' | translate:'Th\xEAm M\u1EDBi'" [nzCancelText]="'cccal.btn.close' | translate:'\u0110\xF3ng'"
          (nzOnOk)="saveBatch()">
  <ng-container *nzModalContent>
    <form class="vcc-form">
      <div class="vcc-form-row">
        <label>{{ 'cccal.label.fromDate' | translate:'T\u1EEB ng\xE0y' }} <span class="vcc-required">*</span> /
          {{ 'cccal.label.toDate' | translate:'\u0110\u1EBFn ng\xE0y' }} <span class="vcc-required">*</span></label>
        <nz-range-picker id="vcc_dateRange" [(ngModel)]="addForm.dateRange" name="addDateRange" nzFormat="dd/MM/yyyy"></nz-range-picker>
      </div>
      <div class="vcc-form-row">
        <label>{{ 'cccal.label.groupShift' | translate:'Nh\xF3m ca' }} <span class="vcc-required">*</span></label>
        <nz-select id="vcc_addGroupId" [(ngModel)]="addForm.groupId" name="addGroupId"
                   [nzPlaceHolder]="'cccal.select.chooseGroup' | translate:'-- Ch\u1ECDn nh\xF3m ca --'">
          <nz-option *ngFor="let g of groupOptions()" [nzValue]="g.codeNo" [nzLabel]="g.codeName"></nz-option>
        </nz-select>
      </div>
      <div class="vcc-form-row-2">
        <div class="vcc-form-row">
          <label>{{ 'cccal.label.workShift' | translate:'Ca l\xE0m vi\u1EC7c (Work Shift)' }} <span class="vcc-required">*</span></label>
          <nz-select id="vcc_workShift" [(ngModel)]="addForm.workShift" name="workShift">
            <nz-option *ngFor="let s of shiftOptions()" [nzValue]="s.shiftNo" [nzLabel]="s.nameVi || s.shiftNo"></nz-option>
          </nz-select>
        </div>
        <div class="vcc-form-row">
          <label>{{ 'cccal.label.restShift' | translate:'Ca ngh\u1EC9 ng\u01A1i (Rest Shift)' }} <span class="vcc-required">*</span></label>
          <nz-select id="vcc_restShift" [(ngModel)]="addForm.restShift" name="restShift">
            <nz-option *ngFor="let s of shiftOptions()" [nzValue]="s.shiftNo" [nzLabel]="s.nameVi || s.shiftNo"></nz-option>
          </nz-select>
        </div>
      </div>
    </form>
  </ng-container>
</nz-modal>

<!-- ===== Modal C\u1EADp nh\u1EADt 1 ng\xE0y ===== -->
<nz-modal [nzVisible]="editModalVisible()" [nzTitle]="editModalTitle()"
          nzWidth="640px" (nzOnCancel)="closeEditModal()" [nzOkLoading]="editSaving()"
          [nzOkText]="'cccal.btn.save' | translate:'L\u01B0u'" [nzCancelText]="'cccal.btn.close' | translate:'\u0110\xF3ng'"
          (nzOnOk)="saveEdit()">
  <ng-container *nzModalContent>
    <form class="vcc-form">
      <div class="vcc-form-row-2">
        <div class="vcc-form-row">
          <label>{{ 'cccal.label.workdayflag' | translate:'Ng\xE0y l\xE0m vi\u1EC7c' }}</label>
          <nz-select id="vcc_workdayflag" [(ngModel)]="editForm.workdayflag" name="workdayflag">
            <nz-option [nzValue]="0" [nzLabel]="'cccal.option.restday' | translate:'0 \u2014 Ng\xE0y ngh\u1EC9'"></nz-option>
            <nz-option [nzValue]="1" [nzLabel]="'cccal.option.workday' | translate:'1 \u2014 Ng\xE0y l\xE0m vi\u1EC7c'"></nz-option>
          </nz-select>
        </div>
        <div class="vcc-form-row">
          <label>{{ 'cccal.label.shiftNo' | translate:'Ca l\xE0m vi\u1EC7c (Shift No)' }}</label>
          <nz-select id="vcc_shiftNo" [(ngModel)]="editForm.shiftNo" name="shiftNo" [nzAllowClear]="true">
            <nz-option *ngFor="let s of shiftOptions()" [nzValue]="s.shiftNo" [nzLabel]="s.nameVi || s.shiftNo"></nz-option>
          </nz-select>
        </div>
      </div>
      <div class="vcc-form-row-3">
        <div class="vcc-form-row">
          <label>{{ 'cccal.label.typeid' | translate:'TypeID' }}</label>
          <nz-select id="vcc_typeid" [(ngModel)]="editForm.typeid" name="typeid" [nzAllowClear]="true">
            <nz-option *ngFor="let t of typeOptions()" [nzValue]="t.codeNo" [nzLabel]="t.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="vcc-form-row">
          <label>{{ 'cccal.label.overtypeid' | translate:'OvertypeID' }}</label>
          <nz-select id="vcc_overtypeid" [(ngModel)]="editForm.overtypeid" name="overtypeid" [nzAllowClear]="true">
            <nz-option *ngFor="let t of typeOptions()" [nzValue]="t.codeNo" [nzLabel]="t.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="vcc-form-row">
          <label>{{ 'cccal.label.typeidDefault' | translate:'TypeID m\u1EB7c \u0111\u1ECBnh' }}</label>
          <nz-select id="vcc_typeidDefault" [(ngModel)]="editForm.typeidDefault" name="typeidDefault" [nzAllowClear]="true">
            <nz-option *ngFor="let t of typeOptions()" [nzValue]="t.codeNo" [nzLabel]="t.codeName"></nz-option>
          </nz-select>
        </div>
      </div>
      <div class="vcc-form-row-3">
        <div class="vcc-form-row">
          <label>{{ 'cccal.label.operationId' | translate:'Operation ID' }}</label>
          <input nz-input id="vcc_operationId" [(ngModel)]="editForm.operationId" name="operationId" />
        </div>
        <div class="vcc-form-row">
          <label>{{ 'cccal.label.orderno' | translate:'S\u1EAFp x\u1EBFp' }}</label>
          <nz-input-number id="vcc_orderno" [(ngModel)]="editForm.orderno" name="orderno" [nzMin]="0" style="width:100%"></nz-input-number>
        </div>
        <div class="vcc-form-row">
          <label>{{ 'cccal.label.activity' | translate:'Tr\u1EA1ng th\xE1i' }}</label>
          <nz-select id="vcc_activity" [(ngModel)]="editForm.activity" name="activity">
            <nz-option [nzValue]="1" [nzLabel]="'cccal.option.active' | translate:'Ho\u1EA1t \u0111\u1ED9ng'"></nz-option>
            <nz-option [nzValue]="0" [nzLabel]="'cccal.option.inactive' | translate:'Ng\u1EEBng'"></nz-option>
          </nz-select>
        </div>
      </div>
    </form>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-class-calendar/view-class-calendar.component.css */\n@keyframes vcc-pulse {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(59, 130, 246, .4);\n  }\n  50% {\n    box-shadow: 0 0 0 6px rgba(59, 130, 246, 0);\n  }\n}\n@keyframes vcc-slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.vcc-wrap {\n  display: block;\n}\n.vcc-toolbar {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #e2e8f0 100%);\n  border: 1px solid #cbd5e1;\n  border-radius: 8px 8px 0 0;\n  padding: 8px 14px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, .06);\n}\n.vcc-nav {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin: 0 auto;\n}\n.vcc-combo {\n  width: 130px;\n}\n.vcc-combo.vcc-year {\n  width: 90px;\n}\n.vcc-combo.vcc-group {\n  width: 180px;\n}\n.vcc-actions {\n  display: flex;\n  gap: 6px;\n}\n.vcc-grid-wrap {\n  border: 1px solid #cbd5e1;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  overflow: hidden;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, .06);\n}\n.vcc-hrow {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #334155 100%);\n}\n.vcc-hcell {\n  padding: 8px;\n  text-align: center;\n  font-weight: 700;\n  font-size: .82rem;\n  color: #e2e8f0;\n  letter-spacing: .5px;\n  border-right: 1px solid rgba(255, 255, 255, .08);\n}\n.vcc-hcell:last-child {\n  border-right: none;\n}\n.vcc-col-sun {\n  color: #fca5a5 !important;\n}\n.vcc-col-sat {\n  color: #86efac !important;\n}\n.vcc-status-msg {\n  padding: 20px;\n  text-align: center;\n  color: #64748b;\n}\n.vcc-week {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  border-bottom: 1px solid #e2e8f0;\n  animation: vcc-slideDown .3s ease-out both;\n}\n.vcc-week:last-child {\n  border-bottom: none;\n}\n.vcc-day {\n  min-height: 90px;\n  padding: 6px 8px;\n  border-right: 1px solid #e2e8f0;\n  background: #fff;\n  overflow: hidden;\n  transition: all .2s ease;\n  position: relative;\n}\n.vcc-day:last-child {\n  border-right: none;\n}\n.vcc-day.is-empty {\n  background: #f8fafc;\n  min-height: 0;\n}\n.vcc-day.is-today {\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff 0%,\n      #dbeafe 100%);\n  animation: vcc-pulse 2.5s infinite;\n}\n.vcc-day.is-rest {\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #fef2f2 100%);\n}\n.vcc-day.is-work {\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #f0fdf4 100%);\n}\n.vcc-day.vcc-clickable {\n  cursor: pointer;\n}\n.vcc-day.vcc-clickable:hover {\n  transform: scale(1.02);\n  z-index: 2;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, .1);\n  border-radius: 4px;\n}\n.vcc-day-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 4px;\n}\n.vcc-day-num {\n  font-size: .95rem;\n  font-weight: 800;\n  color: #1e293b;\n  white-space: nowrap;\n  line-height: 1.2;\n}\n.vcc-day-num.is-sun {\n  color: #dc2626;\n}\n.vcc-day-num.is-sat {\n  color: #16a34a;\n}\n.vcc-status {\n  font-size: .62rem;\n  padding: 2px 7px;\n  border-radius: 10px;\n  font-weight: 700;\n  white-space: nowrap;\n  line-height: 1.3;\n  letter-spacing: .3px;\n  text-transform: uppercase;\n}\n.vcc-status.s-rest {\n  background:\n    linear-gradient(\n      135deg,\n      #fecaca,\n      #fca5a5);\n  color: #7f1d1d;\n}\n.vcc-status.s-work {\n  background:\n    linear-gradient(\n      135deg,\n      #bbf7d0,\n      #86efac);\n  color: #166534;\n}\n.vcc-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 3px;\n  margin-top: 4px;\n}\n.vcc-tag {\n  display: inline-flex;\n  align-items: center;\n  font-size: .58rem;\n  padding: 1px 6px;\n  border-radius: 8px;\n  line-height: 1.6;\n  white-space: nowrap;\n  font-weight: 600;\n}\n.vcc-tag.t-rest {\n  background: #fde8e8;\n  color: #991b1b;\n}\n.vcc-tag.t-wd {\n  background: #dbeafe;\n  color: #1e3a8a;\n}\n.vcc-tag.t-sh {\n  background: #d1fae5;\n  color: #065f46;\n}\n.vcc-legend {\n  display: flex;\n  gap: 16px;\n  padding: 8px 14px;\n  background: #f8fafc;\n  border: 1px solid #cbd5e1;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  margin-top: -1px;\n  flex-wrap: wrap;\n}\n.vcc-legend-item {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: .72rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.vcc-legend-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  border: 1px solid rgba(0, 0, 0, .1);\n}\n.vcc-lg-work {\n  background:\n    linear-gradient(\n      135deg,\n      #86efac,\n      #4ade80);\n}\n.vcc-lg-rest {\n  background:\n    linear-gradient(\n      135deg,\n      #fca5a5,\n      #f87171);\n}\n.vcc-lg-today {\n  background:\n    linear-gradient(\n      135deg,\n      #93c5fd,\n      #3b82f6);\n}\n.vcc-form-row {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 12px;\n}\n.vcc-form-row label {\n  font-size: .82rem;\n  font-weight: 600;\n  color: #334155;\n}\n.vcc-form-row-2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.vcc-form-row-3 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n.vcc-required {\n  color: #dc2626;\n}\n/*# sourceMappingURL=view-class-calendar.component.css.map */\n"] }]
  }], () => [{ type: ViewClassCalendarService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewClassCalendarComponent, { className: "ViewClassCalendarComponent", filePath: "src/app/view-class-calendar/view-class-calendar.component.ts", lineNumber: 84 });
})();
export {
  ViewClassCalendarComponent
};
//# debugId=6331b979-41e3-55bd-9d55-8567f8bfbf3b
//# sourceMappingURL=chunk-GQ45KQ3A.js.map
