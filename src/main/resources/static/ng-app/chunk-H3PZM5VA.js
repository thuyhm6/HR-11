import {
  NzTagComponent,
  NzTagModule
} from "./chunk-HTQAHYN3.js";
import {
  NzMessageService
} from "./chunk-XWW7CXU6.js";
import {
  NzModalModule,
  NzModalService
} from "./chunk-OEYWCHIN.js";
import {
  NzDatePickerComponent,
  NzDatePickerModule,
  NzRangePickerComponent
} from "./chunk-TWXZW7YB.js";
import "./chunk-5TI46VEX.js";
import {
  NzInputDirective,
  NzInputModule
} from "./chunk-VO7C5C6M.js";
import {
  I18nService,
  TranslatePipe
} from "./chunk-MZSSMIRT.js";
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
import {
  NzRadioComponent,
  NzRadioGroupComponent,
  NzRadioModule
} from "./chunk-2GOAB54B.js";
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
  computed,
  formatDate,
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
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
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

// src/app/hrm-approve-apply-info/hrm-approve-apply-info.service.ts
var API_BASE = "/hrm/approve/api";
var HrmApproveApplyInfoService = class _HrmApproveApplyInfoService {
  constructor(http) {
    this.http = http;
  }
  http;
  getApplyList(params) {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      httpParams = httpParams.set(key, String(value));
    }
    return this.http.get(`${API_BASE}/applyList`, {
      params: httpParams,
      withCredentials: true
    });
  }
  getApplyDetail(applyNo, applyTableType) {
    return this.http.get(`${API_BASE}/applyDetail`, {
      params: new HttpParams().set("applyNo", applyNo).set("applyTableType", applyTableType),
      withCredentials: true
    });
  }
  approve(applyNo, applyTableType) {
    const body = new HttpParams().set("applyNo", applyNo).set("applyTableType", applyTableType);
    return this.http.post(`${API_BASE}/approve`, body, { withCredentials: true });
  }
  reject(applyNo, applyTableType) {
    const body = new HttpParams().set("applyNo", applyNo).set("applyTableType", applyTableType);
    return this.http.post(`${API_BASE}/reject`, body, { withCredentials: true });
  }
  static \u0275fac = function HrmApproveApplyInfoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HrmApproveApplyInfoService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HrmApproveApplyInfoService, factory: _HrmApproveApplyInfoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmApproveApplyInfoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/hrm-approve-apply-info/hrm-approve-apply-info.component.ts
