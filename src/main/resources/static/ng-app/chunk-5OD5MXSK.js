import {
  ManageEmpPositionInfoService
} from "./chunk-GZZPPOTI.js";
import {
  utils,
  writeFileSync
} from "./chunk-6KSHLFTP.js";
import {
  NzMessageService
} from "./chunk-XWW7CXU6.js";
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
import "./chunk-2GOAB54B.js";
import {
  CheckboxControlValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-TNYKEBYQ.js";
import {
  CommonModule,
  Component,
  DatePipe,
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
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTW5U2M5.js";

// src/app/view-depart-manager-list/view-depart-manager-list.service.ts
var API_BASE = "/ar/attendanceSettings/api/departmentManage";
var ViewDepartManagerListService = class _ViewDepartManagerListService {
  constructor(http) {
    this.http = http;
  }
  http;
  getList(lockDate, deptNo) {
    let params = new HttpParams().set("lockDate", lockDate);
    if (deptNo)
      params = params.set("deptNo", deptNo);
    return this.http.get(`${API_BASE}/list`, { params, withCredentials: true });
  }
  save(items) {
    return this.http.post(`${API_BASE}/save`, items, { withCredentials: true });
  }
  static \u0275fac = function ViewDepartManagerListService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewDepartManagerListService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewDepartManagerListService, factory: _ViewDepartManagerListService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewDepartManagerListService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-depart-manager-list/view-depart-manager-list.component.ts
var _c0 = () => ({ y: "calc(100vh - 380px)" });
function ViewDepartManagerListComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.deptTreeErrorMessage());
  }
}
function ViewDepartManagerListComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "label", 36);
    \u0275\u0275twoWayListener("ngModelChange", function ViewDepartManagerListComponent_div_29_Template_label_ngModelChange_5_listener($event) {
      const g_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.massToggle[g_r4.day], $event) || (ctx_r1.massToggle[g_r4.day] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(8, "label", 37);
    \u0275\u0275twoWayListener("ngModelChange", function ViewDepartManagerListComponent_div_29_Template_label_ngModelChange_8_listener($event) {
      const g_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.massToggle[g_r4.night], $event) || (ctx_r1.massToggle[g_r4.night] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const g_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 5, g_r4.labelKey, g_r4.labelFallback));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.massToggle[g_r4.day]);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 8, "deptManage.col.dayShift", "Ca ng\xE0y"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.massToggle[g_r4.night]);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 11, "deptManage.col.nightShift", "Ca \u0111\xEAm"));
  }
}
function ViewDepartManagerListComponent_th_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 38);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, g_r5.labelKey, g_r5.labelFallback));
  }
}
function ViewDepartManagerListComponent_ng_container_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "th", 39);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function ViewDepartManagerListComponent_ng_container_58_Template_input_ngModelChange_4_listener($event) {
      const g_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.headerSelectAll[g_r7.day], $event) || (ctx_r1.headerSelectAll[g_r7.day] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ViewDepartManagerListComponent_ng_container_58_Template_input_ngModelChange_4_listener() {
      const g_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSelectAllColumn(g_r7.day));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 39);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementStart(8, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function ViewDepartManagerListComponent_ng_container_58_Template_input_ngModelChange_8_listener($event) {
      const g_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.headerSelectAll[g_r7.night], $event) || (ctx_r1.headerSelectAll[g_r7.night] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ViewDepartManagerListComponent_ng_container_58_Template_input_ngModelChange_8_listener() {
      const g_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSelectAllColumn(g_r7.night));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const g_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 4, "deptManage.col.dayShift", "Ca ng\xE0y"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.headerSelectAll[g_r7.day]);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 7, "deptManage.col.nightShift", "Ca \u0111\xEAm"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.headerSelectAll[g_r7.night]);
    \u0275\u0275control();
  }
}
function ViewDepartManagerListComponent_tr_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 41);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", 4 + ctx_r1.allLockColumns.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, "deptManage.js.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u (c\xF3 th\u1EC3 h\u1EC7 th\u1ED1ng ch\u01B0a \u0111\u1ED3ng b\u1ED9 ph\xF2ng ban)."), " ");
  }
}
function ViewDepartManagerListComponent_tr_61_i_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 49);
    \u0275\u0275listener("click", function ViewDepartManagerListComponent_tr_61_i_2_Template_i_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const row_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleRow(row_r9.deptNo));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bx-minus", !ctx_r1.isCollapsed(row_r9.deptNo))("bx-plus", ctx_r1.isCollapsed(row_r9.deptNo));
  }
}
function ViewDepartManagerListComponent_tr_61_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 50);
  }
}
function ViewDepartManagerListComponent_tr_61_td_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 46)(1, "input", 51);
    \u0275\u0275twoWayListener("ngModelChange", function ViewDepartManagerListComponent_tr_61_td_9_Template_input_ngModelChange_1_listener($event) {
      const col_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const row_r9 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r9[col_r11], $event) || (row_r9[col_r11] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ViewDepartManagerListComponent_tr_61_td_9_Template_input_ngModelChange_1_listener() {
      \u0275\u0275restoreView(_r10);
      const row_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.markModified(row_r9));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const col_r11 = ctx.$implicit;
    const row_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", row_r9[col_r11]);
    \u0275\u0275control();
  }
}
function ViewDepartManagerListComponent_tr_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 42);
    \u0275\u0275template(2, ViewDepartManagerListComponent_tr_61_i_2_Template, 1, 4, "i", 43)(3, ViewDepartManagerListComponent_tr_61_span_3_Template, 1, 0, "span", 44);
    \u0275\u0275elementStart(4, "span", 45);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 46);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ViewDepartManagerListComponent_tr_61_td_9_Template, 2, 1, "td", 47);
    \u0275\u0275elementStart(10, "td", 46);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 48);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("table-warning", row_r9.modified);
    \u0275\u0275advance();
    \u0275\u0275styleProp("padding-left", row_r9.level * 20 + 10, "px");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r9.hasChildren);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !row_r9.hasChildren);
    \u0275\u0275advance();
    \u0275\u0275property("title", row_r9.deptNo);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.dispDeptName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 12, ctx_r1.lockDate, "dd/MM/yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.allLockColumns);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.updatedBy);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.updateDate ? \u0275\u0275pipeBind2(14, 15, row_r9.updateDate, "dd/MM/yyyy HH:mm") : "");
  }
}
var I18N_KEYS = [
  "deptManage.field.date",
  "deptManage.field.dept",
  "deptManage.placeholder.dept",
  "deptManage.btn.search",
  "deptManage.btn.export",
  "deptManage.group.annualLeave",
  "deptManage.group.leave",
  "deptManage.group.ot",
  "deptManage.group.exception",
  "deptManage.col.dayShift",
  "deptManage.col.nightShift",
  "deptManage.col.updatedBy",
  "deptManage.col.updateTime",
  "deptManage.btn.openRequest",
  "deptManage.btn.closeRequest",
  "deptManage.js.selectDate",
  "deptManage.js.loading",
  "deptManage.js.noData",
  "deptManage.js.loadError",
  "deptManage.js.pleaseSelectGroup",
  "deptManage.js.close",
  "deptManage.js.open",
  "deptManage.js.massSuccess",
  "deptManage.js.invalidDate",
  "deptManage.js.noChanges",
  "deptManage.js.saving",
  "deptManage.js.connError",
  "deptMgr.saveSuccess",
  "deptMgr.saveFail",
  "common.save",
  "common.stt",
  "common.deptName",
  "common.status",
  "common.date",
  "vdp.search.dept.placeholder",
  "mep.msg.loadDeptFailed"
];
var LOCK_COLUMN_GROUPS = [
  { labelKey: "deptManage.group.annualLeave", labelFallback: "Ngh\u1EC9 ph\xE9p n\u0103m", day: "lockAttenAnnualFlag", night: "lockAttenAnnualNightFlag" },
  { labelKey: "deptManage.group.leave", labelFallback: "Ngh\u1EC9 ph\xE9p", day: "lockAttenFlag", night: "lockAttenNightFlag" },
  { labelKey: "deptManage.group.ot", labelFallback: "T\u0103ng ca", day: "lockOtFlag", night: "lockOtNightFlag" },
  { labelKey: "deptManage.group.exception", labelFallback: "B\u1EA5t th\u01B0\u1EDDng", day: "lockAttenExFlag", night: "lockAttenExNightFlag" }
];
var ALL_LOCK_COLUMNS = LOCK_COLUMN_GROUPS.flatMap((g) => [g.day, g.night]);
function emptyColumnState() {
  const state = {};
  ALL_LOCK_COLUMNS.forEach((col) => state[col] = false);
  return state;
}
var ViewDepartManagerListComponent = class _ViewDepartManagerListComponent {
  constructor(api, deptApi, i18n, message) {
    this.api = api;
    this.deptApi = deptApi;
    this.i18n = i18n;
    this.message = message;
  }
  api;
  deptApi;
  i18n;
  message;
  lockColumnGroups = LOCK_COLUMN_GROUPS;
  allLockColumns = ALL_LOCK_COLUMNS;
  lockDate = /* @__PURE__ */ new Date();
  deptNos = [];
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
  rows = signal(
    [],
    ...ngDevMode ? [{ debugName: "rows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  collapsed = signal(
    /* @__PURE__ */ new Set(),
    ...ngDevMode ? [{ debugName: "collapsed" }] : (
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
  saving = signal(
    false,
    ...ngDevMode ? [{ debugName: "saving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  rowIndex = /* @__PURE__ */ new Map();
  visibleRows = computed(
    () => {
      const collapsedSet = this.collapsed();
      return this.rows().filter((r) => !this.isHiddenByCollapsedAncestor(r, collapsedSet));
    },
    ...ngDevMode ? [{ debugName: "visibleRows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  headerSelectAll = emptyColumnState();
  massToggle = emptyColumnState();
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.deptApi.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(this.buildDeptTree(list ?? [])),
      error: () => this.deptTreeErrorMessage.set(this.i18n.t("mep.msg.loadDeptFailed", "L\u1ED7i khi t\u1EA3i danh s\xE1ch ph\xF2ng ban"))
    });
    this.search();
  }
  search() {
    const dateStr = this.formatYmd(this.lockDate);
    if (!dateStr) {
      this.message.warning(this.i18n.t("deptManage.js.selectDate", "Vui l\xF2ng ch\u1ECDn ng\xE0y"));
      return;
    }
    this.loading.set(true);
    this.api.getList(dateStr, this.expandDeptSelection(this.deptNos).join(",")).subscribe({
      next: (list) => {
        const rows = this.buildRows(list ?? []);
        this.rowIndex = new Map(rows.map((r) => [r.deptNo, r]));
        this.rows.set(rows);
        this.collapsed.set(/* @__PURE__ */ new Set());
        this.loading.set(false);
      },
      error: () => {
        this.message.error(this.i18n.t("deptManage.js.loadError", "L\u1ED7i khi t\u1EA3i d\u1EEF li\u1EC7u"));
        this.rows.set([]);
        this.loading.set(false);
      }
    });
  }
  isCollapsed(deptNo) {
    return this.collapsed().has(deptNo);
  }
  toggleRow(deptNo) {
    const next = new Set(this.collapsed());
    if (next.has(deptNo))
      next.delete(deptNo);
    else
      next.add(deptNo);
    this.collapsed.set(next);
  }
  markModified(row) {
    row.modified = true;
  }
  onSelectAllColumn(col) {
    const checked = this.headerSelectAll[col];
    this.rows().forEach((r) => {
      r[col] = checked;
      r.modified = true;
    });
  }
  applyMassToggle(locked) {
    const checkedCols = ALL_LOCK_COLUMNS.filter((col) => this.massToggle[col]);
    if (checkedCols.length === 0) {
      this.message.warning(this.i18n.t("deptManage.js.pleaseSelectGroup", "Vui l\xF2ng t\xEDch ch\u1ECDn nh\xF3m ng\xE0y/\u0111\xEAm \u1EDF ph\xEDa tr\xEAn tr\u01B0\u1EDBc khi \u0110\xF3ng/M\u1EDF xin ph\xE9p!"));
      return;
    }
    this.rows().forEach((r) => {
      checkedCols.forEach((col) => {
        r[col] = locked;
      });
      r.modified = true;
    });
    const action = locked ? this.i18n.t("deptManage.js.close", "\u0110\xF3ng") : this.i18n.t("deptManage.js.open", "M\u1EDF");
    this.message.success(`${action}${this.i18n.t("deptManage.js.massSuccess", " \u0111\u1ED3ng lo\u1EA1t th\xE0nh c\xF4ng. Vui l\xF2ng b\u1EA5m L\u01B0u \u0111\u1EC3 c\u1EADp nh\u1EADt!")}`);
  }
  save() {
    const dateStr = this.formatYmd(this.lockDate);
    if (!dateStr) {
      this.message.error(this.i18n.t("deptManage.js.invalidDate", "Ng\xE0y kh\xF4ng h\u1EE3p l\u1EC7 \u0111\u1EC3 l\u01B0u."));
      return;
    }
    const toSave = this.rows().filter((r) => r.modified).map((r) => ({
      deptNo: r.deptNo,
      lockDate: dateStr,
      lockAttenAnnualFlag: r.lockAttenAnnualFlag ? "1" : "0",
      lockAttenAnnualNightFlag: r.lockAttenAnnualNightFlag ? "1" : "0",
      lockAttenFlag: r.lockAttenFlag ? "1" : "0",
      lockAttenNightFlag: r.lockAttenNightFlag ? "1" : "0",
      lockOtFlag: r.lockOtFlag ? "1" : "0",
      lockOtNightFlag: r.lockOtNightFlag ? "1" : "0",
      lockAttenExFlag: r.lockAttenExFlag ? "1" : "0",
      lockAttenExNightFlag: r.lockAttenExNightFlag ? "1" : "0"
    }));
    if (toSave.length === 0) {
      this.message.info(this.i18n.t("deptManage.js.noChanges", "Kh\xF4ng c\xF3 thay \u0111\u1ED5i n\xE0o \u0111\u1EC3 l\u01B0u."));
      return;
    }
    this.saving.set(true);
    this.api.save(toSave).subscribe({
      next: (res) => {
        this.saving.set(false);
        if (res.success) {
          this.message.success(res.message || this.i18n.t("deptMgr.saveSuccess", "L\u01B0u th\xE0nh c\xF4ng!"));
          this.search();
        } else {
          this.message.error(res.error || this.i18n.t("deptMgr.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!"));
        }
      },
      error: () => {
        this.saving.set(false);
        this.message.error(this.i18n.t("deptManage.js.connError", "L\u1ED7i k\u1EBFt n\u1ED1i"));
      }
    });
  }
  /** Xuất excel client-side bằng xlsx (SheetJS) - nút đã có sẵn trên giao diện gốc nhưng chưa từng
   *  được nối JS (xem giải thích ở đầu file), giữ nguyên thứ tự + thụt lề cây bằng dấu gạch ngang cho
   *  dễ đọc trong Excel. */
  exportExcel() {
    const headers = [
      this.i18n.t("common.stt", "STT"),
      this.i18n.t("common.deptName", "Ph\xF2ng ban"),
      ...LOCK_COLUMN_GROUPS.flatMap((g) => [
        `${this.i18n.t(g.labelKey, g.labelFallback)} - ${this.i18n.t("deptManage.col.dayShift", "Ca ng\xE0y")}`,
        `${this.i18n.t(g.labelKey, g.labelFallback)} - ${this.i18n.t("deptManage.col.nightShift", "Ca \u0111\xEAm")}`
      ]),
      this.i18n.t("deptManage.col.updatedBy", "Ng\u01B0\u1EDDi thay \u0111\u1ED5i"),
      this.i18n.t("deptManage.col.updateTime", "Th\u1EDDi gian thay \u0111\u1ED5i")
    ];
    const closeLabel = this.i18n.t("deptManage.js.close", "\u0110\xF3ng");
    const openLabel = this.i18n.t("deptManage.js.open", "M\u1EDF");
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      `${"--".repeat(r.level)}${r.dispDeptName}`,
      ...ALL_LOCK_COLUMNS.map((col) => r[col] ? closeLabel : openLabel),
      r.updatedBy,
      r.updateDate
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "DanhSach");
    writeFileSync(workbook, "depart_manager_list.xlsx");
  }
  isHiddenByCollapsedAncestor(row, collapsedSet) {
    let parentNo = row.parentDeptNo;
    while (parentNo && parentNo !== "0") {
      if (collapsedSet.has(parentNo))
        return true;
      const parent = this.rowIndex.get(parentNo);
      if (!parent)
        break;
      parentNo = parent.parentDeptNo;
    }
    return false;
  }
  /** Dựng lại cây cha/con từ danh sách phẳng rồi duyệt DFS (root -> lần lượt từng con) để có đúng thứ
   *  tự + độ sâu (level) dùng thụt lề - giống hệt thuật toán buildTreeHTML() đệ quy ở bản gốc, thay vì
   *  dùng trực tiếp thứ tự "ORDER BY DEPT_LEVEL, DEPTNO" phẳng từ backend (không đảm bảo cha luôn
   *  đứng ngay trước các con của nó). */
  buildRows(list) {
    const map = /* @__PURE__ */ new Map();
    list.forEach((d) => map.set(d.deptNo, d));
    const childrenMap = /* @__PURE__ */ new Map();
    const roots = [];
    list.forEach((d) => {
      if (d.parentDeptNo && d.parentDeptNo !== "0" && map.has(d.parentDeptNo)) {
        const siblings = childrenMap.get(d.parentDeptNo) ?? [];
        siblings.push(d.deptNo);
        childrenMap.set(d.parentDeptNo, siblings);
      } else {
        roots.push(d.deptNo);
      }
    });
    const rows = [];
    const visit = (deptNo, level) => {
      const dto = map.get(deptNo);
      if (!dto)
        return;
      const children = childrenMap.get(deptNo) ?? [];
      rows.push({
        deptNo: dto.deptNo,
        parentDeptNo: dto.parentDeptNo,
        dispDeptName: dto.dispDeptName,
        level,
        hasChildren: children.length > 0,
        lockAttenAnnualFlag: dto.lockAttenAnnualFlag === "1",
        lockAttenAnnualNightFlag: dto.lockAttenAnnualNightFlag === "1",
        lockAttenFlag: dto.lockAttenFlag === "1",
        lockAttenNightFlag: dto.lockAttenNightFlag === "1",
        lockOtFlag: dto.lockOtFlag === "1",
        lockOtNightFlag: dto.lockOtNightFlag === "1",
        lockAttenExFlag: dto.lockAttenExFlag === "1",
        lockAttenExNightFlag: dto.lockAttenExNightFlag === "1",
        updatedBy: dto.updatedBy,
        updateDate: dto.updateDate,
        modified: false
      });
      children.forEach((c) => visit(c, level + 1));
    };
    roots.forEach((r) => visit(r, 0));
    return rows;
  }
  formatYmd(d) {
    return d ? formatDate(d, "yyyy-MM-dd", "vi") : "";
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
  static \u0275fac = function ViewDepartManagerListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewDepartManagerListComponent)(\u0275\u0275directiveInject(ViewDepartManagerListService), \u0275\u0275directiveInject(ManageEmpPositionInfoService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewDepartManagerListComponent, selectors: [["app-view-depart-manager-list"]], decls: 62, vars: 64, consts: [["dmTable", ""], [1, "mb-3"], [1, "row", "align-items-end", "g-2", "mb-2"], [1, "col-md-2"], [1, "form-label"], ["nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], [1, "col-md-4"], ["nzCheckable", "", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["class", "text-danger small mt-1", 4, "ngIf"], [1, "col-md-6", "text-end"], ["nz-button", "", "nzType", "primary", "nzSize", "small", "type", "button", 3, "click", "nzLoading"], [1, "bx", "bx-search"], ["nz-button", "", "nzType", "default", "nzSize", "small", "type", "button", 1, "vdm-btn-save", 3, "click", "nzLoading"], [1, "bx", "bx-save"], ["nz-button", "", "nzType", "default", "nzSize", "small", "type", "button", 1, "vdm-btn-export", 3, "click"], [1, "bx", "bx-export"], [1, "bg-light", "p-2", "border", "rounded"], [1, "row", "align-items-center", "text-center", "vdm-mass-toolbar"], ["class", "col-md-2 border-end", 4, "ngFor", "ngForOf"], [1, "col-md-4", "text-end"], ["nz-button", "", "nzType", "default", "nzSize", "small", "type", "button", 1, "me-1", 3, "click"], [1, "bx", "bx-lock-open"], ["nz-button", "", "nzType", "default", "nzSize", "small", "nzDanger", "", "type", "button", 3, "click"], [1, "bx", "bx-lock"], ["nzSize", "small", 1, "vdm-table", 3, "nzData", "nzLoading", "nzShowPagination", "nzScroll"], ["rowspan", "2", "nzWidth", "25%", 1, "text-start"], ["rowspan", "2", "nzWidth", "90px"], ["colspan", "2", 4, "ngFor", "ngForOf"], ["rowspan", "2"], ["rowspan", "2", "nzWidth", "10%"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "table-warning", 4, "ngFor", "ngForOf"], [1, "text-danger", "small", "mt-1"], [1, "col-md-2", "border-end"], [1, "fw-bold", "mb-1"], ["nz-checkbox", "", 1, "me-2", 3, "ngModelChange", "ngModel"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel"], ["colspan", "2"], ["nzWidth", "70px"], ["type", "checkbox", 1, "form-check-input", "ms-1", 3, "ngModelChange", "ngModel"], [1, "text-center", "text-muted", "py-3"], [1, "text-start"], ["class", "bx vdm-tree-icon border rounded bg-white text-primary", 3, "bx-minus", "bx-plus", "click", 4, "ngIf"], ["class", "vdm-tree-icon", 4, "ngIf"], [1, "fw-bold", "ms-1", 3, "title"], [1, "text-center"], ["class", "text-center", 4, "ngFor", "ngForOf"], [1, "text-center", "vdm-update-time"], [1, "bx", "vdm-tree-icon", "border", "rounded", "bg-white", "text-primary", 3, "click"], [1, "vdm-tree-icon"], ["type", "checkbox", 1, "form-check-input", 3, "ngModelChange", "ngModel"]], template: function ViewDepartManagerListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "nz-card", 1)(1, "div", 2)(2, "div", 3)(3, "label", 4);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "nz-date-picker", 5);
      \u0275\u0275twoWayListener("ngModelChange", function ViewDepartManagerListComponent_Template_nz_date_picker_ngModelChange_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.lockDate, $event) || (ctx.lockDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 6)(8, "label", 4);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "nz-tree-select", 7);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewDepartManagerListComponent_Template_nz_tree_select_ngModelChange_11_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.deptNos, $event) || (ctx.deptNos = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275template(13, ViewDepartManagerListComponent_div_13_Template, 2, 1, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 9)(15, "button", 10);
      \u0275\u0275listener("click", function ViewDepartManagerListComponent_Template_button_click_15_listener() {
        return ctx.search();
      });
      \u0275\u0275element(16, "i", 11);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 12);
      \u0275\u0275listener("click", function ViewDepartManagerListComponent_Template_button_click_19_listener() {
        return ctx.save();
      });
      \u0275\u0275element(20, "i", 13);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 14);
      \u0275\u0275listener("click", function ViewDepartManagerListComponent_Template_button_click_23_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(24, "i", 15);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 16)(28, "div", 17);
      \u0275\u0275template(29, ViewDepartManagerListComponent_div_29_Template, 11, 14, "div", 18);
      \u0275\u0275elementStart(30, "div", 19)(31, "button", 20);
      \u0275\u0275listener("click", function ViewDepartManagerListComponent_Template_button_click_31_listener() {
        return ctx.applyMassToggle(false);
      });
      \u0275\u0275element(32, "i", 21);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "button", 22);
      \u0275\u0275listener("click", function ViewDepartManagerListComponent_Template_button_click_35_listener() {
        return ctx.applyMassToggle(true);
      });
      \u0275\u0275element(36, "i", 23);
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(39, "nz-card")(40, "nz-table", 24, 0)(42, "thead")(43, "tr")(44, "th", 25);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "th", 26);
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(50, ViewDepartManagerListComponent_th_50_Template, 3, 4, "th", 27);
      \u0275\u0275elementStart(51, "th", 28);
      \u0275\u0275text(52);
      \u0275\u0275pipe(53, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "th", 29);
      \u0275\u0275text(55);
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "tr");
      \u0275\u0275template(58, ViewDepartManagerListComponent_ng_container_58_Template, 9, 10, "ng-container", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "tbody");
      \u0275\u0275template(60, ViewDepartManagerListComponent_tr_60_Template, 4, 5, "tr", 31)(61, ViewDepartManagerListComponent_tr_61_Template, 15, 18, "tr", 32);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      const dmTable_r12 = \u0275\u0275reference(41);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 27, "deptManage.field.date", "Ng\xE0y:"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.lockDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 30, "deptManage.field.dept", "Ph\xF2ng ban:"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzNodes", ctx.deptNodes());
      \u0275\u0275twoWayProperty("ngModel", ctx.deptNos);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(12, 33, "deptManage.placeholder.dept", "M\xE3 / T\xEAn ph\xF2ng"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.deptTreeErrorMessage());
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.loading());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(18, 36, "deptManage.btn.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.saving());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(22, 39, "common.save", "L\u01B0u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 42, "deptManage.btn.export", "Xu\u1EA5t Excel"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngForOf", ctx.lockColumnGroups);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(34, 45, "deptManage.btn.openRequest", "M\u1EDF xin ph\xE9p"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(38, 48, "deptManage.btn.closeRequest", "\u0110\xF3ng xin ph\xE9p"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("nzData", ctx.visibleRows())("nzLoading", ctx.loading())("nzShowPagination", false)("nzScroll", \u0275\u0275pureFunction0(63, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 51, "common.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 54, "common.date", "Ng\xE0y"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.lockColumnGroups);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(53, 57, "deptManage.col.updatedBy", "Ng\u01B0\u1EDDi thay \u0111\u1ED5i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(56, 60, "deptManage.col.updateTime", "Th\u1EDDi gian thay \u0111\u1ED5i"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.lockColumnGroups);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.loading() && dmTable_r12.data.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", dmTable_r12.data);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    FormsModule,
    CheckboxControlValueAccessor,
    NgControlStatus,
    NgModel,
    NzCardModule,
    NzCardComponent,
    NzInputModule,
    NzButtonModule,
    NzButtonComponent,
    NzTransitionPatchDirective,
    NzWaveDirective,
    NzDatePickerModule,
    NzDatePickerComponent,
    NzTreeSelectModule,
    NzTreeSelectComponent,
    NzCheckboxModule,
    NzCheckboxComponent,
    NzTableModule,
    NzTableComponent,
    NzTableCellDirective,
    NzThMeasureDirective,
    NzTheadComponent,
    NzTbodyComponent,
    NzTrDirective,
    DatePipe,
    TranslatePipe
  ], styles: ["\n.vdm-btn-save[_ngcontent-%COMP%] {\n  color: #d97706;\n  border-color: #d97706;\n  margin-left: 4px;\n}\n.vdm-btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n  margin-left: 4px;\n}\n.vdm-mass-toolbar[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.vdm-tree-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 20px;\n  display: inline-block;\n  text-align: center;\n}\n.vdm-update-time[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.vdm-table[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n/*# sourceMappingURL=view-depart-manager-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewDepartManagerListComponent, [{
    type: Component,
    args: [{ selector: "app-view-depart-manager-list", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzCardModule,
      NzInputModule,
      NzButtonModule,
      NzDatePickerModule,
      NzTreeSelectModule,
      NzCheckboxModule,
      NzTableModule,
      TranslatePipe
    ], template: `<nz-card class="mb-3">
  <div class="row align-items-end g-2 mb-2">
    <div class="col-md-2">
      <label class="form-label">{{ 'deptManage.field.date' | translate:'Ng\xE0y:' }}</label>
      <nz-date-picker class="w-100" [(ngModel)]="lockDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
    </div>
    <div class="col-md-4">
      <label class="form-label">{{ 'deptManage.field.dept' | translate:'Ph\xF2ng ban:' }}</label>
      <nz-tree-select class="w-100" [nzNodes]="deptNodes()" [(ngModel)]="deptNos"
                       nzCheckable nzShowSearch nzAllowClear
                       [nzPlaceHolder]="'deptManage.placeholder.dept' | translate:'M\xE3 / T\xEAn ph\xF2ng'"></nz-tree-select>
      <div *ngIf="deptTreeErrorMessage()" class="text-danger small mt-1">{{ deptTreeErrorMessage() }}</div>
    </div>
    <div class="col-md-6 text-end">
      <button nz-button nzType="primary" nzSize="small" type="button" [nzLoading]="loading()" (click)="search()">
        <i class="bx bx-search"></i> {{ 'deptManage.btn.search' | translate:'Tra c\u1EE9u' }}
      </button>
      <button nz-button nzType="default" nzSize="small" type="button" class="vdm-btn-save"
              [nzLoading]="saving()" (click)="save()">
        <i class="bx bx-save"></i> {{ 'common.save' | translate:'L\u01B0u' }}
      </button>
      <button nz-button nzType="default" nzSize="small" type="button" class="vdm-btn-export" (click)="exportExcel()">
        <i class="bx bx-export"></i> {{ 'deptManage.btn.export' | translate:'Xu\u1EA5t Excel' }}
      </button>
    </div>
  </div>

  <!-- Toolbar t\xE1c \u0111\u1ED9ng nhanh (Mass Actions) -->
  <div class="bg-light p-2 border rounded">
    <div class="row align-items-center text-center vdm-mass-toolbar">
      <div *ngFor="let g of lockColumnGroups" class="col-md-2 border-end">
        <div class="fw-bold mb-1">{{ g.labelKey | translate:g.labelFallback }}</div>
        <div>
          <label nz-checkbox [(ngModel)]="massToggle[g.day]" class="me-2">{{ 'deptManage.col.dayShift' | translate:'Ca ng\xE0y' }}</label>
          <label nz-checkbox [(ngModel)]="massToggle[g.night]">{{ 'deptManage.col.nightShift' | translate:'Ca \u0111\xEAm' }}</label>
        </div>
      </div>
      <div class="col-md-4 text-end">
        <button nz-button nzType="default" nzSize="small" class="me-1" type="button" (click)="applyMassToggle(false)">
          <i class="bx bx-lock-open"></i> {{ 'deptManage.btn.openRequest' | translate:'M\u1EDF xin ph\xE9p' }}
        </button>
        <button nz-button nzType="default" nzSize="small" nzDanger type="button" (click)="applyMassToggle(true)">
          <i class="bx bx-lock"></i> {{ 'deptManage.btn.closeRequest' | translate:'\u0110\xF3ng xin ph\xE9p' }}
        </button>
      </div>
    </div>
  </div>
</nz-card>

<nz-card>
  <nz-table #dmTable [nzData]="visibleRows()" [nzLoading]="loading()" [nzShowPagination]="false"
            [nzScroll]="{ y: 'calc(100vh - 380px)' }" nzSize="small" class="vdm-table">
    <thead>
      <tr>
        <th rowspan="2" class="text-start" nzWidth="25%">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
        <th rowspan="2" nzWidth="90px">{{ 'common.date' | translate:'Ng\xE0y' }}</th>
        <th *ngFor="let g of lockColumnGroups" colspan="2">{{ g.labelKey | translate:g.labelFallback }}</th>
        <th rowspan="2">{{ 'deptManage.col.updatedBy' | translate:'Ng\u01B0\u1EDDi thay \u0111\u1ED5i' }}</th>
        <th rowspan="2" nzWidth="10%">{{ 'deptManage.col.updateTime' | translate:'Th\u1EDDi gian thay \u0111\u1ED5i' }}</th>
      </tr>
      <tr>
        <ng-container *ngFor="let g of lockColumnGroups">
          <th nzWidth="70px">
            {{ 'deptManage.col.dayShift' | translate:'Ca ng\xE0y' }}
            <input type="checkbox" class="form-check-input ms-1" [(ngModel)]="headerSelectAll[g.day]" (ngModelChange)="onSelectAllColumn(g.day)">
          </th>
          <th nzWidth="70px">
            {{ 'deptManage.col.nightShift' | translate:'Ca \u0111\xEAm' }}
            <input type="checkbox" class="form-check-input ms-1" [(ngModel)]="headerSelectAll[g.night]" (ngModelChange)="onSelectAllColumn(g.night)">
          </th>
        </ng-container>
      </tr>
    </thead>
    <tbody>
      <tr *ngIf="!loading() && dmTable.data.length === 0">
        <td [attr.colspan]="4 + allLockColumns.length" class="text-center text-muted py-3">
          {{ 'deptManage.js.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u (c\xF3 th\u1EC3 h\u1EC7 th\u1ED1ng ch\u01B0a \u0111\u1ED3ng b\u1ED9 ph\xF2ng ban).' }}
        </td>
      </tr>
      <tr *ngFor="let row of dmTable.data" [class.table-warning]="row.modified">
        <td class="text-start" [style.paddingLeft.px]="row.level * 20 + 10">
          <i *ngIf="row.hasChildren" class="bx vdm-tree-icon border rounded bg-white text-primary"
             [class.bx-minus]="!isCollapsed(row.deptNo)" [class.bx-plus]="isCollapsed(row.deptNo)"
             (click)="toggleRow(row.deptNo)"></i>
          <span *ngIf="!row.hasChildren" class="vdm-tree-icon"></span>
          <span class="fw-bold ms-1" [title]="row.deptNo">{{ row.dispDeptName }}</span>
        </td>
        <td class="text-center">{{ lockDate | date:'dd/MM/yyyy' }}</td>
        <td *ngFor="let col of allLockColumns" class="text-center">
          <input type="checkbox" class="form-check-input" [(ngModel)]="row[col]" (ngModelChange)="markModified(row)">
        </td>
        <td class="text-center">{{ row.updatedBy }}</td>
        <td class="text-center vdm-update-time">{{ row.updateDate ? (row.updateDate | date:'dd/MM/yyyy HH:mm') : '' }}</td>
      </tr>
    </tbody>
  </nz-table>
</nz-card>
`, styles: ["/* src/app/view-depart-manager-list/view-depart-manager-list.component.css */\n.vdm-btn-save {\n  color: #d97706;\n  border-color: #d97706;\n  margin-left: 4px;\n}\n.vdm-btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n  margin-left: 4px;\n}\n.vdm-mass-toolbar {\n  font-size: 0.85rem;\n}\n.vdm-tree-icon {\n  cursor: pointer;\n  width: 20px;\n  display: inline-block;\n  text-align: center;\n}\n.vdm-update-time {\n  font-size: 0.75rem;\n}\n.vdm-table {\n  font-size: 0.85rem;\n}\n/*# sourceMappingURL=view-depart-manager-list.component.css.map */\n"] }]
  }], () => [{ type: ViewDepartManagerListService }, { type: ManageEmpPositionInfoService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewDepartManagerListComponent, { className: "ViewDepartManagerListComponent", filePath: "src/app/view-depart-manager-list/view-depart-manager-list.component.ts", lineNumber: 92 });
})();
export {
  ViewDepartManagerListComponent
};
//# debugId=d4eaeded-a1a0-58ef-a7ff-1fad90675461
//# sourceMappingURL=chunk-5OD5MXSK.js.map
