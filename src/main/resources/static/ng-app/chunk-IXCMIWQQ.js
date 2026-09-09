import {
  NzInputAddonAfterDirective,
  NzInputAddonBeforeDirective,
  NzInputPrefixDirective,
  NzInputSuffixDirective
} from "./chunk-VO7C5C6M.js";
import {
  DOWN_ARROW,
  ENTER,
  FocusMonitor,
  NG_VALUE_ACCESSOR,
  UP_ARROW
} from "./chunk-TNYKEBYQ.js";
import {
  Component,
  ContentChild,
  DestroyRef,
  Directionality,
  ElementRef,
  Injector,
  Input,
  NZ_FORM_SIZE,
  NZ_FORM_VARIANT,
  NZ_SPACE_COMPACT_ITEM_TYPE,
  NZ_SPACE_COMPACT_SIZE,
  NgModule,
  NgTemplateOutlet,
  NzFormItemFeedbackIconComponent,
  NzFormStatusService,
  NzIconDirective,
  NzIconModule,
  NzSpaceCompactItemDirective,
  Output,
  ViewChild,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  booleanAttribute,
  computed,
  contentChild,
  forwardRef,
  getStatusClassNames,
  getVariantClassNames,
  inject,
  input,
  isNil,
  isNotNil,
  linkedSignal,
  numberAttribute,
  output,
  setClassMetadata,
  signal,
  takeUntilDestroyed,
  triggerFocus,
  untracked,
  viewChild,
  ɵɵHostDirectivesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuerySignal
} from "./chunk-VTW5U2M5.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-input-number.mjs
var _c0 = ["input"];
var _c1 = ["inputNumberHost"];
var _c2 = [[["", "nzInputAddonBefore", ""]], [["", "nzInputAddonAfter", ""]], [["", "nzInputPrefix", ""]], [["", "nzInputSuffix", ""]], [["", "nzInputNumberUpIcon", ""]], [["", "nzInputNumberDownIcon", ""]]];
var _c3 = ["[nzInputAddonBefore]", "[nzInputAddonAfter]", "[nzInputPrefix]", "[nzInputSuffix]", "[nzInputNumberUpIcon]", "[nzInputNumberDownIcon]"];
function NzInputNumberComponent_Conditional_0_ng_template_0_Template(rf, ctx) {
}
function NzInputNumberComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzInputNumberComponent_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const inputNumberWithAddonInner_r1 = \u0275\u0275reference(4);
    \u0275\u0275property("ngTemplateOutlet", inputNumberWithAddonInner_r1);
  }
}
function NzInputNumberComponent_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzInputNumberComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzInputNumberComponent_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const inputNumberWithAffixInner_r2 = \u0275\u0275reference(8);
    \u0275\u0275property("ngTemplateOutlet", inputNumberWithAffixInner_r2);
  }
}
function NzInputNumberComponent_Conditional_2_ng_template_0_Template(rf, ctx) {
}
function NzInputNumberComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzInputNumberComponent_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const inputNumberInner_r3 = \u0275\u0275reference(12);
    \u0275\u0275property("ngTemplateOutlet", inputNumberInner_r3);
  }
}
function NzInputNumberComponent_ng_template_3_Conditional_1_ProjectionFallback_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate(ctx_r3.nzAddonBefore());
  }
}
function NzInputNumberComponent_ng_template_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275projection(1, 0, null, NzInputNumberComponent_ng_template_3_Conditional_1_ProjectionFallback_1_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
}
function NzInputNumberComponent_ng_template_3_Conditional_2_ng_template_0_Template(rf, ctx) {
}
function NzInputNumberComponent_ng_template_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzInputNumberComponent_ng_template_3_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const inputNumberWithAffix_r5 = \u0275\u0275reference(6);
    \u0275\u0275property("ngTemplateOutlet", inputNumberWithAffix_r5);
  }
}
function NzInputNumberComponent_ng_template_3_Conditional_3_ng_template_0_Template(rf, ctx) {
}
function NzInputNumberComponent_ng_template_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzInputNumberComponent_ng_template_3_Conditional_3_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const inputNumber_r6 = \u0275\u0275reference(10);
    \u0275\u0275property("ngTemplateOutlet", inputNumber_r6);
  }
}
function NzInputNumberComponent_ng_template_3_Conditional_4_ProjectionFallback_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate(ctx_r3.nzAddonAfter());
  }
}
function NzInputNumberComponent_ng_template_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275projection(1, 1, null, NzInputNumberComponent_ng_template_3_Conditional_4_ProjectionFallback_1_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
}
function NzInputNumberComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275conditionalCreate(1, NzInputNumberComponent_ng_template_3_Conditional_1_Template, 3, 0, "div", 10);
    \u0275\u0275conditionalCreate(2, NzInputNumberComponent_ng_template_3_Conditional_2_Template, 1, 1, null, 8)(3, NzInputNumberComponent_ng_template_3_Conditional_3_Template, 1, 1, null, 8);
    \u0275\u0275conditionalCreate(4, NzInputNumberComponent_ng_template_3_Conditional_4_Template, 3, 0, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.hasAddonBefore() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.hasAffix() ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.hasAddonAfter() ? 4 : -1);
  }
}
function NzInputNumberComponent_ng_template_5_ng_template_1_Template(rf, ctx) {
}
function NzInputNumberComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, NzInputNumberComponent_ng_template_5_ng_template_1_Template, 0, 0, "ng-template", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const inputNumberWithAffixInner_r2 = \u0275\u0275reference(8);
    \u0275\u0275classMap(ctx_r3.affixWrapperClass());
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", inputNumberWithAffixInner_r2);
  }
}
function NzInputNumberComponent_ng_template_7_Conditional_0_ProjectionFallback_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate(ctx_r3.nzPrefix());
  }
}
function NzInputNumberComponent_ng_template_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275projection(1, 2, null, NzInputNumberComponent_ng_template_7_Conditional_0_ProjectionFallback_1_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
}
function NzInputNumberComponent_ng_template_7_ng_template_1_Template(rf, ctx) {
}
function NzInputNumberComponent_ng_template_7_Conditional_2_ProjectionFallback_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate(ctx_r3.nzSuffix());
  }
}
function NzInputNumberComponent_ng_template_7_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-form-item-feedback-icon", 13);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("status", ctx_r3.finalStatus());
  }
}
function NzInputNumberComponent_ng_template_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275projection(1, 3, null, NzInputNumberComponent_ng_template_7_Conditional_2_ProjectionFallback_1_Template, 1, 1);
    \u0275\u0275conditionalCreate(3, NzInputNumberComponent_ng_template_7_Conditional_2_Conditional_3_Template, 1, 1, "nz-form-item-feedback-icon", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.hasFeedback() && ctx_r3.finalStatus() ? 3 : -1);
  }
}
function NzInputNumberComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NzInputNumberComponent_ng_template_7_Conditional_0_Template, 3, 0, "span", 11);
    \u0275\u0275template(1, NzInputNumberComponent_ng_template_7_ng_template_1_Template, 0, 0, "ng-template", 8);
    \u0275\u0275conditionalCreate(2, NzInputNumberComponent_ng_template_7_Conditional_2_Template, 4, 1, "span", 12);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const inputNumber_r6 = \u0275\u0275reference(10);
    \u0275\u0275conditional(ctx_r3.hasPrefix() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", inputNumber_r6);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.hasSuffix() ? 2 : -1);
  }
}
function NzInputNumberComponent_ng_template_9_ng_template_2_Template(rf, ctx) {
}
function NzInputNumberComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", null, 5);
    \u0275\u0275template(2, NzInputNumberComponent_ng_template_9_ng_template_2_Template, 0, 0, "ng-template", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const inputNumberInner_r3 = \u0275\u0275reference(12);
    \u0275\u0275classMap(ctx_r3.inputNumberClass());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", inputNumberInner_r3);
  }
}
function NzInputNumberComponent_ng_template_11_Conditional_0_ProjectionFallback_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 20);
  }
}
function NzInputNumberComponent_ng_template_11_Conditional_0_ProjectionFallback_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 21);
  }
}
function NzInputNumberComponent_ng_template_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17, 7);
    \u0275\u0275listener("mouseup", function NzInputNumberComponent_ng_template_11_Conditional_0_Template_div_mouseup_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.stopAutoStep());
    })("mouseleave", function NzInputNumberComponent_ng_template_11_Conditional_0_Template_div_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.stopAutoStep());
    });
    \u0275\u0275elementStart(2, "span", 18);
    \u0275\u0275listener("mousedown", function NzInputNumberComponent_ng_template_11_Conditional_0_Template_span_mousedown_2_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onStepMouseDown($event, true));
    });
    \u0275\u0275projection(3, 4, null, NzInputNumberComponent_ng_template_11_Conditional_0_ProjectionFallback_3_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 19);
    \u0275\u0275listener("mousedown", function NzInputNumberComponent_ng_template_11_Conditional_0_Template_span_mousedown_5_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onStepMouseDown($event, false));
    });
    \u0275\u0275projection(6, 5, null, NzInputNumberComponent_ng_template_11_Conditional_0_ProjectionFallback_6_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("ant-input-number-handler-up-disabled", ctx_r3.upDisabled());
    \u0275\u0275attribute("aria-disabled", ctx_r3.upDisabled());
    \u0275\u0275advance(3);
    \u0275\u0275classProp("ant-input-number-handler-down-disabled", ctx_r3.downDisabled());
    \u0275\u0275attribute("aria-disabled", ctx_r3.downDisabled());
  }
}
function NzInputNumberComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, NzInputNumberComponent_ng_template_11_Conditional_0_Template, 8, 6, "div", 14);
    \u0275\u0275elementStart(1, "div", 15)(2, "input", 16, 6);
    \u0275\u0275listener("input", function NzInputNumberComponent_ng_template_11_Template_input_input_2_listener() {
      \u0275\u0275restoreView(_r7);
      const input_r9 = \u0275\u0275reference(3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onInput(input_r9.value));
    })("wheel", function NzInputNumberComponent_ng_template_11_Template_input_wheel_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onWheel($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r3.nzControls() ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r3.displayValue())("placeholder", ctx_r3.nzPlaceHolder() ?? "")("disabled", ctx_r3.finalDisabled())("readOnly", ctx_r3.nzReadOnly());
    \u0275\u0275attribute("aria-valuemin", ctx_r3.nzMin())("aria-valuemax", ctx_r3.nzMax())("id", ctx_r3.nzId())("step", ctx_r3.nzStep())("value", ctx_r3.displayValue());
  }
}
var NzInputNumberComponent = class _NzInputNumberComponent {
  nzId = input(
    null,
    ...ngDevMode ? [{
      debugName: "nzId"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  nzSize = input(
    "default",
    ...ngDevMode ? [{
      debugName: "nzSize"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  nzPlaceHolder = input(
    null,
    ...ngDevMode ? [{
      debugName: "nzPlaceHolder"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  nzStatus = input(
    "",
    ...ngDevMode ? [{
      debugName: "nzStatus"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  nzVariant = input(
    ...ngDevMode ? [void 0, {
      debugName: "nzVariant"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  nzStep = input(1, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "nzStep"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  nzMin = input(Number.MIN_SAFE_INTEGER, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "nzMin"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  nzMax = input(Number.MAX_SAFE_INTEGER, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "nzMax"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  nzPrecision = input(
    null,
    ...ngDevMode ? [{
      debugName: "nzPrecision"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  nzParser = input(
    ...ngDevMode ? [void 0, {
      debugName: "nzParser"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  nzFormatter = input(
    ...ngDevMode ? [void 0, {
      debugName: "nzFormatter"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  nzDisabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "nzDisabled"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  nzReadOnly = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "nzReadOnly"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  nzAutoFocus = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "nzAutoFocus"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  nzKeyboard = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "nzKeyboard"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  nzControls = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "nzControls"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  nzChangeOnWheel = input(true, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "nzChangeOnWheel"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  nzPrefix = input(
    ...ngDevMode ? [void 0, {
      debugName: "nzPrefix"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  nzSuffix = input(
    ...ngDevMode ? [void 0, {
      debugName: "nzSuffix"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  nzAddonBefore = input(
    ...ngDevMode ? [void 0, {
      debugName: "nzAddonBefore"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  nzAddonAfter = input(
    ...ngDevMode ? [void 0, {
      debugName: "nzAddonAfter"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  nzBlur = output();
  nzFocus = output();
  nzOnStep = output();
  onChange = () => {
  };
  onTouched = () => {
  };
  isDisabledFirstChange = true;
  compactSize = inject(NZ_SPACE_COMPACT_SIZE, {
    optional: true
  });
  inputRef = viewChild.required(
    "input",
    ...ngDevMode ? [{
      debugName: "inputRef"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  hostRef = viewChild(
    "inputNumberHost",
    ...ngDevMode ? [{
      debugName: "hostRef"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  elementRef = inject(ElementRef);
  injector = inject(Injector);
  focusMonitor = inject(FocusMonitor);
  directionality = inject(Directionality);
  nzFormStatusService = inject(NzFormStatusService, {
    optional: true
  });
  autoStepTimer = null;
  defaultFormatter = (value) => {
    const precision = this.nzPrecision();
    if (isNotNil(precision)) {
      return value.toFixed(precision);
    }
    return value.toString();
  };
  value = signal(
    null,
    ...ngDevMode ? [{
      debugName: "value"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  displayValue = signal(
    "",
    ...ngDevMode ? [{
      debugName: "displayValue"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  formSize = inject(NZ_FORM_SIZE, {
    optional: true
  });
  formVariant = inject(NZ_FORM_VARIANT, {
    optional: true
  });
  dir = inject(Directionality).valueSignal;
  focused = signal(
    false,
    ...ngDevMode ? [{
      debugName: "focused"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  hasFeedback = signal(
    false,
    ...ngDevMode ? [{
      debugName: "hasFeedback"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  finalStatus = linkedSignal(
    () => this.nzStatus(),
    ...ngDevMode ? [{
      debugName: "finalStatus"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  finalDisabled = linkedSignal(
    () => this.nzDisabled(),
    ...ngDevMode ? [{
      debugName: "finalDisabled"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  prefix = contentChild(
    NzInputPrefixDirective,
    ...ngDevMode ? [{
      debugName: "prefix"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  suffix = contentChild(
    NzInputSuffixDirective,
    ...ngDevMode ? [{
      debugName: "suffix"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  addonBefore = contentChild(
    NzInputAddonBeforeDirective,
    ...ngDevMode ? [{
      debugName: "addonBefore"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  addonAfter = contentChild(
    NzInputAddonAfterDirective,
    ...ngDevMode ? [{
      debugName: "addonAfter"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  hasPrefix = computed(
    () => !!this.nzPrefix() || !!this.prefix(),
    ...ngDevMode ? [{
      debugName: "hasPrefix"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  hasSuffix = computed(
    () => !!this.nzSuffix() || !!this.suffix() || this.hasFeedback(),
    ...ngDevMode ? [{
      debugName: "hasSuffix"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  hasAffix = computed(
    () => this.hasPrefix() || this.hasSuffix(),
    ...ngDevMode ? [{
      debugName: "hasAffix"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  hasAddonBefore = computed(
    () => !!this.nzAddonBefore() || !!this.addonBefore(),
    ...ngDevMode ? [{
      debugName: "hasAddonBefore"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  hasAddonAfter = computed(
    () => !!this.nzAddonAfter() || !!this.addonAfter(),
    ...ngDevMode ? [{
      debugName: "hasAddonAfter"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  hasAddon = computed(
    () => this.hasAddonBefore() || this.hasAddonAfter(),
    ...ngDevMode ? [{
      debugName: "hasAddon"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  class = computed(
    () => {
      if (this.hasAddon()) {
        return this.groupWrapperClass();
      }
      if (this.hasAffix()) {
        return this.affixWrapperClass();
      }
      return this.inputNumberClass();
    },
    ...ngDevMode ? [{
      debugName: "class"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  inputNumberClass = computed(
    () => {
      return __spreadValues(__spreadValues({
        "ant-input-number": true,
        "ant-input-number-lg": this.finalSize() === "large",
        "ant-input-number-sm": this.finalSize() === "small",
        "ant-input-number-disabled": this.finalDisabled(),
        "ant-input-number-readonly": this.nzReadOnly(),
        "ant-input-number-focused": this.focused(),
        "ant-input-number-rtl": this.dir() === "rtl",
        "ant-input-number-in-form-item": !!this.nzFormStatusService,
        "ant-input-number-out-of-range": this.value() !== null && !isInRange(this.value(), this.nzMin(), this.nzMax())
      }, getVariantClassNames("ant-input-number", this.finalVariant())), getStatusClassNames("ant-input-number", this.finalStatus(), this.hasFeedback()));
    },
    ...ngDevMode ? [{
      debugName: "inputNumberClass"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  affixWrapperClass = computed(
    () => {
      return __spreadValues(__spreadValues({
        "ant-input-number-affix-wrapper": true,
        "ant-input-number-affix-wrapper-disabled": this.finalDisabled(),
        "ant-input-number-affix-wrapper-readonly": this.nzReadOnly(),
        "ant-input-number-affix-wrapper-focused": this.focused(),
        "ant-input-number-affix-wrapper-rtl": this.dir() === "rtl"
      }, getStatusClassNames("ant-input-number-affix-wrapper", this.finalStatus(), this.hasFeedback())), getVariantClassNames("ant-input-number-affix-wrapper", this.finalVariant()));
    },
    ...ngDevMode ? [{
      debugName: "affixWrapperClass"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  groupWrapperClass = computed(
    () => {
      return __spreadValues(__spreadValues({
        "ant-input-number-group-wrapper": true,
        "ant-input-number-group-wrapper-rtl": this.dir() === "rtl"
      }, getStatusClassNames("ant-input-number-group-wrapper", this.finalStatus(), this.hasFeedback())), getVariantClassNames("ant-input-number-group-wrapper", this.finalVariant()));
    },
    ...ngDevMode ? [{
      debugName: "groupWrapperClass"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  finalSize = computed(
    () => {
      if (this.formSize?.()) {
        return this.formSize();
      }
      if (this.compactSize) {
        return this.compactSize();
      }
      return this.nzSize();
    },
    ...ngDevMode ? [{
      debugName: "finalSize"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  finalVariant = computed(
    () => this.nzVariant() || this.formVariant?.() || "outlined",
    ...ngDevMode ? [{
      debugName: "finalVariant"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  upDisabled = computed(
    () => {
      return !isNil(this.value()) && this.value() >= this.nzMax();
    },
    ...ngDevMode ? [{
      debugName: "upDisabled"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  downDisabled = computed(
    () => {
      return !isNil(this.value()) && this.value() <= this.nzMin();
    },
    ...ngDevMode ? [{
      debugName: "downDisabled"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const hostRef = this.hostRef();
      const element = hostRef ? hostRef : this.elementRef;
      this.focusMonitor.monitor(element, true).pipe(takeUntilDestroyed(destroyRef)).subscribe((origin) => {
        untracked(() => {
          this.focused.set(!!origin);
          if (origin) {
            this.nzFocus.emit();
          } else {
            this.fixValue();
            this.onTouched();
            this.nzBlur.emit();
          }
        });
      });
      destroyRef.onDestroy(() => {
        this.focusMonitor.stopMonitoring(element);
      });
    });
    this.nzFormStatusService?.formStatusChanges.pipe(takeUntilDestroyed()).subscribe(({
      status,
      hasFeedback
    }) => {
      this.finalStatus.set(status);
      this.hasFeedback.set(hasFeedback);
    });
  }
  ngOnInit() {
    if (this.nzAutoFocus()) {
      afterNextRender(() => this.focus(), {
        injector: this.injector
      });
    }
  }
  writeValue(value) {
    if (isNil(value)) value = null;
    untracked(() => {
      this.value.set(value);
      this.setValue(value);
    });
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(disabled) {
    untracked(() => {
      this.finalDisabled.set(this.isDisabledFirstChange && this.nzDisabled() || disabled);
    });
    this.isDisabledFirstChange = false;
  }
  focus(options) {
    triggerFocus(this.inputRef().nativeElement, options);
  }
  blur() {
    this.inputRef().nativeElement.blur();
  }
  step(event, up, emitter) {
    if (up && this.upDisabled() || !up && this.downDisabled()) {
      return;
    }
    let step = event.shiftKey ? this.nzStep() * 10 : this.nzStep();
    if (!up) {
      step = -step;
    }
    const places = getDecimalPlaces(step);
    const multiple = 10 ** places;
    const nextValue = getRangeValue(
      // Convert floating point numbers to integers to avoid floating point math errors
      (Math.round((this.value() || 0) * multiple) + Math.round(step * multiple)) / multiple,
      this.nzMin(),
      this.nzMax(),
      this.nzPrecision()
    );
    this.setValue(nextValue);
    this.nzOnStep.emit({
      type: up ? "up" : "down",
      value: this.value(),
      offset: this.nzStep(),
      emitter
    });
    this.focus();
  }
  setValue(value) {
    const formatter = this.nzFormatter() ?? this.defaultFormatter;
    const precision = this.nzPrecision();
    if (isNotNil(precision)) {
      value &&= +value.toFixed(precision);
    }
    const formattedValue = isNil(value) ? "" : formatter(value);
    this.displayValue.set(formattedValue);
    this.updateValue(value);
  }
  setValueByTyping(value) {
    this.displayValue.set(value);
    if (value === "") {
      this.updateValue(null);
      return;
    }
    const parser = this.nzParser() ?? defaultParser;
    const parsedValue = parser(value);
    if (isNotCompleteNumber(value) || Number.isNaN(parsedValue)) {
      return;
    }
    const formatter = this.nzFormatter();
    if (formatter) {
      const formattedValue = formatter(parsedValue);
      this.displayValue.set(formattedValue);
    }
    if (!isInRange(parsedValue, this.nzMin(), this.nzMax())) {
      return;
    }
    this.updateValue(parsedValue);
  }
  updateValue(value) {
    if (this.value() !== value) {
      this.value.set(value);
      this.onChange(value);
    }
  }
  fixValue() {
    const displayValue = this.displayValue();
    if (displayValue === "") {
      return;
    }
    const parser = this.nzParser() ?? defaultParser;
    let fixedValue = parser(displayValue);
    if (Number.isNaN(fixedValue)) {
      fixedValue = this.value();
    } else {
      const precision = this.nzPrecision();
      if (isNotNil(precision) && getDecimalPlaces(fixedValue) !== precision) {
        fixedValue = +fixedValue.toFixed(precision);
      }
      if (!isInRange(fixedValue, this.nzMin(), this.nzMax())) {
        fixedValue = getRangeValue(fixedValue, this.nzMin(), this.nzMax(), precision);
      }
    }
    this.setValue(fixedValue);
  }
  stopAutoStep() {
    if (this.autoStepTimer !== null) {
      clearTimeout(this.autoStepTimer);
      this.autoStepTimer = null;
    }
  }
  onStepMouseDown(event, up) {
    event.preventDefault();
    this.stopAutoStep();
    this.step(event, up, "handler");
    const loopStep = () => {
      this.step(event, up, "handler");
      this.autoStepTimer = setTimeout(loopStep, STEP_INTERVAL);
    };
    this.autoStepTimer = setTimeout(loopStep, STEP_DELAY);
  }
  onKeyDown(event) {
    switch (event.keyCode) {
      case UP_ARROW:
        event.preventDefault();
        this.nzKeyboard() && this.step(event, true, "keyboard");
        break;
      case DOWN_ARROW:
        event.preventDefault();
        this.nzKeyboard() && this.step(event, false, "keyboard");
        break;
      case ENTER:
        this.fixValue();
        break;
    }
  }
  onInput(value) {
    this.setValueByTyping(value);
  }
  onWheel(event) {
    if (this.finalDisabled() || this.nzReadOnly() || !this.nzChangeOnWheel()) {
      return;
    }
    event.preventDefault();
    this.step(event, event.deltaY < 0, "wheel");
  }
  static \u0275fac = function NzInputNumberComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzInputNumberComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzInputNumberComponent,
    selectors: [["nz-input-number"]],
    contentQueries: function NzInputNumberComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.prefix, NzInputPrefixDirective, 5)(dirIndex, ctx.suffix, NzInputSuffixDirective, 5)(dirIndex, ctx.addonBefore, NzInputAddonBeforeDirective, 5)(dirIndex, ctx.addonAfter, NzInputAddonAfterDirective, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(4);
      }
    },
    viewQuery: function NzInputNumberComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.inputRef, _c0, 5)(ctx.hostRef, _c1, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    },
    hostVars: 2,
    hostBindings: function NzInputNumberComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function NzInputNumberComponent_keydown_HostBindingHandler($event) {
          return ctx.onKeyDown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.class());
      }
    },
    inputs: {
      nzId: [1, "nzId"],
      nzSize: [1, "nzSize"],
      nzPlaceHolder: [1, "nzPlaceHolder"],
      nzStatus: [1, "nzStatus"],
      nzVariant: [1, "nzVariant"],
      nzStep: [1, "nzStep"],
      nzMin: [1, "nzMin"],
      nzMax: [1, "nzMax"],
      nzPrecision: [1, "nzPrecision"],
      nzParser: [1, "nzParser"],
      nzFormatter: [1, "nzFormatter"],
      nzDisabled: [1, "nzDisabled"],
      nzReadOnly: [1, "nzReadOnly"],
      nzAutoFocus: [1, "nzAutoFocus"],
      nzKeyboard: [1, "nzKeyboard"],
      nzControls: [1, "nzControls"],
      nzChangeOnWheel: [1, "nzChangeOnWheel"],
      nzPrefix: [1, "nzPrefix"],
      nzSuffix: [1, "nzSuffix"],
      nzAddonBefore: [1, "nzAddonBefore"],
      nzAddonAfter: [1, "nzAddonAfter"]
    },
    outputs: {
      nzBlur: "nzBlur",
      nzFocus: "nzFocus",
      nzOnStep: "nzOnStep"
    },
    exportAs: ["nzInputNumber"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _NzInputNumberComponent),
      multi: true
    }, {
      provide: NZ_SPACE_COMPACT_ITEM_TYPE,
      useValue: "input-number"
    }]), \u0275\u0275HostDirectivesFeature([NzSpaceCompactItemDirective])],
    ngContentSelectors: _c3,
    decls: 13,
    vars: 1,
    consts: [["inputNumberWithAddonInner", ""], ["inputNumberWithAffix", ""], ["inputNumberWithAffixInner", ""], ["inputNumber", ""], ["inputNumberInner", ""], ["inputNumberHost", ""], ["input", ""], ["handlers", ""], [3, "ngTemplateOutlet"], [1, "ant-input-number-wrapper", "ant-input-number-group"], [1, "ant-input-number-group-addon"], [1, "ant-input-number-prefix"], [1, "ant-input-number-suffix"], [3, "status"], [1, "ant-input-number-handler-wrap"], [1, "ant-input-number-input-wrap"], ["autocomplete", "off", "role", "spinbutton", 1, "ant-input-number-input", 3, "input", "wheel", "value", "placeholder", "disabled", "readOnly"], [1, "ant-input-number-handler-wrap", 3, "mouseup", "mouseleave"], ["role", "button", "unselectable", "on", 1, "ant-input-number-handler", "ant-input-number-handler-up", 3, "mousedown"], ["role", "button", "unselectable", "on", 1, "ant-input-number-handler", "ant-input-number-handler-down", 3, "mousedown"], ["nzType", "up", 1, "ant-input-number-handler-up-inner"], ["nzType", "down", 1, "ant-input-number-handler-down-inner"]],
    template: function NzInputNumberComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c2);
        \u0275\u0275conditionalCreate(0, NzInputNumberComponent_Conditional_0_Template, 1, 1, null, 8)(1, NzInputNumberComponent_Conditional_1_Template, 1, 1, null, 8)(2, NzInputNumberComponent_Conditional_2_Template, 1, 1, null, 8);
        \u0275\u0275template(3, NzInputNumberComponent_ng_template_3_Template, 5, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(5, NzInputNumberComponent_ng_template_5_Template, 2, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(7, NzInputNumberComponent_ng_template_7_Template, 3, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(9, NzInputNumberComponent_ng_template_9_Template, 3, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(11, NzInputNumberComponent_ng_template_11_Template, 4, 10, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.hasAddon() ? 0 : ctx.hasAffix() ? 1 : 2);
      }
    },
    dependencies: [NzIconModule, NzIconDirective, NzFormItemFeedbackIconComponent, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputNumberComponent, [{
    type: Component,
    args: [{
      selector: "nz-input-number",
      exportAs: "nzInputNumber",
      imports: [NzIconModule, NzFormItemFeedbackIconComponent, NgTemplateOutlet],
      template: `
    @if (hasAddon()) {
      <ng-template [ngTemplateOutlet]="inputNumberWithAddonInner" />
    } @else if (hasAffix()) {
      <ng-template [ngTemplateOutlet]="inputNumberWithAffixInner" />
    } @else {
      <ng-template [ngTemplateOutlet]="inputNumberInner" />
    }

    <ng-template #inputNumberWithAddonInner>
      <div class="ant-input-number-wrapper ant-input-number-group">
        @if (hasAddonBefore()) {
          <div class="ant-input-number-group-addon">
            <ng-content select="[nzInputAddonBefore]">{{ nzAddonBefore() }}</ng-content>
          </div>
        }

        @if (hasAffix()) {
          <ng-template [ngTemplateOutlet]="inputNumberWithAffix" />
        } @else {
          <ng-template [ngTemplateOutlet]="inputNumber" />
        }

        @if (hasAddonAfter()) {
          <div class="ant-input-number-group-addon">
            <ng-content select="[nzInputAddonAfter]">{{ nzAddonAfter() }}</ng-content>
          </div>
        }
      </div>
    </ng-template>

    <ng-template #inputNumberWithAffix>
      <div [class]="affixWrapperClass()">
        <ng-template [ngTemplateOutlet]="inputNumberWithAffixInner" />
      </div>
    </ng-template>

    <ng-template #inputNumberWithAffixInner>
      @if (hasPrefix()) {
        <span class="ant-input-number-prefix">
          <ng-content select="[nzInputPrefix]">{{ nzPrefix() }}</ng-content>
        </span>
      }
      <ng-template [ngTemplateOutlet]="inputNumber" />
      @if (hasSuffix()) {
        <span class="ant-input-number-suffix">
          <ng-content select="[nzInputSuffix]">{{ nzSuffix() }}</ng-content>
          @if (hasFeedback() && finalStatus()) {
            <nz-form-item-feedback-icon [status]="finalStatus()" />
          }
        </span>
      }
    </ng-template>

    <ng-template #inputNumber>
      <div #inputNumberHost [class]="inputNumberClass()">
        <ng-template [ngTemplateOutlet]="inputNumberInner" />
      </div>
    </ng-template>

    <ng-template #inputNumberInner>
      @if (nzControls()) {
        <div #handlers class="ant-input-number-handler-wrap" (mouseup)="stopAutoStep()" (mouseleave)="stopAutoStep()">
          <span
            role="button"
            unselectable="on"
            class="ant-input-number-handler ant-input-number-handler-up"
            [class.ant-input-number-handler-up-disabled]="upDisabled()"
            [attr.aria-disabled]="upDisabled()"
            (mousedown)="onStepMouseDown($event, true)"
          >
            <ng-content select="[nzInputNumberUpIcon]">
              <nz-icon nzType="up" class="ant-input-number-handler-up-inner" />
            </ng-content>
          </span>
          <span
            role="button"
            unselectable="on"
            class="ant-input-number-handler ant-input-number-handler-down"
            [class.ant-input-number-handler-down-disabled]="downDisabled()"
            [attr.aria-disabled]="downDisabled()"
            (mousedown)="onStepMouseDown($event, false)"
          >
            <ng-content select="[nzInputNumberDownIcon]">
              <nz-icon nzType="down" class="ant-input-number-handler-down-inner" />
            </ng-content>
          </span>
        </div>
      }

      <div class="ant-input-number-input-wrap">
        <input
          #input
          autocomplete="off"
          role="spinbutton"
          class="ant-input-number-input"
          [attr.aria-valuemin]="nzMin()"
          [attr.aria-valuemax]="nzMax()"
          [attr.id]="nzId()"
          [attr.step]="nzStep()"
          [attr.value]="displayValue()"
          [value]="displayValue()"
          [placeholder]="nzPlaceHolder() ?? ''"
          [disabled]="finalDisabled()"
          [readOnly]="nzReadOnly()"
          (input)="onInput(input.value)"
          (wheel)="onWheel($event)"
        />
      </div>
    </ng-template>
  `,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzInputNumberComponent),
        multi: true
      }, {
        provide: NZ_SPACE_COMPACT_ITEM_TYPE,
        useValue: "input-number"
      }],
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "class()",
        "(keydown)": "onKeyDown($event)"
      },
      hostDirectives: [NzSpaceCompactItemDirective]
    }]
  }], () => [], {
    nzId: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzId",
        required: false
      }]
    }],
    nzSize: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzSize",
        required: false
      }]
    }],
    nzPlaceHolder: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzPlaceHolder",
        required: false
      }]
    }],
    nzStatus: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzStatus",
        required: false
      }]
    }],
    nzVariant: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzVariant",
        required: false
      }]
    }],
    nzStep: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzStep",
        required: false
      }]
    }],
    nzMin: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzMin",
        required: false
      }]
    }],
    nzMax: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzMax",
        required: false
      }]
    }],
    nzPrecision: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzPrecision",
        required: false
      }]
    }],
    nzParser: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzParser",
        required: false
      }]
    }],
    nzFormatter: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzFormatter",
        required: false
      }]
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzDisabled",
        required: false
      }]
    }],
    nzReadOnly: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzReadOnly",
        required: false
      }]
    }],
    nzAutoFocus: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzAutoFocus",
        required: false
      }]
    }],
    nzKeyboard: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzKeyboard",
        required: false
      }]
    }],
    nzControls: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzControls",
        required: false
      }]
    }],
    nzChangeOnWheel: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzChangeOnWheel",
        required: false
      }]
    }],
    nzPrefix: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzPrefix",
        required: false
      }]
    }],
    nzSuffix: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzSuffix",
        required: false
      }]
    }],
    nzAddonBefore: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzAddonBefore",
        required: false
      }]
    }],
    nzAddonAfter: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzAddonAfter",
        required: false
      }]
    }],
    nzBlur: [{
      type: Output,
      args: ["nzBlur"]
    }],
    nzFocus: [{
      type: Output,
      args: ["nzFocus"]
    }],
    nzOnStep: [{
      type: Output,
      args: ["nzOnStep"]
    }],
    inputRef: [{
      type: ViewChild,
      args: ["input", {
        isSignal: true
      }]
    }],
    hostRef: [{
      type: ViewChild,
      args: ["inputNumberHost", {
        isSignal: true
      }]
    }],
    prefix: [{
      type: ContentChild,
      args: [forwardRef(() => NzInputPrefixDirective), {
        isSignal: true
      }]
    }],
    suffix: [{
      type: ContentChild,
      args: [forwardRef(() => NzInputSuffixDirective), {
        isSignal: true
      }]
    }],
    addonBefore: [{
      type: ContentChild,
      args: [forwardRef(() => NzInputAddonBeforeDirective), {
        isSignal: true
      }]
    }],
    addonAfter: [{
      type: ContentChild,
      args: [forwardRef(() => NzInputAddonAfterDirective), {
        isSignal: true
      }]
    }]
  });
})();
var STEP_INTERVAL = 200;
var STEP_DELAY = 600;
function defaultParser(value) {
  const parsedValue = value.trim().replace(/,/g, "").replace(/。/g, ".");
  if (parsedValue.length) {
    return +parsedValue;
  }
  return NaN;
}
function isInRange(value, min, max) {
  return value >= min && value <= max;
}
function getRangeValue(value, min, max, precision = null) {
  if (precision === null) {
    if (value < min) {
      return min;
    }
    if (value > max) {
      return max;
    }
    return value;
  }
  const fixedValue = +value.toFixed(precision);
  const multiple = Math.pow(10, precision);
  if (fixedValue < min) {
    return Math.ceil(min * multiple) / multiple;
  }
  if (fixedValue > max) {
    return Math.floor(max * multiple) / multiple;
  }
  return fixedValue;
}
function getDecimalPlaces(num) {
  return num.toString().split(".")[1]?.length || 0;
}
function isNotCompleteNumber(value) {
  return /[.。](\d*0)?$/.test(value.toString());
}
var NzInputNumberModule = class _NzInputNumberModule {
  static \u0275fac = function NzInputNumberModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzInputNumberModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzInputNumberModule,
    imports: [NzInputNumberComponent, NzInputAddonBeforeDirective, NzInputAddonAfterDirective, NzInputPrefixDirective, NzInputSuffixDirective],
    exports: [NzInputNumberComponent, NzInputAddonBeforeDirective, NzInputAddonAfterDirective, NzInputPrefixDirective, NzInputSuffixDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzInputNumberComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputNumberModule, [{
    type: NgModule,
    args: [{
      imports: [NzInputNumberComponent, NzInputAddonBeforeDirective, NzInputAddonAfterDirective, NzInputPrefixDirective, NzInputSuffixDirective],
      exports: [NzInputNumberComponent, NzInputAddonBeforeDirective, NzInputAddonAfterDirective, NzInputPrefixDirective, NzInputSuffixDirective]
    }]
  }], null, null);
})();

export {
  NzInputNumberComponent,
  NzInputNumberModule
};
//# debugId=f99ac89a-f2f6-56ed-88bd-25b70e1ffb92
//# sourceMappingURL=chunk-IXCMIWQQ.js.map
