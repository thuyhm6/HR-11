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
  __spreadProps,
  __spreadValues,
  formatDate,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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

// src/app/leave-confirm/leave-confirm.service.ts
var API_BASE = "/ess/arConfirm/api/leaveConfirm";
var DETAIL_URL = "/ar/attendanceMintenance/api/leaveApply/detail";
var LEAVE_TYPE_PARENT_CODE = "21";
var LeaveConfirmService = class _LeaveConfirmService {
  constructor(http) {
    this.http = http;
  }
  http;
  getPageList(params) {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      httpParams = httpParams.set(key, String(value));
    }
    return this.http.get(`${API_BASE}/list`, {
      params: httpParams,
      withCredentials: true
    });
  }
  confirm(applyNo, flag, hrComment) {
    return this.http.post(`${API_BASE}/confirm`, { applyNo, flag, hrComment }, { withCredentials: true });
  }
  confirmBatch(applyNos, flag, hrComment) {
    return this.http.post(`${API_BASE}/confirmBatch`, { applyNos, flag, hrComment }, { withCredentials: true });
  }
  getDetail(applyNo) {
    const params = new HttpParams().set("applyNo", applyNo).set("applyType", "");
    return this.http.get(DETAIL_URL, { params, withCredentials: true });
  }
  getLeaveTypeOptions() {
    const params = new HttpParams().set("parentCodeNo", LEAVE_TYPE_PARENT_CODE);
    return this.http.get("/sys/api/getCode/list", { params, withCredentials: true });
  }
  static \u0275fac = function LeaveConfirmService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LeaveConfirmService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LeaveConfirmService, factory: _LeaveConfirmService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeaveConfirmService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/leave-confirm/leave-confirm.component.ts
