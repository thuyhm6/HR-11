import {
  NzDescriptionsComponent,
  NzDescriptionsItemComponent,
  NzDescriptionsModule
} from "./chunk-Q45A6SWP.js";
import {
  NzMessageService
} from "./chunk-XWW7CXU6.js";
import {
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
  forkJoin,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTW5U2M5.js";

// src/app/evs-by-self-sst-ability/evs-by-self-sst-ability.service.ts
var API_BASE = "/evs/manage/api";
var EvsBySelfSSTAbilityService = class _EvsBySelfSSTAbilityService {
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
  getObjectInfo(resumeSeq) {
    return this.http.get(`${API_BASE}/personalTarget/objectInfo`, {
      params: new HttpParams().set("resumeSeq", resumeSeq),
      withCredentials: true
    });
  }
  getScoreOptions(resumeSeq) {
    return this.http.get(`${API_BASE}/evsParam/list`, {
      params: new HttpParams().set("resumeSeq", resumeSeq).set("paramType", "ITEM"),
      withCredentials: true
    });
  }
  getItemList(resumeSeq) {
    return this.http.get(`${API_BASE}/evsBySelfSSTAbility/itemList`, {
      params: new HttpParams().set("resumeSeq", resumeSeq),
      withCredentials: true
    });
  }
  save(payload) {
    return this.http.post(`${API_BASE}/evsBySelfSSTAbility/save`, payload, { withCredentials: true });
  }
  static \u0275fac = function EvsBySelfSSTAbilityService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EvsBySelfSSTAbilityService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EvsBySelfSSTAbilityService, factory: _EvsBySelfSSTAbilityService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EvsBySelfSSTAbilityService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/evs-by-self-sst-ability/evs-by-self-sst-ability.component.ts
function EvsBySelfSSTAbilityComponent_nz_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 13);
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    \u0275\u0275property("nzValue", r_r1.seq)("nzLabel", r_r1.resumeName);
  }
}
function EvsBySelfSSTAbilityComponent_nz_alert_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 14);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("nzMessage", \u0275\u0275pipeBind2(1, 1, "evs.viewConfirmTarget1.msg.notInEvalPeriod", "Kh\xF4ng trong kho\u1EA3ng th\u1EDDi gian \u0111\xE1nh gi\xE1 ho\u1EB7c b\u1EA1n kh\xF4ng ph\u1EA3i l\xE0 ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1, xin li\xEAn h\u1EC7 Ph\xF2ng nh\xE2n s\u1EF1!"));
  }
}
function EvsBySelfSSTAbilityComponent_ng_container_17_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "button", 37);
    \u0275\u0275listener("click", function EvsBySelfSSTAbilityComponent_ng_container_17_div_38_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.save("0"));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 38);
    \u0275\u0275listener("click", function EvsBySelfSSTAbilityComponent_ng_container_17_div_38_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.save("1"));
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, "evs.viewEvsBySelfSSTAbility.btnSaveDraft", "L\u01B0u t\u1EA1m th\u1EDDi"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 5, "evs.viewEvsBySelfSSTAbility.btnExecute", "Th\u1EF1c hi\u1EC7n"), " ");
  }
}
function EvsBySelfSSTAbilityComponent_ng_container_17_tr_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 39);
    \u0275\u0275text(2, "0");
    \u0275\u0275elementEnd()();
  }
}
function EvsBySelfSSTAbilityComponent_ng_container_17_tr_63_nz_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 13);
  }
  if (rf & 2) {
    const opt_r7 = ctx.$implicit;
    \u0275\u0275property("nzValue", opt_r7.evsScore)("nzLabel", opt_r7.codeName || opt_r7.evsScore);
  }
}
function EvsBySelfSSTAbilityComponent_ng_container_17_tr_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 40);
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
    \u0275\u0275elementStart(9, "td", 40);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 40)(12, "nz-select", 41);
    \u0275\u0275twoWayListener("ngModelChange", function EvsBySelfSSTAbilityComponent_ng_container_17_tr_63_Template_nz_select_ngModelChange_12_listener($event) {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(row_r6.evsScore0, $event) || (row_r6.evsScore0 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EvsBySelfSSTAbilityComponent_ng_container_17_tr_63_Template_nz_select_ngModelChange_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onScoreChange());
    });
    \u0275\u0275template(13, EvsBySelfSSTAbilityComponent_ng_container_17_tr_63_nz_option_13_Template, 1, 2, "nz-option", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r8 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.groupName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.itemName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.remark);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.itemScore);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", row_r6.evsScore0);
    \u0275\u0275property("nzDisabled", !ctx_r3.isEditable);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.scoreOptions());
  }
}
function EvsBySelfSSTAbilityComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "nz-card", 2)(2, "div", 15)(3, "div", 16)(4, "nz-descriptions", 17);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "nz-descriptions-item", 18);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "nz-descriptions-item", 18);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "nz-descriptions-item", 18);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "nz-descriptions-item", 18);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 16)(19, "nz-descriptions", 17);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementStart(21, "nz-descriptions-item", 18);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "nz-descriptions-item", 18);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "nz-descriptions-item", 18);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "nz-descriptions-item", 18);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(33, "nz-card", 2)(34, "div", 19)(35, "span", 20);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, EvsBySelfSSTAbilityComponent_ng_container_17_div_38_Template, 7, 8, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 22)(40, "nz-table", 23)(41, "thead")(42, "tr")(43, "th", 24);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "th", 25);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "th", 26);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "th");
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "th", 27);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "th", 28);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "tbody");
    \u0275\u0275template(62, EvsBySelfSSTAbilityComponent_ng_container_17_tr_62_Template, 3, 0, "tr", 12)(63, EvsBySelfSSTAbilityComponent_ng_container_17_tr_63_Template, 14, 8, "tr", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "tfoot")(65, "tr")(66, "td", 30);
    \u0275\u0275text(67, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "td", 31);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "td", 31);
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(72, "nz-card")(73, "div", 32);
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "table", 33)(77, "thead", 34)(78, "tr")(79, "th");
    \u0275\u0275text(80);
    \u0275\u0275pipe(81, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(82, "tbody")(83, "tr")(84, "td")(85, "textarea", 35);
    \u0275\u0275twoWayListener("ngModelChange", function EvsBySelfSSTAbilityComponent_ng_container_17_Template_textarea_ngModelChange_85_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.affirmContent, $event) || (ctx_r3.affirmContent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const info_r9 = ctx.ngIf;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("nzColumn", 1)("nzTitle", \u0275\u0275pipeBind2(5, 39, "evs.viewEvsBySelfSSTAbility.basicInfo", "Th\xF4ng tin c\u01A1 b\u1EA3n"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(7, 42, "evs.viewEvsBySelfSSTAbility.fullName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r9.localName);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(10, 45, "evs.viewEvsBySelfSSTAbility.position", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r9.postGradeName);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(13, 48, "evs.viewEvsBySelfSSTAbility.dept", "Ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r9.deptname);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(16, 51, "evs.viewEvsBySelfSSTAbility.hireDate", "Ng\xE0y v\xE0o l\xE0m"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r9.dateStarted);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColumn", 1)("nzTitle", \u0275\u0275pipeBind2(20, 54, "evs.viewEvsBySelfSSTAbility.evalCategory", "H\u1EA1ng m\u1EE5c \u0111\xE1nh gi\xE1"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(22, 57, "evs.viewEvsBySelfSSTAbility.evalYear", "N\u0103m \u0111\xE1nh gi\xE1"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r9.evsYear);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(25, 60, "evs.viewEvsBySelfSSTAbility.period", "Th\u1EDDi gian"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", info_r9.evsStartDate, "", info_r9.evsEndDate ? "~" + info_r9.evsEndDate : "");
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(28, 63, "evs.viewEvsBySelfSSTAbility.appraiser1", "Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 l\u1EA7n 1"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r9.localName1);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(31, 66, "evs.viewEvsBySelfSSTAbility.appraiser2", "Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 l\u1EA7n 2"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r9.localName2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 69, "evs.viewEvsBySelfSSTAbility.section1", "SECTION 1"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.isEditable);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzData", ctx_r3.rows())("nzShowPagination", false);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 72, "evs.viewEvsBySelfSSTAbility.col.no", "No"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 75, "evs.viewEvsBySelfSSTAbility.col.distinction", "Ph\xE2n bi\u1EC7t"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 78, "evs.viewEvsBySelfSSTAbility.col.evalItem", "H\u1EA1ng m\u1EE5c \u0111\xE1nh gi\xE1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 81, "evs.viewEvsBySelfSSTAbility.col.criterion", "Ch\u1EC9 ti\xEAu \u0111\xE1nh gi\xE1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 84, "evs.viewEvsBySelfSSTAbility.col.itemScore", "\u0110i\u1EC3m ch\u1EC9 ti\xEAu"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(60, 87, "evs.viewEvsBySelfSSTAbility.col.selfScore", "T\u1EF1 \u0111\xE1nh gi\xE1"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.rows().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.rows());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.totalItemScore());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.totalSelfScore());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(75, 90, "evs.viewEvsBySelfSSTAbility.section2", "SECTION 2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(81, 93, "evs.viewEvsBySelfSSTAbility.col.comment", "Comment"));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.affirmContent);
    \u0275\u0275property("readonly", !ctx_r3.isEditable);
    \u0275\u0275control();
  }
}
var I18N_KEYS = [
  "evs.viewEvsBySelfSSTAbility.evalName",
  "evs.viewEvsBySelfSSTAbility.btnSearch",
  "evs.viewEvsBySelfSSTAbility.personalInfo",
  "evs.viewEvsBySelfSSTAbility.basicInfo",
  "evs.viewEvsBySelfSSTAbility.evalCategory",
  "evs.viewEvsBySelfSSTAbility.fullName",
  "evs.viewEvsBySelfSSTAbility.position",
  "evs.viewEvsBySelfSSTAbility.dept",
  "evs.viewEvsBySelfSSTAbility.hireDate",
  "evs.viewEvsBySelfSSTAbility.evalYear",
  "evs.viewEvsBySelfSSTAbility.period",
  "evs.viewEvsBySelfSSTAbility.appraiser1",
  "evs.viewEvsBySelfSSTAbility.appraiser2",
  "evs.viewEvsBySelfSSTAbility.section1",
  "evs.viewEvsBySelfSSTAbility.section2",
  "evs.viewEvsBySelfSSTAbility.col.no",
  "evs.viewEvsBySelfSSTAbility.col.distinction",
  "evs.viewEvsBySelfSSTAbility.col.evalItem",
  "evs.viewEvsBySelfSSTAbility.col.criterion",
  "evs.viewEvsBySelfSSTAbility.col.itemScore",
  "evs.viewEvsBySelfSSTAbility.col.selfScore",
  "evs.viewEvsBySelfSSTAbility.col.comment",
  "evs.viewEvsBySelfSSTAbility.btnSaveDraft",
  "evs.viewEvsBySelfSSTAbility.btnExecute",
  "evs.viewEvsBySelfSSTAbility.msg.selectEvalFirst",
  "evs.viewEvsBySelfSSTAbility.msg.noData",
  "evs.viewEvsBySelfSSTAbility.msg.confirmSaveDraft",
  "evs.viewEvsBySelfSSTAbility.msg.confirmExecute",
  "evs.viewEvsBySelfSSTAbility.msg.saveDraftSuccess",
  "evs.viewEvsBySelfSSTAbility.msg.executeSuccess",
  "evs.viewEvsBySelfSSTAbility.msg.actionFail",
  "evs.viewConfirmTarget1.msg.notInEvalPeriod",
  "common.confirm",
  "common.cancel",
  "common.select",
  "common.loadFail"
];
var EVS_LEVEL_SELF = "14015069";
var EDITABLE_ACTIVITY = "14015356";
var EvsBySelfSSTAbilityComponent = class _EvsBySelfSSTAbilityComponent {
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
  loading = signal(
    false,
    ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  personalInfo = signal(
    null,
    ...ngDevMode ? [{ debugName: "personalInfo" }] : (
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
  rows = signal(
    [],
    ...ngDevMode ? [{ debugName: "rows" }] : (
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
  totalSelfScore = signal(
    0,
    ...ngDevMode ? [{ debugName: "totalSelfScore" }] : (
      /* istanbul ignore next */
      []
    )
  );
  resumeSeq = null;
  affirmContent = "";
  evsType = "";
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.route.queryParamMap.subscribe((params) => {
      this.evsType = params.get("evsType") ?? "";
      this.loadResumeList();
    });
  }
  get isEditable() {
    return String(this.personalInfo()?.activity ?? "") === EDITABLE_ACTIVITY;
  }
  loadResumeList() {
    this.api.getResumeList(this.evsType, EVS_LEVEL_SELF).subscribe({
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
      error: () => {
        this.noticeVisible.set(true);
        this.resumeOptions.set([]);
      }
    });
  }
  search() {
    if (!this.resumeSeq) {
      this.message.warning(this.i18n.t("evs.viewEvsBySelfSSTAbility.msg.selectEvalFirst", "Vui l\xF2ng ch\u1ECDn t\xEAn \u0111\xE1nh gi\xE1 tr\u01B0\u1EDBc."));
      return;
    }
    this.loading.set(true);
    this.api.getObjectInfo(this.resumeSeq).subscribe({
      next: (data) => {
        if (!data || !data.seq) {
          this.loading.set(false);
          this.hideAll();
          this.message.warning(this.i18n.t("evs.viewEvsBySelfSSTAbility.msg.noData", "Kh\xF4ng t\xECm th\u1EA5y th\xF4ng tin \u0111\xE1nh gi\xE1."));
          return;
        }
        this.personalInfo.set(data);
        this.affirmContent = data.affirmContent0 || "";
        this.loadItemsAndOptions(this.resumeSeq);
      },
      error: () => {
        this.loading.set(false);
        this.hideAll();
      }
    });
  }
  hideAll() {
    this.personalInfo.set(null);
    this.rows.set([]);
    this.scoreOptions.set([]);
    this.totalItemScore.set(0);
    this.totalSelfScore.set(0);
  }
  loadItemsAndOptions(resumeSeq) {
    forkJoin({
      options: this.api.getScoreOptions(resumeSeq),
      items: this.api.getItemList(resumeSeq)
    }).subscribe({
      next: ({ options, items }) => {
        this.scoreOptions.set(options ?? []);
        this.rows.set((items ?? []).map((r) => ({
          itemSeq: r.itemSeq,
          groupName: r.groupName,
          itemName: r.itemName,
          remark: r.remark,
          itemScore: Number(r.itemScore) || 0,
          evsScore0: r.evsScore0 != null ? String(r.evsScore0) : ""
        })));
        this.loading.set(false);
        this.recalcTotal();
      },
      error: () => {
        this.scoreOptions.set([]);
        this.rows.set([]);
        this.loading.set(false);
        this.recalcTotal();
      }
    });
  }
  get maxScore() {
    return this.scoreOptions().reduce((max, opt) => {
      const v = parseFloat(opt.evsScore);
      return !isNaN(v) && v > max ? v : max;
    }, 0);
  }
  onScoreChange() {
    this.recalcTotal();
  }
  recalcTotal() {
    const maxScore = this.maxScore;
    let totalItem = 0;
    let totalSelf = 0;
    for (const row of this.rows()) {
      totalItem += row.itemScore;
      if (row.evsScore0 !== "" && maxScore > 0) {
        const score = parseFloat(row.evsScore0);
        if (!isNaN(score))
          totalSelf += Math.round(score * row.itemScore / maxScore * 100) / 100;
      }
    }
    this.totalItemScore.set(Math.round(totalItem * 100) / 100);
    this.totalSelfScore.set(Math.round(totalSelf * 100) / 100);
  }
  save(flag) {
    const objectSeq = this.personalInfo()?.seq;
    if (!objectSeq || !this.resumeSeq)
      return;
    const t = (key, fallback) => this.i18n.t(key, fallback);
    const content = flag === "1" ? t("evs.viewEvsBySelfSSTAbility.msg.confirmExecute", "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n th\u1EF1c hi\u1EC7n \u0111\xE1nh gi\xE1 n\u0103ng l\u1EF1c b\u1EA3n th\xE2n?") : t("evs.viewEvsBySelfSSTAbility.msg.confirmSaveDraft", "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n l\u01B0u t\u1EA1m th\u1EDDi?");
    this.modal.confirm({
      nzTitle: t("common.confirm", "X\xE1c nh\u1EADn"),
      nzContent: content,
      nzOnOk: () => this.doSave(objectSeq, flag)
    });
  }
  doSave(objectSeq, flag) {
    const t = (key, fallback) => this.i18n.t(key, fallback);
    this.api.save({
      evsObjectSeq: objectSeq,
      resumeSeq: this.resumeSeq,
      flag,
      affirmContent: this.affirmContent,
      items: this.rows().map((r) => ({ itemSeq: r.itemSeq, evsScore0: r.evsScore0 || null }))
    }).subscribe({
      next: (res) => {
        if (res.success) {
          this.message.success(flag === "1" ? t("evs.viewEvsBySelfSSTAbility.msg.executeSuccess", "Th\u1EF1c hi\u1EC7n th\xE0nh c\xF4ng!") : t("evs.viewEvsBySelfSSTAbility.msg.saveDraftSuccess", "L\u01B0u t\u1EA1m th\u1EDDi th\xE0nh c\xF4ng!"));
          this.search();
        } else {
          this.message.error(res.message || t("evs.viewEvsBySelfSSTAbility.msg.actionFail", "L\u1ED7i khi th\u1EF1c hi\u1EC7n. Vui l\xF2ng th\u1EED l\u1EA1i."));
        }
      },
      error: () => this.message.error(t("evs.viewEvsBySelfSSTAbility.msg.actionFail", "L\u1ED7i khi th\u1EF1c hi\u1EC7n. Vui l\xF2ng th\u1EED l\u1EA1i."))
    });
  }
  static \u0275fac = function EvsBySelfSSTAbilityComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EvsBySelfSSTAbilityComponent)(\u0275\u0275directiveInject(EvsBySelfSSTAbilityService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService), \u0275\u0275directiveInject(NzModalService), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EvsBySelfSSTAbilityComponent, selectors: [["app-evs-by-self-sst-ability"]], decls: 18, vars: 17, consts: [[1, "row"], [1, "col-12"], [1, "mb-3"], [1, "row", "g-3", "align-items-end", 3, "ngSubmit"], [1, "col-md-4"], [1, "form-label"], ["name", "resumeSeq", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col-md-2"], ["nz-button", "", "nzType", "primary", "type", "submit", 3, "nzLoading"], [1, "bx", "bx-search"], ["nzType", "warning", "nzShowIcon", "", 3, "nzMessage", 4, "ngIf"], [4, "ngIf"], [3, "nzValue", "nzLabel"], ["nzType", "warning", "nzShowIcon", "", 3, "nzMessage"], [1, "row", "g-3"], [1, "col-md-6"], ["nzBordered", "", "nzSize", "small", 3, "nzColumn", "nzTitle"], [3, "nzTitle"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "fw-bold"], ["class", "d-flex gap-1", 4, "ngIf"], [1, "table-responsive"], ["nzSize", "small", 3, "nzData", "nzShowPagination"], [1, "text-center", 2, "width", "48px"], [2, "width", "160px"], [2, "width", "200px"], [1, "text-center", 2, "width", "90px"], [1, "text-center", 2, "width", "130px"], [4, "ngFor", "ngForOf"], ["colspan", "4", 1, "text-end", "fw-bold", "small"], [1, "text-center", "fw-bold"], [1, "fw-bold", "mb-2", "border-bottom", "pb-1"], [1, "table", "table-bordered", "table-sm", "mb-0"], [1, "table-light", "text-center"], ["nz-input", "", "rows", "5", 2, "resize", "none", 3, "ngModelChange", "ngModel", "readonly"], [1, "d-flex", "gap-1"], ["nz-button", "", "nzSize", "small", "type", "button", 3, "click"], ["nz-button", "", "nzType", "primary", "nzSize", "small", "type", "button", 3, "click"], ["colspan", "6", 1, "text-center", "text-muted"], [1, "text-center"], ["nzAllowClear", "", 1, "vebssa-score-select", 3, "ngModelChange", "ngModel", "nzDisabled"]], template: function EvsBySelfSSTAbilityComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "nz-card", 2)(3, "form", 3);
      \u0275\u0275listener("ngSubmit", function EvsBySelfSSTAbilityComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 4)(5, "label", 5);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "nz-select", 6);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function EvsBySelfSSTAbilityComponent_Template_nz_select_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.resumeSeq, $event) || (ctx.resumeSeq = $event);
        return $event;
      });
      \u0275\u0275template(10, EvsBySelfSSTAbilityComponent_nz_option_10_Template, 1, 2, "nz-option", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 8)(12, "button", 9);
      \u0275\u0275element(13, "i", 10);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(16, EvsBySelfSSTAbilityComponent_nz_alert_16_Template, 2, 4, "nz-alert", 11)(17, EvsBySelfSSTAbilityComponent_ng_container_17_Template, 86, 96, "ng-container", 12);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 8, "evs.viewEvsBySelfSSTAbility.evalName", "T\xEAn \u0111\xE1nh gi\xE1"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.resumeSeq);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(9, 11, "common.select", "Ch\u1ECDn"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.resumeOptions());
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.loading());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(15, 14, "evs.viewEvsBySelfSSTAbility.btnSearch", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.noticeVisible());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.noticeVisible() && ctx.personalInfo());
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    NgForm,
    NzTableModule,
    NzTableComponent,
    NzTableCellDirective,
    NzThMeasureDirective,
    NzTheadComponent,
    NzTbodyComponent,
    NzTrDirective,
    NzCardModule,
    NzCardComponent,
    NzInputModule,
    NzInputDirective,
    NzSelectModule,
    NzOptionComponent,
    NzSelectComponent,
    NzButtonModule,
    NzButtonComponent,
    NzTransitionPatchDirective,
    NzWaveDirective,
    NzModalModule,
    NzAlertModule,
    NzAlertComponent,
    NzDescriptionsModule,
    NzDescriptionsComponent,
    NzDescriptionsItemComponent,
    TranslatePipe
  ], styles: ["\n.vebssa-score-select[_ngcontent-%COMP%] {\n  min-width: 110px;\n}\n/*# sourceMappingURL=evs-by-self-sst-ability.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EvsBySelfSSTAbilityComponent, [{
    type: Component,
    args: [{ selector: "app-evs-by-self-sst-ability", standalone: true, imports: [
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
      <form class="row g-3 align-items-end" (ngSubmit)="search()">
        <div class="col-md-4">
          <label class="form-label">{{ 'evs.viewEvsBySelfSSTAbility.evalName' | translate:'T\xEAn \u0111\xE1nh gi\xE1' }}</label>
          <nz-select class="w-100" [(ngModel)]="resumeSeq" name="resumeSeq"
                     [nzPlaceHolder]="'common.select' | translate:'Ch\u1ECDn'">
            <nz-option *ngFor="let r of resumeOptions()" [nzValue]="r.seq" [nzLabel]="r.resumeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-2">
          <button nz-button nzType="primary" type="submit" [nzLoading]="loading()">
            <i class="bx bx-search"></i> {{ 'evs.viewEvsBySelfSSTAbility.btnSearch' | translate:'Tra c\u1EE9u' }}
          </button>
        </div>
      </form>
    </nz-card>

    <!-- Kh\xF4ng trong kho\u1EA3ng th\u1EDDi gian \u0111\xE1nh gi\xE1 -->
    <nz-alert *ngIf="noticeVisible()" nzType="warning" nzShowIcon
              [nzMessage]="'evs.viewConfirmTarget1.msg.notInEvalPeriod' | translate:'Kh\xF4ng trong kho\u1EA3ng th\u1EDDi gian \u0111\xE1nh gi\xE1 ho\u1EB7c b\u1EA1n kh\xF4ng ph\u1EA3i l\xE0 ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1, xin li\xEAn h\u1EC7 Ph\xF2ng nh\xE2n s\u1EF1!'">
    </nz-alert>

    <ng-container *ngIf="!noticeVisible() && personalInfo() as info">
      <!-- Th\xF4ng tin c\xE1 nh\xE2n -->
      <nz-card class="mb-3">
        <div class="row g-3">
          <div class="col-md-6">
            <nz-descriptions nzBordered nzSize="small" [nzColumn]="1"
                              [nzTitle]="'evs.viewEvsBySelfSSTAbility.basicInfo' | translate:'Th\xF4ng tin c\u01A1 b\u1EA3n'">
              <nz-descriptions-item [nzTitle]="'evs.viewEvsBySelfSSTAbility.fullName' | translate:'H\u1ECD t\xEAn'">{{ info.localName }}</nz-descriptions-item>
              <nz-descriptions-item [nzTitle]="'evs.viewEvsBySelfSSTAbility.position' | translate:'Ch\u1EE9c v\u1EE5'">{{ info.postGradeName }}</nz-descriptions-item>
              <nz-descriptions-item [nzTitle]="'evs.viewEvsBySelfSSTAbility.dept' | translate:'Ph\xF2ng ban'">{{ info.deptname }}</nz-descriptions-item>
              <nz-descriptions-item [nzTitle]="'evs.viewEvsBySelfSSTAbility.hireDate' | translate:'Ng\xE0y v\xE0o l\xE0m'">{{ info.dateStarted }}</nz-descriptions-item>
            </nz-descriptions>
          </div>
          <div class="col-md-6">
            <nz-descriptions nzBordered nzSize="small" [nzColumn]="1"
                              [nzTitle]="'evs.viewEvsBySelfSSTAbility.evalCategory' | translate:'H\u1EA1ng m\u1EE5c \u0111\xE1nh gi\xE1'">
              <nz-descriptions-item [nzTitle]="'evs.viewEvsBySelfSSTAbility.evalYear' | translate:'N\u0103m \u0111\xE1nh gi\xE1'">{{ info.evsYear }}</nz-descriptions-item>
              <nz-descriptions-item [nzTitle]="'evs.viewEvsBySelfSSTAbility.period' | translate:'Th\u1EDDi gian'">{{ info.evsStartDate }}{{ info.evsEndDate ? '~' + info.evsEndDate : '' }}</nz-descriptions-item>
              <nz-descriptions-item [nzTitle]="'evs.viewEvsBySelfSSTAbility.appraiser1' | translate:'Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 l\u1EA7n 1'">{{ info.localName1 }}</nz-descriptions-item>
              <nz-descriptions-item [nzTitle]="'evs.viewEvsBySelfSSTAbility.appraiser2' | translate:'Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 l\u1EA7n 2'">{{ info.localName2 }}</nz-descriptions-item>
            </nz-descriptions>
          </div>
        </div>
      </nz-card>

      <!-- SECTION 1: B\u1EA3ng h\u1EA1ng m\u1EE5c n\u0103ng l\u1EF1c -->
      <nz-card class="mb-3">
        <div class="d-flex align-items-center justify-content-between mb-2">
          <span class="fw-bold">{{ 'evs.viewEvsBySelfSSTAbility.section1' | translate:'SECTION 1' }}</span>
          <div class="d-flex gap-1" *ngIf="isEditable">
            <button nz-button nzSize="small" type="button" (click)="save('0')">
              {{ 'evs.viewEvsBySelfSSTAbility.btnSaveDraft' | translate:'L\u01B0u t\u1EA1m th\u1EDDi' }}
            </button>
            <button nz-button nzType="primary" nzSize="small" type="button" (click)="save('1')">
              {{ 'evs.viewEvsBySelfSSTAbility.btnExecute' | translate:'Th\u1EF1c hi\u1EC7n' }}
            </button>
          </div>
        </div>

        <div class="table-responsive">
          <nz-table [nzData]="rows()" [nzShowPagination]="false" nzSize="small">
            <thead>
              <tr>
                <th class="text-center" style="width:48px;">{{ 'evs.viewEvsBySelfSSTAbility.col.no' | translate:'No' }}</th>
                <th style="width:160px;">{{ 'evs.viewEvsBySelfSSTAbility.col.distinction' | translate:'Ph\xE2n bi\u1EC7t' }}</th>
                <th style="width:200px;">{{ 'evs.viewEvsBySelfSSTAbility.col.evalItem' | translate:'H\u1EA1ng m\u1EE5c \u0111\xE1nh gi\xE1' }}</th>
                <th>{{ 'evs.viewEvsBySelfSSTAbility.col.criterion' | translate:'Ch\u1EC9 ti\xEAu \u0111\xE1nh gi\xE1' }}</th>
                <th class="text-center" style="width:90px;">{{ 'evs.viewEvsBySelfSSTAbility.col.itemScore' | translate:'\u0110i\u1EC3m ch\u1EC9 ti\xEAu' }}</th>
                <th class="text-center" style="width:130px;">{{ 'evs.viewEvsBySelfSSTAbility.col.selfScore' | translate:'T\u1EF1 \u0111\xE1nh gi\xE1' }}</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngIf="rows().length === 0">
                <td colspan="6" class="text-center text-muted">0</td>
              </tr>
              <tr *ngFor="let row of rows(); let i = index">
                <td class="text-center">{{ i + 1 }}</td>
                <td>{{ row.groupName }}</td>
                <td>{{ row.itemName }}</td>
                <td>{{ row.remark }}</td>
                <td class="text-center">{{ row.itemScore }}</td>
                <td class="text-center">
                  <nz-select class="vebssa-score-select" [(ngModel)]="row.evsScore0" [nzDisabled]="!isEditable"
                             (ngModelChange)="onScoreChange()" nzAllowClear>
                    <nz-option *ngFor="let opt of scoreOptions()" [nzValue]="opt.evsScore" [nzLabel]="opt.codeName || opt.evsScore"></nz-option>
                  </nz-select>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="4" class="text-end fw-bold small">Total</td>
                <td class="text-center fw-bold">{{ totalItemScore() }}</td>
                <td class="text-center fw-bold">{{ totalSelfScore() }}</td>
              </tr>
            </tfoot>
          </nz-table>
        </div>
      </nz-card>

      <!-- SECTION 2: Nh\u1EADn x\xE9t b\u1EA3n th\xE2n -->
      <nz-card>
        <div class="fw-bold mb-2 border-bottom pb-1">{{ 'evs.viewEvsBySelfSSTAbility.section2' | translate:'SECTION 2' }}</div>
        <table class="table table-bordered table-sm mb-0">
          <thead class="table-light text-center">
            <tr>
              <th>{{ 'evs.viewEvsBySelfSSTAbility.col.comment' | translate:'Comment' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><textarea nz-input rows="5" style="resize:none;" [(ngModel)]="affirmContent" [readonly]="!isEditable"></textarea></td>
            </tr>
          </tbody>
        </table>
      </nz-card>
    </ng-container>
  </div>
</div>
`, styles: ["/* src/app/evs-by-self-sst-ability/evs-by-self-sst-ability.component.css */\n.vebssa-score-select {\n  min-width: 110px;\n}\n/*# sourceMappingURL=evs-by-self-sst-ability.component.css.map */\n"] }]
  }], () => [{ type: EvsBySelfSSTAbilityService }, { type: I18nService }, { type: NzMessageService }, { type: NzModalService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EvsBySelfSSTAbilityComponent, { className: "EvsBySelfSSTAbilityComponent", filePath: "src/app/evs-by-self-sst-ability/evs-by-self-sst-ability.component.ts", lineNumber: 89 });
})();
export {
  EvsBySelfSSTAbilityComponent
};
//# debugId=44da6657-db63-5c16-9efa-9b40faae6036
//# sourceMappingURL=chunk-BREXVZVH.js.map
