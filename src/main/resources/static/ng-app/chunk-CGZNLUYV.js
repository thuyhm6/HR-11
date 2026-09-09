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

// src/app/view-ar-item/view-ar-item.service.ts
var API_BASE = "/ar/attendanceSettings/api/arItem";
var ViewArItemService = class _ViewArItemService {
  constructor(http) {
    this.http = http;
  }
  http;
  search(itemNo) {
    let httpParams = new HttpParams();
    if (itemNo)
      httpParams = httpParams.set("itemNo", itemNo);
    return this.http.get(API_BASE, { params: httpParams, withCredentials: true });
  }
  save(payload) {
    return this.http.post(`${API_BASE}/save`, payload, { withCredentials: true });
  }
  delete(itemNo) {
    return this.http.delete(`${API_BASE}/delete/${itemNo}`, { withCredentials: true });
  }
  /** Combo Mã nhóm hạng mục (parentCodeNo=1429) - dùng chung API code hệ thống (xem AddressInfoService). */
  getCodeList(parentCodeNo) {
    return this.http.get("/sys/api/getCode/list", {
      params: new HttpParams().set("parentCodeNo", parentCodeNo),
      withCredentials: true
    });
  }
  static \u0275fac = function ViewArItemService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewArItemService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewArItemService, factory: _ViewArItemService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewArItemService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-ar-item/view-ar-item.component.ts
var _c0 = () => ({ x: "1400px", y: "calc(100vh - 420px)" });
function ViewArItemComponent_nz_alert_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 35);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ViewArItemComponent_tr_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewArItemComponent_tr_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 37);
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
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 37);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 37)(20, "nz-tag", 38);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td", 37)(25, "button", 39);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275listener("click", function ViewArItemComponent_tr_69_Template_button_click_25_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditModal(row_r4));
    });
    \u0275\u0275element(27, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 39);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275listener("click", function ViewArItemComponent_tr_69_Template_button_click_28_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDeleteConfirm(row_r4));
    });
    \u0275\u0275element(30, "i", 41);
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
    \u0275\u0275attribute("title", row_r4.itemId || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.itemId);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.shortName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.shortName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.description || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.description);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.unit || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.unit);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.itemGroupCode || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.itemGroupCode);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.nameVi || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.nameVi);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.orderno);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColor", row_r4.activity === 1 ? "success" : "default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.activity === 1 ? \u0275\u0275pipeBind2(22, 20, "common.active", "Ho\u1EA1t \u0111\u1ED9ng") : \u0275\u0275pipeBind2(23, 23, "common.inactive", "Ng\u1EEBng"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(26, 26, "common.edit", "S\u1EEDa"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(29, 29, "common.delete", "X\xF3a"));
  }
}
function ViewArItemComponent_ng_template_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r6 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r6, " ");
  }
}
function ViewArItemComponent_ng_container_75_nz_option_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 63);
  }
  if (rf & 2) {
    const c_r8 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r8.codeNo)("nzLabel", c_r8.codeName);
  }
}
function ViewArItemComponent_ng_container_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h6", 42);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 43)(5, "div", 44)(6, "label", 45);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "span", 46);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArItemComponent_ng_container_75_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nameVi, $event) || (ctx_r1.form.nameVi = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 44)(13, "label", 45);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArItemComponent_ng_container_75_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nameEn, $event) || (ctx_r1.form.nameEn = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 44)(18, "label", 45);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 49);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArItemComponent_ng_container_75_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nameZh, $event) || (ctx_r1.form.nameZh = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 44)(23, "label", 45);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArItemComponent_ng_container_75_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nameKo, $event) || (ctx_r1.form.nameKo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "h6", 42);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 51)(31, "div", 44)(32, "label", 45);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArItemComponent_ng_container_75_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.itemId, $event) || (ctx_r1.form.itemId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 44)(37, "label", 45);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArItemComponent_ng_container_75_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.shortName, $event) || (ctx_r1.form.shortName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 44)(42, "label", 45);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArItemComponent_ng_container_75_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.description, $event) || (ctx_r1.form.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 44)(47, "label", 45);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArItemComponent_ng_container_75_Template_input_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.unit, $event) || (ctx_r1.form.unit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 44)(52, "label", 56);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "nz-select", 57);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewArItemComponent_ng_container_75_Template_nz_select_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.itemGroupCode, $event) || (ctx_r1.form.itemGroupCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(57, ViewArItemComponent_ng_container_75_nz_option_57_Template, 1, 2, "nz-option", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 44)(59, "label", 45);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArItemComponent_ng_container_75_Template_input_ngModelChange_62_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.itemIdMapping, $event) || (ctx_r1.form.itemIdMapping = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 44)(64, "label", 45);
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "nz-input-number", 60);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArItemComponent_ng_container_75_Template_nz_input_number_ngModelChange_67_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.orderno, $event) || (ctx_r1.form.orderno = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 44)(69, "label", 45);
    \u0275\u0275text(70);
    \u0275\u0275pipe(71, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "nz-input-number", 61);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArItemComponent_ng_container_75_Template_nz_input_number_ngModelChange_72_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.ordernoSst, $event) || (ctx_r1.form.ordernoSst = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "div", 44)(74, "label", 56);
    \u0275\u0275text(75);
    \u0275\u0275pipe(76, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "nz-select", 62);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArItemComponent_ng_container_75_Template_nz_select_ngModelChange_77_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.activity, $event) || (ctx_r1.form.activity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(78, "nz-option", 63);
    \u0275\u0275pipe(79, "translate");
    \u0275\u0275element(80, "nz-option", 63);
    \u0275\u0275pipe(81, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 34, "common.multilingualInfo", "Th\xF4ng tin \u0111a ng\xF4n ng\u1EEF"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(8, 37, "common.nameVi", "T\xEAn Ti\u1EBFng Vi\u1EC7t"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nameVi);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 40, "common.nameEn", "T\xEAn Ti\u1EBFng Anh"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nameEn);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 43, "common.nameZh", "T\xEAn Ti\u1EBFng Trung"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nameZh);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 46, "common.nameKo", "T\xEAn Ti\u1EBFng H\xE0n"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nameKo);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 49, "arItem.itemInfo", "Th\xF4ng tin h\u1EA1ng m\u1EE5c"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 52, "arItem.itemId", "ID h\u1EA1ng m\u1EE5c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.itemId);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 55, "arItem.shortName", "T\xEAn vi\u1EBFt t\u1EAFt"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.shortName);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 58, "arItem.description", "M\xF4 t\u1EA3"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.description);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 61, "arItem.unit", "\u0110\u01A1n v\u1ECB"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.unit);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 64, "arItem.itemType", "M\xE3 nh\xF3m d\u1EF1 \xE1n"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.itemGroupCode);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(56, 67, "common.placeholder.select", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.itemGroupOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(61, 70, "arItem.idMapping", "ID Mapping"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.itemIdMapping);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(66, 73, "common.sortOrder", "S\u1EAFp x\u1EBFp"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.orderno);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(71, 76, "arItem.ordernoSst", "S\u1EAFp x\u1EBFp SST"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.ordernoSst);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(76, 79, "common.status", "Tr\u1EA1ng th\xE1i"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.activity);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzValue", 1)("nzLabel", \u0275\u0275pipeBind2(79, 82, "common.active", "Ho\u1EA1t \u0111\u1ED9ng"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzValue", 0)("nzLabel", \u0275\u0275pipeBind2(81, 85, "common.inactive", "Ng\u1EEBng"));
  }
}
function ViewArItemComponent_ng_container_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 64);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 65);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "arItem.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a h\u1EA1ng m\u1EE5c n\xE0y kh\xF4ng?"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.deleteTargetName);
  }
}
var ITEM_GROUP_PARENT_CODE = "1429";
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
  "common.name",
  "common.placeholder.select",
  "arItem.itemCode",
  "arItem.unit",
  "arItem.itemType",
  "arItem.itemInfo",
  "arItem.modalAddTitle",
  "arItem.modalEditTitle",
  "arItem.confirmDelete",
  "arItem.itemId",
  "arItem.shortName",
  "arItem.description",
  "arItem.idMapping",
  "arItem.ordernoSst",
  "arItem.searchPlaceholder",
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
  itemId: "",
  shortName: "",
  description: "",
  unit: "",
  itemGroupCode: null,
  itemIdMapping: "",
  orderno: null,
  ordernoSst: null,
  activity: 1
};
var ViewArItemComponent = class _ViewArItemComponent {
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
  itemGroupOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "itemGroupOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  searchItemNo = "";
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
    () => this.isNew() ? this.i18n.t("arItem.modalAddTitle", "Th\xEAm m\u1EDBi h\u1EA1ng m\u1EE5c") : this.i18n.t("arItem.modalEditTitle", "C\u1EADp nh\u1EADt h\u1EA1ng m\u1EE5c"),
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
    this.api.getCodeList(ITEM_GROUP_PARENT_CODE).subscribe({
      next: (list) => this.itemGroupOptions.set(list ?? []),
      error: () => this.itemGroupOptions.set([])
    });
  }
  search() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.search(this.searchItemNo).subscribe({
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
    this.searchItemNo = "";
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
      itemNo: row.itemNo,
      nameVi: row.nameVi || "",
      nameEn: row.nameEn || "",
      nameZh: row.nameZh || "",
      nameKo: row.nameKo || "",
      itemId: row.itemId || "",
      shortName: row.shortName || "",
      description: row.description || "",
      unit: row.unit || "",
      itemGroupCode: row.itemGroupCode,
      itemIdMapping: row.itemIdMapping || "",
      orderno: row.orderno,
      ordernoSst: row.ordernoSst,
      activity: row.activity ?? 1
    };
    this.modalVisible.set(true);
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
      itemId: this.form.itemId,
      shortName: this.form.shortName,
      description: this.form.description,
      unit: this.form.unit,
      itemGroupCode: this.form.itemGroupCode,
      itemIdMapping: this.form.itemIdMapping,
      orderno: this.form.orderno,
      ordernoSst: this.form.ordernoSst,
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
      this.i18n.t("arItem.itemCode", "M\xE3 h\u1EA1ng m\u1EE5c"),
      this.i18n.t("arItem.itemId", "ID h\u1EA1ng m\u1EE5c"),
      this.i18n.t("arItem.shortName", "T\xEAn vi\u1EBFt t\u1EAFt"),
      this.i18n.t("arItem.description", "M\xF4 t\u1EA3"),
      this.i18n.t("arItem.unit", "\u0110\u01A1n v\u1ECB"),
      this.i18n.t("arItem.itemType", "M\xE3 nh\xF3m"),
      this.i18n.t("common.name", "T\xEAn"),
      this.i18n.t("common.sortOrder", "S\u1EAFp x\u1EBFp"),
      this.i18n.t("common.status", "Tr\u1EA1ng th\xE1i")
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      r.itemNo,
      r.itemId,
      r.shortName,
      r.description,
      r.unit,
      r.itemGroupCode,
      r.nameVi,
      r.orderno,
      r.activity === 1 ? this.i18n.t("common.active", "Ho\u1EA1t \u0111\u1ED9ng") : this.i18n.t("common.inactive", "Ng\u1EEBng")
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "DanhSach");
    writeFileSync(workbook, "ar_item_list.xlsx");
  }
  static \u0275fac = function ViewArItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewArItemComponent)(\u0275\u0275directiveInject(ViewArItemService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewArItemComponent, selectors: [["app-view-ar-item"]], decls: 81, vars: 105, consts: [["vaiTable", ""], ["vaiTotalTpl", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-4"], [1, "form-label"], ["nz-input", "", "name", "vaiSearchItemNo", 3, "ngModelChange", "ngModel", "placeholder"], [1, "col-md-8", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], [1, "col-12", "d-flex", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzType", "default", "type", "button", 1, "vai-btn-export", 3, "click"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "130px"], ["nzWidth", "100px"], ["nzWidth", "150px"], ["nzWidth", "200px"], ["nzWidth", "120px"], ["nzWidth", "180px"], ["nzWidth", "90px", 1, "text-center"], ["nzWidth", "120px", 1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["nzWidth", "800px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "11", 1, "text-center", "text-muted"], [1, "text-center"], [3, "nzColor"], ["nz-button", "", "nzType", "text", "nzSize", "small", 3, "click", "title"], [1, "bx", "bx-edit", "text-warning"], [1, "bx", "bx-trash", "text-danger"], [1, "mb-3", "text-primary", "border-bottom", "pb-2"], [1, "row", "g-3", "mb-4"], [1, "col-md-6"], [1, "form-label", "fw-semibold"], [1, "text-danger"], ["nz-input", "", "name", "vaiFormNameVi", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vaiFormNameEn", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vaiFormNameZh", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vaiFormNameKo", 3, "ngModelChange", "ngModel"], [1, "row", "g-3"], ["nz-input", "", "name", "vaiFormItemId", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vaiFormShortName", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vaiFormDescription", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vaiFormUnit", 3, "ngModelChange", "ngModel"], [1, "form-label", "fw-semibold", "d-block"], ["name", "vaiFormItemGroupCode", "nzAllowClear", "", "nzShowSearch", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nz-input", "", "name", "vaiFormItemIdMapping", 3, "ngModelChange", "ngModel"], ["name", "vaiFormOrderno", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vaiFormOrdernoSst", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vaiFormActivity", 1, "w-100", 3, "ngModelChange", "ngModel"], [3, "nzValue", "nzLabel"], [1, "mb-1"], [1, "fw-bold", "mb-0"]], template: function ViewArItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "nz-card", 4)(3, "form", 5);
      \u0275\u0275listener("ngSubmit", function ViewArItemComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 6)(5, "label", 7);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewArItemComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchItemNo, $event) || (ctx.searchItemNo = $event);
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
      \u0275\u0275listener("click", function ViewArItemComponent_Template_button_click_15_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(16, "i", 13);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 14)(20, "button", 15);
      \u0275\u0275listener("click", function ViewArItemComponent_Template_button_click_20_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(21, "i", 16);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 17);
      \u0275\u0275listener("click", function ViewArItemComponent_Template_button_click_24_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(25, "i", 18);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(28, "nz-card");
      \u0275\u0275template(29, ViewArItemComponent_nz_alert_29_Template, 1, 1, "nz-alert", 19);
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
      \u0275\u0275elementStart(46, "th", 25);
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "th", 23);
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
      \u0275\u0275elementStart(64, "th", 28);
      \u0275\u0275text(65);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(67, "tbody");
      \u0275\u0275template(68, ViewArItemComponent_tr_68_Template, 4, 4, "tr", 30)(69, ViewArItemComponent_tr_69_Template, 31, 32, "tr", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275template(70, ViewArItemComponent_ng_template_70_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(72, "nz-modal", 32);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275pipe(74, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewArItemComponent_Template_nz_modal_nzOnCancel_72_listener() {
        return ctx.closeModal();
      })("nzOnOk", function ViewArItemComponent_Template_nz_modal_nzOnOk_72_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(75, ViewArItemComponent_ng_container_75_Template, 82, 88, "ng-container", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "nz-modal", 34);
      \u0275\u0275pipe(77, "translate");
      \u0275\u0275pipe(78, "translate");
      \u0275\u0275pipe(79, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewArItemComponent_Template_nz_modal_nzOnCancel_76_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function ViewArItemComponent_Template_nz_modal_nzOnOk_76_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(80, ViewArItemComponent_ng_container_80_Template, 6, 5, "ng-container", 33);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const vaiTable_r9 = \u0275\u0275reference(31);
      const vaiTotalTpl_r10 = \u0275\u0275reference(71);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 38, "arItem.itemCode", "H\u1EA1ng m\u1EE5c"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchItemNo);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 41, "arItem.searchPlaceholder", "Nh\u1EADp m\xE3 h\u1EA1ng m\u1EE5c / t\xEAn"));
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
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", vaiTotalTpl_r10)("nzScroll", \u0275\u0275pureFunction0(104, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 56, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 59, "arItem.itemCode", "M\xE3 h\u1EA1ng m\u1EE5c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 62, "arItem.itemId", "ID"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 65, "arItem.shortName", "T\xEAn vi\u1EBFt t\u1EAFt"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 68, "arItem.description", "M\xF4 t\u1EA3"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 71, "arItem.unit", "\u0110\u01A1n v\u1ECB"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 74, "arItem.itemType", "M\xE3 nh\xF3m"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 77, "common.name", "T\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(60, 80, "common.sortOrder", "S\u1EAFp x\u1EBFp"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(63, 83, "common.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(66, 86, "common.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", vaiTable_r9.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", ctx.modalTitle())("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(73, 89, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(74, 92, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(4);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(77, 95, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(78, 98, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(79, 101, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzInputNumberModule, NzInputNumberComponent, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, NzTagModule, NzTagComponent, TranslatePipe], styles: ["\n.vai-btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=view-ar-item.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewArItemComponent, [{
    type: Component,
    args: [{ selector: "app-view-ar-item", standalone: true, imports: [
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
          <label class="form-label">{{ 'arItem.itemCode' | translate:'H\u1EA1ng m\u1EE5c' }}</label>
          <input nz-input [(ngModel)]="searchItemNo" name="vaiSearchItemNo"
                 [placeholder]="'arItem.searchPlaceholder' | translate:'Nh\u1EADp m\xE3 h\u1EA1ng m\u1EE5c / t\xEAn'">
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
          <button nz-button nzType="default" type="button" class="vai-btn-export" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'essDept.exportExcel' | translate:'Xu\u1EA5t excel' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <!-- nzWidth khai b\xE1o cho t\u1EEBng c\u1ED9t \u0111\u1EC3 \u0111\u1ED3ng b\u1ED9 \u0111\u1ED9 r\u1ED9ng header/body khi d\xF9ng nzScroll. -->
      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="vaiTotalTpl"
                [nzScroll]="{ x: '1400px', y: 'calc(100vh - 420px)' }" #vaiTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th nzWidth="130px">{{ 'arItem.itemCode' | translate:'M\xE3 h\u1EA1ng m\u1EE5c' }}</th>
            <th nzWidth="100px">{{ 'arItem.itemId' | translate:'ID' }}</th>
            <th nzWidth="150px">{{ 'arItem.shortName' | translate:'T\xEAn vi\u1EBFt t\u1EAFt' }}</th>
            <th nzWidth="200px">{{ 'arItem.description' | translate:'M\xF4 t\u1EA3' }}</th>
            <th nzWidth="100px">{{ 'arItem.unit' | translate:'\u0110\u01A1n v\u1ECB' }}</th>
            <th nzWidth="120px">{{ 'arItem.itemType' | translate:'M\xE3 nh\xF3m' }}</th>
            <th nzWidth="180px">{{ 'common.name' | translate:'T\xEAn' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'common.sortOrder' | translate:'S\u1EAFp x\u1EBFp' }}</th>
            <th class="text-center" nzWidth="120px">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'common.action' | translate:'Thao t\xE1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="11" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of vaiTable.data; let i = index">
            <td class="text-center">{{ i + 1 }}</td>
            <td [attr.title]="row.itemNo || null">{{ row.itemNo }}</td>
            <td [attr.title]="row.itemId || null">{{ row.itemId }}</td>
            <td [attr.title]="row.shortName || null">{{ row.shortName }}</td>
            <td [attr.title]="row.description || null">{{ row.description }}</td>
            <td [attr.title]="row.unit || null">{{ row.unit }}</td>
            <td [attr.title]="row.itemGroupCode || null">{{ row.itemGroupCode }}</td>
            <td [attr.title]="row.nameVi || null">{{ row.nameVi }}</td>
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
        <ng-template #vaiTotalTpl let-total>
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
        <input nz-input [(ngModel)]="form.nameVi" name="vaiFormNameVi">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'common.nameEn' | translate:'T\xEAn Ti\u1EBFng Anh' }}</label>
        <input nz-input [(ngModel)]="form.nameEn" name="vaiFormNameEn">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'common.nameZh' | translate:'T\xEAn Ti\u1EBFng Trung' }}</label>
        <input nz-input [(ngModel)]="form.nameZh" name="vaiFormNameZh">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'common.nameKo' | translate:'T\xEAn Ti\u1EBFng H\xE0n' }}</label>
        <input nz-input [(ngModel)]="form.nameKo" name="vaiFormNameKo">
      </div>
    </div>

    <h6 class="mb-3 text-primary border-bottom pb-2">{{ 'arItem.itemInfo' | translate:'Th\xF4ng tin h\u1EA1ng m\u1EE5c' }}</h6>
    <div class="row g-3">
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'arItem.itemId' | translate:'ID h\u1EA1ng m\u1EE5c' }}</label>
        <input nz-input [(ngModel)]="form.itemId" name="vaiFormItemId">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'arItem.shortName' | translate:'T\xEAn vi\u1EBFt t\u1EAFt' }}</label>
        <input nz-input [(ngModel)]="form.shortName" name="vaiFormShortName">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'arItem.description' | translate:'M\xF4 t\u1EA3' }}</label>
        <input nz-input [(ngModel)]="form.description" name="vaiFormDescription">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'arItem.unit' | translate:'\u0110\u01A1n v\u1ECB' }}</label>
        <input nz-input [(ngModel)]="form.unit" name="vaiFormUnit">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold d-block">{{ 'arItem.itemType' | translate:'M\xE3 nh\xF3m d\u1EF1 \xE1n' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.itemGroupCode" name="vaiFormItemGroupCode"
                   nzAllowClear nzShowSearch [nzPlaceHolder]="'common.placeholder.select' | translate:'-- Ch\u1ECDn --'">
          <nz-option *ngFor="let c of itemGroupOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'arItem.idMapping' | translate:'ID Mapping' }}</label>
        <input nz-input [(ngModel)]="form.itemIdMapping" name="vaiFormItemIdMapping">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'common.sortOrder' | translate:'S\u1EAFp x\u1EBFp' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.orderno" name="vaiFormOrderno"></nz-input-number>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'arItem.ordernoSst' | translate:'S\u1EAFp x\u1EBFp SST' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.ordernoSst" name="vaiFormOrdernoSst"></nz-input-number>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold d-block">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.activity" name="vaiFormActivity">
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
    <p class="mb-1">{{ 'arItem.confirmDelete' | translate:'B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a h\u1EA1ng m\u1EE5c n\xE0y kh\xF4ng?' }}</p>
    <p class="fw-bold mb-0">{{ deleteTargetName }}</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-ar-item/view-ar-item.component.css */\n.vai-btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=view-ar-item.component.css.map */\n"] }]
  }], () => [{ type: ViewArItemService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewArItemComponent, { className: "ViewArItemComponent", filePath: "src/app/view-ar-item/view-ar-item.component.ts", lineNumber: 97 });
})();
export {
  ViewArItemComponent
};
//# debugId=d30ec8ac-99a0-5b10-b145-bfe6d1e6d0a3
//# sourceMappingURL=chunk-CGZNLUYV.js.map
