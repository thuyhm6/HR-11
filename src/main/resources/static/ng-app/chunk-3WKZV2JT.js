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

// src/app/confirm-target1/confirm-target1.service.ts
var API_BASE = "/evs/manage/api";
var ConfirmTarget1Service = class _ConfirmTarget1Service {
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
  getObjectList(params) {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      httpParams = httpParams.set(key, String(value));
    }
    return this.http.get(`${API_BASE}/confirmTarget1/objectList`, {
      params: httpParams,
      withCredentials: true
    });
  }
  getObjectInfo(evsObjectSeq) {
    return this.http.get(`${API_BASE}/confirmTarget1/objectInfo`, {
      params: new HttpParams().set("evsObjectSeq", evsObjectSeq),
      withCredentials: true
    });
  }
  getItemList(evsObjectSeq) {
    return this.http.get(`${API_BASE}/personalTarget/itemList`, {
      params: new HttpParams().set("evsObjectSeq", evsObjectSeq),
      withCredentials: true
    });
  }
  confirm(payload) {
    return this.http.post(`${API_BASE}/confirmTarget1/confirm`, payload, { withCredentials: true });
  }
  static \u0275fac = function ConfirmTarget1Service_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmTarget1Service)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ConfirmTarget1Service, factory: _ConfirmTarget1Service.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmTarget1Service, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/confirm-target1/confirm-target1.component.ts