var _c0 = () => ({ x: "2000px", y: "calc(100vh - 420px)" });
var _c1 = () => ({ "max-height": "75vh", "overflow-y": "auto" });
var _c2 = () => ({ standalone: true });
function LeaveConfirmComponent_nz_option_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 44);
  }
  if (rf & 2) {
    const o_r2 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r2.codeNo)("nzLabel", o_r2.codeName);
  }
}
function LeaveConfirmComponent_nz_option_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 44);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const o_r3 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r3.value)("nzLabel", \u0275\u0275pipeBind2(1, 2, o_r3.labelKey, o_r3.fallback));
  }
}
function LeaveConfirmComponent_nz_alert_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 45);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r3.errorMessage() ?? "");
  }
}
function LeaveConfirmComponent_tr_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 46)(2, "label", 47);
    \u0275\u0275twoWayListener("ngModelChange", function LeaveConfirmComponent_tr_101_Template_label_ngModelChange_2_listener($event) {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(row_r6.selected, $event) || (row_r6.selected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 46);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 46);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "a", 48);
    \u0275\u0275listener("click", function LeaveConfirmComponent_tr_101_Template_a_click_8_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openDetail(row_r6));
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 46);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 46);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 46);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td", 46)(27, "nz-tag", 49);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "td")(31, "input", 50);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function LeaveConfirmComponent_tr_101_Template_input_ngModelChange_31_listener($event) {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(row_r6.hrComment, $event) || (row_r6.hrComment = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "td", 46)(34, "button", 51);
    \u0275\u0275listener("click", function LeaveConfirmComponent_tr_101_Template_button_click_34_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.confirmLine(row_r6, "1"));
    });
    \u0275\u0275element(35, "i", 52);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 53);
    \u0275\u0275listener("click", function LeaveConfirmComponent_tr_101_Template_button_click_38_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.confirmLine(row_r6, "2"));
    });
    \u0275\u0275element(39, "i", 18);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("table-warning", row_r6.selected);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", row_r6.selected);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(41, _c2));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r3.pageIndex - 1) * ctx_r3.pageSize + i_r7 + 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.empId || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.empId);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.localName || null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.localName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.deptName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.deptName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.postGradeName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.postGradeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.applyTime);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.leaveTypeCodeName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.leaveTypeCodeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", row_r6.leaveFromTime, " ~ ", row_r6.leaveToTime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.rowDuration(row_r6));
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.leaveReason || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.leaveReason);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.createdName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.createdName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 29, "applyAtt.affirmFlag.approved", "\u0110\xE3 duy\u1EC7t"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", row_r6.hrComment);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(42, _c2))("placeholder", \u0275\u0275pipeBind2(32, 32, "lc.dialog.hrComment", "Nh\u1EADp \xFD ki\u1EBFn"));
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(37, 35, "lc.btn.approve", "Duy\u1EC7t"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(41, 38, "lc.btn.reject", "T\u1EEB ch\u1ED1i"), " ");
  }
}
function LeaveConfirmComponent_tr_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 54);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function LeaveConfirmComponent_ng_template_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r8 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r8, " ");
  }
}
function LeaveConfirmComponent_ng_container_109_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "label", 55);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "textarea", 56);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function LeaveConfirmComponent_ng_container_109_Template_textarea_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.batchRejectComment, $event) || (ctx_r3.batchRejectComment = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 4, "lc.dialog.hrComment", "Nh\u1EADp \xFD ki\u1EBFn"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.batchRejectComment);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(10, _c2))("placeholder", \u0275\u0275pipeBind2(5, 7, "lc.dialog.hrComment", "Nh\u1EADp \xFD ki\u1EBFn"));
    \u0275\u0275control();
  }
}
function LeaveConfirmComponent_ng_container_111_nz_alert_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 45);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzMessage", ctx_r3.detailErrorMessage() ?? "");
  }
}
function LeaveConfirmComponent_ng_container_111_ng_container_2_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 74);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "applyAtt.noApprovalData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u ph\xEA duy\u1EC7t"));
  }
}
function LeaveConfirmComponent_ng_container_111_ng_container_2_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 46);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 46);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 46);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 46);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.approvalStt(item_r11.affirmLevel, i_r12));
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
function LeaveConfirmComponent_ng_container_111_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 58)(2, "table", 59)(3, "tbody")(4, "tr")(5, "th", 60);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "tr")(11, "th", 61);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(16, "div", 62)(17, "table", 59)(18, "thead", 61)(19, "tr")(20, "th", 63);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 64);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 65);
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
    \u0275\u0275elementStart(35, "th", 66);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th", 67);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "tbody");
    \u0275\u0275template(42, LeaveConfirmComponent_ng_container_111_ng_container_2_tr_42_Template, 4, 4, "tr", 40)(43, LeaveConfirmComponent_ng_container_111_ng_container_2_tr_43_Template, 15, 7, "tr", 68);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "h6", 69);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 62)(48, "table", 59)(49, "tbody")(50, "tr")(51, "th", 70);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "td");
    \u0275\u0275text(55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "th", 70);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "td");
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "tr")(62, "th", 61);
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "td");
    \u0275\u0275text(66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "th", 61);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "td");
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(72, "h6", 69);
    \u0275\u0275text(73);
    \u0275\u0275pipe(74, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 71)(76, "table", 59)(77, "thead", 61)(78, "tr")(79, "th");
    \u0275\u0275text(80);
    \u0275\u0275pipe(81, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "th", 66);
    \u0275\u0275text(83);
    \u0275\u0275pipe(84, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "th", 66);
    \u0275\u0275text(86);
    \u0275\u0275pipe(87, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "th", 72);
    \u0275\u0275text(89);
    \u0275\u0275pipe(90, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "th");
    \u0275\u0275text(92);
    \u0275\u0275pipe(93, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(94, "tbody")(95, "tr")(96, "td", 46);
    \u0275\u0275text(97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "td", 46);
    \u0275\u0275text(99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "td", 46);
    \u0275\u0275text(101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "td", 46);
    \u0275\u0275text(103);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "td", 46);
    \u0275\u0275text(105);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(106, "div", 73)(107, "button", 17);
    \u0275\u0275listener("click", function LeaveConfirmComponent_ng_container_111_ng_container_2_Template_button_click_107_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.closeDetail());
    });
    \u0275\u0275text(108);
    \u0275\u0275pipe(109, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const d_r13 = ctx.ngIf;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 34, "applyAtt.subject", "Ti\xEAu \u0111\u1EC1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.detailApplyTitle(d_r13));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 37, "applyAtt.applicant", "Ng\u01B0\u1EDDi \u0111\u0103ng k\xFD"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.detailApplicant(d_r13));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 40, "common.stt", "STT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 43, "applyAtt.approvalSeq", "Tr\xECnh t\u1EF1 duy\u1EC7t"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 46, "applyAtt.approvalStatus", "Tr\u1EA1ng th\xE1i duy\u1EC7t"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 49, "common.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 52, "applyAtt.opinion", "\xDD ki\u1EBFn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 55, "applyAtt.actionTime", "Th\u1EDDi gian th\u1EF1c hi\u1EC7n"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 58, "common.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !d_r13.approvalList?.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", d_r13.approvalList);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 61, "applyAtt.empInfo", "Th\xF4ng tin nh\xE2n vi\xEAn"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(53, 64, "common.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.detailEmployeeInfo(d_r13)["localName"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(58, 67, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.detailEmployeeInfo(d_r13)["empId"]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(64, 70, "common.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.detailEmployeeInfo(d_r13)["deptName"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 73, "common.position", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.detailEmployeeInfo(d_r13)["postGradeName"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(74, 76, "applyAtt.leaveInfo", "Th\xF4ng tin xin ph\xE9p"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(81, 79, "applyAtt.leaveTypeFull", "Lo\u1EA1i ngh\u1EC9 ph\xE9p"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(84, 82, "common.startTime", "Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(87, 85, "common.endTime", "Th\u1EDDi gian k\u1EBFt th\xFAc"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(90, 88, "applyAtt.leaveDuration", "Th\u1EDDi l\u01B0\u1EE3ng"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(93, 91, "common.reason", "L\xFD do"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.detailInfo(d_r13)["leaveTypeName"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.detailInfo(d_r13)["leaveFromTime"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.detailInfo(d_r13)["leaveToTime"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.detailDuration(d_r13));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.detailInfo(d_r13)["leaveReason"]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(109, 94, "common.close", "\u0110\xF3ng"));
  }
}
function LeaveConfirmComponent_ng_container_111_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "applyAtt.loadingData", "\u0110ang t\u1EA3i d\u1EEF li\u1EC7u..."), " ");
  }
}
function LeaveConfirmComponent_ng_container_111_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, LeaveConfirmComponent_ng_container_111_ng_template_3_div_0_Template, 3, 4, "div", 75);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r3.detailLoading());
  }
}
function LeaveConfirmComponent_ng_container_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, LeaveConfirmComponent_ng_container_111_nz_alert_1_Template, 1, 1, "nz-alert", 24)(2, LeaveConfirmComponent_ng_container_111_ng_container_2_Template, 110, 97, "ng-container", 57)(3, LeaveConfirmComponent_ng_container_111_ng_template_3_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const detailLoadingTpl_r14 = \u0275\u0275reference(4);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.detailErrorMessage());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.detailData())("ngIfElse", detailLoadingTpl_r14);
  }
}
var I18N_KEYS = [
  "lc.col.applyDate",
  "lc.col.leaveTime",
  "lc.col.representative",
  "lc.col.affirmStatus",
  "lc.col.hrConfirm",
  "lc.col.hrComment",
  "lc.dialog.hrComment",
  "lc.btn.batchApprove",
  "lc.btn.batchReject",
  "lc.btn.approve",
  "lc.btn.reject",
  "lc.msg.selectApply",
  "lc.msg.approveSuccess",
  "lc.msg.rejectSuccess",
  "lc.msg.hrCommentRequired",
  "aec.msg.confirmApproveLine",
  "aec.msg.confirmRejectLine",
  "aec.msg.confirmApproveBatch",
  "aec.msg.confirmRejectBatch",
  "ess.viewApply.title.length",
  "applyAtt.affirmFlag.approved",
  "applyAtt.search.confirmFlag",
  "applyAtt.confirmFlag.notConfirmed",
  "applyAtt.confirmFlag.confirmed",
  "applyAtt.confirmFlag.rejected",
  "applyAtt.applicant",
  "applyAtt.subject",
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
  "applyAtt.sendError",
  "applyAtt.applyTitleFallback",
  "common.search.empIdOrName",
  "common.placeholder.empId",
  "common.fromDate",
  "common.toDate",
  "common.no.serial",
  "common.empId",
  "common.empName",
  "common.deptName",
  "common.position",
  "common.reason",
  "common.selectAll",
  "common.clearFilter",
  "common.search",
  "common.no",
  "common.close",
  "common.confirm",
  "common.stt",
  "common.totalRows",
  "common.loadFail",
  "common.noData",
  "common.startTime",
  "common.endTime",
  "ck.modal.title"
];
var CONFIRM_FLAG_OPTIONS = [
  { value: "", labelKey: "common.selectAll", fallback: "-- T\u1EA5t c\u1EA3 --" },
  { value: "0", labelKey: "applyAtt.confirmFlag.notConfirmed", fallback: "Ch\u01B0a x\xE1c nh\u1EADn" },
  { value: "1", labelKey: "applyAtt.confirmFlag.confirmed", fallback: "\u0110\xE3 x\xE1c nh\u1EADn" },
  { value: "2", labelKey: "applyAtt.confirmFlag.rejected", fallback: "T\u1EEB ch\u1ED1i" }
];
var DEFAULT_CONFIRM_FLAG = "0";
var LeaveConfirmComponent = class _LeaveConfirmComponent {
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
  confirmFlagOptions = CONFIRM_FLAG_OPTIONS;
  pageSizeOptions = [25, 50, 100, 200];
  leaveTypeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "leaveTypeOptions" }] : (
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
  recordsTotal = signal(
    0,
    ...ngDevMode ? [{ debugName: "recordsTotal" }] : (
      /* istanbul ignore next */
      []
    )
  );
  searchEmpId = "";
  fromDate = null;
  toDate = null;
  leaveTypeCode = null;
  confirmFlag = DEFAULT_CONFIRM_FLAG;
  pageIndex = 1;
  pageSize = 25;
  batchRejectVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "batchRejectVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  batchRejectComment = "";
  pendingBatchApplyNos = [];
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
  showError(msg) {
    this.message.error(msg, { nzDuration: 6e3 });
  }
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getLeaveTypeOptions().subscribe((list) => this.leaveTypeOptions.set(list ?? []));
    this.search();
  }
  search() {
    this.pageIndex = 1;
    this.loadPage();
  }
  clearSearch() {
    this.searchEmpId = "";
    this.fromDate = null;
    this.toDate = null;
    this.leaveTypeCode = null;
    this.confirmFlag = DEFAULT_CONFIRM_FLAG;
    this.search();
  }
  onPageIndexChange(pageIndex) {
    this.pageIndex = pageIndex;
    this.loadPage();
  }
  onPageSizeChange(pageSize) {
    this.pageSize = pageSize;
    this.pageIndex = 1;
    this.loadPage();
  }
  loadPage() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getPageList({
      searchEmpId: this.searchEmpId.trim(),
      fromDate: this.formatYmd(this.fromDate),
      toDate: this.formatYmd(this.toDate),
      searchLeaveTypeCode: this.leaveTypeCode ?? "",
      confirmFlag: this.confirmFlag,
      draw: this.pageIndex,
      start: (this.pageIndex - 1) * this.pageSize,
      length: this.pageSize
    }).subscribe({
      next: (res) => {
        if (res.error) {
          this.errorMessage.set(res.error);
          this.rows.set([]);
          this.recordsTotal.set(0);
        } else {
          this.rows.set((res.data ?? []).map((r) => __spreadProps(__spreadValues({}, r), { selected: false })));
          this.recordsTotal.set(res.recordsTotal ?? 0);
        }
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.rows.set([]);
        this.recordsTotal.set(0);
        this.loading.set(false);
      }
    });
  }
  // ==================== Chọn dòng (checkbox - chỉ trong phạm vi trang hiện tại) ====================
  get allSelected() {
    const rows = this.rows();
    return rows.length > 0 && rows.every((r) => r.selected);
  }
  get someSelected() {
    return this.rows().some((r) => r.selected) && !this.allSelected;
  }
  toggleSelectAll(checked) {
    this.rows().forEach((r) => r.selected = checked);
  }
  // ==================== Duyệt / Từ chối từng dòng ====================
  confirmLine(row, flag) {
    const hrComment = (row.hrComment || "").trim();
    if (flag === "2" && !hrComment) {
      this.message.warning(this.i18n.t("lc.msg.hrCommentRequired", "Vui l\xF2ng nh\u1EADp \xFD ki\u1EBFn khi t\u1EEB ch\u1ED1i!"));
      return;
    }
    const content = flag === "1" ? this.i18n.t("aec.msg.confirmApproveLine", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n duy\u1EC7t \u0111\u01A1n n\xE0y?") : this.i18n.t("aec.msg.confirmRejectLine", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n t\u1EEB ch\u1ED1i \u0111\u01A1n n\xE0y?");
    this.modal.confirm({
      nzTitle: this.i18n.t("common.confirm", "X\xE1c nh\u1EADn"),
      nzContent: content,
      nzOnOk: () => this.runConfirmLine(row, flag, hrComment)
    });
  }
  runConfirmLine(row, flag, hrComment) {
    this.api.confirm(row.applyNo, flag, hrComment).subscribe({
      next: (res) => {
        if (res.success) {
          this.message.success(flag === "1" ? this.i18n.t("lc.msg.approveSuccess", "Duy\u1EC7t th\xE0nh c\xF4ng!") : this.i18n.t("lc.msg.rejectSuccess", "T\u1EEB ch\u1ED1i th\xE0nh c\xF4ng!"));
          this.loadPage();
        } else {
          this.showError(res.error || this.i18n.t("applyAtt.sendError", "L\u1ED7i khi g\u1EEDi d\u1EEF li\u1EC7u!"));
        }
      },
      error: () => this.showError(this.i18n.t("applyAtt.sendError", "L\u1ED7i khi g\u1EEDi d\u1EEF li\u1EC7u!"))
    });
  }
  // ==================== Duyệt / Từ chối hàng loạt (các dòng đã chọn trong trang hiện tại) ====================
  batchApprove() {
    const applyNos = this.rows().filter((r) => r.selected).map((r) => r.applyNo);
    if (!applyNos.length) {
      this.message.warning(this.i18n.t("lc.msg.selectApply", "Vui l\xF2ng ch\u1ECDn \u0111\u01A1n c\u1EA7n x\u1EED l\xFD!"));
      return;
    }
    this.modal.confirm({
      nzTitle: this.i18n.t("common.confirm", "X\xE1c nh\u1EADn"),
      nzContent: this.i18n.t("aec.msg.confirmApproveBatch", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n duy\u1EC7t {n} \u0111\u01A1n \u0111\xE3 ch\u1ECDn?").replace("{n}", String(applyNos.length)),
      nzOnOk: () => this.runConfirmBatch(applyNos, "1", "")
    });
  }
  openBatchReject() {
    const applyNos = this.rows().filter((r) => r.selected).map((r) => r.applyNo);
    if (!applyNos.length) {
      this.message.warning(this.i18n.t("lc.msg.selectApply", "Vui l\xF2ng ch\u1ECDn \u0111\u01A1n c\u1EA7n x\u1EED l\xFD!"));
      return;
    }
    this.pendingBatchApplyNos = applyNos;
    this.batchRejectComment = "";
    this.batchRejectVisible.set(true);
  }
  cancelBatchReject() {
    this.batchRejectVisible.set(false);
  }
  confirmBatchReject() {
    const comment = this.batchRejectComment.trim();
    if (!comment) {
      this.message.warning(this.i18n.t("lc.msg.hrCommentRequired", "Vui l\xF2ng nh\u1EADp \xFD ki\u1EBFn khi t\u1EEB ch\u1ED1i!"));
      return;
    }
    this.batchRejectVisible.set(false);
    this.runConfirmBatch(this.pendingBatchApplyNos, "2", comment);
  }
  runConfirmBatch(applyNos, flag, hrComment) {
    this.api.confirmBatch(applyNos, flag, hrComment).subscribe({
      next: (res) => {
        if (res.success) {
          this.message.success(flag === "1" ? this.i18n.t("lc.msg.approveSuccess", "Duy\u1EC7t th\xE0nh c\xF4ng!") : this.i18n.t("lc.msg.rejectSuccess", "T\u1EEB ch\u1ED1i th\xE0nh c\xF4ng!"));
        } else {
          this.showError(res.error || this.i18n.t("applyAtt.sendError", "L\u1ED7i khi g\u1EEDi d\u1EEF li\u1EC7u!"));
        }
        this.loadPage();
      },
      error: () => {
        this.showError(this.i18n.t("applyAtt.sendError", "L\u1ED7i khi g\u1EEDi d\u1EEF li\u1EC7u!"));
        this.loadPage();
      }
    });
  }
  // ==================== Modal chi tiết đơn (chỉ xem - xem giải thích ở docblock class) ====================
  openDetail(row) {
    if (!row.applyNo)
      return;
    this.detailVisible.set(true);
    this.detailLoading.set(true);
    this.detailErrorMessage.set(null);
    this.detailData.set(null);
    this.api.getDetail(row.applyNo).subscribe({
      next: (res) => {
        this.detailData.set(res);
        this.detailLoading.set(false);
      },
      error: () => {
        this.detailErrorMessage.set(this.i18n.t("applyAtt.loadFailed", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i"));
        this.detailLoading.set(false);
      }
    });
  }
  closeDetail() {
    this.detailVisible.set(false);
  }
  detailInfo(d) {
    return d.leaveInfo || {};
  }
  detailEmployeeInfo(d) {
    return d.employeeInfo || this.detailInfo(d);
  }
  detailModalTitle(d) {
    if (!d)
      return "";
    const info = this.detailInfo(d);
    return `[${info["leaveTypeName"] || this.i18n.t("applyAtt.applyTitleFallback", "Xin ngh\u1EC9 ph\xE9p")}]`;
  }
  /** Dòng "Tiêu đề" trong modal - đúng valBuildApplyTitle() bản gốc. */
  detailApplyTitle(d) {
    const info = this.detailInfo(d);
    const typeName = info["leaveTypeName"];
    const fromTime = info["leaveFromTime"];
    const toTime = info["leaveToTime"];
    const localName = info["localName"] || "";
    if (!typeName && !localName && !fromTime && !toTime)
      return "";
    return `${typeName || ""}/Apply(${localName})[Date: ${fromTime || ""} ~ ${toTime || ""}]`;
  }
  detailApplicant(d) {
    const emp = this.detailEmployeeInfo(d);
    return `${emp["localName"] || ""}/${emp["postGradeName"] || ""}/${emp["deptName"] || ""}`;
  }
  detailDuration(d) {
    const info = this.detailInfo(d);
    return this.formatDuration(info["applyLength"], info["dayHours"]);
  }
  /** Quy đổi thời lượng nghỉ phép ra Ngày/Giờ theo dayHours - đúng lcFormatDuration() bản gốc, dùng cả
   *  ở cột "Thời lượng" trong bảng lẫn trong modal chi tiết. */
  rowDuration(row) {
    return this.formatDuration(row.applyLength, row.dayHours);
  }
  formatDuration(applyLength, dayHours) {
    const len = parseFloat(applyLength ?? "");
    const dh = parseFloat(dayHours ?? "");
    if (isNaN(len) || isNaN(dh) || dh === 0)
      return applyLength ?? "";
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
   *  số thứ tự thô, đúng valRenderApprovalRows() bản gốc. */
  approvalStt(affirmLevel, index) {
    const stt = affirmLevel || String(index + 1);
    return stt === "100" ? "HR" : stt;
  }
  // ==================== Helpers ====================
  formatYmd(d) {
    return d ? formatDate(d, "yyyy-MM-dd", "vi") : "";
  }
  static \u0275fac = function LeaveConfirmComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LeaveConfirmComponent)(\u0275\u0275directiveInject(LeaveConfirmService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService), \u0275\u0275directiveInject(NzModalService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LeaveConfirmComponent, selectors: [["app-leave-confirm"]], decls: 112, vars: 140, consts: [["lcTotalTpl", ""], ["detailLoadingTpl", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-2"], [1, "form-label"], ["nz-input", "", "name", "searchEmpId", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "fromDate", "nzFormat", "yyyy-MM-dd", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "toDate", "nzFormat", "yyyy-MM-dd", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "leaveTypeCode", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["name", "confirmFlag", 1, "w-100", 3, "ngModelChange", "ngModel"], [1, "col-md-2", "d-flex", "align-items-end", "flex-wrap", "gap-2"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], [1, "col-12", "d-flex", "align-items-end", "flex-wrap", "gap-2"], ["nz-button", "", "nzType", "primary", "type", "button", 2, "background-color", "#2fb344", "border-color", "#2fb344", 3, "click"], [1, "bx", "bx-check-circle"], ["nz-button", "", "nzDanger", "", "type", "button", 3, "click"], [1, "bx", "bx-x-circle"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], ["nzShowSizeChanger", "", 1, "table-nowrap", 3, "nzPageIndexChange", "nzPageSizeChange", "nzData", "nzFrontPagination", "nzLoading", "nzTotal", "nzPageIndex", "nzPageSize", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "40px"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel", "nzIndeterminate"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "100px", 1, "text-center"], ["nzWidth", "160px"], ["nzWidth", "150px"], ["nzWidth", "120px"], ["nzWidth", "220px", 1, "text-center"], ["nzWidth", "90px", 1, "text-center"], ["nzWidth", "200px"], ["nzWidth", "130px"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "160px", 1, "text-center"], [3, "table-warning", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkText", "nzCancelText"], [4, "nzModalContent"], ["nzWidth", "70vw", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzBodyStyle", "nzFooter"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], [1, "text-center"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0)", 3, "click"], ["nzColor", "green"], ["nz-input", "", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["nz-button", "", "nzType", "primary", "nzSize", "small", 1, "me-1", 2, "background-color", "#2fb344", "border-color", "#2fb344", 3, "click"], [1, "bx", "bx-check"], ["nz-button", "", "nzDanger", "", "nzSize", "small", 3, "click"], ["colspan", "15", 1, "text-center", "text-muted", "py-3"], [1, "form-label", "fw-semibold"], ["nz-input", "", "rows", "3", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [4, "ngIf", "ngIfElse"], [1, "table-responsive", "mb-3"], [1, "table", "table-bordered", "table-sm", "align-middle", "mb-0"], [1, "table-light", "text-center", 2, "width", "160px"], [1, "table-light", "text-center"], [1, "table-responsive", "mb-4"], [2, "width", "50px"], [2, "width", "90px"], [2, "width", "110px"], [2, "width", "170px"], [2, "width", "120px"], [4, "ngFor", "ngForOf"], [1, "fw-bold", "mb-2"], [1, "table-light", "text-center", 2, "width", "100px"], [1, "table-responsive"], [2, "width", "140px"], [1, "d-flex", "justify-content-end", "gap-2", "mt-3"], ["colspan", "7", 1, "text-center", "text-muted"], ["class", "text-center text-muted py-3", 4, "ngIf"], [1, "text-center", "text-muted", "py-3"]], template: function LeaveConfirmComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "nz-card", 4)(3, "form", 5);
      \u0275\u0275listener("ngSubmit", function LeaveConfirmComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 6)(5, "label", 7);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function LeaveConfirmComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchEmpId, $event) || (ctx.searchEmpId = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 6)(11, "label", 7);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "nz-date-picker", 9);
      \u0275\u0275twoWayListener("ngModelChange", function LeaveConfirmComponent_Template_nz_date_picker_ngModelChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.fromDate, $event) || (ctx.fromDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 6)(16, "label", 7);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "nz-date-picker", 10);
      \u0275\u0275twoWayListener("ngModelChange", function LeaveConfirmComponent_Template_nz_date_picker_ngModelChange_19_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.toDate, $event) || (ctx.toDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 6)(21, "label", 7);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "nz-select", 11);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function LeaveConfirmComponent_Template_nz_select_ngModelChange_24_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.leaveTypeCode, $event) || (ctx.leaveTypeCode = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(26, LeaveConfirmComponent_nz_option_26_Template, 1, 2, "nz-option", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 6)(28, "label", 7);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "nz-select", 13);
      \u0275\u0275twoWayListener("ngModelChange", function LeaveConfirmComponent_Template_nz_select_ngModelChange_31_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.confirmFlag, $event) || (ctx.confirmFlag = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(32, LeaveConfirmComponent_nz_option_32_Template, 2, 5, "nz-option", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 14)(34, "button", 15);
      \u0275\u0275element(35, "i", 16);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "button", 17);
      \u0275\u0275listener("click", function LeaveConfirmComponent_Template_button_click_38_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(39, "i", 18);
      \u0275\u0275text(40);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 19)(43, "button", 20);
      \u0275\u0275listener("click", function LeaveConfirmComponent_Template_button_click_43_listener() {
        return ctx.batchApprove();
      });
      \u0275\u0275element(44, "i", 21);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "button", 22);
      \u0275\u0275listener("click", function LeaveConfirmComponent_Template_button_click_47_listener() {
        return ctx.openBatchReject();
      });
      \u0275\u0275element(48, "i", 23);
      \u0275\u0275text(49);
      \u0275\u0275pipe(50, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(51, "nz-card");
      \u0275\u0275template(52, LeaveConfirmComponent_nz_alert_52_Template, 1, 1, "nz-alert", 24);
      \u0275\u0275elementStart(53, "nz-table", 25);
      \u0275\u0275listener("nzPageIndexChange", function LeaveConfirmComponent_Template_nz_table_nzPageIndexChange_53_listener($event) {
        return ctx.onPageIndexChange($event);
      })("nzPageSizeChange", function LeaveConfirmComponent_Template_nz_table_nzPageSizeChange_53_listener($event) {
        return ctx.onPageSizeChange($event);
      });
      \u0275\u0275elementStart(54, "thead")(55, "tr")(56, "th", 26)(57, "label", 27);
      \u0275\u0275listener("ngModelChange", function LeaveConfirmComponent_Template_label_ngModelChange_57_listener($event) {
        return ctx.toggleSelectAll($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "th", 28);
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "th", 29);
      \u0275\u0275text(62);
      \u0275\u0275pipe(63, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "th", 30);
      \u0275\u0275text(65);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "th", 31);
      \u0275\u0275text(68);
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "th", 32);
      \u0275\u0275text(71);
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "th", 29);
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "th", 30);
      \u0275\u0275text(77);
      \u0275\u0275pipe(78, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "th", 33);
      \u0275\u0275text(80);
      \u0275\u0275pipe(81, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "th", 34);
      \u0275\u0275text(83);
      \u0275\u0275pipe(84, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "th", 35);
      \u0275\u0275text(86);
      \u0275\u0275pipe(87, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "th", 36);
      \u0275\u0275text(89);
      \u0275\u0275pipe(90, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "th", 37);
      \u0275\u0275text(92);
      \u0275\u0275pipe(93, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "th", 35);
      \u0275\u0275text(95);
      \u0275\u0275pipe(96, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "th", 38);
      \u0275\u0275text(98);
      \u0275\u0275pipe(99, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(100, "tbody");
      \u0275\u0275template(101, LeaveConfirmComponent_tr_101_Template, 42, 43, "tr", 39)(102, LeaveConfirmComponent_tr_102_Template, 4, 4, "tr", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275template(103, LeaveConfirmComponent_ng_template_103_Template, 2, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(105, "nz-modal", 41);
      \u0275\u0275pipe(106, "translate");
      \u0275\u0275pipe(107, "translate");
      \u0275\u0275pipe(108, "translate");
      \u0275\u0275listener("nzOnCancel", function LeaveConfirmComponent_Template_nz_modal_nzOnCancel_105_listener() {
        return ctx.cancelBatchReject();
      })("nzOnOk", function LeaveConfirmComponent_Template_nz_modal_nzOnOk_105_listener() {
        return ctx.confirmBatchReject();
      });
      \u0275\u0275template(109, LeaveConfirmComponent_ng_container_109_Template, 6, 11, "ng-container", 42);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "nz-modal", 43);
      \u0275\u0275listener("nzOnCancel", function LeaveConfirmComponent_Template_nz_modal_nzOnCancel_110_listener() {
        return ctx.closeDetail();
      });
      \u0275\u0275template(111, LeaveConfirmComponent_ng_container_111_Template, 5, 3, "ng-container", 42);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const lcTotalTpl_r15 = \u0275\u0275reference(104);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 54, "common.search.empIdOrName", "M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchEmpId);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 57, "common.placeholder.empId", "Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 60, "common.fromDate", "T\u1EEB ng\xE0y"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.fromDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 63, "common.toDate", "\u0110\u1EBFn ng\xE0y"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.toDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 66, "applyAtt.leaveTypeFull", "Lo\u1EA1i ngh\u1EC9 ph\xE9p"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.leaveTypeCode);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(25, 69, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.leaveTypeOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 72, "applyAtt.search.confirmFlag", "Tr\u1EA1ng th\xE1i x\xE1c nh\u1EADn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.confirmFlag);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.confirmFlagOptions);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(37, 75, "common.search", "T\xECm ki\u1EBFm"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(41, 78, "common.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(46, 81, "lc.btn.batchApprove", "Duy\u1EC7t h\xE0ng lo\u1EA1t"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(50, 84, "lc.btn.batchReject", "T\u1EEB ch\u1ED1i h\xE0ng lo\u1EA1t"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzFrontPagination", false)("nzLoading", ctx.loading())("nzTotal", ctx.recordsTotal())("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", lcTotalTpl_r15)("nzScroll", \u0275\u0275pureFunction0(138, _c0));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngModel", ctx.allSelected)("nzIndeterminate", ctx.someSelected);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(60, 87, "common.no.serial", "NO."));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(63, 90, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(66, 93, "applyAtt.applicant", "Ng\u01B0\u1EDDi xin ph\xE9p"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 96, "common.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(72, 99, "common.position", "Ch\u1EE9c v\u1EE5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(75, 102, "lc.col.applyDate", "Ng\xE0y xin ph\xE9p"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(78, 105, "applyAtt.leaveTypeFull", "Lo\u1EA1i ngh\u1EC9 ph\xE9p"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(81, 108, "lc.col.leaveTime", "Th\u1EDDi gian"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(84, 111, "ess.viewApply.title.length", "Th\u1EDDi l\u01B0\u1EE3ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(87, 114, "common.reason", "L\xFD do"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(90, 117, "lc.col.representative", "Ng\u01B0\u1EDDi \u0111\u1EA1i di\u1EC7n"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(93, 120, "lc.col.affirmStatus", "Tr\u1EA1ng th\xE1i duy\u1EC7t"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(96, 123, "lc.col.hrComment", "\xDD ki\u1EBFn nh\xE2n s\u1EF1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(99, 126, "lc.col.hrConfirm", "Nh\xE2n s\u1EF1 x\xE1c nh\u1EADn"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.rows());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.batchRejectVisible())("nzTitle", \u0275\u0275pipeBind2(106, 129, "lc.btn.batchReject", "T\u1EEB ch\u1ED1i h\xE0ng lo\u1EA1t"))("nzOkText", \u0275\u0275pipeBind2(107, 132, "lc.btn.reject", "T\u1EEB ch\u1ED1i"))("nzCancelText", \u0275\u0275pipeBind2(108, 135, "common.no", "Kh\xF4ng"));
      \u0275\u0275advance(5);
      \u0275\u0275property("nzVisible", ctx.detailVisible())("nzTitle", ctx.detailModalTitle(ctx.detailData()))("nzBodyStyle", \u0275\u0275pureFunction0(139, _c1))("nzFooter", null);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzDatePickerModule, NzDatePickerComponent, NzCheckboxModule, NzCheckboxComponent, NzTagModule, NzTagComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=leave-confirm.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeaveConfirmComponent, [{
    type: Component,
    args: [{ selector: "app-leave-confirm", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzSelectModule,
      NzButtonModule,
      NzDatePickerModule,
      NzCheckboxModule,
      NzTagModule,
      NzModalModule,
      NzAlertModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3" (ngSubmit)="search()">
        <div class="col-md-2">
          <label class="form-label">{{ 'common.search.empIdOrName' | translate:'M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn' }}</label>
          <input nz-input [(ngModel)]="searchEmpId" name="searchEmpId"
                 [placeholder]="'common.placeholder.empId' | translate:'Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn'">
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'common.fromDate' | translate:'T\u1EEB ng\xE0y' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="fromDate" name="fromDate" nzFormat="yyyy-MM-dd"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'common.toDate' | translate:'\u0110\u1EBFn ng\xE0y' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="toDate" name="toDate" nzFormat="yyyy-MM-dd"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'applyAtt.leaveTypeFull' | translate:'Lo\u1EA1i ngh\u1EC9 ph\xE9p' }}</label>
          <nz-select class="w-100" [(ngModel)]="leaveTypeCode" name="leaveTypeCode" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let o of leaveTypeOptions()" [nzValue]="o.codeNo" [nzLabel]="o.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'applyAtt.search.confirmFlag' | translate:'Tr\u1EA1ng th\xE1i x\xE1c nh\u1EADn' }}</label>
          <nz-select class="w-100" [(ngModel)]="confirmFlag" name="confirmFlag">
            <nz-option *ngFor="let o of confirmFlagOptions" [nzValue]="o.value" [nzLabel]="o.labelKey | translate:o.fallback"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-2 d-flex align-items-end flex-wrap gap-2">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'common.search' | translate:'T\xECm ki\u1EBFm' }}
          </button>
          <button nz-button type="button" (click)="clearSearch()">
            <i class="bx bx-x"></i> {{ 'common.clearFilter' | translate:'X\xF3a l\u1ECDc' }}
          </button>
        </div>
        <div class="col-12 d-flex align-items-end flex-wrap gap-2">
          <button nz-button nzType="primary" type="button" (click)="batchApprove()"
                  style="background-color:#2fb344;border-color:#2fb344;">
            <i class="bx bx-check-circle"></i> {{ 'lc.btn.batchApprove' | translate:'Duy\u1EC7t h\xE0ng lo\u1EA1t' }}
          </button>
          <button nz-button nzDanger type="button" (click)="openBatchReject()">
            <i class="bx bx-x-circle"></i> {{ 'lc.btn.batchReject' | translate:'T\u1EEB ch\u1ED1i h\xE0ng lo\u1EA1t' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <!-- nzFrontPagination=false v\xEC backend ph\xE2n trang server-side (DataTablesResponse) - rows() ch\u1EC9
           ch\u1EE9a \u0111\xFAng 1 trang d\u1EEF li\u1EC7u t\u1EA1i 1 th\u1EDDi \u0111i\u1EC3m, n\xEAn "Ch\u1ECDn t\u1EA5t c\u1EA3"/h\xE0ng lo\u1EA1t ch\u1EC9 \xE1p d\u1EE5ng cho trang
           \u0111ang xem (xem gi\u1EA3i th\xEDch \u1EDF docblock component). -->
      <nz-table [nzData]="rows()" [nzFrontPagination]="false" [nzLoading]="loading()"
                [nzTotal]="recordsTotal()" [nzPageIndex]="pageIndex" [nzPageSize]="pageSize"
                [nzPageSizeOptions]="pageSizeOptions" nzShowSizeChanger [nzShowTotal]="lcTotalTpl"
                (nzPageIndexChange)="onPageIndexChange($event)" (nzPageSizeChange)="onPageSizeChange($event)"
                [nzScroll]="{ x: '2000px', y: 'calc(100vh - 420px)' }"
                class="table-nowrap">
        <!-- nzWidth khai b\xE1o cho t\u1EEBng c\u1ED9t \u0111\u1EC3 \u0111\u1ED3ng b\u1ED9 \u0111\u1ED9 r\u1ED9ng header/body khi d\xF9ng nzScroll (xem
             gi\u1EA3i th\xEDch \u1EDF dept-ot-apply-info.component.html). -->
        <thead>
          <tr>
            <th nzWidth="40px">
              <label nz-checkbox [ngModel]="allSelected" [nzIndeterminate]="someSelected"
                     (ngModelChange)="toggleSelectAll($event)"></label>
            </th>
            <th class="text-center" nzWidth="60px">{{ 'common.no.serial' | translate:'NO.' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
            <th nzWidth="160px">{{ 'applyAtt.applicant' | translate:'Ng\u01B0\u1EDDi xin ph\xE9p' }}</th>
            <th nzWidth="150px">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
            <th nzWidth="120px">{{ 'common.position' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'lc.col.applyDate' | translate:'Ng\xE0y xin ph\xE9p' }}</th>
            <th nzWidth="160px">{{ 'applyAtt.leaveTypeFull' | translate:'Lo\u1EA1i ngh\u1EC9 ph\xE9p' }}</th>
            <th class="text-center" nzWidth="220px">{{ 'lc.col.leaveTime' | translate:'Th\u1EDDi gian' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'ess.viewApply.title.length' | translate:'Th\u1EDDi l\u01B0\u1EE3ng' }}</th>
            <th nzWidth="200px">{{ 'common.reason' | translate:'L\xFD do' }}</th>
            <th nzWidth="130px">{{ 'lc.col.representative' | translate:'Ng\u01B0\u1EDDi \u0111\u1EA1i di\u1EC7n' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'lc.col.affirmStatus' | translate:'Tr\u1EA1ng th\xE1i duy\u1EC7t' }}</th>
            <th nzWidth="200px">{{ 'lc.col.hrComment' | translate:'\xDD ki\u1EBFn nh\xE2n s\u1EF1' }}</th>
            <th class="text-center" nzWidth="160px">{{ 'lc.col.hrConfirm' | translate:'Nh\xE2n s\u1EF1 x\xE1c nh\u1EADn' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of rows(); let i = index" [class.table-warning]="row.selected">
            <td class="text-center">
              <label nz-checkbox [(ngModel)]="row.selected" [ngModelOptions]="{ standalone: true }"></label>
            </td>
            <td class="text-center">{{ (pageIndex - 1) * pageSize + i + 1 }}</td>
            <td class="text-center" [attr.title]="row.empId || null">{{ row.empId }}</td>
            <td [attr.title]="row.localName || null">
              <a href="javascript:void(0)" (click)="openDetail(row)">{{ row.localName }}</a>
            </td>
            <td [attr.title]="row.deptName || null">{{ row.deptName }}</td>
            <td [attr.title]="row.postGradeName || null">{{ row.postGradeName }}</td>
            <td class="text-center">{{ row.applyTime }}</td>
            <td [attr.title]="row.leaveTypeCodeName || null">{{ row.leaveTypeCodeName }}</td>
            <td class="text-center">{{ row.leaveFromTime }} ~ {{ row.leaveToTime }}</td>
            <td class="text-center">{{ rowDuration(row) }}</td>
            <td [attr.title]="row.leaveReason || null">{{ row.leaveReason }}</td>
            <td [attr.title]="row.createdName || null">{{ row.createdName }}</td>
            <td class="text-center">
              <nz-tag nzColor="green">{{ 'applyAtt.affirmFlag.approved' | translate:'\u0110\xE3 duy\u1EC7t' }}</nz-tag>
            </td>
            <td>
              <input nz-input [(ngModel)]="row.hrComment" [ngModelOptions]="{ standalone: true }"
                     [placeholder]="'lc.dialog.hrComment' | translate:'Nh\u1EADp \xFD ki\u1EBFn'">
            </td>
            <td class="text-center">
              <button nz-button nzType="primary" nzSize="small" (click)="confirmLine(row, '1')"
                      style="background-color:#2fb344;border-color:#2fb344;" class="me-1">
                <i class="bx bx-check"></i> {{ 'lc.btn.approve' | translate:'Duy\u1EC7t' }}
              </button>
              <button nz-button nzDanger nzSize="small" (click)="confirmLine(row, '2')">
                <i class="bx bx-x"></i> {{ 'lc.btn.reject' | translate:'T\u1EEB ch\u1ED1i' }}
              </button>
            </td>
          </tr>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="15" class="text-center text-muted py-3">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
        </tbody>
        <ng-template #lcTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal nh\u1EADp \xFD ki\u1EBFn khi t\u1EEB ch\u1ED1i h\xE0ng lo\u1EA1t -->
<nz-modal [nzVisible]="batchRejectVisible()" [nzTitle]="'lc.btn.batchReject' | translate:'T\u1EEB ch\u1ED1i h\xE0ng lo\u1EA1t'"
          (nzOnCancel)="cancelBatchReject()" (nzOnOk)="confirmBatchReject()"
          [nzOkText]="'lc.btn.reject' | translate:'T\u1EEB ch\u1ED1i'" [nzCancelText]="'common.no' | translate:'Kh\xF4ng'">
  <ng-container *nzModalContent>
    <label class="form-label fw-semibold">{{ 'lc.dialog.hrComment' | translate:'Nh\u1EADp \xFD ki\u1EBFn' }}</label>
    <textarea nz-input rows="3" [(ngModel)]="batchRejectComment" [ngModelOptions]="{ standalone: true }"
              [placeholder]="'lc.dialog.hrComment' | translate:'Nh\u1EADp \xFD ki\u1EBFn'"></textarea>
  </ng-container>
</nz-modal>

<!-- Modal chi ti\u1EBFt \u0111\u01A1n - ch\u1EC9 xem, kh\xF4ng c\xF3 n\xFAt Duy\u1EC7t/T\u1EEB ch\u1ED1i (xem gi\u1EA3i th\xEDch \u1EDF docblock component) -->
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
              <th class="table-light text-center" style="width:160px;">{{ 'applyAtt.subject' | translate:'Ti\xEAu \u0111\u1EC1' }}</th>
              <td>{{ detailApplyTitle(d) }}</td>
            </tr>
            <tr>
              <th class="table-light text-center">{{ 'applyAtt.applicant' | translate:'Ng\u01B0\u1EDDi \u0111\u0103ng k\xFD' }}</th>
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
              <th style="width:90px;">{{ 'applyAtt.approvalSeq' | translate:'Tr\xECnh t\u1EF1 duy\u1EC7t' }}</th>
              <th style="width:110px;">{{ 'applyAtt.approvalStatus' | translate:'Tr\u1EA1ng th\xE1i duy\u1EC7t' }}</th>
              <th>{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
              <th>{{ 'applyAtt.opinion' | translate:'\xDD ki\u1EBFn' }}</th>
              <th style="width:170px;">{{ 'applyAtt.actionTime' | translate:'Th\u1EDDi gian th\u1EF1c hi\u1EC7n' }}</th>
              <th style="width:120px;">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="!d.approvalList?.length">
              <td colspan="7" class="text-center text-muted">{{ 'applyAtt.noApprovalData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u ph\xEA duy\u1EC7t' }}</td>
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

      <h6 class="fw-bold mb-2">{{ 'applyAtt.empInfo' | translate:'Th\xF4ng tin nh\xE2n vi\xEAn' }}</h6>
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

      <div class="d-flex justify-content-end gap-2 mt-3">
        <button nz-button type="button" (click)="closeDetail()">{{ 'common.close' | translate:'\u0110\xF3ng' }}</button>
      </div>
    </ng-container>
    <ng-template #detailLoadingTpl>
      <div class="text-center text-muted py-3" *ngIf="detailLoading()">
        {{ 'applyAtt.loadingData' | translate:'\u0110ang t\u1EA3i d\u1EEF li\u1EC7u...' }}
      </div>
    </ng-template>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/leave-confirm/leave-confirm.component.css */\ntable td,\ntable th {\n  white-space: nowrap;\n}\ntable td {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=leave-confirm.component.css.map */\n"] }]
  }], () => [{ type: LeaveConfirmService }, { type: I18nService }, { type: NzMessageService }, { type: NzModalService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LeaveConfirmComponent, { className: "LeaveConfirmComponent", filePath: "src/app/leave-confirm/leave-confirm.component.ts", lineNumber: 90 });
})();
export {
  LeaveConfirmComponent
};
//# debugId=1c40c180-b022-5197-9563-cc20dd17c007
//# sourceMappingURL=chunk-GGL2N3AF.js.map
