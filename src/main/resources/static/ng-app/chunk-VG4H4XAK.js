import {
  ChangeUserService
} from "./chunk-L26I55F6.js";
import {
  AuthService
} from "./chunk-NF2IPJNZ.js";
import {
  NzMessageService
} from "./chunk-XWW7CXU6.js";
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
  NzInputDirective,
  NzInputModule
} from "./chunk-VO7C5C6M.js";
import {
  I18nService,
  TranslatePipe
} from "./chunk-MZSSMIRT.js";
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
  ɵɵreference,
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

// src/app/view-emp-calendar/view-emp-calendar.service.ts
var API_BASE = "/ar/attendanceSettings/api/calender/emp";
var ViewEmpCalendarService = class _ViewEmpCalendarService {
  constructor(http) {
    this.http = http;
  }
  http;
  getEmpCalendarMonth(year, month, personId) {
    const params = new HttpParams().set("year", year).set("month", month).set("personId", personId);
    return this.http.get(`${API_BASE}/month`, { params, withCredentials: true });
  }
  getEmpScheduleDetail(arDateStr, personId) {
    const params = new HttpParams().set("arDateStr", arDateStr).set("personId", personId);
    return this.http.get(`${API_BASE}/detail`, { params, withCredentials: true });
  }
  saveEmpCalendarDay(payload) {
    return this.http.post(`${API_BASE}/save`, payload, {
      withCredentials: true
    });
  }
  getShiftList() {
    return this.http.get("/ar/attendanceSettings/api/shift", { withCredentials: true });
  }
  static \u0275fac = function ViewEmpCalendarService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewEmpCalendarService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewEmpCalendarService, factory: _ViewEmpCalendarService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewEmpCalendarService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-emp-calendar/view-emp-calendar.component.ts
function ViewEmpCalendarComponent_nz_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 36);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const m_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzValue", m_r1)("nzLabel", \u0275\u0275pipeBind1(1, 2, ctx_r1.monthKeys[m_r1 - 1]));
  }
}
function ViewEmpCalendarComponent_nz_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 36);
  }
  if (rf & 2) {
    const y_r3 = ctx.$implicit;
    \u0275\u0275property("nzValue", y_r3)("nzLabel", y_r3);
  }
}
function ViewEmpCalendarComponent_nz_alert_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 37);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ViewEmpCalendarComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "esscal.msg.loading", "\u0110ang t\u1EA3i..."));
  }
}
function ViewEmpCalendarComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.emptyMessage());
  }
}
function ViewEmpCalendarComponent_ng_container_56_div_1_div_1_ng_container_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "esscal.status.holidayStar", "\u2605 L\u1EC5"));
  }
}
function ViewEmpCalendarComponent_ng_container_56_div_1_div_1_ng_container_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cell_r5.record?.typeidName);
  }
}
function ViewEmpCalendarComponent_ng_container_56_div_1_div_1_ng_container_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275attribute("title", cell_r5.record?.remark);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2014 ", cell_r5.record?.remark);
  }
}
function ViewEmpCalendarComponent_ng_container_56_div_1_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 43)(2, "span", 44);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 45);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 46)(8, "span", 47);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, ViewEmpCalendarComponent_ng_container_56_div_1_div_1_ng_container_1_span_11_Template, 3, 4, "span", 48);
    \u0275\u0275elementStart(12, "span", 49);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, ViewEmpCalendarComponent_ng_container_56_div_1_div_1_ng_container_1_span_14_Template, 2, 1, "span", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, ViewEmpCalendarComponent_ng_container_56_div_1_div_1_ng_container_1_div_15_Template, 2, 2, "div", 51);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-sun", cell_r5.isSunday)("is-sat", cell_r5.isSaturday);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cell_r5.day);
    \u0275\u0275advance();
    \u0275\u0275classProp("s-holiday", cell_r5.isHoliday)("s-rest", !cell_r5.isHoliday && cell_r5.isRest)("s-work", !cell_r5.isHoliday && !cell_r5.isRest);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 21, ctx_r1.statusKey(cell_r5)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("t-we", cell_r5.isWeekend)("t-wd", !cell_r5.isWeekend);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 23, cell_r5.isWeekend ? "esscal.status.weekend" : "esscal.status.weekday"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", cell_r5.isHoliday);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.shiftLabel(cell_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cell_r5.record?.typeidName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cell_r5.record?.remark);
  }
}
function ViewEmpCalendarComponent_ng_container_56_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function ViewEmpCalendarComponent_ng_container_56_div_1_div_1_Template_div_click_0_listener() {
      const cell_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.dayClick(cell_r5));
    });
    \u0275\u0275template(1, ViewEmpCalendarComponent_ng_container_56_div_1_div_1_ng_container_1_Template, 16, 25, "ng-container", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r5 = ctx.$implicit;
    \u0275\u0275classProp("is-empty", cell_r5.isEmpty)("is-today", cell_r5.isToday)("is-holiday", !cell_r5.isEmpty && cell_r5.isHoliday)("is-rest", !cell_r5.isEmpty && !cell_r5.isHoliday && cell_r5.isRest)("is-work", !cell_r5.isEmpty && !cell_r5.isHoliday && !cell_r5.isRest)("vec-clickable", !cell_r5.isEmpty);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !cell_r5.isEmpty);
  }
}
function ViewEmpCalendarComponent_ng_container_56_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275template(1, ViewEmpCalendarComponent_ng_container_56_div_1_div_1_Template, 2, 13, "div", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const week_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", week_r6);
  }
}
function ViewEmpCalendarComponent_ng_container_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ViewEmpCalendarComponent_ng_container_56_div_1_Template, 2, 1, "div", 39);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.weeks());
  }
}
function ViewEmpCalendarComponent_ng_container_77_nz_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 36);
  }
  if (rf & 2) {
    const s_r8 = ctx.$implicit;
    \u0275\u0275property("nzValue", s_r8.shiftNo)("nzLabel", s_r8.nameVi || s_r8.shiftNo);
  }
}
function ViewEmpCalendarComponent_ng_container_77_nz_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 36);
  }
  if (rf & 2) {
    const c_r9 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r9.codeNo)("nzLabel", c_r9.codeName);
  }
}
function ViewEmpCalendarComponent_ng_container_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 55)(2, "div", 56)(3, "label", 57);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 58);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 56)(8, "label", 57);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 59);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 56)(13, "label", 57);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "nz-select", 60);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewEmpCalendarComponent_ng_container_77_Template_nz_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.shiftNo, $event) || (ctx_r1.form.shiftNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(18, ViewEmpCalendarComponent_ng_container_77_nz_option_18_Template, 1, 2, "nz-option", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 56)(20, "label", 57);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "nz-select", 61);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewEmpCalendarComponent_ng_container_77_Template_nz_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.typeid, $event) || (ctx_r1.form.typeid = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(25, ViewEmpCalendarComponent_ng_container_77_nz_option_25_Template, 1, 2, "nz-option", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 62)(27, "label", 57);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function ViewEmpCalendarComponent_ng_container_77_Template_input_ngModelChange_30_listener($event) {
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
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 14, "arSupervisor.field.emp", "Nh\xE2n vi\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.empDisplay);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 17, "common.date", "Ng\xE0y"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.dateDisplay);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 20, "addShift.shift", "Ca l\xE0m vi\u1EC7c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.shiftNo);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(17, 23, "addShift.selectShift", "-- Ch\u1ECDn ca l\xE0m vi\u1EC7c --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.shiftOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 26, "addShift.dayType", "Lo\u1EA1i ng\xE0y"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.typeid);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(24, 29, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.dayTypeOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 32, "common.remark", "Ghi ch\xFA"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.remark);
    \u0275\u0275control();
  }
}
function ViewEmpCalendarComponent_ng_container_80_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.deptTreeErrorMessage());
  }
}
function ViewEmpCalendarComponent_ng_container_80_nz_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 36);
  }
  if (rf & 2) {
    const c_r11 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r11.codeNo)("nzLabel", c_r11.codeName);
  }
}
function ViewEmpCalendarComponent_ng_container_80_nz_alert_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 37);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzMessage", ctx_r1.pickerErrorMessage() ?? "");
  }
}
function ViewEmpCalendarComponent_ng_container_80_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 82);
    \u0275\u0275listener("click", function ViewEmpCalendarComponent_ng_container_80_tr_52_Template_tr_click_0_listener() {
      const row_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectEmployee(row_r13));
    });
    \u0275\u0275elementStart(1, "td", 83);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
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
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r14 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r13.empId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r13.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r13.deptName || row_r13.deptNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r13.position);
  }
}
function ViewEmpCalendarComponent_ng_container_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 64);
    \u0275\u0275listener("ngSubmit", function ViewEmpCalendarComponent_ng_container_80_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pickerSearch());
    });
    \u0275\u0275elementStart(2, "div", 65)(3, "label", 66);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 67);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewEmpCalendarComponent_ng_container_80_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pickerKeyword, $event) || (ctx_r1.pickerKeyword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function ViewEmpCalendarComponent_ng_container_80_Template_input_keydown_enter_6_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r1.pickerSearch());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 68)(9, "label", 66);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "nz-tree-select", 69);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewEmpCalendarComponent_ng_container_80_Template_nz_tree_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pickerDeptNos, $event) || (ctx_r1.pickerDeptNos = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275template(14, ViewEmpCalendarComponent_ng_container_80_div_14_Template, 2, 1, "div", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 71)(16, "label", 66);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "nz-select", 72);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewEmpCalendarComponent_ng_container_80_Template_nz_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pickerEmpOffice, $event) || (ctx_r1.pickerEmpOffice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(21, ViewEmpCalendarComponent_ng_container_80_nz_option_21_Template, 1, 2, "nz-option", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 73)(23, "button", 74);
    \u0275\u0275element(24, "i", 13);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 75);
    \u0275\u0275listener("click", function ViewEmpCalendarComponent_ng_container_80_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pickerClear());
    });
    \u0275\u0275element(28, "i", 76);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(31, ViewEmpCalendarComponent_ng_container_80_nz_alert_31_Template, 1, 1, "nz-alert", 17);
    \u0275\u0275elementStart(32, "nz-table", 77, 0)(34, "thead")(35, "tr")(36, "th", 78);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th", 79);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "th");
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th");
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th");
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "tbody");
    \u0275\u0275template(52, ViewEmpCalendarComponent_ng_container_80_tr_52_Template, 11, 5, "tr", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const vecPickerTable_r15 = \u0275\u0275reference(33);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 24, "empSearch.field.keyword", "M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pickerKeyword);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(7, 27, "empSearch.placeholder.keyword", "Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 30, "empSearch.field.dept", "Ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzNodes", ctx_r1.deptNodes());
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pickerDeptNos);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(13, 33, "vdp.search.dept.placeholder", "Ch\u1ECDn ph\xF2ng ban"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.deptTreeErrorMessage());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 36, "empSearch.field.empOffice", "Tr\u1EA1ng th\xE1i l\xE0m vi\u1EC7c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pickerEmpOffice);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(20, 39, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.empOfficeOptions());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 42, "button.search", "Tra c\u1EE9u"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(30, 45, "empSearch.btn.clearFilter", "X\xF3a b\u1ED9 l\u1ECDc"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.pickerErrorMessage());
    \u0275\u0275advance();
    \u0275\u0275property("nzData", ctx_r1.pickerRows())("nzLoading", ctx_r1.pickerLoading())("nzPageSize", 10);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(38, 48, "empSearch.col.no", "STT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 51, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 54, "common.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(47, 57, "common.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 60, "epi.field.position", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", vecPickerTable_r15.data);
  }
}
var I18N_KEYS = [
  "esscal.nav.prevMonth",
  "esscal.nav.nextMonth",
  "esscal.legend.workDay",
  "esscal.legend.restDay",
  "esscal.legend.holiday",
  "esscal.legend.today",
  "esscal.msg.loading",
  "esscal.msg.noCalData",
  "esscal.msg.loadError",
  "esscal.status.holiday",
  "esscal.status.rest",
  "esscal.status.work",
  "esscal.status.weekend",
  "esscal.status.weekday",
  "esscal.status.holidayStar",
  "esscal.status.adminShift",
  "common.month.01",
  "common.month.02",
  "common.month.03",
  "common.month.04",
  "common.month.05",
  "common.month.06",
  "common.month.07",
  "common.month.08",
  "common.month.09",
  "common.month.10",
  "common.month.11",
  "common.month.12",
  "common.day.sun",
  "common.day.mon",
  "common.day.tue",
  "common.day.wed",
  "common.day.thu",
  "common.day.fri",
  "common.day.sat",
  "button.search",
  "common.date",
  "common.remark",
  "common.close",
  "common.save",
  "common.saveSuccess",
  "common.saveFail",
  "common.loadFail",
  "common.empId",
  "common.empName",
  "common.deptName",
  "common.selectAll",
  "addShift.shift",
  "addShift.dayType",
  "addShift.selectShift",
  "arSupervisor.field.emp",
  "arSupervisor.placeholder.selectEmp",
  "arSupervisor.btn.select",
  "empCal.searchTitle",
  "empCal.modalTitle",
  "empCal.viewMyCalendar",
  "empCal.msg.invalidData",
  "empSearch.title",
  "empSearch.field.keyword",
  "empSearch.placeholder.keyword",
  "empSearch.field.dept",
  "empSearch.field.empOffice",
  "empSearch.btn.clearFilter",
  "empSearch.col.no",
  "epi.field.position",
  "vdp.search.dept.placeholder",
  "mep.msg.loadDeptFailed"
];
var MONTH_KEYS = [
  "common.month.01",
  "common.month.02",
  "common.month.03",
  "common.month.04",
  "common.month.05",
  "common.month.06",
  "common.month.07",
  "common.month.08",
  "common.month.09",
  "common.month.10",
  "common.month.11",
  "common.month.12"
];
var YEAR_RANGE = 5;
var EMP_OFFICE_PARENT_CODE = "15118";
var DAY_TYPE_PARENT_CODE = "1439";
var ViewEmpCalendarComponent = class _ViewEmpCalendarComponent {
  constructor(api, empApi, auth, i18n, message) {
    this.api = api;
    this.empApi = empApi;
    this.auth = auth;
    this.i18n = i18n;
    this.message = message;
  }
  api;
  empApi;
  auth;
  i18n;
  message;
  monthKeys = MONTH_KEYS;
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
  shiftOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "shiftOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  dayTypeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "dayTypeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedMonth = (/* @__PURE__ */ new Date()).getMonth() + 1;
  selectedYear = (/* @__PURE__ */ new Date()).getFullYear();
  personId = "";
  empDisplay = "";
  defaultPersonId = "";
  defaultEmpDisplay = "";
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
  form = { arDateStr: "", personId: "", empDisplay: "", dateDisplay: "", shiftNo: null, typeid: null, remark: "" };
  // ==================== Popup tìm kiếm nhân viên (tái dùng pattern ChangeUserComponent) ====================
  deptNodes = signal(
    [],
    ...ngDevMode ? [{ debugName: "deptNodes" }] : (
      /* istanbul ignore next */
      []
    )
  );
  empOfficeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "empOfficeOptions" }] : (
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
  pickerVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "pickerVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pickerRows = signal(
    [],
    ...ngDevMode ? [{ debugName: "pickerRows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pickerLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "pickerLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pickerErrorMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "pickerErrorMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pickerKeyword = "";
  pickerDeptNos = [];
  pickerEmpOffice = null;
  deptChildrenMap = /* @__PURE__ */ new Map();
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    const user = this.auth.currentUser();
    this.defaultPersonId = user?.personId ?? "";
    this.defaultEmpDisplay = user?.employeeName ?? "";
    this.personId = this.defaultPersonId;
    this.empDisplay = this.defaultEmpDisplay;
    this.api.getShiftList().subscribe((list) => this.shiftOptions.set(list ?? []));
    this.empApi.getCodeList(DAY_TYPE_PARENT_CODE).subscribe((list) => this.dayTypeOptions.set(list ?? []));
    this.empApi.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(this.buildPickerDeptTree(list ?? [])),
      error: () => this.deptTreeErrorMessage.set(this.i18n.t("mep.msg.loadDeptFailed", "L\u1ED7i khi t\u1EA3i danh s\xE1ch ph\xF2ng ban"))
    });
    this.empApi.getCodeList(EMP_OFFICE_PARENT_CODE).subscribe((list) => this.empOfficeOptions.set(list ?? []));
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
  viewMyCalendar() {
    this.personId = this.defaultPersonId;
    this.empDisplay = this.defaultEmpDisplay;
    this.loadMonth();
  }
  statusKey(cell) {
    if (cell.isHoliday)
      return "esscal.status.holiday";
    if (cell.isRest)
      return "esscal.status.rest";
    return "esscal.status.work";
  }
  shiftLabel(cell) {
    const rec = cell.record;
    return rec?.shiftName || rec?.shiftNo || this.i18n.t("esscal.status.adminShift", "Ca h\xE0nh ch\xEDnh");
  }
  loadMonth() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.emptyMessage.set(null);
    this.api.getEmpCalendarMonth(this.selectedYear, this.selectedMonth, this.personId).subscribe({
      next: (records) => {
        this.weeks.set(this.buildWeeks(records ?? []));
        if (!records || records.length === 0) {
          this.emptyMessage.set(this.i18n.t("esscal.msg.noCalData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u l\u1ECBch trong th\xE1ng n\xE0y."));
        }
        this.loading.set(false);
      },
      error: () => {
        this.weeks.set([]);
        this.errorMessage.set(this.i18n.t("esscal.msg.loadError", "L\u1ED7i t\u1EA3i l\u1ECBch!"));
        this.loading.set(false);
      }
    });
  }
  buildWeeks(records) {
    if (!records.length)
      return [];
    const today = /* @__PURE__ */ new Date();
    const todayKey = `${today.getFullYear()}/${String(today.getMonth() + 1).padStart(2, "0")}/${String(today.getDate()).padStart(2, "0")}`;
    const firstKey = (records[0].ddateStr || records[0].ddateFormatted || "").replace(/-/g, "/");
    const [fy, fm, fd] = firstKey.split("/").map(Number);
    const firstDow = new Date(fy, fm - 1, fd).getDay();
    const cells = [];
    for (let i = 0; i < firstDow; i++) {
      cells.push({ record: null, dateKey: "", day: 0, isEmpty: true, isToday: false, isSunday: false, isSaturday: false, isWeekend: false, isRest: false, isHoliday: false });
    }
    records.forEach((rec, idx) => {
      const key = (rec.ddateStr || rec.ddateFormatted || "").replace(/-/g, "/");
      const parts = key.split("/");
      const day = parseInt(parts[2], 10);
      const dow = (firstDow + idx) % 7;
      const isSunday = dow === 0;
      const isSaturday = dow === 6;
      cells.push({
        record: rec,
        dateKey: key,
        day,
        isEmpty: false,
        isToday: key === todayKey,
        isSunday,
        isSaturday,
        isWeekend: isSunday || isSaturday,
        isRest: rec.workdayflag === 0,
        isHoliday: rec.statutoryFlag === 1
      });
    });
    while (cells.length % 7 !== 0) {
      cells.push({ record: null, dateKey: "", day: 0, isEmpty: true, isToday: false, isSunday: false, isSaturday: false, isWeekend: false, isRest: false, isHoliday: false });
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
  // ==================== Modal Cập nhật ngày ====================
  dayClick(cell) {
    if (cell.isEmpty)
      return;
    const [y, m, d] = cell.dateKey.split("/");
    this.form = {
      arDateStr: cell.dateKey,
      personId: this.personId,
      empDisplay: this.empDisplay || this.i18n.t("empCal.viewMyCalendar", "Xem l\u1ECBch c\u1EE7a b\u1EA3n th\xE2n"),
      dateDisplay: `${d}/${m}/${y}`,
      shiftNo: null,
      typeid: null,
      remark: ""
    };
    this.api.getEmpScheduleDetail(cell.dateKey, this.personId).subscribe({
      next: (d2) => {
        if (d2) {
          this.form.shiftNo = d2.shiftNo || null;
          this.form.typeid = d2.typeid || null;
          this.form.remark = d2.remark || "";
        }
        this.modalVisible.set(true);
      },
      error: () => this.modalVisible.set(true)
    });
  }
  closeModal() {
    this.modalVisible.set(false);
  }
  get modalTitle() {
    const prefix = this.i18n.t("empCal.modalTitle", "C\xE0i \u0111\u1EB7t l\u1ECBch");
    return `${prefix} \u2014 ${this.form.dateDisplay} / ${this.form.empDisplay}`;
  }
  saveForm() {
    if (!this.form.arDateStr || !this.form.personId) {
      this.message.warning(this.i18n.t("empCal.msg.invalidData", "D\u1EEF li\u1EC7u kh\xF4ng h\u1EE3p l\u1EC7!"));
      return;
    }
    const payload = {
      arDateStr: this.form.arDateStr,
      personId: this.form.personId,
      shiftNo: this.form.shiftNo,
      typeid: this.form.typeid,
      remark: this.form.remark
    };
    this.saving.set(true);
    this.api.saveEmpCalendarDay(payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        if (!res.success) {
          this.message.error(res.error || this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!"));
          return;
        }
        this.modalVisible.set(false);
        this.message.success(res.message || this.i18n.t("common.saveSuccess", "L\u01B0u th\xE0nh c\xF4ng!"));
        this.loadMonth();
      },
      error: (err) => {
        this.saving.set(false);
        this.message.error(err?.error?.error || this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  // ==================== Popup tìm kiếm nhân viên ====================
  openPicker() {
    this.pickerKeyword = "";
    this.pickerDeptNos = [];
    this.pickerEmpOffice = null;
    this.pickerVisible.set(true);
    this.pickerSearch();
  }
  closePicker() {
    this.pickerVisible.set(false);
  }
  pickerSearch() {
    this.pickerLoading.set(true);
    this.pickerErrorMessage.set(null);
    this.empApi.searchEmployees({
      keyword: this.pickerKeyword.trim(),
      deptCodes: this.expandDeptSelection(this.pickerDeptNos),
      empOffice: this.pickerEmpOffice ?? ""
    }).subscribe({
      next: (rows) => {
        this.pickerRows.set(rows ?? []);
        this.pickerLoading.set(false);
      },
      error: () => {
        this.pickerErrorMessage.set(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.pickerRows.set([]);
        this.pickerLoading.set(false);
      }
    });
  }
  pickerClear() {
    this.pickerKeyword = "";
    this.pickerDeptNos = [];
    this.pickerEmpOffice = null;
    this.pickerSearch();
  }
  selectEmployee(row) {
    this.personId = row.personId;
    this.empDisplay = `${row.empId} - ${row.localName}`;
    this.pickerVisible.set(false);
    this.loadMonth();
  }
  buildPickerDeptTree(list) {
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
  static \u0275fac = function ViewEmpCalendarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewEmpCalendarComponent)(\u0275\u0275directiveInject(ViewEmpCalendarService), \u0275\u0275directiveInject(ChangeUserService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewEmpCalendarComponent, selectors: [["app-view-emp-calendar"]], decls: 81, vars: 94, consts: [["vecPickerTable", ""], [1, "vec-wrap"], [1, "vec-toolbar"], [1, "vec-nav"], ["nz-button", "", "nzType", "default", "nzShape", "circle", 3, "click"], [1, "bx", "bx-chevron-left"], ["name", "vecMonthSel", 1, "vec-combo", 3, "ngModelChange", "ngModel"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["name", "vecYearSel", 1, "vec-combo", "vec-year", 3, "ngModelChange", "ngModel"], [1, "bx", "bx-chevron-right"], [1, "vec-emp-picker"], ["nz-input", "", "name", "vecEmpDisplay", "readonly", "", 1, "vec-emp-input", 3, "ngModel", "placeholder"], ["nz-button", "", "nzType", "default", 3, "click"], [1, "bx", "bx-search"], [1, "bx", "bx-user"], [1, "vec-actions"], [1, "bx", "bx-refresh"], ["nzType", "error", "class", "mb-2", 3, "nzMessage", 4, "ngIf"], [1, "vec-grid-wrap"], [1, "vec-hrow"], [1, "vec-hcell", "vec-col-sun"], [1, "bx", "bxs-sun"], [1, "vec-hcell"], [1, "vec-hcell", "vec-col-sat"], [1, "bx", "bxs-star"], ["class", "vec-status-msg", 4, "ngIf"], [4, "ngIf"], [1, "vec-legend"], [1, "vec-legend-item"], [1, "vec-legend-dot", "vec-lg-work"], [1, "vec-legend-dot", "vec-lg-rest"], [1, "vec-legend-dot", "vec-lg-holiday"], [1, "vec-legend-dot", "vec-lg-today"], ["nzWidth", "600px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], ["nzWidth", "900px", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzFooter"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-2", 3, "nzMessage"], [1, "vec-status-msg"], ["class", "vec-week", 4, "ngFor", "ngForOf"], [1, "vec-week"], ["class", "vec-day", 3, "is-empty", "is-today", "is-holiday", "is-rest", "is-work", "vec-clickable", "click", 4, "ngFor", "ngForOf"], [1, "vec-day", 3, "click"], [1, "vec-day-top"], [1, "vec-day-num"], [1, "vec-status"], [1, "vec-tags"], [1, "vec-tag"], ["class", "vec-tag t-hol", 4, "ngIf"], [1, "vec-tag", "t-sh"], ["class", "vec-tag t-custom", 4, "ngIf"], ["class", "vec-remark", 4, "ngIf"], [1, "vec-tag", "t-hol"], [1, "vec-tag", "t-custom"], [1, "vec-remark"], [1, "row", "g-2"], [1, "col-md-6"], [1, "form-label", "form-label-sm"], ["nz-input", "", "name", "vecEditEmpDisplay", "readonly", "", 3, "ngModel"], ["nz-input", "", "name", "vecEditDateDisplay", "readonly", "", 3, "ngModel"], ["name", "vecShiftNo", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["name", "vecTypeid", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [1, "col-md-12"], ["nz-input", "", "name", "vecRemark", 3, "ngModelChange", "ngModel"], [1, "row", "g-2", "align-items-end", "mb-3", 3, "ngSubmit"], [1, "col-md-5"], [1, "form-label"], ["nz-input", "", "name", "vecPickerKeyword", 3, "ngModelChange", "keydown.enter", "ngModel", "placeholder"], [1, "col-md-4"], ["name", "vecPickerDeptNos", "nzCheckable", "", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["class", "text-danger small mt-1", 4, "ngIf"], [1, "col-md-3"], ["name", "vecPickerEmpOffice", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [1, "col-12", "d-flex", "gap-2"], ["nz-button", "", "nzType", "primary", "type", "submit"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], ["nzSize", "small", 3, "nzData", "nzLoading", "nzPageSize"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "110px"], ["class", "vec-row-clickable", 3, "click", 4, "ngFor", "ngForOf"], [1, "text-danger", "small", "mt-1"], [1, "vec-row-clickable", 3, "click"], [1, "text-center"]], template: function ViewEmpCalendarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "button", 4);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275listener("click", function ViewEmpCalendarComponent_Template_button_click_3_listener() {
        return ctx.prevMonth();
      });
      \u0275\u0275element(5, "i", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "nz-select", 6);
      \u0275\u0275twoWayListener("ngModelChange", function ViewEmpCalendarComponent_Template_nz_select_ngModelChange_6_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedMonth, $event) || (ctx.selectedMonth = $event);
        return $event;
      });
      \u0275\u0275template(7, ViewEmpCalendarComponent_nz_option_7_Template, 2, 4, "nz-option", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(8, "nz-select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function ViewEmpCalendarComponent_Template_nz_select_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedYear, $event) || (ctx.selectedYear = $event);
        return $event;
      });
      \u0275\u0275template(9, ViewEmpCalendarComponent_nz_option_9_Template, 1, 2, "nz-option", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(10, "button", 4);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275listener("click", function ViewEmpCalendarComponent_Template_button_click_10_listener() {
        return ctx.nextMonth();
      });
      \u0275\u0275element(12, "i", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 10);
      \u0275\u0275element(14, "input", 11);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(16, "button", 12);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275listener("click", function ViewEmpCalendarComponent_Template_button_click_16_listener() {
        return ctx.openPicker();
      });
      \u0275\u0275element(18, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 12);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275listener("click", function ViewEmpCalendarComponent_Template_button_click_19_listener() {
        return ctx.viewMyCalendar();
      });
      \u0275\u0275element(21, "i", 14);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 15)(23, "button", 12);
      \u0275\u0275listener("click", function ViewEmpCalendarComponent_Template_button_click_23_listener() {
        return ctx.search();
      });
      \u0275\u0275element(24, "i", 16);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(27, ViewEmpCalendarComponent_nz_alert_27_Template, 1, 1, "nz-alert", 17);
      \u0275\u0275elementStart(28, "div", 18)(29, "div", 19)(30, "div", 20);
      \u0275\u0275element(31, "i", 21);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 22);
      \u0275\u0275text(35);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 22);
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 22);
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 22);
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 22);
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 23);
      \u0275\u0275element(50, "i", 24);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div");
      \u0275\u0275template(54, ViewEmpCalendarComponent_div_54_Template, 3, 4, "div", 25)(55, ViewEmpCalendarComponent_div_55_Template, 2, 1, "div", 25)(56, ViewEmpCalendarComponent_ng_container_56_Template, 2, 1, "ng-container", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "div", 27)(58, "span", 28);
      \u0275\u0275element(59, "span", 29);
      \u0275\u0275text(60);
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "span", 28);
      \u0275\u0275element(63, "span", 30);
      \u0275\u0275text(64);
      \u0275\u0275pipe(65, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "span", 28);
      \u0275\u0275element(67, "span", 31);
      \u0275\u0275text(68);
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "span", 28);
      \u0275\u0275element(71, "span", 32);
      \u0275\u0275text(72);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(74, "nz-modal", 33);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275pipe(76, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewEmpCalendarComponent_Template_nz_modal_nzOnCancel_74_listener() {
        return ctx.closeModal();
      })("nzOnOk", function ViewEmpCalendarComponent_Template_nz_modal_nzOnOk_74_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(77, ViewEmpCalendarComponent_ng_container_77_Template, 31, 35, "ng-container", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "nz-modal", 35);
      \u0275\u0275pipe(79, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewEmpCalendarComponent_Template_nz_modal_nzOnCancel_78_listener() {
        return ctx.closePicker();
      });
      \u0275\u0275template(80, ViewEmpCalendarComponent_ng_container_80_Template, 53, 63, "ng-container", 34);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275attribute("title", \u0275\u0275pipeBind2(4, 34, "esscal.nav.prevMonth", "Th\xE1ng tr\u01B0\u1EDBc"));
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
      \u0275\u0275attribute("title", \u0275\u0275pipeBind2(11, 37, "esscal.nav.nextMonth", "Th\xE1ng sau"));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngModel", ctx.empDisplay)("placeholder", \u0275\u0275pipeBind2(15, 40, "arSupervisor.placeholder.selectEmp", "Ch\u1ECDn nh\xE2n vi\xEAn..."));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275attribute("title", \u0275\u0275pipeBind2(17, 43, "empCal.searchTitle", "T\xECm ki\u1EBFm nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275attribute("title", \u0275\u0275pipeBind2(20, 46, "empCal.viewMyCalendar", "Xem l\u1ECBch c\u1EE7a b\u1EA3n th\xE2n"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 49, "button.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(33, 52, "common.day.sun", "CN"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 55, "common.day.mon", "T2"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 58, "common.day.tue", "T3"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 61, "common.day.wed", "T4"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 64, "common.day.thu", "T5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 67, "common.day.fri", "T6"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(52, 70, "common.day.sat", "T7"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.emptyMessage());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(61, 73, "esscal.legend.workDay", "Ng\xE0y l\xE0m vi\u1EC7c"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(65, 76, "esscal.legend.restDay", "Ng\xE0y ngh\u1EC9"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(69, 79, "esscal.legend.holiday", "Ng\xE0y l\u1EC5"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(73, 82, "esscal.legend.today", "H\xF4m nay"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", ctx.modalTitle)("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(75, 85, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(76, 88, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(4);
      \u0275\u0275property("nzVisible", ctx.pickerVisible())("nzTitle", \u0275\u0275pipeBind2(79, 91, "empSearch.title", "T\xECm ki\u1EBFm nh\xE2n vi\xEAn"))("nzFooter", null);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzInputModule, NzInputDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, NzTreeSelectModule, NzTreeSelectComponent, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, TranslatePipe], styles: ["\n@keyframes _ngcontent-%COMP%_vec-pulse {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(59, 130, 246, .4);\n  }\n  50% {\n    box-shadow: 0 0 0 6px rgba(59, 130, 246, 0);\n  }\n}\n@keyframes _ngcontent-%COMP%_vec-slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.vec-wrap[_ngcontent-%COMP%] {\n  display: block;\n}\n.vec-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #e2e8f0 100%);\n  border: 1px solid #cbd5e1;\n  border-radius: 8px 8px 0 0;\n  padding: 8px 14px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, .06);\n}\n.vec-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n  margin: 0 auto;\n}\n.vec-combo[_ngcontent-%COMP%] {\n  width: 130px;\n}\n.vec-combo.vec-year[_ngcontent-%COMP%] {\n  width: 90px;\n}\n.vec-emp-picker[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.vec-emp-input[_ngcontent-%COMP%] {\n  width: 220px;\n}\n.vec-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.vec-grid-wrap[_ngcontent-%COMP%] {\n  border: 1px solid #cbd5e1;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  overflow: hidden;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, .06);\n}\n.vec-hrow[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #334155 100%);\n}\n.vec-hcell[_ngcontent-%COMP%] {\n  padding: 8px;\n  text-align: center;\n  font-weight: 700;\n  font-size: .82rem;\n  color: #e2e8f0;\n  letter-spacing: .5px;\n  border-right: 1px solid rgba(255, 255, 255, .08);\n}\n.vec-hcell[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.vec-col-sun[_ngcontent-%COMP%] {\n  color: #fca5a5 !important;\n}\n.vec-col-sat[_ngcontent-%COMP%] {\n  color: #86efac !important;\n}\n.vec-status-msg[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  color: #64748b;\n}\n.vec-week[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  border-bottom: 1px solid #e2e8f0;\n  animation: _ngcontent-%COMP%_vec-slideDown .3s ease-out both;\n}\n.vec-week[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.vec-day[_ngcontent-%COMP%] {\n  min-height: 90px;\n  padding: 6px 8px;\n  border-right: 1px solid #e2e8f0;\n  background: #fff;\n  overflow: hidden;\n  transition: all .2s ease;\n  position: relative;\n}\n.vec-day[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.vec-day.is-empty[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  min-height: 0;\n}\n.vec-day.is-today[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff 0%,\n      #dbeafe 100%);\n  animation: _ngcontent-%COMP%_vec-pulse 2.5s infinite;\n}\n.vec-day.is-rest[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #fef2f2 100%);\n}\n.vec-day.is-work[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #f0fdf4 100%);\n}\n.vec-day.is-holiday[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #fefce8 100%);\n}\n.vec-day.vec-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.vec-day.vec-clickable[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n  z-index: 2;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, .1);\n  border-radius: 4px;\n}\n.vec-day-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 4px;\n}\n.vec-day-num[_ngcontent-%COMP%] {\n  font-size: .95rem;\n  font-weight: 800;\n  color: #1e293b;\n  white-space: nowrap;\n  line-height: 1.2;\n}\n.vec-day-num.is-sun[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.vec-day-num.is-sat[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.vec-status[_ngcontent-%COMP%] {\n  font-size: .62rem;\n  padding: 2px 7px;\n  border-radius: 10px;\n  font-weight: 700;\n  white-space: nowrap;\n  line-height: 1.3;\n  letter-spacing: .3px;\n  text-transform: uppercase;\n}\n.vec-status.s-holiday[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fde68a,\n      #fbbf24);\n  color: #78350f;\n}\n.vec-status.s-rest[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fecaca,\n      #fca5a5);\n  color: #7f1d1d;\n}\n.vec-status.s-work[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #bbf7d0,\n      #86efac);\n  color: #166534;\n}\n.vec-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 3px;\n  margin-top: 4px;\n}\n.vec-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: .58rem;\n  padding: 1px 6px;\n  border-radius: 8px;\n  line-height: 1.6;\n  white-space: nowrap;\n  font-weight: 600;\n}\n.vec-tag.t-we[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #991b1b;\n}\n.vec-tag.t-wd[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e3a8a;\n}\n.vec-tag.t-hol[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7,\n      #fde68a);\n  color: #92400e;\n  border: 1px solid #fbbf24;\n}\n.vec-tag.t-sh[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.vec-tag.t-custom[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.vec-remark[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  font-size: .58rem;\n  color: #94a3b8;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-style: italic;\n}\n.vec-legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 8px 14px;\n  background: #f8fafc;\n  border: 1px solid #cbd5e1;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  margin-top: -1px;\n  flex-wrap: wrap;\n}\n.vec-legend-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: .72rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.vec-legend-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  border: 1px solid rgba(0, 0, 0, .1);\n}\n.vec-lg-work[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #86efac,\n      #4ade80);\n}\n.vec-lg-rest[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fca5a5,\n      #f87171);\n}\n.vec-lg-holiday[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fde68a,\n      #fbbf24);\n}\n.vec-lg-today[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #93c5fd,\n      #3b82f6);\n}\n.vec-row-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=view-emp-calendar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewEmpCalendarComponent, [{
    type: Component,
    args: [{ selector: "app-view-emp-calendar", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzButtonModule,
      NzSelectModule,
      NzInputModule,
      NzModalModule,
      NzAlertModule,
      NzTreeSelectModule,
      NzTableModule,
      TranslatePipe
    ], template: `<div class="vec-wrap">
  <!-- ===== Toolbar ===== -->
  <div class="vec-toolbar">
    <div class="vec-nav">
      <button nz-button nzType="default" nzShape="circle" [attr.title]="'esscal.nav.prevMonth' | translate:'Th\xE1ng tr\u01B0\u1EDBc'" (click)="prevMonth()">
        <i class="bx bx-chevron-left"></i>
      </button>
      <nz-select class="vec-combo" [(ngModel)]="selectedMonth" name="vecMonthSel">
        <nz-option *ngFor="let m of monthOptions" [nzValue]="m" [nzLabel]="monthKeys[m - 1] | translate"></nz-option>
      </nz-select>
      <nz-select class="vec-combo vec-year" [(ngModel)]="selectedYear" name="vecYearSel">
        <nz-option *ngFor="let y of yearOptions" [nzValue]="y" [nzLabel]="y"></nz-option>
      </nz-select>
      <button nz-button nzType="default" nzShape="circle" [attr.title]="'esscal.nav.nextMonth' | translate:'Th\xE1ng sau'" (click)="nextMonth()">
        <i class="bx bx-chevron-right"></i>
      </button>

      <div class="vec-emp-picker">
        <input nz-input class="vec-emp-input" [ngModel]="empDisplay" name="vecEmpDisplay" readonly
               [placeholder]="'arSupervisor.placeholder.selectEmp' | translate:'Ch\u1ECDn nh\xE2n vi\xEAn...'">
        <button nz-button nzType="default" [attr.title]="'empCal.searchTitle' | translate:'T\xECm ki\u1EBFm nh\xE2n vi\xEAn'" (click)="openPicker()">
          <i class="bx bx-search"></i>
        </button>
        <button nz-button nzType="default" [attr.title]="'empCal.viewMyCalendar' | translate:'Xem l\u1ECBch c\u1EE7a b\u1EA3n th\xE2n'" (click)="viewMyCalendar()">
          <i class="bx bx-user"></i>
        </button>
      </div>
    </div>

    <div class="vec-actions">
      <button nz-button nzType="default" (click)="search()">
        <i class="bx bx-refresh"></i> {{ 'button.search' | translate:'Tra c\u1EE9u' }}
      </button>
    </div>
  </div>

  <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-2"></nz-alert>

  <!-- ===== Calendar grid ===== -->
  <div class="vec-grid-wrap">
    <div class="vec-hrow">
      <div class="vec-hcell vec-col-sun"><i class="bx bxs-sun"></i> {{ 'common.day.sun' | translate:'CN' }}</div>
      <div class="vec-hcell">{{ 'common.day.mon' | translate:'T2' }}</div>
      <div class="vec-hcell">{{ 'common.day.tue' | translate:'T3' }}</div>
      <div class="vec-hcell">{{ 'common.day.wed' | translate:'T4' }}</div>
      <div class="vec-hcell">{{ 'common.day.thu' | translate:'T5' }}</div>
      <div class="vec-hcell">{{ 'common.day.fri' | translate:'T6' }}</div>
      <div class="vec-hcell vec-col-sat"><i class="bx bxs-star"></i> {{ 'common.day.sat' | translate:'T7' }}</div>
    </div>

    <div>
      <div *ngIf="loading()" class="vec-status-msg">{{ 'esscal.msg.loading' | translate:'\u0110ang t\u1EA3i...' }}</div>
      <div *ngIf="!loading() && emptyMessage()" class="vec-status-msg">{{ emptyMessage() }}</div>

      <ng-container *ngIf="!loading()">
        <div class="vec-week" *ngFor="let week of weeks()">
          <div *ngFor="let cell of week"
               class="vec-day"
               [class.is-empty]="cell.isEmpty"
               [class.is-today]="cell.isToday"
               [class.is-holiday]="!cell.isEmpty && cell.isHoliday"
               [class.is-rest]="!cell.isEmpty && !cell.isHoliday && cell.isRest"
               [class.is-work]="!cell.isEmpty && !cell.isHoliday && !cell.isRest"
               [class.vec-clickable]="!cell.isEmpty"
               (click)="dayClick(cell)">
            <ng-container *ngIf="!cell.isEmpty">
              <div class="vec-day-top">
                <span class="vec-day-num" [class.is-sun]="cell.isSunday" [class.is-sat]="cell.isSaturday">{{ cell.day }}</span>
                <span class="vec-status" [class.s-holiday]="cell.isHoliday" [class.s-rest]="!cell.isHoliday && cell.isRest" [class.s-work]="!cell.isHoliday && !cell.isRest">
                  {{ statusKey(cell) | translate }}
                </span>
              </div>
              <div class="vec-tags">
                <span class="vec-tag" [class.t-we]="cell.isWeekend" [class.t-wd]="!cell.isWeekend">
                  {{ (cell.isWeekend ? 'esscal.status.weekend' : 'esscal.status.weekday') | translate }}
                </span>
                <span class="vec-tag t-hol" *ngIf="cell.isHoliday">{{ 'esscal.status.holidayStar' | translate:'\u2605 L\u1EC5' }}</span>
                <span class="vec-tag t-sh">{{ shiftLabel(cell) }}</span>
                <span class="vec-tag t-custom" *ngIf="cell.record?.typeidName">{{ cell.record?.typeidName }}</span>
              </div>
              <div class="vec-remark" *ngIf="cell.record?.remark" [attr.title]="cell.record?.remark">\u2014 {{ cell.record?.remark }}</div>
            </ng-container>
          </div>
        </div>
      </ng-container>
    </div>
  </div>

  <!-- ===== Legend ===== -->
  <div class="vec-legend">
    <span class="vec-legend-item"><span class="vec-legend-dot vec-lg-work"></span> {{ 'esscal.legend.workDay' | translate:'Ng\xE0y l\xE0m vi\u1EC7c' }}</span>
    <span class="vec-legend-item"><span class="vec-legend-dot vec-lg-rest"></span> {{ 'esscal.legend.restDay' | translate:'Ng\xE0y ngh\u1EC9' }}</span>
    <span class="vec-legend-item"><span class="vec-legend-dot vec-lg-holiday"></span> {{ 'esscal.legend.holiday' | translate:'Ng\xE0y l\u1EC5' }}</span>
    <span class="vec-legend-item"><span class="vec-legend-dot vec-lg-today"></span> {{ 'esscal.legend.today' | translate:'H\xF4m nay' }}</span>
  </div>
</div>

<!-- ===== Modal C\u1EADp nh\u1EADt l\u1ECBch c\xE1 nh\xE2n ===== -->
<nz-modal [nzVisible]="modalVisible()" [nzTitle]="modalTitle" nzWidth="600px"
          (nzOnCancel)="closeModal()" (nzOnOk)="saveForm()" [nzOkLoading]="saving()"
          [nzOkText]="'common.save' | translate:'L\u01B0u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <div class="row g-2">
      <div class="col-md-6">
        <label class="form-label form-label-sm">{{ 'arSupervisor.field.emp' | translate:'Nh\xE2n vi\xEAn' }}</label>
        <input nz-input [ngModel]="form.empDisplay" name="vecEditEmpDisplay" readonly>
      </div>
      <div class="col-md-6">
        <label class="form-label form-label-sm">{{ 'common.date' | translate:'Ng\xE0y' }}</label>
        <input nz-input [ngModel]="form.dateDisplay" name="vecEditDateDisplay" readonly>
      </div>
      <div class="col-md-6">
        <label class="form-label form-label-sm">{{ 'addShift.shift' | translate:'Ca l\xE0m vi\u1EC7c' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.shiftNo" name="vecShiftNo" nzAllowClear
                   [nzPlaceHolder]="'addShift.selectShift' | translate:'-- Ch\u1ECDn ca l\xE0m vi\u1EC7c --'">
          <nz-option *ngFor="let s of shiftOptions()" [nzValue]="s.shiftNo" [nzLabel]="s.nameVi || s.shiftNo"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-6">
        <label class="form-label form-label-sm">{{ 'addShift.dayType' | translate:'Lo\u1EA1i ng\xE0y' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.typeid" name="vecTypeid" nzAllowClear
                   [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
          <nz-option *ngFor="let c of dayTypeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-12">
        <label class="form-label form-label-sm">{{ 'common.remark' | translate:'Ghi ch\xFA' }}</label>
        <input nz-input [(ngModel)]="form.remark" name="vecRemark">
      </div>
    </div>
  </ng-container>
</nz-modal>

<!-- Popup t\xECm ki\u1EBFm nh\xE2n vi\xEAn - t\xE1i d\xF9ng pattern ChangeUserComponent (thay fragment employeeSearchModal.html) -->
<nz-modal [nzVisible]="pickerVisible()" [nzTitle]="'empSearch.title' | translate:'T\xECm ki\u1EBFm nh\xE2n vi\xEAn'"
          nzWidth="900px" (nzOnCancel)="closePicker()" [nzFooter]="null">
  <ng-container *nzModalContent>
    <form class="row g-2 align-items-end mb-3" (ngSubmit)="pickerSearch()">
      <div class="col-md-5">
        <label class="form-label">{{ 'empSearch.field.keyword' | translate:'M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn' }}</label>
        <input nz-input [(ngModel)]="pickerKeyword" name="vecPickerKeyword"
               [placeholder]="'empSearch.placeholder.keyword' | translate:'Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn'"
               (keydown.enter)="$event.preventDefault(); pickerSearch()">
      </div>
      <div class="col-md-4">
        <label class="form-label">{{ 'empSearch.field.dept' | translate:'Ph\xF2ng ban' }}</label>
        <nz-tree-select class="w-100" [nzNodes]="deptNodes()" [(ngModel)]="pickerDeptNos" name="vecPickerDeptNos"
                         nzCheckable nzShowSearch nzAllowClear
                         [nzPlaceHolder]="'vdp.search.dept.placeholder' | translate:'Ch\u1ECDn ph\xF2ng ban'"></nz-tree-select>
        <div *ngIf="deptTreeErrorMessage()" class="text-danger small mt-1">{{ deptTreeErrorMessage() }}</div>
      </div>
      <div class="col-md-3">
        <label class="form-label">{{ 'empSearch.field.empOffice' | translate:'Tr\u1EA1ng th\xE1i l\xE0m vi\u1EC7c' }}</label>
        <nz-select class="w-100" [(ngModel)]="pickerEmpOffice" name="vecPickerEmpOffice" nzAllowClear
                   [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
          <nz-option *ngFor="let c of empOfficeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
        </nz-select>
      </div>
      <div class="col-12 d-flex gap-2">
        <button nz-button nzType="primary" type="submit">
          <i class="bx bx-search"></i> {{ 'button.search' | translate:'Tra c\u1EE9u' }}
        </button>
        <button nz-button type="button" (click)="pickerClear()">
          <i class="bx bx-x"></i> {{ 'empSearch.btn.clearFilter' | translate:'X\xF3a b\u1ED9 l\u1ECDc' }}
        </button>
      </div>
    </form>

    <nz-alert *ngIf="pickerErrorMessage()" nzType="error" [nzMessage]="pickerErrorMessage() ?? ''" class="mb-2"></nz-alert>

    <nz-table [nzData]="pickerRows()" [nzLoading]="pickerLoading()" [nzPageSize]="10" nzSize="small" #vecPickerTable>
      <thead>
        <tr>
          <th class="text-center" nzWidth="60px">{{ 'empSearch.col.no' | translate:'STT' }}</th>
          <th nzWidth="110px">{{ 'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
          <th>{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
          <th>{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
          <th>{{ 'epi.field.position' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of vecPickerTable.data; let i = index" class="vec-row-clickable" (click)="selectEmployee(row)">
          <td class="text-center">{{ i + 1 }}</td>
          <td>{{ row.empId }}</td>
          <td>{{ row.localName }}</td>
          <td>{{ row.deptName || row.deptNo }}</td>
          <td>{{ row.position }}</td>
        </tr>
      </tbody>
    </nz-table>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-emp-calendar/view-emp-calendar.component.css */\n@keyframes vec-pulse {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(59, 130, 246, .4);\n  }\n  50% {\n    box-shadow: 0 0 0 6px rgba(59, 130, 246, 0);\n  }\n}\n@keyframes vec-slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.vec-wrap {\n  display: block;\n}\n.vec-toolbar {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #e2e8f0 100%);\n  border: 1px solid #cbd5e1;\n  border-radius: 8px 8px 0 0;\n  padding: 8px 14px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, .06);\n}\n.vec-nav {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n  margin: 0 auto;\n}\n.vec-combo {\n  width: 130px;\n}\n.vec-combo.vec-year {\n  width: 90px;\n}\n.vec-emp-picker {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.vec-emp-input {\n  width: 220px;\n}\n.vec-actions {\n  display: flex;\n  gap: 6px;\n}\n.vec-grid-wrap {\n  border: 1px solid #cbd5e1;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  overflow: hidden;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, .06);\n}\n.vec-hrow {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #334155 100%);\n}\n.vec-hcell {\n  padding: 8px;\n  text-align: center;\n  font-weight: 700;\n  font-size: .82rem;\n  color: #e2e8f0;\n  letter-spacing: .5px;\n  border-right: 1px solid rgba(255, 255, 255, .08);\n}\n.vec-hcell:last-child {\n  border-right: none;\n}\n.vec-col-sun {\n  color: #fca5a5 !important;\n}\n.vec-col-sat {\n  color: #86efac !important;\n}\n.vec-status-msg {\n  padding: 20px;\n  text-align: center;\n  color: #64748b;\n}\n.vec-week {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  border-bottom: 1px solid #e2e8f0;\n  animation: vec-slideDown .3s ease-out both;\n}\n.vec-week:last-child {\n  border-bottom: none;\n}\n.vec-day {\n  min-height: 90px;\n  padding: 6px 8px;\n  border-right: 1px solid #e2e8f0;\n  background: #fff;\n  overflow: hidden;\n  transition: all .2s ease;\n  position: relative;\n}\n.vec-day:last-child {\n  border-right: none;\n}\n.vec-day.is-empty {\n  background: #f8fafc;\n  min-height: 0;\n}\n.vec-day.is-today {\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff 0%,\n      #dbeafe 100%);\n  animation: vec-pulse 2.5s infinite;\n}\n.vec-day.is-rest {\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #fef2f2 100%);\n}\n.vec-day.is-work {\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #f0fdf4 100%);\n}\n.vec-day.is-holiday {\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #fefce8 100%);\n}\n.vec-day.vec-clickable {\n  cursor: pointer;\n}\n.vec-day.vec-clickable:hover {\n  transform: scale(1.02);\n  z-index: 2;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, .1);\n  border-radius: 4px;\n}\n.vec-day-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 4px;\n}\n.vec-day-num {\n  font-size: .95rem;\n  font-weight: 800;\n  color: #1e293b;\n  white-space: nowrap;\n  line-height: 1.2;\n}\n.vec-day-num.is-sun {\n  color: #dc2626;\n}\n.vec-day-num.is-sat {\n  color: #16a34a;\n}\n.vec-status {\n  font-size: .62rem;\n  padding: 2px 7px;\n  border-radius: 10px;\n  font-weight: 700;\n  white-space: nowrap;\n  line-height: 1.3;\n  letter-spacing: .3px;\n  text-transform: uppercase;\n}\n.vec-status.s-holiday {\n  background:\n    linear-gradient(\n      135deg,\n      #fde68a,\n      #fbbf24);\n  color: #78350f;\n}\n.vec-status.s-rest {\n  background:\n    linear-gradient(\n      135deg,\n      #fecaca,\n      #fca5a5);\n  color: #7f1d1d;\n}\n.vec-status.s-work {\n  background:\n    linear-gradient(\n      135deg,\n      #bbf7d0,\n      #86efac);\n  color: #166534;\n}\n.vec-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 3px;\n  margin-top: 4px;\n}\n.vec-tag {\n  display: inline-flex;\n  align-items: center;\n  font-size: .58rem;\n  padding: 1px 6px;\n  border-radius: 8px;\n  line-height: 1.6;\n  white-space: nowrap;\n  font-weight: 600;\n}\n.vec-tag.t-we {\n  background: #fde8e8;\n  color: #991b1b;\n}\n.vec-tag.t-wd {\n  background: #dbeafe;\n  color: #1e3a8a;\n}\n.vec-tag.t-hol {\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7,\n      #fde68a);\n  color: #92400e;\n  border: 1px solid #fbbf24;\n}\n.vec-tag.t-sh {\n  background: #d1fae5;\n  color: #065f46;\n}\n.vec-tag.t-custom {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.vec-remark {\n  margin-top: 3px;\n  font-size: .58rem;\n  color: #94a3b8;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-style: italic;\n}\n.vec-legend {\n  display: flex;\n  gap: 16px;\n  padding: 8px 14px;\n  background: #f8fafc;\n  border: 1px solid #cbd5e1;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  margin-top: -1px;\n  flex-wrap: wrap;\n}\n.vec-legend-item {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: .72rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.vec-legend-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  border: 1px solid rgba(0, 0, 0, .1);\n}\n.vec-lg-work {\n  background:\n    linear-gradient(\n      135deg,\n      #86efac,\n      #4ade80);\n}\n.vec-lg-rest {\n  background:\n    linear-gradient(\n      135deg,\n      #fca5a5,\n      #f87171);\n}\n.vec-lg-holiday {\n  background:\n    linear-gradient(\n      135deg,\n      #fde68a,\n      #fbbf24);\n}\n.vec-lg-today {\n  background:\n    linear-gradient(\n      135deg,\n      #93c5fd,\n      #3b82f6);\n}\n.vec-row-clickable {\n  cursor: pointer;\n}\n/*# sourceMappingURL=view-emp-calendar.component.css.map */\n"] }]
  }], () => [{ type: ViewEmpCalendarService }, { type: ChangeUserService }, { type: AuthService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewEmpCalendarComponent, { className: "ViewEmpCalendarComponent", filePath: "src/app/view-emp-calendar/view-emp-calendar.component.ts", lineNumber: 108 });
})();
export {
  ViewEmpCalendarComponent
};
//# debugId=1f1ca6c7-aa95-5f2e-90ea-f18678a0b501
//# sourceMappingURL=chunk-VG4H4XAK.js.map
