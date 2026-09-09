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

// src/app/attendance-ex-confirm/attendance-ex-confirm.service.ts
var API_BASE = "/ess/arConfirm/api/attendanceExConfirm";
var DETAIL_URL = "/ess/infoApplyAttendance/api/checkAttendanceEx/detail";
var AttendanceExConfirmService = class _AttendanceExConfirmService {
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
  getDetail(applyNo, applyType) {
    const params = new HttpParams().set("applyNo", applyNo).set("applyType", applyType || "");
    return this.http.get(DETAIL_URL, { params, withCredentials: true });
  }
  static \u0275fac = function AttendanceExConfirmService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AttendanceExConfirmService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AttendanceExConfirmService, factory: _AttendanceExConfirmService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttendanceExConfirmService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/attendance-ex-confirm/attendance-ex-confirm.component.ts
var _c0 = () => ({ x: "2200px", y: "calc(100vh - 380px)" });
var _c1 = () => ({ "max-height": "75vh", "overflow-y": "auto" });
var _c2 = () => ({ standalone: true });
function AttendanceExConfirmComponent_nz_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 41);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const o_r2 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r2.value)("nzLabel", \u0275\u0275pipeBind2(1, 2, o_r2.labelKey, o_r2.fallback));
  }
}
function AttendanceExConfirmComponent_nz_alert_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 42);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r2.errorMessage() ?? "");
  }
}
function AttendanceExConfirmComponent_tr_93_nz_tag_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-tag", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.affirmFlagName);
  }
}
function AttendanceExConfirmComponent_tr_93_div_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.confirmBy);
  }
}
function AttendanceExConfirmComponent_tr_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 43)(2, "label", 44);
    \u0275\u0275twoWayListener("ngModelChange", function AttendanceExConfirmComponent_tr_93_Template_label_ngModelChange_2_listener($event) {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(row_r5.selected, $event) || (row_r5.selected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 43);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 43);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "a", 45);
    \u0275\u0275listener("click", function AttendanceExConfirmComponent_tr_93_Template_a_click_8_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openDetail(row_r5));
    });
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 43);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 43);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275element(21, "br");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 43);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td", 43);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275element(29, "br");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "td");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "td", 43);
    \u0275\u0275template(35, AttendanceExConfirmComponent_tr_93_nz_tag_35_Template, 2, 1, "nz-tag", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "td")(37, "input", 47);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function AttendanceExConfirmComponent_tr_93_Template_input_ngModelChange_37_listener($event) {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(row_r5.hrComment, $event) || (row_r5.hrComment = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "td", 43);
    \u0275\u0275template(40, AttendanceExConfirmComponent_tr_93_div_40_Template, 2, 1, "div", 48);
    \u0275\u0275elementStart(41, "button", 49);
    \u0275\u0275listener("click", function AttendanceExConfirmComponent_tr_93_Template_button_click_41_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmLine(row_r5, "1"));
    });
    \u0275\u0275element(42, "i", 50);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "button", 51);
    \u0275\u0275listener("click", function AttendanceExConfirmComponent_tr_93_Template_button_click_45_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmLine(row_r5, "2"));
    });
    \u0275\u0275element(46, "i", 17);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("table-warning", row_r5.selected);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", row_r5.selected);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(55, _c2));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r2.pageIndex - 1) * ctx_r2.pageSize + i_r6 + 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.empId || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.empId);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.localName || null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.localName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.deptName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.deptName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.postGradeName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.postGradeName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.itemName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.itemName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.arDateStr);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(20, 34, "ps.col.indoorTime", "Gi\u1EDD v\xE0o"), ": ", row_r5.indoorTime);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(23, 37, "ps.col.outdoorTime", "Gi\u1EDD ra"), ": ", row_r5.outdoorTime, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r5.shiftName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(28, 40, "ps.col.indoorTime", "Gi\u1EDD v\xE0o"), ": ", row_r5.fromTime || row_r5.inTime);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(31, 43, "ps.col.outdoorTime", "Gi\u1EDD ra"), ": ", row_r5.toTime || row_r5.outTime, " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("title", row_r5.applyReason || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.applyReason);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r5.affirmFlagName);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", row_r5.hrComment);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(56, _c2))("placeholder", \u0275\u0275pipeBind2(38, 46, "lc.dialog.hrComment", "Nh\u1EADp \xFD ki\u1EBFn"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", row_r5.confirmBy);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(44, 49, "lc.btn.approve", "Duy\u1EC7t"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(48, 52, "lc.btn.reject", "T\u1EEB ch\u1ED1i"), " ");
  }
}
function AttendanceExConfirmComponent_tr_94_Template(rf, ctx) {
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
function AttendanceExConfirmComponent_ng_template_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r7 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r7, " ");
  }
}
function AttendanceExConfirmComponent_ng_container_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "label", 55);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "textarea", 56);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function AttendanceExConfirmComponent_ng_container_101_Template_textarea_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.batchRejectComment, $event) || (ctx_r2.batchRejectComment = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 4, "lc.dialog.hrComment", "Nh\u1EADp \xFD ki\u1EBFn"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.batchRejectComment);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(10, _c2))("placeholder", \u0275\u0275pipeBind2(5, 7, "lc.dialog.hrComment", "Nh\u1EADp \xFD ki\u1EBFn"));
    \u0275\u0275control();
  }
}
function AttendanceExConfirmComponent_ng_container_103_nz_alert_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 42);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzMessage", ctx_r2.detailErrorMessage() ?? "");
  }
}
function AttendanceExConfirmComponent_ng_container_103_ng_container_2_tr_42_Template(rf, ctx) {
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
function AttendanceExConfirmComponent_ng_container_103_ng_container_2_tr_43_Template(rf, ctx) {
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
function AttendanceExConfirmComponent_ng_container_103_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
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
    \u0275\u0275template(42, AttendanceExConfirmComponent_ng_container_103_ng_container_2_tr_42_Template, 4, 4, "tr", 37)(43, AttendanceExConfirmComponent_ng_container_103_ng_container_2_tr_43_Template, 15, 7, "tr", 68);
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
    \u0275\u0275elementStart(94, "tbody")(95, "tr")(96, "td", 43);
    \u0275\u0275text(97);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "td", 43);
    \u0275\u0275text(99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "td", 43);
    \u0275\u0275text(101);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "td", 43);
    \u0275\u0275text(103);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "td", 43);
    \u0275\u0275text(105);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(106, "div", 73)(107, "button", 16);
    \u0275\u0275listener("click", function AttendanceExConfirmComponent_ng_container_103_ng_container_2_Template_button_click_107_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeDetail());
    });
    \u0275\u0275text(108);
    \u0275\u0275pipe(109, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const d_r12 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 34, "applyAtt.subject", "Ti\xEAu \u0111\u1EC1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.detailApplyTitle(d_r12));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 37, "applyAtt.applicant", "Ng\u01B0\u1EDDi \u0111\u0103ng k\xFD"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.detailApplicant(d_r12));
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
    \u0275\u0275property("ngIf", !d_r12.approvalList?.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", d_r12.approvalList);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 61, "applyAtt.empInfo", "Th\xF4ng tin nh\xE2n vi\xEAn"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(53, 64, "common.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.detailEmployeeInfo(d_r12)["localName"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(58, 67, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.detailEmployeeInfo(d_r12)["empId"]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(64, 70, "common.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.detailEmployeeInfo(d_r12)["deptName"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 73, "common.position", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.detailEmployeeInfo(d_r12)["postGradeName"]);
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
    \u0275\u0275textInterpolate(ctx_r2.detailInfo(d_r12)["leaveTypeName"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.detailInfo(d_r12)["leaveFromTime"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.detailInfo(d_r12)["leaveToTime"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.detailInfo(d_r12)["applyLength"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.detailInfo(d_r12)["leaveReason"]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(109, 94, "common.close", "\u0110\xF3ng"));
  }
}
function AttendanceExConfirmComponent_ng_container_103_ng_template_3_div_0_Template(rf, ctx) {
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
function AttendanceExConfirmComponent_ng_container_103_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AttendanceExConfirmComponent_ng_container_103_ng_template_3_div_0_Template, 3, 4, "div", 75);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r2.detailLoading());
  }
}
function AttendanceExConfirmComponent_ng_container_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AttendanceExConfirmComponent_ng_container_103_nz_alert_1_Template, 1, 1, "nz-alert", 22)(2, AttendanceExConfirmComponent_ng_container_103_ng_container_2_Template, 110, 97, "ng-container", 57)(3, AttendanceExConfirmComponent_ng_container_103_ng_template_3_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const detailLoadingTpl_r13 = \u0275\u0275reference(4);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.detailErrorMessage());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.detailData())("ngIfElse", detailLoadingTpl_r13);
  }
}
var I18N_KEYS = [
  "aec.col.itemName",
  "aec.col.arDateStr",
  "aec.col.scanTime",
  "aec.col.shiftName",
  "aec.col.applyTime",
  "aec.msg.confirmApproveLine",
  "aec.msg.confirmRejectLine",
  "aec.msg.confirmApproveBatch",
  "aec.msg.confirmRejectBatch",
  "lc.btn.batchApprove",
  "lc.btn.batchReject",
  "lc.btn.approve",
  "lc.btn.reject",
  "lc.col.affirmStatus",
  "lc.col.hrConfirm",
  "lc.col.hrComment",
  "lc.dialog.hrComment",
  "lc.msg.selectApply",
  "lc.msg.approveSuccess",
  "lc.msg.rejectSuccess",
  "lc.msg.hrCommentRequired",
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
  "ps.col.indoorTime",
  "ps.col.outdoorTime",
  "ck.modal.title"
];
var CONFIRM_FLAG_OPTIONS = [
  { value: "", labelKey: "common.selectAll", fallback: "-- T\u1EA5t c\u1EA3 --" },
  { value: "0", labelKey: "applyAtt.confirmFlag.notConfirmed", fallback: "Ch\u01B0a x\xE1c nh\u1EADn" },
  { value: "1", labelKey: "applyAtt.confirmFlag.confirmed", fallback: "\u0110\xE3 x\xE1c nh\u1EADn" },
  { value: "2", labelKey: "applyAtt.confirmFlag.rejected", fallback: "T\u1EEB ch\u1ED1i" }
];
var DEFAULT_CONFIRM_FLAG = "0";
var AttendanceExConfirmComponent = class _AttendanceExConfirmComponent {
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
    this.api.getDetail(row.applyNo, row.itemNo).subscribe({
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
    return `[${info["leaveTypeName"] || this.i18n.t("ck.modal.title", "Th\xF4ng tin ph\xEA duy\u1EC7t")}]`;
  }
  /** Dòng "Tiêu đề" trong modal - đúng atexRenderData() bản gốc. */
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
  /** STT hàng phê duyệt - dòng tổng hợp xác nhận của HR có affirmLevel='100' hiển thị là 'HR' thay vì
   *  số thứ tự thô, đúng vaotRenderApprovalRows() bản gốc. */
  approvalStt(affirmLevel, index) {
    const stt = affirmLevel || String(index + 1);
    return stt === "100" ? "HR" : stt;
  }
  // ==================== Helpers ====================
  formatYmd(d) {
    return d ? formatDate(d, "yyyy-MM-dd", "vi") : "";
  }
  static \u0275fac = function AttendanceExConfirmComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AttendanceExConfirmComponent)(\u0275\u0275directiveInject(AttendanceExConfirmService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService), \u0275\u0275directiveInject(NzModalService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AttendanceExConfirmComponent, selectors: [["app-attendance-ex-confirm"]], decls: 104, vars: 130, consts: [["aecTotalTpl", ""], ["detailLoadingTpl", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-2"], [1, "form-label"], ["nz-input", "", "name", "searchEmpId", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "fromDate", "nzFormat", "yyyy-MM-dd", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "toDate", "nzFormat", "yyyy-MM-dd", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "confirmFlag", 1, "w-100", 3, "ngModelChange", "ngModel"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col-md-4", "d-flex", "align-items-end", "flex-wrap", "gap-2"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], ["nz-button", "", "nzType", "primary", "type", "button", 2, "background-color", "#2fb344", "border-color", "#2fb344", 3, "click"], [1, "bx", "bx-check-circle"], ["nz-button", "", "nzDanger", "", "type", "button", 3, "click"], [1, "bx", "bx-x-circle"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], ["nzShowSizeChanger", "", 1, "table-nowrap", 3, "nzPageIndexChange", "nzPageSizeChange", "nzData", "nzFrontPagination", "nzLoading", "nzTotal", "nzPageIndex", "nzPageSize", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "40px"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel", "nzIndeterminate"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "100px", 1, "text-center"], ["nzWidth", "160px"], ["nzWidth", "120px"], ["nzWidth", "130px"], ["nzWidth", "150px", 1, "text-center"], ["nzWidth", "90px", 1, "text-center"], ["nzWidth", "200px"], ["nzWidth", "120px", 1, "text-center"], ["nzWidth", "200px", 1, "text-center"], [3, "table-warning", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkText", "nzCancelText"], [4, "nzModalContent"], ["nzWidth", "70vw", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzBodyStyle", "nzFooter"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], [1, "text-center"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["href", "javascript:void(0)", 3, "click"], ["nzColor", "green", 4, "ngIf"], ["nz-input", "", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], ["class", "small text-muted mb-1", 4, "ngIf"], ["nz-button", "", "nzType", "primary", "nzSize", "small", 1, "me-1", 2, "background-color", "#2fb344", "border-color", "#2fb344", 3, "click"], [1, "bx", "bx-check"], ["nz-button", "", "nzDanger", "", "nzSize", "small", 3, "click"], ["nzColor", "green"], [1, "small", "text-muted", "mb-1"], ["colspan", "15", 1, "text-center", "text-muted", "py-3"], [1, "form-label", "fw-semibold"], ["nz-input", "", "rows", "3", 3, "ngModelChange", "ngModel", "ngModelOptions", "placeholder"], [4, "ngIf", "ngIfElse"], [1, "table-responsive", "mb-3"], [1, "table", "table-bordered", "table-sm", "align-middle", "mb-0"], [1, "table-light", "text-center", 2, "width", "160px"], [1, "table-light", "text-center"], [1, "table-responsive", "mb-4"], [2, "width", "50px"], [2, "width", "90px"], [2, "width", "110px"], [2, "width", "170px"], [2, "width", "120px"], [4, "ngFor", "ngForOf"], [1, "fw-bold", "mb-2"], [1, "table-light", "text-center", 2, "width", "100px"], [1, "table-responsive"], [2, "width", "140px"], [1, "d-flex", "justify-content-end", "gap-2", "mt-3"], ["colspan", "7", 1, "text-center", "text-muted"], ["class", "text-center text-muted py-3", 4, "ngIf"], [1, "text-center", "text-muted", "py-3"]], template: function AttendanceExConfirmComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "nz-card", 4)(3, "form", 5);
      \u0275\u0275listener("ngSubmit", function AttendanceExConfirmComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 6)(5, "label", 7);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function AttendanceExConfirmComponent_Template_input_ngModelChange_8_listener($event) {
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
      \u0275\u0275twoWayListener("ngModelChange", function AttendanceExConfirmComponent_Template_nz_date_picker_ngModelChange_14_listener($event) {
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
      \u0275\u0275twoWayListener("ngModelChange", function AttendanceExConfirmComponent_Template_nz_date_picker_ngModelChange_19_listener($event) {
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
      \u0275\u0275twoWayListener("ngModelChange", function AttendanceExConfirmComponent_Template_nz_select_ngModelChange_24_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.confirmFlag, $event) || (ctx.confirmFlag = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(25, AttendanceExConfirmComponent_nz_option_25_Template, 2, 5, "nz-option", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 13)(27, "button", 14);
      \u0275\u0275element(28, "i", 15);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "button", 16);
      \u0275\u0275listener("click", function AttendanceExConfirmComponent_Template_button_click_31_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(32, "i", 17);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "button", 18);
      \u0275\u0275listener("click", function AttendanceExConfirmComponent_Template_button_click_35_listener() {
        return ctx.batchApprove();
      });
      \u0275\u0275element(36, "i", 19);
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "button", 20);
      \u0275\u0275listener("click", function AttendanceExConfirmComponent_Template_button_click_39_listener() {
        return ctx.openBatchReject();
      });
      \u0275\u0275element(40, "i", 21);
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(43, "nz-card");
      \u0275\u0275template(44, AttendanceExConfirmComponent_nz_alert_44_Template, 1, 1, "nz-alert", 22);
      \u0275\u0275elementStart(45, "nz-table", 23);
      \u0275\u0275listener("nzPageIndexChange", function AttendanceExConfirmComponent_Template_nz_table_nzPageIndexChange_45_listener($event) {
        return ctx.onPageIndexChange($event);
      })("nzPageSizeChange", function AttendanceExConfirmComponent_Template_nz_table_nzPageSizeChange_45_listener($event) {
        return ctx.onPageSizeChange($event);
      });
      \u0275\u0275elementStart(46, "thead")(47, "tr")(48, "th", 24)(49, "label", 25);
      \u0275\u0275listener("ngModelChange", function AttendanceExConfirmComponent_Template_label_ngModelChange_49_listener($event) {
        return ctx.toggleSelectAll($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "th", 26);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "th", 27);
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "th", 28);
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "th", 28);
      \u0275\u0275text(60);
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "th", 29);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "th", 30);
      \u0275\u0275text(66);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "th", 27);
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "th", 31);
      \u0275\u0275text(72);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "th", 32);
      \u0275\u0275text(75);
      \u0275\u0275pipe(76, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "th", 31);
      \u0275\u0275text(78);
      \u0275\u0275pipe(79, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "th", 33);
      \u0275\u0275text(81);
      \u0275\u0275pipe(82, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "th", 34);
      \u0275\u0275text(84);
      \u0275\u0275pipe(85, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "th", 33);
      \u0275\u0275text(87);
      \u0275\u0275pipe(88, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "th", 35);
      \u0275\u0275text(90);
      \u0275\u0275pipe(91, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(92, "tbody");
      \u0275\u0275template(93, AttendanceExConfirmComponent_tr_93_Template, 49, 57, "tr", 36)(94, AttendanceExConfirmComponent_tr_94_Template, 4, 4, "tr", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275template(95, AttendanceExConfirmComponent_ng_template_95_Template, 2, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(97, "nz-modal", 38);
      \u0275\u0275pipe(98, "translate");
      \u0275\u0275pipe(99, "translate");
      \u0275\u0275pipe(100, "translate");
      \u0275\u0275listener("nzOnCancel", function AttendanceExConfirmComponent_Template_nz_modal_nzOnCancel_97_listener() {
        return ctx.cancelBatchReject();
      })("nzOnOk", function AttendanceExConfirmComponent_Template_nz_modal_nzOnOk_97_listener() {
        return ctx.confirmBatchReject();
      });
      \u0275\u0275template(101, AttendanceExConfirmComponent_ng_container_101_Template, 6, 11, "ng-container", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "nz-modal", 40);
      \u0275\u0275listener("nzOnCancel", function AttendanceExConfirmComponent_Template_nz_modal_nzOnCancel_102_listener() {
        return ctx.closeDetail();
      });
      \u0275\u0275template(103, AttendanceExConfirmComponent_ng_container_103_Template, 5, 3, "ng-container", 39);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const aecTotalTpl_r14 = \u0275\u0275reference(96);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 50, "common.search.empIdOrName", "M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchEmpId);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 53, "common.placeholder.empId", "Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 56, "common.fromDate", "T\u1EEB ng\xE0y"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.fromDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 59, "common.toDate", "\u0110\u1EBFn ng\xE0y"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.toDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 62, "applyAtt.search.confirmFlag", "Tr\u1EA1ng th\xE1i x\xE1c nh\u1EADn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.confirmFlag);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.confirmFlagOptions);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(30, 65, "common.search", "T\xECm ki\u1EBFm"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(34, 68, "common.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(38, 71, "lc.btn.batchApprove", "Duy\u1EC7t h\xE0ng lo\u1EA1t"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(42, 74, "lc.btn.batchReject", "T\u1EEB ch\u1ED1i h\xE0ng lo\u1EA1t"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzFrontPagination", false)("nzLoading", ctx.loading())("nzTotal", ctx.recordsTotal())("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", aecTotalTpl_r14)("nzScroll", \u0275\u0275pureFunction0(128, _c0));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngModel", ctx.allSelected)("nzIndeterminate", ctx.someSelected);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(52, 77, "common.no.serial", "NO."));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(55, 80, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(58, 83, "applyAtt.applicant", "Ng\u01B0\u1EDDi xin ph\xE9p"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(61, 86, "common.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(64, 89, "common.position", "Ch\u1EE9c v\u1EE5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(67, 92, "aec.col.itemName", "Ph\xE2n lo\u1EA1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(70, 95, "aec.col.arDateStr", "Ng\xE0y c\xF4ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(73, 98, "aec.col.scanTime", "Th\u1EDDi gian qu\u1EB9t th\u1EBB"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(76, 101, "aec.col.shiftName", "Ca"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(79, 104, "aec.col.applyTime", "Th\u1EDDi gian"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(82, 107, "common.reason", "Mi\xEAu t\u1EA3"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(85, 110, "lc.col.affirmStatus", "Tr\u1EA1ng th\xE1i duy\u1EC7t"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(88, 113, "lc.col.hrComment", "\xDD ki\u1EBFn nh\xE2n s\u1EF1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(91, 116, "lc.col.hrConfirm", "Nh\xE2n s\u1EF1 x\xE1c nh\u1EADn"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.rows());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.batchRejectVisible())("nzTitle", \u0275\u0275pipeBind2(98, 119, "lc.btn.batchReject", "T\u1EEB ch\u1ED1i h\xE0ng lo\u1EA1t"))("nzOkText", \u0275\u0275pipeBind2(99, 122, "lc.btn.reject", "T\u1EEB ch\u1ED1i"))("nzCancelText", \u0275\u0275pipeBind2(100, 125, "common.no", "Kh\xF4ng"));
      \u0275\u0275advance(5);
      \u0275\u0275property("nzVisible", ctx.detailVisible())("nzTitle", ctx.detailModalTitle(ctx.detailData()))("nzBodyStyle", \u0275\u0275pureFunction0(129, _c1))("nzFooter", null);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzDatePickerModule, NzDatePickerComponent, NzCheckboxModule, NzCheckboxComponent, NzTagModule, NzTagComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=attendance-ex-confirm.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttendanceExConfirmComponent, [{
    type: Component,
    args: [{ selector: "app-attendance-ex-confirm", standalone: true, imports: [
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
          <label class="form-label">{{ 'applyAtt.search.confirmFlag' | translate:'Tr\u1EA1ng th\xE1i x\xE1c nh\u1EADn' }}</label>
          <nz-select class="w-100" [(ngModel)]="confirmFlag" name="confirmFlag">
            <nz-option *ngFor="let o of confirmFlagOptions" [nzValue]="o.value" [nzLabel]="o.labelKey | translate:o.fallback"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-4 d-flex align-items-end flex-wrap gap-2">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'common.search' | translate:'T\xECm ki\u1EBFm' }}
          </button>
          <button nz-button type="button" (click)="clearSearch()">
            <i class="bx bx-x"></i> {{ 'common.clearFilter' | translate:'X\xF3a l\u1ECDc' }}
          </button>
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
                [nzPageSizeOptions]="pageSizeOptions" nzShowSizeChanger [nzShowTotal]="aecTotalTpl"
                (nzPageIndexChange)="onPageIndexChange($event)" (nzPageSizeChange)="onPageSizeChange($event)"
                [nzScroll]="{ x: '2200px', y: 'calc(100vh - 380px)' }"
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
            <th nzWidth="160px">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
            <th nzWidth="120px">{{ 'common.position' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
            <th nzWidth="130px">{{ 'aec.col.itemName' | translate:'Ph\xE2n lo\u1EA1i' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'aec.col.arDateStr' | translate:'Ng\xE0y c\xF4ng' }}</th>
            <th class="text-center" nzWidth="150px">{{ 'aec.col.scanTime' | translate:'Th\u1EDDi gian qu\u1EB9t th\u1EBB' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'aec.col.shiftName' | translate:'Ca' }}</th>
            <th class="text-center" nzWidth="150px">{{ 'aec.col.applyTime' | translate:'Th\u1EDDi gian' }}</th>
            <th nzWidth="200px">{{ 'common.reason' | translate:'Mi\xEAu t\u1EA3' }}</th>
            <th class="text-center" nzWidth="120px">{{ 'lc.col.affirmStatus' | translate:'Tr\u1EA1ng th\xE1i duy\u1EC7t' }}</th>
            <th nzWidth="200px">{{ 'lc.col.hrComment' | translate:'\xDD ki\u1EBFn nh\xE2n s\u1EF1' }}</th>
            <th class="text-center" nzWidth="200px">{{ 'lc.col.hrConfirm' | translate:'Nh\xE2n s\u1EF1 x\xE1c nh\u1EADn' }}</th>
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
            <td [attr.title]="row.itemName || null">{{ row.itemName }}</td>
            <td class="text-center">{{ row.arDateStr }}</td>
            <td class="text-center">
              {{ 'ps.col.indoorTime' | translate:'Gi\u1EDD v\xE0o' }}: {{ row.indoorTime }}<br>
              {{ 'ps.col.outdoorTime' | translate:'Gi\u1EDD ra' }}: {{ row.outdoorTime }}
            </td>
            <td class="text-center">{{ row.shiftName }}</td>
            <td class="text-center">
              {{ 'ps.col.indoorTime' | translate:'Gi\u1EDD v\xE0o' }}: {{ row.fromTime || row.inTime }}<br>
              {{ 'ps.col.outdoorTime' | translate:'Gi\u1EDD ra' }}: {{ row.toTime || row.outTime }}
            </td>
            <td [attr.title]="row.applyReason || null">{{ row.applyReason }}</td>
            <td class="text-center">
              <nz-tag *ngIf="row.affirmFlagName" nzColor="green">{{ row.affirmFlagName }}</nz-tag>
            </td>
            <td>
              <input nz-input [(ngModel)]="row.hrComment" [ngModelOptions]="{ standalone: true }"
                     [placeholder]="'lc.dialog.hrComment' | translate:'Nh\u1EADp \xFD ki\u1EBFn'">
            </td>
            <td class="text-center">
              <div *ngIf="row.confirmBy" class="small text-muted mb-1">{{ row.confirmBy }}</div>
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
        <ng-template #aecTotalTpl let-total>
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
              <td class="text-center">{{ detailInfo(d)['applyLength'] }}</td>
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
`, styles: ["/* src/app/attendance-ex-confirm/attendance-ex-confirm.component.css */\ntable td,\ntable th {\n  white-space: nowrap;\n}\ntable td {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=attendance-ex-confirm.component.css.map */\n"] }]
  }], () => [{ type: AttendanceExConfirmService }, { type: I18nService }, { type: NzMessageService }, { type: NzModalService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AttendanceExConfirmComponent, { className: "AttendanceExConfirmComponent", filePath: "src/app/attendance-ex-confirm/attendance-ex-confirm.component.ts", lineNumber: 89 });
})();
export {
  AttendanceExConfirmComponent
};
//# debugId=6a3e9fa6-c906-5fdb-90d1-c84e9fd71518
//# sourceMappingURL=chunk-D6ALWGPK.js.map
