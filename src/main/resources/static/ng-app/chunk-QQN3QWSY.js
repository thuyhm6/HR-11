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
  NzDatePickerComponent,
  NzDatePickerModule
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
import {
  ActivatedRoute
} from "./chunk-2GOAB54B.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
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
  formatDate,
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

// src/app/evs-resume-list/evs-resume-list.service.ts
var API_BASE = "/evs/manage/api";
var EvsResumeListService = class _EvsResumeListService {
  constructor(http) {
    this.http = http;
  }
  http;
  getList(evsType, yearSearch, cycleSearch) {
    let params = new HttpParams().set("evsType", evsType);
    if (yearSearch)
      params = params.set("yearSearch", yearSearch);
    if (cycleSearch)
      params = params.set("cycleSearch", cycleSearch);
    return this.http.get(`${API_BASE}/resume/list`, { params, withCredentials: true });
  }
  getOne(seq) {
    return this.http.get(`${API_BASE}/resume/${encodeURIComponent(seq)}`, { withCredentials: true });
  }
  /** Danh sách đợt đánh giá để chọn "Sao chép đối tượng" khi thêm mới/sửa. */
  getCopyOptions(evsType) {
    return this.http.get(`${API_BASE}/resume/evsResumeList`, {
      params: new HttpParams().set("evsType", evsType),
      withCredentials: true
    });
  }
  save(payload) {
    return this.http.post(`${API_BASE}/resume/save`, payload, { withCredentials: true });
  }
  delete(seq, evsType) {
    return this.http.post(`${API_BASE}/resume/delete`, { seq, evsType }, { withCredentials: true });
  }
  /** Combo mã hệ thống dùng chung (Chu kỳ=14015038, Số lần đánh giá=14015060, Tháng đánh giá=mã chu kỳ
   *  đã chọn - cascading, xem reloadCodeSelect ở layout/master.html bản Thymeleaf gốc). */
  getCodeList(parentCodeNo) {
    return this.http.get("/sys/api/getCode/list", {
      params: new HttpParams().set("parentCodeNo", parentCodeNo),
      withCredentials: true
    });
  }
  static \u0275fac = function EvsResumeListService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EvsResumeListService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EvsResumeListService, factory: _EvsResumeListService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EvsResumeListService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/evs-resume-list/evs-resume-list.component.ts
var _c0 = () => ({ x: "1300px" });
function EvsResumeListComponent_nz_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 35);
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r2.codeNo)("nzLabel", c_r2.codeName);
  }
}
function EvsResumeListComponent_nz_alert_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 36);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r2.errorMessage() ?? "");
  }
}
function EvsResumeListComponent_tr_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 37);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function EvsResumeListComponent_tr_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 38);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 38);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 38);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 38);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 38);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 38);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 38)(18, "nz-tag", 39);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td", 38)(21, "button", 40);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275listener("click", function EvsResumeListComponent_tr_71_Template_button_click_21_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openEditModal(row_r5));
    });
    \u0275\u0275element(23, "i", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 40);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275listener("click", function EvsResumeListComponent_tr_71_Template_button_click_24_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openDeleteConfirm(row_r5));
    });
    \u0275\u0275element(26, "i", 42);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r6 + 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r5.resumeName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.resumeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.evsCycleName || row_r5.evsCycle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.evsYear);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.evsMonthName || row_r5.evsMonth);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.standardDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.evsStartDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.evsEndDate);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColor", ctx_r2.activityTagColor(row_r5.activity));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.activityName || row_r5.activity);
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(22, 13, "common.edit", "S\u1EEDa"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(25, 16, "common.delete", "X\xF3a"));
  }
}
function EvsResumeListComponent_ng_template_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r7 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r7, " ");
  }
}
function EvsResumeListComponent_ng_container_77_nz_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 35);
  }
  if (rf & 2) {
    const c_r9 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r9.codeNo)("nzLabel", c_r9.codeName);
  }
}
function EvsResumeListComponent_ng_container_77_nz_option_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 35);
  }
  if (rf & 2) {
    const m_r10 = ctx.$implicit;
    \u0275\u0275property("nzValue", m_r10.codeNo)("nzLabel", m_r10.codeName);
  }
}
function EvsResumeListComponent_ng_container_77_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "label", 49);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 60);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "evs.manage.viewResumeList.field.activityStatus", "Tr\u1EA1ng th\xE1i th\u1EF1c hi\u1EC7n"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.form.activityName);
  }
}
function EvsResumeListComponent_ng_container_77_nz_option_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 35);
  }
  if (rf & 2) {
    const l_r11 = ctx.$implicit;
    \u0275\u0275property("nzValue", l_r11.codeNo)("nzLabel", l_r11.codeName);
  }
}
function EvsResumeListComponent_ng_container_77_nz_option_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 35);
  }
  if (rf & 2) {
    const o_r12 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r12.seq)("nzLabel", o_r12.resumeName + (o_r12.evsYear ? " (" + o_r12.evsYear + ")" : ""));
  }
}
function EvsResumeListComponent_ng_container_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 43)(2, "div", 3)(3, "label", 44);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span", 45);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "input", 46);
    \u0275\u0275twoWayListener("ngModelChange", function EvsResumeListComponent_ng_container_77_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.resumeName, $event) || (ctx_r2.form.resumeName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 3)(10, "label", 44);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "textarea", 47);
    \u0275\u0275twoWayListener("ngModelChange", function EvsResumeListComponent_ng_container_77_Template_textarea_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.remark, $event) || (ctx_r2.form.remark = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 48)(15, "label", 49);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "nz-select", 50);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EvsResumeListComponent_ng_container_77_Template_nz_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.evsCycle, $event) || (ctx_r2.form.evsCycle = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EvsResumeListComponent_ng_container_77_Template_nz_select_ngModelChange_18_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onCycleChange());
    });
    \u0275\u0275template(20, EvsResumeListComponent_ng_container_77_nz_option_20_Template, 1, 2, "nz-option", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 48)(22, "label", 44);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "nz-input-number", 51);
    \u0275\u0275twoWayListener("ngModelChange", function EvsResumeListComponent_ng_container_77_Template_nz_input_number_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.evsYear, $event) || (ctx_r2.form.evsYear = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 48)(27, "label", 49);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "nz-select", 52);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EvsResumeListComponent_ng_container_77_Template_nz_select_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.evsMonth, $event) || (ctx_r2.form.evsMonth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(32, EvsResumeListComponent_ng_container_77_nz_option_32_Template, 1, 2, "nz-option", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 48)(34, "label", 44);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementStart(37, "span", 45);
    \u0275\u0275text(38, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "nz-date-picker", 53);
    \u0275\u0275twoWayListener("ngModelChange", function EvsResumeListComponent_ng_container_77_Template_nz_date_picker_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.standardDate, $event) || (ctx_r2.form.standardDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 3)(41, "label", 49);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 54)(45, "nz-date-picker", 55);
    \u0275\u0275twoWayListener("ngModelChange", function EvsResumeListComponent_ng_container_77_Template_nz_date_picker_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.evsStartDate, $event) || (ctx_r2.form.evsStartDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(46, "span");
    \u0275\u0275text(47, "~");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "nz-date-picker", 56);
    \u0275\u0275twoWayListener("ngModelChange", function EvsResumeListComponent_ng_container_77_Template_nz_date_picker_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.evsEndDate, $event) || (ctx_r2.form.evsEndDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275template(49, EvsResumeListComponent_ng_container_77_div_49_Template, 6, 5, "div", 57);
    \u0275\u0275elementStart(50, "div", 48)(51, "label", 49);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "nz-select", 58);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EvsResumeListComponent_ng_container_77_Template_nz_select_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.evsLevel, $event) || (ctx_r2.form.evsLevel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(56, EvsResumeListComponent_ng_container_77_nz_option_56_Template, 1, 2, "nz-option", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 3)(58, "label", 49);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "nz-select", 59);
    \u0275\u0275pipe(62, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EvsResumeListComponent_ng_container_77_Template_nz_select_ngModelChange_61_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.form.copyObject, $event) || (ctx_r2.form.copyObject = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(63, EvsResumeListComponent_ng_container_77_nz_option_63_Template, 1, 2, "nz-option", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 30, "evs.manage.viewResumeList.field.resumeName", "T\xEAn \u0111\xE1nh gi\xE1"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.resumeName);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 33, "evs.manage.viewResumeList.field.remark", "Gi\u1EA3i th\xEDch"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.remark);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 36, "evs.manage.viewResumeList.field.evsCycle", "Chu k\u1EF3"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.evsCycle);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(19, 39, "evs.manage.viewResumeList.option.selectDefault", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.cycleOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 42, "evs.manage.viewResumeList.field.evsYear", "N\u0103m \u0111\xE1nh gi\xE1"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.evsYear);
    \u0275\u0275property("nzMin", 2e3)("nzMax", 2099);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 45, "evs.manage.viewResumeList.field.evsMonth", "Th\xE1ng \u0111\xE1nh gi\xE1"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.evsMonth);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(31, 48, "evs.manage.viewResumeList.option.selectDefault", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.monthOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(36, 51, "evs.manage.viewResumeList.field.standardDate", "Ng\xE0y ti\xEAu chu\u1EA9n"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.standardDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 54, "evs.manage.viewResumeList.field.duration", "Th\u1EDDi gian"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.evsStartDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.evsEndDate);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.form.activityName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(53, 57, "evs.manage.viewResumeList.field.evsLevel", "S\u1ED1 l\u1EA7n \u0111\xE1nh gi\xE1"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.evsLevel);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(55, 60, "evs.manage.viewResumeList.option.selectDefault", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.evsLevelOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(60, 63, "evs.manage.viewResumeList.field.copyObject", "Sao ch\xE9p \u0111\u1ED1i t\u01B0\u1EE3ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.form.copyObject);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(62, 66, "evs.manage.viewResumeList.option.noCopy", "-- Kh\xF4ng sao ch\xE9p --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.copyOptions());
  }
}
function EvsResumeListComponent_ng_container_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.deleteConfirmMessage);
  }
}
var EVS_CYCLE_PARENT_CODE = "14015038";
var EVS_LEVEL_PARENT_CODE = "14015060";
var I18N_KEYS = [
  "evs.manage.viewResumeList.label.evsYear",
  "evs.manage.viewResumeList.label.evsCycle",
  "evs.manage.viewResumeList.label.allOption",
  "evs.manage.viewResumeList.btn.search",
  "evs.manage.viewResumeList.btn.clearFilter",
  "evs.manage.viewResumeList.btn.addNew",
  "evs.manage.viewResumeList.btn.close",
  "evs.manage.viewResumeList.btn.save",
  "evs.manage.viewResumeList.btn.cancel",
  "evs.manage.viewResumeList.btn.delete",
  "evs.manage.viewResumeList.col.no",
  "evs.manage.viewResumeList.col.resumeName",
  "evs.manage.viewResumeList.col.evsCycle",
  "evs.manage.viewResumeList.col.evsYear",
  "evs.manage.viewResumeList.col.evsMonth",
  "evs.manage.viewResumeList.col.standardDate",
  "evs.manage.viewResumeList.col.startDate",
  "evs.manage.viewResumeList.col.endDate",
  "evs.manage.viewResumeList.col.status",
  "evs.manage.viewResumeList.col.action",
  "evs.manage.viewResumeList.modal.titleAdd",
  "evs.manage.viewResumeList.modal.titleEdit",
  "evs.manage.viewResumeList.modal.deleteTitle",
  "evs.manage.viewResumeList.modal.deleteConfirm",
  "evs.manage.viewResumeList.field.resumeName",
  "evs.manage.viewResumeList.field.remark",
  "evs.manage.viewResumeList.field.evsCycle",
  "evs.manage.viewResumeList.field.evsYear",
  "evs.manage.viewResumeList.field.evsMonth",
  "evs.manage.viewResumeList.field.standardDate",
  "evs.manage.viewResumeList.field.duration",
  "evs.manage.viewResumeList.field.activityStatus",
  "evs.manage.viewResumeList.field.evsLevel",
  "evs.manage.viewResumeList.field.copyObject",
  "evs.manage.viewResumeList.option.selectDefault",
  "evs.manage.viewResumeList.option.noCopy",
  "evs.manage.viewResumeList.msg.requiredResumeName",
  "evs.manage.viewResumeList.msg.requiredStandardDate",
  "evs.manage.viewResumeList.msg.loadError",
  "evs.manage.viewResumeList.msg.saveError",
  "evs.manage.viewResumeList.msg.deleteError",
  "alert.message.add_success",
  "alert.message.update_success",
  "alert.message.delete_success",
  "common.stt",
  "common.action",
  "common.edit",
  "common.delete",
  "common.confirm",
  "common.cancel",
  "common.exportExcel",
  "common.noData",
  "common.totalRows"
];
var PAGE_SIZE_OPTIONS = [25, 50, 100, 200];
var EMPTY_FORM = {
  seq: "",
  resumeName: "",
  remark: "",
  evsCycle: null,
  evsYear: (/* @__PURE__ */ new Date()).getFullYear(),
  evsMonth: null,
  standardDate: null,
  evsStartDate: null,
  evsEndDate: null,
  evsLevel: null,
  copyObject: null,
  activityName: null
};
var ACTIVITY_TAG_COLOR = { "2": "warning", "3": "processing", "4": "success", "1": "cyan" };
var EvsResumeListComponent = class _EvsResumeListComponent {
  constructor(api, i18n, message, route) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
    this.route = route;
  }
  api;
  i18n;
  message;
  route;
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
  cycleOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "cycleOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  evsLevelOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "evsLevelOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  monthOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "monthOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  copyOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "copyOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  evsType = "";
  searchYear = (/* @__PURE__ */ new Date()).getFullYear();
  searchCycle = null;
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
    () => this.isNew() ? this.i18n.t("evs.manage.viewResumeList.modal.titleAdd", "Th\xEAm m\u1EDBi \u0111\xE1nh gi\xE1") : this.i18n.t("evs.manage.viewResumeList.modal.titleEdit", "Ch\u1EC9nh s\u1EEDa \u0111\xE1nh gi\xE1"),
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
    this.api.getCodeList(EVS_CYCLE_PARENT_CODE).subscribe({
      next: (list) => this.cycleOptions.set(list ?? []),
      error: () => this.cycleOptions.set([])
    });
    this.api.getCodeList(EVS_LEVEL_PARENT_CODE).subscribe({
      next: (list) => this.evsLevelOptions.set(list ?? []),
      error: () => this.evsLevelOptions.set([])
    });
    this.route.queryParamMap.subscribe((params) => {
      this.evsType = params.get("evsType") ?? "";
      this.search();
    });
  }
  search() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getList(this.evsType, this.searchYear ? String(this.searchYear) : "", this.searchCycle ?? "").subscribe({
      next: (rows) => {
        this.rows.set(rows ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("evs.manage.viewResumeList.msg.loadError", "L\u1ED7i khi t\u1EA3i th\xF4ng tin \u0111\xE1nh gi\xE1."));
        this.rows.set([]);
        this.loading.set(false);
      }
    });
  }
  clearSearch() {
    this.searchYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.searchCycle = null;
    this.search();
  }
  activityTagColor(activity) {
    return ACTIVITY_TAG_COLOR[activity ?? ""] ?? "default";
  }
  // ==================== Combo Tháng đánh giá (cascading theo Chu kỳ) ====================
  loadMonthOptions(cycleCode) {
    if (!cycleCode) {
      this.monthOptions.set([]);
      return;
    }
    this.api.getCodeList(cycleCode).subscribe({
      next: (list) => this.monthOptions.set(list ?? []),
      error: () => this.monthOptions.set([])
    });
  }
  onCycleChange() {
    this.form.evsMonth = null;
    this.loadMonthOptions(this.form.evsCycle);
  }
  // ==================== Modal Thêm mới / Cập nhật ====================
  openAddModal() {
    this.isNew.set(true);
    this.form = __spreadValues({}, EMPTY_FORM);
    this.monthOptions.set([]);
    this.loadCopyOptions();
    this.modalVisible.set(true);
  }
  openEditModal(row) {
    this.api.getOne(row.seq).subscribe({
      next: (r) => {
        if (!r)
          return;
        this.isNew.set(false);
        this.form = {
          seq: r.seq,
          resumeName: r.resumeName || "",
          remark: r.remark || "",
          evsCycle: r.evsCycle || null,
          evsYear: r.evsYear ? Number(r.evsYear) : null,
          evsMonth: r.evsMonth || null,
          standardDate: this.parseDmy(r.standardDate),
          evsStartDate: this.parseDmy(r.evsStartDate),
          evsEndDate: this.parseDmy(r.evsEndDate),
          evsLevel: r.evsLevel || null,
          copyObject: r.copyObject || null,
          activityName: r.activityName || null
        };
        this.loadMonthOptions(r.evsCycle);
        this.loadCopyOptions();
        this.modalVisible.set(true);
      },
      error: () => this.message.error(this.i18n.t("evs.manage.viewResumeList.msg.loadError", "L\u1ED7i khi t\u1EA3i th\xF4ng tin \u0111\xE1nh gi\xE1."))
    });
  }
  loadCopyOptions() {
    this.api.getCopyOptions(this.evsType).subscribe({
      next: (list) => this.copyOptions.set(list ?? []),
      error: () => this.copyOptions.set([])
    });
  }
  closeModal() {
    this.modalVisible.set(false);
  }
  saveForm() {
    const resumeName = this.form.resumeName.trim();
    if (!resumeName) {
      this.message.warning(this.i18n.t("evs.manage.viewResumeList.msg.requiredResumeName", "Vui l\xF2ng nh\u1EADp T\xEAn \u0111\xE1nh gi\xE1."));
      return;
    }
    if (!this.form.standardDate) {
      this.message.warning(this.i18n.t("evs.manage.viewResumeList.msg.requiredStandardDate", "Vui l\xF2ng nh\u1EADp Ng\xE0y ti\xEAu chu\u1EA9n."));
      return;
    }
    const payload = {
      seq: this.form.seq,
      resumeName,
      remark: this.form.remark,
      evsCycle: this.form.evsCycle ?? "",
      evsYear: this.form.evsYear != null ? String(this.form.evsYear) : "",
      evsMonth: this.form.evsMonth ?? "",
      standardDate: this.formatDmy(this.form.standardDate),
      evsStartDate: this.formatDmy(this.form.evsStartDate),
      evsEndDate: this.formatDmy(this.form.evsEndDate),
      evsLevel: this.form.evsLevel ?? "",
      copyObject: this.form.copyObject ?? "",
      evsType: this.evsType
    };
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: () => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.message.success(this.isNew() ? this.i18n.t("alert.message.add_success", "Th\xEAm th\xE0nh c\xF4ng!") : this.i18n.t("alert.message.update_success", "S\u1EEDa th\xE0nh c\xF4ng!"));
        this.search();
      },
      error: () => {
        this.saving.set(false);
        this.message.error(this.i18n.t("evs.manage.viewResumeList.msg.saveError", "L\u1ED7i khi l\u01B0u d\u1EEF li\u1EC7u. Vui l\xF2ng th\u1EED l\u1EA1i."));
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
    return this.deleteTarget?.resumeName ?? "";
  }
  get deleteConfirmMessage() {
    const template = this.i18n.t("evs.manage.viewResumeList.modal.deleteConfirm", 'B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a \u0111\xE1nh gi\xE1 "{0}"?');
    return template.replace("{0}", this.deleteTargetName);
  }
  confirmDelete() {
    if (!this.deleteTarget)
      return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.seq, this.evsType).subscribe({
      next: () => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.message.success(this.i18n.t("alert.message.delete_success", "X\xF3a th\xE0nh c\xF4ng!"));
        this.search();
      },
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t("evs.manage.viewResumeList.msg.deleteError", "L\u1ED7i khi x\xF3a d\u1EEF li\u1EC7u. Vui l\xF2ng th\u1EED l\u1EA1i."));
      }
    });
  }
  // ==================== Xuất Excel ====================
  exportExcel() {
    const headers = [
      this.i18n.t("common.stt", "STT"),
      this.i18n.t("evs.manage.viewResumeList.col.resumeName", "T\xEAn \u0111\xE1nh gi\xE1"),
      this.i18n.t("evs.manage.viewResumeList.col.evsCycle", "Chu k\u1EF3"),
      this.i18n.t("evs.manage.viewResumeList.col.evsYear", "N\u0103m \u0111\xE1nh gi\xE1"),
      this.i18n.t("evs.manage.viewResumeList.col.evsMonth", "Th\xE1ng \u0111\xE1nh gi\xE1"),
      this.i18n.t("evs.manage.viewResumeList.col.standardDate", "Ng\xE0y ti\xEAu chu\u1EA9n"),
      this.i18n.t("evs.manage.viewResumeList.col.startDate", "Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u"),
      this.i18n.t("evs.manage.viewResumeList.col.endDate", "Th\u1EDDi gian k\u1EBFt th\xFAc"),
      this.i18n.t("evs.manage.viewResumeList.col.status", "Tr\u1EA1ng th\xE1i")
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      r.resumeName,
      r.evsCycleName || r.evsCycle,
      r.evsYear,
      r.evsMonthName || r.evsMonth,
      r.standardDate,
      r.evsStartDate,
      r.evsEndDate,
      r.activityName || r.activity
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "DanhSachDanhGia");
    writeFileSync(workbook, "evs_resume_list.xlsx");
  }
  // ==================== Helpers ====================
  parseDmy(s) {
    if (!s)
      return null;
    const [d, m, y] = s.split("/");
    if (!d || !m || !y)
      return null;
    const date = new Date(Number(y), Number(m) - 1, Number(d));
    return isNaN(date.getTime()) ? null : date;
  }
  formatDmy(d) {
    return d ? formatDate(d, "dd/MM/yyyy", "vi") : "";
  }
  static \u0275fac = function EvsResumeListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EvsResumeListComponent)(\u0275\u0275directiveInject(EvsResumeListService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EvsResumeListComponent, selectors: [["app-evs-resume-list"]], decls: 83, vars: 107, consts: [["erlTable", ""], ["erlTotalTpl", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-2"], [1, "form-label"], ["nz-input", "", "type", "number", "name", "erlSearchYear", "min", "2000", "max", "2099", 3, "ngModelChange", "ngModel"], [1, "col-md-3"], ["name", "erlSearchCycle", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col-md-7", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzType", "default", "type", "button", 1, "erl-btn-export", 3, "click"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "220px"], ["nzWidth", "120px", 1, "text-center"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "130px", 1, "text-center"], ["nzWidth", "140px", 1, "text-center"], ["nzWidth", "90px", 1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["nzWidth", "700px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "10", 1, "text-center", "text-muted"], [1, "text-center"], [3, "nzColor"], ["nz-button", "", "nzType", "text", "nzSize", "small", 3, "click", "title"], [1, "bx", "bx-edit", "text-warning"], [1, "bx", "bx-trash", "text-danger"], [1, "row", "g-3"], [1, "form-label", "fw-semibold"], [1, "text-danger"], ["nz-input", "", "name", "erlFormResumeName", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "erlFormRemark", "rows", "3", 3, "ngModelChange", "ngModel"], [1, "col-md-6"], [1, "form-label", "fw-semibold", "d-block"], ["name", "erlFormEvsCycle", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["name", "erlFormEvsYear", 1, "w-100", 3, "ngModelChange", "ngModel", "nzMin", "nzMax"], ["name", "erlFormEvsMonth", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["name", "erlFormStandardDate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center", "gap-2", "flex-wrap"], ["name", "erlFormEvsStartDate", "nzFormat", "dd/MM/yyyy", 3, "ngModelChange", "ngModel"], ["name", "erlFormEvsEndDate", "nzFormat", "dd/MM/yyyy", 3, "ngModelChange", "ngModel"], ["class", "col-md-6", 4, "ngIf"], ["name", "erlFormEvsLevel", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["name", "erlFormCopyObject", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [1, "text-muted"], [1, "mb-0"]], template: function EvsResumeListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "nz-card", 4)(3, "form", 5);
      \u0275\u0275listener("ngSubmit", function EvsResumeListComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 6)(5, "label", 7);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function EvsResumeListComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchYear, $event) || (ctx.searchYear = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 9)(10, "label", 7);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "nz-select", 10);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function EvsResumeListComponent_Template_nz_select_ngModelChange_13_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchCycle, $event) || (ctx.searchCycle = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(15, EvsResumeListComponent_nz_option_15_Template, 1, 2, "nz-option", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 12)(17, "button", 13);
      \u0275\u0275element(18, "i", 14);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 15);
      \u0275\u0275listener("click", function EvsResumeListComponent_Template_button_click_21_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(22, "i", 16);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "button", 17);
      \u0275\u0275listener("click", function EvsResumeListComponent_Template_button_click_25_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(26, "i", 18);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "button", 19);
      \u0275\u0275listener("click", function EvsResumeListComponent_Template_button_click_29_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(30, "i", 20);
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(33, "nz-card");
      \u0275\u0275template(34, EvsResumeListComponent_nz_alert_34_Template, 1, 1, "nz-alert", 21);
      \u0275\u0275elementStart(35, "nz-table", 22, 0)(37, "thead")(38, "tr")(39, "th", 23);
      \u0275\u0275text(40);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "th", 24);
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "th", 25);
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "th", 26);
      \u0275\u0275text(49);
      \u0275\u0275pipe(50, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "th", 27);
      \u0275\u0275text(52);
      \u0275\u0275pipe(53, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "th", 27);
      \u0275\u0275text(55);
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "th", 28);
      \u0275\u0275text(58);
      \u0275\u0275pipe(59, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "th", 28);
      \u0275\u0275text(61);
      \u0275\u0275pipe(62, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "th", 25);
      \u0275\u0275text(64);
      \u0275\u0275pipe(65, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "th", 29);
      \u0275\u0275text(67);
      \u0275\u0275pipe(68, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(69, "tbody");
      \u0275\u0275template(70, EvsResumeListComponent_tr_70_Template, 4, 4, "tr", 30)(71, EvsResumeListComponent_tr_71_Template, 27, 19, "tr", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275template(72, EvsResumeListComponent_ng_template_72_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(74, "nz-modal", 32);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275pipe(76, "translate");
      \u0275\u0275listener("nzOnCancel", function EvsResumeListComponent_Template_nz_modal_nzOnCancel_74_listener() {
        return ctx.closeModal();
      })("nzOnOk", function EvsResumeListComponent_Template_nz_modal_nzOnOk_74_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(77, EvsResumeListComponent_ng_container_77_Template, 64, 69, "ng-container", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "nz-modal", 34);
      \u0275\u0275pipe(79, "translate");
      \u0275\u0275pipe(80, "translate");
      \u0275\u0275pipe(81, "translate");
      \u0275\u0275listener("nzOnCancel", function EvsResumeListComponent_Template_nz_modal_nzOnCancel_78_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function EvsResumeListComponent_Template_nz_modal_nzOnOk_78_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(82, EvsResumeListComponent_ng_container_82_Template, 3, 1, "ng-container", 33);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const erlTable_r13 = \u0275\u0275reference(36);
      const erlTotalTpl_r14 = \u0275\u0275reference(73);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 40, "evs.manage.viewResumeList.label.evsYear", "N\u0103m \u0111\xE1nh gi\xE1"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchYear);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 43, "evs.manage.viewResumeList.label.evsCycle", "Chu k\u1EF3"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchCycle);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(14, 46, "evs.manage.viewResumeList.label.allOption", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.cycleOptions());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(20, 49, "evs.manage.viewResumeList.btn.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(24, 52, "evs.manage.viewResumeList.btn.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(28, 55, "evs.manage.viewResumeList.btn.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(32, 58, "common.exportExcel", "Xu\u1EA5t Excel"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", erlTotalTpl_r14)("nzScroll", \u0275\u0275pureFunction0(106, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 61, "evs.manage.viewResumeList.col.no", "NO"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 64, "evs.manage.viewResumeList.col.resumeName", "T\xEAn \u0111\xE1nh gi\xE1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(47, 67, "evs.manage.viewResumeList.col.evsCycle", "Chu k\u1EF3"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 70, "evs.manage.viewResumeList.col.evsYear", "N\u0103m \u0111\xE1nh gi\xE1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(53, 73, "evs.manage.viewResumeList.col.evsMonth", "Th\xE1ng \u0111\xE1nh gi\xE1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(56, 76, "evs.manage.viewResumeList.col.standardDate", "Ng\xE0y ti\xEAu chu\u1EA9n"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(59, 79, "evs.manage.viewResumeList.col.startDate", "Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(62, 82, "evs.manage.viewResumeList.col.endDate", "Th\u1EDDi gian k\u1EBFt th\xFAc"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(65, 85, "evs.manage.viewResumeList.col.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(68, 88, "evs.manage.viewResumeList.col.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", erlTable_r13.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", ctx.modalTitle())("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(75, 91, "evs.manage.viewResumeList.btn.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(76, 94, "evs.manage.viewResumeList.btn.close", "\u0110\xF3ng"));
      \u0275\u0275advance(4);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(79, 97, "evs.manage.viewResumeList.modal.deleteTitle", "X\xE1c nh\u1EADn x\xF3a"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(80, 100, "evs.manage.viewResumeList.btn.delete", "X\xF3a"))("nzCancelText", \u0275\u0275pipeBind2(81, 103, "evs.manage.viewResumeList.btn.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, MaxValidator, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzInputNumberModule, NzInputNumberComponent, NzSelectModule, NzOptionComponent, NzSelectComponent, NzDatePickerModule, NzDatePickerComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, NzTagModule, NzTagComponent, TranslatePipe], styles: ["\n.erl-btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=evs-resume-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EvsResumeListComponent, [{
    type: Component,
    args: [{ selector: "app-evs-resume-list", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzInputNumberModule,
      NzSelectModule,
      NzDatePickerModule,
      NzButtonModule,
      NzModalModule,
      NzAlertModule,
      NzTagModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm - \u0111\u1EE9ng im khi cu\u1ED9n (xem .sticky-filter-card trong styles.css) -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3" (ngSubmit)="search()">
        <div class="col-md-2">
          <label class="form-label">{{ 'evs.manage.viewResumeList.label.evsYear' | translate:'N\u0103m \u0111\xE1nh gi\xE1' }}</label>
          <input nz-input type="number" [(ngModel)]="searchYear" name="erlSearchYear" min="2000" max="2099">
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'evs.manage.viewResumeList.label.evsCycle' | translate:'Chu k\u1EF3' }}</label>
          <nz-select class="w-100" [(ngModel)]="searchCycle" name="erlSearchCycle" nzAllowClear
                     [nzPlaceHolder]="'evs.manage.viewResumeList.label.allOption' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let c of cycleOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-7 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'evs.manage.viewResumeList.btn.search' | translate:'Tra c\u1EE9u' }}
          </button>
          <button nz-button type="button" (click)="clearSearch()">
            <i class="bx bx-x"></i> {{ 'evs.manage.viewResumeList.btn.clearFilter' | translate:'X\xF3a l\u1ECDc' }}
          </button>
          <button nz-button nzType="primary" type="button" (click)="openAddModal()">
            <i class="bx bx-plus"></i> {{ 'evs.manage.viewResumeList.btn.addNew' | translate:'Th\xEAm m\u1EDBi' }}
          </button>
          <button nz-button nzType="default" type="button" class="erl-btn-export" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'common.exportExcel' | translate:'Xu\u1EA5t Excel' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <!-- nzWidth khai b\xE1o cho t\u1EEBng c\u1ED9t \u0111\u1EC3 \u0111\u1ED3ng b\u1ED9 \u0111\u1ED9 r\u1ED9ng header/body khi d\xF9ng nzScroll. -->
      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="erlTotalTpl"
                [nzScroll]="{ x: '1300px' }" #erlTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'evs.manage.viewResumeList.col.no' | translate:'NO' }}</th>
            <th nzWidth="220px">{{ 'evs.manage.viewResumeList.col.resumeName' | translate:'T\xEAn \u0111\xE1nh gi\xE1' }}</th>
            <th class="text-center" nzWidth="120px">{{ 'evs.manage.viewResumeList.col.evsCycle' | translate:'Chu k\u1EF3' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'evs.manage.viewResumeList.col.evsYear' | translate:'N\u0103m \u0111\xE1nh gi\xE1' }}</th>
            <th class="text-center" nzWidth="130px">{{ 'evs.manage.viewResumeList.col.evsMonth' | translate:'Th\xE1ng \u0111\xE1nh gi\xE1' }}</th>
            <th class="text-center" nzWidth="130px">{{ 'evs.manage.viewResumeList.col.standardDate' | translate:'Ng\xE0y ti\xEAu chu\u1EA9n' }}</th>
            <th class="text-center" nzWidth="140px">{{ 'evs.manage.viewResumeList.col.startDate' | translate:'Th\u1EDDi gian b\u1EAFt \u0111\u1EA7u' }}</th>
            <th class="text-center" nzWidth="140px">{{ 'evs.manage.viewResumeList.col.endDate' | translate:'Th\u1EDDi gian k\u1EBFt th\xFAc' }}</th>
            <th class="text-center" nzWidth="120px">{{ 'evs.manage.viewResumeList.col.status' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'evs.manage.viewResumeList.col.action' | translate:'Thao t\xE1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="10" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of erlTable.data; let i = index">
            <td class="text-center">{{ i + 1 }}</td>
            <td [attr.title]="row.resumeName || null">{{ row.resumeName }}</td>
            <td class="text-center">{{ row.evsCycleName || row.evsCycle }}</td>
            <td class="text-center">{{ row.evsYear }}</td>
            <td class="text-center">{{ row.evsMonthName || row.evsMonth }}</td>
            <td class="text-center">{{ row.standardDate }}</td>
            <td class="text-center">{{ row.evsStartDate }}</td>
            <td class="text-center">{{ row.evsEndDate }}</td>
            <td class="text-center">
              <nz-tag [nzColor]="activityTagColor(row.activity)">{{ row.activityName || row.activity }}</nz-tag>
            </td>
            <td class="text-center">
              <button nz-button nzType="text" nzSize="small" [title]="'common.edit' | translate:'S\u1EEDa'" (click)="openEditModal(row)">
                <i class="bx bx-edit text-warning"></i>
              </button>
              <button nz-button nzType="text" nzSize="small" [title]="'common.delete' | translate:'X\xF3a'" (click)="openDeleteConfirm(row)">
                <i class="bx bx-trash text-danger"></i>
              </button>
            </td>
          </tr>
        </tbody>
        <ng-template #erlTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal Th\xEAm m\u1EDBi / C\u1EADp nh\u1EADt -->
<nz-modal [nzVisible]="modalVisible()" [nzTitle]="modalTitle()" nzWidth="700px"
          (nzOnCancel)="closeModal()" (nzOnOk)="saveForm()" [nzOkLoading]="saving()"
          [nzOkText]="'evs.manage.viewResumeList.btn.save' | translate:'L\u01B0u'"
          [nzCancelText]="'evs.manage.viewResumeList.btn.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <div class="row g-3">
      <div class="col-12">
        <label class="form-label fw-semibold">{{ 'evs.manage.viewResumeList.field.resumeName' | translate:'T\xEAn \u0111\xE1nh gi\xE1' }} <span class="text-danger">*</span></label>
        <input nz-input [(ngModel)]="form.resumeName" name="erlFormResumeName">
      </div>
      <div class="col-12">
        <label class="form-label fw-semibold">{{ 'evs.manage.viewResumeList.field.remark' | translate:'Gi\u1EA3i th\xEDch' }}</label>
        <textarea nz-input [(ngModel)]="form.remark" name="erlFormRemark" rows="3"></textarea>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold d-block">{{ 'evs.manage.viewResumeList.field.evsCycle' | translate:'Chu k\u1EF3' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.evsCycle" name="erlFormEvsCycle" nzAllowClear
                   (ngModelChange)="onCycleChange()"
                   [nzPlaceHolder]="'evs.manage.viewResumeList.option.selectDefault' | translate:'-- Ch\u1ECDn --'">
          <nz-option *ngFor="let c of cycleOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'evs.manage.viewResumeList.field.evsYear' | translate:'N\u0103m \u0111\xE1nh gi\xE1' }}</label>
        <nz-input-number class="w-100" [(ngModel)]="form.evsYear" name="erlFormEvsYear" [nzMin]="2000" [nzMax]="2099"></nz-input-number>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold d-block">{{ 'evs.manage.viewResumeList.field.evsMonth' | translate:'Th\xE1ng \u0111\xE1nh gi\xE1' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.evsMonth" name="erlFormEvsMonth" nzAllowClear
                   [nzPlaceHolder]="'evs.manage.viewResumeList.option.selectDefault' | translate:'-- Ch\u1ECDn --'">
          <nz-option *ngFor="let m of monthOptions()" [nzValue]="m.codeNo" [nzLabel]="m.codeName"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'evs.manage.viewResumeList.field.standardDate' | translate:'Ng\xE0y ti\xEAu chu\u1EA9n' }} <span class="text-danger">*</span></label>
        <nz-date-picker class="w-100" [(ngModel)]="form.standardDate" name="erlFormStandardDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
      </div>
      <div class="col-12">
        <label class="form-label fw-semibold d-block">{{ 'evs.manage.viewResumeList.field.duration' | translate:'Th\u1EDDi gian' }}</label>
        <div class="d-flex align-items-center gap-2 flex-wrap">
          <nz-date-picker [(ngModel)]="form.evsStartDate" name="erlFormEvsStartDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
          <span>~</span>
          <nz-date-picker [(ngModel)]="form.evsEndDate" name="erlFormEvsEndDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
        </div>
      </div>
      <div class="col-md-6" *ngIf="form.activityName">
        <label class="form-label fw-semibold d-block">{{ 'evs.manage.viewResumeList.field.activityStatus' | translate:'Tr\u1EA1ng th\xE1i th\u1EF1c hi\u1EC7n' }}</label>
        <span class="text-muted">{{ form.activityName }}</span>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold d-block">{{ 'evs.manage.viewResumeList.field.evsLevel' | translate:'S\u1ED1 l\u1EA7n \u0111\xE1nh gi\xE1' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.evsLevel" name="erlFormEvsLevel" nzAllowClear
                   [nzPlaceHolder]="'evs.manage.viewResumeList.option.selectDefault' | translate:'-- Ch\u1ECDn --'">
          <nz-option *ngFor="let l of evsLevelOptions()" [nzValue]="l.codeNo" [nzLabel]="l.codeName"></nz-option>
        </nz-select>
      </div>
      <div class="col-12">
        <label class="form-label fw-semibold d-block">{{ 'evs.manage.viewResumeList.field.copyObject' | translate:'Sao ch\xE9p \u0111\u1ED1i t\u01B0\u1EE3ng' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.copyObject" name="erlFormCopyObject" nzAllowClear
                   [nzPlaceHolder]="'evs.manage.viewResumeList.option.noCopy' | translate:'-- Kh\xF4ng sao ch\xE9p --'">
          <nz-option *ngFor="let o of copyOptions()" [nzValue]="o.seq"
                     [nzLabel]="o.resumeName + (o.evsYear ? ' (' + o.evsYear + ')' : '')"></nz-option>
        </nz-select>
      </div>
    </div>
  </ng-container>
</nz-modal>

<!-- Modal x\xE1c nh\u1EADn x\xF3a -->
<nz-modal [nzVisible]="deleteVisible()" [nzTitle]="'evs.manage.viewResumeList.modal.deleteTitle' | translate:'X\xE1c nh\u1EADn x\xF3a'"
          (nzOnCancel)="closeDeleteConfirm()" (nzOnOk)="confirmDelete()" [nzOkLoading]="deleting()"
          [nzOkText]="'evs.manage.viewResumeList.btn.delete' | translate:'X\xF3a'"
          [nzCancelText]="'evs.manage.viewResumeList.btn.cancel' | translate:'H\u1EE7y'">
  <ng-container *nzModalContent>
    <p class="mb-0">{{ deleteConfirmMessage }}</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/evs-resume-list/evs-resume-list.component.css */\n.erl-btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=evs-resume-list.component.css.map */\n"] }]
  }], () => [{ type: EvsResumeListService }, { type: I18nService }, { type: NzMessageService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EvsResumeListComponent, { className: "EvsResumeListComponent", filePath: "src/app/evs-resume-list/evs-resume-list.component.ts", lineNumber: 128 });
})();
export {
  EvsResumeListComponent
};
//# debugId=049fb33a-579e-5e2a-acc0-659f27bd097d
//# sourceMappingURL=chunk-QQN3QWSY.js.map
