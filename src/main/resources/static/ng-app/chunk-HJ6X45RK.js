import {
  NzMessageService
} from "./chunk-XWW7CXU6.js";
import {
  NzModalComponent,
  NzModalContentDirective,
  NzModalFooterDirective,
  NzModalModule
} from "./chunk-OEYWCHIN.js";
import {
  NzTreeSelectComponent,
  NzTreeSelectModule
} from "./chunk-2D6TQZG3.js";
import "./chunk-PD7KBOBI.js";
import {
  NzDatePickerComponent,
  NzDatePickerModule
} from "./chunk-TWXZW7YB.js";
import "./chunk-5TI46VEX.js";
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
  forkJoin,
  formatDate,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-VTW5U2M5.js";

// src/app/hr-card-info/hr-card-info.service.ts
var LIST_API = "/ess/viewDept/api/manageEmpPositionInfo/list";
var CARD_API = "/hrm/empinfo/api/hrCard/detail";
var HrCardInfoService = class _HrCardInfoService {
  constructor(http) {
    this.http = http;
  }
  http;
  getList(params) {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value)
        httpParams = httpParams.set(key, value);
    }
    return this.http.get(LIST_API, { params: httpParams, withCredentials: true });
  }
  getCardDetail(empId) {
    return this.http.get(CARD_API, {
      params: new HttpParams().set("empId", empId),
      withCredentials: true
    });
  }
  getCodeList(parentCodeNo) {
    return this.http.get("/sys/api/getCode/list", {
      params: new HttpParams().set("parentCodeNo", parentCodeNo),
      withCredentials: true
    });
  }
  getAuthorizedDepartments() {
    return this.http.get("/ar/attendanceSettings/api/arSupervisor/authorized-departments", {
      withCredentials: true
    });
  }
  static \u0275fac = function HrCardInfoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HrCardInfoService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HrCardInfoService, factory: _HrCardInfoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrCardInfoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/hr-card-info/hr-card-info.component.ts
