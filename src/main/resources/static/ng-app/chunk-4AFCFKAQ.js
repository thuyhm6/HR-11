import {
  NzDescriptionsComponent,
  NzDescriptionsItemComponent,
  NzDescriptionsModule
} from "./chunk-Q45A6SWP.js";
import {
  utils,
  writeFileSync
} from "./chunk-6KSHLFTP.js";
import {
  NzMessageService
} from "./chunk-XWW7CXU6.js";
import {
  NzModalComponent,
  NzModalContentDirective,
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

// src/app/check-attendance-ex-for-batch/check-attendance-ex-for-batch.service.ts
var API_BASE = "/ess/infoApplyAttendance/api/checkAttendanceEx";
var CheckAttendanceExForBatchService = class _CheckAttendanceExForBatchService {
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
    return this.http.get(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
  }
  getDetail(applyNo, applyType) {
    let httpParams = new HttpParams().set("applyNo", applyNo);
    if (applyType)
      httpParams = httpParams.set("applyType", applyType);
    return this.http.get(`${API_BASE}/detail`, { params: httpParams, withCredentials: true });
  }
  getShiftOptions() {
    return this.http.get("/ar/attendanceSettings/api/shift", { withCredentials: true });
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
  static \u0275fac = function CheckAttendanceExForBatchService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CheckAttendanceExForBatchService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CheckAttendanceExForBatchService, factory: _CheckAttendanceExForBatchService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckAttendanceExForBatchService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/check-attendance-ex-for-batch/check-attendance-ex-for-batch.component.ts
var _c0 = () => ({ x: "1780px", y: "calc(100vh - 380px)" });
var _c1 = () => ({ "max-height": "75vh", "overflow-y": "auto" });
function CheckAttendanceExForBatchComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.deptTreeErrorMessage());
  }
}
function CheckAttendanceExForBatchComponent_nz_option_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 41);
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r3.codeNo)("nzLabel", c_r3.codeName);
  }
}
function CheckAttendanceExForBatchComponent_nz_option_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 41);
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    \u0275\u0275property("nzValue", s_r4.shiftNo)("nzLabel", s_r4.nameVi || s_r4.shiftName || "");
  }
}
function CheckAttendanceExForBatchComponent_nz_option_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 41);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const o_r5 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r5.value)("nzLabel", \u0275\u0275pipeBind2(1, 2, o_r5.labelKey, o_r5.fallback));
  }
}
function CheckAttendanceExForBatchComponent_nz_alert_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 42);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function CheckAttendanceExForBatchComponent_tr_110_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "a", 44);
    \u0275\u0275listener("click", function CheckAttendanceExForBatchComponent_tr_110_Template_a_click_6_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDetail(row_r7));
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
    \u0275\u0275elementStart(14, "td", 43);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 43);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 43);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 43);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "td", 43);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r8 + 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r7.empId || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r7.empId);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r7.localName || null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.localName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r7.deptName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r7.deptName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r7.postGradeName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r7.postGradeName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r7.postFamilyName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r7.postFamilyName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.shiftName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r7.itemNoName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r7.itemNoName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.arDateStr);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.fromDateTime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.toDateTime);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r7.remark || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r7.remark);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r7.createdName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r7.createdName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.createDate);
  }
}
function CheckAttendanceExForBatchComponent_ng_template_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r9 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r9, " ");
  }
}
function CheckAttendanceExForBatchComponent_ng_container_115_nz_alert_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 42);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzMessage", ctx_r1.detailErrorMessage() ?? "");
  }
}
function CheckAttendanceExForBatchComponent_ng_container_115_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 64);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "ck.msg.noApprovalData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u ph\xEA duy\u1EC7t"));
  }
}
function CheckAttendanceExForBatchComponent_ng_container_115_tr_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 43);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 43);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 43);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.approvalStt(item_r10, i_r11));
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
function CheckAttendanceExForBatchComponent_ng_container_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CheckAttendanceExForBatchComponent_ng_container_115_nz_alert_1_Template, 1, 1, "nz-alert", 24);
    \u0275\u0275elementStart(2, "div", 45)(3, "table", 46)(4, "tbody")(5, "tr")(6, "th", 47);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "tr")(12, "th", 48);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(17, "div", 49)(18, "nz-table", 50)(19, "thead")(20, "tr")(21, "th", 51);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th", 52);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th", 53);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "th");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "th", 54);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th", 55);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "tbody");
    \u0275\u0275template(43, CheckAttendanceExForBatchComponent_ng_container_115_tr_43_Template, 4, 4, "tr", 56)(44, CheckAttendanceExForBatchComponent_ng_container_115_tr_44_Template, 15, 7, "tr", 57);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(45, "h6", 58);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "nz-descriptions", 59)(49, "nz-descriptions-item", 60);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275text(51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "nz-descriptions-item", 60);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "nz-descriptions-item", 60);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275text(57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "nz-descriptions-item", 60);
    \u0275\u0275pipe(59, "translate");
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "h6", 58);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 61)(65, "table", 46)(66, "thead", 48)(67, "tr")(68, "th");
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "th", 62);
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "th", 62);
    \u0275\u0275text(75);
    \u0275\u0275pipe(76, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "th", 63);
    \u0275\u0275text(78);
    \u0275\u0275pipe(79, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "th");
    \u0275\u0275text(81);
    \u0275\u0275pipe(82, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(83, "tbody")(84, "tr")(85, "td", 43);
    \u0275\u0275text(86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "td", 43);
    \u0275\u0275text(88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "td", 43);
    \u0275\u0275text(90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "td", 43);
    \u0275\u0275text(92);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "td", 43);
    \u0275\u0275text(94);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.detailErrorMessage());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 38, "ck.modal.applyTitle", "Ti\xEAu \u0111\u1EC1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.buildApplyTitle(ctx_r1.detailLeaveInfo()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 41, "ck.modal.requester", "Ng\u01B0\u1EDDi xin ph\xE9p"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.buildRequesterInfo(ctx_r1.detailEmployeeInfo()));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzData", ctx_r1.detailApprovalList())("nzLoading", ctx_r1.detailLoading())("nzShowPagination", false);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 44, "ck.modal.stt", "STT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 47, "ck.modal.approvalSeq", "Tr\xECnh t\u1EF1 duy\u1EC7t"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 50, "ck.modal.approvalStatus", "Tr\u1EA1ng th\xE1i duy\u1EC7t"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 53, "common.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 56, "ck.modal.opinion", "\xDD ki\u1EBFn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(38, 59, "ck.modal.actionTime", "Th\u1EDDi gian th\u1EF1c hi\u1EC7n"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 62, "common.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.detailLoading() && ctx_r1.detailApprovalList().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.detailApprovalList());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(47, 65, "ck.modal.empInfoTitle", "Th\xF4ng tin nh\xE2n vi\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColumn", 2);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(50, 68, "ck.modal.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.detailEmployeeInfo()?.localName);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(53, 71, "ck.modal.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.detailEmployeeInfo()?.empId);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(56, 74, "ck.modal.empDept", "Ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.detailEmployeeInfo()?.deptName);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(59, 77, "ck.modal.empPost", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.detailEmployeeInfo()?.postGradeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(63, 80, "ck.modal.applyInfo", "Th\xF4ng tin xin ph\xE9p"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(70, 83, "ck.modal.leaveType", "Lo\u1EA1i ngh\u1EC9 ph\xE9p"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(73, 86, "ck.modal.leaveFrom", "Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(76, 89, "ck.modal.leaveTo", "Th\u1EDDi gian k\u1EBFt th\xFAc"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(79, 92, "ck.modal.duration", "Th\u1EDDi l\u01B0\u1EE3ng"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(82, 95, "ck.modal.remark", "L\xFD do"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailLeaveInfo()?.leaveTypeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.detailLeaveInfo()?.leaveFromTime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.detailLeaveInfo()?.leaveToTime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.detailLeaveInfo()?.applyLength);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.detailLeaveInfo()?.leaveReason);
  }
}
var I18N_KEYS = [
  "ck.label.keyword",
  "ck.placeholder.keyword",
  "ck.label.deptNo",
  "ck.placeholder.deptNo",
  "ck.label.fromDate",
  "ck.label.toDate",
  "ck.label.postFamily",
  "ck.label.shiftNo",
  "ck.label.itemNo",
  "ck.select.allOption",
  "ck.select.choose",
  "ck.itemNo.unauthorized",
  "ck.itemNo.leaveEarly",
  "ck.itemNo.lateComing",
  "ck.itemNo.forgotSwipe",
  "ck.btn.search",
  "ck.btn.clearFilter",
  "ck.btn.exportExcel",
  "ck.col.no",
  "ck.col.empId",
  "ck.col.localName",
  "ck.col.deptName",
  "ck.col.postGradeName",
  "ck.col.postFamilyName",
  "ck.col.shiftName",
  "ck.col.itemNoName",
  "ck.col.arDate",
  "ck.col.fromDateTime",
  "ck.col.toDateTime",
  "ck.col.remark",
  "ck.col.createdName",
  "ck.col.createDate",
  "ck.modal.title",
  "ck.modal.requester",
  "ck.modal.applyInfo",
  "ck.modal.applyTitle",
  "ck.modal.stt",
  "ck.modal.approvalSeq",
  "ck.modal.approvalStatus",
  "ck.modal.opinion",
  "ck.modal.actionTime",
  "ck.modal.empInfoTitle",
  "ck.modal.empName",
  "ck.modal.empId",
  "ck.modal.empDept",
  "ck.modal.empPost",
  "ck.modal.leaveType",
  "ck.modal.leaveFrom",
  "ck.modal.leaveTo",
  "ck.modal.duration",
  "ck.modal.remark",
  "ck.msg.loading",
  "ck.msg.noApprovalData",
  "ck.msg.noApplyNo",
  "ck.msg.loadDetailFailed",
  "ck.msg.loadApprovalFailed",
  "common.empName",
  "common.deptName",
  "common.loadFail",
  "common.totalRows",
  "mep.msg.loadDeptFailed"
];
var POST_FAMILY_PARENT_CODE = "14015812";
var ITEM_NO_OPTIONS = [
  { value: "141443", labelKey: "ck.itemNo.unauthorized", fallback: "Ngh\u1EC9 kh\xF4ng ph\xE9p" },
  { value: "141442", labelKey: "ck.itemNo.leaveEarly", fallback: "V\u1EC1 s\u1EDBm" },
  { value: "141441", labelKey: "ck.itemNo.lateComing", fallback: "\u0110\u1EBFn mu\u1ED9n" },
  { value: "14015448", labelKey: "ck.itemNo.forgotSwipe", fallback: "Qu\xEAn qu\u1EB9t th\u1EBB" }
];
var CheckAttendanceExForBatchComponent = class _CheckAttendanceExForBatchComponent {
  constructor(api, i18n, message) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
  }
  api;
  i18n;
  message;
  itemNoOptions = ITEM_NO_OPTIONS;
  pageSizeOptions = [25, 50, 100, 200, 500];
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
  shiftOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "shiftOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  keyword = "";
  deptNos = [];
  fromDate = null;
  toDate = null;
  postFamily = null;
  shiftNo = null;
  itemNo = null;
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
  detailLeaveInfo = signal(
    null,
    ...ngDevMode ? [{ debugName: "detailLeaveInfo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  detailEmployeeInfo = signal(
    null,
    ...ngDevMode ? [{ debugName: "detailEmployeeInfo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  detailApprovalList = signal(
    [],
    ...ngDevMode ? [{ debugName: "detailApprovalList" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** id -> danh sách id con trực tiếp - dùng để mở rộng lựa chọn cây phòng ban khi tra cứu (xem search()). */
  deptChildrenMap = /* @__PURE__ */ new Map();
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.initDefaultDateRange();
    this.loadDeptTree();
    this.api.getCodeList(POST_FAMILY_PARENT_CODE).subscribe((list) => this.postFamilyOptions.set(list ?? []));
    this.api.getShiftOptions().subscribe((list) => this.shiftOptions.set(list ?? []));
    this.search();
  }
  /** Mặc định Từ ngày = ngày 25 tháng trước, Đến ngày = ngày 24 tháng này (chu kỳ chấm công) - đúng
   *  ckInitDefaultDateRange() bản gốc. */
  initDefaultDateRange() {
    const now = /* @__PURE__ */ new Date();
    this.fromDate = new Date(now.getFullYear(), now.getMonth() - 1, 25);
    this.toDate = new Date(now.getFullYear(), now.getMonth(), 24);
  }
  search() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getList({
      keyword: this.keyword.trim(),
      deptNos: this.expandDeptSelection(this.deptNos).join(","),
      fromDate: this.formatYmdSlash(this.fromDate),
      toDate: this.formatYmdSlash(this.toDate),
      postFamily: this.postFamily ?? "",
      shiftNo: this.shiftNo ?? "",
      itemNo: this.itemNo ?? ""
    }).subscribe({
      next: (list) => {
        this.rows.set(list ?? []);
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
    this.postFamily = null;
    this.shiftNo = null;
    this.itemNo = null;
    this.initDefaultDateRange();
    this.search();
  }
  trackByRow = (_, row) => this.rowKey(row);
  rowKey(row) {
    if (row.applyNo)
      return String(row.applyNo);
    return [row.personId, row.arDateStr, row.empId, row.itemNo, row.shiftNo].join("|");
  }
  // ==================== Modal chi tiết phê duyệt (click tên nhân viên) ====================
  openDetail(row) {
    const t = (key, fallback) => this.i18n.t(key, fallback);
    if (!row.applyNo) {
      this.message.warning(t("ck.msg.noApplyNo", "Kh\xF4ng t\xECm th\u1EA5y s\u1ED1 \u0111\u01A1n \u0111\u1EC3 xem chi ti\u1EBFt"));
      return;
    }
    this.detailVisible.set(true);
    this.detailLoading.set(true);
    this.detailErrorMessage.set(null);
    this.detailLeaveInfo.set(null);
    this.detailEmployeeInfo.set(null);
    this.detailApprovalList.set([]);
    this.api.getDetail(row.applyNo, row.itemNo).subscribe({
      next: (res) => {
        this.detailLeaveInfo.set(res?.leaveInfo ?? null);
        this.detailEmployeeInfo.set(res?.employeeInfo ?? null);
        this.detailApprovalList.set(res?.approvalList ?? []);
        this.detailLoading.set(false);
      },
      error: () => {
        this.detailErrorMessage.set(t("ck.msg.loadDetailFailed", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i"));
        this.detailLoading.set(false);
      }
    });
  }
  closeDetail() {
    this.detailVisible.set(false);
  }
  /** Đúng atexBuildApplyTitle() bản gốc. */
  buildApplyTitle(info) {
    if (!info)
      return "";
    const { leaveTypeName = "", localName = "", leaveFromTime = "", leaveToTime = "" } = info;
    if (!leaveTypeName && !localName && !leaveFromTime && !leaveToTime)
      return "";
    return `${leaveTypeName}/Apply(${localName})[Date: ${leaveFromTime} ~ ${leaveToTime}]`;
  }
  /** Đúng dòng "Người xin phép" trong atexRenderData() bản gốc. */
  buildRequesterInfo(info) {
    if (!info)
      return "";
    return `${info.localName || ""}/${info.postGradeName || ""}/${info.deptName || ""}`;
  }
  /** Đúng cách hiển thị STT trong atexRenderApprovalRows() bản gốc: mức duyệt 100 = HR. */
  approvalStt(row, index) {
    const stt = row.affirmLevel || String(index + 1);
    return String(stt) === "100" ? "HR" : stt;
  }
  // ==================== Xuất excel (client-side, không có endpoint export riêng ở backend) ====================
  exportExcel() {
    const t = (key, fallback) => this.i18n.t(key, fallback);
    const headers = [
      t("ck.col.no", "No."),
      t("ck.col.empId", "M\xE3 nh\xE2n vi\xEAn"),
      t("ck.col.localName", "H\u1ECD t\xEAn"),
      t("ck.col.deptName", "Ph\xF2ng ban"),
      t("ck.col.postGradeName", "Ch\u1EE9c v\u1EE5"),
      t("ck.col.postFamilyName", "Nh\xF3m nh\xE2n vi\xEAn"),
      t("ck.col.shiftName", "Ca l\xE0m vi\u1EC7c"),
      t("ck.col.itemNoName", "Lo\u1EA1i ngh\u1EC9 ph\xE9p"),
      t("ck.col.arDate", "Ng\xE0y c\xF4ng"),
      t("ck.col.fromDateTime", "T\u1EEB th\u1EDDi gian"),
      t("ck.col.toDateTime", "\u0110\u1EBFn th\u1EDDi gian"),
      t("ck.col.remark", "L\xFD do"),
      t("ck.col.createdName", "Ng\u01B0\u1EDDi t\u1EA1o"),
      t("ck.col.createDate", "Ng\xE0y t\u1EA1o")
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      r.empId,
      r.localName,
      r.deptName,
      r.postGradeName,
      r.postFamilyName,
      r.shiftName,
      r.itemNoName,
      r.arDateStr,
      r.fromDateTime,
      r.toDateTime,
      r.remark || "",
      r.createdName || "",
      r.createDate
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "DanhSach");
    writeFileSync(workbook, "check_attendance_ex_for_batch_export.xlsx");
  }
  // ==================== Cây phòng ban ====================
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
  /** nz-tree-select chỉ trả về key của node được tick trực tiếp - KHÔNG tự cascade xuống phòng ban con
   *  như widget DeptTree.js gốc. Backend lọc theo INSTR(...) đúng từng mã, nên phải tự mở rộng xuống
   *  các phòng ban con trước khi gửi deptNos lên (xem giải thích đầy đủ ở ManageEmpPositionInfoComponent). */
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
  // ==================== Helpers ngày giờ ====================
  /** Gửi lên BE giữ nguyên dạng có dấu "/" (yyyy/MM/dd) đúng như bản gốc - BẮT BUỘC vì
   *  EssAttendanceExForBatchMapper.xml so sánh AR_DATE_STR bằng chuỗi thô (không qua TO_DATE). */
  formatYmdSlash(d) {
    return d ? formatDate(d, "yyyy/MM/dd", "vi") : "";
  }
  static \u0275fac = function CheckAttendanceExForBatchComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CheckAttendanceExForBatchComponent)(\u0275\u0275directiveInject(CheckAttendanceExForBatchService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckAttendanceExForBatchComponent, selectors: [["app-check-attendance-ex-for-batch"]], decls: 116, vars: 147, consts: [["ckTable", ""], ["ckTotalTpl", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", "align-items-end", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["nz-input", "", "name", "keyword", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "deptNos", "nzCheckable", "", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["class", "text-danger small mt-1", 4, "ngIf"], [1, "col-md-2"], ["name", "fromDate", "nzFormat", "yyyy/MM/dd", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "toDate", "nzFormat", "yyyy/MM/dd", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "postFamily", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["name", "shiftNo", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["name", "itemNo", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [1, "col-md-6", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "nzType", "default", "type", "button", 3, "click"], [1, "bx", "bx-x"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [1, "table-nowrap", 3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "100px"], ["nzWidth", "160px"], ["nzWidth", "180px"], ["nzWidth", "140px"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "150px"], ["nzWidth", "100px", 1, "text-center"], ["nzWidth", "130px", 1, "text-center"], ["nzWidth", "130px"], ["nzWidth", "150px", 1, "text-center"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["nzWidth", "60vw", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzBodyStyle", "nzFooter"], [4, "nzModalContent"], [1, "text-danger", "small", "mt-1"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], [1, "text-center"], ["href", "javascript:void(0)", 3, "click"], [1, "table-responsive", "mb-3"], [1, "table", "table-bordered", "table-sm", "align-middle", "mb-0"], [1, "table-light", "text-center", 2, "width", "160px"], [1, "table-light", "text-center"], [1, "table-responsive", "mb-4"], ["nzSize", "small", 3, "nzData", "nzLoading", "nzShowPagination"], [1, "text-center", 2, "width", "50px"], [1, "text-center", 2, "width", "90px"], [1, "text-center", 2, "width", "110px"], [1, "text-center", 2, "width", "170px"], [2, "width", "120px"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "fw-bold", "mb-2"], ["nzBordered", "", "nzSize", "small", 1, "mb-4", 3, "nzColumn"], [3, "nzTitle"], [1, "table-responsive"], [2, "width", "170px"], [2, "width", "140px"], ["colspan", "7", 1, "text-center", "text-muted"]], template: function CheckAttendanceExForBatchComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "nz-card", 4)(3, "form", 5);
      \u0275\u0275listener("ngSubmit", function CheckAttendanceExForBatchComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 6)(5, "label", 7);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function CheckAttendanceExForBatchComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.keyword, $event) || (ctx.keyword = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 6)(11, "label", 7);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "nz-tree-select", 9);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function CheckAttendanceExForBatchComponent_Template_nz_tree_select_ngModelChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.deptNos, $event) || (ctx.deptNos = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275template(16, CheckAttendanceExForBatchComponent_div_16_Template, 2, 1, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 11)(18, "label", 7);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "nz-date-picker", 12);
      \u0275\u0275twoWayListener("ngModelChange", function CheckAttendanceExForBatchComponent_Template_nz_date_picker_ngModelChange_21_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.fromDate, $event) || (ctx.fromDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 11)(23, "label", 7);
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "nz-date-picker", 13);
      \u0275\u0275twoWayListener("ngModelChange", function CheckAttendanceExForBatchComponent_Template_nz_date_picker_ngModelChange_26_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.toDate, $event) || (ctx.toDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 11)(28, "label", 7);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "nz-select", 14);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function CheckAttendanceExForBatchComponent_Template_nz_select_ngModelChange_31_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.postFamily, $event) || (ctx.postFamily = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(33, CheckAttendanceExForBatchComponent_nz_option_33_Template, 1, 2, "nz-option", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 6)(35, "label", 7);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "nz-select", 16);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function CheckAttendanceExForBatchComponent_Template_nz_select_ngModelChange_38_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.shiftNo, $event) || (ctx.shiftNo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(40, CheckAttendanceExForBatchComponent_nz_option_40_Template, 1, 2, "nz-option", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 6)(42, "label", 7);
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "nz-select", 17);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function CheckAttendanceExForBatchComponent_Template_nz_select_ngModelChange_45_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.itemNo, $event) || (ctx.itemNo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(47, CheckAttendanceExForBatchComponent_nz_option_47_Template, 2, 5, "nz-option", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 18)(49, "button", 19);
      \u0275\u0275element(50, "i", 20);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "button", 21);
      \u0275\u0275listener("click", function CheckAttendanceExForBatchComponent_Template_button_click_53_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(54, "i", 22);
      \u0275\u0275text(55);
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "button", 21);
      \u0275\u0275listener("click", function CheckAttendanceExForBatchComponent_Template_button_click_57_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(58, "i", 23);
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(61, "nz-card");
      \u0275\u0275template(62, CheckAttendanceExForBatchComponent_nz_alert_62_Template, 1, 1, "nz-alert", 24);
      \u0275\u0275elementStart(63, "nz-table", 25, 0)(65, "thead")(66, "tr")(67, "th", 26);
      \u0275\u0275text(68);
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "th", 27);
      \u0275\u0275text(71);
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "th", 28);
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "th", 29);
      \u0275\u0275text(77);
      \u0275\u0275pipe(78, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "th", 30);
      \u0275\u0275text(80);
      \u0275\u0275pipe(81, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "th", 30);
      \u0275\u0275text(83);
      \u0275\u0275pipe(84, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "th", 31);
      \u0275\u0275text(86);
      \u0275\u0275pipe(87, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "th", 32);
      \u0275\u0275text(89);
      \u0275\u0275pipe(90, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "th", 33);
      \u0275\u0275text(92);
      \u0275\u0275pipe(93, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "th", 34);
      \u0275\u0275text(95);
      \u0275\u0275pipe(96, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "th", 34);
      \u0275\u0275text(98);
      \u0275\u0275pipe(99, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "th", 29);
      \u0275\u0275text(101);
      \u0275\u0275pipe(102, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "th", 35);
      \u0275\u0275text(104);
      \u0275\u0275pipe(105, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "th", 36);
      \u0275\u0275text(107);
      \u0275\u0275pipe(108, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(109, "tbody");
      \u0275\u0275template(110, CheckAttendanceExForBatchComponent_tr_110_Template, 30, 22, "tr", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275template(111, CheckAttendanceExForBatchComponent_ng_template_111_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(113, "nz-modal", 38);
      \u0275\u0275pipe(114, "translate");
      \u0275\u0275listener("nzOnCancel", function CheckAttendanceExForBatchComponent_Template_nz_modal_nzOnCancel_113_listener() {
        return ctx.closeDetail();
      });
      \u0275\u0275template(115, CheckAttendanceExForBatchComponent_ng_container_115_Template, 95, 98, "ng-container", 39);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const ckTable_r12 = \u0275\u0275reference(64);
      const ckTotalTpl_r13 = \u0275\u0275reference(112);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 55, "ck.label.keyword", "M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.keyword);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 58, "ck.placeholder.keyword", "Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 61, "ck.label.deptNo", "Ph\xF2ng ban"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzNodes", ctx.deptNodes());
      \u0275\u0275twoWayProperty("ngModel", ctx.deptNos);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(15, 64, "ck.placeholder.deptNo", "Ch\u1ECDn ph\xF2ng ban"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.deptTreeErrorMessage());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 67, "ck.label.fromDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.fromDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 70, "ck.label.toDate", "Ng\xE0y k\u1EBFt th\xFAc"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.toDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 73, "ck.label.postFamily", "Nh\xF3m nh\xE2n vi\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.postFamily);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(32, 76, "ck.select.allOption", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.postFamilyOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 79, "ck.label.shiftNo", "Ca l\xE0m vi\u1EC7c"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.shiftNo);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(39, 82, "ck.select.allOption", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.shiftOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 85, "ck.label.itemNo", "Lo\u1EA1i ngh\u1EC9 ph\xE9p"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.itemNo);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(46, 88, "ck.select.choose", "L\u1EF1a ch\u1ECDn"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.itemNoOptions);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(52, 91, "ck.btn.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(56, 94, "ck.btn.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(60, 97, "ck.btn.exportExcel", "Xu\u1EA5t excel"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", ckTotalTpl_r13)("nzScroll", \u0275\u0275pureFunction0(145, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 100, "ck.col.no", "No."));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(72, 103, "ck.col.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(75, 106, "ck.col.localName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(78, 109, "ck.col.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(81, 112, "ck.col.postGradeName", "Ch\u1EE9c v\u1EE5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(84, 115, "ck.col.postFamilyName", "Nh\xF3m nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(87, 118, "ck.col.shiftName", "Ca l\xE0m vi\u1EC7c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(90, 121, "ck.col.itemNoName", "Lo\u1EA1i ngh\u1EC9 ph\xE9p"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(93, 124, "ck.col.arDate", "Ng\xE0y c\xF4ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(96, 127, "ck.col.fromDateTime", "T\u1EEB th\u1EDDi gian"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(99, 130, "ck.col.toDateTime", "\u0110\u1EBFn th\u1EDDi gian"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(102, 133, "ck.col.remark", "L\xFD do"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(105, 136, "ck.col.createdName", "Ng\u01B0\u1EDDi t\u1EA1o"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(108, 139, "ck.col.createDate", "Ng\xE0y t\u1EA1o"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ckTable_r12.data)("ngForTrackBy", ctx.trackByRow);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.detailVisible())("nzTitle", ctx.detailLeaveInfo()?.leaveTypeName ? "[" + ctx.detailLeaveInfo().leaveTypeName + "]" : \u0275\u0275pipeBind2(114, 142, "ck.modal.title", "Th\xF4ng tin ph\xEA duy\u1EC7t"))("nzBodyStyle", \u0275\u0275pureFunction0(146, _c1))("nzFooter", null);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzDatePickerModule, NzDatePickerComponent, NzTreeSelectModule, NzTreeSelectComponent, NzAlertModule, NzAlertComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzDescriptionsModule, NzDescriptionsComponent, NzDescriptionsItemComponent, TranslatePipe], styles: ["\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=check-attendance-ex-for-batch.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckAttendanceExForBatchComponent, [{
    type: Component,
    args: [{ selector: "app-check-attendance-ex-for-batch", standalone: true, imports: [
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
      NzModalModule,
      NzDescriptionsModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm - \u0111\u1EE9ng im khi cu\u1ED9n (xem .sticky-filter-card trong styles.css) -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3 align-items-end" (ngSubmit)="search()">
        <div class="col-md-3">
          <label class="form-label">{{ 'ck.label.keyword' | translate:'M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn' }}</label>
          <input nz-input [(ngModel)]="keyword" name="keyword"
                 [placeholder]="'ck.placeholder.keyword' | translate:'Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn'">
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'ck.label.deptNo' | translate:'Ph\xF2ng ban' }}</label>
          <nz-tree-select class="w-100" [nzNodes]="deptNodes()" [(ngModel)]="deptNos" name="deptNos"
                           nzCheckable nzShowSearch nzAllowClear
                           [nzPlaceHolder]="'ck.placeholder.deptNo' | translate:'Ch\u1ECDn ph\xF2ng ban'"></nz-tree-select>
          <div *ngIf="deptTreeErrorMessage()" class="text-danger small mt-1">{{ deptTreeErrorMessage() }}</div>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'ck.label.fromDate' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="fromDate" name="fromDate" nzFormat="yyyy/MM/dd"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'ck.label.toDate' | translate:'Ng\xE0y k\u1EBFt th\xFAc' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="toDate" name="toDate" nzFormat="yyyy/MM/dd"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'ck.label.postFamily' | translate:'Nh\xF3m nh\xE2n vi\xEAn' }}</label>
          <nz-select class="w-100" [(ngModel)]="postFamily" name="postFamily" nzAllowClear
                     [nzPlaceHolder]="'ck.select.allOption' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let c of postFamilyOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'ck.label.shiftNo' | translate:'Ca l\xE0m vi\u1EC7c' }}</label>
          <nz-select class="w-100" [(ngModel)]="shiftNo" name="shiftNo" nzAllowClear
                     [nzPlaceHolder]="'ck.select.allOption' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let s of shiftOptions()" [nzValue]="s.shiftNo" [nzLabel]="s.nameVi || s.shiftName || ''"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'ck.label.itemNo' | translate:'Lo\u1EA1i ngh\u1EC9 ph\xE9p' }}</label>
          <nz-select class="w-100" [(ngModel)]="itemNo" name="itemNo" nzAllowClear
                     [nzPlaceHolder]="'ck.select.choose' | translate:'L\u1EF1a ch\u1ECDn'">
            <nz-option *ngFor="let o of itemNoOptions" [nzValue]="o.value" [nzLabel]="o.labelKey | translate:o.fallback"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-6 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'ck.btn.search' | translate:'Tra c\u1EE9u' }}
          </button>
          <button nz-button nzType="default" type="button" (click)="clearSearch()">
            <i class="bx bx-x"></i> {{ 'ck.btn.clearFilter' | translate:'X\xF3a l\u1ECDc' }}
          </button>
          <button nz-button nzType="default" type="button" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'ck.btn.exportExcel' | translate:'Xu\u1EA5t excel' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="ckTotalTpl"
                [nzScroll]="{ x: '1780px', y: 'calc(100vh - 380px)' }"
                class="table-nowrap" #ckTable>
        <!-- nzWidth khai b\xE1o cho t\u1EEBng c\u1ED9t \u0111\u1EC3 \u0111\u1ED3ng b\u1ED9 \u0111\u1ED9 r\u1ED9ng header/body khi d\xF9ng nzScroll (xem
             gi\u1EA3i th\xEDch \u1EDF dept-ot-apply-info.component.html). -->
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'ck.col.no' | translate:'No.' }}</th>
            <th nzWidth="100px">{{ 'ck.col.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
            <th nzWidth="160px">{{ 'ck.col.localName' | translate:'H\u1ECD t\xEAn' }}</th>
            <th nzWidth="180px">{{ 'ck.col.deptName' | translate:'Ph\xF2ng ban' }}</th>
            <th nzWidth="140px">{{ 'ck.col.postGradeName' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
            <th nzWidth="140px">{{ 'ck.col.postFamilyName' | translate:'Nh\xF3m nh\xE2n vi\xEAn' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'ck.col.shiftName' | translate:'Ca l\xE0m vi\u1EC7c' }}</th>
            <th nzWidth="150px">{{ 'ck.col.itemNoName' | translate:'Lo\u1EA1i ngh\u1EC9 ph\xE9p' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'ck.col.arDate' | translate:'Ng\xE0y c\xF4ng' }}</th>
            <th class="text-center" nzWidth="130px">{{ 'ck.col.fromDateTime' | translate:'T\u1EEB th\u1EDDi gian' }}</th>
            <th class="text-center" nzWidth="130px">{{ 'ck.col.toDateTime' | translate:'\u0110\u1EBFn th\u1EDDi gian' }}</th>
            <th nzWidth="180px">{{ 'ck.col.remark' | translate:'L\xFD do' }}</th>
            <th nzWidth="130px">{{ 'ck.col.createdName' | translate:'Ng\u01B0\u1EDDi t\u1EA1o' }}</th>
            <th class="text-center" nzWidth="150px">{{ 'ck.col.createDate' | translate:'Ng\xE0y t\u1EA1o' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of ckTable.data; let i = index; trackBy: trackByRow">
            <td class="text-center">{{ i + 1 }}</td>
            <td [attr.title]="row.empId || null">{{ row.empId }}</td>
            <td [attr.title]="row.localName || null">
              <a href="javascript:void(0)" (click)="openDetail(row)">{{ row.localName }}</a>
            </td>
            <td [attr.title]="row.deptName || null">{{ row.deptName }}</td>
            <td [attr.title]="row.postGradeName || null">{{ row.postGradeName }}</td>
            <td [attr.title]="row.postFamilyName || null">{{ row.postFamilyName }}</td>
            <td class="text-center">{{ row.shiftName }}</td>
            <td [attr.title]="row.itemNoName || null">{{ row.itemNoName }}</td>
            <td class="text-center">{{ row.arDateStr }}</td>
            <td class="text-center">{{ row.fromDateTime }}</td>
            <td class="text-center">{{ row.toDateTime }}</td>
            <td [attr.title]="row.remark || null">{{ row.remark }}</td>
            <td [attr.title]="row.createdName || null">{{ row.createdName }}</td>
            <td class="text-center">{{ row.createDate }}</td>
          </tr>
        </tbody>
        <ng-template #ckTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal chi ti\u1EBFt ph\xEA duy\u1EC7t - m\u1EDF khi click t\xEAn nh\xE2n vi\xEAn (\u0111\xFAng atexOpenApplyDetail() b\u1EA3n g\u1ED1c). -->
<nz-modal [nzVisible]="detailVisible()"
          [nzTitle]="(detailLeaveInfo()?.leaveTypeName ? '[' + detailLeaveInfo()!.leaveTypeName + ']' : ('ck.modal.title' | translate:'Th\xF4ng tin ph\xEA duy\u1EC7t'))"
          nzWidth="60vw" [nzBodyStyle]="{ 'max-height': '75vh', 'overflow-y': 'auto' }"
          (nzOnCancel)="closeDetail()" [nzFooter]="null">
  <ng-container *nzModalContent>
    <nz-alert *ngIf="detailErrorMessage()" nzType="error" [nzMessage]="detailErrorMessage() ?? ''" class="mb-3"></nz-alert>

    <div class="table-responsive mb-3">
      <table class="table table-bordered table-sm align-middle mb-0">
        <tbody>
          <tr>
            <th class="table-light text-center" style="width: 160px;">{{ 'ck.modal.applyTitle' | translate:'Ti\xEAu \u0111\u1EC1' }}</th>
            <td>{{ buildApplyTitle(detailLeaveInfo()) }}</td>
          </tr>
          <tr>
            <th class="table-light text-center">{{ 'ck.modal.requester' | translate:'Ng\u01B0\u1EDDi xin ph\xE9p' }}</th>
            <td>{{ buildRequesterInfo(detailEmployeeInfo()) }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="table-responsive mb-4">
      <nz-table [nzData]="detailApprovalList()" [nzLoading]="detailLoading()" [nzShowPagination]="false" nzSize="small">
        <thead>
          <tr>
            <th class="text-center" style="width: 50px;">{{ 'ck.modal.stt' | translate:'STT' }}</th>
            <th class="text-center" style="width: 90px;">{{ 'ck.modal.approvalSeq' | translate:'Tr\xECnh t\u1EF1 duy\u1EC7t' }}</th>
            <th class="text-center" style="width: 110px;">{{ 'ck.modal.approvalStatus' | translate:'Tr\u1EA1ng th\xE1i duy\u1EC7t' }}</th>
            <th>{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
            <th>{{ 'ck.modal.opinion' | translate:'\xDD ki\u1EBFn' }}</th>
            <th class="text-center" style="width: 170px;">{{ 'ck.modal.actionTime' | translate:'Th\u1EDDi gian th\u1EF1c hi\u1EC7n' }}</th>
            <th style="width: 120px;">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!detailLoading() && detailApprovalList().length === 0">
            <td colspan="7" class="text-center text-muted">{{ 'ck.msg.noApprovalData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u ph\xEA duy\u1EC7t' }}</td>
          </tr>
          <tr *ngFor="let item of detailApprovalList(); let i = index">
            <td class="text-center">{{ approvalStt(item, i) }}</td>
            <td class="text-center">{{ item.affirmTypeName }}</td>
            <td class="text-center">{{ item.affirmFlagName }}</td>
            <td>{{ item.affirmName }}</td>
            <td>{{ item.affirmContent }}</td>
            <td class="text-center">{{ item.updateDate }}</td>
            <td class="text-center">{{ item.deptName }}</td>
          </tr>
        </tbody>
      </nz-table>
    </div>

    <h6 class="fw-bold mb-2">{{ 'ck.modal.empInfoTitle' | translate:'Th\xF4ng tin nh\xE2n vi\xEAn' }}</h6>
    <nz-descriptions nzBordered [nzColumn]="2" nzSize="small" class="mb-4">
      <nz-descriptions-item [nzTitle]="'ck.modal.empName' | translate:'H\u1ECD t\xEAn'">{{ detailEmployeeInfo()?.localName }}</nz-descriptions-item>
      <nz-descriptions-item [nzTitle]="'ck.modal.empId' | translate:'M\xE3 nh\xE2n vi\xEAn'">{{ detailEmployeeInfo()?.empId }}</nz-descriptions-item>
      <nz-descriptions-item [nzTitle]="'ck.modal.empDept' | translate:'Ph\xF2ng ban'">{{ detailEmployeeInfo()?.deptName }}</nz-descriptions-item>
      <nz-descriptions-item [nzTitle]="'ck.modal.empPost' | translate:'Ch\u1EE9c v\u1EE5'">{{ detailEmployeeInfo()?.postGradeName }}</nz-descriptions-item>
    </nz-descriptions>

    <h6 class="fw-bold mb-2">{{ 'ck.modal.applyInfo' | translate:'Th\xF4ng tin xin ph\xE9p' }}</h6>
    <div class="table-responsive">
      <table class="table table-bordered table-sm align-middle mb-0">
        <thead class="table-light text-center">
          <tr>
            <th>{{ 'ck.modal.leaveType' | translate:'Lo\u1EA1i ngh\u1EC9 ph\xE9p' }}</th>
            <th style="width: 170px;">{{ 'ck.modal.leaveFrom' | translate:'Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u' }}</th>
            <th style="width: 170px;">{{ 'ck.modal.leaveTo' | translate:'Th\u1EDDi gian k\u1EBFt th\xFAc' }}</th>
            <th style="width: 140px;">{{ 'ck.modal.duration' | translate:'Th\u1EDDi l\u01B0\u1EE3ng' }}</th>
            <th>{{ 'ck.modal.remark' | translate:'L\xFD do' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center">{{ detailLeaveInfo()?.leaveTypeName }}</td>
            <td class="text-center">{{ detailLeaveInfo()?.leaveFromTime }}</td>
            <td class="text-center">{{ detailLeaveInfo()?.leaveToTime }}</td>
            <td class="text-center">{{ detailLeaveInfo()?.applyLength }}</td>
            <td class="text-center">{{ detailLeaveInfo()?.leaveReason }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/check-attendance-ex-for-batch/check-attendance-ex-for-batch.component.css */\ntable td,\ntable th {\n  white-space: nowrap;\n}\ntable td {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=check-attendance-ex-for-batch.component.css.map */\n"] }]
  }], () => [{ type: CheckAttendanceExForBatchService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckAttendanceExForBatchComponent, { className: "CheckAttendanceExForBatchComponent", filePath: "src/app/check-attendance-ex-for-batch/check-attendance-ex-for-batch.component.ts", lineNumber: 99 });
})();
export {
  CheckAttendanceExForBatchComponent
};
//# debugId=99cf8ff7-b865-5143-aa2d-65d667913780
//# sourceMappingURL=chunk-4AFCFKAQ.js.map
