import {
  ChangeUserService
} from "./chunk-L26I55F6.js";
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
import {
  NzRadioComponent,
  NzRadioGroupComponent,
  NzRadioModule
} from "./chunk-2GOAB54B.js";
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

// src/app/view-ar-detail-calculate/view-ar-detail-calculate.service.ts
var API_BASE = "/ar/attendanceMintenance/api";
var ViewArDetailCalculateService = class _ViewArDetailCalculateService {
  constructor(http) {
    this.http = http;
  }
  http;
  runCalculate(payload) {
    return this.http.post(`${API_BASE}/detailCalculate/run`, payload, { withCredentials: true });
  }
  static \u0275fac = function ViewArDetailCalculateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewArDetailCalculateService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewArDetailCalculateService, factory: _ViewArDetailCalculateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewArDetailCalculateService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-ar-detail-calculate/view-ar-detail-calculate.component.ts
function ViewArDetailCalculateComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "label", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 20)(5, "input", 21);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function ViewArDetailCalculateComponent_div_26_Template_input_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPicker());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(7, "button", 22);
    \u0275\u0275listener("click", function ViewArDetailCalculateComponent_div_26_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPicker());
    });
    \u0275\u0275element(8, "i", 23);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 3, "arCalc.byEmployee", "Nh\xE2n vi\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.personDisplay)("placeholder", \u0275\u0275pipeBind2(6, 6, "arCalc.selectEmployee", "Ch\u1ECDn nh\xE2n vi\xEAn..."));
    \u0275\u0275control();
  }
}
function ViewArDetailCalculateComponent_div_27_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.deptTreeErrorMessage());
  }
}
function ViewArDetailCalculateComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "label", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "nz-tree-select", 24);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewArDetailCalculateComponent_div_27_Template_nz_tree_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.deptId, $event) || (ctx_r1.deptId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275template(6, ViewArDetailCalculateComponent_div_27_div_6_Template, 2, 1, "div", 25);
    \u0275\u0275elementStart(7, "label", 26);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArDetailCalculateComponent_div_27_Template_label_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.sonDeptFlag, $event) || (ctx_r1.sonDeptFlag = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 7, "arCalc.byDept", "Ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzNodes", ctx_r1.deptNodes());
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.deptId);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(5, 10, "arCalc.selectDept", "Ch\u1ECDn ph\xF2ng ban"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.deptTreeErrorMessage());
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.sonDeptFlag);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 13, "arCalc.includeSubDept", "Bao g\u1ED3m ph\xF2ng ban con"), " ");
  }
}
function ViewArDetailCalculateComponent_ng_container_35_nz_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 44);
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r5.codeNo)("nzLabel", c_r5.codeName);
  }
}
function ViewArDetailCalculateComponent_ng_container_35_nz_alert_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 45);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzMessage", ctx_r1.pickerErrorMessage() ?? "");
  }
}
function ViewArDetailCalculateComponent_ng_container_35_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 46);
    \u0275\u0275listener("click", function ViewArDetailCalculateComponent_ng_container_35_tr_51_Template_tr_click_0_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectEmployee(row_r7));
    });
    \u0275\u0275elementStart(1, "td", 47);
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
    const row_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r8 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.empId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.deptName || row_r7.deptNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.position);
  }
}
function ViewArDetailCalculateComponent_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 28);
    \u0275\u0275listener("ngSubmit", function ViewArDetailCalculateComponent_ng_container_35_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pickerSearch());
    });
    \u0275\u0275elementStart(2, "div", 29)(3, "label", 11);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 30);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewArDetailCalculateComponent_ng_container_35_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pickerKeyword, $event) || (ctx_r1.pickerKeyword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function ViewArDetailCalculateComponent_ng_container_35_Template_input_keydown_enter_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r1.pickerSearch());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 31)(9, "label", 11);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "nz-tree-select", 32);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewArDetailCalculateComponent_ng_container_35_Template_nz_tree_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pickerDeptNos, $event) || (ctx_r1.pickerDeptNos = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 33)(15, "label", 11);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "nz-select", 34);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewArDetailCalculateComponent_ng_container_35_Template_nz_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pickerEmpOffice, $event) || (ctx_r1.pickerEmpOffice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(20, ViewArDetailCalculateComponent_ng_container_35_nz_option_20_Template, 1, 2, "nz-option", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 36)(22, "button", 37);
    \u0275\u0275element(23, "i", 23);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 22);
    \u0275\u0275listener("click", function ViewArDetailCalculateComponent_ng_container_35_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pickerClear());
    });
    \u0275\u0275element(27, "i", 38);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(30, ViewArDetailCalculateComponent_ng_container_35_nz_alert_30_Template, 1, 1, "nz-alert", 39);
    \u0275\u0275elementStart(31, "nz-table", 40, 0)(33, "thead")(34, "tr")(35, "th", 41);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th", 42);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th");
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "th");
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "th");
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "tbody");
    \u0275\u0275template(51, ViewArDetailCalculateComponent_ng_container_35_tr_51_Template, 11, 5, "tr", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const adcTable_r9 = \u0275\u0275reference(32);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 23, "empSearch.field.keyword", "M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pickerKeyword);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(7, 26, "empSearch.placeholder.keyword", "Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 29, "empSearch.field.dept", "Ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzNodes", ctx_r1.deptNodes());
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pickerDeptNos);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(13, 32, "vdp.search.dept.placeholder", "Ch\u1ECDn ph\xF2ng ban"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 35, "empSearch.field.empOffice", "Tr\u1EA1ng th\xE1i l\xE0m vi\u1EC7c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pickerEmpOffice);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(19, 38, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.empOfficeOptions());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(25, 41, "common.search", "T\xECm ki\u1EBFm"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(29, 44, "empSearch.btn.clearFilter", "X\xF3a b\u1ED9 l\u1ECDc"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.pickerErrorMessage());
    \u0275\u0275advance();
    \u0275\u0275property("nzData", ctx_r1.pickerRows())("nzLoading", ctx_r1.pickerLoading())("nzPageSize", 10);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 47, "empSearch.col.no", "STT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 50, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 53, "common.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 56, "common.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 59, "epi.field.position", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", adcTable_r9.data);
  }
}
var I18N_KEYS = [
  "arCalc.title",
  "arCalc.calType",
  "arCalc.byEmployee",
  "arCalc.byDept",
  "common.fromDate",
  "common.toDate",
  "arCalc.selectEmployee",
  "arCalc.selectDept",
  "arCalc.includeSubDept",
  "arCalc.btnCalculate",
  "arCalc.calculating",
  "arCalc.msg.selectDateRange",
  "arCalc.msg.selectEmployee",
  "arCalc.msg.selectDept",
  "arCalc.msg.calcFail",
  "arCalc.msg.calcError",
  "empSearch.title",
  "empSearch.field.keyword",
  "empSearch.placeholder.keyword",
  "empSearch.field.dept",
  "empSearch.field.empOffice",
  "empSearch.btn.clearFilter",
  "empSearch.col.no",
  "epi.field.position",
  "vdp.search.dept.placeholder",
  "mep.msg.loadDeptFailed",
  "common.search",
  "common.selectAll",
  "common.empId",
  "common.empName",
  "common.deptName",
  "common.loadFail"
];
var EMP_OFFICE_PARENT_CODE = "15118";
var ViewArDetailCalculateComponent = class _ViewArDetailCalculateComponent {
  constructor(api, empApi, i18n, message) {
    this.api = api;
    this.empApi = empApi;
    this.i18n = i18n;
    this.message = message;
  }
  api;
  empApi;
  i18n;
  message;
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
  calculating = signal(
    false,
    ...ngDevMode ? [{ debugName: "calculating" }] : (
      /* istanbul ignore next */
      []
    )
  );
  caltype = "EMP";
  fromDate = null;
  toDate = null;
  personId = null;
  personDisplay = "";
  deptId = null;
  sonDeptFlag = false;
  // ==================== Popup tìm kiếm nhân viên (tái dùng pattern ChangeUserComponent) ====================
  empOfficeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "empOfficeOptions" }] : (
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
    this.initDefaultDateRange();
    this.empApi.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(this.buildDeptTree(list ?? [])),
      error: () => this.deptTreeErrorMessage.set(this.i18n.t("mep.msg.loadDeptFailed", "L\u1ED7i khi t\u1EA3i danh s\xE1ch ph\xF2ng ban"))
    });
    this.empApi.getCodeList(EMP_OFFICE_PARENT_CODE).subscribe((list) => this.empOfficeOptions.set(list ?? []));
  }
  onCaltypeChange() {
    if (this.caltype === "EMP") {
      this.deptId = null;
      this.sonDeptFlag = false;
    } else {
      this.personId = null;
      this.personDisplay = "";
    }
  }
  runCalculate() {
    if (!this.fromDate || !this.toDate) {
      this.message.warning(this.i18n.t("arCalc.msg.selectDateRange", "Vui l\xF2ng ch\u1ECDn kho\u1EA3ng th\u1EDDi gian t\xEDnh to\xE1n"));
      return;
    }
    if (this.caltype === "EMP") {
      if (!this.personId) {
        this.message.warning(this.i18n.t("arCalc.msg.selectEmployee", "Vui l\xF2ng ch\u1ECDn nh\xE2n vi\xEAn"));
        return;
      }
    } else if (!this.deptId) {
      this.message.warning(this.i18n.t("arCalc.msg.selectDept", "Vui l\xF2ng ch\u1ECDn ph\xF2ng ban"));
      return;
    }
    this.calculating.set(true);
    this.api.runCalculate({
      caltype: this.caltype,
      fromDate: this.formatYmd(this.fromDate),
      toDate: this.formatYmd(this.toDate),
      deptId: this.caltype === "DEPT" ? this.deptId ?? "" : "",
      sonDeptFlag: this.sonDeptFlag ? "YES" : "NO",
      personId: this.caltype === "EMP" ? this.personId ?? "" : ""
    }).subscribe({
      next: (res) => {
        this.calculating.set(false);
        if (res.success) {
          this.message.success(res.message || this.i18n.t("arCalc.btnCalculate", "T\xEDnh to\xE1n"));
        } else {
          this.message.error(res.error || this.i18n.t("arCalc.msg.calcFail", "T\xEDnh to\xE1n th\u1EA5t b\u1EA1i"));
        }
      },
      error: () => {
        this.calculating.set(false);
        this.message.error(this.i18n.t("arCalc.msg.calcError", "Kh\xF4ng th\u1EC3 th\u1EF1c hi\u1EC7n t\xEDnh to\xE1n"));
      }
    });
  }
  initDefaultDateRange() {
    const now = /* @__PURE__ */ new Date();
    this.fromDate = new Date(now.getFullYear(), now.getMonth(), 1);
    this.toDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  }
  formatYmd(d) {
    return d ? formatDate(d, "yyyy-MM-dd", "vi") : "";
  }
  // ==================== Popup tìm kiếm nhân viên ====================
  openPicker() {
    this.pickerKeyword = this.personDisplay;
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
    this.personDisplay = `${row.empId} - ${row.localName}`;
    this.pickerVisible.set(false);
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
  /** Dùng cho cây phòng ban trong popup tìm nhân viên (checkable, multi) - phòng ban mục tiêu của
   *  phép tính (deptId, single-select) không cascade phía FE vì server tự xử lý qua sonDeptFlag. */
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
  static \u0275fac = function ViewArDetailCalculateComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewArDetailCalculateComponent)(\u0275\u0275directiveInject(ViewArDetailCalculateService), \u0275\u0275directiveInject(ChangeUserService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewArDetailCalculateComponent, selectors: [["app-view-ar-detail-calculate"]], decls: 36, vars: 40, consts: [["adcTable", ""], [1, "row", "justify-content-center"], [1, "col-xl-8", "col-lg-10"], [3, "nzTitle"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-12"], [1, "form-label", "d-block"], ["id", "adc-caltype", "name", "caltype", 3, "ngModelChange", "ngModel"], ["nz-radio", "", "nzValue", "EMP"], ["nz-radio", "", "nzValue", "DEPT"], [1, "col-md-6"], [1, "form-label"], ["id", "adc-fromDate", "name", "fromDate", "nzFormat", "yyyy-MM-dd", 1, "w-100", 3, "ngModelChange", "ngModel"], ["id", "adc-toDate", "name", "toDate", "nzFormat", "yyyy-MM-dd", 1, "w-100", 3, "ngModelChange", "ngModel"], ["class", "col-12", 4, "ngIf"], [1, "col-12", "d-flex", "justify-content-end"], ["nz-button", "", "nzType", "primary", "type", "submit", "id", "adc-btn-calculate", 3, "nzLoading"], [1, "bx", "bx-calculator"], ["nzWidth", "900px", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzFooter"], [4, "nzModalContent"], [1, "adc-picker-input"], ["nz-input", "", "id", "adc-personDisplay", "name", "personDisplay", "readonly", "", 3, "click", "ngModel", "placeholder"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-search"], ["id", "adc-deptId", "name", "deptId", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", "mb-2", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["class", "text-danger small mb-2", 4, "ngIf"], ["nz-checkbox", "", "id", "adc-sonDeptFlag", "name", "sonDeptFlag", 3, "ngModelChange", "ngModel"], [1, "text-danger", "small", "mb-2"], [1, "row", "g-2", "align-items-end", "mb-3", 3, "ngSubmit"], [1, "col-md-5"], ["nz-input", "", "name", "pickerKeyword", 3, "ngModelChange", "keydown.enter", "ngModel", "placeholder"], [1, "col-md-4"], ["name", "pickerDeptNos", "nzCheckable", "", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], [1, "col-md-3"], ["name", "pickerEmpOffice", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col-12", "d-flex", "gap-2"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-x"], ["nzType", "error", "class", "mb-2", 3, "nzMessage", 4, "ngIf"], ["nzSize", "small", 3, "nzData", "nzLoading", "nzPageSize"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "110px"], ["class", "adc-row-clickable", 3, "click", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-2", 3, "nzMessage"], [1, "adc-row-clickable", 3, "click"], [1, "text-center"]], template: function ViewArDetailCalculateComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "nz-card", 3);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementStart(4, "form", 4);
      \u0275\u0275listener("ngSubmit", function ViewArDetailCalculateComponent_Template_form_ngSubmit_4_listener() {
        return ctx.runCalculate();
      });
      \u0275\u0275elementStart(5, "div", 5)(6, "label", 6);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "nz-radio-group", 7);
      \u0275\u0275twoWayListener("ngModelChange", function ViewArDetailCalculateComponent_Template_nz_radio_group_ngModelChange_9_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.caltype, $event) || (ctx.caltype = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ViewArDetailCalculateComponent_Template_nz_radio_group_ngModelChange_9_listener() {
        return ctx.onCaltypeChange();
      });
      \u0275\u0275elementStart(10, "label", 8);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "label", 9);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 10)(17, "label", 11);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "nz-date-picker", 12);
      \u0275\u0275twoWayListener("ngModelChange", function ViewArDetailCalculateComponent_Template_nz_date_picker_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.fromDate, $event) || (ctx.fromDate = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 10)(22, "label", 11);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "nz-date-picker", 13);
      \u0275\u0275twoWayListener("ngModelChange", function ViewArDetailCalculateComponent_Template_nz_date_picker_ngModelChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.toDate, $event) || (ctx.toDate = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275template(26, ViewArDetailCalculateComponent_div_26_Template, 9, 9, "div", 14)(27, ViewArDetailCalculateComponent_div_27_Template, 10, 16, "div", 14);
      \u0275\u0275elementStart(28, "div", 15)(29, "button", 16);
      \u0275\u0275element(30, "i", 17);
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(33, "nz-modal", 18);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewArDetailCalculateComponent_Template_nz_modal_nzOnCancel_33_listener() {
        return ctx.closePicker();
      });
      \u0275\u0275template(35, ViewArDetailCalculateComponent_ng_container_35_Template, 52, 62, "ng-container", 19);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(3, 16, "arCalc.title", "T\xEDnh to\xE1n chi ti\u1EBFt"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 19, "arCalc.calType", "Ph\xE2n lo\u1EA1i t\xEDnh to\xE1n"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.caltype);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 22, "arCalc.byEmployee", "Nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 25, "arCalc.byDept", "Ph\xF2ng ban"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 28, "common.fromDate", "T\u1EEB ng\xE0y"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.fromDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 31, "common.toDate", "\u0110\u1EBFn ng\xE0y"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.toDate);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.caltype === "EMP");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.caltype === "DEPT");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.calculating());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(32, 34, ctx.calculating() ? "arCalc.calculating" : "arCalc.btnCalculate", ctx.calculating() ? "\u0110ang t\xEDnh to\xE1n" : "T\xEDnh to\xE1n"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzVisible", ctx.pickerVisible())("nzTitle", \u0275\u0275pipeBind2(34, 37, "empSearch.title", "T\xECm ki\u1EBFm nh\xE2n vi\xEAn"))("nzFooter", null);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzRadioModule, NzRadioComponent, NzRadioGroupComponent, NzCheckboxModule, NzCheckboxComponent, NzDatePickerModule, NzDatePickerComponent, NzTreeSelectModule, NzTreeSelectComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\n.adc-picker-input[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.adc-row-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.adc-row-clickable[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n/*# sourceMappingURL=view-ar-detail-calculate.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewArDetailCalculateComponent, [{
    type: Component,
    args: [{ selector: "app-view-ar-detail-calculate", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzCardModule,
      NzInputModule,
      NzButtonModule,
      NzRadioModule,
      NzCheckboxModule,
      NzDatePickerModule,
      NzTreeSelectModule,
      NzModalModule,
      NzTableModule,
      NzSelectModule,
      NzAlertModule,
      TranslatePipe
    ], template: `<div class="row justify-content-center">
  <div class="col-xl-8 col-lg-10">
    <nz-card [nzTitle]="'arCalc.title' | translate:'T\xEDnh to\xE1n chi ti\u1EBFt'">
      <form class="row g-3" (ngSubmit)="runCalculate()">
        <div class="col-12">
          <label class="form-label d-block">{{ 'arCalc.calType' | translate:'Ph\xE2n lo\u1EA1i t\xEDnh to\xE1n' }}</label>
          <nz-radio-group id="adc-caltype" [(ngModel)]="caltype" name="caltype" (ngModelChange)="onCaltypeChange()">
            <label nz-radio nzValue="EMP">{{ 'arCalc.byEmployee' | translate:'Nh\xE2n vi\xEAn' }}</label>
            <label nz-radio nzValue="DEPT">{{ 'arCalc.byDept' | translate:'Ph\xF2ng ban' }}</label>
          </nz-radio-group>
        </div>

        <div class="col-md-6">
          <label class="form-label">{{ 'common.fromDate' | translate:'T\u1EEB ng\xE0y' }}</label>
          <nz-date-picker class="w-100" id="adc-fromDate" [(ngModel)]="fromDate" name="fromDate" nzFormat="yyyy-MM-dd"></nz-date-picker>
        </div>
        <div class="col-md-6">
          <label class="form-label">{{ 'common.toDate' | translate:'\u0110\u1EBFn ng\xE0y' }}</label>
          <nz-date-picker class="w-100" id="adc-toDate" [(ngModel)]="toDate" name="toDate" nzFormat="yyyy-MM-dd"></nz-date-picker>
        </div>

        <div class="col-12" *ngIf="caltype === 'EMP'">
          <label class="form-label">{{ 'arCalc.byEmployee' | translate:'Nh\xE2n vi\xEAn' }}</label>
          <div class="adc-picker-input">
            <input nz-input id="adc-personDisplay" [ngModel]="personDisplay" name="personDisplay"
                   [placeholder]="'arCalc.selectEmployee' | translate:'Ch\u1ECDn nh\xE2n vi\xEAn...'" readonly
                   (click)="openPicker()">
            <button nz-button type="button" (click)="openPicker()">
              <i class="bx bx-search"></i>
            </button>
          </div>
        </div>

        <div class="col-12" *ngIf="caltype === 'DEPT'">
          <label class="form-label">{{ 'arCalc.byDept' | translate:'Ph\xF2ng ban' }}</label>
          <nz-tree-select class="w-100 mb-2" id="adc-deptId" [nzNodes]="deptNodes()" [(ngModel)]="deptId" name="deptId"
                           nzShowSearch nzAllowClear
                           [nzPlaceHolder]="'arCalc.selectDept' | translate:'Ch\u1ECDn ph\xF2ng ban'"></nz-tree-select>
          <div *ngIf="deptTreeErrorMessage()" class="text-danger small mb-2">{{ deptTreeErrorMessage() }}</div>
          <label nz-checkbox id="adc-sonDeptFlag" [(ngModel)]="sonDeptFlag" name="sonDeptFlag">
            {{ 'arCalc.includeSubDept' | translate:'Bao g\u1ED3m ph\xF2ng ban con' }}
          </label>
        </div>

        <div class="col-12 d-flex justify-content-end">
          <button nz-button nzType="primary" type="submit" id="adc-btn-calculate" [nzLoading]="calculating()">
            <i class="bx bx-calculator"></i>
            {{ (calculating() ? 'arCalc.calculating' : 'arCalc.btnCalculate') | translate:(calculating() ? '\u0110ang t\xEDnh to\xE1n' : 'T\xEDnh to\xE1n') }}
          </button>
        </div>
      </form>
    </nz-card>
  </div>
</div>

<!-- Modal t\xECm ki\u1EBFm nh\xE2n vi\xEAn - thay cho fragment employeeSearchModal.html (jQuery + DataTables), t\xE1i
     d\xF9ng \u0111\xFAng pattern c\u1EE7a ChangeUserComponent/AddEmpShiftComponent. -->
<nz-modal [nzVisible]="pickerVisible()" [nzTitle]="'empSearch.title' | translate:'T\xECm ki\u1EBFm nh\xE2n vi\xEAn'"
          nzWidth="900px" (nzOnCancel)="closePicker()" [nzFooter]="null">
  <ng-container *nzModalContent>
    <form class="row g-2 align-items-end mb-3" (ngSubmit)="pickerSearch()">
      <div class="col-md-5">
        <label class="form-label">{{ 'empSearch.field.keyword' | translate:'M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn' }}</label>
        <input nz-input [(ngModel)]="pickerKeyword" name="pickerKeyword"
               [placeholder]="'empSearch.placeholder.keyword' | translate:'Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn'"
               (keydown.enter)="$event.preventDefault(); pickerSearch()">
      </div>
      <div class="col-md-4">
        <label class="form-label">{{ 'empSearch.field.dept' | translate:'Ph\xF2ng ban' }}</label>
        <nz-tree-select class="w-100" [nzNodes]="deptNodes()" [(ngModel)]="pickerDeptNos" name="pickerDeptNos"
                         nzCheckable nzShowSearch nzAllowClear
                         [nzPlaceHolder]="'vdp.search.dept.placeholder' | translate:'Ch\u1ECDn ph\xF2ng ban'"></nz-tree-select>
      </div>
      <div class="col-md-3">
        <label class="form-label">{{ 'empSearch.field.empOffice' | translate:'Tr\u1EA1ng th\xE1i l\xE0m vi\u1EC7c' }}</label>
        <nz-select class="w-100" [(ngModel)]="pickerEmpOffice" name="pickerEmpOffice" nzAllowClear
                   [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
          <nz-option *ngFor="let c of empOfficeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
        </nz-select>
      </div>
      <div class="col-12 d-flex gap-2">
        <button nz-button nzType="primary" type="submit">
          <i class="bx bx-search"></i> {{ 'common.search' | translate:'T\xECm ki\u1EBFm' }}
        </button>
        <button nz-button type="button" (click)="pickerClear()">
          <i class="bx bx-x"></i> {{ 'empSearch.btn.clearFilter' | translate:'X\xF3a b\u1ED9 l\u1ECDc' }}
        </button>
      </div>
    </form>

    <nz-alert *ngIf="pickerErrorMessage()" nzType="error" [nzMessage]="pickerErrorMessage() ?? ''" class="mb-2"></nz-alert>

    <nz-table [nzData]="pickerRows()" [nzLoading]="pickerLoading()" [nzPageSize]="10" nzSize="small" #adcTable>
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
        <tr *ngFor="let row of adcTable.data; let i = index" class="adc-row-clickable" (click)="selectEmployee(row)">
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
`, styles: ["/* src/app/view-ar-detail-calculate/view-ar-detail-calculate.component.css */\n.adc-picker-input {\n  display: flex;\n  gap: 4px;\n}\n.adc-row-clickable {\n  cursor: pointer;\n}\n.adc-row-clickable:hover {\n  background: #fafafa;\n}\n/*# sourceMappingURL=view-ar-detail-calculate.component.css.map */\n"] }]
  }], () => [{ type: ViewArDetailCalculateService }, { type: ChangeUserService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewArDetailCalculateComponent, { className: "ViewArDetailCalculateComponent", filePath: "src/app/view-ar-detail-calculate/view-ar-detail-calculate.component.ts", lineNumber: 76 });
})();
export {
  ViewArDetailCalculateComponent
};
//# debugId=741513a2-1d78-5490-b6d1-b8b8f0533089
//# sourceMappingURL=chunk-5MTWPRIR.js.map