var _c0 = () => ({ y: "calc(100vh - 320px)" });
function HrmApproveApplyInfoComponent_nz_alert_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 37);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function HrmApproveApplyInfoComponent_tr_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 38);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function HrmApproveApplyInfoComponent_tr_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 39);
    \u0275\u0275listener("click", function HrmApproveApplyInfoComponent_tr_73_Template_tr_click_0_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDetail(row_r4));
    });
    \u0275\u0275elementStart(1, "td", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 40);
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
    \u0275\u0275elementStart(13, "td", 27);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 27)(16, "nz-tag", 41);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("haai-row-active", ctx_r1.selectedRow() === row_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r1.pageIndex - 1) * ctx_r1.pageSize + i_r5 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.empCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.empName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.deptName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.typeLabel(row_r4.applyTableType));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.createDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.distinctionLabel(row_r4.applyType));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColor", ctx_r1.activityColor(row_r4.activity));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.activityLabel(row_r4.activity));
  }
}
function HrmApproveApplyInfoComponent_ng_template_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r6 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r6, " ");
  }
}
function HrmApproveApplyInfoComponent_nz_tag_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-tag", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.typeLabel(row_r7.applyTableType));
  }
}
function HrmApproveApplyInfoComponent_div_84_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 44);
    \u0275\u0275listener("click", function HrmApproveApplyInfoComponent_div_84_ng_container_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmApprove());
    });
    \u0275\u0275element(2, "i", 45);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 46);
    \u0275\u0275listener("click", function HrmApproveApplyInfoComponent_div_84_ng_container_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmReject());
    });
    \u0275\u0275element(6, "i", 47);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("nzLoading", ctx_r1.actionLoading());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 4, "hmai.btn.approve", "Ph\xEA duy\u1EC7t"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLoading", ctx_r1.actionLoading());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 7, "hmai.btn.reject", "T\u1EEB ch\u1ED1i"), " ");
  }
}
function HrmApproveApplyInfoComponent_div_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275template(1, HrmApproveApplyInfoComponent_div_84_ng_container_1_Template, 9, 10, "ng-container", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r9.activity === 1);
  }
}
function HrmApproveApplyInfoComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275element(1, "i", 49);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 1, "hmai.detail.placeholder", "Ch\u1ECDn m\u1ED9t y\xEAu c\u1EA7u \u0111\u1EC3 xem chi ti\u1EBFt"));
  }
}
function HrmApproveApplyInfoComponent_ng_container_87_nz_alert_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 53);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzMessage", ctx_r1.detailError() ?? "");
  }
}
function HrmApproveApplyInfoComponent_ng_container_87_div_2_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 66);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function HrmApproveApplyInfoComponent_ng_container_87_div_2_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 67);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 68);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r10 = ctx.$implicit;
    \u0275\u0275classProp("table-warning", r_r10.changed)("fw-semibold", r_r10.changed);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r10.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r10.newVal);
  }
}
function HrmApproveApplyInfoComponent_ng_container_87_div_2_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 66);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function HrmApproveApplyInfoComponent_ng_container_87_div_2_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 66);
    \u0275\u0275element(2, "i", 69);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(4, 1, "hmai.detail.noOriginal", "B\u1EA3n ghi m\u1EDBi (ch\u01B0a c\xF3 d\u1EEF li\u1EC7u ban \u0111\u1EA7u)"), " ");
  }
}
function HrmApproveApplyInfoComponent_ng_container_87_div_2_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 70)(1, "th", 67);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 68);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("hidden", !ctx_r1.detailOriginalData());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r11.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r11.origVal);
  }
}
function HrmApproveApplyInfoComponent_ng_container_87_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 55)(2, "div", 56)(3, "div", 57);
    \u0275\u0275element(4, "i", 58);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 24)(8, "div", 59)(9, "table", 60)(10, "tbody");
    \u0275\u0275template(11, HrmApproveApplyInfoComponent_ng_container_87_div_2_tr_11_Template, 4, 4, "tr", 28)(12, HrmApproveApplyInfoComponent_ng_container_87_div_2_tr_12_Template, 5, 6, "tr", 61);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(13, "div", 55)(14, "div", 62)(15, "div", 63);
    \u0275\u0275element(16, "i", 64);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 24)(20, "div", 59)(21, "table", 60)(22, "tbody");
    \u0275\u0275template(23, HrmApproveApplyInfoComponent_ng_container_87_div_2_tr_23_Template, 4, 4, "tr", 28)(24, HrmApproveApplyInfoComponent_ng_container_87_div_2_tr_24_Template, 5, 4, "tr", 28)(25, HrmApproveApplyInfoComponent_ng_container_87_div_2_tr_25_Template, 5, 3, "tr", 65);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(6, 7, "hmai.detail.newData", "D\u1EEF li\u1EC7u thay \u0111\u1ED5i"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !ctx_r1.detailLoading() && ctx_r1.compareRows().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.compareRows());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(18, 10, "hmai.detail.originalData", "D\u1EEF li\u1EC7u ban \u0111\u1EA7u"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.compareRows().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.compareRows().length > 0 && !ctx_r1.detailOriginalData());
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.compareRows());
  }
}
function HrmApproveApplyInfoComponent_ng_container_87_div_3_li_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 77);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "veai.msg.noFile", "Kh\xF4ng c\xF3 file \u0111\xEDnh k\xE8m"), " ");
  }
}
function HrmApproveApplyInfoComponent_ng_container_87_div_3_li_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 78);
    \u0275\u0275element(1, "i", 79);
    \u0275\u0275elementStart(2, "a", 80);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("href", "/ess/empinfo/api/files/download/" + f_r12.fileNo, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r12.fileName);
  }
}
function HrmApproveApplyInfoComponent_ng_container_87_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "h6", 72);
    \u0275\u0275element(2, "i", 73);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ul", 74);
    \u0275\u0275template(6, HrmApproveApplyInfoComponent_ng_container_87_div_3_li_6_Template, 3, 4, "li", 75)(7, HrmApproveApplyInfoComponent_ng_container_87_div_3_li_7_Template, 4, 2, "li", 76);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(4, 3, "epi.field.attachFiles", "File \u0111\xEDnh k\xE8m"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.detailLoading() && ctx_r1.detailFiles().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.detailFiles());
  }
}
function HrmApproveApplyInfoComponent_ng_container_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, HrmApproveApplyInfoComponent_ng_container_87_nz_alert_1_Template, 1, 1, "nz-alert", 50)(2, HrmApproveApplyInfoComponent_ng_container_87_div_2_Template, 26, 13, "div", 51)(3, HrmApproveApplyInfoComponent_ng_container_87_div_3_Template, 8, 6, "div", 52);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.detailError());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.detailError());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.detailError());
  }
}
var I18N_KEYS = [
  "common.time",
  "common.status",
  "common.search",
  "common.reset",
  "common.loading",
  "common.noData",
  "common.loadFail",
  "common.totalRows",
  "common.confirm",
  "hmai.filter.keyword",
  "hmai.filter.all",
  "hmai.col.empCode",
  "hmai.col.empName",
  "hmai.col.dept",
  "hmai.col.type",
  "hmai.col.applyDate",
  "hmai.col.status",
  "hmai.col.distinction",
  "hmai.col.action",
  "hmai.type.personal",
  "hmai.type.address",
  "hmai.type.family",
  "hmai.type.emergency",
  "hmai.type.workExp",
  "hmai.type.education",
  "hmai.type.qualification",
  "hmai.distinction.new",
  "hmai.distinction.update",
  "hmai.status.submitted",
  "hmai.status.approved",
  "hmai.status.rejected",
  "hmai.detail.title",
  "hmai.detail.newData",
  "hmai.detail.originalData",
  "hmai.detail.noOriginal",
  "hmai.detail.placeholder",
  "hmai.btn.approve",
  "hmai.btn.reject",
  "hmai.msg.approveConfirm",
  "hmai.msg.rejectConfirm",
  "hmai.msg.approveSuccess",
  "hmai.msg.rejectSuccess",
  "hmai.msg.actionFailed",
  "hmai.msg.loadFailed",
  "hmai.msg.onlyPending",
  "veai.msg.noFile",
  "veai.field.mobile",
  "veai.field.workPhone",
  "epi.field.fullName",
  "epi.field.gender",
  "epi.field.dob",
  "epi.field.ethnicity",
  "epi.field.nationality",
  "epi.field.maritalStatus",
  "epi.field.weddingDate",
  "epi.field.idcardNo",
  "epi.field.idcardDate",
  "epi.field.issuingAuthority",
  "epi.field.email",
  "epi.field.emailSecond",
  "epi.field.phone",
  "epi.field.companyPhone",
  "epi.field.address",
  "epi.field.houseTp",
  "epi.field.religion",
  "epi.field.politicalStatus",
  "epi.field.education",
  "epi.field.militaryService",
  "epi.field.disability",
  "epi.field.addressType",
  "epi.field.effectiveDate",
  "epi.field.relationship",
  "epi.field.familyPhone",
  "epi.field.cpnyName",
  "epi.field.department",
  "epi.field.position",
  "epi.field.startDate",
  "epi.field.endDate",
  "epi.field.resignReason",
  "epi.field.remark",
  "epi.field.attachFiles",
  "qi.field.subject",
  "qi.field.educLevel",
  "qi.field.institution",
  "qi.field.qualName",
  "qi.field.dateObtained",
  "qi.field.qualCardNo",
  "qi.field.qualInstitute",
  "qi.field.validityDate",
  "qi.field.qualLevel",
  "wi.field.companyName",
  "hrm.empinfo.educ.siteCountry"
];
var PAGE_SIZE_OPTIONS = [20, 50, 100, 200];
var TYPE_LABEL_KEYS = {
  PERSONAL: ["hmai.type.personal", "Th\xF4ng tin c\xE1 nh\xE2n"],
  ADDRESS: ["hmai.type.address", "\u0110\u1ECBa ch\u1EC9"],
  FAMILY: ["hmai.type.family", "Th\xF4ng tin gia \u0111\xECnh"],
  EMERGENCY: ["hmai.type.emergency", "Li\xEAn h\u1EC7 kh\u1EA9n c\u1EA5p"],
  WORK_EXP: ["hmai.type.workExp", "Kinh nghi\u1EC7m l\xE0m vi\u1EC7c"],
  EDUCATION: ["hmai.type.education", "H\u1ECDc v\u1EA5n"],
  QUALIFICATION: ["hmai.type.qualification", "Ch\u1EE9ng ch\u1EC9"]
};
var ACTIVITY_LABEL_KEYS = {
  1: ["hmai.status.submitted", "Ch\u1EDD duy\u1EC7t"],
  2: ["hmai.status.approved", "\u0110\xE3 duy\u1EC7t"],
  3: ["hmai.status.rejected", "\u0110\xE3 t\u1EEB ch\u1ED1i"]
};
var ACTIVITY_TAG_COLOR = { 1: "warning", 2: "success", 3: "error" };
var DISTINCTION_LABEL_KEYS = {
  1: ["hmai.distinction.new", "Th\xEAm m\u1EDBi"],
  2: ["hmai.distinction.update", "C\u1EADp nh\u1EADt"]
};
var HrmApproveApplyInfoComponent = class _HrmApproveApplyInfoComponent {
  constructor(api, i18n, message, modal) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
    this.modal = modal;
  }
  api;
  i18n;
  message;
  modal;
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
  recordsTotal = signal(
    0,
    ...ngDevMode ? [{ debugName: "recordsTotal" }] : (
      /* istanbul ignore next */
      []
    )
  );
  dateRange = null;
  activityFilter = "1";
  keyword = "";
  pageIndex = 1;
  pageSize = 50;
  selectedRow = signal(
    null,
    ...ngDevMode ? [{ debugName: "selectedRow" }] : (
      /* istanbul ignore next */
      []
    )
  );
  detailLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "detailLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  detailError = signal(
    null,
    ...ngDevMode ? [{ debugName: "detailError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  detailApplyData = signal(
    null,
    ...ngDevMode ? [{ debugName: "detailApplyData" }] : (
      /* istanbul ignore next */
      []
    )
  );
  detailOriginalData = signal(
    null,
    ...ngDevMode ? [{ debugName: "detailOriginalData" }] : (
      /* istanbul ignore next */
      []
    )
  );
  detailFiles = signal(
    [],
    ...ngDevMode ? [{ debugName: "detailFiles" }] : (
      /* istanbul ignore next */
      []
    )
  );
  actionLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "actionLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  compareRows = computed(
    () => {
      const row = this.selectedRow();
      const d = this.detailApplyData();
      if (!row || !d)
        return [];
      return this.buildCompareRows(row.applyTableType, d, this.detailOriginalData());
    },
    ...ngDevMode ? [{ debugName: "compareRows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.search();
  }
  search() {
    this.pageIndex = 1;
    this.loadPage();
  }
  reset() {
    this.dateRange = null;
    this.activityFilter = "1";
    this.keyword = "";
    this.search();
  }
  onPageIndexChange(pageIndex) {
    this.pageIndex = pageIndex;
    this.loadPage();
  }
  onPageSizeChange(pageSize) {
    this.pageSize = pageSize;
    this.pageIndex = 1;
    this.loadPage();
  }
  typeLabel(type) {
    const entry = TYPE_LABEL_KEYS[type];
    return entry ? this.i18n.t(entry[0], entry[1]) : type;
  }
  activityLabel(activity) {
    const entry = ACTIVITY_LABEL_KEYS[activity];
    return entry ? this.i18n.t(entry[0], entry[1]) : String(activity);
  }
  activityColor(activity) {
    return ACTIVITY_TAG_COLOR[activity] || "default";
  }
  distinctionLabel(applyType) {
    const entry = DISTINCTION_LABEL_KEYS[applyType];
    return entry ? this.i18n.t(entry[0], entry[1]) : "";
  }
  // ==================== Danh sách (server-side) ====================
  loadPage() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.resetDetail();
    this.api.getApplyList({
      fromDate: this.formatYmd(this.dateRange?.[0] ?? null),
      toDate: this.formatYmd(this.dateRange?.[1] ?? null),
      activitySearch: this.activityFilter,
      keyword: this.keyword.trim(),
      draw: this.pageIndex,
      start: (this.pageIndex - 1) * this.pageSize,
      length: this.pageSize
    }).subscribe({
      next: (res) => {
        if (res.error) {
          this.errorMessage.set(res.error);
          this.rows.set([]);
          this.recordsTotal.set(0);
        } else {
          this.rows.set(res.data ?? []);
          this.recordsTotal.set(res.recordsFiltered ?? 0);
        }
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("hmai.msg.loadFailed", "Kh\xF4ng th\u1EC3 t\u1EA3i d\u1EEF li\u1EC7u"));
        this.rows.set([]);
        this.recordsTotal.set(0);
        this.loading.set(false);
      }
    });
  }
  // ==================== Chi tiết (so sánh dữ liệu mới / gốc) ====================
  openDetail(row) {
    this.selectedRow.set(row);
    this.detailError.set(null);
    this.detailApplyData.set(null);
    this.detailOriginalData.set(null);
    this.detailFiles.set([]);
    this.detailLoading.set(true);
    this.api.getApplyDetail(row.applyNo, row.applyTableType).subscribe({
      next: (res) => {
        if (res.success) {
          this.detailApplyData.set(res.applyData ?? {});
          this.detailOriginalData.set(res.originalData ?? null);
          this.detailFiles.set(res.files ?? []);
        } else {
          this.detailError.set(this.i18n.t("hmai.msg.loadFailed", "Kh\xF4ng th\u1EC3 t\u1EA3i d\u1EEF li\u1EC7u"));
        }
        this.detailLoading.set(false);
      },
      error: () => {
        this.detailError.set(this.i18n.t("hmai.msg.loadFailed", "Kh\xF4ng th\u1EC3 t\u1EA3i d\u1EEF li\u1EC7u"));
        this.detailLoading.set(false);
      }
    });
  }
  resetDetail() {
    this.selectedRow.set(null);
    this.detailError.set(null);
    this.detailApplyData.set(null);
    this.detailOriginalData.set(null);
    this.detailFiles.set([]);
  }
  // ==================== Phê duyệt / Từ chối ====================
  confirmApprove() {
    const row = this.selectedRow();
    if (!row)
      return;
    if (row.activity !== 1) {
      this.message.warning(this.i18n.t("hmai.msg.onlyPending", "Ch\u1EC9 c\xF3 th\u1EC3 ph\xEA duy\u1EC7t/t\u1EEB ch\u1ED1i y\xEAu c\u1EA7u \u0111ang ch\u1EDD duy\u1EC7t"));
      return;
    }
    this.modal.confirm({
      nzTitle: this.i18n.t("common.confirm", "X\xE1c nh\u1EADn"),
      nzContent: this.i18n.t("hmai.msg.approveConfirm", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n ph\xEA duy\u1EC7t y\xEAu c\u1EA7u n\xE0y kh\xF4ng?"),
      nzOnOk: () => this.runAction("approve", row)
    });
  }
  confirmReject() {
    const row = this.selectedRow();
    if (!row)
      return;
    if (row.activity !== 1) {
      this.message.warning(this.i18n.t("hmai.msg.onlyPending", "Ch\u1EC9 c\xF3 th\u1EC3 ph\xEA duy\u1EC7t/t\u1EEB ch\u1ED1i y\xEAu c\u1EA7u \u0111ang ch\u1EDD duy\u1EC7t"));
      return;
    }
    this.modal.confirm({
      nzTitle: this.i18n.t("common.confirm", "X\xE1c nh\u1EADn"),
      nzContent: this.i18n.t("hmai.msg.rejectConfirm", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n t\u1EEB ch\u1ED1i y\xEAu c\u1EA7u n\xE0y kh\xF4ng?"),
      nzOnOk: () => this.runAction("reject", row)
    });
  }
  runAction(action, row) {
    this.actionLoading.set(true);
    const request$ = action === "approve" ? this.api.approve(row.applyNo, row.applyTableType) : this.api.reject(row.applyNo, row.applyTableType);
    request$.subscribe({
      next: (res) => {
        this.actionLoading.set(false);
        if (res.success) {
          this.message.success(action === "approve" ? this.i18n.t("hmai.msg.approveSuccess", "Ph\xEA duy\u1EC7t th\xE0nh c\xF4ng") : this.i18n.t("hmai.msg.rejectSuccess", "T\u1EEB ch\u1ED1i th\xE0nh c\xF4ng"));
          this.resetDetail();
          this.loadPage();
        } else {
          this.message.error(res.message || this.i18n.t("hmai.msg.actionFailed", "Thao t\xE1c th\u1EA5t b\u1EA1i"));
        }
      },
      error: () => {
        this.actionLoading.set(false);
        this.message.error(this.i18n.t("hmai.msg.actionFailed", "Thao t\xE1c th\u1EA5t b\u1EA1i"));
      }
    });
  }
  // ==================== Xây bảng so sánh - tương ứng hmaiBuildRows/hmaiOrigBuildRows bản gốc ====================
  buildCompareRows(type, d, o) {
    const t = (key, fallback) => this.i18n.t(key, fallback);
    const ov = o || {};
    const row = (labelKey, fallback, newVal, origVal) => {
      const nv = newVal == null ? "" : String(newVal);
      const ovv = origVal == null ? "" : String(origVal);
      return { label: t(labelKey, fallback), newVal: nv, origVal: ovv, changed: nv.trim() !== ovv.trim() };
    };
    switch (type) {
      case "PERSONAL":
        return [
          row("epi.field.gender", "Gi\u1EDBi t\xEDnh", d["sexName"], ov["sexCode"]),
          row("epi.field.dob", "Ng\xE0y sinh", d["dob"], ov["dob"]),
          row("epi.field.ethnicity", "D\xE2n t\u1ED9c", d["nationName"], ov["nationCode"]),
          row("epi.field.nationality", "Qu\u1ED1c t\u1ECBch", d["nationalityName"], ov["nationalityCode"]),
          row("epi.field.maritalStatus", "T\xECnh tr\u1EA1ng h\xF4n nh\xE2n", d["maritalStatusName"], ov["maritalStatusCode"]),
          row("epi.field.weddingDate", "Ng\xE0y k\u1EBFt h\xF4n", d["weddingDate"], ov["weddingDate"]),
          row("epi.field.idcardNo", "CMND/CCCD", d["idcardNo"], ov["idcardNo"]),
          row("epi.field.idcardDate", "Ng\xE0y c\u1EA5p CMND", d["idcardStartDate"], ov["idcardStartDate"]),
          row("epi.field.issuingAuthority", "N\u01A1i c\u1EA5p", d["issuingAuthority"], ov["issuingAuthority"]),
          row("epi.field.email", "Email c\xE1 nh\xE2n", d["email"], ov["email"]),
          row("epi.field.emailSecond", "Email th\u1EE9 2", d["emailSecond"], ov["emailSecond"]),
          row("epi.field.phone", "\u0110T di \u0111\u1ED9ng", d["cellphone"], ov["cellphone"]),
          row("epi.field.companyPhone", "\u0110T c\xF4ng ty", d["companyPhone"], ov["companyPhone"]),
          row("epi.field.address", "\u0110\u1ECBa ch\u1EC9 th\u01B0\u1EDDng tr\xFA", d["homeAddress"], ov["homeAddress"]),
          row("epi.field.houseTp", "N\u01A1i \u0111\u0103ng k\xFD h\u1ED9 kh\u1EA9u", d["regPlace"], ov["regPlace"]),
          row("epi.field.religion", "T\xF4n gi\xE1o", d["religion"], ov["religion"]),
          row("epi.field.politicalStatus", "Quan \u0111i\u1EC3m ch\xEDnh tr\u1ECB", d["politicalOutlook"], ov["politicalOutlook"]),
          row("epi.field.education", "Tr\xECnh \u0111\u1ED9 h\u1ECDc v\u1EA5n", d["finalDegreeName"], ov["finalDegreeCode"]),
          row("epi.field.militaryService", "Ngh\u0129a v\u1EE5 qu\xE2n s\u1EF1", d["armyOrNot"], ov["armyOrNot"]),
          row("epi.field.disability", "Ng\u01B0\u1EDDi khuy\u1EBFt t\u1EADt", d["obstacleOrNot"], ov["obstacleOrNot"])
        ];
      case "ADDRESS":
        return [
          row("epi.field.addressType", "Lo\u1EA1i \u0111\u1ECBa ch\u1EC9", d["addressTypeName"], ov["addressType"]),
          row("epi.field.effectiveDate", "Ng\xE0y hi\u1EC7u l\u1EF1c", d["effectiveStartDate"], ov["effectiveStartDate"]),
          row("epi.field.address", "N\u1ED9i dung \u0111\u1ECBa ch\u1EC9", d["addressContent"], ov["addressContent"]),
          row("epi.field.nationality", "Qu\u1ED1c t\u1ECBch", d["nationalityName"], ov["nationality"])
        ];
      case "FAMILY":
        return [
          row("epi.field.relationship", "Quan h\u1EC7", d["famTypeName"], ov["famTypeCode"]),
          row("epi.field.fullName", "H\u1ECD t\xEAn", d["famName"], ov["famName"]),
          row("epi.field.dob", "Ng\xE0y sinh", d["famBorndate"], ov["famBorndate"]),
          row("epi.field.idcardNo", "CMND/CCCD", d["famIdcard"], ov["famIdcard"]),
          row("epi.field.familyPhone", "\u0110i\u1EC7n tho\u1EA1i", d["famFamilyPhone"], ov["famFamilyPhone"]),
          row("epi.field.gender", "Gi\u1EDBi t\xEDnh", d["gender"], ov["gender"]),
          row("wi.field.companyName", "C\xF4ng ty", d["famCompanyName"], ov["famCompanyName"]),
          row("epi.field.address", "\u0110\u1ECBa ch\u1EC9", d["famAddress"], ov["famAddress"]),
          row("epi.field.email", "Email", d["famEmail"], ov["famEmail"]),
          row("epi.field.remark", "Ghi ch\xFA", d["note"], ov["note"])
        ];
      case "EMERGENCY":
        return [
          row("epi.field.fullName", "H\u1ECD t\xEAn", d["emerName"], ov["emerName"]),
          row("epi.field.relationship", "Lo\u1EA1i li\xEAn h\u1EC7", d["emerTypeName"], ov["emerTypeCode"]),
          row("epi.field.phone", "\u0110i\u1EC7n tho\u1EA1i", d["emerPhone"], ov["emerPhone"]),
          row("veai.field.mobile", "Di \u0111\u1ED9ng", d["emerCellphone"], ov["emerCellphone"]),
          row("veai.field.workPhone", "\u0110i\u1EC7n tho\u1EA1i c\u01A1 quan", d["emerWorkPhone"], ov["emerWorkPhone"]),
          row("epi.field.email", "Email", d["emerEmail"], ov["emerEmail"]),
          row("epi.field.address", "\u0110\u1ECBa ch\u1EC9", d["emerAddress"], ov["emerAddress"])
        ];
      case "WORK_EXP":
        return [
          row("epi.field.cpnyName", "T\xEAn c\xF4ng ty", d["cpnyName"], ov["cpnyName"]),
          row("epi.field.department", "Ph\xF2ng ban", d["deptName"], ov["deptName"]),
          row("epi.field.position", "V\u1ECB tr\xED", d["position"], ov["position"]),
          row("epi.field.startDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u", d["startDate"] || d["startMonth"], ov["startDate"]),
          row("epi.field.endDate", "Ng\xE0y k\u1EBFt th\xFAc", d["endDate"] || d["endMonth"], ov["endDate"]),
          row("epi.field.phone", "\u0110T li\xEAn h\u1EC7", d["tel"], ov["tel"]),
          row("epi.field.resignReason", "L\xFD do ngh\u1EC9", d["resignReason"], ov["resignReason"]),
          row("epi.field.remark", "Ghi ch\xFA", d["remark"], ov["remark"])
        ];
      case "EDUCATION":
        return [
          row("qi.field.subject", "Chuy\xEAn ng\xE0nh", d["subject"], ov["subject"]),
          row("qi.field.educLevel", "Tr\xECnh \u0111\u1ED9", d["degreeName"], ov["degreeCode"]),
          row("qi.field.institution", "T\xEAn tr\u01B0\u1EDDng", d["institutionName"], ov["institutionName"]),
          row("epi.field.startDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u", d["startDate"], ov["startDate"]),
          row("epi.field.endDate", "Ng\xE0y k\u1EBFt th\xFAc", d["endDate"], ov["endDate"]),
          row("hrm.empinfo.educ.siteCountry", "Qu\u1ED1c gia", d["siteCountry"], ov["siteCountry"]),
          { label: "GPA", newVal: d["gpa"] ?? "", origVal: "", changed: false },
          row("epi.field.remark", "Ghi ch\xFA", d["remarks"] || d["remark"], ov["remarks"])
        ];
      case "QUALIFICATION":
        return [
          row("qi.field.qualName", "T\xEAn ch\u1EE9ng ch\u1EC9", d["qualName"], ov["qualName"]),
          row("qi.field.dateObtained", "Ng\xE0y c\u1EA5p", d["dateObtained"], ov["dateObtained"]),
          row("qi.field.qualCardNo", "S\u1ED1 ch\u1EE9ng ch\u1EC9", d["qualCardNo"], ov["qualCardNo"]),
          row("qi.field.qualInstitute", "N\u01A1i c\u1EA5p", d["qualInstitute"], ov["qualInstitute"]),
          row("qi.field.validityDate", "Ng\xE0y h\u1EBFt h\u1EA1n", d["validityDate"], ov["validityDate"]),
          row("qi.field.qualLevel", "C\u1EA5p \u0111\u1ED9", d["qualLevel"], ov["qualLevel"]),
          row("epi.field.remark", "Ghi ch\xFA", d["qualRemark"], ov["qualRemark"])
        ];
      default:
        return [];
    }
  }
  formatYmd(d) {
    return d ? formatDate(d, "yyyy-MM-dd", "vi") : "";
  }
  static \u0275fac = function HrmApproveApplyInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HrmApproveApplyInfoComponent)(\u0275\u0275directiveInject(HrmApproveApplyInfoService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService), \u0275\u0275directiveInject(NzModalService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HrmApproveApplyInfoComponent, selectors: [["app-hrm-approve-apply-info"]], decls: 88, vars: 92, consts: [["haaiTotalTpl", ""], [1, "card", "mb-3"], [1, "card-body", "py-2"], [1, "row", "g-2", "align-items-end", 3, "ngSubmit"], [1, "col-auto", "d-flex", "align-items-center", "gap-2", "flex-wrap"], [1, "form-label", "mb-0", "fw-semibold"], ["name", "haaiDateRange", "nzFormat", "dd/MM/yyyy", 3, "ngModelChange", "ngModel"], [1, "col-auto", "d-flex", "align-items-center", "gap-3"], ["name", "haaiActivityFilter", 3, "ngModelChange", "ngModel"], ["nz-radio-button", "", "nzValue", ""], ["nz-radio-button", "", "nzValue", "1"], ["nz-radio-button", "", "nzValue", "2"], ["nz-radio-button", "", "nzValue", "3"], [1, "col-auto", "d-flex", "align-items-center", "gap-2"], ["nz-input", "", "name", "haaiKeyword", 2, "width", "200px", 3, "ngModelChange", "ngModel", "placeholder"], [1, "col-auto", "ms-auto"], ["nz-button", "", "nzType", "primary", "nzSize", "small", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "nzSize", "small", "type", "button", 1, "ms-1", 3, "click"], [1, "bx", "bx-x"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [1, "row", "g-3"], [1, "col-xl-5", "col-lg-6"], [1, "card", "h-100"], [1, "card-body", "p-0"], ["nzShowSizeChanger", "", "nzSize", "small", 3, "nzPageIndexChange", "nzPageSizeChange", "nzData", "nzFrontPagination", "nzLoading", "nzTotal", "nzPageIndex", "nzPageSize", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "50px", 1, "text-center"], [1, "text-center"], [4, "ngIf"], ["class", "haai-row-clickable", 3, "haai-row-active", "click", 4, "ngFor", "ngForOf"], [1, "col-xl-7", "col-lg-6"], [1, "card-header", "py-2", "d-flex", "align-items-center", "gap-2", "flex-wrap"], [1, "bx", "bx-info-circle", "text-primary"], ["class", "ms-2", 4, "ngIf"], ["class", "ms-auto d-flex gap-2", 4, "ngIf"], [1, "card-body", 2, "min-height", "300px", "overflow-y", "auto", "max-height", "calc(100vh - 280px)"], ["class", "text-center text-muted py-5", 4, "ngIf"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "8", 1, "text-center", "text-muted"], [1, "haai-row-clickable", 3, "click"], [1, "text-center", "text-nowrap"], [3, "nzColor"], [1, "ms-2"], [1, "ms-auto", "d-flex", "gap-2"], ["nz-button", "", "nzType", "primary", "nzSize", "small", 3, "click", "nzLoading"], [1, "bx", "bx-check-circle"], ["nz-button", "", "nzDanger", "", "nzSize", "small", 3, "click", "nzLoading"], [1, "bx", "bx-x-circle"], [1, "text-center", "text-muted", "py-5"], [1, "bx", "bx-select-multiple", "fs-1", "d-block", "mb-2"], ["nzType", "error", "class", "mb-2", 3, "nzMessage", 4, "ngIf"], ["class", "row g-2", 4, "ngIf"], ["class", "mt-3", 4, "ngIf"], ["nzType", "error", 1, "mb-2", 3, "nzMessage"], [1, "row", "g-2"], [1, "col-md-6"], [1, "card", "border-primary"], [1, "card-header", "py-1", "bg-primary", "bg-opacity-10", "text-primary", "fw-semibold", "small"], [1, "bx", "bx-edit-alt", "me-1"], [1, "table-responsive"], [1, "table", "table-bordered", "table-sm", "mb-0"], [3, "table-warning", "fw-semibold", 4, "ngFor", "ngForOf"], [1, "card", "border-secondary"], [1, "card-header", "py-1", "bg-secondary", "bg-opacity-10", "text-secondary", "fw-semibold", "small"], [1, "bx", "bx-history", "me-1"], [3, "hidden", 4, "ngFor", "ngForOf"], [1, "text-center", "text-muted", "small", "py-3"], [1, "table-light", "text-nowrap", "small", 2, "width", "40%"], [1, "small"], [1, "bx", "bx-info-circle", "me-1"], [3, "hidden"], [1, "mt-3"], [1, "fw-bold", "text-secondary", "border-bottom", "pb-1"], [1, "bx", "bx-paperclip", "me-1"], [1, "list-group", "list-group-flush"], ["class", "list-group-item text-muted small", 4, "ngIf"], ["class", "list-group-item py-1 px-2 d-flex align-items-center gap-2", 4, "ngFor", "ngForOf"], [1, "list-group-item", "text-muted", "small"], [1, "list-group-item", "py-1", "px-2", "d-flex", "align-items-center", "gap-2"], [1, "bx", "bx-file", "text-primary"], ["target", "_blank", 1, "text-truncate", 3, "href"]], template: function HrmApproveApplyInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "form", 3);
      \u0275\u0275listener("ngSubmit", function HrmApproveApplyInfoComponent_Template_form_ngSubmit_2_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(3, "div", 4)(4, "label", 5);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "nz-range-picker", 6);
      \u0275\u0275twoWayListener("ngModelChange", function HrmApproveApplyInfoComponent_Template_nz_range_picker_ngModelChange_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.dateRange, $event) || (ctx.dateRange = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 7)(9, "label", 5);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "nz-radio-group", 8);
      \u0275\u0275twoWayListener("ngModelChange", function HrmApproveApplyInfoComponent_Template_nz_radio_group_ngModelChange_12_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.activityFilter, $event) || (ctx.activityFilter = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(13, "label", 9);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "label", 10);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "label", 11);
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "label", 12);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 13)(26, "label", 5);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "input", 14);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function HrmApproveApplyInfoComponent_Template_input_ngModelChange_29_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.keyword, $event) || (ctx.keyword = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 15)(32, "button", 16);
      \u0275\u0275element(33, "i", 17);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "button", 18);
      \u0275\u0275listener("click", function HrmApproveApplyInfoComponent_Template_button_click_36_listener() {
        return ctx.reset();
      });
      \u0275\u0275element(37, "i", 19);
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(40, HrmApproveApplyInfoComponent_nz_alert_40_Template, 1, 1, "nz-alert", 20);
      \u0275\u0275elementStart(41, "div", 21)(42, "div", 22)(43, "div", 23)(44, "div", 24)(45, "nz-table", 25);
      \u0275\u0275listener("nzPageIndexChange", function HrmApproveApplyInfoComponent_Template_nz_table_nzPageIndexChange_45_listener($event) {
        return ctx.onPageIndexChange($event);
      })("nzPageSizeChange", function HrmApproveApplyInfoComponent_Template_nz_table_nzPageSizeChange_45_listener($event) {
        return ctx.onPageSizeChange($event);
      });
      \u0275\u0275elementStart(46, "thead")(47, "tr")(48, "th", 26);
      \u0275\u0275text(49, "No.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "th");
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "th");
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "th");
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "th");
      \u0275\u0275text(60);
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "th", 27);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "th", 27);
      \u0275\u0275text(66);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "th", 27);
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(71, "tbody");
      \u0275\u0275template(72, HrmApproveApplyInfoComponent_tr_72_Template, 4, 4, "tr", 28)(73, HrmApproveApplyInfoComponent_tr_73_Template, 18, 11, "tr", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275template(74, HrmApproveApplyInfoComponent_ng_template_74_Template, 2, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(76, "div", 30)(77, "div", 23)(78, "div", 31);
      \u0275\u0275element(79, "i", 32);
      \u0275\u0275elementStart(80, "strong");
      \u0275\u0275text(81);
      \u0275\u0275pipe(82, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(83, HrmApproveApplyInfoComponent_nz_tag_83_Template, 2, 1, "nz-tag", 33)(84, HrmApproveApplyInfoComponent_div_84_Template, 2, 1, "div", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "div", 35);
      \u0275\u0275template(86, HrmApproveApplyInfoComponent_div_86_Template, 5, 4, "div", 36)(87, HrmApproveApplyInfoComponent_ng_container_87_Template, 4, 3, "ng-container", 28);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const haaiTotalTpl_r13 = \u0275\u0275reference(75);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 37, "common.time", "Th\u1EDDi gian"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.dateRange);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 40, "common.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.activityFilter);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 43, "hmai.filter.all", "T\u1EA5t c\u1EA3"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 46, "hmai.status.submitted", "Ch\u1EDD duy\u1EC7t"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 49, "hmai.status.approved", "\u0110\xE3 duy\u1EC7t"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 52, "hmai.status.rejected", "\u0110\xE3 t\u1EEB ch\u1ED1i"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 55, "hmai.filter.keyword", "M\xE3 NV / T\xEAn NV"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.keyword);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(30, 58, "hmai.filter.keyword", "M\xE3 NV / T\xEAn NV"));
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(35, 61, "common.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(39, 64, "common.reset", "\u0110\u1EB7t l\u1EA1i"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance(5);
      \u0275\u0275property("nzData", ctx.rows())("nzFrontPagination", false)("nzLoading", ctx.loading())("nzTotal", ctx.recordsTotal())("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", haaiTotalTpl_r13)("nzScroll", \u0275\u0275pureFunction0(91, _c0));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(52, 67, "hmai.col.empCode", "M\xE3 NV"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(55, 70, "hmai.col.empName", "T\xEAn nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(58, 73, "hmai.col.dept", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(61, 76, "hmai.col.type", "Lo\u1EA1i thay \u0111\u1ED5i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(64, 79, "hmai.col.applyDate", "Ng\xE0y n\u1ED9p"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(67, 82, "hmai.col.distinction", "Lo\u1EA1i \xE1p d\u1EE5ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(70, 85, "hmai.col.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.rows());
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(82, 88, "hmai.detail.title", "Chi ti\u1EBFt y\xEAu c\u1EA7u thay \u0111\u1ED5i"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.selectedRow());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedRow());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.selectedRow());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedRow());
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
    NzTableModule,
    NzTableComponent,
    NzTableCellDirective,
    NzThMeasureDirective,
    NzTheadComponent,
    NzTbodyComponent,
    NzTrDirective,
    NzInputModule,
    NzInputDirective,
    NzButtonModule,
    NzButtonComponent,
    NzTransitionPatchDirective,
    NzWaveDirective,
    NzDatePickerModule,
    NzDatePickerComponent,
    NzRangePickerComponent,
    NzRadioModule,
    NzRadioComponent,
    NzRadioGroupComponent,
    NzTagModule,
    NzTagComponent,
    NzAlertModule,
    NzAlertComponent,
    NzModalModule,
    TranslatePipe
  ], styles: ["\n.haai-row-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.haai-row-clickable[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.haai-row-active[_ngcontent-%COMP%] {\n  background: #e6f4ff;\n}\n/*# sourceMappingURL=hrm-approve-apply-info.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HrmApproveApplyInfoComponent, [{
    type: Component,
    args: [{ selector: "app-hrm-approve-apply-info", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzInputModule,
      NzButtonModule,
      NzDatePickerModule,
      NzRadioModule,
      NzTagModule,
      NzAlertModule,
      NzModalModule,
      TranslatePipe
    ], template: `<!-- ===== Thanh t\xECm ki\u1EBFm ===== -->
<div class="card mb-3">
  <div class="card-body py-2">
    <form class="row g-2 align-items-end" (ngSubmit)="search()">
      <div class="col-auto d-flex align-items-center gap-2 flex-wrap">
        <label class="form-label mb-0 fw-semibold">{{ 'common.time' | translate:'Th\u1EDDi gian' }}</label>
        <nz-range-picker [(ngModel)]="dateRange" name="haaiDateRange" nzFormat="dd/MM/yyyy"></nz-range-picker>
      </div>
      <div class="col-auto d-flex align-items-center gap-3">
        <label class="form-label mb-0 fw-semibold">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</label>
        <nz-radio-group [(ngModel)]="activityFilter" name="haaiActivityFilter">
          <label nz-radio-button nzValue="">{{ 'hmai.filter.all' | translate:'T\u1EA5t c\u1EA3' }}</label>
          <label nz-radio-button nzValue="1">{{ 'hmai.status.submitted' | translate:'Ch\u1EDD duy\u1EC7t' }}</label>
          <label nz-radio-button nzValue="2">{{ 'hmai.status.approved' | translate:'\u0110\xE3 duy\u1EC7t' }}</label>
          <label nz-radio-button nzValue="3">{{ 'hmai.status.rejected' | translate:'\u0110\xE3 t\u1EEB ch\u1ED1i' }}</label>
        </nz-radio-group>
      </div>
      <div class="col-auto d-flex align-items-center gap-2">
        <label class="form-label mb-0 fw-semibold">{{ 'hmai.filter.keyword' | translate:'M\xE3 NV / T\xEAn NV' }}</label>
        <input nz-input [(ngModel)]="keyword" name="haaiKeyword" style="width:200px;"
               [placeholder]="'hmai.filter.keyword' | translate:'M\xE3 NV / T\xEAn NV'">
      </div>
      <div class="col-auto ms-auto">
        <button nz-button nzType="primary" nzSize="small" type="submit">
          <i class="bx bx-search"></i> {{ 'common.search' | translate:'Tra c\u1EE9u' }}
        </button>
        <button nz-button nzSize="small" type="button" class="ms-1" (click)="reset()">
          <i class="bx bx-x"></i> {{ 'common.reset' | translate:'\u0110\u1EB7t l\u1EA1i' }}
        </button>
      </div>
    </form>
  </div>
</div>

<nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

<!-- ===== Split panel: Danh s\xE1ch | Chi ti\u1EBFt ===== -->
<div class="row g-3">

  <!-- == C\u1ED8T TR\xC1I: Danh s\xE1ch (server-side) == -->
  <div class="col-xl-5 col-lg-6">
    <div class="card h-100">
      <div class="card-body p-0">
        <nz-table [nzData]="rows()" [nzFrontPagination]="false" [nzLoading]="loading()"
                  [nzTotal]="recordsTotal()" [nzPageIndex]="pageIndex" [nzPageSize]="pageSize"
                  [nzPageSizeOptions]="pageSizeOptions" nzShowSizeChanger [nzShowTotal]="haaiTotalTpl"
                  (nzPageIndexChange)="onPageIndexChange($event)" (nzPageSizeChange)="onPageSizeChange($event)"
                  nzSize="small" [nzScroll]="{ y: 'calc(100vh - 320px)' }">
          <thead>
            <tr>
              <th class="text-center" nzWidth="50px">No.</th>
              <th>{{ 'hmai.col.empCode' | translate:'M\xE3 NV' }}</th>
              <th>{{ 'hmai.col.empName' | translate:'T\xEAn nh\xE2n vi\xEAn' }}</th>
              <th>{{ 'hmai.col.dept' | translate:'Ph\xF2ng ban' }}</th>
              <th>{{ 'hmai.col.type' | translate:'Lo\u1EA1i thay \u0111\u1ED5i' }}</th>
              <th class="text-center">{{ 'hmai.col.applyDate' | translate:'Ng\xE0y n\u1ED9p' }}</th>
              <th class="text-center">{{ 'hmai.col.distinction' | translate:'Lo\u1EA1i \xE1p d\u1EE5ng' }}</th>
              <th class="text-center">{{ 'hmai.col.status' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="!loading() && rows().length === 0">
              <td colspan="8" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
            </tr>
            <tr *ngFor="let row of rows(); let i = index" class="haai-row-clickable"
                [class.haai-row-active]="selectedRow() === row" (click)="openDetail(row)">
              <td class="text-center">{{ (pageIndex - 1) * pageSize + i + 1 }}</td>
              <td class="text-center text-nowrap">{{ row.empCode }}</td>
              <td>{{ row.empName }}</td>
              <td>{{ row.deptName }}</td>
              <td>{{ typeLabel(row.applyTableType) }}</td>
              <td class="text-center text-nowrap">{{ row.createDate }}</td>
              <td class="text-center">{{ distinctionLabel(row.applyType) }}</td>
              <td class="text-center"><nz-tag [nzColor]="activityColor(row.activity)">{{ activityLabel(row.activity) }}</nz-tag></td>
            </tr>
          </tbody>
          <ng-template #haaiTotalTpl let-total>
            {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
          </ng-template>
        </nz-table>
      </div>
    </div>
  </div>

  <!-- == C\u1ED8T PH\u1EA2I: Chi ti\u1EBFt so s\xE1nh == -->
  <div class="col-xl-7 col-lg-6">
    <div class="card h-100">
      <div class="card-header py-2 d-flex align-items-center gap-2 flex-wrap">
        <i class="bx bx-info-circle text-primary"></i>
        <strong>{{ 'hmai.detail.title' | translate:'Chi ti\u1EBFt y\xEAu c\u1EA7u thay \u0111\u1ED5i' }}</strong>
        <nz-tag *ngIf="selectedRow() as row" class="ms-2">{{ typeLabel(row.applyTableType) }}</nz-tag>
        <div class="ms-auto d-flex gap-2" *ngIf="selectedRow() as row">
          <ng-container *ngIf="row.activity === 1">
            <button nz-button nzType="primary" nzSize="small" [nzLoading]="actionLoading()" (click)="confirmApprove()">
              <i class="bx bx-check-circle"></i> {{ 'hmai.btn.approve' | translate:'Ph\xEA duy\u1EC7t' }}
            </button>
            <button nz-button nzDanger nzSize="small" [nzLoading]="actionLoading()" (click)="confirmReject()">
              <i class="bx bx-x-circle"></i> {{ 'hmai.btn.reject' | translate:'T\u1EEB ch\u1ED1i' }}
            </button>
          </ng-container>
        </div>
      </div>
      <div class="card-body" style="min-height:300px; overflow-y:auto; max-height:calc(100vh - 280px);">
        <div class="text-center text-muted py-5" *ngIf="!selectedRow()">
          <i class="bx bx-select-multiple fs-1 d-block mb-2"></i>
          <span>{{ 'hmai.detail.placeholder' | translate:'Ch\u1ECDn m\u1ED9t y\xEAu c\u1EA7u \u0111\u1EC3 xem chi ti\u1EBFt' }}</span>
        </div>

        <ng-container *ngIf="selectedRow()">
          <nz-alert *ngIf="detailError()" nzType="error" [nzMessage]="detailError() ?? ''" class="mb-2"></nz-alert>

          <div class="row g-2" *ngIf="!detailError()">
            <!-- D\u1EEF li\u1EC7u thay \u0111\u1ED5i (m\u1EDBi) -->
            <div class="col-md-6">
              <div class="card border-primary">
                <div class="card-header py-1 bg-primary bg-opacity-10 text-primary fw-semibold small">
                  <i class="bx bx-edit-alt me-1"></i>{{ 'hmai.detail.newData' | translate:'D\u1EEF li\u1EC7u thay \u0111\u1ED5i' }}
                </div>
                <div class="card-body p-0">
                  <div class="table-responsive">
                    <table class="table table-bordered table-sm mb-0">
                      <tbody>
                        <tr *ngIf="!detailLoading() && compareRows().length === 0">
                          <td class="text-center text-muted small py-3">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
                        </tr>
                        <tr *ngFor="let r of compareRows()" [class.table-warning]="r.changed" [class.fw-semibold]="r.changed">
                          <th class="table-light text-nowrap small" style="width:40%;">{{ r.label }}</th>
                          <td class="small">{{ r.newVal }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <!-- D\u1EEF li\u1EC7u ban \u0111\u1EA7u (g\u1ED1c) -->
            <div class="col-md-6">
              <div class="card border-secondary">
                <div class="card-header py-1 bg-secondary bg-opacity-10 text-secondary fw-semibold small">
                  <i class="bx bx-history me-1"></i>{{ 'hmai.detail.originalData' | translate:'D\u1EEF li\u1EC7u ban \u0111\u1EA7u' }}
                </div>
                <div class="card-body p-0">
                  <div class="table-responsive">
                    <table class="table table-bordered table-sm mb-0">
                      <tbody>
                        <tr *ngIf="compareRows().length === 0">
                          <td class="text-center text-muted small py-3">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
                        </tr>
                        <tr *ngIf="compareRows().length > 0 && !detailOriginalData()">
                          <td class="text-center text-muted small py-3">
                            <i class="bx bx-info-circle me-1"></i>{{ 'hmai.detail.noOriginal' | translate:'B\u1EA3n ghi m\u1EDBi (ch\u01B0a c\xF3 d\u1EEF li\u1EC7u ban \u0111\u1EA7u)' }}
                          </td>
                        </tr>
                        <tr *ngFor="let r of compareRows()" [hidden]="!detailOriginalData()">
                          <th class="table-light text-nowrap small" style="width:40%;">{{ r.label }}</th>
                          <td class="small">{{ r.origVal }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- File \u0111\xEDnh k\xE8m -->
          <div class="mt-3" *ngIf="!detailError()">
            <h6 class="fw-bold text-secondary border-bottom pb-1">
              <i class="bx bx-paperclip me-1"></i>{{ 'epi.field.attachFiles' | translate:'File \u0111\xEDnh k\xE8m' }}
            </h6>
            <ul class="list-group list-group-flush">
              <li class="list-group-item text-muted small" *ngIf="!detailLoading() && detailFiles().length === 0">
                {{ 'veai.msg.noFile' | translate:'Kh\xF4ng c\xF3 file \u0111\xEDnh k\xE8m' }}
              </li>
              <li class="list-group-item py-1 px-2 d-flex align-items-center gap-2" *ngFor="let f of detailFiles()">
                <i class="bx bx-file text-primary"></i>
                <a [href]="'/ess/empinfo/api/files/download/' + f.fileNo" target="_blank" class="text-truncate">{{ f.fileName }}</a>
              </li>
            </ul>
          </div>
        </ng-container>
      </div>
    </div>
  </div>
</div>
`, styles: ["/* src/app/hrm-approve-apply-info/hrm-approve-apply-info.component.css */\n.haai-row-clickable {\n  cursor: pointer;\n}\n.haai-row-clickable:hover {\n  background: #fafafa;\n}\n.haai-row-active {\n  background: #e6f4ff;\n}\n/*# sourceMappingURL=hrm-approve-apply-info.component.css.map */\n"] }]
  }], () => [{ type: HrmApproveApplyInfoService }, { type: I18nService }, { type: NzMessageService }, { type: NzModalService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HrmApproveApplyInfoComponent, { className: "HrmApproveApplyInfoComponent", filePath: "src/app/hrm-approve-apply-info/hrm-approve-apply-info.component.ts", lineNumber: 106 });
})();
export {
  HrmApproveApplyInfoComponent
};
//# debugId=c7b1e7e4-3686-586d-8628-c02bbbd7b410
//# sourceMappingURL=chunk-H3PZM5VA.js.map
