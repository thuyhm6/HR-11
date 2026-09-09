import {
  ChangeUserService
} from "./chunk-L26I55F6.js";
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
  HttpParams,
  Injectable,
  NgForOf,
  NgIf,
  NzButtonComponent,
  NzButtonModule,
  NzTransitionPatchDirective,
  NzWaveDirective,
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

// src/app/add-emp-shift/add-emp-shift.service.ts
var API_BASE = "/ar/attendanceMintenance/api/scheduleHtsv";
var EXCEL_TEMPLATE_NAME = "AR_SCHEDULE_HTSV_Template";
var AddEmpShiftService = class _AddEmpShiftService {
  constructor(http) {
    this.http = http;
  }
  http;
  list(empId, month) {
    let httpParams = new HttpParams();
    if (empId)
      httpParams = httpParams.set("empId", empId);
    if (month)
      httpParams = httpParams.set("month", month);
    return this.http.get(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
  }
  getByPkNo(pkNo) {
    return this.http.get(`${API_BASE}/${pkNo}`, { withCredentials: true });
  }
  save(payload) {
    return this.http.post(`${API_BASE}/save`, payload, {
      withCredentials: true
    });
  }
  delete(pkNo) {
    return this.http.delete(`${API_BASE}/delete/${pkNo}`, {
      withCredentials: true
    });
  }
  getShiftList() {
    return this.http.get("/ar/attendanceSettings/api/shift", { withCredentials: true });
  }
  downloadTemplateUrl() {
    return `/sy/excel/api/downloadTemplate?templateName=${EXCEL_TEMPLATE_NAME}`;
  }
  uploadExcel(file) {
    const fd = new FormData();
    fd.append("templateName", EXCEL_TEMPLATE_NAME);
    fd.append("file", file);
    return this.http.post("/sy/excel/api/importTemplate", fd, { withCredentials: true });
  }
  static \u0275fac = function AddEmpShiftService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddEmpShiftService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AddEmpShiftService, factory: _AddEmpShiftService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddEmpShiftService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/add-emp-shift/add-emp-shift.component.ts
var _c0 = () => ({ x: "1100px", y: "calc(100vh - 420px)" });
function AddEmpShiftComponent_nz_alert_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 43);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r2.errorMessage() ?? "");
  }
}
function AddEmpShiftComponent_tr_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 44);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function AddEmpShiftComponent_tr_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 45);
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
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 45)(16, "button", 46);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275listener("click", function AddEmpShiftComponent_tr_75_Template_button_click_16_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openEditModal(row_r5));
    });
    \u0275\u0275element(18, "i", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 46);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275listener("click", function AddEmpShiftComponent_tr_75_Template_button_click_19_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openDeleteConfirm(row_r5));
    });
    \u0275\u0275element(21, "i", 48);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r6 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.toDmy(row_r5.arDateStr));
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.empId || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.empId);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.localName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.localName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.shiftName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.shiftName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.typeName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.typeName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.remark || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.remark);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(17, 14, "common.action", "S\u1EEDa"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(20, 17, "common.delete", "X\xF3a"));
  }
}
function AddEmpShiftComponent_ng_template_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r7 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r7, " ");
  }
}
function AddEmpShiftComponent_ng_container_82_small_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 61);
    \u0275\u0275element(1, "i", 62);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(3, 2, "arSupervisor.js.empSelected", "\u0110\xE3 ch\u1ECDn NV: "), "", ctx_r2.form.empDisplay, " ");
  }
}
function AddEmpShiftComponent_ng_container_82_nz_option_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 63);
  }
  if (rf & 2) {
    const s_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzValue", s_r9.shiftNo)("nzLabel", ctx_r2.shiftLabel(s_r9));
  }
}
function AddEmpShiftComponent_ng_container_82_nz_option_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 63);
  }
  if (rf & 2) {
    const c_r10 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r10.codeNo)("nzLabel", c_r10.codeName);
  }
}
function AddEmpShiftComponent_ng_container_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 49)(2, "div", 50)(3, "label", 9);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span", 51);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 52);
    \u0275\u0275element(9, "input", 53);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(11, "button", 20);
    \u0275\u0275listener("click", function AddEmpShiftComponent_ng_container_82_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openPicker());
    });
    \u0275\u0275element(12, "i", 14);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, AddEmpShiftComponent_ng_container_82_small_15_Template, 4, 5, "small", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 50)(17, "label", 9);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementStart(20, "span", 51);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "nz-date-picker", 55);
    \u0275\u0275twoWayListener("ngModelChange", function AddEmpShiftComponent_ng_container_82_Template_nz_date_picker_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.arDateStr, $event) || (ctx_r2.form.arDateStr = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 50)(24, "label", 9);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementStart(27, "span", 51);
    \u0275\u0275text(28, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "nz-select", 56);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function AddEmpShiftComponent_ng_container_82_Template_nz_select_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.shiftNo, $event) || (ctx_r2.form.shiftNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(31, AddEmpShiftComponent_ng_container_82_nz_option_31_Template, 1, 2, "nz-option", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 50)(33, "label", 9);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "nz-select", 58);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function AddEmpShiftComponent_ng_container_82_Template_nz_select_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.typeid, $event) || (ctx_r2.form.typeid = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(38, AddEmpShiftComponent_ng_container_82_nz_option_38_Template, 1, 2, "nz-option", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 59)(40, "label", 9);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "textarea", 60);
    \u0275\u0275twoWayListener("ngModelChange", function AddEmpShiftComponent_ng_container_82_Template_textarea_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.remark, $event) || (ctx_r2.form.remark = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 17, "arSupervisor.field.emp", "Nh\xE2n vi\xEAn"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r2.form.empDisplay)("placeholder", \u0275\u0275pipeBind2(10, 20, "arSupervisor.placeholder.selectEmp", "Ch\u1ECDn nh\xE2n vi\xEAn..."));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 23, "arSupervisor.btn.select", "Ch\u1ECDn"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.form.personId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(19, 26, "addShift.shiftDate", "Ng\xE0y c\xF4ng"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.arDateStr);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 29, "addShift.shift", "Ca l\xE0m vi\u1EC7c"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.shiftNo);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(30, 32, "addShift.selectShift", "-- Ch\u1ECDn ca l\xE0m vi\u1EC7c --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.shiftOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 35, "addShift.dayType", "Lo\u1EA1i ng\xE0y"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.typeid);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(37, 38, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.dayTypeOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 41, "common.remark", "Ghi ch\xFA"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.remark);
    \u0275\u0275control();
  }
}
function AddEmpShiftComponent_ng_container_85_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.deptTreeErrorMessage());
  }
}
function AddEmpShiftComponent_ng_container_85_nz_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 63);
  }
  if (rf & 2) {
    const c_r12 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r12.codeNo)("nzLabel", c_r12.codeName);
  }
}
function AddEmpShiftComponent_ng_container_85_nz_alert_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 77);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzMessage", ctx_r2.pickerErrorMessage() ?? "");
  }
}
function AddEmpShiftComponent_ng_container_85_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 78);
    \u0275\u0275listener("click", function AddEmpShiftComponent_ng_container_85_tr_52_Template_tr_click_0_listener() {
      const row_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectEmployee(row_r14));
    });
    \u0275\u0275elementStart(1, "td", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
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
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r15 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r14.empId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r14.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r14.deptName || row_r14.deptNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r14.position);
  }
}
function AddEmpShiftComponent_ng_container_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 64);
    \u0275\u0275listener("ngSubmit", function AddEmpShiftComponent_ng_container_85_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.pickerSearch());
    });
    \u0275\u0275elementStart(2, "div", 65)(3, "label", 9);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 66);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function AddEmpShiftComponent_ng_container_85_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.pickerKeyword, $event) || (ctx_r2.pickerKeyword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function AddEmpShiftComponent_ng_container_85_Template_input_keydown_enter_6_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r2.pickerSearch());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 67)(9, "label", 9);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "nz-tree-select", 68);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function AddEmpShiftComponent_ng_container_85_Template_nz_tree_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.pickerDeptNos, $event) || (ctx_r2.pickerDeptNos = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275template(14, AddEmpShiftComponent_ng_container_85_div_14_Template, 2, 1, "div", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 8)(16, "label", 9);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "nz-select", 70);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function AddEmpShiftComponent_ng_container_85_Template_nz_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.pickerEmpOffice, $event) || (ctx_r2.pickerEmpOffice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(21, AddEmpShiftComponent_ng_container_85_nz_option_21_Template, 1, 2, "nz-option", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 71)(23, "button", 13);
    \u0275\u0275element(24, "i", 14);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 15);
    \u0275\u0275listener("click", function AddEmpShiftComponent_ng_container_85_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.pickerClear());
    });
    \u0275\u0275element(28, "i", 16);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(31, AddEmpShiftComponent_ng_container_85_nz_alert_31_Template, 1, 1, "nz-alert", 72);
    \u0275\u0275elementStart(32, "nz-table", 73, 3)(34, "thead")(35, "tr")(36, "th", 29);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th", 74);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "th");
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
    \u0275\u0275template(52, AddEmpShiftComponent_ng_container_85_tr_52_Template, 11, 5, "tr", 75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const aesPickerTable_r16 = \u0275\u0275reference(33);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 24, "empSearch.field.keyword", "M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.pickerKeyword);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(7, 27, "empSearch.placeholder.keyword", "Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 30, "empSearch.field.dept", "Ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzNodes", ctx_r2.deptNodes());
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.pickerDeptNos);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(13, 33, "vdp.search.dept.placeholder", "Ch\u1ECDn ph\xF2ng ban"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.deptTreeErrorMessage());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 36, "empSearch.field.empOffice", "Tr\u1EA1ng th\xE1i l\xE0m vi\u1EC7c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.pickerEmpOffice);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(20, 39, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.empOfficeOptions());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 42, "common.search", "T\xECm ki\u1EBFm"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(30, 45, "empSearch.btn.clearFilter", "X\xF3a b\u1ED9 l\u1ECDc"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.pickerErrorMessage());
    \u0275\u0275advance();
    \u0275\u0275property("nzData", ctx_r2.pickerRows())("nzLoading", ctx_r2.pickerLoading())("nzPageSize", 10);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(38, 48, "empSearch.col.no", "STT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 51, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 54, "common.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(47, 57, "empSearch.field.dept", "Ph\xF2ng ban"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 60, "epi.field.position", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", aesPickerTable_r16.data);
  }
}
function AddEmpShiftComponent_ng_container_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 79);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 80);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "addShift.msg.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a d\u1EEF li\u1EC7u x\u1EBFp ca n\xE0y kh\xF4ng?"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.deleteTargetName);
  }
}
var I18N_KEYS = [
  "addShift.title",
  "addShift.month",
  "addShift.employee",
  "addShift.placeholder.empIdOrName",
  "addShift.shiftDate",
  "addShift.shift",
  "addShift.dayType",
  "addShift.selectShift",
  "addShift.modal.title.add",
  "addShift.modal.title.edit",
  "addShift.selectEmployee",
  "addShift.msg.selectEmployee",
  "addShift.msg.selectDate",
  "addShift.msg.selectShift",
  "addShift.msg.confirmDelete",
  "addShift.msg.errorLoad",
  "addShift.msg.errorConnect",
  "common.stt",
  "common.date",
  "common.empId",
  "common.empName",
  "common.remark",
  "common.action",
  "common.search",
  "common.clearFilter",
  "common.addNew",
  "common.downloadTemplate",
  "common.importExcel",
  "common.close",
  "common.save",
  "common.confirm",
  "common.cancel",
  "common.delete",
  "common.noData",
  "common.totalRows",
  "common.loadFail",
  "common.selectAll",
  "essDept.exportExcel",
  "arSupervisor.field.emp",
  "arSupervisor.placeholder.selectEmp",
  "arSupervisor.btn.select",
  "arSupervisor.js.empSelected",
  "empSearch.title",
  "empSearch.field.keyword",
  "empSearch.placeholder.keyword",
  "empSearch.field.dept",
  "empSearch.field.empOffice",
  "empSearch.btn.clearFilter",
  "empSearch.col.no",
  "epi.field.position",
  "vdp.search.dept.placeholder",
  "mep.msg.loadDeptFailed"
];
var EMP_OFFICE_PARENT_CODE = "15118";
var DAY_TYPE_PARENT_CODE = "1439";
var PAGE_SIZE_OPTIONS = [25, 50, 100, 200];
var EMPTY_FORM = {
  pkNo: null,
  personId: null,
  empDisplay: "",
  arDateStr: null,
  shiftNo: null,
  typeid: null,
  remark: ""
};
var AddEmpShiftComponent = class _AddEmpShiftComponent {
  constructor(api, empApi, i18n, message) {
    this.api = api;
    this.empApi = empApi;
    this.i18n = i18n;
    this.message = message;
  }
  api;
  empApi;
  i18n;
  message;
  pageSizeOptions = PAGE_SIZE_OPTIONS;
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
  shiftOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "shiftOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  dayTypeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "dayTypeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  searchMonth = /* @__PURE__ */ new Date();
  searchEmpId = "";
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
  importingExcel = signal(
    false,
    ...ngDevMode ? [{ debugName: "importingExcel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // ==================== Popup tìm kiếm nhân viên (tái dùng pattern ChangeUserComponent) ====================
  deptNodes = signal(
    [],
    ...ngDevMode ? [{ debugName: "deptNodes" }] : (
      /* istanbul ignore next */
      []
    )
  );
  empOfficeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "empOfficeOptions" }] : (
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
  pickerVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "pickerVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pickerRows = signal(
    [],
    ...ngDevMode ? [{ debugName: "pickerRows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pickerLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "pickerLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pickerErrorMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "pickerErrorMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pickerKeyword = "";
  pickerDeptNos = [];
  pickerEmpOffice = null;
  deptChildrenMap = /* @__PURE__ */ new Map();
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.search();
    this.api.getShiftList().subscribe((list) => this.shiftOptions.set(list ?? []));
    this.empApi.getCodeList(DAY_TYPE_PARENT_CODE).subscribe((list) => this.dayTypeOptions.set(list ?? []));
    this.empApi.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(this.buildPickerDeptTree(list ?? [])),
      error: () => this.deptTreeErrorMessage.set(this.i18n.t("mep.msg.loadDeptFailed", "L\u1ED7i khi t\u1EA3i danh s\xE1ch ph\xF2ng ban"))
    });
    this.empApi.getCodeList(EMP_OFFICE_PARENT_CODE).subscribe((list) => this.empOfficeOptions.set(list ?? []));
  }
  shiftLabel(s) {
    return s.nameVi || s.shiftShortname || s.shiftNo;
  }
  search() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.list(this.searchEmpId.trim(), this.formatYm(this.searchMonth)).subscribe({
      next: (rows) => {
        this.rows.set(rows ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.rows.set([]);
        this.loading.set(false);
      }
    });
  }
  clearSearch() {
    this.searchEmpId = "";
    this.searchMonth = /* @__PURE__ */ new Date();
    this.search();
  }
  // ==================== Modal Thêm mới / Cập nhật ====================
  openAddModal() {
    this.isNew.set(true);
    this.form = __spreadValues({}, EMPTY_FORM);
    this.modalVisible.set(true);
  }
  openEditModal(row) {
    this.api.getByPkNo(row.pkNo).subscribe({
      next: (d) => {
        this.isNew.set(false);
        this.form = {
          pkNo: d.pkNo,
          personId: d.personId,
          empDisplay: `${d.empId || ""} - ${d.localName || ""}`,
          arDateStr: this.parseArDateStr(d.arDateStr),
          shiftNo: d.shiftNo,
          typeid: d.typeid,
          remark: d.remark || ""
        };
        this.modalVisible.set(true);
      },
      error: () => this.message.error(this.i18n.t("addShift.msg.errorLoad", "L\u1ED7i khi l\u1EA5y th\xF4ng tin"))
    });
  }
  closeModal() {
    this.modalVisible.set(false);
  }
  saveForm() {
    if (!this.form.personId) {
      this.message.warning(this.i18n.t("addShift.msg.selectEmployee", "Vui l\xF2ng ch\u1ECDn nh\xE2n vi\xEAn"));
      return;
    }
    if (!this.form.arDateStr) {
      this.message.warning(this.i18n.t("addShift.msg.selectDate", "Vui l\xF2ng ch\u1ECDn Ng\xE0y c\xF4ng"));
      return;
    }
    if (!this.form.shiftNo) {
      this.message.warning(this.i18n.t("addShift.msg.selectShift", "Vui l\xF2ng ch\u1ECDn Ca l\xE0m vi\u1EC7c"));
      return;
    }
    const payload = {
      pkNo: this.form.pkNo,
      personId: this.form.personId,
      arDateStr: formatDate(this.form.arDateStr, "yyyy/MM/dd", "vi"),
      shiftNo: this.form.shiftNo,
      typeid: this.form.typeid,
      remark: this.form.remark
    };
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        if (!res.success) {
          this.message.error(res.error || this.i18n.t("addShift.msg.errorConnect", "L\u1ED7i k\u1EBFt n\u1ED1i"));
          return;
        }
        this.modalVisible.set(false);
        this.message.success(res.message || this.i18n.t("common.save", "L\u01B0u"));
        this.search();
      },
      error: () => {
        this.saving.set(false);
        this.message.error(this.i18n.t("addShift.msg.errorConnect", "L\u1ED7i k\u1EBFt n\u1ED1i"));
      }
    });
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
    if (!this.deleteTarget)
      return "";
    return `${this.deleteTarget.empId} - ${this.deleteTarget.localName ?? ""} (${this.deleteTarget.arDateStr})`;
  }
  confirmDelete() {
    if (!this.deleteTarget?.pkNo)
      return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.pkNo).subscribe({
      next: (res) => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        if (!res.success) {
          this.message.error(res.error || this.i18n.t("addShift.msg.errorConnect", "L\u1ED7i k\u1EBFt n\u1ED1i"));
          return;
        }
        this.message.success(res.message || this.i18n.t("common.save", "L\u01B0u"));
        this.search();
      },
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t("addShift.msg.errorConnect", "L\u1ED7i k\u1EBFt n\u1ED1i"));
      }
    });
  }
  // ==================== Xuất Excel / Tải file mẫu / Import Excel ====================
  exportExcel() {
    const headers = [
      this.i18n.t("common.stt", "STT"),
      this.i18n.t("common.date", "Ng\xE0y"),
      this.i18n.t("common.empId", "M\xE3 nh\xE2n vi\xEAn"),
      this.i18n.t("common.empName", "T\xEAn nh\xE2n vi\xEAn"),
      this.i18n.t("addShift.shift", "Ca quy \u0111\u1ECBnh"),
      this.i18n.t("addShift.dayType", "Lo\u1EA1i ng\xE0y"),
      this.i18n.t("common.remark", "Ghi ch\xFA")
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      this.toDmy(r.arDateStr),
      r.empId,
      r.localName,
      r.shiftName,
      r.typeName,
      r.remark
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "XepCa");
    writeFileSync(workbook, "add_emp_shift_list.xlsx");
  }
  downloadTemplate() {
    window.location.href = this.api.downloadTemplateUrl();
  }
  onExcelFileSelected(event) {
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
          this.message.success(res.message || this.i18n.t("common.save", "L\u01B0u"));
        else
          this.message.warning(res.message || this.i18n.t("addShift.msg.errorConnect", "L\u1ED7i k\u1EBFt n\u1ED1i"));
        this.search();
      },
      error: () => {
        this.importingExcel.set(false);
        this.message.error(this.i18n.t("addShift.msg.errorConnect", "L\u1ED7i k\u1EBFt n\u1ED1i"));
      }
    });
  }
  /** Chuyển 'yyyy/MM/dd' (BE) sang 'dd/MM/yyyy' để hiển thị trong bảng (theo CLAUDE.md). */
  toDmy(ymd) {
    if (!ymd)
      return "";
    const [y, m, d] = ymd.split("/");
    return y && m && d ? `${d}/${m}/${y}` : ymd;
  }
  parseArDateStr(arDateStr) {
    if (!arDateStr)
      return null;
    const parts = arDateStr.split("/").map(Number);
    if (parts.length !== 3 || parts.some((p) => Number.isNaN(p)))
      return null;
    return new Date(parts[0], parts[1] - 1, parts[2]);
  }
  formatYm(d) {
    return d ? formatDate(d, "yyyy/MM", "vi") : "";
  }
  // ==================== Popup tìm kiếm nhân viên ====================
  openPicker() {
    this.pickerKeyword = "";
    this.pickerDeptNos = [];
    this.pickerEmpOffice = null;
    this.pickerVisible.set(true);
    this.pickerSearch();
  }
  closePicker() {
    this.pickerVisible.set(false);
  }
  pickerSearch() {
    this.pickerLoading.set(true);
    this.pickerErrorMessage.set(null);
    this.empApi.searchEmployees({
      keyword: this.pickerKeyword.trim(),
      deptCodes: this.expandDeptSelection(this.pickerDeptNos),
      empOffice: this.pickerEmpOffice ?? ""
    }).subscribe({
      next: (rows) => {
        this.pickerRows.set(rows ?? []);
        this.pickerLoading.set(false);
      },
      error: () => {
        this.pickerErrorMessage.set(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.pickerRows.set([]);
        this.pickerLoading.set(false);
      }
    });
  }
  pickerClear() {
    this.pickerKeyword = "";
    this.pickerDeptNos = [];
    this.pickerEmpOffice = null;
    this.pickerSearch();
  }
  selectEmployee(row) {
    this.form.personId = row.personId;
    this.form.empDisplay = `${row.empId} - ${row.localName}`;
    this.pickerVisible.set(false);
  }
  buildPickerDeptTree(list) {
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
  static \u0275fac = function AddEmpShiftComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddEmpShiftComponent)(\u0275\u0275directiveInject(AddEmpShiftService), \u0275\u0275directiveInject(ChangeUserService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddEmpShiftComponent, selectors: [["app-add-emp-shift"]], decls: 91, vars: 117, consts: [["aesFileInput", ""], ["aesTable", ""], ["aesTotalTpl", ""], ["aesPickerTable", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["name", "aesSearchMonth", "nzMode", "month", "nzFormat", "MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel", "nzAllowClear"], ["nz-input", "", "name", "aesSearchEmpId", 3, "ngModelChange", "ngModel", "placeholder"], [1, "col-md-6", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], [1, "col-12", "d-flex", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzType", "default", "type", "button", 3, "click"], [1, "bx", "bx-download"], ["nz-button", "", "nzType", "default", "type", "button", 3, "click", "nzLoading"], [1, "bx", "bx-upload"], ["type", "file", "hidden", "", "accept", ".xlsx,.xls", 3, "change"], ["nz-button", "", "nzType", "default", "type", "button", 1, "aes-btn-export", 3, "click"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "120px"], ["nzWidth", "180px"], ["nzWidth", "150px"], ["nzWidth", "130px"], ["nzWidth", "200px"], ["nzWidth", "100px", 1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["nzWidth", "700px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], ["nzWidth", "900px", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzFooter"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "8", 1, "text-center", "text-muted"], [1, "text-center"], ["nz-button", "", "nzType", "text", "nzSize", "small", 3, "click", "title"], [1, "bx", "bx-edit", "text-warning"], [1, "bx", "bx-trash", "text-danger"], [1, "row", "g-3"], [1, "col-md-6"], [1, "text-danger"], [1, "d-flex", "gap-2"], ["nz-input", "", "name", "aesEmpDisplay", "readonly", "", 3, "ngModel", "placeholder"], ["class", "text-success d-block mt-1", 4, "ngIf"], ["name", "aesArDateStr", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "aesShiftNo", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["name", "aesTypeid", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [1, "col-md-12"], ["nz-input", "", "name", "aesRemark", "rows", "2", 3, "ngModelChange", "ngModel"], [1, "text-success", "d-block", "mt-1"], [1, "bx", "bx-check"], [3, "nzValue", "nzLabel"], [1, "row", "g-2", "align-items-end", "mb-3", 3, "ngSubmit"], [1, "col-md-5"], ["nz-input", "", "name", "aesPickerKeyword", 3, "ngModelChange", "keydown.enter", "ngModel", "placeholder"], [1, "col-md-4"], ["name", "aesPickerDeptNos", "nzCheckable", "", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["class", "text-danger small mt-1", 4, "ngIf"], ["name", "aesPickerEmpOffice", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [1, "col-12", "d-flex", "gap-2"], ["nzType", "error", "class", "mb-2", 3, "nzMessage", 4, "ngIf"], ["nzSize", "small", 3, "nzData", "nzLoading", "nzPageSize"], ["nzWidth", "110px"], ["class", "aes-row-clickable", 3, "click", 4, "ngFor", "ngForOf"], [1, "text-danger", "small", "mt-1"], ["nzType", "error", 1, "mb-2", 3, "nzMessage"], [1, "aes-row-clickable", 3, "click"], [1, "mb-1"], [1, "fw-bold", "mb-0"]], template: function AddEmpShiftComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "nz-card", 6)(3, "form", 7);
      \u0275\u0275listener("ngSubmit", function AddEmpShiftComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 8)(5, "label", 9);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "nz-date-picker", 10);
      \u0275\u0275twoWayListener("ngModelChange", function AddEmpShiftComponent_Template_nz_date_picker_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchMonth, $event) || (ctx.searchMonth = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 8)(10, "label", 9);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "input", 11);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function AddEmpShiftComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchEmpId, $event) || (ctx.searchEmpId = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 12)(16, "button", 13);
      \u0275\u0275element(17, "i", 14);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "button", 15);
      \u0275\u0275listener("click", function AddEmpShiftComponent_Template_button_click_20_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(21, "i", 16);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 17)(25, "button", 18);
      \u0275\u0275listener("click", function AddEmpShiftComponent_Template_button_click_25_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(26, "i", 19);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "button", 20);
      \u0275\u0275listener("click", function AddEmpShiftComponent_Template_button_click_29_listener() {
        return ctx.downloadTemplate();
      });
      \u0275\u0275element(30, "i", 21);
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "button", 22);
      \u0275\u0275listener("click", function AddEmpShiftComponent_Template_button_click_33_listener() {
        \u0275\u0275restoreView(_r1);
        const aesFileInput_r2 = \u0275\u0275reference(38);
        return \u0275\u0275resetView(aesFileInput_r2.click());
      });
      \u0275\u0275element(34, "i", 23);
      \u0275\u0275text(35);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "input", 24, 0);
      \u0275\u0275listener("change", function AddEmpShiftComponent_Template_input_change_37_listener($event) {
        return ctx.onExcelFileSelected($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "button", 25);
      \u0275\u0275listener("click", function AddEmpShiftComponent_Template_button_click_39_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(40, "i", 26);
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(43, "nz-card");
      \u0275\u0275template(44, AddEmpShiftComponent_nz_alert_44_Template, 1, 1, "nz-alert", 27);
      \u0275\u0275elementStart(45, "nz-table", 28, 1)(47, "thead")(48, "tr")(49, "th", 29);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "th", 30);
      \u0275\u0275text(53);
      \u0275\u0275pipe(54, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "th", 31);
      \u0275\u0275text(56);
      \u0275\u0275pipe(57, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "th", 32);
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "th", 33);
      \u0275\u0275text(62);
      \u0275\u0275pipe(63, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "th", 34);
      \u0275\u0275text(65);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "th", 35);
      \u0275\u0275text(68);
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "th", 36);
      \u0275\u0275text(71);
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(73, "tbody");
      \u0275\u0275template(74, AddEmpShiftComponent_tr_74_Template, 4, 4, "tr", 37)(75, AddEmpShiftComponent_tr_75_Template, 22, 20, "tr", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275template(76, AddEmpShiftComponent_ng_template_76_Template, 2, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(78, "nz-modal", 39);
      \u0275\u0275pipe(79, "translate");
      \u0275\u0275pipe(80, "translate");
      \u0275\u0275pipe(81, "translate");
      \u0275\u0275listener("nzOnCancel", function AddEmpShiftComponent_Template_nz_modal_nzOnCancel_78_listener() {
        return ctx.closeModal();
      })("nzOnOk", function AddEmpShiftComponent_Template_nz_modal_nzOnOk_78_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(82, AddEmpShiftComponent_ng_container_82_Template, 44, 44, "ng-container", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "nz-modal", 41);
      \u0275\u0275pipe(84, "translate");
      \u0275\u0275listener("nzOnCancel", function AddEmpShiftComponent_Template_nz_modal_nzOnCancel_83_listener() {
        return ctx.closePicker();
      });
      \u0275\u0275template(85, AddEmpShiftComponent_ng_container_85_Template, 53, 63, "ng-container", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "nz-modal", 42);
      \u0275\u0275pipe(87, "translate");
      \u0275\u0275pipe(88, "translate");
      \u0275\u0275pipe(89, "translate");
      \u0275\u0275listener("nzOnCancel", function AddEmpShiftComponent_Template_nz_modal_nzOnCancel_86_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function AddEmpShiftComponent_Template_nz_modal_nzOnOk_86_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(90, AddEmpShiftComponent_ng_container_90_Template, 6, 5, "ng-container", 40);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const aesTable_r17 = \u0275\u0275reference(46);
      const aesTotalTpl_r18 = \u0275\u0275reference(77);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 44, "addShift.month", "Th\xE1ng"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchMonth);
      \u0275\u0275property("nzAllowClear", false);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 47, "addShift.employee", "Nh\xE2n vi\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchEmpId);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(14, 50, "addShift.placeholder.empIdOrName", "Nh\u1EADp m\xE3 / t\xEAn nh\xE2n vi\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(19, 53, "common.search", "T\xECm ki\u1EBFm"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(23, 56, "common.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(28, 59, "common.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(32, 62, "common.downloadTemplate", "T\u1EA3i File M\u1EABu"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.importingExcel());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(36, 65, "common.importExcel", "Import Excel"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(42, 68, "essDept.exportExcel", "Xu\u1EA5t excel"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", aesTotalTpl_r18)("nzScroll", \u0275\u0275pureFunction0(116, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 71, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 74, "common.date", "Ng\xE0y"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 77, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(60, 80, "common.empName", "T\xEAn nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(63, 83, "addShift.shift", "Ca quy \u0111\u1ECBnh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(66, 86, "addShift.dayType", "Lo\u1EA1i ng\xE0y"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 89, "common.remark", "Ghi ch\xFA"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(72, 92, "common.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", aesTable_r17.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", \u0275\u0275pipeBind2(79, 95, ctx.isNew() ? "addShift.modal.title.add" : "addShift.modal.title.edit", ctx.isNew() ? "Th\xEAm m\u1EDBi X\u1EBFp ca l\xE0m vi\u1EC7c" : "C\u1EADp nh\u1EADt X\u1EBFp ca l\xE0m vi\u1EC7c"))("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(80, 98, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(81, 101, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(5);
      \u0275\u0275property("nzVisible", ctx.pickerVisible())("nzTitle", \u0275\u0275pipeBind2(84, 104, "empSearch.title", "T\xECm ki\u1EBFm nh\xE2n vi\xEAn"))("nzFooter", null);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(87, 107, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(88, 110, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(89, 113, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, NzSelectModule, NzOptionComponent, NzSelectComponent, NzDatePickerModule, NzDatePickerComponent, NzTreeSelectModule, NzTreeSelectComponent, TranslatePipe], styles: ["\n.aes-btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n.aes-row-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=add-emp-shift.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddEmpShiftComponent, [{
    type: Component,
    args: [{ selector: "app-add-emp-shift", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzButtonModule,
      NzModalModule,
      NzAlertModule,
      NzSelectModule,
      NzDatePickerModule,
      NzTreeSelectModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm - \u0111\u1EE9ng im khi cu\u1ED9n (xem .sticky-filter-card trong styles.css) -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3" (ngSubmit)="search()">
        <div class="col-md-3">
          <label class="form-label">{{ 'addShift.month' | translate:'Th\xE1ng' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="searchMonth" name="aesSearchMonth"
                           nzMode="month" nzFormat="MM/yyyy" [nzAllowClear]="false"></nz-date-picker>
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'addShift.employee' | translate:'Nh\xE2n vi\xEAn' }}</label>
          <input nz-input [(ngModel)]="searchEmpId" name="aesSearchEmpId"
                 [placeholder]="'addShift.placeholder.empIdOrName' | translate:'Nh\u1EADp m\xE3 / t\xEAn nh\xE2n vi\xEAn'">
        </div>
        <div class="col-md-6 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'common.search' | translate:'T\xECm ki\u1EBFm' }}
          </button>
          <button nz-button type="button" (click)="clearSearch()">
            <i class="bx bx-x"></i> {{ 'common.clearFilter' | translate:'X\xF3a l\u1ECDc' }}
          </button>
        </div>
        <div class="col-12 d-flex gap-2 flex-wrap">
          <button nz-button nzType="primary" type="button" (click)="openAddModal()">
            <i class="bx bx-plus"></i> {{ 'common.addNew' | translate:'Th\xEAm m\u1EDBi' }}
          </button>
          <button nz-button nzType="default" type="button" (click)="downloadTemplate()">
            <i class="bx bx-download"></i> {{ 'common.downloadTemplate' | translate:'T\u1EA3i File M\u1EABu' }}
          </button>
          <button nz-button nzType="default" type="button" [nzLoading]="importingExcel()"
                  (click)="aesFileInput.click()">
            <i class="bx bx-upload"></i> {{ 'common.importExcel' | translate:'Import Excel' }}
          </button>
          <input #aesFileInput type="file" hidden accept=".xlsx,.xls" (change)="onExcelFileSelected($event)">
          <button nz-button nzType="default" type="button" class="aes-btn-export" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'essDept.exportExcel' | translate:'Xu\u1EA5t excel' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="aesTotalTpl"
                [nzScroll]="{ x: '1100px', y: 'calc(100vh - 420px)' }" #aesTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'common.date' | translate:'Ng\xE0y' }}</th>
            <th nzWidth="120px">{{ 'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
            <th nzWidth="180px">{{ 'common.empName' | translate:'T\xEAn nh\xE2n vi\xEAn' }}</th>
            <th nzWidth="150px">{{ 'addShift.shift' | translate:'Ca quy \u0111\u1ECBnh' }}</th>
            <th nzWidth="130px">{{ 'addShift.dayType' | translate:'Lo\u1EA1i ng\xE0y' }}</th>
            <th nzWidth="200px">{{ 'common.remark' | translate:'Ghi ch\xFA' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'common.action' | translate:'Thao t\xE1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="8" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of aesTable.data; let i = index">
            <td class="text-center">{{ i + 1 }}</td>
            <td class="text-center">{{ toDmy(row.arDateStr) }}</td>
            <td [attr.title]="row.empId || null">{{ row.empId }}</td>
            <td [attr.title]="row.localName || null">{{ row.localName }}</td>
            <td [attr.title]="row.shiftName || null">{{ row.shiftName }}</td>
            <td [attr.title]="row.typeName || null">{{ row.typeName }}</td>
            <td [attr.title]="row.remark || null">{{ row.remark }}</td>
            <td class="text-center">
              <button nz-button nzType="text" nzSize="small" [title]="'common.action' | translate:'S\u1EEDa'" (click)="openEditModal(row)">
                <i class="bx bx-edit text-warning"></i>
              </button>
              <button nz-button nzType="text" nzSize="small" [title]="'common.delete' | translate:'X\xF3a'" (click)="openDeleteConfirm(row)">
                <i class="bx bx-trash text-danger"></i>
              </button>
            </td>
          </tr>
        </tbody>
        <ng-template #aesTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal Th\xEAm m\u1EDBi / C\u1EADp nh\u1EADt X\u1EBFp ca l\xE0m vi\u1EC7c -->
<nz-modal [nzVisible]="modalVisible()"
          [nzTitle]="(isNew() ? 'addShift.modal.title.add' : 'addShift.modal.title.edit') | translate:(isNew() ? 'Th\xEAm m\u1EDBi X\u1EBFp ca l\xE0m vi\u1EC7c' : 'C\u1EADp nh\u1EADt X\u1EBFp ca l\xE0m vi\u1EC7c')"
          nzWidth="700px" (nzOnCancel)="closeModal()" (nzOnOk)="saveForm()" [nzOkLoading]="saving()"
          [nzOkText]="'common.save' | translate:'L\u01B0u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <div class="row g-3">
      <div class="col-md-6">
        <label class="form-label">
          {{ 'arSupervisor.field.emp' | translate:'Nh\xE2n vi\xEAn' }} <span class="text-danger">*</span>
        </label>
        <div class="d-flex gap-2">
          <input nz-input [ngModel]="form.empDisplay" name="aesEmpDisplay" readonly
                 [placeholder]="'arSupervisor.placeholder.selectEmp' | translate:'Ch\u1ECDn nh\xE2n vi\xEAn...'">
          <button nz-button nzType="default" type="button" (click)="openPicker()">
            <i class="bx bx-search"></i> {{ 'arSupervisor.btn.select' | translate:'Ch\u1ECDn' }}
          </button>
        </div>
        <small *ngIf="form.personId" class="text-success d-block mt-1">
          <i class="bx bx-check"></i> {{ 'arSupervisor.js.empSelected' | translate:'\u0110\xE3 ch\u1ECDn NV: ' }}{{ form.empDisplay }}
        </small>
      </div>
      <div class="col-md-6">
        <label class="form-label">
          {{ 'addShift.shiftDate' | translate:'Ng\xE0y c\xF4ng' }} <span class="text-danger">*</span>
        </label>
        <nz-date-picker class="w-100" [(ngModel)]="form.arDateStr" name="aesArDateStr" nzFormat="dd/MM/yyyy"></nz-date-picker>
      </div>
      <div class="col-md-6">
        <label class="form-label">
          {{ 'addShift.shift' | translate:'Ca l\xE0m vi\u1EC7c' }} <span class="text-danger">*</span>
        </label>
        <nz-select class="w-100" [(ngModel)]="form.shiftNo" name="aesShiftNo" nzAllowClear
                   [nzPlaceHolder]="'addShift.selectShift' | translate:'-- Ch\u1ECDn ca l\xE0m vi\u1EC7c --'">
          <nz-option *ngFor="let s of shiftOptions()" [nzValue]="s.shiftNo" [nzLabel]="shiftLabel(s)"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-6">
        <label class="form-label">{{ 'addShift.dayType' | translate:'Lo\u1EA1i ng\xE0y' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.typeid" name="aesTypeid" nzAllowClear
                   [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
          <nz-option *ngFor="let c of dayTypeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-12">
        <label class="form-label">{{ 'common.remark' | translate:'Ghi ch\xFA' }}</label>
        <textarea nz-input [(ngModel)]="form.remark" name="aesRemark" rows="2"></textarea>
      </div>
    </div>
  </ng-container>
</nz-modal>

<!-- Popup t\xECm ki\u1EBFm nh\xE2n vi\xEAn - t\xE1i d\xF9ng pattern ChangeUserComponent (thay fragment employeeSearchModal.html) -->
<nz-modal [nzVisible]="pickerVisible()" [nzTitle]="'empSearch.title' | translate:'T\xECm ki\u1EBFm nh\xE2n vi\xEAn'"
          nzWidth="900px" (nzOnCancel)="closePicker()" [nzFooter]="null">
  <ng-container *nzModalContent>
    <form class="row g-2 align-items-end mb-3" (ngSubmit)="pickerSearch()">
      <div class="col-md-5">
        <label class="form-label">{{ 'empSearch.field.keyword' | translate:'M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn' }}</label>
        <input nz-input [(ngModel)]="pickerKeyword" name="aesPickerKeyword"
               [placeholder]="'empSearch.placeholder.keyword' | translate:'Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn'"
               (keydown.enter)="$event.preventDefault(); pickerSearch()">
      </div>
      <div class="col-md-4">
        <label class="form-label">{{ 'empSearch.field.dept' | translate:'Ph\xF2ng ban' }}</label>
        <nz-tree-select class="w-100" [nzNodes]="deptNodes()" [(ngModel)]="pickerDeptNos" name="aesPickerDeptNos"
                         nzCheckable nzShowSearch nzAllowClear
                         [nzPlaceHolder]="'vdp.search.dept.placeholder' | translate:'Ch\u1ECDn ph\xF2ng ban'"></nz-tree-select>
        <div *ngIf="deptTreeErrorMessage()" class="text-danger small mt-1">{{ deptTreeErrorMessage() }}</div>
      </div>
      <div class="col-md-3">
        <label class="form-label">{{ 'empSearch.field.empOffice' | translate:'Tr\u1EA1ng th\xE1i l\xE0m vi\u1EC7c' }}</label>
        <nz-select class="w-100" [(ngModel)]="pickerEmpOffice" name="aesPickerEmpOffice" nzAllowClear
                   [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
          <nz-option *ngFor="let c of empOfficeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
        </nz-select>
      </div>
      <div class="col-12 d-flex gap-2">
        <button nz-button nzType="primary" type="submit">
          <i class="bx bx-search"></i> {{ 'common.search' | translate:'T\xECm ki\u1EBFm' }}
        </button>
        <button nz-button type="button" (click)="pickerClear()">
          <i class="bx bx-x"></i> {{ 'empSearch.btn.clearFilter' | translate:'X\xF3a b\u1ED9 l\u1ECDc' }}
        </button>
      </div>
    </form>

    <nz-alert *ngIf="pickerErrorMessage()" nzType="error" [nzMessage]="pickerErrorMessage() ?? ''" class="mb-2"></nz-alert>

    <nz-table [nzData]="pickerRows()" [nzLoading]="pickerLoading()" [nzPageSize]="10" nzSize="small" #aesPickerTable>
      <thead>
        <tr>
          <th class="text-center" nzWidth="60px">{{ 'empSearch.col.no' | translate:'STT' }}</th>
          <th nzWidth="110px">{{ 'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
          <th>{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
          <th>{{ 'empSearch.field.dept' | translate:'Ph\xF2ng ban' }}</th>
          <th>{{ 'epi.field.position' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of aesPickerTable.data; let i = index" class="aes-row-clickable" (click)="selectEmployee(row)">
          <td class="text-center">{{ i + 1 }}</td>
          <td>{{ row.empId }}</td>
          <td>{{ row.localName }}</td>
          <td>{{ row.deptName || row.deptNo }}</td>
          <td>{{ row.position }}</td>
        </tr>
      </tbody>
    </nz-table>
  </ng-container>
</nz-modal>

<!-- Modal x\xE1c nh\u1EADn x\xF3a -->
<nz-modal [nzVisible]="deleteVisible()" [nzTitle]="'common.confirm' | translate:'X\xE1c nh\u1EADn'"
          (nzOnCancel)="closeDeleteConfirm()" (nzOnOk)="confirmDelete()" [nzOkLoading]="deleting()"
          [nzOkText]="'common.confirm' | translate:'X\xE1c nh\u1EADn'" [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'">
  <ng-container *nzModalContent>
    <p class="mb-1">{{ 'addShift.msg.confirmDelete' | translate:'B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a d\u1EEF li\u1EC7u x\u1EBFp ca n\xE0y kh\xF4ng?' }}</p>
    <p class="fw-bold mb-0">{{ deleteTargetName }}</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/add-emp-shift/add-emp-shift.component.css */\n.aes-btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n.aes-row-clickable {\n  cursor: pointer;\n}\n/*# sourceMappingURL=add-emp-shift.component.css.map */\n"] }]
  }], () => [{ type: AddEmpShiftService }, { type: ChangeUserService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddEmpShiftComponent, { className: "AddEmpShiftComponent", filePath: "src/app/add-emp-shift/add-emp-shift.component.ts", lineNumber: 96 });
})();
export {
  AddEmpShiftComponent
};
//# debugId=ba2691df-6eb1-517b-883d-2611e5d75904
//# sourceMappingURL=chunk-NKLBA4TC.js.map
