import {
  NzTagComponent,
  NzTagModule
} from "./chunk-HTQAHYN3.js";
import {
  TabService
} from "./chunk-DUA22MI5.js";
import {
  NzDatePickerComponent,
  NzDatePickerModule,
  NzRangePickerComponent
} from "./chunk-TWXZW7YB.js";
import "./chunk-5TI46VEX.js";
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
import "./chunk-2QLZSMGV.js";
import {
  NzAlertComponent,
  NzAlertModule
} from "./chunk-BYJYXGGS.js";
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
  NgIf,
  NzButtonComponent,
  NzButtonModule,
  NzTransitionPatchDirective,
  NzWaveDirective,
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
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-VTW5U2M5.js";

// src/app/dashboard/dashboard.service.ts
var DashboardService = class _DashboardService {
  constructor(http) {
    this.http = http;
  }
  http;
  getMyLeaveApplyList(fromDate, toDate) {
    return this.http.get("/ess/infoApplyAttendance/api/myLeaveApply/list", {
      params: new HttpParams().set("fromDate", fromDate).set("toDate", toDate),
      withCredentials: true
    });
  }
  getMyOtApplyList(fromDate, toDate) {
    return this.http.get("/ess/infoApply/api/myOtApply/list", {
      params: new HttpParams().set("fromDate", fromDate).set("toDate", toDate),
      withCredentials: true
    });
  }
  getMyCwaAbnormalList(startDate, endDate) {
    return this.http.get("/ess/infoApply/api/myCwaAbnormal/list", {
      params: new HttpParams().set("startDate", startDate).set("endDate", endDate),
      withCredentials: true
    });
  }
  getAttendancePersonalList(startDate, endDate) {
    return this.http.get("/ess/infoApplyAttendance/api/attendancePersonal/list", {
      params: new HttpParams().set("startDate", startDate).set("endDate", endDate),
      withCredentials: true
    });
  }
  getPersonOtList(startDate, endDate) {
    return this.http.get("/ess/infoApply/api/personOt/list", {
      params: new HttpParams().set("startDate", startDate).set("endDate", endDate),
      withCredentials: true
    });
  }
  static \u0275fac = function DashboardService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DashboardService, factory: _DashboardService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/dashboard/dashboard.component.ts
var _c0 = ["chartEl"];
function DashboardComponent_nz_tag_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-tag", 23);
    \u0275\u0275text(1, "\u0110\xE3 \u0111\u0103ng k\xFD");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_nz_tag_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-tag", 24);
    \u0275\u0275text(1, "\u1ED4n \u0111\u1ECBnh");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_nz_tag_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-tag", 23);
    \u0275\u0275text(1, "\u0110\xE3 \u0111\u0103ng k\xFD");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_nz_tag_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-tag", 24);
    \u0275\u0275text(1, "\u1ED4n \u0111\u1ECBnh");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_nz_tag_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-tag", 25);
    \u0275\u0275text(1, "C\u1EA7n x\u1EED l\xFD");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_nz_tag_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-tag", 24);
    \u0275\u0275text(1, "\u1ED4n \u0111\u1ECBnh");
    \u0275\u0275elementEnd();
  }
}
var ABSENT_ITEMS = ["141443", "14015448"];
var DashboardComponent = class _DashboardComponent {
  constructor(api, tabs) {
    this.api = api;
    this.tabs = tabs;
  }
  api;
  tabs;
  chartEl;
  leaveCount = signal(
    null,
    ...ngDevMode ? [{ debugName: "leaveCount" }] : (
      /* istanbul ignore next */
      []
    )
  );
  otCount = signal(
    null,
    ...ngDevMode ? [{ debugName: "otCount" }] : (
      /* istanbul ignore next */
      []
    )
  );
  abnormalCount = signal(
    null,
    ...ngDevMode ? [{ debugName: "abnormalCount" }] : (
      /* istanbul ignore next */
      []
    )
  );
  dateRange = signal(
    this.buildDefaultRange(),
    ...ngDevMode ? [{ debugName: "dateRange" }] : (
      /* istanbul ignore next */
      []
    )
  );
  isPositive(count) {
    return typeof count === "number" && count > 0;
  }
  chart = null;
  attDetailMap = {};
  otDetailMap = {};
  openOtTab() {
    this.tabs.openTab("/dept-ot-apply-info", "T\u1ED5ng h\u1EE3p OT theo b\u1ED9 ph\u1EADn", "route");
  }
  /** 3 link thống kê bên dưới trỏ tới route Angular qua TabService (giống openOtTab()) thay vì
   *  href tới URL Thymeleaf gốc - các trang này đã migrate nên controller view mapping cũ đã bị xóa. */
  openApplyAttendanceInfoListTab() {
    this.tabs.openTab("/apply-attendance-info-list", "\u0110\u01A1n ngh\u1EC9 ph\xE9p c\u1EE7a t\xF4i", "route");
  }
  openOtApplyInfoListTab() {
    this.tabs.openTab("/ot-apply-info-list", "\u0110\u01A1n t\u0103ng ca c\u1EE7a t\xF4i", "route");
  }
  openCwaAbnormalApplyTab() {
    this.tabs.openTab("/cwa-abnormal-apply", "Xin ph\xE9p ch\u1EA5m c\xF4ng b\u1EA5t th\u01B0\u1EDDng", "route");
  }
  onDateRangeChange(range) {
    if (!range || range.length !== 2)
      return;
    this.dateRange.set(range);
    this.loadStats();
    this.loadChart();
  }
  ngAfterViewInit() {
    this.loadStats();
    this.loadChart();
  }
  ngOnDestroy() {
    this.chart?.destroy();
  }
  /** Mặc định: từ 25 tháng trước đến 24 tháng này - giống dashboard.html gốc. */
  buildDefaultRange() {
    const now = /* @__PURE__ */ new Date();
    const year = now.getFullYear();
    const mon = now.getMonth();
    const to = new Date(year, mon, 24);
    const from = new Date(year, mon - 1, 25);
    return [from, to];
  }
  dateToDmy(d) {
    return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
  }
  dateToYmd(d) {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }
  loadStats() {
    const [from, to] = this.dateRange();
    if (!from || !to)
      return;
    const fDmy = this.dateToDmy(from);
    const tDmy = this.dateToDmy(to);
    const fYmd = this.dateToYmd(from);
    const tYmd = this.dateToYmd(to);
    this.api.getMyLeaveApplyList(fYmd, tYmd).subscribe({
      next: (rows) => this.leaveCount.set((rows ?? []).length),
      error: () => this.leaveCount.set("error")
    });
    this.api.getMyOtApplyList(fYmd, tYmd).subscribe({
      next: (rows) => this.otCount.set((rows ?? []).length),
      error: () => this.otCount.set("error")
    });
    this.api.getMyCwaAbnormalList(fDmy, tDmy).subscribe({
      next: (rows) => this.abnormalCount.set((rows ?? []).length),
      error: () => this.abnormalCount.set("error")
    });
  }
  loadChart() {
    const [from, to] = this.dateRange();
    if (!from || !to)
      return;
    const fromDmy = this.dateToDmy(from);
    const toDmy = this.dateToDmy(to);
    const labels = this.buildLabels(from, to);
    let attRows = null;
    let otRows = null;
    const tryRender = () => {
      if (attRows === null || otRows === null)
        return;
      this.renderChart(labels, this.groupAttendanceHours(attRows, labels), this.groupHours(otRows, labels));
    };
    this.api.getAttendancePersonalList(fromDmy, toDmy).subscribe({
      next: (rows) => {
        attRows = rows ?? [];
        tryRender();
      },
      error: () => {
        attRows = [];
        tryRender();
      }
    });
    this.api.getPersonOtList(fromDmy, toDmy).subscribe({
      next: (rows) => {
        otRows = rows ?? [];
        tryRender();
      },
      error: () => {
        otRows = [];
        tryRender();
      }
    });
  }
  buildLabels(from, to) {
    const labels = [];
    for (const d = new Date(from); d <= to; d.setDate(d.getDate() + 1)) {
      labels.push(`${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, "0")}/${String(d.getDate()).padStart(2, "0")}`);
    }
    return labels;
  }
  /** Chấm công: nếu ngày có ITEM_NO thuộc danh sách nghỉ thì giờ = 0. Đồng thời build detail map cho tooltip. */
  groupAttendanceHours(rows, labels) {
    const hoursMap = {};
    const absentMap = {};
    this.attDetailMap = {};
    for (const r of rows ?? []) {
      const key = (r.arDateStr || "").replace(/-/g, "/");
      const hours = parseFloat(r.workHour) || 0;
      if (!this.attDetailMap[key])
        this.attDetailMap[key] = [];
      if (ABSENT_ITEMS.indexOf(r.itemNo) !== -1) {
        absentMap[key] = true;
        this.attDetailMap[key].push({ name: r.itemName || r.itemNo, hours, absent: true });
      } else {
        hoursMap[key] = (hoursMap[key] || 0) + hours;
        this.attDetailMap[key].push({ name: r.itemName || r.itemNo, hours, absent: false });
      }
    }
    return labels.map((l) => absentMap[l] ? 0 : parseFloat((hoursMap[l] || 0).toFixed(2)));
  }
  /** Tăng ca: cộng toàn bộ giờ, build detail map cho tooltip. */
  groupHours(rows, labels) {
    const map = {};
    this.otDetailMap = {};
    for (const r of rows ?? []) {
      const key = (r.arDateStr || "").replace(/-/g, "/");
      const hours = parseFloat(r.workHour) || 0;
      map[key] = (map[key] || 0) + hours;
      if (!this.otDetailMap[key])
        this.otDetailMap[key] = [];
      this.otDetailMap[key].push({ name: r.itemName || r.itemNo, hours });
    }
    return labels.map((l) => parseFloat((map[l] || 0).toFixed(2)));
  }
  renderChart(labels, attData, otData) {
    const chartElement = this.chartEl?.nativeElement;
    if (!chartElement)
      return;
    const displayLabels = labels.map((l) => {
      const p = l.split("/");
      return `${p[2]}/${p[1]}`;
    });
    const attDetailMap = this.attDetailMap;
    const otDetailMap = this.otDetailMap;
    const options = {
      series: [
        { name: "Ch\u1EA5m c\xF4ng (gi\u1EDD)", data: attData, type: "bar" },
        { name: "Xu h\u01B0\u1EDBng ch\u1EA5m c\xF4ng", data: attData, type: "line" },
        { name: "T\u0103ng ca (gi\u1EDD)", data: otData, type: "bar" },
        { name: "Xu h\u01B0\u1EDBng t\u0103ng ca", data: otData, type: "line" }
      ],
      chart: { type: "line", height: 255, toolbar: { show: false }, animations: { enabled: false } },
      plotOptions: { bar: { horizontal: false, columnWidth: "55%", borderRadius: 2 } },
      stroke: { width: [0, 2, 0, 2], curve: "smooth" },
      fill: { opacity: [0.65, 1, 0.65, 1] },
      markers: { size: [0, 3, 0, 3] },
      dataLabels: { enabled: false },
      xaxis: {
        categories: displayLabels,
        labels: { rotate: -45, rotateAlways: true, style: { fontSize: "10px" } },
        tickPlacement: "on"
      },
      yaxis: {
        title: { text: "gi\u1EDD", style: { fontSize: "11px" } },
        min: 0,
        tickAmount: 4,
        labels: { formatter: (v) => v % 1 === 0 ? v : v.toFixed(1) }
      },
      colors: ["#4e73df", "#1a3fa0", "#f6a623", "#b87200"],
      legend: { position: "top", horizontalAlign: "right", fontSize: "12px" },
      tooltip: {
        custom: (opts) => {
          const idx = opts.dataPointIndex;
          const dateKey = labels[idx];
          const dispDate = displayLabels[idx];
          const attList = attDetailMap[dateKey] || [];
          const otList = otDetailMap[dateKey] || [];
          let h = '<div style="padding:8px 12px;min-width:160px;font-size:12px;">';
          h += `<div style="font-weight:600;margin-bottom:6px;">${dispDate}</div>`;
          h += '<div style="color:#4e73df;font-weight:500;margin-bottom:2px;">Ch\u1EA5m c\xF4ng (gi\u1EDD)</div>';
          if (attList.length) {
            attList.forEach((it) => {
              const style = it.absent ? "color:#e74a3b;" : "";
              h += `<div style="${style}padding-left:8px;">${it.name}: <b>${it.hours}</b> gi\u1EDD</div>`;
            });
          } else {
            h += '<div style="padding-left:8px;color:#aaa;">0 gi\u1EDD</div>';
          }
          h += '<div style="color:#f6a623;font-weight:500;margin-top:6px;margin-bottom:2px;">T\u0103ng ca (gi\u1EDD)</div>';
          if (otList.length) {
            otList.forEach((it) => {
              h += `<div style="padding-left:8px;">${it.name}: <b>${it.hours}</b> gi\u1EDD</div>`;
            });
          } else {
            h += '<div style="padding-left:8px;color:#aaa;">0 gi\u1EDD</div>';
          }
          h += "</div>";
          return h;
        }
      },
      noData: { text: "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u", align: "center", verticalAlign: "middle", style: { fontSize: "13px", color: "#aaa" } },
      grid: { borderColor: "#f1f1f1" }
    };
    if (this.chart) {
      this.chart.updateOptions(options, true, false);
    } else {
      this.chart = new ApexCharts(chartElement, options);
      this.chart.render();
    }
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(DashboardService), \u0275\u0275directiveInject(TabService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chartEl = _t.first);
    }
  }, decls: 60, vars: 11, consts: [["chartEl", ""], [1, "py-3"], ["nzType", "info", "nzMessage", "Ch\xE0o m\u1EEBng \u0111\u1EBFn v\u1EDBi h\u1EC7 th\u1ED1ng HR!", 1, "mb-3"], [1, "row"], [1, "col-xxl-4"], [1, "d-flex", "justify-content-end", "mb-2"], ["nzFormat", "dd/MM/yyyy", 3, "ngModelChange", "ngModel"], ["nzSize", "small", 3, "nzShowPagination"], [2, "width", "20%"], ["href", "javascript:void(0)", 3, "click"], ["nzColor", "blue", 4, "ngIf"], ["nzColor", "success", 4, "ngIf"], ["nzColor", "warning", 4, "ngIf"], [1, "col-xxl-8"], ["nzTitle", "Bi\u1EC3u \u0111\u1ED3 ch\u1EA5m c\xF4ng & T\u0103ng ca", 1, "h-100"], [1, "row", "g-3", "mt-1"], [1, "col-md-4"], [1, "fas", "fa-clock", "me-2"], [1, "text-muted", "small"], ["nz-button", "", "nzType", "primary", "nzSize", "small", 3, "click"], [1, "row", "mt-3"], [1, "col-12", "text-center"], ["src", "/assets/images/Cameras_BannerPC.png", "alt", "Banner", 1, "img-fluid", "rounded", 2, "max-width", "80%", "box-shadow", "0 8px 24px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.10)"], ["nzColor", "blue"], ["nzColor", "success"], ["nzColor", "warning"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275element(1, "nz-alert", 2);
      \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "nz-range-picker", 6);
      \u0275\u0275listener("ngModelChange", function DashboardComponent_Template_nz_range_picker_ngModelChange_5_listener($event) {
        return ctx.onDateRangeChange($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "nz-table", 7)(7, "thead")(8, "tr")(9, "th");
      \u0275\u0275text(10, "T\xEAn");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "th", 8);
      \u0275\u0275text(12, "S\u1ED1 l\u01B0\u1EE3ng");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "th", 8);
      \u0275\u0275text(14, "Tr\u1EA1ng th\xE1i");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "tbody")(16, "tr")(17, "td")(18, "a", 9);
      \u0275\u0275listener("click", function DashboardComponent_Template_a_click_18_listener() {
        return ctx.openApplyAttendanceInfoListTab();
      });
      \u0275\u0275text(19, "\u0110\u01A1n ngh\u1EC9 ph\xE9p th\xE1ng n\xE0y");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "td");
      \u0275\u0275text(21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "td");
      \u0275\u0275template(23, DashboardComponent_nz_tag_23_Template, 2, 0, "nz-tag", 10)(24, DashboardComponent_nz_tag_24_Template, 2, 0, "nz-tag", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "tr")(26, "td")(27, "a", 9);
      \u0275\u0275listener("click", function DashboardComponent_Template_a_click_27_listener() {
        return ctx.openOtApplyInfoListTab();
      });
      \u0275\u0275text(28, "\u0110\u01A1n t\u0103ng ca th\xE1ng n\xE0y");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "td");
      \u0275\u0275text(30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "td");
      \u0275\u0275template(32, DashboardComponent_nz_tag_32_Template, 2, 0, "nz-tag", 10)(33, DashboardComponent_nz_tag_33_Template, 2, 0, "nz-tag", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "tr")(35, "td")(36, "a", 9);
      \u0275\u0275listener("click", function DashboardComponent_Template_a_click_36_listener() {
        return ctx.openCwaAbnormalApplyTab();
      });
      \u0275\u0275text(37, "Ngh\u1EC9 b\u1EA5t th\u01B0\u1EDDng th\xE1ng n\xE0y");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "td");
      \u0275\u0275text(39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "td");
      \u0275\u0275template(41, DashboardComponent_nz_tag_41_Template, 2, 0, "nz-tag", 12)(42, DashboardComponent_nz_tag_42_Template, 2, 0, "nz-tag", 11);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(43, "div", 13)(44, "nz-card", 14);
      \u0275\u0275element(45, "div", null, 0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "div", 15)(48, "div", 16)(49, "nz-card")(50, "h6");
      \u0275\u0275element(51, "i", 17);
      \u0275\u0275text(52, "T\u1ED5ng h\u1EE3p OT theo b\u1ED9 ph\u1EADn");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "p", 18);
      \u0275\u0275text(54, "\u0110\xE3 chuy\u1EC3n sang Angular");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "button", 19);
      \u0275\u0275listener("click", function DashboardComponent_Template_button_click_55_listener() {
        return ctx.openOtTab();
      });
      \u0275\u0275text(56, "M\u1EDF");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(57, "div", 20)(58, "div", 21);
      \u0275\u0275element(59, "img", 22);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.dateRange());
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("nzShowPagination", false);
      \u0275\u0275advance(15);
      \u0275\u0275textInterpolate(ctx.leaveCount() === null ? "-" : ctx.leaveCount() === "error" ? "?" : ctx.leaveCount());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isPositive(ctx.leaveCount()));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.leaveCount() === 0);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.otCount() === null ? "-" : ctx.otCount() === "error" ? "?" : ctx.otCount());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isPositive(ctx.otCount()));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.otCount() === 0);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.abnormalCount() === null ? "-" : ctx.abnormalCount() === "error" ? "?" : ctx.abnormalCount());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isPositive(ctx.abnormalCount()));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.abnormalCount() === 0);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, NgControlStatus, NgModel, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzAlertModule, NzAlertComponent, NzTagModule, NzTagComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzDatePickerModule, NzDatePickerComponent, NzRangePickerComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [CommonModule, FormsModule, NzTableModule, NzCardModule, NzAlertModule, NzTagModule, NzButtonModule, NzDatePickerModule], template: `<div class="py-3">
  <nz-alert nzType="info" nzMessage="Ch\xE0o m\u1EEBng \u0111\u1EBFn v\u1EDBi h\u1EC7 th\u1ED1ng HR!" class="mb-3"></nz-alert>

  <div class="row">
    <div class="col-xxl-4">
      <div class="d-flex justify-content-end mb-2">
        <nz-range-picker [ngModel]="dateRange()" (ngModelChange)="onDateRangeChange($event)"
                          nzFormat="dd/MM/yyyy"></nz-range-picker>
      </div>
      <nz-table [nzShowPagination]="false" nzSize="small">
        <thead>
          <tr>
            <th>T\xEAn</th>
            <th style="width: 20%">S\u1ED1 l\u01B0\u1EE3ng</th>
            <th style="width: 20%">Tr\u1EA1ng th\xE1i</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="javascript:void(0)" (click)="openApplyAttendanceInfoListTab()">\u0110\u01A1n ngh\u1EC9 ph\xE9p th\xE1ng n\xE0y</a></td>
            <td>{{ leaveCount() === null ? '-' : (leaveCount() === 'error' ? '?' : leaveCount()) }}</td>
            <td>
              <nz-tag *ngIf="isPositive(leaveCount())" nzColor="blue">\u0110\xE3 \u0111\u0103ng k\xFD</nz-tag>
              <nz-tag *ngIf="leaveCount() === 0" nzColor="success">\u1ED4n \u0111\u1ECBnh</nz-tag>
            </td>
          </tr>
          <tr>
            <td><a href="javascript:void(0)" (click)="openOtApplyInfoListTab()">\u0110\u01A1n t\u0103ng ca th\xE1ng n\xE0y</a></td>
            <td>{{ otCount() === null ? '-' : (otCount() === 'error' ? '?' : otCount()) }}</td>
            <td>
              <nz-tag *ngIf="isPositive(otCount())" nzColor="blue">\u0110\xE3 \u0111\u0103ng k\xFD</nz-tag>
              <nz-tag *ngIf="otCount() === 0" nzColor="success">\u1ED4n \u0111\u1ECBnh</nz-tag>
            </td>
          </tr>
          <tr>
            <td><a href="javascript:void(0)" (click)="openCwaAbnormalApplyTab()">Ngh\u1EC9 b\u1EA5t th\u01B0\u1EDDng th\xE1ng n\xE0y</a></td>
            <td>{{ abnormalCount() === null ? '-' : (abnormalCount() === 'error' ? '?' : abnormalCount()) }}</td>
            <td>
              <nz-tag *ngIf="isPositive(abnormalCount())" nzColor="warning">C\u1EA7n x\u1EED l\xFD</nz-tag>
              <nz-tag *ngIf="abnormalCount() === 0" nzColor="success">\u1ED4n \u0111\u1ECBnh</nz-tag>
            </td>
          </tr>
        </tbody>
      </nz-table>
    </div>

    <div class="col-xxl-8">
      <nz-card nzTitle="Bi\u1EC3u \u0111\u1ED3 ch\u1EA5m c\xF4ng & T\u0103ng ca" class="h-100">
        <div #chartEl></div>
      </nz-card>
    </div>
  </div>

  <div class="row g-3 mt-1">
    <div class="col-md-4">
      <nz-card>
        <h6><i class="fas fa-clock me-2"></i>T\u1ED5ng h\u1EE3p OT theo b\u1ED9 ph\u1EADn</h6>
        <p class="text-muted small">\u0110\xE3 chuy\u1EC3n sang Angular</p>
        <button nz-button nzType="primary" nzSize="small" (click)="openOtTab()">M\u1EDF</button>
      </nz-card>
    </div>
  </div>

  <div class="row mt-3">
    <div class="col-12 text-center">
      <img src="/assets/images/Cameras_BannerPC.png" alt="Banner" class="img-fluid rounded"
           style="max-width: 80%; box-shadow: 0 8px 24px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.10);">
    </div>
  </div>
</div>
` }]
  }], () => [{ type: DashboardService }, { type: TabService }], { chartEl: [{
    type: ViewChild,
    args: ["chartEl"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src/app/dashboard/dashboard.component.ts", lineNumber: 38 });
})();
export {
  DashboardComponent
};
//# debugId=2aac0328-0746-55d3-bc34-99abe5b2d305
//# sourceMappingURL=chunk-OK3HMIRT.js.map
