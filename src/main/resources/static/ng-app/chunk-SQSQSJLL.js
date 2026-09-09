import {
  NzTabComponent,
  NzTabsComponent,
  NzTabsModule
} from "./chunk-BGUOIBB5.js";
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
  HttpParams,
  Injectable,
  NgClass,
  NgForOf,
  NgIf,
  NzButtonComponent,
  NzButtonModule,
  NzTransitionPatchDirective,
  NzWaveDirective,
  __spreadProps,
  __spreadValues,
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

// src/app/view-recruit-list/view-recruit-list.service.ts
var API_BASE = "/hrm/recruitManage/api";
var ViewRecruitListService = class _ViewRecruitListService {
  constructor(http) {
    this.http = http;
  }
  http;
  getEmployeeList(params) {
    return this.http.post(`${API_BASE}/employee/list`, params, {
      withCredentials: true
    });
  }
  getEmployeeDetail(personId) {
    return this.http.get(`${API_BASE}/employee/detail`, {
      params: new HttpParams().set("personId", personId),
      withCredentials: true
    });
  }
  saveEmployee(dto) {
    return this.http.post(`${API_BASE}/employee/save`, dto, { withCredentials: true });
  }
  getEducationList(personId) {
    return this.http.get(`${API_BASE}/education/list`, {
      params: new HttpParams().set("personId", personId),
      withCredentials: true
    });
  }
  saveEducation(dto) {
    return this.http.post(`${API_BASE}/education/save`, dto, { withCredentials: true });
  }
  deleteEducation(seq) {
    return this.http.post(`${API_BASE}/education/delete`, null, {
      params: new HttpParams().set("seq", String(seq)),
      withCredentials: true
    });
  }
  getWorkExpList(personId) {
    return this.http.get(`${API_BASE}/workexp/list`, {
      params: new HttpParams().set("personId", personId),
      withCredentials: true
    });
  }
  saveWorkExp(dto) {
    return this.http.post(`${API_BASE}/workexp/save`, dto, { withCredentials: true });
  }
  deleteWorkExp(seq) {
    return this.http.post(`${API_BASE}/workexp/delete`, null, {
      params: new HttpParams().set("seq", String(seq)),
      withCredentials: true
    });
  }
  getFamilyList(personId) {
    return this.http.get(`${API_BASE}/family/list`, {
      params: new HttpParams().set("personId", personId),
      withCredentials: true
    });
  }
  saveFamily(dto) {
    return this.http.post(`${API_BASE}/family/save`, dto, { withCredentials: true });
  }
  deleteFamily(seq) {
    return this.http.post(`${API_BASE}/family/delete`, null, {
      params: new HttpParams().set("seq", String(seq)),
      withCredentials: true
    });
  }
  execute(personIds, type) {
    return this.http.post(`${API_BASE}/execute`, null, {
      params: new HttpParams().set("personIds", personIds).set("type", type),
      withCredentials: true
    });
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
  static \u0275fac = function ViewRecruitListService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewRecruitListService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewRecruitListService, factory: _ViewRecruitListService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewRecruitListService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-recruit-list/view-recruit-list.component.ts
var _c0 = () => ({ padding: "8px" });
var _c1 = () => ({ y: "calc(100vh - 380px)" });
function ViewRecruitListComponent_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 91);
    \u0275\u0275listener("click", function ViewRecruitListComponent_button_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.executeAction("CONFIRM"));
    });
    \u0275\u0275element(1, "i", 92);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.checkedPersonIds().size === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, "recruit.list.btn.confirm", "X\xE1c nh\u1EADn"), " ");
  }
}
function ViewRecruitListComponent_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 93);
    \u0275\u0275listener("click", function ViewRecruitListComponent_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.executeAction("CANCEL"));
    });
    \u0275\u0275element(1, "i", 94);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.checkedPersonIds().size === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, "recruit.list.btn.cancelConfirm", "H\u1EE7y x\xE1c nh\u1EADn"), " ");
  }
}
function ViewRecruitListComponent_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 95);
    \u0275\u0275listener("click", function ViewRecruitListComponent_tr_39_Template_tr_click_0_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectEmployee(row_r5));
    });
    \u0275\u0275elementStart(1, "td", 96);
    \u0275\u0275listener("click", function ViewRecruitListComponent_tr_39_Template_td_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "label", 20);
    \u0275\u0275listener("ngModelChange", function ViewRecruitListComponent_tr_39_Template_label_ngModelChange_2_listener($event) {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleChecked(row_r5.personId, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 97);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 98);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 99);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("vrl-emp-row-active", row_r5.personId === ctx_r1.selectedPersonId());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.isChecked(row_r5.personId));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r5.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", row_r5.deptName, " \xB7 ", ctx_r1.formatDisplayDate(row_r5.dateStarted));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.empId);
  }
}
function ViewRecruitListComponent_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 100);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewRecruitListComponent_span_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 101);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "recruit.list.label.selectEmployee", "-- Ch\u1ECDn nh\xE2n vi\xEAn --"), " ");
  }
}
function ViewRecruitListComponent_span_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 102);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.form.empId);
  }
}
function ViewRecruitListComponent_nz_option_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 103);
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r6.codeNo)("nzLabel", c_r6.codeName);
  }
}
function ViewRecruitListComponent_nz_option_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 103);
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r7.codeNo)("nzLabel", c_r7.codeName);
  }
}
function ViewRecruitListComponent_nz_option_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 103);
  }
  if (rf & 2) {
    const c_r8 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r8.codeNo)("nzLabel", c_r8.codeName);
  }
}
function ViewRecruitListComponent_nz_option_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 103);
  }
  if (rf & 2) {
    const c_r9 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r9.codeNo)("nzLabel", c_r9.codeName);
  }
}
function ViewRecruitListComponent_div_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.deptTreeErrorMessage());
  }
}
function ViewRecruitListComponent_nz_option_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 103);
  }
  if (rf & 2) {
    const c_r10 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r10.codeNo)("nzLabel", c_r10.codeName);
  }
}
function ViewRecruitListComponent_nz_option_121_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 103);
  }
  if (rf & 2) {
    const c_r11 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r11.codeNo)("nzLabel", c_r11.codeName);
  }
}
function ViewRecruitListComponent_nz_option_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 103);
  }
  if (rf & 2) {
    const c_r12 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r12.codeNo)("nzLabel", c_r12.codeName);
  }
}
function ViewRecruitListComponent_nz_option_133_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 103);
  }
  if (rf & 2) {
    const c_r13 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r13.codeNo)("nzLabel", c_r13.codeName);
  }
}
function ViewRecruitListComponent_nz_option_139_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 103);
  }
  if (rf & 2) {
    const c_r14 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r14.codeNo)("nzLabel", c_r14.codeName);
  }
}
function ViewRecruitListComponent_nz_option_145_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 103);
  }
  if (rf & 2) {
    const c_r15 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r15.codeNo)("nzLabel", c_r15.codeName);
  }
}
function ViewRecruitListComponent_nz_option_239_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 103);
  }
  if (rf & 2) {
    const c_r16 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r16.codeNo)("nzLabel", c_r16.codeName);
  }
}
function ViewRecruitListComponent_tr_316_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 105);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewRecruitListComponent_tr_317_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 99);
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
    \u0275\u0275elementStart(11, "td", 99);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 99);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 99);
    \u0275\u0275element(16, "i", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 99);
    \u0275\u0275element(18, "i", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 99)(20, "button", 107);
    \u0275\u0275listener("click", function ViewRecruitListComponent_tr_317_Template_button_click_20_listener() {
      const row_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEduModal(row_r18));
    });
    \u0275\u0275element(21, "i", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 109);
    \u0275\u0275listener("click", function ViewRecruitListComponent_tr_317_Template_button_click_22_listener() {
      const row_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteEdu(row_r18));
    });
    \u0275\u0275element(23, "i", 110);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r18 = ctx.$implicit;
    const i_r19 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r19 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r18.degreeName || row_r18.degreeCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r18.degreesName || row_r18.degreesCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r18.institutionName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r18.subject);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDisplayDate(row_r18.startDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDisplayDate(row_r18.endDate));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", row_r18.finalDegreeWhether === "Y" ? "bx-check text-success" : "bx-minus text-muted");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", row_r18.experienceStudyAbroad === "Y" ? "bx-check text-success" : "bx-minus text-muted");
  }
}
function ViewRecruitListComponent_tr_356_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 111);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewRecruitListComponent_tr_357_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 99);
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
    \u0275\u0275elementStart(9, "td", 99);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 99);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 99);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 99)(18, "button", 107);
    \u0275\u0275listener("click", function ViewRecruitListComponent_tr_357_Template_button_click_18_listener() {
      const row_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openWorkModal(row_r21));
    });
    \u0275\u0275element(19, "i", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 109);
    \u0275\u0275listener("click", function ViewRecruitListComponent_tr_357_Template_button_click_20_listener() {
      const row_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteWork(row_r21));
    });
    \u0275\u0275element(21, "i", 110);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r22 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r21.cpnyName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r21.deptName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r21.position);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDisplayDate(row_r21.startDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDisplayDate(row_r21.endDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r21.payroll);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r21.leftReason);
  }
}
function ViewRecruitListComponent_tr_396_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 111);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewRecruitListComponent_tr_397_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 99);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 99);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 99);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 99);
    \u0275\u0275element(14, "i", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 99)(18, "button", 107);
    \u0275\u0275listener("click", function ViewRecruitListComponent_tr_397_Template_button_click_18_listener() {
      const row_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openFamilyModal(row_r24));
    });
    \u0275\u0275element(19, "i", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 109);
    \u0275\u0275listener("click", function ViewRecruitListComponent_tr_397_Template_button_click_20_listener() {
      const row_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteFamily(row_r24));
    });
    \u0275\u0275element(21, "i", 110);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r24 = ctx.$implicit;
    const i_r25 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r25 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r24.famName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r24.famTypeName || row_r24.famTypeCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r24.genderName || row_r24.gender);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDisplayDate(row_r24.famBorndate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r24.famPhone);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", row_r24.emergencyContactYn === "Y" ? "bx-check text-success" : "bx-minus text-muted");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r24.occupation);
  }
}
function ViewRecruitListComponent_ng_container_402_nz_option_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 103);
  }
  if (rf & 2) {
    const c_r27 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r27.codeNo)("nzLabel", c_r27.codeName);
  }
}
function ViewRecruitListComponent_ng_container_402_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 3)(2, "div", 112)(3, "label", 33);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "nz-select", 113);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_ng_container_402_Template_nz_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.eduForm.degreeCode, $event) || (ctx_r1.eduForm.degreeCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(7, ViewRecruitListComponent_ng_container_402_nz_option_7_Template, 1, 2, "nz-option", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 112)(9, "label", 33);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 114);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_ng_container_402_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.eduForm.degreesCode, $event) || (ctx_r1.eduForm.degreesCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 115)(14, "label", 33);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 116);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_ng_container_402_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.eduForm.institutionName, $event) || (ctx_r1.eduForm.institutionName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 112)(19, "label", 33);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 117);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_ng_container_402_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.eduForm.subject, $event) || (ctx_r1.eduForm.subject = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 118)(24, "label", 33);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "nz-date-picker", 119);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_ng_container_402_Template_nz_date_picker_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.eduForm.startDatePicker, $event) || (ctx_r1.eduForm.startDatePicker = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 118)(29, "label", 33);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "nz-date-picker", 120);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_ng_container_402_Template_nz_date_picker_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.eduForm.endDatePicker, $event) || (ctx_r1.eduForm.endDatePicker = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 112)(34, "label", 121);
    \u0275\u0275listener("nzCheckedChange", function ViewRecruitListComponent_ng_container_402_Template_label_nzCheckedChange_34_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.eduForm.finalDegreeWhether = $event ? "Y" : "N");
    });
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 112)(38, "label", 121);
    \u0275\u0275listener("nzCheckedChange", function ViewRecruitListComponent_ng_container_402_Template_label_nzCheckedChange_38_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.eduForm.experienceStudyAbroad = $event ? "Y" : "N");
    });
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 115)(42, "label", 33);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "input", 122);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_ng_container_402_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.eduForm.remark, $event) || (ctx_r1.eduForm.remark = $event);
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 19, "recruit.list.edu.degreeCode", "H\u1ECDc v\u1ECB"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eduForm.degreeCode);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.degreeOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 22, "recruit.list.edu.degreesCode", "V\u0103n b\u1EB1ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eduForm.degreesCode);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 25, "recruit.list.edu.institutionName", "T\xEAn tr\u01B0\u1EDDng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eduForm.institutionName);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 28, "recruit.list.edu.subject", "Chuy\xEAn ng\xE0nh"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eduForm.subject);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 31, "recruit.list.edu.startDate", "T\u1EEB ng\xE0y"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eduForm.startDatePicker);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 34, "recruit.list.edu.endDate", "\u0110\u1EBFn ng\xE0y"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eduForm.endDatePicker);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("nzChecked", ctx_r1.eduForm.finalDegreeWhether === "Y");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(36, 37, "recruit.list.edu.finalDegree", "H\u1ECDc v\u1ECB cu\u1ED1i"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("nzChecked", ctx_r1.eduForm.experienceStudyAbroad === "Y");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(40, 40, "recruit.list.edu.studyAbroad", "Du h\u1ECDc"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 43, "common.description", "Ghi ch\xFA"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.eduForm.remark);
    \u0275\u0275control();
  }
}
function ViewRecruitListComponent_ng_container_407_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 3)(2, "div", 115)(3, "label", 33);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 123);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_ng_container_407_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.workForm.cpnyName, $event) || (ctx_r1.workForm.cpnyName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 112)(8, "label", 33);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 124);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_ng_container_407_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.workForm.deptName, $event) || (ctx_r1.workForm.deptName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 112)(13, "label", 33);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 125);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_ng_container_407_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.workForm.position, $event) || (ctx_r1.workForm.position = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 118)(18, "label", 33);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "nz-date-picker", 126);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_ng_container_407_Template_nz_date_picker_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.workForm.startDatePicker, $event) || (ctx_r1.workForm.startDatePicker = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 118)(23, "label", 33);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "nz-date-picker", 127);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_ng_container_407_Template_nz_date_picker_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.workForm.endDatePicker, $event) || (ctx_r1.workForm.endDatePicker = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 112)(28, "label", 33);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 128);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_ng_container_407_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.workForm.payroll, $event) || (ctx_r1.workForm.payroll = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 112)(33, "label", 33);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 129);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_ng_container_407_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.workForm.leftReason, $event) || (ctx_r1.workForm.leftReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 115)(38, "label", 33);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 130);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_ng_container_407_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.workForm.remark, $event) || (ctx_r1.workForm.remark = $event);
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 16, "recruit.list.work.cpnyName", "C\xF4ng ty"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.workForm.cpnyName);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 19, "recruit.list.work.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.workForm.deptName);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 22, "recruit.list.work.position", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.workForm.position);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 25, "recruit.list.work.startDate", "T\u1EEB ng\xE0y"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.workForm.startDatePicker);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 28, "recruit.list.work.endDate", "\u0110\u1EBFn ng\xE0y"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.workForm.endDatePicker);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 31, "recruit.list.work.payroll", "L\u01B0\u01A1ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.workForm.payroll);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 34, "recruit.list.work.leftReason", "L\xFD do ngh\u1EC9"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.workForm.leftReason);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 37, "common.description", "Ghi ch\xFA"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.workForm.remark);
    \u0275\u0275control();
  }
}
function ViewRecruitListComponent_ng_container_412_nz_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 103);
  }
  if (rf & 2) {
    const c_r30 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r30.codeNo)("nzLabel", c_r30.codeName);
  }
}
function ViewRecruitListComponent_ng_container_412_nz_option_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 103);
  }
  if (rf & 2) {
    const c_r31 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r31.codeNo)("nzLabel", c_r31.codeName);
  }
}
function ViewRecruitListComponent_ng_container_412_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 3)(2, "div", 112)(3, "label", 33);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 131);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_ng_container_412_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.familyForm.famName, $event) || (ctx_r1.familyForm.famName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 112)(8, "label", 33);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "nz-select", 132);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_ng_container_412_Template_nz_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.familyForm.famTypeCode, $event) || (ctx_r1.familyForm.famTypeCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(12, ViewRecruitListComponent_ng_container_412_nz_option_12_Template, 1, 2, "nz-option", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 112)(14, "label", 33);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "nz-select", 133);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_ng_container_412_Template_nz_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.familyForm.gender, $event) || (ctx_r1.familyForm.gender = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(18, ViewRecruitListComponent_ng_container_412_nz_option_18_Template, 1, 2, "nz-option", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 112)(20, "label", 33);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "nz-date-picker", 134);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_ng_container_412_Template_nz_date_picker_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.familyForm.famBorndatePicker, $event) || (ctx_r1.familyForm.famBorndatePicker = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 112)(25, "label", 33);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 135);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_ng_container_412_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.familyForm.famPhone, $event) || (ctx_r1.familyForm.famPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 112)(30, "label", 33);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 136);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_ng_container_412_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.familyForm.occupation, $event) || (ctx_r1.familyForm.occupation = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 137)(35, "label", 121);
    \u0275\u0275listener("nzCheckedChange", function ViewRecruitListComponent_ng_container_412_Template_label_nzCheckedChange_35_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.familyForm.emergencyContactYn = $event ? "Y" : "N");
    });
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 115)(39, "label", 33);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 138);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_ng_container_412_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r29);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.familyForm.remark, $event) || (ctx_r1.familyForm.remark = $event);
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 18, "recruit.list.family.famName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.familyForm.famName);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 21, "recruit.list.family.famTypeCode", "Quan h\u1EC7"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.familyForm.famTypeCode);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.famTypeOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 24, "recruit.list.family.gender", "Gi\u1EDBi t\xEDnh"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.familyForm.gender);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.sexOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 27, "recruit.list.family.famBorndate", "Ng\xE0y sinh"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.familyForm.famBorndatePicker);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 30, "recruit.list.family.famPhone", "\u0110i\u1EC7n tho\u1EA1i"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.familyForm.famPhone);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 33, "recruit.list.family.occupation", "Ngh\u1EC1 nghi\u1EC7p"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.familyForm.occupation);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("nzChecked", ctx_r1.familyForm.emergencyContactYn === "Y");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(37, 36, "recruit.list.family.emergencyYn", "Kh\u1EA9n c\u1EA5p"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 39, "common.description", "Ghi ch\xFA"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.familyForm.remark);
    \u0275\u0275control();
  }
}
var I18N_KEYS = [
  "recruit.list.tab.inProgress",
  "recruit.list.tab.completed",
  "recruit.list.tab.general",
  "recruit.list.tab.extra",
  "recruit.list.tab.education",
  "recruit.list.tab.workExp",
  "recruit.list.tab.family",
  "recruit.list.placeholder.searchName",
  "recruit.list.placeholder.searchEmpId",
  "recruit.list.placeholder.selectDept",
  "recruit.list.btn.confirm",
  "recruit.list.btn.cancelConfirm",
  "recruit.list.label.selectEmployee",
  "recruit.list.label.newEmployee",
  "recruit.list.label.employees",
  "recruit.list.field.localName",
  "recruit.list.field.empId",
  "recruit.list.field.englishName",
  "recruit.list.field.koreanName",
  "recruit.list.field.sexcode",
  "recruit.list.field.dob",
  "recruit.list.field.nationalityCode",
  "recruit.list.field.nationCode",
  "recruit.list.field.maritalStatusCode",
  "recruit.list.field.deptNo",
  "recruit.list.field.postFamily",
  "recruit.list.field.postGradeNo",
  "recruit.list.field.positionNo",
  "recruit.list.field.empTypeCode",
  "recruit.list.field.joinType",
  "recruit.list.field.joinDetailType",
  "recruit.list.field.dateStarted",
  "recruit.list.field.fullTimeEmployee",
  "recruit.list.field.endProbationDate",
  "recruit.list.field.contractStartDate",
  "recruit.list.field.costCenter",
  "recruit.list.field.homePhone",
  "recruit.list.field.companyPhone",
  "recruit.list.field.officePhone",
  "recruit.list.field.email",
  "recruit.list.field.idcardNo",
  "recruit.list.field.documentType",
  "recruit.list.field.idcardStartDate",
  "recruit.list.field.issuingAuthority",
  "recruit.list.field.addressContent",
  "recruit.list.field.hujiaddressContent",
  "recruit.list.field.nationality",
  "recruit.list.field.accountNo",
  "recruit.list.field.oldPay",
  "recruit.list.field.experience",
  "recruit.list.field.recruitType",
  "recruit.list.field.recommend",
  "recruit.list.field.remark",
  "recruit.list.edu.degreeCode",
  "recruit.list.edu.degreesCode",
  "recruit.list.edu.institutionName",
  "recruit.list.edu.subject",
  "recruit.list.edu.startDate",
  "recruit.list.edu.endDate",
  "recruit.list.edu.finalDegree",
  "recruit.list.edu.studyAbroad",
  "recruit.list.work.cpnyName",
  "recruit.list.work.deptName",
  "recruit.list.work.position",
  "recruit.list.work.startDate",
  "recruit.list.work.endDate",
  "recruit.list.work.payroll",
  "recruit.list.work.leftReason",
  "recruit.list.family.famName",
  "recruit.list.family.famTypeCode",
  "recruit.list.family.gender",
  "recruit.list.family.famBorndate",
  "recruit.list.family.famPhone",
  "recruit.list.family.emergencyYn",
  "recruit.list.family.occupation",
  "recruit.list.js.selectFirst",
  "recruit.list.js.noChanges",
  "recruit.list.js.selectRow",
  "recruit.list.js.confirmDelete",
  "recruit.list.js.confirmExecute",
  "recruit.list.js.confirmCancel",
  "common.add",
  "common.delete",
  "common.save",
  "common.cancel",
  "common.search",
  "common.clearFilter",
  "common.success",
  "common.error",
  "common.noData",
  "common.yes",
  "common.no",
  "common.description",
  "common.stt",
  "common.empId",
  "common.empName",
  "common.deptName",
  "common.action",
  "common.totalRows",
  "common.loadFail",
  "common.select",
  "mep.msg.loadDeptFailed"
];
var PAGE_SIZE = 20;
function emptyEmployee() {
  return { personId: "" };
}
var ViewRecruitListComponent = class _ViewRecruitListComponent {
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
  pageSize = PAGE_SIZE;
  // ==================== Danh sách nhân viên (bên trái) ====================
  employees = signal(
    [],
    ...ngDevMode ? [{ debugName: "employees" }] : (
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
  loadingList = signal(
    false,
    ...ngDevMode ? [{ debugName: "loadingList" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pageIndex = 1;
  showCompleted = false;
  searchName = "";
  searchEmpId = "";
  checkedPersonIds = signal(
    /* @__PURE__ */ new Set(),
    ...ngDevMode ? [{ debugName: "checkedPersonIds" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // ==================== Nhân viên đang chọn + form chi tiết ====================
  selectedPersonId = signal(
    null,
    ...ngDevMode ? [{ debugName: "selectedPersonId" }] : (
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
  savingEmployee = signal(
    false,
    ...ngDevMode ? [{ debugName: "savingEmployee" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = emptyEmployee();
  dobPicker = null;
  dateStartedPicker = null;
  endProbationDatePicker = null;
  contractStartDatePicker = null;
  idcardStartDatePicker = null;
  activeTabIndex = signal(
    0,
    ...ngDevMode ? [{ debugName: "activeTabIndex" }] : (
      /* istanbul ignore next */
      []
    )
  );
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
  degreeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "degreeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  famTypeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "famTypeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // ==================== Tab Giáo dục ====================
  eduRows = signal(
    [],
    ...ngDevMode ? [{ debugName: "eduRows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  eduLoaded = signal(
    false,
    ...ngDevMode ? [{ debugName: "eduLoaded" }] : (
      /* istanbul ignore next */
      []
    )
  );
  eduLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "eduLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  eduModalVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "eduModalVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  eduSaving = signal(
    false,
    ...ngDevMode ? [{ debugName: "eduSaving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  eduIsNew = signal(
    true,
    ...ngDevMode ? [{ debugName: "eduIsNew" }] : (
      /* istanbul ignore next */
      []
    )
  );
  eduForm = this.emptyEduForm();
  // ==================== Tab Quá trình làm việc ====================
  workRows = signal(
    [],
    ...ngDevMode ? [{ debugName: "workRows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  workLoaded = signal(
    false,
    ...ngDevMode ? [{ debugName: "workLoaded" }] : (
      /* istanbul ignore next */
      []
    )
  );
  workLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "workLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  workModalVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "workModalVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  workSaving = signal(
    false,
    ...ngDevMode ? [{ debugName: "workSaving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  workIsNew = signal(
    true,
    ...ngDevMode ? [{ debugName: "workIsNew" }] : (
      /* istanbul ignore next */
      []
    )
  );
  workForm = this.emptyWorkForm();
  // ==================== Tab Gia đình ====================
  familyRows = signal(
    [],
    ...ngDevMode ? [{ debugName: "familyRows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  familyLoaded = signal(
    false,
    ...ngDevMode ? [{ debugName: "familyLoaded" }] : (
      /* istanbul ignore next */
      []
    )
  );
  familyLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "familyLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  familyModalVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "familyModalVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  familySaving = signal(
    false,
    ...ngDevMode ? [{ debugName: "familySaving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  familyIsNew = signal(
    true,
    ...ngDevMode ? [{ debugName: "familyIsNew" }] : (
      /* istanbul ignore next */
      []
    )
  );
  familyForm = this.emptyFamilyForm();
  deptNameById = /* @__PURE__ */ new Map();
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
    this.loadCodeOptions();
    this.loadList();
  }
  t(key, fallback) {
    return this.i18n.t(key, fallback);
  }
  // ==================== Danh sách + tìm kiếm ====================
  search() {
    this.pageIndex = 1;
    this.checkedPersonIds.set(/* @__PURE__ */ new Set());
    this.loadList();
  }
  onPageIndexChange(index) {
    this.pageIndex = index;
    this.loadList();
  }
  loadList() {
    this.loadingList.set(true);
    const params = {
      draw: this.pageIndex,
      start: (this.pageIndex - 1) * this.pageSize,
      length: this.pageSize,
      activity: this.showCompleted ? "1" : "0",
      searchName: this.searchName,
      searchEmpId: this.searchEmpId
    };
    this.api.getEmployeeList(params).subscribe({
      next: (res) => {
        this.employees.set(res.data ?? []);
        this.totalRecords.set(res.recordsTotal ?? 0);
        this.loadingList.set(false);
      },
      error: () => {
        this.message.error(this.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.employees.set([]);
        this.loadingList.set(false);
      }
    });
  }
  // ==================== Chọn dòng (checkbox xác nhận/hủy xác nhận) ====================
  isChecked(personId) {
    return this.checkedPersonIds().has(personId);
  }
  toggleChecked(personId, checked) {
    const next = new Set(this.checkedPersonIds());
    if (checked)
      next.add(personId);
    else
      next.delete(personId);
    this.checkedPersonIds.set(next);
  }
  get allChecked() {
    const rows = this.employees();
    return rows.length > 0 && rows.every((r) => this.isChecked(r.personId));
  }
  toggleAllChecked(checked) {
    const next = new Set(this.checkedPersonIds());
    this.employees().forEach((r) => checked ? next.add(r.personId) : next.delete(r.personId));
    this.checkedPersonIds.set(next);
  }
  executeAction(type) {
    const personIds = Array.from(this.checkedPersonIds());
    if (!personIds.length) {
      this.message.warning(this.t("recruit.list.js.selectRow", "Vui l\xF2ng ch\u1ECDn \xEDt nh\u1EA5t m\u1ED9t d\xF2ng"));
      return;
    }
    const contentKey = type === "CONFIRM" ? "recruit.list.js.confirmExecute" : "recruit.list.js.confirmCancel";
    const contentFallback = type === "CONFIRM" ? "X\xE1c nh\u1EADn nh\u1EADn vi\u1EC7c cho c\xE1c nh\xE2n vi\xEAn \u0111\xE3 ch\u1ECDn?" : "H\u1EE7y x\xE1c nh\u1EADn nh\u1EADn vi\u1EC7c cho c\xE1c nh\xE2n vi\xEAn \u0111\xE3 ch\u1ECDn?";
    this.modal.confirm({
      nzTitle: this.t(type === "CONFIRM" ? "recruit.list.btn.confirm" : "recruit.list.btn.cancelConfirm", "X\xE1c nh\u1EADn"),
      nzContent: this.t(contentKey, contentFallback),
      nzOnOk: () => {
        this.api.execute(personIds.join(","), type).subscribe({
          next: (res) => {
            if (res.success) {
              this.message.success(res.message || this.t("common.success", "Th\xE0nh c\xF4ng"));
              this.checkedPersonIds.set(/* @__PURE__ */ new Set());
              this.clearSelection();
              this.loadList();
            } else {
              this.message.error(res.message || this.t("common.error", "L\u1ED7i"));
            }
          },
          error: () => this.message.error(this.t("common.error", "L\u1ED7i"))
        });
      }
    });
  }
  // ==================== Chọn nhân viên / thêm mới ====================
  selectEmployee(row) {
    this.selectedPersonId.set(row.personId);
    this.activeTabIndex.set(0);
    this.resetSubTabs();
    this.detailLoading.set(true);
    this.api.getEmployeeDetail(row.personId).subscribe({
      next: (d) => {
        this.form = __spreadValues(__spreadValues({}, emptyEmployee()), d);
        this.dobPicker = this.toDate(this.form.dob);
        this.dateStartedPicker = this.toDate(this.form.dateStarted);
        this.endProbationDatePicker = this.toDate(this.form.endProbationDate);
        this.contractStartDatePicker = this.toDate(this.form.contractStartDate);
        this.idcardStartDatePicker = this.toDate(this.form.idcardStartDate);
        if (this.form.postFamily)
          this.loadPostGradeOptions(this.form.postFamily);
        if (this.form.joinType)
          this.loadJoinDetailOptions(this.form.joinType);
        this.detailLoading.set(false);
      },
      error: () => {
        this.message.error(this.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.detailLoading.set(false);
      }
    });
  }
  clearSelection() {
    this.selectedPersonId.set(null);
    this.activeTabIndex.set(0);
    this.form = emptyEmployee();
    this.dobPicker = null;
    this.dateStartedPicker = null;
    this.endProbationDatePicker = null;
    this.contractStartDatePicker = null;
    this.idcardStartDatePicker = null;
    this.postGradeOptions.set([]);
    this.joinDetailTypeOptions.set([]);
    this.resetSubTabs();
  }
  resetSubTabs() {
    this.eduRows.set([]);
    this.workRows.set([]);
    this.familyRows.set([]);
    this.eduLoaded.set(false);
    this.workLoaded.set(false);
    this.familyLoaded.set(false);
  }
  onTabIndexChange(index) {
    this.activeTabIndex.set(index);
    if (!this.selectedPersonId())
      return;
    if (index === 2 && !this.eduLoaded())
      this.loadEducation();
    if (index === 3 && !this.workLoaded())
      this.loadWorkExp();
    if (index === 4 && !this.familyLoaded())
      this.loadFamily();
  }
  onDeptNoChange(value) {
    this.form.deptNo = value ?? "";
    this.form.costCenter = value ?? "";
  }
  onPostFamilyChange(value) {
    this.form.postFamily = value ?? "";
    this.form.postGradeNo = "";
    this.loadPostGradeOptions(value);
  }
  onJoinTypeChange(value) {
    this.form.joinType = value ?? "";
    this.form.joinDetailType = "";
    this.loadJoinDetailOptions(value);
  }
  loadPostGradeOptions(parent) {
    if (!parent) {
      this.postGradeOptions.set([]);
      return;
    }
    this.api.getCodeList(parent).subscribe((list) => this.postGradeOptions.set(list ?? []));
  }
  loadJoinDetailOptions(parent) {
    if (!parent) {
      this.joinDetailTypeOptions.set([]);
      return;
    }
    this.api.getCodeList(parent).subscribe((list) => this.joinDetailTypeOptions.set(list ?? []));
  }
  saveEmployee() {
    this.form.dob = this.toYmd(this.dobPicker);
    this.form.dateStarted = this.toYmd(this.dateStartedPicker);
    this.form.endProbationDate = this.toYmd(this.endProbationDatePicker);
    this.form.contractStartDate = this.toYmd(this.contractStartDatePicker);
    this.form.idcardStartDate = this.toYmd(this.idcardStartDatePicker);
    this.savingEmployee.set(true);
    this.api.saveEmployee(this.form).subscribe({
      next: (res) => {
        this.savingEmployee.set(false);
        if (res.success) {
          if (!this.form.personId && res.personId) {
            this.form.personId = res.personId;
            this.selectedPersonId.set(res.personId);
          }
          this.message.success(res.message || this.t("common.success", "Th\xE0nh c\xF4ng"));
          this.loadList();
        } else {
          this.message.error(res.message || this.t("common.error", "L\u1ED7i"));
        }
      },
      error: () => {
        this.savingEmployee.set(false);
        this.message.error(this.t("common.error", "L\u1ED7i"));
      }
    });
  }
  // ==================== Tab Giáo dục ====================
  emptyEduForm() {
    return {
      seq: null,
      personId: "",
      degreeCode: null,
      degreesCode: "",
      institutionName: "",
      subject: "",
      startDatePicker: null,
      endDatePicker: null,
      finalDegreeWhether: "N",
      experienceStudyAbroad: "N",
      remark: ""
    };
  }
  loadEducation() {
    const personId = this.selectedPersonId();
    if (!personId)
      return;
    this.eduLoading.set(true);
    this.api.getEducationList(personId).subscribe({
      next: (rows) => {
        this.eduRows.set(rows ?? []);
        this.eduLoaded.set(true);
        this.eduLoading.set(false);
      },
      error: () => {
        this.message.error(this.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.eduLoading.set(false);
      }
    });
  }
  openEduModal(row) {
    if (!row && !this.selectedPersonId()) {
      this.message.warning(this.t("recruit.list.js.selectFirst", "Vui l\xF2ng ch\u1ECDn nh\xE2n vi\xEAn tr\u01B0\u1EDBc"));
      return;
    }
    this.eduIsNew.set(!row);
    this.eduForm = row ? {
      seq: row.seq,
      personId: row.personId,
      degreeCode: row.degreeCode ?? null,
      degreesCode: row.degreesCode ?? "",
      institutionName: row.institutionName ?? "",
      subject: row.subject ?? "",
      startDatePicker: this.toDate(row.startDate),
      endDatePicker: this.toDate(row.endDate),
      finalDegreeWhether: row.finalDegreeWhether ?? "N",
      experienceStudyAbroad: row.experienceStudyAbroad ?? "N",
      remark: row.remark ?? ""
    } : __spreadProps(__spreadValues({}, this.emptyEduForm()), { personId: this.selectedPersonId() ?? "" });
    this.eduModalVisible.set(true);
  }
  closeEduModal() {
    this.eduModalVisible.set(false);
  }
  saveEdu() {
    const f = this.eduForm;
    const dto = {
      seq: f.seq,
      personId: f.personId,
      degreeCode: f.degreeCode,
      degreesCode: f.degreesCode,
      institutionName: f.institutionName,
      subject: f.subject,
      startDate: this.toYmd(f.startDatePicker),
      endDate: this.toYmd(f.endDatePicker),
      finalDegreeWhether: f.finalDegreeWhether,
      experienceStudyAbroad: f.experienceStudyAbroad,
      remark: f.remark
    };
    this.eduSaving.set(true);
    this.api.saveEducation(dto).subscribe({
      next: (res) => {
        this.eduSaving.set(false);
        if (res.success) {
          this.eduModalVisible.set(false);
          this.message.success(res.message || this.t("common.success", "Th\xE0nh c\xF4ng"));
          this.loadEducation();
        } else {
          this.message.error(res.message || this.t("common.error", "L\u1ED7i"));
        }
      },
      error: () => {
        this.eduSaving.set(false);
        this.message.error(this.t("common.error", "L\u1ED7i"));
      }
    });
  }
  deleteEdu(row) {
    this.modal.confirm({
      nzTitle: this.t("common.delete", "X\xF3a"),
      nzContent: this.t("recruit.list.js.confirmDelete", "X\xE1c nh\u1EADn x\xF3a d\u1EEF li\u1EC7u \u0111\xE3 ch\u1ECDn?"),
      nzOnOk: () => {
        this.api.deleteEducation(row.seq).subscribe({
          next: (res) => {
            if (res.success) {
              this.message.success(res.message || this.t("common.success", "Th\xE0nh c\xF4ng"));
              this.loadEducation();
            } else {
              this.message.error(res.message || this.t("common.error", "L\u1ED7i"));
            }
          },
          error: () => this.message.error(this.t("common.error", "L\u1ED7i"))
        });
      }
    });
  }
  // ==================== Tab Quá trình làm việc ====================
  emptyWorkForm() {
    return {
      seq: null,
      personId: "",
      cpnyName: "",
      deptName: "",
      position: "",
      startDatePicker: null,
      endDatePicker: null,
      payroll: "",
      leftReason: "",
      remark: ""
    };
  }
  loadWorkExp() {
    const personId = this.selectedPersonId();
    if (!personId)
      return;
    this.workLoading.set(true);
    this.api.getWorkExpList(personId).subscribe({
      next: (rows) => {
        this.workRows.set(rows ?? []);
        this.workLoaded.set(true);
        this.workLoading.set(false);
      },
      error: () => {
        this.message.error(this.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.workLoading.set(false);
      }
    });
  }
  openWorkModal(row) {
    if (!row && !this.selectedPersonId()) {
      this.message.warning(this.t("recruit.list.js.selectFirst", "Vui l\xF2ng ch\u1ECDn nh\xE2n vi\xEAn tr\u01B0\u1EDBc"));
      return;
    }
    this.workIsNew.set(!row);
    this.workForm = row ? {
      seq: row.seq,
      personId: row.personId,
      cpnyName: row.cpnyName ?? "",
      deptName: row.deptName ?? "",
      position: row.position ?? "",
      startDatePicker: this.toDate(row.startDate),
      endDatePicker: this.toDate(row.endDate),
      payroll: row.payroll ?? "",
      leftReason: row.leftReason ?? "",
      remark: row.remark ?? ""
    } : __spreadProps(__spreadValues({}, this.emptyWorkForm()), { personId: this.selectedPersonId() ?? "" });
    this.workModalVisible.set(true);
  }
  closeWorkModal() {
    this.workModalVisible.set(false);
  }
  saveWork() {
    const f = this.workForm;
    const dto = {
      seq: f.seq,
      personId: f.personId,
      cpnyName: f.cpnyName,
      deptName: f.deptName,
      position: f.position,
      startDate: this.toYmd(f.startDatePicker),
      endDate: this.toYmd(f.endDatePicker),
      payroll: f.payroll,
      leftReason: f.leftReason,
      remark: f.remark
    };
    this.workSaving.set(true);
    this.api.saveWorkExp(dto).subscribe({
      next: (res) => {
        this.workSaving.set(false);
        if (res.success) {
          this.workModalVisible.set(false);
          this.message.success(res.message || this.t("common.success", "Th\xE0nh c\xF4ng"));
          this.loadWorkExp();
        } else {
          this.message.error(res.message || this.t("common.error", "L\u1ED7i"));
        }
      },
      error: () => {
        this.workSaving.set(false);
        this.message.error(this.t("common.error", "L\u1ED7i"));
      }
    });
  }
  deleteWork(row) {
    this.modal.confirm({
      nzTitle: this.t("common.delete", "X\xF3a"),
      nzContent: this.t("recruit.list.js.confirmDelete", "X\xE1c nh\u1EADn x\xF3a d\u1EEF li\u1EC7u \u0111\xE3 ch\u1ECDn?"),
      nzOnOk: () => {
        this.api.deleteWorkExp(row.seq).subscribe({
          next: (res) => {
            if (res.success) {
              this.message.success(res.message || this.t("common.success", "Th\xE0nh c\xF4ng"));
              this.loadWorkExp();
            } else {
              this.message.error(res.message || this.t("common.error", "L\u1ED7i"));
            }
          },
          error: () => this.message.error(this.t("common.error", "L\u1ED7i"))
        });
      }
    });
  }
  // ==================== Tab Gia đình ====================
  emptyFamilyForm() {
    return {
      seq: null,
      personId: "",
      famName: "",
      famTypeCode: null,
      gender: null,
      famBorndatePicker: null,
      famPhone: "",
      emergencyContactYn: "N",
      occupation: "",
      remark: ""
    };
  }
  loadFamily() {
    const personId = this.selectedPersonId();
    if (!personId)
      return;
    this.familyLoading.set(true);
    this.api.getFamilyList(personId).subscribe({
      next: (rows) => {
        this.familyRows.set(rows ?? []);
        this.familyLoaded.set(true);
        this.familyLoading.set(false);
      },
      error: () => {
        this.message.error(this.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.familyLoading.set(false);
      }
    });
  }
  openFamilyModal(row) {
    if (!row && !this.selectedPersonId()) {
      this.message.warning(this.t("recruit.list.js.selectFirst", "Vui l\xF2ng ch\u1ECDn nh\xE2n vi\xEAn tr\u01B0\u1EDBc"));
      return;
    }
    this.familyIsNew.set(!row);
    this.familyForm = row ? {
      seq: row.seq,
      personId: row.personId,
      famName: row.famName ?? "",
      famTypeCode: row.famTypeCode ?? null,
      gender: row.gender ?? null,
      famBorndatePicker: this.toDate(row.famBorndate),
      famPhone: row.famPhone ?? "",
      emergencyContactYn: row.emergencyContactYn ?? "N",
      occupation: row.occupation ?? "",
      remark: row.remark ?? ""
    } : __spreadProps(__spreadValues({}, this.emptyFamilyForm()), { personId: this.selectedPersonId() ?? "" });
    this.familyModalVisible.set(true);
  }
  closeFamilyModal() {
    this.familyModalVisible.set(false);
  }
  saveFamily() {
    const f = this.familyForm;
    const dto = {
      seq: f.seq,
      personId: f.personId,
      famName: f.famName,
      famTypeCode: f.famTypeCode,
      gender: f.gender,
      famBorndate: this.toYmd(f.famBorndatePicker),
      famPhone: f.famPhone,
      emergencyContactYn: f.emergencyContactYn,
      occupation: f.occupation,
      remark: f.remark
    };
    this.familySaving.set(true);
    this.api.saveFamily(dto).subscribe({
      next: (res) => {
        this.familySaving.set(false);
        if (res.success) {
          this.familyModalVisible.set(false);
          this.message.success(res.message || this.t("common.success", "Th\xE0nh c\xF4ng"));
          this.loadFamily();
        } else {
          this.message.error(res.message || this.t("common.error", "L\u1ED7i"));
        }
      },
      error: () => {
        this.familySaving.set(false);
        this.message.error(this.t("common.error", "L\u1ED7i"));
      }
    });
  }
  deleteFamily(row) {
    this.modal.confirm({
      nzTitle: this.t("common.delete", "X\xF3a"),
      nzContent: this.t("recruit.list.js.confirmDelete", "X\xE1c nh\u1EADn x\xF3a d\u1EEF li\u1EC7u \u0111\xE3 ch\u1ECDn?"),
      nzOnOk: () => {
        this.api.deleteFamily(row.seq).subscribe({
          next: (res) => {
            if (res.success) {
              this.message.success(res.message || this.t("common.success", "Th\xE0nh c\xF4ng"));
              this.loadFamily();
            } else {
              this.message.error(res.message || this.t("common.error", "L\u1ED7i"));
            }
          },
          error: () => this.message.error(this.t("common.error", "L\u1ED7i"))
        });
      }
    });
  }
  // ==================== Cây phòng ban + danh mục dùng chung ====================
  loadDeptTree() {
    this.api.getAuthorizedDepartments().subscribe({
      next: (list) => {
        (list ?? []).forEach((d) => this.deptNameById.set(d.id, d.text));
        this.deptNodes.set(this.buildDeptTree(list ?? []));
      },
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
    this.api.getCodeList("14015812").subscribe((list) => this.postFamilyOptions.set(list ?? []));
    this.api.getCodeList("14014036").subscribe((list) => this.positionOptions.set(list ?? []));
    this.api.getCodeList("13864").subscribe((list) => this.empTypeOptions.set(list ?? []));
    this.api.getCodeList("1359").subscribe((list) => this.joinTypeOptions.set(list ?? []));
    this.api.getCodeList("13769").subscribe((list) => this.degreeOptions.set(list ?? []));
    this.api.getCodeList("950").subscribe((list) => this.famTypeOptions.set(list ?? []));
  }
  // ==================== Helpers ngày tháng + hiển thị ====================
  toDate(dateStr) {
    if (!dateStr)
      return null;
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? null : d;
  }
  toYmd(d) {
    return d ? formatDate(d, "yyyy-MM-dd", "vi") : "";
  }
  formatDisplayDate(dateStr) {
    if (!dateStr)
      return "";
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? dateStr : formatDate(d, "dd/MM/yyyy", "vi");
  }
  static \u0275fac = function ViewRecruitListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewRecruitListComponent)(\u0275\u0275directiveInject(ViewRecruitListService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService), \u0275\u0275directiveInject(NzModalService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewRecruitListComponent, selectors: [["app-view-recruit-list"]], decls: 413, vars: 488, consts: [[1, "row", "g-3"], [1, "col-lg-4"], [1, "mb-3"], [1, "row", "g-2"], [1, "col-6"], ["nz-input", "", "name", "vrlSearchName", 3, "ngModelChange", "keyup.enter", "ngModel", "placeholder"], ["nz-input", "", "name", "vrlSearchEmpId", 3, "ngModelChange", "keyup.enter", "ngModel", "placeholder"], [1, "col-12", "d-flex", "align-items-center", "justify-content-between"], ["nz-checkbox", "", "name", "vrlShowCompleted", 3, "ngModelChange", "ngModel"], ["nz-button", "", "nzType", "primary", "nzSize", "small", 3, "click"], [1, "bx", "bx-search"], [3, "nzBodyStyle"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2", "px-1"], ["nz-button", "", "nzType", "dashed", "nzSize", "small", 3, "click"], [1, "bx", "bx-plus"], [1, "d-flex", "gap-1"], ["nz-button", "", "nzType", "primary", "nzSize", "small", 3, "disabled", "click", 4, "ngIf"], ["nz-button", "", "nzSize", "small", 3, "disabled", "click", 4, "ngIf"], ["nzSize", "small", 1, "vrl-emp-table", 3, "nzPageIndexChange", "nzData", "nzFrontPagination", "nzLoading", "nzTotal", "nzPageIndex", "nzPageSize", "nzShowPagination", "nzSimple", "nzScroll"], ["nzWidth", "40px", 1, "text-center"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel"], ["nzWidth", "90px", 1, "text-center"], ["class", "vrl-emp-row", 3, "vrl-emp-row-active", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "col-lg-8"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "fw-semibold", "me-2"], ["class", "text-muted small", 4, "ngIf"], ["class", "badge bg-secondary", 4, "ngIf"], [3, "nzSelectedIndexChange", "nzSelectedIndex"], [3, "nzTitle"], [1, "row", "g-2", "pt-2"], [1, "col-md-4"], [1, "form-label", "small", "mb-0"], ["nz-input", "", "name", "localName", "maxlength", "50", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "empId", "maxlength", "20", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "englishName", "maxlength", "50", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "koreanName", "maxlength", "50", 3, "ngModelChange", "ngModel"], ["name", "sexcode", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["name", "dobPicker", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "nationalityCode", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "nationCode", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "maritalStatusCode", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "deptNo", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["class", "text-danger small mt-1", 4, "ngIf"], ["name", "postFamily", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "postGradeNo", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "positionNo", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "empTypeCode", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "joinType", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "joinDetailType", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "dateStartedPicker", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "isProbation", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nzValue", "1", 3, "nzLabel"], ["nzValue", "0", 3, "nzLabel"], ["name", "endProbationDatePicker", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "contractStartDatePicker", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "costCenter", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], [1, "d-flex", "justify-content-end", "mt-3"], ["nz-button", "", "nzType", "primary", 3, "click", "nzLoading"], [1, "bx", "bx-save"], ["nz-input", "", "name", "homePhone", "maxlength", "100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "companyPhone", "maxlength", "100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "officePhone", "maxlength", "50", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "email", "maxlength", "100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "idcardNo", "maxlength", "100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "documentType", "maxlength", "20", 3, "ngModelChange", "ngModel"], ["name", "idcardStartDatePicker", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "issuingAuthority", "maxlength", "50", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "addressContent", "maxlength", "100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "hujiaddressContent", "maxlength", "100", 3, "ngModelChange", "ngModel"], ["name", "nationality", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "accountNo", "maxlength", "100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "oldPay", "maxlength", "40", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "experience", "maxlength", "30", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "recruitType", "maxlength", "30", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "recommend", "maxlength", "50", 3, "ngModelChange", "ngModel"], [1, "col-12"], ["nz-input", "", "name", "remark", "rows", "2", "maxlength", "500", 3, "ngModelChange", "ngModel"], [1, "d-flex", "justify-content-end", "pt-2", "pb-2"], ["nzSize", "small", 3, "nzData", "nzLoading", "nzShowPagination"], ["nzWidth", "50px", 1, "text-center"], ["nzWidth", "110px"], ["nzWidth", "120px"], ["nzWidth", "80px", 1, "text-center"], [4, "ngFor", "ngForOf"], ["nzWidth", "70px", 1, "text-center"], ["nzWidth", "100px"], ["nzWidth", "640px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], ["nz-button", "", "nzType", "primary", "nzSize", "small", 3, "click", "disabled"], [1, "bx", "bx-check-double"], ["nz-button", "", "nzSize", "small", 3, "click", "disabled"], [1, "bx", "bx-x-circle"], [1, "vrl-emp-row", 3, "click"], [1, "text-center", 3, "click"], [1, "fw-semibold", "text-truncate"], [1, "text-muted", "small", "text-truncate"], [1, "text-center"], ["colspan", "3", 1, "text-center", "text-muted"], [1, "text-muted", "small"], [1, "badge", "bg-secondary"], [3, "nzValue", "nzLabel"], [1, "text-danger", "small", "mt-1"], ["colspan", "10", 1, "text-center", "text-muted"], [1, "bx", 3, "ngClass"], ["nz-button", "", "nzType", "text", "nzSize", "small", 3, "click"], [1, "bx", "bx-edit", "text-warning"], ["nz-button", "", "nzType", "text", "nzSize", "small", "nzDanger", "", 3, "click"], [1, "bx", "bx-trash"], ["colspan", "9", 1, "text-center", "text-muted"], [1, "col-md-6"], ["name", "eduDegreeCode", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "eduDegreesCode", 3, "ngModelChange", "ngModel"], [1, "col-md-12"], ["nz-input", "", "name", "eduInstitutionName", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "eduSubject", 3, "ngModelChange", "ngModel"], [1, "col-md-3"], ["name", "eduStartDate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "eduEndDate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nz-checkbox", "", 3, "nzCheckedChange", "nzChecked"], ["nz-input", "", "name", "eduRemark", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "workCpnyName", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "workDeptName", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "workPosition", 3, "ngModelChange", "ngModel"], ["name", "workStartDate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "workEndDate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "workPayroll", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "workLeftReason", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "workRemark", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "famName", 3, "ngModelChange", "ngModel"], ["name", "famTypeCode", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "famGender", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "famBorndate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "famPhone", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "famOccupation", 3, "ngModelChange", "ngModel"], [1, "col-md-6", "d-flex", "align-items-end"], ["nz-input", "", "name", "famRemark", 3, "ngModelChange", "ngModel"]], template: function ViewRecruitListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "nz-card", 2)(3, "div", 3)(4, "div", 4)(5, "input", 5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_input_ngModelChange_5_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchName, $event) || (ctx.searchName = $event);
        return $event;
      });
      \u0275\u0275listener("keyup.enter", function ViewRecruitListComponent_Template_input_keyup_enter_5_listener() {
        return ctx.search();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 4)(8, "input", 6);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchEmpId, $event) || (ctx.searchEmpId = $event);
        return $event;
      });
      \u0275\u0275listener("keyup.enter", function ViewRecruitListComponent_Template_input_keyup_enter_8_listener() {
        return ctx.search();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7)(11, "label", 8);
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_label_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.showCompleted, $event) || (ctx.showCompleted = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ViewRecruitListComponent_Template_label_ngModelChange_11_listener() {
        return ctx.search();
      });
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(14, "button", 9);
      \u0275\u0275listener("click", function ViewRecruitListComponent_Template_button_click_14_listener() {
        return ctx.search();
      });
      \u0275\u0275element(15, "i", 10);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(18, "nz-card", 11)(19, "div", 12)(20, "button", 13);
      \u0275\u0275listener("click", function ViewRecruitListComponent_Template_button_click_20_listener() {
        return ctx.clearSelection();
      });
      \u0275\u0275element(21, "i", 14);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 15);
      \u0275\u0275template(25, ViewRecruitListComponent_button_25_Template, 4, 5, "button", 16)(26, ViewRecruitListComponent_button_26_Template, 4, 5, "button", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "nz-table", 18);
      \u0275\u0275listener("nzPageIndexChange", function ViewRecruitListComponent_Template_nz_table_nzPageIndexChange_27_listener($event) {
        return ctx.onPageIndexChange($event);
      });
      \u0275\u0275elementStart(28, "thead")(29, "tr")(30, "th", 19)(31, "label", 20);
      \u0275\u0275listener("ngModelChange", function ViewRecruitListComponent_Template_label_ngModelChange_31_listener($event) {
        return ctx.toggleAllChecked($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th");
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "th", 21);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "tbody");
      \u0275\u0275template(39, ViewRecruitListComponent_tr_39_Template, 10, 7, "tr", 22)(40, ViewRecruitListComponent_tr_40_Template, 4, 4, "tr", 23);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(41, "div", 24)(42, "nz-card")(43, "div", 25)(44, "div")(45, "span", 26);
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(48, ViewRecruitListComponent_span_48_Template, 3, 4, "span", 27)(49, ViewRecruitListComponent_span_49_Template, 2, 1, "span", 28);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "nz-tabs", 29);
      \u0275\u0275listener("nzSelectedIndexChange", function ViewRecruitListComponent_Template_nz_tabs_nzSelectedIndexChange_50_listener($event) {
        return ctx.onTabIndexChange($event);
      });
      \u0275\u0275elementStart(51, "nz-tab", 30);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementStart(53, "div", 31)(54, "div", 32)(55, "label", 33);
      \u0275\u0275text(56);
      \u0275\u0275pipe(57, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "input", 34);
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_input_ngModelChange_58_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.localName, $event) || (ctx.form.localName = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 32)(60, "label", 33);
      \u0275\u0275text(61);
      \u0275\u0275pipe(62, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "input", 35);
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_input_ngModelChange_63_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.empId, $event) || (ctx.form.empId = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 32)(65, "label", 33);
      \u0275\u0275text(66);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "input", 36);
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_input_ngModelChange_68_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.englishName, $event) || (ctx.form.englishName = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 32)(70, "label", 33);
      \u0275\u0275text(71);
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "input", 37);
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_input_ngModelChange_73_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.koreanName, $event) || (ctx.form.koreanName = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "div", 32)(75, "label", 33);
      \u0275\u0275text(76);
      \u0275\u0275pipe(77, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "nz-select", 38);
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_nz_select_ngModelChange_78_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.sexcode, $event) || (ctx.form.sexcode = $event);
        return $event;
      });
      \u0275\u0275template(79, ViewRecruitListComponent_nz_option_79_Template, 1, 2, "nz-option", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "div", 32)(81, "label", 33);
      \u0275\u0275text(82);
      \u0275\u0275pipe(83, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "nz-date-picker", 40);
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_nz_date_picker_ngModelChange_84_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.dobPicker, $event) || (ctx.dobPicker = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "div", 32)(86, "label", 33);
      \u0275\u0275text(87);
      \u0275\u0275pipe(88, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "nz-select", 41);
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_nz_select_ngModelChange_89_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.nationalityCode, $event) || (ctx.form.nationalityCode = $event);
        return $event;
      });
      \u0275\u0275template(90, ViewRecruitListComponent_nz_option_90_Template, 1, 2, "nz-option", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "div", 32)(92, "label", 33);
      \u0275\u0275text(93);
      \u0275\u0275pipe(94, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "nz-select", 42);
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_nz_select_ngModelChange_95_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.nationCode, $event) || (ctx.form.nationCode = $event);
        return $event;
      });
      \u0275\u0275template(96, ViewRecruitListComponent_nz_option_96_Template, 1, 2, "nz-option", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "div", 32)(98, "label", 33);
      \u0275\u0275text(99);
      \u0275\u0275pipe(100, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "nz-select", 43);
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_nz_select_ngModelChange_101_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.maritalStatusCode, $event) || (ctx.form.maritalStatusCode = $event);
        return $event;
      });
      \u0275\u0275template(102, ViewRecruitListComponent_nz_option_102_Template, 1, 2, "nz-option", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "div", 32)(104, "label", 33);
      \u0275\u0275text(105);
      \u0275\u0275pipe(106, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "nz-tree-select", 44);
      \u0275\u0275pipe(108, "translate");
      \u0275\u0275listener("ngModelChange", function ViewRecruitListComponent_Template_nz_tree_select_ngModelChange_107_listener($event) {
        return ctx.onDeptNoChange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275template(109, ViewRecruitListComponent_div_109_Template, 2, 1, "div", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "div", 32)(111, "label", 33);
      \u0275\u0275text(112);
      \u0275\u0275pipe(113, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "nz-select", 46);
      \u0275\u0275listener("ngModelChange", function ViewRecruitListComponent_Template_nz_select_ngModelChange_114_listener($event) {
        return ctx.onPostFamilyChange($event);
      });
      \u0275\u0275template(115, ViewRecruitListComponent_nz_option_115_Template, 1, 2, "nz-option", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "div", 32)(117, "label", 33);
      \u0275\u0275text(118);
      \u0275\u0275pipe(119, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "nz-select", 47);
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_nz_select_ngModelChange_120_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.postGradeNo, $event) || (ctx.form.postGradeNo = $event);
        return $event;
      });
      \u0275\u0275template(121, ViewRecruitListComponent_nz_option_121_Template, 1, 2, "nz-option", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "div", 32)(123, "label", 33);
      \u0275\u0275text(124);
      \u0275\u0275pipe(125, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "nz-select", 48);
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_nz_select_ngModelChange_126_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.positionNo, $event) || (ctx.form.positionNo = $event);
        return $event;
      });
      \u0275\u0275template(127, ViewRecruitListComponent_nz_option_127_Template, 1, 2, "nz-option", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "div", 32)(129, "label", 33);
      \u0275\u0275text(130);
      \u0275\u0275pipe(131, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "nz-select", 49);
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_nz_select_ngModelChange_132_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.empTypeCode, $event) || (ctx.form.empTypeCode = $event);
        return $event;
      });
      \u0275\u0275template(133, ViewRecruitListComponent_nz_option_133_Template, 1, 2, "nz-option", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "div", 32)(135, "label", 33);
      \u0275\u0275text(136);
      \u0275\u0275pipe(137, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "nz-select", 50);
      \u0275\u0275listener("ngModelChange", function ViewRecruitListComponent_Template_nz_select_ngModelChange_138_listener($event) {
        return ctx.onJoinTypeChange($event);
      });
      \u0275\u0275template(139, ViewRecruitListComponent_nz_option_139_Template, 1, 2, "nz-option", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "div", 32)(141, "label", 33);
      \u0275\u0275text(142);
      \u0275\u0275pipe(143, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "nz-select", 51);
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_nz_select_ngModelChange_144_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.joinDetailType, $event) || (ctx.form.joinDetailType = $event);
        return $event;
      });
      \u0275\u0275template(145, ViewRecruitListComponent_nz_option_145_Template, 1, 2, "nz-option", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "div", 32)(147, "label", 33);
      \u0275\u0275text(148);
      \u0275\u0275pipe(149, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "nz-date-picker", 52);
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_nz_date_picker_ngModelChange_150_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.dateStartedPicker, $event) || (ctx.dateStartedPicker = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "div", 32)(152, "label", 33);
      \u0275\u0275text(153);
      \u0275\u0275pipe(154, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "nz-select", 53);
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_nz_select_ngModelChange_155_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.isProbation, $event) || (ctx.form.isProbation = $event);
        return $event;
      });
      \u0275\u0275element(156, "nz-option", 54);
      \u0275\u0275pipe(157, "translate");
      \u0275\u0275element(158, "nz-option", 55);
      \u0275\u0275pipe(159, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "div", 32)(161, "label", 33);
      \u0275\u0275text(162);
      \u0275\u0275pipe(163, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "nz-date-picker", 56);
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_nz_date_picker_ngModelChange_164_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.endProbationDatePicker, $event) || (ctx.endProbationDatePicker = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "div", 32)(166, "label", 33);
      \u0275\u0275text(167);
      \u0275\u0275pipe(168, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "nz-date-picker", 57);
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_nz_date_picker_ngModelChange_169_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.contractStartDatePicker, $event) || (ctx.contractStartDatePicker = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "div", 32)(171, "label", 33);
      \u0275\u0275text(172);
      \u0275\u0275pipe(173, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "nz-tree-select", 58);
      \u0275\u0275pipe(175, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_nz_tree_select_ngModelChange_174_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.costCenter, $event) || (ctx.form.costCenter = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(176, "div", 59)(177, "button", 60);
      \u0275\u0275listener("click", function ViewRecruitListComponent_Template_button_click_177_listener() {
        return ctx.saveEmployee();
      });
      \u0275\u0275element(178, "i", 61);
      \u0275\u0275text(179);
      \u0275\u0275pipe(180, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(181, "nz-tab", 30);
      \u0275\u0275pipe(182, "translate");
      \u0275\u0275elementStart(183, "div", 31)(184, "div", 32)(185, "label", 33);
      \u0275\u0275text(186);
      \u0275\u0275pipe(187, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "input", 62);
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_input_ngModelChange_188_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.homePhone, $event) || (ctx.form.homePhone = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(189, "div", 32)(190, "label", 33);
      \u0275\u0275text(191);
      \u0275\u0275pipe(192, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "input", 63);
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_input_ngModelChange_193_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.companyPhone, $event) || (ctx.form.companyPhone = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "div", 32)(195, "label", 33);
      \u0275\u0275text(196);
      \u0275\u0275pipe(197, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "input", 64);
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_input_ngModelChange_198_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.officePhone, $event) || (ctx.form.officePhone = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(199, "div", 32)(200, "label", 33);
      \u0275\u0275text(201);
      \u0275\u0275pipe(202, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(203, "input", 65);
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_input_ngModelChange_203_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.email, $event) || (ctx.form.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(204, "div", 32)(205, "label", 33);
      \u0275\u0275text(206);
      \u0275\u0275pipe(207, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(208, "input", 66);
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_input_ngModelChange_208_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.idcardNo, $event) || (ctx.form.idcardNo = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "div", 32)(210, "label", 33);
      \u0275\u0275text(211);
      \u0275\u0275pipe(212, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "input", 67);
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_input_ngModelChange_213_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.documentType, $event) || (ctx.form.documentType = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(214, "div", 32)(215, "label", 33);
      \u0275\u0275text(216);
      \u0275\u0275pipe(217, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(218, "nz-date-picker", 68);
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_nz_date_picker_ngModelChange_218_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.idcardStartDatePicker, $event) || (ctx.idcardStartDatePicker = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(219, "div", 32)(220, "label", 33);
      \u0275\u0275text(221);
      \u0275\u0275pipe(222, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "input", 69);
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_input_ngModelChange_223_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.issuingAuthority, $event) || (ctx.form.issuingAuthority = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(224, "div", 32)(225, "label", 33);
      \u0275\u0275text(226);
      \u0275\u0275pipe(227, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "input", 70);
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_input_ngModelChange_228_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.addressContent, $event) || (ctx.form.addressContent = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(229, "div", 32)(230, "label", 33);
      \u0275\u0275text(231);
      \u0275\u0275pipe(232, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(233, "input", 71);
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_input_ngModelChange_233_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.hujiaddressContent, $event) || (ctx.form.hujiaddressContent = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(234, "div", 32)(235, "label", 33);
      \u0275\u0275text(236);
      \u0275\u0275pipe(237, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(238, "nz-select", 72);
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_nz_select_ngModelChange_238_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.nationality, $event) || (ctx.form.nationality = $event);
        return $event;
      });
      \u0275\u0275template(239, ViewRecruitListComponent_nz_option_239_Template, 1, 2, "nz-option", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(240, "div", 32)(241, "label", 33);
      \u0275\u0275text(242);
      \u0275\u0275pipe(243, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(244, "input", 73);
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_input_ngModelChange_244_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.accountNo, $event) || (ctx.form.accountNo = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(245, "div", 32)(246, "label", 33);
      \u0275\u0275text(247);
      \u0275\u0275pipe(248, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(249, "input", 74);
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_input_ngModelChange_249_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.oldPay, $event) || (ctx.form.oldPay = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(250, "div", 32)(251, "label", 33);
      \u0275\u0275text(252);
      \u0275\u0275pipe(253, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(254, "input", 75);
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_input_ngModelChange_254_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.experience, $event) || (ctx.form.experience = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(255, "div", 32)(256, "label", 33);
      \u0275\u0275text(257);
      \u0275\u0275pipe(258, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(259, "input", 76);
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_input_ngModelChange_259_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.recruitType, $event) || (ctx.form.recruitType = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(260, "div", 32)(261, "label", 33);
      \u0275\u0275text(262);
      \u0275\u0275pipe(263, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(264, "input", 77);
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_input_ngModelChange_264_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.recommend, $event) || (ctx.form.recommend = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(265, "div", 78)(266, "label", 33);
      \u0275\u0275text(267);
      \u0275\u0275pipe(268, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(269, "textarea", 79);
      \u0275\u0275twoWayListener("ngModelChange", function ViewRecruitListComponent_Template_textarea_ngModelChange_269_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.form.remark, $event) || (ctx.form.remark = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(270, "div", 59)(271, "button", 60);
      \u0275\u0275listener("click", function ViewRecruitListComponent_Template_button_click_271_listener() {
        return ctx.saveEmployee();
      });
      \u0275\u0275element(272, "i", 61);
      \u0275\u0275text(273);
      \u0275\u0275pipe(274, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(275, "nz-tab", 30);
      \u0275\u0275pipe(276, "translate");
      \u0275\u0275elementStart(277, "div", 80)(278, "button", 9);
      \u0275\u0275listener("click", function ViewRecruitListComponent_Template_button_click_278_listener() {
        return ctx.openEduModal(null);
      });
      \u0275\u0275element(279, "i", 14);
      \u0275\u0275text(280);
      \u0275\u0275pipe(281, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(282, "nz-table", 81)(283, "thead")(284, "tr")(285, "th", 82);
      \u0275\u0275text(286);
      \u0275\u0275pipe(287, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(288, "th", 83);
      \u0275\u0275text(289);
      \u0275\u0275pipe(290, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(291, "th", 84);
      \u0275\u0275text(292);
      \u0275\u0275pipe(293, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(294, "th");
      \u0275\u0275text(295);
      \u0275\u0275pipe(296, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(297, "th", 84);
      \u0275\u0275text(298);
      \u0275\u0275pipe(299, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(300, "th", 21);
      \u0275\u0275text(301);
      \u0275\u0275pipe(302, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(303, "th", 21);
      \u0275\u0275text(304);
      \u0275\u0275pipe(305, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(306, "th", 85);
      \u0275\u0275text(307);
      \u0275\u0275pipe(308, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(309, "th", 85);
      \u0275\u0275text(310);
      \u0275\u0275pipe(311, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(312, "th", 21);
      \u0275\u0275text(313);
      \u0275\u0275pipe(314, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(315, "tbody");
      \u0275\u0275template(316, ViewRecruitListComponent_tr_316_Template, 4, 4, "tr", 23)(317, ViewRecruitListComponent_tr_317_Template, 24, 9, "tr", 86);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(318, "nz-tab", 30);
      \u0275\u0275pipe(319, "translate");
      \u0275\u0275elementStart(320, "div", 80)(321, "button", 9);
      \u0275\u0275listener("click", function ViewRecruitListComponent_Template_button_click_321_listener() {
        return ctx.openWorkModal(null);
      });
      \u0275\u0275element(322, "i", 14);
      \u0275\u0275text(323);
      \u0275\u0275pipe(324, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(325, "nz-table", 81)(326, "thead")(327, "tr")(328, "th", 82);
      \u0275\u0275text(329);
      \u0275\u0275pipe(330, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(331, "th");
      \u0275\u0275text(332);
      \u0275\u0275pipe(333, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(334, "th", 83);
      \u0275\u0275text(335);
      \u0275\u0275pipe(336, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(337, "th", 83);
      \u0275\u0275text(338);
      \u0275\u0275pipe(339, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(340, "th", 21);
      \u0275\u0275text(341);
      \u0275\u0275pipe(342, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(343, "th", 21);
      \u0275\u0275text(344);
      \u0275\u0275pipe(345, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(346, "th", 21);
      \u0275\u0275text(347);
      \u0275\u0275pipe(348, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(349, "th", 83);
      \u0275\u0275text(350);
      \u0275\u0275pipe(351, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(352, "th", 21);
      \u0275\u0275text(353);
      \u0275\u0275pipe(354, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(355, "tbody");
      \u0275\u0275template(356, ViewRecruitListComponent_tr_356_Template, 4, 4, "tr", 23)(357, ViewRecruitListComponent_tr_357_Template, 22, 8, "tr", 86);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(358, "nz-tab", 30);
      \u0275\u0275pipe(359, "translate");
      \u0275\u0275elementStart(360, "div", 80)(361, "button", 9);
      \u0275\u0275listener("click", function ViewRecruitListComponent_Template_button_click_361_listener() {
        return ctx.openFamilyModal(null);
      });
      \u0275\u0275element(362, "i", 14);
      \u0275\u0275text(363);
      \u0275\u0275pipe(364, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(365, "nz-table", 81)(366, "thead")(367, "tr")(368, "th", 82);
      \u0275\u0275text(369);
      \u0275\u0275pipe(370, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(371, "th");
      \u0275\u0275text(372);
      \u0275\u0275pipe(373, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(374, "th", 83);
      \u0275\u0275text(375);
      \u0275\u0275pipe(376, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(377, "th", 87);
      \u0275\u0275text(378);
      \u0275\u0275pipe(379, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(380, "th", 21);
      \u0275\u0275text(381);
      \u0275\u0275pipe(382, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(383, "th", 83);
      \u0275\u0275text(384);
      \u0275\u0275pipe(385, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(386, "th", 85);
      \u0275\u0275text(387);
      \u0275\u0275pipe(388, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(389, "th", 88);
      \u0275\u0275text(390);
      \u0275\u0275pipe(391, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(392, "th", 21);
      \u0275\u0275text(393);
      \u0275\u0275pipe(394, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(395, "tbody");
      \u0275\u0275template(396, ViewRecruitListComponent_tr_396_Template, 4, 4, "tr", 23)(397, ViewRecruitListComponent_tr_397_Template, 22, 8, "tr", 86);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(398, "nz-modal", 89);
      \u0275\u0275pipe(399, "translate");
      \u0275\u0275pipe(400, "translate");
      \u0275\u0275pipe(401, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewRecruitListComponent_Template_nz_modal_nzOnCancel_398_listener() {
        return ctx.closeEduModal();
      })("nzOnOk", function ViewRecruitListComponent_Template_nz_modal_nzOnOk_398_listener() {
        return ctx.saveEdu();
      });
      \u0275\u0275template(402, ViewRecruitListComponent_ng_container_402_Template, 46, 46, "ng-container", 90);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(403, "nz-modal", 89);
      \u0275\u0275pipe(404, "translate");
      \u0275\u0275pipe(405, "translate");
      \u0275\u0275pipe(406, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewRecruitListComponent_Template_nz_modal_nzOnCancel_403_listener() {
        return ctx.closeWorkModal();
      })("nzOnOk", function ViewRecruitListComponent_Template_nz_modal_nzOnOk_403_listener() {
        return ctx.saveWork();
      });
      \u0275\u0275template(407, ViewRecruitListComponent_ng_container_407_Template, 42, 40, "ng-container", 90);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(408, "nz-modal", 89);
      \u0275\u0275pipe(409, "translate");
      \u0275\u0275pipe(410, "translate");
      \u0275\u0275pipe(411, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewRecruitListComponent_Template_nz_modal_nzOnCancel_408_listener() {
        return ctx.closeFamilyModal();
      })("nzOnOk", function ViewRecruitListComponent_Template_nz_modal_nzOnOk_408_listener() {
        return ctx.saveFamily();
      });
      \u0275\u0275template(412, ViewRecruitListComponent_ng_container_412_Template, 43, 42, "ng-container", 90);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchName);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(6, 195, "recruit.list.placeholder.searchName", "H\u1ECD t\xEAn..."));
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchEmpId);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 198, "recruit.list.placeholder.searchEmpId", "M\xE3 NV..."));
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.showCompleted);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(13, 201, "recruit.list.tab.completed", "Ho\xE0n th\xE0nh"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(17, 204, "common.search", "T\xECm ki\u1EBFm"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzBodyStyle", \u0275\u0275pureFunction0(486, _c0));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(23, 207, "common.add", "Th\xEAm"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.showCompleted);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showCompleted);
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.employees())("nzFrontPagination", false)("nzLoading", ctx.loadingList())("nzTotal", ctx.totalRecords())("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzShowPagination", true)("nzSimple", true)("nzScroll", \u0275\u0275pureFunction0(487, _c1));
      \u0275\u0275advance(4);
      \u0275\u0275property("ngModel", ctx.allChecked);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 210, "common.empName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 213, "common.empId", "M\xE3 NV"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.employees());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingList() && ctx.employees().length === 0);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.selectedPersonId() ? ctx.form.localName || "" : \u0275\u0275pipeBind2(47, 216, "recruit.list.label.newEmployee", "Nh\xE2n vi\xEAn m\u1EDBi"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.selectedPersonId() && ctx.employees().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.form.empId);
      \u0275\u0275advance();
      \u0275\u0275property("nzSelectedIndex", ctx.activeTabIndex());
      \u0275\u0275advance();
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(52, 219, "recruit.list.tab.general", "Th\xF4ng tin chung"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("vrl-loading", ctx.detailLoading());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 222, "recruit.list.field.localName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.localName);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(62, 225, "recruit.list.field.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.empId);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(67, 228, "recruit.list.field.englishName", "T\xEAn ti\u1EBFng Anh"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.englishName);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(72, 231, "recruit.list.field.koreanName", "T\xEAn H\xE0n"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.koreanName);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(77, 234, "recruit.list.field.sexcode", "Gi\u1EDBi t\xEDnh"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.sexcode);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.sexOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(83, 237, "recruit.list.field.dob", "Ng\xE0y sinh"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.dobPicker);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(88, 240, "recruit.list.field.nationalityCode", "Qu\u1ED1c t\u1ECBch"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.nationalityCode);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.nationalityOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(94, 243, "recruit.list.field.nationCode", "D\xE2n t\u1ED9c"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.nationCode);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.nationOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(100, 246, "recruit.list.field.maritalStatusCode", "T\xECnh tr\u1EA1ng h\xF4n nh\xE2n"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.maritalStatusCode);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.maritalStatusOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(106, 249, "recruit.list.field.deptNo", "Ph\xF2ng ban"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzNodes", ctx.deptNodes())("ngModel", ctx.form.deptNo)("nzPlaceHolder", \u0275\u0275pipeBind2(108, 252, "recruit.list.placeholder.selectDept", "-- Ch\u1ECDn ph\xF2ng ban --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.deptTreeErrorMessage());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(113, 255, "recruit.list.field.postFamily", "Nh\xF3m nh\xE2n vi\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.form.postFamily);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.postFamilyOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(119, 258, "recruit.list.field.postGradeNo", "C\u1EA5p b\u1EADc"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.postGradeNo);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.postGradeOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(125, 261, "recruit.list.field.positionNo", "V\u1ECB tr\xED"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.positionNo);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.positionOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(131, 264, "recruit.list.field.empTypeCode", "Lo\u1EA1i nh\xE2n vi\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.empTypeCode);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.empTypeOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(137, 267, "recruit.list.field.joinType", "Lo\u1EA1i tuy\u1EC3n d\u1EE5ng"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.form.joinType);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.joinTypeOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(143, 270, "recruit.list.field.joinDetailType", "Chi ti\u1EBFt lo\u1EA1i v\xE0o"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.joinDetailType);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.joinDetailTypeOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(149, 273, "recruit.list.field.dateStarted", "Ng\xE0y v\xE0o c\xF4ng ty"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.dateStartedPicker);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(154, 276, "recruit.list.field.fullTimeEmployee", "H\u01B0\u1EDFng l\u01B0\u01A1ng ch\xEDnh th\u1EE9c"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.isProbation);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(157, 279, "common.yes", "C\xF3"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(159, 282, "common.no", "Kh\xF4ng"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(163, 285, "recruit.list.field.endProbationDate", "Ng\xE0y k\u1EBFt th\xFAc th\u1EED vi\u1EC7c"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.endProbationDatePicker);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(168, 288, "recruit.list.field.contractStartDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u H\u0110"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.contractStartDatePicker);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(173, 291, "recruit.list.field.costCenter", "Trung t\xE2m chi ph\xED"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzNodes", ctx.deptNodes());
      \u0275\u0275twoWayProperty("ngModel", ctx.form.costCenter);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(175, 294, "recruit.list.placeholder.selectDept", "-- Ch\u1ECDn ph\xF2ng ban --"));
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275property("nzLoading", ctx.savingEmployee());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(180, 297, "common.save", "L\u01B0u"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(182, 300, "recruit.list.tab.extra", "Th\xF4ng tin b\u1ED5 sung"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(187, 303, "recruit.list.field.homePhone", "\u0110T nh\xE0"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.homePhone);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(192, 306, "recruit.list.field.companyPhone", "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.companyPhone);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(197, 309, "recruit.list.field.officePhone", "\u0110T v\u0103n ph\xF2ng"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.officePhone);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(202, 312, "recruit.list.field.email", "Email"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.email);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(207, 315, "recruit.list.field.idcardNo", "S\u1ED1 CMND/CCCD"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.idcardNo);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(212, 318, "recruit.list.field.documentType", "Lo\u1EA1i gi\u1EA5y t\u1EDD"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.documentType);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(217, 321, "recruit.list.field.idcardStartDate", "Ng\xE0y c\u1EA5p"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.idcardStartDatePicker);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(222, 324, "recruit.list.field.issuingAuthority", "N\u01A1i c\u1EA5p"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.issuingAuthority);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(227, 327, "recruit.list.field.addressContent", "\u0110\u1ECBa ch\u1EC9 hi\u1EC7n t\u1EA1i"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.addressContent);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(232, 330, "recruit.list.field.hujiaddressContent", "H\u1ED9 kh\u1EA9u th\u01B0\u1EDDng tr\xFA"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.hujiaddressContent);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(237, 333, "recruit.list.field.nationality", "Qu\u1ED1c gia"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.nationality);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.nationalityOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(243, 336, "recruit.list.field.accountNo", "S\u1ED1 TK ng\xE2n h\xE0ng"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.accountNo);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(248, 339, "recruit.list.field.oldPay", "L\u01B0\u01A1ng c\u0169"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.oldPay);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(253, 342, "recruit.list.field.experience", "Th\xE2m ni\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.experience);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(258, 345, "recruit.list.field.recruitType", "K\xEAnh tuy\u1EC3n d\u1EE5ng"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.recruitType);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(263, 348, "recruit.list.field.recommend", "Ng\u01B0\u1EDDi gi\u1EDBi thi\u1EC7u"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.recommend);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(268, 351, "recruit.list.field.remark", "Ghi ch\xFA"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.remark);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.savingEmployee());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(274, 354, "common.save", "L\u01B0u"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(276, 357, "recruit.list.tab.education", "Th\xF4ng tin Gi\xE1o d\u1EE5c"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(281, 360, "common.add", "Th\xEAm"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzData", ctx.eduRows())("nzLoading", ctx.eduLoading())("nzShowPagination", false);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(287, 363, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(290, 366, "recruit.list.edu.degreeCode", "H\u1ECDc v\u1ECB"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(293, 369, "recruit.list.edu.degreesCode", "V\u0103n b\u1EB1ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(296, 372, "recruit.list.edu.institutionName", "T\xEAn tr\u01B0\u1EDDng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(299, 375, "recruit.list.edu.subject", "Chuy\xEAn ng\xE0nh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(302, 378, "recruit.list.edu.startDate", "T\u1EEB ng\xE0y"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(305, 381, "recruit.list.edu.endDate", "\u0110\u1EBFn ng\xE0y"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(308, 384, "recruit.list.edu.finalDegree", "Cu\u1ED1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(311, 387, "recruit.list.edu.studyAbroad", "Du h\u1ECDc"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(314, 390, "common.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.eduLoading() && ctx.eduRows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.eduRows());
      \u0275\u0275advance();
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(319, 393, "recruit.list.tab.workExp", "Qu\xE1 tr\xECnh l\xE0m vi\u1EC7c"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(324, 396, "common.add", "Th\xEAm"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzData", ctx.workRows())("nzLoading", ctx.workLoading())("nzShowPagination", false);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(330, 399, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(333, 402, "recruit.list.work.cpnyName", "C\xF4ng ty"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(336, 405, "recruit.list.work.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(339, 408, "recruit.list.work.position", "Ch\u1EE9c v\u1EE5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(342, 411, "recruit.list.work.startDate", "T\u1EEB ng\xE0y"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(345, 414, "recruit.list.work.endDate", "\u0110\u1EBFn ng\xE0y"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(348, 417, "recruit.list.work.payroll", "L\u01B0\u01A1ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(351, 420, "recruit.list.work.leftReason", "L\xFD do ngh\u1EC9"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(354, 423, "common.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.workLoading() && ctx.workRows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.workRows());
      \u0275\u0275advance();
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(359, 426, "recruit.list.tab.family", "Th\xF4ng tin gia \u0111\xECnh"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(364, 429, "common.add", "Th\xEAm"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzData", ctx.familyRows())("nzLoading", ctx.familyLoading())("nzShowPagination", false);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(370, 432, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(373, 435, "recruit.list.family.famName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(376, 438, "recruit.list.family.famTypeCode", "Quan h\u1EC7"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(379, 441, "recruit.list.family.gender", "Gi\u1EDBi t\xEDnh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(382, 444, "recruit.list.family.famBorndate", "Ng\xE0y sinh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(385, 447, "recruit.list.family.famPhone", "\u0110i\u1EC7n tho\u1EA1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(388, 450, "recruit.list.family.emergencyYn", "Kh\u1EA9n c\u1EA5p"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(391, 453, "recruit.list.family.occupation", "Ngh\u1EC1 nghi\u1EC7p"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(394, 456, "common.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.familyLoading() && ctx.familyRows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.familyRows());
      \u0275\u0275advance();
      \u0275\u0275property("nzVisible", ctx.eduModalVisible())("nzTitle", \u0275\u0275pipeBind2(399, 459, ctx.eduIsNew() ? "common.add" : "common.save", ctx.eduIsNew() ? "Th\xEAm m\u1EDBi" : "C\u1EADp nh\u1EADt"))("nzOkLoading", ctx.eduSaving())("nzOkText", \u0275\u0275pipeBind2(400, 462, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(401, 465, "common.cancel", "H\u1EE7y"));
      \u0275\u0275advance(5);
      \u0275\u0275property("nzVisible", ctx.workModalVisible())("nzTitle", \u0275\u0275pipeBind2(404, 468, ctx.workIsNew() ? "common.add" : "common.save", ctx.workIsNew() ? "Th\xEAm m\u1EDBi" : "C\u1EADp nh\u1EADt"))("nzOkLoading", ctx.workSaving())("nzOkText", \u0275\u0275pipeBind2(405, 471, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(406, 474, "common.cancel", "H\u1EE7y"));
      \u0275\u0275advance(5);
      \u0275\u0275property("nzVisible", ctx.familyModalVisible())("nzTitle", \u0275\u0275pipeBind2(409, 477, ctx.familyIsNew() ? "common.add" : "common.save", ctx.familyIsNew() ? "Th\xEAm m\u1EDBi" : "C\u1EADp nh\u1EADt"))("nzOkLoading", ctx.familySaving())("nzOkText", \u0275\u0275pipeBind2(410, 480, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(411, 483, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzCheckboxModule, NzCheckboxComponent, NzDatePickerModule, NzDatePickerComponent, NzTreeSelectModule, NzTreeSelectComponent, NzTabsModule, NzTabsComponent, NzTabComponent, NzModalModule, NzModalComponent, NzModalContentDirective, TranslatePipe], styles: ["\n.vrl-emp-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.vrl-emp-row[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.vrl-emp-row-active[_ngcontent-%COMP%] {\n  background: #e6f4ff;\n}\n.vrl-loading[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n/*# sourceMappingURL=view-recruit-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewRecruitListComponent, [{
    type: Component,
    args: [{ selector: "app-view-recruit-list", standalone: true, imports: [
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
      NzTabsModule,
      NzModalModule,
      TranslatePipe
    ], template: `<div class="row g-3">
  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Panel tr\xE1i: Danh s\xE1ch nh\xE2n vi\xEAn \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="col-lg-4">
    <nz-card class="mb-3">
      <div class="row g-2">
        <div class="col-6">
          <input nz-input [(ngModel)]="searchName" name="vrlSearchName"
                 [placeholder]="'recruit.list.placeholder.searchName' | translate:'H\u1ECD t\xEAn...'"
                 (keyup.enter)="search()">
        </div>
        <div class="col-6">
          <input nz-input [(ngModel)]="searchEmpId" name="vrlSearchEmpId"
                 [placeholder]="'recruit.list.placeholder.searchEmpId' | translate:'M\xE3 NV...'"
                 (keyup.enter)="search()">
        </div>
        <div class="col-12 d-flex align-items-center justify-content-between">
          <label nz-checkbox [(ngModel)]="showCompleted" name="vrlShowCompleted" (ngModelChange)="search()">
            {{ 'recruit.list.tab.completed' | translate:'Ho\xE0n th\xE0nh' }}
          </label>
          <button nz-button nzType="primary" nzSize="small" (click)="search()">
            <i class="bx bx-search"></i> {{ 'common.search' | translate:'T\xECm ki\u1EBFm' }}
          </button>
        </div>
      </div>
    </nz-card>

    <nz-card [nzBodyStyle]="{ padding: '8px' }">
      <div class="d-flex align-items-center justify-content-between mb-2 px-1">
        <button nz-button nzType="dashed" nzSize="small" (click)="clearSelection()">
          <i class="bx bx-plus"></i> {{ 'common.add' | translate:'Th\xEAm' }}
        </button>
        <div class="d-flex gap-1">
          <button *ngIf="!showCompleted" nz-button nzType="primary" nzSize="small"
                  [disabled]="checkedPersonIds().size === 0" (click)="executeAction('CONFIRM')">
            <i class="bx bx-check-double"></i> {{ 'recruit.list.btn.confirm' | translate:'X\xE1c nh\u1EADn' }}
          </button>
          <button *ngIf="showCompleted" nz-button nzSize="small"
                  [disabled]="checkedPersonIds().size === 0" (click)="executeAction('CANCEL')">
            <i class="bx bx-x-circle"></i> {{ 'recruit.list.btn.cancelConfirm' | translate:'H\u1EE7y x\xE1c nh\u1EADn' }}
          </button>
        </div>
      </div>

      <nz-table [nzData]="employees()" [nzFrontPagination]="false" [nzLoading]="loadingList()"
                [nzTotal]="totalRecords()" [nzPageIndex]="pageIndex" [nzPageSize]="pageSize"
                [nzShowPagination]="true" [nzSimple]="true"
                (nzPageIndexChange)="onPageIndexChange($event)"
                [nzScroll]="{ y: 'calc(100vh - 380px)' }" nzSize="small" class="vrl-emp-table">
        <thead>
          <tr>
            <th class="text-center" nzWidth="40px">
              <label nz-checkbox [ngModel]="allChecked" (ngModelChange)="toggleAllChecked($event)"></label>
            </th>
            <th>{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'common.empId' | translate:'M\xE3 NV' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of employees()"
              class="vrl-emp-row" [class.vrl-emp-row-active]="row.personId === selectedPersonId()"
              (click)="selectEmployee(row)">
            <td class="text-center" (click)="$event.stopPropagation()">
              <label nz-checkbox [ngModel]="isChecked(row.personId)" (ngModelChange)="toggleChecked(row.personId, $event)"></label>
            </td>
            <td>
              <div class="fw-semibold text-truncate">{{ row.localName }}</div>
              <div class="text-muted small text-truncate">{{ row.deptName }} \xB7 {{ formatDisplayDate(row.dateStarted) }}</div>
            </td>
            <td class="text-center">{{ row.empId }}</td>
          </tr>
          <tr *ngIf="!loadingList() && employees().length === 0">
            <td colspan="3" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
        </tbody>
      </nz-table>
    </nz-card>
  </div>

  <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Panel ph\u1EA3i: Th\xF4ng tin chi ti\u1EBFt \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="col-lg-8">
    <nz-card>
      <div class="d-flex align-items-center justify-content-between mb-2">
        <div>
          <span class="fw-semibold me-2">
            {{ selectedPersonId() ? (form.localName || '') : ('recruit.list.label.newEmployee' | translate:'Nh\xE2n vi\xEAn m\u1EDBi') }}
          </span>
          <span *ngIf="!selectedPersonId() && employees().length === 0" class="text-muted small">
            {{ 'recruit.list.label.selectEmployee' | translate:'-- Ch\u1ECDn nh\xE2n vi\xEAn --' }}
          </span>
          <span *ngIf="form.empId" class="badge bg-secondary">{{ form.empId }}</span>
        </div>
      </div>

      <nz-tabs [nzSelectedIndex]="activeTabIndex()" (nzSelectedIndexChange)="onTabIndexChange($event)">
        <!-- \u2500\u2500 Tab Th\xF4ng tin chung \u2500\u2500 -->
        <nz-tab [nzTitle]="'recruit.list.tab.general' | translate:'Th\xF4ng tin chung'">
          <div class="row g-2 pt-2" [class.vrl-loading]="detailLoading()">
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.localName' | translate:'H\u1ECD t\xEAn' }}</label>
              <input nz-input [(ngModel)]="form.localName" name="localName" maxlength="50">
            </div>
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</label>
              <input nz-input [(ngModel)]="form.empId" name="empId" maxlength="20">
            </div>
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.englishName' | translate:'T\xEAn ti\u1EBFng Anh' }}</label>
              <input nz-input [(ngModel)]="form.englishName" name="englishName" maxlength="50">
            </div>
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.koreanName' | translate:'T\xEAn H\xE0n' }}</label>
              <input nz-input [(ngModel)]="form.koreanName" name="koreanName" maxlength="50">
            </div>
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.sexcode' | translate:'Gi\u1EDBi t\xEDnh' }}</label>
              <nz-select class="w-100" [(ngModel)]="form.sexcode" name="sexcode" nzAllowClear>
                <nz-option *ngFor="let c of sexOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
              </nz-select>
            </div>
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.dob' | translate:'Ng\xE0y sinh' }}</label>
              <nz-date-picker class="w-100" [(ngModel)]="dobPicker" name="dobPicker" nzFormat="dd/MM/yyyy"></nz-date-picker>
            </div>
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.nationalityCode' | translate:'Qu\u1ED1c t\u1ECBch' }}</label>
              <nz-select class="w-100" [(ngModel)]="form.nationalityCode" name="nationalityCode" nzAllowClear>
                <nz-option *ngFor="let c of nationalityOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
              </nz-select>
            </div>
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.nationCode' | translate:'D\xE2n t\u1ED9c' }}</label>
              <nz-select class="w-100" [(ngModel)]="form.nationCode" name="nationCode" nzAllowClear>
                <nz-option *ngFor="let c of nationOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
              </nz-select>
            </div>
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.maritalStatusCode' | translate:'T\xECnh tr\u1EA1ng h\xF4n nh\xE2n' }}</label>
              <nz-select class="w-100" [(ngModel)]="form.maritalStatusCode" name="maritalStatusCode" nzAllowClear>
                <nz-option *ngFor="let c of maritalStatusOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
              </nz-select>
            </div>
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.deptNo' | translate:'Ph\xF2ng ban' }}</label>
              <nz-tree-select class="w-100" [nzNodes]="deptNodes()" [ngModel]="form.deptNo" name="deptNo"
                               (ngModelChange)="onDeptNoChange($event)" nzShowSearch nzAllowClear
                               [nzPlaceHolder]="'recruit.list.placeholder.selectDept' | translate:'-- Ch\u1ECDn ph\xF2ng ban --'"></nz-tree-select>
              <div *ngIf="deptTreeErrorMessage()" class="text-danger small mt-1">{{ deptTreeErrorMessage() }}</div>
            </div>
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.postFamily' | translate:'Nh\xF3m nh\xE2n vi\xEAn' }}</label>
              <nz-select class="w-100" [ngModel]="form.postFamily" name="postFamily"
                         (ngModelChange)="onPostFamilyChange($event)" nzAllowClear>
                <nz-option *ngFor="let c of postFamilyOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
              </nz-select>
            </div>
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.postGradeNo' | translate:'C\u1EA5p b\u1EADc' }}</label>
              <nz-select class="w-100" [(ngModel)]="form.postGradeNo" name="postGradeNo" nzAllowClear>
                <nz-option *ngFor="let c of postGradeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
              </nz-select>
            </div>
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.positionNo' | translate:'V\u1ECB tr\xED' }}</label>
              <nz-select class="w-100" [(ngModel)]="form.positionNo" name="positionNo" nzAllowClear>
                <nz-option *ngFor="let c of positionOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
              </nz-select>
            </div>
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.empTypeCode' | translate:'Lo\u1EA1i nh\xE2n vi\xEAn' }}</label>
              <nz-select class="w-100" [(ngModel)]="form.empTypeCode" name="empTypeCode" nzAllowClear>
                <nz-option *ngFor="let c of empTypeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
              </nz-select>
            </div>
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.joinType' | translate:'Lo\u1EA1i tuy\u1EC3n d\u1EE5ng' }}</label>
              <nz-select class="w-100" [ngModel]="form.joinType" name="joinType"
                         (ngModelChange)="onJoinTypeChange($event)" nzAllowClear>
                <nz-option *ngFor="let c of joinTypeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
              </nz-select>
            </div>
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.joinDetailType' | translate:'Chi ti\u1EBFt lo\u1EA1i v\xE0o' }}</label>
              <nz-select class="w-100" [(ngModel)]="form.joinDetailType" name="joinDetailType" nzAllowClear>
                <nz-option *ngFor="let c of joinDetailTypeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
              </nz-select>
            </div>
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.dateStarted' | translate:'Ng\xE0y v\xE0o c\xF4ng ty' }}</label>
              <nz-date-picker class="w-100" [(ngModel)]="dateStartedPicker" name="dateStartedPicker" nzFormat="dd/MM/yyyy"></nz-date-picker>
            </div>
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.fullTimeEmployee' | translate:'H\u01B0\u1EDFng l\u01B0\u01A1ng ch\xEDnh th\u1EE9c' }}</label>
              <nz-select class="w-100" [(ngModel)]="form.isProbation" name="isProbation" nzAllowClear>
                <nz-option nzValue="1" [nzLabel]="'common.yes' | translate:'C\xF3'"></nz-option>
                <nz-option nzValue="0" [nzLabel]="'common.no' | translate:'Kh\xF4ng'"></nz-option>
              </nz-select>
            </div>
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.endProbationDate' | translate:'Ng\xE0y k\u1EBFt th\xFAc th\u1EED vi\u1EC7c' }}</label>
              <nz-date-picker class="w-100" [(ngModel)]="endProbationDatePicker" name="endProbationDatePicker" nzFormat="dd/MM/yyyy"></nz-date-picker>
            </div>
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.contractStartDate' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u H\u0110' }}</label>
              <nz-date-picker class="w-100" [(ngModel)]="contractStartDatePicker" name="contractStartDatePicker" nzFormat="dd/MM/yyyy"></nz-date-picker>
            </div>
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.costCenter' | translate:'Trung t\xE2m chi ph\xED' }}</label>
              <nz-tree-select class="w-100" [nzNodes]="deptNodes()" [(ngModel)]="form.costCenter" name="costCenter"
                               nzShowSearch nzAllowClear
                               [nzPlaceHolder]="'recruit.list.placeholder.selectDept' | translate:'-- Ch\u1ECDn ph\xF2ng ban --'"></nz-tree-select>
            </div>
          </div>
          <div class="d-flex justify-content-end mt-3">
            <button nz-button nzType="primary" [nzLoading]="savingEmployee()" (click)="saveEmployee()">
              <i class="bx bx-save"></i> {{ 'common.save' | translate:'L\u01B0u' }}
            </button>
          </div>
        </nz-tab>

        <!-- \u2500\u2500 Tab Th\xF4ng tin b\u1ED5 sung \u2500\u2500 -->
        <nz-tab [nzTitle]="'recruit.list.tab.extra' | translate:'Th\xF4ng tin b\u1ED5 sung'">
          <div class="row g-2 pt-2">
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.homePhone' | translate:'\u0110T nh\xE0' }}</label>
              <input nz-input [(ngModel)]="form.homePhone" name="homePhone" maxlength="100">
            </div>
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.companyPhone' | translate:'S\u1ED1 \u0111i\u1EC7n tho\u1EA1i' }}</label>
              <input nz-input [(ngModel)]="form.companyPhone" name="companyPhone" maxlength="100">
            </div>
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.officePhone' | translate:'\u0110T v\u0103n ph\xF2ng' }}</label>
              <input nz-input [(ngModel)]="form.officePhone" name="officePhone" maxlength="50">
            </div>
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.email' | translate:'Email' }}</label>
              <input nz-input [(ngModel)]="form.email" name="email" maxlength="100">
            </div>
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.idcardNo' | translate:'S\u1ED1 CMND/CCCD' }}</label>
              <input nz-input [(ngModel)]="form.idcardNo" name="idcardNo" maxlength="100">
            </div>
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.documentType' | translate:'Lo\u1EA1i gi\u1EA5y t\u1EDD' }}</label>
              <input nz-input [(ngModel)]="form.documentType" name="documentType" maxlength="20">
            </div>
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.idcardStartDate' | translate:'Ng\xE0y c\u1EA5p' }}</label>
              <nz-date-picker class="w-100" [(ngModel)]="idcardStartDatePicker" name="idcardStartDatePicker" nzFormat="dd/MM/yyyy"></nz-date-picker>
            </div>
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.issuingAuthority' | translate:'N\u01A1i c\u1EA5p' }}</label>
              <input nz-input [(ngModel)]="form.issuingAuthority" name="issuingAuthority" maxlength="50">
            </div>
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.addressContent' | translate:'\u0110\u1ECBa ch\u1EC9 hi\u1EC7n t\u1EA1i' }}</label>
              <input nz-input [(ngModel)]="form.addressContent" name="addressContent" maxlength="100">
            </div>
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.hujiaddressContent' | translate:'H\u1ED9 kh\u1EA9u th\u01B0\u1EDDng tr\xFA' }}</label>
              <input nz-input [(ngModel)]="form.hujiaddressContent" name="hujiaddressContent" maxlength="100">
            </div>
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.nationality' | translate:'Qu\u1ED1c gia' }}</label>
              <nz-select class="w-100" [(ngModel)]="form.nationality" name="nationality" nzAllowClear>
                <nz-option *ngFor="let c of nationalityOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
              </nz-select>
            </div>
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.accountNo' | translate:'S\u1ED1 TK ng\xE2n h\xE0ng' }}</label>
              <input nz-input [(ngModel)]="form.accountNo" name="accountNo" maxlength="100">
            </div>
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.oldPay' | translate:'L\u01B0\u01A1ng c\u0169' }}</label>
              <input nz-input [(ngModel)]="form.oldPay" name="oldPay" maxlength="40">
            </div>
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.experience' | translate:'Th\xE2m ni\xEAn' }}</label>
              <input nz-input [(ngModel)]="form.experience" name="experience" maxlength="30">
            </div>
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.recruitType' | translate:'K\xEAnh tuy\u1EC3n d\u1EE5ng' }}</label>
              <input nz-input [(ngModel)]="form.recruitType" name="recruitType" maxlength="30">
            </div>
            <div class="col-md-4">
              <label class="form-label small mb-0">{{ 'recruit.list.field.recommend' | translate:'Ng\u01B0\u1EDDi gi\u1EDBi thi\u1EC7u' }}</label>
              <input nz-input [(ngModel)]="form.recommend" name="recommend" maxlength="50">
            </div>
            <div class="col-12">
              <label class="form-label small mb-0">{{ 'recruit.list.field.remark' | translate:'Ghi ch\xFA' }}</label>
              <textarea nz-input [(ngModel)]="form.remark" name="remark" rows="2" maxlength="500"></textarea>
            </div>
          </div>
          <div class="d-flex justify-content-end mt-3">
            <button nz-button nzType="primary" [nzLoading]="savingEmployee()" (click)="saveEmployee()">
              <i class="bx bx-save"></i> {{ 'common.save' | translate:'L\u01B0u' }}
            </button>
          </div>
        </nz-tab>

        <!-- \u2500\u2500 Tab Gi\xE1o d\u1EE5c \u2500\u2500 -->
        <nz-tab [nzTitle]="'recruit.list.tab.education' | translate:'Th\xF4ng tin Gi\xE1o d\u1EE5c'">
          <div class="d-flex justify-content-end pt-2 pb-2">
            <button nz-button nzType="primary" nzSize="small" (click)="openEduModal(null)">
              <i class="bx bx-plus"></i> {{ 'common.add' | translate:'Th\xEAm' }}
            </button>
          </div>
          <nz-table [nzData]="eduRows()" [nzLoading]="eduLoading()" [nzShowPagination]="false" nzSize="small">
            <thead>
              <tr>
                <th class="text-center" nzWidth="50px">{{ 'common.stt' | translate:'STT' }}</th>
                <th nzWidth="110px">{{ 'recruit.list.edu.degreeCode' | translate:'H\u1ECDc v\u1ECB' }}</th>
                <th nzWidth="120px">{{ 'recruit.list.edu.degreesCode' | translate:'V\u0103n b\u1EB1ng' }}</th>
                <th>{{ 'recruit.list.edu.institutionName' | translate:'T\xEAn tr\u01B0\u1EDDng' }}</th>
                <th nzWidth="120px">{{ 'recruit.list.edu.subject' | translate:'Chuy\xEAn ng\xE0nh' }}</th>
                <th class="text-center" nzWidth="90px">{{ 'recruit.list.edu.startDate' | translate:'T\u1EEB ng\xE0y' }}</th>
                <th class="text-center" nzWidth="90px">{{ 'recruit.list.edu.endDate' | translate:'\u0110\u1EBFn ng\xE0y' }}</th>
                <th class="text-center" nzWidth="80px">{{ 'recruit.list.edu.finalDegree' | translate:'Cu\u1ED1i' }}</th>
                <th class="text-center" nzWidth="80px">{{ 'recruit.list.edu.studyAbroad' | translate:'Du h\u1ECDc' }}</th>
                <th class="text-center" nzWidth="90px">{{ 'common.action' | translate:'Thao t\xE1c' }}</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngIf="!eduLoading() && eduRows().length === 0">
                <td colspan="10" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
              </tr>
              <tr *ngFor="let row of eduRows(); let i = index">
                <td class="text-center">{{ i + 1 }}</td>
                <td>{{ row.degreeName || row.degreeCode }}</td>
                <td>{{ row.degreesName || row.degreesCode }}</td>
                <td>{{ row.institutionName }}</td>
                <td>{{ row.subject }}</td>
                <td class="text-center">{{ formatDisplayDate(row.startDate) }}</td>
                <td class="text-center">{{ formatDisplayDate(row.endDate) }}</td>
                <td class="text-center"><i class="bx" [ngClass]="row.finalDegreeWhether === 'Y' ? 'bx-check text-success' : 'bx-minus text-muted'"></i></td>
                <td class="text-center"><i class="bx" [ngClass]="row.experienceStudyAbroad === 'Y' ? 'bx-check text-success' : 'bx-minus text-muted'"></i></td>
                <td class="text-center">
                  <button nz-button nzType="text" nzSize="small" (click)="openEduModal(row)">
                    <i class="bx bx-edit text-warning"></i>
                  </button>
                  <button nz-button nzType="text" nzSize="small" nzDanger (click)="deleteEdu(row)">
                    <i class="bx bx-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </nz-table>
        </nz-tab>

        <!-- \u2500\u2500 Tab Qu\xE1 tr\xECnh l\xE0m vi\u1EC7c \u2500\u2500 -->
        <nz-tab [nzTitle]="'recruit.list.tab.workExp' | translate:'Qu\xE1 tr\xECnh l\xE0m vi\u1EC7c'">
          <div class="d-flex justify-content-end pt-2 pb-2">
            <button nz-button nzType="primary" nzSize="small" (click)="openWorkModal(null)">
              <i class="bx bx-plus"></i> {{ 'common.add' | translate:'Th\xEAm' }}
            </button>
          </div>
          <nz-table [nzData]="workRows()" [nzLoading]="workLoading()" [nzShowPagination]="false" nzSize="small">
            <thead>
              <tr>
                <th class="text-center" nzWidth="50px">{{ 'common.stt' | translate:'STT' }}</th>
                <th>{{ 'recruit.list.work.cpnyName' | translate:'C\xF4ng ty' }}</th>
                <th nzWidth="110px">{{ 'recruit.list.work.deptName' | translate:'Ph\xF2ng ban' }}</th>
                <th nzWidth="110px">{{ 'recruit.list.work.position' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
                <th class="text-center" nzWidth="90px">{{ 'recruit.list.work.startDate' | translate:'T\u1EEB ng\xE0y' }}</th>
                <th class="text-center" nzWidth="90px">{{ 'recruit.list.work.endDate' | translate:'\u0110\u1EBFn ng\xE0y' }}</th>
                <th class="text-center" nzWidth="90px">{{ 'recruit.list.work.payroll' | translate:'L\u01B0\u01A1ng' }}</th>
                <th nzWidth="110px">{{ 'recruit.list.work.leftReason' | translate:'L\xFD do ngh\u1EC9' }}</th>
                <th class="text-center" nzWidth="90px">{{ 'common.action' | translate:'Thao t\xE1c' }}</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngIf="!workLoading() && workRows().length === 0">
                <td colspan="9" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
              </tr>
              <tr *ngFor="let row of workRows(); let i = index">
                <td class="text-center">{{ i + 1 }}</td>
                <td>{{ row.cpnyName }}</td>
                <td>{{ row.deptName }}</td>
                <td>{{ row.position }}</td>
                <td class="text-center">{{ formatDisplayDate(row.startDate) }}</td>
                <td class="text-center">{{ formatDisplayDate(row.endDate) }}</td>
                <td class="text-center">{{ row.payroll }}</td>
                <td>{{ row.leftReason }}</td>
                <td class="text-center">
                  <button nz-button nzType="text" nzSize="small" (click)="openWorkModal(row)">
                    <i class="bx bx-edit text-warning"></i>
                  </button>
                  <button nz-button nzType="text" nzSize="small" nzDanger (click)="deleteWork(row)">
                    <i class="bx bx-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </nz-table>
        </nz-tab>

        <!-- \u2500\u2500 Tab Th\xF4ng tin gia \u0111\xECnh \u2500\u2500 -->
        <nz-tab [nzTitle]="'recruit.list.tab.family' | translate:'Th\xF4ng tin gia \u0111\xECnh'">
          <div class="d-flex justify-content-end pt-2 pb-2">
            <button nz-button nzType="primary" nzSize="small" (click)="openFamilyModal(null)">
              <i class="bx bx-plus"></i> {{ 'common.add' | translate:'Th\xEAm' }}
            </button>
          </div>
          <nz-table [nzData]="familyRows()" [nzLoading]="familyLoading()" [nzShowPagination]="false" nzSize="small">
            <thead>
              <tr>
                <th class="text-center" nzWidth="50px">{{ 'common.stt' | translate:'STT' }}</th>
                <th>{{ 'recruit.list.family.famName' | translate:'H\u1ECD t\xEAn' }}</th>
                <th nzWidth="110px">{{ 'recruit.list.family.famTypeCode' | translate:'Quan h\u1EC7' }}</th>
                <th class="text-center" nzWidth="70px">{{ 'recruit.list.family.gender' | translate:'Gi\u1EDBi t\xEDnh' }}</th>
                <th class="text-center" nzWidth="90px">{{ 'recruit.list.family.famBorndate' | translate:'Ng\xE0y sinh' }}</th>
                <th nzWidth="110px">{{ 'recruit.list.family.famPhone' | translate:'\u0110i\u1EC7n tho\u1EA1i' }}</th>
                <th class="text-center" nzWidth="80px">{{ 'recruit.list.family.emergencyYn' | translate:'Kh\u1EA9n c\u1EA5p' }}</th>
                <th nzWidth="100px">{{ 'recruit.list.family.occupation' | translate:'Ngh\u1EC1 nghi\u1EC7p' }}</th>
                <th class="text-center" nzWidth="90px">{{ 'common.action' | translate:'Thao t\xE1c' }}</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngIf="!familyLoading() && familyRows().length === 0">
                <td colspan="9" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
              </tr>
              <tr *ngFor="let row of familyRows(); let i = index">
                <td class="text-center">{{ i + 1 }}</td>
                <td>{{ row.famName }}</td>
                <td>{{ row.famTypeName || row.famTypeCode }}</td>
                <td class="text-center">{{ row.genderName || row.gender }}</td>
                <td class="text-center">{{ formatDisplayDate(row.famBorndate) }}</td>
                <td>{{ row.famPhone }}</td>
                <td class="text-center"><i class="bx" [ngClass]="row.emergencyContactYn === 'Y' ? 'bx-check text-success' : 'bx-minus text-muted'"></i></td>
                <td>{{ row.occupation }}</td>
                <td class="text-center">
                  <button nz-button nzType="text" nzSize="small" (click)="openFamilyModal(row)">
                    <i class="bx bx-edit text-warning"></i>
                  </button>
                  <button nz-button nzType="text" nzSize="small" nzDanger (click)="deleteFamily(row)">
                    <i class="bx bx-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </nz-table>
        </nz-tab>
      </nz-tabs>
    </nz-card>
  </div>
</div>

<!-- ===== Modal Th\xEAm/S\u1EEDa Gi\xE1o d\u1EE5c ===== -->
<nz-modal [nzVisible]="eduModalVisible()"
          [nzTitle]="(eduIsNew() ? 'common.add' : 'common.save') | translate:(eduIsNew() ? 'Th\xEAm m\u1EDBi' : 'C\u1EADp nh\u1EADt')"
          nzWidth="640px" [nzOkLoading]="eduSaving()"
          [nzOkText]="'common.save' | translate:'L\u01B0u'" [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'"
          (nzOnCancel)="closeEduModal()" (nzOnOk)="saveEdu()">
  <ng-container *nzModalContent>
    <form class="row g-2">
      <div class="col-md-6">
        <label class="form-label small mb-0">{{ 'recruit.list.edu.degreeCode' | translate:'H\u1ECDc v\u1ECB' }}</label>
        <nz-select class="w-100" [(ngModel)]="eduForm.degreeCode" name="eduDegreeCode" nzAllowClear>
          <nz-option *ngFor="let c of degreeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-6">
        <label class="form-label small mb-0">{{ 'recruit.list.edu.degreesCode' | translate:'V\u0103n b\u1EB1ng' }}</label>
        <input nz-input [(ngModel)]="eduForm.degreesCode" name="eduDegreesCode">
      </div>
      <div class="col-md-12">
        <label class="form-label small mb-0">{{ 'recruit.list.edu.institutionName' | translate:'T\xEAn tr\u01B0\u1EDDng' }}</label>
        <input nz-input [(ngModel)]="eduForm.institutionName" name="eduInstitutionName">
      </div>
      <div class="col-md-6">
        <label class="form-label small mb-0">{{ 'recruit.list.edu.subject' | translate:'Chuy\xEAn ng\xE0nh' }}</label>
        <input nz-input [(ngModel)]="eduForm.subject" name="eduSubject">
      </div>
      <div class="col-md-3">
        <label class="form-label small mb-0">{{ 'recruit.list.edu.startDate' | translate:'T\u1EEB ng\xE0y' }}</label>
        <nz-date-picker class="w-100" [(ngModel)]="eduForm.startDatePicker" name="eduStartDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
      </div>
      <div class="col-md-3">
        <label class="form-label small mb-0">{{ 'recruit.list.edu.endDate' | translate:'\u0110\u1EBFn ng\xE0y' }}</label>
        <nz-date-picker class="w-100" [(ngModel)]="eduForm.endDatePicker" name="eduEndDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
      </div>
      <div class="col-md-6">
        <label nz-checkbox [nzChecked]="eduForm.finalDegreeWhether === 'Y'"
               (nzCheckedChange)="eduForm.finalDegreeWhether = $event ? 'Y' : 'N'">
          {{ 'recruit.list.edu.finalDegree' | translate:'H\u1ECDc v\u1ECB cu\u1ED1i' }}
        </label>
      </div>
      <div class="col-md-6">
        <label nz-checkbox [nzChecked]="eduForm.experienceStudyAbroad === 'Y'"
               (nzCheckedChange)="eduForm.experienceStudyAbroad = $event ? 'Y' : 'N'">
          {{ 'recruit.list.edu.studyAbroad' | translate:'Du h\u1ECDc' }}
        </label>
      </div>
      <div class="col-md-12">
        <label class="form-label small mb-0">{{ 'common.description' | translate:'Ghi ch\xFA' }}</label>
        <input nz-input [(ngModel)]="eduForm.remark" name="eduRemark">
      </div>
    </form>
  </ng-container>
</nz-modal>

<!-- ===== Modal Th\xEAm/S\u1EEDa Qu\xE1 tr\xECnh l\xE0m vi\u1EC7c ===== -->
<nz-modal [nzVisible]="workModalVisible()"
          [nzTitle]="(workIsNew() ? 'common.add' : 'common.save') | translate:(workIsNew() ? 'Th\xEAm m\u1EDBi' : 'C\u1EADp nh\u1EADt')"
          nzWidth="640px" [nzOkLoading]="workSaving()"
          [nzOkText]="'common.save' | translate:'L\u01B0u'" [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'"
          (nzOnCancel)="closeWorkModal()" (nzOnOk)="saveWork()">
  <ng-container *nzModalContent>
    <form class="row g-2">
      <div class="col-md-12">
        <label class="form-label small mb-0">{{ 'recruit.list.work.cpnyName' | translate:'C\xF4ng ty' }}</label>
        <input nz-input [(ngModel)]="workForm.cpnyName" name="workCpnyName">
      </div>
      <div class="col-md-6">
        <label class="form-label small mb-0">{{ 'recruit.list.work.deptName' | translate:'Ph\xF2ng ban' }}</label>
        <input nz-input [(ngModel)]="workForm.deptName" name="workDeptName">
      </div>
      <div class="col-md-6">
        <label class="form-label small mb-0">{{ 'recruit.list.work.position' | translate:'Ch\u1EE9c v\u1EE5' }}</label>
        <input nz-input [(ngModel)]="workForm.position" name="workPosition">
      </div>
      <div class="col-md-3">
        <label class="form-label small mb-0">{{ 'recruit.list.work.startDate' | translate:'T\u1EEB ng\xE0y' }}</label>
        <nz-date-picker class="w-100" [(ngModel)]="workForm.startDatePicker" name="workStartDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
      </div>
      <div class="col-md-3">
        <label class="form-label small mb-0">{{ 'recruit.list.work.endDate' | translate:'\u0110\u1EBFn ng\xE0y' }}</label>
        <nz-date-picker class="w-100" [(ngModel)]="workForm.endDatePicker" name="workEndDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
      </div>
      <div class="col-md-6">
        <label class="form-label small mb-0">{{ 'recruit.list.work.payroll' | translate:'L\u01B0\u01A1ng' }}</label>
        <input nz-input [(ngModel)]="workForm.payroll" name="workPayroll">
      </div>
      <div class="col-md-6">
        <label class="form-label small mb-0">{{ 'recruit.list.work.leftReason' | translate:'L\xFD do ngh\u1EC9' }}</label>
        <input nz-input [(ngModel)]="workForm.leftReason" name="workLeftReason">
      </div>
      <div class="col-md-12">
        <label class="form-label small mb-0">{{ 'common.description' | translate:'Ghi ch\xFA' }}</label>
        <input nz-input [(ngModel)]="workForm.remark" name="workRemark">
      </div>
    </form>
  </ng-container>
</nz-modal>

<!-- ===== Modal Th\xEAm/S\u1EEDa Th\xF4ng tin gia \u0111\xECnh ===== -->
<nz-modal [nzVisible]="familyModalVisible()"
          [nzTitle]="(familyIsNew() ? 'common.add' : 'common.save') | translate:(familyIsNew() ? 'Th\xEAm m\u1EDBi' : 'C\u1EADp nh\u1EADt')"
          nzWidth="640px" [nzOkLoading]="familySaving()"
          [nzOkText]="'common.save' | translate:'L\u01B0u'" [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'"
          (nzOnCancel)="closeFamilyModal()" (nzOnOk)="saveFamily()">
  <ng-container *nzModalContent>
    <form class="row g-2">
      <div class="col-md-6">
        <label class="form-label small mb-0">{{ 'recruit.list.family.famName' | translate:'H\u1ECD t\xEAn' }}</label>
        <input nz-input [(ngModel)]="familyForm.famName" name="famName">
      </div>
      <div class="col-md-6">
        <label class="form-label small mb-0">{{ 'recruit.list.family.famTypeCode' | translate:'Quan h\u1EC7' }}</label>
        <nz-select class="w-100" [(ngModel)]="familyForm.famTypeCode" name="famTypeCode" nzAllowClear>
          <nz-option *ngFor="let c of famTypeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-6">
        <label class="form-label small mb-0">{{ 'recruit.list.family.gender' | translate:'Gi\u1EDBi t\xEDnh' }}</label>
        <nz-select class="w-100" [(ngModel)]="familyForm.gender" name="famGender" nzAllowClear>
          <nz-option *ngFor="let c of sexOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-6">
        <label class="form-label small mb-0">{{ 'recruit.list.family.famBorndate' | translate:'Ng\xE0y sinh' }}</label>
        <nz-date-picker class="w-100" [(ngModel)]="familyForm.famBorndatePicker" name="famBorndate" nzFormat="dd/MM/yyyy"></nz-date-picker>
      </div>
      <div class="col-md-6">
        <label class="form-label small mb-0">{{ 'recruit.list.family.famPhone' | translate:'\u0110i\u1EC7n tho\u1EA1i' }}</label>
        <input nz-input [(ngModel)]="familyForm.famPhone" name="famPhone">
      </div>
      <div class="col-md-6">
        <label class="form-label small mb-0">{{ 'recruit.list.family.occupation' | translate:'Ngh\u1EC1 nghi\u1EC7p' }}</label>
        <input nz-input [(ngModel)]="familyForm.occupation" name="famOccupation">
      </div>
      <div class="col-md-6 d-flex align-items-end">
        <label nz-checkbox [nzChecked]="familyForm.emergencyContactYn === 'Y'"
               (nzCheckedChange)="familyForm.emergencyContactYn = $event ? 'Y' : 'N'">
          {{ 'recruit.list.family.emergencyYn' | translate:'Kh\u1EA9n c\u1EA5p' }}
        </label>
      </div>
      <div class="col-md-12">
        <label class="form-label small mb-0">{{ 'common.description' | translate:'Ghi ch\xFA' }}</label>
        <input nz-input [(ngModel)]="familyForm.remark" name="famRemark">
      </div>
    </form>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-recruit-list/view-recruit-list.component.css */\n.vrl-emp-row {\n  cursor: pointer;\n}\n.vrl-emp-row:hover {\n  background: #fafafa;\n}\n.vrl-emp-row-active {\n  background: #e6f4ff;\n}\n.vrl-loading {\n  opacity: 0.6;\n  pointer-events: none;\n}\n/*# sourceMappingURL=view-recruit-list.component.css.map */\n"] }]
  }], () => [{ type: ViewRecruitListService }, { type: I18nService }, { type: NzMessageService }, { type: NzModalService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewRecruitListComponent, { className: "ViewRecruitListComponent", filePath: "src/app/view-recruit-list/view-recruit-list.component.ts", lineNumber: 143 });
})();
export {
  ViewRecruitListComponent
};
//# debugId=342264e0-b576-5f7a-af09-7fe4088fa647
//# sourceMappingURL=chunk-SQSQSJLL.js.map
