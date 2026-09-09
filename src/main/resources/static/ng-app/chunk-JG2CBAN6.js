import {
  utils,
  writeFileSync
} from "./chunk-6KSHLFTP.js";
import {
  NzMessageService
} from "./chunk-XWW7CXU6.js";
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTW5U2M5.js";

// src/app/attendance-ex-batch-info/attendance-ex-batch-info.service.ts
var API_BASE = "/ess/infoApplyAttendance/api/attendanceEx";
var AttendanceExBatchInfoService = class _AttendanceExBatchInfoService {
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
  apply(rows) {
    return this.http.post(`${API_BASE}/apply`, rows, { withCredentials: true });
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
  static \u0275fac = function AttendanceExBatchInfoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AttendanceExBatchInfoService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AttendanceExBatchInfoService, factory: _AttendanceExBatchInfoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttendanceExBatchInfoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/attendance-ex-batch-info/attendance-ex-batch-info.component.ts
var _c0 = () => ({ nzFormat: "HH:mm" });
var _c1 = () => ({ x: "1780px", y: "calc(100vh - 460px)" });
function AttendanceExBatchInfoComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.deptTreeErrorMessage());
  }
}
function AttendanceExBatchInfoComponent_nz_option_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 44);
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r3.codeNo)("nzLabel", c_r3.codeName);
  }
}
function AttendanceExBatchInfoComponent_nz_option_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 44);
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    \u0275\u0275property("nzValue", s_r4.shiftNo)("nzLabel", s_r4.nameVi || s_r4.shiftName || "");
  }
}
function AttendanceExBatchInfoComponent_nz_option_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 44);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const o_r5 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r5.value)("nzLabel", \u0275\u0275pipeBind2(1, 2, o_r5.labelKey, o_r5.fallback));
  }
}
function AttendanceExBatchInfoComponent_nz_alert_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 45);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function AttendanceExBatchInfoComponent_tr_120_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 46)(2, "label", 47);
    \u0275\u0275twoWayListener("ngModelChange", function AttendanceExBatchInfoComponent_tr_120_Template_label_ngModelChange_2_listener($event) {
      const row_r7 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(row_r7.selected, $event) || (row_r7.selected = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 46);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 46);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275element(20, "br");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td")(24, "div", 48)(25, "span", 49);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "nz-date-picker", 50);
    \u0275\u0275listener("ngModelChange", function AttendanceExBatchInfoComponent_tr_120_Template_nz_date_picker_ngModelChange_28_listener($event) {
      const row_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDateChange(row_r7, "from", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 51)(30, "span", 49);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "nz-date-picker", 50);
    \u0275\u0275listener("ngModelChange", function AttendanceExBatchInfoComponent_tr_120_Template_nz_date_picker_ngModelChange_33_listener($event) {
      const row_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDateChange(row_r7, "to", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "td")(35, "input", 52);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275listener("ngModelChange", function AttendanceExBatchInfoComponent_tr_120_Template_input_ngModelChange_35_listener($event) {
      const row_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onRemarkChange(row_r7, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "td");
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", row_r7.selected);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r8 + 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r7.empId || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r7.empId);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r7.localName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r7.localName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r7.deptName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r7.deptName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r7.postGradeName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r7.postGradeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.arDateStr);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r7.itemNoName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r7.itemNoName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(19, 27, "ex.js.in", "V\xE0o"), ": ", row_r7.inDoorTime);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(22, 30, "ex.js.out", "Ra"), ": ", row_r7.outDoorTime, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 33, "ex.js.in", "V\xE0o"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", row_r7.fromDate)("nzShowTime", \u0275\u0275pureFunction0(42, _c0));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 36, "ex.js.out", "Ra"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", row_r7.toDate)("nzShowTime", \u0275\u0275pureFunction0(43, _c0));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", row_r7.remark)("placeholder", \u0275\u0275pipeBind2(36, 39, "ex.placeholder.remark", "Nh\u1EADp l\xFD do"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275attribute("title", row_r7.updatedBy || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r7.updatedBy);
  }
}
var I18N_KEYS = [
  "ex.field.empIdOrName",
  "ex.placeholder.empIdOrName",
  "ex.field.dept",
  "ex.placeholder.dept",
  "ex.field.fromDate",
  "ex.field.toDate",
  "ex.field.postFamily",
  "ex.field.shiftNo",
  "ex.field.leaveType",
  "ex.field.inTime",
  "ex.field.outTime",
  "ex.opt.all",
  "ex.opt.select",
  "ex.opt.unauthorized",
  "ex.opt.earlyLeave",
  "ex.opt.lateArrival",
  "ex.opt.forgotSwipe",
  "ex.btn.search",
  "ex.btn.apply",
  "ex.btn.export",
  "ex.btn.applyAll",
  "ex.col.no",
  "ex.col.empId",
  "ex.col.fullName",
  "ex.col.dept",
  "ex.col.position",
  "ex.col.workDate",
  "ex.col.absenceType",
  "ex.col.swipeTime",
  "ex.col.actualTime",
  "ex.col.reason",
  "ex.col.approver",
  "ex.js.in",
  "ex.js.out",
  "ex.placeholder.remark",
  "ex.msg.selectMinOne",
  "ex.msg.missingData",
  "ex.msg.fillTimeRequired",
  "ex.msg.submitSuccess",
  "ex.msg.submitFailed",
  "ex.msg.submitError",
  "ex.msg.selectMinOneBatch",
  "ex.msg.enterBatchTime",
  "ex.msg.batchApplied",
  "common.loadFail",
  "mep.msg.loadDeptFailed"
];
var POST_FAMILY_PARENT_CODE = "14015812";
var ITEM_NO_OPTIONS = [
  { value: "141443", labelKey: "ex.opt.unauthorized", fallback: "Ngh\u1EC9 kh\xF4ng ph\xE9p" },
  { value: "141442", labelKey: "ex.opt.earlyLeave", fallback: "V\u1EC1 s\u1EDBm" },
  { value: "141441", labelKey: "ex.opt.lateArrival", fallback: "\u0110\u1EBFn mu\u1ED9n" },
  { value: "14015448", labelKey: "ex.opt.forgotSwipe", fallback: "Qu\xEAn qu\u1EB9t th\u1EBB" }
];
var AttendanceExBatchInfoComponent = class _AttendanceExBatchInfoComponent {
  constructor(api, i18n, message) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
  }
  api;
  i18n;
  message;
  itemNoOptions = ITEM_NO_OPTIONS;
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
  applying = signal(
    false,
    ...ngDevMode ? [{ debugName: "applying" }] : (
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
  bulkInTime = null;
  bulkOutTime = null;
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
  /** Mặc định Từ ngày/Đến ngày = tuần hiện tại (Thứ 2 - Chủ nhật) - đúng exInitDefaultDateRange() bản gốc. */
  initDefaultDateRange() {
    const now = /* @__PURE__ */ new Date();
    const day = now.getDay() || 7;
    const monday = new Date(now);
    monday.setDate(now.getDate() - day + 1);
    const sunday = new Date(now);
    sunday.setDate(now.getDate() - day + 7);
    this.fromDate = monday;
    this.toDate = sunday;
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
        this.rows.set((list ?? []).map((r) => this.toRow(r)));
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.rows.set([]);
        this.loading.set(false);
      }
    });
  }
  toRow(r) {
    const fromDate = this.parseDt(r.shiftStartTime);
    const toDate = this.parseDt(r.shiftEndTime);
    return __spreadProps(__spreadValues({}, r), {
      selected: false,
      fromDate,
      toDate,
      fromDateTime: fromDate ? this.formatDt(fromDate) : "",
      toDateTime: toDate ? this.formatDt(toDate) : ""
    });
  }
  trackByRow = (_, row) => this.rowKey(row);
  rowKey(row) {
    if (row.applyNo)
      return String(row.applyNo);
    return [row.personId, row.arDateStr, row.empId, row.itemNo, row.shiftNo].join("|");
  }
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
  onDateChange(row, which, value) {
    if (which === "from") {
      row.fromDate = value;
      row.fromDateTime = value ? this.formatDt(value) : "";
    } else {
      row.toDate = value;
      row.toDateTime = value ? this.formatDt(value) : "";
    }
    if (value)
      row.selected = true;
  }
  onRemarkChange(row, value) {
    row.remark = value;
    if (value.trim())
      row.selected = true;
  }
  // ==================== Xin phép (dòng đã chọn) ====================
  applySelected() {
    const t = (key, fallback) => this.i18n.t(key, fallback);
    const selectedRows = this.rows().filter((r) => r.selected);
    if (!selectedRows.length) {
      this.message.warning(t("ex.msg.selectMinOne", "Vui l\xF2ng tick ch\u1ECDn \xEDt nh\u1EA5t m\u1ED9t d\xF2ng."));
      return;
    }
    for (const row of selectedRows) {
      if (!row.personId || !row.itemNo || !row.arDateStr) {
        this.message.warning(t("ex.msg.missingData", "Thi\u1EBFu d\u1EEF li\u1EC7u b\u1EAFt bu\u1ED9c \u1EDF d\xF2ng \u0111\xE3 ch\u1ECDn: nh\xE2n vi\xEAn/lo\u1EA1i ngh\u1EC9/ng\xE0y c\xF4ng."));
        return;
      }
      if (!row.fromDateTime || !row.toDateTime) {
        this.message.warning(t("ex.msg.fillTimeRequired", "Vui l\xF2ng nh\u1EADp \u0111\u1EA7y \u0111\u1EE7 th\u1EDDi gian v\xE0o/ra cho t\u1EA5t c\u1EA3 d\xF2ng \u0111\xE3 ch\u1ECDn."));
        return;
      }
    }
    const payload = selectedRows.map((row) => ({
      applyNo: row.applyNo || "",
      personId: row.personId,
      empId: row.empId,
      localName: row.localName,
      itemNo: row.itemNo,
      arDateStr: row.arDateStr,
      fromDateTime: row.fromDateTime,
      toDateTime: row.toDateTime,
      workHour: row.workHour || "",
      remark: row.remark || ""
    }));
    this.applying.set(true);
    this.api.apply(payload).subscribe({
      next: (res) => {
        this.applying.set(false);
        if (res && res.success) {
          this.message.success(res.message || t("ex.msg.submitSuccess", "Xin ph\xE9p th\xE0nh c\xF4ng."));
          this.search();
        } else {
          this.message.error(res && res.error || t("ex.msg.submitFailed", "Xin ph\xE9p th\u1EA5t b\u1EA1i."));
        }
      },
      error: () => {
        this.applying.set(false);
        this.message.error(t("ex.msg.submitError", "L\u1ED7i khi g\u1EEDi d\u1EEF li\u1EC7u xin ph\xE9p."));
      }
    });
  }
  // ==================== Thực hiện tất cả (áp giờ hàng loạt cho dòng đã chọn - client-side) ====================
  applyBatchTime() {
    const t = (key, fallback) => this.i18n.t(key, fallback);
    const selectedRows = this.rows().filter((r) => r.selected);
    if (!selectedRows.length) {
      this.message.warning(t("ex.msg.selectMinOneBatch", "Vui l\xF2ng ch\u1ECDn \xEDt nh\u1EA5t m\u1ED9t d\xF2ng \u0111\u1EC3 th\u1EF1c hi\u1EC7n."));
      return;
    }
    if (!this.bulkInTime && !this.bulkOutTime) {
      this.message.warning(t("ex.msg.enterBatchTime", "Vui l\xF2ng nh\u1EADp th\u1EDDi gian v\xE0o ho\u1EB7c th\u1EDDi gian ra."));
      return;
    }
    for (const row of selectedRows) {
      if (this.bulkInTime) {
        row.fromDate = this.bulkInTime;
        row.fromDateTime = this.formatDt(this.bulkInTime);
      }
      if (this.bulkOutTime) {
        row.toDate = this.bulkOutTime;
        row.toDateTime = this.formatDt(this.bulkOutTime);
      }
    }
    this.rows.set([...this.rows()]);
    this.message.success(t("ex.msg.batchApplied", "\u0110\xE3 \xE1p d\u1EE5ng th\u1EDDi gian cho c\xE1c d\xF2ng \u0111\xE3 ch\u1ECDn."));
  }
  // ==================== Xuất excel (client-side, không có endpoint export riêng ở backend) ====================
  exportExcel() {
    const t = (key, fallback) => this.i18n.t(key, fallback);
    const inLabel = t("ex.js.in", "V\xE0o");
    const outLabel = t("ex.js.out", "Ra");
    const headers = [
      t("ex.col.no", "No."),
      t("ex.col.empId", "M\xE3 nh\xE2n vi\xEAn"),
      t("ex.col.fullName", "H\u1ECD t\xEAn"),
      t("ex.col.dept", "Ph\xF2ng ban"),
      t("ex.col.position", "Ch\u1EE9c v\u1EE5"),
      t("ex.col.workDate", "Ng\xE0y c\xF4ng"),
      t("ex.col.absenceType", "Ph\xE2n lo\u1EA1i"),
      t("ex.col.swipeTime", "Th\u1EDDi gian qu\u1EB9t th\u1EBB"),
      t("ex.col.actualTime", "Th\u1EDDi gian th\u1EF1c t\u1EBF"),
      t("ex.col.reason", "L\xFD do"),
      t("ex.col.approver", "Ng\u01B0\u1EDDi duy\u1EC7t")
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      r.empId,
      r.localName,
      r.deptName,
      r.postGradeName,
      r.arDateStr,
      r.itemNoName,
      `${inLabel}: ${r.inDoorTime || ""} ${outLabel}: ${r.outDoorTime || ""}`,
      `${inLabel}: ${r.fromDateTime || ""} ${outLabel}: ${r.toDateTime || ""}`,
      r.remark || "",
      r.updatedBy || ""
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "DanhSach");
    writeFileSync(workbook, "attendance_ex_for_batch_export.xlsx");
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
  // ==================== Helpers ngày giờ (giữ định dạng "/" đúng bản gốc - xem docblock class) ====================
  formatYmdSlash(d) {
    return d ? formatDate(d, "yyyy/MM/dd", "vi") : "";
  }
  formatDt(d) {
    return formatDate(d, "yyyy/MM/dd HH:mm", "vi");
  }
  /** Parse 'yyyy/MM/dd HH:mm[:ss]' hoặc 'yyyy-MM-dd HH:mm[:ss]' về Date - trả null nếu chuỗi rỗng/không
   *  hợp lệ. Chấp nhận cả 2 dấu phân cách vì GET_AR_SHIFT_START_TIME/GET_AR_SHIFT_END_TIME (dùng để
   *  prefill ô "Thời gian thực tế") trả về dạng "-" trong khi FROM_TIME/TO_TIME của bảng dùng dạng "/"
   *  - đúng lý do exNormalizeDateTimeValue() bản gốc cũng tự nhận diện cả 2 dạng này. */
  parseDt(value) {
    if (!value)
      return null;
    const normalized = value.trim().replace("T", " ");
    const match = normalized.match(/^(\d{4})[/-](\d{2})[/-](\d{2}) (\d{2}):(\d{2})/);
    if (!match)
      return null;
    const [, y, mo, d, h, mi] = match;
    return new Date(Number(y), Number(mo) - 1, Number(d), Number(h), Number(mi));
  }
  static \u0275fac = function AttendanceExBatchInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AttendanceExBatchInfoComponent)(\u0275\u0275directiveInject(AttendanceExBatchInfoService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AttendanceExBatchInfoComponent, selectors: [["app-attendance-ex-batch-info"]], decls: 121, vars: 147, consts: [["exTable", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", "align-items-end", 3, "ngSubmit"], [1, "col-md-2"], [1, "form-label"], ["nz-input", "", "name", "keyword", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "deptNos", "nzCheckable", "", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["class", "text-danger small mt-1", 4, "ngIf"], ["name", "fromDate", "nzFormat", "yyyy/MM/dd", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "toDate", "nzFormat", "yyyy/MM/dd", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "postFamily", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["name", "shiftNo", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["name", "itemNo", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [1, "col-md-6", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "nzType", "default", "nzDanger", "", "type", "button", 3, "click", "nzLoading"], [1, "bx", "bx-send"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-export"], [1, "mb-3"], [1, "col-md-3"], ["name", "bulkInTime", "nzFormat", "yyyy/MM/dd HH:mm", 1, "w-100", 3, "ngModelChange", "ngModel", "nzShowTime"], ["name", "bulkOutTime", "nzFormat", "yyyy/MM/dd HH:mm", 1, "w-100", 3, "ngModelChange", "ngModel", "nzShowTime"], ["nz-button", "", "nzType", "default", "type", "submit"], [1, "bx", "bx-check-double"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [1, "table-nowrap", 3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzScroll"], ["nzWidth", "50px"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel", "nzIndeterminate"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "100px"], ["nzWidth", "160px"], ["nzWidth", "180px"], ["nzWidth", "140px"], ["nzWidth", "100px", 1, "text-center"], ["nzWidth", "150px"], ["nzWidth", "260px"], ["nzWidth", "220px"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "text-danger", "small", "mt-1"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], [1, "text-center"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel"], [1, "input-group", "input-group-sm", "mb-1"], [1, "input-group-text", 2, "width", "40px"], ["nzFormat", "yyyy/MM/dd HH:mm", 3, "ngModelChange", "ngModel", "nzShowTime"], [1, "input-group", "input-group-sm"], ["nz-input", "", 3, "ngModelChange", "ngModel", "placeholder"]], template: function AttendanceExBatchInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "nz-card", 3)(3, "form", 4);
      \u0275\u0275listener("ngSubmit", function AttendanceExBatchInfoComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 5)(5, "label", 6);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 7);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function AttendanceExBatchInfoComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.keyword, $event) || (ctx.keyword = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 5)(11, "label", 6);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "nz-tree-select", 8);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function AttendanceExBatchInfoComponent_Template_nz_tree_select_ngModelChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.deptNos, $event) || (ctx.deptNos = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275template(16, AttendanceExBatchInfoComponent_div_16_Template, 2, 1, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 5)(18, "label", 6);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "nz-date-picker", 10);
      \u0275\u0275twoWayListener("ngModelChange", function AttendanceExBatchInfoComponent_Template_nz_date_picker_ngModelChange_21_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.fromDate, $event) || (ctx.fromDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 5)(23, "label", 6);
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "nz-date-picker", 11);
      \u0275\u0275twoWayListener("ngModelChange", function AttendanceExBatchInfoComponent_Template_nz_date_picker_ngModelChange_26_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.toDate, $event) || (ctx.toDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 5)(28, "label", 6);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "nz-select", 12);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function AttendanceExBatchInfoComponent_Template_nz_select_ngModelChange_31_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.postFamily, $event) || (ctx.postFamily = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(33, AttendanceExBatchInfoComponent_nz_option_33_Template, 1, 2, "nz-option", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 5)(35, "label", 6);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "nz-select", 14);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function AttendanceExBatchInfoComponent_Template_nz_select_ngModelChange_38_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.shiftNo, $event) || (ctx.shiftNo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(40, AttendanceExBatchInfoComponent_nz_option_40_Template, 1, 2, "nz-option", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 5)(42, "label", 6);
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "nz-select", 15);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function AttendanceExBatchInfoComponent_Template_nz_select_ngModelChange_45_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.itemNo, $event) || (ctx.itemNo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(47, AttendanceExBatchInfoComponent_nz_option_47_Template, 2, 5, "nz-option", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 16)(49, "button", 17);
      \u0275\u0275element(50, "i", 18);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "button", 19);
      \u0275\u0275listener("click", function AttendanceExBatchInfoComponent_Template_button_click_53_listener() {
        return ctx.applySelected();
      });
      \u0275\u0275element(54, "i", 20);
      \u0275\u0275text(55);
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "button", 21);
      \u0275\u0275listener("click", function AttendanceExBatchInfoComponent_Template_button_click_57_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(58, "i", 22);
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(61, "nz-card", 23)(62, "form", 4);
      \u0275\u0275listener("ngSubmit", function AttendanceExBatchInfoComponent_Template_form_ngSubmit_62_listener() {
        return ctx.applyBatchTime();
      });
      \u0275\u0275elementStart(63, "div", 24)(64, "label", 6);
      \u0275\u0275text(65);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "nz-date-picker", 25);
      \u0275\u0275twoWayListener("ngModelChange", function AttendanceExBatchInfoComponent_Template_nz_date_picker_ngModelChange_67_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.bulkInTime, $event) || (ctx.bulkInTime = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 24)(69, "label", 6);
      \u0275\u0275text(70);
      \u0275\u0275pipe(71, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "nz-date-picker", 26);
      \u0275\u0275twoWayListener("ngModelChange", function AttendanceExBatchInfoComponent_Template_nz_date_picker_ngModelChange_72_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.bulkOutTime, $event) || (ctx.bulkOutTime = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 24)(74, "button", 27);
      \u0275\u0275element(75, "i", 28);
      \u0275\u0275text(76);
      \u0275\u0275pipe(77, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(78, "nz-card");
      \u0275\u0275template(79, AttendanceExBatchInfoComponent_nz_alert_79_Template, 1, 1, "nz-alert", 29);
      \u0275\u0275elementStart(80, "nz-table", 30, 0)(82, "thead")(83, "tr")(84, "th", 31)(85, "label", 32);
      \u0275\u0275listener("ngModelChange", function AttendanceExBatchInfoComponent_Template_label_ngModelChange_85_listener($event) {
        return ctx.toggleSelectAll($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "th", 33);
      \u0275\u0275text(87);
      \u0275\u0275pipe(88, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "th", 34);
      \u0275\u0275text(90);
      \u0275\u0275pipe(91, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "th", 35);
      \u0275\u0275text(93);
      \u0275\u0275pipe(94, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "th", 36);
      \u0275\u0275text(96);
      \u0275\u0275pipe(97, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "th", 37);
      \u0275\u0275text(99);
      \u0275\u0275pipe(100, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "th", 38);
      \u0275\u0275text(102);
      \u0275\u0275pipe(103, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "th", 39);
      \u0275\u0275text(105);
      \u0275\u0275pipe(106, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "th", 36);
      \u0275\u0275text(108);
      \u0275\u0275pipe(109, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "th", 40);
      \u0275\u0275text(111);
      \u0275\u0275pipe(112, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "th", 41);
      \u0275\u0275text(114);
      \u0275\u0275pipe(115, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "th", 35);
      \u0275\u0275text(117);
      \u0275\u0275pipe(118, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(119, "tbody");
      \u0275\u0275template(120, AttendanceExBatchInfoComponent_tr_120_Template, 39, 44, "tr", 42);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      const exTable_r9 = \u0275\u0275reference(81);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 57, "ex.field.empIdOrName", "M\xE3 NV / H\u1ECD t\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.keyword);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 60, "ex.placeholder.empIdOrName", "Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 63, "ex.field.dept", "Ph\xF2ng ban"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzNodes", ctx.deptNodes());
      \u0275\u0275twoWayProperty("ngModel", ctx.deptNos);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(15, 66, "ex.placeholder.dept", "Ch\u1ECDn ph\xF2ng ban"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.deptTreeErrorMessage());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 69, "ex.field.fromDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.fromDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 72, "ex.field.toDate", "Ng\xE0y k\u1EBFt th\xFAc"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.toDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 75, "ex.field.postFamily", "Nh\xF3m nh\xE2n vi\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.postFamily);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(32, 78, "ex.opt.all", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.postFamilyOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 81, "ex.field.shiftNo", "Ca l\xE0m vi\u1EC7c"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.shiftNo);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(39, 84, "ex.opt.all", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.shiftOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 87, "ex.field.leaveType", "Lo\u1EA1i ngh\u1EC9 ph\xE9p"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.itemNo);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(46, 90, "ex.opt.select", "L\u1EF1a ch\u1ECDn"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.itemNoOptions);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(52, 93, "ex.btn.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.applying());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(56, 96, "ex.btn.apply", "Xin ph\xE9p"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(60, 99, "ex.btn.export", "Xu\u1EA5t excel"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(66, 102, "ex.field.inTime", "Th\u1EDDi gian v\xE0o"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.bulkInTime);
      \u0275\u0275property("nzShowTime", \u0275\u0275pureFunction0(144, _c0));
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(71, 105, "ex.field.outTime", "Th\u1EDDi gian ra"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.bulkOutTime);
      \u0275\u0275property("nzShowTime", \u0275\u0275pureFunction0(145, _c0));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(77, 108, "ex.btn.applyAll", "Th\u1EF1c hi\u1EC7n t\u1EA5t c\u1EA3"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzScroll", \u0275\u0275pureFunction0(146, _c1));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.allSelected)("nzIndeterminate", ctx.someSelected);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(88, 111, "ex.col.no", "No."));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(91, 114, "ex.col.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(94, 117, "ex.col.fullName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(97, 120, "ex.col.dept", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(100, 123, "ex.col.position", "Ch\u1EE9c v\u1EE5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(103, 126, "ex.col.workDate", "Ng\xE0y c\xF4ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(106, 129, "ex.col.absenceType", "Ph\xE2n lo\u1EA1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(109, 132, "ex.col.swipeTime", "Th\u1EDDi gian qu\u1EB9t th\u1EBB"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(112, 135, "ex.col.actualTime", "Th\u1EDDi gian th\u1EF1c t\u1EBF"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(115, 138, "ex.col.reason", "L\xFD do"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(118, 141, "ex.col.approver", "Ng\u01B0\u1EDDi duy\u1EC7t"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", exTable_r9.data)("ngForTrackBy", ctx.trackByRow);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzDatePickerModule, NzDatePickerComponent, NzCheckboxModule, NzCheckboxComponent, NzTreeSelectModule, NzTreeSelectComponent, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=attendance-ex-batch-info.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttendanceExBatchInfoComponent, [{
    type: Component,
    args: [{ selector: "app-attendance-ex-batch-info", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzSelectModule,
      NzButtonModule,
      NzDatePickerModule,
      NzCheckboxModule,
      NzTreeSelectModule,
      NzAlertModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm - \u0111\u1EE9ng im khi cu\u1ED9n (xem .sticky-filter-card trong styles.css) -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3 align-items-end" (ngSubmit)="search()">
        <div class="col-md-2">
          <label class="form-label">{{ 'ex.field.empIdOrName' | translate:'M\xE3 NV / H\u1ECD t\xEAn' }}</label>
          <input nz-input [(ngModel)]="keyword" name="keyword"
                 [placeholder]="'ex.placeholder.empIdOrName' | translate:'Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn'">
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'ex.field.dept' | translate:'Ph\xF2ng ban' }}</label>
          <nz-tree-select class="w-100" [nzNodes]="deptNodes()" [(ngModel)]="deptNos" name="deptNos"
                           nzCheckable nzShowSearch nzAllowClear
                           [nzPlaceHolder]="'ex.placeholder.dept' | translate:'Ch\u1ECDn ph\xF2ng ban'"></nz-tree-select>
          <div *ngIf="deptTreeErrorMessage()" class="text-danger small mt-1">{{ deptTreeErrorMessage() }}</div>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'ex.field.fromDate' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="fromDate" name="fromDate" nzFormat="yyyy/MM/dd"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'ex.field.toDate' | translate:'Ng\xE0y k\u1EBFt th\xFAc' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="toDate" name="toDate" nzFormat="yyyy/MM/dd"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'ex.field.postFamily' | translate:'Nh\xF3m nh\xE2n vi\xEAn' }}</label>
          <nz-select class="w-100" [(ngModel)]="postFamily" name="postFamily" nzAllowClear
                     [nzPlaceHolder]="'ex.opt.all' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let c of postFamilyOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'ex.field.shiftNo' | translate:'Ca l\xE0m vi\u1EC7c' }}</label>
          <nz-select class="w-100" [(ngModel)]="shiftNo" name="shiftNo" nzAllowClear
                     [nzPlaceHolder]="'ex.opt.all' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let s of shiftOptions()" [nzValue]="s.shiftNo" [nzLabel]="s.nameVi || s.shiftName || ''"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'ex.field.leaveType' | translate:'Lo\u1EA1i ngh\u1EC9 ph\xE9p' }}</label>
          <nz-select class="w-100" [(ngModel)]="itemNo" name="itemNo" nzAllowClear
                     [nzPlaceHolder]="'ex.opt.select' | translate:'L\u1EF1a ch\u1ECDn'">
            <nz-option *ngFor="let o of itemNoOptions" [nzValue]="o.value" [nzLabel]="o.labelKey | translate:o.fallback"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-6 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'ex.btn.search' | translate:'Tra c\u1EE9u' }}
          </button>
          <button nz-button nzType="default" nzDanger type="button" [nzLoading]="applying()" (click)="applySelected()">
            <i class="bx bx-send"></i> {{ 'ex.btn.apply' | translate:'Xin ph\xE9p' }}
          </button>
          <button nz-button type="button" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'ex.btn.export' | translate:'Xu\u1EA5t excel' }}
          </button>
        </div>
      </form>
    </nz-card>

    <!-- Thao t\xE1c h\xE0ng lo\u1EA1t: \xE1p th\u1EDDi gian v\xE0o/ra cho c\xE1c d\xF2ng \u0111\xE3 tick ch\u1ECDn (client-side, ch\u01B0a l\u01B0u) -->
    <nz-card class="mb-3">
      <form class="row g-3 align-items-end" (ngSubmit)="applyBatchTime()">
        <div class="col-md-3">
          <label class="form-label">{{ 'ex.field.inTime' | translate:'Th\u1EDDi gian v\xE0o' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="bulkInTime" name="bulkInTime" nzFormat="yyyy/MM/dd HH:mm"
                           [nzShowTime]="{ nzFormat: 'HH:mm' }"></nz-date-picker>
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'ex.field.outTime' | translate:'Th\u1EDDi gian ra' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="bulkOutTime" name="bulkOutTime" nzFormat="yyyy/MM/dd HH:mm"
                           [nzShowTime]="{ nzFormat: 'HH:mm' }"></nz-date-picker>
        </div>
        <div class="col-md-3">
          <button nz-button nzType="default" type="submit">
            <i class="bx bx-check-double"></i> {{ 'ex.btn.applyAll' | translate:'Th\u1EF1c hi\u1EC7n t\u1EA5t c\u1EA3' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions"
                [nzScroll]="{ x: '1780px', y: 'calc(100vh - 460px)' }"
                class="table-nowrap" #exTable>
        <!-- nzWidth khai b\xE1o cho t\u1EEBng c\u1ED9t \u0111\u1EC3 \u0111\u1ED3ng b\u1ED9 \u0111\u1ED9 r\u1ED9ng header/body khi d\xF9ng nzScroll (xem
             gi\u1EA3i th\xEDch \u1EDF dept-ot-apply-info.component.html). -->
        <thead>
          <tr>
            <th nzWidth="50px">
              <label nz-checkbox [ngModel]="allSelected" [nzIndeterminate]="someSelected"
                     (ngModelChange)="toggleSelectAll($event)"></label>
            </th>
            <th class="text-center" nzWidth="60px">{{ 'ex.col.no' | translate:'No.' }}</th>
            <th nzWidth="100px">{{ 'ex.col.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
            <th nzWidth="160px">{{ 'ex.col.fullName' | translate:'H\u1ECD t\xEAn' }}</th>
            <th nzWidth="180px">{{ 'ex.col.dept' | translate:'Ph\xF2ng ban' }}</th>
            <th nzWidth="140px">{{ 'ex.col.position' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'ex.col.workDate' | translate:'Ng\xE0y c\xF4ng' }}</th>
            <th nzWidth="150px">{{ 'ex.col.absenceType' | translate:'Ph\xE2n lo\u1EA1i' }}</th>
            <th nzWidth="180px">{{ 'ex.col.swipeTime' | translate:'Th\u1EDDi gian qu\u1EB9t th\u1EBB' }}</th>
            <th nzWidth="260px">{{ 'ex.col.actualTime' | translate:'Th\u1EDDi gian th\u1EF1c t\u1EBF' }}</th>
            <th nzWidth="220px">{{ 'ex.col.reason' | translate:'L\xFD do' }}</th>
            <th nzWidth="160px">{{ 'ex.col.approver' | translate:'Ng\u01B0\u1EDDi duy\u1EC7t' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of exTable.data; let i = index; trackBy: trackByRow">
            <td class="text-center">
              <label nz-checkbox [(ngModel)]="row.selected"></label>
            </td>
            <td class="text-center">{{ i + 1 }}</td>
            <td [attr.title]="row.empId || null">{{ row.empId }}</td>
            <td [attr.title]="row.localName || null">{{ row.localName }}</td>
            <td [attr.title]="row.deptName || null">{{ row.deptName }}</td>
            <td [attr.title]="row.postGradeName || null">{{ row.postGradeName }}</td>
            <td class="text-center">{{ row.arDateStr }}</td>
            <td [attr.title]="row.itemNoName || null">{{ row.itemNoName }}</td>
            <td>
              {{ 'ex.js.in' | translate:'V\xE0o' }}: {{ row.inDoorTime }}<br>
              {{ 'ex.js.out' | translate:'Ra' }}: {{ row.outDoorTime }}
            </td>
            <td>
              <div class="input-group input-group-sm mb-1">
                <span class="input-group-text" style="width: 40px">{{ 'ex.js.in' | translate:'V\xE0o' }}</span>
                <nz-date-picker [ngModel]="row.fromDate" (ngModelChange)="onDateChange(row, 'from', $event)"
                                 nzFormat="yyyy/MM/dd HH:mm" [nzShowTime]="{ nzFormat: 'HH:mm' }"></nz-date-picker>
              </div>
              <div class="input-group input-group-sm">
                <span class="input-group-text" style="width: 40px">{{ 'ex.js.out' | translate:'Ra' }}</span>
                <nz-date-picker [ngModel]="row.toDate" (ngModelChange)="onDateChange(row, 'to', $event)"
                                 nzFormat="yyyy/MM/dd HH:mm" [nzShowTime]="{ nzFormat: 'HH:mm' }"></nz-date-picker>
              </div>
            </td>
            <td>
              <input nz-input [ngModel]="row.remark" (ngModelChange)="onRemarkChange(row, $event)"
                     [placeholder]="'ex.placeholder.remark' | translate:'Nh\u1EADp l\xFD do'">
            </td>
            <td [attr.title]="row.updatedBy || null">{{ row.updatedBy }}</td>
          </tr>
        </tbody>
      </nz-table>
    </nz-card>
  </div>
</div>
`, styles: ["/* src/app/attendance-ex-batch-info/attendance-ex-batch-info.component.css */\ntable td,\ntable th {\n  white-space: nowrap;\n}\ntable td {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=attendance-ex-batch-info.component.css.map */\n"] }]
  }], () => [{ type: AttendanceExBatchInfoService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AttendanceExBatchInfoComponent, { className: "AttendanceExBatchInfoComponent", filePath: "src/app/attendance-ex-batch-info/attendance-ex-batch-info.component.ts", lineNumber: 86 });
})();
export {
  AttendanceExBatchInfoComponent
};
//# debugId=f9e93024-2527-5aac-a157-bfbb0f061944
//# sourceMappingURL=chunk-JG2CBAN6.js.map
