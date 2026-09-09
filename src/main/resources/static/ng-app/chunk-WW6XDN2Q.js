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

// src/app/view-pa-emp-account/view-pa-emp-account.service.ts
var API_BASE = "/pa/workManagement/api/empAccount";
var ViewPaEmpAccountService = class _ViewPaEmpAccountService {
  constructor(http) {
    this.http = http;
  }
  http;
  getPageList(params) {
    let httpParams = new HttpParams().set("draw", params.draw).set("start", params.start).set("length", params.length);
    if (params.empSearch)
      httpParams = httpParams.set("empSearch", params.empSearch);
    if (params.deptNos)
      httpParams = httpParams.set("deptNos", params.deptNos);
    if (params.empOfficeSearch)
      httpParams = httpParams.set("empOfficeSearch", params.empOfficeSearch);
    if (params.bankSearch)
      httpParams = httpParams.set("bankSearch", params.bankSearch);
    if (params.fromDateStarted)
      httpParams = httpParams.set("fromDateStarted", params.fromDateStarted);
    if (params.toDateStarted)
      httpParams = httpParams.set("toDateStarted", params.toDateStarted);
    return this.http.get(`${API_BASE}/list`, {
      params: httpParams,
      withCredentials: true
    });
  }
  getOne(paEmpAccountNo) {
    return this.http.get(`${API_BASE}/${paEmpAccountNo}`, { withCredentials: true });
  }
  save(payload) {
    return this.http.post(`${API_BASE}/save`, payload, { withCredentials: true });
  }
  deleteList(ids) {
    return this.http.request("DELETE", `${API_BASE}/deleteList`, {
      body: ids,
      withCredentials: true
    });
  }
  static \u0275fac = function ViewPaEmpAccountService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewPaEmpAccountService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewPaEmpAccountService, factory: _ViewPaEmpAccountService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewPaEmpAccountService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-pa-emp-account/view-pa-emp-account.component.ts
var _c0 = () => ({ x: "1900px", y: "calc(100vh - 420px)" });
var _c1 = () => ({ standalone: true });
function ViewPaEmpAccountComponent_nz_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 48);
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r2.codeNo)("nzLabel", c_r2.codeName);
  }
}
function ViewPaEmpAccountComponent_nz_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 48);
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r3.codeNo)("nzLabel", c_r3.codeName);
  }
}
function ViewPaEmpAccountComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.deptTreeErrorMessage());
  }
}
function ViewPaEmpAccountComponent_nz_alert_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 50);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r3.errorMessage() ?? "");
  }
}
function ViewPaEmpAccountComponent_tr_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 51);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewPaEmpAccountComponent_tr_115_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 52);
    \u0275\u0275listener("click", function ViewPaEmpAccountComponent_tr_115_Template_tr_click_0_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openEditModal(row_r6));
    });
    \u0275\u0275elementStart(1, "td", 53)(2, "label", 54);
    \u0275\u0275listener("click", function ViewPaEmpAccountComponent_tr_115_Template_label_click_2_listener($event) {
      return $event.stopPropagation();
    })("ngModelChange", function ViewPaEmpAccountComponent_tr_115_Template_label_ngModelChange_2_listener($event) {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleRow(row_r6, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 53);
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
    \u0275\u0275elementStart(13, "td", 53);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 53);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td", 53);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td", 53);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td", 53);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r3.isChecked(row_r6))("ngModelOptions", \u0275\u0275pureFunction0(26, _c1));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r3.pageIndex - 1) * ctx_r3.pageSize + i_r7 + 1);
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
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.toDmy(row_r6.dateStarted));
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.accountTypeName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.accountTypeName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.accountNo || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.accountNo);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.accountAddress || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.accountAddress);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.securityNo || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.securityNo);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.taxNo || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.taxNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.createdBy);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.toDmy(row_r6.createDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.updatedBy);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.toDmy(row_r6.updateDate));
  }
}
function ViewPaEmpAccountComponent_ng_template_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r8 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r8, " ");
  }
}
function ViewPaEmpAccountComponent_ng_container_122_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 73);
    \u0275\u0275listener("click", function ViewPaEmpAccountComponent_ng_container_122_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openPicker());
    });
    \u0275\u0275element(1, "i", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "arSupervisor.btn.select", "Ch\u1ECDn"), " ");
  }
}
function ViewPaEmpAccountComponent_ng_container_122_small_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 74);
    \u0275\u0275element(1, "i", 75);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(3, 2, "arSupervisor.js.empSelected", "\u0110\xE3 ch\u1ECDn NV: "), "", ctx_r3.form.empDisplay, " ");
  }
}
function ViewPaEmpAccountComponent_ng_container_122_nz_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 48);
  }
  if (rf & 2) {
    const c_r11 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r11.codeNo)("nzLabel", c_r11.codeName);
  }
}
function ViewPaEmpAccountComponent_ng_container_122_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 55)(2, "div", 3)(3, "label", 56);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span", 57);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 58);
    \u0275\u0275element(9, "input", 59);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275template(11, ViewPaEmpAccountComponent_ng_container_122_button_11_Template, 4, 4, "button", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ViewPaEmpAccountComponent_ng_container_122_small_12_Template, 4, 5, "small", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 62)(14, "label", 56);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "nz-select", 63);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaEmpAccountComponent_ng_container_122_Template_nz_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.accountType, $event) || (ctx_r3.form.accountType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(19, ViewPaEmpAccountComponent_ng_container_122_nz_option_19_Template, 1, 2, "nz-option", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 62)(21, "label", 56);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaEmpAccountComponent_ng_container_122_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.accountNo, $event) || (ctx_r3.form.accountNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 62)(26, "label", 56);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaEmpAccountComponent_ng_container_122_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.accountAddress, $event) || (ctx_r3.form.accountAddress = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 62)(31, "label", 56);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaEmpAccountComponent_ng_container_122_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.accountName, $event) || (ctx_r3.form.accountName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 62)(36, "label", 56);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaEmpAccountComponent_ng_container_122_Template_input_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.securityNo, $event) || (ctx_r3.form.securityNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 62)(41, "label", 56);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaEmpAccountComponent_ng_container_122_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.securityPayDate, $event) || (ctx_r3.form.securityPayDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 62)(46, "label", 56);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaEmpAccountComponent_ng_container_122_Template_input_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.fundNo, $event) || (ctx_r3.form.fundNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 62)(51, "label", 56);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "input", 70);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaEmpAccountComponent_ng_container_122_Template_input_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.fundPayDate, $event) || (ctx_r3.form.fundPayDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 62)(56, "label", 56);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "input", 71);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaEmpAccountComponent_ng_container_122_Template_input_ngModelChange_59_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.taxNo, $event) || (ctx_r3.form.taxNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 62)(61, "label", 56);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "nz-select", 72);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaEmpAccountComponent_ng_container_122_Template_nz_select_ngModelChange_64_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.activity, $event) || (ctx_r3.form.activity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(65, "nz-option", 48);
    \u0275\u0275pipe(66, "translate");
    \u0275\u0275element(67, "nz-option", 48);
    \u0275\u0275pipe(68, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 32, "pa.empAccount.supervisor", "Nh\xE2n vi\xEAn"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r3.form.empDisplay)("ngModelOptions", \u0275\u0275pureFunction0(77, _c1))("placeholder", \u0275\u0275pipeBind2(10, 35, "pa.empAccount.empSelectPlaceholder", "Ch\u1ECDn nh\xE2n vi\xEAn..."));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.isNew());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.form.personId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 38, "pa.empAccount.bank", "Ng\xE2n h\xE0ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.accountType);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(18, 41, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.bankOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 44, "pa.empAccount.accountNo", "T\xE0i kho\u1EA3n ng\xE2n h\xE0ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.accountNo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 47, "pa.empAccount.accountAddress", "Chi nh\xE1nh"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.accountAddress);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 50, "pa.empAccount.accountName", "T\xEAn t\xE0i kho\u1EA3n"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.accountName);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(38, 53, "pa.empAccount.securityNo", "M\xE3 s\u1ED1 BHXH"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.securityNo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 56, "pa.empAccount.securityPayDate", "Th\u1EDDi gian \u0111\xF3ng BH"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.securityPayDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 59, "pa.empAccount.fundNo", "M\xE3 s\u1ED1 c\xF4ng \u0111o\xE0n"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.fundNo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(53, 62, "pa.empAccount.fundPayDate", "Th\u1EDDi gian \u0111\xF3ng C\u0110"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.fundPayDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(58, 65, "pa.empAccount.taxNo", "M\xE3 s\u1ED1 thu\u1EBF"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.taxNo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(63, 68, "pa.empAccount.activity", "Tr\u1EA1ng th\xE1i"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.activity);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzValue", 1)("nzLabel", \u0275\u0275pipeBind2(66, 71, "pa.empAccount.activity.active", "Ho\u1EA1t \u0111\u1ED9ng"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzValue", 0)("nzLabel", \u0275\u0275pipeBind2(68, 74, "pa.empAccount.activity.inactive", "Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng"));
  }
}
function ViewPaEmpAccountComponent_ng_container_125_nz_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 48);
  }
  if (rf & 2) {
    const c_r13 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r13.codeNo)("nzLabel", c_r13.codeName);
  }
}
function ViewPaEmpAccountComponent_ng_container_125_nz_alert_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 84);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzMessage", ctx_r3.pickerErrorMessage() ?? "");
  }
}
function ViewPaEmpAccountComponent_ng_container_125_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 52);
    \u0275\u0275listener("click", function ViewPaEmpAccountComponent_ng_container_125_tr_51_Template_tr_click_0_listener() {
      const row_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.selectEmployee(row_r15));
    });
    \u0275\u0275elementStart(1, "td", 53);
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
    const row_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r16 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r15.empId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r15.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r15.deptName || row_r15.deptNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r15.position);
  }
}
function ViewPaEmpAccountComponent_ng_container_125_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 76);
    \u0275\u0275listener("ngSubmit", function ViewPaEmpAccountComponent_ng_container_125_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.pickerSearch());
    });
    \u0275\u0275elementStart(2, "div", 77)(3, "label", 7);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 78);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaEmpAccountComponent_ng_container_125_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.pickerKeyword, $event) || (ctx_r3.pickerKeyword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function ViewPaEmpAccountComponent_ng_container_125_Template_input_keydown_enter_6_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r3.pickerSearch());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 16)(9, "label", 7);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "nz-tree-select", 79);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaEmpAccountComponent_ng_container_125_Template_nz_tree_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.pickerDeptNos, $event) || (ctx_r3.pickerDeptNos = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 6)(15, "label", 7);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "nz-select", 80);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaEmpAccountComponent_ng_container_125_Template_nz_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.pickerEmpOffice, $event) || (ctx_r3.pickerEmpOffice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(20, ViewPaEmpAccountComponent_ng_container_125_nz_option_20_Template, 1, 2, "nz-option", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 81)(22, "button", 20);
    \u0275\u0275element(23, "i", 21);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 22);
    \u0275\u0275listener("click", function ViewPaEmpAccountComponent_ng_container_125_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.pickerClear());
    });
    \u0275\u0275element(27, "i", 23);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(30, ViewPaEmpAccountComponent_ng_container_125_nz_alert_30_Template, 1, 1, "nz-alert", 82);
    \u0275\u0275elementStart(31, "nz-table", 83, 1)(33, "thead")(34, "tr")(35, "th", 34);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th", 35);
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
    \u0275\u0275template(51, ViewPaEmpAccountComponent_ng_container_125_tr_51_Template, 11, 5, "tr", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const vpeaPickerTable_r17 = \u0275\u0275reference(32);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 23, "empSearch.field.keyword", "M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.pickerKeyword);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(7, 26, "empSearch.placeholder.keyword", "Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 29, "empSearch.field.dept", "Ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzNodes", ctx_r3.deptNodes());
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.pickerDeptNos);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(13, 32, "vdp.search.dept.placeholder", "Ch\u1ECDn ph\xF2ng ban"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 35, "empSearch.field.empOffice", "Tr\u1EA1ng th\xE1i l\xE0m vi\u1EC7c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.pickerEmpOffice);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(19, 38, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.empOfficeOptions());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(25, 41, "common.search", "T\xECm ki\u1EBFm"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(29, 44, "empSearch.btn.clearFilter", "X\xF3a b\u1ED9 l\u1ECDc"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.pickerErrorMessage());
    \u0275\u0275advance();
    \u0275\u0275property("nzData", ctx_r3.pickerRows())("nzLoading", ctx_r3.pickerLoading())("nzPageSize", 10);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 47, "empSearch.col.no", "STT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 50, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 53, "common.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 56, "empSearch.field.dept", "Ph\xF2ng ban"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 59, "epi.field.position", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", vpeaPickerTable_r17.data);
  }
}
function ViewPaEmpAccountComponent_ng_container_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 85);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(3, 2, "pa.empAccount.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a c\xE1c b\u1EA3n ghi \u0111\xE3 ch\u1ECDn?"), " (", ctx_r3.deleteCount, ")");
  }
}
var I18N_KEYS = [
  "pa.empAccount.pageTitle",
  "pa.empAccount.no",
  "pa.empAccount.empId",
  "pa.empAccount.localName",
  "pa.empAccount.dept",
  "pa.empAccount.deptPlaceholder",
  "pa.empAccount.position",
  "pa.empAccount.dateStarted",
  "pa.empAccount.bank",
  "pa.empAccount.accountNo",
  "pa.empAccount.accountAddress",
  "pa.empAccount.accountName",
  "pa.empAccount.securityNo",
  "pa.empAccount.fundNo",
  "pa.empAccount.securityPayDate",
  "pa.empAccount.fundPayDate",
  "pa.empAccount.taxNo",
  "pa.empAccount.activity",
  "pa.empAccount.activity.active",
  "pa.empAccount.activity.inactive",
  "pa.empAccount.empOffice",
  "pa.empAccount.empSearch",
  "pa.empAccount.createdBy",
  "pa.empAccount.createDate",
  "pa.empAccount.updatedBy",
  "pa.empAccount.updateDate",
  "pa.empAccount.supervisor",
  "pa.empAccount.empSelectPlaceholder",
  "pa.empAccount.search",
  "pa.empAccount.addNew",
  "pa.empAccount.delete",
  "pa.empAccount.save",
  "pa.empAccount.addTitle",
  "pa.empAccount.editTitle",
  "pa.empAccount.confirmDelete",
  "pa.empAccount.selectRequired",
  "pa.empAccount.validateRequired",
  "common.stt",
  "common.action",
  "common.confirm",
  "common.cancel",
  "common.close",
  "common.search",
  "common.clearFilter",
  "common.noData",
  "common.totalRows",
  "common.selectAll",
  "common.loadFail",
  "common.saveSuccess",
  "common.saveFail",
  "common.deleteSuccess",
  "common.deleteFail",
  "essDept.exportExcel",
  "arSupervisor.field.emp",
  "arSupervisor.placeholder.selectEmp",
  "arSupervisor.btn.select",
  "arSupervisor.js.empSelected",
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
var BANK_PARENT_CODE = "14015883";
var EMP_OFFICE_PARENT_CODE = "15118";
var PAGE_SIZE_OPTIONS = [10, 20, 50, 100];
var EMPTY_FORM = {
  paEmpAccountNo: null,
  personId: null,
  empDisplay: "",
  accountType: null,
  accountNo: "",
  accountAddress: "",
  accountName: "",
  securityNo: "",
  securityPayDate: "",
  fundNo: "",
  fundPayDate: "",
  taxNo: "",
  activity: 1
};
var ViewPaEmpAccountComponent = class _ViewPaEmpAccountComponent {
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
  recordsFiltered = signal(
    0,
    ...ngDevMode ? [{ debugName: "recordsFiltered" }] : (
      /* istanbul ignore next */
      []
    )
  );
  exporting = signal(
    false,
    ...ngDevMode ? [{ debugName: "exporting" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pageIndex = 1;
  pageSize = 20;
  empSearch = "";
  deptNos = [];
  empOfficeSearch = null;
  bankSearch = null;
  fromDate = null;
  toDate = null;
  deptNodes = signal(
    [],
    ...ngDevMode ? [{ debugName: "deptNodes" }] : (
      /* istanbul ignore next */
      []
    )
  );
  bankOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "bankOptions" }] : (
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
  deptChildrenMap = /* @__PURE__ */ new Map();
  checkedKeys = signal(
    /* @__PURE__ */ new Set(),
    ...ngDevMode ? [{ debugName: "checkedKeys" }] : (
      /* istanbul ignore next */
      []
    )
  );
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
  // ==================== Popup tìm kiếm nhân viên (tái dùng pattern ChangeUserComponent) ====================
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
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
    this.empApi.getCodeList(BANK_PARENT_CODE).subscribe((list) => this.bankOptions.set(list ?? []));
    this.empApi.getCodeList(EMP_OFFICE_PARENT_CODE).subscribe((list) => this.empOfficeOptions.set(list ?? []));
    this.search();
  }
  loadDeptTree() {
    this.empApi.getAuthorizedDepartments().subscribe({
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
   *  khớp hành vi cascade của widget DeptTree.js gốc (xem giải thích ở ManageEmpPositionInfoComponent). */
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
  // ==================== Tra cứu ====================
  search() {
    this.pageIndex = 1;
    this.checkedKeys.set(/* @__PURE__ */ new Set());
    this.loadPage();
  }
  clearSearch() {
    this.empSearch = "";
    this.deptNos = [];
    this.empOfficeSearch = null;
    this.bankSearch = null;
    this.fromDate = null;
    this.toDate = null;
    this.search();
  }
  onPageIndexChange(pageIndex) {
    this.pageIndex = pageIndex;
    this.checkedKeys.set(/* @__PURE__ */ new Set());
    this.loadPage();
  }
  onPageSizeChange(pageSize) {
    this.pageSize = pageSize;
    this.pageIndex = 1;
    this.checkedKeys.set(/* @__PURE__ */ new Set());
    this.loadPage();
  }
  loadPage() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getPageList({
      empSearch: this.empSearch.trim(),
      deptNos: this.expandDeptSelection(this.deptNos).join(","),
      empOfficeSearch: this.empOfficeSearch,
      bankSearch: this.bankSearch,
      fromDateStarted: this.formatYmd(this.fromDate),
      toDateStarted: this.formatYmd(this.toDate),
      draw: this.pageIndex,
      start: (this.pageIndex - 1) * this.pageSize,
      length: this.pageSize
    }).subscribe({
      next: (res) => {
        if (res.error) {
          this.errorMessage.set(res.error);
          this.rows.set([]);
          this.recordsFiltered.set(0);
        } else {
          this.rows.set(res.data ?? []);
          this.recordsFiltered.set(res.recordsFiltered ?? 0);
        }
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.rows.set([]);
        this.recordsFiltered.set(0);
        this.loading.set(false);
      }
    });
  }
  // ==================== Chọn dòng (checkbox) ====================
  isChecked(row) {
    return this.checkedKeys().has(row.paEmpAccountNo);
  }
  toggleRow(row, checked) {
    const set = new Set(this.checkedKeys());
    checked ? set.add(row.paEmpAccountNo) : set.delete(row.paEmpAccountNo);
    this.checkedKeys.set(set);
  }
  get allChecked() {
    return this.rows().length > 0 && this.rows().every((r) => this.checkedKeys().has(r.paEmpAccountNo));
  }
  get someChecked() {
    return this.rows().some((r) => this.checkedKeys().has(r.paEmpAccountNo)) && !this.allChecked;
  }
  toggleAll(checked) {
    this.checkedKeys.set(checked ? new Set(this.rows().map((r) => r.paEmpAccountNo)) : /* @__PURE__ */ new Set());
  }
  // ==================== Modal Thêm mới / Chỉnh sửa ====================
  openAddModal() {
    this.isNew.set(true);
    this.form = __spreadValues({}, EMPTY_FORM);
    this.modalVisible.set(true);
  }
  openEditModal(row) {
    this.api.getOne(row.paEmpAccountNo).subscribe({
      next: (d) => {
        this.isNew.set(false);
        this.form = {
          paEmpAccountNo: d.paEmpAccountNo,
          personId: d.personId,
          empDisplay: `${d.empId || ""} - ${d.localName || ""}`,
          accountType: d.accountType,
          accountNo: d.accountNo || "",
          accountAddress: d.accountAddress || "",
          accountName: d.accountName || "",
          securityNo: d.securityNo || "",
          securityPayDate: d.securityPayDate || "",
          fundNo: d.fundNo || "",
          fundPayDate: d.fundPayDate || "",
          taxNo: d.taxNo || "",
          activity: d.activity != null ? d.activity : 1
        };
        this.modalVisible.set(true);
      },
      error: (err) => {
        this.message.error(err?.error?.error || this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  closeModal() {
    this.modalVisible.set(false);
  }
  saveForm() {
    if (!this.form.personId) {
      this.message.warning(this.i18n.t("pa.empAccount.validateRequired", "Vui l\xF2ng ch\u1ECDn nh\xE2n vi\xEAn!"));
      return;
    }
    const payload = {
      paEmpAccountNo: this.form.paEmpAccountNo,
      personId: this.form.personId,
      accountType: this.form.accountType,
      accountNo: this.form.accountNo.trim() || null,
      accountAddress: this.form.accountAddress.trim() || null,
      accountName: this.form.accountName.trim() || null,
      securityNo: this.form.securityNo.trim() || null,
      securityPayDate: this.form.securityPayDate.trim() || null,
      fundNo: this.form.fundNo.trim() || null,
      fundPayDate: this.form.fundPayDate.trim() || null,
      taxNo: this.form.taxNo.trim() || null,
      activity: this.form.activity
    };
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.message.success(res.message || this.i18n.t("common.saveSuccess", "L\u01B0u th\xE0nh c\xF4ng!"));
        this.search();
      },
      error: (err) => {
        this.saving.set(false);
        const msg = err?.error?.error || this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!");
        this.message.error(msg);
      }
    });
  }
  // ==================== Popup tìm kiếm nhân viên ====================
  openPicker() {
    this.pickerKeyword = "";
    this.pickerDeptNos = [];
    this.pickerEmpOffice = null;
    this.pickerRows.set([]);
    this.pickerErrorMessage.set(null);
    this.pickerVisible.set(true);
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
    this.form.personId = row.personId;
    this.form.empDisplay = `${row.empId} - ${row.localName}`;
    this.pickerVisible.set(false);
  }
  // ==================== Xóa hàng loạt ====================
  openDeleteConfirm() {
    if (this.checkedKeys().size === 0) {
      this.message.warning(this.i18n.t("pa.empAccount.selectRequired", "Vui l\xF2ng ch\u1ECDn \xEDt nh\u1EA5t m\u1ED9t b\u1EA3n ghi!"));
      return;
    }
    this.deleteVisible.set(true);
  }
  closeDeleteConfirm() {
    this.deleteVisible.set(false);
  }
  get deleteCount() {
    return this.checkedKeys().size;
  }
  confirmDelete() {
    const ids = Array.from(this.checkedKeys());
    if (ids.length === 0)
      return;
    this.deleting.set(true);
    this.api.deleteList(ids).subscribe({
      next: (res) => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.message.success(res.message || this.i18n.t("common.deleteSuccess", "X\xF3a th\xE0nh c\xF4ng!"));
        this.checkedKeys.set(/* @__PURE__ */ new Set());
        this.loadPage();
      },
      error: (err) => {
        this.deleting.set(false);
        this.message.error(err?.error?.error || this.i18n.t("common.deleteFail", "X\xF3a th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  // ==================== Xuất Excel ====================
  exportExcel() {
    this.exporting.set(true);
    this.api.getPageList({
      empSearch: this.empSearch.trim(),
      deptNos: this.expandDeptSelection(this.deptNos).join(","),
      empOfficeSearch: this.empOfficeSearch,
      bankSearch: this.bankSearch,
      fromDateStarted: this.formatYmd(this.fromDate),
      toDateStarted: this.formatYmd(this.toDate),
      draw: 1,
      start: 0,
      length: Math.max(this.recordsFiltered(), 1)
    }).subscribe({
      next: (res) => {
        this.exporting.set(false);
        this.downloadXlsx(res.data ?? []);
      },
      error: () => {
        this.exporting.set(false);
        this.message.error(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  downloadXlsx(list) {
    const headers = [
      this.i18n.t("pa.empAccount.no", "STT"),
      this.i18n.t("pa.empAccount.empId", "M\xE3 nh\xE2n vi\xEAn"),
      this.i18n.t("pa.empAccount.localName", "H\u1ECD t\xEAn"),
      this.i18n.t("pa.empAccount.dept", "Ph\xF2ng ban"),
      this.i18n.t("pa.empAccount.position", "Ch\u1EE9c v\u1EE5"),
      this.i18n.t("pa.empAccount.dateStarted", "Ng\xE0y v\xE0o l\xE0m"),
      this.i18n.t("pa.empAccount.bank", "Ng\xE2n h\xE0ng"),
      this.i18n.t("pa.empAccount.accountNo", "T\xE0i kho\u1EA3n ng\xE2n h\xE0ng"),
      this.i18n.t("pa.empAccount.accountAddress", "Chi nh\xE1nh"),
      this.i18n.t("pa.empAccount.securityNo", "M\xE3 s\u1ED1 BH"),
      this.i18n.t("pa.empAccount.taxNo", "M\xE3 s\u1ED1 thu\u1EBF"),
      this.i18n.t("pa.empAccount.createdBy", "Ng\u01B0\u1EDDi t\u1EA1o"),
      this.i18n.t("pa.empAccount.createDate", "Th\u1EDDi gian t\u1EA1o"),
      this.i18n.t("pa.empAccount.updatedBy", "Ng\u01B0\u1EDDi thay \u0111\u1ED5i"),
      this.i18n.t("pa.empAccount.updateDate", "Th\u1EDDi gian thay \u0111\u1ED5i")
    ];
    const dataRows = list.map((r, i) => [
      i + 1,
      r.empId,
      r.localName,
      r.deptName,
      r.postGradeName,
      this.toDmy(r.dateStarted),
      r.accountTypeName,
      r.accountNo,
      r.accountAddress,
      r.securityNo,
      r.taxNo,
      r.createdBy,
      this.toDmy(r.createDate),
      r.updatedBy,
      this.toDmy(r.updateDate)
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "TaiKhoanLuong");
    writeFileSync(workbook, "pa_emp_account_list.xlsx");
  }
  /** Chuyển 'YYYY-MM-DD' (BE) sang 'dd/MM/yyyy' để hiển thị theo CLAUDE.md. */
  toDmy(ymd) {
    if (!ymd)
      return "";
    const [y, m, d] = ymd.split("-");
    return y && m && d ? `${d}/${m}/${y}` : ymd;
  }
  formatYmd(d) {
    return d ? formatDate(d, "yyyy-MM-dd", "vi") : null;
  }
  static \u0275fac = function ViewPaEmpAccountComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewPaEmpAccountComponent)(\u0275\u0275directiveInject(ViewPaEmpAccountService), \u0275\u0275directiveInject(ChangeUserService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewPaEmpAccountComponent, selectors: [["app-view-pa-emp-account"]], decls: 131, vars: 178, consts: [["vpeaTotalTpl", ""], ["vpeaPickerTable", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["nz-input", "", "name", "vpeaEmpSearch", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "vpeaBankSearch", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["name", "vpeaEmpOfficeSearch", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [1, "d-flex", "align-items-center", "gap-2"], ["name", "vpeaFromDate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], [1, "text-muted"], ["name", "vpeaToDate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], [1, "col-md-4"], ["name", "vpeaDeptNos", "nzCheckable", "", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["class", "text-danger small mt-1", 4, "ngIf"], [1, "col-12", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzDanger", "", "type", "button", 3, "click"], [1, "bx", "bx-trash"], ["nz-button", "", "nzType", "default", "type", "button", 1, "vpea-btn-export", 3, "click", "nzLoading"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], ["nzShowSizeChanger", "", 3, "nzPageIndexChange", "nzPageSizeChange", "nzData", "nzFrontPagination", "nzLoading", "nzTotal", "nzPageIndex", "nzPageSize", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "50px", 1, "text-center"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel", "nzIndeterminate", "ngModelOptions"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "110px"], ["nzWidth", "160px"], ["nzWidth", "180px"], ["nzWidth", "130px"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "150px"], ["nzWidth", "130px", 1, "text-center"], [4, "ngIf"], ["class", "vpea-row-clickable", 3, "click", 4, "ngFor", "ngForOf"], ["nzWidth", "600px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], ["nzWidth", "900px", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzFooter"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [3, "nzValue", "nzLabel"], [1, "text-danger", "small", "mt-1"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "16", 1, "text-center", "text-muted"], [1, "vpea-row-clickable", 3, "click"], [1, "text-center"], ["nz-checkbox", "", 3, "click", "ngModelChange", "ngModel", "ngModelOptions"], [1, "row", "g-3"], [1, "form-label", "fw-semibold"], [1, "text-danger"], [1, "d-flex", "gap-2"], ["nz-input", "", "name", "vpeaEmpDisplay", "readonly", "", 3, "ngModel", "ngModelOptions", "placeholder"], ["nz-button", "", "nzType", "default", "type", "button", 3, "click", 4, "ngIf"], ["class", "text-success d-block mt-1", 4, "ngIf"], [1, "col-md-6"], ["name", "vpeaFormAccountType", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["nz-input", "", "name", "vpeaFormAccountNo", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vpeaFormAccountAddress", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vpeaFormAccountName", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vpeaFormSecurityNo", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vpeaFormSecurityPayDate", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vpeaFormFundNo", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vpeaFormFundPayDate", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vpeaFormTaxNo", 3, "ngModelChange", "ngModel"], ["name", "vpeaFormActivity", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nz-button", "", "nzType", "default", "type", "button", 3, "click"], [1, "text-success", "d-block", "mt-1"], [1, "bx", "bx-check"], [1, "row", "g-2", "align-items-end", "mb-3", 3, "ngSubmit"], [1, "col-md-5"], ["nz-input", "", "name", "vpeaPickerKeyword", 3, "ngModelChange", "keydown.enter", "ngModel", "placeholder"], ["name", "vpeaPickerDeptNos", "nzCheckable", "", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["name", "vpeaPickerEmpOffice", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [1, "col-12", "d-flex", "gap-2"], ["nzType", "error", "class", "mb-2", 3, "nzMessage", 4, "ngIf"], ["nzSize", "small", 3, "nzData", "nzLoading", "nzPageSize"], ["nzType", "error", 1, "mb-2", 3, "nzMessage"], [1, "mb-0"]], template: function ViewPaEmpAccountComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "nz-card", 4)(3, "form", 5);
      \u0275\u0275listener("ngSubmit", function ViewPaEmpAccountComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 6)(5, "label", 7);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewPaEmpAccountComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.empSearch, $event) || (ctx.empSearch = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 6)(11, "label", 7);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "nz-select", 9);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewPaEmpAccountComponent_Template_nz_select_ngModelChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.bankSearch, $event) || (ctx.bankSearch = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(16, ViewPaEmpAccountComponent_nz_option_16_Template, 1, 2, "nz-option", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 6)(18, "label", 7);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "nz-select", 11);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewPaEmpAccountComponent_Template_nz_select_ngModelChange_21_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.empOfficeSearch, $event) || (ctx.empOfficeSearch = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(23, ViewPaEmpAccountComponent_nz_option_23_Template, 1, 2, "nz-option", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 6)(25, "label", 7);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 12)(29, "nz-date-picker", 13);
      \u0275\u0275twoWayListener("ngModelChange", function ViewPaEmpAccountComponent_Template_nz_date_picker_ngModelChange_29_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.fromDate, $event) || (ctx.fromDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(30, "span", 14);
      \u0275\u0275text(31, "-");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "nz-date-picker", 15);
      \u0275\u0275twoWayListener("ngModelChange", function ViewPaEmpAccountComponent_Template_nz_date_picker_ngModelChange_32_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.toDate, $event) || (ctx.toDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 16)(34, "label", 7);
      \u0275\u0275text(35);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "nz-tree-select", 17);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewPaEmpAccountComponent_Template_nz_tree_select_ngModelChange_37_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.deptNos, $event) || (ctx.deptNos = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275template(39, ViewPaEmpAccountComponent_div_39_Template, 2, 1, "div", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 19)(41, "button", 20);
      \u0275\u0275element(42, "i", 21);
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "button", 22);
      \u0275\u0275listener("click", function ViewPaEmpAccountComponent_Template_button_click_45_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(46, "i", 23);
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "button", 24);
      \u0275\u0275listener("click", function ViewPaEmpAccountComponent_Template_button_click_49_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(50, "i", 25);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "button", 26);
      \u0275\u0275listener("click", function ViewPaEmpAccountComponent_Template_button_click_53_listener() {
        return ctx.openDeleteConfirm();
      });
      \u0275\u0275element(54, "i", 27);
      \u0275\u0275text(55);
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "button", 28);
      \u0275\u0275listener("click", function ViewPaEmpAccountComponent_Template_button_click_57_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(58, "i", 29);
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(61, "nz-card");
      \u0275\u0275template(62, ViewPaEmpAccountComponent_nz_alert_62_Template, 1, 1, "nz-alert", 30);
      \u0275\u0275elementStart(63, "nz-table", 31);
      \u0275\u0275listener("nzPageIndexChange", function ViewPaEmpAccountComponent_Template_nz_table_nzPageIndexChange_63_listener($event) {
        return ctx.onPageIndexChange($event);
      })("nzPageSizeChange", function ViewPaEmpAccountComponent_Template_nz_table_nzPageSizeChange_63_listener($event) {
        return ctx.onPageSizeChange($event);
      });
      \u0275\u0275elementStart(64, "thead")(65, "tr")(66, "th", 32)(67, "label", 33);
      \u0275\u0275listener("ngModelChange", function ViewPaEmpAccountComponent_Template_label_ngModelChange_67_listener($event) {
        return ctx.toggleAll($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "th", 34);
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "th", 35);
      \u0275\u0275text(72);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "th", 36);
      \u0275\u0275text(75);
      \u0275\u0275pipe(76, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "th", 37);
      \u0275\u0275text(78);
      \u0275\u0275pipe(79, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "th", 38);
      \u0275\u0275text(81);
      \u0275\u0275pipe(82, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "th", 39);
      \u0275\u0275text(84);
      \u0275\u0275pipe(85, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "th", 40);
      \u0275\u0275text(87);
      \u0275\u0275pipe(88, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "th", 40);
      \u0275\u0275text(90);
      \u0275\u0275pipe(91, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "th", 40);
      \u0275\u0275text(93);
      \u0275\u0275pipe(94, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "th", 38);
      \u0275\u0275text(96);
      \u0275\u0275pipe(97, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "th", 38);
      \u0275\u0275text(99);
      \u0275\u0275pipe(100, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "th", 41);
      \u0275\u0275text(102);
      \u0275\u0275pipe(103, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "th", 39);
      \u0275\u0275text(105);
      \u0275\u0275pipe(106, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "th", 41);
      \u0275\u0275text(108);
      \u0275\u0275pipe(109, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "th", 41);
      \u0275\u0275text(111);
      \u0275\u0275pipe(112, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(113, "tbody");
      \u0275\u0275template(114, ViewPaEmpAccountComponent_tr_114_Template, 4, 4, "tr", 42)(115, ViewPaEmpAccountComponent_tr_115_Template, 33, 27, "tr", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275template(116, ViewPaEmpAccountComponent_ng_template_116_Template, 2, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(118, "nz-modal", 44);
      \u0275\u0275pipe(119, "translate");
      \u0275\u0275pipe(120, "translate");
      \u0275\u0275pipe(121, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewPaEmpAccountComponent_Template_nz_modal_nzOnCancel_118_listener() {
        return ctx.closeModal();
      })("nzOnOk", function ViewPaEmpAccountComponent_Template_nz_modal_nzOnOk_118_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(122, ViewPaEmpAccountComponent_ng_container_122_Template, 69, 78, "ng-container", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "nz-modal", 46);
      \u0275\u0275pipe(124, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewPaEmpAccountComponent_Template_nz_modal_nzOnCancel_123_listener() {
        return ctx.closePicker();
      });
      \u0275\u0275template(125, ViewPaEmpAccountComponent_ng_container_125_Template, 52, 62, "ng-container", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "nz-modal", 47);
      \u0275\u0275pipe(127, "translate");
      \u0275\u0275pipe(128, "translate");
      \u0275\u0275pipe(129, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewPaEmpAccountComponent_Template_nz_modal_nzOnCancel_126_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function ViewPaEmpAccountComponent_Template_nz_modal_nzOnOk_126_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(130, ViewPaEmpAccountComponent_ng_container_130_Template, 4, 5, "ng-container", 45);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const vpeaTotalTpl_r18 = \u0275\u0275reference(117);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 68, "pa.empAccount.empSearch", "M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.empSearch);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 71, "pa.empAccount.empSearch", "M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 74, "pa.empAccount.bank", "Ng\xE2n h\xE0ng"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.bankSearch);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(15, 77, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.bankOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 80, "pa.empAccount.empOffice", "Tr\u1EA1ng th\xE1i l\xE0m vi\u1EC7c"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.empOfficeSearch);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(22, 83, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.empOfficeOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 86, "pa.empAccount.dateStarted", "Ng\xE0y v\xE0o l\xE0m"));
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.fromDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.toDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 89, "pa.empAccount.dept", "Ph\xF2ng ban"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzNodes", ctx.deptNodes());
      \u0275\u0275twoWayProperty("ngModel", ctx.deptNos);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(38, 92, "pa.empAccount.deptPlaceholder", "Ch\u1ECDn ph\xF2ng ban"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.deptTreeErrorMessage());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(44, 95, "pa.empAccount.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(48, 98, "common.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(52, 101, "pa.empAccount.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(56, 104, "pa.empAccount.delete", "X\xF3a"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.exporting());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(60, 107, "essDept.exportExcel", "Xu\u1EA5t excel"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzFrontPagination", false)("nzLoading", ctx.loading())("nzTotal", ctx.recordsFiltered())("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", vpeaTotalTpl_r18)("nzScroll", \u0275\u0275pureFunction0(176, _c0));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngModel", ctx.allChecked)("nzIndeterminate", ctx.someChecked)("ngModelOptions", \u0275\u0275pureFunction0(177, _c1));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(70, 110, "pa.empAccount.no", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(73, 113, "pa.empAccount.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(76, 116, "pa.empAccount.localName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(79, 119, "pa.empAccount.dept", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(82, 122, "pa.empAccount.position", "Ch\u1EE9c v\u1EE5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(85, 125, "pa.empAccount.dateStarted", "Ng\xE0y v\xE0o l\xE0m"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(88, 128, "pa.empAccount.bank", "Ng\xE2n h\xE0ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(91, 131, "pa.empAccount.accountNo", "T\xE0i kho\u1EA3n ng\xE2n h\xE0ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(94, 134, "pa.empAccount.accountAddress", "Chi nh\xE1nh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(97, 137, "pa.empAccount.securityNo", "M\xE3 s\u1ED1 BH"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(100, 140, "pa.empAccount.taxNo", "M\xE3 s\u1ED1 thu\u1EBF"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(103, 143, "pa.empAccount.createdBy", "Ng\u01B0\u1EDDi t\u1EA1o"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(106, 146, "pa.empAccount.createDate", "Th\u1EDDi gian t\u1EA1o"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(109, 149, "pa.empAccount.updatedBy", "Ng\u01B0\u1EDDi thay \u0111\u1ED5i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(112, 152, "pa.empAccount.updateDate", "Th\u1EDDi gian thay \u0111\u1ED5i"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.rows());
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", \u0275\u0275pipeBind2(119, 155, ctx.isNew() ? "pa.empAccount.addTitle" : "pa.empAccount.editTitle", ctx.isNew() ? "Th\xEAm m\u1EDBi t\xE0i kho\u1EA3n l\u01B0\u01A1ng nh\xE2n vi\xEAn" : "Ch\u1EC9nh s\u1EEDa t\xE0i kho\u1EA3n l\u01B0\u01A1ng nh\xE2n vi\xEAn"))("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(120, 158, "pa.empAccount.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(121, 161, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(5);
      \u0275\u0275property("nzVisible", ctx.pickerVisible())("nzTitle", \u0275\u0275pipeBind2(124, 164, "empSearch.title", "T\xECm ki\u1EBFm nh\xE2n vi\xEAn"))("nzFooter", null);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(127, 167, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(128, 170, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(129, 173, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzDatePickerModule, NzDatePickerComponent, NzTreeSelectModule, NzTreeSelectComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzCheckboxModule, NzCheckboxComponent, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\n.vpea-btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n.vpea-row-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=view-pa-emp-account.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewPaEmpAccountComponent, [{
    type: Component,
    args: [{ selector: "app-view-pa-emp-account", standalone: true, imports: [
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
      NzCheckboxModule,
      NzAlertModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm - \u0111\u1EE9ng im khi cu\u1ED9n (xem .sticky-filter-card trong styles.css) -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3" (ngSubmit)="search()">
        <div class="col-md-3">
          <label class="form-label">{{ 'pa.empAccount.empSearch' | translate:'M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn' }}</label>
          <input nz-input [(ngModel)]="empSearch" name="vpeaEmpSearch"
                 [placeholder]="'pa.empAccount.empSearch' | translate:'M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn'">
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'pa.empAccount.bank' | translate:'Ng\xE2n h\xE0ng' }}</label>
          <nz-select class="w-100" [(ngModel)]="bankSearch" name="vpeaBankSearch" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let c of bankOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'pa.empAccount.empOffice' | translate:'Tr\u1EA1ng th\xE1i l\xE0m vi\u1EC7c' }}</label>
          <nz-select class="w-100" [(ngModel)]="empOfficeSearch" name="vpeaEmpOfficeSearch" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let c of empOfficeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'pa.empAccount.dateStarted' | translate:'Ng\xE0y v\xE0o l\xE0m' }}</label>
          <div class="d-flex align-items-center gap-2">
            <nz-date-picker class="w-100" [(ngModel)]="fromDate" name="vpeaFromDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
            <span class="text-muted">-</span>
            <nz-date-picker class="w-100" [(ngModel)]="toDate" name="vpeaToDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
          </div>
        </div>
        <div class="col-md-4">
          <label class="form-label">{{ 'pa.empAccount.dept' | translate:'Ph\xF2ng ban' }}</label>
          <nz-tree-select class="w-100" [nzNodes]="deptNodes()" [(ngModel)]="deptNos" name="vpeaDeptNos"
                           nzCheckable nzShowSearch nzAllowClear
                           [nzPlaceHolder]="'pa.empAccount.deptPlaceholder' | translate:'Ch\u1ECDn ph\xF2ng ban'"></nz-tree-select>
          <div *ngIf="deptTreeErrorMessage()" class="text-danger small mt-1">{{ deptTreeErrorMessage() }}</div>
        </div>
        <div class="col-12 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'pa.empAccount.search' | translate:'Tra c\u1EE9u' }}
          </button>
          <button nz-button type="button" (click)="clearSearch()">
            <i class="bx bx-x"></i> {{ 'common.clearFilter' | translate:'X\xF3a l\u1ECDc' }}
          </button>
          <button nz-button nzType="primary" type="button" (click)="openAddModal()">
            <i class="bx bx-plus"></i> {{ 'pa.empAccount.addNew' | translate:'Th\xEAm m\u1EDBi' }}
          </button>
          <button nz-button nzDanger type="button" (click)="openDeleteConfirm()">
            <i class="bx bx-trash"></i> {{ 'pa.empAccount.delete' | translate:'X\xF3a' }}
          </button>
          <button nz-button nzType="default" type="button" class="vpea-btn-export" [nzLoading]="exporting()" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'essDept.exportExcel' | translate:'Xu\u1EA5t excel' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <!-- nzWidth khai b\xE1o cho t\u1EEBng c\u1ED9t \u0111\u1EC3 \u0111\u1ED3ng b\u1ED9 \u0111\u1ED9 r\u1ED9ng header/body khi d\xF9ng nzScroll. -->
      <nz-table [nzData]="rows()" [nzFrontPagination]="false" [nzLoading]="loading()"
                [nzTotal]="recordsFiltered()" [nzPageIndex]="pageIndex" [nzPageSize]="pageSize"
                [nzPageSizeOptions]="pageSizeOptions" nzShowSizeChanger [nzShowTotal]="vpeaTotalTpl"
                (nzPageIndexChange)="onPageIndexChange($event)" (nzPageSizeChange)="onPageSizeChange($event)"
                [nzScroll]="{ x: '1900px', y: 'calc(100vh - 420px)' }">
        <thead>
          <tr>
            <th class="text-center" nzWidth="50px">
              <label nz-checkbox [ngModel]="allChecked" [nzIndeterminate]="someChecked"
                     [ngModelOptions]="{ standalone: true }" (ngModelChange)="toggleAll($event)"></label>
            </th>
            <th class="text-center" nzWidth="60px">{{ 'pa.empAccount.no' | translate:'STT' }}</th>
            <th nzWidth="110px">{{ 'pa.empAccount.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
            <th nzWidth="160px">{{ 'pa.empAccount.localName' | translate:'H\u1ECD t\xEAn' }}</th>
            <th nzWidth="180px">{{ 'pa.empAccount.dept' | translate:'Ph\xF2ng ban' }}</th>
            <th nzWidth="130px">{{ 'pa.empAccount.position' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'pa.empAccount.dateStarted' | translate:'Ng\xE0y v\xE0o l\xE0m' }}</th>
            <th nzWidth="150px">{{ 'pa.empAccount.bank' | translate:'Ng\xE2n h\xE0ng' }}</th>
            <th nzWidth="150px">{{ 'pa.empAccount.accountNo' | translate:'T\xE0i kho\u1EA3n ng\xE2n h\xE0ng' }}</th>
            <th nzWidth="150px">{{ 'pa.empAccount.accountAddress' | translate:'Chi nh\xE1nh' }}</th>
            <th nzWidth="130px">{{ 'pa.empAccount.securityNo' | translate:'M\xE3 s\u1ED1 BH' }}</th>
            <th nzWidth="130px">{{ 'pa.empAccount.taxNo' | translate:'M\xE3 s\u1ED1 thu\u1EBF' }}</th>
            <th class="text-center" nzWidth="130px">{{ 'pa.empAccount.createdBy' | translate:'Ng\u01B0\u1EDDi t\u1EA1o' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'pa.empAccount.createDate' | translate:'Th\u1EDDi gian t\u1EA1o' }}</th>
            <th class="text-center" nzWidth="130px">{{ 'pa.empAccount.updatedBy' | translate:'Ng\u01B0\u1EDDi thay \u0111\u1ED5i' }}</th>
            <th class="text-center" nzWidth="130px">{{ 'pa.empAccount.updateDate' | translate:'Th\u1EDDi gian thay \u0111\u1ED5i' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="16" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of rows(); let i = index" class="vpea-row-clickable" (click)="openEditModal(row)">
            <td class="text-center">
              <label nz-checkbox [ngModel]="isChecked(row)" [ngModelOptions]="{ standalone: true }"
                     (click)="$event.stopPropagation()"
                     (ngModelChange)="toggleRow(row, $event)"></label>
            </td>
            <td class="text-center">{{ (pageIndex - 1) * pageSize + i + 1 }}</td>
            <td [attr.title]="row.empId || null">{{ row.empId }}</td>
            <td [attr.title]="row.localName || null">{{ row.localName }}</td>
            <td [attr.title]="row.deptName || null">{{ row.deptName }}</td>
            <td [attr.title]="row.postGradeName || null">{{ row.postGradeName }}</td>
            <td class="text-center">{{ toDmy(row.dateStarted) }}</td>
            <td [attr.title]="row.accountTypeName || null">{{ row.accountTypeName }}</td>
            <td [attr.title]="row.accountNo || null">{{ row.accountNo }}</td>
            <td [attr.title]="row.accountAddress || null">{{ row.accountAddress }}</td>
            <td [attr.title]="row.securityNo || null">{{ row.securityNo }}</td>
            <td [attr.title]="row.taxNo || null">{{ row.taxNo }}</td>
            <td class="text-center">{{ row.createdBy }}</td>
            <td class="text-center">{{ toDmy(row.createDate) }}</td>
            <td class="text-center">{{ row.updatedBy }}</td>
            <td class="text-center">{{ toDmy(row.updateDate) }}</td>
          </tr>
        </tbody>
        <ng-template #vpeaTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal Th\xEAm m\u1EDBi / Ch\u1EC9nh s\u1EEDa t\xE0i kho\u1EA3n l\u01B0\u01A1ng nh\xE2n vi\xEAn -->
<nz-modal [nzVisible]="modalVisible()"
          [nzTitle]="(isNew() ? 'pa.empAccount.addTitle' : 'pa.empAccount.editTitle') | translate:(isNew() ? 'Th\xEAm m\u1EDBi t\xE0i kho\u1EA3n l\u01B0\u01A1ng nh\xE2n vi\xEAn' : 'Ch\u1EC9nh s\u1EEDa t\xE0i kho\u1EA3n l\u01B0\u01A1ng nh\xE2n vi\xEAn')"
          nzWidth="600px" (nzOnCancel)="closeModal()" (nzOnOk)="saveForm()" [nzOkLoading]="saving()"
          [nzOkText]="'pa.empAccount.save' | translate:'L\u01B0u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <div class="row g-3">
      <div class="col-12">
        <label class="form-label fw-semibold">
          {{ 'pa.empAccount.supervisor' | translate:'Nh\xE2n vi\xEAn' }} <span class="text-danger">*</span>
        </label>
        <div class="d-flex gap-2">
          <input nz-input [ngModel]="form.empDisplay" name="vpeaEmpDisplay" readonly
                 [ngModelOptions]="{ standalone: true }"
                 [placeholder]="'pa.empAccount.empSelectPlaceholder' | translate:'Ch\u1ECDn nh\xE2n vi\xEAn...'">
          <button *ngIf="isNew()" nz-button nzType="default" type="button" (click)="openPicker()">
            <i class="bx bx-search"></i> {{ 'arSupervisor.btn.select' | translate:'Ch\u1ECDn' }}
          </button>
        </div>
        <small *ngIf="form.personId" class="text-success d-block mt-1">
          <i class="bx bx-check"></i> {{ 'arSupervisor.js.empSelected' | translate:'\u0110\xE3 ch\u1ECDn NV: ' }}{{ form.empDisplay }}
        </small>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.empAccount.bank' | translate:'Ng\xE2n h\xE0ng' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.accountType" name="vpeaFormAccountType" nzAllowClear
                   [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
          <nz-option *ngFor="let c of bankOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.empAccount.accountNo' | translate:'T\xE0i kho\u1EA3n ng\xE2n h\xE0ng' }}</label>
        <input nz-input [(ngModel)]="form.accountNo" name="vpeaFormAccountNo">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.empAccount.accountAddress' | translate:'Chi nh\xE1nh' }}</label>
        <input nz-input [(ngModel)]="form.accountAddress" name="vpeaFormAccountAddress">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.empAccount.accountName' | translate:'T\xEAn t\xE0i kho\u1EA3n' }}</label>
        <input nz-input [(ngModel)]="form.accountName" name="vpeaFormAccountName">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.empAccount.securityNo' | translate:'M\xE3 s\u1ED1 BHXH' }}</label>
        <input nz-input [(ngModel)]="form.securityNo" name="vpeaFormSecurityNo">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.empAccount.securityPayDate' | translate:'Th\u1EDDi gian \u0111\xF3ng BH' }}</label>
        <input nz-input [(ngModel)]="form.securityPayDate" name="vpeaFormSecurityPayDate">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.empAccount.fundNo' | translate:'M\xE3 s\u1ED1 c\xF4ng \u0111o\xE0n' }}</label>
        <input nz-input [(ngModel)]="form.fundNo" name="vpeaFormFundNo">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.empAccount.fundPayDate' | translate:'Th\u1EDDi gian \u0111\xF3ng C\u0110' }}</label>
        <input nz-input [(ngModel)]="form.fundPayDate" name="vpeaFormFundPayDate">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.empAccount.taxNo' | translate:'M\xE3 s\u1ED1 thu\u1EBF' }}</label>
        <input nz-input [(ngModel)]="form.taxNo" name="vpeaFormTaxNo">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.empAccount.activity' | translate:'Tr\u1EA1ng th\xE1i' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.activity" name="vpeaFormActivity">
          <nz-option [nzValue]="1" [nzLabel]="'pa.empAccount.activity.active' | translate:'Ho\u1EA1t \u0111\u1ED9ng'"></nz-option>
          <nz-option [nzValue]="0" [nzLabel]="'pa.empAccount.activity.inactive' | translate:'Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng'"></nz-option>
        </nz-select>
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
        <input nz-input [(ngModel)]="pickerKeyword" name="vpeaPickerKeyword"
               [placeholder]="'empSearch.placeholder.keyword' | translate:'Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn'"
               (keydown.enter)="$event.preventDefault(); pickerSearch()">
      </div>
      <div class="col-md-4">
        <label class="form-label">{{ 'empSearch.field.dept' | translate:'Ph\xF2ng ban' }}</label>
        <nz-tree-select class="w-100" [nzNodes]="deptNodes()" [(ngModel)]="pickerDeptNos" name="vpeaPickerDeptNos"
                         nzCheckable nzShowSearch nzAllowClear
                         [nzPlaceHolder]="'vdp.search.dept.placeholder' | translate:'Ch\u1ECDn ph\xF2ng ban'"></nz-tree-select>
      </div>
      <div class="col-md-3">
        <label class="form-label">{{ 'empSearch.field.empOffice' | translate:'Tr\u1EA1ng th\xE1i l\xE0m vi\u1EC7c' }}</label>
        <nz-select class="w-100" [(ngModel)]="pickerEmpOffice" name="vpeaPickerEmpOffice" nzAllowClear
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

    <nz-table [nzData]="pickerRows()" [nzLoading]="pickerLoading()" [nzPageSize]="10" nzSize="small" #vpeaPickerTable>
      <thead>
        <tr>
          <th class="text-center" nzWidth="60px">{{ 'empSearch.col.no' | translate:'STT' }}</th>
          <th nzWidth="110px">{{ 'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
          <th>{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
          <th>{{ 'empSearch.field.dept' | translate:'Ph\xF2ng ban' }}</th>
          <th>{{ 'epi.field.position' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of vpeaPickerTable.data; let i = index" class="vpea-row-clickable" (click)="selectEmployee(row)">
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
    <p class="mb-0">{{ 'pa.empAccount.confirmDelete' | translate:'B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a c\xE1c b\u1EA3n ghi \u0111\xE3 ch\u1ECDn?' }} ({{ deleteCount }})</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-pa-emp-account/view-pa-emp-account.component.css */\n.vpea-btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n.vpea-row-clickable {\n  cursor: pointer;\n}\n/*# sourceMappingURL=view-pa-emp-account.component.css.map */\n"] }]
  }], () => [{ type: ViewPaEmpAccountService }, { type: ChangeUserService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewPaEmpAccountComponent, { className: "ViewPaEmpAccountComponent", filePath: "src/app/view-pa-emp-account/view-pa-emp-account.component.ts", lineNumber: 110 });
})();
export {
  ViewPaEmpAccountComponent
};
//# debugId=e429e750-5749-5e0f-b3d5-3e6ef98560b0
//# sourceMappingURL=chunk-WW6XDN2Q.js.map
