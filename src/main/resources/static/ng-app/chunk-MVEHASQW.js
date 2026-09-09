import {
  NzMessageService
} from "./chunk-XWW7CXU6.js";
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
import "./chunk-2QLZSMGV.js";
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
  HttpHeaders,
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
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTW5U2M5.js";

// src/app/sst-ot-apply-info/sst-ot-apply-info.service.ts
var OT_APPLY_TYPE_NO = "31";
var SstOtApplyInfoService = class _SstOtApplyInfoService {
  constructor(http) {
    this.http = http;
  }
  http;
  getBasicInfo() {
    return this.http.get("/ess/empinfo/api/personalInfo/myInfo", { withCredentials: true });
  }
  getOtDateInfo(applyDate) {
    return this.http.get("/ess/infoApply/api/otDateInfo", {
      params: new HttpParams().set("applyDate", applyDate),
      withCredentials: true
    });
  }
  getOtDuration(applyOtDate, otFromTime, otToTime, deductYn) {
    const params = new HttpParams().set("applyOtDate", applyOtDate).set("otFromTime", otFromTime).set("otToTime", otToTime).set("deductYn", deductYn);
    return this.http.get("/ess/infoApply/api/otDuration", { params, withCredentials: true });
  }
  /** Endpoint gốc nhận @RequestParam (không phải @RequestBody JSON) nên phải gửi dạng
   *  application/x-www-form-urlencoded - đúng cách $.post() của jQuery bản gốc gửi lên. */
  getApprovers(personId, otTypeCode, applyLength) {
    const body = new HttpParams().set("applyTypeNo", OT_APPLY_TYPE_NO).set("personId", personId).set("applyTypeCode", otTypeCode || "").set("applyLength", applyLength || "0");
    const headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");
    return this.http.post("/ar/attendanceMintenance/api/leaveApply/approvers", body.toString(), {
      headers,
      withCredentials: true
    });
  }
  save(payload) {
    return this.http.post("/ar/attendanceMintenance/api/overtime/save", payload, { withCredentials: true });
  }
  static \u0275fac = function SstOtApplyInfoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SstOtApplyInfoService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SstOtApplyInfoService, factory: _SstOtApplyInfoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SstOtApplyInfoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/sst-ot-apply-info/sst-ot-apply-info.component.ts
var _c0 = () => ({ nzFormat: "HH:mm" });
function SstOtApplyInfoComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "table", 8)(3, "colgroup");
    \u0275\u0275element(4, "col", 9)(5, "col", 10)(6, "col", 9)(7, "col", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "tbody")(9, "tr")(10, "th", 11);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 11);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "tr")(21, "th", 11);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 11);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "tr")(32, "th", 11);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "td");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th", 11);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "td");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "tr")(43, "th", 11);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "td");
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th", 11);
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
function SstOtApplyInfoComponent_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xA0\xA0", \u0275\u0275pipeBind2(2, 2, "essOt.stat.maxOt", "T\u1ED1i \u0111a:"), " 40h ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 5, "essOt.limited", "(c\xF3 gi\u1EDBi h\u1EA1n)"));
  }
}
function SstOtApplyInfoComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \xA0\xA0");
    \u0275\u0275elementStart(1, "span", 32);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "essOt.unlimitedMonth", "(kh\xF4ng gi\u1EDBi h\u1EA1n th\xE1ng)"));
  }
}
function SstOtApplyInfoComponent_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xA0\xA0", \u0275\u0275pipeBind2(2, 2, "essOt.stat.maxOt", "T\u1ED1i \u0111a:"), " 300h ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 5, "essOt.limited", "(c\xF3 gi\u1EDBi h\u1EA1n)"));
  }
}
function SstOtApplyInfoComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \xA0\xA0");
    \u0275\u0275elementStart(1, "span", 32);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "essOt.unlimitedYear", "(kh\xF4ng gi\u1EDBi h\u1EA1n n\u0103m)"));
  }
}
function SstOtApplyInfoComponent_tr_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 33);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, ctx_r2.approversLoaded() ? "essOt.msg.noApprover" : "essOt.selectDateFirst", ctx_r2.approversLoaded() ? "Kh\xF4ng c\xF3 ng\u01B0\u1EDDi ph\xEA duy\u1EC7t" : "Ch\u1ECDn ng\xE0y t\u0103ng ca \u0111\u1EC3 xem ng\u01B0\u1EDDi ph\xEA duy\u1EC7t"), " ");
  }
}
function SstOtApplyInfoComponent_tr_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 34);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.affirmLevel || i_r5 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.empId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.deptName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.postionName || item_r4.positionName);
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
  "essOt.applyDate",
  "essOt.otStatus",
  "essOt.otStartTimeLabel",
  "essOt.otType",
  "essOt.inOutTime",
  "essOt.inTime",
  "essOt.outTime",
  "essOt.shift",
  "essOt.duration",
  "essOt.mealBreak",
  "essOt.yes",
  "essOt.reason",
  "essOt.approverList",
  "essOt.approver",
  "essOt.submit",
  "essOt.selectDateFirst",
  "essOt.msg.loading",
  "essOt.msg.noApprover",
  "essOt.msg.loadApproverFailed",
  "essOt.msg.selectDate",
  "essOt.msg.empNotLoaded",
  "essOt.msg.enterTime",
  "essOt.msg.invalidDuration",
  "essOt.msg.submitSuccess",
  "essOt.msg.submitError",
  "essOt.msg.submitConnError",
  "essOt.msg.endAfterStart",
  "essOt.msg.otTypeMissing",
  "essOt.msg.hoursMustBePositive",
  "essOt.msg.monthLimitExceeded",
  "essOt.msg.yearLimitExceeded",
  "essOt.stat.thisMonth",
  "essOt.stat.weekday",
  "essOt.stat.maxOt",
  "essOt.stat.thisYear",
  "essOt.limited",
  "essOt.unlimitedMonth",
  "essOt.unlimitedYear",
  "sa.col.stt",
  "sa.col.empId",
  "sa.col.dept",
  "sa.col.position"
];
var OT_TYPE_HOLIDAY = "32";
var OT_LIMIT_MONTH_HOURS = 40;
var OT_LIMIT_YEAR_HOURS = 300;
var SstOtApplyInfoComponent = class _SstOtApplyInfoComponent {
  constructor(api, i18n, message) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
  }
  api;
  i18n;
  message;
  basicInfo = signal(
    null,
    ...ngDevMode ? [{ debugName: "basicInfo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  applyDate = null;
  otFromTime = null;
  otToTime = null;
  mealCheck = false;
  reason = "";
  shiftName = signal(
    "--",
    ...ngDevMode ? [{ debugName: "shiftName" }] : (
      /* istanbul ignore next */
      []
    )
  );
  workTimeText = signal(
    "--",
    ...ngDevMode ? [{ debugName: "workTimeText" }] : (
      /* istanbul ignore next */
      []
    )
  );
  indoorTime = signal(
    "**:**",
    ...ngDevMode ? [{ debugName: "indoorTime" }] : (
      /* istanbul ignore next */
      []
    )
  );
  outdoorTime = signal(
    "**:**",
    ...ngDevMode ? [{ debugName: "outdoorTime" }] : (
      /* istanbul ignore next */
      []
    )
  );
  otTypeName = signal(
    "--",
    ...ngDevMode ? [{ debugName: "otTypeName" }] : (
      /* istanbul ignore next */
      []
    )
  );
  duration = signal(
    "--",
    ...ngDevMode ? [{ debugName: "duration" }] : (
      /* istanbul ignore next */
      []
    )
  );
  otTotalMonth = signal(
    0,
    ...ngDevMode ? [{ debugName: "otTotalMonth" }] : (
      /* istanbul ignore next */
      []
    )
  );
  otWeekdayTotal = signal(
    0,
    ...ngDevMode ? [{ debugName: "otWeekdayTotal" }] : (
      /* istanbul ignore next */
      []
    )
  );
  otLimitEnabled = signal(
    false,
    ...ngDevMode ? [{ debugName: "otLimitEnabled" }] : (
      /* istanbul ignore next */
      []
    )
  );
  otTotalYear = signal(
    0,
    ...ngDevMode ? [{ debugName: "otTotalYear" }] : (
      /* istanbul ignore next */
      []
    )
  );
  otLimit100Enabled = signal(
    false,
    ...ngDevMode ? [{ debugName: "otLimit100Enabled" }] : (
      /* istanbul ignore next */
      []
    )
  );
  approvers = signal(
    [],
    ...ngDevMode ? [{ debugName: "approvers" }] : (
      /* istanbul ignore next */
      []
    )
  );
  approversLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "approversLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  approversLoaded = signal(
    false,
    ...ngDevMode ? [{ debugName: "approversLoaded" }] : (
      /* istanbul ignore next */
      []
    )
  );
  submitting = signal(
    false,
    ...ngDevMode ? [{ debugName: "submitting" }] : (
      /* istanbul ignore next */
      []
    )
  );
  personId = "";
  localName = "";
  empId = "";
  otTypeCode = "";
  otLength = 0;
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.applyDate = /* @__PURE__ */ new Date();
    this.api.getBasicInfo().subscribe((data) => {
      this.basicInfo.set(data);
      this.personId = data?.personId || "";
      this.localName = data?.localName || "";
      this.empId = data?.empId || "";
      this.loadDateInfo();
      this.loadApprovers();
    });
  }
  onDateChange() {
    this.loadDateInfo();
    this.loadApprovers();
  }
  onTimeChange() {
    this.calcDuration();
  }
  onMealCheckChange() {
    this.calcDuration();
  }
  submit() {
    const t = (key, fallback) => this.i18n.t(key, fallback);
    if (!this.applyDate) {
      this.message.warning(t("essOt.msg.selectDate", "Vui l\xF2ng ch\u1ECDn ng\xE0y t\u0103ng ca."));
      return;
    }
    if (!this.personId) {
      this.message.warning(t("essOt.msg.empNotLoaded", "Ch\u01B0a t\u1EA3i th\xF4ng tin nh\xE2n vi\xEAn."));
      return;
    }
    if (!this.otFromTime || !this.otToTime) {
      this.message.warning(t("essOt.msg.enterTime", "Vui l\xF2ng nh\u1EADp th\u1EDDi gian t\u0103ng ca."));
      return;
    }
    if (this.otToTime <= this.otFromTime) {
      this.message.warning(t("essOt.msg.endAfterStart", "Th\u1EDDi gian k\u1EBFt th\xFAc ph\u1EA3i sau th\u1EDDi gian b\u1EAFt \u0111\u1EA7u."));
      return;
    }
    if (this.duration() === "--") {
      this.message.warning(t("essOt.msg.invalidDuration", "Th\u1EDDi l\u01B0\u1EE3ng kh\xF4ng h\u1EE3p l\u1EC7."));
      return;
    }
    if (!this.otTypeCode) {
      this.message.warning(t("essOt.msg.otTypeMissing", "Ch\u01B0a x\xE1c \u0111\u1ECBnh lo\u1EA1i t\u0103ng ca. Vui l\xF2ng ch\u1ECDn l\u1EA1i ng\xE0y t\u0103ng ca."));
      return;
    }
    const otApplyHour = this.otLength > 0 ? String(this.otLength) : "0";
    if (this.otLength <= 0) {
      this.message.warning(t("essOt.msg.hoursMustBePositive", "S\u1ED1 gi\u1EDD t\u0103ng ca ph\u1EA3i l\u1EDBn h\u01A1n 0."));
      return;
    }
    if (this.otLimitEnabled() && this.otLength + this.otTotalMonth() > OT_LIMIT_MONTH_HOURS) {
      this.message.warning(t("essOt.msg.monthLimitExceeded", "T\u1ED5ng t\u0103ng ca th\xE1ng n\xE0y s\u1EBD l\xE0 {0}h, v\u01B0\u1EE3t qu\xE1 gi\u1EDBi h\u1EA1n {1}h!").replace("{0}", (this.otLength + this.otTotalMonth()).toFixed(1)).replace("{1}", String(OT_LIMIT_MONTH_HOURS)));
      return;
    }
    if (this.otLimit100Enabled() && this.otLength + this.otTotalYear() > OT_LIMIT_YEAR_HOURS) {
      this.message.warning(t("essOt.msg.yearLimitExceeded", "T\u1ED5ng t\u0103ng ca n\u0103m nay s\u1EBD l\xE0 {0}h, v\u01B0\u1EE3t qu\xE1 gi\u1EDBi h\u1EA1n {1}h!").replace("{0}", (this.otLength + this.otTotalYear()).toFixed(1)).replace("{1}", String(OT_LIMIT_YEAR_HOURS)));
      return;
    }
    this.submitting.set(true);
    this.api.save({
      applyNo: "",
      personId: this.personId,
      localName: this.localName,
      empId: this.empId,
      otTypeNo: "31",
      otTypeCode: this.otTypeCode,
      applyOtDate: this.formatYmd(this.applyDate),
      otFromTime: this.formatDt(this.otFromTime),
      otToTime: this.formatDt(this.otToTime),
      otApplyHour,
      applyOtRemark: this.reason,
      deductYn: this.mealCheck ? "1" : "0"
    }).subscribe({
      next: (res) => {
        this.submitting.set(false);
        if (res?.success) {
          this.message.success(res.message || t("essOt.msg.submitSuccess", "Xin t\u0103ng ca th\xE0nh c\xF4ng!"));
          this.resetForm();
        } else {
          this.message.error(res?.error || t("essOt.msg.submitError", "L\u1ED7i khi g\u1EEDi \u0111\u01A1n!"));
        }
      },
      error: () => {
        this.submitting.set(false);
        this.message.error(t("essOt.msg.submitConnError", "L\u1ED7i k\u1EBFt n\u1ED1i khi g\u1EEDi \u0111\u01A1n!"));
      }
    });
  }
  resetForm() {
    this.applyDate = null;
    this.otFromTime = null;
    this.otToTime = null;
    this.reason = "";
    this.mealCheck = false;
    this.clearDateInfo();
    this.calcDuration();
    this.approversLoaded.set(false);
    this.approvers.set([]);
  }
  loadDateInfo() {
    if (!this.applyDate)
      return;
    this.shiftName.set(this.i18n.t("essOt.msg.loading", "\u0110ang t\u1EA3i..."));
    this.workTimeText.set("");
    this.indoorTime.set("**:**");
    this.outdoorTime.set("**:**");
    this.otTypeName.set("...");
    this.otTypeCode = "";
    this.api.getOtDateInfo(this.formatYmd(this.applyDate)).subscribe({
      next: (d) => {
        if (!d) {
          this.clearDateInfo();
          return;
        }
        this.shiftName.set(d.SHIFT_NAME || "--");
        const shiftStart = this.extractTime(d.SHIFT_START_TIME);
        const shiftEnd = this.extractTime(d.SHIFT_END_TIME);
        this.workTimeText.set(shiftStart && shiftEnd ? `${shiftStart}~${shiftEnd}` : "--");
        this.indoorTime.set(d.INDOOR_TIME || "**:**");
        this.outdoorTime.set(d.OUTDOOR_TIME || "**:**");
        this.otTypeCode = String(d.OT_TYPE_CODE || "");
        this.otTypeName.set(d.OT_TYPE_NAME || "--");
        const shiftStartDt = this.parseDt(d.SHIFT_START_TIME);
        const shiftEndDt = this.parseDt(d.SHIFT_END_TIME);
        if (this.otTypeCode === OT_TYPE_HOLIDAY) {
          if (shiftEndDt) {
            this.otFromTime = shiftEndDt;
            this.otToTime = new Date(shiftEndDt.getTime() + 2 * 36e5);
          }
        } else {
          if (shiftStartDt)
            this.otFromTime = shiftStartDt;
          if (shiftEndDt)
            this.otToTime = shiftEndDt;
        }
        this.otTotalMonth.set(Number(d.OT_TOTAIL_MONTH) || 0);
        this.otWeekdayTotal.set(Number(d.WEEKDAY_OT_TOTAIL) || 0);
        this.otTotalYear.set(Number(d.OT_TOTAIL) || 0);
        this.otLimitEnabled.set(String(d.OT_LIMIT) === "1");
        this.otLimit100Enabled.set(String(d.OT_LIMIT_100) === "1");
        this.calcDuration();
      },
      error: () => this.clearDateInfo()
    });
  }
  clearDateInfo() {
    this.shiftName.set("--");
    this.workTimeText.set("--");
    this.indoorTime.set("**:**");
    this.outdoorTime.set("**:**");
    this.otTypeName.set("--");
    this.otTypeCode = "";
    this.otTotalMonth.set(0);
    this.otWeekdayTotal.set(0);
    this.otTotalYear.set(0);
    this.otLimitEnabled.set(false);
    this.otLimit100Enabled.set(false);
    this.otLength = 0;
  }
  loadApprovers() {
    if (!this.personId)
      return;
    this.approversLoading.set(true);
    this.approversLoaded.set(false);
    const diff = this.otFromTime && this.otToTime && this.otToTime > this.otFromTime ? (this.otToTime.getTime() - this.otFromTime.getTime()) / 36e5 : 0;
    this.api.getApprovers(this.personId, this.otTypeCode, String(diff)).subscribe({
      next: (list) => {
        this.approvers.set((list ?? []).filter((item) => String(item.affirmLevel) !== "0"));
        this.approversLoading.set(false);
        this.approversLoaded.set(true);
      },
      error: () => {
        this.approvers.set([]);
        this.approversLoading.set(false);
        this.approversLoaded.set(true);
      }
    });
  }
  calcDuration() {
    if (!this.applyDate || !this.otFromTime || !this.otToTime) {
      this.otLength = 0;
      this.duration.set("--");
      return;
    }
    this.api.getOtDuration(this.formatYmd(this.applyDate), this.formatDt(this.otFromTime), this.formatDt(this.otToTime), this.mealCheck ? "1" : "0").subscribe({
      next: (res) => {
        const len = res?.OT_LENGTH != null ? parseFloat(String(res.OT_LENGTH)) : 0;
        this.otLength = isNaN(len) ? 0 : len;
        this.duration.set(this.otLength > 0 ? `${this.otLength} h` : "--");
      },
      error: () => {
        this.otLength = 0;
        this.duration.set("--");
      }
    });
  }
  /** Trích xuất HH:mm từ chuỗi "yyyy-MM-dd HH:mm" hoặc "HH:mm" - đúng soaExtractTime() bản gốc. */
  extractTime(value) {
    if (!value)
      return "";
    const idx = value.indexOf(" ");
    return idx > -1 ? value.substring(idx + 1) : value;
  }
  /** Parse 'yyyy-MM-dd HH:mm[:ss]' về Date - trả null nếu chuỗi rỗng/không hợp lệ. */
  parseDt(value) {
    if (!value)
      return null;
    const normalized = value.trim().replace("T", " ");
    const match = normalized.match(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2})/);
    if (!match)
      return null;
    const [, y, mo, d, h, mi] = match;
    return new Date(Number(y), Number(mo) - 1, Number(d), Number(h), Number(mi));
  }
  formatYmd(d) {
    return d ? formatDate(d, "yyyy-MM-dd", "vi") : "";
  }
  formatDt(d) {
    return d ? formatDate(d, "yyyy-MM-dd HH:mm", "vi") : "";
  }
  static \u0275fac = function SstOtApplyInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SstOtApplyInfoComponent)(\u0275\u0275directiveInject(SstOtApplyInfoService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SstOtApplyInfoComponent, selectors: [["app-sst-ot-apply-info"]], decls: 122, vars: 117, consts: [["noMonthLimit", ""], ["noYearLimit", ""], ["soaApproverTable", ""], [1, "row"], [1, "col-12"], ["class", "card mb-3", 4, "ngIf"], [1, "card", "mb-3"], [1, "card-body", "p-0"], [1, "table", "table-bordered", "table-sm", "align-middle", "mb-0", 2, "table-layout", "fixed"], [2, "width", "15%"], [2, "width", "35%"], [1, "table-light", "text-center"], ["nzFormat", "yyyy-MM-dd", 2, "width", "140px", 3, "ngModelChange", "ngModel"], [1, "small", "text-muted"], [4, "ngIf", "ngIfElse"], [1, "d-flex", "align-items-center", "gap-2"], ["nzFormat", "yyyy-MM-dd HH:mm", 2, "width", "200px", 3, "ngModelChange", "ngModel", "nzShowTime"], [1, "form-control-plaintext", "form-control-sm"], [1, "small"], [1, "fw-semibold"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel"], ["colspan", "3"], ["nz-input", "", "rows", "3", 2, "resize", "vertical", 3, "ngModelChange", "ngModel"], [1, "card-header", "py-2", "fw-bold"], ["nzSize", "small", 3, "nzData", "nzLoading", "nzShowPagination"], [1, "text-center", 2, "width", "60px"], [1, "text-center", 2, "width", "120px"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "text-end", "mb-3"], ["nz-button", "", "nzType", "primary", 3, "click", "nzLoading"], [1, "text-danger"], [1, "text-success"], ["colspan", "5", 1, "text-center", "text-muted"], [1, "text-center"]], template: function SstOtApplyInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
      \u0275\u0275template(2, SstOtApplyInfoComponent_div_2_Template, 53, 40, "div", 5);
      \u0275\u0275elementStart(3, "div", 6)(4, "div", 7)(5, "table", 8)(6, "colgroup");
      \u0275\u0275element(7, "col", 9)(8, "col", 10)(9, "col", 9)(10, "col", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "tbody")(12, "tr")(13, "th", 11);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "td")(17, "nz-date-picker", 12);
      \u0275\u0275twoWayListener("ngModelChange", function SstOtApplyInfoComponent_Template_nz_date_picker_ngModelChange_17_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.applyDate, $event) || (ctx.applyDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function SstOtApplyInfoComponent_Template_nz_date_picker_ngModelChange_17_listener() {
        return ctx.onDateChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "th", 11);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "td", 13);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275template(25, SstOtApplyInfoComponent_ng_container_25_Template, 6, 8, "ng-container", 14)(26, SstOtApplyInfoComponent_ng_template_26_Template, 4, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275element(28, "br");
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275template(31, SstOtApplyInfoComponent_ng_container_31_Template, 6, 8, "ng-container", 14)(32, SstOtApplyInfoComponent_ng_template_32_Template, 4, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "tr")(35, "th", 11);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "td", 15)(39, "nz-date-picker", 16);
      \u0275\u0275twoWayListener("ngModelChange", function SstOtApplyInfoComponent_Template_nz_date_picker_ngModelChange_39_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.otFromTime, $event) || (ctx.otFromTime = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function SstOtApplyInfoComponent_Template_nz_date_picker_ngModelChange_39_listener() {
        return ctx.onTimeChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275text(40, " ~ ");
      \u0275\u0275elementStart(41, "nz-date-picker", 16);
      \u0275\u0275twoWayListener("ngModelChange", function SstOtApplyInfoComponent_Template_nz_date_picker_ngModelChange_41_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.otToTime, $event) || (ctx.otToTime = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function SstOtApplyInfoComponent_Template_nz_date_picker_ngModelChange_41_listener() {
        return ctx.onTimeChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "th", 11);
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "td")(46, "span", 17);
      \u0275\u0275text(47);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "tr")(49, "th", 11);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "td")(53, "span", 18);
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "span", 19);
      \u0275\u0275text(57);
      \u0275\u0275elementEnd();
      \u0275\u0275element(58, "br");
      \u0275\u0275elementStart(59, "span", 18);
      \u0275\u0275text(60);
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "span", 19);
      \u0275\u0275text(63);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "th", 11);
      \u0275\u0275text(65);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "td")(68, "span", 13);
      \u0275\u0275text(69);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "span", 13);
      \u0275\u0275text(71);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(72, "tr")(73, "th", 11);
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "td");
      \u0275\u0275text(77);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "th", 11);
      \u0275\u0275text(79);
      \u0275\u0275pipe(80, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "td")(82, "label", 20);
      \u0275\u0275twoWayListener("ngModelChange", function SstOtApplyInfoComponent_Template_label_ngModelChange_82_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.mealCheck, $event) || (ctx.mealCheck = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function SstOtApplyInfoComponent_Template_label_ngModelChange_82_listener() {
        return ctx.onMealCheckChange();
      });
      \u0275\u0275text(83);
      \u0275\u0275pipe(84, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "tr")(86, "th", 11);
      \u0275\u0275text(87);
      \u0275\u0275pipe(88, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "td", 21)(90, "textarea", 22);
      \u0275\u0275twoWayListener("ngModelChange", function SstOtApplyInfoComponent_Template_textarea_ngModelChange_90_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.reason, $event) || (ctx.reason = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(91, "div", 6)(92, "div", 23);
      \u0275\u0275text(93);
      \u0275\u0275pipe(94, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "div", 7)(96, "nz-table", 24, 2)(98, "thead")(99, "tr")(100, "th", 25);
      \u0275\u0275text(101);
      \u0275\u0275pipe(102, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "th");
      \u0275\u0275text(104);
      \u0275\u0275pipe(105, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "th", 26);
      \u0275\u0275text(107);
      \u0275\u0275pipe(108, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "th");
      \u0275\u0275text(110);
      \u0275\u0275pipe(111, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "th");
      \u0275\u0275text(113);
      \u0275\u0275pipe(114, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(115, "tbody");
      \u0275\u0275template(116, SstOtApplyInfoComponent_tr_116_Template, 4, 4, "tr", 27)(117, SstOtApplyInfoComponent_tr_117_Template, 11, 5, "tr", 28);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(118, "div", 29)(119, "button", 30);
      \u0275\u0275listener("click", function SstOtApplyInfoComponent_Template_button_click_119_listener() {
        return ctx.submit();
      });
      \u0275\u0275text(120);
      \u0275\u0275pipe(121, "translate");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const noMonthLimit_r6 = \u0275\u0275reference(27);
      const noYearLimit_r7 = \u0275\u0275reference(33);
      const soaApproverTable_r8 = \u0275\u0275reference(97);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.basicInfo());
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 49, "essOt.applyDate", "Ng\xE0y"));
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.applyDate);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 52, "essOt.otStatus", "T\xECnh h\xECnh t\u0103ng ca"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate4(" ", \u0275\u0275pipeBind2(23, 55, "essOt.stat.thisMonth", "Th\xE1ng n\xE0y:"), " ", ctx.otTotalMonth(), "h \xA0\xA0", \u0275\u0275pipeBind2(24, 58, "essOt.stat.weekday", "Ng\xE0y th\u01B0\u1EDDng:"), " ", ctx.otWeekdayTotal(), "h ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.otLimitEnabled())("ngIfElse", noMonthLimit_r6);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(30, 61, "essOt.stat.thisYear", "N\u0103m nay:"), " ", ctx.otTotalYear(), "h ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.otLimit100Enabled())("ngIfElse", noYearLimit_r7);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 64, "essOt.otStartTimeLabel", "Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u t\u0103ng ca"));
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.otFromTime);
      \u0275\u0275property("nzShowTime", \u0275\u0275pureFunction0(115, _c0));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.otToTime);
      \u0275\u0275property("nzShowTime", \u0275\u0275pureFunction0(116, _c0));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 67, "essOt.otType", "H\xECnh th\u1EE9c t\u0103ng ca"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.otTypeName());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 70, "essOt.inOutTime", "Th\u1EDDi gian v\xE0o ra"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(55, 73, "essOt.inTime", "Th\u1EDDi gian v\xE0o"), ": ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.indoorTime());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(61, 76, "essOt.outTime", "Th\u1EDDi gian ra"), ": ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.outdoorTime());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(66, 79, "essOt.shift", "Ca"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.shiftName());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.workTimeText());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(75, 82, "essOt.duration", "Th\u1EDDi l\u01B0\u1EE3ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.duration());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(80, 85, "essOt.mealBreak", "B\u1EA3o c\u01A1m / Ngh\u1EC9 ng\u01A1i (30')"));
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.mealCheck);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(84, 88, "essOt.yes", "C\xF3"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(88, 91, "essOt.reason", "L\xFD do"));
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.reason);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(94, 94, "essOt.approverList", "Danh s\xE1ch ng\u01B0\u1EDDi ph\xEA duy\u1EC7t"));
      \u0275\u0275advance(3);
      \u0275\u0275property("nzData", ctx.approvers())("nzLoading", ctx.approversLoading())("nzShowPagination", false);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(102, 97, "sa.col.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(105, 100, "essOt.approver", "Ng\u01B0\u1EDDi duy\u1EC7t"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(108, 103, "sa.col.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(111, 106, "sa.col.dept", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(114, 109, "sa.col.position", "Ch\u1EE9c danh"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.approversLoading() && soaApproverTable_r8.data.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", soaApproverTable_r8.data);
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.submitting());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(121, 112, "essOt.submit", "Xin ph\xE9p"), " ");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzInputModule, NzInputDirective, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzDatePickerModule, NzDatePickerComponent, NzCheckboxModule, NzCheckboxComponent, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SstOtApplyInfoComponent, [{
    type: Component,
    args: [{ selector: "app-sst-ot-apply-info", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzInputModule,
      NzButtonModule,
      NzDatePickerModule,
      NzCheckboxModule,
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

    <!-- ===== Form xin t\u0103ng ca ===== -->
    <div class="card mb-3">
      <div class="card-body p-0">
        <table class="table table-bordered table-sm align-middle mb-0" style="table-layout:fixed;">
          <colgroup>
            <col style="width:15%;"><col style="width:35%;"><col style="width:15%;"><col style="width:35%;">
          </colgroup>
          <tbody>
            <tr>
              <th class="table-light text-center">{{ 'essOt.applyDate' | translate:'Ng\xE0y' }}</th>
              <td>
                <nz-date-picker style="width:140px;" [(ngModel)]="applyDate" (ngModelChange)="onDateChange()"
                                 nzFormat="yyyy-MM-dd"></nz-date-picker>
              </td>
              <th class="table-light text-center">{{ 'essOt.otStatus' | translate:'T\xECnh h\xECnh t\u0103ng ca' }}</th>
              <td class="small text-muted">
                {{ 'essOt.stat.thisMonth' | translate:'Th\xE1ng n\xE0y:' }} {{ otTotalMonth() }}h
                &nbsp;&nbsp;{{ 'essOt.stat.weekday' | translate:'Ng\xE0y th\u01B0\u1EDDng:' }} {{ otWeekdayTotal() }}h
                <ng-container *ngIf="otLimitEnabled(); else noMonthLimit">
                  &nbsp;&nbsp;{{ 'essOt.stat.maxOt' | translate:'T\u1ED1i \u0111a:' }} 40h
                  <span class="text-danger">{{ 'essOt.limited' | translate:'(c\xF3 gi\u1EDBi h\u1EA1n)' }}</span>
                </ng-container>
                <ng-template #noMonthLimit>
                  &nbsp;&nbsp;<span class="text-success">{{ 'essOt.unlimitedMonth' | translate:'(kh\xF4ng gi\u1EDBi h\u1EA1n th\xE1ng)' }}</span>
                </ng-template>
                <br>
                {{ 'essOt.stat.thisYear' | translate:'N\u0103m nay:' }} {{ otTotalYear() }}h
                <ng-container *ngIf="otLimit100Enabled(); else noYearLimit">
                  &nbsp;&nbsp;{{ 'essOt.stat.maxOt' | translate:'T\u1ED1i \u0111a:' }} 300h
                  <span class="text-danger">{{ 'essOt.limited' | translate:'(c\xF3 gi\u1EDBi h\u1EA1n)' }}</span>
                </ng-container>
                <ng-template #noYearLimit>
                  &nbsp;&nbsp;<span class="text-success">{{ 'essOt.unlimitedYear' | translate:'(kh\xF4ng gi\u1EDBi h\u1EA1n n\u0103m)' }}</span>
                </ng-template>
              </td>
            </tr>
            <tr>
              <th class="table-light text-center">{{ 'essOt.otStartTimeLabel' | translate:'Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u t\u0103ng ca' }}</th>
              <td class="d-flex align-items-center gap-2">
                <nz-date-picker style="width:200px;" [(ngModel)]="otFromTime" (ngModelChange)="onTimeChange()"
                                 nzFormat="yyyy-MM-dd HH:mm" [nzShowTime]="{ nzFormat: 'HH:mm' }"></nz-date-picker>
                ~
                <nz-date-picker style="width:200px;" [(ngModel)]="otToTime" (ngModelChange)="onTimeChange()"
                                 nzFormat="yyyy-MM-dd HH:mm" [nzShowTime]="{ nzFormat: 'HH:mm' }"></nz-date-picker>
              </td>
              <th class="table-light text-center">{{ 'essOt.otType' | translate:'H\xECnh th\u1EE9c t\u0103ng ca' }}</th>
              <td>
                <span class="form-control-plaintext form-control-sm">{{ otTypeName() }}</span>
              </td>
            </tr>
            <tr>
              <th class="table-light text-center">{{ 'essOt.inOutTime' | translate:'Th\u1EDDi gian v\xE0o ra' }}</th>
              <td>
                <span class="small">{{ 'essOt.inTime' | translate:'Th\u1EDDi gian v\xE0o' }}: </span><span class="fw-semibold">{{ indoorTime() }}</span><br>
                <span class="small">{{ 'essOt.outTime' | translate:'Th\u1EDDi gian ra' }}: </span><span class="fw-semibold">{{ outdoorTime() }}</span>
              </td>
              <th class="table-light text-center">{{ 'essOt.shift' | translate:'Ca' }}</th>
              <td>
                <span class="small text-muted">{{ shiftName() }}</span>
                <span class="small text-muted">{{ workTimeText() }}</span>
              </td>
            </tr>
            <tr>
              <th class="table-light text-center">{{ 'essOt.duration' | translate:'Th\u1EDDi l\u01B0\u1EE3ng' }}</th>
              <td>{{ duration() }}</td>
              <th class="table-light text-center">{{ 'essOt.mealBreak' | translate:"B\u1EA3o c\u01A1m / Ngh\u1EC9 ng\u01A1i (30')" }}</th>
              <td>
                <label nz-checkbox [(ngModel)]="mealCheck" (ngModelChange)="onMealCheckChange()">
                  {{ 'essOt.yes' | translate:'C\xF3' }}
                </label>
              </td>
            </tr>
            <tr>
              <th class="table-light text-center">{{ 'essOt.reason' | translate:'L\xFD do' }}</th>
              <td colspan="3">
                <textarea nz-input [(ngModel)]="reason" rows="3" style="resize:vertical;"></textarea>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- ===== Danh s\xE1ch ng\u01B0\u1EDDi ph\xEA duy\u1EC7t ===== -->
    <div class="card mb-3">
      <div class="card-header py-2 fw-bold">{{ 'essOt.approverList' | translate:'Danh s\xE1ch ng\u01B0\u1EDDi ph\xEA duy\u1EC7t' }}</div>
      <div class="card-body p-0">
        <nz-table [nzData]="approvers()" [nzLoading]="approversLoading()" [nzShowPagination]="false"
                  nzSize="small" #soaApproverTable>
          <thead>
            <tr>
              <th class="text-center" style="width:60px">{{ 'sa.col.stt' | translate:'STT' }}</th>
              <th>{{ 'essOt.approver' | translate:'Ng\u01B0\u1EDDi duy\u1EC7t' }}</th>
              <th class="text-center" style="width:120px">{{ 'sa.col.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
              <th>{{ 'sa.col.dept' | translate:'Ph\xF2ng ban' }}</th>
              <th>{{ 'sa.col.position' | translate:'Ch\u1EE9c danh' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="!approversLoading() && soaApproverTable.data.length === 0">
              <td colspan="5" class="text-center text-muted">
                {{ (approversLoaded() ? 'essOt.msg.noApprover' : 'essOt.selectDateFirst')
                   | translate: (approversLoaded() ? 'Kh\xF4ng c\xF3 ng\u01B0\u1EDDi ph\xEA duy\u1EC7t' : 'Ch\u1ECDn ng\xE0y t\u0103ng ca \u0111\u1EC3 xem ng\u01B0\u1EDDi ph\xEA duy\u1EC7t') }}
              </td>
            </tr>
            <tr *ngFor="let item of soaApproverTable.data; let i = index">
              <td class="text-center">{{ item.affirmLevel || i + 1 }}</td>
              <td>{{ item.localName }}</td>
              <td class="text-center">{{ item.empId }}</td>
              <td>{{ item.deptName }}</td>
              <td>{{ item.postionName || item.positionName }}</td>
            </tr>
          </tbody>
        </nz-table>
      </div>
    </div>

    <!-- ===== N\xFAt xin ph\xE9p ===== -->
    <div class="text-end mb-3">
      <button nz-button nzType="primary" [nzLoading]="submitting()" (click)="submit()">
        {{ 'essOt.submit' | translate:'Xin ph\xE9p' }}
      </button>
    </div>

  </div>
</div>
` }]
  }], () => [{ type: SstOtApplyInfoService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SstOtApplyInfoComponent, { className: "SstOtApplyInfoComponent", filePath: "src/app/sst-ot-apply-info/sst-ot-apply-info.component.ts", lineNumber: 62 });
})();
export {
  SstOtApplyInfoComponent
};
//# debugId=8212ce54-10b6-53e4-8085-589c9dfa7ce2
//# sourceMappingURL=chunk-MVEHASQW.js.map
