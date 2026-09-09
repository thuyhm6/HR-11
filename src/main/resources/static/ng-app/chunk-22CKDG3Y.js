import {
  NzTagComponent,
  NzTagModule
} from "./chunk-HTQAHYN3.js";
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

// src/app/view-pa-input-item-param/view-pa-input-item-param.service.ts
var API_BASE = "/pa/salary/inputitemparam/api";
var ViewPaInputItemParamService = class _ViewPaInputItemParamService {
  constructor(http) {
    this.http = http;
  }
  http;
  getList(params) {
    let httpParams = new HttpParams().set("draw", params.draw).set("start", params.start).set("length", params.length);
    if (params.itemTypeSearch != null)
      httpParams = httpParams.set("itemTypeSearch", params.itemTypeSearch);
    if (params.aliasNameSearch)
      httpParams = httpParams.set("aliasNameSearch", params.aliasNameSearch);
    return this.http.get(`${API_BASE}/list`, {
      params: httpParams,
      withCredentials: true
    });
  }
  getOne(paramNo) {
    return this.http.get(`${API_BASE}/${paramNo}`, { withCredentials: true });
  }
  update(payload) {
    return this.http.put(`${API_BASE}/update`, payload, { withCredentials: true });
  }
  getDistinctList() {
    return this.http.get(`${API_BASE}/distinctList`, { withCredentials: true });
  }
  deleteList(paramNos) {
    return this.http.request("DELETE", `${API_BASE}/deleteList`, {
      body: paramNos,
      withCredentials: true
    });
  }
  static \u0275fac = function ViewPaInputItemParamService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewPaInputItemParamService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewPaInputItemParamService, factory: _ViewPaInputItemParamService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewPaInputItemParamService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-pa-input-item-param/view-pa-input-item-param.component.ts
var _c0 = () => ({ x: "1200px", y: "calc(100vh - 420px)" });
function ViewPaInputItemParamComponent_nz_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 33);
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzValue", t_r2.value)("nzLabel", ctx_r2.i18n.t(t_r2.key, t_r2.fallback));
  }
}
function ViewPaInputItemParamComponent_nz_alert_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 34);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r2.errorMessage() ?? "");
  }
}
function ViewPaInputItemParamComponent_tr_62_Template(rf, ctx) {
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
function ViewPaInputItemParamComponent_tr_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 36);
    \u0275\u0275listener("click", function ViewPaInputItemParamComponent_tr_63_Template_tr_click_0_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openEditModal(row_r5));
    });
    \u0275\u0275elementStart(1, "td", 37);
    \u0275\u0275listener("click", function ViewPaInputItemParamComponent_tr_63_Template_td_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "label", 38);
    \u0275\u0275listener("ngModelChange", function ViewPaInputItemParamComponent_tr_63_Template_label_ngModelChange_2_listener($event) {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleChecked(row_r5, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 39);
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
    \u0275\u0275elementStart(13, "td", 39);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 39)(18, "nz-tag", 40);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()()();
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
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.cpnyName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.cpnyName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.itemTypeLabel(row_r5.itemType));
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.distinctFieldName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.distinctFieldName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.distinctField2ndName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.distinctField2ndName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.defaultVal);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.aliasName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.aliasName);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColor", row_r5.activity === 1 ? "success" : "default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r5.activity === 1 ? \u0275\u0275pipeBind2(20, 14, "pa.inputItemParam.activity.use", "S\u1EED d\u1EE5ng") : \u0275\u0275pipeBind2(21, 17, "pa.inputItemParam.activity.notUse", "Kh\xF4ng s\u1EED d\u1EE5ng"), " ");
  }
}
function ViewPaInputItemParamComponent_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r7 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r7, " ");
  }
}
function ViewPaInputItemParamComponent_ng_container_69_nz_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 33);
  }
  if (rf & 2) {
    const d_r9 = ctx.$implicit;
    \u0275\u0275property("nzValue", d_r9.distinctField)("nzLabel", d_r9.distinctFieldName || d_r9.distinctField);
  }
}
function ViewPaInputItemParamComponent_ng_container_69_nz_option_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 33);
  }
  if (rf & 2) {
    const d_r10 = ctx.$implicit;
    \u0275\u0275property("nzValue", d_r10.distinctField)("nzLabel", d_r10.distinctFieldName || d_r10.distinctField);
  }
}
function ViewPaInputItemParamComponent_ng_container_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 41)(2, "div", 42)(3, "label", 43);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 44);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 42)(9, "label", 43);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 44);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 3)(15, "label", 43);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 44);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 42)(21, "label", 43);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "nz-select", 45);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaInputItemParamComponent_ng_container_69_Template_nz_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.distinctField, $event) || (ctx_r2.form.distinctField = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(25, ViewPaInputItemParamComponent_ng_container_69_nz_option_25_Template, 1, 2, "nz-option", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 42)(27, "label", 43);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "nz-select", 46);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaInputItemParamComponent_ng_container_69_Template_nz_select_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.distinctField2nd, $event) || (ctx_r2.form.distinctField2nd = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(31, ViewPaInputItemParamComponent_ng_container_69_nz_option_31_Template, 1, 2, "nz-option", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 42)(33, "label", 43);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaInputItemParamComponent_ng_container_69_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.defaultVal, $event) || (ctx_r2.form.defaultVal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 42)(38, "label", 48);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "nz-select", 49);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaInputItemParamComponent_ng_container_69_Template_nz_select_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.activity, $event) || (ctx_r2.form.activity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(42, "nz-option", 33);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275element(44, "nz-option", 33);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 20, "pa.inputItemParam.company", "C\xF4ng ty"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.form.cpnyId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 23, "pa.inputItemParam.itemType", "Lo\u1EA1i h\u1EA1ng m\u1EE5c"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.form.itemTypeLabel);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 26, "pa.inputItemParam.itemName", "T\xEAn h\u1EA1ng m\u1EE5c"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.form.aliasName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 29, "pa.inputItemParam.distinctField1", "H\u1EA1ng m\u1EE5c ph\xE2n bi\u1EC7t 1"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.distinctField);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.distinctOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 32, "pa.inputItemParam.distinctField2", "H\u1EA1ng m\u1EE5c ph\xE2n bi\u1EC7t 2"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.distinctField2nd);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.distinctOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 35, "pa.inputItemParam.defaultVal", "Gi\xE1 tr\u1ECB m\u1EB7c \u0111\u1ECBnh"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.defaultVal);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 38, "pa.inputItemParam.activity", "T\xECnh tr\u1EA1ng s\u1EED d\u1EE5ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.activity);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzValue", 1)("nzLabel", \u0275\u0275pipeBind2(43, 41, "pa.inputItemParam.activity.use", "S\u1EED d\u1EE5ng"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzValue", 0)("nzLabel", \u0275\u0275pipeBind2(45, 44, "pa.inputItemParam.activity.notUse", "Kh\xF4ng s\u1EED d\u1EE5ng"));
  }
}
function ViewPaInputItemParamComponent_ng_container_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 50);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(3, 2, "pa.inputItemParam.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a c\xE1c b\u1EA3n ghi \u0111\xE3 ch\u1ECDn?"), " (", ctx_r2.selectedCount, ")");
  }
}
var I18N_KEYS = [
  "common.close",
  "common.confirm",
  "common.cancel",
  "common.loadFail",
  "common.noData",
  "common.totalRows",
  "pa.inputItemParam.pageTitle",
  "pa.inputItemParam.no",
  "pa.inputItemParam.company",
  "pa.inputItemParam.itemType",
  "pa.inputItemParam.distinctField1",
  "pa.inputItemParam.distinctField2",
  "pa.inputItemParam.defaultVal",
  "pa.inputItemParam.itemName",
  "pa.inputItemParam.activity",
  "pa.inputItemParam.activity.use",
  "pa.inputItemParam.activity.notUse",
  "pa.inputItemParam.search",
  "pa.inputItemParam.edit",
  "pa.inputItemParam.delete",
  "pa.inputItemParam.save",
  "pa.inputItemParam.editTitle",
  "pa.inputItemParam.confirmDelete",
  "pa.inputItemParam.selectRequired",
  "pa.inputItemParam.selectOne",
  "pa.inputItemParam.validateRequired",
  "pa.salaryCode.itemType.all",
  "pa.salaryCode.itemType.std",
  "pa.salaryCode.itemType.adj",
  "pa.salaryCode.itemType.excPay",
  "pa.salaryCode.itemType.adjDed",
  "pa.salaryCode.itemType.excDed",
  "pa.salaryCode.itemType.calc"
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
var EMPTY_FORM = {
  paramNo: null,
  cpnyId: "",
  itemTypeLabel: "",
  aliasName: "",
  distinctField: null,
  distinctField2nd: null,
  defaultVal: "",
  activity: 1
};
var ViewPaInputItemParamComponent = class _ViewPaInputItemParamComponent {
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
  distinctOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "distinctOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pageIndex = 1;
  pageSize = DEFAULT_PAGE_SIZE;
  draw = 1;
  searchItemType = null;
  searchAliasName = "";
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
  modalTitle = computed(
    () => this.i18n.t("pa.inputItemParam.editTitle", "Ch\u1EC9nh s\u1EEDa th\xF4ng s\u1ED1 m\u1EE5c nh\u1EADp"),
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
    this.api.getDistinctList().subscribe({
      next: (list) => this.distinctOptions.set(list ?? []),
      error: () => this.distinctOptions.set([])
    });
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
      itemTypeSearch: this.searchItemType,
      aliasNameSearch: this.searchAliasName.trim(),
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
  isChecked(row) {
    return this.checkedKeys().has(row.paramNo);
  }
  toggleChecked(row, checked) {
    const next = new Set(this.checkedKeys());
    if (checked)
      next.add(row.paramNo);
    else
      next.delete(row.paramNo);
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
    this.rows().forEach((r) => checked ? next.add(r.paramNo) : next.delete(r.paramNo));
    this.checkedKeys.set(next);
  }
  // ==================== Modal chỉnh sửa ====================
  editSelected() {
    const selected = this.rows().filter((r) => this.isChecked(r));
    if (selected.length !== 1) {
      this.message.warning(this.i18n.t("pa.inputItemParam.selectOne", "Vui l\xF2ng ch\u1ECDn \u0111\xFAng m\u1ED9t b\u1EA3n ghi \u0111\u1EC3 s\u1EEDa!"));
      return;
    }
    this.openEditModal(selected[0]);
  }
  openEditModal(row) {
    this.api.getOne(row.paramNo).subscribe({
      next: (dto) => {
        this.form = {
          paramNo: dto.paramNo,
          cpnyId: dto.cpnyId || "",
          itemTypeLabel: this.itemTypeLabel(dto.itemType),
          aliasName: dto.aliasName || "",
          distinctField: dto.distinctField,
          distinctField2nd: dto.distinctField2nd,
          defaultVal: dto.defaultVal || "",
          activity: dto.activity ?? 1
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
    if (!this.form.paramNo)
      return;
    const payload = {
      paramNo: this.form.paramNo,
      distinctField: this.form.distinctField || null,
      distinctField2nd: this.form.distinctField2nd || null,
      defaultVal: this.form.defaultVal.trim(),
      activity: this.form.activity
    };
    this.saving.set(true);
    this.api.update(payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.message.success(res.message || this.i18n.t("pa.inputItemParam.save", "L\u01B0u"));
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
      this.message.warning(this.i18n.t("pa.inputItemParam.selectRequired", "Vui l\xF2ng ch\u1ECDn \xEDt nh\u1EA5t m\u1ED9t b\u1EA3n ghi!"));
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
    const paramNos = this.rows().filter((r) => this.isChecked(r)).map((r) => r.paramNo);
    if (paramNos.length === 0) {
      this.deleteVisible.set(false);
      return;
    }
    this.deleting.set(true);
    this.api.deleteList(paramNos).subscribe({
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
  static \u0275fac = function ViewPaInputItemParamComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewPaInputItemParamComponent)(\u0275\u0275directiveInject(ViewPaInputItemParamService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewPaInputItemParamComponent, selectors: [["app-view-pa-input-item-param"]], decls: 75, vars: 100, consts: [["vpiipTable", ""], ["vpiipTotalTpl", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["name", "vpiipSearchItemType", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col-md-4"], ["nz-input", "", "name", "vpiipSearchAliasName", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "col-md-5", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "nzType", "default", "type", "button", 3, "click"], [1, "bx", "bx-edit"], ["nz-button", "", "nzDanger", "", "type", "button", 3, "click"], [1, "bx", "bx-trash"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [3, "nzPageIndexChange", "nzPageSizeChange", "nzData", "nzFrontPagination", "nzLoading", "nzTotal", "nzPageIndex", "nzPageSize", "nzPageSizeOptions", "nzShowSizeChanger", "nzShowTotal", "nzScroll"], ["nzWidth", "40px", 1, "text-center"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel", "nzIndeterminate"], ["nzWidth", "50px", 1, "text-center"], ["nzWidth", "130px"], ["nzWidth", "170px"], ["nzWidth", "150px"], ["nzWidth", "130px", 1, "text-center"], [4, "ngIf"], ["class", "vpiip-row-clickable", 3, "click", 4, "ngFor", "ngForOf"], ["nzWidth", "600px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "9", 1, "text-center", "text-muted"], [1, "vpiip-row-clickable", 3, "click"], [1, "text-center", 3, "click"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel"], [1, "text-center"], [3, "nzColor"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label", "fw-semibold"], [1, "form-control-plaintext"], ["name", "vpiipFormDistinctField", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vpiipFormDistinctField2nd", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vpiipFormDefaultVal", "maxlength", "50", 3, "ngModelChange", "ngModel"], [1, "form-label", "fw-semibold", "d-block"], ["name", "vpiipFormActivity", 1, "w-100", 3, "ngModelChange", "ngModel"], [1, "mb-0"]], template: function ViewPaInputItemParamComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "nz-card", 4)(3, "form", 5);
      \u0275\u0275listener("ngSubmit", function ViewPaInputItemParamComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 6)(5, "label", 7);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "nz-select", 8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewPaInputItemParamComponent_Template_nz_select_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchItemType, $event) || (ctx.searchItemType = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(10, ViewPaInputItemParamComponent_nz_option_10_Template, 1, 2, "nz-option", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 10)(12, "label", 7);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function ViewPaInputItemParamComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchAliasName, $event) || (ctx.searchAliasName = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("keyup.enter", function ViewPaInputItemParamComponent_Template_input_keyup_enter_15_listener() {
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
      \u0275\u0275listener("click", function ViewPaInputItemParamComponent_Template_button_click_21_listener() {
        return ctx.editSelected();
      });
      \u0275\u0275element(22, "i", 16);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "button", 17);
      \u0275\u0275listener("click", function ViewPaInputItemParamComponent_Template_button_click_25_listener() {
        return ctx.openDeleteConfirm();
      });
      \u0275\u0275element(26, "i", 18);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "nz-card");
      \u0275\u0275template(30, ViewPaInputItemParamComponent_nz_alert_30_Template, 1, 1, "nz-alert", 19);
      \u0275\u0275elementStart(31, "nz-table", 20, 0);
      \u0275\u0275listener("nzPageIndexChange", function ViewPaInputItemParamComponent_Template_nz_table_nzPageIndexChange_31_listener($event) {
        return ctx.onPageIndexChange($event);
      })("nzPageSizeChange", function ViewPaInputItemParamComponent_Template_nz_table_nzPageSizeChange_31_listener($event) {
        return ctx.onPageSizeChange($event);
      });
      \u0275\u0275elementStart(33, "thead")(34, "tr")(35, "th", 21)(36, "label", 22);
      \u0275\u0275listener("ngModelChange", function ViewPaInputItemParamComponent_Template_label_ngModelChange_36_listener($event) {
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
      \u0275\u0275elementStart(46, "th", 26);
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
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "th");
      \u0275\u0275text(56);
      \u0275\u0275pipe(57, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "th", 27);
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(61, "tbody");
      \u0275\u0275template(62, ViewPaInputItemParamComponent_tr_62_Template, 4, 4, "tr", 28)(63, ViewPaInputItemParamComponent_tr_63_Template, 22, 20, "tr", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275template(64, ViewPaInputItemParamComponent_ng_template_64_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(66, "nz-modal", 30);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275pipe(68, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewPaInputItemParamComponent_Template_nz_modal_nzOnCancel_66_listener() {
        return ctx.closeModal();
      })("nzOnOk", function ViewPaInputItemParamComponent_Template_nz_modal_nzOnOk_66_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(69, ViewPaInputItemParamComponent_ng_container_69_Template, 46, 47, "ng-container", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "nz-modal", 32);
      \u0275\u0275pipe(71, "translate");
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewPaInputItemParamComponent_Template_nz_modal_nzOnCancel_70_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function ViewPaInputItemParamComponent_Template_nz_modal_nzOnOk_70_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(74, ViewPaInputItemParamComponent_ng_container_74_Template, 4, 5, "ng-container", 31);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const vpiipTable_r11 = \u0275\u0275reference(32);
      const vpiipTotalTpl_r12 = \u0275\u0275reference(65);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 42, "pa.inputItemParam.itemType", "Lo\u1EA1i h\u1EA1ng m\u1EE5c"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchItemType);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(9, 45, "pa.salaryCode.itemType.all", "T\u1EA5t c\u1EA3"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.itemTypes);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 48, "pa.inputItemParam.itemName", "T\xEAn h\u1EA1ng m\u1EE5c"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchAliasName);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(20, 51, "pa.inputItemParam.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(24, 54, "pa.inputItemParam.edit", "S\u1EEDa"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(28, 57, "pa.inputItemParam.delete", "X\xF3a"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzFrontPagination", false)("nzLoading", ctx.loading())("nzTotal", ctx.totalRecords())("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowSizeChanger", true)("nzShowTotal", vpiipTotalTpl_r12)("nzScroll", \u0275\u0275pureFunction0(99, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.allChecked)("nzIndeterminate", ctx.someChecked);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 60, "pa.inputItemParam.no", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 63, "pa.inputItemParam.company", "C\xF4ng ty"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 66, "pa.inputItemParam.itemType", "Lo\u1EA1i h\u1EA1ng m\u1EE5c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 69, "pa.inputItemParam.distinctField1", "H\u1EA1ng m\u1EE5c ph\xE2n bi\u1EC7t 1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 72, "pa.inputItemParam.distinctField2", "H\u1EA1ng m\u1EE5c ph\xE2n bi\u1EC7t 2"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 75, "pa.inputItemParam.defaultVal", "Gi\xE1 tr\u1ECB m\u1EB7c \u0111\u1ECBnh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 78, "pa.inputItemParam.itemName", "T\xEAn h\u1EA1ng m\u1EE5c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(60, 81, "pa.inputItemParam.activity", "T\xECnh tr\u1EA1ng s\u1EED d\u1EE5ng"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", vpiipTable_r11.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", ctx.modalTitle())("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(67, 84, "pa.inputItemParam.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(68, 87, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(4);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(71, 90, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(72, 93, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(73, 96, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzCheckboxModule, NzCheckboxComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, NzTagModule, NzTagComponent, TranslatePipe], styles: ["\n.vpiip-row-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=view-pa-input-item-param.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewPaInputItemParamComponent, [{
    type: Component,
    args: [{ selector: "app-view-pa-input-item-param", standalone: true, imports: [
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
      NzTagModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3" (ngSubmit)="search()">
        <div class="col-md-3">
          <label class="form-label">{{ 'pa.inputItemParam.itemType' | translate:'Lo\u1EA1i h\u1EA1ng m\u1EE5c' }}</label>
          <nz-select class="w-100" [(ngModel)]="searchItemType" name="vpiipSearchItemType" nzAllowClear
                     [nzPlaceHolder]="'pa.salaryCode.itemType.all' | translate:'T\u1EA5t c\u1EA3'">
            <nz-option *ngFor="let t of itemTypes" [nzValue]="t.value" [nzLabel]="i18n.t(t.key, t.fallback)"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-4">
          <label class="form-label">{{ 'pa.inputItemParam.itemName' | translate:'T\xEAn h\u1EA1ng m\u1EE5c' }}</label>
          <input nz-input [(ngModel)]="searchAliasName" name="vpiipSearchAliasName" (keyup.enter)="search()">
        </div>
        <div class="col-md-5 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'pa.inputItemParam.search' | translate:'Tra c\u1EE9u' }}
          </button>
          <button nz-button nzType="default" type="button" (click)="editSelected()">
            <i class="bx bx-edit"></i> {{ 'pa.inputItemParam.edit' | translate:'S\u1EEDa' }}
          </button>
          <button nz-button nzDanger type="button" (click)="openDeleteConfirm()">
            <i class="bx bx-trash"></i> {{ 'pa.inputItemParam.delete' | translate:'X\xF3a' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <!-- Server-side pagination (draw/start/length -> recordsTotal), \u0111\xFAng h\xE0nh vi DataTables g\u1ED1c. -->
      <nz-table [nzData]="rows()" [nzFrontPagination]="false" [nzLoading]="loading()" [nzTotal]="totalRecords()"
                [nzPageIndex]="pageIndex" [nzPageSize]="pageSize" [nzPageSizeOptions]="pageSizeOptions"
                [nzShowSizeChanger]="true" [nzShowTotal]="vpiipTotalTpl"
                (nzPageIndexChange)="onPageIndexChange($event)" (nzPageSizeChange)="onPageSizeChange($event)"
                [nzScroll]="{ x: '1200px', y: 'calc(100vh - 420px)' }" #vpiipTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="40px">
              <label nz-checkbox [ngModel]="allChecked" [nzIndeterminate]="someChecked" (ngModelChange)="toggleAllChecked($event)"></label>
            </th>
            <th class="text-center" nzWidth="50px">{{ 'pa.inputItemParam.no' | translate:'STT' }}</th>
            <th nzWidth="130px">{{ 'pa.inputItemParam.company' | translate:'C\xF4ng ty' }}</th>
            <th nzWidth="170px">{{ 'pa.inputItemParam.itemType' | translate:'Lo\u1EA1i h\u1EA1ng m\u1EE5c' }}</th>
            <th nzWidth="150px">{{ 'pa.inputItemParam.distinctField1' | translate:'H\u1EA1ng m\u1EE5c ph\xE2n bi\u1EC7t 1' }}</th>
            <th nzWidth="150px">{{ 'pa.inputItemParam.distinctField2' | translate:'H\u1EA1ng m\u1EE5c ph\xE2n bi\u1EC7t 2' }}</th>
            <th class="text-center" nzWidth="130px">{{ 'pa.inputItemParam.defaultVal' | translate:'Gi\xE1 tr\u1ECB m\u1EB7c \u0111\u1ECBnh' }}</th>
            <th>{{ 'pa.inputItemParam.itemName' | translate:'T\xEAn h\u1EA1ng m\u1EE5c' }}</th>
            <th class="text-center" nzWidth="130px">{{ 'pa.inputItemParam.activity' | translate:'T\xECnh tr\u1EA1ng s\u1EED d\u1EE5ng' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="9" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of vpiipTable.data; let i = index" class="vpiip-row-clickable" (click)="openEditModal(row)">
            <td class="text-center" (click)="$event.stopPropagation()">
              <label nz-checkbox [ngModel]="isChecked(row)" (ngModelChange)="toggleChecked(row, $event)"></label>
            </td>
            <td class="text-center">{{ (pageIndex - 1) * pageSize + i + 1 }}</td>
            <td [attr.title]="row.cpnyName || null">{{ row.cpnyName }}</td>
            <td>{{ itemTypeLabel(row.itemType) }}</td>
            <td [attr.title]="row.distinctFieldName || null">{{ row.distinctFieldName }}</td>
            <td [attr.title]="row.distinctField2ndName || null">{{ row.distinctField2ndName }}</td>
            <td class="text-center">{{ row.defaultVal }}</td>
            <td [attr.title]="row.aliasName || null">{{ row.aliasName }}</td>
            <td class="text-center">
              <nz-tag [nzColor]="row.activity === 1 ? 'success' : 'default'">
                {{ row.activity === 1 ? ('pa.inputItemParam.activity.use' | translate:'S\u1EED d\u1EE5ng') : ('pa.inputItemParam.activity.notUse' | translate:'Kh\xF4ng s\u1EED d\u1EE5ng') }}
              </nz-tag>
            </td>
          </tr>
        </tbody>
        <ng-template #vpiipTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal ch\u1EC9nh s\u1EEDa -->
<nz-modal [nzVisible]="modalVisible()" [nzTitle]="modalTitle()" nzWidth="600px"
          (nzOnCancel)="closeModal()" (nzOnOk)="saveForm()" [nzOkLoading]="saving()"
          [nzOkText]="'pa.inputItemParam.save' | translate:'L\u01B0u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <div class="row g-3">
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.inputItemParam.company' | translate:'C\xF4ng ty' }}</label>
        <div class="form-control-plaintext">{{ form.cpnyId }}</div>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.inputItemParam.itemType' | translate:'Lo\u1EA1i h\u1EA1ng m\u1EE5c' }}</label>
        <div class="form-control-plaintext">{{ form.itemTypeLabel }}</div>
      </div>
      <div class="col-12">
        <label class="form-label fw-semibold">{{ 'pa.inputItemParam.itemName' | translate:'T\xEAn h\u1EA1ng m\u1EE5c' }}</label>
        <div class="form-control-plaintext">{{ form.aliasName }}</div>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.inputItemParam.distinctField1' | translate:'H\u1EA1ng m\u1EE5c ph\xE2n bi\u1EC7t 1' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.distinctField" name="vpiipFormDistinctField" nzAllowClear>
          <nz-option *ngFor="let d of distinctOptions()" [nzValue]="d.distinctField" [nzLabel]="d.distinctFieldName || d.distinctField"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.inputItemParam.distinctField2' | translate:'H\u1EA1ng m\u1EE5c ph\xE2n bi\u1EC7t 2' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.distinctField2nd" name="vpiipFormDistinctField2nd" nzAllowClear>
          <nz-option *ngFor="let d of distinctOptions()" [nzValue]="d.distinctField" [nzLabel]="d.distinctFieldName || d.distinctField"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.inputItemParam.defaultVal' | translate:'Gi\xE1 tr\u1ECB m\u1EB7c \u0111\u1ECBnh' }}</label>
        <input nz-input [(ngModel)]="form.defaultVal" name="vpiipFormDefaultVal" maxlength="50">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold d-block">{{ 'pa.inputItemParam.activity' | translate:'T\xECnh tr\u1EA1ng s\u1EED d\u1EE5ng' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.activity" name="vpiipFormActivity">
          <nz-option [nzValue]="1" [nzLabel]="'pa.inputItemParam.activity.use' | translate:'S\u1EED d\u1EE5ng'"></nz-option>
          <nz-option [nzValue]="0" [nzLabel]="'pa.inputItemParam.activity.notUse' | translate:'Kh\xF4ng s\u1EED d\u1EE5ng'"></nz-option>
        </nz-select>
      </div>
    </div>
  </ng-container>
</nz-modal>

<!-- Modal x\xE1c nh\u1EADn x\xF3a nhi\u1EC1u d\xF2ng -->
<nz-modal [nzVisible]="deleteVisible()" [nzTitle]="'common.confirm' | translate:'X\xE1c nh\u1EADn'"
          (nzOnCancel)="closeDeleteConfirm()" (nzOnOk)="confirmDelete()" [nzOkLoading]="deleting()"
          [nzOkText]="'common.confirm' | translate:'X\xE1c nh\u1EADn'" [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'">
  <ng-container *nzModalContent>
    <p class="mb-0">{{ 'pa.inputItemParam.confirmDelete' | translate:'B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a c\xE1c b\u1EA3n ghi \u0111\xE3 ch\u1ECDn?' }} ({{ selectedCount }})</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-pa-input-item-param/view-pa-input-item-param.component.css */\n.vpiip-row-clickable {\n  cursor: pointer;\n}\n/*# sourceMappingURL=view-pa-input-item-param.component.css.map */\n"] }]
  }], () => [{ type: ViewPaInputItemParamService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewPaInputItemParamComponent, { className: "ViewPaInputItemParamComponent", filePath: "src/app/view-pa-input-item-param/view-pa-input-item-param.component.ts", lineNumber: 109 });
})();
export {
  ViewPaInputItemParamComponent
};
//# debugId=a11697af-0d60-54c7-af99-190be5e7561a
//# sourceMappingURL=chunk-22CKDG3Y.js.map
