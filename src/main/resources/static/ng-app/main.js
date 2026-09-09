import {
  AuthService,
  LockScreenService
} from "./chunk-NF2IPJNZ.js";
import {
  TabService
} from "./chunk-DUA22MI5.js";
import {
  NzMessageService
} from "./chunk-XWW7CXU6.js";
import {
  NzModalComponent,
  NzModalContentDirective,
  NzModalModule
} from "./chunk-OEYWCHIN.js";
import {
  NzInputDirective,
  NzInputModule
} from "./chunk-VO7C5C6M.js";
import {
  I18nService,
  TranslatePipe
} from "./chunk-MZSSMIRT.js";
import {
  NzAlertComponent,
  NzAlertModule
} from "./chunk-BYJYXGGS.js";
import {
  NavigationEnd,
  NzContextMenuService,
  NzDropdownDirective,
  NzDropdownMenuComponent,
  NzDropdownModule,
  NzMenuDirective,
  NzMenuDividerDirective,
  NzMenuItemComponent,
  NzMenuModule,
  NzRadioComponent,
  NzRadioGroupComponent,
  NzRadioModule,
  NzSubMenuComponent,
  RouteReuseStrategy,
  Router,
  RouterLink,
  RouterOutlet,
  provideRouter
} from "./chunk-2GOAB54B.js";
import {
  CdkPortalOutlet,
  CdkScrollable,
  CheckboxControlValueAccessor,
  ComponentPortal,
  DefaultValueAccessor,
  ESCAPE,
  FocusTrapFactory,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NzBreakpointService,
  NzNoAnimationDirective,
  OverlayKeyboardDispatcher,
  PortalModule,
  RequiredValidator,
  TemplatePortal,
  createBlockScrollStrategy,
  createGlobalPositionStrategy,
  createOverlayRef,
  overlayZIndexSetter,
  provideNzDateFnsAdapter,
  provideNzI18n,
  siderResponsiveMap,
  vi_VN,
  withAnimationCheck,
  ɵNgNoValidate
} from "./chunk-TNYKEBYQ.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  DestroyRef,
  Directionality,
  Directive,
  ElementRef,
  EventEmitter,
  HttpClient,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgForOf,
  NgIf,
  NgModule,
  NgTemplateOutlet,
  NzButtonComponent,
  NzButtonModule,
  NzIconDirective,
  NzIconModule,
  NzOutletModule,
  NzStringTemplateOutletDirective,
  NzTransitionPatchDirective,
  NzWaveDirective,
  Output,
  Platform,
  Renderer2,
  Subject,
  TemplateRef,
  Type,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  WithConfig,
  __esDecorate,
  __objRest,
  __runInitializers,
  __spreadValues,
  booleanAttribute,
  bootstrapApplication,
  computed,
  effect,
  filter,
  firstValueFrom,
  inNextTick,
  inject,
  input,
  isTemplateRef,
  numberAttribute,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  registerLocaleData,
  setClassMetadata,
  signal,
  takeUntil,
  takeUntilDestroyed,
  toCssPixel,
  withInterceptorsFromDi,
  withXsrfConfiguration,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵanimateEnter,
  ɵɵanimateLeave,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-VTW5U2M5.js";

