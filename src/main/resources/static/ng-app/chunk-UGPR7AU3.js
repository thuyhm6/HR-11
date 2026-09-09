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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTW5U2M5.js";

// src/app/evs-by-self-htsv/evs-by-self-htsv.service.ts
var API_BASE = "/evs/manage/api";
var EvsBySelfHtsvService = class _EvsBySelfHtsvService {
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
  getItemList(evsObjectSeq) {
    return this.http.get(`${API_BASE}/personalTarget/itemList`, {
      params: new HttpParams().set("evsObjectSeq", evsObjectSeq),
      withCredentials: true
    });
  }
  save(payload) {
    return this.http.post(`${API_BASE}/evsBySelfHTSV/save`, payload, { withCredentials: true });
  }
  static \u0275fac = function EvsBySelfHtsvService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EvsBySelfHtsvService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EvsBySelfHtsvService, factory: _EvsBySelfHtsvService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EvsBySelfHtsvService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/evs-by-self-htsv/evs-by-self-htsv.component.ts
function EvsBySelfHtsvComponent_nz_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 13);
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    \u0275\u0275property("nzValue", r_r1.seq)("nzLabel", r_r1.resumeName);
  }
}
function EvsBySelfHtsvComponent_nz_alert_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 14);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("nzMessage", \u0275\u0275pipeBind2(1, 1, "evs.viewConfirmTarget1.msg.notInEvalPeriod", "Kh\xF4ng trong kho\u1EA3ng th\u1EDDi gian \u0111\xE1nh gi\xE1 ho\u1EB7c b\u1EA1n kh\xF4ng ph\u1EA3i l\xE0 ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1, xin li\xEAn h\u1EC7 Ph\xF2ng nh\xE2n s\u1EF1!"));
  }
}
function EvsBySelfHtsvComponent_ng_container_17_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "button", 40);
    \u0275\u0275listener("click", function EvsBySelfHtsvComponent_ng_container_17_div_38_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.save("0"));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 41);
    \u0275\u0275listener("click", function EvsBySelfHtsvComponent_ng_container_17_div_38_Template_button_click_4_listener() {
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, "evs.viewEvsBySelfHTSV.btnSaveDraft", "L\u01B0u t\u1EA1m th\u1EDDi"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 5, "evs.viewEvsBySelfHTSV.btnExecute", "Th\u1EF1c hi\u1EC7n"), " ");
  }
}
function EvsBySelfHtsvComponent_ng_container_17_tr_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 42);
    \u0275\u0275text(2, "0");
    \u0275\u0275elementEnd()();
  }
}
function EvsBySelfHtsvComponent_ng_container_17_tr_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 44);
    \u0275\u0275element(6, "div", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 43);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 43)(10, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function EvsBySelfHtsvComponent_ng_container_17_tr_63_Template_input_ngModelChange_10_listener($event) {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(row_r6.evsScore, $event) || (row_r6.evsScore = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EvsBySelfHtsvComponent_ng_container_17_tr_63_Template_input_ngModelChange_10_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.onScoreInput(row_r6));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 43);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r7 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.itemName);
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", row_r6.itemContent, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.ratio);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", row_r6.evsScore);
    \u0275\u0275property("readonly", !ctx_r3.isEditable);
    \u0275\u0275attribute("max", row_r6.ratio);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.rowTotal > 0 ? row_r6.rowTotal : "-");
  }
}
function EvsBySelfHtsvComponent_ng_container_17_Template(rf, ctx) {
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
    \u0275\u0275template(38, EvsBySelfHtsvComponent_ng_container_17_div_38_Template, 7, 8, "div", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 22)(40, "nz-table", 23)(41, "thead")(42, "tr")(43, "th", 24);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "th", 25);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "th");
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
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "tbody");
    \u0275\u0275template(62, EvsBySelfHtsvComponent_ng_container_17_tr_62_Template, 3, 0, "tr", 12)(63, EvsBySelfHtsvComponent_ng_container_17_tr_63_Template, 13, 8, "tr", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "tfoot")(65, "tr")(66, "td", 30);
    \u0275\u0275text(67, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "td", 31);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(70, "nz-card")(71, "div", 32);
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "table", 33)(75, "thead", 34)(76, "tr");
    \u0275\u0275element(77, "th", 35);
    \u0275\u0275elementStart(78, "th");
    \u0275\u0275text(79);
    \u0275\u0275pipe(80, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "th");
    \u0275\u0275text(82);
    \u0275\u0275pipe(83, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(84, "tbody")(85, "tr")(86, "td", 36);
    \u0275\u0275text(87);
    \u0275\u0275pipe(88, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "td")(90, "textarea", 37);
    \u0275\u0275twoWayListener("ngModelChange", function EvsBySelfHtsvComponent_ng_container_17_Template_textarea_ngModelChange_90_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.achiev0, $event) || (ctx_r3.achiev0 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "td")(92, "textarea", 37);
    \u0275\u0275twoWayListener("ngModelChange", function EvsBySelfHtsvComponent_ng_container_17_Template_textarea_ngModelChange_92_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.limit0, $event) || (ctx_r3.limit0 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "tr")(94, "td", 36);
    \u0275\u0275text(95);
    \u0275\u0275pipe(96, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "td")(98, "textarea", 38);
    \u0275\u0275text(99);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(100, "td")(101, "textarea", 38);
    \u0275\u0275text(102);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(103, "tr")(104, "td", 36);
    \u0275\u0275text(105);
    \u0275\u0275pipe(106, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "td")(108, "textarea", 38);
    \u0275\u0275text(109);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(110, "td")(111, "textarea", 38);
    \u0275\u0275text(112);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const info_r8 = ctx.ngIf;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("nzColumn", 1)("nzTitle", \u0275\u0275pipeBind2(5, 48, "evs.viewEvsBySelfHTSV.basicInfo", "Th\xF4ng tin c\u01A1 b\u1EA3n"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(7, 51, "evs.viewEvsBySelfHTSV.fullName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r8.localName);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(10, 54, "evs.viewEvsBySelfHTSV.position", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r8.postGradeName);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(13, 57, "evs.viewEvsBySelfHTSV.dept", "Ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r8.deptname);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(16, 60, "evs.viewEvsBySelfHTSV.hireDate", "Ng\xE0y v\xE0o l\xE0m"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r8.dateStarted);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColumn", 1)("nzTitle", \u0275\u0275pipeBind2(20, 63, "evs.viewEvsBySelfHTSV.evalCategory", "H\u1EA1ng m\u1EE5c \u0111\xE1nh gi\xE1"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(22, 66, "evs.viewEvsBySelfHTSV.evalYear", "N\u0103m \u0111\xE1nh gi\xE1"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r8.evsYear);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(25, 69, "evs.viewEvsBySelfHTSV.period", "Th\u1EDDi gian"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", info_r8.evsStartDate, "", info_r8.evsEndDate ? "~" + info_r8.evsEndDate : "");
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(28, 72, "evs.viewEvsBySelfHTSV.appraiser1", "Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 l\u1EA7n 1"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r8.localName1);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(31, 75, "evs.viewEvsBySelfHTSV.appraiser2", "Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 l\u1EA7n 2"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r8.localName2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 78, "evs.viewEvsBySelfHTSV.objectiveTitle", "M\u1EE5c ti\xEAu \u0111\xE1nh gi\xE1 b\u1EA3n th\xE2n"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.isEditable);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzData", ctx_r3.rows())("nzShowPagination", false);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 81, "evs.viewEvsBySelfHTSV.col.no", "No"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 84, "evs.viewEvsBySelfHTSV.col.evalItem", "H\u1EA1ng m\u1EE5c \u0111\xE1nh gi\xE1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 87, "evs.viewEvsBySelfHTSV.col.target", "M\u1EE5c ti\xEAu"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 90, "evs.viewEvsBySelfHTSV.col.ratio", "T\u1EF7 l\u1EC7(%)"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 93, "evs.viewEvsBySelfHTSV.col.selfScore", "\u0110i\u1EC3m \u0111\xE1nh gi\xE1 b\u1EA3n th\xE2n (%)"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(60, 96, "evs.viewEvsBySelfHTSV.col.total", "T\u1ED5ng"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r3.rows().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.rows());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.totalScore());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(73, 99, "evs.viewEvsBySelfHTSV.part2", "Ph\u1EA7n 2: Th\xE0nh t\xEDch v\xE0 H\u1EA1n ch\u1EBF c\u1EE7a b\u1EA3n th\xE2n"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(80, 102, "evs.viewEvsBySelfHTSV.col.achievement", "Th\xE0nh t\xEDch"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(83, 105, "evs.viewEvsBySelfHTSV.col.limitation", "H\u1EA1n ch\u1EBF"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(88, 108, "evs.result.col.self", "B\u1EA3n th\xE2n"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.achiev0);
    \u0275\u0275property("readonly", !ctx_r3.isEditable);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.limit0);
    \u0275\u0275property("readonly", !ctx_r3.isEditable);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(96, 111, "evs.viewEvsBySelfHTSV.appraiser1Comment", "Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 c\u1EA5p 1"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(info_r8.affirmC1L1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r8.affirmC2L1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(106, 114, "evs.viewEvsBySelfHTSV.appraiser2Comment", "Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 c\u1EA5p 2"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(info_r8.affirmC1L2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r8.affirmC2L2);
  }
}
var I18N_KEYS = [
  "evs.viewEvsBySelfHTSV.evalName",
  "evs.viewEvsBySelfHTSV.btnSearch",
  "evs.viewEvsBySelfHTSV.personalInfo",
  "evs.viewEvsBySelfHTSV.basicInfo",
  "evs.viewEvsBySelfHTSV.evalCategory",
  "evs.viewEvsBySelfHTSV.fullName",
  "evs.viewEvsBySelfHTSV.position",
  "evs.viewEvsBySelfHTSV.dept",
  "evs.viewEvsBySelfHTSV.hireDate",
  "evs.viewEvsBySelfHTSV.evalYear",
  "evs.viewEvsBySelfHTSV.period",
  "evs.viewEvsBySelfHTSV.appraiser1",
  "evs.viewEvsBySelfHTSV.appraiser2",
  "evs.viewEvsBySelfHTSV.objectiveTitle",
  "evs.viewEvsBySelfHTSV.col.no",
  "evs.viewEvsBySelfHTSV.col.evalItem",
  "evs.viewEvsBySelfHTSV.col.target",
  "evs.viewEvsBySelfHTSV.col.ratio",
  "evs.viewEvsBySelfHTSV.col.selfScore",
  "evs.viewEvsBySelfHTSV.col.total",
  "evs.viewEvsBySelfHTSV.part2",
  "evs.viewEvsBySelfHTSV.col.achievement",
  "evs.viewEvsBySelfHTSV.col.limitation",
  "evs.result.col.self",
  "evs.viewEvsBySelfHTSV.selfAppraisal",
  "evs.viewEvsBySelfHTSV.appraiser1Comment",
  "evs.viewEvsBySelfHTSV.appraiser2Comment",
  "evs.viewEvsBySelfHTSV.btnSaveDraft",
  "evs.viewEvsBySelfHTSV.btnExecute",
  "evs.viewEvsBySelfHTSV.msg.selectEvalFirst",
  "evs.viewEvsBySelfHTSV.msg.noData",
  "evs.viewEvsBySelfHTSV.msg.confirmSaveDraft",
  "evs.viewEvsBySelfHTSV.msg.confirmExecute",
  "evs.viewEvsBySelfHTSV.msg.saveDraftSuccess",
  "evs.viewEvsBySelfHTSV.msg.executeSuccess",
  "evs.viewEvsBySelfHTSV.msg.actionFail",
  "evs.viewConfirmTarget1.msg.notInEvalPeriod",
  "common.confirm",
  "common.cancel",
  "common.loadFail"
];
var EVS_LEVEL_SELF = "14015069";
var EDITABLE_ACTIVITY = "14015356";
var EvsBySelfHtsvComponent = class _EvsBySelfHtsvComponent {
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
  rows = signal(
    [],
    ...ngDevMode ? [{ debugName: "rows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  totalScore = signal(
    0,
    ...ngDevMode ? [{ debugName: "totalScore" }] : (
      /* istanbul ignore next */
      []
    )
  );
  resumeSeq = null;
  achiev0 = "";
  limit0 = "";
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
      this.message.warning(this.i18n.t("evs.viewEvsBySelfHTSV.msg.selectEvalFirst", "Vui l\xF2ng ch\u1ECDn t\xEAn \u0111\xE1nh gi\xE1 tr\u01B0\u1EDBc."));
      return;
    }
    this.loading.set(true);
    this.api.getObjectInfo(this.resumeSeq).subscribe({
      next: (data) => {
        this.loading.set(false);
        if (!data || !data.seq) {
          this.hideAll();
          this.message.warning(this.i18n.t("evs.viewEvsBySelfHTSV.msg.noData", "Kh\xF4ng t\xECm th\u1EA5y th\xF4ng tin \u0111\xE1nh gi\xE1."));
          return;
        }
        this.personalInfo.set(data);
        this.achiev0 = data.affirmC1L0 || "";
        this.limit0 = data.affirmC2L0 || "";
        this.loadItems(data.seq);
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
    this.totalScore.set(0);
  }
  loadItems(evsObjectSeq) {
    this.api.getItemList(evsObjectSeq).subscribe({
      next: (list) => {
        this.rows.set((list ?? []).map((r) => {
          const ratio = Number(r.itemScore) || 0;
          const evsScore = r.evsScore != null ? String(r.evsScore) : "";
          return { seq: r.seq, itemName: r.itemName, itemContent: r.itemContent || "", ratio, evsScore, rowTotal: this.calcRowTotal(evsScore, ratio) };
        }));
        this.recalcTotal();
      },
      error: () => {
        this.rows.set([]);
        this.recalcTotal();
      }
    });
  }
  calcRowTotal(evsScore, ratio) {
    if (evsScore === "")
      return 0;
    const score = parseFloat(evsScore);
    if (isNaN(score))
      return 0;
    return Math.round(score * ratio / 100 * 100) / 100;
  }
  /** Giới hạn giá trị nhập tối đa = 100 (hằng số cố định, đúng bản gốc - xem docblock class). */
  onScoreInput(row) {
    const val = parseFloat(row.evsScore);
    if (!isNaN(val) && val > 100) {
      row.evsScore = "100";
    }
    row.rowTotal = this.calcRowTotal(row.evsScore, row.ratio);
    this.recalcTotal();
  }
  recalcTotal() {
    const total = this.rows().reduce((sum, r) => sum + r.rowTotal, 0);
    this.totalScore.set(Math.round(total * 100) / 100);
  }
  save(flag) {
    const objectSeq = this.personalInfo()?.seq;
    if (!objectSeq)
      return;
    const t = (key, fallback) => this.i18n.t(key, fallback);
    const content = flag === "1" ? t("evs.viewEvsBySelfHTSV.msg.confirmExecute", "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n th\u1EF1c hi\u1EC7n \u0111\xE1nh gi\xE1 b\u1EA3n th\xE2n?") : t("evs.viewEvsBySelfHTSV.msg.confirmSaveDraft", "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n l\u01B0u t\u1EA1m th\u1EDDi?");
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
      flag,
      affirmContent1: this.achiev0,
      affirmContent2: this.limit0,
      items: this.rows().map((r) => ({ seq: r.seq, evsScore: r.evsScore }))
    }).subscribe({
      next: (res) => {
        if (res.success) {
          this.message.success(flag === "1" ? t("evs.viewEvsBySelfHTSV.msg.executeSuccess", "Th\u1EF1c hi\u1EC7n th\xE0nh c\xF4ng!") : t("evs.viewEvsBySelfHTSV.msg.saveDraftSuccess", "L\u01B0u t\u1EA1m th\u1EDDi th\xE0nh c\xF4ng!"));
          this.search();
        } else {
          this.message.error(res.message || t("evs.viewEvsBySelfHTSV.msg.actionFail", "L\u1ED7i khi th\u1EF1c hi\u1EC7n. Vui l\xF2ng th\u1EED l\u1EA1i."));
        }
      },
      error: () => this.message.error(t("evs.viewEvsBySelfHTSV.msg.actionFail", "L\u1ED7i khi th\u1EF1c hi\u1EC7n. Vui l\xF2ng th\u1EED l\u1EA1i."))
    });
  }
  static \u0275fac = function EvsBySelfHtsvComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EvsBySelfHtsvComponent)(\u0275\u0275directiveInject(EvsBySelfHtsvService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService), \u0275\u0275directiveInject(NzModalService), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EvsBySelfHtsvComponent, selectors: [["app-evs-by-self-htsv"]], decls: 18, vars: 17, consts: [[1, "row"], [1, "col-12"], [1, "mb-3"], [1, "row", "g-3", "align-items-end", 3, "ngSubmit"], [1, "col-md-4"], [1, "form-label"], ["name", "resumeSeq", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col-md-2"], ["nz-button", "", "nzType", "primary", "type", "submit", 3, "nzLoading"], [1, "bx", "bx-search"], ["nzType", "warning", "nzShowIcon", "", 3, "nzMessage", 4, "ngIf"], [4, "ngIf"], [3, "nzValue", "nzLabel"], ["nzType", "warning", "nzShowIcon", "", 3, "nzMessage"], [1, "row", "g-3"], [1, "col-md-6"], ["nzBordered", "", "nzSize", "small", 3, "nzColumn", "nzTitle"], [3, "nzTitle"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "fw-bold"], ["class", "d-flex gap-1", 4, "ngIf"], [1, "table-responsive"], ["nzSize", "small", 3, "nzData", "nzShowPagination"], [1, "text-center", 2, "width", "48px"], [2, "width", "220px"], [1, "text-center", 2, "width", "90px"], [1, "text-center", 2, "width", "130px"], [1, "text-center", 2, "width", "100px"], [4, "ngFor", "ngForOf"], ["colspan", "5", 1, "text-end", "fw-bold", "small"], [1, "text-center", "fw-bold"], [1, "fw-bold", "mb-2", "border-bottom", "pb-1"], [1, "table", "table-bordered", "table-sm", "mb-0"], [1, "table-light", "text-center"], [2, "width", "160px"], [1, "text-muted", "small", "align-middle"], ["nz-input", "", "rows", "3", 2, "resize", "none", 3, "ngModelChange", "ngModel", "readonly"], ["nz-input", "", "rows", "3", "readonly", "", 2, "resize", "none"], [1, "d-flex", "gap-1"], ["nz-button", "", "nzSize", "small", "type", "button", 3, "click"], ["nz-button", "", "nzType", "primary", "nzSize", "small", "type", "button", 3, "click"], ["colspan", "6", 1, "text-center", "text-muted"], [1, "text-center"], [1, "vebsh-rich-content"], [3, "innerHTML"], ["nz-input", "", "type", "number", "min", "0", "step", "0.01", 1, "vebsh-score-input", 3, "ngModelChange", "ngModel", "readonly"]], template: function EvsBySelfHtsvComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "nz-card", 2)(3, "form", 3);
      \u0275\u0275listener("ngSubmit", function EvsBySelfHtsvComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 4)(5, "label", 5);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "nz-select", 6);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function EvsBySelfHtsvComponent_Template_nz_select_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.resumeSeq, $event) || (ctx.resumeSeq = $event);
        return $event;
      });
      \u0275\u0275template(10, EvsBySelfHtsvComponent_nz_option_10_Template, 1, 2, "nz-option", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 8)(12, "button", 9);
      \u0275\u0275element(13, "i", 10);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(16, EvsBySelfHtsvComponent_nz_alert_16_Template, 2, 4, "nz-alert", 11)(17, EvsBySelfHtsvComponent_ng_container_17_Template, 113, 117, "ng-container", 12);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 8, "evs.viewEvsBySelfHTSV.evalName", "T\xEAn \u0111\xE1nh gi\xE1"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.resumeSeq);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(9, 11, "common.select", "Ch\u1ECDn"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.resumeOptions());
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.loading());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(15, 14, "evs.viewEvsBySelfHTSV.btnSearch", "Tra c\u1EE9u"), " ");
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
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    MinValidator,
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
  ], styles: ["\n.vebsh-rich-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.vebsh-rich-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.vebsh-rich-content[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 1.2em;\n}\n.vebsh-score-input[_ngcontent-%COMP%] {\n  width: 100px;\n  text-align: center;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=evs-by-self-htsv.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EvsBySelfHtsvComponent, [{
    type: Component,
    args: [{ selector: "app-evs-by-self-htsv", standalone: true, imports: [
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
          <label class="form-label">{{ 'evs.viewEvsBySelfHTSV.evalName' | translate:'T\xEAn \u0111\xE1nh gi\xE1' }}</label>
          <nz-select class="w-100" [(ngModel)]="resumeSeq" name="resumeSeq"
                     [nzPlaceHolder]="'common.select' | translate:'Ch\u1ECDn'">
            <nz-option *ngFor="let r of resumeOptions()" [nzValue]="r.seq" [nzLabel]="r.resumeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-2">
          <button nz-button nzType="primary" type="submit" [nzLoading]="loading()">
            <i class="bx bx-search"></i> {{ 'evs.viewEvsBySelfHTSV.btnSearch' | translate:'Tra c\u1EE9u' }}
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
                              [nzTitle]="'evs.viewEvsBySelfHTSV.basicInfo' | translate:'Th\xF4ng tin c\u01A1 b\u1EA3n'">
              <nz-descriptions-item [nzTitle]="'evs.viewEvsBySelfHTSV.fullName' | translate:'H\u1ECD t\xEAn'">{{ info.localName }}</nz-descriptions-item>
              <nz-descriptions-item [nzTitle]="'evs.viewEvsBySelfHTSV.position' | translate:'Ch\u1EE9c v\u1EE5'">{{ info.postGradeName }}</nz-descriptions-item>
              <nz-descriptions-item [nzTitle]="'evs.viewEvsBySelfHTSV.dept' | translate:'Ph\xF2ng ban'">{{ info.deptname }}</nz-descriptions-item>
              <nz-descriptions-item [nzTitle]="'evs.viewEvsBySelfHTSV.hireDate' | translate:'Ng\xE0y v\xE0o l\xE0m'">{{ info.dateStarted }}</nz-descriptions-item>
            </nz-descriptions>
          </div>
          <div class="col-md-6">
            <nz-descriptions nzBordered nzSize="small" [nzColumn]="1"
                              [nzTitle]="'evs.viewEvsBySelfHTSV.evalCategory' | translate:'H\u1EA1ng m\u1EE5c \u0111\xE1nh gi\xE1'">
              <nz-descriptions-item [nzTitle]="'evs.viewEvsBySelfHTSV.evalYear' | translate:'N\u0103m \u0111\xE1nh gi\xE1'">{{ info.evsYear }}</nz-descriptions-item>
              <nz-descriptions-item [nzTitle]="'evs.viewEvsBySelfHTSV.period' | translate:'Th\u1EDDi gian'">{{ info.evsStartDate }}{{ info.evsEndDate ? '~' + info.evsEndDate : '' }}</nz-descriptions-item>
              <nz-descriptions-item [nzTitle]="'evs.viewEvsBySelfHTSV.appraiser1' | translate:'Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 l\u1EA7n 1'">{{ info.localName1 }}</nz-descriptions-item>
              <nz-descriptions-item [nzTitle]="'evs.viewEvsBySelfHTSV.appraiser2' | translate:'Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 l\u1EA7n 2'">{{ info.localName2 }}</nz-descriptions-item>
            </nz-descriptions>
          </div>
        </div>
      </nz-card>

      <!-- B\u1EA3ng m\u1EE5c ti\xEAu \u0111\xE1nh gi\xE1 b\u1EA3n th\xE2n -->
      <nz-card class="mb-3">
        <div class="d-flex align-items-center justify-content-between mb-2">
          <span class="fw-bold">{{ 'evs.viewEvsBySelfHTSV.objectiveTitle' | translate:'M\u1EE5c ti\xEAu \u0111\xE1nh gi\xE1 b\u1EA3n th\xE2n' }}</span>
          <div class="d-flex gap-1" *ngIf="isEditable">
            <button nz-button nzSize="small" type="button" (click)="save('0')">
              {{ 'evs.viewEvsBySelfHTSV.btnSaveDraft' | translate:'L\u01B0u t\u1EA1m th\u1EDDi' }}
            </button>
            <button nz-button nzType="primary" nzSize="small" type="button" (click)="save('1')">
              {{ 'evs.viewEvsBySelfHTSV.btnExecute' | translate:'Th\u1EF1c hi\u1EC7n' }}
            </button>
          </div>
        </div>

        <div class="table-responsive">
          <nz-table [nzData]="rows()" [nzShowPagination]="false" nzSize="small">
            <thead>
              <tr>
                <th class="text-center" style="width:48px;">{{ 'evs.viewEvsBySelfHTSV.col.no' | translate:'No' }}</th>
                <th style="width:220px;">{{ 'evs.viewEvsBySelfHTSV.col.evalItem' | translate:'H\u1EA1ng m\u1EE5c \u0111\xE1nh gi\xE1' }}</th>
                <th>{{ 'evs.viewEvsBySelfHTSV.col.target' | translate:'M\u1EE5c ti\xEAu' }}</th>
                <th class="text-center" style="width:90px;">{{ 'evs.viewEvsBySelfHTSV.col.ratio' | translate:'T\u1EF7 l\u1EC7(%)' }}</th>
                <th class="text-center" style="width:130px;">{{ 'evs.viewEvsBySelfHTSV.col.selfScore' | translate:'\u0110i\u1EC3m \u0111\xE1nh gi\xE1 b\u1EA3n th\xE2n (%)' }}</th>
                <th class="text-center" style="width:100px;">{{ 'evs.viewEvsBySelfHTSV.col.total' | translate:'T\u1ED5ng' }}</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngIf="rows().length === 0">
                <td colspan="6" class="text-center text-muted">0</td>
              </tr>
              <tr *ngFor="let row of rows(); let i = index">
                <td class="text-center">{{ i + 1 }}</td>
                <td>{{ row.itemName }}</td>
                <td class="vebsh-rich-content"><div [innerHTML]="row.itemContent"></div></td>
                <td class="text-center">{{ row.ratio }}</td>
                <td class="text-center">
                  <input nz-input type="number" min="0" [attr.max]="row.ratio" step="0.01"
                         class="vebsh-score-input" [(ngModel)]="row.evsScore" [readonly]="!isEditable"
                         (ngModelChange)="onScoreInput(row)">
                </td>
                <td class="text-center">{{ row.rowTotal > 0 ? row.rowTotal : '-' }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="5" class="text-end fw-bold small">Total</td>
                <td class="text-center fw-bold">{{ totalScore() }}</td>
              </tr>
            </tfoot>
          </nz-table>
        </div>
      </nz-card>

      <!-- Ph\u1EA7n 2: Th\xE0nh t\xEDch v\xE0 H\u1EA1n ch\u1EBF c\u1EE7a b\u1EA3n th\xE2n -->
      <nz-card>
        <div class="fw-bold mb-2 border-bottom pb-1">{{ 'evs.viewEvsBySelfHTSV.part2' | translate:'Ph\u1EA7n 2: Th\xE0nh t\xEDch v\xE0 H\u1EA1n ch\u1EBF c\u1EE7a b\u1EA3n th\xE2n' }}</div>
        <table class="table table-bordered table-sm mb-0">
          <thead class="table-light text-center">
            <tr>
              <th style="width:160px;"></th>
              <th>{{ 'evs.viewEvsBySelfHTSV.col.achievement' | translate:'Th\xE0nh t\xEDch' }}</th>
              <th>{{ 'evs.viewEvsBySelfHTSV.col.limitation' | translate:'H\u1EA1n ch\u1EBF' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-muted small align-middle">{{ 'evs.result.col.self' | translate:'B\u1EA3n th\xE2n' }}</td>
              <td><textarea nz-input rows="3" style="resize:none;" [(ngModel)]="achiev0" [readonly]="!isEditable"></textarea></td>
              <td><textarea nz-input rows="3" style="resize:none;" [(ngModel)]="limit0" [readonly]="!isEditable"></textarea></td>
            </tr>
            <tr>
              <td class="text-muted small align-middle">{{ 'evs.viewEvsBySelfHTSV.appraiser1Comment' | translate:'Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 c\u1EA5p 1' }}</td>
              <td><textarea nz-input rows="3" readonly style="resize:none;">{{ info.affirmC1L1 }}</textarea></td>
              <td><textarea nz-input rows="3" readonly style="resize:none;">{{ info.affirmC2L1 }}</textarea></td>
            </tr>
            <tr>
              <td class="text-muted small align-middle">{{ 'evs.viewEvsBySelfHTSV.appraiser2Comment' | translate:'Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 c\u1EA5p 2' }}</td>
              <td><textarea nz-input rows="3" readonly style="resize:none;">{{ info.affirmC1L2 }}</textarea></td>
              <td><textarea nz-input rows="3" readonly style="resize:none;">{{ info.affirmC2L2 }}</textarea></td>
            </tr>
          </tbody>
        </table>
      </nz-card>
    </ng-container>
  </div>
</div>
`, styles: ["/* src/app/evs-by-self-htsv/evs-by-self-htsv.component.css */\n.vebsh-rich-content p {\n  margin: 0;\n}\n.vebsh-rich-content ul,\n.vebsh-rich-content ol {\n  margin: 0;\n  padding-left: 1.2em;\n}\n.vebsh-score-input {\n  width: 100px;\n  text-align: center;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=evs-by-self-htsv.component.css.map */\n"] }]
  }], () => [{ type: EvsBySelfHtsvService }, { type: I18nService }, { type: NzMessageService }, { type: NzModalService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EvsBySelfHtsvComponent, { className: "EvsBySelfHtsvComponent", filePath: "src/app/evs-by-self-htsv/evs-by-self-htsv.component.ts", lineNumber: 89 });
})();
export {
  EvsBySelfHtsvComponent
};
//# debugId=9ce98aba-8f5d-5a72-85bf-1c75e8f7e8b4
//# sourceMappingURL=chunk-UGPR7AU3.js.map
