import {
  buildOrgTree,
  collectAllKeys
} from "./chunk-OSMPNKLW.js";
import {
  NzInputNumberComponent,
  NzInputNumberModule
} from "./chunk-IXCMIWQQ.js";
import {
  NzMessageService
} from "./chunk-XWW7CXU6.js";
import {
  NzModalComponent,
  NzModalContentDirective,
  NzModalModule
} from "./chunk-OEYWCHIN.js";
import {
  NzTreeComponent,
  NzTreeModule
} from "./chunk-PD7KBOBI.js";
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
  NzCheckboxModule,
  NzSpinComponent,
  NzSpinModule
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
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-TNYKEBYQ.js";
import {
  CommonModule,
  Component,
  DatePipe,
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
  computed,
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
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTW5U2M5.js";

// src/app/view-org-business/view-org-business.service.ts
var API_BASE = "/org/api";
var ViewOrgBusinessService = class _ViewOrgBusinessService {
  constructor(http) {
    this.http = http;
  }
  http;
  getResumeDropdown() {
    return this.http.get(`${API_BASE}/resume/dropdown`, { withCredentials: true });
  }
  getOrgStructure(resumeNo) {
    return this.http.get(`${API_BASE}/compose/structure`, {
      params: new HttpParams().set("resumeNo", resumeNo),
      withCredentials: true
    });
  }
  getBusinessList(resumeNo, deptNo) {
    return this.http.get(`${API_BASE}/business/list`, {
      params: new HttpParams().set("resumeNo", resumeNo).set("deptNo", deptNo),
      withCredentials: true
    });
  }
  saveBusiness(obj) {
    return this.http.post(`${API_BASE}/business/save`, obj, { withCredentials: true });
  }
  deleteBusiness(seq) {
    return this.http.post(`${API_BASE}/business/delete`, null, {
      params: new HttpParams().set("seq", seq),
      withCredentials: true
    });
  }
  static \u0275fac = function ViewOrgBusinessService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewOrgBusinessService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewOrgBusinessService, factory: _ViewOrgBusinessService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewOrgBusinessService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-org-business/view-org-business.component.ts
var _c0 = () => ({ padding: "12px" });
var _c1 = (a0) => [a0];
var _c2 = () => [];
function ViewOrgBusinessComponent_nz_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 26);
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzValue", r_r2.no)("nzLabel", ctx_r2.resumeLabel(r_r2));
  }
}
function ViewOrgBusinessComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "orgCompose.msg.noOrgData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u t\u1ED5 ch\u1EE9c"), " ");
  }
}
function ViewOrgBusinessComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function ViewOrgBusinessComponent_ng_template_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openAddModal());
    });
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 30);
    \u0275\u0275listener("click", function ViewOrgBusinessComponent_ng_template_27_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openEditModal());
    });
    \u0275\u0275element(5, "i", 31);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 32);
    \u0275\u0275listener("click", function ViewOrgBusinessComponent_ng_template_27_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openDeleteConfirm());
    });
    \u0275\u0275element(9, "i", 33);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !ctx_r2.selectedDeptKey);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 6, "common.addNew", "Th\xEAm m\u1EDBi"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.selectedSeq());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 9, "common.edit", "S\u1EEDa"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.selectedSeq());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 12, "common.delete", "X\xF3a"), " ");
  }
}
function ViewOrgBusinessComponent_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 34);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewOrgBusinessComponent_tr_53_i_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 37);
  }
}
function ViewOrgBusinessComponent_tr_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 35);
    \u0275\u0275listener("click", function ViewOrgBusinessComponent_tr_53_Template_tr_click_0_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectRow(row_r6));
    });
    \u0275\u0275elementStart(1, "td", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 21);
    \u0275\u0275template(8, ViewOrgBusinessComponent_tr_53_i_8_Template, 1, 0, "i", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("vob-row-selected", ctx_r2.selectedSeq() === row_r6.seq);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r7 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.deptName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.businessName || row_r6.codeNo);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r6.isDefault === "1");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.updatedBy);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 8, row_r6.updateDate, "dd/MM/yyyy HH:mm"));
  }
}
function ViewOrgBusinessComponent_ng_container_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form")(2, "div", 38)(3, "label", 39);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 40);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 38)(8, "label", 39);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementStart(11, "span", 41);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function ViewOrgBusinessComponent_ng_container_58_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.codeNo, $event) || (ctx_r2.form.codeNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(14, "small", 43);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 38)(18, "label", 39);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "nz-input-number", 44);
    \u0275\u0275twoWayListener("ngModelChange", function ViewOrgBusinessComponent_ng_container_58_Template_nz_input_number_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.orderNo, $event) || (ctx_r2.form.orderNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "label", 45);
    \u0275\u0275twoWayListener("ngModelChange", function ViewOrgBusinessComponent_ng_container_58_Template_label_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.isDefault, $event) || (ctx_r2.form.isDefault = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 10, "org.orgManage.title.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r2.selectedDeptName);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(10, 13, "orgBusiness.codeNo", "M\xE3 C\xF4ng vi\u1EC7c (Code No)"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.codeNo);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 16, "orgBusiness.codeNoHint", "Nh\u1EADp m\xE3 c\xF4ng vi\u1EC7c \u0111\u1EC3 h\u1EC7 th\u1ED1ng l\u1EA5y t\xEAn t\u01B0\u01A1ng \u1EE9ng."));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 19, "orgBusiness.orderNo", "Th\u1EE9 t\u1EF1 hi\u1EC3n th\u1ECB"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.orderNo);
    \u0275\u0275property("nzMin", 0);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.isDefault);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(24, 22, "orgBusiness.isDefault", "M\u1EB7c \u0111\u1ECBnh"), " ");
  }
}
function ViewOrgBusinessComponent_ng_container_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 46);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 47);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "orgBusiness.msg.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a nghi\u1EC7p v\u1EE5 n\xE0y?"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedRow()?.businessName || ctx_r2.selectedRow()?.codeNo);
  }
}
var I18N_KEYS = [
  "org.orgManage.viewOrgBusiness.title",
  "orgResumeProcess.versionName",
  "orgResumeProcess.selectPlaceholder",
  "orgCompose.searchTreePlaceholder",
  "orgCompose.expandAll",
  "orgCompose.collapseAll",
  "orgCompose.msg.noOrgData",
  "orgCompose.msg.pleaseSelectResume",
  "org.orgManage.title.deptName",
  "orgBusiness.listTitle",
  "orgBusiness.codeNo",
  "orgBusiness.codeNoHint",
  "orgBusiness.orderNo",
  "orgBusiness.isDefault",
  "orgBusiness.updatedBy",
  "orgBusiness.updateDate",
  "orgBusiness.modalAddTitle",
  "orgBusiness.modalEditTitle",
  "orgBusiness.msg.pleaseSelectDept",
  "orgBusiness.msg.pleaseEnterCodeNo",
  "orgBusiness.msg.confirmDelete",
  "common.stt",
  "common.addNew",
  "common.edit",
  "common.save",
  "common.delete",
  "common.cancel",
  "common.close",
  "common.confirm",
  "common.noData",
  "common.loadFail",
  "common.saveFail",
  "common.deleteFail"
];
var PAGE_SIZE_OPTIONS = [10, 25, 50, 100];
var EMPTY_FORM = { seq: null, codeNo: "", orderNo: 0, isDefault: false };
var ViewOrgBusinessComponent = class _ViewOrgBusinessComponent {
  constructor(api, i18n, message) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
  }
  api;
  i18n;
  message;
  pageSizeOptions = PAGE_SIZE_OPTIONS;
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
  orgList = signal(
    [],
    ...ngDevMode ? [{ debugName: "orgList" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loadingTree = signal(
    false,
    ...ngDevMode ? [{ debugName: "loadingTree" }] : (
      /* istanbul ignore next */
      []
    )
  );
  treeNodes = computed(
    () => buildOrgTree(this.orgList()),
    ...ngDevMode ? [{ debugName: "treeNodes" }] : (
      /* istanbul ignore next */
      []
    )
  );
  expandedKeys = signal(
    [],
    ...ngDevMode ? [{ debugName: "expandedKeys" }] : (
      /* istanbul ignore next */
      []
    )
  );
  treeSearchValue = "";
  selectedDeptKey = null;
  selectedDeptName = "";
  businessList = signal(
    [],
    ...ngDevMode ? [{ debugName: "businessList" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loadingList = signal(
    false,
    ...ngDevMode ? [{ debugName: "loadingList" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedSeq = signal(
    null,
    ...ngDevMode ? [{ debugName: "selectedSeq" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedRow = computed(
    () => this.businessList().find((b) => b.seq === this.selectedSeq()),
    ...ngDevMode ? [{ debugName: "selectedRow" }] : (
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
  modalMode = signal(
    "NEW",
    ...ngDevMode ? [{ debugName: "modalMode" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = __spreadValues({}, EMPTY_FORM);
  saving = signal(
    false,
    ...ngDevMode ? [{ debugName: "saving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  deleteConfirmVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "deleteConfirmVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  deleting = signal(
    false,
    ...ngDevMode ? [{ debugName: "deleting" }] : (
      /* istanbul ignore next */
      []
    )
  );
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
          this.onResumeChange(list[0].no);
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
    this.resetDeptSelection();
    if (resumeNo)
      this.loadOrgTree(resumeNo);
    else
      this.orgList.set([]);
  }
  loadOrgTree(resumeNo) {
    this.loadingTree.set(true);
    this.api.getOrgStructure(resumeNo).subscribe({
      next: (list) => {
        this.orgList.set(list ?? []);
        this.expandedKeys.set(collectAllKeys(buildOrgTree(list ?? [])));
        this.loadingTree.set(false);
      },
      error: () => {
        this.orgList.set([]);
        this.loadingTree.set(false);
        this.message.error(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  expandAllNodes() {
    this.expandedKeys.set(collectAllKeys(this.treeNodes()));
  }
  collapseAllNodes() {
    this.expandedKeys.set([]);
  }
  onTreeClick(event) {
    const data = event.node?.origin?.data;
    if (!data)
      return;
    this.selectedDeptKey = data.deptNo;
    this.selectedDeptName = data.orgNameLocal || data.orgNameEng || data.deptNo;
    this.selectedSeq.set(null);
    this.loadBusinessList();
  }
  resetDeptSelection() {
    this.selectedDeptKey = null;
    this.selectedDeptName = "";
    this.selectedSeq.set(null);
    this.businessList.set([]);
  }
  loadBusinessList() {
    if (!this.selectedResumeNo || !this.selectedDeptKey)
      return;
    this.loadingList.set(true);
    this.api.getBusinessList(this.selectedResumeNo, this.selectedDeptKey).subscribe({
      next: (list) => {
        this.businessList.set(list ?? []);
        this.loadingList.set(false);
      },
      error: () => {
        this.businessList.set([]);
        this.loadingList.set(false);
        this.message.error(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  selectRow(row) {
    this.selectedSeq.set(this.selectedSeq() === row.seq ? null : row.seq);
  }
  // ==================== Thêm mới / Sửa ====================
  openAddModal() {
    if (!this.selectedDeptKey) {
      this.message.warning(this.i18n.t("orgBusiness.msg.pleaseSelectDept", "Vui l\xF2ng ch\u1ECDn ph\xF2ng ban \u0111\u1EC3 xem danh s\xE1ch nghi\u1EC7p v\u1EE5!"));
      return;
    }
    this.modalMode.set("NEW");
    this.form = __spreadValues({}, EMPTY_FORM);
    this.modalVisible.set(true);
  }
  openEditModal() {
    const row = this.selectedRow();
    if (!row)
      return;
    this.modalMode.set("EDIT");
    this.form = {
      seq: row.seq,
      codeNo: row.codeNo,
      orderNo: row.orderNo ?? 0,
      isDefault: row.isDefault === "1"
    };
    this.modalVisible.set(true);
  }
  closeModal() {
    this.modalVisible.set(false);
  }
  save() {
    if (!this.form.codeNo?.trim()) {
      this.message.warning(this.i18n.t("orgBusiness.msg.pleaseEnterCodeNo", "Vui l\xF2ng nh\u1EADp m\xE3 c\xF4ng vi\u1EC7c!"));
      return;
    }
    if (!this.selectedResumeNo || !this.selectedDeptKey)
      return;
    const payload = {
      seq: this.form.seq,
      resumeNo: this.selectedResumeNo,
      deptNo: this.selectedDeptKey,
      codeNo: this.form.codeNo.trim(),
      orderNo: this.form.orderNo,
      isDefault: this.form.isDefault ? "1" : "0",
      updatedBy: null,
      updateDate: null,
      businessName: null,
      deptName: null
    };
    this.saving.set(true);
    this.api.saveBusiness(payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.message.success(res.message);
        this.loadBusinessList();
      },
      error: (err) => {
        this.saving.set(false);
        const msg = err?.error?.error || this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!");
        this.message.error(msg);
      }
    });
  }
  // ==================== Xóa ====================
  openDeleteConfirm() {
    if (!this.selectedRow())
      return;
    this.deleteConfirmVisible.set(true);
  }
  closeDeleteConfirm() {
    this.deleteConfirmVisible.set(false);
  }
  confirmDelete() {
    const row = this.selectedRow();
    if (!row?.seq)
      return;
    this.deleting.set(true);
    this.api.deleteBusiness(row.seq).subscribe({
      next: (res) => {
        this.deleting.set(false);
        this.deleteConfirmVisible.set(false);
        this.message.success(res.message);
        this.selectedSeq.set(null);
        this.loadBusinessList();
      },
      error: (err) => {
        this.deleting.set(false);
        const msg = err?.error?.error || this.i18n.t("common.deleteFail", "X\xF3a th\u1EA5t b\u1EA1i!");
        this.message.error(msg);
      }
    });
  }
  static \u0275fac = function ViewOrgBusinessComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewOrgBusinessComponent)(\u0275\u0275directiveInject(ViewOrgBusinessService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewOrgBusinessComponent, selectors: [["app-view-org-business"]], decls: 64, vars: 103, consts: [["vobActions", ""], ["vobTable", ""], [1, "row"], [1, "col-md-3", "mb-3"], [3, "nzTitle", "nzBodyStyle"], [1, "mb-2"], [1, "form-label", "fw-bold"], ["id", "vob_resumeSelect", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzLoading", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nz-input", "", "id", "vob_treeSearch", "name", "vob_treeSearch", 1, "mb-2", 3, "ngModelChange", "ngModel", "placeholder"], [1, "mb-2", "btn-group"], ["nz-button", "", "nzSize", "small", "type", "button", "id", "vob_btnExpandAll", 3, "click"], ["nz-button", "", "nzSize", "small", "type", "button", "id", "vob_btnCollapseAll", 3, "click"], [3, "nzSpinning"], [1, "vob-tree-scroll"], ["nzSelectMode", "", 3, "nzExpandedKeysChange", "nzClick", "nzData", "nzSearchValue", "nzExpandedKeys", "nzSelectedKeys"], ["class", "text-muted fst-italic p-2", 4, "ngIf"], [1, "col-md-9", "mb-3"], [3, "nzTitle", "nzExtra"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions"], ["nzWidth", "60px", 1, "text-center"], [1, "text-center"], [4, "ngIf"], ["class", "vob-row", 3, "vob-row-selected", "click", 4, "ngFor", "ngForOf"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [3, "nzValue", "nzLabel"], [1, "text-muted", "fst-italic", "p-2"], ["nz-button", "", "nzSize", "small", "nzType", "primary", "type", "button", "id", "vob_btnNew", 3, "click", "disabled"], [1, "bx", "bx-plus"], ["nz-button", "", "nzSize", "small", "type", "button", "id", "vob_btnEdit", 3, "click", "disabled"], [1, "bx", "bx-edit"], ["nz-button", "", "nzSize", "small", "nzDanger", "", "type", "button", "id", "vob_btnDelete", 3, "click", "disabled"], [1, "bx", "bx-trash"], ["colspan", "6", 1, "text-center", "text-muted"], [1, "vob-row", 3, "click"], ["class", "bx bx-check text-success fs-4", 4, "ngIf"], [1, "bx", "bx-check", "text-success", "fs-4"], [1, "mb-3"], [1, "form-label"], ["nz-input", "", "id", "vob_displayDeptName", "name", "vob_displayDeptName", "readonly", "", 3, "ngModel"], [1, "text-danger"], ["nz-input", "", "id", "vob_codeNo", "name", "vob_codeNo", 3, "ngModelChange", "ngModel"], [1, "text-muted"], ["id", "vob_orderNo", "name", "vob_orderNo", 1, "w-100", 3, "ngModelChange", "ngModel", "nzMin"], ["nz-checkbox", "", "id", "vob_isDefault", "name", "vob_isDefault", 3, "ngModelChange", "ngModel"], [1, "mb-1"], [1, "fw-bold", "mb-0"]], template: function ViewOrgBusinessComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "nz-card", 4);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementStart(4, "div", 5)(5, "label", 6);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "nz-select", 7);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewOrgBusinessComponent_Template_nz_select_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedResumeNo, $event) || (ctx.selectedResumeNo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function ViewOrgBusinessComponent_Template_nz_select_ngModelChange_8_listener($event) {
        return ctx.onResumeChange($event);
      });
      \u0275\u0275template(10, ViewOrgBusinessComponent_nz_option_10_Template, 1, 2, "nz-option", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "input", 9);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewOrgBusinessComponent_Template_input_ngModelChange_11_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.treeSearchValue, $event) || (ctx.treeSearchValue = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(13, "div", 10)(14, "button", 11);
      \u0275\u0275listener("click", function ViewOrgBusinessComponent_Template_button_click_14_listener() {
        return ctx.expandAllNodes();
      });
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 12);
      \u0275\u0275listener("click", function ViewOrgBusinessComponent_Template_button_click_17_listener() {
        return ctx.collapseAllNodes();
      });
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "nz-spin", 13)(21, "div", 14)(22, "nz-tree", 15);
      \u0275\u0275twoWayListener("nzExpandedKeysChange", function ViewOrgBusinessComponent_Template_nz_tree_nzExpandedKeysChange_22_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.expandedKeys, $event) || (ctx.expandedKeys = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("nzClick", function ViewOrgBusinessComponent_Template_nz_tree_nzClick_22_listener($event) {
        return ctx.onTreeClick($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, ViewOrgBusinessComponent_div_23_Template, 3, 4, "div", 16);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(24, "div", 17)(25, "nz-card", 18);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275template(27, ViewOrgBusinessComponent_ng_template_27_Template, 12, 15, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(29, "nz-table", 19, 1)(31, "thead")(32, "tr")(33, "th", 20);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "th");
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "th");
      \u0275\u0275text(40);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "th", 21);
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "th");
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "th");
      \u0275\u0275text(49);
      \u0275\u0275pipe(50, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(51, "tbody");
      \u0275\u0275template(52, ViewOrgBusinessComponent_tr_52_Template, 4, 4, "tr", 22)(53, ViewOrgBusinessComponent_tr_53_Template, 14, 11, "tr", 23);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(54, "nz-modal", 24);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275pipe(57, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewOrgBusinessComponent_Template_nz_modal_nzOnCancel_54_listener() {
        return ctx.closeModal();
      })("nzOnOk", function ViewOrgBusinessComponent_Template_nz_modal_nzOnOk_54_listener() {
        return ctx.save();
      });
      \u0275\u0275template(58, ViewOrgBusinessComponent_ng_container_58_Template, 25, 25, "ng-container", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "nz-modal", 24);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275pipe(62, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewOrgBusinessComponent_Template_nz_modal_nzOnCancel_59_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function ViewOrgBusinessComponent_Template_nz_modal_nzOnOk_59_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(63, ViewOrgBusinessComponent_ng_container_63_Template, 6, 5, "ng-container", 25);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const vobActions_r9 = \u0275\u0275reference(28);
      const vobTable_r10 = \u0275\u0275reference(30);
      \u0275\u0275advance(2);
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(3, 42, "org.orgManage.viewOrgBusiness.title", "Th\xF4ng tin kinh doanh t\u1ED5 ch\u1EE9c"))("nzBodyStyle", \u0275\u0275pureFunction0(99, _c0));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 45, "orgResumeProcess.versionName", "T\xEAn phi\xEAn b\u1EA3n"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedResumeNo);
      \u0275\u0275property("nzLoading", ctx.loadingResume())("nzPlaceHolder", \u0275\u0275pipeBind2(9, 48, "orgResumeProcess.selectPlaceholder", "-- Ch\u1ECDn phi\xEAn b\u1EA3n thay \u0111\u1ED5i --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.resumeOptions());
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.treeSearchValue);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(12, 51, "orgCompose.searchTreePlaceholder", "T\xECm ki\u1EBFm ph\xF2ng ban..."));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(16, 54, "orgCompose.expandAll", "M\u1EDF t\u1EA5t c\u1EA3"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(19, 57, "orgCompose.collapseAll", "\u0110\xF3ng t\u1EA5t c\u1EA3"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzSpinning", ctx.loadingTree());
      \u0275\u0275advance(2);
      \u0275\u0275property("nzData", ctx.treeNodes())("nzSearchValue", ctx.treeSearchValue);
      \u0275\u0275twoWayProperty("nzExpandedKeys", ctx.expandedKeys);
      \u0275\u0275property("nzSelectedKeys", ctx.selectedDeptKey ? \u0275\u0275pureFunction1(100, _c1, ctx.selectedDeptKey) : \u0275\u0275pureFunction0(102, _c2));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingTree() && ctx.treeNodes().length === 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(26, 60, "orgBusiness.listTitle", "Danh s\xE1ch nghi\u1EC7p v\u1EE5 ph\xF2ng ban"))("nzExtra", vobActions_r9);
      \u0275\u0275advance(4);
      \u0275\u0275property("nzData", ctx.businessList())("nzLoading", ctx.loadingList())("nzPageSize", 20)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 63, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(38, 66, "org.orgManage.title.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 69, "orgBusiness.codeNo", "M\xE3 C\xF4ng vi\u1EC7c (Code No)"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 72, "orgBusiness.isDefault", "M\u1EB7c \u0111\u1ECBnh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(47, 75, "orgBusiness.updatedBy", "Ng\u01B0\u1EDDi thay \u0111\u1ED5i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 78, "orgBusiness.updateDate", "Th\u1EDDi gian thay \u0111\u1ED5i"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loadingList() && ctx.businessList().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", vobTable_r10.data);
      \u0275\u0275advance();
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", \u0275\u0275pipeBind2(55, 81, ctx.modalMode() === "NEW" ? "orgBusiness.modalAddTitle" : "orgBusiness.modalEditTitle", ctx.modalMode() === "NEW" ? "Th\xEAm nghi\u1EC7p v\u1EE5" : "C\u1EADp nh\u1EADt nghi\u1EC7p v\u1EE5"))("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(56, 84, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(57, 87, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(5);
      \u0275\u0275property("nzVisible", ctx.deleteConfirmVisible())("nzTitle", \u0275\u0275pipeBind2(60, 90, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(61, 93, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(62, 96, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzCardModule, NzCardComponent, NzCheckboxModule, NzCheckboxComponent, NzInputModule, NzInputDirective, NzInputNumberModule, NzInputNumberComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzSpinModule, NzSpinComponent, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzTreeModule, NzTreeComponent, DatePipe, TranslatePipe], styles: ["\n.vob-tree-scroll[_ngcontent-%COMP%] {\n  max-height: 600px;\n  overflow-y: auto;\n}\n.vob-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.vob-row-selected[_ngcontent-%COMP%] {\n  background-color: #e6f4ff;\n}\n/*# sourceMappingURL=view-org-business.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewOrgBusinessComponent, [{
    type: Component,
    args: [{ selector: "app-view-org-business", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzButtonModule,
      NzCardModule,
      NzCheckboxModule,
      NzInputModule,
      NzInputNumberModule,
      NzModalModule,
      NzSelectModule,
      NzSpinModule,
      NzTableModule,
      NzTreeModule,
      TranslatePipe
    ], template: `<div class="row">
  <!-- C\xE2y t\u1ED5 ch\u1EE9c b\xEAn tr\xE1i -->
  <div class="col-md-3 mb-3">
    <nz-card [nzTitle]="'org.orgManage.viewOrgBusiness.title' | translate:'Th\xF4ng tin kinh doanh t\u1ED5 ch\u1EE9c'" [nzBodyStyle]="{ padding: '12px' }">
      <div class="mb-2">
        <label class="form-label fw-bold">{{ 'orgResumeProcess.versionName' | translate:'T\xEAn phi\xEAn b\u1EA3n' }}</label>
        <nz-select class="w-100" id="vob_resumeSelect" [(ngModel)]="selectedResumeNo" (ngModelChange)="onResumeChange($event)"
                   [nzLoading]="loadingResume()" nzShowSearch nzAllowClear
                   [nzPlaceHolder]="'orgResumeProcess.selectPlaceholder' | translate:'-- Ch\u1ECDn phi\xEAn b\u1EA3n thay \u0111\u1ED5i --'">
          <nz-option *ngFor="let r of resumeOptions()" [nzValue]="r.no" [nzLabel]="resumeLabel(r)"></nz-option>
        </nz-select>
      </div>

      <input nz-input class="mb-2" id="vob_treeSearch" [(ngModel)]="treeSearchValue" name="vob_treeSearch"
             [placeholder]="'orgCompose.searchTreePlaceholder' | translate:'T\xECm ki\u1EBFm ph\xF2ng ban...'">

      <div class="mb-2 btn-group">
        <button nz-button nzSize="small" type="button" id="vob_btnExpandAll" (click)="expandAllNodes()">
          {{ 'orgCompose.expandAll' | translate:'M\u1EDF t\u1EA5t c\u1EA3' }}
        </button>
        <button nz-button nzSize="small" type="button" id="vob_btnCollapseAll" (click)="collapseAllNodes()">
          {{ 'orgCompose.collapseAll' | translate:'\u0110\xF3ng t\u1EA5t c\u1EA3' }}
        </button>
      </div>

      <nz-spin [nzSpinning]="loadingTree()">
        <div class="vob-tree-scroll">
          <nz-tree [nzData]="treeNodes()" [nzSearchValue]="treeSearchValue" nzSelectMode
                   [(nzExpandedKeys)]="expandedKeys" [nzSelectedKeys]="selectedDeptKey ? [selectedDeptKey] : []"
                   (nzClick)="onTreeClick($event)"></nz-tree>
          <div *ngIf="!loadingTree() && treeNodes().length === 0" class="text-muted fst-italic p-2">
            {{ 'orgCompose.msg.noOrgData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u t\u1ED5 ch\u1EE9c' }}
          </div>
        </div>
      </nz-spin>
    </nz-card>
  </div>

  <!-- Danh s\xE1ch nghi\u1EC7p v\u1EE5 ph\xF2ng ban b\xEAn ph\u1EA3i -->
  <div class="col-md-9 mb-3">
    <nz-card [nzTitle]="'orgBusiness.listTitle' | translate:'Danh s\xE1ch nghi\u1EC7p v\u1EE5 ph\xF2ng ban'" [nzExtra]="vobActions">
      <ng-template #vobActions>
        <button nz-button nzSize="small" nzType="primary" type="button" id="vob_btnNew"
                [disabled]="!selectedDeptKey" (click)="openAddModal()">
          <i class="bx bx-plus"></i> {{ 'common.addNew' | translate:'Th\xEAm m\u1EDBi' }}
        </button>
        <button nz-button nzSize="small" type="button" id="vob_btnEdit"
                [disabled]="!selectedSeq()" (click)="openEditModal()">
          <i class="bx bx-edit"></i> {{ 'common.edit' | translate:'S\u1EEDa' }}
        </button>
        <button nz-button nzSize="small" nzDanger type="button" id="vob_btnDelete"
                [disabled]="!selectedSeq()" (click)="openDeleteConfirm()">
          <i class="bx bx-trash"></i> {{ 'common.delete' | translate:'X\xF3a' }}
        </button>
      </ng-template>

      <nz-table [nzData]="businessList()" [nzLoading]="loadingList()" [nzPageSize]="20" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" #vobTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th>{{ 'org.orgManage.title.deptName' | translate:'Ph\xF2ng ban' }}</th>
            <th>{{ 'orgBusiness.codeNo' | translate:'M\xE3 C\xF4ng vi\u1EC7c (Code No)' }}</th>
            <th class="text-center">{{ 'orgBusiness.isDefault' | translate:'M\u1EB7c \u0111\u1ECBnh' }}</th>
            <th>{{ 'orgBusiness.updatedBy' | translate:'Ng\u01B0\u1EDDi thay \u0111\u1ED5i' }}</th>
            <th>{{ 'orgBusiness.updateDate' | translate:'Th\u1EDDi gian thay \u0111\u1ED5i' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loadingList() && businessList().length === 0">
            <td colspan="6" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of vobTable.data; let i = index" class="vob-row"
              [class.vob-row-selected]="selectedSeq() === row.seq" (click)="selectRow(row)">
            <td class="text-center">{{ i + 1 }}</td>
            <td>{{ row.deptName }}</td>
            <td>{{ row.businessName || row.codeNo }}</td>
            <td class="text-center">
              <i *ngIf="row.isDefault === '1'" class="bx bx-check text-success fs-4"></i>
            </td>
            <td>{{ row.updatedBy }}</td>
            <td>{{ row.updateDate | date:'dd/MM/yyyy HH:mm' }}</td>
          </tr>
        </tbody>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal Th\xEAm/S\u1EEDa nghi\u1EC7p v\u1EE5 -->
<nz-modal [nzVisible]="modalVisible()"
          [nzTitle]="(modalMode() === 'NEW' ? 'orgBusiness.modalAddTitle' : 'orgBusiness.modalEditTitle') | translate:(modalMode() === 'NEW' ? 'Th\xEAm nghi\u1EC7p v\u1EE5' : 'C\u1EADp nh\u1EADt nghi\u1EC7p v\u1EE5')"
          (nzOnCancel)="closeModal()" (nzOnOk)="save()" [nzOkLoading]="saving()"
          [nzOkText]="'common.save' | translate:'L\u01B0u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <form>
      <div class="mb-3">
        <label class="form-label">{{ 'org.orgManage.title.deptName' | translate:'Ph\xF2ng ban' }}</label>
        <input nz-input id="vob_displayDeptName" [ngModel]="selectedDeptName" name="vob_displayDeptName" readonly>
      </div>
      <div class="mb-3">
        <label class="form-label">{{ 'orgBusiness.codeNo' | translate:'M\xE3 C\xF4ng vi\u1EC7c (Code No)' }} <span class="text-danger">*</span></label>
        <input nz-input id="vob_codeNo" [(ngModel)]="form.codeNo" name="vob_codeNo">
        <small class="text-muted">{{ 'orgBusiness.codeNoHint' | translate:'Nh\u1EADp m\xE3 c\xF4ng vi\u1EC7c \u0111\u1EC3 h\u1EC7 th\u1ED1ng l\u1EA5y t\xEAn t\u01B0\u01A1ng \u1EE9ng.' }}</small>
      </div>
      <div class="mb-3">
        <label class="form-label">{{ 'orgBusiness.orderNo' | translate:'Th\u1EE9 t\u1EF1 hi\u1EC3n th\u1ECB' }}</label>
        <nz-input-number class="w-100" id="vob_orderNo" [(ngModel)]="form.orderNo" name="vob_orderNo" [nzMin]="0"></nz-input-number>
      </div>
      <label nz-checkbox id="vob_isDefault" [(ngModel)]="form.isDefault" name="vob_isDefault">
        {{ 'orgBusiness.isDefault' | translate:'M\u1EB7c \u0111\u1ECBnh' }}
      </label>
    </form>
  </ng-container>
</nz-modal>

<!-- Modal x\xE1c nh\u1EADn x\xF3a -->
<nz-modal [nzVisible]="deleteConfirmVisible()" [nzTitle]="'common.confirm' | translate:'X\xE1c nh\u1EADn'"
          (nzOnCancel)="closeDeleteConfirm()" (nzOnOk)="confirmDelete()" [nzOkLoading]="deleting()"
          [nzOkText]="'common.confirm' | translate:'X\xE1c nh\u1EADn'" [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'">
  <ng-container *nzModalContent>
    <p class="mb-1">{{ 'orgBusiness.msg.confirmDelete' | translate:'B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a nghi\u1EC7p v\u1EE5 n\xE0y?' }}</p>
    <p class="fw-bold mb-0">{{ selectedRow()?.businessName || selectedRow()?.codeNo }}</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-org-business/view-org-business.component.css */\n.vob-tree-scroll {\n  max-height: 600px;\n  overflow-y: auto;\n}\n.vob-row {\n  cursor: pointer;\n}\n.vob-row-selected {\n  background-color: #e6f4ff;\n}\n/*# sourceMappingURL=view-org-business.component.css.map */\n"] }]
  }], () => [{ type: ViewOrgBusinessService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewOrgBusinessComponent, { className: "ViewOrgBusinessComponent", filePath: "src/app/view-org-business/view-org-business.component.ts", lineNumber: 84 });
})();
export {
  ViewOrgBusinessComponent
};
//# debugId=b153ba56-d7c3-50bb-a59d-b4e55e691117
//# sourceMappingURL=chunk-6NCL5K3L.js.map
