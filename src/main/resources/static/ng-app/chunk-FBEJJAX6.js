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
import "./chunk-2QLZSMGV.js";
import {
  NzAlertComponent,
  NzAlertModule
} from "./chunk-BYJYXGGS.js";
import "./chunk-2GOAB54B.js";
import "./chunk-TNYKEBYQ.js";
import {
  CommonModule,
  Component,
  HttpClient,
  Injectable,
  NgForOf,
  NgIf,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-VTW5U2M5.js";

// src/app/evs-result-emp/evs-result-emp.service.ts
var API_BASE = "/evs/manage/api/evsResultEmp";
var EvsResultEmpService = class _EvsResultEmpService {
  constructor(http) {
    this.http = http;
  }
  http;
  getList() {
    return this.http.get(`${API_BASE}/list`, { withCredentials: true });
  }
  static \u0275fac = function EvsResultEmpService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EvsResultEmpService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EvsResultEmpService, factory: _EvsResultEmpService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EvsResultEmpService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/evs-result-emp/evs-result-emp.component.ts
function EvsResultEmpComponent_nz_alert_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r0.errorMessage() ?? "");
  }
}
function EvsResultEmpComponent_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "evs.viewEvsResultEmp.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function EvsResultEmpComponent_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 7);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r3 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2.evsYear);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2.evsPerformance);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2.evsAbility);
  }
}
var I18N_KEYS = [
  "evs.viewEvsResultEmp.PINGJIAJIEGUOLVLI.a",
  "evs.viewEvsResultEmp.evalYear",
  "evs.viewEvsResultEmp.performance",
  "evs.viewEvsResultEmp.ability",
  "evs.viewEvsResultEmp.noData",
  "common.stt",
  "common.loadFail"
];
var EvsResultEmpComponent = class _EvsResultEmpComponent {
  constructor(api, i18n) {
    this.api = api;
    this.i18n = i18n;
  }
  api;
  i18n;
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
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadData();
  }
  loadData() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getList().subscribe({
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
  static \u0275fac = function EvsResultEmpComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EvsResultEmpComponent)(\u0275\u0275directiveInject(EvsResultEmpService), \u0275\u0275directiveInject(I18nService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EvsResultEmpComponent, selectors: [["app-evs-result-emp"]], decls: 24, vars: 26, consts: [["ereTable", ""], [1, "row"], [1, "col-12"], [3, "nzTitle"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], ["nzSize", "small", 3, "nzData", "nzLoading", "nzShowPagination"], [1, "text-center", 2, "width", "60px"], [1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "4", 1, "text-center", "text-muted"]], template: function EvsResultEmpComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "nz-card", 3);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275template(4, EvsResultEmpComponent_nz_alert_4_Template, 1, 1, "nz-alert", 4);
      \u0275\u0275elementStart(5, "nz-table", 5, 0)(7, "thead")(8, "tr")(9, "th", 6);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "th", 7);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "th", 7);
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "th", 7);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "tbody");
      \u0275\u0275template(22, EvsResultEmpComponent_tr_22_Template, 4, 4, "tr", 8)(23, EvsResultEmpComponent_tr_23_Template, 9, 4, "tr", 9);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      const ereTable_r4 = \u0275\u0275reference(6);
      \u0275\u0275advance(2);
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(3, 11, "evs.viewEvsResultEmp.PINGJIAJIEGUOLVLI.a", "L\u1ECBch s\u1EED k\u1EBFt qu\u1EA3 \u0111\xE1nh gi\xE1"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzShowPagination", false);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 14, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 17, "evs.viewEvsResultEmp.evalYear", "N\u0103m \u0111\xE1nh gi\xE1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 20, "evs.viewEvsResultEmp.performance", "Th\xE0nh t\xEDch"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 23, "evs.viewEvsResultEmp.ability", "N\u0103ng l\u1EF1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ereTable_r4.data.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ereTable_r4.data);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzAlertModule, NzAlertComponent, TranslatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EvsResultEmpComponent, [{
    type: Component,
    args: [{ selector: "app-evs-result-emp", standalone: true, imports: [CommonModule, NzTableModule, NzCardModule, NzAlertModule, TranslatePipe], template: `<div class="row">
  <div class="col-12">
    <nz-card [nzTitle]="'evs.viewEvsResultEmp.PINGJIAJIEGUOLVLI.a' | translate:'L\u1ECBch s\u1EED k\u1EBFt qu\u1EA3 \u0111\xE1nh gi\xE1'">
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzShowPagination]="false" nzSize="small" #ereTable>
        <thead>
          <tr>
            <th class="text-center" style="width:60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th class="text-center">{{ 'evs.viewEvsResultEmp.evalYear' | translate:'N\u0103m \u0111\xE1nh gi\xE1' }}</th>
            <th class="text-center">{{ 'evs.viewEvsResultEmp.performance' | translate:'Th\xE0nh t\xEDch' }}</th>
            <th class="text-center">{{ 'evs.viewEvsResultEmp.ability' | translate:'N\u0103ng l\u1EF1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && ereTable.data.length === 0">
            <td colspan="4" class="text-center text-muted">{{ 'evs.viewEvsResultEmp.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of ereTable.data; let i = index">
            <td class="text-center">{{ i + 1 }}</td>
            <td class="text-center">{{ row.evsYear }}</td>
            <td class="text-center">{{ row.evsPerformance }}</td>
            <td class="text-center">{{ row.evsAbility }}</td>
          </tr>
        </tbody>
      </nz-table>
    </nz-card>
  </div>
</div>
` }]
  }], () => [{ type: EvsResultEmpService }, { type: I18nService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EvsResultEmpComponent, { className: "EvsResultEmpComponent", filePath: "src/app/evs-result-emp/evs-result-emp.component.ts", lineNumber: 34 });
})();
export {
  EvsResultEmpComponent
};
//# debugId=5d854c73-3986-55b4-a3f6-138df65a9eea
//# sourceMappingURL=chunk-FBEJJAX6.js.map
