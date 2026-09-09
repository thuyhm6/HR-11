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
  NzTableCellDirective,
  NzTableComponent,
  NzTableModule,
  NzTbodyComponent,
  NzThMeasureDirective,
  NzTheadComponent,
  NzTrDirective
} from "./chunk-ON5PSYJR.js";
import {
  NzSpinComponent,
  NzSpinModule
} from "./chunk-VWYGF7JF.js";
import "./chunk-JSOAL7UF.js";
import {
  NzEmptyComponent,
  NzEmptyModule,
  NzOptionComponent,
  NzSelectComponent,
  NzSelectModule
} from "./chunk-2QLZSMGV.js";
import "./chunk-2GOAB54B.js";
import {
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
  ViewChild,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-VTW5U2M5.js";

// src/app/pa-month-person-info/pa-month-person-info.service.ts
var API_BASE = "/pa/salary/api/monthPersonInfo";
var PaMonthPersonInfoService = class _PaMonthPersonInfoService {
  constructor(http) {
    this.http = http;
  }
  http;
  getOpenPaySchedules() {
    return this.http.get(`${API_BASE}/payScheduleOpen`, { withCredentials: true });
  }
  loadSelfPayStub(payScheduleNo, lang) {
    const params = new HttpParams().set("payScheduleNo", payScheduleNo).set("lang", lang);
    return this.http.get(`${API_BASE}/payStub/load`, { params, withCredentials: true });
  }
  static \u0275fac = function PaMonthPersonInfoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaMonthPersonInfoService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PaMonthPersonInfoService, factory: _PaMonthPersonInfoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaMonthPersonInfoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/pa-month-person-info/pa-month-person-info.component.ts
var _c0 = ["printArea"];
function PaMonthPersonInfoComponent_nz_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 16);
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    \u0275\u0275property("nzValue", s_r2.payScheduleNo)("nzLabel", s_r2.payDate + (s_r2.salaryDistinName ? " " + s_r2.salaryDistinName : ""));
  }
}
function PaMonthPersonInfoComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function PaMonthPersonInfoComponent_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.print());
    });
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "pa.monthPersonInfo.print", "In"), " ");
  }
}
function PaMonthPersonInfoComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "nz-spin", 20);
    \u0275\u0275elementStart(2, "div", 21);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 1, "pa.monthPersonInfo.loading", "\u0110ang t\u1EA3i phi\u1EBFu l\u01B0\u01A1ng..."));
  }
}
function PaMonthPersonInfoComponent_nz_empty_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-empty", 22);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("nzNotFoundContent", \u0275\u0275pipeBind2(1, 1, "pa.monthPersonInfo.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function PaMonthPersonInfoComponent_div_20_ng_container_83_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.itemName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.formatNumber(item_r5.itemValue));
  }
}
function PaMonthPersonInfoComponent_div_20_ng_container_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 28);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "nz-table", 45)(5, "thead")(6, "tr")(7, "th");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 39);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275template(14, PaMonthPersonInfoComponent_div_20_ng_container_83_tr_14_Template, 5, 2, "tr", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const stub_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 6, "pa.monthPersonInfo.standardItems", "H\u1EA1ng m\u1EE5c ti\xEAu chu\u1EA9n"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzData", stub_r6.standardItems)("nzShowPagination", false);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 9, "pa.monthPersonInfo.itemName", "H\u1EA1ng m\u1EE5c"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 12, "pa.monthPersonInfo.amount", "S\u1ED1 ti\u1EC1n"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", stub_r6.standardItems);
  }
}
function PaMonthPersonInfoComponent_div_20_tr_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 39);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 39);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r7 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r7.att?.itemName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r7.att ? ctx_r3.formatNumber(r_r7.att.itemValue) : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r7.sal?.itemName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r7.sal ? ctx_r3.formatNumber(r_r7.sal.itemValue) : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r7.ded?.itemName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r7.ded ? ctx_r3.formatNumber(r_r7.ded.itemValue) : "");
  }
}
function PaMonthPersonInfoComponent_div_20_tr_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 46);
    \u0275\u0275text(2, "-");
    \u0275\u0275elementEnd()();
  }
}
function PaMonthPersonInfoComponent_div_20_ng_container_138_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 39);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r8.remark);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.formatNumber(o_r8.returnValue));
  }
}
function PaMonthPersonInfoComponent_div_20_ng_container_138_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 28);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "table", 32)(5, "tbody");
    \u0275\u0275template(6, PaMonthPersonInfoComponent_div_20_ng_container_138_tr_6_Template, 5, 2, "tr", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const stub_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "pa.monthPersonInfo.otherItems", "H\u1EA1ng m\u1EE5c kh\xE1c"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r3.visibleOtherItems(stub_r6));
  }
}
function PaMonthPersonInfoComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "div", 25);
    \u0275\u0275element(3, "img", 26);
    \u0275\u0275elementStart(4, "span", 27);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 28);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "table", 29)(11, "tr")(12, "th");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "td");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "tr")(33, "th");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "td");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "td");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "th");
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "td");
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th");
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "td");
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "tr")(54, "th", 30);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "td", 31);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "tr")(60, "th", 30);
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "td", 31);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "div", 28);
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "table", 32)(69, "thead")(70, "tr")(71, "th", 33);
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "th", 33);
    \u0275\u0275text(75);
    \u0275\u0275pipe(76, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(77, "tbody")(78, "tr")(79, "td", 33);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "td", 33);
    \u0275\u0275text(82);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(83, PaMonthPersonInfoComponent_div_20_ng_container_83_Template, 15, 15, "ng-container", 34);
    \u0275\u0275elementStart(84, "nz-table", 35)(85, "thead")(86, "tr")(87, "th", 36);
    \u0275\u0275text(88);
    \u0275\u0275pipe(89, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "th", 37);
    \u0275\u0275text(91);
    \u0275\u0275pipe(92, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "th", 38);
    \u0275\u0275text(94);
    \u0275\u0275pipe(95, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "tr")(97, "th");
    \u0275\u0275text(98);
    \u0275\u0275pipe(99, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "th", 39);
    \u0275\u0275text(101);
    \u0275\u0275pipe(102, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "th");
    \u0275\u0275text(104);
    \u0275\u0275pipe(105, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "th", 39);
    \u0275\u0275text(107);
    \u0275\u0275pipe(108, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "th");
    \u0275\u0275text(110);
    \u0275\u0275pipe(111, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "th", 39);
    \u0275\u0275text(113);
    \u0275\u0275pipe(114, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(115, "tbody");
    \u0275\u0275template(116, PaMonthPersonInfoComponent_div_20_tr_116_Template, 13, 6, "tr", 40)(117, PaMonthPersonInfoComponent_div_20_tr_117_Template, 3, 0, "tr", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "tfoot")(119, "tr");
    \u0275\u0275element(120, "td", 30);
    \u0275\u0275elementStart(121, "td", 41);
    \u0275\u0275text(122);
    \u0275\u0275pipe(123, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "td", 42);
    \u0275\u0275text(125);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "td", 41);
    \u0275\u0275text(127);
    \u0275\u0275pipe(128, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "td", 42);
    \u0275\u0275text(130);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(131, "table", 43)(132, "tr")(133, "td", 41);
    \u0275\u0275text(134);
    \u0275\u0275pipe(135, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "td", 42);
    \u0275\u0275text(137);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(138, PaMonthPersonInfoComponent_div_20_ng_container_138_Template, 7, 5, "ng-container", 34);
    \u0275\u0275elementStart(139, "div", 44);
    \u0275\u0275text(140);
    \u0275\u0275pipe(141, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stub_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(6, 50, "pa.monthPersonInfo.slipTitle", "PHI\u1EBEU L\u01AF\u01A0NG TH\xC1NG"), " ", ctx_r3.monthYear(stub_r6.hrEndDate));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 53, "pa.monthPersonInfo.basicInfo", "Th\xF4ng tin C\u01A1 b\u1EA3n"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 56, "pa.monthPersonInfo.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stub_r6.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 59, "pa.monthPersonInfo.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stub_r6.empId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 62, "pa.monthPersonInfo.dept", "Ph\xF2ng ban"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stub_r6.deptName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 65, "pa.monthPersonInfo.empType", "Lo\u1EA1i nh\xE2n vi\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stub_r6.empTypeName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 68, "pa.monthPersonInfo.empGroup", "Nh\xF3m nh\xE2n vi\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stub_r6.postFamily);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 71, "pa.monthPersonInfo.position", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stub_r6.positionName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 74, "pa.monthPersonInfo.grade", "Ch\u1EE9c danh"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stub_r6.postGrade);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 77, "pa.monthPersonInfo.workStatus", "Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stub_r6.empOfficeName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(56, 80, "pa.monthPersonInfo.dependent", "S\u1ED1 ng\u01B0\u1EDDi ph\u1EE5 thu\u1ED9c"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stub_r6.dependentCount || 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(62, 83, "pa.monthPersonInfo.socialInsuranceNo", "S\u1ED1 th\u1EBB b\u1EA3o hi\u1EC3m x\xE3 h\u1ED9i"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stub_r6.socialInsuranceNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(67, 86, "pa.monthPersonInfo.account", "T\xE0i kho\u1EA3n"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(73, 89, "pa.monthPersonInfo.bankName", "Ng\xE2n h\xE0ng"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(76, 92, "pa.monthPersonInfo.accountNo", "T\xE0i kho\u1EA3n"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(stub_r6.bankName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stub_r6.bankAccountNo || stub_r6.accountNo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", stub_r6.standardItems?.length);
    \u0275\u0275advance();
    \u0275\u0275property("nzData", ctx_r3.tripleRows(stub_r6))("nzShowPagination", false);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u25A0 ", \u0275\u0275pipeBind2(89, 95, "pa.monthPersonInfo.attendanceItems", "Chi ti\u1EBFt ch\u1EA5m c\xF4ng"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u25A0 ", \u0275\u0275pipeBind2(92, 98, "pa.monthPersonInfo.salaryItems", "Chi ti\u1EBFt l\u01B0\u01A1ng"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u25A0 ", \u0275\u0275pipeBind2(95, 101, "pa.monthPersonInfo.deductionItems", "Chi ti\u1EBFt kho\u1EA3n tr\u1EEB"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(99, 104, "pa.monthPersonInfo.attendanceItem", "H\u1EA1ng m\u1EE5c ch\u1EA5m c\xF4ng"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(102, 107, "pa.monthPersonInfo.value", "Gi\xE1 tr\u1ECB"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(105, 110, "pa.monthPersonInfo.salaryItem", "H\u1EA1ng m\u1EE5c"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(108, 113, "pa.monthPersonInfo.amount", "S\u1ED1 ti\u1EC1n"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(111, 116, "pa.monthPersonInfo.deductionItem", "H\u1EA1ng m\u1EE5c"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(114, 119, "pa.monthPersonInfo.amount", "S\u1ED1 ti\u1EC1n"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r3.tripleRows(stub_r6));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.tripleRows(stub_r6).length === 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(123, 122, "pa.monthPersonInfo.total", "T\u1ED5ng"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.formatNumber(ctx_r3.sum(stub_r6.salaryItems)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(128, 125, "pa.monthPersonInfo.total", "T\u1ED5ng"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.formatNumber(ctx_r3.sum(stub_r6.deductionItems)));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(135, 128, "pa.monthPersonInfo.netSalary", "L\u01B0\u01A1ng th\u1EF1c l\u0129nh"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.formatNumber(ctx_r3.netSalary(stub_r6)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.visibleOtherItems(stub_r6).length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.selectedScheduleOpinion || \u0275\u0275pipeBind2(141, 131, "pa.monthPersonInfo.note", "\u203B M\u1ECDi th\u1EAFc m\u1EAFc v\u1EC1 n\u1ED9i dung tr\xEAn phi\u1EBFu l\u01B0\u01A1ng, vui l\xF2ng li\xEAn h\u1EC7 ph\xF2ng Nh\xE2n s\u1EF1!"));
  }
}
var I18N_KEYS = [
  "pa.monthPersonInfo.paySchedule",
  "pa.monthPersonInfo.search",
  "pa.monthPersonInfo.print",
  "pa.monthPersonInfo.loading",
  "pa.monthPersonInfo.noData",
  "pa.monthPersonInfo.slipTitle",
  "pa.monthPersonInfo.basicInfo",
  "pa.monthPersonInfo.empName",
  "pa.monthPersonInfo.empId",
  "pa.monthPersonInfo.dept",
  "pa.monthPersonInfo.empType",
  "pa.monthPersonInfo.empGroup",
  "pa.monthPersonInfo.position",
  "pa.monthPersonInfo.grade",
  "pa.monthPersonInfo.workStatus",
  "pa.monthPersonInfo.dependent",
  "pa.monthPersonInfo.account",
  "pa.monthPersonInfo.bankName",
  "pa.monthPersonInfo.accountNo",
  "pa.monthPersonInfo.socialInsuranceNo",
  "pa.monthPersonInfo.standardItems",
  "pa.monthPersonInfo.itemName",
  "pa.monthPersonInfo.amount",
  "pa.monthPersonInfo.attendanceItems",
  "pa.monthPersonInfo.salaryItems",
  "pa.monthPersonInfo.deductionItems",
  "pa.monthPersonInfo.attendanceItem",
  "pa.monthPersonInfo.value",
  "pa.monthPersonInfo.salaryItem",
  "pa.monthPersonInfo.deductionItem",
  "pa.monthPersonInfo.total",
  "pa.monthPersonInfo.netSalary",
  "pa.monthPersonInfo.otherItems",
  "pa.monthPersonInfo.note",
  "pa.monthPersonInfo.msgSelectSchedule",
  "pa.monthPersonInfo.msgNoDataToPrint",
  "common.loadFail"
];
var PaMonthPersonInfoComponent = class _PaMonthPersonInfoComponent {
  constructor(api, i18n, message) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
  }
  api;
  i18n;
  message;
  printAreaEl;
  schedules = signal(
    [],
    ...ngDevMode ? [{ debugName: "schedules" }] : (
      /* istanbul ignore next */
      []
    )
  );
  stubs = signal(
    [],
    ...ngDevMode ? [{ debugName: "stubs" }] : (
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
  searched = signal(
    false,
    ...ngDevMode ? [{ debugName: "searched" }] : (
      /* istanbul ignore next */
      []
    )
  );
  payScheduleNo = null;
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadSchedules();
  }
  /** Ghi chú của công ty (empOpinion) gắn theo kế hoạch trả lương đang chọn - thay cho ghi chú mặc
   *  định khi có, giống hcv_currentEmpOpinion ở bản gốc. */
  get selectedScheduleOpinion() {
    return this.schedules().find((s) => s.payScheduleNo === this.payScheduleNo)?.empOpinion || "";
  }
  search() {
    if (!this.payScheduleNo) {
      this.message.warning(this.i18n.t("pa.monthPersonInfo.msgSelectSchedule", "Vui l\xF2ng ch\u1ECDn k\u1EBF ho\u1EA1ch tr\u1EA3 l\u01B0\u01A1ng!"));
      return;
    }
    this.loading.set(true);
    this.searched.set(true);
    this.stubs.set([]);
    const lang = document.documentElement.lang || "vi";
    this.api.loadSelfPayStub(this.payScheduleNo, lang).subscribe({
      next: (list) => {
        this.stubs.set(list ?? []);
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        const msg = err?.error?.error || this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!");
        this.message.error(msg);
      }
    });
  }
  sum(items) {
    return (items || []).reduce((acc, item) => acc + (Number(item.itemValue) || 0), 0);
  }
  netSalary(stub) {
    return this.sum(stub.salaryItems) - this.sum(stub.deductionItems);
  }
  visibleOtherItems(stub) {
    return (stub.otherItems || []).filter((o) => o.returnValue || o.remark);
  }
  /** Ghép hàng 3 cột Chấm công / Lương / Khoản trừ theo chỉ số dòng (cột nào hết dữ liệu để trống). */
  tripleRows(stub) {
    const maxRows = Math.max(stub.attendanceItems?.length || 0, stub.salaryItems?.length || 0, stub.deductionItems?.length || 0);
    const rows = [];
    for (let i = 0; i < maxRows; i++) {
      rows.push({ att: stub.attendanceItems?.[i], sal: stub.salaryItems?.[i], ded: stub.deductionItems?.[i] });
    }
    return rows;
  }
  /** yyyy-MM-dd hoặc yyyy/MM/dd -> MM-yyyy (tháng-năm hiển thị trên tiêu đề phiếu lương). */
  monthYear(hrEndDate) {
    if (!hrEndDate)
      return "";
    const parts = hrEndDate.split(/[-/]/);
    return parts.length >= 2 ? `${parts[1]}-${parts[0]}` : hrEndDate;
  }
  formatNumber(val) {
    if (val === null || val === void 0 || val === "")
      return "";
    const num = Number(val);
    return isNaN(num) ? "" : num.toLocaleString("vi-VN");
  }
  /** In - lấy nguyên HTML đã render của vùng phiếu lương (giống bản gốc lấy innerHTML #vpmpi_printArea)
   *  mở cửa sổ mới rồi gọi window.print(), giữ nguyên CSS in riêng (khổ A4, ngắt trang theo từng phiếu). */
  print() {
    const html = this.printAreaEl?.nativeElement.innerHTML;
    if (!html || !html.trim()) {
      this.message.warning(this.i18n.t("pa.monthPersonInfo.msgNoDataToPrint", "Kh\xF4ng c\xF3 phi\u1EBFu l\u01B0\u01A1ng \u0111\u1EC3 in!"));
      return;
    }
    const printWin = window.open("", "_blank");
    if (!printWin)
      return;
    printWin.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><style>${VPMPI_PRINT_CSS}</style></head><body>${html}</body></html>`);
    printWin.document.close();
    printWin.onload = () => {
      printWin.focus();
      printWin.print();
      printWin.close();
    };
  }
  loadSchedules() {
    this.api.getOpenPaySchedules().subscribe({
      next: (list) => {
        this.schedules.set(list ?? []);
        if (list && list.length > 0)
          this.payScheduleNo = list[0].payScheduleNo;
      },
      error: () => this.message.warning(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"))
    });
  }
  static \u0275fac = function PaMonthPersonInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaMonthPersonInfoComponent)(\u0275\u0275directiveInject(PaMonthPersonInfoService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaMonthPersonInfoComponent, selectors: [["app-pa-month-person-info"]], viewQuery: function PaMonthPersonInfoComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.printAreaEl = _t.first);
    }
  }, decls: 21, vars: 14, consts: [["printArea", ""], [1, "row"], [1, "col-12"], [1, "mb-2"], [1, "row", "g-2", "align-items-end", 3, "ngSubmit"], [1, "col-md-5"], [1, "form-label", "mb-1", "small", "fw-semibold"], ["name", "payScheduleNo", "nzAllowClear", "", "nzShowSearch", "", 1, "w-100", 3, "ngModelChange", "ngModel"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col-md-4", "d-flex", "gap-2", "align-items-end"], ["nz-button", "", "nzType", "primary", "nzSize", "small", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "nzSize", "small", "type", "button", 3, "click", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["class", "py-5", 3, "nzNotFoundContent", 4, "ngIf"], ["class", "vpmpi-pay-stub", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"], ["nz-button", "", "nzSize", "small", "type", "button", 3, "click"], [1, "bx", "bx-printer"], [1, "text-center", "py-5"], ["nzSize", "large"], [1, "mt-2", "text-muted"], [1, "py-5", 3, "nzNotFoundContent"], [1, "vpmpi-pay-stub"], [1, "vpmpi-stub-header"], [1, "vpmpi-logo"], ["src", "/assets/images/logo.png", "alt", "Logo"], [1, "vpmpi-title"], [1, "vpmpi-section-title"], [1, "vpmpi-info-table"], ["colspan", "2"], ["colspan", "6"], [1, "vpmpi-detail-table"], [1, "text-center"], [4, "ngIf"], ["nzSize", "small", 1, "vpmpi-triple-table", 3, "nzData", "nzShowPagination"], ["colspan", "2", 1, "text-center", "vpmpi-att-header"], ["colspan", "2", 1, "text-center", "vpmpi-sal-header"], ["colspan", "2", 1, "text-center", "vpmpi-ded-header"], [1, "text-end"], [4, "ngFor", "ngForOf"], [1, "fw-bold"], [1, "text-end", "fw-bold"], [1, "vpmpi-net-table"], [1, "vpmpi-note"], ["nzSize", "small", 1, "vpmpi-detail-table", 3, "nzData", "nzShowPagination"], ["colspan", "6", 1, "text-center", "text-muted"]], template: function PaMonthPersonInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "nz-card", 3)(3, "form", 4);
      \u0275\u0275listener("ngSubmit", function PaMonthPersonInfoComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 5)(5, "label", 6);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "nz-select", 7);
      \u0275\u0275twoWayListener("ngModelChange", function PaMonthPersonInfoComponent_Template_nz_select_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.payScheduleNo, $event) || (ctx.payScheduleNo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(9, PaMonthPersonInfoComponent_nz_option_9_Template, 1, 2, "nz-option", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 9)(11, "button", 10);
      \u0275\u0275element(12, "i", 11);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(15, PaMonthPersonInfoComponent_button_15_Template, 4, 4, "button", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(16, PaMonthPersonInfoComponent_div_16_Template, 5, 4, "div", 13)(17, PaMonthPersonInfoComponent_nz_empty_17_Template, 2, 4, "nz-empty", 14);
      \u0275\u0275elementStart(18, "div", null, 0);
      \u0275\u0275template(20, PaMonthPersonInfoComponent_div_20_Template, 142, 134, "div", 15);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 8, "pa.monthPersonInfo.paySchedule", "K\u1EBF ho\u1EA1ch tr\u1EA3 l\u01B0\u01A1ng"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.payScheduleNo);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.schedules());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 11, "pa.monthPersonInfo.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.stubs().length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.searched() && ctx.stubs().length === 0);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.stubs());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzCardModule, NzCardComponent, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzSpinModule, NzSpinComponent, NzEmptyModule, NzEmptyComponent, TranslatePipe], styles: ['\n.vpmpi-pay-stub[_ngcontent-%COMP%] {\n  width: 210mm;\n  margin: 0 auto 24px auto;\n  padding: 10mm 12mm;\n  background: #fff;\n  border: 1px solid #bbb;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, .12);\n  font-size: 11px;\n  font-family: Arial, sans-serif;\n  color: #111;\n}\n.vpmpi-stub-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  border-bottom: 2.5px solid #922b21;\n  padding-bottom: 8px;\n}\n.vpmpi-logo[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  color: #922b21;\n  line-height: 1.4;\n  min-width: 120px;\n}\n.vpmpi-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 32px;\n  margin-right: 6px;\n  vertical-align: middle;\n}\n.vpmpi-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  text-align: center;\n  flex: 1;\n  color: #1a1a2e;\n  letter-spacing: 1px;\n}\n.vpmpi-section-title[_ngcontent-%COMP%] {\n  background: #922b21;\n  color: #fff;\n  font-weight: bold;\n  padding: 3px 8px;\n  margin: 8px 0 0 0;\n  font-size: 11px;\n}\n.vpmpi-section-title[_ngcontent-%COMP%]::before {\n  content: "\\25a0";\n}\n.vpmpi-info-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.vpmpi-info-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f2e0e0;\n  color: #333;\n  font-weight: bold;\n  padding: 4px 8px;\n  border: 1px solid #c8c8c8;\n  white-space: nowrap;\n  font-size: 10px;\n  text-align: center;\n}\n.vpmpi-info-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border: 1px solid #c8c8c8;\n  font-size: 10px;\n  background: #fff;\n}\n.vpmpi-detail-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.vpmpi-detail-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border: 1px solid #c8c8c8;\n  font-size: 10px;\n  background: #f2e0e0;\n  color: #333;\n  font-weight: bold;\n  text-align: center;\n}\n.vpmpi-detail-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 3px 8px;\n  border: 1px solid #c8c8c8;\n  font-size: 10px;\n  background: #fff;\n}\n.vpmpi-detail-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even)   td[_ngcontent-%COMP%] {\n  background: #fafafa;\n}\n.vpmpi-triple-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 8px;\n}\n.vpmpi-triple-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.vpmpi-triple-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px 6px;\n  border: 1px solid #c8c8c8;\n  font-size: 10px;\n}\n.vpmpi-att-header[_ngcontent-%COMP%] {\n  background: #1a5276;\n  color: #fff;\n  font-weight: bold;\n}\n.vpmpi-sal-header[_ngcontent-%COMP%] {\n  background: #922b21;\n  color: #fff;\n  font-weight: bold;\n}\n.vpmpi-ded-header[_ngcontent-%COMP%] {\n  background: #1a5276;\n  color: #fff;\n  font-weight: bold;\n}\n.vpmpi-triple-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2)   th[_ngcontent-%COMP%] {\n  background: #f2e0e0;\n  color: #333;\n  font-weight: bold;\n  text-align: center;\n}\n.vpmpi-triple-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.vpmpi-triple-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even)   td[_ngcontent-%COMP%] {\n  background: #fafafa;\n}\n.vpmpi-triple-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: #ececec;\n  font-weight: bold;\n  border: 1px solid #c8c8c8;\n}\n.vpmpi-net-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-bottom: 8px;\n}\n.vpmpi-net-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border: 1.5px solid #999;\n  background: #fef9e7;\n  font-size: 13px;\n  font-weight: bold;\n  color: #111;\n}\n.vpmpi-note[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #555;\n  margin-top: 10px;\n  font-style: italic;\n  border-top: 1px dashed #ccc;\n  padding-top: 6px;\n}\n.text-end[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: bold !important;\n}\n/*# sourceMappingURL=pa-month-person-info.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaMonthPersonInfoComponent, [{
    type: Component,
    args: [{ selector: "app-pa-month-person-info", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzCardModule,
      NzSelectModule,
      NzButtonModule,
      NzTableModule,
      NzSpinModule,
      NzEmptyModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <nz-card class="mb-2">
      <form class="row g-2 align-items-end" (ngSubmit)="search()">
        <div class="col-md-5">
          <label class="form-label mb-1 small fw-semibold">{{ 'pa.monthPersonInfo.paySchedule' | translate:'K\u1EBF ho\u1EA1ch tr\u1EA3 l\u01B0\u01A1ng' }}</label>
          <nz-select class="w-100" [(ngModel)]="payScheduleNo" name="payScheduleNo" nzAllowClear nzShowSearch>
            <nz-option *ngFor="let s of schedules()" [nzValue]="s.payScheduleNo"
                       [nzLabel]="s.payDate + (s.salaryDistinName ? ' ' + s.salaryDistinName : '')"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-4 d-flex gap-2 align-items-end">
          <button nz-button nzType="primary" nzSize="small" type="submit">
            <i class="bx bx-search"></i> {{ 'pa.monthPersonInfo.search' | translate:'Tra c\u1EE9u' }}
          </button>
          <button *ngIf="stubs().length > 0" nz-button nzSize="small" type="button" (click)="print()">
            <i class="bx bx-printer"></i> {{ 'pa.monthPersonInfo.print' | translate:'In' }}
          </button>
        </div>
      </form>
    </nz-card>

    <div *ngIf="loading()" class="text-center py-5">
      <nz-spin nzSize="large"></nz-spin>
      <div class="mt-2 text-muted">{{ 'pa.monthPersonInfo.loading' | translate:'\u0110ang t\u1EA3i phi\u1EBFu l\u01B0\u01A1ng...' }}</div>
    </div>

    <nz-empty *ngIf="!loading() && searched() && stubs().length === 0"
              class="py-5"
              [nzNotFoundContent]="'pa.monthPersonInfo.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u'"></nz-empty>

    <div #printArea>
      <div class="vpmpi-pay-stub" *ngFor="let stub of stubs()">
        <div class="vpmpi-stub-header">
          <div class="vpmpi-logo">
            <img src="/assets/images/logo.png" alt="Logo">
            <span class="vpmpi-title">{{ 'pa.monthPersonInfo.slipTitle' | translate:'PHI\u1EBEU L\u01AF\u01A0NG TH\xC1NG' }} {{ monthYear(stub.hrEndDate) }}</span>
          </div>
        </div>

        <div class="vpmpi-section-title">{{ 'pa.monthPersonInfo.basicInfo' | translate:'Th\xF4ng tin C\u01A1 b\u1EA3n' }}</div>
        <table class="vpmpi-info-table">
          <tr>
            <th>{{ 'pa.monthPersonInfo.empName' | translate:'H\u1ECD t\xEAn' }}</th><td>{{ stub.localName }}</td>
            <th>{{ 'pa.monthPersonInfo.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th><td>{{ stub.empId }}</td>
            <th>{{ 'pa.monthPersonInfo.dept' | translate:'Ph\xF2ng ban' }}</th><td>{{ stub.deptName }}</td>
            <th>{{ 'pa.monthPersonInfo.empType' | translate:'Lo\u1EA1i nh\xE2n vi\xEAn' }}</th><td>{{ stub.empTypeName }}</td>
          </tr>
          <tr>
            <th>{{ 'pa.monthPersonInfo.empGroup' | translate:'Nh\xF3m nh\xE2n vi\xEAn' }}</th><td>{{ stub.postFamily }}</td>
            <th>{{ 'pa.monthPersonInfo.position' | translate:'Ch\u1EE9c v\u1EE5' }}</th><td>{{ stub.positionName }}</td>
            <th>{{ 'pa.monthPersonInfo.grade' | translate:'Ch\u1EE9c danh' }}</th><td>{{ stub.postGrade }}</td>
            <th>{{ 'pa.monthPersonInfo.workStatus' | translate:'Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng' }}</th><td>{{ stub.empOfficeName }}</td>
          </tr>
          <tr>
            <th colspan="2">{{ 'pa.monthPersonInfo.dependent' | translate:'S\u1ED1 ng\u01B0\u1EDDi ph\u1EE5 thu\u1ED9c' }}</th>
            <td colspan="6">{{ stub.dependentCount || 0 }}</td>
          </tr>
          <tr>
            <th colspan="2">{{ 'pa.monthPersonInfo.socialInsuranceNo' | translate:'S\u1ED1 th\u1EBB b\u1EA3o hi\u1EC3m x\xE3 h\u1ED9i' }}</th>
            <td colspan="6">{{ stub.socialInsuranceNo }}</td>
          </tr>
        </table>

        <div class="vpmpi-section-title">{{ 'pa.monthPersonInfo.account' | translate:'T\xE0i kho\u1EA3n' }}</div>
        <table class="vpmpi-detail-table">
          <thead>
            <tr>
              <th class="text-center">{{ 'pa.monthPersonInfo.bankName' | translate:'Ng\xE2n h\xE0ng' }}</th>
              <th class="text-center">{{ 'pa.monthPersonInfo.accountNo' | translate:'T\xE0i kho\u1EA3n' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">{{ stub.bankName }}</td>
              <td class="text-center">{{ stub.bankAccountNo || stub.accountNo }}</td>
            </tr>
          </tbody>
        </table>

        <!-- H\u1EA1ng m\u1EE5c ti\xEAu chu\u1EA9n - ch\u1EC9 hi\u1EC3n th\u1ECB n\u1EBFu c\xF3 d\u1EEF li\u1EC7u (gi\u1ED1ng b\u1EA3n g\u1ED1c). -->
        <ng-container *ngIf="stub.standardItems?.length">
          <div class="vpmpi-section-title">{{ 'pa.monthPersonInfo.standardItems' | translate:'H\u1EA1ng m\u1EE5c ti\xEAu chu\u1EA9n' }}</div>
          <nz-table [nzData]="stub.standardItems" [nzShowPagination]="false" nzSize="small" class="vpmpi-detail-table">
            <thead>
              <tr>
                <th>{{ 'pa.monthPersonInfo.itemName' | translate:'H\u1EA1ng m\u1EE5c' }}</th>
                <th class="text-end">{{ 'pa.monthPersonInfo.amount' | translate:'S\u1ED1 ti\u1EC1n' }}</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let item of stub.standardItems">
                <td>{{ item.itemName }}</td>
                <td class="text-end">{{ formatNumber(item.itemValue) }}</td>
              </tr>
            </tbody>
          </nz-table>
        </ng-container>

        <!-- B\u1EA3ng 3 c\u1ED9t: Ch\u1EA5m c\xF4ng / L\u01B0\u01A1ng / Kho\u1EA3n tr\u1EEB. -->
        <nz-table [nzData]="tripleRows(stub)" [nzShowPagination]="false" nzSize="small" class="vpmpi-triple-table">
          <thead>
            <tr>
              <th colspan="2" class="text-center vpmpi-att-header">\u25A0 {{ 'pa.monthPersonInfo.attendanceItems' | translate:'Chi ti\u1EBFt ch\u1EA5m c\xF4ng' }}</th>
              <th colspan="2" class="text-center vpmpi-sal-header">\u25A0 {{ 'pa.monthPersonInfo.salaryItems' | translate:'Chi ti\u1EBFt l\u01B0\u01A1ng' }}</th>
              <th colspan="2" class="text-center vpmpi-ded-header">\u25A0 {{ 'pa.monthPersonInfo.deductionItems' | translate:'Chi ti\u1EBFt kho\u1EA3n tr\u1EEB' }}</th>
            </tr>
            <tr>
              <th>{{ 'pa.monthPersonInfo.attendanceItem' | translate:'H\u1EA1ng m\u1EE5c ch\u1EA5m c\xF4ng' }}</th>
              <th class="text-end">{{ 'pa.monthPersonInfo.value' | translate:'Gi\xE1 tr\u1ECB' }}</th>
              <th>{{ 'pa.monthPersonInfo.salaryItem' | translate:'H\u1EA1ng m\u1EE5c' }}</th>
              <th class="text-end">{{ 'pa.monthPersonInfo.amount' | translate:'S\u1ED1 ti\u1EC1n' }}</th>
              <th>{{ 'pa.monthPersonInfo.deductionItem' | translate:'H\u1EA1ng m\u1EE5c' }}</th>
              <th class="text-end">{{ 'pa.monthPersonInfo.amount' | translate:'S\u1ED1 ti\u1EC1n' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let r of tripleRows(stub)">
              <td>{{ r.att?.itemName }}</td>
              <td class="text-end">{{ r.att ? formatNumber(r.att.itemValue) : '' }}</td>
              <td>{{ r.sal?.itemName }}</td>
              <td class="text-end">{{ r.sal ? formatNumber(r.sal.itemValue) : '' }}</td>
              <td>{{ r.ded?.itemName }}</td>
              <td class="text-end">{{ r.ded ? formatNumber(r.ded.itemValue) : '' }}</td>
            </tr>
            <tr *ngIf="tripleRows(stub).length === 0">
              <td colspan="6" class="text-center text-muted">-</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2"></td>
              <td class="fw-bold">{{ 'pa.monthPersonInfo.total' | translate:'T\u1ED5ng' }}</td>
              <td class="text-end fw-bold">{{ formatNumber(sum(stub.salaryItems)) }}</td>
              <td class="fw-bold">{{ 'pa.monthPersonInfo.total' | translate:'T\u1ED5ng' }}</td>
              <td class="text-end fw-bold">{{ formatNumber(sum(stub.deductionItems)) }}</td>
            </tr>
          </tfoot>
        </nz-table>

        <table class="vpmpi-net-table">
          <tr>
            <td class="fw-bold">{{ 'pa.monthPersonInfo.netSalary' | translate:'L\u01B0\u01A1ng th\u1EF1c l\u0129nh' }}</td>
            <td class="text-end fw-bold">{{ formatNumber(netSalary(stub)) }}</td>
          </tr>
        </table>

        <!-- H\u1EA1ng m\u1EE5c kh\xE1c - ch\u1EC9 hi\u1EC3n th\u1ECB d\xF2ng c\xF3 gi\xE1 tr\u1ECB ho\u1EB7c ghi ch\xFA (gi\u1ED1ng b\u1EA3n g\u1ED1c). -->
        <ng-container *ngIf="visibleOtherItems(stub).length">
          <div class="vpmpi-section-title">{{ 'pa.monthPersonInfo.otherItems' | translate:'H\u1EA1ng m\u1EE5c kh\xE1c' }}</div>
          <table class="vpmpi-detail-table">
            <tbody>
              <tr *ngFor="let o of visibleOtherItems(stub)">
                <td>{{ o.remark }}</td>
                <td class="text-end">{{ formatNumber(o.returnValue) }}</td>
              </tr>
            </tbody>
          </table>
        </ng-container>

        <div class="vpmpi-note">{{ selectedScheduleOpinion || ('pa.monthPersonInfo.note' | translate:'\u203B M\u1ECDi th\u1EAFc m\u1EAFc v\u1EC1 n\u1ED9i dung tr\xEAn phi\u1EBFu l\u01B0\u01A1ng, vui l\xF2ng li\xEAn h\u1EC7 ph\xF2ng Nh\xE2n s\u1EF1!') }}</div>
      </div>
    </div>
  </div>
</div>
`, styles: ['/* src/app/pa-month-person-info/pa-month-person-info.component.css */\n.vpmpi-pay-stub {\n  width: 210mm;\n  margin: 0 auto 24px auto;\n  padding: 10mm 12mm;\n  background: #fff;\n  border: 1px solid #bbb;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, .12);\n  font-size: 11px;\n  font-family: Arial, sans-serif;\n  color: #111;\n}\n.vpmpi-stub-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  border-bottom: 2.5px solid #922b21;\n  padding-bottom: 8px;\n}\n.vpmpi-logo {\n  font-size: 14px;\n  font-weight: bold;\n  color: #922b21;\n  line-height: 1.4;\n  min-width: 120px;\n}\n.vpmpi-logo img {\n  height: 32px;\n  margin-right: 6px;\n  vertical-align: middle;\n}\n.vpmpi-title {\n  font-size: 18px;\n  font-weight: bold;\n  text-align: center;\n  flex: 1;\n  color: #1a1a2e;\n  letter-spacing: 1px;\n}\n.vpmpi-section-title {\n  background: #922b21;\n  color: #fff;\n  font-weight: bold;\n  padding: 3px 8px;\n  margin: 8px 0 0 0;\n  font-size: 11px;\n}\n.vpmpi-section-title::before {\n  content: "\\25a0";\n}\n.vpmpi-info-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.vpmpi-info-table th {\n  background: #f2e0e0;\n  color: #333;\n  font-weight: bold;\n  padding: 4px 8px;\n  border: 1px solid #c8c8c8;\n  white-space: nowrap;\n  font-size: 10px;\n  text-align: center;\n}\n.vpmpi-info-table td {\n  padding: 4px 8px;\n  border: 1px solid #c8c8c8;\n  font-size: 10px;\n  background: #fff;\n}\n.vpmpi-detail-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.vpmpi-detail-table th {\n  padding: 4px 8px;\n  border: 1px solid #c8c8c8;\n  font-size: 10px;\n  background: #f2e0e0;\n  color: #333;\n  font-weight: bold;\n  text-align: center;\n}\n.vpmpi-detail-table td {\n  padding: 3px 8px;\n  border: 1px solid #c8c8c8;\n  font-size: 10px;\n  background: #fff;\n}\n.vpmpi-detail-table tbody tr:nth-child(even) td {\n  background: #fafafa;\n}\n.vpmpi-triple-table {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 8px;\n}\n.vpmpi-triple-table th,\n.vpmpi-triple-table td {\n  padding: 5px 6px;\n  border: 1px solid #c8c8c8;\n  font-size: 10px;\n}\n.vpmpi-att-header {\n  background: #1a5276;\n  color: #fff;\n  font-weight: bold;\n}\n.vpmpi-sal-header {\n  background: #922b21;\n  color: #fff;\n  font-weight: bold;\n}\n.vpmpi-ded-header {\n  background: #1a5276;\n  color: #fff;\n  font-weight: bold;\n}\n.vpmpi-triple-table thead tr:nth-child(2) th {\n  background: #f2e0e0;\n  color: #333;\n  font-weight: bold;\n  text-align: center;\n}\n.vpmpi-triple-table tbody td {\n  background: #fff;\n}\n.vpmpi-triple-table tbody tr:nth-child(even) td {\n  background: #fafafa;\n}\n.vpmpi-triple-table tfoot td {\n  background: #ececec;\n  font-weight: bold;\n  border: 1px solid #c8c8c8;\n}\n.vpmpi-net-table {\n  width: 100%;\n  border-collapse: collapse;\n  margin-bottom: 8px;\n}\n.vpmpi-net-table td {\n  padding: 6px 10px;\n  border: 1.5px solid #999;\n  background: #fef9e7;\n  font-size: 13px;\n  font-weight: bold;\n  color: #111;\n}\n.vpmpi-note {\n  font-size: 10px;\n  color: #555;\n  margin-top: 10px;\n  font-style: italic;\n  border-top: 1px dashed #ccc;\n  padding-top: 6px;\n}\n.text-end {\n  text-align: right !important;\n}\n.text-center {\n  text-align: center !important;\n}\n.fw-bold {\n  font-weight: bold !important;\n}\n/*# sourceMappingURL=pa-month-person-info.component.css.map */\n'] }]
  }], () => [{ type: PaMonthPersonInfoService }, { type: I18nService }, { type: NzMessageService }], { printAreaEl: [{
    type: ViewChild,
    args: ["printArea"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaMonthPersonInfoComponent, { className: "PaMonthPersonInfoComponent", filePath: "src/app/pa-month-person-info/pa-month-person-info.component.ts", lineNumber: 60 });
})();
var VPMPI_PRINT_CSS = [
  "@page { size:A4 portrait; margin:8mm; }",
  "*, *::before, *::after { box-sizing:border-box; -webkit-print-color-adjust:exact !important; print-color-adjust:exact !important; color-adjust:exact !important; }",
  "html, body { width:194mm; margin:0 auto; padding:0; background:#fff; font-family:Arial,sans-serif; font-size:10px; color:#111; }",
  "table { max-width:100% !important; word-break:break-word; }",
  ".vpmpi-pay-stub { width:100%; max-width:194mm; margin:0 auto; padding:4mm 0; background:#fff; page-break-after:always; break-after:page; overflow:hidden; }",
  ".vpmpi-pay-stub:last-child { page-break-after:avoid; break-after:avoid; }",
  ".vpmpi-stub-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:8px; border-bottom:2.5px solid #922b21; padding-bottom:6px; }",
  ".vpmpi-logo { font-size:12px; font-weight:bold; color:#922b21; line-height:1.4; min-width:100px; }",
  ".vpmpi-logo img { height:32px; margin-right:6px; vertical-align:middle; }",
  ".vpmpi-title { font-size:15px; font-weight:bold; text-align:center; flex:1; color:#1a1a2e; letter-spacing:1px; }",
  ".vpmpi-section-title { background:#922b21; color:#fff; font-weight:bold; padding:2px 6px; margin:6px 0 0 0; font-size:10px; }",
  '.vpmpi-section-title::before { content:"\\25A0 "; }',
  ".vpmpi-info-table { width:100%; border-collapse:collapse; table-layout:fixed; }",
  ".vpmpi-info-table th { background:#f2e0e0; color:#333; font-weight:bold; padding:5px 6px; border:1px solid #c8c8c8; font-size:9px; text-align:center; overflow:hidden; white-space:nowrap; }",
  ".vpmpi-info-table td { padding:5px 6px; border:1px solid #c8c8c8; font-size:9px; background:#fff; overflow:hidden; word-break:break-word; }",
  ".vpmpi-detail-table { width:100%; border-collapse:collapse; }",
  ".vpmpi-detail-table th { padding:5px 6px; border:1px solid #c8c8c8; font-size:9px; background:#f2e0e0; color:#333; font-weight:bold; text-align:center; }",
  ".vpmpi-detail-table td { padding:5px 6px; border:1px solid #c8c8c8; font-size:9px; background:#fff; }",
  ".vpmpi-detail-table tbody tr:nth-child(even) td { background:#fafafa; }",
  ".vpmpi-triple-table { width:100%; border-collapse:collapse; margin-top:6px; table-layout:fixed; }",
  ".vpmpi-triple-table th, .vpmpi-triple-table td { padding:5px 6px; border:1px solid #c8c8c8; font-size:9px; overflow:hidden; word-break:break-word; }",
  ".vpmpi-att-header { background:#1a5276; color:#fff; font-weight:bold; width:18%; }",
  ".vpmpi-sal-header { background:#922b21; color:#fff; font-weight:bold; width:18%; }",
  ".vpmpi-ded-header { background:#1a5276; color:#fff; font-weight:bold; width:18%; }",
  ".vpmpi-triple-table thead tr:nth-child(2) th { background:#f2e0e0; color:#333; font-weight:bold; text-align:center; }",
  ".vpmpi-triple-table tbody td { background:#fff; }",
  ".vpmpi-triple-table tbody tr:nth-child(even) td { background:#fafafa; }",
  ".vpmpi-triple-table tfoot td { background:#ececec; font-weight:bold; border:1px solid #c8c8c8; }",
  ".vpmpi-net-table { width:100%; border-collapse:collapse; margin-bottom:6px; }",
  ".vpmpi-net-table td { padding:5px 8px; border:1.5px solid #999; background:#fef9e7; font-size:12px; font-weight:bold; color:#111; }",
  ".vpmpi-note { font-size:9px; color:#555; margin-top:8px; font-style:italic; border-top:1px dashed #ccc; padding-top:4px; }",
  ".text-end { text-align:right !important; }",
  ".text-center { text-align:center !important; }",
  ".fw-bold { font-weight:bold !important; }"
].join("\n");
export {
  PaMonthPersonInfoComponent
};
//# debugId=d342230d-7f1b-562f-8da9-a4e57eeee259
//# sourceMappingURL=chunk-YEH67DAR.js.map
