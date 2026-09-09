import {
  NzTagComponent,
  NzTagModule
} from "./chunk-HTQAHYN3.js";
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

// src/app/view-noticeed-email/view-noticeed-email.service.ts
var API_BASE = "/ess/infoApply/api/noticeedEmail";
var OT_DETAIL_URL = "/ar/attendanceMintenance/api/overtime/detail";
var LEAVE_DETAIL_URL = "/ar/attendanceMintenance/api/leaveApply/detail";
var ATTENDANCE_EX_DETAIL_URL = "/ess/infoApplyAttendance/api/checkAttendanceEx/detail";
var ViewNoticeedEmailService = class _ViewNoticeedEmailService {
  constructor(http) {
    this.http = http;
  }
  http;
  getList() {
    return this.http.get(`${API_BASE}/list`, { withCredentials: true });
  }
  getOtDetail(applyNo, applyType) {
    return this.getDetail(OT_DETAIL_URL, applyNo, applyType);
  }
  getLeaveDetail(applyNo, applyType) {
    return this.getDetail(LEAVE_DETAIL_URL, applyNo, applyType);
  }
  getAttendanceExDetail(applyNo, applyType) {
    return this.getDetail(ATTENDANCE_EX_DETAIL_URL, applyNo, applyType);
  }
  getDetail(url, applyNo, applyType) {
    const params = new HttpParams().set("applyNo", applyNo).set("applyType", applyType || "");
    return this.http.get(url, { params, withCredentials: true });
  }
  static \u0275fac = function ViewNoticeedEmailService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewNoticeedEmailService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewNoticeedEmailService, factory: _ViewNoticeedEmailService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewNoticeedEmailService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-noticeed-email/view-noticeed-email.component.ts
var _c0 = () => ({ "max-height": "75vh", "overflow-y": "auto" });
function ViewNoticeedEmailComponent_nz_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 27);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const o_r2 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r2.value)("nzLabel", \u0275\u0275pipeBind2(1, 2, o_r2.labelKey, o_r2.fallback));
  }
}
function ViewNoticeedEmailComponent_nz_alert_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 28);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r2.errorMessage() ?? "");
  }
}
function ViewNoticeedEmailComponent_tr_43_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 32);
    \u0275\u0275listener("click", function ViewNoticeedEmailComponent_tr_43_a_4_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const row_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openDetail(row_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.title);
  }
}
function ViewNoticeedEmailComponent_tr_43_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r5.title);
  }
}
function ViewNoticeedEmailComponent_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275template(4, ViewNoticeedEmailComponent_tr_43_a_4_Template, 2, 1, "a", 30)(5, ViewNoticeedEmailComponent_tr_43_ng_template_5_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 29);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 29);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 29)(12, "nz-tag", 31);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const plainTitle_r7 = \u0275\u0275reference(6);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r6 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r5.affirmUrl)("ngIfElse", plainTitle_r7);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r5.applyPersonInfo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.updateDate);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColor", ctx_r2.statusColor(row_r5.affirmFlag));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.applyAffirmFlag);
  }
}
function ViewNoticeedEmailComponent_tr_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 33);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "vne.msg.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewNoticeedEmailComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r8 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r8, " ");
  }
}
function ViewNoticeedEmailComponent_ng_container_48_nz_alert_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 28);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzMessage", ctx_r2.detailErrorMessage() ?? "");
  }
}
function ViewNoticeedEmailComponent_ng_container_48_ng_container_2_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 49);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "arOtf.noApprovalData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u ph\xEA duy\u1EC7t"));
  }
}
function ViewNoticeedEmailComponent_ng_container_48_ng_container_2_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 29);
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
    const item_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.approvalStt(item_r10.affirmLevel, i_r11));
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
function ViewNoticeedEmailComponent_ng_container_48_ng_container_2_ng_container_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h6", 45);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 50)(5, "table", 36)(6, "thead", 38)(7, "tr")(8, "th");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 51);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 43);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 43);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 51);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "tbody")(27, "tr")(28, "td", 29);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "td", 29);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "td", 29);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "td", 29);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "td", 29);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "td", 29);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const d_r12 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 13, "arOtf.otInfo", "Th\xF4ng tin t\u0103ng ca"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 16, "arOtf.otType", "Lo\u1EA1i t\u0103ng ca"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 19, "arOtf.otDate", "Ng\xE0y t\u0103ng ca"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 22, "arOtf.otBegin", "B\u1EAFt \u0111\u1EA7u"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 25, "arOtf.otEnd", "K\u1EBFt th\xFAc"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 28, "common.hours", "S\u1ED1 gi\u1EDD"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 31, "common.reason", "L\xFD do"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.detailInfo(d_r12)["otTypeName"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.detailInfo(d_r12)["applyOtDate"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.detailInfo(d_r12)["detailFromDateTime"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.detailInfo(d_r12)["detailToDateTime"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.detailInfo(d_r12)["otApplyHour"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.detailInfo(d_r12)["applyOtRemark"]);
  }
}
function ViewNoticeedEmailComponent_ng_container_48_ng_container_2_ng_template_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6", 45);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 50)(4, "table", 36)(5, "thead", 38)(6, "tr")(7, "th");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 43);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 43);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 51);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody")(23, "tr")(24, "td", 29);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td", 29);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "td", 29);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "td", 29);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "td", 29);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const d_r12 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 11, "applyAtt.leaveInfo", "Th\xF4ng tin xin ph\xE9p"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 14, "applyAtt.leaveTypeFull", "Lo\u1EA1i ngh\u1EC9 ph\xE9p"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 17, "common.startTime", "Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 20, "common.endTime", "Th\u1EDDi gian k\u1EBFt th\xFAc"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 23, "applyAtt.leaveDuration", "Th\u1EDDi l\u01B0\u1EE3ng"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 26, "common.reason", "L\xFD do"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.detailInfo(d_r12)["leaveTypeName"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.detailInfo(d_r12)["leaveFromTime"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.detailInfo(d_r12)["leaveToTime"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.detailDuration(d_r12));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.detailInfo(d_r12)["leaveReason"]);
  }
}
function ViewNoticeedEmailComponent_ng_container_48_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 35)(2, "table", 36)(3, "tbody")(4, "tr")(5, "th", 37);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "tr")(11, "th", 38);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(16, "div", 39)(17, "table", 36)(18, "thead", 38)(19, "tr")(20, "th", 40);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 41);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 42);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th");
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th", 43);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th", 44);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "tbody");
    \u0275\u0275template(42, ViewNoticeedEmailComponent_ng_container_48_ng_container_2_tr_42_Template, 4, 4, "tr", 24)(43, ViewNoticeedEmailComponent_ng_container_48_ng_container_2_tr_43_Template, 15, 7, "tr", 23);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "h6", 45);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 39)(48, "table", 36)(49, "tbody")(50, "tr")(51, "th", 46);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "td");
    \u0275\u0275text(55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "th", 46);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "td");
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "tr")(62, "th", 38);
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "td");
    \u0275\u0275text(66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "th", 38);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "td");
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(72, ViewNoticeedEmailComponent_ng_container_48_ng_container_2_ng_container_72_Template, 40, 34, "ng-container", 34)(73, ViewNoticeedEmailComponent_ng_container_48_ng_container_2_ng_template_73_Template, 34, 29, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(75, "div", 47)(76, "button", 48);
    \u0275\u0275listener("click", function ViewNoticeedEmailComponent_ng_container_48_ng_container_2_Template_button_click_76_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeDetail());
    });
    \u0275\u0275text(77);
    \u0275\u0275pipe(78, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const d_r12 = ctx.ngIf;
    const leaveInfoTpl_r13 = \u0275\u0275reference(74);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 25, ctx_r2.detailKind === "ot" ? "arOtf.applyTitle" : "applyAtt.subject", "Ti\xEAu \u0111\u1EC1"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.detailApplyTitle(d_r12));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(13, 28, ctx_r2.detailKind === "ot" ? "arOtf.applicant" : "applyAtt.applicant", "Ng\u01B0\u1EDDi \u0111\u0103ng k\xFD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.detailApplicant(d_r12));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 31, "common.stt", "STT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 34, "arOtf.approvalSeq", "Tr\xECnh t\u1EF1 duy\u1EC7t"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 37, "arOtf.approvalStatus", "Tr\u1EA1ng th\xE1i duy\u1EC7t"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 40, "common.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 43, "arOtf.opinion", "\xDD ki\u1EBFn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 46, "arOtf.actionTime", "Th\u1EDDi gian th\u1EF1c hi\u1EC7n"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 49, "common.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !d_r12.approvalList?.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", d_r12.approvalList);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 52, ctx_r2.detailKind === "ot" ? "arOtf.empInfo" : "applyAtt.empInfo", "Th\xF4ng tin nh\xE2n vi\xEAn"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(53, 55, "common.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.detailEmployeeInfo(d_r12)["localName"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(58, 58, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.detailEmployeeInfo(d_r12)["empId"]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(64, 61, "common.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.detailEmployeeInfo(d_r12)["deptName"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 64, "common.position", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.detailEmployeeInfo(d_r12)["postGradeName"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.detailKind === "ot")("ngIfElse", leaveInfoTpl_r13);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(78, 67, "common.close", "\u0110\xF3ng"));
  }
}
function ViewNoticeedEmailComponent_ng_container_48_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "arOtf.loadingData", "\u0110ang t\u1EA3i d\u1EEF li\u1EC7u..."), " ");
  }
}
function ViewNoticeedEmailComponent_ng_container_48_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ViewNoticeedEmailComponent_ng_container_48_ng_template_3_div_0_Template, 3, 4, "div", 52);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r2.detailLoading());
  }
}
function ViewNoticeedEmailComponent_ng_container_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ViewNoticeedEmailComponent_ng_container_48_nz_alert_1_Template, 1, 1, "nz-alert", 18)(2, ViewNoticeedEmailComponent_ng_container_48_ng_container_2_Template, 79, 70, "ng-container", 34)(3, ViewNoticeedEmailComponent_ng_container_48_ng_template_3_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const detailLoadingTpl_r14 = \u0275\u0275reference(4);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.detailErrorMessage());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.detailData())("ngIfElse", detailLoadingTpl_r14);
  }
}
var I18N_KEYS = [
  "vne.search.title",
  "vne.search.applyType",
  "vne.search.applyType.all",
  "vne.search.applyType.ot",
  "vne.search.applyType.leave",
  "vne.search.applyType.anomaly",
  "vne.btn.search",
  "vne.col.no",
  "vne.col.title",
  "vne.col.applyPerson",
  "vne.col.updateDate",
  "vne.col.affirmStatus",
  "vne.msg.noData",
  "vne.msg.loadError",
  "common.close",
  "common.stt",
  "common.empName",
  "common.empId",
  "common.deptName",
  "common.hours",
  "common.reason",
  "common.startTime",
  "common.endTime",
  "common.position",
  "common.totalRows",
  "arOtf.applyOt",
  "arOtf.applyTitle",
  "arOtf.applicant",
  "arOtf.approvalSeq",
  "arOtf.approvalStatus",
  "arOtf.opinion",
  "arOtf.actionTime",
  "arOtf.empInfo",
  "arOtf.otInfo",
  "arOtf.otType",
  "arOtf.otDate",
  "arOtf.otBegin",
  "arOtf.otEnd",
  "arOtf.loadingData",
  "arOtf.noApprovalData",
  "arOtf.loadFailed",
  "arOtf.msg.noApplyNo",
  "applyAtt.subject",
  "applyAtt.applicant",
  "applyAtt.approvalSeq",
  "applyAtt.approvalStatus",
  "applyAtt.opinion",
  "applyAtt.actionTime",
  "applyAtt.empInfo",
  "applyAtt.leaveInfo",
  "applyAtt.leaveTypeFull",
  "applyAtt.leaveDuration",
  "applyAtt.loadingData",
  "applyAtt.noApprovalData",
  "applyAtt.loadFailed",
  "applyAtt.applyTitleFallback",
  "applyAtt.msg.noApplyNo",
  "ck.modal.title"
];
var APPLY_TYPE_OPTIONS = [
  { value: "31", labelKey: "vne.search.applyType.ot", fallback: "T\u0103ng ca" },
  { value: "21", labelKey: "vne.search.applyType.leave", fallback: "Ngh\u1EC9 ph\xE9p" },
  { value: "218197", labelKey: "vne.search.applyType.anomaly", fallback: "Ngh\u1EC9 b\u1EA5t th\u01B0\u1EDDng" }
];
var STATUS_COLOR = {
  "14014309": "green",
  "14014310": "red",
  "14014308": "gold"
};
var ViewNoticeedEmailComponent = class _ViewNoticeedEmailComponent {
  constructor(api, i18n, message, route) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
    this.route = route;
  }
  api;
  i18n;
  message;
  route;
  applyTypeOptions = APPLY_TYPE_OPTIONS;
  pageSizeOptions = [25, 50, 100, 200];
  displayRows = signal(
    [],
    ...ngDevMode ? [{ debugName: "displayRows" }] : (
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
  titleFilter = "";
  applyTypeFilter = null;
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
  detailKind = null;
  allRows = [];
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    const typeCode = this.route.snapshot.queryParamMap.get("applyTypeCode");
    if (typeCode)
      this.applyTypeFilter = typeCode;
    this.loadList();
  }
  loadList() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getList().subscribe({
      next: (list) => {
        this.allRows = list ?? [];
        this.applyFilter();
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("vne.msg.loadError", "L\u1ED7i t\u1EA3i d\u1EEF li\u1EC7u"));
        this.allRows = [];
        this.displayRows.set([]);
        this.loading.set(false);
      }
    });
  }
  search() {
    this.applyFilter();
  }
  applyFilter() {
    const title = this.titleFilter.trim().toLowerCase();
    const type = this.applyTypeFilter || "";
    this.displayRows.set(this.allRows.filter((r) => {
      const matchType = !type || r.applyTypeCode === type;
      const matchTitle = !title || (r.title || "").toLowerCase().includes(title);
      return matchType && matchTitle;
    }));
  }
  statusColor(affirmFlag) {
    return STATUS_COLOR[String(affirmFlag || "")] ?? "default";
  }
  // ==================== Modal chi tiết đơn (gộp OT/Nghỉ phép/Điều chỉnh chấm công, chỉ đọc) ====================
  openDetail(row) {
    const url = row.affirmUrl || "";
    const kind = url.indexOf("viewApprovaledOt") !== -1 ? "ot" : url.indexOf("viewApprovaledLeave") !== -1 ? "leave" : url.indexOf("viewAttendanceEx") !== -1 ? "attendanceEx" : null;
    if (!kind || !row.applyNo) {
      this.message.warning(this.i18n.t("arOtf.msg.noApplyNo", "Kh\xF4ng t\xECm th\u1EA5y s\u1ED1 \u0111\u01A1n \u0111\u1EC3 xem chi ti\u1EBFt"));
      return;
    }
    this.detailKind = kind;
    this.detailData.set(null);
    this.detailErrorMessage.set(null);
    this.detailVisible.set(true);
    this.detailLoading.set(true);
    const req$ = kind === "ot" ? this.api.getOtDetail(row.applyNo, row.applyType) : kind === "leave" ? this.api.getLeaveDetail(row.applyNo, row.applyType) : this.api.getAttendanceExDetail(row.applyNo, row.applyType);
    req$.subscribe({
      next: (res) => {
        this.detailData.set(res);
        this.detailLoading.set(false);
      },
      error: () => {
        this.detailErrorMessage.set(this.i18n.t("arOtf.loadFailed", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i"));
        this.detailLoading.set(false);
      }
    });
  }
  closeDetail() {
    this.detailVisible.set(false);
  }
  /** Thông tin nghiệp vụ của đơn (otInfo cho tăng ca, leaveInfo cho nghỉ phép/điều chỉnh chấm công). */
  detailInfo(d) {
    return (this.detailKind === "ot" ? d.otInfo : d.leaveInfo) || {};
  }
  detailEmployeeInfo(d) {
    return d.employeeInfo || this.detailInfo(d);
  }
  detailModalTitle(d) {
    if (!d)
      return "";
    const info = this.detailInfo(d);
    if (this.detailKind === "ot") {
      return `[${info["otTypeName"] || this.i18n.t("arOtf.applyOt", "Xin t\u0103ng ca")}]`;
    }
    const fallback = this.detailKind === "leave" ? this.i18n.t("applyAtt.applyTitleFallback", "Xin ngh\u1EC9 ph\xE9p") : this.i18n.t("ck.modal.title", "Th\xF4ng tin ph\xEA duy\u1EC7t");
    return `[${info["leaveTypeName"] || fallback}]`;
  }
  /** Dòng "Tiêu đề" trong modal - đúng vaotBuildApplyTitle()/valBuildApplyTitle() bản gốc. */
  detailApplyTitle(d) {
    const info = this.detailInfo(d);
    const typeName = this.detailKind === "ot" ? info["otTypeName"] : info["leaveTypeName"];
    const fromTime = this.detailKind === "ot" ? info["detailFromDateTime"] : info["leaveFromTime"];
    const toTime = this.detailKind === "ot" ? info["detailToDateTime"] : info["leaveToTime"];
    const localName = info["localName"] || "";
    if (!typeName && !localName && !fromTime && !toTime)
      return "";
    return `${typeName || ""}/Apply(${localName})[Date: ${fromTime || ""} ~ ${toTime || ""}]`;
  }
  detailApplicant(d) {
    const emp = this.detailEmployeeInfo(d);
    return `${emp["localName"] || ""}/${emp["postGradeName"] || ""}/${emp["deptName"] || ""}`;
  }
  /** Thời lượng nghỉ phép - đúng valFormatDuration() bản gốc (quy đổi ra Ngày/Giờ theo dayHours). Chỉ
   *  áp dụng cho đơn nghỉ phép; đơn điều chỉnh chấm công (attendanceEx) hiển thị applyLength thô, đúng
   *  atexRenderData() bản gốc (không có hàm quy đổi). */
  detailDuration(d) {
    const info = this.detailInfo(d);
    if (this.detailKind !== "leave")
      return info["applyLength"] || "";
    const len = parseFloat(info["applyLength"]);
    const dh = parseFloat(info["dayHours"]);
    if (isNaN(len) || isNaN(dh) || dh === 0)
      return info["applyLength"] || "";
    const days = Math.floor(len / dh);
    const hours = len - days * dh;
    let text = "";
    if (days > 0)
      text += `${days} Ng\xE0y`;
    if (hours > 0)
      text += (text ? " " : "") + `${hours} Gi\u1EDD`;
    return text || String(len);
  }
  /** STT hàng phê duyệt - dòng tổng hợp xác nhận của HR có affirmLevel='100' hiển thị là 'HR' thay vì
   *  số thứ tự thô, đúng vaotRenderApprovalRows() bản gốc. */
  approvalStt(affirmLevel, index) {
    const stt = affirmLevel || String(index + 1);
    return stt === "100" ? "HR" : stt;
  }
  static \u0275fac = function ViewNoticeedEmailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewNoticeedEmailComponent)(\u0275\u0275directiveInject(ViewNoticeedEmailService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewNoticeedEmailComponent, selectors: [["app-view-noticeed-email"]], decls: 49, vars: 53, consts: [["vneTable", ""], ["vneTotalTpl", ""], ["plainTitle", ""], ["detailLoadingTpl", ""], ["leaveInfoTpl", ""], [1, "row"], [1, "col-12"], [1, "mb-3"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-4"], [1, "form-label"], ["nz-input", "", "name", "titleFilter", 3, "ngModelChange", "ngModel"], [1, "col-md-3"], ["name", "applyTypeFilter", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col-md-5", "d-flex", "align-items-end", "justify-content-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [1, "table-nowrap", 3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "20%", 1, "text-center"], ["nzWidth", "12%", 1, "text-center"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["nzWidth", "70vw", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzBodyStyle", "nzFooter"], [4, "nzModalContent"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], [1, "text-center"], ["href", "javascript:void(0)", 3, "click", 4, "ngIf", "ngIfElse"], [3, "nzColor"], ["href", "javascript:void(0)", 3, "click"], ["colspan", "5", 1, "text-center", "text-muted", "py-3"], [4, "ngIf", "ngIfElse"], [1, "table-responsive", "mb-3"], [1, "table", "table-bordered", "table-sm", "align-middle", "mb-0"], [1, "table-light", "text-center", 2, "width", "160px"], [1, "table-light", "text-center"], [1, "table-responsive", "mb-4"], [2, "width", "50px"], [2, "width", "90px"], [2, "width", "110px"], [2, "width", "170px"], [2, "width", "120px"], [1, "fw-bold", "mb-2"], [1, "table-light", "text-center", 2, "width", "100px"], [1, "d-flex", "justify-content-end", "mt-3"], ["nz-button", "", "type", "button", 3, "click"], ["colspan", "7", 1, "text-center", "text-muted"], [1, "table-responsive"], [2, "width", "140px"], ["class", "text-center text-muted py-3", 4, "ngIf"], [1, "text-center", "text-muted", "py-3"]], template: function ViewNoticeedEmailComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "nz-card", 7)(3, "form", 8);
      \u0275\u0275listener("ngSubmit", function ViewNoticeedEmailComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 9)(5, "label", 10);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function ViewNoticeedEmailComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.titleFilter, $event) || (ctx.titleFilter = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 12)(10, "label", 10);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "nz-select", 13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewNoticeedEmailComponent_Template_nz_select_ngModelChange_13_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.applyTypeFilter, $event) || (ctx.applyTypeFilter = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(15, ViewNoticeedEmailComponent_nz_option_15_Template, 2, 5, "nz-option", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 15)(17, "button", 16);
      \u0275\u0275element(18, "i", 17);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "nz-card");
      \u0275\u0275template(22, ViewNoticeedEmailComponent_nz_alert_22_Template, 1, 1, "nz-alert", 18);
      \u0275\u0275elementStart(23, "nz-table", 19, 0)(25, "thead")(26, "tr")(27, "th", 20);
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th");
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th", 21);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "th", 22);
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "th", 22);
      \u0275\u0275text(40);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "tbody");
      \u0275\u0275template(43, ViewNoticeedEmailComponent_tr_43_Template, 14, 7, "tr", 23)(44, ViewNoticeedEmailComponent_tr_44_Template, 4, 4, "tr", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275template(45, ViewNoticeedEmailComponent_ng_template_45_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(47, "nz-modal", 25);
      \u0275\u0275listener("nzOnCancel", function ViewNoticeedEmailComponent_Template_nz_modal_nzOnCancel_47_listener() {
        return ctx.closeDetail();
      });
      \u0275\u0275template(48, ViewNoticeedEmailComponent_ng_container_48_Template, 5, 3, "ng-container", 26);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const vneTable_r15 = \u0275\u0275reference(24);
      const vneTotalTpl_r16 = \u0275\u0275reference(46);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 25, "vne.search.title", "Ti\xEAu \u0111\u1EC1"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.titleFilter);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 28, "vne.search.applyType", "Lo\u1EA1i \u0111\u01A1n"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.applyTypeFilter);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(14, 31, "vne.search.applyType.all", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.applyTypeOptions);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(20, 34, "vne.btn.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.displayRows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", vneTotalTpl_r16);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 37, "vne.col.no", "NO"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 40, "vne.col.title", "Ti\xEAu \u0111\u1EC1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 43, "vne.col.applyPerson", "Ng\u01B0\u1EDDi xin ph\xE9p"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(38, 46, "vne.col.updateDate", "Ng\xE0y th\u1EF1c hi\u1EC7n"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 49, "vne.col.affirmStatus", "Tr\u1EA1ng th\xE1i duy\u1EC7t"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", vneTable_r15.data);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && vneTable_r15.data.length === 0);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.detailVisible())("nzTitle", ctx.detailModalTitle(ctx.detailData()))("nzBodyStyle", \u0275\u0275pureFunction0(52, _c0))("nzFooter", null);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzTagModule, NzTagComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewNoticeedEmailComponent, [{
    type: Component,
    args: [{ selector: "app-view-noticeed-email", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzSelectModule,
      NzButtonModule,
      NzTagModule,
      NzModalModule,
      NzAlertModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm -->
    <nz-card class="mb-3">
      <form class="row g-3" (ngSubmit)="search()">
        <div class="col-md-4">
          <label class="form-label">{{ 'vne.search.title' | translate:'Ti\xEAu \u0111\u1EC1' }}</label>
          <input nz-input [(ngModel)]="titleFilter" name="titleFilter">
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'vne.search.applyType' | translate:'Lo\u1EA1i \u0111\u01A1n' }}</label>
          <nz-select class="w-100" [(ngModel)]="applyTypeFilter" name="applyTypeFilter" nzAllowClear
                     [nzPlaceHolder]="'vne.search.applyType.all' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let o of applyTypeOptions" [nzValue]="o.value"
                       [nzLabel]="o.labelKey | translate:o.fallback"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-5 d-flex align-items-end justify-content-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'vne.btn.search' | translate:'Tra c\u1EE9u' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <nz-table [nzData]="displayRows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="vneTotalTpl" class="table-nowrap" #vneTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'vne.col.no' | translate:'NO' }}</th>
            <th>{{ 'vne.col.title' | translate:'Ti\xEAu \u0111\u1EC1' }}</th>
            <th class="text-center" nzWidth="20%">{{ 'vne.col.applyPerson' | translate:'Ng\u01B0\u1EDDi xin ph\xE9p' }}</th>
            <th class="text-center" nzWidth="12%">{{ 'vne.col.updateDate' | translate:'Ng\xE0y th\u1EF1c hi\u1EC7n' }}</th>
            <th class="text-center" nzWidth="12%">{{ 'vne.col.affirmStatus' | translate:'Tr\u1EA1ng th\xE1i duy\u1EC7t' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of vneTable.data; let i = index">
            <td class="text-center">{{ i + 1 }}</td>
            <td>
              <a *ngIf="row.affirmUrl; else plainTitle" href="javascript:void(0)" (click)="openDetail(row)">{{ row.title }}</a>
              <ng-template #plainTitle>{{ row.title }}</ng-template>
            </td>
            <td class="text-center">{{ row.applyPersonInfo }}</td>
            <td class="text-center">{{ row.updateDate }}</td>
            <td class="text-center"><nz-tag [nzColor]="statusColor(row.affirmFlag)">{{ row.applyAffirmFlag }}</nz-tag></td>
          </tr>
          <tr *ngIf="!loading() && vneTable.data.length === 0">
            <td colspan="5" class="text-center text-muted py-3">{{ 'vne.msg.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
        </tbody>
        <ng-template #vneTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal chi ti\u1EBFt \u0111\u01A1n (ch\u1EC9 \u0111\u1ECDc) - d\xF9ng chung cho c\u1EA3 3 lo\u1EA1i (t\u0103ng ca / ngh\u1EC9 ph\xE9p / \u0111i\u1EC1u ch\u1EC9nh ch\u1EA5m c\xF4ng) -->
<nz-modal [nzVisible]="detailVisible()" [nzTitle]="detailModalTitle(detailData())" nzWidth="70vw"
          [nzBodyStyle]="{ 'max-height': '75vh', 'overflow-y': 'auto' }"
          (nzOnCancel)="closeDetail()" [nzFooter]="null">
  <ng-container *nzModalContent>
    <nz-alert *ngIf="detailErrorMessage()" nzType="error" [nzMessage]="detailErrorMessage() ?? ''" class="mb-3"></nz-alert>

    <ng-container *ngIf="detailData() as d; else detailLoadingTpl">
      <div class="table-responsive mb-3">
        <table class="table table-bordered table-sm align-middle mb-0">
          <tbody>
            <tr>
              <th class="table-light text-center" style="width:160px;">
                {{ (detailKind === 'ot' ? 'arOtf.applyTitle' : 'applyAtt.subject') | translate:'Ti\xEAu \u0111\u1EC1' }}
              </th>
              <td>{{ detailApplyTitle(d) }}</td>
            </tr>
            <tr>
              <th class="table-light text-center">
                {{ (detailKind === 'ot' ? 'arOtf.applicant' : 'applyAtt.applicant') | translate:'Ng\u01B0\u1EDDi \u0111\u0103ng k\xFD' }}
              </th>
              <td>{{ detailApplicant(d) }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="table-responsive mb-4">
        <table class="table table-bordered table-sm align-middle mb-0">
          <thead class="table-light text-center">
            <tr>
              <th style="width:50px;">{{ 'common.stt' | translate:'STT' }}</th>
              <th style="width:90px;">{{ 'arOtf.approvalSeq' | translate:'Tr\xECnh t\u1EF1 duy\u1EC7t' }}</th>
              <th style="width:110px;">{{ 'arOtf.approvalStatus' | translate:'Tr\u1EA1ng th\xE1i duy\u1EC7t' }}</th>
              <th>{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
              <th>{{ 'arOtf.opinion' | translate:'\xDD ki\u1EBFn' }}</th>
              <th style="width:170px;">{{ 'arOtf.actionTime' | translate:'Th\u1EDDi gian th\u1EF1c hi\u1EC7n' }}</th>
              <th style="width:120px;">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="!d.approvalList?.length">
              <td colspan="7" class="text-center text-muted">{{ 'arOtf.noApprovalData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u ph\xEA duy\u1EC7t' }}</td>
            </tr>
            <tr *ngFor="let item of d.approvalList; let i = index">
              <td class="text-center">{{ approvalStt(item.affirmLevel, i) }}</td>
              <td class="text-center">{{ item.affirmTypeName }}</td>
              <td class="text-center">{{ item.affirmFlagName }}</td>
              <td>{{ item.affirmName }}</td>
              <td>{{ item.affirmContent }}</td>
              <td class="text-center">{{ item.updateDate }}</td>
              <td class="text-center">{{ item.deptName }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h6 class="fw-bold mb-2">{{ (detailKind === 'ot' ? 'arOtf.empInfo' : 'applyAtt.empInfo') | translate:'Th\xF4ng tin nh\xE2n vi\xEAn' }}</h6>
      <div class="table-responsive mb-4">
        <table class="table table-bordered table-sm align-middle mb-0">
          <tbody>
            <tr>
              <th class="table-light text-center" style="width:100px;">{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
              <td>{{ detailEmployeeInfo(d)['localName'] }}</td>
              <th class="table-light text-center" style="width:100px;">{{ 'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
              <td>{{ detailEmployeeInfo(d)['empId'] }}</td>
            </tr>
            <tr>
              <th class="table-light text-center">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
              <td>{{ detailEmployeeInfo(d)['deptName'] }}</td>
              <th class="table-light text-center">{{ 'common.position' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
              <td>{{ detailEmployeeInfo(d)['postGradeName'] }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ng-container *ngIf="detailKind === 'ot'; else leaveInfoTpl">
        <h6 class="fw-bold mb-2">{{ 'arOtf.otInfo' | translate:'Th\xF4ng tin t\u0103ng ca' }}</h6>
        <div class="table-responsive">
          <table class="table table-bordered table-sm align-middle mb-0">
            <thead class="table-light text-center">
              <tr>
                <th>{{ 'arOtf.otType' | translate:'Lo\u1EA1i t\u0103ng ca' }}</th>
                <th style="width:140px;">{{ 'arOtf.otDate' | translate:'Ng\xE0y t\u0103ng ca' }}</th>
                <th style="width:170px;">{{ 'arOtf.otBegin' | translate:'B\u1EAFt \u0111\u1EA7u' }}</th>
                <th style="width:170px;">{{ 'arOtf.otEnd' | translate:'K\u1EBFt th\xFAc' }}</th>
                <th style="width:140px;">{{ 'common.hours' | translate:'S\u1ED1 gi\u1EDD' }}</th>
                <th>{{ 'common.reason' | translate:'L\xFD do' }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">{{ detailInfo(d)['otTypeName'] }}</td>
                <td class="text-center">{{ detailInfo(d)['applyOtDate'] }}</td>
                <td class="text-center">{{ detailInfo(d)['detailFromDateTime'] }}</td>
                <td class="text-center">{{ detailInfo(d)['detailToDateTime'] }}</td>
                <td class="text-center">{{ detailInfo(d)['otApplyHour'] }}</td>
                <td class="text-center">{{ detailInfo(d)['applyOtRemark'] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ng-container>
      <ng-template #leaveInfoTpl>
        <h6 class="fw-bold mb-2">{{ 'applyAtt.leaveInfo' | translate:'Th\xF4ng tin xin ph\xE9p' }}</h6>
        <div class="table-responsive">
          <table class="table table-bordered table-sm align-middle mb-0">
            <thead class="table-light text-center">
              <tr>
                <th>{{ 'applyAtt.leaveTypeFull' | translate:'Lo\u1EA1i ngh\u1EC9 ph\xE9p' }}</th>
                <th style="width:170px;">{{ 'common.startTime' | translate:'Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u' }}</th>
                <th style="width:170px;">{{ 'common.endTime' | translate:'Th\u1EDDi gian k\u1EBFt th\xFAc' }}</th>
                <th style="width:140px;">{{ 'applyAtt.leaveDuration' | translate:'Th\u1EDDi l\u01B0\u1EE3ng' }}</th>
                <th>{{ 'common.reason' | translate:'L\xFD do' }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">{{ detailInfo(d)['leaveTypeName'] }}</td>
                <td class="text-center">{{ detailInfo(d)['leaveFromTime'] }}</td>
                <td class="text-center">{{ detailInfo(d)['leaveToTime'] }}</td>
                <td class="text-center">{{ detailDuration(d) }}</td>
                <td class="text-center">{{ detailInfo(d)['leaveReason'] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ng-template>

      <div class="d-flex justify-content-end mt-3">
        <button nz-button type="button" (click)="closeDetail()">{{ 'common.close' | translate:'\u0110\xF3ng' }}</button>
      </div>
    </ng-container>
    <ng-template #detailLoadingTpl>
      <div class="text-center text-muted py-3" *ngIf="detailLoading()">
        {{ 'arOtf.loadingData' | translate:'\u0110ang t\u1EA3i d\u1EEF li\u1EC7u...' }}
      </div>
    </ng-template>
  </ng-container>
</nz-modal>
` }]
  }], () => [{ type: ViewNoticeedEmailService }, { type: I18nService }, { type: NzMessageService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewNoticeedEmailComponent, { className: "ViewNoticeedEmailComponent", filePath: "src/app/view-noticeed-email/view-noticeed-email.component.ts", lineNumber: 85 });
})();
export {
  ViewNoticeedEmailComponent
};
//# debugId=2a1cd94c-5724-5270-b972-49f7919f5393
//# sourceMappingURL=chunk-W2T6WGIU.js.map
