import {
  AuthService
} from "./chunk-NF2IPJNZ.js";
import {
  NzMessageService
} from "./chunk-XWW7CXU6.js";
import {
  NzModalService
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
import "./chunk-2GOAB54B.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel
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
  ɵɵclassProp,
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

// src/app/view-start-point/view-start-point.service.ts
var API_BASE = "/hrm/empinfo/api/startpoint";
var ViewStartPointService = class _ViewStartPointService {
  constructor(http) {
    this.http = http;
  }
  http;
  searchEmployee(keyword) {
    return this.http.get(`${API_BASE}/employee/search`, {
      params: new HttpParams().set("keyword", keyword),
      withCredentials: true
    });
  }
  getDecisionList(params) {
    return this.http.post(`${API_BASE}/decisions/list`, params, {
      withCredentials: true
    });
  }
  getDecisionDetail(seq) {
    return this.http.get(`${API_BASE}/decisions/detail`, {
      params: new HttpParams().set("seq", String(seq)),
      withCredentials: true
    });
  }
  saveDecision(dto) {
    return this.http.post(`${API_BASE}/decisions/save`, dto, { withCredentials: true });
  }
  deleteDecision(seq) {
    return this.http.post(`${API_BASE}/decisions/delete`, null, {
      params: new HttpParams().set("seq", String(seq)),
      withCredentials: true
    });
  }
  exportUrl(personId, localName) {
    return `${API_BASE}/decisions/export?personId=${encodeURIComponent(personId)}&localName=${encodeURIComponent(localName)}`;
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
  static \u0275fac = function ViewStartPointService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewStartPointService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewStartPointService, factory: _ViewStartPointService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewStartPointService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-start-point/view-start-point.component.ts
var _c0 = () => ({ padding: "8px" });
var _c1 = () => ({ y: "calc(100vh - 420px)" });
function ViewStartPointComponent_div_8_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" | ", ctx_r0.currentDeptName);
  }
}
function ViewStartPointComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 50);
    \u0275\u0275text(4);
    \u0275\u0275template(5, ViewStartPointComponent_div_8_span_5_Template, 2, 1, "span", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.currentLocalName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.currentEmpId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.currentDeptName);
  }
}
function ViewStartPointComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "vsp.label.noEmployee", "-- Ch\u01B0a ch\u1ECDn nh\xE2n vi\xEAn --"));
  }
}
function ViewStartPointComponent_tr_35_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r3.deptName);
  }
}
function ViewStartPointComponent_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 52);
    \u0275\u0275listener("click", function ViewStartPointComponent_tr_35_Template_tr_click_0_listener() {
      const row_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectDecision(row_r3));
    });
    \u0275\u0275elementStart(1, "td", 53);
    \u0275\u0275listener("click", function ViewStartPointComponent_tr_35_Template_td_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "label", 54);
    \u0275\u0275listener("ngModelChange", function ViewStartPointComponent_tr_35_Template_label_ngModelChange_2_listener($event) {
      const row_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleChecked(row_r3.seq, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 49);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ViewStartPointComponent_tr_35_div_6_Template, 2, 1, "div", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 56);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("vsp-decision-row-active", row_r3.seq === ctx_r0.selectedSeq());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r0.isChecked(row_r3.seq));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r3.transCodeName || row_r3.transCode);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r3.deptName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.startDate);
  }
}
function ViewStartPointComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 58);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.currentPersonId ? \u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u") : \u0275\u0275pipeBind2(4, 4, "vsp.js.selectFirst", "Vui l\xF2ng t\xECm ki\u1EBFm nh\xE2n vi\xEAn tr\u01B0\u1EDBc"), " ");
  }
}
function ViewStartPointComponent_span_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", ctx_r0.form.seq);
  }
}
function ViewStartPointComponent_nz_option_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 60);
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r4.codeNo)("nzLabel", c_r4.codeName);
  }
}
function ViewStartPointComponent_nz_option_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 60);
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r5.codeNo)("nzLabel", c_r5.codeName);
  }
}
function ViewStartPointComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.deptTreeErrorMessage());
  }
}
function ViewStartPointComponent_nz_option_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 60);
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r6.codeNo)("nzLabel", c_r6.codeName);
  }
}
function ViewStartPointComponent_nz_option_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 60);
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r7.codeNo)("nzLabel", c_r7.codeName);
  }
}
function ViewStartPointComponent_nz_option_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 60);
  }
  if (rf & 2) {
    const c_r8 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r8.codeNo)("nzLabel", c_r8.codeName);
  }
}
function ViewStartPointComponent_nz_option_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 60);
  }
  if (rf & 2) {
    const c_r9 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r9.codeNo)("nzLabel", c_r9.codeName);
  }
}
function ViewStartPointComponent_nz_option_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 60);
  }
  if (rf & 2) {
    const c_r10 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r10.codeNo)("nzLabel", c_r10.codeName);
  }
}
function ViewStartPointComponent_nz_option_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 60);
  }
  if (rf & 2) {
    const c_r11 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r11.codeNo)("nzLabel", c_r11.codeName);
  }
}
var I18N_KEYS = [
  "vsp.title",
  "vsp.search.placeholder",
  "vsp.label.noEmployee",
  "vsp.label.decisions",
  "vsp.label.selectDecision",
  "vsp.label.newDecision",
  "vsp.field.transCode",
  "vsp.field.startDate",
  "vsp.field.deptNo",
  "vsp.field.empTypeCode",
  "vsp.field.postFamily",
  "vsp.field.postGradeNo",
  "vsp.field.positionNo",
  "vsp.field.mainBusiness",
  "vsp.field.transResource",
  "vsp.field.costCenter",
  "vsp.field.position",
  "vsp.field.remark",
  "vsp.js.selectFirst",
  "vsp.js.confirmDelete",
  "vsp.js.selectRow",
  "vsp.js.notFound",
  "vsp.js.required",
  "recruit.list.placeholder.selectDept",
  "common.add",
  "common.delete",
  "common.save",
  "common.search",
  "common.success",
  "common.error",
  "common.noData",
  "common.exportExcel",
  "mep.msg.loadDeptFailed",
  "common.loadFail"
];
var PAGE_SIZE = 20;
function emptyForm(personId) {
  return {
    seq: null,
    personId,
    transCode: null,
    startDatePicker: /* @__PURE__ */ new Date(),
    deptno: null,
    empTypeCode: null,
    postFamily: null,
    postGradeNo: null,
    positionNo: null,
    costCenter: "",
    position: null,
    mainBusiness: null,
    transResource: null,
    remark: ""
  };
}
var ViewStartPointComponent = class _ViewStartPointComponent {
  constructor(api, auth, i18n, message, modal) {
    this.api = api;
    this.auth = auth;
    this.i18n = i18n;
    this.message = message;
    this.modal = modal;
  }
  api;
  auth;
  i18n;
  message;
  modal;
  pageSize = PAGE_SIZE;
  searchKeyword = "";
  searching = signal(
    false,
    ...ngDevMode ? [{ debugName: "searching" }] : (
      /* istanbul ignore next */
      []
    )
  );
  currentPersonId = null;
  currentEmpId = null;
  currentLocalName = null;
  currentDeptName = null;
  decisions = signal(
    [],
    ...ngDevMode ? [{ debugName: "decisions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  totalRecords = signal(
    0,
    ...ngDevMode ? [{ debugName: "totalRecords" }] : (
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
  pageIndex = 1;
  checkedSeqs = signal(
    /* @__PURE__ */ new Set(),
    ...ngDevMode ? [{ debugName: "checkedSeqs" }] : (
      /* istanbul ignore next */
      []
    )
  );
  latestSeq = null;
  selectedSeq = signal(
    null,
    ...ngDevMode ? [{ debugName: "selectedSeq" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isNewMode = signal(
    false,
    ...ngDevMode ? [{ debugName: "isNewMode" }] : (
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
  saving = signal(
    false,
    ...ngDevMode ? [{ debugName: "saving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = emptyForm("");
  deptNodes = signal(
    [],
    ...ngDevMode ? [{ debugName: "deptNodes" }] : (
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
  transCodeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "transCodeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  transResourceOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "transResourceOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  empTypeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "empTypeOptions" }] : (
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
  postGradeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "postGradeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  positionNoOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "positionNoOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  positionOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "positionOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  mainBusinessOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "mainBusinessOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
    this.loadStaticCodeOptions();
    const me = this.auth.currentUser();
    if (me?.personId) {
      this.currentPersonId = me.personId;
      this.currentLocalName = me.employeeName ?? null;
      this.currentDeptName = me.deptName ?? null;
      this.loadDecisionList();
    }
  }
  t(key, fallback) {
    return this.i18n.t(key, fallback);
  }
  // ==================== Tìm kiếm nhân viên ====================
  searchEmployee() {
    const keyword = this.searchKeyword.trim();
    this.searching.set(true);
    this.api.searchEmployee(keyword).subscribe({
      next: (emp) => {
        this.searching.set(false);
        this.currentPersonId = emp.personId;
        this.currentEmpId = emp.empId ?? null;
        this.currentLocalName = emp.localName ?? null;
        this.currentDeptName = emp.deptName ?? null;
        this.pageIndex = 1;
        this.selectedSeq.set(null);
        this.isNewMode.set(false);
        this.checkedSeqs.set(/* @__PURE__ */ new Set());
        this.form = emptyForm(this.currentPersonId);
        this.loadDecisionList();
      },
      error: (err) => {
        this.searching.set(false);
        if (err?.status === 404)
          this.message.warning(this.t("vsp.js.notFound", "Kh\xF4ng t\xECm th\u1EA5y nh\xE2n vi\xEAn"));
        else
          this.message.error(this.t("common.error", "L\u1ED7i"));
      }
    });
  }
  // ==================== Danh sách quyết định ====================
  loadDecisionList() {
    if (!this.currentPersonId)
      return;
    this.loading.set(true);
    const params = {
      draw: this.pageIndex,
      start: (this.pageIndex - 1) * this.pageSize,
      length: this.pageSize,
      personId: this.currentPersonId
    };
    this.api.getDecisionList(params).subscribe({
      next: (res) => {
        const rows = res.data ?? [];
        this.decisions.set(rows);
        this.totalRecords.set(res.recordsTotal ?? 0);
        this.latestSeq = rows.length > 0 ? rows[0].seq : null;
        this.loading.set(false);
      },
      error: () => {
        this.message.error(this.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.loading.set(false);
      }
    });
  }
  onPageIndexChange(index) {
    this.pageIndex = index;
    this.loadDecisionList();
  }
  isChecked(seq) {
    return this.checkedSeqs().has(seq);
  }
  toggleChecked(seq, checked) {
    const next = new Set(this.checkedSeqs());
    if (checked)
      next.add(seq);
    else
      next.delete(seq);
    this.checkedSeqs.set(next);
  }
  // ==================== Chọn quyết định để xem chi tiết ====================
  get selectedTitle() {
    if (this.isNewMode())
      return this.t("vsp.label.newDecision", "Quy\u1EBFt \u0111\u1ECBnh m\u1EDBi");
    const row = this.decisions().find((d) => d.seq === this.selectedSeq());
    if (row)
      return row.transCodeName || row.transCode || "";
    return this.t("vsp.label.selectDecision", "-- Ch\u1ECDn quy\u1EBFt \u0111\u1ECBnh --");
  }
  selectDecision(row) {
    this.selectedSeq.set(row.seq);
    this.isNewMode.set(false);
    this.detailLoading.set(true);
    this.api.getDecisionDetail(row.seq).subscribe({
      next: (d) => {
        this.form = {
          seq: d.seq,
          personId: d.personId ?? this.currentPersonId ?? "",
          transCode: d.transCode ?? null,
          startDatePicker: this.toDate(d.startDate),
          deptno: d.deptno ?? null,
          empTypeCode: d.empTypeCode ?? null,
          postFamily: d.postFamily ?? null,
          postGradeNo: d.postGradeNo ?? null,
          positionNo: d.positionNo ?? null,
          costCenter: d.costCenter ?? "",
          position: d.position ?? null,
          mainBusiness: d.mainBusiness ?? null,
          transResource: d.transResource ?? null,
          remark: d.remark ?? ""
        };
        this.loadPostGradeOptions(d.postFamily);
        this.loadTransResourceOptions(d.transCode);
        this.detailLoading.set(false);
      },
      error: () => {
        this.message.error(this.t("common.error", "L\u1ED7i"));
        this.detailLoading.set(false);
      }
    });
  }
  // ==================== Thêm mới quyết định ====================
  newDecision() {
    if (!this.currentPersonId) {
      this.message.warning(this.t("vsp.js.selectFirst", "Vui l\xF2ng t\xECm ki\u1EBFm nh\xE2n vi\xEAn tr\u01B0\u1EDBc"));
      return;
    }
    this.selectedSeq.set(null);
    this.isNewMode.set(true);
    if (!this.latestSeq) {
      this.form = emptyForm(this.currentPersonId);
      this.postGradeOptions.set([]);
      this.transResourceOptions.set([]);
      return;
    }
    this.detailLoading.set(true);
    this.api.getDecisionDetail(this.latestSeq).subscribe({
      next: (d) => {
        this.form = {
          seq: null,
          personId: this.currentPersonId,
          transCode: null,
          startDatePicker: /* @__PURE__ */ new Date(),
          deptno: d.deptno ?? null,
          empTypeCode: d.empTypeCode ?? null,
          postFamily: d.postFamily ?? null,
          postGradeNo: d.postGradeNo ?? null,
          positionNo: d.positionNo ?? null,
          costCenter: d.costCenter ?? "",
          position: d.position ?? null,
          mainBusiness: d.mainBusiness ?? null,
          transResource: null,
          remark: d.remark ?? ""
        };
        this.loadPostGradeOptions(d.postFamily);
        this.transResourceOptions.set([]);
        this.detailLoading.set(false);
      },
      error: () => {
        this.form = emptyForm(this.currentPersonId);
        this.postGradeOptions.set([]);
        this.transResourceOptions.set([]);
        this.detailLoading.set(false);
      }
    });
  }
  // ==================== Lưu / Xóa ====================
  onTransCodeChange(value) {
    this.form.transCode = value ?? "";
    this.form.transResource = "";
    this.loadTransResourceOptions(value);
  }
  onPostFamilyChange(value) {
    this.form.postFamily = value ?? "";
    this.form.postGradeNo = "";
    this.loadPostGradeOptions(value);
  }
  onDeptnoChange(value) {
    this.form.deptno = value ?? "";
    this.form.costCenter = value ?? "";
  }
  saveDecision() {
    if (!this.form.transCode || !this.form.startDatePicker) {
      this.message.warning(this.t("vsp.js.required", "Vui l\xF2ng nh\u1EADp \u0111\u1EA7y \u0111\u1EE7 th\xF4ng tin b\u1EAFt bu\u1ED9c"));
      return;
    }
    if (!this.form.personId) {
      this.message.warning(this.t("vsp.js.selectFirst", "Vui l\xF2ng t\xECm ki\u1EBFm nh\xE2n vi\xEAn tr\u01B0\u1EDBc"));
      return;
    }
    const f = this.form;
    const dto = {
      seq: f.seq ?? void 0,
      personId: f.personId,
      transCode: f.transCode,
      startDate: this.toDateStr(f.startDatePicker),
      deptno: f.deptno,
      empTypeCode: f.empTypeCode,
      postFamily: f.postFamily,
      postGradeNo: f.postGradeNo,
      positionNo: f.positionNo,
      costCenter: f.costCenter,
      position: f.position,
      mainBusiness: f.mainBusiness,
      transResource: f.transResource,
      remark: f.remark
    };
    this.saving.set(true);
    this.api.saveDecision(dto).subscribe({
      next: (res) => {
        this.saving.set(false);
        if (res.success) {
          if (!f.seq && res.seq) {
            this.form.seq = res.seq;
            this.selectedSeq.set(res.seq);
            this.isNewMode.set(false);
          }
          this.message.success(res.message || this.t("common.success", "Th\xE0nh c\xF4ng"));
          this.loadDecisionList();
        } else {
          this.message.error(res.message || this.t("common.error", "L\u1ED7i"));
        }
      },
      error: () => {
        this.saving.set(false);
        this.message.error(this.t("common.error", "L\u1ED7i"));
      }
    });
  }
  deleteSelected() {
    const seqs = Array.from(this.checkedSeqs());
    if (!seqs.length) {
      this.message.warning(this.t("vsp.js.selectRow", "Vui l\xF2ng ch\u1ECDn \xEDt nh\u1EA5t m\u1ED9t quy\u1EBFt \u0111\u1ECBnh"));
      return;
    }
    this.modal.confirm({
      nzTitle: this.t("common.delete", "X\xF3a"),
      nzContent: this.t("vsp.js.confirmDelete", "X\xE1c nh\u1EADn x\xF3a quy\u1EBFt \u0111\u1ECBnh \u0111\xE3 ch\u1ECDn?"),
      nzOnOk: () => {
        let remaining = seqs.length;
        seqs.forEach((seq) => {
          this.api.deleteDecision(seq).subscribe({
            next: () => {
              remaining -= 1;
              if (remaining === 0) {
                if (this.selectedSeq() && seqs.includes(this.selectedSeq())) {
                  this.selectedSeq.set(null);
                  this.isNewMode.set(false);
                  this.form = emptyForm(this.currentPersonId ?? "");
                }
                this.checkedSeqs.set(/* @__PURE__ */ new Set());
                this.loadDecisionList();
              }
            },
            error: () => {
              remaining -= 1;
              if (remaining === 0)
                this.loadDecisionList();
            }
          });
        });
      }
    });
  }
  exportExcel() {
    if (!this.currentPersonId) {
      this.message.warning(this.t("vsp.js.selectFirst", "Vui l\xF2ng t\xECm ki\u1EBFm nh\xE2n vi\xEAn tr\u01B0\u1EDBc"));
      return;
    }
    window.location.href = this.api.exportUrl(this.currentPersonId, this.currentLocalName ?? "");
  }
  // ==================== Danh mục (code list) + cây phòng ban ====================
  loadDeptTree() {
    this.api.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(this.buildDeptTree(list ?? [])),
      error: () => this.deptTreeErrorMessage.set(this.t("mep.msg.loadDeptFailed", "L\u1ED7i khi t\u1EA3i danh s\xE1ch ph\xF2ng ban"))
    });
  }
  buildDeptTree(list) {
    const map = /* @__PURE__ */ new Map();
    list.forEach((d) => map.set(d.id, { title: d.text, key: d.id, parent: d.parent, children: [] }));
    const roots = [];
    map.forEach((node) => {
      if (node.parent && node.parent !== "0" && map.has(node.parent)) {
        map.get(node.parent).children.push(node);
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
  loadStaticCodeOptions() {
    this.api.getCodeList("14013956").subscribe((list) => this.transCodeOptions.set(list ?? []));
    this.api.getCodeList("13864").subscribe((list) => this.empTypeOptions.set(list ?? []));
    this.api.getCodeList("14015812").subscribe((list) => this.postFamilyOptions.set(list ?? []));
    this.api.getCodeList("14014036").subscribe((list) => this.positionNoOptions.set(list ?? []));
    this.api.getCodeList("14014049").subscribe((list) => this.positionOptions.set(list ?? []));
    this.api.getCodeList("400098").subscribe((list) => this.mainBusinessOptions.set(list ?? []));
  }
  loadPostGradeOptions(postFamily) {
    this.api.getCodeList(postFamily || "400001").subscribe((list) => this.postGradeOptions.set(list ?? []));
  }
  loadTransResourceOptions(transCode) {
    if (!transCode) {
      this.transResourceOptions.set([]);
      return;
    }
    this.api.getCodeList(transCode).subscribe((list) => this.transResourceOptions.set(list ?? []));
  }
  // ==================== Helpers ngày tháng + hiển thị ====================
  toDate(dateStr) {
    if (!dateStr)
      return null;
    const [d, m, y] = dateStr.split("/");
    if (d && m && y) {
      const parsed2 = new Date(Number(y), Number(m) - 1, Number(d));
      return isNaN(parsed2.getTime()) ? null : parsed2;
    }
    const parsed = new Date(dateStr);
    return isNaN(parsed.getTime()) ? null : parsed;
  }
  toDateStr(d) {
    return d ? formatDate(d, "dd/MM/yyyy", "vi") : "";
  }
  static \u0275fac = function ViewStartPointComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewStartPointComponent)(\u0275\u0275directiveInject(ViewStartPointService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService), \u0275\u0275directiveInject(NzModalService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewStartPointComponent, selectors: [["app-view-start-point"]], decls: 121, vars: 128, consts: [[1, "row", "g-3"], [1, "col-lg-4"], [1, "mb-3"], [1, "d-flex", "gap-1"], ["nz-input", "", "name", "vspSearchKeyword", 3, "ngModelChange", "keyup.enter", "ngModel", "placeholder"], ["nz-button", "", "nzType", "primary", 3, "click", "nzLoading"], [1, "bx", "bx-search"], ["class", "mt-2", 4, "ngIf"], ["class", "mt-2 text-muted small", 4, "ngIf"], [3, "nzBodyStyle"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2", "px-1"], [1, "small", "text-muted"], ["nz-button", "", "nzType", "primary", "nzSize", "small", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzDanger", "", "nzSize", "small", 3, "click", "disabled"], [1, "bx", "bx-trash"], ["nz-button", "", "nzSize", "small", 3, "click"], [1, "bx", "bx-export"], ["nzSize", "small", 1, "vsp-decision-table", 3, "nzPageIndexChange", "nzData", "nzFrontPagination", "nzLoading", "nzTotal", "nzPageIndex", "nzPageSize", "nzShowPagination", "nzSimple", "nzScroll"], ["nzWidth", "36px", 1, "text-center"], ["nzWidth", "100px", 1, "text-center"], ["class", "vsp-decision-row", 3, "vsp-decision-row-active", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "col-lg-8"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "fw-semibold", "me-2"], ["class", "badge bg-secondary", 4, "ngIf"], [1, "row", "g-2"], [1, "col-md-6", "col-lg-4"], [1, "form-label", "small", "mb-0", "fw-semibold", "text-danger"], ["name", "startDate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "transCode", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "form-label", "small", "mb-0"], ["name", "transResource", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "deptno", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["class", "text-danger small mt-1", 4, "ngIf"], ["name", "empTypeCode", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "postFamily", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "postGradeNo", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "positionNo", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "costCenter", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["name", "position", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "mainBusiness", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], [1, "col-12"], ["nz-input", "", "name", "remark", "rows", "2", "maxlength", "300", 3, "ngModelChange", "ngModel"], [1, "d-flex", "justify-content-end", "mt-3"], [1, "bx", "bx-save"], [1, "mt-2"], [1, "fw-semibold", "small", "text-truncate"], [1, "text-muted", "small", "text-truncate"], [1, "mt-2", "text-muted", "small"], [1, "vsp-decision-row", 3, "click"], [1, "text-center", 3, "click"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel"], ["class", "text-muted text-truncate", "style", "font-size:.72rem", 4, "ngIf"], [1, "text-center"], [1, "text-muted", "text-truncate", 2, "font-size", ".72rem"], ["colspan", "3", 1, "text-center", "text-muted"], [1, "badge", "bg-secondary"], [3, "nzValue", "nzLabel"], [1, "text-danger", "small", "mt-1"]], template: function ViewStartPointComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "nz-card", 2)(3, "div", 3)(4, "input", 4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewStartPointComponent_Template_input_ngModelChange_4_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchKeyword, $event) || (ctx.searchKeyword = $event);
        return $event;
      });
      \u0275\u0275listener("keyup.enter", function ViewStartPointComponent_Template_input_keyup_enter_4_listener() {
        return ctx.searchEmployee();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(6, "button", 5);
      \u0275\u0275listener("click", function ViewStartPointComponent_Template_button_click_6_listener() {
        return ctx.searchEmployee();
      });
      \u0275\u0275element(7, "i", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, ViewStartPointComponent_div_8_Template, 6, 3, "div", 7)(9, ViewStartPointComponent_div_9_Template, 3, 4, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "nz-card", 9)(11, "div", 10)(12, "span", 11);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 3)(16, "button", 12);
      \u0275\u0275listener("click", function ViewStartPointComponent_Template_button_click_16_listener() {
        return ctx.newDecision();
      });
      \u0275\u0275element(17, "i", 13);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "button", 14);
      \u0275\u0275listener("click", function ViewStartPointComponent_Template_button_click_20_listener() {
        return ctx.deleteSelected();
      });
      \u0275\u0275element(21, "i", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "button", 16);
      \u0275\u0275listener("click", function ViewStartPointComponent_Template_button_click_22_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(23, "i", 17);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "nz-table", 18);
      \u0275\u0275listener("nzPageIndexChange", function ViewStartPointComponent_Template_nz_table_nzPageIndexChange_24_listener($event) {
        return ctx.onPageIndexChange($event);
      });
      \u0275\u0275elementStart(25, "thead")(26, "tr");
      \u0275\u0275element(27, "th", 19);
      \u0275\u0275elementStart(28, "th");
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th", 20);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "tbody");
      \u0275\u0275template(35, ViewStartPointComponent_tr_35_Template, 9, 6, "tr", 21)(36, ViewStartPointComponent_tr_36_Template, 5, 7, "tr", 22);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(37, "div", 23)(38, "nz-card")(39, "div", 24)(40, "div")(41, "span", 25);
      \u0275\u0275text(42);
      \u0275\u0275elementEnd();
      \u0275\u0275template(43, ViewStartPointComponent_span_43_Template, 2, 1, "span", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div", 27)(45, "div", 28)(46, "label", 29);
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "nz-date-picker", 30);
      \u0275\u0275twoWayListener("ngModelChange", function ViewStartPointComponent_Template_nz_date_picker_ngModelChange_49_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.startDatePicker, $event) || (ctx.form.startDatePicker = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 28)(51, "label", 29);
      \u0275\u0275text(52);
      \u0275\u0275pipe(53, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "nz-select", 31);
      \u0275\u0275listener("ngModelChange", function ViewStartPointComponent_Template_nz_select_ngModelChange_54_listener($event) {
        return ctx.onTransCodeChange($event);
      });
      \u0275\u0275template(55, ViewStartPointComponent_nz_option_55_Template, 1, 2, "nz-option", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 28)(57, "label", 33);
      \u0275\u0275text(58);
      \u0275\u0275pipe(59, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "nz-select", 34);
      \u0275\u0275twoWayListener("ngModelChange", function ViewStartPointComponent_Template_nz_select_ngModelChange_60_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.transResource, $event) || (ctx.form.transResource = $event);
        return $event;
      });
      \u0275\u0275template(61, ViewStartPointComponent_nz_option_61_Template, 1, 2, "nz-option", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 28)(63, "label", 33);
      \u0275\u0275text(64);
      \u0275\u0275pipe(65, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "nz-tree-select", 35);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275listener("ngModelChange", function ViewStartPointComponent_Template_nz_tree_select_ngModelChange_66_listener($event) {
        return ctx.onDeptnoChange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275template(68, ViewStartPointComponent_div_68_Template, 2, 1, "div", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 28)(70, "label", 33);
      \u0275\u0275text(71);
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "nz-select", 37);
      \u0275\u0275twoWayListener("ngModelChange", function ViewStartPointComponent_Template_nz_select_ngModelChange_73_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.empTypeCode, $event) || (ctx.form.empTypeCode = $event);
        return $event;
      });
      \u0275\u0275template(74, ViewStartPointComponent_nz_option_74_Template, 1, 2, "nz-option", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "div", 28)(76, "label", 33);
      \u0275\u0275text(77);
      \u0275\u0275pipe(78, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "nz-select", 38);
      \u0275\u0275listener("ngModelChange", function ViewStartPointComponent_Template_nz_select_ngModelChange_79_listener($event) {
        return ctx.onPostFamilyChange($event);
      });
      \u0275\u0275template(80, ViewStartPointComponent_nz_option_80_Template, 1, 2, "nz-option", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 28)(82, "label", 33);
      \u0275\u0275text(83);
      \u0275\u0275pipe(84, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "nz-select", 39);
      \u0275\u0275twoWayListener("ngModelChange", function ViewStartPointComponent_Template_nz_select_ngModelChange_85_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.postGradeNo, $event) || (ctx.form.postGradeNo = $event);
        return $event;
      });
      \u0275\u0275template(86, ViewStartPointComponent_nz_option_86_Template, 1, 2, "nz-option", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "div", 28)(88, "label", 33);
      \u0275\u0275text(89);
      \u0275\u0275pipe(90, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "nz-select", 40);
      \u0275\u0275twoWayListener("ngModelChange", function ViewStartPointComponent_Template_nz_select_ngModelChange_91_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.positionNo, $event) || (ctx.form.positionNo = $event);
        return $event;
      });
      \u0275\u0275template(92, ViewStartPointComponent_nz_option_92_Template, 1, 2, "nz-option", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "div", 28)(94, "label", 33);
      \u0275\u0275text(95);
      \u0275\u0275pipe(96, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "nz-tree-select", 41);
      \u0275\u0275pipe(98, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewStartPointComponent_Template_nz_tree_select_ngModelChange_97_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.costCenter, $event) || (ctx.form.costCenter = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "div", 28)(100, "label", 33);
      \u0275\u0275text(101);
      \u0275\u0275pipe(102, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "nz-select", 42);
      \u0275\u0275twoWayListener("ngModelChange", function ViewStartPointComponent_Template_nz_select_ngModelChange_103_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.position, $event) || (ctx.form.position = $event);
        return $event;
      });
      \u0275\u0275template(104, ViewStartPointComponent_nz_option_104_Template, 1, 2, "nz-option", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "div", 28)(106, "label", 33);
      \u0275\u0275text(107);
      \u0275\u0275pipe(108, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "nz-select", 43);
      \u0275\u0275twoWayListener("ngModelChange", function ViewStartPointComponent_Template_nz_select_ngModelChange_109_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.mainBusiness, $event) || (ctx.form.mainBusiness = $event);
        return $event;
      });
      \u0275\u0275template(110, ViewStartPointComponent_nz_option_110_Template, 1, 2, "nz-option", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "div", 44)(112, "label", 33);
      \u0275\u0275text(113);
      \u0275\u0275pipe(114, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "textarea", 45);
      \u0275\u0275twoWayListener("ngModelChange", function ViewStartPointComponent_Template_textarea_ngModelChange_115_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.remark, $event) || (ctx.form.remark = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "div", 46)(117, "button", 5);
      \u0275\u0275listener("click", function ViewStartPointComponent_Template_button_click_117_listener() {
        return ctx.saveDecision();
      });
      \u0275\u0275element(118, "i", 47);
      \u0275\u0275text(119);
      \u0275\u0275pipe(120, "translate");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchKeyword);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(5, 66, "vsp.search.placeholder", "M\xE3/T\xEAn nh\xE2n vi\xEAn..."));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.searching());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.currentPersonId);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.currentPersonId);
      \u0275\u0275advance();
      \u0275\u0275property("nzBodyStyle", \u0275\u0275pureFunction0(126, _c0));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate2("", ctx.totalRecords(), " ", \u0275\u0275pipeBind2(14, 69, "vsp.label.decisions", "quy\u1EBFt \u0111\u1ECBnh"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(19, 72, "common.add", "Th\xEAm"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.checkedSeqs().size === 0);
      \u0275\u0275advance(4);
      \u0275\u0275property("nzData", ctx.decisions())("nzFrontPagination", false)("nzLoading", ctx.loading())("nzTotal", ctx.totalRecords())("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzShowPagination", true)("nzSimple", true)("nzScroll", \u0275\u0275pureFunction0(127, _c1));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 75, "vsp.field.transCode", "Lo\u1EA1i quy\u1EBFt \u0111\u1ECBnh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 78, "vsp.field.startDate", "Ng\xE0y quy\u1EBFt \u0111\u1ECBnh"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.decisions());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.decisions().length === 0);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.selectedTitle);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.form.seq);
      \u0275\u0275advance();
      \u0275\u0275classProp("vsp-loading", ctx.detailLoading());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 81, "vsp.field.startDate", "Ng\xE0y quy\u1EBFt \u0111\u1ECBnh *"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.startDatePicker);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(53, 84, "vsp.field.transCode", "Lo\u1EA1i quy\u1EBFt \u0111\u1ECBnh *"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.form.transCode);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.transCodeOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(59, 87, "vsp.field.transResource", "L\xFD do quy\u1EBFt \u0111\u1ECBnh"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.transResource);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.transResourceOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(65, 90, "vsp.field.deptNo", "Ph\xF2ng ban"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzNodes", ctx.deptNodes())("ngModel", ctx.form.deptno)("nzPlaceHolder", \u0275\u0275pipeBind2(67, 93, "recruit.list.placeholder.selectDept", "-- Ch\u1ECDn ph\xF2ng ban --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.deptTreeErrorMessage());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(72, 96, "vsp.field.empTypeCode", "Lo\u1EA1i nh\xE2n vi\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.empTypeCode);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.empTypeOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(78, 99, "vsp.field.postFamily", "Nh\xF3m nh\xE2n vi\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.form.postFamily);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.postFamilyOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(84, 102, "vsp.field.postGradeNo", "Ch\u1EE9c v\u1EE5"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.postGradeNo);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.postGradeOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(90, 105, "vsp.field.positionNo", "Ch\u1EE9c danh"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.positionNo);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.positionNoOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(96, 108, "vsp.field.costCenter", "M\xE3 chi ph\xED"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzNodes", ctx.deptNodes());
      \u0275\u0275twoWayProperty("ngModel", ctx.form.costCenter);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(98, 111, "recruit.list.placeholder.selectDept", "-- Ch\u1ECDn ph\xF2ng ban --"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(102, 114, "vsp.field.position", "V\u1ECB tr\xED"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.position);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.positionOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(108, 117, "vsp.field.mainBusiness", "C\xF4ng vi\u1EC7c"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.mainBusiness);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.mainBusinessOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(114, 120, "vsp.field.remark", "Ghi ch\xFA"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.remark);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.saving());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(120, 123, "common.save", "L\u01B0u"), " ");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzCheckboxModule, NzCheckboxComponent, NzDatePickerModule, NzDatePickerComponent, NzTreeSelectModule, NzTreeSelectComponent, TranslatePipe], styles: ["\n.vsp-decision-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.vsp-decision-row[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.vsp-decision-row-active[_ngcontent-%COMP%] {\n  background: #e6f4ff;\n}\n.vsp-loading[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n/*# sourceMappingURL=view-start-point.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewStartPointComponent, [{
    type: Component,
    args: [{ selector: "app-view-start-point", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzSelectModule,
      NzButtonModule,
      NzCheckboxModule,
      NzDatePickerModule,
      NzTreeSelectModule,
      TranslatePipe
    ], template: `<div class="row g-3">
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Panel tr\xE1i: Danh s\xE1ch quy\u1EBFt \u0111\u1ECBnh \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="col-lg-4">
    <nz-card class="mb-3">
      <div class="d-flex gap-1">
        <input nz-input [(ngModel)]="searchKeyword" name="vspSearchKeyword"
               [placeholder]="'vsp.search.placeholder' | translate:'M\xE3/T\xEAn nh\xE2n vi\xEAn...'"
               (keyup.enter)="searchEmployee()">
        <button nz-button nzType="primary" [nzLoading]="searching()" (click)="searchEmployee()">
          <i class="bx bx-search"></i>
        </button>
      </div>
      <div class="mt-2" *ngIf="currentPersonId">
        <div class="fw-semibold small text-truncate">{{ currentLocalName }}</div>
        <div class="text-muted small text-truncate">{{ currentEmpId }}<span *ngIf="currentDeptName"> | {{ currentDeptName }}</span></div>
      </div>
      <div class="mt-2 text-muted small" *ngIf="!currentPersonId">{{ 'vsp.label.noEmployee' | translate:'-- Ch\u01B0a ch\u1ECDn nh\xE2n vi\xEAn --' }}</div>
    </nz-card>

    <nz-card [nzBodyStyle]="{ padding: '8px' }">
      <div class="d-flex align-items-center justify-content-between mb-2 px-1">
        <span class="small text-muted">{{ totalRecords() }} {{ 'vsp.label.decisions' | translate:'quy\u1EBFt \u0111\u1ECBnh' }}</span>
        <div class="d-flex gap-1">
          <button nz-button nzType="primary" nzSize="small" (click)="newDecision()">
            <i class="bx bx-plus"></i> {{ 'common.add' | translate:'Th\xEAm' }}
          </button>
          <button nz-button nzDanger nzSize="small" [disabled]="checkedSeqs().size === 0" (click)="deleteSelected()">
            <i class="bx bx-trash"></i>
          </button>
          <button nz-button nzSize="small" (click)="exportExcel()">
            <i class="bx bx-export"></i>
          </button>
        </div>
      </div>

      <nz-table [nzData]="decisions()" [nzFrontPagination]="false" [nzLoading]="loading()"
                [nzTotal]="totalRecords()" [nzPageIndex]="pageIndex" [nzPageSize]="pageSize"
                [nzShowPagination]="true" [nzSimple]="true"
                (nzPageIndexChange)="onPageIndexChange($event)"
                [nzScroll]="{ y: 'calc(100vh - 420px)' }" nzSize="small" class="vsp-decision-table">
        <thead>
          <tr>
            <th class="text-center" nzWidth="36px"></th>
            <th>{{ 'vsp.field.transCode' | translate:'Lo\u1EA1i quy\u1EBFt \u0111\u1ECBnh' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'vsp.field.startDate' | translate:'Ng\xE0y quy\u1EBFt \u0111\u1ECBnh' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of decisions()" class="vsp-decision-row"
              [class.vsp-decision-row-active]="row.seq === selectedSeq()" (click)="selectDecision(row)">
            <td class="text-center" (click)="$event.stopPropagation()">
              <label nz-checkbox [ngModel]="isChecked(row.seq)" (ngModelChange)="toggleChecked(row.seq, $event)"></label>
            </td>
            <td>
              <div class="fw-semibold small text-truncate">{{ row.transCodeName || row.transCode }}</div>
              <div class="text-muted text-truncate" style="font-size:.72rem" *ngIf="row.deptName">{{ row.deptName }}</div>
            </td>
            <td class="text-center">{{ row.startDate }}</td>
          </tr>
          <tr *ngIf="!loading() && decisions().length === 0">
            <td colspan="3" class="text-center text-muted">
              {{ currentPersonId ? ('common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u') : ('vsp.js.selectFirst' | translate:'Vui l\xF2ng t\xECm ki\u1EBFm nh\xE2n vi\xEAn tr\u01B0\u1EDBc') }}
            </td>
          </tr>
        </tbody>
      </nz-table>
    </nz-card>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Panel ph\u1EA3i: Chi ti\u1EBFt quy\u1EBFt \u0111\u1ECBnh \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="col-lg-8">
    <nz-card>
      <div class="d-flex align-items-center justify-content-between mb-2">
        <div>
          <span class="fw-semibold me-2">{{ selectedTitle }}</span>
          <span *ngIf="form.seq" class="badge bg-secondary">#{{ form.seq }}</span>
        </div>
      </div>

      <div class="row g-2" [class.vsp-loading]="detailLoading()">
        <div class="col-md-6 col-lg-4">
          <label class="form-label small mb-0 fw-semibold text-danger">{{ 'vsp.field.startDate' | translate:'Ng\xE0y quy\u1EBFt \u0111\u1ECBnh *' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="form.startDatePicker" name="startDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
        </div>
        <div class="col-md-6 col-lg-4">
          <label class="form-label small mb-0 fw-semibold text-danger">{{ 'vsp.field.transCode' | translate:'Lo\u1EA1i quy\u1EBFt \u0111\u1ECBnh *' }}</label>
          <nz-select class="w-100" [ngModel]="form.transCode" name="transCode"
                     (ngModelChange)="onTransCodeChange($event)" nzAllowClear>
            <nz-option *ngFor="let c of transCodeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-6 col-lg-4">
          <label class="form-label small mb-0">{{ 'vsp.field.transResource' | translate:'L\xFD do quy\u1EBFt \u0111\u1ECBnh' }}</label>
          <nz-select class="w-100" [(ngModel)]="form.transResource" name="transResource" nzAllowClear>
            <nz-option *ngFor="let c of transResourceOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-6 col-lg-4">
          <label class="form-label small mb-0">{{ 'vsp.field.deptNo' | translate:'Ph\xF2ng ban' }}</label>
          <nz-tree-select class="w-100" [nzNodes]="deptNodes()" [ngModel]="form.deptno" name="deptno"
                           (ngModelChange)="onDeptnoChange($event)" nzShowSearch nzAllowClear
                           [nzPlaceHolder]="'recruit.list.placeholder.selectDept' | translate:'-- Ch\u1ECDn ph\xF2ng ban --'"></nz-tree-select>
          <div *ngIf="deptTreeErrorMessage()" class="text-danger small mt-1">{{ deptTreeErrorMessage() }}</div>
        </div>
        <div class="col-md-6 col-lg-4">
          <label class="form-label small mb-0">{{ 'vsp.field.empTypeCode' | translate:'Lo\u1EA1i nh\xE2n vi\xEAn' }}</label>
          <nz-select class="w-100" [(ngModel)]="form.empTypeCode" name="empTypeCode" nzAllowClear>
            <nz-option *ngFor="let c of empTypeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-6 col-lg-4">
          <label class="form-label small mb-0">{{ 'vsp.field.postFamily' | translate:'Nh\xF3m nh\xE2n vi\xEAn' }}</label>
          <nz-select class="w-100" [ngModel]="form.postFamily" name="postFamily"
                     (ngModelChange)="onPostFamilyChange($event)" nzAllowClear>
            <nz-option *ngFor="let c of postFamilyOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-6 col-lg-4">
          <label class="form-label small mb-0">{{ 'vsp.field.postGradeNo' | translate:'Ch\u1EE9c v\u1EE5' }}</label>
          <nz-select class="w-100" [(ngModel)]="form.postGradeNo" name="postGradeNo" nzAllowClear>
            <nz-option *ngFor="let c of postGradeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-6 col-lg-4">
          <label class="form-label small mb-0">{{ 'vsp.field.positionNo' | translate:'Ch\u1EE9c danh' }}</label>
          <nz-select class="w-100" [(ngModel)]="form.positionNo" name="positionNo" nzAllowClear>
            <nz-option *ngFor="let c of positionNoOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-6 col-lg-4">
          <label class="form-label small mb-0">{{ 'vsp.field.costCenter' | translate:'M\xE3 chi ph\xED' }}</label>
          <nz-tree-select class="w-100" [nzNodes]="deptNodes()" [(ngModel)]="form.costCenter" name="costCenter"
                           nzShowSearch nzAllowClear
                           [nzPlaceHolder]="'recruit.list.placeholder.selectDept' | translate:'-- Ch\u1ECDn ph\xF2ng ban --'"></nz-tree-select>
        </div>
        <div class="col-md-6 col-lg-4">
          <label class="form-label small mb-0">{{ 'vsp.field.position' | translate:'V\u1ECB tr\xED' }}</label>
          <nz-select class="w-100" [(ngModel)]="form.position" name="position" nzAllowClear>
            <nz-option *ngFor="let c of positionOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-6 col-lg-4">
          <label class="form-label small mb-0">{{ 'vsp.field.mainBusiness' | translate:'C\xF4ng vi\u1EC7c' }}</label>
          <nz-select class="w-100" [(ngModel)]="form.mainBusiness" name="mainBusiness" nzAllowClear>
            <nz-option *ngFor="let c of mainBusinessOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-12">
          <label class="form-label small mb-0">{{ 'vsp.field.remark' | translate:'Ghi ch\xFA' }}</label>
          <textarea nz-input [(ngModel)]="form.remark" name="remark" rows="2" maxlength="300"></textarea>
        </div>
      </div>

      <div class="d-flex justify-content-end mt-3">
        <button nz-button nzType="primary" [nzLoading]="saving()" (click)="saveDecision()">
          <i class="bx bx-save"></i> {{ 'common.save' | translate:'L\u01B0u' }}
        </button>
      </div>
    </nz-card>
  </div>
</div>
`, styles: ["/* src/app/view-start-point/view-start-point.component.css */\n.vsp-decision-row {\n  cursor: pointer;\n}\n.vsp-decision-row:hover {\n  background: #fafafa;\n}\n.vsp-decision-row-active {\n  background: #e6f4ff;\n}\n.vsp-loading {\n  opacity: 0.6;\n  pointer-events: none;\n}\n/*# sourceMappingURL=view-start-point.component.css.map */\n"] }]
  }], () => [{ type: ViewStartPointService }, { type: AuthService }, { type: I18nService }, { type: NzMessageService }, { type: NzModalService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewStartPointComponent, { className: "ViewStartPointComponent", filePath: "src/app/view-start-point/view-start-point.component.ts", lineNumber: 94 });
})();
export {
  ViewStartPointComponent
};
//# debugId=70c1cc7c-a35c-5dc3-98d4-6e676a6dde35
//# sourceMappingURL=chunk-Z4KSP7I5.js.map
