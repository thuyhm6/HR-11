import {
  TabService
} from "./chunk-DUA22MI5.js";
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

// src/app/apply-attendance-info-list/apply-attendance-info-list.service.ts
var API_BASE = "/ess/infoApplyAttendance/api/myLeaveApply";
var ApplyAttendanceInfoListService = class _ApplyAttendanceInfoListService {
  constructor(http) {
    this.http = http;
  }
  http;
  getBasicInfo() {
    return this.http.get("/ess/empinfo/api/personalInfo/myInfo", { withCredentials: true });
  }
  getList(params) {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value)
        httpParams = httpParams.set(key, value);
    }
    return this.http.get(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
  }
  cancel(applyNos) {
    return this.http.post(`${API_BASE}/cancel`, applyNos, { withCredentials: true });
  }
  getDetail(applyNo, applyType) {
    let httpParams = new HttpParams().set("applyNo", applyNo);
    if (applyType)
      httpParams = httpParams.set("applyType", applyType);
    return this.http.get("/ar/attendanceMintenance/api/leaveApply/detail", {
      params: httpParams,
      withCredentials: true
    });
  }
  getCodeList(parentCodeNo) {
    return this.http.get("/sys/api/getCode/list", {
      params: new HttpParams().set("parentCodeNo", parentCodeNo),
      withCredentials: true
    });
  }
  static \u0275fac = function ApplyAttendanceInfoListService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApplyAttendanceInfoListService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApplyAttendanceInfoListService, factory: _ApplyAttendanceInfoListService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApplyAttendanceInfoListService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/apply-attendance-info-list/apply-attendance-info-list.component.ts
