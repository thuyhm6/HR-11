import {
  NzDescriptionsComponent,
  NzDescriptionsItemComponent,
  NzDescriptionsModule
} from "./chunk-Q45A6SWP.js";
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
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTW5U2M5.js";

// src/app/affirm-target1-ability/affirm-target1-ability.service.ts
var API_BASE = "/evs/manage/api";
var AffirmTarget1AbilityService = class _AffirmTarget1AbilityService {
  constructor(http) {
    this.http = http;
  }
  http;
  getResumeList(evsType, evsLevel) {
    return this.http.get(`${API_BASE}/resume/evsResumeList`, {
      params: new HttpParams().set("evsType", evsType).set("evsLevel", evsLevel),
      withCredentials: true
    });
  }
  getGradeList(resumeSeq, evsType) {
    return this.http.get(`${API_BASE}/evsGrade/list`, {
      params: new HttpParams().set("resumeSeq", resumeSeq).set("evsType", evsType),
      withCredentials: true
    });
  }
  getScoreOptions(resumeSeq) {
    return this.http.get(`${API_BASE}/evsParam/list`, {
      params: new HttpParams().set("resumeSeq", resumeSeq).set("paramType", "ITEM"),
      withCredentials: true
    });
  }
  getStandardRate(resumeSeq) {
    return this.http.get(`${API_BASE}/affirmTarget1/standardRate`, {
      params: new HttpParams().set("resumeSeq", resumeSeq),
      withCredentials: true
    });
  }
  getGradeSummary(resumeSeq) {
    return this.http.get(`${API_BASE}/affirmTarget1/gradeSummary`, {
      params: new HttpParams().set("resumeSeq", resumeSeq),
      withCredentials: true
    });
  }
  getObjectList(params) {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      httpParams = httpParams.set(key, String(value));
    }
    return this.http.get(`${API_BASE}/affirmTarget1/objectList`, {
      params: httpParams,
      withCredentials: true
    });
  }
  getObjectInfo(evsObjectSeq) {
    return this.http.get(`${API_BASE}/affirmTarget1/objectInfo`, {
      params: new HttpParams().set("evsObjectSeq", evsObjectSeq),
      withCredentials: true
    });
  }
  getItemList(evsObjectSeq) {
    return this.http.get(`${API_BASE}/affirmTarget1Ability/itemList`, {
      params: new HttpParams().set("evsObjectSeq", evsObjectSeq),
      withCredentials: true
    });
  }
  saveDetail(payload) {
    return this.http.post(`${API_BASE}/affirmTarget1Ability/saveDetail`, payload, { withCredentials: true });
  }
  confirmDetail(payload) {
    return this.http.post(`${API_BASE}/affirmTarget1Ability/confirmDetail`, payload, { withCredentials: true });
  }
  rejectDetail(seq) {
    return this.http.post(`${API_BASE}/affirmTarget1Ability/rejectDetail`, { seq }, { withCredentials: true });
  }
  static \u0275fac = function AffirmTarget1AbilityService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AffirmTarget1AbilityService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AffirmTarget1AbilityService, factory: _AffirmTarget1AbilityService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AffirmTarget1AbilityService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/affirm-target1-ability/affirm-target1-ability.component.ts
