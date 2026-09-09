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
  NgModel
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

// src/app/view-item-parameter/view-item-parameter.component.ts
var _c0 = (a0) => [a0];
var _c1 = () => [];
var _c2 = () => ({ x: "2400px", y: "calc(100vh - 460px)" });
function ViewItemParameterComponent_nz_alert_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 33);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ViewItemParameterComponent_tr_91_Template(rf, ctx) {
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
function ViewItemParameterComponent_tr_92_Template(rf, ctx) {
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
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 35);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 35);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 35);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 35);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td", 35);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td", 35);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "td", 35);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "td", 35);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "td", 35);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "td");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "td", 35);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "td", 35)(46, "nz-tag", 36);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "td", 35)(51, "button", 37);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275listener("click", function ViewItemParameterComponent_tr_92_Template_button_click_51_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditModal(row_r4));
    });
    \u0275\u0275element(53, "i", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 37);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275listener("click", function ViewItemParameterComponent_tr_92_Template_button_click_54_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDeleteConfirm(row_r4));
    });
    \u0275\u0275element(56, "i", 39);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r5 + 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.arParamNo || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.arParamNo);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.itemNo || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.itemNo);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.itemNameVi || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.itemNameVi);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.unit || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.unit);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.groupNo || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.groupNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.minValue);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.maxValue);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.dependItem || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.dependItem);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.replaceItem || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.replaceItem);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.cardFlag === 1 ? \u0275\u0275pipeBind2(23, 31, "common.yes", "C\xF3") : \u0275\u0275pipeBind2(24, 34, "common.no", "Kh\xF4ng"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r4.cardFromFlag === 1 ? \u0275\u0275pipeBind2(27, 37, "common.yes", "C\xF3") : \u0275\u0275pipeBind2(28, 40, "common.no", "Kh\xF4ng"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r4.cardFromOffset);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.cardFromRelation);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.cardToFlag === 1 ? \u0275\u0275pipeBind2(35, 43, "common.yes", "C\xF3") : \u0275\u0275pipeBind2(36, 46, "common.no", "Kh\xF4ng"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r4.cardToOffset);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.cardToRelation);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.detailContent || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.detailContent);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.orderno);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColor", row_r4.activity === 1 ? "success" : "default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.activity === 1 ? \u0275\u0275pipeBind2(48, 49, "common.active", "Ho\u1EA1t \u0111\u1ED9ng") : \u0275\u0275pipeBind2(49, 52, "common.inactive", "Ng\u1EEBng"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(52, 55, "common.edit", "S\u1EEDa"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(55, 58, "common.delete", "X\xF3a"));
  }
}
function ViewItemParameterComponent_ng_template_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r6 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r6, " ");
  }
}
function ViewItemParameterComponent_ng_container_98_nz_option_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 55);
  }
  if (rf & 2) {
    const r_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzValue", r_r8.value)("nzLabel", ctx_r1.i18n.t(r_r8.key, r_r8.fallback));
  }
}
function ViewItemParameterComponent_ng_container_98_nz_option_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 55);
  }
  if (rf & 2) {
    const r_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzValue", r_r9.value)("nzLabel", ctx_r1.i18n.t(r_r9.key, r_r9.fallback));
  }
}
function ViewItemParameterComponent_ng_container_98_Template(rf, ctx) {
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
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 44);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 42)(11, "label", 43);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function ViewItemParameterComponent_ng_container_98_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.groupNo, $event) || (ctx_r1.form.groupNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 46)(16, "label", 43);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function ViewItemParameterComponent_ng_container_98_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.unit, $event) || (ctx_r1.form.unit = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 46)(21, "label", 43);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "nz-input-number", 48);
    \u0275\u0275twoWayListener("ngModelChange", function ViewItemParameterComponent_ng_container_98_Template_nz_input_number_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.unitValue, $event) || (ctx_r1.form.unitValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "div", 46);
    \u0275\u0275elementStart(26, "div", 46)(27, "label", 43);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "nz-input-number", 49);
    \u0275\u0275twoWayListener("ngModelChange", function ViewItemParameterComponent_ng_container_98_Template_nz_input_number_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.minValue, $event) || (ctx_r1.form.minValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 46)(32, "label", 43);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "nz-input-number", 50);
    \u0275\u0275twoWayListener("ngModelChange", function ViewItemParameterComponent_ng_container_98_Template_nz_input_number_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.maxValue, $event) || (ctx_r1.form.maxValue = $event);
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
    \u0275\u0275twoWayListener("ngModelChange", function ViewItemParameterComponent_ng_container_98_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.dependItem, $event) || (ctx_r1.form.dependItem = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 42)(42, "label", 43);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function ViewItemParameterComponent_ng_container_98_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.replaceItem, $event) || (ctx_r1.form.replaceItem = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "h6", 40);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 41)(50, "div", 46)(51, "label", 53);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "nz-select", 54);
    \u0275\u0275twoWayListener("ngModelChange", function ViewItemParameterComponent_ng_container_98_Template_nz_select_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.cardFlag, $event) || (ctx_r1.form.cardFlag = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(55, "nz-option", 55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275element(57, "nz-option", 55);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 46)(60, "label", 53);
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "nz-select", 56);
    \u0275\u0275twoWayListener("ngModelChange", function ViewItemParameterComponent_ng_container_98_Template_nz_select_ngModelChange_63_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.cardFromFlag, $event) || (ctx_r1.form.cardFromFlag = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(64, "nz-option", 55);
    \u0275\u0275pipe(65, "translate");
    \u0275\u0275element(66, "nz-option", 55);
    \u0275\u0275pipe(67, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 46)(69, "label", 53);
    \u0275\u0275text(70);
    \u0275\u0275pipe(71, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "nz-select", 57);
    \u0275\u0275twoWayListener("ngModelChange", function ViewItemParameterComponent_ng_container_98_Template_nz_select_ngModelChange_72_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.cardToFlag, $event) || (ctx_r1.form.cardToFlag = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(73, "nz-option", 55);
    \u0275\u0275pipe(74, "translate");
    \u0275\u0275element(75, "nz-option", 55);
    \u0275\u0275pipe(76, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 46)(78, "label", 43);
    \u0275\u0275text(79);
    \u0275\u0275pipe(80, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "nz-input-number", 58);
    \u0275\u0275twoWayListener("ngModelChange", function ViewItemParameterComponent_ng_container_98_Template_nz_input_number_ngModelChange_81_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.cardFromOffset, $event) || (ctx_r1.form.cardFromOffset = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "div", 46)(83, "label", 53);
    \u0275\u0275text(84);
    \u0275\u0275pipe(85, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "nz-select", 59);
    \u0275\u0275twoWayListener("ngModelChange", function ViewItemParameterComponent_ng_container_98_Template_nz_select_ngModelChange_86_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.cardFromRelation, $event) || (ctx_r1.form.cardFromRelation = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(87, ViewItemParameterComponent_ng_container_98_nz_option_87_Template, 1, 2, "nz-option", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275element(88, "div", 46);
    \u0275\u0275elementStart(89, "div", 46)(90, "label", 43);
    \u0275\u0275text(91);
    \u0275\u0275pipe(92, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "nz-input-number", 61);
    \u0275\u0275twoWayListener("ngModelChange", function ViewItemParameterComponent_ng_container_98_Template_nz_input_number_ngModelChange_93_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.cardToOffset, $event) || (ctx_r1.form.cardToOffset = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "div", 46)(95, "label", 53);
    \u0275\u0275text(96);
    \u0275\u0275pipe(97, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "nz-select", 62);
    \u0275\u0275twoWayListener("ngModelChange", function ViewItemParameterComponent_ng_container_98_Template_nz_select_ngModelChange_98_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.cardToRelation, $event) || (ctx_r1.form.cardToRelation = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(99, ViewItemParameterComponent_ng_container_98_nz_option_99_Template, 1, 2, "nz-option", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(100, "h6", 40);
    \u0275\u0275text(101);
    \u0275\u0275pipe(102, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "div", 63)(104, "div", 46)(105, "label", 53);
    \u0275\u0275text(106);
    \u0275\u0275pipe(107, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "nz-select", 64);
    \u0275\u0275twoWayListener("ngModelChange", function ViewItemParameterComponent_ng_container_98_Template_nz_select_ngModelChange_108_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.applyFlag, $event) || (ctx_r1.form.applyFlag = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(109, "nz-option", 55);
    \u0275\u0275pipe(110, "translate");
    \u0275\u0275element(111, "nz-option", 55);
    \u0275\u0275pipe(112, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "div", 46)(114, "label", 43);
    \u0275\u0275text(115);
    \u0275\u0275pipe(116, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function ViewItemParameterComponent_ng_container_98_Template_input_ngModelChange_117_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.applyType, $event) || (ctx_r1.form.applyType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "div", 46)(119, "label", 43);
    \u0275\u0275text(120);
    \u0275\u0275pipe(121, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "nz-input-number", 66);
    \u0275\u0275twoWayListener("ngModelChange", function ViewItemParameterComponent_ng_container_98_Template_nz_input_number_ngModelChange_122_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.applyFulldayValue, $event) || (ctx_r1.form.applyFulldayValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "div", 46)(124, "label", 53);
    \u0275\u0275text(125);
    \u0275\u0275pipe(126, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "nz-select", 67);
    \u0275\u0275twoWayListener("ngModelChange", function ViewItemParameterComponent_ng_container_98_Template_nz_select_ngModelChange_127_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.applyCardPriority, $event) || (ctx_r1.form.applyCardPriority = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(128, "nz-option", 55);
    \u0275\u0275pipe(129, "translate");
    \u0275\u0275element(130, "nz-option", 55);
    \u0275\u0275pipe(131, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "div", 46)(133, "label", 43);
    \u0275\u0275text(134);
    \u0275\u0275pipe(135, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function ViewItemParameterComponent_ng_container_98_Template_input_ngModelChange_136_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.dateType, $event) || (ctx_r1.form.dateType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275element(137, "div", 46);
    \u0275\u0275elementStart(138, "div", 42)(139, "label", 43);
    \u0275\u0275text(140);
    \u0275\u0275pipe(141, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function ViewItemParameterComponent_ng_container_98_Template_input_ngModelChange_142_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.detailContent, $event) || (ctx_r1.form.detailContent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(143, "div", 70)(144, "label", 43);
    \u0275\u0275text(145);
    \u0275\u0275pipe(146, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(147, "nz-input-number", 71);
    \u0275\u0275twoWayListener("ngModelChange", function ViewItemParameterComponent_ng_container_98_Template_nz_input_number_ngModelChange_147_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.orderno, $event) || (ctx_r1.form.orderno = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(148, "div", 70)(149, "label", 53);
    \u0275\u0275text(150);
    \u0275\u0275pipe(151, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(152, "nz-select", 72);
    \u0275\u0275twoWayListener("ngModelChange", function ViewItemParameterComponent_ng_container_98_Template_nz_select_ngModelChange_152_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.activity, $event) || (ctx_r1.form.activity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(153, "nz-option", 55);
    \u0275\u0275pipe(154, "translate");
    \u0275\u0275element(155, "nz-option", 55);
    \u0275\u0275pipe(156, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 75, "arItemParam.basicSection", "Th\xF4ng tin c\u01A1 b\u1EA3n"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 78, "arItemParam.itemCode", "Thu\u1ED9c h\u1EA1ng m\u1EE5c"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.formItemLabel);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 81, "ar.viewitemparameter.title.zumingcheng", "Nh\xF3m hi\u1EC7u"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.groupNo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 84, "ar.viewitemparameter.title.unit", "\u0110\u01A1n v\u1ECB"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.unit);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 87, "arItemParam.unitValue", "Gi\xE1 tr\u1ECB \u0111\u01A1n v\u1ECB"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.unitValue);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 90, "ar.viewitemparameter.title.zuixiaozhi", "Gi\xE1 tr\u1ECB t\u1ED1i thi\u1EC3u"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.minValue);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 93, "ar.viewitemparameter.title.zuidazhi", "Gi\xE1 tr\u1ECB t\u1ED1i \u0111a"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.maxValue);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 96, "arItemParam.dependItem", "H\u1EA1ng m\u1EE5c ph\u1EE5 thu\u1ED9c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.dependItem);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 99, "arItemParam.replaceItem", "H\u1EA1ng m\u1EE5c thay th\u1EBF"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.replaceItem);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 102, "arItemParam.cardSection", "Th\xF4ng tin qu\u1EB9t th\u1EBB"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(53, 105, "ar.viewitemparameter.title.cankaoshuaka", "Tham chi\u1EBFu qu\u1EB9t th\u1EBB"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.cardFlag);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzValue", 1)("nzLabel", \u0275\u0275pipeBind2(56, 108, "common.yes", "C\xF3"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzValue", 0)("nzLabel", \u0275\u0275pipeBind2(58, 111, "common.no", "Kh\xF4ng"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(62, 114, "ar.viewitemparameter.title.dakakaishibiaozhi", "C\u1EDD b\u1EAFt \u0111\u1EA7u qu\u1EB9t"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.cardFromFlag);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzValue", 1)("nzLabel", \u0275\u0275pipeBind2(65, 117, "common.yes", "C\xF3"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzValue", 0)("nzLabel", \u0275\u0275pipeBind2(67, 120, "common.no", "Kh\xF4ng"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(71, 123, "ar.viewitemparameter.title.dakajieshubiaozhi", "C\u1EDD k\u1EBFt th\xFAc qu\u1EB9t"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.cardToFlag);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzValue", 1)("nzLabel", \u0275\u0275pipeBind2(74, 126, "common.yes", "C\xF3"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzValue", 0)("nzLabel", \u0275\u0275pipeBind2(76, 129, "common.no", "Kh\xF4ng"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(80, 132, "ar.viewitemparameter.title.dakakaishipianyi", "Qu\u1EB9t b\u1EAFt \u0111\u1EA7u b\xF9 tr\u1EEB"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.cardFromOffset);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(85, 135, "ar.viewitemparameter.title.dakakaishipianyifangxiang", "Chi\u1EC1u b\xF9 tr\u1EEB b\u1EAFt \u0111\u1EA7u"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.cardFromRelation);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.relationOptions);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(92, 138, "ar.viewitemparameter.title.dakajieshupianyi", "Qu\u1EB9t k\u1EBFt th\xFAc b\xF9 tr\u1EEB"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.cardToOffset);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(97, 141, "ar.viewitemparameter.title.dakajieshupianyifangxiang", "Chi\u1EC1u b\xF9 tr\u1EEB k\u1EBFt th\xFAc"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.cardToRelation);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.relationOptions);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(102, 144, "arItemParam.applySection", "Th\xF4ng tin \xE1p d\u1EE5ng"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(107, 147, "ar.viewitemparameter.title.shifoucankaoshenqing", "Tham chi\u1EBFu l\xE0m \u0111\u01A1n xin ph\xE9p"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.applyFlag);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzValue", 1)("nzLabel", \u0275\u0275pipeBind2(110, 150, "common.yes", "C\xF3"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzValue", 0)("nzLabel", \u0275\u0275pipeBind2(112, 153, "common.no", "Kh\xF4ng"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(116, 156, "ar.viewitemparameter.title.shenqingleixing", "Lo\u1EA1i \u0111\u01A1n (CODE)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.applyType);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(121, 159, "ar.viewitemparameter.title.shenqingmanyirishuzhi", "Gi\xE1 tr\u1ECB t\u01B0\u01A1ng \u0111\u01B0\u01A1ng c\u1EA3 ng\xE0y"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.applyFulldayValue);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(126, 162, "ar.viewitemparameter.title.shenqingdakayouxianji", "\u01AFu ti\xEAn th\u1EBB qu\u1EB9t h\u01A1n \u0111\u01A1n"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.applyCardPriority);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzValue", 1)("nzLabel", \u0275\u0275pipeBind2(129, 165, "common.yes", "C\xF3"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzValue", 0)("nzLabel", \u0275\u0275pipeBind2(131, 168, "common.no", "Kh\xF4ng"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(135, 171, "ar.viewitemparameter.title.riqileixing", "Lo\u1EA1i ng\xE0y ngh\u1EC9 \xE1p d\u1EE5ng (CODE)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.dateType);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(141, 174, "arItemParam.hrPolicyNote", "Ghi ch\xFA ch\xEDnh s\xE1ch nh\xE2n s\u1EF1"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.detailContent);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(146, 177, "common.sortOrder", "S\u1EAFp x\u1EBFp"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.orderno);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(151, 180, "common.status", "Tr\u1EA1ng th\xE1i"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.activity);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzValue", 1)("nzLabel", \u0275\u0275pipeBind2(154, 183, "common.active", "Ho\u1EA1t \u0111\u1ED9ng"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzValue", 0)("nzLabel", \u0275\u0275pipeBind2(156, 186, "common.inactive", "Ng\u1EEBng"));
  }
}
function ViewItemParameterComponent_ng_container_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 73);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 74);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "arItemParam.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a th\xF4ng s\u1ED1 n\xE0y kh\xF4ng?"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.deleteTargetName);
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
  "arItemParam.treeTitle",
  "arItemParam.treeSearchPlaceholder",
  "arItemParam.paramListTitle",
  "arItemParam.msg.pleaseSelectItemFromTree",
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
var ViewItemParameterComponent = class _ViewItemParameterComponent {
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
  itemOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "itemOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  treeNodes = computed(
    () => this.itemOptions().filter((o) => o.activity === 1).map((o) => ({ title: this.itemLabel(o), key: o.itemNo, isLeaf: true })),
    ...ngDevMode ? [{ debugName: "treeNodes" }] : (
      /* istanbul ignore next */
      []
    )
  );
  treeSearchValue = "";
  selectedItemNo = null;
  selectedItemLabel = signal(
    null,
    ...ngDevMode ? [{ debugName: "selectedItemLabel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  panelTitle = computed(
    () => this.selectedItemLabel() ? `${this.i18n.t("arItemParam.paramListTitle", "Danh s\xE1ch tham s\u1ED1")}: ${this.selectedItemLabel()}` : this.i18n.t("arItemParam.paramListTitle", "Danh s\xE1ch tham s\u1ED1"),
    ...ngDevMode ? [{ debugName: "panelTitle" }] : (
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
    () => this.isNew() ? this.i18n.t("arItemParam.modalAddTitle", "Th\xEAm th\xF4ng s\u1ED1 h\u1EA1ng m\u1EE5c") : this.i18n.t("arItemParam.modalEditTitle", "Ch\u1EC9nh s\u1EEDa th\xF4ng s\u1ED1 h\u1EA1ng m\u1EE5c"),
    ...ngDevMode ? [{ debugName: "modalTitle" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = __spreadProps(__spreadValues({}, EMPTY_FORM), { itemNo: "" });
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
    this.api.getItemOptions().subscribe({
      next: (list) => this.itemOptions.set(list ?? []),
      error: () => this.itemOptions.set([])
    });
  }
  itemLabel(opt) {
    return opt.nameVi || opt.shortName || opt.itemNo;
  }
  onTreeClick(event) {
    const node = event.node;
    if (!node)
      return;
    this.selectedItemNo = node.key;
    this.selectedItemLabel.set(node.title);
    this.search();
  }
  search() {
    if (!this.selectedItemNo) {
      this.rows.set([]);
      return;
    }
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.search(this.selectedItemNo).subscribe({
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
  // ==================== Modal Thêm mới / Cập nhật ====================
  openAddModal() {
    if (!this.selectedItemNo) {
      this.message.warning(this.i18n.t("arItemParam.msg.pleaseSelectItemFromTree", "Vui l\xF2ng ch\u1ECDn m\u1ED9t h\u1EA1ng m\u1EE5c tr\xEAn danh s\xE1ch b\xEAn tr\xE1i tr\u01B0\u1EDBc khi th\xEAm m\u1EDBi."));
      return;
    }
    this.isNew.set(true);
    this.form = __spreadProps(__spreadValues({}, EMPTY_FORM), { itemNo: this.selectedItemNo });
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
  get formItemLabel() {
    const opt = this.itemOptions().find((o) => o.itemNo === this.form.itemNo);
    return opt ? this.itemLabel(opt) : this.form.itemNo;
  }
  saveForm() {
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
    writeFileSync(workbook, "item_parameter_list.xlsx");
  }
  static \u0275fac = function ViewItemParameterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewItemParameterComponent)(\u0275\u0275directiveInject(ViewArItemParamListService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewItemParameterComponent, selectors: [["app-view-item-parameter"]], decls: 104, vars: 144, consts: [["vipTable", ""], ["vipTotalTpl", ""], [1, "row"], [1, "col-md-3", "mb-3"], [3, "nzTitle"], ["nz-input", "", "name", "vipTreeSearch", 1, "mb-2", 3, "ngModelChange", "ngModel", "placeholder"], [1, "vip-tree-scroll"], ["nzSelectMode", "", 3, "nzClick", "nzData", "nzSearchValue", "nzSelectedKeys"], [1, "col-md-9", "mb-3"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3", "flex-wrap", "gap-2"], [1, "fw-bold"], [1, "d-flex", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzType", "default", "type", "button", 1, "vip-btn-export", 3, "click"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "110px"], ["nzWidth", "180px"], ["nzWidth", "100px"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "150px"], ["nzWidth", "130px", 1, "text-center"], ["nzWidth", "150px", 1, "text-center"], ["nzWidth", "90px", 1, "text-center"], ["nzWidth", "120px", 1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["nzWidth", "900px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "20", 1, "text-center", "text-muted"], [1, "text-center"], [3, "nzColor"], ["nz-button", "", "nzType", "text", "nzSize", "small", 3, "click", "title"], [1, "bx", "bx-edit", "text-warning"], [1, "bx", "bx-trash", "text-danger"], [1, "mb-3", "text-primary", "border-bottom", "pb-2"], [1, "row", "g-3", "mb-4"], [1, "col-md-6"], [1, "form-label", "fw-semibold"], ["nz-input", "", "name", "vipFormItemNo", "disabled", "", 3, "ngModel"], ["nz-input", "", "name", "vipFormGroupNo", 3, "ngModelChange", "ngModel"], [1, "col-md-4"], ["nz-input", "", "name", "vipFormUnit", 3, "ngModelChange", "ngModel"], ["name", "vipFormUnitValue", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vipFormMinValue", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vipFormMaxValue", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vipFormDependItem", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vipFormReplaceItem", 3, "ngModelChange", "ngModel"], [1, "form-label", "fw-semibold", "d-block"], ["name", "vipFormCardFlag", 1, "w-100", 3, "ngModelChange", "ngModel"], [3, "nzValue", "nzLabel"], ["name", "vipFormCardFromFlag", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vipFormCardToFlag", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vipFormCardFromOffset", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vipFormCardFromRelation", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["name", "vipFormCardToOffset", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vipFormCardToRelation", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], [1, "row", "g-3"], ["name", "vipFormApplyFlag", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vipFormApplyType", 3, "ngModelChange", "ngModel"], ["name", "vipFormApplyFulldayValue", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vipFormApplyCardPriority", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vipFormDateType", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vipFormDetailContent", 3, "ngModelChange", "ngModel"], [1, "col-md-3"], ["name", "vipFormOrderno", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vipFormActivity", 1, "w-100", 3, "ngModelChange", "ngModel"], [1, "mb-1"], [1, "fw-bold", "mb-0"]], template: function ViewItemParameterComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "nz-card", 4);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementStart(4, "input", 5);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewItemParameterComponent_Template_input_ngModelChange_4_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.treeSearchValue, $event) || (ctx.treeSearchValue = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(6, "div", 6)(7, "nz-tree", 7);
      \u0275\u0275listener("nzClick", function ViewItemParameterComponent_Template_nz_tree_nzClick_7_listener($event) {
        return ctx.onTreeClick($event);
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(8, "div", 8)(9, "nz-card")(10, "div", 9)(11, "span", 10);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 11)(14, "button", 12);
      \u0275\u0275listener("click", function ViewItemParameterComponent_Template_button_click_14_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(15, "i", 13);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "button", 14);
      \u0275\u0275listener("click", function ViewItemParameterComponent_Template_button_click_18_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(19, "i", 15);
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(22, ViewItemParameterComponent_nz_alert_22_Template, 1, 1, "nz-alert", 16);
      \u0275\u0275elementStart(23, "nz-table", 17, 0)(25, "thead")(26, "tr")(27, "th", 18);
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th", 19);
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th", 19);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "th", 20);
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "th", 21);
      \u0275\u0275text(40);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "th", 19);
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "th", 22);
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "th", 22);
      \u0275\u0275text(49);
      \u0275\u0275pipe(50, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "th", 23);
      \u0275\u0275text(52);
      \u0275\u0275pipe(53, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "th", 23);
      \u0275\u0275text(55);
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "th", 24);
      \u0275\u0275text(58);
      \u0275\u0275pipe(59, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "th", 24);
      \u0275\u0275text(61);
      \u0275\u0275pipe(62, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "th", 25);
      \u0275\u0275text(64);
      \u0275\u0275pipe(65, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "th", 25);
      \u0275\u0275text(67);
      \u0275\u0275pipe(68, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "th", 24);
      \u0275\u0275text(70);
      \u0275\u0275pipe(71, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "th", 25);
      \u0275\u0275text(73);
      \u0275\u0275pipe(74, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "th", 25);
      \u0275\u0275text(76);
      \u0275\u0275pipe(77, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "th", 20);
      \u0275\u0275text(79);
      \u0275\u0275pipe(80, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "th", 26);
      \u0275\u0275text(82);
      \u0275\u0275pipe(83, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "th", 27);
      \u0275\u0275text(85);
      \u0275\u0275pipe(86, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "th", 26);
      \u0275\u0275text(88);
      \u0275\u0275pipe(89, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(90, "tbody");
      \u0275\u0275template(91, ViewItemParameterComponent_tr_91_Template, 4, 4, "tr", 28)(92, ViewItemParameterComponent_tr_92_Template, 57, 61, "tr", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275template(93, ViewItemParameterComponent_ng_template_93_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(95, "nz-modal", 30);
      \u0275\u0275pipe(96, "translate");
      \u0275\u0275pipe(97, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewItemParameterComponent_Template_nz_modal_nzOnCancel_95_listener() {
        return ctx.closeModal();
      })("nzOnOk", function ViewItemParameterComponent_Template_nz_modal_nzOnOk_95_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(98, ViewItemParameterComponent_ng_container_98_Template, 157, 189, "ng-container", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "nz-modal", 32);
      \u0275\u0275pipe(100, "translate");
      \u0275\u0275pipe(101, "translate");
      \u0275\u0275pipe(102, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewItemParameterComponent_Template_nz_modal_nzOnCancel_99_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function ViewItemParameterComponent_Template_nz_modal_nzOnOk_99_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(103, ViewItemParameterComponent_ng_container_103_Template, 6, 5, "ng-container", 31);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const vipTable_r10 = \u0275\u0275reference(24);
      const vipTotalTpl_r11 = \u0275\u0275reference(94);
      \u0275\u0275advance(2);
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(3, 50, "arItemParam.treeTitle", "Danh s\xE1ch h\u1EA1ng m\u1EE5c"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.treeSearchValue);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(5, 53, "arItemParam.treeSearchPlaceholder", "T\xECm ki\u1EBFm h\u1EA1ng m\u1EE5c..."));
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275property("nzData", ctx.treeNodes())("nzSearchValue", ctx.treeSearchValue)("nzSelectedKeys", ctx.selectedItemNo ? \u0275\u0275pureFunction1(140, _c0, ctx.selectedItemNo) : \u0275\u0275pureFunction0(142, _c1));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.panelTitle());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(17, 56, "common.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(21, 59, "essDept.exportExcel", "Xu\u1EA5t excel"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", vipTotalTpl_r11)("nzScroll", \u0275\u0275pureFunction0(143, _c2));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 62, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 65, "arItemParam.paramCode", "M\xE3 tham s\u1ED1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 68, "arItemParam.itemCode", "M\xE3 h\u1EA1ng m\u1EE5c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(38, 71, "arItemParam.itemName", "T\xEAn h\u1EA1ng m\u1EE5c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 74, "ar.viewitemparameter.title.unit", "\u0110\u01A1n v\u1ECB"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 77, "ar.viewitemparameter.title.zumingcheng", "Nh\xF3m hi\u1EC7u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(47, 80, "ar.viewitemparameter.title.zuixiaozhi", "Gi\u1EDBi h\u1EA1n t\u1ED1i thi\u1EC3u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 83, "ar.viewitemparameter.title.zuidazhi", "Gi\u1EDBi h\u1EA1n t\u1ED1i \u0111a"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(53, 86, "arItemParam.dependItem", "H\u1EA1ng m\u1EE5c ph\u1EE5 thu\u1ED9c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(56, 89, "arItemParam.replaceItem", "H\u1EA1ng m\u1EE5c thay th\u1EBF"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(59, 92, "ar.viewitemparameter.title.cankaoshuaka", "Tham chi\u1EBFu qu\u1EB9t th\u1EBB"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(62, 95, "ar.viewitemparameter.title.dakakaishibiaozhi", "C\u1EDD b\u1EAFt \u0111\u1EA7u qu\u1EB9t"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(65, 98, "ar.viewitemparameter.title.dakakaishipianyi", "Qu\u1EB9t b\u1EAFt \u0111\u1EA7u b\xF9 tr\u1EEB"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(68, 101, "ar.viewitemparameter.title.dakakaishipianyifangxiang", "Chi\u1EC1u b\xF9 tr\u1EEB b\u1EAFt \u0111\u1EA7u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(71, 104, "ar.viewitemparameter.title.dakajieshubiaozhi", "C\u1EDD k\u1EBFt th\xFAc qu\u1EB9t"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(74, 107, "ar.viewitemparameter.title.dakajieshupianyi", "Qu\u1EB9t k\u1EBFt th\xFAc b\xF9 tr\u1EEB"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(77, 110, "ar.viewitemparameter.title.dakajieshupianyifangxiang", "Chi\u1EC1u b\xF9 tr\u1EEB k\u1EBFt th\xFAc"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(80, 113, "arItemParam.hrPolicyNote", "Ch\xEDnh s\xE1ch nh\xE2n s\u1EF1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(83, 116, "common.sortOrder", "S\u1EAFp x\u1EBFp"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(86, 119, "common.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(89, 122, "common.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", vipTable_r10.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", ctx.modalTitle())("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(96, 125, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(97, 128, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(4);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(100, 131, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(101, 134, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(102, 137, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzInputNumberModule, NzInputNumberComponent, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, NzTagModule, NzTagComponent, NzTreeModule, NzTreeComponent, TranslatePipe], styles: ["\n.vip-btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n.vip-tree-scroll[_ngcontent-%COMP%] {\n  max-height: 700px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=view-item-parameter.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewItemParameterComponent, [{
    type: Component,
    args: [{ selector: "app-view-item-parameter", standalone: true, imports: [
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
      NzTreeModule,
      TranslatePipe
    ], template: `<div class="row">
  <!-- C\xE2y h\u1EA1ng m\u1EE5c b\xEAn tr\xE1i -->
  <div class="col-md-3 mb-3">
    <nz-card [nzTitle]="'arItemParam.treeTitle' | translate:'Danh s\xE1ch h\u1EA1ng m\u1EE5c'">
      <input nz-input class="mb-2" [(ngModel)]="treeSearchValue" name="vipTreeSearch"
             [placeholder]="'arItemParam.treeSearchPlaceholder' | translate:'T\xECm ki\u1EBFm h\u1EA1ng m\u1EE5c...'">
      <div class="vip-tree-scroll">
        <nz-tree [nzData]="treeNodes()" [nzSearchValue]="treeSearchValue" nzSelectMode
                 [nzSelectedKeys]="selectedItemNo ? [selectedItemNo] : []"
                 (nzClick)="onTreeClick($event)"></nz-tree>
      </div>
    </nz-card>
  </div>

  <!-- B\u1EA3ng th\xF4ng s\u1ED1 h\u1EA1ng m\u1EE5c b\xEAn ph\u1EA3i -->
  <div class="col-md-9 mb-3">
    <nz-card>
      <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <span class="fw-bold">{{ panelTitle() }}</span>
        <div class="d-flex gap-2 flex-wrap">
          <button nz-button nzType="primary" type="button" (click)="openAddModal()">
            <i class="bx bx-plus"></i> {{ 'common.addNew' | translate:'Th\xEAm m\u1EDBi' }}
          </button>
          <button nz-button nzType="default" type="button" class="vip-btn-export" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'essDept.exportExcel' | translate:'Xu\u1EA5t excel' }}
          </button>
        </div>
      </div>

      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <!-- nzWidth khai b\xE1o cho t\u1EEBng c\u1ED9t \u0111\u1EC3 \u0111\u1ED3ng b\u1ED9 \u0111\u1ED9 r\u1ED9ng header/body khi d\xF9ng nzScroll. -->
      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="vipTotalTpl"
                [nzScroll]="{ x: '2400px', y: 'calc(100vh - 460px)' }" #vipTable>
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
          <tr *ngFor="let row of vipTable.data; let i = index">
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
        <ng-template #vipTotalTpl let-total>
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
        <label class="form-label fw-semibold">{{ 'arItemParam.itemCode' | translate:'Thu\u1ED9c h\u1EA1ng m\u1EE5c' }}</label>
        <input nz-input [ngModel]="formItemLabel" name="vipFormItemNo" disabled>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'ar.viewitemparameter.title.zumingcheng' | translate:'Nh\xF3m hi\u1EC7u' }}</label>
        <input nz-input [(ngModel)]="form.groupNo" name="vipFormGroupNo">
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'ar.viewitemparameter.title.unit' | translate:'\u0110\u01A1n v\u1ECB' }}</label>
        <input nz-input [(ngModel)]="form.unit" name="vipFormUnit">
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'arItemParam.unitValue' | translate:'Gi\xE1 tr\u1ECB \u0111\u01A1n v\u1ECB' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.unitValue" name="vipFormUnitValue"></nz-input-number>
      </div>
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'ar.viewitemparameter.title.zuixiaozhi' | translate:'Gi\xE1 tr\u1ECB t\u1ED1i thi\u1EC3u' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.minValue" name="vipFormMinValue"></nz-input-number>
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'ar.viewitemparameter.title.zuidazhi' | translate:'Gi\xE1 tr\u1ECB t\u1ED1i \u0111a' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.maxValue" name="vipFormMaxValue"></nz-input-number>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'arItemParam.dependItem' | translate:'H\u1EA1ng m\u1EE5c ph\u1EE5 thu\u1ED9c' }}</label>
        <input nz-input [(ngModel)]="form.dependItem" name="vipFormDependItem">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'arItemParam.replaceItem' | translate:'H\u1EA1ng m\u1EE5c thay th\u1EBF' }}</label>
        <input nz-input [(ngModel)]="form.replaceItem" name="vipFormReplaceItem">
      </div>
    </div>

    <h6 class="mb-3 text-primary border-bottom pb-2">{{ 'arItemParam.cardSection' | translate:'Th\xF4ng tin qu\u1EB9t th\u1EBB' }}</h6>
    <div class="row g-3 mb-4">
      <div class="col-md-4">
        <label class="form-label fw-semibold d-block">{{ 'ar.viewitemparameter.title.cankaoshuaka' | translate:'Tham chi\u1EBFu qu\u1EB9t th\u1EBB' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.cardFlag" name="vipFormCardFlag">
          <nz-option [nzValue]="1" [nzLabel]="'common.yes' | translate:'C\xF3'"></nz-option>
          <nz-option [nzValue]="0" [nzLabel]="'common.no' | translate:'Kh\xF4ng'"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold d-block">{{ 'ar.viewitemparameter.title.dakakaishibiaozhi' | translate:'C\u1EDD b\u1EAFt \u0111\u1EA7u qu\u1EB9t' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.cardFromFlag" name="vipFormCardFromFlag">
          <nz-option [nzValue]="1" [nzLabel]="'common.yes' | translate:'C\xF3'"></nz-option>
          <nz-option [nzValue]="0" [nzLabel]="'common.no' | translate:'Kh\xF4ng'"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold d-block">{{ 'ar.viewitemparameter.title.dakajieshubiaozhi' | translate:'C\u1EDD k\u1EBFt th\xFAc qu\u1EB9t' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.cardToFlag" name="vipFormCardToFlag">
          <nz-option [nzValue]="1" [nzLabel]="'common.yes' | translate:'C\xF3'"></nz-option>
          <nz-option [nzValue]="0" [nzLabel]="'common.no' | translate:'Kh\xF4ng'"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'ar.viewitemparameter.title.dakakaishipianyi' | translate:'Qu\u1EB9t b\u1EAFt \u0111\u1EA7u b\xF9 tr\u1EEB' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.cardFromOffset" name="vipFormCardFromOffset"></nz-input-number>
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold d-block">{{ 'ar.viewitemparameter.title.dakakaishipianyifangxiang' | translate:'Chi\u1EC1u b\xF9 tr\u1EEB b\u1EAFt \u0111\u1EA7u' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.cardFromRelation" name="vipFormCardFromRelation" nzAllowClear>
          <nz-option *ngFor="let r of relationOptions" [nzValue]="r.value" [nzLabel]="i18n.t(r.key, r.fallback)"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'ar.viewitemparameter.title.dakajieshupianyi' | translate:'Qu\u1EB9t k\u1EBFt th\xFAc b\xF9 tr\u1EEB' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.cardToOffset" name="vipFormCardToOffset"></nz-input-number>
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold d-block">{{ 'ar.viewitemparameter.title.dakajieshupianyifangxiang' | translate:'Chi\u1EC1u b\xF9 tr\u1EEB k\u1EBFt th\xFAc' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.cardToRelation" name="vipFormCardToRelation" nzAllowClear>
          <nz-option *ngFor="let r of relationOptions" [nzValue]="r.value" [nzLabel]="i18n.t(r.key, r.fallback)"></nz-option>
        </nz-select>
      </div>
    </div>

    <h6 class="mb-3 text-primary border-bottom pb-2">{{ 'arItemParam.applySection' | translate:'Th\xF4ng tin \xE1p d\u1EE5ng' }}</h6>
    <div class="row g-3">
      <div class="col-md-4">
        <label class="form-label fw-semibold d-block">{{ 'ar.viewitemparameter.title.shifoucankaoshenqing' | translate:'Tham chi\u1EBFu l\xE0m \u0111\u01A1n xin ph\xE9p' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.applyFlag" name="vipFormApplyFlag">
          <nz-option [nzValue]="1" [nzLabel]="'common.yes' | translate:'C\xF3'"></nz-option>
          <nz-option [nzValue]="0" [nzLabel]="'common.no' | translate:'Kh\xF4ng'"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'ar.viewitemparameter.title.shenqingleixing' | translate:'Lo\u1EA1i \u0111\u01A1n (CODE)' }}</label>
        <input nz-input [(ngModel)]="form.applyType" name="vipFormApplyType">
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'ar.viewitemparameter.title.shenqingmanyirishuzhi' | translate:'Gi\xE1 tr\u1ECB t\u01B0\u01A1ng \u0111\u01B0\u01A1ng c\u1EA3 ng\xE0y' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.applyFulldayValue" name="vipFormApplyFulldayValue"></nz-input-number>
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold d-block">{{ 'ar.viewitemparameter.title.shenqingdakayouxianji' | translate:'\u01AFu ti\xEAn th\u1EBB qu\u1EB9t h\u01A1n \u0111\u01A1n' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.applyCardPriority" name="vipFormApplyCardPriority">
          <nz-option [nzValue]="1" [nzLabel]="'common.yes' | translate:'C\xF3'"></nz-option>
          <nz-option [nzValue]="0" [nzLabel]="'common.no' | translate:'Kh\xF4ng'"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'ar.viewitemparameter.title.riqileixing' | translate:'Lo\u1EA1i ng\xE0y ngh\u1EC9 \xE1p d\u1EE5ng (CODE)' }}</label>
        <input nz-input [(ngModel)]="form.dateType" name="vipFormDateType">
      </div>
      <div class="col-md-4"></div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'arItemParam.hrPolicyNote' | translate:'Ghi ch\xFA ch\xEDnh s\xE1ch nh\xE2n s\u1EF1' }}</label>
        <input nz-input [(ngModel)]="form.detailContent" name="vipFormDetailContent">
      </div>
      <div class="col-md-3">
        <label class="form-label fw-semibold">{{ 'common.sortOrder' | translate:'S\u1EAFp x\u1EBFp' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.orderno" name="vipFormOrderno"></nz-input-number>
      </div>
      <div class="col-md-3">
        <label class="form-label fw-semibold d-block">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.activity" name="vipFormActivity">
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
`, styles: ["/* src/app/view-item-parameter/view-item-parameter.component.css */\n.vip-btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n.vip-tree-scroll {\n  max-height: 700px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=view-item-parameter.component.css.map */\n"] }]
  }], () => [{ type: ViewArItemParamListService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewItemParameterComponent, { className: "ViewItemParameterComponent", filePath: "src/app/view-item-parameter/view-item-parameter.component.ts", lineNumber: 138 });
})();
export {
  ViewItemParameterComponent
};
//# debugId=7e14f3b8-9022-53a5-b815-dca2f2dc8dc4
//# sourceMappingURL=chunk-U5CZKS3D.js.map
