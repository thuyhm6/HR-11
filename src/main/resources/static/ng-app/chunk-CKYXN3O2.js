import {
  utils,
  writeFileSync
} from "./chunk-6KSHLFTP.js";
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
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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

// src/app/view-vac-emp-list/view-vac-emp-list.service.ts
var API_BASE = "/ar/attendanceSettings/api";
var ViewVacEmpListService = class _ViewVacEmpListService {
  constructor(http) {
    this.http = http;
  }
  http;
  getList(params) {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value)
        httpParams = httpParams.set(key, value);
    }
    return this.http.get(`${API_BASE}/vacEmp/list`, { params: httpParams, withCredentials: true });
  }
  getCodeList(parentCodeNo) {
    return this.http.get("/sys/api/getCode/list", {
      params: new HttpParams().set("parentCodeNo", parentCodeNo),
      withCredentials: true
    });
  }
  getAuthorizedDepartments() {
    return this.http.get(`${API_BASE}/arSupervisor/authorized-departments`, { withCredentials: true });
  }
  static \u0275fac = function ViewVacEmpListService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewVacEmpListService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewVacEmpListService, factory: _ViewVacEmpListService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewVacEmpListService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-vac-emp-list/view-vac-emp-list.component.ts
var _c0 = () => ({ x: "2200px", y: "calc(100vh - 420px)" });
function ViewVacEmpListComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.deptTreeErrorMessage());
  }
}
function ViewVacEmpListComponent_nz_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 37);
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r3.codeNo)("nzLabel", c_r3.codeName);
  }
}
function ViewVacEmpListComponent_nz_alert_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 38);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ViewVacEmpListComponent_tr_124_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 39);
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
    \u0275\u0275elementStart(11, "td", 40);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 40);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 40);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 40);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 40);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 40);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 40);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 40);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td", 40);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td", 40);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td", 40);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "td", 40);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "td", 40);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "td", 40);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "td", 40);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "td", 40);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "td", 40);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "td", 40);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "td", 39);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "td");
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r5 + 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.empId || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.empId);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.localName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.localName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.deptName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.deptName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.postGradeName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.postGradeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.totVacCnt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.lastYearVac);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.useVac);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.affirmUseVac);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.useVac1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.useVac2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.useVac3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.useVac4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.useVac5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.useVac6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.useVac7);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.useVac8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.useVac9);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.useVac10);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.useVac11);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.useVac12);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.mentVac);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.workMonth);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.isLocked);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.remark || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.remark);
  }
}
function ViewVacEmpListComponent_ng_template_125_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r6 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r6, " ");
  }
}
var I18N_KEYS = [
  "common.search.empIdOrName",
  "common.placeholder.enterEmpId",
  "common.deptName",
  "common.select",
  "common.workStatus",
  "common.selectAll",
  "vacEmp.year",
  "common.search",
  "common.clearFilter",
  "common.exportExcel",
  "common.stt",
  "common.empId",
  "common.empName",
  "attSearch.position",
  "vacEmp.colTotal",
  "vacEmp.lastYearVac",
  "vacEmp.colUsed",
  "vacEmp.colPending",
  "vacEmp.colJan",
  "vacEmp.colFeb",
  "vacEmp.colMar",
  "vacEmp.colApr",
  "vacEmp.colMay",
  "vacEmp.colJun",
  "vacEmp.colJul",
  "vacEmp.colAug",
  "vacEmp.colSep",
  "vacEmp.colOct",
  "vacEmp.colNov",
  "vacEmp.colDec",
  "vacEmp.convert",
  "vacEmp.workMonth",
  "vacEmp.locked",
  "common.remark",
  "common.totalRows",
  "common.loadFail",
  "mep.msg.loadDeptFailed"
];
var PAGE_SIZE_OPTIONS = [25, 50, 100, 200, 500];
var DEFAULT_EMP_OFFICE = "15119";
var ViewVacEmpListComponent = class _ViewVacEmpListComponent {
  constructor(api, i18n) {
    this.api = api;
    this.i18n = i18n;
  }
  api;
  i18n;
  pageSizeOptions = PAGE_SIZE_OPTIONS;
  currentYear = String((/* @__PURE__ */ new Date()).getFullYear());
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
  deptTreeErrorMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "deptTreeErrorMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
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
  /** id -> danh sách id con trực tiếp - dùng để mở rộng lựa chọn cây phòng ban khi tra cứu (xem search()). */
  deptChildrenMap = /* @__PURE__ */ new Map();
  keyword = "";
  deptNos = [];
  empOffice = DEFAULT_EMP_OFFICE;
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
    this.loadCodeOptions();
    this.search();
  }
  search() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getList({
      keyword: this.keyword,
      deptNos: this.expandDeptSelection(this.deptNos).join(","),
      vacId: this.currentYear,
      empOffice: this.empOffice ?? ""
    }).subscribe({
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
    this.keyword = "";
    this.deptNos = [];
    this.empOffice = DEFAULT_EMP_OFFICE;
    this.search();
  }
  /** Xuất excel client-side (giống bản gốc DataTables Buttons, không có endpoint export riêng ở
   *  backend) - dùng thư viện xlsx (SheetJS) để tạo đúng file .xlsx nhị phân. */
  exportExcel() {
    const headers = [
      this.i18n.t("common.stt", "STT"),
      this.i18n.t("common.empId", "M\xE3 nh\xE2n vi\xEAn"),
      this.i18n.t("common.empName", "H\u1ECD t\xEAn"),
      this.i18n.t("common.deptName", "Ph\xF2ng ban"),
      this.i18n.t("attSearch.position", "Ch\u1EE9c v\u1EE5"),
      this.i18n.t("vacEmp.colTotal", "T\u1ED5ng ph\xE9p"),
      this.i18n.t("vacEmp.lastYearVac", "Ph\xE9p n\u0103m tr\u01B0\u1EDBc"),
      this.i18n.t("vacEmp.colUsed", "\u0110\xE3 d\xF9ng"),
      this.i18n.t("vacEmp.colPending", "Ch\u1EDD duy\u1EC7t"),
      this.i18n.t("vacEmp.colJan", "Th\xE1ng 1"),
      this.i18n.t("vacEmp.colFeb", "Th\xE1ng 2"),
      this.i18n.t("vacEmp.colMar", "Th\xE1ng 3"),
      this.i18n.t("vacEmp.colApr", "Th\xE1ng 4"),
      this.i18n.t("vacEmp.colMay", "Th\xE1ng 5"),
      this.i18n.t("vacEmp.colJun", "Th\xE1ng 6"),
      this.i18n.t("vacEmp.colJul", "Th\xE1ng 7"),
      this.i18n.t("vacEmp.colAug", "Th\xE1ng 8"),
      this.i18n.t("vacEmp.colSep", "Th\xE1ng 9"),
      this.i18n.t("vacEmp.colOct", "Th\xE1ng 10"),
      this.i18n.t("vacEmp.colNov", "Th\xE1ng 11"),
      this.i18n.t("vacEmp.colDec", "Th\xE1ng 12"),
      this.i18n.t("vacEmp.convert", "Quy \u0111\u1ED5i"),
      this.i18n.t("vacEmp.workMonth", "Th\xE1ng c\xF4ng t\xE1c"),
      this.i18n.t("vacEmp.locked", "Kh\xF3a"),
      this.i18n.t("common.remark", "Ghi ch\xFA")
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      r.empId,
      r.localName,
      r.deptName,
      r.postGradeName,
      r.totVacCnt,
      r.lastYearVac,
      r.useVac,
      r.affirmUseVac,
      r.useVac1,
      r.useVac2,
      r.useVac3,
      r.useVac4,
      r.useVac5,
      r.useVac6,
      r.useVac7,
      r.useVac8,
      r.useVac9,
      r.useVac10,
      r.useVac11,
      r.useVac12,
      r.mentVac,
      r.workMonth,
      r.isLocked,
      r.remark
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "DanhSachPhep");
    writeFileSync(workbook, `vac_emp_export_${this.currentYear}.xlsx`);
  }
  loadDeptTree() {
    this.api.getAuthorizedDepartments().subscribe({
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
  /** nz-tree-select chỉ trả về key của node được tick trực tiếp - KHÔNG tự cascade xuống phòng ban
   *  con như widget DeptTree.js gốc. Backend lọc theo deptNos IN (...) đúng từng mã, nên nếu không
   *  mở rộng thủ công ở đây, chọn 1 phòng ban cha sẽ bỏ sót toàn bộ nhân viên ở các phòng ban con. */
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
  loadCodeOptions() {
    this.api.getCodeList("15118").subscribe((list) => this.empOfficeOptions.set(list ?? []));
  }
  static \u0275fac = function ViewVacEmpListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewVacEmpListComponent)(\u0275\u0275directiveInject(ViewVacEmpListService), \u0275\u0275directiveInject(I18nService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewVacEmpListComponent, selectors: [["app-view-vac-emp-list"]], decls: 127, vars: 157, consts: [["veTable", ""], ["veTotalTpl", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["nz-input", "", "name", "keyword", "id", "ve-keyword", 3, "ngModelChange", "ngModel", "placeholder"], ["id", "ve-deptNo", "name", "deptNos", "nzCheckable", "", "nzShowSearch", "", "nzAllowClear", "", "nzDropdownClassName", "ve-dept-tree-dropdown", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["class", "text-danger small mt-1", 4, "ngIf"], ["id", "ve-empOffice", "name", "empOffice", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col-md-2"], ["nz-input", "", "id", "ve-vacId", "name", "vacId", "disabled", "", 3, "ngModel"], [1, "col-12", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit", "id", "ve-btn-search"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", "id", "ve-btn-clear", 3, "click"], [1, "bx", "bx-x"], ["nz-button", "", "nzType", "default", "type", "button", "id", "ve-btn-export", 1, "btn-export", 3, "click"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [1, "table-nowrap", 3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "100px", 1, "text-center"], ["nzWidth", "150px"], ["nzWidth", "160px"], ["nzWidth", "120px"], ["nzWidth", "90px", 1, "text-end"], ["nzWidth", "100px", 1, "text-end"], ["nzWidth", "70px", 1, "text-end"], ["nzWidth", "75px", 1, "text-end"], ["nzWidth", "110px", 1, "text-end"], ["nzWidth", "70px", 1, "text-center"], [4, "ngFor", "ngForOf"], [1, "text-danger", "small", "mt-1"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], [1, "text-center"], [1, "text-end"]], template: function ViewVacEmpListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "nz-card", 4)(3, "form", 5);
      \u0275\u0275listener("ngSubmit", function ViewVacEmpListComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 6)(5, "label", 7);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewVacEmpListComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.keyword, $event) || (ctx.keyword = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 6)(11, "label", 7);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "nz-tree-select", 9);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewVacEmpListComponent_Template_nz_tree_select_ngModelChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.deptNos, $event) || (ctx.deptNos = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275template(16, ViewVacEmpListComponent_div_16_Template, 2, 1, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 6)(18, "label", 7);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "nz-select", 11);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewVacEmpListComponent_Template_nz_select_ngModelChange_21_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.empOffice, $event) || (ctx.empOffice = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(23, ViewVacEmpListComponent_nz_option_23_Template, 1, 2, "nz-option", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 13)(25, "label", 7);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "input", 14);
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 15)(30, "button", 16);
      \u0275\u0275element(31, "i", 17);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "button", 18);
      \u0275\u0275listener("click", function ViewVacEmpListComponent_Template_button_click_34_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(35, "i", 19);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "button", 20);
      \u0275\u0275listener("click", function ViewVacEmpListComponent_Template_button_click_38_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(39, "i", 21);
      \u0275\u0275text(40);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(42, "nz-card");
      \u0275\u0275template(43, ViewVacEmpListComponent_nz_alert_43_Template, 1, 1, "nz-alert", 22);
      \u0275\u0275elementStart(44, "nz-table", 23, 0)(46, "thead")(47, "tr")(48, "th", 24);
      \u0275\u0275text(49);
      \u0275\u0275pipe(50, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "th", 25);
      \u0275\u0275text(52);
      \u0275\u0275pipe(53, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "th", 26);
      \u0275\u0275text(55);
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "th", 27);
      \u0275\u0275text(58);
      \u0275\u0275pipe(59, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "th", 28);
      \u0275\u0275text(61);
      \u0275\u0275pipe(62, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "th", 29);
      \u0275\u0275text(64);
      \u0275\u0275pipe(65, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "th", 30);
      \u0275\u0275text(67);
      \u0275\u0275pipe(68, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "th", 29);
      \u0275\u0275text(70);
      \u0275\u0275pipe(71, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "th", 29);
      \u0275\u0275text(73);
      \u0275\u0275pipe(74, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "th", 31);
      \u0275\u0275text(76);
      \u0275\u0275pipe(77, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "th", 31);
      \u0275\u0275text(79);
      \u0275\u0275pipe(80, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "th", 31);
      \u0275\u0275text(82);
      \u0275\u0275pipe(83, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "th", 31);
      \u0275\u0275text(85);
      \u0275\u0275pipe(86, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "th", 31);
      \u0275\u0275text(88);
      \u0275\u0275pipe(89, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "th", 31);
      \u0275\u0275text(91);
      \u0275\u0275pipe(92, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "th", 31);
      \u0275\u0275text(94);
      \u0275\u0275pipe(95, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "th", 31);
      \u0275\u0275text(97);
      \u0275\u0275pipe(98, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "th", 31);
      \u0275\u0275text(100);
      \u0275\u0275pipe(101, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "th", 32);
      \u0275\u0275text(103);
      \u0275\u0275pipe(104, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "th", 32);
      \u0275\u0275text(106);
      \u0275\u0275pipe(107, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "th", 32);
      \u0275\u0275text(109);
      \u0275\u0275pipe(110, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "th", 29);
      \u0275\u0275text(112);
      \u0275\u0275pipe(113, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "th", 33);
      \u0275\u0275text(115);
      \u0275\u0275pipe(116, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "th", 34);
      \u0275\u0275text(118);
      \u0275\u0275pipe(119, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "th", 27);
      \u0275\u0275text(121);
      \u0275\u0275pipe(122, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(123, "tbody");
      \u0275\u0275template(124, ViewVacEmpListComponent_tr_124_Template, 51, 30, "tr", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275template(125, ViewVacEmpListComponent_ng_template_125_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const veTable_r7 = \u0275\u0275reference(45);
      const veTotalTpl_r8 = \u0275\u0275reference(126);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 51, "common.search.empIdOrName", "M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.keyword);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 54, "common.placeholder.enterEmpId", "Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 57, "common.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzNodes", ctx.deptNodes());
      \u0275\u0275twoWayProperty("ngModel", ctx.deptNos);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(15, 60, "common.select", "Ch\u1ECDn ph\xF2ng ban"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.deptTreeErrorMessage());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 63, "common.workStatus", "Tr\u1EA1ng th\xE1i l\xE0m vi\u1EC7c"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.empOffice);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(22, 66, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.empOfficeOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 69, "vacEmp.year", "N\u0103m ph\xE9p"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngModel", ctx.currentYear);
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(33, 72, "common.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(37, 75, "common.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(41, 78, "common.exportExcel", "Xu\u1EA5t excel"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", veTotalTpl_r8)("nzScroll", \u0275\u0275pureFunction0(156, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 81, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(53, 84, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(56, 87, "common.empName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(59, 90, "common.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(62, 93, "attSearch.position", "Ch\u1EE9c v\u1EE5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(65, 96, "vacEmp.colTotal", "T\u1ED5ng ph\xE9p"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(68, 99, "vacEmp.lastYearVac", "Ph\xE9p n\u0103m tr\u01B0\u1EDBc"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(71, 102, "vacEmp.colUsed", "\u0110\xE3 d\xF9ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(74, 105, "vacEmp.colPending", "Ch\u1EDD duy\u1EC7t"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(77, 108, "vacEmp.colJan", "Th\xE1ng 1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(80, 111, "vacEmp.colFeb", "Th\xE1ng 2"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(83, 114, "vacEmp.colMar", "Th\xE1ng 3"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(86, 117, "vacEmp.colApr", "Th\xE1ng 4"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(89, 120, "vacEmp.colMay", "Th\xE1ng 5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(92, 123, "vacEmp.colJun", "Th\xE1ng 6"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(95, 126, "vacEmp.colJul", "Th\xE1ng 7"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(98, 129, "vacEmp.colAug", "Th\xE1ng 8"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(101, 132, "vacEmp.colSep", "Th\xE1ng 9"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(104, 135, "vacEmp.colOct", "Th\xE1ng 10"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(107, 138, "vacEmp.colNov", "Th\xE1ng 11"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(110, 141, "vacEmp.colDec", "Th\xE1ng 12"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(113, 144, "vacEmp.convert", "Quy \u0111\u1ED5i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(116, 147, "vacEmp.workMonth", "Th\xE1ng c\xF4ng t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(119, 150, "vacEmp.locked", "Kh\xF3a"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(122, 153, "common.remark", "Ghi ch\xFA"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", veTable_r7.data);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzTreeSelectModule, NzTreeSelectComponent, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\n.btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=view-vac-emp-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewVacEmpListComponent, [{
    type: Component,
    args: [{ selector: "app-view-vac-emp-list", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzSelectModule,
      NzButtonModule,
      NzTreeSelectModule,
      NzAlertModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm - \u0111\u1EE9ng im khi cu\u1ED9n (xem .sticky-filter-card trong styles.css) -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3" (ngSubmit)="search()">
        <div class="col-md-3">
          <label class="form-label">{{ 'common.search.empIdOrName' | translate:'M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn' }}</label>
          <input nz-input [(ngModel)]="keyword" name="keyword" id="ve-keyword"
                 [placeholder]="'common.placeholder.enterEmpId' | translate:'Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn'">
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</label>
          <nz-tree-select class="w-100" id="ve-deptNo" [nzNodes]="deptNodes()" [(ngModel)]="deptNos" name="deptNos"
                           nzCheckable nzShowSearch nzAllowClear
                           [nzPlaceHolder]="'common.select' | translate:'Ch\u1ECDn ph\xF2ng ban'"
                           nzDropdownClassName="ve-dept-tree-dropdown"></nz-tree-select>
          <div *ngIf="deptTreeErrorMessage()" class="text-danger small mt-1">{{ deptTreeErrorMessage() }}</div>
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'common.workStatus' | translate:'Tr\u1EA1ng th\xE1i l\xE0m vi\u1EC7c' }}</label>
          <nz-select class="w-100" id="ve-empOffice" [(ngModel)]="empOffice" name="empOffice" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let c of empOfficeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'vacEmp.year' | translate:'N\u0103m ph\xE9p' }}</label>
          <input nz-input id="ve-vacId" [ngModel]="currentYear" name="vacId" disabled>
        </div>
        <div class="col-12 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit" id="ve-btn-search">
            <i class="bx bx-search"></i> {{ 'common.search' | translate:'Tra c\u1EE9u' }}
          </button>
          <button nz-button type="button" id="ve-btn-clear" (click)="clearSearch()">
            <i class="bx bx-x"></i> {{ 'common.clearFilter' | translate:'X\xF3a l\u1ECDc' }}
          </button>
          <button nz-button nzType="default" type="button" class="btn-export" id="ve-btn-export" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'common.exportExcel' | translate:'Xu\u1EA5t excel' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="veTotalTpl"
                [nzScroll]="{ x: '2200px', y: 'calc(100vh - 420px)' }"
                class="table-nowrap" #veTable>
        <!-- nzWidth khai b\xE1o cho t\u1EEBng c\u1ED9t \u0111\u1EC3 \u0111\u1ED3ng b\u1ED9 \u0111\u1ED9 r\u1ED9ng header/body khi d\xF9ng nzScroll. -->
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th class="text-center" nzWidth="100px">{{ 'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
            <th nzWidth="150px">{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
            <th nzWidth="160px">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
            <th nzWidth="120px">{{ 'attSearch.position' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
            <th class="text-end" nzWidth="90px">{{ 'vacEmp.colTotal' | translate:'T\u1ED5ng ph\xE9p' }}</th>
            <th class="text-end" nzWidth="100px">{{ 'vacEmp.lastYearVac' | translate:'Ph\xE9p n\u0103m tr\u01B0\u1EDBc' }}</th>
            <th class="text-end" nzWidth="90px">{{ 'vacEmp.colUsed' | translate:'\u0110\xE3 d\xF9ng' }}</th>
            <th class="text-end" nzWidth="90px">{{ 'vacEmp.colPending' | translate:'Ch\u1EDD duy\u1EC7t' }}</th>
            <th class="text-end" nzWidth="70px">{{ 'vacEmp.colJan' | translate:'Th\xE1ng 1' }}</th>
            <th class="text-end" nzWidth="70px">{{ 'vacEmp.colFeb' | translate:'Th\xE1ng 2' }}</th>
            <th class="text-end" nzWidth="70px">{{ 'vacEmp.colMar' | translate:'Th\xE1ng 3' }}</th>
            <th class="text-end" nzWidth="70px">{{ 'vacEmp.colApr' | translate:'Th\xE1ng 4' }}</th>
            <th class="text-end" nzWidth="70px">{{ 'vacEmp.colMay' | translate:'Th\xE1ng 5' }}</th>
            <th class="text-end" nzWidth="70px">{{ 'vacEmp.colJun' | translate:'Th\xE1ng 6' }}</th>
            <th class="text-end" nzWidth="70px">{{ 'vacEmp.colJul' | translate:'Th\xE1ng 7' }}</th>
            <th class="text-end" nzWidth="70px">{{ 'vacEmp.colAug' | translate:'Th\xE1ng 8' }}</th>
            <th class="text-end" nzWidth="70px">{{ 'vacEmp.colSep' | translate:'Th\xE1ng 9' }}</th>
            <th class="text-end" nzWidth="75px">{{ 'vacEmp.colOct' | translate:'Th\xE1ng 10' }}</th>
            <th class="text-end" nzWidth="75px">{{ 'vacEmp.colNov' | translate:'Th\xE1ng 11' }}</th>
            <th class="text-end" nzWidth="75px">{{ 'vacEmp.colDec' | translate:'Th\xE1ng 12' }}</th>
            <th class="text-end" nzWidth="90px">{{ 'vacEmp.convert' | translate:'Quy \u0111\u1ED5i' }}</th>
            <th class="text-end" nzWidth="110px">{{ 'vacEmp.workMonth' | translate:'Th\xE1ng c\xF4ng t\xE1c' }}</th>
            <th class="text-center" nzWidth="70px">{{ 'vacEmp.locked' | translate:'Kh\xF3a' }}</th>
            <th nzWidth="160px">{{ 'common.remark' | translate:'Ghi ch\xFA' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of veTable.data; let i = index">
            <td class="text-center">{{ i + 1 }}</td>
            <td class="text-center" [attr.title]="row.empId || null">{{ row.empId }}</td>
            <td [attr.title]="row.localName || null">{{ row.localName }}</td>
            <td [attr.title]="row.deptName || null">{{ row.deptName }}</td>
            <td [attr.title]="row.postGradeName || null">{{ row.postGradeName }}</td>
            <td class="text-end">{{ row.totVacCnt }}</td>
            <td class="text-end">{{ row.lastYearVac }}</td>
            <td class="text-end">{{ row.useVac }}</td>
            <td class="text-end">{{ row.affirmUseVac }}</td>
            <td class="text-end">{{ row.useVac1 }}</td>
            <td class="text-end">{{ row.useVac2 }}</td>
            <td class="text-end">{{ row.useVac3 }}</td>
            <td class="text-end">{{ row.useVac4 }}</td>
            <td class="text-end">{{ row.useVac5 }}</td>
            <td class="text-end">{{ row.useVac6 }}</td>
            <td class="text-end">{{ row.useVac7 }}</td>
            <td class="text-end">{{ row.useVac8 }}</td>
            <td class="text-end">{{ row.useVac9 }}</td>
            <td class="text-end">{{ row.useVac10 }}</td>
            <td class="text-end">{{ row.useVac11 }}</td>
            <td class="text-end">{{ row.useVac12 }}</td>
            <td class="text-end">{{ row.mentVac }}</td>
            <td class="text-end">{{ row.workMonth }}</td>
            <td class="text-center">{{ row.isLocked }}</td>
            <td [attr.title]="row.remark || null">{{ row.remark }}</td>
          </tr>
        </tbody>
        <ng-template #veTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>
`, styles: ["/* src/app/view-vac-emp-list/view-vac-emp-list.component.css */\n.btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=view-vac-emp-list.component.css.map */\n"] }]
  }], () => [{ type: ViewVacEmpListService }, { type: I18nService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewVacEmpListComponent, { className: "ViewVacEmpListComponent", filePath: "src/app/view-vac-emp-list/view-vac-emp-list.component.ts", lineNumber: 67 });
})();
export {
  ViewVacEmpListComponent
};
//# debugId=e886a310-7e2e-56da-9b61-0f7b118d29c3
//# sourceMappingURL=chunk-CKYXN3O2.js.map
