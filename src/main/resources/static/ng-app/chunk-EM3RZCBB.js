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
  NzTreeComponent,
  NzTreeModule
} from "./chunk-PD7KBOBI.js";
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
  NgModel
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
  __spreadProps,
  __spreadValues,
  computed,
  forkJoin,
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
  ɵɵpureFunction1,
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

// src/app/view-menu-param-list/view-menu-param-list.service.ts
var API_BASE = "/sys/api/menu_param";
var ViewMenuParamListService = class _ViewMenuParamListService {
  constructor(http) {
    this.http = http;
  }
  http;
  /** Toàn bộ cây menu hệ thống (dùng chung API với ViewMenuListComponent) để dựng cây bên trái. */
  getMenuTree() {
    return this.http.get("/sys/api/menu/list", { withCredentials: true });
  }
  getCompanies() {
    return this.http.get("/sys/api/company/list", { withCredentials: true });
  }
  list(parentMenuNo, cpnyId) {
    let params = new HttpParams().set("cpnyId", cpnyId);
    if (parentMenuNo)
      params = params.set("parentMenuNo", parentMenuNo);
    return this.http.get(`${API_BASE}/list`, { params, withCredentials: true });
  }
  save(payload) {
    return this.http.post(`${API_BASE}/save`, payload, { withCredentials: true });
  }
  delete(payload) {
    return this.http.post(`${API_BASE}/delete`, payload, { withCredentials: true });
  }
  static \u0275fac = function ViewMenuParamListService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewMenuParamListService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewMenuParamListService, factory: _ViewMenuParamListService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewMenuParamListService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-menu-param-list/view-menu-param-list.component.ts
var _c0 = (a0) => [a0];
var _c1 = () => [];
var _c2 = () => ({ x: "900px", y: "calc(100vh - 460px)" });
function ViewMenuParamListComponent_nz_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 28);
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzValue", c_r2.cpnyId)("nzLabel", ctx_r2.companyLabel(c_r2));
  }
}
function ViewMenuParamListComponent_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "span", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, "sys.basic.viewMenuParamList.selectedParentPrefix", "Danh s\xE1ch Menu con c\u1EE7a:"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedParentLabel());
  }
}
function ViewMenuParamListComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(1, 1, "sys.basic.viewMenuParamList.rightPaneTitle", "Danh s\xE1ch Menu con"));
  }
}
function ViewMenuParamListComponent_nz_alert_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 30);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r2.errorMessage() ?? "");
  }
}
function ViewMenuParamListComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "i", 32);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "sys.basic.viewMenuParamList.msg.selectNodeHint", "Vui l\xF2ng ch\u1ECDn m\u1ED9t menu tr\xEAn c\xE2y b\xEAn tr\xE1i \u0111\u1EC3 xem danh s\xE1ch menu con."), " ");
  }
}
function ViewMenuParamListComponent_nz_table_35_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 42);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewMenuParamListComponent_nz_table_35_tr_29_nz_tag_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-tag", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("nzColor", row_r6.paramActivity === 1 ? "success" : "default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r6.paramActivity === 1 ? \u0275\u0275pipeBind2(2, 2, "common.active", "Ho\u1EA1t \u0111\u1ED9ng") : \u0275\u0275pipeBind2(3, 5, "common.inactive", "Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng"), " ");
  }
}
function ViewMenuParamListComponent_nz_table_35_tr_29_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function ViewMenuParamListComponent_nz_table_35_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 43)(4, "label", 44);
    \u0275\u0275listener("ngModelChange", function ViewMenuParamListComponent_nz_table_35_tr_29_Template_label_ngModelChange_4_listener($event) {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onRowCheckChange(row_r6, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
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
    \u0275\u0275elementStart(11, "td", 43);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 43);
    \u0275\u0275template(14, ViewMenuParamListComponent_nz_table_35_tr_29_nz_tag_14_Template, 4, 8, "nz-tag", 45)(15, ViewMenuParamListComponent_nz_table_35_tr_29_span_15_Template, 2, 0, "span", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 43)(17, "button", 46);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275listener("click", function ViewMenuParamListComponent_nz_table_35_tr_29_Template_button_click_17_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openEditModal(row_r6));
    });
    \u0275\u0275element(19, "i", 47);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r7 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", row_r6.checked)("nzDisabled", !ctx_r2.selectedCompanyId);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.menuCode || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.menuCode);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.nameVi || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.nameVi);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.nameEn || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.nameEn);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.paramOrderNo ?? "-");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r6.paramActivity !== null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r6.paramActivity === null);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !row_r6.assigned)("title", \u0275\u0275pipeBind2(18, 14, "common.edit", "S\u1EEDa"));
  }
}
function ViewMenuParamListComponent_nz_table_35_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r8 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r8, " ");
  }
}
function ViewMenuParamListComponent_nz_table_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-table", 33, 1)(2, "thead")(3, "tr")(4, "th", 34);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 34)(8, "label", 35);
    \u0275\u0275listener("ngModelChange", function ViewMenuParamListComponent_nz_table_35_Template_label_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleSelectAll($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 36);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 37);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 37);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 38);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 38);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th", 39);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "tbody");
    \u0275\u0275template(28, ViewMenuParamListComponent_nz_table_35_tr_28_Template, 4, 4, "tr", 40)(29, ViewMenuParamListComponent_nz_table_35_tr_29_Template, 20, 17, "tr", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, ViewMenuParamListComponent_nz_table_35_ng_template_30_Template, 2, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vmplTable_r9 = \u0275\u0275reference(1);
    const vmplTotalTpl_r10 = \u0275\u0275reference(31);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzData", ctx_r2.rows())("nzLoading", ctx_r2.loadingRows())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx_r2.pageSizeOptions)("nzShowTotal", vmplTotalTpl_r10)("nzScroll", \u0275\u0275pureFunction0(40, _c2));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 19, "common.stt", "STT"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r2.allChecked())("nzIndeterminate", ctx_r2.someChecked())("nzDisabled", !ctx_r2.selectedCompanyId);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 22, "sys.basic.viewMenuList.col.menuCode", "Menu Code"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 25, "sys.basic.viewMenuList.col.nameVi", "T\xEAn TV"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 28, "sys.basic.viewMenuList.col.nameEn", "T\xEAn TA"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 31, "sys.basic.viewMenuParamList.col.paramOrderNo", "Th\u1EE9 t\u1EF1 (Param)"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 34, "common.status", "Tr\u1EA1ng th\xE1i"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 37, "common.action", "Thao t\xE1c"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r2.loadingRows() && ctx_r2.rows().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", vmplTable_r9.data);
  }
}
function ViewMenuParamListComponent_ng_container_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 49)(2, "div", 50)(3, "label", 51);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "nz-input-number", 52);
    \u0275\u0275twoWayListener("ngModelChange", function ViewMenuParamListComponent_ng_container_40_Template_nz_input_number_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.editForm.orderNo, $event) || (ctx_r2.editForm.orderNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 53)(8, "label", 54);
    \u0275\u0275twoWayListener("ngModelChange", function ViewMenuParamListComponent_ng_container_40_Template_label_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.editForm.activity, $event) || (ctx_r2.editForm.activity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 55)(12, "label", 56);
    \u0275\u0275twoWayListener("ngModelChange", function ViewMenuParamListComponent_ng_container_40_Template_label_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.editForm.isCanBeBuild, $event) || (ctx_r2.editForm.isCanBeBuild = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 7, "sys.basic.viewMenuList.label.orderNo", "Th\u1EE9 t\u1EF1"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editForm.orderNo);
    \u0275\u0275property("nzMin", 0);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editForm.activity);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 10, "sys.basic.viewMenuList.label.activity", "Ho\u1EA1t \u0111\u1ED9ng"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editForm.isCanBeBuild);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 13, "sys.basic.viewMenuParamList.label.isCanBeBuild", "Is Can Be Build"), " ");
  }
}
var I18N_KEYS = [
  "common.stt",
  "common.action",
  "common.status",
  "common.active",
  "common.inactive",
  "common.save",
  "common.close",
  "common.edit",
  "common.yes",
  "common.no",
  "common.noData",
  "common.loadFail",
  "common.exportExcel",
  "common.totalRows",
  "sys.basic.viewMenuList.col.menuCode",
  "sys.basic.viewMenuList.col.nameVi",
  "sys.basic.viewMenuList.col.nameEn",
  "sys.basic.viewMenuList.label.orderNo",
  "sys.basic.viewMenuList.label.activity",
  "sys.basic.viewMenuParamList.company",
  "sys.basic.viewMenuParamList.company.placeholder",
  "sys.basic.viewMenuParamList.treeTitle",
  "sys.basic.viewMenuParamList.treeSearchPlaceholder",
  "sys.basic.viewMenuParamList.rightPaneTitle",
  "sys.basic.viewMenuParamList.selectedParentPrefix",
  "sys.basic.viewMenuParamList.msg.selectNodeHint",
  "sys.basic.viewMenuParamList.col.paramOrderNo",
  "sys.basic.viewMenuParamList.msg.selectCompanyFirst",
  "sys.basic.viewMenuParamList.msg.noChanges",
  "sys.basic.viewMenuParamList.msg.updatedPrefix",
  "sys.basic.viewMenuParamList.msg.updatedSuffix",
  "sys.basic.viewMenuParamList.msg.saveListError",
  "sys.basic.viewMenuParamList.msg.selectCompanyExport",
  "sys.basic.viewMenuParamList.modal.editTitle",
  "sys.basic.viewMenuParamList.label.isCanBeBuild",
  "sys.basic.viewMenuParamList.export.colAssigned"
];
var PAGE_SIZE_OPTIONS = [25, 50, 100, 200];
var EMPTY_EDIT_FORM = { menuNo: "", orderNo: 0, activity: true, isCanBeBuild: false };
var ViewMenuParamListComponent = class _ViewMenuParamListComponent {
  constructor(api, i18n, message) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
  }
  api;
  i18n;
  message;
  pageSizeOptions = PAGE_SIZE_OPTIONS;
  companies = signal(
    [],
    ...ngDevMode ? [{ debugName: "companies" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedCompanyId = null;
  treeNodes = signal(
    [],
    ...ngDevMode ? [{ debugName: "treeNodes" }] : (
      /* istanbul ignore next */
      []
    )
  );
  treeSearchValue = "";
  selectedParentMenuNo = null;
  selectedParentLabel = signal(
    null,
    ...ngDevMode ? [{ debugName: "selectedParentLabel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  rows = signal(
    [],
    ...ngDevMode ? [{ debugName: "rows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loadingRows = signal(
    false,
    ...ngDevMode ? [{ debugName: "loadingRows" }] : (
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
  savingList = signal(
    false,
    ...ngDevMode ? [{ debugName: "savingList" }] : (
      /* istanbul ignore next */
      []
    )
  );
  allChecked = computed(
    () => {
      const rows = this.rows();
      return rows.length > 0 && rows.every((r) => r.checked);
    },
    ...ngDevMode ? [{ debugName: "allChecked" }] : (
      /* istanbul ignore next */
      []
    )
  );
  someChecked = computed(
    () => this.rows().some((r) => r.checked) && !this.allChecked(),
    ...ngDevMode ? [{ debugName: "someChecked" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editModalVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "editModalVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editSaving = signal(
    false,
    ...ngDevMode ? [{ debugName: "editSaving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editForm = __spreadValues({}, EMPTY_EDIT_FORM);
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getCompanies().subscribe({
      next: (list) => this.companies.set(list ?? []),
      error: () => this.companies.set([])
    });
    this.api.getMenuTree().subscribe({
      next: (list) => this.treeNodes.set(this.buildMenuTree(list ?? [])),
      error: () => this.treeNodes.set([])
    });
  }
  companyLabel(c) {
    return c.nameVi ? `${c.nameVi} (${c.cpnyId})` : c.cpnyId;
  }
  onCompanyChange() {
    if (this.selectedParentMenuNo)
      this.loadTable();
  }
  onTreeClick(event) {
    const node = event.node;
    if (!node)
      return;
    this.selectedParentMenuNo = String(node.key);
    this.selectedParentLabel.set(node.title ?? null);
    this.loadTable();
  }
  loadTable() {
    if (!this.selectedParentMenuNo) {
      this.rows.set([]);
      return;
    }
    this.loadingRows.set(true);
    this.errorMessage.set(null);
    this.api.list(this.selectedParentMenuNo, this.selectedCompanyId ?? "").subscribe({
      next: (list) => {
        this.rows.set((list ?? []).map((r) => __spreadProps(__spreadValues({}, r), { checked: r.assigned })));
        this.loadingRows.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.rows.set([]);
        this.loadingRows.set(false);
      }
    });
  }
  onRowCheckChange(row, checked) {
    this.rows.update((rows) => rows.map((r) => r.menuNo === row.menuNo ? __spreadProps(__spreadValues({}, r), { checked }) : r));
  }
  toggleSelectAll(checked) {
    this.rows.update((rows) => rows.map((r) => __spreadProps(__spreadValues({}, r), { checked })));
  }
  /** Lưu hàng loạt các dòng đã đổi trạng thái checkbox so với assigned gốc (thêm mới gọi save, bỏ gán
   *  gọi delete) - tương đương vòng lặp Promise.all ở #menuParam_btnSaveList bản gốc. */
  saveList() {
    if (!this.selectedCompanyId) {
      this.message.warning(this.i18n.t("sys.basic.viewMenuParamList.msg.selectCompanyFirst", "Vui l\xF2ng ch\u1ECDn c\xF4ng ty tr\u01B0\u1EDBc"));
      return;
    }
    const changed = this.rows().filter((r) => r.checked !== r.assigned);
    if (changed.length === 0) {
      this.message.info(this.i18n.t("sys.basic.viewMenuParamList.msg.noChanges", "Kh\xF4ng c\xF3 thay \u0111\u1ED5i n\xE0o c\u1EA7n l\u01B0u"));
      return;
    }
    this.savingList.set(true);
    const requests = changed.map((r) => {
      const payload = {
        cpnyId: this.selectedCompanyId,
        menuNo: r.menuNo,
        paramActivity: 1,
        paramOrderNo: 0
      };
      return r.checked ? this.api.save(payload) : this.api.delete(payload);
    });
    forkJoin(requests).subscribe({
      next: () => {
        this.savingList.set(false);
        const prefix = this.i18n.t("sys.basic.viewMenuParamList.msg.updatedPrefix", "C\u1EADp nh\u1EADt th\xE0nh c\xF4ng");
        const suffix = this.i18n.t("sys.basic.viewMenuParamList.msg.updatedSuffix", "m\u1EE5c");
        this.message.success(`${prefix} ${changed.length} ${suffix}`);
        this.loadTable();
      },
      error: () => {
        this.savingList.set(false);
        this.message.error(this.i18n.t("sys.basic.viewMenuParamList.msg.saveListError", "C\xF3 l\u1ED7i x\u1EA3y ra khi l\u01B0u d\u1EEF li\u1EC7u"));
        this.loadTable();
      }
    });
  }
  // ==================== Modal sửa tham số 1 dòng ====================
  openEditModal(row) {
    if (!row.assigned)
      return;
    this.editForm = {
      menuNo: row.menuNo,
      orderNo: row.paramOrderNo ?? 0,
      activity: row.paramActivity !== 0,
      isCanBeBuild: row.isCanBeBuild === "1"
    };
    this.editModalVisible.set(true);
  }
  closeEditModal() {
    this.editModalVisible.set(false);
  }
  saveEditForm() {
    if (!this.selectedCompanyId)
      return;
    const payload = {
      cpnyId: this.selectedCompanyId,
      menuNo: this.editForm.menuNo,
      paramActivity: this.editForm.activity ? 1 : 0,
      paramOrderNo: this.editForm.orderNo,
      isCanBeBuild: this.editForm.isCanBeBuild ? "1" : "0"
    };
    this.editSaving.set(true);
    this.api.save(payload).subscribe({
      next: (res) => {
        this.editSaving.set(false);
        if (res.success) {
          this.editModalVisible.set(false);
          this.message.success(res.message || this.i18n.t("common.save", "L\u01B0u"));
          this.loadTable();
        } else {
          this.message.error(res.message);
        }
      },
      error: () => {
        this.editSaving.set(false);
        this.message.error(this.i18n.t("sys.basic.viewMenuParamList.msg.saveListError", "C\xF3 l\u1ED7i x\u1EA3y ra khi l\u01B0u d\u1EEF li\u1EC7u"));
      }
    });
  }
  // ==================== Xuất Excel ====================
  /** Xuất excel client-side (endpoint /sys/api/menu_param/export cũ thực chất trả .csv nên không dùng
   *  lại - xem giải thích ở đầu file) - dùng thư viện xlsx (SheetJS) để tạo đúng file .xlsx nhị phân. */
  exportExcel() {
    if (!this.selectedCompanyId) {
      this.message.warning(this.i18n.t("sys.basic.viewMenuParamList.msg.selectCompanyExport", "Ch\u1ECDn c\xF4ng ty \u0111\u1EC3 xu\u1EA5t excel"));
      return;
    }
    const yesNo = (v) => v ? this.i18n.t("common.yes", "C\xF3") : this.i18n.t("common.no", "Kh\xF4ng");
    const headers = [
      this.i18n.t("common.stt", "STT"),
      this.i18n.t("sys.basic.viewMenuParamList.export.colAssigned", "\u0110\xE3 g\xE1n"),
      this.i18n.t("sys.basic.viewMenuList.col.menuCode", "Menu Code"),
      this.i18n.t("sys.basic.viewMenuList.col.nameVi", "T\xEAn TV"),
      this.i18n.t("sys.basic.viewMenuList.col.nameEn", "T\xEAn TA"),
      this.i18n.t("sys.basic.viewMenuParamList.col.paramOrderNo", "Th\u1EE9 t\u1EF1 (Param)"),
      this.i18n.t("common.status", "Tr\u1EA1ng th\xE1i")
    ];
    const activeText = this.i18n.t("common.active", "Ho\u1EA1t \u0111\u1ED9ng");
    const inactiveText = this.i18n.t("common.inactive", "Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng");
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      yesNo(r.checked),
      r.menuCode,
      r.nameVi,
      r.nameEn,
      r.paramOrderNo,
      r.paramActivity === 1 ? activeText : r.paramActivity === 0 ? inactiveText : ""
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "DanhSach");
    writeFileSync(workbook, "menu_param_list.xlsx");
  }
  // ==================== Dựng cây menu ====================
  /** Dựng cây phân cấp thật từ danh sách phẳng SY_MENU - giữ đúng logic xử lý node mồ côi của bản gốc
   *  (parent null/rỗng/'ROOT'/không tồn tại trong danh sách -> coi là gốc), chỉ mở rộng sẵn các node
   *  gốc (giống state.opened: parentId === '#' của jstree gốc). */
  buildMenuTree(list) {
    const idSet = new Set(list.map((m) => m.menuNo));
    const map = /* @__PURE__ */ new Map();
    list.forEach((item) => {
      let parent = item.menuParentNo;
      if (!parent || parent === "ROOT" || !idSet.has(parent))
        parent = "#";
      const label = item.nameVi || item.menuCode;
      map.set(item.menuNo, {
        title: item.menuCode ? `${label} (${item.menuCode})` : label,
        key: item.menuNo,
        parent,
        children: []
      });
    });
    const roots = [];
    map.forEach((node) => {
      if (node.parent !== "#" && map.has(node.parent)) {
        map.get(node.parent).children.push(node);
      } else {
        roots.push(node);
      }
    });
    const markLeaf = (nodes, expand) => {
      nodes.forEach((n) => {
        n.isLeaf = !n.children || n.children.length === 0;
        n.expanded = expand;
        if (n.children?.length)
          markLeaf(n.children, false);
      });
    };
    markLeaf(roots, true);
    return roots;
  }
  static \u0275fac = function ViewMenuParamListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewMenuParamListComponent)(\u0275\u0275directiveInject(ViewMenuParamListService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewMenuParamListComponent, selectors: [["app-view-menu-param-list"]], decls: 41, vars: 54, consts: [["noSelTitle", ""], ["vmplTable", ""], ["vmplTotalTpl", ""], [1, "row"], [1, "col-12", "mb-3"], [1, "d-flex", "align-items-center", "gap-3", "flex-wrap"], [1, "form-label", "fw-bold", "fs-6", "mb-0"], ["nzAllowClear", "", "nzShowSearch", "", 1, "vmpl-company-select", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col-md-3", "mb-3"], [3, "nzTitle"], ["nz-input", "", "name", "vmplTreeSearch", 1, "mb-2", 3, "ngModelChange", "ngModel", "placeholder"], [1, "vmpl-tree-scroll"], ["nzSelectMode", "", 3, "nzClick", "nzData", "nzSearchValue", "nzSelectedKeys"], [1, "col-md-9", "mb-3"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3", "flex-wrap", "gap-2"], [1, "fw-bold"], [4, "ngIf", "ngIfElse"], [1, "d-flex", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click", "disabled", "nzLoading"], [1, "bx", "bx-save"], ["nz-button", "", "nzType", "default", "type", "button", 1, "vmpl-btn-export", 3, "click"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], ["class", "p-2 bg-light border text-muted", 4, "ngIf"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll", 4, "ngIf"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [3, "nzValue", "nzLabel"], [1, "text-primary"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], [1, "p-2", "bg-light", "border", "text-muted"], [1, "bx", "bx-info-circle"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel", "nzIndeterminate", "nzDisabled"], ["nzWidth", "140px"], ["nzWidth", "200px"], ["nzWidth", "120px", 1, "text-center"], ["nzWidth", "90px", 1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["colspan", "8", 1, "text-center", "text-muted"], [1, "text-center"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel", "nzDisabled"], [3, "nzColor", 4, "ngIf"], ["nz-button", "", "nzType", "text", "nzSize", "small", 3, "click", "disabled", "title"], [1, "bx", "bx-edit", "text-warning"], [3, "nzColor"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label", "fw-semibold"], ["name", "vmplEditOrderNo", 1, "w-100", 3, "ngModelChange", "ngModel", "nzMin"], [1, "col-md-6", "d-flex", "align-items-end"], ["nz-checkbox", "", "name", "vmplEditActivity", 3, "ngModelChange", "ngModel"], [1, "col-12"], ["nz-checkbox", "", "name", "vmplEditIsCanBeBuild", 3, "ngModelChange", "ngModel"]], template: function ViewMenuParamListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "nz-card")(3, "div", 5)(4, "label", 6);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "nz-select", 7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewMenuParamListComponent_Template_nz_select_ngModelChange_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedCompanyId, $event) || (ctx.selectedCompanyId = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function ViewMenuParamListComponent_Template_nz_select_ngModelChange_7_listener() {
        return ctx.onCompanyChange();
      });
      \u0275\u0275template(9, ViewMenuParamListComponent_nz_option_9_Template, 1, 2, "nz-option", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 9)(11, "nz-card", 10);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementStart(13, "input", 11);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewMenuParamListComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.treeSearchValue, $event) || (ctx.treeSearchValue = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(15, "div", 12)(16, "nz-tree", 13);
      \u0275\u0275listener("nzClick", function ViewMenuParamListComponent_Template_nz_tree_nzClick_16_listener($event) {
        return ctx.onTreeClick($event);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "div", 14)(18, "nz-card")(19, "div", 15)(20, "span", 16);
      \u0275\u0275template(21, ViewMenuParamListComponent_ng_container_21_Template, 5, 5, "ng-container", 17)(22, ViewMenuParamListComponent_ng_template_22_Template, 2, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 18)(25, "button", 19);
      \u0275\u0275listener("click", function ViewMenuParamListComponent_Template_button_click_25_listener() {
        return ctx.saveList();
      });
      \u0275\u0275element(26, "i", 20);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "button", 21);
      \u0275\u0275listener("click", function ViewMenuParamListComponent_Template_button_click_29_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(30, "i", 22);
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(33, ViewMenuParamListComponent_nz_alert_33_Template, 1, 1, "nz-alert", 23)(34, ViewMenuParamListComponent_div_34_Template, 4, 4, "div", 24)(35, ViewMenuParamListComponent_nz_table_35_Template, 32, 41, "nz-table", 25);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(36, "nz-modal", 26);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewMenuParamListComponent_Template_nz_modal_nzOnCancel_36_listener() {
        return ctx.closeEditModal();
      })("nzOnOk", function ViewMenuParamListComponent_Template_nz_modal_nzOnOk_36_listener() {
        return ctx.saveEditForm();
      });
      \u0275\u0275template(40, ViewMenuParamListComponent_ng_container_40_Template, 15, 16, "ng-container", 27);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const noSelTitle_r12 = \u0275\u0275reference(23);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(6, 24, "sys.basic.viewMenuParamList.company", "C\xF4ng ty (Company)"), ":");
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedCompanyId);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(8, 27, "sys.basic.viewMenuParamList.company.placeholder", "-- Ch\u1ECDn c\xF4ng ty --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.companies());
      \u0275\u0275advance(2);
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(12, 30, "sys.basic.viewMenuParamList.treeTitle", "Danh s\xE1ch Menu System"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.treeSearchValue);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(14, 33, "sys.basic.viewMenuParamList.treeSearchPlaceholder", "T\xECm ki\u1EBFm..."));
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275property("nzData", ctx.treeNodes())("nzSearchValue", ctx.treeSearchValue)("nzSelectedKeys", ctx.selectedParentMenuNo ? \u0275\u0275pureFunction1(51, _c0, ctx.selectedParentMenuNo) : \u0275\u0275pureFunction0(53, _c1));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.selectedParentLabel())("ngIfElse", noSelTitle_r12);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", !ctx.selectedCompanyId || ctx.rows().length === 0)("nzLoading", ctx.savingList());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(28, 36, "common.save", "L\u01B0u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(32, 39, "common.exportExcel", "Xu\u1EA5t Excel"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.selectedParentMenuNo);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedParentMenuNo);
      \u0275\u0275advance();
      \u0275\u0275property("nzVisible", ctx.editModalVisible())("nzTitle", \u0275\u0275pipeBind2(37, 42, "sys.basic.viewMenuParamList.modal.editTitle", "C\u1EADp nh\u1EADt tham s\u1ED1 Menu"))("nzOkLoading", ctx.editSaving())("nzOkText", \u0275\u0275pipeBind2(38, 45, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(39, 48, "common.close", "\u0110\xF3ng"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzInputNumberModule, NzInputNumberComponent, NzSelectModule, NzOptionComponent, NzSelectComponent, NzCheckboxModule, NzCheckboxComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, NzTagModule, NzTagComponent, NzTreeModule, NzTreeComponent, TranslatePipe], styles: ["\n.vmpl-btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n.vmpl-company-select[_ngcontent-%COMP%] {\n  min-width: 320px;\n}\n.vmpl-tree-scroll[_ngcontent-%COMP%] {\n  max-height: 700px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=view-menu-param-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewMenuParamListComponent, [{
    type: Component,
    args: [{ selector: "app-view-menu-param-list", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzInputNumberModule,
      NzSelectModule,
      NzCheckboxModule,
      NzButtonModule,
      NzModalModule,
      NzAlertModule,
      NzTagModule,
      NzTreeModule,
      TranslatePipe
    ], template: `<div class="row">
  <!-- Ch\u1ECDn c\xF4ng ty -->
  <div class="col-12 mb-3">
    <nz-card>
      <div class="d-flex align-items-center gap-3 flex-wrap">
        <label class="form-label fw-bold fs-6 mb-0">{{ 'sys.basic.viewMenuParamList.company' | translate:'C\xF4ng ty (Company)' }}:</label>
        <nz-select class="vmpl-company-select" [(ngModel)]="selectedCompanyId" (ngModelChange)="onCompanyChange()"
                   nzAllowClear nzShowSearch
                   [nzPlaceHolder]="'sys.basic.viewMenuParamList.company.placeholder' | translate:'-- Ch\u1ECDn c\xF4ng ty --'">
          <nz-option *ngFor="let c of companies()" [nzValue]="c.cpnyId" [nzLabel]="companyLabel(c)"></nz-option>
        </nz-select>
      </div>
    </nz-card>
  </div>

  <!-- C\xE2y menu h\u1EC7 th\u1ED1ng b\xEAn tr\xE1i -->
  <div class="col-md-3 mb-3">
    <nz-card [nzTitle]="'sys.basic.viewMenuParamList.treeTitle' | translate:'Danh s\xE1ch Menu System'">
      <input nz-input class="mb-2" [(ngModel)]="treeSearchValue" name="vmplTreeSearch"
             [placeholder]="'sys.basic.viewMenuParamList.treeSearchPlaceholder' | translate:'T\xECm ki\u1EBFm...'">
      <div class="vmpl-tree-scroll">
        <nz-tree [nzData]="treeNodes()" [nzSearchValue]="treeSearchValue" nzSelectMode
                 [nzSelectedKeys]="selectedParentMenuNo ? [selectedParentMenuNo] : []"
                 (nzClick)="onTreeClick($event)"></nz-tree>
      </div>
    </nz-card>
  </div>

  <!-- Danh s\xE1ch menu con b\xEAn ph\u1EA3i -->
  <div class="col-md-9 mb-3">
    <nz-card>
      <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <span class="fw-bold">
          <ng-container *ngIf="selectedParentLabel(); else noSelTitle">
            {{ 'sys.basic.viewMenuParamList.selectedParentPrefix' | translate:'Danh s\xE1ch Menu con c\u1EE7a:' }}
            <span class="text-primary">{{ selectedParentLabel() }}</span>
          </ng-container>
          <ng-template #noSelTitle>{{ 'sys.basic.viewMenuParamList.rightPaneTitle' | translate:'Danh s\xE1ch Menu con' }}</ng-template>
        </span>
        <div class="d-flex gap-2 flex-wrap">
          <button nz-button nzType="primary" type="button" [disabled]="!selectedCompanyId || rows().length === 0"
                  [nzLoading]="savingList()" (click)="saveList()">
            <i class="bx bx-save"></i> {{ 'common.save' | translate:'L\u01B0u' }}
          </button>
          <button nz-button nzType="default" type="button" class="vmpl-btn-export" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'common.exportExcel' | translate:'Xu\u1EA5t Excel' }}
          </button>
        </div>
      </div>

      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <div *ngIf="!selectedParentMenuNo" class="p-2 bg-light border text-muted">
        <i class="bx bx-info-circle"></i> {{ 'sys.basic.viewMenuParamList.msg.selectNodeHint' | translate:'Vui l\xF2ng ch\u1ECDn m\u1ED9t menu tr\xEAn c\xE2y b\xEAn tr\xE1i \u0111\u1EC3 xem danh s\xE1ch menu con.' }}
      </div>

      <nz-table *ngIf="selectedParentMenuNo" [nzData]="rows()" [nzLoading]="loadingRows()" [nzPageSize]="25"
                [nzShowSizeChanger]="true" [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="vmplTotalTpl"
                [nzScroll]="{ x: '900px', y: 'calc(100vh - 460px)' }" #vmplTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th class="text-center" nzWidth="60px">
              <label nz-checkbox [ngModel]="allChecked()" [nzIndeterminate]="someChecked()"
                     [nzDisabled]="!selectedCompanyId" (ngModelChange)="toggleSelectAll($event)"></label>
            </th>
            <th nzWidth="140px">{{ 'sys.basic.viewMenuList.col.menuCode' | translate:'Menu Code' }}</th>
            <th nzWidth="200px">{{ 'sys.basic.viewMenuList.col.nameVi' | translate:'T\xEAn TV' }}</th>
            <th nzWidth="200px">{{ 'sys.basic.viewMenuList.col.nameEn' | translate:'T\xEAn TA' }}</th>
            <th class="text-center" nzWidth="120px">{{ 'sys.basic.viewMenuParamList.col.paramOrderNo' | translate:'Th\u1EE9 t\u1EF1 (Param)' }}</th>
            <th class="text-center" nzWidth="120px">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'common.action' | translate:'Thao t\xE1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loadingRows() && rows().length === 0">
            <td colspan="8" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of vmplTable.data; let i = index">
            <td class="text-center">{{ i + 1 }}</td>
            <td class="text-center">
              <label nz-checkbox [ngModel]="row.checked" [nzDisabled]="!selectedCompanyId"
                     (ngModelChange)="onRowCheckChange(row, $event)"></label>
            </td>
            <td [attr.title]="row.menuCode || null">{{ row.menuCode }}</td>
            <td [attr.title]="row.nameVi || null">{{ row.nameVi }}</td>
            <td [attr.title]="row.nameEn || null">{{ row.nameEn }}</td>
            <td class="text-center">{{ row.paramOrderNo ?? '-' }}</td>
            <td class="text-center">
              <nz-tag *ngIf="row.paramActivity !== null" [nzColor]="row.paramActivity === 1 ? 'success' : 'default'">
                {{ row.paramActivity === 1 ? ('common.active' | translate:'Ho\u1EA1t \u0111\u1ED9ng') : ('common.inactive' | translate:'Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng') }}
              </nz-tag>
              <span *ngIf="row.paramActivity === null">-</span>
            </td>
            <td class="text-center">
              <button nz-button nzType="text" nzSize="small" [disabled]="!row.assigned"
                      [title]="'common.edit' | translate:'S\u1EEDa'" (click)="openEditModal(row)">
                <i class="bx bx-edit text-warning"></i>
              </button>
            </td>
          </tr>
        </tbody>
        <ng-template #vmplTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal c\u1EADp nh\u1EADt tham s\u1ED1 Menu -->
<nz-modal [nzVisible]="editModalVisible()" [nzTitle]="'sys.basic.viewMenuParamList.modal.editTitle' | translate:'C\u1EADp nh\u1EADt tham s\u1ED1 Menu'"
          (nzOnCancel)="closeEditModal()" (nzOnOk)="saveEditForm()" [nzOkLoading]="editSaving()"
          [nzOkText]="'common.save' | translate:'L\u01B0u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <div class="row g-3">
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'sys.basic.viewMenuList.label.orderNo' | translate:'Th\u1EE9 t\u1EF1' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="editForm.orderNo" name="vmplEditOrderNo" [nzMin]="0"></nz-input-number>
      </div>
      <div class="col-md-6 d-flex align-items-end">
        <label nz-checkbox [(ngModel)]="editForm.activity" name="vmplEditActivity">
          {{ 'sys.basic.viewMenuList.label.activity' | translate:'Ho\u1EA1t \u0111\u1ED9ng' }}
        </label>
      </div>
      <div class="col-12">
        <label nz-checkbox [(ngModel)]="editForm.isCanBeBuild" name="vmplEditIsCanBeBuild">
          {{ 'sys.basic.viewMenuParamList.label.isCanBeBuild' | translate:'Is Can Be Build' }}
        </label>
      </div>
    </div>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-menu-param-list/view-menu-param-list.component.css */\n.vmpl-btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n.vmpl-company-select {\n  min-width: 320px;\n}\n.vmpl-tree-scroll {\n  max-height: 700px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=view-menu-param-list.component.css.map */\n"] }]
  }], () => [{ type: ViewMenuParamListService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewMenuParamListComponent, { className: "ViewMenuParamListComponent", filePath: "src/app/view-menu-param-list/view-menu-param-list.component.ts", lineNumber: 101 });
})();
export {
  ViewMenuParamListComponent
};
//# debugId=28db21b2-6a15-551d-88a9-01aeb3ffc8b4
//# sourceMappingURL=chunk-EM3RZCBB.js.map
