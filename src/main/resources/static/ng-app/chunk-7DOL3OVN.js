import {
  NzMessageService
} from "./chunk-XWW7CXU6.js";
import {
  NzModalComponent,
  NzModalContentDirective,
  NzModalModule
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
import "./chunk-2QLZSMGV.js";
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

// src/app/work-info/work-info.service.ts
var API_BASE = "/ess/empinfo/api/workInfo";
var WorkInfoService = class _WorkInfoService {
  constructor(http) {
    this.http = http;
  }
  http;
  getBasicInfo() {
    return this.http.get("/ess/empinfo/api/personalInfo/myInfo", { withCredentials: true });
  }
  getInsideExperience() {
    return this.http.get(`${API_BASE}/myInsideExperience`, { withCredentials: true });
  }
  getWorkExperience() {
    return this.http.get(`${API_BASE}/myWorkExperience`, { withCredentials: true });
  }
  saveWorkExperienceApply(payload, files) {
    const fd = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      if (value !== void 0 && value !== null && value !== "")
        fd.append(key, String(value));
    });
    files.forEach((file) => fd.append("attachFiles", file));
    return this.http.post(`${API_BASE}/saveWorkExperienceApply`, fd, { withCredentials: true });
  }
  static \u0275fac = function WorkInfoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkInfoService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WorkInfoService, factory: _WorkInfoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkInfoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/work-info/work-info.component.ts
