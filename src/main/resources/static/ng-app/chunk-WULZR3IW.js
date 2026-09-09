import {
  NzInputNumberComponent,
  NzInputNumberModule
} from "./chunk-IXCMIWQQ.js";
import {
  NzTagComponent,
  NzTagModule
} from "./chunk-HTQAHYN3.js";
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
  NzTreeComponent,
  NzTreeModule
} from "./chunk-PD7KBOBI.js";
import {
  NzTimePickerComponent,
  NzTimePickerModule
} from "./chunk-5TI46VEX.js";
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
  __spreadProps,
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
  ɵɵpureFunction1,
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

// src/app/view-shift/view-shift.service.ts
var SHIFT_BASE = "/ar/attendanceSettings/api/shift";
var SHIFT_DETAIL_BASE = "/ar/attendanceSettings/api/shiftDetail";
var ViewShiftService = class _ViewShiftService {
  constructor(http) {
    this.http = http;
  }
  http;
  // --- AR_SHIFT010 (Ca làm việc) ---
  searchShifts(searchText) {
    let params = new HttpParams();
    if (searchText)
      params = params.set("searchText", searchText);
    return this.http.get(SHIFT_BASE, { params, withCredentials: true });
  }
  getShiftById(shiftNo) {
    return this.http.get(`${SHIFT_BASE}/${shiftNo}`, { withCredentials: true });
  }
  saveShift(payload) {
    return this.http.post(`${SHIFT_BASE}/save`, payload, { withCredentials: true });
  }
  deleteShift(shiftNo) {
    return this.http.delete(`${SHIFT_BASE}/delete/${shiftNo}`, { withCredentials: true });
  }
  // --- AR_SHIFT020 (Chi tiết tham số ca) ---
  searchShiftDetails(shiftNo) {
    const params = new HttpParams().set("shiftNo", shiftNo);
    return this.http.get(SHIFT_DETAIL_BASE, { params, withCredentials: true });
  }
  saveShiftDetail(payload) {
    return this.http.post(`${SHIFT_DETAIL_BASE}/save`, payload, { withCredentials: true });
  }
  deleteShiftDetail(pkNo) {
    return this.http.delete(`${SHIFT_DETAIL_BASE}/delete/${pkNo}`, { withCredentials: true });
  }
  /** Combo chọn hạng mục cho chi tiết ca - dùng lại nguyên API danh sách hạng mục ở trang viewArItem
   *  (GET /ar/attendanceSettings/api/arItem, xem ViewArItemService/ViewArItemParamListService). */
  getItemOptions() {
    return this.http.get("/ar/attendanceSettings/api/arItem", { withCredentials: true });
  }
  static \u0275fac = function ViewShiftService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewShiftService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewShiftService, factory: _ViewShiftService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewShiftService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-shift/view-shift.component.ts
var _c0 = (a0) => [a0];
var _c1 = () => [];
var _c2 = () => ({ x: "1100px", y: "calc(100vh - 460px)" });
function ViewShiftComponent_nz_alert_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 36);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ViewShiftComponent_tr_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 37);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewShiftComponent_tr_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 38);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 38);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 38);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 38);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 38);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 38)(18, "nz-tag", 39);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td", 38)(23, "button", 40);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275listener("click", function ViewShiftComponent_tr_69_Template_button_click_23_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditDetailModal(row_r4));
    });
    \u0275\u0275element(25, "i", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 40);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275listener("click", function ViewShiftComponent_tr_69_Template_button_click_26_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDeleteDetailConfirm(row_r4));
    });
    \u0275\u0275element(28, "i", 11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r5 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.pkNo);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.itemName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.itemName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.beginDayOffset);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.fromTimeStr);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.endDayOffset);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.toTimeStr);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.orderno);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColor", row_r4.activity === 1 ? "success" : "default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.activity === 1 ? \u0275\u0275pipeBind2(20, 13, "common.active", "Ho\u1EA1t \u0111\u1ED9ng") : \u0275\u0275pipeBind2(21, 16, "common.inactive", "Ng\u1EEBng"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(24, 19, "common.edit", "S\u1EEDa"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(27, 22, "common.delete", "X\xF3a"));
  }
}
function ViewShiftComponent_ng_template_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r6 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r6, " ");
  }
}
function ViewShiftComponent_ng_container_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 41)(2, "div", 42)(3, "label", 43);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function ViewShiftComponent_ng_container_75_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.shiftForm.shiftId, $event) || (ctx_r1.shiftForm.shiftId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 42);
    \u0275\u0275elementStart(8, "div", 42)(9, "label", 43);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementStart(12, "span", 45);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function ViewShiftComponent_ng_container_75_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.shiftForm.nameVi, $event) || (ctx_r1.shiftForm.nameVi = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 42)(16, "label", 43);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementStart(19, "span", 45);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function ViewShiftComponent_ng_container_75_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.shiftForm.nameEn, $event) || (ctx_r1.shiftForm.nameEn = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 42)(23, "label", 43);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementStart(26, "span", 45);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function ViewShiftComponent_ng_container_75_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.shiftForm.nameZh, $event) || (ctx_r1.shiftForm.nameZh = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 42)(30, "label", 43);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementStart(33, "span", 45);
    \u0275\u0275text(34, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function ViewShiftComponent_ng_container_75_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.shiftForm.nameKo, $event) || (ctx_r1.shiftForm.nameKo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 50)(37, "label", 43);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function ViewShiftComponent_ng_container_75_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.shiftForm.shiftShortname, $event) || (ctx_r1.shiftForm.shiftShortname = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 50)(42, "label", 43);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "nz-input-number", 52);
    \u0275\u0275twoWayListener("ngModelChange", function ViewShiftComponent_ng_container_75_Template_nz_input_number_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.shiftForm.datatype, $event) || (ctx_r1.shiftForm.datatype = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 50)(47, "label", 43);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function ViewShiftComponent_ng_container_75_Template_input_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.shiftForm.deptDistinguishNo, $event) || (ctx_r1.shiftForm.deptDistinguishNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 50)(52, "label", 43);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "nz-input-number", 54);
    \u0275\u0275twoWayListener("ngModelChange", function ViewShiftComponent_ng_container_75_Template_nz_input_number_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.shiftForm.deductTime, $event) || (ctx_r1.shiftForm.deductTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 50)(57, "label", 43);
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function ViewShiftComponent_ng_container_75_Template_input_ngModelChange_60_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.shiftForm.otTimeStart, $event) || (ctx_r1.shiftForm.otTimeStart = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 50)(62, "label", 43);
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "nz-input-number", 56);
    \u0275\u0275twoWayListener("ngModelChange", function ViewShiftComponent_ng_container_75_Template_nz_input_number_ngModelChange_65_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.shiftForm.otAllowance, $event) || (ctx_r1.shiftForm.otAllowance = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 50)(67, "label", 43);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "nz-input-number", 57);
    \u0275\u0275twoWayListener("ngModelChange", function ViewShiftComponent_ng_container_75_Template_nz_input_number_ngModelChange_70_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.shiftForm.shiftLength, $event) || (ctx_r1.shiftForm.shiftLength = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 50)(72, "label", 43);
    \u0275\u0275text(73);
    \u0275\u0275pipe(74, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "nz-input-number", 58);
    \u0275\u0275twoWayListener("ngModelChange", function ViewShiftComponent_ng_container_75_Template_nz_input_number_ngModelChange_75_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.shiftForm.orderno, $event) || (ctx_r1.shiftForm.orderno = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 50)(77, "label", 59);
    \u0275\u0275text(78);
    \u0275\u0275pipe(79, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "nz-select", 60);
    \u0275\u0275twoWayListener("ngModelChange", function ViewShiftComponent_ng_container_75_Template_nz_select_ngModelChange_80_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.shiftForm.activity, $event) || (ctx_r1.shiftForm.activity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(81, "nz-option", 61);
    \u0275\u0275pipe(82, "translate");
    \u0275\u0275element(83, "nz-option", 61);
    \u0275\u0275pipe(84, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 32, "shift.field.shiftId", "M\xE3 nh\xF3m (Shift ID)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.shiftForm.shiftId);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 35, "common.nameVi", "T\xEAn Ti\u1EBFng Vi\u1EC7t"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.shiftForm.nameVi);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(18, 38, "common.nameEn", "T\xEAn Ti\u1EBFng Anh"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.shiftForm.nameEn);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(25, 41, "common.nameZh", "T\xEAn Ti\u1EBFng Trung"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.shiftForm.nameZh);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(32, 44, "common.nameKo", "T\xEAn Ti\u1EBFng H\xE0n"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.shiftForm.nameKo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 47, "shift.field.shortname", "T\xEAn r\xFAt g\u1ECDn (Shortname)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.shiftForm.shiftShortname);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 50, "shift.field.datatype", "Ki\u1EC3u d\u1EEF li\u1EC7u (Datatype)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.shiftForm.datatype);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 53, "shift.field.deptDistinguish", "Ph\xE2n chia ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.shiftForm.deptDistinguishNo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 56, "shift.field.deductTime", "Th\u1EDDi gian kh\u1EA5u tr\u1EEB"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.shiftForm.deductTime);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(59, 59, "shift.field.otTimeStart", "Gi\u1EDD b\u1EAFt \u0111\u1EA7u OT"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.shiftForm.otTimeStart);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(64, 62, "shift.field.otAllowance", "Ph\u1EE5 c\u1EA5p OT"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.shiftForm.otAllowance);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 65, "shift.field.shiftLength", "\u0110\u1ED9 d\xE0i ca (Shift length)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.shiftForm.shiftLength);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(74, 68, "common.sortOrder", "S\u1EAFp x\u1EBFp"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.shiftForm.orderno);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(79, 71, "common.status", "Tr\u1EA1ng th\xE1i"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.shiftForm.activity);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzValue", 1)("nzLabel", \u0275\u0275pipeBind2(82, 74, "common.active", "Ho\u1EA1t \u0111\u1ED9ng"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzValue", 0)("nzLabel", \u0275\u0275pipeBind2(84, 77, "common.inactive", "Ng\u1EEBng"));
  }
}
function ViewShiftComponent_ng_container_79_nz_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 61);
  }
  if (rf & 2) {
    const opt_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzValue", opt_r9.itemNo)("nzLabel", ctx_r1.itemLabel(opt_r9));
  }
}
function ViewShiftComponent_ng_container_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 41)(2, "div", 62)(3, "label", 43);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span", 45);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "nz-select", 63);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewShiftComponent_ng_container_79_Template_nz_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.detailForm.itemNo, $event) || (ctx_r1.detailForm.itemNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(10, ViewShiftComponent_ng_container_79_nz_option_10_Template, 1, 2, "nz-option", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 42)(12, "label", 43);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "nz-input-number", 65);
    \u0275\u0275twoWayListener("ngModelChange", function ViewShiftComponent_ng_container_79_Template_nz_input_number_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.detailForm.beginDayOffset, $event) || (ctx_r1.detailForm.beginDayOffset = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 42)(17, "label", 43);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "nz-time-picker", 66);
    \u0275\u0275twoWayListener("ngModelChange", function ViewShiftComponent_ng_container_79_Template_nz_time_picker_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.detailForm.fromTime, $event) || (ctx_r1.detailForm.fromTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 42)(22, "label", 43);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "nz-input-number", 67);
    \u0275\u0275twoWayListener("ngModelChange", function ViewShiftComponent_ng_container_79_Template_nz_input_number_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.detailForm.endDayOffset, $event) || (ctx_r1.detailForm.endDayOffset = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 42)(27, "label", 43);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "nz-time-picker", 68);
    \u0275\u0275twoWayListener("ngModelChange", function ViewShiftComponent_ng_container_79_Template_nz_time_picker_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.detailForm.toTime, $event) || (ctx_r1.detailForm.toTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 42)(32, "label", 43);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "nz-input-number", 69);
    \u0275\u0275twoWayListener("ngModelChange", function ViewShiftComponent_ng_container_79_Template_nz_input_number_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.detailForm.orderno, $event) || (ctx_r1.detailForm.orderno = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 42)(37, "label", 59);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "nz-select", 70);
    \u0275\u0275twoWayListener("ngModelChange", function ViewShiftComponent_ng_container_79_Template_nz_select_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.detailForm.activity, $event) || (ctx_r1.detailForm.activity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(41, "nz-option", 61);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275element(43, "nz-option", 61);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 20, "shift.detail.colItem", "H\u1EA1ng m\u1EE5c (Item)"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.detailForm.itemNo);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(9, 23, "common.placeholder.select", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.itemOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 26, "shift.colBeginDayOffset", "\u0110\u1ED9 l\u1EC7ch ng\xE0y b\u1EAFt \u0111\u1EA7u"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.detailForm.beginDayOffset);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 29, "ar.viewshift.title.start", "Gi\u1EDD b\u1EAFt \u0111\u1EA7u"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.detailForm.fromTime);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 32, "shift.colEndDayOffset", "\u0110\u1ED9 l\u1EC7ch ng\xE0y k\u1EBFt th\xFAc"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.detailForm.endDayOffset);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 35, "ar.viewshift.title.end", "Gi\u1EDD k\u1EBFt th\xFAc"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.detailForm.toTime);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 38, "common.sortOrder", "S\u1EAFp x\u1EBFp"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.detailForm.orderno);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 41, "common.status", "Tr\u1EA1ng th\xE1i"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.detailForm.activity);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzValue", 1)("nzLabel", \u0275\u0275pipeBind2(42, 44, "common.active", "Ho\u1EA1t \u0111\u1ED9ng"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzValue", 0)("nzLabel", \u0275\u0275pipeBind2(44, 47, "common.inactive", "Ng\u1EEBng"));
  }
}
function ViewShiftComponent_ng_container_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 71);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 72);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "shift.js.confirmDeleteShift", "Ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a ca n\xE0y v\xE0 to\xE0n b\u1ED9 d\u1EEF li\u1EC7u chi ti\u1EBFt c\u1EE7a n\xF3?"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedShiftLabel());
  }
}
function ViewShiftComponent_ng_container_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 71);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 72);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "shift.detail.confirmDelete", "Ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a tham s\u1ED1 n\xE0y?"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.deleteDetailTargetName);
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
  "common.saveSuccess",
  "common.saveFail",
  "common.deleteSuccess",
  "common.deleteFail",
  "common.loadFail",
  "common.noData",
  "common.totalRows",
  "common.status",
  "common.active",
  "common.inactive",
  "common.sortOrder",
  "common.nameVi",
  "common.nameEn",
  "common.nameZh",
  "common.nameKo",
  "common.placeholder.select",
  "shift.treeTitle",
  "shift.addShift",
  "shift.editShift",
  "shift.deleteShift",
  "shift.searchPlaceholder",
  "shift.paramLabel",
  "shift.addDetail",
  "shift.colPkNo",
  "shift.colItem",
  "shift.colBeginDayOffset",
  "shift.colEndDayOffset",
  "shift.modal.setupTitle",
  "shift.field.shiftId",
  "shift.field.shortname",
  "shift.field.datatype",
  "shift.field.deptDistinguish",
  "shift.field.deductTime",
  "shift.field.otTimeStart",
  "shift.field.otAllowance",
  "shift.field.shiftLength",
  "shift.detail.colItem",
  "shift.js.selectToEdit",
  "shift.js.titleEditPrefix",
  "shift.js.warnFillNames",
  "shift.js.selectToDelete",
  "shift.js.confirmDeleteShift",
  "shift.js.selectFirst",
  "shift.detail.addTitle",
  "shift.detail.editTitle",
  "shift.detail.msg.selectItem",
  "shift.detail.confirmDelete",
  "ar.viewshift.title.start",
  "ar.viewshift.title.end",
  "essDept.exportExcel"
];
var PAGE_SIZE_OPTIONS = [25, 50, 100, 200];
var EMPTY_SHIFT_FORM = {
  shiftNo: null,
  shiftId: "",
  nameVi: "",
  nameEn: "",
  nameZh: "",
  nameKo: "",
  shiftShortname: "",
  datatype: null,
  deptDistinguishNo: "",
  deductTime: null,
  otTimeStart: "",
  otAllowance: null,
  shiftLength: null,
  orderno: 0,
  activity: 1
};
var EMPTY_DETAIL_FORM = {
  pkNo: null,
  itemNo: null,
  beginDayOffset: 0,
  fromTime: null,
  endDayOffset: 0,
  toTime: null,
  orderno: 0,
  activity: 1
};
var ViewShiftComponent = class _ViewShiftComponent {
  constructor(api, i18n, message) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
  }
  api;
  i18n;
  message;
  pageSizeOptions = PAGE_SIZE_OPTIONS;
  shifts = signal(
    [],
    ...ngDevMode ? [{ debugName: "shifts" }] : (
      /* istanbul ignore next */
      []
    )
  );
  treeNodes = computed(
    () => this.shifts().filter((s) => s.activity === 1).map((s) => ({ title: s.nameVi || s.shiftShortname || s.shiftNo, key: s.shiftNo, isLeaf: true })),
    ...ngDevMode ? [{ debugName: "treeNodes" }] : (
      /* istanbul ignore next */
      []
    )
  );
  treeSearchValue = "";
  selectedShiftNo = null;
  selectedShiftLabel = signal(
    null,
    ...ngDevMode ? [{ debugName: "selectedShiftLabel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  panelTitle = computed(
    () => this.selectedShiftLabel() ? `${this.i18n.t("shift.paramLabel", "Tham s\u1ED1 ca l\xE0m vi\u1EC7c")}: ${this.selectedShiftLabel()}` : this.i18n.t("shift.paramLabel", "Tham s\u1ED1 ca l\xE0m vi\u1EC7c"),
    ...ngDevMode ? [{ debugName: "panelTitle" }] : (
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
  // ---- Modal Ca làm việc (AR_SHIFT010) ----
  shiftModalVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "shiftModalVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  shiftSaving = signal(
    false,
    ...ngDevMode ? [{ debugName: "shiftSaving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isNewShift = signal(
    true,
    ...ngDevMode ? [{ debugName: "isNewShift" }] : (
      /* istanbul ignore next */
      []
    )
  );
  shiftModalTitle = computed(
    () => this.isNewShift() ? this.i18n.t("shift.modal.setupTitle", "Thi\u1EBFt l\u1EADp Ca l\xE0m vi\u1EC7c (Shift)") : `${this.i18n.t("shift.js.titleEditPrefix", "S\u1EEDa Ca l\xE0m vi\u1EC7c: ")}${this.selectedShiftLabel() ?? ""}`,
    ...ngDevMode ? [{ debugName: "shiftModalTitle" }] : (
      /* istanbul ignore next */
      []
    )
  );
  shiftForm = __spreadValues({}, EMPTY_SHIFT_FORM);
  // ---- Modal Chi tiết ca (AR_SHIFT020) ----
  detailModalVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "detailModalVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  detailSaving = signal(
    false,
    ...ngDevMode ? [{ debugName: "detailSaving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isNewDetail = signal(
    true,
    ...ngDevMode ? [{ debugName: "isNewDetail" }] : (
      /* istanbul ignore next */
      []
    )
  );
  detailModalTitle = computed(
    () => this.isNewDetail() ? this.i18n.t("shift.detail.addTitle", "Th\xEAm m\u1EDBi Chi ti\u1EBFt") : this.i18n.t("shift.detail.editTitle", "C\u1EADp nh\u1EADt Chi ti\u1EBFt"),
    ...ngDevMode ? [{ debugName: "detailModalTitle" }] : (
      /* istanbul ignore next */
      []
    )
  );
  detailForm = __spreadProps(__spreadValues({}, EMPTY_DETAIL_FORM), { shiftNo: "" });
  deleteShiftVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "deleteShiftVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  deletingShift = signal(
    false,
    ...ngDevMode ? [{ debugName: "deletingShift" }] : (
      /* istanbul ignore next */
      []
    )
  );
  deleteDetailVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "deleteDetailVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  deletingDetail = signal(
    false,
    ...ngDevMode ? [{ debugName: "deletingDetail" }] : (
      /* istanbul ignore next */
      []
    )
  );
  deleteDetailTarget = null;
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadShiftTree();
    this.api.getItemOptions().subscribe({
      next: (list) => this.itemOptions.set(list ?? []),
      error: () => this.itemOptions.set([])
    });
  }
  itemLabel(opt) {
    return opt.nameVi || opt.shortName || opt.itemNo;
  }
  loadShiftTree() {
    this.api.searchShifts("").subscribe({
      next: (list) => {
        this.shifts.set(list ?? []);
        this.selectedShiftNo = null;
        this.selectedShiftLabel.set(null);
        this.rows.set([]);
      },
      error: () => this.shifts.set([])
    });
  }
  onTreeClick(event) {
    const node = event.node;
    if (!node)
      return;
    this.selectedShiftNo = node.key;
    this.selectedShiftLabel.set(node.title);
    this.searchDetails();
  }
  searchDetails() {
    if (!this.selectedShiftNo) {
      this.rows.set([]);
      return;
    }
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.searchShiftDetails(this.selectedShiftNo).subscribe({
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
  // ==================== AR_SHIFT010 CRUD ====================
  openAddShiftModal() {
    this.isNewShift.set(true);
    this.shiftForm = __spreadValues({}, EMPTY_SHIFT_FORM);
    this.shiftModalVisible.set(true);
  }
  openEditShiftModal() {
    if (!this.selectedShiftNo) {
      this.message.warning(this.i18n.t("shift.js.selectToEdit", "Vui l\xF2ng ch\u1ECDn 1 ca tr\xEAn c\xE2y \u0111\u1EC3 s\u1EEDa."));
      return;
    }
    this.api.getShiftById(this.selectedShiftNo).subscribe({
      next: (data) => {
        this.isNewShift.set(false);
        this.shiftForm = {
          shiftNo: data.shiftNo,
          shiftId: data.shiftId || "",
          nameVi: data.nameVi || "",
          nameEn: data.nameEn || "",
          nameZh: data.nameZh || "",
          nameKo: data.nameKo || "",
          shiftShortname: data.shiftShortname || "",
          datatype: data.datatype,
          deptDistinguishNo: data.deptDistinguishNo || "",
          deductTime: data.deductTime,
          otTimeStart: data.otTimeStart || "",
          otAllowance: data.otAllowance,
          shiftLength: data.shiftLength,
          orderno: data.orderno,
          activity: data.activity ?? 1
        };
        this.shiftModalVisible.set(true);
      },
      error: () => this.message.error(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"))
    });
  }
  closeShiftModal() {
    this.shiftModalVisible.set(false);
  }
  saveShiftForm() {
    if (!this.shiftForm.nameVi || !this.shiftForm.nameEn || !this.shiftForm.nameZh || !this.shiftForm.nameKo) {
      this.message.warning(this.i18n.t("shift.js.warnFillNames", "Vui l\xF2ng nh\u1EADp \u0111\u1EA7y \u0111\u1EE7 c\xE1c th\xF4ng tin b\u1EAFt bu\u1ED9c (4 T\xEAn)"));
      return;
    }
    const payload = {
      shiftNo: this.shiftForm.shiftNo,
      shiftId: this.shiftForm.shiftId,
      nameVi: this.shiftForm.nameVi,
      nameEn: this.shiftForm.nameEn,
      nameZh: this.shiftForm.nameZh,
      nameKo: this.shiftForm.nameKo,
      shiftShortname: this.shiftForm.shiftShortname,
      datatype: this.shiftForm.datatype,
      deptDistinguishNo: this.shiftForm.deptDistinguishNo,
      deductTime: this.shiftForm.deductTime,
      otTimeStart: this.shiftForm.otTimeStart,
      otAllowance: this.shiftForm.otAllowance,
      shiftLength: this.shiftForm.shiftLength,
      orderno: this.shiftForm.orderno,
      activity: this.shiftForm.activity
    };
    this.shiftSaving.set(true);
    this.api.saveShift(payload).subscribe({
      next: () => {
        this.shiftSaving.set(false);
        this.shiftModalVisible.set(false);
        this.message.success(this.i18n.t("common.saveSuccess", "L\u01B0u th\xE0nh c\xF4ng!"));
        this.loadShiftTree();
      },
      error: () => {
        this.shiftSaving.set(false);
        this.message.error(this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  openDeleteShiftConfirm() {
    if (!this.selectedShiftNo) {
      this.message.warning(this.i18n.t("shift.js.selectToDelete", "Vui l\xF2ng ch\u1ECDn 1 ca tr\xEAn c\xE2y \u0111\u1EC3 x\xF3a."));
      return;
    }
    this.deleteShiftVisible.set(true);
  }
  closeDeleteShiftConfirm() {
    this.deleteShiftVisible.set(false);
  }
  confirmDeleteShift() {
    if (!this.selectedShiftNo)
      return;
    this.deletingShift.set(true);
    this.api.deleteShift(this.selectedShiftNo).subscribe({
      next: () => {
        this.deletingShift.set(false);
        this.deleteShiftVisible.set(false);
        this.message.success(this.i18n.t("common.deleteSuccess", "X\xF3a th\xE0nh c\xF4ng!"));
        this.loadShiftTree();
      },
      error: () => {
        this.deletingShift.set(false);
        this.message.error(this.i18n.t("common.deleteFail", "X\xF3a th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  // ==================== AR_SHIFT020 CRUD ====================
  openAddDetailModal() {
    if (!this.selectedShiftNo) {
      this.message.warning(this.i18n.t("shift.js.selectFirst", "Vui l\xF2ng ch\u1ECDn 1 ca tr\xEAn danh s\xE1ch b\xEAn tr\xE1i tr\u01B0\u1EDBc."));
      return;
    }
    this.isNewDetail.set(true);
    this.detailForm = __spreadProps(__spreadValues({}, EMPTY_DETAIL_FORM), { shiftNo: this.selectedShiftNo });
    this.detailModalVisible.set(true);
  }
  openEditDetailModal(row) {
    this.isNewDetail.set(false);
    this.detailForm = {
      pkNo: row.pkNo,
      shiftNo: row.shiftNo,
      itemNo: row.itemNo,
      beginDayOffset: row.beginDayOffset,
      fromTime: this.parseHm(row.fromTimeStr),
      endDayOffset: row.endDayOffset,
      toTime: this.parseHm(row.toTimeStr),
      orderno: row.orderno,
      activity: row.activity ?? 1
    };
    this.detailModalVisible.set(true);
  }
  closeDetailModal() {
    this.detailModalVisible.set(false);
  }
  saveDetailForm() {
    if (!this.detailForm.itemNo) {
      this.message.warning(this.i18n.t("shift.detail.msg.selectItem", "Vui l\xF2ng ch\u1ECDn H\u1EA1ng m\u1EE5c (Item)."));
      return;
    }
    const payload = {
      pkNo: this.detailForm.pkNo,
      shiftNo: this.detailForm.shiftNo,
      itemNo: this.detailForm.itemNo,
      beginDayOffset: this.detailForm.beginDayOffset,
      fromTimeStr: this.formatHm(this.detailForm.fromTime),
      endDayOffset: this.detailForm.endDayOffset,
      toTimeStr: this.formatHm(this.detailForm.toTime),
      orderno: this.detailForm.orderno,
      activity: this.detailForm.activity
    };
    this.detailSaving.set(true);
    this.api.saveShiftDetail(payload).subscribe({
      next: () => {
        this.detailSaving.set(false);
        this.detailModalVisible.set(false);
        this.message.success(this.i18n.t("common.saveSuccess", "L\u01B0u th\xE0nh c\xF4ng!"));
        this.searchDetails();
      },
      error: () => {
        this.detailSaving.set(false);
        this.message.error(this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  openDeleteDetailConfirm(row) {
    this.deleteDetailTarget = row;
    this.deleteDetailVisible.set(true);
  }
  closeDeleteDetailConfirm() {
    this.deleteDetailVisible.set(false);
  }
  get deleteDetailTargetName() {
    return this.deleteDetailTarget ? `${this.deleteDetailTarget.itemName ?? this.deleteDetailTarget.itemNo}` : "";
  }
  confirmDeleteDetail() {
    if (!this.deleteDetailTarget?.pkNo)
      return;
    this.deletingDetail.set(true);
    this.api.deleteShiftDetail(this.deleteDetailTarget.pkNo).subscribe({
      next: () => {
        this.deletingDetail.set(false);
        this.deleteDetailVisible.set(false);
        this.message.success(this.i18n.t("common.deleteSuccess", "X\xF3a th\xE0nh c\xF4ng!"));
        this.searchDetails();
      },
      error: () => {
        this.deletingDetail.set(false);
        this.message.error(this.i18n.t("common.deleteFail", "X\xF3a th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  // ==================== Xuất Excel ====================
  /** Xuất excel client-side (bản gốc chỉ có nút Buttons của DataTables) - dùng thư viện xlsx (SheetJS)
   *  để tạo đúng file .xlsx nhị phân (xem CLAUDE.md). */
  exportExcel() {
    const headers = [
      this.i18n.t("common.stt", "STT"),
      this.i18n.t("shift.colPkNo", "PK No"),
      this.i18n.t("shift.colItem", "H\u1EA1ng m\u1EE5c"),
      this.i18n.t("shift.colBeginDayOffset", "\u0110\u1ED9 l\u1EC7ch ng\xE0y b\u1EAFt \u0111\u1EA7u"),
      this.i18n.t("ar.viewshift.title.start", "Gi\u1EDD b\u1EAFt \u0111\u1EA7u"),
      this.i18n.t("shift.colEndDayOffset", "\u0110\u1ED9 l\u1EC7ch ng\xE0y k\u1EBFt th\xFAc"),
      this.i18n.t("ar.viewshift.title.end", "Gi\u1EDD k\u1EBFt th\xFAc"),
      this.i18n.t("common.sortOrder", "S\u1EAFp x\u1EBFp"),
      this.i18n.t("common.status", "Tr\u1EA1ng th\xE1i")
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      r.pkNo,
      r.itemName,
      r.beginDayOffset,
      r.fromTimeStr,
      r.endDayOffset,
      r.toTimeStr,
      r.orderno,
      r.activity === 1 ? this.i18n.t("common.active", "Ho\u1EA1t \u0111\u1ED9ng") : this.i18n.t("common.inactive", "Ng\u1EEBng")
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "DanhSach");
    writeFileSync(workbook, `shift_detail_${this.selectedShiftNo ?? "list"}.xlsx`);
  }
  parseHm(hm) {
    if (!hm)
      return null;
    const [h, m] = hm.split(":").map((v) => parseInt(v, 10));
    if (Number.isNaN(h) || Number.isNaN(m))
      return null;
    const d = /* @__PURE__ */ new Date();
    d.setHours(h, m, 0, 0);
    return d;
  }
  formatHm(d) {
    return d ? formatDate(d, "HH:mm", "vi") : null;
  }
  static \u0275fac = function ViewShiftComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewShiftComponent)(\u0275\u0275directiveInject(ViewShiftService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewShiftComponent, selectors: [["app-view-shift"]], decls: 90, vars: 137, consts: [["vsTable", ""], ["vsTotalTpl", ""], [1, "row"], [1, "col-md-3", "mb-3"], [3, "nzTitle"], [1, "d-flex", "gap-2", "mb-2"], ["nz-input", "", "name", "vsTreeSearch", 3, "ngModelChange", "ngModel", "placeholder"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click", "title"], [1, "bx", "bx-plus"], ["nz-button", "", "nzType", "default", "type", "button", 3, "click", "title"], [1, "bx", "bx-edit", "text-warning"], [1, "bx", "bx-trash", "text-danger"], [1, "vs-tree-scroll"], ["nzSelectMode", "", 3, "nzClick", "nzData", "nzSearchValue", "nzSelectedKeys"], [1, "col-md-9", "mb-3"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3", "flex-wrap", "gap-2"], [1, "fw-bold"], [1, "d-flex", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], ["nz-button", "", "nzType", "default", "type", "button", 1, "vs-btn-export", 3, "click"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "90px"], ["nzWidth", "180px"], ["nzWidth", "130px", 1, "text-center"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "90px", 1, "text-center"], ["nzWidth", "120px", 1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["nzWidth", "800px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], ["nzWidth", "700px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "10", 1, "text-center", "text-muted"], [1, "text-center"], [3, "nzColor"], ["nz-button", "", "nzType", "text", "nzSize", "small", 3, "click", "title"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label", "fw-semibold"], ["nz-input", "", "name", "vsFormShiftId", 3, "ngModelChange", "ngModel"], [1, "text-danger"], ["nz-input", "", "name", "vsFormNameVi", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vsFormNameEn", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vsFormNameZh", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vsFormNameKo", 3, "ngModelChange", "ngModel"], [1, "col-md-4"], ["nz-input", "", "name", "vsFormShortname", 3, "ngModelChange", "ngModel"], ["name", "vsFormDatatype", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vsFormDeptDistinguish", 3, "ngModelChange", "ngModel"], ["name", "vsFormDeductTime", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vsFormOtTimeStart", "placeholder", "HH:mm", 3, "ngModelChange", "ngModel"], ["name", "vsFormOtAllowance", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vsFormShiftLength", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vsFormOrderno", 1, "w-100", 3, "ngModelChange", "ngModel"], [1, "form-label", "fw-semibold", "d-block"], ["name", "vsFormActivity", 1, "w-100", 3, "ngModelChange", "ngModel"], [3, "nzValue", "nzLabel"], [1, "col-md-12"], ["name", "vsDetailFormItemNo", "nzShowSearch", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["name", "vsDetailFormBeginDayOffset", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vsDetailFormFromTime", "nzFormat", "HH:mm", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vsDetailFormEndDayOffset", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vsDetailFormToTime", "nzFormat", "HH:mm", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vsDetailFormOrderno", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vsDetailFormActivity", 1, "w-100", 3, "ngModelChange", "ngModel"], [1, "mb-1"], [1, "fw-bold", "mb-0"]], template: function ViewShiftComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "nz-card", 4);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementStart(4, "div", 5)(5, "input", 6);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewShiftComponent_Template_input_ngModelChange_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.treeSearchValue, $event) || (ctx.treeSearchValue = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(7, "button", 7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275listener("click", function ViewShiftComponent_Template_button_click_7_listener() {
        return ctx.openAddShiftModal();
      });
      \u0275\u0275element(9, "i", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 9);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275listener("click", function ViewShiftComponent_Template_button_click_10_listener() {
        return ctx.openEditShiftModal();
      });
      \u0275\u0275element(12, "i", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 9);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275listener("click", function ViewShiftComponent_Template_button_click_13_listener() {
        return ctx.openDeleteShiftConfirm();
      });
      \u0275\u0275element(15, "i", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 12)(17, "nz-tree", 13);
      \u0275\u0275listener("nzClick", function ViewShiftComponent_Template_nz_tree_nzClick_17_listener($event) {
        return ctx.onTreeClick($event);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(18, "div", 14)(19, "nz-card")(20, "div", 15)(21, "span", 16);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 17)(24, "button", 18);
      \u0275\u0275listener("click", function ViewShiftComponent_Template_button_click_24_listener() {
        return ctx.openAddDetailModal();
      });
      \u0275\u0275element(25, "i", 8);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "button", 19);
      \u0275\u0275listener("click", function ViewShiftComponent_Template_button_click_28_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(29, "i", 20);
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(32, ViewShiftComponent_nz_alert_32_Template, 1, 1, "nz-alert", 21);
      \u0275\u0275elementStart(33, "nz-table", 22, 0)(35, "thead")(36, "tr")(37, "th", 23);
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "th", 24);
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "th", 25);
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "th", 26);
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "th", 27);
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
      \u0275\u0275elementStart(64, "th", 28);
      \u0275\u0275text(65);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(67, "tbody");
      \u0275\u0275template(68, ViewShiftComponent_tr_68_Template, 4, 4, "tr", 30)(69, ViewShiftComponent_tr_69_Template, 29, 25, "tr", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275template(70, ViewShiftComponent_ng_template_70_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(72, "nz-modal", 32);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275pipe(74, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewShiftComponent_Template_nz_modal_nzOnCancel_72_listener() {
        return ctx.closeShiftModal();
      })("nzOnOk", function ViewShiftComponent_Template_nz_modal_nzOnOk_72_listener() {
        return ctx.saveShiftForm();
      });
      \u0275\u0275template(75, ViewShiftComponent_ng_container_75_Template, 85, 80, "ng-container", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "nz-modal", 34);
      \u0275\u0275pipe(77, "translate");
      \u0275\u0275pipe(78, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewShiftComponent_Template_nz_modal_nzOnCancel_76_listener() {
        return ctx.closeDetailModal();
      })("nzOnOk", function ViewShiftComponent_Template_nz_modal_nzOnOk_76_listener() {
        return ctx.saveDetailForm();
      });
      \u0275\u0275template(79, ViewShiftComponent_ng_container_79_Template, 45, 50, "ng-container", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "nz-modal", 35);
      \u0275\u0275pipe(81, "translate");
      \u0275\u0275pipe(82, "translate");
      \u0275\u0275pipe(83, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewShiftComponent_Template_nz_modal_nzOnCancel_80_listener() {
        return ctx.closeDeleteShiftConfirm();
      })("nzOnOk", function ViewShiftComponent_Template_nz_modal_nzOnOk_80_listener() {
        return ctx.confirmDeleteShift();
      });
      \u0275\u0275template(84, ViewShiftComponent_ng_container_84_Template, 6, 5, "ng-container", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "nz-modal", 35);
      \u0275\u0275pipe(86, "translate");
      \u0275\u0275pipe(87, "translate");
      \u0275\u0275pipe(88, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewShiftComponent_Template_nz_modal_nzOnCancel_85_listener() {
        return ctx.closeDeleteDetailConfirm();
      })("nzOnOk", function ViewShiftComponent_Template_nz_modal_nzOnOk_85_listener() {
        return ctx.confirmDeleteDetail();
      });
      \u0275\u0275template(89, ViewShiftComponent_ng_container_89_Template, 6, 5, "ng-container", 33);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const vsTable_r10 = \u0275\u0275reference(34);
      const vsTotalTpl_r11 = \u0275\u0275reference(71);
      \u0275\u0275advance(2);
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(3, 52, "shift.treeTitle", "Danh s\xE1ch Ca l\xE0m vi\u1EC7c"));
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.treeSearchValue);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(6, 55, "shift.searchPlaceholder", "T\xECm ki\u1EBFm ca..."));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("title", \u0275\u0275pipeBind2(8, 58, "shift.addShift", "Th\xEAm ca m\u1EDBi"));
      \u0275\u0275advance(3);
      \u0275\u0275property("title", \u0275\u0275pipeBind2(11, 61, "shift.editShift", "S\u1EEDa ca \u0111ang ch\u1ECDn"));
      \u0275\u0275advance(3);
      \u0275\u0275property("title", \u0275\u0275pipeBind2(14, 64, "shift.deleteShift", "X\xF3a ca \u0111ang ch\u1ECDn"));
      \u0275\u0275advance(4);
      \u0275\u0275property("nzData", ctx.treeNodes())("nzSearchValue", ctx.treeSearchValue)("nzSelectedKeys", ctx.selectedShiftNo ? \u0275\u0275pureFunction1(133, _c0, ctx.selectedShiftNo) : \u0275\u0275pureFunction0(135, _c1));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.panelTitle());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(27, 67, "shift.addDetail", "Th\xEAm chi ti\u1EBFt"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(31, 70, "essDept.exportExcel", "Xu\u1EA5t excel"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", vsTotalTpl_r11)("nzScroll", \u0275\u0275pureFunction0(136, _c2));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 73, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 76, "shift.colPkNo", "PK No"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 79, "shift.colItem", "H\u1EA1ng m\u1EE5c (Item)"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 82, "shift.colBeginDayOffset", "\u0110\u1ED9 l\u1EC7ch ng\xE0y b/\u0111\u1EA7u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 85, "ar.viewshift.title.start", "Gi\u1EDD b\u1EAFt \u0111\u1EA7u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 88, "shift.colEndDayOffset", "\u0110\u1ED9 l\u1EC7ch ng\xE0y k/th\xFAc"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 91, "ar.viewshift.title.end", "Gi\u1EDD k\u1EBFt th\xFAc"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(60, 94, "common.sortOrder", "S\u1EAFp x\u1EBFp"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(63, 97, "common.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(66, 100, "common.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", vsTable_r10.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.shiftModalVisible())("nzTitle", ctx.shiftModalTitle())("nzOkLoading", ctx.shiftSaving())("nzOkText", \u0275\u0275pipeBind2(73, 103, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(74, 106, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(4);
      \u0275\u0275property("nzVisible", ctx.detailModalVisible())("nzTitle", ctx.detailModalTitle())("nzOkLoading", ctx.detailSaving())("nzOkText", \u0275\u0275pipeBind2(77, 109, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(78, 112, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(4);
      \u0275\u0275property("nzVisible", ctx.deleteShiftVisible())("nzTitle", \u0275\u0275pipeBind2(81, 115, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deletingShift())("nzOkText", \u0275\u0275pipeBind2(82, 118, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(83, 121, "common.cancel", "H\u1EE7y"));
      \u0275\u0275advance(5);
      \u0275\u0275property("nzVisible", ctx.deleteDetailVisible())("nzTitle", \u0275\u0275pipeBind2(86, 124, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deletingDetail())("nzOkText", \u0275\u0275pipeBind2(87, 127, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(88, 130, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzInputNumberModule, NzInputNumberComponent, NzSelectModule, NzOptionComponent, NzSelectComponent, NzTimePickerModule, NzTimePickerComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, NzTagModule, NzTagComponent, NzTreeModule, NzTreeComponent, TranslatePipe], styles: ["\n.vs-btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n.vs-tree-scroll[_ngcontent-%COMP%] {\n  max-height: 700px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=view-shift.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewShiftComponent, [{
    type: Component,
    args: [{ selector: "app-view-shift", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzInputNumberModule,
      NzSelectModule,
      NzTimePickerModule,
      NzButtonModule,
      NzModalModule,
      NzAlertModule,
      NzTagModule,
      NzTreeModule,
      TranslatePipe
    ], template: `<div class="row">
  <!-- C\xE2y Ca l\xE0m vi\u1EC7c b\xEAn tr\xE1i -->
  <div class="col-md-3 mb-3">
    <nz-card [nzTitle]="'shift.treeTitle' | translate:'Danh s\xE1ch Ca l\xE0m vi\u1EC7c'">
      <div class="d-flex gap-2 mb-2">
        <input nz-input [(ngModel)]="treeSearchValue" name="vsTreeSearch"
               [placeholder]="'shift.searchPlaceholder' | translate:'T\xECm ki\u1EBFm ca...'">
        <button nz-button nzType="primary" type="button" [title]="'shift.addShift' | translate:'Th\xEAm ca m\u1EDBi'" (click)="openAddShiftModal()">
          <i class="bx bx-plus"></i>
        </button>
        <button nz-button nzType="default" type="button" [title]="'shift.editShift' | translate:'S\u1EEDa ca \u0111ang ch\u1ECDn'" (click)="openEditShiftModal()">
          <i class="bx bx-edit text-warning"></i>
        </button>
        <button nz-button nzType="default" type="button" [title]="'shift.deleteShift' | translate:'X\xF3a ca \u0111ang ch\u1ECDn'" (click)="openDeleteShiftConfirm()">
          <i class="bx bx-trash text-danger"></i>
        </button>
      </div>
      <div class="vs-tree-scroll">
        <nz-tree [nzData]="treeNodes()" [nzSearchValue]="treeSearchValue" nzSelectMode
                 [nzSelectedKeys]="selectedShiftNo ? [selectedShiftNo] : []"
                 (nzClick)="onTreeClick($event)"></nz-tree>
      </div>
    </nz-card>
  </div>

  <!-- B\u1EA3ng tham s\u1ED1 ca b\xEAn ph\u1EA3i -->
  <div class="col-md-9 mb-3">
    <nz-card>
      <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <span class="fw-bold">{{ panelTitle() }}</span>
        <div class="d-flex gap-2 flex-wrap">
          <button nz-button nzType="primary" type="button" (click)="openAddDetailModal()">
            <i class="bx bx-plus"></i> {{ 'shift.addDetail' | translate:'Th\xEAm chi ti\u1EBFt' }}
          </button>
          <button nz-button nzType="default" type="button" class="vs-btn-export" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'essDept.exportExcel' | translate:'Xu\u1EA5t excel' }}
          </button>
        </div>
      </div>

      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <!-- nzWidth khai b\xE1o cho t\u1EEBng c\u1ED9t \u0111\u1EC3 \u0111\u1ED3ng b\u1ED9 \u0111\u1ED9 r\u1ED9ng header/body khi d\xF9ng nzScroll. -->
      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="vsTotalTpl"
                [nzScroll]="{ x: '1100px', y: 'calc(100vh - 460px)' }" #vsTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th nzWidth="90px">{{ 'shift.colPkNo' | translate:'PK No' }}</th>
            <th nzWidth="180px">{{ 'shift.colItem' | translate:'H\u1EA1ng m\u1EE5c (Item)' }}</th>
            <th class="text-center" nzWidth="130px">{{ 'shift.colBeginDayOffset' | translate:'\u0110\u1ED9 l\u1EC7ch ng\xE0y b/\u0111\u1EA7u' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'ar.viewshift.title.start' | translate:'Gi\u1EDD b\u1EAFt \u0111\u1EA7u' }}</th>
            <th class="text-center" nzWidth="130px">{{ 'shift.colEndDayOffset' | translate:'\u0110\u1ED9 l\u1EC7ch ng\xE0y k/th\xFAc' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'ar.viewshift.title.end' | translate:'Gi\u1EDD k\u1EBFt th\xFAc' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'common.sortOrder' | translate:'S\u1EAFp x\u1EBFp' }}</th>
            <th class="text-center" nzWidth="120px">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'common.action' | translate:'Thao t\xE1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="10" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of vsTable.data; let i = index">
            <td class="text-center">{{ i + 1 }}</td>
            <td class="text-center">{{ row.pkNo }}</td>
            <td [attr.title]="row.itemName || null">{{ row.itemName }}</td>
            <td class="text-center">{{ row.beginDayOffset }}</td>
            <td class="text-center">{{ row.fromTimeStr }}</td>
            <td class="text-center">{{ row.endDayOffset }}</td>
            <td class="text-center">{{ row.toTimeStr }}</td>
            <td class="text-center">{{ row.orderno }}</td>
            <td class="text-center">
              <nz-tag [nzColor]="row.activity === 1 ? 'success' : 'default'">
                {{ row.activity === 1 ? ('common.active' | translate:'Ho\u1EA1t \u0111\u1ED9ng') : ('common.inactive' | translate:'Ng\u1EEBng') }}
              </nz-tag>
            </td>
            <td class="text-center">
              <button nz-button nzType="text" nzSize="small" [title]="'common.edit' | translate:'S\u1EEDa'" (click)="openEditDetailModal(row)">
                <i class="bx bx-edit text-warning"></i>
              </button>
              <button nz-button nzType="text" nzSize="small" [title]="'common.delete' | translate:'X\xF3a'" (click)="openDeleteDetailConfirm(row)">
                <i class="bx bx-trash text-danger"></i>
              </button>
            </td>
          </tr>
        </tbody>
        <ng-template #vsTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal Ca l\xE0m vi\u1EC7c (AR_SHIFT010) -->
<nz-modal [nzVisible]="shiftModalVisible()" [nzTitle]="shiftModalTitle()" nzWidth="800px"
          (nzOnCancel)="closeShiftModal()" (nzOnOk)="saveShiftForm()" [nzOkLoading]="shiftSaving()"
          [nzOkText]="'common.save' | translate:'L\u01B0u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <div class="row g-3">
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'shift.field.shiftId' | translate:'M\xE3 nh\xF3m (Shift ID)' }}</label>
        <input nz-input [(ngModel)]="shiftForm.shiftId" name="vsFormShiftId">
      </div>
      <div class="col-md-6"></div>

      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'common.nameVi' | translate:'T\xEAn Ti\u1EBFng Vi\u1EC7t' }} <span class="text-danger">*</span></label>
        <input nz-input [(ngModel)]="shiftForm.nameVi" name="vsFormNameVi">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'common.nameEn' | translate:'T\xEAn Ti\u1EBFng Anh' }} <span class="text-danger">*</span></label>
        <input nz-input [(ngModel)]="shiftForm.nameEn" name="vsFormNameEn">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'common.nameZh' | translate:'T\xEAn Ti\u1EBFng Trung' }} <span class="text-danger">*</span></label>
        <input nz-input [(ngModel)]="shiftForm.nameZh" name="vsFormNameZh">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'common.nameKo' | translate:'T\xEAn Ti\u1EBFng H\xE0n' }} <span class="text-danger">*</span></label>
        <input nz-input [(ngModel)]="shiftForm.nameKo" name="vsFormNameKo">
      </div>

      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'shift.field.shortname' | translate:'T\xEAn r\xFAt g\u1ECDn (Shortname)' }}</label>
        <input nz-input [(ngModel)]="shiftForm.shiftShortname" name="vsFormShortname">
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'shift.field.datatype' | translate:'Ki\u1EC3u d\u1EEF li\u1EC7u (Datatype)' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="shiftForm.datatype" name="vsFormDatatype"></nz-input-number>
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'shift.field.deptDistinguish' | translate:'Ph\xE2n chia ph\xF2ng ban' }}</label>
        <input nz-input [(ngModel)]="shiftForm.deptDistinguishNo" name="vsFormDeptDistinguish">
      </div>

      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'shift.field.deductTime' | translate:'Th\u1EDDi gian kh\u1EA5u tr\u1EEB' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="shiftForm.deductTime" name="vsFormDeductTime"></nz-input-number>
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'shift.field.otTimeStart' | translate:'Gi\u1EDD b\u1EAFt \u0111\u1EA7u OT' }}</label>
        <input nz-input [(ngModel)]="shiftForm.otTimeStart" name="vsFormOtTimeStart" placeholder="HH:mm">
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'shift.field.otAllowance' | translate:'Ph\u1EE5 c\u1EA5p OT' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="shiftForm.otAllowance" name="vsFormOtAllowance"></nz-input-number>
      </div>

      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'shift.field.shiftLength' | translate:'\u0110\u1ED9 d\xE0i ca (Shift length)' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="shiftForm.shiftLength" name="vsFormShiftLength"></nz-input-number>
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'common.sortOrder' | translate:'S\u1EAFp x\u1EBFp' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="shiftForm.orderno" name="vsFormOrderno"></nz-input-number>
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold d-block">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</label>
        <nz-select class="w-100" [(ngModel)]="shiftForm.activity" name="vsFormActivity">
          <nz-option [nzValue]="1" [nzLabel]="'common.active' | translate:'Ho\u1EA1t \u0111\u1ED9ng'"></nz-option>
          <nz-option [nzValue]="0" [nzLabel]="'common.inactive' | translate:'Ng\u1EEBng'"></nz-option>
        </nz-select>
      </div>
    </div>
  </ng-container>
</nz-modal>

<!-- Modal Chi ti\u1EBFt ca (AR_SHIFT020) -->
<nz-modal [nzVisible]="detailModalVisible()" [nzTitle]="detailModalTitle()" nzWidth="700px"
          (nzOnCancel)="closeDetailModal()" (nzOnOk)="saveDetailForm()" [nzOkLoading]="detailSaving()"
          [nzOkText]="'common.save' | translate:'L\u01B0u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <div class="row g-3">
      <div class="col-md-12">
        <label class="form-label fw-semibold">{{ 'shift.detail.colItem' | translate:'H\u1EA1ng m\u1EE5c (Item)' }} <span class="text-danger">*</span></label>
        <nz-select class="w-100" [(ngModel)]="detailForm.itemNo" name="vsDetailFormItemNo" nzShowSearch
                   [nzPlaceHolder]="'common.placeholder.select' | translate:'-- Ch\u1ECDn --'">
          <nz-option *ngFor="let opt of itemOptions()" [nzValue]="opt.itemNo" [nzLabel]="itemLabel(opt)"></nz-option>
        </nz-select>
      </div>

      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'shift.colBeginDayOffset' | translate:'\u0110\u1ED9 l\u1EC7ch ng\xE0y b\u1EAFt \u0111\u1EA7u' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="detailForm.beginDayOffset" name="vsDetailFormBeginDayOffset"></nz-input-number>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'ar.viewshift.title.start' | translate:'Gi\u1EDD b\u1EAFt \u0111\u1EA7u' }}</label>
        <nz-time-picker class="w-100" [(ngModel)]="detailForm.fromTime" name="vsDetailFormFromTime" nzFormat="HH:mm"></nz-time-picker>
      </div>

      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'shift.colEndDayOffset' | translate:'\u0110\u1ED9 l\u1EC7ch ng\xE0y k\u1EBFt th\xFAc' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="detailForm.endDayOffset" name="vsDetailFormEndDayOffset"></nz-input-number>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'ar.viewshift.title.end' | translate:'Gi\u1EDD k\u1EBFt th\xFAc' }}</label>
        <nz-time-picker class="w-100" [(ngModel)]="detailForm.toTime" name="vsDetailFormToTime" nzFormat="HH:mm"></nz-time-picker>
      </div>

      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'common.sortOrder' | translate:'S\u1EAFp x\u1EBFp' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="detailForm.orderno" name="vsDetailFormOrderno"></nz-input-number>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold d-block">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</label>
        <nz-select class="w-100" [(ngModel)]="detailForm.activity" name="vsDetailFormActivity">
          <nz-option [nzValue]="1" [nzLabel]="'common.active' | translate:'Ho\u1EA1t \u0111\u1ED9ng'"></nz-option>
          <nz-option [nzValue]="0" [nzLabel]="'common.inactive' | translate:'Ng\u1EEBng'"></nz-option>
        </nz-select>
      </div>
    </div>
  </ng-container>
</nz-modal>

<!-- Modal x\xE1c nh\u1EADn x\xF3a Ca l\xE0m vi\u1EC7c -->
<nz-modal [nzVisible]="deleteShiftVisible()" [nzTitle]="'common.confirm' | translate:'X\xE1c nh\u1EADn'"
          (nzOnCancel)="closeDeleteShiftConfirm()" (nzOnOk)="confirmDeleteShift()" [nzOkLoading]="deletingShift()"
          [nzOkText]="'common.confirm' | translate:'X\xE1c nh\u1EADn'" [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'">
  <ng-container *nzModalContent>
    <p class="mb-1">{{ 'shift.js.confirmDeleteShift' | translate:'Ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a ca n\xE0y v\xE0 to\xE0n b\u1ED9 d\u1EEF li\u1EC7u chi ti\u1EBFt c\u1EE7a n\xF3?' }}</p>
    <p class="fw-bold mb-0">{{ selectedShiftLabel() }}</p>
  </ng-container>
</nz-modal>

<!-- Modal x\xE1c nh\u1EADn x\xF3a Chi ti\u1EBFt -->
<nz-modal [nzVisible]="deleteDetailVisible()" [nzTitle]="'common.confirm' | translate:'X\xE1c nh\u1EADn'"
          (nzOnCancel)="closeDeleteDetailConfirm()" (nzOnOk)="confirmDeleteDetail()" [nzOkLoading]="deletingDetail()"
          [nzOkText]="'common.confirm' | translate:'X\xE1c nh\u1EADn'" [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'">
  <ng-container *nzModalContent>
    <p class="mb-1">{{ 'shift.detail.confirmDelete' | translate:'Ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a tham s\u1ED1 n\xE0y?' }}</p>
    <p class="fw-bold mb-0">{{ deleteDetailTargetName }}</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-shift/view-shift.component.css */\n.vs-btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n.vs-tree-scroll {\n  max-height: 700px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=view-shift.component.css.map */\n"] }]
  }], () => [{ type: ViewShiftService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewShiftComponent, { className: "ViewShiftComponent", filePath: "src/app/view-shift/view-shift.component.ts", lineNumber: 133 });
})();
export {
  ViewShiftComponent
};
//# debugId=e7fa5472-1846-5599-9c3a-3f0c43523a14
//# sourceMappingURL=chunk-WULZR3IW.js.map
