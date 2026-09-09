import {
  NzMessageService
} from "./chunk-XWW7CXU6.js";
import {
  I18nService,
  TranslatePipe
} from "./chunk-MZSSMIRT.js";
import {
  NzCardComponent,
  NzCardModule
} from "./chunk-FNWKNPAX.js";
import {
  NzOptionComponent,
  NzSelectComponent,
  NzSelectModule
} from "./chunk-2QLZSMGV.js";
import {
  CheckboxControlValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-TNYKEBYQ.js";
import {
  CommonModule,
  Component,
  HttpClient,
  Injectable,
  NgForOf,
  NzButtonComponent,
  NzButtonModule,
  NzTransitionPatchDirective,
  NzWaveDirective,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTW5U2M5.js";

// src/app/view-resume-process/view-resume-process.service.ts
var API_BASE = "/org/api";
var ViewResumeProcessService = class _ViewResumeProcessService {
  constructor(http) {
    this.http = http;
  }
  http;
  getResumeDropdown() {
    return this.http.get(`${API_BASE}/resume/dropdown`, { withCredentials: true });
  }
  executeProcess(payload) {
    return this.http.post(`${API_BASE}/process/execute`, payload, { withCredentials: true });
  }
  static \u0275fac = function ViewResumeProcessService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewResumeProcessService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewResumeProcessService, factory: _ViewResumeProcessService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewResumeProcessService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-resume-process/view-resume-process.component.ts
var _c0 = () => ({ padding: "0" });
function ViewResumeProcessComponent_nz_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 39);
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzValue", r_r1.no)("nzLabel", ctx_r1.resumeLabel(r_r1));
  }
}
var I18N_KEYS = [
  "orgResumeProcess.versionName",
  "orgResumeProcess.selectPlaceholder",
  "orgResumeProcess.execute",
  "orgResumeProcess.groupEditOrgTree",
  "orgResumeProcess.groupMakeActions",
  "orgResumeProcess.groupOrgHistory",
  "orgResumeProcess.groupConfirmation",
  "orgResumeProcess.step.copyOrg",
  "orgResumeProcess.step.setupOrg",
  "orgResumeProcess.step.checkDeptManager",
  "orgResumeProcess.step.scfl",
  "orgResumeProcess.step.checkDecision",
  "orgResumeProcess.step.checkDraftDecision",
  "orgResumeProcess.step.sczz",
  "orgResumeProcess.step.deptChangeHistory",
  "orgResumeProcess.step.checkChange",
  "orgResumeProcess.step.qdzz",
  "orgResumeProcess.msg.pleaseSelectResume",
  "orgResumeProcess.msg.pleaseSelectStep",
  "common.status",
  "common.active",
  "common.inactive",
  "common.processing",
  "common.error",
  "common.loadFail"
];
function isActiveValue(activity) {
  return activity === "14013948" || activity === "ACTIVE";
}
var ViewResumeProcessComponent = class _ViewResumeProcessComponent {
  constructor(api, i18n, message) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
  }
  api;
  i18n;
  message;
  resumeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "resumeOptions" }] : (
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
  executing = signal(
    false,
    ...ngDevMode ? [{ debugName: "executing" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedNo = null;
  selectedResume = computed(
    () => this.resumeOptions().find((r) => r.no === this.selectedNo) ?? null,
    ...ngDevMode ? [{ debugName: "selectedResume" }] : (
      /* istanbul ignore next */
      []
    )
  );
  statusActive = computed(
    () => isActiveValue(this.selectedResume()?.activity),
    ...ngDevMode ? [{ debugName: "statusActive" }] : (
      /* istanbul ignore next */
      []
    )
  );
  chkCopyOrg = false;
  chkScfl = false;
  chkSczz = false;
  chkQdzz = false;
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDropdown();
  }
  loadDropdown() {
    this.loading.set(true);
    this.api.getResumeDropdown().subscribe({
      next: (list) => {
        this.resumeOptions.set(list ?? []);
        this.selectedNo = list?.length ? list[0].no : null;
        this.loading.set(false);
      },
      error: () => {
        this.resumeOptions.set([]);
        this.loading.set(false);
        this.message.error(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  resumeLabel(r) {
    return r.no ? `${r.no} ${r.resumeName ?? ""}` : r.resumeName ?? "";
  }
  execute() {
    if (!this.selectedNo) {
      this.message.warning(this.i18n.t("orgResumeProcess.msg.pleaseSelectResume", "Vui l\xF2ng ch\u1ECDn phi\xEAn b\u1EA3n thay \u0111\u1ED5i!"));
      return;
    }
    const types = [];
    if (this.chkCopyOrg)
      types.push("copyOrg");
    if (this.chkScfl)
      types.push("scfl");
    if (this.chkSczz)
      types.push("sczz");
    if (this.chkQdzz)
      types.push("qdzz");
    if (types.length === 0) {
      this.message.warning(this.i18n.t("orgResumeProcess.msg.pleaseSelectStep", "Vui l\xF2ng ch\u1ECDn \xEDt nh\u1EA5t m\u1ED9t b\u01B0\u1EDBc th\u1EF1c hi\u1EC7n!"));
      return;
    }
    this.executing.set(true);
    this.api.executeProcess({ resumeNo: this.selectedNo, types }).subscribe({
      next: (res) => {
        this.executing.set(false);
        this.message.success(res.message || "Th\u1EF1c hi\u1EC7n th\xE0nh c\xF4ng!");
      },
      error: (err) => {
        this.executing.set(false);
        const detail = err?.error?.error ? `: ${err.error.error}` : "";
        this.message.error(`${this.i18n.t("common.error", "L\u1ED7i")}${detail}`);
      }
    });
  }
  static \u0275fac = function ViewResumeProcessComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewResumeProcessComponent)(\u0275\u0275directiveInject(ViewResumeProcessService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewResumeProcessComponent, selectors: [["app-view-resume-process"]], decls: 115, vars: 98, consts: [[1, "row"], [1, "col-12"], [3, "nzBodyStyle"], [1, "card-header", "bg-white", "border-bottom", "p-3"], [1, "row", "align-items-center", "g-3"], [1, "col-md-auto"], [1, "fw-bold", "text-muted"], [1, "col-md-4"], ["id", "vrpSelect", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzLoading", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "text-muted"], ["id", "vrpStatus", 1, "fw-bold"], [1, "col-md", "text-end"], ["nz-button", "", "nzType", "default", "nzSize", "small", "id", "vrpBtnExecute", 3, "click", "nzLoading"], [1, "card-body", "bg-light"], [1, "vrp-process-container"], [1, "vrp-process-group"], [1, "vrp-process-header"], [1, "vrp-step-item"], [1, "vrp-step-btn", "vrp-checkbox-step"], ["type", "checkbox", "id", "vrpChkCopyOrg", 3, "ngModelChange", "ngModel"], ["for", "vrpChkCopyOrg"], [1, "vrp-step-arrow-down"], [1, "bx", "bx-down-arrow-alt"], [1, "vrp-step-btn", "vrp-active-step"], [1, "bx", "bxs-sitemap"], [1, "vrp-group-connector"], [1, "bx", "bx-right-arrow-alt", 2, "font-size", "2rem"], [1, "bx", "bxs-user-check"], ["type", "checkbox", "id", "vrpChkScfl", 3, "ngModelChange", "ngModel"], ["for", "vrpChkScfl"], [1, "bx", "bxs-file-find"], [1, "vrp-vertical-groups"], ["type", "checkbox", "id", "vrpChkSczz", 3, "ngModelChange", "ngModel"], ["for", "vrpChkSczz"], [1, "bx", "bx-history"], [1, "bx", "bx-check-shield"], ["type", "checkbox", "id", "vrpChkQdzz", 3, "ngModelChange", "ngModel"], ["for", "vrpChkQdzz"], [3, "nzValue", "nzLabel"]], template: function ViewResumeProcessComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "nz-card", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "label", 6);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 7)(10, "nz-select", 8);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewResumeProcessComponent_Template_nz_select_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedNo, $event) || (ctx.selectedNo = $event);
        return $event;
      });
      \u0275\u0275template(12, ViewResumeProcessComponent_nz_option_12_Template, 1, 2, "nz-option", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 5)(14, "span", 10);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "span", 11);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 12)(22, "button", 13);
      \u0275\u0275listener("click", function ViewResumeProcessComponent_Template_button_click_22_listener() {
        return ctx.execute();
      });
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(26, "div", 14)(27, "div", 15)(28, "div", 16)(29, "div", 17);
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 18)(33, "div", 19)(34, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function ViewResumeProcessComponent_Template_input_ngModelChange_34_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.chkCopyOrg, $event) || (ctx.chkCopyOrg = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(35, "label", 21);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "div", 22);
      \u0275\u0275element(39, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 18)(41, "div", 24);
      \u0275\u0275element(42, "i", 25);
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(45, "div", 26);
      \u0275\u0275element(46, "i", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 16)(48, "div", 17);
      \u0275\u0275text(49);
      \u0275\u0275pipe(50, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 18)(52, "div", 24);
      \u0275\u0275element(53, "i", 28);
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "div", 22);
      \u0275\u0275element(57, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 18)(59, "div", 19)(60, "input", 29);
      \u0275\u0275twoWayListener("ngModelChange", function ViewResumeProcessComponent_Template_input_ngModelChange_60_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.chkScfl, $event) || (ctx.chkScfl = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(61, "label", 30);
      \u0275\u0275text(62);
      \u0275\u0275pipe(63, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "div", 22);
      \u0275\u0275element(65, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 18)(67, "div", 24);
      \u0275\u0275element(68, "i", 31);
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div", 22);
      \u0275\u0275element(72, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 18)(74, "div", 24);
      \u0275\u0275element(75, "i", 31);
      \u0275\u0275text(76);
      \u0275\u0275pipe(77, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(78, "div", 26);
      \u0275\u0275element(79, "i", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "div", 32)(81, "div", 16)(82, "div", 17);
      \u0275\u0275text(83);
      \u0275\u0275pipe(84, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "div", 18)(86, "div", 19)(87, "input", 33);
      \u0275\u0275twoWayListener("ngModelChange", function ViewResumeProcessComponent_Template_input_ngModelChange_87_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.chkSczz, $event) || (ctx.chkSczz = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(88, "label", 34);
      \u0275\u0275text(89);
      \u0275\u0275pipe(90, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(91, "div", 22);
      \u0275\u0275element(92, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "div", 18)(94, "div", 24);
      \u0275\u0275element(95, "i", 35);
      \u0275\u0275text(96);
      \u0275\u0275pipe(97, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(98, "div", 16)(99, "div", 17);
      \u0275\u0275text(100);
      \u0275\u0275pipe(101, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "div", 18)(103, "div", 24);
      \u0275\u0275element(104, "i", 36);
      \u0275\u0275text(105);
      \u0275\u0275pipe(106, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "div", 22);
      \u0275\u0275element(108, "i", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "div", 18)(110, "div", 19)(111, "input", 37);
      \u0275\u0275twoWayListener("ngModelChange", function ViewResumeProcessComponent_Template_input_ngModelChange_111_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.chkQdzz, $event) || (ctx.chkQdzz = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(112, "label", 38);
      \u0275\u0275text(113);
      \u0275\u0275pipe(114, "translate");
      \u0275\u0275elementEnd()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("nzBodyStyle", \u0275\u0275pureFunction0(97, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 34, "orgResumeProcess.versionName", "T\xEAn phi\xEAn b\u1EA3n"));
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedNo);
      \u0275\u0275property("nzLoading", ctx.loading())("nzPlaceHolder", \u0275\u0275pipeBind2(11, 37, "orgResumeProcess.selectPlaceholder", "-- Ch\u1ECDn phi\xEAn b\u1EA3n thay \u0111\u1ED5i --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.resumeOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(16, 40, "common.status", "Tr\u1EA1ng th\xE1i"), ": ");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("text-success", ctx.selectedNo && ctx.statusActive())("text-danger", ctx.selectedNo && !ctx.statusActive())("text-muted", !ctx.selectedNo);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", !ctx.selectedNo ? "---" : ctx.statusActive() ? \u0275\u0275pipeBind2(19, 43, "common.active", "Ho\u1EA1t \u0111\u1ED9ng") : \u0275\u0275pipeBind2(20, 46, "common.inactive", "Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("nzLoading", ctx.executing());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.executing() ? \u0275\u0275pipeBind2(24, 49, "common.processing", "\u0110ang th\u1EF1c hi\u1EC7n...") : \u0275\u0275pipeBind2(25, 52, "orgResumeProcess.execute", "Th\u1EF1c hi\u1EC7n"), " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 55, "orgResumeProcess.groupEditOrgTree", "Edit Organization Tree"));
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.chkCopyOrg);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 58, "orgResumeProcess.step.copyOrg", "Sao ch\xE9p t\u1ED5 ch\u1EE9c c\u0169"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(44, 61, "orgResumeProcess.step.setupOrg", "Thi\u1EBFt l\u1EADp t\u1ED5 ch\u1EE9c"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 64, "orgResumeProcess.groupMakeActions", "Make Actions"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(55, 67, "orgResumeProcess.step.checkDeptManager", "Ki\u1EC3m tra tr\u01B0\u1EDFng b\u1ED9 ph\u1EADn"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.chkScfl);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(63, 70, "orgResumeProcess.step.scfl", "T\u1EF1 \u0111\u1ED9ng t\u1EA1o ra quy\u1EBFt \u0111\u1ECBnh"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(70, 73, "orgResumeProcess.step.checkDecision", "Ki\u1EC3m tra quy\u1EBFt \u0111\u1ECBnh"), " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(77, 76, "orgResumeProcess.step.checkDraftDecision", "Ki\u1EC3m tra quy\u1EBFt \u0111\u1ECBnh d\u1EF1 ki\u1EBFn"), " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(84, 79, "orgResumeProcess.groupOrgHistory", "Organization History"));
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.chkSczz);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(90, 82, "orgResumeProcess.step.sczz", "T\u1EA1o ra n\u1ED9i dung thay \u0111\u1ED5i"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(97, 85, "orgResumeProcess.step.deptChangeHistory", "L\u1ECBch s\u1EED thay \u0111\u1ED5i-ph\xF2ng ban"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(101, 88, "orgResumeProcess.groupConfirmation", "Confirmation"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(106, 91, "orgResumeProcess.step.checkChange", "Ki\u1EC3m tra thay \u0111\u1ED5i"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.chkQdzz);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(114, 94, "orgResumeProcess.step.qdzz", "H\xECnh th\xE0nh t\u1ED5 ch\u1EE9c m\u1EDBi"));
    }
  }, dependencies: [CommonModule, NgForOf, FormsModule, CheckboxControlValueAccessor, NgControlStatus, NgModel, NzCardModule, NzCardComponent, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, TranslatePipe], styles: ['\n.vrp-process-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: 20px;\n  padding: 20px;\n  overflow-x: auto;\n}\n.vrp-process-group[_ngcontent-%COMP%] {\n  border: 2px solid #fd7e14;\n  border-radius: 15px;\n  background-color: #fff5f0;\n  padding: 15px;\n  min-width: 250px;\n  position: relative;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n}\n.vrp-process-header[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #d35400;\n  font-weight: bold;\n  margin-bottom: 15px;\n  font-size: 1.1em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.vrp-process-header[_ngcontent-%COMP%]::before, \n.vrp-process-header[_ngcontent-%COMP%]::after {\n  content: "\\2022";\n  margin: 0 10px;\n  color: #fd7e14;\n}\n.vrp-step-item[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  position: relative;\n}\n.vrp-step-btn[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 10px 15px;\n  text-align: center;\n  border-radius: 5px;\n  border: 1px solid #ddd;\n  background:\n    linear-gradient(\n      to bottom,\n      #ffffff 0%,\n      #f1f1f1 100%);\n  color: #333;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  position: relative;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.vrp-step-btn.vrp-active-step[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      to bottom,\n      #f39c12 0%,\n      #e67e22 100%);\n  color: white;\n  border-color: #d35400;\n}\n.vrp-step-btn.vrp-checkbox-step[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      to bottom,\n      #f8f9fa 0%,\n      #e9ecef 100%);\n  color: #555;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.vrp-step-arrow-down[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #aaa;\n  margin: -10px 0 5px 0;\n  font-size: 20px;\n}\n.vrp-group-connector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-self: center;\n  color: #aaa;\n  font-size: 24px;\n}\n.vrp-vertical-groups[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n/*# sourceMappingURL=view-resume-process.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewResumeProcessComponent, [{
    type: Component,
    args: [{ selector: "app-view-resume-process", standalone: true, imports: [CommonModule, FormsModule, NzCardModule, NzSelectModule, NzButtonModule, TranslatePipe], template: `<div class="row">
  <div class="col-12">
    <nz-card [nzBodyStyle]="{ padding: '0' }">
      <!-- Header / Controls -->
      <div class="card-header bg-white border-bottom p-3">
        <div class="row align-items-center g-3">
          <div class="col-md-auto">
            <label class="fw-bold text-muted">{{ 'orgResumeProcess.versionName' | translate:'T\xEAn phi\xEAn b\u1EA3n' }}</label>
          </div>
          <div class="col-md-4">
            <nz-select class="w-100" id="vrpSelect" [(ngModel)]="selectedNo" [nzLoading]="loading()"
                       nzShowSearch nzAllowClear
                       [nzPlaceHolder]="'orgResumeProcess.selectPlaceholder' | translate:'-- Ch\u1ECDn phi\xEAn b\u1EA3n thay \u0111\u1ED5i --'">
              <nz-option *ngFor="let r of resumeOptions()" [nzValue]="r.no" [nzLabel]="resumeLabel(r)"></nz-option>
            </nz-select>
          </div>
          <div class="col-md-auto">
            <span class="text-muted">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}: </span>
            <span id="vrpStatus" class="fw-bold" [class.text-success]="selectedNo && statusActive()"
                  [class.text-danger]="selectedNo && !statusActive()" [class.text-muted]="!selectedNo">
              {{ !selectedNo ? '---' : (statusActive() ? ('common.active' | translate:'Ho\u1EA1t \u0111\u1ED9ng') : ('common.inactive' | translate:'Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng')) }}
            </span>
          </div>
          <div class="col-md text-end">
            <button nz-button nzType="default" nzSize="small" id="vrpBtnExecute" [nzLoading]="executing()" (click)="execute()">
              {{ executing() ? ('common.processing' | translate:'\u0110ang th\u1EF1c hi\u1EC7n...') : ('orgResumeProcess.execute' | translate:'Th\u1EF1c hi\u1EC7n') }}
            </button>
          </div>
        </div>
      </div>

      <!-- Process Flow -->
      <div class="card-body bg-light">
        <div class="vrp-process-container">

          <!-- Group 1: Edit Organization Tree -->
          <div class="vrp-process-group">
            <div class="vrp-process-header">{{ 'orgResumeProcess.groupEditOrgTree' | translate:'Edit Organization Tree' }}</div>

            <div class="vrp-step-item">
              <div class="vrp-step-btn vrp-checkbox-step">
                <input type="checkbox" id="vrpChkCopyOrg" [(ngModel)]="chkCopyOrg">
                <label for="vrpChkCopyOrg">{{ 'orgResumeProcess.step.copyOrg' | translate:'Sao ch\xE9p t\u1ED5 ch\u1EE9c c\u0169' }}</label>
              </div>
            </div>

            <div class="vrp-step-arrow-down"><i class='bx bx-down-arrow-alt'></i></div>

            <div class="vrp-step-item">
              <div class="vrp-step-btn vrp-active-step">
                <i class='bx bxs-sitemap'></i> {{ 'orgResumeProcess.step.setupOrg' | translate:'Thi\u1EBFt l\u1EADp t\u1ED5 ch\u1EE9c' }}
              </div>
            </div>
          </div>

          <!-- Arrow Right -->
          <div class="vrp-group-connector">
            <i class='bx bx-right-arrow-alt' style="font-size: 2rem;"></i>
          </div>

          <!-- Group 2: Make Actions -->
          <div class="vrp-process-group">
            <div class="vrp-process-header">{{ 'orgResumeProcess.groupMakeActions' | translate:'Make Actions' }}</div>

            <div class="vrp-step-item">
              <div class="vrp-step-btn vrp-active-step">
                <i class='bx bxs-user-check'></i> {{ 'orgResumeProcess.step.checkDeptManager' | translate:'Ki\u1EC3m tra tr\u01B0\u1EDFng b\u1ED9 ph\u1EADn' }}
              </div>
            </div>

            <div class="vrp-step-arrow-down"><i class='bx bx-down-arrow-alt'></i></div>

            <div class="vrp-step-item">
              <div class="vrp-step-btn vrp-checkbox-step">
                <input type="checkbox" id="vrpChkScfl" [(ngModel)]="chkScfl">
                <label for="vrpChkScfl">{{ 'orgResumeProcess.step.scfl' | translate:'T\u1EF1 \u0111\u1ED9ng t\u1EA1o ra quy\u1EBFt \u0111\u1ECBnh' }}</label>
              </div>
            </div>

            <div class="vrp-step-arrow-down"><i class='bx bx-down-arrow-alt'></i></div>

            <div class="vrp-step-item">
              <div class="vrp-step-btn vrp-active-step">
                <i class='bx bxs-file-find'></i> {{ 'orgResumeProcess.step.checkDecision' | translate:'Ki\u1EC3m tra quy\u1EBFt \u0111\u1ECBnh' }}
              </div>
            </div>

            <div class="vrp-step-arrow-down"><i class='bx bx-down-arrow-alt'></i></div>

            <div class="vrp-step-item">
              <div class="vrp-step-btn vrp-active-step">
                <i class='bx bxs-file-find'></i> {{ 'orgResumeProcess.step.checkDraftDecision' | translate:'Ki\u1EC3m tra quy\u1EBFt \u0111\u1ECBnh d\u1EF1 ki\u1EBFn' }}
              </div>
            </div>
          </div>

          <!-- Arrow Right -->
          <div class="vrp-group-connector">
            <i class='bx bx-right-arrow-alt' style="font-size: 2rem;"></i>
          </div>

          <!-- Vertical Groups 3 & 4 -->
          <div class="vrp-vertical-groups">
            <!-- Group 3: Organization History -->
            <div class="vrp-process-group">
              <div class="vrp-process-header">{{ 'orgResumeProcess.groupOrgHistory' | translate:'Organization History' }}</div>

              <div class="vrp-step-item">
                <div class="vrp-step-btn vrp-checkbox-step">
                  <input type="checkbox" id="vrpChkSczz" [(ngModel)]="chkSczz">
                  <label for="vrpChkSczz">{{ 'orgResumeProcess.step.sczz' | translate:'T\u1EA1o ra n\u1ED9i dung thay \u0111\u1ED5i' }}</label>
                </div>
              </div>

              <div class="vrp-step-arrow-down"><i class='bx bx-down-arrow-alt'></i></div>

              <div class="vrp-step-item">
                <div class="vrp-step-btn vrp-active-step">
                  <i class='bx bx-history'></i> {{ 'orgResumeProcess.step.deptChangeHistory' | translate:'L\u1ECBch s\u1EED thay \u0111\u1ED5i-ph\xF2ng ban' }}
                </div>
              </div>
            </div>

            <!-- Group 4: Confirmation -->
            <div class="vrp-process-group">
              <div class="vrp-process-header">{{ 'orgResumeProcess.groupConfirmation' | translate:'Confirmation' }}</div>

              <div class="vrp-step-item">
                <div class="vrp-step-btn vrp-active-step">
                  <i class='bx bx-check-shield'></i> {{ 'orgResumeProcess.step.checkChange' | translate:'Ki\u1EC3m tra thay \u0111\u1ED5i' }}
                </div>
              </div>

              <div class="vrp-step-arrow-down"><i class='bx bx-down-arrow-alt'></i></div>

              <div class="vrp-step-item">
                <div class="vrp-step-btn vrp-checkbox-step">
                  <input type="checkbox" id="vrpChkQdzz" [(ngModel)]="chkQdzz">
                  <label for="vrpChkQdzz">{{ 'orgResumeProcess.step.qdzz' | translate:'H\xECnh th\xE0nh t\u1ED5 ch\u1EE9c m\u1EDBi' }}</label>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </nz-card>
  </div>
</div>
`, styles: ['/* src/app/view-resume-process/view-resume-process.component.css */\n.vrp-process-container {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: 20px;\n  padding: 20px;\n  overflow-x: auto;\n}\n.vrp-process-group {\n  border: 2px solid #fd7e14;\n  border-radius: 15px;\n  background-color: #fff5f0;\n  padding: 15px;\n  min-width: 250px;\n  position: relative;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n}\n.vrp-process-header {\n  text-align: center;\n  color: #d35400;\n  font-weight: bold;\n  margin-bottom: 15px;\n  font-size: 1.1em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.vrp-process-header::before,\n.vrp-process-header::after {\n  content: "\\2022";\n  margin: 0 10px;\n  color: #fd7e14;\n}\n.vrp-step-item {\n  margin-bottom: 15px;\n  position: relative;\n}\n.vrp-step-btn {\n  display: block;\n  width: 100%;\n  padding: 10px 15px;\n  text-align: center;\n  border-radius: 5px;\n  border: 1px solid #ddd;\n  background:\n    linear-gradient(\n      to bottom,\n      #ffffff 0%,\n      #f1f1f1 100%);\n  color: #333;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  position: relative;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.vrp-step-btn.vrp-active-step {\n  background:\n    linear-gradient(\n      to bottom,\n      #f39c12 0%,\n      #e67e22 100%);\n  color: white;\n  border-color: #d35400;\n}\n.vrp-step-btn.vrp-checkbox-step {\n  background:\n    linear-gradient(\n      to bottom,\n      #f8f9fa 0%,\n      #e9ecef 100%);\n  color: #555;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.vrp-step-arrow-down {\n  text-align: center;\n  color: #aaa;\n  margin: -10px 0 5px 0;\n  font-size: 20px;\n}\n.vrp-group-connector {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  align-self: center;\n  color: #aaa;\n  font-size: 24px;\n}\n.vrp-vertical-groups {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n/*# sourceMappingURL=view-resume-process.component.css.map */\n'] }]
  }], () => [{ type: ViewResumeProcessService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewResumeProcessComponent, { className: "ViewResumeProcessComponent", filePath: "src/app/view-resume-process/view-resume-process.component.ts", lineNumber: 52 });
})();
export {
  ViewResumeProcessComponent
};
//# debugId=317baed7-cc44-5169-8f84-2f959af8dd88
//# sourceMappingURL=chunk-4UQALC2Z.js.map
