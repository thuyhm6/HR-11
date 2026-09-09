import {
  CdkConnectedOverlay,
  DATE_PICKER_POSITION_MAP,
  DEFAULT_DATE_PICKER_POSITIONS,
  DefaultValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  NzConnectedOverlayDirective,
  NzDateAdapter,
  NzI18nModule,
  NzI18nPipe,
  NzI18nService,
  NzOverlayModule,
  OverlayModule,
  requestAnimationFrame,
  slideAnimationEnter,
  slideAnimationLeave
} from "./chunk-TNYKEBYQ.js";
import {
  AsyncPipe,
  ChangeDetectorRef,
  Component,
  DecimalPipe,
  DestroyRef,
  Directionality,
  ElementRef,
  EventEmitter,
  Input,
  NZ_FORM_SIZE,
  NZ_FORM_VARIANT,
  NZ_SPACE_COMPACT_ITEM_TYPE,
  NZ_SPACE_COMPACT_SIZE,
  NgModule,
  NgTemplateOutlet,
  NgZone,
  NzButtonComponent,
  NzButtonModule,
  NzConfigService,
  NzFormItemFeedbackIconComponent,
  NzFormStatusService,
  NzIconDirective,
  NzIconModule,
  NzOutletModule,
  NzSpaceCompactItemDirective,
  NzStringTemplateOutletDirective,
  NzTransitionPatchDirective,
  NzWaveDirective,
  Output,
  Platform,
  Renderer2,
  Subject,
  ViewChild,
  ViewEncapsulation,
  WithConfig,
  __esDecorate,
  __runInitializers,
  __spreadProps,
  __spreadValues,
  _getEventTarget,
  booleanAttribute,
  computed,
  distinctUntilChanged,
  forwardRef,
  fromEventOutsideAngular,
  generateClassName,
  getStatusClassNames,
  inject,
  input,
  isNil,
  isNotNil,
  linkedSignal,
  map,
  numberAttribute,
  of,
  setClassMetadata,
  signal,
  takeUntilDestroyed,
  warn,
  ɵɵHostDirectivesFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵanimateEnter,
  ɵɵanimateLeave,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-VTW5U2M5.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-time-picker.mjs
var _c0 = ["hourListElement"];
var _c1 = ["minuteListElement"];
var _c2 = ["secondListElement"];
var _c3 = ["use12HoursListElement"];
function NzTimePickerPanelComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatTimeValue() || "\xA0");
  }
}
function NzTimePickerPanelComponent_Conditional_2_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 10);
    \u0275\u0275listener("click", function NzTimePickerPanelComponent_Conditional_2_For_3_Conditional_0_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const hour_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectHour(hour_r3));
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const hour_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ant-picker-time-panel-cell-selected", ctx_r0.isSelectedHour(hour_r3))("ant-picker-time-panel-cell-disabled", hour_r3.disabled);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 5, hour_r3.index, "2.0-0"));
  }
}
function NzTimePickerPanelComponent_Conditional_2_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NzTimePickerPanelComponent_Conditional_2_For_3_Conditional_0_Template, 4, 8, "li", 9);
  }
  if (rf & 2) {
    const hour_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!(ctx_r0.nzHideDisabledOptions && hour_r3.disabled) ? 0 : -1);
  }
}
function NzTimePickerPanelComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 6, 0);
    \u0275\u0275repeaterCreate(2, NzTimePickerPanelComponent_Conditional_2_For_3_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.hourRange);
  }
}
function NzTimePickerPanelComponent_Conditional_3_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 10);
    \u0275\u0275listener("click", function NzTimePickerPanelComponent_Conditional_3_For_3_Conditional_0_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const minute_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectMinute(minute_r5));
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const minute_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ant-picker-time-panel-cell-selected", ctx_r0.isSelectedMinute(minute_r5))("ant-picker-time-panel-cell-disabled", minute_r5.disabled);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 5, minute_r5.index, "2.0-0"));
  }
}
function NzTimePickerPanelComponent_Conditional_3_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NzTimePickerPanelComponent_Conditional_3_For_3_Conditional_0_Template, 4, 8, "li", 9);
  }
  if (rf & 2) {
    const minute_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!(ctx_r0.nzHideDisabledOptions && minute_r5.disabled) ? 0 : -1);
  }
}
function NzTimePickerPanelComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 6, 1);
    \u0275\u0275repeaterCreate(2, NzTimePickerPanelComponent_Conditional_3_For_3_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.minuteRange);
  }
}
function NzTimePickerPanelComponent_Conditional_4_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 10);
    \u0275\u0275listener("click", function NzTimePickerPanelComponent_Conditional_4_For_3_Conditional_0_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const second_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectSecond(second_r7));
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const second_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ant-picker-time-panel-cell-selected", ctx_r0.isSelectedSecond(second_r7))("ant-picker-time-panel-cell-disabled", second_r7.disabled);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 5, second_r7.index, "2.0-0"));
  }
}
function NzTimePickerPanelComponent_Conditional_4_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NzTimePickerPanelComponent_Conditional_4_For_3_Conditional_0_Template, 4, 8, "li", 9);
  }
  if (rf & 2) {
    const second_r7 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!(ctx_r0.nzHideDisabledOptions && second_r7.disabled) ? 0 : -1);
  }
}
function NzTimePickerPanelComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 6, 2);
    \u0275\u0275repeaterCreate(2, NzTimePickerPanelComponent_Conditional_4_For_3_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.secondRange);
  }
}
function NzTimePickerPanelComponent_Conditional_5_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 10);
    \u0275\u0275listener("click", function NzTimePickerPanelComponent_Conditional_5_For_3_Template_li_click_0_listener() {
      const range_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.select12Hours(range_r9));
    });
    \u0275\u0275elementStart(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const range_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ant-picker-time-panel-cell-selected", ctx_r0.isSelected12Hours(range_r9));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(range_r9.value);
  }
}
function NzTimePickerPanelComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 6, 3);
    \u0275\u0275repeaterCreate(2, NzTimePickerPanelComponent_Conditional_5_For_3_Template, 3, 3, "li", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.use12HoursRange);
  }
}
function NzTimePickerPanelComponent_Conditional_6_Conditional_1_ng_template_1_Template(rf, ctx) {
}
function NzTimePickerPanelComponent_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, NzTimePickerPanelComponent_Conditional_6_Conditional_1_ng_template_1_Template, 0, 0, "ng-template", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.nzAddOn);
  }
}
function NzTimePickerPanelComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275conditionalCreate(1, NzTimePickerPanelComponent_Conditional_6_Conditional_1_Template, 2, 1, "div", 13);
    \u0275\u0275elementStart(2, "ul", 14)(3, "li", 15)(4, "a", 16);
    \u0275\u0275listener("click", function NzTimePickerPanelComponent_Conditional_6_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onClickNow());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "nzI18n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "li", 17)(8, "button", 18);
    \u0275\u0275listener("click", function NzTimePickerPanelComponent_Conditional_6_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onClickOk());
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "nzI18n");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.nzAddOn ? 1 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.nzNowText || \u0275\u0275pipeBind1(6, 3, "Calendar.lang.now"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.nzOkText || \u0275\u0275pipeBind1(10, 5, "Calendar.lang.ok"), " ");
  }
}
var _c4 = ["inputElement"];
function NzTimePickerComponent_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const prefix_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(prefix_r2);
  }
}
function NzTimePickerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275template(1, NzTimePickerComponent_Conditional_0_ng_container_1_Template, 2, 1, "ng-container", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx);
  }
}
function NzTimePickerComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "nz-icon", 9);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const suffixIcon_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("nzType", suffixIcon_r3);
  }
}
function NzTimePickerComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-form-item-feedback-icon", 6);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("status", ctx_r3.status);
  }
}
function NzTimePickerComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275listener("click", function NzTimePickerComponent_Conditional_8_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onClickClearBtn($event));
    });
    \u0275\u0275element(1, "nz-icon", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", ctx_r3.nzClearText)("title", ctx_r3.nzClearText);
  }
}
function NzTimePickerComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275animateLeave(function NzTimePickerComponent_ng_template_9_Template_animateleave_cb() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.timepickerAnimationLeave());
    });
    \u0275\u0275animateEnter(function NzTimePickerComponent_ng_template_9_Template_animateenter_cb() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.timepickerAnimationEnter());
    });
    \u0275\u0275elementStart(1, "div", 13)(2, "div", 14)(3, "nz-time-picker-panel", 15);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275twoWayListener("ngModelChange", function NzTimePickerComponent_ng_template_9_Template_nz_time_picker_panel_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.value, $event) || (ctx_r3.value = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function NzTimePickerComponent_ng_template_9_Template_nz_time_picker_panel_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onPanelValueChange($event));
    })("closePanel", function NzTimePickerComponent_ng_template_9_Template_nz_time_picker_panel_closePanel_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closePanel());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r3.dropdownTimePickerClass());
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r3.nzPopupClassName);
    \u0275\u0275property("format", ctx_r3.nzFormat)("nzHourStep", ctx_r3.nzHourStep)("nzMinuteStep", ctx_r3.nzMinuteStep)("nzSecondStep", ctx_r3.nzSecondStep)("nzDisabledHours", ctx_r3.nzDisabledHours)("nzDisabledMinutes", ctx_r3.nzDisabledMinutes)("nzDisabledSeconds", ctx_r3.nzDisabledSeconds)("nzPlaceHolder", ctx_r3.nzPlaceHolder || \u0275\u0275pipeBind1(4, 21, ctx_r3.i18nPlaceHolder$))("nzHideDisabledOptions", ctx_r3.nzHideDisabledOptions)("nzUse12Hours", ctx_r3.nzUse12Hours)("nzDefaultOpenValue", ctx_r3.nzDefaultOpenValue)("nzAddOn", ctx_r3.nzAddOn)("nzClearText", ctx_r3.nzClearText)("nzNowText", ctx_r3.nzNowText)("nzOkText", ctx_r3.nzOkText)("nzAllowEmpty", ctx_r3.nzAllowEmpty);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.value);
    \u0275\u0275control();
  }
}
var TimeHolder = class {
  selected12Hours = void 0;
  _value;
  _use12Hours = false;
  _defaultOpenValue;
  _changes = new Subject();
  setMinutes(value, disabled) {
    if (!disabled) {
      this.initValue();
      this.value.setMinutes(value);
      this.update();
    }
    return this;
  }
  setHours(value, disabled) {
    if (!disabled) {
      this.initValue();
      if (this._use12Hours) {
        if (this.selected12Hours === "PM" && value !== 12) {
          this.value.setHours(value + 12);
        } else if (this.selected12Hours === "AM" && value === 12) {
          this.value.setHours(0);
        } else {
          this.value.setHours(value);
        }
      } else {
        this.value.setHours(value);
      }
      this.update();
    }
    return this;
  }
  setSeconds(value, disabled) {
    if (!disabled) {
      this.initValue();
      this.value.setSeconds(value);
      this.update();
    }
    return this;
  }
  setUse12Hours(value) {
    this._use12Hours = value;
    return this;
  }
  get changes() {
    return this._changes.asObservable();
  }
  setValue(value, use12Hours) {
    if (isNotNil(use12Hours)) {
      this._use12Hours = use12Hours;
    }
    if (value !== this.value) {
      this._value = value;
      if (isNotNil(this.value)) {
        if (this._use12Hours && isNotNil(this.hours)) {
          this.selected12Hours = this.hours >= 12 ? "PM" : "AM";
        }
      } else {
        this._clear();
      }
    }
    return this;
  }
  initValue() {
    if (isNil(this.value)) {
      this.setValue(/* @__PURE__ */ new Date(), this._use12Hours);
    }
  }
  clear() {
    this._clear();
    this.update();
  }
  get isEmpty() {
    return !(isNotNil(this.hours) || isNotNil(this.minutes) || isNotNil(this.seconds));
  }
  _clear() {
    this._value = void 0;
    this.selected12Hours = void 0;
  }
  update() {
    if (this.isEmpty) {
      this._value = void 0;
    } else {
      if (isNotNil(this.hours)) {
        this.value.setHours(this.hours);
      }
      if (isNotNil(this.minutes)) {
        this.value.setMinutes(this.minutes);
      }
      if (isNotNil(this.seconds)) {
        this.value.setSeconds(this.seconds);
      }
      if (this._use12Hours) {
        if (this.selected12Hours === "PM" && this.hours < 12) {
          this.value.setHours(this.hours + 12);
        }
        if (this.selected12Hours === "AM" && this.hours >= 12) {
          this.value.setHours(this.hours - 12);
        }
      }
    }
    this.changed();
  }
  changed() {
    this._changes.next(this.value);
  }
  /**
   * @description
   * UI view hours
   * Get viewHours which is selected in `time-picker-panel` and its range is [12, 1, 2, ..., 11]
   */
  get viewHours() {
    return this._use12Hours && isNotNil(this.hours) ? this.calculateViewHour(this.hours) : this.hours;
  }
  setSelected12Hours(value) {
    if (value.toUpperCase() !== this.selected12Hours) {
      this.selected12Hours = value.toUpperCase();
      this.update();
    }
  }
  get value() {
    return this._value || this._defaultOpenValue;
  }
  get hours() {
    return this.value?.getHours();
  }
  get minutes() {
    return this.value?.getMinutes();
  }
  get seconds() {
    return this.value?.getSeconds();
  }
  setDefaultOpenValue(value) {
    this._defaultOpenValue = value;
    return this;
  }
  calculateViewHour(value) {
    const selected12Hours = this.selected12Hours;
    if (selected12Hours === "PM" && value > 12) {
      return value - 12;
    }
    if (selected12Hours === "AM" && value === 0) {
      return 12;
    }
    return value;
  }
};
function makeRange(length, step = 1, start = 0) {
  return new Array(Math.ceil(length / step)).fill(0).map((_, i) => (i + start) * step);
}
var NzTimePickerPanelComponent = class _NzTimePickerPanelComponent {
  dateAdapter = inject(NzDateAdapter);
  ngZone = inject(NgZone);
  cdr = inject(ChangeDetectorRef);
  elementRef = inject(ElementRef);
  destroyRef = inject(DestroyRef);
  _nzHourStep = 1;
  _nzMinuteStep = 1;
  _nzSecondStep = 1;
  onChange;
  onTouch;
  _format = "HH:mm:ss";
  _disabledHours = () => [];
  _disabledMinutes = () => [];
  _disabledSeconds = () => [];
  _allowEmpty = true;
  time = new TimeHolder();
  hourEnabled = true;
  minuteEnabled = true;
  secondEnabled = true;
  firstScrolled = false;
  enabledColumns = 3;
  hourRange;
  minuteRange;
  secondRange;
  use12HoursRange;
  hourListElement;
  minuteListElement;
  secondListElement;
  use12HoursListElement;
  nzInDatePicker = false;
  // If inside a date-picker, more diff works need to be done
  nzAddOn;
  nzHideDisabledOptions = false;
  nzClearText;
  nzNowText;
  nzOkText;
  nzPlaceHolder;
  nzUse12Hours = false;
  nzDefaultOpenValue;
  closePanel = new EventEmitter();
  set nzAllowEmpty(value) {
    this._allowEmpty = value;
  }
  get nzAllowEmpty() {
    return this._allowEmpty;
  }
  set nzDisabledHours(value) {
    this._disabledHours = value;
    if (this._disabledHours) {
      this.buildHours();
    }
  }
  get nzDisabledHours() {
    return this._disabledHours;
  }
  set nzDisabledMinutes(value) {
    if (isNotNil(value)) {
      this._disabledMinutes = value;
      this.buildMinutes();
    }
  }
  get nzDisabledMinutes() {
    return this._disabledMinutes;
  }
  set nzDisabledSeconds(value) {
    if (isNotNil(value)) {
      this._disabledSeconds = value;
      this.buildSeconds();
    }
  }
  get nzDisabledSeconds() {
    return this._disabledSeconds;
  }
  set format(value) {
    if (isNotNil(value)) {
      this._format = value;
      this.enabledColumns = 0;
      const charSet = new Set(value);
      this.hourEnabled = charSet.has("H") || charSet.has("h");
      this.minuteEnabled = charSet.has("m");
      this.secondEnabled = charSet.has("s");
      if (this.hourEnabled) {
        this.enabledColumns++;
      }
      if (this.minuteEnabled) {
        this.enabledColumns++;
      }
      if (this.secondEnabled) {
        this.enabledColumns++;
      }
      if (this.nzUse12Hours) {
        this.build12Hours();
      }
    }
  }
  get format() {
    return this._format;
  }
  set nzHourStep(value) {
    this._nzHourStep = value || 1;
    this.buildHours();
  }
  get nzHourStep() {
    return this._nzHourStep;
  }
  set nzMinuteStep(value) {
    this._nzMinuteStep = value || 1;
    this.buildMinutes();
  }
  get nzMinuteStep() {
    return this._nzMinuteStep;
  }
  set nzSecondStep(value) {
    this._nzSecondStep = value || 1;
    this.buildSeconds();
  }
  get nzSecondStep() {
    return this._nzSecondStep;
  }
  buildHours() {
    let hourRanges = 24;
    let disabledHours = this.nzDisabledHours?.();
    let startIndex = 0;
    if (this.nzUse12Hours) {
      hourRanges = 12;
      if (disabledHours) {
        if (this.time.selected12Hours === "PM") {
          disabledHours = disabledHours.filter((i) => i >= 12).map((i) => i > 12 ? i - 12 : i);
        } else {
          disabledHours = disabledHours.filter((i) => i < 12 || i === 24).map((i) => i === 24 || i === 0 ? 12 : i);
        }
      }
      startIndex = 1;
    }
    this.hourRange = makeRange(hourRanges, this.nzHourStep, startIndex).map((r) => ({
      index: r,
      disabled: !!disabledHours && disabledHours.indexOf(r) !== -1
    }));
    if (this.nzUse12Hours && this.hourRange[this.hourRange.length - 1].index === 12) {
      const temp = [...this.hourRange];
      temp.unshift(temp[temp.length - 1]);
      temp.splice(temp.length - 1, 1);
      this.hourRange = temp;
    }
  }
  buildMinutes() {
    this.minuteRange = makeRange(60, this.nzMinuteStep).map((r) => ({
      index: r,
      disabled: !!this.nzDisabledMinutes && this.nzDisabledMinutes(this.time.hours).indexOf(r) !== -1
    }));
  }
  buildSeconds() {
    this.secondRange = makeRange(60, this.nzSecondStep).map((r) => ({
      index: r,
      disabled: !!this.nzDisabledSeconds && this.nzDisabledSeconds(this.time.hours, this.time.minutes).indexOf(r) !== -1
    }));
  }
  build12Hours() {
    const isUpperFormat = this._format.includes("A");
    this.use12HoursRange = [{
      index: 0,
      value: isUpperFormat ? "AM" : "am"
    }, {
      index: 1,
      value: isUpperFormat ? "PM" : "pm"
    }];
  }
  buildTimes() {
    this.buildHours();
    this.buildMinutes();
    this.buildSeconds();
    this.build12Hours();
  }
  scrollToTime(delay = 0) {
    if (this.hourEnabled && this.hourListElement) {
      this.scrollToSelected(this.hourListElement.nativeElement, this.time.viewHours, delay, "hour");
    }
    if (this.minuteEnabled && this.minuteListElement) {
      this.scrollToSelected(this.minuteListElement.nativeElement, this.time.minutes, delay, "minute");
    }
    if (this.secondEnabled && this.secondListElement) {
      this.scrollToSelected(this.secondListElement.nativeElement, this.time.seconds, delay, "second");
    }
    if (this.nzUse12Hours && this.use12HoursListElement) {
      const selectedHours = this.time.selected12Hours;
      const index = selectedHours === "AM" ? 0 : 1;
      this.scrollToSelected(this.use12HoursListElement.nativeElement, index, delay, "12-hour");
    }
  }
  selectHour(hour) {
    this.time.setHours(hour.index, hour.disabled);
    if (this._disabledMinutes) {
      this.buildMinutes();
    }
    if (this._disabledSeconds || this._disabledMinutes) {
      this.buildSeconds();
    }
  }
  selectMinute(minute) {
    this.time.setMinutes(minute.index, minute.disabled);
    if (this._disabledSeconds) {
      this.buildSeconds();
    }
  }
  selectSecond(second) {
    this.time.setSeconds(second.index, second.disabled);
  }
  select12Hours(value) {
    this.time.setSelected12Hours(value.value);
    if (this._disabledHours) {
      this.buildHours();
    }
    if (this._disabledMinutes) {
      this.buildMinutes();
    }
    if (this._disabledSeconds) {
      this.buildSeconds();
    }
  }
  scrollToSelected(instance, index, duration = 0, unit) {
    if (!instance) {
      return;
    }
    const transIndex = this.translateIndex(index, unit);
    const currentOption = instance.children[transIndex] || instance.children[0];
    this.scrollTo(instance, currentOption.offsetTop, duration);
  }
  translateIndex(index, unit) {
    if (unit === "hour") {
      return this.calcIndex(this.nzDisabledHours?.(), this.hourRange.map((item) => item.index).indexOf(index));
    } else if (unit === "minute") {
      return this.calcIndex(this.nzDisabledMinutes?.(this.time.hours), this.minuteRange.map((item) => item.index).indexOf(index));
    } else if (unit === "second") {
      return this.calcIndex(this.nzDisabledSeconds?.(this.time.hours, this.time.minutes), this.secondRange.map((item) => item.index).indexOf(index));
    } else {
      return this.calcIndex([], this.use12HoursRange.map((item) => item.index).indexOf(index));
    }
  }
  scrollTo(element, to, duration) {
    if (duration <= 0) {
      element.scrollTop = to;
      return;
    }
    const difference = to - element.scrollTop;
    const perTick = difference / duration * 10;
    this.ngZone.runOutsideAngular(() => {
      requestAnimationFrame(() => {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) {
          return;
        }
        this.scrollTo(element, to, duration - 10);
      });
    });
  }
  calcIndex(array, index) {
    if (array?.length && this.nzHideDisabledOptions) {
      return index - array.reduce((pre, value) => pre + (value < index ? 1 : 0), 0);
    } else {
      return index;
    }
  }
  changed() {
    if (this.onChange) {
      this.onChange(this.time.value);
    }
  }
  touched() {
    if (this.onTouch) {
      this.onTouch();
    }
  }
  timeDisabled(value) {
    const hour = value.getHours();
    const minute = value.getMinutes();
    const second = value.getSeconds();
    return (this.nzDisabledHours?.().indexOf(hour) ?? -1) > -1 || (this.nzDisabledMinutes?.(hour).indexOf(minute) ?? -1) > -1 || (this.nzDisabledSeconds?.(hour, minute).indexOf(second) ?? -1) > -1;
  }
  onClickNow() {
    const now = /* @__PURE__ */ new Date();
    if (this.timeDisabled(now)) {
      return;
    }
    this.time.setValue(now);
    this.changed();
    this.closePanel.emit();
  }
  onClickOk() {
    this.time.setValue(this.time.value, this.nzUse12Hours);
    this.changed();
    this.closePanel.emit();
  }
  isSelectedHour(hour) {
    return hour.index === this.time.viewHours;
  }
  isSelectedMinute(minute) {
    return minute.index === this.time.minutes;
  }
  isSelectedSecond(second) {
    return second.index === this.time.seconds;
  }
  isSelected12Hours(value) {
    return value.value.toUpperCase() === this.time.selected12Hours;
  }
  formatTimeValue() {
    const value = this.time.value;
    return value && this.dateAdapter.isValid(value) ? this.dateAdapter.format(value, this.format) : "";
  }
  ngOnInit() {
    this.time.changes.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.changed();
      this.touched();
      this.scrollToTime(120);
    });
    this.buildTimes();
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.scrollToTime();
        this.firstScrolled = true;
      });
    });
    fromEventOutsideAngular(this.elementRef.nativeElement, "mousedown").pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
      event.preventDefault();
    });
  }
  ngOnChanges(changes) {
    const {
      nzUse12Hours,
      nzDefaultOpenValue
    } = changes;
    if (!nzUse12Hours?.previousValue && nzUse12Hours?.currentValue) {
      this.build12Hours();
      this.enabledColumns++;
    }
    if (nzDefaultOpenValue?.currentValue) {
      this.time.setDefaultOpenValue(this.nzDefaultOpenValue || /* @__PURE__ */ new Date());
    }
  }
  writeValue(value) {
    this.time.setValue(value, this.nzUse12Hours);
    this.buildTimes();
    if (value && this.firstScrolled) {
      this.scrollToTime(120);
    }
    this.cdr.markForCheck();
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouch = fn;
  }
  static \u0275fac = function NzTimePickerPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTimePickerPanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzTimePickerPanelComponent,
    selectors: [["nz-time-picker-panel"]],
    viewQuery: function NzTimePickerPanelComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5)(_c1, 5)(_c2, 5)(_c3, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.hourListElement = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.minuteListElement = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.secondListElement = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.use12HoursListElement = _t.first);
      }
    },
    hostAttrs: [1, "ant-picker-time-panel"],
    hostVars: 12,
    hostBindings: function NzTimePickerPanelComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ant-picker-time-panel-column-0", ctx.enabledColumns === 0 && !ctx.nzInDatePicker)("ant-picker-time-panel-column-1", ctx.enabledColumns === 1 && !ctx.nzInDatePicker)("ant-picker-time-panel-column-2", ctx.enabledColumns === 2 && !ctx.nzInDatePicker)("ant-picker-time-panel-column-3", ctx.enabledColumns === 3 && !ctx.nzInDatePicker)("ant-picker-time-panel-narrow", ctx.enabledColumns < 3)("ant-picker-time-panel-placement-bottomLeft", !ctx.nzInDatePicker);
      }
    },
    inputs: {
      nzInDatePicker: [2, "nzInDatePicker", "nzInDatePicker", booleanAttribute],
      nzAddOn: "nzAddOn",
      nzHideDisabledOptions: "nzHideDisabledOptions",
      nzClearText: "nzClearText",
      nzNowText: "nzNowText",
      nzOkText: "nzOkText",
      nzPlaceHolder: "nzPlaceHolder",
      nzUse12Hours: [2, "nzUse12Hours", "nzUse12Hours", booleanAttribute],
      nzDefaultOpenValue: "nzDefaultOpenValue",
      nzAllowEmpty: [2, "nzAllowEmpty", "nzAllowEmpty", booleanAttribute],
      nzDisabledHours: "nzDisabledHours",
      nzDisabledMinutes: "nzDisabledMinutes",
      nzDisabledSeconds: "nzDisabledSeconds",
      format: "format",
      nzHourStep: [2, "nzHourStep", "nzHourStep", numberAttribute],
      nzMinuteStep: [2, "nzMinuteStep", "nzMinuteStep", numberAttribute],
      nzSecondStep: [2, "nzSecondStep", "nzSecondStep", numberAttribute]
    },
    outputs: {
      closePanel: "closePanel"
    },
    exportAs: ["nzTimePickerPanel"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _NzTimePickerPanelComponent),
      multi: true
    }]), \u0275\u0275NgOnChangesFeature],
    decls: 7,
    vars: 6,
    consts: [["hourListElement", ""], ["minuteListElement", ""], ["secondListElement", ""], ["use12HoursListElement", ""], [1, "ant-picker-header"], [1, "ant-picker-content"], [1, "ant-picker-time-panel-column", 2, "position", "relative"], [1, "ant-picker-footer"], [1, "ant-picker-header-view"], [1, "ant-picker-time-panel-cell", 3, "ant-picker-time-panel-cell-selected", "ant-picker-time-panel-cell-disabled"], [1, "ant-picker-time-panel-cell", 3, "click"], [1, "ant-picker-time-panel-cell-inner"], [1, "ant-picker-time-panel-cell", 3, "ant-picker-time-panel-cell-selected"], [1, "ant-picker-footer-extra"], [1, "ant-picker-ranges"], [1, "ant-picker-now"], [3, "click"], [1, "ant-picker-ok"], ["nz-button", "", "type", "button", "nzSize", "small", "nzType", "primary", 3, "click"], [3, "ngTemplateOutlet"]],
    template: function NzTimePickerPanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, NzTimePickerPanelComponent_Conditional_0_Template, 3, 1, "div", 4);
        \u0275\u0275elementStart(1, "div", 5);
        \u0275\u0275conditionalCreate(2, NzTimePickerPanelComponent_Conditional_2_Template, 4, 0, "ul", 6);
        \u0275\u0275conditionalCreate(3, NzTimePickerPanelComponent_Conditional_3_Template, 4, 0, "ul", 6);
        \u0275\u0275conditionalCreate(4, NzTimePickerPanelComponent_Conditional_4_Template, 4, 0, "ul", 6);
        \u0275\u0275conditionalCreate(5, NzTimePickerPanelComponent_Conditional_5_Template, 4, 0, "ul", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, NzTimePickerPanelComponent_Conditional_6_Template, 11, 7, "div", 7);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.nzInDatePicker ? 0 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.hourEnabled ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.minuteEnabled ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.secondEnabled ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.nzUse12Hours ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.nzInDatePicker ? 6 : -1);
      }
    },
    dependencies: [NgTemplateOutlet, NzI18nModule, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, DecimalPipe, NzI18nPipe],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTimePickerPanelComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation.None,
      selector: "nz-time-picker-panel",
      exportAs: "nzTimePickerPanel",
      template: `
    @if (nzInDatePicker) {
      <div class="ant-picker-header">
        <div class="ant-picker-header-view">{{ formatTimeValue() || '&nbsp;' }}</div>
      </div>
    }
    <div class="ant-picker-content">
      @if (hourEnabled) {
        <ul #hourListElement class="ant-picker-time-panel-column" style="position: relative;">
          @for (hour of hourRange; track $index) {
            @if (!(nzHideDisabledOptions && hour.disabled)) {
              <li
                class="ant-picker-time-panel-cell"
                (click)="selectHour(hour)"
                [class.ant-picker-time-panel-cell-selected]="isSelectedHour(hour)"
                [class.ant-picker-time-panel-cell-disabled]="hour.disabled"
              >
                <div class="ant-picker-time-panel-cell-inner">{{ hour.index | number: '2.0-0' }}</div>
              </li>
            }
          }
        </ul>
      }
      @if (minuteEnabled) {
        <ul #minuteListElement class="ant-picker-time-panel-column" style="position: relative;">
          @for (minute of minuteRange; track $index) {
            @if (!(nzHideDisabledOptions && minute.disabled)) {
              <li
                class="ant-picker-time-panel-cell"
                (click)="selectMinute(minute)"
                [class.ant-picker-time-panel-cell-selected]="isSelectedMinute(minute)"
                [class.ant-picker-time-panel-cell-disabled]="minute.disabled"
              >
                <div class="ant-picker-time-panel-cell-inner">{{ minute.index | number: '2.0-0' }}</div>
              </li>
            }
          }
        </ul>
      }
      @if (secondEnabled) {
        <ul #secondListElement class="ant-picker-time-panel-column" style="position: relative;">
          @for (second of secondRange; track $index) {
            @if (!(nzHideDisabledOptions && second.disabled)) {
              <li
                class="ant-picker-time-panel-cell"
                (click)="selectSecond(second)"
                [class.ant-picker-time-panel-cell-selected]="isSelectedSecond(second)"
                [class.ant-picker-time-panel-cell-disabled]="second.disabled"
              >
                <div class="ant-picker-time-panel-cell-inner">{{ second.index | number: '2.0-0' }}</div>
              </li>
            }
          }
        </ul>
      }
      @if (nzUse12Hours) {
        <ul #use12HoursListElement class="ant-picker-time-panel-column" style="position: relative;">
          @for (range of use12HoursRange; track range) {
            <li
              (click)="select12Hours(range)"
              class="ant-picker-time-panel-cell"
              [class.ant-picker-time-panel-cell-selected]="isSelected12Hours(range)"
            >
              <div class="ant-picker-time-panel-cell-inner">{{ range.value }}</div>
            </li>
          }
        </ul>
      }
    </div>
    @if (!nzInDatePicker) {
      <div class="ant-picker-footer">
        @if (nzAddOn) {
          <div class="ant-picker-footer-extra">
            <ng-template [ngTemplateOutlet]="nzAddOn" />
          </div>
        }
        <ul class="ant-picker-ranges">
          <li class="ant-picker-now">
            <a (click)="onClickNow()">
              {{ nzNowText || ('Calendar.lang.now' | nzI18n) }}
            </a>
          </li>
          <li class="ant-picker-ok">
            <button nz-button type="button" nzSize="small" nzType="primary" (click)="onClickOk()">
              {{ nzOkText || ('Calendar.lang.ok' | nzI18n) }}
            </button>
          </li>
        </ul>
      </div>
    }
  `,
      host: {
        class: "ant-picker-time-panel",
        "[class.ant-picker-time-panel-column-0]": `enabledColumns === 0 && !nzInDatePicker`,
        "[class.ant-picker-time-panel-column-1]": `enabledColumns === 1 && !nzInDatePicker`,
        "[class.ant-picker-time-panel-column-2]": `enabledColumns === 2 && !nzInDatePicker`,
        "[class.ant-picker-time-panel-column-3]": `enabledColumns === 3 && !nzInDatePicker`,
        "[class.ant-picker-time-panel-narrow]": `enabledColumns < 3`,
        "[class.ant-picker-time-panel-placement-bottomLeft]": `!nzInDatePicker`
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzTimePickerPanelComponent),
        multi: true
      }],
      imports: [DecimalPipe, NgTemplateOutlet, NzI18nModule, NzButtonModule]
    }]
  }], null, {
    hourListElement: [{
      type: ViewChild,
      args: ["hourListElement", {
        static: false
      }]
    }],
    minuteListElement: [{
      type: ViewChild,
      args: ["minuteListElement", {
        static: false
      }]
    }],
    secondListElement: [{
      type: ViewChild,
      args: ["secondListElement", {
        static: false
      }]
    }],
    use12HoursListElement: [{
      type: ViewChild,
      args: ["use12HoursListElement", {
        static: false
      }]
    }],
    nzInDatePicker: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzAddOn: [{
      type: Input
    }],
    nzHideDisabledOptions: [{
      type: Input
    }],
    nzClearText: [{
      type: Input
    }],
    nzNowText: [{
      type: Input
    }],
    nzOkText: [{
      type: Input
    }],
    nzPlaceHolder: [{
      type: Input
    }],
    nzUse12Hours: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDefaultOpenValue: [{
      type: Input
    }],
    closePanel: [{
      type: Output
    }],
    nzAllowEmpty: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDisabledHours: [{
      type: Input
    }],
    nzDisabledMinutes: [{
      type: Input
    }],
    nzDisabledSeconds: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    nzHourStep: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzMinuteStep: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzSecondStep: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }]
  });
})();
var NZ_CONFIG_MODULE_NAME = "timePicker";
var NzTimePickerComponent = (() => {
  let _nzVariant_decorators;
  let _nzVariant_initializers = [];
  let _nzVariant_extraInitializers = [];
  let _nzHourStep_decorators;
  let _nzHourStep_initializers = [];
  let _nzHourStep_extraInitializers = [];
  let _nzMinuteStep_decorators;
  let _nzMinuteStep_initializers = [];
  let _nzMinuteStep_extraInitializers = [];
  let _nzSecondStep_decorators;
  let _nzSecondStep_initializers = [];
  let _nzSecondStep_extraInitializers = [];
  let _nzClearText_decorators;
  let _nzClearText_initializers = [];
  let _nzClearText_extraInitializers = [];
  let _nzNowText_decorators;
  let _nzNowText_initializers = [];
  let _nzNowText_extraInitializers = [];
  let _nzOkText_decorators;
  let _nzOkText_initializers = [];
  let _nzOkText_extraInitializers = [];
  let _nzPopupClassName_decorators;
  let _nzPopupClassName_initializers = [];
  let _nzPopupClassName_extraInitializers = [];
  let _nzFormat_decorators;
  let _nzFormat_initializers = [];
  let _nzFormat_extraInitializers = [];
  let _nzUse12Hours_decorators;
  let _nzUse12Hours_initializers = [];
  let _nzUse12Hours_extraInitializers = [];
  let _nzSuffixIcon_decorators;
  let _nzSuffixIcon_initializers = [];
  let _nzSuffixIcon_extraInitializers = [];
  let _nzAllowEmpty_decorators;
  let _nzAllowEmpty_initializers = [];
  let _nzAllowEmpty_extraInitializers = [];
  let _nzBackdrop_decorators;
  let _nzBackdrop_initializers = [];
  let _nzBackdrop_extraInitializers = [];
  return class NzTimePickerComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzVariant_decorators = [WithConfig()];
      _nzHourStep_decorators = [WithConfig()];
      _nzMinuteStep_decorators = [WithConfig()];
      _nzSecondStep_decorators = [WithConfig()];
      _nzClearText_decorators = [WithConfig()];
      _nzNowText_decorators = [WithConfig()];
      _nzOkText_decorators = [WithConfig()];
      _nzPopupClassName_decorators = [WithConfig()];
      _nzFormat_decorators = [WithConfig()];
      _nzUse12Hours_decorators = [WithConfig()];
      _nzSuffixIcon_decorators = [WithConfig()];
      _nzAllowEmpty_decorators = [WithConfig()];
      _nzBackdrop_decorators = [WithConfig()];
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
      __esDecorate(null, null, _nzHourStep_decorators, {
        kind: "field",
        name: "nzHourStep",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzHourStep" in obj,
          get: (obj) => obj.nzHourStep,
          set: (obj, value) => {
            obj.nzHourStep = value;
          }
        },
        metadata: _metadata
      }, _nzHourStep_initializers, _nzHourStep_extraInitializers);
      __esDecorate(null, null, _nzMinuteStep_decorators, {
        kind: "field",
        name: "nzMinuteStep",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzMinuteStep" in obj,
          get: (obj) => obj.nzMinuteStep,
          set: (obj, value) => {
            obj.nzMinuteStep = value;
          }
        },
        metadata: _metadata
      }, _nzMinuteStep_initializers, _nzMinuteStep_extraInitializers);
      __esDecorate(null, null, _nzSecondStep_decorators, {
        kind: "field",
        name: "nzSecondStep",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzSecondStep" in obj,
          get: (obj) => obj.nzSecondStep,
          set: (obj, value) => {
            obj.nzSecondStep = value;
          }
        },
        metadata: _metadata
      }, _nzSecondStep_initializers, _nzSecondStep_extraInitializers);
      __esDecorate(null, null, _nzClearText_decorators, {
        kind: "field",
        name: "nzClearText",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzClearText" in obj,
          get: (obj) => obj.nzClearText,
          set: (obj, value) => {
            obj.nzClearText = value;
          }
        },
        metadata: _metadata
      }, _nzClearText_initializers, _nzClearText_extraInitializers);
      __esDecorate(null, null, _nzNowText_decorators, {
        kind: "field",
        name: "nzNowText",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzNowText" in obj,
          get: (obj) => obj.nzNowText,
          set: (obj, value) => {
            obj.nzNowText = value;
          }
        },
        metadata: _metadata
      }, _nzNowText_initializers, _nzNowText_extraInitializers);
      __esDecorate(null, null, _nzOkText_decorators, {
        kind: "field",
        name: "nzOkText",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzOkText" in obj,
          get: (obj) => obj.nzOkText,
          set: (obj, value) => {
            obj.nzOkText = value;
          }
        },
        metadata: _metadata
      }, _nzOkText_initializers, _nzOkText_extraInitializers);
      __esDecorate(null, null, _nzPopupClassName_decorators, {
        kind: "field",
        name: "nzPopupClassName",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzPopupClassName" in obj,
          get: (obj) => obj.nzPopupClassName,
          set: (obj, value) => {
            obj.nzPopupClassName = value;
          }
        },
        metadata: _metadata
      }, _nzPopupClassName_initializers, _nzPopupClassName_extraInitializers);
      __esDecorate(null, null, _nzFormat_decorators, {
        kind: "field",
        name: "nzFormat",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzFormat" in obj,
          get: (obj) => obj.nzFormat,
          set: (obj, value) => {
            obj.nzFormat = value;
          }
        },
        metadata: _metadata
      }, _nzFormat_initializers, _nzFormat_extraInitializers);
      __esDecorate(null, null, _nzUse12Hours_decorators, {
        kind: "field",
        name: "nzUse12Hours",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzUse12Hours" in obj,
          get: (obj) => obj.nzUse12Hours,
          set: (obj, value) => {
            obj.nzUse12Hours = value;
          }
        },
        metadata: _metadata
      }, _nzUse12Hours_initializers, _nzUse12Hours_extraInitializers);
      __esDecorate(null, null, _nzSuffixIcon_decorators, {
        kind: "field",
        name: "nzSuffixIcon",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzSuffixIcon" in obj,
          get: (obj) => obj.nzSuffixIcon,
          set: (obj, value) => {
            obj.nzSuffixIcon = value;
          }
        },
        metadata: _metadata
      }, _nzSuffixIcon_initializers, _nzSuffixIcon_extraInitializers);
      __esDecorate(null, null, _nzAllowEmpty_decorators, {
        kind: "field",
        name: "nzAllowEmpty",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzAllowEmpty" in obj,
          get: (obj) => obj.nzAllowEmpty,
          set: (obj, value) => {
            obj.nzAllowEmpty = value;
          }
        },
        metadata: _metadata
      }, _nzAllowEmpty_initializers, _nzAllowEmpty_extraInitializers);
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
    nzConfigService = inject(NzConfigService);
    i18n = inject(NzI18nService);
    dir = inject(Directionality).valueSignal;
    elementRef = inject(ElementRef);
    renderer = inject(Renderer2);
    cdr = inject(ChangeDetectorRef);
    dateAdapter = inject(NzDateAdapter);
    platform = inject(Platform);
    destroyRef = inject(DestroyRef);
    _onChange;
    _onTouched;
    isNzDisableFirstChange = true;
    isInit = false;
    focused = false;
    inputValue = "";
    value = null;
    preValue = null;
    inputSize;
    i18nPlaceHolder$ = of(void 0);
    // status
    prefixCls = "ant-picker";
    statusCls = {};
    status = "";
    hasFeedback = false;
    get origin() {
      return this.elementRef;
    }
    inputRef;
    nzId = null;
    nzSize = "default";
    nzStatus = "";
    nzVariant = __runInitializers(this, _nzVariant_initializers, void 0);
    nzHourStep = (__runInitializers(this, _nzVariant_extraInitializers), __runInitializers(this, _nzHourStep_initializers, 1));
    nzMinuteStep = (__runInitializers(this, _nzHourStep_extraInitializers), __runInitializers(this, _nzMinuteStep_initializers, 1));
    nzSecondStep = (__runInitializers(this, _nzMinuteStep_extraInitializers), __runInitializers(this, _nzSecondStep_initializers, 1));
    nzClearText = (__runInitializers(this, _nzSecondStep_extraInitializers), __runInitializers(this, _nzClearText_initializers, "clear"));
    nzNowText = (__runInitializers(this, _nzClearText_extraInitializers), __runInitializers(this, _nzNowText_initializers, ""));
    nzOkText = (__runInitializers(this, _nzNowText_extraInitializers), __runInitializers(this, _nzOkText_initializers, ""));
    nzPopupClassName = (__runInitializers(this, _nzOkText_extraInitializers), __runInitializers(this, _nzPopupClassName_initializers, ""));
    nzPlaceHolder = (__runInitializers(this, _nzPopupClassName_extraInitializers), "");
    nzAddOn;
    nzDefaultOpenValue;
    nzDisabledHours;
    nzDisabledMinutes;
    nzDisabledSeconds;
    nzFormat = __runInitializers(this, _nzFormat_initializers, "HH:mm:ss");
    nzOpen = (__runInitializers(this, _nzFormat_extraInitializers), false);
    nzUse12Hours = __runInitializers(this, _nzUse12Hours_initializers, false);
    nzSuffixIcon = (__runInitializers(this, _nzUse12Hours_extraInitializers), __runInitializers(this, _nzSuffixIcon_initializers, "clock-circle"));
    nzOpenChange = (__runInitializers(this, _nzSuffixIcon_extraInitializers), new EventEmitter());
    nzHideDisabledOptions = false;
    nzAllowEmpty = __runInitializers(this, _nzAllowEmpty_initializers, true);
    nzDisabled = (__runInitializers(this, _nzAllowEmpty_extraInitializers), false);
    nzAutoFocus = false;
    nzBackdrop = __runInitializers(this, _nzBackdrop_initializers, false);
    nzInputReadOnly = (__runInitializers(this, _nzBackdrop_extraInitializers), false);
    formSize = inject(NZ_FORM_SIZE, {
      optional: true
    });
    formVariant = inject(NZ_FORM_VARIANT, {
      optional: true
    });
    hasConfirmed = false;
    nzPrefix = input(
      ...ngDevMode ? [void 0, {
        debugName: "nzPrefix"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    nzNeedConfirm = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
      debugName: "nzNeedConfirm"
    } : (
      /* istanbul ignore next */
      {}
    )), {
      transform: booleanAttribute
    }));
    nzPlacement = input(
      "bottomLeft",
      ...ngDevMode ? [{
        debugName: "nzPlacement"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    currentPosition = linkedSignal(
      () => DATE_PICKER_POSITION_MAP[this.nzPlacement()],
      ...ngDevMode ? [{
        debugName: "currentPosition"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    overlayPositions = computed(
      () => [this.currentPosition(), ...DEFAULT_DATE_PICKER_POSITIONS],
      ...ngDevMode ? [{
        debugName: "overlayPositions"
      }] : (
        /* istanbul ignore next */
        []
      )
    );
    timepickerAnimationEnter = slideAnimationEnter();
    timepickerAnimationLeave = slideAnimationLeave();
    emitValue(value) {
      this.setValue(value, true);
      if (this._onChange) {
        this._onChange(this.value);
      }
      if (this._onTouched) {
        this._onTouched();
      }
    }
    setValue(value, syncPreValue = false) {
      const valid = value && this.dateAdapter.isValid(value);
      if (syncPreValue) {
        this.preValue = valid ? new Date(value) : null;
      }
      this.value = valid ? new Date(value) : null;
      this.inputValue = valid ? this.dateAdapter.format(value, this.nzFormat) : "";
      this.cdr.markForCheck();
    }
    open() {
      if (this.nzDisabled || this.nzOpen) {
        return;
      }
      this.focus();
      this.nzOpen = true;
      this.nzOpenChange.emit(this.nzOpen);
    }
    close() {
      this.nzOpen = false;
      this.cdr.markForCheck();
      this.nzOpenChange.emit(this.nzOpen);
    }
    updateAutoFocus() {
      if (this.isInit && !this.nzDisabled) {
        if (this.nzAutoFocus) {
          this.renderer.setAttribute(this.inputRef.nativeElement, "autofocus", "autofocus");
        } else {
          this.renderer.removeAttribute(this.inputRef.nativeElement, "autofocus");
        }
      }
    }
    onClickClearBtn(event) {
      event.stopPropagation();
      this.emitValue(null);
    }
    onClickOutside(event) {
      const target = _getEventTarget(event);
      if (!this.elementRef.nativeElement.contains(target)) {
        this.setCurrentValueAndClose();
      }
    }
    onFocus(value) {
      this.focused = value;
      if (!value) {
        if (this.checkTimeValid(this.value)) {
          this.setCurrentValueAndClose();
        } else {
          this.setValue(this.preValue);
          this.close();
        }
      }
    }
    focus() {
      if (this.inputRef.nativeElement) {
        this.inputRef.nativeElement.focus();
      }
    }
    blur() {
      if (this.inputRef.nativeElement) {
        this.inputRef.nativeElement.blur();
      }
    }
    onKeyupEsc() {
      this.setValue(this.preValue);
    }
    onKeyupEnter() {
      if (this.nzOpen && this.value && this.dateAdapter.isValid(this.value)) {
        this.setCurrentValueAndClose();
      } else if (!this.nzOpen) {
        this.open();
      }
    }
    onInputChange(str) {
      if (!this.platform.TRIDENT && document.activeElement === this.inputRef.nativeElement) {
        this.open();
        this.parseTimeString(str);
      }
    }
    onPanelValueChange(value) {
      this.setValue(value);
      this.focus();
    }
    closePanel() {
      this.hasConfirmed = true;
      this.inputRef.nativeElement.blur();
    }
    setCurrentValueAndClose() {
      if (this.hasConfirmed || !this.nzNeedConfirm()) {
        this.emitValue(this.value);
        this.hasConfirmed = false;
      } else {
        this.setValue(this.preValue);
      }
      this.close();
    }
    onPositionChange(position) {
      this.currentPosition.set(position.connectionPair);
    }
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
    dropdownTimePickerClass = computed(
      () => {
        const classList = [this.generateClass("dropdown")];
        const {
          originX,
          originY
        } = this.currentPosition();
        const dir = this.dir();
        if (originX === "start" && originY === "bottom") {
          classList.push(this.generateClass("dropdown-placement-bottomLeft"));
        } else if (originX === "start" && originY === "top") {
          classList.push(this.generateClass("dropdown-placement-topLeft"));
        } else if (originX === "end" && originY === "bottom") {
          classList.push(this.generateClass("dropdown-placement-bottomRight"));
        } else if (originX === "end" && originY === "top") {
          classList.push(this.generateClass("dropdown-placement-topRight"));
        }
        if (dir === "rtl") {
          classList.push(this.generateClass("dropdown-rtl"));
        }
        return classList;
      },
      ...ngDevMode ? [{
        debugName: "dropdownTimePickerClass"
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
    compactSize = inject(NZ_SPACE_COMPACT_SIZE, {
      optional: true
    });
    nzFormStatusService = inject(NzFormStatusService, {
      optional: true
    });
    ngOnInit() {
      this.nzFormStatusService?.formStatusChanges.pipe(distinctUntilChanged((pre, cur) => pre.status === cur.status && pre.hasFeedback === cur.hasFeedback), takeUntilDestroyed(this.destroyRef)).subscribe(({
        status,
        hasFeedback
      }) => {
        this.setStatusStyles(status, hasFeedback);
      });
      this.inputSize = Math.max(8, this.nzFormat.length) + 2;
      this.i18nPlaceHolder$ = this.i18n.localeChange.pipe(map((nzLocale) => nzLocale.TimePicker.placeholder));
    }
    ngOnChanges({
      nzUse12Hours,
      nzFormat,
      nzDisabled,
      nzAutoFocus,
      nzStatus,
      nzSize,
      nzVariant
    }) {
      if (nzUse12Hours && !nzUse12Hours.previousValue && nzUse12Hours.currentValue && !nzFormat) {
        this.nzFormat = "h:mm:ss a";
      }
      if (nzDisabled) {
        const value = nzDisabled.currentValue;
        const input2 = this.inputRef.nativeElement;
        if (value) {
          this.renderer.setAttribute(input2, "disabled", "");
        } else {
          this.renderer.removeAttribute(input2, "disabled");
        }
      }
      if (nzAutoFocus) {
        this.updateAutoFocus();
      }
      if (nzStatus) {
        this.setStatusStyles(this.nzStatus, this.hasFeedback);
      }
      if (nzSize) {
        this.size.set(nzSize.currentValue);
      }
      if (nzVariant) {
        this.variant.set(nzVariant.currentValue);
      }
    }
    parseTimeString(str) {
      const value = this.dateAdapter.parseTime(str, this.nzFormat) || null;
      if (value && this.dateAdapter.isValid(value)) {
        this.value = value;
        this.cdr.markForCheck();
      }
    }
    ngAfterViewInit() {
      this.isInit = true;
      this.updateAutoFocus();
    }
    writeValue(time) {
      let result;
      if (time instanceof Date) {
        result = time;
      } else if (isNil(time)) {
        result = null;
      } else {
        warn('Non-Date type is not recommended for time-picker, use "Date" type.');
        result = new Date(time);
      }
      this.setValue(result, true);
    }
    registerOnChange(fn) {
      this._onChange = fn;
    }
    registerOnTouched(fn) {
      this._onTouched = fn;
    }
    setDisabledState(isDisabled) {
      this.nzDisabled = this.isNzDisableFirstChange && this.nzDisabled || isDisabled;
      this.isNzDisableFirstChange = false;
      this.cdr.markForCheck();
    }
    checkTimeValid(value) {
      if (!value) {
        return true;
      }
      const disabledHours = this.nzDisabledHours?.();
      const disabledMinutes = this.nzDisabledMinutes?.(value.getHours());
      const disabledSeconds = this.nzDisabledSeconds?.(value.getHours(), value.getMinutes());
      return !(disabledHours?.includes(value.getHours()) || disabledMinutes?.includes(value.getMinutes()) || disabledSeconds?.includes(value.getSeconds()));
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
    generateClass(suffix) {
      return generateClassName(this.prefixCls, suffix);
    }
    static \u0275fac = function NzTimePickerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzTimePickerComponent2)();
    };
    static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: NzTimePickerComponent2,
      selectors: [["nz-time-picker"]],
      viewQuery: function NzTimePickerComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c4, 7);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputRef = _t.first);
        }
      },
      hostAttrs: [1, "ant-picker"],
      hostVars: 18,
      hostBindings: function NzTimePickerComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function NzTimePickerComponent_click_HostBindingHandler() {
            return ctx.open();
          });
        }
        if (rf & 2) {
          \u0275\u0275classProp("ant-picker-large", ctx.finalSize() === "large")("ant-picker-small", ctx.finalSize() === "small")("ant-picker-disabled", ctx.nzDisabled)("ant-picker-focused", ctx.focused)("ant-picker-rtl", ctx.dir() === "rtl")("ant-picker-outlined", ctx.finalVariant() === "outlined")("ant-picker-borderless", ctx.finalVariant() === "borderless")("ant-picker-filled", ctx.finalVariant() === "filled")("ant-picker-underlined", ctx.finalVariant() === "underlined");
        }
      },
      inputs: {
        nzId: "nzId",
        nzSize: "nzSize",
        nzStatus: "nzStatus",
        nzVariant: "nzVariant",
        nzHourStep: "nzHourStep",
        nzMinuteStep: "nzMinuteStep",
        nzSecondStep: "nzSecondStep",
        nzClearText: "nzClearText",
        nzNowText: "nzNowText",
        nzOkText: "nzOkText",
        nzPopupClassName: "nzPopupClassName",
        nzPlaceHolder: "nzPlaceHolder",
        nzAddOn: "nzAddOn",
        nzDefaultOpenValue: "nzDefaultOpenValue",
        nzDisabledHours: "nzDisabledHours",
        nzDisabledMinutes: "nzDisabledMinutes",
        nzDisabledSeconds: "nzDisabledSeconds",
        nzFormat: "nzFormat",
        nzOpen: "nzOpen",
        nzUse12Hours: [2, "nzUse12Hours", "nzUse12Hours", booleanAttribute],
        nzSuffixIcon: "nzSuffixIcon",
        nzHideDisabledOptions: [2, "nzHideDisabledOptions", "nzHideDisabledOptions", booleanAttribute],
        nzAllowEmpty: [2, "nzAllowEmpty", "nzAllowEmpty", booleanAttribute],
        nzDisabled: [2, "nzDisabled", "nzDisabled", booleanAttribute],
        nzAutoFocus: [2, "nzAutoFocus", "nzAutoFocus", booleanAttribute],
        nzBackdrop: "nzBackdrop",
        nzInputReadOnly: [2, "nzInputReadOnly", "nzInputReadOnly", booleanAttribute],
        nzPrefix: [1, "nzPrefix"],
        nzNeedConfirm: [1, "nzNeedConfirm"],
        nzPlacement: [1, "nzPlacement"]
      },
      outputs: {
        nzOpenChange: "nzOpenChange"
      },
      exportAs: ["nzTimePicker"],
      features: [\u0275\u0275ProvidersFeature([{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzTimePickerComponent2),
        multi: true
      }, {
        provide: NZ_SPACE_COMPACT_ITEM_TYPE,
        useValue: "picker"
      }]), \u0275\u0275HostDirectivesFeature([NzSpaceCompactItemDirective]), \u0275\u0275NgOnChangesFeature],
      decls: 10,
      vars: 16,
      consts: [["inputElement", ""], [1, "ant-picker-prefix"], [1, "ant-picker-input"], ["type", "text", "autocomplete", "off", 3, "ngModelChange", "focus", "blur", "keyup.enter", "keyup.escape", "size", "placeholder", "ngModel", "disabled", "readOnly"], [1, "ant-picker-suffix"], [4, "nzStringTemplateOutlet"], [3, "status"], [1, "ant-picker-clear"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", "cdkConnectedOverlayTransformOriginOn", ".ant-picker-dropdown", 3, "detach", "overlayOutsideClick", "positionChange", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen"], [3, "nzType"], [1, "ant-picker-clear", 3, "click"], ["nzType", "close-circle", "nzTheme", "fill"], [2, "position", "relative"], [1, "ant-picker-panel-container"], ["tabindex", "-1", 1, "ant-picker-panel"], [3, "ngModelChange", "closePanel", "format", "nzHourStep", "nzMinuteStep", "nzSecondStep", "nzDisabledHours", "nzDisabledMinutes", "nzDisabledSeconds", "nzPlaceHolder", "nzHideDisabledOptions", "nzUse12Hours", "nzDefaultOpenValue", "nzAddOn", "nzClearText", "nzNowText", "nzOkText", "nzAllowEmpty", "ngModel"]],
      template: function NzTimePickerComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = \u0275\u0275getCurrentView();
          \u0275\u0275conditionalCreate(0, NzTimePickerComponent_Conditional_0_Template, 2, 1, "span", 1);
          \u0275\u0275elementStart(1, "div", 2)(2, "input", 3, 0);
          \u0275\u0275pipe(4, "async");
          \u0275\u0275twoWayListener("ngModelChange", function NzTimePickerComponent_Template_input_ngModelChange_2_listener($event) {
            \u0275\u0275restoreView(_r1);
            \u0275\u0275twoWayBindingSet(ctx.inputValue, $event) || (ctx.inputValue = $event);
            return \u0275\u0275resetView($event);
          });
          \u0275\u0275listener("focus", function NzTimePickerComponent_Template_input_focus_2_listener() {
            return ctx.onFocus(true);
          })("blur", function NzTimePickerComponent_Template_input_blur_2_listener() {
            return ctx.onFocus(false);
          })("keyup.enter", function NzTimePickerComponent_Template_input_keyup_enter_2_listener() {
            return ctx.onKeyupEnter();
          })("keyup.escape", function NzTimePickerComponent_Template_input_keyup_escape_2_listener() {
            return ctx.onKeyupEsc();
          })("ngModelChange", function NzTimePickerComponent_Template_input_ngModelChange_2_listener($event) {
            return ctx.onInputChange($event);
          });
          \u0275\u0275elementEnd();
          \u0275\u0275controlCreate();
          \u0275\u0275elementStart(5, "span", 4);
          \u0275\u0275template(6, NzTimePickerComponent_ng_container_6_Template, 2, 1, "ng-container", 5);
          \u0275\u0275conditionalCreate(7, NzTimePickerComponent_Conditional_7_Template, 1, 1, "nz-form-item-feedback-icon", 6);
          \u0275\u0275elementEnd();
          \u0275\u0275conditionalCreate(8, NzTimePickerComponent_Conditional_8_Template, 2, 2, "span", 7);
          \u0275\u0275elementEnd();
          \u0275\u0275template(9, NzTimePickerComponent_ng_template_9_Template, 5, 23, "ng-template", 8);
          \u0275\u0275listener("detach", function NzTimePickerComponent_Template_ng_template_detach_9_listener() {
            return ctx.close();
          })("overlayOutsideClick", function NzTimePickerComponent_Template_ng_template_overlayOutsideClick_9_listener($event) {
            return ctx.onClickOutside($event);
          })("positionChange", function NzTimePickerComponent_Template_ng_template_positionChange_9_listener($event) {
            return ctx.onPositionChange($event);
          });
        }
        if (rf & 2) {
          let tmp_1_0;
          \u0275\u0275conditional((tmp_1_0 = ctx.nzPrefix()) ? 0 : -1, tmp_1_0);
          \u0275\u0275advance(2);
          \u0275\u0275property("size", ctx.inputSize)("placeholder", ctx.nzPlaceHolder || \u0275\u0275pipeBind1(4, 14, ctx.i18nPlaceHolder$));
          \u0275\u0275twoWayProperty("ngModel", ctx.inputValue);
          \u0275\u0275property("disabled", ctx.nzDisabled)("readOnly", ctx.nzInputReadOnly);
          \u0275\u0275attribute("id", ctx.nzId);
          \u0275\u0275control();
          \u0275\u0275advance(4);
          \u0275\u0275property("nzStringTemplateOutlet", ctx.nzSuffixIcon);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.hasFeedback && !!ctx.status ? 7 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.nzAllowEmpty && !ctx.nzDisabled && ctx.value ? 8 : -1);
          \u0275\u0275advance();
          \u0275\u0275property("cdkConnectedOverlayHasBackdrop", ctx.nzBackdrop)("cdkConnectedOverlayPositions", ctx.overlayPositions())("cdkConnectedOverlayOrigin", ctx.origin)("cdkConnectedOverlayOpen", ctx.nzOpen);
        }
      },
      dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NzOutletModule, NzStringTemplateOutletDirective, NzIconModule, NzIconDirective, NzFormItemFeedbackIconComponent, NzTimePickerPanelComponent, NzOverlayModule, NzConnectedOverlayDirective, OverlayModule, CdkConnectedOverlay, AsyncPipe],
      encapsulation: 2
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTimePickerComponent, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation.None,
      selector: "nz-time-picker",
      exportAs: "nzTimePicker",
      template: `
    @if (nzPrefix(); as prefix) {
      <span class="ant-picker-prefix">
        <ng-container *nzStringTemplateOutlet="prefix">{{ prefix }}</ng-container>
      </span>
    }
    <div class="ant-picker-input">
      <input
        #inputElement
        [attr.id]="nzId"
        type="text"
        [size]="inputSize"
        autocomplete="off"
        [placeholder]="nzPlaceHolder || (i18nPlaceHolder$ | async)"
        [(ngModel)]="inputValue"
        [disabled]="nzDisabled"
        [readOnly]="nzInputReadOnly"
        (focus)="onFocus(true)"
        (blur)="onFocus(false)"
        (keyup.enter)="onKeyupEnter()"
        (keyup.escape)="onKeyupEsc()"
        (ngModelChange)="onInputChange($event)"
      />
      <span class="ant-picker-suffix">
        <ng-container *nzStringTemplateOutlet="nzSuffixIcon; let suffixIcon">
          <nz-icon [nzType]="suffixIcon" />
        </ng-container>
        @if (hasFeedback && !!status) {
          <nz-form-item-feedback-icon [status]="status" />
        }
      </span>
      @if (nzAllowEmpty && !nzDisabled && value) {
        <span class="ant-picker-clear" (click)="onClickClearBtn($event)">
          <nz-icon nzType="close-circle" nzTheme="fill" [attr.aria-label]="nzClearText" [attr.title]="nzClearText" />
        </span>
      }
    </div>

    <ng-template
      cdkConnectedOverlay
      nzConnectedOverlay
      cdkConnectedOverlayTransformOriginOn=".ant-picker-dropdown"
      [cdkConnectedOverlayHasBackdrop]="nzBackdrop"
      [cdkConnectedOverlayPositions]="overlayPositions()"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayOpen]="nzOpen"
      (detach)="close()"
      (overlayOutsideClick)="onClickOutside($event)"
      (positionChange)="onPositionChange($event)"
    >
      <div
        [animate.enter]="timepickerAnimationEnter()"
        [animate.leave]="timepickerAnimationLeave()"
        [class]="dropdownTimePickerClass()"
        style="position: relative"
      >
        <div class="ant-picker-panel-container">
          <div tabindex="-1" class="ant-picker-panel">
            <nz-time-picker-panel
              [class]="nzPopupClassName"
              [format]="nzFormat"
              [nzHourStep]="nzHourStep"
              [nzMinuteStep]="nzMinuteStep"
              [nzSecondStep]="nzSecondStep"
              [nzDisabledHours]="nzDisabledHours"
              [nzDisabledMinutes]="nzDisabledMinutes"
              [nzDisabledSeconds]="nzDisabledSeconds"
              [nzPlaceHolder]="nzPlaceHolder || (i18nPlaceHolder$ | async)"
              [nzHideDisabledOptions]="nzHideDisabledOptions"
              [nzUse12Hours]="nzUse12Hours"
              [nzDefaultOpenValue]="nzDefaultOpenValue"
              [nzAddOn]="nzAddOn"
              [nzClearText]="nzClearText"
              [nzNowText]="nzNowText"
              [nzOkText]="nzOkText"
              [nzAllowEmpty]="nzAllowEmpty"
              [(ngModel)]="value"
              (ngModelChange)="onPanelValueChange($event)"
              (closePanel)="closePanel()"
            />
          </div>
        </div>
      </div>
    </ng-template>
  `,
      host: {
        class: "ant-picker",
        "[class.ant-picker-large]": `finalSize() === 'large'`,
        "[class.ant-picker-small]": `finalSize() === 'small'`,
        "[class.ant-picker-disabled]": `nzDisabled`,
        "[class.ant-picker-focused]": `focused`,
        "[class.ant-picker-rtl]": `dir() === 'rtl'`,
        "[class.ant-picker-outlined]": `finalVariant() === 'outlined'`,
        "[class.ant-picker-borderless]": `finalVariant() === 'borderless'`,
        "[class.ant-picker-filled]": `finalVariant() === 'filled'`,
        "[class.ant-picker-underlined]": `finalVariant() === 'underlined'`,
        "(click)": "open()"
      },
      hostDirectives: [NzSpaceCompactItemDirective],
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzTimePickerComponent),
        multi: true
      }, {
        provide: NZ_SPACE_COMPACT_ITEM_TYPE,
        useValue: "picker"
      }],
      imports: [AsyncPipe, FormsModule, NzOutletModule, NzIconModule, NzFormItemFeedbackIconComponent, NzTimePickerPanelComponent, NzOverlayModule, OverlayModule]
    }]
  }], null, {
    inputRef: [{
      type: ViewChild,
      args: ["inputElement", {
        static: true
      }]
    }],
    nzId: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzStatus: [{
      type: Input
    }],
    nzVariant: [{
      type: Input
    }],
    nzHourStep: [{
      type: Input
    }],
    nzMinuteStep: [{
      type: Input
    }],
    nzSecondStep: [{
      type: Input
    }],
    nzClearText: [{
      type: Input
    }],
    nzNowText: [{
      type: Input
    }],
    nzOkText: [{
      type: Input
    }],
    nzPopupClassName: [{
      type: Input
    }],
    nzPlaceHolder: [{
      type: Input
    }],
    nzAddOn: [{
      type: Input
    }],
    nzDefaultOpenValue: [{
      type: Input
    }],
    nzDisabledHours: [{
      type: Input
    }],
    nzDisabledMinutes: [{
      type: Input
    }],
    nzDisabledSeconds: [{
      type: Input
    }],
    nzFormat: [{
      type: Input
    }],
    nzOpen: [{
      type: Input
    }],
    nzUse12Hours: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzSuffixIcon: [{
      type: Input
    }],
    nzOpenChange: [{
      type: Output
    }],
    nzHideDisabledOptions: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzAllowEmpty: [{
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
    nzAutoFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzBackdrop: [{
      type: Input
    }],
    nzInputReadOnly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
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
    nzNeedConfirm: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzNeedConfirm",
        required: false
      }]
    }],
    nzPlacement: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzPlacement",
        required: false
      }]
    }]
  });
})();
var NzTimePickerModule = class _NzTimePickerModule {
  static \u0275fac = function NzTimePickerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTimePickerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzTimePickerModule,
    imports: [NzTimePickerComponent, NzTimePickerPanelComponent],
    exports: [NzTimePickerPanelComponent, NzTimePickerComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzTimePickerComponent, NzTimePickerPanelComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTimePickerModule, [{
    type: NgModule,
    args: [{
      imports: [NzTimePickerComponent, NzTimePickerPanelComponent],
      exports: [NzTimePickerPanelComponent, NzTimePickerComponent]
    }]
  }], null, null);
})();

export {
  NzTimePickerPanelComponent,
  NzTimePickerComponent,
  NzTimePickerModule
};
//# debugId=9c4c5b23-0e63-506a-80cf-77023baf505f
//# sourceMappingURL=chunk-5TI46VEX.js.map
