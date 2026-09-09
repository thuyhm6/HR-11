import {
  NzTreeBase,
  NzTreeBaseService,
  NzTreeComponent,
  NzTreeHigherOrderServiceToken,
  NzTreeModule
} from "./chunk-PD7KBOBI.js";
import {
  NzEmbedEmptyComponent,
  NzEmptyModule,
  NzSelectArrowComponent,
  NzSelectClearComponent,
  NzSelectItemComponent,
  NzSelectModule,
  NzSelectPlaceholderComponent,
  NzSelectSearchComponent
} from "./chunk-2QLZSMGV.js";
import {
  BACKSPACE,
  CdkConnectedOverlay,
  CdkOverlayOrigin,
  ESCAPE,
  FocusMonitor,
  NG_VALUE_ACCESSOR,
  NzConnectedOverlayDirective,
  NzNoAnimationDirective,
  NzOverlayModule,
  POSITION_MAP,
  TAB,
  cancelAnimationFrame,
  getPlacementName,
  requestAnimationFrame,
  slideAnimationEnter,
  slideAnimationLeave
} from "./chunk-TNYKEBYQ.js";
import {
  ChangeDetectorRef,
  Component,
  ContentChild,
  DestroyRef,
  Directionality,
  ElementRef,
  EventEmitter,
  Injectable,
  Input,
  NZ_FORM_SIZE,
  NZ_FORM_VARIANT,
  NZ_SPACE_COMPACT_ITEM_TYPE,
  NZ_SPACE_COMPACT_SIZE,
  NgModule,
  NzFormItemFeedbackIconComponent,
  NzFormStatusService,
  NzSpaceCompactItemDirective,
  NzStringTemplateOutletDirective,
  Output,
  Platform,
  Renderer2,
  SlicePipe,
  Subject,
  ViewChild,
  WithConfig,
  __esDecorate,
  __runInitializers,
  _getEventTarget,
  booleanAttribute,
  combineLatest,
  computed,
  distinctUntilChanged,
  filter,
  forwardRef,
  getStatusClassNames,
  inject,
  isNotNil,
  merge,
  numberAttribute,
  of,
  onConfigChangeEventForComponent,
  setClassMetadata,
  signal,
  startWith,
  takeUntilDestroyed,
  tap,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵanimateEnter,
  ɵɵanimateLeave,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-VTW5U2M5.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-tree-select.mjs
var _c0 = ["nzTreeTemplate"];
var _c1 = ["treeRef"];
var _c2 = () => [];
var _forTrack0 = ($index, $item) => $item.key;
function NzTreeSelectComponent_ng_template_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275element(1, "nz-embed-empty", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("specificContent", ctx_r1.nzNotFoundContent);
  }
}
function NzTreeSelectComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275animateLeave(function NzTreeSelectComponent_ng_template_0_Template_animateleave_cb() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.slideAnimationLeave());
    });
    \u0275\u0275animateEnter(function NzTreeSelectComponent_ng_template_0_Template_animateenter_cb() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.slideAnimationEnter());
    });
    \u0275\u0275elementStart(1, "nz-tree", 10, 1);
    \u0275\u0275listener("nzExpandChange", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzExpandChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onExpandedKeysChange($event));
    })("nzClick", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzClick_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nzTreeClick.emit($event));
    })("nzCheckedKeysChange", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzCheckedKeysChange_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateSelectedNodes());
    })("nzSelectedKeysChange", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzSelectedKeysChange_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateSelectedNodes());
    })("nzCheckboxChange", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzCheckboxChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nzTreeCheckboxChange.emit($event));
    })("nzSearchValueChange", function NzTreeSelectComponent_ng_template_0_Template_nz_tree_nzSearchValueChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setSearchValues($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, NzTreeSelectComponent_ng_template_0_Conditional_3_Template, 2, 1, "span", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r1.nzDropdownStyle);
    \u0275\u0275classMap(ctx_r1.dropdownClassName);
    \u0275\u0275classProp("ant-select-dropdown-placement-bottomLeft", ctx_r1.placement() === "bottomLeft")("ant-select-dropdown-placement-topLeft", ctx_r1.placement() === "topLeft")("ant-select-dropdown-placement-bottomRight", ctx_r1.placement() === "bottomRight")("ant-select-dropdown-placement-topRight", ctx_r1.placement() === "topRight")("ant-tree-select-dropdown-rtl", ctx_r1.dir() === "rtl");
    \u0275\u0275property("nzNoAnimation", !!ctx_r1.noAnimation?.nzNoAnimation?.())("dir", ctx_r1.dir());
    \u0275\u0275advance();
    \u0275\u0275property("hidden", ctx_r1.isNotFound)("nzData", ctx_r1.nzNodes)("nzMultiple", ctx_r1.nzMultiple)("nzSearchValue", ctx_r1.inputValue)("nzHideUnMatched", ctx_r1.nzHideUnMatched)("nzShowIcon", ctx_r1.nzShowIcon)("nzCheckable", ctx_r1.nzCheckable)("nzAsyncData", ctx_r1.nzAsyncData)("nzShowExpand", ctx_r1.nzShowExpand)("nzShowLine", ctx_r1.nzShowLine)("nzExpandedIcon", ctx_r1.nzExpandedIcon)("nzExpandAll", ctx_r1.nzDefaultExpandAll)("nzExpandedKeys", ctx_r1.expandedKeys)("nzCheckedKeys", ctx_r1.nzCheckable ? ctx_r1.value : \u0275\u0275pureFunction0(38, _c2))("nzSelectedKeys", !ctx_r1.nzCheckable ? ctx_r1.value : \u0275\u0275pureFunction0(39, _c2))("nzTreeTemplate", ctx_r1.treeTemplate)("nzCheckStrictly", ctx_r1.nzCheckStrictly)("nzVirtualItemSize", ctx_r1.nzVirtualItemSize)("nzVirtualMaxBufferPx", ctx_r1.nzVirtualMaxBufferPx)("nzVirtualMinBufferPx", ctx_r1.nzVirtualMinBufferPx)("nzVirtualHeight", ctx_r1.nzVirtualHeight);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.nzNodes.length === 0 || ctx_r1.isNotFound ? 3 : -1);
  }
}
function NzTreeSelectComponent_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const prefix_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(prefix_r3);
  }
}
function NzTreeSelectComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, NzTreeSelectComponent_Conditional_2_ng_container_1_Template, 2, 1, "ng-container", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx);
  }
}
function NzTreeSelectComponent_Conditional_4_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "nz-select-item", 17);
    \u0275\u0275listener("delete", function NzTreeSelectComponent_Conditional_4_For_2_Template_nz_select_item_delete_1_listener() {
      const node_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeSelected(node_r6, true));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const node_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", node_r6.isDisabled || ctx_r1.nzDisabled)("label", ctx_r1.nzDisplayWith(node_r6));
  }
}
function NzTreeSelectComponent_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "nz-select-item", 18);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("contentTemplateOutlet", ctx_r1.nzMaxTagPlaceholder)("contentTemplateOutletContext", \u0275\u0275pipeBind2(2, 3, ctx_r1.selectedNodes, ctx_r1.nzMaxTagCount))("label", "+ " + (ctx_r1.selectedNodes.length - ctx_r1.nzMaxTagCount) + " ...");
  }
}
function NzTreeSelectComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, NzTreeSelectComponent_Conditional_4_For_2_Template, 2, 2, "div", 14, _forTrack0);
    \u0275\u0275pipe(3, "slice");
    \u0275\u0275conditionalCreate(4, NzTreeSelectComponent_Conditional_4_Conditional_4_Template, 3, 6, "div", 14);
    \u0275\u0275elementStart(5, "div", 15)(6, "nz-select-search", 16);
    \u0275\u0275listener("keydown", function NzTreeSelectComponent_Conditional_4_Template_nz_select_search_keydown_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onKeyDownInput($event));
    })("isComposingChange", function NzTreeSelectComponent_Conditional_4_Template_nz_select_search_isComposingChange_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isComposingChange($event));
    })("valueChange", function NzTreeSelectComponent_Conditional_4_Template_nz_select_search_valueChange_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setInputValue($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind3(3, 7, ctx_r1.selectedNodes, 0, ctx_r1.nzMaxTagCount));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.selectedNodes.length > ctx_r1.nzMaxTagCount ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzId", ctx_r1.nzId)("showInput", ctx_r1.nzShowSearch)("value", ctx_r1.inputValue)("mirrorSync", true)("disabled", ctx_r1.nzDisabled)("focusTrigger", ctx_r1.nzOpen);
  }
}
function NzTreeSelectComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-select-item", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("label", ctx_r1.nzDisplayWith(ctx_r1.selectedNodes[0]));
  }
}
function NzTreeSelectComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-select-search", 16);
    \u0275\u0275listener("keydown", function NzTreeSelectComponent_Conditional_5_Template_nz_select_search_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onKeyDownInput($event));
    })("isComposingChange", function NzTreeSelectComponent_Conditional_5_Template_nz_select_search_isComposingChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isComposingChange($event));
    })("valueChange", function NzTreeSelectComponent_Conditional_5_Template_nz_select_search_valueChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setInputValue($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(1, NzTreeSelectComponent_Conditional_5_Conditional_1_Template, 1, 1, "nz-select-item", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzId", ctx_r1.nzId)("showInput", ctx_r1.nzShowSearch)("value", ctx_r1.inputValue)("mirrorSync", false)("disabled", ctx_r1.nzDisabled)("focusTrigger", ctx_r1.nzOpen);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectedNodes.length === 1 && !ctx_r1.isComposing && ctx_r1.inputValue === "" ? 1 : -1);
  }
}
function NzTreeSelectComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-select-placeholder", 20);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("display", ctx_r1.placeHolderDisplay);
    \u0275\u0275property("placeholder", ctx_r1.nzPlaceHolder);
  }
}
function NzTreeSelectComponent_ng_template_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-form-item-feedback-icon", 21);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("status", ctx_r1.status);
  }
}
function NzTreeSelectComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NzTreeSelectComponent_ng_template_8_Conditional_0_Template, 1, 1, "nz-form-item-feedback-icon", 21);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.hasFeedback && !!ctx_r1.status ? 0 : -1);
  }
}
function NzTreeSelectComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-select-clear", 22);
    \u0275\u0275listener("clear", function NzTreeSelectComponent_Conditional_10_Template_nz_select_clear_clear_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClearSelection());
    });
    \u0275\u0275elementEnd();
  }
}
var NzTreeSelectService = class _NzTreeSelectService extends NzTreeBaseService {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275NzTreeSelectService_BaseFactory;
    return function NzTreeSelectService_Factory(__ngFactoryType__) {
      return (\u0275NzTreeSelectService_BaseFactory || (\u0275NzTreeSelectService_BaseFactory = \u0275\u0275getInheritedFactory(_NzTreeSelectService)))(__ngFactoryType__ || _NzTreeSelectService);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NzTreeSelectService,
    factory: _NzTreeSelectService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeSelectService, [{
    type: Injectable
  }], null, null);
})();
var NZ_CONFIG_MODULE_NAME = "treeSelect";
var TREE_SELECT_DEFAULT_CLASS = "ant-select-dropdown ant-select-tree-dropdown";
var NzTreeSelectComponent = (() => {
  let _classSuper = NzTreeBase;
  let _nzDropdownMatchSelectWidth_decorators;
  let _nzDropdownMatchSelectWidth_initializers = [];
  let _nzDropdownMatchSelectWidth_extraInitializers = [];
  let _nzHideUnMatched_decorators;
  let _nzHideUnMatched_initializers = [];
  let _nzHideUnMatched_extraInitializers = [];
  let _nzShowIcon_decorators;
  let _nzShowIcon_initializers = [];
  let _nzShowIcon_extraInitializers = [];
  let _nzSize_decorators;
  let _nzSize_initializers = [];
  let _nzSize_extraInitializers = [];
  let _nzVariant_decorators;
  let _nzVariant_initializers = [];
  let _nzVariant_extraInitializers = [];
  let _nzBackdrop_decorators;
  let _nzBackdrop_initializers = [];
  let _nzBackdrop_extraInitializers = [];
  return class NzTreeSelectComponent2 extends _classSuper {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      _nzDropdownMatchSelectWidth_decorators = [WithConfig()];
      _nzHideUnMatched_decorators = [WithConfig()];
      _nzShowIcon_decorators = [WithConfig()];
      _nzSize_decorators = [WithConfig()];
      _nzVariant_decorators = [WithConfig()];
      _nzBackdrop_decorators = [WithConfig()];
      __esDecorate(null, null, _nzDropdownMatchSelectWidth_decorators, {
        kind: "field",
        name: "nzDropdownMatchSelectWidth",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzDropdownMatchSelectWidth" in obj,
          get: (obj) => obj.nzDropdownMatchSelectWidth,
          set: (obj, value) => {
            obj.nzDropdownMatchSelectWidth = value;
          }
        },
        metadata: _metadata
      }, _nzDropdownMatchSelectWidth_initializers, _nzDropdownMatchSelectWidth_extraInitializers);
      __esDecorate(null, null, _nzHideUnMatched_decorators, {
        kind: "field",
        name: "nzHideUnMatched",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzHideUnMatched" in obj,
          get: (obj) => obj.nzHideUnMatched,
          set: (obj, value) => {
            obj.nzHideUnMatched = value;
          }
        },
        metadata: _metadata
      }, _nzHideUnMatched_initializers, _nzHideUnMatched_extraInitializers);
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
      __esDecorate(null, null, _nzSize_decorators, {
        kind: "field",
        name: "nzSize",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzSize" in obj,
          get: (obj) => obj.nzSize,
          set: (obj, value) => {
            obj.nzSize = value;
          }
        },
        metadata: _metadata
      }, _nzSize_initializers, _nzSize_extraInitializers);
      __esDecorate(null, null, _nzVariant_decorators, {
        kind: "field",
        name: "nzVariant",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzVariant" in obj,
          get: (obj) => obj.nzVariant,
          set: (obj, value) => {
            obj.nzVariant = value;
          }
        },
        metadata: _metadata
      }, _nzVariant_initializers, _nzVariant_extraInitializers);
      __esDecorate(null, null, _nzBackdrop_decorators, {
        kind: "field",
        name: "nzBackdrop",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzBackdrop" in obj,
          get: (obj) => obj.nzBackdrop,
          set: (obj, value) => {
            obj.nzBackdrop = value;
          }
        },
        metadata: _metadata
      }, _nzBackdrop_initializers, _nzBackdrop_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    _nzModuleName = NZ_CONFIG_MODULE_NAME;
    renderer = inject(Renderer2);
    cdr = inject(ChangeDetectorRef);
    elementRef = inject(ElementRef);
    focusMonitor = inject(FocusMonitor);
    destroyRef = inject(DestroyRef);
    platform = inject(Platform);
    nzFormStatusService = inject(NzFormStatusService, {
      optional: true
    });
    noAnimation = inject(NzNoAnimationDirective, {
      host: true,
      optional: true
    });
    requestId = -1;
    slideAnimationEnter = slideAnimationEnter(() => this.placement().startsWith("top") ? "down" : "up");
    slideAnimationLeave = slideAnimationLeave(() => this.placement().startsWith("top") ? "down" : "up");
    nzId = null;
    nzAllowClear = true;
    nzShowExpand = true;
    nzShowLine = false;
    nzDropdownMatchSelectWidth = __runInitializers(this, _nzDropdownMatchSelectWidth_initializers, true);
    nzCheckable = (__runInitializers(this, _nzDropdownMatchSelectWidth_extraInitializers), false);
    nzHideUnMatched = __runInitializers(this, _nzHideUnMatched_initializers, false);
    nzShowIcon = (__runInitializers(this, _nzHideUnMatched_extraInitializers), __runInitializers(this, _nzShowIcon_initializers, false));
    nzShowSearch = (__runInitializers(this, _nzShowIcon_extraInitializers), false);
    nzDisabled = false;
    nzAsyncData = false;
    nzMultiple = false;
    nzDefaultExpandAll = false;
    nzCheckStrictly = false;
    nzVirtualItemSize = 28;
    nzVirtualMaxBufferPx = 500;
    nzVirtualMinBufferPx = 28;
    nzVirtualHeight = null;
    nzExpandedIcon;
    nzNotFoundContent;
    nzNodes = [];
    nzOpen = false;
    nzSize = __runInitializers(this, _nzSize_initializers, "default");
    nzVariant = (__runInitializers(this, _nzSize_extraInitializers), __runInitializers(this, _nzVariant_initializers, void 0));
    nzPlaceHolder = (__runInitializers(this, _nzVariant_extraInitializers), "");
    nzDropdownStyle = null;
    nzDropdownClassName;
    nzBackdrop = __runInitializers(this, _nzBackdrop_initializers, false);
    nzStatus = (__runInitializers(this, _nzBackdrop_extraInitializers), "");
    nzPlacement = "";
    set nzExpandedKeys(value) {
      this.expandedKeys = value;
    }
    get nzExpandedKeys() {
      return this.expandedKeys;
    }
    nzPrefix = null;
    nzSuffixIcon = null;
    nzDisplayWith = (node) => node.title;
    nzMaxTagCount;
    nzMaxTagPlaceholder = null;
    nzOpenChange = new EventEmitter();
    nzCleared = new EventEmitter();
    nzRemoved = new EventEmitter();
    nzExpandChange = new EventEmitter();
    nzTreeClick = new EventEmitter();
    nzTreeCheckboxChange = new EventEmitter();
    nzSelectSearchComponent;
    treeRef;
    cdkOverlayOrigin;
    cdkConnectedOverlay;
    nzTreeTemplate;
    nzTreeTemplateChild;
    get treeTemplate() {
      return this.nzTreeTemplate || this.nzTreeTemplateChild;
    }
    prefixCls = "ant-select";
    statusCls = {};
    status = "";
    hasFeedback = false;
    dropdownClassName = TREE_SELECT_DEFAULT_CLASS;
    triggerWidth;
    isComposing = false;
    isNotFound = false;
    focused = false;
    inputValue = "";
    selectedNodes = [];
    expandedKeys = [];
    value = [];
    dir = inject(Directionality).valueSignal;
    positions = [];
    finalSize = computed(
      () => {
        if (this.formSize?.()) {
          return this.formSize();
        }
        if (this.compactSize) {
          return this.compactSize();
        }
        return this.size();
      },
      ...ngDevMode ? [{
        debugName: "finalSize"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    finalVariant = computed(
      () => this.variant() || this.formVariant?.() || "outlined",
      ...ngDevMode ? [{
        debugName: "finalVariant"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    placement = signal(
      "bottomLeft",
      ...ngDevMode ? [{
        debugName: "placement"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    size = signal(
      this.nzSize,
      ...ngDevMode ? [{
        debugName: "size"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    variant = signal(
      this.nzVariant,
      ...ngDevMode ? [{
        debugName: "variant"
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
    compactSize = inject(NZ_SPACE_COMPACT_SIZE, {
      optional: true
    });
    isNzDisableFirstChange = true;
    isComposingChange$ = new Subject();
    searchValueChange$ = new Subject();
    onChange = (_value) => {
    };
    onTouched = () => {
    };
    get placeHolderDisplay() {
      return this.inputValue || this.isComposing || this.selectedNodes.length ? "none" : "block";
    }
    get isMultiple() {
      return this.nzMultiple || this.nzCheckable;
    }
    constructor() {
      super(inject(NzTreeSelectService));
      this.destroyRef.onDestroy(() => {
        this.closeDropdown();
      });
      onConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME, () => {
        this.size.set(this.nzSize);
        this.cdr.markForCheck();
      });
    }
    ngOnInit() {
      this.size.set(this.nzSize);
      this.nzFormStatusService?.formStatusChanges.pipe(distinctUntilChanged((pre, cur) => pre.status === cur.status && pre.hasFeedback === cur.hasFeedback), takeUntilDestroyed(this.destroyRef)).subscribe(({
        status,
        hasFeedback
      }) => {
        this.setStatusStyles(status, hasFeedback);
      });
      this.subscribeSelectionChange();
      this.focusMonitor.monitor(this.elementRef, true).pipe(takeUntilDestroyed(this.destroyRef)).subscribe((focusOrigin) => {
        if (!focusOrigin) {
          this.focused = false;
          this.cdr.markForCheck();
          Promise.resolve().then(() => {
            this.onTouched();
          });
        } else {
          this.focused = true;
          this.cdr.markForCheck();
        }
      });
      combineLatest([this.searchValueChange$, this.isComposingChange$.pipe(startWith(false))]).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(([searchValue, isComposing]) => {
        this.isComposing = isComposing;
        if (!isComposing) {
          this.inputValue = searchValue;
          this.updatePosition();
        }
      });
    }
    isComposingChange(isComposing) {
      this.isComposingChange$.next(isComposing);
    }
    setDisabledState(isDisabled) {
      this.nzDisabled = this.isNzDisableFirstChange && this.nzDisabled || isDisabled;
      this.closeDropdown();
      this.isNzDisableFirstChange = false;
    }
    setStatusStyles(status, hasFeedback) {
      this.status = status;
      this.hasFeedback = hasFeedback;
      this.cdr.markForCheck();
      this.statusCls = getStatusClassNames(this.prefixCls, status, hasFeedback);
      Object.keys(this.statusCls).forEach((status2) => {
        if (this.statusCls[status2]) {
          this.renderer.addClass(this.elementRef.nativeElement, status2);
        } else {
          this.renderer.removeClass(this.elementRef.nativeElement, status2);
        }
      });
    }
    ngOnChanges({
      nzNodes,
      nzDropdownClassName,
      nzStatus,
      nzPlacement,
      nzSize,
      nzVariant
    }) {
      if (nzNodes) {
        this.updateSelectedNodes(true);
      }
      if (nzDropdownClassName) {
        const className = this.nzDropdownClassName && this.nzDropdownClassName.trim();
        this.dropdownClassName = className ? `${TREE_SELECT_DEFAULT_CLASS} ${className}` : TREE_SELECT_DEFAULT_CLASS;
      }
      if (nzStatus) {
        this.setStatusStyles(this.nzStatus, this.hasFeedback);
      }
      if (nzPlacement) {
        const {
          currentValue
        } = nzPlacement;
        this.placement.set(currentValue);
        const listOfPlacement = ["bottomLeft", "topLeft", "bottomRight", "topRight"];
        if (currentValue && listOfPlacement.includes(currentValue)) {
          this.positions = [POSITION_MAP[currentValue]];
        } else {
          this.positions = listOfPlacement.map((e) => POSITION_MAP[e]);
        }
      }
      if (nzSize) {
        this.size.set(nzSize.currentValue);
      }
      if (nzVariant) {
        this.variant.set(nzVariant.currentValue);
      }
    }
    writeValue(value) {
      if (isNotNil(value)) {
        if (this.isMultiple && Array.isArray(value)) {
          this.value = value;
        } else {
          this.value = [value];
        }
        this.clearSelectedNodes();
        this.updateSelectedNodes(true);
      } else {
        this.value = [];
        this.clearSelectedNodes();
        this.selectedNodes = [];
      }
      this.cdr.markForCheck();
    }
    registerOnChange(fn) {
      this.onChange = fn;
    }
    registerOnTouched(fn) {
      this.onTouched = fn;
    }
    onKeydown(event) {
      if (this.nzDisabled) {
        return;
      }
      switch (event.keyCode) {
        case ESCAPE:
          break;
        case TAB:
          this.closeDropdown();
          break;
        default:
          if (!this.nzOpen) {
            this.openDropdown();
          }
      }
    }
    trigger() {
      if (this.nzDisabled || !this.nzDisabled && this.nzOpen) {
        this.closeDropdown();
      } else {
        this.openDropdown();
      }
    }
    openDropdown() {
      if (!this.nzDisabled) {
        this.nzOpen = true;
        this.nzOpenChange.emit(this.nzOpen);
        this.updateCdkConnectedOverlayStatus();
        if (this.nzShowSearch || this.isMultiple) {
          this.focusOnInput();
        }
        this.cdr.markForCheck();
      }
    }
    closeDropdown() {
      Promise.resolve().then(() => this.onTouched());
      this.nzOpen = false;
      this.inputValue = "";
      this.isNotFound = false;
      this.nzOpenChange.emit(this.nzOpen);
      this.cdr.markForCheck();
    }
    onKeyDownInput(e) {
      const keyCode = e.keyCode;
      const eventTarget = e.target;
      if (this.isMultiple && !eventTarget.value && keyCode === BACKSPACE) {
        e.preventDefault();
        if (this.selectedNodes.length) {
          const removeNode = this.selectedNodes[this.selectedNodes.length - 1];
          if (removeNode && !removeNode.isDisabled) {
            this.removeSelected(removeNode);
          }
        }
      }
    }
    onExpandedKeysChange(value) {
      this.nzExpandChange.emit(value);
      this.expandedKeys = [...value.keys];
    }
    setInputValue(value) {
      this.searchValueChange$.next(value);
    }
    removeSelected(node, emit = true) {
      node.isSelected = false;
      node.isChecked = false;
      if (this.nzCheckable) {
        this.nzTreeService.conduct(node, this.nzCheckStrictly);
      } else {
        this.nzTreeService.setSelectedNodeList(node, this.nzMultiple);
      }
      if (emit) {
        this.nzRemoved.emit(node);
      }
    }
    focusOnInput() {
      if (this.nzSelectSearchComponent) {
        this.nzSelectSearchComponent.focus();
      }
    }
    subscribeSelectionChange() {
      merge(this.nzTreeClick.pipe(tap((event) => {
        const node = event.node;
        if (this.nzCheckable && !node.isDisabled && !node.isDisableCheckbox) {
          node.isChecked = !node.isChecked;
          node.isHalfChecked = false;
          if (!this.nzCheckStrictly) {
            this.nzTreeService.conduct(node);
          }
        }
        if (this.nzCheckable) {
          node.isSelected = false;
        }
      }), filter((event) => {
        const node = event.node;
        return this.nzCheckable ? !node.isDisabled && !node.isDisableCheckbox : !node.isDisabled && node.isSelectable;
      })), this.nzCheckable ? this.nzTreeCheckboxChange.asObservable() : of(), this.nzCleared, this.nzRemoved).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
        this.updateSelectedNodes();
        const value = this.selectedNodes.map((node) => node.key);
        this.value = [...value];
        if (this.nzShowSearch || this.isMultiple) {
          this.inputValue = "";
          this.isNotFound = false;
        }
        if (this.isMultiple) {
          this.onChange(value);
          this.focusOnInput();
          this.updatePosition();
        } else {
          this.closeDropdown();
          this.onChange(value.length ? value[0] : null);
        }
      });
    }
    updateSelectedNodes(init = false) {
      if (init) {
        const nodes = this.coerceTreeNodes(this.nzNodes);
        this.nzTreeService.isMultiple = this.isMultiple;
        this.nzTreeService.isCheckStrictly = this.nzCheckStrictly;
        this.nzTreeService.initTree(nodes);
        if (this.nzCheckable) {
          this.nzTreeService.conductCheck(this.value, this.nzCheckStrictly);
        } else {
          this.nzTreeService.conductSelectedKeys(this.value, this.isMultiple);
        }
      }
      this.selectedNodes = [...this.nzCheckable ? this.getCheckedNodeList() : this.getSelectedNodeList()].sort((a, b) => {
        const indexA = this.value.indexOf(a.key);
        const indexB = this.value.indexOf(b.key);
        if (indexA !== -1 && indexB !== -1) {
          return indexA - indexB;
        }
        if (indexA !== -1) {
          return -1;
        }
        if (indexB !== -1) {
          return 1;
        }
        return 0;
      });
    }
    updatePosition() {
      requestAnimationFrame(() => {
        this.cdkConnectedOverlay?.overlayRef?.updatePosition();
      });
    }
    onPositionChange(position) {
      const placement = getPlacementName(position);
      this.placement.set(placement);
    }
    onClearSelection() {
      this.selectedNodes.forEach((node) => {
        this.removeSelected(node, false);
      });
      this.nzCleared.emit();
    }
    onClickOutside(event) {
      const target = _getEventTarget(event);
      if (!this.elementRef.nativeElement.contains(target)) {
        this.closeDropdown();
      }
    }
    setSearchValues($event) {
      Promise.resolve().then(() => {
        this.isNotFound = (this.nzShowSearch || this.isMultiple) && !!this.inputValue && $event.matchedKeys.length === 0;
      });
    }
    updateCdkConnectedOverlayStatus() {
      if (this.platform.isBrowser && this.cdkOverlayOrigin.elementRef.nativeElement) {
        const triggerWidth = this.triggerWidth;
        cancelAnimationFrame(this.requestId);
        this.requestId = requestAnimationFrame(() => {
          this.triggerWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
          if (triggerWidth !== this.triggerWidth) {
            this.cdr.detectChanges();
          }
        });
      }
    }
    clearSelectedNodes() {
      this.selectedNodes.forEach((node) => {
        this.removeSelected(node, false);
      });
    }
    static \u0275fac = function NzTreeSelectComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzTreeSelectComponent2)();
    };
    static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: NzTreeSelectComponent2,
      selectors: [["nz-tree-select"]],
      contentQueries: function NzTreeSelectComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, _c0, 7);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzTreeTemplateChild = _t.first);
        }
      },
      viewQuery: function NzTreeSelectComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(NzSelectSearchComponent, 5)(_c1, 5)(CdkOverlayOrigin, 7)(CdkConnectedOverlay, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzSelectSearchComponent = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.treeRef = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cdkOverlayOrigin = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cdkConnectedOverlay = _t.first);
        }
      },
      hostAttrs: [1, "ant-select", "ant-tree-select"],
      hostVars: 32,
      hostBindings: function NzTreeSelectComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function NzTreeSelectComponent_click_HostBindingHandler() {
            return ctx.trigger();
          })("keydown", function NzTreeSelectComponent_keydown_HostBindingHandler($event) {
            return ctx.onKeydown($event);
          });
        }
        if (rf & 2) {
          \u0275\u0275classProp("ant-select-in-form-item", !!ctx.nzFormStatusService)("ant-select-rtl", ctx.dir() === "rtl")("ant-select-lg", ctx.finalSize() === "large")("ant-select-sm", ctx.finalSize() === "small")("ant-select-disabled", ctx.nzDisabled)("ant-select-single", !ctx.isMultiple)("ant-select-show-arrow", !ctx.isMultiple)("ant-select-show-search", !ctx.isMultiple)("ant-select-outlined", ctx.finalVariant() === "outlined")("ant-select-borderless", ctx.finalVariant() === "borderless")("ant-select-filled", ctx.finalVariant() === "filled")("ant-select-underlined", ctx.finalVariant() === "underlined")("ant-select-multiple", ctx.isMultiple)("ant-select-allow-clear", ctx.nzAllowClear)("ant-select-open", ctx.nzOpen)("ant-select-focused", ctx.nzOpen || ctx.focused);
        }
      },
      inputs: {
        nzId: "nzId",
        nzAllowClear: [2, "nzAllowClear", "nzAllowClear", booleanAttribute],
        nzShowExpand: [2, "nzShowExpand", "nzShowExpand", booleanAttribute],
        nzShowLine: [2, "nzShowLine", "nzShowLine", booleanAttribute],
        nzDropdownMatchSelectWidth: [2, "nzDropdownMatchSelectWidth", "nzDropdownMatchSelectWidth", booleanAttribute],
        nzCheckable: [2, "nzCheckable", "nzCheckable", booleanAttribute],
        nzHideUnMatched: [2, "nzHideUnMatched", "nzHideUnMatched", booleanAttribute],
        nzShowIcon: [2, "nzShowIcon", "nzShowIcon", booleanAttribute],
        nzShowSearch: [2, "nzShowSearch", "nzShowSearch", booleanAttribute],
        nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
        nzAsyncData: [2, "nzAsyncData", "nzAsyncData", booleanAttribute],
        nzMultiple: [2, "nzMultiple", "nzMultiple", booleanAttribute],
        nzDefaultExpandAll: [2, "nzDefaultExpandAll", "nzDefaultExpandAll", booleanAttribute],
        nzCheckStrictly: [2, "nzCheckStrictly", "nzCheckStrictly", booleanAttribute],
        nzVirtualItemSize: "nzVirtualItemSize",
        nzVirtualMaxBufferPx: "nzVirtualMaxBufferPx",
        nzVirtualMinBufferPx: "nzVirtualMinBufferPx",
        nzVirtualHeight: "nzVirtualHeight",
        nzExpandedIcon: "nzExpandedIcon",
        nzNotFoundContent: "nzNotFoundContent",
        nzNodes: "nzNodes",
        nzOpen: "nzOpen",
        nzSize: "nzSize",
        nzVariant: "nzVariant",
        nzPlaceHolder: "nzPlaceHolder",
        nzDropdownStyle: "nzDropdownStyle",
        nzDropdownClassName: "nzDropdownClassName",
        nzBackdrop: "nzBackdrop",
        nzStatus: "nzStatus",
        nzPlacement: "nzPlacement",
        nzExpandedKeys: "nzExpandedKeys",
        nzPrefix: "nzPrefix",
        nzSuffixIcon: "nzSuffixIcon",
        nzDisplayWith: "nzDisplayWith",
        nzMaxTagCount: [2, "nzMaxTagCount", "nzMaxTagCount", numberAttribute],
        nzMaxTagPlaceholder: "nzMaxTagPlaceholder",
        nzTreeTemplate: "nzTreeTemplate"
      },
      outputs: {
        nzOpenChange: "nzOpenChange",
        nzCleared: "nzCleared",
        nzRemoved: "nzRemoved",
        nzExpandChange: "nzExpandChange",
        nzTreeClick: "nzTreeClick",
        nzTreeCheckboxChange: "nzTreeCheckboxChange"
      },
      exportAs: ["nzTreeSelect"],
      features: [\u0275\u0275ProvidersFeature([NzTreeSelectService, {
        provide: NZ_SPACE_COMPACT_ITEM_TYPE,
        useValue: "select"
      }, {
        provide: NzTreeHigherOrderServiceToken,
        useExisting: NzTreeSelectService
      }, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzTreeSelectComponent2),
        multi: true
      }]), \u0275\u0275HostDirectivesFeature([NzSpaceCompactItemDirective]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature],
      decls: 11,
      vars: 16,
      consts: [["feedbackIconTpl", ""], ["treeRef", ""], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", "cdkConnectedOverlayTransformOriginOn", ".ant-select-tree-dropdown", 3, "overlayOutsideClick", "detach", "positionChange", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOpen", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayWidth"], ["cdkOverlayOrigin", "", 1, "ant-select-selector"], [1, "ant-select-prefix"], [1, "ant-select-selection-wrap"], [1, "ant-select-selection-overflow"], [3, "placeholder", "display"], [3, "showArrow", "search", "suffixIcon", "feedbackIcon"], [3, "nzNoAnimation", "dir"], ["nzNoAnimation", "", "nzSelectMode", "", "nzBlockNode", "", 3, "nzExpandChange", "nzClick", "nzCheckedKeysChange", "nzSelectedKeysChange", "nzCheckboxChange", "nzSearchValueChange", "hidden", "nzData", "nzMultiple", "nzSearchValue", "nzHideUnMatched", "nzShowIcon", "nzCheckable", "nzAsyncData", "nzShowExpand", "nzShowLine", "nzExpandedIcon", "nzExpandAll", "nzExpandedKeys", "nzCheckedKeys", "nzSelectedKeys", "nzTreeTemplate", "nzCheckStrictly", "nzVirtualItemSize", "nzVirtualMaxBufferPx", "nzVirtualMinBufferPx", "nzVirtualHeight"], [1, "ant-select-not-found"], ["nzComponentName", "tree-select", 3, "specificContent"], [4, "nzStringTemplateOutlet"], [1, "ant-select-selection-overflow-item"], [1, "ant-select-selection-overflow-item", "ant-select-selection-overflow-item-suffix"], [3, "keydown", "isComposingChange", "valueChange", "nzId", "showInput", "value", "mirrorSync", "disabled", "focusTrigger"], ["deletable", "", "displayLabelInHtml", "", 3, "delete", "disabled", "label"], [3, "contentTemplateOutlet", "contentTemplateOutletContext", "label"], ["displayLabelInHtml", "", 3, "label"], [3, "placeholder"], [3, "status"], [3, "clear"]],
      template: function NzTreeSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275template(0, NzTreeSelectComponent_ng_template_0_Template, 4, 40, "ng-template", 2);
          \u0275\u0275listener("overlayOutsideClick", function NzTreeSelectComponent_Template_ng_template_overlayOutsideClick_0_listener($event) {
            return ctx.onClickOutside($event);
          })("detach", function NzTreeSelectComponent_Template_ng_template_detach_0_listener() {
            return ctx.closeDropdown();
          })("positionChange", function NzTreeSelectComponent_Template_ng_template_positionChange_0_listener($event) {
            return ctx.onPositionChange($event);
          });
          \u0275\u0275elementStart(1, "div", 3);
          \u0275\u0275conditionalCreate(2, NzTreeSelectComponent_Conditional_2_Template, 2, 1, "div", 4);
          \u0275\u0275elementStart(3, "span", 5);
          \u0275\u0275conditionalCreate(4, NzTreeSelectComponent_Conditional_4_Template, 7, 11, "div", 6)(5, NzTreeSelectComponent_Conditional_5_Template, 2, 7);
          \u0275\u0275conditionalCreate(6, NzTreeSelectComponent_Conditional_6_Template, 1, 3, "nz-select-placeholder", 7);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(7, "nz-select-arrow", 8);
          \u0275\u0275template(8, NzTreeSelectComponent_ng_template_8_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
          \u0275\u0275elementEnd();
          \u0275\u0275conditionalCreate(10, NzTreeSelectComponent_Conditional_10_Template, 1, 0, "nz-select-clear");
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          let tmp_8_0;
          const feedbackIconTpl_r9 = \u0275\u0275reference(9);
          \u0275\u0275property("cdkConnectedOverlayOffsetY", ctx.placement().startsWith("top") ? -4 : 4)("cdkConnectedOverlayHasBackdrop", ctx.nzBackdrop)("cdkConnectedOverlayOrigin", ctx.cdkOverlayOrigin)("cdkConnectedOverlayPositions", ctx.nzPlacement ? ctx.positions : \u0275\u0275pureFunction0(15, _c2))("cdkConnectedOverlayOpen", ctx.nzOpen)("cdkConnectedOverlayMinWidth", ctx.nzDropdownMatchSelectWidth ? null : ctx.triggerWidth)("cdkConnectedOverlayWidth", ctx.nzDropdownMatchSelectWidth ? ctx.triggerWidth : null);
          \u0275\u0275advance(2);
          \u0275\u0275conditional((tmp_8_0 = ctx.nzPrefix) ? 2 : -1, tmp_8_0);
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx.isMultiple ? 4 : 5);
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx.nzPlaceHolder && ctx.selectedNodes.length === 0 ? 6 : -1);
          \u0275\u0275advance();
          \u0275\u0275property("showArrow", true)("search", ctx.nzOpen && ctx.nzShowSearch)("suffixIcon", ctx.nzSuffixIcon)("feedbackIcon", feedbackIconTpl_r9);
          \u0275\u0275advance(3);
          \u0275\u0275conditional(ctx.nzAllowClear && !ctx.nzDisabled && ctx.selectedNodes.length ? 10 : -1);
        }
      },
      dependencies: [NzOverlayModule, NzConnectedOverlayDirective, CdkConnectedOverlay, NzNoAnimationDirective, NzTreeModule, NzTreeComponent, NzEmptyModule, NzEmbedEmptyComponent, CdkOverlayOrigin, NzSelectModule, NzSelectArrowComponent, NzSelectClearComponent, NzSelectItemComponent, NzSelectPlaceholderComponent, NzSelectSearchComponent, NzFormItemFeedbackIconComponent, NzStringTemplateOutletDirective, SlicePipe],
      encapsulation: 2
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeSelectComponent, [{
    type: Component,
    args: [{
      selector: "nz-tree-select",
      exportAs: "nzTreeSelect",
      imports: [NzOverlayModule, CdkConnectedOverlay, NzNoAnimationDirective, NzTreeModule, NzEmptyModule, CdkOverlayOrigin, SlicePipe, NzSelectModule, NzFormItemFeedbackIconComponent, NzStringTemplateOutletDirective],
      template: `
    <ng-template
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayOffsetY]="placement().startsWith('top') ? -4 : 4"
      [cdkConnectedOverlayHasBackdrop]="nzBackdrop"
      [cdkConnectedOverlayOrigin]="cdkOverlayOrigin"
      [cdkConnectedOverlayPositions]="nzPlacement ? positions : []"
      [cdkConnectedOverlayOpen]="nzOpen"
      cdkConnectedOverlayTransformOriginOn=".ant-select-tree-dropdown"
      [cdkConnectedOverlayMinWidth]="$any(nzDropdownMatchSelectWidth ? null : triggerWidth)"
      [cdkConnectedOverlayWidth]="$any(nzDropdownMatchSelectWidth ? triggerWidth : null)"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="closeDropdown()"
      (positionChange)="onPositionChange($event)"
    >
      <div
        [class]="dropdownClassName"
        [nzNoAnimation]="!!noAnimation?.nzNoAnimation?.()"
        [animate.enter]="slideAnimationEnter()"
        [animate.leave]="slideAnimationLeave()"
        [class.ant-select-dropdown-placement-bottomLeft]="placement() === 'bottomLeft'"
        [class.ant-select-dropdown-placement-topLeft]="placement() === 'topLeft'"
        [class.ant-select-dropdown-placement-bottomRight]="placement() === 'bottomRight'"
        [class.ant-select-dropdown-placement-topRight]="placement() === 'topRight'"
        [class.ant-tree-select-dropdown-rtl]="dir() === 'rtl'"
        [dir]="dir()"
        [style]="nzDropdownStyle"
      >
        <nz-tree
          #treeRef
          [hidden]="isNotFound"
          nzNoAnimation
          nzSelectMode
          nzBlockNode
          [nzData]="nzNodes"
          [nzMultiple]="nzMultiple"
          [nzSearchValue]="inputValue"
          [nzHideUnMatched]="nzHideUnMatched"
          [nzShowIcon]="nzShowIcon"
          [nzCheckable]="nzCheckable"
          [nzAsyncData]="nzAsyncData"
          [nzShowExpand]="nzShowExpand"
          [nzShowLine]="nzShowLine"
          [nzExpandedIcon]="nzExpandedIcon"
          [nzExpandAll]="nzDefaultExpandAll"
          [nzExpandedKeys]="expandedKeys"
          [nzCheckedKeys]="nzCheckable ? value : []"
          [nzSelectedKeys]="!nzCheckable ? value : []"
          [nzTreeTemplate]="treeTemplate"
          [nzCheckStrictly]="nzCheckStrictly"
          [nzVirtualItemSize]="nzVirtualItemSize"
          [nzVirtualMaxBufferPx]="nzVirtualMaxBufferPx"
          [nzVirtualMinBufferPx]="nzVirtualMinBufferPx"
          [nzVirtualHeight]="nzVirtualHeight"
          (nzExpandChange)="onExpandedKeysChange($event)"
          (nzClick)="nzTreeClick.emit($event)"
          (nzCheckedKeysChange)="updateSelectedNodes()"
          (nzSelectedKeysChange)="updateSelectedNodes()"
          (nzCheckboxChange)="nzTreeCheckboxChange.emit($event)"
          (nzSearchValueChange)="setSearchValues($event)"
        />
        @if (nzNodes.length === 0 || isNotFound) {
          <span class="ant-select-not-found">
            <nz-embed-empty nzComponentName="tree-select" [specificContent]="nzNotFoundContent" />
          </span>
        }
      </div>
    </ng-template>

    <div cdkOverlayOrigin class="ant-select-selector">
      @if (nzPrefix; as prefix) {
        <div class="ant-select-prefix">
          <ng-container *nzStringTemplateOutlet="prefix">{{ prefix }}</ng-container>
        </div>
      }

      <span class="ant-select-selection-wrap">
        @if (isMultiple) {
          <div class="ant-select-selection-overflow">
            @for (node of selectedNodes | slice: 0 : nzMaxTagCount; track node.key) {
              <div class="ant-select-selection-overflow-item">
                <nz-select-item
                  deletable
                  [disabled]="node.isDisabled || nzDisabled"
                  [label]="nzDisplayWith(node)"
                  displayLabelInHtml
                  (delete)="removeSelected(node, true)"
                />
              </div>
            }
            @if (selectedNodes.length > nzMaxTagCount) {
              <div class="ant-select-selection-overflow-item">
                <nz-select-item
                  [contentTemplateOutlet]="nzMaxTagPlaceholder"
                  [contentTemplateOutletContext]="selectedNodes | slice: nzMaxTagCount"
                  [label]="'+ ' + (selectedNodes.length - nzMaxTagCount) + ' ...'"
                />
              </div>
            }
            <div class="ant-select-selection-overflow-item ant-select-selection-overflow-item-suffix">
              <nz-select-search
                [nzId]="nzId"
                [showInput]="nzShowSearch"
                (keydown)="onKeyDownInput($event)"
                (isComposingChange)="isComposingChange($event)"
                (valueChange)="setInputValue($event)"
                [value]="inputValue"
                [mirrorSync]="true"
                [disabled]="nzDisabled"
                [focusTrigger]="nzOpen"
              />
            </div>
          </div>
        } @else {
          <nz-select-search
            [nzId]="nzId"
            [showInput]="nzShowSearch"
            (keydown)="onKeyDownInput($event)"
            (isComposingChange)="isComposingChange($event)"
            (valueChange)="setInputValue($event)"
            [value]="inputValue"
            [mirrorSync]="false"
            [disabled]="nzDisabled"
            [focusTrigger]="nzOpen"
          />
          @if (selectedNodes.length === 1 && !isComposing && inputValue === '') {
            <nz-select-item [label]="nzDisplayWith(selectedNodes[0])" displayLabelInHtml />
          }
        }

        @if (nzPlaceHolder && selectedNodes.length === 0) {
          <nz-select-placeholder [placeholder]="nzPlaceHolder" [style.display]="placeHolderDisplay" />
        }
      </span>

      <nz-select-arrow
        [showArrow]="true"
        [search]="nzOpen && nzShowSearch"
        [suffixIcon]="nzSuffixIcon"
        [feedbackIcon]="feedbackIconTpl"
      >
        <ng-template #feedbackIconTpl>
          @if (hasFeedback && !!status) {
            <nz-form-item-feedback-icon [status]="status" />
          }
        </ng-template>
      </nz-select-arrow>

      @if (nzAllowClear && !nzDisabled && selectedNodes.length) {
        <nz-select-clear (clear)="onClearSelection()" />
      }
    </div>
  `,
      providers: [NzTreeSelectService, {
        provide: NZ_SPACE_COMPACT_ITEM_TYPE,
        useValue: "select"
      }, {
        provide: NzTreeHigherOrderServiceToken,
        useExisting: NzTreeSelectService
      }, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzTreeSelectComponent),
        multi: true
      }],
      host: {
        class: "ant-select ant-tree-select",
        "[class.ant-select-in-form-item]": "!!nzFormStatusService",
        "[class.ant-select-rtl]": 'dir()==="rtl"',
        "[class.ant-select-lg]": 'finalSize() === "large"',
        "[class.ant-select-sm]": 'finalSize() === "small"',
        "[class.ant-select-disabled]": "nzDisabled",
        "[class.ant-select-single]": "!isMultiple",
        "[class.ant-select-show-arrow]": "!isMultiple",
        "[class.ant-select-show-search]": "!isMultiple",
        "[class.ant-select-outlined]": 'finalVariant() === "outlined"',
        "[class.ant-select-borderless]": 'finalVariant() === "borderless"',
        "[class.ant-select-filled]": 'finalVariant() === "filled"',
        "[class.ant-select-underlined]": 'finalVariant() === "underlined"',
        "[class.ant-select-multiple]": "isMultiple",
        "[class.ant-select-allow-clear]": "nzAllowClear",
        "[class.ant-select-open]": "nzOpen",
        "[class.ant-select-focused]": "nzOpen || focused",
        "(click)": "trigger()",
        "(keydown)": "onKeydown($event)"
      },
      hostDirectives: [NzSpaceCompactItemDirective]
    }]
  }], () => [], {
    nzId: [{
      type: Input
    }],
    nzAllowClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowExpand: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowLine: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDropdownMatchSelectWidth: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzCheckable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzHideUnMatched: [{
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
    nzShowSearch: [{
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
    nzAsyncData: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzMultiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDefaultExpandAll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzCheckStrictly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzVirtualItemSize: [{
      type: Input
    }],
    nzVirtualMaxBufferPx: [{
      type: Input
    }],
    nzVirtualMinBufferPx: [{
      type: Input
    }],
    nzVirtualHeight: [{
      type: Input
    }],
    nzExpandedIcon: [{
      type: Input
    }],
    nzNotFoundContent: [{
      type: Input
    }],
    nzNodes: [{
      type: Input
    }],
    nzOpen: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzVariant: [{
      type: Input
    }],
    nzPlaceHolder: [{
      type: Input
    }],
    nzDropdownStyle: [{
      type: Input
    }],
    nzDropdownClassName: [{
      type: Input
    }],
    nzBackdrop: [{
      type: Input
    }],
    nzStatus: [{
      type: Input
    }],
    nzPlacement: [{
      type: Input
    }],
    nzExpandedKeys: [{
      type: Input
    }],
    nzPrefix: [{
      type: Input
    }],
    nzSuffixIcon: [{
      type: Input
    }],
    nzDisplayWith: [{
      type: Input
    }],
    nzMaxTagCount: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzMaxTagPlaceholder: [{
      type: Input
    }],
    nzOpenChange: [{
      type: Output
    }],
    nzCleared: [{
      type: Output
    }],
    nzRemoved: [{
      type: Output
    }],
    nzExpandChange: [{
      type: Output
    }],
    nzTreeClick: [{
      type: Output
    }],
    nzTreeCheckboxChange: [{
      type: Output
    }],
    nzSelectSearchComponent: [{
      type: ViewChild,
      args: [NzSelectSearchComponent, {
        static: false
      }]
    }],
    treeRef: [{
      type: ViewChild,
      args: ["treeRef", {
        static: false
      }]
    }],
    cdkOverlayOrigin: [{
      type: ViewChild,
      args: [CdkOverlayOrigin, {
        static: true
      }]
    }],
    cdkConnectedOverlay: [{
      type: ViewChild,
      args: [CdkConnectedOverlay, {
        static: false
      }]
    }],
    nzTreeTemplate: [{
      type: Input
    }],
    nzTreeTemplateChild: [{
      type: ContentChild,
      args: ["nzTreeTemplate", {
        static: true
      }]
    }]
  });
})();
var NzTreeSelectModule = class _NzTreeSelectModule {
  static \u0275fac = function NzTreeSelectModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTreeSelectModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzTreeSelectModule,
    imports: [NzTreeSelectComponent],
    exports: [NzTreeSelectComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzTreeSelectComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTreeSelectModule, [{
    type: NgModule,
    args: [{
      imports: [NzTreeSelectComponent],
      exports: [NzTreeSelectComponent]
    }]
  }], null, null);
})();

export {
  NzTreeSelectComponent,
  NzTreeSelectModule
};
//# debugId=c31c143f-46dd-5892-89c5-026b667c20b2
//# sourceMappingURL=chunk-2D6TQZG3.js.map