var _c0 = () => ({ "max-height": "75vh", "overflow-y": "auto" });
function ConfirmTarget1Component_nz_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 15);
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    \u0275\u0275property("nzValue", r_r1.seq)("nzLabel", r_r1.resumeName);
  }
}
function ConfirmTarget1Component_nz_alert_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 16);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("nzMessage", \u0275\u0275pipeBind2(1, 1, "evs.viewConfirmTarget1.msg.notInEvalPeriod", "Kh\xF4ng trong kho\u1EA3ng th\u1EDDi gian \u0111\xE1nh gi\xE1 ho\u1EB7c b\u1EA1n kh\xF4ng ph\u1EA3i l\xE0 ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1, xin li\xEAn h\u1EC7 Ph\xF2ng nh\xE2n s\u1EF1!"));
  }
}
function ConfirmTarget1Component_nz_card_17_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 27);
    \u0275\u0275text(2, "0");
    \u0275\u0275elementEnd()();
  }
}
function ConfirmTarget1Component_nz_card_17_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 28);
    \u0275\u0275listener("click", function ConfirmTarget1Component_nz_card_17_tr_38_Template_tr_click_0_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.rowClick(row_r5));
    });
    \u0275\u0275elementStart(1, "td", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 29);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 29);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 29);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("vct1-active", ctx_r2.currentObjectSeq() === row_r5.seq)("vct1-clickable", row_r5.activity === ctx_r2.CONFIRM_ACTIVITY);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r2.pageIndex - 1) * ctx_r2.pageSize + i_r6 + 1);
    \u0275\u0275advance();
    \u0275\u0275classProp("vct1-blue-name", row_r5.activity === ctx_r2.CONFIRM_ACTIVITY);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.empid);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.deptname || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.deptname);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.postGradeName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.postGradeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.objectTypeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.activityName);
  }
}
function ConfirmTarget1Component_nz_card_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-card")(1, "div", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 18);
    \u0275\u0275text(7, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "nz-table", 19);
    \u0275\u0275listener("nzPageIndexChange", function ConfirmTarget1Component_nz_card_17_Template_nz_table_nzPageIndexChange_12_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageIndexChange($event));
    })("nzPageSizeChange", function ConfirmTarget1Component_nz_card_17_Template_nz_table_nzPageSizeChange_12_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPageSizeChange($event));
    });
    \u0275\u0275elementStart(13, "thead")(14, "tr")(15, "th", 20);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 21);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th", 22);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th", 23);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th", 24);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "th", 25);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "tbody");
    \u0275\u0275template(37, ConfirmTarget1Component_nz_card_17_tr_37_Template, 3, 0, "tr", 12)(38, ConfirmTarget1Component_nz_card_17_tr_38_Template, 15, 15, "tr", 26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 20, "evs.viewConfirmTarget1.currentEmp", "Nh\xE2n vi\xEAn hi\u1EC7n t\u1EA1i"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.rows().length);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 23, "evs.viewConfirmTarget1.totalEmp", "Nh\xE2n vi\xEAn \u0111\xE1nh gi\xE1 \u0111\u1ED1i t\u01B0\u1EE3ng"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.recordsTotal());
    \u0275\u0275advance();
    \u0275\u0275property("nzData", ctx_r2.rows())("nzFrontPagination", false)("nzLoading", ctx_r2.loading())("nzTotal", ctx_r2.recordsTotal())("nzPageIndex", ctx_r2.pageIndex)("nzPageSize", ctx_r2.pageSize)("nzPageSizeOptions", ctx_r2.pageSizeOptions);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 26, "evs.viewConfirmTarget1.col.no", "No"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 29, "evs.viewConfirmTarget1.col.fullName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 32, "evs.viewConfirmTarget1.col.empid", "M\xE3 NV"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 35, "evs.viewConfirmTarget1.col.dept", "Ph\xF2ng ban"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 38, "evs.viewConfirmTarget1.col.position", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 41, "evs.viewConfirmTarget1.col.objectType", "\u0110\u1ED1i t\u01B0\u1EE3ng"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 44, "evs.viewConfirmTarget1.col.status", "Tr\u1EA1ng th\xE1i"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r2.loading() && ctx_r2.rows().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.rows());
  }
}
function ConfirmTarget1Component_ng_container_20_ng_container_1_tr_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 53);
    \u0275\u0275text(2, "0");
    \u0275\u0275elementEnd()();
  }
}
function ConfirmTarget1Component_ng_container_20_ng_container_1_tr_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275element(6, "div", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 29);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r9 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r8.itemName);
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", item_r8.itemContent, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r8.itemScore);
  }
}
function ConfirmTarget1Component_ng_container_20_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 31)(5, "div", 32)(6, "nz-descriptions", 33);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementStart(8, "nz-descriptions-item", 34);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "nz-descriptions-item", 34);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "nz-descriptions-item", 34);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "nz-descriptions-item", 34);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 32)(21, "nz-descriptions", 33);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementStart(23, "nz-descriptions-item", 34);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "nz-descriptions-item", 34);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "nz-descriptions-item", 34);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "nz-descriptions-item", 34);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 35);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 36)(39, "nz-table", 37)(40, "thead")(41, "tr")(42, "th", 38);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th", 39);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th");
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "th", 40);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "tbody");
    \u0275\u0275template(55, ConfirmTarget1Component_ng_container_20_ng_container_1_tr_55_Template, 3, 0, "tr", 12)(56, ConfirmTarget1Component_ng_container_20_ng_container_1_tr_56_Template, 9, 4, "tr", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "tfoot")(58, "tr")(59, "td", 42);
    \u0275\u0275text(60, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "td", 43);
    \u0275\u0275text(62);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(63, "div", 30);
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "table", 44)(67, "thead", 45)(68, "tr");
    \u0275\u0275element(69, "th", 46);
    \u0275\u0275elementStart(70, "th");
    \u0275\u0275text(71);
    \u0275\u0275pipe(72, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(73, "tbody")(74, "tr")(75, "td", 47);
    \u0275\u0275text(76);
    \u0275\u0275pipe(77, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "td")(79, "textarea", 48);
    \u0275\u0275twoWayListener("ngModelChange", function ConfirmTarget1Component_ng_container_20_ng_container_1_Template_textarea_ngModelChange_79_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.affirmComment1, $event) || (ctx_r2.affirmComment1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "tr")(81, "td", 47);
    \u0275\u0275text(82);
    \u0275\u0275pipe(83, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "td")(85, "textarea", 48);
    \u0275\u0275twoWayListener("ngModelChange", function ConfirmTarget1Component_ng_container_20_ng_container_1_Template_textarea_ngModelChange_85_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.affirmComment2, $event) || (ctx_r2.affirmComment2 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(86, "div", 49)(87, "button", 50);
    \u0275\u0275listener("click", function ConfirmTarget1Component_ng_container_20_ng_container_1_Template_button_click_87_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.confirmAction("1"));
    });
    \u0275\u0275text(88);
    \u0275\u0275pipe(89, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "button", 51);
    \u0275\u0275listener("click", function ConfirmTarget1Component_ng_container_20_ng_container_1_Template_button_click_90_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.confirmAction("0"));
    });
    \u0275\u0275text(91);
    \u0275\u0275pipe(92, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "button", 52);
    \u0275\u0275listener("click", function ConfirmTarget1Component_ng_container_20_ng_container_1_Template_button_click_93_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeModal());
    });
    \u0275\u0275text(94);
    \u0275\u0275pipe(95, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const info_r10 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 43, "evs.viewConfirmTarget1.personalInfo", "Th\xF4ng tin c\xE1 nh\xE2n"));
    \u0275\u0275advance(4);
    \u0275\u0275property("nzColumn", 1)("nzTitle", \u0275\u0275pipeBind2(7, 46, "evs.viewConfirmTarget1.basicInfo", "Th\xF4ng tin c\u01A1 b\u1EA3n"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(9, 49, "evs.viewConfirmTarget1.fullName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r10.localName);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(12, 52, "evs.viewConfirmTarget1.position", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r10.postGradeName);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(15, 55, "evs.viewConfirmTarget1.dept", "Ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r10.deptname);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(18, 58, "evs.viewConfirmTarget1.hireDate", "Ng\xE0y v\xE0o l\xE0m"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r10.dateStarted);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColumn", 1)("nzTitle", \u0275\u0275pipeBind2(22, 61, "evs.viewConfirmTarget1.evalCategory", "H\u1EA1ng m\u1EE5c \u0111\xE1nh gi\xE1"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(24, 64, "evs.viewConfirmTarget1.evalYear", "N\u0103m \u0111\xE1nh gi\xE1"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r10.evsYear);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(27, 67, "evs.viewConfirmTarget1.period", "Th\u1EDDi gian"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", info_r10.evsStartDate, "", info_r10.evsEndDate ? "~" + info_r10.evsEndDate : "");
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(30, 70, "evs.viewConfirmTarget1.appraiser1", "Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 l\u1EA7n 1"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r10.localName1);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(33, 73, "evs.viewConfirmTarget1.appraiser2", "Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 l\u1EA7n 2"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r10.localName2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 76, "evs.viewConfirmTarget1.objectiveConfirm", "Objective Confirm"));
    \u0275\u0275advance(3);
    \u0275\u0275property("nzData", ctx_r2.items())("nzShowPagination", false);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 79, "evs.viewConfirmTarget1.col.no", "No"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(47, 82, "evs.viewConfirmTarget1.col.evalItem", "H\u1EA1ng m\u1EE5c \u0111\xE1nh gi\xE1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 85, "evs.viewConfirmTarget1.col.target", "M\u1EE5c ti\xEAu"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(53, 88, "evs.viewConfirmTarget1.col.ratio", "T\u1EF7 l\u1EC7(%)"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.items().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.items());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.totalScore());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(65, 91, "evs.viewConfirmTarget1.part2", "Ph\u1EA7n 2"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(72, 94, "evs.viewConfirmTarget1.col.opinion", "\xDD ki\u1EBFn"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(77, 97, "evs.viewConfirmTarget1.appraiser1Comment", "Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 c\u1EA5p 1"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.affirmComment1);
    \u0275\u0275property("readonly", ctx_r2.comment1Readonly);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(83, 100, "evs.viewConfirmTarget1.appraiser2Comment", "Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 c\u1EA5p 2"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.affirmComment2);
    \u0275\u0275property("readonly", ctx_r2.comment2Readonly);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(89, 103, "evs.viewConfirmTarget1.btnConfirm", "X\xE1c nh\u1EADn"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(92, 106, "evs.viewConfirmTarget1.btnReject", "T\u1EEB ch\u1ED1i"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(95, 109, "evs.viewConfirmTarget1.btnClose", "\u0110\xF3ng"), " ");
  }
}
function ConfirmTarget1Component_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ConfirmTarget1Component_ng_container_20_ng_container_1_Template, 96, 112, "ng-container", 12);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.personalInfo());
  }
}
var I18N_KEYS = [
  "evs.viewConfirmTarget1.evalName",
  "evs.viewConfirmTarget1.btnSearch",
  "evs.viewConfirmTarget1.currentEmp",
  "evs.viewConfirmTarget1.totalEmp",
  "evs.viewConfirmTarget1.col.no",
  "evs.viewConfirmTarget1.col.fullName",
  "evs.viewConfirmTarget1.col.empid",
  "evs.viewConfirmTarget1.col.dept",
  "evs.viewConfirmTarget1.col.position",
  "evs.viewConfirmTarget1.col.objectType",
  "evs.viewConfirmTarget1.col.status",
  "evs.viewConfirmTarget1.personalInfo",
  "evs.viewConfirmTarget1.basicInfo",
  "evs.viewConfirmTarget1.evalCategory",
  "evs.viewConfirmTarget1.fullName",
  "evs.viewConfirmTarget1.position",
  "evs.viewConfirmTarget1.dept",
  "evs.viewConfirmTarget1.hireDate",
  "evs.viewConfirmTarget1.evalYear",
  "evs.viewConfirmTarget1.period",
  "evs.viewConfirmTarget1.appraiser1",
  "evs.viewConfirmTarget1.appraiser2",
  "evs.viewConfirmTarget1.objectiveConfirm",
  "evs.viewConfirmTarget1.col.evalItem",
  "evs.viewConfirmTarget1.col.target",
  "evs.viewConfirmTarget1.col.ratio",
  "evs.viewConfirmTarget1.part2",
  "evs.viewConfirmTarget1.col.opinion",
  "evs.viewConfirmTarget1.appraiser1Comment",
  "evs.viewConfirmTarget1.appraiser2Comment",
  "evs.viewConfirmTarget1.modalTitle",
  "evs.viewConfirmTarget1.btnConfirm",
  "evs.viewConfirmTarget1.btnReject",
  "evs.viewConfirmTarget1.btnClose",
  "evs.viewConfirmTarget1.msg.selectEvalFirst",
  "evs.viewConfirmTarget1.msg.noData",
  "evs.viewConfirmTarget1.msg.notInEvalPeriod",
  "evs.viewConfirmTarget1.msg.selectEmployee",
  "evs.viewConfirmTarget1.msg.confirmSuccess",
  "evs.viewConfirmTarget1.msg.rejectSuccess",
  "evs.viewConfirmTarget1.msg.actionFail",
  "evs.viewConfirmTarget1.msg.confirmAction",
  "evs.viewConfirmTarget1.msg.rejectAction",
  "common.confirm",
  "common.cancel",
  "common.loadFail"
];
var EVS_LEVEL_CONFIRM = "14015084";
var CONFIRM_ACTIVITY = "14015364";
var PAGE_SIZE_OPTIONS = [50, 100, 200];
var ConfirmTarget1Component = class _ConfirmTarget1Component {
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
  CONFIRM_ACTIVITY = CONFIRM_ACTIVITY;
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
  recordsTotal = signal(
    0,
    ...ngDevMode ? [{ debugName: "recordsTotal" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pageIndex = 1;
  pageSize = 50;
  currentObjectSeq = signal(
    null,
    ...ngDevMode ? [{ debugName: "currentObjectSeq" }] : (
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
  detailLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "detailLoading" }] : (
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
  items = signal(
    [],
    ...ngDevMode ? [{ debugName: "items" }] : (
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
  affirmComment1 = "";
  affirmComment2 = "";
  evsType = "";
  affirmLevel = "1";
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.route.queryParamMap.subscribe((params) => {
      this.evsType = params.get("evsType") ?? "";
      this.affirmLevel = params.get("AFFIRM_LEVEL") || "1";
      this.loadResumeList();
    });
  }
  get comment1Readonly() {
    return this.affirmLevel === "2";
  }
  get comment2Readonly() {
    return this.affirmLevel !== "2";
  }
  loadResumeList() {
    this.api.getResumeList(this.evsType, EVS_LEVEL_CONFIRM).subscribe({
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
      this.message.warning(this.i18n.t("evs.viewConfirmTarget1.msg.selectEvalFirst", "Vui l\xF2ng ch\u1ECDn t\xEAn \u0111\xE1nh gi\xE1 tr\u01B0\u1EDBc."));
      return;
    }
    this.pageIndex = 1;
    this.closeModal();
    this.loadPage();
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
      affirmLevel: this.affirmLevel,
      draw: this.pageIndex,
      start: (this.pageIndex - 1) * this.pageSize,
      length: this.pageSize
    }).subscribe({
      next: (res) => {
        this.rows.set(res.data ?? []);
        this.recordsTotal.set(res.recordsTotal ?? 0);
        this.loading.set(false);
      },
      error: () => {
        this.rows.set([]);
        this.recordsTotal.set(0);
        this.loading.set(false);
      }
    });
  }
  rowClick(row) {
    if (row.activity !== CONFIRM_ACTIVITY)
      return;
    this.currentObjectSeq.set(row.seq);
    this.loadDetail(row.seq);
  }
  loadDetail(evsObjectSeq) {
    this.detailLoading.set(true);
    this.api.getObjectInfo(evsObjectSeq).subscribe({
      next: (data) => {
        this.detailLoading.set(false);
        if (!data || !data.seq) {
          this.currentObjectSeq.set(null);
          return;
        }
        this.personalInfo.set(data);
        this.affirmComment1 = data.affirmComment1 || "";
        this.affirmComment2 = data.affirmComment2 || "";
        this.loadItems(evsObjectSeq);
        this.modalVisible.set(true);
      },
      error: () => {
        this.detailLoading.set(false);
        this.currentObjectSeq.set(null);
      }
    });
  }
  loadItems(evsObjectSeq) {
    this.api.getItemList(evsObjectSeq).subscribe({
      next: (list) => {
        this.items.set(list ?? []);
        const total = (list ?? []).reduce((sum, r) => sum + (Number(r.itemScore) || 0), 0);
        this.totalScore.set(Math.round(total * 100) / 100);
      },
      error: () => {
        this.items.set([]);
        this.totalScore.set(0);
      }
    });
  }
  closeModal() {
    this.modalVisible.set(false);
    this.currentObjectSeq.set(null);
  }
  confirmAction(flag) {
    const objectSeq = this.currentObjectSeq();
    if (!objectSeq) {
      this.message.warning(this.i18n.t("evs.viewConfirmTarget1.msg.selectEmployee", "Vui l\xF2ng ch\u1ECDn nh\xE2n vi\xEAn tr\u01B0\u1EDBc."));
      return;
    }
    const t = (key, fallback) => this.i18n.t(key, fallback);
    const content = flag === "1" ? t("evs.viewConfirmTarget1.msg.confirmAction", "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xE1c nh\u1EADn m\u1EE5c ti\xEAu c\u1EE7a nh\xE2n vi\xEAn n\xE0y?") : t("evs.viewConfirmTarget1.msg.rejectAction", "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n t\u1EEB ch\u1ED1i m\u1EE5c ti\xEAu c\u1EE7a nh\xE2n vi\xEAn n\xE0y?");
    this.modal.confirm({
      nzTitle: t("common.confirm", "X\xE1c nh\u1EADn"),
      nzContent: content,
      nzOnOk: () => this.doConfirm(objectSeq, flag)
    });
  }
  doConfirm(objectSeq, flag) {
    const t = (key, fallback) => this.i18n.t(key, fallback);
    const affirmComment = this.affirmLevel === "2" ? this.affirmComment2 : this.affirmComment1;
    this.api.confirm({ evsObjectSeq: objectSeq, affirmComment, affirmLevel: this.affirmLevel, flag }).subscribe({
      next: (res) => {
        if (res.success) {
          this.message.success(flag === "1" ? t("evs.viewConfirmTarget1.msg.confirmSuccess", "X\xE1c nh\u1EADn th\xE0nh c\xF4ng!") : t("evs.viewConfirmTarget1.msg.rejectSuccess", "T\u1EEB ch\u1ED1i th\xE0nh c\xF4ng!"));
          this.closeModal();
          this.loadPage();
        } else {
          this.message.error(res.message || t("evs.viewConfirmTarget1.msg.actionFail", "L\u1ED7i khi th\u1EF1c hi\u1EC7n. Vui l\xF2ng th\u1EED l\u1EA1i."));
        }
      },
      error: () => this.message.error(t("evs.viewConfirmTarget1.msg.actionFail", "L\u1ED7i khi th\u1EF1c hi\u1EC7n. Vui l\xF2ng th\u1EED l\u1EA1i."))
    });
  }
  static \u0275fac = function ConfirmTarget1Component_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmTarget1Component)(\u0275\u0275directiveInject(ConfirmTarget1Service), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService), \u0275\u0275directiveInject(NzModalService), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmTarget1Component, selectors: [["app-confirm-target1"]], decls: 21, vars: 24, consts: [[1, "row"], [1, "col-12"], [1, "mb-3"], [1, "row", "g-3", "align-items-end", 3, "ngSubmit"], [1, "col-md-4"], [1, "form-label"], ["name", "resumeSeq", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col-md-2"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nzType", "warning", "nzShowIcon", "", 3, "nzMessage", 4, "ngIf"], [4, "ngIf"], ["nzWidth", "90vw", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzBodyStyle", "nzFooter"], [4, "nzModalContent"], [3, "nzValue", "nzLabel"], ["nzType", "warning", "nzShowIcon", "", 3, "nzMessage"], [1, "small", "text-muted", "mb-2"], [1, "mx-1"], ["nzShowSizeChanger", "", "nzSize", "small", 1, "table-nowrap", 3, "nzPageIndexChange", "nzPageSizeChange", "nzData", "nzFrontPagination", "nzLoading", "nzTotal", "nzPageIndex", "nzPageSize", "nzPageSizeOptions"], ["nzWidth", "48px", 1, "text-center"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "140px"], ["nzWidth", "120px"], ["nzWidth", "100px", 1, "text-center"], ["nzWidth", "170px", 1, "text-center"], [3, "vct1-active", "vct1-clickable", "click", 4, "ngFor", "ngForOf"], ["colspan", "7", 1, "text-center", "text-muted"], [3, "click"], [1, "text-center"], [1, "fw-bold", "mb-2", "border-bottom", "pb-1"], [1, "row", "g-3", "mb-3"], [1, "col-md-6"], ["nzBordered", "", "nzSize", "small", 3, "nzColumn", "nzTitle"], [3, "nzTitle"], [1, "fw-bold", "mb-1"], [1, "table-responsive", "mb-3"], ["nzSize", "small", 3, "nzData", "nzShowPagination"], [1, "text-center", 2, "width", "48px"], [2, "width", "220px"], [1, "text-center", 2, "width", "90px"], [4, "ngFor", "ngForOf"], ["colspan", "3", 1, "text-end", "fw-bold", "small"], [1, "text-center", "fw-bold"], [1, "table", "table-bordered", "table-sm", "mb-0"], [1, "table-light", "text-center"], [2, "width", "160px"], [1, "text-muted", "small", "align-middle"], ["nz-input", "", "rows", "4", 2, "resize", "none", 3, "ngModelChange", "ngModel", "readonly"], [1, "d-flex", "justify-content-end", "gap-2", "mt-3"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], ["nz-button", "", "nzDanger", "", "type", "button", 3, "click"], ["nz-button", "", "type", "button", 3, "click"], ["colspan", "4", 1, "text-center", "text-muted"], [3, "innerHTML"]], template: function ConfirmTarget1Component_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "nz-card", 2)(3, "form", 3);
      \u0275\u0275listener("ngSubmit", function ConfirmTarget1Component_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 4)(5, "label", 5);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "nz-select", 6);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ConfirmTarget1Component_Template_nz_select_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.resumeSeq, $event) || (ctx.resumeSeq = $event);
        return $event;
      });
      \u0275\u0275template(10, ConfirmTarget1Component_nz_option_10_Template, 1, 2, "nz-option", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 8)(12, "button", 9);
      \u0275\u0275element(13, "i", 10);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(16, ConfirmTarget1Component_nz_alert_16_Template, 2, 4, "nz-alert", 11)(17, ConfirmTarget1Component_nz_card_17_Template, 39, 47, "nz-card", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "nz-modal", 13);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275listener("nzOnCancel", function ConfirmTarget1Component_Template_nz_modal_nzOnCancel_18_listener() {
        return ctx.closeModal();
      });
      \u0275\u0275template(20, ConfirmTarget1Component_ng_container_20_Template, 2, 1, "ng-container", 14);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 11, "evs.viewConfirmTarget1.evalName", "T\xEAn \u0111\xE1nh gi\xE1"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.resumeSeq);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(9, 14, "common.select", "Ch\u1ECDn"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.resumeOptions());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(15, 17, "evs.viewConfirmTarget1.btnSearch", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.noticeVisible());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.noticeVisible());
      \u0275\u0275advance();
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", \u0275\u0275pipeBind2(19, 20, "evs.viewConfirmTarget1.modalTitle", "X\xE1c nh\u1EADn m\u1EE5c ti\xEAu"))("nzBodyStyle", \u0275\u0275pureFunction0(23, _c0))("nzFooter", null);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzInputModule, NzInputDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, NzDescriptionsModule, NzDescriptionsComponent, NzDescriptionsItemComponent, TranslatePipe], styles: ["\n.vct1-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.vct1-clickable[_ngcontent-%COMP%]:hover {\n  background-color: #f0f4ff;\n}\n.vct1-active[_ngcontent-%COMP%] {\n  background-color: #cce5ff !important;\n}\n.vct1-blue-name[_ngcontent-%COMP%] {\n  color: #0d6efd;\n  font-weight: 500;\n}\n/*# sourceMappingURL=confirm-target1.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmTarget1Component, [{
    type: Component,
    args: [{ selector: "app-confirm-target1", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzSelectModule,
      NzButtonModule,
      NzInputModule,
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
          <label class="form-label">{{ 'evs.viewConfirmTarget1.evalName' | translate:'T\xEAn \u0111\xE1nh gi\xE1' }}</label>
          <nz-select class="w-100" [(ngModel)]="resumeSeq" name="resumeSeq"
                     [nzPlaceHolder]="'common.select' | translate:'Ch\u1ECDn'">
            <nz-option *ngFor="let r of resumeOptions()" [nzValue]="r.seq" [nzLabel]="r.resumeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-2">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'evs.viewConfirmTarget1.btnSearch' | translate:'Tra c\u1EE9u' }}
          </button>
        </div>
      </form>
    </nz-card>

    <!-- Kh\xF4ng c\xF3 quy\u1EC1n \u0111\xE1nh gi\xE1 / kh\xF4ng c\xF3 d\u1EEF li\u1EC7u -->
    <nz-alert *ngIf="noticeVisible()" nzType="warning" nzShowIcon
              [nzMessage]="'evs.viewConfirmTarget1.msg.notInEvalPeriod' | translate:'Kh\xF4ng trong kho\u1EA3ng th\u1EDDi gian \u0111\xE1nh gi\xE1 ho\u1EB7c b\u1EA1n kh\xF4ng ph\u1EA3i l\xE0 ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1, xin li\xEAn h\u1EC7 Ph\xF2ng nh\xE2n s\u1EF1!'">
    </nz-alert>

    <!-- Danh s\xE1ch nh\xE2n vi\xEAn c\u1EA7n x\xE1c nh\u1EADn -->
    <nz-card *ngIf="!noticeVisible()">
      <div class="small text-muted mb-2">
        {{ 'evs.viewConfirmTarget1.currentEmp' | translate:'Nh\xE2n vi\xEAn hi\u1EC7n t\u1EA1i' }}: <strong>{{ rows().length }}</strong>
        <span class="mx-1">/</span>
        {{ 'evs.viewConfirmTarget1.totalEmp' | translate:'Nh\xE2n vi\xEAn \u0111\xE1nh gi\xE1 \u0111\u1ED1i t\u01B0\u1EE3ng' }}: <strong>{{ recordsTotal() }}</strong>
      </div>

      <nz-table [nzData]="rows()" [nzFrontPagination]="false" [nzLoading]="loading()"
                [nzTotal]="recordsTotal()" [nzPageIndex]="pageIndex" [nzPageSize]="pageSize"
                [nzPageSizeOptions]="pageSizeOptions" nzShowSizeChanger
                (nzPageIndexChange)="onPageIndexChange($event)" (nzPageSizeChange)="onPageSizeChange($event)"
                nzSize="small" class="table-nowrap">
        <thead>
          <tr>
            <th class="text-center" nzWidth="48px">{{ 'evs.viewConfirmTarget1.col.no' | translate:'No' }}</th>
            <th>{{ 'evs.viewConfirmTarget1.col.fullName' | translate:'H\u1ECD t\xEAn' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'evs.viewConfirmTarget1.col.empid' | translate:'M\xE3 NV' }}</th>
            <th nzWidth="140px">{{ 'evs.viewConfirmTarget1.col.dept' | translate:'Ph\xF2ng ban' }}</th>
            <th nzWidth="120px">{{ 'evs.viewConfirmTarget1.col.position' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'evs.viewConfirmTarget1.col.objectType' | translate:'\u0110\u1ED1i t\u01B0\u1EE3ng' }}</th>
            <th class="text-center" nzWidth="170px">{{ 'evs.viewConfirmTarget1.col.status' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="7" class="text-center text-muted">0</td>
          </tr>
          <tr *ngFor="let row of rows(); let i = index"
              [class.vct1-active]="currentObjectSeq() === row.seq"
              [class.vct1-clickable]="row.activity === CONFIRM_ACTIVITY"
              (click)="rowClick(row)">
            <td class="text-center">{{ (pageIndex - 1) * pageSize + i + 1 }}</td>
            <td [class.vct1-blue-name]="row.activity === CONFIRM_ACTIVITY">{{ row.localName }}</td>
            <td class="text-center">{{ row.empid }}</td>
            <td [attr.title]="row.deptname || null">{{ row.deptname }}</td>
            <td [attr.title]="row.postGradeName || null">{{ row.postGradeName }}</td>
            <td class="text-center">{{ row.objectTypeName }}</td>
            <td class="text-center">{{ row.activityName }}</td>
          </tr>
        </tbody>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal chi ti\u1EBFt x\xE1c nh\u1EADn m\u1EE5c ti\xEAu -->
<nz-modal [nzVisible]="modalVisible()" [nzTitle]="'evs.viewConfirmTarget1.modalTitle' | translate:'X\xE1c nh\u1EADn m\u1EE5c ti\xEAu'"
          nzWidth="90vw" [nzBodyStyle]="{ 'max-height': '75vh', 'overflow-y': 'auto' }"
          (nzOnCancel)="closeModal()" [nzFooter]="null">
  <ng-container *nzModalContent>
    <ng-container *ngIf="personalInfo() as info">
      <!-- Th\xF4ng tin c\xE1 nh\xE2n -->
      <div class="fw-bold mb-2 border-bottom pb-1">{{ 'evs.viewConfirmTarget1.personalInfo' | translate:'Th\xF4ng tin c\xE1 nh\xE2n' }}</div>
      <div class="row g-3 mb-3">
        <div class="col-md-6">
          <nz-descriptions nzBordered nzSize="small" [nzColumn]="1"
                            [nzTitle]="'evs.viewConfirmTarget1.basicInfo' | translate:'Th\xF4ng tin c\u01A1 b\u1EA3n'">
            <nz-descriptions-item [nzTitle]="'evs.viewConfirmTarget1.fullName' | translate:'H\u1ECD t\xEAn'">{{ info.localName }}</nz-descriptions-item>
            <nz-descriptions-item [nzTitle]="'evs.viewConfirmTarget1.position' | translate:'Ch\u1EE9c v\u1EE5'">{{ info.postGradeName }}</nz-descriptions-item>
            <nz-descriptions-item [nzTitle]="'evs.viewConfirmTarget1.dept' | translate:'Ph\xF2ng ban'">{{ info.deptname }}</nz-descriptions-item>
            <nz-descriptions-item [nzTitle]="'evs.viewConfirmTarget1.hireDate' | translate:'Ng\xE0y v\xE0o l\xE0m'">{{ info.dateStarted }}</nz-descriptions-item>
          </nz-descriptions>
        </div>
        <div class="col-md-6">
          <nz-descriptions nzBordered nzSize="small" [nzColumn]="1"
                            [nzTitle]="'evs.viewConfirmTarget1.evalCategory' | translate:'H\u1EA1ng m\u1EE5c \u0111\xE1nh gi\xE1'">
            <nz-descriptions-item [nzTitle]="'evs.viewConfirmTarget1.evalYear' | translate:'N\u0103m \u0111\xE1nh gi\xE1'">{{ info.evsYear }}</nz-descriptions-item>
            <nz-descriptions-item [nzTitle]="'evs.viewConfirmTarget1.period' | translate:'Th\u1EDDi gian'">{{ info.evsStartDate }}{{ info.evsEndDate ? '~' + info.evsEndDate : '' }}</nz-descriptions-item>
            <nz-descriptions-item [nzTitle]="'evs.viewConfirmTarget1.appraiser1' | translate:'Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 l\u1EA7n 1'">{{ info.localName1 }}</nz-descriptions-item>
            <nz-descriptions-item [nzTitle]="'evs.viewConfirmTarget1.appraiser2' | translate:'Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 l\u1EA7n 2'">{{ info.localName2 }}</nz-descriptions-item>
          </nz-descriptions>
        </div>
      </div>

      <!-- Objective Confirm (readonly) -->
      <div class="fw-bold mb-1">{{ 'evs.viewConfirmTarget1.objectiveConfirm' | translate:'Objective Confirm' }}</div>
      <div class="table-responsive mb-3">
        <nz-table [nzData]="items()" [nzShowPagination]="false" nzSize="small">
          <thead>
            <tr>
              <th class="text-center" style="width:48px;">{{ 'evs.viewConfirmTarget1.col.no' | translate:'No' }}</th>
              <th style="width:220px;">{{ 'evs.viewConfirmTarget1.col.evalItem' | translate:'H\u1EA1ng m\u1EE5c \u0111\xE1nh gi\xE1' }}</th>
              <th>{{ 'evs.viewConfirmTarget1.col.target' | translate:'M\u1EE5c ti\xEAu' }}</th>
              <th class="text-center" style="width:90px;">{{ 'evs.viewConfirmTarget1.col.ratio' | translate:'T\u1EF7 l\u1EC7(%)' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="items().length === 0">
              <td colspan="4" class="text-center text-muted">0</td>
            </tr>
            <tr *ngFor="let item of items(); let i = index">
              <td class="text-center">{{ i + 1 }}</td>
              <td>{{ item.itemName }}</td>
              <td><div [innerHTML]="item.itemContent"></div></td>
              <td class="text-center">{{ item.itemScore }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-end fw-bold small">Total</td>
              <td class="text-center fw-bold">{{ totalScore() }}</td>
            </tr>
          </tfoot>
        </nz-table>
      </div>

      <!-- Ph\u1EA7n 2: \xDD ki\u1EBFn ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 -->
      <div class="fw-bold mb-2 border-bottom pb-1">{{ 'evs.viewConfirmTarget1.part2' | translate:'Ph\u1EA7n 2' }}</div>
      <table class="table table-bordered table-sm mb-0">
        <thead class="table-light text-center">
          <tr>
            <th style="width:160px;"></th>
            <th>{{ 'evs.viewConfirmTarget1.col.opinion' | translate:'\xDD ki\u1EBFn' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-muted small align-middle">{{ 'evs.viewConfirmTarget1.appraiser1Comment' | translate:'Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 c\u1EA5p 1' }}</td>
            <td><textarea nz-input rows="4" style="resize:none;" [(ngModel)]="affirmComment1" [readonly]="comment1Readonly"></textarea></td>
          </tr>
          <tr>
            <td class="text-muted small align-middle">{{ 'evs.viewConfirmTarget1.appraiser2Comment' | translate:'Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 c\u1EA5p 2' }}</td>
            <td><textarea nz-input rows="4" style="resize:none;" [(ngModel)]="affirmComment2" [readonly]="comment2Readonly"></textarea></td>
          </tr>
        </tbody>
      </table>

      <div class="d-flex justify-content-end gap-2 mt-3">
        <button nz-button nzType="primary" type="button" (click)="confirmAction('1')">
          {{ 'evs.viewConfirmTarget1.btnConfirm' | translate:'X\xE1c nh\u1EADn' }}
        </button>
        <button nz-button nzDanger type="button" (click)="confirmAction('0')">
          {{ 'evs.viewConfirmTarget1.btnReject' | translate:'T\u1EEB ch\u1ED1i' }}
        </button>
        <button nz-button type="button" (click)="closeModal()">
          {{ 'evs.viewConfirmTarget1.btnClose' | translate:'\u0110\xF3ng' }}
        </button>
      </div>
    </ng-container>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/confirm-target1/confirm-target1.component.css */\n.vct1-clickable {\n  cursor: pointer;\n}\n.vct1-clickable:hover {\n  background-color: #f0f4ff;\n}\n.vct1-active {\n  background-color: #cce5ff !important;\n}\n.vct1-blue-name {\n  color: #0d6efd;\n  font-weight: 500;\n}\n/*# sourceMappingURL=confirm-target1.component.css.map */\n"] }]
  }], () => [{ type: ConfirmTarget1Service }, { type: I18nService }, { type: NzMessageService }, { type: NzModalService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmTarget1Component, { className: "ConfirmTarget1Component", filePath: "src/app/confirm-target1/confirm-target1.component.ts", lineNumber: 86 });
})();
export {
  ConfirmTarget1Component
};
//# debugId=3dec910b-4c2b-5224-a994-3178b8ce13ed
//# sourceMappingURL=chunk-3WKZV2JT.js.map
