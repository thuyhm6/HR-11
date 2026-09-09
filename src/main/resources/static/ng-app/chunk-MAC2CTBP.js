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

// src/app/view-roles-group-list/view-roles-group-list.service.ts
var API_BASE = "/sys/api/role_group";
var ViewRolesGroupListService = class _ViewRolesGroupListService {
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
  detail(roleGroupNo) {
    const params = new HttpParams().set("roleGroupNo", roleGroupNo);
    return this.http.get(`${API_BASE}/detail`, { params, withCredentials: true });
  }
  save(payload) {
    return this.http.post(`${API_BASE}/save`, payload, { withCredentials: true });
  }
  saveRelations(payload) {
    return this.http.post(`${API_BASE}/saveRelations`, payload, { withCredentials: true });
  }
  delete(roleGroupId) {
    const params = new HttpParams().set("roleGroupId", roleGroupId);
    return this.http.post(`${API_BASE}/delete`, null, { params, withCredentials: true });
  }
  /** Toàn bộ danh sách Role (dùng chung API với ViewRolesGroupComponent) để render panel tick chọn. */
  getAllRoles() {
    return this.http.get("/sys/api/role/list", { withCredentials: true });
  }
  static \u0275fac = function ViewRolesGroupListService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewRolesGroupListService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewRolesGroupListService, factory: _ViewRolesGroupListService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewRolesGroupListService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-roles-group-list/view-roles-group-list.component.ts
var _c0 = () => ({ y: "calc(100vh - 420px)" });
function ViewRolesGroupListComponent_nz_alert_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 38);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ViewRolesGroupListComponent_tr_54_Template(rf, ctx) {
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
function ViewRolesGroupListComponent_tr_55_i_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 47);
  }
}
function ViewRolesGroupListComponent_tr_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 40);
    \u0275\u0275listener("click", function ViewRolesGroupListComponent_tr_55_Template_tr_click_0_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectGroup(row_r4));
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
    \u0275\u0275elementStart(10, "td", 41);
    \u0275\u0275template(11, ViewRolesGroupListComponent_tr_55_i_11_Template, 1, 0, "i", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 41)(13, "nz-tag", 42);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 41)(18, "button", 44);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275listener("click", function ViewRolesGroupListComponent_tr_55_Template_button_click_18_listener($event) {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.openEditModal(row_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(20, "i", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 44);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275listener("click", function ViewRolesGroupListComponent_tr_55_Template_button_click_21_listener($event) {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.openDeleteConfirm(row_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(23, "i", 46);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("table-active", ctx_r1.selectedGroupNo() === row_r4.roleGroupNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r5 + 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.roleGroupId || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.roleGroupId);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.nameVi || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.nameVi);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColor", row_r4.sysType === 0 ? "blue" : "gold");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.sysTypeLabel(row_r4.sysType));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r4.joinDefault === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColor", row_r4.activity === 1 ? "success" : "default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.activity === 1 ? \u0275\u0275pipeBind2(15, 14, "common.active", "Ho\u1EA1t \u0111\u1ED9ng") : \u0275\u0275pipeBind2(16, 17, "common.inactive", "Ng\u1EEBng ho\u1EA1t \u0111\u1ED9ng"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(19, 20, "common.edit", "S\u1EEDa"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(22, 23, "common.delete", "X\xF3a"));
  }
}
function ViewRolesGroupListComponent_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r6 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r6, " ");
  }
}
function ViewRolesGroupListComponent_ng_container_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "span", 48);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, "sys.role.viewRolesGroupList.msg.panelPrefix", "Ph\xE2n quy\u1EC1n h\u1EA1n -"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedGroupLabel());
  }
}
function ViewRolesGroupListComponent_ng_template_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(1, 1, "sys.role.viewRolesGroupList.panel.title", "Ph\xE2n quy\u1EC1n h\u1EA1n"));
  }
}
function ViewRolesGroupListComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275element(1, "i", 50);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "sys.role.viewRolesGroupList.hint.selectGroup", "Vui l\xF2ng ch\u1ECDn m\u1ED9t nh\xF3m quy\u1EC1n b\xEAn tr\xE1i \u0111\u1EC3 ph\xE2n quy\u1EC1n."), " ");
  }
}
function ViewRolesGroupListComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275element(1, "i", 51);
    \u0275\u0275elementEnd();
  }
}
function ViewRolesGroupListComponent_div_71_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "sys.role.viewRolesGroupList.msg.noRoleData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u quy\u1EC1n h\u1EA1n."), " ");
  }
}
function ViewRolesGroupListComponent_div_71_li_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 57)(1, "label", 58);
    \u0275\u0275listener("ngModelChange", function ViewRolesGroupListComponent_div_71_li_3_Template_label_ngModelChange_1_listener($event) {
      const role_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleRole(role_r8.roleNo, $event));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "small", 59);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.isRoleChecked(role_r8.roleNo))("name", "vrglRoleChk" + role_r8.roleNo);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", role_r8.nameVi || role_r8.roleId, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", role_r8.roleId, ")");
  }
}
function ViewRolesGroupListComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275template(1, ViewRolesGroupListComponent_div_71_div_1_Template, 3, 4, "div", 53);
    \u0275\u0275elementStart(2, "ul", 54);
    \u0275\u0275template(3, ViewRolesGroupListComponent_div_71_li_3_Template, 5, 4, "li", 55);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.allRoles().length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.allRoles());
  }
}
function ViewRolesGroupListComponent_ng_container_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 60)(2, "div", 61)(3, "label", 62);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 63);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 6)(9, "label", 62);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementStart(12, "span", 64);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRolesGroupListComponent_ng_container_76_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nameVi, $event) || (ctx_r1.form.nameVi = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 6)(16, "label", 62);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRolesGroupListComponent_ng_container_76_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nameEn, $event) || (ctx_r1.form.nameEn = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 6)(21, "label", 62);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRolesGroupListComponent_ng_container_76_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nameZh, $event) || (ctx_r1.form.nameZh = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 6)(26, "label", 62);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRolesGroupListComponent_ng_container_76_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nameKo, $event) || (ctx_r1.form.nameKo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 6)(31, "label", 69);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "nz-select", 70);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRolesGroupListComponent_ng_container_76_Template_nz_select_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.sysType, $event) || (ctx_r1.form.sysType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(35, "nz-option", 71);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275element(37, "nz-option", 71);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 6)(40, "label", 62);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "nz-input-number", 72);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRolesGroupListComponent_ng_container_76_Template_nz_input_number_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.orderNo, $event) || (ctx_r1.form.orderNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 6)(45, "label", 73);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRolesGroupListComponent_ng_container_76_Template_label_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.joinDefault, $event) || (ctx_r1.form.joinDefault = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 6)(49, "label", 74);
    \u0275\u0275twoWayListener("ngModelChange", function ViewRolesGroupListComponent_ng_container_76_Template_label_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.activity, $event) || (ctx_r1.form.activity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 24, "sys.role.viewRolesGroupList.label.roleGroupId", "M\xE3 Nh\xF3m (ID)"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.roleGroupId)("placeholder", \u0275\u0275pipeBind2(7, 27, "sys.role.viewRolesGroupList.label.roleGroupId.placeholder", "T\u1EF1 \u0111\u1ED9ng sinh khi l\u01B0u"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 30, "sys.role.viewRolesGroup.label.nameVi", "T\xEAn Ti\u1EBFng Vi\u1EC7t"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nameVi);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 33, "sys.role.viewRolesGroup.label.nameEn", "T\xEAn Ti\u1EBFng Anh"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nameEn);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 36, "sys.role.viewRolesGroup.label.nameZh", "T\xEAn Ti\u1EBFng Trung"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nameZh);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 39, "sys.role.viewRolesGroup.label.nameKo", "T\xEAn Ti\u1EBFng H\xE0n"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nameKo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 42, "sys.role.viewRolesGroup.label.sysType", "Lo\u1EA1i h\u1EC7 th\u1ED1ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.sysType);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzValue", 0)("nzLabel", \u0275\u0275pipeBind2(36, 45, "sys.role.viewRolesGroup.opt.hub", "Hub"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzValue", 1)("nzLabel", \u0275\u0275pipeBind2(38, 48, "sys.role.viewRolesGroup.opt.partner", "Partner"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 51, "sys.role.viewRolesGroup.label.orderNo", "Th\u1EE9 t\u1EF1"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.orderNo);
    \u0275\u0275property("nzMin", 0);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.joinDefault);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(47, 54, "sys.role.viewRolesGroupList.label.joinDefault", "M\u1EB7c \u0111\u1ECBnh tham gia"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.activity);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(51, 57, "sys.role.viewRolesGroup.label.activity", "Ho\u1EA1t \u0111\u1ED9ng"), " ");
  }
}
function ViewRolesGroupListComponent_ng_container_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 75);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 76);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "sys.role.viewRolesGroupList.msg.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a nh\xF3m quy\u1EC1n n\xE0y?"));
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
  "common.active",
  "common.inactive",
  "sys.role.viewRolesGroupList.search.keyword",
  "sys.role.viewRolesGroupList.search.keyword.placeholder",
  "sys.role.viewRolesGroupList.col.roleGroupId",
  "sys.role.viewRolesGroupList.col.nameVi",
  "sys.role.viewRolesGroupList.col.sysType",
  "sys.role.viewRolesGroupList.col.joinDefault",
  "sys.role.viewRolesGroupList.col.status",
  "sys.role.viewRolesGroupList.panel.title",
  "sys.role.viewRolesGroupList.btn.saveRelations",
  "sys.role.viewRolesGroupList.hint.selectGroup",
  "sys.role.viewRolesGroupList.modal.title",
  "sys.role.viewRolesGroupList.label.roleGroupId",
  "sys.role.viewRolesGroupList.label.roleGroupId.placeholder",
  "sys.role.viewRolesGroupList.label.joinDefault",
  "sys.role.viewRolesGroupList.msg.addTitle",
  "sys.role.viewRolesGroupList.msg.editTitle",
  "sys.role.viewRolesGroupList.msg.confirmDelete",
  "sys.role.viewRolesGroupList.msg.noRoleData",
  "sys.role.viewRolesGroupList.msg.panelPrefix",
  "sys.role.viewRolesGroup.label.nameVi",
  "sys.role.viewRolesGroup.label.nameEn",
  "sys.role.viewRolesGroup.label.nameZh",
  "sys.role.viewRolesGroup.label.nameKo",
  "sys.role.viewRolesGroup.label.sysType",
  "sys.role.viewRolesGroup.label.orderNo",
  "sys.role.viewRolesGroup.label.activity",
  "sys.role.viewRolesGroup.opt.hub",
  "sys.role.viewRolesGroup.opt.partner"
];
var PAGE_SIZE_OPTIONS = [25, 50, 100, 200];
var EMPTY_FORM = {
  roleGroupNo: null,
  roleGroupId: "",
  nameVi: "",
  nameEn: "",
  nameZh: "",
  nameKo: "",
  sysType: 0,
  orderNo: 0,
  joinDefault: false,
  activity: true
};
var ViewRolesGroupListComponent = class _ViewRolesGroupListComponent {
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
  allRoles = signal(
    [],
    ...ngDevMode ? [{ debugName: "allRoles" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedGroupNo = signal(
    null,
    ...ngDevMode ? [{ debugName: "selectedGroupNo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedGroupLabel = signal(
    null,
    ...ngDevMode ? [{ debugName: "selectedGroupLabel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  checkedRoleNos = signal(
    [],
    ...ngDevMode ? [{ debugName: "checkedRoleNos" }] : (
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
    () => this.isNew() ? this.i18n.t("sys.role.viewRolesGroupList.msg.addTitle", "Th\xEAm m\u1EDBi Nh\xF3m quy\u1EC1n") : this.i18n.t("sys.role.viewRolesGroupList.msg.editTitle", "C\u1EADp nh\u1EADt Nh\xF3m quy\u1EC1n"),
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
    this.api.getAllRoles().subscribe({
      next: (list) => this.allRoles.set(list ?? []),
      error: () => this.allRoles.set([])
    });
    this.search();
  }
  sysTypeLabel(sysType) {
    return sysType === 0 ? this.i18n.t("sys.role.viewRolesGroup.opt.hub", "Hub") : this.i18n.t("sys.role.viewRolesGroup.opt.partner", "Partner");
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
  // ==================== Chọn nhóm quyền -> tải danh sách Role đã gán ====================
  selectGroup(row) {
    this.selectedGroupNo.set(row.roleGroupNo);
    this.selectedGroupLabel.set(row.nameVi || row.roleGroupId);
    this.relationsLoading.set(true);
    this.checkedRoleNos.set([]);
    this.api.detail(row.roleGroupNo).subscribe({
      next: (res) => {
        this.checkedRoleNos.set(res?.roleNos ?? []);
        this.relationsLoading.set(false);
      },
      error: () => {
        this.relationsLoading.set(false);
      }
    });
  }
  isRoleChecked(roleNo) {
    return this.checkedRoleNos().includes(roleNo);
  }
  toggleRole(roleNo, checked) {
    const current = this.checkedRoleNos();
    this.checkedRoleNos.set(checked ? [...current, roleNo] : current.filter((no) => no !== roleNo));
  }
  saveRelations() {
    const roleGroupNo = this.selectedGroupNo();
    if (!roleGroupNo)
      return;
    const payload = {
      roleGroupNo,
      roleNos: this.checkedRoleNos()
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
      roleGroupNo: row.roleGroupNo,
      roleGroupId: row.roleGroupId || "",
      nameVi: row.nameVi || "",
      nameEn: row.nameEn || "",
      nameZh: row.nameZh || "",
      nameKo: row.nameKo || "",
      sysType: row.sysType ?? 0,
      orderNo: row.orderNo ?? 0,
      joinDefault: row.joinDefault === 1,
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
      roleGroupNo: this.form.roleGroupNo,
      cpnyId: null,
      nameVi: this.form.nameVi,
      nameEn: this.form.nameEn || null,
      nameZh: this.form.nameZh || null,
      nameKo: this.form.nameKo || null,
      sysType: this.form.sysType,
      orderNo: this.form.orderNo,
      joinDefault: this.form.joinDefault ? 1 : 0,
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
    return this.deleteTarget ? `${this.deleteTarget.roleGroupId} - ${this.deleteTarget.nameVi ?? ""}` : "";
  }
  confirmDelete() {
    if (!this.deleteTarget?.roleGroupId)
      return;
    const roleGroupNo = this.deleteTarget.roleGroupNo;
    const roleGroupId = this.deleteTarget.roleGroupId;
    this.deleting.set(true);
    this.api.delete(roleGroupId).subscribe({
      next: (res) => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        if (res.success) {
          this.message.success(res.message || this.i18n.t("common.deleteSuccess", "X\xF3a th\xE0nh c\xF4ng!"));
          if (this.selectedGroupNo() === roleGroupNo) {
            this.selectedGroupNo.set(null);
            this.selectedGroupLabel.set(null);
            this.checkedRoleNos.set([]);
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
  /** Xuất excel client-side (endpoint /sys/api/role_group/export cũ thực chất trả .csv nên không dùng
   *  lại) - dùng thư viện xlsx (SheetJS) để tạo đúng file .xlsx nhị phân (xem CLAUDE.md). */
  exportExcel() {
    const headers = [
      this.i18n.t("common.stt", "STT"),
      this.i18n.t("sys.role.viewRolesGroupList.col.roleGroupId", "M\xE3 Nh\xF3m (ID)"),
      this.i18n.t("sys.role.viewRolesGroupList.col.nameVi", "T\xEAn TV"),
      this.i18n.t("sys.role.viewRolesGroupList.col.sysType", "H\u1EC7 th\u1ED1ng"),
      this.i18n.t("sys.role.viewRolesGroupList.col.joinDefault", "M\u1EB7c \u0111\u1ECBnh"),
      this.i18n.t("sys.role.viewRolesGroupList.col.status", "Tr\u1EA1ng th\xE1i")
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      r.roleGroupId,
      r.nameVi,
      this.sysTypeLabel(r.sysType),
      r.joinDefault === 1 ? this.i18n.t("common.active", "Ho\u1EA1t \u0111\u1ED9ng") : "",
      r.activity === 1 ? this.i18n.t("common.active", "Ho\u1EA1t \u0111\u1ED9ng") : this.i18n.t("common.inactive", "Ng\u1EEBng ho\u1EA1t \u0111\u1ED9ng")
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "DanhSach");
    writeFileSync(workbook, "role_group_list.xlsx");
  }
  static \u0275fac = function ViewRolesGroupListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewRolesGroupListComponent)(\u0275\u0275directiveInject(ViewRolesGroupListService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewRolesGroupListComponent, selectors: [["app-view-roles-group-list"]], decls: 82, vars: 103, consts: [["vrglTable", ""], ["vrglTotalTpl", ""], ["vrglNoSelTitle", ""], [1, "row"], [1, "col-md-7", "mb-3"], [1, "row", "g-3", "mb-3", 3, "ngSubmit"], [1, "col-md-6"], [1, "form-label"], ["nz-input", "", "name", "vrglSearchKeyword", 3, "ngModelChange", "ngModel", "placeholder"], [1, "col-md-6", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzType", "default", "type", "button", 1, "vrgl-btn-export", 3, "click"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "140px"], ["nzWidth", "100px", 1, "text-center"], ["nzWidth", "90px", 1, "text-center"], ["nzWidth", "110px", 1, "text-center"], [4, "ngIf"], ["class", "vrgl-row-clickable", 3, "table-active", "click", 4, "ngFor", "ngForOf"], [1, "col-md-5", "mb-3"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3", "border-bottom", "pb-2"], [1, "mb-0", "fw-bold"], [4, "ngIf", "ngIfElse"], ["nz-button", "", "nzType", "primary", "nzSize", "small", "type", "button", 3, "click", "disabled", "nzLoading"], [1, "bx", "bx-save"], ["class", "p-2 bg-light border text-muted", 4, "ngIf"], ["class", "vrgl-roles-scroll mt-2", 4, "ngIf"], ["nzWidth", "700px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "7", 1, "text-center", "text-muted"], [1, "vrgl-row-clickable", 3, "click"], [1, "text-center"], [3, "nzColor"], ["class", "bx bx-check text-success fs-5", 4, "ngIf"], ["nz-button", "", "nzType", "text", "nzSize", "small", 3, "click", "title"], [1, "bx", "bx-edit", "text-warning"], [1, "bx", "bx-trash", "text-danger"], [1, "bx", "bx-check", "text-success", "fs-5"], [1, "text-primary"], [1, "p-2", "bg-light", "border", "text-muted"], [1, "bx", "bx-info-circle"], [1, "bx", "bx-loader-alt", "bx-spin"], [1, "vrgl-roles-scroll", "mt-2"], ["class", "text-center text-muted p-3", 4, "ngIf"], [1, "list-group", "list-group-flush"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "text-center", "text-muted", "p-3"], [1, "list-group-item"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel", "name"], [1, "text-muted"], [1, "row", "g-3"], [1, "col-md-12"], [1, "form-label", "fw-semibold"], ["nz-input", "", "name", "vrglRoleGroupId", "readonly", "", 3, "ngModel", "placeholder"], [1, "text-danger"], ["nz-input", "", "name", "vrglNameVi", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vrglNameEn", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vrglNameZh", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vrglNameKo", 3, "ngModelChange", "ngModel"], [1, "form-label", "fw-semibold", "d-block"], ["name", "vrglSysType", 1, "w-100", 3, "ngModelChange", "ngModel"], [3, "nzValue", "nzLabel"], ["name", "vrglOrderNo", 1, "w-100", 3, "ngModelChange", "ngModel", "nzMin"], ["nz-checkbox", "", "name", "vrglJoinDefault", 3, "ngModelChange", "ngModel"], ["nz-checkbox", "", "name", "vrglActivity", 3, "ngModelChange", "ngModel"], [1, "mb-1"], [1, "fw-bold", "mb-0"]], template: function ViewRolesGroupListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "nz-card")(3, "form", 5);
      \u0275\u0275listener("ngSubmit", function ViewRolesGroupListComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 6)(5, "label", 7);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewRolesGroupListComponent_Template_input_ngModelChange_8_listener($event) {
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
      \u0275\u0275listener("click", function ViewRolesGroupListComponent_Template_button_click_15_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(16, "i", 13);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 14);
      \u0275\u0275listener("click", function ViewRolesGroupListComponent_Template_button_click_19_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(20, "i", 15);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 16);
      \u0275\u0275listener("click", function ViewRolesGroupListComponent_Template_button_click_23_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(24, "i", 17);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(27, ViewRolesGroupListComponent_nz_alert_27_Template, 1, 1, "nz-alert", 18);
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
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "th", 24);
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "th", 23);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "tbody");
      \u0275\u0275template(54, ViewRolesGroupListComponent_tr_54_Template, 4, 4, "tr", 25)(55, ViewRolesGroupListComponent_tr_55_Template, 24, 26, "tr", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275template(56, ViewRolesGroupListComponent_ng_template_56_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(58, "div", 27)(59, "nz-card")(60, "div", 28)(61, "h6", 29);
      \u0275\u0275template(62, ViewRolesGroupListComponent_ng_container_62_Template, 5, 5, "ng-container", 30)(63, ViewRolesGroupListComponent_ng_template_63_Template, 2, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "button", 31);
      \u0275\u0275listener("click", function ViewRolesGroupListComponent_Template_button_click_65_listener() {
        return ctx.saveRelations();
      });
      \u0275\u0275element(66, "i", 32);
      \u0275\u0275text(67);
      \u0275\u0275pipe(68, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(69, ViewRolesGroupListComponent_div_69_Template, 4, 4, "div", 33)(70, ViewRolesGroupListComponent_div_70_Template, 2, 0, "div", 33)(71, ViewRolesGroupListComponent_div_71_Template, 4, 2, "div", 34);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(72, "nz-modal", 35);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275pipe(74, "translate");
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewRolesGroupListComponent_Template_nz_modal_nzOnCancel_72_listener() {
        return ctx.closeModal();
      })("nzOnOk", function ViewRolesGroupListComponent_Template_nz_modal_nzOnOk_72_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(76, ViewRolesGroupListComponent_ng_container_76_Template, 52, 60, "ng-container", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "nz-modal", 37);
      \u0275\u0275pipe(78, "translate");
      \u0275\u0275pipe(79, "translate");
      \u0275\u0275pipe(80, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewRolesGroupListComponent_Template_nz_modal_nzOnCancel_77_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function ViewRolesGroupListComponent_Template_nz_modal_nzOnOk_77_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(81, ViewRolesGroupListComponent_ng_container_81_Template, 6, 5, "ng-container", 36);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const vrglTable_r10 = \u0275\u0275reference(29);
      const vrglTotalTpl_r11 = \u0275\u0275reference(57);
      const vrglNoSelTitle_r12 = \u0275\u0275reference(64);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 42, "sys.role.viewRolesGroupList.search.keyword", "T\u1EEB kh\xF3a (ID, T\xEAn)"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchKeyword);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 45, "sys.role.viewRolesGroupList.search.keyword.placeholder", "Nh\u1EADp m\xE3 ho\u1EB7c t\xEAn nh\xF3m quy\u1EC1n"));
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 48, "common.search", "T\xECm ki\u1EBFm"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(18, 51, "common.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(22, 54, "common.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 57, "common.exportExcel", "Xu\u1EA5t Excel"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", vrglTotalTpl_r11)("nzScroll", \u0275\u0275pureFunction0(102, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 60, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 63, "sys.role.viewRolesGroupList.col.roleGroupId", "M\xE3 Nh\xF3m (ID)"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 66, "sys.role.viewRolesGroupList.col.nameVi", "T\xEAn TV"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 69, "sys.role.viewRolesGroupList.col.sysType", "H\u1EC7 th\u1ED1ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 72, "sys.role.viewRolesGroupList.col.joinDefault", "M\u1EB7c \u0111\u1ECBnh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 75, "sys.role.viewRolesGroupList.col.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(52, 78, "common.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", vrglTable_r10.data);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.selectedGroupLabel())("ngIfElse", vrglNoSelTitle_r12);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", !ctx.selectedGroupNo())("nzLoading", ctx.savingRelations());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(68, 81, "sys.role.viewRolesGroupList.btn.saveRelations", "L\u01B0u quy\u1EC1n h\u1EA1n"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.selectedGroupNo());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedGroupNo() && ctx.relationsLoading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedGroupNo() && !ctx.relationsLoading());
      \u0275\u0275advance();
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", \u0275\u0275pipeBind2(73, 84, "sys.role.viewRolesGroupList.modal.title", "Th\xF4ng tin Nh\xF3m quy\u1EC1n"))("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(74, 87, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(75, 90, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(5);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(78, 93, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(79, 96, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(80, 99, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzInputNumberModule, NzInputNumberComponent, NzSelectModule, NzOptionComponent, NzSelectComponent, NzCheckboxModule, NzCheckboxComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, NzTagModule, NzTagComponent, TranslatePipe], styles: ["\n.vrgl-btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n.vrgl-row-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.vrgl-roles-scroll[_ngcontent-%COMP%] {\n  max-height: 560px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=view-roles-group-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewRolesGroupListComponent, [{
    type: Component,
    args: [{ selector: "app-view-roles-group-list", standalone: true, imports: [
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
      TranslatePipe
    ], template: `<div class="row">
  <!-- C\u1ED9t tr\xE1i: Danh s\xE1ch nh\xF3m quy\u1EC1n -->
  <div class="col-md-7 mb-3">
    <nz-card>
      <form class="row g-3 mb-3" (ngSubmit)="search()">
        <div class="col-md-6">
          <label class="form-label">{{ 'sys.role.viewRolesGroupList.search.keyword' | translate:'T\u1EEB kh\xF3a (ID, T\xEAn)' }}</label>
          <input nz-input [(ngModel)]="searchKeyword" name="vrglSearchKeyword"
                 [placeholder]="'sys.role.viewRolesGroupList.search.keyword.placeholder' | translate:'Nh\u1EADp m\xE3 ho\u1EB7c t\xEAn nh\xF3m quy\u1EC1n'">
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
          <button nz-button nzType="default" type="button" class="vrgl-btn-export" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'common.exportExcel' | translate:'Xu\u1EA5t Excel' }}
          </button>
        </div>
      </form>

      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="vrglTotalTpl"
                [nzScroll]="{ y: 'calc(100vh - 420px)' }" #vrglTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th nzWidth="140px">{{ 'sys.role.viewRolesGroupList.col.roleGroupId' | translate:'M\xE3 Nh\xF3m (ID)' }}</th>
            <th>{{ 'sys.role.viewRolesGroupList.col.nameVi' | translate:'T\xEAn TV' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'sys.role.viewRolesGroupList.col.sysType' | translate:'H\u1EC7 th\u1ED1ng' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'sys.role.viewRolesGroupList.col.joinDefault' | translate:'M\u1EB7c \u0111\u1ECBnh' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'sys.role.viewRolesGroupList.col.status' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'common.action' | translate:'Thao t\xE1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="7" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of vrglTable.data; let i = index" class="vrgl-row-clickable"
              [class.table-active]="selectedGroupNo() === row.roleGroupNo" (click)="selectGroup(row)">
            <td class="text-center">{{ i + 1 }}</td>
            <td [attr.title]="row.roleGroupId || null">{{ row.roleGroupId }}</td>
            <td [attr.title]="row.nameVi || null">{{ row.nameVi }}</td>
            <td class="text-center">
              <nz-tag [nzColor]="row.sysType === 0 ? 'blue' : 'gold'">{{ sysTypeLabel(row.sysType) }}</nz-tag>
            </td>
            <td class="text-center">
              <i *ngIf="row.joinDefault === 1" class="bx bx-check text-success fs-5"></i>
            </td>
            <td class="text-center">
              <nz-tag [nzColor]="row.activity === 1 ? 'success' : 'default'">
                {{ row.activity === 1 ? ('common.active' | translate:'Ho\u1EA1t \u0111\u1ED9ng') : ('common.inactive' | translate:'Ng\u1EEBng ho\u1EA1t \u0111\u1ED9ng') }}
              </nz-tag>
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
        <ng-template #vrglTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>

  <!-- C\u1ED9t ph\u1EA3i: G\xE1n Role cho Nh\xF3m quy\u1EC1n -->
  <div class="col-md-5 mb-3">
    <nz-card>
      <div class="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
        <h6 class="mb-0 fw-bold">
          <ng-container *ngIf="selectedGroupLabel(); else vrglNoSelTitle">
            {{ 'sys.role.viewRolesGroupList.msg.panelPrefix' | translate:'Ph\xE2n quy\u1EC1n h\u1EA1n -' }}
            <span class="text-primary">{{ selectedGroupLabel() }}</span>
          </ng-container>
          <ng-template #vrglNoSelTitle>{{ 'sys.role.viewRolesGroupList.panel.title' | translate:'Ph\xE2n quy\u1EC1n h\u1EA1n' }}</ng-template>
        </h6>
        <button nz-button nzType="primary" nzSize="small" type="button"
                [disabled]="!selectedGroupNo()" [nzLoading]="savingRelations()" (click)="saveRelations()">
          <i class="bx bx-save"></i> {{ 'sys.role.viewRolesGroupList.btn.saveRelations' | translate:'L\u01B0u quy\u1EC1n h\u1EA1n' }}
        </button>
      </div>

      <div *ngIf="!selectedGroupNo()" class="p-2 bg-light border text-muted">
        <i class="bx bx-info-circle"></i> {{ 'sys.role.viewRolesGroupList.hint.selectGroup' | translate:'Vui l\xF2ng ch\u1ECDn m\u1ED9t nh\xF3m quy\u1EC1n b\xEAn tr\xE1i \u0111\u1EC3 ph\xE2n quy\u1EC1n.' }}
      </div>
      <div *ngIf="selectedGroupNo() && relationsLoading()" class="p-2 bg-light border text-muted">
        <i class="bx bx-loader-alt bx-spin"></i>
      </div>

      <div *ngIf="selectedGroupNo() && !relationsLoading()" class="vrgl-roles-scroll mt-2">
        <div *ngIf="allRoles().length === 0" class="text-center text-muted p-3">
          {{ 'sys.role.viewRolesGroupList.msg.noRoleData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u quy\u1EC1n h\u1EA1n.' }}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" *ngFor="let role of allRoles()">
            <label nz-checkbox [ngModel]="isRoleChecked(role.roleNo)"
                    (ngModelChange)="toggleRole(role.roleNo, $event)" [name]="'vrglRoleChk' + role.roleNo">
              {{ role.nameVi || role.roleId }} <small class="text-muted">({{ role.roleId }})</small>
            </label>
          </li>
        </ul>
      </div>
    </nz-card>
  </div>
</div>

<!-- Modal Th\xEAm m\u1EDBi / C\u1EADp nh\u1EADt -->
<nz-modal [nzVisible]="modalVisible()" [nzTitle]="'sys.role.viewRolesGroupList.modal.title' | translate:'Th\xF4ng tin Nh\xF3m quy\u1EC1n'"
          nzWidth="700px" (nzOnCancel)="closeModal()" (nzOnOk)="saveForm()" [nzOkLoading]="saving()"
          [nzOkText]="'common.save' | translate:'L\u01B0u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <div class="row g-3">
      <div class="col-md-12">
        <label class="form-label fw-semibold">{{ 'sys.role.viewRolesGroupList.label.roleGroupId' | translate:'M\xE3 Nh\xF3m (ID)' }}</label>
        <input nz-input [ngModel]="form.roleGroupId" name="vrglRoleGroupId" readonly
               [placeholder]="'sys.role.viewRolesGroupList.label.roleGroupId.placeholder' | translate:'T\u1EF1 \u0111\u1ED9ng sinh khi l\u01B0u'">
      </div>

      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'sys.role.viewRolesGroup.label.nameVi' | translate:'T\xEAn Ti\u1EBFng Vi\u1EC7t' }} <span class="text-danger">*</span></label>
        <input nz-input [(ngModel)]="form.nameVi" name="vrglNameVi">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'sys.role.viewRolesGroup.label.nameEn' | translate:'T\xEAn Ti\u1EBFng Anh' }}</label>
        <input nz-input [(ngModel)]="form.nameEn" name="vrglNameEn">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'sys.role.viewRolesGroup.label.nameZh' | translate:'T\xEAn Ti\u1EBFng Trung' }}</label>
        <input nz-input [(ngModel)]="form.nameZh" name="vrglNameZh">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'sys.role.viewRolesGroup.label.nameKo' | translate:'T\xEAn Ti\u1EBFng H\xE0n' }}</label>
        <input nz-input [(ngModel)]="form.nameKo" name="vrglNameKo">
      </div>

      <div class="col-md-6">
        <label class="form-label fw-semibold d-block">{{ 'sys.role.viewRolesGroup.label.sysType' | translate:'Lo\u1EA1i h\u1EC7 th\u1ED1ng' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.sysType" name="vrglSysType">
          <nz-option [nzValue]="0" [nzLabel]="'sys.role.viewRolesGroup.opt.hub' | translate:'Hub'"></nz-option>
          <nz-option [nzValue]="1" [nzLabel]="'sys.role.viewRolesGroup.opt.partner' | translate:'Partner'"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'sys.role.viewRolesGroup.label.orderNo' | translate:'Th\u1EE9 t\u1EF1' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.orderNo" name="vrglOrderNo" [nzMin]="0"></nz-input-number>
      </div>

      <div class="col-md-6">
        <label nz-checkbox [(ngModel)]="form.joinDefault" name="vrglJoinDefault">
          {{ 'sys.role.viewRolesGroupList.label.joinDefault' | translate:'M\u1EB7c \u0111\u1ECBnh tham gia' }}
        </label>
      </div>
      <div class="col-md-6">
        <label nz-checkbox [(ngModel)]="form.activity" name="vrglActivity">
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
    <p class="mb-1">{{ 'sys.role.viewRolesGroupList.msg.confirmDelete' | translate:'B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a nh\xF3m quy\u1EC1n n\xE0y?' }}</p>
    <p class="fw-bold mb-0">{{ deleteTargetName }}</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-roles-group-list/view-roles-group-list.component.css */\n.vrgl-btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n.vrgl-row-clickable {\n  cursor: pointer;\n}\n.vrgl-roles-scroll {\n  max-height: 560px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=view-roles-group-list.component.css.map */\n"] }]
  }], () => [{ type: ViewRolesGroupListService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewRolesGroupListComponent, { className: "ViewRolesGroupListComponent", filePath: "src/app/view-roles-group-list/view-roles-group-list.component.ts", lineNumber: 104 });
})();
export {
  ViewRolesGroupListComponent
};
//# debugId=5b85b41e-54d2-50a6-89e6-5c46dea6272b
//# sourceMappingURL=chunk-MAC2CTBP.js.map
