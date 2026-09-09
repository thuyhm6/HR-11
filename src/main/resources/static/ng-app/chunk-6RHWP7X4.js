import {
  NzInputNumberComponent,
  NzInputNumberModule
} from "./chunk-IXCMIWQQ.js";
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

// src/app/view-code-manage/view-code-manage.service.ts
var API_BASE = "/sys/api/code";
var ViewCodeManageService = class _ViewCodeManageService {
  constructor(http) {
    this.http = http;
  }
  http;
  /** Toàn bộ cây code (đã lọc theo công ty đăng nhập ở backend qua SY_CODE_PARAM) để dựng cây bên trái. */
  getTree() {
    return this.http.get(`${API_BASE}/tree`, { withCredentials: true });
  }
  /** Danh sách mã con của 1 node - parentCodeNo rỗng nghĩa là lấy các mã gốc (BE tự hiểu thành 'ROOT'). */
  list(parentCodeNo) {
    let params = new HttpParams();
    if (parentCodeNo)
      params = params.set("parentCodeNo", parentCodeNo);
    return this.http.get(`${API_BASE}/list`, { params, withCredentials: true });
  }
  save(payload) {
    return this.http.post(`${API_BASE}/save`, payload, { withCredentials: true });
  }
  delete(codeNo) {
    const params = new HttpParams().set("codeNo", codeNo);
    return this.http.post(`${API_BASE}/delete`, null, { params, withCredentials: true });
  }
  static \u0275fac = function ViewCodeManageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewCodeManageService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewCodeManageService, factory: _ViewCodeManageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewCodeManageService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-code-manage/view-code-manage.component.ts
var _c0 = (a0) => [a0];
var _c1 = () => [];
var _c2 = () => ({ x: "900px", y: "calc(100vh - 420px)" });
function ViewCodeManageComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "span", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, "sys.basic.viewCodeManage.selectedParentPrefix", "Danh s\xE1ch m\xE3 con c\u1EE7a:"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedParentLabel());
  }
}
function ViewCodeManageComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(1, 1, "sys.basic.viewCodeManage.rightPaneTitle", "Danh s\xE1ch m\xE3 con"));
  }
}
function ViewCodeManageComponent_nz_alert_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 31);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ViewCodeManageComponent_tr_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 32);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewCodeManageComponent_tr_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 33);
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
    \u0275\u0275elementStart(13, "td", 33);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 33)(16, "button", 34);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275listener("click", function ViewCodeManageComponent_tr_55_Template_button_click_16_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditModal(row_r4));
    });
    \u0275\u0275element(18, "i", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 34);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275listener("click", function ViewCodeManageComponent_tr_55_Template_button_click_19_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDeleteConfirm(row_r4));
    });
    \u0275\u0275element(21, "i", 36);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r5 + 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.codeNo || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.codeNo);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.nameVi || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.nameVi);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.nameEn || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.nameEn);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.nameZh || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.nameZh);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.nameKo || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.nameKo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.orderNo);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(17, 14, "common.edit", "S\u1EEDa"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(20, 17, "common.delete", "X\xF3a"));
  }
}
function ViewCodeManageComponent_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r6 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r6, " ");
  }
}
function ViewCodeManageComponent_ng_container_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 37)(2, "div", 38)(3, "label", 39);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span", 40);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "input", 41);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 38)(11, "label", 39);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 42);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 38)(16, "label", 39);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementStart(19, "span", 40);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "input", 43);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCodeManageComponent_ng_container_61_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nameVi, $event) || (ctx_r1.form.nameVi = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 38)(23, "label", 39);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCodeManageComponent_ng_container_61_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nameEn, $event) || (ctx_r1.form.nameEn = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 38)(28, "label", 39);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCodeManageComponent_ng_container_61_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nameZh, $event) || (ctx_r1.form.nameZh = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 38)(33, "label", 39);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCodeManageComponent_ng_container_61_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nameKo, $event) || (ctx_r1.form.nameKo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 38)(38, "label", 39);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "nz-input-number", 47);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCodeManageComponent_ng_container_61_Template_nz_input_number_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.orderNo, $event) || (ctx_r1.form.orderNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 38)(43, "label", 39);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "input", 48);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCodeManageComponent_ng_container_61_Template_input_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.description, $event) || (ctx_r1.form.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 49)(48, "label", 50);
    \u0275\u0275twoWayListener("ngModelChange", function ViewCodeManageComponent_ng_container_61_Template_label_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.activity, $event) || (ctx_r1.form.activity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 20, "sys.basic.viewCodeManage.label.codeNo", "M\xE3 Code"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.form.codeNo)("placeholder", \u0275\u0275pipeBind2(9, 23, "sys.basic.viewCodeManage.label.codeNo.placeholder", "T\u1EF1 \u0111\u1ED9ng sinh"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 26, "sys.basic.viewCodeManage.label.parentCodeNo", "M\xE3 Cha"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.parentCodeNo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(18, 29, "sys.basic.viewMenuList.label.nameVi", "T\xEAn Ti\u1EBFng Vi\u1EC7t"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nameVi);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 32, "sys.basic.viewMenuList.label.nameEn", "T\xEAn Ti\u1EBFng Anh"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nameEn);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 35, "sys.basic.viewMenuList.label.nameZh", "T\xEAn Ti\u1EBFng Trung"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nameZh);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 38, "sys.basic.viewMenuList.label.nameKo", "T\xEAn Ti\u1EBFng H\xE0n"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nameKo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 41, "sys.basic.viewMenuList.label.orderNo", "Th\u1EE9 t\u1EF1"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.orderNo);
    \u0275\u0275property("nzMin", 0);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 44, "sys.basic.viewCodeManage.label.description", "M\xF4 t\u1EA3"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.description);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.activity);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(50, 47, "sys.basic.viewMenuList.label.activity", "Ho\u1EA1t \u0111\u1ED9ng"), " ");
  }
}
function ViewCodeManageComponent_ng_container_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 51);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 52);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "sys.basic.viewCodeManage.msg.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a m\xE3 code n\xE0y?"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.deleteTargetName);
  }
}
var I18N_KEYS = [
  "common.stt",
  "common.action",
  "common.addNew",
  "common.exportExcel",
  "common.save",
  "common.close",
  "common.edit",
  "common.delete",
  "common.confirm",
  "common.cancel",
  "common.noData",
  "common.totalRows",
  "common.loadFail",
  "common.saveSuccess",
  "common.saveFail",
  "common.deleteSuccess",
  "common.deleteFail",
  "sys.basic.viewMenuList.label.nameVi",
  "sys.basic.viewMenuList.label.nameEn",
  "sys.basic.viewMenuList.label.nameZh",
  "sys.basic.viewMenuList.label.nameKo",
  "sys.basic.viewMenuList.label.orderNo",
  "sys.basic.viewMenuList.label.activity",
  "sys.basic.viewMenuList.col.nameVi",
  "sys.basic.viewMenuList.col.nameEn",
  "sys.basic.viewMenuParamList.treeSearchPlaceholder",
  "sys.basic.viewCodeManage.treeTitle",
  "sys.basic.viewCodeManage.rightPaneTitle",
  "sys.basic.viewCodeManage.selectedParentPrefix",
  "sys.basic.viewCodeManage.modal.addTitle",
  "sys.basic.viewCodeManage.modal.editTitle",
  "sys.basic.viewCodeManage.label.codeNo",
  "sys.basic.viewCodeManage.label.codeNo.placeholder",
  "sys.basic.viewCodeManage.label.parentCodeNo",
  "sys.basic.viewCodeManage.label.description",
  "sys.basic.viewCodeManage.msg.confirmDelete",
  "sys.basic.viewCodeManage.col.codeNo",
  "sys.basic.viewCodeManage.col.nameZh",
  "sys.basic.viewCodeManage.col.nameKo"
];
var PAGE_SIZE_OPTIONS = [25, 50, 100, 200];
var EMPTY_FORM = {
  codeNo: null,
  parentCodeNo: "",
  nameVi: "",
  nameEn: "",
  nameZh: "",
  nameKo: "",
  orderNo: 0,
  description: "",
  activity: true
};
var ViewCodeManageComponent = class _ViewCodeManageComponent {
  constructor(api, i18n, message) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
  }
  api;
  i18n;
  message;
  pageSizeOptions = PAGE_SIZE_OPTIONS;
  treeNodes = signal(
    [],
    ...ngDevMode ? [{ debugName: "treeNodes" }] : (
      /* istanbul ignore next */
      []
    )
  );
  treeSearchValue = "";
  selectedParentCodeNo = "";
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
    () => this.isNew() ? this.i18n.t("sys.basic.viewCodeManage.modal.addTitle", "Th\xEAm m\u1EDBi Code") : this.i18n.t("sys.basic.viewCodeManage.modal.editTitle", "C\u1EADp nh\u1EADt Code"),
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
    this.api.getTree().subscribe({
      next: (list) => this.treeNodes.set(this.buildCodeTree(list ?? [])),
      error: () => this.treeNodes.set([])
    });
    this.loadTable();
  }
  onTreeClick(event) {
    const node = event.node;
    if (!node)
      return;
    this.selectedParentCodeNo = String(node.key);
    this.selectedParentLabel.set(node.title ?? null);
    this.loadTable();
  }
  loadTable() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.list(this.selectedParentCodeNo).subscribe({
      next: (list) => {
        this.rows.set(list ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.rows.set([]);
        this.loading.set(false);
      }
    });
  }
  // ==================== Modal Thêm mới / Cập nhật ====================
  openAddModal() {
    this.isNew.set(true);
    this.form = __spreadProps(__spreadValues({}, EMPTY_FORM), { parentCodeNo: this.selectedParentCodeNo });
    this.modalVisible.set(true);
  }
  openEditModal(row) {
    this.isNew.set(false);
    this.form = {
      codeNo: row.codeNo,
      parentCodeNo: row.parentCodeNo || "",
      nameVi: row.nameVi || "",
      nameEn: row.nameEn || "",
      nameZh: row.nameZh || "",
      nameKo: row.nameKo || "",
      orderNo: row.orderNo ?? 0,
      description: row.description || "",
      activity: row.activity !== "0"
    };
    this.modalVisible.set(true);
  }
  closeModal() {
    this.modalVisible.set(false);
  }
  saveForm() {
    if (!this.form.nameVi) {
      this.message.warning(this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!"));
      return;
    }
    const payload = {
      codeNo: this.form.codeNo,
      parentCodeNo: this.form.parentCodeNo || null,
      nameVi: this.form.nameVi,
      nameEn: this.form.nameEn || null,
      nameZh: this.form.nameZh || null,
      nameKo: this.form.nameKo || null,
      orderNo: this.form.orderNo,
      description: this.form.description || null,
      activity: this.form.activity ? "1" : "0"
    };
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        if (res.success) {
          this.modalVisible.set(false);
          this.message.success(res.message || this.i18n.t("common.saveSuccess", "L\u01B0u th\xE0nh c\xF4ng!"));
          this.loadTable();
          if (this.isNew()) {
            this.api.getTree().subscribe((list) => this.treeNodes.set(this.buildCodeTree(list ?? [])));
          }
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
    return this.deleteTarget ? `${this.deleteTarget.codeNo} - ${this.deleteTarget.nameVi ?? ""}` : "";
  }
  confirmDelete() {
    if (!this.deleteTarget?.codeNo)
      return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.codeNo).subscribe({
      next: (res) => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        if (res.success) {
          this.message.success(res.message || this.i18n.t("common.deleteSuccess", "X\xF3a th\xE0nh c\xF4ng!"));
          this.loadTable();
          this.api.getTree().subscribe((list) => this.treeNodes.set(this.buildCodeTree(list ?? [])));
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
  /** Xuất excel client-side (endpoint /sys/api/code/export cũ thực chất trả .csv nên không dùng lại -
   *  xem giải thích ở đầu file) - dùng thư viện xlsx (SheetJS) để tạo đúng file .xlsx nhị phân. */
  exportExcel() {
    const headers = [
      this.i18n.t("common.stt", "STT"),
      this.i18n.t("sys.basic.viewCodeManage.col.codeNo", "M\xE3 Code"),
      this.i18n.t("sys.basic.viewMenuList.col.nameVi", "T\xEAn TV"),
      this.i18n.t("sys.basic.viewMenuList.col.nameEn", "T\xEAn TA"),
      this.i18n.t("sys.basic.viewCodeManage.col.nameZh", "T\xEAn TT"),
      this.i18n.t("sys.basic.viewCodeManage.col.nameKo", "T\xEAn TH"),
      this.i18n.t("sys.basic.viewMenuList.label.orderNo", "Th\u1EE9 t\u1EF1")
    ];
    const dataRows = this.rows().map((r, i) => [i + 1, r.codeNo, r.nameVi, r.nameEn, r.nameZh, r.nameKo, r.orderNo]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "DanhSach");
    writeFileSync(workbook, "code_list.xlsx");
  }
  // ==================== Dựng cây code ====================
  /** Dựng cây phân cấp thật từ danh sách phẳng SY_CODE - node gốc có PARENT_CODE_NO = '0' theo đúng
   *  quy ước BE (khác node mồ côi null/rỗng của ViewMenuParamListComponent), giữ đúng logic bản gốc chỉ
   *  mở sẵn cây ở trạng thái đóng hết (state.opened: false) - không tự mở node nào. */
  buildCodeTree(list) {
    const idSet = new Set(list.map((c) => c.codeNo));
    const map = /* @__PURE__ */ new Map();
    list.forEach((item) => {
      let parent = item.parentCodeNo;
      if (!parent || parent === "0" || parent === "ROOT" || !idSet.has(parent))
        parent = "#";
      map.set(item.codeNo, {
        title: item.nameVi || item.codeNo,
        key: item.codeNo,
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
  static \u0275fac = function ViewCodeManageComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewCodeManageComponent)(\u0275\u0275directiveInject(ViewCodeManageService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewCodeManageComponent, selectors: [["app-view-code-manage"]], decls: 67, vars: 93, consts: [["noSelTitle", ""], ["vcmTable", ""], ["vcmTotalTpl", ""], [1, "row"], [1, "col-md-3", "mb-3"], [3, "nzTitle"], ["nz-input", "", "name", "vcmTreeSearch", 1, "mb-2", 3, "ngModelChange", "ngModel", "placeholder"], [1, "vcm-tree-scroll"], ["nzSelectMode", "", 3, "nzClick", "nzData", "nzSearchValue", "nzSelectedKeys"], [1, "col-md-9", "mb-3"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3", "flex-wrap", "gap-2"], [1, "fw-bold"], [4, "ngIf", "ngIfElse"], [1, "d-flex", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzType", "default", "type", "button", 1, "vcm-btn-export", 3, "click"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "120px"], ["nzWidth", "200px"], ["nzWidth", "160px"], ["nzWidth", "90px", 1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["nzWidth", "700px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [1, "text-primary"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "8", 1, "text-center", "text-muted"], [1, "text-center"], ["nz-button", "", "nzType", "text", "nzSize", "small", 3, "click", "title"], [1, "bx", "bx-edit", "text-warning"], [1, "bx", "bx-trash", "text-danger"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label", "fw-semibold"], [1, "text-danger"], ["nz-input", "", "name", "vcmCodeNo", "readonly", "", 3, "ngModel", "placeholder"], ["nz-input", "", "name", "vcmParentCodeNo", "readonly", "", 3, "ngModel"], ["nz-input", "", "name", "vcmNameVi", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vcmNameEn", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vcmNameZh", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vcmNameKo", 3, "ngModelChange", "ngModel"], ["name", "vcmOrderNo", 1, "w-100", 3, "ngModelChange", "ngModel", "nzMin"], ["nz-input", "", "name", "vcmDescription", 3, "ngModelChange", "ngModel"], [1, "col-12"], ["nz-checkbox", "", "name", "vcmActivity", 3, "ngModelChange", "ngModel"], [1, "mb-1"], [1, "fw-bold", "mb-0"]], template: function ViewCodeManageComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "nz-card", 5);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementStart(4, "input", 6);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewCodeManageComponent_Template_input_ngModelChange_4_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.treeSearchValue, $event) || (ctx.treeSearchValue = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(6, "div", 7)(7, "nz-tree", 8);
      \u0275\u0275listener("nzClick", function ViewCodeManageComponent_Template_nz_tree_nzClick_7_listener($event) {
        return ctx.onTreeClick($event);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(8, "div", 9)(9, "nz-card")(10, "div", 10)(11, "span", 11);
      \u0275\u0275template(12, ViewCodeManageComponent_ng_container_12_Template, 5, 5, "ng-container", 12)(13, ViewCodeManageComponent_ng_template_13_Template, 2, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 13)(16, "button", 14);
      \u0275\u0275listener("click", function ViewCodeManageComponent_Template_button_click_16_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(17, "i", 15);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "button", 16);
      \u0275\u0275listener("click", function ViewCodeManageComponent_Template_button_click_20_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(21, "i", 17);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(24, ViewCodeManageComponent_nz_alert_24_Template, 1, 1, "nz-alert", 18);
      \u0275\u0275elementStart(25, "nz-table", 19, 1)(27, "thead")(28, "tr")(29, "th", 20);
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th", 21);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "th", 22);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "th", 22);
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "th", 23);
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "th", 23);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "th", 24);
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "th", 24);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "tbody");
      \u0275\u0275template(54, ViewCodeManageComponent_tr_54_Template, 4, 4, "tr", 25)(55, ViewCodeManageComponent_tr_55_Template, 22, 20, "tr", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275template(56, ViewCodeManageComponent_ng_template_56_Template, 2, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(58, "nz-modal", 27);
      \u0275\u0275pipe(59, "translate");
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewCodeManageComponent_Template_nz_modal_nzOnCancel_58_listener() {
        return ctx.closeModal();
      })("nzOnOk", function ViewCodeManageComponent_Template_nz_modal_nzOnOk_58_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(61, ViewCodeManageComponent_ng_container_61_Template, 51, 50, "ng-container", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "nz-modal", 29);
      \u0275\u0275pipe(63, "translate");
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275pipe(65, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewCodeManageComponent_Template_nz_modal_nzOnCancel_62_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function ViewCodeManageComponent_Template_nz_modal_nzOnOk_62_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(66, ViewCodeManageComponent_ng_container_66_Template, 6, 5, "ng-container", 28);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const noSelTitle_r8 = \u0275\u0275reference(14);
      const vcmTable_r9 = \u0275\u0275reference(26);
      const vcmTotalTpl_r10 = \u0275\u0275reference(57);
      \u0275\u0275advance(2);
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(3, 38, "sys.basic.viewCodeManage.treeTitle", "Danh s\xE1ch Code"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.treeSearchValue);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(5, 41, "sys.basic.viewMenuParamList.treeSearchPlaceholder", "T\xECm ki\u1EBFm..."));
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275property("nzData", ctx.treeNodes())("nzSearchValue", ctx.treeSearchValue)("nzSelectedKeys", ctx.selectedParentCodeNo ? \u0275\u0275pureFunction1(89, _c0, ctx.selectedParentCodeNo) : \u0275\u0275pureFunction0(91, _c1));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.selectedParentLabel())("ngIfElse", noSelTitle_r8);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(19, 44, "common.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(23, 47, "common.exportExcel", "Xu\u1EA5t Excel"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", vcmTotalTpl_r10)("nzScroll", \u0275\u0275pureFunction0(92, _c2));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 50, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 53, "sys.basic.viewCodeManage.col.codeNo", "M\xE3 Code"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 56, "sys.basic.viewMenuList.col.nameVi", "T\xEAn TV"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 59, "sys.basic.viewMenuList.col.nameEn", "T\xEAn TA"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 62, "sys.basic.viewCodeManage.col.nameZh", "T\xEAn TT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 65, "sys.basic.viewCodeManage.col.nameKo", "T\xEAn TH"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 68, "sys.basic.viewMenuList.label.orderNo", "Th\u1EE9 t\u1EF1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(52, 71, "common.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", vcmTable_r9.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", ctx.modalTitle())("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(59, 74, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(60, 77, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(4);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(63, 80, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(64, 83, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(65, 86, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzInputNumberModule, NzInputNumberComponent, NzCheckboxModule, NzCheckboxComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, NzTreeModule, NzTreeComponent, TranslatePipe], styles: ["\n.vcm-btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n.vcm-tree-scroll[_ngcontent-%COMP%] {\n  max-height: 700px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=view-code-manage.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewCodeManageComponent, [{
    type: Component,
    args: [{ selector: "app-view-code-manage", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzInputNumberModule,
      NzCheckboxModule,
      NzButtonModule,
      NzModalModule,
      NzAlertModule,
      NzTreeModule,
      TranslatePipe
    ], template: `<div class="row">
  <!-- C\xE2y code b\xEAn tr\xE1i -->
  <div class="col-md-3 mb-3">
    <nz-card [nzTitle]="'sys.basic.viewCodeManage.treeTitle' | translate:'Danh s\xE1ch Code'">
      <input nz-input class="mb-2" [(ngModel)]="treeSearchValue" name="vcmTreeSearch"
             [placeholder]="'sys.basic.viewMenuParamList.treeSearchPlaceholder' | translate:'T\xECm ki\u1EBFm...'">
      <div class="vcm-tree-scroll">
        <nz-tree [nzData]="treeNodes()" [nzSearchValue]="treeSearchValue" nzSelectMode
                 [nzSelectedKeys]="selectedParentCodeNo ? [selectedParentCodeNo] : []"
                 (nzClick)="onTreeClick($event)"></nz-tree>
      </div>
    </nz-card>
  </div>

  <!-- Danh s\xE1ch m\xE3 con b\xEAn ph\u1EA3i -->
  <div class="col-md-9 mb-3">
    <nz-card>
      <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <span class="fw-bold">
          <ng-container *ngIf="selectedParentLabel(); else noSelTitle">
            {{ 'sys.basic.viewCodeManage.selectedParentPrefix' | translate:'Danh s\xE1ch m\xE3 con c\u1EE7a:' }}
            <span class="text-primary">{{ selectedParentLabel() }}</span>
          </ng-container>
          <ng-template #noSelTitle>{{ 'sys.basic.viewCodeManage.rightPaneTitle' | translate:'Danh s\xE1ch m\xE3 con' }}</ng-template>
        </span>
        <div class="d-flex gap-2 flex-wrap">
          <button nz-button nzType="primary" type="button" (click)="openAddModal()">
            <i class="bx bx-plus"></i> {{ 'common.addNew' | translate:'Th\xEAm m\u1EDBi' }}
          </button>
          <button nz-button nzType="default" type="button" class="vcm-btn-export" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'common.exportExcel' | translate:'Xu\u1EA5t Excel' }}
          </button>
        </div>
      </div>

      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="vcmTotalTpl"
                [nzScroll]="{ x: '900px', y: 'calc(100vh - 420px)' }" #vcmTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th nzWidth="120px">{{ 'sys.basic.viewCodeManage.col.codeNo' | translate:'M\xE3 Code' }}</th>
            <th nzWidth="200px">{{ 'sys.basic.viewMenuList.col.nameVi' | translate:'T\xEAn TV' }}</th>
            <th nzWidth="200px">{{ 'sys.basic.viewMenuList.col.nameEn' | translate:'T\xEAn TA' }}</th>
            <th nzWidth="160px">{{ 'sys.basic.viewCodeManage.col.nameZh' | translate:'T\xEAn TT' }}</th>
            <th nzWidth="160px">{{ 'sys.basic.viewCodeManage.col.nameKo' | translate:'T\xEAn TH' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'sys.basic.viewMenuList.label.orderNo' | translate:'Th\u1EE9 t\u1EF1' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'common.action' | translate:'Thao t\xE1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="8" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of vcmTable.data; let i = index">
            <td class="text-center">{{ i + 1 }}</td>
            <td [attr.title]="row.codeNo || null">{{ row.codeNo }}</td>
            <td [attr.title]="row.nameVi || null">{{ row.nameVi }}</td>
            <td [attr.title]="row.nameEn || null">{{ row.nameEn }}</td>
            <td [attr.title]="row.nameZh || null">{{ row.nameZh }}</td>
            <td [attr.title]="row.nameKo || null">{{ row.nameKo }}</td>
            <td class="text-center">{{ row.orderNo }}</td>
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
        <ng-template #vcmTotalTpl let-total>
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
        <label class="form-label fw-semibold">{{ 'sys.basic.viewCodeManage.label.codeNo' | translate:'M\xE3 Code' }} <span class="text-danger">*</span></label>
        <input nz-input [ngModel]="form.codeNo" name="vcmCodeNo" readonly
               [placeholder]="'sys.basic.viewCodeManage.label.codeNo.placeholder' | translate:'T\u1EF1 \u0111\u1ED9ng sinh'">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'sys.basic.viewCodeManage.label.parentCodeNo' | translate:'M\xE3 Cha' }}</label>
        <input nz-input [ngModel]="form.parentCodeNo" name="vcmParentCodeNo" readonly>
      </div>

      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'sys.basic.viewMenuList.label.nameVi' | translate:'T\xEAn Ti\u1EBFng Vi\u1EC7t' }} <span class="text-danger">*</span></label>
        <input nz-input [(ngModel)]="form.nameVi" name="vcmNameVi">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'sys.basic.viewMenuList.label.nameEn' | translate:'T\xEAn Ti\u1EBFng Anh' }}</label>
        <input nz-input [(ngModel)]="form.nameEn" name="vcmNameEn">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'sys.basic.viewMenuList.label.nameZh' | translate:'T\xEAn Ti\u1EBFng Trung' }}</label>
        <input nz-input [(ngModel)]="form.nameZh" name="vcmNameZh">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'sys.basic.viewMenuList.label.nameKo' | translate:'T\xEAn Ti\u1EBFng H\xE0n' }}</label>
        <input nz-input [(ngModel)]="form.nameKo" name="vcmNameKo">
      </div>

      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'sys.basic.viewMenuList.label.orderNo' | translate:'Th\u1EE9 t\u1EF1' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.orderNo" name="vcmOrderNo" [nzMin]="0"></nz-input-number>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'sys.basic.viewCodeManage.label.description' | translate:'M\xF4 t\u1EA3' }}</label>
        <input nz-input [(ngModel)]="form.description" name="vcmDescription">
      </div>

      <div class="col-12">
        <label nz-checkbox [(ngModel)]="form.activity" name="vcmActivity">
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
    <p class="mb-1">{{ 'sys.basic.viewCodeManage.msg.confirmDelete' | translate:'B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a m\xE3 code n\xE0y?' }}</p>
    <p class="fw-bold mb-0">{{ deleteTargetName }}</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-code-manage/view-code-manage.component.css */\n.vcm-btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n.vcm-tree-scroll {\n  max-height: 700px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=view-code-manage.component.css.map */\n"] }]
  }], () => [{ type: ViewCodeManageService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewCodeManageComponent, { className: "ViewCodeManageComponent", filePath: "src/app/view-code-manage/view-code-manage.component.ts", lineNumber: 96 });
})();
export {
  ViewCodeManageComponent
};
//# debugId=bb10cae9-fdd4-5e37-a5e0-1ee31c670705
//# sourceMappingURL=chunk-6RHWP7X4.js.map
