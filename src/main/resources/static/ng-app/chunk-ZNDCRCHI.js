import {
  NzAutocompleteComponent,
  NzAutocompleteModule,
  NzAutocompleteOptionComponent,
  NzAutocompleteTriggerDirective
} from "./chunk-I3OGIUJB.js";
import {
  utils,
  writeFileSync
} from "./chunk-6KSHLFTP.js";
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
import "./chunk-2GOAB54B.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
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
  ɵɵstyleProp,
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

// src/app/view-dept-manager-check/view-dept-manager-check.service.ts
var API_BASE = "/org/api";
var ViewDeptManagerCheckService = class _ViewDeptManagerCheckService {
  constructor(http) {
    this.http = http;
  }
  http;
  getResumeDropdown() {
    return this.http.get(`${API_BASE}/resume/dropdown`, { withCredentials: true });
  }
  getManagerCheckList(resumeNo) {
    return this.http.get(`${API_BASE}/compose/manager-check`, {
      params: new HttpParams().set("resumeNo", resumeNo),
      withCredentials: true
    });
  }
  updateManager(payload) {
    return this.http.post(`${API_BASE}/compose/updateManager`, payload, {
      withCredentials: true
    });
  }
  searchEmployees(keyword) {
    let params = new HttpParams();
    if (keyword)
      params = params.set("keyword", keyword);
    return this.http.get("/hrm/empinfo/api/employee/search", { params, withCredentials: true });
  }
  static \u0275fac = function ViewDeptManagerCheckService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewDeptManagerCheckService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewDeptManagerCheckService, factory: _ViewDeptManagerCheckService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewDeptManagerCheckService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-dept-manager-check/view-dept-manager-check.component.ts
var _c0 = () => ({ y: "600px" });
function ViewDeptManagerCheckComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function ViewDeptManagerCheckComponent_ng_template_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.exportExcel());
    });
    \u0275\u0275element(1, "i", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "common.exportExcel", "Xu\u1EA5t Excel"), " ");
  }
}
function ViewDeptManagerCheckComponent_nz_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 23);
  }
  if (rf & 2) {
    const r_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzValue", r_r4.no)("nzLabel", ctx_r2.resumeLabel(r_r4));
  }
}
function ViewDeptManagerCheckComponent_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewDeptManagerCheckComponent_tr_42_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.MANAGER_NAME);
  }
}
function ViewDeptManagerCheckComponent_tr_42_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "orgDeptMgr.noManager", "Ch\u01B0a c\xF3"));
  }
}
function ViewDeptManagerCheckComponent_tr_42_i_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 31);
  }
}
function ViewDeptManagerCheckComponent_tr_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275template(5, ViewDeptManagerCheckComponent_tr_42_span_5_Template, 2, 1, "span", 25)(6, ViewDeptManagerCheckComponent_tr_42_ng_template_6_Template, 3, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 15);
    \u0275\u0275template(13, ViewDeptManagerCheckComponent_tr_42_i_13_Template, 1, 0, "i", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 15)(15, "span", 27);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td", 15)(20, "button", 28);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275listener("click", function ViewDeptManagerCheckComponent_tr_42_Template_button_click_20_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openEditModal(row_r6));
    });
    \u0275\u0275element(22, "i", 29);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const vdmcNoManager_r7 = \u0275\u0275reference(7);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("padding-left", ctx_r2.deptIndentPx(row_r6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", row_r6.DEPTNO, " - ", row_r6.ORG_NAME_LOCAL);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r6.MANAGER_NAME)("ngIfElse", vdmcNoManager_r7);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r6.POST_GRADE_NAME);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.POSITION_NAME);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.isPartTimeRow(row_r6));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-danger", ctx_r2.isVacant(row_r6))("bg-success", !ctx_r2.isVacant(row_r6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isVacant(row_r6) ? \u0275\u0275pipeBind2(17, 15, "orgDeptMgr.vacant", "Tr\u1ED1ng") : \u0275\u0275pipeBind2(18, 18, "orgDeptMgr.appointed", "\u0110\xE3 b\u1ED5 nhi\u1EC7m"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(21, 21, "common.edit", "S\u1EEDa"));
  }
}
function ViewDeptManagerCheckComponent_ng_container_47_nz_auto_option_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-auto-option", 42);
    \u0275\u0275listener("click", function ViewDeptManagerCheckComponent_ng_container_47_nz_auto_option_17_Template_nz_auto_option_click_0_listener() {
      const opt_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onEmpSelected(opt_r10));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "small", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r10 = ctx.$implicit;
    \u0275\u0275property("nzValue", opt_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", opt_r10.empId, " - ", opt_r10.localName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", opt_r10.deptName, ")");
  }
}
function ViewDeptManagerCheckComponent_ng_container_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 32)(2, "label", 33);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 34);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 32)(7, "label", 33);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 35)(11, "input", 36);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275listener("ngModelChange", function ViewDeptManagerCheckComponent_ng_container_47_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onEmpKeywordChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(13, "button", 37);
    \u0275\u0275listener("click", function ViewDeptManagerCheckComponent_ng_container_47_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearSelectedManager());
    });
    \u0275\u0275element(14, "i", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "nz-autocomplete", null, 3);
    \u0275\u0275template(17, ViewDeptManagerCheckComponent_ng_container_47_nz_auto_option_17_Template, 4, 4, "nz-auto-option", 39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "label", 40)(19, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function ViewDeptManagerCheckComponent_ng_container_47_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.isPartTime, $event) || (ctx_r2.form.isPartTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const vdmcEmpAuto_r11 = \u0275\u0275reference(16);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 9, "org.orgManage.title.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r2.form.deptLabel);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 12, "org.orgManage.DEPARTMENT_INFORMATION.Z", "Tr\u01B0\u1EDFng ph\xF2ng"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r2.empKeyword)("nzAutocomplete", vdmcEmpAuto_r11)("placeholder", \u0275\u0275pipeBind2(12, 15, "hrm.empinfo.workexp.selectEmp", "Ch\u1ECDn nh\xE2n vi\xEAn..."));
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngForOf", ctx_r2.empOptions());
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.isPartTime);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(21, 18, "orgCompose.isPartTime", "Ki\xEAm nhi\u1EC7m"), " ");
  }
}
var I18N_KEYS = [
  "org.orgManage.viewDeptManagerCheck.title",
  "orgResumeProcess.versionName",
  "orgResumeProcess.selectPlaceholder",
  "orgDeptMgr.deptColumn",
  "orgDeptMgr.noManager",
  "orgDeptMgr.vacancyColumn",
  "orgDeptMgr.vacant",
  "orgDeptMgr.appointed",
  "orgDeptMgr.modalTitle",
  "org.orgManage.DEPARTMENT_INFORMATION.Z",
  "org.title.BUSINESS_NAME",
  "org.title.POSITION_NO",
  "org.orgManage.title.deptName",
  "orgCompose.isPartTime",
  "hrm.empinfo.workexp.selectEmp",
  "common.stt",
  "common.edit",
  "common.save",
  "common.cancel",
  "common.close",
  "common.noData",
  "common.exportExcel",
  "common.loadFail",
  "common.saveFail"
];
var EMPTY_FORM = { deptNo: "", deptLabel: "", managerEmpId: "", isPartTime: false };
var ViewDeptManagerCheckComponent = class _ViewDeptManagerCheckComponent {
  constructor(api, i18n, message) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
  }
  api;
  i18n;
  message;
  resumeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "resumeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loadingResume = signal(
    false,
    ...ngDevMode ? [{ debugName: "loadingResume" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedResumeNo = null;
  rows = signal(
    [],
    ...ngDevMode ? [{ debugName: "rows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loadingRows = signal(
    false,
    ...ngDevMode ? [{ debugName: "loadingRows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  modalVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "modalVisible" }] : (
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
  form = __spreadValues({}, EMPTY_FORM);
  empKeyword = "";
  empOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "empOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  empSearchTimer;
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadResumeDropdown();
  }
  resumeLabel(r) {
    return r.no ? `${r.no} ${r.resumeName ?? ""}` : r.resumeName ?? "";
  }
  loadResumeDropdown() {
    this.loadingResume.set(true);
    this.api.getResumeDropdown().subscribe({
      next: (list) => {
        this.resumeOptions.set(list ?? []);
        this.loadingResume.set(false);
        if (list?.length) {
          this.selectedResumeNo = list[0].no;
          this.loadRows();
        }
      },
      error: () => {
        this.resumeOptions.set([]);
        this.loadingResume.set(false);
        this.message.error(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  onResumeChange(resumeNo) {
    this.selectedResumeNo = resumeNo;
    if (resumeNo)
      this.loadRows();
    else
      this.rows.set([]);
  }
  loadRows() {
    if (!this.selectedResumeNo)
      return;
    this.loadingRows.set(true);
    this.api.getManagerCheckList(this.selectedResumeNo).subscribe({
      next: (list) => {
        this.rows.set(list ?? []);
        this.loadingRows.set(false);
      },
      error: () => {
        this.rows.set([]);
        this.loadingRows.set(false);
        this.message.error(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  deptIndentPx(row) {
    return `${(row.DEPT_LEVEL || 0) * 20}px`;
  }
  isVacant(row) {
    return String(row.VACANCY) === "1";
  }
  isPartTimeRow(row) {
    return row.IS_PART_TIME === "1";
  }
  // ==================== Modal cập nhật trưởng bộ phận ====================
  openEditModal(row) {
    this.form = {
      deptNo: row.DEPTNO,
      deptLabel: `${row.DEPTNO} - ${row.ORG_NAME_LOCAL ?? ""}`,
      managerEmpId: row.MANAGER_EMP_ID ?? "",
      isPartTime: row.IS_PART_TIME === "1"
    };
    this.empKeyword = row.MANAGER_EMP_ID ? `${row.MANAGER_EMP_ID} - ${row.MANAGER_NAME ?? ""}` : "";
    this.empOptions.set([]);
    this.modalVisible.set(true);
  }
  closeModal() {
    this.modalVisible.set(false);
  }
  onEmpKeywordChange(value) {
    this.empKeyword = value;
    this.form.managerEmpId = "";
    if (this.empSearchTimer)
      clearTimeout(this.empSearchTimer);
    const keyword = value.trim();
    if (!keyword) {
      this.empOptions.set([]);
      return;
    }
    this.empSearchTimer = setTimeout(() => {
      this.api.searchEmployees(keyword).subscribe({
        next: (list) => this.empOptions.set(list ?? []),
        error: () => this.empOptions.set([])
      });
    }, 300);
  }
  onEmpSelected(option) {
    this.form.managerEmpId = option.personId;
    this.empKeyword = `${option.empId} - ${option.localName}`;
    this.empOptions.set([]);
  }
  clearSelectedManager() {
    this.form.managerEmpId = "";
    this.empKeyword = "";
    this.empOptions.set([]);
  }
  saveManager() {
    if (!this.selectedResumeNo)
      return;
    this.saving.set(true);
    this.api.updateManager({
      resumeNo: this.selectedResumeNo,
      deptNo: this.form.deptNo,
      managerEmpId: this.form.managerEmpId,
      isPartTime: this.form.isPartTime ? "1" : "0"
    }).subscribe({
      next: (res) => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.message.success(res.message);
        this.loadRows();
      },
      error: (err) => {
        this.saving.set(false);
        const msg = err?.error?.error || this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!");
        this.message.error(msg);
      }
    });
  }
  // ==================== Xuất Excel ====================
  exportExcel() {
    const headers = [
      this.i18n.t("orgDeptMgr.deptColumn", "M\xE3 b\u1ED9 ph\u1EADn - T\xEAn b\u1ED9 ph\u1EADn"),
      this.i18n.t("org.orgManage.DEPARTMENT_INFORMATION.Z", "Tr\u01B0\u1EDFng ph\xF2ng"),
      this.i18n.t("org.title.BUSINESS_NAME", "Ch\u1EE9c v\u1EE5"),
      this.i18n.t("org.title.POSITION_NO", "Ch\u1EE9c danh"),
      this.i18n.t("orgCompose.isPartTime", "Ki\xEAm nhi\u1EC7m"),
      this.i18n.t("orgDeptMgr.vacancyColumn", "Tr\u1ED1ng (Vacancy)")
    ];
    const dataRows = this.rows().map((r) => [
      `${r.DEPTNO} - ${r.ORG_NAME_LOCAL ?? ""}`,
      r.MANAGER_NAME || this.i18n.t("orgDeptMgr.noManager", "Ch\u01B0a c\xF3"),
      r.POST_GRADE_NAME ?? "",
      r.POSITION_NAME ?? "",
      this.isPartTimeRow(r) ? "X" : "",
      this.isVacant(r) ? this.i18n.t("orgDeptMgr.vacant", "Tr\u1ED1ng") : this.i18n.t("orgDeptMgr.appointed", "\u0110\xE3 b\u1ED5 nhi\u1EC7m")
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "KiemTraTruongBoPhan");
    writeFileSync(workbook, "kiem_tra_truong_bo_phan.xlsx");
  }
  static \u0275fac = function ViewDeptManagerCheckComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewDeptManagerCheckComponent)(\u0275\u0275directiveInject(ViewDeptManagerCheckService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewDeptManagerCheckComponent, selectors: [["app-view-dept-manager-check"]], decls: 48, vars: 65, consts: [["vdmcExtra", ""], ["vdmcTable", ""], ["vdmcNoManager", ""], ["vdmcEmpAuto", ""], [1, "row"], [1, "col-12"], [3, "nzTitle", "nzExtra"], [1, "row", "align-items-center", "mb-3"], [1, "col-md-auto"], [1, "fw-bold"], [1, "col-md-4"], ["id", "vdmcResumeSelect", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzLoading", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzData", "nzLoading", "nzShowPagination", "nzScroll"], ["nzWidth", "30%"], [1, "text-center"], ["nzWidth", "5%", 1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], ["nz-button", "", "nzSize", "small", "type", "button", "id", "vdmcBtnExportExcel", 3, "click"], [1, "bx", "bx-file-blank"], [3, "nzValue", "nzLabel"], ["colspan", "7", 1, "text-center", "text-muted"], [4, "ngIf", "ngIfElse"], ["class", "bx bx-check text-success fs-5", 4, "ngIf"], [1, "badge"], ["nz-button", "", "nzType", "text", "nzSize", "small", 3, "click", "title"], [1, "bx", "bx-edit", "text-warning"], [1, "text-muted"], [1, "bx", "bx-check", "text-success", "fs-5"], [1, "mb-3"], [1, "form-label"], ["nz-input", "", "name", "vdmcDeptLabel", "readonly", "", 3, "ngModel"], [1, "input-group"], ["nz-input", "", "name", "vdmcEmpKeyword", 3, "ngModelChange", "ngModel", "nzAutocomplete", "placeholder"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], [3, "nzValue", "click", 4, "ngFor", "ngForOf"], [1, "form-check-label"], ["type", "checkbox", "name", "vdmcIsPartTime", 3, "ngModelChange", "ngModel"], [3, "click", "nzValue"]], template: function ViewDeptManagerCheckComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "nz-card", 6);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275template(4, ViewDeptManagerCheckComponent_ng_template_4_Template, 4, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(6, "div", 7)(7, "div", 8)(8, "label", 9);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 10)(12, "nz-select", 11);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewDeptManagerCheckComponent_Template_nz_select_ngModelChange_12_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedResumeNo, $event) || (ctx.selectedResumeNo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function ViewDeptManagerCheckComponent_Template_nz_select_ngModelChange_12_listener($event) {
        return ctx.onResumeChange($event);
      });
      \u0275\u0275template(14, ViewDeptManagerCheckComponent_nz_option_14_Template, 1, 2, "nz-option", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "nz-table", 13, 1)(17, "thead")(18, "tr")(19, "th", 14);
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th");
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "th");
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th");
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th", 15);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "th", 15);
      \u0275\u0275text(35);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th", 16);
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "tbody");
      \u0275\u0275template(41, ViewDeptManagerCheckComponent_tr_41_Template, 4, 4, "tr", 17)(42, ViewDeptManagerCheckComponent_tr_42_Template, 23, 24, "tr", 18);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(43, "nz-modal", 19);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewDeptManagerCheckComponent_Template_nz_modal_nzOnCancel_43_listener() {
        return ctx.closeModal();
      })("nzOnOk", function ViewDeptManagerCheckComponent_Template_nz_modal_nzOnOk_43_listener() {
        return ctx.saveManager();
      });
      \u0275\u0275template(47, ViewDeptManagerCheckComponent_ng_container_47_Template, 22, 21, "ng-container", 20);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const vdmcExtra_r12 = \u0275\u0275reference(5);
      const vdmcTable_r13 = \u0275\u0275reference(16);
      \u0275\u0275advance(2);
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(3, 25, "org.orgManage.viewDeptManagerCheck.title", "Ki\u1EC3m tra tr\u01B0\u1EDFng ph\xF2ng ban"))("nzExtra", vdmcExtra_r12);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 28, "orgResumeProcess.versionName", "T\xEAn phi\xEAn b\u1EA3n"));
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedResumeNo);
      \u0275\u0275property("nzLoading", ctx.loadingResume())("nzPlaceHolder", \u0275\u0275pipeBind2(13, 31, "orgResumeProcess.selectPlaceholder", "-- Ch\u1ECDn phi\xEAn b\u1EA3n thay \u0111\u1ED5i --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.resumeOptions());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loadingRows())("nzShowPagination", false)("nzScroll", \u0275\u0275pureFunction0(64, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 34, "orgDeptMgr.deptColumn", "M\xE3 b\u1ED9 ph\u1EADn - T\xEAn b\u1ED9 ph\u1EADn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 37, "org.orgManage.DEPARTMENT_INFORMATION.Z", "Tr\u01B0\u1EDFng ph\xF2ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 40, "org.title.BUSINESS_NAME", "Ch\u1EE9c v\u1EE5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 43, "org.title.POSITION_NO", "Ch\u1EE9c danh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 46, "orgCompose.isPartTime", "Ki\xEAm nhi\u1EC7m"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 49, "orgDeptMgr.vacancyColumn", "Tr\u1ED1ng (Vacancy)"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 52, "common.edit", "S\u1EEDa"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loadingRows() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", vdmcTable_r13.data);
      \u0275\u0275advance();
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", \u0275\u0275pipeBind2(44, 55, "orgDeptMgr.modalTitle", "C\u1EADp nh\u1EADt tr\u01B0\u1EDFng b\u1ED9 ph\u1EADn"))("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(45, 58, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(46, 61, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgModel, NzAutocompleteModule, NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewDeptManagerCheckComponent, [{
    type: Component,
    args: [{ selector: "app-view-dept-manager-check", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzAutocompleteModule,
      NzButtonModule,
      NzCardModule,
      NzInputModule,
      NzModalModule,
      NzSelectModule,
      NzTableModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <nz-card [nzTitle]="'org.orgManage.viewDeptManagerCheck.title' | translate:'Ki\u1EC3m tra tr\u01B0\u1EDFng ph\xF2ng ban'" [nzExtra]="vdmcExtra">
      <ng-template #vdmcExtra>
        <button nz-button nzSize="small" type="button" id="vdmcBtnExportExcel" (click)="exportExcel()">
          <i class="bx bx-file-blank"></i> {{ 'common.exportExcel' | translate:'Xu\u1EA5t Excel' }}
        </button>
      </ng-template>

      <div class="row align-items-center mb-3">
        <div class="col-md-auto">
          <label class="fw-bold">{{ 'orgResumeProcess.versionName' | translate:'T\xEAn phi\xEAn b\u1EA3n' }}</label>
        </div>
        <div class="col-md-4">
          <nz-select class="w-100" id="vdmcResumeSelect" [(ngModel)]="selectedResumeNo" (ngModelChange)="onResumeChange($event)"
                     [nzLoading]="loadingResume()" nzShowSearch nzAllowClear
                     [nzPlaceHolder]="'orgResumeProcess.selectPlaceholder' | translate:'-- Ch\u1ECDn phi\xEAn b\u1EA3n thay \u0111\u1ED5i --'">
            <nz-option *ngFor="let r of resumeOptions()" [nzValue]="r.no" [nzLabel]="resumeLabel(r)"></nz-option>
          </nz-select>
        </div>
      </div>

      <nz-table [nzData]="rows()" [nzLoading]="loadingRows()" [nzShowPagination]="false"
                [nzScroll]="{ y: '600px' }" #vdmcTable>
        <thead>
          <tr>
            <th nzWidth="30%">{{ 'orgDeptMgr.deptColumn' | translate:'M\xE3 b\u1ED9 ph\u1EADn - T\xEAn b\u1ED9 ph\u1EADn' }}</th>
            <th>{{ 'org.orgManage.DEPARTMENT_INFORMATION.Z' | translate:'Tr\u01B0\u1EDFng ph\xF2ng' }}</th>
            <th>{{ 'org.title.BUSINESS_NAME' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
            <th>{{ 'org.title.POSITION_NO' | translate:'Ch\u1EE9c danh' }}</th>
            <th class="text-center">{{ 'orgCompose.isPartTime' | translate:'Ki\xEAm nhi\u1EC7m' }}</th>
            <th class="text-center">{{ 'orgDeptMgr.vacancyColumn' | translate:'Tr\u1ED1ng (Vacancy)' }}</th>
            <th class="text-center" nzWidth="5%">{{ 'common.edit' | translate:'S\u1EEDa' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loadingRows() && rows().length === 0">
            <td colspan="7" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of vdmcTable.data">
            <td>
              <div [style.padding-left]="deptIndentPx(row)">{{ row.DEPTNO }} - {{ row.ORG_NAME_LOCAL }}</div>
            </td>
            <td>
              <span *ngIf="row.MANAGER_NAME; else vdmcNoManager">{{ row.MANAGER_NAME }}</span>
              <ng-template #vdmcNoManager>
                <span class="text-muted">{{ 'orgDeptMgr.noManager' | translate:'Ch\u01B0a c\xF3' }}</span>
              </ng-template>
            </td>
            <td>{{ row.POST_GRADE_NAME }}</td>
            <td>{{ row.POSITION_NAME }}</td>
            <td class="text-center">
              <i *ngIf="isPartTimeRow(row)" class="bx bx-check text-success fs-5"></i>
            </td>
            <td class="text-center">
              <span class="badge" [class.bg-danger]="isVacant(row)" [class.bg-success]="!isVacant(row)">
                {{ isVacant(row) ? ('orgDeptMgr.vacant' | translate:'Tr\u1ED1ng') : ('orgDeptMgr.appointed' | translate:'\u0110\xE3 b\u1ED5 nhi\u1EC7m') }}
              </span>
            </td>
            <td class="text-center">
              <button nz-button nzType="text" nzSize="small" [title]="'common.edit' | translate:'S\u1EEDa'" (click)="openEditModal(row)">
                <i class="bx bx-edit text-warning"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal c\u1EADp nh\u1EADt tr\u01B0\u1EDFng b\u1ED9 ph\u1EADn -->
<nz-modal [nzVisible]="modalVisible()" [nzTitle]="'orgDeptMgr.modalTitle' | translate:'C\u1EADp nh\u1EADt tr\u01B0\u1EDFng b\u1ED9 ph\u1EADn'"
          (nzOnCancel)="closeModal()" (nzOnOk)="saveManager()" [nzOkLoading]="saving()"
          [nzOkText]="'common.save' | translate:'L\u01B0u'" [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'">
  <ng-container *nzModalContent>
    <div class="mb-3">
      <label class="form-label">{{ 'org.orgManage.title.deptName' | translate:'Ph\xF2ng ban' }}</label>
      <input nz-input [ngModel]="form.deptLabel" name="vdmcDeptLabel" readonly>
    </div>
    <div class="mb-3">
      <label class="form-label">{{ 'org.orgManage.DEPARTMENT_INFORMATION.Z' | translate:'Tr\u01B0\u1EDFng ph\xF2ng' }}</label>
      <div class="input-group">
        <input nz-input [ngModel]="empKeyword" name="vdmcEmpKeyword" (ngModelChange)="onEmpKeywordChange($event)"
               [nzAutocomplete]="vdmcEmpAuto" [placeholder]="'hrm.empinfo.workexp.selectEmp' | translate:'Ch\u1ECDn nh\xE2n vi\xEAn...'">
        <button nz-button type="button" (click)="clearSelectedManager()">
          <i class="bx bx-x"></i>
        </button>
        <nz-autocomplete #vdmcEmpAuto>
          <nz-auto-option *ngFor="let opt of empOptions()" [nzValue]="opt" (click)="onEmpSelected(opt)">
            {{ opt.empId }} - {{ opt.localName }} <small class="text-muted">({{ opt.deptName }})</small>
          </nz-auto-option>
        </nz-autocomplete>
      </div>
    </div>
    <label class="form-check-label">
      <input type="checkbox" [(ngModel)]="form.isPartTime" name="vdmcIsPartTime">
      {{ 'orgCompose.isPartTime' | translate:'Ki\xEAm nhi\u1EC7m' }}
    </label>
  </ng-container>
</nz-modal>
` }]
  }], () => [{ type: ViewDeptManagerCheckService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewDeptManagerCheckComponent, { className: "ViewDeptManagerCheckComponent", filePath: "src/app/view-dept-manager-check/view-dept-manager-check.component.ts", lineNumber: 73 });
})();
export {
  ViewDeptManagerCheckComponent
};
//# debugId=30f23053-3570-56ba-a6a4-071418ae4390
//# sourceMappingURL=chunk-ZNDCRCHI.js.map
