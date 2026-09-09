import {
  CheckboxControlValueAccessor,
  FocusMonitor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-TNYKEBYQ.js";
import {
  BehaviorSubject,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  Directionality,
  ElementRef,
  EventEmitter,
  InjectionToken,
  Input,
  NgModule,
  NgTemplateOutlet,
  NgZone,
  NzFormStatusService,
  Observable,
  Output,
  ReplaySubject,
  ViewChild,
  ViewEncapsulation,
  WithConfig,
  __esDecorate,
  __runInitializers,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  booleanAttribute,
  computed,
  distinctUntilChanged,
  effect,
  forwardRef,
  fromEventOutsideAngular,
  inject,
  input,
  linkedSignal,
  numberAttribute,
  of,
  onConfigChangeEventForComponent,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  takeUntilDestroyed,
  untracked,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-VTW5U2M5.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-checkbox.mjs
var _c0 = ["inputElement"];
var _c1 = ["*"];
var _forTrack0 = ($index, $item) => $item.value;
function NzCheckboxGroupComponent_ProjectionFallback_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 0);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzValue", option_r1.value)("nzName", ctx_r1.nzName())("nzDisabled", option_r1.disabled || ctx_r1.finalDisabled());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r1.label, " ");
  }
}
function NzCheckboxGroupComponent_ProjectionFallback_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, NzCheckboxGroupComponent_ProjectionFallback_0_For_1_Template, 2, 4, "label", 0, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.normalizedOptions());
  }
}
var NZ_CHECKBOX_GROUP = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "nz-checkbox-group" : "");
var NzCheckboxComponent = class _NzCheckboxComponent {
  ngZone = inject(NgZone);
  elementRef = inject(ElementRef);
  cdr = inject(ChangeDetectorRef);
  focusMonitor = inject(FocusMonitor);
  dir = inject(Directionality).valueSignal;
  destroyRef = inject(DestroyRef);
  checkboxGroupComponent = inject(NZ_CHECKBOX_GROUP, {
    optional: true
  });
  nzFormStatusService = inject(NzFormStatusService, {
    optional: true
  });
  isNzDisableFirstChange = true;
  onChange = () => {
  };
  onTouched = () => {
  };
  inputElement;
  nzCheckedChange = new EventEmitter();
  nzValue = null;
  nzAutoFocus = false;
  nzDisabled = false;
  nzIndeterminate = false;
  nzChecked = false;
  nzId = null;
  nzName = null;
  innerCheckedChange(checked) {
    if (!this.nzDisabled && !this.checkboxGroupComponent?.finalDisabled()) {
      this.setValue(checked);
      this.checkboxGroupComponent?.onCheckedChange(this.nzValue, checked);
    }
  }
  writeValue(value) {
    this.nzChecked = value;
    this.cdr.markForCheck();
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(disabled) {
    this.nzDisabled = this.isNzDisableFirstChange && this.nzDisabled || disabled;
    this.isNzDisableFirstChange = false;
    this.cdr.markForCheck();
  }
  focus() {
    this.focusMonitor.focusVia(this.inputElement, "keyboard");
  }
  blur() {
    this.inputElement.nativeElement.blur();
  }
  constructor() {
    this.destroyRef.onDestroy(() => {
      this.focusMonitor.stopMonitoring(this.elementRef);
    });
    if (this.checkboxGroupComponent) {
      effect(() => {
        const values = this.checkboxGroupComponent.value() || [];
        this.setValue(values.includes(this.nzValue));
        this.cdr.markForCheck();
      });
    }
  }
  ngOnInit() {
    this.focusMonitor.monitor(this.elementRef, true).pipe(takeUntilDestroyed(this.destroyRef)).subscribe((focusOrigin) => {
      if (!focusOrigin) {
        Promise.resolve().then(() => this.onTouched());
      }
    });
    fromEventOutsideAngular(this.elementRef.nativeElement, "click").pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
      event.preventDefault();
      this.focus();
      if (this.nzDisabled) {
        return;
      }
      this.ngZone.run(() => {
        this.innerCheckedChange(!this.nzChecked);
        this.cdr.markForCheck();
      });
    });
    fromEventOutsideAngular(this.inputElement.nativeElement, "click").pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => event.stopPropagation());
  }
  ngAfterViewInit() {
    if (this.nzAutoFocus) {
      this.focus();
    }
  }
  setValue(value) {
    this.nzChecked = value;
    this.onChange(value);
    this.nzCheckedChange.emit(value);
  }
  static \u0275fac = function NzCheckboxComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzCheckboxComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzCheckboxComponent,
    selectors: [["", "nz-checkbox", ""]],
    viewQuery: function NzCheckboxComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputElement = _t.first);
      }
    },
    hostAttrs: [1, "ant-checkbox-wrapper"],
    hostVars: 10,
    hostBindings: function NzCheckboxComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ant-checkbox-group-item", !!ctx.checkboxGroupComponent)("ant-checkbox-wrapper-in-form-item", !!ctx.nzFormStatusService)("ant-checkbox-wrapper-checked", ctx.nzChecked)("ant-checkbox-wrapper-disabled", ctx.nzDisabled || ctx.checkboxGroupComponent?.finalDisabled())("ant-checkbox-rtl", ctx.dir() === "rtl");
      }
    },
    inputs: {
      nzValue: "nzValue",
      nzAutoFocus: [2, "nzAutoFocus", "nzAutoFocus", booleanAttribute],
      nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
      nzIndeterminate: [2, "nzIndeterminate", "nzIndeterminate", booleanAttribute],
      nzChecked: [2, "nzChecked", "nzChecked", booleanAttribute],
      nzId: "nzId",
      nzName: "nzName"
    },
    outputs: {
      nzCheckedChange: "nzCheckedChange"
    },
    exportAs: ["nzCheckbox"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _NzCheckboxComponent),
      multi: true
    }])],
    ngContentSelectors: _c1,
    decls: 6,
    vars: 12,
    consts: [["inputElement", ""], [1, "ant-checkbox"], ["type", "checkbox", 1, "ant-checkbox-input", 3, "ngModelChange", "checked", "ngModel", "disabled"], [1, "ant-checkbox-inner"]],
    template: function NzCheckboxComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "span", 1)(1, "input", 2, 0);
        \u0275\u0275listener("ngModelChange", function NzCheckboxComponent_Template_input_ngModelChange_1_listener($event) {
          return ctx.innerCheckedChange($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275element(3, "span", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "span");
        \u0275\u0275projection(5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("ant-checkbox-checked", ctx.nzChecked && !ctx.nzIndeterminate)("ant-checkbox-disabled", ctx.nzDisabled || ctx.checkboxGroupComponent?.finalDisabled())("ant-checkbox-indeterminate", ctx.nzIndeterminate);
        \u0275\u0275advance();
        \u0275\u0275property("checked", ctx.nzChecked)("ngModel", ctx.nzChecked)("disabled", ctx.nzDisabled || (ctx.checkboxGroupComponent?.finalDisabled() ?? false));
        \u0275\u0275attribute("autofocus", ctx.nzAutoFocus ? "autofocus" : null)("id", ctx.nzId)("name", ctx.nzName || ctx.checkboxGroupComponent?.nzName());
        \u0275\u0275control();
      }
    },
    dependencies: [FormsModule, CheckboxControlValueAccessor, NgControlStatus, NgModel],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCheckboxComponent, [{
    type: Component,
    args: [{
      selector: "[nz-checkbox]",
      exportAs: "nzCheckbox",
      encapsulation: ViewEncapsulation.None,
      template: `
    <span
      class="ant-checkbox"
      [class.ant-checkbox-checked]="nzChecked && !nzIndeterminate"
      [class.ant-checkbox-disabled]="nzDisabled || checkboxGroupComponent?.finalDisabled()"
      [class.ant-checkbox-indeterminate]="nzIndeterminate"
    >
      <input
        #inputElement
        type="checkbox"
        class="ant-checkbox-input"
        [attr.autofocus]="nzAutoFocus ? 'autofocus' : null"
        [attr.id]="nzId"
        [attr.name]="nzName || checkboxGroupComponent?.nzName()"
        [checked]="nzChecked"
        [ngModel]="nzChecked"
        [disabled]="nzDisabled || (checkboxGroupComponent?.finalDisabled() ?? false)"
        (ngModelChange)="innerCheckedChange($event)"
      />
      <span class="ant-checkbox-inner"></span>
    </span>
    <span><ng-content /></span>
  `,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzCheckboxComponent),
        multi: true
      }],
      host: {
        class: "ant-checkbox-wrapper",
        "[class.ant-checkbox-group-item]": "!!checkboxGroupComponent",
        "[class.ant-checkbox-wrapper-in-form-item]": "!!nzFormStatusService",
        "[class.ant-checkbox-wrapper-checked]": "nzChecked",
        "[class.ant-checkbox-wrapper-disabled]": "nzDisabled || checkboxGroupComponent?.finalDisabled()",
        "[class.ant-checkbox-rtl]": `dir() === 'rtl'`
      },
      imports: [FormsModule]
    }]
  }], () => [], {
    inputElement: [{
      type: ViewChild,
      args: ["inputElement", {
        static: true
      }]
    }],
    nzCheckedChange: [{
      type: Output
    }],
    nzValue: [{
      type: Input
    }],
    nzAutoFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzIndeterminate: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzChecked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzId: [{
      type: Input
    }],
    nzName: [{
      type: Input
    }]
  });
})();
var NzCheckboxGroupComponent = class _NzCheckboxGroupComponent {
  onChange = () => {
  };
  onTouched = () => {
  };
  isDisabledFirstChange = true;
  dir = inject(Directionality).valueSignal;
  nzName = input(
    null,
    ...ngDevMode ? [{
      debugName: "nzName"
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
  nzOptions = input(
    [],
    ...ngDevMode ? [{
      debugName: "nzOptions"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  value = signal(
    null,
    ...ngDevMode ? [{
      debugName: "value"
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
  normalizedOptions = computed(
    () => normalizeOptions(this.nzOptions()),
    ...ngDevMode ? [{
      debugName: "normalizedOptions"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    const elementRef = inject(ElementRef);
    const focusMonitor = inject(FocusMonitor);
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      focusMonitor.monitor(elementRef, true).pipe(takeUntilDestroyed(destroyRef)).subscribe((focusOrigin) => {
        if (!focusOrigin) {
          this.onTouched();
        }
      });
      destroyRef.onDestroy(() => {
        focusMonitor.stopMonitoring(elementRef);
      });
    });
  }
  writeValue(value) {
    untracked(() => {
      this.value.set(value);
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
  onCheckedChange(optionValue, checked) {
    if (this.finalDisabled()) return;
    this.value.update((value) => {
      if (checked) {
        return value?.concat(optionValue) || [optionValue];
      } else {
        return value?.filter((val) => val !== optionValue) || [];
      }
    });
    this.onChange(this.value());
  }
  static \u0275fac = function NzCheckboxGroupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzCheckboxGroupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzCheckboxGroupComponent,
    selectors: [["nz-checkbox-group"]],
    hostAttrs: [1, "ant-checkbox-group"],
    hostVars: 2,
    hostBindings: function NzCheckboxGroupComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ant-checkbox-group-rtl", ctx.dir() === "rtl");
      }
    },
    inputs: {
      nzName: [1, "nzName"],
      nzDisabled: [1, "nzDisabled"],
      nzOptions: [1, "nzOptions"]
    },
    exportAs: ["nzCheckboxGroup"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _NzCheckboxGroupComponent),
      multi: true
    }, {
      provide: NZ_CHECKBOX_GROUP,
      useExisting: forwardRef(() => _NzCheckboxGroupComponent)
    }])],
    ngContentSelectors: _c1,
    decls: 2,
    vars: 0,
    consts: [["nz-checkbox", "", 3, "nzValue", "nzName", "nzDisabled"]],
    template: function NzCheckboxGroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0, 0, null, NzCheckboxGroupComponent_ProjectionFallback_0_Template, 2, 0);
      }
    },
    dependencies: [NzCheckboxComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCheckboxGroupComponent, [{
    type: Component,
    args: [{
      selector: "nz-checkbox-group",
      exportAs: "nzCheckboxGroup",
      imports: [NzCheckboxComponent],
      template: `
    <ng-content>
      @for (option of normalizedOptions(); track option.value) {
        <label
          nz-checkbox
          [nzValue]="option.value"
          [nzName]="nzName()"
          [nzDisabled]="option.disabled || finalDisabled()"
        >
          {{ option.label }}
        </label>
      }
    </ng-content>
  `,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzCheckboxGroupComponent),
        multi: true
      }, {
        provide: NZ_CHECKBOX_GROUP,
        useExisting: forwardRef(() => NzCheckboxGroupComponent)
      }],
      host: {
        class: "ant-checkbox-group",
        "[class.ant-checkbox-group-rtl]": `dir() === 'rtl'`
      },
      encapsulation: ViewEncapsulation.None
    }]
  }], () => [], {
    nzName: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzName",
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
    nzOptions: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzOptions",
        required: false
      }]
    }]
  });
})();
function normalizeOptions(value) {
  return value.map((item) => {
    if (typeof item === "string" || typeof item === "number") {
      return {
        label: `${item}`,
        value: item
      };
    }
    return item;
  });
}
var NzCheckboxModule = class _NzCheckboxModule {
  static \u0275fac = function NzCheckboxModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzCheckboxModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzCheckboxModule,
    imports: [NzCheckboxComponent, NzCheckboxGroupComponent],
    exports: [NzCheckboxComponent, NzCheckboxGroupComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzCheckboxComponent, NzCheckboxGroupComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [NzCheckboxComponent, NzCheckboxGroupComponent],
      exports: [NzCheckboxComponent, NzCheckboxGroupComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-spin.mjs
var _c02 = ["*"];
function NzSpinComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275element(1, "i", 3)(2, "i", 3)(3, "i", 3)(4, "i", 3);
    \u0275\u0275elementEnd();
  }
}
function NzSpinComponent_Conditional_2_ng_template_2_Template(rf, ctx) {
}
function NzSpinComponent_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.nzTip);
  }
}
function NzSpinComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 4);
    \u0275\u0275template(2, NzSpinComponent_Conditional_2_ng_template_2_Template, 0, 0, "ng-template", 5);
    \u0275\u0275conditionalCreate(3, NzSpinComponent_Conditional_2_Conditional_3_Template, 2, 1, "div", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const defaultTemplate_r2 = \u0275\u0275reference(1);
    \u0275\u0275advance();
    \u0275\u0275classProp("ant-spin-rtl", ctx_r0.dir() === "rtl")("ant-spin-lg", ctx_r0.nzSize === "large")("ant-spin-sm", ctx_r0.nzSize === "small")("ant-spin-show-text", ctx_r0.nzTip);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.nzIndicator || defaultTemplate_r2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.nzTip ? 3 : -1);
  }
}
function NzSpinComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("ant-spin-blur", ctx_r0.isLoading());
  }
}
var NZ_CONFIG_MODULE_NAME = "spin";
var NzSpinComponent = (() => {
  let _nzIndicator_decorators;
  let _nzIndicator_initializers = [];
  let _nzIndicator_extraInitializers = [];
  return class NzSpinComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzIndicator_decorators = [WithConfig()];
      __esDecorate(null, null, _nzIndicator_decorators, {
        kind: "field",
        name: "nzIndicator",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzIndicator" in obj,
          get: (obj) => obj.nzIndicator,
          set: (obj, value) => {
            obj.nzIndicator = value;
          }
        },
        metadata: _metadata
      }, _nzIndicator_initializers, _nzIndicator_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    _nzModuleName = NZ_CONFIG_MODULE_NAME;
    cdr = inject(ChangeDetectorRef);
    dir = inject(Directionality).valueSignal;
    destroyRef = inject(DestroyRef);
    nzIndicator = __runInitializers(this, _nzIndicator_initializers, null);
    nzSize = (__runInitializers(this, _nzIndicator_extraInitializers), "default");
    nzTip = null;
    nzDelay = 0;
    nzSimple = false;
    nzSpinning = true;
    spinning$ = new BehaviorSubject(this.nzSpinning);
    delay$ = new ReplaySubject(1);
    isLoading = signal(
      false,
      ...ngDevMode ? [{
        debugName: "isLoading"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    constructor() {
      onConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME, () => this.cdr.markForCheck());
    }
    ngOnInit() {
      this.delay$.pipe(startWith(this.nzDelay), distinctUntilChanged(), switchMap((delay) => (
        // This construct is used to reduce RxJS dependencies.
        // It previously used `debounce(() => timer())`, but consumers may not
        // use these RxJS functions at all, causing them to still be bundled
        // into the main bundle unnecessarily.
        this.spinning$.pipe(switchMap((spinning) => {
          if (delay === 0 || !spinning) {
            return of(spinning);
          }
          return new Observable((subscriber) => {
            const timeoutId = setTimeout(() => subscriber.next(spinning), delay);
            return () => clearTimeout(timeoutId);
          });
        }))
      )), takeUntilDestroyed(this.destroyRef)).subscribe((isLoading) => {
        this.isLoading.set(isLoading);
      });
    }
    ngOnChanges(changes) {
      const {
        nzSpinning,
        nzDelay
      } = changes;
      if (nzSpinning) {
        this.spinning$.next(this.nzSpinning);
      }
      if (nzDelay) {
        this.delay$.next(this.nzDelay);
      }
    }
    static \u0275fac = function NzSpinComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzSpinComponent2)();
    };
    static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: NzSpinComponent2,
      selectors: [["nz-spin"]],
      hostVars: 2,
      hostBindings: function NzSpinComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("ant-spin-nested-loading", !ctx.nzSimple);
        }
      },
      inputs: {
        nzIndicator: "nzIndicator",
        nzSize: "nzSize",
        nzTip: "nzTip",
        nzDelay: [2, "nzDelay", "nzDelay", numberAttribute],
        nzSimple: [2, "nzSimple", "nzSimple", booleanAttribute],
        nzSpinning: [2, "nzSpinning", "nzSpinning", booleanAttribute]
      },
      exportAs: ["nzSpin"],
      features: [\u0275\u0275NgOnChangesFeature],
      ngContentSelectors: _c02,
      decls: 4,
      vars: 2,
      consts: [["defaultTemplate", ""], [1, "ant-spin-container", 3, "ant-spin-blur"], [1, "ant-spin-dot", "ant-spin-dot-spin"], [1, "ant-spin-dot-item"], [1, "ant-spin", "ant-spin-spinning"], [3, "ngTemplateOutlet"], [1, "ant-spin-text"], [1, "ant-spin-container"]],
      template: function NzSpinComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275template(0, NzSpinComponent_ng_template_0_Template, 5, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
          \u0275\u0275conditionalCreate(2, NzSpinComponent_Conditional_2_Template, 4, 10, "div");
          \u0275\u0275conditionalCreate(3, NzSpinComponent_Conditional_3_Template, 2, 2, "div", 1);
        }
        if (rf & 2) {
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx.isLoading() ? 2 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(!ctx.nzSimple ? 3 : -1);
        }
      },
      dependencies: [NgTemplateOutlet],
      encapsulation: 2
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSpinComponent, [{
    type: Component,
    args: [{
      selector: "nz-spin",
      exportAs: "nzSpin",
      encapsulation: ViewEncapsulation.None,
      template: `
    <ng-template #defaultTemplate>
      <span class="ant-spin-dot ant-spin-dot-spin">
        <i class="ant-spin-dot-item"></i>
        <i class="ant-spin-dot-item"></i>
        <i class="ant-spin-dot-item"></i>
        <i class="ant-spin-dot-item"></i>
      </span>
    </ng-template>
    @if (isLoading()) {
      <div>
        <div
          class="ant-spin ant-spin-spinning"
          [class.ant-spin-rtl]="dir() === 'rtl'"
          [class.ant-spin-lg]="nzSize === 'large'"
          [class.ant-spin-sm]="nzSize === 'small'"
          [class.ant-spin-show-text]="nzTip"
        >
          <ng-template [ngTemplateOutlet]="nzIndicator || defaultTemplate" />
          @if (nzTip) {
            <div class="ant-spin-text">{{ nzTip }}</div>
          }
        </div>
      </div>
    }
    @if (!nzSimple) {
      <div class="ant-spin-container" [class.ant-spin-blur]="isLoading()">
        <ng-content />
      </div>
    }
  `,
      host: {
        "[class.ant-spin-nested-loading]": "!nzSimple"
      },
      imports: [NgTemplateOutlet]
    }]
  }], () => [], {
    nzIndicator: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzTip: [{
      type: Input
    }],
    nzDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzSimple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzSpinning: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var NzSpinModule = class _NzSpinModule {
  static \u0275fac = function NzSpinModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSpinModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzSpinModule,
    imports: [NzSpinComponent],
    exports: [NzSpinComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSpinModule, [{
    type: NgModule,
    args: [{
      imports: [NzSpinComponent],
      exports: [NzSpinComponent]
    }]
  }], null, null);
})();

export {
  NzCheckboxComponent,
  NzCheckboxModule,
  NzSpinComponent,
  NzSpinModule
};
//# debugId=919d3b2c-965c-5037-9d35-8186f9662ab3
//# sourceMappingURL=chunk-VWYGF7JF.js.map
