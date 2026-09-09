import {
  BACKSPACE,
  DefaultValueAccessor,
  FocusMonitor,
  FormBuilder,
  FormControlDirective,
  LEFT_ARROW,
  MaxLengthValidator,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  RIGHT_ARROW,
  ReactiveFormsModule,
  Validators,
  elementAcceptsMinMax,
  isNativeFormElement,
  isTextualFormElement,
  selectValueAccessor,
  setNativeDomProperty,
  ɵFORM_CONTROL_INTEGRATION
} from "./chunk-TNYKEBYQ.js";
import {
  CSP_NONCE,
  Component,
  ContentChild,
  DOCUMENT,
  DestroyRef,
  Directionality,
  Directive,
  EMPTY,
  ElementRef,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NZ_FORM_SIZE,
  NZ_FORM_VARIANT,
  NZ_SPACE_COMPACT_ITEM_TYPE,
  NZ_SPACE_COMPACT_SIZE,
  NgModule,
  NgTemplateOutlet,
  NzButtonComponent,
  NzButtonModule,
  NzFormItemFeedbackIconComponent,
  NzFormStatusService,
  NzIconDirective,
  NzIconModule,
  NzSpaceCompactItemDirective,
  NzTransitionPatchDirective,
  NzWaveDirective,
  Output,
  Renderer2,
  RuntimeError,
  TemplateRef,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  afterRenderEffect,
  booleanAttribute,
  computed,
  contentChild,
  effect,
  formatRuntimeError,
  forwardRef,
  getStatusClassNames,
  getVariantClassNames,
  inject,
  input,
  isDevMode,
  isNotNil,
  isNumberFinite,
  linkedSignal,
  map,
  model,
  numberAttribute,
  output,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  takeUntilDestroyed,
  tap,
  toObservable,
  toSignal,
  triggerFocus,
  untracked,
  ɵɵControlFeature,
  ɵɵHostDirectivesFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵcontentQuerySignal,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-VTW5U2M5.js";

// node_modules/@angular/forms/fesm2022/_validation_errors-chunk.mjs
/**
 * @license Angular v22.1.0
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
function isArray(value) {
  return Array.isArray(value);
}
var MetadataReducer = {
  list() {
    return {
      reduce: (acc, item) => item === void 0 ? acc : [...acc, item],
      getInitial: () => []
    };
  },
  min() {
    return {
      reduce: (acc, item) => {
        if (acc === void 0 || item === void 0) {
          return acc ?? item;
        }
        return item < acc ? item : acc;
      },
      getInitial: () => void 0
    };
  },
  max() {
    return {
      reduce: (acc, item) => {
        if (acc === void 0 || item === void 0) {
          return acc ?? item;
        }
        return item > acc ? item : acc;
      },
      getInitial: () => void 0
    };
  },
  or() {
    return {
      reduce: (prev, next) => prev || next,
      getInitial: () => false
    };
  },
  and() {
    return {
      reduce: (prev, next) => prev && next,
      getInitial: () => true
    };
  },
  override
};
function override(getInitial) {
  return {
    reduce: (_, item) => item,
    getInitial: () => getInitial?.()
  };
}
var IS_ASYNC_VALIDATION_RESOURCE = /* @__PURE__ */ Symbol("IS_ASYNC_VALIDATION_RESOURCE");
var MetadataKey = class {
  reducer;
  create;
  brand;
  [IS_ASYNC_VALIDATION_RESOURCE];
  constructor(reducer, create) {
    this.reducer = reducer;
    this.create = create;
  }
};
function createMetadataKey(reducer) {
  return new MetadataKey(reducer ?? MetadataReducer.override());
}
function createLimitSelectionKey() {
  return createMetadataKey();
}
var REQUIRED = createMetadataKey(MetadataReducer.or());
var MIN = createLimitSelectionKey();
var MIN_DATE = createMetadataKey(MetadataReducer.max());
var MIN_NUMBER = createMetadataKey(MetadataReducer.max());
var MAX = createLimitSelectionKey();
var MAX_DATE = createMetadataKey(MetadataReducer.min());
var MAX_NUMBER = createMetadataKey(MetadataReducer.min());
var MIN_LENGTH = createMetadataKey(MetadataReducer.max());
var MAX_LENGTH = createMetadataKey(MetadataReducer.min());
var PATTERN = createMetadataKey(MetadataReducer.list());
function shallowArrayEquals(a, b) {
  if (a === b) return true;
  if (!a || !b) return false;
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (!Object.is(a[i], b[i])) return false;
  }
  return true;
}
function addDefaultField(errors, fieldTree) {
  if (isArray(errors)) {
    for (const error of errors) {
      error.fieldTree ??= fieldTree;
    }
  } else if (errors) {
    errors.fieldTree ??= fieldTree;
  }
  return errors;
}
var DEBOUNCER = createMetadataKey();
var FALSE_SIGNAL = computed(() => false, ...ngDevMode ? [{
  debugName: "FALSE_SIGNAL"
}] : []);
var ROOT_PATH_KEYS = computed(() => [], ...ngDevMode ? [{
  debugName: "ROOT_PATH_KEYS"
}] : []);
var ROOT_KEY_IN_PARENT = computed(() => {
  throw new RuntimeError(1905, ngDevMode && "The top-level field in the form has no parent.");
}, ...ngDevMode ? [{
  debugName: "ROOT_KEY_IN_PARENT"
}] : []);
var EMPTY2 = computed(() => [], ...ngDevMode ? [{
  debugName: "EMPTY"
}] : []);
var FALSE = computed(() => false, ...ngDevMode ? [{
  debugName: "FALSE"
}] : []);
var REGISTER_WEBMCP_FORM = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "REGISTER_WEBMCP_FORM" : "");
async function submit(form, options) {
  const node = untracked(form);
  if (untracked(node.submitState.submitting)) {
    return false;
  }
  const field = options === void 0 ? node.structure.root.fieldProxy : form;
  const detail = {
    root: node.structure.root.fieldProxy,
    submitted: form
  };
  options = typeof options === "function" ? {
    action: options
  } : options ?? node.structure.fieldManager.submitOptions;
  const action = options?.action;
  if (!action) {
    throw new RuntimeError(1915, (typeof ngDevMode === "undefined" || ngDevMode) && "Cannot submit form with no submit action. Specify the action when creating the form, or as an additional argument to `submit()`.");
  }
  node.markAsTouched();
  const onInvalid = options?.onInvalid;
  const shouldRun = shouldRunAction(node, options?.ignoreValidators);
  try {
    if (shouldRun) {
      node.submitState.selfSubmitting.set(true);
      const errors = await untracked(() => action?.(field, detail));
      errors && setSubmissionErrors(node, errors);
      return !errors || isArray(errors) && errors.length === 0;
    } else {
      untracked(() => onInvalid?.(field, detail));
    }
    return false;
  } finally {
    node.submitState.selfSubmitting.set(false);
  }
}
function shouldRunAction(node, ignoreValidators) {
  switch (ignoreValidators) {
    case "all":
      return true;
    case "none":
      return untracked(node.valid);
    default:
      return !untracked(node.invalid);
  }
}
function setSubmissionErrors(submittedField, errors) {
  if (!isArray(errors)) {
    errors = [errors];
  }
  const errorsByField = /* @__PURE__ */ new Map();
  for (const error of errors) {
    const errorWithField = addDefaultField(error, submittedField.fieldTree);
    const field = errorWithField.fieldTree();
    let fieldErrors = errorsByField.get(field);
    if (!fieldErrors) {
      fieldErrors = [];
      errorsByField.set(field, fieldErrors);
    }
    fieldErrors.push(errorWithField);
  }
  for (const [field, fieldErrors] of errorsByField) {
    field.submitState.submissionErrors.set(fieldErrors);
  }
}
var CompatValidationError = class {
  kind = "compat";
  control;
  fieldTree;
  context;
  message;
  constructor({
    context,
    kind,
    control
  }) {
    this.context = context;
    this.kind = kind;
    this.control = control;
  }
};
function signalErrorsToValidationErrors(errors) {
  if (errors.length === 0) {
    return null;
  }
  const errObj = {};
  for (const error of errors) {
    errObj[error.kind] = error instanceof CompatValidationError ? error.context : error;
  }
  return errObj;
}
function reactiveErrorsToSignalErrors(errors, control) {
  if (errors === null) {
    return [];
  }
  return Object.entries(errors).map(([kind, context]) => {
    return new CompatValidationError({
      context,
      kind,
      control
    });
  });
}

