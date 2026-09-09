import {
  ComponentPortal,
  NzSingletonService,
  createGlobalPositionStrategy,
  createNoopScrollStrategy,
  createOverlayRef
} from "./chunk-TNYKEBYQ.js";
import {
  ChangeDetectorRef,
  Component,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  Injectable,
  Injector,
  Input,
  NzConfigService,
  NzIconDirective,
  NzIconModule,
  NzOutletModule,
  NzStringTemplateOutletDirective,
  Output,
  Subject,
  ViewChild,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  inject,
  onConfigChangeEventForComponent,
  setClassMetadata,
  toCssPixel,
  viewChild,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵviewQuerySignal
} from "./chunk-VTW5U2M5.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-message.mjs
var _c0 = ["animationElement"];
var _c1 = (a0, a1) => ({
  $implicit: a0,
  data: a1
});
function NzMessageComponent_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 4);
  }
}
function NzMessageComponent_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 5);
  }
}
function NzMessageComponent_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 6);
  }
}
function NzMessageComponent_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 7);
  }
}
function NzMessageComponent_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 8);
  }
}
function NzMessageComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "span", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r0.instance.content, \u0275\u0275sanitizeHtml);
  }
}
function NzMessageContainerComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-message", 2);
    \u0275\u0275listener("destroyed", function NzMessageContainerComponent_For_2_Template_nz_message_destroyed_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.remove($event.id, $event.userAction));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const instance_r3 = ctx.$implicit;
    \u0275\u0275property("instance", instance_r3);
  }
}
var globalCounter = 0;
var NzMNService = class {
  container;
  nzSingletonService = inject(NzSingletonService);
  injector = inject(Injector);
  remove(id) {
    if (this.container) {
      if (id) {
        this.container.remove(id);
      } else {
        this.container.removeAll();
      }
    }
  }
  getInstanceId() {
    return `${this.componentPrefix}-${globalCounter++}`;
  }
  withContainer(ctor) {
    let containerInstance = this.nzSingletonService.getSingletonWithKey(this.componentPrefix);
    if (containerInstance) {
      return containerInstance;
    }
    const overlayRef = createOverlayRef(this.injector, {
      hasBackdrop: false,
      scrollStrategy: createNoopScrollStrategy(),
      positionStrategy: createGlobalPositionStrategy(this.injector)
    });
    const componentPortal = new ComponentPortal(ctor, null, this.injector);
    const componentRef = overlayRef.attach(componentPortal);
    const overlayWrapper = overlayRef.hostElement;
    overlayWrapper.style.zIndex = "1010";
    if (!containerInstance) {
      this.container = containerInstance = componentRef.instance;
      this.nzSingletonService.registerSingletonWithKey(this.componentPrefix, containerInstance);
      this.container.afterAllInstancesRemoved.subscribe(() => {
        this.container = void 0;
        this.nzSingletonService.unregisterSingletonWithKey(this.componentPrefix);
        overlayRef.dispose();
      });
    }
    return containerInstance;
  }
};
var NzMNContainerComponent = class _NzMNContainerComponent {
  config;
  instances = [];
  _afterAllInstancesRemoved = new Subject();
  afterAllInstancesRemoved = this._afterAllInstancesRemoved.asObservable();
  cdr = inject(ChangeDetectorRef);
  nzConfigService = inject(NzConfigService);
  constructor() {
    this.subscribeConfigChange();
  }
  create(data) {
    const instance = this.onCreate(data);
    if (this.instances.length >= this.config.nzMaxStack) {
      this.instances = this.instances.slice(1);
    }
    this.instances = [...this.instances, instance];
    this.readyInstances();
    return instance;
  }
  remove(id, userAction = false) {
    this.instances.map((instance, index) => ({
      index,
      instance
    })).filter(({
      instance
    }) => instance.messageId === id).forEach(({
      index,
      instance
    }) => {
      this.instances.splice(index, 1);
      this.instances = [...this.instances];
      this.onRemove(instance, userAction);
      this.readyInstances();
    });
    if (!this.instances.length) {
      this.onAllInstancesRemoved();
    }
  }
  removeAll() {
    this.instances.forEach((i) => this.onRemove(i, false));
    this.instances = [];
    this.readyInstances();
    this.onAllInstancesRemoved();
  }
  onCreate(instance) {
    instance.options = this.mergeOptions(instance.options);
    instance.onClose = new Subject();
    return instance;
  }
  onRemove(instance, userAction) {
    instance.onClose.next(userAction);
    instance.onClose.complete();
  }
  onAllInstancesRemoved() {
    this._afterAllInstancesRemoved.next();
    this._afterAllInstancesRemoved.complete();
  }
  readyInstances() {
    this.cdr.detectChanges();
  }
  mergeOptions(options) {
    const {
      nzDuration,
      nzAnimate,
      nzPauseOnHover
    } = this.config;
    return __spreadValues({
      nzDuration,
      nzAnimate,
      nzPauseOnHover
    }, options);
  }
  static \u0275fac = function NzMNContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzMNContainerComponent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzMNContainerComponent
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMNContainerComponent, [{
    type: Directive
  }], () => [], null);
})();
var NzMNComponent = class _NzMNComponent {
  destroyRef = inject(DestroyRef);
  elementRef = inject(ElementRef);
  options;
  autoClose;
  userAction = false;
  eraseTimer;
  eraseTimingStart;
  eraseTTL;
  constructor() {
    this.destroyRef.onDestroy(() => {
      if (this.autoClose) {
        this.clearEraseTimeout();
      }
    });
  }
  ngOnInit() {
    this.options = this.instance.options;
    if (this.options.nzAnimate) {
      this._startEnterAnimation();
    }
    this.autoClose = this.options.nzDuration > 0;
    if (this.autoClose) {
      this.initErase();
      this.startEraseTimeout();
    }
  }
  onEnter() {
    if (this.autoClose && this.options.nzPauseOnHover) {
      this.clearEraseTimeout();
      this.updateTTL();
    }
  }
  onLeave() {
    if (this.autoClose && this.options.nzPauseOnHover) {
      this.startEraseTimeout();
    }
  }
  destroy(userAction = false) {
    this.userAction = userAction;
    if (this.options.nzAnimate) {
      this._startLeaveAnimation(() => this.destroyed.next({
        id: this.instance.messageId,
        userAction
      }));
    } else {
      this.destroyed.next({
        id: this.instance.messageId,
        userAction
      });
    }
  }
  initErase() {
    this.eraseTTL = this.options.nzDuration;
    this.eraseTimingStart = Date.now();
  }
  updateTTL() {
    if (this.autoClose) {
      this.eraseTTL -= Date.now() - this.eraseTimingStart;
    }
  }
  startEraseTimeout() {
    if (this.eraseTTL > 0) {
      this.clearEraseTimeout();
      this.eraseTimer = setTimeout(() => this.destroy(), this.eraseTTL);
      this.eraseTimingStart = Date.now();
    } else {
      this.destroy();
    }
  }
  clearEraseTimeout() {
    if (this.eraseTimer !== null) {
      clearTimeout(this.eraseTimer);
      this.eraseTimer = void 0;
    }
  }
  _startEnterAnimation() {
    const element = this.animationElement().nativeElement;
    element.classList.add(this._animationClassMap.enter);
    const onAnimationEnd = (event) => {
      if (this.matchAnimationKeyframe(event, this._animationKeyframeMap.enter)) {
        element.removeEventListener("animationend", onAnimationEnd);
        element.classList.remove(this._animationClassMap.enter);
      }
    };
    element.addEventListener("animationend", onAnimationEnd);
  }
  _startLeaveAnimation(callback) {
    const element = this.animationElement().nativeElement;
    element.classList.remove(this._animationClassMap.enter);
    element.classList.add(this._animationClassMap.leave);
    const onAnimationEnd = (event) => {
      if (this.matchAnimationKeyframe(event, this._animationKeyframeMap.leave)) {
        element.removeEventListener("animationend", onAnimationEnd);
        callback();
      }
    };
    element.addEventListener("animationend", onAnimationEnd);
  }
  matchAnimationKeyframe(event, animationName) {
    return typeof animationName === "string" ? event.animationName === animationName : animationName.includes(event.animationName);
  }
  static \u0275fac = function NzMNComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzMNComponent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzMNComponent
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMNComponent, [{
    type: Directive
  }], () => [], null);
})();
var NzMessageComponent = class _NzMessageComponent extends NzMNComponent {
  instance;
  destroyed = new EventEmitter();
  index;
  animationElement = viewChild.required("animationElement", __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "animationElement"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    read: ElementRef
  }));
  _animationKeyframeMap = {
    enter: "MessageMoveIn",
    leave: "MessageMoveOut"
  };
  _animationClassMap = {
    enter: "ant-message-move-up-enter",
    leave: "ant-message-move-up-leave"
  };
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275NzMessageComponent_BaseFactory;
    return function NzMessageComponent_Factory(__ngFactoryType__) {
      return (\u0275NzMessageComponent_BaseFactory || (\u0275NzMessageComponent_BaseFactory = \u0275\u0275getInheritedFactory(_NzMessageComponent)))(__ngFactoryType__ || _NzMessageComponent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzMessageComponent,
    selectors: [["nz-message"]],
    viewQuery: function NzMessageComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.animationElement, _c0, 5, ElementRef);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    },
    inputs: {
      instance: "instance"
    },
    outputs: {
      destroyed: "destroyed"
    },
    exportAs: ["nzMessage"],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 10,
    vars: 12,
    consts: [["animationElement", ""], [1, "ant-message-notice", 3, "mouseenter", "mouseleave"], [1, "ant-message-notice-content"], [1, "ant-message-custom-content"], ["nzType", "check-circle"], ["nzType", "info-circle"], ["nzType", "exclamation-circle"], ["nzType", "close-circle"], ["nzType", "loading"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], [3, "innerHTML"]],
    template: function NzMessageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275listener("mouseenter", function NzMessageComponent_Template_div_mouseenter_0_listener() {
          return ctx.onEnter();
        })("mouseleave", function NzMessageComponent_Template_div_mouseleave_0_listener() {
          return ctx.onLeave();
        });
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
        \u0275\u0275conditionalCreate(4, NzMessageComponent_Case_4_Template, 1, 0, "nz-icon", 4)(5, NzMessageComponent_Case_5_Template, 1, 0, "nz-icon", 5)(6, NzMessageComponent_Case_6_Template, 1, 0, "nz-icon", 6)(7, NzMessageComponent_Case_7_Template, 1, 0, "nz-icon", 7)(8, NzMessageComponent_Case_8_Template, 1, 0, "nz-icon", 8);
        \u0275\u0275template(9, NzMessageComponent_ng_container_9_Template, 2, 1, "ng-container", 9);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_4_0;
        \u0275\u0275styleMap(ctx.instance.options?.nzStyle);
        \u0275\u0275classMap(ctx.instance.options?.nzClass);
        \u0275\u0275advance(3);
        \u0275\u0275classMap("ant-message-" + ctx.instance.type);
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_4_0 = ctx.instance.type) === "success" ? 4 : tmp_4_0 === "info" ? 5 : tmp_4_0 === "warning" ? 6 : tmp_4_0 === "error" ? 7 : tmp_4_0 === "loading" ? 8 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("nzStringTemplateOutlet", ctx.instance.content)("nzStringTemplateOutletContext", \u0275\u0275pureFunction2(9, _c1, ctx, ctx.instance.options?.nzData));
      }
    },
    dependencies: [NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMessageComponent, [{
    type: Component,
    args: [{
      selector: "nz-message",
      exportAs: "nzMessage",
      imports: [NzIconModule, NzOutletModule],
      template: `
    <div
      #animationElement
      class="ant-message-notice"
      [class]="instance.options?.nzClass"
      [style]="instance.options?.nzStyle"
      (mouseenter)="onEnter()"
      (mouseleave)="onLeave()"
    >
      <div class="ant-message-notice-content">
        <div class="ant-message-custom-content" [class]="'ant-message-' + instance.type">
          @switch (instance.type) {
            @case ('success') {
              <nz-icon nzType="check-circle" />
            }
            @case ('info') {
              <nz-icon nzType="info-circle" />
            }
            @case ('warning') {
              <nz-icon nzType="exclamation-circle" />
            }
            @case ('error') {
              <nz-icon nzType="close-circle" />
            }
            @case ('loading') {
              <nz-icon nzType="loading" />
            }
          }
          <ng-container
            *nzStringTemplateOutlet="instance.content; context: { $implicit: this, data: instance.options?.nzData }"
          >
            <span [innerHTML]="instance.content"></span>
          </ng-container>
        </div>
      </div>
    </div>
  `,
      encapsulation: ViewEncapsulation.None
    }]
  }], null, {
    instance: [{
      type: Input
    }],
    destroyed: [{
      type: Output
    }],
    animationElement: [{
      type: ViewChild,
      args: ["animationElement", __spreadProps(__spreadValues({}, {
        read: ElementRef
      }), {
        isSignal: true
      })]
    }]
  });
})();
var NZ_CONFIG_COMPONENT_NAME = "message";
var NZ_MESSAGE_DEFAULT_CONFIG = {
  nzAnimate: true,
  nzDuration: 3e3,
  nzMaxStack: 7,
  nzPauseOnHover: true,
  nzTop: 24,
  nzDirection: "ltr"
};
var NzMessageContainerComponent = class _NzMessageContainerComponent extends NzMNContainerComponent {
  dir = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME)?.nzDirection || "ltr";
  top;
  constructor() {
    super();
    this.updateConfig();
  }
  subscribeConfigChange() {
    onConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME, () => {
      this.updateConfig();
      this.dir = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME)?.nzDirection || this.dir;
    });
  }
  updateConfig() {
    this.config = __spreadValues(__spreadValues(__spreadValues({}, NZ_MESSAGE_DEFAULT_CONFIG), this.config), this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME));
    this.top = toCssPixel(this.config.nzTop);
    this.cdr.markForCheck();
  }
  static \u0275fac = function NzMessageContainerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzMessageContainerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzMessageContainerComponent,
    selectors: [["nz-message-container"]],
    exportAs: ["nzMessageContainer"],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 3,
    vars: 4,
    consts: [[1, "ant-message"], [3, "instance"], [3, "destroyed", "instance"]],
    template: function NzMessageContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275repeaterCreate(1, NzMessageContainerComponent_For_2_Template, 1, 1, "nz-message", 1, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("top", ctx.top);
        \u0275\u0275classProp("ant-message-rtl", ctx.dir === "rtl");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.instances);
      }
    },
    dependencies: [NzMessageComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMessageContainerComponent, [{
    type: Component,
    args: [{
      selector: "nz-message-container",
      exportAs: "nzMessageContainer",
      encapsulation: ViewEncapsulation.None,
      template: `
    <div class="ant-message" [class.ant-message-rtl]="dir === 'rtl'" [style.top]="top">
      @for (instance of instances; track instance) {
        <nz-message [instance]="instance" (destroyed)="remove($event.id, $event.userAction)" />
      }
    </div>
  `,
      imports: [NzMessageComponent]
    }]
  }], () => [], null);
})();
var NzMessageService = class _NzMessageService extends NzMNService {
  componentPrefix = "message-";
  success(content, options) {
    return this.createInstance({
      type: "success",
      content
    }, options);
  }
  error(content, options) {
    return this.createInstance({
      type: "error",
      content
    }, options);
  }
  info(content, options) {
    return this.createInstance({
      type: "info",
      content
    }, options);
  }
  warning(content, options) {
    return this.createInstance({
      type: "warning",
      content
    }, options);
  }
  loading(content, options) {
    return this.createInstance({
      type: "loading",
      content
    }, options);
  }
  create(type, content, options) {
    return this.createInstance({
      type,
      content
    }, options);
  }
  createInstance(message, options) {
    this.container = this.withContainer(NzMessageContainerComponent);
    return this.container.create(__spreadValues(__spreadValues({}, message), {
      createdAt: /* @__PURE__ */ new Date(),
      messageId: this.getInstanceId(),
      options
    }));
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275NzMessageService_BaseFactory;
    return function NzMessageService_Factory(__ngFactoryType__) {
      return (\u0275NzMessageService_BaseFactory || (\u0275NzMessageService_BaseFactory = \u0275\u0275getInheritedFactory(_NzMessageService)))(__ngFactoryType__ || _NzMessageService);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NzMessageService,
    factory: _NzMessageService.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMessageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  NzMessageService
};
//# debugId=0ce76c34-11b5-511d-a5c2-e5cb32a0401b
//# sourceMappingURL=chunk-XWW7CXU6.js.map
