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

// src/app/view-pa-pay-obj/view-pa-pay-obj.service.ts
var API_BASE = "/pa/workManagement/api/payObj";
var ViewPaPayObjService = class _ViewPaPayObjService {
  constructor(http) {
    this.http = http;
  }
  http;
  getPageList(params) {
    let httpParams = new HttpParams().set("draw", params.draw).set("start", params.start).set("length", params.length);
    if (params.empSearch)
      httpParams = httpParams.set("empSearch", params.empSearch);
    if (params.payScheduleNo)
      httpParams = httpParams.set("payScheduleNo", params.payScheduleNo);
    if (params.includeType)
      httpParams = httpParams.set("includeType", params.includeType);
    if (params.empOffice)
      httpParams = httpParams.set("empOffice", params.empOffice);
    return this.http.get(API_BASE, { params: httpParams, withCredentials: true });
  }
  save(payload) {
    return this.http.post(`${API_BASE}/save`, payload, { withCredentials: true });
  }
  saveList(items) {
    return this.http.post(`${API_BASE}/saveList`, items, { withCredentials: true });
  }
  deleteList(keys) {
    return this.http.request("DELETE", `${API_BASE}/deleteList`, {
      body: keys,
      withCredentials: true
    });
  }
  /** Dùng lại đúng API danh sách kế hoạch trả lương của ViewPaPayScheduleService cho combo chọn. */
  getPayScheduleOptions() {
    return this.http.get("/pa/workManagement/api/paySchedule", { withCredentials: true });
  }
  getCodeList(parentCodeNo) {
    return this.http.get("/sys/api/getCode/list", {
      params: new HttpParams().set("parentCodeNo", parentCodeNo),
      withCredentials: true
    });
  }
  /** Dùng chung endpoint tìm kiếm nhân viên mà ChangeUserComponent/ContractInfoListComponent đang dùng
   *  cho modal chọn nhân viên khi thêm mới - thay cho EmployeeSearchModal (jQuery) bản gốc. */
  searchEmployees(keyword) {
    let params = new HttpParams();
    if (keyword)
      params = params.set("keyword", keyword);
    return this.http.get("/hrm/empinfo/api/employee/search", { params, withCredentials: true });
  }
  static \u0275fac = function ViewPaPayObjService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewPaPayObjService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewPaPayObjService, factory: _ViewPaPayObjService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewPaPayObjService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-pa-pay-obj/view-pa-pay-obj.component.ts
var _c0 = () => ({ x: "1300px", y: "calc(100vh - 420px)" });
var _c1 = () => ({ standalone: true });
function ViewPaPayObjComponent_nz_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 44);
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzValue", p_r2.payScheduleNo)("nzLabel", ctx_r2.payScheduleLabel(p_r2));
  }
}
function ViewPaPayObjComponent_nz_option_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 44);
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r4.codeNo)("nzLabel", c_r4.codeName);
  }
}
function ViewPaPayObjComponent_nz_alert_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 45);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r2.errorMessage() ?? "");
  }
}
function ViewPaPayObjComponent_tr_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 46);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewPaPayObjComponent_tr_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 47)(2, "label", 48);
    \u0275\u0275listener("ngModelChange", function ViewPaPayObjComponent_tr_92_Template_label_ngModelChange_2_listener($event) {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleRow(row_r6, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 47);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 47);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 47)(12, "nz-select", 49);
    \u0275\u0275listener("ngModelChange", function ViewPaPayObjComponent_tr_92_Template_nz_select_ngModelChange_12_listener($event) {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onIncludeTypeChange(row_r6, $event));
    });
    \u0275\u0275element(13, "nz-option", 44);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275element(15, "nz-option", 44);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 47);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 47);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 47);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 47);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("table-warning", ctx_r2.isDirty(row_r6));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r2.isChecked(row_r6))("ngModelOptions", \u0275\u0275pureFunction0(26, _c1));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r2.pageIndex - 1) * ctx_r2.pageSize + i_r7 + 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.empName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.empName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.empId);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.deptName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.deptName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", row_r6.includeType)("ngModelOptions", \u0275\u0275pureFunction0(27, _c1));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzValue", 1)("nzLabel", \u0275\u0275pipeBind2(14, 20, "pa.payObj.includeType.join", "Tham gia"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzValue", 0)("nzLabel", \u0275\u0275pipeBind2(16, 23, "pa.payObj.includeType.notJoin", "Kh\xF4ng tham gia"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r6.createdBy);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.createDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.updatedBy);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.updateDate);
  }
}
function ViewPaPayObjComponent_ng_template_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r8 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r8, " ");
  }
}
function ViewPaPayObjComponent_ng_container_99_nz_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 44);
  }
  if (rf & 2) {
    const p_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzValue", p_r10.payScheduleNo)("nzLabel", ctx_r2.payScheduleLabel(p_r10));
  }
}
function ViewPaPayObjComponent_ng_container_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 50)(2, "label", 51);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span", 52);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "nz-select", 53);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaPayObjComponent_ng_container_99_Template_nz_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.addForm.payScheduleNo, $event) || (ctx_r2.addForm.payScheduleNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(8, ViewPaPayObjComponent_ng_container_99_nz_option_8_Template, 1, 2, "nz-option", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 50)(10, "label", 51);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementStart(13, "span", 52);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 54);
    \u0275\u0275element(16, "input", 55);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(17, "button", 56);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275listener("click", function ViewPaPayObjComponent_ng_container_99_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openPicker());
    });
    \u0275\u0275element(19, "i", 20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 50)(21, "label", 51);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "nz-select", 57);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaPayObjComponent_ng_container_99_Template_nz_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.addForm.includeType, $event) || (ctx_r2.addForm.includeType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(25, "nz-option", 44);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275element(27, "nz-option", 44);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(4, 12, "pa.payObj.payScheduleNo", "K\u1EBF ho\u1EA1ch tr\u1EA3 l\u01B0\u01A1ng"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.addForm.payScheduleNo);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.payScheduleOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(12, 15, "pa.payObj.empId", "M\xE3 nh\xE2n vi\xEAn"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r2.addForm.empDisplay);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind2(18, 18, "tempEmp.pickEmp", "Ch\u1ECDn nh\xE2n vi\xEAn"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 21, "pa.payObj.includeType", "Ph\xE2n bi\u1EC7t"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.addForm.includeType);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzValue", 1)("nzLabel", \u0275\u0275pipeBind2(26, 24, "pa.payObj.includeType.join", "Tham gia"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzValue", 0)("nzLabel", \u0275\u0275pipeBind2(28, 27, "pa.payObj.includeType.notJoin", "Kh\xF4ng tham gia"));
  }
}
function ViewPaPayObjComponent_ng_container_102_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 64);
    \u0275\u0275listener("click", function ViewPaPayObjComponent_ng_container_102_tr_33_Template_tr_click_0_listener() {
      const row_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectPickedEmployee(row_r13));
    });
    \u0275\u0275elementStart(1, "td", 47);
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
    const row_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r14 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r13.empId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r13.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r13.deptName || row_r13.deptNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r13.position);
  }
}
function ViewPaPayObjComponent_ng_container_102_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 58);
    \u0275\u0275listener("ngSubmit", function ViewPaPayObjComponent_ng_container_102_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.pickerSearch());
    });
    \u0275\u0275elementStart(2, "div", 59)(3, "label", 7);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 60);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaPayObjComponent_ng_container_102_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.pickerKeyword, $event) || (ctx_r2.pickerKeyword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function ViewPaPayObjComponent_ng_container_102_Template_input_keydown_enter_6_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r2.pickerSearch());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 6)(9, "button", 19);
    \u0275\u0275element(10, "i", 20);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "nz-table", 61, 1)(15, "thead")(16, "tr")(17, "th", 33);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 62);
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
    \u0275\u0275template(33, ViewPaPayObjComponent_ng_container_102_tr_33_Template, 11, 5, "tr", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const vppoPickerTable_r15 = \u0275\u0275reference(14);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 13, "empSearch.field.keyword", "M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.pickerKeyword);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(7, 16, "empSearch.placeholder.keyword", "Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn"));
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 19, "pa.payObj.search", "Tra c\u1EE9u"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("nzData", ctx_r2.pickerRows())("nzLoading", ctx_r2.pickerLoading())("nzPageSize", 10);
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
    \u0275\u0275property("ngForOf", vppoPickerTable_r15.data);
  }
}
function ViewPaPayObjComponent_ng_container_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 65);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(3, 2, "pa.payObj.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a c\xE1c b\u1EA3n ghi \u0111\xE3 ch\u1ECDn?"), " (", ctx_r2.deleteCount, ")");
  }
}
var I18N_KEYS = [
  "common.stt",
  "common.action",
  "common.confirm",
  "common.cancel",
  "common.close",
  "common.loadFail",
  "common.saveFail",
  "common.deleteFail",
  "common.saveSuccess",
  "common.deleteSuccess",
  "common.noData",
  "common.totalRows",
  "common.selectAll",
  "common.empId",
  "common.empName",
  "common.deptName",
  "pa.payObj.title",
  "pa.payObj.empSearch",
  "pa.payObj.empSearch.placeholder",
  "pa.payObj.empId",
  "pa.payObj.empName",
  "pa.payObj.deptName",
  "pa.payObj.includeType",
  "pa.payObj.includeType.all",
  "pa.payObj.includeType.join",
  "pa.payObj.includeType.notJoin",
  "pa.payObj.payScheduleNo",
  "pa.payObj.empOffice",
  "pa.payObj.createdBy",
  "pa.payObj.createDate",
  "pa.payObj.updatedBy",
  "pa.payObj.updateDate",
  "pa.payObj.no",
  "pa.payObj.search",
  "pa.payObj.addNew",
  "pa.payObj.delete",
  "pa.payObj.save",
  "pa.payObj.exportExcel",
  "pa.payObj.addTitle",
  "pa.payObj.confirmDelete",
  "pa.payObj.selectRequired",
  "pa.payObj.validateRequired",
  "empSearch.title",
  "empSearch.field.keyword",
  "empSearch.placeholder.keyword",
  "empSearch.col.no",
  "epi.field.position",
  "tempEmp.pickEmp"
];
var PAGE_SIZE_OPTIONS = [10, 20, 50, 100];
var EMPTY_ADD_FORM = { payScheduleNo: null, empId: "", empDisplay: "", includeType: 1 };
var ViewPaPayObjComponent = class _ViewPaPayObjComponent {
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
  pageSize = 20;
  empSearch = "";
  searchPayScheduleNo = null;
  searchIncludeType = "";
  searchEmpOffice = null;
  payScheduleOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "payScheduleOptions" }] : (
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
  checkedKeys = signal(
    /* @__PURE__ */ new Set(),
    ...ngDevMode ? [{ debugName: "checkedKeys" }] : (
      /* istanbul ignore next */
      []
    )
  );
  dirtyMap = /* @__PURE__ */ new Map();
  dirtyKeys = signal(
    /* @__PURE__ */ new Set(),
    ...ngDevMode ? [{ debugName: "dirtyKeys" }] : (
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
  addModalVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "addModalVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  addSaving = signal(
    false,
    ...ngDevMode ? [{ debugName: "addSaving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  addForm = __spreadValues({}, EMPTY_ADD_FORM);
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
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadPayScheduleOptions();
    this.loadEmpOfficeOptions();
    this.search();
  }
  loadPayScheduleOptions() {
    this.api.getPayScheduleOptions().subscribe((list) => this.payScheduleOptions.set(list ?? []));
  }
  loadEmpOfficeOptions() {
    this.api.getCodeList("15118").subscribe((list) => this.empOfficeOptions.set(list ?? []));
  }
  payScheduleLabel(p) {
    return `${p.payDate ?? ""} - ${p.salaryDistinName ?? ""}`;
  }
  rowKey(row) {
    return `${row.payScheduleNo}_${row.empId}`;
  }
  search() {
    this.pageIndex = 1;
    this.resetSelection();
    this.loadPage();
  }
  clearSearch() {
    this.empSearch = "";
    this.searchPayScheduleNo = null;
    this.searchIncludeType = "";
    this.searchEmpOffice = null;
    this.search();
  }
  onPageIndexChange(pageIndex) {
    this.pageIndex = pageIndex;
    this.resetSelection();
    this.loadPage();
  }
  onPageSizeChange(pageSize) {
    this.pageSize = pageSize;
    this.pageIndex = 1;
    this.resetSelection();
    this.loadPage();
  }
  resetSelection() {
    this.checkedKeys.set(/* @__PURE__ */ new Set());
    this.dirtyMap.clear();
    this.dirtyKeys.set(/* @__PURE__ */ new Set());
  }
  loadPage() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getPageList({
      empSearch: this.empSearch.trim(),
      payScheduleNo: this.searchPayScheduleNo,
      includeType: this.searchIncludeType,
      empOffice: this.searchEmpOffice,
      draw: this.pageIndex,
      start: (this.pageIndex - 1) * this.pageSize,
      length: this.pageSize
    }).subscribe({
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
  // ==================== Chọn dòng (checkbox) ====================
  isChecked(row) {
    return this.checkedKeys().has(this.rowKey(row));
  }
  toggleRow(row, checked) {
    const set = new Set(this.checkedKeys());
    checked ? set.add(this.rowKey(row)) : set.delete(this.rowKey(row));
    this.checkedKeys.set(set);
  }
  get allChecked() {
    return this.rows().length > 0 && this.rows().every((r) => this.checkedKeys().has(this.rowKey(r)));
  }
  get someChecked() {
    return this.rows().some((r) => this.checkedKeys().has(this.rowKey(r))) && !this.allChecked;
  }
  toggleAll(checked) {
    this.checkedKeys.set(checked ? new Set(this.rows().map((r) => this.rowKey(r))) : /* @__PURE__ */ new Set());
  }
  // ==================== Sửa includeType inline + Lưu hàng loạt ====================
  isDirty(row) {
    return this.dirtyKeys().has(this.rowKey(row));
  }
  onIncludeTypeChange(row, value) {
    row.includeType = value;
    const key = this.rowKey(row);
    this.dirtyMap.set(key, { payScheduleNo: row.payScheduleNo, empId: row.empId, includeType: value });
    this.dirtyKeys.set(new Set(this.dirtyMap.keys()));
  }
  saveDirty() {
    const items = Array.from(this.dirtyMap.values());
    if (items.length === 0) {
      this.message.info(this.i18n.t("pa.payObj.selectRequired", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u thay \u0111\u1ED5i"));
      return;
    }
    this.saving.set(true);
    this.api.saveList(items).subscribe({
      next: () => {
        this.saving.set(false);
        this.dirtyMap.clear();
        this.dirtyKeys.set(/* @__PURE__ */ new Set());
        this.message.success(this.i18n.t("common.saveSuccess", "L\u01B0u th\xE0nh c\xF4ng!"));
        this.loadPage();
      },
      error: () => {
        this.saving.set(false);
        this.message.error(this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  // ==================== Thêm mới ====================
  openAddModal() {
    this.addForm = __spreadProps(__spreadValues({}, EMPTY_ADD_FORM), { payScheduleNo: this.searchPayScheduleNo });
    this.addModalVisible.set(true);
  }
  closeAddModal() {
    this.addModalVisible.set(false);
  }
  saveNew() {
    if (!this.addForm.payScheduleNo || !this.addForm.empId) {
      this.message.warning(this.i18n.t("pa.payObj.validateRequired", "Vui l\xF2ng nh\u1EADp \u0111\u1EA7y \u0111\u1EE7 th\xF4ng tin b\u1EAFt bu\u1ED9c!"));
      return;
    }
    this.addSaving.set(true);
    this.api.save({
      payScheduleNo: this.addForm.payScheduleNo,
      empId: this.addForm.empId,
      includeType: this.addForm.includeType
    }).subscribe({
      next: () => {
        this.addSaving.set(false);
        this.addModalVisible.set(false);
        this.message.success(this.i18n.t("common.saveSuccess", "L\u01B0u th\xE0nh c\xF4ng!"));
        this.search();
      },
      error: (err) => {
        this.addSaving.set(false);
        const msg = err?.error?.error || this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!");
        this.message.error(msg);
      }
    });
  }
  // ==================== Modal chọn nhân viên ====================
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
    this.addForm.empId = emp.empId;
    this.addForm.empDisplay = `${emp.empId} - ${emp.localName}`;
    this.pickerVisible.set(false);
  }
  // ==================== Xóa hàng loạt ====================
  openDeleteConfirm() {
    if (this.checkedKeys().size === 0) {
      this.message.warning(this.i18n.t("pa.payObj.selectRequired", "Vui l\xF2ng ch\u1ECDn \xEDt nh\u1EA5t m\u1ED9t b\u1EA3n ghi!"));
      return;
    }
    this.deleteVisible.set(true);
  }
  closeDeleteConfirm() {
    this.deleteVisible.set(false);
  }
  get deleteCount() {
    return this.checkedKeys().size;
  }
  confirmDelete() {
    const keys = this.rows().filter((r) => this.checkedKeys().has(this.rowKey(r))).map((r) => ({ payScheduleNo: r.payScheduleNo, empId: r.empId }));
    if (keys.length === 0)
      return;
    this.deleting.set(true);
    this.api.deleteList(keys).subscribe({
      next: () => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.message.success(this.i18n.t("common.deleteSuccess", "X\xF3a th\xE0nh c\xF4ng!"));
        this.resetSelection();
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
    this.api.getPageList({
      empSearch: this.empSearch.trim(),
      payScheduleNo: this.searchPayScheduleNo,
      includeType: this.searchIncludeType,
      empOffice: this.searchEmpOffice,
      draw: 1,
      start: 0,
      length: Math.max(this.recordsFiltered(), 1)
    }).subscribe({
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
      this.i18n.t("pa.payObj.no", "No."),
      this.i18n.t("pa.payObj.empName", "H\u1ECD t\xEAn"),
      this.i18n.t("pa.payObj.empId", "M\xE3 nh\xE2n vi\xEAn"),
      this.i18n.t("pa.payObj.deptName", "Ph\xF2ng ban"),
      this.i18n.t("pa.payObj.includeType", "Ph\xE2n bi\u1EC7t"),
      this.i18n.t("pa.payObj.createdBy", "Ng\u01B0\u1EDDi t\u1EA1o"),
      this.i18n.t("pa.payObj.createDate", "Th\u1EDDi gian t\u1EA1o"),
      this.i18n.t("pa.payObj.updatedBy", "Ng\u01B0\u1EDDi thay \u0111\u1ED5i"),
      this.i18n.t("pa.payObj.updateDate", "Th\u1EDDi gian thay \u0111\u1ED5i")
    ];
    const dataRows = list.map((r, i) => [
      i + 1,
      r.empName,
      r.empId,
      r.deptName,
      r.includeType === 1 ? this.i18n.t("pa.payObj.includeType.join", "Tham gia") : this.i18n.t("pa.payObj.includeType.notJoin", "Kh\xF4ng tham gia"),
      r.createdBy,
      r.createDate,
      r.updatedBy,
      r.updateDate
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "DoiTuongNhanLuong");
    writeFileSync(workbook, "pa_pay_obj_list.xlsx");
  }
  static \u0275fac = function ViewPaPayObjComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewPaPayObjComponent)(\u0275\u0275directiveInject(ViewPaPayObjService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewPaPayObjComponent, selectors: [["app-view-pa-pay-obj"]], decls: 108, vars: 155, consts: [["vppoTotalTpl", ""], ["vppoPickerTable", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-4"], [1, "form-label"], ["nz-input", "", "name", "vppoEmpSearch", 3, "ngModelChange", "ngModel", "placeholder"], [1, "col-md-3"], ["name", "vppoSearchPayScheduleNo", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col-md-2"], ["name", "vppoSearchIncludeType", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nzValue", "", 3, "nzLabel"], ["nzValue", "1", 3, "nzLabel"], ["nzValue", "0", 3, "nzLabel"], ["name", "vppoSearchEmpOffice", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [1, "col-12", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzDanger", "", "type", "button", 3, "click"], [1, "bx", "bx-trash"], ["nz-button", "", "type", "button", 3, "click", "nzLoading"], [1, "bx", "bx-save"], ["nz-button", "", "nzType", "default", "type", "button", 1, "vppo-btn-export", 3, "click", "nzLoading"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], ["nzShowSizeChanger", "", 3, "nzPageIndexChange", "nzPageSizeChange", "nzData", "nzFrontPagination", "nzLoading", "nzTotal", "nzPageIndex", "nzPageSize", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "50px", 1, "text-center"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel", "nzIndeterminate", "ngModelOptions"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "180px"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "170px", 1, "text-center"], ["nzWidth", "150px", 1, "text-center"], [4, "ngIf"], [3, "table-warning", 4, "ngFor", "ngForOf"], ["nzWidth", "600px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], ["nzWidth", "800px", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzFooter"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "10", 1, "text-center", "text-muted"], [1, "text-center"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "w-100", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "mb-3"], [1, "form-label", "fw-semibold"], [1, "text-danger"], ["name", "vppoAddPayScheduleNo", 1, "w-100", 3, "ngModelChange", "ngModel"], [1, "input-group"], ["nz-input", "", "name", "vppoAddEmpDisplay", "readonly", "", 3, "ngModel"], ["nz-button", "", "type", "button", 3, "click", "title"], ["name", "vppoAddIncludeType", 1, "w-100", 3, "ngModelChange", "ngModel"], [1, "row", "g-2", "align-items-end", "mb-3", 3, "ngSubmit"], [1, "col-md-8"], ["nz-input", "", "name", "vppoPickerKeyword", 3, "ngModelChange", "keydown.enter", "ngModel", "placeholder"], ["nzSize", "small", 3, "nzData", "nzLoading", "nzPageSize"], ["nzWidth", "110px"], ["class", "vppo-row-clickable", 3, "click", 4, "ngFor", "ngForOf"], [1, "vppo-row-clickable", 3, "click"], [1, "mb-0"]], template: function ViewPaPayObjComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "nz-card", 4)(3, "form", 5);
      \u0275\u0275listener("ngSubmit", function ViewPaPayObjComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 6)(5, "label", 7);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewPaPayObjComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.empSearch, $event) || (ctx.empSearch = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 9)(11, "label", 7);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "nz-select", 10);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewPaPayObjComponent_Template_nz_select_ngModelChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchPayScheduleNo, $event) || (ctx.searchPayScheduleNo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(16, ViewPaPayObjComponent_nz_option_16_Template, 1, 2, "nz-option", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 12)(18, "label", 7);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "nz-select", 13);
      \u0275\u0275twoWayListener("ngModelChange", function ViewPaPayObjComponent_Template_nz_select_ngModelChange_21_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchIncludeType, $event) || (ctx.searchIncludeType = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275element(22, "nz-option", 14);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275element(24, "nz-option", 15);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275element(26, "nz-option", 16);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 9)(29, "label", 7);
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "nz-select", 17);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewPaPayObjComponent_Template_nz_select_ngModelChange_32_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchEmpOffice, $event) || (ctx.searchEmpOffice = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(34, ViewPaPayObjComponent_nz_option_34_Template, 1, 2, "nz-option", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 18)(36, "button", 19);
      \u0275\u0275element(37, "i", 20);
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "button", 21);
      \u0275\u0275listener("click", function ViewPaPayObjComponent_Template_button_click_40_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(41, "i", 22);
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "button", 23);
      \u0275\u0275listener("click", function ViewPaPayObjComponent_Template_button_click_44_listener() {
        return ctx.openDeleteConfirm();
      });
      \u0275\u0275element(45, "i", 24);
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "button", 25);
      \u0275\u0275listener("click", function ViewPaPayObjComponent_Template_button_click_48_listener() {
        return ctx.saveDirty();
      });
      \u0275\u0275element(49, "i", 26);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "button", 27);
      \u0275\u0275listener("click", function ViewPaPayObjComponent_Template_button_click_52_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(53, "i", 28);
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(56, "nz-card");
      \u0275\u0275template(57, ViewPaPayObjComponent_nz_alert_57_Template, 1, 1, "nz-alert", 29);
      \u0275\u0275elementStart(58, "nz-table", 30);
      \u0275\u0275listener("nzPageIndexChange", function ViewPaPayObjComponent_Template_nz_table_nzPageIndexChange_58_listener($event) {
        return ctx.onPageIndexChange($event);
      })("nzPageSizeChange", function ViewPaPayObjComponent_Template_nz_table_nzPageSizeChange_58_listener($event) {
        return ctx.onPageSizeChange($event);
      });
      \u0275\u0275elementStart(59, "thead")(60, "tr")(61, "th", 31)(62, "label", 32);
      \u0275\u0275listener("ngModelChange", function ViewPaPayObjComponent_Template_label_ngModelChange_62_listener($event) {
        return ctx.toggleAll($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "th", 33);
      \u0275\u0275text(64);
      \u0275\u0275pipe(65, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "th", 34);
      \u0275\u0275text(67);
      \u0275\u0275pipe(68, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "th", 35);
      \u0275\u0275text(70);
      \u0275\u0275pipe(71, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "th", 34);
      \u0275\u0275text(73);
      \u0275\u0275pipe(74, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "th", 36);
      \u0275\u0275text(76);
      \u0275\u0275pipe(77, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "th", 35);
      \u0275\u0275text(79);
      \u0275\u0275pipe(80, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "th", 37);
      \u0275\u0275text(82);
      \u0275\u0275pipe(83, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "th", 35);
      \u0275\u0275text(85);
      \u0275\u0275pipe(86, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "th", 37);
      \u0275\u0275text(88);
      \u0275\u0275pipe(89, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(90, "tbody");
      \u0275\u0275template(91, ViewPaPayObjComponent_tr_91_Template, 4, 4, "tr", 38)(92, ViewPaPayObjComponent_tr_92_Template, 25, 28, "tr", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275template(93, ViewPaPayObjComponent_ng_template_93_Template, 2, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(95, "nz-modal", 40);
      \u0275\u0275pipe(96, "translate");
      \u0275\u0275pipe(97, "translate");
      \u0275\u0275pipe(98, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewPaPayObjComponent_Template_nz_modal_nzOnCancel_95_listener() {
        return ctx.closeAddModal();
      })("nzOnOk", function ViewPaPayObjComponent_Template_nz_modal_nzOnOk_95_listener() {
        return ctx.saveNew();
      });
      \u0275\u0275template(99, ViewPaPayObjComponent_ng_container_99_Template, 29, 30, "ng-container", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "nz-modal", 42);
      \u0275\u0275pipe(101, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewPaPayObjComponent_Template_nz_modal_nzOnCancel_100_listener() {
        return ctx.closePicker();
      });
      \u0275\u0275template(102, ViewPaPayObjComponent_ng_container_102_Template, 34, 37, "ng-container", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "nz-modal", 43);
      \u0275\u0275pipe(104, "translate");
      \u0275\u0275pipe(105, "translate");
      \u0275\u0275pipe(106, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewPaPayObjComponent_Template_nz_modal_nzOnCancel_103_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function ViewPaPayObjComponent_Template_nz_modal_nzOnOk_103_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(107, ViewPaPayObjComponent_ng_container_107_Template, 4, 5, "ng-container", 41);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const vppoTotalTpl_r16 = \u0275\u0275reference(94);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 60, "pa.payObj.empSearch", "M\xE3 NV/H\u1ECD t\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.empSearch);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 63, "pa.payObj.empSearch.placeholder", "Nh\u1EADp m\xE3 NV ho\u1EB7c h\u1ECD t\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 66, "pa.payObj.payScheduleNo", "K\u1EBF ho\u1EA1ch tr\u1EA3 l\u01B0\u01A1ng"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchPayScheduleNo);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(15, 69, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.payScheduleOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 72, "pa.payObj.includeType", "Ph\xE2n bi\u1EC7t"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchIncludeType);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(23, 75, "pa.payObj.includeType.all", "T\u1EA5t c\u1EA3"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(25, 78, "pa.payObj.includeType.join", "Tham gia"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(27, 81, "pa.payObj.includeType.notJoin", "Kh\xF4ng tham gia"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 84, "pa.payObj.empOffice", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchEmpOffice);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(33, 87, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.empOfficeOptions());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(39, 90, "pa.payObj.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(43, 93, "pa.payObj.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(47, 96, "pa.payObj.delete", "X\xF3a"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.saving());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(51, 99, "pa.payObj.save", "L\u01B0u"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.exporting());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(55, 102, "pa.payObj.exportExcel", "Xu\u1EA5t Excel"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzFrontPagination", false)("nzLoading", ctx.loading())("nzTotal", ctx.recordsFiltered())("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", vppoTotalTpl_r16)("nzScroll", \u0275\u0275pureFunction0(153, _c0));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngModel", ctx.allChecked)("nzIndeterminate", ctx.someChecked)("ngModelOptions", \u0275\u0275pureFunction0(154, _c1));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(65, 105, "pa.payObj.no", "No."));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(68, 108, "pa.payObj.empName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(71, 111, "pa.payObj.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(74, 114, "pa.payObj.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(77, 117, "pa.payObj.includeType", "Ph\xE2n bi\u1EC7t"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(80, 120, "pa.payObj.createdBy", "Ng\u01B0\u1EDDi t\u1EA1o"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(83, 123, "pa.payObj.createDate", "Th\u1EDDi gian t\u1EA1o"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(86, 126, "pa.payObj.updatedBy", "Ng\u01B0\u1EDDi thay \u0111\u1ED5i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(89, 129, "pa.payObj.updateDate", "Th\u1EDDi gian thay \u0111\u1ED5i"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.rows());
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.addModalVisible())("nzTitle", \u0275\u0275pipeBind2(96, 132, "pa.payObj.addTitle", "Th\xEAm m\u1EDBi \u0111\u1ED1i t\u01B0\u1EE3ng nh\u1EADn l\u01B0\u01A1ng"))("nzOkLoading", ctx.addSaving())("nzOkText", \u0275\u0275pipeBind2(97, 135, "pa.payObj.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(98, 138, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(5);
      \u0275\u0275property("nzVisible", ctx.pickerVisible())("nzTitle", \u0275\u0275pipeBind2(101, 141, "empSearch.title", "T\xECm ki\u1EBFm nh\xE2n vi\xEAn"))("nzFooter", null);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(104, 144, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(105, 147, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(106, 150, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzCheckboxModule, NzCheckboxComponent, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\n.vppo-btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n.vppo-row-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=view-pa-pay-obj.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewPaPayObjComponent, [{
    type: Component,
    args: [{ selector: "app-view-pa-pay-obj", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzSelectModule,
      NzButtonModule,
      NzModalModule,
      NzCheckboxModule,
      NzAlertModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm - \u0111\u1EE9ng im khi cu\u1ED9n (xem .sticky-filter-card trong styles.css) -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3" (ngSubmit)="search()">
        <div class="col-md-4">
          <label class="form-label">{{ 'pa.payObj.empSearch' | translate:'M\xE3 NV/H\u1ECD t\xEAn' }}</label>
          <input nz-input [(ngModel)]="empSearch" name="vppoEmpSearch"
                 [placeholder]="'pa.payObj.empSearch.placeholder' | translate:'Nh\u1EADp m\xE3 NV ho\u1EB7c h\u1ECD t\xEAn'">
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'pa.payObj.payScheduleNo' | translate:'K\u1EBF ho\u1EA1ch tr\u1EA3 l\u01B0\u01A1ng' }}</label>
          <nz-select class="w-100" [(ngModel)]="searchPayScheduleNo" name="vppoSearchPayScheduleNo" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let p of payScheduleOptions()" [nzValue]="p.payScheduleNo" [nzLabel]="payScheduleLabel(p)"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'pa.payObj.includeType' | translate:'Ph\xE2n bi\u1EC7t' }}</label>
          <nz-select class="w-100" [(ngModel)]="searchIncludeType" name="vppoSearchIncludeType">
            <nz-option nzValue="" [nzLabel]="'pa.payObj.includeType.all' | translate:'T\u1EA5t c\u1EA3'"></nz-option>
            <nz-option nzValue="1" [nzLabel]="'pa.payObj.includeType.join' | translate:'Tham gia'"></nz-option>
            <nz-option nzValue="0" [nzLabel]="'pa.payObj.includeType.notJoin' | translate:'Kh\xF4ng tham gia'"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'pa.payObj.empOffice' | translate:'Tr\u1EA1ng th\xE1i' }}</label>
          <nz-select class="w-100" [(ngModel)]="searchEmpOffice" name="vppoSearchEmpOffice" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let c of empOfficeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-12 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'pa.payObj.search' | translate:'Tra c\u1EE9u' }}
          </button>
          <button nz-button nzType="primary" type="button" (click)="openAddModal()">
            <i class="bx bx-plus"></i> {{ 'pa.payObj.addNew' | translate:'Th\xEAm m\u1EDBi' }}
          </button>
          <button nz-button nzDanger type="button" (click)="openDeleteConfirm()">
            <i class="bx bx-trash"></i> {{ 'pa.payObj.delete' | translate:'X\xF3a' }}
          </button>
          <button nz-button type="button" [nzLoading]="saving()" (click)="saveDirty()">
            <i class="bx bx-save"></i> {{ 'pa.payObj.save' | translate:'L\u01B0u' }}
          </button>
          <button nz-button nzType="default" type="button" class="vppo-btn-export" [nzLoading]="exporting()" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'pa.payObj.exportExcel' | translate:'Xu\u1EA5t Excel' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <nz-table [nzData]="rows()" [nzFrontPagination]="false" [nzLoading]="loading()"
                [nzTotal]="recordsFiltered()" [nzPageIndex]="pageIndex" [nzPageSize]="pageSize"
                [nzPageSizeOptions]="pageSizeOptions" nzShowSizeChanger [nzShowTotal]="vppoTotalTpl"
                (nzPageIndexChange)="onPageIndexChange($event)" (nzPageSizeChange)="onPageSizeChange($event)"
                [nzScroll]="{ x: '1300px', y: 'calc(100vh - 420px)' }">
        <thead>
          <tr>
            <th class="text-center" nzWidth="50px">
              <label nz-checkbox [ngModel]="allChecked" [nzIndeterminate]="someChecked"
                     [ngModelOptions]="{ standalone: true }" (ngModelChange)="toggleAll($event)"></label>
            </th>
            <th class="text-center" nzWidth="60px">{{ 'pa.payObj.no' | translate:'No.' }}</th>
            <th nzWidth="180px">{{ 'pa.payObj.empName' | translate:'H\u1ECD t\xEAn' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'pa.payObj.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
            <th nzWidth="180px">{{ 'pa.payObj.deptName' | translate:'Ph\xF2ng ban' }}</th>
            <th class="text-center" nzWidth="170px">{{ 'pa.payObj.includeType' | translate:'Ph\xE2n bi\u1EC7t' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'pa.payObj.createdBy' | translate:'Ng\u01B0\u1EDDi t\u1EA1o' }}</th>
            <th class="text-center" nzWidth="150px">{{ 'pa.payObj.createDate' | translate:'Th\u1EDDi gian t\u1EA1o' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'pa.payObj.updatedBy' | translate:'Ng\u01B0\u1EDDi thay \u0111\u1ED5i' }}</th>
            <th class="text-center" nzWidth="150px">{{ 'pa.payObj.updateDate' | translate:'Th\u1EDDi gian thay \u0111\u1ED5i' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="10" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of rows(); let i = index" [class.table-warning]="isDirty(row)">
            <td class="text-center">
              <label nz-checkbox [ngModel]="isChecked(row)" [ngModelOptions]="{ standalone: true }"
                     (ngModelChange)="toggleRow(row, $event)"></label>
            </td>
            <td class="text-center">{{ (pageIndex - 1) * pageSize + i + 1 }}</td>
            <td [attr.title]="row.empName || null">{{ row.empName }}</td>
            <td class="text-center">{{ row.empId }}</td>
            <td [attr.title]="row.deptName || null">{{ row.deptName }}</td>
            <td class="text-center">
              <nz-select class="w-100" [ngModel]="row.includeType" [ngModelOptions]="{ standalone: true }"
                         (ngModelChange)="onIncludeTypeChange(row, $event)">
                <nz-option [nzValue]="1" [nzLabel]="'pa.payObj.includeType.join' | translate:'Tham gia'"></nz-option>
                <nz-option [nzValue]="0" [nzLabel]="'pa.payObj.includeType.notJoin' | translate:'Kh\xF4ng tham gia'"></nz-option>
              </nz-select>
            </td>
            <td class="text-center">{{ row.createdBy }}</td>
            <td class="text-center">{{ row.createDate }}</td>
            <td class="text-center">{{ row.updatedBy }}</td>
            <td class="text-center">{{ row.updateDate }}</td>
          </tr>
        </tbody>
        <ng-template #vppoTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal Th\xEAm m\u1EDBi -->
<nz-modal [nzVisible]="addModalVisible()" [nzTitle]="'pa.payObj.addTitle' | translate:'Th\xEAm m\u1EDBi \u0111\u1ED1i t\u01B0\u1EE3ng nh\u1EADn l\u01B0\u01A1ng'"
          nzWidth="600px" (nzOnCancel)="closeAddModal()" (nzOnOk)="saveNew()" [nzOkLoading]="addSaving()"
          [nzOkText]="'pa.payObj.save' | translate:'L\u01B0u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <div class="mb-3">
      <label class="form-label fw-semibold">{{ 'pa.payObj.payScheduleNo' | translate:'K\u1EBF ho\u1EA1ch tr\u1EA3 l\u01B0\u01A1ng' }} <span class="text-danger">*</span></label>
      <nz-select class="w-100" [(ngModel)]="addForm.payScheduleNo" name="vppoAddPayScheduleNo">
        <nz-option *ngFor="let p of payScheduleOptions()" [nzValue]="p.payScheduleNo" [nzLabel]="payScheduleLabel(p)"></nz-option>
      </nz-select>
    </div>
    <div class="mb-3">
      <label class="form-label fw-semibold">{{ 'pa.payObj.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }} <span class="text-danger">*</span></label>
      <div class="input-group">
        <input nz-input [ngModel]="addForm.empDisplay" name="vppoAddEmpDisplay" readonly>
        <button nz-button type="button" [title]="'tempEmp.pickEmp' | translate:'Ch\u1ECDn nh\xE2n vi\xEAn'" (click)="openPicker()">
          <i class="bx bx-search"></i>
        </button>
      </div>
    </div>
    <div class="mb-3">
      <label class="form-label fw-semibold">{{ 'pa.payObj.includeType' | translate:'Ph\xE2n bi\u1EC7t' }}</label>
      <nz-select class="w-100" [(ngModel)]="addForm.includeType" name="vppoAddIncludeType">
        <nz-option [nzValue]="1" [nzLabel]="'pa.payObj.includeType.join' | translate:'Tham gia'"></nz-option>
        <nz-option [nzValue]="0" [nzLabel]="'pa.payObj.includeType.notJoin' | translate:'Kh\xF4ng tham gia'"></nz-option>
      </nz-select>
    </div>
  </ng-container>
</nz-modal>

<!-- Modal ch\u1ECDn nh\xE2n vi\xEAn -->
<nz-modal [nzVisible]="pickerVisible()" [nzTitle]="'empSearch.title' | translate:'T\xECm ki\u1EBFm nh\xE2n vi\xEAn'"
          nzWidth="800px" (nzOnCancel)="closePicker()" [nzFooter]="null">
  <ng-container *nzModalContent>
    <form class="row g-2 align-items-end mb-3" (ngSubmit)="pickerSearch()">
      <div class="col-md-8">
        <label class="form-label">{{ 'empSearch.field.keyword' | translate:'M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn' }}</label>
        <input nz-input [(ngModel)]="pickerKeyword" name="vppoPickerKeyword"
               [placeholder]="'empSearch.placeholder.keyword' | translate:'Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn'"
               (keydown.enter)="$event.preventDefault(); pickerSearch()">
      </div>
      <div class="col-md-4">
        <button nz-button nzType="primary" type="submit">
          <i class="bx bx-search"></i> {{ 'pa.payObj.search' | translate:'Tra c\u1EE9u' }}
        </button>
      </div>
    </form>

    <nz-table [nzData]="pickerRows()" [nzLoading]="pickerLoading()" [nzPageSize]="10" nzSize="small" #vppoPickerTable>
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
        <tr *ngFor="let row of vppoPickerTable.data; let i = index" class="vppo-row-clickable" (click)="selectPickedEmployee(row)">
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
    <p class="mb-0">{{ 'pa.payObj.confirmDelete' | translate:'B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a c\xE1c b\u1EA3n ghi \u0111\xE3 ch\u1ECDn?' }} ({{ deleteCount }})</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-pa-pay-obj/view-pa-pay-obj.component.css */\n.vppo-btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n.vppo-row-clickable {\n  cursor: pointer;\n}\n/*# sourceMappingURL=view-pa-pay-obj.component.css.map */\n"] }]
  }], () => [{ type: ViewPaPayObjService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewPaPayObjComponent, { className: "ViewPaPayObjComponent", filePath: "src/app/view-pa-pay-obj/view-pa-pay-obj.component.ts", lineNumber: 90 });
})();
export {
  ViewPaPayObjComponent
};
//# debugId=9a9e108f-c4dd-5a22-ae34-c88259ed27bd
//# sourceMappingURL=chunk-PM6VCNGN.js.map
