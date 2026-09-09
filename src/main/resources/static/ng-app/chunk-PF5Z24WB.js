import {
  ChangeUserService
} from "./chunk-L26I55F6.js";
import {
  NzMessageService
} from "./chunk-XWW7CXU6.js";
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

// src/app/view-pa-pay-stub/view-pa-pay-stub.service.ts
var API_BASE = "/pa/workManagement/api";
var ViewPaPayStubService = class _ViewPaPayStubService {
  constructor(http) {
    this.http = http;
  }
  http;
  getPaySchedules() {
    return this.http.get(`${API_BASE}/paySchedule`, { withCredentials: true });
  }
  loadPayStubs(params) {
    let httpParams = new HttpParams().set("payScheduleNo", params.payScheduleNo).set("lang", params.lang);
    if (params.deptNos)
      httpParams = httpParams.set("deptNos", params.deptNos);
    if (params.empSearch)
      httpParams = httpParams.set("empSearch", params.empSearch);
    if (params.empOffice)
      httpParams = httpParams.set("empOffice", params.empOffice);
    return this.http.get(`${API_BASE}/payStub/load`, { params: httpParams, withCredentials: true });
  }
  recalculate(payScheduleNo, personIds) {
    return this.http.post(`${API_BASE}/payStub/recalculate`, { payScheduleNo, personIds }, { withCredentials: true });
  }
  getAuthorizedDepartments() {
    return this.http.get("/pa/wagebase/api/supervisor/authorized-departments", { withCredentials: true });
  }
  static \u0275fac = function ViewPaPayStubService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewPaPayStubService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewPaPayStubService, factory: _ViewPaPayStubService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewPaPayStubService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-pa-pay-stub/view-pa-pay-stub.component.ts
var _c0 = ["printArea"];
function ViewPaPayStubComponent_nz_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 22);
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    \u0275\u0275property("nzValue", s_r2.payScheduleNo)("nzLabel", s_r2.payDate + (s_r2.salaryDistinName ? " " + s_r2.salaryDistinName : ""));
  }
}
function ViewPaPayStubComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.deptTreeErrorMessage());
  }
}
function ViewPaPayStubComponent_nz_option_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 22);
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r4.codeNo)("nzLabel", c_r4.codeName);
  }
}
function ViewPaPayStubComponent_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function ViewPaPayStubComponent_button_35_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.recalculate());
    });
    \u0275\u0275element(1, "i", 25);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzLoading", ctx_r2.recalculating());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, "pa.payStub.recalculate", "T\xEDnh l\u1EA1i l\u01B0\u01A1ng"), " ");
  }
}
function ViewPaPayStubComponent_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function ViewPaPayStubComponent_button_36_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.print());
    });
    \u0275\u0275element(1, "i", 27);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "pa.payStub.print", "In"), " ");
  }
}
function ViewPaPayStubComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "nz-spin", 29);
    \u0275\u0275elementStart(2, "div", 30);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 1, "pa.payStub.loading", "\u0110ang t\u1EA3i phi\u1EBFu l\u01B0\u01A1ng..."));
  }
}
function ViewPaPayStubComponent_nz_empty_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-empty", 31);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("nzNotFoundContent", \u0275\u0275pipeBind2(1, 1, "pa.payStub.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewPaPayStubComponent_div_41_ng_container_83_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 48);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.itemName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatNumber(item_r7.itemValue));
  }
}
function ViewPaPayStubComponent_div_41_ng_container_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 37);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "nz-table", 54)(5, "thead")(6, "tr")(7, "th");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 48);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275template(14, ViewPaPayStubComponent_div_41_ng_container_83_tr_14_Template, 5, 2, "tr", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const stub_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 6, "pa.payStub.standardItems", "H\u1EA1ng m\u1EE5c ti\xEAu chu\u1EA9n"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzData", stub_r8.standardItems)("nzShowPagination", false);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 9, "pa.payStub.itemName", "H\u1EA1ng m\u1EE5c"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 12, "pa.payStub.amount", "S\u1ED1 ti\u1EC1n"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", stub_r8.standardItems);
  }
}
function ViewPaPayStubComponent_div_41_tr_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 48);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 48);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 48);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r9.att?.itemName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r9.att ? ctx_r2.formatNumber(r_r9.att.itemValue) : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r9.sal?.itemName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r9.sal ? ctx_r2.formatNumber(r_r9.sal.itemValue) : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r9.ded?.itemName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r9.ded ? ctx_r2.formatNumber(r_r9.ded.itemValue) : "");
  }
}
function ViewPaPayStubComponent_div_41_tr_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 55);
    \u0275\u0275text(2, "-");
    \u0275\u0275elementEnd()();
  }
}
function ViewPaPayStubComponent_div_41_ng_container_138_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 48);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r10.remark);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatNumber(o_r10.returnValue));
  }
}
function ViewPaPayStubComponent_div_41_ng_container_138_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 37);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "table", 41)(5, "tbody");
    \u0275\u0275template(6, ViewPaPayStubComponent_div_41_ng_container_138_tr_6_Template, 5, 2, "tr", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const stub_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "pa.payStub.otherItems", "H\u1EA1ng m\u1EE5c kh\xE1c"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r2.visibleOtherItems(stub_r8));
  }
}
function ViewPaPayStubComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "div", 34);
    \u0275\u0275element(3, "img", 35);
    \u0275\u0275elementStart(4, "span", 36);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 37);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "table", 38)(11, "tr")(12, "th");
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
    \u0275\u0275elementStart(53, "tr")(54, "th", 39);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "td", 40);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "tr")(60, "th", 39);
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "td", 40);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "div", 37);
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "table", 41)(69, "thead")(70, "tr")(71, "th", 42);
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "th", 42);
    \u0275\u0275text(75);
    \u0275\u0275pipe(76, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(77, "tbody")(78, "tr")(79, "td", 42);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "td", 42);
    \u0275\u0275text(82);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(83, ViewPaPayStubComponent_div_41_ng_container_83_Template, 15, 15, "ng-container", 43);
    \u0275\u0275elementStart(84, "nz-table", 44)(85, "thead")(86, "tr")(87, "th", 45);
    \u0275\u0275text(88);
    \u0275\u0275pipe(89, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "th", 46);
    \u0275\u0275text(91);
    \u0275\u0275pipe(92, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "th", 47);
    \u0275\u0275text(94);
    \u0275\u0275pipe(95, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "tr")(97, "th");
    \u0275\u0275text(98);
    \u0275\u0275pipe(99, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "th", 48);
    \u0275\u0275text(101);
    \u0275\u0275pipe(102, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "th");
    \u0275\u0275text(104);
    \u0275\u0275pipe(105, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "th", 48);
    \u0275\u0275text(107);
    \u0275\u0275pipe(108, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "th");
    \u0275\u0275text(110);
    \u0275\u0275pipe(111, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "th", 48);
    \u0275\u0275text(113);
    \u0275\u0275pipe(114, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(115, "tbody");
    \u0275\u0275template(116, ViewPaPayStubComponent_div_41_tr_116_Template, 13, 6, "tr", 49)(117, ViewPaPayStubComponent_div_41_tr_117_Template, 3, 0, "tr", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "tfoot")(119, "tr");
    \u0275\u0275element(120, "td", 39);
    \u0275\u0275elementStart(121, "td", 50);
    \u0275\u0275text(122);
    \u0275\u0275pipe(123, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "td", 51);
    \u0275\u0275text(125);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "td", 50);
    \u0275\u0275text(127);
    \u0275\u0275pipe(128, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "td", 51);
    \u0275\u0275text(130);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(131, "table", 52)(132, "tr")(133, "td", 50);
    \u0275\u0275text(134);
    \u0275\u0275pipe(135, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "td", 51);
    \u0275\u0275text(137);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(138, ViewPaPayStubComponent_div_41_ng_container_138_Template, 7, 5, "ng-container", 43);
    \u0275\u0275elementStart(139, "div", 53);
    \u0275\u0275text(140);
    \u0275\u0275pipe(141, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stub_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(6, 50, "pa.payStub.slipTitle", "PHI\u1EBEU L\u01AF\u01A0NG TH\xC1NG"), " ", ctx_r2.monthYear(stub_r8.hrEndDate));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 53, "pa.payStub.basicInfo", "Th\xF4ng tin C\u01A1 b\u1EA3n"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 56, "pa.payStub.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stub_r8.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 59, "pa.payStub.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stub_r8.empId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 62, "pa.payStub.dept", "Ph\xF2ng ban"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stub_r8.deptName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 65, "pa.payStub.empType", "Lo\u1EA1i nh\xE2n vi\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stub_r8.empTypeName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 68, "pa.payStub.empGroup", "Nh\xF3m nh\xE2n vi\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stub_r8.postFamily);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 71, "pa.payStub.position", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stub_r8.positionName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 74, "pa.payStub.grade", "Ch\u1EE9c danh"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stub_r8.postGrade);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 77, "pa.payStub.workStatus", "Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stub_r8.empOfficeName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(56, 80, "pa.payStub.dependent", "S\u1ED1 ng\u01B0\u1EDDi ph\u1EE5 thu\u1ED9c"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stub_r8.dependentCount || 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(62, 83, "pa.payStub.socialInsuranceNo", "S\u1ED1 th\u1EBB b\u1EA3o hi\u1EC3m x\xE3 h\u1ED9i"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(stub_r8.socialInsuranceNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(67, 86, "pa.payStub.account", "T\xE0i kho\u1EA3n"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(73, 89, "pa.payStub.bankName", "Ng\xE2n h\xE0ng"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(76, 92, "pa.payStub.accountNo", "T\xE0i kho\u1EA3n"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(stub_r8.bankName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stub_r8.bankAccountNo || stub_r8.accountNo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", stub_r8.standardItems?.length);
    \u0275\u0275advance();
    \u0275\u0275property("nzData", ctx_r2.tripleRows(stub_r8))("nzShowPagination", false);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u25A0 ", \u0275\u0275pipeBind2(89, 95, "pa.payStub.attendanceItems", "Chi ti\u1EBFt ch\u1EA5m c\xF4ng"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u25A0 ", \u0275\u0275pipeBind2(92, 98, "pa.payStub.salaryItems", "Chi ti\u1EBFt l\u01B0\u01A1ng"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u25A0 ", \u0275\u0275pipeBind2(95, 101, "pa.payStub.deductionItems", "Chi ti\u1EBFt kho\u1EA3n tr\u1EEB"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(99, 104, "pa.payStub.attendanceItem", "H\u1EA1ng m\u1EE5c ch\u1EA5m c\xF4ng"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(102, 107, "pa.payStub.value", "Gi\xE1 tr\u1ECB"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(105, 110, "pa.payStub.salaryItem", "H\u1EA1ng m\u1EE5c"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(108, 113, "pa.payStub.amount", "S\u1ED1 ti\u1EC1n"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(111, 116, "pa.payStub.deductionItem", "H\u1EA1ng m\u1EE5c"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(114, 119, "pa.payStub.amount", "S\u1ED1 ti\u1EC1n"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.tripleRows(stub_r8));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.tripleRows(stub_r8).length === 0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(123, 122, "pa.payStub.total", "T\u1ED5ng"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatNumber(ctx_r2.sum(stub_r8.salaryItems)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(128, 125, "pa.payStub.total", "T\u1ED5ng"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatNumber(ctx_r2.sum(stub_r8.deductionItems)));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(135, 128, "pa.payStub.netSalary", "L\u01B0\u01A1ng th\u1EF1c l\u0129nh"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatNumber(ctx_r2.netSalary(stub_r8)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.visibleOtherItems(stub_r8).length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedScheduleOpinion || \u0275\u0275pipeBind2(141, 131, "pa.payStub.note", "\u203B M\u1ECDi th\u1EAFc m\u1EAFc v\u1EC1 n\u1ED9i dung tr\xEAn phi\u1EBFu l\u01B0\u01A1ng, vui l\xF2ng li\xEAn h\u1EC7 ph\xF2ng Nh\xE2n s\u1EF1!"));
  }
}
var I18N_KEYS = [
  "pa.payStub.paySchedule",
  "pa.payStub.dept",
  "pa.payStub.deptPlaceholder",
  "pa.payStub.empSearch",
  "pa.payStub.empSearchPlaceholder",
  "pa.payStub.empOffice",
  "pa.payStub.search",
  "pa.payStub.print",
  "pa.payStub.recalculate",
  "pa.payStub.loading",
  "pa.payStub.noData",
  "pa.payStub.slipTitle",
  "pa.payStub.basicInfo",
  "pa.payStub.empName",
  "pa.payStub.empId",
  "pa.payStub.empType",
  "pa.payStub.empGroup",
  "pa.payStub.position",
  "pa.payStub.grade",
  "pa.payStub.workStatus",
  "pa.payStub.dependent",
  "pa.payStub.account",
  "pa.payStub.bankName",
  "pa.payStub.accountNo",
  "pa.payStub.socialInsuranceNo",
  "pa.payStub.standardItems",
  "pa.payStub.itemName",
  "pa.payStub.amount",
  "pa.payStub.attendanceItems",
  "pa.payStub.salaryItems",
  "pa.payStub.deductionItems",
  "pa.payStub.attendanceItem",
  "pa.payStub.value",
  "pa.payStub.salaryItem",
  "pa.payStub.deductionItem",
  "pa.payStub.total",
  "pa.payStub.netSalary",
  "pa.payStub.otherItems",
  "pa.payStub.note",
  "pa.payStub.msgSelectSchedule",
  "pa.payStub.msgNoDataToPrint",
  "pa.payStub.msgRecalcNoEmp",
  "pa.payStub.msgRecalcSuccess",
  "common.loadFail",
  "common.selectAll",
  "mep.msg.loadDeptFailed"
];
var EMP_OFFICE_PARENT_CODE = "15118";
var ViewPaPayStubComponent = class _ViewPaPayStubComponent {
  constructor(api, empApi, i18n, message) {
    this.api = api;
    this.empApi = empApi;
    this.i18n = i18n;
    this.message = message;
  }
  api;
  empApi;
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
  recalculating = signal(
    false,
    ...ngDevMode ? [{ debugName: "recalculating" }] : (
      /* istanbul ignore next */
      []
    )
  );
  deptNodes = signal(
    [],
    ...ngDevMode ? [{ debugName: "deptNodes" }] : (
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
  deptTreeErrorMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "deptTreeErrorMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  deptChildrenMap = /* @__PURE__ */ new Map();
  payScheduleNo = null;
  deptNos = [];
  empSearch = "";
  empOfficeSearch = null;
  currentPersonIds = [];
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadSchedules();
    this.loadDeptTree();
    this.empApi.getCodeList(EMP_OFFICE_PARENT_CODE).subscribe((list) => this.empOfficeOptions.set(list ?? []));
  }
  /** Ghi chú của công ty (empOpinion) gắn theo kế hoạch trả lương đang chọn - thay cho ghi chú mặc
   *  định khi có, giống vps_currentEmpOpinion ở bản gốc. */
  get selectedScheduleOpinion() {
    return this.schedules().find((s) => s.payScheduleNo === this.payScheduleNo)?.empOpinion || "";
  }
  loadSchedules() {
    this.api.getPaySchedules().subscribe({
      next: (list) => {
        this.schedules.set(list ?? []);
        if (list && list.length > 0)
          this.payScheduleNo = list[0].payScheduleNo;
      },
      error: () => this.message.warning(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"))
    });
  }
  loadDeptTree() {
    this.api.getAuthorizedDepartments().subscribe({
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
  /** nz-tree-select chỉ trả về key của node được tick trực tiếp - mở rộng xuống các phòng ban con để
   *  khớp hành vi cascade của widget DeptTree.js gốc (xem giải thích ở ViewPaEmpAccountComponent). */
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
  search() {
    if (!this.payScheduleNo) {
      this.message.warning(this.i18n.t("pa.payStub.msgSelectSchedule", "Vui l\xF2ng ch\u1ECDn k\u1EBF ho\u1EA1ch tr\u1EA3 l\u01B0\u01A1ng!"));
      return;
    }
    this.loading.set(true);
    this.searched.set(true);
    this.stubs.set([]);
    this.currentPersonIds = [];
    const lang = document.documentElement.lang || "vi";
    this.api.loadPayStubs({
      payScheduleNo: this.payScheduleNo,
      deptNos: this.expandDeptSelection(this.deptNos).join(","),
      empSearch: this.empSearch.trim(),
      empOffice: this.empOfficeSearch,
      lang
    }).subscribe({
      next: (list) => {
        this.stubs.set(list ?? []);
        this.currentPersonIds = (list ?? []).map((s) => s.personId);
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        const msg = err?.error?.error || this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!");
        this.message.error(msg);
      }
    });
  }
  recalculate() {
    if (!this.payScheduleNo) {
      this.message.warning(this.i18n.t("pa.payStub.msgSelectSchedule", "Vui l\xF2ng ch\u1ECDn k\u1EBF ho\u1EA1ch tr\u1EA3 l\u01B0\u01A1ng!"));
      return;
    }
    if (this.currentPersonIds.length === 0) {
      this.message.warning(this.i18n.t("pa.payStub.msgRecalcNoEmp", "Kh\xF4ng c\xF3 nh\xE2n vi\xEAn \u0111\u1EC3 t\xEDnh l\u1EA1i l\u01B0\u01A1ng!"));
      return;
    }
    this.recalculating.set(true);
    this.api.recalculate(this.payScheduleNo, this.currentPersonIds).subscribe({
      next: (res) => {
        this.recalculating.set(false);
        this.message.success(res.message || this.i18n.t("pa.payStub.msgRecalcSuccess", "T\xEDnh l\u1EA1i l\u01B0\u01A1ng th\xE0nh c\xF4ng!"));
        this.search();
      },
      error: (err) => {
        this.recalculating.set(false);
        this.message.error(err?.error?.error || this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
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
  /** In - lấy nguyên HTML đã render của vùng phiếu lương (giống bản gốc lấy innerHTML #vps_printArea)
   *  mở cửa sổ mới rồi gọi window.print(), giữ nguyên CSS in riêng (khổ A4, ngắt trang theo từng phiếu). */
  print() {
    const html = this.printAreaEl?.nativeElement.innerHTML;
    if (!html || !html.trim()) {
      this.message.warning(this.i18n.t("pa.payStub.msgNoDataToPrint", "Kh\xF4ng c\xF3 phi\u1EBFu l\u01B0\u01A1ng \u0111\u1EC3 in!"));
      return;
    }
    const printWin = window.open("", "_blank");
    if (!printWin)
      return;
    printWin.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><style>${VPPS_PRINT_CSS}</style></head><body>${html}</body></html>`);
    printWin.document.close();
    printWin.onload = () => {
      printWin.focus();
      printWin.print();
      printWin.close();
    };
  }
  static \u0275fac = function ViewPaPayStubComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewPaPayStubComponent)(\u0275\u0275directiveInject(ViewPaPayStubService), \u0275\u0275directiveInject(ChangeUserService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewPaPayStubComponent, selectors: [["app-view-pa-pay-stub"]], viewQuery: function ViewPaPayStubComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.printAreaEl = _t.first);
    }
  }, decls: 42, vars: 45, consts: [["printArea", ""], [1, "row"], [1, "col-12"], [1, "mb-2"], [1, "row", "g-2", "align-items-end", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label", "mb-1", "small", "fw-semibold"], ["name", "vppsPayScheduleNo", "nzAllowClear", "", "nzShowSearch", "", 1, "w-100", 3, "ngModelChange", "ngModel"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["name", "vppsDeptNos", "nzCheckable", "", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["class", "text-danger small mt-1", 4, "ngIf"], [1, "col-md-2"], ["nz-input", "", "name", "vppsEmpSearch", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "vppsEmpOfficeSearch", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [1, "col-md-2", "d-flex", "gap-2", "align-items-end"], ["nz-button", "", "nzType", "primary", "nzSize", "small", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "nzSize", "small", "type", "button", 3, "nzLoading", "click", 4, "ngIf"], ["nz-button", "", "nzSize", "small", "type", "button", 3, "click", 4, "ngIf"], ["class", "text-center py-5", 4, "ngIf"], ["class", "py-5", 3, "nzNotFoundContent", 4, "ngIf"], ["class", "vpps-pay-stub", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"], [1, "text-danger", "small", "mt-1"], ["nz-button", "", "nzSize", "small", "type", "button", 3, "click", "nzLoading"], [1, "bx", "bx-calculator"], ["nz-button", "", "nzSize", "small", "type", "button", 3, "click"], [1, "bx", "bx-printer"], [1, "text-center", "py-5"], ["nzSize", "large"], [1, "mt-2", "text-muted"], [1, "py-5", 3, "nzNotFoundContent"], [1, "vpps-pay-stub"], [1, "vpps-stub-header"], [1, "vpps-logo"], ["src", "/assets/images/logo.png", "alt", "Logo"], [1, "vpps-title"], [1, "vpps-section-title"], [1, "vpps-info-table"], ["colspan", "2"], ["colspan", "6"], [1, "vpps-detail-table"], [1, "text-center"], [4, "ngIf"], ["nzSize", "small", 1, "vpps-triple-table", 3, "nzData", "nzShowPagination"], ["colspan", "2", 1, "text-center", "vpps-att-header"], ["colspan", "2", 1, "text-center", "vpps-sal-header"], ["colspan", "2", 1, "text-center", "vpps-ded-header"], [1, "text-end"], [4, "ngFor", "ngForOf"], [1, "fw-bold"], [1, "text-end", "fw-bold"], [1, "vpps-net-table"], [1, "vpps-note"], ["nzSize", "small", 1, "vpps-detail-table", 3, "nzData", "nzShowPagination"], ["colspan", "6", 1, "text-center", "text-muted"]], template: function ViewPaPayStubComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "nz-card", 3)(3, "form", 4);
      \u0275\u0275listener("ngSubmit", function ViewPaPayStubComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 5)(5, "label", 6);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "nz-select", 7);
      \u0275\u0275twoWayListener("ngModelChange", function ViewPaPayStubComponent_Template_nz_select_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.payScheduleNo, $event) || (ctx.payScheduleNo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(9, ViewPaPayStubComponent_nz_option_9_Template, 1, 2, "nz-option", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 5)(11, "label", 6);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "nz-tree-select", 9);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewPaPayStubComponent_Template_nz_tree_select_ngModelChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.deptNos, $event) || (ctx.deptNos = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275template(16, ViewPaPayStubComponent_div_16_Template, 2, 1, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 11)(18, "label", 6);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "input", 12);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewPaPayStubComponent_Template_input_ngModelChange_21_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.empSearch, $event) || (ctx.empSearch = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 11)(24, "label", 6);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "nz-select", 13);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewPaPayStubComponent_Template_nz_select_ngModelChange_27_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.empOfficeSearch, $event) || (ctx.empOfficeSearch = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(29, ViewPaPayStubComponent_nz_option_29_Template, 1, 2, "nz-option", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 14)(31, "button", 15);
      \u0275\u0275element(32, "i", 16);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(35, ViewPaPayStubComponent_button_35_Template, 4, 5, "button", 17)(36, ViewPaPayStubComponent_button_36_Template, 4, 4, "button", 18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(37, ViewPaPayStubComponent_div_37_Template, 5, 4, "div", 19)(38, ViewPaPayStubComponent_nz_empty_38_Template, 2, 4, "nz-empty", 20);
      \u0275\u0275elementStart(39, "div", null, 0);
      \u0275\u0275template(41, ViewPaPayStubComponent_div_41_Template, 142, 134, "div", 21);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 21, "pa.payStub.paySchedule", "K\u1EBF ho\u1EA1ch tr\u1EA3 l\u01B0\u01A1ng"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.payScheduleNo);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.schedules());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 24, "pa.payStub.dept", "Ph\xF2ng ban"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzNodes", ctx.deptNodes());
      \u0275\u0275twoWayProperty("ngModel", ctx.deptNos);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(15, 27, "pa.payStub.deptPlaceholder", "M\xE3 / T\xEAn ph\xF2ng ban"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.deptTreeErrorMessage());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 30, "pa.payStub.empSearch", "H\u1ECD t\xEAn / M\xE3 NV"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.empSearch);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(22, 33, "pa.payStub.empSearchPlaceholder", "H\u1ECD t\xEAn ho\u1EB7c M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 36, "pa.payStub.empOffice", "Tr\u1EA1ng th\xE1i l\xE0m vi\u1EC7c"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.empOfficeSearch);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(28, 39, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.empOfficeOptions());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(34, 42, "pa.payStub.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.stubs().length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.stubs().length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.searched() && ctx.stubs().length === 0);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.stubs());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzSpinModule, NzSpinComponent, NzEmptyModule, NzEmptyComponent, NzTreeSelectModule, NzTreeSelectComponent, TranslatePipe], styles: ['\n.vpps-pay-stub[_ngcontent-%COMP%] {\n  width: 210mm;\n  margin: 0 auto 24px auto;\n  padding: 10mm 12mm;\n  background: #fff;\n  border: 1px solid #bbb;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, .12);\n  font-size: 11px;\n  font-family: Arial, sans-serif;\n  color: #111;\n}\n.vpps-stub-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  border-bottom: 2.5px solid #922b21;\n  padding-bottom: 8px;\n}\n.vpps-logo[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  color: #922b21;\n  line-height: 1.4;\n  min-width: 120px;\n}\n.vpps-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 32px;\n  margin-right: 6px;\n  vertical-align: middle;\n}\n.vpps-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  text-align: center;\n  flex: 1;\n  color: #1a1a2e;\n  letter-spacing: 1px;\n}\n.vpps-section-title[_ngcontent-%COMP%] {\n  background: #922b21;\n  color: #fff;\n  font-weight: bold;\n  padding: 3px 8px;\n  margin: 8px 0 0 0;\n  font-size: 11px;\n}\n.vpps-section-title[_ngcontent-%COMP%]::before {\n  content: "\\25a0";\n}\n.vpps-info-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.vpps-info-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f2e0e0;\n  color: #333;\n  font-weight: bold;\n  padding: 4px 8px;\n  border: 1px solid #c8c8c8;\n  white-space: nowrap;\n  font-size: 10px;\n  text-align: center;\n}\n.vpps-info-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border: 1px solid #c8c8c8;\n  font-size: 10px;\n  background: #fff;\n}\n.vpps-detail-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.vpps-detail-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border: 1px solid #c8c8c8;\n  font-size: 10px;\n  background: #f2e0e0;\n  color: #333;\n  font-weight: bold;\n  text-align: center;\n}\n.vpps-detail-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 3px 8px;\n  border: 1px solid #c8c8c8;\n  font-size: 10px;\n  background: #fff;\n}\n.vpps-detail-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even)   td[_ngcontent-%COMP%] {\n  background: #fafafa;\n}\n.vpps-triple-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 8px;\n}\n.vpps-triple-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.vpps-triple-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px 6px;\n  border: 1px solid #c8c8c8;\n  font-size: 10px;\n}\n.vpps-att-header[_ngcontent-%COMP%] {\n  background: #1a5276;\n  color: #fff;\n  font-weight: bold;\n}\n.vpps-sal-header[_ngcontent-%COMP%] {\n  background: #922b21;\n  color: #fff;\n  font-weight: bold;\n}\n.vpps-ded-header[_ngcontent-%COMP%] {\n  background: #1a5276;\n  color: #fff;\n  font-weight: bold;\n}\n.vpps-triple-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2)   th[_ngcontent-%COMP%] {\n  background: #f2e0e0;\n  color: #333;\n  font-weight: bold;\n  text-align: center;\n}\n.vpps-triple-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.vpps-triple-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even)   td[_ngcontent-%COMP%] {\n  background: #fafafa;\n}\n.vpps-triple-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: #ececec;\n  font-weight: bold;\n  border: 1px solid #c8c8c8;\n}\n.vpps-net-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-bottom: 8px;\n}\n.vpps-net-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border: 1.5px solid #999;\n  background: #fef9e7;\n  font-size: 13px;\n  font-weight: bold;\n  color: #111;\n}\n.vpps-note[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #555;\n  margin-top: 10px;\n  font-style: italic;\n  border-top: 1px dashed #ccc;\n  padding-top: 6px;\n}\n.text-end[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: bold !important;\n}\n/*# sourceMappingURL=view-pa-pay-stub.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewPaPayStubComponent, [{
    type: Component,
    args: [{ selector: "app-view-pa-pay-stub", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzCardModule,
      NzInputModule,
      NzSelectModule,
      NzButtonModule,
      NzTableModule,
      NzSpinModule,
      NzEmptyModule,
      NzTreeSelectModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <nz-card class="mb-2">
      <form class="row g-2 align-items-end" (ngSubmit)="search()">
        <div class="col-md-3">
          <label class="form-label mb-1 small fw-semibold">{{ 'pa.payStub.paySchedule' | translate:'K\u1EBF ho\u1EA1ch tr\u1EA3 l\u01B0\u01A1ng' }}</label>
          <nz-select class="w-100" [(ngModel)]="payScheduleNo" name="vppsPayScheduleNo" nzAllowClear nzShowSearch>
            <nz-option *ngFor="let s of schedules()" [nzValue]="s.payScheduleNo"
                       [nzLabel]="s.payDate + (s.salaryDistinName ? ' ' + s.salaryDistinName : '')"></nz-option>
          </nz-select>
        </div>

        <div class="col-md-3">
          <label class="form-label mb-1 small fw-semibold">{{ 'pa.payStub.dept' | translate:'Ph\xF2ng ban' }}</label>
          <nz-tree-select class="w-100" [nzNodes]="deptNodes()" [(ngModel)]="deptNos" name="vppsDeptNos"
                           nzCheckable nzShowSearch nzAllowClear
                           [nzPlaceHolder]="'pa.payStub.deptPlaceholder' | translate:'M\xE3 / T\xEAn ph\xF2ng ban'"></nz-tree-select>
          <div *ngIf="deptTreeErrorMessage()" class="text-danger small mt-1">{{ deptTreeErrorMessage() }}</div>
        </div>

        <div class="col-md-2">
          <label class="form-label mb-1 small fw-semibold">{{ 'pa.payStub.empSearch' | translate:'H\u1ECD t\xEAn / M\xE3 NV' }}</label>
          <input nz-input [(ngModel)]="empSearch" name="vppsEmpSearch"
                 [placeholder]="'pa.payStub.empSearchPlaceholder' | translate:'H\u1ECD t\xEAn ho\u1EB7c M\xE3 nh\xE2n vi\xEAn'">
        </div>

        <div class="col-md-2">
          <label class="form-label mb-1 small fw-semibold">{{ 'pa.payStub.empOffice' | translate:'Tr\u1EA1ng th\xE1i l\xE0m vi\u1EC7c' }}</label>
          <nz-select class="w-100" [(ngModel)]="empOfficeSearch" name="vppsEmpOfficeSearch" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let c of empOfficeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>

        <div class="col-md-2 d-flex gap-2 align-items-end">
          <button nz-button nzType="primary" nzSize="small" type="submit">
            <i class="bx bx-search"></i> {{ 'pa.payStub.search' | translate:'Tra c\u1EE9u' }}
          </button>
          <button *ngIf="stubs().length > 0" nz-button nzSize="small" type="button"
                  [nzLoading]="recalculating()" (click)="recalculate()">
            <i class="bx bx-calculator"></i> {{ 'pa.payStub.recalculate' | translate:'T\xEDnh l\u1EA1i l\u01B0\u01A1ng' }}
          </button>
          <button *ngIf="stubs().length > 0" nz-button nzSize="small" type="button" (click)="print()">
            <i class="bx bx-printer"></i> {{ 'pa.payStub.print' | translate:'In' }}
          </button>
        </div>
      </form>
    </nz-card>

    <div *ngIf="loading()" class="text-center py-5">
      <nz-spin nzSize="large"></nz-spin>
      <div class="mt-2 text-muted">{{ 'pa.payStub.loading' | translate:'\u0110ang t\u1EA3i phi\u1EBFu l\u01B0\u01A1ng...' }}</div>
    </div>

    <nz-empty *ngIf="!loading() && searched() && stubs().length === 0"
              class="py-5"
              [nzNotFoundContent]="'pa.payStub.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u'"></nz-empty>

    <div #printArea>
      <div class="vpps-pay-stub" *ngFor="let stub of stubs()">
        <div class="vpps-stub-header">
          <div class="vpps-logo">
            <img src="/assets/images/logo.png" alt="Logo">
            <span class="vpps-title">{{ 'pa.payStub.slipTitle' | translate:'PHI\u1EBEU L\u01AF\u01A0NG TH\xC1NG' }} {{ monthYear(stub.hrEndDate) }}</span>
          </div>
        </div>

        <div class="vpps-section-title">{{ 'pa.payStub.basicInfo' | translate:'Th\xF4ng tin C\u01A1 b\u1EA3n' }}</div>
        <table class="vpps-info-table">
          <tr>
            <th>{{ 'pa.payStub.empName' | translate:'H\u1ECD t\xEAn' }}</th><td>{{ stub.localName }}</td>
            <th>{{ 'pa.payStub.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th><td>{{ stub.empId }}</td>
            <th>{{ 'pa.payStub.dept' | translate:'Ph\xF2ng ban' }}</th><td>{{ stub.deptName }}</td>
            <th>{{ 'pa.payStub.empType' | translate:'Lo\u1EA1i nh\xE2n vi\xEAn' }}</th><td>{{ stub.empTypeName }}</td>
          </tr>
          <tr>
            <th>{{ 'pa.payStub.empGroup' | translate:'Nh\xF3m nh\xE2n vi\xEAn' }}</th><td>{{ stub.postFamily }}</td>
            <th>{{ 'pa.payStub.position' | translate:'Ch\u1EE9c v\u1EE5' }}</th><td>{{ stub.positionName }}</td>
            <th>{{ 'pa.payStub.grade' | translate:'Ch\u1EE9c danh' }}</th><td>{{ stub.postGrade }}</td>
            <th>{{ 'pa.payStub.workStatus' | translate:'Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng' }}</th><td>{{ stub.empOfficeName }}</td>
          </tr>
          <tr>
            <th colspan="2">{{ 'pa.payStub.dependent' | translate:'S\u1ED1 ng\u01B0\u1EDDi ph\u1EE5 thu\u1ED9c' }}</th>
            <td colspan="6">{{ stub.dependentCount || 0 }}</td>
          </tr>
          <tr>
            <th colspan="2">{{ 'pa.payStub.socialInsuranceNo' | translate:'S\u1ED1 th\u1EBB b\u1EA3o hi\u1EC3m x\xE3 h\u1ED9i' }}</th>
            <td colspan="6">{{ stub.socialInsuranceNo }}</td>
          </tr>
        </table>

        <div class="vpps-section-title">{{ 'pa.payStub.account' | translate:'T\xE0i kho\u1EA3n' }}</div>
        <table class="vpps-detail-table">
          <thead>
            <tr>
              <th class="text-center">{{ 'pa.payStub.bankName' | translate:'Ng\xE2n h\xE0ng' }}</th>
              <th class="text-center">{{ 'pa.payStub.accountNo' | translate:'T\xE0i kho\u1EA3n' }}</th>
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
          <div class="vpps-section-title">{{ 'pa.payStub.standardItems' | translate:'H\u1EA1ng m\u1EE5c ti\xEAu chu\u1EA9n' }}</div>
          <nz-table [nzData]="stub.standardItems" [nzShowPagination]="false" nzSize="small" class="vpps-detail-table">
            <thead>
              <tr>
                <th>{{ 'pa.payStub.itemName' | translate:'H\u1EA1ng m\u1EE5c' }}</th>
                <th class="text-end">{{ 'pa.payStub.amount' | translate:'S\u1ED1 ti\u1EC1n' }}</th>
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
        <nz-table [nzData]="tripleRows(stub)" [nzShowPagination]="false" nzSize="small" class="vpps-triple-table">
          <thead>
            <tr>
              <th colspan="2" class="text-center vpps-att-header">\u25A0 {{ 'pa.payStub.attendanceItems' | translate:'Chi ti\u1EBFt ch\u1EA5m c\xF4ng' }}</th>
              <th colspan="2" class="text-center vpps-sal-header">\u25A0 {{ 'pa.payStub.salaryItems' | translate:'Chi ti\u1EBFt l\u01B0\u01A1ng' }}</th>
              <th colspan="2" class="text-center vpps-ded-header">\u25A0 {{ 'pa.payStub.deductionItems' | translate:'Chi ti\u1EBFt kho\u1EA3n tr\u1EEB' }}</th>
            </tr>
            <tr>
              <th>{{ 'pa.payStub.attendanceItem' | translate:'H\u1EA1ng m\u1EE5c ch\u1EA5m c\xF4ng' }}</th>
              <th class="text-end">{{ 'pa.payStub.value' | translate:'Gi\xE1 tr\u1ECB' }}</th>
              <th>{{ 'pa.payStub.salaryItem' | translate:'H\u1EA1ng m\u1EE5c' }}</th>
              <th class="text-end">{{ 'pa.payStub.amount' | translate:'S\u1ED1 ti\u1EC1n' }}</th>
              <th>{{ 'pa.payStub.deductionItem' | translate:'H\u1EA1ng m\u1EE5c' }}</th>
              <th class="text-end">{{ 'pa.payStub.amount' | translate:'S\u1ED1 ti\u1EC1n' }}</th>
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
              <td class="fw-bold">{{ 'pa.payStub.total' | translate:'T\u1ED5ng' }}</td>
              <td class="text-end fw-bold">{{ formatNumber(sum(stub.salaryItems)) }}</td>
              <td class="fw-bold">{{ 'pa.payStub.total' | translate:'T\u1ED5ng' }}</td>
              <td class="text-end fw-bold">{{ formatNumber(sum(stub.deductionItems)) }}</td>
            </tr>
          </tfoot>
        </nz-table>

        <table class="vpps-net-table">
          <tr>
            <td class="fw-bold">{{ 'pa.payStub.netSalary' | translate:'L\u01B0\u01A1ng th\u1EF1c l\u0129nh' }}</td>
            <td class="text-end fw-bold">{{ formatNumber(netSalary(stub)) }}</td>
          </tr>
        </table>

        <!-- H\u1EA1ng m\u1EE5c kh\xE1c - ch\u1EC9 hi\u1EC3n th\u1ECB d\xF2ng c\xF3 gi\xE1 tr\u1ECB ho\u1EB7c ghi ch\xFA (gi\u1ED1ng b\u1EA3n g\u1ED1c). -->
        <ng-container *ngIf="visibleOtherItems(stub).length">
          <div class="vpps-section-title">{{ 'pa.payStub.otherItems' | translate:'H\u1EA1ng m\u1EE5c kh\xE1c' }}</div>
          <table class="vpps-detail-table">
            <tbody>
              <tr *ngFor="let o of visibleOtherItems(stub)">
                <td>{{ o.remark }}</td>
                <td class="text-end">{{ formatNumber(o.returnValue) }}</td>
              </tr>
            </tbody>
          </table>
        </ng-container>

        <div class="vpps-note">{{ selectedScheduleOpinion || ('pa.payStub.note' | translate:'\u203B M\u1ECDi th\u1EAFc m\u1EAFc v\u1EC1 n\u1ED9i dung tr\xEAn phi\u1EBFu l\u01B0\u01A1ng, vui l\xF2ng li\xEAn h\u1EC7 ph\xF2ng Nh\xE2n s\u1EF1!') }}</div>
      </div>
    </div>
  </div>
</div>
`, styles: ['/* src/app/view-pa-pay-stub/view-pa-pay-stub.component.css */\n.vpps-pay-stub {\n  width: 210mm;\n  margin: 0 auto 24px auto;\n  padding: 10mm 12mm;\n  background: #fff;\n  border: 1px solid #bbb;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, .12);\n  font-size: 11px;\n  font-family: Arial, sans-serif;\n  color: #111;\n}\n.vpps-stub-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  border-bottom: 2.5px solid #922b21;\n  padding-bottom: 8px;\n}\n.vpps-logo {\n  font-size: 14px;\n  font-weight: bold;\n  color: #922b21;\n  line-height: 1.4;\n  min-width: 120px;\n}\n.vpps-logo img {\n  height: 32px;\n  margin-right: 6px;\n  vertical-align: middle;\n}\n.vpps-title {\n  font-size: 18px;\n  font-weight: bold;\n  text-align: center;\n  flex: 1;\n  color: #1a1a2e;\n  letter-spacing: 1px;\n}\n.vpps-section-title {\n  background: #922b21;\n  color: #fff;\n  font-weight: bold;\n  padding: 3px 8px;\n  margin: 8px 0 0 0;\n  font-size: 11px;\n}\n.vpps-section-title::before {\n  content: "\\25a0";\n}\n.vpps-info-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.vpps-info-table th {\n  background: #f2e0e0;\n  color: #333;\n  font-weight: bold;\n  padding: 4px 8px;\n  border: 1px solid #c8c8c8;\n  white-space: nowrap;\n  font-size: 10px;\n  text-align: center;\n}\n.vpps-info-table td {\n  padding: 4px 8px;\n  border: 1px solid #c8c8c8;\n  font-size: 10px;\n  background: #fff;\n}\n.vpps-detail-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.vpps-detail-table th {\n  padding: 4px 8px;\n  border: 1px solid #c8c8c8;\n  font-size: 10px;\n  background: #f2e0e0;\n  color: #333;\n  font-weight: bold;\n  text-align: center;\n}\n.vpps-detail-table td {\n  padding: 3px 8px;\n  border: 1px solid #c8c8c8;\n  font-size: 10px;\n  background: #fff;\n}\n.vpps-detail-table tbody tr:nth-child(even) td {\n  background: #fafafa;\n}\n.vpps-triple-table {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 8px;\n}\n.vpps-triple-table th,\n.vpps-triple-table td {\n  padding: 5px 6px;\n  border: 1px solid #c8c8c8;\n  font-size: 10px;\n}\n.vpps-att-header {\n  background: #1a5276;\n  color: #fff;\n  font-weight: bold;\n}\n.vpps-sal-header {\n  background: #922b21;\n  color: #fff;\n  font-weight: bold;\n}\n.vpps-ded-header {\n  background: #1a5276;\n  color: #fff;\n  font-weight: bold;\n}\n.vpps-triple-table thead tr:nth-child(2) th {\n  background: #f2e0e0;\n  color: #333;\n  font-weight: bold;\n  text-align: center;\n}\n.vpps-triple-table tbody td {\n  background: #fff;\n}\n.vpps-triple-table tbody tr:nth-child(even) td {\n  background: #fafafa;\n}\n.vpps-triple-table tfoot td {\n  background: #ececec;\n  font-weight: bold;\n  border: 1px solid #c8c8c8;\n}\n.vpps-net-table {\n  width: 100%;\n  border-collapse: collapse;\n  margin-bottom: 8px;\n}\n.vpps-net-table td {\n  padding: 6px 10px;\n  border: 1.5px solid #999;\n  background: #fef9e7;\n  font-size: 13px;\n  font-weight: bold;\n  color: #111;\n}\n.vpps-note {\n  font-size: 10px;\n  color: #555;\n  margin-top: 10px;\n  font-style: italic;\n  border-top: 1px dashed #ccc;\n  padding-top: 6px;\n}\n.text-end {\n  text-align: right !important;\n}\n.text-center {\n  text-align: center !important;\n}\n.fw-bold {\n  font-weight: bold !important;\n}\n/*# sourceMappingURL=view-pa-pay-stub.component.css.map */\n'] }]
  }], () => [{ type: ViewPaPayStubService }, { type: ChangeUserService }, { type: I18nService }, { type: NzMessageService }], { printAreaEl: [{
    type: ViewChild,
    args: ["printArea"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewPaPayStubComponent, { className: "ViewPaPayStubComponent", filePath: "src/app/view-pa-pay-stub/view-pa-pay-stub.component.ts", lineNumber: 69 });
})();
var VPPS_PRINT_CSS = [
  "@page { size:A4 portrait; margin:8mm; }",
  "*, *::before, *::after { box-sizing:border-box; -webkit-print-color-adjust:exact !important; print-color-adjust:exact !important; color-adjust:exact !important; }",
  "html, body { width:194mm; margin:0 auto; padding:0; background:#fff; font-family:Arial,sans-serif; font-size:10px; color:#111; }",
  "table { max-width:100% !important; word-break:break-word; }",
  ".vpps-pay-stub { width:100%; max-width:194mm; margin:0 auto; padding:4mm 0; background:#fff; page-break-after:always; break-after:page; overflow:hidden; }",
  ".vpps-pay-stub:last-child { page-break-after:avoid; break-after:avoid; }",
  ".vpps-stub-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:8px; border-bottom:2.5px solid #922b21; padding-bottom:6px; }",
  ".vpps-logo { font-size:12px; font-weight:bold; color:#922b21; line-height:1.4; min-width:100px; }",
  ".vpps-logo img { height:32px; margin-right:6px; vertical-align:middle; }",
  ".vpps-title { font-size:15px; font-weight:bold; text-align:center; flex:1; color:#1a1a2e; letter-spacing:1px; }",
  ".vpps-section-title { background:#922b21; color:#fff; font-weight:bold; padding:2px 6px; margin:6px 0 0 0; font-size:10px; }",
  '.vpps-section-title::before { content:"\\25A0 "; }',
  ".vpps-info-table { width:100%; border-collapse:collapse; table-layout:fixed; }",
  ".vpps-info-table th { background:#f2e0e0; color:#333; font-weight:bold; padding:5px 6px; border:1px solid #c8c8c8; font-size:9px; text-align:center; overflow:hidden; white-space:nowrap; }",
  ".vpps-info-table td { padding:5px 6px; border:1px solid #c8c8c8; font-size:9px; background:#fff; overflow:hidden; word-break:break-word; }",
  ".vpps-detail-table { width:100%; border-collapse:collapse; }",
  ".vpps-detail-table th { padding:5px 6px; border:1px solid #c8c8c8; font-size:9px; background:#f2e0e0; color:#333; font-weight:bold; text-align:center; }",
  ".vpps-detail-table td { padding:5px 6px; border:1px solid #c8c8c8; font-size:9px; background:#fff; }",
  ".vpps-detail-table tbody tr:nth-child(even) td { background:#fafafa; }",
  ".vpps-triple-table { width:100%; border-collapse:collapse; margin-top:6px; table-layout:fixed; }",
  ".vpps-triple-table th, .vpps-triple-table td { padding:5px 6px; border:1px solid #c8c8c8; font-size:9px; overflow:hidden; word-break:break-word; }",
  ".vpps-att-header { background:#1a5276; color:#fff; font-weight:bold; width:18%; }",
  ".vpps-sal-header { background:#922b21; color:#fff; font-weight:bold; width:18%; }",
  ".vpps-ded-header { background:#1a5276; color:#fff; font-weight:bold; width:18%; }",
  ".vpps-triple-table thead tr:nth-child(2) th { background:#f2e0e0; color:#333; font-weight:bold; text-align:center; }",
  ".vpps-triple-table tbody td { background:#fff; }",
  ".vpps-triple-table tbody tr:nth-child(even) td { background:#fafafa; }",
  ".vpps-triple-table tfoot td { background:#ececec; font-weight:bold; border:1px solid #c8c8c8; }",
  ".vpps-net-table { width:100%; border-collapse:collapse; margin-bottom:6px; }",
  ".vpps-net-table td { padding:5px 8px; border:1.5px solid #999; background:#fef9e7; font-size:12px; font-weight:bold; color:#111; }",
  ".vpps-note { font-size:9px; color:#555; margin-top:8px; font-style:italic; border-top:1px dashed #ccc; padding-top:4px; }",
  ".text-end { text-align:right !important; }",
  ".text-center { text-align:center !important; }",
  ".fw-bold { font-weight:bold !important; }"
].join("\n");
export {
  ViewPaPayStubComponent
};
//# debugId=478e8a00-f7ae-5a5f-a608-a0f3f9d5c6c2
//# sourceMappingURL=chunk-PF5Z24WB.js.map
