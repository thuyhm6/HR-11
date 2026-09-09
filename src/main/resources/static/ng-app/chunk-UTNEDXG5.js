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

// src/app/ot-apply-info-list/ot-apply-info-list.service.ts
var API_BASE = "/ess/infoApply/api/myOtApply";
var OtApplyInfoListService = class _OtApplyInfoListService {
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
    return this.http.get("/ar/attendanceMintenance/api/overtime/detail", {
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
  static \u0275fac = function OtApplyInfoListService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OtApplyInfoListService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OtApplyInfoListService, factory: _OtApplyInfoListService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OtApplyInfoListService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/ot-apply-info-list/ot-apply-info-list.component.ts
var _c0 = () => [25, 50, 100, 200];
var _c1 = () => ({ x: "1400px" });
var _c2 = () => ({ "max-height": "75vh", "overflow-y": "auto" });
var _c3 = () => ["14014306", "14014307", "14014308"];
function OtApplyInfoListComponent_div_2_Template(rf, ctx) {
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
function OtApplyInfoListComponent_nz_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 45);
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r3.codeNo)("nzLabel", c_r3.codeName);
  }
}
function OtApplyInfoListComponent_nz_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 45);
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r4.codeNo)("nzLabel", c_r4.codeName);
  }
}
function OtApplyInfoListComponent_nz_alert_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 46);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r4.errorMessage() ?? "");
  }
}
function OtApplyInfoListComponent_tr_84_label_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 52);
    \u0275\u0275twoWayListener("ngModelChange", function OtApplyInfoListComponent_tr_84_label_2_Template_label_ngModelChange_0_listener($event) {
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
function OtApplyInfoListComponent_tr_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 47);
    \u0275\u0275listener("click", function OtApplyInfoListComponent_tr_84_Template_tr_click_0_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.openDetail(row_r7));
    });
    \u0275\u0275elementStart(1, "td", 48);
    \u0275\u0275listener("click", function OtApplyInfoListComponent_tr_84_Template_td_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(2, OtApplyInfoListComponent_tr_84_label_2_Template, 1, 1, "label", 49);
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
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 50);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 50);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pureFunction0(12, _c3).includes(row_r7.affirmFlag));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r9 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r7.otTypeName || row_r7.otTypeCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.applyOtDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.otFromTime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.otToTime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.formatDuration(row_r7.otApplyHour));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.deductLabel(row_r7.deductYn));
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r7.applyOtRemark || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r7.applyOtRemark);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.affirmFlagName || row_r7.affirmFlag);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.confirmFlagName);
  }
}
function OtApplyInfoListComponent_ng_template_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r10 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r10, " ");
  }
}
function OtApplyInfoListComponent_ng_container_89_nz_alert_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 46);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzMessage", ctx_r4.detailErrorMessage() ?? "");
  }
}
function OtApplyInfoListComponent_ng_container_89_ng_container_2_tr_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 65);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "poi.msg.noApprovalData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u ph\xEA duy\u1EC7t"));
  }
}
function OtApplyInfoListComponent_ng_container_89_ng_container_2_tr_65_Template(rf, ctx) {
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
function OtApplyInfoListComponent_ng_container_89_ng_container_2_Template(rf, ctx) {
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
    \u0275\u0275template(64, OtApplyInfoListComponent_ng_container_89_ng_container_2_tr_64_Template, 4, 4, "tr", 53)(65, OtApplyInfoListComponent_ng_container_89_ng_container_2_tr_65_Template, 15, 7, "tr", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const d_r12 = ctx.ngIf;
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 35, "poi.modal.empInfo", "Th\xF4ng tin nh\xE2n vi\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColumn", 2);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(6, 38, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r12.employeeInfo?.["empId"]);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(9, 41, "common.name", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r12.employeeInfo?.["localName"]);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(12, 44, "common.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r12.employeeInfo?.["deptName"]);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(15, 47, "common.position", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r12.employeeInfo?.["postGradeName"]);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(18, 50, "poi.field.otType", "Lo\u1EA1i t\u0103ng ca"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r12.otInfo?.["otTypeName"]);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(21, 53, "poi.col.otDate", "Ng\xE0y t\u0103ng ca"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r12.otInfo?.["applyOtDate"]);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(24, 56, "common.startTime", "B\u1EAFt \u0111\u1EA7u"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r12.otInfo?.["detailFromDateTime"]);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(27, 59, "common.endTime", "K\u1EBFt th\xFAc"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r12.otInfo?.["detailToDateTime"]);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(30, 62, "poi.col.hours", "S\u1ED1 gi\u1EDD"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r4.formatDuration(d_r12.otInfo?.["otApplyHour"]));
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(33, 65, "common.reason", "L\xFD do"))("nzSpan", 2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r12.otInfo?.["applyOtRemark"]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 68, "poi.col.approvalSeq", "Tr\xECnh t\u1EF1 duy\u1EC7t"));
    \u0275\u0275advance(3);
    \u0275\u0275property("nzData", d_r12.approvalList)("nzShowPagination", false);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 71, "common.no.serial", "STT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(47, 74, "poi.col.approvalSeq", "Tr\xECnh t\u1EF1 duy\u1EC7t"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 77, "common.approvalStatus", "Tr\u1EA1ng th\xE1i duy\u1EC7t"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(53, 80, "common.name", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(56, 83, "poi.modal.opinion", "\xDD ki\u1EBFn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(59, 86, "poi.col.actionTime", "Th\u1EDDi gian th\u1EF1c hi\u1EC7n"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(62, 89, "common.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !d_r12.approvalList?.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", d_r12.approvalList);
  }
}
function OtApplyInfoListComponent_ng_container_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, OtApplyInfoListComponent_ng_container_89_nz_alert_1_Template, 1, 1, "nz-alert", 27)(2, OtApplyInfoListComponent_ng_container_89_ng_container_2_Template, 66, 92, "ng-container", 53);
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
  "poi.field.otType",
  "poi.field.dateRange",
  "poi.col.otDate",
  "poi.col.mealRest",
  "poi.col.approvalSeq",
  "poi.col.actionTime",
  "poi.col.hours",
  "poi.btn.applyOt",
  "poi.label.rows",
  "poi.modal.title",
  "poi.modal.subject",
  "poi.modal.applicant",
  "poi.modal.empInfo",
  "poi.modal.otInfo",
  "poi.modal.opinion",
  "poi.msg.loading",
  "poi.msg.noData",
  "poi.msg.loadError",
  "poi.msg.noApprovalData",
  "poi.msg.selectMinOne",
  "poi.msg.confirmCancel1",
  "poi.msg.confirmCancel2",
  "poi.msg.cancelSuccess",
  "poi.msg.cancelFailed",
  "poi.msg.cancelError",
  "poi.msg.loadApprovalFailed",
  "poi.msg.loadDetailFailed",
  "poi.val.yes",
  "poi.val.no",
  "poi.unit.hour",
  "poi.unit.minute",
  "common.selectOne",
  "common.approvalStatus",
  "common.search",
  "common.quickFilter",
  "common.cancel",
  "common.no.serial",
  "common.startTime",
  "common.endTime",
  "common.duration",
  "common.reason",
  "common.status",
  "common.name",
  "common.empId",
  "common.deptName",
  "common.position",
  "common.close",
  "common.selectAll",
  "common.stt",
  "common.totalRows"
];
var CANCELABLE_FLAGS = ["14014306", "14014307", "14014308"];
var OtApplyInfoListComponent = class _OtApplyInfoListComponent {
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
  otTypeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "otTypeOptions" }] : (
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
        r.otTypeName,
        r.otTypeCode,
        r.applyOtDate,
        r.otFromTime,
        r.otToTime,
        r.applyOtRemark,
        r.affirmFlagName,
        r.confirmFlagName
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
  otTypeCode = null;
  affirmFlag = null;
  fromDate = null;
  toDate = null;
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadBasicInfo();
    this.api.getCodeList("31").subscribe((list) => this.otTypeOptions.set(list ?? []));
    this.api.getCodeList("14014304").subscribe((list) => this.affirmFlagOptions.set(list ?? []));
    this.initDefaultDateRange();
    this.search();
  }
  search() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getList({
      otTypeCode: this.otTypeCode ?? "",
      affirmFlag: this.affirmFlag ?? "",
      fromDate: this.formatYmd(this.fromDate),
      toDate: this.formatYmd(this.toDate)
    }).subscribe({
      next: (rows) => {
        this.rows.set((rows ?? []).map((r) => __spreadProps(__spreadValues({}, r), { selected: false })));
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("poi.msg.loadError", "L\u1ED7i t\u1EA3i d\u1EEF li\u1EC7u"));
        this.rows.set([]);
        this.loading.set(false);
      }
    });
  }
  /** Mặc định từ ngày 01 đến ngày cuối tháng hiện tại - giữ đúng hành vi poiGetDefaultDateRange() bản gốc. */
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
      this.message.warning(t("poi.msg.selectMinOne", "Vui l\xF2ng ch\u1ECDn \xEDt nh\u1EA5t m\u1ED9t d\xF2ng \u0111\u1EC3 h\u1EE7y b\u1ECF."));
      return;
    }
    const confirmMsg = `${t("poi.msg.confirmCancel1", "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n h\u1EE7y b\u1ECF")} ${selected.length} ${t("poi.msg.confirmCancel2", "\u0111\u01A1n xin t\u0103ng ca \u0111\xE3 ch\u1ECDn?")}`;
    this.modal.confirm({
      nzTitle: t("common.cancel", "H\u1EE7y"),
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
          this.message.success(res.message || t("poi.msg.cancelSuccess", "H\u1EE7y b\u1ECF th\xE0nh c\xF4ng."));
          this.search();
        } else {
          this.message.error(res?.error || t("poi.msg.cancelFailed", "H\u1EE7y b\u1ECF th\u1EA5t b\u1EA1i."));
        }
      },
      error: () => {
        this.cancelling.set(false);
        this.message.error(t("poi.msg.cancelError", "L\u1ED7i khi h\u1EE7y b\u1ECF \u0111\u01A1n."));
      }
    });
  }
  goApply() {
    this.tabs.openTab("/sst-ot-apply-info", this.i18n.t("poi.btn.applyOt", "Xin t\u0103ng ca"), "route");
  }
  openDetail(row) {
    this.detailVisible.set(true);
    this.detailLoading.set(true);
    this.detailErrorMessage.set(null);
    this.detailData.set(null);
    this.api.getDetail(String(row.applyNo), row.otTypeCode).subscribe({
      next: (res) => {
        this.detailData.set(res);
        this.detailLoading.set(false);
      },
      error: () => {
        this.detailErrorMessage.set(this.i18n.t("poi.msg.loadDetailFailed", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i"));
        this.detailLoading.set(false);
      }
    });
  }
  closeDetail() {
    this.detailVisible.set(false);
  }
  /** STT dòng phê duyệt - affirmLevel=100 là dòng xác nhận của HR (poiRenderApprovalRows() bản gốc). */
  approvalSeqLabel(item) {
    return String(item.affirmLevel) === "100" ? "HR" : item.affirmLevel;
  }
  deductLabel(deductYn) {
    return deductYn === "1" ? this.i18n.t("poi.val.yes", "C\xF3") : this.i18n.t("poi.val.no", "Kh\xF4ng");
  }
  /** Hiển thị thời lượng dạng "X Tiếng Y Phút" - đúng poiFormatHour() bản gốc. */
  formatDuration(otApplyHour) {
    const v = parseFloat(String(otApplyHour));
    if (isNaN(v))
      return otApplyHour != null ? String(otApplyHour) : "";
    const hrs = Math.floor(v);
    const mins = Math.round((v - hrs) * 60);
    let text = "";
    if (hrs > 0)
      text += `${hrs} ${this.i18n.t("poi.unit.hour", "Ti\u1EBFng")}`;
    if (mins > 0)
      text += (text ? " " : "") + `${mins} ${this.i18n.t("poi.unit.minute", "Ph\xFAt")}`;
    return text || String(v);
  }
  loadBasicInfo() {
    this.api.getBasicInfo().subscribe({
      next: (data) => this.basicInfo.set(data)
    });
  }
  formatYmd(d) {
    return d ? formatDate(d, "yyyy-MM-dd", "vi") : "";
  }
  static \u0275fac = function OtApplyInfoListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OtApplyInfoListComponent)(\u0275\u0275directiveInject(OtApplyInfoListService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService), \u0275\u0275directiveInject(NzModalService), \u0275\u0275directiveInject(TabService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OtApplyInfoListComponent, selectors: [["app-ot-apply-info-list"]], decls: 90, vars: 106, consts: [["oailTable", ""], ["oailTotalTpl", ""], [1, "row"], [1, "col-12"], ["class", "card mb-3", 4, "ngIf"], [1, "card", "mb-3"], [1, "card-body"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["name", "otTypeCode", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["name", "affirmFlag", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [1, "col-md-4"], [1, "d-flex", "align-items-center", "gap-2"], ["name", "fromDate", "nzFormat", "yyyy-MM-dd", 2, "width", "150px", 3, "ngModelChange", "ngModel"], ["name", "toDate", "nzFormat", "yyyy-MM-dd", 2, "width", "150px", 3, "ngModelChange", "ngModel"], [1, "col-md-2", "d-flex", "align-items-end"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], [1, "d-flex", "align-items-center", "gap-2", "mb-2", "flex-wrap"], ["nz-input", "", 2, "max-width", "220px", 3, "ngModelChange", "ngModel", "placeholder"], [1, "ms-auto", "d-flex", "gap-2"], ["nz-button", "", "nzDanger", "", 3, "click", "nzLoading"], [1, "bx", "bx-x-circle"], ["nz-button", "", "nzType", "primary", 3, "click"], [1, "bx", "bx-plus-circle"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [1, "table-nowrap", 3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "40px"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel", "nzIndeterminate"], ["nzWidth", "50px", 1, "text-center"], ["nzWidth", "150px"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "120px", 1, "text-center"], ["nzWidth", "140px", 1, "text-center"], ["nzWidth", "200px"], ["class", "oail-row-clickable", 3, "click", 4, "ngFor", "ngForOf"], ["nzWidth", "55vw", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzBodyStyle", "nzFooter"], [4, "nzModalContent"], [1, "card-body", "p-0"], [1, "table", "table-bordered", "table-sm", "align-middle", "mb-0", 2, "table-layout", "fixed"], [2, "width", "15%"], [2, "width", "35%"], [1, "table-light", "text-center"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], [1, "oail-row-clickable", 3, "click"], [1, "text-center", 3, "click"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "text-center"], ["href", "javascript:void(0)"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel"], [4, "ngIf"], [1, "fw-bold", "mb-2"], ["nzBordered", "", "nzSize", "small", 1, "mb-3", 3, "nzColumn"], [3, "nzTitle"], [3, "nzTitle", "nzSpan"], [1, "table-responsive"], ["nzSize", "small", 3, "nzData", "nzShowPagination"], [1, "text-center", 2, "width", "50px"], [1, "text-center", 2, "width", "110px"], [1, "text-center", 2, "width", "170px"], [2, "width", "120px"], [4, "ngFor", "ngForOf"], ["colspan", "7", 1, "text-center", "text-muted"]], template: function OtApplyInfoListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
      \u0275\u0275template(2, OtApplyInfoListComponent_div_2_Template, 53, 40, "div", 4);
      \u0275\u0275elementStart(3, "div", 5)(4, "div", 6)(5, "form", 7);
      \u0275\u0275listener("ngSubmit", function OtApplyInfoListComponent_Template_form_ngSubmit_5_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(6, "div", 8)(7, "label", 9);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "nz-select", 10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function OtApplyInfoListComponent_Template_nz_select_ngModelChange_10_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.otTypeCode, $event) || (ctx.otTypeCode = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(12, OtApplyInfoListComponent_nz_option_12_Template, 1, 2, "nz-option", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 8)(14, "label", 9);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "nz-select", 12);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function OtApplyInfoListComponent_Template_nz_select_ngModelChange_17_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.affirmFlag, $event) || (ctx.affirmFlag = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(19, OtApplyInfoListComponent_nz_option_19_Template, 1, 2, "nz-option", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 13)(21, "label", 9);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 14)(25, "nz-date-picker", 15);
      \u0275\u0275twoWayListener("ngModelChange", function OtApplyInfoListComponent_Template_nz_date_picker_ngModelChange_25_listener($event) {
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
      \u0275\u0275twoWayListener("ngModelChange", function OtApplyInfoListComponent_Template_nz_date_picker_ngModelChange_28_listener($event) {
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
      \u0275\u0275twoWayListener("ngModelChange", function OtApplyInfoListComponent_Template_input_ngModelChange_35_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.quickFilterKeyword, $event) || (ctx.quickFilterKeyword = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(37, "div", 22)(38, "button", 23);
      \u0275\u0275listener("click", function OtApplyInfoListComponent_Template_button_click_38_listener() {
        return ctx.cancelSelected();
      });
      \u0275\u0275element(39, "i", 24);
      \u0275\u0275text(40);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "button", 25);
      \u0275\u0275listener("click", function OtApplyInfoListComponent_Template_button_click_42_listener() {
        return ctx.goApply();
      });
      \u0275\u0275element(43, "i", 26);
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(46, OtApplyInfoListComponent_nz_alert_46_Template, 1, 1, "nz-alert", 27);
      \u0275\u0275elementStart(47, "nz-table", 28, 0)(49, "thead")(50, "tr")(51, "th", 29)(52, "label", 30);
      \u0275\u0275listener("ngModelChange", function OtApplyInfoListComponent_Template_label_ngModelChange_52_listener($event) {
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
      \u0275\u0275elementStart(62, "th", 34);
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
      \u0275\u0275elementStart(71, "th", 35);
      \u0275\u0275text(72);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "th", 36);
      \u0275\u0275text(75);
      \u0275\u0275pipe(76, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "th", 34);
      \u0275\u0275text(78);
      \u0275\u0275pipe(79, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "th", 34);
      \u0275\u0275text(81);
      \u0275\u0275pipe(82, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(83, "tbody");
      \u0275\u0275template(84, OtApplyInfoListComponent_tr_84_Template, 24, 13, "tr", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275template(85, OtApplyInfoListComponent_ng_template_85_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(87, "nz-modal", 38);
      \u0275\u0275pipe(88, "translate");
      \u0275\u0275listener("nzOnCancel", function OtApplyInfoListComponent_Template_nz_modal_nzOnCancel_87_listener() {
        return ctx.closeDetail();
      });
      \u0275\u0275template(89, OtApplyInfoListComponent_ng_container_89_Template, 3, 2, "ng-container", 39);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const oailTable_r13 = \u0275\u0275reference(48);
      const oailTotalTpl_r14 = \u0275\u0275reference(86);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.basicInfo());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 43, "poi.field.otType", "T\u0103ng ca"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.otTypeCode);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(11, 46, "common.selectOne", "L\u1EF1a ch\u1ECDn"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.otTypeOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 49, "common.approvalStatus", "Tr\u1EA1ng th\xE1i duy\u1EC7t"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.affirmFlag);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(18, 52, "common.selectOne", "L\u1EF1a ch\u1ECDn"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.affirmFlagOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 55, "poi.field.dateRange", "Th\u1EDDi gian"));
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.fromDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.toDate);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(33, 58, "common.search", "T\xECm ki\u1EBFm"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.quickFilterKeyword);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(36, 61, "common.quickFilter", "L\u1ECDc nhanh"));
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275property("nzLoading", ctx.cancelling());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(41, 64, "common.cancel", "H\u1EE7y b\u1ECF"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(45, 67, "poi.btn.applyOt", "Xin t\u0103ng ca"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.filteredRows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", \u0275\u0275pureFunction0(103, _c0))("nzShowTotal", oailTotalTpl_r14)("nzScroll", \u0275\u0275pureFunction0(104, _c1));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.allCancelableSelected())("nzIndeterminate", ctx.someCancelableSelected());
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(55, 70, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(58, 73, "poi.field.otType", "T\u0103ng ca"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(61, 76, "poi.col.otDate", "Ng\xE0y t\u0103ng ca"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(64, 79, "common.startTime", "Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(67, 82, "common.endTime", "Th\u1EDDi gian k\u1EBFt th\xFAc"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(70, 85, "common.duration", "Th\u1EDDi l\u01B0\u1EE3ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(73, 88, "poi.col.mealRest", "B\u1EA3o c\u01A1m / Ngh\u1EC9 ng\u01A1i (30')"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(76, 91, "common.reason", "L\xFD do"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(79, 94, "common.approvalStatus", "Tr\u1EA1ng th\xE1i duy\u1EC7t"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(82, 97, "common.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", oailTable_r13.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.detailVisible())("nzTitle", \u0275\u0275pipeBind2(88, 100, "poi.modal.otInfo", "Th\xF4ng tin t\u0103ng ca"))("nzBodyStyle", \u0275\u0275pureFunction0(105, _c2))("nzFooter", null);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzDatePickerModule, NzDatePickerComponent, NzCheckboxModule, NzCheckboxComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, NzDescriptionsModule, NzDescriptionsComponent, NzDescriptionsItemComponent, TranslatePipe], styles: ["\n.oail-row-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.oail-row-clickable[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n/*# sourceMappingURL=ot-apply-info-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OtApplyInfoListComponent, [{
    type: Component,
    args: [{ selector: "app-ot-apply-info-list", standalone: true, imports: [
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
            <label class="form-label">{{ 'poi.field.otType' | translate:'T\u0103ng ca' }}</label>
            <nz-select class="w-100" [(ngModel)]="otTypeCode" name="otTypeCode" nzAllowClear
                       [nzPlaceHolder]="'common.selectOne' | translate:'L\u1EF1a ch\u1ECDn'">
              <nz-option *ngFor="let c of otTypeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
            </nz-select>
          </div>
          <div class="col-md-3">
            <label class="form-label">{{ 'common.approvalStatus' | translate:'Tr\u1EA1ng th\xE1i duy\u1EC7t' }}</label>
            <nz-select class="w-100" [(ngModel)]="affirmFlag" name="affirmFlag" nzAllowClear
                       [nzPlaceHolder]="'common.selectOne' | translate:'L\u1EF1a ch\u1ECDn'">
              <nz-option *ngFor="let c of affirmFlagOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
            </nz-select>
          </div>
          <div class="col-md-4">
            <label class="form-label">{{ 'poi.field.dateRange' | translate:'Th\u1EDDi gian' }}</label>
            <div class="d-flex align-items-center gap-2">
              <nz-date-picker style="width:150px;" [(ngModel)]="fromDate" name="fromDate" nzFormat="yyyy-MM-dd"></nz-date-picker>
              <span>~</span>
              <nz-date-picker style="width:150px;" [(ngModel)]="toDate" name="toDate" nzFormat="yyyy-MM-dd"></nz-date-picker>
            </div>
          </div>
          <div class="col-md-2 d-flex align-items-end">
            <button nz-button nzType="primary" type="submit">
              <i class="bx bx-search"></i> {{ 'common.search' | translate:'T\xECm ki\u1EBFm' }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- ===== Toolbar ===== -->
    <div class="d-flex align-items-center gap-2 mb-2 flex-wrap">
      <input nz-input style="max-width:220px;" [(ngModel)]="quickFilterKeyword"
             [placeholder]="'common.quickFilter' | translate:'L\u1ECDc nhanh'">
      <div class="ms-auto d-flex gap-2">
        <button nz-button nzDanger [nzLoading]="cancelling()" (click)="cancelSelected()">
          <i class="bx bx-x-circle"></i> {{ 'common.cancel' | translate:'H\u1EE7y b\u1ECF' }}
        </button>
        <button nz-button nzType="primary" (click)="goApply()">
          <i class="bx bx-plus-circle"></i> {{ 'poi.btn.applyOt' | translate:'Xin t\u0103ng ca' }}
        </button>
      </div>
    </div>

    <!-- ===== B\u1EA3ng danh s\xE1ch ===== -->
    <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

    <nz-table [nzData]="filteredRows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
              [nzPageSizeOptions]="[25, 50, 100, 200]" [nzShowTotal]="oailTotalTpl"
              [nzScroll]="{ x: '1400px' }" class="table-nowrap" #oailTable>
      <thead>
        <tr>
          <th nzWidth="40px">
            <label nz-checkbox [ngModel]="allCancelableSelected()" [nzIndeterminate]="someCancelableSelected()"
                   (ngModelChange)="toggleSelectAll($event)"></label>
          </th>
          <th class="text-center" nzWidth="50px">{{ 'common.stt' | translate:'STT' }}</th>
          <th nzWidth="150px">{{ 'poi.field.otType' | translate:'T\u0103ng ca' }}</th>
          <th class="text-center" nzWidth="110px">{{ 'poi.col.otDate' | translate:'Ng\xE0y t\u0103ng ca' }}</th>
          <th class="text-center" nzWidth="120px">{{ 'common.startTime' | translate:'Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u' }}</th>
          <th class="text-center" nzWidth="120px">{{ 'common.endTime' | translate:'Th\u1EDDi gian k\u1EBFt th\xFAc' }}</th>
          <th class="text-center" nzWidth="110px">{{ 'common.duration' | translate:'Th\u1EDDi l\u01B0\u1EE3ng' }}</th>
          <th class="text-center" nzWidth="140px">{{ 'poi.col.mealRest' | translate:"B\u1EA3o c\u01A1m / Ngh\u1EC9 ng\u01A1i (30')" }}</th>
          <th nzWidth="200px">{{ 'common.reason' | translate:'L\xFD do' }}</th>
          <th class="text-center" nzWidth="120px">{{ 'common.approvalStatus' | translate:'Tr\u1EA1ng th\xE1i duy\u1EC7t' }}</th>
          <th class="text-center" nzWidth="120px">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of oailTable.data; let i = index" class="oail-row-clickable" (click)="openDetail(row)">
          <td class="text-center" (click)="$event.stopPropagation()">
            <label nz-checkbox *ngIf="[ '14014306', '14014307', '14014308' ].includes(row.affirmFlag)" [(ngModel)]="row.selected"></label>
          </td>
          <td class="text-center">{{ i + 1 }}</td>
          <td><a href="javascript:void(0)">{{ row.otTypeName || row.otTypeCode }}</a></td>
          <td class="text-center">{{ row.applyOtDate }}</td>
          <td class="text-center">{{ row.otFromTime }}</td>
          <td class="text-center">{{ row.otToTime }}</td>
          <td class="text-center">{{ formatDuration(row.otApplyHour) }}</td>
          <td class="text-center">{{ deductLabel(row.deductYn) }}</td>
          <td [attr.title]="row.applyOtRemark || null">{{ row.applyOtRemark }}</td>
          <td class="text-center">{{ row.affirmFlagName || row.affirmFlag }}</td>
          <td class="text-center">{{ row.confirmFlagName }}</td>
        </tr>
      </tbody>
      <ng-template #oailTotalTpl let-total>
        {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
      </ng-template>
    </nz-table>

  </div>
</div>

<!-- Modal chi ti\u1EBFt \u0111\u01A1n t\u0103ng ca -->
<nz-modal [nzVisible]="detailVisible()" [nzTitle]="'poi.modal.otInfo' | translate:'Th\xF4ng tin t\u0103ng ca'" nzWidth="55vw"
          [nzBodyStyle]="{ 'max-height': '75vh', 'overflow-y': 'auto' }"
          (nzOnCancel)="closeDetail()" [nzFooter]="null">
  <ng-container *nzModalContent>
    <nz-alert *ngIf="detailErrorMessage()" nzType="error" [nzMessage]="detailErrorMessage() ?? ''" class="mb-3"></nz-alert>
    <ng-container *ngIf="!detailLoading() && detailData() as d">
      <h6 class="fw-bold mb-2">{{ 'poi.modal.empInfo' | translate:'Th\xF4ng tin nh\xE2n vi\xEAn' }}</h6>
      <nz-descriptions nzBordered [nzColumn]="2" nzSize="small" class="mb-3">
        <nz-descriptions-item [nzTitle]="'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn'">{{ d.employeeInfo?.['empId'] }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'common.name' | translate:'H\u1ECD t\xEAn'">{{ d.employeeInfo?.['localName'] }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'common.deptName' | translate:'Ph\xF2ng ban'">{{ d.employeeInfo?.['deptName'] }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'common.position' | translate:'Ch\u1EE9c v\u1EE5'">{{ d.employeeInfo?.['postGradeName'] }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'poi.field.otType' | translate:'Lo\u1EA1i t\u0103ng ca'">{{ d.otInfo?.['otTypeName'] }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'poi.col.otDate' | translate:'Ng\xE0y t\u0103ng ca'">{{ d.otInfo?.['applyOtDate'] }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'common.startTime' | translate:'B\u1EAFt \u0111\u1EA7u'">{{ d.otInfo?.['detailFromDateTime'] }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'common.endTime' | translate:'K\u1EBFt th\xFAc'">{{ d.otInfo?.['detailToDateTime'] }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'poi.col.hours' | translate:'S\u1ED1 gi\u1EDD'">{{ formatDuration(d.otInfo?.['otApplyHour']) }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'common.reason' | translate:'L\xFD do'" [nzSpan]="2">{{ d.otInfo?.['applyOtRemark'] }}</nz-descriptions-item>
      </nz-descriptions>

      <h6 class="fw-bold mb-2">{{ 'poi.col.approvalSeq' | translate:'Tr\xECnh t\u1EF1 duy\u1EC7t' }}</h6>
      <div class="table-responsive">
        <nz-table [nzData]="d.approvalList" [nzShowPagination]="false" nzSize="small">
          <thead>
            <tr>
              <th class="text-center" style="width:50px">{{ 'common.no.serial' | translate:'STT' }}</th>
              <th class="text-center" style="width:110px">{{ 'poi.col.approvalSeq' | translate:'Tr\xECnh t\u1EF1 duy\u1EC7t' }}</th>
              <th class="text-center" style="width:110px">{{ 'common.approvalStatus' | translate:'Tr\u1EA1ng th\xE1i duy\u1EC7t' }}</th>
              <th>{{ 'common.name' | translate:'H\u1ECD t\xEAn' }}</th>
              <th>{{ 'poi.modal.opinion' | translate:'\xDD ki\u1EBFn' }}</th>
              <th class="text-center" style="width:170px">{{ 'poi.col.actionTime' | translate:'Th\u1EDDi gian th\u1EF1c hi\u1EC7n' }}</th>
              <th style="width:120px">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="!d.approvalList?.length">
              <td colspan="7" class="text-center text-muted">{{ 'poi.msg.noApprovalData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u ph\xEA duy\u1EC7t' }}</td>
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
`, styles: ["/* src/app/ot-apply-info-list/ot-apply-info-list.component.css */\n.oail-row-clickable {\n  cursor: pointer;\n}\n.oail-row-clickable:hover {\n  background: #fafafa;\n}\n/*# sourceMappingURL=ot-apply-info-list.component.css.map */\n"] }]
  }], () => [{ type: OtApplyInfoListService }, { type: I18nService }, { type: NzMessageService }, { type: NzModalService }, { type: TabService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OtApplyInfoListComponent, { className: "OtApplyInfoListComponent", filePath: "src/app/ot-apply-info-list/ot-apply-info-list.component.ts", lineNumber: 73 });
})();
export {
  OtApplyInfoListComponent
};
//# debugId=7e9086b4-c4d1-54c6-bfff-5f216fe4077d
//# sourceMappingURL=chunk-UTNEDXG5.js.map
