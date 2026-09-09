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

// src/app/view-experience-batch-list/view-experience-batch-list.service.ts
var API_BASE = "/hrm/recruitManage/api";
var TEMPLATE_NAME = "StartPoint_add_Template";
var ViewExperienceBatchListService = class _ViewExperienceBatchListService {
  constructor(http) {
    this.http = http;
  }
  http;
  getRegisterList() {
    return this.http.get(`${API_BASE}/expBatch/registerList`, { withCredentials: true });
  }
  register(dto) {
    return this.http.post(`${API_BASE}/expBatch/register`, dto, { withCredentials: true });
  }
  getBatchList(params) {
    return this.http.post(`${API_BASE}/expBatch/list`, params, {
      withCredentials: true
    });
  }
  updateBatchItem(dto) {
    return this.http.post(`${API_BASE}/expBatch/update`, dto, { withCredentials: true });
  }
  deleteBatchItem(seq) {
    return this.http.post(`${API_BASE}/expBatch/delete`, null, {
      params: new HttpParams().set("seq", seq),
      withCredentials: true
    });
  }
  importExcel(file, registerSeq) {
    const fd = new FormData();
    fd.append("file", file);
    return this.http.post(`${API_BASE}/expBatch/import`, fd, {
      params: new HttpParams().set("registerSeq", registerSeq),
      withCredentials: true
    });
  }
  executeExpBatch(registerSeq) {
    return this.http.post(`${API_BASE}/execute`, null, {
      params: new HttpParams().set("personIds", registerSeq).set("type", "EXP_BATCH"),
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
  static \u0275fac = function ViewExperienceBatchListService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewExperienceBatchListService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewExperienceBatchListService, factory: _ViewExperienceBatchListService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewExperienceBatchListService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-experience-batch-list/view-experience-batch-list.component.ts
var _c0 = ["excelFileInput"];
var _c1 = () => ({ padding: "10px" });
var _c2 = () => [20, 50, 100];
var _c3 = () => ({ x: "1800px", y: "calc(100vh - 320px)" });
function ViewExperienceBatchListComponent_nz_option_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 36);
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    \u0275\u0275property("nzValue", r_r2.registerSeq)("nzLabel", (r_r2.registerDate || "") + (r_r2.registerRemark ? " - " + r_r2.registerRemark : ""));
  }
}
function ViewExperienceBatchListComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function ViewExperienceBatchListComponent_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.downloadTemplate());
    });
    \u0275\u0275element(1, "i", 37);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "common.downloadTemplate", "T\u1EA3i File M\u1EABu"), " ");
  }
}
function ViewExperienceBatchListComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function ViewExperienceBatchListComponent_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.confirmExecute());
    });
    \u0275\u0275element(1, "i", 38);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "common.confirm", "X\xE1c nh\u1EADn"), " ");
  }
}
function ViewExperienceBatchListComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function ViewExperienceBatchListComponent_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deleteSelected());
    });
    \u0275\u0275element(1, "i", 40);
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
function ViewExperienceBatchListComponent_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 41);
    \u0275\u0275listener("click", function ViewExperienceBatchListComponent_button_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openImportPicker());
    });
    \u0275\u0275element(1, "i", 42);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("nzLoading", ctx_r3.importing());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, "ebl.btn.insertFile", "Ch\xE8n file"), " ");
  }
}
function ViewExperienceBatchListComponent_tr_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 43);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewExperienceBatchListComponent_tr_80_label_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 21);
    \u0275\u0275listener("ngModelChange", function ViewExperienceBatchListComponent_tr_80_label_4_Template_label_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const row_r10 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleChecked(row_r10.seq, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r3.isChecked(row_r10.seq));
    \u0275\u0275control();
  }
}
function ViewExperienceBatchListComponent_tr_80_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function ViewExperienceBatchListComponent_tr_80_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function ViewExperienceBatchListComponent_tr_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 44);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 44);
    \u0275\u0275template(4, ViewExperienceBatchListComponent_tr_80_label_4_Template, 1, 1, "label", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 44);
    \u0275\u0275template(6, ViewExperienceBatchListComponent_tr_80_span_6_Template, 2, 0, "span", 46)(7, ViewExperienceBatchListComponent_tr_80_span_7_Template, 2, 0, "span", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 48);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 49);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 49);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
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
    \u0275\u0275elementStart(30, "td", 49);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "td", 49)(33, "button", 50);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275listener("click", function ViewExperienceBatchListComponent_tr_80_Template_button_click_33_listener() {
      const row_r10 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openEditModal(row_r10));
    });
    \u0275\u0275element(35, "i", 51);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r3.pageIndex - 1) * ctx_r3.pageSize + i_r11 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.isRowSelectable(row_r10));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r10.activity === "1");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r10.activity !== "1");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.empId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.startDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.transCodeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.transReasonName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.deptName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.postFamilyName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.postGradeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.positionNoName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.empTypeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.mainBusinessName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.costCenter);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(34, 17, "common.action", "S\u1EEDa"));
  }
}
function ViewExperienceBatchListComponent_ng_container_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 54)(2, "label", 55);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "nz-date-picker", 56);
    \u0275\u0275twoWayListener("ngModelChange", function ViewExperienceBatchListComponent_ng_container_85_Template_nz_date_picker_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.regDatePicker, $event) || (ctx_r3.regDatePicker = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "label", 57);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "textarea", 58);
    \u0275\u0275twoWayListener("ngModelChange", function ViewExperienceBatchListComponent_ng_container_85_Template_textarea_ngModelChange_10_listener($event) {
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 4, "ebl.modal.register.date", "Ng\xE0y \u0111\u0103ng k\xFD *"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.regDatePicker);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 7, "ebl.modal.register.remark", "Ghi ch\xFA"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.regRemark);
    \u0275\u0275control();
  }
}
function ViewExperienceBatchListComponent_ng_container_90_nz_option_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 36);
  }
  if (rf & 2) {
    const c_r14 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r14.codeNo)("nzLabel", c_r14.codeName);
  }
}
function ViewExperienceBatchListComponent_ng_container_90_nz_option_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 36);
  }
  if (rf & 2) {
    const c_r15 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r15.codeNo)("nzLabel", c_r15.codeName);
  }
}
function ViewExperienceBatchListComponent_ng_container_90_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.deptTreeErrorMessage());
  }
}
function ViewExperienceBatchListComponent_ng_container_90_nz_option_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 36);
  }
  if (rf & 2) {
    const c_r16 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r16.codeNo)("nzLabel", c_r16.codeName);
  }
}
function ViewExperienceBatchListComponent_ng_container_90_nz_option_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 36);
  }
  if (rf & 2) {
    const c_r17 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r17.codeNo)("nzLabel", c_r17.codeName);
  }
}
function ViewExperienceBatchListComponent_ng_container_90_nz_option_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 36);
  }
  if (rf & 2) {
    const c_r18 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r18.codeNo)("nzLabel", c_r18.codeName);
  }
}
function ViewExperienceBatchListComponent_ng_container_90_nz_option_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 36);
  }
  if (rf & 2) {
    const c_r19 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r19.codeNo)("nzLabel", c_r19.codeName);
  }
}
function ViewExperienceBatchListComponent_ng_container_90_nz_option_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 36);
  }
  if (rf & 2) {
    const c_r20 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r20.codeNo)("nzLabel", c_r20.codeName);
  }
}
function ViewExperienceBatchListComponent_ng_container_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 59)(2, "div", 60)(3, "label", 61);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 62);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 60)(8, "label", 61);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 63);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 60)(13, "label", 61);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "nz-date-picker", 64);
    \u0275\u0275twoWayListener("ngModelChange", function ViewExperienceBatchListComponent_ng_container_90_Template_nz_date_picker_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.startDatePicker, $event) || (ctx_r3.editForm.startDatePicker = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 60)(18, "label", 61);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "nz-select", 65);
    \u0275\u0275listener("ngModelChange", function ViewExperienceBatchListComponent_ng_container_90_Template_nz_select_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onEditTransCodeChange($event));
    });
    \u0275\u0275template(22, ViewExperienceBatchListComponent_ng_container_90_nz_option_22_Template, 1, 2, "nz-option", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 60)(24, "label", 61);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "nz-select", 66);
    \u0275\u0275twoWayListener("ngModelChange", function ViewExperienceBatchListComponent_ng_container_90_Template_nz_select_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.transReason, $event) || (ctx_r3.editForm.transReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(28, ViewExperienceBatchListComponent_ng_container_90_nz_option_28_Template, 1, 2, "nz-option", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 60)(30, "label", 61);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "nz-tree-select", 67);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewExperienceBatchListComponent_ng_container_90_Template_nz_tree_select_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.deptno, $event) || (ctx_r3.editForm.deptno = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275template(35, ViewExperienceBatchListComponent_ng_container_90_div_35_Template, 2, 1, "div", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 60)(37, "label", 61);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "nz-select", 69);
    \u0275\u0275listener("ngModelChange", function ViewExperienceBatchListComponent_ng_container_90_Template_nz_select_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onEditPostFamilyChange($event));
    });
    \u0275\u0275template(41, ViewExperienceBatchListComponent_ng_container_90_nz_option_41_Template, 1, 2, "nz-option", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 60)(43, "label", 61);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "nz-select", 70);
    \u0275\u0275twoWayListener("ngModelChange", function ViewExperienceBatchListComponent_ng_container_90_Template_nz_select_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.newPostGradeNo, $event) || (ctx_r3.editForm.newPostGradeNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(47, ViewExperienceBatchListComponent_ng_container_90_nz_option_47_Template, 1, 2, "nz-option", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 60)(49, "label", 61);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "nz-select", 71);
    \u0275\u0275twoWayListener("ngModelChange", function ViewExperienceBatchListComponent_ng_container_90_Template_nz_select_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.positionNo, $event) || (ctx_r3.editForm.positionNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(53, ViewExperienceBatchListComponent_ng_container_90_nz_option_53_Template, 1, 2, "nz-option", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 60)(55, "label", 61);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "nz-select", 72);
    \u0275\u0275twoWayListener("ngModelChange", function ViewExperienceBatchListComponent_ng_container_90_Template_nz_select_ngModelChange_58_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.empTypeCode, $event) || (ctx_r3.editForm.empTypeCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(59, ViewExperienceBatchListComponent_ng_container_90_nz_option_59_Template, 1, 2, "nz-option", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 60)(61, "label", 61);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "nz-select", 73);
    \u0275\u0275twoWayListener("ngModelChange", function ViewExperienceBatchListComponent_ng_container_90_Template_nz_select_ngModelChange_64_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.mainBusiness, $event) || (ctx_r3.editForm.mainBusiness = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(65, ViewExperienceBatchListComponent_ng_container_90_nz_option_65_Template, 1, 2, "nz-option", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 60)(67, "label", 61);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "input", 74);
    \u0275\u0275twoWayListener("ngModelChange", function ViewExperienceBatchListComponent_ng_container_90_Template_input_ngModelChange_70_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.costCenter, $event) || (ctx_r3.editForm.costCenter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 75)(72, "label", 61);
    \u0275\u0275text(73);
    \u0275\u0275pipe(74, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function ViewExperienceBatchListComponent_ng_container_90_Template_input_ngModelChange_75_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.editForm.remarks, $event) || (ctx_r3.editForm.remarks = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 36, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r3.editForm.empId);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 39, "common.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r3.editForm.localName);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 42, "ebl.col.startDate", "Th\u1EDDi gian"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.startDatePicker);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 45, "ebl.col.decision", "Quy\u1EBFt \u0111\u1ECBnh"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r3.editForm.transCode);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.transCodeOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 48, "ebl.col.reason", "L\xFD do"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.transReason);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.transReasonOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 51, "common.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzNodes", ctx_r3.deptNodes());
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.deptno);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(34, 54, "recruit.list.placeholder.selectDept", "-- Ch\u1ECDn ph\xF2ng ban --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.deptTreeErrorMessage());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 57, "ebl.col.group", "Nh\xF3m nh\xE2n vi\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r3.editForm.postFamily);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.postFamilyOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 60, "ebl.col.level", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.newPostGradeNo);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.postGradeOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 63, "ebl.col.jobTitle", "Ch\u1EE9c danh"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.positionNo);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.positionOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 66, "ebl.col.empType", "Lo\u1EA1i nh\xE2n vi\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.empTypeCode);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.empTypeOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(63, 69, "ebl.col.job", "C\xF4ng vi\u1EC7c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.mainBusiness);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.mainBusinessOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 72, "ebl.col.costCenter", "M\xE3 chi ph\xED"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.costCenter);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(74, 75, "common.remark", "Ghi ch\xFA"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.editForm.remarks);
    \u0275\u0275control();
  }
}
var I18N_KEYS = [
  "ebl.title",
  "ebl.label.registerDate",
  "ebl.btn.register",
  "ebl.btn.insertFile",
  "ebl.col.processed",
  "ebl.col.startDate",
  "ebl.col.decision",
  "ebl.col.reason",
  "ebl.col.group",
  "ebl.col.level",
  "ebl.col.jobTitle",
  "ebl.col.empType",
  "ebl.col.job",
  "ebl.col.costCenter",
  "ebl.modal.register.title",
  "ebl.modal.edit.title",
  "ebl.modal.register.date",
  "ebl.modal.register.remark",
  "ebl.js.selectRegister",
  "ebl.js.confirmExecute",
  "ebl.js.confirmDelete",
  "ebl.js.selectRow",
  "ebl.js.importSuccess",
  "ebl.js.importFailed",
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
  "common.remark",
  "common.stt",
  "mep.msg.loadDeptFailed"
];
var PAGE_SIZE = 50;
function emptyEditForm() {
  return {
    seq: "",
    empId: "",
    localName: "",
    startDatePicker: null,
    transCode: null,
    transReason: null,
    deptno: null,
    postFamily: null,
    newPostGradeNo: null,
    positionNo: null,
    empTypeCode: null,
    mainBusiness: null,
    costCenter: "",
    remarks: ""
  };
}
var ViewExperienceBatchListComponent = class _ViewExperienceBatchListComponent {
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
  transCodeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "transCodeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  transReasonOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "transReasonOptions" }] : (
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
      this.message.warning(this.t("ebl.modal.register.date", "Ng\xE0y \u0111\u0103ng k\xFD *"));
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
      this.message.warning(this.t("ebl.js.selectRow", "Vui l\xF2ng ch\u1ECDn \xEDt nh\u1EA5t m\u1ED9t d\xF2ng"));
      return;
    }
    this.modal.confirm({
      nzTitle: this.t("common.delete", "X\xF3a"),
      nzContent: this.t("ebl.js.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a kh\xF4ng?"),
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
  // ==================== Xác nhận thực hiện hàng loạt ====================
  confirmExecute() {
    if (!this.selectedRegisterSeq) {
      this.message.warning(this.t("ebl.js.selectRegister", "Vui l\xF2ng ch\u1ECDn Ng\xE0y \u0111\u0103ng k\xFD tr\u01B0\u1EDBc"));
      return;
    }
    this.modal.confirm({
      nzTitle: this.t("common.confirm", "X\xE1c nh\u1EADn"),
      nzContent: this.t("ebl.js.confirmExecute", "X\xE1c nh\u1EADn th\u1EF1c hi\u1EC7n quy\u1EBFt \u0111\u1ECBnh h\xE0ng lo\u1EA1t?"),
      nzOnOk: () => {
        this.api.executeExpBatch(this.selectedRegisterSeq).subscribe({
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
      this.message.warning(this.t("ebl.js.selectRegister", "Vui l\xF2ng ch\u1ECDn Ng\xE0y \u0111\u0103ng k\xFD tr\u01B0\u1EDBc"));
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
          this.message.success(`${this.t("ebl.js.importSuccess", "Nh\u1EADp file th\xE0nh c\xF4ng")} (${res.successCount ?? 0} d\xF2ng)`);
        } else {
          this.message.warning(res.message || this.t("ebl.js.importFailed", "Nh\u1EADp file th\u1EA5t b\u1EA1i"));
        }
        this.search();
      },
      error: () => {
        this.importing.set(false);
        this.message.error(this.t("ebl.js.importFailed", "Nh\u1EADp file th\u1EA5t b\u1EA1i"));
      }
    });
  }
  /** Xuất excel client-side (xem docblock class - endpoint export ở backend không tồn tại). */
  exportExcel() {
    if (!this.selectedRegisterSeq) {
      this.message.warning(this.t("ebl.js.selectRegister", "Vui l\xF2ng ch\u1ECDn Ng\xE0y \u0111\u0103ng k\xFD tr\u01B0\u1EDBc"));
      return;
    }
    const t = (key, fallback) => this.i18n.t(key, fallback);
    const headers = [
      t("common.stt", "STT"),
      t("ebl.col.processed", "\u0110\xE3 x\u1EED l\xFD"),
      t("common.empName", "H\u1ECD t\xEAn"),
      t("common.empId", "M\xE3 nh\xE2n vi\xEAn"),
      t("ebl.col.startDate", "Th\u1EDDi gian"),
      t("ebl.col.decision", "Quy\u1EBFt \u0111\u1ECBnh"),
      t("ebl.col.reason", "L\xFD do"),
      t("common.deptName", "Ph\xF2ng ban"),
      t("ebl.col.group", "Nh\xF3m nh\xE2n vi\xEAn"),
      t("ebl.col.level", "Ch\u1EE9c v\u1EE5"),
      t("ebl.col.jobTitle", "Ch\u1EE9c danh"),
      t("ebl.col.empType", "Lo\u1EA1i nh\xE2n vi\xEAn"),
      t("ebl.col.job", "C\xF4ng vi\u1EC7c"),
      t("ebl.col.costCenter", "M\xE3 chi ph\xED")
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      r.activity === "1" ? "X" : "",
      r.localName,
      r.empId,
      r.startDate,
      r.transCodeName,
      r.transReasonName,
      r.deptName,
      r.postFamilyName,
      r.postGradeName,
      r.positionNoName,
      r.empTypeName,
      r.mainBusinessName,
      r.costCenter
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "QuyetDinhHangLoat");
    writeFileSync(workbook, "quyet_dinh_hang_loat.xlsx");
  }
  // ==================== Modal chỉnh sửa dòng ====================
  openEditModal(row) {
    this.editForm = {
      seq: row.seq,
      empId: row.empId ?? "",
      localName: row.localName ?? "",
      startDatePicker: this.toDate(row.startDate),
      transCode: row.transCode ?? null,
      transReason: row.transReason ?? null,
      deptno: row.deptno ?? null,
      postFamily: row.postFamily ?? null,
      newPostGradeNo: row.newPostGradeNo ?? null,
      positionNo: row.positionNo ?? null,
      empTypeCode: row.empTypeCode ?? null,
      mainBusiness: row.mainBusiness ?? null,
      costCenter: row.costCenter ?? "",
      remarks: row.remarks ?? ""
    };
    this.loadTransReasonOptions(row.transCode);
    this.loadPostGradeOptions(row.postFamily);
    this.editModalVisible.set(true);
  }
  closeEditModal() {
    this.editModalVisible.set(false);
  }
  onEditTransCodeChange(value) {
    this.editForm.transCode = value ?? "";
    this.editForm.transReason = "";
    this.loadTransReasonOptions(value);
  }
  onEditPostFamilyChange(value) {
    this.editForm.postFamily = value ?? "";
    this.editForm.newPostGradeNo = "";
    this.loadPostGradeOptions(value);
  }
  loadTransReasonOptions(transCode) {
    if (!transCode) {
      this.transReasonOptions.set([]);
      return;
    }
    this.api.getCodeList(transCode).subscribe((list) => this.transReasonOptions.set(list ?? []));
  }
  loadPostGradeOptions(postFamily) {
    this.api.getCodeList(postFamily || "400001").subscribe((list) => this.postGradeOptions.set(list ?? []));
  }
  saveEdit() {
    if (!this.editForm.seq)
      return;
    const f = this.editForm;
    const dto = {
      seq: f.seq,
      startDate: this.toDateStr(f.startDatePicker),
      transCode: f.transCode,
      transReason: f.transReason,
      deptno: f.deptno,
      postFamily: f.postFamily,
      newPostGradeNo: f.newPostGradeNo,
      positionNo: f.positionNo,
      empTypeCode: f.empTypeCode,
      mainBusiness: f.mainBusiness,
      costCenter: f.costCenter,
      remarks: f.remarks
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
    this.api.getCodeList("14013956").subscribe((list) => this.transCodeOptions.set(list ?? []));
    this.api.getCodeList("14015812").subscribe((list) => this.postFamilyOptions.set(list ?? []));
    this.api.getCodeList("14014036").subscribe((list) => this.positionOptions.set(list ?? []));
    this.api.getCodeList("13864").subscribe((list) => this.empTypeOptions.set(list ?? []));
    this.api.getCodeList("400098").subscribe((list) => this.mainBusinessOptions.set(list ?? []));
  }
  // ==================== Helpers ngày tháng ====================
  toDate(dateStr) {
    if (!dateStr)
      return null;
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? null : d;
  }
  toDateStr(d) {
    return d ? formatDate(d, "yyyy/MM/dd", "vi") : "";
  }
  static \u0275fac = function ViewExperienceBatchListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewExperienceBatchListComponent)(\u0275\u0275directiveInject(ViewExperienceBatchListService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService), \u0275\u0275directiveInject(NzModalService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewExperienceBatchListComponent, selectors: [["app-view-experience-batch-list"]], viewQuery: function ViewExperienceBatchListComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.excelFileInputRef = _t.first);
    }
  }, decls: 91, vars: 127, consts: [["excelFileInput", ""], [3, "nzBodyStyle"], [1, "d-flex", "flex-wrap", "align-items-center", "gap-2", "mb-2"], [1, "form-label", "mb-0", "fw-semibold", "small"], ["name", "registerSeq", "nzAllowClear", "", 2, "min-width", "220px", 3, "ngModelChange", "ngModel"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "primary", "nzSize", "small", 3, "click"], [1, "bx", "bx-plus"], [1, "ms-auto", "d-flex", "flex-wrap", "gap-1"], ["nz-button", "", "nzSize", "small", 3, "click", 4, "ngIf"], ["nz-button", "", "nzType", "primary", "nzSize", "small", 3, "click", 4, "ngIf"], ["nz-button", "", "nzSize", "small", 3, "click"], [1, "bx", "bx-search"], ["nz-button", "", "nzDanger", "", "nzSize", "small", 3, "disabled", "click", 4, "ngIf"], [1, "bx", "bx-export"], ["nz-button", "", "nzSize", "small", 3, "nzLoading", "click", 4, "ngIf"], ["type", "file", "hidden", "", "accept", ".xlsx,.xls", 3, "change"], [1, "small", "text-muted", "mb-1"], ["nzShowSizeChanger", "", "nzSize", "small", 1, "table-nowrap", 3, "nzPageIndexChange", "nzData", "nzFrontPagination", "nzLoading", "nzTotal", "nzPageIndex", "nzPageSize", "nzShowPagination", "nzPageSizeOptions", "nzScroll"], ["nzLeft", "", "nzWidth", "44px", 1, "text-center"], ["nzLeft", "", "nzWidth", "36px", 1, "text-center"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel"], ["nzLeft", "", "nzWidth", "80px", 1, "text-center"], ["nzLeft", "", "nzWidth", "150px"], ["nzWidth", "100px", 1, "text-center"], ["nzWidth", "140px"], ["nzWidth", "150px"], ["nzWidth", "130px"], ["nzWidth", "120px"], ["nzWidth", "180px"], ["nzWidth", "60px", 1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["nzWidth", "380px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], ["nzWidth", "700px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [3, "nzValue", "nzLabel"], [1, "bx", "bx-download"], [1, "bx", "bx-check-double"], ["nz-button", "", "nzDanger", "", "nzSize", "small", 3, "click", "disabled"], [1, "bx", "bx-trash"], ["nz-button", "", "nzSize", "small", 3, "click", "nzLoading"], [1, "bx", "bx-upload"], ["colspan", "16", 1, "text-center", "text-muted"], ["nzLeft", "", 1, "text-center"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "badge bg-success", 4, "ngIf"], ["class", "badge bg-secondary", 4, "ngIf"], ["nzLeft", ""], [1, "text-center"], ["nz-button", "", "nzType", "text", "nzSize", "small", 3, "click", "title"], [1, "bx", "bx-edit", "text-warning"], [1, "badge", "bg-success"], [1, "badge", "bg-secondary"], [1, "mb-2"], [1, "form-label", "small", "fw-semibold", "text-danger"], ["name", "regDate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], [1, "form-label", "small"], ["nz-input", "", "name", "regRemark", "rows", "2", "maxlength", "2000", 3, "ngModelChange", "ngModel"], [1, "row", "g-2"], [1, "col-md-4"], [1, "form-label", "small", "mb-0"], ["nz-input", "", "name", "editEmpId", "readonly", "", 3, "ngModel"], ["nz-input", "", "name", "editLocalName", "readonly", "", 3, "ngModel"], ["name", "editStartDate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "editTransCode", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "editTransReason", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "editDeptno", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["class", "text-danger small mt-1", 4, "ngIf"], ["name", "editPostFamily", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "editNewPostGradeNo", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "editPositionNo", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "editEmpTypeCode", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "editMainBusiness", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "editCostCenter", 3, "ngModelChange", "ngModel"], [1, "col-12"], ["nz-input", "", "name", "editRemarks", "maxlength", "200", 3, "ngModelChange", "ngModel"], [1, "text-danger", "small", "mt-1"]], template: function ViewExperienceBatchListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "nz-card", 1)(1, "div", 2)(2, "label", 3);
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "nz-select", 4);
      \u0275\u0275twoWayListener("ngModelChange", function ViewExperienceBatchListComponent_Template_nz_select_ngModelChange_5_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedRegisterSeq, $event) || (ctx.selectedRegisterSeq = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function ViewExperienceBatchListComponent_Template_nz_select_ngModelChange_5_listener() {
        return ctx.onRegisterChange();
      });
      \u0275\u0275template(6, ViewExperienceBatchListComponent_nz_option_6_Template, 1, 2, "nz-option", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275listener("click", function ViewExperienceBatchListComponent_Template_button_click_7_listener() {
        return ctx.openRegisterModal();
      });
      \u0275\u0275element(8, "i", 7);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 8);
      \u0275\u0275template(12, ViewExperienceBatchListComponent_button_12_Template, 4, 4, "button", 9)(13, ViewExperienceBatchListComponent_button_13_Template, 4, 4, "button", 10);
      \u0275\u0275elementStart(14, "button", 11);
      \u0275\u0275listener("click", function ViewExperienceBatchListComponent_Template_button_click_14_listener() {
        return ctx.search();
      });
      \u0275\u0275element(15, "i", 12);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(18, ViewExperienceBatchListComponent_button_18_Template, 4, 5, "button", 13);
      \u0275\u0275elementStart(19, "button", 11);
      \u0275\u0275listener("click", function ViewExperienceBatchListComponent_Template_button_click_19_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(20, "i", 14);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, ViewExperienceBatchListComponent_button_23_Template, 4, 5, "button", 15);
      \u0275\u0275elementStart(24, "input", 16, 0);
      \u0275\u0275listener("change", function ViewExperienceBatchListComponent_Template_input_change_24_listener($event) {
        return ctx.onExcelFileSelected($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "div", 17);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "nz-table", 18);
      \u0275\u0275listener("nzPageIndexChange", function ViewExperienceBatchListComponent_Template_nz_table_nzPageIndexChange_29_listener($event) {
        return ctx.onPageIndexChange($event);
      });
      \u0275\u0275elementStart(30, "thead")(31, "tr")(32, "th", 19);
      \u0275\u0275text(33, "No.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "th", 20)(35, "label", 21);
      \u0275\u0275listener("ngModelChange", function ViewExperienceBatchListComponent_Template_label_ngModelChange_35_listener($event) {
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
      \u0275\u0275elementStart(45, "th", 24);
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "th", 25);
      \u0275\u0275text(49);
      \u0275\u0275pipe(50, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "th", 25);
      \u0275\u0275text(52);
      \u0275\u0275pipe(53, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "th", 26);
      \u0275\u0275text(55);
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "th", 27);
      \u0275\u0275text(58);
      \u0275\u0275pipe(59, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "th", 28);
      \u0275\u0275text(61);
      \u0275\u0275pipe(62, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "th", 27);
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
      \u0275\u0275elementStart(72, "th", 24);
      \u0275\u0275text(73);
      \u0275\u0275pipe(74, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "th", 30);
      \u0275\u0275text(76);
      \u0275\u0275pipe(77, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(78, "tbody");
      \u0275\u0275template(79, ViewExperienceBatchListComponent_tr_79_Template, 4, 4, "tr", 31)(80, ViewExperienceBatchListComponent_tr_80_Template, 36, 20, "tr", 32);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(81, "nz-modal", 33);
      \u0275\u0275pipe(82, "translate");
      \u0275\u0275pipe(83, "translate");
      \u0275\u0275pipe(84, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewExperienceBatchListComponent_Template_nz_modal_nzOnCancel_81_listener() {
        return ctx.closeRegisterModal();
      })("nzOnOk", function ViewExperienceBatchListComponent_Template_nz_modal_nzOnOk_81_listener() {
        return ctx.saveRegister();
      });
      \u0275\u0275template(85, ViewExperienceBatchListComponent_ng_container_85_Template, 11, 10, "ng-container", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "nz-modal", 35);
      \u0275\u0275pipe(87, "translate");
      \u0275\u0275pipe(88, "translate");
      \u0275\u0275pipe(89, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewExperienceBatchListComponent_Template_nz_modal_nzOnCancel_86_listener() {
        return ctx.closeEditModal();
      })("nzOnOk", function ViewExperienceBatchListComponent_Template_nz_modal_nzOnOk_86_listener() {
        return ctx.saveEdit();
      });
      \u0275\u0275template(90, ViewExperienceBatchListComponent_ng_container_90_Template, 76, 78, "ng-container", 34);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("nzBodyStyle", \u0275\u0275pureFunction0(124, _c1));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 49, "ebl.label.registerDate", "Ng\xE0y \u0111\u0103ng k\xFD"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedRegisterSeq);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.registers());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 52, "ebl.btn.register", "\u0110\u0103ng k\xFD"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.allProcessed());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.allProcessed());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(17, 55, "common.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.allProcessed());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(22, 58, "common.exportExcel", "Xu\u1EA5t Excel"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.allProcessed());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(28, 61, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", ctx.totalRecords());
      \u0275\u0275advance(2);
      \u0275\u0275property("nzData", ctx.rows())("nzFrontPagination", false)("nzLoading", ctx.loading())("nzTotal", ctx.totalRecords())("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzShowPagination", true)("nzPageSizeOptions", \u0275\u0275pureFunction0(125, _c2))("nzScroll", \u0275\u0275pureFunction0(126, _c3));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngModel", ctx.allChecked);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(38, 64, "ebl.col.processed", "\u0110\xE3 x\u1EED l\xFD"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 67, "common.empName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 70, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(47, 73, "ebl.col.startDate", "Th\u1EDDi gian"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 76, "ebl.col.decision", "Quy\u1EBFt \u0111\u1ECBnh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(53, 79, "ebl.col.reason", "L\xFD do"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(56, 82, "common.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(59, 85, "ebl.col.group", "Nh\xF3m nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(62, 88, "ebl.col.level", "Ch\u1EE9c v\u1EE5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(65, 91, "ebl.col.jobTitle", "Ch\u1EE9c danh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(68, 94, "ebl.col.empType", "Lo\u1EA1i nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(71, 97, "ebl.col.job", "C\xF4ng vi\u1EC7c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(74, 100, "ebl.col.costCenter", "M\xE3 chi ph\xED"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(77, 103, "common.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.rows());
      \u0275\u0275advance();
      \u0275\u0275property("nzVisible", ctx.registerModalVisible())("nzTitle", \u0275\u0275pipeBind2(82, 106, "ebl.modal.register.title", "\u0110\u0103ng k\xFD ng\xE0y"))("nzOkLoading", ctx.registerSaving())("nzOkText", \u0275\u0275pipeBind2(83, 109, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(84, 112, "common.cancel", "H\u1EE7y"));
      \u0275\u0275advance(5);
      \u0275\u0275property("nzVisible", ctx.editModalVisible())("nzTitle", \u0275\u0275pipeBind2(87, 115, "ebl.modal.edit.title", "Ch\u1EC9nh s\u1EEDa th\xF4ng tin"))("nzOkLoading", ctx.editSaving())("nzOkText", \u0275\u0275pipeBind2(88, 118, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(89, 121, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCellFixedDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzCheckboxModule, NzCheckboxComponent, NzDatePickerModule, NzDatePickerComponent, NzTreeSelectModule, NzTreeSelectComponent, NzModalModule, NzModalComponent, NzModalContentDirective, TranslatePipe], styles: ["\n/*# sourceMappingURL=view-experience-batch-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewExperienceBatchListComponent, [{
    type: Component,
    args: [{ selector: "app-view-experience-batch-list", standalone: true, imports: [
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
    <label class="form-label mb-0 fw-semibold small">{{ 'ebl.label.registerDate' | translate:'Ng\xE0y \u0111\u0103ng k\xFD' }}</label>
    <nz-select style="min-width:220px" [(ngModel)]="selectedRegisterSeq" name="registerSeq"
               (ngModelChange)="onRegisterChange()" nzAllowClear>
      <nz-option *ngFor="let r of registers()" [nzValue]="r.registerSeq"
                 [nzLabel]="(r.registerDate || '') + (r.registerRemark ? ' - ' + r.registerRemark : '')"></nz-option>
    </nz-select>
    <button nz-button nzType="primary" nzSize="small" (click)="openRegisterModal()">
      <i class="bx bx-plus"></i> {{ 'ebl.btn.register' | translate:'\u0110\u0103ng k\xFD' }}
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
        <i class="bx bx-upload"></i> {{ 'ebl.btn.insertFile' | translate:'Ch\xE8n file' }}
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
            [nzScroll]="{ x: '1800px', y: 'calc(100vh - 320px)' }" nzSize="small" class="table-nowrap">
    <thead>
      <tr>
        <th class="text-center" nzLeft nzWidth="44px">No.</th>
        <th class="text-center" nzLeft nzWidth="36px">
          <label nz-checkbox [ngModel]="allChecked" (ngModelChange)="toggleAllChecked($event)"></label>
        </th>
        <th class="text-center" nzLeft nzWidth="80px">{{ 'ebl.col.processed' | translate:'\u0110\xE3 x\u1EED l\xFD' }}</th>
        <th nzLeft nzWidth="150px">{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
        <th class="text-center" nzWidth="100px">{{ 'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
        <th class="text-center" nzWidth="100px">{{ 'ebl.col.startDate' | translate:'Th\u1EDDi gian' }}</th>
        <th nzWidth="140px">{{ 'ebl.col.decision' | translate:'Quy\u1EBFt \u0111\u1ECBnh' }}</th>
        <th nzWidth="140px">{{ 'ebl.col.reason' | translate:'L\xFD do' }}</th>
        <th nzWidth="150px">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
        <th nzWidth="130px">{{ 'ebl.col.group' | translate:'Nh\xF3m nh\xE2n vi\xEAn' }}</th>
        <th nzWidth="120px">{{ 'ebl.col.level' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
        <th nzWidth="130px">{{ 'ebl.col.jobTitle' | translate:'Ch\u1EE9c danh' }}</th>
        <th nzWidth="120px">{{ 'ebl.col.empType' | translate:'Lo\u1EA1i nh\xE2n vi\xEAn' }}</th>
        <th nzWidth="180px">{{ 'ebl.col.job' | translate:'C\xF4ng vi\u1EC7c' }}</th>
        <th class="text-center" nzWidth="100px">{{ 'ebl.col.costCenter' | translate:'M\xE3 chi ph\xED' }}</th>
        <th class="text-center" nzWidth="60px">{{ 'common.action' | translate:'Thao t\xE1c' }}</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngIf="!loading() && rows().length === 0">
        <td colspan="16" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
      </tr>
      <tr *ngFor="let row of rows(); let i = index">
        <td class="text-center" nzLeft>{{ (pageIndex - 1) * pageSize + i + 1 }}</td>
        <td class="text-center" nzLeft>
          <label *ngIf="isRowSelectable(row)" nz-checkbox [ngModel]="isChecked(row.seq)"
                 (ngModelChange)="toggleChecked(row.seq, $event)"></label>
        </td>
        <td class="text-center" nzLeft>
          <span *ngIf="row.activity === '1'" class="badge bg-success">&#10003;</span>
          <span *ngIf="row.activity !== '1'" class="badge bg-secondary">-</span>
        </td>
        <td nzLeft>{{ row.localName }}</td>
        <td class="text-center">{{ row.empId }}</td>
        <td class="text-center">{{ row.startDate }}</td>
        <td>{{ row.transCodeName }}</td>
        <td>{{ row.transReasonName }}</td>
        <td>{{ row.deptName }}</td>
        <td>{{ row.postFamilyName }}</td>
        <td>{{ row.postGradeName }}</td>
        <td>{{ row.positionNoName }}</td>
        <td>{{ row.empTypeName }}</td>
        <td>{{ row.mainBusinessName }}</td>
        <td class="text-center">{{ row.costCenter }}</td>
        <td class="text-center">
          <button nz-button nzType="text" nzSize="small" (click)="openEditModal(row)" [title]="'common.action' | translate:'S\u1EEDa'">
            <i class="bx bx-edit text-warning"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </nz-table>
</nz-card>

<!-- \u2550\u2550\u2550\u2550 Modal: \u0110\u0103ng k\xFD ng\xE0y \u2550\u2550\u2550\u2550 -->
<nz-modal [nzVisible]="registerModalVisible()" [nzTitle]="'ebl.modal.register.title' | translate:'\u0110\u0103ng k\xFD ng\xE0y'"
          nzWidth="380px" [nzOkLoading]="registerSaving()"
          [nzOkText]="'common.save' | translate:'L\u01B0u'" [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'"
          (nzOnCancel)="closeRegisterModal()" (nzOnOk)="saveRegister()">
  <ng-container *nzModalContent>
    <div class="mb-2">
      <label class="form-label small fw-semibold text-danger">{{ 'ebl.modal.register.date' | translate:'Ng\xE0y \u0111\u0103ng k\xFD *' }}</label>
      <nz-date-picker class="w-100" [(ngModel)]="regDatePicker" name="regDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
    </div>
    <div>
      <label class="form-label small">{{ 'ebl.modal.register.remark' | translate:'Ghi ch\xFA' }}</label>
      <textarea nz-input [(ngModel)]="regRemark" name="regRemark" rows="2" maxlength="2000"></textarea>
    </div>
  </ng-container>
</nz-modal>

<!-- \u2550\u2550\u2550\u2550 Modal: Ch\u1EC9nh s\u1EEDa d\xF2ng \u2550\u2550\u2550\u2550 -->
<nz-modal [nzVisible]="editModalVisible()" [nzTitle]="'ebl.modal.edit.title' | translate:'Ch\u1EC9nh s\u1EEDa th\xF4ng tin'"
          nzWidth="700px" [nzOkLoading]="editSaving()" [nzOkText]="'common.save' | translate:'L\u01B0u'"
          [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'"
          (nzOnCancel)="closeEditModal()" (nzOnOk)="saveEdit()">
  <ng-container *nzModalContent>
    <div class="row g-2">
      <div class="col-md-4">
        <label class="form-label small mb-0">{{ 'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</label>
        <input nz-input [ngModel]="editForm.empId" name="editEmpId" readonly>
      </div>
      <div class="col-md-4">
        <label class="form-label small mb-0">{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</label>
        <input nz-input [ngModel]="editForm.localName" name="editLocalName" readonly>
      </div>
      <div class="col-md-4">
        <label class="form-label small mb-0">{{ 'ebl.col.startDate' | translate:'Th\u1EDDi gian' }}</label>
        <nz-date-picker class="w-100" [(ngModel)]="editForm.startDatePicker" name="editStartDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
      </div>
      <div class="col-md-4">
        <label class="form-label small mb-0">{{ 'ebl.col.decision' | translate:'Quy\u1EBFt \u0111\u1ECBnh' }}</label>
        <nz-select class="w-100" [ngModel]="editForm.transCode" name="editTransCode"
                   (ngModelChange)="onEditTransCodeChange($event)" nzAllowClear>
          <nz-option *ngFor="let c of transCodeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-4">
        <label class="form-label small mb-0">{{ 'ebl.col.reason' | translate:'L\xFD do' }}</label>
        <nz-select class="w-100" [(ngModel)]="editForm.transReason" name="editTransReason" nzAllowClear>
          <nz-option *ngFor="let c of transReasonOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-4">
        <label class="form-label small mb-0">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</label>
        <nz-tree-select class="w-100" [nzNodes]="deptNodes()" [(ngModel)]="editForm.deptno" name="editDeptno"
                         nzShowSearch nzAllowClear
                         [nzPlaceHolder]="'recruit.list.placeholder.selectDept' | translate:'-- Ch\u1ECDn ph\xF2ng ban --'"></nz-tree-select>
        <div *ngIf="deptTreeErrorMessage()" class="text-danger small mt-1">{{ deptTreeErrorMessage() }}</div>
      </div>
      <div class="col-md-4">
        <label class="form-label small mb-0">{{ 'ebl.col.group' | translate:'Nh\xF3m nh\xE2n vi\xEAn' }}</label>
        <nz-select class="w-100" [ngModel]="editForm.postFamily" name="editPostFamily"
                   (ngModelChange)="onEditPostFamilyChange($event)" nzAllowClear>
          <nz-option *ngFor="let c of postFamilyOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-4">
        <label class="form-label small mb-0">{{ 'ebl.col.level' | translate:'Ch\u1EE9c v\u1EE5' }}</label>
        <nz-select class="w-100" [(ngModel)]="editForm.newPostGradeNo" name="editNewPostGradeNo" nzAllowClear>
          <nz-option *ngFor="let c of postGradeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-4">
        <label class="form-label small mb-0">{{ 'ebl.col.jobTitle' | translate:'Ch\u1EE9c danh' }}</label>
        <nz-select class="w-100" [(ngModel)]="editForm.positionNo" name="editPositionNo" nzAllowClear>
          <nz-option *ngFor="let c of positionOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-4">
        <label class="form-label small mb-0">{{ 'ebl.col.empType' | translate:'Lo\u1EA1i nh\xE2n vi\xEAn' }}</label>
        <nz-select class="w-100" [(ngModel)]="editForm.empTypeCode" name="editEmpTypeCode" nzAllowClear>
          <nz-option *ngFor="let c of empTypeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-4">
        <label class="form-label small mb-0">{{ 'ebl.col.job' | translate:'C\xF4ng vi\u1EC7c' }}</label>
        <nz-select class="w-100" [(ngModel)]="editForm.mainBusiness" name="editMainBusiness" nzAllowClear>
          <nz-option *ngFor="let c of mainBusinessOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-4">
        <label class="form-label small mb-0">{{ 'ebl.col.costCenter' | translate:'M\xE3 chi ph\xED' }}</label>
        <input nz-input [(ngModel)]="editForm.costCenter" name="editCostCenter">
      </div>
      <div class="col-12">
        <label class="form-label small mb-0">{{ 'common.remark' | translate:'Ghi ch\xFA' }}</label>
        <input nz-input [(ngModel)]="editForm.remarks" name="editRemarks" maxlength="200">
      </div>
    </div>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-experience-batch-list/view-experience-batch-list.component.css */\n/*# sourceMappingURL=view-experience-batch-list.component.css.map */\n"] }]
  }], () => [{ type: ViewExperienceBatchListService }, { type: I18nService }, { type: NzMessageService }, { type: NzModalService }], { excelFileInputRef: [{
    type: ViewChild,
    args: ["excelFileInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewExperienceBatchListComponent, { className: "ViewExperienceBatchListComponent", filePath: "src/app/view-experience-batch-list/view-experience-batch-list.component.ts", lineNumber: 103 });
})();
export {
  ViewExperienceBatchListComponent
};
//# debugId=3de75ab1-bf21-56fe-8e15-43555285dac1
//# sourceMappingURL=chunk-4EYI2HH2.js.map
