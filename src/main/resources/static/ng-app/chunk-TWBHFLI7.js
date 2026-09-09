import {
  NzInputNumberComponent,
  NzInputNumberModule
} from "./chunk-IXCMIWQQ.js";
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

// src/app/view-pa-supervisor/view-pa-supervisor.service.ts
var API_BASE = "/pa/wagebase/api/supervisor";
var ViewPaSupervisorService = class _ViewPaSupervisorService {
  constructor(http) {
    this.http = http;
  }
  http;
  getPageList(params) {
    let httpParams = new HttpParams().set("draw", params.draw).set("start", params.start).set("length", params.length);
    if (params.empSearch)
      httpParams = httpParams.set("empSearch", params.empSearch);
    if (params.deptNos)
      httpParams = httpParams.set("deptNos", params.deptNos);
    if (params.empOfficeSearch)
      httpParams = httpParams.set("empOfficeSearch", params.empOfficeSearch);
    return this.http.get(`${API_BASE}/list`, {
      params: httpParams,
      withCredentials: true
    });
  }
  getOne(personId) {
    return this.http.get(`${API_BASE}/${personId}`, { withCredentials: true });
  }
  save(payload) {
    return this.http.post(`${API_BASE}/save`, payload, { withCredentials: true });
  }
  delete(personId) {
    return this.http.delete(`${API_BASE}/delete/${personId}`, { withCredentials: true });
  }
  /** Toàn bộ cây phòng ban công ty (khác authorized-departments) - dùng để cấu hình phân quyền phòng
   *  ban cho 1 người phụ trách lương. */
  getDepartmentTree() {
    return this.http.get(`${API_BASE}/departments`, { withCredentials: true });
  }
  getSupervisorDepartments(personId) {
    return this.http.get(`${API_BASE}/${personId}/departments`, { withCredentials: true });
  }
  saveDepartments(personId, deptNoList) {
    return this.http.post(`${API_BASE}/${personId}/saveDepartments`, deptNoList, {
      withCredentials: true
    });
  }
  static \u0275fac = function ViewPaSupervisorService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewPaSupervisorService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewPaSupervisorService, factory: _ViewPaSupervisorService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewPaSupervisorService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-pa-supervisor/view-pa-supervisor.component.ts
var _c0 = () => ({ x: "900px", y: "calc(100vh - 480px)" });
var _c1 = () => ({ standalone: true });
function ViewPaSupervisorComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.deptTreeErrorMessage());
  }
}
function ViewPaSupervisorComponent_nz_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 51);
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r3.codeNo)("nzLabel", c_r3.codeName);
  }
}
function ViewPaSupervisorComponent_nz_alert_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 52);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ViewPaSupervisorComponent_tr_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 53);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewPaSupervisorComponent_tr_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 54);
    \u0275\u0275listener("click", function ViewPaSupervisorComponent_tr_71_Template_tr_click_0_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectSupervisor(row_r5));
    });
    \u0275\u0275elementStart(1, "td", 55);
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
    \u0275\u0275elementStart(9, "td", 55);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 55)(12, "button", 56);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275listener("click", function ViewPaSupervisorComponent_tr_71_Template_button_click_12_listener($event) {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditModal(row_r5, $event));
    });
    \u0275\u0275element(14, "i", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 58);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275listener("click", function ViewPaSupervisorComponent_tr_71_Template_button_click_15_listener($event) {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDeleteConfirm(row_r5, $event));
    });
    \u0275\u0275element(17, "i", 59);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("table-active", ctx_r1.selectedPersonId() === row_r5.personId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r1.pageIndex - 1) * ctx_r1.pageSize + i_r6 + 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.empId || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.empId);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.localName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.localName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.deptName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.deptName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.orderNo);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(13, 12, "common.edit", "S\u1EEDa"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(16, 15, "pa.supervisor.delete", "X\xF3a"));
  }
}
function ViewPaSupervisorComponent_ng_template_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r7 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r7, " ");
  }
}
function ViewPaSupervisorComponent_ng_container_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "span", 60);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, "pa.supervisor.rightPaneTitle", "S\u01A1 \u0111\u1ED3 T\u1ED5 ch\u1EE9c Ph\xE2n quy\u1EC1n"), ": ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedEmpLabel());
  }
}
function ViewPaSupervisorComponent_ng_template_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(1, 1, "pa.supervisor.rightPaneTitle", "S\u01A1 \u0111\u1ED3 T\u1ED5 ch\u1EE9c Ph\xE2n quy\u1EC1n"));
  }
}
function ViewPaSupervisorComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275element(1, "i", 62);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "pa.supervisor.infoPlaceholder", "Vui l\xF2ng ch\u1ECDn m\u1ED9t nh\xE2n vi\xEAn b\xEAn tr\xE1i \u0111\u1EC3 xem/c\u1EA5u h\xECnh ph\xE2n quy\u1EC1n ph\xF2ng ban."), " ");
  }
}
function ViewPaSupervisorComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275element(1, "i", 63);
    \u0275\u0275elementEnd();
  }
}
function ViewPaSupervisorComponent_div_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275element(1, "i", 65);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.deptInfoError(), " ");
  }
}
function ViewPaSupervisorComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"), " ");
  }
}
function ViewPaSupervisorComponent_nz_tree_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-tree", 67);
    \u0275\u0275listener("nzCheckedKeysChange", function ViewPaSupervisorComponent_nz_tree_90_Template_nz_tree_nzCheckedKeysChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDeptCheckedKeysChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzData", ctx_r1.deptTreeNodes())("nzCheckedKeys", ctx_r1.checkedDeptKeys());
  }
}
function ViewPaSupervisorComponent_ng_container_95_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 78);
    \u0275\u0275listener("click", function ViewPaSupervisorComponent_ng_container_95_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openPicker());
    });
    \u0275\u0275element(1, "i", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "arSupervisor.btn.select", "Ch\u1ECDn"), " ");
  }
}
function ViewPaSupervisorComponent_ng_container_95_small_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 79);
    \u0275\u0275element(1, "i", 80);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(3, 2, "arSupervisor.js.empSelected", "\u0110\xE3 ch\u1ECDn NV: "), "", ctx_r1.form.empDisplay, " ");
  }
}
function ViewPaSupervisorComponent_ng_container_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 68)(2, "div", 4)(3, "label", 69);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span", 70);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 71);
    \u0275\u0275element(9, "input", 72);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275template(11, ViewPaSupervisorComponent_ng_container_95_button_11_Template, 4, 4, "button", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ViewPaSupervisorComponent_ng_container_95_small_12_Template, 4, 5, "small", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 75)(14, "label", 69);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "nz-select", 76);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaSupervisorComponent_ng_container_95_Template_nz_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.activity, $event) || (ctx_r1.form.activity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(18, "nz-option", 51);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275element(20, "nz-option", 51);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 75)(23, "label", 69);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "nz-input-number", 77);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaSupervisorComponent_ng_container_95_Template_nz_input_number_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.orderNo, $event) || (ctx_r1.form.orderNo = $event);
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 15, "pa.supervisor.supervisor", "T\xEAn ng\u01B0\u1EDDi ph\u1EE5 tr\xE1ch"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r1.form.empDisplay)("ngModelOptions", \u0275\u0275pureFunction0(33, _c1))("placeholder", \u0275\u0275pipeBind2(10, 18, "pa.supervisor.empSelectPlaceholder", "Ch\u1ECDn nh\xE2n vi\xEAn..."));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isNew());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.personId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 21, "pa.supervisor.activity", "Tr\u1EA1ng th\xE1i"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.activity);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzValue", 1)("nzLabel", \u0275\u0275pipeBind2(19, 24, "pa.supervisor.activity.active", "Ho\u1EA1t \u0111\u1ED9ng"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzValue", 0)("nzLabel", \u0275\u0275pipeBind2(21, 27, "pa.supervisor.activity.inactive", "Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 30, "pa.supervisor.orderNo", "Th\u1EE9 t\u1EF1"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.orderNo);
    \u0275\u0275property("nzMin", 0);
    \u0275\u0275control();
  }
}
function ViewPaSupervisorComponent_ng_container_98_nz_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 51);
  }
  if (rf & 2) {
    const c_r12 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r12.codeNo)("nzLabel", c_r12.codeName);
  }
}
function ViewPaSupervisorComponent_ng_container_98_nz_alert_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 90);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzMessage", ctx_r1.pickerErrorMessage() ?? "");
  }
}
function ViewPaSupervisorComponent_ng_container_98_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 54);
    \u0275\u0275listener("click", function ViewPaSupervisorComponent_ng_container_98_tr_51_Template_tr_click_0_listener() {
      const row_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectEmployee(row_r14));
    });
    \u0275\u0275elementStart(1, "td", 55);
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
function ViewPaSupervisorComponent_ng_container_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 81);
    \u0275\u0275listener("ngSubmit", function ViewPaSupervisorComponent_ng_container_98_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pickerSearch());
    });
    \u0275\u0275elementStart(2, "div", 82)(3, "label", 8);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 83);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaSupervisorComponent_ng_container_98_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pickerKeyword, $event) || (ctx_r1.pickerKeyword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function ViewPaSupervisorComponent_ng_container_98_Template_input_keydown_enter_6_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r1.pickerSearch());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 10)(9, "label", 8);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "nz-tree-select", 84);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaSupervisorComponent_ng_container_98_Template_nz_tree_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pickerDeptNos, $event) || (ctx_r1.pickerDeptNos = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 7)(15, "label", 8);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "nz-select", 85);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaSupervisorComponent_ng_container_98_Template_nz_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pickerEmpOffice, $event) || (ctx_r1.pickerEmpOffice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(20, ViewPaSupervisorComponent_ng_container_98_nz_option_20_Template, 1, 2, "nz-option", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 86)(22, "button", 16);
    \u0275\u0275element(23, "i", 17);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 18);
    \u0275\u0275listener("click", function ViewPaSupervisorComponent_ng_container_98_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pickerClear());
    });
    \u0275\u0275element(27, "i", 19);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(30, ViewPaSupervisorComponent_ng_container_98_nz_alert_30_Template, 1, 1, "nz-alert", 87);
    \u0275\u0275elementStart(31, "nz-table", 88, 2)(33, "thead")(34, "tr")(35, "th", 29);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th", 30);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th");
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "th");
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "th");
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "tbody");
    \u0275\u0275template(51, ViewPaSupervisorComponent_ng_container_98_tr_51_Template, 11, 5, "tr", 89);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const vpsPickerTable_r16 = \u0275\u0275reference(32);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 23, "empSearch.field.keyword", "M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pickerKeyword);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(7, 26, "empSearch.placeholder.keyword", "Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 29, "empSearch.field.dept", "Ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzNodes", ctx_r1.deptNodes());
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pickerDeptNos);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(13, 32, "vdp.search.dept.placeholder", "Ch\u1ECDn ph\xF2ng ban"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 35, "empSearch.field.empOffice", "Tr\u1EA1ng th\xE1i l\xE0m vi\u1EC7c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pickerEmpOffice);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(19, 38, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.empOfficeOptions());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(25, 41, "common.search", "T\xECm ki\u1EBFm"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(29, 44, "empSearch.btn.clearFilter", "X\xF3a b\u1ED9 l\u1ECDc"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.pickerErrorMessage());
    \u0275\u0275advance();
    \u0275\u0275property("nzData", ctx_r1.pickerRows())("nzLoading", ctx_r1.pickerLoading())("nzPageSize", 10);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 47, "empSearch.col.no", "STT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 50, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 53, "common.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 56, "common.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 59, "epi.field.position", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", vpsPickerTable_r16.data);
  }
}
function ViewPaSupervisorComponent_ng_container_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 91);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 92);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "pa.supervisor.confirmDeleteFull", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a ng\u01B0\u1EDDi ph\u1EE5 tr\xE1ch n\xE0y? To\xE0n b\u1ED9 c\u1EA5u h\xECnh ph\xF2ng ban c\u0169ng s\u1EBD b\u1ECB x\xF3a!"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.deleteTargetName);
  }
}
var I18N_KEYS = [
  "pa.supervisor.pageTitle",
  "pa.supervisor.no",
  "pa.supervisor.empId",
  "pa.supervisor.localName",
  "pa.supervisor.dept",
  "pa.supervisor.deptPlaceholder",
  "pa.supervisor.empOffice",
  "pa.supervisor.empSearch",
  "pa.supervisor.createDate",
  "pa.supervisor.createdBy",
  "pa.supervisor.action",
  "pa.supervisor.supervisor",
  "pa.supervisor.empSelectPlaceholder",
  "pa.supervisor.activity",
  "pa.supervisor.activity.active",
  "pa.supervisor.activity.inactive",
  "pa.supervisor.orderNo",
  "pa.supervisor.search",
  "pa.supervisor.addNew",
  "pa.supervisor.delete",
  "pa.supervisor.save",
  "pa.supervisor.addTitle",
  "pa.supervisor.editTitle",
  "pa.supervisor.validateRequired",
  "pa.supervisor.leftPaneTitle",
  "pa.supervisor.rightPaneTitle",
  "pa.supervisor.infoPlaceholder",
  "pa.supervisor.saveDepts",
  "pa.supervisor.confirmDeleteFull",
  "pa.supervisor.deptSaved",
  "common.confirm",
  "common.cancel",
  "common.close",
  "common.search",
  "common.clearFilter",
  "common.noData",
  "common.totalRows",
  "common.selectAll",
  "common.loadFail",
  "common.saveSuccess",
  "common.saveFail",
  "common.deleteSuccess",
  "common.deleteFail",
  "common.empId",
  "common.empName",
  "common.deptName",
  "common.edit",
  "essDept.exportExcel",
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
var PAGE_SIZE_OPTIONS = [10, 20, 50, 100];
var EMPTY_FORM = { personId: null, empDisplay: "", activity: 1, orderNo: 0 };
var ViewPaSupervisorComponent = class _ViewPaSupervisorComponent {
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
  deptNos = [];
  empOfficeSearch = null;
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
  deptChildrenMap = /* @__PURE__ */ new Map();
  // ==================== Cây phòng ban bên phải (cấu hình cho supervisor đang chọn) ====================
  deptTreeItems = [];
  deptTreeNodes = signal(
    [],
    ...ngDevMode ? [{ debugName: "deptTreeNodes" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedPersonId = signal(
    null,
    ...ngDevMode ? [{ debugName: "selectedPersonId" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedEmpLabel = signal(
    null,
    ...ngDevMode ? [{ debugName: "selectedEmpLabel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  checkedDeptKeys = signal(
    [],
    ...ngDevMode ? [{ debugName: "checkedDeptKeys" }] : (
      /* istanbul ignore next */
      []
    )
  );
  deptInfoLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "deptInfoLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  deptInfoError = signal(
    null,
    ...ngDevMode ? [{ debugName: "deptInfoError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  savingDepts = signal(
    false,
    ...ngDevMode ? [{ debugName: "savingDepts" }] : (
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
  // ==================== Popup tìm kiếm nhân viên (tái dùng pattern ChangeUserComponent) ====================
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
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
    this.api.getDepartmentTree().subscribe({
      next: (list) => {
        this.deptTreeItems = list ?? [];
        this.deptTreeNodes.set(this.buildFullDeptTree(this.deptTreeItems));
      },
      error: () => this.deptTreeNodes.set([])
    });
    this.empApi.getCodeList(EMP_OFFICE_PARENT_CODE).subscribe((list) => this.empOfficeOptions.set(list ?? []));
    this.search();
  }
  loadDeptTree() {
    this.empApi.getAuthorizedDepartments().subscribe({
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
  buildFullDeptTree(list) {
    const map = /* @__PURE__ */ new Map();
    list.forEach((d) => {
      let parent = d.parent;
      if (!parent || parent === d.id || parent === "0")
        parent = "#";
      map.set(d.id, { title: `${d.text} (${d.id})`, key: d.id, parent, children: [] });
    });
    const roots = [];
    map.forEach((node) => {
      if (node.parent !== "#" && map.has(node.parent)) {
        map.get(node.parent).children.push(node);
      } else {
        roots.push(node);
      }
    });
    const markLeaf = (nodes) => {
      nodes.forEach((n) => {
        n.isLeaf = !n.children || n.children.length === 0;
        n.expanded = true;
        if (n.children?.length)
          markLeaf(n.children);
      });
    };
    markLeaf(roots);
    return roots;
  }
  /** nz-tree-select chỉ trả về key của node được tick trực tiếp - mở rộng xuống các phòng ban con để
   *  khớp hành vi cascade của widget DeptTree.js gốc (xem giải thích ở ManageEmpPositionInfoComponent). */
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
  empOfficeLabel(code) {
    if (!code)
      return "";
    return this.empOfficeOptions().find((c) => c.codeNo === code)?.codeName || code;
  }
  // ==================== Tra cứu ====================
  search() {
    this.pageIndex = 1;
    this.resetRightPane();
    this.loadPage();
  }
  clearSearch() {
    this.empSearch = "";
    this.deptNos = [];
    this.empOfficeSearch = null;
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
      empSearch: this.empSearch.trim(),
      deptNos: this.expandDeptSelection(this.deptNos).join(","),
      empOfficeSearch: this.empOfficeSearch,
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
  // ==================== Chọn dòng -> cấu hình phòng ban bên phải ====================
  empLabel(row) {
    return row.empId ? `${row.empId} - ${row.localName ?? ""}` : row.personId;
  }
  selectSupervisor(row) {
    this.selectedPersonId.set(row.personId);
    this.selectedEmpLabel.set(this.empLabel(row));
    this.deptInfoLoading.set(true);
    this.deptInfoError.set(null);
    this.checkedDeptKeys.set([]);
    this.api.getSupervisorDepartments(row.personId).subscribe({
      next: (depts) => {
        this.checkedDeptKeys.set(depts ?? []);
        this.deptInfoLoading.set(false);
      },
      error: () => {
        this.deptInfoError.set(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.deptInfoLoading.set(false);
      }
    });
  }
  resetRightPane() {
    this.selectedPersonId.set(null);
    this.selectedEmpLabel.set(null);
    this.checkedDeptKeys.set([]);
    this.deptInfoError.set(null);
  }
  /** nzCheckedKeysChange trả thẳng danh sách key đã cascade cha/con - nz-tree tự lo phần này, không
   *  cần tự viết đệ quy như hàm dept-checkbox change ở bản gốc. */
  onDeptCheckedKeysChange(keys) {
    this.checkedDeptKeys.set(keys.map(String));
  }
  saveDepartments() {
    const personId = this.selectedPersonId();
    if (!personId)
      return;
    const keys = this.checkedDeptKeys();
    this.savingDepts.set(true);
    this.api.saveDepartments(personId, keys).subscribe({
      next: () => {
        this.savingDepts.set(false);
        this.message.success(this.i18n.t("pa.supervisor.deptSaved", "L\u01B0u ph\xE2n quy\u1EC1n ph\xF2ng ban th\xE0nh c\xF4ng!"));
      },
      error: () => {
        this.savingDepts.set(false);
        this.message.error(this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  // ==================== Modal Thêm mới / Chỉnh sửa ====================
  openAddModal() {
    this.isNew.set(true);
    this.form = __spreadValues({}, EMPTY_FORM);
    this.modalVisible.set(true);
  }
  openEditModal(row, event) {
    event.stopPropagation();
    this.api.getOne(row.personId).subscribe({
      next: (d) => {
        this.isNew.set(false);
        this.form = {
          personId: d.personId,
          empDisplay: `${d.empId || ""} - ${d.localName || ""}`,
          activity: d.activity != null ? d.activity : 1,
          orderNo: d.orderNo != null ? d.orderNo : 0
        };
        this.modalVisible.set(true);
      },
      error: (err) => {
        this.message.error(err?.error?.error || this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  closeModal() {
    this.modalVisible.set(false);
  }
  saveForm() {
    if (!this.form.personId) {
      this.message.warning(this.i18n.t("pa.supervisor.validateRequired", "Vui l\xF2ng ch\u1ECDn ng\u01B0\u1EDDi ph\u1EE5 tr\xE1ch!"));
      return;
    }
    const payload = {
      personId: this.form.personId,
      activity: this.form.activity,
      orderNo: this.form.orderNo ?? 0
    };
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.message.success(res.message || this.i18n.t("common.saveSuccess", "L\u01B0u th\xE0nh c\xF4ng!"));
        this.loadPage();
      },
      error: (err) => {
        this.saving.set(false);
        const msg = err?.error?.error || this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!");
        this.message.error(msg);
      }
    });
  }
  // ==================== Popup tìm kiếm nhân viên ====================
  openPicker() {
    this.pickerKeyword = "";
    this.pickerDeptNos = [];
    this.pickerEmpOffice = null;
    this.pickerRows.set([]);
    this.pickerErrorMessage.set(null);
    this.pickerVisible.set(true);
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
  // ==================== Xóa ====================
  openDeleteConfirm(row, event) {
    event.stopPropagation();
    this.deleteTarget = row;
    this.deleteVisible.set(true);
  }
  closeDeleteConfirm() {
    this.deleteVisible.set(false);
  }
  get deleteTargetName() {
    return this.deleteTarget ? this.empLabel(this.deleteTarget) : "";
  }
  confirmDelete() {
    if (!this.deleteTarget)
      return;
    const personId = this.deleteTarget.personId;
    this.deleting.set(true);
    this.api.delete(personId).subscribe({
      next: (res) => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.message.success(res.message || this.i18n.t("common.deleteSuccess", "X\xF3a th\xE0nh c\xF4ng!"));
        if (this.selectedPersonId() === personId)
          this.resetRightPane();
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
      deptNos: this.expandDeptSelection(this.deptNos).join(","),
      empOfficeSearch: this.empOfficeSearch,
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
      this.i18n.t("pa.supervisor.no", "STT"),
      this.i18n.t("pa.supervisor.empId", "M\xE3 nh\xE2n vi\xEAn"),
      this.i18n.t("pa.supervisor.localName", "H\u1ECD t\xEAn"),
      this.i18n.t("pa.supervisor.dept", "Ph\xF2ng ban"),
      this.i18n.t("pa.supervisor.empOffice", "Tr\u1EA1ng th\xE1i l\xE0m vi\u1EC7c"),
      this.i18n.t("pa.supervisor.orderNo", "Th\u1EE9 t\u1EF1"),
      this.i18n.t("pa.supervisor.createdBy", "Ng\u01B0\u1EDDi t\u1EA1o"),
      this.i18n.t("pa.supervisor.createDate", "Th\u1EDDi gian t\u1EA1o")
    ];
    const dataRows = list.map((r, i) => [
      i + 1,
      r.empId,
      r.localName,
      r.deptName,
      this.empOfficeLabel(r.empOffice),
      r.orderNo,
      r.createdBy,
      this.toDmy(r.createDate)
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "NguoiPhuTrachLuong");
    writeFileSync(workbook, "pa_supervisor_list.xlsx");
  }
  /** Chuyển 'YYYY-MM-DD' (BE) sang 'dd/MM/yyyy' để hiển thị theo CLAUDE.md. */
  toDmy(ymd) {
    if (!ymd)
      return "";
    const [y, m, d] = ymd.split("-");
    return y && m && d ? `${d}/${m}/${y}` : ymd;
  }
  static \u0275fac = function ViewPaSupervisorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewPaSupervisorComponent)(\u0275\u0275directiveInject(ViewPaSupervisorService), \u0275\u0275directiveInject(ChangeUserService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewPaSupervisorComponent, selectors: [["app-view-pa-supervisor"]], decls: 104, vars: 135, consts: [["vpsTotalTpl", ""], ["vpsNoSelLabel", ""], ["vpsPickerTable", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["nz-input", "", "name", "vpsEmpSearch", 3, "ngModelChange", "ngModel", "placeholder"], [1, "col-md-4"], ["name", "vpsDeptNos", "nzCheckable", "", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["class", "text-danger small mt-1", 4, "ngIf"], ["name", "vpsEmpOfficeSearch", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col-12", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzType", "default", "type", "button", 1, "vps-btn-export", 3, "click", "nzLoading"], [1, "bx", "bx-export"], [1, "col-md-6", "mb-3"], [1, "h-100"], [1, "mb-3", "text-primary", "fw-bold", "border-bottom", "pb-2"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], ["nzShowSizeChanger", "", "nzSize", "small", 3, "nzPageIndexChange", "nzPageSizeChange", "nzData", "nzFrontPagination", "nzLoading", "nzTotal", "nzPageIndex", "nzPageSize", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "110px"], ["nzWidth", "160px"], ["nzWidth", "80px", 1, "text-center"], ["nzWidth", "90px", 1, "text-center"], [4, "ngIf"], ["class", "vps-row-clickable", 3, "table-active", "click", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3", "border-bottom", "pb-2"], [1, "mb-0", "fw-bold"], [4, "ngIf", "ngIfElse"], ["nz-button", "", "nzType", "primary", "nzSize", "small", "type", "button", 3, "click", "disabled", "nzLoading"], [1, "bx", "bx-save"], ["class", "p-2 bg-light border-bottom text-muted", 4, "ngIf"], ["class", "p-2 bg-light border-bottom text-danger", 4, "ngIf"], [1, "vps-tree-scroll", "mt-2"], ["class", "text-muted p-2", 4, "ngIf"], ["nzCheckable", "", 3, "nzData", "nzCheckedKeys", "nzCheckedKeysChange", 4, "ngIf"], ["nzWidth", "500px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], ["nzWidth", "900px", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzFooter"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [1, "text-danger", "small", "mt-1"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "6", 1, "text-center", "text-muted"], [1, "vps-row-clickable", 3, "click"], [1, "text-center"], ["nz-button", "", "nzType", "text", "nzSize", "small", 3, "click", "title"], [1, "bx", "bx-edit"], ["nz-button", "", "nzType", "text", "nzSize", "small", "nzDanger", "", 3, "click", "title"], [1, "bx", "bx-trash"], [1, "text-primary"], [1, "p-2", "bg-light", "border-bottom", "text-muted"], [1, "bx", "bx-info-circle"], [1, "bx", "bx-loader-alt", "bx-spin"], [1, "p-2", "bg-light", "border-bottom", "text-danger"], [1, "bx", "bx-error"], [1, "text-muted", "p-2"], ["nzCheckable", "", 3, "nzCheckedKeysChange", "nzData", "nzCheckedKeys"], [1, "row", "g-3"], [1, "form-label", "fw-semibold"], [1, "text-danger"], [1, "d-flex", "gap-2"], ["nz-input", "", "name", "vpsEmpDisplay", "readonly", "", 3, "ngModel", "ngModelOptions", "placeholder"], ["nz-button", "", "nzType", "default", "type", "button", 3, "click", 4, "ngIf"], ["class", "text-success d-block mt-1", 4, "ngIf"], [1, "col-md-6"], ["name", "vpsFormActivity", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vpsFormOrderNo", 1, "w-100", 3, "ngModelChange", "ngModel", "nzMin"], ["nz-button", "", "nzType", "default", "type", "button", 3, "click"], [1, "text-success", "d-block", "mt-1"], [1, "bx", "bx-check"], [1, "row", "g-2", "align-items-end", "mb-3", 3, "ngSubmit"], [1, "col-md-5"], ["nz-input", "", "name", "vpsPickerKeyword", 3, "ngModelChange", "keydown.enter", "ngModel", "placeholder"], ["name", "vpsPickerDeptNos", "nzCheckable", "", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["name", "vpsPickerEmpOffice", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [1, "col-12", "d-flex", "gap-2"], ["nzType", "error", "class", "mb-2", 3, "nzMessage", 4, "ngIf"], ["nzSize", "small", 3, "nzData", "nzLoading", "nzPageSize"], ["class", "vps-row-clickable", 3, "click", 4, "ngFor", "ngForOf"], ["nzType", "error", 1, "mb-2", 3, "nzMessage"], [1, "mb-1"], [1, "fw-bold", "mb-0"]], template: function ViewPaSupervisorComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "nz-card", 5)(3, "form", 6);
      \u0275\u0275listener("ngSubmit", function ViewPaSupervisorComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 7)(5, "label", 8);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 9);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewPaSupervisorComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.empSearch, $event) || (ctx.empSearch = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 10)(11, "label", 8);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "nz-tree-select", 11);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewPaSupervisorComponent_Template_nz_tree_select_ngModelChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.deptNos, $event) || (ctx.deptNos = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275template(16, ViewPaSupervisorComponent_div_16_Template, 2, 1, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 7)(18, "label", 8);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "nz-select", 13);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewPaSupervisorComponent_Template_nz_select_ngModelChange_21_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.empOfficeSearch, $event) || (ctx.empOfficeSearch = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(23, ViewPaSupervisorComponent_nz_option_23_Template, 1, 2, "nz-option", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 15)(25, "button", 16);
      \u0275\u0275element(26, "i", 17);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "button", 18);
      \u0275\u0275listener("click", function ViewPaSupervisorComponent_Template_button_click_29_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(30, "i", 19);
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "button", 20);
      \u0275\u0275listener("click", function ViewPaSupervisorComponent_Template_button_click_33_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(34, "i", 21);
      \u0275\u0275text(35);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "button", 22);
      \u0275\u0275listener("click", function ViewPaSupervisorComponent_Template_button_click_37_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(38, "i", 23);
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(41, "div", 3)(42, "div", 24)(43, "nz-card", 25)(44, "h6", 26);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(47, ViewPaSupervisorComponent_nz_alert_47_Template, 1, 1, "nz-alert", 27);
      \u0275\u0275elementStart(48, "nz-table", 28);
      \u0275\u0275listener("nzPageIndexChange", function ViewPaSupervisorComponent_Template_nz_table_nzPageIndexChange_48_listener($event) {
        return ctx.onPageIndexChange($event);
      })("nzPageSizeChange", function ViewPaSupervisorComponent_Template_nz_table_nzPageSizeChange_48_listener($event) {
        return ctx.onPageSizeChange($event);
      });
      \u0275\u0275elementStart(49, "thead")(50, "tr")(51, "th", 29);
      \u0275\u0275text(52);
      \u0275\u0275pipe(53, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "th", 30);
      \u0275\u0275text(55);
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "th", 31);
      \u0275\u0275text(58);
      \u0275\u0275pipe(59, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "th", 31);
      \u0275\u0275text(61);
      \u0275\u0275pipe(62, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "th", 32);
      \u0275\u0275text(64);
      \u0275\u0275pipe(65, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "th", 33);
      \u0275\u0275text(67);
      \u0275\u0275pipe(68, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(69, "tbody");
      \u0275\u0275template(70, ViewPaSupervisorComponent_tr_70_Template, 4, 4, "tr", 34)(71, ViewPaSupervisorComponent_tr_71_Template, 18, 18, "tr", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275template(72, ViewPaSupervisorComponent_ng_template_72_Template, 2, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(74, "div", 24)(75, "nz-card", 25)(76, "div", 36)(77, "h6", 37);
      \u0275\u0275template(78, ViewPaSupervisorComponent_ng_container_78_Template, 5, 5, "ng-container", 38)(79, ViewPaSupervisorComponent_ng_template_79_Template, 2, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "button", 39);
      \u0275\u0275listener("click", function ViewPaSupervisorComponent_Template_button_click_81_listener() {
        return ctx.saveDepartments();
      });
      \u0275\u0275element(82, "i", 40);
      \u0275\u0275text(83);
      \u0275\u0275pipe(84, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(85, ViewPaSupervisorComponent_div_85_Template, 4, 4, "div", 41)(86, ViewPaSupervisorComponent_div_86_Template, 2, 0, "div", 41)(87, ViewPaSupervisorComponent_div_87_Template, 3, 1, "div", 42);
      \u0275\u0275elementStart(88, "div", 43);
      \u0275\u0275template(89, ViewPaSupervisorComponent_div_89_Template, 3, 4, "div", 44)(90, ViewPaSupervisorComponent_nz_tree_90_Template, 1, 2, "nz-tree", 45);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(91, "nz-modal", 46);
      \u0275\u0275pipe(92, "translate");
      \u0275\u0275pipe(93, "translate");
      \u0275\u0275pipe(94, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewPaSupervisorComponent_Template_nz_modal_nzOnCancel_91_listener() {
        return ctx.closeModal();
      })("nzOnOk", function ViewPaSupervisorComponent_Template_nz_modal_nzOnOk_91_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(95, ViewPaSupervisorComponent_ng_container_95_Template, 27, 34, "ng-container", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "nz-modal", 48);
      \u0275\u0275pipe(97, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewPaSupervisorComponent_Template_nz_modal_nzOnCancel_96_listener() {
        return ctx.closePicker();
      });
      \u0275\u0275template(98, ViewPaSupervisorComponent_ng_container_98_Template, 52, 62, "ng-container", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "nz-modal", 49);
      \u0275\u0275pipe(100, "translate");
      \u0275\u0275pipe(101, "translate");
      \u0275\u0275pipe(102, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewPaSupervisorComponent_Template_nz_modal_nzOnCancel_99_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function ViewPaSupervisorComponent_Template_nz_modal_nzOnOk_99_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(103, ViewPaSupervisorComponent_ng_container_103_Template, 6, 5, "ng-container", 47);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const vpsTotalTpl_r17 = \u0275\u0275reference(73);
      const vpsNoSelLabel_r18 = \u0275\u0275reference(80);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 59, "pa.supervisor.empSearch", "M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.empSearch);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 62, "pa.supervisor.empSearch", "M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 65, "pa.supervisor.dept", "Ph\xF2ng ban"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzNodes", ctx.deptNodes());
      \u0275\u0275twoWayProperty("ngModel", ctx.deptNos);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(15, 68, "pa.supervisor.deptPlaceholder", "Ch\u1ECDn ph\xF2ng ban"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.deptTreeErrorMessage());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 71, "pa.supervisor.empOffice", "Tr\u1EA1ng th\xE1i l\xE0m vi\u1EC7c"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.empOfficeSearch);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(22, 74, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.empOfficeOptions());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(28, 77, "pa.supervisor.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(32, 80, "common.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(36, 83, "pa.supervisor.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.exporting());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(40, 86, "essDept.exportExcel", "Xu\u1EA5t excel"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 89, "pa.supervisor.leftPaneTitle", "Danh s\xE1ch ng\u01B0\u1EDDi ph\u1EE5 tr\xE1ch l\u01B0\u01A1ng"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzFrontPagination", false)("nzLoading", ctx.loading())("nzTotal", ctx.recordsFiltered())("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", vpsTotalTpl_r17)("nzScroll", \u0275\u0275pureFunction0(134, _c0));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(53, 92, "pa.supervisor.no", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(56, 95, "pa.supervisor.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(59, 98, "pa.supervisor.localName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(62, 101, "pa.supervisor.dept", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(65, 104, "pa.supervisor.orderNo", "Th\u1EE9 t\u1EF1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(68, 107, "pa.supervisor.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.rows());
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.selectedEmpLabel())("ngIfElse", vpsNoSelLabel_r18);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", !ctx.selectedPersonId())("nzLoading", ctx.savingDepts());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(84, 110, "pa.supervisor.saveDepts", "L\u01B0u ph\xE2n quy\u1EC1n ph\xF2ng ban"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.selectedPersonId());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedPersonId() && ctx.deptInfoLoading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedPersonId() && !ctx.deptInfoLoading() && ctx.deptInfoError());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.deptTreeNodes().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedPersonId() && !ctx.deptInfoLoading() && ctx.deptTreeNodes().length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", \u0275\u0275pipeBind2(92, 113, ctx.isNew() ? "pa.supervisor.addTitle" : "pa.supervisor.editTitle", ctx.isNew() ? "Th\xEAm m\u1EDBi ng\u01B0\u1EDDi ph\u1EE5 tr\xE1ch l\u01B0\u01A1ng" : "Ch\u1EC9nh s\u1EEDa ng\u01B0\u1EDDi ph\u1EE5 tr\xE1ch l\u01B0\u01A1ng"))("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(93, 116, "pa.supervisor.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(94, 119, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(5);
      \u0275\u0275property("nzVisible", ctx.pickerVisible())("nzTitle", \u0275\u0275pipeBind2(97, 122, "empSearch.title", "T\xECm ki\u1EBFm nh\xE2n vi\xEAn"))("nzFooter", null);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(100, 125, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(101, 128, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(102, 131, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzInputNumberModule, NzInputNumberComponent, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzTreeSelectModule, NzTreeSelectComponent, NzTreeModule, NzTreeComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\n.vps-btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n.vps-row-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.vps-tree-scroll[_ngcontent-%COMP%] {\n  max-height: calc(100vh - 480px);\n  overflow-y: auto;\n}\n/*# sourceMappingURL=view-pa-supervisor.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewPaSupervisorComponent, [{
    type: Component,
    args: [{ selector: "app-view-pa-supervisor", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzInputNumberModule,
      NzSelectModule,
      NzButtonModule,
      NzTreeSelectModule,
      NzTreeModule,
      NzModalModule,
      NzAlertModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3" (ngSubmit)="search()">
        <div class="col-md-3">
          <label class="form-label">{{ 'pa.supervisor.empSearch' | translate:'M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn' }}</label>
          <input nz-input [(ngModel)]="empSearch" name="vpsEmpSearch"
                 [placeholder]="'pa.supervisor.empSearch' | translate:'M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn'">
        </div>
        <div class="col-md-4">
          <label class="form-label">{{ 'pa.supervisor.dept' | translate:'Ph\xF2ng ban' }}</label>
          <nz-tree-select class="w-100" [nzNodes]="deptNodes()" [(ngModel)]="deptNos" name="vpsDeptNos"
                           nzCheckable nzShowSearch nzAllowClear
                           [nzPlaceHolder]="'pa.supervisor.deptPlaceholder' | translate:'Ch\u1ECDn ph\xF2ng ban'"></nz-tree-select>
          <div *ngIf="deptTreeErrorMessage()" class="text-danger small mt-1">{{ deptTreeErrorMessage() }}</div>
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'pa.supervisor.empOffice' | translate:'Tr\u1EA1ng th\xE1i l\xE0m vi\u1EC7c' }}</label>
          <nz-select class="w-100" [(ngModel)]="empOfficeSearch" name="vpsEmpOfficeSearch" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let c of empOfficeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-12 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'pa.supervisor.search' | translate:'Tra c\u1EE9u' }}
          </button>
          <button nz-button type="button" (click)="clearSearch()">
            <i class="bx bx-x"></i> {{ 'common.clearFilter' | translate:'X\xF3a l\u1ECDc' }}
          </button>
          <button nz-button nzType="primary" type="button" (click)="openAddModal()">
            <i class="bx bx-plus"></i> {{ 'pa.supervisor.addNew' | translate:'Th\xEAm m\u1EDBi' }}
          </button>
          <button nz-button nzType="default" type="button" class="vps-btn-export" [nzLoading]="exporting()" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'essDept.exportExcel' | translate:'Xu\u1EA5t excel' }}
          </button>
        </div>
      </form>
    </nz-card>

    <div class="row">
      <!-- Danh s\xE1ch ng\u01B0\u1EDDi ph\u1EE5 tr\xE1ch l\u01B0\u01A1ng b\xEAn tr\xE1i -->
      <div class="col-md-6 mb-3">
        <nz-card class="h-100">
          <h6 class="mb-3 text-primary fw-bold border-bottom pb-2">{{ 'pa.supervisor.leftPaneTitle' | translate:'Danh s\xE1ch ng\u01B0\u1EDDi ph\u1EE5 tr\xE1ch l\u01B0\u01A1ng' }}</h6>
          <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

          <!-- nzWidth khai b\xE1o cho t\u1EEBng c\u1ED9t \u0111\u1EC3 \u0111\u1ED3ng b\u1ED9 \u0111\u1ED9 r\u1ED9ng header/body khi d\xF9ng nzScroll. -->
          <nz-table [nzData]="rows()" [nzFrontPagination]="false" [nzLoading]="loading()"
                    [nzTotal]="recordsFiltered()" [nzPageIndex]="pageIndex" [nzPageSize]="pageSize"
                    [nzPageSizeOptions]="pageSizeOptions" nzShowSizeChanger [nzShowTotal]="vpsTotalTpl"
                    (nzPageIndexChange)="onPageIndexChange($event)" (nzPageSizeChange)="onPageSizeChange($event)"
                    [nzScroll]="{ x: '900px', y: 'calc(100vh - 480px)' }" nzSize="small">
            <thead>
              <tr>
                <th class="text-center" nzWidth="60px">{{ 'pa.supervisor.no' | translate:'STT' }}</th>
                <th nzWidth="110px">{{ 'pa.supervisor.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
                <th nzWidth="160px">{{ 'pa.supervisor.localName' | translate:'H\u1ECD t\xEAn' }}</th>
                <th nzWidth="160px">{{ 'pa.supervisor.dept' | translate:'Ph\xF2ng ban' }}</th>
                <th class="text-center" nzWidth="80px">{{ 'pa.supervisor.orderNo' | translate:'Th\u1EE9 t\u1EF1' }}</th>
                <th class="text-center" nzWidth="90px">{{ 'pa.supervisor.action' | translate:'Thao t\xE1c' }}</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngIf="!loading() && rows().length === 0">
                <td colspan="6" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
              </tr>
              <tr *ngFor="let row of rows(); let i = index" class="vps-row-clickable"
                  [class.table-active]="selectedPersonId() === row.personId" (click)="selectSupervisor(row)">
                <td class="text-center">{{ (pageIndex - 1) * pageSize + i + 1 }}</td>
                <td [attr.title]="row.empId || null">{{ row.empId }}</td>
                <td [attr.title]="row.localName || null">{{ row.localName }}</td>
                <td [attr.title]="row.deptName || null">{{ row.deptName }}</td>
                <td class="text-center">{{ row.orderNo }}</td>
                <td class="text-center">
                  <button nz-button nzType="text" nzSize="small" [title]="'common.edit' | translate:'S\u1EEDa'" (click)="openEditModal(row, $event)">
                    <i class="bx bx-edit"></i>
                  </button>
                  <button nz-button nzType="text" nzSize="small" nzDanger [title]="'pa.supervisor.delete' | translate:'X\xF3a'" (click)="openDeleteConfirm(row, $event)">
                    <i class="bx bx-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
            <ng-template #vpsTotalTpl let-total>
              {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
            </ng-template>
          </nz-table>
        </nz-card>
      </div>

      <!-- C\u1EA5u h\xECnh nh\xF3m ph\xF2ng ban b\xEAn ph\u1EA3i -->
      <div class="col-md-6 mb-3">
        <nz-card class="h-100">
          <div class="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
            <h6 class="mb-0 fw-bold">
              <ng-container *ngIf="selectedEmpLabel(); else vpsNoSelLabel">
                {{ 'pa.supervisor.rightPaneTitle' | translate:'S\u01A1 \u0111\u1ED3 T\u1ED5 ch\u1EE9c Ph\xE2n quy\u1EC1n' }}:
                <span class="text-primary">{{ selectedEmpLabel() }}</span>
              </ng-container>
              <ng-template #vpsNoSelLabel>{{ 'pa.supervisor.rightPaneTitle' | translate:'S\u01A1 \u0111\u1ED3 T\u1ED5 ch\u1EE9c Ph\xE2n quy\u1EC1n' }}</ng-template>
            </h6>
            <button nz-button nzType="primary" nzSize="small" type="button"
                    [disabled]="!selectedPersonId()" [nzLoading]="savingDepts()" (click)="saveDepartments()">
              <i class="bx bx-save"></i> {{ 'pa.supervisor.saveDepts' | translate:'L\u01B0u ph\xE2n quy\u1EC1n ph\xF2ng ban' }}
            </button>
          </div>

          <div *ngIf="!selectedPersonId()" class="p-2 bg-light border-bottom text-muted">
            <i class="bx bx-info-circle"></i> {{ 'pa.supervisor.infoPlaceholder' | translate:'Vui l\xF2ng ch\u1ECDn m\u1ED9t nh\xE2n vi\xEAn b\xEAn tr\xE1i \u0111\u1EC3 xem/c\u1EA5u h\xECnh ph\xE2n quy\u1EC1n ph\xF2ng ban.' }}
          </div>
          <div *ngIf="selectedPersonId() && deptInfoLoading()" class="p-2 bg-light border-bottom text-muted">
            <i class="bx bx-loader-alt bx-spin"></i>
          </div>
          <div *ngIf="selectedPersonId() && !deptInfoLoading() && deptInfoError()" class="p-2 bg-light border-bottom text-danger">
            <i class="bx bx-error"></i> {{ deptInfoError() }}
          </div>

          <div class="vps-tree-scroll mt-2">
            <div *ngIf="deptTreeNodes().length === 0" class="text-muted p-2">
              {{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}
            </div>
            <nz-tree *ngIf="selectedPersonId() && !deptInfoLoading() && deptTreeNodes().length > 0"
                     [nzData]="deptTreeNodes()" nzCheckable [nzCheckedKeys]="checkedDeptKeys()"
                     (nzCheckedKeysChange)="onDeptCheckedKeysChange($event)"></nz-tree>
          </div>
        </nz-card>
      </div>
    </div>
  </div>
</div>

<!-- Modal Th\xEAm m\u1EDBi / Ch\u1EC9nh s\u1EEDa ng\u01B0\u1EDDi ph\u1EE5 tr\xE1ch l\u01B0\u01A1ng -->
<nz-modal [nzVisible]="modalVisible()"
          [nzTitle]="(isNew() ? 'pa.supervisor.addTitle' : 'pa.supervisor.editTitle') | translate:(isNew() ? 'Th\xEAm m\u1EDBi ng\u01B0\u1EDDi ph\u1EE5 tr\xE1ch l\u01B0\u01A1ng' : 'Ch\u1EC9nh s\u1EEDa ng\u01B0\u1EDDi ph\u1EE5 tr\xE1ch l\u01B0\u01A1ng')"
          nzWidth="500px" (nzOnCancel)="closeModal()" (nzOnOk)="saveForm()" [nzOkLoading]="saving()"
          [nzOkText]="'pa.supervisor.save' | translate:'L\u01B0u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <div class="row g-3">
      <div class="col-12">
        <label class="form-label fw-semibold">
          {{ 'pa.supervisor.supervisor' | translate:'T\xEAn ng\u01B0\u1EDDi ph\u1EE5 tr\xE1ch' }} <span class="text-danger">*</span>
        </label>
        <div class="d-flex gap-2">
          <input nz-input [ngModel]="form.empDisplay" name="vpsEmpDisplay" readonly
                 [ngModelOptions]="{ standalone: true }"
                 [placeholder]="'pa.supervisor.empSelectPlaceholder' | translate:'Ch\u1ECDn nh\xE2n vi\xEAn...'">
          <button *ngIf="isNew()" nz-button nzType="default" type="button" (click)="openPicker()">
            <i class="bx bx-search"></i> {{ 'arSupervisor.btn.select' | translate:'Ch\u1ECDn' }}
          </button>
        </div>
        <small *ngIf="form.personId" class="text-success d-block mt-1">
          <i class="bx bx-check"></i> {{ 'arSupervisor.js.empSelected' | translate:'\u0110\xE3 ch\u1ECDn NV: ' }}{{ form.empDisplay }}
        </small>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.supervisor.activity' | translate:'Tr\u1EA1ng th\xE1i' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.activity" name="vpsFormActivity">
          <nz-option [nzValue]="1" [nzLabel]="'pa.supervisor.activity.active' | translate:'Ho\u1EA1t \u0111\u1ED9ng'"></nz-option>
          <nz-option [nzValue]="0" [nzLabel]="'pa.supervisor.activity.inactive' | translate:'Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng'"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'pa.supervisor.orderNo' | translate:'Th\u1EE9 t\u1EF1' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.orderNo" name="vpsFormOrderNo" [nzMin]="0"></nz-input-number>
      </div>
    </div>
  </ng-container>
</nz-modal>

<!-- Popup t\xECm ki\u1EBFm nh\xE2n vi\xEAn - t\xE1i d\xF9ng pattern ChangeUserComponent (thay EmployeeSearchModal jQuery) -->
<nz-modal [nzVisible]="pickerVisible()" [nzTitle]="'empSearch.title' | translate:'T\xECm ki\u1EBFm nh\xE2n vi\xEAn'"
          nzWidth="900px" (nzOnCancel)="closePicker()" [nzFooter]="null">
  <ng-container *nzModalContent>
    <form class="row g-2 align-items-end mb-3" (ngSubmit)="pickerSearch()">
      <div class="col-md-5">
        <label class="form-label">{{ 'empSearch.field.keyword' | translate:'M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn' }}</label>
        <input nz-input [(ngModel)]="pickerKeyword" name="vpsPickerKeyword"
               [placeholder]="'empSearch.placeholder.keyword' | translate:'Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn'"
               (keydown.enter)="$event.preventDefault(); pickerSearch()">
      </div>
      <div class="col-md-4">
        <label class="form-label">{{ 'empSearch.field.dept' | translate:'Ph\xF2ng ban' }}</label>
        <nz-tree-select class="w-100" [nzNodes]="deptNodes()" [(ngModel)]="pickerDeptNos" name="vpsPickerDeptNos"
                         nzCheckable nzShowSearch nzAllowClear
                         [nzPlaceHolder]="'vdp.search.dept.placeholder' | translate:'Ch\u1ECDn ph\xF2ng ban'"></nz-tree-select>
      </div>
      <div class="col-md-3">
        <label class="form-label">{{ 'empSearch.field.empOffice' | translate:'Tr\u1EA1ng th\xE1i l\xE0m vi\u1EC7c' }}</label>
        <nz-select class="w-100" [(ngModel)]="pickerEmpOffice" name="vpsPickerEmpOffice" nzAllowClear
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

    <nz-table [nzData]="pickerRows()" [nzLoading]="pickerLoading()" [nzPageSize]="10" nzSize="small" #vpsPickerTable>
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
        <tr *ngFor="let row of vpsPickerTable.data; let i = index" class="vps-row-clickable" (click)="selectEmployee(row)">
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
    <p class="mb-1">{{ 'pa.supervisor.confirmDeleteFull' | translate:'B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a ng\u01B0\u1EDDi ph\u1EE5 tr\xE1ch n\xE0y? To\xE0n b\u1ED9 c\u1EA5u h\xECnh ph\xF2ng ban c\u0169ng s\u1EBD b\u1ECB x\xF3a!' }}</p>
    <p class="fw-bold mb-0">{{ deleteTargetName }}</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-pa-supervisor/view-pa-supervisor.component.css */\n.vps-btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n.vps-row-clickable {\n  cursor: pointer;\n}\n.vps-tree-scroll {\n  max-height: calc(100vh - 480px);\n  overflow-y: auto;\n}\n/*# sourceMappingURL=view-pa-supervisor.component.css.map */\n"] }]
  }], () => [{ type: ViewPaSupervisorService }, { type: ChangeUserService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewPaSupervisorComponent, { className: "ViewPaSupervisorComponent", filePath: "src/app/view-pa-supervisor/view-pa-supervisor.component.ts", lineNumber: 100 });
})();
export {
  ViewPaSupervisorComponent
};
//# debugId=159f95b5-a370-5614-856a-383dc12fea90
//# sourceMappingURL=chunk-TWBHFLI7.js.map
