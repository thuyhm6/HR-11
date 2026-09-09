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
  __spreadProps,
  __spreadValues,
  computed,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
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
  ɵɵtwoWayProperty
} from "./chunk-VTW5U2M5.js";

// src/app/apply-leave-info-list/apply-leave-info-list.service.ts
var API_BASE = "/ess/infoApplyLeave/api/myCardApply";
var DETAIL_URL = "/ess/infoApplyAttendance/api/checkAttendanceEx/detail";
var ApplyLeaveInfoListService = class _ApplyLeaveInfoListService {
  constructor(http) {
    this.http = http;
  }
  http;
  getBasicInfo() {
    return this.http.get("/ess/empinfo/api/personalInfo/myInfo", { withCredentials: true });
  }
  getCodeList(parentCodeNo) {
    return this.http.get("/sys/api/getCode/list", {
      params: new HttpParams().set("parentCodeNo", parentCodeNo),
      withCredentials: true
    });
  }
  getList(params) {
    let httpParams = new HttpParams();
    if (params.affirmFlag)
      httpParams = httpParams.set("affirmFlag", params.affirmFlag);
    if (params.startDate)
      httpParams = httpParams.set("startDate", params.startDate);
    if (params.endDate)
      httpParams = httpParams.set("endDate", params.endDate);
    return this.http.get(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
  }
  cancel(applyNos) {
    return this.http.post(`${API_BASE}/cancel`, applyNos, { withCredentials: true });
  }
  getDetail(applyNo, applyType) {
    let httpParams = new HttpParams().set("applyNo", applyNo);
    if (applyType)
      httpParams = httpParams.set("applyType", applyType);
    return this.http.get(DETAIL_URL, { params: httpParams, withCredentials: true });
  }
  static \u0275fac = function ApplyLeaveInfoListService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApplyLeaveInfoListService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApplyLeaveInfoListService, factory: _ApplyLeaveInfoListService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApplyLeaveInfoListService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/apply-leave-info-list/apply-leave-info-list.component.ts
var _c0 = () => [25, 50, 100, 200];
var _c1 = () => ({ x: "1650px" });
var _c2 = () => ({ "max-height": "75vh", "overflow-y": "auto" });
var _c3 = () => ["14014306", "14014307", "14014308"];
var _c4 = (a0) => [a0];
function ApplyLeaveInfoListComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 35)(2, "table", 36)(3, "colgroup");
    \u0275\u0275element(4, "col", 37)(5, "col", 38)(6, "col", 37)(7, "col", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "tbody")(9, "tr")(10, "th", 39);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 39);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "tr")(21, "th", 39);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 39);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "tr")(32, "th", 39);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "td");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th", 39);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "td");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "tr")(43, "th", 39);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "td");
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th", 39);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "td");
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const info_r2 = ctx.ngIf;
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 16, "essEmpCard.localName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 19, "essEmpCard.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.empId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 22, "essEmpCard.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.deptName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 25, "essEmpCard.headDept", "Tr\u01B0\u1EDFng ph\xF2ng"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.headDepartment);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 28, "essEmpCard.postFamily", "Nh\xF3m nh\xE2n vi\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.postFamilyName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 31, "essEmpCard.postGrade", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.postGradeName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 34, "essEmpCard.positionName", "Ch\u1EE9c danh"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.positionNoName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 37, "essEmpCard.dateStarted", "Ng\xE0y v\xE0o l\xE0m"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.dateStarted);
  }
}
function ApplyLeaveInfoListComponent_nz_option_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 40);
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r3.codeNo)("nzLabel", c_r3.codeName);
  }
}
function ApplyLeaveInfoListComponent_nz_alert_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 41);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r3.errorMessage() ?? "");
  }
}
function ApplyLeaveInfoListComponent_tr_74_label_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 49);
    \u0275\u0275twoWayListener("ngModelChange", function ApplyLeaveInfoListComponent_tr_74_label_2_Template_label_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const row_r6 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r6.selected, $event) || (row_r6.selected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r6.selected);
    \u0275\u0275control();
  }
}
function ApplyLeaveInfoListComponent_tr_74_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("- ", ctx_r3.formatWorkTime(row_r6.workTime).to);
  }
}
function ApplyLeaveInfoListComponent_tr_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 42);
    \u0275\u0275listener("click", function ApplyLeaveInfoListComponent_tr_74_Template_tr_click_0_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openDetail(row_r6));
    });
    \u0275\u0275elementStart(1, "td", 43);
    \u0275\u0275listener("click", function ApplyLeaveInfoListComponent_tr_74_Template_td_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(2, ApplyLeaveInfoListComponent_tr_74_label_2_Template, 1, 1, "label", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 45);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 45);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "a", 46);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 47)(11, "div");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 47)(18, "div");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td", 45);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td", 47)(27, "div");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, ApplyLeaveInfoListComponent_tr_74_div_29_Template, 2, 1, "div", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "td");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "td", 45);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "td");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pureFunction0(32, _c3).includes(row_r6.affirmFlag));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r8 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.arDateStr);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r6.itemName || row_r6.itemNo);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(13, 20, "essCwa.inLabel", "V\xE0o"), ": ", row_r6.indoorTime || "**:**");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(16, 23, "essCwa.outLabel", "Ra"), ":\xA0 ", row_r6.outdoorTime || "**:**");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(20, 26, "essCwa.inLabel", "V\xE0o"), ": ", row_r6.fromTime);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(23, 29, "essCwa.outLabel", "Ra"), ":\xA0 ", row_r6.toTime);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r6.shiftName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.formatWorkTime(row_r6.workTime).from);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.formatWorkTime(row_r6.workTime).to);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.applyReason || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.applyReason);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.affirmFlagName || row_r6.affirmFlag);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.hrComment || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.hrComment);
  }
}
function ApplyLeaveInfoListComponent_ng_template_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r9 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r9, " ");
  }
}
function ApplyLeaveInfoListComponent_ng_container_78_nz_alert_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 41);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzMessage", ctx_r3.detailErrorMessage() ?? "");
  }
}
function ApplyLeaveInfoListComponent_ng_container_78_ng_container_2_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 64);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "essCommon.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ApplyLeaveInfoListComponent_ng_container_78_ng_container_2_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 45);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 45);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 45);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.approvalSeqLabel(item_r10));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r10.affirmTypeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r10.affirmFlagName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r10.affirmName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r10.affirmContent);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r10.updateDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r10.deptName);
  }
}
function ApplyLeaveInfoListComponent_ng_container_78_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "nz-descriptions", 52)(2, "nz-descriptions-item", 53);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "nz-descriptions-item", 53);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "h6", 54);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 55)(12, "nz-table", 56)(13, "thead")(14, "tr")(15, "th", 57);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 58);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 58);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th", 59);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "th", 60);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "tbody");
    \u0275\u0275template(37, ApplyLeaveInfoListComponent_ng_container_78_ng_container_2_tr_37_Template, 4, 4, "tr", 51)(38, ApplyLeaveInfoListComponent_ng_container_78_ng_container_2_tr_38_Template, 15, 7, "tr", 61);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "h6", 54);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "nz-descriptions", 52)(43, "nz-descriptions-item", 53);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "nz-descriptions-item", 53);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "nz-descriptions-item", 53);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275text(51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "nz-descriptions-item", 53);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "h6", 54);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 62)(59, "nz-table", 56)(60, "thead")(61, "tr")(62, "th");
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "th", 59);
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "th", 59);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "th", 63);
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "th");
    \u0275\u0275text(75);
    \u0275\u0275pipe(76, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(77, "tbody")(78, "tr")(79, "td", 45);
    \u0275\u0275text(80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "td", 45);
    \u0275\u0275text(82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "td", 45);
    \u0275\u0275text(84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "td", 45);
    \u0275\u0275text(86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "td");
    \u0275\u0275text(88);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const d_r11 = ctx.ngIf;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("nzColumn", 1);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(3, 40, "essCommon.title", "Ti\xEAu \u0111\u1EC1"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.applyTitleText());
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(6, 43, "essCommon.applicant", "Ng\u01B0\u1EDDi xin ph\xE9p"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.applicantText());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 46, "essCommon.approvalOrder", "Tr\xECnh t\u1EF1 duy\u1EC7t"));
    \u0275\u0275advance(3);
    \u0275\u0275property("nzData", d_r11.approvalList)("nzShowPagination", false);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 49, "common.stt", "STT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 52, "essCommon.approvalOrder", "Tr\xECnh t\u1EF1 duy\u1EC7t"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 55, "essLeave.approvalStatus", "Tr\u1EA1ng th\xE1i duy\u1EC7t"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 58, "essCommon.fullName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 61, "essCommon.opinion", "\xDD ki\u1EBFn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 64, "essCommon.executionTime", "Th\u1EDDi gian th\u1EF1c hi\u1EC7n"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 67, "common.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !d_r11.approvalList?.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", d_r11.approvalList);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 70, "essCommon.empInfo", "Th\xF4ng tin nh\xE2n vi\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColumn", 2);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(44, 73, "essCommon.fullName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r11.employeeInfo?.["localName"]);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(47, 76, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r11.employeeInfo?.["empId"]);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(50, 79, "common.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r11.employeeInfo?.["deptName"]);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(53, 82, "essCommon.position", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r11.employeeInfo?.["postGradeName"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 85, "essCommon.applyInfo", "Th\xF4ng tin xin ph\xE9p"));
    \u0275\u0275advance(3);
    \u0275\u0275property("nzData", \u0275\u0275pureFunction1(103, _c4, d_r11.leaveInfo))("nzShowPagination", false);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(64, 88, "essCommon.leaveType", "Lo\u1EA1i ngh\u1EC9 ph\xE9p"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(67, 91, "essCommon.startTime", "Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(70, 94, "essCommon.endTime", "Th\u1EDDi gian k\u1EBFt th\xFAc"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(73, 97, "common.hours", "S\u1ED1 gi\u1EDD"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(76, 100, "essCommon.reason", "L\xFD do"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(d_r11.leaveInfo?.["leaveTypeName"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r11.leaveInfo?.["leaveFromTime"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r11.leaveInfo?.["leaveToTime"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r11.leaveInfo?.["applyLength"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r11.leaveInfo?.["leaveReason"]);
  }
}
function ApplyLeaveInfoListComponent_ng_container_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ApplyLeaveInfoListComponent_ng_container_78_nz_alert_1_Template, 1, 1, "nz-alert", 22)(2, ApplyLeaveInfoListComponent_ng_container_78_ng_container_2_Template, 89, 105, "ng-container", 51);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.detailErrorMessage());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.detailLoading() && ctx_r3.detailData());
  }
}
var I18N_KEYS = [
  "essEmpCard.localName",
  "essEmpCard.empId",
  "essEmpCard.deptName",
  "essEmpCard.headDept",
  "essEmpCard.postFamily",
  "essEmpCard.postGrade",
  "essEmpCard.positionName",
  "essEmpCard.dateStarted",
  "essLeave.startDate",
  "essLeave.endDate",
  "essLeave.approvalStatus",
  "essLeave.search",
  "essLeave.cancelBtn",
  "essLeave.approvalInfo",
  "essCommon.quickFilter",
  "essCommon.attendanceDate",
  "essCommon.category",
  "essCommon.cardSwipeTime",
  "essCommon.shift",
  "essCommon.workTime",
  "essCommon.hrOpinion",
  "essCommon.title",
  "essCommon.applicant",
  "essCommon.approvalOrder",
  "essCommon.fullName",
  "essCommon.opinion",
  "essCommon.executionTime",
  "essCommon.empInfo",
  "essCommon.position",
  "essCommon.applyInfo",
  "essCommon.leaveType",
  "essCommon.startTime",
  "essCommon.endTime",
  "essCommon.reason",
  "essCommon.noData",
  "essCommon.cancelSuccess",
  "essCommon.cancelFail",
  "essCommon.selectAtLeastOne",
  "essCommon.confirmCancel1",
  "essCommon.confirmCancel2",
  "essCwa.inLabel",
  "essCwa.outLabel",
  "essOt.timeRange",
  "common.remark",
  "common.stt",
  "common.deptName",
  "common.empId",
  "common.hours",
  "common.close",
  "common.totalRows",
  "common.selectAll",
  "common.loadFail"
];
var CANCELABLE_FLAGS = ["14014306", "14014307", "14014308"];
var ApplyLeaveInfoListComponent = class _ApplyLeaveInfoListComponent {
  constructor(api, i18n, message, modal) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
    this.modal = modal;
  }
  api;
  i18n;
  message;
  modal;
  basicInfo = signal(
    null,
    ...ngDevMode ? [{ debugName: "basicInfo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  affirmFlagOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "affirmFlagOptions" }] : (
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
  errorMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "errorMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  cancelling = signal(
    false,
    ...ngDevMode ? [{ debugName: "cancelling" }] : (
      /* istanbul ignore next */
      []
    )
  );
  quickFilterKeyword = "";
  filteredRows = computed(
    () => {
      const kw = this.quickFilterKeyword.trim().toLowerCase();
      const rows = this.rows();
      if (!kw)
        return rows;
      return rows.filter((r) => [r.itemName, r.itemNo, r.arDateStr, r.fromTime, r.toTime, r.shiftName, r.applyReason, r.affirmFlagName].some((v) => v && String(v).toLowerCase().includes(kw)));
    },
    ...ngDevMode ? [{ debugName: "filteredRows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  cancelableRows = computed(
    () => this.rows().filter((r) => CANCELABLE_FLAGS.includes(String(r.affirmFlag))),
    ...ngDevMode ? [{ debugName: "cancelableRows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  allCancelableSelected = computed(
    () => {
      const rows = this.cancelableRows();
      return rows.length > 0 && rows.every((r) => r.selected);
    },
    ...ngDevMode ? [{ debugName: "allCancelableSelected" }] : (
      /* istanbul ignore next */
      []
    )
  );
  someCancelableSelected = computed(
    () => this.cancelableRows().some((r) => r.selected) && !this.allCancelableSelected(),
    ...ngDevMode ? [{ debugName: "someCancelableSelected" }] : (
      /* istanbul ignore next */
      []
    )
  );
  detailVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "detailVisible" }] : (
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
  detailErrorMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "detailErrorMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  detailData = signal(
    null,
    ...ngDevMode ? [{ debugName: "detailData" }] : (
      /* istanbul ignore next */
      []
    )
  );
  affirmFlag = null;
  startDate = null;
  endDate = null;
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadBasicInfo();
    this.api.getCodeList("14014304").subscribe((list) => this.affirmFlagOptions.set(list ?? []));
    this.initDefaultDateRange();
    this.search();
  }
  search() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getList({
      affirmFlag: this.affirmFlag ?? "",
      startDate: this.formatDmy(this.startDate),
      endDate: this.formatDmy(this.endDate)
    }).subscribe({
      next: (rows) => {
        this.rows.set((rows ?? []).map((r) => __spreadProps(__spreadValues({}, r), { selected: false })));
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.rows.set([]);
        this.loading.set(false);
      }
    });
  }
  /** Mặc định từ ngày 01 đến ngày cuối tháng hiện tại - giữ đúng hành vi aliGetDefaultDateRange() bản gốc. */
  initDefaultDateRange() {
    const now = /* @__PURE__ */ new Date();
    this.startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    this.endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  }
  toggleSelectAll(checked) {
    this.cancelableRows().forEach((r) => r.selected = checked);
  }
  cancelSelected() {
    const t = (key, fallback) => this.i18n.t(key, fallback);
    const selected = this.rows().filter((r) => r.selected);
    if (!selected.length) {
      this.message.warning(t("essCommon.selectAtLeastOne", "Vui l\xF2ng ch\u1ECDn \xEDt nh\u1EA5t m\u1ED9t d\xF2ng \u0111\u1EC3 h\u1EE7y b\u1ECF."));
      return;
    }
    const confirmMsg = `${t("essCommon.confirmCancel1", "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n h\u1EE7y b\u1ECF")} ${selected.length} ${t("essCommon.confirmCancel2", "\u0111\u01A1n \u0111\xE3 ch\u1ECDn?")}`;
    this.modal.confirm({
      nzTitle: t("essLeave.cancelBtn", "H\u1EE7y b\u1ECF"),
      nzContent: confirmMsg,
      nzOnOk: () => this.runCancel(selected.map((r) => String(r.applyNo)))
    });
  }
  runCancel(applyNos) {
    const t = (key, fallback) => this.i18n.t(key, fallback);
    this.cancelling.set(true);
    this.api.cancel(applyNos).subscribe({
      next: (res) => {
        this.cancelling.set(false);
        if (res?.success) {
          this.message.success(res.message || t("essCommon.cancelSuccess", "H\u1EE7y b\u1ECF th\xE0nh c\xF4ng."));
          this.search();
        } else {
          this.message.error(res?.error || t("essCommon.cancelFail", "H\u1EE7y b\u1ECF th\u1EA5t b\u1EA1i."));
        }
      },
      error: () => {
        this.cancelling.set(false);
        this.message.error(t("essCommon.cancelFail", "H\u1EE7y b\u1ECF th\u1EA5t b\u1EA1i."));
      }
    });
  }
  openDetail(row) {
    this.detailVisible.set(true);
    this.detailLoading.set(true);
    this.detailErrorMessage.set(null);
    this.detailData.set(null);
    this.api.getDetail(String(row.applyNo), row.itemNo).subscribe({
      next: (res) => {
        this.detailData.set(res);
        this.detailLoading.set(false);
      },
      error: () => {
        this.detailErrorMessage.set(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.detailLoading.set(false);
      }
    });
  }
  closeDetail() {
    this.detailVisible.set(false);
  }
  /** "[Loại nghỉ/tên hạng mục]" - dùng làm nzTitle của modal, đúng cách gán ali_applyDetailTitle bản gốc. */
  modalTitle() {
    const info = this.detailData()?.leaveInfo;
    const leaveTypeName = info?.["leaveTypeName"] || info?.["itemName"];
    return `[${leaveTypeName || this.i18n.t("essLeave.approvalInfo", "Th\xF4ng tin ph\xEA duy\u1EC7t")}]`;
  }
  /** "{loại/tên}/Apply({họ tên})[Date: {từ} ~ {đến}]" - đúng aliBuildTitle() bản gốc. */
  applyTitleText() {
    const info = this.detailData()?.leaveInfo;
    if (!info)
      return "";
    return `${info["leaveTypeName"] || info["itemName"] || ""}/Apply(${info["localName"] || ""})[Date: ${info["leaveFromTime"] || ""} ~ ${info["leaveToTime"] || ""}]`;
  }
  /** "{họ tên}/{chức vụ}/{phòng ban}" - đúng ali_modalApplicant bản gốc. */
  applicantText() {
    const info = this.detailData()?.employeeInfo;
    if (!info)
      return "";
    return `${info["localName"] || ""}/${info["postGradeName"] || ""}/${info["deptName"] || ""}`;
  }
  /** STT dòng phê duyệt - affirmLevel=100 là dòng xác nhận của HR (aliRenderApprovalRows() bản gốc). */
  approvalSeqLabel(item) {
    return String(item.affirmLevel) === "100" ? "HR" : item.affirmLevel;
  }
  /** Tách "từ ~ đến" thành 2 dòng - đúng aliFormatWorkTime() bản gốc. */
  formatWorkTime(workTime) {
    if (!workTime)
      return { from: "", to: "" };
    const p = workTime.split("~");
    if (p.length !== 2)
      return { from: workTime, to: "" };
    return { from: p[0].trim(), to: p[1].trim() };
  }
  loadBasicInfo() {
    this.api.getBasicInfo().subscribe({
      next: (data) => this.basicInfo.set(data)
    });
  }
  formatDmy(d) {
    return d ? formatDate(d, "dd/MM/yyyy", "vi") : "";
  }
  static \u0275fac = function ApplyLeaveInfoListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApplyLeaveInfoListComponent)(\u0275\u0275directiveInject(ApplyLeaveInfoListService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService), \u0275\u0275directiveInject(NzModalService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApplyLeaveInfoListComponent, selectors: [["app-apply-leave-info-list"]], decls: 79, vars: 93, consts: [["aliTable", ""], ["aliTotalTpl", ""], [1, "row"], [1, "col-12"], ["class", "card mb-3", 4, "ngIf"], [1, "card", "mb-3"], [1, "card-body"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["name", "startDate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "endDate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "affirmFlag", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col-md-3", "d-flex", "align-items-end"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], [1, "d-flex", "align-items-center", "gap-2", "mb-2", "flex-wrap"], ["nz-input", "", 2, "max-width", "220px", 3, "ngModelChange", "ngModel", "placeholder"], [1, "ms-auto", "d-flex", "gap-2"], ["nz-button", "", "nzDanger", "", 3, "click", "nzLoading"], [1, "bx", "bx-x-circle"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [1, "table-nowrap", 3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "40px"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel", "nzIndeterminate"], ["nzWidth", "50px", 1, "text-center"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "150px"], ["nzWidth", "120px", 1, "text-center"], ["nzWidth", "150px", 1, "text-center"], ["nzWidth", "180px"], ["class", "ali-row-clickable", 3, "click", 4, "ngFor", "ngForOf"], ["nzWidth", "60vw", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzBodyStyle", "nzFooter"], [4, "nzModalContent"], [1, "card-body", "p-0"], [1, "table", "table-bordered", "table-sm", "align-middle", "mb-0", 2, "table-layout", "fixed"], [2, "width", "15%"], [2, "width", "35%"], [1, "table-light", "text-center"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], [1, "ali-row-clickable", 3, "click"], [1, "text-center", 3, "click"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "text-center"], ["href", "javascript:void(0)"], [1, "text-center", "small"], ["class", "text-muted", 4, "ngIf"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel"], [1, "text-muted"], [4, "ngIf"], ["nzBordered", "", "nzSize", "small", 1, "mb-3", 3, "nzColumn"], [3, "nzTitle"], [1, "fw-bold", "mb-2"], [1, "table-responsive", "mb-3"], ["nzSize", "small", 3, "nzData", "nzShowPagination"], [1, "text-center", 2, "width", "50px"], [1, "text-center", 2, "width", "110px"], [1, "text-center", 2, "width", "170px"], [2, "width", "120px"], [4, "ngFor", "ngForOf"], [1, "table-responsive"], [1, "text-center", 2, "width", "140px"], ["colspan", "7", 1, "text-center", "text-muted"]], template: function ApplyLeaveInfoListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
      \u0275\u0275template(2, ApplyLeaveInfoListComponent_div_2_Template, 53, 40, "div", 4);
      \u0275\u0275elementStart(3, "div", 5)(4, "div", 6)(5, "form", 7);
      \u0275\u0275listener("ngSubmit", function ApplyLeaveInfoListComponent_Template_form_ngSubmit_5_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(6, "div", 8)(7, "label", 9);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "nz-date-picker", 10);
      \u0275\u0275twoWayListener("ngModelChange", function ApplyLeaveInfoListComponent_Template_nz_date_picker_ngModelChange_10_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.startDate, $event) || (ctx.startDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 8)(12, "label", 9);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "nz-date-picker", 11);
      \u0275\u0275twoWayListener("ngModelChange", function ApplyLeaveInfoListComponent_Template_nz_date_picker_ngModelChange_15_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.endDate, $event) || (ctx.endDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 8)(17, "label", 9);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "nz-select", 12);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ApplyLeaveInfoListComponent_Template_nz_select_ngModelChange_20_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.affirmFlag, $event) || (ctx.affirmFlag = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(22, ApplyLeaveInfoListComponent_nz_option_22_Template, 1, 2, "nz-option", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 14)(24, "button", 15);
      \u0275\u0275element(25, "i", 16);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(28, "div", 17)(29, "input", 18);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ApplyLeaveInfoListComponent_Template_input_ngModelChange_29_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.quickFilterKeyword, $event) || (ctx.quickFilterKeyword = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(31, "div", 19)(32, "button", 20);
      \u0275\u0275listener("click", function ApplyLeaveInfoListComponent_Template_button_click_32_listener() {
        return ctx.cancelSelected();
      });
      \u0275\u0275element(33, "i", 21);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(36, ApplyLeaveInfoListComponent_nz_alert_36_Template, 1, 1, "nz-alert", 22);
      \u0275\u0275elementStart(37, "nz-table", 23, 0)(39, "thead")(40, "tr")(41, "th", 24)(42, "label", 25);
      \u0275\u0275listener("ngModelChange", function ApplyLeaveInfoListComponent_Template_label_ngModelChange_42_listener($event) {
        return ctx.toggleSelectAll($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "th", 26);
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "th", 27);
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "th", 28);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "th", 29);
      \u0275\u0275text(53);
      \u0275\u0275pipe(54, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "th", 29);
      \u0275\u0275text(56);
      \u0275\u0275pipe(57, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "th", 27);
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "th", 30);
      \u0275\u0275text(62);
      \u0275\u0275pipe(63, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "th", 31);
      \u0275\u0275text(65);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "th", 29);
      \u0275\u0275text(68);
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "th", 31);
      \u0275\u0275text(71);
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(73, "tbody");
      \u0275\u0275template(74, ApplyLeaveInfoListComponent_tr_74_Template, 36, 33, "tr", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275template(75, ApplyLeaveInfoListComponent_ng_template_75_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(77, "nz-modal", 33);
      \u0275\u0275listener("nzOnCancel", function ApplyLeaveInfoListComponent_Template_nz_modal_nzOnCancel_77_listener() {
        return ctx.closeDetail();
      });
      \u0275\u0275template(78, ApplyLeaveInfoListComponent_ng_container_78_Template, 3, 2, "ng-container", 34);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const aliTable_r12 = \u0275\u0275reference(38);
      const aliTotalTpl_r13 = \u0275\u0275reference(76);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.basicInfo());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 39, "essLeave.startDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.startDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 42, "essLeave.endDate", "Ng\xE0y k\u1EBFt th\xFAc"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.endDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 45, "essLeave.approvalStatus", "Tr\u1EA1ng th\xE1i duy\u1EC7t"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.affirmFlag);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(21, 48, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.affirmFlagOptions());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(27, 51, "essLeave.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.quickFilterKeyword);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(30, 54, "essCommon.quickFilter", "L\u1ECDc nhanh"));
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275property("nzLoading", ctx.cancelling());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(35, 57, "essLeave.cancelBtn", "H\u1EE7y b\u1ECF"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.filteredRows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", \u0275\u0275pureFunction0(90, _c0))("nzShowTotal", aliTotalTpl_r13)("nzScroll", \u0275\u0275pureFunction0(91, _c1));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.allCancelableSelected())("nzIndeterminate", ctx.someCancelableSelected());
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 60, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 63, "essCommon.attendanceDate", "Ng\xE0y c\xF4ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 66, "essCommon.category", "Ph\xE2n lo\u1EA1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 69, "essCommon.cardSwipeTime", "Th\u1EDDi gian qu\u1EB9t th\u1EBB"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 72, "essOt.timeRange", "Th\u1EDDi gian"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(60, 75, "essCommon.shift", "Ca"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(63, 78, "essCommon.workTime", "Th\u1EDDi gian l\xE0m vi\u1EC7c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(66, 81, "common.remark", "L\xFD do"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 84, "essLeave.approvalStatus", "Tr\u1EA1ng th\xE1i duy\u1EC7t"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(72, 87, "essCommon.hrOpinion", "\xDD ki\u1EBFn c\u1EE7a nh\xE2n s\u1EF1"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", aliTable_r12.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.detailVisible())("nzTitle", ctx.modalTitle())("nzBodyStyle", \u0275\u0275pureFunction0(92, _c2))("nzFooter", null);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzDatePickerModule, NzDatePickerComponent, NzCheckboxModule, NzCheckboxComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, NzDescriptionsModule, NzDescriptionsComponent, NzDescriptionsItemComponent, TranslatePipe], styles: ["\n.ali-row-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.ali-row-clickable[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n/*# sourceMappingURL=apply-leave-info-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApplyLeaveInfoListComponent, [{
    type: Component,
    args: [{ selector: "app-apply-leave-info-list", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzInputModule,
      NzSelectModule,
      NzButtonModule,
      NzDatePickerModule,
      NzCheckboxModule,
      NzModalModule,
      NzAlertModule,
      NzDescriptionsModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">

    <!-- ===== Th\xF4ng tin nh\xE2n vi\xEAn (t\u01B0\u01A1ng \u0111\u01B0\u01A1ng fragments/essEmpInfoCard.html) ===== -->
    <div class="card mb-3" *ngIf="basicInfo() as info">
      <div class="card-body p-0">
        <table class="table table-bordered table-sm align-middle mb-0" style="table-layout:fixed;">
          <colgroup>
            <col style="width:15%;"><col style="width:35%;"><col style="width:15%;"><col style="width:35%;">
          </colgroup>
          <tbody>
            <tr>
              <th class="table-light text-center">{{ 'essEmpCard.localName' | translate:'H\u1ECD t\xEAn' }}</th>
              <td>{{ info.localName }}</td>
              <th class="table-light text-center">{{ 'essEmpCard.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
              <td>{{ info.empId }}</td>
            </tr>
            <tr>
              <th class="table-light text-center">{{ 'essEmpCard.deptName' | translate:'Ph\xF2ng ban' }}</th>
              <td>{{ info.deptName }}</td>
              <th class="table-light text-center">{{ 'essEmpCard.headDept' | translate:'Tr\u01B0\u1EDFng ph\xF2ng' }}</th>
              <td>{{ info.headDepartment }}</td>
            </tr>
            <tr>
              <th class="table-light text-center">{{ 'essEmpCard.postFamily' | translate:'Nh\xF3m nh\xE2n vi\xEAn' }}</th>
              <td>{{ info.postFamilyName }}</td>
              <th class="table-light text-center">{{ 'essEmpCard.postGrade' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
              <td>{{ info.postGradeName }}</td>
            </tr>
            <tr>
              <th class="table-light text-center">{{ 'essEmpCard.positionName' | translate:'Ch\u1EE9c danh' }}</th>
              <td>{{ info.positionNoName }}</td>
              <th class="table-light text-center">{{ 'essEmpCard.dateStarted' | translate:'Ng\xE0y v\xE0o l\xE0m' }}</th>
              <td>{{ info.dateStarted }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- ===== \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm ===== -->
    <div class="card mb-3">
      <div class="card-body">
        <form class="row g-3" (ngSubmit)="search()">
          <div class="col-md-3">
            <label class="form-label">{{ 'essLeave.startDate' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u' }}</label>
            <nz-date-picker class="w-100" [(ngModel)]="startDate" name="startDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
          </div>
          <div class="col-md-3">
            <label class="form-label">{{ 'essLeave.endDate' | translate:'Ng\xE0y k\u1EBFt th\xFAc' }}</label>
            <nz-date-picker class="w-100" [(ngModel)]="endDate" name="endDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
          </div>
          <div class="col-md-3">
            <label class="form-label">{{ 'essLeave.approvalStatus' | translate:'Tr\u1EA1ng th\xE1i duy\u1EC7t' }}</label>
            <nz-select class="w-100" [(ngModel)]="affirmFlag" name="affirmFlag" nzAllowClear
                       [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
              <nz-option *ngFor="let c of affirmFlagOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
            </nz-select>
          </div>
          <div class="col-md-3 d-flex align-items-end">
            <button nz-button nzType="primary" type="submit">
              <i class="bx bx-search"></i> {{ 'essLeave.search' | translate:'Tra c\u1EE9u' }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- ===== Toolbar ===== -->
    <div class="d-flex align-items-center gap-2 mb-2 flex-wrap">
      <input nz-input style="max-width:220px;" [(ngModel)]="quickFilterKeyword"
             [placeholder]="'essCommon.quickFilter' | translate:'L\u1ECDc nhanh'">
      <div class="ms-auto d-flex gap-2">
        <button nz-button nzDanger [nzLoading]="cancelling()" (click)="cancelSelected()">
          <i class="bx bx-x-circle"></i> {{ 'essLeave.cancelBtn' | translate:'H\u1EE7y b\u1ECF' }}
        </button>
      </div>
    </div>

    <!-- ===== B\u1EA3ng danh s\xE1ch ===== -->
    <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

    <nz-table [nzData]="filteredRows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
              [nzPageSizeOptions]="[25, 50, 100, 200]" [nzShowTotal]="aliTotalTpl"
              [nzScroll]="{ x: '1650px' }" class="table-nowrap" #aliTable>
      <thead>
        <tr>
          <th nzWidth="40px">
            <label nz-checkbox [ngModel]="allCancelableSelected()" [nzIndeterminate]="someCancelableSelected()"
                   (ngModelChange)="toggleSelectAll($event)"></label>
          </th>
          <th class="text-center" nzWidth="50px">{{ 'common.stt' | translate:'STT' }}</th>
          <th class="text-center" nzWidth="110px">{{ 'essCommon.attendanceDate' | translate:'Ng\xE0y c\xF4ng' }}</th>
          <th nzWidth="150px">{{ 'essCommon.category' | translate:'Ph\xE2n lo\u1EA1i' }}</th>
          <th class="text-center" nzWidth="120px">{{ 'essCommon.cardSwipeTime' | translate:'Th\u1EDDi gian qu\u1EB9t th\u1EBB' }}</th>
          <th class="text-center" nzWidth="120px">{{ 'essOt.timeRange' | translate:'Th\u1EDDi gian' }}</th>
          <th class="text-center" nzWidth="110px">{{ 'essCommon.shift' | translate:'Ca' }}</th>
          <th class="text-center" nzWidth="150px">{{ 'essCommon.workTime' | translate:'Th\u1EDDi gian l\xE0m vi\u1EC7c' }}</th>
          <th nzWidth="180px">{{ 'common.remark' | translate:'L\xFD do' }}</th>
          <th class="text-center" nzWidth="120px">{{ 'essLeave.approvalStatus' | translate:'Tr\u1EA1ng th\xE1i duy\u1EC7t' }}</th>
          <th nzWidth="180px">{{ 'essCommon.hrOpinion' | translate:'\xDD ki\u1EBFn c\u1EE7a nh\xE2n s\u1EF1' }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of aliTable.data; let i = index" class="ali-row-clickable" (click)="openDetail(row)">
          <td class="text-center" (click)="$event.stopPropagation()">
            <label nz-checkbox *ngIf="[ '14014306', '14014307', '14014308' ].includes(row.affirmFlag)" [(ngModel)]="row.selected"></label>
          </td>
          <td class="text-center">{{ i + 1 }}</td>
          <td class="text-center">{{ row.arDateStr }}</td>
          <td><a href="javascript:void(0)">{{ row.itemName || row.itemNo }}</a></td>
          <td class="text-center small">
            <div>{{ 'essCwa.inLabel' | translate:'V\xE0o' }}: {{ row.indoorTime || '**:**' }}</div>
            <div>{{ 'essCwa.outLabel' | translate:'Ra' }}:&nbsp; {{ row.outdoorTime || '**:**' }}</div>
          </td>
          <td class="text-center small">
            <div>{{ 'essCwa.inLabel' | translate:'V\xE0o' }}: {{ row.fromTime }}</div>
            <div>{{ 'essCwa.outLabel' | translate:'Ra' }}:&nbsp; {{ row.toTime }}</div>
          </td>
          <td class="text-center">{{ row.shiftName }}</td>
          <td class="text-center small">
            <div>{{ formatWorkTime(row.workTime).from }}</div>
            <div *ngIf="formatWorkTime(row.workTime).to" class="text-muted">- {{ formatWorkTime(row.workTime).to }}</div>
          </td>
          <td [attr.title]="row.applyReason || null">{{ row.applyReason }}</td>
          <td class="text-center">{{ row.affirmFlagName || row.affirmFlag }}</td>
          <td [attr.title]="row.hrComment || null">{{ row.hrComment }}</td>
        </tr>
      </tbody>
      <ng-template #aliTotalTpl let-total>
        {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
      </ng-template>
    </nz-table>

  </div>
</div>

<!-- ===== Modal chi ti\u1EBFt ph\xEA duy\u1EC7t ===== -->
<nz-modal [nzVisible]="detailVisible()" [nzTitle]="modalTitle()" nzWidth="60vw"
          [nzBodyStyle]="{ 'max-height': '75vh', 'overflow-y': 'auto' }"
          (nzOnCancel)="closeDetail()" [nzFooter]="null">
  <ng-container *nzModalContent>
    <nz-alert *ngIf="detailErrorMessage()" nzType="error" [nzMessage]="detailErrorMessage() ?? ''" class="mb-3"></nz-alert>
    <ng-container *ngIf="!detailLoading() && detailData() as d">
      <nz-descriptions nzBordered [nzColumn]="1" nzSize="small" class="mb-3">
        <nz-descriptions-item [nzTitle]="'essCommon.title' | translate:'Ti\xEAu \u0111\u1EC1'">{{ applyTitleText() }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'essCommon.applicant' | translate:'Ng\u01B0\u1EDDi xin ph\xE9p'">{{ applicantText() }}</nz-descriptions-item>
      </nz-descriptions>

      <h6 class="fw-bold mb-2">{{ 'essCommon.approvalOrder' | translate:'Tr\xECnh t\u1EF1 duy\u1EC7t' }}</h6>
      <div class="table-responsive mb-3">
        <nz-table [nzData]="d.approvalList" [nzShowPagination]="false" nzSize="small">
          <thead>
            <tr>
              <th class="text-center" style="width:50px">{{ 'common.stt' | translate:'STT' }}</th>
              <th class="text-center" style="width:110px">{{ 'essCommon.approvalOrder' | translate:'Tr\xECnh t\u1EF1 duy\u1EC7t' }}</th>
              <th class="text-center" style="width:110px">{{ 'essLeave.approvalStatus' | translate:'Tr\u1EA1ng th\xE1i duy\u1EC7t' }}</th>
              <th>{{ 'essCommon.fullName' | translate:'H\u1ECD t\xEAn' }}</th>
              <th>{{ 'essCommon.opinion' | translate:'\xDD ki\u1EBFn' }}</th>
              <th class="text-center" style="width:170px">{{ 'essCommon.executionTime' | translate:'Th\u1EDDi gian th\u1EF1c hi\u1EC7n' }}</th>
              <th style="width:120px">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="!d.approvalList?.length">
              <td colspan="7" class="text-center text-muted">{{ 'essCommon.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
            </tr>
            <tr *ngFor="let item of d.approvalList">
              <td class="text-center">{{ approvalSeqLabel(item) }}</td>
              <td class="text-center">{{ item.affirmTypeName }}</td>
              <td class="text-center">{{ item.affirmFlagName }}</td>
              <td>{{ item.affirmName }}</td>
              <td>{{ item.affirmContent }}</td>
              <td class="text-center">{{ item.updateDate }}</td>
              <td>{{ item.deptName }}</td>
            </tr>
          </tbody>
        </nz-table>
      </div>

      <h6 class="fw-bold mb-2">{{ 'essCommon.empInfo' | translate:'Th\xF4ng tin nh\xE2n vi\xEAn' }}</h6>
      <nz-descriptions nzBordered [nzColumn]="2" nzSize="small" class="mb-3">
        <nz-descriptions-item [nzTitle]="'essCommon.fullName' | translate:'H\u1ECD t\xEAn'">{{ d.employeeInfo?.['localName'] }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn'">{{ d.employeeInfo?.['empId'] }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'common.deptName' | translate:'Ph\xF2ng ban'">{{ d.employeeInfo?.['deptName'] }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'essCommon.position' | translate:'Ch\u1EE9c v\u1EE5'">{{ d.employeeInfo?.['postGradeName'] }}</nz-descriptions-item>
      </nz-descriptions>

      <h6 class="fw-bold mb-2">{{ 'essCommon.applyInfo' | translate:'Th\xF4ng tin xin ph\xE9p' }}</h6>
      <div class="table-responsive">
        <nz-table [nzData]="[d.leaveInfo]" [nzShowPagination]="false" nzSize="small">
          <thead>
            <tr>
              <th>{{ 'essCommon.leaveType' | translate:'Lo\u1EA1i ngh\u1EC9 ph\xE9p' }}</th>
              <th class="text-center" style="width:170px">{{ 'essCommon.startTime' | translate:'Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u' }}</th>
              <th class="text-center" style="width:170px">{{ 'essCommon.endTime' | translate:'Th\u1EDDi gian k\u1EBFt th\xFAc' }}</th>
              <th class="text-center" style="width:140px">{{ 'common.hours' | translate:'S\u1ED1 gi\u1EDD' }}</th>
              <th>{{ 'essCommon.reason' | translate:'L\xFD do' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center">{{ d.leaveInfo?.['leaveTypeName'] }}</td>
              <td class="text-center">{{ d.leaveInfo?.['leaveFromTime'] }}</td>
              <td class="text-center">{{ d.leaveInfo?.['leaveToTime'] }}</td>
              <td class="text-center">{{ d.leaveInfo?.['applyLength'] }}</td>
              <td>{{ d.leaveInfo?.['leaveReason'] }}</td>
            </tr>
          </tbody>
        </nz-table>
      </div>
    </ng-container>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/apply-leave-info-list/apply-leave-info-list.component.css */\n.ali-row-clickable {\n  cursor: pointer;\n}\n.ali-row-clickable:hover {\n  background: #fafafa;\n}\n/*# sourceMappingURL=apply-leave-info-list.component.css.map */\n"] }]
  }], () => [{ type: ApplyLeaveInfoListService }, { type: I18nService }, { type: NzMessageService }, { type: NzModalService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApplyLeaveInfoListComponent, { className: "ApplyLeaveInfoListComponent", filePath: "src/app/apply-leave-info-list/apply-leave-info-list.component.ts", lineNumber: 84 });
})();
export {
  ApplyLeaveInfoListComponent
};
//# debugId=4040b8c0-2f22-511b-85ce-89da53dcf315
//# sourceMappingURL=chunk-QFF7533C.js.map
