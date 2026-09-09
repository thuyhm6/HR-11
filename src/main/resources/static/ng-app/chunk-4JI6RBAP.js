import {
  NzTagComponent,
  NzTagModule
} from "./chunk-HTQAHYN3.js";
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
import "./chunk-VWYGF7JF.js";
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
  Injectable,
  NgForOf,
  NgIf,
  NzButtonComponent,
  NzButtonModule,
  NzTransitionPatchDirective,
  NzWaveDirective,
  __spreadValues,
  computed,
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

// src/app/view-resume-list/view-resume-list.service.ts
var API_BASE = "/org";
var ViewResumeListService = class _ViewResumeListService {
  constructor(http) {
    this.http = http;
  }
  http;
  getPageList(payload) {
    return this.http.post(`${API_BASE}/api/resumes`, payload, {
      withCredentials: true
    });
  }
  getByNo(no) {
    return this.http.get(`${API_BASE}/api/resume/${encodeURIComponent(no)}`, {
      withCredentials: true
    });
  }
  add(payload) {
    return this.http.post(`${API_BASE}/api/resume/add`, payload, { withCredentials: true });
  }
  update(payload) {
    return this.http.post(`${API_BASE}/api/resume/update`, payload, { withCredentials: true });
  }
  delete(no) {
    return this.http.delete(`${API_BASE}/api/resume/delete/${encodeURIComponent(no)}`, {
      withCredentials: true
    });
  }
  static \u0275fac = function ViewResumeListService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewResumeListService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewResumeListService, factory: _ViewResumeListService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewResumeListService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-resume-list/view-resume-list.component.ts
var _c0 = () => ({ x: "1300px" });
function ViewResumeListComponent_nz_alert_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 38);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ViewResumeListComponent_tr_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 39);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewResumeListComponent_tr_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 40);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 40)(12, "nz-tag", 41);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 40);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 40)(21, "button", 42);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275listener("click", function ViewResumeListComponent_tr_87_Template_button_click_21_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditModal(row_r4));
    });
    \u0275\u0275element(23, "i", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 42);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275listener("click", function ViewResumeListComponent_tr_87_Template_button_click_24_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDeleteConfirm(row_r4));
    });
    \u0275\u0275element(26, "i", 44);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r1.pageIndex - 1) * ctx_r1.pageSize + i_r5 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.no);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.resumeName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.resumeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDisplayDate(row_r4.changeDate));
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.changeReason || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.changeReason);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColor", row_r4.activity === ctx_r1.activeCode ? "success" : "default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.activity === ctx_r1.activeCode ? \u0275\u0275pipeBind2(14, 13, "common.active", "Ho\u1EA1t \u0111\u1ED9ng") : \u0275\u0275pipeBind2(15, 16, "common.inactive", "Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r4.createdBy);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDisplayDateTime(row_r4.createDate));
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(22, 19, "common.edit", "S\u1EEDa"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(25, 22, "common.delete", "X\xF3a"));
  }
}
function ViewResumeListComponent_ng_template_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r6 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r6, " ");
  }
}
function ViewResumeListComponent_ng_container_93_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "label", 48);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 56);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "orgResume.no", "M\xE3 thay \u0111\u1ED5i"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.no);
    \u0275\u0275control();
  }
}
function ViewResumeListComponent_ng_container_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 45);
    \u0275\u0275template(2, ViewResumeListComponent_ng_container_93_div_2_Template, 5, 5, "div", 46);
    \u0275\u0275elementStart(3, "div", 47)(4, "label", 48);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "span", 49);
    \u0275\u0275text(8, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function ViewResumeListComponent_ng_container_93_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.resumeName, $event) || (ctx_r1.form.resumeName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 47)(11, "label", 48);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementStart(14, "span", 49);
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "nz-date-picker", 51);
    \u0275\u0275twoWayListener("ngModelChange", function ViewResumeListComponent_ng_container_93_Template_nz_date_picker_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.changeDate, $event) || (ctx_r1.form.changeDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 47)(18, "label", 52);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "nz-select", 53);
    \u0275\u0275twoWayListener("ngModelChange", function ViewResumeListComponent_ng_container_93_Template_nz_select_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.activity, $event) || (ctx_r1.form.activity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(22, "nz-option", 13);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275element(24, "nz-option", 13);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 2)(27, "label", 48);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "textarea", 54);
    \u0275\u0275twoWayListener("ngModelChange", function ViewResumeListComponent_ng_container_93_Template_textarea_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.changeReason, $event) || (ctx_r1.form.changeReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 2)(32, "label", 48);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "textarea", 55);
    \u0275\u0275twoWayListener("ngModelChange", function ViewResumeListComponent_ng_container_93_Template_textarea_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.remark, $event) || (ctx_r1.form.remark = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.isNew());
    \u0275\u0275advance();
    \u0275\u0275classProp("col-md-12", ctx_r1.isNew());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(6, 17, "orgResume.resumeName", "T\xEAn thay \u0111\u1ED5i"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.resumeName);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(13, 20, "orgResume.changeDate", "Ng\xE0y hi\u1EC7u l\u1EF1c"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.changeDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 23, "common.status", "Tr\u1EA1ng th\xE1i"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.activity);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzValue", ctx_r1.activeCode)("nzLabel", \u0275\u0275pipeBind2(23, 26, "common.active", "Ho\u1EA1t \u0111\u1ED9ng"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzValue", ctx_r1.inactiveCode)("nzLabel", \u0275\u0275pipeBind2(25, 29, "common.inactive", "Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 32, "orgResume.changeReason", "Nguy\xEAn nh\xE2n"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.changeReason);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 35, "common.remark", "Ghi ch\xFA"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.remark);
    \u0275\u0275control();
  }
}
function ViewResumeListComponent_ng_container_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 57);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 58);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "orgResume.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a thay \u0111\u1ED5i t\u1ED5 ch\u1EE9c n\xE0y?"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.deleteTargetName);
  }
}
var I18N_KEYS = [
  "orgResume.no",
  "orgResume.noPlaceholder",
  "orgResume.resumeName",
  "orgResume.resumeNamePlaceholder",
  "orgResume.changeDateFrom",
  "orgResume.changeDateTo",
  "orgResume.changeDate",
  "orgResume.changeReason",
  "orgResume.modalAddTitle",
  "orgResume.modalEditTitle",
  "orgResume.confirmDelete",
  "orgResume.msg.pleaseEnterResumeName",
  "orgResume.msg.pleaseEnterChangeDate",
  "common.stt",
  "common.action",
  "common.addNew",
  "common.edit",
  "common.delete",
  "common.save",
  "common.close",
  "common.confirm",
  "common.cancel",
  "common.search",
  "common.clearFilter",
  "common.noData",
  "common.totalRows",
  "common.status",
  "common.active",
  "common.inactive",
  "common.remark",
  "common.createdBy",
  "common.createDate",
  "common.loadFail",
  "common.saveFail",
  "common.deleteFail",
  "common.exportExcel",
  "common.selectAll",
  "alert.message.add_success",
  "alert.message.update_success",
  "alert.message.delete_success"
];
var PAGE_SIZE_OPTIONS = [25, 50, 100, 200];
var ACTIVE_CODE = "14013948";
var INACTIVE_CODE = "INACTIVE";
var EMPTY_FORM = {
  no: "",
  resumeName: "",
  changeDate: null,
  changeReason: "",
  remark: "",
  activity: ACTIVE_CODE
};
var ViewResumeListComponent = class _ViewResumeListComponent {
  constructor(api, i18n, message) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
  }
  api;
  i18n;
  message;
  pageSizeOptions = PAGE_SIZE_OPTIONS;
  activeCode = ACTIVE_CODE;
  inactiveCode = INACTIVE_CODE;
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
  recordsFiltered = signal(
    0,
    ...ngDevMode ? [{ debugName: "recordsFiltered" }] : (
      /* istanbul ignore next */
      []
    )
  );
  exporting = signal(
    false,
    ...ngDevMode ? [{ debugName: "exporting" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pageIndex = 1;
  pageSize = 25;
  searchNo = "";
  searchResumeName = "";
  searchChangeDateFrom = null;
  searchChangeDateTo = null;
  searchActivity = null;
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
  isNew = signal(
    true,
    ...ngDevMode ? [{ debugName: "isNew" }] : (
      /* istanbul ignore next */
      []
    )
  );
  modalTitle = computed(
    () => this.isNew() ? this.i18n.t("orgResume.modalAddTitle", "Th\xEAm m\u1EDBi thay \u0111\u1ED5i t\u1ED5 ch\u1EE9c") : `${this.i18n.t("orgResume.modalEditTitle", "C\u1EADp nh\u1EADt thay \u0111\u1ED5i t\u1ED5 ch\u1EE9c")}: ${this.form.no}`,
    ...ngDevMode ? [{ debugName: "modalTitle" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = __spreadValues({}, EMPTY_FORM);
  deleteVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "deleteVisible" }] : (
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
  deleteTarget = null;
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.search();
  }
  search() {
    this.pageIndex = 1;
    this.loadPage();
  }
  clearSearch() {
    this.searchNo = "";
    this.searchResumeName = "";
    this.searchChangeDateFrom = null;
    this.searchChangeDateTo = null;
    this.searchActivity = null;
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
  formatDisplayDate(dateStr) {
    if (!dateStr)
      return "";
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? dateStr : formatDate(d, "dd/MM/yyyy", "vi");
  }
  formatDisplayDateTime(dateStr) {
    if (!dateStr)
      return "";
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? dateStr : formatDate(d, "dd/MM/yyyy HH:mm", "vi");
  }
  // ==================== Modal Thêm mới / Cập nhật ====================
  openAddModal() {
    this.isNew.set(true);
    this.form = __spreadValues({}, EMPTY_FORM);
    this.modalVisible.set(true);
  }
  openEditModal(row) {
    this.api.getByNo(row.no).subscribe({
      next: (data) => {
        this.isNew.set(false);
        this.form = {
          no: data.no,
          resumeName: data.resumeName || "",
          changeDate: this.toDate(data.changeDate),
          changeReason: data.changeReason || "",
          remark: data.remark || "",
          activity: data.activity || ACTIVE_CODE
        };
        this.modalVisible.set(true);
      },
      error: () => this.message.error(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"))
    });
  }
  closeModal() {
    this.modalVisible.set(false);
  }
  saveForm() {
    if (!this.form.resumeName.trim()) {
      this.message.warning(this.i18n.t("orgResume.msg.pleaseEnterResumeName", "Vui l\xF2ng nh\u1EADp T\xEAn thay \u0111\u1ED5i"));
      return;
    }
    if (!this.form.changeDate) {
      this.message.warning(this.i18n.t("orgResume.msg.pleaseEnterChangeDate", "Vui l\xF2ng nh\u1EADp Ng\xE0y hi\u1EC7u l\u1EF1c"));
      return;
    }
    const payload = {
      no: this.form.no,
      changeDate: this.formatYmd(this.form.changeDate),
      resumeName: this.form.resumeName.trim(),
      changeReason: this.form.changeReason,
      remark: this.form.remark,
      activity: this.form.activity
    };
    this.saving.set(true);
    const request$ = this.isNew() ? this.api.add(payload) : this.api.update(payload);
    request$.subscribe({
      next: () => this.onSaveSuccess(this.isNew() ? this.i18n.t("alert.message.add_success", "Th\xEAm th\xE0nh c\xF4ng!") : this.i18n.t("alert.message.update_success", "S\u1EEDa th\xE0nh c\xF4ng!")),
      error: () => this.onSaveError()
    });
  }
  onSaveSuccess(msg) {
    this.saving.set(false);
    this.modalVisible.set(false);
    this.message.success(msg);
    this.loadPage();
  }
  onSaveError() {
    this.saving.set(false);
    this.message.error(this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!"));
  }
  // ==================== Xóa ====================
  openDeleteConfirm(row) {
    this.deleteTarget = row;
    this.deleteVisible.set(true);
  }
  closeDeleteConfirm() {
    this.deleteVisible.set(false);
  }
  get deleteTargetName() {
    return this.deleteTarget ? `${this.deleteTarget.no} - ${this.deleteTarget.resumeName ?? ""}` : "";
  }
  confirmDelete() {
    if (!this.deleteTarget)
      return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.no).subscribe({
      next: () => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.message.success(this.i18n.t("alert.message.delete_success", "X\xF3a th\xE0nh c\xF4ng!"));
        this.loadPage();
      },
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t("common.deleteFail", "X\xF3a th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  // ==================== Xuất Excel ====================
  exportExcel() {
    this.exporting.set(true);
    const payload = this.buildRequestPayload(0, Math.max(this.recordsFiltered(), 1));
    this.api.getPageList(payload).subscribe({
      next: (res) => {
        this.exporting.set(false);
        this.downloadXlsx(res.data ?? []);
      },
      error: () => {
        this.exporting.set(false);
        this.message.error(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  downloadXlsx(list) {
    const headers = [
      this.i18n.t("common.stt", "STT"),
      this.i18n.t("orgResume.no", "M\xE3 thay \u0111\u1ED5i"),
      this.i18n.t("orgResume.resumeName", "T\xEAn thay \u0111\u1ED5i"),
      this.i18n.t("orgResume.changeDate", "Ng\xE0y hi\u1EC7u l\u1EF1c"),
      this.i18n.t("orgResume.changeReason", "Nguy\xEAn nh\xE2n"),
      this.i18n.t("common.status", "Tr\u1EA1ng th\xE1i"),
      this.i18n.t("common.createdBy", "Ng\u01B0\u1EDDi t\u1EA1o"),
      this.i18n.t("common.createDate", "Ng\xE0y t\u1EA1o")
    ];
    const dataRows = list.map((r, i) => [
      i + 1,
      r.no,
      r.resumeName,
      this.formatDisplayDate(r.changeDate),
      r.changeReason,
      r.activity === ACTIVE_CODE ? this.i18n.t("common.active", "Ho\u1EA1t \u0111\u1ED9ng") : this.i18n.t("common.inactive", "Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng"),
      r.createdBy,
      this.formatDisplayDateTime(r.createDate)
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "DanhSachThayDoiToChuc");
    writeFileSync(workbook, "danh_sach_thay_doi_to_chuc.xlsx");
  }
  // ==================== Helpers ====================
  loadPage() {
    this.loading.set(true);
    this.errorMessage.set(null);
    const payload = this.buildRequestPayload((this.pageIndex - 1) * this.pageSize, this.pageSize);
    this.api.getPageList(payload).subscribe({
      next: (res) => {
        if (res.error) {
          this.errorMessage.set(res.error);
          this.rows.set([]);
          this.recordsFiltered.set(0);
        } else {
          this.rows.set(res.data ?? []);
          this.recordsFiltered.set(res.recordsFiltered ?? 0);
        }
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.rows.set([]);
        this.recordsFiltered.set(0);
        this.loading.set(false);
      }
    });
  }
  buildRequestPayload(start, length) {
    return {
      draw: this.pageIndex,
      start,
      length,
      searchParams: {
        no: this.searchNo,
        resumeName: this.searchResumeName,
        changeDateFrom: this.formatYmd(this.searchChangeDateFrom),
        changeDateTo: this.formatYmd(this.searchChangeDateTo),
        activity: this.searchActivity ?? ""
      }
    };
  }
  toDate(dateStr) {
    if (!dateStr)
      return null;
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? null : d;
  }
  formatYmd(d) {
    return d ? formatDate(d, "yyyy-MM-dd", "vi") : "";
  }
  static \u0275fac = function ViewResumeListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewResumeListComponent)(\u0275\u0275directiveInject(ViewResumeListService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewResumeListComponent, selectors: [["app-view-resume-list"]], decls: 99, vars: 138, consts: [["vrlTotalTpl", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["nz-input", "", "name", "vrlSearchNo", 3, "ngModelChange", "ngModel", "placeholder"], ["nz-input", "", "name", "vrlSearchResumeName", 3, "ngModelChange", "ngModel", "placeholder"], [1, "col-md-2"], ["name", "vrlSearchChangeDateFrom", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vrlSearchChangeDateTo", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vrlSearchActivity", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel"], [1, "col-12", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzType", "default", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], ["nz-button", "", "nzType", "default", "type", "button", 1, "vrl-btn-export", 3, "click", "nzLoading"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], ["nzShowSizeChanger", "", 1, "table-nowrap", 3, "nzPageIndexChange", "nzPageSizeChange", "nzData", "nzFrontPagination", "nzLoading", "nzTotal", "nzPageIndex", "nzPageSize", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "130px"], ["nzWidth", "200px"], ["nzWidth", "120px", 1, "text-center"], ["nzWidth", "220px"], ["nzWidth", "120px"], ["nzWidth", "150px", 1, "text-center"], ["nzWidth", "100px", 1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["nzWidth", "700px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "9", 1, "text-center", "text-muted"], [1, "text-center"], [3, "nzColor"], ["nz-button", "", "nzType", "text", "nzSize", "small", 3, "click", "title"], [1, "bx", "bx-edit", "text-warning"], [1, "bx", "bx-trash", "text-danger"], [1, "row", "g-3"], ["class", "col-md-6", 4, "ngIf"], [1, "col-md-6"], [1, "form-label", "fw-semibold"], [1, "text-danger"], ["nz-input", "", "name", "vrlFormResumeName", 3, "ngModelChange", "ngModel"], ["name", "vrlFormChangeDate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], [1, "form-label", "fw-semibold", "d-block"], ["name", "vrlFormActivity", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vrlFormChangeReason", "rows", "3", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vrlFormRemark", "rows", "2", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vrlFormNo", "readonly", "", 3, "ngModel"], [1, "mb-1"], [1, "fw-bold", "mb-0"]], template: function ViewResumeListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "nz-card", 3)(3, "form", 4);
      \u0275\u0275listener("ngSubmit", function ViewResumeListComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 5)(5, "label", 6);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 7);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewResumeListComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchNo, $event) || (ctx.searchNo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 5)(11, "label", 6);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "input", 8);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewResumeListComponent_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchResumeName, $event) || (ctx.searchResumeName = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 9)(17, "label", 6);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "nz-date-picker", 10);
      \u0275\u0275twoWayListener("ngModelChange", function ViewResumeListComponent_Template_nz_date_picker_ngModelChange_20_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchChangeDateFrom, $event) || (ctx.searchChangeDateFrom = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 9)(22, "label", 6);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "nz-date-picker", 11);
      \u0275\u0275twoWayListener("ngModelChange", function ViewResumeListComponent_Template_nz_date_picker_ngModelChange_25_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchChangeDateTo, $event) || (ctx.searchChangeDateTo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 9)(27, "label", 6);
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "nz-select", 12);
      \u0275\u0275pipe(31, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewResumeListComponent_Template_nz_select_ngModelChange_30_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchActivity, $event) || (ctx.searchActivity = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275element(32, "nz-option", 13);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275element(34, "nz-option", 13);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 14)(37, "button", 15);
      \u0275\u0275listener("click", function ViewResumeListComponent_Template_button_click_37_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(38, "i", 16);
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "button", 17);
      \u0275\u0275element(42, "i", 18);
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "button", 19);
      \u0275\u0275listener("click", function ViewResumeListComponent_Template_button_click_45_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(46, "i", 20);
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "button", 21);
      \u0275\u0275listener("click", function ViewResumeListComponent_Template_button_click_49_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(50, "i", 22);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(53, "nz-card");
      \u0275\u0275template(54, ViewResumeListComponent_nz_alert_54_Template, 1, 1, "nz-alert", 23);
      \u0275\u0275elementStart(55, "nz-table", 24);
      \u0275\u0275listener("nzPageIndexChange", function ViewResumeListComponent_Template_nz_table_nzPageIndexChange_55_listener($event) {
        return ctx.onPageIndexChange($event);
      })("nzPageSizeChange", function ViewResumeListComponent_Template_nz_table_nzPageSizeChange_55_listener($event) {
        return ctx.onPageSizeChange($event);
      });
      \u0275\u0275elementStart(56, "thead")(57, "tr")(58, "th", 25);
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "th", 26);
      \u0275\u0275text(62);
      \u0275\u0275pipe(63, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "th", 27);
      \u0275\u0275text(65);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "th", 28);
      \u0275\u0275text(68);
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "th", 29);
      \u0275\u0275text(71);
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "th", 28);
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "th", 30);
      \u0275\u0275text(77);
      \u0275\u0275pipe(78, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "th", 31);
      \u0275\u0275text(80);
      \u0275\u0275pipe(81, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "th", 32);
      \u0275\u0275text(83);
      \u0275\u0275pipe(84, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(85, "tbody");
      \u0275\u0275template(86, ViewResumeListComponent_tr_86_Template, 4, 4, "tr", 33)(87, ViewResumeListComponent_tr_87_Template, 27, 25, "tr", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275template(88, ViewResumeListComponent_ng_template_88_Template, 2, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(90, "nz-modal", 35);
      \u0275\u0275pipe(91, "translate");
      \u0275\u0275pipe(92, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewResumeListComponent_Template_nz_modal_nzOnCancel_90_listener() {
        return ctx.closeModal();
      })("nzOnOk", function ViewResumeListComponent_Template_nz_modal_nzOnOk_90_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(93, ViewResumeListComponent_ng_container_93_Template, 36, 38, "ng-container", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "nz-modal", 37);
      \u0275\u0275pipe(95, "translate");
      \u0275\u0275pipe(96, "translate");
      \u0275\u0275pipe(97, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewResumeListComponent_Template_nz_modal_nzOnCancel_94_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function ViewResumeListComponent_Template_nz_modal_nzOnOk_94_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(98, ViewResumeListComponent_ng_container_98_Template, 6, 5, "ng-container", 36);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const vrlTotalTpl_r8 = \u0275\u0275reference(89);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 53, "orgResume.no", "M\xE3 thay \u0111\u1ED5i"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchNo);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 56, "orgResume.noPlaceholder", "Nh\u1EADp m\xE3 thay \u0111\u1ED5i"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 59, "orgResume.resumeName", "T\xEAn thay \u0111\u1ED5i"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchResumeName);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(15, 62, "orgResume.resumeNamePlaceholder", "Nh\u1EADp t\xEAn thay \u0111\u1ED5i"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 65, "orgResume.changeDateFrom", "Ng\xE0y hi\u1EC7u l\u1EF1c t\u1EEB"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchChangeDateFrom);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 68, "orgResume.changeDateTo", "Ng\xE0y hi\u1EC7u l\u1EF1c \u0111\u1EBFn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchChangeDateTo);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 71, "common.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchActivity);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(31, 74, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("nzValue", ctx.activeCode)("nzLabel", \u0275\u0275pipeBind2(33, 77, "common.active", "Ho\u1EA1t \u0111\u1ED9ng"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzValue", ctx.inactiveCode)("nzLabel", \u0275\u0275pipeBind2(35, 80, "common.inactive", "Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(40, 83, "common.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(44, 86, "common.search", "T\xECm ki\u1EBFm"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(48, 89, "common.clearFilter", "X\xF3a b\u1ED9 l\u1ECDc"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.exporting());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(52, 92, "common.exportExcel", "Xu\u1EA5t Excel"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzFrontPagination", false)("nzLoading", ctx.loading())("nzTotal", ctx.recordsFiltered())("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", vrlTotalTpl_r8)("nzScroll", \u0275\u0275pureFunction0(137, _c0));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(60, 95, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(63, 98, "orgResume.no", "M\xE3 thay \u0111\u1ED5i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(66, 101, "orgResume.resumeName", "T\xEAn thay \u0111\u1ED5i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 104, "orgResume.changeDate", "Ng\xE0y hi\u1EC7u l\u1EF1c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(72, 107, "orgResume.changeReason", "Nguy\xEAn nh\xE2n"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(75, 110, "common.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(78, 113, "common.createdBy", "Ng\u01B0\u1EDDi t\u1EA1o"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(81, 116, "common.createDate", "Ng\xE0y t\u1EA1o"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(84, 119, "common.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.rows());
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", ctx.modalTitle())("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(91, 122, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(92, 125, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(4);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(95, 128, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(96, 131, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(97, 134, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzDatePickerModule, NzDatePickerComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, NzTagModule, NzTagComponent, TranslatePipe], styles: ["\n.vrl-btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=view-resume-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewResumeListComponent, [{
    type: Component,
    args: [{ selector: "app-view-resume-list", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzSelectModule,
      NzButtonModule,
      NzDatePickerModule,
      NzModalModule,
      NzAlertModule,
      NzTagModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm - \u0111\u1EE9ng im khi cu\u1ED9n (xem .sticky-filter-card trong styles.css) -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3" (ngSubmit)="search()">
        <div class="col-md-3">
          <label class="form-label">{{ 'orgResume.no' | translate:'M\xE3 thay \u0111\u1ED5i' }}</label>
          <input nz-input [(ngModel)]="searchNo" name="vrlSearchNo"
                 [placeholder]="'orgResume.noPlaceholder' | translate:'Nh\u1EADp m\xE3 thay \u0111\u1ED5i'">
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'orgResume.resumeName' | translate:'T\xEAn thay \u0111\u1ED5i' }}</label>
          <input nz-input [(ngModel)]="searchResumeName" name="vrlSearchResumeName"
                 [placeholder]="'orgResume.resumeNamePlaceholder' | translate:'Nh\u1EADp t\xEAn thay \u0111\u1ED5i'">
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'orgResume.changeDateFrom' | translate:'Ng\xE0y hi\u1EC7u l\u1EF1c t\u1EEB' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="searchChangeDateFrom" name="vrlSearchChangeDateFrom" nzFormat="dd/MM/yyyy"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'orgResume.changeDateTo' | translate:'Ng\xE0y hi\u1EC7u l\u1EF1c \u0111\u1EBFn' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="searchChangeDateTo" name="vrlSearchChangeDateTo" nzFormat="dd/MM/yyyy"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</label>
          <nz-select class="w-100" [(ngModel)]="searchActivity" name="vrlSearchActivity" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option [nzValue]="activeCode" [nzLabel]="'common.active' | translate:'Ho\u1EA1t \u0111\u1ED9ng'"></nz-option>
            <nz-option [nzValue]="inactiveCode" [nzLabel]="'common.inactive' | translate:'Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng'"></nz-option>
          </nz-select>
        </div>
        <div class="col-12 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="button" (click)="openAddModal()">
            <i class="bx bx-plus"></i> {{ 'common.addNew' | translate:'Th\xEAm m\u1EDBi' }}
          </button>
          <button nz-button nzType="default" type="submit">
            <i class="bx bx-search"></i> {{ 'common.search' | translate:'T\xECm ki\u1EBFm' }}
          </button>
          <button nz-button type="button" (click)="clearSearch()">
            <i class="bx bx-x"></i> {{ 'common.clearFilter' | translate:'X\xF3a b\u1ED9 l\u1ECDc' }}
          </button>
          <button nz-button nzType="default" type="button" class="vrl-btn-export" [nzLoading]="exporting()" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'common.exportExcel' | translate:'Xu\u1EA5t Excel' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <!-- nzWidth khai b\xE1o cho t\u1EEBng c\u1ED9t \u0111\u1EC3 \u0111\u1ED3ng b\u1ED9 \u0111\u1ED9 r\u1ED9ng header/body khi d\xF9ng nzScroll. -->
      <nz-table [nzData]="rows()" [nzFrontPagination]="false" [nzLoading]="loading()"
                [nzTotal]="recordsFiltered()" [nzPageIndex]="pageIndex" [nzPageSize]="pageSize"
                [nzPageSizeOptions]="pageSizeOptions" nzShowSizeChanger [nzShowTotal]="vrlTotalTpl"
                (nzPageIndexChange)="onPageIndexChange($event)" (nzPageSizeChange)="onPageSizeChange($event)"
                [nzScroll]="{ x: '1300px' }" class="table-nowrap">
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th nzWidth="130px">{{ 'orgResume.no' | translate:'M\xE3 thay \u0111\u1ED5i' }}</th>
            <th nzWidth="200px">{{ 'orgResume.resumeName' | translate:'T\xEAn thay \u0111\u1ED5i' }}</th>
            <th class="text-center" nzWidth="120px">{{ 'orgResume.changeDate' | translate:'Ng\xE0y hi\u1EC7u l\u1EF1c' }}</th>
            <th nzWidth="220px">{{ 'orgResume.changeReason' | translate:'Nguy\xEAn nh\xE2n' }}</th>
            <th class="text-center" nzWidth="120px">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
            <th nzWidth="120px">{{ 'common.createdBy' | translate:'Ng\u01B0\u1EDDi t\u1EA1o' }}</th>
            <th class="text-center" nzWidth="150px">{{ 'common.createDate' | translate:'Ng\xE0y t\u1EA1o' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'common.action' | translate:'Thao t\xE1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="9" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of rows(); let i = index">
            <td class="text-center">{{ (pageIndex - 1) * pageSize + i + 1 }}</td>
            <td>{{ row.no }}</td>
            <td [attr.title]="row.resumeName || null">{{ row.resumeName }}</td>
            <td class="text-center">{{ formatDisplayDate(row.changeDate) }}</td>
            <td [attr.title]="row.changeReason || null">{{ row.changeReason }}</td>
            <td class="text-center">
              <nz-tag [nzColor]="row.activity === activeCode ? 'success' : 'default'">
                {{ row.activity === activeCode ? ('common.active' | translate:'Ho\u1EA1t \u0111\u1ED9ng') : ('common.inactive' | translate:'Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng') }}
              </nz-tag>
            </td>
            <td>{{ row.createdBy }}</td>
            <td class="text-center">{{ formatDisplayDateTime(row.createDate) }}</td>
            <td class="text-center">
              <button nz-button nzType="text" nzSize="small" [title]="'common.edit' | translate:'S\u1EEDa'" (click)="openEditModal(row)">
                <i class="bx bx-edit text-warning"></i>
              </button>
              <button nz-button nzType="text" nzSize="small" [title]="'common.delete' | translate:'X\xF3a'" (click)="openDeleteConfirm(row)">
                <i class="bx bx-trash text-danger"></i>
              </button>
            </td>
          </tr>
        </tbody>
        <ng-template #vrlTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal Th\xEAm m\u1EDBi / C\u1EADp nh\u1EADt -->
<nz-modal [nzVisible]="modalVisible()" [nzTitle]="modalTitle()" nzWidth="700px"
          (nzOnCancel)="closeModal()" (nzOnOk)="saveForm()" [nzOkLoading]="saving()"
          [nzOkText]="'common.save' | translate:'L\u01B0u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <div class="row g-3">
      <div class="col-md-6" *ngIf="!isNew()">
        <label class="form-label fw-semibold">{{ 'orgResume.no' | translate:'M\xE3 thay \u0111\u1ED5i' }}</label>
        <input nz-input [ngModel]="form.no" name="vrlFormNo" readonly>
      </div>
      <div class="col-md-6" [class.col-md-12]="isNew()">
        <label class="form-label fw-semibold">{{ 'orgResume.resumeName' | translate:'T\xEAn thay \u0111\u1ED5i' }} <span class="text-danger">*</span></label>
        <input nz-input [(ngModel)]="form.resumeName" name="vrlFormResumeName">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'orgResume.changeDate' | translate:'Ng\xE0y hi\u1EC7u l\u1EF1c' }} <span class="text-danger">*</span></label>
        <nz-date-picker class="w-100" [(ngModel)]="form.changeDate" name="vrlFormChangeDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold d-block">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.activity" name="vrlFormActivity">
          <nz-option [nzValue]="activeCode" [nzLabel]="'common.active' | translate:'Ho\u1EA1t \u0111\u1ED9ng'"></nz-option>
          <nz-option [nzValue]="inactiveCode" [nzLabel]="'common.inactive' | translate:'Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng'"></nz-option>
        </nz-select>
      </div>
      <div class="col-12">
        <label class="form-label fw-semibold">{{ 'orgResume.changeReason' | translate:'Nguy\xEAn nh\xE2n' }}</label>
        <textarea nz-input [(ngModel)]="form.changeReason" name="vrlFormChangeReason" rows="3"></textarea>
      </div>
      <div class="col-12">
        <label class="form-label fw-semibold">{{ 'common.remark' | translate:'Ghi ch\xFA' }}</label>
        <textarea nz-input [(ngModel)]="form.remark" name="vrlFormRemark" rows="2"></textarea>
      </div>
    </div>
  </ng-container>
</nz-modal>

<!-- Modal x\xE1c nh\u1EADn x\xF3a -->
<nz-modal [nzVisible]="deleteVisible()" [nzTitle]="'common.confirm' | translate:'X\xE1c nh\u1EADn'"
          (nzOnCancel)="closeDeleteConfirm()" (nzOnOk)="confirmDelete()" [nzOkLoading]="deleting()"
          [nzOkText]="'common.confirm' | translate:'X\xE1c nh\u1EADn'" [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'">
  <ng-container *nzModalContent>
    <p class="mb-1">{{ 'orgResume.confirmDelete' | translate:'B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a thay \u0111\u1ED5i t\u1ED5 ch\u1EE9c n\xE0y?' }}</p>
    <p class="fw-bold mb-0">{{ deleteTargetName }}</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-resume-list/view-resume-list.component.css */\n.vrl-btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=view-resume-list.component.css.map */\n"] }]
  }], () => [{ type: ViewResumeListService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewResumeListComponent, { className: "ViewResumeListComponent", filePath: "src/app/view-resume-list/view-resume-list.component.ts", lineNumber: 85 });
})();
export {
  ViewResumeListComponent
};
//# debugId=1a9be23d-b1ad-526a-8608-43b2d87c5105
//# sourceMappingURL=chunk-4JI6RBAP.js.map
