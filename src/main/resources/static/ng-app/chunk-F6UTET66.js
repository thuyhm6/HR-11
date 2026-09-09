import {
  ChangeUserService
} from "./chunk-L26I55F6.js";
import {
  utils,
  writeFileSync
} from "./chunk-6KSHLFTP.js";
import {
  NzMessageService
} from "./chunk-XWW7CXU6.js";
import {
  NzModalComponent,
  NzModalContentDirective,
  NzModalModule,
  NzModalService
} from "./chunk-OEYWCHIN.js";
import {
  NzTreeSelectComponent,
  NzTreeSelectModule
} from "./chunk-2D6TQZG3.js";
import "./chunk-PD7KBOBI.js";
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
import {
  NzCheckboxComponent,
  NzCheckboxModule
} from "./chunk-VWYGF7JF.js";
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
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
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
  __spreadProps,
  __spreadValues,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTW5U2M5.js";

// src/app/evs-result/evs-result.service.ts
var API_BASE = "/evs/manage/api";
var EvsResultService = class _EvsResultService {
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
  getList(resumeSeq, deptNos, personId, statusFilter, evsType) {
    let params = new HttpParams().set("resumeSeq", resumeSeq).set("evsType", evsType);
    if (deptNos)
      params = params.set("deptNos", deptNos);
    if (personId)
      params = params.set("personId", personId);
    if (statusFilter)
      params = params.set("statusFilter", statusFilter);
    return this.http.get(`${API_BASE}/evsResult/list`, { params, withCredentials: true });
  }
  getStdRate(resumeSeq) {
    return this.http.get(`${API_BASE}/evsResult/stdRate`, {
      params: new HttpParams().set("resumeSeq", resumeSeq),
      withCredentials: true
    });
  }
  evaluateEnd(resumeSeq) {
    return this.http.post(`${API_BASE}/evsResult/evaluateEnd`, { resumeSeq }, { withCredentials: true });
  }
  changeStatus(seqList, status) {
    return this.http.post(`${API_BASE}/evsResult/changeStatus`, { seqList, status }, { withCredentials: true });
  }
  copyGrade(resumeSeq, seqList) {
    return this.http.post(`${API_BASE}/evsResult/copyGrade`, { resumeSeq, seqList }, { withCredentials: true });
  }
  save(items) {
    return this.http.post(`${API_BASE}/evsResult/save`, items, { withCredentials: true });
  }
  static \u0275fac = function EvsResultService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EvsResultService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EvsResultService, factory: _EvsResultService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EvsResultService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/evs-result/evs-result.component.ts
var _c0 = () => ({ padding: "8px" });
var _c1 = () => ({ x: "2100px" });
function EvsResultComponent_nz_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 72);
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    \u0275\u0275property("nzValue", r_r2.seq)("nzLabel", r_r2.resumeName);
  }
}
function EvsResultComponent_nz_option_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 72);
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    \u0275\u0275property("nzValue", s_r3.codeNo)("nzLabel", s_r3.codeName);
  }
}
function EvsResultComponent_th_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "evs.result.col.count", "S\u1ED1 l\u01B0\u1EE3ng"));
  }
}
function EvsResultComponent_ng_container_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "th");
    \u0275\u0275elementContainerEnd();
  }
}
function EvsResultComponent_ng_container_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const g_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.stdStat().cnt[g_r4]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r4.stdStat().pct[g_r4], "%");
  }
}
function EvsResultComponent_ng_container_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const g_r6 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.hrStat()[g_r6]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r4.pct(ctx_r4.hrStat()[g_r6], ctx_r4.hrStat().total), "%");
  }
}
function EvsResultComponent_ng_container_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const g_r7 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.l2Stat()[g_r7]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r4.pct(ctx_r4.l2Stat()[g_r7], ctx_r4.l2Stat().total), "%");
  }
}
function EvsResultComponent_ng_container_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const g_r8 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.l1Stat()[g_r8]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r4.pct(ctx_r4.l1Stat()[g_r8], ctx_r4.l1Stat().total), "%");
  }
}
function EvsResultComponent_nz_alert_183_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 73);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r4.errorMessage() ?? "");
  }
}
function EvsResultComponent_tr_272_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 74);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function EvsResultComponent_tr_273_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 82);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap("ver-grade-" + row_r10.evsGrade0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r10.evsGrade0);
  }
}
function EvsResultComponent_tr_273_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 82);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap("ver-grade-" + row_r10.evsGrade1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r10.evsGrade1);
  }
}
function EvsResultComponent_tr_273_span_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 82);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap("ver-grade-" + row_r10.evsGrade2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r10.evsGrade2);
  }
}
function EvsResultComponent_tr_273_nz_option_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 72);
  }
  if (rf & 2) {
    const o_r11 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r11.codeNo)("nzLabel", o_r11.description || o_r11.codeName);
  }
}
function EvsResultComponent_tr_273_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 75)(2, "label", 76);
    \u0275\u0275listener("ngModelChange", function EvsResultComponent_tr_273_Template_label_ngModelChange_2_listener($event) {
      const row_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.toggleTicked(row_r10, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 75);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 75);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 75);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 75);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 75);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 75)(18, "span");
    \u0275\u0275element(19, "i", 77);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "td", 75);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 75);
    \u0275\u0275template(24, EvsResultComponent_tr_273_span_24_Template, 2, 3, "span", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td", 75)(28, "small", 79);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "td", 75)(31, "span");
    \u0275\u0275element(32, "i", 77);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "td", 75);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "td", 75);
    \u0275\u0275template(37, EvsResultComponent_tr_273_span_37_Template, 2, 3, "span", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "td");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "td", 75)(41, "small", 79);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "td", 75)(44, "span");
    \u0275\u0275element(45, "i", 77);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "td", 75);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "td", 75);
    \u0275\u0275template(50, EvsResultComponent_tr_273_span_50_Template, 2, 3, "span", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "td")(52, "nz-select", 80);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275listener("ngModelChange", function EvsResultComponent_tr_273_Template_nz_select_ngModelChange_52_listener($event) {
      const row_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onFinalGradeChange(row_r10, $event));
    });
    \u0275\u0275template(54, EvsResultComponent_tr_273_nz_option_54_Template, 1, 2, "nz-option", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "td")(56, "input", 81);
    \u0275\u0275twoWayListener("ngModelChange", function EvsResultComponent_tr_273_Template_input_ngModelChange_56_listener($event) {
      const row_r10 = \u0275\u0275restoreView(_r9).$implicit;
      \u0275\u0275twoWayBindingSet(row_r10.finalAffirmContent, $event) || (row_r10.finalAffirmContent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EvsResultComponent_tr_273_Template_input_ngModelChange_56_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onContentChange(row_r10));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "td", 75)(58, "small");
    \u0275\u0275text(59);
    \u0275\u0275element(60, "br");
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classProp("ver-ticked", ctx_r4.isTicked(row_r10));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r4.isTicked(row_r10));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r12 + 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r10.localName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r10.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.empid);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r10.deptname || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r10.deptname);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.postGradeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.dateStarted);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.activityName);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(row_r10.affirmFlagName0 === "Evaluated" ? "ver-status-evaluated" : "ver-status-not-eval");
    \u0275\u0275advance();
    \u0275\u0275classProp("bx-check-circle", row_r10.affirmFlagName0 === "Evaluated")("bx-x-circle", row_r10.affirmFlagName0 !== "Evaluated");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r10.affirmFlagName0, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.evsPoint0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r10.evsGrade0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.localName1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r10.postGradeName1);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(row_r10.affirmFlagName1 === "Evaluated" ? "ver-status-evaluated" : "ver-status-not-eval");
    \u0275\u0275advance();
    \u0275\u0275classProp("bx-check-circle", row_r10.affirmFlagName1 === "Evaluated")("bx-x-circle", row_r10.affirmFlagName1 !== "Evaluated");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r10.affirmFlagName1, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.evsPoint1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r10.evsGrade1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.localName2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r10.postGradeName2);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(row_r10.affirmFlagName2 === "Evaluated" ? "ver-status-evaluated" : "ver-status-not-eval");
    \u0275\u0275advance();
    \u0275\u0275classProp("bx-check-circle", row_r10.affirmFlagName2 === "Evaluated")("bx-x-circle", row_r10.affirmFlagName2 !== "Evaluated");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r10.affirmFlagName2, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.evsPoint2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r10.evsGrade2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", row_r10.finalGradeLetter)("nzPlaceHolder", \u0275\u0275pipeBind2(53, 49, "common.select", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r4.gradeOptions());
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", row_r10.finalAffirmContent);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r10.updatedBy);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.updateDate);
  }
}
function EvsResultComponent_ng_container_276_nz_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 72);
  }
  if (rf & 2) {
    const c_r14 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r14.codeNo)("nzLabel", c_r14.codeName);
  }
}
function EvsResultComponent_ng_container_276_tr_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 94);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function EvsResultComponent_ng_container_276_tr_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 95);
    \u0275\u0275listener("click", function EvsResultComponent_ng_container_276_tr_47_Template_tr_click_0_listener() {
      const row_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.selectEmployee(row_r16));
    });
    \u0275\u0275elementStart(1, "td", 75);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r17 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r16.empId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r16.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r16.deptName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r16.position);
  }
}
function EvsResultComponent_ng_container_276_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 83);
    \u0275\u0275listener("ngSubmit", function EvsResultComponent_ng_container_276_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.pickerSearch());
    });
    \u0275\u0275elementStart(2, "div", 84)(3, "label", 7);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 85);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EvsResultComponent_ng_container_276_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.pickerKeyword, $event) || (ctx_r4.pickerKeyword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function EvsResultComponent_ng_container_276_Template_input_keydown_enter_6_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r4 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r4.pickerSearch());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 27)(9, "label", 7);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "nz-tree-select", 86);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EvsResultComponent_ng_container_276_Template_nz_tree_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.pickerDeptNos, $event) || (ctx_r4.pickerDeptNos = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 6)(15, "label", 7);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "nz-select", 87);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EvsResultComponent_ng_container_276_Template_nz_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r4 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r4.pickerEmpOffice, $event) || (ctx_r4.pickerEmpOffice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(20, EvsResultComponent_ng_container_276_nz_option_20_Template, 1, 2, "nz-option", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 88)(22, "button", 89);
    \u0275\u0275element(23, "i", 13);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "nz-table", 90, 1)(28, "thead")(29, "tr")(30, "th", 91);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "th", 92);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th");
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th");
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "th");
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "tbody");
    \u0275\u0275template(46, EvsResultComponent_ng_container_276_tr_46_Template, 4, 4, "tr", 68)(47, EvsResultComponent_ng_container_276_tr_47_Template, 11, 5, "tr", 93);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const verPickerTable_r18 = \u0275\u0275reference(27);
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 22, "empSearch.field.keyword", "M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.pickerKeyword);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(7, 25, "empSearch.placeholder.keyword", "Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 28, "empSearch.field.dept", "Ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzNodes", ctx_r4.deptNodes());
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.pickerDeptNos);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(13, 31, "vdp.search.dept.placeholder", "Ch\u1ECDn ph\xF2ng ban"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 34, "empSearch.field.empOffice", "Tr\u1EA1ng th\xE1i l\xE0m vi\u1EC7c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r4.pickerEmpOffice);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(19, 37, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r4.empOfficeOptions());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(25, 40, "common.search", "T\xECm ki\u1EBFm"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("nzData", ctx_r4.pickerRows())("nzLoading", ctx_r4.pickerLoading())("nzPageSize", 10);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 43, "empSearch.col.no", "STT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 46, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(38, 49, "common.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 52, "common.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 55, "common.position", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r4.pickerLoading() && verPickerTable_r18.data.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", verPickerTable_r18.data);
  }
}
var GRADE_PARENT_CODE = "14015161";
var STATUS_PARENT_CODE = "14015351";
var EMP_OFFICE_PARENT_CODE = "15118";
var GRADE_LETTER_TO_SHORT = { A: "EX", B: "VG", C: "GD", D: "NI", E: "UN" };
var GRADES = ["EX", "VG", "GD", "NI", "UN"];
var EMPTY_STAT = { total: 0, EX: 0, VG: 0, GD: 0, NI: 0, UN: 0 };
var I18N_KEYS = [
  "evs.result.label.evaluationName",
  "evs.result.label.empSearch",
  "evs.result.placeholder.selectEmployee",
  "evs.result.label.dept",
  "evs.result.label.status",
  "evs.result.panel.standard",
  "evs.result.panel.progress",
  "evs.result.panel.statusProgress",
  "evs.result.col.total",
  "evs.result.col.no",
  "evs.result.col.name",
  "evs.result.col.empId",
  "evs.result.col.dept",
  "evs.result.col.position",
  "evs.result.col.dateStarted",
  "evs.result.col.statusActivity",
  "evs.result.col.self",
  "evs.result.col.appraiser1",
  "evs.result.col.appraiser2",
  "evs.result.col.statusEval",
  "evs.result.col.point",
  "evs.result.col.grade",
  "evs.result.col.hrGrade",
  "evs.result.col.opinion",
  "evs.result.col.updatedBy",
  "evs.result.col.std",
  "evs.result.col.hr",
  "evs.result.col.count",
  "evs.result.col.rate",
  "evs.result.col.prog_self",
  "evs.result.col.prog_l1",
  "evs.result.col.prog_l2",
  "evs.result.col.prog_done",
  "evs.result.col.prog_end",
  "evs.result.btn.search",
  "evs.result.btn.template",
  "evs.result.btn.insertFile",
  "evs.result.btn.copyGrade",
  "evs.result.btn.save",
  "evs.result.btn.exportExcel",
  "evs.result.btn.email",
  "evs.result.btn.evaluateEnd",
  "evs.result.btn.changeStatus",
  "evs.result.quickFilter",
  "evs.result.placeholder.selectDept",
  "evs.result.placeholder.keyword",
  "evs.result.label.total",
  "evs.result.label.selectAll",
  "evs.result.msg.confirmEvaluateEnd",
  "evs.result.msg.evaluateEndSuccess",
  "evs.result.msg.evaluateEndError",
  "evs.result.msg.noRowSelected",
  "evs.result.msg.selectStatusFirst",
  "evs.result.msg.changeStatusSuccess",
  "evs.result.msg.changeStatusError",
  "evs.result.msg.confirmCopyGrade",
  "evs.result.msg.copyGradeSuccess",
  "evs.result.msg.copyGradeError",
  "evs.result.msg.noRowSelectedToSave",
  "evs.result.msg.templateDeveloping",
  "evs.result.msg.insertFileDeveloping",
  "evs.result.msg.emailDeveloping",
  "evs.viewEvsAffirmorSetup.msg.selectEvalFirst",
  "empSearch.title",
  "empSearch.field.keyword",
  "empSearch.placeholder.keyword",
  "empSearch.field.dept",
  "empSearch.field.empOffice",
  "empSearch.btn.clearFilter",
  "empSearch.col.no",
  "vdp.search.dept.placeholder",
  "mep.msg.loadDeptFailed",
  "common.select",
  "common.confirm",
  "common.cancel",
  "common.close",
  "common.save",
  "common.search",
  "common.clearFilter",
  "common.selectAll",
  "common.stt",
  "common.empId",
  "common.empName",
  "common.deptName",
  "common.position",
  "common.noData",
  "common.saveSuccess",
  "common.saveFail",
  "common.loadFail"
];
var EvsResultComponent = class _EvsResultComponent {
  constructor(api, empApi, i18n, message, modal, route) {
    this.api = api;
    this.empApi = empApi;
    this.i18n = i18n;
    this.message = message;
    this.modal = modal;
    this.route = route;
  }
  api;
  empApi;
  i18n;
  message;
  modal;
  route;
  grades = GRADES;
  evsType = "";
  resumeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "resumeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  resumeSeq = null;
  deptNodes = signal(
    [],
    ...ngDevMode ? [{ debugName: "deptNodes" }] : (
      /* istanbul ignore next */
      []
    )
  );
  deptTreeErrorMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "deptTreeErrorMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  deptChildrenMap = /* @__PURE__ */ new Map();
  deptNos = [];
  personId = null;
  empDisplay = "";
  statusFilter = null;
  statusOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "statusOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  gradeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "gradeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  empOfficeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "empOfficeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  quickFilter = "";
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
  ticked = signal(
    /* @__PURE__ */ new Set(),
    ...ngDevMode ? [{ debugName: "ticked" }] : (
      /* istanbul ignore next */
      []
    )
  );
  filteredRows = computed(
    () => {
      const kw = this.quickFilter.trim().toLowerCase();
      const list = this.rows();
      if (!kw)
        return list;
      return list.filter((r) => (r.localName || "").toLowerCase().includes(kw) || (r.empid || "").toLowerCase().includes(kw) || (r.deptname || "").toLowerCase().includes(kw) || (r.postGradeName || "").toLowerCase().includes(kw) || (r.localName1 || "").toLowerCase().includes(kw) || (r.localName2 || "").toLowerCase().includes(kw) || (r.updatedBy || "").toLowerCase().includes(kw));
    },
    ...ngDevMode ? [{ debugName: "filteredRows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  stdPct = signal(
    { EX: 0, VG: 0, GD: 0, NI: 0, UN: 0 },
    ...ngDevMode ? [{ debugName: "stdPct" }] : (
      /* istanbul ignore next */
      []
    )
  );
  hrStat = computed(
    () => this.buildStat(this.rows(), (r) => r.finalGrade),
    ...ngDevMode ? [{ debugName: "hrStat" }] : (
      /* istanbul ignore next */
      []
    )
  );
  l1Stat = computed(
    () => this.buildStat(this.rows(), (r) => r.evsGrade1),
    ...ngDevMode ? [{ debugName: "l1Stat" }] : (
      /* istanbul ignore next */
      []
    )
  );
  l2Stat = computed(
    () => this.buildStat(this.rows(), (r) => r.evsGrade2),
    ...ngDevMode ? [{ debugName: "l2Stat" }] : (
      /* istanbul ignore next */
      []
    )
  );
  stdStat = computed(
    () => {
      const total = this.rows().length;
      const pct = this.stdPct();
      const cnt = { EX: 0, VG: 0, GD: 0, NI: 0, UN: 0 };
      GRADES.forEach((g) => cnt[g] = total > 0 ? Math.round(pct[g] / 100 * total) : 0);
      return { total, pct, cnt };
    },
    ...ngDevMode ? [{ debugName: "stdStat" }] : (
      /* istanbul ignore next */
      []
    )
  );
  progressStat = computed(
    () => {
      const list = this.rows();
      let self = 0, l1 = 0, l2 = 0, done = 0, end = 0;
      list.forEach((r) => {
        if (r.affirmFlagName0 === "Evaluated")
          self++;
        const hasL1 = !!r.evsPoint1 && !!r.evsGrade1;
        const hasL2 = !!r.evsPoint2 && !!r.evsGrade2;
        if (hasL1)
          l1++;
        if (hasL2)
          l2++;
        if (hasL1 && hasL2)
          done++;
        if (r.finalGrade)
          end++;
      });
      return { total: list.length, self, l1, l2, done, end };
    },
    ...ngDevMode ? [{ debugName: "progressStat" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // ==================== Popup tìm kiếm nhân viên (lọc theo đối tượng đánh giá) ====================
  pickerVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "pickerVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pickerRows = signal(
    [],
    ...ngDevMode ? [{ debugName: "pickerRows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pickerLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "pickerLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pickerKeyword = "";
  pickerDeptNos = [];
  pickerEmpOffice = null;
  saving = signal(
    false,
    ...ngDevMode ? [{ debugName: "saving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  endingEvaluation = signal(
    false,
    ...ngDevMode ? [{ debugName: "endingEvaluation" }] : (
      /* istanbul ignore next */
      []
    )
  );
  changingStatus = signal(
    false,
    ...ngDevMode ? [{ debugName: "changingStatus" }] : (
      /* istanbul ignore next */
      []
    )
  );
  copyingGrade = signal(
    false,
    ...ngDevMode ? [{ debugName: "copyingGrade" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
    this.empApi.getCodeList(EMP_OFFICE_PARENT_CODE).subscribe((list) => this.empOfficeOptions.set(list ?? []));
    this.empApi.getCodeList(GRADE_PARENT_CODE).subscribe((list) => this.gradeOptions.set(list ?? []));
    this.empApi.getCodeList(STATUS_PARENT_CODE).subscribe((list) => this.statusOptions.set(list ?? []));
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
  loadDeptTree() {
    this.empApi.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(this.buildDeptTree(list ?? [])),
      error: () => this.deptTreeErrorMessage.set(this.i18n.t("mep.msg.loadDeptFailed", "L\u1ED7i khi t\u1EA3i danh s\xE1ch ph\xF2ng ban"))
    });
  }
  buildDeptTree(list) {
    const map = /* @__PURE__ */ new Map();
    list.forEach((d) => map.set(d.id, { title: d.text, key: d.id, parent: d.parent, children: [] }));
    this.deptChildrenMap = /* @__PURE__ */ new Map();
    const roots = [];
    map.forEach((node) => {
      if (node.parent && node.parent !== "0" && map.has(node.parent)) {
        map.get(node.parent).children.push(node);
        const siblings = this.deptChildrenMap.get(node.parent) ?? [];
        siblings.push(node.key);
        this.deptChildrenMap.set(node.parent, siblings);
      } else {
        roots.push(node);
      }
    });
    const markLeaf = (nodes) => {
      nodes.forEach((n) => {
        n.isLeaf = !n.children || n.children.length === 0;
        if (n.children?.length)
          markLeaf(n.children);
      });
    };
    markLeaf(roots);
    return roots;
  }
  expandDeptSelection(selected) {
    const result = /* @__PURE__ */ new Set();
    const stack = [...selected];
    while (stack.length) {
      const id = stack.pop();
      if (result.has(id))
        continue;
      result.add(id);
      const children = this.deptChildrenMap.get(id);
      if (children)
        stack.push(...children);
    }
    return Array.from(result);
  }
  buildStat(rows, pick) {
    const stat = __spreadValues({}, EMPTY_STAT);
    rows.forEach((r) => {
      const g = pick(r);
      if (!g || !GRADES.includes(g))
        return;
      stat.total++;
      stat[g]++;
    });
    return stat;
  }
  pct(cnt, denom) {
    return denom > 0 ? Math.round(cnt / denom * 1e3) / 10 : 0;
  }
  // ==================== Search ====================
  search() {
    if (!this.resumeSeq)
      return;
    this.loading.set(true);
    this.errorMessage.set(null);
    this.ticked.set(/* @__PURE__ */ new Set());
    const resumeSeq = this.resumeSeq;
    const deptNos = this.expandDeptSelection(this.deptNos).join(",");
    this.api.getList(resumeSeq, deptNos, this.personId ?? "", this.statusFilter ?? "", this.evsType).subscribe({
      next: (rows) => {
        this.rows.set((rows ?? []).map((r) => this.toRow(r)));
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.rows.set([]);
        this.loading.set(false);
      }
    });
    this.api.getStdRate(resumeSeq).subscribe({
      next: (std) => this.stdPct.set({
        EX: Number(std.EX_PCT) || 0,
        VG: Number(std.VG_PCT) || 0,
        GD: Number(std.GD_PCT) || 0,
        NI: Number(std.NI_PCT) || 0,
        UN: Number(std.UN_PCT) || 0
      }),
      error: () => this.stdPct.set({ EX: 0, VG: 0, GD: 0, NI: 0, UN: 0 })
    });
  }
  toRow(dto) {
    return __spreadProps(__spreadValues({}, dto), { finalGradeLetter: dto.finalGradeOr || null });
  }
  onResumeChange() {
    this.search();
  }
  clearEmpSearch() {
    this.personId = null;
    this.empDisplay = "";
    this.search();
  }
  // ==================== Popup tìm kiếm nhân viên ====================
  openEmployeePicker() {
    this.pickerKeyword = "";
    this.pickerDeptNos = [];
    this.pickerEmpOffice = null;
    this.pickerRows.set([]);
    this.pickerVisible.set(true);
  }
  closePicker() {
    this.pickerVisible.set(false);
  }
  pickerSearch() {
    this.pickerLoading.set(true);
    this.empApi.searchEmployees({
      keyword: this.pickerKeyword.trim(),
      deptCodes: this.expandDeptSelection(this.pickerDeptNos),
      empOffice: this.pickerEmpOffice ?? ""
    }).subscribe({
      next: (rows) => {
        this.pickerRows.set(rows ?? []);
        this.pickerLoading.set(false);
      },
      error: () => {
        this.pickerRows.set([]);
        this.pickerLoading.set(false);
      }
    });
  }
  selectEmployee(emp) {
    this.personId = emp.personId;
    this.empDisplay = `${emp.empId} - ${emp.localName}`;
    this.pickerVisible.set(false);
    this.search();
  }
  // ==================== Cấp đánh giá (nhân sự) / Ý kiến - sửa trực tiếp trong bảng ====================
  gradeLabel(letter) {
    if (!letter)
      return "";
    const opt = this.gradeOptions().find((o) => o.codeNo === letter);
    return opt ? opt.description || opt.codeName : letter;
  }
  gradeShort(letter) {
    return letter ? GRADE_LETTER_TO_SHORT[letter] || "" : "";
  }
  onFinalGradeChange(row, letter) {
    row.finalGradeLetter = letter;
    row.finalGrade = this.gradeShort(letter);
    this.toggleTicked(row, true);
  }
  onContentChange(row) {
    this.toggleTicked(row, true);
  }
  // ==================== Chọn nhiều dòng (checkbox) - toàn bộ dòng đang hiển thị (không phân trang) ====================
  isTicked(row) {
    return this.ticked().has(row.seq);
  }
  toggleTicked(row, checked) {
    const next = new Set(this.ticked());
    if (checked)
      next.add(row.seq);
    else
      next.delete(row.seq);
    this.ticked.set(next);
  }
  get allTicked() {
    const list = this.filteredRows();
    return list.length > 0 && list.every((r) => this.isTicked(r));
  }
  get someTicked() {
    return this.filteredRows().some((r) => this.isTicked(r)) && !this.allTicked;
  }
  toggleAllTicked(checked) {
    const next = new Set(this.ticked());
    this.filteredRows().forEach((r) => checked ? next.add(r.seq) : next.delete(r.seq));
    this.ticked.set(next);
  }
  // ==================== Đánh giá kết thúc ====================
  evaluateEnd() {
    if (!this.resumeSeq) {
      this.message.warning(this.i18n.t("evs.viewEvsAffirmorSetup.msg.selectEvalFirst", "Vui l\xF2ng ch\u1ECDn t\xEAn \u0111\xE1nh gi\xE1 tr\u01B0\u1EDBc."));
      return;
    }
    this.modal.confirm({
      nzTitle: this.i18n.t("common.confirm", "X\xE1c nh\u1EADn"),
      nzContent: this.i18n.t("evs.result.msg.confirmEvaluateEnd", "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n k\u1EBFt th\xFAc \u0111\xE1nh gi\xE1 cho \u0111\u1EE3t n\xE0y kh\xF4ng?"),
      nzOnOk: () => this.doEvaluateEnd()
    });
  }
  doEvaluateEnd() {
    const resumeSeq = this.resumeSeq;
    if (!resumeSeq)
      return;
    this.endingEvaluation.set(true);
    this.api.evaluateEnd(resumeSeq).subscribe({
      next: (res) => {
        this.endingEvaluation.set(false);
        if (res.success) {
          this.message.success(this.i18n.t("evs.result.msg.evaluateEndSuccess", "K\u1EBFt th\xFAc \u0111\xE1nh gi\xE1 th\xE0nh c\xF4ng!"));
          this.search();
        } else {
          this.message.error(res.message || this.i18n.t("evs.result.msg.evaluateEndError", "Kh\xF4ng th\u1EC3 k\u1EBFt th\xFAc \u0111\xE1nh gi\xE1. Vui l\xF2ng th\u1EED l\u1EA1i."));
        }
      },
      error: () => {
        this.endingEvaluation.set(false);
        this.message.error(this.i18n.t("evs.result.msg.evaluateEndError", "Kh\xF4ng th\u1EC3 k\u1EBFt th\xFAc \u0111\xE1nh gi\xE1. Vui l\xF2ng th\u1EED l\u1EA1i."));
      }
    });
  }
  // ==================== Thay đổi trạng thái ====================
  changeStatus() {
    if (this.ticked().size === 0) {
      this.message.warning(this.i18n.t("evs.result.msg.noRowSelected", "Ch\u01B0a ch\u1ECDn d\xF2ng n\xE0o."));
      return;
    }
    if (!this.statusFilter) {
      this.message.warning(this.i18n.t("evs.result.msg.selectStatusFirst", "Vui l\xF2ng ch\u1ECDn tr\u1EA1ng th\xE1i."));
      return;
    }
    this.changingStatus.set(true);
    this.api.changeStatus(Array.from(this.ticked()), this.statusFilter).subscribe({
      next: (res) => {
        this.changingStatus.set(false);
        if (res.success) {
          this.message.success(this.i18n.t("evs.result.msg.changeStatusSuccess", "Thay \u0111\u1ED5i tr\u1EA1ng th\xE1i th\xE0nh c\xF4ng!"));
          this.search();
        } else {
          this.message.error(res.message || this.i18n.t("evs.result.msg.changeStatusError", "Kh\xF4ng th\u1EC3 thay \u0111\u1ED5i tr\u1EA1ng th\xE1i. Vui l\xF2ng th\u1EED l\u1EA1i."));
        }
      },
      error: () => {
        this.changingStatus.set(false);
        this.message.error(this.i18n.t("evs.result.msg.changeStatusError", "Kh\xF4ng th\u1EC3 thay \u0111\u1ED5i tr\u1EA1ng th\xE1i. Vui l\xF2ng th\u1EED l\u1EA1i."));
      }
    });
  }
  // ==================== Sao chép cấp đánh giá ====================
  copyGrade() {
    if (this.ticked().size === 0) {
      this.message.warning(this.i18n.t("evs.result.msg.noRowSelected", "Ch\u01B0a ch\u1ECDn d\xF2ng n\xE0o."));
      return;
    }
    this.modal.confirm({
      nzTitle: this.i18n.t("common.confirm", "X\xE1c nh\u1EADn"),
      nzContent: this.i18n.t("evs.result.msg.confirmCopyGrade", "Sao ch\xE9p c\u1EA5p \u0111\xE1nh gi\xE1 cho c\xE1c d\xF2ng \u0111\xE3 ch\u1ECDn?"),
      nzOnOk: () => this.doCopyGrade()
    });
  }
  doCopyGrade() {
    const resumeSeq = this.resumeSeq;
    if (!resumeSeq)
      return;
    this.copyingGrade.set(true);
    this.api.copyGrade(resumeSeq, Array.from(this.ticked())).subscribe({
      next: (res) => {
        this.copyingGrade.set(false);
        if (res.success) {
          this.message.success(this.i18n.t("evs.result.msg.copyGradeSuccess", "Sao ch\xE9p th\xE0nh c\xF4ng!"));
          this.search();
        } else {
          this.message.error(res.message || this.i18n.t("evs.result.msg.copyGradeError", "Kh\xF4ng th\u1EC3 sao ch\xE9p. Vui l\xF2ng th\u1EED l\u1EA1i."));
        }
      },
      error: () => {
        this.copyingGrade.set(false);
        this.message.error(this.i18n.t("evs.result.msg.copyGradeError", "Kh\xF4ng th\u1EC3 sao ch\xE9p. Vui l\xF2ng th\u1EED l\u1EA1i."));
      }
    });
  }
  // ==================== Lưu ====================
  saveAll() {
    const tickedSeqs = this.ticked();
    if (tickedSeqs.size === 0) {
      this.message.warning(this.i18n.t("evs.result.msg.noRowSelectedToSave", "Ch\u01B0a ch\u1ECDn d\xF2ng n\xE0o \u0111\u1EC3 l\u01B0u."));
      return;
    }
    const payload = this.rows().filter((r) => tickedSeqs.has(r.seq)).map((r) => ({ seq: r.seq, finalGrade: r.finalGradeLetter || "", finalAffirmContent: r.finalAffirmContent || "" }));
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        if (res.success) {
          this.ticked.set(/* @__PURE__ */ new Set());
          this.message.success(this.i18n.t("common.saveSuccess", "L\u01B0u th\xE0nh c\xF4ng!"));
          this.search();
        } else {
          this.message.error(res.message || this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!"));
        }
      },
      error: () => {
        this.saving.set(false);
        this.message.error(this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  // ==================== Chức năng đang phát triển (giữ nguyên hành vi placeholder ở bản gốc) ====================
  openTemplate() {
    this.message.info(this.i18n.t("evs.result.msg.templateDeveloping", "Ch\u1EE9c n\u0103ng B\u1EA3n m\u1EABu \u0111ang \u0111\u01B0\u1EE3c ph\xE1t tri\u1EC3n."));
  }
  insertFile() {
    this.message.info(this.i18n.t("evs.result.msg.insertFileDeveloping", "Ch\u1EE9c n\u0103ng Ch\xE8n file \u0111ang \u0111\u01B0\u1EE3c ph\xE1t tri\u1EC3n."));
  }
  sendEmail() {
    this.message.info(this.i18n.t("evs.result.msg.emailDeveloping", "Ch\u1EE9c n\u0103ng Email \u0111ang \u0111\u01B0\u1EE3c ph\xE1t tri\u1EC3n."));
  }
  // ==================== Xuất Excel (client-side - BE chưa có endpoint export) ====================
  exportExcel() {
    const headers = [
      this.i18n.t("evs.result.col.no", "No."),
      this.i18n.t("evs.result.col.name", "H\u1ECD t\xEAn"),
      this.i18n.t("evs.result.col.empId", "M\xE3 nh\xE2n vi\xEAn"),
      this.i18n.t("evs.result.col.dept", "Ph\xF2ng ban"),
      this.i18n.t("evs.result.col.position", "Ch\u1EE9c v\u1EE5"),
      this.i18n.t("evs.result.col.dateStarted", "Ng\xE0y v\xE0o l\xE0m"),
      this.i18n.t("evs.result.col.statusActivity", "Tr\u1EA1ng th\xE1i"),
      this.i18n.t("evs.result.col.point", "\u0110i\u1EC3m s\u1ED1 (b\u1EA3n th\xE2n)"),
      this.i18n.t("evs.result.col.grade", "C\u1EA5p (b\u1EA3n th\xE2n)"),
      this.i18n.t("evs.result.col.name", "H\u1ECD t\xEAn \u0110G1"),
      this.i18n.t("evs.result.col.point", "\u0110i\u1EC3m s\u1ED1 \u0110G1"),
      this.i18n.t("evs.result.col.grade", "C\u1EA5p \u0110G1"),
      this.i18n.t("evs.result.col.name", "H\u1ECD t\xEAn \u0110G2"),
      this.i18n.t("evs.result.col.point", "\u0110i\u1EC3m s\u1ED1 \u0110G2"),
      this.i18n.t("evs.result.col.grade", "C\u1EA5p \u0110G2"),
      this.i18n.t("evs.result.col.hrGrade", "C\u1EA5p \u0111\xE1nh gi\xE1 (nh\xE2n s\u1EF1)"),
      this.i18n.t("evs.result.col.opinion", "\xDD ki\u1EBFn")
    ];
    const dataRows = this.filteredRows().map((r, i) => [
      i + 1,
      r.localName,
      r.empid,
      r.deptname,
      r.postGradeName,
      r.dateStarted,
      r.activityName,
      r.evsPoint0,
      r.evsGrade0,
      r.localName1,
      r.evsPoint1,
      r.evsGrade1,
      r.localName2,
      r.evsPoint2,
      r.evsGrade2,
      this.gradeLabel(r.finalGradeLetter),
      r.finalAffirmContent
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "KetQuaDanhGia");
    writeFileSync(workbook, "evs_result_list.xlsx");
  }
  static \u0275fac = function EvsResultComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EvsResultComponent)(\u0275\u0275directiveInject(EvsResultService), \u0275\u0275directiveInject(ChangeUserService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService), \u0275\u0275directiveInject(NzModalService), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EvsResultComponent, selectors: [["app-evs-result"]], decls: 277, vars: 289, consts: [["verTable", "nzTable"], ["verPickerTable", "nzTable"], [1, "row"], [1, "col-12"], [1, "mb-2", "sticky-filter-card"], [1, "row", "g-3", "align-items-end"], [1, "col-md-3"], [1, "form-label"], ["name", "verResumeSeq", 1, "w-100", 3, "ngModelChange", "ngModel"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "input-group", "input-group-sm"], ["readonly", "", 1, "form-control", 2, "cursor", "pointer", 3, "click", "value", "placeholder"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "bx", "bx-search"], [1, "bx", "bx-x"], ["name", "verDeptNos", "nzCheckable", "", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["name", "verStatusFilter", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [1, "row", "mb-2", "g-2"], [1, "col-md-8"], [1, "h-100", 3, "nzBodyStyle"], [1, "fw-semibold", "small", "mb-1"], [1, "table-responsive"], [1, "table", "table-bordered", "table-sm", "mb-0", "text-center"], [1, "table-light"], ["rowspan", "2", 1, "align-middle"], ["colspan", "2"], [4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-1"], [1, "fw-semibold", "small"], [1, "d-flex", "gap-1"], ["nz-button", "", "nzSize", "small", "type", "button", 3, "click"], ["nz-button", "", "nzDanger", "", "nzSize", "small", "type", "button", 3, "click", "nzLoading"], [1, "d-flex", "align-items-center", "gap-2", "mb-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "nzSize", "small", "type", "button", 3, "click", "nzLoading"], [1, "table", "table-bordered", "table-sm", "text-center", "mb-0"], [1, "small", "text-muted"], [1, "d-flex", "align-items-center", "gap-1"], [1, "form-label", "small", "text-muted", "mb-0"], ["nz-input", "", "name", "verQuickFilter", 2, "width", "150px", 3, "ngModelChange", "ngModel", "placeholder"], ["nz-button", "", "nzType", "primary", "nzSize", "small", "type", "button", 3, "click"], [1, "bx", "bx-file"], [1, "bx", "bx-paperclip"], ["nz-button", "", "nzSize", "small", "type", "button", 3, "click", "nzLoading"], [1, "bx", "bx-copy"], [1, "bx", "bx-save"], ["nz-button", "", "nzSize", "small", "type", "button", 1, "ver-btn-export", 3, "click"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [1, "table-responsive", 2, "max-height", "calc(100vh - 460px)", "overflow-y", "auto"], ["nzSize", "small", 3, "nzData", "nzLoading", "nzShowPagination", "nzScroll"], ["rowspan", "2", "nzWidth", "36px", 1, "text-center", "align-middle"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel", "nzIndeterminate", "title"], ["rowspan", "2", "nzWidth", "45px", 1, "text-center", "align-middle"], ["rowspan", "2", "nzWidth", "150px", 1, "align-middle"], ["rowspan", "2", "nzWidth", "100px", 1, "text-center", "align-middle"], ["rowspan", "2", "nzWidth", "120px", 1, "text-center", "align-middle"], ["rowspan", "2", "nzWidth", "110px", 1, "text-center", "align-middle"], ["colspan", "3", 1, "text-center"], ["colspan", "5", 1, "text-center"], ["rowspan", "2", "nzWidth", "150px", 1, "text-center", "align-middle"], ["rowspan", "2", "nzWidth", "180px", 1, "align-middle"], ["rowspan", "2", "nzWidth", "170px", 1, "text-center", "align-middle"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "80px", 1, "text-center"], ["nzWidth", "70px", 1, "text-center"], ["nzWidth", "140px"], ["nzWidth", "120px", 1, "text-center"], [4, "ngIf"], [3, "ver-ticked", 4, "ngFor", "ngForOf"], ["nzWidth", "900px", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzFooter"], [4, "nzModalContent"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "24", 1, "text-center", "text-muted"], [1, "text-center"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel"], [1, "bx"], ["class", "ver-grade-badge", 3, "class", 4, "ngIf"], [1, "text-muted"], ["nzAllowClear", "", 1, "w-100", "ver-grade-sel", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["nz-input", "", 1, "ver-content-inp", 3, "ngModelChange", "ngModel"], [1, "ver-grade-badge"], [1, "row", "g-2", "align-items-end", "mb-3", 3, "ngSubmit"], [1, "col-md-5"], ["nz-input", "", "name", "verPickerKeyword", 3, "ngModelChange", "keydown.enter", "ngModel", "placeholder"], ["name", "verPickerDeptNos", "nzCheckable", "", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["name", "verPickerEmpOffice", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [1, "col-12", "d-flex", "gap-2"], ["nz-button", "", "nzType", "primary", "type", "submit"], ["nzSize", "small", 3, "nzData", "nzLoading", "nzPageSize"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "110px"], ["class", "ver-picker-row", 3, "click", 4, "ngFor", "ngForOf"], ["colspan", "5", 1, "text-center", "text-muted"], [1, "ver-picker-row", 3, "click"]], template: function EvsResultComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "nz-card", 4)(3, "div", 5)(4, "div", 6)(5, "label", 7);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "nz-select", 8);
      \u0275\u0275twoWayListener("ngModelChange", function EvsResultComponent_Template_nz_select_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.resumeSeq, $event) || (ctx.resumeSeq = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function EvsResultComponent_Template_nz_select_ngModelChange_8_listener() {
        return ctx.onResumeChange();
      });
      \u0275\u0275template(9, EvsResultComponent_nz_option_9_Template, 1, 2, "nz-option", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 6)(11, "label", 7);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 10)(15, "input", 11);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275listener("click", function EvsResultComponent_Template_input_click_15_listener() {
        return ctx.openEmployeePicker();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 12);
      \u0275\u0275listener("click", function EvsResultComponent_Template_button_click_17_listener() {
        return ctx.openEmployeePicker();
      });
      \u0275\u0275element(18, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 12);
      \u0275\u0275listener("click", function EvsResultComponent_Template_button_click_19_listener() {
        return ctx.clearEmpSearch();
      });
      \u0275\u0275element(20, "i", 14);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 6)(22, "label", 7);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "nz-tree-select", 15);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function EvsResultComponent_Template_nz_tree_select_ngModelChange_25_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.deptNos, $event) || (ctx.deptNos = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 6)(28, "label", 7);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "nz-select", 16);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function EvsResultComponent_Template_nz_select_ngModelChange_31_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.statusFilter, $event) || (ctx.statusFilter = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(33, EvsResultComponent_nz_option_33_Template, 1, 2, "nz-option", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "div", 17)(35, "div", 18)(36, "nz-card", 19)(37, "div", 20);
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 21)(41, "table", 22)(42, "thead", 23)(43, "tr")(44, "th", 24);
      \u0275\u0275text(45, "-");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "th", 24);
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "th", 25);
      \u0275\u0275text(50, "EX");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "th", 25);
      \u0275\u0275text(52, "VG");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "th", 25);
      \u0275\u0275text(54, "GD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "th", 25);
      \u0275\u0275text(56, "NI");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "th", 25);
      \u0275\u0275text(58, "UN");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "tr");
      \u0275\u0275template(60, EvsResultComponent_th_60_Template, 3, 4, "th", 26)(61, EvsResultComponent_ng_container_61_Template, 2, 0, "ng-container", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "tbody")(63, "tr")(64, "td");
      \u0275\u0275text(65);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "td");
      \u0275\u0275text(68);
      \u0275\u0275elementEnd();
      \u0275\u0275template(69, EvsResultComponent_ng_container_69_Template, 5, 2, "ng-container", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "tr")(71, "td");
      \u0275\u0275text(72);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "td");
      \u0275\u0275text(75);
      \u0275\u0275elementEnd();
      \u0275\u0275template(76, EvsResultComponent_ng_container_76_Template, 5, 2, "ng-container", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "tr")(78, "td");
      \u0275\u0275text(79);
      \u0275\u0275pipe(80, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "td");
      \u0275\u0275text(82);
      \u0275\u0275elementEnd();
      \u0275\u0275template(83, EvsResultComponent_ng_container_83_Template, 5, 2, "ng-container", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "tr")(85, "td");
      \u0275\u0275text(86);
      \u0275\u0275pipe(87, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "td");
      \u0275\u0275text(89);
      \u0275\u0275elementEnd();
      \u0275\u0275template(90, EvsResultComponent_ng_container_90_Template, 5, 2, "ng-container", 26);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(91, "div", 27)(92, "nz-card", 19)(93, "div", 28)(94, "span", 29);
      \u0275\u0275text(95);
      \u0275\u0275pipe(96, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "div", 30)(98, "button", 31);
      \u0275\u0275listener("click", function EvsResultComponent_Template_button_click_98_listener() {
        return ctx.sendEmail();
      });
      \u0275\u0275text(99);
      \u0275\u0275pipe(100, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "button", 32);
      \u0275\u0275listener("click", function EvsResultComponent_Template_button_click_101_listener() {
        return ctx.evaluateEnd();
      });
      \u0275\u0275text(102);
      \u0275\u0275pipe(103, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(104, "div", 33)(105, "button", 34);
      \u0275\u0275listener("click", function EvsResultComponent_Template_button_click_105_listener() {
        return ctx.changeStatus();
      });
      \u0275\u0275text(106);
      \u0275\u0275pipe(107, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "div", 20);
      \u0275\u0275text(109);
      \u0275\u0275pipe(110, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "table", 35)(112, "thead", 23)(113, "tr")(114, "th");
      \u0275\u0275text(115);
      \u0275\u0275pipe(116, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "th");
      \u0275\u0275text(118);
      \u0275\u0275pipe(119, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "th");
      \u0275\u0275text(121);
      \u0275\u0275pipe(122, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "th");
      \u0275\u0275text(124);
      \u0275\u0275pipe(125, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "th");
      \u0275\u0275text(127);
      \u0275\u0275pipe(128, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "th");
      \u0275\u0275text(130);
      \u0275\u0275pipe(131, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(132, "tbody")(133, "tr")(134, "td");
      \u0275\u0275text(135);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "td");
      \u0275\u0275text(137);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "td");
      \u0275\u0275text(139);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "td");
      \u0275\u0275text(141);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "td");
      \u0275\u0275text(143);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "td");
      \u0275\u0275text(145);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(146, "div", 33)(147, "span", 36);
      \u0275\u0275text(148);
      \u0275\u0275pipe(149, "translate");
      \u0275\u0275elementStart(150, "strong");
      \u0275\u0275text(151);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(152, "div", 37)(153, "label", 38);
      \u0275\u0275text(154);
      \u0275\u0275pipe(155, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "input", 39);
      \u0275\u0275pipe(157, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function EvsResultComponent_Template_input_ngModelChange_156_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.quickFilter, $event) || (ctx.quickFilter = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "button", 40);
      \u0275\u0275listener("click", function EvsResultComponent_Template_button_click_158_listener() {
        return ctx.search();
      });
      \u0275\u0275element(159, "i", 13);
      \u0275\u0275text(160);
      \u0275\u0275pipe(161, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "button", 31);
      \u0275\u0275listener("click", function EvsResultComponent_Template_button_click_162_listener() {
        return ctx.openTemplate();
      });
      \u0275\u0275element(163, "i", 41);
      \u0275\u0275text(164);
      \u0275\u0275pipe(165, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "button", 31);
      \u0275\u0275listener("click", function EvsResultComponent_Template_button_click_166_listener() {
        return ctx.insertFile();
      });
      \u0275\u0275element(167, "i", 42);
      \u0275\u0275text(168);
      \u0275\u0275pipe(169, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "button", 43);
      \u0275\u0275listener("click", function EvsResultComponent_Template_button_click_170_listener() {
        return ctx.copyGrade();
      });
      \u0275\u0275element(171, "i", 44);
      \u0275\u0275text(172);
      \u0275\u0275pipe(173, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "button", 34);
      \u0275\u0275listener("click", function EvsResultComponent_Template_button_click_174_listener() {
        return ctx.saveAll();
      });
      \u0275\u0275element(175, "i", 45);
      \u0275\u0275text(176);
      \u0275\u0275pipe(177, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "button", 46);
      \u0275\u0275listener("click", function EvsResultComponent_Template_button_click_178_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(179, "i", 47);
      \u0275\u0275text(180);
      \u0275\u0275pipe(181, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(182, "nz-card");
      \u0275\u0275template(183, EvsResultComponent_nz_alert_183_Template, 1, 1, "nz-alert", 48);
      \u0275\u0275elementStart(184, "div", 49)(185, "nz-table", 50, 0)(187, "thead")(188, "tr")(189, "th", 51)(190, "label", 52);
      \u0275\u0275pipe(191, "translate");
      \u0275\u0275listener("ngModelChange", function EvsResultComponent_Template_label_ngModelChange_190_listener($event) {
        return ctx.toggleAllTicked($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(192, "th", 53);
      \u0275\u0275text(193);
      \u0275\u0275pipe(194, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(195, "th", 54);
      \u0275\u0275text(196);
      \u0275\u0275pipe(197, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "th", 55);
      \u0275\u0275text(199);
      \u0275\u0275pipe(200, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(201, "th", 54);
      \u0275\u0275text(202);
      \u0275\u0275pipe(203, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "th", 56);
      \u0275\u0275text(205);
      \u0275\u0275pipe(206, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "th", 57);
      \u0275\u0275text(208);
      \u0275\u0275pipe(209, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "th", 55);
      \u0275\u0275text(211);
      \u0275\u0275pipe(212, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "th", 58);
      \u0275\u0275text(214);
      \u0275\u0275pipe(215, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(216, "th", 59);
      \u0275\u0275text(217);
      \u0275\u0275pipe(218, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "th", 59);
      \u0275\u0275text(220);
      \u0275\u0275pipe(221, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(222, "th", 60);
      \u0275\u0275text(223);
      \u0275\u0275pipe(224, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(225, "th", 61);
      \u0275\u0275text(226);
      \u0275\u0275pipe(227, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "th", 62);
      \u0275\u0275text(229);
      \u0275\u0275pipe(230, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(231, "tr")(232, "th", 63);
      \u0275\u0275text(233);
      \u0275\u0275pipe(234, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(235, "th", 64);
      \u0275\u0275text(236);
      \u0275\u0275pipe(237, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(238, "th", 65);
      \u0275\u0275text(239);
      \u0275\u0275pipe(240, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(241, "th", 66);
      \u0275\u0275text(242);
      \u0275\u0275pipe(243, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(244, "th", 67);
      \u0275\u0275text(245);
      \u0275\u0275pipe(246, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(247, "th", 63);
      \u0275\u0275text(248);
      \u0275\u0275pipe(249, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(250, "th", 64);
      \u0275\u0275text(251);
      \u0275\u0275pipe(252, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(253, "th", 65);
      \u0275\u0275text(254);
      \u0275\u0275pipe(255, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(256, "th", 66);
      \u0275\u0275text(257);
      \u0275\u0275pipe(258, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(259, "th", 67);
      \u0275\u0275text(260);
      \u0275\u0275pipe(261, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(262, "th", 63);
      \u0275\u0275text(263);
      \u0275\u0275pipe(264, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(265, "th", 64);
      \u0275\u0275text(266);
      \u0275\u0275pipe(267, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(268, "th", 65);
      \u0275\u0275text(269);
      \u0275\u0275pipe(270, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(271, "tbody");
      \u0275\u0275template(272, EvsResultComponent_tr_272_Template, 4, 4, "tr", 68)(273, EvsResultComponent_tr_273_Template, 62, 52, "tr", 69);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(274, "nz-modal", 70);
      \u0275\u0275pipe(275, "translate");
      \u0275\u0275listener("nzOnCancel", function EvsResultComponent_Template_nz_modal_nzOnCancel_274_listener() {
        return ctx.closePicker();
      });
      \u0275\u0275template(276, EvsResultComponent_ng_container_276_Template, 48, 58, "ng-container", 71);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const verTable_r19 = \u0275\u0275reference(186);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 103, "evs.result.label.evaluationName", "T\xEAn \u0111\xE1nh gi\xE1"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.resumeSeq);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.resumeOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 106, "evs.result.label.empSearch", "M\xE3 NV / H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.empDisplay)("placeholder", \u0275\u0275pipeBind2(16, 109, "evs.result.placeholder.selectEmployee", "Ch\u1ECDn nh\xE2n vi\xEAn..."));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 112, "evs.result.label.dept", "Ph\xF2ng ban"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzNodes", ctx.deptNodes());
      \u0275\u0275twoWayProperty("ngModel", ctx.deptNos);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(26, 115, "evs.result.placeholder.selectDept", "Ch\u1ECDn ph\xF2ng ban"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 118, "evs.result.label.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.statusFilter);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(32, 121, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.statusOptions());
      \u0275\u0275advance(3);
      \u0275\u0275property("nzBodyStyle", \u0275\u0275pureFunction0(286, _c0));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 124, "evs.result.panel.standard", "Ti\xEAu chu\u1EA9n c\u01A1 b\u1EA3n"));
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 127, "evs.result.col.total", "T\u1ED5ng s\u1ED1 ng\u01B0\u1EDDi"));
      \u0275\u0275advance(13);
      \u0275\u0275property("ngForOf", ctx.grades);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.grades);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(66, 130, "evs.result.col.std", "T\u1EF7 l\u1EC7 ti\xEAu chu\u1EA9n"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.stdStat().total);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.grades);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(73, 133, "evs.result.col.hr", "Nh\xE2n s\u1EF1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.hrStat().total);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.grades);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(80, 136, "evs.result.col.prog_l2", "L\u1EA7n 2"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.l2Stat().total);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.grades);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(87, 139, "evs.result.col.prog_l1", "L\u1EA7n 1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.l1Stat().total);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.grades);
      \u0275\u0275advance(2);
      \u0275\u0275property("nzBodyStyle", \u0275\u0275pureFunction0(287, _c0));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(96, 142, "evs.result.panel.statusProgress", "Tr\u1EA1ng th\xE1i ti\u1EBFn h\xE0nh"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(100, 145, "evs.result.btn.email", "Email"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.endingEvaluation());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(103, 148, "evs.result.btn.evaluateEnd", "\u0110\xE1nh gi\xE1 k\u1EBFt th\xFAc"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("nzLoading", ctx.changingStatus());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(107, 151, "evs.result.btn.changeStatus", "Thay \u0111\u1ED5i tr\u1EA1ng th\xE1i"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(110, 154, "evs.result.panel.progress", "T\xECnh tr\u1EA1ng \u0111\xE1nh gi\xE1 giai \u0111o\u1EA1n"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(116, 157, "evs.result.col.total", "T\u1ED5ng s\u1ED1 ng\u01B0\u1EDDi"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(119, 160, "evs.result.col.prog_self", "B\u1EA3n th\xE2n"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(122, 163, "evs.result.col.prog_l1", "L\u1EA7n 1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(125, 166, "evs.result.col.prog_l2", "L\u1EA7n 2"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(128, 169, "evs.result.col.prog_done", "Ho\xE0n th\xE0nh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(131, 172, "evs.result.col.prog_end", "K\u1EBFt th\xFAc"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.progressStat().total);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.progressStat().self);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.progressStat().l1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.progressStat().l2);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.progressStat().done);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.progressStat().end);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(149, 175, "evs.result.label.total", "T\u1ED5ng"), ": ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.filteredRows().length);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(155, 178, "evs.result.quickFilter", "L\u1ECDc nhanh"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.quickFilter);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(157, 181, "evs.result.placeholder.keyword", "T\u1EEB kh\xF3a..."));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(161, 184, "evs.result.btn.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(165, 187, "evs.result.btn.template", "B\u1EA3n m\u1EABu"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(169, 190, "evs.result.btn.insertFile", "Ch\xE8n file"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.copyingGrade());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(173, 193, "evs.result.btn.copyGrade", "Sao ch\xE9p c\u1EA5p \u0111\xE1nh gi\xE1"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.saving());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(177, 196, "evs.result.btn.save", "L\u01B0u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(181, 199, "evs.result.btn.exportExcel", "Xu\u1EA5t Excel"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance(2);
      \u0275\u0275property("nzData", ctx.filteredRows())("nzLoading", ctx.loading())("nzShowPagination", false)("nzScroll", \u0275\u0275pureFunction0(288, _c1));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.allTicked)("nzIndeterminate", ctx.someTicked)("title", \u0275\u0275pipeBind2(191, 202, "evs.result.label.selectAll", "Ch\u1ECDn t\u1EA5t c\u1EA3"));
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(194, 205, "evs.result.col.no", "No."));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(197, 208, "evs.result.col.name", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(200, 211, "evs.result.col.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(203, 214, "evs.result.col.dept", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(206, 217, "evs.result.col.position", "Ch\u1EE9c v\u1EE5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(209, 220, "evs.result.col.dateStarted", "Ng\xE0y v\xE0o l\xE0m"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(212, 223, "evs.result.col.statusActivity", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(215, 226, "evs.result.col.self", "B\u1EA3n th\xE2n"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(218, 229, "evs.result.col.appraiser1", "Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 l\u1EA7n 1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(221, 232, "evs.result.col.appraiser2", "Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 l\u1EA7n 2"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(224, 235, "evs.result.col.hrGrade", "C\u1EA5p \u0111\xE1nh gi\xE1 (nh\xE2n s\u1EF1)"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(227, 238, "evs.result.col.opinion", "\xDD ki\u1EBFn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(230, 241, "evs.result.col.updatedBy", "Ng\u01B0\u1EDDi thay \u0111\u1ED5i"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(234, 244, "evs.result.col.statusEval", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(237, 247, "evs.result.col.point", "\u0110i\u1EC3m s\u1ED1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(240, 250, "evs.result.col.grade", "C\u1EA5p"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(243, 253, "evs.result.col.name", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(246, 256, "evs.result.col.position", "Ch\u1EE9c v\u1EE5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(249, 259, "evs.result.col.statusEval", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(252, 262, "evs.result.col.point", "\u0110i\u1EC3m s\u1ED1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(255, 265, "evs.result.col.grade", "C\u1EA5p"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(258, 268, "evs.result.col.name", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(261, 271, "evs.result.col.position", "Ch\u1EE9c v\u1EE5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(264, 274, "evs.result.col.statusEval", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(267, 277, "evs.result.col.point", "\u0110i\u1EC3m s\u1ED1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(270, 280, "evs.result.col.grade", "C\u1EA5p"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && verTable_r19.data.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", verTable_r19.data);
      \u0275\u0275advance();
      \u0275\u0275property("nzVisible", ctx.pickerVisible())("nzTitle", \u0275\u0275pipeBind2(275, 283, "empSearch.title", "T\xECm ki\u1EBFm nh\xE2n vi\xEAn"))("nzFooter", null);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzCheckboxModule, NzCheckboxComponent, NzTreeSelectModule, NzTreeSelectComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\n  tr.ver-ticked {\n  background-color: #fff3cd !important;\n}\n  .ver-grade-badge {\n  display: inline-block;\n  min-width: 36px;\n  text-align: center;\n  font-weight: 600;\n  font-size: 0.78rem;\n  border-radius: 4px;\n  padding: 1px 6px;\n}\n  .ver-grade-EX {\n  background-color: #d1ecf1;\n  color: #0c5460;\n}\n  .ver-grade-VG {\n  background-color: #d4edda;\n  color: #155724;\n}\n  .ver-grade-GD {\n  background-color: #fff3cd;\n  color: #856404;\n}\n  .ver-grade-NI {\n  background-color: #fde2e2;\n  color: #721c24;\n}\n  .ver-grade-UN {\n  background-color: #f8d7da;\n  color: #491217;\n}\n  .ver-status-evaluated {\n  color: #28a745;\n  font-size: 0.75rem;\n  white-space: nowrap;\n}\n  .ver-status-not-eval {\n  color: #dc3545;\n  font-size: 0.75rem;\n  white-space: nowrap;\n}\n  .ver-grade-sel {\n  min-width: 130px;\n}\n  .ver-content-inp {\n  min-width: 160px;\n}\n  .ver-picker-row {\n  cursor: pointer;\n}\n.ver-btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=evs-result.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EvsResultComponent, [{
    type: Component,
    args: [{ selector: "app-evs-result", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzSelectModule,
      NzButtonModule,
      NzCheckboxModule,
      NzTreeSelectModule,
      NzModalModule,
      NzAlertModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm -->
    <nz-card class="mb-2 sticky-filter-card">
      <div class="row g-3 align-items-end">
        <div class="col-md-3">
          <label class="form-label">{{ 'evs.result.label.evaluationName' | translate:'T\xEAn \u0111\xE1nh gi\xE1' }}</label>
          <nz-select class="w-100" [(ngModel)]="resumeSeq" name="verResumeSeq" (ngModelChange)="onResumeChange()">
            <nz-option *ngFor="let r of resumeOptions()" [nzValue]="r.seq" [nzLabel]="r.resumeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'evs.result.label.empSearch' | translate:'M\xE3 NV / H\u1ECD t\xEAn' }}</label>
          <div class="input-group input-group-sm">
            <input class="form-control" readonly [value]="empDisplay"
                   [placeholder]="'evs.result.placeholder.selectEmployee' | translate:'Ch\u1ECDn nh\xE2n vi\xEAn...'"
                   (click)="openEmployeePicker()" style="cursor:pointer;">
            <button class="btn btn-outline-secondary" type="button" (click)="openEmployeePicker()">
              <i class="bx bx-search"></i>
            </button>
            <button class="btn btn-outline-secondary" type="button" (click)="clearEmpSearch()">
              <i class="bx bx-x"></i>
            </button>
          </div>
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'evs.result.label.dept' | translate:'Ph\xF2ng ban' }}</label>
          <nz-tree-select class="w-100" [nzNodes]="deptNodes()" [(ngModel)]="deptNos" name="verDeptNos"
                           nzCheckable nzShowSearch nzAllowClear
                           [nzPlaceHolder]="'evs.result.placeholder.selectDept' | translate:'Ch\u1ECDn ph\xF2ng ban'"></nz-tree-select>
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'evs.result.label.status' | translate:'Tr\u1EA1ng th\xE1i' }}</label>
          <nz-select class="w-100" [(ngModel)]="statusFilter" name="verStatusFilter" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let s of statusOptions()" [nzValue]="s.codeNo" [nzLabel]="s.codeName"></nz-option>
          </nz-select>
        </div>
      </div>
    </nz-card>

    <!-- Hai panel th\u1ED1ng k\xEA -->
    <div class="row mb-2 g-2">
      <!-- Panel tr\xE1i: Ti\xEAu chu\u1EA9n c\u01A1 b\u1EA3n -->
      <div class="col-md-8">
        <nz-card class="h-100" [nzBodyStyle]="{ padding: '8px' }">
          <div class="fw-semibold small mb-1">{{ 'evs.result.panel.standard' | translate:'Ti\xEAu chu\u1EA9n c\u01A1 b\u1EA3n' }}</div>
          <div class="table-responsive">
            <table class="table table-bordered table-sm mb-0 text-center">
              <thead class="table-light">
                <tr>
                  <th rowspan="2" class="align-middle">-</th>
                  <th rowspan="2" class="align-middle">{{ 'evs.result.col.total' | translate:'T\u1ED5ng s\u1ED1 ng\u01B0\u1EDDi' }}</th>
                  <th colspan="2">EX</th>
                  <th colspan="2">VG</th>
                  <th colspan="2">GD</th>
                  <th colspan="2">NI</th>
                  <th colspan="2">UN</th>
                </tr>
                <tr>
                  <th *ngFor="let g of grades">{{ 'evs.result.col.count' | translate:'S\u1ED1 l\u01B0\u1EE3ng' }}</th>
                  <ng-container *ngFor="let g of grades">
                    <th></th>
                  </ng-container>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ 'evs.result.col.std' | translate:'T\u1EF7 l\u1EC7 ti\xEAu chu\u1EA9n' }}</td>
                  <td>{{ stdStat().total }}</td>
                  <ng-container *ngFor="let g of grades">
                    <td>{{ stdStat().cnt[g] }}</td>
                    <td>{{ stdStat().pct[g] }}%</td>
                  </ng-container>
                </tr>
                <tr>
                  <td>{{ 'evs.result.col.hr' | translate:'Nh\xE2n s\u1EF1' }}</td>
                  <td>{{ hrStat().total }}</td>
                  <ng-container *ngFor="let g of grades">
                    <td>{{ hrStat()[g] }}</td>
                    <td>{{ pct(hrStat()[g], hrStat().total) }}%</td>
                  </ng-container>
                </tr>
                <tr>
                  <td>{{ 'evs.result.col.prog_l2' | translate:'L\u1EA7n 2' }}</td>
                  <td>{{ l2Stat().total }}</td>
                  <ng-container *ngFor="let g of grades">
                    <td>{{ l2Stat()[g] }}</td>
                    <td>{{ pct(l2Stat()[g], l2Stat().total) }}%</td>
                  </ng-container>
                </tr>
                <tr>
                  <td>{{ 'evs.result.col.prog_l1' | translate:'L\u1EA7n 1' }}</td>
                  <td>{{ l1Stat().total }}</td>
                  <ng-container *ngFor="let g of grades">
                    <td>{{ l1Stat()[g] }}</td>
                    <td>{{ pct(l1Stat()[g], l1Stat().total) }}%</td>
                  </ng-container>
                </tr>
              </tbody>
            </table>
          </div>
        </nz-card>
      </div>

      <!-- Panel ph\u1EA3i: Tr\u1EA1ng th\xE1i ti\u1EBFn h\xE0nh -->
      <div class="col-md-4">
        <nz-card class="h-100" [nzBodyStyle]="{ padding: '8px' }">
          <div class="d-flex justify-content-between align-items-center mb-1">
            <span class="fw-semibold small">{{ 'evs.result.panel.statusProgress' | translate:'Tr\u1EA1ng th\xE1i ti\u1EBFn h\xE0nh' }}</span>
            <div class="d-flex gap-1">
              <button nz-button nzSize="small" type="button" (click)="sendEmail()">
                {{ 'evs.result.btn.email' | translate:'Email' }}
              </button>
              <button nz-button nzDanger nzSize="small" type="button" [nzLoading]="endingEvaluation()" (click)="evaluateEnd()">
                {{ 'evs.result.btn.evaluateEnd' | translate:'\u0110\xE1nh gi\xE1 k\u1EBFt th\xFAc' }}
              </button>
            </div>
          </div>
          <div class="d-flex align-items-center gap-2 mb-2 flex-wrap">
            <button nz-button nzType="primary" nzSize="small" type="button" [nzLoading]="changingStatus()" (click)="changeStatus()">
              {{ 'evs.result.btn.changeStatus' | translate:'Thay \u0111\u1ED5i tr\u1EA1ng th\xE1i' }}
            </button>
          </div>
          <div class="fw-semibold small mb-1">{{ 'evs.result.panel.progress' | translate:'T\xECnh tr\u1EA1ng \u0111\xE1nh gi\xE1 giai \u0111o\u1EA1n' }}</div>
          <table class="table table-bordered table-sm text-center mb-0">
            <thead class="table-light">
              <tr>
                <th>{{ 'evs.result.col.total' | translate:'T\u1ED5ng s\u1ED1 ng\u01B0\u1EDDi' }}</th>
                <th>{{ 'evs.result.col.prog_self' | translate:'B\u1EA3n th\xE2n' }}</th>
                <th>{{ 'evs.result.col.prog_l1' | translate:'L\u1EA7n 1' }}</th>
                <th>{{ 'evs.result.col.prog_l2' | translate:'L\u1EA7n 2' }}</th>
                <th>{{ 'evs.result.col.prog_done' | translate:'Ho\xE0n th\xE0nh' }}</th>
                <th>{{ 'evs.result.col.prog_end' | translate:'K\u1EBFt th\xFAc' }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ progressStat().total }}</td>
                <td>{{ progressStat().self }}</td>
                <td>{{ progressStat().l1 }}</td>
                <td>{{ progressStat().l2 }}</td>
                <td>{{ progressStat().done }}</td>
                <td>{{ progressStat().end }}</td>
              </tr>
            </tbody>
          </table>
        </nz-card>
      </div>
    </div>

    <!-- Thanh h\xE0nh \u0111\u1ED9ng & l\u1ECDc nhanh -->
    <div class="d-flex align-items-center gap-2 mb-2 flex-wrap">
      <span class="small text-muted">{{ 'evs.result.label.total' | translate:'T\u1ED5ng' }}: <strong>{{ filteredRows().length }}</strong></span>
      <div class="d-flex align-items-center gap-1">
        <label class="form-label small text-muted mb-0">{{ 'evs.result.quickFilter' | translate:'L\u1ECDc nhanh' }}</label>
        <input nz-input style="width:150px;" [(ngModel)]="quickFilter" name="verQuickFilter"
               [placeholder]="'evs.result.placeholder.keyword' | translate:'T\u1EEB kh\xF3a...'">
      </div>
      <button nz-button nzType="primary" nzSize="small" type="button" (click)="search()">
        <i class="bx bx-search"></i> {{ 'evs.result.btn.search' | translate:'Tra c\u1EE9u' }}
      </button>
      <button nz-button nzSize="small" type="button" (click)="openTemplate()">
        <i class="bx bx-file"></i> {{ 'evs.result.btn.template' | translate:'B\u1EA3n m\u1EABu' }}
      </button>
      <button nz-button nzSize="small" type="button" (click)="insertFile()">
        <i class="bx bx-paperclip"></i> {{ 'evs.result.btn.insertFile' | translate:'Ch\xE8n file' }}
      </button>
      <button nz-button nzSize="small" type="button" [nzLoading]="copyingGrade()" (click)="copyGrade()">
        <i class="bx bx-copy"></i> {{ 'evs.result.btn.copyGrade' | translate:'Sao ch\xE9p c\u1EA5p \u0111\xE1nh gi\xE1' }}
      </button>
      <button nz-button nzType="primary" nzSize="small" type="button" [nzLoading]="saving()" (click)="saveAll()">
        <i class="bx bx-save"></i> {{ 'evs.result.btn.save' | translate:'L\u01B0u' }}
      </button>
      <button nz-button nzSize="small" type="button" class="ver-btn-export" (click)="exportExcel()">
        <i class="bx bx-export"></i> {{ 'evs.result.btn.exportExcel' | translate:'Xu\u1EA5t Excel' }}
      </button>
    </div>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <div class="table-responsive" style="max-height:calc(100vh - 460px); overflow-y:auto;">
        <nz-table [nzData]="filteredRows()" [nzLoading]="loading()" [nzShowPagination]="false"
                  nzSize="small" [nzScroll]="{ x: '2100px' }" #verTable="nzTable">
          <thead>
            <tr>
              <th rowspan="2" class="text-center align-middle" nzWidth="36px">
                <label nz-checkbox [ngModel]="allTicked" [nzIndeterminate]="someTicked" (ngModelChange)="toggleAllTicked($event)"
                       [title]="'evs.result.label.selectAll' | translate:'Ch\u1ECDn t\u1EA5t c\u1EA3'"></label>
              </th>
              <th rowspan="2" class="text-center align-middle" nzWidth="45px">{{ 'evs.result.col.no' | translate:'No.' }}</th>
              <th rowspan="2" class="align-middle" nzWidth="150px">{{ 'evs.result.col.name' | translate:'H\u1ECD t\xEAn' }}</th>
              <th rowspan="2" class="text-center align-middle" nzWidth="100px">{{ 'evs.result.col.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
              <th rowspan="2" class="align-middle" nzWidth="150px">{{ 'evs.result.col.dept' | translate:'Ph\xF2ng ban' }}</th>
              <th rowspan="2" class="text-center align-middle" nzWidth="120px">{{ 'evs.result.col.position' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
              <th rowspan="2" class="text-center align-middle" nzWidth="110px">{{ 'evs.result.col.dateStarted' | translate:'Ng\xE0y v\xE0o l\xE0m' }}</th>
              <th rowspan="2" class="text-center align-middle" nzWidth="100px">{{ 'evs.result.col.statusActivity' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
              <th colspan="3" class="text-center">{{ 'evs.result.col.self' | translate:'B\u1EA3n th\xE2n' }}</th>
              <th colspan="5" class="text-center">{{ 'evs.result.col.appraiser1' | translate:'Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 l\u1EA7n 1' }}</th>
              <th colspan="5" class="text-center">{{ 'evs.result.col.appraiser2' | translate:'Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 l\u1EA7n 2' }}</th>
              <th rowspan="2" class="text-center align-middle" nzWidth="150px">{{ 'evs.result.col.hrGrade' | translate:'C\u1EA5p \u0111\xE1nh gi\xE1 (nh\xE2n s\u1EF1)' }}</th>
              <th rowspan="2" class="align-middle" nzWidth="180px">{{ 'evs.result.col.opinion' | translate:'\xDD ki\u1EBFn' }}</th>
              <th rowspan="2" class="text-center align-middle" nzWidth="170px">{{ 'evs.result.col.updatedBy' | translate:'Ng\u01B0\u1EDDi thay \u0111\u1ED5i' }}</th>
            </tr>
            <tr>
              <th class="text-center" nzWidth="110px">{{ 'evs.result.col.statusEval' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
              <th class="text-center" nzWidth="80px">{{ 'evs.result.col.point' | translate:'\u0110i\u1EC3m s\u1ED1' }}</th>
              <th class="text-center" nzWidth="70px">{{ 'evs.result.col.grade' | translate:'C\u1EA5p' }}</th>
              <th nzWidth="140px">{{ 'evs.result.col.name' | translate:'H\u1ECD t\xEAn' }}</th>
              <th class="text-center" nzWidth="120px">{{ 'evs.result.col.position' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
              <th class="text-center" nzWidth="110px">{{ 'evs.result.col.statusEval' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
              <th class="text-center" nzWidth="80px">{{ 'evs.result.col.point' | translate:'\u0110i\u1EC3m s\u1ED1' }}</th>
              <th class="text-center" nzWidth="70px">{{ 'evs.result.col.grade' | translate:'C\u1EA5p' }}</th>
              <th nzWidth="140px">{{ 'evs.result.col.name' | translate:'H\u1ECD t\xEAn' }}</th>
              <th class="text-center" nzWidth="120px">{{ 'evs.result.col.position' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
              <th class="text-center" nzWidth="110px">{{ 'evs.result.col.statusEval' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
              <th class="text-center" nzWidth="80px">{{ 'evs.result.col.point' | translate:'\u0110i\u1EC3m s\u1ED1' }}</th>
              <th class="text-center" nzWidth="70px">{{ 'evs.result.col.grade' | translate:'C\u1EA5p' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="!loading() && verTable.data.length === 0">
              <td colspan="24" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
            </tr>
            <tr *ngFor="let row of verTable.data; let i = index" [class.ver-ticked]="isTicked(row)">
              <td class="text-center">
                <label nz-checkbox [ngModel]="isTicked(row)" (ngModelChange)="toggleTicked(row, $event)"></label>
              </td>
              <td class="text-center">{{ i + 1 }}</td>
              <td [attr.title]="row.localName || null">{{ row.localName }}</td>
              <td class="text-center">{{ row.empid }}</td>
              <td [attr.title]="row.deptname || null">{{ row.deptname }}</td>
              <td class="text-center">{{ row.postGradeName }}</td>
              <td class="text-center">{{ row.dateStarted }}</td>
              <td class="text-center">{{ row.activityName }}</td>
              <!-- B\u1EA3n th\xE2n -->
              <td class="text-center">
                <span [class]="row.affirmFlagName0 === 'Evaluated' ? 'ver-status-evaluated' : 'ver-status-not-eval'">
                  <i class="bx" [class.bx-check-circle]="row.affirmFlagName0 === 'Evaluated'" [class.bx-x-circle]="row.affirmFlagName0 !== 'Evaluated'"></i>
                  {{ row.affirmFlagName0 }}
                </span>
              </td>
              <td class="text-center">{{ row.evsPoint0 }}</td>
              <td class="text-center">
                <span *ngIf="row.evsGrade0" class="ver-grade-badge" [class]="'ver-grade-' + row.evsGrade0">{{ row.evsGrade0 }}</span>
              </td>
              <!-- \u0110G1 -->
              <td>{{ row.localName1 }}</td>
              <td class="text-center"><small class="text-muted">{{ row.postGradeName1 }}</small></td>
              <td class="text-center">
                <span [class]="row.affirmFlagName1 === 'Evaluated' ? 'ver-status-evaluated' : 'ver-status-not-eval'">
                  <i class="bx" [class.bx-check-circle]="row.affirmFlagName1 === 'Evaluated'" [class.bx-x-circle]="row.affirmFlagName1 !== 'Evaluated'"></i>
                  {{ row.affirmFlagName1 }}
                </span>
              </td>
              <td class="text-center">{{ row.evsPoint1 }}</td>
              <td class="text-center">
                <span *ngIf="row.evsGrade1" class="ver-grade-badge" [class]="'ver-grade-' + row.evsGrade1">{{ row.evsGrade1 }}</span>
              </td>
              <!-- \u0110G2 -->
              <td>{{ row.localName2 }}</td>
              <td class="text-center"><small class="text-muted">{{ row.postGradeName2 }}</small></td>
              <td class="text-center">
                <span [class]="row.affirmFlagName2 === 'Evaluated' ? 'ver-status-evaluated' : 'ver-status-not-eval'">
                  <i class="bx" [class.bx-check-circle]="row.affirmFlagName2 === 'Evaluated'" [class.bx-x-circle]="row.affirmFlagName2 !== 'Evaluated'"></i>
                  {{ row.affirmFlagName2 }}
                </span>
              </td>
              <td class="text-center">{{ row.evsPoint2 }}</td>
              <td class="text-center">
                <span *ngIf="row.evsGrade2" class="ver-grade-badge" [class]="'ver-grade-' + row.evsGrade2">{{ row.evsGrade2 }}</span>
              </td>
              <!-- C\u1EA5p \u0111\xE1nh gi\xE1 (nh\xE2n s\u1EF1) - s\u1EEDa tr\u1EF1c ti\u1EBFp -->
              <td>
                <nz-select class="w-100 ver-grade-sel" [ngModel]="row.finalGradeLetter" (ngModelChange)="onFinalGradeChange(row, $event)"
                           nzAllowClear [nzPlaceHolder]="'common.select' | translate:'-- Ch\u1ECDn --'">
                  <nz-option *ngFor="let o of gradeOptions()" [nzValue]="o.codeNo" [nzLabel]="o.description || o.codeName"></nz-option>
                </nz-select>
              </td>
              <!-- \xDD ki\u1EBFn - s\u1EEDa tr\u1EF1c ti\u1EBFp -->
              <td>
                <input nz-input class="ver-content-inp" [(ngModel)]="row.finalAffirmContent" (ngModelChange)="onContentChange(row)">
              </td>
              <td class="text-center">
                <small>{{ row.updatedBy }}<br>{{ row.updateDate }}</small>
              </td>
            </tr>
          </tbody>
        </nz-table>
      </div>
    </nz-card>
  </div>
</div>

<!-- Popup t\xECm ki\u1EBFm nh\xE2n vi\xEAn (l\u1ECDc theo \u0111\u1ED1i t\u01B0\u1EE3ng \u0111\xE1nh gi\xE1) -->
<nz-modal [nzVisible]="pickerVisible()" [nzTitle]="'empSearch.title' | translate:'T\xECm ki\u1EBFm nh\xE2n vi\xEAn'"
          nzWidth="900px" (nzOnCancel)="closePicker()" [nzFooter]="null">
  <ng-container *nzModalContent>
    <form class="row g-2 align-items-end mb-3" (ngSubmit)="pickerSearch()">
      <div class="col-md-5">
        <label class="form-label">{{ 'empSearch.field.keyword' | translate:'M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn' }}</label>
        <input nz-input [(ngModel)]="pickerKeyword" name="verPickerKeyword"
               [placeholder]="'empSearch.placeholder.keyword' | translate:'Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn'"
               (keydown.enter)="$event.preventDefault(); pickerSearch()">
      </div>
      <div class="col-md-4">
        <label class="form-label">{{ 'empSearch.field.dept' | translate:'Ph\xF2ng ban' }}</label>
        <nz-tree-select class="w-100" [nzNodes]="deptNodes()" [(ngModel)]="pickerDeptNos" name="verPickerDeptNos"
                         nzCheckable nzShowSearch nzAllowClear
                         [nzPlaceHolder]="'vdp.search.dept.placeholder' | translate:'Ch\u1ECDn ph\xF2ng ban'"></nz-tree-select>
      </div>
      <div class="col-md-3">
        <label class="form-label">{{ 'empSearch.field.empOffice' | translate:'Tr\u1EA1ng th\xE1i l\xE0m vi\u1EC7c' }}</label>
        <nz-select class="w-100" [(ngModel)]="pickerEmpOffice" name="verPickerEmpOffice" nzAllowClear
                   [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
          <nz-option *ngFor="let c of empOfficeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
        </nz-select>
      </div>
      <div class="col-12 d-flex gap-2">
        <button nz-button nzType="primary" type="submit">
          <i class="bx bx-search"></i> {{ 'common.search' | translate:'T\xECm ki\u1EBFm' }}
        </button>
      </div>
    </form>

    <nz-table [nzData]="pickerRows()" [nzLoading]="pickerLoading()" [nzPageSize]="10" nzSize="small" #verPickerTable="nzTable">
      <thead>
        <tr>
          <th class="text-center" nzWidth="60px">{{ 'empSearch.col.no' | translate:'STT' }}</th>
          <th nzWidth="110px">{{ 'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
          <th>{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
          <th>{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
          <th>{{ 'common.position' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngIf="!pickerLoading() && verPickerTable.data.length === 0">
          <td colspan="5" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
        </tr>
        <tr *ngFor="let row of verPickerTable.data; let i = index" class="ver-picker-row" (click)="selectEmployee(row)">
          <td class="text-center">{{ i + 1 }}</td>
          <td>{{ row.empId }}</td>
          <td>{{ row.localName }}</td>
          <td>{{ row.deptName }}</td>
          <td>{{ row.position }}</td>
        </tr>
      </tbody>
    </nz-table>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/evs-result/evs-result.component.css */\n::ng-deep tr.ver-ticked {\n  background-color: #fff3cd !important;\n}\n::ng-deep .ver-grade-badge {\n  display: inline-block;\n  min-width: 36px;\n  text-align: center;\n  font-weight: 600;\n  font-size: 0.78rem;\n  border-radius: 4px;\n  padding: 1px 6px;\n}\n::ng-deep .ver-grade-EX {\n  background-color: #d1ecf1;\n  color: #0c5460;\n}\n::ng-deep .ver-grade-VG {\n  background-color: #d4edda;\n  color: #155724;\n}\n::ng-deep .ver-grade-GD {\n  background-color: #fff3cd;\n  color: #856404;\n}\n::ng-deep .ver-grade-NI {\n  background-color: #fde2e2;\n  color: #721c24;\n}\n::ng-deep .ver-grade-UN {\n  background-color: #f8d7da;\n  color: #491217;\n}\n::ng-deep .ver-status-evaluated {\n  color: #28a745;\n  font-size: 0.75rem;\n  white-space: nowrap;\n}\n::ng-deep .ver-status-not-eval {\n  color: #dc3545;\n  font-size: 0.75rem;\n  white-space: nowrap;\n}\n::ng-deep .ver-grade-sel {\n  min-width: 130px;\n}\n::ng-deep .ver-content-inp {\n  min-width: 160px;\n}\n::ng-deep .ver-picker-row {\n  cursor: pointer;\n}\n.ver-btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=evs-result.component.css.map */\n"] }]
  }], () => [{ type: EvsResultService }, { type: ChangeUserService }, { type: I18nService }, { type: NzMessageService }, { type: NzModalService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EvsResultComponent, { className: "EvsResultComponent", filePath: "src/app/evs-result/evs-result.component.ts", lineNumber: 138 });
})();
export {
  EvsResultComponent
};
//# debugId=2103a0a3-e0a7-55ae-869a-90cab0183051
//# sourceMappingURL=chunk-F6UTET66.js.map
