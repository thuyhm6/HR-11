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

// src/app/view-summary-item/view-summary-item.service.ts
var API_BASE = "/ar/attendanceSettings/api/arStaItem";
var ViewSummaryItemService = class _ViewSummaryItemService {
  constructor(http) {
    this.http = http;
  }
  http;
  search(searchText) {
    let params = new HttpParams();
    if (searchText)
      params = params.set("searchText", searchText);
    return this.http.get(API_BASE, { params, withCredentials: true });
  }
  getById(itemNo) {
    return this.http.get(`${API_BASE}/${itemNo}`, { withCredentials: true });
  }
  save(payload) {
    return this.http.post(`${API_BASE}/save`, payload, { withCredentials: true });
  }
  delete(itemNo) {
    return this.http.delete(`${API_BASE}/delete/${itemNo}`, { withCredentials: true });
  }
  static \u0275fac = function ViewSummaryItemService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewSummaryItemService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewSummaryItemService, factory: _ViewSummaryItemService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewSummaryItemService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-summary-item/view-summary-item.component.ts
var _c0 = () => ({ x: "1300px", y: "calc(100vh - 420px)" });
function ViewSummaryItemComponent_nz_alert_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 33);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ViewSummaryItemComponent_tr_65_Template(rf, ctx) {
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
function ViewSummaryItemComponent_tr_66_Template(rf, ctx) {
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
    \u0275\u0275elementStart(11, "td", 35);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 35);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 35);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 35)(20, "nz-tag", 36);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td", 35)(25, "button", 37);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275listener("click", function ViewSummaryItemComponent_tr_66_Template_button_click_25_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditModal(row_r4));
    });
    \u0275\u0275element(27, "i", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 37);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275listener("click", function ViewSummaryItemComponent_tr_66_Template_button_click_28_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDeleteConfirm(row_r4));
    });
    \u0275\u0275element(30, "i", 39);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r5 + 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.itemNo || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.itemNo);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.nameVi || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.nameVi);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.unit || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.unit);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.staItemId || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.staItemId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.orderno);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.showYn === "Y" ? \u0275\u0275pipeBind2(15, 16, "common.yes", "C\xF3") : \u0275\u0275pipeBind2(16, 19, "common.no", "Kh\xF4ng"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r4.showOrder);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColor", row_r4.activity === 1 ? "success" : "default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.activity === 1 ? \u0275\u0275pipeBind2(22, 22, "common.active", "Ho\u1EA1t \u0111\u1ED9ng") : \u0275\u0275pipeBind2(23, 25, "common.inactive", "Ng\u1EEBng"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(26, 28, "common.edit", "S\u1EEDa"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(29, 31, "common.delete", "X\xF3a"));
  }
}
function ViewSummaryItemComponent_ng_template_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r6 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r6, " ");
  }
}
function ViewSummaryItemComponent_ng_container_72_Template(rf, ctx) {
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
    \u0275\u0275twoWayListener("ngModelChange", function ViewSummaryItemComponent_ng_container_72_Template_input_ngModelChange_11_listener($event) {
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
    \u0275\u0275twoWayListener("ngModelChange", function ViewSummaryItemComponent_ng_container_72_Template_input_ngModelChange_16_listener($event) {
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
    \u0275\u0275twoWayListener("ngModelChange", function ViewSummaryItemComponent_ng_container_72_Template_input_ngModelChange_21_listener($event) {
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
    \u0275\u0275twoWayListener("ngModelChange", function ViewSummaryItemComponent_ng_container_72_Template_input_ngModelChange_26_listener($event) {
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
    \u0275\u0275elementStart(35, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function ViewSummaryItemComponent_ng_container_72_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.unit, $event) || (ctx_r1.form.unit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 42)(37, "label", 43);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function ViewSummaryItemComponent_ng_container_72_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.staItemId, $event) || (ctx_r1.form.staItemId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 42)(42, "label", 43);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "nz-input-number", 52);
    \u0275\u0275twoWayListener("ngModelChange", function ViewSummaryItemComponent_ng_container_72_Template_nz_input_number_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.orderno, $event) || (ctx_r1.form.orderno = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 42)(47, "label", 53);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "nz-select", 54);
    \u0275\u0275twoWayListener("ngModelChange", function ViewSummaryItemComponent_ng_container_72_Template_nz_select_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.showYn, $event) || (ctx_r1.form.showYn = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(51, "nz-option", 55);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275element(53, "nz-option", 56);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 42)(56, "label", 43);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "nz-input-number", 57);
    \u0275\u0275twoWayListener("ngModelChange", function ViewSummaryItemComponent_ng_container_72_Template_nz_input_number_ngModelChange_59_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.showOrder, $event) || (ctx_r1.form.showOrder = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 42)(61, "label", 53);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "nz-select", 58);
    \u0275\u0275twoWayListener("ngModelChange", function ViewSummaryItemComponent_ng_container_72_Template_nz_select_ngModelChange_64_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.activity, $event) || (ctx_r1.form.activity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(65, "nz-option", 59);
    \u0275\u0275pipe(66, "translate");
    \u0275\u0275element(67, "nz-option", 59);
    \u0275\u0275pipe(68, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 28, "common.multilingualInfo", "Th\xF4ng tin \u0111a ng\xF4n ng\u1EEF"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(8, 31, "common.nameVi", "T\xEAn Ti\u1EBFng Vi\u1EC7t"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nameVi);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 34, "common.nameEn", "T\xEAn Ti\u1EBFng Anh"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nameEn);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 37, "common.nameZh", "T\xEAn Ti\u1EBFng Trung"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nameZh);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 40, "common.nameKo", "T\xEAn Ti\u1EBFng H\xE0n"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nameKo);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 43, "staItem.itemProps", "Thu\u1ED9c T\xEDnh H\u1EA1ng M\u1EE5c"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 46, "staItem.unit", "\u0110\u01A1n v\u1ECB (ng\xE0y, gi\u1EDD, ph\xFAt)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.unit);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 49, "staItem.staItemId", "ID H\u1EA1ng m\u1EE5c (CODE)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.staItemId);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 52, "common.sortOrder", "S\u1EAFp x\u1EBFp"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.orderno);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 55, "staItem.showYn", "C\xF3 hi\u1EC3n th\u1ECB (Y/N)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.showYn);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(52, 58, "common.yes", "C\xF3"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(54, 61, "common.no", "Kh\xF4ng"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(58, 64, "staItem.showOrder", "Th\u1EE9 t\u1EF1 hi\u1EC3n th\u1ECB"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.showOrder);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(63, 67, "common.status", "Tr\u1EA1ng th\xE1i"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.activity);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzValue", 1)("nzLabel", \u0275\u0275pipeBind2(66, 70, "common.active", "Ho\u1EA1t \u0111\u1ED9ng"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzValue", 0)("nzLabel", \u0275\u0275pipeBind2(68, 73, "common.inactive", "Ng\u1EEBng"));
  }
}
function ViewSummaryItemComponent_ng_container_77_Template(rf, ctx) {
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "staItem.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a h\u1EA1ng m\u1EE5c n\xE0y?"));
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
  "common.yes",
  "common.no",
  "staItem.itemCode",
  "staItem.itemName",
  "staItem.unit",
  "staItem.itemProps",
  "staItem.modalAddTitle",
  "staItem.modalEditTitle",
  "staItem.confirmDelete",
  "staItem.saveSuccess",
  "staItem.saveFail",
  "staItem.deleteSuccess",
  "staItem.deleteFail",
  "staItem.loadFail",
  "staItem.staItemId",
  "staItem.showYn",
  "staItem.showOrder",
  "staItem.searchPlaceholder",
  "arItem.msg.pleaseEnterNameVi",
  "essDept.exportExcel"
];
var PAGE_SIZE_OPTIONS = [25, 50, 100, 200];
var EMPTY_FORM = {
  itemNo: null,
  nameVi: "",
  nameEn: "",
  nameZh: "",
  nameKo: "",
  unit: "",
  staItemId: "",
  orderno: null,
  showYn: "Y",
  showOrder: null,
  activity: 1
};
var ViewSummaryItemComponent = class _ViewSummaryItemComponent {
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
  searchText = "";
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
    () => this.isNew() ? this.i18n.t("staItem.modalAddTitle", "Th\xEAm m\u1EDBi H\u1EA1ng m\u1EE5c t\u1ED5ng h\u1EE3p") : `${this.i18n.t("staItem.modalEditTitle", "C\u1EADp nh\u1EADt H\u1EA1ng m\u1EE5c t\u1ED5ng h\u1EE3p")}: ${this.form.itemNo ?? ""}`,
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
    this.api.search(this.searchText).subscribe({
      next: (rows) => {
        this.rows.set(rows ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("staItem.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.rows.set([]);
        this.loading.set(false);
      }
    });
  }
  clearSearch() {
    this.searchText = "";
    this.search();
  }
  // ==================== Modal Thêm mới / Cập nhật ====================
  openAddModal() {
    this.isNew.set(true);
    this.form = __spreadValues({}, EMPTY_FORM);
    this.modalVisible.set(true);
  }
  openEditModal(row) {
    this.api.getById(row.itemNo).subscribe({
      next: (data) => {
        this.isNew.set(false);
        this.form = {
          itemNo: data.itemNo,
          nameVi: data.nameVi || "",
          nameEn: data.nameEn || "",
          nameZh: data.nameZh || "",
          nameKo: data.nameKo || "",
          unit: data.unit || "",
          staItemId: data.staItemId || "",
          orderno: data.orderno,
          showYn: data.showYn || "Y",
          showOrder: data.showOrder,
          activity: data.activity ?? 1
        };
        this.modalVisible.set(true);
      },
      error: () => this.message.error(this.i18n.t("staItem.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"))
    });
  }
  closeModal() {
    this.modalVisible.set(false);
  }
  saveForm() {
    if (!this.form.nameVi) {
      this.message.warning(this.i18n.t("arItem.msg.pleaseEnterNameVi", "Vui l\xF2ng nh\u1EADp T\xEAn ti\u1EBFng Vi\u1EC7t"));
      return;
    }
    const payload = {
      itemNo: this.form.itemNo,
      nameVi: this.form.nameVi,
      nameEn: this.form.nameEn,
      nameZh: this.form.nameZh,
      nameKo: this.form.nameKo,
      unit: this.form.unit,
      staItemId: this.form.staItemId,
      orderno: this.form.orderno,
      showYn: this.form.showYn,
      showOrder: this.form.showOrder,
      activity: this.form.activity
    };
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: () => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.message.success(this.i18n.t("staItem.saveSuccess", "L\u01B0u th\xE0nh c\xF4ng!"));
        this.search();
      },
      error: () => {
        this.saving.set(false);
        this.message.error(this.i18n.t("staItem.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!"));
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
    return this.deleteTarget ? `${this.deleteTarget.itemNo} - ${this.deleteTarget.nameVi ?? ""}` : "";
  }
  confirmDelete() {
    if (!this.deleteTarget?.itemNo)
      return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.itemNo).subscribe({
      next: () => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.message.success(this.i18n.t("staItem.deleteSuccess", "X\xF3a th\xE0nh c\xF4ng!"));
        this.search();
      },
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t("staItem.deleteFail", "X\xF3a th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  // ==================== Xuất Excel ====================
  /** Xuất excel client-side (bản gốc chỉ có nút Buttons của DataTables) - dùng thư viện xlsx (SheetJS)
   *  để tạo đúng file .xlsx nhị phân (xem CLAUDE.md). */
  exportExcel() {
    const headers = [
      this.i18n.t("common.stt", "STT"),
      this.i18n.t("staItem.itemCode", "M\xE3 h\u1EA1ng m\u1EE5c"),
      this.i18n.t("staItem.itemName", "T\xEAn h\u1EA1ng m\u1EE5c"),
      this.i18n.t("staItem.unit", "\u0110\u01A1n v\u1ECB"),
      this.i18n.t("staItem.staItemId", "ID H\u1EA1ng m\u1EE5c"),
      this.i18n.t("common.sortOrder", "S\u1EAFp x\u1EBFp"),
      this.i18n.t("staItem.showYn", "Hi\u1EC3n th\u1ECB"),
      this.i18n.t("staItem.showOrder", "Th\u1EE9 t\u1EF1 hi\u1EC3n th\u1ECB"),
      this.i18n.t("common.status", "Tr\u1EA1ng th\xE1i")
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      r.itemNo,
      r.nameVi,
      r.unit,
      r.staItemId,
      r.orderno,
      r.showYn === "Y" ? this.i18n.t("common.yes", "C\xF3") : this.i18n.t("common.no", "Kh\xF4ng"),
      r.showOrder,
      r.activity === 1 ? this.i18n.t("common.active", "Ho\u1EA1t \u0111\u1ED9ng") : this.i18n.t("common.inactive", "Ng\u1EEBng")
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "DanhSach");
    writeFileSync(workbook, "summary_item_list.xlsx");
  }
  static \u0275fac = function ViewSummaryItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewSummaryItemComponent)(\u0275\u0275directiveInject(ViewSummaryItemService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewSummaryItemComponent, selectors: [["app-view-summary-item"]], decls: 78, vars: 101, consts: [["vsiTable", ""], ["vsiTotalTpl", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-4"], [1, "form-label"], ["nz-input", "", "name", "vsiSearchText", 3, "ngModelChange", "ngModel", "placeholder"], [1, "col-md-8", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], [1, "col-12", "d-flex", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzType", "default", "type", "button", 1, "vsi-btn-export", 3, "click"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "130px"], ["nzWidth", "180px"], ["nzWidth", "100px"], ["nzWidth", "90px", 1, "text-center"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "120px", 1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["nzWidth", "800px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "10", 1, "text-center", "text-muted"], [1, "text-center"], [3, "nzColor"], ["nz-button", "", "nzType", "text", "nzSize", "small", 3, "click", "title"], [1, "bx", "bx-edit", "text-warning"], [1, "bx", "bx-trash", "text-danger"], [1, "mb-3", "text-primary", "border-bottom", "pb-2"], [1, "row", "g-3", "mb-4"], [1, "col-md-6"], [1, "form-label", "fw-semibold"], [1, "text-danger"], ["nz-input", "", "name", "vsiFormNameVi", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vsiFormNameEn", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vsiFormNameZh", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vsiFormNameKo", 3, "ngModelChange", "ngModel"], [1, "row", "g-3"], ["nz-input", "", "name", "vsiFormUnit", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vsiFormStaItemId", 3, "ngModelChange", "ngModel"], ["name", "vsiFormOrderno", 1, "w-100", 3, "ngModelChange", "ngModel"], [1, "form-label", "fw-semibold", "d-block"], ["name", "vsiFormShowYn", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nzValue", "Y", 3, "nzLabel"], ["nzValue", "N", 3, "nzLabel"], ["name", "vsiFormShowOrder", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vsiFormActivity", 1, "w-100", 3, "ngModelChange", "ngModel"], [3, "nzValue", "nzLabel"], [1, "mb-1"], [1, "fw-bold", "mb-0"]], template: function ViewSummaryItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "nz-card", 4)(3, "form", 5);
      \u0275\u0275listener("ngSubmit", function ViewSummaryItemComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 6)(5, "label", 7);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewSummaryItemComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
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
      \u0275\u0275listener("click", function ViewSummaryItemComponent_Template_button_click_15_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(16, "i", 13);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 14)(20, "button", 15);
      \u0275\u0275listener("click", function ViewSummaryItemComponent_Template_button_click_20_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(21, "i", 16);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 17);
      \u0275\u0275listener("click", function ViewSummaryItemComponent_Template_button_click_24_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(25, "i", 18);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(28, "nz-card");
      \u0275\u0275template(29, ViewSummaryItemComponent_nz_alert_29_Template, 1, 1, "nz-alert", 19);
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
      \u0275\u0275elementStart(43, "th", 24);
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "th", 22);
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
      \u0275\u0275elementStart(58, "th", 27);
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "th", 25);
      \u0275\u0275text(62);
      \u0275\u0275pipe(63, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "tbody");
      \u0275\u0275template(65, ViewSummaryItemComponent_tr_65_Template, 4, 4, "tr", 28)(66, ViewSummaryItemComponent_tr_66_Template, 31, 34, "tr", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275template(67, ViewSummaryItemComponent_ng_template_67_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(69, "nz-modal", 30);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275pipe(71, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewSummaryItemComponent_Template_nz_modal_nzOnCancel_69_listener() {
        return ctx.closeModal();
      })("nzOnOk", function ViewSummaryItemComponent_Template_nz_modal_nzOnOk_69_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(72, ViewSummaryItemComponent_ng_container_72_Template, 69, 76, "ng-container", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "nz-modal", 32);
      \u0275\u0275pipe(74, "translate");
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275pipe(76, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewSummaryItemComponent_Template_nz_modal_nzOnCancel_73_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function ViewSummaryItemComponent_Template_nz_modal_nzOnOk_73_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(77, ViewSummaryItemComponent_ng_container_77_Template, 6, 5, "ng-container", 31);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const vsiTable_r8 = \u0275\u0275reference(31);
      const vsiTotalTpl_r9 = \u0275\u0275reference(68);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 37, "staItem.itemCode", "H\u1EA1ng m\u1EE5c"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 40, "staItem.searchPlaceholder", "Nh\u1EADp m\xE3 / t\xEAn h\u1EA1ng m\u1EE5c t\u1ED5ng h\u1EE3p"));
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 43, "common.search", "T\xECm ki\u1EBFm"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(18, 46, "common.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(23, 49, "common.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(27, 52, "essDept.exportExcel", "Xu\u1EA5t excel"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", vsiTotalTpl_r9)("nzScroll", \u0275\u0275pureFunction0(100, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 55, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 58, "staItem.itemCode", "M\xE3 h\u1EA1ng m\u1EE5c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 61, "staItem.itemName", "T\xEAn h\u1EA1ng m\u1EE5c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 64, "staItem.unit", "\u0110\u01A1n v\u1ECB"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 67, "staItem.staItemId", "ID H\u1EA1ng m\u1EE5c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 70, "common.sortOrder", "S\u1EAFp x\u1EBFp"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 73, "staItem.showYn", "Hi\u1EC3n th\u1ECB (Y/N)"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 76, "staItem.showOrder", "Th\u1EE9 t\u1EF1 hi\u1EC3n th\u1ECB"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(60, 79, "common.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(63, 82, "common.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", vsiTable_r8.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", ctx.modalTitle())("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(70, 85, "common.save", "L\u01B0u d\u1EEF li\u1EC7u"))("nzCancelText", \u0275\u0275pipeBind2(71, 88, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(4);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(74, 91, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(75, 94, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(76, 97, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzInputNumberModule, NzInputNumberComponent, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, NzTagModule, NzTagComponent, TranslatePipe], styles: ["\n.vsi-btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=view-summary-item.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewSummaryItemComponent, [{
    type: Component,
    args: [{ selector: "app-view-summary-item", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzInputNumberModule,
      NzSelectModule,
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
          <label class="form-label">{{ 'staItem.itemCode' | translate:'H\u1EA1ng m\u1EE5c' }}</label>
          <input nz-input [(ngModel)]="searchText" name="vsiSearchText"
                 [placeholder]="'staItem.searchPlaceholder' | translate:'Nh\u1EADp m\xE3 / t\xEAn h\u1EA1ng m\u1EE5c t\u1ED5ng h\u1EE3p'">
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
          <button nz-button nzType="default" type="button" class="vsi-btn-export" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'essDept.exportExcel' | translate:'Xu\u1EA5t excel' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <!-- nzWidth khai b\xE1o cho t\u1EEBng c\u1ED9t \u0111\u1EC3 \u0111\u1ED3ng b\u1ED9 \u0111\u1ED9 r\u1ED9ng header/body khi d\xF9ng nzScroll. -->
      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="vsiTotalTpl"
                [nzScroll]="{ x: '1300px', y: 'calc(100vh - 420px)' }" #vsiTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th nzWidth="130px">{{ 'staItem.itemCode' | translate:'M\xE3 h\u1EA1ng m\u1EE5c' }}</th>
            <th nzWidth="180px">{{ 'staItem.itemName' | translate:'T\xEAn h\u1EA1ng m\u1EE5c' }}</th>
            <th nzWidth="100px">{{ 'staItem.unit' | translate:'\u0110\u01A1n v\u1ECB' }}</th>
            <th nzWidth="130px">{{ 'staItem.staItemId' | translate:'ID H\u1EA1ng m\u1EE5c' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'common.sortOrder' | translate:'S\u1EAFp x\u1EBFp' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'staItem.showYn' | translate:'Hi\u1EC3n th\u1ECB (Y/N)' }}</th>
            <th class="text-center" nzWidth="120px">{{ 'staItem.showOrder' | translate:'Th\u1EE9 t\u1EF1 hi\u1EC3n th\u1ECB' }}</th>
            <th class="text-center" nzWidth="120px">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'common.action' | translate:'Thao t\xE1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="10" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of vsiTable.data; let i = index">
            <td class="text-center">{{ i + 1 }}</td>
            <td [attr.title]="row.itemNo || null">{{ row.itemNo }}</td>
            <td [attr.title]="row.nameVi || null">{{ row.nameVi }}</td>
            <td [attr.title]="row.unit || null">{{ row.unit }}</td>
            <td [attr.title]="row.staItemId || null">{{ row.staItemId }}</td>
            <td class="text-center">{{ row.orderno }}</td>
            <td class="text-center">{{ row.showYn === 'Y' ? ('common.yes' | translate:'C\xF3') : ('common.no' | translate:'Kh\xF4ng') }}</td>
            <td class="text-center">{{ row.showOrder }}</td>
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
        <ng-template #vsiTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal Th\xEAm m\u1EDBi / C\u1EADp nh\u1EADt -->
<nz-modal [nzVisible]="modalVisible()" [nzTitle]="modalTitle()" nzWidth="800px"
          (nzOnCancel)="closeModal()" (nzOnOk)="saveForm()" [nzOkLoading]="saving()"
          [nzOkText]="'common.save' | translate:'L\u01B0u d\u1EEF li\u1EC7u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <h6 class="mb-3 text-primary border-bottom pb-2">{{ 'common.multilingualInfo' | translate:'Th\xF4ng tin \u0111a ng\xF4n ng\u1EEF' }}</h6>
    <div class="row g-3 mb-4">
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'common.nameVi' | translate:'T\xEAn Ti\u1EBFng Vi\u1EC7t' }} <span class="text-danger">*</span></label>
        <input nz-input [(ngModel)]="form.nameVi" name="vsiFormNameVi">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'common.nameEn' | translate:'T\xEAn Ti\u1EBFng Anh' }}</label>
        <input nz-input [(ngModel)]="form.nameEn" name="vsiFormNameEn">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'common.nameZh' | translate:'T\xEAn Ti\u1EBFng Trung' }}</label>
        <input nz-input [(ngModel)]="form.nameZh" name="vsiFormNameZh">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'common.nameKo' | translate:'T\xEAn Ti\u1EBFng H\xE0n' }}</label>
        <input nz-input [(ngModel)]="form.nameKo" name="vsiFormNameKo">
      </div>
    </div>

    <h6 class="mb-3 text-primary border-bottom pb-2">{{ 'staItem.itemProps' | translate:'Thu\u1ED9c T\xEDnh H\u1EA1ng M\u1EE5c' }}</h6>
    <div class="row g-3">
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'staItem.unit' | translate:'\u0110\u01A1n v\u1ECB (ng\xE0y, gi\u1EDD, ph\xFAt)' }}</label>
        <input nz-input [(ngModel)]="form.unit" name="vsiFormUnit">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'staItem.staItemId' | translate:'ID H\u1EA1ng m\u1EE5c (CODE)' }}</label>
        <input nz-input [(ngModel)]="form.staItemId" name="vsiFormStaItemId">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'common.sortOrder' | translate:'S\u1EAFp x\u1EBFp' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.orderno" name="vsiFormOrderno"></nz-input-number>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold d-block">{{ 'staItem.showYn' | translate:'C\xF3 hi\u1EC3n th\u1ECB (Y/N)' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.showYn" name="vsiFormShowYn">
          <nz-option nzValue="Y" [nzLabel]="'common.yes' | translate:'C\xF3'"></nz-option>
          <nz-option nzValue="N" [nzLabel]="'common.no' | translate:'Kh\xF4ng'"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'staItem.showOrder' | translate:'Th\u1EE9 t\u1EF1 hi\u1EC3n th\u1ECB' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.showOrder" name="vsiFormShowOrder"></nz-input-number>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold d-block">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.activity" name="vsiFormActivity">
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
    <p class="mb-1">{{ 'staItem.confirmDelete' | translate:'B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a h\u1EA1ng m\u1EE5c n\xE0y?' }}</p>
    <p class="fw-bold mb-0">{{ deleteTargetName }}</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-summary-item/view-summary-item.component.css */\n.vsi-btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=view-summary-item.component.css.map */\n"] }]
  }], () => [{ type: ViewSummaryItemService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewSummaryItemComponent, { className: "ViewSummaryItemComponent", filePath: "src/app/view-summary-item/view-summary-item.component.ts", lineNumber: 91 });
})();
export {
  ViewSummaryItemComponent
};
//# debugId=6bb7397f-1410-58e9-8280-55d8bd6be8e5
//# sourceMappingURL=chunk-YRPOF4BO.js.map
