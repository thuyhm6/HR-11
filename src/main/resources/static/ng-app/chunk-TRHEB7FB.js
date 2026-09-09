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

// src/app/view-cycle/view-cycle.service.ts
var API_BASE = "/ar/attendanceSettings/api/cycle";
var ViewCycleService = class _ViewCycleService {
  constructor(http) {
    this.http = http;
  }
  http;
  search(statNo) {
    let httpParams = new HttpParams();
    if (statNo)
      httpParams = httpParams.set("statNo", statNo);
    return this.http.get(API_BASE, { params: httpParams, withCredentials: true });
  }
  save(payload) {
    return this.http.post(`${API_BASE}/save`, payload, { withCredentials: true });
  }
  delete(statNo) {
    return this.http.delete(`${API_BASE}/delete/${statNo}`, { withCredentials: true });
  }
  static \u0275fac = function ViewCycleService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewCycleService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewCycleService, factory: _ViewCycleService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewCycleService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-cycle/view-cycle.component.ts
var _c0 = () => ({ x: "1700px", y: "calc(100vh - 420px)" });
function ViewCycleComponent_nz_alert_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 33);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ViewCycleComponent_tr_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 34);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewCycleComponent_tr_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 35);
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
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 35);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 35);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 35);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 35);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 35);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 35);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 35);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td", 35)(28, "nz-tag", 36);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "td", 35)(33, "button", 37);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275listener("click", function ViewCycleComponent_tr_81_Template_button_click_33_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditModal(row_r4));
    });
    \u0275\u0275element(35, "i", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 37);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275listener("click", function ViewCycleComponent_tr_81_Template_button_click_36_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDeleteConfirm(row_r4));
    });
    \u0275\u0275element(38, "i", 39);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r5 + 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.statNo || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.statNo);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.nameVi || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.nameVi);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.nameEn || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.nameEn);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.nameZh || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.nameZh);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.nameKo || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.nameKo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.startDay);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.endDay);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.toDmy(row_r4.validDateFrom));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.toDmy(row_r4.validDateTo));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.beginMonthOffset);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.endMonthOffset);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.orderno);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColor", row_r4.activity === 1 ? "success" : "default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.activity === 1 ? \u0275\u0275pipeBind2(30, 22, "common.active", "Ho\u1EA1t \u0111\u1ED9ng") : \u0275\u0275pipeBind2(31, 25, "common.inactive", "Ng\u1EEBng"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(34, 28, "common.edit", "S\u1EEDa"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(37, 31, "common.delete", "X\xF3a"));
  }
}
function ViewCycleComponent_ng_template_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r6 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r6, " ");
  }
}
function ViewCycleComponent_ng_container_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h6", 40);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 41)(5, "div", 42)(6, "label", 43);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "span", 44);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCycleComponent_ng_container_87_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nameVi, $event) || (ctx_r1.form.nameVi = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 42)(13, "label", 43);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCycleComponent_ng_container_87_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nameEn, $event) || (ctx_r1.form.nameEn = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 42)(18, "label", 43);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCycleComponent_ng_container_87_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nameZh, $event) || (ctx_r1.form.nameZh = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 42)(23, "label", 43);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCycleComponent_ng_container_87_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nameKo, $event) || (ctx_r1.form.nameKo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "h6", 40);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 49)(31, "div", 42)(32, "label", 43);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "nz-input-number", 50);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCycleComponent_ng_container_87_Template_nz_input_number_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.startDay, $event) || (ctx_r1.form.startDay = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 42)(37, "label", 43);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "nz-input-number", 51);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCycleComponent_ng_container_87_Template_nz_input_number_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.endDay, $event) || (ctx_r1.form.endDay = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 42)(42, "label", 43);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "nz-date-picker", 52);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCycleComponent_ng_container_87_Template_nz_date_picker_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.validDateFrom, $event) || (ctx_r1.form.validDateFrom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 42)(47, "label", 43);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "nz-date-picker", 53);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCycleComponent_ng_container_87_Template_nz_date_picker_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.validDateTo, $event) || (ctx_r1.form.validDateTo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 42)(52, "label", 43);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "nz-input-number", 54);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCycleComponent_ng_container_87_Template_nz_input_number_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.beginMonthOffset, $event) || (ctx_r1.form.beginMonthOffset = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 42)(57, "label", 43);
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "nz-input-number", 55);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCycleComponent_ng_container_87_Template_nz_input_number_ngModelChange_60_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.endMonthOffset, $event) || (ctx_r1.form.endMonthOffset = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 42)(62, "label", 43);
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "nz-input-number", 56);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCycleComponent_ng_container_87_Template_nz_input_number_ngModelChange_65_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.orderno, $event) || (ctx_r1.form.orderno = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 42)(67, "label", 57);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "nz-select", 58);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCycleComponent_ng_container_87_Template_nz_select_ngModelChange_70_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.activity, $event) || (ctx_r1.form.activity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(71, "nz-option", 59);
    \u0275\u0275pipe(72, "translate");
    \u0275\u0275element(73, "nz-option", 59);
    \u0275\u0275pipe(74, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 30, "common.multilingualInfo", "Th\xF4ng tin \u0111a ng\xF4n ng\u1EEF"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(8, 33, "common.nameVi", "T\xEAn Ti\u1EBFng Vi\u1EC7t"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nameVi);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 36, "common.nameEn", "T\xEAn Ti\u1EBFng Anh"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nameEn);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 39, "common.nameZh", "T\xEAn Ti\u1EBFng Trung"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nameZh);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 42, "common.nameKo", "T\xEAn Ti\u1EBFng H\xE0n"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nameKo);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 45, "ar.viewcycle.title.dateRange", "Th\xF4ng s\u1ED1 kho\u1EA3ng ng\xE0y"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 48, "ar.viewcycle.title.kaishiri", "Ng\xE0y b\u1EAFt \u0111\u1EA7u"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.startDay);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 51, "ar.viewcycle.title.jieshuri", "Ng\xE0y k\u1EBFt th\xFAc"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.endDay);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 54, "ar.viewcycle.title.tungay", "T\u1EEB ng\xE0y"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.validDateFrom);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 57, "ar.viewcycle.title.denngay", "\u0110\u1EBFn ng\xE0y"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.validDateTo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 60, "ar.viewcycle.title.beginMonthOffset", "B\u1EAFt \u0111\u1EA7u l\u1EC7ch th\xE1ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.beginMonthOffset);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(59, 63, "ar.viewcycle.title.endMonthOffset", "K\u1EBFt th\xFAc l\u1EC7ch th\xE1ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.endMonthOffset);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(64, 66, "common.sortOrder", "S\u1EAFp x\u1EBFp"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.orderno);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 69, "common.status", "Tr\u1EA1ng th\xE1i"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.activity);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzValue", 1)("nzLabel", \u0275\u0275pipeBind2(72, 72, "common.active", "Ho\u1EA1t \u0111\u1ED9ng"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzValue", 0)("nzLabel", \u0275\u0275pipeBind2(74, 75, "common.inactive", "Ng\u1EEBng"));
  }
}
function ViewCycleComponent_ng_container_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 60);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 61);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "ar.viewcycle.msg.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a b\u1EA3n ghi n\xE0y? T\u1EA5t c\u1EA3 th\xF4ng tin \u0111a ng\xF4n ng\u1EEF c\u0169ng s\u1EBD b\u1ECB x\xF3a."));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.deleteTargetName);
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
  "common.status",
  "common.active",
  "common.inactive",
  "common.sortOrder",
  "common.multilingualInfo",
  "common.nameVi",
  "common.nameEn",
  "common.nameZh",
  "common.nameKo",
  "ar.viewcycle.title.chinhanh",
  "ar.viewcycle.placeholder.search",
  "ar.viewcycle.title.kaishiri",
  "ar.viewcycle.title.jieshuri",
  "ar.viewcycle.title.tungay",
  "ar.viewcycle.title.denngay",
  "ar.viewcycle.title.beginMonthOffset",
  "ar.viewcycle.title.endMonthOffset",
  "ar.viewcycle.title.dateRange",
  "ar.viewcycle.title.addTitle",
  "ar.viewcycle.title.editTitle",
  "ar.viewcycle.msg.pleaseEnterNameVi",
  "ar.viewcycle.msg.confirmDelete",
  "essDept.exportExcel"
];
var PAGE_SIZE_OPTIONS = [25, 50, 100, 200];
var EMPTY_FORM = {
  statNo: null,
  nameVi: "",
  nameEn: "",
  nameZh: "",
  nameKo: "",
  startDay: null,
  endDay: null,
  validDateFrom: null,
  validDateTo: null,
  beginMonthOffset: 0,
  endMonthOffset: 0,
  orderno: null,
  activity: 1
};
var ViewCycleComponent = class _ViewCycleComponent {
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
  searchStatNo = "";
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
    () => this.isNew() ? this.i18n.t("ar.viewcycle.title.addTitle", "Th\xEAm m\u1EDBi chi nh\xE1nh") : this.i18n.t("ar.viewcycle.title.editTitle", "C\u1EADp nh\u1EADt chi nh\xE1nh"),
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
    this.search();
  }
  search() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.search(this.searchStatNo).subscribe({
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
    this.searchStatNo = "";
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
    this.form = {
      statNo: row.statNo,
      nameVi: row.nameVi || "",
      nameEn: row.nameEn || "",
      nameZh: row.nameZh || "",
      nameKo: row.nameKo || "",
      startDay: row.startDay,
      endDay: row.endDay,
      validDateFrom: row.validDateFrom ? new Date(row.validDateFrom) : null,
      validDateTo: row.validDateTo ? new Date(row.validDateTo) : null,
      beginMonthOffset: row.beginMonthOffset ?? 0,
      endMonthOffset: row.endMonthOffset ?? 0,
      orderno: row.orderno,
      activity: row.activity ?? 1
    };
    this.modalVisible.set(true);
  }
  closeModal() {
    this.modalVisible.set(false);
  }
  saveForm() {
    if (!this.form.nameVi) {
      this.message.warning(this.i18n.t("ar.viewcycle.msg.pleaseEnterNameVi", "Vui l\xF2ng nh\u1EADp T\xEAn ti\u1EBFng Vi\u1EC7t"));
      return;
    }
    const payload = {
      statNo: this.form.statNo,
      nameVi: this.form.nameVi,
      nameEn: this.form.nameEn,
      nameZh: this.form.nameZh,
      nameKo: this.form.nameKo,
      startDay: this.form.startDay,
      endDay: this.form.endDay,
      validDateFrom: this.formatYmd(this.form.validDateFrom),
      validDateTo: this.formatYmd(this.form.validDateTo),
      beginMonthOffset: this.form.beginMonthOffset,
      endMonthOffset: this.form.endMonthOffset,
      orderno: this.form.orderno,
      activity: this.form.activity
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
    return this.deleteTarget ? `${this.deleteTarget.statNo} - ${this.deleteTarget.nameVi ?? ""}` : "";
  }
  confirmDelete() {
    if (!this.deleteTarget?.statNo)
      return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.statNo).subscribe({
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
  /** Xuất excel client-side (bản gốc chỉ có nút Buttons của DataTables) - dùng thư viện xlsx (SheetJS)
   *  để tạo đúng file .xlsx nhị phân (xem CLAUDE.md). */
  exportExcel() {
    const headers = [
      this.i18n.t("common.stt", "STT"),
      this.i18n.t("ar.viewcycle.title.chinhanh", "Chi nh\xE1nh"),
      this.i18n.t("common.nameVi", "T\xEAn Vi\u1EC7t"),
      this.i18n.t("common.nameEn", "T\xEAn Anh"),
      this.i18n.t("common.nameZh", "T\xEAn Trung"),
      this.i18n.t("common.nameKo", "T\xEAn H\xE0n"),
      this.i18n.t("ar.viewcycle.title.kaishiri", "Ng\xE0y b\u1EAFt \u0111\u1EA7u"),
      this.i18n.t("ar.viewcycle.title.jieshuri", "Ng\xE0y k\u1EBFt th\xFAc"),
      this.i18n.t("ar.viewcycle.title.tungay", "T\u1EEB ng\xE0y"),
      this.i18n.t("ar.viewcycle.title.denngay", "\u0110\u1EBFn ng\xE0y"),
      this.i18n.t("ar.viewcycle.title.beginMonthOffset", "B\u1EAFt \u0111\u1EA7u l\u1EC7ch th\xE1ng"),
      this.i18n.t("ar.viewcycle.title.endMonthOffset", "K\u1EBFt th\xFAc l\u1EC7ch th\xE1ng"),
      this.i18n.t("common.sortOrder", "S\u1EAFp x\u1EBFp"),
      this.i18n.t("common.status", "Tr\u1EA1ng th\xE1i")
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      r.statNo,
      r.nameVi,
      r.nameEn,
      r.nameZh,
      r.nameKo,
      r.startDay,
      r.endDay,
      this.toDmy(r.validDateFrom),
      this.toDmy(r.validDateTo),
      r.beginMonthOffset,
      r.endMonthOffset,
      r.orderno,
      r.activity === 1 ? this.i18n.t("common.active", "Ho\u1EA1t \u0111\u1ED9ng") : this.i18n.t("common.inactive", "Ng\u1EEBng")
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "DanhSach");
    writeFileSync(workbook, "cycle_branch_list.xlsx");
  }
  /** Chuyển 'yyyy-MM-dd' (BE) sang 'dd/MM/yyyy' để hiển thị trong bảng (theo CLAUDE.md). */
  toDmy(ymd) {
    if (!ymd)
      return "";
    const [y, m, d] = ymd.split("-");
    return y && m && d ? `${d}/${m}/${y}` : ymd;
  }
  formatYmd(d) {
    return d ? formatDate(d, "yyyy-MM-dd", "vi") : null;
  }
  static \u0275fac = function ViewCycleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewCycleComponent)(\u0275\u0275directiveInject(ViewCycleService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewCycleComponent, selectors: [["app-view-cycle"]], decls: 93, vars: 121, consts: [["vcTable", ""], ["vcTotalTpl", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-4"], [1, "form-label"], ["nz-input", "", "name", "vcSearchStatNo", 3, "ngModelChange", "ngModel", "placeholder"], [1, "col-md-8", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], [1, "col-12", "d-flex", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzType", "default", "type", "button", 1, "vc-btn-export", 3, "click"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "110px"], ["nzWidth", "150px"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "130px", 1, "text-center"], ["nzWidth", "90px", 1, "text-center"], ["nzWidth", "120px", 1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["nzWidth", "800px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "15", 1, "text-center", "text-muted"], [1, "text-center"], [3, "nzColor"], ["nz-button", "", "nzType", "text", "nzSize", "small", 3, "click", "title"], [1, "bx", "bx-edit", "text-warning"], [1, "bx", "bx-trash", "text-danger"], [1, "mb-3", "text-primary", "border-bottom", "pb-2"], [1, "row", "g-3", "mb-4"], [1, "col-md-6"], [1, "form-label", "fw-semibold"], [1, "text-danger"], ["nz-input", "", "name", "vcFormNameVi", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vcFormNameEn", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vcFormNameZh", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vcFormNameKo", 3, "ngModelChange", "ngModel"], [1, "row", "g-3"], ["name", "vcFormStartDay", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vcFormEndDay", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vcFormValidDateFrom", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vcFormValidDateTo", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vcFormBeginMonthOffset", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vcFormEndMonthOffset", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vcFormOrderno", 1, "w-100", 3, "ngModelChange", "ngModel"], [1, "form-label", "fw-semibold", "d-block"], ["name", "vcFormActivity", 1, "w-100", 3, "ngModelChange", "ngModel"], [3, "nzValue", "nzLabel"], [1, "mb-1"], [1, "fw-bold", "mb-0"]], template: function ViewCycleComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "nz-card", 4)(3, "form", 5);
      \u0275\u0275listener("ngSubmit", function ViewCycleComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 6)(5, "label", 7);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewCycleComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchStatNo, $event) || (ctx.searchStatNo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 9)(11, "button", 10);
      \u0275\u0275element(12, "i", 11);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 12);
      \u0275\u0275listener("click", function ViewCycleComponent_Template_button_click_15_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(16, "i", 13);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 14)(20, "button", 15);
      \u0275\u0275listener("click", function ViewCycleComponent_Template_button_click_20_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(21, "i", 16);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 17);
      \u0275\u0275listener("click", function ViewCycleComponent_Template_button_click_24_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(25, "i", 18);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(28, "nz-card");
      \u0275\u0275template(29, ViewCycleComponent_nz_alert_29_Template, 1, 1, "nz-alert", 19);
      \u0275\u0275elementStart(30, "nz-table", 20, 0)(32, "thead")(33, "tr")(34, "th", 21);
      \u0275\u0275text(35);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th", 22);
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "th", 23);
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "th", 23);
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "th", 23);
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "th", 23);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "th", 24);
      \u0275\u0275text(53);
      \u0275\u0275pipe(54, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "th", 24);
      \u0275\u0275text(56);
      \u0275\u0275pipe(57, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "th", 24);
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "th", 24);
      \u0275\u0275text(62);
      \u0275\u0275pipe(63, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "th", 25);
      \u0275\u0275text(65);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "th", 25);
      \u0275\u0275text(68);
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "th", 26);
      \u0275\u0275text(71);
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "th", 27);
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "th", 26);
      \u0275\u0275text(77);
      \u0275\u0275pipe(78, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(79, "tbody");
      \u0275\u0275template(80, ViewCycleComponent_tr_80_Template, 4, 4, "tr", 28)(81, ViewCycleComponent_tr_81_Template, 39, 34, "tr", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275template(82, ViewCycleComponent_ng_template_82_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(84, "nz-modal", 30);
      \u0275\u0275pipe(85, "translate");
      \u0275\u0275pipe(86, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewCycleComponent_Template_nz_modal_nzOnCancel_84_listener() {
        return ctx.closeModal();
      })("nzOnOk", function ViewCycleComponent_Template_nz_modal_nzOnOk_84_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(87, ViewCycleComponent_ng_container_87_Template, 75, 78, "ng-container", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "nz-modal", 32);
      \u0275\u0275pipe(89, "translate");
      \u0275\u0275pipe(90, "translate");
      \u0275\u0275pipe(91, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewCycleComponent_Template_nz_modal_nzOnCancel_88_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function ViewCycleComponent_Template_nz_modal_nzOnOk_88_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(92, ViewCycleComponent_ng_container_92_Template, 6, 5, "ng-container", 31);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const vcTable_r8 = \u0275\u0275reference(31);
      const vcTotalTpl_r9 = \u0275\u0275reference(83);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 42, "ar.viewcycle.title.chinhanh", "Chi nh\xE1nh"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchStatNo);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 45, "ar.viewcycle.placeholder.search", "Nh\u1EADp m\xE3 chi nh\xE1nh / kho\u1EA3ng m\xE3 / t\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 48, "common.search", "T\xECm ki\u1EBFm"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(18, 51, "common.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(23, 54, "common.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(27, 57, "essDept.exportExcel", "Xu\u1EA5t excel"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", vcTotalTpl_r9)("nzScroll", \u0275\u0275pureFunction0(120, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 60, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 63, "ar.viewcycle.title.chinhanh", "Chi nh\xE1nh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 66, "common.nameVi", "T\xEAn Vi\u1EC7t"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 69, "common.nameEn", "T\xEAn Anh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 72, "common.nameZh", "T\xEAn Trung"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 75, "common.nameKo", "T\xEAn H\xE0n"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 78, "ar.viewcycle.title.kaishiri", "Ng\xE0y b\u1EAFt \u0111\u1EA7u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 81, "ar.viewcycle.title.jieshuri", "Ng\xE0y k\u1EBFt th\xFAc"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(60, 84, "ar.viewcycle.title.tungay", "T\u1EEB ng\xE0y"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(63, 87, "ar.viewcycle.title.denngay", "\u0110\u1EBFn ng\xE0y"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(66, 90, "ar.viewcycle.title.beginMonthOffset", "B\u1EAFt \u0111\u1EA7u l\u1EC7ch th\xE1ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 93, "ar.viewcycle.title.endMonthOffset", "K\u1EBFt th\xFAc l\u1EC7ch th\xE1ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(72, 96, "common.sortOrder", "S\u1EAFp x\u1EBFp"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(75, 99, "common.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(78, 102, "common.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", vcTable_r8.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", ctx.modalTitle())("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(85, 105, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(86, 108, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(4);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(89, 111, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(90, 114, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(91, 117, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzInputNumberModule, NzInputNumberComponent, NzSelectModule, NzOptionComponent, NzSelectComponent, NzDatePickerModule, NzDatePickerComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, NzTagModule, NzTagComponent, TranslatePipe], styles: ["\n.vc-btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=view-cycle.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewCycleComponent, [{
    type: Component,
    args: [{ selector: "app-view-cycle", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzInputNumberModule,
      NzSelectModule,
      NzDatePickerModule,
      NzButtonModule,
      NzModalModule,
      NzAlertModule,
      NzTagModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm - \u0111\u1EE9ng im khi cu\u1ED9n (xem .sticky-filter-card trong styles.css) -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3" (ngSubmit)="search()">
        <div class="col-md-4">
          <label class="form-label">{{ 'ar.viewcycle.title.chinhanh' | translate:'Chi nh\xE1nh' }}</label>
          <input nz-input [(ngModel)]="searchStatNo" name="vcSearchStatNo"
                 [placeholder]="'ar.viewcycle.placeholder.search' | translate:'Nh\u1EADp m\xE3 chi nh\xE1nh / kho\u1EA3ng m\xE3 / t\xEAn'">
        </div>
        <div class="col-md-8 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'common.search' | translate:'T\xECm ki\u1EBFm' }}
          </button>
          <button nz-button type="button" (click)="clearSearch()">
            <i class="bx bx-x"></i> {{ 'common.clearFilter' | translate:'X\xF3a l\u1ECDc' }}
          </button>
        </div>
        <div class="col-12 d-flex gap-2 flex-wrap">
          <button nz-button nzType="primary" type="button" (click)="openAddModal()">
            <i class="bx bx-plus"></i> {{ 'common.addNew' | translate:'Th\xEAm m\u1EDBi' }}
          </button>
          <button nz-button nzType="default" type="button" class="vc-btn-export" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'essDept.exportExcel' | translate:'Xu\u1EA5t excel' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <!-- nzWidth khai b\xE1o cho t\u1EEBng c\u1ED9t \u0111\u1EC3 \u0111\u1ED3ng b\u1ED9 \u0111\u1ED9 r\u1ED9ng header/body khi d\xF9ng nzScroll. -->
      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="vcTotalTpl"
                [nzScroll]="{ x: '1700px', y: 'calc(100vh - 420px)' }" #vcTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th nzWidth="110px">{{ 'ar.viewcycle.title.chinhanh' | translate:'Chi nh\xE1nh' }}</th>
            <th nzWidth="150px">{{ 'common.nameVi' | translate:'T\xEAn Vi\u1EC7t' }}</th>
            <th nzWidth="150px">{{ 'common.nameEn' | translate:'T\xEAn Anh' }}</th>
            <th nzWidth="150px">{{ 'common.nameZh' | translate:'T\xEAn Trung' }}</th>
            <th nzWidth="150px">{{ 'common.nameKo' | translate:'T\xEAn H\xE0n' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'ar.viewcycle.title.kaishiri' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'ar.viewcycle.title.jieshuri' | translate:'Ng\xE0y k\u1EBFt th\xFAc' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'ar.viewcycle.title.tungay' | translate:'T\u1EEB ng\xE0y' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'ar.viewcycle.title.denngay' | translate:'\u0110\u1EBFn ng\xE0y' }}</th>
            <th class="text-center" nzWidth="130px">{{ 'ar.viewcycle.title.beginMonthOffset' | translate:'B\u1EAFt \u0111\u1EA7u l\u1EC7ch th\xE1ng' }}</th>
            <th class="text-center" nzWidth="130px">{{ 'ar.viewcycle.title.endMonthOffset' | translate:'K\u1EBFt th\xFAc l\u1EC7ch th\xE1ng' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'common.sortOrder' | translate:'S\u1EAFp x\u1EBFp' }}</th>
            <th class="text-center" nzWidth="120px">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'common.action' | translate:'Thao t\xE1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="15" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of vcTable.data; let i = index">
            <td class="text-center">{{ i + 1 }}</td>
            <td [attr.title]="row.statNo || null">{{ row.statNo }}</td>
            <td [attr.title]="row.nameVi || null">{{ row.nameVi }}</td>
            <td [attr.title]="row.nameEn || null">{{ row.nameEn }}</td>
            <td [attr.title]="row.nameZh || null">{{ row.nameZh }}</td>
            <td [attr.title]="row.nameKo || null">{{ row.nameKo }}</td>
            <td class="text-center">{{ row.startDay }}</td>
            <td class="text-center">{{ row.endDay }}</td>
            <td class="text-center">{{ toDmy(row.validDateFrom) }}</td>
            <td class="text-center">{{ toDmy(row.validDateTo) }}</td>
            <td class="text-center">{{ row.beginMonthOffset }}</td>
            <td class="text-center">{{ row.endMonthOffset }}</td>
            <td class="text-center">{{ row.orderno }}</td>
            <td class="text-center">
              <nz-tag [nzColor]="row.activity === 1 ? 'success' : 'default'">
                {{ row.activity === 1 ? ('common.active' | translate:'Ho\u1EA1t \u0111\u1ED9ng') : ('common.inactive' | translate:'Ng\u1EEBng') }}
              </nz-tag>
            </td>
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
        <ng-template #vcTotalTpl let-total>
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
    <h6 class="mb-3 text-primary border-bottom pb-2">{{ 'common.multilingualInfo' | translate:'Th\xF4ng tin \u0111a ng\xF4n ng\u1EEF' }}</h6>
    <div class="row g-3 mb-4">
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'common.nameVi' | translate:'T\xEAn Ti\u1EBFng Vi\u1EC7t' }} <span class="text-danger">*</span></label>
        <input nz-input [(ngModel)]="form.nameVi" name="vcFormNameVi">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'common.nameEn' | translate:'T\xEAn Ti\u1EBFng Anh' }}</label>
        <input nz-input [(ngModel)]="form.nameEn" name="vcFormNameEn">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'common.nameZh' | translate:'T\xEAn Ti\u1EBFng Trung' }}</label>
        <input nz-input [(ngModel)]="form.nameZh" name="vcFormNameZh">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'common.nameKo' | translate:'T\xEAn Ti\u1EBFng H\xE0n' }}</label>
        <input nz-input [(ngModel)]="form.nameKo" name="vcFormNameKo">
      </div>
    </div>

    <h6 class="mb-3 text-primary border-bottom pb-2">{{ 'ar.viewcycle.title.dateRange' | translate:'Th\xF4ng s\u1ED1 kho\u1EA3ng ng\xE0y' }}</h6>
    <div class="row g-3">
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'ar.viewcycle.title.kaishiri' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.startDay" name="vcFormStartDay"></nz-input-number>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'ar.viewcycle.title.jieshuri' | translate:'Ng\xE0y k\u1EBFt th\xFAc' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.endDay" name="vcFormEndDay"></nz-input-number>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'ar.viewcycle.title.tungay' | translate:'T\u1EEB ng\xE0y' }}</label>
        <nz-date-picker class="w-100" [(ngModel)]="form.validDateFrom" name="vcFormValidDateFrom" nzFormat="dd/MM/yyyy"></nz-date-picker>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'ar.viewcycle.title.denngay' | translate:'\u0110\u1EBFn ng\xE0y' }}</label>
        <nz-date-picker class="w-100" [(ngModel)]="form.validDateTo" name="vcFormValidDateTo" nzFormat="dd/MM/yyyy"></nz-date-picker>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'ar.viewcycle.title.beginMonthOffset' | translate:'B\u1EAFt \u0111\u1EA7u l\u1EC7ch th\xE1ng' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.beginMonthOffset" name="vcFormBeginMonthOffset"></nz-input-number>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'ar.viewcycle.title.endMonthOffset' | translate:'K\u1EBFt th\xFAc l\u1EC7ch th\xE1ng' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.endMonthOffset" name="vcFormEndMonthOffset"></nz-input-number>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'common.sortOrder' | translate:'S\u1EAFp x\u1EBFp' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.orderno" name="vcFormOrderno"></nz-input-number>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold d-block">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.activity" name="vcFormActivity">
          <nz-option [nzValue]="1" [nzLabel]="'common.active' | translate:'Ho\u1EA1t \u0111\u1ED9ng'"></nz-option>
          <nz-option [nzValue]="0" [nzLabel]="'common.inactive' | translate:'Ng\u1EEBng'"></nz-option>
        </nz-select>
      </div>
    </div>
  </ng-container>
</nz-modal>

<!-- Modal x\xE1c nh\u1EADn x\xF3a -->
<nz-modal [nzVisible]="deleteVisible()" [nzTitle]="'common.confirm' | translate:'X\xE1c nh\u1EADn'"
          (nzOnCancel)="closeDeleteConfirm()" (nzOnOk)="confirmDelete()" [nzOkLoading]="deleting()"
          [nzOkText]="'common.confirm' | translate:'X\xE1c nh\u1EADn'" [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'">
  <ng-container *nzModalContent>
    <p class="mb-1">{{ 'ar.viewcycle.msg.confirmDelete' | translate:'B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a b\u1EA3n ghi n\xE0y? T\u1EA5t c\u1EA3 th\xF4ng tin \u0111a ng\xF4n ng\u1EEF c\u0169ng s\u1EBD b\u1ECB x\xF3a.' }}</p>
    <p class="fw-bold mb-0">{{ deleteTargetName }}</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-cycle/view-cycle.component.css */\n.vc-btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=view-cycle.component.css.map */\n"] }]
  }], () => [{ type: ViewCycleService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewCycleComponent, { className: "ViewCycleComponent", filePath: "src/app/view-cycle/view-cycle.component.ts", lineNumber: 99 });
})();
export {
  ViewCycleComponent
};
//# debugId=42080313-f7cb-595b-bfc3-9469700950d4
//# sourceMappingURL=chunk-TRHEB7FB.js.map
