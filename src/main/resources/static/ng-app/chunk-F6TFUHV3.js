import {
  ChangeUserService
} from "./chunk-L26I55F6.js";
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

// src/app/view-dynamic-group/view-dynamic-group.service.ts
var API_BASE = "/ar/attendanceSettings/api/dynamicGroup";
var ViewDynamicGroupService = class _ViewDynamicGroupService {
  constructor(http) {
    this.http = http;
  }
  http;
  list(empId) {
    let httpParams = new HttpParams();
    if (empId)
      httpParams = httpParams.set("empId", empId);
    return this.http.get(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
  }
  save(payload) {
    return this.http.post(`${API_BASE}/save`, payload, {
      withCredentials: true
    });
  }
  delete(personId) {
    return this.http.delete(`${API_BASE}/delete/${personId}`, { withCredentials: true });
  }
  static \u0275fac = function ViewDynamicGroupService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewDynamicGroupService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewDynamicGroupService, factory: _ViewDynamicGroupService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewDynamicGroupService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-dynamic-group/view-dynamic-group.component.ts
var _c0 = () => ({ x: "900px", y: "calc(100vh - 420px)" });
function ViewDynamicGroupComponent_nz_alert_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 34);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ViewDynamicGroupComponent_tr_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 35);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewDynamicGroupComponent_tr_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 36);
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
    \u0275\u0275elementStart(11, "td", 36);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 36)(14, "button", 37);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275listener("click", function ViewDynamicGroupComponent_tr_57_Template_button_click_14_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDeleteConfirm(row_r4));
    });
    \u0275\u0275element(16, "i", 38);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r5 + 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.empId || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.empId);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.localName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.localName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.deptName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.deptName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.updatedBy);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.toDmyHm(row_r4.updateDate));
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(15, 10, "common.delete", "X\xF3a"));
  }
}
function ViewDynamicGroupComponent_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r6 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r6, " ");
  }
}
function ViewDynamicGroupComponent_ng_container_64_small_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 44);
    \u0275\u0275element(1, "i", 45);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(3, 2, "arSupervisor.js.empSelected", "\u0110\xE3 ch\u1ECDn NV: "), "", ctx_r1.formEmpDisplay, " ");
  }
}
function ViewDynamicGroupComponent_ng_container_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "label", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span", 39);
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 40);
    \u0275\u0275element(7, "input", 41);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(9, "button", 42);
    \u0275\u0275listener("click", function ViewDynamicGroupComponent_ng_container_64_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPicker());
    });
    \u0275\u0275element(10, "i", 12);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, ViewDynamicGroupComponent_ng_container_64_small_13_Template, 4, 5, "small", 43);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 5, "arSupervisor.field.emp", "Nh\xE2n vi\xEAn"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r1.formEmpDisplay)("placeholder", \u0275\u0275pipeBind2(8, 8, "arSupervisor.placeholder.selectEmp", "Ch\u1ECDn nh\xE2n vi\xEAn..."));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 11, "arSupervisor.btn.select", "Ch\u1ECDn"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.formPersonId);
  }
}
function ViewDynamicGroupComponent_ng_container_67_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.deptTreeErrorMessage());
  }
}
function ViewDynamicGroupComponent_ng_container_67_nz_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 60);
  }
  if (rf & 2) {
    const c_r9 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r9.codeNo)("nzLabel", c_r9.codeName);
  }
}
function ViewDynamicGroupComponent_ng_container_67_nz_alert_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 61);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzMessage", ctx_r1.pickerErrorMessage() ?? "");
  }
}
function ViewDynamicGroupComponent_ng_container_67_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 62);
    \u0275\u0275listener("click", function ViewDynamicGroupComponent_ng_container_67_tr_52_Template_tr_click_0_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectEmployee(row_r11));
    });
    \u0275\u0275elementStart(1, "td", 36);
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
    const row_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r12 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r11.empId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r11.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r11.deptName || row_r11.deptNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r11.position);
  }
}
function ViewDynamicGroupComponent_ng_container_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 46);
    \u0275\u0275listener("ngSubmit", function ViewDynamicGroupComponent_ng_container_67_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pickerSearch());
    });
    \u0275\u0275elementStart(2, "div", 47)(3, "label", 8);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 48);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewDynamicGroupComponent_ng_container_67_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pickerKeyword, $event) || (ctx_r1.pickerKeyword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function ViewDynamicGroupComponent_ng_container_67_Template_input_keydown_enter_6_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r1.pickerSearch());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 7)(9, "label", 8);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "nz-tree-select", 49);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewDynamicGroupComponent_ng_container_67_Template_nz_tree_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pickerDeptNos, $event) || (ctx_r1.pickerDeptNos = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275template(14, ViewDynamicGroupComponent_ng_container_67_div_14_Template, 2, 1, "div", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 51)(16, "label", 8);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "nz-select", 52);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewDynamicGroupComponent_ng_container_67_Template_nz_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pickerEmpOffice, $event) || (ctx_r1.pickerEmpOffice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(21, ViewDynamicGroupComponent_ng_container_67_nz_option_21_Template, 1, 2, "nz-option", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 54)(23, "button", 11);
    \u0275\u0275element(24, "i", 12);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 13);
    \u0275\u0275listener("click", function ViewDynamicGroupComponent_ng_container_67_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pickerClear());
    });
    \u0275\u0275element(28, "i", 14);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(31, ViewDynamicGroupComponent_ng_container_67_nz_alert_31_Template, 1, 1, "nz-alert", 55);
    \u0275\u0275elementStart(32, "nz-table", 56, 2)(34, "thead")(35, "tr")(36, "th", 22);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th", 57);
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
    \u0275\u0275template(52, ViewDynamicGroupComponent_ng_container_67_tr_52_Template, 11, 5, "tr", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const vdgPickerTable_r13 = \u0275\u0275reference(33);
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 42, "common.search", "T\xECm ki\u1EBFm"), " ");
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
    \u0275\u0275property("ngForOf", vdgPickerTable_r13.data);
  }
}
function ViewDynamicGroupComponent_ng_container_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 63);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 64);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "dynGroup.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a kh\xF4ng?"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.deleteTargetName);
  }
}
var I18N_KEYS = [
  "dynGroup.pageTitle",
  "dynGroup.colNo",
  "dynGroup.colEmpId",
  "dynGroup.colEmpName",
  "dynGroup.colUpdatedBy",
  "dynGroup.colUpdateDate",
  "dynGroup.colAction",
  "dynGroup.modalAddTitle",
  "dynGroup.confirmDelete",
  "dynGroup.saveSuccess",
  "dynGroup.saveFail",
  "dynGroup.deleteSuccess",
  "dynGroup.deleteFail",
  "dynGroup.loadFail",
  "common.employee",
  "common.deptName",
  "common.search",
  "common.clearFilter",
  "common.addNew",
  "common.save",
  "common.close",
  "common.confirm",
  "common.cancel",
  "common.delete",
  "common.noData",
  "common.totalRows",
  "common.stt",
  "common.empId",
  "common.empName",
  "common.selectAll",
  "addShift.placeholder.empIdOrName",
  "essDept.exportExcel",
  "arSupervisor.field.emp",
  "arSupervisor.placeholder.selectEmp",
  "arSupervisor.btn.select",
  "arSupervisor.js.empSelected",
  "arSupervisor.js.pleaseSearch",
  "arSupervisor.js.serverError",
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
var EMP_OFFICE_PARENT_CODE = "15118";
var PAGE_SIZE_OPTIONS = [25, 50, 100, 200];
var ViewDynamicGroupComponent = class _ViewDynamicGroupComponent {
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
  searchEmpId = "";
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
  formPersonId = null;
  formEmpDisplay = "";
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
    this.search();
    this.empApi.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(this.buildPickerDeptTree(list ?? [])),
      error: () => this.deptTreeErrorMessage.set(this.i18n.t("mep.msg.loadDeptFailed", "L\u1ED7i khi t\u1EA3i danh s\xE1ch ph\xF2ng ban"))
    });
    this.empApi.getCodeList(EMP_OFFICE_PARENT_CODE).subscribe((list) => this.empOfficeOptions.set(list ?? []));
  }
  search() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.list(this.searchEmpId.trim()).subscribe({
      next: (rows) => {
        this.rows.set(rows ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("dynGroup.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.rows.set([]);
        this.loading.set(false);
      }
    });
  }
  clearSearch() {
    this.searchEmpId = "";
    this.search();
  }
  empLabel(row) {
    return row.empId ? `${row.empId} - ${row.localName ?? ""}` : row.personId;
  }
  // ==================== Modal Thêm mới ====================
  openAddModal() {
    this.formPersonId = null;
    this.formEmpDisplay = "";
    this.modalVisible.set(true);
  }
  closeModal() {
    this.modalVisible.set(false);
  }
  saveForm() {
    if (!this.formPersonId) {
      this.message.warning(this.i18n.t("arSupervisor.js.pleaseSearch", "Vui l\xF2ng Tra c\u1EE9u \u0111\u1EC3 \u0111\u1EA3m b\u1EA3o m\xE3 NV h\u1EE3p l\u1EC7."));
      return;
    }
    const payload = {
      personId: this.formPersonId,
      groupNo: "80000084",
      orderno: null,
      activity: 1
    };
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        if (!res.success) {
          this.message.error(res.error || this.i18n.t("dynGroup.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!"));
          return;
        }
        this.modalVisible.set(false);
        this.message.success(res.message || this.i18n.t("dynGroup.saveSuccess", "L\u01B0u th\xE0nh c\xF4ng!"));
        this.search();
      },
      error: (err) => {
        this.saving.set(false);
        const msg = err?.error?.error || this.i18n.t("arSupervisor.js.serverError", "L\u1ED7i x\u1EED l\xFD server");
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
    return this.deleteTarget ? this.empLabel(this.deleteTarget) : "";
  }
  confirmDelete() {
    if (!this.deleteTarget?.personId)
      return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.personId).subscribe({
      next: (res) => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        if (!res.success) {
          this.message.error(res.error || this.i18n.t("dynGroup.deleteFail", "X\xF3a th\u1EA5t b\u1EA1i!"));
          return;
        }
        this.message.success(res.message || this.i18n.t("dynGroup.deleteSuccess", "X\xF3a th\xE0nh c\xF4ng!"));
        this.search();
      },
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t("dynGroup.deleteFail", "X\xF3a th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  // ==================== Xuất Excel ====================
  /** Xuất excel client-side (bản gốc chỉ có nút Buttons của DataTables) - dùng thư viện xlsx (SheetJS)
   *  để tạo đúng file .xlsx nhị phân (xem CLAUDE.md). */
  exportExcel() {
    const headers = [
      this.i18n.t("dynGroup.colNo", "STT"),
      this.i18n.t("dynGroup.colEmpId", "M\xE3 nh\xE2n vi\xEAn"),
      this.i18n.t("dynGroup.colEmpName", "T\xEAn nh\xE2n vi\xEAn"),
      this.i18n.t("common.deptName", "Ph\xF2ng ban"),
      this.i18n.t("dynGroup.colUpdatedBy", "Ng\u01B0\u1EDDi c\u1EADp nh\u1EADt"),
      this.i18n.t("dynGroup.colUpdateDate", "Ng\xE0y c\u1EADp nh\u1EADt")
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      r.empId,
      r.localName,
      r.deptName,
      r.updatedBy,
      this.toDmyHm(r.updateDate)
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "DanhSach");
    writeFileSync(workbook, "dynamic_group_list.xlsx");
  }
  /** Hiển thị datetime BE trả về (ISO) dạng dd/MM/yyyy HH:mm theo CLAUDE.md. */
  toDmyHm(iso) {
    if (!iso)
      return "";
    const d = new Date(iso);
    if (isNaN(d.getTime()))
      return "";
    const pad = (n) => String(n).padStart(2, "0");
    return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
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
    this.formPersonId = row.personId;
    this.formEmpDisplay = `${row.empId} - ${row.localName}`;
    this.pickerVisible.set(false);
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
  static \u0275fac = function ViewDynamicGroupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewDynamicGroupComponent)(\u0275\u0275directiveInject(ViewDynamicGroupService), \u0275\u0275directiveInject(ChangeUserService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewDynamicGroupComponent, selectors: [["app-view-dynamic-group"]], decls: 73, vars: 99, consts: [["vdgTable", ""], ["vdgTotalTpl", ""], ["vdgPickerTable", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-4"], [1, "form-label"], ["nz-input", "", "name", "vdgSearchEmpId", 3, "ngModelChange", "ngModel", "placeholder"], [1, "col-md-8", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], [1, "col-12", "d-flex", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzType", "default", "type", "button", 1, "vdg-btn-export", 3, "click"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "130px"], ["nzWidth", "200px"], ["nzWidth", "150px"], ["nzWidth", "140px", 1, "text-center"], ["nzWidth", "90px", 1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkDisabled", "nzOkText", "nzCancelText"], [4, "nzModalContent"], ["nzWidth", "900px", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzFooter"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "7", 1, "text-center", "text-muted"], [1, "text-center"], ["nz-button", "", "nzType", "text", "nzSize", "small", "nzDanger", "", 3, "click", "title"], [1, "bx", "bx-trash"], [1, "text-danger"], [1, "d-flex", "gap-2"], ["nz-input", "", "name", "vdgEmpDisplay", "readonly", "", 3, "ngModel", "placeholder"], ["nz-button", "", "nzType", "default", "type", "button", 3, "click"], ["class", "text-success d-block mt-1", 4, "ngIf"], [1, "text-success", "d-block", "mt-1"], [1, "bx", "bx-check"], [1, "row", "g-2", "align-items-end", "mb-3", 3, "ngSubmit"], [1, "col-md-5"], ["nz-input", "", "name", "vdgPickerKeyword", 3, "ngModelChange", "keydown.enter", "ngModel", "placeholder"], ["name", "vdgPickerDeptNos", "nzCheckable", "", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["class", "text-danger small mt-1", 4, "ngIf"], [1, "col-md-3"], ["name", "vdgPickerEmpOffice", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col-12", "d-flex", "gap-2"], ["nzType", "error", "class", "mb-2", 3, "nzMessage", 4, "ngIf"], ["nzSize", "small", 3, "nzData", "nzLoading", "nzPageSize"], ["nzWidth", "110px"], ["class", "vdg-row-clickable", 3, "click", 4, "ngFor", "ngForOf"], [1, "text-danger", "small", "mt-1"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-2", 3, "nzMessage"], [1, "vdg-row-clickable", 3, "click"], [1, "mb-1"], [1, "fw-bold", "mb-0"]], template: function ViewDynamicGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "nz-card", 5)(3, "form", 6);
      \u0275\u0275listener("ngSubmit", function ViewDynamicGroupComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 7)(5, "label", 8);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 9);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewDynamicGroupComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchEmpId, $event) || (ctx.searchEmpId = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 10)(11, "button", 11);
      \u0275\u0275element(12, "i", 12);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 13);
      \u0275\u0275listener("click", function ViewDynamicGroupComponent_Template_button_click_15_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(16, "i", 14);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 15)(20, "button", 16);
      \u0275\u0275listener("click", function ViewDynamicGroupComponent_Template_button_click_20_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(21, "i", 17);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 18);
      \u0275\u0275listener("click", function ViewDynamicGroupComponent_Template_button_click_24_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(25, "i", 19);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(28, "nz-card");
      \u0275\u0275template(29, ViewDynamicGroupComponent_nz_alert_29_Template, 1, 1, "nz-alert", 20);
      \u0275\u0275elementStart(30, "nz-table", 21, 0)(32, "thead")(33, "tr")(34, "th", 22);
      \u0275\u0275text(35);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th", 23);
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "th", 24);
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "th", 24);
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "th", 25);
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "th", 26);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "th", 27);
      \u0275\u0275text(53);
      \u0275\u0275pipe(54, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "tbody");
      \u0275\u0275template(56, ViewDynamicGroupComponent_tr_56_Template, 4, 4, "tr", 28)(57, ViewDynamicGroupComponent_tr_57_Template, 17, 13, "tr", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275template(58, ViewDynamicGroupComponent_ng_template_58_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(60, "nz-modal", 30);
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275pipe(62, "translate");
      \u0275\u0275pipe(63, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewDynamicGroupComponent_Template_nz_modal_nzOnCancel_60_listener() {
        return ctx.closeModal();
      })("nzOnOk", function ViewDynamicGroupComponent_Template_nz_modal_nzOnOk_60_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(64, ViewDynamicGroupComponent_ng_container_64_Template, 14, 14, "ng-container", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "nz-modal", 32);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewDynamicGroupComponent_Template_nz_modal_nzOnCancel_65_listener() {
        return ctx.closePicker();
      });
      \u0275\u0275template(67, ViewDynamicGroupComponent_ng_container_67_Template, 53, 63, "ng-container", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "nz-modal", 33);
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275pipe(71, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewDynamicGroupComponent_Template_nz_modal_nzOnCancel_68_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function ViewDynamicGroupComponent_Template_nz_modal_nzOnOk_68_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(72, ViewDynamicGroupComponent_ng_container_72_Template, 6, 5, "ng-container", 31);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const vdgTable_r14 = \u0275\u0275reference(31);
      const vdgTotalTpl_r15 = \u0275\u0275reference(59);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 38, "common.employee", "Nh\xE2n vi\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchEmpId);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 41, "addShift.placeholder.empIdOrName", "Nh\u1EADp m\xE3 / t\xEAn nh\xE2n vi\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 44, "common.search", "T\xECm ki\u1EBFm"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(18, 47, "common.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(23, 50, "common.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(27, 53, "essDept.exportExcel", "Xu\u1EA5t excel"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", vdgTotalTpl_r15)("nzScroll", \u0275\u0275pureFunction0(98, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 56, "dynGroup.colNo", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 59, "dynGroup.colEmpId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 62, "dynGroup.colEmpName", "T\xEAn nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 65, "common.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 68, "dynGroup.colUpdatedBy", "Ng\u01B0\u1EDDi c\u1EADp nh\u1EADt"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 71, "dynGroup.colUpdateDate", "Ng\xE0y c\u1EADp nh\u1EADt"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 74, "dynGroup.colAction", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", vdgTable_r14.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", \u0275\u0275pipeBind2(61, 77, "dynGroup.modalAddTitle", "Th\xEAm nh\xE2n vi\xEAn \u0111\u1EB7c bi\u1EC7t"))("nzOkLoading", ctx.saving())("nzOkDisabled", !ctx.formPersonId)("nzOkText", \u0275\u0275pipeBind2(62, 80, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(63, 83, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(5);
      \u0275\u0275property("nzVisible", ctx.pickerVisible())("nzTitle", \u0275\u0275pipeBind2(66, 86, "empSearch.title", "T\xECm ki\u1EBFm nh\xE2n vi\xEAn"))("nzFooter", null);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(69, 89, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(70, 92, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(71, 95, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, NzSelectModule, NzOptionComponent, NzSelectComponent, NzTreeSelectModule, NzTreeSelectComponent, TranslatePipe], styles: ["\n.vdg-btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n.vdg-row-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=view-dynamic-group.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewDynamicGroupComponent, [{
    type: Component,
    args: [{ selector: "app-view-dynamic-group", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzButtonModule,
      NzModalModule,
      NzAlertModule,
      NzSelectModule,
      NzTreeSelectModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm - \u0111\u1EE9ng im khi cu\u1ED9n (xem .sticky-filter-card trong styles.css) -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3" (ngSubmit)="search()">
        <div class="col-md-4">
          <label class="form-label">{{ 'common.employee' | translate:'Nh\xE2n vi\xEAn' }}</label>
          <input nz-input [(ngModel)]="searchEmpId" name="vdgSearchEmpId"
                 [placeholder]="'addShift.placeholder.empIdOrName' | translate:'Nh\u1EADp m\xE3 / t\xEAn nh\xE2n vi\xEAn'">
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
          <button nz-button nzType="default" type="button" class="vdg-btn-export" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'essDept.exportExcel' | translate:'Xu\u1EA5t excel' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="vdgTotalTpl"
                [nzScroll]="{ x: '900px', y: 'calc(100vh - 420px)' }" #vdgTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'dynGroup.colNo' | translate:'STT' }}</th>
            <th nzWidth="130px">{{ 'dynGroup.colEmpId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
            <th nzWidth="200px">{{ 'dynGroup.colEmpName' | translate:'T\xEAn nh\xE2n vi\xEAn' }}</th>
            <th nzWidth="200px">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
            <th nzWidth="150px">{{ 'dynGroup.colUpdatedBy' | translate:'Ng\u01B0\u1EDDi c\u1EADp nh\u1EADt' }}</th>
            <th class="text-center" nzWidth="140px">{{ 'dynGroup.colUpdateDate' | translate:'Ng\xE0y c\u1EADp nh\u1EADt' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'dynGroup.colAction' | translate:'Thao t\xE1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="7" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of vdgTable.data; let i = index">
            <td class="text-center">{{ i + 1 }}</td>
            <td [attr.title]="row.empId || null">{{ row.empId }}</td>
            <td [attr.title]="row.localName || null">{{ row.localName }}</td>
            <td [attr.title]="row.deptName || null">{{ row.deptName }}</td>
            <td>{{ row.updatedBy }}</td>
            <td class="text-center">{{ toDmyHm(row.updateDate) }}</td>
            <td class="text-center">
              <button nz-button nzType="text" nzSize="small" nzDanger
                      [title]="'common.delete' | translate:'X\xF3a'" (click)="openDeleteConfirm(row)">
                <i class="bx bx-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
        <ng-template #vdgTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal Th\xEAm m\u1EDBi nh\xE2n vi\xEAn \u0111\u1EB7c bi\u1EC7t -->
<nz-modal [nzVisible]="modalVisible()" [nzTitle]="'dynGroup.modalAddTitle' | translate:'Th\xEAm nh\xE2n vi\xEAn \u0111\u1EB7c bi\u1EC7t'"
          (nzOnCancel)="closeModal()" (nzOnOk)="saveForm()" [nzOkLoading]="saving()" [nzOkDisabled]="!formPersonId"
          [nzOkText]="'common.save' | translate:'L\u01B0u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <label class="form-label">
      {{ 'arSupervisor.field.emp' | translate:'Nh\xE2n vi\xEAn' }} <span class="text-danger">*</span>
    </label>
    <div class="d-flex gap-2">
      <input nz-input [ngModel]="formEmpDisplay" name="vdgEmpDisplay" readonly
             [placeholder]="'arSupervisor.placeholder.selectEmp' | translate:'Ch\u1ECDn nh\xE2n vi\xEAn...'">
      <button nz-button nzType="default" type="button" (click)="openPicker()">
        <i class="bx bx-search"></i> {{ 'arSupervisor.btn.select' | translate:'Ch\u1ECDn' }}
      </button>
    </div>
    <small *ngIf="formPersonId" class="text-success d-block mt-1">
      <i class="bx bx-check"></i> {{ 'arSupervisor.js.empSelected' | translate:'\u0110\xE3 ch\u1ECDn NV: ' }}{{ formEmpDisplay }}
    </small>
  </ng-container>
</nz-modal>

<!-- Popup t\xECm ki\u1EBFm nh\xE2n vi\xEAn - t\xE1i d\xF9ng pattern ChangeUserComponent (thay fragment employeeSearchModal.html) -->
<nz-modal [nzVisible]="pickerVisible()" [nzTitle]="'empSearch.title' | translate:'T\xECm ki\u1EBFm nh\xE2n vi\xEAn'"
          nzWidth="900px" (nzOnCancel)="closePicker()" [nzFooter]="null">
  <ng-container *nzModalContent>
    <form class="row g-2 align-items-end mb-3" (ngSubmit)="pickerSearch()">
      <div class="col-md-5">
        <label class="form-label">{{ 'empSearch.field.keyword' | translate:'M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn' }}</label>
        <input nz-input [(ngModel)]="pickerKeyword" name="vdgPickerKeyword"
               [placeholder]="'empSearch.placeholder.keyword' | translate:'Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn'"
               (keydown.enter)="$event.preventDefault(); pickerSearch()">
      </div>
      <div class="col-md-4">
        <label class="form-label">{{ 'empSearch.field.dept' | translate:'Ph\xF2ng ban' }}</label>
        <nz-tree-select class="w-100" [nzNodes]="deptNodes()" [(ngModel)]="pickerDeptNos" name="vdgPickerDeptNos"
                         nzCheckable nzShowSearch nzAllowClear
                         [nzPlaceHolder]="'vdp.search.dept.placeholder' | translate:'Ch\u1ECDn ph\xF2ng ban'"></nz-tree-select>
        <div *ngIf="deptTreeErrorMessage()" class="text-danger small mt-1">{{ deptTreeErrorMessage() }}</div>
      </div>
      <div class="col-md-3">
        <label class="form-label">{{ 'empSearch.field.empOffice' | translate:'Tr\u1EA1ng th\xE1i l\xE0m vi\u1EC7c' }}</label>
        <nz-select class="w-100" [(ngModel)]="pickerEmpOffice" name="vdgPickerEmpOffice" nzAllowClear
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

    <nz-table [nzData]="pickerRows()" [nzLoading]="pickerLoading()" [nzPageSize]="10" nzSize="small" #vdgPickerTable>
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
        <tr *ngFor="let row of vdgPickerTable.data; let i = index" class="vdg-row-clickable" (click)="selectEmployee(row)">
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

<!-- Modal x\xE1c nh\u1EADn x\xF3a -->
<nz-modal [nzVisible]="deleteVisible()" [nzTitle]="'common.confirm' | translate:'X\xE1c nh\u1EADn'"
          (nzOnCancel)="closeDeleteConfirm()" (nzOnOk)="confirmDelete()" [nzOkLoading]="deleting()"
          [nzOkText]="'common.confirm' | translate:'X\xE1c nh\u1EADn'" [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'">
  <ng-container *nzModalContent>
    <p class="mb-1">{{ 'dynGroup.confirmDelete' | translate:'B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a kh\xF4ng?' }}</p>
    <p class="fw-bold mb-0">{{ deleteTargetName }}</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-dynamic-group/view-dynamic-group.component.css */\n.vdg-btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n.vdg-row-clickable {\n  cursor: pointer;\n}\n/*# sourceMappingURL=view-dynamic-group.component.css.map */\n"] }]
  }], () => [{ type: ViewDynamicGroupService }, { type: ChangeUserService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewDynamicGroupComponent, { className: "ViewDynamicGroupComponent", filePath: "src/app/view-dynamic-group/view-dynamic-group.component.ts", lineNumber: 78 });
})();
export {
  ViewDynamicGroupComponent
};
//# debugId=3acc4720-5f07-5c24-b142-c2c07e57f02d
//# sourceMappingURL=chunk-F6TFUHV3.js.map
