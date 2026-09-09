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
import {
  NzCheckboxComponent,
  NzCheckboxModule
} from "./chunk-VWYGF7JF.js";
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
  HttpHeaders,
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

// src/app/cwa-abnormal-apply/cwa-abnormal-apply.service.ts
var CWA_API_BASE = "/ess/infoApply/api/myCwaAbnormal";
var LEAVE_APPLY_API_BASE = "/ar/attendanceMintenance/api/leaveApply";
var ATTENDANCE_EX_APPLY_URL = "/ess/infoApplyAttendance/api/attendanceEx/apply";
var CWA_APPLY_TYPE_NO = "218197";
var CWA_APPLY_TYPE_CODE = "141443";
var CwaAbnormalApplyService = class _CwaAbnormalApplyService {
  constructor(http) {
    this.http = http;
  }
  http;
  getBasicInfo() {
    return this.http.get("/ess/empinfo/api/personalInfo/myInfo", { withCredentials: true });
  }
  getList(params) {
    let httpParams = new HttpParams();
    if (params.startDate)
      httpParams = httpParams.set("startDate", params.startDate);
    if (params.endDate)
      httpParams = httpParams.set("endDate", params.endDate);
    return this.http.get(`${CWA_API_BASE}/list`, { params: httpParams, withCredentials: true });
  }
  /** Endpoint gốc nhận @RequestParam (không phải @RequestBody JSON) nên phải gửi dạng
   *  application/x-www-form-urlencoded - đúng cách $.post() của jQuery bản gốc gửi lên. */
  getApprovers(personId) {
    const body = new HttpParams().set("applyTypeNo", CWA_APPLY_TYPE_NO).set("personId", personId).set("applyTypeCode", CWA_APPLY_TYPE_CODE).set("applyLength", "0");
    const headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");
    return this.http.post(`${LEAVE_APPLY_API_BASE}/approvers`, body.toString(), {
      headers,
      withCredentials: true
    });
  }
  submit(items) {
    return this.http.post(ATTENDANCE_EX_APPLY_URL, items, { withCredentials: true });
  }
  static \u0275fac = function CwaAbnormalApplyService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CwaAbnormalApplyService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CwaAbnormalApplyService, factory: _CwaAbnormalApplyService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CwaAbnormalApplyService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/cwa-abnormal-apply/cwa-abnormal-apply.component.ts
var _c0 = () => ({ nzFormat: "HH:mm" });
var _c1 = () => [25, 50, 100];
var _c2 = () => ({ x: "1200px" });
function CwaAbnormalApplyComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34)(2, "table", 35)(3, "colgroup");
    \u0275\u0275element(4, "col", 36)(5, "col", 37)(6, "col", 36)(7, "col", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "tbody")(9, "tr")(10, "th", 38);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 38);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "tr")(21, "th", 38);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 38);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "tr")(32, "th", 38);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "td");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th", 38);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "td");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "tr")(43, "th", 38);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "td");
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th", 38);
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
function CwaAbnormalApplyComponent_nz_alert_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 39);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r3.errorMessage() ?? "");
  }
}
function CwaAbnormalApplyComponent_tr_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 40)(2, "label", 41);
    \u0275\u0275twoWayListener("ngModelChange", function CwaAbnormalApplyComponent_tr_63_Template_label_ngModelChange_2_listener($event) {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(row_r6.selected, $event) || (row_r6.selected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 40);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 42)(10, "div");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td")(17, "div", 43)(18, "span", 44);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "nz-date-picker", 45);
    \u0275\u0275twoWayListener("ngModelChange", function CwaAbnormalApplyComponent_tr_63_Template_nz_date_picker_ngModelChange_21_listener($event) {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(row_r6.inTime, $event) || (row_r6.inTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 46)(23, "span", 44);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "nz-date-picker", 45);
    \u0275\u0275twoWayListener("ngModelChange", function CwaAbnormalApplyComponent_tr_63_Template_nz_date_picker_ngModelChange_26_listener($event) {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(row_r6.outTime, $event) || (row_r6.outTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td")(28, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function CwaAbnormalApplyComponent_tr_63_Template_input_ngModelChange_28_listener($event) {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      \u0275\u0275twoWayBindingSet(row_r6.remark, $event) || (row_r6.remark = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", row_r6.selected);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r7 + 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.itemName || row_r6.itemNo || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.itemName || row_r6.itemNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.arDateStr);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(12, 16, "essCwa.inLabel", "V\xE0o"), ": ", row_r6.indoorTime || "**:**");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(15, 19, "essCwa.outLabel", "Ra"), ": ", row_r6.outdoorTime || "**:**");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 22, "essCwa.inLabel", "V\xE0o"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", row_r6.inTime);
    \u0275\u0275property("nzShowTime", \u0275\u0275pureFunction0(28, _c0));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 25, "essCwa.outLabel", "Ra"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", row_r6.outTime);
    \u0275\u0275property("nzShowTime", \u0275\u0275pureFunction0(29, _c0));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", row_r6.remark);
    \u0275\u0275control();
  }
}
function CwaAbnormalApplyComponent_ng_template_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r8 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r8, " ");
  }
}
function CwaAbnormalApplyComponent_tr_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 48);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "essCwa.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function CwaAbnormalApplyComponent_tr_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r9.affirmLevel || i_r10 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r9.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r9.empId);
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
  "essCwa.startDate",
  "essCwa.endDate",
  "essCwa.search",
  "essCwa.batchIn",
  "essCwa.batchOut",
  "essCwa.applyAll",
  "essCwa.submit",
  "essCwa.category",
  "essCwa.workDate",
  "essCwa.cardSwipe",
  "essCwa.timeInput",
  "essCwa.reason",
  "essCwa.approver",
  "essCwa.quickFilter",
  "essCwa.noData",
  "essCwa.loadError",
  "essCwa.selectRowAlert",
  "essCwa.fillTimeAlert",
  "essCwa.applySuccess",
  "essCwa.applyFail",
  "essCwa.connectError",
  "essCwa.inLabel",
  "essCwa.outLabel",
  "common.stt",
  "common.empId",
  "common.totalRows"
];
var CwaAbnormalApplyComponent = class _CwaAbnormalApplyComponent {
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
  submitting = signal(
    false,
    ...ngDevMode ? [{ debugName: "submitting" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Dùng signal (không phải field thường như các trang lọc nhanh khác) để filteredRows là computed
   *  đúng nghĩa: nhớ lại kết quả cũ khi không đổi (tránh nz-table nhận mảng mới mỗi vòng change
   *  detection rồi tự reset về trang 1), đồng thời vẫn lọc lại ngay khi gõ. */
  quickFilterKeyword = signal(
    "",
    ...ngDevMode ? [{ debugName: "quickFilterKeyword" }] : (
      /* istanbul ignore next */
      []
    )
  );
  filteredRows = computed(
    () => {
      const kw = this.quickFilterKeyword().trim().toLowerCase();
      const rows = this.rows();
      if (!kw)
        return rows;
      return rows.filter((r) => [r.itemName, r.itemNo, r.arDateStr, r.indoorTime, r.outdoorTime].some((v) => v && String(v).toLowerCase().includes(kw)));
    },
    ...ngDevMode ? [{ debugName: "filteredRows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  startDate = null;
  endDate = null;
  globalInTime = null;
  globalOutTime = null;
  personId = "";
  localName = "";
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.initDefaultDateRange();
    this.setDefaultGlobalTimes();
    this.api.getBasicInfo().subscribe((data) => {
      this.basicInfo.set(data);
      this.personId = data?.personId || "";
      this.localName = data?.localName || "";
      this.loadApprovers();
      this.search();
    });
  }
  search() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getList({ startDate: this.formatDmy(this.startDate), endDate: this.formatDmy(this.endDate) }).subscribe({
      next: (list) => {
        this.rows.set((list ?? []).map((dto) => this.buildDisplayRow(dto)));
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("essCwa.loadError", "L\u1ED7i t\u1EA3i d\u1EEF li\u1EC7u"));
        this.rows.set([]);
        this.loading.set(false);
      }
    });
  }
  isAllSelected() {
    const rows = this.rows();
    return rows.length > 0 && rows.every((r) => r.selected);
  }
  isSomeSelected() {
    return this.rows().some((r) => r.selected) && !this.isAllSelected();
  }
  toggleSelectAll(checked) {
    this.rows().forEach((r) => r.selected = checked);
  }
  /** Copy giờ vào/ra hàng loạt vào các dòng truyền vào (gọi với cwaTable.data từ template - tức trang
   *  hiện tại) - giữ đúng hành vi scaApplyAll() bản gốc, chỉ ghi đè khi có nhập giờ hàng loạt. */
  applyAllToPage(pageRows) {
    pageRows.forEach((r) => {
      if (this.globalInTime)
        r.inTime = new Date(this.globalInTime.getTime());
      if (this.globalOutTime)
        r.outTime = new Date(this.globalOutTime.getTime());
    });
  }
  submit() {
    const t = (key, fallback) => this.i18n.t(key, fallback);
    const selected = this.rows().filter((r) => r.selected);
    if (!selected.length) {
      this.message.warning(t("essCwa.selectRowAlert", "Vui l\xF2ng ch\u1ECDn \xEDt nh\u1EA5t m\u1ED9t d\xF2ng \u0111\u1EC3 xin ph\xE9p."));
      return;
    }
    if (selected.some((r) => !r.inTime || !r.outTime)) {
      this.message.warning(t("essCwa.fillTimeAlert", "Vui l\xF2ng nh\u1EADp \u0111\u1EA7y \u0111\u1EE7 th\u1EDDi gian v\xE0o/ra cho t\u1EA5t c\u1EA3 d\xF2ng \u0111\u01B0\u1EE3c ch\u1ECDn."));
      return;
    }
    this.modal.confirm({
      nzTitle: t("essCwa.submit", "Xin ph\xE9p"),
      nzContent: t("essCwa.submit", "Xin ph\xE9p"),
      nzOnOk: () => this.doSubmit(selected)
    });
  }
  doSubmit(selected) {
    const t = (key, fallback) => this.i18n.t(key, fallback);
    const payload = selected.map((r) => ({
      applyNo: r.pkNo,
      personId: this.personId,
      localName: this.localName,
      itemNo: r.itemNo,
      arDateStr: r.arDateStr,
      fromDateTime: this.formatDmyHm(r.inTime),
      toDateTime: this.formatDmyHm(r.outTime),
      workHour: this.calcWorkHour(r.inTime, r.outTime),
      remark: r.remark
    }));
    this.submitting.set(true);
    this.api.submit(payload).subscribe({
      next: (res) => {
        this.submitting.set(false);
        if (res?.success) {
          this.message.success(res.message || t("essCwa.applySuccess", "Xin ph\xE9p th\xE0nh c\xF4ng!"));
          this.search();
        } else {
          this.message.error(res?.error || t("essCwa.applyFail", "Xin ph\xE9p th\u1EA5t b\u1EA1i!"));
        }
      },
      error: () => {
        this.submitting.set(false);
        this.message.error(t("essCwa.connectError", "L\u1ED7i k\u1EBFt n\u1ED1i khi xin ph\xE9p!"));
      }
    });
  }
  loadApprovers() {
    if (!this.personId)
      return;
    this.approversLoading.set(true);
    this.api.getApprovers(this.personId).subscribe({
      next: (list) => {
        this.approvers.set((list ?? []).filter((a) => String(a.affirmLevel) !== "0"));
        this.approversLoading.set(false);
      },
      error: () => {
        this.approvers.set([]);
        this.approversLoading.set(false);
      }
    });
  }
  buildDisplayRow(dto) {
    const inDateStr = dto.shiftStartYyyy || dto.arDateStr;
    const outDateStr = dto.shiftEndYyyy || dto.arDateStr;
    return __spreadProps(__spreadValues({}, dto), {
      selected: false,
      inTime: this.parseDmyHm(inDateStr, dto.shiftStartHh || "08", dto.shiftStartMi || "00"),
      outTime: this.parseDmyHm(outDateStr, dto.shiftEndHh || "17", dto.shiftEndMi || "00"),
      remark: ""
    });
  }
  /** Mặc định từ ngày 01 đến ngày cuối tháng hiện tại - giữ đúng hành vi scaGetDefaultDateRange() bản gốc. */
  initDefaultDateRange() {
    const now = /* @__PURE__ */ new Date();
    this.startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    this.endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  }
  /** Mặc định 08:00 - 17:00 hôm nay cho khối "Thiết lập thời gian hàng loạt" - giữ đúng bản gốc
   *  (value="08"/value="17" của sca_globalInHh/sca_globalOutHh). */
  setDefaultGlobalTimes() {
    const now = /* @__PURE__ */ new Date();
    this.globalInTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 0);
    this.globalOutTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 17, 0);
  }
  /** dmy dạng DD/MM/YYYY (đúng định dạng AR_DATE_STR/SHIFT_START_YYYY/SHIFT_END_YYYY trả về từ backend). */
  parseDmyHm(dmy, hh, mi) {
    if (!dmy)
      return null;
    const p = dmy.split("/");
    if (p.length !== 3)
      return null;
    const d = new Date(+p[2], +p[1] - 1, +p[0], parseInt(hh, 10) || 0, parseInt(mi, 10) || 0);
    return isNaN(d.getTime()) ? null : d;
  }
  calcWorkHour(from, to) {
    if (!from || !to || to <= from)
      return "0";
    return ((to.getTime() - from.getTime()) / 36e5).toFixed(2);
  }
  formatDmy(d) {
    return d ? formatDate(d, "dd/MM/yyyy", "vi") : "";
  }
  formatDmyHm(d) {
    return d ? formatDate(d, "dd/MM/yyyy HH:mm", "vi") : "";
  }
  static \u0275fac = function CwaAbnormalApplyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CwaAbnormalApplyComponent)(\u0275\u0275directiveInject(CwaAbnormalApplyService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService), \u0275\u0275directiveInject(NzModalService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CwaAbnormalApplyComponent, selectors: [["app-cwa-abnormal-apply"]], decls: 82, vars: 97, consts: [["cwaTable", ""], ["cwaTotalTpl", ""], ["cwaApproverTable", ""], [1, "row"], [1, "col-12"], ["class", "card mb-3", 4, "ngIf"], [1, "card", "mb-2"], [1, "card-body", "py-2", "px-3"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], [1, "fw-semibold", "small"], ["nzFormat", "dd/MM/yyyy", 2, "width", "130px", 3, "ngModelChange", "ngModel"], ["nz-button", "", "nzType", "primary", "nzSize", "small", 3, "click"], ["nzFormat", "dd/MM/yyyy HH:mm", 2, "width", "190px", 3, "ngModelChange", "ngModel", "nzShowTime"], [1, "fw-semibold", "small", "ms-2"], ["nz-button", "", "nzSize", "small", 1, "ms-2", 3, "click"], ["nz-button", "", "nzType", "primary", "nzSize", "small", 1, "ms-auto", 3, "click", "nzLoading"], [1, "d-flex", "align-items-center", "gap-2", "mb-2"], ["nz-input", "", 2, "max-width", "160px", 3, "ngModelChange", "ngModel", "placeholder"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [1, "table-nowrap", 3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "40px"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel", "nzIndeterminate"], ["nzWidth", "50px", 1, "text-center"], ["nzWidth", "150px"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "130px", 1, "text-center"], ["nzWidth", "380px", 1, "text-center"], ["nzWidth", "180px"], [4, "ngFor", "ngForOf"], ["nzSize", "small", 1, "mt-3", 3, "nzData", "nzLoading", "nzShowPagination"], [1, "text-center", 2, "width", "60px"], [1, "text-center", 2, "width", "130px"], [4, "ngIf"], [1, "card", "mb-3"], [1, "card-body", "p-0"], [1, "table", "table-bordered", "table-sm", "align-middle", "mb-0", 2, "table-layout", "fixed"], [2, "width", "15%"], [2, "width", "35%"], [1, "table-light", "text-center"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], [1, "text-center"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel"], [1, "text-center", "small"], [1, "d-flex", "align-items-center", "gap-1", "mb-1"], [1, "small", "flex-shrink-0", 2, "width", "26px"], ["nzFormat", "dd/MM/yyyy HH:mm", 2, "flex", "1", "min-width", "0", 3, "ngModelChange", "ngModel", "nzShowTime"], [1, "d-flex", "align-items-center", "gap-1"], ["nz-input", "", 3, "ngModelChange", "ngModel"], ["colspan", "3", 1, "text-center", "text-muted"]], template: function CwaAbnormalApplyComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
      \u0275\u0275template(2, CwaAbnormalApplyComponent_div_2_Template, 53, 40, "div", 5);
      \u0275\u0275elementStart(3, "div", 6)(4, "div", 7)(5, "div", 8)(6, "span", 9);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "nz-date-picker", 10);
      \u0275\u0275twoWayListener("ngModelChange", function CwaAbnormalApplyComponent_Template_nz_date_picker_ngModelChange_9_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.startDate, $event) || (ctx.startDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(10, "span", 9);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "nz-date-picker", 10);
      \u0275\u0275twoWayListener("ngModelChange", function CwaAbnormalApplyComponent_Template_nz_date_picker_ngModelChange_13_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.endDate, $event) || (ctx.endDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(14, "button", 11);
      \u0275\u0275listener("click", function CwaAbnormalApplyComponent_Template_button_click_14_listener() {
        return ctx.search();
      });
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "div", 6)(18, "div", 7)(19, "div", 8)(20, "span", 9);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "nz-date-picker", 12);
      \u0275\u0275twoWayListener("ngModelChange", function CwaAbnormalApplyComponent_Template_nz_date_picker_ngModelChange_23_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.globalInTime, $event) || (ctx.globalInTime = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(24, "span", 13);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "nz-date-picker", 12);
      \u0275\u0275twoWayListener("ngModelChange", function CwaAbnormalApplyComponent_Template_nz_date_picker_ngModelChange_27_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.globalOutTime, $event) || (ctx.globalOutTime = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(28, "button", 14);
      \u0275\u0275listener("click", function CwaAbnormalApplyComponent_Template_button_click_28_listener() {
        \u0275\u0275restoreView(_r1);
        const cwaTable_r3 = \u0275\u0275reference(39);
        return \u0275\u0275resetView(ctx.applyAllToPage(cwaTable_r3.data));
      });
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "button", 15);
      \u0275\u0275listener("click", function CwaAbnormalApplyComponent_Template_button_click_31_listener() {
        return ctx.submit();
      });
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(34, "div", 16)(35, "input", 17);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275listener("ngModelChange", function CwaAbnormalApplyComponent_Template_input_ngModelChange_35_listener($event) {
        return ctx.quickFilterKeyword.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275template(37, CwaAbnormalApplyComponent_nz_alert_37_Template, 1, 1, "nz-alert", 18);
      \u0275\u0275elementStart(38, "nz-table", 19, 0)(40, "thead")(41, "tr")(42, "th", 20)(43, "label", 21);
      \u0275\u0275listener("ngModelChange", function CwaAbnormalApplyComponent_Template_label_ngModelChange_43_listener($event) {
        return ctx.toggleSelectAll($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "th", 22);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "th", 23);
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "th", 24);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "th", 25);
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "th", 26);
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "th", 27);
      \u0275\u0275text(60);
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(62, "tbody");
      \u0275\u0275template(63, CwaAbnormalApplyComponent_tr_63_Template, 29, 30, "tr", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275template(64, CwaAbnormalApplyComponent_ng_template_64_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "nz-table", 29, 2)(68, "thead")(69, "tr")(70, "th", 30);
      \u0275\u0275text(71);
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "th");
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "th", 31);
      \u0275\u0275text(77);
      \u0275\u0275pipe(78, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(79, "tbody");
      \u0275\u0275template(80, CwaAbnormalApplyComponent_tr_80_Template, 4, 4, "tr", 32)(81, CwaAbnormalApplyComponent_tr_81_Template, 7, 3, "tr", 28);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const cwaTable_r3 = \u0275\u0275reference(39);
      const cwaTotalTpl_r11 = \u0275\u0275reference(65);
      const cwaApproverTable_r12 = \u0275\u0275reference(67);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.basicInfo());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 42, "essCwa.startDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.startDate);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 45, "essCwa.endDate", "Ng\xE0y k\u1EBFt th\xFAc"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.endDate);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(16, 48, "essCwa.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 51, "essCwa.batchIn", "V\xE0o:"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.globalInTime);
      \u0275\u0275property("nzShowTime", \u0275\u0275pureFunction0(93, _c0));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 54, "essCwa.batchOut", "Ra:"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.globalOutTime);
      \u0275\u0275property("nzShowTime", \u0275\u0275pureFunction0(94, _c0));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(30, 57, "essCwa.applyAll", "Th\u1EF1c hi\u1EC7n t\u1EA5t c\u1EA3"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.submitting());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(33, 60, "essCwa.submit", "Xin ph\xE9p"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.quickFilterKeyword())("placeholder", \u0275\u0275pipeBind2(36, 63, "essCwa.quickFilter", "L\u1ECDc nhanh"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.filteredRows())("nzLoading", ctx.loading())("nzPageSize", 50)("nzShowSizeChanger", true)("nzPageSizeOptions", \u0275\u0275pureFunction0(95, _c1))("nzShowTotal", cwaTotalTpl_r11)("nzScroll", \u0275\u0275pureFunction0(96, _c2));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.isAllSelected())("nzIndeterminate", ctx.isSomeSelected());
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 66, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 69, "essCwa.category", "Ph\xE2n lo\u1EA1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(52, 72, "essCwa.workDate", "Ng\xE0y c\xF4ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(55, 75, "essCwa.cardSwipe", "Th\u1EDDi gian qu\u1EB9t th\u1EBB"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(58, 78, "essCwa.timeInput", "Th\u1EDDi gian"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(61, 81, "essCwa.reason", "L\xFD do"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", cwaTable_r3.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzData", ctx.approvers())("nzLoading", ctx.approversLoading())("nzShowPagination", false);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(72, 84, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(75, 87, "essCwa.approver", "Ng\u01B0\u1EDDi duy\u1EC7t"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(78, 90, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.approversLoading() && cwaApproverTable_r12.data.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", cwaApproverTable_r12.data);
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
    NzButtonModule,
    NzButtonComponent,
    NzTransitionPatchDirective,
    NzWaveDirective,
    NzDatePickerModule,
    NzDatePickerComponent,
    NzCheckboxModule,
    NzCheckboxComponent,
    NzModalModule,
    NzAlertModule,
    NzAlertComponent,
    TranslatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CwaAbnormalApplyComponent, [{
    type: Component,
    args: [{ selector: "app-cwa-abnormal-apply", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzInputModule,
      NzButtonModule,
      NzDatePickerModule,
      NzCheckboxModule,
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

    <!-- ===== \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm ===== -->
    <div class="card mb-2">
      <div class="card-body py-2 px-3">
        <div class="d-flex align-items-center gap-2 flex-wrap">
          <span class="fw-semibold small">{{ 'essCwa.startDate' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u' }}</span>
          <nz-date-picker style="width:130px;" [(ngModel)]="startDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
          <span class="fw-semibold small">{{ 'essCwa.endDate' | translate:'Ng\xE0y k\u1EBFt th\xFAc' }}</span>
          <nz-date-picker style="width:130px;" [(ngModel)]="endDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
          <button nz-button nzType="primary" nzSize="small" (click)="search()">
            {{ 'essCwa.search' | translate:'Tra c\u1EE9u' }}
          </button>
        </div>
      </div>
    </div>

    <!-- ===== Thi\u1EBFt l\u1EADp th\u1EDDi gian h\xE0ng lo\u1EA1t ===== -->
    <div class="card mb-2">
      <div class="card-body py-2 px-3">
        <div class="d-flex align-items-center gap-2 flex-wrap">
          <span class="fw-semibold small">{{ 'essCwa.batchIn' | translate:'V\xE0o:' }}</span>
          <nz-date-picker style="width:190px;" [(ngModel)]="globalInTime" nzFormat="dd/MM/yyyy HH:mm"
                           [nzShowTime]="{ nzFormat: 'HH:mm' }"></nz-date-picker>
          <span class="fw-semibold small ms-2">{{ 'essCwa.batchOut' | translate:'Ra:' }}</span>
          <nz-date-picker style="width:190px;" [(ngModel)]="globalOutTime" nzFormat="dd/MM/yyyy HH:mm"
                           [nzShowTime]="{ nzFormat: 'HH:mm' }"></nz-date-picker>
          <button nz-button nzSize="small" class="ms-2" (click)="applyAllToPage(cwaTable.data)">
            {{ 'essCwa.applyAll' | translate:'Th\u1EF1c hi\u1EC7n t\u1EA5t c\u1EA3' }}
          </button>
          <button nz-button nzType="primary" nzSize="small" class="ms-auto" [nzLoading]="submitting()" (click)="submit()">
            {{ 'essCwa.submit' | translate:'Xin ph\xE9p' }}
          </button>
        </div>
      </div>
    </div>

    <!-- ===== Toolbar l\u1ECDc nhanh ===== -->
    <div class="d-flex align-items-center gap-2 mb-2">
      <input nz-input style="max-width:160px;" [ngModel]="quickFilterKeyword()"
             (ngModelChange)="quickFilterKeyword.set($event)"
             [placeholder]="'essCwa.quickFilter' | translate:'L\u1ECDc nhanh'">
    </div>

    <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

    <!-- ===== B\u1EA3ng danh s\xE1ch ===== -->
    <nz-table [nzData]="filteredRows()" [nzLoading]="loading()" [nzPageSize]="50" [nzShowSizeChanger]="true"
              [nzPageSizeOptions]="[25, 50, 100]" [nzShowTotal]="cwaTotalTpl"
              [nzScroll]="{ x: '1200px' }" class="table-nowrap" #cwaTable>
      <thead>
        <tr>
          <th nzWidth="40px">
            <label nz-checkbox [ngModel]="isAllSelected()" [nzIndeterminate]="isSomeSelected()"
                   (ngModelChange)="toggleSelectAll($event)"></label>
          </th>
          <th class="text-center" nzWidth="50px">{{ 'common.stt' | translate:'STT' }}</th>
          <th nzWidth="150px">{{ 'essCwa.category' | translate:'Ph\xE2n lo\u1EA1i' }}</th>
          <th class="text-center" nzWidth="110px">{{ 'essCwa.workDate' | translate:'Ng\xE0y c\xF4ng' }}</th>
          <th class="text-center" nzWidth="130px">{{ 'essCwa.cardSwipe' | translate:'Th\u1EDDi gian qu\u1EB9t th\u1EBB' }}</th>
          <th class="text-center" nzWidth="380px">{{ 'essCwa.timeInput' | translate:'Th\u1EDDi gian' }}</th>
          <th nzWidth="180px">{{ 'essCwa.reason' | translate:'L\xFD do' }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of cwaTable.data; let i = index">
          <td class="text-center">
            <label nz-checkbox [(ngModel)]="row.selected"></label>
          </td>
          <td class="text-center">{{ i + 1 }}</td>
          <td [attr.title]="row.itemName || row.itemNo || null">{{ row.itemName || row.itemNo }}</td>
          <td class="text-center">{{ row.arDateStr }}</td>
          <td class="text-center small">
            <div>{{ 'essCwa.inLabel' | translate:'V\xE0o' }}: {{ row.indoorTime || '**:**' }}</div>
            <div>{{ 'essCwa.outLabel' | translate:'Ra' }}: {{ row.outdoorTime || '**:**' }}</div>
          </td>
          <td>
            <div class="d-flex align-items-center gap-1 mb-1">
              <span class="small flex-shrink-0" style="width:26px;">{{ 'essCwa.inLabel' | translate:'V\xE0o' }}</span>
              <nz-date-picker style="flex:1;min-width:0;" [(ngModel)]="row.inTime" nzFormat="dd/MM/yyyy HH:mm"
                               [nzShowTime]="{ nzFormat: 'HH:mm' }"></nz-date-picker>
            </div>
            <div class="d-flex align-items-center gap-1">
              <span class="small flex-shrink-0" style="width:26px;">{{ 'essCwa.outLabel' | translate:'Ra' }}</span>
              <nz-date-picker style="flex:1;min-width:0;" [(ngModel)]="row.outTime" nzFormat="dd/MM/yyyy HH:mm"
                               [nzShowTime]="{ nzFormat: 'HH:mm' }"></nz-date-picker>
            </div>
          </td>
          <td><input nz-input [(ngModel)]="row.remark"></td>
        </tr>
      </tbody>
      <ng-template #cwaTotalTpl let-total>
        {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
      </ng-template>
    </nz-table>

    <!-- ===== Danh s\xE1ch ng\u01B0\u1EDDi ph\xEA duy\u1EC7t ===== -->
    <nz-table [nzData]="approvers()" [nzLoading]="approversLoading()" [nzShowPagination]="false"
              nzSize="small" class="mt-3" #cwaApproverTable>
      <thead>
        <tr>
          <th class="text-center" style="width:60px">{{ 'common.stt' | translate:'STT' }}</th>
          <th>{{ 'essCwa.approver' | translate:'Ng\u01B0\u1EDDi duy\u1EC7t' }}</th>
          <th class="text-center" style="width:130px">{{ 'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngIf="!approversLoading() && cwaApproverTable.data.length === 0">
          <td colspan="3" class="text-center text-muted">{{ 'essCwa.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
        </tr>
        <tr *ngFor="let item of cwaApproverTable.data; let i = index">
          <td class="text-center">{{ item.affirmLevel || i + 1 }}</td>
          <td>{{ item.localName }}</td>
          <td class="text-center">{{ item.empId }}</td>
        </tr>
      </tbody>
    </nz-table>

  </div>
</div>
` }]
  }], () => [{ type: CwaAbnormalApplyService }, { type: I18nService }, { type: NzMessageService }, { type: NzModalService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CwaAbnormalApplyComponent, { className: "CwaAbnormalApplyComponent", filePath: "src/app/cwa-abnormal-apply/cwa-abnormal-apply.component.ts", lineNumber: 69 });
})();
export {
  CwaAbnormalApplyComponent
};
//# debugId=fde3b479-3dba-527e-b874-ce0fffddb684
//# sourceMappingURL=chunk-O5XXV6PB.js.map