var _c0 = ["printArea"];
var _c1 = () => ({ x: "900px", y: "calc(100vh - 420px)" });
var _c2 = () => ({ "max-height": "75vh", "overflow-y": "auto" });
var _c3 = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
function HrCardInfoComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.deptTreeErrorMessage());
  }
}
function HrCardInfoComponent_nz_option_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 40);
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r3.codeNo)("nzLabel", c_r3.codeName);
  }
}
function HrCardInfoComponent_nz_option_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 40);
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r4.codeNo)("nzLabel", c_r4.codeName);
  }
}
function HrCardInfoComponent_nz_option_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 40);
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r5.codeNo)("nzLabel", c_r5.codeName);
  }
}
function HrCardInfoComponent_nz_alert_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 41);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function HrCardInfoComponent_tr_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 42)(2, "label", 29);
    \u0275\u0275listener("ngModelChange", function HrCardInfoComponent_tr_91_Template_label_ngModelChange_2_listener($event) {
      const row_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleChecked(row_r8.empId, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "a", 43);
    \u0275\u0275listener("click", function HrCardInfoComponent_tr_91_Template_a_click_6_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCardForEmp(row_r8.empId));
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 42);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 42);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.isChecked(row_r8.empId));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r8.empId || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r8.empId);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r8.localName || null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.localName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r8.deptName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r8.deptName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r8.postFamilyName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r8.postFamilyName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r8.empTypeName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r8.empTypeName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r8.empOfficeName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r8.empOfficeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.dateStarted);
  }
}
function HrCardInfoComponent_ng_template_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r9 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r9, " ");
  }
}
function HrCardInfoComponent_ng_container_96_div_3_tr_174_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2, "\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "td")(4, "td")(5, "td")(6, "td");
    \u0275\u0275elementEnd();
  }
}
function HrCardInfoComponent_ng_container_96_div_3_tr_175_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
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
    const e_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmtDate(e_r10.startDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmtDate(e_r10.endDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r10.degreeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r10.institutionName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r10.subject);
  }
}
function HrCardInfoComponent_ng_container_96_div_3_tr_199_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2, "\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "td")(4, "td")(5, "td")(6, "td");
    \u0275\u0275elementEnd();
  }
}
function HrCardInfoComponent_ng_container_96_div_3_tr_200_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
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
    const f_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r11.famTypeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r11.famName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmtDate(f_r11.famBorndate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r11.famEducation);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(f_r11.famPhone);
  }
}
function HrCardInfoComponent_ng_container_96_div_3_tr_223_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2, "\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "td")(4, "td")(5, "td")(6, "td");
    \u0275\u0275elementEnd();
  }
}
function HrCardInfoComponent_ng_container_96_div_3_tr_224_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
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
    const x_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmtDate(x_r12.startDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmtDate(x_r12.endDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(x_r12.cpnyName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(x_r12.deptName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(x_r12.remark);
  }
}
function HrCardInfoComponent_ng_container_96_div_3_tr_276_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2, "\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "td")(4, "td")(5, "td")(6, "td");
    \u0275\u0275elementEnd();
  }
}
function HrCardInfoComponent_ng_container_96_div_3_tr_277_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
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
    const q_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r13.qualName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r13.qualGrade);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r13.qualInstitute);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r13.qualCardNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmtDate(q_r13.validityDate));
  }
}
function HrCardInfoComponent_ng_container_96_div_3_th_321_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r14);
  }
}
function HrCardInfoComponent_ng_container_96_div_3_td_329_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td");
  }
}
function HrCardInfoComponent_ng_container_96_div_3_td_334_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td");
  }
}
function HrCardInfoComponent_ng_container_96_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "div", 48)(3, "div", 49);
    \u0275\u0275element(4, "i", 50);
    \u0275\u0275text(5, " Hanwha Vision ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 51);
    \u0275\u0275text(7, "Vietnam");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 52);
    \u0275\u0275text(9, "HR CARD");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 53)(11, "table", 54)(12, "tbody")(13, "tr")(14, "td", 55)(15, "div", 56);
    \u0275\u0275element(16, "i", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 58);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 59);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "th", 60);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 61);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 60);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "td", 61);
    \u0275\u0275elementStart(30, "th", 60);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "td", 61);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "tr")(36, "th", 60);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "td", 61);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th", 60);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "td", 61);
    \u0275\u0275elementStart(45, "th", 60);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "td", 61);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "tr")(51, "th", 60);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "td", 61);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "th", 60);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "td", 61);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "th", 60);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "td", 61);
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "tr")(67, "th", 60);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(70, "td", 61);
    \u0275\u0275elementStart(71, "th", 60);
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(74, "td", 61);
    \u0275\u0275elementStart(75, "th", 60);
    \u0275\u0275text(76);
    \u0275\u0275pipe(77, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "td", 61);
    \u0275\u0275text(79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "tr")(81, "th", 60);
    \u0275\u0275text(82);
    \u0275\u0275pipe(83, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "td", 61);
    \u0275\u0275text(85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "th", 60);
    \u0275\u0275text(87);
    \u0275\u0275pipe(88, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(89, "td", 61);
    \u0275\u0275elementStart(90, "th", 60);
    \u0275\u0275text(91);
    \u0275\u0275pipe(92, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "td", 61);
    \u0275\u0275text(94);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "tr")(96, "th", 60);
    \u0275\u0275text(97);
    \u0275\u0275pipe(98, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(99, "td", 61);
    \u0275\u0275elementStart(100, "th", 60);
    \u0275\u0275text(101);
    \u0275\u0275pipe(102, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(103, "td", 61);
    \u0275\u0275elementStart(104, "th", 60);
    \u0275\u0275text(105);
    \u0275\u0275pipe(106, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(107, "td", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "tr")(109, "th", 60);
    \u0275\u0275text(110);
    \u0275\u0275pipe(111, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "td", 61);
    \u0275\u0275text(113);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "th", 60);
    \u0275\u0275text(115);
    \u0275\u0275pipe(116, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "td", 61);
    \u0275\u0275text(118);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "th", 60);
    \u0275\u0275text(120);
    \u0275\u0275pipe(121, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "td", 61);
    \u0275\u0275text(123);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(124, "tr")(125, "th", 60);
    \u0275\u0275text(126);
    \u0275\u0275pipe(127, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "td", 61);
    \u0275\u0275text(129);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "th", 60);
    \u0275\u0275text(131);
    \u0275\u0275pipe(132, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(133, "td", 61);
    \u0275\u0275elementStart(134, "th", 60);
    \u0275\u0275text(135);
    \u0275\u0275pipe(136, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "td", 61);
    \u0275\u0275text(138);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(139, "tr");
    \u0275\u0275element(140, "th", 62);
    \u0275\u0275elementStart(141, "th", 60);
    \u0275\u0275text(142);
    \u0275\u0275pipe(143, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(144, "td", 63);
    \u0275\u0275text(145);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(146, "th", 60);
    \u0275\u0275text(147);
    \u0275\u0275pipe(148, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(149, "td", 61);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(150, "div", 64)(151, "div")(152, "div", 65);
    \u0275\u0275text(153);
    \u0275\u0275pipe(154, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(155, "table", 54)(156, "thead")(157, "tr")(158, "th");
    \u0275\u0275text(159);
    \u0275\u0275pipe(160, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(161, "th");
    \u0275\u0275text(162);
    \u0275\u0275pipe(163, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(164, "th");
    \u0275\u0275text(165);
    \u0275\u0275pipe(166, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(167, "th");
    \u0275\u0275text(168);
    \u0275\u0275pipe(169, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(170, "th");
    \u0275\u0275text(171);
    \u0275\u0275pipe(172, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(173, "tbody");
    \u0275\u0275template(174, HrCardInfoComponent_ng_container_96_div_3_tr_174_Template, 7, 0, "tr", 66)(175, HrCardInfoComponent_ng_container_96_div_3_tr_175_Template, 11, 5, "tr", 35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(176, "div")(177, "div", 65);
    \u0275\u0275text(178);
    \u0275\u0275pipe(179, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(180, "table", 54)(181, "thead")(182, "tr")(183, "th");
    \u0275\u0275text(184);
    \u0275\u0275pipe(185, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(186, "th");
    \u0275\u0275text(187);
    \u0275\u0275pipe(188, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(189, "th");
    \u0275\u0275text(190);
    \u0275\u0275pipe(191, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(192, "th");
    \u0275\u0275text(193);
    \u0275\u0275pipe(194, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(195, "th");
    \u0275\u0275text(196);
    \u0275\u0275pipe(197, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(198, "tbody");
    \u0275\u0275template(199, HrCardInfoComponent_ng_container_96_div_3_tr_199_Template, 7, 0, "tr", 66)(200, HrCardInfoComponent_ng_container_96_div_3_tr_200_Template, 11, 5, "tr", 35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(201, "div", 65);
    \u0275\u0275text(202);
    \u0275\u0275pipe(203, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(204, "table", 54)(205, "thead")(206, "tr")(207, "th");
    \u0275\u0275text(208);
    \u0275\u0275pipe(209, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(210, "th");
    \u0275\u0275text(211);
    \u0275\u0275pipe(212, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(213, "th");
    \u0275\u0275text(214);
    \u0275\u0275pipe(215, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(216, "th");
    \u0275\u0275text(217);
    \u0275\u0275pipe(218, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(219, "th");
    \u0275\u0275text(220);
    \u0275\u0275pipe(221, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(222, "tbody");
    \u0275\u0275template(223, HrCardInfoComponent_ng_container_96_div_3_tr_223_Template, 7, 0, "tr", 66)(224, HrCardInfoComponent_ng_container_96_div_3_tr_224_Template, 11, 5, "tr", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(225, "div", 64)(226, "div")(227, "div", 65);
    \u0275\u0275text(228);
    \u0275\u0275pipe(229, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(230, "table", 54)(231, "thead")(232, "tr")(233, "th");
    \u0275\u0275text(234);
    \u0275\u0275pipe(235, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(236, "th");
    \u0275\u0275text(237);
    \u0275\u0275pipe(238, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(239, "th");
    \u0275\u0275text(240);
    \u0275\u0275pipe(241, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(242, "tbody")(243, "tr")(244, "td");
    \u0275\u0275text(245, "\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275element(246, "td")(247, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(248, "tr")(249, "td");
    \u0275\u0275text(250, "\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275element(251, "td")(252, "td");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(253, "div")(254, "div", 65);
    \u0275\u0275text(255);
    \u0275\u0275pipe(256, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(257, "table", 54)(258, "thead")(259, "tr")(260, "th");
    \u0275\u0275text(261);
    \u0275\u0275pipe(262, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(263, "th");
    \u0275\u0275text(264);
    \u0275\u0275pipe(265, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(266, "th");
    \u0275\u0275text(267);
    \u0275\u0275pipe(268, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(269, "th");
    \u0275\u0275text(270);
    \u0275\u0275pipe(271, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(272, "th");
    \u0275\u0275text(273);
    \u0275\u0275pipe(274, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(275, "tbody");
    \u0275\u0275template(276, HrCardInfoComponent_ng_container_96_div_3_tr_276_Template, 7, 0, "tr", 66)(277, HrCardInfoComponent_ng_container_96_div_3_tr_277_Template, 11, 5, "tr", 35);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(278, "div", 64)(279, "div")(280, "div", 65);
    \u0275\u0275text(281);
    \u0275\u0275pipe(282, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(283, "table", 54)(284, "thead")(285, "tr")(286, "th");
    \u0275\u0275text(287);
    \u0275\u0275pipe(288, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(289, "th");
    \u0275\u0275text(290);
    \u0275\u0275pipe(291, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(292, "th");
    \u0275\u0275text(293);
    \u0275\u0275pipe(294, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(295, "th");
    \u0275\u0275text(296);
    \u0275\u0275pipe(297, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(298, "tbody")(299, "tr")(300, "td");
    \u0275\u0275text(301, "\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275element(302, "td")(303, "td")(304, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(305, "tr")(306, "td");
    \u0275\u0275text(307, "\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275element(308, "td")(309, "td")(310, "td");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(311, "div")(312, "div", 65);
    \u0275\u0275text(313);
    \u0275\u0275pipe(314, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(315, "table", 54)(316, "thead")(317, "tr")(318, "th");
    \u0275\u0275text(319);
    \u0275\u0275pipe(320, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(321, HrCardInfoComponent_ng_container_96_div_3_th_321_Template, 2, 1, "th", 35);
    \u0275\u0275elementStart(322, "th");
    \u0275\u0275text(323);
    \u0275\u0275pipe(324, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(325, "tbody")(326, "tr")(327, "td");
    \u0275\u0275text(328, "\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275template(329, HrCardInfoComponent_ng_container_96_div_3_td_329_Template, 1, 0, "td", 35);
    \u0275\u0275element(330, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(331, "tr")(332, "td");
    \u0275\u0275text(333, "\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275template(334, HrCardInfoComponent_ng_container_96_div_3_td_334_Template, 1, 0, "td", 35);
    \u0275\u0275element(335, "td");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(336, "div", 65);
    \u0275\u0275text(337);
    \u0275\u0275pipe(338, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(339, "table", 54)(340, "thead")(341, "tr")(342, "th");
    \u0275\u0275text(343);
    \u0275\u0275pipe(344, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(345, "th");
    \u0275\u0275text(346);
    \u0275\u0275pipe(347, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(348, "th");
    \u0275\u0275text(349);
    \u0275\u0275pipe(350, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(351, "th");
    \u0275\u0275text(352);
    \u0275\u0275pipe(353, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(354, "th");
    \u0275\u0275text(355);
    \u0275\u0275pipe(356, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(357, "th");
    \u0275\u0275text(358);
    \u0275\u0275pipe(359, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(360, "th");
    \u0275\u0275text(361);
    \u0275\u0275pipe(362, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(363, "th");
    \u0275\u0275text(364);
    \u0275\u0275pipe(365, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(366, "tbody")(367, "tr")(368, "td");
    \u0275\u0275text(369, "\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275element(370, "td")(371, "td")(372, "td")(373, "td")(374, "td")(375, "td")(376, "td");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(377, "tr")(378, "td");
    \u0275\u0275text(379, "\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275element(380, "td")(381, "td")(382, "td")(383, "td")(384, "td")(385, "td")(386, "td");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const res_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(18);
    \u0275\u0275textInterpolate(res_r15.employee?.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(res_r15.employee?.empId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 100, "hcv.card.department", "Department"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(res_r15.employee?.deptNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 103, "hcv.card.contractStart", "Contract start"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 106, "hcv.card.regPlace", "REG place"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(res_r15.personalInfo?.regPlace);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(38, 109, "hcv.card.rank", "Rank"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(res_r15.employee?.postGradeNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 112, "hcv.card.contractEnd", "Contract end"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(47, 115, "hcv.card.political", "Political"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(res_r15.personalInfo?.politicalStatus);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(53, 118, "hcv.card.mainBusiness", "Mainbusiness"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(res_r15.employee?.mainBusiness);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(58, 121, "hcv.card.finalEdu", "Final edu"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(res_r15.personalInfo?.finalDegreeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(63, 124, "hcv.card.birthday", "Birthday"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.fmtDate(res_r15.personalInfo?.dob));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 127, "hcv.card.costCenter", "Cost center"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(73, 130, "hcv.card.gradSchool", "Grad school"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(77, 133, "hcv.card.gender", "Gender"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(res_r15.personalInfo?.sexName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(83, 136, "hcv.card.stateService", "State service"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(res_r15.employee?.empOffice);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(88, 139, "hcv.card.major", "Major"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(92, 142, "hcv.card.homePhone", "Home phone"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(res_r15.personalInfo?.homePhone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(98, 145, "hcv.card.divisionEntry", "Division entry"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(102, 148, "hcv.card.gradDate", "Grad date"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(106, 151, "hcv.card.tel", "Tel"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(111, 154, "hcv.card.dateEntry", "Date entry"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.fmtDate(res_r15.employee?.dateStarted));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(116, 157, "hcv.card.national", "National"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(res_r15.personalInfo?.nationalityName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(121, 160, "hcv.card.married", "Married"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(res_r15.personalInfo?.maritalStatusName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(127, 163, "hcv.card.personEmail", "Person email"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(res_r15.personalInfo?.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(132, 166, "hcv.card.cEmail", "C.email"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(136, 169, "hcv.card.marryDate", "Marry date"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.fmtDate(res_r15.personalInfo?.weddingDate));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(143, 172, "hcv.card.presentAdd", "Present add"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(res_r15.personalInfo?.homeAddress);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(148, 175, "hcv.card.eagleMId", "EagleM ID"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(154, 178, "hcv.section.education", "Education Information"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(160, 181, "hcv.col.admissions", "Admissions"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(163, 184, "hcv.col.graduation", "Graduation"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(166, 187, "hcv.col.education", "Education"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(169, 190, "hcv.col.institutionName", "Graduate school"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(172, 193, "hcv.card.major", "Major"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !res_r15.educations?.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", res_r15.educations);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(179, 196, "hcv.section.family", "Family Information"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(185, 199, "hcv.col.relation", "Relation"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(188, 202, "hcv.col.name", "Name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(191, 205, "hcv.card.birthday", "Birthday"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(194, 208, "hcv.col.education", "Education"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(197, 211, "hcv.card.tel", "Tel"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !res_r15.families?.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", res_r15.families);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(203, 214, "hcv.section.experience", "Experience Information"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(209, 217, "hcv.col.startDate", "Start date"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(212, 220, "hcv.col.endDate", "End date"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(215, 223, "hcv.col.companyName", "Corporate name"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(218, 226, "hcv.card.department", "Department"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(221, 229, "hcv.col.remarks", "Remarks"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !res_r15.experiences?.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", res_r15.experiences);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(229, 232, "hcv.section.mainBusiness", "Main Business"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(235, 235, "hcv.col.startDate", "Start date"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(238, 238, "hcv.col.endDate", "End date"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(241, 241, "hcv.card.mainBusiness", "Mainbusiness"));
    \u0275\u0275advance(15);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(256, 244, "hcv.section.qualification", "Qualification Information"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(262, 247, "hcv.col.qualification", "Qualification"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(265, 250, "hcv.col.grade", "Grade"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(268, 253, "hcv.col.issuing", "Issuing"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(271, 256, "hcv.col.evidence", "Evidence"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(274, 259, "hcv.col.effective", "Effective"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !res_r15.qualifications?.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", res_r15.qualifications);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(282, 262, "hcv.section.training", "Training Content"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(288, 265, "hcv.col.startDate", "Start date"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(291, 268, "hcv.col.endDate", "End date"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(294, 271, "hcv.col.trainingCourse", "Training course"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(297, 274, "hcv.col.fraction", "Fraction"));
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(314, 277, "hcv.section.evaluation", "Evaluation Record"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(320, 280, "essDept.year", "Year"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(313, _c3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(324, 283, "hcv.col.ability", "Ability"));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(314, _c3));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(315, _c3));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(338, 286, "hcv.section.order", "Order Information"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(344, 289, "hcv.col.orderDate", "Order date"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(347, 292, "hcv.col.orderDistinguish", "Order distinguish"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(350, 295, "hcv.card.department", "Department"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(353, 298, "common.position", "Position"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(356, 301, "hcv.card.rank", "Rank"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(359, 304, "hcv.card.mainBusiness", "Mainbusiness"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(362, 307, "hcv.card.stateService", "State service"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(365, 310, "common.empType", "Employee type"));
  }
}
function HrCardInfoComponent_ng_container_96_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275text(1, "...");
    \u0275\u0275elementEnd();
  }
}
function HrCardInfoComponent_ng_container_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", null, 2);
    \u0275\u0275template(3, HrCardInfoComponent_ng_container_96_div_3_Template, 387, 316, "div", 44)(4, HrCardInfoComponent_ng_container_96_div_4_Template, 2, 0, "div", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.cardRows());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cardLoading());
  }
}
function HrCardInfoComponent_div_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "button", 22);
    \u0275\u0275listener("click", function HrCardInfoComponent_div_97_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeCardModal());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 68);
    \u0275\u0275listener("click", function HrCardInfoComponent_div_97_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.executePrint());
    });
    \u0275\u0275element(5, "i", 25);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "common.close", "\u0110\xF3ng"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 5, "common.print", "In"), " ");
  }
}
var I18N_KEYS = [
  "essDept.keyword",
  "vdp.search.empKeyword.placeholder",
  "essDept.dept",
  "vdp.search.dept.placeholder",
  "essDept.fromDate",
  "essDept.toDate",
  "common.empGroup",
  "common.empType",
  "common.status",
  "essDept.search",
  "essDept.clearFilter",
  "common.selectAll",
  "common.stt",
  "common.empId",
  "common.empName",
  "common.deptName",
  "common.dateJoined",
  "hcv.action.printCard",
  "hcv.modal.previewTitle",
  "hcv.msg.selectAtLeastOne",
  "hcv.msg.loadCardFailed",
  "common.close",
  "common.print",
  "hcv.card.department",
  "hcv.card.contractStart",
  "hcv.card.regPlace",
  "hcv.card.rank",
  "hcv.card.contractEnd",
  "hcv.card.political",
  "hcv.card.mainBusiness",
  "hcv.card.finalEdu",
  "hcv.card.birthday",
  "hcv.card.costCenter",
  "hcv.card.gradSchool",
  "hcv.card.gender",
  "hcv.card.stateService",
  "hcv.card.major",
  "hcv.card.homePhone",
  "hcv.card.divisionEntry",
  "hcv.card.gradDate",
  "hcv.card.tel",
  "hcv.card.dateEntry",
  "hcv.card.national",
  "hcv.card.married",
  "hcv.card.personEmail",
  "hcv.card.cEmail",
  "hcv.card.marryDate",
  "hcv.card.presentAdd",
  "hcv.card.eagleMId",
  "hcv.section.education",
  "hcv.section.family",
  "hcv.section.experience",
  "hcv.section.mainBusiness",
  "hcv.section.qualification",
  "hcv.section.training",
  "hcv.section.evaluation",
  "hcv.section.order",
  "hcv.col.admissions",
  "hcv.col.graduation",
  "hcv.col.education",
  "hcv.col.institutionName",
  "hcv.col.relation",
  "hcv.col.name",
  "hcv.col.startDate",
  "hcv.col.endDate",
  "hcv.col.companyName",
  "hcv.col.remarks",
  "hcv.col.qualification",
  "hcv.col.grade",
  "hcv.col.issuing",
  "hcv.col.evidence",
  "hcv.col.effective",
  "hcv.col.trainingCourse",
  "hcv.col.fraction",
  "hcv.col.ability",
  "hcv.col.orderDate",
  "hcv.col.orderDistinguish",
  "essDept.year",
  "common.position",
  "mep.msg.loadDeptFailed",
  "common.loadFail",
  "common.totalRows"
];
var PAGE_SIZE_OPTIONS = [25, 50, 100, 200, 500];
var DEFAULT_EMP_OFFICE = "15119";
var HrCardInfoComponent = class _HrCardInfoComponent {
  constructor(api, i18n, message) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
  }
  api;
  i18n;
  message;
  printAreaEl;
  pageSizeOptions = PAGE_SIZE_OPTIONS;
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
  deptTreeErrorMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "deptTreeErrorMessage" }] : (
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
  postFamilyOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "postFamilyOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  empTypeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "empTypeOptions" }] : (
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
  checkedEmpIds = signal(
    /* @__PURE__ */ new Set(),
    ...ngDevMode ? [{ debugName: "checkedEmpIds" }] : (
      /* istanbul ignore next */
      []
    )
  );
  cardVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "cardVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  cardLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "cardLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  cardRows = signal(
    [],
    ...ngDevMode ? [{ debugName: "cardRows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** id -> danh sách id con trực tiếp - dùng để mở rộng lựa chọn cây phòng ban khi tra cứu (xem search()). */
  deptChildrenMap = /* @__PURE__ */ new Map();
  keyword = "";
  deptNos = [];
  fromDate = null;
  toDate = null;
  postFamily = null;
  empTypeCode = null;
  empOffice = DEFAULT_EMP_OFFICE;
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
    this.loadCodeOptions();
    this.search();
  }
  search() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.checkedEmpIds.set(/* @__PURE__ */ new Set());
    this.api.getList({
      keyword: this.keyword,
      deptNos: this.expandDeptSelection(this.deptNos).join(","),
      fromDate: this.formatYmd(this.fromDate),
      toDate: this.formatYmd(this.toDate),
      postFamily: this.postFamily ?? "",
      empTypeCode: this.empTypeCode ?? "",
      empOffice: this.empOffice ?? ""
    }).subscribe({
      next: (rows) => {
        this.rows.set(rows ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.rows.set([]);
        this.loading.set(false);
      }
    });
  }
  clearSearch() {
    this.keyword = "";
    this.deptNos = [];
    this.fromDate = null;
    this.toDate = null;
    this.postFamily = null;
    this.empTypeCode = null;
    this.empOffice = DEFAULT_EMP_OFFICE;
    this.search();
  }
  isChecked(empId) {
    return this.checkedEmpIds().has(empId);
  }
  toggleChecked(empId, checked) {
    const next = new Set(this.checkedEmpIds());
    if (checked)
      next.add(empId);
    else
      next.delete(empId);
    this.checkedEmpIds.set(next);
  }
  /** "Chọn tất cả" áp dụng cho các dòng đang hiển thị trên trang hiện tại (giống hành vi checkbox
   *  theo trang của DataTables bản gốc). */
  isAllCheckedOnPage(pageRows) {
    return pageRows.length > 0 && pageRows.every((r) => this.isChecked(r.empId));
  }
  toggleAllOnPage(pageRows, checked) {
    const next = new Set(this.checkedEmpIds());
    pageRows.forEach((r) => checked ? next.add(r.empId) : next.delete(r.empId));
    this.checkedEmpIds.set(next);
  }
  openCardForEmp(empId) {
    this.openCardModal([empId]);
  }
  printCard() {
    const empIds = Array.from(this.checkedEmpIds());
    if (empIds.length === 0) {
      this.message.warning(this.i18n.t("hcv.msg.selectAtLeastOne", "Vui l\xF2ng ch\u1ECDn \xEDt nh\u1EA5t m\u1ED9t nh\xE2n vi\xEAn \u0111\u1EC3 in th\u1EBB."));
      return;
    }
    this.openCardModal(empIds);
  }
  closeCardModal() {
    this.cardVisible.set(false);
  }
  /** In - lấy nguyên HTML đã render của vùng xem trước (giống bản gốc lấy innerHTML #hcv_printArea)
   *  rồi ghi vào iframe ẩn để gọi window.print(), giữ nguyên layout ngắt trang theo từng thẻ. */
  executePrint() {
    const html = this.printAreaEl?.nativeElement.innerHTML;
    if (!html)
      return;
    const iframe = document.createElement("iframe");
    iframe.style.cssText = "position:fixed;width:0;height:0;border:none;visibility:hidden;";
    document.body.appendChild(iframe);
    const doc = iframe.contentWindow?.document;
    if (!doc)
      return;
    doc.open();
    doc.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><style>${HCV_PRINT_CSS}</style></head><body>${html}</body></html>`);
    doc.close();
    iframe.contentWindow.onafterprint = () => document.body.removeChild(iframe);
    setTimeout(() => {
      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();
    }, 600);
  }
  /** ISO date/datetime ("yyyy-MM-dd..." từ LocalDate/LocalDateTime khi Jackson serialize) -> dd/MM/yyyy. */
  fmtDate(iso) {
    if (!iso || iso.length < 10)
      return "";
    const [y, m, d] = iso.substring(0, 10).split("-");
    return `${d}/${m}/${y}`;
  }
  openCardModal(empIds) {
    this.cardRows.set([]);
    this.cardLoading.set(true);
    this.cardVisible.set(true);
    forkJoin(empIds.map((id) => this.api.getCardDetail(id))).subscribe({
      next: (results) => {
        this.cardRows.set(results);
        this.cardLoading.set(false);
      },
      error: () => {
        this.cardLoading.set(false);
        this.cardVisible.set(false);
        this.message.error(this.i18n.t("hcv.msg.loadCardFailed", "L\u1ED7i t\u1EA3i d\u1EEF li\u1EC7u th\u1EBB nh\xE2n s\u1EF1"));
      }
    });
  }
  formatYmd(d) {
    return d ? formatDate(d, "yyyy-MM-dd", "vi") : "";
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
  /** nz-tree-select chỉ trả về key của node được tick trực tiếp - KHÔNG tự cascade xuống phòng ban
   *  con (xem giải thích chi tiết ở ManageEmpPositionInfoComponent.expandDeptSelection). */
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
  loadCodeOptions() {
    this.api.getCodeList("14015812").subscribe((list) => this.postFamilyOptions.set(list ?? []));
    this.api.getCodeList("13864").subscribe((list) => this.empTypeOptions.set(list ?? []));
    this.api.getCodeList("15118").subscribe((list) => this.empOfficeOptions.set(list ?? []));
  }
  static \u0275fac = function HrCardInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HrCardInfoComponent)(\u0275\u0275directiveInject(HrCardInfoService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrCardInfoComponent, selectors: [["app-hr-card-info"]], viewQuery: function HrCardInfoComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.printAreaEl = _t.first);
    }
  }, decls: 98, vars: 118, consts: [["hcvTable", ""], ["hcvTotalTpl", ""], ["printArea", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["nz-input", "", "name", "keyword", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "deptNos", "nzCheckable", "", "nzShowSearch", "", "nzAllowClear", "", "nzDropdownClassName", "hcv-dept-tree-dropdown", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["class", "text-danger small mt-1", 4, "ngIf"], [1, "col-md-2"], ["name", "fromDate", "nzFormat", "yyyy-MM-dd", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "toDate", "nzFormat", "yyyy-MM-dd", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "postFamily", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["name", "empTypeCode", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["name", "empOffice", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [1, "col-12", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], ["nz-button", "", "nzType", "default", "type", "button", 1, "btn-print-card", 3, "click"], [1, "bx", "bx-printer"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [1, "table-nowrap", 3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "50px", 1, "text-center"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel"], ["nzWidth", "90px", 1, "text-center"], ["nzWidth", "150px"], ["nzWidth", "200px"], ["nzWidth", "130px"], ["nzWidth", "110px", 1, "text-center"], [4, "ngFor", "ngForOf"], ["nzWidth", "90vw", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzBodyStyle"], [4, "nzModalContent"], [4, "nzModalFooter"], [1, "text-danger", "small", "mt-1"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], [1, "text-center"], ["href", "javascript:void(0)", 1, "hcv-name-link", 3, "click"], ["class", "hrcard-container", 4, "ngFor", "ngForOf"], ["class", "text-center text-muted py-4", 4, "ngIf"], [1, "hrcard-container"], [1, "hrcard-header"], [1, "hrcard-logo"], [2, "font-size", "24px", "font-weight", "bold", "color", "#ff6a00"], [1, "bx", "bxl-xing"], [2, "font-size", "12px", "font-weight", "bold", "padding-left", "28px"], [1, "hrcard-title"], [1, "hrcard-info-section"], [1, "hrcard-table"], ["rowspan", "8", 1, "hrcard-photo-cell"], [1, "hrcard-photo"], [1, "bx", "bxs-user", 2, "font-size", "80px", "color", "#ccc"], [1, "hrcard-emp-name"], [1, "hrcard-emp-id"], [1, "hrcard-label"], [1, "hrcard-value"], [1, "hrcard-label", 2, "border-top", "none"], ["colspan", "3", 1, "hrcard-value"], [1, "hrcard-grid-2"], [1, "hrcard-section-title"], [4, "ngIf"], [1, "text-center", "text-muted", "py-4"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"]], template: function HrCardInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "nz-card", 5)(3, "form", 6);
      \u0275\u0275listener("ngSubmit", function HrCardInfoComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 7)(5, "label", 8);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 9);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function HrCardInfoComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.keyword, $event) || (ctx.keyword = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7)(11, "label", 8);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "nz-tree-select", 10);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function HrCardInfoComponent_Template_nz_tree_select_ngModelChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.deptNos, $event) || (ctx.deptNos = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275template(16, HrCardInfoComponent_div_16_Template, 2, 1, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 12)(18, "label", 8);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "nz-date-picker", 13);
      \u0275\u0275twoWayListener("ngModelChange", function HrCardInfoComponent_Template_nz_date_picker_ngModelChange_21_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.fromDate, $event) || (ctx.fromDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 12)(23, "label", 8);
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "nz-date-picker", 14);
      \u0275\u0275twoWayListener("ngModelChange", function HrCardInfoComponent_Template_nz_date_picker_ngModelChange_26_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.toDate, $event) || (ctx.toDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 12)(28, "label", 8);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "nz-select", 15);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function HrCardInfoComponent_Template_nz_select_ngModelChange_31_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.postFamily, $event) || (ctx.postFamily = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(33, HrCardInfoComponent_nz_option_33_Template, 1, 2, "nz-option", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 12)(35, "label", 8);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "nz-select", 17);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function HrCardInfoComponent_Template_nz_select_ngModelChange_38_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.empTypeCode, $event) || (ctx.empTypeCode = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(40, HrCardInfoComponent_nz_option_40_Template, 1, 2, "nz-option", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 12)(42, "label", 8);
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "nz-select", 18);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function HrCardInfoComponent_Template_nz_select_ngModelChange_45_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.empOffice, $event) || (ctx.empOffice = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(47, HrCardInfoComponent_nz_option_47_Template, 1, 2, "nz-option", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 19)(49, "button", 20);
      \u0275\u0275element(50, "i", 21);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "button", 22);
      \u0275\u0275listener("click", function HrCardInfoComponent_Template_button_click_53_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(54, "i", 23);
      \u0275\u0275text(55);
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "button", 24);
      \u0275\u0275listener("click", function HrCardInfoComponent_Template_button_click_57_listener() {
        return ctx.printCard();
      });
      \u0275\u0275element(58, "i", 25);
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(61, "nz-card");
      \u0275\u0275template(62, HrCardInfoComponent_nz_alert_62_Template, 1, 1, "nz-alert", 26);
      \u0275\u0275elementStart(63, "nz-table", 27, 0)(65, "thead")(66, "tr")(67, "th", 28)(68, "label", 29);
      \u0275\u0275listener("ngModelChange", function HrCardInfoComponent_Template_label_ngModelChange_68_listener($event) {
        \u0275\u0275restoreView(_r1);
        const hcvTable_r6 = \u0275\u0275reference(64);
        return \u0275\u0275resetView(ctx.toggleAllOnPage(hcvTable_r6.data, $event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "th", 30);
      \u0275\u0275text(70);
      \u0275\u0275pipe(71, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "th", 31);
      \u0275\u0275text(73);
      \u0275\u0275pipe(74, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "th", 32);
      \u0275\u0275text(76);
      \u0275\u0275pipe(77, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "th", 31);
      \u0275\u0275text(79);
      \u0275\u0275pipe(80, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "th", 33);
      \u0275\u0275text(82);
      \u0275\u0275pipe(83, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "th", 34);
      \u0275\u0275text(85);
      \u0275\u0275pipe(86, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "th", 34);
      \u0275\u0275text(88);
      \u0275\u0275pipe(89, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(90, "tbody");
      \u0275\u0275template(91, HrCardInfoComponent_tr_91_Template, 18, 14, "tr", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275template(92, HrCardInfoComponent_ng_template_92_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(94, "nz-modal", 36);
      \u0275\u0275pipe(95, "translate");
      \u0275\u0275listener("nzOnCancel", function HrCardInfoComponent_Template_nz_modal_nzOnCancel_94_listener() {
        return ctx.closeCardModal();
      });
      \u0275\u0275template(96, HrCardInfoComponent_ng_container_96_Template, 5, 2, "ng-container", 37)(97, HrCardInfoComponent_div_97_Template, 8, 8, "div", 38);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const hcvTable_r6 = \u0275\u0275reference(64);
      const hcvTotalTpl_r17 = \u0275\u0275reference(93);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 47, "essDept.keyword", "M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.keyword);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 50, "vdp.search.empKeyword.placeholder", "Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 53, "essDept.dept", "Ph\xF2ng ban"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzNodes", ctx.deptNodes());
      \u0275\u0275twoWayProperty("ngModel", ctx.deptNos);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(15, 56, "vdp.search.dept.placeholder", "Ch\u1ECDn ph\xF2ng ban"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.deptTreeErrorMessage());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 59, "essDept.fromDate", "Ng\xE0y v\xE0o l\xE0m t\u1EEB"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.fromDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 62, "essDept.toDate", "Ng\xE0y v\xE0o l\xE0m \u0111\u1EBFn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.toDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 65, "common.empGroup", "Nh\xF3m nh\xE2n vi\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.postFamily);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(32, 68, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.postFamilyOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 71, "common.empType", "Lo\u1EA1i nh\xE2n vi\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.empTypeCode);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(39, 74, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.empTypeOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 77, "common.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.empOffice);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(46, 80, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.empOfficeOptions());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(52, 83, "essDept.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(56, 86, "essDept.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(60, 89, "hcv.action.printCard", "In th\u1EBB"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", hcvTotalTpl_r17)("nzScroll", \u0275\u0275pureFunction0(116, _c1));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.isAllCheckedOnPage(hcvTable_r6.data));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(71, 92, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(74, 95, "common.empName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(77, 98, "common.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(80, 101, "common.empGroup", "Nh\xF3m nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(83, 104, "common.empType", "Lo\u1EA1i nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(86, 107, "common.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(89, 110, "common.dateJoined", "Ng\xE0y v\xE0o l\xE0m"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", hcvTable_r6.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.cardVisible())("nzTitle", \u0275\u0275pipeBind2(95, 113, "hcv.modal.previewTitle", "Xem tr\u01B0\u1EDBc Th\u1EBB nh\xE2n s\u1EF1"))("nzBodyStyle", \u0275\u0275pureFunction0(117, _c2));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzDatePickerModule, NzDatePickerComponent, NzTreeSelectModule, NzTreeSelectComponent, NzAlertModule, NzAlertComponent, NzCheckboxModule, NzCheckboxComponent, NzModalModule, NzModalComponent, NzModalFooterDirective, NzModalContentDirective, TranslatePipe], styles: ["\n.btn-print-card[_ngcontent-%COMP%] {\n  color: #0d6efd;\n  border-color: #0d6efd;\n}\n.hcv-name-link[_ngcontent-%COMP%] {\n  color: #0d6efd;\n  font-weight: 600;\n  text-decoration: none;\n}\n.hcv-name-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.hrcard-container[_ngcontent-%COMP%] {\n  font-family: Arial, sans-serif;\n  color: #333;\n  width: 100%;\n  background: #fff;\n  padding: 10px;\n  border: 1px solid #eee;\n  margin-bottom: 16px;\n}\n.hrcard-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 2px dashed #ccc;\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n}\n.hrcard-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  text-align: center;\n  flex-grow: 1;\n}\n.hrcard-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 11px;\n  margin-bottom: 15px;\n}\n.hrcard-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.hrcard-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  padding: 4px;\n  text-align: center;\n  vertical-align: middle;\n}\n.hrcard-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f9f9f9;\n  font-weight: normal;\n  color: #555;\n}\n.hrcard-photo-cell[_ngcontent-%COMP%] {\n  width: 120px;\n  text-align: center;\n  vertical-align: middle;\n  padding: 0;\n  border: 1px solid #ccc;\n}\n.hrcard-photo[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 130px;\n  margin: 5px auto;\n  background: #0066cc;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.hrcard-emp-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 12px;\n  margin-top: 5px;\n}\n.hrcard-emp-id[_ngcontent-%COMP%] {\n  font-size: 11px;\n  margin-bottom: 5px;\n}\n.hrcard-label[_ngcontent-%COMP%] {\n  text-align: left !important;\n  padding-left: 8px !important;\n  width: 100px;\n}\n.hrcard-value[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.hrcard-grid-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 15px;\n}\n.hrcard-grid-2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.hrcard-section-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 13px;\n  margin-bottom: 5px;\n  text-align: left;\n}\n/*# sourceMappingURL=hr-card-info.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrCardInfoComponent, [{
    type: Component,
    args: [{ selector: "app-hr-card-info", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzSelectModule,
      NzButtonModule,
      NzDatePickerModule,
      NzTreeSelectModule,
      NzAlertModule,
      NzCheckboxModule,
      NzModalModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm - \u0111\u1EE9ng im khi cu\u1ED9n (xem .sticky-filter-card trong styles.css) -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3" (ngSubmit)="search()">
        <div class="col-md-3">
          <label class="form-label">{{ 'essDept.keyword' | translate:'M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn' }}</label>
          <input nz-input [(ngModel)]="keyword" name="keyword"
                 [placeholder]="'vdp.search.empKeyword.placeholder' | translate:'Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn'">
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'essDept.dept' | translate:'Ph\xF2ng ban' }}</label>
          <nz-tree-select class="w-100" [nzNodes]="deptNodes()" [(ngModel)]="deptNos" name="deptNos"
                           nzCheckable nzShowSearch nzAllowClear
                           [nzPlaceHolder]="'vdp.search.dept.placeholder' | translate:'Ch\u1ECDn ph\xF2ng ban'"
                           nzDropdownClassName="hcv-dept-tree-dropdown"></nz-tree-select>
          <div *ngIf="deptTreeErrorMessage()" class="text-danger small mt-1">{{ deptTreeErrorMessage() }}</div>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'essDept.fromDate' | translate:'Ng\xE0y v\xE0o l\xE0m t\u1EEB' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="fromDate" name="fromDate" nzFormat="yyyy-MM-dd"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'essDept.toDate' | translate:'Ng\xE0y v\xE0o l\xE0m \u0111\u1EBFn' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="toDate" name="toDate" nzFormat="yyyy-MM-dd"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'common.empGroup' | translate:'Nh\xF3m nh\xE2n vi\xEAn' }}</label>
          <nz-select class="w-100" [(ngModel)]="postFamily" name="postFamily" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let c of postFamilyOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'common.empType' | translate:'Lo\u1EA1i nh\xE2n vi\xEAn' }}</label>
          <nz-select class="w-100" [(ngModel)]="empTypeCode" name="empTypeCode" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let c of empTypeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</label>
          <nz-select class="w-100" [(ngModel)]="empOffice" name="empOffice" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let c of empOfficeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-12 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'essDept.search' | translate:'Tra c\u1EE9u' }}
          </button>
          <button nz-button type="button" (click)="clearSearch()">
            <i class="bx bx-x"></i> {{ 'essDept.clearFilter' | translate:'X\xF3a l\u1ECDc' }}
          </button>
          <button nz-button nzType="default" type="button" class="btn-print-card" (click)="printCard()">
            <i class="bx bx-printer"></i> {{ 'hcv.action.printCard' | translate:'In th\u1EBB' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="hcvTotalTpl"
                [nzScroll]="{ x: '900px', y: 'calc(100vh - 420px)' }"
                class="table-nowrap" #hcvTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="50px">
              <label nz-checkbox [ngModel]="isAllCheckedOnPage(hcvTable.data)"
                     (ngModelChange)="toggleAllOnPage(hcvTable.data, $event)"></label>
            </th>
            <th class="text-center" nzWidth="90px">{{ 'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
            <th nzWidth="150px">{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
            <th nzWidth="200px">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
            <th nzWidth="150px">{{ 'common.empGroup' | translate:'Nh\xF3m nh\xE2n vi\xEAn' }}</th>
            <th nzWidth="130px">{{ 'common.empType' | translate:'Lo\u1EA1i nh\xE2n vi\xEAn' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'common.dateJoined' | translate:'Ng\xE0y v\xE0o l\xE0m' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of hcvTable.data">
            <td class="text-center">
              <label nz-checkbox [ngModel]="isChecked(row.empId)" (ngModelChange)="toggleChecked(row.empId, $event)"></label>
            </td>
            <td class="text-center" [attr.title]="row.empId || null">{{ row.empId }}</td>
            <td [attr.title]="row.localName || null">
              <a href="javascript:void(0)" class="hcv-name-link" (click)="openCardForEmp(row.empId)">{{ row.localName }}</a>
            </td>
            <td [attr.title]="row.deptName || null">{{ row.deptName }}</td>
            <td [attr.title]="row.postFamilyName || null">{{ row.postFamilyName }}</td>
            <td [attr.title]="row.empTypeName || null">{{ row.empTypeName }}</td>
            <td class="text-center" [attr.title]="row.empOfficeName || null">{{ row.empOfficeName }}</td>
            <td class="text-center">{{ row.dateStarted }}</td>
          </tr>
        </tbody>
        <ng-template #hcvTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal xem tr\u01B0\u1EDBc / in Th\u1EBB nh\xE2n s\u1EF1 - r\u1ED9ng 90vw v\xEC m\u1ED7i th\u1EBB layout d\u1EA1ng kh\u1ED5 A4 ngang nhi\u1EC1u c\u1ED9t. -->
<nz-modal [nzVisible]="cardVisible()" [nzTitle]="'hcv.modal.previewTitle' | translate:'Xem tr\u01B0\u1EDBc Th\u1EBB nh\xE2n s\u1EF1'" nzWidth="90vw"
          [nzBodyStyle]="{ 'max-height': '75vh', 'overflow-y': 'auto' }"
          (nzOnCancel)="closeCardModal()">
  <ng-container *nzModalContent>
    <div #printArea>
      <div class="hrcard-container" *ngFor="let res of cardRows()">
        <div class="hrcard-header">
          <div class="hrcard-logo">
            <div style="font-size: 24px; font-weight: bold; color: #ff6a00;">
              <i class="bx bxl-xing"></i> Hanwha Vision
            </div>
            <div style="font-size: 12px; font-weight: bold; padding-left: 28px;">Vietnam</div>
          </div>
          <div class="hrcard-title">HR CARD</div>
        </div>

        <div class="hrcard-info-section">
          <table class="hrcard-table">
            <tbody>
              <tr>
                <td rowspan="8" class="hrcard-photo-cell">
                  <div class="hrcard-photo">
                    <i class="bx bxs-user" style="font-size: 80px; color: #ccc;"></i>
                  </div>
                  <div class="hrcard-emp-name">{{ res.employee?.localName }}</div>
                  <div class="hrcard-emp-id">{{ res.employee?.empId }}</div>
                </td>
                <th class="hrcard-label">{{ 'hcv.card.department' | translate:'Department' }}</th>
                <td class="hrcard-value">{{ res.employee?.deptNo }}</td>
                <th class="hrcard-label">{{ 'hcv.card.contractStart' | translate:'Contract start' }}</th>
                <td class="hrcard-value"></td>
                <th class="hrcard-label">{{ 'hcv.card.regPlace' | translate:'REG place' }}</th>
                <td class="hrcard-value">{{ res.personalInfo?.regPlace }}</td>
              </tr>
              <tr>
                <th class="hrcard-label">{{ 'hcv.card.rank' | translate:'Rank' }}</th>
                <td class="hrcard-value">{{ res.employee?.postGradeNo }}</td>
                <th class="hrcard-label">{{ 'hcv.card.contractEnd' | translate:'Contract end' }}</th>
                <td class="hrcard-value"></td>
                <th class="hrcard-label">{{ 'hcv.card.political' | translate:'Political' }}</th>
                <td class="hrcard-value">{{ res.personalInfo?.politicalStatus }}</td>
              </tr>
              <tr>
                <th class="hrcard-label">{{ 'hcv.card.mainBusiness' | translate:'Mainbusiness' }}</th>
                <td class="hrcard-value">{{ res.employee?.mainBusiness }}</td>
                <th class="hrcard-label">{{ 'hcv.card.finalEdu' | translate:'Final edu' }}</th>
                <td class="hrcard-value">{{ res.personalInfo?.finalDegreeName }}</td>
                <th class="hrcard-label">{{ 'hcv.card.birthday' | translate:'Birthday' }}</th>
                <td class="hrcard-value">{{ fmtDate(res.personalInfo?.dob) }}</td>
              </tr>
              <tr>
                <th class="hrcard-label">{{ 'hcv.card.costCenter' | translate:'Cost center' }}</th>
                <td class="hrcard-value"></td>
                <th class="hrcard-label">{{ 'hcv.card.gradSchool' | translate:'Grad school' }}</th>
                <td class="hrcard-value"></td>
                <th class="hrcard-label">{{ 'hcv.card.gender' | translate:'Gender' }}</th>
                <td class="hrcard-value">{{ res.personalInfo?.sexName }}</td>
              </tr>
              <tr>
                <th class="hrcard-label">{{ 'hcv.card.stateService' | translate:'State service' }}</th>
                <td class="hrcard-value">{{ res.employee?.empOffice }}</td>
                <th class="hrcard-label">{{ 'hcv.card.major' | translate:'Major' }}</th>
                <td class="hrcard-value"></td>
                <th class="hrcard-label">{{ 'hcv.card.homePhone' | translate:'Home phone' }}</th>
                <td class="hrcard-value">{{ res.personalInfo?.homePhone }}</td>
              </tr>
              <tr>
                <th class="hrcard-label">{{ 'hcv.card.divisionEntry' | translate:'Division entry' }}</th>
                <td class="hrcard-value"></td>
                <th class="hrcard-label">{{ 'hcv.card.gradDate' | translate:'Grad date' }}</th>
                <td class="hrcard-value"></td>
                <th class="hrcard-label">{{ 'hcv.card.tel' | translate:'Tel' }}</th>
                <td class="hrcard-value"></td>
              </tr>
              <tr>
                <th class="hrcard-label">{{ 'hcv.card.dateEntry' | translate:'Date entry' }}</th>
                <td class="hrcard-value">{{ fmtDate(res.employee?.dateStarted) }}</td>
                <th class="hrcard-label">{{ 'hcv.card.national' | translate:'National' }}</th>
                <td class="hrcard-value">{{ res.personalInfo?.nationalityName }}</td>
                <th class="hrcard-label">{{ 'hcv.card.married' | translate:'Married' }}</th>
                <td class="hrcard-value">{{ res.personalInfo?.maritalStatusName }}</td>
              </tr>
              <tr>
                <th class="hrcard-label">{{ 'hcv.card.personEmail' | translate:'Person email' }}</th>
                <td class="hrcard-value">{{ res.personalInfo?.email }}</td>
                <th class="hrcard-label">{{ 'hcv.card.cEmail' | translate:'C.email' }}</th>
                <td class="hrcard-value"></td>
                <th class="hrcard-label">{{ 'hcv.card.marryDate' | translate:'Marry date' }}</th>
                <td class="hrcard-value">{{ fmtDate(res.personalInfo?.weddingDate) }}</td>
              </tr>
              <tr>
                <th class="hrcard-label" style="border-top: none;"></th>
                <th class="hrcard-label">{{ 'hcv.card.presentAdd' | translate:'Present add' }}</th>
                <td class="hrcard-value" colspan="3">{{ res.personalInfo?.homeAddress }}</td>
                <th class="hrcard-label">{{ 'hcv.card.eagleMId' | translate:'EagleM ID' }}</th>
                <td class="hrcard-value"></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="hrcard-grid-2">
          <div>
            <div class="hrcard-section-title">{{ 'hcv.section.education' | translate:'Education Information' }}</div>
            <table class="hrcard-table">
              <thead>
                <tr>
                  <th>{{ 'hcv.col.admissions' | translate:'Admissions' }}</th>
                  <th>{{ 'hcv.col.graduation' | translate:'Graduation' }}</th>
                  <th>{{ 'hcv.col.education' | translate:'Education' }}</th>
                  <th>{{ 'hcv.col.institutionName' | translate:'Graduate school' }}</th>
                  <th>{{ 'hcv.card.major' | translate:'Major' }}</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngIf="!res.educations?.length"><td>&nbsp;</td><td></td><td></td><td></td><td></td></tr>
                <tr *ngFor="let e of res.educations">
                  <td>{{ fmtDate(e.startDate) }}</td>
                  <td>{{ fmtDate(e.endDate) }}</td>
                  <td>{{ e.degreeName }}</td>
                  <td>{{ e.institutionName }}</td>
                  <td>{{ e.subject }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <div class="hrcard-section-title">{{ 'hcv.section.family' | translate:'Family Information' }}</div>
            <table class="hrcard-table">
              <thead>
                <tr>
                  <th>{{ 'hcv.col.relation' | translate:'Relation' }}</th>
                  <th>{{ 'hcv.col.name' | translate:'Name' }}</th>
                  <th>{{ 'hcv.card.birthday' | translate:'Birthday' }}</th>
                  <th>{{ 'hcv.col.education' | translate:'Education' }}</th>
                  <th>{{ 'hcv.card.tel' | translate:'Tel' }}</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngIf="!res.families?.length"><td>&nbsp;</td><td></td><td></td><td></td><td></td></tr>
                <tr *ngFor="let f of res.families">
                  <td>{{ f.famTypeName }}</td>
                  <td>{{ f.famName }}</td>
                  <td>{{ fmtDate(f.famBorndate) }}</td>
                  <td>{{ f.famEducation }}</td>
                  <td>{{ f.famPhone }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="hrcard-section-title">{{ 'hcv.section.experience' | translate:'Experience Information' }}</div>
        <table class="hrcard-table">
          <thead>
            <tr>
              <th>{{ 'hcv.col.startDate' | translate:'Start date' }}</th>
              <th>{{ 'hcv.col.endDate' | translate:'End date' }}</th>
              <th>{{ 'hcv.col.companyName' | translate:'Corporate name' }}</th>
              <th>{{ 'hcv.card.department' | translate:'Department' }}</th>
              <th>{{ 'hcv.col.remarks' | translate:'Remarks' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="!res.experiences?.length"><td>&nbsp;</td><td></td><td></td><td></td><td></td></tr>
            <tr *ngFor="let x of res.experiences">
              <td>{{ fmtDate(x.startDate) }}</td>
              <td>{{ fmtDate(x.endDate) }}</td>
              <td>{{ x.cpnyName }}</td>
              <td>{{ x.deptName }}</td>
              <td>{{ x.remark }}</td>
            </tr>
          </tbody>
        </table>

        <div class="hrcard-grid-2">
          <div>
            <div class="hrcard-section-title">{{ 'hcv.section.mainBusiness' | translate:'Main Business' }}</div>
            <table class="hrcard-table">
              <thead>
                <tr>
                  <th>{{ 'hcv.col.startDate' | translate:'Start date' }}</th>
                  <th>{{ 'hcv.col.endDate' | translate:'End date' }}</th>
                  <th>{{ 'hcv.card.mainBusiness' | translate:'Mainbusiness' }}</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>&nbsp;</td><td></td><td></td></tr>
                <tr><td>&nbsp;</td><td></td><td></td></tr>
              </tbody>
            </table>
          </div>
          <div>
            <div class="hrcard-section-title">{{ 'hcv.section.qualification' | translate:'Qualification Information' }}</div>
            <table class="hrcard-table">
              <thead>
                <tr>
                  <th>{{ 'hcv.col.qualification' | translate:'Qualification' }}</th>
                  <th>{{ 'hcv.col.grade' | translate:'Grade' }}</th>
                  <th>{{ 'hcv.col.issuing' | translate:'Issuing' }}</th>
                  <th>{{ 'hcv.col.evidence' | translate:'Evidence' }}</th>
                  <th>{{ 'hcv.col.effective' | translate:'Effective' }}</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngIf="!res.qualifications?.length"><td>&nbsp;</td><td></td><td></td><td></td><td></td></tr>
                <tr *ngFor="let q of res.qualifications">
                  <td>{{ q.qualName }}</td>
                  <td>{{ q.qualGrade }}</td>
                  <td>{{ q.qualInstitute }}</td>
                  <td>{{ q.qualCardNo }}</td>
                  <td>{{ fmtDate(q.validityDate) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="hrcard-grid-2">
          <div>
            <div class="hrcard-section-title">{{ 'hcv.section.training' | translate:'Training Content' }}</div>
            <table class="hrcard-table">
              <thead>
                <tr>
                  <th>{{ 'hcv.col.startDate' | translate:'Start date' }}</th>
                  <th>{{ 'hcv.col.endDate' | translate:'End date' }}</th>
                  <th>{{ 'hcv.col.trainingCourse' | translate:'Training course' }}</th>
                  <th>{{ 'hcv.col.fraction' | translate:'Fraction' }}</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>&nbsp;</td><td></td><td></td><td></td></tr>
                <tr><td>&nbsp;</td><td></td><td></td><td></td></tr>
              </tbody>
            </table>
          </div>
          <div>
            <div class="hrcard-section-title">{{ 'hcv.section.evaluation' | translate:'Evaluation Record' }}</div>
            <table class="hrcard-table">
              <thead>
                <tr>
                  <th>{{ 'essDept.year' | translate:'Year' }}</th>
                  <th *ngFor="let m of [1,2,3,4,5,6,7,8,9,10,11,12]">{{ m }}</th>
                  <th>{{ 'hcv.col.ability' | translate:'Ability' }}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>&nbsp;</td>
                  <td *ngFor="let m of [1,2,3,4,5,6,7,8,9,10,11,12]"></td>
                  <td></td>
                </tr>
                <tr>
                  <td>&nbsp;</td>
                  <td *ngFor="let m of [1,2,3,4,5,6,7,8,9,10,11,12]"></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="hrcard-section-title">{{ 'hcv.section.order' | translate:'Order Information' }}</div>
        <table class="hrcard-table">
          <thead>
            <tr>
              <th>{{ 'hcv.col.orderDate' | translate:'Order date' }}</th>
              <th>{{ 'hcv.col.orderDistinguish' | translate:'Order distinguish' }}</th>
              <th>{{ 'hcv.card.department' | translate:'Department' }}</th>
              <th>{{ 'common.position' | translate:'Position' }}</th>
              <th>{{ 'hcv.card.rank' | translate:'Rank' }}</th>
              <th>{{ 'hcv.card.mainBusiness' | translate:'Mainbusiness' }}</th>
              <th>{{ 'hcv.card.stateService' | translate:'State service' }}</th>
              <th>{{ 'common.empType' | translate:'Employee type' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>&nbsp;</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td>&nbsp;</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
          </tbody>
        </table>
      </div>

      <div *ngIf="cardLoading()" class="text-center text-muted py-4">...</div>
    </div>
  </ng-container>
  <div *nzModalFooter>
    <button nz-button type="button" (click)="closeCardModal()">{{ 'common.close' | translate:'\u0110\xF3ng' }}</button>
    <button nz-button nzType="primary" type="button" (click)="executePrint()">
      <i class="bx bx-printer"></i> {{ 'common.print' | translate:'In' }}
    </button>
  </div>
</nz-modal>
`, styles: ["/* src/app/hr-card-info/hr-card-info.component.css */\n.btn-print-card {\n  color: #0d6efd;\n  border-color: #0d6efd;\n}\n.hcv-name-link {\n  color: #0d6efd;\n  font-weight: 600;\n  text-decoration: none;\n}\n.hcv-name-link:hover {\n  text-decoration: underline;\n}\n.hrcard-container {\n  font-family: Arial, sans-serif;\n  color: #333;\n  width: 100%;\n  background: #fff;\n  padding: 10px;\n  border: 1px solid #eee;\n  margin-bottom: 16px;\n}\n.hrcard-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 2px dashed #ccc;\n  padding-bottom: 10px;\n  margin-bottom: 10px;\n}\n.hrcard-title {\n  font-size: 20px;\n  font-weight: bold;\n  text-align: center;\n  flex-grow: 1;\n}\n.hrcard-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 11px;\n  margin-bottom: 15px;\n}\n.hrcard-table th,\n.hrcard-table td {\n  border: 1px solid #ccc;\n  padding: 4px;\n  text-align: center;\n  vertical-align: middle;\n}\n.hrcard-table th {\n  background-color: #f9f9f9;\n  font-weight: normal;\n  color: #555;\n}\n.hrcard-photo-cell {\n  width: 120px;\n  text-align: center;\n  vertical-align: middle;\n  padding: 0;\n  border: 1px solid #ccc;\n}\n.hrcard-photo {\n  width: 100px;\n  height: 130px;\n  margin: 5px auto;\n  background: #0066cc;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.hrcard-emp-name {\n  font-weight: bold;\n  font-size: 12px;\n  margin-top: 5px;\n}\n.hrcard-emp-id {\n  font-size: 11px;\n  margin-bottom: 5px;\n}\n.hrcard-label {\n  text-align: left !important;\n  padding-left: 8px !important;\n  width: 100px;\n}\n.hrcard-value {\n  text-align: center;\n}\n.hrcard-grid-2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 15px;\n}\n.hrcard-grid-2 > div {\n  min-width: 0;\n}\n.hrcard-section-title {\n  font-weight: bold;\n  font-size: 13px;\n  margin-bottom: 5px;\n  text-align: left;\n}\n/*# sourceMappingURL=hr-card-info.component.css.map */\n"] }]
  }], () => [{ type: HrCardInfoService }, { type: I18nService }, { type: NzMessageService }], { printAreaEl: [{
    type: ViewChild,
    args: ["printArea"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrCardInfoComponent, { className: "HrCardInfoComponent", filePath: "src/app/hr-card-info/hr-card-info.component.ts", lineNumber: 88 });
})();
var HCV_PRINT_CSS = [
  "* { box-sizing: border-box; margin: 0; padding: 0; }",
  "body { font-family: Arial, sans-serif; font-size: 11px; color: #333; background: #fff; }",
  ".hrcard-container { width: 100%; padding: 10px; page-break-after: always; break-after: page; }",
  ".hrcard-container:last-child { page-break-after: auto; break-after: auto; }",
  ".hrcard-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px dashed #ccc; padding-bottom: 10px; margin-bottom: 10px; }",
  ".hrcard-title { font-size: 18px; font-weight: bold; text-align: center; flex-grow: 1; }",
  ".hrcard-table { width: 100%; border-collapse: collapse; font-size: 10px; margin-bottom: 10px; }",
  ".hrcard-table th, .hrcard-table td { border: 1px solid #000; padding: 3px 4px; text-align: center; vertical-align: middle; word-break: break-word; }",
  ".hrcard-table th { background: #f0f0f0; font-weight: bold; }",
  ".hrcard-photo-cell { width: 100px; text-align: center; vertical-align: middle; border: 1px solid #000; }",
  ".hrcard-photo { width: 80px; height: 100px; margin: 5px auto; background: #0066cc; display: flex; align-items: center; justify-content: center; }",
  ".hrcard-emp-name { font-weight: bold; font-size: 11px; margin-top: 4px; text-align: center; }",
  ".hrcard-emp-id { font-size: 10px; margin-bottom: 4px; text-align: center; }",
  ".hrcard-label { text-align: left; padding-left: 6px; font-weight: bold; }",
  ".hrcard-value { text-align: left; padding-left: 4px; }",
  ".hrcard-info-section { margin-bottom: 10px; }",
  ".hrcard-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 10px; }",
  ".hrcard-grid-2 > div { min-width: 0; overflow: hidden; }",
  ".hrcard-section-title { font-weight: bold; font-size: 11px; margin-bottom: 4px; }",
  "@page { size: A4 portrait; margin: 8mm; }"
].join("\n");
export {
  HrCardInfoComponent
};
//# debugId=16b3c45e-ca26-5fd3-a989-912284ce6d79
//# sourceMappingURL=chunk-HJ6X45RK.js.map
