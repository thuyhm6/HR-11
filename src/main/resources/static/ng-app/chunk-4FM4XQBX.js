import {
  NzAutocompleteComponent,
  NzAutocompleteModule,
  NzAutocompleteOptionComponent,
  NzAutocompleteTriggerDirective
} from "./chunk-I3OGIUJB.js";
import {
  TabService
} from "./chunk-DUA22MI5.js";
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
  MaxLengthValidator,
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
  HttpHeaders,
  HttpParams,
  Injectable,
  NgForOf,
  NgIf,
  NzButtonComponent,
  NzButtonModule,
  NzTransitionPatchDirective,
  NzWaveDirective,
  __spreadValues,
  firstValueFrom,
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

// src/app/view-ar-card-record/view-ar-card-record.service.ts
var API_BASE = "/ar/attendanceMintenance/api/cardRecord";
var EXCEL_TEMPLATE_NAME = "Card_Template";
var ViewArCardRecordService = class _ViewArCardRecordService {
  constructor(http) {
    this.http = http;
  }
  http;
  getPageList(params) {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      httpParams = httpParams.set(key, String(value));
    }
    return this.http.get(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
  }
  getDetail(recordNo) {
    return this.http.get(`${API_BASE}/detail`, {
      params: new HttpParams().set("recordNo", recordNo),
      withCredentials: true
    });
  }
  insert(dto) {
    return this.http.post(`${API_BASE}/insert`, dto, { withCredentials: true });
  }
  update(dto) {
    return this.http.post(`${API_BASE}/update`, dto, { withCredentials: true });
  }
  delete(recordNo) {
    return this.http.post(`${API_BASE}/delete`, { recordNo }, { withCredentials: true });
  }
  importFromDevice(fromDate, toDate) {
    const body = new HttpParams().set("fromDate", fromDate).set("toDate", toDate);
    const headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");
    return this.http.post(`${API_BASE}/importFromDevice`, body.toString(), { headers, withCredentials: true });
  }
  uploadExcel(file) {
    const fd = new FormData();
    fd.append("file", file);
    return this.http.post("/ar/attendanceMintenance/api/macRecordTemp/uploadExcel", fd, { withCredentials: true });
  }
  downloadTemplateUrl() {
    return `/sy/excel/api/downloadTemplate?templateName=${EXCEL_TEMPLATE_NAME}`;
  }
  getShiftList() {
    return this.http.get("/ar/attendanceSettings/api/shift", { withCredentials: true });
  }
  searchEmployees(keyword) {
    return this.http.get("/hrm/empinfo/api/employee/search", {
      params: new HttpParams().set("keyword", keyword),
      withCredentials: true
    });
  }
  getAuthorizedDepartments() {
    return this.http.get("/ar/attendanceSettings/api/arSupervisor/authorized-departments", {
      withCredentials: true
    });
  }
  static \u0275fac = function ViewArCardRecordService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewArCardRecordService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewArCardRecordService, factory: _ViewArCardRecordService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewArCardRecordService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-ar-card-record/view-ar-card-record.component.ts
var _c0 = () => ({ x: "1400px", y: "calc(100vh - 380px)" });
function ViewArCardRecordComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.deptTreeErrorMessage());
  }
}
function ViewArCardRecordComponent_nz_option_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 43);
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    \u0275\u0275property("nzValue", s_r3.shiftNo)("nzLabel", s_r3.nameVi || s_r3.shiftNo);
  }
}
function ViewArCardRecordComponent_ng_container_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 44);
    \u0275\u0275listener("click", function ViewArCardRecordComponent_ng_container_47_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddModal());
    });
    \u0275\u0275element(2, "i", 45);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 46);
    \u0275\u0275listener("click", function ViewArCardRecordComponent_ng_container_47_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteSelected());
    });
    \u0275\u0275element(6, "i", 47);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 20);
    \u0275\u0275listener("click", function ViewArCardRecordComponent_ng_container_47_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openImportModal());
    });
    \u0275\u0275element(10, "i", 48);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 20);
    \u0275\u0275listener("click", function ViewArCardRecordComponent_ng_container_47_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadTemplate());
    });
    \u0275\u0275element(14, "i", 49);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 50);
    \u0275\u0275listener("click", function ViewArCardRecordComponent_ng_container_47_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r4);
      const excelFileInput_r5 = \u0275\u0275reference(22);
      return \u0275\u0275resetView(excelFileInput_r5.click());
    });
    \u0275\u0275element(18, "i", 51);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 52, 1);
    \u0275\u0275listener("change", function ViewArCardRecordComponent_ng_container_47_Template_input_change_21_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onExcelFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 6, "acr.btn.addRecord", "Th\xEAm b\u1EA3n ghi"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 9, "acr.btn.deleteSelected", "X\xF3a \u0111\xE3 ch\u1ECDn"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 12, "acr.btn.importFromDevice", "\u0110\u1ECDc d\u1EEF li\u1EC7u qu\u1EB9t th\u1EBB"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(16, 15, "common.downloadTemplate", "T\u1EA3i File M\u1EABu"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLoading", ctx_r1.importingExcel());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(20, 18, "common.importExcel", "Import Excel"), " ");
  }
}
function ViewArCardRecordComponent_nz_alert_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 53);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ViewArCardRecordComponent_th_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "th", 54)(1, "label", 55);
    \u0275\u0275listener("ngModelChange", function ViewArCardRecordComponent_th_56_Template_label_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAll($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.allSelectableChecked);
    \u0275\u0275control();
  }
}
function ViewArCardRecordComponent_th_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "common.action", "Thao t\xE1c"));
  }
}
function ViewArCardRecordComponent_tr_86_td_3_label_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 55);
    \u0275\u0275listener("ngModelChange", function ViewArCardRecordComponent_tr_86_td_3_label_1_Template_label_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const row_r8 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleRow(row_r8.recordNo, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r8 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r1.isRowSelected(row_r8.recordNo));
    \u0275\u0275control();
  }
}
function ViewArCardRecordComponent_tr_86_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 56);
    \u0275\u0275template(1, ViewArCardRecordComponent_tr_86_td_3_label_1_Template, 1, 1, "label", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isRowSelectable(row_r8));
  }
}
function ViewArCardRecordComponent_tr_86_td_22_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 62);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ViewArCardRecordComponent_tr_86_td_22_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const row_r8 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteOne(row_r8));
    });
    \u0275\u0275element(2, "i", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind2(1, 1, "common.action", "X\xF3a"));
  }
}
function ViewArCardRecordComponent_tr_86_td_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 56)(1, "button", 59);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ViewArCardRecordComponent_tr_86_td_22_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const row_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditModal(row_r8));
    });
    \u0275\u0275element(3, "i", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ViewArCardRecordComponent_tr_86_td_22_button_4_Template, 3, 4, "button", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind2(2, 2, "common.action", "S\u1EEDa"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.isRowSelectable(row_r8));
  }
}
function ViewArCardRecordComponent_tr_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 56);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ViewArCardRecordComponent_tr_86_td_3_Template, 2, 1, "td", 57);
    \u0275\u0275elementStart(4, "td", 56);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 56);
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
    \u0275\u0275elementStart(20, "td", 56);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, ViewArCardRecordComponent_tr_86_td_22_Template, 5, 5, "td", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r1.pageIndex - 1) * ctx_r1.pageSize + i_r11 + 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hrmMode);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r8.empId || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r8.empId);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r8.localName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r8.localName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r8.deptName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r8.deptName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r8.postGradeName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r8.postGradeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.shiftName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.arDateStr);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.swipeTime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.doorType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r8.dataSourceName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hrmMode);
  }
}
function ViewArCardRecordComponent_ng_template_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r12 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r12, " ");
  }
}
function ViewArCardRecordComponent_ng_container_93_nz_auto_option_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-auto-option", 75);
    \u0275\u0275listener("click", function ViewArCardRecordComponent_ng_container_93_nz_auto_option_12_Template_nz_auto_option_click_0_listener() {
      const opt_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onEmpSelected(opt_r15));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "small", 76);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const opt_r15 = ctx.$implicit;
    \u0275\u0275property("nzValue", opt_r15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", opt_r15.empId, " - ", opt_r15.localName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", opt_r15.deptName, ")");
  }
}
function ViewArCardRecordComponent_ng_container_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 63)(2, "div", 64)(3, "label");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span", 65);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "input", 66);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275listener("ngModelChange", function ViewArCardRecordComponent_ng_container_93_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEmpKeywordChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(10, "nz-autocomplete", null, 2);
    \u0275\u0275template(12, ViewArCardRecordComponent_ng_container_93_nz_auto_option_12_Template, 4, 4, "nz-auto-option", 67);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 68)(14, "div", 64)(15, "label");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementStart(18, "span", 65);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "nz-date-picker", 69);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArCardRecordComponent_ng_container_93_Template_nz_date_picker_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.arDateStr, $event) || (ctx_r1.form.arDateStr = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 64)(22, "label");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementStart(25, "span", 65);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "input", 70);
    \u0275\u0275listener("input", function ViewArCardRecordComponent_ng_container_93_Template_input_input_27_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSwipeDateTimeInput($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 68)(29, "div", 64)(30, "label");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "nz-select", 71);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewArCardRecordComponent_ng_container_93_Template_nz_select_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.doorType, $event) || (ctx_r1.form.doorType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(35, "nz-option", 72);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275element(37, "nz-option", 73);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 64)(40, "label");
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "input", 74);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArCardRecordComponent_ng_container_93_Template_input_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.remark, $event) || (ctx_r1.form.remark = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const empAuto_r16 = \u0275\u0275reference(11);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 17, "acr.col.employee", "Nh\xE2n vi\xEAn"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.form.empKeyword)("nzAutocomplete", empAuto_r16)("placeholder", \u0275\u0275pipeBind2(9, 20, "empSearch.placeholder.empId", "Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn nh\xE2n vi\xEAn..."));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.form.empOptions);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(17, 23, "attSearch.workDate", "Ng\xE0y c\xF4ng"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.arDateStr);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(24, 26, "acr.col.swipeTime", "Th\u1EDDi gian qu\u1EB9t th\u1EBB"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.form.swipeDateTime);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 29, "acr.col.doorType", "Lo\u1EA1i"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.doorType);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(34, 32, "common.select", "Ch\u1ECDn"))("nzAllowClear", true);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(36, 35, "acr.doorType.in", "V\xE0o"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(38, 38, "acr.doorType.out", "Ra"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 41, "acr.col.remark", "Ghi ch\xFA"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.remark);
    \u0275\u0275control();
  }
}
function ViewArCardRecordComponent_ng_container_98_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275element(1, "div", 82);
    \u0275\u0275elementStart(2, "div", 83);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 1, "acr.imp.processing", "\u0110ang k\u1EBFt n\u1ED1i v\xE0 \u0111\u1ECDc d\u1EEF li\u1EC7u..."));
  }
}
function ViewArCardRecordComponent_ng_container_98_div_13_ul_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 87)(1, "li");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "li");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "strong", 88);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "li");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementStart(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "li");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementStart(19, "strong", 89);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const res_r18 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(3, 8, "acr.imp.result.total", "T\u1ED5ng b\u1EA3n ghi t\u1EEB m\xE1y ch\u1EE7"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(res_r18.total || 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(8, 11, "acr.imp.result.imported", "\u0110\xE3 l\u01B0u m\u1EDBi"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(res_r18.imported || 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(13, 14, "acr.imp.result.skipped", "B\u1ECF qua (tr\xF9ng)"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(res_r18.skipped || 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(18, 17, "acr.imp.result.notFound", "Kh\xF4ng t\xECm th\u1EA5y nh\xE2n vi\xEAn"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(res_r18.notFound || 0);
  }
}
function ViewArCardRecordComponent_ng_container_98_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275element(1, "hr")(2, "nz-alert", 85);
    \u0275\u0275template(3, ViewArCardRecordComponent_ng_container_98_div_13_ul_3_Template, 21, 20, "ul", 86);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const res_r18 = ctx.ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275property("nzType", res_r18.success ? "success" : "error")("nzMessage", res_r18.message || "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", res_r18.success);
  }
}
function ViewArCardRecordComponent_ng_container_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 68)(2, "div", 64)(3, "label");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "nz-date-picker", 77);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArCardRecordComponent_ng_container_98_Template_nz_date_picker_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.impFromDate, $event) || (ctx_r1.impFromDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 64)(8, "label");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "nz-date-picker", 78);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArCardRecordComponent_ng_container_98_Template_nz_date_picker_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.impToDate, $event) || (ctx_r1.impToDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, ViewArCardRecordComponent_ng_container_98_div_12_Template, 5, 4, "div", 79)(13, ViewArCardRecordComponent_ng_container_98_div_13_Template, 4, 3, "div", 80);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 6, "common.fromDate", "T\u1EEB ng\xE0y"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.impFromDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 9, "common.toDate", "\u0110\u1EBFn ng\xE0y"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.impToDate);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.impRunning());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.impRunning() && ctx_r1.impResult());
  }
}
var I18N_KEYS = [
  "common.search.empIdOrName",
  "common.placeholder.enterEmpId",
  "common.fromDate",
  "common.toDate",
  "common.deptName",
  "attSearch.shiftType",
  "attSearch.all",
  "common.search",
  "common.clearFilter",
  "common.exportExcel",
  "common.downloadTemplate",
  "common.importExcel",
  "common.select",
  "common.stt",
  "common.empId",
  "common.empName",
  "common.position",
  "common.action",
  "common.close",
  "common.cancel",
  "common.save",
  "common.loadFail",
  "common.totalRows",
  "attSearch.workDate",
  "empSearch.placeholder.empId",
  "acr.col.swipeTime",
  "acr.col.doorType",
  "acr.col.dataSource",
  "acr.col.employee",
  "acr.col.remark",
  "acr.modal.addTitle",
  "acr.modal.editTitle",
  "acr.btn.addRecord",
  "acr.btn.deleteSelected",
  "acr.confirm.deleteRecord",
  "acr.confirm.deleteSelected",
  "acr.doorType.in",
  "acr.doorType.out",
  "acr.msg.selectEmployee",
  "acr.msg.selectWorkDate",
  "acr.msg.selectDatetime",
  "acr.msg.selectToDelete",
  "acr.btn.importFromDevice",
  "acr.imp.title",
  "acr.imp.btnRun",
  "acr.imp.processing",
  "acr.imp.msg.selectDate",
  "acr.imp.result.total",
  "acr.imp.result.imported",
  "acr.imp.result.skipped",
  "acr.imp.result.notFound",
  "mep.msg.loadDeptFailed",
  "applyAtt.importResult",
  "applyAtt.saveError",
  "applyAtt.sendError"
];
var AUTO_INSERT_BY = /* @__PURE__ */ new Set(["M", "A"]);
var EMPTY_FORM = {
  recordNo: null,
  personId: "",
  empId: "",
  empKeyword: "",
  empOptions: [],
  empSearching: false,
  arDateStr: null,
  swipeDateTime: "",
  doorType: null,
  remark: ""
};
var ViewArCardRecordComponent = class _ViewArCardRecordComponent {
  constructor(api, i18n, message, modal, tabs) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
    this.modal = modal;
    this.tabs = tabs;
  }
  api;
  i18n;
  message;
  modal;
  tabs;
  pageSizeOptions = [25, 50, 100, 200];
  hrmMode = true;
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
  recordsTotal = signal(
    0,
    ...ngDevMode ? [{ debugName: "recordsTotal" }] : (
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
  shiftOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "shiftOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedRecordNos = signal(
    /* @__PURE__ */ new Set(),
    ...ngDevMode ? [{ debugName: "selectedRecordNos" }] : (
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
  isEdit = signal(
    false,
    ...ngDevMode ? [{ debugName: "isEdit" }] : (
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
  impModalVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "impModalVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  impRunning = signal(
    false,
    ...ngDevMode ? [{ debugName: "impRunning" }] : (
      /* istanbul ignore next */
      []
    )
  );
  impResult = signal(
    null,
    ...ngDevMode ? [{ debugName: "impResult" }] : (
      /* istanbul ignore next */
      []
    )
  );
  impFromDate = null;
  impToDate = null;
  importingExcel = signal(
    false,
    ...ngDevMode ? [{ debugName: "importingExcel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  keyword = "";
  deptNos = [];
  fromDate = null;
  toDate = null;
  shiftNo = null;
  pageIndex = 1;
  pageSize = 25;
  /** id -> danh sách id con trực tiếp - dùng để mở rộng lựa chọn cây phòng ban khi tra cứu (xem search()). */
  deptChildrenMap = /* @__PURE__ */ new Map();
  empSearchTimer = null;
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.initDefaultDateRange();
    this.loadDeptTree();
    this.api.getShiftList().subscribe((list) => this.shiftOptions.set(list ?? []));
    this.search();
  }
  initDefaultDateRange() {
    const today = /* @__PURE__ */ new Date();
    this.fromDate = today;
    this.toDate = today;
  }
  // ==================== Tìm kiếm + phân trang server-side ====================
  search() {
    this.pageIndex = 1;
    this.loadPage();
  }
  clearSearch() {
    this.keyword = "";
    this.deptNos = [];
    this.shiftNo = null;
    this.initDefaultDateRange();
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
  loadPage() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getPageList({
      keyword: this.keyword.trim(),
      deptNos: this.expandDeptSelection(this.deptNos).join(","),
      fromDate: this.formatYmd(this.fromDate),
      toDate: this.formatYmd(this.toDate),
      shiftNo: this.shiftNo ?? "",
      draw: this.pageIndex,
      start: (this.pageIndex - 1) * this.pageSize,
      length: this.pageSize
    }).subscribe({
      next: (res) => {
        if (res.error) {
          this.errorMessage.set(res.error);
          this.rows.set([]);
          this.recordsTotal.set(0);
        } else {
          this.rows.set(res.data ?? []);
          this.recordsTotal.set(res.recordsTotal ?? 0);
        }
        this.selectedRecordNos.set(/* @__PURE__ */ new Set());
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.rows.set([]);
        this.recordsTotal.set(0);
        this.loading.set(false);
      }
    });
  }
  // ==================== Chọn dòng (checkbox) - chỉ dòng nhập tay mới được chọn/xóa ====================
  isRowSelectable(row) {
    return !AUTO_INSERT_BY.has((row.insertBy || "").toUpperCase());
  }
  isRowSelected(recordNo) {
    return this.selectedRecordNos().has(recordNo);
  }
  toggleRow(recordNo, checked) {
    const next = new Set(this.selectedRecordNos());
    if (checked)
      next.add(recordNo);
    else
      next.delete(recordNo);
    this.selectedRecordNos.set(next);
  }
  get allSelectableChecked() {
    const selectable = this.rows().filter((r) => this.isRowSelectable(r));
    return selectable.length > 0 && selectable.every((r) => this.isRowSelected(r.recordNo));
  }
  toggleAll(checked) {
    const next = new Set(this.selectedRecordNos());
    this.rows().filter((r) => this.isRowSelectable(r)).forEach((r) => {
      if (checked)
        next.add(r.recordNo);
      else
        next.delete(r.recordNo);
    });
    this.selectedRecordNos.set(next);
  }
  // ==================== Xuất excel (client-side, đúng trang dữ liệu đang tải - xem docblock class) ====================
  exportExcel() {
    const t = (key, fallback) => this.i18n.t(key, fallback);
    const headers = [
      t("common.stt", "STT"),
      t("common.empId", "M\xE3 nh\xE2n vi\xEAn"),
      t("common.empName", "H\u1ECD t\xEAn"),
      t("common.deptName", "Ph\xF2ng ban"),
      t("common.position", "Ch\u1EE9c v\u1EE5"),
      t("attSearch.shiftType", "Ca"),
      t("attSearch.workDate", "Ng\xE0y c\xF4ng"),
      t("acr.col.swipeTime", "Th\u1EDDi gian qu\u1EB9t th\u1EBB"),
      t("acr.col.doorType", "Lo\u1EA1i"),
      t("acr.col.dataSource", "Ngu\u1ED3n d\u1EEF li\u1EC7u")
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      r.empId,
      r.localName,
      r.deptName,
      r.postGradeName,
      r.shiftName,
      r.arDateStr,
      r.swipeTime,
      r.doorType,
      r.dataSourceName
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "LichSuRaVao");
    writeFileSync(workbook, "lich_su_ra_vao.xlsx");
  }
  // ==================== Modal Thêm/Sửa bản ghi ====================
  openAddModal() {
    this.form = __spreadValues({}, EMPTY_FORM);
    this.isEdit.set(false);
    this.modalVisible.set(true);
  }
  openEditModal(row) {
    this.api.getDetail(row.recordNo).subscribe({
      next: (res) => {
        if (!res.success || !res.data) {
          this.message.warning(res.message || this.i18n.t("common.loadFail", "Kh\xF4ng th\u1EC3 t\u1EA3i d\u1EEF li\u1EC7u b\u1EA3n ghi."));
          return;
        }
        const d = res.data;
        this.form = {
          recordNo: d.recordNo,
          personId: d.personId,
          empId: d.empId || "",
          empKeyword: (d.empId || "") + (d.localName ? " - " + d.localName : ""),
          empOptions: [],
          empSearching: false,
          arDateStr: this.parseArDateStr(d.arDateStr),
          swipeDateTime: d.swipeDatetime || "",
          doorType: d.doorType || null,
          remark: d.remark || ""
        };
        this.isEdit.set(true);
        this.modalVisible.set(true);
      },
      error: () => this.message.error(this.i18n.t("common.loadFail", "L\u1ED7i khi t\u1EA3i th\xF4ng tin b\u1EA3n ghi."))
    });
  }
  closeModal() {
    this.modalVisible.set(false);
  }
  onEmpKeywordChange(value) {
    this.form.empKeyword = value;
    this.form.personId = "";
    if (this.empSearchTimer)
      clearTimeout(this.empSearchTimer);
    const keyword = value.trim();
    if (!keyword) {
      this.form.empOptions = [];
      return;
    }
    this.empSearchTimer = setTimeout(() => {
      this.form.empSearching = true;
      this.api.searchEmployees(keyword).subscribe({
        next: (list) => {
          this.form.empOptions = list ?? [];
          this.form.empSearching = false;
        },
        error: () => {
          this.form.empOptions = [];
          this.form.empSearching = false;
        }
      });
    }, 300);
  }
  onEmpSelected(option) {
    this.form.personId = option.personId;
    this.form.empId = option.empId;
    this.form.empKeyword = `${option.empId} - ${option.localName}`;
    this.form.empOptions = [];
  }
  /** Auto-format YYYY/MM/DD HH:MM khi nhập - đúng logic bản gốc (chỉ giữ số, tự chèn dấu / và :). */
  onSwipeDateTimeInput(event) {
    const input = event.target;
    const raw = input.value.replace(/[^0-9]/g, "");
    let r = "";
    if (raw.length > 0)
      r += raw.substring(0, Math.min(4, raw.length));
    if (raw.length > 4)
      r += "/" + raw.substring(4, Math.min(6, raw.length));
    if (raw.length > 6)
      r += "/" + raw.substring(6, Math.min(8, raw.length));
    if (raw.length > 8)
      r += " " + raw.substring(8, Math.min(10, raw.length));
    if (raw.length > 10)
      r += ":" + raw.substring(10, Math.min(12, raw.length));
    this.form.swipeDateTime = r;
    input.value = r;
  }
  saveRecord() {
    const t = (key, fallback) => this.i18n.t(key, fallback);
    const f = this.form;
    if (!f.personId) {
      this.message.warning(t("acr.msg.selectEmployee", "Vui l\xF2ng ch\u1ECDn nh\xE2n vi\xEAn"));
      return;
    }
    if (!f.arDateStr) {
      this.message.warning(t("acr.msg.selectWorkDate", "Vui l\xF2ng nh\u1EADp ng\xE0y c\xF4ng"));
      return;
    }
    if (!f.swipeDateTime || f.swipeDateTime.length < 16) {
      this.message.warning(t("acr.msg.selectDatetime", "Vui l\xF2ng nh\u1EADp th\u1EDDi gian qu\u1EB9t th\u1EBB \u0111\xFAng \u0111\u1ECBnh d\u1EA1ng YYYY/MM/DD HH:MM"));
      return;
    }
    const payload = {
      recordNo: f.recordNo ?? void 0,
      personId: f.personId,
      cardNo: f.empId || void 0,
      arDateStr: formatDate(f.arDateStr, "yyyy/MM/dd", "vi"),
      doorType: f.doorType || void 0,
      remark: f.remark || void 0,
      swipeDatetime: f.swipeDateTime
    };
    this.saving.set(true);
    const save$ = this.isEdit() ? this.api.update(payload) : this.api.insert(payload);
    save$.subscribe({
      next: (res) => {
        this.saving.set(false);
        if (res.success) {
          this.modalVisible.set(false);
          this.loadPage();
        } else {
          this.message.error(res.message || t("applyAtt.saveError", "L\u1ED7i l\u01B0u d\u1EEF li\u1EC7u"));
        }
      },
      error: () => {
        this.saving.set(false);
        this.message.error(t("applyAtt.sendError", "L\u1ED7i khi g\u1EEDi d\u1EEF li\u1EC7u!"));
      }
    });
  }
  // ==================== Xóa ====================
  deleteOne(row) {
    const t = (key, fallback) => this.i18n.t(key, fallback);
    this.modal.confirm({
      nzTitle: t("common.action", "Thao t\xE1c"),
      nzContent: t("acr.confirm.deleteRecord", "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a b\u1EA3n ghi n\xE0y kh\xF4ng?"),
      nzOnOk: () => this.runDelete([row.recordNo])
    });
  }
  deleteSelected() {
    const t = (key, fallback) => this.i18n.t(key, fallback);
    const recordNos = Array.from(this.selectedRecordNos());
    if (recordNos.length === 0) {
      this.message.warning(t("acr.msg.selectToDelete", "Vui l\xF2ng ch\u1ECDn \xEDt nh\u1EA5t m\u1ED9t b\u1EA3n ghi \u0111\u1EC3 x\xF3a"));
      return;
    }
    this.modal.confirm({
      nzTitle: t("common.action", "Thao t\xE1c"),
      nzContent: t("acr.confirm.deleteSelected", "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a c\xE1c b\u1EA3n ghi \u0111\xE3 ch\u1ECDn kh\xF4ng?"),
      nzOnOk: () => this.runDelete(recordNos)
    });
  }
  async runDelete(recordNos) {
    for (const recordNo of recordNos) {
      try {
        await firstValueFrom(this.api.delete(recordNo));
      } catch {
      }
    }
    this.loadPage();
  }
  // ==================== Đọc dữ liệu quẹt thẻ từ máy chủ ====================
  openImportModal() {
    this.impFromDate = this.fromDate;
    this.impToDate = this.toDate;
    this.impResult.set(null);
    this.impModalVisible.set(true);
  }
  closeImportModal() {
    this.impModalVisible.set(false);
  }
  runImport() {
    const t = (key, fallback) => this.i18n.t(key, fallback);
    if (!this.impFromDate || !this.impToDate) {
      this.message.warning(t("acr.imp.msg.selectDate", "Vui l\xF2ng ch\u1ECDn kho\u1EA3ng th\u1EDDi gian c\u1EA7n \u0111\u1ECDc d\u1EEF li\u1EC7u"));
      return;
    }
    this.impRunning.set(true);
    this.impResult.set(null);
    this.api.importFromDevice(this.formatYmd(this.impFromDate), this.formatYmd(this.impToDate)).subscribe({
      next: (res) => {
        this.impRunning.set(false);
        this.impResult.set(res);
        if (res.success)
          this.loadPage();
      },
      error: () => {
        this.impRunning.set(false);
        this.impResult.set({ success: false, message: t("applyAtt.sendError", "L\u1ED7i k\u1EBFt n\u1ED1i m\xE1y ch\u1EE7, vui l\xF2ng th\u1EED l\u1EA1i.") });
      }
    });
  }
  // ==================== Import Excel / tải file mẫu ====================
  downloadTemplate() {
    window.location.href = this.api.downloadTemplateUrl();
  }
  onExcelFileSelected(event) {
    const t = (key, fallback) => this.i18n.t(key, fallback);
    const input = event.target;
    const file = input.files?.[0];
    input.value = "";
    if (!file)
      return;
    this.importingExcel.set(true);
    this.api.uploadExcel(file).subscribe({
      next: (res) => {
        this.importingExcel.set(false);
        if (res.success)
          this.message.success(res.message || t("common.save", "L\u01B0u"));
        else
          this.message.warning(res.message || t("applyAtt.saveError", "L\u1ED7i l\u01B0u d\u1EEF li\u1EC7u"));
        this.loadPage();
        this.tabs.openTab("/ar/attendanceMintenance/viewImportExcelTempMacRecordsList", t("applyAtt.importResult", "K\u1EBFt qu\u1EA3 nh\u1EADp"), "external");
      },
      error: () => {
        this.importingExcel.set(false);
        this.message.error(t("applyAtt.sendError", "L\u1ED7i khi g\u1EEDi d\u1EEF li\u1EC7u!"));
      }
    });
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
   *  như widget DeptTree.js gốc. Backend lọc theo deptNos đúng từng mã, nên phải tự mở rộng xuống các
   *  phòng ban con trước khi gửi lên (xem giải thích đầy đủ ở ManageEmpPositionInfoComponent). */
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
  // ==================== Helpers ngày giờ ====================
  formatYmd(d) {
    return d ? formatDate(d, "yyyy-MM-dd", "vi") : "";
  }
  /** arDateStr backend trả dạng YYYY/MM/DD - parse thủ công thay vì `new Date(str)` vì Date không hiểu
   *  chuẩn có dấu "/" nhất quán trên mọi trình duyệt. */
  parseArDateStr(arDateStr) {
    if (!arDateStr)
      return null;
    const parts = arDateStr.split("/").map(Number);
    if (parts.length !== 3 || parts.some((p) => Number.isNaN(p)))
      return null;
    return new Date(parts[0], parts[1] - 1, parts[2]);
  }
  static \u0275fac = function ViewArCardRecordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewArCardRecordComponent)(\u0275\u0275directiveInject(ViewArCardRecordService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService), \u0275\u0275directiveInject(NzModalService), \u0275\u0275directiveInject(TabService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewArCardRecordComponent, selectors: [["app-view-ar-card-record"]], decls: 99, vars: 135, consts: [["acrTotalTpl", ""], ["excelFileInput", ""], ["empAuto", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", "align-items-end", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["nz-input", "", "name", "keyword", 3, "ngModelChange", "ngModel", "placeholder"], [1, "col-md-2"], ["name", "fromDate", "nzFormat", "yyyy-MM-dd", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "toDate", "nzFormat", "yyyy-MM-dd", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "deptNos", "nzCheckable", "", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["class", "text-danger small mt-1", 4, "ngIf"], ["name", "shiftNo", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col-12", "d-flex", "align-items-end", "gap-2", "flex-wrap", "justify-content-end"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], ["nz-button", "", "nzType", "default", "type", "button", 3, "click"], [1, "bx", "bx-export"], [4, "ngIf"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], ["nzShowSizeChanger", "", 1, "table-nowrap", 3, "nzPageIndexChange", "nzPageSizeChange", "nzData", "nzFrontPagination", "nzLoading", "nzTotal", "nzPageIndex", "nzPageSize", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["class", "text-center", "nzWidth", "50px", 4, "ngIf"], ["nzWidth", "100px", 1, "text-center"], ["nzWidth", "140px"], ["nzWidth", "160px"], ["nzWidth", "120px"], ["nzWidth", "90px", 1, "text-center"], ["nzWidth", "150px", 1, "text-center"], ["nzWidth", "80px", 1, "text-center"], ["nzWidth", "110px", 1, "text-center"], ["class", "text-center", "nzWidth", "100px", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["nzWidth", "640px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], ["nzWidth", "480px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [1, "text-danger", "small", "mt-1"], [3, "nzValue", "nzLabel"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzDanger", "", "type", "button", 3, "click"], [1, "bx", "bx-trash"], [1, "bx", "bx-id-card"], [1, "bx", "bx-download"], ["nz-button", "", "type", "button", 3, "click", "nzLoading"], [1, "bx", "bx-upload"], ["type", "file", "hidden", "", "accept", ".xlsx,.xls", 3, "change"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["nzWidth", "50px", 1, "text-center"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel"], [1, "text-center"], ["class", "text-center", 4, "ngIf"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["nz-button", "", "nzType", "text", "nzSize", "small", 3, "click", "title"], [1, "bx", "bx-edit", "text-warning"], ["nz-button", "", "nzType", "text", "nzSize", "small", "nzDanger", "", 3, "title", "click", 4, "ngIf"], ["nz-button", "", "nzType", "text", "nzSize", "small", "nzDanger", "", 3, "click", "title"], [1, "acr-form"], [1, "acr-form-row"], [1, "acr-required"], ["nz-input", "", "name", "empKeyword", 3, "ngModelChange", "ngModel", "nzAutocomplete", "placeholder"], [3, "nzValue", "click", 4, "ngFor", "ngForOf"], [1, "acr-form-row-2"], ["name", "arDateStr", "nzFormat", "yyyy/MM/dd", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "swipeDateTime", "maxlength", "16", "placeholder", "YYYY/MM/DD HH:MM", 3, "input", "ngModel"], ["name", "doorType", 3, "ngModelChange", "ngModel", "nzPlaceHolder", "nzAllowClear"], ["nzValue", "IN", 3, "nzLabel"], ["nzValue", "OUT", 3, "nzLabel"], ["nz-input", "", "name", "remark", 3, "ngModelChange", "ngModel"], [3, "click", "nzValue"], [1, "text-muted"], ["name", "impFromDate", "nzFormat", "yyyy-MM-dd", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "impToDate", "nzFormat", "yyyy-MM-dd", 1, "w-100", 3, "ngModelChange", "ngModel"], ["class", "text-center mt-3", 4, "ngIf"], ["class", "mt-3", 4, "ngIf"], [1, "text-center", "mt-3"], ["role", "status", 1, "spinner-border", "text-warning"], [1, "mt-2", "text-muted"], [1, "mt-3"], ["nzShowIcon", "", 3, "nzType", "nzMessage"], ["class", "mt-2 mb-0", 4, "ngIf"], [1, "mt-2", "mb-0"], [1, "text-success"], [1, "text-warning"]], template: function ViewArCardRecordComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "nz-card", 5)(3, "form", 6);
      \u0275\u0275listener("ngSubmit", function ViewArCardRecordComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 7)(5, "label", 8);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 9);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewArCardRecordComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.keyword, $event) || (ctx.keyword = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 10)(11, "label", 8);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "nz-date-picker", 11);
      \u0275\u0275twoWayListener("ngModelChange", function ViewArCardRecordComponent_Template_nz_date_picker_ngModelChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.fromDate, $event) || (ctx.fromDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 10)(16, "label", 8);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "nz-date-picker", 12);
      \u0275\u0275twoWayListener("ngModelChange", function ViewArCardRecordComponent_Template_nz_date_picker_ngModelChange_19_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.toDate, $event) || (ctx.toDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 7)(21, "label", 8);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "nz-tree-select", 13);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewArCardRecordComponent_Template_nz_tree_select_ngModelChange_24_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.deptNos, $event) || (ctx.deptNos = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275template(26, ViewArCardRecordComponent_div_26_Template, 2, 1, "div", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 10)(28, "label", 8);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "nz-select", 15);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewArCardRecordComponent_Template_nz_select_ngModelChange_31_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.shiftNo, $event) || (ctx.shiftNo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(33, ViewArCardRecordComponent_nz_option_33_Template, 1, 2, "nz-option", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 17)(35, "button", 18);
      \u0275\u0275element(36, "i", 19);
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "button", 20);
      \u0275\u0275listener("click", function ViewArCardRecordComponent_Template_button_click_39_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(40, "i", 21);
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "button", 22);
      \u0275\u0275listener("click", function ViewArCardRecordComponent_Template_button_click_43_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(44, "i", 23);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(47, ViewArCardRecordComponent_ng_container_47_Template, 23, 21, "ng-container", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "nz-card");
      \u0275\u0275template(49, ViewArCardRecordComponent_nz_alert_49_Template, 1, 1, "nz-alert", 25);
      \u0275\u0275elementStart(50, "nz-table", 26);
      \u0275\u0275listener("nzPageIndexChange", function ViewArCardRecordComponent_Template_nz_table_nzPageIndexChange_50_listener($event) {
        return ctx.onPageIndexChange($event);
      })("nzPageSizeChange", function ViewArCardRecordComponent_Template_nz_table_nzPageSizeChange_50_listener($event) {
        return ctx.onPageSizeChange($event);
      });
      \u0275\u0275elementStart(51, "thead")(52, "tr")(53, "th", 27);
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(56, ViewArCardRecordComponent_th_56_Template, 2, 1, "th", 28);
      \u0275\u0275elementStart(57, "th", 29);
      \u0275\u0275text(58);
      \u0275\u0275pipe(59, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "th", 30);
      \u0275\u0275text(61);
      \u0275\u0275pipe(62, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "th", 31);
      \u0275\u0275text(64);
      \u0275\u0275pipe(65, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "th", 32);
      \u0275\u0275text(67);
      \u0275\u0275pipe(68, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "th", 33);
      \u0275\u0275text(70);
      \u0275\u0275pipe(71, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "th", 29);
      \u0275\u0275text(73);
      \u0275\u0275pipe(74, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "th", 34);
      \u0275\u0275text(76);
      \u0275\u0275pipe(77, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "th", 35);
      \u0275\u0275text(79);
      \u0275\u0275pipe(80, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "th", 36);
      \u0275\u0275text(82);
      \u0275\u0275pipe(83, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(84, ViewArCardRecordComponent_th_84_Template, 3, 4, "th", 37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "tbody");
      \u0275\u0275template(86, ViewArCardRecordComponent_tr_86_Template, 23, 16, "tr", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275template(87, ViewArCardRecordComponent_ng_template_87_Template, 2, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(89, "nz-modal", 39);
      \u0275\u0275pipe(90, "translate");
      \u0275\u0275pipe(91, "translate");
      \u0275\u0275pipe(92, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewArCardRecordComponent_Template_nz_modal_nzOnCancel_89_listener() {
        return ctx.closeModal();
      })("nzOnOk", function ViewArCardRecordComponent_Template_nz_modal_nzOnOk_89_listener() {
        return ctx.saveRecord();
      });
      \u0275\u0275template(93, ViewArCardRecordComponent_ng_container_93_Template, 44, 44, "ng-container", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "nz-modal", 41);
      \u0275\u0275pipe(95, "translate");
      \u0275\u0275pipe(96, "translate");
      \u0275\u0275pipe(97, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewArCardRecordComponent_Template_nz_modal_nzOnCancel_94_listener() {
        return ctx.closeImportModal();
      })("nzOnOk", function ViewArCardRecordComponent_Template_nz_modal_nzOnOk_94_listener() {
        return ctx.runImport();
      });
      \u0275\u0275template(98, ViewArCardRecordComponent_ng_container_98_Template, 14, 12, "ng-container", 40);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const acrTotalTpl_r19 = \u0275\u0275reference(88);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 53, "common.search.empIdOrName", "M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.keyword);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 56, "common.placeholder.enterEmpId", "Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 59, "common.fromDate", "T\u1EEB ng\xE0y"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.fromDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 62, "common.toDate", "\u0110\u1EBFn ng\xE0y"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.toDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 65, "common.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzNodes", ctx.deptNodes());
      \u0275\u0275twoWayProperty("ngModel", ctx.deptNos);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(25, 68, "common.select", "Ch\u1ECDn ph\xF2ng ban"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.deptTreeErrorMessage());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 71, "attSearch.shiftType", "Ca l\xE0m vi\u1EC7c"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.shiftNo);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(32, 74, "attSearch.all", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.shiftOptions());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(38, 77, "common.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(42, 80, "common.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(46, 83, "common.exportExcel", "Xu\u1EA5t Excel"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.hrmMode);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzFrontPagination", false)("nzLoading", ctx.loading())("nzTotal", ctx.recordsTotal())("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", acrTotalTpl_r19)("nzScroll", \u0275\u0275pureFunction0(134, _c0));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(55, 86, "common.stt", "STT"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.hrmMode);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(59, 89, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(62, 92, "common.empName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(65, 95, "common.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(68, 98, "common.position", "Ch\u1EE9c v\u1EE5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(71, 101, "attSearch.shiftType", "Ca"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(74, 104, "attSearch.workDate", "Ng\xE0y c\xF4ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(77, 107, "acr.col.swipeTime", "Th\u1EDDi gian qu\u1EB9t th\u1EBB"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(80, 110, "acr.col.doorType", "Lo\u1EA1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(83, 113, "acr.col.dataSource", "Ngu\u1ED3n d\u1EEF li\u1EC7u"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.hrmMode);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.rows());
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", \u0275\u0275pipeBind2(90, 116, ctx.isEdit() ? "acr.modal.editTitle" : "acr.modal.addTitle", ctx.isEdit() ? "Ch\u1EC9nh s\u1EEDa b\u1EA3n ghi qu\u1EB9t th\u1EBB" : "Th\xEAm b\u1EA3n ghi qu\u1EB9t th\u1EBB"))("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(91, 119, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(92, 122, "common.cancel", "H\u1EE7y"));
      \u0275\u0275advance(5);
      \u0275\u0275property("nzVisible", ctx.impModalVisible())("nzTitle", \u0275\u0275pipeBind2(95, 125, "acr.imp.title", "\u0110\u1ECDc d\u1EEF li\u1EC7u qu\u1EB9t th\u1EBB t\u1EEB m\xE1y ch\u1EE7"))("nzOkLoading", ctx.impRunning())("nzOkText", \u0275\u0275pipeBind2(96, 128, "acr.imp.btnRun", "Th\u1EF1c hi\u1EC7n"))("nzCancelText", \u0275\u0275pipeBind2(97, 131, "common.close", "\u0110\xF3ng"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzDatePickerModule, NzDatePickerComponent, NzTreeSelectModule, NzTreeSelectComponent, NzCheckboxModule, NzCheckboxComponent, NzAutocompleteModule, NzAutocompleteComponent, NzAutocompleteOptionComponent, NzAutocompleteTriggerDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], \ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.acr-form-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 12px;\n  position: relative;\n}\n.acr-form-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: .82rem;\n  font-weight: 600;\n  color: #334155;\n}\n.acr-form-row-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.acr-required[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n/*# sourceMappingURL=view-ar-card-record.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewArCardRecordComponent, [{
    type: Component,
    args: [{ selector: "app-view-ar-card-record", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzSelectModule,
      NzButtonModule,
      NzDatePickerModule,
      NzTreeSelectModule,
      NzCheckboxModule,
      NzAutocompleteModule,
      NzModalModule,
      NzAlertModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm - \u0111\u1EE9ng im khi cu\u1ED9n (xem .sticky-filter-card trong styles.css) -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3 align-items-end" (ngSubmit)="search()">
        <div class="col-md-3">
          <label class="form-label">{{ 'common.search.empIdOrName' | translate:'M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn' }}</label>
          <input nz-input [(ngModel)]="keyword" name="keyword"
                 [placeholder]="'common.placeholder.enterEmpId' | translate:'Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn'">
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'common.fromDate' | translate:'T\u1EEB ng\xE0y' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="fromDate" name="fromDate" nzFormat="yyyy-MM-dd"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'common.toDate' | translate:'\u0110\u1EBFn ng\xE0y' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="toDate" name="toDate" nzFormat="yyyy-MM-dd"></nz-date-picker>
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</label>
          <nz-tree-select class="w-100" [nzNodes]="deptNodes()" [(ngModel)]="deptNos" name="deptNos"
                           nzCheckable nzShowSearch nzAllowClear
                           [nzPlaceHolder]="'common.select' | translate:'Ch\u1ECDn ph\xF2ng ban'"></nz-tree-select>
          <div *ngIf="deptTreeErrorMessage()" class="text-danger small mt-1">{{ deptTreeErrorMessage() }}</div>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'attSearch.shiftType' | translate:'Ca l\xE0m vi\u1EC7c' }}</label>
          <nz-select class="w-100" [(ngModel)]="shiftNo" name="shiftNo" nzAllowClear
                     [nzPlaceHolder]="'attSearch.all' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let s of shiftOptions()" [nzValue]="s.shiftNo" [nzLabel]="s.nameVi || s.shiftNo"></nz-option>
          </nz-select>
        </div>
        <div class="col-12 d-flex align-items-end gap-2 flex-wrap justify-content-end">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'common.search' | translate:'Tra c\u1EE9u' }}
          </button>
          <button nz-button type="button" (click)="clearSearch()">
            <i class="bx bx-x"></i> {{ 'common.clearFilter' | translate:'X\xF3a l\u1ECDc' }}
          </button>
          <button nz-button nzType="default" type="button" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'common.exportExcel' | translate:'Xu\u1EA5t Excel' }}
          </button>
          <ng-container *ngIf="hrmMode">
            <button nz-button nzType="primary" type="button" (click)="openAddModal()">
              <i class="bx bx-plus"></i> {{ 'acr.btn.addRecord' | translate:'Th\xEAm b\u1EA3n ghi' }}
            </button>
            <button nz-button nzDanger type="button" (click)="deleteSelected()">
              <i class="bx bx-trash"></i> {{ 'acr.btn.deleteSelected' | translate:'X\xF3a \u0111\xE3 ch\u1ECDn' }}
            </button>
            <button nz-button type="button" (click)="openImportModal()">
              <i class="bx bx-id-card"></i> {{ 'acr.btn.importFromDevice' | translate:'\u0110\u1ECDc d\u1EEF li\u1EC7u qu\u1EB9t th\u1EBB' }}
            </button>
            <button nz-button type="button" (click)="downloadTemplate()">
              <i class="bx bx-download"></i> {{ 'common.downloadTemplate' | translate:'T\u1EA3i File M\u1EABu' }}
            </button>
            <button nz-button type="button" [nzLoading]="importingExcel()" (click)="excelFileInput.click()">
              <i class="bx bx-upload"></i> {{ 'common.importExcel' | translate:'Import Excel' }}
            </button>
            <input #excelFileInput type="file" hidden accept=".xlsx,.xls" (change)="onExcelFileSelected($event)">
          </ng-container>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <nz-table [nzData]="rows()" [nzFrontPagination]="false" [nzLoading]="loading()"
                [nzTotal]="recordsTotal()" [nzPageIndex]="pageIndex" [nzPageSize]="pageSize"
                [nzPageSizeOptions]="pageSizeOptions" nzShowSizeChanger [nzShowTotal]="acrTotalTpl"
                (nzPageIndexChange)="onPageIndexChange($event)" (nzPageSizeChange)="onPageSizeChange($event)"
                [nzScroll]="{ x: '1400px', y: 'calc(100vh - 380px)' }"
                class="table-nowrap">
        <!-- nzWidth khai b\xE1o cho t\u1EEBng c\u1ED9t \u0111\u1EC3 \u0111\u1ED3ng b\u1ED9 \u0111\u1ED9 r\u1ED9ng header/body khi d\xF9ng nzScroll (xem
             gi\u1EA3i th\xEDch \u1EDF dept-ot-apply-info.component.html). -->
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th class="text-center" nzWidth="50px" *ngIf="hrmMode">
              <label nz-checkbox [ngModel]="allSelectableChecked" (ngModelChange)="toggleAll($event)"></label>
            </th>
            <th class="text-center" nzWidth="100px">{{ 'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
            <th nzWidth="140px">{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
            <th nzWidth="160px">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
            <th nzWidth="120px">{{ 'common.position' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'attSearch.shiftType' | translate:'Ca' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'attSearch.workDate' | translate:'Ng\xE0y c\xF4ng' }}</th>
            <th class="text-center" nzWidth="150px">{{ 'acr.col.swipeTime' | translate:'Th\u1EDDi gian qu\u1EB9t th\u1EBB' }}</th>
            <th class="text-center" nzWidth="80px">{{ 'acr.col.doorType' | translate:'Lo\u1EA1i' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'acr.col.dataSource' | translate:'Ngu\u1ED3n d\u1EEF li\u1EC7u' }}</th>
            <th class="text-center" nzWidth="100px" *ngIf="hrmMode">{{ 'common.action' | translate:'Thao t\xE1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of rows(); let i = index">
            <td class="text-center">{{ (pageIndex - 1) * pageSize + i + 1 }}</td>
            <td class="text-center" *ngIf="hrmMode">
              <label *ngIf="isRowSelectable(row)" nz-checkbox [ngModel]="isRowSelected(row.recordNo)"
                     (ngModelChange)="toggleRow(row.recordNo, $event)"></label>
            </td>
            <td class="text-center" [attr.title]="row.empId || null">{{ row.empId }}</td>
            <td [attr.title]="row.localName || null">{{ row.localName }}</td>
            <td [attr.title]="row.deptName || null">{{ row.deptName }}</td>
            <td [attr.title]="row.postGradeName || null">{{ row.postGradeName }}</td>
            <td class="text-center">{{ row.shiftName }}</td>
            <td class="text-center">{{ row.arDateStr }}</td>
            <td class="text-center">{{ row.swipeTime }}</td>
            <td class="text-center">{{ row.doorType }}</td>
            <td class="text-center">{{ row.dataSourceName }}</td>
            <td class="text-center" *ngIf="hrmMode">
              <button nz-button nzType="text" nzSize="small" (click)="openEditModal(row)" [title]="'common.action' | translate:'S\u1EEDa'">
                <i class="bx bx-edit text-warning"></i>
              </button>
              <button *ngIf="isRowSelectable(row)" nz-button nzType="text" nzSize="small" nzDanger
                      (click)="deleteOne(row)" [title]="'common.action' | translate:'X\xF3a'">
                <i class="bx bx-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
        <ng-template #acrTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- ===== Modal Th\xEAm/S\u1EEDa b\u1EA3n ghi qu\u1EB9t th\u1EBB ===== -->
<nz-modal [nzVisible]="modalVisible()" [nzTitle]="(isEdit() ? 'acr.modal.editTitle' : 'acr.modal.addTitle') | translate:(isEdit() ? 'Ch\u1EC9nh s\u1EEDa b\u1EA3n ghi qu\u1EB9t th\u1EBB' : 'Th\xEAm b\u1EA3n ghi qu\u1EB9t th\u1EBB')"
          nzWidth="640px" (nzOnCancel)="closeModal()" [nzOkLoading]="saving()"
          [nzOkText]="'common.save' | translate:'L\u01B0u'" [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'"
          (nzOnOk)="saveRecord()">
  <ng-container *nzModalContent>
    <form class="acr-form">
      <div class="acr-form-row">
        <label>{{ 'acr.col.employee' | translate:'Nh\xE2n vi\xEAn' }} <span class="acr-required">*</span></label>
        <input nz-input [ngModel]="form.empKeyword" (ngModelChange)="onEmpKeywordChange($event)" name="empKeyword"
               [nzAutocomplete]="empAuto" [placeholder]="'empSearch.placeholder.empId' | translate:'Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn nh\xE2n vi\xEAn...'">
        <nz-autocomplete #empAuto>
          <nz-auto-option *ngFor="let opt of form.empOptions" [nzValue]="opt" (click)="onEmpSelected(opt)">
            {{ opt.empId }} - {{ opt.localName }} <small class="text-muted">({{ opt.deptName }})</small>
          </nz-auto-option>
        </nz-autocomplete>
      </div>
      <div class="acr-form-row-2">
        <div class="acr-form-row">
          <label>{{ 'attSearch.workDate' | translate:'Ng\xE0y c\xF4ng' }} <span class="acr-required">*</span></label>
          <nz-date-picker class="w-100" [(ngModel)]="form.arDateStr" name="arDateStr" nzFormat="yyyy/MM/dd"></nz-date-picker>
        </div>
        <div class="acr-form-row">
          <label>{{ 'acr.col.swipeTime' | translate:'Th\u1EDDi gian qu\u1EB9t th\u1EBB' }} <span class="acr-required">*</span></label>
          <input nz-input [ngModel]="form.swipeDateTime" (input)="onSwipeDateTimeInput($event)" name="swipeDateTime"
                 maxlength="16" placeholder="YYYY/MM/DD HH:MM">
        </div>
      </div>
      <div class="acr-form-row-2">
        <div class="acr-form-row">
          <label>{{ 'acr.col.doorType' | translate:'Lo\u1EA1i' }}</label>
          <nz-select [(ngModel)]="form.doorType" name="doorType" [nzPlaceHolder]="'common.select' | translate:'Ch\u1ECDn'" [nzAllowClear]="true">
            <nz-option nzValue="IN" [nzLabel]="'acr.doorType.in' | translate:'V\xE0o'"></nz-option>
            <nz-option nzValue="OUT" [nzLabel]="'acr.doorType.out' | translate:'Ra'"></nz-option>
          </nz-select>
        </div>
        <div class="acr-form-row">
          <label>{{ 'acr.col.remark' | translate:'Ghi ch\xFA' }}</label>
          <input nz-input [(ngModel)]="form.remark" name="remark">
        </div>
      </div>
    </form>
  </ng-container>
</nz-modal>

<!-- ===== Modal \u0110\u1ECDc d\u1EEF li\u1EC7u qu\u1EB9t th\u1EBB t\u1EEB m\xE1y ch\u1EE7 ===== -->
<nz-modal [nzVisible]="impModalVisible()" [nzTitle]="'acr.imp.title' | translate:'\u0110\u1ECDc d\u1EEF li\u1EC7u qu\u1EB9t th\u1EBB t\u1EEB m\xE1y ch\u1EE7'"
          nzWidth="480px" (nzOnCancel)="closeImportModal()" [nzOkLoading]="impRunning()"
          [nzOkText]="'acr.imp.btnRun' | translate:'Th\u1EF1c hi\u1EC7n'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'"
          (nzOnOk)="runImport()">
  <ng-container *nzModalContent>
    <div class="acr-form-row-2">
      <div class="acr-form-row">
        <label>{{ 'common.fromDate' | translate:'T\u1EEB ng\xE0y' }}</label>
        <nz-date-picker class="w-100" [(ngModel)]="impFromDate" name="impFromDate" nzFormat="yyyy-MM-dd"></nz-date-picker>
      </div>
      <div class="acr-form-row">
        <label>{{ 'common.toDate' | translate:'\u0110\u1EBFn ng\xE0y' }}</label>
        <nz-date-picker class="w-100" [(ngModel)]="impToDate" name="impToDate" nzFormat="yyyy-MM-dd"></nz-date-picker>
      </div>
    </div>

    <div *ngIf="impRunning()" class="text-center mt-3">
      <div class="spinner-border text-warning" role="status"></div>
      <div class="mt-2 text-muted">{{ 'acr.imp.processing' | translate:'\u0110ang k\u1EBFt n\u1ED1i v\xE0 \u0111\u1ECDc d\u1EEF li\u1EC7u...' }}</div>
    </div>

    <div *ngIf="!impRunning() && impResult() as res" class="mt-3">
      <hr>
      <nz-alert [nzType]="res.success ? 'success' : 'error'" [nzMessage]="res.message || ''" nzShowIcon></nz-alert>
      <ul *ngIf="res.success" class="mt-2 mb-0">
        <li>{{ 'acr.imp.result.total' | translate:'T\u1ED5ng b\u1EA3n ghi t\u1EEB m\xE1y ch\u1EE7' }}: <strong>{{ res.total || 0 }}</strong></li>
        <li>{{ 'acr.imp.result.imported' | translate:'\u0110\xE3 l\u01B0u m\u1EDBi' }}: <strong class="text-success">{{ res.imported || 0 }}</strong></li>
        <li>{{ 'acr.imp.result.skipped' | translate:'B\u1ECF qua (tr\xF9ng)' }}: <strong>{{ res.skipped || 0 }}</strong></li>
        <li>{{ 'acr.imp.result.notFound' | translate:'Kh\xF4ng t\xECm th\u1EA5y nh\xE2n vi\xEAn' }}: <strong class="text-warning">{{ res.notFound || 0 }}</strong></li>
      </ul>
    </div>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-ar-card-record/view-ar-card-record.component.css */\ntable td,\ntable th {\n  white-space: nowrap;\n}\ntable td {\n  vertical-align: middle;\n}\n.acr-form-row {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 12px;\n  position: relative;\n}\n.acr-form-row label {\n  font-size: .82rem;\n  font-weight: 600;\n  color: #334155;\n}\n.acr-form-row-2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.acr-required {\n  color: #dc2626;\n}\n/*# sourceMappingURL=view-ar-card-record.component.css.map */\n"] }]
  }], () => [{ type: ViewArCardRecordService }, { type: I18nService }, { type: NzMessageService }, { type: NzModalService }, { type: TabService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewArCardRecordComponent, { className: "ViewArCardRecordComponent", filePath: "src/app/view-ar-card-record/view-ar-card-record.component.ts", lineNumber: 100 });
})();
export {
  ViewArCardRecordComponent
};
//# debugId=1d2b3514-263a-555f-aa4b-cc11564aa58e
//# sourceMappingURL=chunk-4FM4XQBX.js.map
