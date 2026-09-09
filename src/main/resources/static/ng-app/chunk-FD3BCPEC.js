import {
  AuthService
} from "./chunk-NF2IPJNZ.js";
import {
  NzTagComponent,
  NzTagModule
} from "./chunk-HTQAHYN3.js";
import {
  TabService
} from "./chunk-DUA22MI5.js";
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
import "./chunk-2GOAB54B.js";
import {
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
  ViewChild,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-VTW5U2M5.js";

// src/app/hrm-dashboard/hrm-dashboard.service.ts
var HrmDashboardService = class _HrmDashboardService {
  constructor(http) {
    this.http = http;
  }
  http;
  getExpiringContractsCount() {
    return this.http.get("/hrm/api/expiringContracts/count", { withCredentials: true });
  }
  getNoContractCount() {
    return this.http.get("/hrm/contractInfo/api/noContract/count", { withCredentials: true });
  }
  getEmpMonthlyStats(year) {
    return this.http.get("/hrm/api/empMonthlyStats", {
      params: new HttpParams().set("year", year),
      withCredentials: true
    });
  }
  static \u0275fac = function HrmDashboardService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HrmDashboardService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HrmDashboardService, factory: _HrmDashboardService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmDashboardService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/hrm-dashboard/hrm-dashboard.component.ts
var _c0 = ["chartEl"];
function HrmDashboardComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 23);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(2, 1, "hrm.alerts.title", "C\u1EA3nh b\xE1o"), " ");
  }
}
function HrmDashboardComponent_nz_tag_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-tag", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "dashboard.status.needAction", "C\u1EA7n x\u1EED l\xFD"));
  }
}
function HrmDashboardComponent_nz_tag_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-tag", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "dashboard.status.stable", "\u1ED4n \u0111\u1ECBnh"));
  }
}
function HrmDashboardComponent_nz_tag_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-tag", 26);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "dashboard.status.needAction", "C\u1EA7n x\u1EED l\xFD"));
  }
}
function HrmDashboardComponent_nz_tag_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-tag", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "dashboard.status.stable", "\u1ED4n \u0111\u1ECBnh"));
  }
}
function HrmDashboardComponent_ng_template_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(2, 1, "hrm.chart.personnel.title", "T\xECnh h\xECnh nh\xE2n s\u1EF1"), " ");
  }
}
function HrmDashboardComponent_ng_template_52_nz_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 33);
  }
  if (rf & 2) {
    const y_r3 = ctx.$implicit;
    \u0275\u0275property("nzLabel", y_r3.toString())("nzValue", y_r3);
  }
}
function HrmDashboardComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "nz-select", 29);
    \u0275\u0275listener("ngModelChange", function HrmDashboardComponent_ng_template_52_Template_nz_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onYearChange($event));
    });
    \u0275\u0275template(2, HrmDashboardComponent_ng_template_52_nz_option_2_Template, 1, 2, "nz-option", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(3, "a", 31);
    \u0275\u0275element(4, "i", 32);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.selectedYear());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.years);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r1.exportUrl(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(6, 4, "hrm.chart.export", "Xu\u1EA5t Excel"), " ");
  }
}
var I18N_KEYS = [
  "hrm.welcome.title",
  "hrm.alerts.title",
  "dashboard.contract.expiring",
  "dashboard.contract.expiringDetail",
  "hrm.alert.noContract",
  "hrm.quickLinks.noContract",
  "dashboard.status.needAction",
  "dashboard.status.stable",
  "dashboard.col.quantity",
  "common.name",
  "common.status",
  "hrm.chart.personnel.title",
  "hrm.chart.export",
  "hrm.chart.personnel.totalEmp",
  "hrm.chart.personnel.newJoiner",
  "hrm.chart.personnel.leaver"
];
var HrmDashboardComponent = class _HrmDashboardComponent {
  constructor(auth, i18n, tabs, api) {
    this.auth = auth;
    this.i18n = i18n;
    this.tabs = tabs;
    this.api = api;
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.years = Array.from({ length: 5 }, (_, i) => currentYear - i);
  }
  auth;
  i18n;
  tabs;
  api;
  chartEl;
  expiringContractsCount = signal(
    null,
    ...ngDevMode ? [{ debugName: "expiringContractsCount" }] : (
      /* istanbul ignore next */
      []
    )
  );
  noContractCount = signal(
    null,
    ...ngDevMode ? [{ debugName: "noContractCount" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedYear = signal(
    (/* @__PURE__ */ new Date()).getFullYear(),
    ...ngDevMode ? [{ debugName: "selectedYear" }] : (
      /* istanbul ignore next */
      []
    )
  );
  years;
  chart = null;
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getExpiringContractsCount().subscribe({
      next: (v) => this.expiringContractsCount.set(v ?? 0),
      error: () => this.expiringContractsCount.set("error")
    });
    this.api.getNoContractCount().subscribe({
      next: (v) => this.noContractCount.set(v ?? 0),
      error: () => this.noContractCount.set("error")
    });
  }
  ngAfterViewInit() {
    this.loadChart(this.selectedYear());
  }
  ngOnDestroy() {
    this.chart?.destroy();
  }
  isPositive(count) {
    return typeof count === "number" && count > 0;
  }
  /** Trang hợp đồng sắp hết hạn đã migrate sang Angular /expired-contract-list - mở dạng tab 'route'. */
  openExpiredContractTab() {
    this.tabs.openTab("/expired-contract-list", this.i18n.t("dashboard.contract.expiring", "H\u1EE3p \u0111\u1ED3ng s\u1EAFp h\u1EBFt h\u1EA1n"), "route");
  }
  /** Trang chưa có hợp đồng đã migrate sang Angular /contract-info-list - mở dạng tab 'route'. */
  openNoContractTab() {
    this.tabs.openTab("/contract-info-list", this.i18n.t("hrm.quickLinks.noContract", "Ch\u01B0a c\xF3 h\u1EE3p \u0111\u1ED3ng"), "route");
  }
  onYearChange(year) {
    this.selectedYear.set(year);
    this.loadChart(year);
  }
  exportUrl() {
    return "/hrm/api/empMonthlyStats/export?year=" + this.selectedYear();
  }
  loadChart(year) {
    this.api.getEmpMonthlyStats(year).subscribe({
      next: (rows) => this.renderChart(rows ?? []),
      error: () => this.renderChart([])
    });
  }
  renderChart(rows) {
    const chartElement = this.chartEl?.nativeElement;
    if (!chartElement)
      return;
    const labels = Array.from({ length: 12 }, (_, i) => "T" + (i + 1));
    const empCounts = new Array(12).fill(0);
    const joinerCounts = new Array(12).fill(0);
    const leaverCounts = new Array(12).fill(0);
    rows.forEach((r) => {
      const idx = r.monthNum - 1;
      if (idx < 0 || idx > 11)
        return;
      empCounts[idx] = r.empCount;
      joinerCounts[idx] = r.newJoinerCount;
      leaverCounts[idx] = r.leaverCount;
    });
    const options = {
      series: [
        { name: this.i18n.t("hrm.chart.personnel.totalEmp", "T\u1ED5ng nh\xE2n vi\xEAn"), data: empCounts },
        { name: this.i18n.t("hrm.chart.personnel.newJoiner", "Nh\xE2n vi\xEAn m\u1EDBi"), data: joinerCounts },
        { name: this.i18n.t("hrm.chart.personnel.leaver", "Nh\xE2n vi\xEAn ngh\u1EC9 vi\u1EC7c"), data: leaverCounts }
      ],
      chart: { type: "bar", height: 280, toolbar: { show: false }, animations: { enabled: false } },
      plotOptions: { bar: { horizontal: false, columnWidth: "60%", borderRadius: 2 } },
      dataLabels: { enabled: false },
      xaxis: { categories: labels },
      yaxis: { min: 0, labels: { formatter: (v) => Number.isInteger(v) ? v : "" } },
      colors: ["#4e73df", "#28a745", "#dc3545"],
      legend: { position: "top", horizontalAlign: "right", fontSize: "12px" },
      noData: { text: "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u", align: "center", verticalAlign: "middle" },
      grid: { borderColor: "#f1f1f1" }
    };
    if (this.chart) {
      this.chart.updateOptions(options, true, false);
    } else {
      this.chart = new ApexCharts(chartElement, options);
      this.chart.render();
    }
  }
  static \u0275fac = function HrmDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HrmDashboardComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(TabService), \u0275\u0275directiveInject(HrmDashboardService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmDashboardComponent, selectors: [["app-hrm-dashboard"]], viewQuery: function HrmDashboardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chartEl = _t.first);
    }
  }, decls: 56, vars: 35, consts: [["alertsTitle", ""], ["chartTitle", ""], ["chartExtra", ""], ["chartEl", ""], [1, "py-3", "hrm-dashboard"], [1, "card", "bg-primary", "text-white", "mb-3"], [1, "card-body", "py-3", "d-flex", "align-items-center", "gap-3"], [1, "bx", "bx-building-house", "fs-1"], [1, "mb-1", "text-white"], [1, "mb-0", "opacity-75", "small"], [1, "row", "g-3"], [1, "col-lg-4"], [1, "h-100", 3, "nzTitle"], ["nzSize", "small", 3, "nzShowPagination"], [2, "width", "65%"], [2, "width", "15%"], [2, "width", "20%"], ["href", "javascript:void(0)", 3, "click"], ["nzColor", "error", 4, "ngIf"], ["nzColor", "success", 4, "ngIf"], ["nzColor", "warning", 4, "ngIf"], [1, "col-lg-8"], [1, "h-100", 3, "nzTitle", "nzExtra"], [1, "bx", "bx-bell", "text-warning", "me-1"], ["nzColor", "error"], ["nzColor", "success"], ["nzColor", "warning"], [1, "bx", "bx-bar-chart-alt-2", "text-primary", "me-1"], [1, "d-flex", "align-items-center", "gap-2"], [2, "width", "90px", 3, "ngModelChange", "ngModel"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "default", "nzSize", "small", 3, "href"], [1, "bx", "bx-download", "me-1"], [3, "nzLabel", "nzValue"]], template: function HrmDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6);
      \u0275\u0275element(3, "i", 7);
      \u0275\u0275elementStart(4, "div")(5, "h5", 8);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 9);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(10, "div", 10)(11, "div", 11)(12, "nz-card", 12);
      \u0275\u0275template(13, HrmDashboardComponent_ng_template_13_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(15, "nz-table", 13)(16, "thead")(17, "tr")(18, "th", 14);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "th", 15);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th", 16);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "tbody")(28, "tr")(29, "td")(30, "a", 17);
      \u0275\u0275listener("click", function HrmDashboardComponent_Template_a_click_30_listener() {
        return ctx.openExpiredContractTab();
      });
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "td");
      \u0275\u0275text(34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "td");
      \u0275\u0275template(36, HrmDashboardComponent_nz_tag_36_Template, 3, 4, "nz-tag", 18)(37, HrmDashboardComponent_nz_tag_37_Template, 3, 4, "nz-tag", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "tr")(39, "td")(40, "a", 17);
      \u0275\u0275listener("click", function HrmDashboardComponent_Template_a_click_40_listener() {
        return ctx.openNoContractTab();
      });
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "td");
      \u0275\u0275text(44);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "td");
      \u0275\u0275template(46, HrmDashboardComponent_nz_tag_46_Template, 3, 4, "nz-tag", 20)(47, HrmDashboardComponent_nz_tag_47_Template, 3, 4, "nz-tag", 19);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(48, "div", 21)(49, "nz-card", 22);
      \u0275\u0275template(50, HrmDashboardComponent_ng_template_50_Template, 3, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(52, HrmDashboardComponent_ng_template_52_Template, 7, 7, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275element(54, "div", null, 3);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const alertsTitle_r4 = \u0275\u0275reference(14);
      const chartTitle_r5 = \u0275\u0275reference(51);
      const chartExtra_r6 = \u0275\u0275reference(53);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 17, "hrm.welcome.title", "Ch\xE0o m\u1EEBng \u0111\u1EBFn v\u1EDBi HR Management System"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("Ch\xE0o m\u1EEBng ", ctx.auth.currentUser()?.employeeName, " \u0111\u1EBFn v\u1EDBi h\u1EC7 th\u1ED1ng HR!");
      \u0275\u0275advance(3);
      \u0275\u0275property("nzTitle", alertsTitle_r4);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzShowPagination", false);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 20, "common.name", "T\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 23, "dashboard.col.quantity", "S\u1ED1 l\u01B0\u1EE3ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 26, "common.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(32, 29, "dashboard.contract.expiringDetail", "H\u1EE3p \u0111\u1ED3ng s\u1EAFp h\u1EBFt h\u1EA1n (7 ng\xE0y t\u1EDBi)"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.expiringContractsCount() === null ? "-" : ctx.expiringContractsCount() === "error" ? "?" : ctx.expiringContractsCount());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isPositive(ctx.expiringContractsCount()));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.expiringContractsCount() === 0);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(42, 32, "hrm.alert.noContract", "Nh\xE2n vi\xEAn ch\u01B0a c\xF3 h\u1EE3p \u0111\u1ED3ng"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.noContractCount() === null ? "-" : ctx.noContractCount() === "error" ? "-" : ctx.noContractCount());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isPositive(ctx.noContractCount()));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.noContractCount() === 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("nzTitle", chartTitle_r5)("nzExtra", chartExtra_r6);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgControlStatus, NgModel, NzCardModule, NzCardComponent, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzTagModule, NzTagComponent, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-hrm-dashboard", standalone: true, imports: [CommonModule, FormsModule, NzCardModule, NzTableModule, NzTagModule, NzSelectModule, NzButtonModule, TranslatePipe], template: `<div class="py-3 hrm-dashboard">
  <div class="card bg-primary text-white mb-3">
    <div class="card-body py-3 d-flex align-items-center gap-3">
      <i class="bx bx-building-house fs-1"></i>
      <div>
        <h5 class="mb-1 text-white">{{ 'hrm.welcome.title' | translate:'Ch\xE0o m\u1EEBng \u0111\u1EBFn v\u1EDBi HR Management System' }}</h5>
        <p class="mb-0 opacity-75 small">Ch\xE0o m\u1EEBng {{ auth.currentUser()?.employeeName }} \u0111\u1EBFn v\u1EDBi h\u1EC7 th\u1ED1ng HR!</p>
      </div>
    </div>
  </div>

  <div class="row g-3">
    <div class="col-lg-4">
      <nz-card [nzTitle]="alertsTitle" class="h-100">
        <ng-template #alertsTitle>
          <i class="bx bx-bell text-warning me-1"></i>{{ 'hrm.alerts.title' | translate:'C\u1EA3nh b\xE1o' }}
        </ng-template>
        <nz-table [nzShowPagination]="false" nzSize="small">
          <thead>
            <tr>
              <th style="width:65%">{{ 'common.name' | translate:'T\xEAn' }}</th>
              <th style="width:15%">{{ 'dashboard.col.quantity' | translate:'S\u1ED1 l\u01B0\u1EE3ng' }}</th>
              <th style="width:20%">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="javascript:void(0)" (click)="openExpiredContractTab()">
                  {{ 'dashboard.contract.expiringDetail' | translate:'H\u1EE3p \u0111\u1ED3ng s\u1EAFp h\u1EBFt h\u1EA1n (7 ng\xE0y t\u1EDBi)' }}
                </a>
              </td>
              <td>{{ expiringContractsCount() === null ? '-' : (expiringContractsCount() === 'error' ? '?' : expiringContractsCount()) }}</td>
              <td>
                <nz-tag *ngIf="isPositive(expiringContractsCount())" nzColor="error">{{ 'dashboard.status.needAction' | translate:'C\u1EA7n x\u1EED l\xFD' }}</nz-tag>
                <nz-tag *ngIf="expiringContractsCount() === 0" nzColor="success">{{ 'dashboard.status.stable' | translate:'\u1ED4n \u0111\u1ECBnh' }}</nz-tag>
              </td>
            </tr>
            <tr>
              <td>
                <a href="javascript:void(0)" (click)="openNoContractTab()">
                  {{ 'hrm.alert.noContract' | translate:'Nh\xE2n vi\xEAn ch\u01B0a c\xF3 h\u1EE3p \u0111\u1ED3ng' }}
                </a>
              </td>
              <td>{{ noContractCount() === null ? '-' : (noContractCount() === 'error' ? '-' : noContractCount()) }}</td>
              <td>
                <nz-tag *ngIf="isPositive(noContractCount())" nzColor="warning">{{ 'dashboard.status.needAction' | translate:'C\u1EA7n x\u1EED l\xFD' }}</nz-tag>
                <nz-tag *ngIf="noContractCount() === 0" nzColor="success">{{ 'dashboard.status.stable' | translate:'\u1ED4n \u0111\u1ECBnh' }}</nz-tag>
              </td>
            </tr>
          </tbody>
        </nz-table>
      </nz-card>
    </div>

    <div class="col-lg-8">
      <nz-card [nzTitle]="chartTitle" [nzExtra]="chartExtra" class="h-100">
        <ng-template #chartTitle>
          <i class="bx bx-bar-chart-alt-2 text-primary me-1"></i>{{ 'hrm.chart.personnel.title' | translate:'T\xECnh h\xECnh nh\xE2n s\u1EF1' }}
        </ng-template>
        <ng-template #chartExtra>
          <div class="d-flex align-items-center gap-2">
            <nz-select [ngModel]="selectedYear()" (ngModelChange)="onYearChange($event)" style="width:90px">
              <nz-option *ngFor="let y of years" [nzLabel]="y.toString()" [nzValue]="y"></nz-option>
            </nz-select>
            <a [href]="exportUrl()" nz-button nzType="default" nzSize="small">
              <i class="bx bx-download me-1"></i>{{ 'hrm.chart.export' | translate:'Xu\u1EA5t Excel' }}
            </a>
          </div>
        </ng-template>
        <div #chartEl></div>
      </nz-card>
    </div>
  </div>
</div>
` }]
  }], () => [{ type: AuthService }, { type: I18nService }, { type: TabService }, { type: HrmDashboardService }], { chartEl: [{
    type: ViewChild,
    args: ["chartEl"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmDashboardComponent, { className: "HrmDashboardComponent", filePath: "src/app/hrm-dashboard/hrm-dashboard.component.ts", lineNumber: 51 });
})();
export {
  HrmDashboardComponent
};
//# debugId=b9cb6a06-3103-519a-a947-c624cf2ab75c
//# sourceMappingURL=chunk-FD3BCPEC.js.map
