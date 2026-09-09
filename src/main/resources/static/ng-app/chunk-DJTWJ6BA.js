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
import {
  NzAlertComponent,
  NzAlertModule
} from "./chunk-BYJYXGGS.js";
import {
  ActivatedRoute
} from "./chunk-2GOAB54B.js";
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
  setClassMetadata,
  signal,
  timeout,
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

// src/app/evs-affirmor-setup/evs-affirmor-setup.service.ts
var API_BASE = "/evs/manage/api";
var EvsAffirmorSetupService = class _EvsAffirmorSetupService {
  constructor(http) {
    this.http = http;
  }
  http;
  getResumeList(evsType) {
    return this.http.get(`${API_BASE}/resume/evsResumeList`, {
      params: new HttpParams().set("evsType", evsType),
      withCredentials: true
    });
  }
  getList(resumeSeq, deptNos, affirmorKeyword, evsType) {
    let params = new HttpParams().set("resumeSeq", resumeSeq).set("evsType", evsType);
    if (deptNos)
      params = params.set("deptNos", deptNos);
    if (affirmorKeyword)
      params = params.set("affirmorKeyword", affirmorKeyword);
    return this.http.get(`${API_BASE}/affirmorSetup/list`, { params, withCredentials: true });
  }
  searchEmployee(keyword, resumeSeq) {
    return this.http.get(`${API_BASE}/affirmorSetup/searchEmployee`, {
      params: new HttpParams().set("keyword", keyword).set("resumeSeq", resumeSeq),
      withCredentials: true
    });
  }
  save(list) {
    return this.http.post(`${API_BASE}/affirmorSetup/save`, list, { withCredentials: true });
  }
  addObject(payload) {
    return this.http.post(`${API_BASE}/affirmorSetup/addObject`, payload, { withCredentials: true });
  }
  /** PR_CREATE_EVS_TARGET có thể chạy lâu (bản gốc đặt timeout ajax 300s) - timeout tương ứng phía
   *  client để phân biệt lỗi "quá thời gian chờ" với lỗi khác (xem createTarget() ở component). */
  createTarget(resumeSeq) {
    return this.http.post(`${API_BASE}/affirmorSetup/createTarget`, { resumeSeq }, { withCredentials: true }).pipe(timeout(3e5));
  }
  evsStart(resumeSeq) {
    return this.http.post(`${API_BASE}/affirmorSetup/evsStart`, { resumeSeq }, { withCredentials: true });
  }
  delete(seqList) {
    return this.http.post(`${API_BASE}/affirmorSetup/delete`, seqList, { withCredentials: true });
  }
  /** Cây phòng ban dùng chung endpoint mặc định của widget DeptTree.js ở bản gốc (không override
   *  option `api`, xem assets/js/components/deptTree.js) - tham khảo ManageEvsResultEmpComponent. */
  getAuthorizedDepartments() {
    return this.http.get("/ar/attendanceSettings/api/arSupervisor/authorized-departments", {
      withCredentials: true
    });
  }
  static \u0275fac = function EvsAffirmorSetupService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EvsAffirmorSetupService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EvsAffirmorSetupService, factory: _EvsAffirmorSetupService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EvsAffirmorSetupService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/evs-affirmor-setup/evs-affirmor-setup.component.ts
var _c0 = () => ({ x: "1700px" });
function EvsAffirmorSetupComponent_nz_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 55);
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    \u0275\u0275property("nzValue", r_r2.seq)("nzLabel", r_r2.resumeName);
  }
}
function EvsAffirmorSetupComponent_nz_alert_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 56);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r2.errorMessage() ?? "");
  }
}
function EvsAffirmorSetupComponent_tr_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 57);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function EvsAffirmorSetupComponent_tr_129_br_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "br");
  }
}
function EvsAffirmorSetupComponent_tr_129_small_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.evsGroupName);
  }
}
function EvsAffirmorSetupComponent_tr_129_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 58)(2, "label", 59);
    \u0275\u0275listener("ngModelChange", function EvsAffirmorSetupComponent_tr_129_Template_label_ngModelChange_2_listener($event) {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleTicked(row_r6, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 58);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 58);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 58);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 58);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275template(17, EvsAffirmorSetupComponent_tr_129_br_17_Template, 1, 0, "br", 48)(18, EvsAffirmorSetupComponent_tr_129_small_18_Template, 2, 1, "small", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 58);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "span", 61);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275listener("click", function EvsAffirmorSetupComponent_tr_129_Template_span_click_22_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openPicker({ kind: "row", row: row_r6, level: 1 }));
    });
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "td", 58)(26, "small", 62);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "td")(29, "span", 61);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275listener("click", function EvsAffirmorSetupComponent_tr_129_Template_span_click_29_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openPicker({ kind: "row", row: row_r6, level: 2 }));
    });
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "td", 58)(33, "small", 62);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "td")(36, "small");
    \u0275\u0275text(37);
    \u0275\u0275element(38, "br");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("eas-row-ticked", ctx_r2.isTicked(row_r6));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r2.isTicked(row_r6));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r7 + 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.localName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.empid);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r6.deptname || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.deptname);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.postGradeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.dateStarted);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r6.listTypeName, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r6.evsGroupName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r6.evsGroupName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.evsOccGroupName);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(23, 23, "evs.viewEvsAffirmorSetup.clickToEdit", "Click \u0111\u1EC3 ch\u1EC9nh s\u1EEDa"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r6.localName1 || "\u2014", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r6.postGradeName1);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(30, 26, "evs.viewEvsAffirmorSetup.clickToEdit", "Click \u0111\u1EC3 ch\u1EC9nh s\u1EEDa"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r6.localName2 || "\u2014", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r6.postGradeName2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r6.updatedBy);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r6.updateDate);
  }
}
function EvsAffirmorSetupComponent_ng_template_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r8 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r8, " ");
  }
}
function EvsAffirmorSetupComponent_ng_container_134_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 71);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function EvsAffirmorSetupComponent_ng_container_134_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 72);
    \u0275\u0275listener("click", function EvsAffirmorSetupComponent_ng_container_134_tr_34_Template_tr_click_0_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectEmployee(row_r11));
    });
    \u0275\u0275elementStart(1, "td", 58);
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
    \u0275\u0275textInterpolate(row_r11.empid);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r11.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r11.deptname);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r11.postGradeName);
  }
}
function EvsAffirmorSetupComponent_ng_container_134_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 63);
    \u0275\u0275listener("ngSubmit", function EvsAffirmorSetupComponent_ng_container_134_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.pickerSearch());
    });
    \u0275\u0275elementStart(2, "div", 64)(3, "label", 8);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 65);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EvsAffirmorSetupComponent_ng_container_134_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.pickerKeyword, $event) || (ctx_r2.pickerKeyword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function EvsAffirmorSetupComponent_ng_container_134_Template_input_keydown_enter_6_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r2.pickerSearch());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 66)(9, "button", 14);
    \u0275\u0275element(10, "i", 15);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "nz-table", 67, 2)(15, "thead")(16, "tr")(17, "th", 68);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 69);
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
    \u0275\u0275template(33, EvsAffirmorSetupComponent_ng_container_134_tr_33_Template, 4, 4, "tr", 48)(34, EvsAffirmorSetupComponent_ng_container_134_tr_34_Template, 11, 5, "tr", 70);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const easPickerTable_r13 = \u0275\u0275reference(14);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 14, "empSearch.field.keyword", "M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.pickerKeyword);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(7, 17, "empSearch.placeholder.keyword", "Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn"));
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 20, "common.search", "T\xECm ki\u1EBFm"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("nzData", ctx_r2.pickerRows())("nzLoading", ctx_r2.pickerLoading())("nzPageSize", 10);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 23, "empSearch.col.no", "STT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 26, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 29, "common.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 32, "common.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 35, "common.position", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r2.pickerLoading() && easPickerTable_r13.data.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", easPickerTable_r13.data);
  }
}
function EvsAffirmorSetupComponent_ng_container_139_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 29)(2, "label", 73);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span", 74);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 75);
    \u0275\u0275element(8, "input", 76);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementStart(10, "button", 77);
    \u0275\u0275listener("click", function EvsAffirmorSetupComponent_ng_container_139_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openPicker({ kind: "addField", field: "object" }));
    });
    \u0275\u0275element(11, "i", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 36);
    \u0275\u0275listener("click", function EvsAffirmorSetupComponent_ng_container_139_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearAddField("object"));
    });
    \u0275\u0275element(13, "i", 17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 29)(15, "label", 8);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 75);
    \u0275\u0275element(19, "input", 76);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementStart(21, "button", 77);
    \u0275\u0275listener("click", function EvsAffirmorSetupComponent_ng_container_139_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openPicker({ kind: "addField", field: "affirm1" }));
    });
    \u0275\u0275element(22, "i", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 36);
    \u0275\u0275listener("click", function EvsAffirmorSetupComponent_ng_container_139_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearAddField("affirm1"));
    });
    \u0275\u0275element(24, "i", 17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 29)(26, "label", 8);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 75);
    \u0275\u0275element(30, "input", 76);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementStart(32, "button", 77);
    \u0275\u0275listener("click", function EvsAffirmorSetupComponent_ng_container_139_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openPicker({ kind: "addField", field: "affirm2" }));
    });
    \u0275\u0275element(33, "i", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 36);
    \u0275\u0275listener("click", function EvsAffirmorSetupComponent_ng_container_139_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearAddField("affirm2"));
    });
    \u0275\u0275element(35, "i", 17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(4, 9, "evs.viewEvsAffirmorSetup.evalObject", "\u0110\u1ED1i t\u01B0\u1EE3ng \u0111\xE1nh gi\xE1"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r2.addForm.objectDisplay)("placeholder", \u0275\u0275pipeBind2(9, 12, "evs.viewEvsAffirmorSetup.placeholder.selectEmployee", "Ch\u1ECDn nh\xE2n vi\xEAn..."));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 15, "evs.viewEvsAffirmorSetup.YICIPINGJIAREN.a", "Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 l\u1EA7n 1"));
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r2.addForm.affirm1Display)("placeholder", \u0275\u0275pipeBind2(20, 18, "evs.viewEvsAffirmorSetup.placeholder.selectEmployee", "Ch\u1ECDn nh\xE2n vi\xEAn..."));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 21, "evs.viewEvsAffirmorSetup.LAINGCIPINGJIAREN.a", "Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 l\u1EA7n 2"));
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r2.addForm.affirm2Display)("placeholder", \u0275\u0275pipeBind2(31, 24, "evs.viewEvsAffirmorSetup.placeholder.selectEmployee", "Ch\u1ECDn nh\xE2n vi\xEAn..."));
  }
}
function EvsAffirmorSetupComponent_ng_container_144_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 78);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(3, 2, "evs.viewEvsAffirmorSetup.msg.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a c\xE1c d\xF2ng \u0111\xE3 ch\u1ECDn kh\xF4ng?"), " (", ctx_r2.tickedCount, ")");
  }
}
function EvsAffirmorSetupComponent_ng_container_146_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 79);
    \u0275\u0275element(2, "nz-spin", 80);
    \u0275\u0275elementStart(3, "div", 81);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 82);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 2, "evs.viewEvsAffirmorSetup.loadingTitle", "\u0110ang t\u1EA1o m\u1EE5c ti\xEAu..."));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 5, "evs.viewEvsAffirmorSetup.loadingMessage", "Vui l\xF2ng ch\u1EDD, qu\xE1 tr\xECnh n\xE0y c\xF3 th\u1EC3 m\u1EA5t v\xE0i ph\xFAt."));
  }
}
var I18N_KEYS = [
  "evs.viewEvsAffirmorSetup.evalName",
  "evs.viewEvsAffirmorSetup.department",
  "evs.viewEvsAffirmorSetup.btnSearch",
  "evs.viewEvsAffirmorSetup.btnClearFilter",
  "evs.viewEvsAffirmorSetup.btnAddNew",
  "evs.viewEvsAffirmorSetup.btnSaveAll",
  "evs.viewEvsAffirmorSetup.btnDoAll",
  "evs.viewEvsAffirmorSetup.btnClear",
  "evs.viewEvsAffirmorSetup.selectOption",
  "evs.viewEvsAffirmorSetup.evalStage1",
  "evs.viewEvsAffirmorSetup.evalStage2",
  "evs.viewEvsAffirmorSetup.selectAll",
  "evs.viewEvsAffirmorSetup.empCode",
  "evs.viewEvsAffirmorSetup.evalSheet",
  "evs.viewEvsAffirmorSetup.dg1Name",
  "evs.viewEvsAffirmorSetup.dg1Position",
  "evs.viewEvsAffirmorSetup.dg2Name",
  "evs.viewEvsAffirmorSetup.dg2Position",
  "evs.viewEvsAffirmorSetup.changeBy",
  "evs.viewEvsAffirmorSetup.loadingTitle",
  "evs.viewEvsAffirmorSetup.loadingMessage",
  "evs.viewEvsAffirmorSetup.addModalTitle",
  "evs.viewEvsAffirmorSetup.evalObject",
  "evs.viewEvsAffirmorSetup.clickToEdit",
  "evs.viewEvsAffirmorSetup.PINGJIAREN.a",
  "evs.viewEvsAffirmorSetup.PINGJIAQUN.a",
  "evs.viewEvsAffirmorSetup.PINGJIAJIEDUAN.a",
  "evs.viewEvsAffirmorSetup.YICIPINGJIAREN.a",
  "evs.viewEvsAffirmorSetup.LAINGCIPINGJIAREN.a",
  "evs.viewEvsAffirmorSetup.CreateTarget.a",
  "evs.viewEvsAffirmorSetup.StartEvaluation.a",
  "evs.viewEvsAffirmorSetup.btnDelete",
  "evs.viewEvsAffirmorSetup.placeholder.selectDept",
  "evs.viewEvsAffirmorSetup.placeholder.selectKeyword",
  "evs.viewEvsAffirmorSetup.placeholder.selectEmployee",
  "evs.viewEvsAffirmorSetup.placeholder.enterName",
  "evs.viewEvsAffirmorSetup.msg.selectEvalFirst",
  "evs.viewEvsAffirmorSetup.msg.selectStage",
  "evs.viewEvsAffirmorSetup.msg.selectAffirmor",
  "evs.viewEvsAffirmorSetup.msg.noTickedRows",
  "evs.viewEvsAffirmorSetup.msg.confirmCreateTarget",
  "evs.viewEvsAffirmorSetup.msg.createTargetSuccess",
  "evs.viewEvsAffirmorSetup.msg.createTargetError",
  "evs.viewEvsAffirmorSetup.msg.createTargetTimeout",
  "evs.viewEvsAffirmorSetup.msg.createTargetFail",
  "evs.viewEvsAffirmorSetup.msg.confirmEvsStart",
  "evs.viewEvsAffirmorSetup.msg.evsStartSuccess",
  "evs.viewEvsAffirmorSetup.msg.evsStartError",
  "evs.viewEvsAffirmorSetup.msg.evsStartFail",
  "evs.viewEvsAffirmorSetup.msg.noTickedSave",
  "evs.viewEvsAffirmorSetup.msg.saveSuccess",
  "evs.viewEvsAffirmorSetup.msg.saveFail",
  "evs.viewEvsAffirmorSetup.msg.addSuccess",
  "evs.viewEvsAffirmorSetup.msg.addError",
  "evs.viewEvsAffirmorSetup.msg.addFail",
  "evs.viewEvsAffirmorSetup.msg.selectEvalObject",
  "evs.viewEvsAffirmorSetup.msg.confirmDelete",
  "evs.viewEvsAffirmorSetup.msg.deleteSuccess",
  "evs.viewEvsAffirmorSetup.msg.deleteError",
  "evs.viewEvsAffirmorSetup.msg.deleteFail",
  "empSearch.title",
  "empSearch.field.keyword",
  "empSearch.placeholder.keyword",
  "empSearch.col.no",
  "common.empName",
  "common.empId",
  "common.deptName",
  "common.position",
  "common.joinDate",
  "common.confirm",
  "common.cancel",
  "common.close",
  "common.save",
  "common.search",
  "common.clearFilter",
  "common.selectAll",
  "common.noData",
  "common.totalRows",
  "common.loadFail"
];
var PAGE_SIZE_OPTIONS = [25, 50, 100, 200];
var EMPTY_ADD_FORM = {
  objectDisplay: "",
  objectPersonId: null,
  affirm1Display: "",
  affirm1PersonId: null,
  affirm2Display: "",
  affirm2PersonId: null
};
var EvsAffirmorSetupComponent = class _EvsAffirmorSetupComponent {
  constructor(api, i18n, message, modal, route) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
    this.modal = modal;
    this.route = route;
  }
  api;
  i18n;
  message;
  modal;
  route;
  pageSizeOptions = PAGE_SIZE_OPTIONS;
  evsType = "";
  resumeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "resumeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  resumeSeq = null;
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
  deptChildrenMap = /* @__PURE__ */ new Map();
  deptNos = [];
  affirmorKeyword = "";
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
  ticked = signal(
    /* @__PURE__ */ new Set(),
    ...ngDevMode ? [{ debugName: "ticked" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // ==================== Thanh áp dụng hàng loạt ====================
  bulkStage = null;
  bulkPersonId = null;
  bulkLocalName = "";
  bulkPostGradeName = "";
  bulkDisplay = "";
  // ==================== Popup tìm kiếm nhân viên (dùng chung 3 ngữ cảnh) ====================
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
  pickerTarget = null;
  // ==================== Modal Thêm mới đối tượng đánh giá ====================
  addModalVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "addModalVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  adding = signal(
    false,
    ...ngDevMode ? [{ debugName: "adding" }] : (
      /* istanbul ignore next */
      []
    )
  );
  addForm = __spreadValues({}, EMPTY_ADD_FORM);
  // ==================== Tạo mục tiêu / Bắt đầu đánh giá ====================
  creatingTarget = signal(
    false,
    ...ngDevMode ? [{ debugName: "creatingTarget" }] : (
      /* istanbul ignore next */
      []
    )
  );
  startingEvs = signal(
    false,
    ...ngDevMode ? [{ debugName: "startingEvs" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // ==================== Xóa ====================
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
  saving = signal(
    false,
    ...ngDevMode ? [{ debugName: "saving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
    this.route.queryParamMap.subscribe((params) => {
      this.evsType = params.get("evsType") ?? "";
      this.loadResumeOptions();
    });
  }
  loadResumeOptions() {
    this.api.getResumeList(this.evsType).subscribe({
      next: (rows) => {
        this.resumeOptions.set(rows ?? []);
        if (rows && rows.length) {
          this.resumeSeq = rows[0].seq;
          this.search();
        }
      },
      error: () => this.resumeOptions.set([])
    });
  }
  loadDeptTree() {
    this.api.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(this.buildDeptTree(list ?? [])),
      error: () => this.deptTreeErrorMessage.set(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"))
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
  // ==================== Search ====================
  search() {
    if (!this.resumeSeq)
      return;
    this.loading.set(true);
    this.errorMessage.set(null);
    this.ticked.set(/* @__PURE__ */ new Set());
    this.api.getList(this.resumeSeq, this.expandDeptSelection(this.deptNos).join(","), this.affirmorKeyword.trim(), this.evsType).subscribe({
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
    this.deptNos = [];
    this.affirmorKeyword = "";
    this.search();
  }
  // ==================== Chọn nhiều dòng (checkbox) - phạm vi trang hiện tại ====================
  isTicked(row) {
    return this.ticked().has(row.seq);
  }
  toggleTicked(row, checked) {
    const next = new Set(this.ticked());
    if (checked)
      next.add(row.seq);
    else
      next.delete(row.seq);
    this.ticked.set(next);
  }
  allTickedOnPage(pageRows) {
    return pageRows.length > 0 && pageRows.every((r) => this.isTicked(r));
  }
  someTickedOnPage(pageRows) {
    return pageRows.some((r) => this.isTicked(r)) && !this.allTickedOnPage(pageRows);
  }
  toggleAllOnPage(pageRows, checked) {
    const next = new Set(this.ticked());
    pageRows.forEach((r) => checked ? next.add(r.seq) : next.delete(r.seq));
    this.ticked.set(next);
  }
  // ==================== Popup tìm kiếm nhân viên ====================
  openPicker(target) {
    this.pickerTarget = target;
    this.pickerKeyword = "";
    this.pickerRows.set([]);
    this.pickerVisible.set(true);
    this.pickerSearch();
  }
  closePicker() {
    this.pickerVisible.set(false);
  }
  pickerSearch() {
    this.pickerLoading.set(true);
    this.api.searchEmployee(this.pickerKeyword.trim(), this.resumeSeq ?? "").subscribe({
      next: (rows) => {
        this.pickerRows.set(rows ?? []);
        this.pickerLoading.set(false);
      },
      error: () => {
        this.pickerRows.set([]);
        this.pickerLoading.set(false);
      }
    });
  }
  selectEmployee(emp) {
    const target = this.pickerTarget;
    if (!target)
      return;
    if (target.kind === "row") {
      const row = target.row;
      row["personId" + target.level] = emp.personId;
      row["localName" + target.level] = emp.localName;
      row["postGradeName" + target.level] = emp.postGradeName;
      this.toggleTicked(target.row, true);
    } else if (target.kind === "bulk") {
      this.bulkPersonId = emp.personId;
      this.bulkLocalName = emp.localName;
      this.bulkPostGradeName = emp.postGradeName;
      this.bulkDisplay = `${emp.empid} - ${emp.localName}`;
    } else {
      const display = `${emp.empid} - ${emp.localName}`;
      if (target.field === "object") {
        this.addForm.objectDisplay = display;
        this.addForm.objectPersonId = emp.personId;
      } else if (target.field === "affirm1") {
        this.addForm.affirm1Display = display;
        this.addForm.affirm1PersonId = emp.personId;
      } else {
        this.addForm.affirm2Display = display;
        this.addForm.affirm2PersonId = emp.personId;
      }
    }
    this.pickerVisible.set(false);
  }
  // ==================== Áp dụng hàng loạt ====================
  bulkClear() {
    this.bulkStage = null;
    this.bulkPersonId = null;
    this.bulkLocalName = "";
    this.bulkPostGradeName = "";
    this.bulkDisplay = "";
  }
  bulkApply() {
    if (!this.bulkStage) {
      this.message.warning(this.i18n.t("evs.viewEvsAffirmorSetup.msg.selectStage", "Vui l\xF2ng ch\u1ECDn Giai \u0111o\u1EA1n (1 ho\u1EB7c 2)."));
      return;
    }
    if (!this.bulkPersonId) {
      this.message.warning(this.i18n.t("evs.viewEvsAffirmorSetup.msg.selectAffirmor", "Vui l\xF2ng ch\u1ECDn Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1."));
      return;
    }
    const tickedSeqs = this.ticked();
    if (tickedSeqs.size === 0) {
      this.message.warning(this.i18n.t("evs.viewEvsAffirmorSetup.msg.noTickedRows", "Ch\u01B0a c\xF3 d\xF2ng n\xE0o \u0111\u01B0\u1EE3c tick. Vui l\xF2ng tick c\xE1c d\xF2ng c\u1EA7n \xE1p d\u1EE5ng."));
      return;
    }
    const level = this.bulkStage;
    this.rows().forEach((row) => {
      if (!tickedSeqs.has(row.seq))
        return;
      const r = row;
      r["personId" + level] = this.bulkPersonId;
      r["localName" + level] = this.bulkLocalName;
      r["postGradeName" + level] = this.bulkPostGradeName;
    });
  }
  // ==================== Lưu tất cả (chỉ lưu dòng được tick) ====================
  saveAll() {
    const tickedSeqs = this.ticked();
    if (tickedSeqs.size === 0) {
      this.message.warning(this.i18n.t("evs.viewEvsAffirmorSetup.msg.noTickedSave", "Ch\u01B0a c\xF3 d\xF2ng n\xE0o \u0111\u01B0\u1EE3c ch\u1ECDn \u0111\u1EC3 l\u01B0u. H\xE3y ch\u1ECDn ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 ho\u1EB7c tick v\xE0o d\xF2ng c\u1EA7n l\u01B0u."));
      return;
    }
    const payload = this.rows().filter((r) => tickedSeqs.has(r.seq)).map((r) => ({ seq: r.seq, personId1: r.personId1 || null, personId2: r.personId2 || null, personId3: r.personId3 || null, personId4: r.personId4 || null }));
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: () => {
        this.saving.set(false);
        this.ticked.set(/* @__PURE__ */ new Set());
        this.message.success(this.i18n.t("evs.viewEvsAffirmorSetup.msg.saveSuccess", "L\u01B0u th\xE0nh c\xF4ng!"));
        this.search();
      },
      error: () => {
        this.saving.set(false);
        this.message.error(this.i18n.t("evs.viewEvsAffirmorSetup.msg.saveFail", "L\u1ED7i khi l\u01B0u d\u1EEF li\u1EC7u. Vui l\xF2ng th\u1EED l\u1EA1i."));
      }
    });
  }
  // ==================== Xóa các dòng đã tick ====================
  openDeleteConfirm() {
    if (this.ticked().size === 0) {
      this.message.warning(this.i18n.t("evs.viewEvsAffirmorSetup.msg.noTickedRows", "Ch\u01B0a c\xF3 d\xF2ng n\xE0o \u0111\u01B0\u1EE3c tick. Vui l\xF2ng tick c\xE1c d\xF2ng c\u1EA7n \xE1p d\u1EE5ng."));
      return;
    }
    this.deleteVisible.set(true);
  }
  closeDeleteConfirm() {
    this.deleteVisible.set(false);
  }
  get tickedCount() {
    return this.ticked().size;
  }
  confirmDelete() {
    const seqList = Array.from(this.ticked());
    this.deleting.set(true);
    this.api.delete(seqList).subscribe({
      next: (res) => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        if (res.success) {
          this.ticked.set(/* @__PURE__ */ new Set());
          this.message.success(this.i18n.t("evs.viewEvsAffirmorSetup.msg.deleteSuccess", "X\xF3a th\xE0nh c\xF4ng!"));
          this.search();
        } else {
          this.message.error(res.message || this.i18n.t("evs.viewEvsAffirmorSetup.msg.deleteError", "Kh\xF4ng th\u1EC3 x\xF3a d\u1EEF li\u1EC7u."));
        }
      },
      error: () => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.message.error(this.i18n.t("evs.viewEvsAffirmorSetup.msg.deleteFail", "L\u1ED7i khi x\xF3a d\u1EEF li\u1EC7u. Vui l\xF2ng th\u1EED l\u1EA1i."));
      }
    });
  }
  // ==================== Thêm mới đối tượng đánh giá ====================
  openAddModal() {
    this.addForm = __spreadValues({}, EMPTY_ADD_FORM);
    this.addModalVisible.set(true);
  }
  closeAddModal() {
    this.addModalVisible.set(false);
  }
  clearAddField(field) {
    if (field === "object") {
      this.addForm.objectDisplay = "";
      this.addForm.objectPersonId = null;
    } else if (field === "affirm1") {
      this.addForm.affirm1Display = "";
      this.addForm.affirm1PersonId = null;
    } else {
      this.addForm.affirm2Display = "";
      this.addForm.affirm2PersonId = null;
    }
  }
  saveNewObject() {
    if (!this.resumeSeq) {
      this.message.warning(this.i18n.t("evs.viewEvsAffirmorSetup.msg.selectEvalFirst", "Vui l\xF2ng ch\u1ECDn t\xEAn \u0111\xE1nh gi\xE1 tr\u01B0\u1EDBc."));
      return;
    }
    if (!this.addForm.objectPersonId) {
      this.message.warning(this.i18n.t("evs.viewEvsAffirmorSetup.msg.selectEvalObject", "Vui l\xF2ng ch\u1ECDn \u0111\u1ED1i t\u01B0\u1EE3ng \u0111\xE1nh gi\xE1."));
      return;
    }
    const payload = {
      resumeSeq: this.resumeSeq,
      personId: this.addForm.objectPersonId,
      personId1: this.addForm.affirm1PersonId || null,
      personId2: this.addForm.affirm2PersonId || null,
      personId3: null,
      personId4: null
    };
    this.adding.set(true);
    this.api.addObject(payload).subscribe({
      next: (res) => {
        this.adding.set(false);
        if (res.success) {
          this.addModalVisible.set(false);
          this.message.success(this.i18n.t("evs.viewEvsAffirmorSetup.msg.addSuccess", "Th\xEAm m\u1EDBi th\xE0nh c\xF4ng!"));
          this.search();
        } else {
          this.message.error(res.message || this.i18n.t("evs.viewEvsAffirmorSetup.msg.addError", "Kh\xF4ng th\u1EC3 th\xEAm m\u1EDBi."));
        }
      },
      error: () => {
        this.adding.set(false);
        this.message.error(this.i18n.t("evs.viewEvsAffirmorSetup.msg.addFail", "L\u1ED7i khi th\xEAm m\u1EDBi. Vui l\xF2ng th\u1EED l\u1EA1i."));
      }
    });
  }
  // ==================== Tạo mục tiêu ====================
  createTarget() {
    if (!this.resumeSeq) {
      this.message.warning(this.i18n.t("evs.viewEvsAffirmorSetup.msg.selectEvalFirst", "Vui l\xF2ng ch\u1ECDn t\xEAn \u0111\xE1nh gi\xE1 tr\u01B0\u1EDBc."));
      return;
    }
    this.modal.confirm({
      nzTitle: this.i18n.t("common.confirm", "X\xE1c nh\u1EADn"),
      nzContent: this.i18n.t("evs.viewEvsAffirmorSetup.msg.confirmCreateTarget", "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n t\u1EA1o m\u1EE5c ti\xEAu cho \u0111\u1EE3t \u0111\xE1nh gi\xE1 n\xE0y kh\xF4ng?"),
      nzOnOk: () => this.doCreateTarget()
    });
  }
  doCreateTarget() {
    const resumeSeq = this.resumeSeq;
    if (!resumeSeq)
      return;
    this.creatingTarget.set(true);
    this.api.createTarget(resumeSeq).subscribe({
      next: (res) => {
        this.creatingTarget.set(false);
        if (res.success) {
          this.message.success(this.i18n.t("evs.viewEvsAffirmorSetup.msg.createTargetSuccess", "T\u1EA1o m\u1EE5c ti\xEAu th\xE0nh c\xF4ng!"));
          this.search();
        } else {
          this.message.error(res.message || this.i18n.t("evs.viewEvsAffirmorSetup.msg.createTargetError", "Kh\xF4ng th\u1EC3 t\u1EA1o m\u1EE5c ti\xEAu."));
        }
      },
      error: (err) => {
        this.creatingTarget.set(false);
        const msg = err?.name === "TimeoutError" ? this.i18n.t("evs.viewEvsAffirmorSetup.msg.createTargetTimeout", "Qu\xE1 th\u1EDDi gian ch\u1EDD. Stored procedure \u0111ang ch\u1EA1y l\xE2u, vui l\xF2ng ki\u1EC3m tra l\u1EA1i sau.") : this.i18n.t("evs.viewEvsAffirmorSetup.msg.createTargetFail", "L\u1ED7i khi g\u1ECDi t\u1EA1o m\u1EE5c ti\xEAu. Vui l\xF2ng th\u1EED l\u1EA1i.");
        this.message.error(msg);
      }
    });
  }
  // ==================== Bắt đầu đánh giá ====================
  evsStart() {
    if (!this.resumeSeq) {
      this.message.warning(this.i18n.t("evs.viewEvsAffirmorSetup.msg.selectEvalFirst", "Vui l\xF2ng ch\u1ECDn t\xEAn \u0111\xE1nh gi\xE1 tr\u01B0\u1EDBc."));
      return;
    }
    this.modal.confirm({
      nzTitle: this.i18n.t("common.confirm", "X\xE1c nh\u1EADn"),
      nzContent: this.i18n.t("evs.viewEvsAffirmorSetup.msg.confirmEvsStart", "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n b\u1EAFt \u0111\u1EA7u \u0111\xE1nh gi\xE1 cho \u0111\u1EE3t n\xE0y kh\xF4ng?"),
      nzOnOk: () => this.doEvsStart()
    });
  }
  doEvsStart() {
    const resumeSeq = this.resumeSeq;
    if (!resumeSeq)
      return;
    this.startingEvs.set(true);
    this.api.evsStart(resumeSeq).subscribe({
      next: (res) => {
        this.startingEvs.set(false);
        if (res.success) {
          this.message.success(this.i18n.t("evs.viewEvsAffirmorSetup.msg.evsStartSuccess", "B\u1EAFt \u0111\u1EA7u \u0111\xE1nh gi\xE1 th\xE0nh c\xF4ng!"));
          this.search();
        } else {
          this.message.error(res.message || this.i18n.t("evs.viewEvsAffirmorSetup.msg.evsStartError", "Kh\xF4ng th\u1EC3 b\u1EAFt \u0111\u1EA7u \u0111\xE1nh gi\xE1."));
        }
      },
      error: () => {
        this.startingEvs.set(false);
        this.message.error(this.i18n.t("evs.viewEvsAffirmorSetup.msg.evsStartFail", "L\u1ED7i khi g\u1ECDi b\u1EAFt \u0111\u1EA7u \u0111\xE1nh gi\xE1. Vui l\xF2ng th\u1EED l\u1EA1i."));
      }
    });
  }
  static \u0275fac = function EvsAffirmorSetupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EvsAffirmorSetupComponent)(\u0275\u0275directiveInject(EvsAffirmorSetupService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService), \u0275\u0275directiveInject(NzModalService), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EvsAffirmorSetupComponent, selectors: [["app-evs-affirmor-setup"]], decls: 147, vars: 196, consts: [["easTable", "nzTable"], ["easTotalTpl", ""], ["easPickerTable", "nzTable"], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["name", "easResumeSeq", 1, "w-100", 3, "ngModelChange", "ngModel"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["name", "easDeptNos", "nzCheckable", "", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["nz-input", "", "name", "easAffirmorKeyword", 3, "ngModelChange", "ngModel", "placeholder"], [1, "col-md-3", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], [1, "col-12", "d-flex", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click", "nzLoading"], [1, "bx", "bx-save"], ["nz-button", "", "nzType", "default", "type", "button", 3, "click"], [1, "bx", "bx-target-lock"], ["nz-button", "", "nzDanger", "", "type", "button", 3, "click", "nzLoading"], [1, "bx", "bx-play-circle"], ["nz-button", "", "nzDanger", "", "nzType", "default", "type", "button", 3, "click"], [1, "bx", "bx-trash"], [1, "mb-3"], [1, "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["name", "easBulkStage", 2, "width", "180px", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["nzValue", "1", 3, "nzLabel"], ["nzValue", "2", 3, "nzLabel"], [1, "input-group", "input-group-sm", 2, "width", "260px"], ["readonly", "", 1, "form-control", 2, "cursor", "pointer", 3, "click", "value", "placeholder"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "40px", 1, "text-center"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel", "nzIndeterminate", "title"], ["nzWidth", "50px", 1, "text-center"], ["nzWidth", "160px"], ["nzWidth", "100px", 1, "text-center"], ["nzWidth", "140px", 1, "text-center"], ["nzWidth", "120px", 1, "text-center"], ["nzWidth", "130px", 1, "text-center"], ["nzWidth", "180px"], [4, "ngIf"], [3, "eas-row-ticked", 4, "ngFor", "ngForOf"], ["nzWidth", "800px", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzFooter"], [4, "nzModalContent"], ["nzWidth", "700px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], ["nzOkDanger", "", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], ["nzWidth", "360px", 3, "nzVisible", "nzClosable", "nzMaskClosable", "nzFooter"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "13", 1, "text-center", "text-muted"], [1, "text-center"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel"], ["class", "text-muted", 4, "ngIf"], [1, "eas-affirm-display", 3, "click", "title"], [1, "text-muted"], [1, "row", "g-2", "align-items-end", "mb-3", 3, "ngSubmit"], [1, "col-md-8"], ["nz-input", "", "name", "easPickerKeyword", 3, "ngModelChange", "keydown.enter", "ngModel", "placeholder"], [1, "col-md-4"], ["nzSize", "small", 3, "nzData", "nzLoading", "nzPageSize"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "110px"], ["class", "eas-picker-row", 3, "click", 4, "ngFor", "ngForOf"], ["colspan", "5", 1, "text-center", "text-muted"], [1, "eas-picker-row", 3, "click"], [1, "form-label", "fw-semibold"], [1, "text-danger"], [1, "input-group", "input-group-sm"], ["readonly", "", 1, "form-control", 3, "value", "placeholder"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "mb-0"], [1, "text-center", "py-3"], ["nzSize", "large"], [1, "fw-semibold", "mt-3"], [1, "text-muted", "small", "mt-1"]], template: function EvsAffirmorSetupComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "nz-card", 5)(3, "form", 6);
      \u0275\u0275listener("ngSubmit", function EvsAffirmorSetupComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 7)(5, "label", 8);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "nz-select", 9);
      \u0275\u0275twoWayListener("ngModelChange", function EvsAffirmorSetupComponent_Template_nz_select_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.resumeSeq, $event) || (ctx.resumeSeq = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(9, EvsAffirmorSetupComponent_nz_option_9_Template, 1, 2, "nz-option", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7)(11, "label", 8);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "nz-tree-select", 11);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function EvsAffirmorSetupComponent_Template_nz_tree_select_ngModelChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.deptNos, $event) || (ctx.deptNos = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 7)(17, "label", 8);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "input", 12);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function EvsAffirmorSetupComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.affirmorKeyword, $event) || (ctx.affirmorKeyword = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 13)(23, "button", 14);
      \u0275\u0275element(24, "i", 15);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "button", 16);
      \u0275\u0275listener("click", function EvsAffirmorSetupComponent_Template_button_click_27_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(28, "i", 17);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 18)(32, "button", 19);
      \u0275\u0275listener("click", function EvsAffirmorSetupComponent_Template_button_click_32_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(33, "i", 20);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "button", 21);
      \u0275\u0275listener("click", function EvsAffirmorSetupComponent_Template_button_click_36_listener() {
        return ctx.saveAll();
      });
      \u0275\u0275element(37, "i", 22);
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "button", 23);
      \u0275\u0275listener("click", function EvsAffirmorSetupComponent_Template_button_click_40_listener() {
        return ctx.createTarget();
      });
      \u0275\u0275element(41, "i", 24);
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "button", 25);
      \u0275\u0275listener("click", function EvsAffirmorSetupComponent_Template_button_click_44_listener() {
        return ctx.evsStart();
      });
      \u0275\u0275element(45, "i", 26);
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "button", 27);
      \u0275\u0275listener("click", function EvsAffirmorSetupComponent_Template_button_click_48_listener() {
        return ctx.openDeleteConfirm();
      });
      \u0275\u0275element(49, "i", 28);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(52, "nz-card", 29)(53, "div", 30)(54, "div")(55, "label", 8);
      \u0275\u0275text(56);
      \u0275\u0275pipe(57, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "nz-select", 31);
      \u0275\u0275pipe(59, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function EvsAffirmorSetupComponent_Template_nz_select_ngModelChange_58_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.bulkStage, $event) || (ctx.bulkStage = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275element(60, "nz-option", 32);
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275element(62, "nz-option", 33);
      \u0275\u0275pipe(63, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div")(65, "label", 8);
      \u0275\u0275text(66);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 34)(69, "input", 35);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275listener("click", function EvsAffirmorSetupComponent_Template_input_click_69_listener() {
        return ctx.openPicker({ kind: "bulk" });
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "button", 36);
      \u0275\u0275listener("click", function EvsAffirmorSetupComponent_Template_button_click_71_listener() {
        return ctx.openPicker({ kind: "bulk" });
      });
      \u0275\u0275element(72, "i", 15);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(73, "button", 16);
      \u0275\u0275listener("click", function EvsAffirmorSetupComponent_Template_button_click_73_listener() {
        return ctx.bulkClear();
      });
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "button", 19);
      \u0275\u0275listener("click", function EvsAffirmorSetupComponent_Template_button_click_76_listener() {
        return ctx.bulkApply();
      });
      \u0275\u0275text(77);
      \u0275\u0275pipe(78, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(79, "nz-card");
      \u0275\u0275template(80, EvsAffirmorSetupComponent_nz_alert_80_Template, 1, 1, "nz-alert", 37);
      \u0275\u0275elementStart(81, "nz-table", 38, 0)(83, "thead")(84, "tr")(85, "th", 39)(86, "label", 40);
      \u0275\u0275pipe(87, "translate");
      \u0275\u0275listener("ngModelChange", function EvsAffirmorSetupComponent_Template_label_ngModelChange_86_listener($event) {
        \u0275\u0275restoreView(_r1);
        const easTable_r4 = \u0275\u0275reference(82);
        return \u0275\u0275resetView(ctx.toggleAllOnPage(easTable_r4.data, $event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "th", 41);
      \u0275\u0275text(89);
      \u0275\u0275pipe(90, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "th", 42);
      \u0275\u0275text(92);
      \u0275\u0275pipe(93, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "th", 43);
      \u0275\u0275text(95);
      \u0275\u0275pipe(96, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "th", 42);
      \u0275\u0275text(98);
      \u0275\u0275pipe(99, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "th", 44);
      \u0275\u0275text(101);
      \u0275\u0275pipe(102, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "th", 45);
      \u0275\u0275text(104);
      \u0275\u0275pipe(105, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "th", 42);
      \u0275\u0275text(107);
      \u0275\u0275pipe(108, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "th", 46);
      \u0275\u0275text(110);
      \u0275\u0275pipe(111, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "th", 42);
      \u0275\u0275text(113);
      \u0275\u0275pipe(114, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "th", 44);
      \u0275\u0275text(116);
      \u0275\u0275pipe(117, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "th", 42);
      \u0275\u0275text(119);
      \u0275\u0275pipe(120, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "th", 44);
      \u0275\u0275text(122);
      \u0275\u0275pipe(123, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "th", 47);
      \u0275\u0275text(125);
      \u0275\u0275pipe(126, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(127, "tbody");
      \u0275\u0275template(128, EvsAffirmorSetupComponent_tr_128_Template, 4, 4, "tr", 48)(129, EvsAffirmorSetupComponent_tr_129_Template, 40, 29, "tr", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275template(130, EvsAffirmorSetupComponent_ng_template_130_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(132, "nz-modal", 50);
      \u0275\u0275pipe(133, "translate");
      \u0275\u0275listener("nzOnCancel", function EvsAffirmorSetupComponent_Template_nz_modal_nzOnCancel_132_listener() {
        return ctx.closePicker();
      });
      \u0275\u0275template(134, EvsAffirmorSetupComponent_ng_container_134_Template, 35, 38, "ng-container", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "nz-modal", 52);
      \u0275\u0275pipe(136, "translate");
      \u0275\u0275pipe(137, "translate");
      \u0275\u0275pipe(138, "translate");
      \u0275\u0275listener("nzOnCancel", function EvsAffirmorSetupComponent_Template_nz_modal_nzOnCancel_135_listener() {
        return ctx.closeAddModal();
      })("nzOnOk", function EvsAffirmorSetupComponent_Template_nz_modal_nzOnOk_135_listener() {
        return ctx.saveNewObject();
      });
      \u0275\u0275template(139, EvsAffirmorSetupComponent_ng_container_139_Template, 36, 27, "ng-container", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "nz-modal", 53);
      \u0275\u0275pipe(141, "translate");
      \u0275\u0275pipe(142, "translate");
      \u0275\u0275pipe(143, "translate");
      \u0275\u0275listener("nzOnCancel", function EvsAffirmorSetupComponent_Template_nz_modal_nzOnCancel_140_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function EvsAffirmorSetupComponent_Template_nz_modal_nzOnOk_140_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(144, EvsAffirmorSetupComponent_ng_container_144_Template, 4, 5, "ng-container", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "nz-modal", 54);
      \u0275\u0275template(146, EvsAffirmorSetupComponent_ng_container_146_Template, 9, 8, "ng-container", 51);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const easTable_r4 = \u0275\u0275reference(82);
      const easTotalTpl_r15 = \u0275\u0275reference(131);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 72, "evs.viewEvsAffirmorSetup.evalName", "T\xEAn \u0111\xE1nh gi\xE1"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.resumeSeq);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.resumeOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 75, "evs.viewEvsAffirmorSetup.department", "Ph\xF2ng ban"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzNodes", ctx.deptNodes());
      \u0275\u0275twoWayProperty("ngModel", ctx.deptNos);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(15, 78, "evs.viewEvsAffirmorSetup.placeholder.selectDept", "Ch\u1ECDn ph\xF2ng ban"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 81, "evs.viewEvsAffirmorSetup.PINGJIAREN.a", "Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.affirmorKeyword);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(21, 84, "evs.viewEvsAffirmorSetup.placeholder.selectKeyword", "Nh\u1EADp t\u1EEB kh\xF3a"));
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 87, "evs.viewEvsAffirmorSetup.btnSearch", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(30, 90, "evs.viewEvsAffirmorSetup.btnClearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(35, 93, "evs.viewEvsAffirmorSetup.btnAddNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.saving());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(39, 96, "evs.viewEvsAffirmorSetup.btnSaveAll", "L\u01B0u t\u1EA5t c\u1EA3"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(43, 99, "evs.viewEvsAffirmorSetup.CreateTarget.a", "T\u1EA1o m\u1EE5c ti\xEAu"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.startingEvs());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(47, 102, "evs.viewEvsAffirmorSetup.StartEvaluation.a", "B\u1EAFt \u0111\u1EA7u \u0111\xE1nh gi\xE1"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(51, 105, "evs.viewEvsAffirmorSetup.btnDelete", "X\xF3a"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 108, "evs.viewEvsAffirmorSetup.PINGJIAJIEDUAN.a", "Giai \u0111o\u1EA1n"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.bulkStage);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(59, 111, "evs.viewEvsAffirmorSetup.selectOption", "L\u1EF1a ch\u1ECDn"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(61, 114, "evs.viewEvsAffirmorSetup.evalStage1", "Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 1"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(63, 117, "evs.viewEvsAffirmorSetup.evalStage2", "Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 2"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(67, 120, "evs.viewEvsAffirmorSetup.PINGJIAREN.a", "Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1"));
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.bulkDisplay)("placeholder", \u0275\u0275pipeBind2(70, 123, "evs.viewEvsAffirmorSetup.placeholder.selectKeyword", "Ch\u1ECDn t\u1EEB kh\xF3a"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(75, 126, "evs.viewEvsAffirmorSetup.btnClear", "X\xF3a"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(78, 129, "evs.viewEvsAffirmorSetup.btnDoAll", "Th\u1EF1c hi\u1EC7n t\u1EA5t c\u1EA3"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 50)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", easTotalTpl_r15)("nzScroll", \u0275\u0275pureFunction0(195, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.allTickedOnPage(easTable_r4.data))("nzIndeterminate", ctx.someTickedOnPage(easTable_r4.data))("title", \u0275\u0275pipeBind2(87, 132, "evs.viewEvsAffirmorSetup.selectAll", "Ch\u1ECDn t\u1EA5t c\u1EA3"));
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(90, 135, "common.stt", "No."));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(93, 138, "common.empName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(96, 141, "evs.viewEvsAffirmorSetup.empCode", "M\xE3 NV"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(99, 144, "evs.viewEvsAffirmorSetup.department", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(102, 147, "common.position", "Ch\u1EE9c v\u1EE5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(105, 150, "common.joinDate", "Ng\xE0y v\xE0o l\xE0m"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(108, 153, "evs.viewEvsAffirmorSetup.evalSheet", "B\u1EA3ng \u0111\xE1nh gi\xE1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(111, 156, "evs.viewEvsAffirmorSetup.PINGJIAQUN.a", "Nh\xF3m \u0110G"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(114, 159, "evs.viewEvsAffirmorSetup.dg1Name", "\u0110G1 - H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(117, 162, "evs.viewEvsAffirmorSetup.dg1Position", "\u0110G1 - Ch\u1EE9c v\u1EE5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(120, 165, "evs.viewEvsAffirmorSetup.dg2Name", "\u0110G2 - H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(123, 168, "evs.viewEvsAffirmorSetup.dg2Position", "\u0110G2 - Ch\u1EE9c v\u1EE5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(126, 171, "evs.viewEvsAffirmorSetup.changeBy", "Ng\u01B0\u1EDDi thay \u0111\u1ED5i"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && easTable_r4.data.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", easTable_r4.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.pickerVisible())("nzTitle", \u0275\u0275pipeBind2(133, 174, "empSearch.title", "T\xECm ki\u1EBFm nh\xE2n vi\xEAn"))("nzFooter", null);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.addModalVisible())("nzTitle", \u0275\u0275pipeBind2(136, 177, "evs.viewEvsAffirmorSetup.addModalTitle", "Th\xEAm m\u1EDBi \u0111\u1ED1i t\u01B0\u1EE3ng \u0111\xE1nh gi\xE1"))("nzOkLoading", ctx.adding())("nzOkText", \u0275\u0275pipeBind2(137, 180, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(138, 183, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(5);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(141, 186, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(142, 189, "evs.viewEvsAffirmorSetup.btnDelete", "X\xF3a"))("nzCancelText", \u0275\u0275pipeBind2(143, 192, "common.cancel", "H\u1EE7y"));
      \u0275\u0275advance(5);
      \u0275\u0275property("nzVisible", ctx.creatingTarget())("nzClosable", false)("nzMaskClosable", false)("nzFooter", null);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzCheckboxModule, NzCheckboxComponent, NzTreeSelectModule, NzTreeSelectComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, NzSpinModule, NzSpinComponent, TranslatePipe], styles: ["\n  tr.eas-row-ticked {\n  background-color: #fff3cd !important;\n}\n  .eas-affirm-display {\n  cursor: pointer;\n  display: inline-block;\n  min-width: 60px;\n  min-height: 1.2em;\n}\n  .eas-affirm-display:hover {\n  text-decoration: underline dotted #aaa;\n}\n  .eas-picker-row {\n  cursor: pointer;\n}\n/*# sourceMappingURL=evs-affirmor-setup.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EvsAffirmorSetupComponent, [{
    type: Component,
    args: [{ selector: "app-evs-affirmor-setup", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzSelectModule,
      NzButtonModule,
      NzCheckboxModule,
      NzTreeSelectModule,
      NzModalModule,
      NzAlertModule,
      NzSpinModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3" (ngSubmit)="search()">
        <div class="col-md-3">
          <label class="form-label">{{ 'evs.viewEvsAffirmorSetup.evalName' | translate:'T\xEAn \u0111\xE1nh gi\xE1' }}</label>
          <nz-select class="w-100" [(ngModel)]="resumeSeq" name="easResumeSeq">
            <nz-option *ngFor="let r of resumeOptions()" [nzValue]="r.seq" [nzLabel]="r.resumeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'evs.viewEvsAffirmorSetup.department' | translate:'Ph\xF2ng ban' }}</label>
          <nz-tree-select class="w-100" [nzNodes]="deptNodes()" [(ngModel)]="deptNos" name="easDeptNos"
                           nzCheckable nzShowSearch nzAllowClear
                           [nzPlaceHolder]="'evs.viewEvsAffirmorSetup.placeholder.selectDept' | translate:'Ch\u1ECDn ph\xF2ng ban'"></nz-tree-select>
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'evs.viewEvsAffirmorSetup.PINGJIAREN.a' | translate:'Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1' }}</label>
          <input nz-input [(ngModel)]="affirmorKeyword" name="easAffirmorKeyword"
                 [placeholder]="'evs.viewEvsAffirmorSetup.placeholder.selectKeyword' | translate:'Nh\u1EADp t\u1EEB kh\xF3a'">
        </div>
        <div class="col-md-3 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'evs.viewEvsAffirmorSetup.btnSearch' | translate:'Tra c\u1EE9u' }}
          </button>
          <button nz-button type="button" (click)="clearSearch()">
            <i class="bx bx-x"></i> {{ 'evs.viewEvsAffirmorSetup.btnClearFilter' | translate:'X\xF3a l\u1ECDc' }}
          </button>
        </div>
        <div class="col-12 d-flex gap-2 flex-wrap">
          <button nz-button nzType="primary" type="button" (click)="openAddModal()">
            <i class="bx bx-plus"></i> {{ 'evs.viewEvsAffirmorSetup.btnAddNew' | translate:'Th\xEAm m\u1EDBi' }}
          </button>
          <button nz-button nzType="primary" type="button" [nzLoading]="saving()" (click)="saveAll()">
            <i class="bx bx-save"></i> {{ 'evs.viewEvsAffirmorSetup.btnSaveAll' | translate:'L\u01B0u t\u1EA5t c\u1EA3' }}
          </button>
          <button nz-button nzType="default" type="button" (click)="createTarget()">
            <i class="bx bx-target-lock"></i> {{ 'evs.viewEvsAffirmorSetup.CreateTarget.a' | translate:'T\u1EA1o m\u1EE5c ti\xEAu' }}
          </button>
          <button nz-button nzDanger type="button" [nzLoading]="startingEvs()" (click)="evsStart()">
            <i class="bx bx-play-circle"></i> {{ 'evs.viewEvsAffirmorSetup.StartEvaluation.a' | translate:'B\u1EAFt \u0111\u1EA7u \u0111\xE1nh gi\xE1' }}
          </button>
          <button nz-button nzDanger nzType="default" type="button" (click)="openDeleteConfirm()">
            <i class="bx bx-trash"></i> {{ 'evs.viewEvsAffirmorSetup.btnDelete' | translate:'X\xF3a' }}
          </button>
        </div>
      </form>
    </nz-card>

    <!-- Thanh \xE1p d\u1EE5ng h\xE0ng lo\u1EA1t -->
    <nz-card class="mb-3">
      <div class="d-flex align-items-end gap-2 flex-wrap">
        <div>
          <label class="form-label">{{ 'evs.viewEvsAffirmorSetup.PINGJIAJIEDUAN.a' | translate:'Giai \u0111o\u1EA1n' }}</label>
          <nz-select style="width:180px;" [(ngModel)]="bulkStage" name="easBulkStage"
                     [nzPlaceHolder]="'evs.viewEvsAffirmorSetup.selectOption' | translate:'L\u1EF1a ch\u1ECDn'">
            <nz-option nzValue="1" [nzLabel]="'evs.viewEvsAffirmorSetup.evalStage1' | translate:'Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 1'"></nz-option>
            <nz-option nzValue="2" [nzLabel]="'evs.viewEvsAffirmorSetup.evalStage2' | translate:'Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 2'"></nz-option>
          </nz-select>
        </div>
        <div>
          <label class="form-label">{{ 'evs.viewEvsAffirmorSetup.PINGJIAREN.a' | translate:'Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1' }}</label>
          <div class="input-group input-group-sm" style="width:260px;">
            <input class="form-control" readonly [value]="bulkDisplay"
                   [placeholder]="'evs.viewEvsAffirmorSetup.placeholder.selectKeyword' | translate:'Ch\u1ECDn t\u1EEB kh\xF3a'"
                   (click)="openPicker({ kind: 'bulk' })" style="cursor:pointer;">
            <button class="btn btn-outline-secondary" type="button" (click)="openPicker({ kind: 'bulk' })">
              <i class="bx bx-search"></i>
            </button>
          </div>
        </div>
        <button nz-button type="button" (click)="bulkClear()">
          {{ 'evs.viewEvsAffirmorSetup.btnClear' | translate:'X\xF3a' }}
        </button>
        <button nz-button nzType="primary" type="button" (click)="bulkApply()">
          {{ 'evs.viewEvsAffirmorSetup.btnDoAll' | translate:'Th\u1EF1c hi\u1EC7n t\u1EA5t c\u1EA3' }}
        </button>
      </div>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="50" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="easTotalTpl"
                [nzScroll]="{ x: '1700px' }" #easTable="nzTable">
        <thead>
          <tr>
            <th class="text-center" nzWidth="40px">
              <label nz-checkbox [ngModel]="allTickedOnPage(easTable.data)" [nzIndeterminate]="someTickedOnPage(easTable.data)"
                     (ngModelChange)="toggleAllOnPage(easTable.data, $event)"
                     [title]="'evs.viewEvsAffirmorSetup.selectAll' | translate:'Ch\u1ECDn t\u1EA5t c\u1EA3'"></label>
            </th>
            <th class="text-center" nzWidth="50px">{{ 'common.stt' | translate:'No.' }}</th>
            <th nzWidth="160px">{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'evs.viewEvsAffirmorSetup.empCode' | translate:'M\xE3 NV' }}</th>
            <th nzWidth="160px">{{ 'evs.viewEvsAffirmorSetup.department' | translate:'Ph\xF2ng ban' }}</th>
            <th class="text-center" nzWidth="140px">{{ 'common.position' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
            <th class="text-center" nzWidth="120px">{{ 'common.joinDate' | translate:'Ng\xE0y v\xE0o l\xE0m' }}</th>
            <th nzWidth="160px">{{ 'evs.viewEvsAffirmorSetup.evalSheet' | translate:'B\u1EA3ng \u0111\xE1nh gi\xE1' }}</th>
            <th class="text-center" nzWidth="130px">{{ 'evs.viewEvsAffirmorSetup.PINGJIAQUN.a' | translate:'Nh\xF3m \u0110G' }}</th>
            <th nzWidth="160px">{{ 'evs.viewEvsAffirmorSetup.dg1Name' | translate:'\u0110G1 - H\u1ECD t\xEAn' }}</th>
            <th class="text-center" nzWidth="140px">{{ 'evs.viewEvsAffirmorSetup.dg1Position' | translate:'\u0110G1 - Ch\u1EE9c v\u1EE5' }}</th>
            <th nzWidth="160px">{{ 'evs.viewEvsAffirmorSetup.dg2Name' | translate:'\u0110G2 - H\u1ECD t\xEAn' }}</th>
            <th class="text-center" nzWidth="140px">{{ 'evs.viewEvsAffirmorSetup.dg2Position' | translate:'\u0110G2 - Ch\u1EE9c v\u1EE5' }}</th>
            <th nzWidth="180px">{{ 'evs.viewEvsAffirmorSetup.changeBy' | translate:'Ng\u01B0\u1EDDi thay \u0111\u1ED5i' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && easTable.data.length === 0">
            <td colspan="13" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of easTable.data; let i = index" [class.eas-row-ticked]="isTicked(row)">
            <td class="text-center">
              <label nz-checkbox [ngModel]="isTicked(row)" (ngModelChange)="toggleTicked(row, $event)"></label>
            </td>
            <td class="text-center">{{ i + 1 }}</td>
            <td [attr.title]="row.localName || null">{{ row.localName }}</td>
            <td class="text-center">{{ row.empid }}</td>
            <td [attr.title]="row.deptname || null">{{ row.deptname }}</td>
            <td class="text-center">{{ row.postGradeName }}</td>
            <td class="text-center">{{ row.dateStarted }}</td>
            <td>
              {{ row.listTypeName }}
              <br *ngIf="row.evsGroupName">
              <small class="text-muted" *ngIf="row.evsGroupName">{{ row.evsGroupName }}</small>
            </td>
            <td class="text-center">{{ row.evsOccGroupName }}</td>
            <td>
              <span class="eas-affirm-display" [title]="'evs.viewEvsAffirmorSetup.clickToEdit' | translate:'Click \u0111\u1EC3 ch\u1EC9nh s\u1EEDa'"
                    (click)="openPicker({ kind: 'row', row: row, level: 1 })">
                {{ row.localName1 || '\u2014' }}
              </span>
            </td>
            <td class="text-center"><small class="text-muted">{{ row.postGradeName1 }}</small></td>
            <td>
              <span class="eas-affirm-display" [title]="'evs.viewEvsAffirmorSetup.clickToEdit' | translate:'Click \u0111\u1EC3 ch\u1EC9nh s\u1EEDa'"
                    (click)="openPicker({ kind: 'row', row: row, level: 2 })">
                {{ row.localName2 || '\u2014' }}
              </span>
            </td>
            <td class="text-center"><small class="text-muted">{{ row.postGradeName2 }}</small></td>
            <td>
              <small>{{ row.updatedBy }}<br>{{ row.updateDate }}</small>
            </td>
          </tr>
        </tbody>
        <ng-template #easTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Popup t\xECm ki\u1EBFm nh\xE2n vi\xEAn - d\xF9ng chung cho s\u1EEDa 1 \xF4 ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 / \xE1p d\u1EE5ng h\xE0ng lo\u1EA1t / modal Th\xEAm m\u1EDBi -->
<nz-modal [nzVisible]="pickerVisible()" [nzTitle]="'empSearch.title' | translate:'T\xECm ki\u1EBFm nh\xE2n vi\xEAn'"
          nzWidth="800px" (nzOnCancel)="closePicker()" [nzFooter]="null">
  <ng-container *nzModalContent>
    <form class="row g-2 align-items-end mb-3" (ngSubmit)="pickerSearch()">
      <div class="col-md-8">
        <label class="form-label">{{ 'empSearch.field.keyword' | translate:'M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn' }}</label>
        <input nz-input [(ngModel)]="pickerKeyword" name="easPickerKeyword"
               [placeholder]="'empSearch.placeholder.keyword' | translate:'Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn'"
               (keydown.enter)="$event.preventDefault(); pickerSearch()">
      </div>
      <div class="col-md-4">
        <button nz-button nzType="primary" type="submit">
          <i class="bx bx-search"></i> {{ 'common.search' | translate:'T\xECm ki\u1EBFm' }}
        </button>
      </div>
    </form>

    <nz-table [nzData]="pickerRows()" [nzLoading]="pickerLoading()" [nzPageSize]="10" nzSize="small" #easPickerTable="nzTable">
      <thead>
        <tr>
          <th class="text-center" nzWidth="60px">{{ 'empSearch.col.no' | translate:'STT' }}</th>
          <th nzWidth="110px">{{ 'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
          <th>{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
          <th>{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
          <th>{{ 'common.position' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngIf="!pickerLoading() && easPickerTable.data.length === 0">
          <td colspan="5" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
        </tr>
        <tr *ngFor="let row of easPickerTable.data; let i = index" class="eas-picker-row" (click)="selectEmployee(row)">
          <td class="text-center">{{ i + 1 }}</td>
          <td>{{ row.empid }}</td>
          <td>{{ row.localName }}</td>
          <td>{{ row.deptname }}</td>
          <td>{{ row.postGradeName }}</td>
        </tr>
      </tbody>
    </nz-table>
  </ng-container>
</nz-modal>

<!-- Modal th\xEAm m\u1EDBi \u0111\u1ED1i t\u01B0\u1EE3ng \u0111\xE1nh gi\xE1 -->
<nz-modal [nzVisible]="addModalVisible()" [nzTitle]="'evs.viewEvsAffirmorSetup.addModalTitle' | translate:'Th\xEAm m\u1EDBi \u0111\u1ED1i t\u01B0\u1EE3ng \u0111\xE1nh gi\xE1'"
          nzWidth="700px" (nzOnCancel)="closeAddModal()" (nzOnOk)="saveNewObject()" [nzOkLoading]="adding()"
          [nzOkText]="'common.save' | translate:'L\u01B0u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <div class="mb-3">
      <label class="form-label fw-semibold">{{ 'evs.viewEvsAffirmorSetup.evalObject' | translate:'\u0110\u1ED1i t\u01B0\u1EE3ng \u0111\xE1nh gi\xE1' }} <span class="text-danger">*</span></label>
      <div class="input-group input-group-sm">
        <input class="form-control" readonly [value]="addForm.objectDisplay"
               [placeholder]="'evs.viewEvsAffirmorSetup.placeholder.selectEmployee' | translate:'Ch\u1ECDn nh\xE2n vi\xEAn...'">
        <button class="btn btn-outline-primary" type="button" (click)="openPicker({ kind: 'addField', field: 'object' })">
          <i class="bx bx-search"></i>
        </button>
        <button class="btn btn-outline-secondary" type="button" (click)="clearAddField('object')">
          <i class="bx bx-x"></i>
        </button>
      </div>
    </div>
    <div class="mb-3">
      <label class="form-label">{{ 'evs.viewEvsAffirmorSetup.YICIPINGJIAREN.a' | translate:'Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 l\u1EA7n 1' }}</label>
      <div class="input-group input-group-sm">
        <input class="form-control" readonly [value]="addForm.affirm1Display"
               [placeholder]="'evs.viewEvsAffirmorSetup.placeholder.selectEmployee' | translate:'Ch\u1ECDn nh\xE2n vi\xEAn...'">
        <button class="btn btn-outline-primary" type="button" (click)="openPicker({ kind: 'addField', field: 'affirm1' })">
          <i class="bx bx-search"></i>
        </button>
        <button class="btn btn-outline-secondary" type="button" (click)="clearAddField('affirm1')">
          <i class="bx bx-x"></i>
        </button>
      </div>
    </div>
    <div class="mb-3">
      <label class="form-label">{{ 'evs.viewEvsAffirmorSetup.LAINGCIPINGJIAREN.a' | translate:'Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 l\u1EA7n 2' }}</label>
      <div class="input-group input-group-sm">
        <input class="form-control" readonly [value]="addForm.affirm2Display"
               [placeholder]="'evs.viewEvsAffirmorSetup.placeholder.selectEmployee' | translate:'Ch\u1ECDn nh\xE2n vi\xEAn...'">
        <button class="btn btn-outline-primary" type="button" (click)="openPicker({ kind: 'addField', field: 'affirm2' })">
          <i class="bx bx-search"></i>
        </button>
        <button class="btn btn-outline-secondary" type="button" (click)="clearAddField('affirm2')">
          <i class="bx bx-x"></i>
        </button>
      </div>
    </div>
  </ng-container>
</nz-modal>

<!-- Modal x\xE1c nh\u1EADn x\xF3a -->
<nz-modal [nzVisible]="deleteVisible()" [nzTitle]="'common.confirm' | translate:'X\xE1c nh\u1EADn'"
          (nzOnCancel)="closeDeleteConfirm()" (nzOnOk)="confirmDelete()" [nzOkLoading]="deleting()"
          [nzOkText]="'evs.viewEvsAffirmorSetup.btnDelete' | translate:'X\xF3a'" nzOkDanger
          [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'">
  <ng-container *nzModalContent>
    <p class="mb-0">{{ 'evs.viewEvsAffirmorSetup.msg.confirmDelete' | translate:'B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a c\xE1c d\xF2ng \u0111\xE3 ch\u1ECDn kh\xF4ng?' }} ({{ tickedCount }})</p>
  </ng-container>
</nz-modal>

<!-- Modal loading t\u1EA1o m\u1EE5c ti\xEAu -->
<nz-modal [nzVisible]="creatingTarget()" [nzClosable]="false" [nzMaskClosable]="false" [nzFooter]="null" nzWidth="360px">
  <ng-container *nzModalContent>
    <div class="text-center py-3">
      <nz-spin nzSize="large"></nz-spin>
      <div class="fw-semibold mt-3">{{ 'evs.viewEvsAffirmorSetup.loadingTitle' | translate:'\u0110ang t\u1EA1o m\u1EE5c ti\xEAu...' }}</div>
      <div class="text-muted small mt-1">{{ 'evs.viewEvsAffirmorSetup.loadingMessage' | translate:'Vui l\xF2ng ch\u1EDD, qu\xE1 tr\xECnh n\xE0y c\xF3 th\u1EC3 m\u1EA5t v\xE0i ph\xFAt.' }}</div>
    </div>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/evs-affirmor-setup/evs-affirmor-setup.component.css */\n::ng-deep tr.eas-row-ticked {\n  background-color: #fff3cd !important;\n}\n::ng-deep .eas-affirm-display {\n  cursor: pointer;\n  display: inline-block;\n  min-width: 60px;\n  min-height: 1.2em;\n}\n::ng-deep .eas-affirm-display:hover {\n  text-decoration: underline dotted #aaa;\n}\n::ng-deep .eas-picker-row {\n  cursor: pointer;\n}\n/*# sourceMappingURL=evs-affirmor-setup.component.css.map */\n"] }]
  }], () => [{ type: EvsAffirmorSetupService }, { type: I18nService }, { type: NzMessageService }, { type: NzModalService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EvsAffirmorSetupComponent, { className: "EvsAffirmorSetupComponent", filePath: "src/app/evs-affirmor-setup/evs-affirmor-setup.component.ts", lineNumber: 140 });
})();
export {
  EvsAffirmorSetupComponent
};
//# debugId=eb509e5a-a790-5c13-8da7-b1f2d7c28e72
//# sourceMappingURL=chunk-DJTWJ6BA.js.map
