import {
  NzDescriptionsComponent,
  NzDescriptionsItemComponent,
  NzDescriptionsModule
} from "./chunk-Q45A6SWP.js";
import {
  NzModalComponent,
  NzModalContentDirective,
  NzModalModule
} from "./chunk-OEYWCHIN.js";
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
  FormsModule,
  NgControlStatus,
  NgModel
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

// src/app/ess-view-emp-calendar/ess-view-emp-calendar.service.ts
var MY_INFO_URL = "/ess/empinfo/api/personalInfo/myInfo";
var CALENDAR_MONTH_URL = "/ar/attendanceSettings/api/calender/emp/month";
var EssViewEmpCalendarService = class _EssViewEmpCalendarService {
  constructor(http) {
    this.http = http;
  }
  http;
  getMyInfo() {
    return this.http.get(MY_INFO_URL, { withCredentials: true });
  }
  getEmpCalendarMonth(year, month, personId) {
    const params = new HttpParams().set("year", year).set("month", month).set("personId", personId);
    return this.http.get(CALENDAR_MONTH_URL, { params, withCredentials: true });
  }
  static \u0275fac = function EssViewEmpCalendarService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EssViewEmpCalendarService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EssViewEmpCalendarService, factory: _EssViewEmpCalendarService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EssViewEmpCalendarService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/ess-view-emp-calendar/ess-view-emp-calendar.component.ts
function EssViewEmpCalendarComponent_nz_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 30);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const m_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzValue", m_r1)("nzLabel", \u0275\u0275pipeBind1(1, 2, ctx_r1.monthKeys[m_r1 - 1]));
  }
}
function EssViewEmpCalendarComponent_nz_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 30);
  }
  if (rf & 2) {
    const y_r3 = ctx.$implicit;
    \u0275\u0275property("nzValue", y_r3)("nzLabel", y_r3);
  }
}
function EssViewEmpCalendarComponent_nz_alert_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 31);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function EssViewEmpCalendarComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "esscal.msg.loading", "\u0110ang t\u1EA3i..."));
  }
}
function EssViewEmpCalendarComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.emptyMessage());
  }
}
function EssViewEmpCalendarComponent_ng_container_47_div_1_div_1_ng_container_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "esscal.status.holidayStar", "\u2605 L\u1EC5"));
  }
}
function EssViewEmpCalendarComponent_ng_container_47_div_1_div_1_ng_container_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cell_r5.record?.typeidName);
  }
}
function EssViewEmpCalendarComponent_ng_container_47_div_1_div_1_ng_container_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
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
function EssViewEmpCalendarComponent_ng_container_47_div_1_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 37)(2, "span", 38);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 39);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 40)(8, "span", 41);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, EssViewEmpCalendarComponent_ng_container_47_div_1_div_1_ng_container_1_span_11_Template, 3, 4, "span", 42);
    \u0275\u0275elementStart(12, "span", 43);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, EssViewEmpCalendarComponent_ng_container_47_div_1_div_1_ng_container_1_span_14_Template, 2, 1, "span", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, EssViewEmpCalendarComponent_ng_container_47_div_1_div_1_ng_container_1_div_15_Template, 2, 2, "div", 45);
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
function EssViewEmpCalendarComponent_ng_container_47_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275listener("click", function EssViewEmpCalendarComponent_ng_container_47_div_1_div_1_Template_div_click_0_listener() {
      const cell_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.dayClick(cell_r5));
    });
    \u0275\u0275template(1, EssViewEmpCalendarComponent_ng_container_47_div_1_div_1_ng_container_1_Template, 16, 25, "ng-container", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("is-empty", cell_r5.isEmpty)("is-today", cell_r5.isToday)("is-holiday", !cell_r5.isEmpty && cell_r5.isHoliday)("is-rest", !cell_r5.isEmpty && !cell_r5.isHoliday && cell_r5.isRest)("is-work", !cell_r5.isEmpty && !cell_r5.isHoliday && !cell_r5.isRest)("essvc-clickable", ctx_r1.hrmMode && !cell_r5.isEmpty);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !cell_r5.isEmpty);
  }
}
function EssViewEmpCalendarComponent_ng_container_47_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275template(1, EssViewEmpCalendarComponent_ng_container_47_div_1_div_1_Template, 2, 13, "div", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const week_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", week_r6);
  }
}
function EssViewEmpCalendarComponent_ng_container_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, EssViewEmpCalendarComponent_ng_container_47_div_1_Template, 2, 1, "div", 33);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.weeks());
  }
}
function EssViewEmpCalendarComponent_nz_modal_65_ng_container_2_ng_container_1_nz_descriptions_item_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-descriptions-item", 52);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r8 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(1, 2, "common.type", "Lo\u1EA1i"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cell_r8.record?.typeidName);
  }
}
function EssViewEmpCalendarComponent_nz_modal_65_ng_container_2_ng_container_1_nz_descriptions_item_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-descriptions-item", 52);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cell_r8 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(1, 2, "common.remark", "Ghi ch\xFA"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cell_r8.record?.remark);
  }
}
function EssViewEmpCalendarComponent_nz_modal_65_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "nz-descriptions", 51)(2, "nz-descriptions-item", 52);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "nz-descriptions-item", 52);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "nz-descriptions-item", 52);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, EssViewEmpCalendarComponent_nz_modal_65_ng_container_2_ng_container_1_nz_descriptions_item_12_Template, 3, 5, "nz-descriptions-item", 53)(13, EssViewEmpCalendarComponent_nz_modal_65_ng_container_2_ng_container_1_nz_descriptions_item_13_Template, 3, 5, "nz-descriptions-item", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cell_r8 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("nzColumn", 1);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(3, 9, "common.date", "Ng\xE0y"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cell_r8.dateKey);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(6, 12, "common.status", "Tr\u1EA1ng th\xE1i"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 15, ctx_r1.statusKey(cell_r8)));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(10, 17, "common.shift", "Ca l\xE0m vi\u1EC7c"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.shiftLabel(cell_r8));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cell_r8.record?.typeidName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", cell_r8.record?.remark);
  }
}
function EssViewEmpCalendarComponent_nz_modal_65_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, EssViewEmpCalendarComponent_nz_modal_65_ng_container_2_ng_container_1_Template, 14, 20, "ng-container", 22);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.detailCell());
  }
}
function EssViewEmpCalendarComponent_nz_modal_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-modal", 49);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("nzOnCancel", function EssViewEmpCalendarComponent_nz_modal_65_Template_nz_modal_nzOnCancel_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275template(2, EssViewEmpCalendarComponent_nz_modal_65_ng_container_2_Template, 2, 1, "ng-container", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzVisible", ctx_r1.detailVisible())("nzTitle", \u0275\u0275pipeBind2(1, 3, "esscal.modal.dayDetail", "Chi ti\u1EBFt ng\xE0y"))("nzFooter", null);
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
  "esscal.msg.loadError",
  "esscal.msg.noCalData",
  "esscal.msg.empNotFound",
  "esscal.msg.loadEmpFailed",
  "esscal.status.holiday",
  "esscal.status.rest",
  "esscal.status.work",
  "esscal.status.weekend",
  "esscal.status.weekday",
  "esscal.status.holidayStar",
  "esscal.status.adminShift",
  "esscal.modal.dayDetail",
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
  "common.status",
  "common.shift",
  "common.type",
  "common.remark"
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
var EssViewEmpCalendarComponent = class _EssViewEmpCalendarComponent {
  constructor(api, i18n) {
    this.api = api;
    this.i18n = i18n;
  }
  api;
  i18n;
  monthKeys = MONTH_KEYS;
  monthOptions = Array.from({ length: 12 }, (_, i) => i + 1);
  yearOptions = this.buildYearOptions();
  /** Trang ESS chỉ xem, không sửa - modal chi tiết ngày luôn ẩn (xem giải thích ở JSDoc component). */
  hrmMode = false;
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
  detailVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "detailVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  detailCell = signal(
    null,
    ...ngDevMode ? [{ debugName: "detailCell" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedMonth = (/* @__PURE__ */ new Date()).getMonth() + 1;
  selectedYear = (/* @__PURE__ */ new Date()).getFullYear();
  personId = "";
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadMyInfo();
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
  dayClick(cell) {
    if (!this.hrmMode || cell.isEmpty)
      return;
    this.detailCell.set(cell);
    this.detailVisible.set(true);
  }
  closeDetail() {
    this.detailVisible.set(false);
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
  loadMyInfo() {
    this.api.getMyInfo().subscribe({
      next: (info) => {
        if (!info?.personId) {
          this.errorMessage.set(this.i18n.t("esscal.msg.empNotFound", "Kh\xF4ng t\xECm th\u1EA5y th\xF4ng tin nh\xE2n vi\xEAn."));
          return;
        }
        this.personId = info.personId;
        this.loadMonth();
      },
      error: () => this.errorMessage.set(this.i18n.t("esscal.msg.loadEmpFailed", "Kh\xF4ng l\u1EA5y \u0111\u01B0\u1EE3c th\xF4ng tin nh\xE2n vi\xEAn!"))
    });
  }
  loadMonth() {
    if (!this.personId)
      return;
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
  /** Dựng lưới 7 cột từ danh sách ngày phẳng do backend trả về - cùng thuật toán với esscalRender()
   *  trong bản Thymeleaf gốc: chèn ô rỗng trước ngày 1 theo đúng thứ trong tuần, sau đó chia đều 7
   *  ô/hàng theo thứ tự liên tiếp của records (giả định backend luôn trả đủ, không thiếu ngày). */
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
  static \u0275fac = function EssViewEmpCalendarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EssViewEmpCalendarComponent)(\u0275\u0275directiveInject(EssViewEmpCalendarService), \u0275\u0275directiveInject(I18nService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EssViewEmpCalendarComponent, selectors: [["app-ess-view-emp-calendar"]], decls: 66, vars: 65, consts: [[1, "essvc-wrap"], ["id", "essvc_toolbar", 1, "essvc-toolbar"], [1, "essvc-nav"], ["nz-button", "", "nzType", "default", "nzShape", "circle", 3, "click"], [1, "bx", "bx-chevron-left"], ["id", "essvc_monthSel", 1, "essvc-combo", 3, "ngModelChange", "ngModel"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["id", "essvc_yearSel", 1, "essvc-combo", "essvc-year", 3, "ngModelChange", "ngModel"], [1, "bx", "bx-chevron-right"], [1, "essvc-actions"], ["id", "essvc_searchBtn", "nz-button", "", "nzType", "default", 3, "click"], [1, "bx", "bx-refresh"], ["nzType", "error", "class", "mb-2", 3, "nzMessage", 4, "ngIf"], ["id", "essvc_gridWrap", 1, "essvc-grid-wrap"], [1, "essvc-hrow"], [1, "essvc-hcell", "essvc-col-sun"], [1, "bx", "bxs-sun"], [1, "essvc-hcell"], [1, "essvc-hcell", "essvc-col-sat"], [1, "bx", "bxs-star"], ["id", "essvc_body"], ["class", "essvc-status-msg", 4, "ngIf"], [4, "ngIf"], [1, "essvc-legend"], [1, "essvc-legend-item"], [1, "essvc-legend-dot", "essvc-lg-work"], [1, "essvc-legend-dot", "essvc-lg-rest"], [1, "essvc-legend-dot", "essvc-lg-holiday"], [1, "essvc-legend-dot", "essvc-lg-today"], ["nzWidth", "360px", 3, "nzVisible", "nzTitle", "nzFooter", "nzOnCancel", 4, "ngIf"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-2", 3, "nzMessage"], [1, "essvc-status-msg"], ["class", "essvc-week", 4, "ngFor", "ngForOf"], [1, "essvc-week"], ["class", "essvc-day", 3, "is-empty", "is-today", "is-holiday", "is-rest", "is-work", "essvc-clickable", "click", 4, "ngFor", "ngForOf"], [1, "essvc-day", 3, "click"], [1, "essvc-day-top"], [1, "essvc-day-num"], [1, "essvc-status"], [1, "essvc-tags"], [1, "essvc-tag"], ["class", "essvc-tag t-hol", 4, "ngIf"], [1, "essvc-tag", "t-sh"], ["class", "essvc-tag t-custom", 4, "ngIf"], ["class", "essvc-remark", 4, "ngIf"], [1, "essvc-tag", "t-hol"], [1, "essvc-tag", "t-custom"], [1, "essvc-remark"], ["nzWidth", "360px", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzFooter"], [4, "nzModalContent"], ["nzBordered", "", "nzSize", "small", 3, "nzColumn"], [3, "nzTitle"], [3, "nzTitle", 4, "ngIf"]], template: function EssViewEmpCalendarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275listener("click", function EssViewEmpCalendarComponent_Template_button_click_3_listener() {
        return ctx.prevMonth();
      });
      \u0275\u0275element(5, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "nz-select", 5);
      \u0275\u0275twoWayListener("ngModelChange", function EssViewEmpCalendarComponent_Template_nz_select_ngModelChange_6_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedMonth, $event) || (ctx.selectedMonth = $event);
        return $event;
      });
      \u0275\u0275template(7, EssViewEmpCalendarComponent_nz_option_7_Template, 2, 4, "nz-option", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(8, "nz-select", 7);
      \u0275\u0275twoWayListener("ngModelChange", function EssViewEmpCalendarComponent_Template_nz_select_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedYear, $event) || (ctx.selectedYear = $event);
        return $event;
      });
      \u0275\u0275template(9, EssViewEmpCalendarComponent_nz_option_9_Template, 1, 2, "nz-option", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(10, "button", 3);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275listener("click", function EssViewEmpCalendarComponent_Template_button_click_10_listener() {
        return ctx.nextMonth();
      });
      \u0275\u0275element(12, "i", 8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 9)(14, "button", 10);
      \u0275\u0275listener("click", function EssViewEmpCalendarComponent_Template_button_click_14_listener() {
        return ctx.search();
      });
      \u0275\u0275element(15, "i", 11);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(18, EssViewEmpCalendarComponent_nz_alert_18_Template, 1, 1, "nz-alert", 12);
      \u0275\u0275elementStart(19, "div", 13)(20, "div", 14)(21, "div", 15);
      \u0275\u0275element(22, "i", 16);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 17);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 17);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 17);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 17);
      \u0275\u0275text(35);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 17);
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 18);
      \u0275\u0275element(41, "i", 19);
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 20);
      \u0275\u0275template(45, EssViewEmpCalendarComponent_div_45_Template, 3, 4, "div", 21)(46, EssViewEmpCalendarComponent_div_46_Template, 2, 1, "div", 21)(47, EssViewEmpCalendarComponent_ng_container_47_Template, 2, 1, "ng-container", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 23)(49, "span", 24);
      \u0275\u0275element(50, "span", 25);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "span", 24);
      \u0275\u0275element(54, "span", 26);
      \u0275\u0275text(55);
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "span", 24);
      \u0275\u0275element(58, "span", 27);
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "span", 24);
      \u0275\u0275element(62, "span", 28);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(65, EssViewEmpCalendarComponent_nz_modal_65_Template, 3, 6, "nz-modal", 29);
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275attribute("title", \u0275\u0275pipeBind2(4, 23, "esscal.nav.prevMonth", "Th\xE1ng tr\u01B0\u1EDBc"));
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
      \u0275\u0275attribute("title", \u0275\u0275pipeBind2(11, 26, "esscal.nav.nextMonth", "Th\xE1ng sau"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(17, 29, "button.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(24, 32, "common.day.sun", "CN"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 35, "common.day.mon", "T2"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 38, "common.day.tue", "T3"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 41, "common.day.wed", "T4"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 44, "common.day.thu", "T5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 47, "common.day.fri", "T6"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(43, 50, "common.day.sat", "T7"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.emptyMessage());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(52, 53, "esscal.legend.workDay", "Ng\xE0y l\xE0m vi\u1EC7c"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(56, 56, "esscal.legend.restDay", "Ng\xE0y ngh\u1EC9"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(60, 59, "esscal.legend.holiday", "Ng\xE0y l\u1EC5"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(64, 62, "esscal.legend.today", "H\xF4m nay"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.hrmMode);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgControlStatus, NgModel, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, NzDescriptionsModule, NzDescriptionsComponent, NzDescriptionsItemComponent, TranslatePipe], styles: ["\n@keyframes _ngcontent-%COMP%_essvc-pulse {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(59, 130, 246, .4);\n  }\n  50% {\n    box-shadow: 0 0 0 6px rgba(59, 130, 246, 0);\n  }\n}\n@keyframes _ngcontent-%COMP%_essvc-slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.essvc-wrap[_ngcontent-%COMP%] {\n  display: block;\n}\n.essvc-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #e2e8f0 100%);\n  border: 1px solid #cbd5e1;\n  border-radius: 8px 8px 0 0;\n  padding: 8px 14px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, .06);\n}\n.essvc-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin: 0 auto;\n}\n.essvc-combo[_ngcontent-%COMP%] {\n  width: 130px;\n}\n.essvc-combo.essvc-year[_ngcontent-%COMP%] {\n  width: 90px;\n}\n.essvc-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.essvc-grid-wrap[_ngcontent-%COMP%] {\n  border: 1px solid #cbd5e1;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  overflow: hidden;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, .06);\n}\n.essvc-hrow[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #334155 100%);\n}\n.essvc-hcell[_ngcontent-%COMP%] {\n  padding: 8px;\n  text-align: center;\n  font-weight: 700;\n  font-size: .82rem;\n  color: #e2e8f0;\n  letter-spacing: .5px;\n  border-right: 1px solid rgba(255, 255, 255, .08);\n}\n.essvc-hcell[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.essvc-col-sun[_ngcontent-%COMP%] {\n  color: #fca5a5 !important;\n}\n.essvc-col-sat[_ngcontent-%COMP%] {\n  color: #86efac !important;\n}\n.essvc-status-msg[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  color: #64748b;\n}\n.essvc-week[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  border-bottom: 1px solid #e2e8f0;\n  animation: _ngcontent-%COMP%_essvc-slideDown .3s ease-out both;\n}\n.essvc-week[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.essvc-day[_ngcontent-%COMP%] {\n  min-height: 90px;\n  padding: 6px 8px;\n  border-right: 1px solid #e2e8f0;\n  background: #fff;\n  overflow: hidden;\n  transition: all .2s ease;\n  position: relative;\n}\n.essvc-day[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.essvc-day.is-empty[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  min-height: 0;\n}\n.essvc-day.is-today[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff 0%,\n      #dbeafe 100%);\n  animation: _ngcontent-%COMP%_essvc-pulse 2.5s infinite;\n}\n.essvc-day.is-rest[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #fef2f2 100%);\n}\n.essvc-day.is-work[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #f0fdf4 100%);\n}\n.essvc-day.is-holiday[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #fefce8 100%);\n}\n.essvc-day.essvc-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.essvc-day-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 4px;\n}\n.essvc-day-num[_ngcontent-%COMP%] {\n  font-size: .95rem;\n  font-weight: 800;\n  color: #1e293b;\n  white-space: nowrap;\n  line-height: 1.2;\n}\n.essvc-day-num.is-sun[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.essvc-day-num.is-sat[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.essvc-status[_ngcontent-%COMP%] {\n  font-size: .62rem;\n  padding: 2px 7px;\n  border-radius: 10px;\n  font-weight: 700;\n  white-space: nowrap;\n  line-height: 1.3;\n  letter-spacing: .3px;\n  text-transform: uppercase;\n}\n.essvc-status.s-holiday[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fde68a,\n      #fbbf24);\n  color: #78350f;\n}\n.essvc-status.s-rest[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fecaca,\n      #fca5a5);\n  color: #7f1d1d;\n}\n.essvc-status.s-work[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #bbf7d0,\n      #86efac);\n  color: #166534;\n}\n.essvc-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 3px;\n  margin-top: 4px;\n}\n.essvc-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font-size: .58rem;\n  padding: 1px 6px;\n  border-radius: 8px;\n  line-height: 1.6;\n  white-space: nowrap;\n  font-weight: 600;\n}\n.essvc-tag.t-we[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #991b1b;\n}\n.essvc-tag.t-wd[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e3a8a;\n}\n.essvc-tag.t-hol[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7,\n      #fde68a);\n  color: #92400e;\n  border: 1px solid #fbbf24;\n}\n.essvc-tag.t-sh[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.essvc-tag.t-custom[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.essvc-remark[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  font-size: .58rem;\n  color: #94a3b8;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-style: italic;\n}\n.essvc-legend[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 8px 14px;\n  background: #f8fafc;\n  border: 1px solid #cbd5e1;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  margin-top: -1px;\n  flex-wrap: wrap;\n}\n.essvc-legend-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: .72rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.essvc-legend-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  border: 1px solid rgba(0, 0, 0, .1);\n}\n.essvc-lg-work[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #86efac,\n      #4ade80);\n}\n.essvc-lg-rest[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fca5a5,\n      #f87171);\n}\n.essvc-lg-holiday[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fde68a,\n      #fbbf24);\n}\n.essvc-lg-today[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #93c5fd,\n      #3b82f6);\n}\n/*# sourceMappingURL=ess-view-emp-calendar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EssViewEmpCalendarComponent, [{
    type: Component,
    args: [{ selector: "app-ess-view-emp-calendar", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzButtonModule,
      NzSelectModule,
      NzModalModule,
      NzAlertModule,
      NzDescriptionsModule,
      TranslatePipe
    ], template: `<div class="essvc-wrap">
  <!-- ===== Toolbar ===== -->
  <div id="essvc_toolbar" class="essvc-toolbar">
    <div class="essvc-nav">
      <button nz-button nzType="default" nzShape="circle" [attr.title]="'esscal.nav.prevMonth' | translate:'Th\xE1ng tr\u01B0\u1EDBc'" (click)="prevMonth()">
        <i class="bx bx-chevron-left"></i>
      </button>
      <nz-select id="essvc_monthSel" class="essvc-combo" [(ngModel)]="selectedMonth">
        <nz-option *ngFor="let m of monthOptions" [nzValue]="m" [nzLabel]="monthKeys[m - 1] | translate"></nz-option>
      </nz-select>
      <nz-select id="essvc_yearSel" class="essvc-combo essvc-year" [(ngModel)]="selectedYear">
        <nz-option *ngFor="let y of yearOptions" [nzValue]="y" [nzLabel]="y"></nz-option>
      </nz-select>
      <button nz-button nzType="default" nzShape="circle" [attr.title]="'esscal.nav.nextMonth' | translate:'Th\xE1ng sau'" (click)="nextMonth()">
        <i class="bx bx-chevron-right"></i>
      </button>
    </div>
    <div class="essvc-actions">
      <button id="essvc_searchBtn" nz-button nzType="default" (click)="search()">
        <i class="bx bx-refresh"></i> {{ 'button.search' | translate:'Tra c\u1EE9u' }}
      </button>
    </div>
  </div>

  <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-2"></nz-alert>

  <!-- ===== Calendar grid ===== -->
  <div id="essvc_gridWrap" class="essvc-grid-wrap">
    <div class="essvc-hrow">
      <div class="essvc-hcell essvc-col-sun"><i class="bx bxs-sun"></i> {{ 'common.day.sun' | translate:'CN' }}</div>
      <div class="essvc-hcell">{{ 'common.day.mon' | translate:'T2' }}</div>
      <div class="essvc-hcell">{{ 'common.day.tue' | translate:'T3' }}</div>
      <div class="essvc-hcell">{{ 'common.day.wed' | translate:'T4' }}</div>
      <div class="essvc-hcell">{{ 'common.day.thu' | translate:'T5' }}</div>
      <div class="essvc-hcell">{{ 'common.day.fri' | translate:'T6' }}</div>
      <div class="essvc-hcell essvc-col-sat"><i class="bx bxs-star"></i> {{ 'common.day.sat' | translate:'T7' }}</div>
    </div>

    <div id="essvc_body">
      <div *ngIf="loading()" class="essvc-status-msg">{{ 'esscal.msg.loading' | translate:'\u0110ang t\u1EA3i...' }}</div>
      <div *ngIf="!loading() && emptyMessage()" class="essvc-status-msg">{{ emptyMessage() }}</div>

      <ng-container *ngIf="!loading()">
        <div class="essvc-week" *ngFor="let week of weeks()">
          <div *ngFor="let cell of week"
               class="essvc-day"
               [class.is-empty]="cell.isEmpty"
               [class.is-today]="cell.isToday"
               [class.is-holiday]="!cell.isEmpty && cell.isHoliday"
               [class.is-rest]="!cell.isEmpty && !cell.isHoliday && cell.isRest"
               [class.is-work]="!cell.isEmpty && !cell.isHoliday && !cell.isRest"
               [class.essvc-clickable]="hrmMode && !cell.isEmpty"
               (click)="dayClick(cell)">
            <ng-container *ngIf="!cell.isEmpty">
              <div class="essvc-day-top">
                <span class="essvc-day-num" [class.is-sun]="cell.isSunday" [class.is-sat]="cell.isSaturday">{{ cell.day }}</span>
                <span class="essvc-status" [class.s-holiday]="cell.isHoliday" [class.s-rest]="!cell.isHoliday && cell.isRest" [class.s-work]="!cell.isHoliday && !cell.isRest">
                  {{ statusKey(cell) | translate }}
                </span>
              </div>
              <div class="essvc-tags">
                <span class="essvc-tag" [class.t-we]="cell.isWeekend" [class.t-wd]="!cell.isWeekend">
                  {{ (cell.isWeekend ? 'esscal.status.weekend' : 'esscal.status.weekday') | translate }}
                </span>
                <span class="essvc-tag t-hol" *ngIf="cell.isHoliday">{{ 'esscal.status.holidayStar' | translate:'\u2605 L\u1EC5' }}</span>
                <span class="essvc-tag t-sh">{{ shiftLabel(cell) }}</span>
                <span class="essvc-tag t-custom" *ngIf="cell.record?.typeidName">{{ cell.record?.typeidName }}</span>
              </div>
              <div class="essvc-remark" *ngIf="cell.record?.remark" [attr.title]="cell.record?.remark">\u2014 {{ cell.record?.remark }}</div>
            </ng-container>
          </div>
        </div>
      </ng-container>
    </div>
  </div>

  <!-- ===== Legend ===== -->
  <div class="essvc-legend">
    <span class="essvc-legend-item"><span class="essvc-legend-dot essvc-lg-work"></span> {{ 'esscal.legend.workDay' | translate:'Ng\xE0y l\xE0m vi\u1EC7c' }}</span>
    <span class="essvc-legend-item"><span class="essvc-legend-dot essvc-lg-rest"></span> {{ 'esscal.legend.restDay' | translate:'Ng\xE0y ngh\u1EC9' }}</span>
    <span class="essvc-legend-item"><span class="essvc-legend-dot essvc-lg-holiday"></span> {{ 'esscal.legend.holiday' | translate:'Ng\xE0y l\u1EC5' }}</span>
    <span class="essvc-legend-item"><span class="essvc-legend-dot essvc-lg-today"></span> {{ 'esscal.legend.today' | translate:'H\xF4m nay' }}</span>
  </div>
</div>

<!-- ===== Modal chi ti\u1EBFt ng\xE0y (ch\u1EC9 d\xF9ng khi hrmMode = true, xem JSDoc component) ===== -->
<nz-modal *ngIf="hrmMode" [nzVisible]="detailVisible()" [nzTitle]="'esscal.modal.dayDetail' | translate:'Chi ti\u1EBFt ng\xE0y'"
          nzWidth="360px" (nzOnCancel)="closeDetail()" [nzFooter]="null">
  <ng-container *nzModalContent>
    <ng-container *ngIf="detailCell() as cell">
      <nz-descriptions nzBordered [nzColumn]="1" nzSize="small">
        <nz-descriptions-item [nzTitle]="'common.date' | translate:'Ng\xE0y'">{{ cell.dateKey }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'common.status' | translate:'Tr\u1EA1ng th\xE1i'">{{ statusKey(cell) | translate }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'common.shift' | translate:'Ca l\xE0m vi\u1EC7c'">{{ shiftLabel(cell) }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'common.type' | translate:'Lo\u1EA1i'" *ngIf="cell.record?.typeidName">{{ cell.record?.typeidName }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'common.remark' | translate:'Ghi ch\xFA'" *ngIf="cell.record?.remark">{{ cell.record?.remark }}</nz-descriptions-item>
      </nz-descriptions>
    </ng-container>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/ess-view-emp-calendar/ess-view-emp-calendar.component.css */\n@keyframes essvc-pulse {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(59, 130, 246, .4);\n  }\n  50% {\n    box-shadow: 0 0 0 6px rgba(59, 130, 246, 0);\n  }\n}\n@keyframes essvc-slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-4px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.essvc-wrap {\n  display: block;\n}\n.essvc-toolbar {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #e2e8f0 100%);\n  border: 1px solid #cbd5e1;\n  border-radius: 8px 8px 0 0;\n  padding: 8px 14px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, .06);\n}\n.essvc-nav {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin: 0 auto;\n}\n.essvc-combo {\n  width: 130px;\n}\n.essvc-combo.essvc-year {\n  width: 90px;\n}\n.essvc-actions {\n  display: flex;\n  gap: 6px;\n}\n.essvc-grid-wrap {\n  border: 1px solid #cbd5e1;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  overflow: hidden;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, .06);\n}\n.essvc-hrow {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  background:\n    linear-gradient(\n      135deg,\n      #1e293b 0%,\n      #334155 100%);\n}\n.essvc-hcell {\n  padding: 8px;\n  text-align: center;\n  font-weight: 700;\n  font-size: .82rem;\n  color: #e2e8f0;\n  letter-spacing: .5px;\n  border-right: 1px solid rgba(255, 255, 255, .08);\n}\n.essvc-hcell:last-child {\n  border-right: none;\n}\n.essvc-col-sun {\n  color: #fca5a5 !important;\n}\n.essvc-col-sat {\n  color: #86efac !important;\n}\n.essvc-status-msg {\n  padding: 20px;\n  text-align: center;\n  color: #64748b;\n}\n.essvc-week {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  border-bottom: 1px solid #e2e8f0;\n  animation: essvc-slideDown .3s ease-out both;\n}\n.essvc-week:last-child {\n  border-bottom: none;\n}\n.essvc-day {\n  min-height: 90px;\n  padding: 6px 8px;\n  border-right: 1px solid #e2e8f0;\n  background: #fff;\n  overflow: hidden;\n  transition: all .2s ease;\n  position: relative;\n}\n.essvc-day:last-child {\n  border-right: none;\n}\n.essvc-day.is-empty {\n  background: #f8fafc;\n  min-height: 0;\n}\n.essvc-day.is-today {\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff 0%,\n      #dbeafe 100%);\n  animation: essvc-pulse 2.5s infinite;\n}\n.essvc-day.is-rest {\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #fef2f2 100%);\n}\n.essvc-day.is-work {\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #f0fdf4 100%);\n}\n.essvc-day.is-holiday {\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #fefce8 100%);\n}\n.essvc-day.essvc-clickable {\n  cursor: pointer;\n}\n.essvc-day-top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 4px;\n}\n.essvc-day-num {\n  font-size: .95rem;\n  font-weight: 800;\n  color: #1e293b;\n  white-space: nowrap;\n  line-height: 1.2;\n}\n.essvc-day-num.is-sun {\n  color: #dc2626;\n}\n.essvc-day-num.is-sat {\n  color: #16a34a;\n}\n.essvc-status {\n  font-size: .62rem;\n  padding: 2px 7px;\n  border-radius: 10px;\n  font-weight: 700;\n  white-space: nowrap;\n  line-height: 1.3;\n  letter-spacing: .3px;\n  text-transform: uppercase;\n}\n.essvc-status.s-holiday {\n  background:\n    linear-gradient(\n      135deg,\n      #fde68a,\n      #fbbf24);\n  color: #78350f;\n}\n.essvc-status.s-rest {\n  background:\n    linear-gradient(\n      135deg,\n      #fecaca,\n      #fca5a5);\n  color: #7f1d1d;\n}\n.essvc-status.s-work {\n  background:\n    linear-gradient(\n      135deg,\n      #bbf7d0,\n      #86efac);\n  color: #166534;\n}\n.essvc-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 3px;\n  margin-top: 4px;\n}\n.essvc-tag {\n  display: inline-flex;\n  align-items: center;\n  font-size: .58rem;\n  padding: 1px 6px;\n  border-radius: 8px;\n  line-height: 1.6;\n  white-space: nowrap;\n  font-weight: 600;\n}\n.essvc-tag.t-we {\n  background: #fde8e8;\n  color: #991b1b;\n}\n.essvc-tag.t-wd {\n  background: #dbeafe;\n  color: #1e3a8a;\n}\n.essvc-tag.t-hol {\n  background:\n    linear-gradient(\n      135deg,\n      #fef3c7,\n      #fde68a);\n  color: #92400e;\n  border: 1px solid #fbbf24;\n}\n.essvc-tag.t-sh {\n  background: #d1fae5;\n  color: #065f46;\n}\n.essvc-tag.t-custom {\n  background: #ede9fe;\n  color: #5b21b6;\n}\n.essvc-remark {\n  margin-top: 3px;\n  font-size: .58rem;\n  color: #94a3b8;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-style: italic;\n}\n.essvc-legend {\n  display: flex;\n  gap: 16px;\n  padding: 8px 14px;\n  background: #f8fafc;\n  border: 1px solid #cbd5e1;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  margin-top: -1px;\n  flex-wrap: wrap;\n}\n.essvc-legend-item {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: .72rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.essvc-legend-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  border: 1px solid rgba(0, 0, 0, .1);\n}\n.essvc-lg-work {\n  background:\n    linear-gradient(\n      135deg,\n      #86efac,\n      #4ade80);\n}\n.essvc-lg-rest {\n  background:\n    linear-gradient(\n      135deg,\n      #fca5a5,\n      #f87171);\n}\n.essvc-lg-holiday {\n  background:\n    linear-gradient(\n      135deg,\n      #fde68a,\n      #fbbf24);\n}\n.essvc-lg-today {\n  background:\n    linear-gradient(\n      135deg,\n      #93c5fd,\n      #3b82f6);\n}\n/*# sourceMappingURL=ess-view-emp-calendar.component.css.map */\n"] }]
  }], () => [{ type: EssViewEmpCalendarService }, { type: I18nService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EssViewEmpCalendarComponent, { className: "EssViewEmpCalendarComponent", filePath: "src/app/ess-view-emp-calendar/ess-view-emp-calendar.component.ts", lineNumber: 67 });
})();
export {
  EssViewEmpCalendarComponent
};
//# debugId=7565f738-5678-5e56-9dec-ad3ab78bea65
//# sourceMappingURL=chunk-IQNN2GOH.js.map
