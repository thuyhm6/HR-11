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
  NzModalModule,
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
  NzCellFixedDirective,
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
  ViewChild,
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-VTW5U2M5.js";

// src/app/view-recruit-batch-list/view-recruit-batch-list.service.ts
var API_BASE = "/hrm/recruitManage/api";
var TEMPLATE_NAME = "NewEmp_add_Template";
var ViewRecruitBatchListService = class _ViewRecruitBatchListService {
  constructor(http) {
    this.http = http;
  }
  http;
  getRegisterList() {
    return this.http.get(`${API_BASE}/rblBatch/registerList`, { withCredentials: true });
  }
  register(dto) {
    return this.http.post(`${API_BASE}/rblBatch/register`, dto, { withCredentials: true });
  }
  getBatchList(params) {
    return this.http.post(`${API_BASE}/rblBatch/list`, params, {
      withCredentials: true
    });
  }
  updateBatchItem(dto) {
    return this.http.post(`${API_BASE}/rblBatch/update`, dto, { withCredentials: true });
  }
  deleteBatchItem(seq) {
    return this.http.post(`${API_BASE}/rblBatch/delete`, null, {
      params: new HttpParams().set("seq", seq),
      withCredentials: true
    });
  }
  importExcel(file, registerSeq) {
    const fd = new FormData();
    fd.append("file", file);
    return this.http.post(`${API_BASE}/rblBatch/import`, fd, {
      params: new HttpParams().set("registerSeq", registerSeq),
      withCredentials: true
    });
  }
  executeConfirmBatch(registerSeq) {
    return this.http.post(`${API_BASE}/execute`, null, {
      params: new HttpParams().set("personIds", registerSeq).set("type", "CONFIRM_BATCH"),
      withCredentials: true
    });
  }
  downloadTemplateUrl() {
    return `/sy/excel/api/downloadTemplate?templateName=${TEMPLATE_NAME}`;
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
  static \u0275fac = function ViewRecruitBatchListService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewRecruitBatchListService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewRecruitBatchListService, factory: _ViewRecruitBatchListService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewRecruitBatchListService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-recruit-batch-list/view-recruit-batch-list.component.ts
var _c0 = ["excelFileInput"];
var _c1 = () => ({ padding: "10px" });
var _c2 = () => [20, 50, 100];
var _c3 = () => ({ x: "4000px", y: "calc(100vh - 320px)" });
function ViewRecruitBatchListComponent_nz_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 41);
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    \u0275\u0275property("nzValue", r_r2.registerSeq)("nzLabel", (r_r2.registerDate || "") + (r_r2.registerRemark ? " - " + r_r2.registerRemark : ""));
  }
}
function ViewRecruitBatchListComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function ViewRecruitBatchListComponent_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.downloadTemplate());
    });
    \u0275\u0275element(1, "i", 42);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "common.downloadTemplate", "T\u1EA3i File M\u1EABu"), " ");
  }
}
function ViewRecruitBatchListComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function ViewRecruitBatchListComponent_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.confirmExecute());
    });
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "common.confirm", "X\xE1c nh\u1EADn"), " ");
  }
}
function ViewRecruitBatchListComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function ViewRecruitBatchListComponent_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deleteSelected());
    });
    \u0275\u0275element(1, "i", 45);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r3.checkedSeqs().size === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, "common.delete", "X\xF3a"), " ");
  }
}
function ViewRecruitBatchListComponent_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function ViewRecruitBatchListComponent_button_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openImportPicker());
    });
    \u0275\u0275element(1, "i", 47);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("nzLoading", ctx_r3.importing());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, "rbl.btn.insertFile", "Ch\xE8n file"), " ");
  }
}
function ViewRecruitBatchListComponent_tr_133_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 48);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewRecruitBatchListComponent_tr_134_label_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 21);
    \u0275\u0275listener("ngModelChange", function ViewRecruitBatchListComponent_tr_134_label_4_Template_label_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const row_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleChecked(row_r9.seq, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r3.isChecked(row_r9.seq));
    \u0275\u0275control();
  }
}
function ViewRecruitBatchListComponent_tr_134_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function ViewRecruitBatchListComponent_tr_134_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 58);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function ViewRecruitBatchListComponent_tr_134_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 49);
    \u0275\u0275listener("click", function ViewRecruitBatchListComponent_tr_134_Template_tr_click_0_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openEditModal(row_r9));
    });
    \u0275\u0275elementStart(1, "td", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 51);
    \u0275\u0275listener("click", function ViewRecruitBatchListComponent_tr_134_Template_td_click_3_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(4, ViewRecruitBatchListComponent_tr_134_label_4_Template, 1, 1, "label", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 50);
    \u0275\u0275template(6, ViewRecruitBatchListComponent_tr_134_span_6_Template, 2, 0, "span", 53)(7, ViewRecruitBatchListComponent_tr_134_span_7_Template, 2, 0, "span", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 55);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 56);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 56);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 56);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 56);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "td");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "td");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "td");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "td");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "td", 56);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "td", 56);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "td", 56);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "td", 56);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "td");
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "td");
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "td", 56);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "td");
    \u0275\u0275text(51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "td");
    \u0275\u0275text(53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "td");
    \u0275\u0275text(55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "td", 56);
    \u0275\u0275text(57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "td");
    \u0275\u0275text(59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "td");
    \u0275\u0275text(61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "td");
    \u0275\u0275text(63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "td");
    \u0275\u0275text(65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "td");
    \u0275\u0275text(67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "td");
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("rbl-row-processed", row_r9.activity === "1");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r3.pageIndex - 1) * ctx_r3.pageSize + i_r11 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.isRowSelectable(row_r9));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r9.activity === "1");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r9.activity !== "1");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.vietnamName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.empId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.englishName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.dob);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.dateStarted);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.endProbationDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.joinTypeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.joinDetailTypeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.deptName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.postGradeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.postFamilyName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.mainBusinessName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.empTypeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.positionNoName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.costCenter);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.sexName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.nationalityName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.nationName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.maritalStatusName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.finalDegreeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.endDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.institutionName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.subjectName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.idcardNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.idcardSDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.issuingAuthority);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.emailSecond);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.homePhone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.telephone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.addressContent);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.regPlace);
  }
}
function ViewRecruitBatchListComponent_ng_container_139_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 59)(2, "label", 60);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "nz-date-picker", 61);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitBatchListComponent_ng_container_139_Template_nz_date_picker_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.regDatePicker, $event) || (ctx_r3.regDatePicker = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "label", 62);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "textarea", 63);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitBatchListComponent_ng_container_139_Template_textarea_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.regRemark, $event) || (ctx_r3.regRemark = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 4, "rbl.modal.register.date", "Ng\xE0y \u0111\u0103ng k\xFD *"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.regDatePicker);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 7, "rbl.modal.register.remark", "Ghi ch\xFA"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.regRemark);
    \u0275\u0275control();
  }
}
function ViewRecruitBatchListComponent_ng_container_144_nz_option_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 41);
  }
  if (rf & 2) {
    const c_r14 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r14.codeNo)("nzLabel", c_r14.codeName);
  }
}
function ViewRecruitBatchListComponent_ng_container_144_nz_option_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 41);
  }
  if (rf & 2) {
    const c_r15 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r15.codeNo)("nzLabel", c_r15.codeName);
  }
}
function ViewRecruitBatchListComponent_ng_container_144_nz_option_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 41);
  }
  if (rf & 2) {
    const c_r16 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r16.codeNo)("nzLabel", c_r16.codeName);
  }
}
function ViewRecruitBatchListComponent_ng_container_144_nz_option_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 41);
  }
  if (rf & 2) {
    const c_r17 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r17.codeNo)("nzLabel", c_r17.codeName);
  }
}
function ViewRecruitBatchListComponent_ng_container_144_nz_option_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 41);
  }
  if (rf & 2) {
    const c_r18 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r18.codeNo)("nzLabel", c_r18.codeName);
  }
}
function ViewRecruitBatchListComponent_ng_container_144_nz_option_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 41);
  }
  if (rf & 2) {
    const c_r19 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r19.codeNo)("nzLabel", c_r19.codeName);
  }
}
function ViewRecruitBatchListComponent_ng_container_144_div_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.deptTreeErrorMessage());
  }
}
function ViewRecruitBatchListComponent_ng_container_144_nz_option_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 41);
  }
  if (rf & 2) {
    const c_r20 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r20.codeNo)("nzLabel", c_r20.codeName);
  }
}
function ViewRecruitBatchListComponent_ng_container_144_nz_option_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 41);
  }
  if (rf & 2) {
    const c_r21 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r21.codeNo)("nzLabel", c_r21.codeName);
  }
}
function ViewRecruitBatchListComponent_ng_container_144_nz_option_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 41);
  }
  if (rf & 2) {
    const c_r22 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r22.codeNo)("nzLabel", c_r22.codeName);
  }
}
function ViewRecruitBatchListComponent_ng_container_144_nz_option_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 41);
  }
  if (rf & 2) {
    const c_r23 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r23.codeNo)("nzLabel", c_r23.codeName);
  }
}
function ViewRecruitBatchListComponent_ng_container_144_nz_option_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 41);
  }
  if (rf & 2) {
    const c_r24 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r24.codeNo)("nzLabel", c_r24.codeName);
  }
}
function ViewRecruitBatchListComponent_ng_container_144_nz_option_146_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 41);
  }
  if (rf & 2) {
    const c_r25 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r25.codeNo)("nzLabel", c_r25.codeName);
  }
}
function ViewRecruitBatchListComponent_ng_container_144_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 64)(2, "div", 65);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 66)(6, "div", 67)(7, "label", 68);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 69);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 67)(12, "label", 68);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 70);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitBatchListComponent_ng_container_144_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.vietnamName, $event) || (ctx_r3.editForm.vietnamName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 67)(17, "label", 68);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 71);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitBatchListComponent_ng_container_144_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.englishName, $event) || (ctx_r3.editForm.englishName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 67)(22, "label", 68);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "nz-date-picker", 72);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitBatchListComponent_ng_container_144_Template_nz_date_picker_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.dobPicker, $event) || (ctx_r3.editForm.dobPicker = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 67)(27, "label", 68);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "nz-select", 73);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitBatchListComponent_ng_container_144_Template_nz_select_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.sexcode, $event) || (ctx_r3.editForm.sexcode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(31, ViewRecruitBatchListComponent_ng_container_144_nz_option_31_Template, 1, 2, "nz-option", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 67)(33, "label", 68);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "nz-select", 74);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitBatchListComponent_ng_container_144_Template_nz_select_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.nationalityCode, $event) || (ctx_r3.editForm.nationalityCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(37, ViewRecruitBatchListComponent_ng_container_144_nz_option_37_Template, 1, 2, "nz-option", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 67)(39, "label", 68);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "nz-select", 75);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitBatchListComponent_ng_container_144_Template_nz_select_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.nationCode, $event) || (ctx_r3.editForm.nationCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(43, ViewRecruitBatchListComponent_ng_container_144_nz_option_43_Template, 1, 2, "nz-option", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 67)(45, "label", 68);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "nz-select", 76);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitBatchListComponent_ng_container_144_Template_nz_select_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.maritalStatusCode, $event) || (ctx_r3.editForm.maritalStatusCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(49, ViewRecruitBatchListComponent_ng_container_144_nz_option_49_Template, 1, 2, "nz-option", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 65);
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 66)(54, "div", 67)(55, "label", 68);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "nz-date-picker", 77);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitBatchListComponent_ng_container_144_Template_nz_date_picker_ngModelChange_58_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.dateStartedPicker, $event) || (ctx_r3.editForm.dateStartedPicker = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 67)(60, "label", 68);
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "nz-date-picker", 78);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitBatchListComponent_ng_container_144_Template_nz_date_picker_ngModelChange_63_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.endProbationDatePicker, $event) || (ctx_r3.editForm.endProbationDatePicker = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 67)(65, "label", 68);
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "nz-select", 79);
    \u0275\u0275listener("ngModelChange", function ViewRecruitBatchListComponent_ng_container_144_Template_nz_select_ngModelChange_68_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onEditJoinTypeChange($event));
    });
    \u0275\u0275template(69, ViewRecruitBatchListComponent_ng_container_144_nz_option_69_Template, 1, 2, "nz-option", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 67)(71, "label", 68);
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "nz-select", 80);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitBatchListComponent_ng_container_144_Template_nz_select_ngModelChange_74_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.joinDetailType, $event) || (ctx_r3.editForm.joinDetailType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(75, ViewRecruitBatchListComponent_ng_container_144_nz_option_75_Template, 1, 2, "nz-option", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 67)(77, "label", 68);
    \u0275\u0275text(78);
    \u0275\u0275pipe(79, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "nz-tree-select", 81);
    \u0275\u0275pipe(81, "translate");
    \u0275\u0275listener("ngModelChange", function ViewRecruitBatchListComponent_ng_container_144_Template_nz_tree_select_ngModelChange_80_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onEditDeptnoChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275template(82, ViewRecruitBatchListComponent_ng_container_144_div_82_Template, 2, 1, "div", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "div", 67)(84, "label", 68);
    \u0275\u0275text(85);
    \u0275\u0275pipe(86, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "nz-select", 83);
    \u0275\u0275listener("ngModelChange", function ViewRecruitBatchListComponent_ng_container_144_Template_nz_select_ngModelChange_87_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onEditPostFamilyChange($event));
    });
    \u0275\u0275template(88, ViewRecruitBatchListComponent_ng_container_144_nz_option_88_Template, 1, 2, "nz-option", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "div", 67)(90, "label", 68);
    \u0275\u0275text(91);
    \u0275\u0275pipe(92, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "nz-select", 84);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitBatchListComponent_ng_container_144_Template_nz_select_ngModelChange_93_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.postGradeNo, $event) || (ctx_r3.editForm.postGradeNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(94, ViewRecruitBatchListComponent_ng_container_144_nz_option_94_Template, 1, 2, "nz-option", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div", 67)(96, "label", 68);
    \u0275\u0275text(97);
    \u0275\u0275pipe(98, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "nz-select", 85);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitBatchListComponent_ng_container_144_Template_nz_select_ngModelChange_99_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.positionNo, $event) || (ctx_r3.editForm.positionNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(100, ViewRecruitBatchListComponent_ng_container_144_nz_option_100_Template, 1, 2, "nz-option", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "div", 67)(102, "label", 68);
    \u0275\u0275text(103);
    \u0275\u0275pipe(104, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "nz-select", 86);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitBatchListComponent_ng_container_144_Template_nz_select_ngModelChange_105_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.empTypeCode, $event) || (ctx_r3.editForm.empTypeCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(106, ViewRecruitBatchListComponent_ng_container_144_nz_option_106_Template, 1, 2, "nz-option", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "div", 67)(108, "label", 68);
    \u0275\u0275text(109);
    \u0275\u0275pipe(110, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "nz-select", 87);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitBatchListComponent_ng_container_144_Template_nz_select_ngModelChange_111_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.mainBusiness, $event) || (ctx_r3.editForm.mainBusiness = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(112, ViewRecruitBatchListComponent_ng_container_144_nz_option_112_Template, 1, 2, "nz-option", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "div", 67)(114, "label", 68);
    \u0275\u0275text(115);
    \u0275\u0275pipe(116, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitBatchListComponent_ng_container_144_Template_input_ngModelChange_117_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.costCenter, $event) || (ctx_r3.editForm.costCenter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(118, "div", 65);
    \u0275\u0275text(119);
    \u0275\u0275pipe(120, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "div", 66)(122, "div", 89)(123, "label", 68);
    \u0275\u0275text(124);
    \u0275\u0275pipe(125, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "input", 90);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitBatchListComponent_ng_container_144_Template_input_ngModelChange_126_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.idcardNo, $event) || (ctx_r3.editForm.idcardNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "div", 89)(128, "label", 68);
    \u0275\u0275text(129);
    \u0275\u0275pipe(130, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "nz-date-picker", 91);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitBatchListComponent_ng_container_144_Template_nz_date_picker_ngModelChange_131_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.idcardSDatePicker, $event) || (ctx_r3.editForm.idcardSDatePicker = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "div", 89)(133, "label", 68);
    \u0275\u0275text(134);
    \u0275\u0275pipe(135, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "input", 92);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitBatchListComponent_ng_container_144_Template_input_ngModelChange_136_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.issuingAuthority, $event) || (ctx_r3.editForm.issuingAuthority = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(137, "div", 65);
    \u0275\u0275text(138);
    \u0275\u0275pipe(139, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "div", 66)(141, "div", 67)(142, "label", 68);
    \u0275\u0275text(143);
    \u0275\u0275pipe(144, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(145, "nz-select", 93);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitBatchListComponent_ng_container_144_Template_nz_select_ngModelChange_145_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.finalDegreeCode, $event) || (ctx_r3.editForm.finalDegreeCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(146, ViewRecruitBatchListComponent_ng_container_144_nz_option_146_Template, 1, 2, "nz-option", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(147, "div", 67)(148, "label", 68);
    \u0275\u0275text(149);
    \u0275\u0275pipe(150, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "nz-date-picker", 94);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitBatchListComponent_ng_container_144_Template_nz_date_picker_ngModelChange_151_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.endDatePicker, $event) || (ctx_r3.editForm.endDatePicker = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(152, "div", 67)(153, "label", 68);
    \u0275\u0275text(154);
    \u0275\u0275pipe(155, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(156, "input", 95);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitBatchListComponent_ng_container_144_Template_input_ngModelChange_156_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.institutionName, $event) || (ctx_r3.editForm.institutionName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(157, "div", 67)(158, "label", 68);
    \u0275\u0275text(159);
    \u0275\u0275pipe(160, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(161, "input", 96);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitBatchListComponent_ng_container_144_Template_input_ngModelChange_161_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.subjectName, $event) || (ctx_r3.editForm.subjectName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(162, "div", 65);
    \u0275\u0275text(163);
    \u0275\u0275pipe(164, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(165, "div", 97)(166, "div", 89)(167, "label", 68);
    \u0275\u0275text(168);
    \u0275\u0275pipe(169, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(170, "input", 98);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitBatchListComponent_ng_container_144_Template_input_ngModelChange_170_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.emailSecond, $event) || (ctx_r3.editForm.emailSecond = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(171, "div", 89)(172, "label", 68);
    \u0275\u0275text(173);
    \u0275\u0275pipe(174, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(175, "input", 99);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitBatchListComponent_ng_container_144_Template_input_ngModelChange_175_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.homePhone, $event) || (ctx_r3.editForm.homePhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(176, "div", 89)(177, "label", 68);
    \u0275\u0275text(178);
    \u0275\u0275pipe(179, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(180, "input", 100);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitBatchListComponent_ng_container_144_Template_input_ngModelChange_180_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.telephone, $event) || (ctx_r3.editForm.telephone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(181, "div", 101)(182, "label", 68);
    \u0275\u0275text(183);
    \u0275\u0275pipe(184, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(185, "input", 102);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitBatchListComponent_ng_container_144_Template_input_ngModelChange_185_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.addressContent, $event) || (ctx_r3.editForm.addressContent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(186, "div", 101)(187, "label", 68);
    \u0275\u0275text(188);
    \u0275\u0275pipe(189, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(190, "input", 103);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitBatchListComponent_ng_container_144_Template_input_ngModelChange_190_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.regPlace, $event) || (ctx_r3.editForm.regPlace = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 112, "rbl.modal.edit.section.personal", "Th\xF4ng tin c\xE1 nh\xE2n"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 115, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r3.editForm.empId);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 118, "common.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.vietnamName);
    \u0275\u0275property("disabled", !ctx_r3.canEditRow);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 121, "rbl.modal.edit.englishName", "T\xEAn ti\u1EBFng Anh"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.englishName);
    \u0275\u0275property("disabled", !ctx_r3.canEditRow);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 124, "rbl.modal.edit.dob", "Ng\xE0y sinh"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.dobPicker);
    \u0275\u0275property("nzDisabled", !ctx_r3.canEditRow);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 127, "rbl.modal.edit.sexcode", "Gi\u1EDBi t\xEDnh"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.sexcode);
    \u0275\u0275property("nzDisabled", !ctx_r3.canEditRow);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.sexOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 130, "rbl.modal.edit.nationalityCode", "Qu\u1ED1c t\u1ECBch"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.nationalityCode);
    \u0275\u0275property("nzDisabled", !ctx_r3.canEditRow);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.nationalityOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 133, "rbl.modal.edit.nationCode", "D\xE2n t\u1ED9c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.nationCode);
    \u0275\u0275property("nzDisabled", !ctx_r3.canEditRow);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.nationOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(47, 136, "rbl.modal.edit.maritalStatusCode", "T\xECnh tr\u1EA1ng h\xF4n nh\xE2n"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.maritalStatusCode);
    \u0275\u0275property("nzDisabled", !ctx_r3.canEditRow);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.maritalStatusOptions());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(52, 139, "rbl.modal.edit.section.work", "Th\xF4ng tin c\xF4ng vi\u1EC7c"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 142, "rbl.modal.edit.dateStarted", "Ng\xE0y v\xE0o l\xE0m"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.dateStartedPicker);
    \u0275\u0275property("nzDisabled", !ctx_r3.canEditRow);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(62, 145, "rbl.modal.edit.endProbation", "Ng\xE0y h\u1EBFt th\u1EED vi\u1EC7c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.endProbationDatePicker);
    \u0275\u0275property("nzDisabled", !ctx_r3.canEditRow);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(67, 148, "rbl.modal.edit.joinType", "Lo\u1EA1i nh\u1EADp"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r3.editForm.joinType)("nzDisabled", !ctx_r3.canEditRow);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.joinTypeOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(73, 151, "rbl.modal.edit.joinDetailType", "Chi ti\u1EBFt lo\u1EA1i nh\u1EADp"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.joinDetailType);
    \u0275\u0275property("nzDisabled", !ctx_r3.canEditRow);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.joinDetailTypeOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(79, 154, "rbl.modal.edit.dept", "Ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzNodes", ctx_r3.deptNodes())("ngModel", ctx_r3.editForm.deptno)("nzDisabled", !ctx_r3.canEditRow)("nzPlaceHolder", \u0275\u0275pipeBind2(81, 157, "recruit.list.placeholder.selectDept", "-- Ch\u1ECDn ph\xF2ng ban --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.deptTreeErrorMessage());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(86, 160, "rbl.modal.edit.postFamily", "Nh\xF3m nh\xE2n vi\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r3.editForm.postFamily)("nzDisabled", !ctx_r3.canEditRow);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.postFamilyOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(92, 163, "rbl.modal.edit.postGrade", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.postGradeNo);
    \u0275\u0275property("nzDisabled", !ctx_r3.canEditRow);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.postGradeOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(98, 166, "rbl.modal.edit.position", "Ch\u1EE9c danh"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.positionNo);
    \u0275\u0275property("nzDisabled", !ctx_r3.canEditRow);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.positionOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(104, 169, "rbl.modal.edit.empType", "Lo\u1EA1i nh\xE2n vi\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.empTypeCode);
    \u0275\u0275property("nzDisabled", !ctx_r3.canEditRow);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.empTypeOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(110, 172, "rbl.modal.edit.mainBusiness", "C\xF4ng vi\u1EC7c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.mainBusiness);
    \u0275\u0275property("nzDisabled", !ctx_r3.canEditRow);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.mainBusinessOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(116, 175, "rbl.modal.edit.costCenter", "M\xE3 chi ph\xED"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.costCenter);
    \u0275\u0275property("disabled", !ctx_r3.canEditRow);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(120, 178, "rbl.modal.edit.section.id", "Gi\u1EA5y t\u1EDD t\xF9y th\xE2n"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(125, 181, "rbl.modal.edit.idcardNo", "S\u1ED1 CMND/CCCD"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.idcardNo);
    \u0275\u0275property("disabled", !ctx_r3.canEditRow);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(130, 184, "rbl.modal.edit.idcardSDate", "Ng\xE0y c\u1EA5p"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.idcardSDatePicker);
    \u0275\u0275property("nzDisabled", !ctx_r3.canEditRow);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(135, 187, "rbl.modal.edit.issuingAuthority", "N\u01A1i c\u1EA5p"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.issuingAuthority);
    \u0275\u0275property("disabled", !ctx_r3.canEditRow);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(139, 190, "rbl.modal.edit.section.education", "Th\xF4ng tin h\u1ECDc v\u1EA5n"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(144, 193, "rbl.modal.edit.finalDegreeCode", "H\u1ECDc v\u1ECB cu\u1ED1i"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.finalDegreeCode);
    \u0275\u0275property("nzDisabled", !ctx_r3.canEditRow);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.degreeOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(150, 196, "rbl.modal.edit.endDate", "Ng\xE0y t\u1ED1t nghi\u1EC7p"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.endDatePicker);
    \u0275\u0275property("nzDisabled", !ctx_r3.canEditRow);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(155, 199, "rbl.modal.edit.institutionName", "T\xEAn tr\u01B0\u1EDDng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.institutionName);
    \u0275\u0275property("disabled", !ctx_r3.canEditRow);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(160, 202, "rbl.modal.edit.subjectName", "Chuy\xEAn ng\xE0nh"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.subjectName);
    \u0275\u0275property("disabled", !ctx_r3.canEditRow);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(164, 205, "rbl.modal.edit.section.contact", "Li\xEAn h\u1EC7 & \u0110\u1ECBa ch\u1EC9"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(169, 208, "rbl.modal.edit.emailSecond", "Email c\xE1 nh\xE2n"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.emailSecond);
    \u0275\u0275property("disabled", !ctx_r3.canEditRow);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(174, 211, "rbl.modal.edit.homePhone", "\u0110T nh\xE0"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.homePhone);
    \u0275\u0275property("disabled", !ctx_r3.canEditRow);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(179, 214, "rbl.modal.edit.telephone", "\u0110i\u1EC7n tho\u1EA1i c\xE1 nh\xE2n"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.telephone);
    \u0275\u0275property("disabled", !ctx_r3.canEditRow);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(184, 217, "rbl.modal.edit.addressContent", "\u0110\u1ECBa ch\u1EC9 hi\u1EC7n t\u1EA1i"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.addressContent);
    \u0275\u0275property("disabled", !ctx_r3.canEditRow);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(189, 220, "rbl.modal.edit.regPlace", "H\u1ED9 kh\u1EA9u th\u01B0\u1EDDng tr\xFA"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.regPlace);
    \u0275\u0275property("disabled", !ctx_r3.canEditRow);
    \u0275\u0275control();
  }
}
var I18N_KEYS = [
  "rbl.title",
  "rbl.label.registerDate",
  "rbl.btn.register",
  "rbl.btn.insertFile",
  "rbl.col.processed",
  "rbl.col.dateStarted",
  "rbl.col.joinType",
  "rbl.col.joinDetailType",
  "rbl.col.postFamily",
  "rbl.col.postGrade",
  "rbl.col.position",
  "rbl.col.empType",
  "rbl.col.mainBusiness",
  "rbl.col.costCenter",
  "rbl.col.emailSecond",
  "rbl.col.telephone",
  "rbl.col.regPlace",
  "rbl.modal.register.title",
  "rbl.modal.register.date",
  "rbl.modal.register.remark",
  "rbl.modal.edit.title",
  "rbl.modal.edit.dateStarted",
  "rbl.modal.edit.endProbation",
  "rbl.modal.edit.joinType",
  "rbl.modal.edit.joinDetailType",
  "rbl.modal.edit.dept",
  "rbl.modal.edit.postFamily",
  "rbl.modal.edit.postGrade",
  "rbl.modal.edit.position",
  "rbl.modal.edit.empType",
  "rbl.modal.edit.mainBusiness",
  "rbl.modal.edit.costCenter",
  "rbl.modal.edit.englishName",
  "rbl.modal.edit.dob",
  "rbl.modal.edit.sexcode",
  "rbl.modal.edit.nationalityCode",
  "rbl.modal.edit.nationCode",
  "rbl.modal.edit.maritalStatusCode",
  "rbl.modal.edit.finalDegreeCode",
  "rbl.modal.edit.endDate",
  "rbl.modal.edit.institutionName",
  "rbl.modal.edit.subjectName",
  "rbl.modal.edit.idcardNo",
  "rbl.modal.edit.idcardSDate",
  "rbl.modal.edit.issuingAuthority",
  "rbl.modal.edit.emailSecond",
  "rbl.modal.edit.homePhone",
  "rbl.modal.edit.telephone",
  "rbl.modal.edit.addressContent",
  "rbl.modal.edit.regPlace",
  "rbl.modal.edit.section.personal",
  "rbl.modal.edit.section.work",
  "rbl.modal.edit.section.education",
  "rbl.modal.edit.section.contact",
  "rbl.modal.edit.section.id",
  "rbl.js.selectRegister",
  "rbl.js.confirmExecute",
  "rbl.js.confirmDelete",
  "rbl.js.selectRow",
  "rbl.js.importSuccess",
  "rbl.js.importFailed",
  "recruit.list.placeholder.selectDept",
  "common.add",
  "common.delete",
  "common.save",
  "common.cancel",
  "common.search",
  "common.confirm",
  "common.success",
  "common.error",
  "common.noData",
  "common.empId",
  "common.empName",
  "common.deptName",
  "common.action",
  "common.totalRows",
  "common.loadFail",
  "common.exportExcel",
  "common.downloadTemplate",
  "common.importExcel",
  "common.stt",
  "mep.msg.loadDeptFailed",
  "recruit.list.field.englishName",
  "recruit.list.field.dob",
  "recruit.list.field.endProbationDate",
  "recruit.list.field.sexcode",
  "recruit.list.field.nationalityCode",
  "recruit.list.field.nationCode",
  "recruit.list.field.maritalStatusCode",
  "recruit.list.edu.finalDegree",
  "recruit.list.edu.endDate",
  "recruit.list.edu.institutionName",
  "recruit.list.edu.subject",
  "recruit.list.field.idcardNo",
  "recruit.list.field.idcardStartDate",
  "recruit.list.field.issuingAuthority",
  "recruit.list.field.homePhone",
  "recruit.list.field.addressContent"
];
var PAGE_SIZE = 50;
function emptyEditForm() {
  return {
    seq: "",
    empId: "",
    vietnamName: "",
    englishName: "",
    dobPicker: null,
    sexcode: null,
    nationalityCode: null,
    nationCode: null,
    maritalStatusCode: null,
    dateStartedPicker: null,
    endProbationDatePicker: null,
    joinType: null,
    joinDetailType: null,
    deptno: null,
    postFamily: null,
    postGradeNo: null,
    positionNo: null,
    empTypeCode: null,
    mainBusiness: null,
    costCenter: "",
    idcardNo: "",
    idcardSDatePicker: null,
    issuingAuthority: "",
    finalDegreeCode: null,
    endDatePicker: null,
    institutionName: "",
    subjectName: "",
    emailSecond: "",
    homePhone: "",
    telephone: "",
    addressContent: "",
    regPlace: "",
    activity: "0"
  };
}
var ViewRecruitBatchListComponent = class _ViewRecruitBatchListComponent {
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
  excelFileInputRef;
  pageSize = PAGE_SIZE;
  registers = signal(
    [],
    ...ngDevMode ? [{ debugName: "registers" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedRegisterSeq = null;
  rows = signal(
    [],
    ...ngDevMode ? [{ debugName: "rows" }] : (
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
  allProcessed = signal(
    false,
    ...ngDevMode ? [{ debugName: "allProcessed" }] : (
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
  importing = signal(
    false,
    ...ngDevMode ? [{ debugName: "importing" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // ==================== Modal Đăng ký ngày ====================
  registerModalVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "registerModalVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  registerSaving = signal(
    false,
    ...ngDevMode ? [{ debugName: "registerSaving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  regDatePicker = null;
  regRemark = "";
  // ==================== Modal Chỉnh sửa dòng ====================
  editModalVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "editModalVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editSaving = signal(
    false,
    ...ngDevMode ? [{ debugName: "editSaving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  editForm = emptyEditForm();
  // ==================== Danh mục (code list) + cây phòng ban ====================
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
  sexOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "sexOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  nationalityOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "nationalityOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  nationOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "nationOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  maritalStatusOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "maritalStatusOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  joinTypeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "joinTypeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  joinDetailTypeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "joinDetailTypeOptions" }] : (
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
  positionOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "positionOptions" }] : (
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
  mainBusinessOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "mainBusinessOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  degreeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "degreeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
    this.loadCodeOptions();
    this.loadRegisterList();
  }
  t(key, fallback) {
    return this.i18n.t(key, fallback);
  }
  // ==================== Đăng ký ngày (danh sách + chọn) ====================
  loadRegisterList(selectSeq) {
    this.api.getRegisterList().subscribe({
      next: (list) => {
        this.registers.set(list ?? []);
        const seq = selectSeq || this.selectedRegisterSeq;
        this.selectedRegisterSeq = seq && list?.some((r) => r.registerSeq === seq) ? seq : null;
        if (this.selectedRegisterSeq)
          this.search();
      },
      error: () => this.message.error(this.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"))
    });
  }
  onRegisterChange() {
    this.pageIndex = 1;
    this.checkedSeqs.set(/* @__PURE__ */ new Set());
    this.search();
  }
  search() {
    if (!this.selectedRegisterSeq) {
      this.rows.set([]);
      this.totalRecords.set(0);
      return;
    }
    this.loading.set(true);
    const params = {
      draw: this.pageIndex,
      start: (this.pageIndex - 1) * this.pageSize,
      length: this.pageSize,
      registerSeq: this.selectedRegisterSeq
    };
    this.api.getBatchList(params).subscribe({
      next: (res) => {
        this.rows.set(res.data ?? []);
        this.totalRecords.set(res.recordsTotal ?? 0);
        this.allProcessed.set(!!res.allProcessed);
        this.checkedSeqs.set(/* @__PURE__ */ new Set());
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
    this.search();
  }
  openRegisterModal() {
    this.regDatePicker = null;
    this.regRemark = "";
    this.registerModalVisible.set(true);
  }
  closeRegisterModal() {
    this.registerModalVisible.set(false);
  }
  saveRegister() {
    if (!this.regDatePicker) {
      this.message.warning(this.t("rbl.modal.register.date", "Ng\xE0y \u0111\u0103ng k\xFD *"));
      return;
    }
    this.registerSaving.set(true);
    this.api.register({ registerDate: formatDate(this.regDatePicker, "dd/MM/yyyy", "vi"), registerRemark: this.regRemark }).subscribe({
      next: (res) => {
        this.registerSaving.set(false);
        if (res.success) {
          this.registerModalVisible.set(false);
          this.loadRegisterList(res.registerSeq);
        } else {
          this.message.error(res.message || this.t("common.error", "L\u1ED7i"));
        }
      },
      error: () => {
        this.registerSaving.set(false);
        this.message.error(this.t("common.error", "L\u1ED7i"));
      }
    });
  }
  // ==================== Chọn dòng (checkbox) ====================
  isRowSelectable(row) {
    return String(row.activity) !== "1";
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
  get allChecked() {
    const selectable = this.rows().filter((r) => this.isRowSelectable(r));
    return selectable.length > 0 && selectable.every((r) => this.isChecked(r.seq));
  }
  toggleAllChecked(checked) {
    const next = new Set(this.checkedSeqs());
    this.rows().filter((r) => this.isRowSelectable(r)).forEach((r) => checked ? next.add(r.seq) : next.delete(r.seq));
    this.checkedSeqs.set(next);
  }
  deleteSelected() {
    const seqs = Array.from(this.checkedSeqs());
    if (!seqs.length) {
      this.message.warning(this.t("rbl.js.selectRow", "Vui l\xF2ng ch\u1ECDn \xEDt nh\u1EA5t m\u1ED9t d\xF2ng"));
      return;
    }
    this.modal.confirm({
      nzTitle: this.t("common.delete", "X\xF3a"),
      nzContent: this.t("rbl.js.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a kh\xF4ng?"),
      nzOnOk: () => {
        let remaining = seqs.length;
        let hasError = false;
        seqs.forEach((seq) => {
          this.api.deleteBatchItem(seq).subscribe({
            next: () => {
              remaining -= 1;
              if (remaining === 0) {
                if (hasError)
                  this.message.error(this.t("common.error", "L\u1ED7i"));
                else
                  this.message.success(this.t("common.success", "Th\xE0nh c\xF4ng"));
                this.search();
              }
            },
            error: () => {
              hasError = true;
              remaining -= 1;
              if (remaining === 0) {
                this.message.error(this.t("common.error", "L\u1ED7i"));
                this.search();
              }
            }
          });
        });
      }
    });
  }
  // ==================== Xác nhận nhận việc hàng loạt ====================
  confirmExecute() {
    if (!this.selectedRegisterSeq) {
      this.message.warning(this.t("rbl.js.selectRegister", "Vui l\xF2ng ch\u1ECDn Ng\xE0y \u0111\u0103ng k\xFD tr\u01B0\u1EDBc"));
      return;
    }
    this.modal.confirm({
      nzTitle: this.t("common.confirm", "X\xE1c nh\u1EADn"),
      nzContent: this.t("rbl.js.confirmExecute", "X\xE1c nh\u1EADn nh\u1EADn vi\u1EC7c h\xE0ng lo\u1EA1t?"),
      nzOnOk: () => {
        this.api.executeConfirmBatch(this.selectedRegisterSeq).subscribe({
          next: (res) => {
            if (res.success) {
              this.message.success(res.message || this.t("common.success", "Th\xE0nh c\xF4ng"));
              this.search();
            } else {
              this.message.error(res.message || this.t("common.error", "L\u1ED7i"));
            }
          },
          error: () => this.message.error(this.t("common.error", "L\u1ED7i"))
        });
      }
    });
  }
  // ==================== Import / Template / Export ====================
  downloadTemplate() {
    window.location.href = this.api.downloadTemplateUrl();
  }
  openImportPicker() {
    if (!this.selectedRegisterSeq) {
      this.message.warning(this.t("rbl.js.selectRegister", "Vui l\xF2ng ch\u1ECDn Ng\xE0y \u0111\u0103ng k\xFD tr\u01B0\u1EDBc"));
      return;
    }
    this.excelFileInputRef?.nativeElement.click();
  }
  onExcelFileSelected(event) {
    const input = event.target;
    const file = input.files?.[0];
    input.value = "";
    if (!file || !this.selectedRegisterSeq)
      return;
    this.importing.set(true);
    this.api.importExcel(file, this.selectedRegisterSeq).subscribe({
      next: (res) => {
        this.importing.set(false);
        if (res.success) {
          this.message.success(`${this.t("rbl.js.importSuccess", "Nh\u1EADp file th\xE0nh c\xF4ng")} (${res.successCount ?? 0} d\xF2ng)`);
        } else {
          this.message.warning(res.message || this.t("rbl.js.importFailed", "Nh\u1EADp file th\u1EA5t b\u1EA1i"));
        }
        this.search();
      },
      error: () => {
        this.importing.set(false);
        this.message.error(this.t("rbl.js.importFailed", "Nh\u1EADp file th\u1EA5t b\u1EA1i"));
      }
    });
  }
  /** Xuất excel client-side (xem docblock class - endpoint export ở backend không tồn tại). */
  exportExcel() {
    if (!this.selectedRegisterSeq) {
      this.message.warning(this.t("rbl.js.selectRegister", "Vui l\xF2ng ch\u1ECDn Ng\xE0y \u0111\u0103ng k\xFD tr\u01B0\u1EDBc"));
      return;
    }
    const t = (key, fallback) => this.i18n.t(key, fallback);
    const headers = [
      t("common.stt", "STT"),
      t("rbl.col.processed", "\u0110\xE3 x\u1EED l\xFD"),
      t("common.empName", "H\u1ECD t\xEAn"),
      t("common.empId", "M\xE3 nh\xE2n vi\xEAn"),
      t("recruit.list.field.englishName", "T\xEAn ti\u1EBFng Anh"),
      t("recruit.list.field.dob", "Ng\xE0y sinh"),
      t("rbl.col.dateStarted", "Ng\xE0y v\xE0o l\xE0m"),
      t("recruit.list.field.endProbationDate", "Ng\xE0y h\u1EBFt th\u1EED vi\u1EC7c"),
      t("rbl.col.joinType", "Lo\u1EA1i nh\u1EADp"),
      t("rbl.col.joinDetailType", "Chi ti\u1EBFt"),
      t("common.deptName", "Ph\xF2ng ban"),
      t("rbl.col.postGrade", "Ch\u1EE9c v\u1EE5"),
      t("rbl.col.postFamily", "Nh\xF3m nh\xE2n vi\xEAn"),
      t("rbl.col.mainBusiness", "C\xF4ng vi\u1EC7c"),
      t("rbl.col.empType", "Lo\u1EA1i nh\xE2n vi\xEAn"),
      t("rbl.col.position", "Ch\u1EE9c danh"),
      t("rbl.col.costCenter", "M\xE3 chi ph\xED"),
      t("recruit.list.field.sexcode", "Gi\u1EDBi t\xEDnh"),
      t("recruit.list.field.nationalityCode", "Qu\u1ED1c t\u1ECBch"),
      t("recruit.list.field.nationCode", "D\xE2n t\u1ED9c"),
      t("recruit.list.field.maritalStatusCode", "T\xECnh tr\u1EA1ng h\xF4n nh\xE2n"),
      t("recruit.list.edu.finalDegree", "H\u1ECDc v\u1ECB cu\u1ED1i"),
      t("recruit.list.edu.endDate", "\u0110\u1EBFn ng\xE0y TN"),
      t("recruit.list.edu.institutionName", "T\xEAn tr\u01B0\u1EDDng"),
      t("recruit.list.edu.subject", "Chuy\xEAn ng\xE0nh"),
      t("recruit.list.field.idcardNo", "S\u1ED1 CMND/CCCD"),
      t("recruit.list.field.idcardStartDate", "Ng\xE0y c\u1EA5p"),
      t("recruit.list.field.issuingAuthority", "N\u01A1i c\u1EA5p"),
      t("rbl.col.emailSecond", "Email c\xE1 nh\xE2n"),
      t("recruit.list.field.homePhone", "\u0110T nh\xE0"),
      t("rbl.col.telephone", "\u0110i\u1EC7n tho\u1EA1i"),
      t("recruit.list.field.addressContent", "\u0110\u1ECBa ch\u1EC9"),
      t("rbl.col.regPlace", "H\u1ED9 kh\u1EA9u")
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      r.activity === "1" ? "X" : "",
      r.vietnamName,
      r.empId,
      r.englishName,
      r.dob,
      r.dateStarted,
      r.endProbationDate,
      r.joinTypeName,
      r.joinDetailTypeName,
      r.deptName,
      r.postGradeName,
      r.postFamilyName,
      r.mainBusinessName,
      r.empTypeName,
      r.positionNoName,
      r.costCenter,
      r.sexName,
      r.nationalityName,
      r.nationName,
      r.maritalStatusName,
      r.finalDegreeName,
      r.endDate,
      r.institutionName,
      r.subjectName,
      r.idcardNo,
      r.idcardSDate,
      r.issuingAuthority,
      r.emailSecond,
      r.homePhone,
      r.telephone,
      r.addressContent,
      r.regPlace
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "NhanViecHangLoat");
    writeFileSync(workbook, "nhan_viec_hang_loat.xlsx");
  }
  // ==================== Modal chỉnh sửa dòng ====================
  openEditModal(row) {
    this.editForm = {
      seq: row.seq,
      empId: row.empId ?? "",
      vietnamName: row.vietnamName ?? "",
      englishName: row.englishName ?? "",
      dobPicker: this.toDate(row.dob),
      sexcode: row.sexcode ?? null,
      nationalityCode: row.nationalityCode ?? null,
      nationCode: row.nationCode ?? null,
      maritalStatusCode: row.maritalStatusCode ?? null,
      dateStartedPicker: this.toDate(row.dateStarted),
      endProbationDatePicker: this.toDate(row.endProbationDate),
      joinType: row.joinType ?? null,
      joinDetailType: row.joinDetailType ?? null,
      deptno: row.deptno ?? null,
      postFamily: row.postFamily ?? null,
      postGradeNo: row.postGradeNo ?? null,
      positionNo: row.positionNo ?? null,
      empTypeCode: row.empTypeCode ?? null,
      mainBusiness: row.mainBusiness ?? null,
      costCenter: row.costCenter ?? "",
      idcardNo: row.idcardNo ?? "",
      idcardSDatePicker: this.toDate(row.idcardSDate),
      issuingAuthority: row.issuingAuthority ?? "",
      finalDegreeCode: row.finalDegreeCode ?? null,
      endDatePicker: this.toDate(row.endDate),
      institutionName: row.institutionName ?? "",
      subjectName: row.subjectName ?? "",
      emailSecond: row.emailSecond ?? "",
      homePhone: row.homePhone ?? "",
      telephone: row.telephone ?? "",
      addressContent: row.addressContent ?? "",
      regPlace: row.regPlace ?? "",
      activity: row.activity ?? "0"
    };
    this.loadJoinDetailOptions(row.joinType);
    this.loadPostGradeOptions(row.postFamily);
    this.editModalVisible.set(true);
  }
  closeEditModal() {
    this.editModalVisible.set(false);
  }
  get canEditRow() {
    return this.editForm.activity !== "1";
  }
  onEditDeptnoChange(value) {
    this.editForm.deptno = value ?? "";
    this.editForm.costCenter = value ?? "";
  }
  onEditJoinTypeChange(value) {
    this.editForm.joinType = value ?? "";
    this.editForm.joinDetailType = "";
    this.loadJoinDetailOptions(value);
  }
  onEditPostFamilyChange(value) {
    this.editForm.postFamily = value ?? "";
    this.editForm.postGradeNo = "";
    this.loadPostGradeOptions(value);
  }
  loadJoinDetailOptions(joinType) {
    this.api.getCodeList(joinType || "14014036").subscribe((list) => this.joinDetailTypeOptions.set(list ?? []));
  }
  loadPostGradeOptions(postFamily) {
    this.api.getCodeList(postFamily || "400001").subscribe((list) => this.postGradeOptions.set(list ?? []));
  }
  saveEdit() {
    if (!this.editForm.seq || !this.canEditRow)
      return;
    const f = this.editForm;
    const dto = {
      seq: f.seq,
      vietnamName: f.vietnamName,
      englishName: f.englishName,
      dob: this.toYmd(f.dobPicker),
      dateStarted: this.toYmd(f.dateStartedPicker),
      endProbationDate: this.toYmd(f.endProbationDatePicker),
      joinType: f.joinType,
      joinDetailType: f.joinDetailType,
      deptno: f.deptno,
      postFamily: f.postFamily,
      postGradeNo: f.postGradeNo,
      positionNo: f.positionNo,
      empTypeCode: f.empTypeCode,
      mainBusiness: f.mainBusiness,
      costCenter: f.costCenter,
      sexcode: f.sexcode,
      nationalityCode: f.nationalityCode,
      nationCode: f.nationCode,
      maritalStatusCode: f.maritalStatusCode,
      finalDegreeCode: f.finalDegreeCode,
      endDate: this.toYmd(f.endDatePicker),
      institutionName: f.institutionName,
      subjectName: f.subjectName,
      idcardNo: f.idcardNo,
      idcardSDate: this.toYmd(f.idcardSDatePicker),
      issuingAuthority: f.issuingAuthority,
      emailSecond: f.emailSecond,
      homePhone: f.homePhone,
      telephone: f.telephone,
      addressContent: f.addressContent,
      regPlace: f.regPlace
    };
    this.editSaving.set(true);
    this.api.updateBatchItem(dto).subscribe({
      next: (res) => {
        this.editSaving.set(false);
        if (res.success) {
          this.editModalVisible.set(false);
          this.search();
        } else {
          this.message.error(res.message || this.t("common.error", "L\u1ED7i"));
        }
      },
      error: () => {
        this.editSaving.set(false);
        this.message.error(this.t("common.error", "L\u1ED7i"));
      }
    });
  }
  // ==================== Cây phòng ban + danh mục dùng chung ====================
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
  loadCodeOptions() {
    this.api.getCodeList("1324").subscribe((list) => this.sexOptions.set(list ?? []));
    this.api.getCodeList("870").subscribe((list) => this.nationalityOptions.set(list ?? []));
    this.api.getCodeList("210942").subscribe((list) => this.nationOptions.set(list ?? []));
    this.api.getCodeList("1709").subscribe((list) => this.maritalStatusOptions.set(list ?? []));
    this.api.getCodeList("400001").subscribe((list) => this.joinTypeOptions.set(list ?? []));
    this.api.getCodeList("14015812").subscribe((list) => this.postFamilyOptions.set(list ?? []));
    this.api.getCodeList("14014036").subscribe((list) => this.positionOptions.set(list ?? []));
    this.api.getCodeList("13864").subscribe((list) => this.empTypeOptions.set(list ?? []));
    this.api.getCodeList("400098").subscribe((list) => this.mainBusinessOptions.set(list ?? []));
    this.api.getCodeList("13769").subscribe((list) => this.degreeOptions.set(list ?? []));
  }
  // ==================== Helpers ngày tháng + hiển thị ====================
  toDate(dateStr) {
    if (!dateStr)
      return null;
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? null : d;
  }
  toYmd(d) {
    return d ? formatDate(d, "yyyy/MM/dd", "vi") : "";
  }
  formatDisplayDate(dateStr) {
    if (!dateStr)
      return "";
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? dateStr : formatDate(d, "dd/MM/yyyy", "vi");
  }
  static \u0275fac = function ViewRecruitBatchListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewRecruitBatchListComponent)(\u0275\u0275directiveInject(ViewRecruitBatchListService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService), \u0275\u0275directiveInject(NzModalService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewRecruitBatchListComponent, selectors: [["app-view-recruit-batch-list"]], viewQuery: function ViewRecruitBatchListComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.excelFileInputRef = _t.first);
    }
  }, decls: 145, vars: 200, consts: [["excelFileInput", ""], [3, "nzBodyStyle"], [1, "d-flex", "flex-wrap", "align-items-center", "gap-2", "mb-2"], [1, "form-label", "mb-0", "fw-semibold", "small"], ["name", "registerSeq", "nzAllowClear", "", 2, "min-width", "220px", 3, "ngModelChange", "ngModel"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "primary", "nzSize", "small", 3, "click"], [1, "bx", "bx-plus"], [1, "ms-auto", "d-flex", "flex-wrap", "gap-1"], ["nz-button", "", "nzSize", "small", 3, "click", 4, "ngIf"], ["nz-button", "", "nzType", "primary", "nzSize", "small", 3, "click", 4, "ngIf"], ["nz-button", "", "nzSize", "small", 3, "click"], [1, "bx", "bx-search"], ["nz-button", "", "nzDanger", "", "nzSize", "small", 3, "disabled", "click", 4, "ngIf"], [1, "bx", "bx-export"], ["nz-button", "", "nzSize", "small", 3, "nzLoading", "click", 4, "ngIf"], ["type", "file", "hidden", "", "accept", ".xlsx,.xls", 3, "change"], [1, "small", "text-muted", "mb-1"], ["nzShowSizeChanger", "", "nzSize", "small", 1, "table-nowrap", 3, "nzPageIndexChange", "nzData", "nzFrontPagination", "nzLoading", "nzTotal", "nzPageIndex", "nzPageSize", "nzShowPagination", "nzPageSizeOptions", "nzScroll"], ["nzLeft", "", "nzWidth", "44px", 1, "text-center"], ["nzLeft", "", "nzWidth", "36px", 1, "text-center"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel"], ["nzLeft", "", "nzWidth", "80px", 1, "text-center"], ["nzLeft", "", "nzWidth", "150px"], ["nzWidth", "100px", 1, "text-center"], ["nzWidth", "150px"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "120px", 1, "text-center"], ["nzWidth", "120px"], ["nzWidth", "130px"], ["nzWidth", "180px"], ["nzWidth", "80px", 1, "text-center"], ["nzWidth", "200px"], ["nzWidth", "160px"], ["nzWidth", "100px"], ["nzWidth", "110px"], [4, "ngIf"], ["class", "rbl-row", 3, "rbl-row-processed", "click", 4, "ngFor", "ngForOf"], ["nzWidth", "380px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], ["nzWidth", "900px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzOkDisabled", "nzCancelText"], [3, "nzValue", "nzLabel"], [1, "bx", "bx-download"], [1, "bx", "bx-check-double"], ["nz-button", "", "nzDanger", "", "nzSize", "small", 3, "click", "disabled"], [1, "bx", "bx-trash"], ["nz-button", "", "nzSize", "small", 3, "click", "nzLoading"], [1, "bx", "bx-upload"], ["colspan", "32", 1, "text-center", "text-muted"], [1, "rbl-row", 3, "click"], ["nzLeft", "", 1, "text-center"], ["nzLeft", "", 1, "text-center", 3, "click"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "badge bg-success", 4, "ngIf"], ["class", "badge bg-secondary", 4, "ngIf"], ["nzLeft", ""], [1, "text-center"], [1, "badge", "bg-success"], [1, "badge", "bg-secondary"], [1, "mb-2"], [1, "form-label", "small", "fw-semibold", "text-danger"], ["name", "regDate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], [1, "form-label", "small"], ["nz-input", "", "name", "regRemark", "rows", "2", "maxlength", "2000", 3, "ngModelChange", "ngModel"], [1, "rbl-modal-body"], [1, "text-muted", "small", "fw-semibold", "mb-1", "border-bottom", "pb-1"], [1, "row", "g-2", "mb-3"], [1, "col-md-3"], [1, "form-label", "small", "mb-0"], ["nz-input", "", "name", "editEmpId", "readonly", "", 3, "ngModel"], ["nz-input", "", "name", "editVietnamName", 3, "ngModelChange", "ngModel", "disabled"], ["nz-input", "", "name", "editEnglishName", 3, "ngModelChange", "ngModel", "disabled"], ["name", "editDob", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel", "nzDisabled"], ["name", "editSexcode", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzDisabled"], ["name", "editNationalityCode", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzDisabled"], ["name", "editNationCode", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzDisabled"], ["name", "editMaritalStatusCode", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzDisabled"], ["name", "editDateStarted", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel", "nzDisabled"], ["name", "editEndProbationDate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel", "nzDisabled"], ["name", "editJoinType", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzDisabled"], ["name", "editJoinDetailType", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzDisabled"], ["name", "editDeptno", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzDisabled", "nzPlaceHolder"], ["class", "text-danger small mt-1", 4, "ngIf"], ["name", "editPostFamily", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzDisabled"], ["name", "editPostGradeNo", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzDisabled"], ["name", "editPositionNo", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzDisabled"], ["name", "editEmpTypeCode", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzDisabled"], ["name", "editMainBusiness", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzDisabled"], ["nz-input", "", "name", "editCostCenter", 3, "ngModelChange", "ngModel", "disabled"], [1, "col-md-4"], ["nz-input", "", "name", "editIdcardNo", 3, "ngModelChange", "ngModel", "disabled"], ["name", "editIdcardSDate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel", "nzDisabled"], ["nz-input", "", "name", "editIssuingAuthority", 3, "ngModelChange", "ngModel", "disabled"], ["name", "editFinalDegreeCode", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzDisabled"], ["name", "editEndDate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel", "nzDisabled"], ["nz-input", "", "name", "editInstitutionName", 3, "ngModelChange", "ngModel", "disabled"], ["nz-input", "", "name", "editSubjectName", 3, "ngModelChange", "ngModel", "disabled"], [1, "row", "g-2"], ["nz-input", "", "name", "editEmailSecond", 3, "ngModelChange", "ngModel", "disabled"], ["nz-input", "", "name", "editHomePhone", 3, "ngModelChange", "ngModel", "disabled"], ["nz-input", "", "name", "editTelephone", 3, "ngModelChange", "ngModel", "disabled"], [1, "col-md-6"], ["nz-input", "", "name", "editAddressContent", 3, "ngModelChange", "ngModel", "disabled"], ["nz-input", "", "name", "editRegPlace", 3, "ngModelChange", "ngModel", "disabled"], [1, "text-danger", "small", "mt-1"]], template: function ViewRecruitBatchListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "nz-card", 1)(1, "div", 2)(2, "label", 3);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "nz-select", 4);
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitBatchListComponent_Template_nz_select_ngModelChange_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedRegisterSeq, $event) || (ctx.selectedRegisterSeq = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function ViewRecruitBatchListComponent_Template_nz_select_ngModelChange_5_listener() {
        return ctx.onRegisterChange();
      });
      \u0275\u0275template(6, ViewRecruitBatchListComponent_nz_option_6_Template, 1, 2, "nz-option", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275listener("click", function ViewRecruitBatchListComponent_Template_button_click_7_listener() {
        return ctx.openRegisterModal();
      });
      \u0275\u0275element(8, "i", 7);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 8);
      \u0275\u0275template(12, ViewRecruitBatchListComponent_button_12_Template, 4, 4, "button", 9)(13, ViewRecruitBatchListComponent_button_13_Template, 4, 4, "button", 10);
      \u0275\u0275elementStart(14, "button", 11);
      \u0275\u0275listener("click", function ViewRecruitBatchListComponent_Template_button_click_14_listener() {
        return ctx.search();
      });
      \u0275\u0275element(15, "i", 12);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(18, ViewRecruitBatchListComponent_button_18_Template, 4, 5, "button", 13);
      \u0275\u0275elementStart(19, "button", 11);
      \u0275\u0275listener("click", function ViewRecruitBatchListComponent_Template_button_click_19_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(20, "i", 14);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, ViewRecruitBatchListComponent_button_23_Template, 4, 5, "button", 15);
      \u0275\u0275elementStart(24, "input", 16, 0);
      \u0275\u0275listener("change", function ViewRecruitBatchListComponent_Template_input_change_24_listener($event) {
        return ctx.onExcelFileSelected($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "div", 17);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "nz-table", 18);
      \u0275\u0275listener("nzPageIndexChange", function ViewRecruitBatchListComponent_Template_nz_table_nzPageIndexChange_29_listener($event) {
        return ctx.onPageIndexChange($event);
      });
      \u0275\u0275elementStart(30, "thead")(31, "tr")(32, "th", 19);
      \u0275\u0275text(33, "No.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "th", 20)(35, "label", 21);
      \u0275\u0275listener("ngModelChange", function ViewRecruitBatchListComponent_Template_label_ngModelChange_35_listener($event) {
        return ctx.toggleAllChecked($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "th", 22);
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "th", 23);
      \u0275\u0275text(40);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "th", 24);
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "th", 25);
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "th", 24);
      \u0275\u0275text(49);
      \u0275\u0275pipe(50, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "th", 26);
      \u0275\u0275text(52);
      \u0275\u0275pipe(53, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "th", 27);
      \u0275\u0275text(55);
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "th", 28);
      \u0275\u0275text(58);
      \u0275\u0275pipe(59, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "th", 25);
      \u0275\u0275text(61);
      \u0275\u0275pipe(62, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "th", 25);
      \u0275\u0275text(64);
      \u0275\u0275pipe(65, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "th", 28);
      \u0275\u0275text(67);
      \u0275\u0275pipe(68, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "th", 29);
      \u0275\u0275text(70);
      \u0275\u0275pipe(71, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "th", 30);
      \u0275\u0275text(73);
      \u0275\u0275pipe(74, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "th", 28);
      \u0275\u0275text(76);
      \u0275\u0275pipe(77, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "th", 29);
      \u0275\u0275text(79);
      \u0275\u0275pipe(80, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "th", 24);
      \u0275\u0275text(82);
      \u0275\u0275pipe(83, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "th", 31);
      \u0275\u0275text(85);
      \u0275\u0275pipe(86, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "th", 24);
      \u0275\u0275text(88);
      \u0275\u0275pipe(89, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "th", 24);
      \u0275\u0275text(91);
      \u0275\u0275pipe(92, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "th", 29);
      \u0275\u0275text(94);
      \u0275\u0275pipe(95, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "th", 29);
      \u0275\u0275text(97);
      \u0275\u0275pipe(98, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "th", 26);
      \u0275\u0275text(100);
      \u0275\u0275pipe(101, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "th", 32);
      \u0275\u0275text(103);
      \u0275\u0275pipe(104, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "th", 25);
      \u0275\u0275text(106);
      \u0275\u0275pipe(107, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "th", 29);
      \u0275\u0275text(109);
      \u0275\u0275pipe(110, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "th", 24);
      \u0275\u0275text(112);
      \u0275\u0275pipe(113, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "th", 25);
      \u0275\u0275text(115);
      \u0275\u0275pipe(116, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "th", 33);
      \u0275\u0275text(118);
      \u0275\u0275pipe(119, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "th", 34);
      \u0275\u0275text(121);
      \u0275\u0275pipe(122, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "th", 35);
      \u0275\u0275text(124);
      \u0275\u0275pipe(125, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "th", 32);
      \u0275\u0275text(127);
      \u0275\u0275pipe(128, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "th", 25);
      \u0275\u0275text(130);
      \u0275\u0275pipe(131, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(132, "tbody");
      \u0275\u0275template(133, ViewRecruitBatchListComponent_tr_133_Template, 4, 4, "tr", 36)(134, ViewRecruitBatchListComponent_tr_134_Template, 70, 37, "tr", 37);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(135, "nz-modal", 38);
      \u0275\u0275pipe(136, "translate");
      \u0275\u0275pipe(137, "translate");
      \u0275\u0275pipe(138, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewRecruitBatchListComponent_Template_nz_modal_nzOnCancel_135_listener() {
        return ctx.closeRegisterModal();
      })("nzOnOk", function ViewRecruitBatchListComponent_Template_nz_modal_nzOnOk_135_listener() {
        return ctx.saveRegister();
      });
      \u0275\u0275template(139, ViewRecruitBatchListComponent_ng_container_139_Template, 11, 10, "ng-container", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "nz-modal", 40);
      \u0275\u0275pipe(141, "translate");
      \u0275\u0275pipe(142, "translate");
      \u0275\u0275pipe(143, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewRecruitBatchListComponent_Template_nz_modal_nzOnCancel_140_listener() {
        return ctx.closeEditModal();
      })("nzOnOk", function ViewRecruitBatchListComponent_Template_nz_modal_nzOnOk_140_listener() {
        return ctx.saveEdit();
      });
      \u0275\u0275template(144, ViewRecruitBatchListComponent_ng_container_144_Template, 191, 223, "ng-container", 39);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("nzBodyStyle", \u0275\u0275pureFunction0(197, _c1));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 68, "rbl.label.registerDate", "Ng\xE0y \u0111\u0103ng k\xFD"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedRegisterSeq);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.registers());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 71, "rbl.btn.register", "\u0110\u0103ng k\xFD"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.allProcessed());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.allProcessed());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(17, 74, "common.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.allProcessed());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(22, 77, "common.exportExcel", "Xu\u1EA5t Excel"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.allProcessed());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(28, 80, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", ctx.totalRecords());
      \u0275\u0275advance(2);
      \u0275\u0275property("nzData", ctx.rows())("nzFrontPagination", false)("nzLoading", ctx.loading())("nzTotal", ctx.totalRecords())("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzShowPagination", true)("nzPageSizeOptions", \u0275\u0275pureFunction0(198, _c2))("nzScroll", \u0275\u0275pureFunction0(199, _c3));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngModel", ctx.allChecked);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(38, 83, "rbl.col.processed", "\u0110\xE3 x\u1EED l\xFD"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 86, "common.empName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 89, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(47, 92, "recruit.list.field.englishName", "T\xEAn ti\u1EBFng Anh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 95, "recruit.list.field.dob", "Ng\xE0y sinh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(53, 98, "rbl.col.dateStarted", "Ng\xE0y v\xE0o l\xE0m"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(56, 101, "recruit.list.field.endProbationDate", "Ng\xE0y h\u1EBFt th\u1EED vi\u1EC7c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(59, 104, "rbl.col.joinType", "Lo\u1EA1i nh\u1EADp"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(62, 107, "rbl.col.joinDetailType", "Chi ti\u1EBFt"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(65, 110, "common.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(68, 113, "rbl.col.postGrade", "Ch\u1EE9c v\u1EE5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(71, 116, "rbl.col.postFamily", "Nh\xF3m nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(74, 119, "rbl.col.mainBusiness", "C\xF4ng vi\u1EC7c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(77, 122, "rbl.col.empType", "Lo\u1EA1i nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(80, 125, "rbl.col.position", "Ch\u1EE9c danh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(83, 128, "rbl.col.costCenter", "M\xE3 chi ph\xED"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(86, 131, "recruit.list.field.sexcode", "Gi\u1EDBi t\xEDnh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(89, 134, "recruit.list.field.nationalityCode", "Qu\u1ED1c t\u1ECBch"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(92, 137, "recruit.list.field.nationCode", "D\xE2n t\u1ED9c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(95, 140, "recruit.list.field.maritalStatusCode", "T\xECnh tr\u1EA1ng h\xF4n nh\xE2n"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(98, 143, "recruit.list.edu.finalDegree", "H\u1ECDc v\u1ECB cu\u1ED1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(101, 146, "recruit.list.edu.endDate", "\u0110\u1EBFn ng\xE0y TN"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(104, 149, "recruit.list.edu.institutionName", "T\xEAn tr\u01B0\u1EDDng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(107, 152, "recruit.list.edu.subject", "Chuy\xEAn ng\xE0nh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(110, 155, "recruit.list.field.idcardNo", "S\u1ED1 CMND/CCCD"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(113, 158, "recruit.list.field.idcardStartDate", "Ng\xE0y c\u1EA5p"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(116, 161, "recruit.list.field.issuingAuthority", "N\u01A1i c\u1EA5p"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(119, 164, "rbl.col.emailSecond", "Email c\xE1 nh\xE2n"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(122, 167, "recruit.list.field.homePhone", "\u0110T nh\xE0"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(125, 170, "rbl.col.telephone", "\u0110i\u1EC7n tho\u1EA1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(128, 173, "recruit.list.field.addressContent", "\u0110\u1ECBa ch\u1EC9"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(131, 176, "rbl.col.regPlace", "H\u1ED9 kh\u1EA9u"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.rows());
      \u0275\u0275advance();
      \u0275\u0275property("nzVisible", ctx.registerModalVisible())("nzTitle", \u0275\u0275pipeBind2(136, 179, "rbl.modal.register.title", "\u0110\u0103ng k\xFD ng\xE0y"))("nzOkLoading", ctx.registerSaving())("nzOkText", \u0275\u0275pipeBind2(137, 182, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(138, 185, "common.cancel", "H\u1EE7y"));
      \u0275\u0275advance(5);
      \u0275\u0275property("nzVisible", ctx.editModalVisible())("nzTitle", \u0275\u0275pipeBind2(141, 188, "rbl.modal.edit.title", "Ch\u1EC9nh s\u1EEDa th\xF4ng tin"))("nzOkLoading", ctx.editSaving())("nzOkText", \u0275\u0275pipeBind2(142, 191, "common.save", "L\u01B0u"))("nzOkDisabled", !ctx.canEditRow)("nzCancelText", \u0275\u0275pipeBind2(143, 194, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCellFixedDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzCheckboxModule, NzCheckboxComponent, NzDatePickerModule, NzDatePickerComponent, NzTreeSelectModule, NzTreeSelectComponent, NzModalModule, NzModalComponent, NzModalContentDirective, TranslatePipe], styles: ["\n.rbl-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.rbl-row[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.rbl-row-processed[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.rbl-modal-body[_ngcontent-%COMP%] {\n  max-height: 70vh;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=view-recruit-batch-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewRecruitBatchListComponent, [{
    type: Component,
    args: [{ selector: "app-view-recruit-batch-list", standalone: true, imports: [
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
      NzModalModule,
      TranslatePipe
    ], template: `<nz-card [nzBodyStyle]="{ padding: '10px' }">
  <!-- \u2550\u2550\u2550\u2550 Toolbar \u2550\u2550\u2550\u2550 -->
  <div class="d-flex flex-wrap align-items-center gap-2 mb-2">
    <label class="form-label mb-0 fw-semibold small">{{ 'rbl.label.registerDate' | translate:'Ng\xE0y \u0111\u0103ng k\xFD' }}</label>
    <nz-select style="min-width:220px" [(ngModel)]="selectedRegisterSeq" name="registerSeq"
               (ngModelChange)="onRegisterChange()" nzAllowClear>
      <nz-option *ngFor="let r of registers()" [nzValue]="r.registerSeq"
                 [nzLabel]="(r.registerDate || '') + (r.registerRemark ? ' - ' + r.registerRemark : '')"></nz-option>
    </nz-select>
    <button nz-button nzType="primary" nzSize="small" (click)="openRegisterModal()">
      <i class="bx bx-plus"></i> {{ 'rbl.btn.register' | translate:'\u0110\u0103ng k\xFD' }}
    </button>

    <div class="ms-auto d-flex flex-wrap gap-1">
      <button *ngIf="!allProcessed()" nz-button nzSize="small" (click)="downloadTemplate()">
        <i class="bx bx-download"></i> {{ 'common.downloadTemplate' | translate:'T\u1EA3i File M\u1EABu' }}
      </button>
      <button *ngIf="!allProcessed()" nz-button nzType="primary" nzSize="small" (click)="confirmExecute()">
        <i class="bx bx-check-double"></i> {{ 'common.confirm' | translate:'X\xE1c nh\u1EADn' }}
      </button>
      <button nz-button nzSize="small" (click)="search()">
        <i class="bx bx-search"></i> {{ 'common.search' | translate:'Tra c\u1EE9u' }}
      </button>
      <button *ngIf="!allProcessed()" nz-button nzDanger nzSize="small"
              [disabled]="checkedSeqs().size === 0" (click)="deleteSelected()">
        <i class="bx bx-trash"></i> {{ 'common.delete' | translate:'X\xF3a' }}
      </button>
      <button nz-button nzSize="small" (click)="exportExcel()">
        <i class="bx bx-export"></i> {{ 'common.exportExcel' | translate:'Xu\u1EA5t Excel' }}
      </button>
      <button *ngIf="!allProcessed()" nz-button nzSize="small" [nzLoading]="importing()" (click)="openImportPicker()">
        <i class="bx bx-upload"></i> {{ 'rbl.btn.insertFile' | translate:'Ch\xE8n file' }}
      </button>
      <input #excelFileInput type="file" hidden accept=".xlsx,.xls" (change)="onExcelFileSelected($event)">
    </div>
  </div>

  <div class="small text-muted mb-1">{{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ totalRecords() }}</div>

  <!-- \u2550\u2550\u2550\u2550 B\u1EA3ng d\u1EEF li\u1EC7u \u2550\u2550\u2550\u2550 -->
  <nz-table [nzData]="rows()" [nzFrontPagination]="false" [nzLoading]="loading()"
            [nzTotal]="totalRecords()" [nzPageIndex]="pageIndex" [nzPageSize]="pageSize"
            [nzShowPagination]="true" [nzPageSizeOptions]="[20, 50, 100]" nzShowSizeChanger
            (nzPageIndexChange)="onPageIndexChange($event)"
            [nzScroll]="{ x: '4000px', y: 'calc(100vh - 320px)' }" nzSize="small" class="table-nowrap">
    <thead>
      <tr>
        <th class="text-center" nzLeft nzWidth="44px">No.</th>
        <th class="text-center" nzLeft nzWidth="36px">
          <label nz-checkbox [ngModel]="allChecked" (ngModelChange)="toggleAllChecked($event)"></label>
        </th>
        <th class="text-center" nzLeft nzWidth="80px">{{ 'rbl.col.processed' | translate:'\u0110\xE3 x\u1EED l\xFD' }}</th>
        <th nzLeft nzWidth="150px">{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
        <th class="text-center" nzWidth="100px">{{ 'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
        <th nzWidth="150px">{{ 'recruit.list.field.englishName' | translate:'T\xEAn ti\u1EBFng Anh' }}</th>
        <th class="text-center" nzWidth="100px">{{ 'recruit.list.field.dob' | translate:'Ng\xE0y sinh' }}</th>
        <th class="text-center" nzWidth="110px">{{ 'rbl.col.dateStarted' | translate:'Ng\xE0y v\xE0o l\xE0m' }}</th>
        <th class="text-center" nzWidth="120px">{{ 'recruit.list.field.endProbationDate' | translate:'Ng\xE0y h\u1EBFt th\u1EED vi\u1EC7c' }}</th>
        <th nzWidth="120px">{{ 'rbl.col.joinType' | translate:'Lo\u1EA1i nh\u1EADp' }}</th>
        <th nzWidth="150px">{{ 'rbl.col.joinDetailType' | translate:'Chi ti\u1EBFt' }}</th>
        <th nzWidth="150px">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
        <th nzWidth="120px">{{ 'rbl.col.postGrade' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
        <th nzWidth="130px">{{ 'rbl.col.postFamily' | translate:'Nh\xF3m nh\xE2n vi\xEAn' }}</th>
        <th nzWidth="180px">{{ 'rbl.col.mainBusiness' | translate:'C\xF4ng vi\u1EC7c' }}</th>
        <th nzWidth="120px">{{ 'rbl.col.empType' | translate:'Lo\u1EA1i nh\xE2n vi\xEAn' }}</th>
        <th nzWidth="130px">{{ 'rbl.col.position' | translate:'Ch\u1EE9c danh' }}</th>
        <th class="text-center" nzWidth="100px">{{ 'rbl.col.costCenter' | translate:'M\xE3 chi ph\xED' }}</th>
        <th class="text-center" nzWidth="80px">{{ 'recruit.list.field.sexcode' | translate:'Gi\u1EDBi t\xEDnh' }}</th>
        <th class="text-center" nzWidth="100px">{{ 'recruit.list.field.nationalityCode' | translate:'Qu\u1ED1c t\u1ECBch' }}</th>
        <th class="text-center" nzWidth="100px">{{ 'recruit.list.field.nationCode' | translate:'D\xE2n t\u1ED9c' }}</th>
        <th nzWidth="130px">{{ 'recruit.list.field.maritalStatusCode' | translate:'T\xECnh tr\u1EA1ng h\xF4n nh\xE2n' }}</th>
        <th nzWidth="130px">{{ 'recruit.list.edu.finalDegree' | translate:'H\u1ECDc v\u1ECB cu\u1ED1i' }}</th>
        <th class="text-center" nzWidth="110px">{{ 'recruit.list.edu.endDate' | translate:'\u0110\u1EBFn ng\xE0y TN' }}</th>
        <th nzWidth="200px">{{ 'recruit.list.edu.institutionName' | translate:'T\xEAn tr\u01B0\u1EDDng' }}</th>
        <th nzWidth="150px">{{ 'recruit.list.edu.subject' | translate:'Chuy\xEAn ng\xE0nh' }}</th>
        <th nzWidth="130px">{{ 'recruit.list.field.idcardNo' | translate:'S\u1ED1 CMND/CCCD' }}</th>
        <th class="text-center" nzWidth="100px">{{ 'recruit.list.field.idcardStartDate' | translate:'Ng\xE0y c\u1EA5p' }}</th>
        <th nzWidth="150px">{{ 'recruit.list.field.issuingAuthority' | translate:'N\u01A1i c\u1EA5p' }}</th>
        <th nzWidth="160px">{{ 'rbl.col.emailSecond' | translate:'Email c\xE1 nh\xE2n' }}</th>
        <th nzWidth="100px">{{ 'recruit.list.field.homePhone' | translate:'\u0110T nh\xE0' }}</th>
        <th nzWidth="110px">{{ 'rbl.col.telephone' | translate:'\u0110i\u1EC7n tho\u1EA1i' }}</th>
        <th nzWidth="200px">{{ 'recruit.list.field.addressContent' | translate:'\u0110\u1ECBa ch\u1EC9' }}</th>
        <th nzWidth="150px">{{ 'rbl.col.regPlace' | translate:'H\u1ED9 kh\u1EA9u' }}</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngIf="!loading() && rows().length === 0">
        <td colspan="32" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
      </tr>
      <tr *ngFor="let row of rows(); let i = index" class="rbl-row" [class.rbl-row-processed]="row.activity === '1'"
          (click)="openEditModal(row)">
        <td class="text-center" nzLeft>{{ (pageIndex - 1) * pageSize + i + 1 }}</td>
        <td class="text-center" nzLeft (click)="$event.stopPropagation()">
          <label *ngIf="isRowSelectable(row)" nz-checkbox [ngModel]="isChecked(row.seq)"
                 (ngModelChange)="toggleChecked(row.seq, $event)"></label>
        </td>
        <td class="text-center" nzLeft>
          <span *ngIf="row.activity === '1'" class="badge bg-success">&#10003;</span>
          <span *ngIf="row.activity !== '1'" class="badge bg-secondary">-</span>
        </td>
        <td nzLeft>{{ row.vietnamName }}</td>
        <td class="text-center">{{ row.empId }}</td>
        <td>{{ row.englishName }}</td>
        <td class="text-center">{{ row.dob }}</td>
        <td class="text-center">{{ row.dateStarted }}</td>
        <td class="text-center">{{ row.endProbationDate }}</td>
        <td>{{ row.joinTypeName }}</td>
        <td>{{ row.joinDetailTypeName }}</td>
        <td>{{ row.deptName }}</td>
        <td>{{ row.postGradeName }}</td>
        <td>{{ row.postFamilyName }}</td>
        <td>{{ row.mainBusinessName }}</td>
        <td>{{ row.empTypeName }}</td>
        <td>{{ row.positionNoName }}</td>
        <td class="text-center">{{ row.costCenter }}</td>
        <td class="text-center">{{ row.sexName }}</td>
        <td class="text-center">{{ row.nationalityName }}</td>
        <td class="text-center">{{ row.nationName }}</td>
        <td>{{ row.maritalStatusName }}</td>
        <td>{{ row.finalDegreeName }}</td>
        <td class="text-center">{{ row.endDate }}</td>
        <td>{{ row.institutionName }}</td>
        <td>{{ row.subjectName }}</td>
        <td>{{ row.idcardNo }}</td>
        <td class="text-center">{{ row.idcardSDate }}</td>
        <td>{{ row.issuingAuthority }}</td>
        <td>{{ row.emailSecond }}</td>
        <td>{{ row.homePhone }}</td>
        <td>{{ row.telephone }}</td>
        <td>{{ row.addressContent }}</td>
        <td>{{ row.regPlace }}</td>
      </tr>
    </tbody>
  </nz-table>
</nz-card>

<!-- \u2550\u2550\u2550\u2550 Modal: \u0110\u0103ng k\xFD ng\xE0y \u2550\u2550\u2550\u2550 -->
<nz-modal [nzVisible]="registerModalVisible()" [nzTitle]="'rbl.modal.register.title' | translate:'\u0110\u0103ng k\xFD ng\xE0y'"
          nzWidth="380px" [nzOkLoading]="registerSaving()"
          [nzOkText]="'common.save' | translate:'L\u01B0u'" [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'"
          (nzOnCancel)="closeRegisterModal()" (nzOnOk)="saveRegister()">
  <ng-container *nzModalContent>
    <div class="mb-2">
      <label class="form-label small fw-semibold text-danger">{{ 'rbl.modal.register.date' | translate:'Ng\xE0y \u0111\u0103ng k\xFD *' }}</label>
      <nz-date-picker class="w-100" [(ngModel)]="regDatePicker" name="regDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
    </div>
    <div>
      <label class="form-label small">{{ 'rbl.modal.register.remark' | translate:'Ghi ch\xFA' }}</label>
      <textarea nz-input [(ngModel)]="regRemark" name="regRemark" rows="2" maxlength="2000"></textarea>
    </div>
  </ng-container>
</nz-modal>

<!-- \u2550\u2550\u2550\u2550 Modal: Ch\u1EC9nh s\u1EEDa d\xF2ng \u2550\u2550\u2550\u2550 -->
<nz-modal [nzVisible]="editModalVisible()" [nzTitle]="'rbl.modal.edit.title' | translate:'Ch\u1EC9nh s\u1EEDa th\xF4ng tin'"
          nzWidth="900px" [nzOkLoading]="editSaving()" [nzOkText]="'common.save' | translate:'L\u01B0u'"
          [nzOkDisabled]="!canEditRow" [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'"
          (nzOnCancel)="closeEditModal()" (nzOnOk)="saveEdit()">
  <ng-container *nzModalContent>
    <div class="rbl-modal-body">
      <!-- Th\xF4ng tin c\xE1 nh\xE2n -->
      <div class="text-muted small fw-semibold mb-1 border-bottom pb-1">{{ 'rbl.modal.edit.section.personal' | translate:'Th\xF4ng tin c\xE1 nh\xE2n' }}</div>
      <div class="row g-2 mb-3">
        <div class="col-md-3">
          <label class="form-label small mb-0">{{ 'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</label>
          <input nz-input [ngModel]="editForm.empId" name="editEmpId" readonly>
        </div>
        <div class="col-md-3">
          <label class="form-label small mb-0">{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</label>
          <input nz-input [(ngModel)]="editForm.vietnamName" name="editVietnamName" [disabled]="!canEditRow">
        </div>
        <div class="col-md-3">
          <label class="form-label small mb-0">{{ 'rbl.modal.edit.englishName' | translate:'T\xEAn ti\u1EBFng Anh' }}</label>
          <input nz-input [(ngModel)]="editForm.englishName" name="editEnglishName" [disabled]="!canEditRow">
        </div>
        <div class="col-md-3">
          <label class="form-label small mb-0">{{ 'rbl.modal.edit.dob' | translate:'Ng\xE0y sinh' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="editForm.dobPicker" name="editDob" nzFormat="dd/MM/yyyy" [nzDisabled]="!canEditRow"></nz-date-picker>
        </div>
        <div class="col-md-3">
          <label class="form-label small mb-0">{{ 'rbl.modal.edit.sexcode' | translate:'Gi\u1EDBi t\xEDnh' }}</label>
          <nz-select class="w-100" [(ngModel)]="editForm.sexcode" name="editSexcode" nzAllowClear [nzDisabled]="!canEditRow">
            <nz-option *ngFor="let c of sexOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-3">
          <label class="form-label small mb-0">{{ 'rbl.modal.edit.nationalityCode' | translate:'Qu\u1ED1c t\u1ECBch' }}</label>
          <nz-select class="w-100" [(ngModel)]="editForm.nationalityCode" name="editNationalityCode" nzAllowClear [nzDisabled]="!canEditRow">
            <nz-option *ngFor="let c of nationalityOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-3">
          <label class="form-label small mb-0">{{ 'rbl.modal.edit.nationCode' | translate:'D\xE2n t\u1ED9c' }}</label>
          <nz-select class="w-100" [(ngModel)]="editForm.nationCode" name="editNationCode" nzAllowClear [nzDisabled]="!canEditRow">
            <nz-option *ngFor="let c of nationOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-3">
          <label class="form-label small mb-0">{{ 'rbl.modal.edit.maritalStatusCode' | translate:'T\xECnh tr\u1EA1ng h\xF4n nh\xE2n' }}</label>
          <nz-select class="w-100" [(ngModel)]="editForm.maritalStatusCode" name="editMaritalStatusCode" nzAllowClear [nzDisabled]="!canEditRow">
            <nz-option *ngFor="let c of maritalStatusOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
      </div>

      <!-- Th\xF4ng tin c\xF4ng vi\u1EC7c -->
      <div class="text-muted small fw-semibold mb-1 border-bottom pb-1">{{ 'rbl.modal.edit.section.work' | translate:'Th\xF4ng tin c\xF4ng vi\u1EC7c' }}</div>
      <div class="row g-2 mb-3">
        <div class="col-md-3">
          <label class="form-label small mb-0">{{ 'rbl.modal.edit.dateStarted' | translate:'Ng\xE0y v\xE0o l\xE0m' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="editForm.dateStartedPicker" name="editDateStarted" nzFormat="dd/MM/yyyy" [nzDisabled]="!canEditRow"></nz-date-picker>
        </div>
        <div class="col-md-3">
          <label class="form-label small mb-0">{{ 'rbl.modal.edit.endProbation' | translate:'Ng\xE0y h\u1EBFt th\u1EED vi\u1EC7c' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="editForm.endProbationDatePicker" name="editEndProbationDate" nzFormat="dd/MM/yyyy" [nzDisabled]="!canEditRow"></nz-date-picker>
        </div>
        <div class="col-md-3">
          <label class="form-label small mb-0">{{ 'rbl.modal.edit.joinType' | translate:'Lo\u1EA1i nh\u1EADp' }}</label>
          <nz-select class="w-100" [ngModel]="editForm.joinType" name="editJoinType"
                     (ngModelChange)="onEditJoinTypeChange($event)" nzAllowClear [nzDisabled]="!canEditRow">
            <nz-option *ngFor="let c of joinTypeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-3">
          <label class="form-label small mb-0">{{ 'rbl.modal.edit.joinDetailType' | translate:'Chi ti\u1EBFt lo\u1EA1i nh\u1EADp' }}</label>
          <nz-select class="w-100" [(ngModel)]="editForm.joinDetailType" name="editJoinDetailType" nzAllowClear [nzDisabled]="!canEditRow">
            <nz-option *ngFor="let c of joinDetailTypeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-3">
          <label class="form-label small mb-0">{{ 'rbl.modal.edit.dept' | translate:'Ph\xF2ng ban' }}</label>
          <nz-tree-select class="w-100" [nzNodes]="deptNodes()" [ngModel]="editForm.deptno" name="editDeptno"
                           (ngModelChange)="onEditDeptnoChange($event)" nzShowSearch nzAllowClear [nzDisabled]="!canEditRow"
                           [nzPlaceHolder]="'recruit.list.placeholder.selectDept' | translate:'-- Ch\u1ECDn ph\xF2ng ban --'"></nz-tree-select>
          <div *ngIf="deptTreeErrorMessage()" class="text-danger small mt-1">{{ deptTreeErrorMessage() }}</div>
        </div>
        <div class="col-md-3">
          <label class="form-label small mb-0">{{ 'rbl.modal.edit.postFamily' | translate:'Nh\xF3m nh\xE2n vi\xEAn' }}</label>
          <nz-select class="w-100" [ngModel]="editForm.postFamily" name="editPostFamily"
                     (ngModelChange)="onEditPostFamilyChange($event)" nzAllowClear [nzDisabled]="!canEditRow">
            <nz-option *ngFor="let c of postFamilyOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-3">
          <label class="form-label small mb-0">{{ 'rbl.modal.edit.postGrade' | translate:'Ch\u1EE9c v\u1EE5' }}</label>
          <nz-select class="w-100" [(ngModel)]="editForm.postGradeNo" name="editPostGradeNo" nzAllowClear [nzDisabled]="!canEditRow">
            <nz-option *ngFor="let c of postGradeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-3">
          <label class="form-label small mb-0">{{ 'rbl.modal.edit.position' | translate:'Ch\u1EE9c danh' }}</label>
          <nz-select class="w-100" [(ngModel)]="editForm.positionNo" name="editPositionNo" nzAllowClear [nzDisabled]="!canEditRow">
            <nz-option *ngFor="let c of positionOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-3">
          <label class="form-label small mb-0">{{ 'rbl.modal.edit.empType' | translate:'Lo\u1EA1i nh\xE2n vi\xEAn' }}</label>
          <nz-select class="w-100" [(ngModel)]="editForm.empTypeCode" name="editEmpTypeCode" nzAllowClear [nzDisabled]="!canEditRow">
            <nz-option *ngFor="let c of empTypeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-3">
          <label class="form-label small mb-0">{{ 'rbl.modal.edit.mainBusiness' | translate:'C\xF4ng vi\u1EC7c' }}</label>
          <nz-select class="w-100" [(ngModel)]="editForm.mainBusiness" name="editMainBusiness" nzAllowClear [nzDisabled]="!canEditRow">
            <nz-option *ngFor="let c of mainBusinessOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-3">
          <label class="form-label small mb-0">{{ 'rbl.modal.edit.costCenter' | translate:'M\xE3 chi ph\xED' }}</label>
          <input nz-input [(ngModel)]="editForm.costCenter" name="editCostCenter" [disabled]="!canEditRow">
        </div>
      </div>

      <!-- Gi\u1EA5y t\u1EDD t\xF9y th\xE2n -->
      <div class="text-muted small fw-semibold mb-1 border-bottom pb-1">{{ 'rbl.modal.edit.section.id' | translate:'Gi\u1EA5y t\u1EDD t\xF9y th\xE2n' }}</div>
      <div class="row g-2 mb-3">
        <div class="col-md-4">
          <label class="form-label small mb-0">{{ 'rbl.modal.edit.idcardNo' | translate:'S\u1ED1 CMND/CCCD' }}</label>
          <input nz-input [(ngModel)]="editForm.idcardNo" name="editIdcardNo" [disabled]="!canEditRow">
        </div>
        <div class="col-md-4">
          <label class="form-label small mb-0">{{ 'rbl.modal.edit.idcardSDate' | translate:'Ng\xE0y c\u1EA5p' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="editForm.idcardSDatePicker" name="editIdcardSDate" nzFormat="dd/MM/yyyy" [nzDisabled]="!canEditRow"></nz-date-picker>
        </div>
        <div class="col-md-4">
          <label class="form-label small mb-0">{{ 'rbl.modal.edit.issuingAuthority' | translate:'N\u01A1i c\u1EA5p' }}</label>
          <input nz-input [(ngModel)]="editForm.issuingAuthority" name="editIssuingAuthority" [disabled]="!canEditRow">
        </div>
      </div>

      <!-- H\u1ECDc v\u1EA5n -->
      <div class="text-muted small fw-semibold mb-1 border-bottom pb-1">{{ 'rbl.modal.edit.section.education' | translate:'Th\xF4ng tin h\u1ECDc v\u1EA5n' }}</div>
      <div class="row g-2 mb-3">
        <div class="col-md-3">
          <label class="form-label small mb-0">{{ 'rbl.modal.edit.finalDegreeCode' | translate:'H\u1ECDc v\u1ECB cu\u1ED1i' }}</label>
          <nz-select class="w-100" [(ngModel)]="editForm.finalDegreeCode" name="editFinalDegreeCode" nzAllowClear [nzDisabled]="!canEditRow">
            <nz-option *ngFor="let c of degreeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-3">
          <label class="form-label small mb-0">{{ 'rbl.modal.edit.endDate' | translate:'Ng\xE0y t\u1ED1t nghi\u1EC7p' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="editForm.endDatePicker" name="editEndDate" nzFormat="dd/MM/yyyy" [nzDisabled]="!canEditRow"></nz-date-picker>
        </div>
        <div class="col-md-3">
          <label class="form-label small mb-0">{{ 'rbl.modal.edit.institutionName' | translate:'T\xEAn tr\u01B0\u1EDDng' }}</label>
          <input nz-input [(ngModel)]="editForm.institutionName" name="editInstitutionName" [disabled]="!canEditRow">
        </div>
        <div class="col-md-3">
          <label class="form-label small mb-0">{{ 'rbl.modal.edit.subjectName' | translate:'Chuy\xEAn ng\xE0nh' }}</label>
          <input nz-input [(ngModel)]="editForm.subjectName" name="editSubjectName" [disabled]="!canEditRow">
        </div>
      </div>

      <!-- Li\xEAn h\u1EC7 & \u0110\u1ECBa ch\u1EC9 -->
      <div class="text-muted small fw-semibold mb-1 border-bottom pb-1">{{ 'rbl.modal.edit.section.contact' | translate:'Li\xEAn h\u1EC7 & \u0110\u1ECBa ch\u1EC9' }}</div>
      <div class="row g-2">
        <div class="col-md-4">
          <label class="form-label small mb-0">{{ 'rbl.modal.edit.emailSecond' | translate:'Email c\xE1 nh\xE2n' }}</label>
          <input nz-input [(ngModel)]="editForm.emailSecond" name="editEmailSecond" [disabled]="!canEditRow">
        </div>
        <div class="col-md-4">
          <label class="form-label small mb-0">{{ 'rbl.modal.edit.homePhone' | translate:'\u0110T nh\xE0' }}</label>
          <input nz-input [(ngModel)]="editForm.homePhone" name="editHomePhone" [disabled]="!canEditRow">
        </div>
        <div class="col-md-4">
          <label class="form-label small mb-0">{{ 'rbl.modal.edit.telephone' | translate:'\u0110i\u1EC7n tho\u1EA1i c\xE1 nh\xE2n' }}</label>
          <input nz-input [(ngModel)]="editForm.telephone" name="editTelephone" [disabled]="!canEditRow">
        </div>
        <div class="col-md-6">
          <label class="form-label small mb-0">{{ 'rbl.modal.edit.addressContent' | translate:'\u0110\u1ECBa ch\u1EC9 hi\u1EC7n t\u1EA1i' }}</label>
          <input nz-input [(ngModel)]="editForm.addressContent" name="editAddressContent" [disabled]="!canEditRow">
        </div>
        <div class="col-md-6">
          <label class="form-label small mb-0">{{ 'rbl.modal.edit.regPlace' | translate:'H\u1ED9 kh\u1EA9u th\u01B0\u1EDDng tr\xFA' }}</label>
          <input nz-input [(ngModel)]="editForm.regPlace" name="editRegPlace" [disabled]="!canEditRow">
        </div>
      </div>
    </div>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-recruit-batch-list/view-recruit-batch-list.component.css */\n.rbl-row {\n  cursor: pointer;\n}\n.rbl-row:hover {\n  background: #fafafa;\n}\n.rbl-row-processed {\n  color: #6c757d;\n}\n.rbl-modal-body {\n  max-height: 70vh;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=view-recruit-batch-list.component.css.map */\n"] }]
  }], () => [{ type: ViewRecruitBatchListService }, { type: I18nService }, { type: NzMessageService }, { type: NzModalService }], { excelFileInputRef: [{
    type: ViewChild,
    args: ["excelFileInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewRecruitBatchListComponent, { className: "ViewRecruitBatchListComponent", filePath: "src/app/view-recruit-batch-list/view-recruit-batch-list.component.ts", lineNumber: 145 });
})();
export {
  ViewRecruitBatchListComponent
};
//# debugId=80329da4-9c72-5e06-9119-f769b61c055a
//# sourceMappingURL=chunk-TKV3IN5Y.js.map
