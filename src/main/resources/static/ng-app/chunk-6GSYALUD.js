import {
  NzInputNumberComponent,
  NzInputNumberModule
} from "./chunk-IXCMIWQQ.js";
import {
  NzTagComponent,
  NzTagModule
} from "./chunk-HTQAHYN3.js";
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
  __spreadValues,
  computed,
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

// src/app/view-roles-group/view-roles-group.service.ts
var API_BASE = "/sys/api/role";
var ViewRolesGroupService = class _ViewRolesGroupService {
  constructor(http) {
    this.http = http;
  }
  http;
  list(keyword) {
    let params = new HttpParams();
    if (keyword)
      params = params.set("keyword", keyword);
    return this.http.get(`${API_BASE}/list`, { params, withCredentials: true });
  }
  detail(roleNo) {
    const params = new HttpParams().set("roleNo", roleNo);
    return this.http.get(`${API_BASE}/detail`, { params, withCredentials: true });
  }
  save(payload) {
    return this.http.post(`${API_BASE}/save`, payload, { withCredentials: true });
  }
  saveRelations(payload) {
    return this.http.post(`${API_BASE}/saveRelations`, payload, { withCredentials: true });
  }
  delete(roleNo) {
    const params = new HttpParams().set("roleNo", roleNo);
    return this.http.post(`${API_BASE}/delete`, null, { params, withCredentials: true });
  }
  /** Toàn bộ cây menu hệ thống (dùng chung API với ViewMenuListComponent) để dựng cây phân quyền. */
  getMenuTree() {
    return this.http.get("/sys/api/menu/list", { withCredentials: true });
  }
  static \u0275fac = function ViewRolesGroupService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewRolesGroupService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewRolesGroupService, factory: _ViewRolesGroupService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewRolesGroupService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-roles-group/view-roles-group.component.ts
var _c0 = () => ({ y: "calc(100vh - 420px)" });
function ViewRolesGroupComponent_nz_alert_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 38);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ViewRolesGroupComponent_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 39);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewRolesGroupComponent_tr_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 40);
    \u0275\u0275listener("click", function ViewRolesGroupComponent_tr_49_Template_tr_click_0_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectRole(row_r4));
    });
    \u0275\u0275elementStart(1, "td", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 41)(8, "nz-tag", 42);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 41)(11, "button", 43);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275listener("click", function ViewRolesGroupComponent_tr_49_Template_button_click_11_listener($event) {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.openEditModal(row_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(13, "i", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 43);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275listener("click", function ViewRolesGroupComponent_tr_49_Template_button_click_14_listener($event) {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.openDeleteConfirm(row_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(16, "i", 45);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("table-active", ctx_r1.selectedRoleNo() === row_r4.roleNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r5 + 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.roleId || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.roleId);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.nameVi || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.nameVi);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColor", row_r4.sysType === "0" ? "blue" : "gold");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sysTypeLabel(row_r4.sysType));
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(12, 11, "common.edit", "S\u1EEDa"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(15, 14, "common.delete", "X\xF3a"));
  }
}
function ViewRolesGroupComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r6 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r6, " ");
  }
}
function ViewRolesGroupComponent_ng_container_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "span", 46);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, "sys.role.viewRolesGroup.msg.menuPanelPrefix", "Ph\xE2n quy\u1EC1n Menu -"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedRoleLabel());
  }
}
function ViewRolesGroupComponent_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(1, 1, "sys.role.viewRolesGroup.menuPanel.title", "Ph\xE2n quy\u1EC1n Menu"));
  }
}
function ViewRolesGroupComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "i", 48);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "sys.role.viewRolesGroup.hint.selectRole", "Vui l\xF2ng ch\u1ECDn m\u1ED9t nh\xF3m quy\u1EC1n b\xEAn tr\xE1i \u0111\u1EC3 ph\xE2n quy\u1EC1n."), " ");
  }
}
function ViewRolesGroupComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275elementEnd();
  }
}
function ViewRolesGroupComponent_nz_tree_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-tree", 50);
    \u0275\u0275listener("nzCheckedKeysChange", function ViewRolesGroupComponent_nz_tree_66_Template_nz_tree_nzCheckedKeysChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMenuCheckedKeysChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzData", ctx_r1.menuTreeNodes())("nzCheckedKeys", ctx_r1.checkedMenuKeys());
  }
}
function ViewRolesGroupComponent_ng_container_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 51)(2, "div", 52)(3, "label", 53);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 54);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 6)(9, "label", 53);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementStart(12, "span", 55);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRolesGroupComponent_ng_container_70_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nameVi, $event) || (ctx_r1.form.nameVi = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 6)(16, "label", 53);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRolesGroupComponent_ng_container_70_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nameEn, $event) || (ctx_r1.form.nameEn = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 6)(21, "label", 53);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRolesGroupComponent_ng_container_70_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nameZh, $event) || (ctx_r1.form.nameZh = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 6)(26, "label", 53);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRolesGroupComponent_ng_container_70_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nameKo, $event) || (ctx_r1.form.nameKo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 6)(31, "label", 60);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "nz-select", 61);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRolesGroupComponent_ng_container_70_Template_nz_select_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.sysType, $event) || (ctx_r1.form.sysType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(35, "nz-option", 62);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275element(37, "nz-option", 63);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 6)(40, "label", 53);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "nz-input-number", 64);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRolesGroupComponent_ng_container_70_Template_nz_input_number_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.orderNo, $event) || (ctx_r1.form.orderNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 65)(45, "label", 66);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRolesGroupComponent_ng_container_70_Template_label_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.activity, $event) || (ctx_r1.form.activity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 20, "sys.role.viewRolesGroup.label.roleId", "M\xE3 Nh\xF3m (ID)"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.roleId)("placeholder", \u0275\u0275pipeBind2(7, 23, "sys.role.viewRolesGroup.label.roleId.placeholder", "T\u1EF1 \u0111\u1ED9ng sinh khi l\u01B0u"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 26, "sys.role.viewRolesGroup.label.nameVi", "T\xEAn Ti\u1EBFng Vi\u1EC7t"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nameVi);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 29, "sys.role.viewRolesGroup.label.nameEn", "T\xEAn Ti\u1EBFng Anh"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nameEn);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 32, "sys.role.viewRolesGroup.label.nameZh", "T\xEAn Ti\u1EBFng Trung"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nameZh);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 35, "sys.role.viewRolesGroup.label.nameKo", "T\xEAn Ti\u1EBFng H\xE0n"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nameKo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 38, "sys.role.viewRolesGroup.label.sysType", "Lo\u1EA1i h\u1EC7 th\u1ED1ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.sysType);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(36, 41, "sys.role.viewRolesGroup.opt.hub", "Hub"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(38, 44, "sys.role.viewRolesGroup.opt.partner", "Partner"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 47, "sys.role.viewRolesGroup.label.orderNo", "Th\u1EE9 t\u1EF1"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.orderNo);
    \u0275\u0275property("nzMin", 0);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.activity);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(47, 50, "sys.role.viewRolesGroup.label.activity", "Ho\u1EA1t \u0111\u1ED9ng"), " ");
  }
}
function ViewRolesGroupComponent_ng_container_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 67);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 68);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "sys.role.viewRolesGroup.msg.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a nh\xF3m quy\u1EC1n n\xE0y?"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.deleteTargetName);
  }
}
var I18N_KEYS = [
  "common.stt",
  "common.action",
  "common.search",
  "common.clearFilter",
  "common.addNew",
  "common.exportExcel",
  "common.save",
  "common.close",
  "common.edit",
  "common.delete",
  "common.confirm",
  "common.cancel",
  "common.noData",
  "common.totalRows",
  "common.loadFail",
  "common.saveSuccess",
  "common.saveFail",
  "common.deleteSuccess",
  "common.deleteFail",
  "sys.role.viewRolesGroup.search.keyword",
  "sys.role.viewRolesGroup.search.keyword.placeholder",
  "sys.role.viewRolesGroup.col.roleId",
  "sys.role.viewRolesGroup.col.nameVi",
  "sys.role.viewRolesGroup.col.sysType",
  "sys.role.viewRolesGroup.menuPanel.title",
  "sys.role.viewRolesGroup.btn.savePermission",
  "sys.role.viewRolesGroup.hint.selectRole",
  "sys.role.viewRolesGroup.label.roleId",
  "sys.role.viewRolesGroup.label.roleId.placeholder",
  "sys.role.viewRolesGroup.label.nameVi",
  "sys.role.viewRolesGroup.label.nameEn",
  "sys.role.viewRolesGroup.label.nameZh",
  "sys.role.viewRolesGroup.label.nameKo",
  "sys.role.viewRolesGroup.label.sysType",
  "sys.role.viewRolesGroup.label.orderNo",
  "sys.role.viewRolesGroup.label.activity",
  "sys.role.viewRolesGroup.msg.addTitle",
  "sys.role.viewRolesGroup.msg.editTitle",
  "sys.role.viewRolesGroup.msg.noRoleSelected",
  "sys.role.viewRolesGroup.msg.confirmDelete",
  "sys.role.viewRolesGroup.msg.menuPanelPrefix",
  "sys.role.viewRolesGroup.opt.hub",
  "sys.role.viewRolesGroup.opt.partner"
];
var PAGE_SIZE_OPTIONS = [25, 50, 100, 200];
var EMPTY_FORM = {
  roleNo: null,
  roleId: "",
  nameVi: "",
  nameEn: "",
  nameZh: "",
  nameKo: "",
  sysType: "0",
  orderNo: 0,
  activity: true
};
var ViewRolesGroupComponent = class _ViewRolesGroupComponent {
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
  searchKeyword = "";
  menuTreeNodes = signal(
    [],
    ...ngDevMode ? [{ debugName: "menuTreeNodes" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedRoleNo = signal(
    null,
    ...ngDevMode ? [{ debugName: "selectedRoleNo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedRoleLabel = signal(
    null,
    ...ngDevMode ? [{ debugName: "selectedRoleLabel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  checkedMenuKeys = signal(
    [],
    ...ngDevMode ? [{ debugName: "checkedMenuKeys" }] : (
      /* istanbul ignore next */
      []
    )
  );
  relationsLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "relationsLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  savingRelations = signal(
    false,
    ...ngDevMode ? [{ debugName: "savingRelations" }] : (
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
  modalTitle = computed(
    () => this.isNew() ? this.i18n.t("sys.role.viewRolesGroup.msg.addTitle", "Th\xEAm m\u1EDBi Nh\xF3m quy\u1EC1n") : this.i18n.t("sys.role.viewRolesGroup.msg.editTitle", "C\u1EADp nh\u1EADt Nh\xF3m quy\u1EC1n"),
    ...ngDevMode ? [{ debugName: "modalTitle" }] : (
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
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getMenuTree().subscribe({
      next: (list) => this.menuTreeNodes.set(this.buildMenuTree(list ?? [])),
      error: () => this.menuTreeNodes.set([])
    });
    this.search();
  }
  sysTypeLabel(sysType) {
    return sysType === "0" ? this.i18n.t("sys.role.viewRolesGroup.opt.hub", "Hub") : this.i18n.t("sys.role.viewRolesGroup.opt.partner", "Partner");
  }
  search() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.list(this.searchKeyword).subscribe({
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
    this.searchKeyword = "";
    this.search();
  }
  // ==================== Chọn nhóm quyền -> tải cây phân quyền ====================
  selectRole(row) {
    this.selectedRoleNo.set(row.roleNo);
    this.selectedRoleLabel.set(row.nameVi || row.roleId);
    this.relationsLoading.set(true);
    this.checkedMenuKeys.set([]);
    this.api.detail(row.roleNo).subscribe({
      next: (res) => {
        this.checkedMenuKeys.set((res?.roleRelations ?? []).map((r) => r.menuNo));
        this.relationsLoading.set(false);
      },
      error: () => {
        this.relationsLoading.set(false);
      }
    });
  }
  onMenuCheckedKeysChange(keys) {
    this.checkedMenuKeys.set(keys.map(String));
  }
  saveRelations() {
    const roleNo = this.selectedRoleNo();
    if (!roleNo) {
      this.message.warning(this.i18n.t("sys.role.viewRolesGroup.msg.noRoleSelected", "Ch\u01B0a ch\u1ECDn nh\xF3m quy\u1EC1n!"));
      return;
    }
    const payload = {
      roleNo,
      roleRelations: this.checkedMenuKeys().map((menuNo) => ({
        menuNo,
        selectr: "1",
        insertr: "1",
        updater: "1",
        deleter: "1"
      }))
    };
    this.savingRelations.set(true);
    this.api.saveRelations(payload).subscribe({
      next: (res) => {
        this.savingRelations.set(false);
        if (res.success) {
          this.message.success(res.message || this.i18n.t("common.saveSuccess", "L\u01B0u th\xE0nh c\xF4ng!"));
        } else {
          this.message.error(res.message || this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!"));
        }
      },
      error: () => {
        this.savingRelations.set(false);
        this.message.error(this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  // ==================== Modal Thêm mới / Cập nhật ====================
  openAddModal() {
    this.isNew.set(true);
    this.form = __spreadValues({}, EMPTY_FORM);
    this.modalVisible.set(true);
  }
  openEditModal(row) {
    this.isNew.set(false);
    this.form = {
      roleNo: row.roleNo,
      roleId: row.roleId || "",
      nameVi: row.nameVi || "",
      nameEn: row.nameEn || "",
      nameZh: row.nameZh || "",
      nameKo: row.nameKo || "",
      sysType: row.sysType || "0",
      orderNo: row.orderNo ?? 0,
      activity: row.activity !== 0
    };
    this.modalVisible.set(true);
  }
  closeModal() {
    this.modalVisible.set(false);
  }
  saveForm() {
    if (!this.form.nameVi) {
      this.message.warning(this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!"));
      return;
    }
    const payload = {
      roleNo: this.form.roleNo,
      cpnyId: null,
      nameVi: this.form.nameVi,
      nameEn: this.form.nameEn || null,
      nameZh: this.form.nameZh || null,
      nameKo: this.form.nameKo || null,
      sysType: this.form.sysType,
      orderNo: this.form.orderNo,
      activity: this.form.activity ? 1 : 0
    };
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        if (res.success) {
          this.modalVisible.set(false);
          this.message.success(res.message || this.i18n.t("common.saveSuccess", "L\u01B0u th\xE0nh c\xF4ng!"));
          this.search();
        } else {
          this.message.error(res.message || this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!"));
        }
      },
      error: () => {
        this.saving.set(false);
        this.message.error(this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!"));
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
    return this.deleteTarget ? `${this.deleteTarget.roleId} - ${this.deleteTarget.nameVi ?? ""}` : "";
  }
  confirmDelete() {
    if (!this.deleteTarget?.roleNo)
      return;
    const roleNo = this.deleteTarget.roleNo;
    this.deleting.set(true);
    this.api.delete(roleNo).subscribe({
      next: (res) => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        if (res.success) {
          this.message.success(res.message || this.i18n.t("common.deleteSuccess", "X\xF3a th\xE0nh c\xF4ng!"));
          if (this.selectedRoleNo() === roleNo) {
            this.selectedRoleNo.set(null);
            this.selectedRoleLabel.set(null);
            this.checkedMenuKeys.set([]);
          }
          this.search();
        } else {
          this.message.error(res.message || this.i18n.t("common.deleteFail", "X\xF3a th\u1EA5t b\u1EA1i!"));
        }
      },
      error: () => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.message.error(this.i18n.t("common.deleteFail", "X\xF3a th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  // ==================== Xuất Excel ====================
  /** Xuất excel client-side (endpoint /sys/api/role/export cũ thực chất trả .csv nên không dùng lại) -
   *  dùng thư viện xlsx (SheetJS) để tạo đúng file .xlsx nhị phân (xem CLAUDE.md). */
  exportExcel() {
    const headers = [
      this.i18n.t("common.stt", "STT"),
      this.i18n.t("sys.role.viewRolesGroup.col.roleId", "Role ID"),
      this.i18n.t("sys.role.viewRolesGroup.col.nameVi", "T\xEAn TV"),
      this.i18n.t("sys.role.viewRolesGroup.col.sysType", "H\u1EC7 th\u1ED1ng")
    ];
    const dataRows = this.rows().map((r, i) => [i + 1, r.roleId, r.nameVi, this.sysTypeLabel(r.sysType)]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "DanhSach");
    writeFileSync(workbook, "role_group_list.xlsx");
  }
  // ==================== Dựng cây menu phân quyền ====================
  buildMenuTree(list) {
    const idSet = new Set(list.map((m) => m.menuNo));
    const map = /* @__PURE__ */ new Map();
    list.forEach((item) => {
      let parent = item.menuParentNo;
      if (!parent || !idSet.has(parent))
        parent = "#";
      map.set(item.menuNo, {
        title: item.nameVi || item.menuCode || item.menuNo,
        key: item.menuNo,
        parent,
        children: []
      });
    });
    const roots = [];
    map.forEach((node) => {
      if (node.parent !== "#" && map.has(node.parent)) {
        map.get(node.parent).children.push(node);
      } else {
        roots.push(node);
      }
    });
    const markLeaf = (nodes, expand) => {
      nodes.forEach((n) => {
        n.isLeaf = !n.children || n.children.length === 0;
        n.expanded = expand;
        if (n.children?.length)
          markLeaf(n.children, false);
      });
    };
    markLeaf(roots, true);
    return roots;
  }
  static \u0275fac = function ViewRolesGroupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewRolesGroupComponent)(\u0275\u0275directiveInject(ViewRolesGroupService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewRolesGroupComponent, selectors: [["app-view-roles-group"]], decls: 76, vars: 92, consts: [["vrgTable", ""], ["vrgTotalTpl", ""], ["noSelTitle", ""], [1, "row"], [1, "col-md-7", "mb-3"], [1, "row", "g-3", "mb-3", 3, "ngSubmit"], [1, "col-md-6"], [1, "form-label"], ["nz-input", "", "name", "vrgSearchKeyword", 3, "ngModelChange", "ngModel", "placeholder"], [1, "col-md-6", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzType", "default", "type", "button", 1, "vrg-btn-export", 3, "click"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "140px"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "90px", 1, "text-center"], [4, "ngIf"], ["class", "vrg-row-clickable", 3, "table-active", "click", 4, "ngFor", "ngForOf"], [1, "col-md-5", "mb-3"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3", "border-bottom", "pb-2"], [1, "mb-0", "fw-bold"], [4, "ngIf", "ngIfElse"], ["nz-button", "", "nzType", "primary", "nzSize", "small", "type", "button", 3, "click", "disabled", "nzLoading"], [1, "bx", "bx-save"], ["class", "p-2 bg-light border text-muted", 4, "ngIf"], [1, "vrg-tree-scroll", "mt-2"], ["nzCheckable", "", 3, "nzData", "nzCheckedKeys", "nzCheckedKeysChange", 4, "ngIf"], ["nzWidth", "700px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "5", 1, "text-center", "text-muted"], [1, "vrg-row-clickable", 3, "click"], [1, "text-center"], [3, "nzColor"], ["nz-button", "", "nzType", "text", "nzSize", "small", 3, "click", "title"], [1, "bx", "bx-edit", "text-warning"], [1, "bx", "bx-trash", "text-danger"], [1, "text-primary"], [1, "p-2", "bg-light", "border", "text-muted"], [1, "bx", "bx-info-circle"], [1, "bx", "bx-loader-alt", "bx-spin"], ["nzCheckable", "", 3, "nzCheckedKeysChange", "nzData", "nzCheckedKeys"], [1, "row", "g-3"], [1, "col-md-12"], [1, "form-label", "fw-semibold"], ["nz-input", "", "name", "vrgRoleId", "readonly", "", 3, "ngModel", "placeholder"], [1, "text-danger"], ["nz-input", "", "name", "vrgNameVi", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vrgNameEn", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vrgNameZh", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vrgNameKo", 3, "ngModelChange", "ngModel"], [1, "form-label", "fw-semibold", "d-block"], ["name", "vrgSysType", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nzValue", "0", 3, "nzLabel"], ["nzValue", "1", 3, "nzLabel"], ["name", "vrgOrderNo", 1, "w-100", 3, "ngModelChange", "ngModel", "nzMin"], [1, "col-12"], ["nz-checkbox", "", "name", "vrgActivity", 3, "ngModelChange", "ngModel"], [1, "mb-1"], [1, "fw-bold", "mb-0"]], template: function ViewRolesGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "nz-card")(3, "form", 5);
      \u0275\u0275listener("ngSubmit", function ViewRolesGroupComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 6)(5, "label", 7);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewRolesGroupComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchKeyword, $event) || (ctx.searchKeyword = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 9)(11, "button", 10);
      \u0275\u0275element(12, "i", 11);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 12);
      \u0275\u0275listener("click", function ViewRolesGroupComponent_Template_button_click_15_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(16, "i", 13);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 14);
      \u0275\u0275listener("click", function ViewRolesGroupComponent_Template_button_click_19_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(20, "i", 15);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 16);
      \u0275\u0275listener("click", function ViewRolesGroupComponent_Template_button_click_23_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(24, "i", 17);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(27, ViewRolesGroupComponent_nz_alert_27_Template, 1, 1, "nz-alert", 18);
      \u0275\u0275elementStart(28, "nz-table", 19, 0)(30, "thead")(31, "tr")(32, "th", 20);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "th", 21);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "th");
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "th", 22);
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "th", 23);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "tbody");
      \u0275\u0275template(48, ViewRolesGroupComponent_tr_48_Template, 4, 4, "tr", 24)(49, ViewRolesGroupComponent_tr_49_Template, 17, 17, "tr", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275template(50, ViewRolesGroupComponent_ng_template_50_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "div", 26)(53, "nz-card")(54, "div", 27)(55, "h6", 28);
      \u0275\u0275template(56, ViewRolesGroupComponent_ng_container_56_Template, 5, 5, "ng-container", 29)(57, ViewRolesGroupComponent_ng_template_57_Template, 2, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "button", 30);
      \u0275\u0275listener("click", function ViewRolesGroupComponent_Template_button_click_59_listener() {
        return ctx.saveRelations();
      });
      \u0275\u0275element(60, "i", 31);
      \u0275\u0275text(61);
      \u0275\u0275pipe(62, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(63, ViewRolesGroupComponent_div_63_Template, 4, 4, "div", 32)(64, ViewRolesGroupComponent_div_64_Template, 2, 0, "div", 32);
      \u0275\u0275elementStart(65, "div", 33);
      \u0275\u0275template(66, ViewRolesGroupComponent_nz_tree_66_Template, 1, 2, "nz-tree", 34);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(67, "nz-modal", 35);
      \u0275\u0275pipe(68, "translate");
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewRolesGroupComponent_Template_nz_modal_nzOnCancel_67_listener() {
        return ctx.closeModal();
      })("nzOnOk", function ViewRolesGroupComponent_Template_nz_modal_nzOnOk_67_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(70, ViewRolesGroupComponent_ng_container_70_Template, 48, 53, "ng-container", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "nz-modal", 37);
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275pipe(74, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewRolesGroupComponent_Template_nz_modal_nzOnCancel_71_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function ViewRolesGroupComponent_Template_nz_modal_nzOnOk_71_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(75, ViewRolesGroupComponent_ng_container_75_Template, 6, 5, "ng-container", 36);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const vrgTable_r9 = \u0275\u0275reference(29);
      const vrgTotalTpl_r10 = \u0275\u0275reference(51);
      const noSelTitle_r11 = \u0275\u0275reference(58);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 40, "sys.role.viewRolesGroup.search.keyword", "T\u1EEB kh\xF3a (ID, T\xEAn)"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchKeyword);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 43, "sys.role.viewRolesGroup.search.keyword.placeholder", "Nh\u1EADp m\xE3 ho\u1EB7c t\xEAn nh\xF3m quy\u1EC1n"));
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 46, "common.search", "T\xECm ki\u1EBFm"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(18, 49, "common.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(22, 52, "common.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 55, "common.exportExcel", "Xu\u1EA5t Excel"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", vrgTotalTpl_r10)("nzScroll", \u0275\u0275pureFunction0(91, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 58, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 61, "sys.role.viewRolesGroup.col.roleId", "Role ID"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 64, "sys.role.viewRolesGroup.col.nameVi", "T\xEAn TV"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 67, "sys.role.viewRolesGroup.col.sysType", "H\u1EC7 th\u1ED1ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 70, "common.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", vrgTable_r9.data);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.selectedRoleLabel())("ngIfElse", noSelTitle_r11);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", !ctx.selectedRoleNo())("nzLoading", ctx.savingRelations());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(62, 73, "sys.role.viewRolesGroup.btn.savePermission", "L\u01B0u quy\u1EC1n"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.selectedRoleNo());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedRoleNo() && ctx.relationsLoading());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.selectedRoleNo() && !ctx.relationsLoading() && ctx.menuTreeNodes().length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", ctx.modalTitle())("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(68, 76, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(69, 79, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(4);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(72, 82, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(73, 85, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(74, 88, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzInputNumberModule, NzInputNumberComponent, NzSelectModule, NzOptionComponent, NzSelectComponent, NzCheckboxModule, NzCheckboxComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, NzTagModule, NzTagComponent, NzTreeModule, NzTreeComponent, TranslatePipe], styles: ["\n.vrg-btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n.vrg-row-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.vrg-tree-scroll[_ngcontent-%COMP%] {\n  max-height: 560px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=view-roles-group.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewRolesGroupComponent, [{
    type: Component,
    args: [{ selector: "app-view-roles-group", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzInputNumberModule,
      NzSelectModule,
      NzCheckboxModule,
      NzButtonModule,
      NzModalModule,
      NzAlertModule,
      NzTagModule,
      NzTreeModule,
      TranslatePipe
    ], template: `<div class="row">
  <!-- C\u1ED9t tr\xE1i: Danh s\xE1ch nh\xF3m quy\u1EC1n -->
  <div class="col-md-7 mb-3">
    <nz-card>
      <form class="row g-3 mb-3" (ngSubmit)="search()">
        <div class="col-md-6">
          <label class="form-label">{{ 'sys.role.viewRolesGroup.search.keyword' | translate:'T\u1EEB kh\xF3a (ID, T\xEAn)' }}</label>
          <input nz-input [(ngModel)]="searchKeyword" name="vrgSearchKeyword"
                 [placeholder]="'sys.role.viewRolesGroup.search.keyword.placeholder' | translate:'Nh\u1EADp m\xE3 ho\u1EB7c t\xEAn nh\xF3m quy\u1EC1n'">
        </div>
        <div class="col-md-6 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'common.search' | translate:'T\xECm ki\u1EBFm' }}
          </button>
          <button nz-button type="button" (click)="clearSearch()">
            <i class="bx bx-x"></i> {{ 'common.clearFilter' | translate:'X\xF3a l\u1ECDc' }}
          </button>
          <button nz-button nzType="primary" type="button" (click)="openAddModal()">
            <i class="bx bx-plus"></i> {{ 'common.addNew' | translate:'Th\xEAm m\u1EDBi' }}
          </button>
          <button nz-button nzType="default" type="button" class="vrg-btn-export" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'common.exportExcel' | translate:'Xu\u1EA5t Excel' }}
          </button>
        </div>
      </form>

      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="vrgTotalTpl"
                [nzScroll]="{ y: 'calc(100vh - 420px)' }" #vrgTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th nzWidth="140px">{{ 'sys.role.viewRolesGroup.col.roleId' | translate:'Role ID' }}</th>
            <th>{{ 'sys.role.viewRolesGroup.col.nameVi' | translate:'T\xEAn TV' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'sys.role.viewRolesGroup.col.sysType' | translate:'H\u1EC7 th\u1ED1ng' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'common.action' | translate:'Thao t\xE1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="5" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of vrgTable.data; let i = index" class="vrg-row-clickable"
              [class.table-active]="selectedRoleNo() === row.roleNo" (click)="selectRole(row)">
            <td class="text-center">{{ i + 1 }}</td>
            <td [attr.title]="row.roleId || null">{{ row.roleId }}</td>
            <td [attr.title]="row.nameVi || null">{{ row.nameVi }}</td>
            <td class="text-center">
              <nz-tag [nzColor]="row.sysType === '0' ? 'blue' : 'gold'">{{ sysTypeLabel(row.sysType) }}</nz-tag>
            </td>
            <td class="text-center">
              <button nz-button nzType="text" nzSize="small" [title]="'common.edit' | translate:'S\u1EEDa'"
                      (click)="openEditModal(row); $event.stopPropagation()">
                <i class="bx bx-edit text-warning"></i>
              </button>
              <button nz-button nzType="text" nzSize="small" [title]="'common.delete' | translate:'X\xF3a'"
                      (click)="openDeleteConfirm(row); $event.stopPropagation()">
                <i class="bx bx-trash text-danger"></i>
              </button>
            </td>
          </tr>
        </tbody>
        <ng-template #vrgTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>

  <!-- C\u1ED9t ph\u1EA3i: C\xE2y ph\xE2n quy\u1EC1n Menu -->
  <div class="col-md-5 mb-3">
    <nz-card>
      <div class="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
        <h6 class="mb-0 fw-bold">
          <ng-container *ngIf="selectedRoleLabel(); else noSelTitle">
            {{ 'sys.role.viewRolesGroup.msg.menuPanelPrefix' | translate:'Ph\xE2n quy\u1EC1n Menu -' }}
            <span class="text-primary">{{ selectedRoleLabel() }}</span>
          </ng-container>
          <ng-template #noSelTitle>{{ 'sys.role.viewRolesGroup.menuPanel.title' | translate:'Ph\xE2n quy\u1EC1n Menu' }}</ng-template>
        </h6>
        <button nz-button nzType="primary" nzSize="small" type="button"
                [disabled]="!selectedRoleNo()" [nzLoading]="savingRelations()" (click)="saveRelations()">
          <i class="bx bx-save"></i> {{ 'sys.role.viewRolesGroup.btn.savePermission' | translate:'L\u01B0u quy\u1EC1n' }}
        </button>
      </div>

      <div *ngIf="!selectedRoleNo()" class="p-2 bg-light border text-muted">
        <i class="bx bx-info-circle"></i> {{ 'sys.role.viewRolesGroup.hint.selectRole' | translate:'Vui l\xF2ng ch\u1ECDn m\u1ED9t nh\xF3m quy\u1EC1n b\xEAn tr\xE1i \u0111\u1EC3 ph\xE2n quy\u1EC1n.' }}
      </div>
      <div *ngIf="selectedRoleNo() && relationsLoading()" class="p-2 bg-light border text-muted">
        <i class="bx bx-loader-alt bx-spin"></i>
      </div>

      <div class="vrg-tree-scroll mt-2">
        <nz-tree *ngIf="selectedRoleNo() && !relationsLoading() && menuTreeNodes().length > 0"
                 [nzData]="menuTreeNodes()" nzCheckable [nzCheckedKeys]="checkedMenuKeys()"
                 (nzCheckedKeysChange)="onMenuCheckedKeysChange($event)"></nz-tree>
      </div>
    </nz-card>
  </div>
</div>

<!-- Modal Th\xEAm m\u1EDBi / C\u1EADp nh\u1EADt -->
<nz-modal [nzVisible]="modalVisible()" [nzTitle]="modalTitle()" nzWidth="700px"
          (nzOnCancel)="closeModal()" (nzOnOk)="saveForm()" [nzOkLoading]="saving()"
          [nzOkText]="'common.save' | translate:'L\u01B0u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <div class="row g-3">
      <div class="col-md-12">
        <label class="form-label fw-semibold">{{ 'sys.role.viewRolesGroup.label.roleId' | translate:'M\xE3 Nh\xF3m (ID)' }}</label>
        <input nz-input [ngModel]="form.roleId" name="vrgRoleId" readonly
               [placeholder]="'sys.role.viewRolesGroup.label.roleId.placeholder' | translate:'T\u1EF1 \u0111\u1ED9ng sinh khi l\u01B0u'">
      </div>

      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'sys.role.viewRolesGroup.label.nameVi' | translate:'T\xEAn Ti\u1EBFng Vi\u1EC7t' }} <span class="text-danger">*</span></label>
        <input nz-input [(ngModel)]="form.nameVi" name="vrgNameVi">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'sys.role.viewRolesGroup.label.nameEn' | translate:'T\xEAn Ti\u1EBFng Anh' }}</label>
        <input nz-input [(ngModel)]="form.nameEn" name="vrgNameEn">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'sys.role.viewRolesGroup.label.nameZh' | translate:'T\xEAn Ti\u1EBFng Trung' }}</label>
        <input nz-input [(ngModel)]="form.nameZh" name="vrgNameZh">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'sys.role.viewRolesGroup.label.nameKo' | translate:'T\xEAn Ti\u1EBFng H\xE0n' }}</label>
        <input nz-input [(ngModel)]="form.nameKo" name="vrgNameKo">
      </div>

      <div class="col-md-6">
        <label class="form-label fw-semibold d-block">{{ 'sys.role.viewRolesGroup.label.sysType' | translate:'Lo\u1EA1i h\u1EC7 th\u1ED1ng' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.sysType" name="vrgSysType">
          <nz-option nzValue="0" [nzLabel]="'sys.role.viewRolesGroup.opt.hub' | translate:'Hub'"></nz-option>
          <nz-option nzValue="1" [nzLabel]="'sys.role.viewRolesGroup.opt.partner' | translate:'Partner'"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'sys.role.viewRolesGroup.label.orderNo' | translate:'Th\u1EE9 t\u1EF1' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.orderNo" name="vrgOrderNo" [nzMin]="0"></nz-input-number>
      </div>

      <div class="col-12">
        <label nz-checkbox [(ngModel)]="form.activity" name="vrgActivity">
          {{ 'sys.role.viewRolesGroup.label.activity' | translate:'Ho\u1EA1t \u0111\u1ED9ng' }}
        </label>
      </div>
    </div>
  </ng-container>
</nz-modal>

<!-- Modal x\xE1c nh\u1EADn x\xF3a -->
<nz-modal [nzVisible]="deleteVisible()" [nzTitle]="'common.confirm' | translate:'X\xE1c nh\u1EADn'"
          (nzOnCancel)="closeDeleteConfirm()" (nzOnOk)="confirmDelete()" [nzOkLoading]="deleting()"
          [nzOkText]="'common.confirm' | translate:'X\xE1c nh\u1EADn'" [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'">
  <ng-container *nzModalContent>
    <p class="mb-1">{{ 'sys.role.viewRolesGroup.msg.confirmDelete' | translate:'B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a nh\xF3m quy\u1EC1n n\xE0y?' }}</p>
    <p class="fw-bold mb-0">{{ deleteTargetName }}</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-roles-group/view-roles-group.component.css */\n.vrg-btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n.vrg-row-clickable {\n  cursor: pointer;\n}\n.vrg-tree-scroll {\n  max-height: 560px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=view-roles-group.component.css.map */\n"] }]
  }], () => [{ type: ViewRolesGroupService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewRolesGroupComponent, { className: "ViewRolesGroupComponent", filePath: "src/app/view-roles-group/view-roles-group.component.ts", lineNumber: 111 });
})();
export {
  ViewRolesGroupComponent
};
//# debugId=adaa38ac-5d7c-502e-b12e-5a4170ff9e66
//# sourceMappingURL=chunk-6GSYALUD.js.map
