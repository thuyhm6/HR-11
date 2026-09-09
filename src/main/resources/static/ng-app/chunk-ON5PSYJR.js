import {
  NzCheckboxComponent,
  NzCheckboxModule,
  NzSpinComponent
} from "./chunk-VWYGF7JF.js";
import {
  NzResizeObserver
} from "./chunk-JSOAL7UF.js";
import {
  NzEmbedEmptyComponent,
  NzEmptyModule,
  NzOptionComponent,
  NzSelectComponent,
  NzSelectModule
} from "./chunk-2QLZSMGV.js";
import {
  NzDropdownDirective,
  NzDropdownMenuComponent,
  NzDropdownModule,
  NzMenuDirective,
  NzMenuItemComponent,
  NzRadioComponent
} from "./chunk-2GOAB54B.js";
import {
  CdkFixedSizeVirtualScroll,
  CdkScrollable,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
  FormsModule,
  NgControlStatus,
  NgModel,
  NzBreakpointEnum,
  NzBreakpointService,
  NzI18nService,
  NzResizeService,
  ScrollingModule,
  gridResponsiveMap
} from "./chunk-TNYKEBYQ.js";
import {
  AsyncPipe,
  BehaviorSubject,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  DestroyRef,
  Directionality,
  Directive,
  EMPTY,
  ElementRef,
  EventEmitter,
  Injectable,
  Input,
  NgModule,
  NgTemplateOutlet,
  NgZone,
  NzButtonComponent,
  NzButtonModule,
  NzConfigService,
  NzIconDirective,
  NzIconModule,
  NzOutletModule,
  NzStringTemplateOutletDirective,
  NzTransitionPatchDirective,
  NzWaveDirective,
  Output,
  Platform,
  Renderer2,
  ReplaySubject,
  Subject,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
  WithConfig,
  __esDecorate,
  __runInitializers,
  __spreadProps,
  __spreadValues,
  arraysEqual,
  booleanAttribute,
  combineLatest,
  debounceTime,
  delay,
  distinctUntilChanged,
  filter,
  fromEventOutsideAngular,
  inject,
  input,
  isNil,
  map,
  measureScrollbar,
  merge,
  mergeMap,
  numberAttribute,
  of,
  onConfigChangeEventForComponent,
  setClassMetadata,
  skip,
  startWith,
  switchMap,
  takeUntilDestroyed,
  toNumber,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElement,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-VTW5U2M5.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-pagination.mjs
var _c0 = (a0, a1) => ({
  $implicit: a0,
  page: a1
});
function NzPaginationItemComponent_ng_template_0_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r1 = \u0275\u0275nextContext().page;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(page_r1);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 4);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 5);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275conditionalCreate(1, NzPaginationItemComponent_ng_template_0_Case_1_Conditional_1_Template, 1, 0, "nz-icon", 4)(2, NzPaginationItemComponent_ng_template_0_Case_1_Conditional_2_Template, 1, 0, "nz-icon", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.disabled);
    \u0275\u0275attribute("title", ctx_r1.locale.prev_page);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.direction === "rtl" ? 1 : 2);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 5);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 4);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275conditionalCreate(1, NzPaginationItemComponent_ng_template_0_Case_2_Conditional_1_Template, 1, 0, "nz-icon", 5)(2, NzPaginationItemComponent_ng_template_0_Case_2_Conditional_2_Template, 1, 0, "nz-icon", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.disabled);
    \u0275\u0275attribute("title", ctx_r1.locale.next_page);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.direction === "rtl" ? 1 : 2);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_3_Case_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 8);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_3_Case_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 9);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_3_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NzPaginationItemComponent_ng_template_0_Case_3_Case_2_Conditional_0_Template, 1, 0, "nz-icon", 8)(1, NzPaginationItemComponent_ng_template_0_Case_3_Case_2_Conditional_1_Template, 1, 0, "nz-icon", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.direction === "rtl" ? 0 : 1);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_3_Case_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 9);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_3_Case_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 8);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_3_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NzPaginationItemComponent_ng_template_0_Case_3_Case_3_Conditional_0_Template, 1, 0, "nz-icon", 9)(1, NzPaginationItemComponent_ng_template_0_Case_3_Case_3_Conditional_1_Template, 1, 0, "nz-icon", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.direction === "rtl" ? 0 : 1);
  }
}
function NzPaginationItemComponent_ng_template_0_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3)(1, "div", 6);
    \u0275\u0275conditionalCreate(2, NzPaginationItemComponent_ng_template_0_Case_3_Case_2_Template, 2, 1)(3, NzPaginationItemComponent_ng_template_0_Case_3_Case_3_Template, 2, 1);
    \u0275\u0275elementStart(4, "span", 7);
    \u0275\u0275text(5, "\u2022\u2022\u2022");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const type_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_5_0 = type_r3) === "prev_5" ? 2 : tmp_5_0 === "next_5" ? 3 : -1);
  }
}
function NzPaginationItemComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NzPaginationItemComponent_ng_template_0_Case_0_Template, 2, 1, "a")(1, NzPaginationItemComponent_ng_template_0_Case_1_Template, 3, 3, "button", 2)(2, NzPaginationItemComponent_ng_template_0_Case_2_Template, 3, 3, "button", 2)(3, NzPaginationItemComponent_ng_template_0_Case_3_Template, 6, 1, "a", 3);
  }
  if (rf & 2) {
    let tmp_4_0;
    const type_r3 = ctx.$implicit;
    \u0275\u0275conditional((tmp_4_0 = type_r3) === "page" ? 0 : tmp_4_0 === "prev" ? 1 : tmp_4_0 === "next" ? 2 : 3);
  }
}
function NzPaginationItemComponent_ng_template_2_Template(rf, ctx) {
}
var _forTrack0 = ($index, $item) => $item.value;
function NzPaginationOptionsComponent_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 3);
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    \u0275\u0275property("nzLabel", option_r3.label)("nzValue", option_r3.value);
  }
}
function NzPaginationOptionsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-select", 2);
    \u0275\u0275listener("ngModelChange", function NzPaginationOptionsComponent_Conditional_0_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageSizeChange($event));
    });
    \u0275\u0275repeaterCreate(1, NzPaginationOptionsComponent_Conditional_0_For_2_Template, 1, 2, "nz-option", 3, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzDisabled", ctx_r1.disabled)("nzSize", ctx_r1.nzSize)("ngModel", ctx_r1.pageSize);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.listOfPageSizeOption);
  }
}
function NzPaginationOptionsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "input", 4);
    \u0275\u0275listener("keydown.enter", function NzPaginationOptionsComponent_Conditional_1_Template_input_keydown_enter_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.jumpToPageViaInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.locale.jump_to, " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.disabled);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.locale.page, " ");
  }
}
var _c1 = ["containerTemplate"];
var _c2 = (a0, a1) => ({
  $implicit: a0,
  range: a1
});
function NzPaginationDefaultComponent_ng_template_0_Conditional_1_ng_template_1_Template(rf, ctx) {
}
function NzPaginationDefaultComponent_ng_template_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 1);
    \u0275\u0275template(1, NzPaginationDefaultComponent_ng_template_0_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.showTotal)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c2, ctx_r0.total, ctx_r0.ranges));
  }
}
function NzPaginationDefaultComponent_ng_template_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 5);
    \u0275\u0275listener("gotoIndex", function NzPaginationDefaultComponent_ng_template_0_For_3_Template_li_gotoIndex_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.jumpPage($event));
    })("diffIndex", function NzPaginationDefaultComponent_ng_template_0_For_3_Template_li_diffIndex_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.jumpDiff($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("locale", ctx_r0.locale)("type", page_r3.type)("index", page_r3.index)("disabled", !!page_r3.disabled)("itemRender", ctx_r0.itemRender)("active", ctx_r0.pageIndex === page_r3.index)("direction", ctx_r0.dir());
  }
}
function NzPaginationDefaultComponent_ng_template_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 6);
    \u0275\u0275listener("pageIndexChange", function NzPaginationDefaultComponent_ng_template_0_Conditional_4_Template_li_pageIndexChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPageIndexChange($event));
    })("pageSizeChange", function NzPaginationDefaultComponent_ng_template_0_Conditional_4_Template_li_pageSizeChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPageSizeChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("total", ctx_r0.total)("locale", ctx_r0.locale)("disabled", ctx_r0.disabled)("nzSize", ctx_r0.nzSize)("showSizeChanger", ctx_r0.showSizeChanger)("showQuickJumper", ctx_r0.showQuickJumper)("pageIndex", ctx_r0.pageIndex)("pageSize", ctx_r0.pageSize)("pageSizeOptions", ctx_r0.pageSizeOptions);
  }
}
function NzPaginationDefaultComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul");
    \u0275\u0275conditionalCreate(1, NzPaginationDefaultComponent_ng_template_0_Conditional_1_Template, 2, 5, "li", 1);
    \u0275\u0275repeaterCreate(2, NzPaginationDefaultComponent_ng_template_0_For_3_Template, 1, 7, "li", 2, \u0275\u0275componentInstance().trackByPageItem, true);
    \u0275\u0275conditionalCreate(4, NzPaginationDefaultComponent_ng_template_0_Conditional_4_Template, 1, 9, "li", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.showTotal ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.listOfPageItem);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.showQuickJumper || ctx_r0.showSizeChanger ? 4 : -1);
  }
}
function NzPaginationSimpleComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul")(1, "li", 1);
    \u0275\u0275listener("click", function NzPaginationSimpleComponent_ng_template_0_Template_li_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prePage());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "li", 2)(3, "input", 3);
    \u0275\u0275listener("keydown.enter", function NzPaginationSimpleComponent_ng_template_0_Template_input_keydown_enter_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.jumpToPageViaInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 4);
    \u0275\u0275text(5, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "li", 5);
    \u0275\u0275listener("click", function NzPaginationSimpleComponent_ng_template_0_Template_li_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("locale", ctx_r1.locale)("disabled", ctx_r1.isFirstIndex)("direction", ctx_r1.dir())("itemRender", ctx_r1.itemRender);
    \u0275\u0275attribute("title", ctx_r1.locale.prev_page);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", ctx_r1.pageIndex + "/" + ctx_r1.lastIndex);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.disabled)("value", ctx_r1.pageIndex);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.lastIndex, " ");
    \u0275\u0275advance();
    \u0275\u0275property("locale", ctx_r1.locale)("disabled", ctx_r1.isLastIndex)("direction", ctx_r1.dir())("itemRender", ctx_r1.itemRender);
    \u0275\u0275attribute("title", ctx_r1.locale?.next_page);
  }
}
function NzPaginationComponent_Conditional_0_Conditional_0_ng_template_0_Template(rf, ctx) {
}
function NzPaginationComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzPaginationComponent_Conditional_0_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const simplePagination_r1 = \u0275\u0275reference(2);
    \u0275\u0275property("ngTemplateOutlet", simplePagination_r1.template);
  }
}
function NzPaginationComponent_Conditional_0_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzPaginationComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzPaginationComponent_Conditional_0_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const defaultPagination_r2 = \u0275\u0275reference(4);
    \u0275\u0275property("ngTemplateOutlet", defaultPagination_r2.template);
  }
}
function NzPaginationComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NzPaginationComponent_Conditional_0_Conditional_0_Template, 1, 1, null, 4)(1, NzPaginationComponent_Conditional_0_Conditional_1_Template, 1, 1, null, 4);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.nzSimple ? 0 : 1);
  }
}
var NzPaginationItemComponent = class _NzPaginationItemComponent {
  active = false;
  locale;
  index = null;
  disabled = false;
  direction = "ltr";
  type = null;
  itemRender = null;
  diffIndex = new EventEmitter();
  gotoIndex = new EventEmitter();
  title = null;
  clickItem() {
    if (!this.disabled) {
      if (this.type === "page") {
        this.gotoIndex.emit(this.index);
      } else {
        this.diffIndex.emit({
          next: 1,
          prev: -1,
          prev_5: -5,
          next_5: 5
        }[this.type]);
      }
    }
  }
  ngOnChanges(changes) {
    const {
      locale,
      index,
      type
    } = changes;
    if (locale || index || type) {
      this.title = {
        page: `${this.index}`,
        next: this.locale?.next_page,
        prev: this.locale?.prev_page,
        prev_5: this.locale?.prev_5,
        next_5: this.locale?.next_5
      }[this.type];
    }
  }
  static \u0275fac = function NzPaginationItemComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzPaginationItemComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzPaginationItemComponent,
    selectors: [["li", "nz-pagination-item", ""]],
    hostVars: 19,
    hostBindings: function NzPaginationItemComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function NzPaginationItemComponent_click_HostBindingHandler() {
          return ctx.clickItem();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("title", ctx.title);
        \u0275\u0275classProp("ant-pagination-prev", ctx.type === "prev")("ant-pagination-next", ctx.type === "next")("ant-pagination-item", ctx.type === "page")("ant-pagination-jump-prev", ctx.type === "prev_5")("ant-pagination-jump-prev-custom-icon", ctx.type === "prev_5")("ant-pagination-jump-next", ctx.type === "next_5")("ant-pagination-jump-next-custom-icon", ctx.type === "next_5")("ant-pagination-disabled", ctx.disabled)("ant-pagination-item-active", ctx.active);
      }
    },
    inputs: {
      active: "active",
      locale: "locale",
      index: "index",
      disabled: "disabled",
      direction: "direction",
      type: "type",
      itemRender: "itemRender"
    },
    outputs: {
      diffIndex: "diffIndex",
      gotoIndex: "gotoIndex"
    },
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 3,
    vars: 5,
    consts: [["renderItemTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "button", 1, "ant-pagination-item-link", 3, "disabled"], [1, "ant-pagination-item-link"], ["nzType", "right"], ["nzType", "left"], [1, "ant-pagination-item-container"], [1, "ant-pagination-item-ellipsis"], ["nzType", "double-right", 1, "ant-pagination-item-link-icon"], ["nzType", "double-left", 1, "ant-pagination-item-link-icon"]],
    template: function NzPaginationItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, NzPaginationItemComponent_ng_template_0_Template, 4, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(2, NzPaginationItemComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
      }
      if (rf & 2) {
        const renderItemTemplate_r4 = \u0275\u0275reference(1);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngTemplateOutlet", ctx.itemRender || renderItemTemplate_r4)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c0, ctx.type, ctx.index));
      }
    },
    dependencies: [NzIconModule, NzIconDirective, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPaginationItemComponent, [{
    type: Component,
    args: [{
      selector: "li[nz-pagination-item]",
      encapsulation: ViewEncapsulation.None,
      template: `
    <ng-template #renderItemTemplate let-type let-page="page">
      @switch (type) {
        @case ('page') {
          <a>{{ page }}</a>
        }
        @case ('prev') {
          <button type="button" [disabled]="disabled" [attr.title]="locale.prev_page" class="ant-pagination-item-link">
            @if (direction === 'rtl') {
              <nz-icon nzType="right" />
            } @else {
              <nz-icon nzType="left" />
            }
          </button>
        }
        @case ('next') {
          <button type="button" [disabled]="disabled" [attr.title]="locale.next_page" class="ant-pagination-item-link">
            @if (direction === 'rtl') {
              <nz-icon nzType="left" />
            } @else {
              <nz-icon nzType="right" />
            }
          </button>
        }
        @default {
          <a class="ant-pagination-item-link">
            <div class="ant-pagination-item-container">
              @switch (type) {
                @case ('prev_5') {
                  @if (direction === 'rtl') {
                    <nz-icon nzType="double-right" class="ant-pagination-item-link-icon" />
                  } @else {
                    <nz-icon nzType="double-left" class="ant-pagination-item-link-icon" />
                  }
                }
                @case ('next_5') {
                  @if (direction === 'rtl') {
                    <nz-icon nzType="double-left" class="ant-pagination-item-link-icon" />
                  } @else {
                    <nz-icon nzType="double-right" class="ant-pagination-item-link-icon" />
                  }
                }
              }
              <span class="ant-pagination-item-ellipsis">\u2022\u2022\u2022</span>
            </div>
          </a>
        }
      }
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="itemRender || renderItemTemplate"
      [ngTemplateOutletContext]="{ $implicit: type, page: index }"
    />
  `,
      host: {
        "[class.ant-pagination-prev]": `type === 'prev'`,
        "[class.ant-pagination-next]": `type === 'next'`,
        "[class.ant-pagination-item]": `type === 'page'`,
        "[class.ant-pagination-jump-prev]": `type === 'prev_5'`,
        "[class.ant-pagination-jump-prev-custom-icon]": `type === 'prev_5'`,
        "[class.ant-pagination-jump-next]": `type === 'next_5'`,
        "[class.ant-pagination-jump-next-custom-icon]": `type === 'next_5'`,
        "[class.ant-pagination-disabled]": "disabled",
        "[class.ant-pagination-item-active]": "active",
        "[attr.title]": "title",
        "(click)": "clickItem()"
      },
      imports: [NzIconModule, NgTemplateOutlet]
    }]
  }], null, {
    active: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    direction: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    itemRender: [{
      type: Input
    }],
    diffIndex: [{
      type: Output
    }],
    gotoIndex: [{
      type: Output
    }]
  });
})();
var NzPaginationOptionsComponent = class _NzPaginationOptionsComponent {
  nzSize = "default";
  disabled = false;
  showSizeChanger = false;
  showQuickJumper = false;
  locale;
  total = 0;
  pageIndex = 1;
  pageSize = 10;
  pageSizeOptions = [];
  pageIndexChange = new EventEmitter();
  pageSizeChange = new EventEmitter();
  listOfPageSizeOption = [];
  onPageSizeChange(size) {
    if (this.pageSize !== size) {
      this.pageSizeChange.next(size);
    }
  }
  jumpToPageViaInput($event) {
    const target = $event.target;
    const index = Math.floor(toNumber(target.value, this.pageIndex));
    this.pageIndexChange.next(index);
    target.value = "";
  }
  ngOnChanges(changes) {
    const {
      pageSize,
      pageSizeOptions,
      locale
    } = changes;
    if (pageSize || pageSizeOptions || locale) {
      this.listOfPageSizeOption = [.../* @__PURE__ */ new Set([...this.pageSizeOptions, this.pageSize])].map((item) => ({
        value: item,
        label: `${item} ${this.locale.items_per_page}`
      }));
    }
  }
  static \u0275fac = function NzPaginationOptionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzPaginationOptionsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzPaginationOptionsComponent,
    selectors: [["li", "nz-pagination-options", ""]],
    hostAttrs: [1, "ant-pagination-options"],
    inputs: {
      nzSize: "nzSize",
      disabled: "disabled",
      showSizeChanger: "showSizeChanger",
      showQuickJumper: "showQuickJumper",
      locale: "locale",
      total: "total",
      pageIndex: "pageIndex",
      pageSize: "pageSize",
      pageSizeOptions: "pageSizeOptions"
    },
    outputs: {
      pageIndexChange: "pageIndexChange",
      pageSizeChange: "pageSizeChange"
    },
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 2,
    vars: 2,
    consts: [[1, "ant-pagination-options-size-changer", 3, "nzDisabled", "nzSize", "ngModel"], [1, "ant-pagination-options-quick-jumper"], [1, "ant-pagination-options-size-changer", 3, "ngModelChange", "nzDisabled", "nzSize", "ngModel"], [3, "nzLabel", "nzValue"], [3, "keydown.enter", "disabled"]],
    template: function NzPaginationOptionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, NzPaginationOptionsComponent_Conditional_0_Template, 3, 3, "nz-select", 0);
        \u0275\u0275conditionalCreate(1, NzPaginationOptionsComponent_Conditional_1_Template, 4, 3, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.showSizeChanger ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showQuickJumper ? 1 : -1);
      }
    },
    dependencies: [NzSelectModule, NzOptionComponent, NzSelectComponent, FormsModule, NgControlStatus, NgModel],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPaginationOptionsComponent, [{
    type: Component,
    args: [{
      selector: "li[nz-pagination-options]",
      encapsulation: ViewEncapsulation.None,
      template: `
    @if (showSizeChanger) {
      <nz-select
        class="ant-pagination-options-size-changer"
        [nzDisabled]="disabled"
        [nzSize]="nzSize"
        [ngModel]="pageSize"
        (ngModelChange)="onPageSizeChange($event)"
      >
        @for (option of listOfPageSizeOption; track option.value) {
          <nz-option [nzLabel]="option.label" [nzValue]="option.value" />
        }
      </nz-select>
    }

    @if (showQuickJumper) {
      <div class="ant-pagination-options-quick-jumper">
        {{ locale.jump_to }}
        <input [disabled]="disabled" (keydown.enter)="jumpToPageViaInput($event)" />
        {{ locale.page }}
      </div>
    }
  `,
      host: {
        class: "ant-pagination-options"
      },
      imports: [NzSelectModule, FormsModule]
    }]
  }], null, {
    nzSize: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    showSizeChanger: [{
      type: Input
    }],
    showQuickJumper: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    total: [{
      type: Input
    }],
    pageIndex: [{
      type: Input
    }],
    pageSize: [{
      type: Input
    }],
    pageSizeOptions: [{
      type: Input
    }],
    pageIndexChange: [{
      type: Output
    }],
    pageSizeChange: [{
      type: Output
    }]
  });
})();
var NzPaginationDefaultComponent = class _NzPaginationDefaultComponent {
  dir = inject(Directionality).valueSignal;
  template;
  nzSize = "default";
  itemRender = null;
  showTotal = null;
  disabled = false;
  locale;
  showSizeChanger = false;
  showQuickJumper = false;
  total = 0;
  pageIndex = 1;
  pageSize = 10;
  pageSizeOptions = [10, 20, 30, 40];
  pageIndexChange = new EventEmitter();
  pageSizeChange = new EventEmitter();
  ranges = [0, 0];
  listOfPageItem = [];
  constructor() {
    const el = inject(ElementRef).nativeElement;
    const renderer = inject(Renderer2);
    renderer.removeChild(renderer.parentNode(el), el);
  }
  jumpPage(index) {
    this.onPageIndexChange(index);
  }
  jumpDiff(diff) {
    this.jumpPage(this.pageIndex + diff);
  }
  trackByPageItem(_, value) {
    return `${value.type}-${value.index}`;
  }
  onPageIndexChange(index) {
    this.pageIndexChange.next(index);
  }
  onPageSizeChange(size) {
    this.pageSizeChange.next(size);
  }
  getLastIndex(total, pageSize) {
    const maxPage = pageSize > 0 ? Math.ceil(total / pageSize) : 0;
    return maxPage || 1;
  }
  buildIndexes() {
    const lastIndex = this.getLastIndex(this.total, this.pageSize);
    this.listOfPageItem = this.getListOfPageItem(this.pageIndex, lastIndex);
  }
  getListOfPageItem(pageIndex, lastIndex) {
    const concatWithPrevNext = (listOfPage) => {
      const prevItem = {
        type: "prev",
        disabled: pageIndex === 1
      };
      const nextItem = {
        type: "next",
        disabled: pageIndex === lastIndex
      };
      return [prevItem, ...listOfPage, nextItem];
    };
    const generatePage = (start, end) => {
      const list = [];
      for (let i = start; i <= end; i++) {
        list.push({
          index: i,
          type: "page"
        });
      }
      return list;
    };
    if (lastIndex <= 9) {
      return concatWithPrevNext(generatePage(1, lastIndex));
    } else {
      const generateRangeItem = (selected, last) => {
        let listOfRange = [];
        const prevFiveItem = {
          type: "prev_5"
        };
        const nextFiveItem = {
          type: "next_5"
        };
        const firstPageItem = generatePage(1, 1);
        const lastPageItem = generatePage(lastIndex, lastIndex);
        if (selected < 5) {
          const maxLeft = selected === 4 ? 6 : 5;
          listOfRange = [...generatePage(2, maxLeft), nextFiveItem];
        } else if (selected < last - 3) {
          listOfRange = [prevFiveItem, ...generatePage(selected - 2, selected + 2), nextFiveItem];
        } else {
          const minRight = selected === last - 3 ? last - 5 : last - 4;
          listOfRange = [prevFiveItem, ...generatePage(minRight, last - 1)];
        }
        return [...firstPageItem, ...listOfRange, ...lastPageItem];
      };
      return concatWithPrevNext(generateRangeItem(pageIndex, lastIndex));
    }
  }
  ngOnChanges(changes) {
    const {
      pageIndex,
      pageSize,
      total
    } = changes;
    if (pageIndex || pageSize || total) {
      this.ranges = [(this.pageIndex - 1) * this.pageSize + 1, Math.min(this.pageIndex * this.pageSize, this.total)];
      this.buildIndexes();
    }
  }
  static \u0275fac = function NzPaginationDefaultComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzPaginationDefaultComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzPaginationDefaultComponent,
    selectors: [["nz-pagination-default"]],
    viewQuery: function NzPaginationDefaultComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c1, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.template = _t.first);
      }
    },
    hostVars: 2,
    hostBindings: function NzPaginationDefaultComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ant-pagination-rtl", ctx.dir() === "rtl");
      }
    },
    inputs: {
      nzSize: "nzSize",
      itemRender: "itemRender",
      showTotal: "showTotal",
      disabled: "disabled",
      locale: "locale",
      showSizeChanger: "showSizeChanger",
      showQuickJumper: "showQuickJumper",
      total: "total",
      pageIndex: "pageIndex",
      pageSize: "pageSize",
      pageSizeOptions: "pageSizeOptions"
    },
    outputs: {
      pageIndexChange: "pageIndexChange",
      pageSizeChange: "pageSizeChange"
    },
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 2,
    vars: 0,
    consts: [["containerTemplate", ""], [1, "ant-pagination-total-text"], ["nz-pagination-item", "", 3, "locale", "type", "index", "disabled", "itemRender", "active", "direction"], ["nz-pagination-options", "", 3, "total", "locale", "disabled", "nzSize", "showSizeChanger", "showQuickJumper", "pageIndex", "pageSize", "pageSizeOptions"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nz-pagination-item", "", 3, "gotoIndex", "diffIndex", "locale", "type", "index", "disabled", "itemRender", "active", "direction"], ["nz-pagination-options", "", 3, "pageIndexChange", "pageSizeChange", "total", "locale", "disabled", "nzSize", "showSizeChanger", "showQuickJumper", "pageIndex", "pageSize", "pageSizeOptions"]],
    template: function NzPaginationDefaultComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, NzPaginationDefaultComponent_ng_template_0_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
    },
    dependencies: [NgTemplateOutlet, NzPaginationItemComponent, NzPaginationOptionsComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPaginationDefaultComponent, [{
    type: Component,
    args: [{
      selector: "nz-pagination-default",
      encapsulation: ViewEncapsulation.None,
      template: `
    <ng-template #containerTemplate>
      <ul>
        @if (showTotal) {
          <li class="ant-pagination-total-text">
            <ng-template
              [ngTemplateOutlet]="showTotal"
              [ngTemplateOutletContext]="{ $implicit: total, range: ranges }"
            />
          </li>
        }

        @for (page of listOfPageItem; track trackByPageItem($index, page)) {
          <li
            nz-pagination-item
            [locale]="locale"
            [type]="page.type"
            [index]="page.index"
            [disabled]="!!page.disabled"
            [itemRender]="itemRender"
            [active]="pageIndex === page.index"
            (gotoIndex)="jumpPage($event)"
            (diffIndex)="jumpDiff($event)"
            [direction]="dir()"
          ></li>
        }

        @if (showQuickJumper || showSizeChanger) {
          <li
            nz-pagination-options
            [total]="total"
            [locale]="locale"
            [disabled]="disabled"
            [nzSize]="nzSize"
            [showSizeChanger]="showSizeChanger"
            [showQuickJumper]="showQuickJumper"
            [pageIndex]="pageIndex"
            [pageSize]="pageSize"
            [pageSizeOptions]="pageSizeOptions"
            (pageIndexChange)="onPageIndexChange($event)"
            (pageSizeChange)="onPageSizeChange($event)"
          ></li>
        }
      </ul>
    </ng-template>
  `,
      imports: [NgTemplateOutlet, NzPaginationItemComponent, NzPaginationOptionsComponent],
      host: {
        "[class.ant-pagination-rtl]": `dir() === 'rtl'`
      }
    }]
  }], () => [], {
    template: [{
      type: ViewChild,
      args: ["containerTemplate", {
        static: true
      }]
    }],
    nzSize: [{
      type: Input
    }],
    itemRender: [{
      type: Input
    }],
    showTotal: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    showSizeChanger: [{
      type: Input
    }],
    showQuickJumper: [{
      type: Input
    }],
    total: [{
      type: Input
    }],
    pageIndex: [{
      type: Input
    }],
    pageSize: [{
      type: Input
    }],
    pageSizeOptions: [{
      type: Input
    }],
    pageIndexChange: [{
      type: Output
    }],
    pageSizeChange: [{
      type: Output
    }]
  });
})();
var NzPaginationSimpleComponent = class _NzPaginationSimpleComponent {
  dir = inject(Directionality).valueSignal;
  template;
  itemRender = null;
  disabled = false;
  locale;
  total = 0;
  pageIndex = 1;
  pageSize = 10;
  pageIndexChange = new EventEmitter();
  lastIndex = 0;
  isFirstIndex = false;
  isLastIndex = false;
  constructor() {
    const el = inject(ElementRef).nativeElement;
    const renderer = inject(Renderer2);
    renderer.removeChild(renderer.parentNode(el), el);
  }
  jumpToPageViaInput($event) {
    const target = $event.target;
    const index = toNumber(target.value, this.pageIndex);
    this.onPageIndexChange(index);
    target.value = `${this.pageIndex}`;
  }
  prePage() {
    this.onPageIndexChange(this.pageIndex - 1);
  }
  nextPage() {
    this.onPageIndexChange(this.pageIndex + 1);
  }
  onPageIndexChange(index) {
    this.pageIndexChange.next(index);
  }
  updateBindingValue() {
    const maxPage = this.pageSize > 0 ? Math.ceil(this.total / this.pageSize) : 0;
    this.lastIndex = maxPage || 1;
    this.isFirstIndex = this.pageIndex === 1;
    this.isLastIndex = this.pageIndex === this.lastIndex;
  }
  ngOnChanges(changes) {
    const {
      pageIndex,
      total,
      pageSize
    } = changes;
    if (pageIndex || total || pageSize) {
      this.updateBindingValue();
    }
  }
  static \u0275fac = function NzPaginationSimpleComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzPaginationSimpleComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzPaginationSimpleComponent,
    selectors: [["nz-pagination-simple"]],
    viewQuery: function NzPaginationSimpleComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c1, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.template = _t.first);
      }
    },
    hostVars: 2,
    hostBindings: function NzPaginationSimpleComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ant-pagination-rtl", ctx.dir() === "rtl");
      }
    },
    inputs: {
      itemRender: "itemRender",
      disabled: "disabled",
      locale: "locale",
      total: "total",
      pageIndex: "pageIndex",
      pageSize: "pageSize"
    },
    outputs: {
      pageIndexChange: "pageIndexChange"
    },
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 2,
    vars: 0,
    consts: [["containerTemplate", ""], ["nz-pagination-item", "", "type", "prev", 3, "click", "locale", "disabled", "direction", "itemRender"], [1, "ant-pagination-simple-pager"], ["size", "3", 3, "keydown.enter", "disabled", "value"], [1, "ant-pagination-slash"], ["nz-pagination-item", "", "type", "next", 3, "click", "locale", "disabled", "direction", "itemRender"]],
    template: function NzPaginationSimpleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, NzPaginationSimpleComponent_ng_template_0_Template, 8, 14, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
    },
    dependencies: [NzPaginationItemComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPaginationSimpleComponent, [{
    type: Component,
    args: [{
      selector: "nz-pagination-simple",
      encapsulation: ViewEncapsulation.None,
      template: `
    <ng-template #containerTemplate>
      <ul>
        <li
          nz-pagination-item
          [locale]="locale"
          [attr.title]="locale.prev_page"
          [disabled]="isFirstIndex"
          [direction]="dir()"
          (click)="prePage()"
          type="prev"
          [itemRender]="itemRender"
        ></li>
        <li [attr.title]="pageIndex + '/' + lastIndex" class="ant-pagination-simple-pager">
          <input [disabled]="disabled" [value]="pageIndex" (keydown.enter)="jumpToPageViaInput($event)" size="3" />
          <span class="ant-pagination-slash">/</span>
          {{ lastIndex }}
        </li>
        <li
          nz-pagination-item
          [locale]="locale"
          [attr.title]="locale?.next_page"
          [disabled]="isLastIndex"
          [direction]="dir()"
          (click)="nextPage()"
          type="next"
          [itemRender]="itemRender"
        ></li>
      </ul>
    </ng-template>
  `,
      imports: [NzPaginationItemComponent],
      host: {
        "[class.ant-pagination-rtl]": "dir() === 'rtl'"
      }
    }]
  }], () => [], {
    template: [{
      type: ViewChild,
      args: ["containerTemplate", {
        static: true
      }]
    }],
    itemRender: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    total: [{
      type: Input
    }],
    pageIndex: [{
      type: Input
    }],
    pageSize: [{
      type: Input
    }],
    pageIndexChange: [{
      type: Output
    }]
  });
})();
var NZ_CONFIG_MODULE_NAME = "pagination";
var NzPaginationComponent = (() => {
  let _nzSize_decorators;
  let _nzSize_initializers = [];
  let _nzSize_extraInitializers = [];
  let _nzPageSizeOptions_decorators;
  let _nzPageSizeOptions_initializers = [];
  let _nzPageSizeOptions_extraInitializers = [];
  let _nzShowSizeChanger_decorators;
  let _nzShowSizeChanger_initializers = [];
  let _nzShowSizeChanger_extraInitializers = [];
  let _nzShowQuickJumper_decorators;
  let _nzShowQuickJumper_initializers = [];
  let _nzShowQuickJumper_extraInitializers = [];
  let _nzSimple_decorators;
  let _nzSimple_initializers = [];
  let _nzSimple_extraInitializers = [];
  return class NzPaginationComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzSize_decorators = [WithConfig()];
      _nzPageSizeOptions_decorators = [WithConfig()];
      _nzShowSizeChanger_decorators = [WithConfig()];
      _nzShowQuickJumper_decorators = [WithConfig()];
      _nzSimple_decorators = [WithConfig()];
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
      __esDecorate(null, null, _nzPageSizeOptions_decorators, {
        kind: "field",
        name: "nzPageSizeOptions",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzPageSizeOptions" in obj,
          get: (obj) => obj.nzPageSizeOptions,
          set: (obj, value) => {
            obj.nzPageSizeOptions = value;
          }
        },
        metadata: _metadata
      }, _nzPageSizeOptions_initializers, _nzPageSizeOptions_extraInitializers);
      __esDecorate(null, null, _nzShowSizeChanger_decorators, {
        kind: "field",
        name: "nzShowSizeChanger",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzShowSizeChanger" in obj,
          get: (obj) => obj.nzShowSizeChanger,
          set: (obj, value) => {
            obj.nzShowSizeChanger = value;
          }
        },
        metadata: _metadata
      }, _nzShowSizeChanger_initializers, _nzShowSizeChanger_extraInitializers);
      __esDecorate(null, null, _nzShowQuickJumper_decorators, {
        kind: "field",
        name: "nzShowQuickJumper",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzShowQuickJumper" in obj,
          get: (obj) => obj.nzShowQuickJumper,
          set: (obj, value) => {
            obj.nzShowQuickJumper = value;
          }
        },
        metadata: _metadata
      }, _nzShowQuickJumper_initializers, _nzShowQuickJumper_extraInitializers);
      __esDecorate(null, null, _nzSimple_decorators, {
        kind: "field",
        name: "nzSimple",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzSimple" in obj,
          get: (obj) => obj.nzSimple,
          set: (obj, value) => {
            obj.nzSimple = value;
          }
        },
        metadata: _metadata
      }, _nzSimple_initializers, _nzSimple_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    _nzModuleName = NZ_CONFIG_MODULE_NAME;
    i18n = inject(NzI18nService);
    cdr = inject(ChangeDetectorRef);
    breakpointService = inject(NzBreakpointService);
    nzConfigService = inject(NzConfigService);
    dir = inject(Directionality).valueSignal;
    destroyRef = inject(DestroyRef);
    nzPageSizeChange = new EventEmitter();
    nzPageIndexChange = new EventEmitter();
    nzShowTotal = null;
    nzItemRender = null;
    nzSize = __runInitializers(this, _nzSize_initializers, "default");
    nzPageSizeOptions = (__runInitializers(this, _nzSize_extraInitializers), __runInitializers(this, _nzPageSizeOptions_initializers, [10, 20, 30, 40]));
    nzShowSizeChanger = (__runInitializers(this, _nzPageSizeOptions_extraInitializers), __runInitializers(this, _nzShowSizeChanger_initializers, false));
    nzShowQuickJumper = (__runInitializers(this, _nzShowSizeChanger_extraInitializers), __runInitializers(this, _nzShowQuickJumper_initializers, false));
    nzSimple = (__runInitializers(this, _nzShowQuickJumper_extraInitializers), __runInitializers(this, _nzSimple_initializers, false));
    nzDisabled = (__runInitializers(this, _nzSimple_extraInitializers), false);
    nzResponsive = false;
    nzHideOnSinglePage = false;
    nzTotal = 0;
    nzPageIndex = 1;
    nzPageSize = 10;
    nzAlign = input(
      "start",
      ...ngDevMode ? [{
        debugName: "nzAlign"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    showPagination = true;
    locale;
    size = "default";
    total$ = new ReplaySubject(1);
    validatePageIndex(value, lastIndex) {
      if (value > lastIndex) {
        return lastIndex;
      } else if (value < 1) {
        return 1;
      } else {
        return value;
      }
    }
    onPageIndexChange(index) {
      const lastIndex = this.getLastIndex(this.nzTotal, this.nzPageSize);
      const validIndex = this.validatePageIndex(index, lastIndex);
      if (validIndex !== this.nzPageIndex && !this.nzDisabled) {
        this.nzPageIndex = validIndex;
        this.nzPageIndexChange.emit(this.nzPageIndex);
      }
    }
    onPageSizeChange(size) {
      this.nzPageSize = size;
      this.nzPageSizeChange.emit(size);
      const lastIndex = this.getLastIndex(this.nzTotal, this.nzPageSize);
      if (this.nzPageIndex > lastIndex) {
        this.onPageIndexChange(lastIndex);
      }
    }
    onTotalChange(total) {
      const lastIndex = this.getLastIndex(total, this.nzPageSize);
      if (this.nzPageIndex > lastIndex) {
        Promise.resolve().then(() => {
          this.onPageIndexChange(lastIndex);
          this.cdr.markForCheck();
        });
      }
    }
    getLastIndex(total, pageSize) {
      const maxPage = pageSize > 0 ? Math.ceil(total / pageSize) : 0;
      return maxPage || 1;
    }
    ngOnInit() {
      this.i18n.localeChange.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
        this.locale = this.i18n.getLocaleData("Pagination");
        this.cdr.markForCheck();
      });
      this.total$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((total) => {
        this.onTotalChange(total);
      });
      this.breakpointService.subscribe(gridResponsiveMap).pipe(takeUntilDestroyed(this.destroyRef)).subscribe((bp) => {
        if (this.nzResponsive) {
          this.size = bp === NzBreakpointEnum.xs ? "small" : "default";
          this.cdr.markForCheck();
        }
      });
    }
    ngOnChanges(changes) {
      const {
        nzHideOnSinglePage,
        nzTotal,
        nzPageSize,
        nzSize
      } = changes;
      if (nzTotal) {
        this.total$.next(this.nzTotal);
      }
      if (nzHideOnSinglePage || nzTotal || nzPageSize) {
        this.showPagination = this.nzHideOnSinglePage && this.nzTotal > this.nzPageSize || this.nzTotal > 0 && !this.nzHideOnSinglePage;
      }
      if (nzSize) {
        this.size = nzSize.currentValue;
      }
    }
    static \u0275fac = function NzPaginationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzPaginationComponent2)();
    };
    static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: NzPaginationComponent2,
      selectors: [["nz-pagination"]],
      hostAttrs: [1, "ant-pagination"],
      hostVars: 14,
      hostBindings: function NzPaginationComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("ant-pagination-simple", ctx.nzSimple)("ant-pagination-disabled", ctx.nzDisabled)("ant-pagination-mini", !ctx.nzSimple && ctx.size === "small")("ant-pagination-rtl", ctx.dir() === "rtl")("ant-pagination-start", ctx.nzAlign() === "start")("ant-pagination-center", ctx.nzAlign() === "center")("ant-pagination-end", ctx.nzAlign() === "end");
        }
      },
      inputs: {
        nzShowTotal: "nzShowTotal",
        nzItemRender: "nzItemRender",
        nzSize: "nzSize",
        nzPageSizeOptions: "nzPageSizeOptions",
        nzShowSizeChanger: [2, "nzShowSizeChanger", "nzShowSizeChanger", booleanAttribute],
        nzShowQuickJumper: [2, "nzShowQuickJumper", "nzShowQuickJumper", booleanAttribute],
        nzSimple: [2, "nzSimple", "nzSimple", booleanAttribute],
        nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
        nzResponsive: [2, "nzResponsive", "nzResponsive", booleanAttribute],
        nzHideOnSinglePage: [2, "nzHideOnSinglePage", "nzHideOnSinglePage", booleanAttribute],
        nzTotal: [2, "nzTotal", "nzTotal", numberAttribute],
        nzPageIndex: [2, "nzPageIndex", "nzPageIndex", numberAttribute],
        nzPageSize: [2, "nzPageSize", "nzPageSize", numberAttribute],
        nzAlign: [1, "nzAlign"]
      },
      outputs: {
        nzPageSizeChange: "nzPageSizeChange",
        nzPageIndexChange: "nzPageIndexChange"
      },
      exportAs: ["nzPagination"],
      features: [\u0275\u0275NgOnChangesFeature],
      decls: 5,
      vars: 18,
      consts: [["simplePagination", ""], ["defaultPagination", ""], [3, "pageIndexChange", "disabled", "itemRender", "locale", "pageSize", "total", "pageIndex"], [3, "pageIndexChange", "pageSizeChange", "nzSize", "itemRender", "showTotal", "disabled", "locale", "showSizeChanger", "showQuickJumper", "total", "pageIndex", "pageSize", "pageSizeOptions"], [3, "ngTemplateOutlet"]],
      template: function NzPaginationComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275conditionalCreate(0, NzPaginationComponent_Conditional_0_Template, 2, 1);
          \u0275\u0275elementStart(1, "nz-pagination-simple", 2, 0);
          \u0275\u0275listener("pageIndexChange", function NzPaginationComponent_Template_nz_pagination_simple_pageIndexChange_1_listener($event) {
            return ctx.onPageIndexChange($event);
          });
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(3, "nz-pagination-default", 3, 1);
          \u0275\u0275listener("pageIndexChange", function NzPaginationComponent_Template_nz_pagination_default_pageIndexChange_3_listener($event) {
            return ctx.onPageIndexChange($event);
          })("pageSizeChange", function NzPaginationComponent_Template_nz_pagination_default_pageSizeChange_3_listener($event) {
            return ctx.onPageSizeChange($event);
          });
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275conditional(ctx.showPagination ? 0 : -1);
          \u0275\u0275advance();
          \u0275\u0275property("disabled", ctx.nzDisabled)("itemRender", ctx.nzItemRender)("locale", ctx.locale)("pageSize", ctx.nzPageSize)("total", ctx.nzTotal)("pageIndex", ctx.nzPageIndex);
          \u0275\u0275advance(2);
          \u0275\u0275property("nzSize", ctx.size)("itemRender", ctx.nzItemRender)("showTotal", ctx.nzShowTotal)("disabled", ctx.nzDisabled)("locale", ctx.locale)("showSizeChanger", ctx.nzShowSizeChanger)("showQuickJumper", ctx.nzShowQuickJumper)("total", ctx.nzTotal)("pageIndex", ctx.nzPageIndex)("pageSize", ctx.nzPageSize)("pageSizeOptions", ctx.nzPageSizeOptions);
        }
      },
      dependencies: [NgTemplateOutlet, NzPaginationSimpleComponent, NzPaginationDefaultComponent],
      encapsulation: 2
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPaginationComponent, [{
    type: Component,
    args: [{
      selector: "nz-pagination",
      exportAs: "nzPagination",
      encapsulation: ViewEncapsulation.None,
      template: `
    @if (showPagination) {
      @if (nzSimple) {
        <ng-template [ngTemplateOutlet]="simplePagination.template" />
      } @else {
        <ng-template [ngTemplateOutlet]="defaultPagination.template" />
      }
    }

    <nz-pagination-simple
      #simplePagination
      [disabled]="nzDisabled"
      [itemRender]="nzItemRender"
      [locale]="locale"
      [pageSize]="nzPageSize"
      [total]="nzTotal"
      [pageIndex]="nzPageIndex"
      (pageIndexChange)="onPageIndexChange($event)"
    />
    <nz-pagination-default
      #defaultPagination
      [nzSize]="size"
      [itemRender]="nzItemRender"
      [showTotal]="nzShowTotal"
      [disabled]="nzDisabled"
      [locale]="locale"
      [showSizeChanger]="nzShowSizeChanger"
      [showQuickJumper]="nzShowQuickJumper"
      [total]="nzTotal"
      [pageIndex]="nzPageIndex"
      [pageSize]="nzPageSize"
      [pageSizeOptions]="nzPageSizeOptions"
      (pageIndexChange)="onPageIndexChange($event)"
      (pageSizeChange)="onPageSizeChange($event)"
    />
  `,
      host: {
        class: "ant-pagination",
        "[class.ant-pagination-simple]": "nzSimple",
        "[class.ant-pagination-disabled]": "nzDisabled",
        "[class.ant-pagination-mini]": `!nzSimple && size === 'small'`,
        "[class.ant-pagination-rtl]": `dir() === 'rtl'`,
        "[class.ant-pagination-start]": 'nzAlign() === "start"',
        "[class.ant-pagination-center]": 'nzAlign() === "center"',
        "[class.ant-pagination-end]": 'nzAlign() === "end"'
      },
      imports: [NgTemplateOutlet, NzPaginationSimpleComponent, NzPaginationDefaultComponent]
    }]
  }], null, {
    nzPageSizeChange: [{
      type: Output
    }],
    nzPageIndexChange: [{
      type: Output
    }],
    nzShowTotal: [{
      type: Input
    }],
    nzItemRender: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzPageSizeOptions: [{
      type: Input
    }],
    nzShowSizeChanger: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowQuickJumper: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzSimple: [{
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
    nzResponsive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzHideOnSinglePage: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzTotal: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzPageIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzPageSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzAlign: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzAlign",
        required: false
      }]
    }]
  });
})();
var NzPaginationModule = class _NzPaginationModule {
  static \u0275fac = function NzPaginationModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzPaginationModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzPaginationModule,
    imports: [NzPaginationComponent, NzPaginationSimpleComponent, NzPaginationOptionsComponent, NzPaginationItemComponent, NzPaginationDefaultComponent],
    exports: [NzPaginationComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzPaginationComponent, NzPaginationSimpleComponent, NzPaginationOptionsComponent, NzPaginationItemComponent, NzPaginationDefaultComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPaginationModule, [{
    type: NgModule,
    args: [{
      imports: [NzPaginationComponent, NzPaginationSimpleComponent, NzPaginationOptionsComponent, NzPaginationItemComponent, NzPaginationDefaultComponent],
      exports: [NzPaginationComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-table.mjs
var _c02 = ["*"];
var _forTrack02 = ($index, $item) => $item.value;
function NzTableFilterComponent_ng_template_1_Template(rf, ctx) {
}
function NzTableFilterComponent_Conditional_2_For_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 14);
    \u0275\u0275listener("ngModelChange", function NzTableFilterComponent_Conditional_2_For_7_Conditional_1_Template_label_ngModelChange_0_listener() {
      \u0275\u0275restoreView(_r5);
      const f_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.check(f_r4));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const f_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngModel", f_r4.checked);
    \u0275\u0275control();
  }
}
function NzTableFilterComponent_Conditional_2_For_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 15);
    \u0275\u0275listener("ngModelChange", function NzTableFilterComponent_Conditional_2_For_7_Conditional_2_Template_label_ngModelChange_0_listener() {
      \u0275\u0275restoreView(_r6);
      const f_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.check(f_r4));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const f_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngModel", f_r4.checked);
    \u0275\u0275control();
  }
}
function NzTableFilterComponent_Conditional_2_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 11);
    \u0275\u0275listener("click", function NzTableFilterComponent_Conditional_2_For_7_Template_li_click_0_listener() {
      const f_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.check(f_r4));
    });
    \u0275\u0275conditionalCreate(1, NzTableFilterComponent_Conditional_2_For_7_Conditional_1_Template, 1, 1, "label", 12)(2, NzTableFilterComponent_Conditional_2_For_7_Conditional_2_Template, 1, 1, "label", 13);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzSelected", f_r4.checked);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.filterMultiple ? 1 : 2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(f_r4.text);
  }
}
function NzTableFilterComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-filter-trigger", 3);
    \u0275\u0275listener("nzVisibleChange", function NzTableFilterComponent_Conditional_2_Template_nz_filter_trigger_nzVisibleChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onVisibleChange($event));
    });
    \u0275\u0275element(1, "nz-icon", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "nz-dropdown-menu", null, 0)(4, "div", 5)(5, "ul", 6);
    \u0275\u0275repeaterCreate(6, NzTableFilterComponent_Conditional_2_For_7_Template, 5, 3, "li", 7, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 8)(9, "button", 9);
    \u0275\u0275listener("click", function NzTableFilterComponent_Conditional_2_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reset());
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 10);
    \u0275\u0275listener("click", function NzTableFilterComponent_Conditional_2_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirm());
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const filterMenu_r7 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzVisible", ctx_r1.isVisible)("nzActive", ctx_r1.isChecked)("nzDropdownMenu", filterMenu_r7);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.listOfParsedFilter);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.isChecked);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.locale.filterReset, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.locale.filterConfirm);
  }
}
function NzTableFilterComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.extraTemplate);
  }
}
function NzTableSelectionComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 3);
    \u0275\u0275listener("ngModelChange", function NzTableSelectionComponent_Conditional_0_Template_label_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCheckedChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("ant-table-selection-select-all-custom", ctx_r1.showRowSelection);
    \u0275\u0275property("ngModel", ctx_r1.checked)("nzDisabled", ctx_r1.disabled)("nzIndeterminate", ctx_r1.indeterminate);
    \u0275\u0275attribute("aria-label", ctx_r1.label);
    \u0275\u0275control();
  }
}
function NzTableSelectionComponent_Conditional_1_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 8);
    \u0275\u0275listener("click", function NzTableSelectionComponent_Conditional_1_For_7_Template_li_click_0_listener() {
      const selection_r4 = \u0275\u0275restoreView(_r3).$implicit;
      return \u0275\u0275resetView(selection_r4.onSelect());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const selection_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", selection_r4.text, " ");
  }
}
function NzTableSelectionComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "span", 4);
    \u0275\u0275element(2, "nz-icon", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "nz-dropdown-menu", null, 0)(5, "ul", 6);
    \u0275\u0275repeaterCreate(6, NzTableSelectionComponent_Conditional_1_For_7_Template, 2, 1, "li", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const selectionMenu_r5 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("nzDropdownMenu", selectionMenu_r5);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.listOfSelections);
  }
}
function NzTableSortersComponent_ng_template_1_Template(rf, ctx) {
}
function NzTableSortersComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.sortOrder === "ascend");
  }
}
function NzTableSortersComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r0.sortOrder === "descend");
  }
}
function NzTdAddOnComponent_Conditional_0_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzTdAddOnComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzTdAddOnComponent_Conditional_0_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.nzExpandIcon);
  }
}
function NzTdAddOnComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4);
    \u0275\u0275listener("expandChange", function NzTdAddOnComponent_Conditional_0_Conditional_2_Template_button_expandChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onExpandChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("expand", ctx_r0.nzExpand)("spaceMode", !ctx_r0.nzShowExpand);
  }
}
function NzTdAddOnComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-row-indent", 1);
    \u0275\u0275conditionalCreate(1, NzTdAddOnComponent_Conditional_0_Conditional_1_Template, 1, 1, null, 2)(2, NzTdAddOnComponent_Conditional_0_Conditional_2_Template, 1, 2, "button", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("indentSize", ctx_r0.nzIndentSize);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.nzExpandIcon ? 1 : 2);
  }
}
function NzTdAddOnComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 5);
    \u0275\u0275listener("ngModelChange", function NzTdAddOnComponent_Conditional_1_Template_label_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onCheckedChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("nzDisabled", ctx_r0.nzDisabled)("ngModel", ctx_r0.nzChecked)("nzIndeterminate", ctx_r0.nzIndeterminate);
    \u0275\u0275attribute("aria-label", ctx_r0.nzLabel);
    \u0275\u0275control();
  }
}
var _c12 = [[["", "nz-th-extra", ""]], [["nz-filter-trigger"]], "*"];
var _c22 = ["[nz-th-extra]", "nz-filter-trigger", "*"];
function NzThAddOnComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-table-filter", 6);
    \u0275\u0275listener("filterChange", function NzThAddOnComponent_Conditional_0_Template_nz_table_filter_filterChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFilterValueChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const notFilterTemplate_r3 = \u0275\u0275reference(3);
    const extraTemplate_r4 = \u0275\u0275reference(5);
    \u0275\u0275property("contentTemplate", notFilterTemplate_r3)("extraTemplate", extraTemplate_r4)("customFilter", ctx_r1.nzCustomFilter)("filterMultiple", ctx_r1.nzFilterMultiple)("listOfFilter", ctx_r1.nzFilters);
  }
}
function NzThAddOnComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 5);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const notFilterTemplate_r3 = \u0275\u0275reference(3);
    \u0275\u0275property("ngTemplateOutlet", notFilterTemplate_r3);
  }
}
function NzThAddOnComponent_ng_template_2_ng_template_0_Template(rf, ctx) {
}
function NzThAddOnComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzThAddOnComponent_ng_template_2_ng_template_0_Template, 0, 0, "ng-template", 5);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const sortTemplate_r5 = \u0275\u0275reference(7);
    const contentTemplate_r6 = \u0275\u0275reference(9);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.nzShowSort ? sortTemplate_r5 : contentTemplate_r6);
  }
}
function NzThAddOnComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
    \u0275\u0275projection(1, 1);
  }
}
function NzThAddOnComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-table-sorters", 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const contentTemplate_r6 = \u0275\u0275reference(9);
    \u0275\u0275property("sortOrder", ctx_r1.sortOrder)("sortDirections", ctx_r1.sortDirections)("contentTemplate", contentTemplate_r6);
  }
}
function NzThAddOnComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 2);
  }
}
function NzTableContentComponent_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "col");
  }
  if (rf & 2) {
    const width_r1 = ctx.$implicit;
    \u0275\u0275styleProp("width", width_r1)("min-width", width_r1);
  }
}
function NzTableContentComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "colgroup");
    \u0275\u0275repeaterCreate(1, NzTableContentComponent_Conditional_0_For_2_Template, 1, 4, "col", 3, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.listOfColWidth);
  }
}
function NzTableContentComponent_Conditional_1_ng_template_1_Template(rf, ctx) {
}
function NzTableContentComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "thead", 0);
    \u0275\u0275template(1, NzTableContentComponent_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.theadTemplate);
  }
}
function NzTableContentComponent_ng_template_2_Template(rf, ctx) {
}
function NzTableContentComponent_Conditional_4_ng_template_1_Template(rf, ctx) {
}
function NzTableContentComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tfoot", 2);
    \u0275\u0275template(1, NzTableContentComponent_Conditional_4_ng_template_1_Template, 0, 0, "ng-template", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.tfootTemplate);
  }
}
var _c3 = ["tdElement"];
function NzTableFixedRowComponent_Conditional_2_ng_template_2_Template(rf, ctx) {
}
function NzTableFixedRowComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275template(2, NzTableFixedRowComponent_Conditional_2_ng_template_2_Template, 0, 0, "ng-template", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const contentTemplate_r2 = \u0275\u0275reference(6);
    \u0275\u0275styleProp("width", \u0275\u0275pipeBind1(1, 3, ctx_r0.hostWidth$), "px");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", contentTemplate_r2);
  }
}
function NzTableFixedRowComponent_Conditional_4_ng_template_0_Template(rf, ctx) {
}
function NzTableFixedRowComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzTableFixedRowComponent_Conditional_4_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const contentTemplate_r2 = \u0275\u0275reference(6);
    \u0275\u0275property("ngTemplateOutlet", contentTemplate_r2);
  }
}
function NzTableFixedRowComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function NzTrMeasureComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "td", 1, 0);
  }
}
function NzTbodyComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 2);
    \u0275\u0275listener("listOfAutoWidth", function NzTbodyComponent_Conditional_0_Conditional_0_Template_tr_listOfAutoWidth_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onListOfAutoWidthChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const listOfMeasureColumn_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("listOfMeasureColumn", listOfMeasureColumn_r3);
  }
}
function NzTbodyComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NzTbodyComponent_Conditional_0_Conditional_0_Template, 1, 1, "tr", 1);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.isInsideTable && ctx.length ? 0 : -1);
  }
}
function NzTbodyComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 0);
    \u0275\u0275element(1, "nz-embed-empty", 3);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("specificContent", \u0275\u0275pipeBind1(2, 1, ctx_r1.noResult$));
  }
}
var _c4 = ["tableHeaderElement"];
var _c5 = ["tableBodyElement"];
var _c6 = ["tableFootElement"];
var _c7 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function NzTableInnerScrollComponent_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9, 1);
    \u0275\u0275element(2, "table", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(ctx_r0.bodyStyleMap);
    \u0275\u0275advance(2);
    \u0275\u0275property("scrollX", ctx_r0.scrollX)("listOfColWidth", ctx_r0.listOfColWidth)("contentTemplate", ctx_r0.contentTemplate);
  }
}
function NzTableInnerScrollComponent_Conditional_0_Conditional_4_ng_container_4_ng_template_1_Template(rf, ctx) {
}
function NzTableInnerScrollComponent_Conditional_0_Conditional_4_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, NzTableInnerScrollComponent_Conditional_0_Conditional_4_ng_container_4_ng_template_1_Template, 0, 0, "ng-template", 14);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.virtualTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c7, item_r2, i_r3));
  }
}
function NzTableInnerScrollComponent_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "cdk-virtual-scroll-viewport", 11, 1)(2, "table", 12)(3, "tbody");
    \u0275\u0275template(4, NzTableInnerScrollComponent_Conditional_0_Conditional_4_ng_container_4_Template, 2, 5, "ng-container", 13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("height", ctx_r0.data.length ? ctx_r0.scrollY : ctx_r0.noDataVirtualHeight);
    \u0275\u0275property("itemSize", ctx_r0.virtualItemSize)("maxBufferPx", ctx_r0.virtualMaxBufferPx)("minBufferPx", ctx_r0.virtualMinBufferPx);
    \u0275\u0275advance(2);
    \u0275\u0275property("scrollX", ctx_r0.scrollX)("listOfColWidth", ctx_r0.listOfColWidth);
    \u0275\u0275advance(2);
    \u0275\u0275property("cdkVirtualForOf", ctx_r0.data)("cdkVirtualForTrackBy", ctx_r0.virtualForTrackBy);
  }
}
function NzTableInnerScrollComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15, 2);
    \u0275\u0275element(2, "table", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(ctx_r0.headerStyleMap);
    \u0275\u0275advance(2);
    \u0275\u0275property("scrollX", ctx_r0.scrollX)("listOfColWidth", ctx_r0.listOfColWidth)("tfootTemplate", ctx_r0.tfootTemplate);
  }
}
function NzTableInnerScrollComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4, 0);
    \u0275\u0275element(2, "table", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, NzTableInnerScrollComponent_Conditional_0_Conditional_3_Template, 3, 5, "div", 6)(4, NzTableInnerScrollComponent_Conditional_0_Conditional_4_Template, 5, 9, "cdk-virtual-scroll-viewport", 7);
    \u0275\u0275conditionalCreate(5, NzTableInnerScrollComponent_Conditional_0_Conditional_5_Template, 3, 5, "div", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r0.headerStyleMap);
    \u0275\u0275advance(2);
    \u0275\u0275property("scrollX", ctx_r0.scrollX)("listOfColWidth", ctx_r0.listOfColWidth)("theadTemplate", ctx_r0.theadTemplate)("tfootTemplate", ctx_r0.tfootFixed === "top" ? ctx_r0.tfootTemplate : null);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.virtualTemplate ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.tfootFixed === "bottom" ? 5 : -1);
  }
}
function NzTableInnerScrollComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17, 1);
    \u0275\u0275element(2, "table", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r0.bodyStyleMap);
    \u0275\u0275advance(2);
    \u0275\u0275property("scrollX", ctx_r0.scrollX)("listOfColWidth", ctx_r0.listOfColWidth)("theadTemplate", ctx_r0.theadTemplate)("contentTemplate", ctx_r0.contentTemplate)("tfootTemplate", ctx_r0.tfootTemplate);
  }
}
function NzTableTitleFooterComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.title);
  }
}
function NzTableTitleFooterComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.footer);
  }
}
function NzTableComponent_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzTableComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzTableComponent_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const paginationTemplate_r1 = \u0275\u0275reference(10);
    \u0275\u0275property("ngTemplateOutlet", paginationTemplate_r1);
  }
}
function NzTableComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-table-title-footer", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("title", ctx_r1.nzTitle);
  }
}
function NzTableComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-table-inner-scroll", 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const tableMainElement_r3 = \u0275\u0275reference(3);
    const contentTemplate_r4 = \u0275\u0275reference(12);
    \u0275\u0275property("data", ctx_r1.data)("scrollX", ctx_r1.scrollX)("scrollY", ctx_r1.scrollY)("contentTemplate", contentTemplate_r4)("listOfColWidth", ctx_r1.listOfAutoColWidth)("theadTemplate", ctx_r1.theadTemplate)("tfootTemplate", ctx_r1.tfootTemplate)("tfootFixed", ctx_r1.tfootFixed)("verticalScrollBarWidth", ctx_r1.verticalScrollBarWidth)("virtualTemplate", ctx_r1.nzVirtualScrollDirective ? ctx_r1.nzVirtualScrollDirective.templateRef : null)("virtualItemSize", ctx_r1.nzVirtualItemSize)("virtualMaxBufferPx", ctx_r1.nzVirtualMaxBufferPx)("virtualMinBufferPx", ctx_r1.nzVirtualMinBufferPx)("tableMainElement", tableMainElement_r3)("virtualForTrackBy", ctx_r1.nzVirtualForTrackBy)("noDataVirtualHeight", ctx_r1.noDataVirtualHeight);
  }
}
function NzTableComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-table-inner-default", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const contentTemplate_r4 = \u0275\u0275reference(12);
    \u0275\u0275property("tableLayout", ctx_r1.nzTableLayout)("listOfColWidth", ctx_r1.listOfManualColWidth)("theadTemplate", ctx_r1.theadTemplate)("contentTemplate", contentTemplate_r4)("tfootTemplate", ctx_r1.tfootTemplate);
  }
}
function NzTableComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-table-title-footer", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("footer", ctx_r1.nzFooter);
  }
}
function NzTableComponent_Conditional_8_ng_template_0_Template(rf, ctx) {
}
function NzTableComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzTableComponent_Conditional_8_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const paginationTemplate_r1 = \u0275\u0275reference(10);
    \u0275\u0275property("ngTemplateOutlet", paginationTemplate_r1);
  }
}
function NzTableComponent_ng_template_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-pagination", 11);
    \u0275\u0275listener("nzPageSizeChange", function NzTableComponent_ng_template_9_Conditional_0_Template_nz_pagination_nzPageSizeChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageSizeChange($event));
    })("nzPageIndexChange", function NzTableComponent_ng_template_9_Conditional_0_Template_nz_pagination_nzPageIndexChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPageIndexChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("hidden", !ctx_r1.showPagination)("nzShowSizeChanger", ctx_r1.nzShowSizeChanger)("nzPageSizeOptions", ctx_r1.nzPageSizeOptions)("nzItemRender", ctx_r1.nzItemRender)("nzShowQuickJumper", ctx_r1.nzShowQuickJumper)("nzHideOnSinglePage", ctx_r1.nzHideOnSinglePage)("nzShowTotal", ctx_r1.nzShowTotal)("nzSize", ctx_r1.nzPaginationType === "small" ? "small" : ctx_r1.nzSize === "default" ? "default" : "small")("nzPageSize", ctx_r1.nzPageSize)("nzTotal", ctx_r1.nzTotal)("nzSimple", ctx_r1.nzSimple)("nzPageIndex", ctx_r1.nzPageIndex);
  }
}
function NzTableComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NzTableComponent_ng_template_9_Conditional_0_Template, 1, 12, "nz-pagination", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.nzShowPagination && ctx_r1.data.length ? 0 : -1);
  }
}
function NzTableComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
var _c8 = ["contentTemplate"];
function NzTfootSummaryComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function NzTfootSummaryComponent_Conditional_2_ng_template_0_Template(rf, ctx) {
}
function NzTfootSummaryComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzTfootSummaryComponent_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 1);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const contentTemplate_r1 = \u0275\u0275reference(1);
    \u0275\u0275property("ngTemplateOutlet", contentTemplate_r1);
  }
}
function NzTheadComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function NzTheadComponent_Conditional_2_ng_template_0_Template(rf, ctx) {
}
function NzTheadComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzTheadComponent_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 1);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const contentTemplate_r1 = \u0275\u0275reference(1);
    \u0275\u0275property("ngTemplateOutlet", contentTemplate_r1);
  }
}
var NZ_CONFIG_MODULE_NAME$2 = "filterTrigger";
var NzFilterTriggerComponent = (() => {
  let _nzBackdrop_decorators;
  let _nzBackdrop_initializers = [];
  let _nzBackdrop_extraInitializers = [];
  return class NzFilterTriggerComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzBackdrop_decorators = [WithConfig()];
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
    _nzModuleName = NZ_CONFIG_MODULE_NAME$2;
    nzConfigService = inject(NzConfigService);
    cdr = inject(ChangeDetectorRef);
    destroyRef = inject(DestroyRef);
    nzActive = false;
    nzDropdownMenu;
    nzVisible = false;
    nzBackdrop = __runInitializers(this, _nzBackdrop_initializers, false);
    nzVisibleChange = (__runInitializers(this, _nzBackdrop_extraInitializers), new EventEmitter());
    nzDropdown;
    onVisibleChange(visible) {
      this.nzVisible = visible;
      this.nzVisibleChange.next(visible);
    }
    hide() {
      this.nzVisible = false;
      this.cdr.markForCheck();
    }
    show() {
      this.nzVisible = true;
      this.cdr.markForCheck();
    }
    ngOnInit() {
      fromEventOutsideAngular(this.nzDropdown.nativeElement, "click").pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => event.stopPropagation());
    }
    static \u0275fac = function NzFilterTriggerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzFilterTriggerComponent2)();
    };
    static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: NzFilterTriggerComponent2,
      selectors: [["nz-filter-trigger"]],
      viewQuery: function NzFilterTriggerComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(NzDropdownDirective, 7, ElementRef);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzDropdown = _t.first);
        }
      },
      inputs: {
        nzActive: "nzActive",
        nzDropdownMenu: "nzDropdownMenu",
        nzVisible: "nzVisible",
        nzBackdrop: [2, "nzBackdrop", "nzBackdrop", booleanAttribute]
      },
      outputs: {
        nzVisibleChange: "nzVisibleChange"
      },
      exportAs: ["nzFilterTrigger"],
      ngContentSelectors: _c02,
      decls: 2,
      vars: 8,
      consts: [["nz-dropdown", "", "nzTrigger", "click", "nzPlacement", "bottomRight", 1, "ant-table-filter-trigger", 3, "nzVisibleChange", "nzBackdrop", "nzClickHide", "nzDropdownMenu", "nzVisible"]],
      template: function NzFilterTriggerComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275elementStart(0, "span", 0);
          \u0275\u0275listener("nzVisibleChange", function NzFilterTriggerComponent_Template_span_nzVisibleChange_0_listener($event) {
            return ctx.onVisibleChange($event);
          });
          \u0275\u0275projection(1);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275classProp("active", ctx.nzActive)("ant-table-filter-open", ctx.nzVisible);
          \u0275\u0275property("nzBackdrop", ctx.nzBackdrop)("nzClickHide", false)("nzDropdownMenu", ctx.nzDropdownMenu)("nzVisible", ctx.nzVisible);
        }
      },
      dependencies: [NzDropdownModule, NzDropdownDirective],
      encapsulation: 2
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFilterTriggerComponent, [{
    type: Component,
    args: [{
      selector: "nz-filter-trigger",
      exportAs: `nzFilterTrigger`,
      encapsulation: ViewEncapsulation.None,
      template: `
    <span
      nz-dropdown
      class="ant-table-filter-trigger"
      nzTrigger="click"
      nzPlacement="bottomRight"
      [nzBackdrop]="nzBackdrop"
      [nzClickHide]="false"
      [nzDropdownMenu]="nzDropdownMenu"
      [class.active]="nzActive"
      [class.ant-table-filter-open]="nzVisible"
      [nzVisible]="nzVisible"
      (nzVisibleChange)="onVisibleChange($event)"
    >
      <ng-content />
    </span>
  `,
      imports: [NzDropdownModule]
    }]
  }], null, {
    nzActive: [{
      type: Input
    }],
    nzDropdownMenu: [{
      type: Input
    }],
    nzVisible: [{
      type: Input
    }],
    nzBackdrop: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzVisibleChange: [{
      type: Output
    }],
    nzDropdown: [{
      type: ViewChild,
      args: [NzDropdownDirective, {
        static: true,
        read: ElementRef
      }]
    }]
  });
})();
var NzTableFilterComponent = class _NzTableFilterComponent {
  cdr = inject(ChangeDetectorRef);
  i18n = inject(NzI18nService);
  destroyRef = inject(DestroyRef);
  contentTemplate = null;
  customFilter = false;
  extraTemplate = null;
  filterMultiple = true;
  listOfFilter = [];
  filterChange = new EventEmitter();
  locale;
  isChecked = false;
  isVisible = false;
  listOfParsedFilter = [];
  listOfChecked = [];
  check(filter2) {
    if (this.filterMultiple) {
      this.listOfParsedFilter = this.listOfParsedFilter.map((item) => {
        if (item === filter2) {
          return __spreadProps(__spreadValues({}, item), {
            checked: !filter2.checked
          });
        } else {
          return item;
        }
      });
      filter2.checked = !filter2.checked;
    } else {
      this.listOfParsedFilter = this.listOfParsedFilter.map((item) => __spreadProps(__spreadValues({}, item), {
        checked: item === filter2
      }));
    }
    this.isChecked = this.getCheckedStatus(this.listOfParsedFilter);
  }
  confirm() {
    this.isVisible = false;
    this.emitFilterData();
  }
  reset() {
    this.isVisible = false;
    this.listOfParsedFilter = this.parseListOfFilter(this.listOfFilter, true);
    this.isChecked = this.getCheckedStatus(this.listOfParsedFilter);
    this.emitFilterData();
  }
  onVisibleChange(value) {
    this.isVisible = value;
    if (!value) {
      this.emitFilterData();
    } else {
      this.listOfChecked = this.listOfParsedFilter.filter((item) => item.checked).map((item) => item.value);
    }
  }
  emitFilterData() {
    const listOfChecked = this.listOfParsedFilter.filter((item) => item.checked).map((item) => item.value);
    if (!arraysEqual(this.listOfChecked, listOfChecked)) {
      if (this.filterMultiple) {
        this.filterChange.emit(listOfChecked);
      } else {
        this.filterChange.emit(listOfChecked.length > 0 ? listOfChecked[0] : null);
      }
    }
  }
  parseListOfFilter(listOfFilter, reset) {
    return listOfFilter.map((item) => {
      const checked = reset ? false : !!item.byDefault;
      return {
        text: item.text,
        value: item.value,
        checked
      };
    });
  }
  getCheckedStatus(listOfParsedFilter) {
    return listOfParsedFilter.some((item) => item.checked);
  }
  ngOnInit() {
    this.i18n.localeChange.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.locale = this.i18n.getLocaleData("Table");
      this.cdr.markForCheck();
    });
  }
  ngOnChanges(changes) {
    const {
      listOfFilter
    } = changes;
    if (listOfFilter && this.listOfFilter && this.listOfFilter.length) {
      this.listOfParsedFilter = this.parseListOfFilter(this.listOfFilter);
      this.isChecked = this.getCheckedStatus(this.listOfParsedFilter);
    }
  }
  static \u0275fac = function NzTableFilterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTableFilterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzTableFilterComponent,
    selectors: [["nz-table-filter"]],
    hostAttrs: [1, "ant-table-filter-column"],
    inputs: {
      contentTemplate: "contentTemplate",
      customFilter: "customFilter",
      extraTemplate: "extraTemplate",
      filterMultiple: "filterMultiple",
      listOfFilter: "listOfFilter"
    },
    outputs: {
      filterChange: "filterChange"
    },
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 4,
    vars: 2,
    consts: [["filterMenu", "nzDropdownMenu"], [1, "ant-table-column-title"], [3, "ngTemplateOutlet"], [3, "nzVisibleChange", "nzVisible", "nzActive", "nzDropdownMenu"], ["nzType", "filter", "nzTheme", "fill"], [1, "ant-table-filter-dropdown"], ["nz-menu", ""], ["nz-menu-item", "", 3, "nzSelected"], [1, "ant-table-filter-dropdown-btns"], ["nz-button", "", "nzType", "link", "nzSize", "small", 3, "click", "disabled"], ["nz-button", "", "nzType", "primary", "nzSize", "small", 3, "click"], ["nz-menu-item", "", 3, "click", "nzSelected"], ["nz-radio", "", 3, "ngModel"], ["nz-checkbox", "", 3, "ngModel"], ["nz-radio", "", 3, "ngModelChange", "ngModel"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel"]],
    template: function NzTableFilterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "span", 1);
        \u0275\u0275template(1, NzTableFilterComponent_ng_template_1_Template, 0, 0, "ng-template", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(2, NzTableFilterComponent_Conditional_2_Template, 13, 6)(3, NzTableFilterComponent_Conditional_3_Template, 1, 1, "ng-container", 2);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.contentTemplate);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.customFilter ? 2 : 3);
      }
    },
    dependencies: [NgTemplateOutlet, NzFilterTriggerComponent, NzIconModule, NzIconDirective, NzDropdownModule, NzMenuDirective, NzMenuItemComponent, NzDropdownMenuComponent, NzRadioComponent, NzCheckboxModule, NzCheckboxComponent, FormsModule, NgControlStatus, NgModel, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableFilterComponent, [{
    type: Component,
    args: [{
      selector: "nz-table-filter",
      encapsulation: ViewEncapsulation.None,
      template: `
    <span class="ant-table-column-title">
      <ng-template [ngTemplateOutlet]="contentTemplate" />
    </span>
    @if (!customFilter) {
      <nz-filter-trigger
        [nzVisible]="isVisible"
        [nzActive]="isChecked"
        [nzDropdownMenu]="filterMenu"
        (nzVisibleChange)="onVisibleChange($event)"
      >
        <nz-icon nzType="filter" nzTheme="fill" />
      </nz-filter-trigger>
      <nz-dropdown-menu #filterMenu="nzDropdownMenu">
        <div class="ant-table-filter-dropdown">
          <ul nz-menu>
            @for (f of listOfParsedFilter; track f.value) {
              <li nz-menu-item [nzSelected]="f.checked" (click)="check(f)">
                @if (!filterMultiple) {
                  <label nz-radio [ngModel]="f.checked" (ngModelChange)="check(f)"></label>
                } @else {
                  <label nz-checkbox [ngModel]="f.checked" (ngModelChange)="check(f)"></label>
                }
                <span>{{ f.text }}</span>
              </li>
            }
          </ul>
          <div class="ant-table-filter-dropdown-btns">
            <button nz-button nzType="link" nzSize="small" (click)="reset()" [disabled]="!isChecked">
              {{ locale.filterReset }}
            </button>
            <button nz-button nzType="primary" nzSize="small" (click)="confirm()">{{ locale.filterConfirm }}</button>
          </div>
        </div>
      </nz-dropdown-menu>
    } @else {
      <ng-container [ngTemplateOutlet]="extraTemplate" />
    }
  `,
      host: {
        class: "ant-table-filter-column"
      },
      imports: [NgTemplateOutlet, NzFilterTriggerComponent, NzIconModule, NzDropdownModule, NzRadioComponent, NzCheckboxModule, FormsModule, NzButtonModule]
    }]
  }], null, {
    contentTemplate: [{
      type: Input
    }],
    customFilter: [{
      type: Input
    }],
    extraTemplate: [{
      type: Input
    }],
    filterMultiple: [{
      type: Input
    }],
    listOfFilter: [{
      type: Input
    }],
    filterChange: [{
      type: Output
    }]
  });
})();
var NzRowExpandButtonDirective = class _NzRowExpandButtonDirective {
  expand = false;
  spaceMode = false;
  expandChange = new EventEmitter();
  onHostClick() {
    if (!this.spaceMode) {
      this.expand = !this.expand;
      this.expandChange.next(this.expand);
    }
  }
  static \u0275fac = function NzRowExpandButtonDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzRowExpandButtonDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzRowExpandButtonDirective,
    selectors: [["button", "nz-row-expand-button", ""]],
    hostAttrs: [1, "ant-table-row-expand-icon"],
    hostVars: 7,
    hostBindings: function NzRowExpandButtonDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function NzRowExpandButtonDirective_click_HostBindingHandler() {
          return ctx.onHostClick();
        });
      }
      if (rf & 2) {
        \u0275\u0275domProperty("type", "button");
        \u0275\u0275classProp("ant-table-row-expand-icon-expanded", !ctx.spaceMode && ctx.expand === true)("ant-table-row-expand-icon-collapsed", !ctx.spaceMode && ctx.expand === false)("ant-table-row-expand-icon-spaced", ctx.spaceMode);
      }
    },
    inputs: {
      expand: "expand",
      spaceMode: "spaceMode"
    },
    outputs: {
      expandChange: "expandChange"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzRowExpandButtonDirective, [{
    type: Directive,
    args: [{
      selector: "button[nz-row-expand-button]",
      host: {
        class: "ant-table-row-expand-icon",
        "[type]": `'button'`,
        "[class.ant-table-row-expand-icon-expanded]": `!spaceMode && expand === true`,
        "[class.ant-table-row-expand-icon-collapsed]": `!spaceMode && expand === false`,
        "[class.ant-table-row-expand-icon-spaced]": "spaceMode",
        "(click)": "onHostClick()"
      }
    }]
  }], null, {
    expand: [{
      type: Input
    }],
    spaceMode: [{
      type: Input
    }],
    expandChange: [{
      type: Output
    }]
  });
})();
var NzRowIndentDirective = class _NzRowIndentDirective {
  indentSize = 0;
  static \u0275fac = function NzRowIndentDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzRowIndentDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzRowIndentDirective,
    selectors: [["nz-row-indent"]],
    hostAttrs: [1, "ant-table-row-indent"],
    hostVars: 2,
    hostBindings: function NzRowIndentDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleProp("padding-left", ctx.indentSize, "px");
      }
    },
    inputs: {
      indentSize: "indentSize"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzRowIndentDirective, [{
    type: Directive,
    args: [{
      selector: "nz-row-indent",
      host: {
        class: "ant-table-row-indent",
        "[style.padding-left.px]": "indentSize"
      }
    }]
  }], null, {
    indentSize: [{
      type: Input
    }]
  });
})();
var NzTableSelectionComponent = class _NzTableSelectionComponent {
  listOfSelections = [];
  checked = false;
  disabled = false;
  indeterminate = false;
  label = null;
  showCheckbox = false;
  showRowSelection = false;
  checkedChange = new EventEmitter();
  onCheckedChange(checked) {
    this.checked = checked;
    this.checkedChange.emit(checked);
  }
  static \u0275fac = function NzTableSelectionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTableSelectionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzTableSelectionComponent,
    selectors: [["nz-table-selection"]],
    hostAttrs: [1, "ant-table-selection"],
    inputs: {
      listOfSelections: "listOfSelections",
      checked: "checked",
      disabled: "disabled",
      indeterminate: "indeterminate",
      label: "label",
      showCheckbox: "showCheckbox",
      showRowSelection: "showRowSelection"
    },
    outputs: {
      checkedChange: "checkedChange"
    },
    decls: 2,
    vars: 2,
    consts: [["selectionMenu", "nzDropdownMenu"], ["nz-checkbox", "", 3, "ant-table-selection-select-all-custom", "ngModel", "nzDisabled", "nzIndeterminate"], [1, "ant-table-selection-extra"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel", "nzDisabled", "nzIndeterminate"], ["nz-dropdown", "", "nzPlacement", "bottomLeft", 1, "ant-table-selection-down", 3, "nzDropdownMenu"], ["nzType", "down"], ["nz-menu", "", 1, "ant-table-selection-menu"], ["nz-menu-item", ""], ["nz-menu-item", "", 3, "click"]],
    template: function NzTableSelectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, NzTableSelectionComponent_Conditional_0_Template, 1, 6, "label", 1);
        \u0275\u0275conditionalCreate(1, NzTableSelectionComponent_Conditional_1_Template, 8, 1, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.showCheckbox ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showRowSelection ? 1 : -1);
      }
    },
    dependencies: [FormsModule, NgControlStatus, NgModel, NzCheckboxModule, NzCheckboxComponent, NzDropdownModule, NzMenuDirective, NzMenuItemComponent, NzDropdownDirective, NzDropdownMenuComponent, NzIconModule, NzIconDirective],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableSelectionComponent, [{
    type: Component,
    args: [{
      selector: "nz-table-selection",
      encapsulation: ViewEncapsulation.None,
      template: `
    @if (showCheckbox) {
      <label
        nz-checkbox
        [class.ant-table-selection-select-all-custom]="showRowSelection"
        [ngModel]="checked"
        [nzDisabled]="disabled"
        [nzIndeterminate]="indeterminate"
        [attr.aria-label]="label"
        (ngModelChange)="onCheckedChange($event)"
      ></label>
    }
    @if (showRowSelection) {
      <div class="ant-table-selection-extra">
        <span nz-dropdown class="ant-table-selection-down" nzPlacement="bottomLeft" [nzDropdownMenu]="selectionMenu">
          <nz-icon nzType="down" />
        </span>
        <nz-dropdown-menu #selectionMenu="nzDropdownMenu">
          <ul nz-menu class="ant-table-selection-menu">
            @for (selection of listOfSelections; track selection) {
              <li nz-menu-item (click)="selection.onSelect()">
                {{ selection.text }}
              </li>
            }
          </ul>
        </nz-dropdown-menu>
      </div>
    }
  `,
      host: {
        class: "ant-table-selection"
      },
      imports: [FormsModule, NzCheckboxModule, NzDropdownModule, NzIconModule]
    }]
  }], null, {
    listOfSelections: [{
      type: Input
    }],
    checked: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    indeterminate: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    showCheckbox: [{
      type: Input
    }],
    showRowSelection: [{
      type: Input
    }],
    checkedChange: [{
      type: Output
    }]
  });
})();
var NzTableSortersComponent = class _NzTableSortersComponent {
  sortDirections = ["ascend", "descend", null];
  sortOrder = null;
  contentTemplate = null;
  isUp = false;
  isDown = false;
  ngOnChanges(changes) {
    const {
      sortDirections
    } = changes;
    if (sortDirections) {
      this.isUp = this.sortDirections.indexOf("ascend") !== -1;
      this.isDown = this.sortDirections.indexOf("descend") !== -1;
    }
  }
  static \u0275fac = function NzTableSortersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTableSortersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzTableSortersComponent,
    selectors: [["nz-table-sorters"]],
    hostAttrs: [1, "ant-table-column-sorters"],
    inputs: {
      sortDirections: "sortDirections",
      sortOrder: "sortOrder",
      contentTemplate: "contentTemplate"
    },
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 6,
    vars: 5,
    consts: [[1, "ant-table-column-title"], [3, "ngTemplateOutlet"], [1, "ant-table-column-sorter"], [1, "ant-table-column-sorter-inner"], ["nzType", "caret-up", 1, "ant-table-column-sorter-up", 3, "active"], ["nzType", "caret-down", 1, "ant-table-column-sorter-down", 3, "active"], ["nzType", "caret-up", 1, "ant-table-column-sorter-up"], ["nzType", "caret-down", 1, "ant-table-column-sorter-down"]],
    template: function NzTableSortersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "span", 0);
        \u0275\u0275template(1, NzTableSortersComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "span", 2)(3, "span", 3);
        \u0275\u0275conditionalCreate(4, NzTableSortersComponent_Conditional_4_Template, 1, 2, "nz-icon", 4);
        \u0275\u0275conditionalCreate(5, NzTableSortersComponent_Conditional_5_Template, 1, 2, "nz-icon", 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.contentTemplate);
        \u0275\u0275advance();
        \u0275\u0275classProp("ant-table-column-sorter-full", ctx.isDown && ctx.isUp);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.isUp ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isDown ? 5 : -1);
      }
    },
    dependencies: [NzIconModule, NzIconDirective, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableSortersComponent, [{
    type: Component,
    args: [{
      selector: "nz-table-sorters",
      encapsulation: ViewEncapsulation.None,
      template: `
    <span class="ant-table-column-title"><ng-template [ngTemplateOutlet]="contentTemplate" /></span>
    <span class="ant-table-column-sorter" [class.ant-table-column-sorter-full]="isDown && isUp">
      <span class="ant-table-column-sorter-inner">
        @if (isUp) {
          <nz-icon nzType="caret-up" class="ant-table-column-sorter-up" [class.active]="sortOrder === 'ascend'" />
        }
        @if (isDown) {
          <nz-icon nzType="caret-down" class="ant-table-column-sorter-down" [class.active]="sortOrder === 'descend'" />
        }
      </span>
    </span>
  `,
      host: {
        class: "ant-table-column-sorters"
      },
      imports: [NzIconModule, NgTemplateOutlet]
    }]
  }], null, {
    sortDirections: [{
      type: Input
    }],
    sortOrder: [{
      type: Input
    }],
    contentTemplate: [{
      type: Input
    }]
  });
})();
var NzCellFixedDirective = class _NzCellFixedDirective {
  renderer = inject(Renderer2);
  el = inject(ElementRef).nativeElement;
  nzRight = false;
  nzLeft = false;
  colspan = null;
  colSpan = null;
  changes$ = new Subject();
  isAutoLeft = false;
  isAutoRight = false;
  isFixedLeft = false;
  isFixedRight = false;
  isFixed = false;
  setAutoLeftWidth(autoLeft) {
    this.renderer.setStyle(this.el, "left", autoLeft);
  }
  setAutoRightWidth(autoRight) {
    this.renderer.setStyle(this.el, "right", autoRight);
  }
  setIsFirstRight(isFirstRight) {
    this.setFixClass(isFirstRight, "ant-table-cell-fix-right-first");
  }
  setIsLastLeft(isLastLeft) {
    this.setFixClass(isLastLeft, "ant-table-cell-fix-left-last");
  }
  setFixClass(flag, className) {
    this.renderer.removeClass(this.el, className);
    if (flag) {
      this.renderer.addClass(this.el, className);
    }
  }
  ngOnChanges() {
    this.setIsFirstRight(false);
    this.setIsLastLeft(false);
    this.isAutoLeft = this.nzLeft === "" || this.nzLeft === true;
    this.isAutoRight = this.nzRight === "" || this.nzRight === true;
    this.isFixedLeft = this.nzLeft !== false;
    this.isFixedRight = this.nzRight !== false;
    this.isFixed = this.isFixedLeft || this.isFixedRight;
    const validatePx = (value) => {
      if (typeof value === "string" && value !== "") {
        return value;
      } else {
        return null;
      }
    };
    this.setAutoLeftWidth(validatePx(this.nzLeft));
    this.setAutoRightWidth(validatePx(this.nzRight));
    this.changes$.next();
  }
  static \u0275fac = function NzCellFixedDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzCellFixedDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzCellFixedDirective,
    selectors: [["td", "nzRight", ""], ["th", "nzRight", ""], ["td", "nzLeft", ""], ["th", "nzLeft", ""]],
    hostVars: 6,
    hostBindings: function NzCellFixedDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleProp("position", ctx.isFixed ? "sticky" : null);
        \u0275\u0275classProp("ant-table-cell-fix-right", ctx.isFixedRight)("ant-table-cell-fix-left", ctx.isFixedLeft);
      }
    },
    inputs: {
      nzRight: "nzRight",
      nzLeft: "nzLeft",
      colspan: "colspan",
      colSpan: "colSpan"
    },
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCellFixedDirective, [{
    type: Directive,
    args: [{
      selector: "td[nzRight],th[nzRight],td[nzLeft],th[nzLeft]",
      host: {
        "[class.ant-table-cell-fix-right]": `isFixedRight`,
        "[class.ant-table-cell-fix-left]": `isFixedLeft`,
        "[style.position]": `isFixed? 'sticky' : null`
      }
    }]
  }], null, {
    nzRight: [{
      type: Input
    }],
    nzLeft: [{
      type: Input
    }],
    colspan: [{
      type: Input
    }],
    colSpan: [{
      type: Input
    }]
  });
})();
var NzTableStyleService = class _NzTableStyleService {
  theadTemplate$ = new ReplaySubject(1);
  tfootTemplate$ = new ReplaySubject(1);
  tfootFixed$ = new ReplaySubject(1);
  hasFixLeft$ = new ReplaySubject(1);
  hasFixRight$ = new ReplaySubject(1);
  hostWidth$ = new ReplaySubject(1);
  columnCount$ = new ReplaySubject(1);
  showEmpty$ = new ReplaySubject(1);
  noResult$ = new ReplaySubject(1);
  listOfThWidthConfigPx$ = new BehaviorSubject([]);
  tableWidthConfigPx$ = new BehaviorSubject([]);
  manualWidthConfigPx$ = combineLatest([this.tableWidthConfigPx$, this.listOfThWidthConfigPx$]).pipe(map(([widthConfig, listOfWidth]) => widthConfig.length ? widthConfig : listOfWidth));
  listOfAutoWidthPx$ = new ReplaySubject(1);
  listOfListOfThWidthPx$ = merge(
    /** init with manual width **/
    this.manualWidthConfigPx$,
    combineLatest([this.listOfAutoWidthPx$, this.manualWidthConfigPx$]).pipe(map(([autoWidth, manualWidth]) => {
      if (autoWidth.length === manualWidth.length) {
        return autoWidth.map((width, index) => {
          if (width === "0px") {
            return manualWidth[index] || null;
          } else {
            return manualWidth[index] || width;
          }
        });
      } else {
        return manualWidth;
      }
    }))
  );
  listOfMeasureColumn$ = new ReplaySubject(1);
  listOfListOfThWidth$ = this.listOfAutoWidthPx$.pipe(map((list) => list.map((width) => parseInt(width, 10))));
  enableAutoMeasure$ = new ReplaySubject(1);
  setTheadTemplate(template) {
    this.theadTemplate$.next(template);
  }
  setTfootTemplate(template) {
    this.tfootTemplate$.next(template);
  }
  setTfootFixed(fixed) {
    this.tfootFixed$.next(fixed);
  }
  setHasFixLeft(hasFixLeft) {
    this.hasFixLeft$.next(hasFixLeft);
  }
  setHasFixRight(hasFixRight) {
    this.hasFixRight$.next(hasFixRight);
  }
  setTableWidthConfig(widthConfig) {
    this.tableWidthConfigPx$.next(widthConfig);
  }
  setListOfTh(listOfTh) {
    let columnCount = 0;
    listOfTh.forEach((th) => {
      columnCount += th.colspan && +th.colspan || th.colSpan && +th.colSpan || 1;
    });
    const listOfThPx = listOfTh.map((item) => item.nzWidth);
    this.columnCount$.next(columnCount);
    this.listOfThWidthConfigPx$.next(listOfThPx);
  }
  setListOfMeasureColumn(listOfTh) {
    const listOfKeys = [];
    listOfTh.forEach((th) => {
      const length = th.colspan && +th.colspan || th.colSpan && +th.colSpan || 1;
      for (let i = 0; i < length; i++) {
        listOfKeys.push(`measure_key_${i}`);
      }
    });
    this.listOfMeasureColumn$.next(listOfKeys);
  }
  setListOfAutoWidth(listOfAutoWidth) {
    this.listOfAutoWidthPx$.next(listOfAutoWidth.map((width) => `${width}px`));
  }
  setShowEmpty(showEmpty) {
    this.showEmpty$.next(showEmpty);
  }
  setNoResult(noResult) {
    this.noResult$.next(noResult);
  }
  setScroll(scrollX, scrollY) {
    const enableAutoMeasure = !!(scrollX || scrollY);
    if (!enableAutoMeasure) {
      this.setListOfAutoWidth([]);
    }
    this.enableAutoMeasure$.next(enableAutoMeasure);
  }
  static \u0275fac = function NzTableStyleService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTableStyleService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NzTableStyleService,
    factory: _NzTableStyleService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableStyleService, [{
    type: Injectable
  }], null, null);
})();
var NzTableCellDirective = class _NzTableCellDirective {
  isInsideTable = !!inject(NzTableStyleService, {
    optional: true
  });
  static \u0275fac = function NzTableCellDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTableCellDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzTableCellDirective,
    selectors: [["th", 9, "nz-disable-th"], ["td", 9, "nz-disable-td"]],
    hostVars: 2,
    hostBindings: function NzTableCellDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ant-table-cell", ctx.isInsideTable);
      }
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableCellDirective, [{
    type: Directive,
    args: [{
      selector: "th:not(.nz-disable-th), td:not(.nz-disable-td)",
      host: {
        "[class.ant-table-cell]": "isInsideTable"
      }
    }]
  }], null, null);
})();
var NzTableDataService = class _NzTableDataService {
  destroyRef = inject(DestroyRef);
  pageIndex$ = new BehaviorSubject(1);
  frontPagination$ = new BehaviorSubject(true);
  pageSize$ = new BehaviorSubject(10);
  listOfData$ = new BehaviorSubject([]);
  listOfCustomColumn$ = new BehaviorSubject([]);
  pageIndexDistinct$ = this.pageIndex$.pipe(distinctUntilChanged());
  pageSizeDistinct$ = this.pageSize$.pipe(distinctUntilChanged());
  listOfCalcOperator$ = new BehaviorSubject([]);
  queryParams$ = combineLatest([this.pageIndexDistinct$, this.pageSizeDistinct$, this.listOfCalcOperator$]).pipe(debounceTime(0), skip(1), map(([pageIndex, pageSize, listOfCalc]) => ({
    pageIndex,
    pageSize,
    sort: listOfCalc.filter((item) => item.sortFn).map((item) => ({
      key: item.key,
      value: item.sortOrder
    })),
    filter: listOfCalc.filter((item) => item.filterFn).map((item) => ({
      key: item.key,
      value: item.filterValue
    }))
  })));
  listOfDataAfterCalc$ = combineLatest([this.listOfData$, this.listOfCalcOperator$]).pipe(map(([listOfData, listOfCalcOperator]) => {
    let listOfDataAfterCalc = [...listOfData];
    const listOfFilterOperator = listOfCalcOperator.filter((item) => {
      const {
        filterValue,
        filterFn
      } = item;
      const isReset = filterValue === null || filterValue === void 0 || Array.isArray(filterValue) && filterValue.length === 0;
      return !isReset && typeof filterFn === "function";
    });
    for (const item of listOfFilterOperator) {
      const {
        filterFn,
        filterValue
      } = item;
      listOfDataAfterCalc = listOfDataAfterCalc.filter((data) => filterFn(filterValue, data));
    }
    const listOfSortOperator = listOfCalcOperator.filter((item) => item.sortOrder !== null && typeof item.sortFn === "function").sort((a, b) => +b.sortPriority - +a.sortPriority);
    if (listOfCalcOperator.length) {
      listOfDataAfterCalc.sort((record1, record2) => {
        for (const item of listOfSortOperator) {
          const {
            sortFn,
            sortOrder
          } = item;
          if (sortFn && sortOrder) {
            const compareResult = sortFn(record1, record2, sortOrder);
            if (compareResult !== 0) {
              return sortOrder === "ascend" ? compareResult : -compareResult;
            }
          }
        }
        return 0;
      });
    }
    return listOfDataAfterCalc;
  }));
  listOfFrontEndCurrentPageData$ = combineLatest([this.pageIndexDistinct$, this.pageSizeDistinct$, this.listOfDataAfterCalc$]).pipe(takeUntilDestroyed(this.destroyRef), filter((value) => {
    const [pageIndex, pageSize, listOfData] = value;
    const maxPageIndex = pageSize > 0 ? Math.ceil(listOfData.length / pageSize) || 1 : 1;
    return pageIndex <= maxPageIndex;
  }), map(([pageIndex, pageSize, listOfData]) => pageSize > 0 ? listOfData.slice((pageIndex - 1) * pageSize, pageIndex * pageSize) : listOfData));
  listOfCurrentPageData$ = this.frontPagination$.pipe(switchMap((pagination) => pagination ? this.listOfFrontEndCurrentPageData$ : this.listOfDataAfterCalc$));
  total$ = this.frontPagination$.pipe(switchMap((pagination) => pagination ? this.listOfDataAfterCalc$ : this.listOfData$), map((list) => list.length), distinctUntilChanged());
  updatePageSize(size) {
    this.pageSize$.next(size);
  }
  updateFrontPagination(pagination) {
    this.frontPagination$.next(pagination);
  }
  updatePageIndex(index) {
    this.pageIndex$.next(index);
  }
  updateListOfData(list) {
    this.listOfData$.next(list);
  }
  updateListOfCustomColumn(list) {
    this.listOfCustomColumn$.next(list);
  }
  static \u0275fac = function NzTableDataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTableDataService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NzTableDataService,
    factory: _NzTableDataService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableDataService, [{
    type: Injectable
  }], null, null);
})();
var NzCustomColumnDirective = class _NzCustomColumnDirective {
  el = inject(ElementRef).nativeElement;
  renderer = inject(Renderer2);
  nzTableDataService = inject(NzTableDataService);
  destroyRef = inject(DestroyRef);
  nzCellControl = null;
  ngOnInit() {
    this.nzTableDataService.listOfCustomColumn$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((item) => {
      item.forEach((v, i) => {
        if (v.value === this.nzCellControl) {
          this.renderer.setStyle(this.el, "display", v.default ? "block" : "none");
          this.renderer.setStyle(this.el, "order", i);
          this.renderer.setStyle(this.el, "flex", v.fixWidth ? `1 0 ${v.width}px` : `1 1 ${v.width}px`);
        }
      });
    });
  }
  static \u0275fac = function NzCustomColumnDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzCustomColumnDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzCustomColumnDirective,
    selectors: [["td", "nzCellControl", ""], ["th", "nzCellControl", ""]],
    inputs: {
      nzCellControl: "nzCellControl"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCustomColumnDirective, [{
    type: Directive,
    args: [{
      selector: "td[nzCellControl],th[nzCellControl]"
    }]
  }], null, {
    nzCellControl: [{
      type: Input
    }]
  });
})();
var NzTdAddOnComponent = class _NzTdAddOnComponent {
  nzChecked = false;
  nzDisabled = false;
  nzIndeterminate = false;
  nzLabel = null;
  nzIndentSize = 0;
  nzShowExpand = false;
  nzShowCheckbox = false;
  nzExpand = false;
  nzExpandIcon = null;
  nzCheckedChange = new EventEmitter();
  nzExpandChange = new EventEmitter();
  isNzShowExpandChanged = false;
  isNzShowCheckboxChanged = false;
  onCheckedChange(checked) {
    this.nzChecked = checked;
    this.nzCheckedChange.emit(checked);
  }
  onExpandChange(expand) {
    this.nzExpand = expand;
    this.nzExpandChange.emit(expand);
  }
  ngOnChanges(changes) {
    const isFirstChange = (value) => value && value.firstChange && value.currentValue !== void 0;
    const {
      nzExpand,
      nzChecked,
      nzShowExpand,
      nzShowCheckbox
    } = changes;
    if (nzShowExpand) {
      this.isNzShowExpandChanged = true;
    }
    if (nzShowCheckbox) {
      this.isNzShowCheckboxChanged = true;
    }
    if (isFirstChange(nzExpand) && !this.isNzShowExpandChanged) {
      this.nzShowExpand = true;
    }
    if (isFirstChange(nzChecked) && !this.isNzShowCheckboxChanged) {
      this.nzShowCheckbox = true;
    }
  }
  static \u0275fac = function NzTdAddOnComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTdAddOnComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzTdAddOnComponent,
    selectors: [["td", "nzChecked", ""], ["td", "nzDisabled", ""], ["td", "nzIndeterminate", ""], ["td", "nzIndentSize", ""], ["td", "nzExpand", ""], ["td", "nzShowExpand", ""], ["td", "nzShowCheckbox", ""]],
    hostVars: 4,
    hostBindings: function NzTdAddOnComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ant-table-cell-with-append", ctx.nzShowExpand || ctx.nzIndentSize > 0)("ant-table-selection-column", ctx.nzShowCheckbox);
      }
    },
    inputs: {
      nzChecked: "nzChecked",
      nzDisabled: "nzDisabled",
      nzIndeterminate: "nzIndeterminate",
      nzLabel: "nzLabel",
      nzIndentSize: "nzIndentSize",
      nzShowExpand: [2, "nzShowExpand", "nzShowExpand", booleanAttribute],
      nzShowCheckbox: [2, "nzShowCheckbox", "nzShowCheckbox", booleanAttribute],
      nzExpand: [2, "nzExpand", "nzExpand", booleanAttribute],
      nzExpandIcon: "nzExpandIcon"
    },
    outputs: {
      nzCheckedChange: "nzCheckedChange",
      nzExpandChange: "nzExpandChange"
    },
    features: [\u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c02,
    decls: 3,
    vars: 2,
    consts: [["nz-checkbox", "", 3, "nzDisabled", "ngModel", "nzIndeterminate"], [3, "indentSize"], [3, "ngTemplateOutlet"], ["nz-row-expand-button", "", 3, "expand", "spaceMode"], ["nz-row-expand-button", "", 3, "expandChange", "expand", "spaceMode"], ["nz-checkbox", "", 3, "ngModelChange", "nzDisabled", "ngModel", "nzIndeterminate"]],
    template: function NzTdAddOnComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275conditionalCreate(0, NzTdAddOnComponent_Conditional_0_Template, 3, 2);
        \u0275\u0275conditionalCreate(1, NzTdAddOnComponent_Conditional_1_Template, 1, 4, "label", 0);
        \u0275\u0275projection(2);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.nzShowExpand || ctx.nzIndentSize > 0 ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.nzShowCheckbox ? 1 : -1);
      }
    },
    dependencies: [NzRowIndentDirective, NzRowExpandButtonDirective, NgTemplateOutlet, NzCheckboxModule, NzCheckboxComponent, FormsModule, NgControlStatus, NgModel],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTdAddOnComponent, [{
    type: Component,
    args: [{
      selector: "td[nzChecked], td[nzDisabled], td[nzIndeterminate], td[nzIndentSize], td[nzExpand], td[nzShowExpand], td[nzShowCheckbox]",
      encapsulation: ViewEncapsulation.None,
      template: `
    @if (nzShowExpand || nzIndentSize > 0) {
      <nz-row-indent [indentSize]="nzIndentSize" />
      @if (nzExpandIcon) {
        <ng-template [ngTemplateOutlet]="nzExpandIcon" />
      } @else {
        <button
          nz-row-expand-button
          [expand]="nzExpand"
          (expandChange)="onExpandChange($event)"
          [spaceMode]="!nzShowExpand"
        ></button>
      }
    }
    @if (nzShowCheckbox) {
      <label
        nz-checkbox
        [nzDisabled]="nzDisabled"
        [ngModel]="nzChecked"
        [nzIndeterminate]="nzIndeterminate"
        [attr.aria-label]="nzLabel"
        (ngModelChange)="onCheckedChange($event)"
      ></label>
    }
    <ng-content />
  `,
      host: {
        "[class.ant-table-cell-with-append]": `nzShowExpand || nzIndentSize > 0`,
        "[class.ant-table-selection-column]": `nzShowCheckbox`
      },
      imports: [NzRowIndentDirective, NzRowExpandButtonDirective, NgTemplateOutlet, NzCheckboxModule, FormsModule]
    }]
  }], null, {
    nzChecked: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzIndeterminate: [{
      type: Input
    }],
    nzLabel: [{
      type: Input
    }],
    nzIndentSize: [{
      type: Input
    }],
    nzShowExpand: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowCheckbox: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzExpand: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzExpandIcon: [{
      type: Input
    }],
    nzCheckedChange: [{
      type: Output
    }],
    nzExpandChange: [{
      type: Output
    }]
  });
})();
var NZ_CONFIG_MODULE_NAME$1 = "table";
var NzThAddOnComponent = (() => {
  let _nzSortDirections_decorators;
  let _nzSortDirections_initializers = [];
  let _nzSortDirections_extraInitializers = [];
  return class NzThAddOnComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzSortDirections_decorators = [WithConfig()];
      __esDecorate(null, null, _nzSortDirections_decorators, {
        kind: "field",
        name: "nzSortDirections",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzSortDirections" in obj,
          get: (obj) => obj.nzSortDirections,
          set: (obj, value) => {
            obj.nzSortDirections = value;
          }
        },
        metadata: _metadata
      }, _nzSortDirections_initializers, _nzSortDirections_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    _nzModuleName = NZ_CONFIG_MODULE_NAME$1;
    nzConfigService = inject(NzConfigService);
    el = inject(ElementRef).nativeElement;
    destroyRef = inject(DestroyRef);
    cdr = inject(ChangeDetectorRef);
    ngZone = inject(NgZone);
    manualClickOrder$ = new Subject();
    calcOperatorChange$ = new Subject();
    nzFilterValue = null;
    sortOrder = null;
    sortDirections = ["ascend", "descend", null];
    sortOrderChange$ = new Subject();
    isNzShowSortChanged = false;
    isNzShowFilterChanged = false;
    nzColumnKey;
    nzFilterMultiple = true;
    nzSortOrder = null;
    nzSortPriority = false;
    nzSortDirections = __runInitializers(this, _nzSortDirections_initializers, ["ascend", "descend", null]);
    nzFilters = (__runInitializers(this, _nzSortDirections_extraInitializers), []);
    nzSortFn = null;
    nzFilterFn = null;
    nzShowSort = false;
    nzShowFilter = false;
    nzCustomFilter = false;
    nzCheckedChange = new EventEmitter();
    nzSortOrderChange = new EventEmitter();
    nzFilterChange = new EventEmitter();
    getNextSortDirection(sortDirections, current) {
      const index = sortDirections.indexOf(current);
      if (index === sortDirections.length - 1) {
        return sortDirections[0];
      } else {
        return sortDirections[index + 1];
      }
    }
    setSortOrder(order) {
      this.sortOrderChange$.next(order);
    }
    clearSortOrder() {
      if (this.sortOrder !== null) {
        this.setSortOrder(null);
      }
    }
    onFilterValueChange(value) {
      this.nzFilterChange.emit(value);
      this.nzFilterValue = value;
      this.updateCalcOperator();
    }
    updateCalcOperator() {
      this.calcOperatorChange$.next();
    }
    ngOnInit() {
      fromEventOutsideAngular(this.el, "click").pipe(filter(() => this.nzShowSort), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
        const nextOrder = this.getNextSortDirection(this.sortDirections, this.sortOrder);
        this.ngZone.run(() => {
          this.setSortOrder(nextOrder);
          this.manualClickOrder$.next(this);
        });
      });
      this.sortOrderChange$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((order) => {
        if (this.sortOrder !== order) {
          this.sortOrder = order;
          this.nzSortOrderChange.emit(order);
        }
        this.updateCalcOperator();
        this.cdr.markForCheck();
      });
    }
    ngOnChanges(changes) {
      const {
        nzSortDirections,
        nzFilters,
        nzSortOrder,
        nzSortFn,
        nzFilterFn,
        nzSortPriority,
        nzFilterMultiple,
        nzShowSort,
        nzShowFilter
      } = changes;
      if (nzSortDirections) {
        if (this.nzSortDirections && this.nzSortDirections.length) {
          this.sortDirections = this.nzSortDirections;
        }
      }
      if (nzSortOrder) {
        this.sortOrder = this.nzSortOrder;
        this.setSortOrder(this.nzSortOrder);
      }
      if (nzShowSort) {
        this.isNzShowSortChanged = true;
      }
      if (nzShowFilter) {
        this.isNzShowFilterChanged = true;
      }
      const isFirstChange = (value) => value && value.firstChange && value.currentValue !== void 0;
      if ((isFirstChange(nzSortOrder) || isFirstChange(nzSortFn)) && !this.isNzShowSortChanged) {
        this.nzShowSort = true;
      }
      if (isFirstChange(nzFilters) && !this.isNzShowFilterChanged) {
        this.nzShowFilter = true;
      }
      if ((nzFilters || nzFilterMultiple) && this.nzShowFilter) {
        const listOfValue = this.nzFilters.filter((item) => item.byDefault).map((item) => item.value);
        this.nzFilterValue = this.nzFilterMultiple ? listOfValue : listOfValue[0] || null;
      }
      if (nzSortFn || nzFilterFn || nzSortPriority || nzFilters) {
        this.updateCalcOperator();
      }
    }
    static \u0275fac = function NzThAddOnComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzThAddOnComponent2)();
    };
    static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: NzThAddOnComponent2,
      selectors: [["th", "nzColumnKey", ""], ["th", "nzSortFn", ""], ["th", "nzSortOrder", ""], ["th", "nzFilters", ""], ["th", "nzShowSort", ""], ["th", "nzShowFilter", ""], ["th", "nzCustomFilter", ""]],
      hostVars: 4,
      hostBindings: function NzThAddOnComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("ant-table-column-has-sorters", ctx.nzShowSort)("ant-table-column-sort", ctx.sortOrder === "descend" || ctx.sortOrder === "ascend");
        }
      },
      inputs: {
        nzColumnKey: "nzColumnKey",
        nzFilterMultiple: "nzFilterMultiple",
        nzSortOrder: "nzSortOrder",
        nzSortPriority: "nzSortPriority",
        nzSortDirections: "nzSortDirections",
        nzFilters: "nzFilters",
        nzSortFn: "nzSortFn",
        nzFilterFn: "nzFilterFn",
        nzShowSort: [2, "nzShowSort", "nzShowSort", booleanAttribute],
        nzShowFilter: [2, "nzShowFilter", "nzShowFilter", booleanAttribute],
        nzCustomFilter: [2, "nzCustomFilter", "nzCustomFilter", booleanAttribute]
      },
      outputs: {
        nzCheckedChange: "nzCheckedChange",
        nzSortOrderChange: "nzSortOrderChange",
        nzFilterChange: "nzFilterChange"
      },
      features: [\u0275\u0275NgOnChangesFeature],
      ngContentSelectors: _c22,
      decls: 10,
      vars: 1,
      consts: [["notFilterTemplate", ""], ["extraTemplate", ""], ["sortTemplate", ""], ["contentTemplate", ""], [3, "contentTemplate", "extraTemplate", "customFilter", "filterMultiple", "listOfFilter"], [3, "ngTemplateOutlet"], [3, "filterChange", "contentTemplate", "extraTemplate", "customFilter", "filterMultiple", "listOfFilter"], [3, "sortOrder", "sortDirections", "contentTemplate"]],
      template: function NzThAddOnComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef(_c12);
          \u0275\u0275conditionalCreate(0, NzThAddOnComponent_Conditional_0_Template, 1, 5, "nz-table-filter", 4)(1, NzThAddOnComponent_Conditional_1_Template, 1, 1, "ng-container", 5);
          \u0275\u0275template(2, NzThAddOnComponent_ng_template_2_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, NzThAddOnComponent_ng_template_4_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(6, NzThAddOnComponent_ng_template_6_Template, 1, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(8, NzThAddOnComponent_ng_template_8_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
        }
        if (rf & 2) {
          \u0275\u0275conditional(ctx.nzShowFilter || ctx.nzCustomFilter ? 0 : 1);
        }
      },
      dependencies: [NzTableFilterComponent, NgTemplateOutlet, NzTableSortersComponent],
      encapsulation: 2
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzThAddOnComponent, [{
    type: Component,
    args: [{
      selector: "th[nzColumnKey], th[nzSortFn], th[nzSortOrder], th[nzFilters], th[nzShowSort], th[nzShowFilter], th[nzCustomFilter]",
      encapsulation: ViewEncapsulation.None,
      template: `
    @if (nzShowFilter || nzCustomFilter) {
      <nz-table-filter
        [contentTemplate]="notFilterTemplate"
        [extraTemplate]="extraTemplate"
        [customFilter]="nzCustomFilter"
        [filterMultiple]="nzFilterMultiple"
        [listOfFilter]="nzFilters"
        (filterChange)="onFilterValueChange($event)"
      />
    } @else {
      <ng-container [ngTemplateOutlet]="notFilterTemplate" />
    }
    <ng-template #notFilterTemplate>
      <ng-template [ngTemplateOutlet]="nzShowSort ? sortTemplate : contentTemplate" />
    </ng-template>
    <ng-template #extraTemplate>
      <ng-content select="[nz-th-extra]" />
      <ng-content select="nz-filter-trigger" />
    </ng-template>
    <ng-template #sortTemplate>
      <nz-table-sorters [sortOrder]="sortOrder" [sortDirections]="sortDirections" [contentTemplate]="contentTemplate" />
    </ng-template>
    <ng-template #contentTemplate>
      <ng-content />
    </ng-template>
  `,
      host: {
        "[class.ant-table-column-has-sorters]": "nzShowSort",
        "[class.ant-table-column-sort]": `sortOrder === 'descend' || sortOrder === 'ascend'`
      },
      imports: [NzTableFilterComponent, NgTemplateOutlet, NzTableSortersComponent]
    }]
  }], null, {
    nzColumnKey: [{
      type: Input
    }],
    nzFilterMultiple: [{
      type: Input
    }],
    nzSortOrder: [{
      type: Input
    }],
    nzSortPriority: [{
      type: Input
    }],
    nzSortDirections: [{
      type: Input
    }],
    nzFilters: [{
      type: Input
    }],
    nzSortFn: [{
      type: Input
    }],
    nzFilterFn: [{
      type: Input
    }],
    nzShowSort: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowFilter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzCustomFilter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzCheckedChange: [{
      type: Output
    }],
    nzSortOrderChange: [{
      type: Output
    }],
    nzFilterChange: [{
      type: Output
    }]
  });
})();
var NzThMeasureDirective = class _NzThMeasureDirective {
  renderer = inject(Renderer2);
  el = inject(ElementRef).nativeElement;
  changes$ = new Subject();
  nzWidth = null;
  colspan = null;
  colSpan = null;
  rowspan = null;
  rowSpan = null;
  ngOnChanges(changes) {
    const {
      nzWidth,
      colspan,
      rowspan,
      colSpan,
      rowSpan
    } = changes;
    if (colspan || colSpan) {
      const col = this.colspan || this.colSpan;
      if (!isNil(col)) {
        this.renderer.setAttribute(this.el, "colspan", `${col}`);
      } else {
        this.renderer.removeAttribute(this.el, "colspan");
      }
    }
    if (rowspan || rowSpan) {
      const row = this.rowspan || this.rowSpan;
      if (!isNil(row)) {
        this.renderer.setAttribute(this.el, "rowspan", `${row}`);
      } else {
        this.renderer.removeAttribute(this.el, "rowspan");
      }
    }
    if (nzWidth || colspan) {
      this.changes$.next();
    }
  }
  static \u0275fac = function NzThMeasureDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzThMeasureDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzThMeasureDirective,
    selectors: [["th"]],
    inputs: {
      nzWidth: "nzWidth",
      colspan: "colspan",
      colSpan: "colSpan",
      rowspan: "rowspan",
      rowSpan: "rowSpan"
    },
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzThMeasureDirective, [{
    type: Directive,
    args: [{
      selector: "th"
    }]
  }], null, {
    nzWidth: [{
      type: Input
    }],
    colspan: [{
      type: Input
    }],
    colSpan: [{
      type: Input
    }],
    rowspan: [{
      type: Input
    }],
    rowSpan: [{
      type: Input
    }]
  });
})();
var NzThSelectionComponent = class _NzThSelectionComponent {
  nzSelections = [];
  nzChecked = false;
  nzDisabled = false;
  nzIndeterminate = false;
  nzLabel = null;
  nzShowCheckbox = false;
  nzShowRowSelection = false;
  nzCheckedChange = new EventEmitter();
  isNzShowExpandChanged = false;
  isNzShowCheckboxChanged = false;
  onCheckedChange(checked) {
    this.nzChecked = checked;
    this.nzCheckedChange.emit(checked);
  }
  ngOnChanges(changes) {
    const isFirstChange = (value) => value && value.firstChange && value.currentValue !== void 0;
    const {
      nzChecked,
      nzSelections,
      nzShowExpand,
      nzShowCheckbox
    } = changes;
    if (nzShowExpand) {
      this.isNzShowExpandChanged = true;
    }
    if (nzShowCheckbox) {
      this.isNzShowCheckboxChanged = true;
    }
    if (isFirstChange(nzSelections) && !this.isNzShowExpandChanged) {
      this.nzShowRowSelection = true;
    }
    if (isFirstChange(nzChecked) && !this.isNzShowCheckboxChanged) {
      this.nzShowCheckbox = true;
    }
  }
  static \u0275fac = function NzThSelectionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzThSelectionComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzThSelectionComponent,
    selectors: [["th", "nzSelections", ""], ["th", "nzChecked", ""], ["th", "nzShowCheckbox", ""], ["th", "nzShowRowSelection", ""]],
    hostAttrs: [1, "ant-table-selection-column"],
    inputs: {
      nzSelections: "nzSelections",
      nzChecked: [2, "nzChecked", "nzChecked", booleanAttribute],
      nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
      nzIndeterminate: "nzIndeterminate",
      nzLabel: "nzLabel",
      nzShowCheckbox: [2, "nzShowCheckbox", "nzShowCheckbox", booleanAttribute],
      nzShowRowSelection: [2, "nzShowRowSelection", "nzShowRowSelection", booleanAttribute]
    },
    outputs: {
      nzCheckedChange: "nzCheckedChange"
    },
    features: [\u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c02,
    decls: 2,
    vars: 7,
    consts: [[3, "checkedChange", "checked", "disabled", "indeterminate", "label", "listOfSelections", "showCheckbox", "showRowSelection"]],
    template: function NzThSelectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "nz-table-selection", 0);
        \u0275\u0275listener("checkedChange", function NzThSelectionComponent_Template_nz_table_selection_checkedChange_0_listener($event) {
          return ctx.onCheckedChange($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275projection(1);
      }
      if (rf & 2) {
        \u0275\u0275property("checked", ctx.nzChecked)("disabled", ctx.nzDisabled)("indeterminate", ctx.nzIndeterminate)("label", ctx.nzLabel)("listOfSelections", ctx.nzSelections)("showCheckbox", ctx.nzShowCheckbox)("showRowSelection", ctx.nzShowRowSelection);
      }
    },
    dependencies: [NzTableSelectionComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzThSelectionComponent, [{
    type: Component,
    args: [{
      selector: "th[nzSelections],th[nzChecked],th[nzShowCheckbox],th[nzShowRowSelection]",
      encapsulation: ViewEncapsulation.None,
      template: `
    <nz-table-selection
      [checked]="nzChecked"
      [disabled]="nzDisabled"
      [indeterminate]="nzIndeterminate"
      [label]="nzLabel"
      [listOfSelections]="nzSelections"
      [showCheckbox]="nzShowCheckbox"
      [showRowSelection]="nzShowRowSelection"
      (checkedChange)="onCheckedChange($event)"
    />
    <ng-content />
  `,
      host: {
        class: "ant-table-selection-column"
      },
      imports: [NzTableSelectionComponent]
    }]
  }], null, {
    nzSelections: [{
      type: Input
    }],
    nzChecked: [{
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
      type: Input
    }],
    nzLabel: [{
      type: Input
    }],
    nzShowCheckbox: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowRowSelection: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzCheckedChange: [{
      type: Output
    }]
  });
})();
var NzCellAlignDirective = class _NzCellAlignDirective {
  nzAlign = null;
  static \u0275fac = function NzCellAlignDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzCellAlignDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzCellAlignDirective,
    selectors: [["th", "nzAlign", ""], ["td", "nzAlign", ""]],
    hostVars: 2,
    hostBindings: function NzCellAlignDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleProp("text-align", ctx.nzAlign);
      }
    },
    inputs: {
      nzAlign: "nzAlign"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCellAlignDirective, [{
    type: Directive,
    args: [{
      selector: "th[nzAlign],td[nzAlign]",
      host: {
        "[style.text-align]": "nzAlign"
      }
    }]
  }], null, {
    nzAlign: [{
      type: Input
    }]
  });
})();
var NzCellEllipsisDirective = class _NzCellEllipsisDirective {
  nzEllipsis = true;
  static \u0275fac = function NzCellEllipsisDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzCellEllipsisDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzCellEllipsisDirective,
    selectors: [["th", "nzEllipsis", ""], ["td", "nzEllipsis", ""]],
    hostVars: 2,
    hostBindings: function NzCellEllipsisDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ant-table-cell-ellipsis", ctx.nzEllipsis);
      }
    },
    inputs: {
      nzEllipsis: [2, "nzEllipsis", "nzEllipsis", booleanAttribute]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCellEllipsisDirective, [{
    type: Directive,
    args: [{
      selector: "th[nzEllipsis],td[nzEllipsis]",
      host: {
        "[class.ant-table-cell-ellipsis]": "nzEllipsis"
      }
    }]
  }], null, {
    nzEllipsis: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var NzCellBreakWordDirective = class _NzCellBreakWordDirective {
  nzBreakWord = true;
  static \u0275fac = function NzCellBreakWordDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzCellBreakWordDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzCellBreakWordDirective,
    selectors: [["th", "nzBreakWord", ""], ["td", "nzBreakWord", ""]],
    hostVars: 2,
    hostBindings: function NzCellBreakWordDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleProp("word-break", ctx.nzBreakWord ? "break-all" : "");
      }
    },
    inputs: {
      nzBreakWord: [2, "nzBreakWord", "nzBreakWord", booleanAttribute]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCellBreakWordDirective, [{
    type: Directive,
    args: [{
      selector: "th[nzBreakWord],td[nzBreakWord]",
      host: {
        "[style.word-break]": `nzBreakWord ? 'break-all' : ''`
      }
    }]
  }], null, {
    nzBreakWord: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var NzTableContentComponent = class _NzTableContentComponent {
  tableLayout = "auto";
  theadTemplate = null;
  contentTemplate = null;
  tfootTemplate = null;
  listOfColWidth = [];
  scrollX = null;
  static \u0275fac = function NzTableContentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTableContentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzTableContentComponent,
    selectors: [["table", "nz-table-content", ""]],
    hostVars: 8,
    hostBindings: function NzTableContentComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleProp("table-layout", ctx.tableLayout)("width", ctx.scrollX)("min-width", ctx.scrollX ? "100%" : null);
        \u0275\u0275classProp("ant-table-fixed", ctx.scrollX);
      }
    },
    inputs: {
      tableLayout: "tableLayout",
      theadTemplate: "theadTemplate",
      contentTemplate: "contentTemplate",
      tfootTemplate: "tfootTemplate",
      listOfColWidth: "listOfColWidth",
      scrollX: "scrollX"
    },
    ngContentSelectors: _c02,
    decls: 5,
    vars: 4,
    consts: [[1, "ant-table-thead"], [3, "ngTemplateOutlet"], [1, "ant-table-summary"], [3, "width", "minWidth"]],
    template: function NzTableContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275conditionalCreate(0, NzTableContentComponent_Conditional_0_Template, 3, 0, "colgroup");
        \u0275\u0275conditionalCreate(1, NzTableContentComponent_Conditional_1_Template, 2, 1, "thead", 0);
        \u0275\u0275template(2, NzTableContentComponent_ng_template_2_Template, 0, 0, "ng-template", 1);
        \u0275\u0275projection(3);
        \u0275\u0275conditionalCreate(4, NzTableContentComponent_Conditional_4_Template, 2, 1, "tfoot", 2);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.listOfColWidth.length > 0 ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.theadTemplate ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.contentTemplate);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.tfootTemplate ? 4 : -1);
      }
    },
    dependencies: [NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableContentComponent, [{
    type: Component,
    args: [{
      selector: "table[nz-table-content]",
      encapsulation: ViewEncapsulation.None,
      template: `
    @if (listOfColWidth.length > 0) {
      <colgroup>
        @for (width of listOfColWidth; track $index) {
          <col [style.width]="width" [style.minWidth]="width" />
        }
      </colgroup>
    }
    @if (theadTemplate) {
      <thead class="ant-table-thead">
        <ng-template [ngTemplateOutlet]="theadTemplate" />
      </thead>
    }
    <ng-template [ngTemplateOutlet]="contentTemplate" />
    <ng-content />
    @if (tfootTemplate) {
      <tfoot class="ant-table-summary">
        <ng-template [ngTemplateOutlet]="tfootTemplate" />
      </tfoot>
    }
  `,
      host: {
        "[style.table-layout]": "tableLayout",
        "[class.ant-table-fixed]": "scrollX",
        "[style.width]": "scrollX",
        "[style.min-width]": `scrollX ? '100%' : null`
      },
      imports: [NgTemplateOutlet]
    }]
  }], null, {
    tableLayout: [{
      type: Input
    }],
    theadTemplate: [{
      type: Input
    }],
    contentTemplate: [{
      type: Input
    }],
    tfootTemplate: [{
      type: Input
    }],
    listOfColWidth: [{
      type: Input
    }],
    scrollX: [{
      type: Input
    }]
  });
})();
var NzTableFixedRowComponent = class _NzTableFixedRowComponent {
  nzTableStyleService = inject(NzTableStyleService);
  renderer = inject(Renderer2);
  destroyRef = inject(DestroyRef);
  tdElement;
  hostWidth$ = new BehaviorSubject(null);
  enableAutoMeasure$ = new BehaviorSubject(false);
  ngOnInit() {
    if (this.nzTableStyleService) {
      const {
        enableAutoMeasure$,
        hostWidth$
      } = this.nzTableStyleService;
      enableAutoMeasure$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.enableAutoMeasure$);
      hostWidth$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.hostWidth$);
    }
  }
  ngAfterViewInit() {
    this.nzTableStyleService.columnCount$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((count) => {
      this.renderer.setAttribute(this.tdElement.nativeElement, "colspan", `${count}`);
    });
  }
  static \u0275fac = function NzTableFixedRowComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTableFixedRowComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzTableFixedRowComponent,
    selectors: [["tr", "nz-table-fixed-row", ""], ["tr", "nzExpand", ""]],
    viewQuery: function NzTableFixedRowComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c3, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tdElement = _t.first);
      }
    },
    ngContentSelectors: _c02,
    decls: 7,
    vars: 3,
    consts: [["tdElement", ""], ["contentTemplate", ""], [1, "nz-disable-td", "ant-table-cell"], [1, "ant-table-expanded-row-fixed", 2, "position", "sticky", "left", "0", "overflow", "hidden", 3, "width"], [3, "ngTemplateOutlet"], [1, "ant-table-expanded-row-fixed", 2, "position", "sticky", "left", "0", "overflow", "hidden"]],
    template: function NzTableFixedRowComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "td", 2, 0);
        \u0275\u0275conditionalCreate(2, NzTableFixedRowComponent_Conditional_2_Template, 3, 5, "div", 3);
        \u0275\u0275pipe(3, "async");
        \u0275\u0275conditionalBranchCreate(4, NzTableFixedRowComponent_Conditional_4_Template, 1, 1, null, 4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, NzTableFixedRowComponent_ng_template_5_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(\u0275\u0275pipeBind1(3, 1, ctx.enableAutoMeasure$) ? 2 : 4);
      }
    },
    dependencies: [NgTemplateOutlet, AsyncPipe],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableFixedRowComponent, [{
    type: Component,
    args: [{
      selector: "tr[nz-table-fixed-row], tr[nzExpand]",
      encapsulation: ViewEncapsulation.None,
      template: `
    <td class="nz-disable-td ant-table-cell" #tdElement>
      @if (enableAutoMeasure$ | async) {
        <div
          class="ant-table-expanded-row-fixed"
          style="position: sticky; left: 0; overflow: hidden;"
          [style.width.px]="hostWidth$ | async"
        >
          <ng-template [ngTemplateOutlet]="contentTemplate" />
        </div>
      } @else {
        <ng-template [ngTemplateOutlet]="contentTemplate" />
      }
    </td>
    <ng-template #contentTemplate>
      <ng-content />
    </ng-template>
  `,
      imports: [AsyncPipe, NgTemplateOutlet]
    }]
  }], null, {
    tdElement: [{
      type: ViewChild,
      args: ["tdElement", {
        static: true
      }]
    }]
  });
})();
var NzTableInnerDefaultComponent = class _NzTableInnerDefaultComponent {
  tableLayout = "auto";
  listOfColWidth = [];
  theadTemplate = null;
  contentTemplate = null;
  tfootTemplate = null;
  static \u0275fac = function NzTableInnerDefaultComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTableInnerDefaultComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzTableInnerDefaultComponent,
    selectors: [["nz-table-inner-default"]],
    hostAttrs: [1, "ant-table-container"],
    inputs: {
      tableLayout: "tableLayout",
      listOfColWidth: "listOfColWidth",
      theadTemplate: "theadTemplate",
      contentTemplate: "contentTemplate",
      tfootTemplate: "tfootTemplate"
    },
    decls: 2,
    vars: 5,
    consts: [[1, "ant-table-content"], ["nz-table-content", "", 3, "contentTemplate", "tableLayout", "listOfColWidth", "theadTemplate", "tfootTemplate"]],
    template: function NzTableInnerDefaultComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "table", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("contentTemplate", ctx.contentTemplate)("tableLayout", ctx.tableLayout)("listOfColWidth", ctx.listOfColWidth)("theadTemplate", ctx.theadTemplate)("tfootTemplate", ctx.tfootTemplate);
      }
    },
    dependencies: [NzTableContentComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableInnerDefaultComponent, [{
    type: Component,
    args: [{
      selector: "nz-table-inner-default",
      encapsulation: ViewEncapsulation.None,
      template: `
    <div class="ant-table-content">
      <table
        nz-table-content
        [contentTemplate]="contentTemplate"
        [tableLayout]="tableLayout"
        [listOfColWidth]="listOfColWidth"
        [theadTemplate]="theadTemplate"
        [tfootTemplate]="tfootTemplate"
      ></table>
    </div>
  `,
      host: {
        class: "ant-table-container"
      },
      imports: [NzTableContentComponent]
    }]
  }], null, {
    tableLayout: [{
      type: Input
    }],
    listOfColWidth: [{
      type: Input
    }],
    theadTemplate: [{
      type: Input
    }],
    contentTemplate: [{
      type: Input
    }],
    tfootTemplate: [{
      type: Input
    }]
  });
})();
var NzTrMeasureComponent = class _NzTrMeasureComponent {
  nzResizeObserver = inject(NzResizeObserver);
  ngZone = inject(NgZone);
  destroyRef = inject(DestroyRef);
  listOfMeasureColumn = [];
  listOfAutoWidth = new EventEmitter();
  listOfTdElement;
  ngAfterViewInit() {
    this.listOfTdElement.changes.pipe(startWith(this.listOfTdElement)).pipe(switchMap((list) => combineLatest(list.toArray().map((item) => this.nzResizeObserver.observe(item).pipe(map(([entry]) => {
      const {
        width
      } = entry.target.getBoundingClientRect();
      return Math.floor(width);
    }))))), debounceTime(16), takeUntilDestroyed(this.destroyRef)).subscribe((data) => {
      if (this.ngZone instanceof NgZone && NgZone.isInAngularZone()) {
        this.listOfAutoWidth.next(data);
      } else {
        this.ngZone.run(() => this.listOfAutoWidth.next(data));
      }
    });
  }
  static \u0275fac = function NzTrMeasureComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTrMeasureComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzTrMeasureComponent,
    selectors: [["tr", "nz-table-measure-row", ""]],
    viewQuery: function NzTrMeasureComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c3, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listOfTdElement = _t);
      }
    },
    hostAttrs: [1, "ant-table-measure-now"],
    inputs: {
      listOfMeasureColumn: "listOfMeasureColumn"
    },
    outputs: {
      listOfAutoWidth: "listOfAutoWidth"
    },
    decls: 2,
    vars: 0,
    consts: [["tdElement", ""], [1, "nz-disable-td", 2, "padding", "0", "border", "0", "height", "0"]],
    template: function NzTrMeasureComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, NzTrMeasureComponent_For_1_Template, 2, 0, "td", 1, \u0275\u0275repeaterTrackByIndex);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.listOfMeasureColumn);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTrMeasureComponent, [{
    type: Component,
    args: [{
      selector: "tr[nz-table-measure-row]",
      encapsulation: ViewEncapsulation.None,
      template: `
    @for (th of listOfMeasureColumn; track $index) {
      <td #tdElement class="nz-disable-td" style="padding: 0; border: 0; height: 0;"></td>
    }
  `,
      host: {
        class: "ant-table-measure-now"
      }
    }]
  }], null, {
    listOfMeasureColumn: [{
      type: Input
    }],
    listOfAutoWidth: [{
      type: Output
    }],
    listOfTdElement: [{
      type: ViewChildren,
      args: ["tdElement"]
    }]
  });
})();
var NzTbodyComponent = class _NzTbodyComponent {
  showEmpty$ = new BehaviorSubject(false);
  noResult$ = new BehaviorSubject(void 0);
  listOfMeasureColumn$ = new BehaviorSubject([]);
  nzTableStyleService = inject(NzTableStyleService, {
    optional: true
  });
  isInsideTable = !!this.nzTableStyleService;
  constructor() {
    if (this.nzTableStyleService) {
      const {
        showEmpty$,
        noResult$,
        listOfMeasureColumn$
      } = this.nzTableStyleService;
      noResult$.pipe(takeUntilDestroyed()).subscribe(this.noResult$);
      listOfMeasureColumn$.pipe(takeUntilDestroyed()).subscribe(this.listOfMeasureColumn$);
      showEmpty$.pipe(takeUntilDestroyed()).subscribe(this.showEmpty$);
    }
  }
  onListOfAutoWidthChange(listOfAutoWidth) {
    this.nzTableStyleService?.setListOfAutoWidth(listOfAutoWidth);
  }
  static \u0275fac = function NzTbodyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTbodyComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzTbodyComponent,
    selectors: [["tbody"]],
    hostVars: 2,
    hostBindings: function NzTbodyComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ant-table-tbody", ctx.isInsideTable);
      }
    },
    ngContentSelectors: _c02,
    decls: 5,
    vars: 6,
    consts: [["nz-table-fixed-row", "", 1, "ant-table-placeholder"], ["nz-table-measure-row", "", 3, "listOfMeasureColumn"], ["nz-table-measure-row", "", 3, "listOfAutoWidth", "listOfMeasureColumn"], ["nzComponentName", "table", 3, "specificContent"]],
    template: function NzTbodyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275conditionalCreate(0, NzTbodyComponent_Conditional_0_Template, 1, 1);
        \u0275\u0275pipe(1, "async");
        \u0275\u0275projection(2);
        \u0275\u0275conditionalCreate(3, NzTbodyComponent_Conditional_3_Template, 3, 3, "tr", 0);
        \u0275\u0275pipe(4, "async");
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pipeBind1(1, 2, ctx.listOfMeasureColumn$)) ? 0 : -1, tmp_0_0);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(\u0275\u0275pipeBind1(4, 4, ctx.showEmpty$) ? 3 : -1);
      }
    },
    dependencies: [NzTrMeasureComponent, NzTableFixedRowComponent, NzEmptyModule, NzEmbedEmptyComponent, AsyncPipe],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTbodyComponent, [{
    type: Component,
    args: [{
      selector: "tbody",
      encapsulation: ViewEncapsulation.None,
      template: `
    @if (listOfMeasureColumn$ | async; as listOfMeasureColumn) {
      @if (isInsideTable && listOfMeasureColumn.length) {
        <tr
          nz-table-measure-row
          [listOfMeasureColumn]="listOfMeasureColumn"
          (listOfAutoWidth)="onListOfAutoWidthChange($event)"
        ></tr>
      }
    }
    <ng-content />
    @if (showEmpty$ | async) {
      <tr class="ant-table-placeholder" nz-table-fixed-row>
        <nz-embed-empty nzComponentName="table" [specificContent]="(noResult$ | async)!" />
      </tr>
    }
  `,
      host: {
        "[class.ant-table-tbody]": "isInsideTable"
      },
      imports: [AsyncPipe, NzTrMeasureComponent, NzTableFixedRowComponent, NzEmptyModule]
    }]
  }], () => [], null);
})();
var NzTableInnerScrollComponent = class _NzTableInnerScrollComponent {
  renderer = inject(Renderer2);
  ngZone = inject(NgZone);
  platform = inject(Platform);
  resizeService = inject(NzResizeService);
  destroyRef = inject(DestroyRef);
  data = [];
  scrollX = null;
  scrollY = null;
  contentTemplate = null;
  widthConfig = [];
  listOfColWidth = [];
  theadTemplate = null;
  tfootTemplate = null;
  tfootFixed = null;
  virtualTemplate = null;
  virtualItemSize = 0;
  virtualMaxBufferPx = 200;
  virtualMinBufferPx = 100;
  tableMainElement;
  virtualForTrackBy = (index) => index;
  tableHeaderElement;
  tableBodyElement;
  tableFootElement;
  cdkVirtualScrollViewport;
  headerStyleMap = {};
  bodyStyleMap = {};
  verticalScrollBarWidth = 0;
  noDataVirtualHeight = "182px";
  data$ = new Subject();
  scroll$ = new Subject();
  setScrollPositionClassName(clear = false) {
    const {
      scrollWidth,
      scrollLeft,
      clientWidth
    } = this.tableBodyElement.nativeElement;
    const leftClassName = "ant-table-ping-left";
    const rightClassName = "ant-table-ping-right";
    if (scrollWidth === clientWidth && scrollWidth !== 0 || clear) {
      this.renderer.removeClass(this.tableMainElement, leftClassName);
      this.renderer.removeClass(this.tableMainElement, rightClassName);
    } else if (scrollLeft === 0) {
      this.renderer.removeClass(this.tableMainElement, leftClassName);
      this.renderer.addClass(this.tableMainElement, rightClassName);
    } else if (scrollWidth === scrollLeft + clientWidth) {
      this.renderer.removeClass(this.tableMainElement, rightClassName);
      this.renderer.addClass(this.tableMainElement, leftClassName);
    } else {
      this.renderer.addClass(this.tableMainElement, leftClassName);
      this.renderer.addClass(this.tableMainElement, rightClassName);
    }
  }
  constructor() {
    this.destroyRef.onDestroy(() => {
      this.setScrollPositionClassName(true);
    });
  }
  ngOnChanges(changes) {
    const {
      scrollX,
      scrollY,
      data
    } = changes;
    if (scrollX || scrollY) {
      const hasVerticalScrollBar = this.verticalScrollBarWidth !== 0;
      this.headerStyleMap = {
        overflowX: "hidden",
        overflowY: this.scrollY && hasVerticalScrollBar ? "scroll" : "hidden"
      };
      this.bodyStyleMap = {
        overflowY: this.scrollY ? "scroll" : "hidden",
        overflowX: this.scrollX ? "auto" : null,
        maxHeight: this.scrollY
      };
      this.ngZone.runOutsideAngular(() => this.scroll$.next());
    }
    if (data) {
      this.ngZone.runOutsideAngular(() => this.data$.next());
    }
  }
  ngAfterViewInit() {
    if (this.platform.isBrowser) {
      const scrollEvent$ = this.scroll$.pipe(startWith(null), delay(0), switchMap(() => fromEventOutsideAngular(this.tableBodyElement.nativeElement, "scroll").pipe(startWith(true))));
      const resize$ = this.resizeService.connect();
      merge(scrollEvent$, resize$, this.data$, this.scroll$).pipe(startWith(true), delay(0), takeUntilDestroyed(this.destroyRef)).subscribe(() => this.setScrollPositionClassName());
      scrollEvent$.pipe(filter(() => !!this.scrollY)).subscribe(() => {
        this.tableHeaderElement.nativeElement.scrollLeft = this.tableBodyElement.nativeElement.scrollLeft;
        if (this.tableFootElement) {
          this.tableFootElement.nativeElement.scrollLeft = this.tableBodyElement.nativeElement.scrollLeft;
        }
      });
    }
  }
  static \u0275fac = function NzTableInnerScrollComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTableInnerScrollComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzTableInnerScrollComponent,
    selectors: [["nz-table-inner-scroll"]],
    viewQuery: function NzTableInnerScrollComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c4, 5, ElementRef)(_c5, 5, ElementRef)(_c6, 5, ElementRef)(CdkVirtualScrollViewport, 5, CdkVirtualScrollViewport);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tableHeaderElement = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tableBodyElement = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tableFootElement = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cdkVirtualScrollViewport = _t.first);
      }
    },
    hostAttrs: [1, "ant-table-container"],
    inputs: {
      data: "data",
      scrollX: "scrollX",
      scrollY: "scrollY",
      contentTemplate: "contentTemplate",
      widthConfig: "widthConfig",
      listOfColWidth: "listOfColWidth",
      theadTemplate: "theadTemplate",
      tfootTemplate: "tfootTemplate",
      tfootFixed: "tfootFixed",
      virtualTemplate: "virtualTemplate",
      virtualItemSize: "virtualItemSize",
      virtualMaxBufferPx: "virtualMaxBufferPx",
      virtualMinBufferPx: "virtualMinBufferPx",
      tableMainElement: "tableMainElement",
      virtualForTrackBy: "virtualForTrackBy",
      verticalScrollBarWidth: "verticalScrollBarWidth",
      noDataVirtualHeight: "noDataVirtualHeight"
    },
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 2,
    vars: 1,
    consts: [["tableHeaderElement", ""], ["tableBodyElement", ""], ["tableFootElement", ""], [1, "ant-table-content", 3, "style"], [1, "ant-table-header", "nz-table-hide-scrollbar"], ["nz-table-content", "", "tableLayout", "fixed", 3, "scrollX", "listOfColWidth", "theadTemplate", "tfootTemplate"], ["cdkScrollable", "", 1, "ant-table-body", 3, "style"], [3, "itemSize", "maxBufferPx", "minBufferPx", "height"], [1, "ant-table-summary", 3, "style"], ["cdkScrollable", "", 1, "ant-table-body"], ["nz-table-content", "", "tableLayout", "fixed", 3, "scrollX", "listOfColWidth", "contentTemplate"], [3, "itemSize", "maxBufferPx", "minBufferPx"], ["nz-table-content", "", "tableLayout", "fixed", 3, "scrollX", "listOfColWidth"], [4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-table-summary"], ["nz-table-content", "", "tableLayout", "fixed", 3, "scrollX", "listOfColWidth", "tfootTemplate"], [1, "ant-table-content"], ["nz-table-content", "", "tableLayout", "fixed", 3, "scrollX", "listOfColWidth", "theadTemplate", "contentTemplate", "tfootTemplate"]],
    template: function NzTableInnerScrollComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, NzTableInnerScrollComponent_Conditional_0_Template, 6, 8)(1, NzTableInnerScrollComponent_Conditional_1_Template, 3, 7, "div", 3);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.scrollY ? 0 : 1);
      }
    },
    dependencies: [NzTableContentComponent, ScrollingModule, CdkScrollable, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, NgTemplateOutlet, NzTbodyComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableInnerScrollComponent, [{
    type: Component,
    args: [{
      selector: "nz-table-inner-scroll",
      encapsulation: ViewEncapsulation.None,
      template: `
    @if (scrollY) {
      <div #tableHeaderElement [style]="headerStyleMap" class="ant-table-header nz-table-hide-scrollbar">
        <table
          nz-table-content
          tableLayout="fixed"
          [scrollX]="scrollX"
          [listOfColWidth]="listOfColWidth"
          [theadTemplate]="theadTemplate"
          [tfootTemplate]="tfootFixed === 'top' ? tfootTemplate : null"
        ></table>
      </div>
      @if (!virtualTemplate) {
        <div #tableBodyElement cdkScrollable class="ant-table-body" [style]="bodyStyleMap">
          <table
            nz-table-content
            tableLayout="fixed"
            [scrollX]="scrollX"
            [listOfColWidth]="listOfColWidth"
            [contentTemplate]="contentTemplate"
          ></table>
        </div>
      } @else {
        <cdk-virtual-scroll-viewport
          #tableBodyElement
          [itemSize]="virtualItemSize"
          [maxBufferPx]="virtualMaxBufferPx"
          [minBufferPx]="virtualMinBufferPx"
          [style.height]="data.length ? scrollY : noDataVirtualHeight"
        >
          <table nz-table-content tableLayout="fixed" [scrollX]="scrollX" [listOfColWidth]="listOfColWidth">
            <tbody>
              <ng-container *cdkVirtualFor="let item of data; let i = index; trackBy: virtualForTrackBy">
                <ng-template
                  [ngTemplateOutlet]="virtualTemplate"
                  [ngTemplateOutletContext]="{ $implicit: item, index: i }"
                />
              </ng-container>
            </tbody>
          </table>
        </cdk-virtual-scroll-viewport>
      }
      @if (tfootFixed === 'bottom') {
        <div #tableFootElement class="ant-table-summary" [style]="headerStyleMap">
          <table
            nz-table-content
            tableLayout="fixed"
            [scrollX]="scrollX"
            [listOfColWidth]="listOfColWidth"
            [tfootTemplate]="tfootTemplate"
          ></table>
        </div>
      }
    } @else {
      <div class="ant-table-content" #tableBodyElement [style]="bodyStyleMap">
        <table
          nz-table-content
          tableLayout="fixed"
          [scrollX]="scrollX"
          [listOfColWidth]="listOfColWidth"
          [theadTemplate]="theadTemplate"
          [contentTemplate]="contentTemplate"
          [tfootTemplate]="tfootTemplate"
        ></table>
      </div>
    }
  `,
      host: {
        class: "ant-table-container"
      },
      imports: [NzTableContentComponent, ScrollingModule, NgTemplateOutlet, NzTbodyComponent]
    }]
  }], () => [], {
    data: [{
      type: Input
    }],
    scrollX: [{
      type: Input
    }],
    scrollY: [{
      type: Input
    }],
    contentTemplate: [{
      type: Input
    }],
    widthConfig: [{
      type: Input
    }],
    listOfColWidth: [{
      type: Input
    }],
    theadTemplate: [{
      type: Input
    }],
    tfootTemplate: [{
      type: Input
    }],
    tfootFixed: [{
      type: Input
    }],
    virtualTemplate: [{
      type: Input
    }],
    virtualItemSize: [{
      type: Input
    }],
    virtualMaxBufferPx: [{
      type: Input
    }],
    virtualMinBufferPx: [{
      type: Input
    }],
    tableMainElement: [{
      type: Input
    }],
    virtualForTrackBy: [{
      type: Input
    }],
    tableHeaderElement: [{
      type: ViewChild,
      args: ["tableHeaderElement", {
        read: ElementRef
      }]
    }],
    tableBodyElement: [{
      type: ViewChild,
      args: ["tableBodyElement", {
        read: ElementRef
      }]
    }],
    tableFootElement: [{
      type: ViewChild,
      args: ["tableFootElement", {
        read: ElementRef
      }]
    }],
    cdkVirtualScrollViewport: [{
      type: ViewChild,
      args: [CdkVirtualScrollViewport, {
        read: CdkVirtualScrollViewport
      }]
    }],
    verticalScrollBarWidth: [{
      type: Input
    }],
    noDataVirtualHeight: [{
      type: Input
    }]
  });
})();
var NzTableVirtualScrollDirective = class _NzTableVirtualScrollDirective {
  templateRef = inject(TemplateRef);
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
  static \u0275fac = function NzTableVirtualScrollDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTableVirtualScrollDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzTableVirtualScrollDirective,
    selectors: [["", "nz-virtual-scroll", ""]],
    exportAs: ["nzVirtualScroll"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableVirtualScrollDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-virtual-scroll]",
      exportAs: "nzVirtualScroll"
    }]
  }], null, null);
})();
var NzTableTitleFooterComponent = class _NzTableTitleFooterComponent {
  title = null;
  footer = null;
  static \u0275fac = function NzTableTitleFooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTableTitleFooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzTableTitleFooterComponent,
    selectors: [["nz-table-title-footer"]],
    hostVars: 4,
    hostBindings: function NzTableTitleFooterComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ant-table-title", ctx.title !== null)("ant-table-footer", ctx.footer !== null);
      }
    },
    inputs: {
      title: "title",
      footer: "footer"
    },
    decls: 2,
    vars: 2,
    consts: [[4, "nzStringTemplateOutlet"]],
    template: function NzTableTitleFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, NzTableTitleFooterComponent_ng_container_0_Template, 2, 1, "ng-container", 0)(1, NzTableTitleFooterComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("nzStringTemplateOutlet", ctx.title);
        \u0275\u0275advance();
        \u0275\u0275property("nzStringTemplateOutlet", ctx.footer);
      }
    },
    dependencies: [NzOutletModule, NzStringTemplateOutletDirective],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableTitleFooterComponent, [{
    type: Component,
    args: [{
      selector: "nz-table-title-footer",
      encapsulation: ViewEncapsulation.None,
      template: `
    <ng-container *nzStringTemplateOutlet="title">{{ title }}</ng-container>
    <ng-container *nzStringTemplateOutlet="footer">{{ footer }}</ng-container>
  `,
      host: {
        "[class.ant-table-title]": `title !== null`,
        "[class.ant-table-footer]": `footer !== null`
      },
      imports: [NzOutletModule]
    }]
  }], null, {
    title: [{
      type: Input
    }],
    footer: [{
      type: Input
    }]
  });
})();
var NZ_CONFIG_MODULE_NAME2 = "table";
var NzTableComponent = (() => {
  let _nzLoadingIndicator_decorators;
  let _nzLoadingIndicator_initializers = [];
  let _nzLoadingIndicator_extraInitializers = [];
  let _nzBordered_decorators;
  let _nzBordered_initializers = [];
  let _nzBordered_extraInitializers = [];
  let _nzSize_decorators;
  let _nzSize_initializers = [];
  let _nzSize_extraInitializers = [];
  let _nzShowSizeChanger_decorators;
  let _nzShowSizeChanger_initializers = [];
  let _nzShowSizeChanger_extraInitializers = [];
  let _nzHideOnSinglePage_decorators;
  let _nzHideOnSinglePage_initializers = [];
  let _nzHideOnSinglePage_extraInitializers = [];
  let _nzShowQuickJumper_decorators;
  let _nzShowQuickJumper_initializers = [];
  let _nzShowQuickJumper_extraInitializers = [];
  let _nzSimple_decorators;
  let _nzSimple_initializers = [];
  let _nzSimple_extraInitializers = [];
  return class NzTableComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzLoadingIndicator_decorators = [WithConfig()];
      _nzBordered_decorators = [WithConfig()];
      _nzSize_decorators = [WithConfig()];
      _nzShowSizeChanger_decorators = [WithConfig()];
      _nzHideOnSinglePage_decorators = [WithConfig()];
      _nzShowQuickJumper_decorators = [WithConfig()];
      _nzSimple_decorators = [WithConfig()];
      __esDecorate(null, null, _nzLoadingIndicator_decorators, {
        kind: "field",
        name: "nzLoadingIndicator",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzLoadingIndicator" in obj,
          get: (obj) => obj.nzLoadingIndicator,
          set: (obj, value) => {
            obj.nzLoadingIndicator = value;
          }
        },
        metadata: _metadata
      }, _nzLoadingIndicator_initializers, _nzLoadingIndicator_extraInitializers);
      __esDecorate(null, null, _nzBordered_decorators, {
        kind: "field",
        name: "nzBordered",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzBordered" in obj,
          get: (obj) => obj.nzBordered,
          set: (obj, value) => {
            obj.nzBordered = value;
          }
        },
        metadata: _metadata
      }, _nzBordered_initializers, _nzBordered_extraInitializers);
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
      __esDecorate(null, null, _nzShowSizeChanger_decorators, {
        kind: "field",
        name: "nzShowSizeChanger",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzShowSizeChanger" in obj,
          get: (obj) => obj.nzShowSizeChanger,
          set: (obj, value) => {
            obj.nzShowSizeChanger = value;
          }
        },
        metadata: _metadata
      }, _nzShowSizeChanger_initializers, _nzShowSizeChanger_extraInitializers);
      __esDecorate(null, null, _nzHideOnSinglePage_decorators, {
        kind: "field",
        name: "nzHideOnSinglePage",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzHideOnSinglePage" in obj,
          get: (obj) => obj.nzHideOnSinglePage,
          set: (obj, value) => {
            obj.nzHideOnSinglePage = value;
          }
        },
        metadata: _metadata
      }, _nzHideOnSinglePage_initializers, _nzHideOnSinglePage_extraInitializers);
      __esDecorate(null, null, _nzShowQuickJumper_decorators, {
        kind: "field",
        name: "nzShowQuickJumper",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzShowQuickJumper" in obj,
          get: (obj) => obj.nzShowQuickJumper,
          set: (obj, value) => {
            obj.nzShowQuickJumper = value;
          }
        },
        metadata: _metadata
      }, _nzShowQuickJumper_initializers, _nzShowQuickJumper_extraInitializers);
      __esDecorate(null, null, _nzSimple_decorators, {
        kind: "field",
        name: "nzSimple",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzSimple" in obj,
          get: (obj) => obj.nzSimple,
          set: (obj, value) => {
            obj.nzSimple = value;
          }
        },
        metadata: _metadata
      }, _nzSimple_initializers, _nzSimple_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    _nzModuleName = NZ_CONFIG_MODULE_NAME2;
    elementRef = inject(ElementRef);
    nzResizeObserver = inject(NzResizeObserver);
    cdr = inject(ChangeDetectorRef);
    nzTableStyleService = inject(NzTableStyleService);
    nzTableDataService = inject(NzTableDataService);
    dir = inject(Directionality).valueSignal;
    destroyRef = inject(DestroyRef);
    nzTableLayout = "auto";
    nzShowTotal = null;
    nzItemRender = null;
    nzTitle = null;
    nzFooter = null;
    nzNoResult = void 0;
    nzPageSizeOptions = [10, 20, 30, 40, 50];
    nzVirtualItemSize = 0;
    nzVirtualMaxBufferPx = 200;
    nzVirtualMinBufferPx = 100;
    nzVirtualForTrackBy = (index) => index;
    nzLoadingDelay = 0;
    nzPageIndex = 1;
    nzPageSize = 10;
    nzTotal = 0;
    nzWidthConfig = [];
    nzData = [];
    nzCustomColumn = [];
    nzPaginationPosition = "bottom";
    nzScroll = {
      x: null,
      y: null
    };
    noDataVirtualHeight = "182px";
    nzPaginationType = "default";
    nzFrontPagination = true;
    nzTemplateMode = false;
    nzShowPagination = true;
    nzLoading = false;
    nzOuterBordered = false;
    nzLoadingIndicator = __runInitializers(this, _nzLoadingIndicator_initializers, null);
    nzBordered = (__runInitializers(this, _nzLoadingIndicator_extraInitializers), __runInitializers(this, _nzBordered_initializers, false));
    nzSize = (__runInitializers(this, _nzBordered_extraInitializers), __runInitializers(this, _nzSize_initializers, "default"));
    nzShowSizeChanger = (__runInitializers(this, _nzSize_extraInitializers), __runInitializers(this, _nzShowSizeChanger_initializers, false));
    nzHideOnSinglePage = (__runInitializers(this, _nzShowSizeChanger_extraInitializers), __runInitializers(this, _nzHideOnSinglePage_initializers, false));
    nzShowQuickJumper = (__runInitializers(this, _nzHideOnSinglePage_extraInitializers), __runInitializers(this, _nzShowQuickJumper_initializers, false));
    nzSimple = (__runInitializers(this, _nzShowQuickJumper_extraInitializers), __runInitializers(this, _nzSimple_initializers, false));
    nzPageSizeChange = (__runInitializers(this, _nzSimple_extraInitializers), new EventEmitter());
    nzPageIndexChange = new EventEmitter();
    nzQueryParams = new EventEmitter();
    nzCurrentPageDataChange = new EventEmitter();
    nzCustomColumnChange = new EventEmitter();
    /** public data for ngFor tr */
    data = [];
    cdkVirtualScrollViewport;
    scrollX = null;
    scrollY = null;
    theadTemplate = null;
    tfootTemplate = null;
    tfootFixed = null;
    listOfAutoColWidth = [];
    listOfManualColWidth = [];
    hasFixLeft = false;
    hasFixRight = false;
    showPagination = true;
    templateMode$ = new BehaviorSubject(false);
    nzVirtualScrollDirective;
    nzTableInnerScrollComponent;
    verticalScrollBarWidth = 0;
    onPageSizeChange(size) {
      this.nzTableDataService.updatePageSize(size);
    }
    onPageIndexChange(index) {
      this.nzTableDataService.updatePageIndex(index);
    }
    constructor() {
      onConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME2, () => this.cdr.markForCheck());
    }
    ngOnInit() {
      const {
        pageIndexDistinct$,
        pageSizeDistinct$,
        listOfCurrentPageData$,
        total$,
        queryParams$,
        listOfCustomColumn$
      } = this.nzTableDataService;
      const {
        theadTemplate$,
        tfootTemplate$,
        tfootFixed$,
        hasFixLeft$,
        hasFixRight$
      } = this.nzTableStyleService;
      queryParams$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(this.nzQueryParams);
      pageIndexDistinct$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((pageIndex) => {
        if (pageIndex !== this.nzPageIndex) {
          this.nzPageIndex = pageIndex;
          this.nzPageIndexChange.next(pageIndex);
        }
      });
      pageSizeDistinct$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((pageSize) => {
        if (pageSize !== this.nzPageSize) {
          this.nzPageSize = pageSize;
          this.nzPageSizeChange.next(pageSize);
        }
      });
      total$.pipe(takeUntilDestroyed(this.destroyRef), filter((total) => this.nzFrontPagination && total !== this.nzTotal)).subscribe((total) => {
        this.nzTotal = total;
        this.cdr.markForCheck();
      });
      listOfCurrentPageData$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) => {
        this.data = data;
        this.nzCurrentPageDataChange.next(data);
        this.cdr.markForCheck();
      });
      listOfCustomColumn$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) => {
        this.nzCustomColumn = data;
        this.nzCustomColumnChange.next(data);
        this.cdr.markForCheck();
      });
      theadTemplate$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((theadTemplate) => {
        this.theadTemplate = theadTemplate;
        this.cdr.markForCheck();
      });
      combineLatest([tfootTemplate$, tfootFixed$]).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(([tfootTemplate, tfootFixed]) => {
        this.tfootTemplate = tfootTemplate;
        this.tfootFixed = tfootFixed;
        this.cdr.markForCheck();
      });
      hasFixLeft$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((hasFixLeft) => {
        this.hasFixLeft = hasFixLeft;
        this.cdr.markForCheck();
      });
      hasFixRight$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((hasFixRight) => {
        this.hasFixRight = hasFixRight;
        this.cdr.markForCheck();
      });
      combineLatest([total$, this.templateMode$]).pipe(map(([total, templateMode]) => total === 0 && !templateMode), takeUntilDestroyed(this.destroyRef)).subscribe((empty) => {
        this.nzTableStyleService.setShowEmpty(empty);
      });
      this.verticalScrollBarWidth = measureScrollbar("vertical");
      this.nzTableStyleService.listOfListOfThWidthPx$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((listOfWidth) => {
        this.listOfAutoColWidth = listOfWidth;
        this.cdr.markForCheck();
      });
      this.nzTableStyleService.manualWidthConfigPx$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((listOfWidth) => {
        this.listOfManualColWidth = listOfWidth;
        this.cdr.markForCheck();
      });
    }
    ngOnChanges(changes) {
      const {
        nzScroll,
        nzPageIndex,
        nzPageSize,
        nzFrontPagination,
        nzData,
        nzCustomColumn,
        nzWidthConfig,
        nzNoResult,
        nzTemplateMode
      } = changes;
      if (nzPageIndex) {
        this.nzTableDataService.updatePageIndex(this.nzPageIndex);
      }
      if (nzPageSize) {
        this.nzTableDataService.updatePageSize(this.nzPageSize);
      }
      if (nzData) {
        this.nzData = this.nzData || [];
        this.nzTableDataService.updateListOfData(this.nzData);
      }
      if (nzCustomColumn) {
        this.nzCustomColumn = this.nzCustomColumn || [];
        this.nzTableDataService.updateListOfCustomColumn(this.nzCustomColumn);
      }
      if (nzFrontPagination) {
        this.nzTableDataService.updateFrontPagination(this.nzFrontPagination);
      }
      if (nzScroll) {
        this.setScrollOnChanges();
      }
      if (nzWidthConfig) {
        this.nzTableStyleService.setTableWidthConfig(this.nzWidthConfig);
      }
      if (nzTemplateMode) {
        this.templateMode$.next(this.nzTemplateMode);
      }
      if (nzNoResult) {
        this.nzTableStyleService.setNoResult(this.nzNoResult);
      }
      this.updateShowPagination();
    }
    ngAfterViewInit() {
      this.nzResizeObserver.observe(this.elementRef).pipe(map(([entry]) => {
        const {
          width
        } = entry.target.getBoundingClientRect();
        const scrollBarWidth = this.scrollY ? this.verticalScrollBarWidth : 0;
        return Math.floor(width - scrollBarWidth);
      }), takeUntilDestroyed(this.destroyRef)).subscribe(this.nzTableStyleService.hostWidth$);
      if (this.nzTableInnerScrollComponent && this.nzTableInnerScrollComponent.cdkVirtualScrollViewport) {
        this.cdkVirtualScrollViewport = this.nzTableInnerScrollComponent.cdkVirtualScrollViewport;
      }
    }
    setScrollOnChanges() {
      this.scrollX = this.nzScroll && this.nzScroll.x || null;
      this.scrollY = this.nzScroll && this.nzScroll.y || null;
      this.nzTableStyleService.setScroll(this.scrollX, this.scrollY);
    }
    updateShowPagination() {
      this.showPagination = this.nzHideOnSinglePage && this.nzData.length > this.nzPageSize || this.nzData.length > 0 && !this.nzHideOnSinglePage || !this.nzFrontPagination && this.nzTotal > this.nzPageSize;
    }
    static \u0275fac = function NzTableComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzTableComponent2)();
    };
    static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: NzTableComponent2,
      selectors: [["nz-table"]],
      contentQueries: function NzTableComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, NzTableVirtualScrollDirective, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzVirtualScrollDirective = _t.first);
        }
      },
      viewQuery: function NzTableComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(NzTableInnerScrollComponent, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzTableInnerScrollComponent = _t.first);
        }
      },
      hostAttrs: [1, "ant-table-wrapper"],
      hostVars: 4,
      hostBindings: function NzTableComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("ant-table-wrapper-rtl", ctx.dir() === "rtl")("ant-table-custom-column", ctx.nzCustomColumn.length);
        }
      },
      inputs: {
        nzTableLayout: "nzTableLayout",
        nzShowTotal: "nzShowTotal",
        nzItemRender: "nzItemRender",
        nzTitle: "nzTitle",
        nzFooter: "nzFooter",
        nzNoResult: "nzNoResult",
        nzPageSizeOptions: "nzPageSizeOptions",
        nzVirtualItemSize: "nzVirtualItemSize",
        nzVirtualMaxBufferPx: "nzVirtualMaxBufferPx",
        nzVirtualMinBufferPx: "nzVirtualMinBufferPx",
        nzVirtualForTrackBy: "nzVirtualForTrackBy",
        nzLoadingDelay: "nzLoadingDelay",
        nzPageIndex: "nzPageIndex",
        nzPageSize: "nzPageSize",
        nzTotal: "nzTotal",
        nzWidthConfig: "nzWidthConfig",
        nzData: "nzData",
        nzCustomColumn: "nzCustomColumn",
        nzPaginationPosition: "nzPaginationPosition",
        nzScroll: "nzScroll",
        noDataVirtualHeight: "noDataVirtualHeight",
        nzPaginationType: "nzPaginationType",
        nzFrontPagination: [2, "nzFrontPagination", "nzFrontPagination", booleanAttribute],
        nzTemplateMode: [2, "nzTemplateMode", "nzTemplateMode", booleanAttribute],
        nzShowPagination: [2, "nzShowPagination", "nzShowPagination", booleanAttribute],
        nzLoading: [2, "nzLoading", "nzLoading", booleanAttribute],
        nzOuterBordered: [2, "nzOuterBordered", "nzOuterBordered", booleanAttribute],
        nzLoadingIndicator: "nzLoadingIndicator",
        nzBordered: [2, "nzBordered", "nzBordered", booleanAttribute],
        nzSize: "nzSize",
        nzShowSizeChanger: [2, "nzShowSizeChanger", "nzShowSizeChanger", booleanAttribute],
        nzHideOnSinglePage: [2, "nzHideOnSinglePage", "nzHideOnSinglePage", booleanAttribute],
        nzShowQuickJumper: [2, "nzShowQuickJumper", "nzShowQuickJumper", booleanAttribute],
        nzSimple: [2, "nzSimple", "nzSimple", booleanAttribute]
      },
      outputs: {
        nzPageSizeChange: "nzPageSizeChange",
        nzPageIndexChange: "nzPageIndexChange",
        nzQueryParams: "nzQueryParams",
        nzCurrentPageDataChange: "nzCurrentPageDataChange",
        nzCustomColumnChange: "nzCustomColumnChange"
      },
      exportAs: ["nzTable"],
      features: [\u0275\u0275ProvidersFeature([NzTableStyleService, NzTableDataService]), \u0275\u0275NgOnChangesFeature],
      ngContentSelectors: _c02,
      decls: 13,
      vars: 26,
      consts: [["tableMainElement", ""], ["paginationTemplate", ""], ["contentTemplate", ""], [3, "nzDelay", "nzSpinning", "nzIndicator"], [3, "ngTemplateOutlet"], [1, "ant-table"], [3, "title"], [3, "data", "scrollX", "scrollY", "contentTemplate", "listOfColWidth", "theadTemplate", "tfootTemplate", "tfootFixed", "verticalScrollBarWidth", "virtualTemplate", "virtualItemSize", "virtualMaxBufferPx", "virtualMinBufferPx", "tableMainElement", "virtualForTrackBy", "noDataVirtualHeight"], [3, "tableLayout", "listOfColWidth", "theadTemplate", "contentTemplate", "tfootTemplate"], [3, "footer"], [1, "ant-table-pagination", "ant-table-pagination-right", 3, "hidden", "nzShowSizeChanger", "nzPageSizeOptions", "nzItemRender", "nzShowQuickJumper", "nzHideOnSinglePage", "nzShowTotal", "nzSize", "nzPageSize", "nzTotal", "nzSimple", "nzPageIndex"], [1, "ant-table-pagination", "ant-table-pagination-right", 3, "nzPageSizeChange", "nzPageIndexChange", "hidden", "nzShowSizeChanger", "nzPageSizeOptions", "nzItemRender", "nzShowQuickJumper", "nzHideOnSinglePage", "nzShowTotal", "nzSize", "nzPageSize", "nzTotal", "nzSimple", "nzPageIndex"]],
      template: function NzTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275elementStart(0, "nz-spin", 3);
          \u0275\u0275conditionalCreate(1, NzTableComponent_Conditional_1_Template, 1, 1, null, 4);
          \u0275\u0275elementStart(2, "div", 5, 0);
          \u0275\u0275conditionalCreate(4, NzTableComponent_Conditional_4_Template, 1, 1, "nz-table-title-footer", 6);
          \u0275\u0275conditionalCreate(5, NzTableComponent_Conditional_5_Template, 1, 16, "nz-table-inner-scroll", 7)(6, NzTableComponent_Conditional_6_Template, 1, 5, "nz-table-inner-default", 8);
          \u0275\u0275conditionalCreate(7, NzTableComponent_Conditional_7_Template, 1, 1, "nz-table-title-footer", 9);
          \u0275\u0275elementEnd();
          \u0275\u0275conditionalCreate(8, NzTableComponent_Conditional_8_Template, 1, 1, null, 4);
          \u0275\u0275elementEnd();
          \u0275\u0275template(9, NzTableComponent_ng_template_9_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(11, NzTableComponent_ng_template_11_Template, 1, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
        }
        if (rf & 2) {
          \u0275\u0275property("nzDelay", ctx.nzLoadingDelay)("nzSpinning", ctx.nzLoading)("nzIndicator", ctx.nzLoadingIndicator);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.nzPaginationPosition === "both" || ctx.nzPaginationPosition === "top" ? 1 : -1);
          \u0275\u0275advance();
          \u0275\u0275classProp("ant-table-rtl", ctx.dir() === "rtl")("ant-table-fixed-header", ctx.nzData.length && ctx.scrollY)("ant-table-fixed-column", ctx.scrollX)("ant-table-has-fix-left", ctx.hasFixLeft)("ant-table-has-fix-right", ctx.hasFixRight)("ant-table-bordered", ctx.nzBordered)("nz-table-out-bordered", ctx.nzOuterBordered && !ctx.nzBordered)("ant-table-middle", ctx.nzSize === "middle")("ant-table-small", ctx.nzSize === "small");
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx.nzTitle ? 4 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.scrollY || ctx.scrollX ? 5 : 6);
          \u0275\u0275advance(2);
          \u0275\u0275conditional(ctx.nzFooter ? 7 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.nzPaginationPosition === "both" || ctx.nzPaginationPosition === "bottom" ? 8 : -1);
        }
      },
      dependencies: [NzSpinComponent, NgTemplateOutlet, NzTableTitleFooterComponent, NzTableInnerScrollComponent, NzTableInnerDefaultComponent, NzPaginationModule, NzPaginationComponent],
      encapsulation: 2
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableComponent, [{
    type: Component,
    args: [{
      selector: "nz-table",
      exportAs: "nzTable",
      providers: [NzTableStyleService, NzTableDataService],
      encapsulation: ViewEncapsulation.None,
      template: `
    <nz-spin [nzDelay]="nzLoadingDelay" [nzSpinning]="nzLoading" [nzIndicator]="nzLoadingIndicator">
      @if (nzPaginationPosition === 'both' || nzPaginationPosition === 'top') {
        <ng-template [ngTemplateOutlet]="paginationTemplate" />
      }
      <div
        #tableMainElement
        class="ant-table"
        [class.ant-table-rtl]="dir() === 'rtl'"
        [class.ant-table-fixed-header]="nzData.length && scrollY"
        [class.ant-table-fixed-column]="scrollX"
        [class.ant-table-has-fix-left]="hasFixLeft"
        [class.ant-table-has-fix-right]="hasFixRight"
        [class.ant-table-bordered]="nzBordered"
        [class.nz-table-out-bordered]="nzOuterBordered && !nzBordered"
        [class.ant-table-middle]="nzSize === 'middle'"
        [class.ant-table-small]="nzSize === 'small'"
      >
        @if (nzTitle) {
          <nz-table-title-footer [title]="nzTitle" />
        }
        @if (scrollY || scrollX) {
          <nz-table-inner-scroll
            [data]="data"
            [scrollX]="scrollX"
            [scrollY]="scrollY"
            [contentTemplate]="contentTemplate"
            [listOfColWidth]="listOfAutoColWidth"
            [theadTemplate]="theadTemplate"
            [tfootTemplate]="tfootTemplate"
            [tfootFixed]="tfootFixed"
            [verticalScrollBarWidth]="verticalScrollBarWidth"
            [virtualTemplate]="nzVirtualScrollDirective ? nzVirtualScrollDirective.templateRef : null"
            [virtualItemSize]="nzVirtualItemSize"
            [virtualMaxBufferPx]="nzVirtualMaxBufferPx"
            [virtualMinBufferPx]="nzVirtualMinBufferPx"
            [tableMainElement]="tableMainElement"
            [virtualForTrackBy]="nzVirtualForTrackBy"
            [noDataVirtualHeight]="noDataVirtualHeight"
          />
        } @else {
          <nz-table-inner-default
            [tableLayout]="nzTableLayout"
            [listOfColWidth]="listOfManualColWidth"
            [theadTemplate]="theadTemplate"
            [contentTemplate]="contentTemplate"
            [tfootTemplate]="tfootTemplate"
          />
        }
        @if (nzFooter) {
          <nz-table-title-footer [footer]="nzFooter" />
        }
      </div>
      @if (nzPaginationPosition === 'both' || nzPaginationPosition === 'bottom') {
        <ng-template [ngTemplateOutlet]="paginationTemplate" />
      }
    </nz-spin>
    <ng-template #paginationTemplate>
      @if (nzShowPagination && data.length) {
        <nz-pagination
          [hidden]="!showPagination"
          class="ant-table-pagination ant-table-pagination-right"
          [nzShowSizeChanger]="nzShowSizeChanger"
          [nzPageSizeOptions]="nzPageSizeOptions"
          [nzItemRender]="nzItemRender!"
          [nzShowQuickJumper]="nzShowQuickJumper"
          [nzHideOnSinglePage]="nzHideOnSinglePage"
          [nzShowTotal]="nzShowTotal"
          [nzSize]="nzPaginationType === 'small' ? 'small' : nzSize === 'default' ? 'default' : 'small'"
          [nzPageSize]="nzPageSize"
          [nzTotal]="nzTotal"
          [nzSimple]="nzSimple"
          [nzPageIndex]="nzPageIndex"
          (nzPageSizeChange)="onPageSizeChange($event)"
          (nzPageIndexChange)="onPageIndexChange($event)"
        />
      }
    </ng-template>
    <ng-template #contentTemplate>
      <ng-content />
    </ng-template>
  `,
      host: {
        class: "ant-table-wrapper",
        "[class.ant-table-wrapper-rtl]": 'dir() === "rtl"',
        "[class.ant-table-custom-column]": `nzCustomColumn.length`
      },
      imports: [NzSpinComponent, NgTemplateOutlet, NzTableTitleFooterComponent, NzTableInnerScrollComponent, NzTableInnerDefaultComponent, NzPaginationModule]
    }]
  }], () => [], {
    nzTableLayout: [{
      type: Input
    }],
    nzShowTotal: [{
      type: Input
    }],
    nzItemRender: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzFooter: [{
      type: Input
    }],
    nzNoResult: [{
      type: Input
    }],
    nzPageSizeOptions: [{
      type: Input
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
    nzVirtualForTrackBy: [{
      type: Input
    }],
    nzLoadingDelay: [{
      type: Input
    }],
    nzPageIndex: [{
      type: Input
    }],
    nzPageSize: [{
      type: Input
    }],
    nzTotal: [{
      type: Input
    }],
    nzWidthConfig: [{
      type: Input
    }],
    nzData: [{
      type: Input
    }],
    nzCustomColumn: [{
      type: Input
    }],
    nzPaginationPosition: [{
      type: Input
    }],
    nzScroll: [{
      type: Input
    }],
    noDataVirtualHeight: [{
      type: Input
    }],
    nzPaginationType: [{
      type: Input
    }],
    nzFrontPagination: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzTemplateMode: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowPagination: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzLoading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzOuterBordered: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzLoadingIndicator: [{
      type: Input
    }],
    nzBordered: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzSize: [{
      type: Input
    }],
    nzShowSizeChanger: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzHideOnSinglePage: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowQuickJumper: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzSimple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzPageSizeChange: [{
      type: Output
    }],
    nzPageIndexChange: [{
      type: Output
    }],
    nzQueryParams: [{
      type: Output
    }],
    nzCurrentPageDataChange: [{
      type: Output
    }],
    nzCustomColumnChange: [{
      type: Output
    }],
    nzVirtualScrollDirective: [{
      type: ContentChild,
      args: [NzTableVirtualScrollDirective, {
        static: false
      }]
    }],
    nzTableInnerScrollComponent: [{
      type: ViewChild,
      args: [NzTableInnerScrollComponent]
    }]
  });
})();
function fixedAttribute(value) {
  return value === "top" || value === "bottom" ? value : booleanAttribute(value) ? "bottom" : null;
}
var NzTfootSummaryComponent = class _NzTfootSummaryComponent {
  nzFixed = null;
  templateRef;
  nzTableStyleService = inject(NzTableStyleService, {
    optional: true
  });
  isInsideTable = !!this.nzTableStyleService;
  ngOnInit() {
    this.nzTableStyleService?.setTfootTemplate(this.templateRef);
  }
  ngOnChanges(changes) {
    const {
      nzFixed
    } = changes;
    this.nzTableStyleService?.setTfootFixed(nzFixed.currentValue);
  }
  static \u0275fac = function NzTfootSummaryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTfootSummaryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzTfootSummaryComponent,
    selectors: [["tfoot", "nzSummary", ""]],
    viewQuery: function NzTfootSummaryComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c8, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templateRef = _t.first);
      }
    },
    hostVars: 2,
    hostBindings: function NzTfootSummaryComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ant-table-summary", !ctx.isInsideTable || !ctx.nzFixed);
      }
    },
    inputs: {
      nzFixed: [2, "nzFixed", "nzFixed", fixedAttribute]
    },
    features: [\u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c02,
    decls: 3,
    vars: 1,
    consts: [["contentTemplate", ""], [3, "ngTemplateOutlet"]],
    template: function NzTfootSummaryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, NzTfootSummaryComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275conditionalCreate(2, NzTfootSummaryComponent_Conditional_2_Template, 1, 1, null, 1);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.isInsideTable || !ctx.nzFixed ? 2 : -1);
      }
    },
    dependencies: [NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTfootSummaryComponent, [{
    type: Component,
    args: [{
      selector: "tfoot[nzSummary]",
      encapsulation: ViewEncapsulation.None,
      template: `
    <ng-template #contentTemplate>
      <ng-content />
    </ng-template>
    @if (!isInsideTable || !nzFixed) {
      <ng-template [ngTemplateOutlet]="contentTemplate" />
    }
  `,
      imports: [NgTemplateOutlet],
      host: {
        "[class.ant-table-summary]": "!isInsideTable || !nzFixed"
      }
    }]
  }], null, {
    nzFixed: [{
      type: Input,
      args: [{
        transform: fixedAttribute
      }]
    }],
    templateRef: [{
      type: ViewChild,
      args: ["contentTemplate", {
        static: true
      }]
    }]
  });
})();
var NzTrDirective = class _NzTrDirective {
  destroyRef = inject(DestroyRef);
  listOfNzThDirective;
  listOfCellFixedDirective;
  listOfFixedColumns$ = new ReplaySubject(1);
  listOfColumns$ = new ReplaySubject(1);
  listOfFixedColumnsChanges$ = this.listOfFixedColumns$.pipe(switchMap((list) => merge(this.listOfFixedColumns$, ...list.map((c) => c.changes$)).pipe(mergeMap(() => this.listOfFixedColumns$))), takeUntilDestroyed(this.destroyRef));
  listOfFixedLeftColumnChanges$ = this.listOfFixedColumnsChanges$.pipe(map((list) => list.filter((item) => item.nzLeft !== false)));
  listOfFixedRightColumnChanges$ = this.listOfFixedColumnsChanges$.pipe(map((list) => list.filter((item) => item.nzRight !== false)));
  listOfColumnsChanges$ = this.listOfColumns$.pipe(switchMap((list) => merge(this.listOfColumns$, ...list.map((c) => c.changes$)).pipe(mergeMap(() => this.listOfColumns$))), takeUntilDestroyed(this.destroyRef));
  nzTableStyleService = inject(NzTableStyleService, {
    optional: true
  });
  isInsideTable = !!this.nzTableStyleService;
  ngAfterContentInit() {
    if (this.nzTableStyleService) {
      this.listOfCellFixedDirective.changes.pipe(startWith(this.listOfCellFixedDirective), takeUntilDestroyed(this.destroyRef)).subscribe(this.listOfFixedColumns$);
      this.listOfNzThDirective.changes.pipe(startWith(this.listOfNzThDirective), takeUntilDestroyed(this.destroyRef)).subscribe(this.listOfColumns$);
      this.listOfFixedLeftColumnChanges$.subscribe((listOfFixedLeft) => {
        listOfFixedLeft.forEach((cell) => cell.setIsLastLeft(cell === listOfFixedLeft[listOfFixedLeft.length - 1]));
      });
      this.listOfFixedRightColumnChanges$.subscribe((listOfFixedRight) => {
        listOfFixedRight.forEach((cell) => cell.setIsFirstRight(cell === listOfFixedRight[0]));
      });
      combineLatest([this.nzTableStyleService.listOfListOfThWidth$, this.listOfFixedLeftColumnChanges$]).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(([listOfAutoWidth, listOfLeftCell]) => {
        listOfLeftCell.forEach((cell, index) => {
          if (cell.isAutoLeft) {
            const currentArray = listOfLeftCell.slice(0, index);
            const count = currentArray.reduce((pre, cur) => pre + (cur.colspan || cur.colSpan || 1), 0);
            const width = listOfAutoWidth.slice(0, count).reduce((pre, cur) => pre + cur, 0);
            cell.setAutoLeftWidth(`${width}px`);
          }
        });
      });
      combineLatest([this.nzTableStyleService.listOfListOfThWidth$, this.listOfFixedRightColumnChanges$]).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(([listOfAutoWidth, listOfRightCell]) => {
        listOfRightCell.forEach((_, index) => {
          const cell = listOfRightCell[listOfRightCell.length - index - 1];
          if (cell.isAutoRight) {
            const currentArray = listOfRightCell.slice(listOfRightCell.length - index, listOfRightCell.length);
            const count = currentArray.reduce((pre, cur) => pre + (cur.colspan || cur.colSpan || 1), 0);
            const width = listOfAutoWidth.slice(listOfAutoWidth.length - count, listOfAutoWidth.length).reduce((pre, cur) => pre + cur, 0);
            cell.setAutoRightWidth(`${width}px`);
          }
        });
      });
    }
  }
  static \u0275fac = function NzTrDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTrDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzTrDirective,
    selectors: [["tr", 3, "nz-table-measure-row", "", 3, "nzExpand", "", 3, "nz-table-fixed-row", ""]],
    contentQueries: function NzTrDirective_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, NzThMeasureDirective, 4)(dirIndex, NzCellFixedDirective, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listOfNzThDirective = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listOfCellFixedDirective = _t);
      }
    },
    hostVars: 2,
    hostBindings: function NzTrDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ant-table-row", ctx.isInsideTable);
      }
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTrDirective, [{
    type: Directive,
    args: [{
      selector: "tr:not([nz-table-measure-row]):not([nzExpand]):not([nz-table-fixed-row])",
      host: {
        "[class.ant-table-row]": "isInsideTable"
      }
    }]
  }], null, {
    listOfNzThDirective: [{
      type: ContentChildren,
      args: [NzThMeasureDirective]
    }],
    listOfCellFixedDirective: [{
      type: ContentChildren,
      args: [NzCellFixedDirective]
    }]
  });
})();
var NzTheadComponent = class _NzTheadComponent {
  nzTableStyleService = inject(NzTableStyleService, {
    optional: true
  });
  nzTableDataService = inject(NzTableDataService, {
    optional: true
  });
  destroyRef = inject(DestroyRef);
  el = inject(ElementRef).nativeElement;
  renderer = inject(Renderer2);
  isInsideTable = !!this.nzTableStyleService;
  templateRef;
  listOfNzTrDirective;
  listOfNzThAddOnComponent;
  nzSortOrderChange = new EventEmitter();
  ngOnInit() {
    if (this.nzTableStyleService) {
      this.nzTableStyleService.setTheadTemplate(this.templateRef);
    }
  }
  ngAfterContentInit() {
    if (this.nzTableStyleService) {
      const firstTableRow$ = this.listOfNzTrDirective.changes.pipe(startWith(this.listOfNzTrDirective), map((item) => item && item.first), takeUntilDestroyed(this.destroyRef));
      const listOfColumnsChanges$ = firstTableRow$.pipe(switchMap((firstTableRow) => firstTableRow ? firstTableRow.listOfColumnsChanges$ : EMPTY));
      listOfColumnsChanges$.subscribe((data) => this.nzTableStyleService.setListOfTh(data));
      this.nzTableStyleService.enableAutoMeasure$.pipe(switchMap((enable) => enable ? listOfColumnsChanges$ : of([]))).pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) => this.nzTableStyleService.setListOfMeasureColumn(data));
      const listOfFixedLeftColumnChanges$ = firstTableRow$.pipe(switchMap((firstTr) => firstTr ? firstTr.listOfFixedLeftColumnChanges$ : EMPTY));
      const listOfFixedRightColumnChanges$ = firstTableRow$.pipe(switchMap((firstTr) => firstTr ? firstTr.listOfFixedRightColumnChanges$ : EMPTY));
      listOfFixedLeftColumnChanges$.subscribe((listOfFixedLeftColumn) => {
        this.nzTableStyleService.setHasFixLeft(listOfFixedLeftColumn.length !== 0);
      });
      listOfFixedRightColumnChanges$.subscribe((listOfFixedRightColumn) => {
        this.nzTableStyleService.setHasFixRight(listOfFixedRightColumn.length !== 0);
      });
    }
    if (this.nzTableDataService) {
      const listOfColumn$ = this.listOfNzThAddOnComponent.changes.pipe(startWith(this.listOfNzThAddOnComponent));
      const manualSort$ = listOfColumn$.pipe(switchMap(() => merge(...this.listOfNzThAddOnComponent.map((th) => th.manualClickOrder$))), takeUntilDestroyed(this.destroyRef));
      manualSort$.subscribe((data) => {
        const emitValue = {
          key: data.nzColumnKey,
          value: data.sortOrder
        };
        this.nzSortOrderChange.emit(emitValue);
        if (data.nzSortFn && data.nzSortPriority === false) {
          this.listOfNzThAddOnComponent.filter((th) => th !== data).forEach((th) => th.clearSortOrder());
        }
      });
      const listOfCalcOperator$ = listOfColumn$.pipe(
        switchMap((list) => merge(listOfColumn$, ...list.map((c) => c.calcOperatorChange$)).pipe(mergeMap(() => listOfColumn$))),
        map((list) => list.filter((item) => !!item.nzSortFn || !!item.nzFilterFn).map((item) => {
          const {
            nzSortFn,
            sortOrder,
            nzFilterFn,
            nzFilterValue,
            nzSortPriority,
            nzColumnKey
          } = item;
          return {
            key: nzColumnKey,
            sortFn: nzSortFn,
            sortPriority: nzSortPriority,
            sortOrder,
            filterFn: nzFilterFn,
            filterValue: nzFilterValue
          };
        })),
        // TODO: after checked error here
        delay(0),
        takeUntilDestroyed(this.destroyRef)
      );
      listOfCalcOperator$.subscribe((list) => {
        this.nzTableDataService?.listOfCalcOperator$.next(list);
      });
    }
  }
  ngAfterViewInit() {
    if (this.nzTableStyleService) {
      this.renderer.removeChild(this.renderer.parentNode(this.el), this.el);
    }
  }
  static \u0275fac = function NzTheadComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTheadComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzTheadComponent,
    selectors: [["thead", 9, "ant-table-thead"]],
    contentQueries: function NzTheadComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, NzTrDirective, 5)(dirIndex, NzThAddOnComponent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listOfNzTrDirective = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listOfNzThAddOnComponent = _t);
      }
    },
    viewQuery: function NzTheadComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c8, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templateRef = _t.first);
      }
    },
    outputs: {
      nzSortOrderChange: "nzSortOrderChange"
    },
    ngContentSelectors: _c02,
    decls: 3,
    vars: 1,
    consts: [["contentTemplate", ""], [3, "ngTemplateOutlet"]],
    template: function NzTheadComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275template(0, NzTheadComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275conditionalCreate(2, NzTheadComponent_Conditional_2_Template, 1, 1, null, 1);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.isInsideTable ? 2 : -1);
      }
    },
    dependencies: [NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTheadComponent, [{
    type: Component,
    args: [{
      selector: "thead:not(.ant-table-thead)",
      encapsulation: ViewEncapsulation.None,
      template: `
    <ng-template #contentTemplate>
      <ng-content />
    </ng-template>
    @if (!isInsideTable) {
      <ng-template [ngTemplateOutlet]="contentTemplate" />
    }
  `,
      imports: [NgTemplateOutlet]
    }]
  }], null, {
    templateRef: [{
      type: ViewChild,
      args: ["contentTemplate", {
        static: true
      }]
    }],
    listOfNzTrDirective: [{
      type: ContentChildren,
      args: [NzTrDirective, {
        descendants: true
      }]
    }],
    listOfNzThAddOnComponent: [{
      type: ContentChildren,
      args: [NzThAddOnComponent, {
        descendants: true
      }]
    }],
    nzSortOrderChange: [{
      type: Output
    }]
  });
})();
var NzTrExpandDirective = class _NzTrExpandDirective {
  nzExpand = true;
  static \u0275fac = function NzTrExpandDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTrExpandDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzTrExpandDirective,
    selectors: [["tr", "nzExpand", ""]],
    hostAttrs: [1, "ant-table-expanded-row"],
    hostVars: 1,
    hostBindings: function NzTrExpandDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("hidden", !ctx.nzExpand);
      }
    },
    inputs: {
      nzExpand: [2, "nzExpand", "nzExpand", booleanAttribute]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTrExpandDirective, [{
    type: Directive,
    args: [{
      selector: "tr[nzExpand]",
      host: {
        class: "ant-table-expanded-row",
        "[hidden]": `!nzExpand`
      }
    }]
  }], null, {
    nzExpand: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var NzTableModule = class _NzTableModule {
  static \u0275fac = function NzTableModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTableModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzTableModule,
    imports: [NzTableComponent, NzThAddOnComponent, NzTableCellDirective, NzThMeasureDirective, NzTdAddOnComponent, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzTrExpandDirective, NzTfootSummaryComponent, NzTableVirtualScrollDirective, NzCellFixedDirective, NzCustomColumnDirective, NzTableContentComponent, NzTableTitleFooterComponent, NzTableInnerDefaultComponent, NzTableInnerScrollComponent, NzTrMeasureComponent, NzRowIndentDirective, NzRowExpandButtonDirective, NzCellBreakWordDirective, NzCellAlignDirective, NzTableSortersComponent, NzTableFilterComponent, NzTableSelectionComponent, NzCellEllipsisDirective, NzFilterTriggerComponent, NzTableFixedRowComponent, NzThSelectionComponent],
    exports: [NzTableComponent, NzThAddOnComponent, NzTableCellDirective, NzThMeasureDirective, NzTdAddOnComponent, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzTableVirtualScrollDirective, NzCellFixedDirective, NzCustomColumnDirective, NzFilterTriggerComponent, NzTrExpandDirective, NzTfootSummaryComponent, NzCellBreakWordDirective, NzCellAlignDirective, NzCellEllipsisDirective, NzTableFixedRowComponent, NzThSelectionComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzTableComponent, NzThAddOnComponent, NzTdAddOnComponent, NzTbodyComponent, NzTableTitleFooterComponent, NzTableInnerScrollComponent, NzTableSortersComponent, NzTableFilterComponent, NzTableSelectionComponent, NzFilterTriggerComponent, NzThSelectionComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTableModule, [{
    type: NgModule,
    args: [{
      imports: [NzTableComponent, NzThAddOnComponent, NzTableCellDirective, NzThMeasureDirective, NzTdAddOnComponent, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzTrExpandDirective, NzTfootSummaryComponent, NzTableVirtualScrollDirective, NzCellFixedDirective, NzCustomColumnDirective, NzTableContentComponent, NzTableTitleFooterComponent, NzTableInnerDefaultComponent, NzTableInnerScrollComponent, NzTrMeasureComponent, NzRowIndentDirective, NzRowExpandButtonDirective, NzCellBreakWordDirective, NzCellAlignDirective, NzTableSortersComponent, NzTableFilterComponent, NzTableSelectionComponent, NzCellEllipsisDirective, NzFilterTriggerComponent, NzTableFixedRowComponent, NzThSelectionComponent],
      exports: [NzTableComponent, NzThAddOnComponent, NzTableCellDirective, NzThMeasureDirective, NzTdAddOnComponent, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzTableVirtualScrollDirective, NzCellFixedDirective, NzCustomColumnDirective, NzFilterTriggerComponent, NzTrExpandDirective, NzTfootSummaryComponent, NzCellBreakWordDirective, NzCellAlignDirective, NzCellEllipsisDirective, NzTableFixedRowComponent, NzThSelectionComponent]
    }]
  }], null, null);
})();

export {
  NzCellFixedDirective,
  NzTableCellDirective,
  NzThMeasureDirective,
  NzCellEllipsisDirective,
  NzTbodyComponent,
  NzTableComponent,
  NzTrDirective,
  NzTheadComponent,
  NzTableModule
};
//# debugId=dbc5cfc9-fdfa-51b2-83b2-59af0796311b
//# sourceMappingURL=chunk-ON5PSYJR.js.map
