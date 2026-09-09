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
import {
  NzCheckboxComponent,
  NzCheckboxModule
} from "./chunk-VWYGF7JF.js";
import "./chunk-JSOAL7UF.js";
import "./chunk-2QLZSMGV.js";
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

// src/app/view-menu-list/view-menu-list.service.ts
var API_BASE = "/sys/api/menu";
var ViewMenuListService = class _ViewMenuListService {
  constructor(http) {
    this.http = http;
  }
  http;
  list(keyword) {
    let params = new HttpParams();
    if (keyword)
      params = params.set("keyword", keyword);
    return this.http.get(`${API_BASE}/list`, { params, withCredentials: true });
  }
  save(payload) {
    return this.http.post(`${API_BASE}/save`, payload, { withCredentials: true });
  }
  delete(menuNo) {
    const params = new HttpParams().set("menuNo", menuNo);
    return this.http.post(`${API_BASE}/delete`, null, { params, withCredentials: true });
  }
  static \u0275fac = function ViewMenuListService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewMenuListService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewMenuListService, factory: _ViewMenuListService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewMenuListService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-menu-list/view-menu-list.component.ts
var _c0 = () => ({ x: "1180px", y: "calc(100vh - 420px)" });
function ViewMenuListComponent_nz_alert_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 32);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ViewMenuListComponent_tr_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 33);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewMenuListComponent_tr_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 34);
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
    \u0275\u0275elementStart(13, "td", 34);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 34)(16, "nz-tag", 35);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 34)(20, "button", 36);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275listener("click", function ViewMenuListComponent_tr_62_Template_button_click_20_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditModal(row_r4));
    });
    \u0275\u0275element(22, "i", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 36);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275listener("click", function ViewMenuListComponent_tr_62_Template_button_click_23_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDeleteConfirm(row_r4));
    });
    \u0275\u0275element(25, "i", 38);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r5 + 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.menuCode || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.menuCode);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.nameVi || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.nameVi);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.nameEn || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.nameEn);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.parentMenuName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.parentMenuName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.menuUrl || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.menuUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.orderNo);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColor", row_r4.activity === 1 ? "success" : "default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(18, 16, row_r4.activity === 1 ? "common.active" : "common.inactive", row_r4.activity === 1 ? "Ho\u1EA1t \u0111\u1ED9ng" : "Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(21, 19, "common.edit", "S\u1EEDa"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(24, 22, "common.delete", "X\xF3a"));
  }
}
function ViewMenuListComponent_ng_template_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r6 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r6, " ");
  }
}
function ViewMenuListComponent_ng_container_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 39)(2, "div", 6)(3, "label", 40);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span", 41);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function ViewMenuListComponent_ng_container_68_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.menuCode, $event) || (ctx_r1.form.menuCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 6)(10, "label", 40);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 43);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewMenuListComponent_ng_container_68_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.menuParentNo, $event) || (ctx_r1.form.menuParentNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 6)(16, "label", 40);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementStart(19, "span", 41);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function ViewMenuListComponent_ng_container_68_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nameVi, $event) || (ctx_r1.form.nameVi = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 6)(23, "label", 40);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function ViewMenuListComponent_ng_container_68_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nameEn, $event) || (ctx_r1.form.nameEn = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 6)(28, "label", 40);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function ViewMenuListComponent_ng_container_68_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nameZh, $event) || (ctx_r1.form.nameZh = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 6)(33, "label", 40);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function ViewMenuListComponent_ng_container_68_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nameKo, $event) || (ctx_r1.form.nameKo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 6)(38, "label", 40);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function ViewMenuListComponent_ng_container_68_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.menuUrl, $event) || (ctx_r1.form.menuUrl = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 6)(43, "label", 40);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function ViewMenuListComponent_ng_container_68_Template_input_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.menuImg, $event) || (ctx_r1.form.menuImg = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 50)(48, "label", 40);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "nz-input-number", 51);
    \u0275\u0275twoWayListener("ngModelChange", function ViewMenuListComponent_ng_container_68_Template_nz_input_number_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.depth, $event) || (ctx_r1.form.depth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 50)(53, "label", 40);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "nz-input-number", 52);
    \u0275\u0275twoWayListener("ngModelChange", function ViewMenuListComponent_ng_container_68_Template_nz_input_number_ngModelChange_56_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.orderNo, $event) || (ctx_r1.form.orderNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 53)(58, "label", 54);
    \u0275\u0275twoWayListener("ngModelChange", function ViewMenuListComponent_ng_container_68_Template_label_ngModelChange_58_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.activity, $event) || (ctx_r1.form.activity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 25, "sys.basic.viewMenuList.label.menuCode", "M\xE3 Menu (Code)"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.menuCode);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 28, "sys.basic.viewMenuList.label.parentMenuCode", "M\xE3 Parent Menu"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.menuParentNo);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(14, 31, "sys.basic.viewMenuList.label.parentMenuCode.placeholder", "\u0110\u1EC3 tr\u1ED1ng n\u1EBFu l\xE0 g\u1ED1c"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(18, 34, "sys.basic.viewMenuList.label.nameVi", "T\xEAn Ti\u1EBFng Vi\u1EC7t"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nameVi);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 37, "sys.basic.viewMenuList.label.nameEn", "T\xEAn Ti\u1EBFng Anh"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nameEn);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 40, "sys.basic.viewMenuList.label.nameZh", "T\xEAn Ti\u1EBFng Trung"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nameZh);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 43, "sys.basic.viewMenuList.label.nameKo", "T\xEAn Ti\u1EBFng H\xE0n"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nameKo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 46, "sys.basic.viewMenuList.label.url", "URL"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.menuUrl);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 49, "sys.basic.viewMenuList.label.icon", "Icon (Class)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.menuImg);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 52, "sys.basic.viewMenuList.label.depth", "C\u1EA5p \u0111\u1ED9 (Depth)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.depth);
    \u0275\u0275property("nzMin", 0);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(55, 55, "sys.basic.viewMenuList.label.orderNo", "Th\u1EE9 t\u1EF1"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.orderNo);
    \u0275\u0275property("nzMin", 0);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.activity);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(60, 58, "sys.basic.viewMenuList.label.activity", "Ho\u1EA1t \u0111\u1ED9ng"), " ");
  }
}
function ViewMenuListComponent_ng_container_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 55);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 56);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "sys.basic.viewMenuList.msg.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a menu n\xE0y?"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.deleteTargetName);
  }
}
var I18N_KEYS = [
  "common.stt",
  "common.action",
  "common.status",
  "common.active",
  "common.inactive",
  "common.search",
  "common.clearFilter",
  "common.addNew",
  "common.exportExcel",
  "common.save",
  "common.close",
  "common.delete",
  "common.edit",
  "common.confirm",
  "common.cancel",
  "common.noData",
  "common.totalRows",
  "common.loadFail",
  "common.saveSuccess",
  "common.saveFail",
  "common.deleteSuccess",
  "common.deleteFail",
  "sys.basic.viewMenuList.search.keyword",
  "sys.basic.viewMenuList.search.keyword.placeholder",
  "sys.basic.viewMenuList.col.menuCode",
  "sys.basic.viewMenuList.col.nameVi",
  "sys.basic.viewMenuList.col.nameEn",
  "sys.basic.viewMenuList.col.parentMenu",
  "sys.basic.viewMenuList.col.url",
  "sys.basic.viewMenuList.col.orderNo",
  "sys.basic.viewMenuList.label.menuCode",
  "sys.basic.viewMenuList.label.parentMenuCode",
  "sys.basic.viewMenuList.label.parentMenuCode.placeholder",
  "sys.basic.viewMenuList.label.nameVi",
  "sys.basic.viewMenuList.label.nameEn",
  "sys.basic.viewMenuList.label.nameZh",
  "sys.basic.viewMenuList.label.nameKo",
  "sys.basic.viewMenuList.label.url",
  "sys.basic.viewMenuList.label.icon",
  "sys.basic.viewMenuList.label.depth",
  "sys.basic.viewMenuList.label.orderNo",
  "sys.basic.viewMenuList.label.activity",
  "sys.basic.viewMenuList.msg.addTitle",
  "sys.basic.viewMenuList.msg.editTitle",
  "sys.basic.viewMenuList.msg.confirmDelete"
];
var PAGE_SIZE_OPTIONS = [25, 50, 100, 200];
var EMPTY_FORM = {
  menuNo: null,
  menuParentNo: "",
  menuCode: "",
  menuImg: "",
  menuUrl: "",
  depth: 0,
  orderNo: 0,
  activity: true,
  nameVi: "",
  nameEn: "",
  nameZh: "",
  nameKo: ""
};
var ViewMenuListComponent = class _ViewMenuListComponent {
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
  searchKeyword = "";
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
    () => this.isNew() ? this.i18n.t("sys.basic.viewMenuList.msg.addTitle", "Th\xEAm m\u1EDBi Menu") : this.i18n.t("sys.basic.viewMenuList.msg.editTitle", "C\u1EADp nh\u1EADt Menu"),
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
    this.api.list(this.searchKeyword).subscribe({
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
    this.searchKeyword = "";
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
      menuNo: row.menuNo,
      menuParentNo: row.menuParentNo || "",
      menuCode: row.menuCode || "",
      menuImg: row.menuImg || "",
      menuUrl: row.menuUrl || "",
      depth: row.depth ?? 0,
      orderNo: row.orderNo ?? 0,
      activity: row.activity === 1,
      nameVi: row.nameVi || "",
      nameEn: row.nameEn || "",
      nameZh: row.nameZh || "",
      nameKo: row.nameKo || ""
    };
    this.modalVisible.set(true);
  }
  closeModal() {
    this.modalVisible.set(false);
  }
  saveForm() {
    if (!this.form.menuCode || !this.form.nameVi) {
      this.message.warning(this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!"));
      return;
    }
    const payload = {
      menuNo: this.form.menuNo,
      menuParentNo: this.form.menuParentNo || null,
      menuCode: this.form.menuCode,
      menuImg: this.form.menuImg || null,
      menuUrl: this.form.menuUrl || null,
      depth: this.form.depth,
      orderNo: this.form.orderNo,
      activity: this.form.activity ? 1 : 0,
      nameVi: this.form.nameVi,
      nameEn: this.form.nameEn || null,
      nameZh: this.form.nameZh || null,
      nameKo: this.form.nameKo || null
    };
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        if (res.success) {
          this.modalVisible.set(false);
          this.message.success(res.message || this.i18n.t("common.saveSuccess", "L\u01B0u th\xE0nh c\xF4ng!"));
          this.search();
        } else {
          this.message.error(res.message || this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!"));
        }
      },
      error: () => {
        this.saving.set(false);
        this.message.error(this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!"));
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
    return this.deleteTarget ? `${this.deleteTarget.menuCode} - ${this.deleteTarget.nameVi ?? ""}` : "";
  }
  confirmDelete() {
    if (!this.deleteTarget?.menuNo)
      return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.menuNo).subscribe({
      next: (res) => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        if (res.success) {
          this.message.success(res.message || this.i18n.t("common.deleteSuccess", "X\xF3a th\xE0nh c\xF4ng!"));
          this.search();
        } else {
          this.message.error(res.message || this.i18n.t("common.deleteFail", "X\xF3a th\u1EA5t b\u1EA1i!"));
        }
      },
      error: () => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.message.error(this.i18n.t("common.deleteFail", "X\xF3a th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  // ==================== Xuất Excel ====================
  /** Xuất excel client-side (endpoint /sys/api/menu/export cũ thực chất trả .csv nên không dùng lại -
   *  xem giải thích ở đầu file) - dùng thư viện xlsx (SheetJS) để tạo đúng file .xlsx nhị phân. */
  exportExcel() {
    const headers = [
      this.i18n.t("common.stt", "STT"),
      this.i18n.t("sys.basic.viewMenuList.col.menuCode", "Menu Code"),
      this.i18n.t("sys.basic.viewMenuList.col.nameVi", "T\xEAn TV"),
      this.i18n.t("sys.basic.viewMenuList.col.nameEn", "T\xEAn TA"),
      this.i18n.t("sys.basic.viewMenuList.col.parentMenu", "Menu Cha"),
      this.i18n.t("sys.basic.viewMenuList.col.url", "URL"),
      this.i18n.t("sys.basic.viewMenuList.col.orderNo", "Th\u1EE9 t\u1EF1"),
      this.i18n.t("common.status", "Tr\u1EA1ng th\xE1i")
    ];
    const activeText = this.i18n.t("common.active", "Ho\u1EA1t \u0111\u1ED9ng");
    const inactiveText = this.i18n.t("common.inactive", "Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng");
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      r.menuCode,
      r.nameVi,
      r.nameEn,
      r.parentMenuName,
      r.menuUrl,
      r.orderNo,
      r.activity === 1 ? activeText : inactiveText
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "DanhSach");
    writeFileSync(workbook, "menu_list.xlsx");
  }
  static \u0275fac = function ViewMenuListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewMenuListComponent)(\u0275\u0275directiveInject(ViewMenuListService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewMenuListComponent, selectors: [["app-view-menu-list"]], decls: 74, vars: 97, consts: [["vmlTable", ""], ["vmlTotalTpl", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-6"], [1, "form-label"], ["nz-input", "", "name", "vmlSearchKeyword", 3, "ngModelChange", "ngModel", "placeholder"], [1, "col-md-6", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzType", "default", "type", "button", 1, "vml-btn-export", 3, "click"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "140px"], ["nzWidth", "180px"], ["nzWidth", "160px"], ["nzWidth", "220px"], ["nzWidth", "90px", 1, "text-center"], ["nzWidth", "120px", 1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["nzWidth", "700px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "9", 1, "text-center", "text-muted"], [1, "text-center"], [3, "nzColor"], ["nz-button", "", "nzType", "text", "nzSize", "small", 3, "click", "title"], [1, "bx", "bx-edit", "text-warning"], [1, "bx", "bx-trash", "text-danger"], [1, "row", "g-3"], [1, "form-label", "fw-semibold"], [1, "text-danger"], ["nz-input", "", "name", "vmlMenuCode", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vmlMenuParentNo", 3, "ngModelChange", "ngModel", "placeholder"], ["nz-input", "", "name", "vmlNameVi", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vmlNameEn", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vmlNameZh", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vmlNameKo", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vmlMenuUrl", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vmlMenuImg", 3, "ngModelChange", "ngModel"], [1, "col-md-4"], ["name", "vmlDepth", 1, "w-100", 3, "ngModelChange", "ngModel", "nzMin"], ["name", "vmlOrderNo", 1, "w-100", 3, "ngModelChange", "ngModel", "nzMin"], [1, "col-md-4", "d-flex", "align-items-end"], ["nz-checkbox", "", "name", "vmlActivity", 3, "ngModelChange", "ngModel"], [1, "mb-1"], [1, "fw-bold", "mb-0"]], template: function ViewMenuListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "nz-card", 4)(3, "form", 5);
      \u0275\u0275listener("ngSubmit", function ViewMenuListComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 6)(5, "label", 7);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewMenuListComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchKeyword, $event) || (ctx.searchKeyword = $event);
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
      \u0275\u0275listener("click", function ViewMenuListComponent_Template_button_click_15_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(16, "i", 13);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 14);
      \u0275\u0275listener("click", function ViewMenuListComponent_Template_button_click_19_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(20, "i", 15);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 16);
      \u0275\u0275listener("click", function ViewMenuListComponent_Template_button_click_23_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(24, "i", 17);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(27, "nz-card");
      \u0275\u0275template(28, ViewMenuListComponent_nz_alert_28_Template, 1, 1, "nz-alert", 18);
      \u0275\u0275elementStart(29, "nz-table", 19, 0)(31, "thead")(32, "tr")(33, "th", 20);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "th", 21);
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "th", 22);
      \u0275\u0275text(40);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "th", 22);
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "th", 23);
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "th", 24);
      \u0275\u0275text(49);
      \u0275\u0275pipe(50, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "th", 25);
      \u0275\u0275text(52);
      \u0275\u0275pipe(53, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "th", 26);
      \u0275\u0275text(55);
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "th", 25);
      \u0275\u0275text(58);
      \u0275\u0275pipe(59, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(60, "tbody");
      \u0275\u0275template(61, ViewMenuListComponent_tr_61_Template, 4, 4, "tr", 27)(62, ViewMenuListComponent_tr_62_Template, 26, 25, "tr", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275template(63, ViewMenuListComponent_ng_template_63_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(65, "nz-modal", 29);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewMenuListComponent_Template_nz_modal_nzOnCancel_65_listener() {
        return ctx.closeModal();
      })("nzOnOk", function ViewMenuListComponent_Template_nz_modal_nzOnOk_65_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(68, ViewMenuListComponent_ng_container_68_Template, 61, 61, "ng-container", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "nz-modal", 31);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275pipe(71, "translate");
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewMenuListComponent_Template_nz_modal_nzOnCancel_69_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function ViewMenuListComponent_Template_nz_modal_nzOnOk_69_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(73, ViewMenuListComponent_ng_container_73_Template, 6, 5, "ng-container", 30);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const vmlTable_r8 = \u0275\u0275reference(30);
      const vmlTotalTpl_r9 = \u0275\u0275reference(64);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 36, "sys.basic.viewMenuList.search.keyword", "T\u1EEB kh\xF3a (M\xE3, T\xEAn)"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchKeyword);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 39, "sys.basic.viewMenuList.search.keyword.placeholder", "Nh\u1EADp m\xE3 ho\u1EB7c t\xEAn menu"));
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 42, "common.search", "T\xECm ki\u1EBFm"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(18, 45, "common.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(22, 48, "common.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 51, "common.exportExcel", "Xu\u1EA5t Excel"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", vmlTotalTpl_r9)("nzScroll", \u0275\u0275pureFunction0(96, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 54, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(38, 57, "sys.basic.viewMenuList.col.menuCode", "Menu Code"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 60, "sys.basic.viewMenuList.col.nameVi", "T\xEAn TV"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 63, "sys.basic.viewMenuList.col.nameEn", "T\xEAn TA"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(47, 66, "sys.basic.viewMenuList.col.parentMenu", "Menu Cha"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 69, "sys.basic.viewMenuList.col.url", "URL"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(53, 72, "sys.basic.viewMenuList.col.orderNo", "Th\u1EE9 t\u1EF1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(56, 75, "common.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(59, 78, "common.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", vmlTable_r8.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", ctx.modalTitle())("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(66, 81, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(67, 84, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(4);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(70, 87, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(71, 90, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(72, 93, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzInputNumberModule, NzInputNumberComponent, NzCheckboxModule, NzCheckboxComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzTagModule, NzTagComponent, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\n.vml-btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=view-menu-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewMenuListComponent, [{
    type: Component,
    args: [{ selector: "app-view-menu-list", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzInputNumberModule,
      NzCheckboxModule,
      NzButtonModule,
      NzModalModule,
      NzTagModule,
      NzAlertModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3" (ngSubmit)="search()">
        <div class="col-md-6">
          <label class="form-label">{{ 'sys.basic.viewMenuList.search.keyword' | translate:'T\u1EEB kh\xF3a (M\xE3, T\xEAn)' }}</label>
          <input nz-input [(ngModel)]="searchKeyword" name="vmlSearchKeyword"
                 [placeholder]="'sys.basic.viewMenuList.search.keyword.placeholder' | translate:'Nh\u1EADp m\xE3 ho\u1EB7c t\xEAn menu'">
        </div>
        <div class="col-md-6 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'common.search' | translate:'T\xECm ki\u1EBFm' }}
          </button>
          <button nz-button type="button" (click)="clearSearch()">
            <i class="bx bx-x"></i> {{ 'common.clearFilter' | translate:'X\xF3a l\u1ECDc' }}
          </button>
          <button nz-button nzType="primary" type="button" (click)="openAddModal()">
            <i class="bx bx-plus"></i> {{ 'common.addNew' | translate:'Th\xEAm m\u1EDBi' }}
          </button>
          <button nz-button nzType="default" type="button" class="vml-btn-export" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'common.exportExcel' | translate:'Xu\u1EA5t Excel' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="vmlTotalTpl"
                [nzScroll]="{ x: '1180px', y: 'calc(100vh - 420px)' }" #vmlTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th nzWidth="140px">{{ 'sys.basic.viewMenuList.col.menuCode' | translate:'Menu Code' }}</th>
            <th nzWidth="180px">{{ 'sys.basic.viewMenuList.col.nameVi' | translate:'T\xEAn TV' }}</th>
            <th nzWidth="180px">{{ 'sys.basic.viewMenuList.col.nameEn' | translate:'T\xEAn TA' }}</th>
            <th nzWidth="160px">{{ 'sys.basic.viewMenuList.col.parentMenu' | translate:'Menu Cha' }}</th>
            <th nzWidth="220px">{{ 'sys.basic.viewMenuList.col.url' | translate:'URL' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'sys.basic.viewMenuList.col.orderNo' | translate:'Th\u1EE9 t\u1EF1' }}</th>
            <th class="text-center" nzWidth="120px">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'common.action' | translate:'Thao t\xE1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="9" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of vmlTable.data; let i = index">
            <td class="text-center">{{ i + 1 }}</td>
            <td [attr.title]="row.menuCode || null">{{ row.menuCode }}</td>
            <td [attr.title]="row.nameVi || null">{{ row.nameVi }}</td>
            <td [attr.title]="row.nameEn || null">{{ row.nameEn }}</td>
            <td [attr.title]="row.parentMenuName || null">{{ row.parentMenuName }}</td>
            <td [attr.title]="row.menuUrl || null">{{ row.menuUrl }}</td>
            <td class="text-center">{{ row.orderNo }}</td>
            <td class="text-center">
              <nz-tag [nzColor]="row.activity === 1 ? 'success' : 'default'">
                {{ (row.activity === 1 ? 'common.active' : 'common.inactive') | translate:(row.activity === 1 ? 'Ho\u1EA1t \u0111\u1ED9ng' : 'Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng') }}
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
        <ng-template #vmlTotalTpl let-total>
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
        <label class="form-label fw-semibold">{{ 'sys.basic.viewMenuList.label.menuCode' | translate:'M\xE3 Menu (Code)' }} <span class="text-danger">*</span></label>
        <input nz-input [(ngModel)]="form.menuCode" name="vmlMenuCode">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'sys.basic.viewMenuList.label.parentMenuCode' | translate:'M\xE3 Parent Menu' }}</label>
        <input nz-input [(ngModel)]="form.menuParentNo" name="vmlMenuParentNo"
               [placeholder]="'sys.basic.viewMenuList.label.parentMenuCode.placeholder' | translate:'\u0110\u1EC3 tr\u1ED1ng n\u1EBFu l\xE0 g\u1ED1c'">
      </div>

      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'sys.basic.viewMenuList.label.nameVi' | translate:'T\xEAn Ti\u1EBFng Vi\u1EC7t' }} <span class="text-danger">*</span></label>
        <input nz-input [(ngModel)]="form.nameVi" name="vmlNameVi">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'sys.basic.viewMenuList.label.nameEn' | translate:'T\xEAn Ti\u1EBFng Anh' }}</label>
        <input nz-input [(ngModel)]="form.nameEn" name="vmlNameEn">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'sys.basic.viewMenuList.label.nameZh' | translate:'T\xEAn Ti\u1EBFng Trung' }}</label>
        <input nz-input [(ngModel)]="form.nameZh" name="vmlNameZh">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'sys.basic.viewMenuList.label.nameKo' | translate:'T\xEAn Ti\u1EBFng H\xE0n' }}</label>
        <input nz-input [(ngModel)]="form.nameKo" name="vmlNameKo">
      </div>

      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'sys.basic.viewMenuList.label.url' | translate:'URL' }}</label>
        <input nz-input [(ngModel)]="form.menuUrl" name="vmlMenuUrl">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'sys.basic.viewMenuList.label.icon' | translate:'Icon (Class)' }}</label>
        <input nz-input [(ngModel)]="form.menuImg" name="vmlMenuImg">
      </div>

      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'sys.basic.viewMenuList.label.depth' | translate:'C\u1EA5p \u0111\u1ED9 (Depth)' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.depth" name="vmlDepth" [nzMin]="0"></nz-input-number>
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'sys.basic.viewMenuList.label.orderNo' | translate:'Th\u1EE9 t\u1EF1' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.orderNo" name="vmlOrderNo" [nzMin]="0"></nz-input-number>
      </div>
      <div class="col-md-4 d-flex align-items-end">
        <label nz-checkbox [(ngModel)]="form.activity" name="vmlActivity">
          {{ 'sys.basic.viewMenuList.label.activity' | translate:'Ho\u1EA1t \u0111\u1ED9ng' }}
        </label>
      </div>
    </div>
  </ng-container>
</nz-modal>

<!-- Modal x\xE1c nh\u1EADn x\xF3a -->
<nz-modal [nzVisible]="deleteVisible()" [nzTitle]="'common.confirm' | translate:'X\xE1c nh\u1EADn'"
          (nzOnCancel)="closeDeleteConfirm()" (nzOnOk)="confirmDelete()" [nzOkLoading]="deleting()"
          [nzOkText]="'common.confirm' | translate:'X\xE1c nh\u1EADn'" [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'">
  <ng-container *nzModalContent>
    <p class="mb-1">{{ 'sys.basic.viewMenuList.msg.confirmDelete' | translate:'B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a menu n\xE0y?' }}</p>
    <p class="fw-bold mb-0">{{ deleteTargetName }}</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-menu-list/view-menu-list.component.css */\n.vml-btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=view-menu-list.component.css.map */\n"] }]
  }], () => [{ type: ViewMenuListService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewMenuListComponent, { className: "ViewMenuListComponent", filePath: "src/app/view-menu-list/view-menu-list.component.ts", lineNumber: 92 });
})();
export {
  ViewMenuListComponent
};
//# debugId=0ee4e101-f981-53f4-87d4-32c08f634842
//# sourceMappingURL=chunk-AT3OWLFJ.js.map