var _c0 = ["workExpFileInput"];
function WorkInfoComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 9)(2, "table", 23)(3, "colgroup");
    \u0275\u0275element(4, "col", 24)(5, "col", 25)(6, "col", 24)(7, "col", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "tbody")(9, "tr")(10, "th", 26);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 26);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "tr")(21, "th", 26);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 26);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "tr")(32, "th", 26);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "td");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th", 26);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "td");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "tr")(43, "th", 26);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "td");
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th", 26);
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
function WorkInfoComponent_nz_alert_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 27);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.insideError() ?? "");
  }
}
function WorkInfoComponent_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 28);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "epi.msg.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function WorkInfoComponent_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "td");
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.startDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.transCode);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r3.deptName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.mainBusiness || row_r3.postGrade);
  }
}
function WorkInfoComponent_nz_alert_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 27);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.workExpError() ?? "");
  }
}
function WorkInfoComponent_tr_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "epi.msg.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function WorkInfoComponent_tr_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 30);
    \u0275\u0275listener("click", function WorkInfoComponent_tr_63_Template_tr_click_0_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openWorkExpModal(row_r5));
    });
    \u0275\u0275elementStart(1, "td")(2, "a", 31);
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
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r5.cpnyName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.startMonth || row_r5.startDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.endMonth || row_r5.endDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.resignReason);
  }
}
function WorkInfoComponent_ng_container_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 32)(2, "div", 33)(3, "label", 34);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span", 35);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function WorkInfoComponent_ng_container_67_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.workExpForm.cpnyName, $event) || (ctx_r1.workExpForm.cpnyName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 33)(10, "label", 34);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function WorkInfoComponent_ng_container_67_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.workExpForm.deptName, $event) || (ctx_r1.workExpForm.deptName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 37)(15, "label", 34);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function WorkInfoComponent_ng_container_67_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.workExpForm.startMonth, $event) || (ctx_r1.workExpForm.startMonth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 37)(20, "label", 34);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function WorkInfoComponent_ng_container_67_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.workExpForm.endMonth, $event) || (ctx_r1.workExpForm.endMonth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 37)(25, "label", 34);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function WorkInfoComponent_ng_container_67_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.workExpForm.position, $event) || (ctx_r1.workExpForm.position = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 33)(30, "label", 34);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function WorkInfoComponent_ng_container_67_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.workExpForm.resignReason, $event) || (ctx_r1.workExpForm.resignReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 33)(35, "label", 34);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function WorkInfoComponent_ng_container_67_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.workExpForm.witness, $event) || (ctx_r1.workExpForm.witness = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 4)(40, "label", 34);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "textarea", 40);
    \u0275\u0275twoWayListener("ngModelChange", function WorkInfoComponent_ng_container_67_Template_textarea_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.workExpForm.remark, $event) || (ctx_r1.workExpForm.remark = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 41);
    \u0275\u0275element(45, "nz-alert", 42);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementStart(47, "label", 34);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "input", 43, 2);
    \u0275\u0275listener("change", function WorkInfoComponent_ng_container_67_Template_input_change_50_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onWorkExpFilesChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 44);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 19, "epi.field.cpnyName", "T\xEAn c\xF4ng ty"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.workExpForm.cpnyName);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 22, "epi.field.department", "Ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.workExpForm.deptName);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 25, "epi.field.startMonth", "Ng\xE0y v\xE0o l\xE0m (MM/YYYY)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.workExpForm.startMonth);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 28, "epi.field.endMonth", "Ng\xE0y th\xF4i vi\u1EC7c (MM/YYYY)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.workExpForm.endMonth);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 31, "epi.field.position", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.workExpForm.position);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 34, "epi.field.resignReason", "L\xFD do ngh\u1EC9 vi\u1EC7c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.workExpForm.resignReason);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 37, "epi.field.witness", "Ng\u01B0\u1EDDi l\xE0m ch\u1EE9ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.workExpForm.witness);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 40, "epi.field.remark", "Ghi ch\xFA"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.workExpForm.remark);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("nzMessage", \u0275\u0275pipeBind2(46, 43, "epi.msg.applyNote", "Y\xEAu c\u1EA7u s\u1EBD \u0111\u01B0\u1EE3c g\u1EEDi \u0111\u1EBFn ng\u01B0\u1EDDi qu\u1EA3n l\xFD \u0111\u1EC3 x\xE9t duy\u1EC7t, kh\xF4ng c\u1EADp nh\u1EADt tr\u1EF1c ti\u1EBFp h\u1ED3 s\u01A1."));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 46, "epi.field.attachFiles", "File \u0111\xEDnh k\xE8m"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 49, "epi.msg.uploadHint", "H\u1ED7 tr\u1EE3: PDF, Word, Excel, h\xECnh \u1EA3nh. C\xF3 th\u1EC3 ch\u1ECDn nhi\u1EC1u file."));
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
  "epi.section.hrDecision",
  "epi.section.workExp",
  "epi.field.period",
  "epi.field.decision",
  "epi.field.reason",
  "epi.field.department",
  "epi.field.work",
  "epi.field.cpnyName",
  "epi.field.startDate",
  "epi.field.endDate",
  "epi.field.startMonth",
  "epi.field.endMonth",
  "epi.field.position",
  "epi.field.resignReason",
  "epi.field.witness",
  "epi.field.remark",
  "epi.field.attachFiles",
  "epi.btn.addNew",
  "epi.btn.submitRequest",
  "epi.modal.workExp",
  "epi.modal.addWorkExp",
  "epi.modal.editWorkExp",
  "epi.msg.noData",
  "epi.msg.loadError.workInfo",
  "epi.msg.loadError.workExp",
  "epi.msg.validate.cpnyName",
  "epi.msg.applyNote",
  "epi.msg.applySuccess",
  "epi.msg.saveError.workExp",
  "epi.msg.systemError",
  "epi.msg.uploadHint",
  "common.close",
  "common.loadFail"
];
var EMPTY_WORK_EXP_FORM = {
  workExpNo: null,
  cpnyName: "",
  deptName: "",
  startMonth: "",
  endMonth: "",
  position: "",
  resignReason: "",
  witness: "",
  remark: ""
};
var WorkInfoComponent = class _WorkInfoComponent {
  constructor(api, i18n, message) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
  }
  api;
  i18n;
  message;
  workExpFileInputRef;
  basicInfo = signal(
    null,
    ...ngDevMode ? [{ debugName: "basicInfo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  insideList = signal(
    [],
    ...ngDevMode ? [{ debugName: "insideList" }] : (
      /* istanbul ignore next */
      []
    )
  );
  insideLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "insideLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  insideError = signal(
    null,
    ...ngDevMode ? [{ debugName: "insideError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  workExpList = signal(
    [],
    ...ngDevMode ? [{ debugName: "workExpList" }] : (
      /* istanbul ignore next */
      []
    )
  );
  workExpLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "workExpLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  workExpError = signal(
    null,
    ...ngDevMode ? [{ debugName: "workExpError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  workExpModalVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "workExpModalVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  workExpSaving = signal(
    false,
    ...ngDevMode ? [{ debugName: "workExpSaving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  workExpIsNew = signal(
    true,
    ...ngDevMode ? [{ debugName: "workExpIsNew" }] : (
      /* istanbul ignore next */
      []
    )
  );
  workExpModalTitle = computed(
    () => this.workExpIsNew() ? this.i18n.t("epi.modal.addWorkExp", "Th\xEAm m\u1EDBi kinh nghi\u1EC7m") : this.i18n.t("epi.modal.editWorkExp", "C\u1EADp nh\u1EADt kinh nghi\u1EC7m"),
    ...ngDevMode ? [{ debugName: "workExpModalTitle" }] : (
      /* istanbul ignore next */
      []
    )
  );
  workExpForm = __spreadValues({}, EMPTY_WORK_EXP_FORM);
  workExpFiles = [];
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadBasicInfo();
    this.loadInsideExperience();
    this.loadWorkExperience();
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
  loadInsideExperience() {
    this.insideLoading.set(true);
    this.insideError.set(null);
    this.api.getInsideExperience().subscribe({
      next: (list) => {
        this.insideList.set(list ?? []);
        this.insideLoading.set(false);
      },
      error: () => {
        this.insideError.set(this.i18n.t("epi.msg.loadError.workInfo", "L\u1ED7i t\u1EA3i d\u1EEF li\u1EC7u c\xF4ng vi\u1EC7c"));
        this.insideList.set([]);
        this.insideLoading.set(false);
      }
    });
  }
  loadWorkExperience() {
    this.workExpLoading.set(true);
    this.workExpError.set(null);
    this.api.getWorkExperience().subscribe({
      next: (list) => {
        this.workExpList.set(list ?? []);
        this.workExpLoading.set(false);
      },
      error: () => {
        this.workExpError.set(this.i18n.t("epi.msg.loadError.workExp", "L\u1ED7i t\u1EA3i d\u1EEF li\u1EC7u kinh nghi\u1EC7m"));
        this.workExpList.set([]);
        this.workExpLoading.set(false);
      }
    });
  }
  openWorkExpModal(row) {
    this.workExpIsNew.set(!row);
    this.workExpForm = row ? {
      workExpNo: row.workExpNo,
      cpnyName: row.cpnyName || "",
      deptName: row.deptName || "",
      startMonth: row.startMonth || row.startDate || "",
      endMonth: row.endMonth || row.endDate || "",
      position: row.position || "",
      resignReason: row.resignReason || "",
      witness: row.witness || "",
      remark: row.remark || ""
    } : __spreadValues({}, EMPTY_WORK_EXP_FORM);
    this.workExpFiles = [];
    if (this.workExpFileInputRef)
      this.workExpFileInputRef.nativeElement.value = "";
    this.workExpModalVisible.set(true);
  }
  closeWorkExpModal() {
    this.workExpModalVisible.set(false);
  }
  onWorkExpFilesChange(event) {
    const input = event.target;
    this.workExpFiles = input.files ? Array.from(input.files) : [];
  }
  saveWorkExp() {
    const f = this.workExpForm;
    if (!f.cpnyName) {
      this.message.error(this.i18n.t("epi.msg.validate.cpnyName", "Vui l\xF2ng nh\u1EADp T\xEAn c\xF4ng ty!"));
      return;
    }
    const payload = {
      cpnyName: f.cpnyName,
      deptName: f.deptName,
      startMonth: f.startMonth,
      endMonth: f.endMonth,
      position: f.position,
      resignReason: f.resignReason,
      witness: f.witness,
      remark: f.remark,
      updateWorkExperNo: f.workExpNo ?? void 0
    };
    this.workExpSaving.set(true);
    this.api.saveWorkExperienceApply(payload, this.workExpFiles).subscribe({
      next: () => {
        this.workExpSaving.set(false);
        this.workExpModalVisible.set(false);
        this.message.success(this.i18n.t("epi.msg.applySuccess", "G\u1EEDi y\xEAu c\u1EA7u th\xE0nh c\xF4ng! Ch\u1EDD ng\u01B0\u1EDDi qu\u1EA3n l\xFD x\xE9t duy\u1EC7t."));
        this.loadWorkExperience();
      },
      error: (err) => {
        this.workExpSaving.set(false);
        const msg = err?.error?.error || this.i18n.t("epi.msg.saveError.workExp", "L\u1ED7i khi g\u1EEDi y\xEAu c\u1EA7u kinh nghi\u1EC7m l\xE0m vi\u1EC7c!");
        this.message.error(msg);
      }
    });
  }
  static \u0275fac = function WorkInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WorkInfoComponent)(\u0275\u0275directiveInject(WorkInfoService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WorkInfoComponent, selectors: [["app-work-info"]], viewQuery: function WorkInfoComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.workExpFileInputRef = _t.first);
    }
  }, decls: 68, vars: 72, consts: [["wiInsideTable", ""], ["wiWorkExpTable", ""], ["workExpFileInput", ""], [1, "row"], [1, "col-12"], ["class", "card mb-3", 4, "ngIf"], [1, "card", "mb-3"], [1, "card-header", "bg-light", "py-2"], [1, "bx", "bx-transfer", "me-1"], [1, "card-body", "p-0"], ["nzType", "error", "class", "m-2", 3, "nzMessage", 4, "ngIf"], ["nzSize", "small", 3, "nzData", "nzLoading", "nzShowPagination"], [2, "width", "140px"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "card-header", "bg-light", "py-2", "d-flex", "justify-content-between", "align-items-center"], [1, "bx", "bx-buildings", "me-1"], ["nz-button", "", "nzType", "primary", "nzSize", "small", 3, "click"], [1, "bx", "bx-plus", "me-1"], [2, "width", "120px"], ["class", "wi-row-clickable", 3, "click", 4, "ngFor", "ngForOf"], ["nzWidth", "800px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [1, "table", "table-bordered", "table-sm", "align-middle", "mb-0", 2, "table-layout", "fixed"], [2, "width", "15%"], [2, "width", "35%"], [1, "table-light", "text-center"], ["nzType", "error", 1, "m-2", 3, "nzMessage"], ["colspan", "5", 1, "text-center", "text-muted"], ["colspan", "4", 1, "text-center", "text-muted"], [1, "wi-row-clickable", 3, "click"], ["href", "javascript:void(0)", 1, "text-primary"], [1, "row", "g-2"], [1, "col-md-6"], [1, "form-label", "fw-semibold"], [1, "text-danger"], ["nz-input", "", 3, "ngModelChange", "ngModel"], [1, "col-md-4"], ["nz-input", "", "placeholder", "VD: 01/2020", 3, "ngModelChange", "ngModel"], ["nz-input", "", "placeholder", "VD: 12/2022", 3, "ngModelChange", "ngModel"], ["nz-input", "", "rows", "2", 3, "ngModelChange", "ngModel"], [1, "col-12", "mt-2"], ["nzType", "info", 1, "mb-2", 3, "nzMessage"], ["type", "file", "multiple", "", "accept", ".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg", 1, "form-control", "form-control-sm", 3, "change"], [1, "form-text"]], template: function WorkInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
      \u0275\u0275template(2, WorkInfoComponent_div_2_Template, 53, 40, "div", 5);
      \u0275\u0275elementStart(3, "div", 6)(4, "div", 7)(5, "strong");
      \u0275\u0275element(6, "i", 8);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 9);
      \u0275\u0275template(10, WorkInfoComponent_nz_alert_10_Template, 1, 1, "nz-alert", 10);
      \u0275\u0275elementStart(11, "nz-table", 11, 0)(13, "thead")(14, "tr")(15, "th", 12);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "th");
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "th");
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
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "tbody");
      \u0275\u0275template(31, WorkInfoComponent_tr_31_Template, 4, 4, "tr", 13)(32, WorkInfoComponent_tr_32_Template, 10, 4, "tr", 14);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(33, "div", 6)(34, "div", 15)(35, "strong");
      \u0275\u0275element(36, "i", 16);
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "button", 17);
      \u0275\u0275listener("click", function WorkInfoComponent_Template_button_click_39_listener() {
        return ctx.openWorkExpModal(null);
      });
      \u0275\u0275element(40, "i", 18);
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 9);
      \u0275\u0275template(44, WorkInfoComponent_nz_alert_44_Template, 1, 1, "nz-alert", 10);
      \u0275\u0275elementStart(45, "nz-table", 11, 1)(47, "thead")(48, "tr")(49, "th");
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "th", 19);
      \u0275\u0275text(53);
      \u0275\u0275pipe(54, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "th", 19);
      \u0275\u0275text(56);
      \u0275\u0275pipe(57, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "th");
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(61, "tbody");
      \u0275\u0275template(62, WorkInfoComponent_tr_62_Template, 4, 4, "tr", 13)(63, WorkInfoComponent_tr_63_Template, 10, 4, "tr", 20);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(64, "nz-modal", 21);
      \u0275\u0275pipe(65, "translate");
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275listener("nzOnCancel", function WorkInfoComponent_Template_nz_modal_nzOnCancel_64_listener() {
        return ctx.closeWorkExpModal();
      })("nzOnOk", function WorkInfoComponent_Template_nz_modal_nzOnOk_64_listener() {
        return ctx.saveWorkExp();
      });
      \u0275\u0275template(67, WorkInfoComponent_ng_container_67_Template, 55, 52, "ng-container", 22);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const wiInsideTable_r7 = \u0275\u0275reference(12);
      const wiWorkExpTable_r8 = \u0275\u0275reference(46);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.basicInfo());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 30, "epi.section.hrDecision", "Quy\u1EBFt \u0111\u1ECBnh nh\xE2n s\u1EF1"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.insideError());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.insideList())("nzLoading", ctx.insideLoading())("nzShowPagination", false);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 33, "epi.field.period", "Th\u1EDDi gian"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 36, "epi.field.decision", "Quy\u1EBFt \u0111\u1ECBnh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 39, "epi.field.reason", "L\xFD do"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 42, "epi.field.department", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 45, "epi.field.work", "C\xF4ng vi\u1EC7c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.insideLoading() && wiInsideTable_r7.data.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", wiInsideTable_r7.data);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(38, 48, "epi.section.workExp", "Kinh nghi\u1EC7m"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(42, 51, "epi.btn.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.workExpError());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.workExpList())("nzLoading", ctx.workExpLoading())("nzShowPagination", false);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 54, "epi.field.cpnyName", "T\xEAn c\xF4ng ty"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 57, "epi.field.startDate", "Ng\xE0y v\xE0o l\xE0m"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 60, "epi.field.endDate", "Ng\xE0y th\xF4i vi\u1EC7c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(60, 63, "epi.field.reason", "L\xFD do"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.workExpLoading() && wiWorkExpTable_r8.data.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", wiWorkExpTable_r8.data);
      \u0275\u0275advance();
      \u0275\u0275property("nzVisible", ctx.workExpModalVisible())("nzTitle", ctx.workExpModalTitle())("nzOkLoading", ctx.workExpSaving())("nzOkText", \u0275\u0275pipeBind2(65, 66, "epi.btn.submitRequest", "G\u1EEDi y\xEAu c\u1EA7u"))("nzCancelText", \u0275\u0275pipeBind2(66, 69, "common.close", "\u0110\xF3ng"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzInputModule, NzInputDirective, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\n.wi-row-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.wi-row-clickable[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n/*# sourceMappingURL=work-info.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorkInfoComponent, [{
    type: Component,
    args: [{ selector: "app-work-info", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzInputModule,
      NzButtonModule,
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

    <!-- ===== Quy\u1EBFt \u0111\u1ECBnh nh\xE2n s\u1EF1 ===== -->
    <div class="card mb-3">
      <div class="card-header bg-light py-2">
        <strong><i class="bx bx-transfer me-1"></i>{{ 'epi.section.hrDecision' | translate:'Quy\u1EBFt \u0111\u1ECBnh nh\xE2n s\u1EF1' }}</strong>
      </div>
      <div class="card-body p-0">
        <nz-alert *ngIf="insideError()" nzType="error" [nzMessage]="insideError() ?? ''" class="m-2"></nz-alert>
        <nz-table [nzData]="insideList()" [nzLoading]="insideLoading()" [nzShowPagination]="false" nzSize="small" #wiInsideTable>
          <thead>
            <tr>
              <th style="width:140px;">{{ 'epi.field.period' | translate:'Th\u1EDDi gian' }}</th>
              <th>{{ 'epi.field.decision' | translate:'Quy\u1EBFt \u0111\u1ECBnh' }}</th>
              <th>{{ 'epi.field.reason' | translate:'L\xFD do' }}</th>
              <th>{{ 'epi.field.department' | translate:'Ph\xF2ng ban' }}</th>
              <th>{{ 'epi.field.work' | translate:'C\xF4ng vi\u1EC7c' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="!insideLoading() && wiInsideTable.data.length === 0">
              <td colspan="5" class="text-center text-muted">{{ 'epi.msg.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
            </tr>
            <tr *ngFor="let row of wiInsideTable.data">
              <td>{{ row.startDate }}</td>
              <td>{{ row.transCode }}</td>
              <td></td>
              <td>{{ row.deptName }}</td>
              <td>{{ row.mainBusiness || row.postGrade }}</td>
            </tr>
          </tbody>
        </nz-table>
      </div>
    </div>

    <!-- ===== Kinh nghi\u1EC7m ===== -->
    <div class="card mb-3">
      <div class="card-header bg-light py-2 d-flex justify-content-between align-items-center">
        <strong><i class="bx bx-buildings me-1"></i>{{ 'epi.section.workExp' | translate:'Kinh nghi\u1EC7m' }}</strong>
        <button nz-button nzType="primary" nzSize="small" (click)="openWorkExpModal(null)">
          <i class="bx bx-plus me-1"></i>{{ 'epi.btn.addNew' | translate:'Th\xEAm m\u1EDBi' }}
        </button>
      </div>
      <div class="card-body p-0">
        <nz-alert *ngIf="workExpError()" nzType="error" [nzMessage]="workExpError() ?? ''" class="m-2"></nz-alert>
        <nz-table [nzData]="workExpList()" [nzLoading]="workExpLoading()" [nzShowPagination]="false" nzSize="small" #wiWorkExpTable>
          <thead>
            <tr>
              <th>{{ 'epi.field.cpnyName' | translate:'T\xEAn c\xF4ng ty' }}</th>
              <th style="width:120px;">{{ 'epi.field.startDate' | translate:'Ng\xE0y v\xE0o l\xE0m' }}</th>
              <th style="width:120px;">{{ 'epi.field.endDate' | translate:'Ng\xE0y th\xF4i vi\u1EC7c' }}</th>
              <th>{{ 'epi.field.reason' | translate:'L\xFD do' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="!workExpLoading() && wiWorkExpTable.data.length === 0">
              <td colspan="4" class="text-center text-muted">{{ 'epi.msg.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
            </tr>
            <tr *ngFor="let row of wiWorkExpTable.data" class="wi-row-clickable" (click)="openWorkExpModal(row)">
              <td><a href="javascript:void(0)" class="text-primary">{{ row.cpnyName }}</a></td>
              <td>{{ row.startMonth || row.startDate }}</td>
              <td>{{ row.endMonth || row.endDate }}</td>
              <td>{{ row.resignReason }}</td>
            </tr>
          </tbody>
        </nz-table>
      </div>
    </div>

  </div>
</div>

<!-- ===== Modal: Th\xEAm/S\u1EEDa Kinh nghi\u1EC7m ===== -->
<nz-modal [nzVisible]="workExpModalVisible()" [nzTitle]="workExpModalTitle()" nzWidth="800px"
          (nzOnCancel)="closeWorkExpModal()" (nzOnOk)="saveWorkExp()" [nzOkLoading]="workExpSaving()"
          [nzOkText]="'epi.btn.submitRequest' | translate:'G\u1EEDi y\xEAu c\u1EA7u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <div class="row g-2">
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'epi.field.cpnyName' | translate:'T\xEAn c\xF4ng ty' }} <span class="text-danger">*</span></label>
        <input nz-input [(ngModel)]="workExpForm.cpnyName">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'epi.field.department' | translate:'Ph\xF2ng ban' }}</label>
        <input nz-input [(ngModel)]="workExpForm.deptName">
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'epi.field.startMonth' | translate:'Ng\xE0y v\xE0o l\xE0m (MM/YYYY)' }}</label>
        <input nz-input [(ngModel)]="workExpForm.startMonth" placeholder="VD: 01/2020">
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'epi.field.endMonth' | translate:'Ng\xE0y th\xF4i vi\u1EC7c (MM/YYYY)' }}</label>
        <input nz-input [(ngModel)]="workExpForm.endMonth" placeholder="VD: 12/2022">
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'epi.field.position' | translate:'Ch\u1EE9c v\u1EE5' }}</label>
        <input nz-input [(ngModel)]="workExpForm.position">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'epi.field.resignReason' | translate:'L\xFD do ngh\u1EC9 vi\u1EC7c' }}</label>
        <input nz-input [(ngModel)]="workExpForm.resignReason">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'epi.field.witness' | translate:'Ng\u01B0\u1EDDi l\xE0m ch\u1EE9ng' }}</label>
        <input nz-input [(ngModel)]="workExpForm.witness">
      </div>
      <div class="col-12">
        <label class="form-label fw-semibold">{{ 'epi.field.remark' | translate:'Ghi ch\xFA' }}</label>
        <textarea nz-input [(ngModel)]="workExpForm.remark" rows="2"></textarea>
      </div>
      <div class="col-12 mt-2">
        <nz-alert nzType="info" [nzMessage]="'epi.msg.applyNote' | translate:'Y\xEAu c\u1EA7u s\u1EBD \u0111\u01B0\u1EE3c g\u1EEDi \u0111\u1EBFn ng\u01B0\u1EDDi qu\u1EA3n l\xFD \u0111\u1EC3 x\xE9t duy\u1EC7t, kh\xF4ng c\u1EADp nh\u1EADt tr\u1EF1c ti\u1EBFp h\u1ED3 s\u01A1.'" class="mb-2"></nz-alert>
        <label class="form-label fw-semibold">{{ 'epi.field.attachFiles' | translate:'File \u0111\xEDnh k\xE8m' }}</label>
        <input #workExpFileInput type="file" class="form-control form-control-sm" multiple
               accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg" (change)="onWorkExpFilesChange($event)">
        <div class="form-text">{{ 'epi.msg.uploadHint' | translate:'H\u1ED7 tr\u1EE3: PDF, Word, Excel, h\xECnh \u1EA3nh. C\xF3 th\u1EC3 ch\u1ECDn nhi\u1EC1u file.' }}</div>
      </div>
    </div>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/work-info/work-info.component.css */\n.wi-row-clickable {\n  cursor: pointer;\n}\n.wi-row-clickable:hover {\n  background: #fafafa;\n}\n/*# sourceMappingURL=work-info.component.css.map */\n"] }]
  }], () => [{ type: WorkInfoService }, { type: I18nService }, { type: NzMessageService }], { workExpFileInputRef: [{
    type: ViewChild,
    args: ["workExpFileInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WorkInfoComponent, { className: "WorkInfoComponent", filePath: "src/app/work-info/work-info.component.ts", lineNumber: 71 });
})();
export {
  WorkInfoComponent
};
//# debugId=6bc31c89-a005-555a-ba8a-2d2bb5397d5f
//# sourceMappingURL=chunk-7DOL3OVN.js.map
