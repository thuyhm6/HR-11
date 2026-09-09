import {
  NzInputNumberComponent,
  NzInputNumberModule
} from "./chunk-IXCMIWQQ.js";
import {
  ChangeUserService
} from "./chunk-L26I55F6.js";
import {
  NzTagModule
} from "./chunk-HTQAHYN3.js";
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
  Injectable,
  NgForOf,
  NgIf,
  NzButtonComponent,
  NzButtonModule,
  NzTransitionPatchDirective,
  NzWaveDirective,
  __spreadValues,
  computed,
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

// src/app/view-attendance-keeper/view-attendance-keeper.service.ts
var API_BASE = "/ar/attendanceSettings/api/arSupervisor";
var ViewAttendanceKeeperService = class _ViewAttendanceKeeperService {
  constructor(http) {
    this.http = http;
  }
  http;
  getSupervisors() {
    return this.http.get(API_BASE, { withCredentials: true });
  }
  /** Toàn bộ cây phòng ban công ty (khác authorized-departments) - dùng để cấu hình phòng ban 1 người
   *  chấm công được phân quyền quản lý. */
  getDepartmentTree() {
    return this.http.get(`${API_BASE}/departments`, { withCredentials: true });
  }
  getSupervisorDepartments(personId) {
    return this.http.get(`${API_BASE}/${personId}/departments`, { withCredentials: true });
  }
  save(payload) {
    return this.http.post(`${API_BASE}/save`, payload, { withCredentials: true });
  }
  delete(personId) {
    return this.http.delete(`${API_BASE}/delete/${personId}`, {
      withCredentials: true
    });
  }
  saveDepartments(personId, deptNoList) {
    return this.http.post(`${API_BASE}/${personId}/saveDepartments`, deptNoList, {
      withCredentials: true
    });
  }
  static \u0275fac = function ViewAttendanceKeeperService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewAttendanceKeeperService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewAttendanceKeeperService, factory: _ViewAttendanceKeeperService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewAttendanceKeeperService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-attendance-keeper/view-attendance-keeper.component.ts
function ViewAttendanceKeeperComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "arSupervisor.js.noSupervisor", "Kh\xF4ng c\xF3 nh\xE2n vi\xEAn ph\xE2n quy\u1EC1n n\xE0o"), " ");
  }
}
function ViewAttendanceKeeperComponent_a_15_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275element(1, "i", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r2.deptName);
  }
}
function ViewAttendanceKeeperComponent_a_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 28);
    \u0275\u0275listener("click", function ViewAttendanceKeeperComponent_a_15_Template_a_click_0_listener() {
      const row_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectSupervisor(row_r2));
    });
    \u0275\u0275elementStart(1, "div", 29)(2, "h6", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 31);
    \u0275\u0275listener("click", function ViewAttendanceKeeperComponent_a_15_Template_button_click_4_listener($event) {
      const row_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openDeleteConfirm(row_r2, $event));
    });
    \u0275\u0275element(5, "i", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ViewAttendanceKeeperComponent_a_15_div_6_Template, 3, 1, "div", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.selectedPersonId() === row_r2.personId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.empLabel(row_r2));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", row_r2.deptName);
  }
}
function ViewAttendanceKeeperComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "span", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, "arSupervisor.js.configDeptFor", "C\u1EA5u h\xECnh nh\xF3m ph\xF2ng ban cho: "), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedEmpLabel());
  }
}
function ViewAttendanceKeeperComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(1, 1, "arSupervisor.orgChart", "S\u01A1 \u0111\u1ED3 T\u1ED5 ch\u1EE9c Ph\xE2n quy\u1EC1n"));
  }
}
function ViewAttendanceKeeperComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275element(1, "i", 38);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "arSupervisor.hint", "Vui l\xF2ng ch\u1ECDn m\u1ED9t nh\xE2n vi\xEAn b\xEAn tr\xE1i \u0111\u1EC3 xem/c\u1EA5u h\xECnh th\xF4ng tin."), " ");
  }
}
function ViewAttendanceKeeperComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275element(1, "i", 39);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "arSupervisor.js.loading", "\u0110ang t\u1EA3i th\xF4ng tin..."), " ");
  }
}
function ViewAttendanceKeeperComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "i", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.deptInfoError(), " ");
  }
}
function ViewAttendanceKeeperComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 3, "arSupervisor.js.deptLoaded", "\u0110\xE3 t\u1EA3i d\u1EEF li\u1EC7u ph\xF2ng ban m\xE0"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedEmpLabel());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(7, 6, "arSupervisor.js.deptLoadedSuf", " \u0111\u01B0\u1EE3c qu\u1EA3n l\xFD."), " ");
  }
}
function ViewAttendanceKeeperComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "arSupervisor.js.noDeptData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u ph\xF2ng ban."), " ");
  }
}
function ViewAttendanceKeeperComponent_nz_tree_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-tree", 45);
    \u0275\u0275listener("nzCheckedKeysChange", function ViewAttendanceKeeperComponent_nz_tree_33_Template_nz_tree_nzCheckedKeysChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDeptCheckedKeysChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzData", ctx_r2.deptTreeNodes())("nzCheckedKeys", ctx_r2.checkedDeptKeys());
  }
}
function ViewAttendanceKeeperComponent_ng_container_38_small_15_Template(rf, ctx) {
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
function ViewAttendanceKeeperComponent_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 46)(2, "div", 47)(3, "label", 48);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span", 49);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 50);
    \u0275\u0275element(9, "input", 51);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(11, "button", 52);
    \u0275\u0275listener("click", function ViewAttendanceKeeperComponent_ng_container_38_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openPicker());
    });
    \u0275\u0275element(12, "i", 53);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, ViewAttendanceKeeperComponent_ng_container_38_small_15_Template, 4, 5, "small", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 55)(17, "label", 48);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "nz-input-number", 56);
    \u0275\u0275twoWayListener("ngModelChange", function ViewAttendanceKeeperComponent_ng_container_38_Template_nz_input_number_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.orderno, $event) || (ctx_r2.form.orderno = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 55)(22, "label", 57);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "nz-select", 58);
    \u0275\u0275twoWayListener("ngModelChange", function ViewAttendanceKeeperComponent_ng_container_38_Template_nz_select_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.modifyYn, $event) || (ctx_r2.form.modifyYn = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(26, "nz-option", 59);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275element(28, "nz-option", 59);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 47)(31, "label", 57);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "nz-select", 60);
    \u0275\u0275twoWayListener("ngModelChange", function ViewAttendanceKeeperComponent_ng_container_38_Template_nz_select_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.activity, $event) || (ctx_r2.form.activity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(35, "nz-option", 59);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275element(37, "nz-option", 59);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 19, "arSupervisor.field.emp", "Nh\xE2n vi\xEAn"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r2.form.empDisplay)("placeholder", \u0275\u0275pipeBind2(10, 22, "arSupervisor.placeholder.selectEmp", "Ch\u1ECDn nh\xE2n vi\xEAn..."));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 25, "arSupervisor.btn.select", "Ch\u1ECDn"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.form.personId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 28, "arSupervisor.field.orderno", "S\u1EAFp x\u1EBFp (Orderno)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.orderno);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 31, "arSupervisor.field.modifyYn", "Quy\u1EC1n s\u1EEDa \u0111\u1ED5i (Modify_YN)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.modifyYn);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzValue", 1)("nzLabel", \u0275\u0275pipeBind2(27, 34, "arSupervisor.opt.allow", "1 - Cho ph\xE9p"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzValue", 0)("nzLabel", \u0275\u0275pipeBind2(29, 37, "arSupervisor.opt.disallow", "0 - Kh\xF4ng"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 40, "arSupervisor.field.activity", "Tr\u1EA1ng th\xE1i (Activity)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.activity);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzValue", 1)("nzLabel", \u0275\u0275pipeBind2(36, 43, "arSupervisor.opt.active", "1 - Ho\u1EA1t \u0111\u1ED9ng"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzValue", 0)("nzLabel", \u0275\u0275pipeBind2(38, 46, "arSupervisor.opt.inactive", "0 - Ng\u1EEBng"));
  }
}
function ViewAttendanceKeeperComponent_ng_container_41_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.deptTreeErrorMessage());
  }
}
function ViewAttendanceKeeperComponent_ng_container_41_nz_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 59);
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r7.codeNo)("nzLabel", c_r7.codeName);
  }
}
function ViewAttendanceKeeperComponent_ng_container_41_nz_alert_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 82);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzMessage", ctx_r2.pickerErrorMessage() ?? "");
  }
}
function ViewAttendanceKeeperComponent_ng_container_41_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 83);
    \u0275\u0275listener("click", function ViewAttendanceKeeperComponent_ng_container_41_tr_52_Template_tr_click_0_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectEmployee(row_r9));
    });
    \u0275\u0275elementStart(1, "td", 84);
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
    const row_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r10 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.empId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.deptName || row_r9.deptNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.position);
  }
}
function ViewAttendanceKeeperComponent_ng_container_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 63);
    \u0275\u0275listener("ngSubmit", function ViewAttendanceKeeperComponent_ng_container_41_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.pickerSearch());
    });
    \u0275\u0275elementStart(2, "div", 64)(3, "label", 48);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 65);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewAttendanceKeeperComponent_ng_container_41_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.pickerKeyword, $event) || (ctx_r2.pickerKeyword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function ViewAttendanceKeeperComponent_ng_container_41_Template_input_keydown_enter_6_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r2.pickerSearch());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 66)(9, "label", 48);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "nz-tree-select", 67);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewAttendanceKeeperComponent_ng_container_41_Template_nz_tree_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.pickerDeptNos, $event) || (ctx_r2.pickerDeptNos = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275template(14, ViewAttendanceKeeperComponent_ng_container_41_div_14_Template, 2, 1, "div", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 69)(16, "label", 48);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "nz-select", 70);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewAttendanceKeeperComponent_ng_container_41_Template_nz_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.pickerEmpOffice, $event) || (ctx_r2.pickerEmpOffice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(21, ViewAttendanceKeeperComponent_ng_container_41_nz_option_21_Template, 1, 2, "nz-option", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 72)(23, "button", 73);
    \u0275\u0275element(24, "i", 53);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 74);
    \u0275\u0275listener("click", function ViewAttendanceKeeperComponent_ng_container_41_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.pickerClear());
    });
    \u0275\u0275element(28, "i", 75);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(31, ViewAttendanceKeeperComponent_ng_container_41_nz_alert_31_Template, 1, 1, "nz-alert", 76);
    \u0275\u0275elementStart(32, "nz-table", 77, 1)(34, "thead")(35, "tr")(36, "th", 78);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th", 79);
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
    \u0275\u0275template(52, ViewAttendanceKeeperComponent_ng_container_41_tr_52_Template, 11, 5, "tr", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const vakPickerTable_r11 = \u0275\u0275reference(33);
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(47, 57, "common.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 60, "epi.field.position", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", vakPickerTable_r11.data);
  }
}
function ViewAttendanceKeeperComponent_ng_container_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 85);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 86);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "arSupervisor.js.deleteConfirm", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a ph\xE2n quy\u1EC1n NV n\xE0y?\nCh\xFA \xFD: To\xE0n b\u1ED9 c\u1EA5u h\xECnh ph\xF2ng ban c\u1EE7a NV s\u1EBD b\u1ECB x\xF3a theo!"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.deleteTargetName);
  }
}
var I18N_KEYS = [
  "arSupervisor.pageTitle",
  "arSupervisor.orgChart",
  "arSupervisor.saveDepts",
  "arSupervisor.hint",
  "arSupervisor.field.emp",
  "arSupervisor.placeholder.selectEmp",
  "arSupervisor.field.orderno",
  "arSupervisor.field.modifyYn",
  "arSupervisor.field.activity",
  "arSupervisor.opt.allow",
  "arSupervisor.opt.disallow",
  "arSupervisor.opt.active",
  "arSupervisor.opt.inactive",
  "arSupervisor.btn.saveData",
  "arSupervisor.js.noDeptData",
  "arSupervisor.js.noSupervisor",
  "arSupervisor.js.titleAdd",
  "arSupervisor.js.empSelected",
  "arSupervisor.js.pleaseSearch",
  "arSupervisor.js.connectionError",
  "arSupervisor.js.deleteConfirm",
  "arSupervisor.js.noPersonId",
  "arSupervisor.js.configDeptFor",
  "arSupervisor.js.loading",
  "arSupervisor.js.deptError",
  "arSupervisor.js.serverError",
  "arSupervisor.js.saveConnError",
  "arSupervisor.btn.addNew",
  "arSupervisor.placeholder.search",
  "arSupervisor.btn.select",
  "arSupervisor.btn.close",
  "arSupervisor.js.deptLoaded",
  "arSupervisor.js.deptLoadedSuf",
  "arSupervisor.js.savedDeptsPrefix",
  "arSupervisor.js.savedDeptsSuf",
  "arSupervisor.js.deleteError",
  "common.save",
  "common.close",
  "common.confirm",
  "common.cancel",
  "common.search",
  "common.selectAll",
  "common.empId",
  "common.empName",
  "common.deptName",
  "common.loadFail",
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
var EMPTY_FORM = { personId: null, empDisplay: "", orderno: null, modifyYn: 0, activity: 1 };
var ViewAttendanceKeeperComponent = class _ViewAttendanceKeeperComponent {
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
  supervisors = signal(
    [],
    ...ngDevMode ? [{ debugName: "supervisors" }] : (
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
  searchKeyword = signal(
    "",
    ...ngDevMode ? [{ debugName: "searchKeyword" }] : (
      /* istanbul ignore next */
      []
    )
  );
  filteredSupervisors = computed(
    () => {
      const kw = this.searchKeyword().trim().toLowerCase();
      const list = this.supervisors();
      if (!kw)
        return list;
      return list.filter((s) => `${s.empId ?? ""} ${s.empName ?? ""} ${s.deptName ?? ""}`.toLowerCase().includes(kw));
    },
    ...ngDevMode ? [{ debugName: "filteredSupervisors" }] : (
      /* istanbul ignore next */
      []
    )
  );
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
  // ==================== Modal tìm kiếm nhân viên (tái dùng pattern ChangeUserComponent) ====================
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
    this.api.getDepartmentTree().subscribe({
      next: (list) => {
        this.deptTreeItems = list ?? [];
        this.deptTreeNodes.set(this.buildDeptTree(this.deptTreeItems));
      },
      error: () => this.deptTreeNodes.set([])
    });
    this.loadSupervisors();
    this.empApi.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(this.buildPickerDeptTree(list ?? [])),
      error: () => this.deptTreeErrorMessage.set(this.i18n.t("mep.msg.loadDeptFailed", "L\u1ED7i khi t\u1EA3i danh s\xE1ch ph\xF2ng ban"))
    });
    this.empApi.getCodeList(EMP_OFFICE_PARENT_CODE).subscribe((list) => this.empOfficeOptions.set(list ?? []));
  }
  loadSupervisors() {
    this.loadingList.set(true);
    this.api.getSupervisors().subscribe({
      next: (list) => {
        this.supervisors.set(list ?? []);
        this.loadingList.set(false);
        this.resetRightPane();
      },
      error: () => {
        this.supervisors.set([]);
        this.loadingList.set(false);
      }
    });
  }
  empLabel(row) {
    return row.empId ? `${row.empId} - ${row.empName ?? ""}` : row.personId;
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
        this.deptInfoError.set(this.i18n.t("arSupervisor.js.deptError", "L\u1ED7i d\u1EEF li\u1EC7u ph\xF2ng ban."));
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
  /** nzCheckedKeysChange trả thẳng danh sách key đã cascade cha/con (tick cha -> tick hết con, tick
   *  đủ con -> tick cha) - nz-tree tự lo phần này, không cần tự viết đệ quy như hàm dept-checkbox
   *  change ở bản gốc. */
  onDeptCheckedKeysChange(keys) {
    this.checkedDeptKeys.set(keys.map(String));
  }
  saveDepartments() {
    const personId = this.selectedPersonId();
    if (!personId) {
      this.message.error(this.i18n.t("arSupervisor.js.noPersonId", "Ch\u01B0a c\xF3 ID nh\xE2n s\u1EF1 \u0111\u01B0\u1EE3c ch\u1ECDn."));
      return;
    }
    const keys = this.checkedDeptKeys();
    this.savingDepts.set(true);
    this.api.saveDepartments(personId, keys).subscribe({
      next: () => {
        this.savingDepts.set(false);
        const prefix = this.i18n.t("arSupervisor.js.savedDeptsPrefix", "\u0110\xE3 l\u01B0u");
        const suffix = this.i18n.t("arSupervisor.js.savedDeptsSuf", " ph\xF2ng ban ph\xE2n quy\u1EC1n cho NV!");
        this.message.success(`${prefix} ${keys.length}${suffix}`);
      },
      error: () => {
        this.savingDepts.set(false);
        this.message.error(this.i18n.t("arSupervisor.js.saveConnError", "L\u1ED7i k\u1EBFt n\u1ED1i khi l\u01B0u!"));
      }
    });
  }
  buildDeptTree(list) {
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
  // ==================== Modal Thêm mới nhân viên phân quyền ====================
  openAddModal() {
    this.form = __spreadValues({}, EMPTY_FORM);
    this.modalVisible.set(true);
  }
  closeModal() {
    this.modalVisible.set(false);
  }
  saveForm() {
    if (!this.form.personId) {
      this.message.warning(this.i18n.t("arSupervisor.js.pleaseSearch", "Vui l\xF2ng Tra c\u1EE9u \u0111\u1EC3 \u0111\u1EA3m b\u1EA3o m\xE3 NV h\u1EE3p l\u1EC7."));
      return;
    }
    const payload = {
      personId: this.form.personId,
      orderno: this.form.orderno,
      modifyYn: this.form.modifyYn,
      activity: this.form.activity
    };
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.message.success(res.message || this.i18n.t("common.save", "L\u01B0u"));
        this.loadSupervisors();
      },
      error: (err) => {
        this.saving.set(false);
        this.message.error(err?.error?.error || this.i18n.t("arSupervisor.js.serverError", "L\u1ED7i x\u1EED l\xFD server"));
      }
    });
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
        this.message.success(res.message || "X\xF3a th\xE0nh c\xF4ng!");
        if (this.selectedPersonId() === personId)
          this.resetRightPane();
        this.loadSupervisors();
      },
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t("arSupervisor.js.deleteError", "L\u1ED7i khi x\xF3a!"));
      }
    });
  }
  // ==================== Modal tìm kiếm nhân viên ====================
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
  static \u0275fac = function ViewAttendanceKeeperComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewAttendanceKeeperComponent)(\u0275\u0275directiveInject(ViewAttendanceKeeperService), \u0275\u0275directiveInject(ChangeUserService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewAttendanceKeeperComponent, selectors: [["app-view-attendance-keeper"]], decls: 47, vars: 64, consts: [["noSelLabel", ""], ["vakPickerTable", ""], [1, "row"], [1, "col-md-4", "mb-3"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3", "border-bottom", "pb-2"], [1, "mb-0", "text-primary", "fw-bold"], ["nz-button", "", "nzType", "primary", "nzSize", "small", "type", "button", 3, "click"], [1, "bx", "bx-user-plus"], ["nz-input", "", 1, "mb-3", 3, "ngModelChange", "ngModel", "placeholder"], [1, "vak-list-scroll"], ["class", "text-muted p-2 text-center mt-3", 4, "ngIf"], ["href", "javascript:void(0)", "class", "list-group-item list-group-item-action vak-list-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "col-md-8", "mb-3"], [1, "mb-0", "fw-bold"], [4, "ngIf", "ngIfElse"], ["nz-button", "", "nzType", "primary", "nzSize", "small", "type", "button", 3, "click", "disabled", "nzLoading"], [1, "bx", "bx-save"], ["class", "p-2 bg-light border-bottom text-muted", 4, "ngIf"], ["class", "p-2 bg-light border-bottom text-danger", 4, "ngIf"], ["class", "p-2 bg-light border-bottom text-success", 4, "ngIf"], [1, "vak-tree-scroll", "mt-2"], ["class", "text-muted p-2", 4, "ngIf"], ["nzCheckable", "", 3, "nzData", "nzCheckedKeys", "nzCheckedKeysChange", 4, "ngIf"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkDisabled", "nzOkText", "nzCancelText"], [4, "nzModalContent"], ["nzWidth", "900px", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzFooter"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [1, "text-muted", "p-2", "text-center", "mt-3"], ["href", "javascript:void(0)", 1, "list-group-item", "list-group-item-action", "vak-list-item", 3, "click"], [1, "d-flex", "w-100", "justify-content-between", "align-items-start"], [1, "mb-1", "fw-bold"], ["nz-button", "", "nzType", "text", "nzSize", "small", "nzDanger", "", 3, "click"], [1, "bx", "bx-trash"], ["class", "small text-muted", 4, "ngIf"], [1, "small", "text-muted"], [1, "bx", "bx-building"], [1, "text-primary"], [1, "p-2", "bg-light", "border-bottom", "text-muted"], [1, "bx", "bx-info-circle"], [1, "bx", "bx-loader-alt", "bx-spin"], [1, "p-2", "bg-light", "border-bottom", "text-danger"], [1, "bx", "bx-error"], [1, "p-2", "bg-light", "border-bottom", "text-success"], [1, "bx", "bx-check-double"], [1, "text-muted", "p-2"], ["nzCheckable", "", 3, "nzCheckedKeysChange", "nzData", "nzCheckedKeys"], [1, "row", "g-3"], [1, "col-md-12"], [1, "form-label"], [1, "text-danger"], [1, "d-flex", "gap-2"], ["nz-input", "", "name", "vakEmpDisplay", "readonly", "", 3, "ngModel", "placeholder"], ["nz-button", "", "nzType", "default", "type", "button", 3, "click"], [1, "bx", "bx-search"], ["class", "text-success d-block mt-1", 4, "ngIf"], [1, "col-md-6"], ["name", "vakOrderno", 1, "w-100", 3, "ngModelChange", "ngModel"], [1, "form-label", "d-block"], ["name", "vakModifyYn", 1, "w-100", 3, "ngModelChange", "ngModel"], [3, "nzValue", "nzLabel"], ["name", "vakActivity", 1, "w-100", 3, "ngModelChange", "ngModel"], [1, "text-success", "d-block", "mt-1"], [1, "bx", "bx-check"], [1, "row", "g-2", "align-items-end", "mb-3", 3, "ngSubmit"], [1, "col-md-5"], ["nz-input", "", "name", "vakPickerKeyword", 3, "ngModelChange", "keydown.enter", "ngModel", "placeholder"], [1, "col-md-4"], ["name", "vakPickerDeptNos", "nzCheckable", "", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["class", "text-danger small mt-1", 4, "ngIf"], [1, "col-md-3"], ["name", "vakPickerEmpOffice", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col-12", "d-flex", "gap-2"], ["nz-button", "", "nzType", "primary", "type", "submit"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], ["nzType", "error", "class", "mb-2", 3, "nzMessage", 4, "ngIf"], ["nzSize", "small", 3, "nzData", "nzLoading", "nzPageSize"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "110px"], ["class", "vak-row-clickable", 3, "click", 4, "ngFor", "ngForOf"], [1, "text-danger", "small", "mt-1"], ["nzType", "error", 1, "mb-2", 3, "nzMessage"], [1, "vak-row-clickable", 3, "click"], [1, "text-center"], [1, "mb-1", "vak-pre-line"], [1, "fw-bold", "mb-0"]], template: function ViewAttendanceKeeperComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "nz-card")(3, "div", 4)(4, "h6", 5);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 6);
      \u0275\u0275listener("click", function ViewAttendanceKeeperComponent_Template_button_click_7_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(8, "i", 7);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "input", 8);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275listener("ngModelChange", function ViewAttendanceKeeperComponent_Template_input_ngModelChange_11_listener($event) {
        return ctx.searchKeyword.set($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(13, "div", 9);
      \u0275\u0275template(14, ViewAttendanceKeeperComponent_div_14_Template, 3, 4, "div", 10)(15, ViewAttendanceKeeperComponent_a_15_Template, 7, 4, "a", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 12)(17, "nz-card")(18, "div", 4)(19, "h6", 13);
      \u0275\u0275template(20, ViewAttendanceKeeperComponent_ng_container_20_Template, 5, 5, "ng-container", 14)(21, ViewAttendanceKeeperComponent_ng_template_21_Template, 2, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 15);
      \u0275\u0275listener("click", function ViewAttendanceKeeperComponent_Template_button_click_23_listener() {
        return ctx.saveDepartments();
      });
      \u0275\u0275element(24, "i", 16);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(27, ViewAttendanceKeeperComponent_div_27_Template, 4, 4, "div", 17)(28, ViewAttendanceKeeperComponent_div_28_Template, 4, 4, "div", 17)(29, ViewAttendanceKeeperComponent_div_29_Template, 3, 1, "div", 18)(30, ViewAttendanceKeeperComponent_div_30_Template, 8, 9, "div", 19);
      \u0275\u0275elementStart(31, "div", 20);
      \u0275\u0275template(32, ViewAttendanceKeeperComponent_div_32_Template, 3, 4, "div", 21)(33, ViewAttendanceKeeperComponent_nz_tree_33_Template, 1, 2, "nz-tree", 22);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(34, "nz-modal", 23);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewAttendanceKeeperComponent_Template_nz_modal_nzOnCancel_34_listener() {
        return ctx.closeModal();
      })("nzOnOk", function ViewAttendanceKeeperComponent_Template_nz_modal_nzOnOk_34_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(38, ViewAttendanceKeeperComponent_ng_container_38_Template, 39, 49, "ng-container", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "nz-modal", 25);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewAttendanceKeeperComponent_Template_nz_modal_nzOnCancel_39_listener() {
        return ctx.closePicker();
      });
      \u0275\u0275template(41, ViewAttendanceKeeperComponent_ng_container_41_Template, 53, 63, "ng-container", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "nz-modal", 26);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewAttendanceKeeperComponent_Template_nz_modal_nzOnCancel_42_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function ViewAttendanceKeeperComponent_Template_nz_modal_nzOnOk_42_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(46, ViewAttendanceKeeperComponent_ng_container_46_Template, 6, 5, "ng-container", 24);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const noSelLabel_r12 = \u0275\u0275reference(22);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 31, "arSupervisor.pageTitle", "Nh\xE2n vi\xEAn Ph\xE2n quy\u1EC1n"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 34, "arSupervisor.btn.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.searchKeyword())("placeholder", \u0275\u0275pipeBind2(12, 37, "arSupervisor.placeholder.search", "T\xECm ki\u1EBFm nh\xE2n vi\xEAn..."));
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loadingList() && ctx.filteredSupervisors().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.filteredSupervisors());
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.selectedEmpLabel())("ngIfElse", noSelLabel_r12);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", !ctx.selectedPersonId())("nzLoading", ctx.savingDepts());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 40, "arSupervisor.saveDepts", "L\u01B0u ph\xE2n quy\u1EC1n ph\xF2ng ban"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.selectedPersonId());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedPersonId() && ctx.deptInfoLoading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedPersonId() && !ctx.deptInfoLoading() && ctx.deptInfoError());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedPersonId() && !ctx.deptInfoLoading() && !ctx.deptInfoError());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.deptTreeNodes().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedPersonId() && ctx.deptTreeNodes().length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", \u0275\u0275pipeBind2(35, 43, "arSupervisor.js.titleAdd", "Th\xEAm m\u1EDBi Nh\xE2n s\u1EF1 Ph\xE2n quy\u1EC1n"))("nzOkLoading", ctx.saving())("nzOkDisabled", !ctx.form.personId)("nzOkText", \u0275\u0275pipeBind2(36, 46, "arSupervisor.btn.saveData", "L\u01B0u d\u1EEF li\u1EC7u"))("nzCancelText", \u0275\u0275pipeBind2(37, 49, "arSupervisor.btn.close", "\u0110\xF3ng"));
      \u0275\u0275advance(5);
      \u0275\u0275property("nzVisible", ctx.pickerVisible())("nzTitle", \u0275\u0275pipeBind2(40, 52, "empSearch.title", "T\xECm ki\u1EBFm nh\xE2n vi\xEAn"))("nzFooter", null);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(43, 55, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(44, 58, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(45, 61, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    NgModel,
    NgForm,
    NzCardModule,
    NzCardComponent,
    NzInputModule,
    NzInputDirective,
    NzInputNumberModule,
    NzInputNumberComponent,
    NzSelectModule,
    NzOptionComponent,
    NzSelectComponent,
    NzButtonModule,
    NzButtonComponent,
    NzTransitionPatchDirective,
    NzWaveDirective,
    NzModalModule,
    NzModalComponent,
    NzModalContentDirective,
    NzAlertModule,
    NzAlertComponent,
    NzTagModule,
    NzTableModule,
    NzTableComponent,
    NzTableCellDirective,
    NzThMeasureDirective,
    NzTheadComponent,
    NzTbodyComponent,
    NzTrDirective,
    NzTreeSelectModule,
    NzTreeSelectComponent,
    NzTreeModule,
    NzTreeComponent,
    TranslatePipe
  ], styles: ["\n.vak-list-scroll[_ngcontent-%COMP%] {\n  max-height: calc(100vh - 320px);\n  overflow-y: auto;\n}\n.vak-list-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.vak-tree-scroll[_ngcontent-%COMP%] {\n  max-height: calc(100vh - 380px);\n  overflow-y: auto;\n}\n.vak-row-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.vak-pre-line[_ngcontent-%COMP%] {\n  white-space: pre-line;\n}\n/*# sourceMappingURL=view-attendance-keeper.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewAttendanceKeeperComponent, [{
    type: Component,
    args: [{ selector: "app-view-attendance-keeper", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzCardModule,
      NzInputModule,
      NzInputNumberModule,
      NzSelectModule,
      NzButtonModule,
      NzModalModule,
      NzAlertModule,
      NzTagModule,
      NzTableModule,
      NzTreeSelectModule,
      NzTreeModule,
      TranslatePipe
    ], template: `<div class="row">
  <!-- Danh s\xE1ch nh\xE2n vi\xEAn ph\xE2n quy\u1EC1n ch\u1EA5m c\xF4ng b\xEAn tr\xE1i -->
  <div class="col-md-4 mb-3">
    <nz-card>
      <div class="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
        <h6 class="mb-0 text-primary fw-bold">{{ 'arSupervisor.pageTitle' | translate:'Nh\xE2n vi\xEAn Ph\xE2n quy\u1EC1n' }}</h6>
        <button nz-button nzType="primary" nzSize="small" type="button" (click)="openAddModal()">
          <i class="bx bx-user-plus"></i> {{ 'arSupervisor.btn.addNew' | translate:'Th\xEAm m\u1EDBi' }}
        </button>
      </div>
      <input nz-input class="mb-3" [ngModel]="searchKeyword()" (ngModelChange)="searchKeyword.set($event)"
             [placeholder]="'arSupervisor.placeholder.search' | translate:'T\xECm ki\u1EBFm nh\xE2n vi\xEAn...'">

      <div class="vak-list-scroll">
        <div *ngIf="!loadingList() && filteredSupervisors().length === 0" class="text-muted p-2 text-center mt-3">
          {{ 'arSupervisor.js.noSupervisor' | translate:'Kh\xF4ng c\xF3 nh\xE2n vi\xEAn ph\xE2n quy\u1EC1n n\xE0o' }}
        </div>
        <a *ngFor="let row of filteredSupervisors()" href="javascript:void(0)"
           class="list-group-item list-group-item-action vak-list-item"
           [class.active]="selectedPersonId() === row.personId"
           (click)="selectSupervisor(row)">
          <div class="d-flex w-100 justify-content-between align-items-start">
            <h6 class="mb-1 fw-bold">{{ empLabel(row) }}</h6>
            <button nz-button nzType="text" nzSize="small" nzDanger (click)="openDeleteConfirm(row, $event)">
              <i class="bx bx-trash"></i>
            </button>
          </div>
          <div *ngIf="row.deptName" class="small text-muted"><i class="bx bx-building"></i> {{ row.deptName }}</div>
        </a>
      </div>
    </nz-card>
  </div>

  <!-- C\u1EA5u h\xECnh nh\xF3m ph\xF2ng ban b\xEAn ph\u1EA3i -->
  <div class="col-md-8 mb-3">
    <nz-card>
      <div class="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
        <h6 class="mb-0 fw-bold">
          <ng-container *ngIf="selectedEmpLabel(); else noSelLabel">
            {{ 'arSupervisor.js.configDeptFor' | translate:'C\u1EA5u h\xECnh nh\xF3m ph\xF2ng ban cho: ' }}
            <span class="text-primary">{{ selectedEmpLabel() }}</span>
          </ng-container>
          <ng-template #noSelLabel>{{ 'arSupervisor.orgChart' | translate:'S\u01A1 \u0111\u1ED3 T\u1ED5 ch\u1EE9c Ph\xE2n quy\u1EC1n' }}</ng-template>
        </h6>
        <button nz-button nzType="primary" nzSize="small" type="button"
                [disabled]="!selectedPersonId()" [nzLoading]="savingDepts()" (click)="saveDepartments()">
          <i class="bx bx-save"></i> {{ 'arSupervisor.saveDepts' | translate:'L\u01B0u ph\xE2n quy\u1EC1n ph\xF2ng ban' }}
        </button>
      </div>

      <div *ngIf="!selectedPersonId()" class="p-2 bg-light border-bottom text-muted">
        <i class="bx bx-info-circle"></i> {{ 'arSupervisor.hint' | translate:'Vui l\xF2ng ch\u1ECDn m\u1ED9t nh\xE2n vi\xEAn b\xEAn tr\xE1i \u0111\u1EC3 xem/c\u1EA5u h\xECnh th\xF4ng tin.' }}
      </div>
      <div *ngIf="selectedPersonId() && deptInfoLoading()" class="p-2 bg-light border-bottom text-muted">
        <i class="bx bx-loader-alt bx-spin"></i> {{ 'arSupervisor.js.loading' | translate:'\u0110ang t\u1EA3i th\xF4ng tin...' }}
      </div>
      <div *ngIf="selectedPersonId() && !deptInfoLoading() && deptInfoError()" class="p-2 bg-light border-bottom text-danger">
        <i class="bx bx-error"></i> {{ deptInfoError() }}
      </div>
      <div *ngIf="selectedPersonId() && !deptInfoLoading() && !deptInfoError()" class="p-2 bg-light border-bottom text-success">
        <i class="bx bx-check-double"></i>
        {{ 'arSupervisor.js.deptLoaded' | translate:'\u0110\xE3 t\u1EA3i d\u1EEF li\u1EC7u ph\xF2ng ban m\xE0' }}
        <b>{{ selectedEmpLabel() }}</b>{{ 'arSupervisor.js.deptLoadedSuf' | translate:' \u0111\u01B0\u1EE3c qu\u1EA3n l\xFD.' }}
      </div>

      <div class="vak-tree-scroll mt-2">
        <div *ngIf="deptTreeNodes().length === 0" class="text-muted p-2">
          {{ 'arSupervisor.js.noDeptData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u ph\xF2ng ban.' }}
        </div>
        <nz-tree *ngIf="selectedPersonId() && deptTreeNodes().length > 0"
                 [nzData]="deptTreeNodes()" nzCheckable [nzCheckedKeys]="checkedDeptKeys()"
                 (nzCheckedKeysChange)="onDeptCheckedKeysChange($event)"></nz-tree>
      </div>
    </nz-card>
  </div>
</div>

<!-- Modal Th\xEAm m\u1EDBi Nh\xE2n s\u1EF1 Ph\xE2n quy\u1EC1n -->
<nz-modal [nzVisible]="modalVisible()" [nzTitle]="'arSupervisor.js.titleAdd' | translate:'Th\xEAm m\u1EDBi Nh\xE2n s\u1EF1 Ph\xE2n quy\u1EC1n'"
          (nzOnCancel)="closeModal()" (nzOnOk)="saveForm()" [nzOkLoading]="saving()" [nzOkDisabled]="!form.personId"
          [nzOkText]="'arSupervisor.btn.saveData' | translate:'L\u01B0u d\u1EEF li\u1EC7u'"
          [nzCancelText]="'arSupervisor.btn.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <div class="row g-3">
      <div class="col-md-12">
        <label class="form-label">
          {{ 'arSupervisor.field.emp' | translate:'Nh\xE2n vi\xEAn' }} <span class="text-danger">*</span>
        </label>
        <div class="d-flex gap-2">
          <input nz-input [ngModel]="form.empDisplay" name="vakEmpDisplay" readonly
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
        <label class="form-label">{{ 'arSupervisor.field.orderno' | translate:'S\u1EAFp x\u1EBFp (Orderno)' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.orderno" name="vakOrderno"></nz-input-number>
      </div>
      <div class="col-md-6">
        <label class="form-label d-block">{{ 'arSupervisor.field.modifyYn' | translate:'Quy\u1EC1n s\u1EEDa \u0111\u1ED5i (Modify_YN)' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.modifyYn" name="vakModifyYn">
          <nz-option [nzValue]="1" [nzLabel]="'arSupervisor.opt.allow' | translate:'1 - Cho ph\xE9p'"></nz-option>
          <nz-option [nzValue]="0" [nzLabel]="'arSupervisor.opt.disallow' | translate:'0 - Kh\xF4ng'"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-12">
        <label class="form-label d-block">{{ 'arSupervisor.field.activity' | translate:'Tr\u1EA1ng th\xE1i (Activity)' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.activity" name="vakActivity">
          <nz-option [nzValue]="1" [nzLabel]="'arSupervisor.opt.active' | translate:'1 - Ho\u1EA1t \u0111\u1ED9ng'"></nz-option>
          <nz-option [nzValue]="0" [nzLabel]="'arSupervisor.opt.inactive' | translate:'0 - Ng\u1EEBng'"></nz-option>
        </nz-select>
      </div>
    </div>
  </ng-container>
</nz-modal>

<!-- Modal t\xECm ki\u1EBFm nh\xE2n vi\xEAn - t\xE1i d\xF9ng pattern ChangeUserComponent (thay fragment employeeSearchModal.html) -->
<nz-modal [nzVisible]="pickerVisible()" [nzTitle]="'empSearch.title' | translate:'T\xECm ki\u1EBFm nh\xE2n vi\xEAn'"
          nzWidth="900px" (nzOnCancel)="closePicker()" [nzFooter]="null">
  <ng-container *nzModalContent>
    <form class="row g-2 align-items-end mb-3" (ngSubmit)="pickerSearch()">
      <div class="col-md-5">
        <label class="form-label">{{ 'empSearch.field.keyword' | translate:'M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn' }}</label>
        <input nz-input [(ngModel)]="pickerKeyword" name="vakPickerKeyword"
               [placeholder]="'empSearch.placeholder.keyword' | translate:'Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn'"
               (keydown.enter)="$event.preventDefault(); pickerSearch()">
      </div>
      <div class="col-md-4">
        <label class="form-label">{{ 'empSearch.field.dept' | translate:'Ph\xF2ng ban' }}</label>
        <nz-tree-select class="w-100" [nzNodes]="deptNodes()" [(ngModel)]="pickerDeptNos" name="vakPickerDeptNos"
                         nzCheckable nzShowSearch nzAllowClear
                         [nzPlaceHolder]="'vdp.search.dept.placeholder' | translate:'Ch\u1ECDn ph\xF2ng ban'"></nz-tree-select>
        <div *ngIf="deptTreeErrorMessage()" class="text-danger small mt-1">{{ deptTreeErrorMessage() }}</div>
      </div>
      <div class="col-md-3">
        <label class="form-label">{{ 'empSearch.field.empOffice' | translate:'Tr\u1EA1ng th\xE1i l\xE0m vi\u1EC7c' }}</label>
        <nz-select class="w-100" [(ngModel)]="pickerEmpOffice" name="vakPickerEmpOffice" nzAllowClear
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

    <nz-table [nzData]="pickerRows()" [nzLoading]="pickerLoading()" [nzPageSize]="10" nzSize="small" #vakPickerTable>
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
        <tr *ngFor="let row of vakPickerTable.data; let i = index" class="vak-row-clickable" (click)="selectEmployee(row)">
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
    <p class="mb-1 vak-pre-line">{{ 'arSupervisor.js.deleteConfirm' | translate:'B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a ph\xE2n quy\u1EC1n NV n\xE0y?\\nCh\xFA \xFD: To\xE0n b\u1ED9 c\u1EA5u h\xECnh ph\xF2ng ban c\u1EE7a NV s\u1EBD b\u1ECB x\xF3a theo!' }}</p>
    <p class="fw-bold mb-0">{{ deleteTargetName }}</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-attendance-keeper/view-attendance-keeper.component.css */\n.vak-list-scroll {\n  max-height: calc(100vh - 320px);\n  overflow-y: auto;\n}\n.vak-list-item {\n  cursor: pointer;\n}\n.vak-tree-scroll {\n  max-height: calc(100vh - 380px);\n  overflow-y: auto;\n}\n.vak-row-clickable {\n  cursor: pointer;\n}\n.vak-pre-line {\n  white-space: pre-line;\n}\n/*# sourceMappingURL=view-attendance-keeper.component.css.map */\n"] }]
  }], () => [{ type: ViewAttendanceKeeperService }, { type: ChangeUserService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewAttendanceKeeperComponent, { className: "ViewAttendanceKeeperComponent", filePath: "src/app/view-attendance-keeper/view-attendance-keeper.component.ts", lineNumber: 93 });
})();
export {
  ViewAttendanceKeeperComponent
};
//# debugId=c4b63eed-9d47-59f1-9e3d-08891c67e888
//# sourceMappingURL=chunk-FWUZJ6NH.js.map
