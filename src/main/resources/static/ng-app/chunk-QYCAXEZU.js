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

// src/app/view-temp-emp-info-list/view-temp-emp-info-list.service.ts
var API_BASE = "/hrm/empinfo";
var ViewTempEmpInfoListService = class _ViewTempEmpInfoListService {
  constructor(http) {
    this.http = http;
  }
  http;
  getPageList(payload) {
    return this.http.post(`${API_BASE}/female-employees`, payload, {
      withCredentials: true
    });
  }
  addEmployee(payload) {
    return this.http.post(`${API_BASE}/specialMatter/add`, payload, {
      withCredentials: true,
      responseType: "text"
    });
  }
  updateEmployee(payload) {
    return this.http.post(`${API_BASE}/specialMatter/update`, payload, {
      withCredentials: true,
      responseType: "text"
    });
  }
  deleteEmployee(specialNo) {
    return this.http.delete(`${API_BASE}/specialMatter/delete/${encodeURIComponent(specialNo)}`, {
      withCredentials: true,
      responseType: "text"
    });
  }
  /** Dùng chung endpoint tìm kiếm nhân viên mà changeUser.html (bản gốc) và ChangeUserComponent đang
   *  dùng - cho modal chọn nhân viên khi thêm mới. */
  searchEmployees(keyword) {
    let params = new HttpParams();
    if (keyword)
      params = params.set("keyword", keyword);
    return this.http.get(`${API_BASE}/api/employee/search`, {
      params,
      withCredentials: true
    });
  }
  static \u0275fac = function ViewTempEmpInfoListService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewTempEmpInfoListService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewTempEmpInfoListService, factory: _ViewTempEmpInfoListService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewTempEmpInfoListService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-temp-emp-info-list/view-temp-emp-info-list.component.ts
var _c0 = () => ({ x: "1400px" });
function ViewTempEmpInfoListComponent_nz_alert_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 41);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ViewTempEmpInfoListComponent_tr_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 42);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewTempEmpInfoListComponent_tr_111_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 43);
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
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 43)(12, "span", 44);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 43);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 43);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 43);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 43)(23, "span", 44);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td", 43)(28, "button", 45);
    \u0275\u0275listener("click", function ViewTempEmpInfoListComponent_tr_111_Template_button_click_28_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditModal(row_r4));
    });
    \u0275\u0275element(29, "i", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 47);
    \u0275\u0275listener("click", function ViewTempEmpInfoListComponent_tr_111_Template_button_click_30_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDeleteConfirm(row_r4));
    });
    \u0275\u0275element(31, "i", 48);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r1.pageIndex - 1) * ctx_r1.pageSize + i_r5 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.empId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.deptNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.position);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success", row_r4.activity === 1)("bg-secondary", row_r4.activity !== 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.activity === 1 ? \u0275\u0275pipeBind2(14, 20, "common.active", "Ho\u1EA1t \u0111\u1ED9ng") : \u0275\u0275pipeBind2(15, 23, "common.inactive", "Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatDisplayDateTime(row_r4.createDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDisplayDate(row_r4.startDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDisplayDate(row_r4.endDate));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-warning", row_r4.otFlag === 1)("bg-light", row_r4.otFlag !== 1)("text-dark", row_r4.otFlag !== 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.otFlag === 1 ? \u0275\u0275pipeBind2(25, 26, "tempEmp.hasOt", "C\xF3 OT") : \u0275\u0275pipeBind2(26, 29, "tempEmp.noOt", "Kh\xF4ng OT"), " ");
  }
}
function ViewTempEmpInfoListComponent_ng_template_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r6 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r6, " ");
  }
}
function ViewTempEmpInfoListComponent_ng_container_115_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ViewTempEmpInfoListComponent_ng_container_115_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 61);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ViewTempEmpInfoListComponent_ng_container_115_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openPicker());
    });
    \u0275\u0275element(2, "i", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind2(1, 1, "tempEmp.pickEmp", "Ch\u1ECDn nh\xE2n vi\xEAn"));
  }
}
function ViewTempEmpInfoListComponent_ng_container_115_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "label", 51);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 54);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "tempEmp.specialNo", "S\u1ED1 \u0111\u1EB7c bi\u1EC7t"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.specialNo);
    \u0275\u0275control();
  }
}
function ViewTempEmpInfoListComponent_ng_container_115_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 49)(2, "div", 50)(3, "label", 51);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275template(6, ViewTempEmpInfoListComponent_ng_container_115_span_6_Template, 2, 0, "span", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 53);
    \u0275\u0275element(8, "input", 54);
    \u0275\u0275controlCreate();
    \u0275\u0275template(9, ViewTempEmpInfoListComponent_ng_container_115_button_9_Template, 3, 4, "button", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 50)(11, "label", 51);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 54);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 50)(16, "label", 51);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 54);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 50)(21, "label", 51);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 54);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, ViewTempEmpInfoListComponent_ng_container_115_div_25_Template, 5, 5, "div", 56);
    \u0275\u0275elementStart(26, "div", 50)(27, "label", 51);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "nz-select", 57);
    \u0275\u0275twoWayListener("ngModelChange", function ViewTempEmpInfoListComponent_ng_container_115_Template_nz_select_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.activity, $event) || (ctx_r1.form.activity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(31, "nz-option", 15);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275element(33, "nz-option", 15);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 50)(36, "label", 51);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "nz-date-picker", 58);
    \u0275\u0275twoWayListener("ngModelChange", function ViewTempEmpInfoListComponent_ng_container_115_Template_nz_date_picker_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.startDate, $event) || (ctx_r1.form.startDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 50)(41, "label", 51);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "nz-date-picker", 58);
    \u0275\u0275twoWayListener("ngModelChange", function ViewTempEmpInfoListComponent_ng_container_115_Template_nz_date_picker_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.endDate, $event) || (ctx_r1.form.endDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 50)(46, "label", 51);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "nz-select", 57);
    \u0275\u0275twoWayListener("ngModelChange", function ViewTempEmpInfoListComponent_ng_container_115_Template_nz_select_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.otFlag, $event) || (ctx_r1.form.otFlag = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(50, "nz-option", 15);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275element(52, "nz-option", 15);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 3)(55, "label", 51);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "textarea", 59);
    \u0275\u0275twoWayListener("ngModelChange", function ViewTempEmpInfoListComponent_ng_container_115_Template_textarea_ngModelChange_58_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.specialContent, $event) || (ctx_r1.form.specialContent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 29, "hr.enpinfo.title.EMP.EMPNUMBER", "M\xE3 nh\xE2n vi\xEAn"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isNew());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.empId);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isNew());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 32, "alert.pa.pasalarycanshu.xingming", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.localName);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 35, "ar.addempshift.title.bydept", "Ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.deptNo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 38, "ess.trans.title.postGradeName", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.position);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isNew());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 41, "common.status", "Tr\u1EA1ng th\xE1i"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.activity);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzValue", 1)("nzLabel", \u0275\u0275pipeBind2(32, 44, "common.active", "Ho\u1EA1t \u0111\u1ED9ng"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzValue", 0)("nzLabel", \u0275\u0275pipeBind2(34, 47, "common.inactive", "Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(38, 50, "ess.empInfo.start_date", "Ng\xE0y b\u1EAFt \u0111\u1EA7u"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.startDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 53, "ess.empInfo.end_date", "Ng\xE0y k\u1EBFt th\xFAc"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.endDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 56, "tempEmp.otStatus", "Tr\u1EA1ng th\xE1i OT"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.otFlag);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzValue", 1)("nzLabel", \u0275\u0275pipeBind2(51, 59, "tempEmp.hasOt", "C\xF3 OT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzValue", 0)("nzLabel", \u0275\u0275pipeBind2(53, 62, "tempEmp.noOt", "Kh\xF4ng OT"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 65, "tempEmp.specialContent", "N\u1ED9i dung \u0111\u1EB7c bi\u1EC7t"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.specialContent);
    \u0275\u0275control();
  }
}
function ViewTempEmpInfoListComponent_ng_container_118_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 69);
    \u0275\u0275listener("click", function ViewTempEmpInfoListComponent_ng_container_118_tr_33_Template_tr_click_0_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectPickedEmployee(row_r11));
    });
    \u0275\u0275elementStart(1, "td", 43);
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
    const row_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r12 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r11.empId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r11.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r11.deptName || row_r11.deptNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r11.position);
  }
}
function ViewTempEmpInfoListComponent_ng_container_118_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 62);
    \u0275\u0275listener("ngSubmit", function ViewTempEmpInfoListComponent_ng_container_118_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pickerSearch());
    });
    \u0275\u0275elementStart(2, "div", 63)(3, "label", 7);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 64);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewTempEmpInfoListComponent_ng_container_118_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pickerKeyword, $event) || (ctx_r1.pickerKeyword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function ViewTempEmpInfoListComponent_ng_container_118_Template_input_keydown_enter_6_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r1.pickerSearch());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 65)(9, "button", 66);
    \u0275\u0275element(10, "i", 21);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "nz-table", 67, 1)(15, "thead")(16, "tr")(17, "th", 28);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 29);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "tbody");
    \u0275\u0275template(33, ViewTempEmpInfoListComponent_ng_container_118_tr_33_Template, 11, 5, "tr", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const vteiPickerTable_r13 = \u0275\u0275reference(14);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 13, "empSearch.field.keyword", "M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pickerKeyword);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(7, 16, "empSearch.placeholder.keyword", "Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn"));
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 19, "common.search", "T\xECm ki\u1EBFm"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("nzData", ctx_r1.pickerRows())("nzLoading", ctx_r1.pickerLoading())("nzPageSize", 10);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 22, "empSearch.col.no", "STT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 25, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 28, "common.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 31, "common.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 34, "epi.field.position", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", vteiPickerTable_r13.data);
  }
}
function ViewTempEmpInfoListComponent_ng_container_123_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 70);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 71);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "tempEmp.deleteConfirmContent", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a nh\xE2n vi\xEAn n\xE0y? H\xE0nh \u0111\u1ED9ng n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c!"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.deleteTargetName);
  }
}
var I18N_KEYS = [
  "alert.pa.pasalarycanshu.xingming",
  "hr.enpinfo.title.EMP.EMPNUMBER",
  "ar.addempshift.title.bydept",
  "ess.trans.title.postGradeName",
  "ess.empInfo.start_date",
  "ess.empInfo.end_date",
  "common.status",
  "common.active",
  "common.inactive",
  "common.selectAll",
  "common.create",
  "common.search",
  "common.clear",
  "common.export",
  "common.action",
  "ar.viewcycle.title.xuhao",
  "ar.excelexport.title.createdate",
  "common.loading",
  "common.loadFail",
  "common.saveFail",
  "common.deleteFail",
  "common.confirm",
  "common.cancel",
  "common.close",
  "common.empId",
  "common.empName",
  "common.deptName",
  "common.totalRows",
  "common.noData",
  "alert.message.add_success",
  "alert.message.update_success",
  "alert.message.delete_success",
  "empSearch.title",
  "empSearch.field.keyword",
  "empSearch.placeholder.keyword",
  "empSearch.col.no",
  "epi.field.position",
  "tempEmp.otStatus",
  "tempEmp.hasOt",
  "tempEmp.noOt",
  "tempEmp.specialNo",
  "tempEmp.specialContent",
  "tempEmp.addTitle",
  "tempEmp.editTitle",
  "tempEmp.pickEmp",
  "tempEmp.validateEmp",
  "tempEmp.deleteConfirmContent"
];
var PAGE_SIZE_OPTIONS = [10, 25, 50, 100];
var EMPTY_FORM = {
  personId: "",
  specialNo: "",
  empId: "",
  localName: "",
  deptNo: "",
  position: "",
  activity: 1,
  otFlag: 0,
  specialContent: "",
  startDate: null,
  endDate: null
};
var ViewTempEmpInfoListComponent = class _ViewTempEmpInfoListComponent {
  constructor(api, i18n, message) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
  }
  api;
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
  localName = "";
  empId = "";
  deptNo = "";
  position = "";
  createDateFrom = null;
  createDateTo = null;
  activity = null;
  otFlag = null;
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
    () => this.isNew() ? this.i18n.t("tempEmp.addTitle", "Th\xEAm m\u1EDBi nh\xE2n vi\xEAn") : this.i18n.t("tempEmp.editTitle", "Ch\u1EC9nh s\u1EEDa th\xF4ng tin nh\xE2n vi\xEAn"),
    ...ngDevMode ? [{ debugName: "modalTitle" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = __spreadValues({}, EMPTY_FORM);
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
  pickerKeyword = "";
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
    this.localName = "";
    this.empId = "";
    this.deptNo = "";
    this.position = "";
    this.createDateFrom = null;
    this.createDateTo = null;
    this.activity = null;
    this.otFlag = null;
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
  // ==================== Modal Thêm mới / Chỉnh sửa ====================
  openAddModal() {
    this.isNew.set(true);
    this.form = __spreadValues({}, EMPTY_FORM);
    this.modalVisible.set(true);
  }
  openEditModal(row) {
    this.isNew.set(false);
    this.form = {
      personId: row.personId,
      specialNo: row.specialNo,
      empId: row.empId || "",
      localName: row.localName || "",
      deptNo: row.deptNo || "",
      position: row.position || "",
      activity: row.activity ?? 1,
      otFlag: row.otFlag ?? 0,
      specialContent: row.specialContent || "",
      startDate: this.toDate(row.startDate),
      endDate: this.toDate(row.endDate)
    };
    this.modalVisible.set(true);
  }
  closeModal() {
    this.modalVisible.set(false);
  }
  saveForm() {
    if (this.isNew() && !this.form.empId) {
      this.message.error(this.i18n.t("tempEmp.validateEmp", "Vui l\xF2ng ch\u1ECDn nh\xE2n vi\xEAn!"));
      return;
    }
    const payload = {
      activity: this.form.activity,
      otFlag: this.form.otFlag,
      specialContent: this.form.specialContent,
      startDate: this.formatYmd(this.form.startDate),
      endDate: this.formatYmd(this.form.endDate)
    };
    this.saving.set(true);
    if (this.isNew()) {
      payload.empId = this.form.empId;
      this.api.addEmployee(payload).subscribe({
        next: () => this.onSaveSuccess(this.i18n.t("alert.message.add_success", "Th\xEAm m\u1EDBi th\xE0nh c\xF4ng!")),
        error: () => this.onSaveError()
      });
    } else {
      payload.personId = this.form.personId;
      payload.specialNo = this.form.specialNo;
      this.api.updateEmployee(payload).subscribe({
        next: () => this.onSaveSuccess(this.i18n.t("alert.message.update_success", "C\u1EADp nh\u1EADt th\xE0nh c\xF4ng!")),
        error: () => this.onSaveError()
      });
    }
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
  // ==================== Modal chọn nhân viên (chỉ dùng khi thêm mới) ====================
  openPicker() {
    this.pickerKeyword = "";
    this.pickerRows.set([]);
    this.pickerVisible.set(true);
  }
  closePicker() {
    this.pickerVisible.set(false);
  }
  pickerSearch() {
    this.pickerLoading.set(true);
    this.api.searchEmployees(this.pickerKeyword.trim()).subscribe({
      next: (rows) => {
        this.pickerRows.set(rows ?? []);
        this.pickerLoading.set(false);
      },
      error: () => {
        this.pickerRows.set([]);
        this.pickerLoading.set(false);
        this.message.error(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  selectPickedEmployee(emp) {
    this.form.empId = emp.empId;
    this.form.localName = emp.localName;
    this.form.deptNo = emp.deptName || emp.deptNo;
    this.form.position = emp.position;
    this.pickerVisible.set(false);
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
    return this.deleteTarget ? `${this.deleteTarget.empId} - ${this.deleteTarget.localName}` : "";
  }
  confirmDelete() {
    if (!this.deleteTarget)
      return;
    this.deleting.set(true);
    this.api.deleteEmployee(this.deleteTarget.specialNo).subscribe({
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
      this.i18n.t("ar.viewcycle.title.xuhao", "STT"),
      this.i18n.t("hr.enpinfo.title.EMP.EMPNUMBER", "M\xE3 nh\xE2n vi\xEAn"),
      this.i18n.t("alert.pa.pasalarycanshu.xingming", "H\u1ECD t\xEAn"),
      this.i18n.t("ar.addempshift.title.bydept", "Ph\xF2ng ban"),
      this.i18n.t("ess.trans.title.postGradeName", "Ch\u1EE9c v\u1EE5"),
      this.i18n.t("common.status", "Tr\u1EA1ng th\xE1i"),
      this.i18n.t("ar.excelexport.title.createdate", "Ng\xE0y t\u1EA1o"),
      this.i18n.t("ess.empInfo.start_date", "Ng\xE0y b\u1EAFt \u0111\u1EA7u"),
      this.i18n.t("ess.empInfo.end_date", "Ng\xE0y k\u1EBFt th\xFAc"),
      this.i18n.t("tempEmp.otStatus", "Tr\u1EA1ng th\xE1i OT")
    ];
    const dataRows = list.map((r, i) => [
      i + 1,
      r.empId,
      r.localName,
      r.deptNo,
      r.position,
      r.activity === 1 ? this.i18n.t("common.active", "Ho\u1EA1t \u0111\u1ED9ng") : this.i18n.t("common.inactive", "Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng"),
      this.formatDisplayDateTime(r.createDate),
      this.formatDisplayDate(r.startDate),
      this.formatDisplayDate(r.endDate),
      r.otFlag === 1 ? this.i18n.t("tempEmp.hasOt", "C\xF3 OT") : this.i18n.t("tempEmp.noOt", "Kh\xF4ng OT")
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "DanhSach");
    writeFileSync(workbook, "danh_sach_nhan_vien_nu.xlsx");
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
        localName: this.localName,
        empId: this.empId,
        deptNo: this.deptNo,
        position: this.position,
        createDateFrom: this.formatYmd(this.createDateFrom),
        createDateTo: this.formatYmd(this.createDateTo),
        activity: this.activity != null ? String(this.activity) : "",
        otFlag: this.otFlag != null ? String(this.otFlag) : ""
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
  static \u0275fac = function ViewTempEmpInfoListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewTempEmpInfoListComponent)(\u0275\u0275directiveInject(ViewTempEmpInfoListService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewTempEmpInfoListComponent, selectors: [["app-view-temp-emp-info-list"]], decls: 124, vars: 165, consts: [["vteiTotalTpl", ""], ["vteiPickerTable", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-2"], [1, "form-label"], ["nz-input", "", "name", "vteiLocalName", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vteiEmpId", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vteiDeptNo", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vteiPosition", 3, "ngModelChange", "ngModel"], ["name", "vteiCreateDateFrom", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vteiCreateDateTo", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vteiActivity", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel"], ["name", "vteiOtFlag", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [1, "col-12", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzType", "default", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], ["nz-button", "", "nzType", "default", "type", "button", 1, "vtei-btn-export", 3, "click", "nzLoading"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], ["nzShowSizeChanger", "", 1, "table-nowrap", 3, "nzPageIndexChange", "nzPageSizeChange", "nzData", "nzFrontPagination", "nzLoading", "nzTotal", "nzPageIndex", "nzPageSize", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "110px"], ["nzWidth", "160px"], ["nzWidth", "120px"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "150px", 1, "text-center"], ["nzWidth", "100px", 1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["nzWidth", "700px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading"], [4, "nzModalContent"], ["nzWidth", "800px", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzFooter"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "11", 1, "text-center", "text-muted"], [1, "text-center"], [1, "badge"], ["nz-button", "", "nzType", "text", "nzSize", "small", "title", "Ch\u1EC9nh s\u1EEDa", 3, "click"], [1, "bx", "bx-edit", "text-warning"], ["nz-button", "", "nzType", "text", "nzSize", "small", "title", "X\xF3a", 3, "click"], [1, "bx", "bx-trash", "text-danger"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label", "fw-semibold"], ["class", "text-danger", 4, "ngIf"], [1, "input-group"], ["nz-input", "", "readonly", "", 3, "ngModel"], ["nz-button", "", "type", "button", 3, "title", "click", 4, "ngIf"], ["class", "col-md-6", 4, "ngIf"], [1, "w-100", 3, "ngModelChange", "ngModel"], ["nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "rows", "3", 3, "ngModelChange", "ngModel"], [1, "text-danger"], ["nz-button", "", "type", "button", 3, "click", "title"], [1, "row", "g-2", "align-items-end", "mb-3", 3, "ngSubmit"], [1, "col-md-8"], ["nz-input", "", "name", "vteiPickerKeyword", 3, "ngModelChange", "keydown.enter", "ngModel", "placeholder"], [1, "col-md-4"], ["nz-button", "", "nzType", "primary", "type", "submit"], ["nzSize", "small", 3, "nzData", "nzLoading", "nzPageSize"], ["class", "vtei-row-clickable", 3, "click", 4, "ngFor", "ngForOf"], [1, "vtei-row-clickable", 3, "click"], [1, "mb-1"], [1, "fw-bold", "mb-0"]], template: function ViewTempEmpInfoListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "nz-card", 4)(3, "form", 5);
      \u0275\u0275listener("ngSubmit", function ViewTempEmpInfoListComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 6)(5, "label", 7);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function ViewTempEmpInfoListComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.localName, $event) || (ctx.localName = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 6)(10, "label", 7);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function ViewTempEmpInfoListComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.empId, $event) || (ctx.empId = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 6)(15, "label", 7);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function ViewTempEmpInfoListComponent_Template_input_ngModelChange_18_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.deptNo, $event) || (ctx.deptNo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 6)(20, "label", 7);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function ViewTempEmpInfoListComponent_Template_input_ngModelChange_23_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.position, $event) || (ctx.position = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 6)(25, "label", 7);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "nz-date-picker", 12);
      \u0275\u0275twoWayListener("ngModelChange", function ViewTempEmpInfoListComponent_Template_nz_date_picker_ngModelChange_28_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.createDateFrom, $event) || (ctx.createDateFrom = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 6)(30, "label", 7);
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "nz-date-picker", 13);
      \u0275\u0275twoWayListener("ngModelChange", function ViewTempEmpInfoListComponent_Template_nz_date_picker_ngModelChange_33_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.createDateTo, $event) || (ctx.createDateTo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 6)(35, "label", 7);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "nz-select", 14);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewTempEmpInfoListComponent_Template_nz_select_ngModelChange_38_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.activity, $event) || (ctx.activity = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275element(40, "nz-option", 15);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275element(42, "nz-option", 15);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 6)(45, "label", 7);
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "nz-select", 16);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewTempEmpInfoListComponent_Template_nz_select_ngModelChange_48_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.otFlag, $event) || (ctx.otFlag = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275element(50, "nz-option", 15);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275element(52, "nz-option", 15);
      \u0275\u0275pipe(53, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 17)(55, "button", 18);
      \u0275\u0275listener("click", function ViewTempEmpInfoListComponent_Template_button_click_55_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(56, "i", 19);
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "button", 20);
      \u0275\u0275element(60, "i", 21);
      \u0275\u0275text(61);
      \u0275\u0275pipe(62, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "button", 22);
      \u0275\u0275listener("click", function ViewTempEmpInfoListComponent_Template_button_click_63_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(64, "i", 23);
      \u0275\u0275text(65);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "button", 24);
      \u0275\u0275listener("click", function ViewTempEmpInfoListComponent_Template_button_click_67_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(68, "i", 25);
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(71, "nz-card");
      \u0275\u0275template(72, ViewTempEmpInfoListComponent_nz_alert_72_Template, 1, 1, "nz-alert", 26);
      \u0275\u0275elementStart(73, "nz-table", 27);
      \u0275\u0275listener("nzPageIndexChange", function ViewTempEmpInfoListComponent_Template_nz_table_nzPageIndexChange_73_listener($event) {
        return ctx.onPageIndexChange($event);
      })("nzPageSizeChange", function ViewTempEmpInfoListComponent_Template_nz_table_nzPageSizeChange_73_listener($event) {
        return ctx.onPageSizeChange($event);
      });
      \u0275\u0275elementStart(74, "thead")(75, "tr")(76, "th", 28);
      \u0275\u0275text(77);
      \u0275\u0275pipe(78, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "th", 29);
      \u0275\u0275text(80);
      \u0275\u0275pipe(81, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "th", 30);
      \u0275\u0275text(83);
      \u0275\u0275pipe(84, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "th", 31);
      \u0275\u0275text(86);
      \u0275\u0275pipe(87, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "th", 31);
      \u0275\u0275text(89);
      \u0275\u0275pipe(90, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "th", 32);
      \u0275\u0275text(92);
      \u0275\u0275pipe(93, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "th", 33);
      \u0275\u0275text(95);
      \u0275\u0275pipe(96, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "th", 32);
      \u0275\u0275text(98);
      \u0275\u0275pipe(99, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "th", 32);
      \u0275\u0275text(101);
      \u0275\u0275pipe(102, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "th", 32);
      \u0275\u0275text(104);
      \u0275\u0275pipe(105, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "th", 34);
      \u0275\u0275text(107);
      \u0275\u0275pipe(108, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(109, "tbody");
      \u0275\u0275template(110, ViewTempEmpInfoListComponent_tr_110_Template, 4, 4, "tr", 35)(111, ViewTempEmpInfoListComponent_tr_111_Template, 32, 32, "tr", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275template(112, ViewTempEmpInfoListComponent_ng_template_112_Template, 2, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(114, "nz-modal", 37);
      \u0275\u0275listener("nzOnCancel", function ViewTempEmpInfoListComponent_Template_nz_modal_nzOnCancel_114_listener() {
        return ctx.closeModal();
      })("nzOnOk", function ViewTempEmpInfoListComponent_Template_nz_modal_nzOnOk_114_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(115, ViewTempEmpInfoListComponent_ng_container_115_Template, 59, 68, "ng-container", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "nz-modal", 39);
      \u0275\u0275pipe(117, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewTempEmpInfoListComponent_Template_nz_modal_nzOnCancel_116_listener() {
        return ctx.closePicker();
      });
      \u0275\u0275template(118, ViewTempEmpInfoListComponent_ng_container_118_Template, 34, 37, "ng-container", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "nz-modal", 40);
      \u0275\u0275pipe(120, "translate");
      \u0275\u0275pipe(121, "translate");
      \u0275\u0275pipe(122, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewTempEmpInfoListComponent_Template_nz_modal_nzOnCancel_119_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function ViewTempEmpInfoListComponent_Template_nz_modal_nzOnOk_119_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(123, ViewTempEmpInfoListComponent_ng_container_123_Template, 6, 5, "ng-container", 38);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const vteiTotalTpl_r14 = \u0275\u0275reference(113);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 65, "alert.pa.pasalarycanshu.xingming", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.localName);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 68, "hr.enpinfo.title.EMP.EMPNUMBER", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.empId);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 71, "ar.addempshift.title.bydept", "Ph\xF2ng ban"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.deptNo);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 74, "ess.trans.title.postGradeName", "Ch\u1EE9c v\u1EE5"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.position);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 77, "ess.empInfo.start_date", "Ng\xE0y b\u1EAFt \u0111\u1EA7u"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.createDateFrom);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 80, "ess.empInfo.end_date", "Ng\xE0y k\u1EBFt th\xFAc"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.createDateTo);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 83, "common.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.activity);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(39, 86, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("nzValue", 1)("nzLabel", \u0275\u0275pipeBind2(41, 89, "common.active", "Ho\u1EA1t \u0111\u1ED9ng"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzValue", 0)("nzLabel", \u0275\u0275pipeBind2(43, 92, "common.inactive", "Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(47, 95, "tempEmp.otStatus", "Tr\u1EA1ng th\xE1i OT"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.otFlag);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(49, 98, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("nzValue", 1)("nzLabel", \u0275\u0275pipeBind2(51, 101, "tempEmp.hasOt", "C\xF3 OT"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzValue", 0)("nzLabel", \u0275\u0275pipeBind2(53, 104, "tempEmp.noOt", "Kh\xF4ng OT"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(58, 107, "common.create", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(62, 110, "common.search", "T\xECm ki\u1EBFm"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(66, 113, "common.clear", "X\xF3a"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.exporting());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(70, 116, "common.export", "Xu\u1EA5t"), " Excel ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzFrontPagination", false)("nzLoading", ctx.loading())("nzTotal", ctx.recordsFiltered())("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", vteiTotalTpl_r14)("nzScroll", \u0275\u0275pureFunction0(164, _c0));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(78, 119, "ar.viewcycle.title.xuhao", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(81, 122, "hr.enpinfo.title.EMP.EMPNUMBER", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(84, 125, "alert.pa.pasalarycanshu.xingming", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(87, 128, "ar.addempshift.title.bydept", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(90, 131, "ess.trans.title.postGradeName", "Ch\u1EE9c v\u1EE5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(93, 134, "common.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(96, 137, "ar.excelexport.title.createdate", "Ng\xE0y t\u1EA1o"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(99, 140, "ess.empInfo.start_date", "Ng\xE0y b\u1EAFt \u0111\u1EA7u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(102, 143, "ess.empInfo.end_date", "Ng\xE0y k\u1EBFt th\xFAc"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(105, 146, "tempEmp.otStatus", "Tr\u1EA1ng th\xE1i OT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(108, 149, "common.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.rows());
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", ctx.modalTitle())("nzOkLoading", ctx.saving());
      \u0275\u0275advance(2);
      \u0275\u0275property("nzVisible", ctx.pickerVisible())("nzTitle", \u0275\u0275pipeBind2(117, 152, "empSearch.title", "T\xECm ki\u1EBFm nh\xE2n vi\xEAn"))("nzFooter", null);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(120, 155, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(121, 158, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(122, 161, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzDatePickerModule, NzDatePickerComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\n.vtei-row-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.vtei-row-clickable[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.vtei-btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=view-temp-emp-info-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewTempEmpInfoListComponent, [{
    type: Component,
    args: [{ selector: "app-view-temp-emp-info-list", standalone: true, imports: [
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
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm - \u0111\u1EE9ng im khi cu\u1ED9n (xem .sticky-filter-card trong styles.css) -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3" (ngSubmit)="search()">
        <div class="col-md-2">
          <label class="form-label">{{ 'alert.pa.pasalarycanshu.xingming' | translate:'H\u1ECD t\xEAn' }}</label>
          <input nz-input [(ngModel)]="localName" name="vteiLocalName">
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'hr.enpinfo.title.EMP.EMPNUMBER' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</label>
          <input nz-input [(ngModel)]="empId" name="vteiEmpId">
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'ar.addempshift.title.bydept' | translate:'Ph\xF2ng ban' }}</label>
          <input nz-input [(ngModel)]="deptNo" name="vteiDeptNo">
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'ess.trans.title.postGradeName' | translate:'Ch\u1EE9c v\u1EE5' }}</label>
          <input nz-input [(ngModel)]="position" name="vteiPosition">
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'ess.empInfo.start_date' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="createDateFrom" name="vteiCreateDateFrom" nzFormat="dd/MM/yyyy"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'ess.empInfo.end_date' | translate:'Ng\xE0y k\u1EBFt th\xFAc' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="createDateTo" name="vteiCreateDateTo" nzFormat="dd/MM/yyyy"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</label>
          <nz-select class="w-100" [(ngModel)]="activity" name="vteiActivity" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option [nzValue]="1" [nzLabel]="'common.active' | translate:'Ho\u1EA1t \u0111\u1ED9ng'"></nz-option>
            <nz-option [nzValue]="0" [nzLabel]="'common.inactive' | translate:'Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng'"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'tempEmp.otStatus' | translate:'Tr\u1EA1ng th\xE1i OT' }}</label>
          <nz-select class="w-100" [(ngModel)]="otFlag" name="vteiOtFlag" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option [nzValue]="1" [nzLabel]="'tempEmp.hasOt' | translate:'C\xF3 OT'"></nz-option>
            <nz-option [nzValue]="0" [nzLabel]="'tempEmp.noOt' | translate:'Kh\xF4ng OT'"></nz-option>
          </nz-select>
        </div>
        <div class="col-12 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="button" (click)="openAddModal()">
            <i class="bx bx-plus"></i> {{ 'common.create' | translate:'Th\xEAm m\u1EDBi' }}
          </button>
          <button nz-button nzType="default" type="submit">
            <i class="bx bx-search"></i> {{ 'common.search' | translate:'T\xECm ki\u1EBFm' }}
          </button>
          <button nz-button type="button" (click)="clearSearch()">
            <i class="bx bx-x"></i> {{ 'common.clear' | translate:'X\xF3a' }}
          </button>
          <button nz-button nzType="default" type="button" class="vtei-btn-export" [nzLoading]="exporting()" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'common.export' | translate:'Xu\u1EA5t' }} Excel
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <nz-table [nzData]="rows()" [nzFrontPagination]="false" [nzLoading]="loading()"
                [nzTotal]="recordsFiltered()" [nzPageIndex]="pageIndex" [nzPageSize]="pageSize"
                [nzPageSizeOptions]="pageSizeOptions" nzShowSizeChanger [nzShowTotal]="vteiTotalTpl"
                (nzPageIndexChange)="onPageIndexChange($event)" (nzPageSizeChange)="onPageSizeChange($event)"
                [nzScroll]="{ x: '1400px' }" class="table-nowrap">
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'ar.viewcycle.title.xuhao' | translate:'STT' }}</th>
            <th nzWidth="110px">{{ 'hr.enpinfo.title.EMP.EMPNUMBER' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
            <th nzWidth="160px">{{ 'alert.pa.pasalarycanshu.xingming' | translate:'H\u1ECD t\xEAn' }}</th>
            <th nzWidth="120px">{{ 'ar.addempshift.title.bydept' | translate:'Ph\xF2ng ban' }}</th>
            <th nzWidth="120px">{{ 'ess.trans.title.postGradeName' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
            <th class="text-center" nzWidth="150px">{{ 'ar.excelexport.title.createdate' | translate:'Ng\xE0y t\u1EA1o' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'ess.empInfo.start_date' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'ess.empInfo.end_date' | translate:'Ng\xE0y k\u1EBFt th\xFAc' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'tempEmp.otStatus' | translate:'Tr\u1EA1ng th\xE1i OT' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'common.action' | translate:'Thao t\xE1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="11" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of rows(); let i = index">
            <td class="text-center">{{ (pageIndex - 1) * pageSize + i + 1 }}</td>
            <td>{{ row.empId }}</td>
            <td>{{ row.localName }}</td>
            <td>{{ row.deptNo }}</td>
            <td>{{ row.position }}</td>
            <td class="text-center">
              <span class="badge" [class.bg-success]="row.activity === 1" [class.bg-secondary]="row.activity !== 1">
                {{ row.activity === 1 ? ('common.active' | translate:'Ho\u1EA1t \u0111\u1ED9ng') : ('common.inactive' | translate:'Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng') }}
              </span>
            </td>
            <td class="text-center">{{ formatDisplayDateTime(row.createDate) }}</td>
            <td class="text-center">{{ formatDisplayDate(row.startDate) }}</td>
            <td class="text-center">{{ formatDisplayDate(row.endDate) }}</td>
            <td class="text-center">
              <span class="badge" [class.bg-warning]="row.otFlag === 1" [class.bg-light]="row.otFlag !== 1" [class.text-dark]="row.otFlag !== 1">
                {{ row.otFlag === 1 ? ('tempEmp.hasOt' | translate:'C\xF3 OT') : ('tempEmp.noOt' | translate:'Kh\xF4ng OT') }}
              </span>
            </td>
            <td class="text-center">
              <button nz-button nzType="text" nzSize="small" title="Ch\u1EC9nh s\u1EEDa" (click)="openEditModal(row)">
                <i class="bx bx-edit text-warning"></i>
              </button>
              <button nz-button nzType="text" nzSize="small" title="X\xF3a" (click)="openDeleteConfirm(row)">
                <i class="bx bx-trash text-danger"></i>
              </button>
            </td>
          </tr>
        </tbody>
        <ng-template #vteiTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal Th\xEAm m\u1EDBi / Ch\u1EC9nh s\u1EEDa -->
<nz-modal [nzVisible]="modalVisible()" [nzTitle]="modalTitle()" nzWidth="700px"
          (nzOnCancel)="closeModal()" (nzOnOk)="saveForm()" [nzOkLoading]="saving()">
  <ng-container *nzModalContent>
    <div class="row g-3">
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'hr.enpinfo.title.EMP.EMPNUMBER' | translate:'M\xE3 nh\xE2n vi\xEAn' }} <span *ngIf="isNew()" class="text-danger">*</span></label>
        <div class="input-group">
          <input nz-input [ngModel]="form.empId" readonly>
          <button *ngIf="isNew()" nz-button type="button" [title]="'tempEmp.pickEmp' | translate:'Ch\u1ECDn nh\xE2n vi\xEAn'" (click)="openPicker()">
            <i class="bx bx-search"></i>
          </button>
        </div>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'alert.pa.pasalarycanshu.xingming' | translate:'H\u1ECD t\xEAn' }}</label>
        <input nz-input [ngModel]="form.localName" readonly>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'ar.addempshift.title.bydept' | translate:'Ph\xF2ng ban' }}</label>
        <input nz-input [ngModel]="form.deptNo" readonly>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'ess.trans.title.postGradeName' | translate:'Ch\u1EE9c v\u1EE5' }}</label>
        <input nz-input [ngModel]="form.position" readonly>
      </div>
      <div class="col-md-6" *ngIf="!isNew()">
        <label class="form-label fw-semibold">{{ 'tempEmp.specialNo' | translate:'S\u1ED1 \u0111\u1EB7c bi\u1EC7t' }}</label>
        <input nz-input [ngModel]="form.specialNo" readonly>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.activity">
          <nz-option [nzValue]="1" [nzLabel]="'common.active' | translate:'Ho\u1EA1t \u0111\u1ED9ng'"></nz-option>
          <nz-option [nzValue]="0" [nzLabel]="'common.inactive' | translate:'Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng'"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'ess.empInfo.start_date' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u' }}</label>
        <nz-date-picker class="w-100" [(ngModel)]="form.startDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'ess.empInfo.end_date' | translate:'Ng\xE0y k\u1EBFt th\xFAc' }}</label>
        <nz-date-picker class="w-100" [(ngModel)]="form.endDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'tempEmp.otStatus' | translate:'Tr\u1EA1ng th\xE1i OT' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.otFlag">
          <nz-option [nzValue]="1" [nzLabel]="'tempEmp.hasOt' | translate:'C\xF3 OT'"></nz-option>
          <nz-option [nzValue]="0" [nzLabel]="'tempEmp.noOt' | translate:'Kh\xF4ng OT'"></nz-option>
        </nz-select>
      </div>
      <div class="col-12">
        <label class="form-label fw-semibold">{{ 'tempEmp.specialContent' | translate:'N\u1ED9i dung \u0111\u1EB7c bi\u1EC7t' }}</label>
        <textarea nz-input [(ngModel)]="form.specialContent" rows="3"></textarea>
      </div>
    </div>
  </ng-container>
</nz-modal>

<!-- Modal ch\u1ECDn nh\xE2n vi\xEAn (ch\u1EC9 d\xF9ng khi th\xEAm m\u1EDBi) -->
<nz-modal [nzVisible]="pickerVisible()" [nzTitle]="'empSearch.title' | translate:'T\xECm ki\u1EBFm nh\xE2n vi\xEAn'"
          nzWidth="800px" (nzOnCancel)="closePicker()" [nzFooter]="null">
  <ng-container *nzModalContent>
    <form class="row g-2 align-items-end mb-3" (ngSubmit)="pickerSearch()">
      <div class="col-md-8">
        <label class="form-label">{{ 'empSearch.field.keyword' | translate:'M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn' }}</label>
        <input nz-input [(ngModel)]="pickerKeyword" name="vteiPickerKeyword"
               [placeholder]="'empSearch.placeholder.keyword' | translate:'Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn'"
               (keydown.enter)="$event.preventDefault(); pickerSearch()">
      </div>
      <div class="col-md-4">
        <button nz-button nzType="primary" type="submit">
          <i class="bx bx-search"></i> {{ 'common.search' | translate:'T\xECm ki\u1EBFm' }}
        </button>
      </div>
    </form>

    <nz-table [nzData]="pickerRows()" [nzLoading]="pickerLoading()" [nzPageSize]="10" nzSize="small" #vteiPickerTable>
      <thead>
        <tr>
          <th class="text-center" nzWidth="60px">{{ 'empSearch.col.no' | translate:'STT' }}</th>
          <th nzWidth="110px">{{ 'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
          <th>{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
          <th>{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
          <th>{{ 'epi.field.position' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of vteiPickerTable.data; let i = index" class="vtei-row-clickable" (click)="selectPickedEmployee(row)">
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
    <p class="mb-1">{{ 'tempEmp.deleteConfirmContent' | translate:'B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a nh\xE2n vi\xEAn n\xE0y? H\xE0nh \u0111\u1ED9ng n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c!' }}</p>
    <p class="fw-bold mb-0">{{ deleteTargetName }}</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-temp-emp-info-list/view-temp-emp-info-list.component.css */\n.vtei-row-clickable {\n  cursor: pointer;\n}\n.vtei-row-clickable:hover {\n  background: #fafafa;\n}\n.vtei-btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=view-temp-emp-info-list.component.css.map */\n"] }]
  }], () => [{ type: ViewTempEmpInfoListService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewTempEmpInfoListComponent, { className: "ViewTempEmpInfoListComponent", filePath: "src/app/view-temp-emp-info-list/view-temp-emp-info-list.component.ts", lineNumber: 103 });
})();
export {
  ViewTempEmpInfoListComponent
};
//# debugId=17962eaa-47c6-5455-a031-4534d4e4166e
//# sourceMappingURL=chunk-QYCAXEZU.js.map
