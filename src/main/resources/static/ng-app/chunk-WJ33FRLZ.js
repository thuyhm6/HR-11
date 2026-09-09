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
  MaxLengthValidator,
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

// src/app/view-salary-code/view-salary-code.service.ts
var API_BASE = "/pa/salarycode/api";
var ViewSalaryCodeService = class _ViewSalaryCodeService {
  constructor(http) {
    this.http = http;
  }
  http;
  getList(params) {
    let httpParams = new HttpParams().set("draw", params.draw).set("start", params.start).set("length", params.length);
    if (params.itemNameSearch)
      httpParams = httpParams.set("itemNameSearch", params.itemNameSearch);
    if (params.itemTypeSearch != null)
      httpParams = httpParams.set("itemTypeSearch", params.itemTypeSearch);
    return this.http.get(`${API_BASE}/list`, {
      params: httpParams,
      withCredentials: true
    });
  }
  getOne(itemType, itemNo) {
    return this.http.get(`${API_BASE}/${itemType}/${itemNo}`, { withCredentials: true });
  }
  save(payload) {
    return this.http.post(`${API_BASE}/save`, payload, { withCredentials: true });
  }
  deleteList(keys) {
    return this.http.request("DELETE", `${API_BASE}/deleteList`, {
      body: keys,
      withCredentials: true
    });
  }
  static \u0275fac = function ViewSalaryCodeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewSalaryCodeService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewSalaryCodeService, factory: _ViewSalaryCodeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewSalaryCodeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-salary-code/view-salary-code.component.ts
var _c0 = () => ({ x: "1400px", y: "calc(100vh - 420px)" });
function ViewSalaryCodeComponent_nz_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 35);
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzValue", t_r2.value)("nzLabel", ctx_r2.i18n.t(t_r2.key, t_r2.fallback));
  }
}
function ViewSalaryCodeComponent_nz_alert_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 36);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r2.errorMessage() ?? "");
  }
}
function ViewSalaryCodeComponent_tr_65_Template(rf, ctx) {
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
function ViewSalaryCodeComponent_tr_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 38);
    \u0275\u0275listener("click", function ViewSalaryCodeComponent_tr_66_Template_tr_click_0_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openEditModal(row_r5));
    });
    \u0275\u0275elementStart(1, "td", 39);
    \u0275\u0275listener("click", function ViewSalaryCodeComponent_tr_66_Template_td_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "label", 40);
    \u0275\u0275listener("ngModelChange", function ViewSalaryCodeComponent_tr_66_Template_label_ngModelChange_2_listener($event) {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleChecked(row_r5, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 41);
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
    \u0275\u0275elementStart(11, "td", 41);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 41);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 41);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 41);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r2.isChecked(row_r5));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r2.pageIndex - 1) * ctx_r2.pageSize + i_r6 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.itemTypeLabel(row_r5.itemType));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.itemId);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.itemName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.itemName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.dataType);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.descr || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.descr);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.companyUsageStr);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.createdBy);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.createDate);
  }
}
function ViewSalaryCodeComponent_ng_template_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r7 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r7, " ");
  }
}
function ViewSalaryCodeComponent_ng_container_72_nz_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 35);
  }
  if (rf & 2) {
    const t_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzValue", t_r9.value)("nzLabel", ctx_r2.i18n.t(t_r9.key, t_r9.fallback));
  }
}
function ViewSalaryCodeComponent_ng_container_72_label_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 58);
    \u0275\u0275listener("ngModelChange", function ViewSalaryCodeComponent_ng_container_72_label_59_Template_label_ngModelChange_0_listener($event) {
      const c_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleCompanyUsage(c_r11, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const c_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r2.isCompanyChecked(c_r11))("name", "vscFormCpny_" + c_r11);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r11);
  }
}
function ViewSalaryCodeComponent_ng_container_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 42)(2, "div", 43)(3, "label", 44);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span", 45);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "nz-select", 46);
    \u0275\u0275twoWayListener("ngModelChange", function ViewSalaryCodeComponent_ng_container_72_Template_nz_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.itemType, $event) || (ctx_r2.form.itemType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(9, ViewSalaryCodeComponent_ng_container_72_nz_option_9_Template, 1, 2, "nz-option", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 43)(11, "label", 44);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementStart(14, "span", 45);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function ViewSalaryCodeComponent_ng_container_72_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.itemId, $event) || (ctx_r2.form.itemId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 43)(18, "label", 44);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementStart(21, "span", 45);
    \u0275\u0275text(22, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function ViewSalaryCodeComponent_ng_container_72_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.nameEn, $event) || (ctx_r2.form.nameEn = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 43)(25, "label", 44);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementStart(28, "span", 45);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function ViewSalaryCodeComponent_ng_container_72_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.nameKo, $event) || (ctx_r2.form.nameKo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 43)(32, "label", 44);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementStart(35, "span", 45);
    \u0275\u0275text(36, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function ViewSalaryCodeComponent_ng_container_72_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.nameVi, $event) || (ctx_r2.form.nameVi = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 43)(39, "label", 44);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementStart(42, "span", 45);
    \u0275\u0275text(43, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function ViewSalaryCodeComponent_ng_container_72_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.nameZh, $event) || (ctx_r2.form.nameZh = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 43)(46, "label", 44);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "nz-select", 52);
    \u0275\u0275twoWayListener("ngModelChange", function ViewSalaryCodeComponent_ng_container_72_Template_nz_select_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.dataType, $event) || (ctx_r2.form.dataType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(50, "nz-option", 53);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275element(52, "nz-option", 54);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 43)(55, "label", 44);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 55);
    \u0275\u0275template(59, ViewSalaryCodeComponent_ng_container_72_label_59_Template, 2, 3, "label", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 3)(61, "label", 44);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "textarea", 57);
    \u0275\u0275twoWayListener("ngModelChange", function ViewSalaryCodeComponent_ng_container_72_Template_textarea_ngModelChange_64_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.descr, $event) || (ctx_r2.form.descr = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 21, "pa.salaryCode.itemType", "Lo\u1EA1i h\u1EA1ng m\u1EE5c"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.itemType);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.itemTypes);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(13, 24, "pa.salaryCode.itemId", "ID h\u1EA1ng m\u1EE5c"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.itemId);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(20, 27, "pa.salaryCode.nameEn", "English Name"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.nameEn);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(27, 30, "pa.salaryCode.nameKo", "Korean Name"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.nameKo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(34, 33, "pa.salaryCode.nameVi", "Vietnamese Name"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.nameVi);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(41, 36, "pa.salaryCode.nameZh", "Chinese Name"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.nameZh);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 39, "pa.salaryCode.dataType", "D\u1EEF li\u1EC7u"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.dataType);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(51, 42, "pa.salaryCode.dataType.number", "D\u1EA1ng s\u1ED1"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(53, 45, "pa.salaryCode.dataType.varchar", "D\u1EA1ng k\xFD t\u1EF1"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 48, "pa.salaryCode.companyUsage", "C\xF4ng ty s\u1EED d\u1EE5ng"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.companyUsageOptions);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(63, 51, "pa.salaryCode.descr", "Mi\xEAu t\u1EA3"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.descr);
    \u0275\u0275control();
  }
}
function ViewSalaryCodeComponent_ng_container_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 59);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(3, 2, "pa.salaryCode.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a c\xE1c b\u1EA3n ghi \u0111\xE3 ch\u1ECDn?"), " (", ctx_r2.selectedCount, ")");
  }
}
var I18N_KEYS = [
  "common.close",
  "common.confirm",
  "common.cancel",
  "common.loadFail",
  "common.noData",
  "common.totalRows",
  "pa.salaryCode.pageTitle",
  "pa.salaryCode.no",
  "pa.salaryCode.itemType",
  "pa.salaryCode.itemId",
  "pa.salaryCode.itemName",
  "pa.salaryCode.dataType",
  "pa.salaryCode.descr",
  "pa.salaryCode.mapCode",
  "pa.salaryCode.createdBy",
  "pa.salaryCode.createDate",
  "pa.salaryCode.search",
  "pa.salaryCode.addNew",
  "pa.salaryCode.delete",
  "pa.salaryCode.save",
  "pa.salaryCode.addTitle",
  "pa.salaryCode.editTitle",
  "pa.salaryCode.confirmDelete",
  "pa.salaryCode.selectRequired",
  "pa.salaryCode.validateRequired",
  "pa.salaryCode.itemType.all",
  "pa.salaryCode.itemType.std",
  "pa.salaryCode.itemType.adj",
  "pa.salaryCode.itemType.excPay",
  "pa.salaryCode.itemType.adjDed",
  "pa.salaryCode.itemType.excDed",
  "pa.salaryCode.itemType.calc",
  "pa.salaryCode.nameEn",
  "pa.salaryCode.nameKo",
  "pa.salaryCode.nameVi",
  "pa.salaryCode.nameZh",
  "pa.salaryCode.dataType.number",
  "pa.salaryCode.dataType.varchar",
  "pa.salaryCode.companyUsage"
];
var PAGE_SIZE_OPTIONS = [10, 20, 50, 100];
var DEFAULT_PAGE_SIZE = 20;
var ITEM_TYPES = [
  { value: 1, key: "pa.salaryCode.itemType.std", fallback: "H\u1EA1ng m\u1EE5c ti\xEAu chu\u1EA9n" },
  { value: 2, key: "pa.salaryCode.itemType.adj", fallback: "\u0110i\u1EC1u ch\u1EC9nh tr\u1EA3 l\u01B0\u01A1ng" },
  { value: 3, key: "pa.salaryCode.itemType.excPay", fallback: "Tr\u1EA3 l\u01B0\u01A1ng ngo\u1EA1i l\u1EC7" },
  { value: 4, key: "pa.salaryCode.itemType.adjDed", fallback: "\u0110i\u1EC1u ch\u1EC9nh kho\u1EA3n tr\u1EEB" },
  { value: 5, key: "pa.salaryCode.itemType.excDed", fallback: "Kho\u1EA3n tr\u1EEB ngo\u1EA1i l\u1EC7" },
  { value: 6, key: "pa.salaryCode.itemType.calc", fallback: "H\u1EA1ng m\u1EE5c t\xEDnh to\xE1n" }
];
var COMPANY_USAGE_OPTIONS = ["HTSV", "HAE"];
var EMPTY_FORM = {
  itemNo: null,
  itemType: 1,
  itemId: "",
  nameEn: "",
  nameKo: "",
  nameVi: "",
  nameZh: "",
  dataType: "NUMBER(14,4)",
  descr: "",
  companyUsage: []
};
function rowKey(itemType, itemNo) {
  return `${itemType}_${itemNo}`;
}
var ViewSalaryCodeComponent = class _ViewSalaryCodeComponent {
  constructor(api, i18n, message) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
  }
  api;
  i18n;
  message;
  pageSizeOptions = PAGE_SIZE_OPTIONS;
  itemTypes = ITEM_TYPES;
  companyUsageOptions = COMPANY_USAGE_OPTIONS;
  rows = signal(
    [],
    ...ngDevMode ? [{ debugName: "rows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  totalRecords = signal(
    0,
    ...ngDevMode ? [{ debugName: "totalRecords" }] : (
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
  pageIndex = 1;
  pageSize = DEFAULT_PAGE_SIZE;
  draw = 1;
  searchItemName = "";
  searchItemType = null;
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
  modalTitle = computed(
    () => this.isNew() ? this.i18n.t("pa.salaryCode.addTitle", "Th\xEAm m\u1EDBi h\u1EA1ng m\u1EE5c l\u01B0\u01A1ng") : this.i18n.t("pa.salaryCode.editTitle", "Ch\u1EC9nh s\u1EEDa h\u1EA1ng m\u1EE5c l\u01B0\u01A1ng"),
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
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.search();
  }
  itemTypeLabel(value) {
    const item = this.itemTypes.find((i) => i.value === value);
    return item ? this.i18n.t(item.key, item.fallback) : String(value);
  }
  // ==================== Tìm kiếm + phân trang server-side ====================
  search() {
    this.pageIndex = 1;
    this.load();
  }
  onPageIndexChange(index) {
    this.pageIndex = index;
    this.load();
  }
  onPageSizeChange(size) {
    this.pageSize = size;
    this.pageIndex = 1;
    this.load();
  }
  load() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.checkedKeys.set(/* @__PURE__ */ new Set());
    this.draw += 1;
    this.api.getList({
      itemNameSearch: this.searchItemName.trim(),
      itemTypeSearch: this.searchItemType,
      draw: this.draw,
      start: (this.pageIndex - 1) * this.pageSize,
      length: this.pageSize
    }).subscribe({
      next: (res) => {
        this.rows.set(res.data ?? []);
        this.totalRecords.set(res.recordsTotal ?? 0);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.rows.set([]);
        this.totalRecords.set(0);
        this.loading.set(false);
      }
    });
  }
  // ==================== Chọn nhiều dòng (checkbox) ====================
  rowKey(row) {
    return rowKey(row.itemType, row.itemNo);
  }
  isChecked(row) {
    return this.checkedKeys().has(this.rowKey(row));
  }
  toggleChecked(row, checked) {
    const next = new Set(this.checkedKeys());
    if (checked)
      next.add(this.rowKey(row));
    else
      next.delete(this.rowKey(row));
    this.checkedKeys.set(next);
  }
  get allChecked() {
    const list = this.rows();
    return list.length > 0 && list.every((r) => this.isChecked(r));
  }
  get someChecked() {
    return this.checkedKeys().size > 0 && !this.allChecked;
  }
  toggleAllChecked(checked) {
    const next = new Set(this.checkedKeys());
    this.rows().forEach((r) => checked ? next.add(this.rowKey(r)) : next.delete(this.rowKey(r)));
    this.checkedKeys.set(next);
  }
  // ==================== Modal Thêm mới / Chỉnh sửa ====================
  openAddModal() {
    this.isNew.set(true);
    this.form = __spreadValues({}, EMPTY_FORM);
    this.modalVisible.set(true);
  }
  openEditModal(row) {
    this.isNew.set(false);
    this.api.getOne(row.itemType, row.itemNo).subscribe({
      next: (dto) => {
        this.form = {
          itemNo: dto.itemNo,
          itemType: dto.itemType,
          itemId: dto.itemId ?? "",
          nameEn: dto.nameEn ?? "",
          nameKo: dto.nameKo ?? "",
          nameVi: dto.nameVi ?? "",
          nameZh: dto.nameZh ?? "",
          dataType: dto.dataType ?? "NUMBER(14,4)",
          descr: dto.descr ?? "",
          companyUsage: dto.companyUsage ?? []
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
  isCompanyChecked(code) {
    return this.form.companyUsage.includes(code);
  }
  toggleCompanyUsage(code, checked) {
    this.form.companyUsage = checked ? [...this.form.companyUsage, code] : this.form.companyUsage.filter((c) => c !== code);
  }
  saveForm() {
    const itemId = this.form.itemId.trim();
    if (!this.form.itemType || !itemId) {
      this.message.warning(this.i18n.t("pa.salaryCode.validateRequired", "Vui l\xF2ng nh\u1EADp \u0111\u1EA7y \u0111\u1EE7 th\xF4ng tin b\u1EAFt bu\u1ED9c!"));
      return;
    }
    const payload = {
      itemNo: this.form.itemNo,
      itemType: this.form.itemType,
      itemId,
      nameEn: this.form.nameEn.trim(),
      nameKo: this.form.nameKo.trim(),
      nameVi: this.form.nameVi.trim(),
      nameZh: this.form.nameZh.trim(),
      dataType: this.form.dataType,
      descr: this.form.descr.trim(),
      companyUsage: this.form.companyUsage
    };
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.message.success(res.message || this.i18n.t("pa.salaryCode.save", "L\u01B0u"));
        this.load();
      },
      error: (err) => {
        this.saving.set(false);
        this.message.error(err?.error?.error || "L\u1ED7i kh\xF4ng x\xE1c \u0111\u1ECBnh");
      }
    });
  }
  // ==================== Xóa nhiều dòng ====================
  openDeleteConfirm() {
    if (this.checkedKeys().size === 0) {
      this.message.warning(this.i18n.t("pa.salaryCode.selectRequired", "Vui l\xF2ng ch\u1ECDn \xEDt nh\u1EA5t m\u1ED9t b\u1EA3n ghi!"));
      return;
    }
    this.deleteVisible.set(true);
  }
  closeDeleteConfirm() {
    this.deleteVisible.set(false);
  }
  get selectedCount() {
    return this.checkedKeys().size;
  }
  confirmDelete() {
    const keys = this.rows().filter((r) => this.isChecked(r)).map((r) => ({ itemNo: r.itemNo, itemType: r.itemType }));
    if (keys.length === 0) {
      this.deleteVisible.set(false);
      return;
    }
    this.deleting.set(true);
    this.api.deleteList(keys).subscribe({
      next: (res) => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.message.success(res.message || "X\xF3a th\xE0nh c\xF4ng");
        this.load();
      },
      error: (err) => {
        this.deleting.set(false);
        this.message.error(err?.error?.error || "L\u1ED7i kh\xF4ng x\xE1c \u0111\u1ECBnh");
      }
    });
  }
  static \u0275fac = function ViewSalaryCodeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewSalaryCodeComponent)(\u0275\u0275directiveInject(ViewSalaryCodeService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewSalaryCodeComponent, selectors: [["app-view-salary-code"]], decls: 78, vars: 104, consts: [["vscTable", ""], ["vscTotalTpl", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["name", "vscSearchItemType", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col-md-4"], ["nz-input", "", "name", "vscSearchItemName", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "col-md-5", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzDanger", "", "type", "button", 3, "click"], [1, "bx", "bx-trash"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [3, "nzPageIndexChange", "nzPageSizeChange", "nzData", "nzFrontPagination", "nzLoading", "nzTotal", "nzPageIndex", "nzPageSize", "nzPageSizeOptions", "nzShowSizeChanger", "nzShowTotal", "nzScroll"], ["nzWidth", "40px", 1, "text-center"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel", "nzIndeterminate"], ["nzWidth", "50px", 1, "text-center"], ["nzWidth", "170px"], ["nzWidth", "140px"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "120px", 1, "text-center"], ["nzWidth", "140px", 1, "text-center"], ["nzWidth", "150px", 1, "text-center"], [4, "ngIf"], ["class", "vsc-row-clickable", 3, "click", 4, "ngFor", "ngForOf"], ["nzWidth", "700px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "10", 1, "text-center", "text-muted"], [1, "vsc-row-clickable", 3, "click"], [1, "text-center", 3, "click"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel"], [1, "text-center"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label", "fw-semibold"], [1, "text-danger"], ["name", "vscFormItemType", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vscFormItemId", "maxlength", "50", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vscFormNameEn", "maxlength", "200", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vscFormNameKo", "maxlength", "200", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vscFormNameVi", "maxlength", "200", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vscFormNameZh", "maxlength", "200", 3, "ngModelChange", "ngModel"], ["name", "vscFormDataType", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nzValue", "NUMBER(14,4)", 3, "nzLabel"], ["nzValue", "VARCHAR(100)", 3, "nzLabel"], [1, "d-flex", "gap-3", "align-items-center", "pt-2"], ["nz-checkbox", "", 3, "ngModel", "name", "ngModelChange", 4, "ngFor", "ngForOf"], ["nz-input", "", "name", "vscFormDescr", "rows", "3", "maxlength", "200", 3, "ngModelChange", "ngModel"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel", "name"], [1, "mb-0"]], template: function ViewSalaryCodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "nz-card", 4)(3, "form", 5);
      \u0275\u0275listener("ngSubmit", function ViewSalaryCodeComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 6)(5, "label", 7);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "nz-select", 8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewSalaryCodeComponent_Template_nz_select_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchItemType, $event) || (ctx.searchItemType = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(10, ViewSalaryCodeComponent_nz_option_10_Template, 1, 2, "nz-option", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 10)(12, "label", 7);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function ViewSalaryCodeComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchItemName, $event) || (ctx.searchItemName = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("keyup.enter", function ViewSalaryCodeComponent_Template_input_keyup_enter_15_listener() {
        return ctx.search();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 12)(17, "button", 13);
      \u0275\u0275element(18, "i", 14);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 15);
      \u0275\u0275listener("click", function ViewSalaryCodeComponent_Template_button_click_21_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(22, "i", 16);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "button", 17);
      \u0275\u0275listener("click", function ViewSalaryCodeComponent_Template_button_click_25_listener() {
        return ctx.openDeleteConfirm();
      });
      \u0275\u0275element(26, "i", 18);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "nz-card");
      \u0275\u0275template(30, ViewSalaryCodeComponent_nz_alert_30_Template, 1, 1, "nz-alert", 19);
      \u0275\u0275elementStart(31, "nz-table", 20, 0);
      \u0275\u0275listener("nzPageIndexChange", function ViewSalaryCodeComponent_Template_nz_table_nzPageIndexChange_31_listener($event) {
        return ctx.onPageIndexChange($event);
      })("nzPageSizeChange", function ViewSalaryCodeComponent_Template_nz_table_nzPageSizeChange_31_listener($event) {
        return ctx.onPageSizeChange($event);
      });
      \u0275\u0275elementStart(33, "thead")(34, "tr")(35, "th", 21)(36, "label", 22);
      \u0275\u0275listener("ngModelChange", function ViewSalaryCodeComponent_Template_label_ngModelChange_36_listener($event) {
        return ctx.toggleAllChecked($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th", 23);
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
      \u0275\u0275elementStart(46, "th");
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "th", 26);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "th");
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
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "tbody");
      \u0275\u0275template(65, ViewSalaryCodeComponent_tr_65_Template, 4, 4, "tr", 30)(66, ViewSalaryCodeComponent_tr_66_Template, 21, 12, "tr", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275template(67, ViewSalaryCodeComponent_ng_template_67_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(69, "nz-modal", 32);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275pipe(71, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewSalaryCodeComponent_Template_nz_modal_nzOnCancel_69_listener() {
        return ctx.closeModal();
      })("nzOnOk", function ViewSalaryCodeComponent_Template_nz_modal_nzOnOk_69_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(72, ViewSalaryCodeComponent_ng_container_72_Template, 65, 54, "ng-container", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "nz-modal", 34);
      \u0275\u0275pipe(74, "translate");
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275pipe(76, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewSalaryCodeComponent_Template_nz_modal_nzOnCancel_73_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function ViewSalaryCodeComponent_Template_nz_modal_nzOnOk_73_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(77, ViewSalaryCodeComponent_ng_container_77_Template, 4, 5, "ng-container", 33);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const vscTable_r12 = \u0275\u0275reference(32);
      const vscTotalTpl_r13 = \u0275\u0275reference(68);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 43, "pa.salaryCode.itemType", "Lo\u1EA1i h\u1EA1ng m\u1EE5c"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchItemType);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(9, 46, "pa.salaryCode.itemType.all", "T\u1EA5t c\u1EA3"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.itemTypes);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 49, "pa.salaryCode.itemName", "T\xEAn h\u1EA1ng m\u1EE5c"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchItemName);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(20, 52, "pa.salaryCode.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(24, 55, "pa.salaryCode.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(28, 58, "pa.salaryCode.delete", "X\xF3a"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzFrontPagination", false)("nzLoading", ctx.loading())("nzTotal", ctx.totalRecords())("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowSizeChanger", true)("nzShowTotal", vscTotalTpl_r13)("nzScroll", \u0275\u0275pureFunction0(103, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.allChecked)("nzIndeterminate", ctx.someChecked);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 61, "pa.salaryCode.no", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 64, "pa.salaryCode.itemType", "Lo\u1EA1i h\u1EA1ng m\u1EE5c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 67, "pa.salaryCode.itemId", "ID h\u1EA1ng m\u1EE5c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 70, "pa.salaryCode.itemName", "T\xEAn h\u1EA1ng m\u1EE5c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 73, "pa.salaryCode.dataType", "D\u1EEF li\u1EC7u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 76, "pa.salaryCode.descr", "Mi\xEAu t\u1EA3"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 79, "pa.salaryCode.companyUsage", "C\xF4ng ty s\u1EED d\u1EE5ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(60, 82, "pa.salaryCode.createdBy", "Ng\u01B0\u1EDDi t\u1EA1o"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(63, 85, "pa.salaryCode.createDate", "Th\u1EDDi gian t\u1EA1o"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", vscTable_r12.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", ctx.modalTitle())("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(70, 88, "pa.salaryCode.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(71, 91, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(4);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(74, 94, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(75, 97, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(76, 100, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzCheckboxModule, NzCheckboxComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\n.vsc-row-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=view-salary-code.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewSalaryCodeComponent, [{
    type: Component,
    args: [{ selector: "app-view-salary-code", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzSelectModule,
      NzButtonModule,
      NzCheckboxModule,
      NzModalModule,
      NzAlertModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3" (ngSubmit)="search()">
        <div class="col-md-3">
          <label class="form-label">{{ 'pa.salaryCode.itemType' | translate:'Lo\u1EA1i h\u1EA1ng m\u1EE5c' }}</label>
          <nz-select class="w-100" [(ngModel)]="searchItemType" name="vscSearchItemType" nzAllowClear
                     [nzPlaceHolder]="'pa.salaryCode.itemType.all' | translate:'T\u1EA5t c\u1EA3'">
            <nz-option *ngFor="let t of itemTypes" [nzValue]="t.value" [nzLabel]="i18n.t(t.key, t.fallback)"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-4">
          <label class="form-label">{{ 'pa.salaryCode.itemName' | translate:'T\xEAn h\u1EA1ng m\u1EE5c' }}</label>
          <input nz-input [(ngModel)]="searchItemName" name="vscSearchItemName" (keyup.enter)="search()">
        </div>
        <div class="col-md-5 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'pa.salaryCode.search' | translate:'Tra c\u1EE9u' }}
          </button>
          <button nz-button nzType="primary" type="button" (click)="openAddModal()">
            <i class="bx bx-plus"></i> {{ 'pa.salaryCode.addNew' | translate:'Th\xEAm m\u1EDBi' }}
          </button>
          <button nz-button nzDanger type="button" (click)="openDeleteConfirm()">
            <i class="bx bx-trash"></i> {{ 'pa.salaryCode.delete' | translate:'X\xF3a' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <!-- Server-side pagination (draw/start/length -> recordsTotal), \u0111\xFAng h\xE0nh vi DataTables g\u1ED1c. -->
      <nz-table [nzData]="rows()" [nzFrontPagination]="false" [nzLoading]="loading()" [nzTotal]="totalRecords()"
                [nzPageIndex]="pageIndex" [nzPageSize]="pageSize" [nzPageSizeOptions]="pageSizeOptions"
                [nzShowSizeChanger]="true" [nzShowTotal]="vscTotalTpl"
                (nzPageIndexChange)="onPageIndexChange($event)" (nzPageSizeChange)="onPageSizeChange($event)"
                [nzScroll]="{ x: '1400px', y: 'calc(100vh - 420px)' }" #vscTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="40px">
              <label nz-checkbox [ngModel]="allChecked" [nzIndeterminate]="someChecked" (ngModelChange)="toggleAllChecked($event)"></label>
            </th>
            <th class="text-center" nzWidth="50px">{{ 'pa.salaryCode.no' | translate:'STT' }}</th>
            <th nzWidth="170px">{{ 'pa.salaryCode.itemType' | translate:'Lo\u1EA1i h\u1EA1ng m\u1EE5c' }}</th>
            <th nzWidth="140px">{{ 'pa.salaryCode.itemId' | translate:'ID h\u1EA1ng m\u1EE5c' }}</th>
            <th>{{ 'pa.salaryCode.itemName' | translate:'T\xEAn h\u1EA1ng m\u1EE5c' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'pa.salaryCode.dataType' | translate:'D\u1EEF li\u1EC7u' }}</th>
            <th>{{ 'pa.salaryCode.descr' | translate:'Mi\xEAu t\u1EA3' }}</th>
            <th class="text-center" nzWidth="120px">{{ 'pa.salaryCode.companyUsage' | translate:'C\xF4ng ty s\u1EED d\u1EE5ng' }}</th>
            <th class="text-center" nzWidth="140px">{{ 'pa.salaryCode.createdBy' | translate:'Ng\u01B0\u1EDDi t\u1EA1o' }}</th>
            <th class="text-center" nzWidth="150px">{{ 'pa.salaryCode.createDate' | translate:'Th\u1EDDi gian t\u1EA1o' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="10" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of vscTable.data; let i = index" class="vsc-row-clickable" (click)="openEditModal(row)">
            <td class="text-center" (click)="$event.stopPropagation()">
              <label nz-checkbox [ngModel]="isChecked(row)" (ngModelChange)="toggleChecked(row, $event)"></label>
            </td>
            <td class="text-center">{{ (pageIndex - 1) * pageSize + i + 1 }}</td>
            <td>{{ itemTypeLabel(row.itemType) }}</td>
            <td>{{ row.itemId }}</td>
            <td [attr.title]="row.itemName || null">{{ row.itemName }}</td>
            <td class="text-center">{{ row.dataType }}</td>
            <td [attr.title]="row.descr || null">{{ row.descr }}</td>
            <td class="text-center">{{ row.companyUsageStr }}</td>
            <td class="text-center">{{ row.createdBy }}</td>
            <td class="text-center">{{ row.createDate }}</td>
          </tr>
        </tbody>
        <ng-template #vscTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal Th\xEAm m\u1EDBi / Ch\u1EC9nh s\u1EEDa -->
<nz-modal [nzVisible]="modalVisible()" [nzTitle]="modalTitle()" nzWidth="700px"
          (nzOnCancel)="closeModal()" (nzOnOk)="saveForm()" [nzOkLoading]="saving()"
          [nzOkText]="'pa.salaryCode.save' | translate:'L\u01B0u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <div class="row g-3">
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.salaryCode.itemType' | translate:'Lo\u1EA1i h\u1EA1ng m\u1EE5c' }} <span class="text-danger">*</span></label>
        <nz-select class="w-100" [(ngModel)]="form.itemType" name="vscFormItemType">
          <nz-option *ngFor="let t of itemTypes" [nzValue]="t.value" [nzLabel]="i18n.t(t.key, t.fallback)"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.salaryCode.itemId' | translate:'ID h\u1EA1ng m\u1EE5c' }} <span class="text-danger">*</span></label>
        <input nz-input [(ngModel)]="form.itemId" name="vscFormItemId" maxlength="50">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.salaryCode.nameEn' | translate:'English Name' }} <span class="text-danger">*</span></label>
        <input nz-input [(ngModel)]="form.nameEn" name="vscFormNameEn" maxlength="200">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.salaryCode.nameKo' | translate:'Korean Name' }} <span class="text-danger">*</span></label>
        <input nz-input [(ngModel)]="form.nameKo" name="vscFormNameKo" maxlength="200">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.salaryCode.nameVi' | translate:'Vietnamese Name' }} <span class="text-danger">*</span></label>
        <input nz-input [(ngModel)]="form.nameVi" name="vscFormNameVi" maxlength="200">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.salaryCode.nameZh' | translate:'Chinese Name' }} <span class="text-danger">*</span></label>
        <input nz-input [(ngModel)]="form.nameZh" name="vscFormNameZh" maxlength="200">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.salaryCode.dataType' | translate:'D\u1EEF li\u1EC7u' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.dataType" name="vscFormDataType">
          <nz-option nzValue="NUMBER(14,4)" [nzLabel]="'pa.salaryCode.dataType.number' | translate:'D\u1EA1ng s\u1ED1'"></nz-option>
          <nz-option nzValue="VARCHAR(100)" [nzLabel]="'pa.salaryCode.dataType.varchar' | translate:'D\u1EA1ng k\xFD t\u1EF1'"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.salaryCode.companyUsage' | translate:'C\xF4ng ty s\u1EED d\u1EE5ng' }}</label>
        <div class="d-flex gap-3 align-items-center pt-2">
          <label nz-checkbox *ngFor="let c of companyUsageOptions" [ngModel]="isCompanyChecked(c)"
                 [name]="'vscFormCpny_' + c" (ngModelChange)="toggleCompanyUsage(c, $event)">{{ c }}</label>
        </div>
      </div>
      <div class="col-12">
        <label class="form-label fw-semibold">{{ 'pa.salaryCode.descr' | translate:'Mi\xEAu t\u1EA3' }}</label>
        <textarea nz-input [(ngModel)]="form.descr" name="vscFormDescr" rows="3" maxlength="200"></textarea>
      </div>
    </div>
  </ng-container>
</nz-modal>

<!-- Modal x\xE1c nh\u1EADn x\xF3a nhi\u1EC1u d\xF2ng -->
<nz-modal [nzVisible]="deleteVisible()" [nzTitle]="'common.confirm' | translate:'X\xE1c nh\u1EADn'"
          (nzOnCancel)="closeDeleteConfirm()" (nzOnOk)="confirmDelete()" [nzOkLoading]="deleting()"
          [nzOkText]="'common.confirm' | translate:'X\xE1c nh\u1EADn'" [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'">
  <ng-container *nzModalContent>
    <p class="mb-0">{{ 'pa.salaryCode.confirmDelete' | translate:'B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a c\xE1c b\u1EA3n ghi \u0111\xE3 ch\u1ECDn?' }} ({{ selectedCount }})</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-salary-code/view-salary-code.component.css */\n.vsc-row-clickable {\n  cursor: pointer;\n}\n/*# sourceMappingURL=view-salary-code.component.css.map */\n"] }]
  }], () => [{ type: ViewSalaryCodeService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewSalaryCodeComponent, { className: "ViewSalaryCodeComponent", filePath: "src/app/view-salary-code/view-salary-code.component.ts", lineNumber: 109 });
})();
export {
  ViewSalaryCodeComponent
};
//# debugId=9c47a0e1-610e-58de-8e40-0872d19287cb
//# sourceMappingURL=chunk-WJ33FRLZ.js.map
