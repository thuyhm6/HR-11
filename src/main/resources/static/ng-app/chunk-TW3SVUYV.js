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
import "./chunk-2QLZSMGV.js";
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
  RequiredValidator,
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

// src/app/view-login-user/view-login-user.service.ts
var API_BASE = "/sys/api/user";
var ViewLoginUserService = class _ViewLoginUserService {
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
  detail(userNo) {
    const params = new HttpParams().set("userNo", userNo);
    return this.http.get(`${API_BASE}/detail`, { params, withCredentials: true });
  }
  saveRelations(payload) {
    return this.http.post(`${API_BASE}/saveRelations`, payload, { withCredentials: true });
  }
  resetPassword(userNo, newPassword) {
    const params = new HttpParams().set("userNo", userNo).set("newPassword", newPassword);
    return this.http.post(`${API_BASE}/resetPassword`, null, { params, withCredentials: true });
  }
  /** Toàn bộ danh sách Nhóm quyền (dùng chung API với ViewRolesGroupListComponent) để render panel tick chọn. */
  getAllRoleGroups() {
    return this.http.get("/sys/api/role_group/list", { withCredentials: true });
  }
  static \u0275fac = function ViewLoginUserService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewLoginUserService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewLoginUserService, factory: _ViewLoginUserService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewLoginUserService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-login-user/view-login-user.component.ts
var _c0 = () => ({ y: "calc(100vh - 420px)" });
function ViewLoginUserComponent_nz_alert_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 35);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ViewLoginUserComponent_tr_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewLoginUserComponent_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 37);
    \u0275\u0275listener("click", function ViewLoginUserComponent_tr_51_Template_tr_click_0_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectUser(row_r4));
    });
    \u0275\u0275elementStart(1, "td", 38);
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
    \u0275\u0275elementStart(9, "td", 38);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 38);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 38)(14, "button", 39);
    \u0275\u0275listener("click", function ViewLoginUserComponent_tr_51_Template_button_click_14_listener($event) {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.openResetPassword(row_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(15, "i", 40);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("table-active", ctx_r1.selectedUserNo() === row_r4.userNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r5 + 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.userName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.userName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.empName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.empName || row_r4.userName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.deptName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.deptName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.personId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.userType);
  }
}
function ViewLoginUserComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r6 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r6, " ");
  }
}
function ViewLoginUserComponent_ng_container_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "span", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, "sys.role.viewLoginUser.rolePanel.titlePrefix", "Nh\xF3m quy\u1EC1n -"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedUserLabel());
  }
}
function ViewLoginUserComponent_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(1, 1, "sys.role.viewLoginUser.rolePanel.title", "Nh\xF3m quy\u1EC1n"));
  }
}
function ViewLoginUserComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "i", 43);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "sys.role.viewLoginUser.hint.selectUser", "Vui l\xF2ng ch\u1ECDn m\u1ED9t ng\u01B0\u1EDDi d\xF9ng b\xEAn tr\xE1i \u0111\u1EC3 ph\xE2n nh\xF3m quy\u1EC1n."), " ");
  }
}
function ViewLoginUserComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "i", 44);
    \u0275\u0275elementEnd();
  }
}
function ViewLoginUserComponent_div_67_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "sys.role.viewLoginUser.noRoleData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u nh\xF3m quy\u1EC1n."), " ");
  }
}
function ViewLoginUserComponent_div_67_li_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 50)(1, "label", 51);
    \u0275\u0275listener("ngModelChange", function ViewLoginUserComponent_div_67_li_3_Template_label_ngModelChange_1_listener($event) {
      const group_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleRoleGroup(group_r8.roleGroupNo, $event));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "small", 52);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.isRoleGroupChecked(group_r8.roleGroupNo))("name", "vluRgChk" + group_r8.roleGroupNo);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r8.nameVi || group_r8.roleGroupNo, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", group_r8.roleGroupId, ")");
  }
}
function ViewLoginUserComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275template(1, ViewLoginUserComponent_div_67_div_1_Template, 3, 4, "div", 46);
    \u0275\u0275elementStart(2, "ul", 47);
    \u0275\u0275template(3, ViewLoginUserComponent_div_67_li_3_Template, 5, 4, "li", 48);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.allRoleGroups().length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.allRoleGroups());
  }
}
function ViewLoginUserComponent_ng_container_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 53)(2, "label", 7);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 54);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 55)(7, "label", 7);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementStart(10, "span", 56);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function ViewLoginUserComponent_ng_container_72_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.resetNewPassword, $event) || (ctx_r1.resetNewPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(13, "div", 58);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 5, "sys.role.viewLoginUser.modal.resetPassword.loginId", "ID \u0110\u0103ng nh\u1EADp"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.resetUserName);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 8, "sys.role.viewLoginUser.modal.resetPassword.newPassword", "M\u1EADt kh\u1EA9u m\u1EDBi"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.resetNewPassword);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 11, "sys.role.viewLoginUser.modal.resetPassword.defaultNote", "M\u1EADt kh\u1EA9u m\u1EB7c \u0111\u1ECBnh l\xE0 123456A@. B\u1EA1n c\xF3 th\u1EC3 t\u1EF1 thay \u0111\u1ED5i."));
  }
}
var DEFAULT_PASSWORD = "123456A@";
var I18N_KEYS = [
  "common.search",
  "common.clearFilter",
  "common.exportExcel",
  "common.close",
  "common.confirm",
  "common.noData",
  "common.totalRows",
  "common.loadFail",
  "common.saveSuccess",
  "common.saveFail",
  "sys.role.viewLoginUser.search.keyword",
  "sys.role.viewLoginUser.search.keyword.placeholder",
  "sys.role.viewLoginUser.col.no",
  "sys.role.viewLoginUser.col.loginId",
  "sys.role.viewLoginUser.col.fullName",
  "sys.role.viewLoginUser.col.dept",
  "sys.role.viewLoginUser.col.empCode",
  "sys.role.viewLoginUser.col.accountType",
  "sys.role.viewLoginUser.col.action",
  "sys.role.viewLoginUser.rolePanel.title",
  "sys.role.viewLoginUser.rolePanel.titlePrefix",
  "sys.role.viewLoginUser.hint.selectUser",
  "sys.role.viewLoginUser.noRoleData",
  "sys.role.viewLoginUser.btn.saveRoleGroup",
  "sys.role.viewLoginUser.modal.resetPassword.title",
  "sys.role.viewLoginUser.modal.resetPassword.loginId",
  "sys.role.viewLoginUser.modal.resetPassword.newPassword",
  "sys.role.viewLoginUser.modal.resetPassword.defaultNote"
];
var PAGE_SIZE_OPTIONS = [20, 50, 100, 200];
var ViewLoginUserComponent = class _ViewLoginUserComponent {
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
  allRoleGroups = signal(
    [],
    ...ngDevMode ? [{ debugName: "allRoleGroups" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedUserNo = signal(
    null,
    ...ngDevMode ? [{ debugName: "selectedUserNo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedUserLabel = signal(
    null,
    ...ngDevMode ? [{ debugName: "selectedUserLabel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  checkedRoleGroupNos = signal(
    [],
    ...ngDevMode ? [{ debugName: "checkedRoleGroupNos" }] : (
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
  resetVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "resetVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  resetting = signal(
    false,
    ...ngDevMode ? [{ debugName: "resetting" }] : (
      /* istanbul ignore next */
      []
    )
  );
  resetUserNo = "";
  resetUserName = "";
  resetNewPassword = DEFAULT_PASSWORD;
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getAllRoleGroups().subscribe({
      next: (list) => this.allRoleGroups.set(list ?? []),
      error: () => this.allRoleGroups.set([])
    });
    this.search();
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
  // ==================== Chọn user -> tải danh sách Nhóm quyền đã gán ====================
  selectUser(row) {
    this.selectedUserNo.set(row.userNo);
    this.selectedUserLabel.set(row.userName || row.userNo);
    this.relationsLoading.set(true);
    this.checkedRoleGroupNos.set([]);
    this.api.detail(row.userNo).subscribe({
      next: (res) => {
        this.checkedRoleGroupNos.set(res?.roleGroupNos ?? []);
        this.relationsLoading.set(false);
      },
      error: () => {
        this.relationsLoading.set(false);
      }
    });
  }
  isRoleGroupChecked(roleGroupNo) {
    return this.checkedRoleGroupNos().includes(roleGroupNo);
  }
  toggleRoleGroup(roleGroupNo, checked) {
    const current = this.checkedRoleGroupNos();
    this.checkedRoleGroupNos.set(checked ? [...current, roleGroupNo] : current.filter((no) => no !== roleGroupNo));
  }
  saveRelations() {
    const userNo = this.selectedUserNo();
    if (!userNo)
      return;
    const payload = {
      userNo,
      roleGroupNos: this.checkedRoleGroupNos()
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
  // ==================== Reset mật khẩu ====================
  openResetPassword(row) {
    this.resetUserNo = row.userNo;
    this.resetUserName = row.userName;
    this.resetNewPassword = DEFAULT_PASSWORD;
    this.resetVisible.set(true);
  }
  closeResetPassword() {
    this.resetVisible.set(false);
  }
  confirmResetPassword() {
    if (!this.resetNewPassword) {
      this.message.warning(this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!"));
      return;
    }
    this.resetting.set(true);
    this.api.resetPassword(this.resetUserNo, this.resetNewPassword).subscribe({
      next: (res) => {
        this.resetting.set(false);
        if (res.success) {
          this.resetVisible.set(false);
          this.message.success(res.message || this.i18n.t("common.saveSuccess", "L\u01B0u th\xE0nh c\xF4ng!"));
        } else {
          this.message.error(res.message || this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!"));
        }
      },
      error: () => {
        this.resetting.set(false);
        this.message.error(this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  // ==================== Xuất Excel ====================
  /** Xuất excel client-side (endpoint /sys/api/user/export cũ thực chất trả .csv nên không dùng lại) -
   *  dùng thư viện xlsx (SheetJS) để tạo đúng file .xlsx nhị phân (xem CLAUDE.md). */
  exportExcel() {
    const headers = [
      this.i18n.t("sys.role.viewLoginUser.col.no", "STT"),
      this.i18n.t("sys.role.viewLoginUser.col.loginId", "ID \u0110\u0103ng nh\u1EADp"),
      this.i18n.t("sys.role.viewLoginUser.col.fullName", "H\u1ECD t\xEAn"),
      this.i18n.t("sys.role.viewLoginUser.col.dept", "Ph\xF2ng ban"),
      this.i18n.t("sys.role.viewLoginUser.col.empCode", "M\xE3 NV"),
      this.i18n.t("sys.role.viewLoginUser.col.accountType", "Lo\u1EA1i TK")
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      r.userName,
      r.empName || r.userName,
      r.deptName,
      r.personId,
      r.userType
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "DanhSach");
    writeFileSync(workbook, "login_user_list.xlsx");
  }
  static \u0275fac = function ViewLoginUserComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewLoginUserComponent)(\u0275\u0275directiveInject(ViewLoginUserService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewLoginUserComponent, selectors: [["app-view-login-user"]], decls: 73, vars: 85, consts: [["vluTable", ""], ["vluTotalTpl", ""], ["vluNoSelTitle", ""], [1, "row"], [1, "col-md-7", "mb-3"], [1, "row", "g-3", "mb-3", 3, "ngSubmit"], [1, "col-md-6"], [1, "form-label"], ["nz-input", "", "name", "vluSearchKeyword", 3, "ngModelChange", "ngModel", "placeholder"], [1, "col-md-6", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], ["nz-button", "", "nzType", "default", "type", "button", 1, "vlu-btn-export", 3, "click"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "130px"], ["nzWidth", "110px"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "90px", 1, "text-center"], [4, "ngIf"], ["class", "vlu-row-clickable", 3, "table-active", "click", 4, "ngFor", "ngForOf"], [1, "col-md-5", "mb-3"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3", "border-bottom", "pb-2"], [1, "mb-0", "fw-bold"], [4, "ngIf", "ngIfElse"], ["nz-button", "", "nzType", "primary", "nzSize", "small", "type", "button", 3, "click", "disabled", "nzLoading"], [1, "bx", "bx-save"], ["class", "p-2 bg-light border text-muted", 4, "ngIf"], ["class", "vlu-rolegroups-scroll mt-2", 4, "ngIf"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "7", 1, "text-center", "text-muted"], [1, "vlu-row-clickable", 3, "click"], [1, "text-center"], ["nz-button", "", "nzType", "text", "nzSize", "small", "title", "Reset Password", 3, "click"], [1, "bx", "bx-key", "text-warning"], [1, "text-primary"], [1, "p-2", "bg-light", "border", "text-muted"], [1, "bx", "bx-info-circle"], [1, "bx", "bx-loader-alt", "bx-spin"], [1, "vlu-rolegroups-scroll", "mt-2"], ["class", "text-center text-muted p-3", 4, "ngIf"], [1, "list-group", "list-group-flush"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "text-center", "text-muted", "p-3"], [1, "list-group-item"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel", "name"], [1, "text-muted"], [1, "mb-3"], ["nz-input", "", "name", "vluResetUserName", "readonly", "", 3, "ngModel"], [1, "mb-1"], [1, "text-danger"], ["nz-input", "", "name", "vluResetNewPassword", "required", "", 3, "ngModelChange", "ngModel"], [1, "form-text"]], template: function ViewLoginUserComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "nz-card")(3, "form", 5);
      \u0275\u0275listener("ngSubmit", function ViewLoginUserComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 6)(5, "label", 7);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewLoginUserComponent_Template_input_ngModelChange_8_listener($event) {
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
      \u0275\u0275listener("click", function ViewLoginUserComponent_Template_button_click_15_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(16, "i", 13);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 14);
      \u0275\u0275listener("click", function ViewLoginUserComponent_Template_button_click_19_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(20, "i", 15);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(23, ViewLoginUserComponent_nz_alert_23_Template, 1, 1, "nz-alert", 16);
      \u0275\u0275elementStart(24, "nz-table", 17, 0)(26, "thead")(27, "tr")(28, "th", 18);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th", 19);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "th");
      \u0275\u0275text(35);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th");
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "th", 20);
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "th", 21);
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "th", 22);
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "tbody");
      \u0275\u0275template(50, ViewLoginUserComponent_tr_50_Template, 4, 4, "tr", 23)(51, ViewLoginUserComponent_tr_51_Template, 16, 11, "tr", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275template(52, ViewLoginUserComponent_ng_template_52_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(54, "div", 25)(55, "nz-card")(56, "div", 26)(57, "h6", 27);
      \u0275\u0275template(58, ViewLoginUserComponent_ng_container_58_Template, 5, 5, "ng-container", 28)(59, ViewLoginUserComponent_ng_template_59_Template, 2, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "button", 29);
      \u0275\u0275listener("click", function ViewLoginUserComponent_Template_button_click_61_listener() {
        return ctx.saveRelations();
      });
      \u0275\u0275element(62, "i", 30);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(65, ViewLoginUserComponent_div_65_Template, 4, 4, "div", 31)(66, ViewLoginUserComponent_div_66_Template, 2, 0, "div", 31)(67, ViewLoginUserComponent_div_67_Template, 4, 2, "div", 32);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(68, "nz-modal", 33);
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275pipe(71, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewLoginUserComponent_Template_nz_modal_nzOnCancel_68_listener() {
        return ctx.closeResetPassword();
      })("nzOnOk", function ViewLoginUserComponent_Template_nz_modal_nzOnOk_68_listener() {
        return ctx.confirmResetPassword();
      });
      \u0275\u0275template(72, ViewLoginUserComponent_ng_container_72_Template, 16, 14, "ng-container", 34);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const vluTable_r10 = \u0275\u0275reference(25);
      const vluTotalTpl_r11 = \u0275\u0275reference(53);
      const vluNoSelTitle_r12 = \u0275\u0275reference(60);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 36, "sys.role.viewLoginUser.search.keyword", "T\u1EEB kh\xF3a (ID, T\xEAn)"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchKeyword);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 39, "sys.role.viewLoginUser.search.keyword.placeholder", "Nh\u1EADp ID, M\xE3 NV ho\u1EB7c T\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 42, "common.search", "T\xECm ki\u1EBFm"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(18, 45, "common.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(22, 48, "common.exportExcel", "Xu\u1EA5t Excel"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 20)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", vluTotalTpl_r11)("nzScroll", \u0275\u0275pureFunction0(84, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 51, "sys.role.viewLoginUser.col.no", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 54, "sys.role.viewLoginUser.col.loginId", "ID \u0110\u0103ng nh\u1EADp"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 57, "sys.role.viewLoginUser.col.fullName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 60, "sys.role.viewLoginUser.col.dept", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 63, "sys.role.viewLoginUser.col.empCode", "M\xE3 NV"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 66, "sys.role.viewLoginUser.col.accountType", "Lo\u1EA1i TK"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 69, "sys.role.viewLoginUser.col.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", vluTable_r10.data);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngIf", ctx.selectedUserLabel())("ngIfElse", vluNoSelTitle_r12);
      \u0275\u0275advance(3);
      \u0275\u0275property("disabled", !ctx.selectedUserNo())("nzLoading", ctx.savingRelations());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(64, 72, "sys.role.viewLoginUser.btn.saveRoleGroup", "L\u01B0u nh\xF3m quy\u1EC1n"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.selectedUserNo());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedUserNo() && ctx.relationsLoading());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedUserNo() && !ctx.relationsLoading());
      \u0275\u0275advance();
      \u0275\u0275property("nzVisible", ctx.resetVisible())("nzTitle", \u0275\u0275pipeBind2(69, 75, "sys.role.viewLoginUser.modal.resetPassword.title", "Reset M\u1EADt kh\u1EA9u"))("nzOkLoading", ctx.resetting())("nzOkText", \u0275\u0275pipeBind2(70, 78, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(71, 81, "common.close", "\u0110\xF3ng"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzCheckboxModule, NzCheckboxComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\n.vlu-btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n.vlu-row-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.vlu-rolegroups-scroll[_ngcontent-%COMP%] {\n  max-height: 560px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=view-login-user.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewLoginUserComponent, [{
    type: Component,
    args: [{ selector: "app-view-login-user", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzCheckboxModule,
      NzButtonModule,
      NzModalModule,
      NzAlertModule,
      TranslatePipe
    ], template: `<div class="row">
  <!-- C\u1ED9t tr\xE1i: Danh s\xE1ch User -->
  <div class="col-md-7 mb-3">
    <nz-card>
      <form class="row g-3 mb-3" (ngSubmit)="search()">
        <div class="col-md-6">
          <label class="form-label">{{ 'sys.role.viewLoginUser.search.keyword' | translate:'T\u1EEB kh\xF3a (ID, T\xEAn)' }}</label>
          <input nz-input [(ngModel)]="searchKeyword" name="vluSearchKeyword"
                 [placeholder]="'sys.role.viewLoginUser.search.keyword.placeholder' | translate:'Nh\u1EADp ID, M\xE3 NV ho\u1EB7c T\xEAn'">
        </div>
        <div class="col-md-6 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'common.search' | translate:'T\xECm ki\u1EBFm' }}
          </button>
          <button nz-button type="button" (click)="clearSearch()">
            <i class="bx bx-x"></i> {{ 'common.clearFilter' | translate:'X\xF3a l\u1ECDc' }}
          </button>
          <button nz-button nzType="default" type="button" class="vlu-btn-export" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'common.exportExcel' | translate:'Xu\u1EA5t Excel' }}
          </button>
        </div>
      </form>

      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="20" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="vluTotalTpl"
                [nzScroll]="{ y: 'calc(100vh - 420px)' }" #vluTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'sys.role.viewLoginUser.col.no' | translate:'STT' }}</th>
            <th nzWidth="130px">{{ 'sys.role.viewLoginUser.col.loginId' | translate:'ID \u0110\u0103ng nh\u1EADp' }}</th>
            <th>{{ 'sys.role.viewLoginUser.col.fullName' | translate:'H\u1ECD t\xEAn' }}</th>
            <th>{{ 'sys.role.viewLoginUser.col.dept' | translate:'Ph\xF2ng ban' }}</th>
            <th nzWidth="110px">{{ 'sys.role.viewLoginUser.col.empCode' | translate:'M\xE3 NV' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'sys.role.viewLoginUser.col.accountType' | translate:'Lo\u1EA1i TK' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'sys.role.viewLoginUser.col.action' | translate:'Thao t\xE1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="7" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of vluTable.data; let i = index" class="vlu-row-clickable"
              [class.table-active]="selectedUserNo() === row.userNo" (click)="selectUser(row)">
            <td class="text-center">{{ i + 1 }}</td>
            <td [attr.title]="row.userName || null">{{ row.userName }}</td>
            <td [attr.title]="row.empName || null">{{ row.empName || row.userName }}</td>
            <td [attr.title]="row.deptName || null">{{ row.deptName }}</td>
            <td class="text-center">{{ row.personId }}</td>
            <td class="text-center">{{ row.userType }}</td>
            <td class="text-center">
              <button nz-button nzType="text" nzSize="small" title="Reset Password"
                      (click)="openResetPassword(row); $event.stopPropagation()">
                <i class="bx bx-key text-warning"></i>
              </button>
            </td>
          </tr>
        </tbody>
        <ng-template #vluTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>

  <!-- C\u1ED9t ph\u1EA3i: G\xE1n Nh\xF3m quy\u1EC1n cho User -->
  <div class="col-md-5 mb-3">
    <nz-card>
      <div class="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
        <h6 class="mb-0 fw-bold">
          <ng-container *ngIf="selectedUserLabel(); else vluNoSelTitle">
            {{ 'sys.role.viewLoginUser.rolePanel.titlePrefix' | translate:'Nh\xF3m quy\u1EC1n -' }}
            <span class="text-primary">{{ selectedUserLabel() }}</span>
          </ng-container>
          <ng-template #vluNoSelTitle>{{ 'sys.role.viewLoginUser.rolePanel.title' | translate:'Nh\xF3m quy\u1EC1n' }}</ng-template>
        </h6>
        <button nz-button nzType="primary" nzSize="small" type="button"
                [disabled]="!selectedUserNo()" [nzLoading]="savingRelations()" (click)="saveRelations()">
          <i class="bx bx-save"></i> {{ 'sys.role.viewLoginUser.btn.saveRoleGroup' | translate:'L\u01B0u nh\xF3m quy\u1EC1n' }}
        </button>
      </div>

      <div *ngIf="!selectedUserNo()" class="p-2 bg-light border text-muted">
        <i class="bx bx-info-circle"></i> {{ 'sys.role.viewLoginUser.hint.selectUser' | translate:'Vui l\xF2ng ch\u1ECDn m\u1ED9t ng\u01B0\u1EDDi d\xF9ng b\xEAn tr\xE1i \u0111\u1EC3 ph\xE2n nh\xF3m quy\u1EC1n.' }}
      </div>
      <div *ngIf="selectedUserNo() && relationsLoading()" class="p-2 bg-light border text-muted">
        <i class="bx bx-loader-alt bx-spin"></i>
      </div>

      <div *ngIf="selectedUserNo() && !relationsLoading()" class="vlu-rolegroups-scroll mt-2">
        <div *ngIf="allRoleGroups().length === 0" class="text-center text-muted p-3">
          {{ 'sys.role.viewLoginUser.noRoleData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u nh\xF3m quy\u1EC1n.' }}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" *ngFor="let group of allRoleGroups()">
            <label nz-checkbox [ngModel]="isRoleGroupChecked(group.roleGroupNo)"
                    (ngModelChange)="toggleRoleGroup(group.roleGroupNo, $event)" [name]="'vluRgChk' + group.roleGroupNo">
              {{ group.nameVi || group.roleGroupNo }} <small class="text-muted">({{ group.roleGroupId }})</small>
            </label>
          </li>
        </ul>
      </div>
    </nz-card>
  </div>
</div>

<!-- Modal Reset m\u1EADt kh\u1EA9u -->
<nz-modal [nzVisible]="resetVisible()" [nzTitle]="'sys.role.viewLoginUser.modal.resetPassword.title' | translate:'Reset M\u1EADt kh\u1EA9u'"
          (nzOnCancel)="closeResetPassword()" (nzOnOk)="confirmResetPassword()" [nzOkLoading]="resetting()"
          [nzOkText]="'common.confirm' | translate:'X\xE1c nh\u1EADn'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <div class="mb-3">
      <label class="form-label">{{ 'sys.role.viewLoginUser.modal.resetPassword.loginId' | translate:'ID \u0110\u0103ng nh\u1EADp' }}</label>
      <input nz-input [ngModel]="resetUserName" name="vluResetUserName" readonly>
    </div>
    <div class="mb-1">
      <label class="form-label">
        {{ 'sys.role.viewLoginUser.modal.resetPassword.newPassword' | translate:'M\u1EADt kh\u1EA9u m\u1EDBi' }}
        <span class="text-danger">*</span>
      </label>
      <input nz-input [(ngModel)]="resetNewPassword" name="vluResetNewPassword" required>
      <div class="form-text">{{ 'sys.role.viewLoginUser.modal.resetPassword.defaultNote' | translate:'M\u1EADt kh\u1EA9u m\u1EB7c \u0111\u1ECBnh l\xE0 123456A@. B\u1EA1n c\xF3 th\u1EC3 t\u1EF1 thay \u0111\u1ED5i.' }}</div>
    </div>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-login-user/view-login-user.component.css */\n.vlu-btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n.vlu-row-clickable {\n  cursor: pointer;\n}\n.vlu-rolegroups-scroll {\n  max-height: 560px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=view-login-user.component.css.map */\n"] }]
  }], () => [{ type: ViewLoginUserService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewLoginUserComponent, { className: "ViewLoginUserComponent", filePath: "src/app/view-login-user/view-login-user.component.ts", lineNumber: 76 });
})();
export {
  ViewLoginUserComponent
};
//# debugId=4cc686a4-97b1-582e-8567-5dbef0952523
//# sourceMappingURL=chunk-TW3SVUYV.js.map
