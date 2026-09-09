import {
  NzSwitchComponent,
  NzSwitchModule
} from "./chunk-7HR5KXO4.js";
import {
  NzTagComponent,
  NzTagModule
} from "./chunk-HTQAHYN3.js";
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
  NzCardComponent,
  NzCardModule
} from "./chunk-FNWKNPAX.js";
import {
  NzTableCellDirective,
  NzTableComponent,
  NzTableModule,
  NzTbodyComponent,
  NzThMeasureDirective,
  NzTheadComponent,
  NzTrDirective
} from "./chunk-ON5PSYJR.js";
import "./chunk-VWYGF7JF.js";
import "./chunk-JSOAL7UF.js";
import {
  NzOptionComponent,
  NzSelectComponent,
  NzSelectModule
} from "./chunk-2QLZSMGV.js";
import {
  NzAlertComponent,
  NzAlertModule
} from "./chunk-BYJYXGGS.js";
import {
  ActivatedRoute
} from "./chunk-2GOAB54B.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  ɵNgNoValidate
} from "./chunk-TNYKEBYQ.js";
import {
  CommonModule,
  Component,
  HttpClient,
  HttpParams,
  Injectable,
  NgForOf,
  NgIf,
  NzButtonComponent,
  NzButtonModule,
  NzTransitionPatchDirective,
  NzWaveDirective,
  __spreadValues,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTW5U2M5.js";

// src/app/evs-distribution-rate-panel/evs-distribution-rate-panel.service.ts
var API_BASE = "/evs/manage/api";
var EvsDistributionRatePanelService = class _EvsDistributionRatePanelService {
  constructor(http) {
    this.http = http;
  }
  http;
  getResumeList(evsType) {
    return this.http.get(`${API_BASE}/resume/evsResumeList`, {
      params: new HttpParams().set("evsType", evsType),
      withCredentials: true
    });
  }
  getList(resumeSeq, scoreType, activity, evsType) {
    let params = new HttpParams().set("evsType", evsType);
    if (resumeSeq)
      params = params.set("resumeSeq", resumeSeq);
    if (scoreType)
      params = params.set("scoreType", scoreType);
    if (activity)
      params = params.set("activity", activity);
    return this.http.get(`${API_BASE}/evsScore/list`, { params, withCredentials: true });
  }
  getOne(seq) {
    return this.http.get(`${API_BASE}/evsScore/${encodeURIComponent(seq)}`, { withCredentials: true });
  }
  save(payload) {
    return this.http.post(`${API_BASE}/evsScore/save`, payload, { withCredentials: true });
  }
  delete(seq) {
    return this.http.post(`${API_BASE}/evsScore/delete`, { seq }, { withCredentials: true });
  }
  static \u0275fac = function EvsDistributionRatePanelService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EvsDistributionRatePanelService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EvsDistributionRatePanelService, factory: _EvsDistributionRatePanelService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EvsDistributionRatePanelService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/evs-distribution-rate-panel/evs-distribution-rate-panel.component.ts
var _c0 = () => ({ x: "1200px" });
function EvsDistributionRatePanelComponent_nz_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 36);
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    \u0275\u0275property("nzValue", r_r2.seq)("nzLabel", r_r2.resumeName);
  }
}
function EvsDistributionRatePanelComponent_nz_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 36);
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    \u0275\u0275property("nzValue", t_r3)("nzLabel", t_r3);
  }
}
function EvsDistributionRatePanelComponent_nz_alert_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 37);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r3.errorMessage() ?? "");
  }
}
function EvsDistributionRatePanelComponent_tr_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 38);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function EvsDistributionRatePanelComponent_tr_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 39);
    \u0275\u0275listener("click", function EvsDistributionRatePanelComponent_tr_78_Template_tr_click_0_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openEditModal(row_r6));
    });
    \u0275\u0275elementStart(1, "td", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 40);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 40);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 40);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 40);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 40);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 41);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 40)(22, "nz-tag", 42);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td", 40)(27, "button", 43);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275listener("click", function EvsDistributionRatePanelComponent_tr_78_Template_button_click_27_listener($event) {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r3.openEditModal(row_r6));
    });
    \u0275\u0275element(29, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 43);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275listener("click", function EvsDistributionRatePanelComponent_tr_78_Template_button_click_30_listener($event) {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r3.openDeleteConfirm(row_r6));
    });
    \u0275\u0275element(32, "i", 45);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r7 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.scoreType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.no);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.name || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.a || 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.b || 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.c || 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.d || 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.e || 0);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-success", ctx_r3.rowSumOk(row_r6))("text-danger", !ctx_r3.rowSumOk(row_r6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.sum || 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColor", ctx_r3.activityTagColor(row_r6.activity));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r6.activity === "1" ? \u0275\u0275pipeBind2(24, 19, "evs.manage.viewEvsDistributionRatePanel.badge.active", "S\u1EED d\u1EE5ng") : \u0275\u0275pipeBind2(25, 22, "evs.manage.viewEvsDistributionRatePanel.badge.inactive", "Kh\xF4ng s\u1EED d\u1EE5ng"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(28, 25, "evs.manage.viewEvsDistributionRatePanel.btn.edit", "S\u1EEDa"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(31, 28, "evs.manage.viewEvsDistributionRatePanel.btn.delete", "X\xF3a"));
  }
}
function EvsDistributionRatePanelComponent_ng_template_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r8 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r8, " ");
  }
}
function EvsDistributionRatePanelComponent_ng_container_84_nz_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 36);
  }
  if (rf & 2) {
    const t_r10 = ctx.$implicit;
    \u0275\u0275property("nzValue", t_r10)("nzLabel", t_r10);
  }
}
function EvsDistributionRatePanelComponent_ng_container_84_div_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "nz-alert", 68);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("nzMessage", \u0275\u0275pipeBind2(2, 1, "evs.manage.viewEvsDistributionRatePanel.msg.sumWarning", "T\u1ED5ng t\u1EF7 l\u1EC7 ph\xE2n b\u1ED5 ph\u1EA3i b\u1EB1ng 100. Gi\xE1 tr\u1ECB hi\u1EC7n t\u1EA1i:") + " " + ctx_r3.formSum);
  }
}
function EvsDistributionRatePanelComponent_ng_container_84_div_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 69);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind2(3, 3, "evs.manage.viewEvsDistributionRatePanel.modal.auditInfo", "Th\xF4ng tin c\u1EADp nh\u1EADt"), ": ", ctx_r3.form.updatedBy, " \u2014 ", ctx_r3.form.updateDate, " ");
  }
}
function EvsDistributionRatePanelComponent_ng_container_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 46)(2, "div", 47)(3, "label", 48);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span", 49);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "nz-select", 50);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275listener("ngModelChange", function EvsDistributionRatePanelComponent_ng_container_84_Template_nz_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onScoreTypeChange($event));
    });
    \u0275\u0275template(10, EvsDistributionRatePanelComponent_ng_container_84_nz_option_10_Template, 1, 2, "nz-option", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 47)(12, "label", 51);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "nz-switch", 52);
    \u0275\u0275twoWayListener("ngModelChange", function EvsDistributionRatePanelComponent_ng_container_84_Template_nz_switch_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.activity, $event) || (ctx_r3.form.activity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(16, "span", 53);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 47)(20, "label", 48);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function EvsDistributionRatePanelComponent_ng_container_84_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.no, $event) || (ctx_r3.form.no = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 47)(25, "label", 48);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementStart(28, "span", 49);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function EvsDistributionRatePanelComponent_ng_container_84_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.name, $event) || (ctx_r3.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 47)(32, "label", 48);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function EvsDistributionRatePanelComponent_ng_container_84_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.deptNo, $event) || (ctx_r3.form.deptNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 47)(37, "label", 48);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function EvsDistributionRatePanelComponent_ng_container_84_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.deptName, $event) || (ctx_r3.form.deptName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 47)(42, "label", 48);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function EvsDistributionRatePanelComponent_ng_container_84_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.postGradeNo, $event) || (ctx_r3.form.postGradeNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 47)(47, "label", 48);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function EvsDistributionRatePanelComponent_ng_container_84_Template_input_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.postGradeName, $event) || (ctx_r3.form.postGradeName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 3)(52, "div", 60)(53, "span", 61);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "nz-tag", 42);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "div", 47)(59, "label", 48);
    \u0275\u0275text(60, "EX (A)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function EvsDistributionRatePanelComponent_ng_container_84_Template_input_ngModelChange_61_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.a, $event) || (ctx_r3.form.a = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 47)(63, "label", 48);
    \u0275\u0275text(64, "VG (B)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function EvsDistributionRatePanelComponent_ng_container_84_Template_input_ngModelChange_65_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.b, $event) || (ctx_r3.form.b = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 47)(67, "label", 48);
    \u0275\u0275text(68, "GD (C)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function EvsDistributionRatePanelComponent_ng_container_84_Template_input_ngModelChange_69_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.c, $event) || (ctx_r3.form.c = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 47)(71, "label", 48);
    \u0275\u0275text(72, "NI (D)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function EvsDistributionRatePanelComponent_ng_container_84_Template_input_ngModelChange_73_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.d, $event) || (ctx_r3.form.d = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 47)(75, "label", 48);
    \u0275\u0275text(76, "UN (E)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function EvsDistributionRatePanelComponent_ng_container_84_Template_input_ngModelChange_77_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.form.e, $event) || (ctx_r3.form.e = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275template(78, EvsDistributionRatePanelComponent_ng_container_84_div_78_Template, 3, 4, "div", 67)(79, EvsDistributionRatePanelComponent_ng_container_84_div_79_Template, 4, 6, "div", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 29, "evs.manage.viewEvsDistributionRatePanel.modal.type", "Lo\u1EA1i"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r3.form.scoreType)("nzPlaceHolder", \u0275\u0275pipeBind2(9, 32, "evs.manage.viewEvsDistributionRatePanel.modal.selectOption", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.scoreTypes);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 35, "evs.manage.viewEvsDistributionRatePanel.modal.status", "Tr\u1EA1ng th\xE1i"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.activity);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 38, "evs.manage.viewEvsDistributionRatePanel.modal.activeLabel", "S\u1EED d\u1EE5ng"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 41, "evs.manage.viewEvsDistributionRatePanel.modal.orderNo", "NO"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.no);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(27, 44, "evs.manage.viewEvsDistributionRatePanel.modal.name", "T\xEAn"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.name);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 47, "evs.manage.viewEvsDistributionRatePanel.modal.deptCode", "M\xE3 ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.deptNo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 50, "evs.manage.viewEvsDistributionRatePanel.modal.deptName", "T\xEAn ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.deptName);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 53, "evs.manage.viewEvsDistributionRatePanel.modal.gradeCode", "M\xE3 c\u1EA5p b\u1EADc"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.postGradeNo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 56, "evs.manage.viewEvsDistributionRatePanel.modal.gradeName", "T\xEAn c\u1EA5p b\u1EADc"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.postGradeName);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(55, 59, "evs.manage.viewEvsDistributionRatePanel.modal.ratioLabel", "T\u1EF7 l\u1EC7 ph\xE2n b\u1ED5 (EX + VG + GD + NI + UN = 100)"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColor", ctx_r3.formSumOk ? "success" : "error");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("SUM = ", ctx_r3.formSum);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.a);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.b);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.c);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.d);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.form.e);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.formSumOk);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.form.updatedBy);
  }
}
function EvsDistributionRatePanelComponent_ng_container_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 70);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.deleteConfirmMessage);
  }
}
var I18N_KEYS = [
  "evs.manage.viewEvsDistributionRatePanel.search.evaluationName",
  "evs.manage.viewEvsDistributionRatePanel.search.type",
  "evs.manage.viewEvsDistributionRatePanel.search.allOption",
  "evs.manage.viewEvsDistributionRatePanel.search.status",
  "evs.manage.viewEvsDistributionRatePanel.search.active",
  "evs.manage.viewEvsDistributionRatePanel.search.inactive",
  "evs.manage.viewEvsDistributionRatePanel.btn.search",
  "evs.manage.viewEvsDistributionRatePanel.btn.clearFilter",
  "evs.manage.viewEvsDistributionRatePanel.btn.addNew",
  "evs.manage.viewEvsDistributionRatePanel.col.no",
  "evs.manage.viewEvsDistributionRatePanel.col.type",
  "evs.manage.viewEvsDistributionRatePanel.col.orderNo",
  "evs.manage.viewEvsDistributionRatePanel.col.name",
  "evs.manage.viewEvsDistributionRatePanel.col.status",
  "evs.manage.viewEvsDistributionRatePanel.col.action",
  "evs.manage.viewEvsDistributionRatePanel.modal.addTitle",
  "evs.manage.viewEvsDistributionRatePanel.modal.editTitle",
  "evs.manage.viewEvsDistributionRatePanel.modal.type",
  "evs.manage.viewEvsDistributionRatePanel.modal.selectOption",
  "evs.manage.viewEvsDistributionRatePanel.modal.status",
  "evs.manage.viewEvsDistributionRatePanel.modal.activeLabel",
  "evs.manage.viewEvsDistributionRatePanel.modal.orderNo",
  "evs.manage.viewEvsDistributionRatePanel.modal.name",
  "evs.manage.viewEvsDistributionRatePanel.modal.deptCode",
  "evs.manage.viewEvsDistributionRatePanel.modal.deptName",
  "evs.manage.viewEvsDistributionRatePanel.modal.gradeCode",
  "evs.manage.viewEvsDistributionRatePanel.modal.gradeName",
  "evs.manage.viewEvsDistributionRatePanel.modal.ratioLabel",
  "evs.manage.viewEvsDistributionRatePanel.modal.auditInfo",
  "evs.manage.viewEvsDistributionRatePanel.modal.deleteTitle",
  "evs.manage.viewEvsDistributionRatePanel.modal.deleteConfirm",
  "evs.manage.viewEvsDistributionRatePanel.msg.sumWarning",
  "evs.manage.viewEvsDistributionRatePanel.msg.loadError",
  "evs.manage.viewEvsDistributionRatePanel.msg.selectType",
  "evs.manage.viewEvsDistributionRatePanel.msg.enterName",
  "evs.manage.viewEvsDistributionRatePanel.msg.sumError",
  "evs.manage.viewEvsDistributionRatePanel.msg.saveError",
  "evs.manage.viewEvsDistributionRatePanel.msg.deleteError",
  "evs.manage.viewEvsDistributionRatePanel.badge.active",
  "evs.manage.viewEvsDistributionRatePanel.badge.inactive",
  "evs.manage.viewEvsDistributionRatePanel.btn.edit",
  "evs.manage.viewEvsDistributionRatePanel.btn.delete",
  "common.close",
  "common.save",
  "common.cancel",
  "common.stt",
  "common.action",
  "common.noData",
  "common.totalRows"
];
var PAGE_SIZE_OPTIONS = [25, 50, 100, 200];
var SCORE_TYPES = ["CPNY", "DEPT", "EMP"];
var EMPTY_FORM = {
  seq: null,
  scoreType: null,
  no: "",
  name: "",
  deptNo: "",
  deptName: "",
  postGradeNo: "",
  postGradeName: "",
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0,
  activity: true,
  updatedBy: null,
  updateDate: null
};
var EvsDistributionRatePanelComponent = class _EvsDistributionRatePanelComponent {
  constructor(api, i18n, message, route) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
    this.route = route;
  }
  api;
  i18n;
  message;
  route;
  pageSizeOptions = PAGE_SIZE_OPTIONS;
  scoreTypes = SCORE_TYPES;
  evsType = "";
  resumeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "resumeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  resumeSeq = null;
  searchScoreType = null;
  searchActivity = null;
  rows = signal(
    [],
    ...ngDevMode ? [{ debugName: "rows" }] : (
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
  modalVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "modalVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  saving = signal(
    false,
    ...ngDevMode ? [{ debugName: "saving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isNew = signal(
    true,
    ...ngDevMode ? [{ debugName: "isNew" }] : (
      /* istanbul ignore next */
      []
    )
  );
  modalTitle = computed(
    () => this.isNew() ? this.i18n.t("evs.manage.viewEvsDistributionRatePanel.modal.addTitle", "Th\xEAm m\u1EDBi t\u1EF7 l\u1EC7 ph\xE2n b\u1ED5") : this.i18n.t("evs.manage.viewEvsDistributionRatePanel.modal.editTitle", "Ch\u1EC9nh s\u1EEDa t\u1EF7 l\u1EC7 ph\xE2n b\u1ED5"),
    ...ngDevMode ? [{ debugName: "modalTitle" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = __spreadValues({}, EMPTY_FORM);
  deleteVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "deleteVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  deleting = signal(
    false,
    ...ngDevMode ? [{ debugName: "deleting" }] : (
      /* istanbul ignore next */
      []
    )
  );
  deleteTarget = null;
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.route.queryParamMap.subscribe((params) => {
      this.evsType = params.get("evsType") ?? "";
      this.loadResumeOptions();
    });
  }
  loadResumeOptions() {
    this.api.getResumeList(this.evsType).subscribe({
      next: (rows) => {
        this.resumeOptions.set(rows ?? []);
        if (rows && rows.length) {
          this.resumeSeq = rows[0].seq;
          this.search();
        }
      },
      error: () => this.resumeOptions.set([])
    });
  }
  search() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getList(this.resumeSeq ?? "", this.searchScoreType ?? "", this.searchActivity ?? "", this.evsType).subscribe({
      next: (rows) => {
        this.rows.set(rows ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("evs.manage.viewEvsDistributionRatePanel.msg.loadError", "L\u1ED7i khi t\u1EA3i th\xF4ng tin t\u1EF7 l\u1EC7 ph\xE2n b\u1ED5."));
        this.rows.set([]);
        this.loading.set(false);
      }
    });
  }
  clearSearch() {
    this.resumeSeq = this.resumeOptions()[0]?.seq ?? null;
    this.searchScoreType = null;
    this.searchActivity = null;
    this.search();
  }
  activityTagColor(activity) {
    return activity === "1" ? "success" : "default";
  }
  rowSumOk(row) {
    return Math.abs((Number(row.sum) || 0) - 100) < 1e-3;
  }
  // ==================== Modal Thêm mới / Cập nhật ====================
  openAddModal() {
    this.isNew.set(true);
    this.form = __spreadValues({}, EMPTY_FORM);
    this.modalVisible.set(true);
  }
  openEditModal(row) {
    this.api.getOne(row.seq).subscribe({
      next: (r) => {
        if (!r)
          return;
        this.isNew.set(false);
        this.form = {
          seq: r.seq,
          scoreType: r.scoreType || null,
          no: r.no || "",
          name: r.name || "",
          deptNo: r.deptNo || "",
          deptName: r.deptName || "",
          postGradeNo: r.postGradeNo || "",
          postGradeName: r.postGradeName || "",
          a: Number(r.a) || 0,
          b: Number(r.b) || 0,
          c: Number(r.c) || 0,
          d: Number(r.d) || 0,
          e: Number(r.e) || 0,
          activity: r.activity === "1",
          updatedBy: r.updatedBy || null,
          updateDate: r.updateDate || null
        };
        this.modalVisible.set(true);
      },
      error: () => this.message.error(this.i18n.t("evs.manage.viewEvsDistributionRatePanel.msg.loadError", "L\u1ED7i khi t\u1EA3i th\xF4ng tin t\u1EF7 l\u1EC7 ph\xE2n b\u1ED5."))
    });
  }
  closeModal() {
    this.modalVisible.set(false);
  }
  onScoreTypeChange(value) {
    this.form.scoreType = value;
    if (value === "CPNY") {
      this.form.no = "CPNY";
      this.form.name = "CPNY";
    }
  }
  get formSum() {
    const sum = (Number(this.form.a) || 0) + (Number(this.form.b) || 0) + (Number(this.form.c) || 0) + (Number(this.form.d) || 0) + (Number(this.form.e) || 0);
    return Math.round(sum * 100) / 100;
  }
  get formSumOk() {
    return Math.abs(this.formSum - 100) < 1e-3;
  }
  saveForm() {
    if (!this.form.scoreType) {
      this.message.warning(this.i18n.t("evs.manage.viewEvsDistributionRatePanel.msg.selectType", "Vui l\xF2ng ch\u1ECDn Lo\u1EA1i."));
      return;
    }
    const name = this.form.name.trim();
    if (!name) {
      this.message.warning(this.i18n.t("evs.manage.viewEvsDistributionRatePanel.msg.enterName", "Vui l\xF2ng nh\u1EADp T\xEAn."));
      return;
    }
    const sum = this.formSum;
    if (!this.formSumOk) {
      this.message.warning(this.i18n.t("evs.manage.viewEvsDistributionRatePanel.msg.sumError", "T\u1ED5ng t\u1EF7 l\u1EC7 ph\xE2n b\u1ED5 (EX+VG+GD+NI+UN) ph\u1EA3i b\u1EB1ng 100. Gi\xE1 tr\u1ECB hi\u1EC7n t\u1EA1i:") + " " + sum);
      return;
    }
    if (!this.resumeSeq)
      return;
    const payload = {
      seq: this.form.seq,
      resumeSeq: this.resumeSeq,
      scoreType: this.form.scoreType,
      no: this.form.no,
      name,
      deptNo: this.form.deptNo,
      deptName: this.form.deptName,
      postGradeNo: this.form.postGradeNo,
      postGradeName: this.form.postGradeName,
      a: Number(this.form.a) || 0,
      b: Number(this.form.b) || 0,
      c: Number(this.form.c) || 0,
      d: Number(this.form.d) || 0,
      e: Number(this.form.e) || 0,
      activity: this.form.activity ? "1" : "0"
    };
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: () => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.search();
      },
      error: () => {
        this.saving.set(false);
        this.message.error(this.i18n.t("evs.manage.viewEvsDistributionRatePanel.msg.saveError", "L\u1ED7i khi l\u01B0u d\u1EEF li\u1EC7u. Vui l\xF2ng th\u1EED l\u1EA1i."));
      }
    });
  }
  // ==================== Xóa ====================
  openDeleteConfirm(row) {
    this.deleteTarget = row;
    this.deleteVisible.set(true);
  }
  closeDeleteConfirm() {
    this.deleteVisible.set(false);
  }
  get deleteConfirmMessage() {
    const template = this.i18n.t("evs.manage.viewEvsDistributionRatePanel.modal.deleteConfirm", 'B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a t\u1EF7 l\u1EC7 "{0}"?');
    return template.replace("{0}", this.deleteTarget?.name ?? "");
  }
  confirmDelete() {
    if (!this.deleteTarget)
      return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.seq).subscribe({
      next: () => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.search();
      },
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t("evs.manage.viewEvsDistributionRatePanel.msg.deleteError", "L\u1ED7i khi x\xF3a d\u1EEF li\u1EC7u. Vui l\xF2ng th\u1EED l\u1EA1i."));
      }
    });
  }
  static \u0275fac = function EvsDistributionRatePanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EvsDistributionRatePanelComponent)(\u0275\u0275directiveInject(EvsDistributionRatePanelService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EvsDistributionRatePanelComponent, selectors: [["app-evs-distribution-rate-panel"]], decls: 90, vars: 105, consts: [["edrTable", "nzTable"], ["edrTotalTpl", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["name", "edrResumeSeq", 1, "w-100", 3, "ngModelChange", "ngModel"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col-md-2"], ["name", "edrSearchScoreType", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["name", "edrSearchActivity", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["nzValue", "1", 3, "nzLabel"], ["nzValue", "0", 3, "nzLabel"], [1, "col-md-5", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "100px", 1, "text-center"], ["nzWidth", "90px", 1, "text-center"], ["nzWidth", "180px"], ["nzWidth", "70px", 1, "text-center"], ["nzWidth", "80px", 1, "text-center"], ["nzWidth", "110px", 1, "text-center"], [4, "ngIf"], ["class", "edr-row-clickable", 3, "click", 4, "ngFor", "ngForOf"], ["nzWidth", "700px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], ["nzOkDanger", "", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "11", 1, "text-center", "text-muted"], [1, "edr-row-clickable", 3, "click"], [1, "text-center"], [1, "text-center", "fw-semibold"], [3, "nzColor"], ["nz-button", "", "nzType", "text", "nzSize", "small", 3, "click", "title"], [1, "bx", "bx-edit", "text-warning"], [1, "bx", "bx-trash", "text-danger"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label", "fw-semibold"], [1, "text-danger"], ["name", "edrFormScoreType", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [1, "form-label", "fw-semibold", "d-block"], ["name", "edrFormActivity", 3, "ngModelChange", "ngModel"], [1, "ms-2", "small", "text-muted"], ["nz-input", "", "name", "edrFormNo", "maxlength", "20", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "edrFormName", "maxlength", "100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "edrFormDeptNo", "maxlength", "20", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "edrFormDeptName", "maxlength", "60", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "edrFormPostGradeNo", "maxlength", "20", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "edrFormPostGradeName", "maxlength", "60", 3, "ngModelChange", "ngModel"], [1, "d-flex", "justify-content-between", "align-items-center", "border-top", "pt-3"], [1, "fw-semibold"], ["nz-input", "", "type", "number", "name", "edrFormA", "min", "0", "max", "100", "step", "0.01", 1, "text-center", 3, "ngModelChange", "ngModel"], ["nz-input", "", "type", "number", "name", "edrFormB", "min", "0", "max", "100", "step", "0.01", 1, "text-center", 3, "ngModelChange", "ngModel"], ["nz-input", "", "type", "number", "name", "edrFormC", "min", "0", "max", "100", "step", "0.01", 1, "text-center", 3, "ngModelChange", "ngModel"], ["nz-input", "", "type", "number", "name", "edrFormD", "min", "0", "max", "100", "step", "0.01", 1, "text-center", 3, "ngModelChange", "ngModel"], ["nz-input", "", "type", "number", "name", "edrFormE", "min", "0", "max", "100", "step", "0.01", 1, "text-center", 3, "ngModelChange", "ngModel"], ["class", "col-12", 4, "ngIf"], ["nzType", "error", "nzShowIcon", "", 3, "nzMessage"], [1, "small", "text-muted"], [1, "mb-0"]], template: function EvsDistributionRatePanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "nz-card", 4)(3, "form", 5);
      \u0275\u0275listener("ngSubmit", function EvsDistributionRatePanelComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 6)(5, "label", 7);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "nz-select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function EvsDistributionRatePanelComponent_Template_nz_select_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.resumeSeq, $event) || (ctx.resumeSeq = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(9, EvsDistributionRatePanelComponent_nz_option_9_Template, 1, 2, "nz-option", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 10)(11, "label", 7);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "nz-select", 11);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function EvsDistributionRatePanelComponent_Template_nz_select_ngModelChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchScoreType, $event) || (ctx.searchScoreType = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(16, EvsDistributionRatePanelComponent_nz_option_16_Template, 1, 2, "nz-option", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 10)(18, "label", 7);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "nz-select", 12);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function EvsDistributionRatePanelComponent_Template_nz_select_ngModelChange_21_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchActivity, $event) || (ctx.searchActivity = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275element(23, "nz-option", 13);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275element(25, "nz-option", 14);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 15)(28, "button", 16);
      \u0275\u0275element(29, "i", 17);
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "button", 18);
      \u0275\u0275listener("click", function EvsDistributionRatePanelComponent_Template_button_click_32_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(33, "i", 19);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "button", 20);
      \u0275\u0275listener("click", function EvsDistributionRatePanelComponent_Template_button_click_36_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(37, "i", 21);
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(40, "nz-card");
      \u0275\u0275template(41, EvsDistributionRatePanelComponent_nz_alert_41_Template, 1, 1, "nz-alert", 22);
      \u0275\u0275elementStart(42, "nz-table", 23, 0)(44, "thead")(45, "tr")(46, "th", 24);
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "th", 25);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "th", 26);
      \u0275\u0275text(53);
      \u0275\u0275pipe(54, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "th", 27);
      \u0275\u0275text(56);
      \u0275\u0275pipe(57, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "th", 28);
      \u0275\u0275text(59, "EX(A)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "th", 28);
      \u0275\u0275text(61, "VG(B)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "th", 28);
      \u0275\u0275text(63, "GD(C)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "th", 28);
      \u0275\u0275text(65, "NI(D)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "th", 28);
      \u0275\u0275text(67, "UN(E)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "th", 29);
      \u0275\u0275text(69, "SUM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "th", 30);
      \u0275\u0275text(71);
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "th", 26);
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(76, "tbody");
      \u0275\u0275template(77, EvsDistributionRatePanelComponent_tr_77_Template, 4, 4, "tr", 31)(78, EvsDistributionRatePanelComponent_tr_78_Template, 33, 31, "tr", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275template(79, EvsDistributionRatePanelComponent_ng_template_79_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(81, "nz-modal", 33);
      \u0275\u0275pipe(82, "translate");
      \u0275\u0275pipe(83, "translate");
      \u0275\u0275listener("nzOnCancel", function EvsDistributionRatePanelComponent_Template_nz_modal_nzOnCancel_81_listener() {
        return ctx.closeModal();
      })("nzOnOk", function EvsDistributionRatePanelComponent_Template_nz_modal_nzOnOk_81_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(84, EvsDistributionRatePanelComponent_ng_container_84_Template, 80, 62, "ng-container", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "nz-modal", 35);
      \u0275\u0275pipe(86, "translate");
      \u0275\u0275pipe(87, "translate");
      \u0275\u0275pipe(88, "translate");
      \u0275\u0275listener("nzOnCancel", function EvsDistributionRatePanelComponent_Template_nz_modal_nzOnCancel_85_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function EvsDistributionRatePanelComponent_Template_nz_modal_nzOnOk_85_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(89, EvsDistributionRatePanelComponent_ng_container_89_Template, 3, 1, "ng-container", 34);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const edrTable_r11 = \u0275\u0275reference(43);
      const edrTotalTpl_r12 = \u0275\u0275reference(80);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 41, "evs.manage.viewEvsDistributionRatePanel.search.evaluationName", "T\xEAn \u0111\xE1nh gi\xE1"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.resumeSeq);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.resumeOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 44, "evs.manage.viewEvsDistributionRatePanel.search.type", "Lo\u1EA1i"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchScoreType);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(15, 47, "evs.manage.viewEvsDistributionRatePanel.search.allOption", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.scoreTypes);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 50, "evs.manage.viewEvsDistributionRatePanel.search.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchActivity);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(22, 53, "evs.manage.viewEvsDistributionRatePanel.search.allOption", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(24, 56, "evs.manage.viewEvsDistributionRatePanel.search.active", "S\u1EED d\u1EE5ng"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(26, 59, "evs.manage.viewEvsDistributionRatePanel.search.inactive", "Kh\xF4ng s\u1EED d\u1EE5ng"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(31, 62, "evs.manage.viewEvsDistributionRatePanel.btn.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(35, 65, "evs.manage.viewEvsDistributionRatePanel.btn.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(39, 68, "evs.manage.viewEvsDistributionRatePanel.btn.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", edrTotalTpl_r12)("nzScroll", \u0275\u0275pureFunction0(104, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 71, "evs.manage.viewEvsDistributionRatePanel.col.no", "No."));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 74, "evs.manage.viewEvsDistributionRatePanel.col.type", "Lo\u1EA1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 77, "evs.manage.viewEvsDistributionRatePanel.col.orderNo", "NO"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 80, "evs.manage.viewEvsDistributionRatePanel.col.name", "T\xEAn"));
      \u0275\u0275advance(15);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(72, 83, "evs.manage.viewEvsDistributionRatePanel.col.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(75, 86, "evs.manage.viewEvsDistributionRatePanel.col.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", edrTable_r11.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", ctx.modalTitle())("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(82, 89, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(83, 92, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(4);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(86, 95, "evs.manage.viewEvsDistributionRatePanel.modal.deleteTitle", "X\xE1c nh\u1EADn x\xF3a"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(87, 98, "evs.manage.viewEvsDistributionRatePanel.btn.delete", "X\xF3a"))("nzCancelText", \u0275\u0275pipeBind2(88, 101, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, MinValidator, MaxValidator, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzSwitchModule, NzSwitchComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, NzTagModule, NzTagComponent, TranslatePipe], styles: ["\n  .edr-row-clickable {\n  cursor: pointer;\n}\n/*# sourceMappingURL=evs-distribution-rate-panel.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EvsDistributionRatePanelComponent, [{
    type: Component,
    args: [{ selector: "app-evs-distribution-rate-panel", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzSelectModule,
      NzButtonModule,
      NzSwitchModule,
      NzModalModule,
      NzAlertModule,
      NzTagModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3" (ngSubmit)="search()">
        <div class="col-md-3">
          <label class="form-label">{{ 'evs.manage.viewEvsDistributionRatePanel.search.evaluationName' | translate:'T\xEAn \u0111\xE1nh gi\xE1' }}</label>
          <nz-select class="w-100" [(ngModel)]="resumeSeq" name="edrResumeSeq">
            <nz-option *ngFor="let r of resumeOptions()" [nzValue]="r.seq" [nzLabel]="r.resumeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'evs.manage.viewEvsDistributionRatePanel.search.type' | translate:'Lo\u1EA1i' }}</label>
          <nz-select class="w-100" [(ngModel)]="searchScoreType" name="edrSearchScoreType" nzAllowClear
                     [nzPlaceHolder]="'evs.manage.viewEvsDistributionRatePanel.search.allOption' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let t of scoreTypes" [nzValue]="t" [nzLabel]="t"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'evs.manage.viewEvsDistributionRatePanel.search.status' | translate:'Tr\u1EA1ng th\xE1i' }}</label>
          <nz-select class="w-100" [(ngModel)]="searchActivity" name="edrSearchActivity" nzAllowClear
                     [nzPlaceHolder]="'evs.manage.viewEvsDistributionRatePanel.search.allOption' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option nzValue="1" [nzLabel]="'evs.manage.viewEvsDistributionRatePanel.search.active' | translate:'S\u1EED d\u1EE5ng'"></nz-option>
            <nz-option nzValue="0" [nzLabel]="'evs.manage.viewEvsDistributionRatePanel.search.inactive' | translate:'Kh\xF4ng s\u1EED d\u1EE5ng'"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-5 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'evs.manage.viewEvsDistributionRatePanel.btn.search' | translate:'Tra c\u1EE9u' }}
          </button>
          <button nz-button type="button" (click)="clearSearch()">
            <i class="bx bx-x"></i> {{ 'evs.manage.viewEvsDistributionRatePanel.btn.clearFilter' | translate:'X\xF3a l\u1ECDc' }}
          </button>
          <button nz-button nzType="primary" type="button" (click)="openAddModal()">
            <i class="bx bx-plus"></i> {{ 'evs.manage.viewEvsDistributionRatePanel.btn.addNew' | translate:'Th\xEAm m\u1EDBi' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="edrTotalTpl"
                [nzScroll]="{ x: '1200px' }" #edrTable="nzTable">
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'evs.manage.viewEvsDistributionRatePanel.col.no' | translate:'No.' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'evs.manage.viewEvsDistributionRatePanel.col.type' | translate:'Lo\u1EA1i' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'evs.manage.viewEvsDistributionRatePanel.col.orderNo' | translate:'NO' }}</th>
            <th nzWidth="180px">{{ 'evs.manage.viewEvsDistributionRatePanel.col.name' | translate:'T\xEAn' }}</th>
            <th class="text-center" nzWidth="70px">EX(A)</th>
            <th class="text-center" nzWidth="70px">VG(B)</th>
            <th class="text-center" nzWidth="70px">GD(C)</th>
            <th class="text-center" nzWidth="70px">NI(D)</th>
            <th class="text-center" nzWidth="70px">UN(E)</th>
            <th class="text-center" nzWidth="80px">SUM</th>
            <th class="text-center" nzWidth="110px">{{ 'evs.manage.viewEvsDistributionRatePanel.col.status' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'evs.manage.viewEvsDistributionRatePanel.col.action' | translate:'Thao t\xE1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="11" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of edrTable.data; let i = index" class="edr-row-clickable" (click)="openEditModal(row)">
            <td class="text-center">{{ i + 1 }}</td>
            <td class="text-center">{{ row.scoreType }}</td>
            <td class="text-center">{{ row.no }}</td>
            <td [attr.title]="row.name || null">{{ row.name }}</td>
            <td class="text-center">{{ row.a || 0 }}</td>
            <td class="text-center">{{ row.b || 0 }}</td>
            <td class="text-center">{{ row.c || 0 }}</td>
            <td class="text-center">{{ row.d || 0 }}</td>
            <td class="text-center">{{ row.e || 0 }}</td>
            <td class="text-center fw-semibold" [class.text-success]="rowSumOk(row)" [class.text-danger]="!rowSumOk(row)">{{ row.sum || 0 }}</td>
            <td class="text-center">
              <nz-tag [nzColor]="activityTagColor(row.activity)">
                {{ row.activity === '1' ? ('evs.manage.viewEvsDistributionRatePanel.badge.active' | translate:'S\u1EED d\u1EE5ng') : ('evs.manage.viewEvsDistributionRatePanel.badge.inactive' | translate:'Kh\xF4ng s\u1EED d\u1EE5ng') }}
              </nz-tag>
            </td>
            <td class="text-center">
              <button nz-button nzType="text" nzSize="small" [title]="'evs.manage.viewEvsDistributionRatePanel.btn.edit' | translate:'S\u1EEDa'"
                      (click)="$event.stopPropagation(); openEditModal(row)">
                <i class="bx bx-edit text-warning"></i>
              </button>
              <button nz-button nzType="text" nzSize="small" [title]="'evs.manage.viewEvsDistributionRatePanel.btn.delete' | translate:'X\xF3a'"
                      (click)="$event.stopPropagation(); openDeleteConfirm(row)">
                <i class="bx bx-trash text-danger"></i>
              </button>
            </td>
          </tr>
        </tbody>
        <ng-template #edrTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal Th\xEAm m\u1EDBi / C\u1EADp nh\u1EADt -->
<nz-modal [nzVisible]="modalVisible()" [nzTitle]="modalTitle()" nzWidth="700px"
          (nzOnCancel)="closeModal()" (nzOnOk)="saveForm()" [nzOkLoading]="saving()"
          [nzOkText]="'common.save' | translate:'L\u01B0u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <div class="row g-3">
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'evs.manage.viewEvsDistributionRatePanel.modal.type' | translate:'Lo\u1EA1i' }} <span class="text-danger">*</span></label>
        <nz-select class="w-100" [ngModel]="form.scoreType" (ngModelChange)="onScoreTypeChange($event)" name="edrFormScoreType"
                   [nzPlaceHolder]="'evs.manage.viewEvsDistributionRatePanel.modal.selectOption' | translate:'-- Ch\u1ECDn --'">
          <nz-option *ngFor="let t of scoreTypes" [nzValue]="t" [nzLabel]="t"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold d-block">{{ 'evs.manage.viewEvsDistributionRatePanel.modal.status' | translate:'Tr\u1EA1ng th\xE1i' }}</label>
        <nz-switch [(ngModel)]="form.activity" name="edrFormActivity"></nz-switch>
        <span class="ms-2 small text-muted">{{ 'evs.manage.viewEvsDistributionRatePanel.modal.activeLabel' | translate:'S\u1EED d\u1EE5ng' }}</span>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'evs.manage.viewEvsDistributionRatePanel.modal.orderNo' | translate:'NO' }}</label>
        <input nz-input [(ngModel)]="form.no" name="edrFormNo" maxlength="20">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'evs.manage.viewEvsDistributionRatePanel.modal.name' | translate:'T\xEAn' }} <span class="text-danger">*</span></label>
        <input nz-input [(ngModel)]="form.name" name="edrFormName" maxlength="100">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'evs.manage.viewEvsDistributionRatePanel.modal.deptCode' | translate:'M\xE3 ph\xF2ng ban' }}</label>
        <input nz-input [(ngModel)]="form.deptNo" name="edrFormDeptNo" maxlength="20">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'evs.manage.viewEvsDistributionRatePanel.modal.deptName' | translate:'T\xEAn ph\xF2ng ban' }}</label>
        <input nz-input [(ngModel)]="form.deptName" name="edrFormDeptName" maxlength="60">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'evs.manage.viewEvsDistributionRatePanel.modal.gradeCode' | translate:'M\xE3 c\u1EA5p b\u1EADc' }}</label>
        <input nz-input [(ngModel)]="form.postGradeNo" name="edrFormPostGradeNo" maxlength="20">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'evs.manage.viewEvsDistributionRatePanel.modal.gradeName' | translate:'T\xEAn c\u1EA5p b\u1EADc' }}</label>
        <input nz-input [(ngModel)]="form.postGradeName" name="edrFormPostGradeName" maxlength="60">
      </div>

      <div class="col-12">
        <div class="d-flex justify-content-between align-items-center border-top pt-3">
          <span class="fw-semibold">{{ 'evs.manage.viewEvsDistributionRatePanel.modal.ratioLabel' | translate:'T\u1EF7 l\u1EC7 ph\xE2n b\u1ED5 (EX + VG + GD + NI + UN = 100)' }}</span>
          <nz-tag [nzColor]="formSumOk ? 'success' : 'error'">SUM = {{ formSum }}</nz-tag>
        </div>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">EX (A)</label>
        <input nz-input type="number" class="text-center" [(ngModel)]="form.a" name="edrFormA" min="0" max="100" step="0.01">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">VG (B)</label>
        <input nz-input type="number" class="text-center" [(ngModel)]="form.b" name="edrFormB" min="0" max="100" step="0.01">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">GD (C)</label>
        <input nz-input type="number" class="text-center" [(ngModel)]="form.c" name="edrFormC" min="0" max="100" step="0.01">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">NI (D)</label>
        <input nz-input type="number" class="text-center" [(ngModel)]="form.d" name="edrFormD" min="0" max="100" step="0.01">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">UN (E)</label>
        <input nz-input type="number" class="text-center" [(ngModel)]="form.e" name="edrFormE" min="0" max="100" step="0.01">
      </div>

      <div class="col-12" *ngIf="!formSumOk">
        <nz-alert nzType="error" nzShowIcon
                  [nzMessage]="('evs.manage.viewEvsDistributionRatePanel.msg.sumWarning' | translate:'T\u1ED5ng t\u1EF7 l\u1EC7 ph\xE2n b\u1ED5 ph\u1EA3i b\u1EB1ng 100. Gi\xE1 tr\u1ECB hi\u1EC7n t\u1EA1i:') + ' ' + formSum"></nz-alert>
      </div>
      <div class="col-12" *ngIf="form.updatedBy">
        <span class="small text-muted">
          {{ 'evs.manage.viewEvsDistributionRatePanel.modal.auditInfo' | translate:'Th\xF4ng tin c\u1EADp nh\u1EADt' }}: {{ form.updatedBy }} \u2014 {{ form.updateDate }}
        </span>
      </div>
    </div>
  </ng-container>
</nz-modal>

<!-- Modal x\xE1c nh\u1EADn x\xF3a -->
<nz-modal [nzVisible]="deleteVisible()" [nzTitle]="'evs.manage.viewEvsDistributionRatePanel.modal.deleteTitle' | translate:'X\xE1c nh\u1EADn x\xF3a'"
          (nzOnCancel)="closeDeleteConfirm()" (nzOnOk)="confirmDelete()" [nzOkLoading]="deleting()"
          [nzOkText]="'evs.manage.viewEvsDistributionRatePanel.btn.delete' | translate:'X\xF3a'" nzOkDanger
          [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'">
  <ng-container *nzModalContent>
    <p class="mb-0">{{ deleteConfirmMessage }}</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/evs-distribution-rate-panel/evs-distribution-rate-panel.component.css */\n::ng-deep .edr-row-clickable {\n  cursor: pointer;\n}\n/*# sourceMappingURL=evs-distribution-rate-panel.component.css.map */\n"] }]
  }], () => [{ type: EvsDistributionRatePanelService }, { type: I18nService }, { type: NzMessageService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EvsDistributionRatePanelComponent, { className: "EvsDistributionRatePanelComponent", filePath: "src/app/evs-distribution-rate-panel/evs-distribution-rate-panel.component.ts", lineNumber: 109 });
})();
export {
  EvsDistributionRatePanelComponent
};
//# debugId=03f1b9b4-623f-509d-b63a-69704eafb056
//# sourceMappingURL=chunk-74DETGIA.js.map
