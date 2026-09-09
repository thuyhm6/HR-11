import {
  NzSwitchComponent,
  NzSwitchModule
} from "./chunk-7HR5KXO4.js";
import {
  NzInputNumberComponent,
  NzInputNumberModule
} from "./chunk-IXCMIWQQ.js";
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
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTW5U2M5.js";

// src/app/evs-formula-list/evs-formula-list.service.ts
var API_BASE = "/evs/manage/api/evsFormula";
var EvsFormulaListService = class _EvsFormulaListService {
  constructor(http) {
    this.http = http;
  }
  http;
  getList(codeNo, codeName, activity) {
    let params = new HttpParams();
    if (codeNo)
      params = params.set("codeNo", codeNo);
    if (codeName)
      params = params.set("codeName", codeName);
    if (activity)
      params = params.set("activity", activity);
    return this.http.get(`${API_BASE}/list`, { params, withCredentials: true });
  }
  getOne(seq) {
    return this.http.get(`${API_BASE}/${encodeURIComponent(seq)}`, { withCredentials: true });
  }
  save(payload) {
    return this.http.post(`${API_BASE}/save`, payload, { withCredentials: true });
  }
  delete(seq) {
    return this.http.post(`${API_BASE}/delete`, { seq }, { withCredentials: true });
  }
  static \u0275fac = function EvsFormulaListService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EvsFormulaListService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EvsFormulaListService, factory: _EvsFormulaListService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EvsFormulaListService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/evs-formula-list/evs-formula-list.component.ts
var _c0 = () => ({ x: "1200px" });
function EvsFormulaListComponent_nz_alert_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 36);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function EvsFormulaListComponent_tr_68_Template(rf, ctx) {
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
function EvsFormulaListComponent_tr_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 38);
    \u0275\u0275listener("click", function EvsFormulaListComponent_tr_69_Template_tr_click_0_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditModal(row_r4));
    });
    \u0275\u0275elementStart(1, "td", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 40);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 39)(12, "nz-tag", 41);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 39);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 39)(19, "button", 42);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275listener("click", function EvsFormulaListComponent_tr_69_Template_button_click_19_listener($event) {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.openEditModal(row_r4));
    });
    \u0275\u0275element(21, "i", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 42);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275listener("click", function EvsFormulaListComponent_tr_69_Template_button_click_22_listener($event) {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.openDeleteConfirm(row_r4));
    });
    \u0275\u0275element(24, "i", 44);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r5 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.codeNo);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.codeName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.codeName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.formula || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.preview(row_r4.formula));
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.remark || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.preview(row_r4.remark, 50));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColor", ctx_r1.activityTagColor(row_r4.activity));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.activity === "1" ? \u0275\u0275pipeBind2(14, 13, "evs.manage.viewEvsFormulaList.badge.active", "S\u1EED d\u1EE5ng") : \u0275\u0275pipeBind2(15, 16, "evs.manage.viewEvsFormulaList.badge.inactive", "Kh\xF4ng s\u1EED d\u1EE5ng"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r4.orderNo);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(20, 19, "evs.manage.viewEvsFormulaList.btn.edit", "S\u1EEDa"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(23, 22, "evs.manage.viewEvsFormulaList.btn.delete", "X\xF3a"));
  }
}
function EvsFormulaListComponent_ng_template_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r6 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r6, " ");
  }
}
function EvsFormulaListComponent_ng_container_75_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 58);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind2(3, 3, "evs.manage.viewEvsFormulaList.modal.auditInfo", "Th\xF4ng tin c\u1EADp nh\u1EADt"), ": ", ctx_r1.form.updatedBy, " \u2014 ", ctx_r1.form.updateDate, " ");
  }
}
function EvsFormulaListComponent_ng_container_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 45)(2, "div", 46)(3, "label", 47);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span", 48);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function EvsFormulaListComponent_ng_container_75_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.codeNo, $event) || (ctx_r1.form.codeNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 46)(10, "label", 47);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementStart(13, "span", 48);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function EvsFormulaListComponent_ng_container_75_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.codeName, $event) || (ctx_r1.form.codeName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 3)(17, "label", 47);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "textarea", 51);
    \u0275\u0275twoWayListener("ngModelChange", function EvsFormulaListComponent_ng_container_75_Template_textarea_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.formula, $event) || (ctx_r1.form.formula = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 3)(22, "label", 47);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "textarea", 52);
    \u0275\u0275twoWayListener("ngModelChange", function EvsFormulaListComponent_ng_container_75_Template_textarea_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.remark, $event) || (ctx_r1.form.remark = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 46)(27, "label", 47);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "nz-input-number", 53);
    \u0275\u0275twoWayListener("ngModelChange", function EvsFormulaListComponent_ng_container_75_Template_nz_input_number_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.orderNo, $event) || (ctx_r1.form.orderNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 46)(32, "label", 54);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "nz-switch", 55);
    \u0275\u0275twoWayListener("ngModelChange", function EvsFormulaListComponent_ng_container_75_Template_nz_switch_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.activity, $event) || (ctx_r1.form.activity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(36, "span", 56);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(39, EvsFormulaListComponent_ng_container_75_div_39_Template, 4, 6, "div", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 17, "evs.manage.viewEvsFormulaList.modal.code", "M\xE3"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.codeNo);
    \u0275\u0275property("readonly", !ctx_r1.isNew());
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(12, 20, "evs.manage.viewEvsFormulaList.modal.name", "T\xEAn"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.codeName);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 23, "evs.manage.viewEvsFormulaList.modal.formula", "C\xF4ng th\u1EE9c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.formula);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 26, "evs.manage.viewEvsFormulaList.modal.remark", "Ghi ch\xFA"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.remark);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 29, "evs.manage.viewEvsFormulaList.modal.orderNo", "Th\u1EE9 t\u1EF1"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.orderNo);
    \u0275\u0275property("nzMin", 0)("nzMax", 9999);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 32, "evs.manage.viewEvsFormulaList.modal.status", "Tr\u1EA1ng th\xE1i"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.activity);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(38, 35, "evs.manage.viewEvsFormulaList.modal.activeLabel", "S\u1EED d\u1EE5ng"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.form.updatedBy);
  }
}
function EvsFormulaListComponent_ng_container_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 59);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.deleteConfirmMessage);
  }
}
var I18N_KEYS = [
  "evs.manage.viewEvsFormulaList.search.code",
  "evs.manage.viewEvsFormulaList.search.name",
  "evs.manage.viewEvsFormulaList.search.status",
  "evs.manage.viewEvsFormulaList.search.allOption",
  "evs.manage.viewEvsFormulaList.search.active",
  "evs.manage.viewEvsFormulaList.search.inactive",
  "evs.manage.viewEvsFormulaList.btn.search",
  "evs.manage.viewEvsFormulaList.btn.clearFilter",
  "evs.manage.viewEvsFormulaList.btn.addNew",
  "evs.manage.viewEvsFormulaList.col.no",
  "evs.manage.viewEvsFormulaList.col.code",
  "evs.manage.viewEvsFormulaList.col.name",
  "evs.manage.viewEvsFormulaList.col.formula",
  "evs.manage.viewEvsFormulaList.col.remark",
  "evs.manage.viewEvsFormulaList.col.status",
  "evs.manage.viewEvsFormulaList.col.orderNo",
  "evs.manage.viewEvsFormulaList.col.action",
  "evs.manage.viewEvsFormulaList.modal.addTitle",
  "evs.manage.viewEvsFormulaList.modal.editTitle",
  "evs.manage.viewEvsFormulaList.modal.code",
  "evs.manage.viewEvsFormulaList.modal.name",
  "evs.manage.viewEvsFormulaList.modal.formula",
  "evs.manage.viewEvsFormulaList.modal.remark",
  "evs.manage.viewEvsFormulaList.modal.orderNo",
  "evs.manage.viewEvsFormulaList.modal.status",
  "evs.manage.viewEvsFormulaList.modal.activeLabel",
  "evs.manage.viewEvsFormulaList.modal.auditInfo",
  "evs.manage.viewEvsFormulaList.modal.deleteTitle",
  "evs.manage.viewEvsFormulaList.modal.deleteConfirm",
  "evs.manage.viewEvsFormulaList.badge.active",
  "evs.manage.viewEvsFormulaList.badge.inactive",
  "evs.manage.viewEvsFormulaList.msg.loadError",
  "evs.manage.viewEvsFormulaList.msg.enterCode",
  "evs.manage.viewEvsFormulaList.msg.enterName",
  "evs.manage.viewEvsFormulaList.msg.saveError",
  "evs.manage.viewEvsFormulaList.msg.deleteError",
  "evs.manage.viewEvsFormulaList.btn.edit",
  "evs.manage.viewEvsFormulaList.btn.delete",
  "common.close",
  "common.save",
  "common.cancel",
  "common.stt",
  "common.action",
  "common.noData",
  "common.totalRows"
];
var PAGE_SIZE_OPTIONS = [25, 50, 100, 200];
var PREVIEW_LEN = 80;
var EMPTY_FORM = {
  seq: null,
  codeNo: "",
  codeName: "",
  formula: "",
  remark: "",
  orderNo: null,
  activity: true,
  updatedBy: null,
  updateDate: null
};
var EvsFormulaListComponent = class _EvsFormulaListComponent {
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
  searchCodeNo = "";
  searchCodeName = "";
  searchActivity = null;
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
    () => this.isNew() ? this.i18n.t("evs.manage.viewEvsFormulaList.modal.addTitle", "Th\xEAm m\u1EDBi c\xF4ng th\u1EE9c") : this.i18n.t("evs.manage.viewEvsFormulaList.modal.editTitle", "Ch\u1EC9nh s\u1EEDa c\xF4ng th\u1EE9c"),
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
    this.api.getList(this.searchCodeNo.trim(), this.searchCodeName.trim(), this.searchActivity ?? "").subscribe({
      next: (rows) => {
        this.rows.set(rows ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("evs.manage.viewEvsFormulaList.msg.loadError", "L\u1ED7i khi t\u1EA3i th\xF4ng tin c\xF4ng th\u1EE9c."));
        this.rows.set([]);
        this.loading.set(false);
      }
    });
  }
  clearSearch() {
    this.searchCodeNo = "";
    this.searchCodeName = "";
    this.searchActivity = null;
    this.search();
  }
  activityTagColor(activity) {
    return activity === "1" ? "success" : "default";
  }
  preview(text, maxLen = PREVIEW_LEN) {
    if (!text)
      return "";
    return text.length > maxLen ? text.substring(0, maxLen) + "\u2026" : text;
  }
  // ==================== Modal Thêm mới / Cập nhật ====================
  openAddModal() {
    this.isNew.set(true);
    this.form = __spreadValues({}, EMPTY_FORM);
    this.modalVisible.set(true);
  }
  openEditModal(row) {
    this.api.getOne(row.seq).subscribe({
      next: (r) => {
        if (!r)
          return;
        this.isNew.set(false);
        this.form = {
          seq: r.seq,
          codeNo: r.codeNo || "",
          codeName: r.codeName || "",
          formula: r.formula || "",
          remark: r.remark || "",
          orderNo: r.orderNo != null && r.orderNo !== "" ? Number(r.orderNo) : null,
          activity: r.activity === "1",
          updatedBy: r.updatedBy || null,
          updateDate: r.updateDate || null
        };
        this.modalVisible.set(true);
      },
      error: () => this.message.error(this.i18n.t("evs.manage.viewEvsFormulaList.msg.loadError", "L\u1ED7i khi t\u1EA3i th\xF4ng tin c\xF4ng th\u1EE9c."))
    });
  }
  closeModal() {
    this.modalVisible.set(false);
  }
  saveForm() {
    const codeNo = this.form.codeNo.trim();
    if (!codeNo) {
      this.message.warning(this.i18n.t("evs.manage.viewEvsFormulaList.msg.enterCode", "Vui l\xF2ng nh\u1EADp M\xE3."));
      return;
    }
    const codeName = this.form.codeName.trim();
    if (!codeName) {
      this.message.warning(this.i18n.t("evs.manage.viewEvsFormulaList.msg.enterName", "Vui l\xF2ng nh\u1EADp T\xEAn."));
      return;
    }
    const payload = {
      seq: this.form.seq,
      codeNo,
      codeName,
      formula: this.form.formula,
      remark: this.form.remark,
      orderNo: this.form.orderNo != null ? String(this.form.orderNo) : null,
      activity: this.form.activity ? "1" : "0"
    };
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: () => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.search();
      },
      error: () => {
        this.saving.set(false);
        this.message.error(this.i18n.t("evs.manage.viewEvsFormulaList.msg.saveError", "L\u1ED7i khi l\u01B0u d\u1EEF li\u1EC7u. Vui l\xF2ng th\u1EED l\u1EA1i."));
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
  get deleteConfirmMessage() {
    const template = this.i18n.t("evs.manage.viewEvsFormulaList.modal.deleteConfirm", 'B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a c\xF4ng th\u1EE9c "{0}"?');
    return template.replace("{0}", this.deleteTarget?.codeName ?? "");
  }
  confirmDelete() {
    if (!this.deleteTarget)
      return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.seq).subscribe({
      next: () => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.search();
      },
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t("evs.manage.viewEvsFormulaList.msg.deleteError", "L\u1ED7i khi x\xF3a d\u1EEF li\u1EC7u. Vui l\xF2ng th\u1EED l\u1EA1i."));
      }
    });
  }
  static \u0275fac = function EvsFormulaListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EvsFormulaListComponent)(\u0275\u0275directiveInject(EvsFormulaListService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EvsFormulaListComponent, selectors: [["app-evs-formula-list"]], decls: 81, vars: 107, consts: [["eflTable", "nzTable"], ["eflTotalTpl", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["nz-input", "", "name", "eflSearchCodeNo", "maxlength", "20", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "eflSearchCodeName", "maxlength", "200", 3, "ngModelChange", "ngModel"], [1, "col-md-2"], ["name", "eflSearchActivity", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["nzValue", "1", 3, "nzLabel"], ["nzValue", "0", 3, "nzLabel"], [1, "col-md-4", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "120px", 1, "text-center"], ["nzWidth", "200px"], ["nzWidth", "320px"], ["nzWidth", "220px"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "80px", 1, "text-center"], ["nzWidth", "90px", 1, "text-center"], [4, "ngIf"], ["class", "efl-row-clickable", 3, "click", 4, "ngFor", "ngForOf"], ["nzWidth", "700px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], ["nzOkDanger", "", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "8", 1, "text-center", "text-muted"], [1, "efl-row-clickable", 3, "click"], [1, "text-center"], [1, "efl-mono"], [3, "nzColor"], ["nz-button", "", "nzType", "text", "nzSize", "small", 3, "click", "title"], [1, "bx", "bx-edit", "text-warning"], [1, "bx", "bx-trash", "text-danger"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label", "fw-semibold"], [1, "text-danger"], ["nz-input", "", "name", "eflFormCodeNo", "maxlength", "20", 3, "ngModelChange", "ngModel", "readonly"], ["nz-input", "", "name", "eflFormCodeName", "maxlength", "200", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "eflFormFormula", "rows", "5", "maxlength", "4000", 1, "efl-mono", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "eflFormRemark", "rows", "3", "maxlength", "4000", 3, "ngModelChange", "ngModel"], ["name", "eflFormOrderNo", 1, "w-100", 3, "ngModelChange", "ngModel", "nzMin", "nzMax"], [1, "form-label", "fw-semibold", "d-block"], ["name", "eflFormActivity", 3, "ngModelChange", "ngModel"], [1, "ms-2", "small", "text-muted"], ["class", "col-12", 4, "ngIf"], [1, "small", "text-muted"], [1, "mb-0"]], template: function EvsFormulaListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "nz-card", 4)(3, "form", 5);
      \u0275\u0275listener("ngSubmit", function EvsFormulaListComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 6)(5, "label", 7);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function EvsFormulaListComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchCodeNo, $event) || (ctx.searchCodeNo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 6)(10, "label", 7);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function EvsFormulaListComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchCodeName, $event) || (ctx.searchCodeName = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 10)(15, "label", 7);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "nz-select", 11);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function EvsFormulaListComponent_Template_nz_select_ngModelChange_18_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchActivity, $event) || (ctx.searchActivity = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275element(20, "nz-option", 12);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275element(22, "nz-option", 13);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 14)(25, "button", 15);
      \u0275\u0275element(26, "i", 16);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "button", 17);
      \u0275\u0275listener("click", function EvsFormulaListComponent_Template_button_click_29_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(30, "i", 18);
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "button", 19);
      \u0275\u0275listener("click", function EvsFormulaListComponent_Template_button_click_33_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(34, "i", 20);
      \u0275\u0275text(35);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(37, "nz-card");
      \u0275\u0275template(38, EvsFormulaListComponent_nz_alert_38_Template, 1, 1, "nz-alert", 21);
      \u0275\u0275elementStart(39, "nz-table", 22, 0)(41, "thead")(42, "tr")(43, "th", 23);
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "th", 24);
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "th", 25);
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
      \u0275\u0275elementStart(64, "th", 30);
      \u0275\u0275text(65);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(67, "tbody");
      \u0275\u0275template(68, EvsFormulaListComponent_tr_68_Template, 4, 4, "tr", 31)(69, EvsFormulaListComponent_tr_69_Template, 25, 25, "tr", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275template(70, EvsFormulaListComponent_ng_template_70_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(72, "nz-modal", 33);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275pipe(74, "translate");
      \u0275\u0275listener("nzOnCancel", function EvsFormulaListComponent_Template_nz_modal_nzOnCancel_72_listener() {
        return ctx.closeModal();
      })("nzOnOk", function EvsFormulaListComponent_Template_nz_modal_nzOnOk_72_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(75, EvsFormulaListComponent_ng_container_75_Template, 40, 38, "ng-container", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "nz-modal", 35);
      \u0275\u0275pipe(77, "translate");
      \u0275\u0275pipe(78, "translate");
      \u0275\u0275pipe(79, "translate");
      \u0275\u0275listener("nzOnCancel", function EvsFormulaListComponent_Template_nz_modal_nzOnCancel_76_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function EvsFormulaListComponent_Template_nz_modal_nzOnOk_76_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(80, EvsFormulaListComponent_ng_container_80_Template, 3, 1, "ng-container", 34);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const eflTable_r8 = \u0275\u0275reference(40);
      const eflTotalTpl_r9 = \u0275\u0275reference(71);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 40, "evs.manage.viewEvsFormulaList.search.code", "M\xE3"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchCodeNo);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 43, "evs.manage.viewEvsFormulaList.search.name", "T\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchCodeName);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 46, "evs.manage.viewEvsFormulaList.search.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchActivity);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(19, 49, "evs.manage.viewEvsFormulaList.search.allOption", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(21, 52, "evs.manage.viewEvsFormulaList.search.active", "S\u1EED d\u1EE5ng"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(23, 55, "evs.manage.viewEvsFormulaList.search.inactive", "Kh\xF4ng s\u1EED d\u1EE5ng"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(28, 58, "evs.manage.viewEvsFormulaList.btn.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(32, 61, "evs.manage.viewEvsFormulaList.btn.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(36, 64, "evs.manage.viewEvsFormulaList.btn.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", eflTotalTpl_r9)("nzScroll", \u0275\u0275pureFunction0(106, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 67, "evs.manage.viewEvsFormulaList.col.no", "No."));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 70, "evs.manage.viewEvsFormulaList.col.code", "M\xE3"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 73, "evs.manage.viewEvsFormulaList.col.name", "T\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 76, "evs.manage.viewEvsFormulaList.col.formula", "C\xF4ng th\u1EE9c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 79, "evs.manage.viewEvsFormulaList.col.remark", "Ghi ch\xFA"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(60, 82, "evs.manage.viewEvsFormulaList.col.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(63, 85, "evs.manage.viewEvsFormulaList.col.orderNo", "Th\u1EE9 t\u1EF1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(66, 88, "evs.manage.viewEvsFormulaList.col.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", eflTable_r8.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", ctx.modalTitle())("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(73, 91, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(74, 94, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(4);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(77, 97, "evs.manage.viewEvsFormulaList.modal.deleteTitle", "X\xE1c nh\u1EADn x\xF3a"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(78, 100, "evs.manage.viewEvsFormulaList.btn.delete", "X\xF3a"))("nzCancelText", \u0275\u0275pipeBind2(79, 103, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzInputNumberModule, NzInputNumberComponent, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzSwitchModule, NzSwitchComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, NzTagModule, NzTagComponent, TranslatePipe], styles: ["\n  .efl-row-clickable {\n  cursor: pointer;\n}\n.efl-mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 0.85rem;\n}\n/*# sourceMappingURL=evs-formula-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EvsFormulaListComponent, [{
    type: Component,
    args: [{ selector: "app-evs-formula-list", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzInputNumberModule,
      NzSelectModule,
      NzButtonModule,
      NzSwitchModule,
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
          <label class="form-label">{{ 'evs.manage.viewEvsFormulaList.search.code' | translate:'M\xE3' }}</label>
          <input nz-input [(ngModel)]="searchCodeNo" name="eflSearchCodeNo" maxlength="20">
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'evs.manage.viewEvsFormulaList.search.name' | translate:'T\xEAn' }}</label>
          <input nz-input [(ngModel)]="searchCodeName" name="eflSearchCodeName" maxlength="200">
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'evs.manage.viewEvsFormulaList.search.status' | translate:'Tr\u1EA1ng th\xE1i' }}</label>
          <nz-select class="w-100" [(ngModel)]="searchActivity" name="eflSearchActivity" nzAllowClear
                     [nzPlaceHolder]="'evs.manage.viewEvsFormulaList.search.allOption' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option nzValue="1" [nzLabel]="'evs.manage.viewEvsFormulaList.search.active' | translate:'S\u1EED d\u1EE5ng'"></nz-option>
            <nz-option nzValue="0" [nzLabel]="'evs.manage.viewEvsFormulaList.search.inactive' | translate:'Kh\xF4ng s\u1EED d\u1EE5ng'"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-4 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'evs.manage.viewEvsFormulaList.btn.search' | translate:'Tra c\u1EE9u' }}
          </button>
          <button nz-button type="button" (click)="clearSearch()">
            <i class="bx bx-x"></i> {{ 'evs.manage.viewEvsFormulaList.btn.clearFilter' | translate:'X\xF3a l\u1ECDc' }}
          </button>
          <button nz-button nzType="primary" type="button" (click)="openAddModal()">
            <i class="bx bx-plus"></i> {{ 'evs.manage.viewEvsFormulaList.btn.addNew' | translate:'Th\xEAm m\u1EDBi' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="eflTotalTpl"
                [nzScroll]="{ x: '1200px' }" #eflTable="nzTable">
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'evs.manage.viewEvsFormulaList.col.no' | translate:'No.' }}</th>
            <th class="text-center" nzWidth="120px">{{ 'evs.manage.viewEvsFormulaList.col.code' | translate:'M\xE3' }}</th>
            <th nzWidth="200px">{{ 'evs.manage.viewEvsFormulaList.col.name' | translate:'T\xEAn' }}</th>
            <th nzWidth="320px">{{ 'evs.manage.viewEvsFormulaList.col.formula' | translate:'C\xF4ng th\u1EE9c' }}</th>
            <th nzWidth="220px">{{ 'evs.manage.viewEvsFormulaList.col.remark' | translate:'Ghi ch\xFA' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'evs.manage.viewEvsFormulaList.col.status' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
            <th class="text-center" nzWidth="80px">{{ 'evs.manage.viewEvsFormulaList.col.orderNo' | translate:'Th\u1EE9 t\u1EF1' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'evs.manage.viewEvsFormulaList.col.action' | translate:'Thao t\xE1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="8" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of eflTable.data; let i = index" class="efl-row-clickable" (click)="openEditModal(row)">
            <td class="text-center">{{ i + 1 }}</td>
            <td class="text-center">{{ row.codeNo }}</td>
            <td [attr.title]="row.codeName || null">{{ row.codeName }}</td>
            <td class="efl-mono" [attr.title]="row.formula || null">{{ preview(row.formula) }}</td>
            <td [attr.title]="row.remark || null">{{ preview(row.remark, 50) }}</td>
            <td class="text-center">
              <nz-tag [nzColor]="activityTagColor(row.activity)">
                {{ row.activity === '1' ? ('evs.manage.viewEvsFormulaList.badge.active' | translate:'S\u1EED d\u1EE5ng') : ('evs.manage.viewEvsFormulaList.badge.inactive' | translate:'Kh\xF4ng s\u1EED d\u1EE5ng') }}
              </nz-tag>
            </td>
            <td class="text-center">{{ row.orderNo }}</td>
            <td class="text-center">
              <button nz-button nzType="text" nzSize="small" [title]="'evs.manage.viewEvsFormulaList.btn.edit' | translate:'S\u1EEDa'"
                      (click)="$event.stopPropagation(); openEditModal(row)">
                <i class="bx bx-edit text-warning"></i>
              </button>
              <button nz-button nzType="text" nzSize="small" [title]="'evs.manage.viewEvsFormulaList.btn.delete' | translate:'X\xF3a'"
                      (click)="$event.stopPropagation(); openDeleteConfirm(row)">
                <i class="bx bx-trash text-danger"></i>
              </button>
            </td>
          </tr>
        </tbody>
        <ng-template #eflTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal Th\xEAm m\u1EDBi / C\u1EADp nh\u1EADt -->
<nz-modal [nzVisible]="modalVisible()" [nzTitle]="modalTitle()" nzWidth="700px"
          (nzOnCancel)="closeModal()" (nzOnOk)="saveForm()" [nzOkLoading]="saving()"
          [nzOkText]="'common.save' | translate:'L\u01B0u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <div class="row g-3">
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'evs.manage.viewEvsFormulaList.modal.code' | translate:'M\xE3' }} <span class="text-danger">*</span></label>
        <input nz-input [(ngModel)]="form.codeNo" name="eflFormCodeNo" maxlength="20" [readonly]="!isNew()">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'evs.manage.viewEvsFormulaList.modal.name' | translate:'T\xEAn' }} <span class="text-danger">*</span></label>
        <input nz-input [(ngModel)]="form.codeName" name="eflFormCodeName" maxlength="200">
      </div>
      <div class="col-12">
        <label class="form-label fw-semibold">{{ 'evs.manage.viewEvsFormulaList.modal.formula' | translate:'C\xF4ng th\u1EE9c' }}</label>
        <textarea nz-input class="efl-mono" [(ngModel)]="form.formula" name="eflFormFormula" rows="5" maxlength="4000"></textarea>
      </div>
      <div class="col-12">
        <label class="form-label fw-semibold">{{ 'evs.manage.viewEvsFormulaList.modal.remark' | translate:'Ghi ch\xFA' }}</label>
        <textarea nz-input [(ngModel)]="form.remark" name="eflFormRemark" rows="3" maxlength="4000"></textarea>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'evs.manage.viewEvsFormulaList.modal.orderNo' | translate:'Th\u1EE9 t\u1EF1' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.orderNo" name="eflFormOrderNo" [nzMin]="0" [nzMax]="9999"></nz-input-number>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold d-block">{{ 'evs.manage.viewEvsFormulaList.modal.status' | translate:'Tr\u1EA1ng th\xE1i' }}</label>
        <nz-switch [(ngModel)]="form.activity" name="eflFormActivity"></nz-switch>
        <span class="ms-2 small text-muted">{{ 'evs.manage.viewEvsFormulaList.modal.activeLabel' | translate:'S\u1EED d\u1EE5ng' }}</span>
      </div>
      <div class="col-12" *ngIf="form.updatedBy">
        <span class="small text-muted">
          {{ 'evs.manage.viewEvsFormulaList.modal.auditInfo' | translate:'Th\xF4ng tin c\u1EADp nh\u1EADt' }}: {{ form.updatedBy }} \u2014 {{ form.updateDate }}
        </span>
      </div>
    </div>
  </ng-container>
</nz-modal>

<!-- Modal x\xE1c nh\u1EADn x\xF3a -->
<nz-modal [nzVisible]="deleteVisible()" [nzTitle]="'evs.manage.viewEvsFormulaList.modal.deleteTitle' | translate:'X\xE1c nh\u1EADn x\xF3a'"
          (nzOnCancel)="closeDeleteConfirm()" (nzOnOk)="confirmDelete()" [nzOkLoading]="deleting()"
          [nzOkText]="'evs.manage.viewEvsFormulaList.btn.delete' | translate:'X\xF3a'" nzOkDanger
          [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'">
  <ng-container *nzModalContent>
    <p class="mb-0">{{ deleteConfirmMessage }}</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/evs-formula-list/evs-formula-list.component.css */\n::ng-deep .efl-row-clickable {\n  cursor: pointer;\n}\n.efl-mono {\n  font-family: monospace;\n  font-size: 0.85rem;\n}\n/*# sourceMappingURL=evs-formula-list.component.css.map */\n"] }]
  }], () => [{ type: EvsFormulaListService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EvsFormulaListComponent, { className: "EvsFormulaListComponent", filePath: "src/app/evs-formula-list/evs-formula-list.component.ts", lineNumber: 104 });
})();
export {
  EvsFormulaListComponent
};
//# debugId=3b065fee-daae-5f8b-be2c-925ffad224e8
//# sourceMappingURL=chunk-M3BOE3QQ.js.map