// node_modules/@angular/forms/fesm2022/signals.mjs
/**
 * @license Angular v22.1.0
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
var SIGNAL_FORMS_CONFIG = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "SIGNAL_FORMS_CONFIG" : "");
function normalizeErrors(error) {
  if (error === void 0) {
    return [];
  }
  if (Array.isArray(error)) {
    return error;
  }
  return [error];
}
var BaseNgValidationError = class {
  __brand = void 0;
  kind = "";
  fieldTree;
  message;
  constructor(options) {
    if (options) {
      Object.assign(this, options);
    }
  }
};
var NativeInputParseError = class extends BaseNgValidationError {
  kind = "parse";
};
function createParser(getValue, setValue, parse) {
  const errors = linkedSignal(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "errors"
  } : {}), {
    source: getValue,
    computation: () => [],
    equal: shallowArrayEquals
  }));
  const setRawValue = (rawValue) => {
    const result = parse(rawValue);
    errors.set(normalizeErrors(result.error));
    if (result.value !== void 0) {
      setValue(result.value);
    }
    errors.set(normalizeErrors(result.error));
  };
  const reset = () => {
    errors.set([]);
  };
  return {
    errors: errors.asReadonly(),
    setRawValue,
    reset
  };
}
var InteropNgControl = class {
  field;
  constructor(field) {
    this.field = field;
  }
  control = this;
  get value() {
    return this.field().controlValue();
  }
  get valid() {
    return this.field().valid();
  }
  get invalid() {
    return this.field().invalid();
  }
  get pending() {
    return this.field().pending();
  }
  get disabled() {
    return this.field().disabled();
  }
  get enabled() {
    return !this.field().disabled();
  }
  get errors() {
    return signalErrorsToValidationErrors(this.field().errors());
  }
  get pristine() {
    return !this.field().dirty();
  }
  get dirty() {
    return this.field().dirty();
  }
  get touched() {
    return this.field().touched();
  }
  get untouched() {
    return !this.field().touched();
  }
  get status() {
    if (this.field().disabled()) {
      return "DISABLED";
    }
    if (this.field().valid()) {
      return "VALID";
    }
    if (this.field().invalid()) {
      return "INVALID";
    }
    if (this.field().pending()) {
      return "PENDING";
    }
    throw new RuntimeError(1910, ngDevMode && "Unknown form control status");
  }
  valueAccessor = null;
  hasValidator(validator) {
    if (validator === Validators.required) {
      return this.field().required();
    }
    return false;
  }
  updateValueAndValidity() {
  }
};
var FIELD_STATE_KEY_TO_CONTROL_BINDING = {
  disabled: "disabled",
  disabledReasons: "disabledReasons",
  dirty: "dirty",
  errors: "errors",
  hidden: "hidden",
  invalid: "invalid",
  max: "max",
  maxLength: "maxLength",
  min: "min",
  minLength: "minLength",
  name: "name",
  pattern: "pattern",
  pending: "pending",
  readonly: "readonly",
  required: "required",
  touched: "touched"
};
var CONTROL_BINDING_TO_FIELD_STATE_KEY = /* @__PURE__ */ (() => {
  const map2 = {};
  for (const key of Object.keys(FIELD_STATE_KEY_TO_CONTROL_BINDING)) {
    map2[FIELD_STATE_KEY_TO_CONTROL_BINDING[key]] = key;
  }
  return map2;
})();
function readFieldStateBindingValue(fieldState, key) {
  const property = CONTROL_BINDING_TO_FIELD_STATE_KEY[key];
  return fieldState[property]?.();
}
var CONTROL_BINDING_NAMES = /* @__PURE__ */ (() => Object.values(FIELD_STATE_KEY_TO_CONTROL_BINDING))();
function createBindings() {
  return {};
}
function bindingUpdated(bindings, key, value) {
  if (bindings[key] !== value) {
    bindings[key] = value;
    return true;
  }
  return false;
}
function getNativeControlValue(element, currentValue, validityMonitor) {
  let modelValue;
  if (isInput(element) && validityMonitor.isBadInput(element)) {
    return {
      error: new NativeInputParseError()
    };
  }
  switch (element.type) {
    case "checkbox":
      return {
        value: element.checked
      };
    case "number":
    case "range":
    case "datetime-local":
      modelValue = untracked(currentValue);
      if (typeof modelValue === "number" || modelValue === null) {
        return {
          value: element.value === "" ? null : element.valueAsNumber
        };
      }
      break;
    case "date":
    case "month":
    case "time":
    case "week":
      modelValue = untracked(currentValue);
      if (modelValue === null || modelValue instanceof Date) {
        return {
          value: element.valueAsDate
        };
      } else if (typeof modelValue === "number") {
        return {
          value: element.valueAsNumber
        };
      }
      break;
  }
  if (element.tagName === "INPUT" && element.type === "text") {
    modelValue ??= untracked(currentValue);
    if (typeof modelValue === "number" || modelValue === null) {
      if (element.value === "") {
        return {
          value: null
        };
      }
      const parsed = Number(element.value);
      if (Number.isNaN(parsed)) {
        return {
          error: new NativeInputParseError()
        };
      }
      return {
        value: parsed
      };
    }
  }
  return {
    value: element.value
  };
}
function setNativeControlValue(element, value) {
  switch (element.type) {
    case "checkbox":
      element.checked = value;
      return;
    case "radio":
      element.checked = value === element.value;
      return;
    case "number":
    case "range":
    case "datetime-local":
      if (typeof value === "number") {
        setNativeNumberControlValue(element, value);
        return;
      } else if (value === null) {
        element.value = "";
        return;
      }
      break;
    case "date":
    case "month":
    case "time":
    case "week":
      if (value === null || value instanceof Date) {
        element.valueAsDate = value;
        return;
      } else if (typeof value === "number") {
        setNativeNumberControlValue(element, value);
        return;
      }
  }
  if (element.tagName === "INPUT" && element.type === "text") {
    if (typeof value === "number") {
      element.value = isNaN(value) ? "" : String(value);
      return;
    }
    if (value === null) {
      if (typeof ngDevMode !== "undefined" && ngDevMode) {
        console.warn(formatRuntimeError(1921, `The text input ${element.name} received a null value. Text inputs should use empty strings to represent null values.  The input's value will be set to an empty string instead.`));
      }
      element.value = "";
      return;
    }
  }
  element.value = value;
}
function setNativeNumberControlValue(element, value) {
  if (isNaN(value)) {
    element.value = "";
  } else {
    element.valueAsNumber = value;
  }
}
function isInput(element) {
  return element.tagName === "INPUT";
}
function inputRequiresValidityTracking(input2) {
  return input2.type === "date" || input2.type === "datetime-local" || input2.type === "month" || input2.type === "time" || input2.type === "week";
}
function formatDateForInput(date, type) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  if (type === "month") {
    return `${year}-${month}`;
  }
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function formatDateForMinMax(name, value, type) {
  if (value instanceof Date && (name === "min" || name === "max") && (type === "date" || type === "month")) {
    return formatDateForInput(value, type);
  }
  return value;
}
function customControlCreate(host, parent) {
  host.listenToCustomControlModel((value) => parent.state().controlValue.set(value));
  host.listenToCustomControlOutput("touch", () => parent.state().markAsTouched());
  parent.registerAsBinding(host.customControl);
  const bindings = createBindings();
  return () => {
    const state = parent.state();
    const controlValue = state.controlValue();
    if (bindingUpdated(bindings, "controlValue", controlValue)) {
      host.setCustomControlModelInput(controlValue);
    }
    for (const name of CONTROL_BINDING_NAMES) {
      let value;
      if (name === "errors") {
        value = parent.errors();
      } else {
        value = readFieldStateBindingValue(state, name);
      }
      if (bindingUpdated(bindings, name, value)) {
        host.setInputOnDirectives(name, value);
        if (parent.elementAcceptsNativeProperty(name) && !host.customControlHasInput(name)) {
          const domValue = formatDateForMinMax(name, value, parent.nativeFormElement.type);
          setNativeDomProperty(parent.renderer, parent.nativeFormElement, name, domValue);
        }
      }
    }
  };
}
function isValidatorObject(v) {
  return typeof v === "object" && v !== null;
}
function cvaControlCreate(host, parent) {
  const bindings = createBindings();
  parent.controlValueAccessor.registerOnChange((value) => {
    bindings["controlValue"] = value;
    parent.state().controlValue.set(value);
  });
  parent.controlValueAccessor.registerOnTouched(() => parent.state().markAsTouched());
  const legacyValidators = parent.injector.get(NG_VALIDATORS, null, {
    optional: true,
    self: true
  });
  if (legacyValidators) {
    let version;
    for (const v of legacyValidators) {
      if (isValidatorObject(v) && v.registerOnValidatorChange) {
        version ??= signal(0);
        v.registerOnValidatorChange(() => {
          version.update((n) => n + 1);
        });
      }
    }
    const validatorFns = legacyValidators.map((v) => typeof v === "function" ? v : v.validate.bind(v));
    const mergedValidator = Validators.compose(validatorFns);
    const parseErrors = computed(() => {
      version?.();
      const errors = mergedValidator ? mergedValidator(parent.interopNgControl.control) : null;
      return reactiveErrorsToSignalErrors(errors, parent.interopNgControl.control);
    }, ...ngDevMode ? [{
      debugName: "parseErrors"
    }] : []);
    parent.parseErrorsSource.set(parseErrors);
  }
  parent.registerAsBinding({
    reset: () => {
      const value = parent.state().value();
      bindings["controlValue"] = value;
      untracked(() => parent.controlValueAccessor.writeValue(value));
    }
  });
  return () => {
    const fieldState = parent.state();
    const controlValue = fieldState.controlValue();
    if (bindingUpdated(bindings, "controlValue", controlValue)) {
      untracked(() => parent.controlValueAccessor.writeValue(controlValue));
    }
    for (const name of CONTROL_BINDING_NAMES) {
      const value = readFieldStateBindingValue(fieldState, name);
      if (bindingUpdated(bindings, name, value)) {
        const propertyWasSet = host.setInputOnDirectives(name, value);
        if (name === "disabled" && parent.controlValueAccessor.setDisabledState) {
          untracked(() => parent.controlValueAccessor.setDisabledState(value));
        } else if (!propertyWasSet && parent.elementAcceptsNativeProperty(name)) {
          setNativeDomProperty(parent.renderer, parent.nativeFormElement, name, value);
        }
      }
    }
  };
}
function observeSelectMutations(select, onMutation, destroyRef) {
  if (typeof MutationObserver !== "function") {
    return;
  }
  const observer = new MutationObserver((mutations) => {
    if (mutations.some((m) => isRelevantSelectMutation(m))) {
      onMutation();
    }
  });
  observer.observe(select, {
    attributes: true,
    attributeFilter: ["value"],
    characterData: true,
    childList: true,
    subtree: true
  });
  destroyRef.onDestroy(() => observer.disconnect());
}
function isRelevantSelectMutation(mutation) {
  if (mutation.type === "childList" || mutation.type === "characterData") {
    if (mutation.target instanceof Comment) {
      return false;
    }
    for (const node of mutation.addedNodes) {
      if (!(node instanceof Comment)) {
        return true;
      }
    }
    for (const node of mutation.removedNodes) {
      if (!(node instanceof Comment)) {
        return true;
      }
    }
    return false;
  }
  if (mutation.type === "attributes" && mutation.target instanceof HTMLOptionElement) {
    return true;
  }
  return false;
}
function nativeControlCreate(host, parent, parseErrorsSource, validityMonitor) {
  let updateMode = false;
  const input2 = parent.nativeFormElement;
  const parser = createParser(() => parent.state().value(), (rawValue) => parent.state().controlValue.set(rawValue), (_rawValue) => getNativeControlValue(input2, parent.state().value, validityMonitor));
  parseErrorsSource.set(parser.errors);
  parent.onReset = () => {
    parser.reset();
    const value = parent.state().value();
    bindings["controlValue"] = value;
    setNativeControlValue(input2, value);
  };
  host.listenToDom("input", () => parser.setRawValue(void 0));
  host.listenToDom("blur", () => parent.state().markAsTouched());
  if (isInput(input2) && inputRequiresValidityTracking(input2)) {
    validityMonitor.watchValidity(parent.destroyRef, input2, () => parser.setRawValue(void 0));
  }
  parent.registerAsBinding();
  if (input2.tagName === "SELECT") {
    observeSelectMutations(input2, () => {
      if (!updateMode) {
        return;
      }
      input2.value = parent.state().controlValue();
    }, parent.destroyRef);
  }
  const bindings = createBindings();
  return () => {
    const state = parent.state();
    for (const name of CONTROL_BINDING_NAMES) {
      const value = readFieldStateBindingValue(state, name);
      if (bindingUpdated(bindings, name, value)) {
        host.setInputOnDirectives(name, value);
        if (parent.elementAcceptsNativeProperty(name)) {
          const domValue = formatDateForMinMax(name, value, input2.type);
          setNativeDomProperty(parent.renderer, input2, name, domValue);
        }
      }
    }
    const controlValue = state.controlValue();
    if (bindingUpdated(bindings, "controlValue", controlValue)) {
      setNativeControlValue(input2, controlValue);
    }
    updateMode = true;
  };
}
var InputValidityMonitor = class _InputValidityMonitor {
  static \u0275fac = function InputValidityMonitor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputValidityMonitor)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InputValidityMonitor,
    factory: (__ngFactoryType__) => AnimationInputValidityMonitor.\u0275fac(__ngFactoryType__),
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputValidityMonitor, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useClass: forwardRef(() => AnimationInputValidityMonitor)
    }]
  }], null, null);
})();
var AnimationInputValidityMonitor = class _AnimationInputValidityMonitor extends InputValidityMonitor {
  document = inject(DOCUMENT);
  cspNonce = inject(CSP_NONCE, {
    optional: true
  });
  injectedStyles = /* @__PURE__ */ new WeakMap();
  watchValidity(destroyRef, element, callback) {
    if (false) {
      return;
    }
    const rootNode = element.getRootNode();
    if (!this.injectedStyles.has(rootNode)) {
      this.injectedStyles.set(rootNode, this.createTransitionStyle(rootNode));
    }
    const onAnimationStart = (event) => {
      const animationEvent = event;
      if (animationEvent.animationName === "ng-valid" || animationEvent.animationName === "ng-invalid") {
        callback();
      }
    };
    element.addEventListener("animationstart", onAnimationStart);
    destroyRef.onDestroy(() => {
      element.removeEventListener("animationstart", onAnimationStart);
    });
  }
  isBadInput(element) {
    return element.validity?.badInput ?? false;
  }
  createTransitionStyle(rootNode) {
    const element = this.document.createElement("style");
    if (this.cspNonce) {
      element.nonce = this.cspNonce;
    }
    element.textContent = `
      @keyframes ng-valid {}
      @keyframes ng-invalid {}
      input:valid, textarea:valid {
        animation: ng-valid 0.001s;
      }
      input:invalid, textarea:invalid {
        animation: ng-invalid 0.001s;
      }
    `;
    if (rootNode.nodeType === 9) {
      rootNode.head?.appendChild(element);
    } else {
      rootNode.appendChild(element);
    }
    return element;
  }
  ngOnDestroy() {
    this.injectedStyles.get(this.document)?.remove();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AnimationInputValidityMonitor_BaseFactory;
    return function AnimationInputValidityMonitor_Factory(__ngFactoryType__) {
      return (\u0275AnimationInputValidityMonitor_BaseFactory || (\u0275AnimationInputValidityMonitor_BaseFactory = \u0275\u0275getInheritedFactory(_AnimationInputValidityMonitor)))(__ngFactoryType__ || _AnimationInputValidityMonitor);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AnimationInputValidityMonitor,
    factory: _AnimationInputValidityMonitor.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationInputValidityMonitor, [{
    type: Injectable
  }], null, null);
})();
var \u0275NgFieldDirective = /* @__PURE__ */ Symbol();
var FORM_FIELD = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "FORM_FIELD" : "");
var FormField = class _FormField {
  field = input.required(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "field"
  } : {}), {
    alias: "formField"
  }));
  state = computed(() => this.field()(), ...ngDevMode ? [{
    debugName: "state"
  }] : []);
  renderer = inject(Renderer2);
  destroyRef = inject(DestroyRef);
  injector = inject(Injector);
  element = inject(ElementRef).nativeElement;
  elementIsNativeFormElement = isNativeFormElement(this.element);
  elementAcceptsTextualValues = isTextualFormElement(this.element);
  _elementAcceptsMinMax;
  nativeFormElement = this.elementIsNativeFormElement ? this.element : void 0;
  focuser = (options) => this.element.focus(options);
  controlValueAccessors = inject(NG_VALUE_ACCESSOR, {
    optional: true,
    self: true
  });
  config = inject(SIGNAL_FORMS_CONFIG, {
    optional: true
  });
  validityMonitor = inject(InputValidityMonitor);
  parseErrorsSource = signal(void 0, ...ngDevMode ? [{
    debugName: "parseErrorsSource"
  }] : []);
  _interopNgControl;
  get interopNgControl() {
    return this._interopNgControl ??= new InteropNgControl(this.state);
  }
  parseErrors = computed(() => this.parseErrorsSource()?.().map((err) => __spreadProps(__spreadValues({}, err), {
    fieldTree: untracked(this.state).fieldTree,
    formField: this
  })) ?? [], __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "parseErrors"
  } : {}), {
    equal: shallowArrayEquals
  }));
  errors = computed(() => this.state().errors().filter((err) => !err.formField || err.formField === this), __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "errors"
  } : {}), {
    equal: shallowArrayEquals
  }));
  isFieldBinding = false;
  resetter = () => {
  };
  parseErrorsResetCallback;
  setParseErrors(source) {
    this.parseErrorsSource.set(source);
  }
  set onReset(callback) {
    this.parseErrorsResetCallback = callback;
  }
  get onReset() {
    return this.parseErrorsResetCallback;
  }
  get controlValueAccessor() {
    if (!this.controlValueAccessors || this.controlValueAccessors.length === 0) {
      return this.interopNgControl?.valueAccessor ?? void 0;
    }
    return selectValueAccessor(this.interopNgControl, this.controlValueAccessors) ?? void 0;
  }
  installClassBindingEffect() {
    const classes = Object.entries(this.config?.classes ?? {}).map(([className, computation]) => [className, computed(() => computation(this))]);
    if (classes.length === 0) {
      return;
    }
    const bindings = createBindings();
    afterRenderEffect({
      write: () => {
        for (const [className, computation] of classes) {
          const active = computation();
          if (bindingUpdated(bindings, className, active)) {
            if (active) {
              this.renderer.addClass(this.element, className);
            } else {
              this.renderer.removeClass(this.element, className);
            }
          }
        }
      }
    }, {
      injector: this.injector
    });
  }
  focus(options) {
    this.focuser(options);
  }
  reset() {
    this.resetter();
    this.parseErrorsResetCallback?.(this.state().value());
  }
  registerAsBinding(bindingOptions) {
    if (this.isFieldBinding) {
      throw new RuntimeError(1913, typeof ngDevMode !== "undefined" && ngDevMode && "FormField already registered as a binding");
    }
    this.isFieldBinding = true;
    this.installClassBindingEffect();
    if (bindingOptions?.focus) {
      this.focuser = (focusOptions) => bindingOptions.focus(focusOptions);
    }
    if (bindingOptions?.reset) {
      this.resetter = () => bindingOptions.reset();
    }
    effect((onCleanup) => {
      const fieldNode = this.state();
      fieldNode.nodeState.formFieldBindings.update((controls) => [...controls, this]);
      onCleanup(() => {
        fieldNode.nodeState.formFieldBindings.update((controls) => controls.filter((c) => c !== this));
      });
    }, {
      injector: this.injector
    });
    if (typeof ngDevMode !== "undefined" && ngDevMode) {
      effect(() => {
        const fieldNode = this.state();
        if (fieldNode.hidden()) {
          const path = fieldNode.structure.pathKeys().join(".") || "<root>";
          console.warn(formatRuntimeError(1916, `Field '${path}' is hidden but is being rendered. Hidden fields should be removed from the DOM using @if.`));
        }
      }, {
        injector: this.injector
      });
    }
  }
  [\u0275NgFieldDirective];
  \u0275ngControlCreate(host) {
    if (host.hasPassThrough) {
      return;
    }
    if (this.controlValueAccessor) {
      this.\u0275ngControlUpdate = cvaControlCreate(host, this);
    } else if (host.customControl) {
      this.\u0275ngControlUpdate = customControlCreate(host, this);
    } else if (this.elementIsNativeFormElement) {
      this.\u0275ngControlUpdate = nativeControlCreate(host, this, this.parseErrorsSource, this.validityMonitor);
    } else {
      throw new RuntimeError(1914, typeof ngDevMode !== "undefined" && ngDevMode && `${host.descriptor} is an invalid [formField] directive host. The host must be a native form control (such as <input>', '<select>', or '<textarea>') or a custom form control with a 'value' or 'checked' model.`);
    }
  }
  \u0275ngControlUpdate;
  elementAcceptsNativeProperty(key) {
    if (!this.elementIsNativeFormElement) {
      return false;
    }
    switch (key) {
      case "min":
      case "max":
        return this._elementAcceptsMinMax ??= elementAcceptsMinMax(this.element);
      case "minLength":
      case "maxLength":
        return this.elementAcceptsTextualValues;
      case "disabled":
      case "required":
      case "readonly":
      case "name":
        return true;
      default:
        return false;
    }
  }
  static \u0275fac = function FormField_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormField)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormField,
    selectors: [["", "formField", ""]],
    inputs: {
      field: [1, "formField", "field"]
    },
    exportAs: ["formField"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: FORM_FIELD,
      useExisting: _FormField
    }, {
      provide: NgControl,
      useFactory: () => inject(_FormField).interopNgControl
    }, {
      provide: \u0275FORM_CONTROL_INTEGRATION,
      useFactory: () => inject(FORM_FIELD, {
        self: true
      })
    }]), \u0275\u0275ControlFeature("formField")]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormField, [{
    type: Directive,
    args: [{
      selector: "[formField]",
      exportAs: "formField",
      providers: [{
        provide: FORM_FIELD,
        useExisting: FormField
      }, {
        provide: NgControl,
        useFactory: () => inject(FormField).interopNgControl
      }, {
        provide: \u0275FORM_CONTROL_INTEGRATION,
        useFactory: () => inject(FORM_FIELD, {
          self: true
        })
      }]
    }]
  }], null, {
    field: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "formField",
        required: true
      }]
    }]
  });
})();
var FormRoot = class _FormRoot {
  fieldTree = input.required(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "fieldTree"
  } : {}), {
    alias: "formRoot"
  }));
  onSubmit(event) {
    event.preventDefault();
    untracked(() => {
      const fieldTree = this.fieldTree();
      const node = fieldTree();
      if (node.structure.fieldManager.submitOptions) {
        submit(fieldTree);
      }
    });
  }
  static \u0275fac = function FormRoot_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FormRoot)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FormRoot,
    selectors: [["form", "formRoot", ""]],
    hostAttrs: ["novalidate", ""],
    hostBindings: function FormRoot_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("submit", function FormRoot_submit_HostBindingHandler($event) {
          return ctx.onSubmit($event);
        });
      }
    },
    inputs: {
      fieldTree: [1, "formRoot", "fieldTree"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormRoot, [{
    type: Directive,
    args: [{
      selector: "form[formRoot]",
      host: {
        "novalidate": "",
        "(submit)": "onSubmit($event)"
      }
    }]
  }], null, {
    fieldTree: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "formRoot",
        required: true
      }]
    }]
  });
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-input.mjs
var _c0 = ["otpInput"];
function NzInputOtpComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 2, 0);
    \u0275\u0275listener("input", function NzInputOtpComponent_For_1_Template_input_input_0_listener($event) {
      const $index_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInput($index_r2, $event));
    })("focus", function NzInputOtpComponent_For_1_Template_input_focus_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFocus($event));
    })("keydown", function NzInputOtpComponent_For_1_Template_input_keydown_0_listener($event) {
      const $index_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onKeyDown($index_r2, $event));
    })("paste", function NzInputOtpComponent_For_1_Template_input_paste_0_listener($event) {
      const $index_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPaste($index_r2, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzSize", ctx_r2.nzSize)("formControl", item_r4)("nzStatus", ctx_r2.nzStatus);
    \u0275\u0275control();
  }
}
var _c1 = [[["", "nzInputAddonBefore", ""]], [["", "nzInputAddonAfter", ""]], [["", "nzInputSearchEnterButton", ""]], [["", "nzInputPrefix", ""]], [["", "nzInputSuffix", ""]], [["", "nzInputClearIcon", ""]], [["", "nz-input", ""]]];
var _c2 = ["[nzInputAddonBefore]", "[nzInputAddonAfter]", "[nzInputSearchEnterButton]", "[nzInputPrefix]", "[nzInputSuffix]", "[nzInputClearIcon]", "[nz-input]"];
var _c3 = (a0) => ({
  $implicit: a0
});
function NzInputWrapperComponent_Conditional_0_ng_template_0_Template(rf, ctx) {
}
function NzInputWrapperComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzInputWrapperComponent_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const inputWithAddonInner_r1 = \u0275\u0275reference(4);
    \u0275\u0275property("ngTemplateOutlet", inputWithAddonInner_r1);
  }
}
function NzInputWrapperComponent_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzInputWrapperComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzInputWrapperComponent_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const inputWithAffixInner_r2 = \u0275\u0275reference(8);
    \u0275\u0275property("ngTemplateOutlet", inputWithAffixInner_r2);
  }
}
function NzInputWrapperComponent_Conditional_2_ng_template_0_Template(rf, ctx) {
}
function NzInputWrapperComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzInputWrapperComponent_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const input_r3 = \u0275\u0275reference(10);
    \u0275\u0275property("ngTemplateOutlet", input_r3);
  }
}
function NzInputWrapperComponent_ng_template_3_Conditional_1_ProjectionFallback_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate(ctx_r3.nzAddonBefore());
  }
}
function NzInputWrapperComponent_ng_template_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275projection(1, 0, null, NzInputWrapperComponent_ng_template_3_Conditional_1_ProjectionFallback_1_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
}
function NzInputWrapperComponent_ng_template_3_Conditional_2_ng_template_0_Template(rf, ctx) {
}
function NzInputWrapperComponent_ng_template_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzInputWrapperComponent_ng_template_3_Conditional_2_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const inputWithAffix_r5 = \u0275\u0275reference(6);
    \u0275\u0275property("ngTemplateOutlet", inputWithAffix_r5);
  }
}
function NzInputWrapperComponent_ng_template_3_Conditional_3_ng_template_0_Template(rf, ctx) {
}
function NzInputWrapperComponent_ng_template_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzInputWrapperComponent_ng_template_3_Conditional_3_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const input_r3 = \u0275\u0275reference(10);
    \u0275\u0275property("ngTemplateOutlet", input_r3);
  }
}
function NzInputWrapperComponent_ng_template_3_Conditional_4_Conditional_1_ProjectionFallback_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const nzEnterButton_r7 = \u0275\u0275readContextLet(0);
    \u0275\u0275textInterpolate1(" ", nzEnterButton_r7, " ");
  }
}
function NzInputWrapperComponent_ng_template_3_Conditional_4_Conditional_1_ProjectionFallback_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 9);
  }
}
function NzInputWrapperComponent_ng_template_3_Conditional_4_Conditional_1_ProjectionFallback_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NzInputWrapperComponent_ng_template_3_Conditional_4_Conditional_1_ProjectionFallback_2_Conditional_0_Template, 1, 1)(1, NzInputWrapperComponent_ng_template_3_Conditional_4_Conditional_1_ProjectionFallback_2_Conditional_1_Template, 1, 0, "nz-icon", 9);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const nzEnterButton_r7 = \u0275\u0275readContextLet(0);
    \u0275\u0275conditional(nzEnterButton_r7 && typeof nzEnterButton_r7 === "string" ? 0 : 1);
  }
}
function NzInputWrapperComponent_ng_template_3_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "button", 8);
    \u0275\u0275listener("click", function NzInputWrapperComponent_ng_template_3_Conditional_4_Conditional_1_Template_button_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.inputSearchDir.search($event));
    });
    \u0275\u0275projection(2, 2, null, NzInputWrapperComponent_ng_template_3_Conditional_4_Conditional_1_ProjectionFallback_2_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    const nzEnterButton_r8 = \u0275\u0275storeLet(ctx_r3.inputSearchDir.nzEnterButton());
    const hasEnterButton_r9 = ctx_r3.inputSearchEnterButton() ?? nzEnterButton_r8 !== false;
    \u0275\u0275advance();
    \u0275\u0275property("nzType", hasEnterButton_r9 ? "primary" : "default")("nzSize", ctx_r3.size())("nzLoading", ctx_r3.inputSearchDir.nzLoading());
  }
}
function NzInputWrapperComponent_ng_template_3_Conditional_4_ProjectionFallback_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate(ctx_r3.nzAddonAfter());
  }
}
function NzInputWrapperComponent_ng_template_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275conditionalCreate(1, NzInputWrapperComponent_ng_template_3_Conditional_4_Conditional_1_Template, 4, 4, "button", 7);
    \u0275\u0275projection(2, 1, null, NzInputWrapperComponent_ng_template_3_Conditional_4_ProjectionFallback_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.inputSearchDir ? 1 : -1);
  }
}
function NzInputWrapperComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275conditionalCreate(1, NzInputWrapperComponent_ng_template_3_Conditional_1_Template, 3, 0, "span", 6);
    \u0275\u0275conditionalCreate(2, NzInputWrapperComponent_ng_template_3_Conditional_2_Template, 1, 1, null, 4)(3, NzInputWrapperComponent_ng_template_3_Conditional_3_Template, 1, 1, null, 4);
    \u0275\u0275conditionalCreate(4, NzInputWrapperComponent_ng_template_3_Conditional_4_Template, 4, 1, "span", 6);
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
function NzInputWrapperComponent_ng_template_5_ng_template_1_Template(rf, ctx) {
}
function NzInputWrapperComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, NzInputWrapperComponent_ng_template_5_ng_template_1_Template, 0, 0, "ng-template", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const inputWithAffixInner_r2 = \u0275\u0275reference(8);
    \u0275\u0275classMap(ctx_r3.affixWrapperClass());
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", inputWithAffixInner_r2);
  }
}
function NzInputWrapperComponent_ng_template_7_Conditional_0_ProjectionFallback_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate(ctx_r3.nzPrefix());
  }
}
function NzInputWrapperComponent_ng_template_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275projection(1, 3, null, NzInputWrapperComponent_ng_template_7_Conditional_0_ProjectionFallback_1_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
}
function NzInputWrapperComponent_ng_template_7_ng_template_1_Template(rf, ctx) {
}
function NzInputWrapperComponent_ng_template_7_Conditional_2_Conditional_1_ProjectionFallback_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 17);
  }
}
function NzInputWrapperComponent_ng_template_7_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275listener("click", function NzInputWrapperComponent_ng_template_7_Conditional_2_Conditional_1_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext(3);
      ctx_r3.clear();
      return \u0275\u0275resetView(ctx_r3.inputSearchDir?.search($event, "clear"));
    });
    \u0275\u0275projection(1, 5, null, NzInputWrapperComponent_ng_template_7_Conditional_2_Conditional_1_ProjectionFallback_1_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("ant-input-clear-icon-has-suffix", ctx_r3.nzSuffix() || ctx_r3.suffix() || ctx_r3.hasFeedback() || ctx_r3.inputPasswordDir?.nzVisibilityToggle())("ant-input-clear-icon-hidden", !ctx_r3.inputDir().value() || ctx_r3.disabled() || ctx_r3.readOnly());
  }
}
function NzInputWrapperComponent_ng_template_7_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.dataCount());
  }
}
function NzInputWrapperComponent_ng_template_7_Conditional_2_Conditional_3_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzInputWrapperComponent_ng_template_7_Conditional_2_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzInputWrapperComponent_ng_template_7_Conditional_2_Conditional_3_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 19);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", ctx)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c3, ctx_r3.inputPasswordDir.nzVisible()));
  }
}
function NzInputWrapperComponent_ng_template_7_Conditional_2_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 20);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275property("nzType", ctx_r3.inputPasswordDir.nzVisible() ? "eye" : "eye-invisible");
  }
}
function NzInputWrapperComponent_ng_template_7_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275listener("click", function NzInputWrapperComponent_ng_template_7_Conditional_2_Conditional_3_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.inputPasswordDir.toggleVisible());
    });
    \u0275\u0275conditionalCreate(1, NzInputWrapperComponent_ng_template_7_Conditional_2_Conditional_3_Conditional_1_Template, 1, 4, null, 19)(2, NzInputWrapperComponent_ng_template_7_Conditional_2_Conditional_3_Conditional_2_Template, 1, 1, "nz-icon", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_7_0 = ctx_r3.inputPasswordIconTmpl()) ? 1 : 2, tmp_7_0);
  }
}
function NzInputWrapperComponent_ng_template_7_Conditional_2_ProjectionFallback_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate(ctx_r3.nzSuffix());
  }
}
function NzInputWrapperComponent_ng_template_7_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-form-item-feedback-icon", 15);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("status", ctx_r3.status());
  }
}
function NzInputWrapperComponent_ng_template_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275conditionalCreate(1, NzInputWrapperComponent_ng_template_7_Conditional_2_Conditional_1_Template, 3, 4, "span", 12);
    \u0275\u0275conditionalCreate(2, NzInputWrapperComponent_ng_template_7_Conditional_2_Conditional_2_Template, 2, 1, "span", 13);
    \u0275\u0275conditionalCreate(3, NzInputWrapperComponent_ng_template_7_Conditional_2_Conditional_3_Template, 3, 1, "span", 14);
    \u0275\u0275projection(4, 4, null, NzInputWrapperComponent_ng_template_7_Conditional_2_ProjectionFallback_4_Template, 1, 1);
    \u0275\u0275conditionalCreate(6, NzInputWrapperComponent_ng_template_7_Conditional_2_Conditional_6_Template, 1, 1, "nz-form-item-feedback-icon", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.nzAllowClear() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.nzShowCount() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.inputPasswordDir && ctx_r3.inputPasswordDir.nzVisibilityToggle() ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.hasFeedback() && ctx_r3.status() ? 6 : -1);
  }
}
function NzInputWrapperComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NzInputWrapperComponent_ng_template_7_Conditional_0_Template, 3, 0, "span", 10);
    \u0275\u0275template(1, NzInputWrapperComponent_ng_template_7_ng_template_1_Template, 0, 0, "ng-template", 4);
    \u0275\u0275conditionalCreate(2, NzInputWrapperComponent_ng_template_7_Conditional_2_Template, 7, 4, "span", 11);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const input_r3 = \u0275\u0275reference(10);
    \u0275\u0275conditional(ctx_r3.hasPrefix() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", input_r3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.hasSuffix() ? 2 : -1);
  }
}
function NzInputWrapperComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 6);
  }
}
var _c4 = [[["textarea", "nz-input", ""]]];
var _c5 = ["textarea[nz-input]"];
var NzInputAddonBeforeDirective = class _NzInputAddonBeforeDirective {
  static \u0275fac = function NzInputAddonBeforeDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzInputAddonBeforeDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzInputAddonBeforeDirective,
    selectors: [["", "nzInputAddonBefore", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputAddonBeforeDirective, [{
    type: Directive,
    args: [{
      selector: "[nzInputAddonBefore]"
    }]
  }], null, null);
})();
var NzInputAddonAfterDirective = class _NzInputAddonAfterDirective {
  static \u0275fac = function NzInputAddonAfterDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzInputAddonAfterDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzInputAddonAfterDirective,
    selectors: [["", "nzInputAddonAfter", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputAddonAfterDirective, [{
    type: Directive,
    args: [{
      selector: "[nzInputAddonAfter]"
    }]
  }], null, null);
})();
var NzInputPrefixDirective = class _NzInputPrefixDirective {
  static \u0275fac = function NzInputPrefixDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzInputPrefixDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzInputPrefixDirective,
    selectors: [["", "nzInputPrefix", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputPrefixDirective, [{
    type: Directive,
    args: [{
      selector: "[nzInputPrefix]"
    }]
  }], null, null);
})();
var NzInputSuffixDirective = class _NzInputSuffixDirective {
  static \u0275fac = function NzInputSuffixDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzInputSuffixDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzInputSuffixDirective,
    selectors: [["", "nzInputSuffix", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputSuffixDirective, [{
    type: Directive,
    args: [{
      selector: "[nzInputSuffix]"
    }]
  }], null, null);
})();
var NzInputPasswordDirective = class _NzInputPasswordDirective {
  nzVisibilityToggle = input(
    true,
    ...ngDevMode ? [{
      debugName: "nzVisibilityToggle"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  nzVisible = model(
    false,
    ...ngDevMode ? [{
      debugName: "nzVisible"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  toggleVisible() {
    this.nzVisible.update((value) => !value);
  }
  static \u0275fac = function NzInputPasswordDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzInputPasswordDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzInputPasswordDirective,
    selectors: [["nz-input-password"]],
    hostAttrs: [1, "ant-input-password"],
    inputs: {
      nzVisibilityToggle: [1, "nzVisibilityToggle"],
      nzVisible: [1, "nzVisible"]
    },
    outputs: {
      nzVisible: "nzVisibleChange"
    },
    exportAs: ["nzInputPassword"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputPasswordDirective, [{
    type: Directive,
    args: [{
      selector: "nz-input-password",
      exportAs: "nzInputPassword",
      host: {
        class: "ant-input-password"
      }
    }]
  }], null, {
    nzVisibilityToggle: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzVisibilityToggle",
        required: false
      }]
    }],
    nzVisible: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzVisible",
        required: false
      }]
    }, {
      type: Output,
      args: ["nzVisibleChange"]
    }]
  });
})();
var NzInputPasswordIconDirective = class _NzInputPasswordIconDirective {
  /**
   * @internal
   */
  static ngTemplateContextGuard(_, context) {
    return true;
  }
  static \u0275fac = function NzInputPasswordIconDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzInputPasswordIconDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzInputPasswordIconDirective,
    selectors: [["", "nzInputPasswordIcon", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputPasswordIconDirective, [{
    type: Directive,
    args: [{
      selector: "[nzInputPasswordIcon]"
    }]
  }], null, null);
})();
var NZ_INPUT_WRAPPER = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "nz-input-wrapper" : "");
var NZ_INPUT_SEARCH = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "nz-input-search" : "");
var PREFIX_CLS = "ant-input";
var NzInputDirective = class _NzInputDirective {
  elementRef = inject(ElementRef);
  compactSize = inject(NZ_SPACE_COMPACT_SIZE, {
    optional: true
  });
  destroyRef = inject(DestroyRef);
  nzFormStatusService = inject(NzFormStatusService, {
    optional: true
  });
  inputWrapper = inject(NZ_INPUT_WRAPPER, {
    host: true,
    optional: true
  });
  focusMonitor = inject(FocusMonitor);
  hostView = inject(ViewContainerRef);
  inputPasswordDir = inject(NzInputPasswordDirective, {
    host: true,
    optional: true
  });
  inputSearchDir = inject(NZ_INPUT_SEARCH, {
    host: true,
    optional: true
  });
  formField = inject(FORM_FIELD, {
    self: true,
    optional: true
  });
  ngControl = inject(NgControl, {
    self: true,
    optional: true
  });
  nativeValue = signal(
    this.elementRef.nativeElement.value,
    ...ngDevMode ? [{
      debugName: "nativeValue"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  value = computed(
    () => {
      if (this.formField) {
        return String(this.formField.state().value() ?? "");
      }
      return this.nativeValue();
    },
    ...ngDevMode ? [{
      debugName: "value"
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
  nzSize = input(
    "default",
    ...ngDevMode ? [{
      debugName: "nzSize"
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
  disabled = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "disabled"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  readonly = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "readonly"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  controlDisabled = signal(
    false,
    ...ngDevMode ? [{
      debugName: "controlDisabled"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  finalDisabled = computed(
    () => {
      if (this.formField) {
        return this.formField.state().disabled();
      }
      return this.ngControl ? this.controlDisabled() : this.disabled();
    },
    ...ngDevMode ? [{
      debugName: "finalDisabled"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  dir = inject(Directionality).valueSignal;
  // TODO: When the input group is removed, we can remove this.
  size = linkedSignal(
    this.nzSize,
    ...ngDevMode ? [{
      debugName: "size"
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
  status = this.nzFormStatusService ? toSignal(this.nzFormStatusService.formStatusChanges.pipe(map((value) => value.status)), {
    initialValue: ""
  }) : this.nzStatus;
  hasFeedback = toSignal(this.nzFormStatusService?.formStatusChanges.pipe(map((value) => value.hasFeedback)) ?? EMPTY, {
    initialValue: false
  });
  classes = computed(
    () => getStatusClassNames(PREFIX_CLS, this.status(), this.hasFeedback()),
    ...ngDevMode ? [{
      debugName: "classes"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  type = computed(
    () => {
      if (this.inputPasswordDir) {
        return this.inputPasswordDir.nzVisible() ? "text" : "password";
      }
      if (this.inputSearchDir) {
        return "search";
      }
      return this.elementRef.nativeElement.getAttribute("type") || "text";
    },
    ...ngDevMode ? [{
      debugName: "type"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  focused = signal(
    false,
    ...ngDevMode ? [{
      debugName: "focused"
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
    () => this.nzVariant() || this.formVariant?.() || "outlined",
    ...ngDevMode ? [{
      debugName: "finalVariant"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  feedbackRef = null;
  // TODO: When the input group is removed, we can remove this.
  disabled$ = toObservable(this.finalDisabled);
  constructor() {
    this.destroyRef.onDestroy(() => {
      this.focusMonitor.stopMonitoring(this.elementRef);
    });
    this.focusMonitor.monitor(this.elementRef, false).pipe(takeUntilDestroyed()).subscribe((origin) => this.focused.set(!!origin));
    effect(() => {
      this.renderFeedbackIcon();
    });
  }
  ngOnInit() {
    this.ngControl?.statusChanges?.pipe(startWith(null), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.controlDisabled.set(!!this.ngControl.disabled);
    });
    this.ngControl?.valueChanges?.pipe(startWith(this.ngControl?.control?.value), takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
      this.nativeValue.set(value ?? "");
    });
  }
  onInput(event) {
    this.nativeValue.set(event.target.value);
  }
  renderFeedbackIcon() {
    if (!this.status() || !this.hasFeedback() || this.inputWrapper) {
      this.hostView.clear();
      this.feedbackRef = null;
      return;
    }
    this.feedbackRef = this.feedbackRef || this.hostView.createComponent(NzFormItemFeedbackIconComponent);
    this.feedbackRef.location.nativeElement.classList.add("ant-input-suffix");
    this.feedbackRef.setInput("status", this.status());
  }
  focus(options) {
    triggerFocus(this.elementRef.nativeElement, options);
  }
  blur() {
    this.elementRef.nativeElement.blur();
  }
  static \u0275fac = function NzInputDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzInputDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzInputDirective,
    selectors: [["input", "nz-input", ""], ["textarea", "nz-input", ""]],
    hostAttrs: [1, "ant-input"],
    hostVars: 23,
    hostBindings: function NzInputDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function NzInputDirective_input_HostBindingHandler($event) {
          return ctx.onInput($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("type", ctx.type())("disabled", ctx.finalDisabled() || null)("readonly", ctx.readonly() || null);
        \u0275\u0275classMap(ctx.classes());
        \u0275\u0275classProp("ant-input-disabled", ctx.finalDisabled())("ant-input-outlined", ctx.finalVariant() === "outlined")("ant-input-borderless", ctx.finalVariant() === "borderless")("ant-input-filled", ctx.finalVariant() === "filled")("ant-input-underlined", ctx.finalVariant() === "underlined")("ant-input-lg", ctx.finalSize() === "large")("ant-input-sm", ctx.finalSize() === "small")("ant-input-rtl", ctx.dir() === "rtl")("ant-input-focused", ctx.focused());
      }
    },
    inputs: {
      nzVariant: [1, "nzVariant"],
      nzSize: [1, "nzSize"],
      nzStatus: [1, "nzStatus"],
      disabled: [1, "disabled"],
      readonly: [1, "readonly"]
    },
    exportAs: ["nzInput"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: NZ_SPACE_COMPACT_ITEM_TYPE,
      useValue: "input"
    }]), \u0275\u0275HostDirectivesFeature([NzSpaceCompactItemDirective])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputDirective, [{
    type: Directive,
    args: [{
      selector: "input[nz-input],textarea[nz-input]",
      exportAs: "nzInput",
      host: {
        class: "ant-input",
        "[attr.type]": "type()",
        "[class]": "classes()",
        "[class.ant-input-disabled]": "finalDisabled()",
        "[class.ant-input-outlined]": `finalVariant() === 'outlined'`,
        "[class.ant-input-borderless]": `finalVariant() === 'borderless'`,
        "[class.ant-input-filled]": `finalVariant() === 'filled'`,
        "[class.ant-input-underlined]": `finalVariant() === 'underlined'`,
        "[class.ant-input-lg]": `finalSize() === 'large'`,
        "[class.ant-input-sm]": `finalSize() === 'small'`,
        "[attr.disabled]": "finalDisabled() || null",
        "[attr.readonly]": "readonly() || null",
        "(input)": "onInput($event)",
        "[class.ant-input-rtl]": `dir() === 'rtl'`,
        "[class.ant-input-focused]": "focused()"
      },
      hostDirectives: [NzSpaceCompactItemDirective],
      providers: [{
        provide: NZ_SPACE_COMPACT_ITEM_TYPE,
        useValue: "input"
      }]
    }]
  }], () => [], {
    nzVariant: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzVariant",
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
    nzStatus: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzStatus",
        required: false
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    readonly: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "readonly",
        required: false
      }]
    }]
  });
})();
var NzInputOtpComponent = class _NzInputOtpComponent {
  formBuilder = inject(FormBuilder);
  destroyRef = inject(DestroyRef);
  otpInputs;
  nzLength = 6;
  nzSize = "default";
  disabled = false;
  nzStatus = "";
  nzFormatter = (value) => value;
  nzMask = null;
  otpArray;
  internalValue = [];
  onChangeCallback;
  onTouched = () => {
  };
  constructor() {
    this.createFormArray();
  }
  ngOnChanges(changes) {
    if (changes["nzLength"]?.currentValue) {
      this.createFormArray();
    }
    if (changes["disabled"]) {
      this.setDisabledState(this.disabled);
    }
  }
  onInput(index, event) {
    const inputElement = event.target;
    const nextInput = this.otpInputs.toArray()[index + 1];
    if (inputElement.value && nextInput) {
      nextInput.nativeElement.focus();
    } else if (!nextInput) {
      this.selectInputBox(index);
    }
  }
  onFocus(event) {
    const inputElement = event.target;
    inputElement.select();
  }
  onKeyDown(index, event) {
    const previousInput = this.otpInputs.toArray()[index - 1];
    if (event.keyCode === BACKSPACE) {
      event.preventDefault();
      this.internalValue[index] = "";
      this.otpArray.at(index).setValue("", {
        emitEvent: false
      });
      if (previousInput) {
        this.selectInputBox(index - 1);
      }
      this.emitValue();
    } else if (event.keyCode === LEFT_ARROW) {
      event.preventDefault();
      this.selectInputBox(index - 1);
    } else if (event.keyCode === RIGHT_ARROW) {
      event.preventDefault();
      this.selectInputBox(index + 1);
    }
  }
  writeValue(value) {
    if (!value) {
      this.otpArray.reset();
      return;
    }
    const controlValues = value.split("");
    this.internalValue = controlValues;
    controlValues.forEach((val, i) => {
      const formattedValue = this.nzFormatter(val);
      const value2 = this.nzMask ? this.nzMask : formattedValue;
      this.otpArray.at(i).setValue(value2, {
        emitEvent: false
      });
    });
  }
  registerOnChange(fn) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    if (isDisabled) {
      this.otpArray.disable();
    } else {
      this.otpArray.enable();
    }
  }
  onPaste(index, event) {
    const pastedText = event.clipboardData?.getData("text") || "";
    if (!pastedText) return;
    let currentIndex = index;
    for (const char of pastedText.split("")) {
      if (currentIndex < this.nzLength) {
        const formattedChar = this.nzFormatter(char);
        this.internalValue[currentIndex] = char;
        const maskedValue = this.nzMask ? this.nzMask : formattedChar;
        this.otpArray.at(currentIndex).setValue(maskedValue, {
          emitEvent: false
        });
        currentIndex++;
      } else {
        break;
      }
    }
    event.preventDefault();
    this.selectInputBox(currentIndex);
    this.emitValue();
  }
  createFormArray() {
    this.otpArray = this.formBuilder.array([]);
    this.internalValue = new Array(this.nzLength).fill("");
    for (let i = 0; i < this.nzLength; i++) {
      const control = this.formBuilder.nonNullable.control("", [Validators.required]);
      control.valueChanges.pipe(tap((value) => {
        const unmaskedValue = this.nzFormatter(value);
        this.internalValue[i] = unmaskedValue;
        control.setValue(this.nzMask ?? unmaskedValue, {
          emitEvent: false
        });
        this.emitValue();
      }), takeUntilDestroyed(this.destroyRef)).subscribe();
      this.otpArray.push(control);
    }
  }
  emitValue() {
    const result = this.internalValue.join("");
    if (this.onChangeCallback) {
      this.onChangeCallback(result);
    }
  }
  selectInputBox(index) {
    const otpInputArray = this.otpInputs.toArray();
    if (index <= 0) index = 0;
    if (index >= otpInputArray.length) index = otpInputArray.length - 1;
    otpInputArray[index].nativeElement.select();
  }
  static \u0275fac = function NzInputOtpComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzInputOtpComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzInputOtpComponent,
    selectors: [["nz-input-otp"]],
    viewQuery: function NzInputOtpComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.otpInputs = _t);
      }
    },
    hostAttrs: [1, "ant-otp"],
    inputs: {
      nzLength: [2, "nzLength", "nzLength", numberAttribute],
      nzSize: "nzSize",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      nzStatus: "nzStatus",
      nzFormatter: "nzFormatter",
      nzMask: "nzMask"
    },
    exportAs: ["nzInputOtp"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _NzInputOtpComponent),
      multi: true
    }]), \u0275\u0275NgOnChangesFeature],
    decls: 2,
    vars: 0,
    consts: [["otpInput", ""], ["nz-input", "", "type", "text", "maxlength", "1", "size", "1", 1, "ant-otp-input", 3, "nzSize", "formControl", "nzStatus"], ["nz-input", "", "type", "text", "maxlength", "1", "size", "1", 1, "ant-otp-input", 3, "input", "focus", "keydown", "paste", "nzSize", "formControl", "nzStatus"]],
    template: function NzInputOtpComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, NzInputOtpComponent_For_1_Template, 2, 3, "input", 1, \u0275\u0275repeaterTrackByIndex);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.otpArray.controls);
      }
    },
    dependencies: [NzInputDirective, ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, FormControlDirective],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputOtpComponent, [{
    type: Component,
    args: [{
      selector: "nz-input-otp",
      exportAs: "nzInputOtp",
      encapsulation: ViewEncapsulation.None,
      template: `
    @for (item of otpArray.controls; track $index) {
      <input
        nz-input
        class="ant-otp-input"
        type="text"
        maxlength="1"
        size="1"
        [nzSize]="nzSize"
        [formControl]="item"
        [nzStatus]="nzStatus"
        (input)="onInput($index, $event)"
        (focus)="onFocus($event)"
        (keydown)="onKeyDown($index, $event)"
        (paste)="onPaste($index, $event)"
        #otpInput
      />
    }
  `,
      host: {
        class: "ant-otp"
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzInputOtpComponent),
        multi: true
      }],
      imports: [NzInputDirective, ReactiveFormsModule]
    }]
  }], () => [], {
    otpInputs: [{
      type: ViewChildren,
      args: ["otpInput"]
    }],
    nzLength: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzSize: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzStatus: [{
      type: Input
    }],
    nzFormatter: [{
      type: Input
    }],
    nzMask: [{
      type: Input
    }]
  });
})();
var NzInputSearchDirective = class _NzInputSearchDirective {
  inputDir = contentChild.required(
    NzInputDirective,
    ...ngDevMode ? [{
      debugName: "inputDir"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  inputRef = contentChild.required(NzInputDirective, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "inputRef"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    read: ElementRef
  }));
  nzEnterButton = input(
    false,
    ...ngDevMode ? [{
      debugName: "nzEnterButton"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  nzLoading = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "nzLoading"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  nzSearch = output();
  size = computed(
    () => this.inputDir().nzSize(),
    ...ngDevMode ? [{
      debugName: "size"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  search(event, source = "input") {
    if (!this.nzLoading()) {
      this.nzSearch.emit({
        value: this.inputRef().nativeElement.value,
        event,
        source
      });
    }
  }
  onEnter(event) {
    if (event.target === this.inputRef().nativeElement) {
      this.search(event);
    }
  }
  static \u0275fac = function NzInputSearchDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzInputSearchDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzInputSearchDirective,
    selectors: [["nz-input-search"]],
    contentQueries: function NzInputSearchDirective_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.inputDir, NzInputDirective, 5)(dirIndex, ctx.inputRef, NzInputDirective, 5, ElementRef);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    },
    hostAttrs: [1, "ant-input-search"],
    hostVars: 6,
    hostBindings: function NzInputSearchDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown.enter", function NzInputSearchDirective_keydown_enter_HostBindingHandler($event) {
          return ctx.onEnter($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275classProp("ant-input-search-large", ctx.size() === "large")("ant-input-search-small", ctx.size() === "small")("ant-input-search-with-button", ctx.nzEnterButton() !== false);
      }
    },
    inputs: {
      nzEnterButton: [1, "nzEnterButton"],
      nzLoading: [1, "nzLoading"]
    },
    outputs: {
      nzSearch: "nzSearch"
    },
    exportAs: ["nzInputSearch"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: NZ_INPUT_SEARCH,
      useExisting: forwardRef(() => _NzInputSearchDirective)
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputSearchDirective, [{
    type: Directive,
    args: [{
      selector: "nz-input-search",
      exportAs: "nzInputSearch",
      providers: [{
        provide: NZ_INPUT_SEARCH,
        useExisting: forwardRef(() => NzInputSearchDirective)
      }],
      host: {
        class: "ant-input-search",
        "[class.ant-input-search-large]": `size() === 'large'`,
        "[class.ant-input-search-small]": `size() === 'small'`,
        "[class.ant-input-search-with-button]": "nzEnterButton() !== false",
        "(keydown.enter)": "onEnter($any($event))"
      }
    }]
  }], null, {
    inputDir: [{
      type: ContentChild,
      args: [forwardRef(() => NzInputDirective), {
        isSignal: true
      }]
    }],
    inputRef: [{
      type: ContentChild,
      args: [forwardRef(() => NzInputDirective), __spreadProps(__spreadValues({}, {
        read: ElementRef
      }), {
        isSignal: true
      })]
    }],
    nzEnterButton: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzEnterButton",
        required: false
      }]
    }],
    nzLoading: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzLoading",
        required: false
      }]
    }],
    nzSearch: [{
      type: Output,
      args: ["nzSearch"]
    }]
  });
})();
var NzInputSearchEnterButtonDirective = class _NzInputSearchEnterButtonDirective {
  static \u0275fac = function NzInputSearchEnterButtonDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzInputSearchEnterButtonDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzInputSearchEnterButtonDirective,
    selectors: [["", "nzInputSearchEnterButton", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputSearchEnterButtonDirective, [{
    type: Directive,
    args: [{
      selector: "[nzInputSearchEnterButton]"
    }]
  }], null, null);
})();
var NzInputWrapperComponent = class _NzInputWrapperComponent {
  focusMonitor = inject(FocusMonitor);
  inputPasswordDir = inject(NzInputPasswordDirective, {
    self: true,
    optional: true
  });
  inputSearchDir = inject(NzInputSearchDirective, {
    self: true,
    optional: true
  });
  inputRef = contentChild.required(NzInputDirective, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "inputRef"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    read: ElementRef
  }));
  inputDir = contentChild.required(
    NzInputDirective,
    ...ngDevMode ? [{
      debugName: "inputDir"
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
  inputPasswordIconTmpl = contentChild(NzInputPasswordIconDirective, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "inputPasswordIconTmpl"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    read: TemplateRef
  }));
  inputSearchEnterButton = contentChild(
    NzInputSearchEnterButtonDirective,
    ...ngDevMode ? [{
      debugName: "inputSearchEnterButton"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  nzAllowClear = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "nzAllowClear"
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
  nzShowCount = input(false, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "nzShowCount"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  nzCount = input(
    ...ngDevMode ? [void 0, {
      debugName: "nzCount"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  nzClear = output();
  size = computed(
    () => this.inputDir().nzSize(),
    ...ngDevMode ? [{
      debugName: "size"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  variant = computed(
    () => this.inputDir().nzVariant(),
    ...ngDevMode ? [{
      debugName: "variant"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  disabled = computed(
    () => this.inputDir().finalDisabled(),
    ...ngDevMode ? [{
      debugName: "disabled"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  readOnly = computed(
    () => this.inputDir().readonly(),
    ...ngDevMode ? [{
      debugName: "readOnly"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  status = computed(
    () => this.inputDir().status(),
    ...ngDevMode ? [{
      debugName: "status"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  hasFeedback = computed(
    () => this.inputDir().hasFeedback(),
    ...ngDevMode ? [{
      debugName: "hasFeedback"
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
    () => !!this.nzSuffix() || !!this.suffix() || this.nzAllowClear() || this.hasFeedback() || this.nzShowCount() || this.inputPasswordDir,
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
    () => !!this.nzAddonAfter() || !!this.addonAfter() || !!this.inputSearchDir,
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
  compactSize = inject(NZ_SPACE_COMPACT_SIZE, {
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
  isTextarea = computed(
    () => this.inputRef().nativeElement instanceof HTMLTextAreaElement,
    ...ngDevMode ? [{
      debugName: "isTextarea"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  finalSize = computed(
    () => {
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
  class = computed(
    () => {
      if (this.hasAddon()) {
        return this.groupWrapperClass();
      }
      if (this.hasAffix()) {
        return this.affixWrapperClass();
      }
      return null;
    },
    ...ngDevMode ? [{
      debugName: "class"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  affixWrapperClass = computed(
    () => {
      return __spreadValues(__spreadValues({
        "ant-input-affix-wrapper": true,
        "ant-input-affix-wrapper-lg": this.finalSize() === "large",
        "ant-input-affix-wrapper-sm": this.finalSize() === "small",
        "ant-input-affix-wrapper-disabled": this.disabled(),
        "ant-input-affix-wrapper-readonly": this.readOnly(),
        "ant-input-affix-wrapper-focused": this.focused(),
        "ant-input-affix-wrapper-rtl": this.dir() === "rtl"
      }, getStatusClassNames("ant-input-affix-wrapper", this.status(), this.hasFeedback())), getVariantClassNames("ant-input-affix-wrapper", this.variant()));
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
        "ant-input-group-wrapper": true,
        "ant-input-group-wrapper-sm": this.finalSize() === "small",
        "ant-input-group-wrapper-lg": this.finalSize() === "large",
        "ant-input-group-wrapper-rtl": this.dir() === "rtl"
      }, getStatusClassNames("ant-input-group-wrapper", this.status(), this.hasFeedback())), getVariantClassNames("ant-input-group-wrapper", this.variant()));
    },
    ...ngDevMode ? [{
      debugName: "groupWrapperClass"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  inputValue = toSignal(toObservable(this.inputDir).pipe(switchMap((inputDir) => {
    const ngControl = inputDir.ngControl;
    if (!ngControl) return EMPTY;
    return (ngControl.valueChanges ?? EMPTY).pipe(startWith(ngControl.value));
  })));
  formattedValue = computed(
    () => {
      const countConfig = this.nzCount();
      const inputValue = this.inputValue();
      const countMax = countConfig?.max ?? 0;
      const value = isNotNil(inputValue) ? String(inputValue) : "";
      let formattedValue = value;
      if (countConfig?.exceedFormatter) {
        formattedValue = countConfig.exceedFormatter(value, {
          max: countMax
        });
      }
      return formattedValue;
    },
    ...ngDevMode ? [{
      debugName: "formattedValue"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  computedCount = computed(
    () => {
      const countConfig = this.nzCount();
      const formattedValue = this.formattedValue();
      let computedCount = formattedValue.length;
      if (countConfig?.strategy) {
        computedCount = countConfig.strategy(formattedValue);
      }
      return computedCount;
    },
    ...ngDevMode ? [{
      debugName: "computedCount"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  dataCount = computed(
    () => {
      const countConfig = this.nzCount();
      const computedCount = this.computedCount();
      const countMax = countConfig?.max;
      return `${computedCount}${countMax ? `/${countMax}` : ``}`;
    },
    ...ngDevMode ? [{
      debugName: "dataCount"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  isOutOfRange = computed(
    () => {
      const countConfig = this.nzCount();
      const countMax = countConfig?.max;
      if (isNumberFinite(countMax)) {
        return this.computedCount() > countMax;
      }
      return false;
    },
    ...ngDevMode ? [{
      debugName: "isOutOfRange"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const element = this.inputRef();
      this.focusMonitor.monitor(element).pipe(takeUntilDestroyed(destroyRef)).subscribe((origin) => {
        this.focused.set(!!origin);
      });
      destroyRef.onDestroy(() => {
        this.focusMonitor.stopMonitoring(element);
      });
    });
    effect(() => {
      if (this.nzCount()) {
        const inputValue = this.inputValue();
        const formattedValue = this.formattedValue();
        if (isNotNil(inputValue) && formattedValue !== inputValue) {
          this.inputDir().ngControl?.control?.setValue(formattedValue);
        }
      }
    });
  }
  clear() {
    this.inputDir().ngControl?.control?.setValue("");
    this.nzClear.emit();
  }
  static \u0275fac = function NzInputWrapperComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzInputWrapperComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzInputWrapperComponent,
    selectors: [["nz-input-wrapper"], ["nz-input-password"], ["nz-input-search"]],
    contentQueries: function NzInputWrapperComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuerySignal(dirIndex, ctx.inputRef, NzInputDirective, 5, ElementRef)(dirIndex, ctx.inputDir, NzInputDirective, 5)(dirIndex, ctx.prefix, NzInputPrefixDirective, 5)(dirIndex, ctx.suffix, NzInputSuffixDirective, 5)(dirIndex, ctx.addonBefore, NzInputAddonBeforeDirective, 5)(dirIndex, ctx.addonAfter, NzInputAddonAfterDirective, 5)(dirIndex, ctx.inputPasswordIconTmpl, NzInputPasswordIconDirective, 5, TemplateRef)(dirIndex, ctx.inputSearchEnterButton, NzInputSearchEnterButtonDirective, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(8);
      }
    },
    hostVars: 8,
    hostBindings: function NzInputWrapperComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.class());
        \u0275\u0275classProp("ant-input-disabled", ctx.disabled())("ant-input-out-of-range", ctx.nzShowCount() && ctx.isOutOfRange())("ant-input-affix-wrapper-textarea-with-clear-btn", ctx.nzAllowClear() && ctx.isTextarea());
      }
    },
    inputs: {
      nzAllowClear: [1, "nzAllowClear"],
      nzPrefix: [1, "nzPrefix"],
      nzSuffix: [1, "nzSuffix"],
      nzAddonBefore: [1, "nzAddonBefore"],
      nzAddonAfter: [1, "nzAddonAfter"],
      nzShowCount: [1, "nzShowCount"],
      nzCount: [1, "nzCount"]
    },
    outputs: {
      nzClear: "nzClear"
    },
    exportAs: ["nzInputWrapper"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: NZ_SPACE_COMPACT_ITEM_TYPE,
      useValue: "input"
    }, {
      provide: NZ_INPUT_WRAPPER,
      useExisting: forwardRef(() => _NzInputWrapperComponent)
    }]), \u0275\u0275HostDirectivesFeature([NzSpaceCompactItemDirective])],
    ngContentSelectors: _c2,
    decls: 11,
    vars: 1,
    consts: [["inputWithAddonInner", ""], ["inputWithAffix", ""], ["inputWithAffixInner", ""], ["input", ""], [3, "ngTemplateOutlet"], [1, "ant-input-wrapper", "ant-input-group"], [1, "ant-input-group-addon"], ["nz-button", "", "type", "button", 1, "ant-input-search-button", 3, "nzType", "nzSize", "nzLoading"], ["nz-button", "", "type", "button", 1, "ant-input-search-button", 3, "click", "nzType", "nzSize", "nzLoading"], ["nzType", "search", "nzTheme", "outline"], [1, "ant-input-prefix"], [1, "ant-input-suffix"], ["role", "button", "tabindex", "-1", 1, "ant-input-clear-icon", 3, "ant-input-clear-icon-has-suffix", "ant-input-clear-icon-hidden"], [1, "ant-input-show-count-suffix"], ["role", "button", "tabindex", "-1", 1, "ant-input-password-icon"], [3, "status"], ["role", "button", "tabindex", "-1", 1, "ant-input-clear-icon", 3, "click"], ["nzType", "close-circle", "nzTheme", "fill"], ["role", "button", "tabindex", "-1", 1, "ant-input-password-icon", 3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nzTheme", "outline", 3, "nzType"]],
    template: function NzInputWrapperComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c1);
        \u0275\u0275conditionalCreate(0, NzInputWrapperComponent_Conditional_0_Template, 1, 1, null, 4)(1, NzInputWrapperComponent_Conditional_1_Template, 1, 1, null, 4)(2, NzInputWrapperComponent_Conditional_2_Template, 1, 1, null, 4);
        \u0275\u0275template(3, NzInputWrapperComponent_ng_template_3_Template, 5, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(5, NzInputWrapperComponent_ng_template_5_Template, 2, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(7, NzInputWrapperComponent_ng_template_7_Template, 3, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(9, NzInputWrapperComponent_ng_template_9_Template, 1, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.hasAddon() ? 0 : ctx.hasAffix() ? 1 : 2);
      }
    },
    dependencies: [NzIconModule, NzIconDirective, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzFormItemFeedbackIconComponent, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputWrapperComponent, [{
    type: Component,
    args: [{
      selector: "nz-input-wrapper,nz-input-password,nz-input-search",
      exportAs: "nzInputWrapper",
      imports: [NzIconModule, NzButtonModule, NzFormItemFeedbackIconComponent, NgTemplateOutlet],
      template: `
    @if (hasAddon()) {
      <ng-template [ngTemplateOutlet]="inputWithAddonInner" />
    } @else if (hasAffix()) {
      <ng-template [ngTemplateOutlet]="inputWithAffixInner" />
    } @else {
      <ng-template [ngTemplateOutlet]="input" />
    }

    <ng-template #inputWithAddonInner>
      <span class="ant-input-wrapper ant-input-group">
        @if (hasAddonBefore()) {
          <span class="ant-input-group-addon">
            <ng-content select="[nzInputAddonBefore]">{{ nzAddonBefore() }}</ng-content>
          </span>
        }

        @if (hasAffix()) {
          <ng-template [ngTemplateOutlet]="inputWithAffix" />
        } @else {
          <ng-template [ngTemplateOutlet]="input" />
        }

        @if (hasAddonAfter()) {
          <span class="ant-input-group-addon">
            @if (inputSearchDir) {
              @let nzEnterButton = inputSearchDir.nzEnterButton();
              @let hasEnterButton = inputSearchEnterButton() ?? nzEnterButton !== false;
              <button
                nz-button
                [nzType]="hasEnterButton ? 'primary' : 'default'"
                [nzSize]="size()"
                [nzLoading]="inputSearchDir.nzLoading()"
                type="button"
                class="ant-input-search-button"
                (click)="inputSearchDir.search($event)"
              >
                <ng-content select="[nzInputSearchEnterButton]">
                  @if (nzEnterButton && typeof nzEnterButton === 'string') {
                    {{ nzEnterButton }}
                  } @else {
                    <nz-icon nzType="search" nzTheme="outline" />
                  }
                </ng-content>
              </button>
            }
            <ng-content select="[nzInputAddonAfter]">{{ nzAddonAfter() }}</ng-content>
          </span>
        }
      </span>
    </ng-template>

    <ng-template #inputWithAffix>
      <span [class]="affixWrapperClass()">
        <ng-template [ngTemplateOutlet]="inputWithAffixInner" />
      </span>
    </ng-template>

    <ng-template #inputWithAffixInner>
      @if (hasPrefix()) {
        <span class="ant-input-prefix">
          <ng-content select="[nzInputPrefix]">{{ nzPrefix() }}</ng-content>
        </span>
      }
      <ng-template [ngTemplateOutlet]="input" />
      @if (hasSuffix()) {
        <span class="ant-input-suffix">
          @if (nzAllowClear()) {
            <span
              class="ant-input-clear-icon"
              [class.ant-input-clear-icon-has-suffix]="
                nzSuffix() || suffix() || hasFeedback() || inputPasswordDir?.nzVisibilityToggle()
              "
              [class.ant-input-clear-icon-hidden]="!inputDir().value() || disabled() || readOnly()"
              role="button"
              tabindex="-1"
              (click)="clear(); inputSearchDir?.search($event, 'clear')"
            >
              <ng-content select="[nzInputClearIcon]">
                <nz-icon nzType="close-circle" nzTheme="fill" />
              </ng-content>
            </span>
          }
          @if (nzShowCount()) {
            <span class="ant-input-show-count-suffix">{{ dataCount() }}</span>
          }
          @if (inputPasswordDir && inputPasswordDir.nzVisibilityToggle()) {
            <span
              class="ant-input-password-icon"
              role="button"
              tabindex="-1"
              (click)="inputPasswordDir.toggleVisible()"
            >
              @if (inputPasswordIconTmpl(); as tmpl) {
                <ng-template
                  [ngTemplateOutlet]="tmpl"
                  [ngTemplateOutletContext]="{ $implicit: inputPasswordDir.nzVisible() }"
                />
              } @else {
                <nz-icon [nzType]="inputPasswordDir.nzVisible() ? 'eye' : 'eye-invisible'" nzTheme="outline" />
              }
            </span>
          }
          <ng-content select="[nzInputSuffix]">{{ nzSuffix() }}</ng-content>
          @if (hasFeedback() && status()) {
            <nz-form-item-feedback-icon [status]="status()" />
          }
        </span>
      }
    </ng-template>

    <ng-template #input>
      <ng-content select="[nz-input]" />
    </ng-template>
  `,
      providers: [{
        provide: NZ_SPACE_COMPACT_ITEM_TYPE,
        useValue: "input"
      }, {
        provide: NZ_INPUT_WRAPPER,
        useExisting: forwardRef(() => NzInputWrapperComponent)
      }],
      encapsulation: ViewEncapsulation.None,
      hostDirectives: [NzSpaceCompactItemDirective],
      host: {
        "[class]": "class()",
        "[class.ant-input-disabled]": "disabled()",
        "[class.ant-input-out-of-range]": "nzShowCount() && isOutOfRange()",
        "[class.ant-input-affix-wrapper-textarea-with-clear-btn]": "nzAllowClear() && isTextarea()"
      }
    }]
  }], () => [], {
    inputRef: [{
      type: ContentChild,
      args: [forwardRef(() => NzInputDirective), __spreadProps(__spreadValues({}, {
        read: ElementRef
      }), {
        isSignal: true
      })]
    }],
    inputDir: [{
      type: ContentChild,
      args: [forwardRef(() => NzInputDirective), {
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
    }],
    inputPasswordIconTmpl: [{
      type: ContentChild,
      args: [forwardRef(() => NzInputPasswordIconDirective), __spreadProps(__spreadValues({}, {
        read: TemplateRef
      }), {
        isSignal: true
      })]
    }],
    inputSearchEnterButton: [{
      type: ContentChild,
      args: [forwardRef(() => NzInputSearchEnterButtonDirective), {
        isSignal: true
      }]
    }],
    nzAllowClear: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzAllowClear",
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
    nzShowCount: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzShowCount",
        required: false
      }]
    }],
    nzCount: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "nzCount",
        required: false
      }]
    }],
    nzClear: [{
      type: Output,
      args: ["nzClear"]
    }]
  });
})();
var NzTextareaCountComponent = class _NzTextareaCountComponent {
  renderer = inject(Renderer2);
  injector = inject(Injector);
  elementRef = inject(ElementRef);
  nzInputDirective;
  nzMaxCharacterCount = 0;
  nzComputeCharacterCount = (v) => v.length;
  nzFormatter = (c, m) => `${c}${m > 0 ? `/${m}` : ``}`;
  ngAfterContentInit() {
    if (!this.nzInputDirective && isDevMode()) {
      throw new Error("[nz-textarea-count]: Could not find matching textarea[nz-input] child.");
    }
    effect(() => this.setDataCount(this.nzInputDirective.value()), {
      injector: this.injector
    });
  }
  setDataCount(value) {
    const inputValue = isNotNil(value) ? String(value) : "";
    const currentCount = this.nzComputeCharacterCount(inputValue);
    const dataCount = this.nzFormatter(currentCount, this.nzMaxCharacterCount);
    this.renderer.setAttribute(this.elementRef.nativeElement, "data-count", dataCount);
  }
  static \u0275fac = function NzTextareaCountComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzTextareaCountComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzTextareaCountComponent,
    selectors: [["nz-textarea-count"]],
    contentQueries: function NzTextareaCountComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, NzInputDirective, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzInputDirective = _t.first);
      }
    },
    hostAttrs: [1, "ant-input-textarea-show-count"],
    inputs: {
      nzMaxCharacterCount: [2, "nzMaxCharacterCount", "nzMaxCharacterCount", numberAttribute],
      nzComputeCharacterCount: "nzComputeCharacterCount",
      nzFormatter: "nzFormatter"
    },
    ngContentSelectors: _c5,
    decls: 1,
    vars: 0,
    template: function NzTextareaCountComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c4);
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTextareaCountComponent, [{
    type: Component,
    args: [{
      selector: "nz-textarea-count",
      template: `<ng-content select="textarea[nz-input]" />`,
      host: {
        class: "ant-input-textarea-show-count"
      }
    }]
  }], null, {
    nzInputDirective: [{
      type: ContentChild,
      args: [NzInputDirective, {
        static: true
      }]
    }],
    nzMaxCharacterCount: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzComputeCharacterCount: [{
      type: Input
    }],
    nzFormatter: [{
      type: Input
    }]
  });
})();
var NzInputModule = class _NzInputModule {
  static \u0275fac = function NzInputModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzInputModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzInputModule,
    imports: [NzTextareaCountComponent, NzInputDirective, NzInputWrapperComponent, NzInputPasswordDirective, NzInputPasswordIconDirective, NzInputSearchDirective, NzInputSearchEnterButtonDirective, NzInputAddonBeforeDirective, NzInputAddonAfterDirective, NzInputPrefixDirective, NzInputSuffixDirective, NzInputOtpComponent],
    exports: [NzTextareaCountComponent, NzInputDirective, NzInputWrapperComponent, NzInputPasswordDirective, NzInputPasswordIconDirective, NzInputSearchDirective, NzInputSearchEnterButtonDirective, NzInputAddonBeforeDirective, NzInputAddonAfterDirective, NzInputPrefixDirective, NzInputSuffixDirective, NzInputOtpComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzInputWrapperComponent, NzInputOtpComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzInputModule, [{
    type: NgModule,
    args: [{
      imports: [NzTextareaCountComponent, NzInputDirective, NzInputWrapperComponent, NzInputPasswordDirective, NzInputPasswordIconDirective, NzInputSearchDirective, NzInputSearchEnterButtonDirective, NzInputAddonBeforeDirective, NzInputAddonAfterDirective, NzInputPrefixDirective, NzInputSuffixDirective, NzInputOtpComponent],
      exports: [NzTextareaCountComponent, NzInputDirective, NzInputWrapperComponent, NzInputPasswordDirective, NzInputPasswordIconDirective, NzInputSearchDirective, NzInputSearchEnterButtonDirective, NzInputAddonBeforeDirective, NzInputAddonAfterDirective, NzInputPrefixDirective, NzInputSuffixDirective, NzInputOtpComponent]
    }]
  }], null, null);
})();

export {
  NzInputAddonBeforeDirective,
  NzInputAddonAfterDirective,
  NzInputPrefixDirective,
  NzInputSuffixDirective,
  NzInputDirective,
  NzInputModule
};
//# debugId=911f5f07-cc8a-578e-b6ad-d326dd66f903
//# sourceMappingURL=chunk-VO7C5C6M.js.map
