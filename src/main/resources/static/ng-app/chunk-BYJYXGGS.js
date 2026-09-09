import {
  NzNoAnimationDirective
} from "./chunk-TNYKEBYQ.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  Directionality,
  EventEmitter,
  Input,
  NgModule,
  NzIconDirective,
  NzIconModule,
  NzOutletModule,
  NzStringTemplateOutletDirective,
  Output,
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
  inject,
  input,
  numberAttribute,
  onConfigChangeEventForComponent,
  setClassMetadata,
  signal,
  viewChild,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵanimateLeaveListener,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuerySignal
} from "./chunk-VTW5U2M5.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-alert.mjs
var _c0 = ["track1"];
var _c1 = ["track2"];
var _c2 = ["*"];
function NzAlertComponent_Conditional_0_Conditional_1_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function NzAlertComponent_Conditional_0_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzAlertComponent_Conditional_0_Conditional_1_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r1.nzIcon);
  }
}
function NzAlertComponent_Conditional_0_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("nzType", ctx_r1.nzIconType || ctx_r1.inferredIconType)("nzTheme", ctx_r1.iconTheme);
  }
}
function NzAlertComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275conditionalCreate(1, NzAlertComponent_Conditional_0_Conditional_1_Conditional_1_Template, 1, 1, "ng-container")(2, NzAlertComponent_Conditional_0_Conditional_1_Conditional_2_Template, 1, 2, "nz-icon", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.nzIcon ? 1 : 2);
  }
}
function NzAlertComponent_Conditional_0_Conditional_2_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.nzMessage);
  }
}
function NzAlertComponent_Conditional_0_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275template(1, NzAlertComponent_Conditional_0_Conditional_2_Conditional_1_ng_container_1_Template, 2, 1, "ng-container", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r1.nzMessage);
  }
}
function NzAlertComponent_Conditional_0_Conditional_2_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.nzDescription);
  }
}
function NzAlertComponent_Conditional_0_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275template(1, NzAlertComponent_Conditional_0_Conditional_2_Conditional_2_ng_container_1_Template, 2, 1, "ng-container", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r1.nzDescription);
  }
}
function NzAlertComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275conditionalCreate(1, NzAlertComponent_Conditional_0_Conditional_2_Conditional_1_Template, 2, 1, "span", 8);
    \u0275\u0275conditionalCreate(2, NzAlertComponent_Conditional_0_Conditional_2_Conditional_2_Template, 2, 1, "span", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.nzMessage ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.nzDescription ? 2 : -1);
  }
}
function NzAlertComponent_Conditional_0_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.nzAction);
  }
}
function NzAlertComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, NzAlertComponent_Conditional_0_Conditional_3_ng_container_1_Template, 2, 1, "ng-container", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r1.nzAction);
  }
}
function NzAlertComponent_Conditional_0_Conditional_4_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.nzCloseText);
  }
}
function NzAlertComponent_Conditional_0_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzAlertComponent_Conditional_0_Conditional_4_Conditional_1_ng_container_0_Template, 3, 1, "ng-container", 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r1.nzCloseText);
  }
}
function NzAlertComponent_Conditional_0_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 11);
  }
}
function NzAlertComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function NzAlertComponent_Conditional_0_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeAlert());
    });
    \u0275\u0275conditionalCreate(1, NzAlertComponent_Conditional_0_Conditional_4_Conditional_1_Template, 1, 1, "ng-container")(2, NzAlertComponent_Conditional_0_Conditional_4_Conditional_2_Template, 1, 0, "nz-icon", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.nzCloseText ? 1 : 2);
  }
}
function NzAlertComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275animateLeaveListener(function NzAlertComponent_Conditional_0_Template_div_animateleave_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLeaveAnimationDone($event));
    });
    \u0275\u0275conditionalCreate(1, NzAlertComponent_Conditional_0_Conditional_1_Template, 3, 1, "div", 2);
    \u0275\u0275conditionalCreate(2, NzAlertComponent_Conditional_0_Conditional_2_Template, 3, 2, "div", 3);
    \u0275\u0275conditionalCreate(3, NzAlertComponent_Conditional_0_Conditional_3_Template, 2, 1, "div", 4);
    \u0275\u0275conditionalCreate(4, NzAlertComponent_Conditional_0_Conditional_4_Template, 3, 1, "button", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("ant-alert-rtl", ctx_r1.dir() === "rtl")("ant-alert-success", ctx_r1.nzType === "success")("ant-alert-info", ctx_r1.nzType === "info")("ant-alert-warning", ctx_r1.nzType === "warning")("ant-alert-error", ctx_r1.nzType === "error")("ant-alert-no-icon", !ctx_r1.nzShowIcon)("ant-alert-banner", ctx_r1.nzBanner)("ant-alert-closable", ctx_r1.nzCloseable)("ant-alert-with-description", !!ctx_r1.nzDescription);
    \u0275\u0275property("nzNoAnimation", ctx_r1.nzNoAnimation);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.nzShowIcon ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.nzMessage || ctx_r1.nzDescription ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.nzAction ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.nzCloseable || ctx_r1.nzCloseText ? 4 : -1);
  }
}
var NzAlertMarqueeComponent = class _NzAlertMarqueeComponent {
  destroyRef = inject(DestroyRef);
  nzPauseOnHover = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "nzPauseOnHover"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  nzSpeed = input(50, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "nzSpeed"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: numberAttribute
  }));
  track1Ref = viewChild.required(
    "track1",
    ...ngDevMode ? [{
      debugName: "track1Ref"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  track2Ref = viewChild.required(
    "track2",
    ...ngDevMode ? [{
      debugName: "track2Ref"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  trackWidth = signal(
    0,
    ...ngDevMode ? [{
      debugName: "trackWidth"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  animationDuration = computed(
    () => {
      const width = this.trackWidth();
      const speed = this.nzSpeed();
      return width > 0 && speed > 0 ? width / speed : 20;
    },
    ...ngDevMode ? [{
      debugName: "animationDuration"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  class = computed(
    () => ({
      "ant-alert-marquee": true,
      "ant-alert-marquee-pause-on-hover": this.nzPauseOnHover()
    }),
    ...ngDevMode ? [{
      debugName: "class"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    afterNextRender(() => {
      const track1 = this.track1Ref().nativeElement;
      const track2 = this.track2Ref().nativeElement;
      const updateWidth = () => {
        this.trackWidth.set(track1.offsetWidth);
      };
      Array.from(track1.childNodes).forEach((node) => {
        track2.appendChild(node.cloneNode(true));
      });
      updateWidth();
      if (typeof ResizeObserver !== "undefined") {
        const resizeObserver = new ResizeObserver(updateWidth);
        resizeObserver.observe(track1);
        this.destroyRef.onDestroy(() => resizeObserver.disconnect());
      }
    });
  }
  static \u0275fac = function NzAlertMarqueeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzAlertMarqueeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzAlertMarqueeComponent,
    selectors: [["nz-alert-marquee"]],
    viewQuery: function NzAlertMarqueeComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.track1Ref, _c0, 5)(ctx.track2Ref, _c1, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    },
    hostVars: 2,
    hostBindings: function NzAlertMarqueeComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.class());
      }
    },
    inputs: {
      nzPauseOnHover: [1, "nzPauseOnHover"],
      nzSpeed: [1, "nzSpeed"]
    },
    ngContentSelectors: _c2,
    decls: 5,
    vars: 4,
    consts: [["track1", ""], ["track2", ""], [1, "ant-alert-marquee-track"], ["aria-hidden", "true", 1, "ant-alert-marquee-track"]],
    template: function NzAlertMarqueeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domElementStart(0, "div", 2, 0);
        \u0275\u0275projection(2);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElement(3, "div", 3, 1);
      }
      if (rf & 2) {
        \u0275\u0275styleProp("animation-duration", ctx.animationDuration(), "s");
        \u0275\u0275advance(3);
        \u0275\u0275styleProp("animation-duration", ctx.animationDuration(), "s");
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAlertMarqueeComponent, [{
    type: Component,
    args: [{
      selector: "nz-alert-marquee",
      encapsulation: ViewEncapsulation.None,
      template: `
    <div #track1 class="ant-alert-marquee-track" [style.animation-duration.s]="animationDuration()">
      <ng-content />
    </div>
    <div
      #track2
      class="ant-alert-marquee-track"
      aria-hidden="true"
      [style.animation-duration.s]="animationDuration()"
    ></div>
  `,
      host: {
        "[class]": "class()"
      }
    }]
  }], () => [], {
    nzPauseOnHover: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzPauseOnHover",
        required: false
      }]
    }],
    nzSpeed: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzSpeed",
        required: false
      }]
    }],
    track1Ref: [{
      type: ViewChild,
      args: ["track1", {
        isSignal: true
      }]
    }],
    track2Ref: [{
      type: ViewChild,
      args: ["track2", {
        isSignal: true
      }]
    }]
  });
})();
var NZ_CONFIG_MODULE_NAME = "alert";
var NzAlertComponent = (() => {
  let _nzCloseable_decorators;
  let _nzCloseable_initializers = [];
  let _nzCloseable_extraInitializers = [];
  let _nzShowIcon_decorators;
  let _nzShowIcon_initializers = [];
  let _nzShowIcon_extraInitializers = [];
  return class NzAlertComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzCloseable_decorators = [WithConfig()];
      _nzShowIcon_decorators = [WithConfig()];
      __esDecorate(null, null, _nzCloseable_decorators, {
        kind: "field",
        name: "nzCloseable",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzCloseable" in obj,
          get: (obj) => obj.nzCloseable,
          set: (obj, value) => {
            obj.nzCloseable = value;
          }
        },
        metadata: _metadata
      }, _nzCloseable_initializers, _nzCloseable_extraInitializers);
      __esDecorate(null, null, _nzShowIcon_decorators, {
        kind: "field",
        name: "nzShowIcon",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzShowIcon" in obj,
          get: (obj) => obj.nzShowIcon,
          set: (obj, value) => {
            obj.nzShowIcon = value;
          }
        },
        metadata: _metadata
      }, _nzShowIcon_initializers, _nzShowIcon_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    cdr = inject(ChangeDetectorRef);
    animationType = inject(ANIMATION_MODULE_TYPE, {
      optional: true
    });
    dir = inject(Directionality).valueSignal;
    _nzModuleName = NZ_CONFIG_MODULE_NAME;
    nzAction = null;
    nzCloseText = null;
    nzIconType = null;
    nzMessage = null;
    nzDescription = null;
    nzType = "info";
    nzCloseable = __runInitializers(this, _nzCloseable_initializers, false);
    nzShowIcon = (__runInitializers(this, _nzCloseable_extraInitializers), __runInitializers(this, _nzShowIcon_initializers, false));
    nzBanner = (__runInitializers(this, _nzShowIcon_extraInitializers), false);
    nzNoAnimation = false;
    nzIcon = null;
    nzOnClose = new EventEmitter();
    closed = false;
    iconTheme = "fill";
    inferredIconType = "info-circle";
    isTypeSet = false;
    isShowIconSet = false;
    constructor() {
      onConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME, () => this.cdr.markForCheck());
    }
    closeAlert() {
      this.closed = true;
      if (this.nzNoAnimation || this.animationType === "NoopAnimations") {
        this.nzOnClose.emit(true);
      }
    }
    onLeaveAnimationDone(event) {
      const element = event.target;
      if (this.nzNoAnimation || this.animationType === "NoopAnimations") {
        event.animationComplete();
        return;
      }
      element.classList.add("ant-alert-motion-leave", "ant-alert-motion-leave-active");
      const onTransitionEnd = () => {
        element.removeEventListener("transitionend", onTransitionEnd);
        this.nzOnClose.emit(true);
        event.animationComplete();
      };
      element.addEventListener("transitionend", onTransitionEnd);
    }
    ngOnChanges(changes) {
      const {
        nzShowIcon,
        nzDescription,
        nzType,
        nzBanner
      } = changes;
      if (nzShowIcon) {
        this.isShowIconSet = true;
      }
      if (nzType) {
        this.isTypeSet = true;
        switch (this.nzType) {
          case "error":
            this.inferredIconType = "close-circle";
            break;
          case "success":
            this.inferredIconType = "check-circle";
            break;
          case "info":
            this.inferredIconType = "info-circle";
            break;
          case "warning":
            this.inferredIconType = "exclamation-circle";
            break;
        }
      }
      if (nzDescription) {
        this.iconTheme = this.nzDescription ? "outline" : "fill";
      }
      if (nzBanner) {
        if (!this.isTypeSet) {
          this.nzType = "warning";
        }
        if (!this.isShowIconSet) {
          this.nzShowIcon = true;
        }
      }
    }
    static \u0275fac = function NzAlertComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzAlertComponent2)();
    };
    static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: NzAlertComponent2,
      selectors: [["nz-alert"]],
      inputs: {
        nzAction: "nzAction",
        nzCloseText: "nzCloseText",
        nzIconType: "nzIconType",
        nzMessage: "nzMessage",
        nzDescription: "nzDescription",
        nzType: "nzType",
        nzCloseable: [2, "nzCloseable", "nzCloseable", booleanAttribute],
        nzShowIcon: [2, "nzShowIcon", "nzShowIcon", booleanAttribute],
        nzBanner: [2, "nzBanner", "nzBanner", booleanAttribute],
        nzNoAnimation: [2, "nzNoAnimation", "nzNoAnimation", booleanAttribute],
        nzIcon: "nzIcon"
      },
      outputs: {
        nzOnClose: "nzOnClose"
      },
      exportAs: ["nzAlert"],
      features: [\u0275\u0275NgOnChangesFeature],
      decls: 1,
      vars: 1,
      consts: [[1, "ant-alert", 3, "nzNoAnimation", "ant-alert-rtl", "ant-alert-success", "ant-alert-info", "ant-alert-warning", "ant-alert-error", "ant-alert-no-icon", "ant-alert-banner", "ant-alert-closable", "ant-alert-with-description"], [1, "ant-alert", 3, "nzNoAnimation"], [1, "ant-alert-icon"], [1, "ant-alert-content"], [1, "ant-alert-action"], ["type", "button", "tabindex", "0", 1, "ant-alert-close-icon"], [3, "nzType", "nzTheme"], [4, "nzStringTemplateOutlet"], [1, "ant-alert-message"], [1, "ant-alert-description"], ["type", "button", "tabindex", "0", 1, "ant-alert-close-icon", 3, "click"], ["nzType", "close"], [1, "ant-alert-close-text"]],
      template: function NzAlertComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275conditionalCreate(0, NzAlertComponent_Conditional_0_Template, 5, 23, "div", 0);
        }
        if (rf & 2) {
          \u0275\u0275conditional(!ctx.closed ? 0 : -1);
        }
      },
      dependencies: [NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective, NzNoAnimationDirective],
      encapsulation: 2
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAlertComponent, [{
    type: Component,
    args: [{
      selector: "nz-alert",
      exportAs: "nzAlert",
      imports: [NzIconModule, NzOutletModule, NzNoAnimationDirective],
      template: `
    @if (!closed) {
      <div
        class="ant-alert"
        [nzNoAnimation]="nzNoAnimation"
        [class.ant-alert-rtl]="dir() === 'rtl'"
        [class.ant-alert-success]="nzType === 'success'"
        [class.ant-alert-info]="nzType === 'info'"
        [class.ant-alert-warning]="nzType === 'warning'"
        [class.ant-alert-error]="nzType === 'error'"
        [class.ant-alert-no-icon]="!nzShowIcon"
        [class.ant-alert-banner]="nzBanner"
        [class.ant-alert-closable]="nzCloseable"
        [class.ant-alert-with-description]="!!nzDescription"
        (animate.leave)="onLeaveAnimationDone($event)"
      >
        @if (nzShowIcon) {
          <div class="ant-alert-icon">
            @if (nzIcon) {
              <ng-container *nzStringTemplateOutlet="nzIcon" />
            } @else {
              <nz-icon [nzType]="nzIconType || inferredIconType" [nzTheme]="iconTheme" />
            }
          </div>
        }

        @if (nzMessage || nzDescription) {
          <div class="ant-alert-content">
            @if (nzMessage) {
              <span class="ant-alert-message">
                <ng-container *nzStringTemplateOutlet="nzMessage">{{ nzMessage }}</ng-container>
              </span>
            }
            @if (nzDescription) {
              <span class="ant-alert-description">
                <ng-container *nzStringTemplateOutlet="nzDescription">{{ nzDescription }}</ng-container>
              </span>
            }
          </div>
        }

        @if (nzAction) {
          <div class="ant-alert-action">
            <ng-container *nzStringTemplateOutlet="nzAction">{{ nzAction }}</ng-container>
          </div>
        }

        @if (nzCloseable || nzCloseText) {
          <button type="button" tabindex="0" class="ant-alert-close-icon" (click)="closeAlert()">
            @if (nzCloseText) {
              <ng-container *nzStringTemplateOutlet="nzCloseText">
                <span class="ant-alert-close-text">{{ nzCloseText }}</span>
              </ng-container>
            } @else {
              <nz-icon nzType="close" />
            }
          </button>
        }
      </div>
    }
  `,
      encapsulation: ViewEncapsulation.None
    }]
  }], () => [], {
    nzAction: [{
      type: Input
    }],
    nzCloseText: [{
      type: Input
    }],
    nzIconType: [{
      type: Input
    }],
    nzMessage: [{
      type: Input
    }],
    nzDescription: [{
      type: Input
    }],
    nzType: [{
      type: Input
    }],
    nzCloseable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowIcon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzBanner: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzNoAnimation: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzIcon: [{
      type: Input
    }],
    nzOnClose: [{
      type: Output
    }]
  });
})();
var NzAlertModule = class _NzAlertModule {
  static \u0275fac = function NzAlertModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzAlertModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzAlertModule,
    imports: [NzAlertComponent, NzAlertMarqueeComponent],
    exports: [NzAlertComponent, NzAlertMarqueeComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzAlertComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAlertModule, [{
    type: NgModule,
    args: [{
      exports: [NzAlertComponent, NzAlertMarqueeComponent],
      imports: [NzAlertComponent, NzAlertMarqueeComponent]
    }]
  }], null, null);
})();

export {
  NzAlertComponent,
  NzAlertModule
};
//# debugId=2c3b514c-a5a1-55ef-b457-b739550293f2
//# sourceMappingURL=chunk-BYJYXGGS.js.map
