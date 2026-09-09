import {
  NzMessageService
} from "./chunk-XWW7CXU6.js";
import {
  NzModalModule,
  NzModalService
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
  NzCardComponent,
  NzCardModule
} from "./chunk-FNWKNPAX.js";
import {
  NzCheckboxComponent,
  NzCheckboxModule,
  NzSpinComponent,
  NzSpinModule
} from "./chunk-VWYGF7JF.js";
import {
  NzOptionComponent,
  NzSelectComponent,
  NzSelectModule
} from "./chunk-2QLZSMGV.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTW5U2M5.js";

// src/app/view-pa-result/view-pa-result.service.ts
var API_BASE = "/pa/salary/result/api";
var ViewPaResultService = class _ViewPaResultService {
  constructor(http) {
    this.http = http;
  }
  http;
  getPaySchedules() {
    return this.http.get("/pa/workManagement/api/paySchedule", { withCredentials: true });
  }
  getAuthorizedDepartments() {
    return this.http.get("/pa/wagebase/api/supervisor/authorized-departments", { withCredentials: true });
  }
  getSectionItems() {
    return this.http.get(`${API_BASE}/sectionItems`, { withCredentials: true });
  }
  getSavedItems(isUse, itemType) {
    const params = new HttpParams().set("isUse", isUse).set("itemType", itemType);
    return this.http.get(`${API_BASE}/savedItems`, { params, withCredentials: true });
  }
  save(payload) {
    return this.http.post(`${API_BASE}/save`, payload, { withCredentials: true });
  }
  exportExcelUrl(params) {
    const httpParams = new HttpParams({ fromObject: __spreadValues({}, params) });
    return `${API_BASE}/exportExcel?${httpParams.toString()}`;
  }
  static \u0275fac = function ViewPaResultService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewPaResultService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewPaResultService, factory: _ViewPaResultService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewPaResultService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-pa-result/view-pa-result.component.ts
var _c0 = () => ({ standalone: true });
function ViewPaResultComponent_nz_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 31);
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    \u0275\u0275property("nzValue", s_r2.payScheduleNo)("nzLabel", s_r2.payDate + (s_r2.salaryDistinName ? " " + s_r2.salaryDistinName : ""));
  }
}
function ViewPaResultComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.deptTreeErrorMessage());
  }
}
function ViewPaResultComponent_nz_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 31);
  }
  if (rf & 2) {
    const o_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzValue", o_r4.value)("nzLabel", ctx_r2.i18n.t(o_r4.key, o_r4.fallback));
  }
}
function ViewPaResultComponent_nz_option_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 31);
  }
  if (rf & 2) {
    const o_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzValue", o_r5.value)("nzLabel", ctx_r2.i18n.t(o_r5.key, o_r5.fallback));
  }
}
function ViewPaResultComponent_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 24);
    \u0275\u0275listener("ngModelChange", function ViewPaResultComponent_ng_template_54_Template_label_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleSectionAll(ctx_r2.hrItems, $event));
    });
    \u0275\u0275elementStart(1, "span", 33);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    \u0275\u0275property("ngModel", false)("ngModelOptions", \u0275\u0275pureFunction0(6, _c0));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 3, "pa.result.hrItems", "H\u1EA1ng m\u1EE5c nh\xE2n s\u1EF1"));
  }
}
function ViewPaResultComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"), " ");
  }
}
function ViewPaResultComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "label", 36);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaResultComponent_div_59_Template_label_ngModelChange_1_listener($event) {
      const row_r8 = \u0275\u0275restoreView(_r7).$implicit;
      \u0275\u0275twoWayBindingSet(row_r8.checked, $event) || (row_r8.checked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(2, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaResultComponent_div_59_Template_input_ngModelChange_2_listener($event) {
      const row_r8 = \u0275\u0275restoreView(_r7).$implicit;
      \u0275\u0275twoWayBindingSet(row_r8.orderNo, $event) || (row_r8.orderNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(3, "span", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", row_r8.checked);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(6, _c0));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", row_r8.orderNo);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c0));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r8.itemName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r8.itemName);
  }
}
function ViewPaResultComponent_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 24);
    \u0275\u0275listener("ngModelChange", function ViewPaResultComponent_ng_template_60_Template_label_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleSectionAll(ctx_r2.attendanceItems, $event));
    });
    \u0275\u0275elementStart(1, "span", 33);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    \u0275\u0275property("ngModel", false)("ngModelOptions", \u0275\u0275pureFunction0(6, _c0));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 3, "pa.result.attendanceItems", "H\u1EA1ng m\u1EE5c ch\u1EA5m c\xF4ng"));
  }
}
function ViewPaResultComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"), " ");
  }
}
function ViewPaResultComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "label", 36);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaResultComponent_div_65_Template_label_ngModelChange_1_listener($event) {
      const row_r11 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(row_r11.checked, $event) || (row_r11.checked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(2, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaResultComponent_div_65_Template_input_ngModelChange_2_listener($event) {
      const row_r11 = \u0275\u0275restoreView(_r10).$implicit;
      \u0275\u0275twoWayBindingSet(row_r11.orderNo, $event) || (row_r11.orderNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(3, "span", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", row_r11.checked);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(6, _c0));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", row_r11.orderNo);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c0));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r11.itemName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r11.itemName);
  }
}
function ViewPaResultComponent_ng_template_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 24);
    \u0275\u0275listener("ngModelChange", function ViewPaResultComponent_ng_template_66_Template_label_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleSectionAll(ctx_r2.inputItems, $event));
    });
    \u0275\u0275elementStart(1, "span", 33);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    \u0275\u0275property("ngModel", false)("ngModelOptions", \u0275\u0275pureFunction0(6, _c0));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 3, "pa.result.inputItems", "H\u1EA1ng m\u1EE5c nh\u1EADp"));
  }
}
function ViewPaResultComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"), " ");
  }
}
function ViewPaResultComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "label", 36);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaResultComponent_div_71_Template_label_ngModelChange_1_listener($event) {
      const row_r14 = \u0275\u0275restoreView(_r13).$implicit;
      \u0275\u0275twoWayBindingSet(row_r14.checked, $event) || (row_r14.checked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(2, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaResultComponent_div_71_Template_input_ngModelChange_2_listener($event) {
      const row_r14 = \u0275\u0275restoreView(_r13).$implicit;
      \u0275\u0275twoWayBindingSet(row_r14.orderNo, $event) || (row_r14.orderNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(3, "span", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", row_r14.checked);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(6, _c0));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", row_r14.orderNo);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c0));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r14.itemName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r14.itemName);
  }
}
function ViewPaResultComponent_ng_template_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 24);
    \u0275\u0275listener("ngModelChange", function ViewPaResultComponent_ng_template_72_Template_label_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleSectionAll(ctx_r2.computeItems, $event));
    });
    \u0275\u0275elementStart(1, "span", 33);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    \u0275\u0275property("ngModel", false)("ngModelOptions", \u0275\u0275pureFunction0(6, _c0));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 3, "pa.result.computeItems", "H\u1EA1ng m\u1EE5c t\xEDnh"));
  }
}
function ViewPaResultComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"), " ");
  }
}
function ViewPaResultComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "label", 36);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaResultComponent_div_77_Template_label_ngModelChange_1_listener($event) {
      const row_r17 = \u0275\u0275restoreView(_r16).$implicit;
      \u0275\u0275twoWayBindingSet(row_r17.checked, $event) || (row_r17.checked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(2, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaResultComponent_div_77_Template_input_ngModelChange_2_listener($event) {
      const row_r17 = \u0275\u0275restoreView(_r16).$implicit;
      \u0275\u0275twoWayBindingSet(row_r17.orderNo, $event) || (row_r17.orderNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(3, "span", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r17 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", row_r17.checked);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(6, _c0));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", row_r17.orderNo);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(7, _c0));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r17.itemName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r17.itemName);
  }
}
var I18N_KEYS = [
  "pa.result.paySchedule",
  "pa.result.dept",
  "pa.result.deptPlaceholder",
  "pa.result.isUse",
  "pa.result.itemType",
  "pa.result.search",
  "pa.result.save",
  "pa.result.exportExcel",
  "pa.result.selectAll",
  "pa.result.selectInverse",
  "pa.result.hrItems",
  "pa.result.attendanceItems",
  "pa.result.inputItems",
  "pa.result.computeItems",
  "pa.result.confirmSave",
  "pa.result.saveSuccess",
  "pa.result.msgSelectIsUse",
  "pa.result.msgSelectType",
  "pa.result.msgSelectPaySchedule",
  "pa.result.msgNoItemSelected",
  "pa.result.isUse.1",
  "pa.result.isUse.2",
  "pa.result.isUse.3",
  "pa.result.isUse.4",
  "pa.result.isUse.5",
  "pa.result.isUse.6",
  "pa.result.itemType.1",
  "pa.result.itemType.2",
  "pa.result.itemType.3",
  "pa.result.itemType.4",
  "common.select",
  "common.loading",
  "common.noData",
  "common.loadFail",
  "common.action"
];
var IS_USE_OPTIONS = [
  { value: 1, key: "pa.result.isUse.1", fallback: "\u0110\u1ED1i chi\u1EBFu chi ti\u1EBFt" },
  { value: 2, key: "pa.result.isUse.2", fallback: "B\xE1o c\xE1o ch\xEAnh l\u1EC7ch l\u01B0\u01A1ng" },
  { value: 3, key: "pa.result.isUse.3", fallback: "C\xE1c kho\u1EA3n tr\u1EE3 c\u1EA5p - kh\u1EA5u tr\u1EEB - b\u1EA3o hi\u1EC3m" },
  { value: 4, key: "pa.result.isUse.4", fallback: "\u0110\u1ED1i chi\u1EBFu h\u1EA1ng m\u1EE5c - k\u1EBFt qu\u1EA3 - chi tr\u1EA3 - b\u1EA3o hi\u1EC3m" },
  { value: 5, key: "pa.result.isUse.5", fallback: "L\u01B0\u01A1ng th\xE1ng/n\u0103m chi ti\u1EBFt" },
  { value: 6, key: "pa.result.isUse.6", fallback: "Phi\u1EBFu l\u01B0\u01A1ng" }
];
var ITEM_TYPE_OPTIONS = [
  { value: 1, key: "pa.result.itemType.1", fallback: "Kho\u1EA3n tr\u1EA3" },
  { value: 2, key: "pa.result.itemType.2", fallback: "Kho\u1EA3n tr\u1EEB" },
  { value: 3, key: "pa.result.itemType.3", fallback: "BH" },
  { value: 4, key: "pa.result.itemType.4", fallback: "C\xE1c m\u1EE5c ti\xEAu chu\u1EA9n" }
];
var ViewPaResultComponent = class _ViewPaResultComponent {
  constructor(api, i18n, message, modal) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
    this.modal = modal;
  }
  api;
  i18n;
  message;
  modal;
  isUseOptions = IS_USE_OPTIONS;
  itemTypeOptions = ITEM_TYPE_OPTIONS;
  schedules = signal(
    [],
    ...ngDevMode ? [{ debugName: "schedules" }] : (
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
  deptTreeErrorMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "deptTreeErrorMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  deptChildrenMap = /* @__PURE__ */ new Map();
  loadingSections = signal(
    false,
    ...ngDevMode ? [{ debugName: "loadingSections" }] : (
      /* istanbul ignore next */
      []
    )
  );
  searching = signal(
    false,
    ...ngDevMode ? [{ debugName: "searching" }] : (
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
  hrItems = [];
  attendanceItems = [];
  inputItems = [];
  computeItems = [];
  payScheduleNo = null;
  deptNos = [];
  isUse = null;
  itemType = null;
  selectAllFlag = false;
  selectInverseFlag = false;
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadSchedules();
    this.loadDeptTree();
    this.loadSections();
  }
  loadSchedules() {
    this.api.getPaySchedules().subscribe({
      next: (list) => {
        this.schedules.set(list ?? []);
        if (list && list.length > 0)
          this.payScheduleNo = list[0].payScheduleNo;
      },
      error: () => this.message.warning(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"))
    });
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
  /** nz-tree-select chỉ trả về key của node được tick trực tiếp - mở rộng xuống các phòng ban con để
   *  khớp hành vi cascade của widget DeptTree.js gốc. */
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
  toRow(item) {
    const itemName = item.itemName || item.itemId || item.itemNo;
    return { itemNo: item.itemNo, itemId: item.itemId, itemName, checked: false, orderNo: null };
  }
  loadSections() {
    this.loadingSections.set(true);
    this.api.getSectionItems().subscribe({
      next: (data) => {
        this.hrItems = (data.hrItems ?? []).map((i) => this.toRow(i));
        this.attendanceItems = (data.attendanceItems ?? []).map((i) => this.toRow(i));
        this.inputItems = (data.inputItems ?? []).map((i) => this.toRow(i));
        this.computeItems = (data.computeItems ?? []).map((i) => this.toRow(i));
        this.loadingSections.set(false);
      },
      error: () => {
        this.loadingSections.set(false);
        this.message.error(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  allRows() {
    return [...this.hrItems, ...this.attendanceItems, ...this.inputItems, ...this.computeItems];
  }
  validateIsUseAndType() {
    if (!this.isUse) {
      this.message.warning(this.i18n.t("pa.result.msgSelectIsUse", "Vui l\xF2ng ch\u1ECDn H\u1EA1ng m\u1EE5c t\xEDch ch\u1ECDn!"));
      return false;
    }
    if (!this.itemType) {
      this.message.warning(this.i18n.t("pa.result.msgSelectType", "Vui l\xF2ng ch\u1ECDn Ph\xE2n bi\u1EC7t h\u1EA1ng m\u1EE5c!"));
      return false;
    }
    return true;
  }
  search() {
    if (!this.validateIsUseAndType())
      return;
    this.searching.set(true);
    this.api.getSavedItems(this.isUse, this.itemType).subscribe({
      next: (saved) => {
        this.markSaved(saved ?? []);
        this.searching.set(false);
      },
      error: () => {
        this.searching.set(false);
        this.message.error(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  markSaved(saved) {
    const savedMap = new Map(saved.map((s) => [String(s.itemNo), s.orderNo ?? null]));
    this.allRows().forEach((row) => {
      if (savedMap.has(row.itemNo)) {
        row.checked = true;
        row.orderNo = savedMap.get(row.itemNo) ?? null;
      } else {
        row.checked = false;
        row.orderNo = null;
      }
    });
  }
  save() {
    if (!this.validateIsUseAndType())
      return;
    this.modal.confirm({
      nzTitle: this.i18n.t("common.action", "Thao t\xE1c"),
      nzContent: this.i18n.t("pa.result.confirmSave", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n l\u01B0u c\u1EA5u h\xECnh n\xE0y?"),
      nzOnOk: () => this.doSave()
    });
  }
  doSave() {
    const items = this.allRows().filter((r) => r.checked).map((r) => ({ itemNo: r.itemNo, itemId: r.itemId, itemName: r.itemName, orderNo: r.orderNo }));
    this.saving.set(true);
    this.api.save({ isUse: this.isUse, itemType: this.itemType, items }).subscribe({
      next: (res) => {
        this.saving.set(false);
        this.message.success(res.message || this.i18n.t("pa.result.saveSuccess", "L\u01B0u th\xE0nh c\xF4ng!"));
      },
      error: (err) => {
        this.saving.set(false);
        this.message.error(err?.error?.error || "L\u1ED7i kh\xF4ng x\xE1c \u0111\u1ECBnh");
      }
    });
  }
  exportExcel() {
    if (!this.payScheduleNo) {
      this.message.warning(this.i18n.t("pa.result.msgSelectPaySchedule", "Vui l\xF2ng ch\u1ECDn k\u1EBF ho\u1EA1ch tr\u1EA3 l\u01B0\u01A1ng!"));
      return;
    }
    const checkedIds = this.allRows().filter((r) => r.checked && r.itemId).map((r) => r.itemId);
    if (checkedIds.length === 0) {
      this.message.warning(this.i18n.t("pa.result.msgNoItemSelected", "Vui l\xF2ng t\xEDch ch\u1ECDn \xEDt nh\u1EA5t m\u1ED9t h\u1EA1ng m\u1EE5c!"));
      return;
    }
    const deptNos = this.expandDeptSelection(this.deptNos).join(",");
    const url = this.api.exportExcelUrl({ payScheduleNo: this.payScheduleNo, deptNos, itemIds: checkedIds.join(",") });
    window.location.href = url;
  }
  toggleSelectAll(checked) {
    this.selectAllFlag = checked;
    this.allRows().forEach((r) => r.checked = checked);
  }
  /** Chọn ngược - tự bỏ tick sau khi áp dụng, giống hành vi #vpr_chkInverse của bản gốc. */
  toggleSelectInverse(checked) {
    this.selectInverseFlag = false;
    if (!checked)
      return;
    this.allRows().forEach((r) => r.checked = !r.checked);
  }
  toggleSectionAll(rows, checked) {
    rows.forEach((r) => r.checked = checked);
  }
  static \u0275fac = function ViewPaResultComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewPaResultComponent)(\u0275\u0275directiveInject(ViewPaResultService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService), \u0275\u0275directiveInject(NzModalService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewPaResultComponent, selectors: [["app-view-pa-result"]], decls: 78, vars: 78, consts: [["vprHrTitle", ""], ["vprAttendTitle", ""], ["vprInputTitle", ""], ["vprComputeTitle", ""], [1, "row"], [1, "col-12"], [1, "mb-2"], [1, "row", "g-2", "align-items-end", 3, "ngSubmit"], [1, "col-md-2"], [1, "form-label", "mb-1", "small", "fw-semibold"], ["name", "vprPayScheduleNo", "nzAllowClear", "", "nzShowSearch", "", 1, "w-100", 3, "ngModelChange", "ngModel"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["name", "vprDeptNos", "nzCheckable", "", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["class", "text-danger small mt-1", 4, "ngIf"], ["name", "vprIsUse", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["name", "vprItemType", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [1, "col-md-4", "text-end"], ["nz-button", "", "nzType", "default", "nzSize", "small", "type", "submit", 3, "nzLoading"], [1, "bx", "bx-search"], ["nz-button", "", "nzType", "primary", "nzSize", "small", "type", "button", 1, "ms-1", 3, "click", "nzLoading"], [1, "bx", "bx-save"], ["nz-button", "", "nzType", "default", "nzSize", "small", "type", "button", 1, "ms-1", 3, "click"], [1, "bx", "bx-export"], [1, "mb-2", "d-flex", "gap-3", "align-items-center"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "small"], [3, "nzSpinning"], [1, "mb-2", 3, "nzTitle"], [1, "row", "g-1"], ["class", "col-12 text-muted small", 4, "ngIf"], ["class", "col-md-3 col-sm-6 d-flex align-items-center border-bottom py-1", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"], [1, "text-danger", "small", "mt-1"], [1, "fw-semibold", "small"], [1, "col-12", "text-muted", "small"], [1, "col-md-3", "col-sm-6", "d-flex", "align-items-center", "border-bottom", "py-1"], ["nz-checkbox", "", 1, "me-1", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["nz-input", "", "type", "number", "min", "0", 1, "me-1", "vpr-order-input", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "small", "text-truncate"]], template: function ViewPaResultComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "nz-card", 6)(3, "form", 7);
      \u0275\u0275listener("ngSubmit", function ViewPaResultComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 8)(5, "label", 9);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "nz-select", 10);
      \u0275\u0275twoWayListener("ngModelChange", function ViewPaResultComponent_Template_nz_select_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.payScheduleNo, $event) || (ctx.payScheduleNo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(9, ViewPaResultComponent_nz_option_9_Template, 1, 2, "nz-option", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 8)(11, "label", 9);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "nz-tree-select", 12);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewPaResultComponent_Template_nz_tree_select_ngModelChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.deptNos, $event) || (ctx.deptNos = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275template(16, ViewPaResultComponent_div_16_Template, 2, 1, "div", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 8)(18, "label", 9);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "nz-select", 14);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewPaResultComponent_Template_nz_select_ngModelChange_21_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.isUse, $event) || (ctx.isUse = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(23, ViewPaResultComponent_nz_option_23_Template, 1, 2, "nz-option", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 8)(25, "label", 9);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "nz-select", 15);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewPaResultComponent_Template_nz_select_ngModelChange_28_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.itemType, $event) || (ctx.itemType = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(30, ViewPaResultComponent_nz_option_30_Template, 1, 2, "nz-option", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 16)(32, "button", 17);
      \u0275\u0275element(33, "i", 18);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "button", 19);
      \u0275\u0275listener("click", function ViewPaResultComponent_Template_button_click_36_listener() {
        return ctx.save();
      });
      \u0275\u0275element(37, "i", 20);
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "button", 21);
      \u0275\u0275listener("click", function ViewPaResultComponent_Template_button_click_40_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(41, "i", 22);
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(44, "div", 23)(45, "label", 24);
      \u0275\u0275listener("ngModelChange", function ViewPaResultComponent_Template_label_ngModelChange_45_listener($event) {
        return ctx.toggleSelectAll($event);
      });
      \u0275\u0275elementStart(46, "span", 25);
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(49, "label", 24);
      \u0275\u0275listener("ngModelChange", function ViewPaResultComponent_Template_label_ngModelChange_49_listener($event) {
        return ctx.toggleSelectInverse($event);
      });
      \u0275\u0275elementStart(50, "span", 25);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "nz-spin", 26);
      \u0275\u0275template(54, ViewPaResultComponent_ng_template_54_Template, 4, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(56, "nz-card", 27)(57, "div", 28);
      \u0275\u0275template(58, ViewPaResultComponent_div_58_Template, 3, 4, "div", 29)(59, ViewPaResultComponent_div_59_Template, 5, 8, "div", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(60, ViewPaResultComponent_ng_template_60_Template, 4, 7, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(62, "nz-card", 27)(63, "div", 28);
      \u0275\u0275template(64, ViewPaResultComponent_div_64_Template, 3, 4, "div", 29)(65, ViewPaResultComponent_div_65_Template, 5, 8, "div", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(66, ViewPaResultComponent_ng_template_66_Template, 4, 7, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(68, "nz-card", 27)(69, "div", 28);
      \u0275\u0275template(70, ViewPaResultComponent_div_70_Template, 3, 4, "div", 29)(71, ViewPaResultComponent_div_71_Template, 5, 8, "div", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(72, ViewPaResultComponent_ng_template_72_Template, 4, 7, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(74, "nz-card", 27)(75, "div", 28);
      \u0275\u0275template(76, ViewPaResultComponent_div_76_Template, 3, 4, "div", 29)(77, ViewPaResultComponent_div_77_Template, 5, 8, "div", 30);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      const vprHrTitle_r18 = \u0275\u0275reference(55);
      const vprAttendTitle_r19 = \u0275\u0275reference(61);
      const vprInputTitle_r20 = \u0275\u0275reference(67);
      const vprComputeTitle_r21 = \u0275\u0275reference(73);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 40, "pa.result.paySchedule", "K\u1EBF ho\u1EA1ch tr\u1EA3 l\u01B0\u01A1ng"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.payScheduleNo);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.schedules());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 43, "pa.result.dept", "Ph\xF2ng ban"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzNodes", ctx.deptNodes());
      \u0275\u0275twoWayProperty("ngModel", ctx.deptNos);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(15, 46, "pa.result.deptPlaceholder", "Ch\u1ECDn ph\xF2ng ban"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.deptTreeErrorMessage());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 49, "pa.result.isUse", "H\u1EA1ng m\u1EE5c t\xEDch ch\u1ECDn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.isUse);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(22, 52, "common.select", "-- Ch\u1ECDn --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.isUseOptions);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 55, "pa.result.itemType", "Ph\xE2n bi\u1EC7t h\u1EA1ng m\u1EE5c"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.itemType);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(29, 58, "common.select", "-- Ch\u1ECDn --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.itemTypeOptions);
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.searching());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(35, 61, "pa.result.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.saving());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(39, 64, "pa.result.save", "L\u01B0u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(43, 67, "pa.result.exportExcel", "Xu\u1EA5t Excel"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.selectAllFlag)("ngModelOptions", \u0275\u0275pureFunction0(76, _c0));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 70, "pa.result.selectAll", "Ch\u1ECDn t\u1EA5t c\u1EA3"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.selectInverseFlag)("ngModelOptions", \u0275\u0275pureFunction0(77, _c0));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(52, 73, "pa.result.selectInverse", "Ch\u1ECDn ng\u01B0\u1EE3c"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzSpinning", ctx.loadingSections());
      \u0275\u0275advance(3);
      \u0275\u0275property("nzTitle", vprHrTitle_r18);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.loadingSections() && ctx.hrItems.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.hrItems);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzTitle", vprAttendTitle_r19);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.loadingSections() && ctx.attendanceItems.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.attendanceItems);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzTitle", vprInputTitle_r20);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.loadingSections() && ctx.inputItems.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.inputItems);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzTitle", vprComputeTitle_r21);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.loadingSections() && ctx.computeItems.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.computeItems);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    MinValidator,
    NgModel,
    NgForm,
    NzCardModule,
    NzCardComponent,
    NzInputModule,
    NzInputDirective,
    NzSelectModule,
    NzOptionComponent,
    NzSelectComponent,
    NzButtonModule,
    NzButtonComponent,
    NzTransitionPatchDirective,
    NzWaveDirective,
    NzCheckboxModule,
    NzCheckboxComponent,
    NzSpinModule,
    NzSpinComponent,
    NzTreeSelectModule,
    NzTreeSelectComponent,
    NzModalModule,
    TranslatePipe
  ], styles: ["\n.vpr-order-input[_ngcontent-%COMP%] {\n  width: 56px;\n  min-width: 56px;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=view-pa-result.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewPaResultComponent, [{
    type: Component,
    args: [{ selector: "app-view-pa-result", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzCardModule,
      NzInputModule,
      NzSelectModule,
      NzButtonModule,
      NzCheckboxModule,
      NzSpinModule,
      NzTreeSelectModule,
      NzModalModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- B\u1ED9 l\u1ECDc -->
    <nz-card class="mb-2">
      <form class="row g-2 align-items-end" (ngSubmit)="search()">
        <div class="col-md-2">
          <label class="form-label mb-1 small fw-semibold">{{ 'pa.result.paySchedule' | translate:'K\u1EBF ho\u1EA1ch tr\u1EA3 l\u01B0\u01A1ng' }}</label>
          <nz-select class="w-100" [(ngModel)]="payScheduleNo" name="vprPayScheduleNo" nzAllowClear nzShowSearch>
            <nz-option *ngFor="let s of schedules()" [nzValue]="s.payScheduleNo"
                       [nzLabel]="s.payDate + (s.salaryDistinName ? ' ' + s.salaryDistinName : '')"></nz-option>
          </nz-select>
        </div>

        <div class="col-md-2">
          <label class="form-label mb-1 small fw-semibold">{{ 'pa.result.dept' | translate:'Ph\xF2ng ban' }}</label>
          <nz-tree-select class="w-100" [nzNodes]="deptNodes()" [(ngModel)]="deptNos" name="vprDeptNos"
                           nzCheckable nzShowSearch nzAllowClear
                           [nzPlaceHolder]="'pa.result.deptPlaceholder' | translate:'Ch\u1ECDn ph\xF2ng ban'"></nz-tree-select>
          <div *ngIf="deptTreeErrorMessage()" class="text-danger small mt-1">{{ deptTreeErrorMessage() }}</div>
        </div>

        <div class="col-md-2">
          <label class="form-label mb-1 small fw-semibold">{{ 'pa.result.isUse' | translate:'H\u1EA1ng m\u1EE5c t\xEDch ch\u1ECDn' }}</label>
          <nz-select class="w-100" [(ngModel)]="isUse" name="vprIsUse"
                     [nzPlaceHolder]="'common.select' | translate:'-- Ch\u1ECDn --'">
            <nz-option *ngFor="let o of isUseOptions" [nzValue]="o.value" [nzLabel]="i18n.t(o.key, o.fallback)"></nz-option>
          </nz-select>
        </div>

        <div class="col-md-2">
          <label class="form-label mb-1 small fw-semibold">{{ 'pa.result.itemType' | translate:'Ph\xE2n bi\u1EC7t h\u1EA1ng m\u1EE5c' }}</label>
          <nz-select class="w-100" [(ngModel)]="itemType" name="vprItemType"
                     [nzPlaceHolder]="'common.select' | translate:'-- Ch\u1ECDn --'">
            <nz-option *ngFor="let o of itemTypeOptions" [nzValue]="o.value" [nzLabel]="i18n.t(o.key, o.fallback)"></nz-option>
          </nz-select>
        </div>

        <div class="col-md-4 text-end">
          <button nz-button nzType="default" nzSize="small" type="submit" [nzLoading]="searching()">
            <i class="bx bx-search"></i> {{ 'pa.result.search' | translate:'Tra c\u1EE9u' }}
          </button>
          <button nz-button nzType="primary" nzSize="small" type="button" class="ms-1"
                  [nzLoading]="saving()" (click)="save()">
            <i class="bx bx-save"></i> {{ 'pa.result.save' | translate:'L\u01B0u' }}
          </button>
          <button nz-button nzType="default" nzSize="small" type="button" class="ms-1" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'pa.result.exportExcel' | translate:'Xu\u1EA5t Excel' }}
          </button>
        </div>
      </form>
    </nz-card>

    <!-- Ch\u1ECDn nhanh -->
    <div class="mb-2 d-flex gap-3 align-items-center">
      <label nz-checkbox [ngModel]="selectAllFlag" [ngModelOptions]="{ standalone: true }" (ngModelChange)="toggleSelectAll($event)">
        <span class="small">{{ 'pa.result.selectAll' | translate:'Ch\u1ECDn t\u1EA5t c\u1EA3' }}</span>
      </label>
      <label nz-checkbox [ngModel]="selectInverseFlag" [ngModelOptions]="{ standalone: true }" (ngModelChange)="toggleSelectInverse($event)">
        <span class="small">{{ 'pa.result.selectInverse' | translate:'Ch\u1ECDn ng\u01B0\u1EE3c' }}</span>
      </label>
    </div>

    <nz-spin [nzSpinning]="loadingSections()">
      <!-- H\u1EA1ng m\u1EE5c nh\xE2n s\u1EF1 -->
      <ng-template #vprHrTitle>
        <label nz-checkbox [ngModel]="false" [ngModelOptions]="{ standalone: true }"
               (ngModelChange)="toggleSectionAll(hrItems, $event)">
          <span class="fw-semibold small">{{ 'pa.result.hrItems' | translate:'H\u1EA1ng m\u1EE5c nh\xE2n s\u1EF1' }}</span>
        </label>
      </ng-template>
      <nz-card class="mb-2" [nzTitle]="vprHrTitle">
        <div class="row g-1">
          <div class="col-12 text-muted small" *ngIf="!loadingSections() && hrItems.length === 0">
            {{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}
          </div>
          <div class="col-md-3 col-sm-6 d-flex align-items-center border-bottom py-1" *ngFor="let row of hrItems">
            <label nz-checkbox [(ngModel)]="row.checked" [ngModelOptions]="{ standalone: true }" class="me-1"></label>
            <input nz-input type="number" [(ngModel)]="row.orderNo" [ngModelOptions]="{ standalone: true }"
                   class="me-1 vpr-order-input" min="0">
            <span class="small text-truncate" [attr.title]="row.itemName">{{ row.itemName }}</span>
          </div>
        </div>
      </nz-card>

      <!-- H\u1EA1ng m\u1EE5c ch\u1EA5m c\xF4ng -->
      <ng-template #vprAttendTitle>
        <label nz-checkbox [ngModel]="false" [ngModelOptions]="{ standalone: true }"
               (ngModelChange)="toggleSectionAll(attendanceItems, $event)">
          <span class="fw-semibold small">{{ 'pa.result.attendanceItems' | translate:'H\u1EA1ng m\u1EE5c ch\u1EA5m c\xF4ng' }}</span>
        </label>
      </ng-template>
      <nz-card class="mb-2" [nzTitle]="vprAttendTitle">
        <div class="row g-1">
          <div class="col-12 text-muted small" *ngIf="!loadingSections() && attendanceItems.length === 0">
            {{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}
          </div>
          <div class="col-md-3 col-sm-6 d-flex align-items-center border-bottom py-1" *ngFor="let row of attendanceItems">
            <label nz-checkbox [(ngModel)]="row.checked" [ngModelOptions]="{ standalone: true }" class="me-1"></label>
            <input nz-input type="number" [(ngModel)]="row.orderNo" [ngModelOptions]="{ standalone: true }"
                   class="me-1 vpr-order-input" min="0">
            <span class="small text-truncate" [attr.title]="row.itemName">{{ row.itemName }}</span>
          </div>
        </div>
      </nz-card>

      <!-- H\u1EA1ng m\u1EE5c nh\u1EADp -->
      <ng-template #vprInputTitle>
        <label nz-checkbox [ngModel]="false" [ngModelOptions]="{ standalone: true }"
               (ngModelChange)="toggleSectionAll(inputItems, $event)">
          <span class="fw-semibold small">{{ 'pa.result.inputItems' | translate:'H\u1EA1ng m\u1EE5c nh\u1EADp' }}</span>
        </label>
      </ng-template>
      <nz-card class="mb-2" [nzTitle]="vprInputTitle">
        <div class="row g-1">
          <div class="col-12 text-muted small" *ngIf="!loadingSections() && inputItems.length === 0">
            {{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}
          </div>
          <div class="col-md-3 col-sm-6 d-flex align-items-center border-bottom py-1" *ngFor="let row of inputItems">
            <label nz-checkbox [(ngModel)]="row.checked" [ngModelOptions]="{ standalone: true }" class="me-1"></label>
            <input nz-input type="number" [(ngModel)]="row.orderNo" [ngModelOptions]="{ standalone: true }"
                   class="me-1 vpr-order-input" min="0">
            <span class="small text-truncate" [attr.title]="row.itemName">{{ row.itemName }}</span>
          </div>
        </div>
      </nz-card>

      <!-- H\u1EA1ng m\u1EE5c t\xEDnh -->
      <ng-template #vprComputeTitle>
        <label nz-checkbox [ngModel]="false" [ngModelOptions]="{ standalone: true }"
               (ngModelChange)="toggleSectionAll(computeItems, $event)">
          <span class="fw-semibold small">{{ 'pa.result.computeItems' | translate:'H\u1EA1ng m\u1EE5c t\xEDnh' }}</span>
        </label>
      </ng-template>
      <nz-card class="mb-2" [nzTitle]="vprComputeTitle">
        <div class="row g-1">
          <div class="col-12 text-muted small" *ngIf="!loadingSections() && computeItems.length === 0">
            {{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}
          </div>
          <div class="col-md-3 col-sm-6 d-flex align-items-center border-bottom py-1" *ngFor="let row of computeItems">
            <label nz-checkbox [(ngModel)]="row.checked" [ngModelOptions]="{ standalone: true }" class="me-1"></label>
            <input nz-input type="number" [(ngModel)]="row.orderNo" [ngModelOptions]="{ standalone: true }"
                   class="me-1 vpr-order-input" min="0">
            <span class="small text-truncate" [attr.title]="row.itemName">{{ row.itemName }}</span>
          </div>
        </div>
      </nz-card>
    </nz-spin>
  </div>
</div>
`, styles: ["/* src/app/view-pa-result/view-pa-result.component.css */\n.vpr-order-input {\n  width: 56px;\n  min-width: 56px;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=view-pa-result.component.css.map */\n"] }]
  }], () => [{ type: ViewPaResultService }, { type: I18nService }, { type: NzMessageService }, { type: NzModalService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewPaResultComponent, { className: "ViewPaResultComponent", filePath: "src/app/view-pa-result/view-pa-result.component.ts", lineNumber: 93 });
})();
export {
  ViewPaResultComponent
};
//# debugId=b67263bc-5da2-5335-bab5-cff7ff02cacc
//# sourceMappingURL=chunk-4VA2WCHG.js.map
