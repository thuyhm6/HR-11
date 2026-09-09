import {
  ConnectionPositionPair,
  DOWN_ARROW,
  ENTER,
  ESCAPE,
  NG_VALUE_ACCESSOR,
  NzNoAnimationDirective,
  TAB,
  TemplatePortal,
  UP_ARROW,
  createFlexibleConnectedPositionStrategy,
  createOverlayRef,
  createRepositionScrollStrategy,
  isAnimationEnabled,
  slideAnimationEnter,
  slideAnimationLeave
} from "./chunk-TNYKEBYQ.js";
import {
  ChangeDetectorRef,
  Component,
  ContentChildren,
  DOCUMENT,
  DestroyRef,
  Directionality,
  Directive,
  ElementRef,
  EventEmitter,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgTemplateOutlet,
  NgZone,
  NzOutletModule,
  NzStringTemplateOutletDirective,
  Observable,
  Output,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation,
  afterNextRender,
  booleanAttribute,
  defer,
  delay,
  filter,
  forwardRef,
  fromEventOutsideAngular,
  inject,
  merge,
  numberAttributeWithZeroFallback,
  scrollIntoView,
  setClassMetadata,
  switchMap,
  takeUntilDestroyed,
  tap,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵanimateEnter,
  ɵɵanimateLeave,
  ɵɵanimateLeaveListener,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-VTW5U2M5.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-render.mjs
var NZ_AFTER_NEXT_RENDER$ = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "nz-after-next-render" : "", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return new Observable((subscriber) => {
      const ref = afterNextRender(() => {
        subscriber.next();
        subscriber.complete();
      }, { injector });
      return () => ref.destroy();
    });
  }
});

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-auto-complete.mjs
var _c0 = [[["nz-auto-option"]]];
var _c1 = ["nz-auto-option"];
function NzAutocompleteOptgroupComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.nzLabel);
  }
}
var _c2 = ["*"];
var _c3 = ["panel"];
var _c4 = ["content"];
var _forTrack0 = ($index, $item) => $item.value;
function NzAutocompleteComponent_ng_template_0_4_ng_template_0_Template(rf, ctx) {
}
function NzAutocompleteComponent_ng_template_0_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzAutocompleteComponent_ng_template_0_4_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function NzAutocompleteComponent_ng_template_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function NzAutocompleteComponent_ng_template_0_ng_template_7_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-auto-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    \u0275\u0275property("nzValue", option_r3.value)("nzLabel", option_r3.label);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r3.label, " ");
  }
}
function NzAutocompleteComponent_ng_template_0_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, NzAutocompleteComponent_ng_template_0_ng_template_7_For_1_Template, 2, 3, "nz-auto-option", 7, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.normalizedDataSource);
  }
}
function NzAutocompleteComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3, 0);
    \u0275\u0275animateLeave(function NzAutocompleteComponent_ng_template_0_Template_animateleave_cb() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.autoCompleteAnimationLeave());
    });
    \u0275\u0275animateEnter(function NzAutocompleteComponent_ng_template_0_Template_animateenter_cb() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.autoCompleteAnimationEnter());
    });
    \u0275\u0275animateLeaveListener(function NzAutocompleteComponent_ng_template_0_Template_div_animateleave_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAnimationEvent($event));
    });
    \u0275\u0275elementStart(2, "div", 4)(3, "div", 5);
    \u0275\u0275template(4, NzAutocompleteComponent_ng_template_0_4_Template, 1, 0, null, 6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(5, NzAutocompleteComponent_ng_template_0_ng_template_5_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(7, NzAutocompleteComponent_ng_template_0_ng_template_7_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const contentTemplate_r4 = \u0275\u0275reference(6);
    const optionsTemplate_r5 = \u0275\u0275reference(8);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r1.nzOverlayStyle);
    \u0275\u0275classMap(ctx_r1.nzOverlayClassName);
    \u0275\u0275classProp("ant-select-dropdown-hidden", !ctx_r1.showPanel)("ant-select-dropdown-rtl", ctx_r1.dir() === "rtl");
    \u0275\u0275property("nzNoAnimation", !ctx_r1.animationEnabled());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.nzDataSource ? optionsTemplate_r5 : contentTemplate_r4);
  }
}
var NzAutocompleteOptgroupComponent = class _NzAutocompleteOptgroupComponent {
  nzLabel;
  static \u0275fac = function NzAutocompleteOptgroupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzAutocompleteOptgroupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzAutocompleteOptgroupComponent,
    selectors: [["nz-auto-optgroup"]],
    inputs: {
      nzLabel: "nzLabel"
    },
    exportAs: ["nzAutoOptgroup"],
    ngContentSelectors: _c1,
    decls: 3,
    vars: 1,
    consts: [[1, "ant-select-item", "ant-select-item-group"], [4, "nzStringTemplateOutlet"]],
    template: function NzAutocompleteOptgroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c0);
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, NzAutocompleteOptgroupComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275projection(2);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("nzStringTemplateOutlet", ctx.nzLabel);
      }
    },
    dependencies: [NzOutletModule, NzStringTemplateOutletDirective],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAutocompleteOptgroupComponent, [{
    type: Component,
    args: [{
      selector: "nz-auto-optgroup",
      exportAs: "nzAutoOptgroup",
      encapsulation: ViewEncapsulation.None,
      imports: [NzOutletModule],
      template: `
    <div class="ant-select-item ant-select-item-group">
      <ng-container *nzStringTemplateOutlet="nzLabel">{{ nzLabel }}</ng-container>
    </div>
    <ng-content select="nz-auto-option" />
  `
    }]
  }], null, {
    nzLabel: [{
      type: Input
    }]
  });
})();
var NzOptionSelectionChange = class {
  source;
  isUserInput;
  constructor(source, isUserInput = false) {
    this.source = source;
    this.isUserInput = isUserInput;
  }
};
var NzAutocompleteOptionComponent = class _NzAutocompleteOptionComponent {
  ngZone = inject(NgZone);
  changeDetectorRef = inject(ChangeDetectorRef);
  element = inject(ElementRef);
  destroyRef = inject(DestroyRef);
  nzValue;
  nzLabel;
  nzDisabled = false;
  selectionChange = new EventEmitter();
  mouseEntered = new EventEmitter();
  active = false;
  selected = false;
  nzAutocompleteOptgroupComponent = inject(NzAutocompleteOptgroupComponent, {
    optional: true
  });
  ngOnInit() {
    fromEventOutsideAngular(this.element.nativeElement, "mouseenter").pipe(filter(() => this.mouseEntered.observers.length > 0), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.ngZone.run(() => this.mouseEntered.emit(this));
    });
    fromEventOutsideAngular(this.element.nativeElement, "mousedown").pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => event.preventDefault());
  }
  select(emit = true) {
    this.selected = true;
    this.changeDetectorRef.markForCheck();
    if (emit) {
      this.emitSelectionChangeEvent();
    }
  }
  deselect() {
    this.selected = false;
    this.changeDetectorRef.markForCheck();
    this.emitSelectionChangeEvent();
  }
  /** Git display label */
  getLabel() {
    return this.nzLabel || this.nzValue.toString();
  }
  /** Set active (only styles) */
  setActiveStyles() {
    if (!this.active) {
      this.active = true;
      this.changeDetectorRef.markForCheck();
    }
  }
  /** Unset active (only styles) */
  setInactiveStyles() {
    if (this.active) {
      this.active = false;
      this.changeDetectorRef.markForCheck();
    }
  }
  scrollIntoViewIfNeeded() {
    scrollIntoView(this.element.nativeElement);
  }
  selectViaInteraction() {
    if (!this.nzDisabled) {
      this.selected = !this.selected;
      if (this.selected) {
        this.setActiveStyles();
      } else {
        this.setInactiveStyles();
      }
      this.emitSelectionChangeEvent(true);
      this.changeDetectorRef.markForCheck();
    }
  }
  emitSelectionChangeEvent(isUserInput = false) {
    this.selectionChange.emit(new NzOptionSelectionChange(this, isUserInput));
  }
  static \u0275fac = function NzAutocompleteOptionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzAutocompleteOptionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzAutocompleteOptionComponent,
    selectors: [["nz-auto-option"]],
    hostAttrs: ["role", "menuitem", 1, "ant-select-item", "ant-select-item-option"],
    hostVars: 10,
    hostBindings: function NzAutocompleteOptionComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function NzAutocompleteOptionComponent_click_HostBindingHandler() {
          return ctx.selectViaInteraction();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-selected", ctx.selected.toString())("aria-disabled", ctx.nzDisabled.toString());
        \u0275\u0275classProp("ant-select-item-option-grouped", ctx.nzAutocompleteOptgroupComponent)("ant-select-item-option-selected", ctx.selected)("ant-select-item-option-active", ctx.active)("ant-select-item-option-disabled", ctx.nzDisabled);
      }
    },
    inputs: {
      nzValue: "nzValue",
      nzLabel: "nzLabel",
      nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute]
    },
    outputs: {
      selectionChange: "selectionChange",
      mouseEntered: "mouseEntered"
    },
    exportAs: ["nzAutoOption"],
    ngContentSelectors: _c2,
    decls: 2,
    vars: 0,
    consts: [[1, "ant-select-item-option-content"]],
    template: function NzAutocompleteOptionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275domElementEnd();
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAutocompleteOptionComponent, [{
    type: Component,
    args: [{
      selector: "nz-auto-option",
      exportAs: "nzAutoOption",
      encapsulation: ViewEncapsulation.None,
      template: `
    <div class="ant-select-item-option-content">
      <ng-content />
    </div>
  `,
      host: {
        role: "menuitem",
        class: "ant-select-item ant-select-item-option",
        "[class.ant-select-item-option-grouped]": "nzAutocompleteOptgroupComponent",
        "[class.ant-select-item-option-selected]": "selected",
        "[class.ant-select-item-option-active]": "active",
        "[class.ant-select-item-option-disabled]": "nzDisabled",
        "[attr.aria-selected]": "selected.toString()",
        "[attr.aria-disabled]": "nzDisabled.toString()",
        "(click)": "selectViaInteraction()"
      }
    }]
  }], null, {
    nzValue: [{
      type: Input
    }],
    nzLabel: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectionChange: [{
      type: Output
    }],
    mouseEntered: [{
      type: Output
    }]
  });
})();
function getNzAutocompleteMissingPanelError() {
  return Error("Attempting to open an undefined instance of `nz-autocomplete`. Make sure that the id passed to the `nzAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.");
}
var NzAutocompleteTriggerDirective = class _NzAutocompleteTriggerDirective {
  injector = inject(Injector);
  ngZone = inject(NgZone);
  elementRef = inject(ElementRef);
  viewContainerRef = inject(ViewContainerRef);
  destroyRef = inject(DestroyRef);
  document = inject(DOCUMENT);
  /** Bind nzAutocomplete component */
  nzAutocomplete;
  onChange = () => {
  };
  onTouched = () => {
  };
  panelOpen = false;
  /** Current active option */
  get activeOption() {
    if (this.nzAutocomplete && this.nzAutocomplete.options.length) {
      return this.nzAutocomplete.activeItem;
    } else {
      return null;
    }
  }
  overlayRef = null;
  portal = null;
  positionStrategy;
  previousValue = null;
  selectionChangeSubscription;
  optionsChangeSubscription;
  overlayOutsideClickSubscription;
  constructor() {
    this.destroyRef.onDestroy(() => {
      this.destroyPanel();
    });
  }
  ngAfterViewInit() {
    if (this.nzAutocomplete) {
      this.nzAutocomplete.animationStateChange.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
        if (this.overlayRef) {
          this.overlayRef.dispose();
          this.overlayRef = null;
          event.animationComplete();
        }
      });
    }
  }
  writeValue(value) {
    this.ngZone.runOutsideAngular(() => {
      Promise.resolve(null).then(() => this.setTriggerValue(value));
    });
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    const element = this.elementRef.nativeElement;
    element.disabled = isDisabled;
    this.closePanel();
  }
  openPanel() {
    this.previousValue = this.elementRef.nativeElement.value;
    this.attachOverlay();
    this.updateStatus();
  }
  closePanel() {
    if (this.panelOpen) {
      this.nzAutocomplete.isOpen = this.panelOpen = false;
      if (this.overlayRef && this.overlayRef.hasAttached()) {
        this.overlayRef.detach();
        this.selectionChangeSubscription.unsubscribe();
        this.overlayOutsideClickSubscription.unsubscribe();
        this.optionsChangeSubscription.unsubscribe();
        this.portal = null;
      }
    }
  }
  handleKeydown(event) {
    const keyCode = event.keyCode;
    const isArrowKey = keyCode === UP_ARROW || keyCode === DOWN_ARROW;
    if (keyCode === ESCAPE) {
      event.preventDefault();
    }
    if (this.panelOpen && (keyCode === ESCAPE || keyCode === TAB)) {
      if (this.activeOption && this.activeOption.getLabel() !== this.previousValue) {
        this.setTriggerValue(this.previousValue);
      }
      this.closePanel();
    } else if (this.panelOpen && keyCode === ENTER) {
      if (this.nzAutocomplete.showPanel) {
        event.preventDefault();
        if (this.activeOption) {
          this.activeOption.selectViaInteraction();
        } else {
          this.closePanel();
        }
      }
    } else if (this.panelOpen && isArrowKey && this.nzAutocomplete.showPanel) {
      event.stopPropagation();
      event.preventDefault();
      if (keyCode === UP_ARROW) {
        this.nzAutocomplete.setPreviousItemActive();
      } else {
        this.nzAutocomplete.setNextItemActive();
      }
      if (this.activeOption) {
        this.activeOption.scrollIntoViewIfNeeded();
      }
      this.doBackfill();
    }
  }
  handleInput(event) {
    const target = event.target;
    const document = this.document;
    let value = target.value;
    if (target.type === "number") {
      value = value === "" ? null : parseFloat(value);
    }
    if (this.previousValue !== value) {
      this.previousValue = value;
      this.onChange(value);
      if (this.canOpen() && document.activeElement === event.target) {
        this.openPanel();
      }
    }
  }
  handleFocus() {
    if (this.canOpen()) {
      this.openPanel();
    }
  }
  handleClick() {
    if (this.canOpen() && !this.panelOpen) {
      this.openPanel();
    }
  }
  handleBlur() {
    this.onTouched();
  }
  /**
   * Subscription data source changes event
   */
  subscribeOptionsChange() {
    const optionChanges = this.nzAutocomplete.options.changes.pipe(tap(() => this.positionStrategy.reapplyLastPosition()), delay(0));
    return optionChanges.subscribe(() => {
      this.resetActiveItem();
      if (this.panelOpen) {
        this.overlayRef.updatePosition();
      }
    });
  }
  /**
   * Subscription option changes event and set the value
   */
  subscribeSelectionChange() {
    return this.nzAutocomplete.selectionChange.subscribe((option) => {
      this.setValueAndClose(option);
    });
  }
  subscribeOverlayOutsideClick() {
    return this.overlayRef.outsidePointerEvents().pipe(filter((e) => !this.elementRef.nativeElement.contains(e.target))).subscribe(() => {
      this.closePanel();
    });
  }
  attachOverlay() {
    if (!this.nzAutocomplete) {
      throw getNzAutocompleteMissingPanelError();
    }
    if (!this.portal && this.nzAutocomplete.template) {
      this.portal = new TemplatePortal(this.nzAutocomplete.template, this.viewContainerRef);
    }
    if (!this.overlayRef) {
      this.overlayRef = createOverlayRef(this.injector, {
        positionStrategy: this.getOverlayPosition(),
        disposeOnNavigation: true,
        scrollStrategy: createRepositionScrollStrategy(this.injector),
        // default host element width
        width: this.nzAutocomplete.nzWidth || this.getHostWidth()
      });
    }
    if (this.overlayRef && !this.overlayRef.hasAttached()) {
      this.overlayRef.attach(this.portal);
      this.selectionChangeSubscription = this.subscribeSelectionChange();
      this.optionsChangeSubscription = this.subscribeOptionsChange();
      this.overlayOutsideClickSubscription = this.subscribeOverlayOutsideClick();
      this.overlayRef.detachments().pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
        this.closePanel();
      });
    }
    this.nzAutocomplete.isOpen = this.panelOpen = true;
  }
  updateStatus() {
    if (this.overlayRef) {
      this.overlayRef.updateSize({
        width: this.nzAutocomplete.nzWidth || this.getHostWidth()
      });
    }
    this.nzAutocomplete.setVisibility();
    this.resetActiveItem();
    if (this.activeOption) {
      this.activeOption.scrollIntoViewIfNeeded();
    }
  }
  destroyPanel() {
    if (this.overlayRef) {
      this.closePanel();
    }
  }
  getOverlayPosition() {
    return this.positionStrategy = createFlexibleConnectedPositionStrategy(this.injector, this.elementRef).withFlexibleDimensions(false).withPush(false).withPositions([new ConnectionPositionPair({
      originX: "start",
      originY: "bottom"
    }, {
      overlayX: "start",
      overlayY: "top"
    }), new ConnectionPositionPair({
      originX: "start",
      originY: "top"
    }, {
      overlayX: "start",
      overlayY: "bottom"
    })]).withTransformOriginOn(".ant-select-dropdown");
  }
  getHostWidth() {
    return this.elementRef.nativeElement.getBoundingClientRect().width;
  }
  resetActiveItem() {
    const index = this.nzAutocomplete.getOptionIndex(this.previousValue);
    this.nzAutocomplete.clearSelectedOptions(null, true);
    if (index !== -1) {
      this.nzAutocomplete.setActiveItem(index);
      this.nzAutocomplete.activeItem.select(false);
    } else {
      this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption ? 0 : -1);
    }
  }
  setValueAndClose(option) {
    const value = option.nzValue;
    this.setTriggerValue(option.getLabel());
    this.onChange(value);
    this.elementRef.nativeElement.focus();
    this.closePanel();
  }
  setTriggerValue(value) {
    const option = this.nzAutocomplete.getOption(value);
    const displayValue = option ? option.getLabel() : value;
    this.elementRef.nativeElement.value = displayValue != null ? displayValue : "";
    if (!this.nzAutocomplete.nzBackfill) {
      this.previousValue = displayValue;
    }
  }
  doBackfill() {
    if (this.nzAutocomplete.nzBackfill && this.nzAutocomplete.activeItem) {
      this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel());
    }
  }
  canOpen() {
    const element = this.elementRef.nativeElement;
    return !element.readOnly && !element.disabled;
  }
  static \u0275fac = function NzAutocompleteTriggerDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzAutocompleteTriggerDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzAutocompleteTriggerDirective,
    selectors: [["input", "nzAutocomplete", ""], ["textarea", "nzAutocomplete", ""]],
    hostAttrs: ["autocomplete", "off", "aria-autocomplete", "list"],
    hostBindings: function NzAutocompleteTriggerDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("focusin", function NzAutocompleteTriggerDirective_focusin_HostBindingHandler() {
          return ctx.handleFocus();
        })("blur", function NzAutocompleteTriggerDirective_blur_HostBindingHandler() {
          return ctx.handleBlur();
        })("input", function NzAutocompleteTriggerDirective_input_HostBindingHandler($event) {
          return ctx.handleInput($event);
        })("keydown", function NzAutocompleteTriggerDirective_keydown_HostBindingHandler($event) {
          return ctx.handleKeydown($event);
        })("click", function NzAutocompleteTriggerDirective_click_HostBindingHandler() {
          return ctx.handleClick();
        });
      }
    },
    inputs: {
      nzAutocomplete: "nzAutocomplete"
    },
    exportAs: ["nzAutocompleteTrigger"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _NzAutocompleteTriggerDirective),
      multi: true
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAutocompleteTriggerDirective, [{
    type: Directive,
    args: [{
      selector: `input[nzAutocomplete], textarea[nzAutocomplete]`,
      exportAs: "nzAutocompleteTrigger",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzAutocompleteTriggerDirective),
        multi: true
      }],
      host: {
        autocomplete: "off",
        "aria-autocomplete": "list",
        "(focusin)": "handleFocus()",
        "(blur)": "handleBlur()",
        "(input)": "handleInput($any($event))",
        "(keydown)": "handleKeydown($any($event))",
        "(click)": "handleClick()"
      }
    }]
  }], () => [], {
    nzAutocomplete: [{
      type: Input
    }]
  });
})();
function normalizeDataSource(value) {
  return value?.map((item) => {
    if (typeof item === "number" || typeof item === "string") {
      return {
        label: item.toString(),
        value: item.toString()
      };
    }
    return item;
  });
}
var NzAutocompleteComponent = class _NzAutocompleteComponent {
  cdr = inject(ChangeDetectorRef);
  destroyRef = inject(DestroyRef);
  afterNextRender$ = inject(NZ_AFTER_NEXT_RENDER$);
  noAnimation = inject(NzNoAnimationDirective, {
    host: true,
    optional: true
  });
  dir = inject(Directionality).valueSignal;
  nzWidth;
  nzOverlayClassName = "";
  nzOverlayStyle = {};
  nzDefaultActiveFirstOption = true;
  nzBackfill = false;
  compareWith = (o1, o2) => o1 === o2;
  nzDataSource;
  selectionChange = new EventEmitter();
  showPanel = true;
  isOpen = false;
  activeItem = null;
  normalizedDataSource = [];
  animationStateChange = new EventEmitter();
  /**
   * Options accessor, its source may be content or dataSource
   */
  get options() {
    if (this.nzDataSource) {
      return this.fromDataSourceOptions;
    } else {
      return this.fromContentOptions;
    }
  }
  /** Provided by content */
  fromContentOptions;
  /** Provided by dataSource */
  fromDataSourceOptions;
  /** cdk-overlay */
  template;
  panel;
  content;
  activeItemIndex = -1;
  selectionChangeSubscription = Subscription.EMPTY;
  optionMouseEnterSubscription = Subscription.EMPTY;
  dataSourceChangeSubscription = Subscription.EMPTY;
  /** Options changes listener */
  optionSelectionChanges = defer(() => {
    if (this.options) {
      return merge(...this.options.map((option) => option.selectionChange));
    }
    return this.afterNextRender$.pipe(switchMap(() => this.optionSelectionChanges));
  });
  optionMouseEnter = defer(() => {
    if (this.options) {
      return merge(...this.options.map((option) => option.mouseEntered));
    }
    return this.afterNextRender$.pipe(switchMap(() => this.optionMouseEnter));
  });
  autoCompleteAnimationEnter = slideAnimationEnter();
  autoCompleteAnimationLeave = slideAnimationLeave();
  animationEnabled = isAnimationEnabled(() => !this.noAnimation?.nzNoAnimation());
  constructor() {
    this.destroyRef.onDestroy(() => {
      this.dataSourceChangeSubscription.unsubscribe();
      this.selectionChangeSubscription.unsubscribe();
      this.optionMouseEnterSubscription.unsubscribe();
      this.dataSourceChangeSubscription = this.selectionChangeSubscription = this.optionMouseEnterSubscription = null;
    });
  }
  ngOnChanges(changes) {
    const {
      nzDataSource
    } = changes;
    if (nzDataSource) {
      this.normalizedDataSource = normalizeDataSource(nzDataSource.currentValue);
    }
  }
  onAnimationEvent(event) {
    const element = event.target;
    if (!this.animationEnabled()) {
      this.animationStateChange.emit(event);
      event.animationComplete();
      return;
    }
    const onAnimationEnd = () => {
      element.removeEventListener("animationend", onAnimationEnd);
      this.animationStateChange.emit(event);
      event.animationComplete();
    };
    element.addEventListener("animationend", onAnimationEnd);
  }
  ngAfterContentInit() {
    if (!this.nzDataSource) {
      this.optionsInit();
    }
  }
  ngAfterViewInit() {
    if (this.nzDataSource) {
      this.optionsInit();
    }
  }
  setVisibility() {
    this.showPanel = !!this.options.length;
    this.cdr.markForCheck();
  }
  setActiveItem(index) {
    const activeItem = this.options.get(index);
    if (activeItem && !activeItem.active) {
      this.activeItem = activeItem;
      this.activeItemIndex = index;
      this.clearSelectedOptions(this.activeItem);
      this.activeItem.setActiveStyles();
    } else {
      this.activeItem = null;
      this.activeItemIndex = -1;
      this.clearSelectedOptions();
    }
    this.cdr.markForCheck();
  }
  setNextItemActive() {
    const nextIndex = this.activeItemIndex + 1 <= this.options.length - 1 ? this.activeItemIndex + 1 : 0;
    this.setActiveItem(nextIndex);
  }
  setPreviousItemActive() {
    const previousIndex = this.activeItemIndex - 1 < 0 ? this.options.length - 1 : this.activeItemIndex - 1;
    this.setActiveItem(previousIndex);
  }
  getOptionIndex(value) {
    return this.options.reduce((result, current, index) => result === -1 ? this.compareWith(value, current.nzValue) ? index : -1 : result, -1);
  }
  getOption(value) {
    return this.options.find((item) => this.compareWith(value, item.nzValue)) || null;
  }
  optionsInit() {
    this.setVisibility();
    this.subscribeOptionChanges();
    const changes = this.nzDataSource ? this.fromDataSourceOptions.changes : this.fromContentOptions.changes;
    this.dataSourceChangeSubscription = changes.subscribe((e) => {
      if (!e.dirty && this.isOpen) {
        setTimeout(() => this.setVisibility());
      }
      this.subscribeOptionChanges();
    });
  }
  /**
   * Clear the status of options
   */
  clearSelectedOptions(skip, deselect = false) {
    this.options.forEach((option) => {
      if (option !== skip) {
        if (deselect) {
          option.deselect();
        }
        option.setInactiveStyles();
      }
    });
  }
  subscribeOptionChanges() {
    this.selectionChangeSubscription.unsubscribe();
    this.selectionChangeSubscription = this.optionSelectionChanges.pipe(filter((event) => event.isUserInput)).subscribe((event) => {
      event.source.select();
      event.source.setActiveStyles();
      this.activeItem = event.source;
      this.activeItemIndex = this.getOptionIndex(this.activeItem.nzValue);
      this.clearSelectedOptions(event.source, true);
      this.selectionChange.emit(event.source);
    });
    this.optionMouseEnterSubscription.unsubscribe();
    this.optionMouseEnterSubscription = this.optionMouseEnter.subscribe((event) => {
      event.setActiveStyles();
      this.activeItem = event;
      this.activeItemIndex = this.getOptionIndex(this.activeItem.nzValue);
      this.clearSelectedOptions(event);
    });
  }
  static \u0275fac = function NzAutocompleteComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzAutocompleteComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzAutocompleteComponent,
    selectors: [["nz-autocomplete"]],
    contentQueries: function NzAutocompleteComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, NzAutocompleteOptionComponent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fromContentOptions = _t);
      }
    },
    viewQuery: function NzAutocompleteComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(TemplateRef, 5)(_c3, 5)(_c4, 5)(NzAutocompleteOptionComponent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.template = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.panel = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.content = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fromDataSourceOptions = _t);
      }
    },
    inputs: {
      nzWidth: [2, "nzWidth", "nzWidth", numberAttributeWithZeroFallback],
      nzOverlayClassName: "nzOverlayClassName",
      nzOverlayStyle: "nzOverlayStyle",
      nzDefaultActiveFirstOption: [2, "nzDefaultActiveFirstOption", "nzDefaultActiveFirstOption", booleanAttribute],
      nzBackfill: [2, "nzBackfill", "nzBackfill", booleanAttribute],
      compareWith: "compareWith",
      nzDataSource: "nzDataSource"
    },
    outputs: {
      selectionChange: "selectionChange"
    },
    exportAs: ["nzAutocomplete"],
    features: [\u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c2,
    decls: 1,
    vars: 0,
    consts: [["panel", ""], ["contentTemplate", ""], ["optionsTemplate", ""], [1, "ant-select-dropdown", "ant-select-dropdown-placement-bottomLeft", 3, "nzNoAnimation"], [1, "ant-select-dropdown-content-wrapper"], [1, "ant-select-dropdown-content"], [4, "ngTemplateOutlet"], [3, "nzValue", "nzLabel"]],
    template: function NzAutocompleteComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, NzAutocompleteComponent_ng_template_0_Template, 9, 10, "ng-template");
      }
    },
    dependencies: [NgTemplateOutlet, NzAutocompleteOptionComponent, NzNoAnimationDirective],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAutocompleteComponent, [{
    type: Component,
    args: [{
      selector: "nz-autocomplete",
      exportAs: "nzAutocomplete",
      encapsulation: ViewEncapsulation.None,
      imports: [NgTemplateOutlet, NzAutocompleteOptionComponent, NzNoAnimationDirective],
      template: `
    <ng-template>
      <div
        #panel
        class="ant-select-dropdown ant-select-dropdown-placement-bottomLeft"
        [class.ant-select-dropdown-hidden]="!showPanel"
        [class.ant-select-dropdown-rtl]="dir() === 'rtl'"
        [class]="nzOverlayClassName"
        [style]="nzOverlayStyle"
        [nzNoAnimation]="!animationEnabled()"
        [animate.enter]="autoCompleteAnimationEnter()"
        [animate.leave]="autoCompleteAnimationLeave()"
        (animate.leave)="onAnimationEvent($event)"
      >
        <div class="ant-select-dropdown-content-wrapper">
          <div class="ant-select-dropdown-content">
            <ng-template *ngTemplateOutlet="nzDataSource ? optionsTemplate : contentTemplate" />
          </div>
        </div>
      </div>
      <ng-template #contentTemplate>
        <ng-content />
      </ng-template>
      <ng-template #optionsTemplate>
        @for (option of normalizedDataSource; track option.value) {
          <nz-auto-option [nzValue]="option.value" [nzLabel]="option.label">
            {{ option.label }}
          </nz-auto-option>
        }
      </ng-template>
    </ng-template>
  `
    }]
  }], () => [], {
    nzWidth: [{
      type: Input,
      args: [{
        transform: numberAttributeWithZeroFallback
      }]
    }],
    nzOverlayClassName: [{
      type: Input
    }],
    nzOverlayStyle: [{
      type: Input
    }],
    nzDefaultActiveFirstOption: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzBackfill: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    compareWith: [{
      type: Input
    }],
    nzDataSource: [{
      type: Input
    }],
    selectionChange: [{
      type: Output
    }],
    fromContentOptions: [{
      type: ContentChildren,
      args: [NzAutocompleteOptionComponent, {
        descendants: true
      }]
    }],
    fromDataSourceOptions: [{
      type: ViewChildren,
      args: [NzAutocompleteOptionComponent]
    }],
    template: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: false
      }]
    }],
    panel: [{
      type: ViewChild,
      args: ["panel", {
        static: false
      }]
    }],
    content: [{
      type: ViewChild,
      args: ["content", {
        static: false
      }]
    }]
  });
})();
var NzAutocompleteModule = class _NzAutocompleteModule {
  static \u0275fac = function NzAutocompleteModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzAutocompleteModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzAutocompleteModule,
    imports: [NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzAutocompleteOptgroupComponent],
    exports: [NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzAutocompleteOptgroupComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzAutocompleteOptgroupComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAutocompleteModule, [{
    type: NgModule,
    args: [{
      exports: [NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzAutocompleteOptgroupComponent],
      imports: [NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzAutocompleteOptgroupComponent]
    }]
  }], null, null);
})();

export {
  NzAutocompleteOptionComponent,
  NzAutocompleteTriggerDirective,
  NzAutocompleteComponent,
  NzAutocompleteModule
};
//# debugId=f866d872-e44f-53b0-9bd8-0932697fb971
//# sourceMappingURL=chunk-I3OGIUJB.js.map
