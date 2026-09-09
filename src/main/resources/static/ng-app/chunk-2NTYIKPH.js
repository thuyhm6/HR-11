import {
  NzMessageService
} from "./chunk-XWW7CXU6.js";
import {
  NzModalComponent,
  NzModalContentDirective,
  NzModalModule
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
import "./chunk-2GOAB54B.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
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
  __spreadValues,
  computed,
  formatDate,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-VTW5U2M5.js";

// src/app/qualification-info/qualification-info.service.ts
var API_BASE = "/ess/empinfo/api/qualInfo";
var QualificationInfoService = class _QualificationInfoService {
  constructor(http) {
    this.http = http;
  }
  http;
  getBasicInfo() {
    return this.http.get("/ess/empinfo/api/personalInfo/myInfo", { withCredentials: true });
  }
  getEducation() {
    return this.http.get(`${API_BASE}/myEducation`, { withCredentials: true });
  }
  getQualification() {
    return this.http.get(`${API_BASE}/myQualification`, { withCredentials: true });
  }
  getReward() {
    return this.http.get(`${API_BASE}/myReward`, { withCredentials: true });
  }
  getCodeList(parentCodeNo) {
    return this.http.get("/sys/api/getCode/list", {
      params: new HttpParams().set("parentCodeNo", parentCodeNo),
      withCredentials: true
    });
  }
  saveEducationApply(payload, files) {
    return this.http.post(`${API_BASE}/saveEducationApply`, this.toFormData(payload, files), {
      withCredentials: true
    });
  }
  saveQualificationApply(payload, files) {
    return this.http.post(`${API_BASE}/saveQualificationApply`, this.toFormData(payload, files), {
      withCredentials: true
    });
  }
  /** Không set Content-Type thủ công - trình duyệt tự thêm boundary đúng cho multipart/form-data. */
  toFormData(payload, files) {
    const fd = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      if (value !== void 0 && value !== null && value !== "")
        fd.append(key, String(value));
    });
    files.forEach((file) => fd.append("attachFiles", file));
    return fd;
  }
  static \u0275fac = function QualificationInfoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QualificationInfoService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QualificationInfoService, factory: _QualificationInfoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QualificationInfoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/qualification-info/qualification-info.component.ts
