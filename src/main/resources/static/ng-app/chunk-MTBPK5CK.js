import {
  ViewArItemParamListService
} from "./chunk-C7O5SMUP.js";
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
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
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

// src/app/view-ar-item-param-list/view-ar-item-param-list.component.ts
var _c0 = () => ({ x: "2400px", y: "calc(100vh - 420px)" });
function ViewArItemParamListComponent_nz_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 37);
  }
  if (rf & 2) {
    const opt_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzValue", opt_r2.itemNo)("nzLabel", ctx_r2.itemLabel(opt_r2));
  }
}
function ViewArItemParamListComponent_nz_alert_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 38);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r2.errorMessage() ?? "");
  }
}
function ViewArItemParamListComponent_tr_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 39);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewArItemParamListComponent_tr_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 40);
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
    \u0275\u0275elementStart(13, "td", 40);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 40);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 40);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 40);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td", 40);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td", 40);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "td", 40);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "td", 40);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "td", 40);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "td");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "td", 40);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "td", 40)(46, "nz-tag", 41);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "td", 40)(51, "button", 42);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275listener("click", function ViewArItemParamListComponent_tr_100_Template_button_click_51_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openEditModal(row_r5));
    });
    \u0275\u0275element(53, "i", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 42);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275listener("click", function ViewArItemParamListComponent_tr_100_Template_button_click_54_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openDeleteConfirm(row_r5));
    });
    \u0275\u0275element(56, "i", 44);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r6 + 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.arParamNo || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.arParamNo);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.itemNo || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.itemNo);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.itemNameVi || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.itemNameVi);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.unit || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.unit);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.groupNo || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.groupNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.minValue);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.maxValue);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.dependItem || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.dependItem);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.replaceItem || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.replaceItem);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.cardFlag === 1 ? \u0275\u0275pipeBind2(23, 31, "common.yes", "C\xF3") : \u0275\u0275pipeBind2(24, 34, "common.no", "Kh\xF4ng"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r5.cardFromFlag === 1 ? \u0275\u0275pipeBind2(27, 37, "common.yes", "C\xF3") : \u0275\u0275pipeBind2(28, 40, "common.no", "Kh\xF4ng"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r5.cardFromOffset);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.cardFromRelation);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.cardToFlag === 1 ? \u0275\u0275pipeBind2(35, 43, "common.yes", "C\xF3") : \u0275\u0275pipeBind2(36, 46, "common.no", "Kh\xF4ng"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r5.cardToOffset);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.cardToRelation);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.detailContent || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.detailContent);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.orderno);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColor", row_r5.activity === 1 ? "success" : "default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r5.activity === 1 ? \u0275\u0275pipeBind2(48, 49, "common.active", "Ho\u1EA1t \u0111\u1ED9ng") : \u0275\u0275pipeBind2(49, 52, "common.inactive", "Ng\u1EEBng"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(52, 55, "common.edit", "S\u1EEDa"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(55, 58, "common.delete", "X\xF3a"));
  }
}
function ViewArItemParamListComponent_ng_template_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r7 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r7, " ");
  }
}
function ViewArItemParamListComponent_ng_container_106_nz_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 37);
  }
  if (rf & 2) {
    const opt_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzValue", opt_r9.itemNo)("nzLabel", ctx_r2.itemLabel(opt_r9));
  }
}
function ViewArItemParamListComponent_ng_container_106_nz_option_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 37);
  }
  if (rf & 2) {
    const r_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzValue", r_r10.value)("nzLabel", ctx_r2.i18n.t(r_r10.key, r_r10.fallback));
  }
}
function ViewArItemParamListComponent_ng_container_106_nz_option_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 37);
  }
  if (rf & 2) {
    const r_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzValue", r_r11.value)("nzLabel", ctx_r2.i18n.t(r_r11.key, r_r11.fallback));
  }
}
function ViewArItemParamListComponent_ng_container_106_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h6", 45);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 46)(5, "div", 47)(6, "label", 48);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "span", 49);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "nz-select", 50);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewArItemParamListComponent_ng_container_106_Template_nz_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.itemNo, $event) || (ctx_r2.form.itemNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(13, ViewArItemParamListComponent_ng_container_106_nz_option_13_Template, 1, 2, "nz-option", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 47)(15, "label", 48);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArItemParamListComponent_ng_container_106_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.groupNo, $event) || (ctx_r2.form.groupNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 6)(20, "label", 48);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArItemParamListComponent_ng_container_106_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.unit, $event) || (ctx_r2.form.unit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 6)(25, "label", 48);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "nz-input-number", 53);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArItemParamListComponent_ng_container_106_Template_nz_input_number_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.unitValue, $event) || (ctx_r2.form.unitValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "div", 6);
    \u0275\u0275elementStart(30, "div", 6)(31, "label", 48);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "nz-input-number", 54);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArItemParamListComponent_ng_container_106_Template_nz_input_number_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.minValue, $event) || (ctx_r2.form.minValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 6)(36, "label", 48);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "nz-input-number", 55);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArItemParamListComponent_ng_container_106_Template_nz_input_number_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.maxValue, $event) || (ctx_r2.form.maxValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 47)(41, "label", 48);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArItemParamListComponent_ng_container_106_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.dependItem, $event) || (ctx_r2.form.dependItem = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 47)(46, "label", 48);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArItemParamListComponent_ng_container_106_Template_input_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.replaceItem, $event) || (ctx_r2.form.replaceItem = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "h6", 45);
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 46)(54, "div", 6)(55, "label", 58);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "nz-select", 59);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArItemParamListComponent_ng_container_106_Template_nz_select_ngModelChange_58_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.cardFlag, $event) || (ctx_r2.form.cardFlag = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(59, "nz-option", 37);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275element(61, "nz-option", 37);
    \u0275\u0275pipe(62, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 6)(64, "label", 58);
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "nz-select", 60);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArItemParamListComponent_ng_container_106_Template_nz_select_ngModelChange_67_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.cardFromFlag, $event) || (ctx_r2.form.cardFromFlag = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(68, "nz-option", 37);
    \u0275\u0275pipe(69, "translate");
    \u0275\u0275element(70, "nz-option", 37);
    \u0275\u0275pipe(71, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 6)(73, "label", 58);
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "nz-select", 61);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArItemParamListComponent_ng_container_106_Template_nz_select_ngModelChange_76_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.cardToFlag, $event) || (ctx_r2.form.cardToFlag = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(77, "nz-option", 37);
    \u0275\u0275pipe(78, "translate");
    \u0275\u0275element(79, "nz-option", 37);
    \u0275\u0275pipe(80, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "div", 6)(82, "label", 48);
    \u0275\u0275text(83);
    \u0275\u0275pipe(84, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "nz-input-number", 62);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArItemParamListComponent_ng_container_106_Template_nz_input_number_ngModelChange_85_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.cardFromOffset, $event) || (ctx_r2.form.cardFromOffset = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "div", 6)(87, "label", 58);
    \u0275\u0275text(88);
    \u0275\u0275pipe(89, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "nz-select", 63);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArItemParamListComponent_ng_container_106_Template_nz_select_ngModelChange_90_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.cardFromRelation, $event) || (ctx_r2.form.cardFromRelation = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(91, ViewArItemParamListComponent_ng_container_106_nz_option_91_Template, 1, 2, "nz-option", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275element(92, "div", 6);
    \u0275\u0275elementStart(93, "div", 6)(94, "label", 48);
    \u0275\u0275text(95);
    \u0275\u0275pipe(96, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "nz-input-number", 64);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArItemParamListComponent_ng_container_106_Template_nz_input_number_ngModelChange_97_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.cardToOffset, $event) || (ctx_r2.form.cardToOffset = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "div", 6)(99, "label", 58);
    \u0275\u0275text(100);
    \u0275\u0275pipe(101, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "nz-select", 65);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArItemParamListComponent_ng_container_106_Template_nz_select_ngModelChange_102_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.cardToRelation, $event) || (ctx_r2.form.cardToRelation = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(103, ViewArItemParamListComponent_ng_container_106_nz_option_103_Template, 1, 2, "nz-option", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(104, "h6", 45);
    \u0275\u0275text(105);
    \u0275\u0275pipe(106, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "div", 66)(108, "div", 6)(109, "label", 58);
    \u0275\u0275text(110);
    \u0275\u0275pipe(111, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "nz-select", 67);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArItemParamListComponent_ng_container_106_Template_nz_select_ngModelChange_112_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.applyFlag, $event) || (ctx_r2.form.applyFlag = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(113, "nz-option", 37);
    \u0275\u0275pipe(114, "translate");
    \u0275\u0275element(115, "nz-option", 37);
    \u0275\u0275pipe(116, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "div", 6)(118, "label", 48);
    \u0275\u0275text(119);
    \u0275\u0275pipe(120, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArItemParamListComponent_ng_container_106_Template_input_ngModelChange_121_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.applyType, $event) || (ctx_r2.form.applyType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "div", 6)(123, "label", 48);
    \u0275\u0275text(124);
    \u0275\u0275pipe(125, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "nz-input-number", 69);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArItemParamListComponent_ng_container_106_Template_nz_input_number_ngModelChange_126_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.applyFulldayValue, $event) || (ctx_r2.form.applyFulldayValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "div", 6)(128, "label", 58);
    \u0275\u0275text(129);
    \u0275\u0275pipe(130, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "nz-select", 70);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArItemParamListComponent_ng_container_106_Template_nz_select_ngModelChange_131_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.applyCardPriority, $event) || (ctx_r2.form.applyCardPriority = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(132, "nz-option", 37);
    \u0275\u0275pipe(133, "translate");
    \u0275\u0275element(134, "nz-option", 37);
    \u0275\u0275pipe(135, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "div", 6)(137, "label", 48);
    \u0275\u0275text(138);
    \u0275\u0275pipe(139, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "input", 71);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArItemParamListComponent_ng_container_106_Template_input_ngModelChange_140_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.dateType, $event) || (ctx_r2.form.dateType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275element(141, "div", 6);
    \u0275\u0275elementStart(142, "div", 47)(143, "label", 48);
    \u0275\u0275text(144);
    \u0275\u0275pipe(145, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(146, "input", 72);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArItemParamListComponent_ng_container_106_Template_input_ngModelChange_146_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.detailContent, $event) || (ctx_r2.form.detailContent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(147, "div", 73)(148, "label", 48);
    \u0275\u0275text(149);
    \u0275\u0275pipe(150, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "nz-input-number", 74);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArItemParamListComponent_ng_container_106_Template_nz_input_number_ngModelChange_151_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.orderno, $event) || (ctx_r2.form.orderno = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(152, "div", 73)(153, "label", 58);
    \u0275\u0275text(154);
    \u0275\u0275pipe(155, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(156, "nz-select", 75);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArItemParamListComponent_ng_container_106_Template_nz_select_ngModelChange_156_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.activity, $event) || (ctx_r2.form.activity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(157, "nz-option", 37);
    \u0275\u0275pipe(158, "translate");
    \u0275\u0275element(159, "nz-option", 37);
    \u0275\u0275pipe(160, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 77, "arItemParam.basicSection", "Th\xF4ng tin c\u01A1 b\u1EA3n"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(8, 80, "arItemParam.itemCode", "Thu\u1ED9c h\u1EA1ng m\u1EE5c"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.itemNo);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(12, 83, "common.placeholder.select", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.itemOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 86, "ar.viewitemparameter.title.zumingcheng", "Nh\xF3m hi\u1EC7u"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.groupNo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 89, "ar.viewitemparameter.title.unit", "\u0110\u01A1n v\u1ECB"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.unit);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 92, "arItemParam.unitValue", "Gi\xE1 tr\u1ECB \u0111\u01A1n v\u1ECB"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.unitValue);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 95, "ar.viewitemparameter.title.zuixiaozhi", "Gi\xE1 tr\u1ECB t\u1ED1i thi\u1EC3u"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.minValue);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(38, 98, "ar.viewitemparameter.title.zuidazhi", "Gi\xE1 tr\u1ECB t\u1ED1i \u0111a"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.maxValue);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 101, "arItemParam.dependItem", "H\u1EA1ng m\u1EE5c ph\u1EE5 thu\u1ED9c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.dependItem);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 104, "arItemParam.replaceItem", "H\u1EA1ng m\u1EE5c thay th\u1EBF"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.replaceItem);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(52, 107, "arItemParam.cardSection", "Th\xF4ng tin qu\u1EB9t th\u1EBB"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 110, "ar.viewitemparameter.title.cankaoshuaka", "Tham chi\u1EBFu qu\u1EB9t th\u1EBB"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.cardFlag);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzValue", 1)("nzLabel", \u0275\u0275pipeBind2(60, 113, "common.yes", "C\xF3"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzValue", 0)("nzLabel", \u0275\u0275pipeBind2(62, 116, "common.no", "Kh\xF4ng"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(66, 119, "ar.viewitemparameter.title.dakakaishibiaozhi", "C\u1EDD b\u1EAFt \u0111\u1EA7u qu\u1EB9t"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.cardFromFlag);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzValue", 1)("nzLabel", \u0275\u0275pipeBind2(69, 122, "common.yes", "C\xF3"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzValue", 0)("nzLabel", \u0275\u0275pipeBind2(71, 125, "common.no", "Kh\xF4ng"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(75, 128, "ar.viewitemparameter.title.dakajieshubiaozhi", "C\u1EDD k\u1EBFt th\xFAc qu\u1EB9t"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.cardToFlag);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzValue", 1)("nzLabel", \u0275\u0275pipeBind2(78, 131, "common.yes", "C\xF3"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzValue", 0)("nzLabel", \u0275\u0275pipeBind2(80, 134, "common.no", "Kh\xF4ng"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(84, 137, "ar.viewitemparameter.title.dakakaishipianyi", "Qu\u1EB9t b\u1EAFt \u0111\u1EA7u b\xF9 tr\u1EEB"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.cardFromOffset);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(89, 140, "ar.viewitemparameter.title.dakakaishipianyifangxiang", "Chi\u1EC1u b\xF9 tr\u1EEB b\u1EAFt \u0111\u1EA7u"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.cardFromRelation);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.relationOptions);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(96, 143, "ar.viewitemparameter.title.dakajieshupianyi", "Qu\u1EB9t k\u1EBFt th\xFAc b\xF9 tr\u1EEB"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.cardToOffset);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(101, 146, "ar.viewitemparameter.title.dakajieshupianyifangxiang", "Chi\u1EC1u b\xF9 tr\u1EEB k\u1EBFt th\xFAc"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.cardToRelation);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.relationOptions);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(106, 149, "arItemParam.applySection", "Th\xF4ng tin \xE1p d\u1EE5ng"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(111, 152, "ar.viewitemparameter.title.shifoucankaoshenqing", "Tham chi\u1EBFu l\xE0m \u0111\u01A1n xin ph\xE9p"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.applyFlag);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzValue", 1)("nzLabel", \u0275\u0275pipeBind2(114, 155, "common.yes", "C\xF3"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzValue", 0)("nzLabel", \u0275\u0275pipeBind2(116, 158, "common.no", "Kh\xF4ng"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(120, 161, "ar.viewitemparameter.title.shenqingleixing", "Lo\u1EA1i \u0111\u01A1n (CODE)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.applyType);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(125, 164, "ar.viewitemparameter.title.shenqingmanyirishuzhi", "Gi\xE1 tr\u1ECB t\u01B0\u01A1ng \u0111\u01B0\u01A1ng c\u1EA3 ng\xE0y"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.applyFulldayValue);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(130, 167, "ar.viewitemparameter.title.shenqingdakayouxianji", "\u01AFu ti\xEAn th\u1EBB qu\u1EB9t h\u01A1n \u0111\u01A1n"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.applyCardPriority);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzValue", 1)("nzLabel", \u0275\u0275pipeBind2(133, 170, "common.yes", "C\xF3"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzValue", 0)("nzLabel", \u0275\u0275pipeBind2(135, 173, "common.no", "Kh\xF4ng"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(139, 176, "ar.viewitemparameter.title.riqileixing", "Lo\u1EA1i ng\xE0y ngh\u1EC9 \xE1p d\u1EE5ng (CODE)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.dateType);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(145, 179, "arItemParam.hrPolicyNote", "Ghi ch\xFA ch\xEDnh s\xE1ch nh\xE2n s\u1EF1"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.detailContent);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(150, 182, "common.sortOrder", "S\u1EAFp x\u1EBFp"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.orderno);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(155, 185, "common.status", "Tr\u1EA1ng th\xE1i"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.activity);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzValue", 1)("nzLabel", \u0275\u0275pipeBind2(158, 188, "common.active", "Ho\u1EA1t \u0111\u1ED9ng"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzValue", 0)("nzLabel", \u0275\u0275pipeBind2(160, 191, "common.inactive", "Ng\u1EEBng"));
  }
}
function ViewArItemParamListComponent_ng_container_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 76);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 77);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "arItemParam.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a th\xF4ng s\u1ED1 n\xE0y kh\xF4ng?"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.deleteTargetName);
  }
}
var RELATION_OPTIONS = [
  { value: ">", key: "ar.viewitemparameter.title.dayu", fallback: "L\u1EDBn h\u01A1n (>)" },
  { value: "<", key: "ar.viewitemparameter.title.xiaoyu", fallback: "Nh\u1ECF h\u01A1n (<)" },
  { value: "=", key: "ar.viewitemparameter.title.dengyu", fallback: "B\u1EB1ng (=)" }
];
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
  "common.yes",
  "common.no",
  "common.placeholder.select",
  "arItemParam.itemCode",
  "arItemParam.itemName",
  "arItemParam.paramCode",
  "arItemParam.basicSection",
  "arItemParam.cardSection",
  "arItemParam.applySection",
  "arItemParam.modalAddTitle",
  "arItemParam.modalEditTitle",
  "arItemParam.confirmDelete",
  "arItemParam.dependItem",
  "arItemParam.replaceItem",
  "arItemParam.hrPolicyNote",
  "arItemParam.unitValue",
  "arItemParam.searchPlaceholder",
  "arItemParam.msg.pleaseSelectItem",
  "ar.viewitemparameter.title.unit",
  "ar.viewitemparameter.title.zumingcheng",
  "ar.viewitemparameter.title.zuixiaozhi",
  "ar.viewitemparameter.title.zuidazhi",
  "ar.viewitemparameter.title.cankaoshuaka",
  "ar.viewitemparameter.title.dakakaishibiaozhi",
  "ar.viewitemparameter.title.dakakaishipianyi",
  "ar.viewitemparameter.title.dakakaishipianyifangxiang",
  "ar.viewitemparameter.title.dakajieshubiaozhi",
  "ar.viewitemparameter.title.dakajieshupianyi",
  "ar.viewitemparameter.title.dakajieshupianyifangxiang",
  "ar.viewitemparameter.title.shifoucankaoshenqing",
  "ar.viewitemparameter.title.shenqingleixing",
  "ar.viewitemparameter.title.shenqingmanyirishuzhi",
  "ar.viewitemparameter.title.shenqingdakayouxianji",
  "ar.viewitemparameter.title.riqileixing",
  "ar.viewitemparameter.title.dayu",
  "ar.viewitemparameter.title.xiaoyu",
  "ar.viewitemparameter.title.dengyu",
  "essDept.exportExcel"
];
var PAGE_SIZE_OPTIONS = [25, 50, 100, 200];
var EMPTY_FORM = {
  arParamNo: null,
  itemNo: null,
  groupNo: "",
  unit: "",
  unitValue: null,
  minValue: null,
  maxValue: null,
  dependItem: "",
  replaceItem: "",
  cardFlag: 1,
  cardFromFlag: 1,
  cardFromOffset: 0,
  cardFromRelation: null,
  cardToFlag: 1,
  cardToOffset: 0,
  cardToRelation: null,
  applyFlag: 1,
  applyType: "",
  applyFulldayValue: null,
  applyCardPriority: 1,
  dateType: "",
  detailContent: "",
  orderno: 0,
  activity: 1
};
var ViewArItemParamListComponent = class _ViewArItemParamListComponent {
  constructor(api, i18n, message) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
  }
  api;
  i18n;
  message;
  pageSizeOptions = PAGE_SIZE_OPTIONS;
  relationOptions = RELATION_OPTIONS;
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
  itemOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "itemOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  searchItemNo = null;
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
    () => this.isNew() ? this.i18n.t("arItemParam.modalAddTitle", "Th\xEAm th\xF4ng s\u1ED1 h\u1EA1ng m\u1EE5c") : this.i18n.t("arItemParam.modalEditTitle", "Ch\u1EC9nh s\u1EEDa th\xF4ng s\u1ED1 h\u1EA1ng m\u1EE5c"),
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
    this.api.getItemOptions().subscribe({
      next: (list) => this.itemOptions.set(list ?? []),
      error: () => this.itemOptions.set([])
    });
  }
  itemLabel(opt) {
    return opt.nameVi || opt.shortName || opt.itemNo;
  }
  search() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.search(this.searchItemNo ?? "").subscribe({
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
    this.searchItemNo = null;
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
      arParamNo: row.arParamNo,
      itemNo: row.itemNo,
      groupNo: row.groupNo || "",
      unit: row.unit || "",
      unitValue: row.unitValue,
      minValue: row.minValue,
      maxValue: row.maxValue,
      dependItem: row.dependItem || "",
      replaceItem: row.replaceItem || "",
      cardFlag: row.cardFlag ?? 1,
      cardFromFlag: row.cardFromFlag ?? 1,
      cardFromOffset: row.cardFromOffset,
      cardFromRelation: row.cardFromRelation,
      cardToFlag: row.cardToFlag ?? 1,
      cardToOffset: row.cardToOffset,
      cardToRelation: row.cardToRelation,
      applyFlag: row.applyFlag ?? 1,
      applyType: row.applyType || "",
      applyFulldayValue: row.applyFulldayValue,
      applyCardPriority: row.applyCardPriority ?? 1,
      dateType: row.dateType || "",
      detailContent: row.detailContent || "",
      orderno: row.orderno,
      activity: row.activity ?? 1
    };
    this.modalVisible.set(true);
  }
  closeModal() {
    this.modalVisible.set(false);
  }
  saveForm() {
    if (!this.form.itemNo) {
      this.message.warning(this.i18n.t("arItemParam.msg.pleaseSelectItem", "Vui l\xF2ng ch\u1ECDn H\u1EA1ng m\u1EE5c"));
      return;
    }
    const payload = {
      arParamNo: this.form.arParamNo,
      itemNo: this.form.itemNo,
      groupNo: this.form.groupNo,
      unit: this.form.unit,
      unitValue: this.form.unitValue,
      minValue: this.form.minValue,
      maxValue: this.form.maxValue,
      dependItem: this.form.dependItem,
      replaceItem: this.form.replaceItem,
      cardFlag: this.form.cardFlag,
      cardFromFlag: this.form.cardFromFlag,
      cardFromOffset: this.form.cardFromOffset,
      cardFromRelation: this.form.cardFromRelation,
      cardToFlag: this.form.cardToFlag,
      cardToOffset: this.form.cardToOffset,
      cardToRelation: this.form.cardToRelation,
      applyFlag: this.form.applyFlag,
      applyType: this.form.applyType,
      applyFulldayValue: this.form.applyFulldayValue,
      applyCardPriority: this.form.applyCardPriority,
      dateType: this.form.dateType,
      detailContent: this.form.detailContent,
      orderno: this.form.orderno,
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
    return this.deleteTarget ? `${this.deleteTarget.arParamNo} - ${this.deleteTarget.itemNameVi ?? this.deleteTarget.itemNo}` : "";
  }
  confirmDelete() {
    if (!this.deleteTarget?.arParamNo)
      return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.arParamNo).subscribe({
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
    const yesNo = (v) => v === 1 ? this.i18n.t("common.yes", "C\xF3") : this.i18n.t("common.no", "Kh\xF4ng");
    const headers = [
      this.i18n.t("common.stt", "STT"),
      this.i18n.t("arItemParam.paramCode", "M\xE3 tham s\u1ED1"),
      this.i18n.t("arItemParam.itemCode", "M\xE3 h\u1EA1ng m\u1EE5c"),
      this.i18n.t("arItemParam.itemName", "T\xEAn h\u1EA1ng m\u1EE5c"),
      this.i18n.t("ar.viewitemparameter.title.unit", "\u0110\u01A1n v\u1ECB"),
      this.i18n.t("ar.viewitemparameter.title.zumingcheng", "Nh\xF3m hi\u1EC7u"),
      this.i18n.t("ar.viewitemparameter.title.zuixiaozhi", "Gi\u1EDBi h\u1EA1n t\u1ED1i thi\u1EC3u"),
      this.i18n.t("ar.viewitemparameter.title.zuidazhi", "Gi\u1EDBi h\u1EA1n t\u1ED1i \u0111a"),
      this.i18n.t("arItemParam.dependItem", "H\u1EA1ng m\u1EE5c ph\u1EE5 thu\u1ED9c"),
      this.i18n.t("arItemParam.replaceItem", "H\u1EA1ng m\u1EE5c thay th\u1EBF"),
      this.i18n.t("ar.viewitemparameter.title.cankaoshuaka", "Tham chi\u1EBFu qu\u1EB9t th\u1EBB"),
      this.i18n.t("common.sortOrder", "S\u1EAFp x\u1EBFp"),
      this.i18n.t("common.status", "Tr\u1EA1ng th\xE1i")
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      r.arParamNo,
      r.itemNo,
      r.itemNameVi,
      r.unit,
      r.groupNo,
      r.minValue,
      r.maxValue,
      r.dependItem,
      r.replaceItem,
      yesNo(r.cardFlag),
      r.orderno,
      r.activity === 1 ? this.i18n.t("common.active", "Ho\u1EA1t \u0111\u1ED9ng") : this.i18n.t("common.inactive", "Ng\u1EEBng")
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "DanhSach");
    writeFileSync(workbook, "ar_item_param_list.xlsx");
  }
  static \u0275fac = function ViewArItemParamListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewArItemParamListComponent)(\u0275\u0275directiveInject(ViewArItemParamListService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewArItemParamListComponent, selectors: [["app-view-ar-item-param-list"]], decls: 112, vars: 146, consts: [["vaipTable", ""], ["vaipTotalTpl", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-4"], [1, "form-label"], ["name", "vaipSearchItemNo", "nzAllowClear", "", "nzShowSearch", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col-md-8", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], [1, "col-12", "d-flex", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzType", "default", "type", "button", 1, "vaip-btn-export", 3, "click"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "110px"], ["nzWidth", "180px"], ["nzWidth", "100px"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "150px"], ["nzWidth", "130px", 1, "text-center"], ["nzWidth", "150px", 1, "text-center"], ["nzWidth", "90px", 1, "text-center"], ["nzWidth", "120px", 1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["nzWidth", "900px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "20", 1, "text-center", "text-muted"], [1, "text-center"], [3, "nzColor"], ["nz-button", "", "nzType", "text", "nzSize", "small", 3, "click", "title"], [1, "bx", "bx-edit", "text-warning"], [1, "bx", "bx-trash", "text-danger"], [1, "mb-3", "text-primary", "border-bottom", "pb-2"], [1, "row", "g-3", "mb-4"], [1, "col-md-6"], [1, "form-label", "fw-semibold"], [1, "text-danger"], ["name", "vaipFormItemNo", "nzShowSearch", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["nz-input", "", "name", "vaipFormGroupNo", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vaipFormUnit", 3, "ngModelChange", "ngModel"], ["name", "vaipFormUnitValue", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vaipFormMinValue", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vaipFormMaxValue", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vaipFormDependItem", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vaipFormReplaceItem", 3, "ngModelChange", "ngModel"], [1, "form-label", "fw-semibold", "d-block"], ["name", "vaipFormCardFlag", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vaipFormCardFromFlag", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vaipFormCardToFlag", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vaipFormCardFromOffset", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vaipFormCardFromRelation", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vaipFormCardToOffset", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vaipFormCardToRelation", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], [1, "row", "g-3"], ["name", "vaipFormApplyFlag", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vaipFormApplyType", 3, "ngModelChange", "ngModel"], ["name", "vaipFormApplyFulldayValue", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vaipFormApplyCardPriority", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vaipFormDateType", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vaipFormDetailContent", 3, "ngModelChange", "ngModel"], [1, "col-md-3"], ["name", "vaipFormOrderno", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vaipFormActivity", 1, "w-100", 3, "ngModelChange", "ngModel"], [1, "mb-1"], [1, "fw-bold", "mb-0"]], template: function ViewArItemParamListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "nz-card", 4)(3, "form", 5);
      \u0275\u0275listener("ngSubmit", function ViewArItemParamListComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 6)(5, "label", 7);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "nz-select", 8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewArItemParamListComponent_Template_nz_select_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchItemNo, $event) || (ctx.searchItemNo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(10, ViewArItemParamListComponent_nz_option_10_Template, 1, 2, "nz-option", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 10)(12, "button", 11);
      \u0275\u0275element(13, "i", 12);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 13);
      \u0275\u0275listener("click", function ViewArItemParamListComponent_Template_button_click_16_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(17, "i", 14);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 15)(21, "button", 16);
      \u0275\u0275listener("click", function ViewArItemParamListComponent_Template_button_click_21_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(22, "i", 17);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "button", 18);
      \u0275\u0275listener("click", function ViewArItemParamListComponent_Template_button_click_25_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(26, "i", 19);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "nz-card");
      \u0275\u0275template(30, ViewArItemParamListComponent_nz_alert_30_Template, 1, 1, "nz-alert", 20);
      \u0275\u0275elementStart(31, "nz-table", 21, 0)(33, "thead")(34, "tr")(35, "th", 22);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "th", 23);
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "th", 23);
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "th", 24);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "th", 25);
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "th", 23);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "th", 26);
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "th", 26);
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "th", 27);
      \u0275\u0275text(60);
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "th", 27);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "th", 28);
      \u0275\u0275text(66);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "th", 28);
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "th", 29);
      \u0275\u0275text(72);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "th", 29);
      \u0275\u0275text(75);
      \u0275\u0275pipe(76, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "th", 28);
      \u0275\u0275text(78);
      \u0275\u0275pipe(79, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "th", 29);
      \u0275\u0275text(81);
      \u0275\u0275pipe(82, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "th", 29);
      \u0275\u0275text(84);
      \u0275\u0275pipe(85, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "th", 24);
      \u0275\u0275text(87);
      \u0275\u0275pipe(88, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "th", 30);
      \u0275\u0275text(90);
      \u0275\u0275pipe(91, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "th", 31);
      \u0275\u0275text(93);
      \u0275\u0275pipe(94, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "th", 30);
      \u0275\u0275text(96);
      \u0275\u0275pipe(97, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(98, "tbody");
      \u0275\u0275template(99, ViewArItemParamListComponent_tr_99_Template, 4, 4, "tr", 32)(100, ViewArItemParamListComponent_tr_100_Template, 57, 61, "tr", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275template(101, ViewArItemParamListComponent_ng_template_101_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(103, "nz-modal", 34);
      \u0275\u0275pipe(104, "translate");
      \u0275\u0275pipe(105, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewArItemParamListComponent_Template_nz_modal_nzOnCancel_103_listener() {
        return ctx.closeModal();
      })("nzOnOk", function ViewArItemParamListComponent_Template_nz_modal_nzOnOk_103_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(106, ViewArItemParamListComponent_ng_container_106_Template, 161, 194, "ng-container", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "nz-modal", 36);
      \u0275\u0275pipe(108, "translate");
      \u0275\u0275pipe(109, "translate");
      \u0275\u0275pipe(110, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewArItemParamListComponent_Template_nz_modal_nzOnCancel_107_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function ViewArItemParamListComponent_Template_nz_modal_nzOnOk_107_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(111, ViewArItemParamListComponent_ng_container_111_Template, 6, 5, "ng-container", 35);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const vaipTable_r12 = \u0275\u0275reference(32);
      const vaipTotalTpl_r13 = \u0275\u0275reference(102);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 49, "arItemParam.itemCode", "H\u1EA1ng m\u1EE5c"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchItemNo);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(9, 52, "arItemParam.searchPlaceholder", "Nh\u1EADp m\xE3 h\u1EA1ng m\u1EE5c ho\u1EB7c t\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.itemOptions());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(15, 55, "common.search", "T\xECm ki\u1EBFm"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(19, 58, "common.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(24, 61, "common.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(28, 64, "essDept.exportExcel", "Xu\u1EA5t excel"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", vaipTotalTpl_r13)("nzScroll", \u0275\u0275pureFunction0(145, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 67, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 70, "arItemParam.paramCode", "M\xE3 tham s\u1ED1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 73, "arItemParam.itemCode", "M\xE3 h\u1EA1ng m\u1EE5c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 76, "arItemParam.itemName", "T\xEAn h\u1EA1ng m\u1EE5c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 79, "ar.viewitemparameter.title.unit", "\u0110\u01A1n v\u1ECB"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(52, 82, "ar.viewitemparameter.title.zumingcheng", "Nh\xF3m hi\u1EC7u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(55, 85, "ar.viewitemparameter.title.zuixiaozhi", "Gi\u1EDBi h\u1EA1n t\u1ED1i thi\u1EC3u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(58, 88, "ar.viewitemparameter.title.zuidazhi", "Gi\u1EDBi h\u1EA1n t\u1ED1i \u0111a"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(61, 91, "arItemParam.dependItem", "H\u1EA1ng m\u1EE5c ph\u1EE5 thu\u1ED9c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(64, 94, "arItemParam.replaceItem", "H\u1EA1ng m\u1EE5c thay th\u1EBF"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(67, 97, "ar.viewitemparameter.title.cankaoshuaka", "Tham chi\u1EBFu qu\u1EB9t th\u1EBB"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(70, 100, "ar.viewitemparameter.title.dakakaishibiaozhi", "C\u1EDD b\u1EAFt \u0111\u1EA7u qu\u1EB9t"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(73, 103, "ar.viewitemparameter.title.dakakaishipianyi", "Qu\u1EB9t b\u1EAFt \u0111\u1EA7u b\xF9 tr\u1EEB"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(76, 106, "ar.viewitemparameter.title.dakakaishipianyifangxiang", "Chi\u1EC1u b\xF9 tr\u1EEB b\u1EAFt \u0111\u1EA7u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(79, 109, "ar.viewitemparameter.title.dakajieshubiaozhi", "C\u1EDD k\u1EBFt th\xFAc qu\u1EB9t"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(82, 112, "ar.viewitemparameter.title.dakajieshupianyi", "Qu\u1EB9t k\u1EBFt th\xFAc b\xF9 tr\u1EEB"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(85, 115, "ar.viewitemparameter.title.dakajieshupianyifangxiang", "Chi\u1EC1u b\xF9 tr\u1EEB k\u1EBFt th\xFAc"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(88, 118, "arItemParam.hrPolicyNote", "Ch\xEDnh s\xE1ch nh\xE2n s\u1EF1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(91, 121, "common.sortOrder", "S\u1EAFp x\u1EBFp"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(94, 124, "common.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(97, 127, "common.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", vaipTable_r12.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", ctx.modalTitle())("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(104, 130, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(105, 133, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(4);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(108, 136, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(109, 139, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(110, 142, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzInputNumberModule, NzInputNumberComponent, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, NzTagModule, NzTagComponent, TranslatePipe], styles: ["\n.vaip-btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=view-ar-item-param-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewArItemParamListComponent, [{
    type: Component,
    args: [{ selector: "app-view-ar-item-param-list", standalone: true, imports: [
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
          <label class="form-label">{{ 'arItemParam.itemCode' | translate:'H\u1EA1ng m\u1EE5c' }}</label>
          <nz-select class="w-100" [(ngModel)]="searchItemNo" name="vaipSearchItemNo"
                     nzAllowClear nzShowSearch [nzPlaceHolder]="'arItemParam.searchPlaceholder' | translate:'Nh\u1EADp m\xE3 h\u1EA1ng m\u1EE5c ho\u1EB7c t\xEAn'">
            <nz-option *ngFor="let opt of itemOptions()" [nzValue]="opt.itemNo" [nzLabel]="itemLabel(opt)"></nz-option>
          </nz-select>
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
          <button nz-button nzType="default" type="button" class="vaip-btn-export" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'essDept.exportExcel' | translate:'Xu\u1EA5t excel' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <!-- nzWidth khai b\xE1o cho t\u1EEBng c\u1ED9t \u0111\u1EC3 \u0111\u1ED3ng b\u1ED9 \u0111\u1ED9 r\u1ED9ng header/body khi d\xF9ng nzScroll. -->
      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="vaipTotalTpl"
                [nzScroll]="{ x: '2400px', y: 'calc(100vh - 420px)' }" #vaipTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th nzWidth="110px">{{ 'arItemParam.paramCode' | translate:'M\xE3 tham s\u1ED1' }}</th>
            <th nzWidth="110px">{{ 'arItemParam.itemCode' | translate:'M\xE3 h\u1EA1ng m\u1EE5c' }}</th>
            <th nzWidth="180px">{{ 'arItemParam.itemName' | translate:'T\xEAn h\u1EA1ng m\u1EE5c' }}</th>
            <th nzWidth="100px">{{ 'ar.viewitemparameter.title.unit' | translate:'\u0110\u01A1n v\u1ECB' }}</th>
            <th nzWidth="110px">{{ 'ar.viewitemparameter.title.zumingcheng' | translate:'Nh\xF3m hi\u1EC7u' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'ar.viewitemparameter.title.zuixiaozhi' | translate:'Gi\u1EDBi h\u1EA1n t\u1ED1i thi\u1EC3u' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'ar.viewitemparameter.title.zuidazhi' | translate:'Gi\u1EDBi h\u1EA1n t\u1ED1i \u0111a' }}</th>
            <th nzWidth="150px">{{ 'arItemParam.dependItem' | translate:'H\u1EA1ng m\u1EE5c ph\u1EE5 thu\u1ED9c' }}</th>
            <th nzWidth="150px">{{ 'arItemParam.replaceItem' | translate:'H\u1EA1ng m\u1EE5c thay th\u1EBF' }}</th>
            <th class="text-center" nzWidth="130px">{{ 'ar.viewitemparameter.title.cankaoshuaka' | translate:'Tham chi\u1EBFu qu\u1EB9t th\u1EBB' }}</th>
            <th class="text-center" nzWidth="130px">{{ 'ar.viewitemparameter.title.dakakaishibiaozhi' | translate:'C\u1EDD b\u1EAFt \u0111\u1EA7u qu\u1EB9t' }}</th>
            <th class="text-center" nzWidth="150px">{{ 'ar.viewitemparameter.title.dakakaishipianyi' | translate:'Qu\u1EB9t b\u1EAFt \u0111\u1EA7u b\xF9 tr\u1EEB' }}</th>
            <th class="text-center" nzWidth="150px">{{ 'ar.viewitemparameter.title.dakakaishipianyifangxiang' | translate:'Chi\u1EC1u b\xF9 tr\u1EEB b\u1EAFt \u0111\u1EA7u' }}</th>
            <th class="text-center" nzWidth="130px">{{ 'ar.viewitemparameter.title.dakajieshubiaozhi' | translate:'C\u1EDD k\u1EBFt th\xFAc qu\u1EB9t' }}</th>
            <th class="text-center" nzWidth="150px">{{ 'ar.viewitemparameter.title.dakajieshupianyi' | translate:'Qu\u1EB9t k\u1EBFt th\xFAc b\xF9 tr\u1EEB' }}</th>
            <th class="text-center" nzWidth="150px">{{ 'ar.viewitemparameter.title.dakajieshupianyifangxiang' | translate:'Chi\u1EC1u b\xF9 tr\u1EEB k\u1EBFt th\xFAc' }}</th>
            <th nzWidth="180px">{{ 'arItemParam.hrPolicyNote' | translate:'Ch\xEDnh s\xE1ch nh\xE2n s\u1EF1' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'common.sortOrder' | translate:'S\u1EAFp x\u1EBFp' }}</th>
            <th class="text-center" nzWidth="120px">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'common.action' | translate:'Thao t\xE1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="20" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of vaipTable.data; let i = index">
            <td class="text-center">{{ i + 1 }}</td>
            <td [attr.title]="row.arParamNo || null">{{ row.arParamNo }}</td>
            <td [attr.title]="row.itemNo || null">{{ row.itemNo }}</td>
            <td [attr.title]="row.itemNameVi || null">{{ row.itemNameVi }}</td>
            <td [attr.title]="row.unit || null">{{ row.unit }}</td>
            <td [attr.title]="row.groupNo || null">{{ row.groupNo }}</td>
            <td class="text-center">{{ row.minValue }}</td>
            <td class="text-center">{{ row.maxValue }}</td>
            <td [attr.title]="row.dependItem || null">{{ row.dependItem }}</td>
            <td [attr.title]="row.replaceItem || null">{{ row.replaceItem }}</td>
            <td class="text-center">{{ row.cardFlag === 1 ? ('common.yes' | translate:'C\xF3') : ('common.no' | translate:'Kh\xF4ng') }}</td>
            <td class="text-center">{{ row.cardFromFlag === 1 ? ('common.yes' | translate:'C\xF3') : ('common.no' | translate:'Kh\xF4ng') }}</td>
            <td class="text-center">{{ row.cardFromOffset }}</td>
            <td class="text-center">{{ row.cardFromRelation }}</td>
            <td class="text-center">{{ row.cardToFlag === 1 ? ('common.yes' | translate:'C\xF3') : ('common.no' | translate:'Kh\xF4ng') }}</td>
            <td class="text-center">{{ row.cardToOffset }}</td>
            <td class="text-center">{{ row.cardToRelation }}</td>
            <td [attr.title]="row.detailContent || null">{{ row.detailContent }}</td>
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
        <ng-template #vaipTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal Th\xEAm m\u1EDBi / C\u1EADp nh\u1EADt -->
<nz-modal [nzVisible]="modalVisible()" [nzTitle]="modalTitle()" nzWidth="900px"
          (nzOnCancel)="closeModal()" (nzOnOk)="saveForm()" [nzOkLoading]="saving()"
          [nzOkText]="'common.save' | translate:'L\u01B0u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <h6 class="mb-3 text-primary border-bottom pb-2">{{ 'arItemParam.basicSection' | translate:'Th\xF4ng tin c\u01A1 b\u1EA3n' }}</h6>
    <div class="row g-3 mb-4">
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'arItemParam.itemCode' | translate:'Thu\u1ED9c h\u1EA1ng m\u1EE5c' }} <span class="text-danger">*</span></label>
        <nz-select class="w-100" [(ngModel)]="form.itemNo" name="vaipFormItemNo" nzShowSearch
                   [nzPlaceHolder]="'common.placeholder.select' | translate:'-- Ch\u1ECDn --'">
          <nz-option *ngFor="let opt of itemOptions()" [nzValue]="opt.itemNo" [nzLabel]="itemLabel(opt)"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'ar.viewitemparameter.title.zumingcheng' | translate:'Nh\xF3m hi\u1EC7u' }}</label>
        <input nz-input [(ngModel)]="form.groupNo" name="vaipFormGroupNo">
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'ar.viewitemparameter.title.unit' | translate:'\u0110\u01A1n v\u1ECB' }}</label>
        <input nz-input [(ngModel)]="form.unit" name="vaipFormUnit">
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'arItemParam.unitValue' | translate:'Gi\xE1 tr\u1ECB \u0111\u01A1n v\u1ECB' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.unitValue" name="vaipFormUnitValue"></nz-input-number>
      </div>
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'ar.viewitemparameter.title.zuixiaozhi' | translate:'Gi\xE1 tr\u1ECB t\u1ED1i thi\u1EC3u' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.minValue" name="vaipFormMinValue"></nz-input-number>
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'ar.viewitemparameter.title.zuidazhi' | translate:'Gi\xE1 tr\u1ECB t\u1ED1i \u0111a' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.maxValue" name="vaipFormMaxValue"></nz-input-number>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'arItemParam.dependItem' | translate:'H\u1EA1ng m\u1EE5c ph\u1EE5 thu\u1ED9c' }}</label>
        <input nz-input [(ngModel)]="form.dependItem" name="vaipFormDependItem">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'arItemParam.replaceItem' | translate:'H\u1EA1ng m\u1EE5c thay th\u1EBF' }}</label>
        <input nz-input [(ngModel)]="form.replaceItem" name="vaipFormReplaceItem">
      </div>
    </div>

    <h6 class="mb-3 text-primary border-bottom pb-2">{{ 'arItemParam.cardSection' | translate:'Th\xF4ng tin qu\u1EB9t th\u1EBB' }}</h6>
    <div class="row g-3 mb-4">
      <div class="col-md-4">
        <label class="form-label fw-semibold d-block">{{ 'ar.viewitemparameter.title.cankaoshuaka' | translate:'Tham chi\u1EBFu qu\u1EB9t th\u1EBB' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.cardFlag" name="vaipFormCardFlag">
          <nz-option [nzValue]="1" [nzLabel]="'common.yes' | translate:'C\xF3'"></nz-option>
          <nz-option [nzValue]="0" [nzLabel]="'common.no' | translate:'Kh\xF4ng'"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold d-block">{{ 'ar.viewitemparameter.title.dakakaishibiaozhi' | translate:'C\u1EDD b\u1EAFt \u0111\u1EA7u qu\u1EB9t' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.cardFromFlag" name="vaipFormCardFromFlag">
          <nz-option [nzValue]="1" [nzLabel]="'common.yes' | translate:'C\xF3'"></nz-option>
          <nz-option [nzValue]="0" [nzLabel]="'common.no' | translate:'Kh\xF4ng'"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold d-block">{{ 'ar.viewitemparameter.title.dakajieshubiaozhi' | translate:'C\u1EDD k\u1EBFt th\xFAc qu\u1EB9t' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.cardToFlag" name="vaipFormCardToFlag">
          <nz-option [nzValue]="1" [nzLabel]="'common.yes' | translate:'C\xF3'"></nz-option>
          <nz-option [nzValue]="0" [nzLabel]="'common.no' | translate:'Kh\xF4ng'"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'ar.viewitemparameter.title.dakakaishipianyi' | translate:'Qu\u1EB9t b\u1EAFt \u0111\u1EA7u b\xF9 tr\u1EEB' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.cardFromOffset" name="vaipFormCardFromOffset"></nz-input-number>
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold d-block">{{ 'ar.viewitemparameter.title.dakakaishipianyifangxiang' | translate:'Chi\u1EC1u b\xF9 tr\u1EEB b\u1EAFt \u0111\u1EA7u' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.cardFromRelation" name="vaipFormCardFromRelation" nzAllowClear>
          <nz-option *ngFor="let r of relationOptions" [nzValue]="r.value" [nzLabel]="i18n.t(r.key, r.fallback)"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'ar.viewitemparameter.title.dakajieshupianyi' | translate:'Qu\u1EB9t k\u1EBFt th\xFAc b\xF9 tr\u1EEB' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.cardToOffset" name="vaipFormCardToOffset"></nz-input-number>
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold d-block">{{ 'ar.viewitemparameter.title.dakajieshupianyifangxiang' | translate:'Chi\u1EC1u b\xF9 tr\u1EEB k\u1EBFt th\xFAc' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.cardToRelation" name="vaipFormCardToRelation" nzAllowClear>
          <nz-option *ngFor="let r of relationOptions" [nzValue]="r.value" [nzLabel]="i18n.t(r.key, r.fallback)"></nz-option>
        </nz-select>
      </div>
    </div>

    <h6 class="mb-3 text-primary border-bottom pb-2">{{ 'arItemParam.applySection' | translate:'Th\xF4ng tin \xE1p d\u1EE5ng' }}</h6>
    <div class="row g-3">
      <div class="col-md-4">
        <label class="form-label fw-semibold d-block">{{ 'ar.viewitemparameter.title.shifoucankaoshenqing' | translate:'Tham chi\u1EBFu l\xE0m \u0111\u01A1n xin ph\xE9p' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.applyFlag" name="vaipFormApplyFlag">
          <nz-option [nzValue]="1" [nzLabel]="'common.yes' | translate:'C\xF3'"></nz-option>
          <nz-option [nzValue]="0" [nzLabel]="'common.no' | translate:'Kh\xF4ng'"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'ar.viewitemparameter.title.shenqingleixing' | translate:'Lo\u1EA1i \u0111\u01A1n (CODE)' }}</label>
        <input nz-input [(ngModel)]="form.applyType" name="vaipFormApplyType">
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'ar.viewitemparameter.title.shenqingmanyirishuzhi' | translate:'Gi\xE1 tr\u1ECB t\u01B0\u01A1ng \u0111\u01B0\u01A1ng c\u1EA3 ng\xE0y' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.applyFulldayValue" name="vaipFormApplyFulldayValue"></nz-input-number>
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold d-block">{{ 'ar.viewitemparameter.title.shenqingdakayouxianji' | translate:'\u01AFu ti\xEAn th\u1EBB qu\u1EB9t h\u01A1n \u0111\u01A1n' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.applyCardPriority" name="vaipFormApplyCardPriority">
          <nz-option [nzValue]="1" [nzLabel]="'common.yes' | translate:'C\xF3'"></nz-option>
          <nz-option [nzValue]="0" [nzLabel]="'common.no' | translate:'Kh\xF4ng'"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'ar.viewitemparameter.title.riqileixing' | translate:'Lo\u1EA1i ng\xE0y ngh\u1EC9 \xE1p d\u1EE5ng (CODE)' }}</label>
        <input nz-input [(ngModel)]="form.dateType" name="vaipFormDateType">
      </div>
      <div class="col-md-4"></div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'arItemParam.hrPolicyNote' | translate:'Ghi ch\xFA ch\xEDnh s\xE1ch nh\xE2n s\u1EF1' }}</label>
        <input nz-input [(ngModel)]="form.detailContent" name="vaipFormDetailContent">
      </div>
      <div class="col-md-3">
        <label class="form-label fw-semibold">{{ 'common.sortOrder' | translate:'S\u1EAFp x\u1EBFp' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.orderno" name="vaipFormOrderno"></nz-input-number>
      </div>
      <div class="col-md-3">
        <label class="form-label fw-semibold d-block">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.activity" name="vaipFormActivity">
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
    <p class="mb-1">{{ 'arItemParam.confirmDelete' | translate:'B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a th\xF4ng s\u1ED1 n\xE0y kh\xF4ng?' }}</p>
    <p class="fw-bold mb-0">{{ deleteTargetName }}</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-ar-item-param-list/view-ar-item-param-list.component.css */\n.vaip-btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=view-ar-item-param-list.component.css.map */\n"] }]
  }], () => [{ type: ViewArItemParamListService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewArItemParamListComponent, { className: "ViewArItemParamListComponent", filePath: "src/app/view-ar-item-param-list/view-ar-item-param-list.component.ts", lineNumber: 129 });
})();
export {
  ViewArItemParamListComponent
};
//# debugId=cecb1238-1369-585b-a92a-5991ed991b32
//# sourceMappingURL=chunk-MTBPK5CK.js.map