// src/app/auth/login.component.ts
function LoginComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "i", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.successMessage(), " ");
  }
}
function LoginComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "i", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.errorMessage(), " ");
  }
}
var STORAGE_USERNAME = "hr_remembered_username";
var STORAGE_PASSWORD = "hr_remembered_password";
var STORAGE_REMEMBER = "hr_remember_me";
var LoginComponent = class _LoginComponent {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
    this.loadSavedCredentials();
  }
  auth;
  router;
  username = "";
  password = "";
  rememberMe = false;
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
  successMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "successMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  async onSubmit() {
    this.errorMessage.set(null);
    this.successMessage.set(null);
    if (!this.username.trim()) {
      this.errorMessage.set("Vui l\xF2ng nh\u1EADp t\xEAn \u0111\u0103ng nh\u1EADp!");
      return;
    }
    if (!this.password.trim()) {
      this.errorMessage.set("Vui l\xF2ng nh\u1EADp m\u1EADt kh\u1EA9u!");
      return;
    }
    this.loading.set(true);
    try {
      const res = await this.auth.login({
        username: this.username.trim(),
        password: this.password,
        lang: "vi"
      });
      if (this.rememberMe) {
        localStorage.setItem(STORAGE_USERNAME, this.username.trim());
        localStorage.setItem(STORAGE_PASSWORD, this.password);
        localStorage.setItem(STORAGE_REMEMBER, "true");
      } else {
        this.clearSavedCredentials();
      }
      this.successMessage.set(res.message);
      this.router.navigateByUrl(res.redirectUrl || "/dashboard");
    } catch (err) {
      const body = err?.error;
      this.errorMessage.set(body?.message ?? "C\xF3 l\u1ED7i x\u1EA3y ra. Vui l\xF2ng th\u1EED l\u1EA1i sau.");
    } finally {
      this.loading.set(false);
    }
  }
  onRememberMeChange() {
    if (!this.rememberMe) {
      this.clearSavedCredentials();
    }
  }
  loadSavedCredentials() {
    try {
      const savedUsername = localStorage.getItem(STORAGE_USERNAME);
      const savedPassword = localStorage.getItem(STORAGE_PASSWORD);
      const remembered = localStorage.getItem(STORAGE_REMEMBER);
      if (savedUsername && remembered === "true") {
        this.username = savedUsername;
        this.password = savedPassword ?? "";
        this.rememberMe = true;
        this.successMessage.set("\u0110\xE3 kh\xF4i ph\u1EE5c th\xF4ng tin \u0111\u0103ng nh\u1EADp \u0111\xE3 l\u01B0u");
      }
    } catch {
    }
  }
  clearSavedCredentials() {
    localStorage.removeItem(STORAGE_USERNAME);
    localStorage.removeItem(STORAGE_PASSWORD);
    localStorage.removeItem(STORAGE_REMEMBER);
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 43, vars: 7, consts: [[1, "login-wrapper"], [1, "login-left"], [1, "login-brand"], ["src", "/assets/images/HVV_logo_login.jpg", "alt", "VHR System"], [1, "login-image-wrap"], ["src", "/assets/images/login-img-1.jpg", "alt", "VHR System"], [1, "login-tagline"], [1, "login-right"], [1, "login-card"], [1, "login-right-header"], [1, "icon-wrap"], [1, "fas", "fa-sign-in-alt"], ["class", "alert alert-success alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], [3, "ngSubmit"], [1, "form-floating"], ["type", "text", "id", "username", "name", "username", "placeholder", "T\xEAn \u0111\u0103ng nh\u1EADp", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "username"], [1, "fas", "fa-user", "me-2"], ["type", "password", "id", "password", "name", "password", "placeholder", "M\u1EADt kh\u1EA9u", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "password"], [1, "fas", "fa-lock", "me-2"], [1, "form-check", "mb-3"], ["type", "checkbox", "id", "rememberMe", "name", "rememberMe", 1, "form-check-input", 3, "ngModelChange", "change", "ngModel"], ["for", "rememberMe", 1, "form-check-label"], [1, "fas", "fa-bookmark", "me-2"], ["type", "submit", 1, "btn", "btn-primary", "btn-login", "w-100", 3, "disabled"], [1, "fas", "fa-sign-in-alt", "me-2"], [1, "login-footer"], ["role", "alert", 1, "alert", "alert-success", "alert-dismissible", "fade", "show"], [1, "fas", "fa-check-circle", "me-2"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], [1, "fas", "fa-exclamation-circle", "me-2"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4);
      \u0275\u0275element(5, "img", 5);
      \u0275\u0275elementStart(6, "div", 6)(7, "span");
      \u0275\u0275text(8, "\u0110\u0103ng nh\u1EADp v\xE0o h\u1EC7 th\u1ED1ng");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "small");
      \u0275\u0275text(10, "\xA9 2026 VHR System. T\u1EA5t c\u1EA3 quy\u1EC1n \u0111\u01B0\u1EE3c b\u1EA3o l\u01B0u.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "div", 10);
      \u0275\u0275element(15, "i", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "h4");
      \u0275\u0275text(17, "\u0110\u0103ng nh\u1EADp");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p");
      \u0275\u0275text(19, "\u0110\u0103ng nh\u1EADp v\xE0o h\u1EC7 th\u1ED1ng");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(20, LoginComponent_div_20_Template, 3, 1, "div", 12)(21, LoginComponent_div_21_Template, 3, 1, "div", 13);
      \u0275\u0275elementStart(22, "form", 14);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_22_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(23, "div", 15)(24, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_24_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.username, $event) || (ctx.username = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(25, "label", 17);
      \u0275\u0275element(26, "i", 18);
      \u0275\u0275text(27, "T\xEAn \u0111\u0103ng nh\u1EADp");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 15)(29, "input", 19);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_29_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(30, "label", 20);
      \u0275\u0275element(31, "i", 21);
      \u0275\u0275text(32, "M\u1EADt kh\u1EA9u");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 22)(34, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_34_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.rememberMe, $event) || (ctx.rememberMe = $event);
        return $event;
      });
      \u0275\u0275listener("change", function LoginComponent_Template_input_change_34_listener() {
        return ctx.onRememberMeChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(35, "label", 24);
      \u0275\u0275element(36, "i", 25);
      \u0275\u0275text(37, "Ghi nh\u1EDB \u0111\u0103ng nh\u1EADp ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "button", 26);
      \u0275\u0275element(39, "i", 27);
      \u0275\u0275text(40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 28);
      \u0275\u0275text(42, "\xA9 2026 VHR System. T\u1EA5t c\u1EA3 quy\u1EC1n \u0111\u01B0\u1EE3c b\u1EA3o l\u01B0u.");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(20);
      \u0275\u0275property("ngIf", ctx.successMessage());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.username);
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.rememberMe);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.loading() ? "\u0110ang \u0111\u0103ng nh\u1EADp..." : "\u0110\u0103ng nh\u1EADp", " ");
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ['\n[_nghost-%COMP%] {\n  position: relative;\n  display: block;\n  min-height: 100vh;\n  background: #d05800;\n}\n[_nghost-%COMP%]::before {\n  content: "";\n  position: fixed;\n  inset: 0;\n  background-image: url(/assets/images/hanwha_vision_backgroud.png);\n  background-size: cover;\n  background-position: center;\n  filter: blur(10px);\n  transform: scale(1.1);\n  z-index: -2;\n}\n[_nghost-%COMP%]::after {\n  content: "";\n  position: fixed;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse at 20% 30%,\n      rgba(255, 200, 120, 0.45) 0%,\n      transparent 55%),\n    radial-gradient(\n      ellipse at 80% 75%,\n      rgba(140, 40, 0, 0.55) 0%,\n      transparent 55%),\n    rgba(208, 88, 0, 0.35);\n  z-index: -1;\n}\n.login-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  width: 100%;\n  min-height: 100vh;\n}\n.login-left[_ngcontent-%COMP%] {\n  flex: 0 0 66.6667%;\n  max-width: 66.6667%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n  padding: 2rem;\n}\n.login-brand[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2rem;\n  left: 2.5rem;\n  color: white;\n  font-size: 1.4rem;\n  font-weight: 700;\n  z-index: 2;\n}\n.login-image-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.login-image-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 70%;\n  max-height: 65vh;\n  object-fit: contain;\n  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3));\n}\n.login-tagline[_ngcontent-%COMP%] {\n  margin-top: 1.8rem;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.92);\n  font-size: 1.25rem;\n  font-weight: 600;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.login-tagline[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.9rem;\n  font-weight: 400;\n  margin-top: 0.4rem;\n  color: rgba(255, 255, 255, 0.75);\n}\n.login-right[_ngcontent-%COMP%] {\n  flex: 0 0 33.3333%;\n  max-width: 33.3333%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1.5rem;\n}\n.login-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 18px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.22);\n  padding: 2.2rem 2rem;\n  width: 100%;\n}\n.login-right-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.login-right-header[_ngcontent-%COMP%]   .icon-wrap[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  background:\n    linear-gradient(\n      135deg,\n      #dc6428,\n      #ff9a4d);\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1rem;\n  box-shadow: 0 8px 20px rgba(244, 115, 31, 0.35);\n}\n.login-right-header[_ngcontent-%COMP%]   .icon-wrap[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.6rem;\n}\n.login-right-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #2d2d2d;\n  margin-bottom: 0.25rem;\n}\n.login-right-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #888;\n  font-size: 0.875rem;\n}\n.form-floating[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.btn-login[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dc6428 0%,\n      #ff9a4d 100%);\n  border: none;\n  padding: 0.8rem;\n  font-weight: 600;\n  font-size: 1rem;\n  border-radius: 8px;\n  color: #fff;\n}\n.btn-login[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 20px rgba(244, 115, 31, 0.45);\n  color: #fff;\n}\n.login-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1.5rem;\n  font-size: 0.78rem;\n  color: #bbb;\n}\n@media (max-width: 768px) {\n  .login-left[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .login-right[_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n    max-width: 100%;\n    min-height: 100vh;\n    padding: 2rem 1.2rem;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="login-wrapper">
  <!-- LEFT: \u1EA3nh minh h\u1ECDa -->
  <div class="login-left">
    <div class="login-brand">
      <img src="/assets/images/HVV_logo_login.jpg" alt="VHR System">
    </div>
    <div class="login-image-wrap">
      <img src="/assets/images/login-img-1.jpg" alt="VHR System">
      <div class="login-tagline">
        <span>\u0110\u0103ng nh\u1EADp v\xE0o h\u1EC7 th\u1ED1ng</span>
        <small>\xA9 2026 VHR System. T\u1EA5t c\u1EA3 quy\u1EC1n \u0111\u01B0\u1EE3c b\u1EA3o l\u01B0u.</small>
      </div>
    </div>
  </div>

  <!-- RIGHT: form \u0111\u0103ng nh\u1EADp -->
  <div class="login-right">
    <div class="login-card">
      <div class="login-right-header">
        <div class="icon-wrap"><i class="fas fa-sign-in-alt"></i></div>
        <h4>\u0110\u0103ng nh\u1EADp</h4>
        <p>\u0110\u0103ng nh\u1EADp v\xE0o h\u1EC7 th\u1ED1ng</p>
      </div>

      <div *ngIf="successMessage()" class="alert alert-success alert-dismissible fade show" role="alert">
        <i class="fas fa-check-circle me-2"></i>{{ successMessage() }}
      </div>
      <div *ngIf="errorMessage()" class="alert alert-danger alert-dismissible fade show" role="alert">
        <i class="fas fa-exclamation-circle me-2"></i>{{ errorMessage() }}
      </div>

      <form (ngSubmit)="onSubmit()">
        <div class="form-floating">
          <input type="text" class="form-control" id="username" name="username"
                 placeholder="T\xEAn \u0111\u0103ng nh\u1EADp" [(ngModel)]="username" required>
          <label for="username"><i class="fas fa-user me-2"></i>T\xEAn \u0111\u0103ng nh\u1EADp</label>
        </div>

        <div class="form-floating">
          <input type="password" class="form-control" id="password" name="password"
                 placeholder="M\u1EADt kh\u1EA9u" [(ngModel)]="password" required>
          <label for="password"><i class="fas fa-lock me-2"></i>M\u1EADt kh\u1EA9u</label>
        </div>

        <div class="form-check mb-3">
          <input class="form-check-input" type="checkbox" id="rememberMe" name="rememberMe"
                 [(ngModel)]="rememberMe" (change)="onRememberMeChange()">
          <label class="form-check-label" for="rememberMe">
            <i class="fas fa-bookmark me-2"></i>Ghi nh\u1EDB \u0111\u0103ng nh\u1EADp
          </label>
        </div>

        <button type="submit" class="btn btn-primary btn-login w-100" [disabled]="loading()">
          <i class="fas fa-sign-in-alt me-2"></i>{{ loading() ? '\u0110ang \u0111\u0103ng nh\u1EADp...' : '\u0110\u0103ng nh\u1EADp' }}
        </button>
      </form>

      <div class="login-footer">\xA9 2026 VHR System. T\u1EA5t c\u1EA3 quy\u1EC1n \u0111\u01B0\u1EE3c b\u1EA3o l\u01B0u.</div>
    </div>
  </div>
</div>
`, styles: ['/* src/app/auth/login.component.css */\n:host {\n  position: relative;\n  display: block;\n  min-height: 100vh;\n  background: #d05800;\n}\n:host::before {\n  content: "";\n  position: fixed;\n  inset: 0;\n  background-image: url(/assets/images/hanwha_vision_backgroud.png);\n  background-size: cover;\n  background-position: center;\n  filter: blur(10px);\n  transform: scale(1.1);\n  z-index: -2;\n}\n:host::after {\n  content: "";\n  position: fixed;\n  inset: 0;\n  background:\n    radial-gradient(\n      ellipse at 20% 30%,\n      rgba(255, 200, 120, 0.45) 0%,\n      transparent 55%),\n    radial-gradient(\n      ellipse at 80% 75%,\n      rgba(140, 40, 0, 0.55) 0%,\n      transparent 55%),\n    rgba(208, 88, 0, 0.35);\n  z-index: -1;\n}\n.login-wrapper {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  width: 100%;\n  min-height: 100vh;\n}\n.login-left {\n  flex: 0 0 66.6667%;\n  max-width: 66.6667%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n  padding: 2rem;\n}\n.login-brand {\n  position: absolute;\n  top: 2rem;\n  left: 2.5rem;\n  color: white;\n  font-size: 1.4rem;\n  font-weight: 700;\n  z-index: 2;\n}\n.login-image-wrap {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.login-image-wrap img {\n  max-width: 70%;\n  max-height: 65vh;\n  object-fit: contain;\n  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3));\n}\n.login-tagline {\n  margin-top: 1.8rem;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.92);\n  font-size: 1.25rem;\n  font-weight: 600;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.login-tagline small {\n  display: block;\n  font-size: 0.9rem;\n  font-weight: 400;\n  margin-top: 0.4rem;\n  color: rgba(255, 255, 255, 0.75);\n}\n.login-right {\n  flex: 0 0 33.3333%;\n  max-width: 33.3333%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1.5rem;\n}\n.login-card {\n  background: #fff;\n  border-radius: 18px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.22);\n  padding: 2.2rem 2rem;\n  width: 100%;\n}\n.login-right-header {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.login-right-header .icon-wrap {\n  width: 64px;\n  height: 64px;\n  background:\n    linear-gradient(\n      135deg,\n      #dc6428,\n      #ff9a4d);\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1rem;\n  box-shadow: 0 8px 20px rgba(244, 115, 31, 0.35);\n}\n.login-right-header .icon-wrap i {\n  color: white;\n  font-size: 1.6rem;\n}\n.login-right-header h4 {\n  font-weight: 700;\n  color: #2d2d2d;\n  margin-bottom: 0.25rem;\n}\n.login-right-header p {\n  color: #888;\n  font-size: 0.875rem;\n}\n.form-floating {\n  margin-bottom: 1rem;\n}\n.btn-login {\n  background:\n    linear-gradient(\n      135deg,\n      #dc6428 0%,\n      #ff9a4d 100%);\n  border: none;\n  padding: 0.8rem;\n  font-weight: 600;\n  font-size: 1rem;\n  border-radius: 8px;\n  color: #fff;\n}\n.btn-login:hover {\n  box-shadow: 0 8px 20px rgba(244, 115, 31, 0.45);\n  color: #fff;\n}\n.login-footer {\n  text-align: center;\n  margin-top: 1.5rem;\n  font-size: 0.78rem;\n  color: #bbb;\n}\n@media (max-width: 768px) {\n  .login-left {\n    display: none;\n  }\n  .login-right {\n    flex: 0 0 100%;\n    max-width: 100%;\n    min-height: 100vh;\n    padding: 2rem 1.2rem;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/auth/login.component.ts", lineNumber: 21 });
})();

// src/app/auth/auth.guard.ts
var authGuard = async () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isAuthenticated()) return true;
  const ok = await auth.checkSession();
  if (ok) return true;
  router.navigate(["/login"]);
  return false;
};

// src/app/auth/hrm-access.guard.ts
var hrmAccessGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const message = inject(NzMessageService);
  const i18n = inject(I18nService);
  if (auth.currentUser()?.hasSysTypeZeroMenus) {
    return true;
  }
  message.error(i18n.t("topbar.hrmAccessDenied", "B\u1EA1n kh\xF4ng c\xF3 quy\u1EC1n truy c\u1EADp v\xE0o HR Management System"));
  return router.parseUrl("/dashboard");
};

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-layout.mjs
var _c0 = ["*"];
function NzSiderTriggerComponent_Conditional_0_ng_template_0_Template(rf, ctx) {
}
function NzSiderTriggerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzSiderTriggerComponent_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const defaultZeroTrigger_r2 = \u0275\u0275reference(5);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.nzZeroTrigger || defaultZeroTrigger_r2);
  }
}
function NzSiderTriggerComponent_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzSiderTriggerComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzSiderTriggerComponent_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const defaultTrigger_r3 = \u0275\u0275reference(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.nzTrigger || defaultTrigger_r3);
  }
}
function NzSiderTriggerComponent_ng_template_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzType", ctx_r0.nzCollapsed ? "left" : "right");
  }
}
function NzSiderTriggerComponent_ng_template_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzType", ctx_r0.nzCollapsed ? "right" : "left");
  }
}
function NzSiderTriggerComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NzSiderTriggerComponent_ng_template_2_Conditional_0_Template, 1, 1, "nz-icon", 3)(1, NzSiderTriggerComponent_ng_template_2_Conditional_1_Template, 1, 1, "nz-icon", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.nzReverseArrow ? 0 : 1);
  }
}
function NzSiderTriggerComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-icon", 4);
  }
}
function NzSiderComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("click", function NzSiderComponent_Conditional_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setCollapsed(!ctx_r1.nzCollapsed));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matchBreakPoint", ctx_r1.matchBreakPoint)("nzCollapsedWidth", ctx_r1.nzCollapsedWidth)("nzCollapsed", ctx_r1.nzCollapsed)("nzBreakpoint", ctx_r1.nzBreakpoint)("nzReverseArrow", ctx_r1.nzReverseArrow)("nzTrigger", ctx_r1.nzTrigger)("nzZeroTrigger", ctx_r1.nzZeroTrigger)("siderWidth", ctx_r1.widthSetting);
  }
}
var NzContentComponent = class _NzContentComponent {
  static \u0275fac = function NzContentComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzContentComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzContentComponent,
    selectors: [["nz-content"]],
    hostAttrs: [1, "ant-layout-content"],
    exportAs: ["nzContent"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function NzContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzContentComponent, [{
    type: Component,
    args: [{
      selector: "nz-content",
      exportAs: "nzContent",
      template: `<ng-content />`,
      encapsulation: ViewEncapsulation.None,
      host: {
        class: "ant-layout-content"
      }
    }]
  }], null, null);
})();
var NzFooterComponent = class _NzFooterComponent {
  static \u0275fac = function NzFooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzFooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzFooterComponent,
    selectors: [["nz-footer"]],
    hostAttrs: [1, "ant-layout-footer"],
    exportAs: ["nzFooter"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function NzFooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFooterComponent, [{
    type: Component,
    args: [{
      selector: "nz-footer",
      exportAs: "nzFooter",
      template: `<ng-content />`,
      encapsulation: ViewEncapsulation.None,
      host: {
        class: "ant-layout-footer"
      }
    }]
  }], null, null);
})();
var NzHeaderComponent = class _NzHeaderComponent {
  static \u0275fac = function NzHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzHeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzHeaderComponent,
    selectors: [["nz-header"]],
    hostAttrs: [1, "ant-layout-header"],
    exportAs: ["nzHeader"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function NzHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzHeaderComponent, [{
    type: Component,
    args: [{
      selector: "nz-header",
      exportAs: "nzHeader",
      template: `<ng-content />`,
      encapsulation: ViewEncapsulation.None,
      host: {
        class: "ant-layout-header"
      }
    }]
  }], null, null);
})();
var NzSiderTriggerComponent = class _NzSiderTriggerComponent {
  nzCollapsed = false;
  nzReverseArrow = false;
  nzZeroTrigger = null;
  nzTrigger = void 0;
  matchBreakPoint = false;
  nzCollapsedWidth = null;
  siderWidth = null;
  nzBreakpoint = null;
  isZeroTrigger = false;
  isNormalTrigger = false;
  updateTriggerType() {
    this.isZeroTrigger = this.nzCollapsedWidth === 0 && (this.nzBreakpoint && this.matchBreakPoint || !this.nzBreakpoint);
    this.isNormalTrigger = this.nzCollapsedWidth !== 0;
  }
  ngOnInit() {
    this.updateTriggerType();
  }
  ngOnChanges() {
    this.updateTriggerType();
  }
  static \u0275fac = function NzSiderTriggerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSiderTriggerComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzSiderTriggerComponent,
    selectors: [["", "nz-sider-trigger", ""]],
    hostVars: 10,
    hostBindings: function NzSiderTriggerComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleProp("width", ctx.isNormalTrigger ? ctx.siderWidth : null);
        \u0275\u0275classProp("ant-layout-sider-trigger", ctx.isNormalTrigger)("ant-layout-sider-zero-width-trigger", ctx.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right", ctx.isZeroTrigger && ctx.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left", ctx.isZeroTrigger && !ctx.nzReverseArrow);
      }
    },
    inputs: {
      nzCollapsed: "nzCollapsed",
      nzReverseArrow: "nzReverseArrow",
      nzZeroTrigger: "nzZeroTrigger",
      nzTrigger: "nzTrigger",
      matchBreakPoint: "matchBreakPoint",
      nzCollapsedWidth: "nzCollapsedWidth",
      siderWidth: "siderWidth",
      nzBreakpoint: "nzBreakpoint"
    },
    exportAs: ["nzSiderTrigger"],
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 6,
    vars: 2,
    consts: [["defaultTrigger", ""], ["defaultZeroTrigger", ""], [3, "ngTemplateOutlet"], [3, "nzType"], ["nzType", "bars"]],
    template: function NzSiderTriggerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, NzSiderTriggerComponent_Conditional_0_Template, 1, 1, null, 2);
        \u0275\u0275conditionalCreate(1, NzSiderTriggerComponent_Conditional_1_Template, 1, 1, null, 2);
        \u0275\u0275template(2, NzSiderTriggerComponent_ng_template_2_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, NzSiderTriggerComponent_ng_template_4_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.isZeroTrigger ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.isNormalTrigger ? 1 : -1);
      }
    },
    dependencies: [NgTemplateOutlet, NzIconModule, NzIconDirective],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSiderTriggerComponent, [{
    type: Component,
    args: [{
      selector: "[nz-sider-trigger]",
      exportAs: "nzSiderTrigger",
      encapsulation: ViewEncapsulation.None,
      template: `
    @if (isZeroTrigger) {
      <ng-template [ngTemplateOutlet]="nzZeroTrigger || defaultZeroTrigger" />
    }

    @if (isNormalTrigger) {
      <ng-template [ngTemplateOutlet]="nzTrigger || defaultTrigger" />
    }
    <ng-template #defaultTrigger>
      @if (nzReverseArrow) {
        <nz-icon [nzType]="nzCollapsed ? 'left' : 'right'" />
      } @else {
        <nz-icon [nzType]="nzCollapsed ? 'right' : 'left'" />
      }
    </ng-template>
    <ng-template #defaultZeroTrigger>
      <nz-icon nzType="bars" />
    </ng-template>
  `,
      host: {
        "[class.ant-layout-sider-trigger]": "isNormalTrigger",
        "[style.width]": "isNormalTrigger ? siderWidth : null",
        "[class.ant-layout-sider-zero-width-trigger]": "isZeroTrigger",
        "[class.ant-layout-sider-zero-width-trigger-right]": "isZeroTrigger && nzReverseArrow",
        "[class.ant-layout-sider-zero-width-trigger-left]": "isZeroTrigger && !nzReverseArrow"
      },
      imports: [NgTemplateOutlet, NzIconModule]
    }]
  }], null, {
    nzCollapsed: [{
      type: Input
    }],
    nzReverseArrow: [{
      type: Input
    }],
    nzZeroTrigger: [{
      type: Input
    }],
    nzTrigger: [{
      type: Input
    }],
    matchBreakPoint: [{
      type: Input
    }],
    nzCollapsedWidth: [{
      type: Input
    }],
    siderWidth: [{
      type: Input
    }],
    nzBreakpoint: [{
      type: Input
    }]
  });
})();
var NzSiderComponent = class _NzSiderComponent {
  destroyRef = inject(DestroyRef);
  platform = inject(Platform);
  cdr = inject(ChangeDetectorRef);
  breakpointService = inject(NzBreakpointService);
  nzMenuDirective = null;
  nzCollapsedChange = new EventEmitter();
  nzWidth = 200;
  nzTheme = "dark";
  nzCollapsedWidth = 80;
  nzBreakpoint = null;
  nzZeroTrigger = null;
  nzTrigger = void 0;
  nzReverseArrow = false;
  nzCollapsible = false;
  nzCollapsed = false;
  matchBreakPoint = false;
  flexSetting = null;
  widthSetting = null;
  updateStyleMap() {
    this.widthSetting = this.nzCollapsed ? `${this.nzCollapsedWidth}px` : toCssPixel(this.nzWidth);
    this.flexSetting = `0 0 ${this.widthSetting}`;
    this.cdr.markForCheck();
  }
  updateMenuInlineCollapsed() {
    if (this.nzMenuDirective && this.nzMenuDirective.nzMode === "inline" && this.nzCollapsedWidth !== 0) {
      this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed);
    }
  }
  setCollapsed(collapsed) {
    if (collapsed !== this.nzCollapsed) {
      this.nzCollapsed = collapsed;
      this.nzCollapsedChange.emit(collapsed);
      this.updateMenuInlineCollapsed();
      this.updateStyleMap();
      this.cdr.markForCheck();
    }
  }
  ngOnInit() {
    this.updateStyleMap();
    if (this.platform.isBrowser) {
      this.breakpointService.subscribe(siderResponsiveMap, true).pipe(takeUntilDestroyed(this.destroyRef)).subscribe((map) => {
        const breakpoint = this.nzBreakpoint;
        if (breakpoint) {
          inNextTick().subscribe(() => {
            this.matchBreakPoint = !map[breakpoint];
            this.setCollapsed(this.matchBreakPoint);
            this.cdr.markForCheck();
          });
        }
      });
    }
  }
  ngOnChanges(changes) {
    const {
      nzCollapsed,
      nzCollapsedWidth,
      nzWidth
    } = changes;
    if (nzCollapsed || nzCollapsedWidth || nzWidth) {
      this.updateStyleMap();
    }
    if (nzCollapsed) {
      this.updateMenuInlineCollapsed();
    }
  }
  ngAfterContentInit() {
    this.updateMenuInlineCollapsed();
  }
  static \u0275fac = function NzSiderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzSiderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzSiderComponent,
    selectors: [["nz-sider"]],
    contentQueries: function NzSiderComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, NzMenuDirective, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzMenuDirective = _t.first);
      }
    },
    hostAttrs: [1, "ant-layout-sider"],
    hostVars: 18,
    hostBindings: function NzSiderComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275styleProp("flex", ctx.flexSetting)("max-width", ctx.widthSetting)("min-width", ctx.widthSetting)("width", ctx.widthSetting);
        \u0275\u0275classProp("ant-layout-sider-zero-width", ctx.nzCollapsed && ctx.nzCollapsedWidth === 0)("ant-layout-sider-light", ctx.nzTheme === "light")("ant-layout-sider-dark", ctx.nzTheme === "dark")("ant-layout-sider-collapsed", ctx.nzCollapsed)("ant-layout-sider-has-trigger", ctx.nzCollapsible && ctx.nzTrigger !== null);
      }
    },
    inputs: {
      nzWidth: "nzWidth",
      nzTheme: "nzTheme",
      nzCollapsedWidth: "nzCollapsedWidth",
      nzBreakpoint: "nzBreakpoint",
      nzZeroTrigger: "nzZeroTrigger",
      nzTrigger: "nzTrigger",
      nzReverseArrow: [2, "nzReverseArrow", "nzReverseArrow", booleanAttribute],
      nzCollapsible: [2, "nzCollapsible", "nzCollapsible", booleanAttribute],
      nzCollapsed: [2, "nzCollapsed", "nzCollapsed", booleanAttribute]
    },
    outputs: {
      nzCollapsedChange: "nzCollapsedChange"
    },
    exportAs: ["nzSider"],
    features: [\u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c0,
    decls: 3,
    vars: 1,
    consts: [[1, "ant-layout-sider-children"], ["nz-sider-trigger", "", 3, "matchBreakPoint", "nzCollapsedWidth", "nzCollapsed", "nzBreakpoint", "nzReverseArrow", "nzTrigger", "nzZeroTrigger", "siderWidth"], ["nz-sider-trigger", "", 3, "click", "matchBreakPoint", "nzCollapsedWidth", "nzCollapsed", "nzBreakpoint", "nzReverseArrow", "nzTrigger", "nzZeroTrigger", "siderWidth"]],
    template: function NzSiderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(2, NzSiderComponent_Conditional_2_Template, 1, 8, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.nzCollapsible && ctx.nzTrigger !== null ? 2 : -1);
      }
    },
    dependencies: [NzSiderTriggerComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSiderComponent, [{
    type: Component,
    args: [{
      selector: "nz-sider",
      exportAs: "nzSider",
      encapsulation: ViewEncapsulation.None,
      template: `
    <div class="ant-layout-sider-children">
      <ng-content />
    </div>
    @if (nzCollapsible && nzTrigger !== null) {
      <div
        nz-sider-trigger
        [matchBreakPoint]="matchBreakPoint"
        [nzCollapsedWidth]="nzCollapsedWidth"
        [nzCollapsed]="nzCollapsed"
        [nzBreakpoint]="nzBreakpoint"
        [nzReverseArrow]="nzReverseArrow"
        [nzTrigger]="nzTrigger"
        [nzZeroTrigger]="nzZeroTrigger"
        [siderWidth]="widthSetting"
        (click)="setCollapsed(!nzCollapsed)"
      ></div>
    }
  `,
      host: {
        class: "ant-layout-sider",
        "[class.ant-layout-sider-zero-width]": `nzCollapsed && nzCollapsedWidth === 0`,
        "[class.ant-layout-sider-light]": `nzTheme === 'light'`,
        "[class.ant-layout-sider-dark]": `nzTheme === 'dark'`,
        "[class.ant-layout-sider-collapsed]": `nzCollapsed`,
        "[class.ant-layout-sider-has-trigger]": `nzCollapsible && nzTrigger !== null`,
        "[style.flex]": "flexSetting",
        "[style.maxWidth]": "widthSetting",
        "[style.minWidth]": "widthSetting",
        "[style.width]": "widthSetting"
      },
      imports: [NzSiderTriggerComponent]
    }]
  }], null, {
    nzMenuDirective: [{
      type: ContentChild,
      args: [NzMenuDirective]
    }],
    nzCollapsedChange: [{
      type: Output
    }],
    nzWidth: [{
      type: Input
    }],
    nzTheme: [{
      type: Input
    }],
    nzCollapsedWidth: [{
      type: Input
    }],
    nzBreakpoint: [{
      type: Input
    }],
    nzZeroTrigger: [{
      type: Input
    }],
    nzTrigger: [{
      type: Input
    }],
    nzReverseArrow: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzCollapsible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzCollapsed: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var NzLayoutComponent = class _NzLayoutComponent {
  dir = inject(Directionality).valueSignal;
  listOfNzSiderComponent;
  static \u0275fac = function NzLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzLayoutComponent,
    selectors: [["nz-layout"]],
    contentQueries: function NzLayoutComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, NzSiderComponent, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listOfNzSiderComponent = _t);
      }
    },
    hostAttrs: [1, "ant-layout"],
    hostVars: 4,
    hostBindings: function NzLayoutComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("ant-layout-rtl", ctx.dir() === "rtl")("ant-layout-has-sider", ctx.listOfNzSiderComponent.length > 0);
      }
    },
    exportAs: ["nzLayout"],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function NzLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzLayoutComponent, [{
    type: Component,
    args: [{
      selector: "nz-layout",
      exportAs: "nzLayout",
      template: `<ng-content />`,
      encapsulation: ViewEncapsulation.None,
      host: {
        class: "ant-layout",
        "[class.ant-layout-rtl]": `dir() === 'rtl'`,
        "[class.ant-layout-has-sider]": "listOfNzSiderComponent.length > 0"
      }
    }]
  }], null, {
    listOfNzSiderComponent: [{
      type: ContentChildren,
      args: [NzSiderComponent]
    }]
  });
})();
var NzLayoutModule = class _NzLayoutModule {
  static \u0275fac = function NzLayoutModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzLayoutModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzLayoutModule,
    imports: [NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzSiderComponent, NzSiderTriggerComponent],
    exports: [NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzSiderComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzSiderComponent, NzSiderTriggerComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzLayoutModule, [{
    type: NgModule,
    args: [{
      imports: [NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzSiderComponent, NzSiderTriggerComponent],
      exports: [NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzSiderComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-badge.mjs
function NzBadgeSupComponent_Conditional_0_For_1_Conditional_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    const \u0275$index_2_r2 = \u0275\u0275nextContext(2).$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("current", p_r1 === ctx_r2.countArray[\u0275$index_2_r2]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r1, " ");
  }
}
function NzBadgeSupComponent_Conditional_0_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, NzBadgeSupComponent_Conditional_0_For_1_Conditional_1_For_1_Template, 2, 3, "p", 2, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r2.countSingleArray);
  }
}
function NzBadgeSupComponent_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275conditionalCreate(1, NzBadgeSupComponent_Conditional_0_For_1_Conditional_1_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const \u0275$index_2_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("transform", "translateY(" + -ctx_r2.countArray[\u0275$index_2_r2] * 100 + "%)");
    \u0275\u0275property("nzNoAnimation", !!ctx_r2.noAnimation?.nzNoAnimation?.());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.nzDot && ctx_r2.countArray[\u0275$index_2_r2] !== void 0 ? 1 : -1);
  }
}
function NzBadgeSupComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, NzBadgeSupComponent_Conditional_0_For_1_Template, 2, 4, "span", 0, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.maxNumberArray);
  }
}
function NzBadgeSupComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r2.nzOverflowCount, "+ ");
  }
}
var _c02 = ["*"];
function NzBadgeComponent_Conditional_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.nzText);
  }
}
function NzBadgeComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 1);
    \u0275\u0275elementStart(1, "span", 2);
    \u0275\u0275template(2, NzBadgeComponent_Conditional_0_ng_container_2_Template, 2, 1, "ng-container", 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r0.mergedStyle);
    \u0275\u0275classMap((ctx_r0.nzStatus || ctx_r0.presetColor) && "ant-badge-status-" + (ctx_r0.nzStatus || ctx_r0.presetColor));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.nzText);
  }
}
function NzBadgeComponent_ng_container_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-badge-sup", 3);
    \u0275\u0275animateLeave(function NzBadgeComponent_ng_container_2_Conditional_1_Template_animateleave_cb() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.supAnimationLeave());
    });
    \u0275\u0275animateEnter(function NzBadgeComponent_ng_container_2_Conditional_1_Template_animateenter_cb() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.supAnimationEnter());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("isPresetColor", ctx_r0.nzStatus || ctx_r0.presetColor)("nzColor", ctx_r0.nzStatus || ctx_r0.presetColor || ctx_r0.nzColor)("nzOffset", ctx_r0.nzOffset)("nzSize", ctx_r0.nzSize)("nzTitle", ctx_r0.nzTitle)("nzStyle", ctx_r0.mergedStyle)("nzDot", ctx_r0.nzDot)("nzCount", ctx_r0.nzCount)("nzOverflowCount", ctx_r0.nzOverflowCount);
  }
}
function NzBadgeComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275conditionalCreate(1, NzBadgeComponent_ng_container_2_Conditional_1_Template, 1, 9, "nz-badge-sup", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.showSup ? 1 : -1);
  }
}
function NzRibbonComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.nzText);
  }
}
var NzBadgeSupComponent = class _NzBadgeSupComponent {
  noAnimation = inject(NzNoAnimationDirective, {
    host: true,
    optional: true
  });
  nzOffset;
  nzTitle;
  nzStyle = null;
  nzDot = false;
  nzOverflowCount = 99;
  nzCount;
  nzSize = "default";
  isPresetColor = false;
  nzColor;
  maxNumberArray = [];
  countArray = [];
  count = 0;
  countSingleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  generateMaxNumberArray() {
    this.maxNumberArray = this.nzOverflowCount.toString().split("").map((value, index) => `${value}-${index}`);
  }
  ngOnInit() {
    this.generateMaxNumberArray();
  }
  ngOnChanges(changes) {
    const {
      nzOverflowCount,
      nzCount
    } = changes;
    if (nzCount && typeof nzCount.currentValue === "number") {
      this.count = Math.max(0, nzCount.currentValue);
      this.countArray = this.count.toString().split("").map((item) => +item);
    }
    if (nzOverflowCount) {
      this.generateMaxNumberArray();
    }
  }
  static \u0275fac = function NzBadgeSupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzBadgeSupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzBadgeSupComponent,
    selectors: [["nz-badge-sup"]],
    hostAttrs: [1, "ant-scroll-number"],
    hostVars: 17,
    hostBindings: function NzBadgeSupComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("title", ctx.nzTitle === null ? "" : ctx.nzTitle || ctx.nzCount);
        \u0275\u0275styleMap(ctx.nzStyle);
        \u0275\u0275classMap(ctx.isPresetColor ? "ant-badge-status-" + ctx.nzColor : "");
        \u0275\u0275styleProp("right", ctx.nzOffset && ctx.nzOffset[0] ? -ctx.nzOffset[0] : null, "px")("margin-top", ctx.nzOffset && ctx.nzOffset[1] ? ctx.nzOffset[1] : null, "px");
        \u0275\u0275classProp("ant-badge-count", !ctx.nzDot)("ant-badge-count-sm", ctx.nzSize === "small")("ant-badge-dot", ctx.nzDot)("ant-badge-multiple-words", ctx.countArray.length >= 2);
      }
    },
    inputs: {
      nzOffset: "nzOffset",
      nzTitle: "nzTitle",
      nzStyle: "nzStyle",
      nzDot: "nzDot",
      nzOverflowCount: [2, "nzOverflowCount", "nzOverflowCount", numberAttribute],
      nzCount: "nzCount",
      nzSize: "nzSize",
      isPresetColor: [2, "isPresetColor", "isPresetColor", booleanAttribute],
      nzColor: "nzColor"
    },
    exportAs: ["nzBadgeSup"],
    features: [\u0275\u0275NgOnChangesFeature],
    decls: 2,
    vars: 1,
    consts: [[1, "ant-scroll-number-only", 3, "nzNoAnimation", "transform"], [1, "ant-scroll-number-only", 3, "nzNoAnimation"], [1, "ant-scroll-number-only-unit", 3, "current"], [1, "ant-scroll-number-only-unit"]],
    template: function NzBadgeSupComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, NzBadgeSupComponent_Conditional_0_Template, 2, 0)(1, NzBadgeSupComponent_Conditional_1_Template, 1, 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.count <= ctx.nzOverflowCount ? 0 : 1);
      }
    },
    dependencies: [NzNoAnimationDirective],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBadgeSupComponent, [{
    type: Component,
    args: [{
      selector: "nz-badge-sup",
      exportAs: "nzBadgeSup",
      encapsulation: ViewEncapsulation.None,
      imports: [NzNoAnimationDirective],
      template: `
    @if (count <= nzOverflowCount) {
      @for (n of maxNumberArray; track n; let i = $index) {
        <span
          [nzNoAnimation]="!!noAnimation?.nzNoAnimation?.()"
          class="ant-scroll-number-only"
          [style.transform]="'translateY(' + -countArray[i] * 100 + '%)'"
        >
          @if (!nzDot && countArray[i] !== undefined) {
            @for (p of countSingleArray; track p) {
              <p class="ant-scroll-number-only-unit" [class.current]="p === countArray[i]">
                {{ p }}
              </p>
            }
          }
        </span>
      }
    } @else {
      {{ nzOverflowCount }}+
    }
  `,
      host: {
        class: "ant-scroll-number",
        "[class]": `isPresetColor ? ('ant-badge-status-' + nzColor) : ''`,
        "[attr.title]": `nzTitle === null ? '' : nzTitle || nzCount`,
        "[style]": `nzStyle`,
        "[style.right.px]": `nzOffset && nzOffset[0] ? -nzOffset[0] : null`,
        "[style.margin-top.px]": `nzOffset && nzOffset[1] ? nzOffset[1] : null`,
        "[class.ant-badge-count]": `!nzDot`,
        "[class.ant-badge-count-sm]": `nzSize === 'small'`,
        "[class.ant-badge-dot]": `nzDot`,
        "[class.ant-badge-multiple-words]": `countArray.length >= 2`
      }
    }]
  }], null, {
    nzOffset: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzStyle: [{
      type: Input
    }],
    nzDot: [{
      type: Input
    }],
    nzOverflowCount: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    nzCount: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    isPresetColor: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzColor: [{
      type: Input
    }]
  });
})();
var badgePresetColors = ["pink", "red", "yellow", "orange", "cyan", "green", "blue", "purple", "geekblue", "magenta", "volcano", "gold", "lime"];
var NZ_CONFIG_MODULE_NAME = "badge";
var NzBadgeComponent = (() => {
  let _nzOverflowCount_decorators;
  let _nzOverflowCount_initializers = [];
  let _nzOverflowCount_extraInitializers = [];
  let _nzColor_decorators;
  let _nzColor_initializers = [];
  let _nzColor_extraInitializers = [];
  return class NzBadgeComponent2 {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _nzOverflowCount_decorators = [WithConfig()];
      _nzColor_decorators = [WithConfig()];
      __esDecorate(null, null, _nzOverflowCount_decorators, {
        kind: "field",
        name: "nzOverflowCount",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzOverflowCount" in obj,
          get: (obj) => obj.nzOverflowCount,
          set: (obj, value) => {
            obj.nzOverflowCount = value;
          }
        },
        metadata: _metadata
      }, _nzOverflowCount_initializers, _nzOverflowCount_extraInitializers);
      __esDecorate(null, null, _nzColor_decorators, {
        kind: "field",
        name: "nzColor",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzColor" in obj,
          get: (obj) => obj.nzColor,
          set: (obj, value) => {
            obj.nzColor = value;
          }
        },
        metadata: _metadata
      }, _nzColor_initializers, _nzColor_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    dir = inject(Directionality).valueSignal;
    _nzModuleName = NZ_CONFIG_MODULE_NAME;
    showSup = false;
    supAnimationEnter = withAnimationCheck(() => "ant-badge-zoom-enter");
    supAnimationLeave = withAnimationCheck(() => "ant-badge-zoom-leave");
    presetColor = null;
    nzShowZero = false;
    nzShowDot = true;
    nzStandalone = false;
    nzDot = false;
    nzOverflowCount = __runInitializers(this, _nzOverflowCount_initializers, 99);
    nzColor = (__runInitializers(this, _nzOverflowCount_extraInitializers), __runInitializers(this, _nzColor_initializers, void 0));
    nzStyle = (__runInitializers(this, _nzColor_extraInitializers), null);
    nzText = null;
    nzTitle;
    nzStatus;
    nzCount;
    nzOffset;
    nzSize = "default";
    get mergedStyle() {
      return __spreadValues({
        backgroundColor: !this.presetColor && this.nzColor
      }, this.nzStyle ?? {});
    }
    ngOnChanges(changes) {
      const {
        nzColor,
        nzShowDot,
        nzDot,
        nzCount,
        nzShowZero
      } = changes;
      if (nzColor) {
        this.presetColor = this.nzColor && badgePresetColors.indexOf(this.nzColor) !== -1 ? this.nzColor : null;
      }
      if (nzShowDot || nzDot || nzCount || nzShowZero) {
        this.showSup = this.nzShowDot && this.nzDot || typeof this.nzCount === "number" && (this.nzCount > 0 || this.nzShowZero);
      }
    }
    static \u0275fac = function NzBadgeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzBadgeComponent2)();
    };
    static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: NzBadgeComponent2,
      selectors: [["nz-badge"]],
      hostAttrs: [1, "ant-badge"],
      hostVars: 6,
      hostBindings: function NzBadgeComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("ant-badge-status", ctx.nzStatus)("ant-badge-not-a-wrapper", !!(ctx.nzStandalone || (ctx.nzStatus || ctx.nzColor) && !ctx.showSup && !ctx.nzCount))("ant-badge-rtl", ctx.dir() === "rtl");
        }
      },
      inputs: {
        nzShowZero: [2, "nzShowZero", "nzShowZero", booleanAttribute],
        nzShowDot: [2, "nzShowDot", "nzShowDot", booleanAttribute],
        nzStandalone: [2, "nzStandalone", "nzStandalone", booleanAttribute],
        nzDot: [2, "nzDot", "nzDot", booleanAttribute],
        nzOverflowCount: "nzOverflowCount",
        nzColor: "nzColor",
        nzStyle: "nzStyle",
        nzText: "nzText",
        nzTitle: "nzTitle",
        nzStatus: "nzStatus",
        nzCount: "nzCount",
        nzOffset: "nzOffset",
        nzSize: "nzSize"
      },
      exportAs: ["nzBadge"],
      features: [\u0275\u0275NgOnChangesFeature],
      ngContentSelectors: _c02,
      decls: 3,
      vars: 2,
      consts: [[4, "nzStringTemplateOutlet"], [1, "ant-badge-status-dot"], [1, "ant-badge-status-text"], [3, "isPresetColor", "nzColor", "nzOffset", "nzSize", "nzTitle", "nzStyle", "nzDot", "nzCount", "nzOverflowCount"]],
      template: function NzBadgeComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275conditionalCreate(0, NzBadgeComponent_Conditional_0_Template, 3, 5);
          \u0275\u0275projection(1);
          \u0275\u0275template(2, NzBadgeComponent_ng_container_2_Template, 2, 1, "ng-container", 0);
        }
        if (rf & 2) {
          \u0275\u0275conditional((ctx.nzStatus || ctx.nzColor) && !ctx.showSup && !ctx.nzCount ? 0 : -1);
          \u0275\u0275advance(2);
          \u0275\u0275property("nzStringTemplateOutlet", ctx.nzCount);
        }
      },
      dependencies: [NzBadgeSupComponent, NzOutletModule, NzStringTemplateOutletDirective],
      encapsulation: 2
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBadgeComponent, [{
    type: Component,
    args: [{
      selector: "nz-badge",
      exportAs: "nzBadge",
      encapsulation: ViewEncapsulation.None,
      imports: [NzBadgeSupComponent, NzOutletModule],
      template: `
    @if ((nzStatus || nzColor) && !showSup && !nzCount) {
      <span
        class="ant-badge-status-dot"
        [class]="(nzStatus || presetColor) && 'ant-badge-status-' + (nzStatus || presetColor)"
        [style]="mergedStyle"
      ></span>
      <span class="ant-badge-status-text">
        <ng-container *nzStringTemplateOutlet="nzText">{{ nzText }}</ng-container>
      </span>
    }
    <ng-content />
    <ng-container *nzStringTemplateOutlet="nzCount">
      @if (showSup) {
        <nz-badge-sup
          [isPresetColor]="nzStatus || presetColor"
          [nzColor]="nzStatus || presetColor || nzColor"
          [nzOffset]="nzOffset"
          [nzSize]="nzSize"
          [nzTitle]="nzTitle"
          [nzStyle]="mergedStyle"
          [nzDot]="nzDot"
          [nzCount]="nzCount"
          [nzOverflowCount]="nzOverflowCount"
          [animate.enter]="supAnimationEnter()"
          [animate.leave]="supAnimationLeave()"
        />
      }
    </ng-container>
  `,
      host: {
        class: "ant-badge",
        "[class.ant-badge-status]": "nzStatus",
        "[class.ant-badge-not-a-wrapper]": "!!(nzStandalone || ((nzStatus || nzColor) && !showSup && !nzCount))",
        "[class.ant-badge-rtl]": 'dir() === "rtl"'
      }
    }]
  }], null, {
    nzShowZero: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzShowDot: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzStandalone: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzDot: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzOverflowCount: [{
      type: Input
    }],
    nzColor: [{
      type: Input
    }],
    nzStyle: [{
      type: Input
    }],
    nzText: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzStatus: [{
      type: Input
    }],
    nzCount: [{
      type: Input
    }],
    nzOffset: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }]
  });
})();
var NzRibbonComponent = class _NzRibbonComponent {
  nzColor;
  nzPlacement = "end";
  nzText = null;
  presetColor = null;
  ngOnChanges(changes) {
    const {
      nzColor
    } = changes;
    if (nzColor) {
      this.presetColor = this.nzColor && badgePresetColors.indexOf(this.nzColor) !== -1 ? this.nzColor : null;
    }
  }
  static \u0275fac = function NzRibbonComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzRibbonComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _NzRibbonComponent,
    selectors: [["nz-ribbon"]],
    hostAttrs: [1, "ant-ribbon-wrapper"],
    inputs: {
      nzColor: "nzColor",
      nzPlacement: "nzPlacement",
      nzText: "nzText"
    },
    exportAs: ["nzRibbon"],
    features: [\u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c02,
    decls: 4,
    vars: 11,
    consts: [[1, "ant-ribbon"], [4, "nzStringTemplateOutlet"], [1, "ant-ribbon-corner"], [1, "ant-ribbon-text"]],
    template: function NzRibbonComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275template(2, NzRibbonComponent_ng_container_2_Template, 3, 1, "ng-container", 1);
        \u0275\u0275element(3, "div", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275classMap(ctx.presetColor && "ant-ribbon-color-" + ctx.presetColor);
        \u0275\u0275styleProp("background-color", !ctx.presetColor && ctx.nzColor);
        \u0275\u0275classProp("ant-ribbon-placement-end", ctx.nzPlacement === "end")("ant-ribbon-placement-start", ctx.nzPlacement === "start");
        \u0275\u0275advance();
        \u0275\u0275property("nzStringTemplateOutlet", ctx.nzText);
        \u0275\u0275advance();
        \u0275\u0275styleProp("color", !ctx.presetColor && ctx.nzColor);
      }
    },
    dependencies: [NzOutletModule, NzStringTemplateOutletDirective],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzRibbonComponent, [{
    type: Component,
    args: [{
      selector: "nz-ribbon",
      exportAs: "nzRibbon",
      encapsulation: ViewEncapsulation.None,
      imports: [NzOutletModule],
      template: `
    <ng-content />
    <div
      class="ant-ribbon"
      [class]="presetColor && 'ant-ribbon-color-' + presetColor"
      [class.ant-ribbon-placement-end]="nzPlacement === 'end'"
      [class.ant-ribbon-placement-start]="nzPlacement === 'start'"
      [style.background-color]="!presetColor && nzColor"
    >
      <ng-container *nzStringTemplateOutlet="nzText">
        <span class="ant-ribbon-text">{{ nzText }}</span>
      </ng-container>
      <div class="ant-ribbon-corner" [style.color]="!presetColor && nzColor"></div>
    </div>
  `,
      host: {
        class: "ant-ribbon-wrapper"
      }
    }]
  }], null, {
    nzColor: [{
      type: Input
    }],
    nzPlacement: [{
      type: Input
    }],
    nzText: [{
      type: Input
    }]
  });
})();
var NzBadgeModule = class _NzBadgeModule {
  static \u0275fac = function NzBadgeModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzBadgeModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzBadgeModule,
    imports: [NzBadgeComponent, NzRibbonComponent],
    exports: [NzBadgeComponent, NzRibbonComponent]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [NzBadgeComponent, NzRibbonComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzBadgeModule, [{
    type: NgModule,
    args: [{
      exports: [NzBadgeComponent, NzRibbonComponent],
      imports: [NzBadgeComponent, NzRibbonComponent]
    }]
  }], null, null);
})();

// src/app/shell/change-password-modal.component.ts
function ChangePasswordModalComponent_ng_container_2_nz_alert_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage());
  }
}
function ChangePasswordModalComponent_ng_container_2_nz_alert_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 16);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzMessage", ctx_r1.successMessage());
  }
}
function ChangePasswordModalComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ChangePasswordModalComponent_ng_container_2_nz_alert_1_Template, 1, 1, "nz-alert", 2)(2, ChangePasswordModalComponent_ng_container_2_nz_alert_2_Template, 1, 1, "nz-alert", 3);
    \u0275\u0275elementStart(3, "div", 4)(4, "label", 5);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "span", 6);
    \u0275\u0275text(8, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "input", 7);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ChangePasswordModalComponent_ng_container_2_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.oldPassword, $event) || (ctx_r1.oldPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 4)(12, "label", 5);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementStart(15, "span", 6);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "input", 8);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ChangePasswordModalComponent_ng_container_2_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newPassword, $event) || (ctx_r1.newPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(19, "div", 9);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 4)(23, "label", 5);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementStart(26, "span", 6);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "input", 10);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ChangePasswordModalComponent_ng_container_2_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.confirmPassword, $event) || (ctx_r1.confirmPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 11)(31, "button", 12);
    \u0275\u0275listener("click", function ChangePasswordModalComponent_ng_container_2_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 13);
    \u0275\u0275listener("click", function ChangePasswordModalComponent_ng_container_2_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275element(35, "i", 14);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorMessage());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.successMessage());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 15, "pwd.oldPassword", "M\u1EADt kh\u1EA9u c\u0169"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(10, 18, "pwd.placeholder.oldPassword", "Nh\u1EADp m\u1EADt kh\u1EA9u c\u0169"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.oldPassword);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 21, "pwd.newPassword", "M\u1EADt kh\u1EA9u m\u1EDBi"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(18, 24, "fcp.newPassword.placeholder", "T\u1ED1i thi\u1EC3u 8 k\xFD t\u1EF1"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newPassword);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 27, "fcp.requirements", "\xCDt nh\u1EA5t 8 k\xFD t\u1EF1, g\u1ED3m: ch\u1EEF hoa, ch\u1EEF th\u01B0\u1EDDng, s\u1ED1 v\xE0 k\xFD t\u1EF1 \u0111\u1EB7c bi\u1EC7t."));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(25, 30, "pwd.confirmPassword", "X\xE1c nh\u1EADn m\u1EADt kh\u1EA9u m\u1EDBi"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(29, 33, "pwd.placeholder.confirmPassword", "Nh\u1EADp l\u1EA1i m\u1EADt kh\u1EA9u m\u1EDBi"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.confirmPassword);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 36, "common.cancel", "H\u1EE7y"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLoading", ctx_r1.loading());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(37, 39, "pwd.update", "C\u1EADp nh\u1EADt m\u1EADt kh\u1EA9u"), " ");
  }
}
var CHANGE_PASSWORD_URL = "/password/api/change-password";
var I18N_KEYS = [
  "topbar.changePassword",
  "pwd.oldPassword",
  "pwd.newPassword",
  "pwd.confirmPassword",
  "pwd.placeholder.oldPassword",
  "pwd.placeholder.confirmPassword",
  "fcp.newPassword.placeholder",
  "fcp.requirements",
  "common.cancel",
  "pwd.update"
];
var ChangePasswordModalComponent = class _ChangePasswordModalComponent {
  constructor(http, i18n) {
    this.http = http;
    this.i18n = i18n;
    this.i18n.loadKeys(I18N_KEYS);
  }
  http;
  i18n;
  visible = signal(
    false,
    ...ngDevMode ? [{ debugName: "visible" }] : (
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
  successMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "successMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  oldPassword = "";
  newPassword = "";
  confirmPassword = "";
  open() {
    this.oldPassword = "";
    this.newPassword = "";
    this.confirmPassword = "";
    this.errorMessage.set(null);
    this.successMessage.set(null);
    this.visible.set(true);
  }
  close() {
    this.visible.set(false);
  }
  async onSubmit() {
    this.errorMessage.set(null);
    this.successMessage.set(null);
    const oldPwd = this.oldPassword.trim();
    const newPwd = this.newPassword.trim();
    const confirmPwd = this.confirmPassword.trim();
    if (!oldPwd || !newPwd || !confirmPwd) {
      this.errorMessage.set(this.i18n.t("topbar.cpwd.js.emptyFields", "Vui l\xF2ng nh\u1EADp \u0111\u1EA7y \u0111\u1EE7 th\xF4ng tin (m\u1EADt kh\u1EA9u hi\u1EC7n t\u1EA1i, m\u1EADt kh\u1EA9u m\u1EDBi v\xE0 x\xE1c nh\u1EADn)."));
      return;
    }
    if (newPwd.length < 8) {
      this.errorMessage.set(this.i18n.t("fcp.js.minLength", "M\u1EADt kh\u1EA9u ph\u1EA3i c\xF3 \xEDt nh\u1EA5t 8 k\xFD t\u1EF1."));
      return;
    }
    if (!/[A-Z]/.test(newPwd)) {
      this.errorMessage.set(this.i18n.t("fcp.js.noUppercase", "M\u1EADt kh\u1EA9u ph\u1EA3i ch\u1EE9a \xEDt nh\u1EA5t 1 ch\u1EEF hoa (A-Z)."));
      return;
    }
    if (!/[a-z]/.test(newPwd)) {
      this.errorMessage.set(this.i18n.t("fcp.js.noLowercase", "M\u1EADt kh\u1EA9u ph\u1EA3i ch\u1EE9a \xEDt nh\u1EA5t 1 ch\u1EEF th\u01B0\u1EDDng (a-z)."));
      return;
    }
    if (!/[0-9]/.test(newPwd)) {
      this.errorMessage.set(this.i18n.t("fcp.js.noDigit", "M\u1EADt kh\u1EA9u ph\u1EA3i ch\u1EE9a \xEDt nh\u1EA5t 1 ch\u1EEF s\u1ED1 (0-9)."));
      return;
    }
    if (!/[^A-Za-z0-9]/.test(newPwd)) {
      this.errorMessage.set(this.i18n.t("fcp.js.noSpecial", "M\u1EADt kh\u1EA9u ph\u1EA3i ch\u1EE9a \xEDt nh\u1EA5t 1 k\xFD t\u1EF1 \u0111\u1EB7c bi\u1EC7t (!@#$%...)."));
      return;
    }
    if (newPwd !== confirmPwd) {
      this.errorMessage.set(this.i18n.t("fcp.js.notMatch", "M\u1EADt kh\u1EA9u x\xE1c nh\u1EADn kh\xF4ng kh\u1EDBp. Vui l\xF2ng nh\u1EADp l\u1EA1i."));
      return;
    }
    this.loading.set(true);
    try {
      const body = new URLSearchParams();
      body.set("oldPassword", oldPwd);
      body.set("newPassword", newPwd);
      body.set("confirmPassword", confirmPwd);
      await firstValueFrom(this.http.post(CHANGE_PASSWORD_URL, body.toString(), {
        withCredentials: true,
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      }));
      this.successMessage.set(this.i18n.t("topbar.cpwd.js.success", "C\u1EADp nh\u1EADt m\u1EADt kh\u1EA9u th\xE0nh c\xF4ng!"));
      this.oldPassword = "";
      this.newPassword = "";
      this.confirmPassword = "";
      setTimeout(() => this.close(), 2e3);
    } catch (err) {
      const body = err?.error;
      let msg = body && body.message || this.i18n.t("fcp.js.error", "C\xF3 l\u1ED7i x\u1EA3y ra.");
      if (body?.code === "OLD_PASSWORD_INCORRECT")
        msg = this.i18n.t("hrm.login.OLD_PASSWORD_INCORRECT", "M\u1EADt kh\u1EA9u c\u0169 kh\xF4ng \u0111\xFAng!");
      if (body?.code === "SAME_AS_OLD")
        msg = this.i18n.t("hrm.login.MATCH_OLD_PASSWORD", "Kh\xF4ng \u0111\u01B0\u1EE3c tr\xF9ng v\u1EDBi m\u1EADt kh\u1EA9u c\u0169!");
      this.errorMessage.set(msg);
    } finally {
      this.loading.set(false);
    }
  }
  static \u0275fac = function ChangePasswordModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChangePasswordModalComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(I18nService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChangePasswordModalComponent, selectors: [["app-change-password-modal"]], decls: 3, vars: 7, consts: [[3, "nzVisibleChange", "nzOnCancel", "nzVisible", "nzTitle", "nzFooter", "nzWidth"], [4, "nzModalContent"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], ["nzType", "success", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [1, "mb-3"], [1, "form-label", "fw-semibold"], [1, "text-danger"], ["nz-input", "", "type", "password", "autocomplete", "current-password", "name", "oldPassword", 3, "ngModelChange", "placeholder", "ngModel"], ["nz-input", "", "type", "password", "autocomplete", "new-password", "name", "newPassword", 3, "ngModelChange", "placeholder", "ngModel"], [1, "form-text"], ["nz-input", "", "type", "password", "autocomplete", "new-password", "name", "confirmPassword", 3, "ngModelChange", "placeholder", "ngModel"], [1, "d-flex", "justify-content-end", "gap-2", "mt-4"], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-button", "", "nzType", "primary", 3, "click", "nzLoading"], [1, "bx", "bx-save", "me-1"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["nzType", "success", 1, "mb-3", 3, "nzMessage"]], template: function ChangePasswordModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nz-modal", 0);
      \u0275\u0275pipe(1, "translate");
      \u0275\u0275twoWayListener("nzVisibleChange", function ChangePasswordModalComponent_Template_nz_modal_nzVisibleChange_0_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.visible, $event) || (ctx.visible = $event);
        return $event;
      });
      \u0275\u0275listener("nzOnCancel", function ChangePasswordModalComponent_Template_nz_modal_nzOnCancel_0_listener() {
        return ctx.close();
      });
      \u0275\u0275template(2, ChangePasswordModalComponent_ng_container_2_Template, 38, 42, "ng-container", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275twoWayProperty("nzVisible", ctx.visible);
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(1, 4, "topbar.changePassword", "C\u1EADp nh\u1EADt m\u1EADt kh\u1EA9u"))("nzFooter", null)("nzWidth", 480);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NzModalModule, NzModalComponent, NzModalContentDirective, NzInputModule, NzInputDirective, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzAlertModule, NzAlertComponent, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChangePasswordModalComponent, [{
    type: Component,
    args: [{ selector: "app-change-password-modal", standalone: true, imports: [CommonModule, FormsModule, NzModalModule, NzInputModule, NzButtonModule, NzAlertModule, TranslatePipe], template: `<nz-modal [(nzVisible)]="visible" [nzTitle]="'topbar.changePassword' | translate:'C\u1EADp nh\u1EADt m\u1EADt kh\u1EA9u'"
          [nzFooter]="null" [nzWidth]="480" (nzOnCancel)="close()">
  <ng-container *nzModalContent>
    <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage()" class="mb-3"></nz-alert>
    <nz-alert *ngIf="successMessage()" nzType="success" [nzMessage]="successMessage()" class="mb-3"></nz-alert>

    <div class="mb-3">
      <label class="form-label fw-semibold">
        {{ 'pwd.oldPassword' | translate:'M\u1EADt kh\u1EA9u c\u0169' }} <span class="text-danger">*</span>
      </label>
      <input nz-input type="password" [placeholder]="'pwd.placeholder.oldPassword' | translate:'Nh\u1EADp m\u1EADt kh\u1EA9u c\u0169'"
             autocomplete="current-password" [(ngModel)]="oldPassword" name="oldPassword">
    </div>
    <div class="mb-3">
      <label class="form-label fw-semibold">
        {{ 'pwd.newPassword' | translate:'M\u1EADt kh\u1EA9u m\u1EDBi' }} <span class="text-danger">*</span>
      </label>
      <input nz-input type="password" [placeholder]="'fcp.newPassword.placeholder' | translate:'T\u1ED1i thi\u1EC3u 8 k\xFD t\u1EF1'"
             autocomplete="new-password" [(ngModel)]="newPassword" name="newPassword">
      <div class="form-text">{{ 'fcp.requirements' | translate:'\xCDt nh\u1EA5t 8 k\xFD t\u1EF1, g\u1ED3m: ch\u1EEF hoa, ch\u1EEF th\u01B0\u1EDDng, s\u1ED1 v\xE0 k\xFD t\u1EF1 \u0111\u1EB7c bi\u1EC7t.' }}</div>
    </div>
    <div class="mb-3">
      <label class="form-label fw-semibold">
        {{ 'pwd.confirmPassword' | translate:'X\xE1c nh\u1EADn m\u1EADt kh\u1EA9u m\u1EDBi' }} <span class="text-danger">*</span>
      </label>
      <input nz-input type="password" [placeholder]="'pwd.placeholder.confirmPassword' | translate:'Nh\u1EADp l\u1EA1i m\u1EADt kh\u1EA9u m\u1EDBi'"
             autocomplete="new-password" [(ngModel)]="confirmPassword" name="confirmPassword">
    </div>

    <div class="d-flex justify-content-end gap-2 mt-4">
      <button nz-button nzType="default" (click)="close()">{{ 'common.cancel' | translate:'H\u1EE7y' }}</button>
      <button nz-button nzType="primary" [nzLoading]="loading()" (click)="onSubmit()">
        <i class="bx bx-save me-1"></i>{{ 'pwd.update' | translate:'C\u1EADp nh\u1EADt m\u1EADt kh\u1EA9u' }}
      </button>
    </div>
  </ng-container>
</nz-modal>
` }]
  }], () => [{ type: HttpClient }, { type: I18nService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChangePasswordModalComponent, { className: "ChangePasswordModalComponent", filePath: "src/app/shell/change-password-modal.component.ts", lineNumber: 47 });
})();

// src/app/shell/external-tab.component.ts
function ExternalTabComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "span", 3);
    \u0275\u0275text(2, "\u0110ang t\u1EA3i... ");
    \u0275\u0275elementEnd();
  }
}
function ExternalTabComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("L\u1ED7i t\u1EA3i n\u1ED9i dung: ", ctx_r0.error());
  }
}
var counter = 0;
var ExternalTabComponent = class _ExternalTabComponent {
  constructor(hostEl) {
    this.hostEl = hostEl;
  }
  hostEl;
  url;
  reloadToken = 0;
  loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  error = signal(
    null,
    ...ngDevMode ? [{ debugName: "error" }] : (
      /* istanbul ignore next */
      []
    )
  );
  hostId = "ext-tab-" + counter++;
  initialized = false;
  ngOnInit() {
    this.hostEl.nativeElement.id = this.hostId;
    this.hostEl.nativeElement.classList.add("external-tab-host");
    this.initialized = true;
    this.load();
  }
  ngOnChanges(changes) {
    if (this.initialized && changes["reloadToken"] && !changes["reloadToken"].firstChange) {
      this.load();
    }
  }
  async load() {
    this.loading.set(true);
    this.error.set(null);
    this.cleanupPreviousHandlers();
    try {
      const res = await fetch(this.url, {
        method: "GET",
        cache: "no-store",
        credentials: "same-origin",
        headers: { "X-Requested-With": "XMLHttpRequest", Accept: "text/html" }
      });
      if (!res.ok)
        throw new Error("HTTP " + res.status);
      const html = await res.text();
      const doc = new DOMParser().parseFromString(html, "text/html");
      const content = doc.querySelector("#default-content") || doc.querySelector(".container-fluid") || doc.body;
      this.loading.set(false);
      this.hostEl.nativeElement.innerHTML = content.innerHTML;
      this.runFragmentScripts(doc);
    } catch (e) {
      this.loading.set(false);
      this.error.set(e?.message || "Kh\xF4ng x\xE1c \u0111\u1ECBnh");
    }
  }
  /** Gỡ handler jQuery cũ trước khi nạp lại nội dung mới - tránh cộng dồn handler qua mỗi lần load lại (giống innerTab.js). */
  cleanupPreviousHandlers() {
    if (typeof jQuery !== "undefined") {
      jQuery(this.hostEl.nativeElement).find("*").off();
      jQuery(this.hostEl.nativeElement).off();
    }
  }
  runFragmentScripts(doc) {
    const template = doc.querySelector("#fragmentScripts");
    if (!template)
      return;
    const styles = Array.from(template.content.querySelectorAll("style"));
    styles.forEach((style) => {
      const el = document.createElement("style");
      el.textContent = style.textContent;
      this.hostEl.nativeElement.appendChild(el);
    });
    const scripts = Array.from(template.content.querySelectorAll("script"));
    if (scripts.length === 0)
      return;
    const setupScript = document.createElement("script");
    setupScript.textContent = "window._currentTabUrl = " + JSON.stringify(this.url) + "; window._currentTabId = " + JSON.stringify(this.hostId) + ";";
    this.hostEl.nativeElement.appendChild(setupScript);
    scripts.forEach((script) => {
      const el = document.createElement("script");
      Array.from(script.attributes).forEach((attr) => el.setAttribute(attr.name, attr.value));
      el.textContent = script.textContent;
      this.hostEl.nativeElement.appendChild(el);
    });
  }
  static \u0275fac = function ExternalTabComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExternalTabComponent)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExternalTabComponent, selectors: [["app-external-tab"]], inputs: { url: "url", reloadToken: "reloadToken" }, features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 2, consts: [["class", "text-center text-muted py-5", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "text-center", "text-muted", "py-5"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "alert", "alert-danger"]], template: function ExternalTabComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ExternalTabComponent_div_0_Template, 3, 0, "div", 0)(1, ExternalTabComponent_div_1_Template, 2, 1, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error());
    }
  }, dependencies: [CommonModule, NgIf], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExternalTabComponent, [{
    type: Component,
    args: [{
      selector: "app-external-tab",
      standalone: true,
      imports: [CommonModule],
      template: `
    <div *ngIf="loading()" class="text-center text-muted py-5">
      <span class="spinner-border spinner-border-sm me-2"></span>\u0110ang t\u1EA3i...
    </div>
    <div *ngIf="error()" class="alert alert-danger">L\u1ED7i t\u1EA3i n\u1ED9i dung: {{ error() }}</div>
  `
    }]
  }], () => [{ type: ElementRef }], { url: [{
    type: Input,
    args: [{ required: true }]
  }], reloadToken: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExternalTabComponent, { className: "ExternalTabComponent", filePath: "src/app/shell/external-tab.component.ts", lineNumber: 38 });
})();

// src/app/shell/force-password-change-modal.component.ts
function ForcePasswordChangeModalComponent_ng_container_1_nz_alert_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 16);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage());
  }
}
function ForcePasswordChangeModalComponent_ng_container_1_nz_alert_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 17);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzMessage", ctx_r1.successMessage());
  }
}
function ForcePasswordChangeModalComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275text(2, " T\xE0i kho\u1EA3n c\u1EE7a b\u1EA1n \u0111ang s\u1EED d\u1EE5ng m\u1EADt kh\u1EA9u ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "ch\u01B0a \u0111\u01B0\u1EE3c m\xE3 h\xF3a");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " t\u1EEB h\u1EC7 th\u1ED1ng c\u0169. V\xEC l\xFD do b\u1EA3o m\u1EADt, b\u1EA1n ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7, "b\u1EAFt bu\u1ED9c ph\u1EA3i \u0111\u1ED5i m\u1EADt kh\u1EA9u");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " tr\u01B0\u1EDBc khi ti\u1EBFp t\u1EE5c s\u1EED d\u1EE5ng h\u1EC7 th\u1ED1ng. ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ForcePasswordChangeModalComponent_ng_container_1_nz_alert_9_Template, 1, 1, "nz-alert", 3)(10, ForcePasswordChangeModalComponent_ng_container_1_nz_alert_10_Template, 1, 1, "nz-alert", 4);
    \u0275\u0275elementStart(11, "div", 5)(12, "label", 6);
    \u0275\u0275text(13, "M\u1EADt kh\u1EA9u m\u1EDBi ");
    \u0275\u0275elementStart(14, "span", 7);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function ForcePasswordChangeModalComponent_ng_container_1_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newPassword, $event) || (ctx_r1.newPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(17, "div", 9);
    \u0275\u0275text(18, "\xCDt nh\u1EA5t 8 k\xFD t\u1EF1, g\u1ED3m: ch\u1EEF hoa, ch\u1EEF th\u01B0\u1EDDng, s\u1ED1 v\xE0 k\xFD t\u1EF1 \u0111\u1EB7c bi\u1EC7t.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 5)(20, "label", 6);
    \u0275\u0275text(21, "X\xE1c nh\u1EADn m\u1EADt kh\u1EA9u m\u1EDBi ");
    \u0275\u0275elementStart(22, "span", 7);
    \u0275\u0275text(23, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function ForcePasswordChangeModalComponent_ng_container_1_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.confirmPassword, $event) || (ctx_r1.confirmPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 11)(26, "a", 12);
    \u0275\u0275element(27, "i", 13);
    \u0275\u0275text(28, "\u0110\u0103ng xu\u1EA5t ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 14);
    \u0275\u0275listener("click", function ForcePasswordChangeModalComponent_ng_container_1_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275element(30, "i", 15);
    \u0275\u0275text(31, "\u0110\u1ED5i m\u1EADt kh\u1EA9u ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.errorMessage());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.successMessage());
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newPassword);
    \u0275\u0275control();
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.confirmPassword);
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275property("nzLoading", ctx_r1.loading());
  }
}
var ForcePasswordChangeModalComponent = class _ForcePasswordChangeModalComponent {
  constructor(auth) {
    this.auth = auth;
  }
  auth;
  newPassword = "";
  confirmPassword = "";
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
  successMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "successMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  async onSubmit() {
    this.errorMessage.set(null);
    this.successMessage.set(null);
    const pwd = this.newPassword.trim();
    const confirm = this.confirmPassword.trim();
    if (!pwd || !confirm) {
      this.errorMessage.set("Vui l\xF2ng nh\u1EADp \u0111\u1EE7 m\u1EADt kh\u1EA9u m\u1EDBi v\xE0 x\xE1c nh\u1EADn.");
      return;
    }
    if (pwd.length < 8) {
      this.errorMessage.set("M\u1EADt kh\u1EA9u ph\u1EA3i c\xF3 \xEDt nh\u1EA5t 8 k\xFD t\u1EF1.");
      return;
    }
    if (!/[A-Z]/.test(pwd)) {
      this.errorMessage.set("M\u1EADt kh\u1EA9u ph\u1EA3i ch\u1EE9a \xEDt nh\u1EA5t 1 ch\u1EEF hoa (A-Z).");
      return;
    }
    if (!/[a-z]/.test(pwd)) {
      this.errorMessage.set("M\u1EADt kh\u1EA9u ph\u1EA3i ch\u1EE9a \xEDt nh\u1EA5t 1 ch\u1EEF th\u01B0\u1EDDng (a-z).");
      return;
    }
    if (!/[0-9]/.test(pwd)) {
      this.errorMessage.set("M\u1EADt kh\u1EA9u ph\u1EA3i ch\u1EE9a \xEDt nh\u1EA5t 1 ch\u1EEF s\u1ED1 (0-9).");
      return;
    }
    if (!/[^A-Za-z0-9]/.test(pwd)) {
      this.errorMessage.set("M\u1EADt kh\u1EA9u ph\u1EA3i ch\u1EE9a \xEDt nh\u1EA5t 1 k\xFD t\u1EF1 \u0111\u1EB7c bi\u1EC7t (!@#$%...).");
      return;
    }
    if (pwd !== confirm) {
      this.errorMessage.set("M\u1EADt kh\u1EA9u x\xE1c nh\u1EADn kh\xF4ng kh\u1EDBp. Vui l\xF2ng nh\u1EADp l\u1EA1i.");
      return;
    }
    this.loading.set(true);
    try {
      const res = await this.auth.changeFirstPassword(pwd, confirm);
      if (res.success) {
        this.successMessage.set("\u0110\u1ED5i m\u1EADt kh\u1EA9u th\xE0nh c\xF4ng! Trang s\u1EBD t\u1EF1 \u0111\u1ED9ng t\u1EA3i l\u1EA1i...");
        setTimeout(() => window.location.reload(), 1500);
      } else {
        this.errorMessage.set(res.message || "C\xF3 l\u1ED7i x\u1EA3y ra.");
      }
    } catch (err) {
      this.errorMessage.set(err?.error?.message || "L\u1ED7i h\u1EC7 th\u1ED1ng.");
    } finally {
      this.loading.set(false);
    }
  }
  static \u0275fac = function ForcePasswordChangeModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForcePasswordChangeModalComponent)(\u0275\u0275directiveInject(AuthService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForcePasswordChangeModalComponent, selectors: [["app-force-password-change-modal"]], decls: 2, vars: 6, consts: [["nzTitle", "Y\xEAu c\u1EA7u \u0111\u1ED5i m\u1EADt kh\u1EA9u", 3, "nzVisible", "nzClosable", "nzMaskClosable", "nzKeyboard", "nzFooter", "nzWidth"], [4, "nzModalContent"], [1, "alert-warning-box", "mb-3"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], ["nzType", "success", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [1, "mb-3"], [1, "form-label", "fw-semibold"], [1, "text-danger"], ["nz-input", "", "type", "password", "placeholder", "T\u1ED1i thi\u1EC3u 8 k\xFD t\u1EF1", "autocomplete", "new-password", "name", "newPassword", 3, "ngModelChange", "ngModel"], [1, "form-text"], ["nz-input", "", "type", "password", "placeholder", "Nh\u1EADp l\u1EA1i m\u1EADt kh\u1EA9u m\u1EDBi", "autocomplete", "new-password", "name", "confirmPassword", 3, "ngModelChange", "ngModel"], [1, "d-flex", "justify-content-between", "mt-4"], ["href", "/logout", "nz-button", "", "nzType", "default"], [1, "bx", "bx-log-out", "me-1"], ["nz-button", "", "nzType", "primary", 3, "click", "nzLoading"], [1, "bx", "bx-save", "me-1"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["nzType", "success", 1, "mb-3", 3, "nzMessage"]], template: function ForcePasswordChangeModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nz-modal", 0);
      \u0275\u0275template(1, ForcePasswordChangeModalComponent_ng_container_1_Template, 32, 5, "ng-container", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("nzVisible", true)("nzClosable", false)("nzMaskClosable", false)("nzKeyboard", false)("nzFooter", null)("nzWidth", 480);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NzModalModule, NzModalComponent, NzModalContentDirective, NzInputModule, NzInputDirective, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzAlertModule, NzAlertComponent], styles: ["\n.alert-warning-box[_ngcontent-%COMP%] {\n  background: #fff7e6;\n  border: 1px solid #ffe7ba;\n  border-radius: 6px;\n  padding: 12px 16px;\n  color: #874d00;\n}\n/*# sourceMappingURL=force-password-change-modal.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForcePasswordChangeModalComponent, [{
    type: Component,
    args: [{ selector: "app-force-password-change-modal", standalone: true, imports: [CommonModule, FormsModule, NzModalModule, NzInputModule, NzButtonModule, NzAlertModule], template: '<nz-modal [nzVisible]="true" nzTitle="Y\xEAu c\u1EA7u \u0111\u1ED5i m\u1EADt kh\u1EA9u" [nzClosable]="false" [nzMaskClosable]="false"\n          [nzKeyboard]="false" [nzFooter]="null" [nzWidth]="480">\n  <ng-container *nzModalContent>\n    <div class="alert-warning-box mb-3">\n      T\xE0i kho\u1EA3n c\u1EE7a b\u1EA1n \u0111ang s\u1EED d\u1EE5ng m\u1EADt kh\u1EA9u <strong>ch\u01B0a \u0111\u01B0\u1EE3c m\xE3 h\xF3a</strong> t\u1EEB h\u1EC7 th\u1ED1ng c\u0169.\n      V\xEC l\xFD do b\u1EA3o m\u1EADt, b\u1EA1n <strong>b\u1EAFt bu\u1ED9c ph\u1EA3i \u0111\u1ED5i m\u1EADt kh\u1EA9u</strong> tr\u01B0\u1EDBc khi ti\u1EBFp t\u1EE5c s\u1EED d\u1EE5ng h\u1EC7 th\u1ED1ng.\n    </div>\n\n    <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage()" class="mb-3"></nz-alert>\n    <nz-alert *ngIf="successMessage()" nzType="success" [nzMessage]="successMessage()" class="mb-3"></nz-alert>\n\n    <div class="mb-3">\n      <label class="form-label fw-semibold">M\u1EADt kh\u1EA9u m\u1EDBi <span class="text-danger">*</span></label>\n      <input nz-input type="password" placeholder="T\u1ED1i thi\u1EC3u 8 k\xFD t\u1EF1" autocomplete="new-password"\n             [(ngModel)]="newPassword" name="newPassword">\n      <div class="form-text">\xCDt nh\u1EA5t 8 k\xFD t\u1EF1, g\u1ED3m: ch\u1EEF hoa, ch\u1EEF th\u01B0\u1EDDng, s\u1ED1 v\xE0 k\xFD t\u1EF1 \u0111\u1EB7c bi\u1EC7t.</div>\n    </div>\n    <div class="mb-3">\n      <label class="form-label fw-semibold">X\xE1c nh\u1EADn m\u1EADt kh\u1EA9u m\u1EDBi <span class="text-danger">*</span></label>\n      <input nz-input type="password" placeholder="Nh\u1EADp l\u1EA1i m\u1EADt kh\u1EA9u m\u1EDBi" autocomplete="new-password"\n             [(ngModel)]="confirmPassword" name="confirmPassword">\n    </div>\n\n    <div class="d-flex justify-content-between mt-4">\n      <a href="/logout" nz-button nzType="default">\n        <i class="bx bx-log-out me-1"></i>\u0110\u0103ng xu\u1EA5t\n      </a>\n      <button nz-button nzType="primary" [nzLoading]="loading()" (click)="onSubmit()">\n        <i class="bx bx-save me-1"></i>\u0110\u1ED5i m\u1EADt kh\u1EA9u\n      </button>\n    </div>\n  </ng-container>\n</nz-modal>\n', styles: ["/* src/app/shell/force-password-change-modal.component.css */\n.alert-warning-box {\n  background: #fff7e6;\n  border: 1px solid #ffe7ba;\n  border-radius: 6px;\n  padding: 12px 16px;\n  color: #874d00;\n}\n/*# sourceMappingURL=force-password-change-modal.component.css.map */\n"] }]
  }], () => [{ type: AuthService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForcePasswordChangeModalComponent, { className: "ForcePasswordChangeModalComponent", filePath: "src/app/shell/force-password-change-modal.component.ts", lineNumber: 23 });
})();

// src/app/shell/lock-screen-overlay.component.ts
var _c03 = ["pwdInput"];
function LockScreenOverlayComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "iconify-icon", 18);
    \u0275\u0275listener("click", function LockScreenOverlayComponent_ng_template_14_Template_iconify_icon_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.togglePasswordVisibility());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("icon", ctx_r2.showPassword ? "solar:eye-closed-bold" : "solar:eye-bold");
  }
}
function LockScreenOverlayComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.errorMessage());
  }
}
function LockScreenOverlayComponent_iconify_icon_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iconify-icon", 20);
  }
}
var LockScreenOverlayComponent = class _LockScreenOverlayComponent {
  constructor(lockScreen) {
    this.lockScreen = lockScreen;
  }
  lockScreen;
  pwdInput;
  user = null;
  password = "";
  showPassword = false;
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
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  async onUnlock() {
    const pwd = this.password.trim();
    if (!pwd) {
      this.errorMessage.set("M\u1EADt kh\u1EA9u kh\xF4ng \u0111\xFAng, vui l\xF2ng th\u1EED l\u1EA1i");
      this.pwdInput?.nativeElement.focus();
      return;
    }
    this.loading.set(true);
    this.errorMessage.set(null);
    try {
      const res = await this.lockScreen.unlock(pwd);
      if (res.success) {
        this.password = "";
      } else {
        this.errorMessage.set("M\u1EADt kh\u1EA9u kh\xF4ng \u0111\xFAng, vui l\xF2ng th\u1EED l\u1EA1i");
        this.password = "";
        this.pwdInput?.nativeElement.focus();
      }
    } finally {
      this.loading.set(false);
    }
  }
  onKeydown(event) {
    if (event.key === "Enter")
      this.onUnlock();
  }
  static \u0275fac = function LockScreenOverlayComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LockScreenOverlayComponent)(\u0275\u0275directiveInject(LockScreenService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockScreenOverlayComponent, selectors: [["app-lock-screen-overlay"]], viewQuery: function LockScreenOverlayComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c03, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.pwdInput = _t.first);
    }
  }, inputs: { user: "user" }, decls: 24, vars: 9, consts: [["pwdInput", ""], ["pwdSuffix", ""], [1, "lock-screen-overlay", "d-flex", "align-items-center", "justify-content-center"], [1, "text-center", "p-4", 2, "max-width", "420px", "width", "90%"], [1, "mb-3"], ["icon", "solar:lock-keyhole-bold-duotone", 2, "font-size", "56px", "color", "rgba(255,255,255,0.5)"], ["alt", "avatar", 1, "rounded-circle", "lock-screen-avatar", 3, "src"], [1, "text-white", "mb-1"], [1, "mb-4", "lock-screen-subtitle"], [1, "mb-2"], ["nzSize", "large", 1, "lock-screen-input-group", 3, "nzSuffix"], ["nz-input", "", "placeholder", "Nh\u1EADp m\u1EADt kh\u1EA9u", "autocomplete", "current-password", "name", "lockScreenPassword", 1, "text-center", 3, "ngModelChange", "keydown", "type", "ngModel"], ["class", "text-danger mt-2 small", 4, "ngIf"], [1, "d-flex", "gap-2", "justify-content-center", "mt-3"], ["nz-button", "", "nzType", "primary", "nzSize", "large", 3, "click", "nzLoading"], ["icon", "solar:lock-keyhole-unlocked-bold-duotone", "class", "me-1", 4, "ngIf"], ["href", "/logout", "nz-button", "", "nzType", "default", "nzSize", "large", "nzGhost", ""], ["icon", "solar:logout-2-bold-duotone", 1, "me-1"], [2, "cursor", "pointer", 3, "click"], [1, "text-danger", "mt-2", "small"], ["icon", "solar:lock-keyhole-unlocked-bold-duotone", 1, "me-1"]], template: function LockScreenOverlayComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
      \u0275\u0275element(3, "iconify-icon", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4);
      \u0275\u0275element(5, "img", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h5", 7);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 8);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 9)(11, "nz-input-group", 10)(12, "input", 11, 0);
      \u0275\u0275twoWayListener("ngModelChange", function LockScreenOverlayComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("keydown", function LockScreenOverlayComponent_Template_input_keydown_12_listener($event) {
        return ctx.onKeydown($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275template(14, LockScreenOverlayComponent_ng_template_14_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(16, LockScreenOverlayComponent_div_16_Template, 2, 1, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 13)(18, "button", 14);
      \u0275\u0275listener("click", function LockScreenOverlayComponent_Template_button_click_18_listener() {
        return ctx.onUnlock();
      });
      \u0275\u0275template(19, LockScreenOverlayComponent_iconify_icon_19_Template, 1, 0, "iconify-icon", 15);
      \u0275\u0275text(20, " M\u1EDF kh\xF3a ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "a", 16);
      \u0275\u0275element(22, "iconify-icon", 17);
      \u0275\u0275text(23, " \u0110\u0103ng xu\u1EA5t ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const pwdSuffix_r4 = \u0275\u0275reference(15);
      \u0275\u0275advance(5);
      \u0275\u0275property("src", ctx.user?.photoUrl || "/assets/images/users/dummy-avatar.jpg", \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.user?.employeeName || ctx.user?.username || "HR System");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.lockScreen.autoLocked() ? "M\xE0n h\xECnh t\u1EF1 \u0111\u1ED9ng kh\xF3a do kh\xF4ng c\xF3 thao t\xE1c" : "Nh\u1EADp m\u1EADt kh\u1EA9u \u0111\u1EC3 ti\u1EBFp t\u1EE5c", " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzSuffix", pwdSuffix_r4);
      \u0275\u0275advance();
      \u0275\u0275property("type", ctx.showPassword ? "text" : "password");
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading());
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NzInputModule, NzInputDirective, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective], styles: ["\n.lock-screen-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 99999;\n  background:\n    linear-gradient(\n      135deg,\n      #1a1a2e 0%,\n      #16213e 50%,\n      #0f3460 100%);\n}\n.lock-screen-avatar[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  object-fit: cover;\n  border: 3px solid rgba(255, 255, 255, 0.4);\n}\n.lock-screen-subtitle[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n}\n.lock-screen-input-group[_ngcontent-%COMP%]     input, \n.lock-screen-input-group[_ngcontent-%COMP%]     .ant-input-group-addon, \n.lock-screen-input-group[_ngcontent-%COMP%]     .ant-input-affix-wrapper {\n  background: rgba(255, 255, 255, 0.1) !important;\n  border-color: rgba(255, 255, 255, 0.25) !important;\n  color: white !important;\n}\n.lock-screen-input-group[_ngcontent-%COMP%]     .ant-input-affix-wrapper {\n  padding: 0 11px;\n}\n.lock-screen-input-group[_ngcontent-%COMP%]     iconify-icon {\n  color: rgba(255, 255, 255, 0.7);\n}\n/*# sourceMappingURL=lock-screen-overlay.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockScreenOverlayComponent, [{
    type: Component,
    args: [{ selector: "app-lock-screen-overlay", standalone: true, imports: [CommonModule, FormsModule, NzInputModule, NzButtonModule], schemas: [CUSTOM_ELEMENTS_SCHEMA], template: `<div class="lock-screen-overlay d-flex align-items-center justify-content-center">
  <div class="text-center p-4" style="max-width:420px; width:90%;">
    <div class="mb-3">
      <iconify-icon icon="solar:lock-keyhole-bold-duotone" style="font-size:56px; color:rgba(255,255,255,0.5);"></iconify-icon>
    </div>

    <div class="mb-3">
      <img [src]="user?.photoUrl || '/assets/images/users/dummy-avatar.jpg'" class="rounded-circle lock-screen-avatar" alt="avatar">
    </div>

    <h5 class="text-white mb-1">{{ user?.employeeName || user?.username || 'HR System' }}</h5>

    <p class="mb-4 lock-screen-subtitle">
      {{ lockScreen.autoLocked() ? 'M\xE0n h\xECnh t\u1EF1 \u0111\u1ED9ng kh\xF3a do kh\xF4ng c\xF3 thao t\xE1c' : 'Nh\u1EADp m\u1EADt kh\u1EA9u \u0111\u1EC3 ti\u1EBFp t\u1EE5c' }}
    </p>

    <div class="mb-2">
      <nz-input-group [nzSuffix]="pwdSuffix" nzSize="large" class="lock-screen-input-group">
        <input #pwdInput nz-input [type]="showPassword ? 'text' : 'password'" class="text-center"
               placeholder="Nh\u1EADp m\u1EADt kh\u1EA9u" autocomplete="current-password"
               [(ngModel)]="password" name="lockScreenPassword" (keydown)="onKeydown($event)">
      </nz-input-group>
      <ng-template #pwdSuffix>
        <iconify-icon [attr.icon]="showPassword ? 'solar:eye-closed-bold' : 'solar:eye-bold'"
                      (click)="togglePasswordVisibility()" style="cursor:pointer;"></iconify-icon>
      </ng-template>
      <div *ngIf="errorMessage()" class="text-danger mt-2 small">{{ errorMessage() }}</div>
    </div>

    <div class="d-flex gap-2 justify-content-center mt-3">
      <button nz-button nzType="primary" nzSize="large" [nzLoading]="loading()" (click)="onUnlock()">
        <iconify-icon *ngIf="!loading()" icon="solar:lock-keyhole-unlocked-bold-duotone" class="me-1"></iconify-icon>
        M\u1EDF kh\xF3a
      </button>
      <a href="/logout" nz-button nzType="default" nzSize="large" nzGhost>
        <iconify-icon icon="solar:logout-2-bold-duotone" class="me-1"></iconify-icon>
        \u0110\u0103ng xu\u1EA5t
      </a>
    </div>
  </div>
</div>
`, styles: ["/* src/app/shell/lock-screen-overlay.component.css */\n.lock-screen-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 99999;\n  background:\n    linear-gradient(\n      135deg,\n      #1a1a2e 0%,\n      #16213e 50%,\n      #0f3460 100%);\n}\n.lock-screen-avatar {\n  width: 80px;\n  height: 80px;\n  object-fit: cover;\n  border: 3px solid rgba(255, 255, 255, 0.4);\n}\n.lock-screen-subtitle {\n  color: rgba(255, 255, 255, 0.6);\n}\n.lock-screen-input-group ::ng-deep input,\n.lock-screen-input-group ::ng-deep .ant-input-group-addon,\n.lock-screen-input-group ::ng-deep .ant-input-affix-wrapper {\n  background: rgba(255, 255, 255, 0.1) !important;\n  border-color: rgba(255, 255, 255, 0.25) !important;\n  color: white !important;\n}\n.lock-screen-input-group ::ng-deep .ant-input-affix-wrapper {\n  padding: 0 11px;\n}\n.lock-screen-input-group ::ng-deep iconify-icon {\n  color: rgba(255, 255, 255, 0.7);\n}\n/*# sourceMappingURL=lock-screen-overlay.component.css.map */\n"] }]
  }], () => [{ type: LockScreenService }], { pwdInput: [{
    type: ViewChild,
    args: ["pwdInput"]
  }], user: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockScreenOverlayComponent, { className: "LockScreenOverlayComponent", filePath: "src/app/shell/lock-screen-overlay.component.ts", lineNumber: 18 });
})();

// src/app/shell/notification.service.ts
var ESS_PENDING_COUNTS_URL = "/sy/syAffirm/api/pending-counts";
var HRM_PENDING_COUNTS_URL = "/sy/syAffirm/api/hrm-pending-counts";
var POLL_INTERVAL_MS = 3 * 60 * 1e3;
var NotificationService = class _NotificationService {
  constructor(http) {
    this.http = http;
  }
  http;
  counts = signal(
    { total: 0, leave: 0, ot: 0, anomaly: 0, personalChange: 0 },
    ...ngDevMode ? [{ debugName: "counts" }] : (
      /* istanbul ignore next */
      []
    )
  );
  mode = "ess";
  pollHandle = null;
  async refresh() {
    const url = this.mode === "hrm" ? HRM_PENDING_COUNTS_URL : ESS_PENDING_COUNTS_URL;
    try {
      const data = await firstValueFrom(this.http.get(url, { withCredentials: true }));
      this.counts.set({
        total: data["total"] ?? 0,
        leave: data["leave"] ?? 0,
        ot: data["ot"] ?? 0,
        // API HRM trả field "anomalous", API ESS trả field "anomaly" - tên khác nhau ở backend
        // (xem SyAffirmEmailServiceImpl.getPendingApprovalCounts/getHrmPendingCounts).
        anomaly: (this.mode === "hrm" ? data["anomalous"] : data["anomaly"]) ?? 0,
        personalChange: data["personalChange"] ?? 0
      });
    } catch {
    }
  }
  /** Bắt đầu (hoặc đổi) chế độ polling - gọi lại API đúng chế độ ngay lập tức và reset chu kỳ polling. */
  startPolling(mode) {
    this.mode = mode;
    this.refresh();
    this.stopPolling();
    this.pollHandle = setInterval(() => this.refresh(), POLL_INTERVAL_MS);
  }
  stopPolling() {
    if (this.pollHandle) {
      clearInterval(this.pollHandle);
      this.pollHandle = null;
    }
  }
  static \u0275fac = function NotificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/shell/notifications-dropdown.component.ts
function NotificationsDropdownComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 14);
    \u0275\u0275listener("click", function NotificationsDropdownComponent_ng_container_12_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPersonalChangeApproval());
    });
    \u0275\u0275elementStart(2, "div", 15)(3, "span", 16);
    \u0275\u0275element(4, "iconify-icon", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "nz-badge", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 14);
    \u0275\u0275listener("click", function NotificationsDropdownComponent_ng_container_12_Template_a_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openLeaveConfirm());
    });
    \u0275\u0275elementStart(10, "div", 15)(11, "span", 16);
    \u0275\u0275element(12, "iconify-icon", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "nz-badge", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "a", 14);
    \u0275\u0275listener("click", function NotificationsDropdownComponent_ng_container_12_Template_a_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAttendanceExConfirm());
    });
    \u0275\u0275elementStart(18, "div", 15)(19, "span", 16);
    \u0275\u0275element(20, "iconify-icon", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(24, "nz-badge", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 6, "topbar.notification.personalChange", "Chi ti\u1EBFt thay \u0111\u1ED5i th\xF4ng tin"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzCount", ctx_r1.notifications.counts().personalChange);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 9, "topbar.notification.leave", "Ngh\u1EC9 ph\xE9p"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzCount", ctx_r1.notifications.counts().leave);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 12, "topbar.notification.anomaly", "Ngh\u1EC9 b\u1EA5t th\u01B0\u1EDDng"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzCount", ctx_r1.notifications.counts().anomaly);
  }
}
function NotificationsDropdownComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 14);
    \u0275\u0275listener("click", function NotificationsDropdownComponent_ng_template_13_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openApprovalEmail("21"));
    });
    \u0275\u0275elementStart(1, "div", 15)(2, "span", 16);
    \u0275\u0275element(3, "iconify-icon", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "nz-badge", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 14);
    \u0275\u0275listener("click", function NotificationsDropdownComponent_ng_template_13_Template_a_click_8_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openApprovalEmail("31"));
    });
    \u0275\u0275elementStart(9, "div", 15)(10, "span", 16);
    \u0275\u0275element(11, "iconify-icon", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(15, "nz-badge", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a", 14);
    \u0275\u0275listener("click", function NotificationsDropdownComponent_ng_template_13_Template_a_click_16_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openApprovalEmail("218197"));
    });
    \u0275\u0275elementStart(17, "div", 15)(18, "span", 16);
    \u0275\u0275element(19, "iconify-icon", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(23, "nz-badge", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 6, "topbar.notification.leave", "Ngh\u1EC9 ph\xE9p"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzCount", ctx_r1.notifications.counts().leave);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 9, "topbar.notification.ot", "T\u0103ng ca"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzCount", ctx_r1.notifications.counts().ot);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 12, "topbar.notification.anomaly", "Ngh\u1EC9 b\u1EA5t th\u01B0\u1EDDng"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzCount", ctx_r1.notifications.counts().anomaly);
  }
}
function NotificationsDropdownComponent_a_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 22);
    \u0275\u0275listener("click", function NotificationsDropdownComponent_a_16_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openLeaveConfirm());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "i", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "topbar.viewAllNotification", "Xem t\u1EA5t c\u1EA3 th\xF4ng b\xE1o"), " ");
  }
}
function NotificationsDropdownComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 22);
    \u0275\u0275listener("click", function NotificationsDropdownComponent_ng_template_17_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openApprovalEmail());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275element(3, "i", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "topbar.viewAllNotification", "Xem t\u1EA5t c\u1EA3 th\xF4ng b\xE1o"), " ");
  }
}
var I18N_KEYS2 = [
  "topbar.notifications",
  "topbar.notification.leave",
  "topbar.notification.ot",
  "topbar.notification.anomaly",
  "topbar.notification.personalChange",
  "topbar.viewAllNotification"
];
var NotificationsDropdownComponent = class _NotificationsDropdownComponent {
  constructor(notifications, tabs, i18n) {
    this.notifications = notifications;
    this.tabs = tabs;
    this.i18n = i18n;
    effect(() => {
      this.notifications.startPolling(this.mode());
    });
  }
  notifications;
  tabs;
  i18n;
  mode = input(
    "ess",
    ...ngDevMode ? [{ debugName: "mode" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS2);
  }
  ngOnDestroy() {
    this.notifications.stopPolling();
  }
  /** applyTypeCode: 21=Nghỉ phép, 31=Tăng ca, 218197=Nghỉ bất thường - không truyền thì mở trang "xem tất cả". */
  openApprovalEmail(applyTypeCode) {
    const path = applyTypeCode ? `/view-approval-email?applyTypeCode=${applyTypeCode}` : "/view-approval-email";
    const titleByCode = {
      "21": this.i18n.t("topbar.notification.leave", "Ngh\u1EC9 ph\xE9p"),
      "31": this.i18n.t("topbar.notification.ot", "T\u0103ng ca"),
      "218197": this.i18n.t("topbar.notification.anomaly", "Ngh\u1EC9 b\u1EA5t th\u01B0\u1EDDng")
    };
    const title = applyTypeCode ? titleByCode[applyTypeCode] ?? "Th\xF4ng b\xE1o" : this.i18n.t("topbar.viewAllNotification", "Xem t\u1EA5t c\u1EA3 th\xF4ng b\xE1o");
    this.tabs.openTab(path, title, "route");
  }
  openLeaveConfirm() {
    this.tabs.openTab("/leave-confirm", this.i18n.t("topbar.notification.leave", "Ngh\u1EC9 ph\xE9p"), "route");
  }
  openAttendanceExConfirm() {
    this.tabs.openTab("/attendance-ex-confirm", this.i18n.t("topbar.notification.anomaly", "Ngh\u1EC9 b\u1EA5t th\u01B0\u1EDDng"), "route");
  }
  openPersonalChangeApproval() {
    this.tabs.openTab("/hrm-approve-apply-info", this.i18n.t("topbar.notification.personalChange", "Chi ti\u1EBFt thay \u0111\u1ED5i th\xF4ng tin"), "route");
  }
  static \u0275fac = function NotificationsDropdownComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationsDropdownComponent)(\u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(TabService), \u0275\u0275directiveInject(I18nService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationsDropdownComponent, selectors: [["app-notifications-dropdown"]], inputs: { mode: [1, "mode"] }, decls: 19, vars: 11, consts: [["notifMenu", "nzDropdownMenu"], ["essNotifItems", ""], ["essViewAll", ""], ["nz-dropdown", "", "nzTrigger", "click", 1, "topbar-item", 3, "nzDropdownMenu"], [3, "nzCount", "nzOverflowCount"], [1, "topbar-button"], ["icon", "solar:bell-bing-bold-duotone", 1, "fs-24", "align-middle"], [1, "notif-panel"], [1, "notif-header"], [1, "m-0", "fs-16", "fw-semibold"], [1, "notif-list"], [4, "ngIf", "ngIfElse"], [1, "text-center", "py-3"], ["href", "javascript:void(0)", "nz-button", "", "nzType", "primary", "nzSize", "small", 3, "click", 4, "ngIf", "ngIfElse"], ["href", "javascript:void(0)", 1, "notif-item", 3, "click"], [1, "d-flex", "align-items-center", "gap-2"], [1, "notif-icon-wrap"], ["icon", "solar:user-id-bold-duotone", 1, "fs-18", "text-success"], ["nzStandalone", "", 3, "nzCount"], ["icon", "solar:calendar-mark-bold-duotone", 1, "fs-18", "text-primary"], ["icon", "solar:notification-unread-bold-duotone", 1, "fs-18", "text-danger"], ["icon", "solar:clock-circle-bold-duotone", 1, "fs-18", "text-warning"], ["href", "javascript:void(0)", "nz-button", "", "nzType", "primary", "nzSize", "small", 3, "click"], [1, "bx", "bx-right-arrow-alt", "ms-1"]], template: function NotificationsDropdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "nz-badge", 4)(2, "span", 5);
      \u0275\u0275element(3, "iconify-icon", 6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(4, "nz-dropdown-menu", null, 0)(6, "div", 7)(7, "div", 8)(8, "h6", 9);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 10);
      \u0275\u0275template(12, NotificationsDropdownComponent_ng_container_12_Template, 25, 15, "ng-container", 11)(13, NotificationsDropdownComponent_ng_template_13_Template, 24, 15, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 12);
      \u0275\u0275template(16, NotificationsDropdownComponent_a_16_Template, 4, 4, "a", 13)(17, NotificationsDropdownComponent_ng_template_17_Template, 4, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      const notifMenu_r6 = \u0275\u0275reference(5);
      const essNotifItems_r7 = \u0275\u0275reference(14);
      const essViewAll_r8 = \u0275\u0275reference(18);
      \u0275\u0275property("nzDropdownMenu", notifMenu_r6);
      \u0275\u0275advance();
      \u0275\u0275property("nzCount", ctx.notifications.counts().total)("nzOverflowCount", 99);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 8, "topbar.notifications", "Th\xF4ng b\xE1o"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.mode() === "hrm")("ngIfElse", essNotifItems_r7);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.mode() === "hrm")("ngIfElse", essViewAll_r8);
    }
  }, dependencies: [CommonModule, NgIf, NzDropdownModule, NzDropdownDirective, NzDropdownMenuComponent, NzBadgeModule, NzBadgeComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, TranslatePipe], styles: ["\n.topbar-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  color: inherit;\n  cursor: pointer;\n  padding: 6px 10px;\n  border-radius: 6px;\n}\n.topbar-button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n}\n.notif-panel[_ngcontent-%COMP%] {\n  width: 320px;\n  background: #dc6428;\n  color: #fff;\n}\n.notif-header[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-bottom: 1px dashed rgba(255, 255, 255, 0.3);\n}\n.notif-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.notif-list[_ngcontent-%COMP%] {\n  max-height: 280px;\n  overflow-y: auto;\n}\n.notif-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  color: #fff;\n}\n.notif-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.12);\n}\n.notif-icon-wrap[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.85);\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=notifications-dropdown.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationsDropdownComponent, [{
    type: Component,
    args: [{ selector: "app-notifications-dropdown", standalone: true, imports: [CommonModule, NzDropdownModule, NzBadgeModule, NzButtonModule, TranslatePipe], schemas: [CUSTOM_ELEMENTS_SCHEMA], template: `<div class="topbar-item" nz-dropdown nzTrigger="click" [nzDropdownMenu]="notifMenu">
  <nz-badge [nzCount]="notifications.counts().total" [nzOverflowCount]="99">
    <span class="topbar-button">
      <iconify-icon icon="solar:bell-bing-bold-duotone" class="fs-24 align-middle"></iconify-icon>
    </span>
  </nz-badge>
</div>

<nz-dropdown-menu #notifMenu="nzDropdownMenu">
  <div class="notif-panel">
    <div class="notif-header">
      <h6 class="m-0 fs-16 fw-semibold">{{ 'topbar.notifications' | translate:'Th\xF4ng b\xE1o' }}</h6>
    </div>
    <div class="notif-list">
      <!-- Ch\u1EBF \u0111\u1ED9 HRM: Chi ti\u1EBFt thay \u0111\u1ED5i + Ngh\u1EC9 ph\xE9p + Ngh\u1EC9 b\u1EA5t th\u01B0\u1EDDng ch\u1EDD x\xE1c nh\u1EADn -->
      <ng-container *ngIf="mode() === 'hrm'; else essNotifItems">
        <a href="javascript:void(0)" class="notif-item" (click)="openPersonalChangeApproval()">
          <div class="d-flex align-items-center gap-2">
            <span class="notif-icon-wrap">
              <iconify-icon icon="solar:user-id-bold-duotone" class="fs-18 text-success"></iconify-icon>
            </span>
            <span>{{ 'topbar.notification.personalChange' | translate:'Chi ti\u1EBFt thay \u0111\u1ED5i th\xF4ng tin' }}</span>
          </div>
          <nz-badge [nzCount]="notifications.counts().personalChange" nzStandalone></nz-badge>
        </a>
        <a href="javascript:void(0)" class="notif-item" (click)="openLeaveConfirm()">
          <div class="d-flex align-items-center gap-2">
            <span class="notif-icon-wrap">
              <iconify-icon icon="solar:calendar-mark-bold-duotone" class="fs-18 text-primary"></iconify-icon>
            </span>
            <span>{{ 'topbar.notification.leave' | translate:'Ngh\u1EC9 ph\xE9p' }}</span>
          </div>
          <nz-badge [nzCount]="notifications.counts().leave" nzStandalone></nz-badge>
        </a>
        <a href="javascript:void(0)" class="notif-item" (click)="openAttendanceExConfirm()">
          <div class="d-flex align-items-center gap-2">
            <span class="notif-icon-wrap">
              <iconify-icon icon="solar:notification-unread-bold-duotone" class="fs-18 text-danger"></iconify-icon>
            </span>
            <span>{{ 'topbar.notification.anomaly' | translate:'Ngh\u1EC9 b\u1EA5t th\u01B0\u1EDDng' }}</span>
          </div>
          <nz-badge [nzCount]="notifications.counts().anomaly" nzStandalone></nz-badge>
        </a>
      </ng-container>

      <!-- Ch\u1EBF \u0111\u1ED9 ESS: Ngh\u1EC9 ph\xE9p + T\u0103ng ca + Ngh\u1EC9 b\u1EA5t th\u01B0\u1EDDng ch\u1EDD ph\xEA duy\u1EC7t -->
      <ng-template #essNotifItems>
        <a href="javascript:void(0)" class="notif-item" (click)="openApprovalEmail('21')">
          <div class="d-flex align-items-center gap-2">
            <span class="notif-icon-wrap">
              <iconify-icon icon="solar:calendar-mark-bold-duotone" class="fs-18 text-primary"></iconify-icon>
            </span>
            <span>{{ 'topbar.notification.leave' | translate:'Ngh\u1EC9 ph\xE9p' }}</span>
          </div>
          <nz-badge [nzCount]="notifications.counts().leave" nzStandalone></nz-badge>
        </a>
        <a href="javascript:void(0)" class="notif-item" (click)="openApprovalEmail('31')">
          <div class="d-flex align-items-center gap-2">
            <span class="notif-icon-wrap">
              <iconify-icon icon="solar:clock-circle-bold-duotone" class="fs-18 text-warning"></iconify-icon>
            </span>
            <span>{{ 'topbar.notification.ot' | translate:'T\u0103ng ca' }}</span>
          </div>
          <nz-badge [nzCount]="notifications.counts().ot" nzStandalone></nz-badge>
        </a>
        <a href="javascript:void(0)" class="notif-item" (click)="openApprovalEmail('218197')">
          <div class="d-flex align-items-center gap-2">
            <span class="notif-icon-wrap">
              <iconify-icon icon="solar:notification-unread-bold-duotone" class="fs-18 text-danger"></iconify-icon>
            </span>
            <span>{{ 'topbar.notification.anomaly' | translate:'Ngh\u1EC9 b\u1EA5t th\u01B0\u1EDDng' }}</span>
          </div>
          <nz-badge [nzCount]="notifications.counts().anomaly" nzStandalone></nz-badge>
        </a>
      </ng-template>
    </div>
    <div class="text-center py-3">
      <a *ngIf="mode() === 'hrm'; else essViewAll" href="javascript:void(0)" nz-button nzType="primary" nzSize="small" (click)="openLeaveConfirm()">
        {{ 'topbar.viewAllNotification' | translate:'Xem t\u1EA5t c\u1EA3 th\xF4ng b\xE1o' }}
        <i class="bx bx-right-arrow-alt ms-1"></i>
      </a>
      <ng-template #essViewAll>
        <a href="javascript:void(0)" nz-button nzType="primary" nzSize="small" (click)="openApprovalEmail()">
          {{ 'topbar.viewAllNotification' | translate:'Xem t\u1EA5t c\u1EA3 th\xF4ng b\xE1o' }}
          <i class="bx bx-right-arrow-alt ms-1"></i>
        </a>
      </ng-template>
    </div>
  </div>
</nz-dropdown-menu>
`, styles: ["/* src/app/shell/notifications-dropdown.component.css */\n.topbar-button {\n  display: inline-flex;\n  align-items: center;\n  color: inherit;\n  cursor: pointer;\n  padding: 6px 10px;\n  border-radius: 6px;\n}\n.topbar-button:hover {\n  background: rgba(255, 255, 255, 0.15);\n}\n.notif-panel {\n  width: 320px;\n  background: #dc6428;\n  color: #fff;\n}\n.notif-header {\n  padding: 12px 16px;\n  border-bottom: 1px dashed rgba(255, 255, 255, 0.3);\n}\n.notif-header h6 {\n  color: #fff;\n}\n.notif-list {\n  max-height: 280px;\n  overflow-y: auto;\n}\n.notif-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  color: #fff;\n}\n.notif-item:hover {\n  background: rgba(255, 255, 255, 0.12);\n}\n.notif-icon-wrap {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.85);\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=notifications-dropdown.component.css.map */\n"] }]
  }], () => [{ type: NotificationService }, { type: TabService }, { type: I18nService }], { mode: [{ type: Input, args: [{ isSignal: true, alias: "mode", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationsDropdownComponent, { className: "NotificationsDropdownComponent", filePath: "src/app/shell/notifications-dropdown.component.ts", lineNumber: 38 });
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-drawer.mjs
var _c04 = ["drawerTemplate"];
function NzDrawerComponent_ng_template_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275animateLeave(function NzDrawerComponent_ng_template_0_Conditional_1_Template_animateleave_cb() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.maskAnimationLeave());
    });
    \u0275\u0275animateEnter(function NzDrawerComponent_ng_template_0_Conditional_1_Template_animateenter_cb() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.maskAnimationEnter());
    });
    \u0275\u0275listener("click", function NzDrawerComponent_ng_template_0_Conditional_1_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.maskClick());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(ctx_r1.nzMaskStyle);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_5_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "nz-icon", 18);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const closeIcon_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("nzType", closeIcon_r4);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function NzDrawerComponent_ng_template_0_Conditional_5_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.closeClick());
    });
    \u0275\u0275template(1, NzDrawerComponent_ng_template_0_Conditional_5_Conditional_2_ng_container_1_Template, 2, 1, "ng-container", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r1.nzCloseIcon);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_5_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.nzTitle);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, NzDrawerComponent_ng_template_0_Conditional_5_Conditional_3_ng_container_1_Template, 2, 1, "ng-container", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r1.nzTitle);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_5_Conditional_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.nzExtra);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, NzDrawerComponent_ng_template_0_Conditional_5_Conditional_4_ng_container_1_Template, 2, 1, "ng-container", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r1.nzExtra);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12);
    \u0275\u0275conditionalCreate(2, NzDrawerComponent_ng_template_0_Conditional_5_Conditional_2_Template, 2, 1, "button", 13);
    \u0275\u0275conditionalCreate(3, NzDrawerComponent_ng_template_0_Conditional_5_Conditional_3_Template, 2, 1, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, NzDrawerComponent_ng_template_0_Conditional_5_Conditional_4_Template, 2, 1, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("ant-drawer-header-close-only", !ctx_r1.nzTitle);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.nzClosable ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.nzTitle ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.nzExtra ? 4 : -1);
  }
}
function NzDrawerComponent_ng_template_0_ng_template_7_Template(rf, ctx) {
}
function NzDrawerComponent_ng_template_0_Conditional_8_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzDrawerComponent_ng_template_0_Conditional_8_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 19);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.nzContent)("ngTemplateOutletContext", ctx_r1.templateContext);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NzDrawerComponent_ng_template_0_Conditional_8_Conditional_0_Template, 1, 2, "ng-container");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.isTemplateRef(ctx_r1.nzContent) ? 0 : -1);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_9_ng_template_0_Template(rf, ctx) {
}
function NzDrawerComponent_ng_template_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzDrawerComponent_ng_template_0_Conditional_9_ng_template_0_Template, 0, 0, "ng-template", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.contentFromContentChild);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.nzFooter);
  }
}
function NzDrawerComponent_ng_template_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, NzDrawerComponent_ng_template_0_Conditional_10_ng_container_1_Template, 2, 1, "ng-container", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r1.nzFooter);
  }
}
function NzDrawerComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275conditionalCreate(1, NzDrawerComponent_ng_template_0_Conditional_1_Template, 1, 2, "div", 2);
    \u0275\u0275elementStart(2, "div")(3, "div", 3)(4, "div", 4);
    \u0275\u0275conditionalCreate(5, NzDrawerComponent_ng_template_0_Conditional_5_Template, 5, 5, "div", 5);
    \u0275\u0275elementStart(6, "div", 6);
    \u0275\u0275template(7, NzDrawerComponent_ng_template_0_ng_template_7_Template, 0, 0, "ng-template", 7);
    \u0275\u0275conditionalCreate(8, NzDrawerComponent_ng_template_0_Conditional_8_Template, 1, 1)(9, NzDrawerComponent_ng_template_0_Conditional_9_Template, 1, 1, null, 8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, NzDrawerComponent_ng_template_0_Conditional_10_Template, 2, 1, "div", 9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("transform", ctx_r1.offsetTransform)("transition", ctx_r1.placementChanging ? "none" : null)("z-index", ctx_r1.nzZIndex);
    \u0275\u0275classProp("ant-drawer-rtl", ctx_r1.dir() === "rtl")("ant-drawer-open", ctx_r1.isOpen)("no-mask", !ctx_r1.nzMask)("ant-drawer-top", ctx_r1.nzPlacement === "top")("ant-drawer-bottom", ctx_r1.nzPlacement === "bottom")("ant-drawer-right", ctx_r1.nzPlacement === "right")("ant-drawer-left", ctx_r1.nzPlacement === "left");
    \u0275\u0275property("nzNoAnimation", ctx_r1.nzNoAnimation);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.nzMask && ctx_r1.isOpen ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275interpolate1("ant-drawer-content-wrapper ", ctx_r1.nzWrapClassName));
    \u0275\u0275styleProp("width", ctx_r1.width)("height", ctx_r1.height)("transform", ctx_r1.transform)("transition", ctx_r1.placementChanging ? "none" : null);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", ctx_r1.isLeftOrRight ? "100%" : null);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.nzTitle || ctx_r1.nzClosable ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275styleMap(ctx_r1.nzBodyStyle);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.nzContent ? 8 : ctx_r1.contentFromContentChild && (ctx_r1.isOpen || ctx_r1.inAnimation) ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.nzFooter ? 10 : -1);
  }
}
var NzDrawerContentDirective = class _NzDrawerContentDirective {
  templateRef = inject(TemplateRef);
  static \u0275fac = function NzDrawerContentDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzDrawerContentDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NzDrawerContentDirective,
    selectors: [["", "nzDrawerContent", ""]],
    exportAs: ["nzDrawerContent"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDrawerContentDirective, [{
    type: Directive,
    args: [{
      selector: "[nzDrawerContent]",
      exportAs: "nzDrawerContent"
    }]
  }], null, null);
})();
var DRAWER_DEFAULT_SIZE = 378;
var DRAWER_LARGE_SIZE = 736;
var NZ_DRAWER_DATA = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "nz-drawer-data" : "");
var NzDrawerRef = class {
};
var DRAWER_ANIMATE_DURATION = 300;
var NZ_CONFIG_MODULE_NAME2 = "drawer";
var NzDrawerComponent = (() => {
  let _classSuper = NzDrawerRef;
  let _nzMaskClosable_decorators;
  let _nzMaskClosable_initializers = [];
  let _nzMaskClosable_extraInitializers = [];
  let _nzMask_decorators;
  let _nzMask_initializers = [];
  let _nzMask_extraInitializers = [];
  let _nzCloseOnNavigation_decorators;
  let _nzCloseOnNavigation_initializers = [];
  let _nzCloseOnNavigation_extraInitializers = [];
  let _nzDirection_decorators;
  let _nzDirection_initializers = [];
  let _nzDirection_extraInitializers = [];
  return class NzDrawerComponent2 extends _classSuper {
    static {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      _nzMaskClosable_decorators = [WithConfig()];
      _nzMask_decorators = [WithConfig()];
      _nzCloseOnNavigation_decorators = [WithConfig()];
      _nzDirection_decorators = [WithConfig()];
      __esDecorate(null, null, _nzMaskClosable_decorators, {
        kind: "field",
        name: "nzMaskClosable",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzMaskClosable" in obj,
          get: (obj) => obj.nzMaskClosable,
          set: (obj, value) => {
            obj.nzMaskClosable = value;
          }
        },
        metadata: _metadata
      }, _nzMaskClosable_initializers, _nzMaskClosable_extraInitializers);
      __esDecorate(null, null, _nzMask_decorators, {
        kind: "field",
        name: "nzMask",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzMask" in obj,
          get: (obj) => obj.nzMask,
          set: (obj, value) => {
            obj.nzMask = value;
          }
        },
        metadata: _metadata
      }, _nzMask_initializers, _nzMask_extraInitializers);
      __esDecorate(null, null, _nzCloseOnNavigation_decorators, {
        kind: "field",
        name: "nzCloseOnNavigation",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzCloseOnNavigation" in obj,
          get: (obj) => obj.nzCloseOnNavigation,
          set: (obj, value) => {
            obj.nzCloseOnNavigation = value;
          }
        },
        metadata: _metadata
      }, _nzCloseOnNavigation_initializers, _nzCloseOnNavigation_extraInitializers);
      __esDecorate(null, null, _nzDirection_decorators, {
        kind: "field",
        name: "nzDirection",
        static: false,
        private: false,
        access: {
          has: (obj) => "nzDirection" in obj,
          get: (obj) => obj.nzDirection,
          set: (obj, value) => {
            obj.nzDirection = value;
          }
        },
        metadata: _metadata
      }, _nzDirection_initializers, _nzDirection_extraInitializers);
      if (_metadata) Object.defineProperty(this, Symbol.metadata, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: _metadata
      });
    }
    renderer = inject(Renderer2);
    injector = inject(Injector);
    cdr = inject(ChangeDetectorRef);
    focusTrapFactory = inject(FocusTrapFactory);
    viewContainerRef = inject(ViewContainerRef);
    overlayKeyboardDispatcher = inject(OverlayKeyboardDispatcher);
    directionality = inject(Directionality);
    destroyRef = inject(DestroyRef);
    document = inject(DOCUMENT);
    _nzModuleName = NZ_CONFIG_MODULE_NAME2;
    nzContent;
    nzCloseIcon = "close";
    nzClosable = true;
    nzMaskClosable = __runInitializers(this, _nzMaskClosable_initializers, true);
    nzMask = (__runInitializers(this, _nzMaskClosable_extraInitializers), __runInitializers(this, _nzMask_initializers, true));
    nzCloseOnNavigation = (__runInitializers(this, _nzMask_extraInitializers), __runInitializers(this, _nzCloseOnNavigation_initializers, true));
    nzNoAnimation = (__runInitializers(this, _nzCloseOnNavigation_extraInitializers), false);
    nzKeyboard = true;
    nzTitle;
    nzExtra;
    nzFooter;
    nzPlacement = "right";
    nzSize = "default";
    nzMaskStyle = {};
    nzBodyStyle = {};
    nzWrapClassName;
    nzWidth;
    nzHeight;
    nzZIndex = 1e3;
    nzOffsetX = 0;
    nzOffsetY = 0;
    componentInstance = null;
    componentRef = null;
    set nzVisible(value) {
      this.isOpen = value;
    }
    get nzVisible() {
      return this.isOpen;
    }
    nzOnViewInit = new EventEmitter();
    nzOnClose = new EventEmitter();
    nzVisibleChange = new EventEmitter();
    drawerTemplate;
    bodyPortalOutlet;
    contentFromContentChild;
    previouslyFocusedElement;
    placementChanging = false;
    placementChangeTimeoutId;
    nzContentParams;
    // only service
    nzData;
    overlayRef;
    portal;
    focusTrap;
    isOpen = false;
    inAnimation = false;
    templateContext = {
      $implicit: void 0,
      drawerRef: this
    };
    isTemplateRef = isTemplateRef;
    maskAnimationEnter = withAnimationCheck(() => "ant-drawer-mask-motion-enter");
    maskAnimationLeave = withAnimationCheck(() => "ant-drawer-mask-motion-leave");
    get offsetTransform() {
      if (!this.isOpen || this.nzOffsetX + this.nzOffsetY === 0) {
        return null;
      }
      switch (this.nzPlacement) {
        case "left":
          return `translateX(${this.nzOffsetX}px)`;
        case "right":
          return `translateX(-${this.nzOffsetX}px)`;
        case "top":
          return `translateY(${this.nzOffsetY}px)`;
        case "bottom":
          return `translateY(-${this.nzOffsetY}px)`;
      }
    }
    get transform() {
      if (this.isOpen) {
        return null;
      }
      switch (this.nzPlacement) {
        case "left":
          return `translateX(-100%)`;
        case "right":
          return `translateX(100%)`;
        case "top":
          return `translateY(-100%)`;
        case "bottom":
          return `translateY(100%)`;
      }
    }
    get width() {
      if (this.isLeftOrRight) {
        const defaultWidth = this.nzSize === "large" ? DRAWER_LARGE_SIZE : DRAWER_DEFAULT_SIZE;
        return this.nzWidth === void 0 ? toCssPixel(defaultWidth) : toCssPixel(this.nzWidth);
      }
      return null;
    }
    get height() {
      if (!this.isLeftOrRight) {
        const defaultHeight = this.nzSize === "large" ? DRAWER_LARGE_SIZE : DRAWER_DEFAULT_SIZE;
        return this.nzHeight === void 0 ? toCssPixel(defaultHeight) : toCssPixel(this.nzHeight);
      }
      return null;
    }
    get isLeftOrRight() {
      return this.nzPlacement === "left" || this.nzPlacement === "right";
    }
    nzAfterOpen = new Subject();
    nzAfterClose = new Subject();
    get afterOpen() {
      return this.nzAfterOpen.asObservable();
    }
    get afterClose() {
      return this.nzAfterClose.asObservable();
    }
    get isNzContentTemplateRef() {
      return isTemplateRef(this.nzContent);
    }
    // from service config
    nzDirection = __runInitializers(this, _nzDirection_initializers, void 0);
    dir = (__runInitializers(this, _nzDirection_extraInitializers), computed(
      () => this.nzDirection || this.directionality.valueSignal(),
      ...ngDevMode ? [{
        debugName: "dir"
      }] : (
        /* istanbul ignore next */
        []
      )
    ));
    constructor() {
      super();
      this.destroyRef.onDestroy(() => {
        clearTimeout(this.placementChangeTimeoutId);
        this.disposeOverlay();
      });
    }
    ngOnInit() {
      this.attachOverlay();
      this.updateOverlayStyle();
      this.updateBodyOverflow();
      this.templateContext = {
        $implicit: this.nzData || this.nzContentParams,
        drawerRef: this
      };
      this.cdr.detectChanges();
    }
    ngAfterViewInit() {
      this.attachBodyContent();
      if (this.nzOnViewInit.observers.length) {
        setTimeout(() => {
          this.nzOnViewInit.emit();
        });
      }
    }
    ngOnChanges(changes) {
      const {
        nzPlacement,
        nzVisible
      } = changes;
      if (nzVisible) {
        const value = changes.nzVisible.currentValue;
        if (value) {
          this.open();
        } else {
          this.close();
        }
      }
      if (nzPlacement && !nzPlacement.isFirstChange()) {
        this.triggerPlacementChangeCycleOnce();
      }
    }
    getAnimationDuration() {
      return this.nzNoAnimation ? 0 : DRAWER_ANIMATE_DURATION;
    }
    // Disable the transition animation temporarily when the placement changing
    triggerPlacementChangeCycleOnce() {
      if (!this.nzNoAnimation) {
        this.placementChanging = true;
        this.cdr.markForCheck();
        clearTimeout(this.placementChangeTimeoutId);
        this.placementChangeTimeoutId = setTimeout(() => {
          this.placementChanging = false;
          this.cdr.markForCheck();
        }, this.getAnimationDuration());
      }
    }
    close(result) {
      this.isOpen = false;
      this.inAnimation = true;
      this.nzVisibleChange.emit(false);
      this.updateOverlayStyle();
      this.overlayKeyboardDispatcher.remove(this.overlayRef);
      this.cdr.detectChanges();
      setTimeout(() => {
        this.updateBodyOverflow();
        this.restoreFocus();
        this.inAnimation = false;
        this.nzAfterClose.next(result);
        this.nzAfterClose.complete();
        this.componentInstance = null;
        this.componentRef = null;
      }, this.getAnimationDuration());
    }
    open() {
      this.attachOverlay();
      this.isOpen = true;
      this.inAnimation = true;
      this.nzVisibleChange.emit(true);
      this.overlayKeyboardDispatcher.add(this.overlayRef);
      this.updateOverlayStyle();
      this.updateBodyOverflow();
      this.savePreviouslyFocusedElement();
      this.trapFocus();
      this.cdr.detectChanges();
      setTimeout(() => {
        this.inAnimation = false;
        this.cdr.detectChanges();
        this.nzAfterOpen.next();
      }, this.getAnimationDuration());
    }
    getContentComponent() {
      return this.componentInstance;
    }
    getContentComponentRef() {
      return this.componentRef;
    }
    closeClick() {
      this.nzOnClose.emit();
    }
    maskClick() {
      if (this.nzMaskClosable && this.nzMask) {
        this.nzOnClose.emit();
      }
    }
    attachBodyContent() {
      this.bodyPortalOutlet.dispose();
      if (this.nzContent instanceof Type) {
        const childInjector = Injector.create({
          parent: this.injector,
          providers: [{
            provide: NzDrawerRef,
            useValue: this
          }, {
            provide: NZ_DRAWER_DATA,
            useValue: this.nzData
          }]
        });
        const componentPortal = new ComponentPortal(this.nzContent, null, childInjector);
        this.componentRef = this.bodyPortalOutlet.attachComponentPortal(componentPortal);
        this.componentInstance = this.componentRef.instance;
        Object.assign(this.componentRef.instance, this.nzData || this.nzContentParams);
        this.componentRef.changeDetectorRef.detectChanges();
      }
    }
    attachOverlay() {
      if (!this.overlayRef) {
        this.portal = new TemplatePortal(this.drawerTemplate, this.viewContainerRef);
        this.overlayRef = createOverlayRef(this.injector, {
          disposeOnNavigation: this.nzCloseOnNavigation,
          positionStrategy: createGlobalPositionStrategy(this.injector),
          scrollStrategy: createBlockScrollStrategy(this.injector)
        });
        overlayZIndexSetter(this.overlayRef, this.nzZIndex);
      }
      if (this.overlayRef && !this.overlayRef.hasAttached()) {
        this.overlayRef.attach(this.portal);
        this.overlayRef.keydownEvents().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
          if (event.keyCode === ESCAPE && this.isOpen && this.nzKeyboard) {
            this.nzOnClose.emit();
          }
        });
        this.overlayRef.detachments().pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
          this.close();
          this.disposeOverlay();
        });
      }
    }
    disposeOverlay() {
      this.overlayRef?.dispose();
      this.overlayRef = null;
    }
    updateOverlayStyle() {
      if (this.overlayRef && this.overlayRef.overlayElement) {
        this.renderer.setStyle(this.overlayRef.overlayElement, "pointer-events", this.isOpen ? "auto" : "none");
      }
    }
    updateBodyOverflow() {
      if (this.overlayRef) {
        if (this.isOpen) {
          this.overlayRef.getConfig().scrollStrategy.enable();
        } else {
          this.overlayRef.getConfig().scrollStrategy.disable();
        }
      }
    }
    savePreviouslyFocusedElement() {
      if (this.document && !this.previouslyFocusedElement) {
        this.previouslyFocusedElement = this.document.activeElement;
        this.previouslyFocusedElement?.blur();
      }
    }
    trapFocus() {
      if (!this.focusTrap && this.overlayRef && this.overlayRef.overlayElement) {
        this.focusTrap = this.focusTrapFactory.create(this.overlayRef.overlayElement);
        this.focusTrap.focusInitialElement();
      }
    }
    restoreFocus() {
      if (this.previouslyFocusedElement) {
        this.previouslyFocusedElement.focus();
        this.previouslyFocusedElement = void 0;
      }
      if (this.focusTrap) {
        this.focusTrap.destroy();
      }
    }
    static \u0275fac = function NzDrawerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NzDrawerComponent2)();
    };
    static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: NzDrawerComponent2,
      selectors: [["nz-drawer"]],
      contentQueries: function NzDrawerComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, NzDrawerContentDirective, 7, TemplateRef);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentFromContentChild = _t.first);
        }
      },
      viewQuery: function NzDrawerComponent_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c04, 7)(CdkPortalOutlet, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.drawerTemplate = _t.first);
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.bodyPortalOutlet = _t.first);
        }
      },
      inputs: {
        nzContent: "nzContent",
        nzCloseIcon: "nzCloseIcon",
        nzClosable: [2, "nzClosable", "nzClosable", booleanAttribute],
        nzMaskClosable: [2, "nzMaskClosable", "nzMaskClosable", booleanAttribute],
        nzMask: [2, "nzMask", "nzMask", booleanAttribute],
        nzCloseOnNavigation: [2, "nzCloseOnNavigation", "nzCloseOnNavigation", booleanAttribute],
        nzNoAnimation: [2, "nzNoAnimation", "nzNoAnimation", booleanAttribute],
        nzKeyboard: [2, "nzKeyboard", "nzKeyboard", booleanAttribute],
        nzTitle: "nzTitle",
        nzExtra: "nzExtra",
        nzFooter: "nzFooter",
        nzPlacement: "nzPlacement",
        nzSize: "nzSize",
        nzMaskStyle: "nzMaskStyle",
        nzBodyStyle: "nzBodyStyle",
        nzWrapClassName: "nzWrapClassName",
        nzWidth: "nzWidth",
        nzHeight: "nzHeight",
        nzZIndex: "nzZIndex",
        nzOffsetX: "nzOffsetX",
        nzOffsetY: "nzOffsetY",
        nzVisible: [2, "nzVisible", "nzVisible", booleanAttribute]
      },
      outputs: {
        nzOnViewInit: "nzOnViewInit",
        nzOnClose: "nzOnClose",
        nzVisibleChange: "nzVisibleChange"
      },
      exportAs: ["nzDrawer"],
      features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature],
      decls: 2,
      vars: 0,
      consts: [["drawerTemplate", ""], [1, "ant-drawer", 3, "nzNoAnimation"], [1, "ant-drawer-mask", 3, "style"], [1, "ant-drawer-content"], [1, "ant-drawer-wrapper-body"], [1, "ant-drawer-header", 3, "ant-drawer-header-close-only"], ["cdkScrollable", "", 1, "ant-drawer-body"], ["cdkPortalOutlet", ""], [3, "ngTemplateOutlet"], [1, "ant-drawer-footer"], [1, "ant-drawer-mask", 3, "click"], [1, "ant-drawer-header"], [1, "ant-drawer-header-title"], ["aria-label", "Close", 1, "ant-drawer-close"], [1, "ant-drawer-title"], [1, "ant-drawer-extra"], ["aria-label", "Close", 1, "ant-drawer-close", 3, "click"], [4, "nzStringTemplateOutlet"], [3, "nzType"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function NzDrawerComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275template(0, NzDrawerComponent_ng_template_0_Template, 11, 40, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        }
      },
      dependencies: [NzNoAnimationDirective, NzOutletModule, NzStringTemplateOutletDirective, NzIconModule, NzIconDirective, PortalModule, CdkPortalOutlet, NgTemplateOutlet, CdkScrollable],
      encapsulation: 2
    });
  };
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDrawerComponent, [{
    type: Component,
    args: [{
      selector: "nz-drawer",
      exportAs: "nzDrawer",
      imports: [NzNoAnimationDirective, NzOutletModule, NzIconModule, PortalModule, NgTemplateOutlet, CdkScrollable],
      template: `
    <ng-template #drawerTemplate>
      <div
        class="ant-drawer"
        [nzNoAnimation]="nzNoAnimation"
        [class.ant-drawer-rtl]="dir() === 'rtl'"
        [class.ant-drawer-open]="isOpen"
        [class.no-mask]="!nzMask"
        [class.ant-drawer-top]="nzPlacement === 'top'"
        [class.ant-drawer-bottom]="nzPlacement === 'bottom'"
        [class.ant-drawer-right]="nzPlacement === 'right'"
        [class.ant-drawer-left]="nzPlacement === 'left'"
        [style.transform]="offsetTransform"
        [style.transition]="placementChanging ? 'none' : null"
        [style.zIndex]="nzZIndex"
      >
        @if (nzMask && isOpen) {
          <div
            class="ant-drawer-mask"
            [animate.enter]="maskAnimationEnter()"
            [animate.leave]="maskAnimationLeave()"
            (click)="maskClick()"
            [style]="nzMaskStyle"
          ></div>
        }
        <div
          class="ant-drawer-content-wrapper {{ nzWrapClassName }}"
          [style.width]="width"
          [style.height]="height"
          [style.transform]="transform"
          [style.transition]="placementChanging ? 'none' : null"
        >
          <div class="ant-drawer-content">
            <div class="ant-drawer-wrapper-body" [style.height]="isLeftOrRight ? '100%' : null">
              @if (nzTitle || nzClosable) {
                <div class="ant-drawer-header" [class.ant-drawer-header-close-only]="!nzTitle">
                  <div class="ant-drawer-header-title">
                    @if (nzClosable) {
                      <button (click)="closeClick()" aria-label="Close" class="ant-drawer-close">
                        <ng-container *nzStringTemplateOutlet="nzCloseIcon; let closeIcon">
                          <nz-icon [nzType]="closeIcon" />
                        </ng-container>
                      </button>
                    }

                    @if (nzTitle) {
                      <div class="ant-drawer-title">
                        <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
                      </div>
                    }
                  </div>
                  @if (nzExtra) {
                    <div class="ant-drawer-extra">
                      <ng-container *nzStringTemplateOutlet="nzExtra">{{ nzExtra }}</ng-container>
                    </div>
                  }
                </div>
              }
              <div class="ant-drawer-body" [style]="nzBodyStyle" cdkScrollable>
                <ng-template cdkPortalOutlet />
                @if (nzContent) {
                  @if (isTemplateRef(nzContent)) {
                    <ng-container *ngTemplateOutlet="nzContent; context: templateContext" />
                  }
                } @else if (contentFromContentChild && (isOpen || inAnimation)) {
                  <ng-template [ngTemplateOutlet]="contentFromContentChild" />
                }
              </div>
              @if (nzFooter) {
                <div class="ant-drawer-footer">
                  <ng-container *nzStringTemplateOutlet="nzFooter">{{ nzFooter }}</ng-container>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `
    }]
  }], () => [], {
    nzContent: [{
      type: Input
    }],
    nzCloseIcon: [{
      type: Input
    }],
    nzClosable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzMaskClosable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzMask: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzCloseOnNavigation: [{
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
    nzKeyboard: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzTitle: [{
      type: Input
    }],
    nzExtra: [{
      type: Input
    }],
    nzFooter: [{
      type: Input
    }],
    nzPlacement: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzMaskStyle: [{
      type: Input
    }],
    nzBodyStyle: [{
      type: Input
    }],
    nzWrapClassName: [{
      type: Input
    }],
    nzWidth: [{
      type: Input
    }],
    nzHeight: [{
      type: Input
    }],
    nzZIndex: [{
      type: Input
    }],
    nzOffsetX: [{
      type: Input
    }],
    nzOffsetY: [{
      type: Input
    }],
    nzVisible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    nzOnViewInit: [{
      type: Output
    }],
    nzOnClose: [{
      type: Output
    }],
    nzVisibleChange: [{
      type: Output
    }],
    drawerTemplate: [{
      type: ViewChild,
      args: ["drawerTemplate", {
        static: true
      }]
    }],
    bodyPortalOutlet: [{
      type: ViewChild,
      args: [CdkPortalOutlet, {
        static: false
      }]
    }],
    contentFromContentChild: [{
      type: ContentChild,
      args: [NzDrawerContentDirective, {
        static: true,
        read: TemplateRef
      }]
    }],
    nzDirection: []
  });
})();
var DrawerBuilderForService = class {
  overlayRef;
  options;
  drawerRef;
  unsubscribe$ = new Subject();
  constructor(overlayRef, options) {
    this.overlayRef = overlayRef;
    this.options = options;
    const _a = this.options, {
      nzOnCancel
    } = _a, componentOption = __objRest(_a, [
      "nzOnCancel"
    ]);
    this.drawerRef = this.overlayRef.attach(new ComponentPortal(NzDrawerComponent)).instance;
    this.updateOptions(componentOption);
    this.drawerRef.savePreviouslyFocusedElement();
    this.drawerRef.nzOnViewInit.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      this.drawerRef.open();
    });
    this.drawerRef.nzOnClose.subscribe(() => {
      if (nzOnCancel) {
        nzOnCancel().then((canClose) => {
          if (canClose !== false) {
            this.drawerRef.close();
          }
        });
      } else {
        this.drawerRef.close();
      }
    });
    this.drawerRef.afterClose.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
      this.overlayRef.dispose();
      this.drawerRef = null;
      this.unsubscribe$.next();
      this.unsubscribe$.complete();
    });
  }
  getInstance() {
    return this.drawerRef;
  }
  updateOptions(options) {
    Object.assign(this.drawerRef, options);
  }
};
var NzDrawerService = class _NzDrawerService {
  injector = inject(Injector);
  create(options) {
    return new DrawerBuilderForService(createOverlayRef(this.injector), options).getInstance();
  }
  static \u0275fac = function NzDrawerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzDrawerService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NzDrawerService,
    factory: _NzDrawerService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDrawerService, [{
    type: Injectable
  }], null, null);
})();
var NzDrawerModule = class _NzDrawerModule {
  static \u0275fac = function NzDrawerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NzDrawerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NzDrawerModule,
    imports: [NzDrawerComponent, NzDrawerContentDirective],
    exports: [NzDrawerComponent, NzDrawerContentDirective]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [NzDrawerService],
    imports: [NzDrawerComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzDrawerModule, [{
    type: NgModule,
    args: [{
      imports: [NzDrawerComponent, NzDrawerContentDirective],
      providers: [NzDrawerService],
      exports: [NzDrawerComponent, NzDrawerContentDirective]
    }]
  }], null, null);
})();

// src/app/shell/theme.service.ts
var STORAGE_KEY = "__LARKON_CONFIG__";
var DEFAULT_MENU_SIZE = "default";
var ThemeService = class _ThemeService {
  menuSize = signal(
    DEFAULT_MENU_SIZE,
    ...ngDevMode ? [{ debugName: "menuSize" }] : (
      /* istanbul ignore next */
      []
    )
  );
  html = document.documentElement;
  constructor() {
    const config = this.readConfig();
    this.applyMenuSize(this.normalizeMenuSize(config.menu.size), false);
  }
  /** Quy đổi giá trị đọc từ storage (có thể do trang Thymeleaf ghi, 1 trong 5 giá trị cũ) về 2
   * trạng thái Angular hỗ trợ - chỉ 'condensed' được giữ nguyên, còn lại (kể cả 'hidden'/'sm-hover*')
   * coi như mở rộng vì sidebar NG-ZORRO không có trạng thái tương ứng. */
  normalizeMenuSize(size) {
    return size === "condensed" ? "condensed" : "default";
  }
  setMenuSize(size) {
    this.applyMenuSize(size, true);
  }
  reset() {
    this.applyMenuSize(DEFAULT_MENU_SIZE, true);
  }
  applyMenuSize(size, save) {
    this.html.setAttribute("data-menu-size", size);
    this.menuSize.set(size);
    if (save) {
      const config = this.readConfig();
      config.menu.size = size;
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    }
  }
  readConfig() {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed?.menu?.size)
          return parsed;
      }
    } catch {
    }
    return { theme: "light", topbar: { color: "light" }, menu: { size: DEFAULT_MENU_SIZE, color: "dark" } };
  }
  static \u0275fac = function ThemeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ThemeService, factory: _ThemeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/shell/theme-settings.component.ts
function ThemeSettingsComponent_ng_container_1_label_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    \u0275\u0275property("nzValue", opt_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(opt_r3.label);
  }
}
function ThemeSettingsComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h5", 2);
    \u0275\u0275text(2, "K\xEDch th\u01B0\u1EDBc Sidebar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "nz-radio-group", 3);
    \u0275\u0275listener("ngModelChange", function ThemeSettingsComponent_ng_container_1_Template_nz_radio_group_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.select($event));
    });
    \u0275\u0275template(4, ThemeSettingsComponent_ng_container_1_label_4_Template, 2, 2, "label", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(5, "button", 5);
    \u0275\u0275listener("click", function ThemeSettingsComponent_ng_container_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reset());
    });
    \u0275\u0275text(6, "\u0110\u1EB7t l\u1EA1i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.theme.menuSize());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.sizeOptions);
  }
}
var ThemeSettingsComponent = class _ThemeSettingsComponent {
  constructor(theme) {
    this.theme = theme;
  }
  theme;
  visible = signal(
    false,
    ...ngDevMode ? [{ debugName: "visible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  sizeOptions = [
    { value: "default", label: "M\u1EB7c \u0111\u1ECBnh" },
    { value: "condensed", label: "Thu g\u1ECDn" }
  ];
  open() {
    this.visible.set(true);
  }
  close() {
    this.visible.set(false);
  }
  select(size) {
    this.theme.setMenuSize(size);
  }
  reset() {
    this.theme.reset();
  }
  static \u0275fac = function ThemeSettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ThemeSettingsComponent)(\u0275\u0275directiveInject(ThemeService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThemeSettingsComponent, selectors: [["app-theme-settings"]], decls: 2, vars: 2, consts: [["nzTitle", "C\xE0i \u0111\u1EB7t giao di\u1EC7n", "nzPlacement", "right", 3, "nzOnClose", "nzVisible", "nzWidth"], [4, "nzDrawerContent"], [1, "mb-3", "fw-semibold"], [1, "d-flex", "flex-column", "gap-2", 3, "ngModelChange", "ngModel"], ["nz-radio", "", 3, "nzValue", 4, "ngFor", "ngForOf"], ["nz-button", "", "nzDanger", "", "nzBlock", "", 1, "mt-4", 3, "click"], ["nz-radio", "", 3, "nzValue"]], template: function ThemeSettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nz-drawer", 0);
      \u0275\u0275listener("nzOnClose", function ThemeSettingsComponent_Template_nz_drawer_nzOnClose_0_listener() {
        return ctx.close();
      });
      \u0275\u0275template(1, ThemeSettingsComponent_ng_container_1_Template, 7, 2, "ng-container", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("nzVisible", ctx.visible())("nzWidth", 320);
    }
  }, dependencies: [CommonModule, NgForOf, FormsModule, NgControlStatus, NgModel, NzDrawerModule, NzDrawerComponent, NzDrawerContentDirective, NzRadioModule, NzRadioComponent, NzRadioGroupComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-theme-settings", standalone: true, imports: [CommonModule, FormsModule, NzDrawerModule, NzRadioModule, NzButtonModule], template: '<nz-drawer nzTitle="C\xE0i \u0111\u1EB7t giao di\u1EC7n" [nzVisible]="visible()" (nzOnClose)="close()" nzPlacement="right" [nzWidth]="320">\n  <ng-container *nzDrawerContent>\n    <h5 class="mb-3 fw-semibold">K\xEDch th\u01B0\u1EDBc Sidebar</h5>\n    <nz-radio-group [ngModel]="theme.menuSize()" (ngModelChange)="select($event)" class="d-flex flex-column gap-2">\n      <label nz-radio *ngFor="let opt of sizeOptions" [nzValue]="opt.value">{{ opt.label }}</label>\n    </nz-radio-group>\n\n    <button nz-button nzDanger nzBlock class="mt-4" (click)="reset()">\u0110\u1EB7t l\u1EA1i</button>\n  </ng-container>\n</nz-drawer>\n' }]
  }], () => [{ type: ThemeService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThemeSettingsComponent, { className: "ThemeSettingsComponent", filePath: "src/app/shell/theme-settings.component.ts", lineNumber: 18 });
})();

// src/app/shell/app-shell.component.ts
function AppShellComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1, "VHR");
    \u0275\u0275elementEnd();
  }
}
function AppShellComponent_ng_container_7_li_1_iconify_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iconify-icon");
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275attribute("icon", item_r2.menuImg);
  }
}
function AppShellComponent_ng_container_7_li_1_iconify_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iconify-icon", 51);
  }
}
function AppShellComponent_ng_container_7_li_1_ng_container_7_li_1_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 55);
    \u0275\u0275listener("click", function AppShellComponent_ng_container_7_li_1_ng_container_7_li_1_li_2_Template_li_click_0_listener() {
      const grandChild_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.openMenuTab(grandChild_r7.menuUrl, grandChild_r7.menuName, grandChild_r7.menuNo));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const grandChild_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275property("nzSelected", ctx_r2.isMenuActive(grandChild_r7.menuUrl));
    \u0275\u0275attribute("data-menu-no", grandChild_r7.menuNo)("data-menu-url", grandChild_r7.menuUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", grandChild_r7.menuName, " ");
  }
}
function AppShellComponent_ng_container_7_li_1_ng_container_7_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 53);
    \u0275\u0275listener("nzOpenChange", function AppShellComponent_ng_container_7_li_1_ng_container_7_li_1_Template_li_nzOpenChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const child_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onChildSubmenuOpenChange(child_r5.menuNo, $event));
    });
    \u0275\u0275elementStart(1, "ul");
    \u0275\u0275template(2, AppShellComponent_ng_container_7_li_1_ng_container_7_li_1_li_2_Template, 2, 4, "li", 54);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const child_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("nzTitle", child_r5.menuName)("nzIcon", null)("nzOpen", ctx_r2.openChildMenuNo() === child_r5.menuNo);
    \u0275\u0275attribute("data-menu-no", child_r5.menuNo)("data-menu-url", child_r5.menuUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", child_r5.children);
  }
}
function AppShellComponent_ng_container_7_li_1_ng_container_7_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 55);
    \u0275\u0275listener("click", function AppShellComponent_ng_container_7_li_1_ng_container_7_li_2_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const child_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openMenuTab(child_r5.menuUrl, child_r5.menuName, child_r5.menuNo));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("nzSelected", ctx_r2.isMenuActive(child_r5.menuUrl));
    \u0275\u0275attribute("data-menu-no", child_r5.menuNo)("data-menu-url", child_r5.menuUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", child_r5.menuName, " ");
  }
}
function AppShellComponent_ng_container_7_li_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AppShellComponent_ng_container_7_li_1_ng_container_7_li_1_Template, 3, 6, "li", 52)(2, AppShellComponent_ng_container_7_li_1_ng_container_7_li_2_Template, 2, 4, "li", 47);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const child_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", child_r5.children?.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !child_r5.children?.length);
  }
}
function AppShellComponent_ng_container_7_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 48);
    \u0275\u0275listener("nzOpenChange", function AppShellComponent_ng_container_7_li_1_Template_li_nzOpenChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const item_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onTopSubmenuOpenChange(item_r2.menuNo, $event));
    });
    \u0275\u0275elementStart(1, "div", 49);
    \u0275\u0275template(2, AppShellComponent_ng_container_7_li_1_iconify_icon_2_Template, 1, 1, "iconify-icon", 43)(3, AppShellComponent_ng_container_7_li_1_iconify_icon_3_Template, 1, 0, "iconify-icon", 50);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ul");
    \u0275\u0275template(7, AppShellComponent_ng_container_7_li_1_ng_container_7_Template, 3, 2, "ng-container", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzIcon", null)("nzOpen", ctx_r2.openTopMenuNo() === item_r2.menuNo);
    \u0275\u0275attribute("data-menu-no", item_r2.menuNo)("data-menu-url", item_r2.menuUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r2.menuImg);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r2.menuImg);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.menuName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", item_r2.children);
  }
}
function AppShellComponent_ng_container_7_li_2_iconify_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iconify-icon");
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275attribute("icon", item_r2.menuImg);
  }
}
function AppShellComponent_ng_container_7_li_2_iconify_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iconify-icon", 58);
  }
}
function AppShellComponent_ng_container_7_li_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.menuName);
  }
}
function AppShellComponent_ng_container_7_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 55);
    \u0275\u0275listener("click", function AppShellComponent_ng_container_7_li_2_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const item_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openMenuTab(item_r2.menuUrl, item_r2.menuName, item_r2.menuNo));
    });
    \u0275\u0275elementStart(1, "span", 56);
    \u0275\u0275template(2, AppShellComponent_ng_container_7_li_2_iconify_icon_2_Template, 1, 1, "iconify-icon", 43)(3, AppShellComponent_ng_container_7_li_2_iconify_icon_3_Template, 1, 0, "iconify-icon", 57)(4, AppShellComponent_ng_container_7_li_2_span_4_Template, 2, 1, "span", 43);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzSelected", ctx_r2.isMenuActive(item_r2.menuUrl));
    \u0275\u0275attribute("data-menu-no", item_r2.menuNo)("data-menu-url", item_r2.menuUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", item_r2.menuImg);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r2.menuImg);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.sidebarCollapsed());
  }
}
function AppShellComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AppShellComponent_ng_container_7_li_1_Template, 8, 8, "li", 46)(2, AppShellComponent_ng_container_7_li_2_Template, 5, 6, "li", 47);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.children?.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r2.children?.length);
  }
}
function AppShellComponent_nav_16_ng_container_2_li_1_ng_container_2_li_1_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 55);
    \u0275\u0275listener("click", function AppShellComponent_nav_16_ng_container_2_li_1_ng_container_2_li_1_li_2_Template_li_click_0_listener() {
      const grandChild_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.openMenuTab(grandChild_r11.menuUrl, grandChild_r11.menuName, grandChild_r11.menuNo));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const grandChild_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275property("nzSelected", ctx_r2.isMenuActive(grandChild_r11.menuUrl));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", grandChild_r11.menuName, " ");
  }
}
function AppShellComponent_nav_16_ng_container_2_li_1_ng_container_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 62)(1, "ul");
    \u0275\u0275template(2, AppShellComponent_nav_16_ng_container_2_li_1_ng_container_2_li_1_li_2_Template, 2, 2, "li", 54);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const child_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("nzTitle", child_r12.menuName)("nzIcon", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", child_r12.children);
  }
}
function AppShellComponent_nav_16_ng_container_2_li_1_ng_container_2_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 55);
    \u0275\u0275listener("click", function AppShellComponent_nav_16_ng_container_2_li_1_ng_container_2_li_2_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const child_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openMenuTab(child_r12.menuUrl, child_r12.menuName, child_r12.menuNo));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const child_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("nzSelected", ctx_r2.isMenuActive(child_r12.menuUrl));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", child_r12.menuName, " ");
  }
}
function AppShellComponent_nav_16_ng_container_2_li_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AppShellComponent_nav_16_ng_container_2_li_1_ng_container_2_li_1_Template, 3, 3, "li", 61)(2, AppShellComponent_nav_16_ng_container_2_li_1_ng_container_2_li_2_Template, 2, 2, "li", 47);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const child_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", child_r12.children?.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !child_r12.children?.length);
  }
}
function AppShellComponent_nav_16_ng_container_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 62)(1, "ul");
    \u0275\u0275template(2, AppShellComponent_nav_16_ng_container_2_li_1_ng_container_2_Template, 3, 2, "ng-container", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("nzTitle", item_r14.menuName)("nzIcon", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", item_r14.children);
  }
}
function AppShellComponent_nav_16_ng_container_2_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 55);
    \u0275\u0275listener("click", function AppShellComponent_nav_16_ng_container_2_li_2_Template_li_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const item_r14 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openMenuTab(item_r14.menuUrl, item_r14.menuName, item_r14.menuNo));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzSelected", ctx_r2.isMenuActive(item_r14.menuUrl));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r14.menuName, " ");
  }
}
function AppShellComponent_nav_16_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AppShellComponent_nav_16_ng_container_2_li_1_Template, 3, 3, "li", 61)(2, AppShellComponent_nav_16_ng_container_2_li_2_Template, 2, 2, "li", 47);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r14.children?.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r14.children?.length);
  }
}
function AppShellComponent_nav_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nav", 59)(1, "ul", 60);
    \u0275\u0275template(2, AppShellComponent_nav_16_ng_container_2_Template, 3, 2, "ng-container", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.topbarMenuItems());
  }
}
function AppShellComponent_li_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 63)(1, "a", 64);
    \u0275\u0275listener("click", function AppShellComponent_li_33_Template_a_click_1_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openHrmManagementSystem($event));
    });
    \u0275\u0275element(2, "i", 65);
    \u0275\u0275elementStart(3, "span", 32);
    \u0275\u0275text(4, "HR Management System");
    \u0275\u0275elementEnd()()();
  }
}
function AppShellComponent_ul_48_li_1_i_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 71);
    \u0275\u0275listener("click", function AppShellComponent_ul_48_li_1_i_4_Template_i_click_0_listener($event) {
      \u0275\u0275restoreView(_r20);
      const tab_r18 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeTab($event, tab_r18));
    });
    \u0275\u0275elementEnd();
  }
}
function AppShellComponent_ul_48_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 68)(1, "a", 69);
    \u0275\u0275listener("click", function AppShellComponent_ul_48_li_1_Template_a_click_1_listener() {
      const tab_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.tabs.switchTab(tab_r18.path));
    })("contextmenu", function AppShellComponent_ul_48_li_1_Template_a_contextmenu_1_listener($event) {
      const tab_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      const tabStripContextMenu_r19 = \u0275\u0275reference(50);
      return \u0275\u0275resetView(ctx_r2.onTabContextMenu($event, tab_r18, tabStripContextMenu_r19));
    });
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AppShellComponent_ul_48_li_1_i_4_Template, 1, 0, "i", 70);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r18 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.tabs.activePath() === tab_r18.path);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r18.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", tab_r18.closable);
  }
}
function AppShellComponent_ul_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 66);
    \u0275\u0275template(1, AppShellComponent_ul_48_li_1_Template, 5, 4, "li", 67);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.tabs.tabs());
  }
}
function AppShellComponent_app_external_tab_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-external-tab", 72);
  }
  if (rf & 2) {
    const tab_r21 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("hidden", ctx_r2.tabs.activePath() !== tab_r21.path)("url", tab_r21.path)("reloadToken", tab_r21.reloadToken);
  }
}
function AppShellComponent_app_force_password_change_modal_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-force-password-change-modal");
  }
}
function AppShellComponent_app_lock_screen_overlay_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-lock-screen-overlay", 73);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("user", ctx_r2.user());
  }
}
var I18N_KEYS3 = [
  "shell.tab.close",
  "shell.tab.closeAll",
  "shell.tab.closeLeft",
  "shell.tab.closeRight",
  "topbar.changePassword",
  "topbar.hrmAccessDenied"
];
var AppShellComponent = class _AppShellComponent {
  constructor(auth, i18n, nzContextMenuService, tabs, lockScreen, theme, message, router) {
    this.auth = auth;
    this.i18n = i18n;
    this.nzContextMenuService = nzContextMenuService;
    this.tabs = tabs;
    this.lockScreen = lockScreen;
    this.theme = theme;
    this.message = message;
    this.router = router;
    effect(() => this.showMenuContext(this.tabs.activeMenuNo()));
  }
  auth;
  i18n;
  nzContextMenuService;
  tabs;
  lockScreen;
  theme;
  message;
  router;
  themeSettings;
  changePasswordModal;
  user = signal(
    null,
    ...ngDevMode ? [{ debugName: "user" }] : (
      /* istanbul ignore next */
      []
    )
  );
  menu = signal(
    [],
    ...ngDevMode ? [{ debugName: "menu" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Nguồn dữ liệu duy nhất là ThemeService.menuSize - để nút hamburger (toggleSidebar) và drawer
   * "Cài đặt giao diện" (ThemeSettingsComponent) luôn đồng bộ với nhau, thay vì 2 state tách rời. */
  sidebarCollapsed = computed(
    () => this.theme.menuSize() === "condensed",
    ...ngDevMode ? [{ debugName: "sidebarCollapsed" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** menuNo của submenu cấp 1 (menu cha) đang mở - dùng để đảm bảo chỉ 1 menu cha mở submenu tại 1 thời điểm. */
  openTopMenuNo = signal(
    null,
    ...ngDevMode ? [{ debugName: "openTopMenuNo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** menuNo của submenu cấp 2 (menu con) đang mở - reset khi đổi menu cha. */
  openChildMenuNo = signal(
    null,
    ...ngDevMode ? [{ debugName: "openChildMenuNo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Tab đang được click chuột phải - dùng làm mốc cho các lựa chọn Đóng tab / Đóng bên trái / Đóng bên phải. */
  contextMenuTab = signal(
    null,
    ...ngDevMode ? [{ debugName: "contextMenuTab" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Menu ngang hiển thị trên topbar - tương đương #topbar-menu-live trong fragments/topbar.html
   *  (bản Thymeleaf cũ): rỗng ban đầu, chỉ đổ dữ liệu khi người dùng bấm 1 menu ở sidebar (hoặc chính
   *  topbar) - xem showMenuContext(). */
  topbarMenuItems = signal(
    [],
    ...ngDevMode ? [{ debugName: "topbarMenuItems" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Trang Thymeleaf cũ đã được migrate sang Angular - map URL cũ (lưu trong DB menu) sang route Angular. */
  static MIGRATED_ROUTES = {
    "/ess/infoApply/viewDeptOtApplyInfo": "/dept-ot-apply-info",
    "/ess/viewDept/ManageEmpPositionInfoList": "/manage-emp-position-info",
    "/ess/viewDept/ManageCountInfoList": "/manage-count-info",
    "/evs/manage/viewEvsResultEmp": "/evs-result-emp",
    "/ess/viewDept/viewManageEvsResultEmpList": "/manage-evs-result-emp",
    "/hrm/empinfo/viewHTSVCardInfoList": "/hr-card-info",
    "/hrm/empinfo/viewTempEmpInfoList": "/view-temp-emp-info-list",
    "/hrm/empinfo/viewWorkInformation": "/work-experience-info",
    "/hrm/empinfo/emergencyAddressSearch": "/emergency-address-info",
    "/hrm/empinfo/addressSearch": "/address-info",
    "/hrm/empinfo/familySearch": "/family-info",
    "/hrm/empinfo/educationSearch": "/education-info",
    "/hrm/empinfo/recognitionSearch": "/recognition-info",
    "/hrm/empinfo/punishmentSearch": "/punishment-info",
    "/hrm/empinfo/viewQualification": "/manage-qualification-info",
    "/pa/salary/viewPaMonthPersonInfoEssList": "/pa-month-person-info",
    "/pa/salary/viewPaFormula": "/view-pa-formula",
    "/pa/salary/viewPaInputItemParam": "/view-pa-input-item-param",
    "/pa/salary/viewPaInputItemData": "/view-pa-input-item-data",
    "/pa/salary/viewPaComputeItemParamList": "/view-pa-compute-item-param-list",
    "/pa/salary/viewPaResult": "/view-pa-result",
    "/ess/change/changeUser": "/change-user",
    "/ess/empinfo/viewPersonalInfoForEss": "/personal-info",
    "/ess/empinfo/viewEssPersonalInfo": "/work-info",
    "/ess/empinfo/viewQualificationInfo": "/qualification-info",
    "/ess/empinfo/viewEssApplyInfo": "/apply-info",
    "/hrm/approve/viewEssApplyInfo": "/hrm-approve-apply-info",
    "/ess/infoApply/viewPiciOtAffirmLBatchList": "/ot-apply-batch-info",
    "/ar/attendanceMintenance/viewArOvertimeManagent_fast": "/ot-apply-batch-info",
    "/ess/infoApplyAttendance/viewApplyAttenanceBatchInfoList": "/apply-attendance-batch-info",
    "/ar/attendanceMintenance/viewApplyAttenanceManagentInfoList_new": "/apply-attendance-batch-info",
    "/ess/infoApplyAttendance/viewAttendanceExForBatchInfoList": "/attendance-ex-batch-info",
    "/ess/infoApplyAttendance/viewCheckAttencetanceExForBatchList": "/check-attendance-ex-for-batch",
    "/ess/infoApplyAttendance/viewCoordApplyAttendanceInfoList": "/coord-apply-attendance-info",
    "/ess/infoApply/viewCoordApplyOtInfoList": "/coord-apply-ot-info-list",
    "/ess/viewDept/viewEmpCalendar": "/ess-view-emp-calendar",
    "/ess/infoApply/viewOtReport": "/view-ot-report",
    "/ess/viewDept/viewArPersonalList": "/view-ar-personal-list",
    "/ess/viewDept/viewOtApplyPersonalList": "/view-ot-apply-personal-list",
    "/ar/attendanceSettings/viewClassCalendar": "/view-class-calendar",
    "/ar/attendanceSettings/viewCycleParameter": "/view-cycle-parameter",
    "/ar/attendanceSettings/viewCycle": "/view-cycle",
    "/pa/workManagement/viewPaPaySchedule": "/view-pa-pay-schedule",
    "/pa/salarycode/viewSalaryCodeList": "/view-salary-code",
    "/pa/workManagement/viewPaWorkFlow": "/view-pa-work-flow",
    "/pa/workManagement/viewPaPayObj": "/view-pa-pay-obj",
    "/pa/workManagement/viewPaEmpAccount": "/view-pa-emp-account",
    "/pa/workManagement/payStub": "/view-pa-pay-stub",
    "/pa/wagebase/viewPaSupervisor": "/view-pa-supervisor",
    "/ar/attendanceSettings/viewDynamicGroup": "/view-dynamic-group",
    "/ar/attendanceSettings/viewArItem": "/view-ar-item",
    "/ar/attendanceSettings/viewArItemParamList": "/view-ar-item-param-list",
    "/ar/attendanceSettings/viewItemParameter": "/view-item-parameter",
    "/ar/attendanceSettings/viewShift": "/view-shift",
    "/ar/attendanceSettings/viewStatutoryHolidays": "/view-statutory-holidays",
    "/ar/attendanceSettings/viewCompanyCalendar": "/view-company-calendar",
    "/ar/attendanceSettings/viewEmpCalendar": "/view-emp-calendar",
    "/ar/attendanceSettings/viewSummaryParamItem": "/view-summary-param-item",
    "/ar/attendanceSettings/viewSummaryItem": "/view-summary-item",
    "/ar/attendanceSettings/viewSummaryFormula": "/view-summary-formula",
    "/ar/attendanceSettings/viewAttendanceKeeper": "/view-attendance-keeper",
    "/ar/attendanceSettings/viewDepartManagerList": "/view-depart-manager-list",
    "/ar/attendanceMintenance/viewArCardRecord": "/view-ar-card-record",
    "/ar/attendanceMintenance/viewArCardRecordDay": "/view-ar-card-record-day",
    "/ar/attendanceMintenance/viewArCardRecordMeal": "/view-ar-card-record-meal",
    "/ar/attendanceMintenance/viewArCardRecordForSelf": "/view-ar-card-record-for-self",
    "/ar/attendanceMintenance/viewAttendanceManagentForSerchInfoList": "/attendance-search",
    "/ar/attendanceMintenance/viewSearchApplyOtInfoList": "/search-apply-ot-info-list",
    "/ar/attendanceSettings/viewVacEmpList": "/view-vac-emp-list",
    "/ar/attendanceMintenance/viewArDetailCalculate": "/view-ar-detail-calculate",
    "/ar/attendanceMintenance/addEmpShiftView": "/add-emp-shift",
    "/ess/viewDept/viewEntryInfoList": "/view-entry-info-list",
    "/ess/tempEmp/viewMonthDetailList": "/view-month-detail-list",
    "/ess/workgroup/viewWorkGroupExperList": "/workgroup-exper-list",
    "/ess/deptEmpAtt/viewArShiftGroupList": "/view-ar-shift-group-list",
    "/ess/workgroup/viewPersonShiftList": "/person-shift-list",
    "/ess/infoApplyAttendance/viewSSTApplyAttendance": "/sst-apply-attendance",
    "/ess/infoApplyAttendance/viewApplyAttendanceInfoList": "/apply-attendance-info-list",
    "/ess/infoApply/viewSSTOtApplyInfo": "/sst-ot-apply-info",
    "/ess/infoApply/viewPOtApplyInfoList": "/ot-apply-info-list",
    "/ess/infoApply/viewShowCwaAbnormalApply": "/cwa-abnormal-apply",
    "/ess/infoApplyLeave/viewApplyLeaveInfoList": "/apply-leave-info-list",
    "/ess/infoApplyAttendance/viewAttendancePersonalInfoList": "/attendance-personal-info-list",
    "/ess/infoApply/viewPersonOtApplyInfoList": "/person-ot-apply-info-list",
    "/ess/viewDept/viewArPersonalSelfList": "/view-ar-personal-self-list",
    "/ess/viewDept/viewOtApplyPersonalSelfList": "/view-ot-apply-personal-self-list",
    "/ess/viewDept/yearUseInfo": "/year-use-info",
    "/evs/manage/viewRegPersonalTarget": "/reg-personal-target",
    "/evs/manage/viewResumeList": "/evs-resume-list",
    "/evs/manage/viewEvsSchedulePanel": "/evs-schedule-panel",
    "/evs/manage/viewEvsParamPanel": "/evs-param-panel",
    "/evs/manage/viewEvsDistributionRatePanel": "/evs-distribution-rate-panel",
    "/evs/manage/viewEvsAffirmorSetup": "/evs-affirmor-setup",
    "/evs/manage/viewEvsResult": "/evs-result",
    "/evs/manage/viewEvsItemPanel": "/evs-item-panel",
    "/evs/manage/viewEvsFormulaList": "/evs-formula-list",
    "/evs/manage/viewConfirmTarget1": "/confirm-target1",
    "/evs/manage/viewConfirmTarget2": "/confirm-target2",
    "/evs/manage/viewEvsBySelfHTSV": "/evs-by-self-htsv",
    "/evs/manage/viewAffirmTarget1": "/affirm-target1",
    "/evs/manage/viewAffirmTarget2": "/affirm-target2",
    "/evs/manage/viewEvsBySelfSSTAbility": "/evs-by-self-sst-ability",
    "/evs/manage/viewAffirmTarget1Ability": "/affirm-target1-ability",
    "/evs/manage/viewAffirmTarget2Ability": "/affirm-target2-ability",
    "/ess/infoApply/viewApprovalEmail": "/view-approval-email",
    "/ess/infoApply/viewApprovaledEmail": "/view-approvaled-email",
    "/ess/infoApply/viewNoticeedEmail": "/view-noticeed-email",
    "/hrm/contractInfo/viewNOContractInfo": "/contract-info-list",
    "/hrm/contractInfo/viewExpiredContract": "/expired-contract-list",
    "/hrm/contractInfo/viewContractInfoForSearch": "/contract-info-search",
    "/hrm/contractInfo/viewContractChangeList": "/contract-change-list",
    "/hrm/recruitManage/viewRecruitList": "/view-recruit-list",
    "/hrm/recruitManage/viewRecruitBatchList": "/view-recruit-batch-list",
    "/hrm/empinfo/viewStartPoint": "/view-start-point",
    "/hrm/recruitManage/viewExperienceBatchList": "/view-experience-batch-list",
    "/hrm/empinfo/photoImport": "/photo-import",
    "/ess/arConfirm/viewAttendanceExConfirm": "/attendance-ex-confirm",
    "/ess/arConfirm/viewLeaveConfirmList": "/leave-confirm",
    "/org/orgManage/viewResumeList": "/view-resume-list",
    "/org/orgManage/viewResumeProcess": "/view-resume-process",
    "/org/orgManage/viewComposeOrg": "/view-compose-org",
    "/org/orgManage/viewOrgBusiness": "/view-org-business",
    "/org/orgManage/viewOrgCostCenter": "/view-org-cost-center",
    "/org/orgManage/viewDeptManagerCheck": "/view-dept-manager-check",
    "/org/orgManage/viewCurrentOrgInfo": "/view-current-org-info",
    "/org/orgManage/viewOrgInfo": "/view-org-info",
    "/org/orgManage/viewHistoryOrgInfo": "/view-history-org-info",
    "/sys/basicMaintenance/viewMenuList": "/view-menu-list",
    "/sys/basicMaintenance/viewMenuParamList": "/view-menu-param-list",
    "/sys/basicMaintenance/viewCodeManage": "/view-code-manage",
    "/sys/basicMaintenance/viewCodePamers": "/view-code-param-list",
    "/sys/basicMaintenance/viewCompany": "/view-company",
    "/sys/syRole/viewRolesGroup": "/view-roles-group"
  };
  angularRouteFor(menuUrl) {
    if (!menuUrl)
      return null;
    const [path, query] = menuUrl.split("?");
    const route = _AppShellComponent.MIGRATED_ROUTES[path];
    if (!route)
      return null;
    return query ? `${route}?${query}` : route;
  }
  /** Mở menu dưới dạng tab - route Angular nếu đã migrate, ngược lại tab 'external' (Thymeleaf). */
  openMenuTab(menuUrl, menuName, menuNo) {
    if (!menuUrl)
      return;
    const ngRoute = this.angularRouteFor(menuUrl);
    this.tabs.openTab(ngRoute ?? menuUrl, menuName, ngRoute ? "route" : "external", menuNo);
  }
  /** Tìm đường dẫn (menu gốc -> ... -> chính nó) của 1 menuNo trong cây menu 3 cấp - dùng để xác định
   *  "menu cha trực tiếp + các menu cùng cấp với menu cha" cần hiển thị ở topbar (xem showMenuContext). */
  findMenuPath(items, menuNo) {
    for (const item of items) {
      if (item.menuNo === menuNo)
        return [item];
      if (item.children?.length) {
        const childPath = this.findMenuPath(item.children, menuNo);
        if (childPath)
          return [item, ...childPath];
      }
    }
    return null;
  }
  /** Cập nhật menu ngang trên topbar (topbarMenuItems) theo đúng cơ chế "menu theo ngữ cảnh" của
   *  fragments/topbar.html bản Thymeleaf cũ (initContextualTopbarMenu/showMenuContext): hiển thị menu
   *  cha trực tiếp của menu vừa chọn cùng các menu cùng cấp với menu cha đó (chung MENU_PARENT_NO) -
   *  KHÔNG phải toàn bộ cây và KHÔNG phải con của menu vừa chọn. menuNo rỗng/không tìm thấy -> ẩn topbar. */
  showMenuContext(menuNo) {
    if (!menuNo) {
      this.topbarMenuItems.set([]);
      return;
    }
    const path = this.findMenuPath(this.menu(), menuNo);
    if (!path) {
      this.topbarMenuItems.set([]);
      return;
    }
    const ancestors = path.slice(0, -1);
    if (ancestors.length === 0) {
      this.topbarMenuItems.set(this.menu());
      return;
    }
    const grandAncestors = ancestors.slice(0, -1);
    const siblings = grandAncestors.length > 0 ? grandAncestors[grandAncestors.length - 1].children ?? [] : this.menu();
    this.topbarMenuItems.set(siblings);
  }
  /** Chặn điều hướng sang HR Management System (/sys/hrm) nếu user không thuộc role group nào có
   *  SYS_TYPE = 0 - cờ hasSysTypeZeroMenus đã được BE tính đúng theo SY_ROLE_GROUP.SYS_TYPE (xem
   *  PermissionServiceImpl.hasRoleGroupWithSysType). *ngIf trên li cha đã ẩn link này khi không có
   *  quyền, hàm này chỉ là lớp phòng vệ bổ sung (vd: quyền vừa bị thu hồi nhưng trang chưa reload). */
  openHrmManagementSystem(event) {
    if (this.user()?.hasSysTypeZeroMenus) {
      return;
    }
    event.preventDefault();
    this.message.error(this.i18n.t("topbar.hrmAccessDenied", "B\u1EA1n kh\xF4ng c\xF3 quy\u1EC1n truy c\u1EADp v\xE0o HR Management System"));
  }
  /** Tab hiện đang active của 1 menu item - dùng để tô sáng đúng item trong nz-menu. */
  isMenuActive(menuUrl) {
    if (!menuUrl)
      return false;
    const key = this.angularRouteFor(menuUrl) ?? menuUrl;
    return this.tabs.activePath() === key;
  }
  closeTab(event, tab) {
    event.preventDefault();
    event.stopPropagation();
    this.tabs.closeTab(tab.path);
  }
  trackByPath(_index, tab) {
    return tab.path;
  }
  /** Mở menu chuột phải trên 1 tab của tab-strip. */
  onTabContextMenu(event, tab, menu) {
    this.contextMenuTab.set(tab);
    this.nzContextMenuService.create(event, menu);
  }
  closeTabFromContextMenu() {
    const tab = this.contextMenuTab();
    if (tab)
      this.tabs.closeTab(tab.path);
  }
  closeAllTabsFromContextMenu() {
    this.tabs.closeAllTabs();
  }
  closeTabsToLeftFromContextMenu() {
    const tab = this.contextMenuTab();
    if (tab)
      this.tabs.closeTabsToLeft(tab.path);
  }
  closeTabsToRightFromContextMenu() {
    const tab = this.contextMenuTab();
    if (tab)
      this.tabs.closeTabsToRight(tab.path);
  }
  /** Còn tab (đóng được) nào bên trái tab đang bấm chuột phải không - dùng để disable menu item. */
  canCloseTabsToLeft() {
    const tab = this.contextMenuTab();
    if (!tab)
      return false;
    const idx = this.tabs.tabs().findIndex((t) => t.path === tab.path);
    return idx > 0 && this.tabs.tabs().slice(0, idx).some((t) => t.closable);
  }
  /** Còn tab (đóng được) nào bên phải tab đang bấm chuột phải không - dùng để disable menu item. */
  canCloseTabsToRight() {
    const tab = this.contextMenuTab();
    if (!tab)
      return false;
    const idx = this.tabs.tabs().findIndex((t) => t.path === tab.path);
    return idx !== -1 && this.tabs.tabs().slice(idx + 1).some((t) => t.closable);
  }
  /** sysType đang dùng để tải menu() hiện tại - tránh gọi lại API khi điều hướng loanh quanh trong
   *  cùng 1 "chế độ" (vd giữa các trang ESS với nhau). Cũng dùng để truyền chế độ ess/hrm cho
   *  NotificationsDropdownComponent (xem menuSysType/notificationMode bên dưới). */
  currentMenuSysType = null;
  menuSysType = signal(
    "1",
    ...ngDevMode ? [{ debugName: "menuSysType" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** '0' = HR Management System -> đổi dropdown thông báo sang chế độ 'hrm' (Chi tiết thay đổi thông
   *  tin/Nghỉ phép/Nghỉ bất thường chờ xác nhận); còn lại ('1' = ESS) -> chế độ 'ess'. */
  notificationMode = computed(
    () => this.menuSysType() === "0" ? "hrm" : "ess",
    ...ngDevMode ? [{ debugName: "notificationMode" }] : (
      /* istanbul ignore next */
      []
    )
  );
  async ngOnInit() {
    await this.auth.checkSession();
    this.user.set(this.auth.currentUser());
    await this.syncMenuForActiveRoute();
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      this.syncMenuForActiveRoute();
    });
    this.lockScreen.start();
    this.i18n.loadKeys(I18N_KEYS3);
  }
  /** Duyệt từ root xuống route con đang active để lấy data.sysType sâu nhất được khai báo - đến lúc
   *  AppShellComponent được khởi tạo, Router đã resolve xong toàn bộ cây route (guards/data) cho lần
   *  điều hướng hiện tại nên đọc snapshot ở đây là an toàn.
   *  Nếu route đích KHÔNG khai báo sysType (đa số route, kể cả các route nằm trong menu SYS_TYPE=0
   *  như hr-card-info, contract-info-list... vì cùng 1 component có thể được cả 2 bộ menu trỏ tới) thì
   *  GIỮ NGUYÊN chế độ hiện tại (sticky) thay vì mặc định về '1' (ESS) - tránh sidebar tự nhảy về menu
   *  ESS chỉ vì bấm sang 1 trang bất kỳ trong lúc đang ở HR Management System. sysType chỉ thực sự đổi
   *  khi route đích khai báo tường minh (vd 'hrm-dashboard' -> '0', 'dashboard' -> '1'). */
  resolveMenuSysType() {
    let route = this.router.routerState.snapshot.root;
    let sysType = null;
    while (route) {
      const routeSysType = route.data["sysType"];
      if (routeSysType)
        sysType = routeSysType;
      route = route.firstChild;
    }
    return sysType ?? this.currentMenuSysType ?? "1";
  }
  async syncMenuForActiveRoute() {
    const sysType = this.resolveMenuSysType();
    if (sysType === this.currentMenuSysType)
      return;
    this.currentMenuSysType = sysType;
    this.menuSysType.set(sysType);
    this.menu.set(await this.auth.getMenu(sysType));
  }
  ngOnDestroy() {
    this.lockScreen.stop();
  }
  toggleSidebar() {
    this.theme.setMenuSize(this.sidebarCollapsed() ? "default" : "condensed");
  }
  /** Đóng submenu cấp 1 khác khi 1 menu cha được mở - chỉ hiển thị menu con của 1 menu cha duy nhất. */
  onTopSubmenuOpenChange(menuNo, open) {
    if (open) {
      this.openTopMenuNo.set(menuNo);
      this.openChildMenuNo.set(null);
    } else if (this.openTopMenuNo() === menuNo) {
      this.openTopMenuNo.set(null);
    }
  }
  /** Đóng submenu cấp 2 khác trong cùng menu cha khi 1 menu con được mở. */
  onChildSubmenuOpenChange(menuNo, open) {
    if (open) {
      this.openChildMenuNo.set(menuNo);
    } else if (this.openChildMenuNo() === menuNo) {
      this.openChildMenuNo.set(null);
    }
  }
  openThemeSettings() {
    this.themeSettings.open();
  }
  openChangePasswordModal() {
    this.changePasswordModal.open();
  }
  logout() {
    this.auth.logout();
  }
  static \u0275fac = function AppShellComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppShellComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzContextMenuService), \u0275\u0275directiveInject(TabService), \u0275\u0275directiveInject(LockScreenService), \u0275\u0275directiveInject(ThemeService), \u0275\u0275directiveInject(NzMessageService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppShellComponent, selectors: [["app-shell"]], viewQuery: function AppShellComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(ThemeSettingsComponent, 5)(ChangePasswordModalComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.themeSettings = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.changePasswordModal = _t.first);
    }
  }, decls: 72, vars: 46, consts: [["userMenu", "nzDropdownMenu"], ["tabStripContextMenu", "nzDropdownMenu"], [1, "app-shell-layout"], ["nzCollapsible", "", 1, "app-sider", 3, "nzCollapsed", "nzTrigger", "nzWidth", "nzCollapsedWidth"], [1, "logo-box"], ["routerLink", "/dashboard", 1, "d-flex", "align-items-center", "text-white", "text-decoration-none", "px-2"], [1, "bx", "bx-buildings", "fs-22", "me-2"], ["class", "fw-bold", 4, "ngIf"], ["nz-menu", "", "nzMode", "inline", "nzTheme", "dark", 3, "nzInlineIndent", "nzInlineCollapsed"], [4, "ngFor", "ngForOf"], [1, "app-header"], [1, "d-flex", "align-items-center", "h-100"], [1, "d-flex", "align-items-center", "flex-shrink-0"], ["type", "button", 1, "button-toggle-menu", "me-2", 3, "click"], ["icon", "solar:hamburger-menu-broken", 1, "fs-24", "align-middle"], [1, "fw-bold", "fs-18"], ["class", "topbar-horizontal-menu flex-grow-1 mx-2", 4, "ngIf"], [1, "d-flex", "align-items-center", "gap-1", "topbar-actions", "ms-auto", "flex-shrink-0"], [3, "mode"], [1, "topbar-item", "d-none", "d-md-flex"], ["type", "button", 1, "topbar-button", 3, "click"], ["icon", "solar:settings-bold-duotone", 1, "fs-24", "align-middle"], ["nz-dropdown", "", "nzTrigger", "click", 1, "topbar-item", 3, "nzDropdownMenu"], [1, "topbar-button", "d-flex", "align-items-center", "gap-2"], ["width", "32", "alt", "avatar", 1, "rounded-circle", 3, "src"], [1, "d-none", "d-md-inline"], ["nz-menu", "", 1, "user-dropdown-menu"], [1, "dropdown-header-item"], ["nz-menu-divider", ""], ["nz-menu-item", "", 4, "ngIf"], ["nz-menu-item", "", 3, "click"], [1, "fas", "fa-key", "fs-18", "align-middle", "me-1"], [1, "align-middle"], [1, "bx", "bx-lock", "fs-18", "align-middle", "me-1"], ["nz-menu-item", "", "nzDanger", "", 3, "click"], [1, "bx", "bx-log-out", "fs-18", "align-middle", "me-1"], [1, "app-content"], ["class", "nav nav-tabs tab-strip", 4, "ngIf"], ["nz-menu", ""], ["nz-menu-item", "", 3, "click", "nzDisabled"], [1, "container-fluid"], [3, "hidden"], [3, "hidden", "url", "reloadToken", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [3, "user", 4, "ngIf"], [1, "fw-bold"], ["nz-submenu", "", 3, "nzIcon", "nzOpen", "nzOpenChange", 4, "ngIf"], ["nz-menu-item", "", 3, "nzSelected", "click", 4, "ngIf"], ["nz-submenu", "", 3, "nzOpenChange", "nzIcon", "nzOpen"], ["title", "", 1, "d-flex", "align-items-center", "gap-2"], ["icon", "solar:folder-bold-duotone", 4, "ngIf"], ["icon", "solar:folder-bold-duotone"], ["nz-submenu", "", 3, "nzTitle", "nzIcon", "nzOpen", "nzOpenChange", 4, "ngIf"], ["nz-submenu", "", 3, "nzOpenChange", "nzTitle", "nzIcon", "nzOpen"], ["nz-menu-item", "", 3, "nzSelected", "click", 4, "ngFor", "ngForOf"], ["nz-menu-item", "", 3, "click", "nzSelected"], [1, "d-flex", "align-items-center", "gap-2"], ["icon", "solar:menu-dots-bold-duotone", 4, "ngIf"], ["icon", "solar:menu-dots-bold-duotone"], [1, "topbar-horizontal-menu", "flex-grow-1", "mx-2"], ["nz-menu", "", "nzMode", "horizontal", "nzTheme", "dark", 1, "topbar-menu-nav"], ["nz-submenu", "", 3, "nzTitle", "nzIcon", 4, "ngIf"], ["nz-submenu", "", 3, "nzTitle", "nzIcon"], ["nz-menu-item", ""], ["href", "/sys/hrm", "target", "_blank", "rel", "noopener noreferrer", 1, "d-flex", "align-items-center", "text-reset", "text-decoration-none", 3, "click"], [1, "bx", "bx-user-circle", "fs-18", "align-middle", "me-1"], [1, "nav", "nav-tabs", "tab-strip"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "nav-item"], ["href", "javascript:void(0)", 1, "nav-link", "d-flex", "align-items-center", "gap-2", 3, "click", "contextmenu"], ["class", "bx bx-x tab-strip-close", 3, "click", 4, "ngIf"], [1, "bx", "bx-x", "tab-strip-close", 3, "click"], [3, "hidden", "url", "reloadToken"], [3, "user"]], template: function AppShellComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nz-layout", 2)(1, "nz-sider", 3)(2, "div", 4)(3, "a", 5);
      \u0275\u0275element(4, "i", 6);
      \u0275\u0275template(5, AppShellComponent_span_5_Template, 2, 0, "span", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "ul", 8);
      \u0275\u0275template(7, AppShellComponent_ng_container_7_Template, 3, 2, "ng-container", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "nz-layout")(9, "nz-header", 10)(10, "div", 11)(11, "div", 12)(12, "button", 13);
      \u0275\u0275listener("click", function AppShellComponent_Template_button_click_12_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275element(13, "iconify-icon", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "span", 15);
      \u0275\u0275text(15, "VHR System");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(16, AppShellComponent_nav_16_Template, 3, 1, "nav", 16);
      \u0275\u0275elementStart(17, "div", 17);
      \u0275\u0275element(18, "app-notifications-dropdown", 18);
      \u0275\u0275elementStart(19, "div", 19)(20, "button", 20);
      \u0275\u0275listener("click", function AppShellComponent_Template_button_click_20_listener() {
        return ctx.openThemeSettings();
      });
      \u0275\u0275element(21, "iconify-icon", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 22)(23, "span", 23);
      \u0275\u0275element(24, "img", 24);
      \u0275\u0275elementStart(25, "span", 25);
      \u0275\u0275text(26);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "nz-dropdown-menu", null, 0)(29, "ul", 26)(30, "li", 27);
      \u0275\u0275text(31);
      \u0275\u0275elementEnd();
      \u0275\u0275element(32, "li", 28);
      \u0275\u0275template(33, AppShellComponent_li_33_Template, 5, 0, "li", 29);
      \u0275\u0275elementStart(34, "li", 30);
      \u0275\u0275listener("click", function AppShellComponent_Template_li_click_34_listener() {
        return ctx.openChangePasswordModal();
      });
      \u0275\u0275element(35, "i", 31);
      \u0275\u0275elementStart(36, "span", 32);
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "li", 30);
      \u0275\u0275listener("click", function AppShellComponent_Template_li_click_39_listener() {
        return ctx.lockScreen.lock();
      });
      \u0275\u0275element(40, "i", 33);
      \u0275\u0275elementStart(41, "span", 32);
      \u0275\u0275text(42, "Kh\xF3a m\xE0n h\xECnh");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "li", 34);
      \u0275\u0275listener("click", function AppShellComponent_Template_li_click_43_listener() {
        return ctx.logout();
      });
      \u0275\u0275element(44, "i", 35);
      \u0275\u0275elementStart(45, "span", 32);
      \u0275\u0275text(46, "\u0110\u0103ng xu\u1EA5t");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(47, "nz-content", 36);
      \u0275\u0275template(48, AppShellComponent_ul_48_Template, 2, 1, "ul", 37);
      \u0275\u0275elementStart(49, "nz-dropdown-menu", null, 1)(51, "ul", 38)(52, "li", 39);
      \u0275\u0275listener("click", function AppShellComponent_Template_li_click_52_listener() {
        return ctx.closeTabFromContextMenu();
      });
      \u0275\u0275text(53);
      \u0275\u0275pipe(54, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "li", 30);
      \u0275\u0275listener("click", function AppShellComponent_Template_li_click_55_listener() {
        return ctx.closeAllTabsFromContextMenu();
      });
      \u0275\u0275text(56);
      \u0275\u0275pipe(57, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "li", 39);
      \u0275\u0275listener("click", function AppShellComponent_Template_li_click_58_listener() {
        return ctx.closeTabsToLeftFromContextMenu();
      });
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "li", 39);
      \u0275\u0275listener("click", function AppShellComponent_Template_li_click_61_listener() {
        return ctx.closeTabsToRightFromContextMenu();
      });
      \u0275\u0275text(62);
      \u0275\u0275pipe(63, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "div", 40)(65, "div", 41);
      \u0275\u0275element(66, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275template(67, AppShellComponent_app_external_tab_67_Template, 1, 3, "app-external-tab", 42);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(68, "app-theme-settings")(69, "app-change-password-modal");
      \u0275\u0275template(70, AppShellComponent_app_force_password_change_modal_70_Template, 1, 0, "app-force-password-change-modal", 43)(71, AppShellComponent_app_lock_screen_overlay_71_Template, 1, 1, "app-lock-screen-overlay", 44);
    }
    if (rf & 2) {
      const userMenu_r22 = \u0275\u0275reference(28);
      \u0275\u0275advance();
      \u0275\u0275property("nzCollapsed", ctx.sidebarCollapsed())("nzTrigger", null)("nzWidth", 240)("nzCollapsedWidth", 64);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", !ctx.sidebarCollapsed());
      \u0275\u0275advance();
      \u0275\u0275property("nzInlineIndent", 0)("nzInlineCollapsed", ctx.sidebarCollapsed());
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.menu());
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.topbarMenuItems().length);
      \u0275\u0275advance(2);
      \u0275\u0275property("mode", ctx.notificationMode());
      \u0275\u0275advance(4);
      \u0275\u0275property("nzDropdownMenu", userMenu_r22);
      \u0275\u0275advance(2);
      \u0275\u0275property("src", ctx.user()?.photoUrl || "/assets/images/users/dummy-avatar.jpg", \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.user()?.employeeName || ctx.user()?.username);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.user()?.employeeName || ctx.user()?.username || "HR System");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.user()?.hasSysTypeZeroMenus);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(38, 31, "topbar.changePassword", "C\u1EADp nh\u1EADt m\u1EADt kh\u1EA9u"));
      \u0275\u0275advance(10);
      \u0275\u0275styleProp("--%NS%tab-strip-height", ctx.tabs.tabs().length > 1 ? 40 : 0, "px");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.tabs.tabs().length > 1);
      \u0275\u0275advance(4);
      \u0275\u0275property("nzDisabled", !ctx.contextMenuTab()?.closable);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(54, 34, "shell.tab.close", "\u0110\xF3ng tab"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(57, 37, "shell.tab.closeAll", "\u0110\xF3ng t\u1EA5t c\u1EA3 tab"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzDisabled", !ctx.canCloseTabsToLeft());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(60, 40, "shell.tab.closeLeft", "\u0110\xF3ng t\u1EA5t c\u1EA3 tab b\xEAn tr\xE1i"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzDisabled", !ctx.canCloseTabsToRight());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(63, 43, "shell.tab.closeRight", "\u0110\xF3ng t\u1EA5t c\u1EA3 tab b\xEAn ph\u1EA3i"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("hidden", ctx.tabs.activeTabKind() !== "route");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.tabs.externalTabs())("ngForTrackBy", ctx.trackByPath);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.user()?.requirePasswordChange);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.lockScreen.locked());
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    RouterLink,
    RouterOutlet,
    NzLayoutModule,
    NzLayoutComponent,
    NzHeaderComponent,
    NzContentComponent,
    NzSiderComponent,
    NzMenuModule,
    NzMenuDirective,
    NzMenuItemComponent,
    NzSubMenuComponent,
    NzMenuDividerDirective,
    NzDropdownModule,
    NzDropdownDirective,
    NzDropdownMenuComponent,
    NzBadgeModule,
    NotificationsDropdownComponent,
    ThemeSettingsComponent,
    ForcePasswordChangeModalComponent,
    LockScreenOverlayComponent,
    ExternalTabComponent,
    ChangePasswordModalComponent,
    TranslatePipe
  ], styles: ["\n.app-shell-layout[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n.app-sider[_ngcontent-%COMP%] {\n  background: #dc6428;\n}\n.app-sider[_ngcontent-%COMP%]     .ant-menu-dark, \n.app-sider[_ngcontent-%COMP%]     .ant-menu-dark .ant-menu-sub, \n.app-sider[_ngcontent-%COMP%]     .ant-menu-dark .ant-menu-inline.ant-menu-sub, \n.app-sider[_ngcontent-%COMP%]     .ant-menu.ant-menu-dark .ant-menu-sub {\n  background: transparent !important;\n  color: #fff !important;\n  font-weight: 500;\n}\n.app-sider[_ngcontent-%COMP%]     .ant-menu-dark .ant-menu-item:hover, \n.app-sider[_ngcontent-%COMP%]     .ant-menu-dark .ant-menu-submenu-title:hover {\n  background-color: rgba(255, 255, 255, 0.12) !important;\n  color: #fff;\n}\n.app-sider[_ngcontent-%COMP%]     .ant-menu-dark .ant-menu-item, \n.app-sider[_ngcontent-%COMP%]     .ant-menu-dark .ant-menu-submenu-title {\n  padding-left: 16px !important;\n}\n.app-sider[_ngcontent-%COMP%]     .ant-menu-dark .ant-menu-sub .ant-menu-item, \n.app-sider[_ngcontent-%COMP%]     .ant-menu-dark .ant-menu-sub .ant-menu-submenu-title {\n  padding-left: 32px !important;\n}\n.app-sider[_ngcontent-%COMP%]     .ant-menu-dark .ant-menu-sub .ant-menu-sub .ant-menu-item, \n.app-sider[_ngcontent-%COMP%]     .ant-menu-dark .ant-menu-sub .ant-menu-sub .ant-menu-submenu-title {\n  padding-left: 48px !important;\n}\n.app-sider[_ngcontent-%COMP%]     .ant-menu-dark .ant-menu-title-content {\n  display: contents;\n}\n.app-sider[_ngcontent-%COMP%]     .ant-menu-dark iconify-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  min-width: 18px;\n  font-size: 18px;\n}\n.app-sider[_ngcontent-%COMP%]     .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected, \n.app-sider[_ngcontent-%COMP%]     .ant-menu-dark .ant-menu-submenu-selected > .ant-menu-submenu-title {\n  background-color: rgba(0, 0, 0, 0.18) !important;\n  color: #fff;\n}\n.logo-box[_ngcontent-%COMP%] {\n  height: 56px;\n  display: flex;\n  align-items: center;\n  padding: 0 12px;\n}\n.app-header[_ngcontent-%COMP%] {\n  background: #dc6428;\n  color: #fff;\n  padding: 0 16px;\n  height: 56px;\n  line-height: 56px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);\n}\n.app-content[_ngcontent-%COMP%] {\n  background: #f5f6fa;\n  height: calc(100vh - 56px);\n  overflow-y: auto;\n}\n.topbar-horizontal-menu[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  overflow-y: hidden;\n  height: 56px;\n  min-width: 0;\n}\n.topbar-horizontal-menu[_ngcontent-%COMP%]     .ant-menu-horizontal {\n  background: transparent !important;\n  border-bottom: none !important;\n  line-height: 54px;\n  white-space: nowrap;\n}\n.topbar-horizontal-menu[_ngcontent-%COMP%]     .ant-menu-horizontal > .ant-menu-item, \n.topbar-horizontal-menu[_ngcontent-%COMP%]     .ant-menu-horizontal > .ant-menu-submenu {\n  top: 0;\n  margin: 0 2px;\n  color: rgba(255, 255, 255, 0.85) !important;\n  border-bottom: 2px solid transparent !important;\n}\n.topbar-horizontal-menu[_ngcontent-%COMP%]     .ant-menu-horizontal > .ant-menu-item:hover, \n.topbar-horizontal-menu[_ngcontent-%COMP%]     .ant-menu-horizontal > .ant-menu-submenu:hover, \n.topbar-horizontal-menu[_ngcontent-%COMP%]     .ant-menu-horizontal > .ant-menu-item-selected, \n.topbar-horizontal-menu[_ngcontent-%COMP%]     .ant-menu-horizontal > .ant-menu-submenu-selected, \n.topbar-horizontal-menu[_ngcontent-%COMP%]     .ant-menu-horizontal > .ant-menu-submenu-open {\n  color: #fff !important;\n  border-bottom-color: #fff !important;\n}\n  .ant-menu-submenu-popup .ant-menu {\n  background-color: #dc6428 !important;\n}\n  .ant-menu-submenu-popup .ant-menu-item, \n  .ant-menu-submenu-popup .ant-menu-submenu-title {\n  color: rgba(255, 255, 255, 0.85) !important;\n}\n  .ant-menu-submenu-popup .ant-menu-item:hover, \n  .ant-menu-submenu-popup .ant-menu-item-selected, \n  .ant-menu-submenu-popup .ant-menu-submenu-title:hover, \n  .ant-menu-submenu-popup .ant-menu-submenu-selected > .ant-menu-submenu-title {\n  background-color: rgba(0, 0, 0, 0.18) !important;\n  color: #fff !important;\n}\n.button-toggle-menu[_ngcontent-%COMP%], \n.topbar-button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: inherit;\n  cursor: pointer;\n  padding: 6px 10px;\n  border-radius: 6px;\n}\n.button-toggle-menu[_ngcontent-%COMP%]:hover, \n.topbar-button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n}\n.user-dropdown-menu[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n.dropdown-header-item[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.85);\n}\n.tab-strip[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n  background: #fff;\n  overflow-x: auto;\n  flex-wrap: nowrap;\n  position: sticky;\n  top: 0;\n  z-index: 20;\n}\n.tab-strip[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.tab-strip-close[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  padding: 1px;\n}\n.tab-strip-close[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.08);\n}\n/*# sourceMappingURL=app-shell.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppShellComponent, [{
    type: Component,
    args: [{ selector: "app-shell", standalone: true, imports: [
      CommonModule,
      RouterLink,
      RouterOutlet,
      NzLayoutModule,
      NzMenuModule,
      NzDropdownModule,
      NzBadgeModule,
      NotificationsDropdownComponent,
      ThemeSettingsComponent,
      ForcePasswordChangeModalComponent,
      LockScreenOverlayComponent,
      ExternalTabComponent,
      ChangePasswordModalComponent,
      TranslatePipe
    ], schemas: [CUSTOM_ELEMENTS_SCHEMA], template: `<nz-layout class="app-shell-layout">
  <nz-sider nzCollapsible [nzCollapsed]="sidebarCollapsed()" [nzTrigger]="null" [nzWidth]="240" [nzCollapsedWidth]="64" class="app-sider">
    <div class="logo-box">
      <a routerLink="/dashboard" class="d-flex align-items-center text-white text-decoration-none px-2">
        <i class="bx bx-buildings fs-22 me-2"></i>
        <span class="fw-bold" *ngIf="!sidebarCollapsed()">VHR</span>
      </a>
    </div>

    <ul nz-menu nzMode="inline" nzTheme="dark" [nzInlineIndent]="0" [nzInlineCollapsed]="sidebarCollapsed()">
      <ng-container *ngFor="let item of menu()">
        <li *ngIf="item.children?.length" nz-submenu [nzIcon]="null" [attr.data-menu-no]="item.menuNo" [attr.data-menu-url]="item.menuUrl"
            [nzOpen]="openTopMenuNo() === item.menuNo" (nzOpenChange)="onTopSubmenuOpenChange(item.menuNo, $event)">
          <div title class="d-flex align-items-center gap-2">
            <iconify-icon *ngIf="item.menuImg" [attr.icon]="item.menuImg"></iconify-icon>
            <iconify-icon *ngIf="!item.menuImg" icon="solar:folder-bold-duotone"></iconify-icon>
            <span>{{ item.menuName }}</span>
          </div>
          <ul>
            <ng-container *ngFor="let child of item.children">
              <li *ngIf="child.children?.length" nz-submenu [nzTitle]="child.menuName" [nzIcon]="null"
                  [attr.data-menu-no]="child.menuNo" [attr.data-menu-url]="child.menuUrl"
                  [nzOpen]="openChildMenuNo() === child.menuNo" (nzOpenChange)="onChildSubmenuOpenChange(child.menuNo, $event)">
                <ul>
                  <li *ngFor="let grandChild of child.children" nz-menu-item
                      [nzSelected]="isMenuActive(grandChild.menuUrl)"
                      [attr.data-menu-no]="grandChild.menuNo" [attr.data-menu-url]="grandChild.menuUrl"
                      (click)="openMenuTab(grandChild.menuUrl, grandChild.menuName, grandChild.menuNo)">
                    {{ grandChild.menuName }}
                  </li>
                </ul>
              </li>
              <li *ngIf="!child.children?.length" nz-menu-item
                  [nzSelected]="isMenuActive(child.menuUrl)"
                  [attr.data-menu-no]="child.menuNo" [attr.data-menu-url]="child.menuUrl"
                  (click)="openMenuTab(child.menuUrl, child.menuName, child.menuNo)">
                {{ child.menuName }}
              </li>
            </ng-container>
          </ul>
        </li>
        <li *ngIf="!item.children?.length" nz-menu-item
            [nzSelected]="isMenuActive(item.menuUrl)"
            [attr.data-menu-no]="item.menuNo" [attr.data-menu-url]="item.menuUrl"
            (click)="openMenuTab(item.menuUrl, item.menuName, item.menuNo)">
          <span class="d-flex align-items-center gap-2">
            <iconify-icon *ngIf="item.menuImg" [attr.icon]="item.menuImg"></iconify-icon>
            <iconify-icon *ngIf="!item.menuImg" icon="solar:menu-dots-bold-duotone"></iconify-icon>
            <span *ngIf="!sidebarCollapsed()">{{ item.menuName }}</span>
          </span>
        </li>
      </ng-container>
    </ul>
  </nz-sider>

  <nz-layout>
    <!-- ========== Topbar ========== -->
    <nz-header class="app-header">
      <div class="d-flex align-items-center h-100">
        <div class="d-flex align-items-center flex-shrink-0">
          <button type="button" class="button-toggle-menu me-2" (click)="toggleSidebar()">
            <iconify-icon icon="solar:hamburger-menu-broken" class="fs-24 align-middle"></iconify-icon>
          </button>
          <span class="fw-bold fs-18">VHR System</span>
        </div>

        <!-- Menu ngang theo ng\u1EEF c\u1EA3nh: r\u1ED7ng ban \u0111\u1EA7u, ch\u1EC9 hi\u1EC7n khi b\u1EA5m 1 menu \u1EDF sidebar (ho\u1EB7c ch\xEDnh
             menu n\xE0y) - t\u01B0\u01A1ng \u0111\u01B0\u01A1ng #topbar-menu-live trong fragments/topbar.html b\u1EA3n Thymeleaf c\u0169
             (xem AppShellComponent.showMenuContext). -->
        <nav class="topbar-horizontal-menu flex-grow-1 mx-2" *ngIf="topbarMenuItems().length">
          <ul nz-menu nzMode="horizontal" nzTheme="dark" class="topbar-menu-nav">
            <ng-container *ngFor="let item of topbarMenuItems()">
              <li *ngIf="item.children?.length" nz-submenu [nzTitle]="item.menuName" [nzIcon]="null">
                <ul>
                  <ng-container *ngFor="let child of item.children">
                    <li *ngIf="child.children?.length" nz-submenu [nzTitle]="child.menuName" [nzIcon]="null">
                      <ul>
                        <li *ngFor="let grandChild of child.children" nz-menu-item
                            [nzSelected]="isMenuActive(grandChild.menuUrl)"
                            (click)="openMenuTab(grandChild.menuUrl, grandChild.menuName, grandChild.menuNo)">
                          {{ grandChild.menuName }}
                        </li>
                      </ul>
                    </li>
                    <li *ngIf="!child.children?.length" nz-menu-item
                        [nzSelected]="isMenuActive(child.menuUrl)"
                        (click)="openMenuTab(child.menuUrl, child.menuName, child.menuNo)">
                      {{ child.menuName }}
                    </li>
                  </ng-container>
                </ul>
              </li>
              <li *ngIf="!item.children?.length" nz-menu-item
                  [nzSelected]="isMenuActive(item.menuUrl)"
                  (click)="openMenuTab(item.menuUrl, item.menuName, item.menuNo)">
                {{ item.menuName }}
              </li>
            </ng-container>
          </ul>
        </nav>

        <div class="d-flex align-items-center gap-1 topbar-actions ms-auto flex-shrink-0">
          <app-notifications-dropdown [mode]="notificationMode()"></app-notifications-dropdown>

          <div class="topbar-item d-none d-md-flex">
            <button type="button" class="topbar-button" (click)="openThemeSettings()">
              <iconify-icon icon="solar:settings-bold-duotone" class="fs-24 align-middle"></iconify-icon>
            </button>
          </div>

          <div class="topbar-item" nz-dropdown nzTrigger="click" [nzDropdownMenu]="userMenu">
            <span class="topbar-button d-flex align-items-center gap-2">
              <img class="rounded-circle" width="32" [src]="user()?.photoUrl || '/assets/images/users/dummy-avatar.jpg'" alt="avatar">
              <span class="d-none d-md-inline">{{ user()?.employeeName || user()?.username }}</span>
            </span>
          </div>
          <nz-dropdown-menu #userMenu="nzDropdownMenu">
            <ul nz-menu class="user-dropdown-menu">
              <li class="dropdown-header-item">{{ user()?.employeeName || user()?.username || 'HR System' }}</li>
              <li nz-menu-divider></li>
              <li *ngIf="user()?.hasSysTypeZeroMenus" nz-menu-item>
                <a href="/sys/hrm" target="_blank" rel="noopener noreferrer" (click)="openHrmManagementSystem($event)" class="d-flex align-items-center text-reset text-decoration-none">
                  <i class="bx bx-user-circle fs-18 align-middle me-1"></i>
                  <span class="align-middle">HR Management System</span>
                </a>
              </li>
              <li nz-menu-item (click)="openChangePasswordModal()">
                <i class="fas fa-key fs-18 align-middle me-1"></i>
                <span class="align-middle">{{ 'topbar.changePassword' | translate:'C\u1EADp nh\u1EADt m\u1EADt kh\u1EA9u' }}</span>
              </li>
              <li nz-menu-item (click)="lockScreen.lock()">
                <i class="bx bx-lock fs-18 align-middle me-1"></i>
                <span class="align-middle">Kh\xF3a m\xE0n h\xECnh</span>
              </li>
              <li nz-menu-item nzDanger (click)="logout()">
                <i class="bx bx-log-out fs-18 align-middle me-1"></i>
                <span class="align-middle">\u0110\u0103ng xu\u1EA5t</span>
              </li>
            </ul>
          </nz-dropdown-menu>
        </div>
      </div>
    </nz-header>

    <!-- ========== Content ========== -->
    <nz-content class="app-content" [style.--tab-strip-height.px]="tabs.tabs().length > 1 ? 40 : 0">
      <!-- Tab-strip: m\u1ED7i menu b\u1EA5m v\xE0o m\u1EDF 1 tab - 'route' (Angular) ho\u1EB7c 'external' (Thymeleaf AJAX-fetch),
           thay cho innerTab.js g\u1ED1c (xem tab.service.ts) -->
      <ul class="nav nav-tabs tab-strip" *ngIf="tabs.tabs().length > 1">
        <li class="nav-item" *ngFor="let tab of tabs.tabs()">
          <a class="nav-link d-flex align-items-center gap-2" href="javascript:void(0)"
             [class.active]="tabs.activePath() === tab.path"
             (click)="tabs.switchTab(tab.path)"
             (contextmenu)="onTabContextMenu($event, tab, tabStripContextMenu)">
            <span>{{ tab.title }}</span>
            <i *ngIf="tab.closable" class="bx bx-x tab-strip-close" (click)="closeTab($event, tab)"></i>
          </a>
        </li>
      </ul>
      <!-- Menu chu\u1ED9t ph\u1EA3i tr\xEAn tab-strip -->
      <nz-dropdown-menu #tabStripContextMenu="nzDropdownMenu">
        <ul nz-menu>
          <li nz-menu-item [nzDisabled]="!contextMenuTab()?.closable" (click)="closeTabFromContextMenu()">
            {{ 'shell.tab.close' | translate:'\u0110\xF3ng tab' }}
          </li>
          <li nz-menu-item (click)="closeAllTabsFromContextMenu()">
            {{ 'shell.tab.closeAll' | translate:'\u0110\xF3ng t\u1EA5t c\u1EA3 tab' }}
          </li>
          <li nz-menu-item [nzDisabled]="!canCloseTabsToLeft()" (click)="closeTabsToLeftFromContextMenu()">
            {{ 'shell.tab.closeLeft' | translate:'\u0110\xF3ng t\u1EA5t c\u1EA3 tab b\xEAn tr\xE1i' }}
          </li>
          <li nz-menu-item [nzDisabled]="!canCloseTabsToRight()" (click)="closeTabsToRightFromContextMenu()">
            {{ 'shell.tab.closeRight' | translate:'\u0110\xF3ng t\u1EA5t c\u1EA3 tab b\xEAn ph\u1EA3i' }}
          </li>
        </ul>
      </nz-dropdown-menu>
      <div class="container-fluid">
        <!-- Route tab \u0111ang m\u1EDF (dashboard, dept-ot-apply-info...) - lu\xF4n gi\u1EEF mounted (ch\u1EC9 \u1EA9n/hi\u1EC7n)
             \u0111\u1EC3 TabRouteReuseStrategy kh\xF4ng h\u1EE7y component khi chuy\u1EC3n sang tab external. -->
        <div [hidden]="tabs.activeTabKind() !== 'route'">
          <router-outlet></router-outlet>
        </div>
        <!-- M\u1ED7i tab external l\xE0 1 instance ri\xEAng, gi\u1EEF nguy\xEAn DOM khi \u1EA9n/hi\u1EC7n qua l\u1EA1i gi\u1EEFa c\xE1c tab. -->
        <app-external-tab *ngFor="let tab of tabs.externalTabs(); trackBy: trackByPath"
                           [hidden]="tabs.activePath() !== tab.path"
                           [url]="tab.path" [reloadToken]="tab.reloadToken"></app-external-tab>
      </div>
    </nz-content>
  </nz-layout>
</nz-layout>

<app-theme-settings></app-theme-settings>
<app-change-password-modal></app-change-password-modal>
<app-force-password-change-modal *ngIf="user()?.requirePasswordChange"></app-force-password-change-modal>
<app-lock-screen-overlay *ngIf="lockScreen.locked()" [user]="user()"></app-lock-screen-overlay>
`, styles: ["/* src/app/shell/app-shell.component.css */\n.app-shell-layout {\n  min-height: 100vh;\n}\n.app-sider {\n  background: #dc6428;\n}\n.app-sider ::ng-deep .ant-menu-dark,\n.app-sider ::ng-deep .ant-menu-dark .ant-menu-sub,\n.app-sider ::ng-deep .ant-menu-dark .ant-menu-inline.ant-menu-sub,\n.app-sider ::ng-deep .ant-menu.ant-menu-dark .ant-menu-sub {\n  background: transparent !important;\n  color: #fff !important;\n  font-weight: 500;\n}\n.app-sider ::ng-deep .ant-menu-dark .ant-menu-item:hover,\n.app-sider ::ng-deep .ant-menu-dark .ant-menu-submenu-title:hover {\n  background-color: rgba(255, 255, 255, 0.12) !important;\n  color: #fff;\n}\n.app-sider ::ng-deep .ant-menu-dark .ant-menu-item,\n.app-sider ::ng-deep .ant-menu-dark .ant-menu-submenu-title {\n  padding-left: 16px !important;\n}\n.app-sider ::ng-deep .ant-menu-dark .ant-menu-sub .ant-menu-item,\n.app-sider ::ng-deep .ant-menu-dark .ant-menu-sub .ant-menu-submenu-title {\n  padding-left: 32px !important;\n}\n.app-sider ::ng-deep .ant-menu-dark .ant-menu-sub .ant-menu-sub .ant-menu-item,\n.app-sider ::ng-deep .ant-menu-dark .ant-menu-sub .ant-menu-sub .ant-menu-submenu-title {\n  padding-left: 48px !important;\n}\n.app-sider ::ng-deep .ant-menu-dark .ant-menu-title-content {\n  display: contents;\n}\n.app-sider ::ng-deep .ant-menu-dark iconify-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  min-width: 18px;\n  font-size: 18px;\n}\n.app-sider ::ng-deep .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected,\n.app-sider ::ng-deep .ant-menu-dark .ant-menu-submenu-selected > .ant-menu-submenu-title {\n  background-color: rgba(0, 0, 0, 0.18) !important;\n  color: #fff;\n}\n.logo-box {\n  height: 56px;\n  display: flex;\n  align-items: center;\n  padding: 0 12px;\n}\n.app-header {\n  background: #dc6428;\n  color: #fff;\n  padding: 0 16px;\n  height: 56px;\n  line-height: 56px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);\n}\n.app-content {\n  background: #f5f6fa;\n  height: calc(100vh - 56px);\n  overflow-y: auto;\n}\n.topbar-horizontal-menu {\n  overflow-x: auto;\n  overflow-y: hidden;\n  height: 56px;\n  min-width: 0;\n}\n.topbar-horizontal-menu ::ng-deep .ant-menu-horizontal {\n  background: transparent !important;\n  border-bottom: none !important;\n  line-height: 54px;\n  white-space: nowrap;\n}\n.topbar-horizontal-menu ::ng-deep .ant-menu-horizontal > .ant-menu-item,\n.topbar-horizontal-menu ::ng-deep .ant-menu-horizontal > .ant-menu-submenu {\n  top: 0;\n  margin: 0 2px;\n  color: rgba(255, 255, 255, 0.85) !important;\n  border-bottom: 2px solid transparent !important;\n}\n.topbar-horizontal-menu ::ng-deep .ant-menu-horizontal > .ant-menu-item:hover,\n.topbar-horizontal-menu ::ng-deep .ant-menu-horizontal > .ant-menu-submenu:hover,\n.topbar-horizontal-menu ::ng-deep .ant-menu-horizontal > .ant-menu-item-selected,\n.topbar-horizontal-menu ::ng-deep .ant-menu-horizontal > .ant-menu-submenu-selected,\n.topbar-horizontal-menu ::ng-deep .ant-menu-horizontal > .ant-menu-submenu-open {\n  color: #fff !important;\n  border-bottom-color: #fff !important;\n}\n::ng-deep .ant-menu-submenu-popup .ant-menu {\n  background-color: #dc6428 !important;\n}\n::ng-deep .ant-menu-submenu-popup .ant-menu-item,\n::ng-deep .ant-menu-submenu-popup .ant-menu-submenu-title {\n  color: rgba(255, 255, 255, 0.85) !important;\n}\n::ng-deep .ant-menu-submenu-popup .ant-menu-item:hover,\n::ng-deep .ant-menu-submenu-popup .ant-menu-item-selected,\n::ng-deep .ant-menu-submenu-popup .ant-menu-submenu-title:hover,\n::ng-deep .ant-menu-submenu-popup .ant-menu-submenu-selected > .ant-menu-submenu-title {\n  background-color: rgba(0, 0, 0, 0.18) !important;\n  color: #fff !important;\n}\n.button-toggle-menu,\n.topbar-button {\n  background: transparent;\n  border: none;\n  color: inherit;\n  cursor: pointer;\n  padding: 6px 10px;\n  border-radius: 6px;\n}\n.button-toggle-menu:hover,\n.topbar-button:hover {\n  background: rgba(255, 255, 255, 0.15);\n}\n.user-dropdown-menu {\n  min-width: 200px;\n}\n.dropdown-header-item {\n  padding: 8px 16px;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.85);\n}\n.tab-strip {\n  padding: 0 1rem;\n  background: #fff;\n  overflow-x: auto;\n  flex-wrap: nowrap;\n  position: sticky;\n  top: 0;\n  z-index: 20;\n}\n.tab-strip .nav-link {\n  white-space: nowrap;\n}\n.tab-strip-close {\n  border-radius: 50%;\n  padding: 1px;\n}\n.tab-strip-close:hover {\n  background: rgba(0, 0, 0, 0.08);\n}\n/*# sourceMappingURL=app-shell.component.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: I18nService }, { type: NzContextMenuService }, { type: TabService }, { type: LockScreenService }, { type: ThemeService }, { type: NzMessageService }, { type: Router }], { themeSettings: [{
    type: ViewChild,
    args: [ThemeSettingsComponent]
  }], changePasswordModal: [{
    type: ViewChild,
    args: [ChangePasswordModalComponent]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppShellComponent, { className: "AppShellComponent", filePath: "src/app/shell/app-shell.component.ts", lineNumber: 66 });
})();

// src/app/app.routes.ts
var routes = [
  { path: "login", component: LoginComponent },
  {
    path: "",
    component: AppShellComponent,
    canActivate: [authGuard],
    children: [
      { path: "dashboard", loadComponent: () => import("./chunk-OK3HMIRT.js").then((m) => m.DashboardComponent), data: { sysType: "1" } },
      { path: "dept-ot-apply-info", loadComponent: () => import("./chunk-ZH3O7M4G.js").then((m) => m.DeptOtApplyInfoComponent) },
      { path: "manage-emp-position-info", loadComponent: () => import("./chunk-SGGJTMQR.js").then((m) => m.ManageEmpPositionInfoComponent) },
      { path: "manage-count-info", loadComponent: () => import("./chunk-WHK6OL45.js").then((m) => m.ManageCountInfoComponent) },
      { path: "evs-result-emp", loadComponent: () => import("./chunk-FBEJJAX6.js").then((m) => m.EvsResultEmpComponent) },
      { path: "manage-evs-result-emp", loadComponent: () => import("./chunk-CGH2CNGN.js").then((m) => m.ManageEvsResultEmpComponent) },
      { path: "hr-card-info", loadComponent: () => import("./chunk-HJ6X45RK.js").then((m) => m.HrCardInfoComponent) },
      { path: "view-personal-info", loadComponent: () => import("./chunk-5CLNWD2T.js").then((m) => m.ViewPersonalInfoComponent) },
      { path: "pa-month-person-info", loadComponent: () => import("./chunk-YEH67DAR.js").then((m) => m.PaMonthPersonInfoComponent) },
      { path: "change-user", loadComponent: () => import("./chunk-EPE2JOJQ.js").then((m) => m.ChangeUserComponent) },
      { path: "personal-info", loadComponent: () => import("./chunk-6GEUA4UC.js").then((m) => m.PersonalInfoComponent) },
      { path: "work-info", loadComponent: () => import("./chunk-7DOL3OVN.js").then((m) => m.WorkInfoComponent) },
      { path: "qualification-info", loadComponent: () => import("./chunk-2NTYIKPH.js").then((m) => m.QualificationInfoComponent) },
      { path: "apply-info", loadComponent: () => import("./chunk-3EONXVYO.js").then((m) => m.ApplyInfoComponent) },
      { path: "hrm-approve-apply-info", loadComponent: () => import("./chunk-H3PZM5VA.js").then((m) => m.HrmApproveApplyInfoComponent), canActivate: [hrmAccessGuard], data: { sysType: "0" } },
      { path: "hrm-dashboard", loadComponent: () => import("./chunk-FD3BCPEC.js").then((m) => m.HrmDashboardComponent), canActivate: [hrmAccessGuard], data: { sysType: "0" } },
      { path: "apply-attendance-batch-info", loadComponent: () => import("./chunk-QGEOHNW5.js").then((m) => m.ApplyAttendanceBatchInfoComponent) },
      { path: "ot-apply-batch-info", loadComponent: () => import("./chunk-4EKEKTN2.js").then((m) => m.OtApplyBatchInfoComponent) },
      { path: "attendance-ex-batch-info", loadComponent: () => import("./chunk-JG2CBAN6.js").then((m) => m.AttendanceExBatchInfoComponent) },
      { path: "check-attendance-ex-for-batch", loadComponent: () => import("./chunk-4AFCFKAQ.js").then((m) => m.CheckAttendanceExForBatchComponent) },
      { path: "coord-apply-attendance-info", loadComponent: () => import("./chunk-AABI5ZKF.js").then((m) => m.CoordApplyAttendanceInfoComponent) },
      { path: "coord-apply-ot-info-list", loadComponent: () => import("./chunk-2KPXD5CD.js").then((m) => m.CoordApplyOtInfoListComponent) },
      { path: "ess-view-emp-calendar", loadComponent: () => import("./chunk-IQNN2GOH.js").then((m) => m.EssViewEmpCalendarComponent) },
      { path: "view-ot-report", loadComponent: () => import("./chunk-OEQW7HKZ.js").then((m) => m.ViewOtReportComponent) },
      { path: "view-ar-personal-list", loadComponent: () => import("./chunk-HUDMJORR.js").then((m) => m.ViewArPersonalListComponent) },
      { path: "view-ot-apply-personal-list", loadComponent: () => import("./chunk-KWHOMS6U.js").then((m) => m.ViewOtApplyPersonalListComponent) },
      { path: "view-class-calendar", loadComponent: () => import("./chunk-GQ45KQ3A.js").then((m) => m.ViewClassCalendarComponent) },
      { path: "view-ar-card-record", loadComponent: () => import("./chunk-4FM4XQBX.js").then((m) => m.ViewArCardRecordComponent) },
      { path: "view-ar-card-record-day", loadComponent: () => import("./chunk-W5B2BHY5.js").then((m) => m.ViewArCardRecordDayComponent) },
      { path: "view-ar-card-record-meal", loadComponent: () => import("./chunk-P6TNBSKI.js").then((m) => m.ViewArCardRecordMealComponent) },
      { path: "view-ar-card-record-for-self", loadComponent: () => import("./chunk-YAP2WJLV.js").then((m) => m.ViewArCardRecordForSelfComponent) },
      { path: "view-entry-info-list", loadComponent: () => import("./chunk-JLPXYZVT.js").then((m) => m.ViewEntryInfoListComponent) },
      { path: "view-month-detail-list", loadComponent: () => import("./chunk-OCU3UPY6.js").then((m) => m.ViewMonthDetailListComponent) },
      { path: "view-year-use-info-list", loadComponent: () => import("./chunk-MIKS6GO5.js").then((m) => m.ViewYearUseInfoListComponent) },
      { path: "workgroup-exper-list", loadComponent: () => import("./chunk-SV2KYUZD.js").then((m) => m.WorkgroupExperListComponent) },
      { path: "person-shift-list", loadComponent: () => import("./chunk-MM2BDQJM.js").then((m) => m.PersonShiftListComponent) },
      { path: "sst-apply-attendance", loadComponent: () => import("./chunk-B7YM7CNS.js").then((m) => m.SstApplyAttendanceComponent) },
      { path: "apply-attendance-info-list", loadComponent: () => import("./chunk-G6FNVMA4.js").then((m) => m.ApplyAttendanceInfoListComponent) },
      { path: "sst-ot-apply-info", loadComponent: () => import("./chunk-MVEHASQW.js").then((m) => m.SstOtApplyInfoComponent) },
      { path: "ot-apply-info-list", loadComponent: () => import("./chunk-UTNEDXG5.js").then((m) => m.OtApplyInfoListComponent) },
      { path: "cwa-abnormal-apply", loadComponent: () => import("./chunk-O5XXV6PB.js").then((m) => m.CwaAbnormalApplyComponent) },
      { path: "apply-leave-info-list", loadComponent: () => import("./chunk-QFF7533C.js").then((m) => m.ApplyLeaveInfoListComponent) },
      { path: "attendance-personal-info-list", loadComponent: () => import("./chunk-MBI4PD4M.js").then((m) => m.AttendancePersonalInfoListComponent) },
      { path: "person-ot-apply-info-list", loadComponent: () => import("./chunk-EI7HL4O3.js").then((m) => m.PersonOtApplyInfoListComponent) },
      { path: "view-ar-personal-self-list", loadComponent: () => import("./chunk-2TQJJY54.js").then((m) => m.ViewArPersonalSelfListComponent) },
      { path: "view-ot-apply-personal-self-list", loadComponent: () => import("./chunk-5BRIOEQT.js").then((m) => m.ViewOtApplyPersonalSelfListComponent) },
      { path: "year-use-info", loadComponent: () => import("./chunk-BQY7FMP4.js").then((m) => m.YearUseInfoComponent) },
      { path: "reg-personal-target", loadComponent: () => import("./chunk-C3HCN7ED.js").then((m) => m.RegPersonalTargetComponent) },
      { path: "evs-resume-list", loadComponent: () => import("./chunk-QQN3QWSY.js").then((m) => m.EvsResumeListComponent) },
      { path: "evs-schedule-panel", loadComponent: () => import("./chunk-AFFCG7WW.js").then((m) => m.EvsSchedulePanelComponent) },
      { path: "evs-param-panel", loadComponent: () => import("./chunk-H74EPD32.js").then((m) => m.EvsParamPanelComponent) },
      { path: "evs-distribution-rate-panel", loadComponent: () => import("./chunk-74DETGIA.js").then((m) => m.EvsDistributionRatePanelComponent) },
      { path: "evs-affirmor-setup", loadComponent: () => import("./chunk-DJTWJ6BA.js").then((m) => m.EvsAffirmorSetupComponent) },
      { path: "evs-result", loadComponent: () => import("./chunk-F6UTET66.js").then((m) => m.EvsResultComponent) },
      { path: "evs-item-panel", loadComponent: () => import("./chunk-YEUTKXNY.js").then((m) => m.EvsItemPanelComponent) },
      { path: "evs-formula-list", loadComponent: () => import("./chunk-M3BOE3QQ.js").then((m) => m.EvsFormulaListComponent) },
      { path: "confirm-target1", loadComponent: () => import("./chunk-3WKZV2JT.js").then((m) => m.ConfirmTarget1Component) },
      { path: "confirm-target2", loadComponent: () => import("./chunk-MINEPYXH.js").then((m) => m.ConfirmTarget2Component) },
      { path: "evs-by-self-htsv", loadComponent: () => import("./chunk-UGPR7AU3.js").then((m) => m.EvsBySelfHtsvComponent) },
      { path: "affirm-target1", loadComponent: () => import("./chunk-VANWGIKU.js").then((m) => m.AffirmTarget1Component) },
      { path: "affirm-target2", loadComponent: () => import("./chunk-23DR45U5.js").then((m) => m.AffirmTarget2Component) },
      { path: "evs-by-self-sst-ability", loadComponent: () => import("./chunk-BREXVZVH.js").then((m) => m.EvsBySelfSSTAbilityComponent) },
      { path: "affirm-target1-ability", loadComponent: () => import("./chunk-KMT4JATT.js").then((m) => m.AffirmTarget1AbilityComponent) },
      { path: "affirm-target2-ability", loadComponent: () => import("./chunk-NLRTVABJ.js").then((m) => m.AffirmTarget2AbilityComponent) },
      { path: "view-approval-email", loadComponent: () => import("./chunk-6FIFY6JP.js").then((m) => m.ViewApprovalEmailComponent) },
      { path: "view-approvaled-email", loadComponent: () => import("./chunk-O6X3N6PC.js").then((m) => m.ViewApprovaledEmailComponent) },
      { path: "view-noticeed-email", loadComponent: () => import("./chunk-W2T6WGIU.js").then((m) => m.ViewNoticeedEmailComponent) },
      { path: "view-temp-emp-info-list", loadComponent: () => import("./chunk-QYCAXEZU.js").then((m) => m.ViewTempEmpInfoListComponent), data: { sysType: "0" } },
      { path: "work-experience-info", loadComponent: () => import("./chunk-GS6RLY64.js").then((m) => m.WorkExperienceInfoComponent) },
      { path: "emergency-address-info", loadComponent: () => import("./chunk-ZENDAELI.js").then((m) => m.EmergencyAddressInfoComponent) },
      { path: "address-info", loadComponent: () => import("./chunk-NO2REOHC.js").then((m) => m.AddressInfoComponent) },
      { path: "family-info", loadComponent: () => import("./chunk-DTC2JIWO.js").then((m) => m.FamilyInfoComponent) },
      { path: "education-info", loadComponent: () => import("./chunk-6ZT6YKUS.js").then((m) => m.EducationInfoComponent) },
      { path: "recognition-info", loadComponent: () => import("./chunk-LFJDG64M.js").then((m) => m.RecognitionInfoComponent) },
      { path: "punishment-info", loadComponent: () => import("./chunk-A44NDN54.js").then((m) => m.PunishmentInfoComponent) },
      { path: "manage-qualification-info", loadComponent: () => import("./chunk-XPD3LF62.js").then((m) => m.ManageQualificationInfoComponent) },
      { path: "contract-info-list", loadComponent: () => import("./chunk-HD6L6LSM.js").then((m) => m.ContractInfoListComponent) },
      { path: "expired-contract-list", loadComponent: () => import("./chunk-A4JZ6FQ2.js").then((m) => m.ExpiredContractListComponent) },
      { path: "contract-info-search", loadComponent: () => import("./chunk-A4Y6H2XE.js").then((m) => m.ContractInfoSearchComponent) },
      { path: "contract-change-list", loadComponent: () => import("./chunk-GMO3USFM.js").then((m) => m.ContractChangeListComponent) },
      { path: "view-recruit-list", loadComponent: () => import("./chunk-SQSQSJLL.js").then((m) => m.ViewRecruitListComponent) },
      { path: "view-recruit-batch-list", loadComponent: () => import("./chunk-TKV3IN5Y.js").then((m) => m.ViewRecruitBatchListComponent) },
      { path: "view-start-point", loadComponent: () => import("./chunk-Z4KSP7I5.js").then((m) => m.ViewStartPointComponent) },
      { path: "view-experience-batch-list", loadComponent: () => import("./chunk-4EYI2HH2.js").then((m) => m.ViewExperienceBatchListComponent) },
      { path: "photo-import", loadComponent: () => import("./chunk-MKULOVWA.js").then((m) => m.PhotoImportComponent) },
      { path: "view-cycle-parameter", loadComponent: () => import("./chunk-PGDHVMJ2.js").then((m) => m.ViewCycleParameterComponent) },
      { path: "view-cycle", loadComponent: () => import("./chunk-TRHEB7FB.js").then((m) => m.ViewCycleComponent) },
      { path: "view-pa-pay-schedule", loadComponent: () => import("./chunk-VE2NUTLT.js").then((m) => m.ViewPaPayScheduleComponent) },
      { path: "view-salary-code", loadComponent: () => import("./chunk-WJ33FRLZ.js").then((m) => m.ViewSalaryCodeComponent) },
      { path: "view-pa-input-item-param", loadComponent: () => import("./chunk-22CKDG3Y.js").then((m) => m.ViewPaInputItemParamComponent) },
      { path: "view-pa-input-item-data", loadComponent: () => import("./chunk-5V5MEHEK.js").then((m) => m.ViewPaInputItemDataComponent) },
      { path: "view-pa-compute-item-param-list", loadComponent: () => import("./chunk-6EJ3235F.js").then((m) => m.ViewPaComputeItemParamListComponent) },
      { path: "view-pa-pay-obj", loadComponent: () => import("./chunk-PM6VCNGN.js").then((m) => m.ViewPaPayObjComponent) },
      { path: "view-pa-emp-account", loadComponent: () => import("./chunk-WW6XDN2Q.js").then((m) => m.ViewPaEmpAccountComponent) },
      { path: "view-pa-pay-stub", loadComponent: () => import("./chunk-PF5Z24WB.js").then((m) => m.ViewPaPayStubComponent) },
      { path: "view-pa-result", loadComponent: () => import("./chunk-4VA2WCHG.js").then((m) => m.ViewPaResultComponent) },
      { path: "view-pa-supervisor", loadComponent: () => import("./chunk-TWBHFLI7.js").then((m) => m.ViewPaSupervisorComponent) },
      { path: "view-dynamic-group", loadComponent: () => import("./chunk-F6TFUHV3.js").then((m) => m.ViewDynamicGroupComponent) },
      { path: "add-emp-shift", loadComponent: () => import("./chunk-NKLBA4TC.js").then((m) => m.AddEmpShiftComponent) },
      { path: "view-ar-item", loadComponent: () => import("./chunk-CGZNLUYV.js").then((m) => m.ViewArItemComponent) },
      { path: "view-ar-item-param-list", loadComponent: () => import("./chunk-MTBPK5CK.js").then((m) => m.ViewArItemParamListComponent) },
      { path: "view-item-parameter", loadComponent: () => import("./chunk-U5CZKS3D.js").then((m) => m.ViewItemParameterComponent) },
      { path: "view-shift", loadComponent: () => import("./chunk-WULZR3IW.js").then((m) => m.ViewShiftComponent) },
      { path: "view-statutory-holidays", loadComponent: () => import("./chunk-6IDNEHKR.js").then((m) => m.ViewStatutoryHolidaysComponent) },
      { path: "view-company-calendar", loadComponent: () => import("./chunk-AHXXMQXJ.js").then((m) => m.ViewCompanyCalendarComponent) },
      { path: "view-emp-calendar", loadComponent: () => import("./chunk-VG4H4XAK.js").then((m) => m.ViewEmpCalendarComponent) },
      { path: "view-ar-shift-group-list", loadComponent: () => import("./chunk-JDUBEJNM.js").then((m) => m.ViewArShiftGroupListComponent) },
      { path: "view-summary-param-item", loadComponent: () => import("./chunk-QYYJROSK.js").then((m) => m.ViewSummaryParamItemComponent) },
      { path: "view-summary-item", loadComponent: () => import("./chunk-YRPOF4BO.js").then((m) => m.ViewSummaryItemComponent) },
      { path: "view-summary-formula", loadComponent: () => import("./chunk-KRSZRNWS.js").then((m) => m.ViewSummaryFormulaComponent) },
      { path: "view-pa-formula", loadComponent: () => import("./chunk-SBH43IYN.js").then((m) => m.ViewPaFormulaComponent) },
      { path: "view-attendance-keeper", loadComponent: () => import("./chunk-FWUZJ6NH.js").then((m) => m.ViewAttendanceKeeperComponent) },
      { path: "view-depart-manager-list", loadComponent: () => import("./chunk-5OD5MXSK.js").then((m) => m.ViewDepartManagerListComponent) },
      { path: "attendance-search", loadComponent: () => import("./chunk-YXNBIGDR.js").then((m) => m.AttendanceSearchComponent) },
      { path: "search-apply-ot-info-list", loadComponent: () => import("./chunk-3R22BBIQ.js").then((m) => m.SearchApplyOtInfoListComponent) },
      { path: "view-vac-emp-list", loadComponent: () => import("./chunk-CKYXN3O2.js").then((m) => m.ViewVacEmpListComponent) },
      { path: "view-ar-detail-calculate", loadComponent: () => import("./chunk-5MTWPRIR.js").then((m) => m.ViewArDetailCalculateComponent) },
      { path: "attendance-ex-confirm", loadComponent: () => import("./chunk-D6ALWGPK.js").then((m) => m.AttendanceExConfirmComponent) },
      { path: "leave-confirm", loadComponent: () => import("./chunk-GGL2N3AF.js").then((m) => m.LeaveConfirmComponent) },
      { path: "view-pa-work-flow", loadComponent: () => import("./chunk-TSODPCNE.js").then((m) => m.ViewPaWorkFlowComponent) },
      { path: "view-resume-list", loadComponent: () => import("./chunk-4JI6RBAP.js").then((m) => m.ViewResumeListComponent) },
      { path: "view-resume-process", loadComponent: () => import("./chunk-4UQALC2Z.js").then((m) => m.ViewResumeProcessComponent) },
      { path: "view-compose-org", loadComponent: () => import("./chunk-WRMUG35Z.js").then((m) => m.ViewComposeOrgComponent) },
      { path: "view-org-business", loadComponent: () => import("./chunk-6NCL5K3L.js").then((m) => m.ViewOrgBusinessComponent) },
      { path: "view-org-cost-center", loadComponent: () => import("./chunk-S577B3LS.js").then((m) => m.ViewOrgCostCenterComponent) },
      { path: "view-dept-manager-check", loadComponent: () => import("./chunk-ZNDCRCHI.js").then((m) => m.ViewDeptManagerCheckComponent) },
      { path: "view-current-org-info", loadComponent: () => import("./chunk-ZYGUS5JD.js").then((m) => m.ViewCurrentOrgInfoComponent) },
      { path: "view-org-info", loadComponent: () => import("./chunk-LFZTIHDW.js").then((m) => m.ViewOrgInfoComponent) },
      { path: "view-history-org-info", loadComponent: () => import("./chunk-ETE2AGUS.js").then((m) => m.ViewHistoryOrgInfoComponent) },
      { path: "view-menu-list", loadComponent: () => import("./chunk-AT3OWLFJ.js").then((m) => m.ViewMenuListComponent) },
      { path: "view-menu-param-list", loadComponent: () => import("./chunk-EM3RZCBB.js").then((m) => m.ViewMenuParamListComponent) },
      { path: "view-code-manage", loadComponent: () => import("./chunk-6RHWP7X4.js").then((m) => m.ViewCodeManageComponent) },
      { path: "view-company", loadComponent: () => import("./chunk-QWM7QM6F.js").then((m) => m.ViewCompanyComponent) },
      { path: "view-code-param-list", loadComponent: () => import("./chunk-ZP3M6NXR.js").then((m) => m.ViewCodeParamListComponent) },
      { path: "view-roles-group", loadComponent: () => import("./chunk-6GSYALUD.js").then((m) => m.ViewRolesGroupComponent) },
      { path: "view-roles-group-list", loadComponent: () => import("./chunk-MAC2CTBP.js").then((m) => m.ViewRolesGroupListComponent) },
      { path: "view-login-user", loadComponent: () => import("./chunk-TW3SVUYV.js").then((m) => m.ViewLoginUserComponent) },
      { path: "", redirectTo: "dashboard", pathMatch: "full" }
    ]
  },
  { path: "**", redirectTo: "login" }
];

// src/app/shell/tab-route-reuse.strategy.ts
var TabRouteReuseStrategy = class {
  handles = /* @__PURE__ */ new Map();
  shouldDetach(route) {
    return this.isCacheable(route);
  }
  store(route, handle) {
    if (!this.isCacheable(route)) return;
    const key = this.key(route);
    if (handle) {
      this.handles.set(key, handle);
    } else {
      this.handles.delete(key);
    }
  }
  shouldAttach(route) {
    return this.isCacheable(route) && this.handles.has(this.key(route));
  }
  retrieve(route) {
    if (!this.isCacheable(route)) return null;
    return this.handles.get(this.key(route)) ?? null;
  }
  shouldReuseRoute(future, curr) {
    return future.routeConfig === curr.routeConfig;
  }
  isCacheable(route) {
    const path = route.routeConfig?.path;
    return !!path && path !== "login";
  }
  key(route) {
    return route.pathFromRoot.map((r) => r.url.map((seg) => seg.path).join("/")).filter(Boolean).join("/");
  }
};

// node_modules/@angular/common/locales/vi.js
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
var u = void 0;
function plural(val) {
  const n = val;
  return 5;
}
var vi_default = ["vi", [["s", "c"], ["SA", "CH"]], [["SA", "CH"]], [["CN", "T2", "T3", "T4", "T5", "T6", "T7"], ["CN", "Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7"], ["Ch\u1EE7 Nh\u1EADt", "Th\u1EE9 Hai", "Th\u1EE9 Ba", "Th\u1EE9 T\u01B0", "Th\u1EE9 N\u0103m", "Th\u1EE9 S\xE1u", "Th\u1EE9 B\u1EA3y"], ["CN", "T2", "T3", "T4", "T5", "T6", "T7"]], u, [["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], ["thg 1", "thg 2", "thg 3", "thg 4", "thg 5", "thg 6", "thg 7", "thg 8", "thg 9", "thg 10", "thg 11", "thg 12"], ["th\xE1ng 1", "th\xE1ng 2", "th\xE1ng 3", "th\xE1ng 4", "th\xE1ng 5", "th\xE1ng 6", "th\xE1ng 7", "th\xE1ng 8", "th\xE1ng 9", "th\xE1ng 10", "th\xE1ng 11", "th\xE1ng 12"]], [["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], ["Th\xE1ng 1", "Th\xE1ng 2", "Th\xE1ng 3", "Th\xE1ng 4", "Th\xE1ng 5", "Th\xE1ng 6", "Th\xE1ng 7", "Th\xE1ng 8", "Th\xE1ng 9", "Th\xE1ng 10", "Th\xE1ng 11", "Th\xE1ng 12"]], [["TCN", "CN"], ["TCN", "SCN"], ["Tr\u01B0\u1EDBc Ch\xFAa Gi\xE1ng Sinh", "Sau C\xF4ng Nguy\xEAn"]], 1, [6, 0], ["d/M/yy", "d MMM, y", "d MMMM, y", "EEEE, d MMMM, y"], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{0} {1}", u, u, u], [",", ".", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "#,##0.00\xA0\xA4", "#E0"], "VND", "\u20AB", "\u0110\u1ED3ng Vi\u1EC7t Nam", { "AUD": ["AU$", "$"], "BYN": [u, "\u0440."], "PHP": [u, "\u20B1"], "THB": ["\u0E3F"], "TWD": ["NT$"], "USD": ["US$", "$"], "XXX": [] }, "ltr", plural];

// src/app/app.config.ts
registerLocaleData(vi_default);
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // Backend lưu CSRF token vào cookie "XSRF-TOKEN" (xem SecurityConfig.java) - Angular tự đọc cookie
    // này và gắn header "X-XSRF-TOKEN" vào mọi request POST/PUT/PATCH/DELETE cùng origin, không cần
    // code thủ công ở từng service. Tên cookie/header khai báo tường minh dù trùng default của Angular
    // để rõ ràng đây là quy ước bắt buộc khớp với backend, không phải giá trị mặc định tình cờ.
    provideHttpClient(withInterceptorsFromDi(), withXsrfConfiguration({ cookieName: "XSRF-TOKEN", headerName: "X-XSRF-TOKEN" })),
    provideRouter(routes),
    { provide: RouteReuseStrategy, useClass: TabRouteReuseStrategy },
    provideNzI18n(vi_VN),
    provideNzDateFnsAdapter()
  ]
};

// src/app/app.ts
var App = class _App {
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 1, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet], template: "<router-outlet></router-outlet>\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 10 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# debugId=9673dde4-7acf-52d6-a78d-c3a8d7f1598d
//# sourceMappingURL=main.js.map