var _c0 = ["educFileInput"];
var _c1 = ["qualFileInput"];
function QualificationInfoComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 13)(2, "table", 26)(3, "colgroup");
    \u0275\u0275element(4, "col", 27)(5, "col", 28)(6, "col", 27)(7, "col", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "tbody")(9, "tr")(10, "th", 29);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 29);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "tr")(21, "th", 29);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 29);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "tr")(32, "th", 29);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "td");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th", 29);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "td");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "tr")(43, "th", 29);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "td");
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th", 29);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "td");
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const info_r1 = ctx.ngIf;
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 16, "essEmpCard.localName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r1.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 19, "essEmpCard.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r1.empId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 22, "essEmpCard.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r1.deptName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 25, "essEmpCard.headDept", "Tr\u01B0\u1EDFng ph\xF2ng"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r1.headDepartment);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 28, "essEmpCard.postFamily", "Nh\xF3m nh\xE2n vi\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r1.postFamilyName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 31, "essEmpCard.postGrade", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r1.postGradeName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 34, "essEmpCard.positionName", "Ch\u1EE9c danh"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r1.positionNoName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 37, "essEmpCard.dateStarted", "Ng\xE0y v\xE0o l\xE0m"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r1.dateStarted);
  }
}
function QualificationInfoComponent_nz_alert_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 30);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.educError() ?? "");
  }
}
function QualificationInfoComponent_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 31);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "epi.msg.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function QualificationInfoComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 32);
    \u0275\u0275listener("click", function QualificationInfoComponent_tr_36_Template_tr_click_0_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEducModal(row_r4));
    });
    \u0275\u0275elementStart(1, "td")(2, "a", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r4.degreeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.startDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.endDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.institutionName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.subject);
  }
}
function QualificationInfoComponent_nz_alert_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 30);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.qualError() ?? "");
  }
}
function QualificationInfoComponent_tr_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 34);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "epi.msg.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function QualificationInfoComponent_tr_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 32);
    \u0275\u0275listener("click", function QualificationInfoComponent_tr_73_Template_tr_click_0_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openQualModal(row_r6));
    });
    \u0275\u0275elementStart(1, "td")(2, "a", 33);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r6.qualName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.qualLevel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDisplayDate(row_r6.dateObtained));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDisplayDate(row_r6.validityDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.qualCardNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.qualInstitute);
  }
}
function QualificationInfoComponent_nz_alert_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 30);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.rewardError() ?? "");
  }
}
function QualificationInfoComponent_tr_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 35);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "epi.msg.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function QualificationInfoComponent_tr_100_Template(rf, ctx) {
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
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.rewardType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDisplayDate(row_r7.rewardDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.rewardCnpy);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.reward);
  }
}
function QualificationInfoComponent_ng_container_104_nz_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 50);
  }
  if (rf & 2) {
    const c_r9 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r9.codeNo)("nzLabel", c_r9.codeName);
  }
}
function QualificationInfoComponent_ng_container_104_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 36)(2, "div", 37)(3, "label", 38);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span", 39);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "nz-select", 40);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function QualificationInfoComponent_ng_container_104_Template_nz_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.educForm.degreeCode, $event) || (ctx_r1.educForm.degreeCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(10, QualificationInfoComponent_ng_container_104_nz_option_10_Template, 1, 2, "nz-option", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 37)(12, "label", 38);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function QualificationInfoComponent_ng_container_104_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.educForm.institutionName, $event) || (ctx_r1.educForm.institutionName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 43)(17, "label", 38);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 44);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function QualificationInfoComponent_ng_container_104_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.educForm.startDate, $event) || (ctx_r1.educForm.startDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 43)(23, "label", 38);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 44);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function QualificationInfoComponent_ng_container_104_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.educForm.endDate, $event) || (ctx_r1.educForm.endDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 43)(29, "label", 38);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function QualificationInfoComponent_ng_container_104_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.educForm.subject, $event) || (ctx_r1.educForm.subject = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 37)(34, "label", 38);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function QualificationInfoComponent_ng_container_104_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.educForm.degreesCode, $event) || (ctx_r1.educForm.degreesCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 37)(39, "label", 38);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function QualificationInfoComponent_ng_container_104_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.educForm.eduDegNum, $event) || (ctx_r1.educForm.eduDegNum = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 6)(44, "label", 38);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "textarea", 45);
    \u0275\u0275twoWayListener("ngModelChange", function QualificationInfoComponent_ng_container_104_Template_textarea_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.educForm.remark, $event) || (ctx_r1.educForm.remark = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 46);
    \u0275\u0275element(49, "nz-alert", 47);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementStart(51, "label", 38);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "input", 48, 3);
    \u0275\u0275listener("change", function QualificationInfoComponent_ng_container_104_Template_input_change_54_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEducFilesChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 49);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 23, "qi.field.educLevel", "Tr\xECnh \u0111\u1ED9 h\u1ECDc v\u1EA5n"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.educForm.degreeCode);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(9, 26, "epi.select.choose", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.degreeOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 29, "qi.field.institution", "Tr\u01B0\u1EDDng t\u1ED1t nghi\u1EC7p"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.educForm.institutionName);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 32, "qi.field.startMonth", "Ng\xE0y nh\u1EADp h\u1ECDc (MM/YYYY)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.educForm.startDate);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(21, 35, "qi.placeholder.mmyyyy", "VD: 09/2015"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 38, "qi.field.endMonth", "Ng\xE0y t\u1ED1t nghi\u1EC7p (MM/YYYY)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.educForm.endDate);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(27, 41, "qi.placeholder.mmyyyy", "VD: 06/2019"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 44, "qi.field.subject", "Chuy\xEAn ng\xE0nh"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.educForm.subject);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 47, "qi.field.academicTitle", "H\u1ECDc v\u1ECB"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.educForm.degreesCode);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 50, "qi.field.degreeNum", "S\u1ED1 b\u1EB1ng c\u1EA5p"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.educForm.eduDegNum);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 53, "epi.field.remark", "Ghi ch\xFA"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.educForm.remark);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("nzMessage", \u0275\u0275pipeBind2(50, 56, "epi.msg.applyNote", "Y\xEAu c\u1EA7u s\u1EBD \u0111\u01B0\u1EE3c g\u1EEDi \u0111\u1EBFn ng\u01B0\u1EDDi qu\u1EA3n l\xFD \u0111\u1EC3 x\xE9t duy\u1EC7t."));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(53, 59, "epi.field.attachFiles", "File \u0111\xEDnh k\xE8m"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(58, 62, "epi.msg.uploadHint", "H\u1ED7 tr\u1EE3: PDF, Word, Excel, h\xECnh \u1EA3nh."));
  }
}
function QualificationInfoComponent_ng_container_108_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 36)(2, "div", 37)(3, "label", 38);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span", 39);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function QualificationInfoComponent_ng_container_108_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.qualForm.qualName, $event) || (ctx_r1.qualForm.qualName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 37)(10, "label", 38);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function QualificationInfoComponent_ng_container_108_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.qualForm.qualLevel, $event) || (ctx_r1.qualForm.qualLevel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 43)(15, "label", 38);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "nz-date-picker", 51);
    \u0275\u0275twoWayListener("ngModelChange", function QualificationInfoComponent_ng_container_108_Template_nz_date_picker_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.qualForm.dateObtained, $event) || (ctx_r1.qualForm.dateObtained = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 43)(20, "label", 38);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "nz-date-picker", 51);
    \u0275\u0275twoWayListener("ngModelChange", function QualificationInfoComponent_ng_container_108_Template_nz_date_picker_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.qualForm.validityDate, $event) || (ctx_r1.qualForm.validityDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 43)(25, "label", 38);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function QualificationInfoComponent_ng_container_108_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.qualForm.qualCardNo, $event) || (ctx_r1.qualForm.qualCardNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 37)(30, "label", 38);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function QualificationInfoComponent_ng_container_108_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.qualForm.qualInstitute, $event) || (ctx_r1.qualForm.qualInstitute = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 37)(35, "label", 38);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function QualificationInfoComponent_ng_container_108_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.qualForm.qualGrade, $event) || (ctx_r1.qualForm.qualGrade = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 6)(40, "label", 38);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "textarea", 45);
    \u0275\u0275twoWayListener("ngModelChange", function QualificationInfoComponent_ng_container_108_Template_textarea_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.qualForm.qualRemark, $event) || (ctx_r1.qualForm.qualRemark = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 46);
    \u0275\u0275element(45, "nz-alert", 47);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementStart(47, "label", 38);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "input", 48, 4);
    \u0275\u0275listener("change", function QualificationInfoComponent_ng_container_108_Template_input_change_50_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onQualFilesChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 49);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 19, "qi.field.qualName", "T\xEAn ch\u1EE9ng ch\u1EC9"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.qualForm.qualName);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 22, "qi.field.qualLevel", "C\u1EA5p ch\u1EE9ng ch\u1EC9"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.qualForm.qualLevel);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 25, "qi.field.dateObtained", "Ng\xE0y c\u1EA5p"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.qualForm.dateObtained);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 28, "qi.field.validityDate", "Ng\xE0y h\u1EBFt h\u1EA1n"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.qualForm.validityDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 31, "qi.field.qualCardNo", "M\xE3 ch\u1EE9ng ch\u1EC9"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.qualForm.qualCardNo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 34, "qi.field.qualInstitute", "N\u01A1i c\u1EA5p"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.qualForm.qualInstitute);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 37, "qi.field.qualGrade", "X\u1EBFp lo\u1EA1i"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.qualForm.qualGrade);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 40, "epi.field.remark", "Ghi ch\xFA"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.qualForm.qualRemark);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("nzMessage", \u0275\u0275pipeBind2(46, 43, "epi.msg.applyNote", "Y\xEAu c\u1EA7u s\u1EBD \u0111\u01B0\u1EE3c g\u1EEDi \u0111\u1EBFn ng\u01B0\u1EDDi qu\u1EA3n l\xFD \u0111\u1EC3 x\xE9t duy\u1EC7t."));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 46, "epi.field.attachFiles", "File \u0111\xEDnh k\xE8m"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 49, "epi.msg.uploadHint", "H\u1ED7 tr\u1EE3: PDF, Word, Excel, h\xECnh \u1EA3nh."));
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
  "qi.section.education",
  "qi.section.qualification",
  "qi.section.reward",
  "qi.field.educLevel",
  "qi.field.startDate",
  "qi.field.endDate",
  "qi.field.startMonth",
  "qi.field.endMonth",
  "qi.field.institution",
  "qi.field.subject",
  "qi.field.academicTitle",
  "qi.field.degreeNum",
  "qi.field.qualName",
  "qi.field.qualLevel",
  "qi.field.dateObtained",
  "qi.field.validityDate",
  "qi.field.qualCardNo",
  "qi.field.qualInstitute",
  "qi.field.qualGrade",
  "qi.field.rewardType",
  "qi.field.rewardDate",
  "qi.field.rewardCnpy",
  "qi.field.rewardAmount",
  "qi.modal.addEduc",
  "qi.modal.editEduc",
  "qi.modal.addQual",
  "qi.modal.editQual",
  "qi.msg.loadError.educ",
  "qi.msg.loadError.qual",
  "qi.msg.loadError.reward",
  "qi.msg.validate.educLevel",
  "qi.msg.validate.qualName",
  "qi.placeholder.mmyyyy",
  "epi.field.remark",
  "epi.field.attachFiles",
  "epi.btn.addNew",
  "epi.btn.submitRequest",
  "epi.msg.noData",
  "epi.msg.applyNote",
  "epi.msg.applySuccess",
  "epi.msg.systemError",
  "epi.msg.uploadHint",
  "epi.select.choose",
  "common.close",
  "common.loadFail"
];
var EMPTY_EDUC_FORM = {
  educNo: null,
  degreeCode: null,
  institutionName: "",
  startDate: "",
  endDate: "",
  subject: "",
  degreesCode: "",
  eduDegNum: "",
  remark: ""
};
var EMPTY_QUAL_FORM = {
  qualNo: null,
  qualName: "",
  qualLevel: "",
  dateObtained: null,
  validityDate: null,
  qualCardNo: "",
  qualInstitute: "",
  qualGrade: "",
  qualRemark: ""
};
var QualificationInfoComponent = class _QualificationInfoComponent {
  constructor(api, i18n, message) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
  }
  api;
  i18n;
  message;
  educFileInputRef;
  qualFileInputRef;
  basicInfo = signal(
    null,
    ...ngDevMode ? [{ debugName: "basicInfo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  educList = signal(
    [],
    ...ngDevMode ? [{ debugName: "educList" }] : (
      /* istanbul ignore next */
      []
    )
  );
  educLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "educLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  educError = signal(
    null,
    ...ngDevMode ? [{ debugName: "educError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  qualList = signal(
    [],
    ...ngDevMode ? [{ debugName: "qualList" }] : (
      /* istanbul ignore next */
      []
    )
  );
  qualLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "qualLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  qualError = signal(
    null,
    ...ngDevMode ? [{ debugName: "qualError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  rewardList = signal(
    [],
    ...ngDevMode ? [{ debugName: "rewardList" }] : (
      /* istanbul ignore next */
      []
    )
  );
  rewardLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "rewardLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  rewardError = signal(
    null,
    ...ngDevMode ? [{ debugName: "rewardError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  degreeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "degreeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  educModalVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "educModalVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  educSaving = signal(
    false,
    ...ngDevMode ? [{ debugName: "educSaving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  educIsNew = signal(
    true,
    ...ngDevMode ? [{ debugName: "educIsNew" }] : (
      /* istanbul ignore next */
      []
    )
  );
  educModalTitle = computed(
    () => this.educIsNew() ? this.i18n.t("qi.modal.addEduc", "Th\xEAm m\u1EDBi h\u1ECDc v\u1EA5n") : this.i18n.t("qi.modal.editEduc", "C\u1EADp nh\u1EADt h\u1ECDc v\u1EA5n"),
    ...ngDevMode ? [{ debugName: "educModalTitle" }] : (
      /* istanbul ignore next */
      []
    )
  );
  educForm = __spreadValues({}, EMPTY_EDUC_FORM);
  educFiles = [];
  qualModalVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "qualModalVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  qualSaving = signal(
    false,
    ...ngDevMode ? [{ debugName: "qualSaving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  qualIsNew = signal(
    true,
    ...ngDevMode ? [{ debugName: "qualIsNew" }] : (
      /* istanbul ignore next */
      []
    )
  );
  qualModalTitle = computed(
    () => this.qualIsNew() ? this.i18n.t("qi.modal.addQual", "Th\xEAm m\u1EDBi ch\u1EE9ng ch\u1EC9") : this.i18n.t("qi.modal.editQual", "C\u1EADp nh\u1EADt ch\u1EE9ng ch\u1EC9"),
    ...ngDevMode ? [{ debugName: "qualModalTitle" }] : (
      /* istanbul ignore next */
      []
    )
  );
  qualForm = __spreadValues({}, EMPTY_QUAL_FORM);
  qualFiles = [];
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getCodeList("13769").subscribe((list) => this.degreeOptions.set(list ?? []));
    this.loadBasicInfo();
    this.loadEducation();
    this.loadQualification();
    this.loadReward();
  }
  /** Định dạng ngày hiển thị theo DD/MM/YYYY (xem CLAUDE.md) - dữ liệu từ API là chuỗi yyyy-MM-dd. */
  formatDisplayDate(dateStr) {
    if (!dateStr)
      return "";
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? dateStr : formatDate(d, "dd/MM/yyyy", "vi");
  }
  loadBasicInfo() {
    this.api.getBasicInfo().subscribe({
      next: (data) => this.basicInfo.set(data)
    });
  }
  loadEducation() {
    this.educLoading.set(true);
    this.educError.set(null);
    this.api.getEducation().subscribe({
      next: (list) => {
        this.educList.set(list ?? []);
        this.educLoading.set(false);
      },
      error: () => {
        this.educError.set(this.i18n.t("qi.msg.loadError.educ", "L\u1ED7i t\u1EA3i d\u1EEF li\u1EC7u h\u1ECDc v\u1EA5n"));
        this.educList.set([]);
        this.educLoading.set(false);
      }
    });
  }
  loadQualification() {
    this.qualLoading.set(true);
    this.qualError.set(null);
    this.api.getQualification().subscribe({
      next: (list) => {
        this.qualList.set(list ?? []);
        this.qualLoading.set(false);
      },
      error: () => {
        this.qualError.set(this.i18n.t("qi.msg.loadError.qual", "L\u1ED7i t\u1EA3i d\u1EEF li\u1EC7u ch\u1EE9ng ch\u1EC9"));
        this.qualList.set([]);
        this.qualLoading.set(false);
      }
    });
  }
  loadReward() {
    this.rewardLoading.set(true);
    this.rewardError.set(null);
    this.api.getReward().subscribe({
      next: (list) => {
        this.rewardList.set(list ?? []);
        this.rewardLoading.set(false);
      },
      error: () => {
        this.rewardError.set(this.i18n.t("qi.msg.loadError.reward", "L\u1ED7i t\u1EA3i d\u1EEF li\u1EC7u khen th\u01B0\u1EDFng"));
        this.rewardList.set([]);
        this.rewardLoading.set(false);
      }
    });
  }
  // ==================== Modal: Học vấn ====================
  openEducModal(row) {
    this.educIsNew.set(!row);
    this.educForm = row ? {
      educNo: row.educNo,
      degreeCode: row.degreeCode || null,
      institutionName: row.institutionName || "",
      startDate: row.startDate || "",
      endDate: row.endDate || "",
      subject: row.subject || "",
      degreesCode: row.degreesCode || "",
      eduDegNum: row.eduDegNum || "",
      remark: row.remark || ""
    } : __spreadValues({}, EMPTY_EDUC_FORM);
    this.educFiles = [];
    if (this.educFileInputRef)
      this.educFileInputRef.nativeElement.value = "";
    this.educModalVisible.set(true);
  }
  closeEducModal() {
    this.educModalVisible.set(false);
  }
  onEducFilesChange(event) {
    const input = event.target;
    this.educFiles = input.files ? Array.from(input.files) : [];
  }
  saveEduc() {
    const f = this.educForm;
    if (!f.degreeCode) {
      this.message.error(this.i18n.t("qi.msg.validate.educLevel", "Vui l\xF2ng ch\u1ECDn Tr\xECnh \u0111\u1ED9 h\u1ECDc v\u1EA5n!"));
      return;
    }
    const payload = {
      degreeCode: f.degreeCode,
      institutionName: f.institutionName,
      startDate: f.startDate,
      endDate: f.endDate,
      subject: f.subject,
      degreesCode: f.degreesCode,
      eduDegNum: f.eduDegNum,
      remark: f.remark,
      updateEducNo: f.educNo ?? void 0
    };
    this.educSaving.set(true);
    this.api.saveEducationApply(payload, this.educFiles).subscribe({
      next: () => {
        this.educSaving.set(false);
        this.educModalVisible.set(false);
        this.message.success(this.i18n.t("epi.msg.applySuccess", "G\u1EEDi y\xEAu c\u1EA7u th\xE0nh c\xF4ng! Ch\u1EDD ng\u01B0\u1EDDi qu\u1EA3n l\xFD x\xE9t duy\u1EC7t."));
        this.loadEducation();
      },
      error: (err) => {
        this.educSaving.set(false);
        const msg = err?.error?.error || this.i18n.t("epi.msg.systemError", "L\u1ED7i h\u1EC7 th\u1ED1ng");
        this.message.error(msg);
      }
    });
  }
  // ==================== Modal: Chứng chỉ ====================
  openQualModal(row) {
    this.qualIsNew.set(!row);
    this.qualForm = row ? {
      qualNo: row.qualNo,
      qualName: row.qualName || "",
      qualLevel: row.qualLevel || "",
      dateObtained: this.toDate(row.dateObtained),
      validityDate: this.toDate(row.validityDate),
      qualCardNo: row.qualCardNo || "",
      qualInstitute: row.qualInstitute || "",
      qualGrade: row.qualGrade || "",
      qualRemark: row.qualRemark || ""
    } : __spreadValues({}, EMPTY_QUAL_FORM);
    this.qualFiles = [];
    if (this.qualFileInputRef)
      this.qualFileInputRef.nativeElement.value = "";
    this.qualModalVisible.set(true);
  }
  closeQualModal() {
    this.qualModalVisible.set(false);
  }
  onQualFilesChange(event) {
    const input = event.target;
    this.qualFiles = input.files ? Array.from(input.files) : [];
  }
  saveQual() {
    const f = this.qualForm;
    if (!f.qualName) {
      this.message.error(this.i18n.t("qi.msg.validate.qualName", "Vui l\xF2ng nh\u1EADp T\xEAn ch\u1EE9ng ch\u1EC9!"));
      return;
    }
    const payload = {
      qualName: f.qualName,
      qualLevel: f.qualLevel,
      dateObtained: this.formatYmd(f.dateObtained),
      validityDate: this.formatYmd(f.validityDate),
      qualCardNo: f.qualCardNo,
      qualInstitute: f.qualInstitute,
      qualGrade: f.qualGrade,
      qualRemark: f.qualRemark,
      updateQualNo: f.qualNo ?? void 0
    };
    this.qualSaving.set(true);
    this.api.saveQualificationApply(payload, this.qualFiles).subscribe({
      next: () => {
        this.qualSaving.set(false);
        this.qualModalVisible.set(false);
        this.message.success(this.i18n.t("epi.msg.applySuccess", "G\u1EEDi y\xEAu c\u1EA7u th\xE0nh c\xF4ng! Ch\u1EDD ng\u01B0\u1EDDi qu\u1EA3n l\xFD x\xE9t duy\u1EC7t."));
        this.loadQualification();
      },
      error: (err) => {
        this.qualSaving.set(false);
        const msg = err?.error?.error || this.i18n.t("epi.msg.systemError", "L\u1ED7i h\u1EC7 th\u1ED1ng");
        this.message.error(msg);
      }
    });
  }
  // ==================== Helpers ====================
  toDate(dateStr) {
    if (!dateStr)
      return null;
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? null : d;
  }
  formatYmd(d) {
    return d ? formatDate(d, "yyyy-MM-dd", "vi") : "";
  }
  static \u0275fac = function QualificationInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QualificationInfoComponent)(\u0275\u0275directiveInject(QualificationInfoService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QualificationInfoComponent, selectors: [["app-qualification-info"]], viewQuery: function QualificationInfoComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5)(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.educFileInputRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.qualFileInputRef = _t.first);
    }
  }, decls: 109, vars: 121, consts: [["qiEducTable", ""], ["qiQualTable", ""], ["qiRewardTable", ""], ["educFileInput", ""], ["qualFileInput", ""], [1, "row"], [1, "col-12"], ["class", "card mb-3", 4, "ngIf"], [1, "card", "mb-3"], [1, "card-header", "bg-light", "py-2", "d-flex", "justify-content-between", "align-items-center"], [1, "bx", "bx-book-open", "me-1"], ["nz-button", "", "nzType", "primary", "nzSize", "small", 3, "click"], [1, "bx", "bx-plus", "me-1"], [1, "card-body", "p-0"], ["nzType", "error", "class", "m-2", 3, "nzMessage", 4, "ngIf"], ["nzSize", "small", 3, "nzData", "nzLoading", "nzShowPagination"], [2, "width", "120px"], [4, "ngIf"], ["class", "qi-row-clickable", 3, "click", 4, "ngFor", "ngForOf"], [1, "bx", "bx-id-card", "me-1"], [2, "width", "110px"], [1, "card-header", "bg-light", "py-2"], [1, "bx", "bx-trophy", "me-1"], [4, "ngFor", "ngForOf"], ["nzWidth", "800px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [1, "table", "table-bordered", "table-sm", "align-middle", "mb-0", 2, "table-layout", "fixed"], [2, "width", "15%"], [2, "width", "35%"], [1, "table-light", "text-center"], ["nzType", "error", 1, "m-2", 3, "nzMessage"], ["colspan", "5", 1, "text-center", "text-muted"], [1, "qi-row-clickable", 3, "click"], ["href", "javascript:void(0)", 1, "text-primary"], ["colspan", "6", 1, "text-center", "text-muted"], ["colspan", "4", 1, "text-center", "text-muted"], [1, "row", "g-2"], [1, "col-md-6"], [1, "form-label", "fw-semibold"], [1, "text-danger"], ["nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nz-input", "", 3, "ngModelChange", "ngModel"], [1, "col-md-4"], ["nz-input", "", 3, "ngModelChange", "ngModel", "placeholder"], ["nz-input", "", "rows", "2", 3, "ngModelChange", "ngModel"], [1, "col-12", "mt-2"], ["nzType", "info", 1, "mb-2", 3, "nzMessage"], ["type", "file", "multiple", "", "accept", ".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg", 1, "form-control", "form-control-sm", 3, "change"], [1, "form-text"], [3, "nzValue", "nzLabel"], ["nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"]], template: function QualificationInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
      \u0275\u0275template(2, QualificationInfoComponent_div_2_Template, 53, 40, "div", 7);
      \u0275\u0275elementStart(3, "div", 8)(4, "div", 9)(5, "strong");
      \u0275\u0275element(6, "i", 10);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 11);
      \u0275\u0275listener("click", function QualificationInfoComponent_Template_button_click_9_listener() {
        return ctx.openEducModal(null);
      });
      \u0275\u0275element(10, "i", 12);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 13);
      \u0275\u0275template(14, QualificationInfoComponent_nz_alert_14_Template, 1, 1, "nz-alert", 14);
      \u0275\u0275elementStart(15, "nz-table", 15, 0)(17, "thead")(18, "tr")(19, "th");
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th", 16);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "th", 16);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th");
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th");
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "tbody");
      \u0275\u0275template(35, QualificationInfoComponent_tr_35_Template, 4, 4, "tr", 17)(36, QualificationInfoComponent_tr_36_Template, 12, 5, "tr", 18);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(37, "div", 8)(38, "div", 9)(39, "strong");
      \u0275\u0275element(40, "i", 19);
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "button", 11);
      \u0275\u0275listener("click", function QualificationInfoComponent_Template_button_click_43_listener() {
        return ctx.openQualModal(null);
      });
      \u0275\u0275element(44, "i", 12);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 13);
      \u0275\u0275template(48, QualificationInfoComponent_nz_alert_48_Template, 1, 1, "nz-alert", 14);
      \u0275\u0275elementStart(49, "nz-table", 15, 1)(51, "thead")(52, "tr")(53, "th");
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "th");
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "th", 20);
      \u0275\u0275text(60);
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "th", 20);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "th");
      \u0275\u0275text(66);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "th");
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(71, "tbody");
      \u0275\u0275template(72, QualificationInfoComponent_tr_72_Template, 4, 4, "tr", 17)(73, QualificationInfoComponent_tr_73_Template, 14, 6, "tr", 18);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(74, "div", 8)(75, "div", 21)(76, "strong");
      \u0275\u0275element(77, "i", 22);
      \u0275\u0275text(78);
      \u0275\u0275pipe(79, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(80, "div", 13);
      \u0275\u0275template(81, QualificationInfoComponent_nz_alert_81_Template, 1, 1, "nz-alert", 14);
      \u0275\u0275elementStart(82, "nz-table", 15, 2)(84, "thead")(85, "tr")(86, "th");
      \u0275\u0275text(87);
      \u0275\u0275pipe(88, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "th", 16);
      \u0275\u0275text(90);
      \u0275\u0275pipe(91, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "th");
      \u0275\u0275text(93);
      \u0275\u0275pipe(94, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "th");
      \u0275\u0275text(96);
      \u0275\u0275pipe(97, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(98, "tbody");
      \u0275\u0275template(99, QualificationInfoComponent_tr_99_Template, 4, 4, "tr", 17)(100, QualificationInfoComponent_tr_100_Template, 9, 4, "tr", 23);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(101, "nz-modal", 24);
      \u0275\u0275pipe(102, "translate");
      \u0275\u0275pipe(103, "translate");
      \u0275\u0275listener("nzOnCancel", function QualificationInfoComponent_Template_nz_modal_nzOnCancel_101_listener() {
        return ctx.closeEducModal();
      })("nzOnOk", function QualificationInfoComponent_Template_nz_modal_nzOnOk_101_listener() {
        return ctx.saveEduc();
      });
      \u0275\u0275template(104, QualificationInfoComponent_ng_container_104_Template, 59, 65, "ng-container", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "nz-modal", 24);
      \u0275\u0275pipe(106, "translate");
      \u0275\u0275pipe(107, "translate");
      \u0275\u0275listener("nzOnCancel", function QualificationInfoComponent_Template_nz_modal_nzOnCancel_105_listener() {
        return ctx.closeQualModal();
      })("nzOnOk", function QualificationInfoComponent_Template_nz_modal_nzOnOk_105_listener() {
        return ctx.saveQual();
      });
      \u0275\u0275template(108, QualificationInfoComponent_ng_container_108_Template, 55, 52, "ng-container", 25);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const qiEducTable_r11 = \u0275\u0275reference(16);
      const qiQualTable_r12 = \u0275\u0275reference(50);
      const qiRewardTable_r13 = \u0275\u0275reference(83);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.basicInfo());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 49, "qi.section.education", "Tr\xECnh \u0111\u1ED9 h\u1ECDc v\u1EA5n"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(12, 52, "epi.btn.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.educError());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.educList())("nzLoading", ctx.educLoading())("nzShowPagination", false);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 55, "qi.field.educLevel", "Tr\xECnh \u0111\u1ED9 h\u1ECDc v\u1EA5n"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 58, "qi.field.startDate", "Ng\xE0y nh\u1EADp h\u1ECDc"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 61, "qi.field.endDate", "Ng\xE0y t\u1ED1t nghi\u1EC7p"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 64, "qi.field.institution", "Tr\u01B0\u1EDDng t\u1ED1t nghi\u1EC7p"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 67, "qi.field.subject", "Chuy\xEAn ng\xE0nh"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.educLoading() && qiEducTable_r11.data.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", qiEducTable_r11.data);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 70, "qi.section.qualification", "Th\xF4ng tin ch\u1EE9ng ch\u1EC9"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(46, 73, "epi.btn.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.qualError());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.qualList())("nzLoading", ctx.qualLoading())("nzShowPagination", false);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(55, 76, "qi.field.qualName", "Ch\u1EE9ng ch\u1EC9"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(58, 79, "qi.field.qualLevel", "C\u1EA5p ch\u1EE9ng ch\u1EC9"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(61, 82, "qi.field.dateObtained", "Ng\xE0y c\u1EA5p"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(64, 85, "qi.field.validityDate", "Ng\xE0y h\u1EBFt h\u1EA1n"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(67, 88, "qi.field.qualCardNo", "M\xE3 ch\u1EE9ng ch\u1EC9"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(70, 91, "qi.field.qualInstitute", "N\u01A1i c\u1EA5p"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.qualLoading() && qiQualTable_r12.data.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", qiQualTable_r12.data);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(79, 94, "qi.section.reward", "Th\xF4ng tin khen th\u01B0\u1EDFng"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.rewardError());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rewardList())("nzLoading", ctx.rewardLoading())("nzShowPagination", false);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(88, 97, "qi.field.rewardType", "Khen th\u01B0\u1EDFng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(91, 100, "qi.field.rewardDate", "Ng\xE0y khen th\u01B0\u1EDFng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(94, 103, "qi.field.rewardCnpy", "\u0110\u01A1n v\u1ECB trao th\u01B0\u1EDFng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(97, 106, "qi.field.rewardAmount", "Ti\u1EC1n th\u01B0\u1EDFng"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.rewardLoading() && qiRewardTable_r13.data.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", qiRewardTable_r13.data);
      \u0275\u0275advance();
      \u0275\u0275property("nzVisible", ctx.educModalVisible())("nzTitle", ctx.educModalTitle())("nzOkLoading", ctx.educSaving())("nzOkText", \u0275\u0275pipeBind2(102, 109, "epi.btn.submitRequest", "G\u1EEDi y\xEAu c\u1EA7u"))("nzCancelText", \u0275\u0275pipeBind2(103, 112, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(4);
      \u0275\u0275property("nzVisible", ctx.qualModalVisible())("nzTitle", ctx.qualModalTitle())("nzOkLoading", ctx.qualSaving())("nzOkText", \u0275\u0275pipeBind2(106, 115, "epi.btn.submitRequest", "G\u1EEDi y\xEAu c\u1EA7u"))("nzCancelText", \u0275\u0275pipeBind2(107, 118, "common.close", "\u0110\xF3ng"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzDatePickerModule, NzDatePickerComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\n.qi-row-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.qi-row-clickable[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n/*# sourceMappingURL=qualification-info.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QualificationInfoComponent, [{
    type: Component,
    args: [{ selector: "app-qualification-info", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzInputModule,
      NzSelectModule,
      NzButtonModule,
      NzDatePickerModule,
      NzModalModule,
      NzAlertModule,
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

    <!-- ===== Tr\xECnh \u0111\u1ED9 h\u1ECDc v\u1EA5n ===== -->
    <div class="card mb-3">
      <div class="card-header bg-light py-2 d-flex justify-content-between align-items-center">
        <strong><i class="bx bx-book-open me-1"></i>{{ 'qi.section.education' | translate:'Tr\xECnh \u0111\u1ED9 h\u1ECDc v\u1EA5n' }}</strong>
        <button nz-button nzType="primary" nzSize="small" (click)="openEducModal(null)">
          <i class="bx bx-plus me-1"></i>{{ 'epi.btn.addNew' | translate:'Th\xEAm m\u1EDBi' }}
        </button>
      </div>
      <div class="card-body p-0">
        <nz-alert *ngIf="educError()" nzType="error" [nzMessage]="educError() ?? ''" class="m-2"></nz-alert>
        <nz-table [nzData]="educList()" [nzLoading]="educLoading()" [nzShowPagination]="false" nzSize="small" #qiEducTable>
          <thead>
            <tr>
              <th>{{ 'qi.field.educLevel' | translate:'Tr\xECnh \u0111\u1ED9 h\u1ECDc v\u1EA5n' }}</th>
              <th style="width:120px;">{{ 'qi.field.startDate' | translate:'Ng\xE0y nh\u1EADp h\u1ECDc' }}</th>
              <th style="width:120px;">{{ 'qi.field.endDate' | translate:'Ng\xE0y t\u1ED1t nghi\u1EC7p' }}</th>
              <th>{{ 'qi.field.institution' | translate:'Tr\u01B0\u1EDDng t\u1ED1t nghi\u1EC7p' }}</th>
              <th>{{ 'qi.field.subject' | translate:'Chuy\xEAn ng\xE0nh' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="!educLoading() && qiEducTable.data.length === 0">
              <td colspan="5" class="text-center text-muted">{{ 'epi.msg.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
            </tr>
            <tr *ngFor="let row of qiEducTable.data" class="qi-row-clickable" (click)="openEducModal(row)">
              <td><a href="javascript:void(0)" class="text-primary">{{ row.degreeName }}</a></td>
              <td>{{ row.startDate }}</td>
              <td>{{ row.endDate }}</td>
              <td>{{ row.institutionName }}</td>
              <td>{{ row.subject }}</td>
            </tr>
          </tbody>
        </nz-table>
      </div>
    </div>

    <!-- ===== Th\xF4ng tin ch\u1EE9ng ch\u1EC9 ===== -->
    <div class="card mb-3">
      <div class="card-header bg-light py-2 d-flex justify-content-between align-items-center">
        <strong><i class="bx bx-id-card me-1"></i>{{ 'qi.section.qualification' | translate:'Th\xF4ng tin ch\u1EE9ng ch\u1EC9' }}</strong>
        <button nz-button nzType="primary" nzSize="small" (click)="openQualModal(null)">
          <i class="bx bx-plus me-1"></i>{{ 'epi.btn.addNew' | translate:'Th\xEAm m\u1EDBi' }}
        </button>
      </div>
      <div class="card-body p-0">
        <nz-alert *ngIf="qualError()" nzType="error" [nzMessage]="qualError() ?? ''" class="m-2"></nz-alert>
        <nz-table [nzData]="qualList()" [nzLoading]="qualLoading()" [nzShowPagination]="false" nzSize="small" #qiQualTable>
          <thead>
            <tr>
              <th>{{ 'qi.field.qualName' | translate:'Ch\u1EE9ng ch\u1EC9' }}</th>
              <th>{{ 'qi.field.qualLevel' | translate:'C\u1EA5p ch\u1EE9ng ch\u1EC9' }}</th>
              <th style="width:110px;">{{ 'qi.field.dateObtained' | translate:'Ng\xE0y c\u1EA5p' }}</th>
              <th style="width:110px;">{{ 'qi.field.validityDate' | translate:'Ng\xE0y h\u1EBFt h\u1EA1n' }}</th>
              <th>{{ 'qi.field.qualCardNo' | translate:'M\xE3 ch\u1EE9ng ch\u1EC9' }}</th>
              <th>{{ 'qi.field.qualInstitute' | translate:'N\u01A1i c\u1EA5p' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="!qualLoading() && qiQualTable.data.length === 0">
              <td colspan="6" class="text-center text-muted">{{ 'epi.msg.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
            </tr>
            <tr *ngFor="let row of qiQualTable.data" class="qi-row-clickable" (click)="openQualModal(row)">
              <td><a href="javascript:void(0)" class="text-primary">{{ row.qualName }}</a></td>
              <td>{{ row.qualLevel }}</td>
              <td>{{ formatDisplayDate(row.dateObtained) }}</td>
              <td>{{ formatDisplayDate(row.validityDate) }}</td>
              <td>{{ row.qualCardNo }}</td>
              <td>{{ row.qualInstitute }}</td>
            </tr>
          </tbody>
        </nz-table>
      </div>
    </div>

    <!-- ===== Th\xF4ng tin khen th\u01B0\u1EDFng (ch\u1EC9 \u0111\u1ECDc) ===== -->
    <div class="card mb-3">
      <div class="card-header bg-light py-2">
        <strong><i class="bx bx-trophy me-1"></i>{{ 'qi.section.reward' | translate:'Th\xF4ng tin khen th\u01B0\u1EDFng' }}</strong>
      </div>
      <div class="card-body p-0">
        <nz-alert *ngIf="rewardError()" nzType="error" [nzMessage]="rewardError() ?? ''" class="m-2"></nz-alert>
        <nz-table [nzData]="rewardList()" [nzLoading]="rewardLoading()" [nzShowPagination]="false" nzSize="small" #qiRewardTable>
          <thead>
            <tr>
              <th>{{ 'qi.field.rewardType' | translate:'Khen th\u01B0\u1EDFng' }}</th>
              <th style="width:120px;">{{ 'qi.field.rewardDate' | translate:'Ng\xE0y khen th\u01B0\u1EDFng' }}</th>
              <th>{{ 'qi.field.rewardCnpy' | translate:'\u0110\u01A1n v\u1ECB trao th\u01B0\u1EDFng' }}</th>
              <th>{{ 'qi.field.rewardAmount' | translate:'Ti\u1EC1n th\u01B0\u1EDFng' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="!rewardLoading() && qiRewardTable.data.length === 0">
              <td colspan="4" class="text-center text-muted">{{ 'epi.msg.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
            </tr>
            <tr *ngFor="let row of qiRewardTable.data">
              <td>{{ row.rewardType }}</td>
              <td>{{ formatDisplayDate(row.rewardDate) }}</td>
              <td>{{ row.rewardCnpy }}</td>
              <td>{{ row.reward }}</td>
            </tr>
          </tbody>
        </nz-table>
      </div>
    </div>

  </div>
</div>

<!-- ===== Modal: Tr\xECnh \u0111\u1ED9 h\u1ECDc v\u1EA5n ===== -->
<nz-modal [nzVisible]="educModalVisible()" [nzTitle]="educModalTitle()" nzWidth="800px"
          (nzOnCancel)="closeEducModal()" (nzOnOk)="saveEduc()" [nzOkLoading]="educSaving()"
          [nzOkText]="'epi.btn.submitRequest' | translate:'G\u1EEDi y\xEAu c\u1EA7u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <div class="row g-2">
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'qi.field.educLevel' | translate:'Tr\xECnh \u0111\u1ED9 h\u1ECDc v\u1EA5n' }} <span class="text-danger">*</span></label>
        <nz-select class="w-100" [(ngModel)]="educForm.degreeCode" nzAllowClear [nzPlaceHolder]="'epi.select.choose' | translate:'-- Ch\u1ECDn --'">
          <nz-option *ngFor="let c of degreeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'qi.field.institution' | translate:'Tr\u01B0\u1EDDng t\u1ED1t nghi\u1EC7p' }}</label>
        <input nz-input [(ngModel)]="educForm.institutionName">
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'qi.field.startMonth' | translate:'Ng\xE0y nh\u1EADp h\u1ECDc (MM/YYYY)' }}</label>
        <input nz-input [(ngModel)]="educForm.startDate" [placeholder]="'qi.placeholder.mmyyyy' | translate:'VD: 09/2015'">
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'qi.field.endMonth' | translate:'Ng\xE0y t\u1ED1t nghi\u1EC7p (MM/YYYY)' }}</label>
        <input nz-input [(ngModel)]="educForm.endDate" [placeholder]="'qi.placeholder.mmyyyy' | translate:'VD: 06/2019'">
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'qi.field.subject' | translate:'Chuy\xEAn ng\xE0nh' }}</label>
        <input nz-input [(ngModel)]="educForm.subject">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'qi.field.academicTitle' | translate:'H\u1ECDc v\u1ECB' }}</label>
        <input nz-input [(ngModel)]="educForm.degreesCode">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'qi.field.degreeNum' | translate:'S\u1ED1 b\u1EB1ng c\u1EA5p' }}</label>
        <input nz-input [(ngModel)]="educForm.eduDegNum">
      </div>
      <div class="col-12">
        <label class="form-label fw-semibold">{{ 'epi.field.remark' | translate:'Ghi ch\xFA' }}</label>
        <textarea nz-input [(ngModel)]="educForm.remark" rows="2"></textarea>
      </div>
      <div class="col-12 mt-2">
        <nz-alert nzType="info" [nzMessage]="'epi.msg.applyNote' | translate:'Y\xEAu c\u1EA7u s\u1EBD \u0111\u01B0\u1EE3c g\u1EEDi \u0111\u1EBFn ng\u01B0\u1EDDi qu\u1EA3n l\xFD \u0111\u1EC3 x\xE9t duy\u1EC7t.'" class="mb-2"></nz-alert>
        <label class="form-label fw-semibold">{{ 'epi.field.attachFiles' | translate:'File \u0111\xEDnh k\xE8m' }}</label>
        <input #educFileInput type="file" class="form-control form-control-sm" multiple
               accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg" (change)="onEducFilesChange($event)">
        <div class="form-text">{{ 'epi.msg.uploadHint' | translate:'H\u1ED7 tr\u1EE3: PDF, Word, Excel, h\xECnh \u1EA3nh.' }}</div>
      </div>
    </div>
  </ng-container>
</nz-modal>

<!-- ===== Modal: Ch\u1EE9ng ch\u1EC9 ===== -->
<nz-modal [nzVisible]="qualModalVisible()" [nzTitle]="qualModalTitle()" nzWidth="800px"
          (nzOnCancel)="closeQualModal()" (nzOnOk)="saveQual()" [nzOkLoading]="qualSaving()"
          [nzOkText]="'epi.btn.submitRequest' | translate:'G\u1EEDi y\xEAu c\u1EA7u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <div class="row g-2">
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'qi.field.qualName' | translate:'T\xEAn ch\u1EE9ng ch\u1EC9' }} <span class="text-danger">*</span></label>
        <input nz-input [(ngModel)]="qualForm.qualName">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'qi.field.qualLevel' | translate:'C\u1EA5p ch\u1EE9ng ch\u1EC9' }}</label>
        <input nz-input [(ngModel)]="qualForm.qualLevel">
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'qi.field.dateObtained' | translate:'Ng\xE0y c\u1EA5p' }}</label>
        <nz-date-picker class="w-100" [(ngModel)]="qualForm.dateObtained" nzFormat="dd/MM/yyyy"></nz-date-picker>
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'qi.field.validityDate' | translate:'Ng\xE0y h\u1EBFt h\u1EA1n' }}</label>
        <nz-date-picker class="w-100" [(ngModel)]="qualForm.validityDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'qi.field.qualCardNo' | translate:'M\xE3 ch\u1EE9ng ch\u1EC9' }}</label>
        <input nz-input [(ngModel)]="qualForm.qualCardNo">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'qi.field.qualInstitute' | translate:'N\u01A1i c\u1EA5p' }}</label>
        <input nz-input [(ngModel)]="qualForm.qualInstitute">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'qi.field.qualGrade' | translate:'X\u1EBFp lo\u1EA1i' }}</label>
        <input nz-input [(ngModel)]="qualForm.qualGrade">
      </div>
      <div class="col-12">
        <label class="form-label fw-semibold">{{ 'epi.field.remark' | translate:'Ghi ch\xFA' }}</label>
        <textarea nz-input [(ngModel)]="qualForm.qualRemark" rows="2"></textarea>
      </div>
      <div class="col-12 mt-2">
        <nz-alert nzType="info" [nzMessage]="'epi.msg.applyNote' | translate:'Y\xEAu c\u1EA7u s\u1EBD \u0111\u01B0\u1EE3c g\u1EEDi \u0111\u1EBFn ng\u01B0\u1EDDi qu\u1EA3n l\xFD \u0111\u1EC3 x\xE9t duy\u1EC7t.'" class="mb-2"></nz-alert>
        <label class="form-label fw-semibold">{{ 'epi.field.attachFiles' | translate:'File \u0111\xEDnh k\xE8m' }}</label>
        <input #qualFileInput type="file" class="form-control form-control-sm" multiple
               accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg" (change)="onQualFilesChange($event)">
        <div class="form-text">{{ 'epi.msg.uploadHint' | translate:'H\u1ED7 tr\u1EE3: PDF, Word, Excel, h\xECnh \u1EA3nh.' }}</div>
      </div>
    </div>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/qualification-info/qualification-info.component.css */\n.qi-row-clickable {\n  cursor: pointer;\n}\n.qi-row-clickable:hover {\n  background: #fafafa;\n}\n/*# sourceMappingURL=qualification-info.component.css.map */\n"] }]
  }], () => [{ type: QualificationInfoService }, { type: I18nService }, { type: NzMessageService }], { educFileInputRef: [{
    type: ViewChild,
    args: ["educFileInput"]
  }], qualFileInputRef: [{
    type: ViewChild,
    args: ["qualFileInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QualificationInfoComponent, { className: "QualificationInfoComponent", filePath: "src/app/qualification-info/qualification-info.component.ts", lineNumber: 102 });
})();
export {
  QualificationInfoComponent
};
//# debugId=0d91f8a3-06a5-50b7-9eaf-9e5a9d7ad635
//# sourceMappingURL=chunk-2NTYIKPH.js.map