var _c0 = () => ({ "max-height": "80vh", "overflow-y": "auto" });
var _c1 = () => ({ x: "1300px" });
function AffirmTarget1AbilityComponent_nz_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 13);
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    \u0275\u0275property("nzValue", r_r1.seq)("nzLabel", r_r1.resumeName);
  }
}
function AffirmTarget1AbilityComponent_nz_alert_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 14);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("nzMessage", \u0275\u0275pipeBind2(1, 1, "evs.viewConfirmTarget1.msg.notInEvalPeriod", "Kh\xF4ng trong kho\u1EA3ng th\u1EDDi gian \u0111\xE1nh gi\xE1 ho\u1EB7c b\u1EA1n kh\xF4ng ph\u1EA3i l\xE0 ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1, xin li\xEAn h\u1EC7 Ph\xF2ng nh\xE2n s\u1EF1!"));
  }
}
function AffirmTarget1AbilityComponent_ng_container_16_nz_card_1_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const gn_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(gn_r3);
  }
}
function AffirmTarget1AbilityComponent_ng_container_16_nz_card_1_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "evs.viewAffirmTarget1Ability.col.numPeople", "S\u1ED1 ng\u01B0\u1EDDi"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 5, "evs.viewAffirmTarget1Ability.col.rate", "T\u1EF7 l\u1EC7"));
  }
}
function AffirmTarget1AbilityComponent_ng_container_16_nz_card_1_ng_container_27_Template(rf, ctx) {
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
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r4.cnt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r4.pct);
  }
}
function AffirmTarget1AbilityComponent_ng_container_16_nz_card_1_ng_container_36_Template(rf, ctx) {
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
    const g_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r5.cnt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r5.pct);
  }
}
function AffirmTarget1AbilityComponent_ng_container_16_nz_card_1_th_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const gn_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(gn_r6);
  }
}
function AffirmTarget1AbilityComponent_ng_container_16_nz_card_1_ng_container_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "evs.viewAffirmTarget1Ability.col.maxScore", "\u0110i\u1EC3m l\u1EDBn nh\u1EA5t"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 5, "evs.viewAffirmTarget1Ability.col.minScore", "\u0110i\u1EC3m nh\u1ECF nh\u1EA5t"));
  }
}
function AffirmTarget1AbilityComponent_ng_container_16_nz_card_1_ng_container_50_Template(rf, ctx) {
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
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r7.max);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r7.min);
  }
}
function AffirmTarget1AbilityComponent_ng_container_16_nz_card_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-card", 2)(1, "div", 33);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 34)(5, "table", 35)(6, "thead", 36)(7, "tr");
    \u0275\u0275element(8, "th", 37);
    \u0275\u0275elementStart(9, "th", 38);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 38);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, AffirmTarget1AbilityComponent_ng_container_16_nz_card_1_th_15_Template, 2, 1, "th", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "tr");
    \u0275\u0275template(17, AffirmTarget1AbilityComponent_ng_container_16_nz_card_1_ng_container_17_Template, 7, 8, "ng-container", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "tbody")(19, "tr")(20, "td", 40);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td");
    \u0275\u0275text(26, "-");
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, AffirmTarget1AbilityComponent_ng_container_16_nz_card_1_ng_container_27_Template, 5, 2, "ng-container", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "tr")(29, "td", 40);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "td");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "td");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, AffirmTarget1AbilityComponent_ng_container_16_nz_card_1_ng_container_36_Template, 5, 2, "ng-container", 32);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "div", 41)(38, "table", 35)(39, "thead", 36)(40, "tr")(41, "th", 37);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(44, AffirmTarget1AbilityComponent_ng_container_16_nz_card_1_th_44_Template, 2, 1, "th", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "tr");
    \u0275\u0275template(46, AffirmTarget1AbilityComponent_ng_container_16_nz_card_1_ng_container_46_Template, 7, 8, "ng-container", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "tbody")(48, "tr");
    \u0275\u0275element(49, "td");
    \u0275\u0275template(50, AffirmTarget1AbilityComponent_ng_container_16_nz_card_1_ng_container_50_Template, 5, 2, "ng-container", 32);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 16, "evs.viewAffirmTarget1Ability.gradeDistribution", "Ph\xE2n b\u1ED5 c\u1EA5p \u0111\xE1nh gi\xE1"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 19, "evs.viewAffirmTarget1Ability.col.total", "T\u1ED5ng"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 22, "evs.viewAffirmTarget1Ability.col.notEntered", "Ch\u01B0a nh\u1EADp"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r7.gradeNames);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r7.gradeNames);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 25, "evs.viewAffirmTarget1Ability.stdRate", "T\u1EF7 l\u1EC7 ti\xEAu chu\u1EA9n"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r7.stdTotal());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r7.stdRows());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 28, "evs.viewAffirmTarget1Ability.currentEmp", "Nh\xE2n vi\xEAn hi\u1EC7n t\u1EA1i"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r7.recordsTotal());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r7.curNotEntered());
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r7.curRows());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 31, "evs.viewAffirmTarget1Ability.gradeLevel", "C\u1EA5p \u0111\xE1nh gi\xE1"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r7.gradeNames);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r7.gradeNames);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r7.gradeRangeRows());
  }
}
function AffirmTarget1AbilityComponent_ng_container_16_tr_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 43);
    \u0275\u0275text(2, "0");
    \u0275\u0275elementEnd()();
  }
}
function AffirmTarget1AbilityComponent_ng_container_16_tr_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 44);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "a", 45);
    \u0275\u0275listener("click", function AffirmTarget1AbilityComponent_ng_container_16_tr_68_Template_a_click_4_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r7 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r7.openDetail(row_r10.seq));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 44);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 44);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 44);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 44);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 44);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 44);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 44);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 46);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r7 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r7.pageIndex - 1) * ctx_r7.pageSize + i_r11 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r10.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.empid);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r10.deptname || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r10.deptname);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r10.postGradeName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r10.postGradeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.objectTypeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.dateStarted);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.evsPoint0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.evsGrade0Name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.evsPoint1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.evsGrade1Name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.activityName);
  }
}
function AffirmTarget1AbilityComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AffirmTarget1AbilityComponent_ng_container_16_nz_card_1_Template, 51, 34, "nz-card", 15);
    \u0275\u0275elementStart(2, "nz-card")(3, "div", 16)(4, "div", 17);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "strong");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 18);
    \u0275\u0275text(10, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 19)(16, "label", 20);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 21);
    \u0275\u0275listener("ngModelChange", function AffirmTarget1AbilityComponent_ng_container_16_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.onQuickFilterChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "nz-table", 22);
    \u0275\u0275listener("nzPageIndexChange", function AffirmTarget1AbilityComponent_ng_container_16_Template_nz_table_nzPageIndexChange_20_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.onPageIndexChange($event));
    })("nzPageSizeChange", function AffirmTarget1AbilityComponent_ng_container_16_Template_nz_table_nzPageSizeChange_20_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r7 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r7.onPageSizeChange($event));
    });
    \u0275\u0275elementStart(21, "thead")(22, "tr")(23, "th", 23);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 24);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th", 25);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th", 26);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th", 27);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th", 28);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th", 25);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "th", 29);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "th", 29);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "th", 30);
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "tr")(54, "th", 31);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "th", 31);
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "th", 31);
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "th", 31);
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(66, "tbody");
    \u0275\u0275template(67, AffirmTarget1AbilityComponent_ng_container_16_tr_67_Template, 3, 0, "tr", 10)(68, AffirmTarget1AbilityComponent_ng_container_16_tr_68_Template, 26, 14, "tr", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r7.distributionVisible());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 41, "evs.viewAffirmTarget1Ability.currentEmp", "Nh\xE2n vi\xEAn hi\u1EC7n t\u1EA1i"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r7.filteredRows().length);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 44, "evs.viewAffirmTarget1Ability.totalEmp", "Nh\xE2n vi\xEAn \u0111\xE1nh gi\xE1 \u0111\u1ED1i t\u01B0\u1EE3ng"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r7.recordsTotal());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 47, "evs.viewAffirmTarget1Ability.quickFilter", "L\u1ECDc nhanh"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r7.filterText());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzData", ctx_r7.filteredRows())("nzFrontPagination", false)("nzLoading", ctx_r7.loading())("nzTotal", ctx_r7.recordsTotal())("nzPageIndex", ctx_r7.pageIndex)("nzPageSize", ctx_r7.pageSize)("nzPageSizeOptions", ctx_r7.pageSizeOptions)("nzScroll", \u0275\u0275pureFunction0(92, _c1));
    \u0275\u0275advance(3);
    \u0275\u0275property("rowSpan", 2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 50, "evs.viewAffirmTarget1Ability.col.no", "No"));
    \u0275\u0275advance(2);
    \u0275\u0275property("rowSpan", 2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 53, "evs.viewAffirmTarget1Ability.col.fullName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275property("rowSpan", 2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 56, "evs.viewAffirmTarget1Ability.col.empid", "M\xE3 NV"));
    \u0275\u0275advance(2);
    \u0275\u0275property("rowSpan", 2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 59, "evs.viewAffirmTarget1Ability.col.dept", "Ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275property("rowSpan", 2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 62, "evs.viewAffirmTarget1Ability.col.position", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(2);
    \u0275\u0275property("rowSpan", 2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 65, "evs.viewAffirmTarget1Ability.col.objectType", "\u0110\u1ED1i t\u01B0\u1EE3ng"));
    \u0275\u0275advance(2);
    \u0275\u0275property("rowSpan", 2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 68, "evs.viewAffirmTarget1Ability.col.hireDate", "Ng\xE0y v\xE0o l\xE0m"));
    \u0275\u0275advance(2);
    \u0275\u0275property("colSpan", 2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 71, "evs.viewAffirmTarget1Ability.col.self", "B\u1EA3n th\xE2n"));
    \u0275\u0275advance(2);
    \u0275\u0275property("colSpan", 2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 74, "evs.viewAffirmTarget1Ability.col.affirm1", "L\u1EA7n 1"));
    \u0275\u0275advance(2);
    \u0275\u0275property("rowSpan", 2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(52, 77, "evs.viewAffirmTarget1Ability.col.status", "Tr\u1EA1ng th\xE1i"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(56, 80, "evs.viewAffirmTarget1Ability.col.score", "\u0110i\u1EC3m s\u1ED1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(59, 83, "evs.viewAffirmTarget1Ability.col.grade", "C\u1EA5p \u0110G"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(62, 86, "evs.viewAffirmTarget1Ability.col.score", "\u0110i\u1EC3m s\u1ED1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(65, 89, "evs.viewAffirmTarget1Ability.col.grade", "C\u1EA5p \u0110G"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r7.loading() && ctx_r7.filteredRows().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r7.filteredRows());
  }
}
function AffirmTarget1AbilityComponent_ng_container_19_ng_container_1_tr_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 75);
    \u0275\u0275text(2, "-");
    \u0275\u0275elementEnd()();
  }
}
function AffirmTarget1AbilityComponent_ng_container_19_ng_container_1_tr_62_nz_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 13);
  }
  if (rf & 2) {
    const opt_r15 = ctx.$implicit;
    \u0275\u0275property("nzValue", opt_r15.evsScore)("nzLabel", opt_r15.codeName || opt_r15.evsScore);
  }
}
function AffirmTarget1AbilityComponent_ng_container_19_ng_container_1_tr_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 44);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 76);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 44);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 44);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 44)(14, "nz-select", 77);
    \u0275\u0275twoWayListener("ngModelChange", function AffirmTarget1AbilityComponent_ng_container_19_ng_container_1_tr_62_Template_nz_select_ngModelChange_14_listener($event) {
      const item_r14 = \u0275\u0275restoreView(_r13).$implicit;
      \u0275\u0275twoWayBindingSet(item_r14.evsScore1, $event) || (item_r14.evsScore1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AffirmTarget1AbilityComponent_ng_container_19_ng_container_1_tr_62_Template_nz_select_ngModelChange_14_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r7 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r7.updateDetailTotals());
    });
    \u0275\u0275template(15, AffirmTarget1AbilityComponent_ng_container_19_ng_container_1_tr_62_nz_option_15_Template, 1, 2, "nz-option", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const i_r16 = ctx.index;
    const ctx_r7 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r16 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r14.groupName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r14.itemName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r14.remark);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r14.itemScore);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r14.evsScore0);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", item_r14.evsScore1);
    \u0275\u0275property("nzDisabled", !ctx_r7.canInputDetail);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r7.scoreOptions());
  }
}
function AffirmTarget1AbilityComponent_ng_container_19_ng_container_1_button_116_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 74);
    \u0275\u0275listener("click", function AffirmTarget1AbilityComponent_ng_container_19_ng_container_1_button_116_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r7 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r7.saveDetail("draft"));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "evs.viewAffirmTarget1Ability.btnSaveDraft", "L\u01B0u t\u1EA1m th\u1EDDi"), " ");
  }
}
function AffirmTarget1AbilityComponent_ng_container_19_ng_container_1_button_117_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 78);
    \u0275\u0275listener("click", function AffirmTarget1AbilityComponent_ng_container_19_ng_container_1_button_117_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r7 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r7.saveDetail("confirm"));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "evs.viewAffirmTarget1Ability.modal.btnConfirm", "X\xE1c nh\u1EADn"), " ");
  }
}
function AffirmTarget1AbilityComponent_ng_container_19_ng_container_1_button_118_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 79);
    \u0275\u0275listener("click", function AffirmTarget1AbilityComponent_ng_container_19_ng_container_1_button_118_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r7 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r7.rejectDetail());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "evs.viewAffirmTarget1Ability.modal.btnReject", "T\u1EEB ch\u1ED1i"), " ");
  }
}
function AffirmTarget1AbilityComponent_ng_container_19_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 47)(2, "div", 48)(3, "nz-descriptions", 49);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "nz-descriptions-item", 50);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "nz-descriptions-item", 50);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "nz-descriptions-item", 50);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "nz-descriptions-item", 50);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 48)(18, "nz-descriptions", 49);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementStart(20, "nz-descriptions-item", 50);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "nz-descriptions-item", 50);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "nz-descriptions-item", 50);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "nz-descriptions-item", 50);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(32, "div", 51);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 34)(36, "nz-table", 52)(37, "thead")(38, "tr")(39, "th", 53);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "th", 54);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th", 55);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th");
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "th", 56);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "th", 57);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "th", 58);
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "tbody");
    \u0275\u0275template(61, AffirmTarget1AbilityComponent_ng_container_19_ng_container_1_tr_61_Template, 3, 0, "tr", 10)(62, AffirmTarget1AbilityComponent_ng_container_19_ng_container_1_tr_62_Template, 16, 9, "tr", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "tfoot")(64, "tr", 59)(65, "td", 60);
    \u0275\u0275text(66, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "td", 44);
    \u0275\u0275text(68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "td", 44);
    \u0275\u0275text(70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "td", 44);
    \u0275\u0275text(72);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(73, "div", 34)(74, "table", 61)(75, "thead", 62)(76, "tr")(77, "th");
    \u0275\u0275text(78);
    \u0275\u0275pipe(79, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "th", 63);
    \u0275\u0275text(81);
    \u0275\u0275pipe(82, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "th", 64);
    \u0275\u0275text(84);
    \u0275\u0275pipe(85, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(86, "tbody")(87, "tr")(88, "td");
    \u0275\u0275element(89, "div", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "td", 66);
    \u0275\u0275text(91);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "td", 66);
    \u0275\u0275text(93);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(94, "div", 67)(95, "table", 61)(96, "thead", 62)(97, "tr")(98, "th");
    \u0275\u0275text(99);
    \u0275\u0275pipe(100, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "th", 63);
    \u0275\u0275text(102);
    \u0275\u0275pipe(103, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "th", 68);
    \u0275\u0275text(105);
    \u0275\u0275pipe(106, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(107, "tbody")(108, "tr")(109, "td")(110, "textarea", 69);
    \u0275\u0275twoWayListener("ngModelChange", function AffirmTarget1AbilityComponent_ng_container_19_ng_container_1_Template_textarea_ngModelChange_110_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r7 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r7.affirmContent, $event) || (ctx_r7.affirmContent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "td", 66);
    \u0275\u0275text(112);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "td", 66);
    \u0275\u0275text(114);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(115, "div", 70);
    \u0275\u0275template(116, AffirmTarget1AbilityComponent_ng_container_19_ng_container_1_button_116_Template, 3, 4, "button", 71)(117, AffirmTarget1AbilityComponent_ng_container_19_ng_container_1_button_117_Template, 3, 4, "button", 72)(118, AffirmTarget1AbilityComponent_ng_container_19_ng_container_1_button_118_Template, 3, 4, "button", 73);
    \u0275\u0275elementStart(119, "button", 74);
    \u0275\u0275listener("click", function AffirmTarget1AbilityComponent_ng_container_19_ng_container_1_Template_button_click_119_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r7 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r7.closeModal());
    });
    \u0275\u0275text(120);
    \u0275\u0275pipe(121, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const info_r20 = ctx.ngIf;
    const ctx_r7 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("nzColumn", 1)("nzTitle", \u0275\u0275pipeBind2(4, 55, "evs.viewAffirmTarget1Ability.modal.basicInfo", "Th\xF4ng tin c\u01A1 b\u1EA3n"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(6, 58, "evs.viewAffirmTarget1Ability.modal.fullName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r20.localName);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(9, 61, "evs.viewAffirmTarget1Ability.modal.position", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r20.postGradeName);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(12, 64, "evs.viewAffirmTarget1Ability.modal.dept", "Ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r20.deptname);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(15, 67, "evs.viewAffirmTarget1Ability.modal.hireDate", "Ng\xE0y v\xE0o l\xE0m"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r20.dateStarted);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColumn", 1)("nzTitle", \u0275\u0275pipeBind2(19, 70, "evs.viewAffirmTarget1Ability.modal.evalCategory", "H\u1EA1ng m\u1EE5c \u0111\xE1nh gi\xE1"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(21, 73, "evs.viewAffirmTarget1Ability.modal.evalYear", "N\u0103m \u0111\xE1nh gi\xE1"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r20.evsYear);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(24, 76, "evs.viewAffirmTarget1Ability.modal.period", "Th\u1EDDi gian"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", info_r20.evsStartDate, "", info_r20.evsStartDate && info_r20.evsEndDate ? "~" : "", "", info_r20.evsEndDate);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(27, 79, "evs.viewAffirmTarget1Ability.modal.appraiser1", "Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 l\u1EA7n 1"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r20.localName1);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(30, 82, "evs.viewAffirmTarget1Ability.modal.appraiser2", "Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 l\u1EA7n 2"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r20.localName2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 85, "evs.viewAffirmTarget1Ability.modal.abilityTitle", "\u0110\xE1nh gi\xE1 n\u0103ng l\u1EF1c"));
    \u0275\u0275advance(3);
    \u0275\u0275property("nzData", ctx_r7.detailItems())("nzShowPagination", false)("nzLoading", ctx_r7.detailLoading());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 88, "evs.viewAffirmTarget1Ability.modal.col.no", "No"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 91, "evs.viewAffirmTarget1Ability.modal.col.distinction", "Ph\xE2n bi\u1EC7t"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(47, 94, "evs.viewAffirmTarget1Ability.modal.col.evalItem", "H\u1EA1ng m\u1EE5c \u0111\xE1nh gi\xE1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 97, "evs.viewAffirmTarget1Ability.modal.col.criterion", "Ch\u1EC9 ti\xEAu \u0111\xE1nh gi\xE1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(53, 100, "evs.viewAffirmTarget1Ability.modal.col.itemScore", "\u0110i\u1EC3m ch\u1EC9 ti\xEAu"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(56, 103, "evs.viewAffirmTarget1Ability.modal.col.selfScore", "T\u1EF1 \u0111\xE1nh gi\xE1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(59, 106, "evs.viewAffirmTarget1Ability.modal.col.affirm1Score", "\u0110\xE1nh gi\xE1 l\u1EA7n 1"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r7.detailLoading() && ctx_r7.detailItems().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r7.detailItems());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r7.totalItemScore());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r7.selfTotal() !== null ? ctx_r7.selfTotal() : "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r7.affirm1Total() !== null ? ctx_r7.affirm1Total() : "-");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(79, 109, "evs.viewAffirmTarget1Ability.modal.selfOpinion", "\xDD ki\u1EBFn c\xE1 nh\xE2n"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(82, 112, "evs.viewAffirmTarget1Ability.modal.col.totalScore", "\u0110i\u1EC3m s\u1ED1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(85, 115, "evs.viewAffirmTarget1Ability.col.grade", "C\u1EA5p"));
    \u0275\u0275advance(5);
    \u0275\u0275property("innerHTML", info_r20.affirmContent0, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r20.evsPoint0 || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r7.selfGradeName());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(100, 118, "evs.viewAffirmTarget1Ability.modal.affirm1Opinion", "\xDD ki\u1EBFn \u0111\xE1nh gi\xE1 l\u1EA7n 1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(103, 121, "evs.viewAffirmTarget1Ability.modal.col.totalScore", "\u0110i\u1EC3m s\u1ED1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(106, 124, "evs.viewAffirmTarget1Ability.col.grade", "C\u1EA5p"));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r7.affirmContent);
    \u0275\u0275property("readonly", !ctx_r7.canInputDetail);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r7.affirm1ScoreDisplay());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r7.affirm1GradeName());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r7.canInputDetail);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r7.canInputDetail);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r7.canInputDetail);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(121, 127, "evs.viewAffirmTarget1Ability.btnClose", "\u0110\xF3ng"), " ");
  }
}
function AffirmTarget1AbilityComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AffirmTarget1AbilityComponent_ng_container_19_ng_container_1_Template, 122, 130, "ng-container", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r7.detailInfo());
  }
}
var I18N_KEYS = [
  "evs.viewAffirmTarget1Ability.evalName",
  "evs.viewAffirmTarget1Ability.btnSearch",
  "evs.viewAffirmTarget1Ability.btnSaveDraft",
  "evs.viewAffirmTarget1Ability.gradeDistribution",
  "evs.viewAffirmTarget1Ability.stdRate",
  "evs.viewAffirmTarget1Ability.currentEmp",
  "evs.viewAffirmTarget1Ability.totalEmp",
  "evs.viewAffirmTarget1Ability.gradeLevel",
  "evs.viewAffirmTarget1Ability.quickFilter",
  "evs.viewAffirmTarget1Ability.col.total",
  "evs.viewAffirmTarget1Ability.col.notEntered",
  "evs.viewAffirmTarget1Ability.col.numPeople",
  "evs.viewAffirmTarget1Ability.col.rate",
  "evs.viewAffirmTarget1Ability.col.maxScore",
  "evs.viewAffirmTarget1Ability.col.minScore",
  "evs.viewAffirmTarget1Ability.col.no",
  "evs.viewAffirmTarget1Ability.col.fullName",
  "evs.viewAffirmTarget1Ability.col.empid",
  "evs.viewAffirmTarget1Ability.col.dept",
  "evs.viewAffirmTarget1Ability.col.position",
  "evs.viewAffirmTarget1Ability.col.objectType",
  "evs.viewAffirmTarget1Ability.col.hireDate",
  "evs.viewAffirmTarget1Ability.col.self",
  "evs.viewAffirmTarget1Ability.col.affirm1",
  "evs.viewAffirmTarget1Ability.col.score",
  "evs.viewAffirmTarget1Ability.col.grade",
  "evs.viewAffirmTarget1Ability.col.status",
  "evs.viewAffirmTarget1Ability.btnClose",
  "evs.viewAffirmTarget1Ability.modal.personalInfo",
  "evs.viewAffirmTarget1Ability.modal.basicInfo",
  "evs.viewAffirmTarget1Ability.modal.evalCategory",
  "evs.viewAffirmTarget1Ability.modal.fullName",
  "evs.viewAffirmTarget1Ability.modal.position",
  "evs.viewAffirmTarget1Ability.modal.dept",
  "evs.viewAffirmTarget1Ability.modal.hireDate",
  "evs.viewAffirmTarget1Ability.modal.evalYear",
  "evs.viewAffirmTarget1Ability.modal.period",
  "evs.viewAffirmTarget1Ability.modal.appraiser1",
  "evs.viewAffirmTarget1Ability.modal.appraiser2",
  "evs.viewAffirmTarget1Ability.modal.abilityTitle",
  "evs.viewAffirmTarget1Ability.modal.col.no",
  "evs.viewAffirmTarget1Ability.modal.col.distinction",
  "evs.viewAffirmTarget1Ability.modal.col.evalItem",
  "evs.viewAffirmTarget1Ability.modal.col.criterion",
  "evs.viewAffirmTarget1Ability.modal.col.itemScore",
  "evs.viewAffirmTarget1Ability.modal.col.selfScore",
  "evs.viewAffirmTarget1Ability.modal.col.affirm1Score",
  "evs.viewAffirmTarget1Ability.modal.col.totalScore",
  "evs.viewAffirmTarget1Ability.modal.selfOpinion",
  "evs.viewAffirmTarget1Ability.modal.affirm1Opinion",
  "evs.viewAffirmTarget1Ability.modal.btnConfirm",
  "evs.viewAffirmTarget1Ability.modal.btnReject",
  "evs.viewAffirmTarget1Ability.msg.selectEvalFirst",
  "evs.viewAffirmTarget1Ability.msg.confirmSave",
  "evs.viewAffirmTarget1Ability.msg.saveSuccess",
  "evs.viewAffirmTarget1Ability.msg.actionFail",
  "evs.viewAffirmTarget1Ability.msg.confirmConfirm",
  "evs.viewAffirmTarget1Ability.msg.confirmSuccess",
  "evs.viewAffirmTarget1Ability.msg.confirmReject",
  "evs.viewAffirmTarget1Ability.msg.rejectSuccess",
  "evs.viewConfirmTarget1.msg.notInEvalPeriod",
  "common.confirm",
  "common.cancel",
  "common.select",
  "common.loadFail"
];
var EVS_LEVEL_AFFIRM1 = "14015070";
var EDITABLE_ACTIVITY = "14015357";
var GRADE_NAMES = ["EX", "VG", "GD", "NI", "UN"];
var PAGE_SIZE_OPTIONS = [50, 100, 200];
var AffirmTarget1AbilityComponent = class _AffirmTarget1AbilityComponent {
  constructor(api, i18n, message, modal, route) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
    this.modal = modal;
    this.route = route;
  }
  api;
  i18n;
  message;
  modal;
  route;
  pageSizeOptions = PAGE_SIZE_OPTIONS;
  gradeNames = GRADE_NAMES;
  resumeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "resumeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  noticeVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "noticeVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  gradeList = signal(
    [],
    ...ngDevMode ? [{ debugName: "gradeList" }] : (
      /* istanbul ignore next */
      []
    )
  );
  distributionVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "distributionVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  stdRate = signal(
    {},
    ...ngDevMode ? [{ debugName: "stdRate" }] : (
      /* istanbul ignore next */
      []
    )
  );
  gradeSummary = signal(
    [],
    ...ngDevMode ? [{ debugName: "gradeSummary" }] : (
      /* istanbul ignore next */
      []
    )
  );
  scoreOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "scoreOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pageRows = signal(
    [],
    ...ngDevMode ? [{ debugName: "pageRows" }] : (
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
  recordsTotal = signal(
    0,
    ...ngDevMode ? [{ debugName: "recordsTotal" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pageIndex = 1;
  pageSize = 50;
  filterText = signal(
    "",
    ...ngDevMode ? [{ debugName: "filterText" }] : (
      /* istanbul ignore next */
      []
    )
  );
  filteredRows = computed(
    () => {
      const kw = this.filterText().trim().toLowerCase();
      return kw ? this.pageRows().filter((r) => r.searchText.includes(kw)) : this.pageRows();
    },
    ...ngDevMode ? [{ debugName: "filteredRows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  stdTotal = computed(
    () => this.recordsTotal(),
    ...ngDevMode ? [{ debugName: "stdTotal" }] : (
      /* istanbul ignore next */
      []
    )
  );
  stdRows = computed(
    () => {
      const std = this.stdRate();
      const total = this.recordsTotal();
      return GRADE_NAMES.map((gn) => {
        const pct = Number(std[`${gn}_PCT`]) || 0;
        const cnt = total > 0 ? Math.round(total * pct / 100) : 0;
        return { name: gn, cnt, pct };
      });
    },
    ...ngDevMode ? [{ debugName: "stdRows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  curNotEntered = signal(
    0,
    ...ngDevMode ? [{ debugName: "curNotEntered" }] : (
      /* istanbul ignore next */
      []
    )
  );
  curRows = computed(
    () => {
      const summary = this.gradeSummary();
      const total = this.recordsTotal();
      const summaryMap = /* @__PURE__ */ new Map();
      summary.forEach((s) => {
        const gn = String(s["EVS_GRADE_NAME"] ?? s["evs_grade_name"] ?? "");
        const cnt = Number(s["CNT"] ?? s["cnt"] ?? 0) || 0;
        summaryMap.set(gn, cnt);
      });
      return GRADE_NAMES.map((gn) => {
        const cnt = summaryMap.get(gn) ?? 0;
        const pct = total > 0 ? Math.round(cnt / total * 1e3) / 10 : 0;
        return { name: gn, cnt, pct };
      });
    },
    ...ngDevMode ? [{ debugName: "curRows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  gradeRangeRows = computed(
    () => {
      const map = new Map(this.gradeList().map((g) => [g.evsGradeName, g]));
      return GRADE_NAMES.map((gn) => ({ name: gn, max: map.get(gn)?.endScore || "-", min: map.get(gn)?.startScore || "-" }));
    },
    ...ngDevMode ? [{ debugName: "gradeRangeRows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  resumeSeq = null;
  evsType = "";
  gradeMapByCode = /* @__PURE__ */ new Map();
  // ==================== Modal chi tiết ====================
  modalVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "modalVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  detailLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "detailLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  detailInfo = signal(
    null,
    ...ngDevMode ? [{ debugName: "detailInfo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  detailItems = signal(
    [],
    ...ngDevMode ? [{ debugName: "detailItems" }] : (
      /* istanbul ignore next */
      []
    )
  );
  totalItemScore = signal(
    0,
    ...ngDevMode ? [{ debugName: "totalItemScore" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selfTotal = signal(
    null,
    ...ngDevMode ? [{ debugName: "selfTotal" }] : (
      /* istanbul ignore next */
      []
    )
  );
  affirm1Total = signal(
    null,
    ...ngDevMode ? [{ debugName: "affirm1Total" }] : (
      /* istanbul ignore next */
      []
    )
  );
  affirm1ScoreDisplay = signal(
    "-",
    ...ngDevMode ? [{ debugName: "affirm1ScoreDisplay" }] : (
      /* istanbul ignore next */
      []
    )
  );
  affirm1GradeCode = signal(
    "",
    ...ngDevMode ? [{ debugName: "affirm1GradeCode" }] : (
      /* istanbul ignore next */
      []
    )
  );
  affirm1GradeName = signal(
    "-",
    ...ngDevMode ? [{ debugName: "affirm1GradeName" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selfGradeName = signal(
    "-",
    ...ngDevMode ? [{ debugName: "selfGradeName" }] : (
      /* istanbul ignore next */
      []
    )
  );
  affirmContent = "";
  currentDetailSeq = null;
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.route.queryParamMap.subscribe((params) => {
      this.evsType = params.get("evsType") ?? "";
      this.loadResumeList();
    });
  }
  onQuickFilterChange(value) {
    this.filterText.set(value);
  }
  loadResumeList() {
    this.api.getResumeList(this.evsType, EVS_LEVEL_AFFIRM1).subscribe({
      next: (rows) => {
        if (!rows || rows.length === 0) {
          this.noticeVisible.set(true);
          this.resumeOptions.set([]);
          return;
        }
        this.noticeVisible.set(false);
        this.resumeOptions.set(rows);
        this.resumeSeq = rows[0].seq;
        this.search();
      },
      error: () => this.message.error(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"))
    });
  }
  search() {
    if (!this.resumeSeq) {
      this.message.warning(this.i18n.t("evs.viewAffirmTarget1Ability.msg.selectEvalFirst", "Vui l\xF2ng ch\u1ECDn t\xEAn \u0111\xE1nh gi\xE1 tr\u01B0\u1EDBc."));
      return;
    }
    this.pageIndex = 1;
    this.filterText.set("");
    this.api.getScoreOptions(this.resumeSeq).subscribe((rows) => this.scoreOptions.set(rows ?? []));
    this.loadGradeList();
  }
  loadGradeList() {
    if (!this.resumeSeq)
      return;
    this.api.getGradeList(this.resumeSeq, this.evsType).subscribe({
      next: (grades) => {
        this.gradeList.set(grades ?? []);
        this.gradeMapByCode = new Map((grades ?? []).map((g) => [g.evsGrade, g]));
        this.distributionVisible.set(true);
        this.loadPage();
      },
      error: () => this.loadPage()
    });
  }
  onPageIndexChange(pageIndex) {
    this.pageIndex = pageIndex;
    this.loadPage();
  }
  onPageSizeChange(pageSize) {
    this.pageSize = pageSize;
    this.pageIndex = 1;
    this.loadPage();
  }
  loadPage() {
    if (!this.resumeSeq)
      return;
    this.loading.set(true);
    this.api.getObjectList({
      resumeSeq: this.resumeSeq,
      evsType: this.evsType,
      draw: this.pageIndex,
      start: (this.pageIndex - 1) * this.pageSize,
      length: this.pageSize
    }).subscribe({
      next: (res) => {
        this.recordsTotal.set(res.recordsTotal ?? 0);
        this.pageRows.set((res.data ?? []).map((r) => this.toRowVm(r)));
        this.loading.set(false);
        this.loadStandardRate();
        this.loadGradeSummary();
      },
      error: () => {
        this.pageRows.set([]);
        this.recordsTotal.set(0);
        this.loading.set(false);
      }
    });
  }
  loadStandardRate() {
    if (!this.resumeSeq)
      return;
    this.api.getStandardRate(this.resumeSeq).subscribe((raw) => this.stdRate.set(raw ?? {}));
  }
  loadGradeSummary() {
    if (!this.resumeSeq)
      return;
    this.api.getGradeSummary(this.resumeSeq).subscribe((rows) => this.gradeSummary.set(rows ?? []));
  }
  toRowVm(r) {
    const selfGradeObj = r.evsGrade0 ? this.gradeMapByCode.get(r.evsGrade0) : null;
    const affirm1GradeObj = r.evsGrade1 ? this.gradeMapByCode.get(r.evsGrade1) : null;
    const evsGrade0Name = selfGradeObj?.evsGradeName ?? r.evsGrade0 ?? "";
    const evsGrade1Name = affirm1GradeObj?.evsGradeName ?? r.evsGrade1 ?? "";
    const searchText = [
      r.localName,
      r.empid,
      r.deptname,
      r.postGradeName,
      r.objectTypeName,
      r.dateStarted,
      r.evsPoint0,
      evsGrade0Name,
      r.evsPoint1,
      evsGrade1Name,
      r.activityName
    ].filter(Boolean).join(" ").toLowerCase();
    return {
      seq: r.seq,
      localName: r.localName,
      empid: r.empid,
      deptname: r.deptname,
      postGradeName: r.postGradeName,
      objectTypeName: r.objectTypeName,
      dateStarted: r.dateStarted,
      activity: r.activity,
      activityName: r.activityName,
      evsPoint0: r.evsPoint0 ?? "",
      evsGrade0Name,
      evsPoint1: r.evsPoint1 ?? "",
      evsGrade1Name,
      searchText
    };
  }
  calcGradeFromScore(score) {
    if (score === "" || score == null)
      return null;
    const s = typeof score === "number" ? score : parseFloat(score);
    if (isNaN(s))
      return null;
    let found = null;
    for (const g of this.gradeList()) {
      const max = parseFloat(g.endScore);
      const min = parseFloat(g.startScore);
      if (!isNaN(max) && !isNaN(min) && s >= min && s <= max)
        found = g;
    }
    return found;
  }
  get maxScore() {
    return this.scoreOptions().reduce((max, opt) => {
      const v = parseFloat(opt.evsScore);
      return !isNaN(v) && v > max ? v : max;
    }, 0);
  }
  // ==================== Modal chi tiết ====================
  openDetail(objectSeq) {
    this.currentDetailSeq = objectSeq;
    this.detailInfo.set(null);
    this.detailItems.set([]);
    this.totalItemScore.set(0);
    this.selfTotal.set(null);
    this.affirm1Total.set(null);
    this.affirm1ScoreDisplay.set("-");
    this.affirm1GradeCode.set("");
    this.affirm1GradeName.set("-");
    this.selfGradeName.set("-");
    this.affirmContent = "";
    this.detailLoading.set(true);
    this.modalVisible.set(true);
    this.api.getObjectInfo(objectSeq).subscribe({
      next: (info) => {
        this.detailInfo.set(info);
        const selfGradeObj = info.evsGrade0 ? this.gradeMapByCode.get(info.evsGrade0) : null;
        this.selfGradeName.set(selfGradeObj?.evsGradeName ?? info.evsGrade0 ?? "-");
        this.affirm1ScoreDisplay.set(info.evsPoint1 ?? "-");
        const affirm1GradeObj = info.evsGrade1 ? this.gradeMapByCode.get(info.evsGrade1) : null;
        this.affirm1GradeName.set(affirm1GradeObj?.evsGradeName ?? info.evsGrade1 ?? "-");
        this.affirm1GradeCode.set(info.evsGrade1 ?? "");
        this.affirmContent = info.affirmContent1 || "";
        this.loadDetailItems(objectSeq);
      },
      error: () => {
        this.detailLoading.set(false);
      }
    });
  }
  loadDetailItems(evsObjectSeq) {
    this.api.getItemList(evsObjectSeq).subscribe({
      next: (items) => {
        this.detailItems.set((items ?? []).map((i) => ({
          itemSeq: i.itemSeq,
          groupName: i.groupName,
          itemName: i.itemName,
          remark: i.remark,
          itemScore: Number(i.itemScore) || 0,
          evsScore0: i.evsScore0 ?? "",
          evsScore1: i.evsScore1 ?? ""
        })));
        this.detailLoading.set(false);
        this.updateDetailTotals();
      },
      error: () => {
        this.detailItems.set([]);
        this.detailLoading.set(false);
      }
    });
  }
  get canInputDetail() {
    return this.detailInfo()?.activity === EDITABLE_ACTIVITY;
  }
  updateDetailTotals() {
    const maxScore = this.maxScore;
    let totalItem = 0;
    let selfTotal = 0;
    let affirm1Total = 0;
    let hasAffirm1Input = false;
    for (const item of this.detailItems()) {
      totalItem += item.itemScore;
      const selfVal = parseFloat(item.evsScore0);
      if (!isNaN(selfVal) && maxScore > 0) {
        selfTotal += Math.round(selfVal * item.itemScore / maxScore * 100) / 100;
      }
      if (item.evsScore1 !== "") {
        const score1 = parseFloat(item.evsScore1);
        if (!isNaN(score1) && maxScore > 0) {
          hasAffirm1Input = true;
          affirm1Total += Math.round(score1 * item.itemScore / maxScore * 100) / 100;
        }
      }
    }
    totalItem = Math.round(totalItem * 100) / 100;
    selfTotal = Math.round(selfTotal * 100) / 100;
    affirm1Total = Math.round(affirm1Total * 100) / 100;
    this.totalItemScore.set(totalItem);
    this.selfTotal.set(selfTotal > 0 ? selfTotal : null);
    this.affirm1Total.set(hasAffirm1Input ? affirm1Total : null);
    if (hasAffirm1Input) {
      this.affirm1ScoreDisplay.set(String(affirm1Total));
      if (this.canInputDetail) {
        const gradeObj = this.calcGradeFromScore(affirm1Total);
        if (gradeObj) {
          this.affirm1GradeName.set(gradeObj.evsGradeName);
          this.affirm1GradeCode.set(gradeObj.evsGrade);
        }
      }
    }
  }
  saveDetail(mode) {
    const objectSeq = this.currentDetailSeq;
    if (!objectSeq || !this.resumeSeq)
      return;
    const t = (key, fallback) => this.i18n.t(key, fallback);
    const content = mode === "confirm" ? t("evs.viewAffirmTarget1Ability.msg.confirmConfirm", "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xE1c nh\u1EADn?") : t("evs.viewAffirmTarget1Ability.msg.confirmSave", "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n l\u01B0u t\u1EA1m th\u1EDDi?");
    this.modal.confirm({
      nzTitle: t("common.confirm", "X\xE1c nh\u1EADn"),
      nzContent: content,
      nzOnOk: () => this.doSaveDetail(objectSeq, mode)
    });
  }
  doSaveDetail(objectSeq, mode) {
    const t = (key, fallback) => this.i18n.t(key, fallback);
    const payload = {
      seq: objectSeq,
      resumeSeq: this.resumeSeq,
      affirmContent: this.affirmContent,
      items: this.detailItems().map((i) => ({ itemSeq: i.itemSeq, evsScore1: i.evsScore1 || null }))
    };
    const call = mode === "confirm" ? this.api.confirmDetail(payload) : this.api.saveDetail(payload);
    call.subscribe({
      next: (res) => {
        if (res.success) {
          this.message.success(mode === "confirm" ? t("evs.viewAffirmTarget1Ability.msg.confirmSuccess", "X\xE1c nh\u1EADn th\xE0nh c\xF4ng!") : t("evs.viewAffirmTarget1Ability.msg.saveSuccess", "L\u01B0u t\u1EA1m th\u1EDDi th\xE0nh c\xF4ng!"));
          this.closeModal();
          this.loadPage();
        } else {
          this.message.error(res.message || t("evs.viewAffirmTarget1Ability.msg.actionFail", "L\u1ED7i khi th\u1EF1c hi\u1EC7n."));
        }
      },
      error: () => this.message.error(t("evs.viewAffirmTarget1Ability.msg.actionFail", "L\u1ED7i khi th\u1EF1c hi\u1EC7n."))
    });
  }
  rejectDetail() {
    const objectSeq = this.currentDetailSeq;
    if (!objectSeq)
      return;
    const t = (key, fallback) => this.i18n.t(key, fallback);
    this.modal.confirm({
      nzTitle: t("common.confirm", "X\xE1c nh\u1EADn"),
      nzContent: t("evs.viewAffirmTarget1Ability.msg.confirmReject", "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n t\u1EEB ch\u1ED1i?"),
      nzOnOk: () => {
        this.api.rejectDetail(objectSeq).subscribe({
          next: (res) => {
            if (res.success) {
              this.message.success(t("evs.viewAffirmTarget1Ability.msg.rejectSuccess", "T\u1EEB ch\u1ED1i th\xE0nh c\xF4ng!"));
              this.closeModal();
              this.loadPage();
            } else {
              this.message.error(res.message || t("evs.viewAffirmTarget1Ability.msg.actionFail", "L\u1ED7i khi th\u1EF1c hi\u1EC7n."));
            }
          },
          error: () => this.message.error(t("evs.viewAffirmTarget1Ability.msg.actionFail", "L\u1ED7i khi th\u1EF1c hi\u1EC7n."))
        });
      }
    });
  }
  closeModal() {
    this.modalVisible.set(false);
    this.currentDetailSeq = null;
  }
  static \u0275fac = function AffirmTarget1AbilityComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AffirmTarget1AbilityComponent)(\u0275\u0275directiveInject(AffirmTarget1AbilityService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService), \u0275\u0275directiveInject(NzModalService), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AffirmTarget1AbilityComponent, selectors: [["app-affirm-target1-ability"]], decls: 20, vars: 24, consts: [[1, "row"], [1, "col-12"], [1, "mb-3"], [1, "d-flex", "align-items-end", "gap-2", 3, "ngSubmit"], [1, "form-label"], ["name", "resumeSeq", 2, "width", "280px", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nzType", "warning", "nzShowIcon", "", 3, "nzMessage", 4, "ngIf"], [4, "ngIf"], ["nzWidth", "90vw", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzBodyStyle", "nzFooter"], [4, "nzModalContent"], [3, "nzValue", "nzLabel"], ["nzType", "warning", "nzShowIcon", "", 3, "nzMessage"], ["class", "mb-3", 4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2", "flex-wrap", "gap-2"], [1, "small", "text-muted"], [1, "mx-1"], [1, "d-flex", "align-items-center", "gap-1"], [1, "small", "text-muted", "mb-0", "text-nowrap"], ["nz-input", "", 2, "width", "180px", 3, "ngModelChange", "ngModel"], ["nzShowSizeChanger", "", "nzSize", "small", 1, "table-nowrap", 3, "nzPageIndexChange", "nzPageSizeChange", "nzData", "nzFrontPagination", "nzLoading", "nzTotal", "nzPageIndex", "nzPageSize", "nzPageSizeOptions", "nzScroll"], ["nzWidth", "44px", 1, "text-center", 3, "rowSpan"], ["nzWidth", "150px", 3, "rowSpan"], ["nzWidth", "100px", 1, "text-center", 3, "rowSpan"], ["nzWidth", "120px", 3, "rowSpan"], ["nzWidth", "110px", 3, "rowSpan"], ["nzWidth", "200px", 1, "text-center", 3, "rowSpan"], [1, "text-center", 3, "colSpan"], ["nzWidth", "130px", 1, "text-center", 3, "rowSpan"], ["nzWidth", "50px", 1, "text-center"], [4, "ngFor", "ngForOf"], [1, "fw-semibold", "small", "mb-2"], [1, "table-responsive", "mb-2"], [1, "table", "table-bordered", "table-sm", "text-center", "mb-0"], [1, "table-light"], ["rowspan", "2", 2, "vertical-align", "middle", "width", "130px"], ["rowspan", "2", 2, "vertical-align", "middle"], ["colspan", "2", 4, "ngFor", "ngForOf"], [1, "text-start", "small", "text-muted"], [1, "table-responsive"], ["colspan", "2"], ["colspan", "11", 1, "text-center", "text-muted"], [1, "text-center"], ["href", "javascript:void(0)", 3, "click"], [1, "text-center", "small"], [1, "row", "g-3", "mb-2"], [1, "col-md-6"], ["nzBordered", "", "nzSize", "small", 3, "nzColumn", "nzTitle"], [3, "nzTitle"], [1, "fw-semibold", "small", "mb-1", "border-bottom", "pb-1"], ["nzSize", "small", 3, "nzData", "nzShowPagination", "nzLoading"], [1, "text-center", 2, "width", "44px"], [2, "width", "160px"], [2, "width", "200px"], [1, "text-center", 2, "width", "90px"], [1, "text-center", 2, "width", "130px"], [1, "text-center", 2, "width", "150px"], [1, "table-light", "fw-semibold"], ["colspan", "4", 1, "text-end", "small"], [1, "table", "table-bordered", "table-sm", "mb-0"], [1, "table-light", "text-center"], [2, "width", "100px"], [2, "width", "80px"], [1, "small", 2, "min-height", "40px", 3, "innerHTML"], [1, "text-center", "fw-semibold", "align-middle"], [1, "table-responsive", "mb-3"], [2, "width", "130px"], ["nz-input", "", "rows", "4", 2, "resize", "vertical", 3, "ngModelChange", "ngModel", "readonly"], [1, "d-flex", "justify-content-end", "gap-2"], ["nz-button", "", "type", "button", 3, "click", 4, "ngIf"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click", 4, "ngIf"], ["nz-button", "", "nzDanger", "", "type", "button", 3, "click", 4, "ngIf"], ["nz-button", "", "type", "button", 3, "click"], ["colspan", "7", 1, "text-center", "text-muted"], [1, "small"], ["nzAllowClear", "", 1, "vat1ab-score-select", 3, "ngModelChange", "ngModel", "nzDisabled"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], ["nz-button", "", "nzDanger", "", "type", "button", 3, "click"]], template: function AffirmTarget1AbilityComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "nz-card", 2)(3, "form", 3);
      \u0275\u0275listener("ngSubmit", function AffirmTarget1AbilityComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div")(5, "label", 4);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "nz-select", 5);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function AffirmTarget1AbilityComponent_Template_nz_select_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.resumeSeq, $event) || (ctx.resumeSeq = $event);
        return $event;
      });
      \u0275\u0275template(10, AffirmTarget1AbilityComponent_nz_option_10_Template, 1, 2, "nz-option", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 7);
      \u0275\u0275element(12, "i", 8);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(15, AffirmTarget1AbilityComponent_nz_alert_15_Template, 2, 4, "nz-alert", 9)(16, AffirmTarget1AbilityComponent_ng_container_16_Template, 69, 93, "ng-container", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "nz-modal", 11);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275listener("nzOnCancel", function AffirmTarget1AbilityComponent_Template_nz_modal_nzOnCancel_17_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275template(19, AffirmTarget1AbilityComponent_ng_container_19_Template, 2, 1, "ng-container", 12);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 11, "evs.viewAffirmTarget1Ability.evalName", "T\xEAn \u0111\xE1nh gi\xE1"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.resumeSeq);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(9, 14, "common.select", "Ch\u1ECDn"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.resumeOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 17, "evs.viewAffirmTarget1Ability.btnSearch", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.noticeVisible());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.noticeVisible());
      \u0275\u0275advance();
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", \u0275\u0275pipeBind2(18, 20, "evs.viewAffirmTarget1Ability.modal.personalInfo", "Th\xF4ng tin c\xE1 nh\xE2n"))("nzBodyStyle", \u0275\u0275pureFunction0(23, _c0))("nzFooter", null);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, NzDescriptionsModule, NzDescriptionsComponent, NzDescriptionsItemComponent, TranslatePipe], styles: ["\n.vat1ab-score-select[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n/*# sourceMappingURL=affirm-target1-ability.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AffirmTarget1AbilityComponent, [{
    type: Component,
    args: [{ selector: "app-affirm-target1-ability", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzSelectModule,
      NzButtonModule,
      NzModalModule,
      NzAlertModule,
      NzDescriptionsModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm -->
    <nz-card class="mb-3">
      <form class="d-flex align-items-end gap-2" (ngSubmit)="search()">
        <div>
          <label class="form-label">{{ 'evs.viewAffirmTarget1Ability.evalName' | translate:'T\xEAn \u0111\xE1nh gi\xE1' }}</label>
          <nz-select style="width:280px;" [(ngModel)]="resumeSeq" name="resumeSeq"
                     [nzPlaceHolder]="'common.select' | translate:'Ch\u1ECDn'">
            <nz-option *ngFor="let r of resumeOptions()" [nzValue]="r.seq" [nzLabel]="r.resumeName"></nz-option>
          </nz-select>
        </div>
        <button nz-button nzType="primary" type="submit">
          <i class="bx bx-search"></i> {{ 'evs.viewAffirmTarget1Ability.btnSearch' | translate:'Tra c\u1EE9u' }}
        </button>
      </form>
    </nz-card>

    <!-- Kh\xF4ng c\xF3 quy\u1EC1n \u0111\xE1nh gi\xE1 -->
    <nz-alert *ngIf="noticeVisible()" nzType="warning" nzShowIcon
              [nzMessage]="'evs.viewConfirmTarget1.msg.notInEvalPeriod' | translate:'Kh\xF4ng trong kho\u1EA3ng th\u1EDDi gian \u0111\xE1nh gi\xE1 ho\u1EB7c b\u1EA1n kh\xF4ng ph\u1EA3i l\xE0 ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1, xin li\xEAn h\u1EC7 Ph\xF2ng nh\xE2n s\u1EF1!'">
    </nz-alert>

    <ng-container *ngIf="!noticeVisible()">
      <!-- Ph\xE2n b\u1ED5 c\u1EA5p \u0111\xE1nh gi\xE1 -->
      <nz-card class="mb-3" *ngIf="distributionVisible()">
        <div class="fw-semibold small mb-2">{{ 'evs.viewAffirmTarget1Ability.gradeDistribution' | translate:'Ph\xE2n b\u1ED5 c\u1EA5p \u0111\xE1nh gi\xE1' }}</div>

        <div class="table-responsive mb-2">
          <table class="table table-bordered table-sm text-center mb-0">
            <thead class="table-light">
              <tr>
                <th rowspan="2" style="vertical-align:middle;width:130px;"></th>
                <th rowspan="2" style="vertical-align:middle;">{{ 'evs.viewAffirmTarget1Ability.col.total' | translate:'T\u1ED5ng' }}</th>
                <th rowspan="2" style="vertical-align:middle;">{{ 'evs.viewAffirmTarget1Ability.col.notEntered' | translate:'Ch\u01B0a nh\u1EADp' }}</th>
                <th colspan="2" *ngFor="let gn of gradeNames">{{ gn }}</th>
              </tr>
              <tr>
                <ng-container *ngFor="let gn of gradeNames">
                  <th>{{ 'evs.viewAffirmTarget1Ability.col.numPeople' | translate:'S\u1ED1 ng\u01B0\u1EDDi' }}</th>
                  <th>{{ 'evs.viewAffirmTarget1Ability.col.rate' | translate:'T\u1EF7 l\u1EC7' }}</th>
                </ng-container>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-start small text-muted">{{ 'evs.viewAffirmTarget1Ability.stdRate' | translate:'T\u1EF7 l\u1EC7 ti\xEAu chu\u1EA9n' }}</td>
                <td>{{ stdTotal() }}</td>
                <td>-</td>
                <ng-container *ngFor="let g of stdRows()">
                  <td>{{ g.cnt }}</td>
                  <td>{{ g.pct }}</td>
                </ng-container>
              </tr>
              <tr>
                <td class="text-start small text-muted">{{ 'evs.viewAffirmTarget1Ability.currentEmp' | translate:'Nh\xE2n vi\xEAn hi\u1EC7n t\u1EA1i' }}</td>
                <td>{{ recordsTotal() }}</td>
                <td>{{ curNotEntered() }}</td>
                <ng-container *ngFor="let g of curRows()">
                  <td>{{ g.cnt }}</td>
                  <td>{{ g.pct }}</td>
                </ng-container>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="table-responsive">
          <table class="table table-bordered table-sm text-center mb-0">
            <thead class="table-light">
              <tr>
                <th rowspan="2" style="vertical-align:middle;width:130px;">{{ 'evs.viewAffirmTarget1Ability.gradeLevel' | translate:'C\u1EA5p \u0111\xE1nh gi\xE1' }}</th>
                <th colspan="2" *ngFor="let gn of gradeNames">{{ gn }}</th>
              </tr>
              <tr>
                <ng-container *ngFor="let gn of gradeNames">
                  <th>{{ 'evs.viewAffirmTarget1Ability.col.maxScore' | translate:'\u0110i\u1EC3m l\u1EDBn nh\u1EA5t' }}</th>
                  <th>{{ 'evs.viewAffirmTarget1Ability.col.minScore' | translate:'\u0110i\u1EC3m nh\u1ECF nh\u1EA5t' }}</th>
                </ng-container>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <ng-container *ngFor="let g of gradeRangeRows()">
                  <td>{{ g.max }}</td>
                  <td>{{ g.min }}</td>
                </ng-container>
              </tr>
            </tbody>
          </table>
        </div>
      </nz-card>

      <!-- Danh s\xE1ch nh\xE2n vi\xEAn -->
      <nz-card>
        <div class="d-flex align-items-center justify-content-between mb-2 flex-wrap gap-2">
          <div class="small text-muted">
            {{ 'evs.viewAffirmTarget1Ability.currentEmp' | translate:'Nh\xE2n vi\xEAn hi\u1EC7n t\u1EA1i' }}: <strong>{{ filteredRows().length }}</strong>
            <span class="mx-1">/</span>
            {{ 'evs.viewAffirmTarget1Ability.totalEmp' | translate:'Nh\xE2n vi\xEAn \u0111\xE1nh gi\xE1 \u0111\u1ED1i t\u01B0\u1EE3ng' }}: <strong>{{ recordsTotal() }}</strong>
          </div>
          <div class="d-flex align-items-center gap-1">
            <label class="small text-muted mb-0 text-nowrap">{{ 'evs.viewAffirmTarget1Ability.quickFilter' | translate:'L\u1ECDc nhanh' }}</label>
            <input nz-input style="width:180px;" [ngModel]="filterText()" (ngModelChange)="onQuickFilterChange($event)">
          </div>
        </div>

        <nz-table [nzData]="filteredRows()" [nzFrontPagination]="false" [nzLoading]="loading()"
                  [nzTotal]="recordsTotal()" [nzPageIndex]="pageIndex" [nzPageSize]="pageSize"
                  [nzPageSizeOptions]="pageSizeOptions" nzShowSizeChanger
                  (nzPageIndexChange)="onPageIndexChange($event)" (nzPageSizeChange)="onPageSizeChange($event)"
                  nzSize="small" class="table-nowrap" [nzScroll]="{ x: '1300px' }">
          <thead>
            <tr>
              <th class="text-center" nzWidth="44px" [rowSpan]="2">{{ 'evs.viewAffirmTarget1Ability.col.no' | translate:'No' }}</th>
              <th nzWidth="150px" [rowSpan]="2">{{ 'evs.viewAffirmTarget1Ability.col.fullName' | translate:'H\u1ECD t\xEAn' }}</th>
              <th class="text-center" nzWidth="100px" [rowSpan]="2">{{ 'evs.viewAffirmTarget1Ability.col.empid' | translate:'M\xE3 NV' }}</th>
              <th nzWidth="120px" [rowSpan]="2">{{ 'evs.viewAffirmTarget1Ability.col.dept' | translate:'Ph\xF2ng ban' }}</th>
              <th nzWidth="110px" [rowSpan]="2">{{ 'evs.viewAffirmTarget1Ability.col.position' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
              <th class="text-center" nzWidth="200px" [rowSpan]="2">{{ 'evs.viewAffirmTarget1Ability.col.objectType' | translate:'\u0110\u1ED1i t\u01B0\u1EE3ng' }}</th>
              <th class="text-center" nzWidth="100px" [rowSpan]="2">{{ 'evs.viewAffirmTarget1Ability.col.hireDate' | translate:'Ng\xE0y v\xE0o l\xE0m' }}</th>
              <th class="text-center" [colSpan]="2">{{ 'evs.viewAffirmTarget1Ability.col.self' | translate:'B\u1EA3n th\xE2n' }}</th>
              <th class="text-center" [colSpan]="2">{{ 'evs.viewAffirmTarget1Ability.col.affirm1' | translate:'L\u1EA7n 1' }}</th>
              <th class="text-center" nzWidth="130px" [rowSpan]="2">{{ 'evs.viewAffirmTarget1Ability.col.status' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
            </tr>
            <tr>
              <th class="text-center" nzWidth="50px">{{ 'evs.viewAffirmTarget1Ability.col.score' | translate:'\u0110i\u1EC3m s\u1ED1' }}</th>
              <th class="text-center" nzWidth="50px">{{ 'evs.viewAffirmTarget1Ability.col.grade' | translate:'C\u1EA5p \u0110G' }}</th>
              <th class="text-center" nzWidth="50px">{{ 'evs.viewAffirmTarget1Ability.col.score' | translate:'\u0110i\u1EC3m s\u1ED1' }}</th>
              <th class="text-center" nzWidth="50px">{{ 'evs.viewAffirmTarget1Ability.col.grade' | translate:'C\u1EA5p \u0110G' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="!loading() && filteredRows().length === 0">
              <td colspan="11" class="text-center text-muted">0</td>
            </tr>
            <tr *ngFor="let row of filteredRows(); let i = index">
              <td class="text-center">{{ (pageIndex - 1) * pageSize + i + 1 }}</td>
              <td><a href="javascript:void(0)" (click)="openDetail(row.seq)">{{ row.localName }}</a></td>
              <td class="text-center">{{ row.empid }}</td>
              <td [attr.title]="row.deptname || null">{{ row.deptname }}</td>
              <td [attr.title]="row.postGradeName || null">{{ row.postGradeName }}</td>
              <td class="text-center">{{ row.objectTypeName }}</td>
              <td class="text-center">{{ row.dateStarted }}</td>
              <td class="text-center">{{ row.evsPoint0 }}</td>
              <td class="text-center">{{ row.evsGrade0Name }}</td>
              <td class="text-center">{{ row.evsPoint1 }}</td>
              <td class="text-center">{{ row.evsGrade1Name }}</td>
              <td class="text-center small">{{ row.activityName }}</td>
            </tr>
          </tbody>
        </nz-table>
      </nz-card>
    </ng-container>
  </div>
</div>

<!-- Modal chi ti\u1EBFt \u0111\xE1nh gi\xE1 n\u0103ng l\u1EF1c l\u1EA7n 1 -->
<nz-modal [nzVisible]="modalVisible()" [nzTitle]="'evs.viewAffirmTarget1Ability.modal.personalInfo' | translate:'Th\xF4ng tin c\xE1 nh\xE2n'"
          nzWidth="90vw" [nzBodyStyle]="{ 'max-height': '80vh', 'overflow-y': 'auto' }"
          (nzOnCancel)="closeModal()" [nzFooter]="null">
  <ng-container *nzModalContent>
    <ng-container *ngIf="detailInfo() as info">
      <div class="row g-3 mb-2">
        <div class="col-md-6">
          <nz-descriptions nzBordered nzSize="small" [nzColumn]="1"
                            [nzTitle]="'evs.viewAffirmTarget1Ability.modal.basicInfo' | translate:'Th\xF4ng tin c\u01A1 b\u1EA3n'">
            <nz-descriptions-item [nzTitle]="'evs.viewAffirmTarget1Ability.modal.fullName' | translate:'H\u1ECD t\xEAn'">{{ info.localName }}</nz-descriptions-item>
            <nz-descriptions-item [nzTitle]="'evs.viewAffirmTarget1Ability.modal.position' | translate:'Ch\u1EE9c v\u1EE5'">{{ info.postGradeName }}</nz-descriptions-item>
            <nz-descriptions-item [nzTitle]="'evs.viewAffirmTarget1Ability.modal.dept' | translate:'Ph\xF2ng ban'">{{ info.deptname }}</nz-descriptions-item>
            <nz-descriptions-item [nzTitle]="'evs.viewAffirmTarget1Ability.modal.hireDate' | translate:'Ng\xE0y v\xE0o l\xE0m'">{{ info.dateStarted }}</nz-descriptions-item>
          </nz-descriptions>
        </div>
        <div class="col-md-6">
          <nz-descriptions nzBordered nzSize="small" [nzColumn]="1"
                            [nzTitle]="'evs.viewAffirmTarget1Ability.modal.evalCategory' | translate:'H\u1EA1ng m\u1EE5c \u0111\xE1nh gi\xE1'">
            <nz-descriptions-item [nzTitle]="'evs.viewAffirmTarget1Ability.modal.evalYear' | translate:'N\u0103m \u0111\xE1nh gi\xE1'">{{ info.evsYear }}</nz-descriptions-item>
            <nz-descriptions-item [nzTitle]="'evs.viewAffirmTarget1Ability.modal.period' | translate:'Th\u1EDDi gian'">{{ info.evsStartDate }}{{ info.evsStartDate && info.evsEndDate ? '~' : '' }}{{ info.evsEndDate }}</nz-descriptions-item>
            <nz-descriptions-item [nzTitle]="'evs.viewAffirmTarget1Ability.modal.appraiser1' | translate:'Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 l\u1EA7n 1'">{{ info.localName1 }}</nz-descriptions-item>
            <nz-descriptions-item [nzTitle]="'evs.viewAffirmTarget1Ability.modal.appraiser2' | translate:'Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 l\u1EA7n 2'">{{ info.localName2 }}</nz-descriptions-item>
          </nz-descriptions>
        </div>
      </div>

      <div class="fw-semibold small mb-1 border-bottom pb-1">{{ 'evs.viewAffirmTarget1Ability.modal.abilityTitle' | translate:'\u0110\xE1nh gi\xE1 n\u0103ng l\u1EF1c' }}</div>
      <div class="table-responsive mb-2">
        <nz-table [nzData]="detailItems()" [nzShowPagination]="false" nzSize="small" [nzLoading]="detailLoading()">
          <thead>
            <tr>
              <th class="text-center" style="width:44px;">{{ 'evs.viewAffirmTarget1Ability.modal.col.no' | translate:'No' }}</th>
              <th style="width:160px;">{{ 'evs.viewAffirmTarget1Ability.modal.col.distinction' | translate:'Ph\xE2n bi\u1EC7t' }}</th>
              <th style="width:200px;">{{ 'evs.viewAffirmTarget1Ability.modal.col.evalItem' | translate:'H\u1EA1ng m\u1EE5c \u0111\xE1nh gi\xE1' }}</th>
              <th>{{ 'evs.viewAffirmTarget1Ability.modal.col.criterion' | translate:'Ch\u1EC9 ti\xEAu \u0111\xE1nh gi\xE1' }}</th>
              <th class="text-center" style="width:90px;">{{ 'evs.viewAffirmTarget1Ability.modal.col.itemScore' | translate:'\u0110i\u1EC3m ch\u1EC9 ti\xEAu' }}</th>
              <th class="text-center" style="width:130px;">{{ 'evs.viewAffirmTarget1Ability.modal.col.selfScore' | translate:'T\u1EF1 \u0111\xE1nh gi\xE1' }}</th>
              <th class="text-center" style="width:150px;">{{ 'evs.viewAffirmTarget1Ability.modal.col.affirm1Score' | translate:'\u0110\xE1nh gi\xE1 l\u1EA7n 1' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="!detailLoading() && detailItems().length === 0">
              <td colspan="7" class="text-center text-muted">-</td>
            </tr>
            <tr *ngFor="let item of detailItems(); let i = index">
              <td class="text-center">{{ i + 1 }}</td>
              <td>{{ item.groupName }}</td>
              <td>{{ item.itemName }}</td>
              <td class="small">{{ item.remark }}</td>
              <td class="text-center">{{ item.itemScore }}</td>
              <td class="text-center">{{ item.evsScore0 }}</td>
              <td class="text-center">
                <nz-select class="vat1ab-score-select" [(ngModel)]="item.evsScore1" [nzDisabled]="!canInputDetail"
                           (ngModelChange)="updateDetailTotals()" nzAllowClear>
                  <nz-option *ngFor="let opt of scoreOptions()" [nzValue]="opt.evsScore" [nzLabel]="opt.codeName || opt.evsScore"></nz-option>
                </nz-select>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="table-light fw-semibold">
              <td colspan="4" class="text-end small">Total</td>
              <td class="text-center">{{ totalItemScore() }}</td>
              <td class="text-center">{{ selfTotal() !== null ? selfTotal() : '-' }}</td>
              <td class="text-center">{{ affirm1Total() !== null ? affirm1Total() : '-' }}</td>
            </tr>
          </tfoot>
        </nz-table>
      </div>

      <!-- \xDD ki\u1EBFn c\xE1 nh\xE2n (readonly) -->
      <div class="table-responsive mb-2">
        <table class="table table-bordered table-sm mb-0">
          <thead class="table-light text-center">
            <tr>
              <th>{{ 'evs.viewAffirmTarget1Ability.modal.selfOpinion' | translate:'\xDD ki\u1EBFn c\xE1 nh\xE2n' }}</th>
              <th style="width:100px;">{{ 'evs.viewAffirmTarget1Ability.modal.col.totalScore' | translate:'\u0110i\u1EC3m s\u1ED1' }}</th>
              <th style="width:80px;">{{ 'evs.viewAffirmTarget1Ability.col.grade' | translate:'C\u1EA5p' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><div class="small" style="min-height:40px;" [innerHTML]="info.affirmContent0"></div></td>
              <td class="text-center fw-semibold align-middle">{{ info.evsPoint0 || '-' }}</td>
              <td class="text-center fw-semibold align-middle">{{ selfGradeName() }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- \xDD ki\u1EBFn \u0111\xE1nh gi\xE1 l\u1EA7n 1 -->
      <div class="table-responsive mb-3">
        <table class="table table-bordered table-sm mb-0">
          <thead class="table-light text-center">
            <tr>
              <th>{{ 'evs.viewAffirmTarget1Ability.modal.affirm1Opinion' | translate:'\xDD ki\u1EBFn \u0111\xE1nh gi\xE1 l\u1EA7n 1' }}</th>
              <th style="width:100px;">{{ 'evs.viewAffirmTarget1Ability.modal.col.totalScore' | translate:'\u0110i\u1EC3m s\u1ED1' }}</th>
              <th style="width:130px;">{{ 'evs.viewAffirmTarget1Ability.col.grade' | translate:'C\u1EA5p' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><textarea nz-input rows="4" style="resize:vertical;" [(ngModel)]="affirmContent" [readonly]="!canInputDetail"></textarea></td>
              <td class="text-center fw-semibold align-middle">{{ affirm1ScoreDisplay() }}</td>
              <td class="text-center fw-semibold align-middle">{{ affirm1GradeName() }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="d-flex justify-content-end gap-2">
        <button nz-button type="button" *ngIf="canInputDetail" (click)="saveDetail('draft')">
          {{ 'evs.viewAffirmTarget1Ability.btnSaveDraft' | translate:'L\u01B0u t\u1EA1m th\u1EDDi' }}
        </button>
        <button nz-button nzType="primary" type="button" *ngIf="canInputDetail" (click)="saveDetail('confirm')">
          {{ 'evs.viewAffirmTarget1Ability.modal.btnConfirm' | translate:'X\xE1c nh\u1EADn' }}
        </button>
        <button nz-button nzDanger type="button" *ngIf="canInputDetail" (click)="rejectDetail()">
          {{ 'evs.viewAffirmTarget1Ability.modal.btnReject' | translate:'T\u1EEB ch\u1ED1i' }}
        </button>
        <button nz-button type="button" (click)="closeModal()">
          {{ 'evs.viewAffirmTarget1Ability.btnClose' | translate:'\u0110\xF3ng' }}
        </button>
      </div>
    </ng-container>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/affirm-target1-ability/affirm-target1-ability.component.css */\n.vat1ab-score-select {\n  min-width: 120px;\n}\n/*# sourceMappingURL=affirm-target1-ability.component.css.map */\n"] }]
  }], () => [{ type: AffirmTarget1AbilityService }, { type: I18nService }, { type: NzMessageService }, { type: NzModalService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AffirmTarget1AbilityComponent, { className: "AffirmTarget1AbilityComponent", filePath: "src/app/affirm-target1-ability/affirm-target1-ability.component.ts", lineNumber: 129 });
})();
export {
  AffirmTarget1AbilityComponent
};
//# debugId=ae270ce2-a39a-54a1-861c-6a9ba6d022ff
//# sourceMappingURL=chunk-KMT4JATT.js.map
