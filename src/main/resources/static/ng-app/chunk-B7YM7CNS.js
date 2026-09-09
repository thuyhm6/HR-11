import {
  NzMessageService
} from "./chunk-XWW7CXU6.js";
import {
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
import "./chunk-VWYGF7JF.js";
import "./chunk-JSOAL7UF.js";
import {
  NzOptionComponent,
  NzSelectComponent,
  NzSelectModule
} from "./chunk-2QLZSMGV.js";
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTW5U2M5.js";

// src/app/sst-apply-attendance/sst-apply-attendance.service.ts
var LEAVE_APPLY_API_BASE = "/ar/attendanceMintenance/api/leaveApply";
var LEAVE_APPLY_TYPE_NO = "21";
var SstApplyAttendanceService = class _SstApplyAttendanceService {
  constructor(http) {
    this.http = http;
  }
  http;
  getBasicInfo() {
    return this.http.get("/ess/empinfo/api/personalInfo/myInfo", { withCredentials: true });
  }
  getCodeList(parentCodeNo) {
    return this.http.get("/sys/api/getCode/list", {
      params: new HttpParams().set("parentCodeNo", parentCodeNo),
      withCredentials: true
    });
  }
  getVacationInfo() {
    return this.http.get("/ess/infoApplyAttendance/api/vacationInfo", { withCredentials: true });
  }
  getLeaveLength(fromDateTime, toDateTime, leaveTypeCode) {
    let httpParams = new HttpParams().set("fromDateTime", fromDateTime).set("toDateTime", toDateTime);
    if (leaveTypeCode)
      httpParams = httpParams.set("leaveTypeCode", leaveTypeCode);
    return this.http.get("/ess/infoApplyAttendance/api/leaveLength", {
      params: httpParams,
      withCredentials: true
    });
  }
  /** Endpoint gốc nhận @RequestParam (không phải @RequestBody JSON) nên phải gửi dạng
   *  application/x-www-form-urlencoded - đúng cách $.post() của jQuery bản gốc gửi lên. */
  getApprovers(personId, leaveTypeCode) {
    const body = new HttpParams().set("applyTypeNo", LEAVE_APPLY_TYPE_NO).set("personId", personId).set("applyTypeCode", leaveTypeCode || "").set("applyLength", "0");
    const headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");
    return this.http.post(`${LEAVE_APPLY_API_BASE}/approvers`, body.toString(), {
      headers,
      withCredentials: true
    });
  }
  save(payload) {
    return this.http.post(`${LEAVE_APPLY_API_BASE}/save`, payload, { withCredentials: true });
  }
  static \u0275fac = function SstApplyAttendanceService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SstApplyAttendanceService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SstApplyAttendanceService, factory: _SstApplyAttendanceService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SstApplyAttendanceService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/sst-apply-attendance/sst-apply-attendance.component.ts
var _c0 = () => ({ nzFormat: "HH:mm" });
function SstApplyAttendanceComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "table", 6)(3, "colgroup");
    \u0275\u0275element(4, "col", 7)(5, "col", 23)(6, "col", 7)(7, "col", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "tbody")(9, "tr")(10, "th", 9);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 9);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "tr")(21, "th", 9);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 9);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "tr")(32, "th", 9);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "td");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th", 9);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "td");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "tr")(43, "th", 9);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "td");
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th", 9);
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
function SstApplyAttendanceComponent_nz_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 24);
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r3.codeNo)("nzLabel", c_r3.codeName);
  }
}
function SstApplyAttendanceComponent_tr_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 25);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, ctx_r3.approversLoaded() ? "sa.msg.noApprovalData" : "sa.msg.selectLeaveTypeFirst", ctx_r3.approversLoaded() ? "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u ph\xEA duy\u1EC7t" : "Ch\u1ECDn lo\u1EA1i ngh\u1EC9 ph\xE9p \u0111\u1EC3 xem ng\u01B0\u1EDDi ph\xEA duy\u1EC7t"), " ");
  }
}
function SstApplyAttendanceComponent_tr_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 26);
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
    const item_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.affirmLevel || i_r6 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.empId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.deptName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r5.postionName || item_r5.positionName);
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
  "sa.label.leaveType",
  "sa.placeholder.leaveType",
  "sa.label.startTime",
  "sa.label.endTime",
  "sa.label.duration",
  "sa.label.reason",
  "sa.btn.submit",
  "sa.col.stt",
  "sa.col.approver",
  "sa.col.empId",
  "sa.col.dept",
  "sa.col.position",
  "sa.msg.selectLeaveTypeFirst",
  "sa.msg.calculating",
  "sa.msg.loading",
  "sa.msg.noApprovalData",
  "sa.msg.noApprover",
  "sa.msg.loadApproverFailed",
  "sa.msg.selectLeaveType",
  "sa.msg.enterStartTime",
  "sa.msg.enterEndTime",
  "sa.msg.enterReason",
  "sa.msg.confirmSubmit",
  "sa.msg.sending",
  "sa.msg.submitSuccess",
  "sa.msg.submitError",
  "sa.msg.submitConnError",
  "sa.vac.totalYear",
  "sa.vac.yearVac",
  "sa.vac.lastYear",
  "sa.vac.special",
  "sa.vac.used",
  "sa.vac.remain",
  "sa.unit.days",
  "sa.unit.hours"
];
var SstApplyAttendanceComponent = class _SstApplyAttendanceComponent {
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
  vacationInfoText = signal(
    "",
    ...ngDevMode ? [{ debugName: "vacationInfoText" }] : (
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
  duration = signal(
    "-",
    ...ngDevMode ? [{ debugName: "duration" }] : (
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
  leaveTypeCode = null;
  fromTime = null;
  toTime = null;
  reason = "";
  personId = "";
  localName = "";
  durationTimer = null;
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.setDefaultTimes();
    this.api.getCodeList("21").subscribe((list) => this.leaveTypeOptions.set(list ?? []));
    this.api.getBasicInfo().subscribe((data) => {
      this.basicInfo.set(data);
      this.personId = data?.personId || "";
      this.localName = data?.localName || "";
      this.loadVacationInfo();
      this.loadApprovers();
    });
  }
  onLeaveTypeChange() {
    this.loadVacationInfo();
    this.loadApprovers();
    this.calcDuration();
  }
  onTimeChange() {
    this.calcDuration();
  }
  submit() {
    const t = (key, fallback) => this.i18n.t(key, fallback);
    if (!this.leaveTypeCode) {
      this.message.warning(t("sa.msg.selectLeaveType", "Vui l\xF2ng ch\u1ECDn lo\u1EA1i ngh\u1EC9 ph\xE9p!"));
      return;
    }
    if (!this.fromTime) {
      this.message.warning(t("sa.msg.enterStartTime", "Vui l\xF2ng nh\u1EADp th\u1EDDi gian b\u1EAFt \u0111\u1EA7u!"));
      return;
    }
    if (!this.toTime) {
      this.message.warning(t("sa.msg.enterEndTime", "Vui l\xF2ng nh\u1EADp th\u1EDDi gian k\u1EBFt th\xFAc!"));
      return;
    }
    const reason = this.reason.trim();
    if (!reason) {
      this.message.warning(t("sa.msg.enterReason", "Vui l\xF2ng nh\u1EADp l\xFD do!"));
      return;
    }
    this.modal.confirm({
      nzTitle: t("sa.btn.submit", "Xin ph\xE9p"),
      nzContent: t("sa.msg.confirmSubmit", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n g\u1EEDi \u0111\u01A1n xin ph\xE9p n\xE0y kh\xF4ng?"),
      nzOnOk: () => this.doSubmit()
    });
  }
  doSubmit() {
    const t = (key, fallback) => this.i18n.t(key, fallback);
    this.submitting.set(true);
    this.api.save({
      applyNo: "",
      personId: this.personId,
      localName: this.localName,
      leaveTypeCode: this.leaveTypeCode,
      leaveFromTime: this.formatDt(this.fromTime),
      leaveToTime: this.formatDt(this.toTime),
      applyLength: null,
      leaveReason: this.reason
    }).subscribe({
      next: (res) => {
        this.submitting.set(false);
        if (res?.success) {
          this.message.success(res.message || t("sa.msg.submitSuccess", "Xin ph\xE9p th\xE0nh c\xF4ng!"));
          this.resetForm();
        } else {
          this.message.error(res?.error || t("sa.msg.submitError", "L\u1ED7i khi g\u1EEDi \u0111\u01A1n!"));
        }
      },
      error: () => {
        this.submitting.set(false);
        this.message.error(t("sa.msg.submitConnError", "L\u1ED7i k\u1EBFt n\u1ED1i khi g\u1EEDi \u0111\u01A1n!"));
      }
    });
  }
  resetForm() {
    this.leaveTypeCode = null;
    this.vacationInfoText.set("");
    this.reason = "";
    this.setDefaultTimes();
    this.calcDuration();
    this.approversLoaded.set(false);
    this.approvers.set([]);
  }
  loadVacationInfo() {
    this.api.getVacationInfo().subscribe((data) => this.vacationInfoText.set(this.formatVacInfo(data)));
  }
  loadApprovers() {
    if (!this.personId)
      return;
    this.approversLoading.set(true);
    this.approversLoaded.set(false);
    this.api.getApprovers(this.personId, this.leaveTypeCode || "").subscribe({
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
  /** Debounce 300ms - đúng hành vi saCalcDuration() bản gốc (tránh gọi API liên tục khi gõ/đổi giờ). */
  calcDuration() {
    if (this.durationTimer)
      clearTimeout(this.durationTimer);
    if (!this.fromTime || !this.toTime || !this.leaveTypeCode) {
      this.duration.set("-");
      return;
    }
    this.duration.set(this.i18n.t("sa.msg.calculating", "\u0110ang t\xEDnh..."));
    this.durationTimer = setTimeout(() => {
      this.api.getLeaveLength(this.formatDt(this.fromTime), this.formatDt(this.toTime), this.leaveTypeCode || "").subscribe({
        next: (res) => {
          const leaveLen = Number(res?.LEAVE_LENGTH);
          const dayHour = Number(res?.DAY_HOUR);
          if (isNaN(leaveLen) || isNaN(dayHour) || dayHour === 0) {
            this.duration.set("-");
            return;
          }
          const days = Math.floor(leaveLen / dayHour);
          const hours = leaveLen - days * dayHour;
          let text = "";
          if (days > 0)
            text += `${days} ${this.i18n.t("sa.unit.days", "Ng\xE0y")}`;
          if (hours > 0)
            text += (text ? " " : "") + `${hours} ${this.i18n.t("sa.unit.hours", "Gi\u1EDD")}`;
          this.duration.set(text || "0");
        },
        error: () => this.duration.set("-")
      });
    }, 300);
  }
  formatVacInfo(d) {
    if (!d)
      return "";
    const t = (key, fallback) => this.i18n.t(key, fallback);
    const f = (v) => v !== null && v !== void 0 && v !== "" ? v : "0";
    return `${t("sa.vac.totalYear", "T\u1ED5ng ph\xE9p n\u0103m:")} ${f(d.TOT_VAC_CNT)}/  ${t("sa.vac.yearVac", "T\u1EA1o ph\xE9p n\u0103m:")} ${f(d.YEAR_VAC_CNT)}/  ${t("sa.vac.lastYear", "C\xF2n l\u1EA1i n\u0103m ngo\xE1i:")} ${f(d.LAST_YEAR_VAC)}/  ${t("sa.vac.special", "\u0110\u1EB7c bi\u1EC7t:")} ${f(d.ADD_VAC)}/  ${t("sa.vac.used", "S\u1ED1 ng\xE0y \u0111\xE3 s\u1EED d\u1EE5ng:")} ${f(d.USE_VAC)}/  ${t("sa.vac.remain", "S\u1ED1 ng\xE0y c\xF2n l\u1EA1i:")} ${f(d.REMAIN_VAC)}`;
  }
  /** Mặc định từ 08:00 đến 17:00 hôm nay - giữ đúng hành vi saBootPage()/saResetForm() bản gốc. */
  setDefaultTimes() {
    const now = /* @__PURE__ */ new Date();
    this.fromTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 0);
    this.toTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 17, 0);
  }
  formatDt(d) {
    return d ? formatDate(d, "yyyy-MM-dd HH:mm", "vi") : "";
  }
  static \u0275fac = function SstApplyAttendanceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SstApplyAttendanceComponent)(\u0275\u0275directiveInject(SstApplyAttendanceService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService), \u0275\u0275directiveInject(NzModalService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SstApplyAttendanceComponent, selectors: [["app-sst-apply-attendance"]], decls: 71, vars: 66, consts: [["saApproverTable", ""], [1, "row"], [1, "col-12"], ["class", "card mb-3", 4, "ngIf"], [1, "card", "mb-3"], [1, "card-body", "p-0"], [1, "table", "table-bordered", "table-sm", "align-middle", "mb-0", 2, "table-layout", "fixed"], [2, "width", "15%"], [2, "width", "85%"], [1, "table-light", "text-center"], [1, "d-flex", "align-items-center", "flex-wrap", "gap-2"], ["nzAllowClear", "", 2, "width", "220px", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "text-muted", "small"], ["nzFormat", "yyyy-MM-dd HH:mm", 2, "width", "220px", 3, "ngModelChange", "ngModel", "nzShowTime"], ["nz-input", "", "rows", "4", 2, "resize", "vertical", 3, "ngModelChange", "ngModel"], ["nzSize", "small", 1, "mb-3", 3, "nzData", "nzLoading", "nzShowPagination"], [1, "text-center", 2, "width", "50px"], [1, "text-center", 2, "width", "130px"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "text-end", "mb-3"], ["nz-button", "", "nzType", "primary", 3, "click", "nzLoading"], [2, "width", "35%"], [3, "nzValue", "nzLabel"], ["colspan", "5", 1, "text-center", "text-muted"], [1, "text-center"]], template: function SstApplyAttendanceComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
      \u0275\u0275template(2, SstApplyAttendanceComponent_div_2_Template, 53, 40, "div", 3);
      \u0275\u0275elementStart(3, "div", 4)(4, "div", 5)(5, "table", 6)(6, "colgroup");
      \u0275\u0275element(7, "col", 7)(8, "col", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "tbody")(10, "tr")(11, "th", 9);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "td")(15, "div", 10)(16, "nz-select", 11);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function SstApplyAttendanceComponent_Template_nz_select_ngModelChange_16_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.leaveTypeCode, $event) || (ctx.leaveTypeCode = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function SstApplyAttendanceComponent_Template_nz_select_ngModelChange_16_listener() {
        return ctx.onLeaveTypeChange();
      });
      \u0275\u0275template(18, SstApplyAttendanceComponent_nz_option_18_Template, 1, 2, "nz-option", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(19, "span", 13);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "tr")(22, "th", 9);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "td")(26, "nz-date-picker", 14);
      \u0275\u0275twoWayListener("ngModelChange", function SstApplyAttendanceComponent_Template_nz_date_picker_ngModelChange_26_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.fromTime, $event) || (ctx.fromTime = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function SstApplyAttendanceComponent_Template_nz_date_picker_ngModelChange_26_listener() {
        return ctx.onTimeChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "tr")(28, "th", 9);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "td")(32, "nz-date-picker", 14);
      \u0275\u0275twoWayListener("ngModelChange", function SstApplyAttendanceComponent_Template_nz_date_picker_ngModelChange_32_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.toTime, $event) || (ctx.toTime = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function SstApplyAttendanceComponent_Template_nz_date_picker_ngModelChange_32_listener() {
        return ctx.onTimeChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "tr")(34, "th", 9);
      \u0275\u0275text(35);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "td");
      \u0275\u0275text(38);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "tr")(40, "th", 9);
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "td")(44, "textarea", 15);
      \u0275\u0275twoWayListener("ngModelChange", function SstApplyAttendanceComponent_Template_textarea_ngModelChange_44_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.reason, $event) || (ctx.reason = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(45, "nz-table", 16, 0)(47, "thead")(48, "tr")(49, "th", 17);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "th");
      \u0275\u0275text(53);
      \u0275\u0275pipe(54, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "th", 18);
      \u0275\u0275text(56);
      \u0275\u0275pipe(57, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "th");
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "th");
      \u0275\u0275text(62);
      \u0275\u0275pipe(63, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "tbody");
      \u0275\u0275template(65, SstApplyAttendanceComponent_tr_65_Template, 4, 4, "tr", 19)(66, SstApplyAttendanceComponent_tr_66_Template, 11, 5, "tr", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "div", 21)(68, "button", 22);
      \u0275\u0275listener("click", function SstApplyAttendanceComponent_Template_button_click_68_listener() {
        return ctx.submit();
      });
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const saApproverTable_r7 = \u0275\u0275reference(46);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.basicInfo());
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 28, "sa.label.leaveType", "Lo\u1EA1i ngh\u1EC9 ph\xE9p"));
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.leaveTypeCode);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(17, 31, "sa.placeholder.leaveType", "-- Ch\u1ECDn lo\u1EA1i ngh\u1EC9 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.leaveTypeOptions());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.vacationInfoText());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 34, "sa.label.startTime", "Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u"));
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.fromTime);
      \u0275\u0275property("nzShowTime", \u0275\u0275pureFunction0(64, _c0));
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 37, "sa.label.endTime", "Th\u1EDDi gian k\u1EBFt th\xFAc"));
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.toTime);
      \u0275\u0275property("nzShowTime", \u0275\u0275pureFunction0(65, _c0));
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 40, "sa.label.duration", "Th\u1EDDi l\u01B0\u1EE3ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.duration());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 43, "sa.label.reason", "L\xFD do"));
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.reason);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.approvers())("nzLoading", ctx.approversLoading())("nzShowPagination", false);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 46, "sa.col.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 49, "sa.col.approver", "Ng\u01B0\u1EDDi duy\u1EC7t"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 52, "sa.col.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(60, 55, "sa.col.dept", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(63, 58, "sa.col.position", "Ch\u1EE9c danh"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.approversLoading() && saApproverTable_r7.data.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", saApproverTable_r7.data);
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.submitting());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(70, 61, "sa.btn.submit", "Xin ph\xE9p"), " ");
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    NgModel,
    NzTableModule,
    NzTableComponent,
    NzTableCellDirective,
    NzThMeasureDirective,
    NzTheadComponent,
    NzTbodyComponent,
    NzTrDirective,
    NzInputModule,
    NzInputDirective,
    NzSelectModule,
    NzOptionComponent,
    NzSelectComponent,
    NzButtonModule,
    NzButtonComponent,
    NzTransitionPatchDirective,
    NzWaveDirective,
    NzDatePickerModule,
    NzDatePickerComponent,
    NzModalModule,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SstApplyAttendanceComponent, [{
    type: Component,
    args: [{ selector: "app-sst-apply-attendance", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzInputModule,
      NzSelectModule,
      NzButtonModule,
      NzDatePickerModule,
      NzModalModule,
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

    <!-- ===== Form xin ngh\u1EC9 ph\xE9p ===== -->
    <div class="card mb-3">
      <div class="card-body p-0">
        <table class="table table-bordered table-sm align-middle mb-0" style="table-layout:fixed;">
          <colgroup>
            <col style="width:15%;"><col style="width:85%;">
          </colgroup>
          <tbody>
            <tr>
              <th class="table-light text-center">{{ 'sa.label.leaveType' | translate:'Lo\u1EA1i ngh\u1EC9 ph\xE9p' }}</th>
              <td>
                <div class="d-flex align-items-center flex-wrap gap-2">
                  <nz-select style="width:220px;" [(ngModel)]="leaveTypeCode" (ngModelChange)="onLeaveTypeChange()"
                             nzAllowClear [nzPlaceHolder]="'sa.placeholder.leaveType' | translate:'-- Ch\u1ECDn lo\u1EA1i ngh\u1EC9 --'">
                    <nz-option *ngFor="let c of leaveTypeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
                  </nz-select>
                  <span class="text-muted small">{{ vacationInfoText() }}</span>
                </div>
              </td>
            </tr>
            <tr>
              <th class="table-light text-center">{{ 'sa.label.startTime' | translate:'Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u' }}</th>
              <td>
                <nz-date-picker style="width:220px;" [(ngModel)]="fromTime" (ngModelChange)="onTimeChange()"
                                 nzFormat="yyyy-MM-dd HH:mm" [nzShowTime]="{ nzFormat: 'HH:mm' }"></nz-date-picker>
              </td>
            </tr>
            <tr>
              <th class="table-light text-center">{{ 'sa.label.endTime' | translate:'Th\u1EDDi gian k\u1EBFt th\xFAc' }}</th>
              <td>
                <nz-date-picker style="width:220px;" [(ngModel)]="toTime" (ngModelChange)="onTimeChange()"
                                 nzFormat="yyyy-MM-dd HH:mm" [nzShowTime]="{ nzFormat: 'HH:mm' }"></nz-date-picker>
              </td>
            </tr>
            <tr>
              <th class="table-light text-center">{{ 'sa.label.duration' | translate:'Th\u1EDDi l\u01B0\u1EE3ng' }}</th>
              <td>{{ duration() }}</td>
            </tr>
            <tr>
              <th class="table-light text-center">{{ 'sa.label.reason' | translate:'L\xFD do' }}</th>
              <td>
                <textarea nz-input [(ngModel)]="reason" rows="4" style="resize:vertical;"></textarea>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- ===== Danh s\xE1ch ng\u01B0\u1EDDi ph\xEA duy\u1EC7t ===== -->
    <nz-table [nzData]="approvers()" [nzLoading]="approversLoading()" [nzShowPagination]="false"
              nzSize="small" class="mb-3" #saApproverTable>
      <thead>
        <tr>
          <th class="text-center" style="width:50px">{{ 'sa.col.stt' | translate:'STT' }}</th>
          <th>{{ 'sa.col.approver' | translate:'Ng\u01B0\u1EDDi duy\u1EC7t' }}</th>
          <th class="text-center" style="width:130px">{{ 'sa.col.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
          <th>{{ 'sa.col.dept' | translate:'Ph\xF2ng ban' }}</th>
          <th>{{ 'sa.col.position' | translate:'Ch\u1EE9c danh' }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngIf="!approversLoading() && saApproverTable.data.length === 0">
          <td colspan="5" class="text-center text-muted">
            {{ (approversLoaded() ? 'sa.msg.noApprovalData' : 'sa.msg.selectLeaveTypeFirst')
               | translate: (approversLoaded() ? 'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u ph\xEA duy\u1EC7t' : 'Ch\u1ECDn lo\u1EA1i ngh\u1EC9 ph\xE9p \u0111\u1EC3 xem ng\u01B0\u1EDDi ph\xEA duy\u1EC7t') }}
          </td>
        </tr>
        <tr *ngFor="let item of saApproverTable.data; let i = index">
          <td class="text-center">{{ item.affirmLevel || i + 1 }}</td>
          <td>{{ item.localName }}</td>
          <td class="text-center">{{ item.empId }}</td>
          <td>{{ item.deptName }}</td>
          <td>{{ item.postionName || item.positionName }}</td>
        </tr>
      </tbody>
    </nz-table>

    <!-- ===== N\xFAt xin ph\xE9p ===== -->
    <div class="text-end mb-3">
      <button nz-button nzType="primary" [nzLoading]="submitting()" (click)="submit()">
        {{ 'sa.btn.submit' | translate:'Xin ph\xE9p' }}
      </button>
    </div>

  </div>
</div>
` }]
  }], () => [{ type: SstApplyAttendanceService }, { type: I18nService }, { type: NzMessageService }, { type: NzModalService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SstApplyAttendanceComponent, { className: "SstApplyAttendanceComponent", filePath: "src/app/sst-apply-attendance/sst-apply-attendance.component.ts", lineNumber: 58 });
})();
export {
  SstApplyAttendanceComponent
};
//# debugId=48f6aa58-bd13-5ef2-839f-eee6d80c9b96
//# sourceMappingURL=chunk-B7YM7CNS.js.map
