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
  __spreadProps,
  __spreadValues,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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

// src/app/view-approval-email/view-approval-email.service.ts
var API_BASE = "/ess/infoApply/api/approvalEmail";
var OT_DETAIL_URL = "/ar/attendanceMintenance/api/overtime/detail";
var LEAVE_DETAIL_URL = "/ar/attendanceMintenance/api/leaveApply/detail";
var ATTENDANCE_EX_DETAIL_URL = "/ess/infoApplyAttendance/api/checkAttendanceEx/detail";
var ViewApprovalEmailService = class _ViewApprovalEmailService {
  constructor(http) {
    this.http = http;
  }
  http;
  getList() {
    return this.http.get(`${API_BASE}/list`, { withCredentials: true });
  }
  execute(items) {
    return this.http.post(`${API_BASE}/execute`, { items }, { withCredentials: true });
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
  static \u0275fac = function ViewApprovalEmailService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewApprovalEmailService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewApprovalEmailService, factory: _ViewApprovalEmailService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewApprovalEmailService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-approval-email/view-approval-email.component.ts
var _c0 = () => ({ "max-height": "75vh", "overflow-y": "auto" });
var _c1 = () => ({ standalone: true });
function ViewApprovalEmailComponent_nz_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 35);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const o_r2 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r2.value)("nzLabel", \u0275\u0275pipeBind2(1, 2, o_r2.labelKey, o_r2.fallback));
  }
}
function ViewApprovalEmailComponent_nz_alert_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 36);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r2.errorMessage() ?? "");
  }
}
function ViewApprovalEmailComponent_tr_53_a_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 41);
    \u0275\u0275listener("click", function ViewApprovalEmailComponent_tr_53_a_6_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r6);
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
function ViewApprovalEmailComponent_tr_53_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r5.title);
  }
}
function ViewApprovalEmailComponent_tr_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 37)(4, "label", 38);
    \u0275\u0275twoWayListener("ngModelChange", function ViewApprovalEmailComponent_tr_53_Template_label_ngModelChange_4_listener($event) {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(row_r5.selected, $event) || (row_r5.selected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275template(6, ViewApprovalEmailComponent_tr_53_a_6_Template, 2, 1, "a", 39)(7, ViewApprovalEmailComponent_tr_53_ng_template_7_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 37);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 37);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 37)(14, "nz-tag", 40);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const i_r7 = ctx.index;
    const plainTitle_r8 = \u0275\u0275reference(8);
    \u0275\u0275classProp("table-warning", row_r5.selected);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r7 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", row_r5.selected);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(10, _c1));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r5.affirmUrl)("ngIfElse", plainTitle_r8);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r5.applyPersonInfo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.updateDate);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r5.applyAffirmFlag);
  }
}
function ViewApprovalEmailComponent_tr_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 42);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "vae.msg.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewApprovalEmailComponent_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r9 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r9, " ");
  }
}
function ViewApprovalEmailComponent_ng_container_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "label", 43);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "textarea", 44);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewApprovalEmailComponent_ng_container_61_Template_textarea_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.actionRemark, $event) || (ctx_r2.actionRemark = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 4, "vae.modal.remarkLabel", "N\u1ED9i dung ph\xEA duy\u1EC7t"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.actionRemark);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(10, _c1))("placeholder", \u0275\u0275pipeBind2(5, 7, "vae.modal.remarkPlaceholder", "Nh\u1EADp n\u1ED9i dung ph\xEA duy\u1EC7t (t\xF9y ch\u1ECDn)"));
    \u0275\u0275control();
  }
}
function ViewApprovalEmailComponent_ng_container_63_nz_alert_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 36);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzMessage", ctx_r2.detailErrorMessage() ?? "");
  }
}
function ViewApprovalEmailComponent_ng_container_63_ng_container_2_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 61);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "arOtf.noApprovalData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u ph\xEA duy\u1EC7t"));
  }
}
function ViewApprovalEmailComponent_ng_container_63_ng_container_2_tr_43_input_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function ViewApprovalEmailComponent_ng_container_63_ng_container_2_tr_43_input_10_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.pendingOpinion, $event) || (ctx_r2.pendingOpinion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.pendingOpinion);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(2, _c1));
    \u0275\u0275control();
  }
}
function ViewApprovalEmailComponent_ng_container_63_ng_container_2_tr_43_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const item_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(item_r13.affirmContent);
  }
}
function ViewApprovalEmailComponent_ng_container_63_ng_container_2_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 37);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275template(10, ViewApprovalEmailComponent_ng_container_63_ng_container_2_tr_43_input_10_Template, 1, 3, "input", 62)(11, ViewApprovalEmailComponent_ng_container_63_ng_container_2_tr_43_ng_template_11_Template, 1, 1, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 37);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 37);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const opinionText_r15 = \u0275\u0275reference(12);
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.approvalStt(item_r13.affirmLevel, i_r14));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r13.affirmTypeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r13.affirmFlagName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r13.affirmName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.isPendingApprovalRow(item_r13.affirmPersonId, item_r13.affirmFlag))("ngIfElse", opinionText_r15);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r13.updateDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r13.deptName);
  }
}
function ViewApprovalEmailComponent_ng_container_63_ng_container_2_ng_container_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h6", 57);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 64)(5, "table", 47)(6, "thead", 49)(7, "tr")(8, "th");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 65);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 54);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 54);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 65);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "tbody")(27, "tr")(28, "td", 37);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "td", 37);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "td", 37);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "td", 37);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "td", 37);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "td", 37);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const d_r16 = \u0275\u0275nextContext().ngIf;
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
    \u0275\u0275textInterpolate(ctx_r2.detailInfo(d_r16)["otTypeName"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.detailInfo(d_r16)["applyOtDate"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.detailInfo(d_r16)["detailFromDateTime"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.detailInfo(d_r16)["detailToDateTime"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.detailInfo(d_r16)["otApplyHour"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.detailInfo(d_r16)["applyOtRemark"]);
  }
}
function ViewApprovalEmailComponent_ng_container_63_ng_container_2_ng_template_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h6", 57);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 64)(4, "table", 47)(5, "thead", 49)(6, "tr")(7, "th");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 54);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 54);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 65);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody")(23, "tr")(24, "td", 37);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td", 37);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "td", 37);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "td", 37);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "td", 37);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const d_r16 = \u0275\u0275nextContext().ngIf;
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
    \u0275\u0275textInterpolate(ctx_r2.detailInfo(d_r16)["leaveTypeName"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.detailInfo(d_r16)["leaveFromTime"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.detailInfo(d_r16)["leaveToTime"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.detailDuration(d_r16));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.detailInfo(d_r16)["leaveReason"]);
  }
}
function ViewApprovalEmailComponent_ng_container_63_ng_container_2_ng_container_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 19);
    \u0275\u0275listener("click", function ViewApprovalEmailComponent_ng_container_63_ng_container_2_ng_container_76_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.doDetailAffirm(1));
    });
    \u0275\u0275element(2, "i", 20);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 21);
    \u0275\u0275listener("click", function ViewApprovalEmailComponent_ng_container_63_ng_container_2_ng_container_76_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.doDetailAffirm(2));
    });
    \u0275\u0275element(6, "i", 22);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 2, "vae.btn.approve", "Duy\u1EC7t"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 5, "vae.btn.reject", "T\u1EEB ch\u1ED1i"), " ");
  }
}
function ViewApprovalEmailComponent_ng_container_63_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 46)(2, "table", 47)(3, "tbody")(4, "tr")(5, "th", 48);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "tr")(11, "th", 49);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(16, "div", 50)(17, "table", 47)(18, "thead", 49)(19, "tr")(20, "th", 51);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 52);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 53);
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
    \u0275\u0275elementStart(35, "th", 54);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th", 55);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "tbody");
    \u0275\u0275template(42, ViewApprovalEmailComponent_ng_container_63_ng_container_2_tr_42_Template, 4, 4, "tr", 31)(43, ViewApprovalEmailComponent_ng_container_63_ng_container_2_tr_43_Template, 17, 8, "tr", 56);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "h6", 57);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 50)(48, "table", 47)(49, "tbody")(50, "tr")(51, "th", 58);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "td");
    \u0275\u0275text(55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "th", 58);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "td");
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "tr")(62, "th", 49);
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "td");
    \u0275\u0275text(66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "th", 49);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "td");
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275template(72, ViewApprovalEmailComponent_ng_container_63_ng_container_2_ng_container_72_Template, 40, 34, "ng-container", 45)(73, ViewApprovalEmailComponent_ng_container_63_ng_container_2_ng_template_73_Template, 34, 29, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(75, "div", 59);
    \u0275\u0275template(76, ViewApprovalEmailComponent_ng_container_63_ng_container_2_ng_container_76_Template, 9, 8, "ng-container", 31);
    \u0275\u0275elementStart(77, "button", 60);
    \u0275\u0275listener("click", function ViewApprovalEmailComponent_ng_container_63_ng_container_2_Template_button_click_77_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeDetail());
    });
    \u0275\u0275text(78);
    \u0275\u0275pipe(79, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const d_r16 = ctx.ngIf;
    const leaveInfoTpl_r18 = \u0275\u0275reference(74);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 26, ctx_r2.detailKind === "ot" ? "arOtf.applyTitle" : "applyAtt.subject", "Ti\xEAu \u0111\u1EC1"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.detailApplyTitle(d_r16));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(13, 29, ctx_r2.detailKind === "ot" ? "arOtf.applicant" : "applyAtt.applicant", "Ng\u01B0\u1EDDi \u0111\u0103ng k\xFD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.detailApplicant(d_r16));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 32, "common.stt", "STT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 35, "arOtf.approvalSeq", "Tr\xECnh t\u1EF1 duy\u1EC7t"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 38, "arOtf.approvalStatus", "Tr\u1EA1ng th\xE1i duy\u1EC7t"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 41, "common.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 44, "arOtf.opinion", "\xDD ki\u1EBFn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 47, "arOtf.actionTime", "Th\u1EDDi gian th\u1EF1c hi\u1EC7n"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 50, "common.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !d_r16.approvalList?.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", d_r16.approvalList);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 53, ctx_r2.detailKind === "ot" ? "arOtf.empInfo" : "applyAtt.empInfo", "Th\xF4ng tin nh\xE2n vi\xEAn"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(53, 56, "common.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.detailEmployeeInfo(d_r16)["localName"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(58, 59, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.detailEmployeeInfo(d_r16)["empId"]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(64, 62, "common.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.detailEmployeeInfo(d_r16)["deptName"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 65, "common.position", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.detailEmployeeInfo(d_r16)["postGradeName"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.detailKind === "ot")("ngIfElse", leaveInfoTpl_r18);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.detailCanAffirm);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(79, 68, "common.close", "\u0110\xF3ng"));
  }
}
function ViewApprovalEmailComponent_ng_container_63_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "arOtf.loadingData", "\u0110ang t\u1EA3i d\u1EEF li\u1EC7u..."), " ");
  }
}
function ViewApprovalEmailComponent_ng_container_63_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ViewApprovalEmailComponent_ng_container_63_ng_template_3_div_0_Template, 3, 4, "div", 66);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r2.detailLoading());
  }
}
function ViewApprovalEmailComponent_ng_container_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ViewApprovalEmailComponent_ng_container_63_nz_alert_1_Template, 1, 1, "nz-alert", 23)(2, ViewApprovalEmailComponent_ng_container_63_ng_container_2_Template, 80, 71, "ng-container", 45)(3, ViewApprovalEmailComponent_ng_container_63_ng_template_3_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const detailLoadingTpl_r19 = \u0275\u0275reference(4);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.detailErrorMessage());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.detailData())("ngIfElse", detailLoadingTpl_r19);
  }
}
var I18N_KEYS = [
  "vae.search.title",
  "vae.search.applyType",
  "vae.search.applyType.all",
  "vae.search.applyType.ot",
  "vae.search.applyType.leave",
  "vae.search.applyType.anomaly",
  "vae.btn.search",
  "vae.btn.approve",
  "vae.btn.reject",
  "vae.col.no",
  "vae.col.title",
  "vae.col.applyPerson",
  "vae.col.updateDate",
  "vae.col.affirmStatus",
  "vae.modal.approve.title",
  "vae.modal.reject.title",
  "vae.modal.remarkLabel",
  "vae.modal.remarkPlaceholder",
  "vae.msg.noSelect",
  "vae.msg.approveSuccess",
  "vae.msg.rejectSuccess",
  "vae.msg.executeFail",
  "vae.msg.noData",
  "vae.msg.loadError",
  "common.close",
  "common.confirm",
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
  { value: "31", labelKey: "vae.search.applyType.ot", fallback: "T\u0103ng ca" },
  { value: "21", labelKey: "vae.search.applyType.leave", fallback: "Ngh\u1EC9 ph\xE9p" },
  { value: "218197", labelKey: "vae.search.applyType.anomaly", fallback: "Ngh\u1EC9 b\u1EA5t th\u01B0\u1EDDng" }
];
var ViewApprovalEmailComponent = class _ViewApprovalEmailComponent {
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
  actionModalVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "actionModalVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  actionFlag = 1;
  actionRemark = "";
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
  pendingOpinion = "";
  allRows = [];
  affirmCtx = null;
  showError(msg) {
    this.message.error(msg, { nzDuration: 6e3 });
  }
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
        this.allRows = (list ?? []).map((r) => __spreadProps(__spreadValues({}, r), { selected: false }));
        this.applyFilter();
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("vae.msg.loadError", "L\u1ED7i t\u1EA3i d\u1EEF li\u1EC7u"));
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
  // ==================== Chọn dòng (checkbox) ====================
  get allSelected() {
    const rows = this.displayRows();
    return rows.length > 0 && rows.every((r) => r.selected);
  }
  get someSelected() {
    return this.displayRows().some((r) => r.selected) && !this.allSelected;
  }
  toggleSelectAll(checked) {
    this.displayRows().forEach((r) => r.selected = checked);
  }
  // ==================== Duyệt / Từ chối hàng loạt ====================
  openAction(flag) {
    const selected = this.displayRows().filter((r) => r.selected);
    if (!selected.length) {
      this.message.warning(this.i18n.t("vae.msg.noSelect", "Vui l\xF2ng ch\u1ECDn \xEDt nh\u1EA5t m\u1ED9t \u0111\u01A1n."));
      return;
    }
    this.actionFlag = flag;
    this.actionRemark = flag === 1 ? "Ok" : "Reject";
    this.actionModalVisible.set(true);
  }
  cancelAction() {
    this.actionModalVisible.set(false);
  }
  confirmAction() {
    const selected = this.displayRows().filter((r) => r.selected);
    const content = this.actionRemark.trim() || (this.actionFlag === 1 ? "Ok" : "Reject");
    const items = selected.map((r) => ({
      applyNo: r.applyNo,
      applyType: r.applyType,
      applyFlag: r.applyFlag,
      affirmLevel: r.affirmLevel,
      flag: this.actionFlag,
      affirmContent: content
    }));
    this.actionModalVisible.set(false);
    this.runExecute(items, this.actionFlag);
  }
  runExecute(items, flag) {
    this.api.execute(items).subscribe({
      next: (res) => {
        if (res.success) {
          this.message.success(flag === 1 ? this.i18n.t("vae.msg.approveSuccess", "Ph\xEA duy\u1EC7t th\xE0nh c\xF4ng!") : this.i18n.t("vae.msg.rejectSuccess", "T\u1EEB ch\u1ED1i th\xE0nh c\xF4ng!"));
        } else {
          this.showError(res.message || this.i18n.t("vae.msg.executeFail", "C\xF3 l\u1ED7i x\u1EA3y ra trong qu\xE1 tr\xECnh x\u1EED l\xFD."));
        }
        this.loadList();
      },
      error: () => {
        this.showError(this.i18n.t("vae.msg.executeFail", "C\xF3 l\u1ED7i x\u1EA3y ra trong qu\xE1 tr\xECnh x\u1EED l\xFD."));
        this.loadList();
      }
    });
  }
  // ==================== Modal chi tiết đơn (gộp OT/Nghỉ phép/Điều chỉnh chấm công) ====================
  openDetail(row) {
    const url = row.affirmUrl || "";
    const kind = url.indexOf("viewApprovaledOt") !== -1 ? "ot" : url.indexOf("viewApprovaledLeave") !== -1 ? "leave" : url.indexOf("viewAttendanceEx") !== -1 ? "attendanceEx" : null;
    if (!kind || !row.applyNo) {
      this.message.warning(this.i18n.t("arOtf.msg.noApplyNo", "Kh\xF4ng t\xECm th\u1EA5y s\u1ED1 \u0111\u01A1n \u0111\u1EC3 xem chi ti\u1EBFt"));
      return;
    }
    this.detailKind = kind;
    this.affirmCtx = {
      applyNo: row.applyNo,
      applyType: row.applyType,
      applyFlag: row.applyFlag,
      affirmLevel: row.affirmLevel,
      affirmPersonId: row.affirmPersonId,
      affirmFlag: row.affirmFlag
    };
    this.pendingOpinion = "";
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
  /** Người dùng hiện tại có đúng là người đang chờ duyệt ở mức hiện tại của đơn đang xem không - đúng
   *  điều kiện canAffirm ở cả 3 script gốc (fromApprovalEmail luôn true vì trang này chỉ mở modal từ
   *  danh sách chờ duyệt). */
  get detailCanAffirm() {
    return !!(this.affirmCtx && this.affirmCtx.affirmPersonId && String(this.affirmCtx.affirmFlag) === "0");
  }
  isPendingApprovalRow(affirmPersonId, affirmFlag) {
    return this.detailCanAffirm && affirmPersonId === this.affirmCtx.affirmPersonId && String(affirmFlag) === "0";
  }
  doDetailAffirm(flag) {
    if (!this.affirmCtx)
      return;
    const content = this.pendingOpinion.trim() || (flag === 1 ? "Ok" : "Reject");
    const items = [
      {
        applyNo: this.affirmCtx.applyNo,
        applyType: this.affirmCtx.applyType,
        applyFlag: this.affirmCtx.applyFlag,
        affirmLevel: this.affirmCtx.affirmLevel,
        flag,
        affirmContent: content
      }
    ];
    this.detailVisible.set(false);
    this.runExecute(items, flag);
  }
  static \u0275fac = function ViewApprovalEmailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewApprovalEmailComponent)(\u0275\u0275directiveInject(ViewApprovalEmailService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewApprovalEmailComponent, selectors: [["app-view-approval-email"]], decls: 64, vars: 76, consts: [["vaeTable", ""], ["vaeTotalTpl", ""], ["plainTitle", ""], ["detailLoadingTpl", ""], ["leaveInfoTpl", ""], ["opinionText", ""], [1, "row"], [1, "col-12"], [1, "mb-3"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-4"], [1, "form-label"], ["nz-input", "", "name", "titleFilter", 3, "ngModelChange", "ngModel"], [1, "col-md-3"], ["name", "applyTypeFilter", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col-md-5", "d-flex", "align-items-end", "justify-content-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "nzType", "primary", "type", "button", 2, "background-color", "#2fb344", "border-color", "#2fb344", 3, "click"], [1, "bx", "bx-check-circle"], ["nz-button", "", "nzDanger", "", "type", "button", 3, "click"], [1, "bx", "bx-x-circle"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [1, "table-nowrap", 3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "50px", 1, "text-center"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel", "nzIndeterminate"], ["nzWidth", "20%", 1, "text-center"], ["nzWidth", "12%", 1, "text-center"], [3, "table-warning", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkText", "nzCancelText"], [4, "nzModalContent"], ["nzWidth", "70vw", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzBodyStyle", "nzFooter"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], [1, "text-center"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0)", 3, "click", 4, "ngIf", "ngIfElse"], ["nzColor", "gold"], ["href", "javascript:void(0)", 3, "click"], ["colspan", "6", 1, "text-center", "text-muted", "py-3"], [1, "form-label", "fw-semibold"], ["nz-input", "", "rows", "3", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [4, "ngIf", "ngIfElse"], [1, "table-responsive", "mb-3"], [1, "table", "table-bordered", "table-sm", "align-middle", "mb-0"], [1, "table-light", "text-center", 2, "width", "160px"], [1, "table-light", "text-center"], [1, "table-responsive", "mb-4"], [2, "width", "50px"], [2, "width", "90px"], [2, "width", "110px"], [2, "width", "170px"], [2, "width", "120px"], [4, "ngFor", "ngForOf"], [1, "fw-bold", "mb-2"], [1, "table-light", "text-center", 2, "width", "100px"], [1, "d-flex", "justify-content-end", "gap-2", "mt-3"], ["nz-button", "", "type", "button", 3, "click"], ["colspan", "7", 1, "text-center", "text-muted"], ["nz-input", "", 3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngIf", "ngIfElse"], ["nz-input", "", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "table-responsive"], [2, "width", "140px"], ["class", "text-center text-muted py-3", 4, "ngIf"], [1, "text-center", "text-muted", "py-3"]], template: function ViewApprovalEmailComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "nz-card", 8)(3, "form", 9);
      \u0275\u0275listener("ngSubmit", function ViewApprovalEmailComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 10)(5, "label", 11);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function ViewApprovalEmailComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.titleFilter, $event) || (ctx.titleFilter = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 13)(10, "label", 11);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "nz-select", 14);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewApprovalEmailComponent_Template_nz_select_ngModelChange_13_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.applyTypeFilter, $event) || (ctx.applyTypeFilter = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(15, ViewApprovalEmailComponent_nz_option_15_Template, 2, 5, "nz-option", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 16)(17, "button", 17);
      \u0275\u0275element(18, "i", 18);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 19);
      \u0275\u0275listener("click", function ViewApprovalEmailComponent_Template_button_click_21_listener() {
        return ctx.openAction(1);
      });
      \u0275\u0275element(22, "i", 20);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "button", 21);
      \u0275\u0275listener("click", function ViewApprovalEmailComponent_Template_button_click_25_listener() {
        return ctx.openAction(2);
      });
      \u0275\u0275element(26, "i", 22);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "nz-card");
      \u0275\u0275template(30, ViewApprovalEmailComponent_nz_alert_30_Template, 1, 1, "nz-alert", 23);
      \u0275\u0275elementStart(31, "nz-table", 24, 0)(33, "thead")(34, "tr")(35, "th", 25);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "th", 26)(39, "label", 27);
      \u0275\u0275listener("ngModelChange", function ViewApprovalEmailComponent_Template_label_ngModelChange_39_listener($event) {
        return ctx.toggleSelectAll($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "th");
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "th", 28);
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "th", 29);
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "th", 29);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "tbody");
      \u0275\u0275template(53, ViewApprovalEmailComponent_tr_53_Template, 16, 11, "tr", 30)(54, ViewApprovalEmailComponent_tr_54_Template, 4, 4, "tr", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275template(55, ViewApprovalEmailComponent_ng_template_55_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(57, "nz-modal", 32);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275pipe(59, "translate");
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewApprovalEmailComponent_Template_nz_modal_nzOnCancel_57_listener() {
        return ctx.cancelAction();
      })("nzOnOk", function ViewApprovalEmailComponent_Template_nz_modal_nzOnOk_57_listener() {
        return ctx.confirmAction();
      });
      \u0275\u0275template(61, ViewApprovalEmailComponent_ng_container_61_Template, 6, 11, "ng-container", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "nz-modal", 34);
      \u0275\u0275listener("nzOnCancel", function ViewApprovalEmailComponent_Template_nz_modal_nzOnCancel_62_listener() {
        return ctx.closeDetail();
      });
      \u0275\u0275template(63, ViewApprovalEmailComponent_ng_container_63_Template, 5, 3, "ng-container", 33);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const vaeTable_r20 = \u0275\u0275reference(32);
      const vaeTotalTpl_r21 = \u0275\u0275reference(56);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 33, "vae.search.title", "Ti\xEAu \u0111\u1EC1"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.titleFilter);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 36, "vae.search.applyType", "Lo\u1EA1i \u0111\u01A1n"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.applyTypeFilter);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(14, 39, "vae.search.applyType.all", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.applyTypeOptions);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(20, 42, "vae.btn.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(24, 45, "vae.btn.approve", "Duy\u1EC7t"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(28, 48, "vae.btn.reject", "T\u1EEB ch\u1ED1i"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.displayRows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", vaeTotalTpl_r21);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 51, "vae.col.no", "NO"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.allSelected)("nzIndeterminate", ctx.someSelected);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 54, "vae.col.title", "Ti\xEAu \u0111\u1EC1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 57, "vae.col.applyPerson", "Ng\u01B0\u1EDDi xin ph\xE9p"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 60, "vae.col.updateDate", "Ng\xE0y th\u1EF1c hi\u1EC7n"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 63, "vae.col.affirmStatus", "Tr\u1EA1ng th\xE1i duy\u1EC7t"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", vaeTable_r20.data);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && vaeTable_r20.data.length === 0);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.actionModalVisible())("nzTitle", \u0275\u0275pipeBind2(58, 66, ctx.actionFlag === 1 ? "vae.modal.approve.title" : "vae.modal.reject.title", ctx.actionFlag === 1 ? "X\xE1c nh\u1EADn duy\u1EC7t" : "X\xE1c nh\u1EADn t\u1EEB ch\u1ED1i"))("nzOkText", \u0275\u0275pipeBind2(59, 69, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(60, 72, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(5);
      \u0275\u0275property("nzVisible", ctx.detailVisible())("nzTitle", ctx.detailModalTitle(ctx.detailData()))("nzBodyStyle", \u0275\u0275pureFunction0(75, _c0))("nzFooter", null);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzCheckboxModule, NzCheckboxComponent, NzTagModule, NzTagComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\n.table-warning[_ngcontent-%COMP%] {\n  background-color: #fff3cd;\n}\n/*# sourceMappingURL=view-approval-email.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewApprovalEmailComponent, [{
    type: Component,
    args: [{ selector: "app-view-approval-email", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzSelectModule,
      NzButtonModule,
      NzCheckboxModule,
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
          <label class="form-label">{{ 'vae.search.title' | translate:'Ti\xEAu \u0111\u1EC1' }}</label>
          <input nz-input [(ngModel)]="titleFilter" name="titleFilter">
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'vae.search.applyType' | translate:'Lo\u1EA1i \u0111\u01A1n' }}</label>
          <nz-select class="w-100" [(ngModel)]="applyTypeFilter" name="applyTypeFilter" nzAllowClear
                     [nzPlaceHolder]="'vae.search.applyType.all' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let o of applyTypeOptions" [nzValue]="o.value"
                       [nzLabel]="o.labelKey | translate:o.fallback"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-5 d-flex align-items-end justify-content-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'vae.btn.search' | translate:'Tra c\u1EE9u' }}
          </button>
          <button nz-button nzType="primary" type="button" (click)="openAction(1)"
                  style="background-color:#2fb344;border-color:#2fb344;">
            <i class="bx bx-check-circle"></i> {{ 'vae.btn.approve' | translate:'Duy\u1EC7t' }}
          </button>
          <button nz-button nzDanger type="button" (click)="openAction(2)">
            <i class="bx bx-x-circle"></i> {{ 'vae.btn.reject' | translate:'T\u1EEB ch\u1ED1i' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <nz-table [nzData]="displayRows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="vaeTotalTpl" class="table-nowrap" #vaeTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'vae.col.no' | translate:'NO' }}</th>
            <th class="text-center" nzWidth="50px">
              <label nz-checkbox [ngModel]="allSelected" [nzIndeterminate]="someSelected"
                     (ngModelChange)="toggleSelectAll($event)"></label>
            </th>
            <th>{{ 'vae.col.title' | translate:'Ti\xEAu \u0111\u1EC1' }}</th>
            <th class="text-center" nzWidth="20%">{{ 'vae.col.applyPerson' | translate:'Ng\u01B0\u1EDDi xin ph\xE9p' }}</th>
            <th class="text-center" nzWidth="12%">{{ 'vae.col.updateDate' | translate:'Ng\xE0y th\u1EF1c hi\u1EC7n' }}</th>
            <th class="text-center" nzWidth="12%">{{ 'vae.col.affirmStatus' | translate:'Tr\u1EA1ng th\xE1i duy\u1EC7t' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of vaeTable.data; let i = index" [class.table-warning]="row.selected">
            <td class="text-center">{{ i + 1 }}</td>
            <td class="text-center">
              <label nz-checkbox [(ngModel)]="row.selected" [ngModelOptions]="{ standalone: true }"></label>
            </td>
            <td>
              <a *ngIf="row.affirmUrl; else plainTitle" href="javascript:void(0)" (click)="openDetail(row)">{{ row.title }}</a>
              <ng-template #plainTitle>{{ row.title }}</ng-template>
            </td>
            <td class="text-center">{{ row.applyPersonInfo }}</td>
            <td class="text-center">{{ row.updateDate }}</td>
            <td class="text-center"><nz-tag nzColor="gold">{{ row.applyAffirmFlag }}</nz-tag></td>
          </tr>
          <tr *ngIf="!loading() && vaeTable.data.length === 0">
            <td colspan="6" class="text-center text-muted py-3">{{ 'vae.msg.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
        </tbody>
        <ng-template #vaeTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal x\xE1c nh\u1EADn Duy\u1EC7t / T\u1EEB ch\u1ED1i h\xE0ng lo\u1EA1t -->
<nz-modal [nzVisible]="actionModalVisible()"
          [nzTitle]="(actionFlag === 1 ? 'vae.modal.approve.title' : 'vae.modal.reject.title') | translate:(actionFlag === 1 ? 'X\xE1c nh\u1EADn duy\u1EC7t' : 'X\xE1c nh\u1EADn t\u1EEB ch\u1ED1i')"
          (nzOnCancel)="cancelAction()" (nzOnOk)="confirmAction()"
          [nzOkText]="'common.confirm' | translate:'X\xE1c nh\u1EADn'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <label class="form-label fw-semibold">{{ 'vae.modal.remarkLabel' | translate:'N\u1ED9i dung ph\xEA duy\u1EC7t' }}</label>
    <textarea nz-input rows="3" [(ngModel)]="actionRemark" [ngModelOptions]="{ standalone: true }"
              [placeholder]="'vae.modal.remarkPlaceholder' | translate:'Nh\u1EADp n\u1ED9i dung ph\xEA duy\u1EC7t (t\xF9y ch\u1ECDn)'"></textarea>
  </ng-container>
</nz-modal>

<!-- Modal chi ti\u1EBFt \u0111\u01A1n - d\xF9ng chung cho c\u1EA3 3 lo\u1EA1i (t\u0103ng ca / ngh\u1EC9 ph\xE9p / \u0111i\u1EC1u ch\u1EC9nh ch\u1EA5m c\xF4ng) -->
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
              <td>
                <input *ngIf="isPendingApprovalRow(item.affirmPersonId, item.affirmFlag); else opinionText"
                       nz-input [(ngModel)]="pendingOpinion" [ngModelOptions]="{ standalone: true }">
                <ng-template #opinionText>{{ item.affirmContent }}</ng-template>
              </td>
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

      <div class="d-flex justify-content-end gap-2 mt-3">
        <ng-container *ngIf="detailCanAffirm">
          <button nz-button nzType="primary" type="button" (click)="doDetailAffirm(1)"
                  style="background-color:#2fb344;border-color:#2fb344;">
            <i class="bx bx-check-circle"></i> {{ 'vae.btn.approve' | translate:'Duy\u1EC7t' }}
          </button>
          <button nz-button nzDanger type="button" (click)="doDetailAffirm(2)">
            <i class="bx bx-x-circle"></i> {{ 'vae.btn.reject' | translate:'T\u1EEB ch\u1ED1i' }}
          </button>
        </ng-container>
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
`, styles: ["/* src/app/view-approval-email/view-approval-email.component.css */\n.table-warning {\n  background-color: #fff3cd;\n}\n/*# sourceMappingURL=view-approval-email.component.css.map */\n"] }]
  }], () => [{ type: ViewApprovalEmailService }, { type: I18nService }, { type: NzMessageService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewApprovalEmailComponent, { className: "ViewApprovalEmailComponent", filePath: "src/app/view-approval-email/view-approval-email.component.ts", lineNumber: 87 });
})();
export {
  ViewApprovalEmailComponent
};
//# debugId=63b9225a-5112-5ed7-aeef-0262707952ff
//# sourceMappingURL=chunk-6FIFY6JP.js.map
