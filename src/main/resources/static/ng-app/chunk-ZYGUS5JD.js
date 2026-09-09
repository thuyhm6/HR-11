import {
  utils,
  writeFileSync
} from "./chunk-6KSHLFTP.js";
import {
  NzMessageService
} from "./chunk-XWW7CXU6.js";
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
  NzSpinComponent,
  NzSpinModule
} from "./chunk-VWYGF7JF.js";
import "./chunk-JSOAL7UF.js";
import "./chunk-2QLZSMGV.js";
import "./chunk-2GOAB54B.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
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
  computed,
  formatDate,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
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
  ɵɵpureFunction1,
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

// src/app/view-current-org-info/view-current-org-info.service.ts
var API_BASE = "/org/api/current";
var ViewCurrentOrgInfoService = class _ViewCurrentOrgInfoService {
  constructor(http) {
    this.http = http;
  }
  http;
  getStructure() {
    return this.http.get(`${API_BASE}/structure`, { withCredentials: true });
  }
  getEmployees(deptNo) {
    return this.http.get(`${API_BASE}/employees`, {
      params: new HttpParams().set("deptNo", deptNo),
      withCredentials: true
    });
  }
  static \u0275fac = function ViewCurrentOrgInfoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewCurrentOrgInfoService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewCurrentOrgInfoService, factory: _ViewCurrentOrgInfoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewCurrentOrgInfoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-current-org-info/view-current-org-info.component.ts
var _c0 = () => ({ padding: "12px" });
var _c1 = (a0) => [a0];
var _c2 = () => [];
var _c3 = () => ({ y: "calc(100vh - 420px)" });
function ViewCurrentOrgInfoComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "orgCompose.msg.noOrgData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u t\u1ED5 ch\u1EE9c"), " ");
  }
}
function ViewCurrentOrgInfoComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function ViewCurrentOrgInfoComponent_ng_template_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.exportExcel());
    });
    \u0275\u0275element(1, "i", 24);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "common.exportExcel", "Xu\u1EA5t Excel"), " ");
  }
}
function ViewCurrentOrgInfoComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 27);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 26)(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 26)(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 26)(20, "strong");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 26)(26, "strong");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 28);
    \u0275\u0275element(32, "hr", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dept_r4 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(4, 10, "evs.manage.viewEvsSchedulePanel.col.deptName", "T\xEAn ph\xF2ng ban"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(dept_r4.orgNameLocal);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(10, 13, "org.title.DEPT_ID", "ID ph\xF2ng ban"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(dept_r4.deptNo);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(16, 16, "org.orgManage.DEPARTMENT_INFORMATION.Z", "Tr\u01B0\u1EDFng ph\xF2ng"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.managerDisplay(dept_r4));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(22, 19, "org.orgManage.title.deptType", "Lo\u1EA1i h\xECnh ph\xF2ng ban"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(dept_r4.deptType);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(28, 22, "orgCompose.costCenter", "M\xE3 chi ph\xED"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.costCenterDisplay(dept_r4));
  }
}
function ViewCurrentOrgInfoComponent_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 30);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewCurrentOrgInfoComponent_tr_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 19);
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
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 19);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const emp_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r6 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r5.empId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r5.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r5.englishName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r5.position);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDateStarted(emp_r5.dateStarted));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.isActiveEmp(emp_r5) ? \u0275\u0275pipeBind2(15, 7, "common.active", "Ho\u1EA1t \u0111\u1ED9ng") : \u0275\u0275pipeBind2(16, 10, "common.inactive", "Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng"), " ");
  }
}
function ViewCurrentOrgInfoComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r7 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r7, " ");
  }
}
var I18N_KEYS = [
  "org.orgManage.viewCurrentOrgInfo.title",
  "org.orgManage.title.orgHorizView",
  "orgCompose.searchTreePlaceholder",
  "orgCompose.expandAll",
  "orgCompose.collapseAll",
  "orgCompose.msg.noOrgData",
  "org.title.DEPT_INFO",
  "evs.manage.viewEvsSchedulePanel.col.deptName",
  "org.title.DEPT_ID",
  "org.orgManage.DEPARTMENT_INFORMATION.Z",
  "org.orgManage.title.deptType",
  "orgCompose.costCenter",
  "common.stt",
  "org.title.EMPID",
  "sys.affirm.title.personName",
  "org.title.ORG_NAME_ENG",
  "hrm.empinfo.workexp.position",
  "org.title.DATE_STARTED",
  "common.status",
  "common.active",
  "common.inactive",
  "common.noData",
  "common.exportExcel",
  "common.loadFail",
  "common.totalRows"
];
function buildOrgTree(list) {
  const idSet = new Set(list.map((o) => o.deptNo));
  const nodeMap = /* @__PURE__ */ new Map();
  list.forEach((item) => {
    nodeMap.set(item.deptNo, {
      key: item.deptNo,
      title: item.orgNameLocal || item.deptNo,
      icon: "bx bxs-folder",
      isLeaf: true,
      data: item
    });
  });
  const roots = [];
  list.forEach((item) => {
    const node = nodeMap.get(item.deptNo);
    const parentId = item.parentDeptNo;
    const parentNode = parentId && parentId !== "ROOT" && idSet.has(parentId) ? nodeMap.get(parentId) : void 0;
    if (parentNode) {
      parentNode.isLeaf = false;
      (parentNode.children ??= []).push(node);
    } else {
      roots.push(node);
    }
  });
  return roots;
}
function collectAllKeys(nodes) {
  const keys = [];
  const walk = (list) => {
    list.forEach((n) => {
      keys.push(n.key);
      if (n.children?.length)
        walk(n.children);
    });
  };
  walk(nodes);
  return keys;
}
var ViewCurrentOrgInfoComponent = class _ViewCurrentOrgInfoComponent {
  constructor(api, i18n, message) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
  }
  api;
  i18n;
  message;
  treeData = signal(
    [],
    ...ngDevMode ? [{ debugName: "treeData" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loadingTree = signal(
    false,
    ...ngDevMode ? [{ debugName: "loadingTree" }] : (
      /* istanbul ignore next */
      []
    )
  );
  treeNodes = computed(
    () => buildOrgTree(this.treeData()),
    ...ngDevMode ? [{ debugName: "treeNodes" }] : (
      /* istanbul ignore next */
      []
    )
  );
  expandedKeys = signal(
    [],
    ...ngDevMode ? [{ debugName: "expandedKeys" }] : (
      /* istanbul ignore next */
      []
    )
  );
  treeSearchValue = "";
  selectedDeptKey = null;
  selectedDept = signal(
    null,
    ...ngDevMode ? [{ debugName: "selectedDept" }] : (
      /* istanbul ignore next */
      []
    )
  );
  panelTitle = computed(
    () => {
      const dept = this.selectedDept();
      const base = this.i18n.t("org.title.DEPT_INFO", "Th\xF4ng tin ph\xF2ng ban");
      return dept ? `${base} - ${dept.orgNameLocal || dept.deptNo}` : base;
    },
    ...ngDevMode ? [{ debugName: "panelTitle" }] : (
      /* istanbul ignore next */
      []
    )
  );
  employees = signal(
    [],
    ...ngDevMode ? [{ debugName: "employees" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loadingEmployees = signal(
    false,
    ...ngDevMode ? [{ debugName: "loadingEmployees" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pageSizeOptions = [20, 50, 100];
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadTree();
  }
  loadTree() {
    this.loadingTree.set(true);
    this.api.getStructure().subscribe({
      next: (list) => {
        this.treeData.set(list ?? []);
        this.expandedKeys.set(buildOrgTree(list ?? []).map((n) => n.key));
        this.loadingTree.set(false);
      },
      error: () => {
        this.treeData.set([]);
        this.loadingTree.set(false);
        this.message.error(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  expandAllNodes() {
    this.expandedKeys.set(collectAllKeys(this.treeNodes()));
  }
  collapseAllNodes() {
    this.expandedKeys.set([]);
  }
  onTreeClick(event) {
    const data = event.node?.origin?.data;
    if (!data)
      return;
    this.selectedDeptKey = data.deptNo;
    this.selectedDept.set(data);
    this.loadEmployees(data.deptNo);
  }
  loadEmployees(deptNo) {
    this.loadingEmployees.set(true);
    this.api.getEmployees(deptNo).subscribe({
      next: (list) => {
        this.employees.set(list ?? []);
        this.loadingEmployees.set(false);
      },
      error: () => {
        this.employees.set([]);
        this.loadingEmployees.set(false);
        this.message.error(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  managerDisplay(dept) {
    return dept.managerEmpName ? `${dept.managerEmpName} (${dept.managerEmpId ?? ""})` : dept.managerEmpId ?? "";
  }
  costCenterDisplay(dept) {
    return dept.costCenterName ? `${dept.costCenterName} (${dept.costCenter ?? ""})` : dept.costCenter ?? "";
  }
  isActiveEmp(emp) {
    return emp.activity === 1 || String(emp.activity) === "1";
  }
  formatDateStarted(dateStr) {
    if (!dateStr)
      return "";
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? "" : formatDate(d, "dd/MM/yyyy", "vi");
  }
  // ==================== Xuất Excel ====================
  exportExcel() {
    const headers = [
      this.i18n.t("common.stt", "STT"),
      this.i18n.t("org.title.EMPID", "M\xE3 nh\xE2n vi\xEAn"),
      this.i18n.t("sys.affirm.title.personName", "T\xEAn nh\xE2n vi\xEAn"),
      this.i18n.t("org.title.ORG_NAME_ENG", "T\xEAn ti\u1EBFng Anh"),
      this.i18n.t("hrm.empinfo.workexp.position", "V\u1ECB tr\xED"),
      this.i18n.t("org.title.DATE_STARTED", "Ng\xE0y v\xE0o l\xE0m"),
      this.i18n.t("common.status", "Tr\u1EA1ng th\xE1i")
    ];
    const dataRows = this.employees().map((e, i) => [
      i + 1,
      e.empId,
      e.localName,
      e.englishName,
      e.position,
      this.formatDateStarted(e.dateStarted),
      this.isActiveEmp(e) ? this.i18n.t("common.active", "Ho\u1EA1t \u0111\u1ED9ng") : this.i18n.t("common.inactive", "Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng")
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "DanhSachNhanVien");
    writeFileSync(workbook, "danh_sach_nhan_vien_phong_ban.xlsx");
  }
  static \u0275fac = function ViewCurrentOrgInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewCurrentOrgInfoComponent)(\u0275\u0275directiveInject(ViewCurrentOrgInfoService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewCurrentOrgInfoComponent, selectors: [["app-view-current-org-info"]], decls: 52, vars: 69, consts: [["currOrgExtra", ""], ["currOrgEmpTable", ""], ["currOrgTotalTpl", ""], [1, "row"], [1, "col-md-3", "mb-3"], [3, "nzTitle", "nzBodyStyle"], ["nz-input", "", "id", "currOrgTreeSearch", "name", "currOrgTreeSearch", 1, "mb-2", 3, "ngModelChange", "ngModel", "placeholder"], [1, "mb-2", "btn-group"], ["nz-button", "", "nzSize", "small", "type", "button", "id", "currOrgBtnExpandAll", 3, "click"], ["nz-button", "", "nzSize", "small", "type", "button", "id", "currOrgBtnCollapseAll", 3, "click"], [3, "nzSpinning"], [1, "curr-org-tree-scroll"], ["nzSelectMode", "", 3, "nzExpandedKeysChange", "nzClick", "nzData", "nzSearchValue", "nzExpandedKeys", "nzSelectedKeys"], ["class", "text-muted fst-italic p-2", 4, "ngIf"], [1, "col-md-9", "mb-3"], [3, "nzTitle", "nzExtra"], ["class", "row mb-3", 4, "ngIf"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], [1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "text-muted", "fst-italic", "p-2"], ["nz-button", "", "nzSize", "small", "type", "button", "id", "currOrgBtnExportExcel", 3, "click"], [1, "bx", "bx-file-blank"], [1, "row", "mb-3"], [1, "col-md-3", "mb-2"], [1, "text-primary"], [1, "col-12"], [1, "my-2"], ["colspan", "7", 1, "text-center", "text-muted"]], template: function ViewCurrentOrgInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "nz-card", 5);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementStart(4, "input", 6);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewCurrentOrgInfoComponent_Template_input_ngModelChange_4_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.treeSearchValue, $event) || (ctx.treeSearchValue = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(6, "div", 7)(7, "button", 8);
      \u0275\u0275listener("click", function ViewCurrentOrgInfoComponent_Template_button_click_7_listener() {
        return ctx.expandAllNodes();
      });
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 9);
      \u0275\u0275listener("click", function ViewCurrentOrgInfoComponent_Template_button_click_10_listener() {
        return ctx.collapseAllNodes();
      });
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "nz-spin", 10)(14, "div", 11)(15, "nz-tree", 12);
      \u0275\u0275twoWayListener("nzExpandedKeysChange", function ViewCurrentOrgInfoComponent_Template_nz_tree_nzExpandedKeysChange_15_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.expandedKeys, $event) || (ctx.expandedKeys = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("nzClick", function ViewCurrentOrgInfoComponent_Template_nz_tree_nzClick_15_listener($event) {
        return ctx.onTreeClick($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(16, ViewCurrentOrgInfoComponent_div_16_Template, 3, 4, "div", 13);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(17, "div", 14)(18, "nz-card", 15);
      \u0275\u0275template(19, ViewCurrentOrgInfoComponent_ng_template_19_Template, 4, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(21, ViewCurrentOrgInfoComponent_div_21_Template, 33, 25, "div", 16);
      \u0275\u0275elementStart(22, "nz-table", 17, 1)(24, "thead")(25, "tr")(26, "th", 18);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "th");
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th");
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "th");
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "th");
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "th");
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "th", 19);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "tbody");
      \u0275\u0275template(48, ViewCurrentOrgInfoComponent_tr_48_Template, 4, 4, "tr", 20)(49, ViewCurrentOrgInfoComponent_tr_49_Template, 17, 13, "tr", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275template(50, ViewCurrentOrgInfoComponent_ng_template_50_Template, 2, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const currOrgExtra_r8 = \u0275\u0275reference(20);
      const currOrgEmpTable_r9 = \u0275\u0275reference(23);
      const currOrgTotalTpl_r10 = \u0275\u0275reference(51);
      \u0275\u0275advance(2);
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(3, 31, "org.orgManage.title.orgHorizView", "S\u01A1 \u0111\u1ED3 t\u1ED5 ch\u1EE9c"))("nzBodyStyle", \u0275\u0275pureFunction0(64, _c0));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.treeSearchValue);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(5, 34, "orgCompose.searchTreePlaceholder", "T\xECm ki\u1EBFm ph\xF2ng ban..."));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 37, "orgCompose.expandAll", "M\u1EDF t\u1EA5t c\u1EA3"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 40, "orgCompose.collapseAll", "\u0110\xF3ng t\u1EA5t c\u1EA3"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzSpinning", ctx.loadingTree());
      \u0275\u0275advance(2);
      \u0275\u0275property("nzData", ctx.treeNodes())("nzSearchValue", ctx.treeSearchValue);
      \u0275\u0275twoWayProperty("nzExpandedKeys", ctx.expandedKeys);
      \u0275\u0275property("nzSelectedKeys", ctx.selectedDeptKey ? \u0275\u0275pureFunction1(65, _c1, ctx.selectedDeptKey) : \u0275\u0275pureFunction0(67, _c2));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingTree() && ctx.treeNodes().length === 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("nzTitle", ctx.panelTitle())("nzExtra", currOrgExtra_r8);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.selectedDept());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.employees())("nzLoading", ctx.loadingEmployees())("nzPageSize", 20)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", currOrgTotalTpl_r10)("nzScroll", \u0275\u0275pureFunction0(68, _c3));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 43, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 46, "org.title.EMPID", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 49, "sys.affirm.title.personName", "T\xEAn nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 52, "org.title.ORG_NAME_ENG", "T\xEAn ti\u1EBFng Anh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 55, "hrm.empinfo.workexp.position", "V\u1ECB tr\xED"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 58, "org.title.DATE_STARTED", "Ng\xE0y v\xE0o l\xE0m"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 61, "common.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loadingEmployees() && ctx.employees().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", currOrgEmpTable_r9.data);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSpinModule, NzSpinComponent, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzTreeModule, NzTreeComponent, TranslatePipe], styles: ["\n.curr-org-tree-scroll[_ngcontent-%COMP%] {\n  max-height: calc(100vh - 280px);\n  overflow-y: auto;\n}\n/*# sourceMappingURL=view-current-org-info.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewCurrentOrgInfoComponent, [{
    type: Component,
    args: [{ selector: "app-view-current-org-info", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzButtonModule,
      NzCardModule,
      NzInputModule,
      NzSpinModule,
      NzTableModule,
      NzTreeModule,
      TranslatePipe
    ], template: `<div class="row">
  <!-- C\xE2y t\u1ED5 ch\u1EE9c b\xEAn tr\xE1i -->
  <div class="col-md-3 mb-3">
    <nz-card [nzTitle]="'org.orgManage.title.orgHorizView' | translate:'S\u01A1 \u0111\u1ED3 t\u1ED5 ch\u1EE9c'" [nzBodyStyle]="{ padding: '12px' }">
      <input nz-input class="mb-2" id="currOrgTreeSearch" [(ngModel)]="treeSearchValue" name="currOrgTreeSearch"
             [placeholder]="'orgCompose.searchTreePlaceholder' | translate:'T\xECm ki\u1EBFm ph\xF2ng ban...'">

      <div class="mb-2 btn-group">
        <button nz-button nzSize="small" type="button" id="currOrgBtnExpandAll" (click)="expandAllNodes()">
          {{ 'orgCompose.expandAll' | translate:'M\u1EDF t\u1EA5t c\u1EA3' }}
        </button>
        <button nz-button nzSize="small" type="button" id="currOrgBtnCollapseAll" (click)="collapseAllNodes()">
          {{ 'orgCompose.collapseAll' | translate:'\u0110\xF3ng t\u1EA5t c\u1EA3' }}
        </button>
      </div>

      <nz-spin [nzSpinning]="loadingTree()">
        <div class="curr-org-tree-scroll">
          <nz-tree [nzData]="treeNodes()" [nzSearchValue]="treeSearchValue" nzSelectMode
                   [(nzExpandedKeys)]="expandedKeys" [nzSelectedKeys]="selectedDeptKey ? [selectedDeptKey] : []"
                   (nzClick)="onTreeClick($event)"></nz-tree>
          <div *ngIf="!loadingTree() && treeNodes().length === 0" class="text-muted fst-italic p-2">
            {{ 'orgCompose.msg.noOrgData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u t\u1ED5 ch\u1EE9c' }}
          </div>
        </div>
      </nz-spin>
    </nz-card>
  </div>

  <!-- Th\xF4ng tin ph\xF2ng ban + danh s\xE1ch nh\xE2n vi\xEAn b\xEAn ph\u1EA3i -->
  <div class="col-md-9 mb-3">
    <nz-card [nzTitle]="panelTitle()" [nzExtra]="currOrgExtra">
      <ng-template #currOrgExtra>
        <button nz-button nzSize="small" type="button" id="currOrgBtnExportExcel" (click)="exportExcel()">
          <i class="bx bx-file-blank"></i> {{ 'common.exportExcel' | translate:'Xu\u1EA5t Excel' }}
        </button>
      </ng-template>

      <div class="row mb-3" *ngIf="selectedDept() as dept">
        <div class="col-md-3 mb-2">
          <strong>{{ 'evs.manage.viewEvsSchedulePanel.col.deptName' | translate:'T\xEAn ph\xF2ng ban' }}:</strong>
          <span class="text-primary">{{ dept.orgNameLocal }}</span>
        </div>
        <div class="col-md-3 mb-2">
          <strong>{{ 'org.title.DEPT_ID' | translate:'ID ph\xF2ng ban' }}:</strong> <span>{{ dept.deptNo }}</span>
        </div>
        <div class="col-md-3 mb-2">
          <strong>{{ 'org.orgManage.DEPARTMENT_INFORMATION.Z' | translate:'Tr\u01B0\u1EDFng ph\xF2ng' }}:</strong>
          <span>{{ managerDisplay(dept) }}</span>
        </div>
        <div class="col-md-3 mb-2">
          <strong>{{ 'org.orgManage.title.deptType' | translate:'Lo\u1EA1i h\xECnh ph\xF2ng ban' }}:</strong> <span>{{ dept.deptType }}</span>
        </div>
        <div class="col-md-3 mb-2">
          <strong>{{ 'orgCompose.costCenter' | translate:'M\xE3 chi ph\xED' }}:</strong> <span>{{ costCenterDisplay(dept) }}</span>
        </div>
        <div class="col-12"><hr class="my-2"></div>
      </div>

      <nz-table [nzData]="employees()" [nzLoading]="loadingEmployees()" [nzPageSize]="20" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="currOrgTotalTpl"
                [nzScroll]="{ y: 'calc(100vh - 420px)' }" #currOrgEmpTable>
        <thead>
          <tr>
            <th nzWidth="60px" class="text-center">{{ 'common.stt' | translate:'STT' }}</th>
            <th>{{ 'org.title.EMPID' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
            <th>{{ 'sys.affirm.title.personName' | translate:'T\xEAn nh\xE2n vi\xEAn' }}</th>
            <th>{{ 'org.title.ORG_NAME_ENG' | translate:'T\xEAn ti\u1EBFng Anh' }}</th>
            <th>{{ 'hrm.empinfo.workexp.position' | translate:'V\u1ECB tr\xED' }}</th>
            <th>{{ 'org.title.DATE_STARTED' | translate:'Ng\xE0y v\xE0o l\xE0m' }}</th>
            <th class="text-center">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loadingEmployees() && employees().length === 0">
            <td colspan="7" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let emp of currOrgEmpTable.data; let i = index">
            <td class="text-center">{{ i + 1 }}</td>
            <td>{{ emp.empId }}</td>
            <td>{{ emp.localName }}</td>
            <td>{{ emp.englishName }}</td>
            <td>{{ emp.position }}</td>
            <td>{{ formatDateStarted(emp.dateStarted) }}</td>
            <td class="text-center">
              {{ isActiveEmp(emp) ? ('common.active' | translate:'Ho\u1EA1t \u0111\u1ED9ng') : ('common.inactive' | translate:'Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng') }}
            </td>
          </tr>
        </tbody>
        <ng-template #currOrgTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>
`, styles: ["/* src/app/view-current-org-info/view-current-org-info.component.css */\n.curr-org-tree-scroll {\n  max-height: calc(100vh - 280px);\n  overflow-y: auto;\n}\n/*# sourceMappingURL=view-current-org-info.component.css.map */\n"] }]
  }], () => [{ type: ViewCurrentOrgInfoService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewCurrentOrgInfoComponent, { className: "ViewCurrentOrgInfoComponent", filePath: "src/app/view-current-org-info/view-current-org-info.component.ts", lineNumber: 113 });
})();
export {
  ViewCurrentOrgInfoComponent
};
//# debugId=6275da0f-a471-58be-b689-4a74dd771894
//# sourceMappingURL=chunk-ZYGUS5JD.js.map