var _c0 = () => [25, 50, 100, 200];
var _c1 = () => ({ x: "1700px" });
var _c2 = () => ({ "max-height": "75vh", "overflow-y": "auto" });
var _c3 = () => ["14014306", "14014307", "14014308"];
function ApplyAttendanceInfoListComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 40)(2, "table", 41)(3, "colgroup");
    \u0275\u0275element(4, "col", 42)(5, "col", 43)(6, "col", 42)(7, "col", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "tbody")(9, "tr")(10, "th", 44);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 44);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "tr")(21, "th", 44);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 44);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "tr")(32, "th", 44);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "td");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th", 44);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "td");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "tr")(43, "th", 44);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "td");
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th", 44);
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
function ApplyAttendanceInfoListComponent_nz_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 45);
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r3.codeNo)("nzLabel", c_r3.codeName);
  }
}
function ApplyAttendanceInfoListComponent_nz_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 45);
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r4.codeNo)("nzLabel", c_r4.codeName);
  }
}
function ApplyAttendanceInfoListComponent_nz_alert_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 46);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r4.errorMessage() ?? "");
  }
}
function ApplyAttendanceInfoListComponent_tr_93_label_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 53);
    \u0275\u0275twoWayListener("ngModelChange", function ApplyAttendanceInfoListComponent_tr_93_label_2_Template_label_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const row_r7 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r7.selected, $event) || (row_r7.selected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r7.selected);
    \u0275\u0275control();
  }
}
function ApplyAttendanceInfoListComponent_tr_93_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r7.createdIp);
  }
}
function ApplyAttendanceInfoListComponent_tr_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 47);
    \u0275\u0275listener("click", function ApplyAttendanceInfoListComponent_tr_93_Template_tr_click_0_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.openDetail(row_r7));
    });
    \u0275\u0275elementStart(1, "td", 48);
    \u0275\u0275listener("click", function ApplyAttendanceInfoListComponent_tr_93_Template_td_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(2, ApplyAttendanceInfoListComponent_tr_93_label_2_Template, 1, 1, "label", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 50);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "a", 51);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 50);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 50);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 50);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 50);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 50);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 50);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 50);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td", 50);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "td");
    \u0275\u0275text(29);
    \u0275\u0275template(30, ApplyAttendanceInfoListComponent_tr_93_ng_container_30_Template, 2, 1, "ng-container", 52);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pureFunction0(17, _c3).includes(row_r7.affirmFlag));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r9 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r7.leaveTypeName || row_r7.leaveTypeCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.applyDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.leaveFromDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.leaveFromTimeOnly);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.leaveToDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.leaveToTimeOnly);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.formatDuration(row_r7.applyLength, row_r7.dayHours));
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r7.leaveReason || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r7.leaveReason);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.affirmFlagName || row_r7.affirmFlag);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r7.hrComment || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r7.hrComment);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.confirmFlagName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.createdBy);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r7.createdIp);
  }
}
function ApplyAttendanceInfoListComponent_ng_template_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r10 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r10, " ");
  }
}
function ApplyAttendanceInfoListComponent_ng_container_98_nz_alert_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 46);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzMessage", ctx_r4.detailErrorMessage() ?? "");
  }
}
function ApplyAttendanceInfoListComponent_ng_container_98_ng_container_2_tr_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 65);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "al.js.noApprovalData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u ph\xEA duy\u1EC7t"));
  }
}
function ApplyAttendanceInfoListComponent_ng_container_98_ng_container_2_tr_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 50);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 50);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 50);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.approvalSeqLabel(item_r11));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r11.affirmTypeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r11.affirmFlagName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r11.affirmName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r11.affirmContent);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r11.updateDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r11.deptName);
  }
}
function ApplyAttendanceInfoListComponent_ng_container_98_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h6", 54);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "nz-descriptions", 55)(5, "nz-descriptions-item", 56);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "nz-descriptions-item", 56);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "nz-descriptions-item", 56);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "nz-descriptions-item", 56);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "nz-descriptions-item", 56);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "nz-descriptions-item", 56);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "nz-descriptions-item", 56);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "nz-descriptions-item", 56);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "nz-descriptions-item", 56);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "nz-descriptions-item", 57);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "h6", 54);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 58)(39, "nz-table", 59)(40, "thead")(41, "tr")(42, "th", 60);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th", 61);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th", 61);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "th");
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "th");
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "th", 62);
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "th", 63);
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(63, "tbody");
    \u0275\u0275template(64, ApplyAttendanceInfoListComponent_ng_container_98_ng_container_2_tr_64_Template, 4, 4, "tr", 52)(65, ApplyAttendanceInfoListComponent_ng_container_98_ng_container_2_tr_65_Template, 15, 7, "tr", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const d_r12 = ctx.ngIf;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 35, "al.modal.empInfoTitle", "Th\xF4ng tin nh\xE2n vi\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColumn", 2);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(6, 38, "al.modal.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r12.employeeInfo?.["empId"]);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(9, 41, "al.modal.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r12.employeeInfo?.["localName"]);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(12, 44, "al.modal.empDept", "Ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r12.employeeInfo?.["deptName"]);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(15, 47, "al.modal.empPost", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r12.employeeInfo?.["postGradeName"]);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(18, 50, "al.modal.leaveType", "Lo\u1EA1i ngh\u1EC9 ph\xE9p"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r12.leaveInfo?.["leaveTypeName"]);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(21, 53, "common.status", "Tr\u1EA1ng th\xE1i"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r12.leaveInfo?.["affirmFlagName"]);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(24, 56, "al.modal.leaveFrom", "Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r12.leaveInfo?.["leaveFromTime"]);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(27, 59, "al.modal.leaveTo", "Th\u1EDDi gian k\u1EBFt th\xFAc"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r12.leaveInfo?.["leaveToTime"]);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(30, 62, "al.modal.duration", "Th\u1EDDi l\u01B0\u1EE3ng"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.formatDuration(d_r12.leaveInfo?.["applyLength"], d_r12.leaveInfo?.["dayHours"]));
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(33, 65, "al.modal.reason", "L\xFD do"))("nzSpan", 2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r12.leaveInfo?.["leaveReason"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 68, "al.modal.approvalSeq", "Tr\xECnh t\u1EF1 duy\u1EC7t"));
    \u0275\u0275advance(3);
    \u0275\u0275property("nzData", d_r12.approvalList)("nzShowPagination", false);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 71, "al.modal.stt", "STT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(47, 74, "al.modal.approvalSeq", "Tr\xECnh t\u1EF1 duy\u1EC7t"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 77, "al.modal.approvalStatus", "Tr\u1EA1ng th\xE1i duy\u1EC7t"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(53, 80, "al.modal.fullName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(56, 83, "al.modal.comment", "\xDD ki\u1EBFn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(59, 86, "al.modal.actionTime", "Th\u1EDDi gian th\u1EF1c hi\u1EC7n"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(62, 89, "al.modal.department", "Ph\xF2ng ban"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !d_r12.approvalList?.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", d_r12.approvalList);
  }
}
function ApplyAttendanceInfoListComponent_ng_container_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ApplyAttendanceInfoListComponent_ng_container_98_nz_alert_1_Template, 1, 1, "nz-alert", 27)(2, ApplyAttendanceInfoListComponent_ng_container_98_ng_container_2_Template, 66, 92, "ng-container", 52);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r4.detailErrorMessage());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r4.detailLoading() && ctx_r4.detailData());
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
  "al.label.leaveType",
  "al.label.affirmFlag",
  "al.label.workDate",
  "al.select.allOption",
  "al.placeholder.quickFilter",
  "al.btn.search",
  "al.btn.cancel",
  "al.btn.applyLeave",
  "al.btn.close",
  "al.col.leaveType",
  "al.col.applyDate",
  "al.col.fromDate",
  "al.col.fromTime",
  "al.col.toDate",
  "al.col.toTime",
  "al.col.duration",
  "al.col.reason",
  "al.col.status",
  "al.col.hrComment",
  "al.col.confirm",
  "al.col.inputBy",
  "al.modal.leaveInfoTitle",
  "al.modal.empInfoTitle",
  "al.modal.empName",
  "al.modal.empId",
  "al.modal.empDept",
  "al.modal.empPost",
  "al.modal.leaveType",
  "al.modal.leaveFrom",
  "al.modal.leaveTo",
  "al.modal.duration",
  "al.modal.reason",
  "al.modal.stt",
  "al.modal.approvalSeq",
  "al.modal.approvalStatus",
  "al.modal.fullName",
  "al.modal.comment",
  "al.modal.actionTime",
  "al.modal.department",
  "al.js.loading",
  "al.js.loadingData",
  "al.js.noData",
  "al.js.loadError",
  "al.js.loadDetailFail",
  "al.js.day",
  "al.js.hour",
  "al.js.selectRowAlert",
  "al.js.cancelConfirm",
  "al.js.cancelSuccess",
  "al.js.cancelFail",
  "al.js.cancelError",
  "al.js.noApprovalData",
  "al.js.loadApprovalFail",
  "common.selectAll",
  "common.stt",
  "common.totalRows",
  "common.status"
];
var CANCELABLE_FLAGS = ["14014306", "14014307", "14014308"];
var ApplyAttendanceInfoListComponent = class _ApplyAttendanceInfoListComponent {
  constructor(api, i18n, message, modal, tabs) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
    this.modal = modal;
    this.tabs = tabs;
  }
  api;
  i18n;
  message;
  modal;
  tabs;
  basicInfo = signal(
    null,
    ...ngDevMode ? [{ debugName: "basicInfo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  leaveTypeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "leaveTypeOptions" }] : (
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
      return rows.filter((r) => [
        r.leaveTypeName,
        r.leaveTypeCode,
        r.applyDate,
        r.leaveFromDate,
        r.leaveToDate,
        r.leaveReason,
        r.affirmFlagName,
        r.hrComment,
        r.confirmFlagName,
        r.createdBy,
        r.createdIp
      ].some((v) => v && String(v).toLowerCase().includes(kw)));
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
  leaveTypeCode = null;
  affirmFlag = null;
  fromDate = null;
  toDate = null;
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadBasicInfo();
    this.api.getCodeList("21").subscribe((list) => this.leaveTypeOptions.set(list ?? []));
    this.api.getCodeList("14014304").subscribe((list) => this.affirmFlagOptions.set(list ?? []));
    this.initDefaultDateRange();
    this.search();
  }
  search() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getList({
      leaveTypeCode: this.leaveTypeCode ?? "",
      affirmFlag: this.affirmFlag ?? "",
      fromDate: this.formatYmd(this.fromDate),
      toDate: this.formatYmd(this.toDate)
    }).subscribe({
      next: (rows) => {
        this.rows.set((rows ?? []).map((r) => __spreadProps(__spreadValues({}, r), { selected: false })));
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("al.js.loadError", "L\u1ED7i t\u1EA3i d\u1EEF li\u1EC7u"));
        this.rows.set([]);
        this.loading.set(false);
      }
    });
  }
  /** Mặc định từ ngày 01 đến ngày cuối tháng hiện tại - giữ đúng hành vi alGetDefaultDateRange() bản gốc. */
  initDefaultDateRange() {
    const now = /* @__PURE__ */ new Date();
    this.fromDate = new Date(now.getFullYear(), now.getMonth(), 1);
    this.toDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  }
  toggleSelectAll(checked) {
    this.cancelableRows().forEach((r) => r.selected = checked);
  }
  cancelSelected() {
    const t = (key, fallback) => this.i18n.t(key, fallback);
    const selected = this.rows().filter((r) => r.selected);
    if (!selected.length) {
      this.message.warning(t("al.js.selectRowAlert", "Vui l\xF2ng ch\u1ECDn \xEDt nh\u1EA5t m\u1ED9t d\xF2ng \u0111\u1EC3 h\u1EE7y b\u1ECF."));
      return;
    }
    const confirmMsg = t("al.js.cancelConfirm", "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n h\u1EE7y b\u1ECF {0} \u0111\u01A1n xin ngh\u1EC9 ph\xE9p \u0111\xE3 ch\u1ECDn?").replace("{0}", String(selected.length));
    this.modal.confirm({
      nzTitle: t("al.btn.cancel", "H\u1EE7y b\u1ECF"),
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
          this.message.success(res.message || t("al.js.cancelSuccess", "H\u1EE7y b\u1ECF th\xE0nh c\xF4ng."));
          this.search();
        } else {
          this.message.error(res?.error || t("al.js.cancelFail", "H\u1EE7y b\u1ECF th\u1EA5t b\u1EA1i."));
        }
      },
      error: () => {
        this.cancelling.set(false);
        this.message.error(t("al.js.cancelError", "L\u1ED7i khi h\u1EE7y b\u1ECF \u0111\u01A1n."));
      }
    });
  }
  goApply() {
    this.tabs.openTab("/sst-apply-attendance", this.i18n.t("al.btn.applyLeave", "Xin ngh\u1EC9 ph\xE9p"), "route");
  }
  openDetail(row) {
    this.detailVisible.set(true);
    this.detailLoading.set(true);
    this.detailErrorMessage.set(null);
    this.detailData.set(null);
    this.api.getDetail(String(row.applyNo), row.leaveTypeCode).subscribe({
      next: (res) => {
        this.detailData.set(res);
        this.detailLoading.set(false);
      },
      error: () => {
        this.detailErrorMessage.set(this.i18n.t("al.js.loadDetailFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i"));
        this.detailLoading.set(false);
      }
    });
  }
  closeDetail() {
    this.detailVisible.set(false);
  }
  /** STT dòng phê duyệt - affirmLevel=100 là dòng xác nhận của HR (alRenderApprovalRows() bản gốc). */
  approvalSeqLabel(item) {
    return String(item.affirmLevel) === "100" ? "HR" : item.affirmLevel;
  }
  /** Hiển thị thời lượng dạng "X Ngày Y Giờ" - đúng alFormatDuration() bản gốc. */
  formatDuration(applyLength, dayHours) {
    const len = parseFloat(applyLength || "");
    const dh = parseFloat(dayHours || "");
    if (isNaN(len) || isNaN(dh) || dh === 0)
      return applyLength || "";
    const days = Math.floor(len / dh);
    const hours = len - days * dh;
    let text = "";
    if (days > 0)
      text += `${days} ${this.i18n.t("al.js.day", "Ng\xE0y")}`;
    if (hours > 0)
      text += (text ? " " : "") + `${hours} ${this.i18n.t("al.js.hour", "Gi\u1EDD")}`;
    return text || String(len);
  }
  loadBasicInfo() {
    this.api.getBasicInfo().subscribe({
      next: (data) => this.basicInfo.set(data)
    });
  }
  formatYmd(d) {
    return d ? formatDate(d, "yyyy-MM-dd", "vi") : "";
  }
  static \u0275fac = function ApplyAttendanceInfoListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApplyAttendanceInfoListComponent)(\u0275\u0275directiveInject(ApplyAttendanceInfoListService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService), \u0275\u0275directiveInject(NzModalService), \u0275\u0275directiveInject(TabService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApplyAttendanceInfoListComponent, selectors: [["app-apply-attendance-info-list"]], decls: 99, vars: 118, consts: [["aalTable", ""], ["aalTotalTpl", ""], [1, "row"], [1, "col-12"], ["class", "card mb-3", 4, "ngIf"], [1, "card", "mb-3"], [1, "card-body"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["name", "leaveTypeCode", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["name", "affirmFlag", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [1, "col-md-4"], [1, "d-flex", "align-items-center", "gap-2"], ["name", "fromDate", "nzFormat", "yyyy-MM-dd", 2, "width", "150px", 3, "ngModelChange", "ngModel"], ["name", "toDate", "nzFormat", "yyyy-MM-dd", 2, "width", "150px", 3, "ngModelChange", "ngModel"], [1, "col-md-2", "d-flex", "align-items-end"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], [1, "d-flex", "align-items-center", "gap-2", "mb-2", "flex-wrap"], ["nz-input", "", 2, "max-width", "220px", 3, "ngModelChange", "ngModel", "placeholder"], [1, "ms-auto", "d-flex", "gap-2"], ["nz-button", "", "nzDanger", "", 3, "click", "nzLoading"], [1, "bx", "bx-x-circle"], ["nz-button", "", "nzType", "primary", 3, "click"], [1, "bx", "bx-plus-circle"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [1, "table-nowrap", 3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "40px"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel", "nzIndeterminate"], ["nzWidth", "50px", 1, "text-center"], ["nzWidth", "150px"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "90px", 1, "text-center"], ["nzWidth", "180px"], ["nzWidth", "120px", 1, "text-center"], ["class", "aal-row-clickable", 3, "click", 4, "ngFor", "ngForOf"], ["nzWidth", "55vw", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzBodyStyle", "nzFooter"], [4, "nzModalContent"], [1, "card-body", "p-0"], [1, "table", "table-bordered", "table-sm", "align-middle", "mb-0", 2, "table-layout", "fixed"], [2, "width", "15%"], [2, "width", "35%"], [1, "table-light", "text-center"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], [1, "aal-row-clickable", 3, "click"], [1, "text-center", 3, "click"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "text-center"], ["href", "javascript:void(0)"], [4, "ngIf"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel"], [1, "fw-bold", "mb-2"], ["nzBordered", "", "nzSize", "small", 1, "mb-3", 3, "nzColumn"], [3, "nzTitle"], [3, "nzTitle", "nzSpan"], [1, "table-responsive"], ["nzSize", "small", 3, "nzData", "nzShowPagination"], [1, "text-center", 2, "width", "50px"], [1, "text-center", 2, "width", "110px"], [1, "text-center", 2, "width", "170px"], [2, "width", "120px"], [4, "ngFor", "ngForOf"], ["colspan", "7", 1, "text-center", "text-muted"]], template: function ApplyAttendanceInfoListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
      \u0275\u0275template(2, ApplyAttendanceInfoListComponent_div_2_Template, 53, 40, "div", 4);
      \u0275\u0275elementStart(3, "div", 5)(4, "div", 6)(5, "form", 7);
      \u0275\u0275listener("ngSubmit", function ApplyAttendanceInfoListComponent_Template_form_ngSubmit_5_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(6, "div", 8)(7, "label", 9);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "nz-select", 10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ApplyAttendanceInfoListComponent_Template_nz_select_ngModelChange_10_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.leaveTypeCode, $event) || (ctx.leaveTypeCode = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(12, ApplyAttendanceInfoListComponent_nz_option_12_Template, 1, 2, "nz-option", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 8)(14, "label", 9);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "nz-select", 12);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ApplyAttendanceInfoListComponent_Template_nz_select_ngModelChange_17_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.affirmFlag, $event) || (ctx.affirmFlag = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(19, ApplyAttendanceInfoListComponent_nz_option_19_Template, 1, 2, "nz-option", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 13)(21, "label", 9);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 14)(25, "nz-date-picker", 15);
      \u0275\u0275twoWayListener("ngModelChange", function ApplyAttendanceInfoListComponent_Template_nz_date_picker_ngModelChange_25_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.fromDate, $event) || (ctx.fromDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(26, "span");
      \u0275\u0275text(27, "~");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "nz-date-picker", 16);
      \u0275\u0275twoWayListener("ngModelChange", function ApplyAttendanceInfoListComponent_Template_nz_date_picker_ngModelChange_28_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.toDate, $event) || (ctx.toDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 17)(30, "button", 18);
      \u0275\u0275element(31, "i", 19);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(34, "div", 20)(35, "input", 21);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ApplyAttendanceInfoListComponent_Template_input_ngModelChange_35_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.quickFilterKeyword, $event) || (ctx.quickFilterKeyword = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(37, "div", 22)(38, "button", 23);
      \u0275\u0275listener("click", function ApplyAttendanceInfoListComponent_Template_button_click_38_listener() {
        return ctx.cancelSelected();
      });
      \u0275\u0275element(39, "i", 24);
      \u0275\u0275text(40);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "button", 25);
      \u0275\u0275listener("click", function ApplyAttendanceInfoListComponent_Template_button_click_42_listener() {
        return ctx.goApply();
      });
      \u0275\u0275element(43, "i", 26);
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(46, ApplyAttendanceInfoListComponent_nz_alert_46_Template, 1, 1, "nz-alert", 27);
      \u0275\u0275elementStart(47, "nz-table", 28, 0)(49, "thead")(50, "tr")(51, "th", 29)(52, "label", 30);
      \u0275\u0275listener("ngModelChange", function ApplyAttendanceInfoListComponent_Template_label_ngModelChange_52_listener($event) {
        return ctx.toggleSelectAll($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "th", 31);
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "th", 32);
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "th", 33);
      \u0275\u0275text(60);
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "th", 33);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "th", 34);
      \u0275\u0275text(66);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "th", 33);
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "th", 34);
      \u0275\u0275text(72);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "th", 33);
      \u0275\u0275text(75);
      \u0275\u0275pipe(76, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "th", 35);
      \u0275\u0275text(78);
      \u0275\u0275pipe(79, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "th", 36);
      \u0275\u0275text(81);
      \u0275\u0275pipe(82, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "th", 35);
      \u0275\u0275text(84);
      \u0275\u0275pipe(85, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "th", 36);
      \u0275\u0275text(87);
      \u0275\u0275pipe(88, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "th", 35);
      \u0275\u0275text(90);
      \u0275\u0275pipe(91, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(92, "tbody");
      \u0275\u0275template(93, ApplyAttendanceInfoListComponent_tr_93_Template, 31, 18, "tr", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275template(94, ApplyAttendanceInfoListComponent_ng_template_94_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(96, "nz-modal", 38);
      \u0275\u0275pipe(97, "translate");
      \u0275\u0275listener("nzOnCancel", function ApplyAttendanceInfoListComponent_Template_nz_modal_nzOnCancel_96_listener() {
        return ctx.closeDetail();
      });
      \u0275\u0275template(98, ApplyAttendanceInfoListComponent_ng_container_98_Template, 3, 2, "ng-container", 39);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const aalTable_r13 = \u0275\u0275reference(48);
      const aalTotalTpl_r14 = \u0275\u0275reference(95);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.basicInfo());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 46, "al.label.leaveType", "Lo\u1EA1i ngh\u1EC9 ph\xE9p"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.leaveTypeCode);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(11, 49, "al.select.allOption", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.leaveTypeOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 52, "al.label.affirmFlag", "Tr\u1EA1ng th\xE1i duy\u1EC7t"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.affirmFlag);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(18, 55, "al.select.allOption", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.affirmFlagOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 58, "al.label.workDate", "Ng\xE0y c\xF4ng"));
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.fromDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.toDate);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(33, 61, "al.btn.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.quickFilterKeyword);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(36, 64, "al.placeholder.quickFilter", "L\u1ECDc nhanh..."));
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275property("nzLoading", ctx.cancelling());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(41, 67, "al.btn.cancel", "H\u1EE7y b\u1ECF"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(45, 70, "al.btn.applyLeave", "Xin ngh\u1EC9 ph\xE9p"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.filteredRows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", \u0275\u0275pureFunction0(115, _c0))("nzShowTotal", aalTotalTpl_r14)("nzScroll", \u0275\u0275pureFunction0(116, _c1));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.allCancelableSelected())("nzIndeterminate", ctx.someCancelableSelected());
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(55, 73, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(58, 76, "al.col.leaveType", "Lo\u1EA1i ngh\u1EC9 ph\xE9p"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(61, 79, "al.col.applyDate", "Ng\xE0y xin ph\xE9p"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(64, 82, "al.col.fromDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(67, 85, "al.col.fromTime", "Gi\u1EDD b\u1EAFt \u0111\u1EA7u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(70, 88, "al.col.toDate", "Ng\xE0y k\u1EBFt th\xFAc"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(73, 91, "al.col.toTime", "Gi\u1EDD k\u1EBFt th\xFAc"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(76, 94, "al.col.duration", "Th\u1EDDi l\u01B0\u1EE3ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(79, 97, "al.col.reason", "L\xFD do"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(82, 100, "al.col.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(85, 103, "al.col.hrComment", "\xDD ki\u1EBFn nh\xE2n s\u1EF1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(88, 106, "al.col.confirm", "X\xE1c nh\u1EADn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(91, 109, "al.col.inputBy", "Ng\u01B0\u1EDDi nh\u1EADp"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", aalTable_r13.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.detailVisible())("nzTitle", \u0275\u0275pipeBind2(97, 112, "al.modal.leaveInfoTitle", "Th\xF4ng tin xin ph\xE9p"))("nzBodyStyle", \u0275\u0275pureFunction0(117, _c2))("nzFooter", null);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzDatePickerModule, NzDatePickerComponent, NzCheckboxModule, NzCheckboxComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, NzDescriptionsModule, NzDescriptionsComponent, NzDescriptionsItemComponent, TranslatePipe], styles: ["\n.aal-row-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.aal-row-clickable[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n/*# sourceMappingURL=apply-attendance-info-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApplyAttendanceInfoListComponent, [{
    type: Component,
    args: [{ selector: "app-apply-attendance-info-list", standalone: true, imports: [
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
            <label class="form-label">{{ 'al.label.leaveType' | translate:'Lo\u1EA1i ngh\u1EC9 ph\xE9p' }}</label>
            <nz-select class="w-100" [(ngModel)]="leaveTypeCode" name="leaveTypeCode" nzAllowClear
                       [nzPlaceHolder]="'al.select.allOption' | translate:'-- T\u1EA5t c\u1EA3 --'">
              <nz-option *ngFor="let c of leaveTypeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
            </nz-select>
          </div>
          <div class="col-md-3">
            <label class="form-label">{{ 'al.label.affirmFlag' | translate:'Tr\u1EA1ng th\xE1i duy\u1EC7t' }}</label>
            <nz-select class="w-100" [(ngModel)]="affirmFlag" name="affirmFlag" nzAllowClear
                       [nzPlaceHolder]="'al.select.allOption' | translate:'-- T\u1EA5t c\u1EA3 --'">
              <nz-option *ngFor="let c of affirmFlagOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
            </nz-select>
          </div>
          <div class="col-md-4">
            <label class="form-label">{{ 'al.label.workDate' | translate:'Ng\xE0y c\xF4ng' }}</label>
            <div class="d-flex align-items-center gap-2">
              <nz-date-picker style="width:150px;" [(ngModel)]="fromDate" name="fromDate" nzFormat="yyyy-MM-dd"></nz-date-picker>
              <span>~</span>
              <nz-date-picker style="width:150px;" [(ngModel)]="toDate" name="toDate" nzFormat="yyyy-MM-dd"></nz-date-picker>
            </div>
          </div>
          <div class="col-md-2 d-flex align-items-end">
            <button nz-button nzType="primary" type="submit">
              <i class="bx bx-search"></i> {{ 'al.btn.search' | translate:'Tra c\u1EE9u' }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- ===== Toolbar ===== -->
    <div class="d-flex align-items-center gap-2 mb-2 flex-wrap">
      <input nz-input style="max-width:220px;" [(ngModel)]="quickFilterKeyword"
             [placeholder]="'al.placeholder.quickFilter' | translate:'L\u1ECDc nhanh...'">
      <div class="ms-auto d-flex gap-2">
        <button nz-button nzDanger [nzLoading]="cancelling()" (click)="cancelSelected()">
          <i class="bx bx-x-circle"></i> {{ 'al.btn.cancel' | translate:'H\u1EE7y b\u1ECF' }}
        </button>
        <button nz-button nzType="primary" (click)="goApply()">
          <i class="bx bx-plus-circle"></i> {{ 'al.btn.applyLeave' | translate:'Xin ngh\u1EC9 ph\xE9p' }}
        </button>
      </div>
    </div>

    <!-- ===== B\u1EA3ng danh s\xE1ch ===== -->
    <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

    <nz-table [nzData]="filteredRows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
              [nzPageSizeOptions]="[25, 50, 100, 200]" [nzShowTotal]="aalTotalTpl"
              [nzScroll]="{ x: '1700px' }" class="table-nowrap" #aalTable>
      <thead>
        <tr>
          <th nzWidth="40px">
            <label nz-checkbox [ngModel]="allCancelableSelected()" [nzIndeterminate]="someCancelableSelected()"
                   (ngModelChange)="toggleSelectAll($event)"></label>
          </th>
          <th class="text-center" nzWidth="50px">{{ 'common.stt' | translate:'STT' }}</th>
          <th nzWidth="150px">{{ 'al.col.leaveType' | translate:'Lo\u1EA1i ngh\u1EC9 ph\xE9p' }}</th>
          <th class="text-center" nzWidth="110px">{{ 'al.col.applyDate' | translate:'Ng\xE0y xin ph\xE9p' }}</th>
          <th class="text-center" nzWidth="110px">{{ 'al.col.fromDate' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u' }}</th>
          <th class="text-center" nzWidth="90px">{{ 'al.col.fromTime' | translate:'Gi\u1EDD b\u1EAFt \u0111\u1EA7u' }}</th>
          <th class="text-center" nzWidth="110px">{{ 'al.col.toDate' | translate:'Ng\xE0y k\u1EBFt th\xFAc' }}</th>
          <th class="text-center" nzWidth="90px">{{ 'al.col.toTime' | translate:'Gi\u1EDD k\u1EBFt th\xFAc' }}</th>
          <th class="text-center" nzWidth="110px">{{ 'al.col.duration' | translate:'Th\u1EDDi l\u01B0\u1EE3ng' }}</th>
          <th nzWidth="180px">{{ 'al.col.reason' | translate:'L\xFD do' }}</th>
          <th class="text-center" nzWidth="120px">{{ 'al.col.status' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
          <th nzWidth="180px">{{ 'al.col.hrComment' | translate:'\xDD ki\u1EBFn nh\xE2n s\u1EF1' }}</th>
          <th class="text-center" nzWidth="120px">{{ 'al.col.confirm' | translate:'X\xE1c nh\u1EADn' }}</th>
          <th nzWidth="180px">{{ 'al.col.inputBy' | translate:'Ng\u01B0\u1EDDi nh\u1EADp' }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of aalTable.data; let i = index" class="aal-row-clickable" (click)="openDetail(row)">
          <td class="text-center" (click)="$event.stopPropagation()">
            <label nz-checkbox *ngIf="[ '14014306', '14014307', '14014308' ].includes(row.affirmFlag)" [(ngModel)]="row.selected"></label>
          </td>
          <td class="text-center">{{ i + 1 }}</td>
          <td><a href="javascript:void(0)">{{ row.leaveTypeName || row.leaveTypeCode }}</a></td>
          <td class="text-center">{{ row.applyDate }}</td>
          <td class="text-center">{{ row.leaveFromDate }}</td>
          <td class="text-center">{{ row.leaveFromTimeOnly }}</td>
          <td class="text-center">{{ row.leaveToDate }}</td>
          <td class="text-center">{{ row.leaveToTimeOnly }}</td>
          <td class="text-center">{{ formatDuration(row.applyLength, row.dayHours) }}</td>
          <td [attr.title]="row.leaveReason || null">{{ row.leaveReason }}</td>
          <td class="text-center">{{ row.affirmFlagName || row.affirmFlag }}</td>
          <td [attr.title]="row.hrComment || null">{{ row.hrComment }}</td>
          <td class="text-center">{{ row.confirmFlagName }}</td>
          <td>{{ row.createdBy }}<ng-container *ngIf="row.createdIp"> {{ row.createdIp }}</ng-container></td>
        </tr>
      </tbody>
      <ng-template #aalTotalTpl let-total>
        {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
      </ng-template>
    </nz-table>

  </div>
</div>

<!-- Modal chi ti\u1EBFt \u0111\u01A1n ngh\u1EC9 ph\xE9p -->
<nz-modal [nzVisible]="detailVisible()" [nzTitle]="'al.modal.leaveInfoTitle' | translate:'Th\xF4ng tin xin ph\xE9p'" nzWidth="55vw"
          [nzBodyStyle]="{ 'max-height': '75vh', 'overflow-y': 'auto' }"
          (nzOnCancel)="closeDetail()" [nzFooter]="null">
  <ng-container *nzModalContent>
    <nz-alert *ngIf="detailErrorMessage()" nzType="error" [nzMessage]="detailErrorMessage() ?? ''" class="mb-3"></nz-alert>
    <ng-container *ngIf="!detailLoading() && detailData() as d">
      <h6 class="fw-bold mb-2">{{ 'al.modal.empInfoTitle' | translate:'Th\xF4ng tin nh\xE2n vi\xEAn' }}</h6>
      <nz-descriptions nzBordered [nzColumn]="2" nzSize="small" class="mb-3">
        <nz-descriptions-item [nzTitle]="'al.modal.empId' | translate:'M\xE3 nh\xE2n vi\xEAn'">{{ d.employeeInfo?.['empId'] }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'al.modal.empName' | translate:'H\u1ECD t\xEAn'">{{ d.employeeInfo?.['localName'] }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'al.modal.empDept' | translate:'Ph\xF2ng ban'">{{ d.employeeInfo?.['deptName'] }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'al.modal.empPost' | translate:'Ch\u1EE9c v\u1EE5'">{{ d.employeeInfo?.['postGradeName'] }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'al.modal.leaveType' | translate:'Lo\u1EA1i ngh\u1EC9 ph\xE9p'">{{ d.leaveInfo?.['leaveTypeName'] }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'common.status' | translate:'Tr\u1EA1ng th\xE1i'">{{ d.leaveInfo?.['affirmFlagName'] }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'al.modal.leaveFrom' | translate:'Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u'">{{ d.leaveInfo?.['leaveFromTime'] }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'al.modal.leaveTo' | translate:'Th\u1EDDi gian k\u1EBFt th\xFAc'">{{ d.leaveInfo?.['leaveToTime'] }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'al.modal.duration' | translate:'Th\u1EDDi l\u01B0\u1EE3ng'">{{ formatDuration(d.leaveInfo?.['applyLength'], d.leaveInfo?.['dayHours']) }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'al.modal.reason' | translate:'L\xFD do'" [nzSpan]="2">{{ d.leaveInfo?.['leaveReason'] }}</nz-descriptions-item>
      </nz-descriptions>

      <h6 class="fw-bold mb-2">{{ 'al.modal.approvalSeq' | translate:'Tr\xECnh t\u1EF1 duy\u1EC7t' }}</h6>
      <div class="table-responsive">
        <nz-table [nzData]="d.approvalList" [nzShowPagination]="false" nzSize="small">
          <thead>
            <tr>
              <th class="text-center" style="width:50px">{{ 'al.modal.stt' | translate:'STT' }}</th>
              <th class="text-center" style="width:110px">{{ 'al.modal.approvalSeq' | translate:'Tr\xECnh t\u1EF1 duy\u1EC7t' }}</th>
              <th class="text-center" style="width:110px">{{ 'al.modal.approvalStatus' | translate:'Tr\u1EA1ng th\xE1i duy\u1EC7t' }}</th>
              <th>{{ 'al.modal.fullName' | translate:'H\u1ECD t\xEAn' }}</th>
              <th>{{ 'al.modal.comment' | translate:'\xDD ki\u1EBFn' }}</th>
              <th class="text-center" style="width:170px">{{ 'al.modal.actionTime' | translate:'Th\u1EDDi gian th\u1EF1c hi\u1EC7n' }}</th>
              <th style="width:120px">{{ 'al.modal.department' | translate:'Ph\xF2ng ban' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="!d.approvalList?.length">
              <td colspan="7" class="text-center text-muted">{{ 'al.js.noApprovalData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u ph\xEA duy\u1EC7t' }}</td>
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
    </ng-container>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/apply-attendance-info-list/apply-attendance-info-list.component.css */\n.aal-row-clickable {\n  cursor: pointer;\n}\n.aal-row-clickable:hover {\n  background: #fafafa;\n}\n/*# sourceMappingURL=apply-attendance-info-list.component.css.map */\n"] }]
  }], () => [{ type: ApplyAttendanceInfoListService }, { type: I18nService }, { type: NzMessageService }, { type: NzModalService }, { type: TabService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApplyAttendanceInfoListComponent, { className: "ApplyAttendanceInfoListComponent", filePath: "src/app/apply-attendance-info-list/apply-attendance-info-list.component.ts", lineNumber: 80 });
})();
export {
  ApplyAttendanceInfoListComponent
};
//# debugId=bf21f929-380a-50ed-affa-1bb965245b7e
//# sourceMappingURL=chunk-G6FNVMA4.js.map
