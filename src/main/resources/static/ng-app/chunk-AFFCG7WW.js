import {
  NzTabComponent,
  NzTabsComponent,
  NzTabsModule
} from "./chunk-BGUOIBB5.js";
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
  ActivatedRoute
} from "./chunk-2GOAB54B.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
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
  __spreadProps,
  __spreadValues,
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

// src/app/evs-schedule-panel/evs-schedule-panel.service.ts
var API_BASE = "/evs/manage/api";
var EvsSchedulePanelService = class _EvsSchedulePanelService {
  constructor(http) {
    this.http = http;
  }
  http;
  getResumeList(evsType) {
    return this.http.get(`${API_BASE}/resume/evsResumeList`, {
      params: new HttpParams().set("evsType", evsType),
      withCredentials: true
    });
  }
  getScheduleList(resumeSeq, scheduleType, evsType) {
    return this.http.get(`${API_BASE}/schedule/list`, {
      params: new HttpParams().set("resumeSeq", resumeSeq).set("scheduleType", scheduleType).set("evsType", evsType),
      withCredentials: true
    });
  }
  saveBatch(payload) {
    return this.http.post(`${API_BASE}/schedule/save`, payload, { withCredentials: true });
  }
  deleteBatch(seqs) {
    return this.http.post(`${API_BASE}/schedule/delete`, { seqs }, { withCredentials: true });
  }
  /** Combo "Giai đoạn thực hiện" (parentCodeNo=14015065) - đúng giá trị hardcode data-parent-code ở bản
   *  Thymeleaf gốc. */
  getCodeList(parentCodeNo) {
    return this.http.get("/sys/api/getCode/list", {
      params: new HttpParams().set("parentCodeNo", parentCodeNo),
      withCredentials: true
    });
  }
  static \u0275fac = function EvsSchedulePanelService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EvsSchedulePanelService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EvsSchedulePanelService, factory: _EvsSchedulePanelService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EvsSchedulePanelService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/evs-schedule-panel/evs-schedule-panel.component.ts
var _c0 = () => ({ x: "900px" });
var _c1 = () => ({ x: "1150px" });
var _c2 = () => ({ x: "1400px" });
function EvsSchedulePanelComponent_nz_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 57);
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    \u0275\u0275property("nzValue", r_r2.seq)("nzLabel", r_r2.resumeName);
  }
}
function EvsSchedulePanelComponent_tr_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 58);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function EvsSchedulePanelComponent_tr_64_nz_select_6_nz_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 57);
  }
  if (rf & 2) {
    const o_r8 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r8.codeNo)("nzLabel", o_r8.codeName);
  }
}
function EvsSchedulePanelComponent_tr_64_nz_select_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-select", 68);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EvsSchedulePanelComponent_tr_64_nz_select_6_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const row_r5 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r5.evsStep, $event) || (row_r5.evsStep = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EvsSchedulePanelComponent_tr_64_nz_select_6_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const row_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onEvsStepChange(row_r5, $event));
    });
    \u0275\u0275template(2, EvsSchedulePanelComponent_tr_64_nz_select_6_nz_option_2_Template, 1, 2, "nz-option", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", row_r5.evsStep);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(1, 3, "common.select", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r5.evsStepOptions());
  }
}
function EvsSchedulePanelComponent_tr_64_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate(ctx_r5.evsStepLabel(row_r5));
  }
}
function EvsSchedulePanelComponent_tr_64_nz_date_picker_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-date-picker", 69);
    \u0275\u0275twoWayListener("ngModelChange", function EvsSchedulePanelComponent_tr_64_nz_date_picker_10_Template_nz_date_picker_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const row_r5 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r5.startDateObj, $event) || (row_r5.startDateObj = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r5.startDateObj);
    \u0275\u0275control();
  }
}
function EvsSchedulePanelComponent_tr_64_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate(ctx_r5.toDmy(row_r5.startDate));
  }
}
function EvsSchedulePanelComponent_tr_64_nz_date_picker_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-date-picker", 69);
    \u0275\u0275twoWayListener("ngModelChange", function EvsSchedulePanelComponent_tr_64_nz_date_picker_14_Template_nz_date_picker_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const row_r5 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r5.endDateObj, $event) || (row_r5.endDateObj = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r5.endDateObj);
    \u0275\u0275control();
  }
}
function EvsSchedulePanelComponent_tr_64_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate(ctx_r5.toDmy(row_r5.endDate));
  }
}
function EvsSchedulePanelComponent_tr_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 59);
    \u0275\u0275listener("click", function EvsSchedulePanelComponent_tr_64_Template_tr_click_0_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.rowClick("CPNY", row_r5));
    });
    \u0275\u0275elementStart(1, "td", 60);
    \u0275\u0275listener("click", function EvsSchedulePanelComponent_tr_64_Template_td_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "label", 61);
    \u0275\u0275listener("ngModelChange", function EvsSchedulePanelComponent_tr_64_Template_label_ngModelChange_2_listener($event) {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.toggleChecked("CPNY", row_r5, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 59);
    \u0275\u0275listener("click", function EvsSchedulePanelComponent_tr_64_Template_td_click_5_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(6, EvsSchedulePanelComponent_tr_64_nz_select_6_Template, 3, 6, "nz-select", 63)(7, EvsSchedulePanelComponent_tr_64_ng_template_7_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 60);
    \u0275\u0275listener("click", function EvsSchedulePanelComponent_tr_64_Template_td_click_9_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(10, EvsSchedulePanelComponent_tr_64_nz_date_picker_10_Template, 1, 1, "nz-date-picker", 64)(11, EvsSchedulePanelComponent_tr_64_ng_template_11_Template, 1, 1, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 60);
    \u0275\u0275listener("click", function EvsSchedulePanelComponent_tr_64_Template_td_click_13_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(14, EvsSchedulePanelComponent_tr_64_nz_date_picker_14_Template, 1, 1, "nz-date-picker", 64)(15, EvsSchedulePanelComponent_tr_64_ng_template_15_Template, 1, 1, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 60);
    \u0275\u0275listener("click", function EvsSchedulePanelComponent_tr_64_Template_td_click_17_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(18, "label", 65);
    \u0275\u0275listener("ngModelChange", function EvsSchedulePanelComponent_tr_64_Template_label_ngModelChange_18_listener($event) {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.setActive(row_r5, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 66);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 67);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const i_r11 = ctx.index;
    const cpnyStepView_r12 = \u0275\u0275reference(8);
    const cpnyStartView_r13 = \u0275\u0275reference(12);
    const cpnyEndView_r14 = \u0275\u0275reference(16);
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("esp-row-edit", row_r5.editing)("esp-row-new", row_r5.isNew);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r5.isChecked("CPNY", row_r5));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r11 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r5.editing)("ngIfElse", cpnyStepView_r12);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r5.editing)("ngIfElse", cpnyStartView_r13);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r5.editing)("ngIfElse", cpnyEndView_r14);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r5.isActive(row_r5))("nzDisabled", !row_r5.editing);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.updatedBy);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r5.toDmy(row_r5.updateDate));
  }
}
function EvsSchedulePanelComponent_tr_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 70);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function EvsSchedulePanelComponent_tr_121_nz_select_6_nz_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 57);
  }
  if (rf & 2) {
    const o_r19 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r19.codeNo)("nzLabel", o_r19.codeName);
  }
}
function EvsSchedulePanelComponent_tr_121_nz_select_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-select", 68);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EvsSchedulePanelComponent_tr_121_nz_select_6_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r18);
      const row_r17 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r17.evsStep, $event) || (row_r17.evsStep = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EvsSchedulePanelComponent_tr_121_nz_select_6_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r18);
      const row_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onEvsStepChange(row_r17, $event));
    });
    \u0275\u0275template(2, EvsSchedulePanelComponent_tr_121_nz_select_6_nz_option_2_Template, 1, 2, "nz-option", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", row_r17.evsStep);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(1, 3, "common.select", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r5.evsStepOptions());
  }
}
function EvsSchedulePanelComponent_tr_121_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate(ctx_r5.evsStepLabel(row_r17));
  }
}
function EvsSchedulePanelComponent_tr_121_input_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 73);
    \u0275\u0275twoWayListener("ngModelChange", function EvsSchedulePanelComponent_tr_121_input_10_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r20);
      const row_r17 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r17.deptNo, $event) || (row_r17.deptNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r17.deptNo);
    \u0275\u0275control();
  }
}
function EvsSchedulePanelComponent_tr_121_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r17.deptNo);
  }
}
function EvsSchedulePanelComponent_tr_121_input_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 74);
    \u0275\u0275twoWayListener("ngModelChange", function EvsSchedulePanelComponent_tr_121_input_14_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r21);
      const row_r17 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r17.deptName, $event) || (row_r17.deptName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r17.deptName);
    \u0275\u0275control();
  }
}
function EvsSchedulePanelComponent_tr_121_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r17.deptName);
  }
}
function EvsSchedulePanelComponent_tr_121_input_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 73);
    \u0275\u0275twoWayListener("ngModelChange", function EvsSchedulePanelComponent_tr_121_input_18_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r22);
      const row_r17 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r17.deptType, $event) || (row_r17.deptType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r17.deptType);
    \u0275\u0275control();
  }
}
function EvsSchedulePanelComponent_tr_121_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r17.deptType);
  }
}
function EvsSchedulePanelComponent_tr_121_nz_date_picker_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-date-picker", 69);
    \u0275\u0275twoWayListener("ngModelChange", function EvsSchedulePanelComponent_tr_121_nz_date_picker_22_Template_nz_date_picker_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r23);
      const row_r17 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r17.startDateObj, $event) || (row_r17.startDateObj = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r17.startDateObj);
    \u0275\u0275control();
  }
}
function EvsSchedulePanelComponent_tr_121_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate(ctx_r5.toDmy(row_r17.startDate));
  }
}
function EvsSchedulePanelComponent_tr_121_nz_date_picker_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-date-picker", 69);
    \u0275\u0275twoWayListener("ngModelChange", function EvsSchedulePanelComponent_tr_121_nz_date_picker_26_Template_nz_date_picker_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r24);
      const row_r17 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r17.endDateObj, $event) || (row_r17.endDateObj = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r17.endDateObj);
    \u0275\u0275control();
  }
}
function EvsSchedulePanelComponent_tr_121_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate(ctx_r5.toDmy(row_r17.endDate));
  }
}
function EvsSchedulePanelComponent_tr_121_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 59);
    \u0275\u0275listener("click", function EvsSchedulePanelComponent_tr_121_Template_tr_click_0_listener() {
      const row_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.rowClick("DEPT", row_r17));
    });
    \u0275\u0275elementStart(1, "td", 60);
    \u0275\u0275listener("click", function EvsSchedulePanelComponent_tr_121_Template_td_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "label", 61);
    \u0275\u0275listener("ngModelChange", function EvsSchedulePanelComponent_tr_121_Template_label_ngModelChange_2_listener($event) {
      const row_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.toggleChecked("DEPT", row_r17, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 59);
    \u0275\u0275listener("click", function EvsSchedulePanelComponent_tr_121_Template_td_click_5_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(6, EvsSchedulePanelComponent_tr_121_nz_select_6_Template, 3, 6, "nz-select", 63)(7, EvsSchedulePanelComponent_tr_121_ng_template_7_Template, 1, 1, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 60);
    \u0275\u0275listener("click", function EvsSchedulePanelComponent_tr_121_Template_td_click_9_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(10, EvsSchedulePanelComponent_tr_121_input_10_Template, 1, 1, "input", 71)(11, EvsSchedulePanelComponent_tr_121_ng_template_11_Template, 1, 1, "ng-template", null, 8, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 59);
    \u0275\u0275listener("click", function EvsSchedulePanelComponent_tr_121_Template_td_click_13_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(14, EvsSchedulePanelComponent_tr_121_input_14_Template, 1, 1, "input", 72)(15, EvsSchedulePanelComponent_tr_121_ng_template_15_Template, 1, 1, "ng-template", null, 9, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 60);
    \u0275\u0275listener("click", function EvsSchedulePanelComponent_tr_121_Template_td_click_17_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(18, EvsSchedulePanelComponent_tr_121_input_18_Template, 1, 1, "input", 71)(19, EvsSchedulePanelComponent_tr_121_ng_template_19_Template, 1, 1, "ng-template", null, 10, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 60);
    \u0275\u0275listener("click", function EvsSchedulePanelComponent_tr_121_Template_td_click_21_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(22, EvsSchedulePanelComponent_tr_121_nz_date_picker_22_Template, 1, 1, "nz-date-picker", 64)(23, EvsSchedulePanelComponent_tr_121_ng_template_23_Template, 1, 1, "ng-template", null, 11, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 60);
    \u0275\u0275listener("click", function EvsSchedulePanelComponent_tr_121_Template_td_click_25_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(26, EvsSchedulePanelComponent_tr_121_nz_date_picker_26_Template, 1, 1, "nz-date-picker", 64)(27, EvsSchedulePanelComponent_tr_121_ng_template_27_Template, 1, 1, "ng-template", null, 12, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td", 60);
    \u0275\u0275listener("click", function EvsSchedulePanelComponent_tr_121_Template_td_click_29_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(30, "label", 65);
    \u0275\u0275listener("ngModelChange", function EvsSchedulePanelComponent_tr_121_Template_label_ngModelChange_30_listener($event) {
      const row_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.setActive(row_r17, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td", 66);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "td", 67);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r17 = ctx.$implicit;
    const i_r25 = ctx.index;
    const deptStepView_r26 = \u0275\u0275reference(8);
    const deptNoView_r27 = \u0275\u0275reference(12);
    const deptNameView_r28 = \u0275\u0275reference(16);
    const deptTypeView_r29 = \u0275\u0275reference(20);
    const deptStartView_r30 = \u0275\u0275reference(24);
    const deptEndView_r31 = \u0275\u0275reference(28);
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("esp-row-edit", row_r17.editing)("esp-row-new", row_r17.isNew);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r5.isChecked("DEPT", row_r17));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r25 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r17.editing)("ngIfElse", deptStepView_r26);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r17.editing)("ngIfElse", deptNoView_r27);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r17.editing)("ngIfElse", deptNameView_r28);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r17.editing)("ngIfElse", deptTypeView_r29);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r17.editing)("ngIfElse", deptStartView_r30);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r17.editing)("ngIfElse", deptEndView_r31);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r5.isActive(row_r17))("nzDisabled", !row_r17.editing);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r17.updatedBy);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r5.toDmy(row_r17.updateDate));
  }
}
function EvsSchedulePanelComponent_tr_183_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 75);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function EvsSchedulePanelComponent_tr_184_nz_select_6_nz_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 57);
  }
  if (rf & 2) {
    const o_r36 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r36.codeNo)("nzLabel", o_r36.codeName);
  }
}
function EvsSchedulePanelComponent_tr_184_nz_select_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-select", 68);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EvsSchedulePanelComponent_tr_184_nz_select_6_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r35);
      const row_r34 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r34.evsStep, $event) || (row_r34.evsStep = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EvsSchedulePanelComponent_tr_184_nz_select_6_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r35);
      const row_r34 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onEvsStepChange(row_r34, $event));
    });
    \u0275\u0275template(2, EvsSchedulePanelComponent_tr_184_nz_select_6_nz_option_2_Template, 1, 2, "nz-option", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r34 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", row_r34.evsStep);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(1, 3, "common.select", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r5.evsStepOptions());
  }
}
function EvsSchedulePanelComponent_tr_184_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r34 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate(ctx_r5.evsStepLabel(row_r34));
  }
}
function EvsSchedulePanelComponent_tr_184_input_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 73);
    \u0275\u0275twoWayListener("ngModelChange", function EvsSchedulePanelComponent_tr_184_input_10_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r37);
      const row_r34 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r34.deptNo, $event) || (row_r34.deptNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r34 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r34.deptNo);
    \u0275\u0275control();
  }
}
function EvsSchedulePanelComponent_tr_184_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r34 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r34.deptNo);
  }
}
function EvsSchedulePanelComponent_tr_184_input_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 74);
    \u0275\u0275twoWayListener("ngModelChange", function EvsSchedulePanelComponent_tr_184_input_14_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r38);
      const row_r34 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r34.deptName, $event) || (row_r34.deptName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r34 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r34.deptName);
    \u0275\u0275control();
  }
}
function EvsSchedulePanelComponent_tr_184_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r34 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r34.deptName);
  }
}
function EvsSchedulePanelComponent_tr_184_input_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 73);
    \u0275\u0275twoWayListener("ngModelChange", function EvsSchedulePanelComponent_tr_184_input_18_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r39);
      const row_r34 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r34.postGradeNo, $event) || (row_r34.postGradeNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r34 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r34.postGradeNo);
    \u0275\u0275control();
  }
}
function EvsSchedulePanelComponent_tr_184_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r34 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r34.postGradeNo);
  }
}
function EvsSchedulePanelComponent_tr_184_input_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 74);
    \u0275\u0275twoWayListener("ngModelChange", function EvsSchedulePanelComponent_tr_184_input_22_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r40);
      const row_r34 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r34.postGradeName, $event) || (row_r34.postGradeName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r34 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r34.postGradeName);
    \u0275\u0275control();
  }
}
function EvsSchedulePanelComponent_tr_184_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r34 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r34.postGradeName);
  }
}
function EvsSchedulePanelComponent_tr_184_input_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 73);
    \u0275\u0275twoWayListener("ngModelChange", function EvsSchedulePanelComponent_tr_184_input_26_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r41);
      const row_r34 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r34.personId, $event) || (row_r34.personId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r34 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r34.personId);
    \u0275\u0275control();
  }
}
function EvsSchedulePanelComponent_tr_184_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r34 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r34.personId);
  }
}
function EvsSchedulePanelComponent_tr_184_nz_date_picker_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-date-picker", 69);
    \u0275\u0275twoWayListener("ngModelChange", function EvsSchedulePanelComponent_tr_184_nz_date_picker_30_Template_nz_date_picker_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r42);
      const row_r34 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r34.startDateObj, $event) || (row_r34.startDateObj = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r34 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r34.startDateObj);
    \u0275\u0275control();
  }
}
function EvsSchedulePanelComponent_tr_184_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r34 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate(ctx_r5.toDmy(row_r34.startDate));
  }
}
function EvsSchedulePanelComponent_tr_184_nz_date_picker_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-date-picker", 69);
    \u0275\u0275twoWayListener("ngModelChange", function EvsSchedulePanelComponent_tr_184_nz_date_picker_34_Template_nz_date_picker_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r43);
      const row_r34 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r34.endDateObj, $event) || (row_r34.endDateObj = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r34 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r34.endDateObj);
    \u0275\u0275control();
  }
}
function EvsSchedulePanelComponent_tr_184_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r34 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate(ctx_r5.toDmy(row_r34.endDate));
  }
}
function EvsSchedulePanelComponent_tr_184_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 59);
    \u0275\u0275listener("click", function EvsSchedulePanelComponent_tr_184_Template_tr_click_0_listener() {
      const row_r34 = \u0275\u0275restoreView(_r33).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.rowClick("EMP", row_r34));
    });
    \u0275\u0275elementStart(1, "td", 60);
    \u0275\u0275listener("click", function EvsSchedulePanelComponent_tr_184_Template_td_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "label", 61);
    \u0275\u0275listener("ngModelChange", function EvsSchedulePanelComponent_tr_184_Template_label_ngModelChange_2_listener($event) {
      const row_r34 = \u0275\u0275restoreView(_r33).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.toggleChecked("EMP", row_r34, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 59);
    \u0275\u0275listener("click", function EvsSchedulePanelComponent_tr_184_Template_td_click_5_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(6, EvsSchedulePanelComponent_tr_184_nz_select_6_Template, 3, 6, "nz-select", 63)(7, EvsSchedulePanelComponent_tr_184_ng_template_7_Template, 1, 1, "ng-template", null, 13, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 60);
    \u0275\u0275listener("click", function EvsSchedulePanelComponent_tr_184_Template_td_click_9_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(10, EvsSchedulePanelComponent_tr_184_input_10_Template, 1, 1, "input", 71)(11, EvsSchedulePanelComponent_tr_184_ng_template_11_Template, 1, 1, "ng-template", null, 14, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 59);
    \u0275\u0275listener("click", function EvsSchedulePanelComponent_tr_184_Template_td_click_13_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(14, EvsSchedulePanelComponent_tr_184_input_14_Template, 1, 1, "input", 72)(15, EvsSchedulePanelComponent_tr_184_ng_template_15_Template, 1, 1, "ng-template", null, 15, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 60);
    \u0275\u0275listener("click", function EvsSchedulePanelComponent_tr_184_Template_td_click_17_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(18, EvsSchedulePanelComponent_tr_184_input_18_Template, 1, 1, "input", 71)(19, EvsSchedulePanelComponent_tr_184_ng_template_19_Template, 1, 1, "ng-template", null, 16, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 59);
    \u0275\u0275listener("click", function EvsSchedulePanelComponent_tr_184_Template_td_click_21_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(22, EvsSchedulePanelComponent_tr_184_input_22_Template, 1, 1, "input", 72)(23, EvsSchedulePanelComponent_tr_184_ng_template_23_Template, 1, 1, "ng-template", null, 17, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 60);
    \u0275\u0275listener("click", function EvsSchedulePanelComponent_tr_184_Template_td_click_25_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(26, EvsSchedulePanelComponent_tr_184_input_26_Template, 1, 1, "input", 71)(27, EvsSchedulePanelComponent_tr_184_ng_template_27_Template, 1, 1, "ng-template", null, 18, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td", 60);
    \u0275\u0275listener("click", function EvsSchedulePanelComponent_tr_184_Template_td_click_29_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(30, EvsSchedulePanelComponent_tr_184_nz_date_picker_30_Template, 1, 1, "nz-date-picker", 64)(31, EvsSchedulePanelComponent_tr_184_ng_template_31_Template, 1, 1, "ng-template", null, 19, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "td", 60);
    \u0275\u0275listener("click", function EvsSchedulePanelComponent_tr_184_Template_td_click_33_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(34, EvsSchedulePanelComponent_tr_184_nz_date_picker_34_Template, 1, 1, "nz-date-picker", 64)(35, EvsSchedulePanelComponent_tr_184_ng_template_35_Template, 1, 1, "ng-template", null, 20, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "td", 60);
    \u0275\u0275listener("click", function EvsSchedulePanelComponent_tr_184_Template_td_click_37_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(38, "label", 65);
    \u0275\u0275listener("ngModelChange", function EvsSchedulePanelComponent_tr_184_Template_label_ngModelChange_38_listener($event) {
      const row_r34 = \u0275\u0275restoreView(_r33).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.setActive(row_r34, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "td", 66);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "td", 67);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r34 = ctx.$implicit;
    const i_r44 = ctx.index;
    const empStepView_r45 = \u0275\u0275reference(8);
    const empDeptNoView_r46 = \u0275\u0275reference(12);
    const empDeptNameView_r47 = \u0275\u0275reference(16);
    const postGradeNoView_r48 = \u0275\u0275reference(20);
    const postGradeNameView_r49 = \u0275\u0275reference(24);
    const personIdView_r50 = \u0275\u0275reference(28);
    const empStartView_r51 = \u0275\u0275reference(32);
    const empEndView_r52 = \u0275\u0275reference(36);
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("esp-row-edit", row_r34.editing)("esp-row-new", row_r34.isNew);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r5.isChecked("EMP", row_r34));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r44 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r34.editing)("ngIfElse", empStepView_r45);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r34.editing)("ngIfElse", empDeptNoView_r46);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r34.editing)("ngIfElse", empDeptNameView_r47);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r34.editing)("ngIfElse", postGradeNoView_r48);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r34.editing)("ngIfElse", postGradeNameView_r49);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r34.editing)("ngIfElse", personIdView_r50);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r34.editing)("ngIfElse", empStartView_r51);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r34.editing)("ngIfElse", empEndView_r52);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r5.isActive(row_r34))("nzDisabled", !row_r34.editing);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r34.updatedBy);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r5.toDmy(row_r34.updateDate));
  }
}
function EvsSchedulePanelComponent_ng_template_185_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r53 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r53, "\n");
  }
}
function EvsSchedulePanelComponent_ng_container_191_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 76);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 3, "evs.manage.viewEvsSchedulePanel.modal.deletePrefix", "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r5.pendingDeleteCount);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 6, "evs.manage.viewEvsSchedulePanel.modal.deleteSuffix", "d\xF2ng \u0111\xE3 ch\u1ECDn?"), " ");
  }
}
var EVS_STEP_PARENT_CODE = "14015065";
var PAGE_SIZE_OPTIONS = [10, 25, 50, 100];
var I18N_KEYS = [
  "evs.manage.viewEvsSchedulePanel.search.evaluationName",
  "evs.manage.viewEvsSchedulePanel.search.selectOption",
  "evs.manage.viewEvsSchedulePanel.btn.search",
  "evs.manage.viewEvsSchedulePanel.btn.addNew",
  "evs.manage.viewEvsSchedulePanel.filter.quickFilter",
  "evs.manage.viewEvsSchedulePanel.pagination.perPage",
  "evs.manage.viewEvsSchedulePanel.pagination.records",
  "evs.manage.viewEvsSchedulePanel.col.evsStep",
  "evs.manage.viewEvsSchedulePanel.col.startDate",
  "evs.manage.viewEvsSchedulePanel.col.endDate",
  "evs.manage.viewEvsSchedulePanel.col.active",
  "evs.manage.viewEvsSchedulePanel.col.updatedBy",
  "evs.manage.viewEvsSchedulePanel.col.updateDate",
  "evs.manage.viewEvsSchedulePanel.col.deptNo",
  "evs.manage.viewEvsSchedulePanel.col.deptName",
  "evs.manage.viewEvsSchedulePanel.col.deptType",
  "evs.manage.viewEvsSchedulePanel.col.postGradeNo",
  "evs.manage.viewEvsSchedulePanel.col.postGradeName",
  "evs.manage.viewEvsSchedulePanel.col.personId",
  "evs.manage.viewEvsSchedulePanel.modal.deleteTitle",
  "evs.manage.viewEvsSchedulePanel.modal.deletePrefix",
  "evs.manage.viewEvsSchedulePanel.modal.deleteSuffix",
  "evs.manage.viewEvsSchedulePanel.msg.selectEvaluationFirst",
  "evs.manage.viewEvsSchedulePanel.msg.noDataToSave",
  "evs.manage.viewEvsSchedulePanel.msg.selectEvsStep",
  "evs.manage.viewEvsSchedulePanel.msg.saveError",
  "evs.manage.viewEvsSchedulePanel.msg.selectRowToDelete",
  "evs.manage.viewEvsSchedulePanel.msg.deleteError",
  "evs.viewEvsSchedulePanel.GONGSIRICHENG.a",
  "evs.viewEvsSchedulePanel.BUMENRICHENG.a",
  "evs.viewEvsSchedulePanel.GERENRICHENG.a",
  "alert.message.update_success",
  "common.select",
  "common.action",
  "common.save",
  "common.delete",
  "common.cancel",
  "common.confirm",
  "common.noData",
  "common.totalRows"
];
var ScheduleTabState = class {
  rows = signal(
    [],
    ...ngDevMode ? [{ debugName: "rows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  filterText = signal(
    "",
    ...ngDevMode ? [{ debugName: "filterText" }] : (
      /* istanbul ignore next */
      []
    )
  );
  checked = signal(
    /* @__PURE__ */ new Set(),
    ...ngDevMode ? [{ debugName: "checked" }] : (
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
  filteredRows = computed(
    () => {
      const kw = this.filterText().trim().toLowerCase();
      const list = this.rows();
      if (!kw)
        return list;
      return list.filter((r) => (r.evsStepName || r.evsStep || "").toLowerCase().includes(kw) || (r.deptName || "").toLowerCase().includes(kw) || (r.deptNo || "").toLowerCase().includes(kw) || (r.personId || "").toLowerCase().includes(kw));
    },
    ...ngDevMode ? [{ debugName: "filteredRows" }] : (
      /* istanbul ignore next */
      []
    )
  );
};
var EvsSchedulePanelComponent = class _EvsSchedulePanelComponent {
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
  evsType = "";
  resumeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "resumeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  resumeSeq = null;
  evsStepOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "evsStepOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  cpny = new ScheduleTabState();
  dept = new ScheduleTabState();
  emp = new ScheduleTabState();
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
  pendingDeleteType = null;
  pendingDeleteRowIds = [];
  rowIdCounter = 0;
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getCodeList(EVS_STEP_PARENT_CODE).subscribe({
      next: (list) => this.evsStepOptions.set(list ?? []),
      error: () => this.evsStepOptions.set([])
    });
    this.route.queryParamMap.subscribe((params) => {
      this.evsType = params.get("evsType") ?? "";
      this.loadResumeOptions();
    });
  }
  loadResumeOptions() {
    this.api.getResumeList(this.evsType).subscribe({
      next: (rows) => {
        this.resumeOptions.set(rows ?? []);
        if (rows && rows.length) {
          this.resumeSeq = rows[0].seq;
          this.search();
        }
      },
      error: () => this.resumeOptions.set([])
    });
  }
  search() {
    if (!this.resumeSeq)
      return;
    this.loadTab("CPNY");
    this.loadTab("DEPT");
    this.loadTab("EMP");
  }
  tabState(type) {
    return type === "CPNY" ? this.cpny : type === "DEPT" ? this.dept : this.emp;
  }
  loadTab(type) {
    const resumeSeq = this.resumeSeq;
    if (!resumeSeq)
      return;
    const state = this.tabState(type);
    state.loading.set(true);
    this.api.getScheduleList(resumeSeq, type, this.evsType).subscribe({
      next: (rows) => {
        state.rows.set((rows ?? []).map((r) => this.toRow(r, false)));
        state.filterText.set("");
        state.checked.set(/* @__PURE__ */ new Set());
        state.loading.set(false);
      },
      error: () => {
        state.rows.set([]);
        state.loading.set(false);
      }
    });
  }
  toRow(dto, isNew) {
    return __spreadProps(__spreadValues({}, dto), {
      rowId: dto.seq || this.newRowId(),
      isNew,
      editing: isNew,
      modified: isNew,
      startDateObj: this.parseYmd(dto.startDate),
      endDateObj: this.parseYmd(dto.endDate)
    });
  }
  newRowId() {
    return "NEW_" + ++this.rowIdCounter;
  }
  evsStepLabel(row) {
    return row.evsStepName || row.evsStep || "";
  }
  onEvsStepChange(row, code) {
    const opt = this.evsStepOptions().find((o) => o.codeNo === code);
    row.evsStepName = opt ? opt.codeName : "";
  }
  isActive(row) {
    return row.activity === "1" || row.activity === "Y";
  }
  setActive(row, checked) {
    row.activity = checked ? "1" : "0";
  }
  // ==================== Lọc nhanh ====================
  onFilterChange(type, value) {
    this.tabState(type).filterText.set(value);
  }
  // ==================== Click dòng để sửa inline ====================
  rowClick(type, row) {
    if (row.editing)
      return;
    const state = this.tabState(type);
    state.rows().forEach((r) => {
      if (r.editing)
        this.commitEdit(r);
    });
    row.editing = true;
  }
  commitEdit(row) {
    row.startDate = this.formatYmd(row.startDateObj);
    row.endDate = this.formatYmd(row.endDateObj);
    row.editing = false;
    row.modified = true;
  }
  // ==================== Thêm dòng ====================
  addRow(type) {
    const state = this.tabState(type);
    state.rows().forEach((r) => {
      if (r.editing)
        this.commitEdit(r);
    });
    const newRow = this.toRow({
      seq: "",
      resumeSeq: this.resumeSeq,
      scheduleType: type,
      no: "",
      name: "",
      deptNo: "",
      deptName: "",
      postGradeNo: "",
      postGradeName: "",
      evsObject: "",
      evsStep: "",
      evsStepName: "",
      activity: "1",
      deptType: "",
      orderNo: "",
      personId: "",
      startDate: "",
      endDate: "",
      createDate: null,
      createdBy: null,
      updateDate: null,
      updatedBy: null
    }, true);
    state.rows.update((rows) => [...rows, newRow]);
  }
  // ==================== Lưu ====================
  saveTab(type) {
    const state = this.tabState(type);
    state.rows().forEach((r) => {
      if (r.editing)
        this.commitEdit(r);
    });
    if (!this.resumeSeq) {
      this.message.warning(this.i18n.t("evs.manage.viewEvsSchedulePanel.msg.selectEvaluationFirst", "Vui l\xF2ng ch\u1ECDn T\xEAn \u0111\xE1nh gi\xE1 tr\u01B0\u1EDBc khi l\u01B0u."));
      return;
    }
    const toSave = state.rows().filter((r) => r.isNew || r.modified);
    if (!toSave.length) {
      this.message.warning(this.i18n.t("evs.manage.viewEvsSchedulePanel.msg.noDataToSave", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u n\xE0o thay \u0111\u1ED5i \u0111\u1EC3 l\u01B0u."));
      return;
    }
    if (toSave.some((r) => !r.evsStep || !r.evsStep.trim())) {
      this.message.warning(this.i18n.t("evs.manage.viewEvsSchedulePanel.msg.selectEvsStep", "Vui l\xF2ng ch\u1ECDn Giai \u0111o\u1EA1n th\u1EF1c hi\u1EC7n cho t\u1EA5t c\u1EA3 c\xE1c d\xF2ng."));
      return;
    }
    const resumeSeq = this.resumeSeq;
    const payload = toSave.map((r) => ({
      seq: r.isNew ? null : r.seq,
      resumeSeq,
      scheduleType: type,
      no: r.no || "",
      name: r.evsStepName || r.evsStep || "",
      deptNo: r.deptNo || "",
      deptName: r.deptName || "",
      postGradeNo: r.postGradeNo || "",
      postGradeName: r.postGradeName || "",
      evsObject: r.evsObject || "",
      evsStep: r.evsStep || "",
      activity: r.activity || "1",
      deptType: r.deptType || "",
      orderNo: r.orderNo || "",
      personId: r.personId || "",
      startDate: r.startDate || "",
      endDate: r.endDate || "",
      evsType: this.evsType
    }));
    state.saving.set(true);
    this.api.saveBatch(payload).subscribe({
      next: () => {
        state.saving.set(false);
        this.message.success(this.i18n.t("alert.message.update_success", "S\u1EEDa th\xE0nh c\xF4ng!"));
        this.loadTab(type);
      },
      error: () => {
        state.saving.set(false);
        this.message.error(this.i18n.t("evs.manage.viewEvsSchedulePanel.msg.saveError", "L\u1ED7i khi l\u01B0u d\u1EEF li\u1EC7u. Vui l\xF2ng th\u1EED l\u1EA1i."));
      }
    });
  }
  // ==================== Chọn nhiều dòng (checkbox) - phạm vi trang hiện tại ====================
  isChecked(type, row) {
    return this.tabState(type).checked().has(row.rowId);
  }
  toggleChecked(type, row, checked) {
    const state = this.tabState(type);
    const next = new Set(state.checked());
    if (checked)
      next.add(row.rowId);
    else
      next.delete(row.rowId);
    state.checked.set(next);
  }
  allCheckedOnPage(type, pageRows) {
    return pageRows.length > 0 && pageRows.every((r) => this.isChecked(type, r));
  }
  someCheckedOnPage(type, pageRows) {
    return pageRows.some((r) => this.isChecked(type, r)) && !this.allCheckedOnPage(type, pageRows);
  }
  toggleAllOnPage(type, pageRows, checked) {
    const state = this.tabState(type);
    const next = new Set(state.checked());
    pageRows.forEach((r) => checked ? next.add(r.rowId) : next.delete(r.rowId));
    state.checked.set(next);
  }
  // ==================== Xóa ====================
  openDeleteConfirm(type) {
    const ids = Array.from(this.tabState(type).checked());
    if (!ids.length) {
      this.message.warning(this.i18n.t("evs.manage.viewEvsSchedulePanel.msg.selectRowToDelete", "Vui l\xF2ng ch\u1ECDn \xEDt nh\u1EA5t m\u1ED9t d\xF2ng \u0111\u1EC3 x\xF3a."));
      return;
    }
    this.pendingDeleteType = type;
    this.pendingDeleteRowIds = ids;
    this.deleteVisible.set(true);
  }
  closeDeleteConfirm() {
    this.deleteVisible.set(false);
  }
  get pendingDeleteCount() {
    return this.pendingDeleteRowIds.length;
  }
  confirmDelete() {
    const type = this.pendingDeleteType;
    if (!type)
      return;
    const state = this.tabState(type);
    const ids = this.pendingDeleteRowIds;
    const existingSeqs = ids.map((id) => state.rows().find((r) => r.rowId === id)).filter((r) => !!r && !r.isNew).map((r) => r.seq);
    state.rows.update((rows) => rows.filter((r) => !ids.includes(r.rowId)));
    const nextChecked = new Set(state.checked());
    ids.forEach((id) => nextChecked.delete(id));
    state.checked.set(nextChecked);
    this.deleteVisible.set(false);
    if (!existingSeqs.length)
      return;
    this.deleting.set(true);
    this.api.deleteBatch(existingSeqs).subscribe({
      next: () => this.deleting.set(false),
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t("evs.manage.viewEvsSchedulePanel.msg.deleteError", "L\u1ED7i khi x\xF3a d\u1EEF li\u1EC7u. Vui l\xF2ng th\u1EED l\u1EA1i."));
        this.loadTab(type);
      }
    });
  }
  // ==================== Helpers ngày tháng ====================
  parseYmd(s) {
    if (!s)
      return null;
    const [y, m, d] = s.substring(0, 10).split("-");
    if (!y || !m || !d)
      return null;
    const date = new Date(Number(y), Number(m) - 1, Number(d));
    return isNaN(date.getTime()) ? null : date;
  }
  formatYmd(d) {
    return d ? formatDate(d, "yyyy-MM-dd", "vi") : "";
  }
  /** Hiển thị dd/MM/yyyy cho startDate/endDate/updateDate (theo CLAUDE.md) - chỉ lấy phần ngày, bỏ giờ
   *  nếu có (đúng phạm vi hiển thị vespFmtDate ở bản gốc). */
  toDmy(s) {
    if (!s)
      return "";
    const [y, m, d] = s.substring(0, 10).split("-");
    return y && m && d ? `${d}/${m}/${y}` : s;
  }
  static \u0275fac = function EvsSchedulePanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EvsSchedulePanelComponent)(\u0275\u0275directiveInject(EvsSchedulePanelService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EvsSchedulePanelComponent, selectors: [["app-evs-schedule-panel"]], decls: 192, vars: 246, consts: [["cpnyTable", "nzTable"], ["deptTable", "nzTable"], ["empTable", "nzTable"], ["espTotalTpl", ""], ["cpnyStepView", ""], ["cpnyStartView", ""], ["cpnyEndView", ""], ["deptStepView", ""], ["deptNoView", ""], ["deptNameView", ""], ["deptTypeView", ""], ["deptStartView", ""], ["deptEndView", ""], ["empStepView", ""], ["empDeptNoView", ""], ["empDeptNameView", ""], ["postGradeNoView", ""], ["postGradeNameView", ""], ["personIdView", ""], ["empStartView", ""], ["empEndView", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "d-flex", "align-items-end", "gap-3", "flex-wrap", 3, "ngSubmit"], [2, "min-width", "280px"], [1, "form-label"], ["name", "espResumeSeq", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], [3, "nzTitle"], [1, "d-flex", "align-items-center", "justify-content-between", "mt-2", "mb-2", "flex-wrap", "gap-2"], ["nz-input", "", 2, "width", "200px", 3, "ngModelChange", "ngModel", "placeholder"], [1, "d-flex", "align-items-center", "gap-2"], ["nz-button", "", "nzType", "primary", "nzSize", "small", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzDanger", "", "nzSize", "small", "type", "button", 3, "click"], [1, "bx", "bx-trash"], ["nz-button", "", "nzType", "primary", "nzSize", "small", "type", "button", 3, "click", "nzLoading"], [1, "bx", "bx-save"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "40px", 1, "text-center"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel", "nzIndeterminate"], ["nzWidth", "50px", 1, "text-center"], ["nzWidth", "220px"], ["nzWidth", "130px", 1, "text-center"], ["nzWidth", "80px", 1, "text-center"], ["nzWidth", "120px", 1, "text-center"], [4, "ngIf"], [3, "esp-row-edit", "esp-row-new", "click", 4, "ngFor", "ngForOf"], ["nzWidth", "200px"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "170px"], ["nzWidth", "150px"], ["nzOkDanger", "", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [3, "nzValue", "nzLabel"], ["colspan", "8", 1, "text-center", "text-muted"], [3, "click"], [1, "text-center", 3, "click"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel"], [1, "text-center"], ["class", "w-100", 3, "ngModel", "nzPlaceHolder", "ngModelChange", 4, "ngIf", "ngIfElse"], ["nzFormat", "dd/MM/yyyy", 3, "ngModel", "ngModelChange", 4, "ngIf", "ngIfElse"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel", "nzDisabled"], [1, "small"], [1, "text-center", "small"], [1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["nzFormat", "dd/MM/yyyy", 3, "ngModelChange", "ngModel"], ["colspan", "10", 1, "text-center", "text-muted"], ["nz-input", "", "maxlength", "20", 3, "ngModel", "ngModelChange", 4, "ngIf", "ngIfElse"], ["nz-input", "", "maxlength", "60", 3, "ngModel", "ngModelChange", 4, "ngIf", "ngIfElse"], ["nz-input", "", "maxlength", "20", 3, "ngModelChange", "ngModel"], ["nz-input", "", "maxlength", "60", 3, "ngModelChange", "ngModel"], ["colspan", "12", 1, "text-center", "text-muted"], [1, "mb-0"]], template: function EvsSchedulePanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "nz-card", 23)(3, "form", 24);
      \u0275\u0275listener("ngSubmit", function EvsSchedulePanelComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 25)(5, "label", 26);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "nz-select", 27);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function EvsSchedulePanelComponent_Template_nz_select_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.resumeSeq, $event) || (ctx.resumeSeq = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(10, EvsSchedulePanelComponent_nz_option_10_Template, 1, 2, "nz-option", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 29);
      \u0275\u0275element(12, "i", 30);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "nz-card")(16, "nz-tabs")(17, "nz-tab", 31);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementStart(19, "div", 32)(20, "input", 33);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275listener("ngModelChange", function EvsSchedulePanelComponent_Template_input_ngModelChange_20_listener($event) {
        return ctx.onFilterChange("CPNY", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(22, "div", 34)(23, "button", 35);
      \u0275\u0275listener("click", function EvsSchedulePanelComponent_Template_button_click_23_listener() {
        return ctx.addRow("CPNY");
      });
      \u0275\u0275element(24, "i", 36);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "button", 37);
      \u0275\u0275listener("click", function EvsSchedulePanelComponent_Template_button_click_27_listener() {
        return ctx.openDeleteConfirm("CPNY");
      });
      \u0275\u0275element(28, "i", 38);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "button", 39);
      \u0275\u0275listener("click", function EvsSchedulePanelComponent_Template_button_click_31_listener() {
        return ctx.saveTab("CPNY");
      });
      \u0275\u0275element(32, "i", 40);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "nz-table", 41, 0)(37, "thead")(38, "tr")(39, "th", 42)(40, "label", 43);
      \u0275\u0275listener("ngModelChange", function EvsSchedulePanelComponent_Template_label_ngModelChange_40_listener($event) {
        \u0275\u0275restoreView(_r1);
        const cpnyTable_r3 = \u0275\u0275reference(36);
        return \u0275\u0275resetView(ctx.toggleAllOnPage("CPNY", cpnyTable_r3.data, $event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "th", 44);
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "th", 45);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "th", 46);
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "th", 46);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "th", 47);
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "th", 45);
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "th", 48);
      \u0275\u0275text(60);
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(62, "tbody");
      \u0275\u0275template(63, EvsSchedulePanelComponent_tr_63_Template, 4, 4, "tr", 49)(64, EvsSchedulePanelComponent_tr_64_Template, 23, 16, "tr", 50);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "nz-tab", 31);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275elementStart(67, "div", 32)(68, "input", 33);
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275listener("ngModelChange", function EvsSchedulePanelComponent_Template_input_ngModelChange_68_listener($event) {
        return ctx.onFilterChange("DEPT", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(70, "div", 34)(71, "button", 35);
      \u0275\u0275listener("click", function EvsSchedulePanelComponent_Template_button_click_71_listener() {
        return ctx.addRow("DEPT");
      });
      \u0275\u0275element(72, "i", 36);
      \u0275\u0275text(73);
      \u0275\u0275pipe(74, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "button", 37);
      \u0275\u0275listener("click", function EvsSchedulePanelComponent_Template_button_click_75_listener() {
        return ctx.openDeleteConfirm("DEPT");
      });
      \u0275\u0275element(76, "i", 38);
      \u0275\u0275text(77);
      \u0275\u0275pipe(78, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "button", 39);
      \u0275\u0275listener("click", function EvsSchedulePanelComponent_Template_button_click_79_listener() {
        return ctx.saveTab("DEPT");
      });
      \u0275\u0275element(80, "i", 40);
      \u0275\u0275text(81);
      \u0275\u0275pipe(82, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(83, "nz-table", 41, 1)(85, "thead")(86, "tr")(87, "th", 42)(88, "label", 43);
      \u0275\u0275listener("ngModelChange", function EvsSchedulePanelComponent_Template_label_ngModelChange_88_listener($event) {
        \u0275\u0275restoreView(_r1);
        const deptTable_r15 = \u0275\u0275reference(84);
        return \u0275\u0275resetView(ctx.toggleAllOnPage("DEPT", deptTable_r15.data, $event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "th", 44);
      \u0275\u0275text(90);
      \u0275\u0275pipe(91, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "th", 51);
      \u0275\u0275text(93);
      \u0275\u0275pipe(94, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "th", 52);
      \u0275\u0275text(96);
      \u0275\u0275pipe(97, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "th", 53);
      \u0275\u0275text(99);
      \u0275\u0275pipe(100, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "th", 48);
      \u0275\u0275text(102);
      \u0275\u0275pipe(103, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "th", 46);
      \u0275\u0275text(105);
      \u0275\u0275pipe(106, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "th", 46);
      \u0275\u0275text(108);
      \u0275\u0275pipe(109, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "th", 47);
      \u0275\u0275text(111);
      \u0275\u0275pipe(112, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "th", 51);
      \u0275\u0275text(114);
      \u0275\u0275pipe(115, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "th", 48);
      \u0275\u0275text(117);
      \u0275\u0275pipe(118, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(119, "tbody");
      \u0275\u0275template(120, EvsSchedulePanelComponent_tr_120_Template, 4, 4, "tr", 49)(121, EvsSchedulePanelComponent_tr_121_Template, 35, 22, "tr", 50);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(122, "nz-tab", 31);
      \u0275\u0275pipe(123, "translate");
      \u0275\u0275elementStart(124, "div", 32)(125, "input", 33);
      \u0275\u0275pipe(126, "translate");
      \u0275\u0275listener("ngModelChange", function EvsSchedulePanelComponent_Template_input_ngModelChange_125_listener($event) {
        return ctx.onFilterChange("EMP", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(127, "div", 34)(128, "button", 35);
      \u0275\u0275listener("click", function EvsSchedulePanelComponent_Template_button_click_128_listener() {
        return ctx.addRow("EMP");
      });
      \u0275\u0275element(129, "i", 36);
      \u0275\u0275text(130);
      \u0275\u0275pipe(131, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "button", 37);
      \u0275\u0275listener("click", function EvsSchedulePanelComponent_Template_button_click_132_listener() {
        return ctx.openDeleteConfirm("EMP");
      });
      \u0275\u0275element(133, "i", 38);
      \u0275\u0275text(134);
      \u0275\u0275pipe(135, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "button", 39);
      \u0275\u0275listener("click", function EvsSchedulePanelComponent_Template_button_click_136_listener() {
        return ctx.saveTab("EMP");
      });
      \u0275\u0275element(137, "i", 40);
      \u0275\u0275text(138);
      \u0275\u0275pipe(139, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(140, "nz-table", 41, 2)(142, "thead")(143, "tr")(144, "th", 42)(145, "label", 43);
      \u0275\u0275listener("ngModelChange", function EvsSchedulePanelComponent_Template_label_ngModelChange_145_listener($event) {
        \u0275\u0275restoreView(_r1);
        const empTable_r32 = \u0275\u0275reference(141);
        return \u0275\u0275resetView(ctx.toggleAllOnPage("EMP", empTable_r32.data, $event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "th", 44);
      \u0275\u0275text(147);
      \u0275\u0275pipe(148, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "th", 51);
      \u0275\u0275text(150);
      \u0275\u0275pipe(151, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "th", 52);
      \u0275\u0275text(153);
      \u0275\u0275pipe(154, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "th", 54);
      \u0275\u0275text(156);
      \u0275\u0275pipe(157, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "th", 52);
      \u0275\u0275text(159);
      \u0275\u0275pipe(160, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "th", 54);
      \u0275\u0275text(162);
      \u0275\u0275pipe(163, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "th", 48);
      \u0275\u0275text(165);
      \u0275\u0275pipe(166, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "th", 46);
      \u0275\u0275text(168);
      \u0275\u0275pipe(169, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "th", 46);
      \u0275\u0275text(171);
      \u0275\u0275pipe(172, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "th", 47);
      \u0275\u0275text(174);
      \u0275\u0275pipe(175, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "th", 51);
      \u0275\u0275text(177);
      \u0275\u0275pipe(178, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "th", 48);
      \u0275\u0275text(180);
      \u0275\u0275pipe(181, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(182, "tbody");
      \u0275\u0275template(183, EvsSchedulePanelComponent_tr_183_Template, 4, 4, "tr", 49)(184, EvsSchedulePanelComponent_tr_184_Template, 43, 26, "tr", 50);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275template(185, EvsSchedulePanelComponent_ng_template_185_Template, 2, 5, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(187, "nz-modal", 55);
      \u0275\u0275pipe(188, "translate");
      \u0275\u0275pipe(189, "translate");
      \u0275\u0275pipe(190, "translate");
      \u0275\u0275listener("nzOnCancel", function EvsSchedulePanelComponent_Template_nz_modal_nzOnCancel_187_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function EvsSchedulePanelComponent_Template_nz_modal_nzOnOk_187_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(191, EvsSchedulePanelComponent_ng_container_191_Template, 8, 9, "ng-container", 56);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const cpnyTable_r3 = \u0275\u0275reference(36);
      const deptTable_r15 = \u0275\u0275reference(84);
      const empTable_r32 = \u0275\u0275reference(141);
      const espTotalTpl_r54 = \u0275\u0275reference(186);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 93, "evs.manage.viewEvsSchedulePanel.search.evaluationName", "T\xEAn \u0111\xE1nh gi\xE1"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.resumeSeq);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(9, 96, "evs.manage.viewEvsSchedulePanel.search.selectOption", "-- Ch\u1ECDn t\xEAn \u0111\xE1nh gi\xE1 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.resumeOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 99, "evs.manage.viewEvsSchedulePanel.btn.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(18, 102, "evs.viewEvsSchedulePanel.GONGSIRICHENG.a", "C\xF4ng ty"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.cpny.filterText())("placeholder", \u0275\u0275pipeBind2(21, 105, "evs.manage.viewEvsSchedulePanel.filter.quickFilter", "L\u1ECDc nhanh"));
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 108, "evs.manage.viewEvsSchedulePanel.btn.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(30, 111, "common.delete", "X\xF3a"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.cpny.saving());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(34, 114, "common.save", "L\u01B0u"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzData", ctx.cpny.filteredRows())("nzLoading", ctx.cpny.loading())("nzPageSize", 10)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", espTotalTpl_r54)("nzScroll", \u0275\u0275pureFunction0(243, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.allCheckedOnPage("CPNY", cpnyTable_r3.data))("nzIndeterminate", ctx.someCheckedOnPage("CPNY", cpnyTable_r3.data));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 117, "common.stt", "No."));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 120, "evs.manage.viewEvsSchedulePanel.col.evsStep", "Giai \u0111o\u1EA1n th\u1EF1c hi\u1EC7n"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 123, "evs.manage.viewEvsSchedulePanel.col.startDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(52, 126, "evs.manage.viewEvsSchedulePanel.col.endDate", "Ng\xE0y k\u1EBFt th\xFAc"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(55, 129, "evs.manage.viewEvsSchedulePanel.col.active", "S\u1EED d\u1EE5ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(58, 132, "evs.manage.viewEvsSchedulePanel.col.updatedBy", "Ng\u01B0\u1EDDi thay \u0111\u1ED5i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(61, 135, "evs.manage.viewEvsSchedulePanel.col.updateDate", "Th\u1EDDi gian thay \u0111\u1ED5i"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.cpny.loading() && cpnyTable_r3.data.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", cpnyTable_r3.data);
      \u0275\u0275advance();
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(66, 138, "evs.viewEvsSchedulePanel.BUMENRICHENG.a", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.dept.filterText())("placeholder", \u0275\u0275pipeBind2(69, 141, "evs.manage.viewEvsSchedulePanel.filter.quickFilter", "L\u1ECDc nhanh"));
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(74, 144, "evs.manage.viewEvsSchedulePanel.btn.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(78, 147, "common.delete", "X\xF3a"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.dept.saving());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(82, 150, "common.save", "L\u01B0u"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzData", ctx.dept.filteredRows())("nzLoading", ctx.dept.loading())("nzPageSize", 10)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", espTotalTpl_r54)("nzScroll", \u0275\u0275pureFunction0(244, _c1));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.allCheckedOnPage("DEPT", deptTable_r15.data))("nzIndeterminate", ctx.someCheckedOnPage("DEPT", deptTable_r15.data));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(91, 153, "common.stt", "No."));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(94, 156, "evs.manage.viewEvsSchedulePanel.col.evsStep", "Giai \u0111o\u1EA1n th\u1EF1c hi\u1EC7n"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(97, 159, "evs.manage.viewEvsSchedulePanel.col.deptNo", "M\xE3 ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(100, 162, "evs.manage.viewEvsSchedulePanel.col.deptName", "T\xEAn ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(103, 165, "evs.manage.viewEvsSchedulePanel.col.deptType", "Lo\u1EA1i ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(106, 168, "evs.manage.viewEvsSchedulePanel.col.startDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(109, 171, "evs.manage.viewEvsSchedulePanel.col.endDate", "Ng\xE0y k\u1EBFt th\xFAc"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(112, 174, "evs.manage.viewEvsSchedulePanel.col.active", "S\u1EED d\u1EE5ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(115, 177, "evs.manage.viewEvsSchedulePanel.col.updatedBy", "Ng\u01B0\u1EDDi thay \u0111\u1ED5i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(118, 180, "evs.manage.viewEvsSchedulePanel.col.updateDate", "Th\u1EDDi gian thay \u0111\u1ED5i"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.dept.loading() && deptTable_r15.data.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", deptTable_r15.data);
      \u0275\u0275advance();
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(123, 183, "evs.viewEvsSchedulePanel.GERENRICHENG.a", "C\xE1 nh\xE2n"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.emp.filterText())("placeholder", \u0275\u0275pipeBind2(126, 186, "evs.manage.viewEvsSchedulePanel.filter.quickFilter", "L\u1ECDc nhanh"));
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(131, 189, "evs.manage.viewEvsSchedulePanel.btn.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(135, 192, "common.delete", "X\xF3a"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.emp.saving());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(139, 195, "common.save", "L\u01B0u"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzData", ctx.emp.filteredRows())("nzLoading", ctx.emp.loading())("nzPageSize", 10)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", espTotalTpl_r54)("nzScroll", \u0275\u0275pureFunction0(245, _c2));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.allCheckedOnPage("EMP", empTable_r32.data))("nzIndeterminate", ctx.someCheckedOnPage("EMP", empTable_r32.data));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(148, 198, "common.stt", "No."));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(151, 201, "evs.manage.viewEvsSchedulePanel.col.evsStep", "Giai \u0111o\u1EA1n th\u1EF1c hi\u1EC7n"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(154, 204, "evs.manage.viewEvsSchedulePanel.col.deptNo", "M\xE3 ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(157, 207, "evs.manage.viewEvsSchedulePanel.col.deptName", "T\xEAn ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(160, 210, "evs.manage.viewEvsSchedulePanel.col.postGradeNo", "M\xE3 ch\u1EE9c danh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(163, 213, "evs.manage.viewEvsSchedulePanel.col.postGradeName", "T\xEAn ch\u1EE9c danh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(166, 216, "evs.manage.viewEvsSchedulePanel.col.personId", "M\xE3 c\xE1 nh\xE2n"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(169, 219, "evs.manage.viewEvsSchedulePanel.col.startDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(172, 222, "evs.manage.viewEvsSchedulePanel.col.endDate", "Ng\xE0y k\u1EBFt th\xFAc"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(175, 225, "evs.manage.viewEvsSchedulePanel.col.active", "S\u1EED d\u1EE5ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(178, 228, "evs.manage.viewEvsSchedulePanel.col.updatedBy", "Ng\u01B0\u1EDDi thay \u0111\u1ED5i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(181, 231, "evs.manage.viewEvsSchedulePanel.col.updateDate", "Th\u1EDDi gian thay \u0111\u1ED5i"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.emp.loading() && empTable_r32.data.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", empTable_r32.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(188, 234, "evs.manage.viewEvsSchedulePanel.modal.deleteTitle", "X\xE1c nh\u1EADn x\xF3a"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(189, 237, "common.delete", "X\xF3a"))("nzCancelText", \u0275\u0275pipeBind2(190, 240, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzTabsModule, NzTabsComponent, NzTabComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzDatePickerModule, NzDatePickerComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzCheckboxModule, NzCheckboxComponent, NzModalModule, NzModalComponent, NzModalContentDirective, TranslatePipe], styles: ["\n  .esp-row-edit {\n  background-color: #fffde7 !important;\n  cursor: default;\n}\n  tr:not(.esp-row-edit) {\n  cursor: pointer;\n}\n  .esp-row-new td {\n  font-style: italic;\n}\n/*# sourceMappingURL=evs-schedule-panel.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EvsSchedulePanelComponent, [{
    type: Component,
    args: [{ selector: "app-evs-schedule-panel", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzTabsModule,
      NzInputModule,
      NzSelectModule,
      NzDatePickerModule,
      NzButtonModule,
      NzCheckboxModule,
      NzModalModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="d-flex align-items-end gap-3 flex-wrap" (ngSubmit)="search()">
        <div style="min-width:280px;">
          <label class="form-label">{{ 'evs.manage.viewEvsSchedulePanel.search.evaluationName' | translate:'T\xEAn \u0111\xE1nh gi\xE1' }}</label>
          <nz-select class="w-100" [(ngModel)]="resumeSeq" name="espResumeSeq"
                     [nzPlaceHolder]="'evs.manage.viewEvsSchedulePanel.search.selectOption' | translate:'-- Ch\u1ECDn t\xEAn \u0111\xE1nh gi\xE1 --'">
            <nz-option *ngFor="let r of resumeOptions()" [nzValue]="r.seq" [nzLabel]="r.resumeName"></nz-option>
          </nz-select>
        </div>
        <button nz-button nzType="primary" type="submit">
          <i class="bx bx-search"></i> {{ 'evs.manage.viewEvsSchedulePanel.btn.search' | translate:'Tra c\u1EE9u' }}
        </button>
      </form>
    </nz-card>

    <nz-card>
      <nz-tabs>
        <!-- \u2500\u2500 Tab C\xF4ng ty \u2500\u2500 -->
        <nz-tab [nzTitle]="'evs.viewEvsSchedulePanel.GONGSIRICHENG.a' | translate:'C\xF4ng ty'">
          <div class="d-flex align-items-center justify-content-between mt-2 mb-2 flex-wrap gap-2">
            <input nz-input style="width:200px;" [ngModel]="cpny.filterText()" (ngModelChange)="onFilterChange('CPNY', $event)"
                   [placeholder]="'evs.manage.viewEvsSchedulePanel.filter.quickFilter' | translate:'L\u1ECDc nhanh'">
            <div class="d-flex align-items-center gap-2">
              <button nz-button nzType="primary" nzSize="small" type="button" (click)="addRow('CPNY')">
                <i class="bx bx-plus"></i> {{ 'evs.manage.viewEvsSchedulePanel.btn.addNew' | translate:'Th\xEAm m\u1EDBi' }}
              </button>
              <button nz-button nzDanger nzSize="small" type="button" (click)="openDeleteConfirm('CPNY')">
                <i class="bx bx-trash"></i> {{ 'common.delete' | translate:'X\xF3a' }}
              </button>
              <button nz-button nzType="primary" nzSize="small" type="button" [nzLoading]="cpny.saving()" (click)="saveTab('CPNY')">
                <i class="bx bx-save"></i> {{ 'common.save' | translate:'L\u01B0u' }}
              </button>
            </div>
          </div>

          <nz-table [nzData]="cpny.filteredRows()" [nzLoading]="cpny.loading()" [nzPageSize]="10" [nzShowSizeChanger]="true"
                    [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="espTotalTpl"
                    [nzScroll]="{ x: '900px' }" #cpnyTable="nzTable">
            <thead>
              <tr>
                <th class="text-center" nzWidth="40px">
                  <label nz-checkbox [ngModel]="allCheckedOnPage('CPNY', cpnyTable.data)"
                         [nzIndeterminate]="someCheckedOnPage('CPNY', cpnyTable.data)"
                         (ngModelChange)="toggleAllOnPage('CPNY', cpnyTable.data, $event)"></label>
                </th>
                <th class="text-center" nzWidth="50px">{{ 'common.stt' | translate:'No.' }}</th>
                <th nzWidth="220px">{{ 'evs.manage.viewEvsSchedulePanel.col.evsStep' | translate:'Giai \u0111o\u1EA1n th\u1EF1c hi\u1EC7n' }}</th>
                <th class="text-center" nzWidth="130px">{{ 'evs.manage.viewEvsSchedulePanel.col.startDate' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u' }}</th>
                <th class="text-center" nzWidth="130px">{{ 'evs.manage.viewEvsSchedulePanel.col.endDate' | translate:'Ng\xE0y k\u1EBFt th\xFAc' }}</th>
                <th class="text-center" nzWidth="80px">{{ 'evs.manage.viewEvsSchedulePanel.col.active' | translate:'S\u1EED d\u1EE5ng' }}</th>
                <th nzWidth="220px">{{ 'evs.manage.viewEvsSchedulePanel.col.updatedBy' | translate:'Ng\u01B0\u1EDDi thay \u0111\u1ED5i' }}</th>
                <th class="text-center" nzWidth="120px">{{ 'evs.manage.viewEvsSchedulePanel.col.updateDate' | translate:'Th\u1EDDi gian thay \u0111\u1ED5i' }}</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngIf="!cpny.loading() && cpnyTable.data.length === 0">
                <td colspan="8" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
              </tr>
              <tr *ngFor="let row of cpnyTable.data; let i = index"
                  [class.esp-row-edit]="row.editing" [class.esp-row-new]="row.isNew" (click)="rowClick('CPNY', row)">
                <td class="text-center" (click)="$event.stopPropagation()">
                  <label nz-checkbox [ngModel]="isChecked('CPNY', row)" (ngModelChange)="toggleChecked('CPNY', row, $event)"></label>
                </td>
                <td class="text-center">{{ i + 1 }}</td>
                <td (click)="$event.stopPropagation()">
                  <nz-select *ngIf="row.editing; else cpnyStepView" class="w-100" [(ngModel)]="row.evsStep"
                             (ngModelChange)="onEvsStepChange(row, $event)"
                             [nzPlaceHolder]="'common.select' | translate:'-- Ch\u1ECDn --'">
                    <nz-option *ngFor="let o of evsStepOptions()" [nzValue]="o.codeNo" [nzLabel]="o.codeName"></nz-option>
                  </nz-select>
                  <ng-template #cpnyStepView>{{ evsStepLabel(row) }}</ng-template>
                </td>
                <td class="text-center" (click)="$event.stopPropagation()">
                  <nz-date-picker *ngIf="row.editing; else cpnyStartView" [(ngModel)]="row.startDateObj" nzFormat="dd/MM/yyyy"></nz-date-picker>
                  <ng-template #cpnyStartView>{{ toDmy(row.startDate) }}</ng-template>
                </td>
                <td class="text-center" (click)="$event.stopPropagation()">
                  <nz-date-picker *ngIf="row.editing; else cpnyEndView" [(ngModel)]="row.endDateObj" nzFormat="dd/MM/yyyy"></nz-date-picker>
                  <ng-template #cpnyEndView>{{ toDmy(row.endDate) }}</ng-template>
                </td>
                <td class="text-center" (click)="$event.stopPropagation()">
                  <label nz-checkbox [ngModel]="isActive(row)" [nzDisabled]="!row.editing" (ngModelChange)="setActive(row, $event)"></label>
                </td>
                <td class="small">{{ row.updatedBy }}</td>
                <td class="text-center small">{{ toDmy(row.updateDate) }}</td>
              </tr>
            </tbody>
          </nz-table>
        </nz-tab>

        <!-- \u2500\u2500 Tab Ph\xF2ng ban \u2500\u2500 -->
        <nz-tab [nzTitle]="'evs.viewEvsSchedulePanel.BUMENRICHENG.a' | translate:'Ph\xF2ng ban'">
          <div class="d-flex align-items-center justify-content-between mt-2 mb-2 flex-wrap gap-2">
            <input nz-input style="width:200px;" [ngModel]="dept.filterText()" (ngModelChange)="onFilterChange('DEPT', $event)"
                   [placeholder]="'evs.manage.viewEvsSchedulePanel.filter.quickFilter' | translate:'L\u1ECDc nhanh'">
            <div class="d-flex align-items-center gap-2">
              <button nz-button nzType="primary" nzSize="small" type="button" (click)="addRow('DEPT')">
                <i class="bx bx-plus"></i> {{ 'evs.manage.viewEvsSchedulePanel.btn.addNew' | translate:'Th\xEAm m\u1EDBi' }}
              </button>
              <button nz-button nzDanger nzSize="small" type="button" (click)="openDeleteConfirm('DEPT')">
                <i class="bx bx-trash"></i> {{ 'common.delete' | translate:'X\xF3a' }}
              </button>
              <button nz-button nzType="primary" nzSize="small" type="button" [nzLoading]="dept.saving()" (click)="saveTab('DEPT')">
                <i class="bx bx-save"></i> {{ 'common.save' | translate:'L\u01B0u' }}
              </button>
            </div>
          </div>

          <nz-table [nzData]="dept.filteredRows()" [nzLoading]="dept.loading()" [nzPageSize]="10" [nzShowSizeChanger]="true"
                    [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="espTotalTpl"
                    [nzScroll]="{ x: '1150px' }" #deptTable="nzTable">
            <thead>
              <tr>
                <th class="text-center" nzWidth="40px">
                  <label nz-checkbox [ngModel]="allCheckedOnPage('DEPT', deptTable.data)"
                         [nzIndeterminate]="someCheckedOnPage('DEPT', deptTable.data)"
                         (ngModelChange)="toggleAllOnPage('DEPT', deptTable.data, $event)"></label>
                </th>
                <th class="text-center" nzWidth="50px">{{ 'common.stt' | translate:'No.' }}</th>
                <th nzWidth="200px">{{ 'evs.manage.viewEvsSchedulePanel.col.evsStep' | translate:'Giai \u0111o\u1EA1n th\u1EF1c hi\u1EC7n' }}</th>
                <th class="text-center" nzWidth="110px">{{ 'evs.manage.viewEvsSchedulePanel.col.deptNo' | translate:'M\xE3 ph\xF2ng ban' }}</th>
                <th nzWidth="170px">{{ 'evs.manage.viewEvsSchedulePanel.col.deptName' | translate:'T\xEAn ph\xF2ng ban' }}</th>
                <th class="text-center" nzWidth="120px">{{ 'evs.manage.viewEvsSchedulePanel.col.deptType' | translate:'Lo\u1EA1i ph\xF2ng ban' }}</th>
                <th class="text-center" nzWidth="130px">{{ 'evs.manage.viewEvsSchedulePanel.col.startDate' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u' }}</th>
                <th class="text-center" nzWidth="130px">{{ 'evs.manage.viewEvsSchedulePanel.col.endDate' | translate:'Ng\xE0y k\u1EBFt th\xFAc' }}</th>
                <th class="text-center" nzWidth="80px">{{ 'evs.manage.viewEvsSchedulePanel.col.active' | translate:'S\u1EED d\u1EE5ng' }}</th>
                <th nzWidth="200px">{{ 'evs.manage.viewEvsSchedulePanel.col.updatedBy' | translate:'Ng\u01B0\u1EDDi thay \u0111\u1ED5i' }}</th>
                <th class="text-center" nzWidth="120px">{{ 'evs.manage.viewEvsSchedulePanel.col.updateDate' | translate:'Th\u1EDDi gian thay \u0111\u1ED5i' }}</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngIf="!dept.loading() && deptTable.data.length === 0">
                <td colspan="10" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
              </tr>
              <tr *ngFor="let row of deptTable.data; let i = index"
                  [class.esp-row-edit]="row.editing" [class.esp-row-new]="row.isNew" (click)="rowClick('DEPT', row)">
                <td class="text-center" (click)="$event.stopPropagation()">
                  <label nz-checkbox [ngModel]="isChecked('DEPT', row)" (ngModelChange)="toggleChecked('DEPT', row, $event)"></label>
                </td>
                <td class="text-center">{{ i + 1 }}</td>
                <td (click)="$event.stopPropagation()">
                  <nz-select *ngIf="row.editing; else deptStepView" class="w-100" [(ngModel)]="row.evsStep"
                             (ngModelChange)="onEvsStepChange(row, $event)"
                             [nzPlaceHolder]="'common.select' | translate:'-- Ch\u1ECDn --'">
                    <nz-option *ngFor="let o of evsStepOptions()" [nzValue]="o.codeNo" [nzLabel]="o.codeName"></nz-option>
                  </nz-select>
                  <ng-template #deptStepView>{{ evsStepLabel(row) }}</ng-template>
                </td>
                <td class="text-center" (click)="$event.stopPropagation()">
                  <input *ngIf="row.editing; else deptNoView" nz-input [(ngModel)]="row.deptNo" maxlength="20">
                  <ng-template #deptNoView>{{ row.deptNo }}</ng-template>
                </td>
                <td (click)="$event.stopPropagation()">
                  <input *ngIf="row.editing; else deptNameView" nz-input [(ngModel)]="row.deptName" maxlength="60">
                  <ng-template #deptNameView>{{ row.deptName }}</ng-template>
                </td>
                <td class="text-center" (click)="$event.stopPropagation()">
                  <input *ngIf="row.editing; else deptTypeView" nz-input [(ngModel)]="row.deptType" maxlength="20">
                  <ng-template #deptTypeView>{{ row.deptType }}</ng-template>
                </td>
                <td class="text-center" (click)="$event.stopPropagation()">
                  <nz-date-picker *ngIf="row.editing; else deptStartView" [(ngModel)]="row.startDateObj" nzFormat="dd/MM/yyyy"></nz-date-picker>
                  <ng-template #deptStartView>{{ toDmy(row.startDate) }}</ng-template>
                </td>
                <td class="text-center" (click)="$event.stopPropagation()">
                  <nz-date-picker *ngIf="row.editing; else deptEndView" [(ngModel)]="row.endDateObj" nzFormat="dd/MM/yyyy"></nz-date-picker>
                  <ng-template #deptEndView>{{ toDmy(row.endDate) }}</ng-template>
                </td>
                <td class="text-center" (click)="$event.stopPropagation()">
                  <label nz-checkbox [ngModel]="isActive(row)" [nzDisabled]="!row.editing" (ngModelChange)="setActive(row, $event)"></label>
                </td>
                <td class="small">{{ row.updatedBy }}</td>
                <td class="text-center small">{{ toDmy(row.updateDate) }}</td>
              </tr>
            </tbody>
          </nz-table>
        </nz-tab>

        <!-- \u2500\u2500 Tab C\xE1 nh\xE2n \u2500\u2500 -->
        <nz-tab [nzTitle]="'evs.viewEvsSchedulePanel.GERENRICHENG.a' | translate:'C\xE1 nh\xE2n'">
          <div class="d-flex align-items-center justify-content-between mt-2 mb-2 flex-wrap gap-2">
            <input nz-input style="width:200px;" [ngModel]="emp.filterText()" (ngModelChange)="onFilterChange('EMP', $event)"
                   [placeholder]="'evs.manage.viewEvsSchedulePanel.filter.quickFilter' | translate:'L\u1ECDc nhanh'">
            <div class="d-flex align-items-center gap-2">
              <button nz-button nzType="primary" nzSize="small" type="button" (click)="addRow('EMP')">
                <i class="bx bx-plus"></i> {{ 'evs.manage.viewEvsSchedulePanel.btn.addNew' | translate:'Th\xEAm m\u1EDBi' }}
              </button>
              <button nz-button nzDanger nzSize="small" type="button" (click)="openDeleteConfirm('EMP')">
                <i class="bx bx-trash"></i> {{ 'common.delete' | translate:'X\xF3a' }}
              </button>
              <button nz-button nzType="primary" nzSize="small" type="button" [nzLoading]="emp.saving()" (click)="saveTab('EMP')">
                <i class="bx bx-save"></i> {{ 'common.save' | translate:'L\u01B0u' }}
              </button>
            </div>
          </div>

          <nz-table [nzData]="emp.filteredRows()" [nzLoading]="emp.loading()" [nzPageSize]="10" [nzShowSizeChanger]="true"
                    [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="espTotalTpl"
                    [nzScroll]="{ x: '1400px' }" #empTable="nzTable">
            <thead>
              <tr>
                <th class="text-center" nzWidth="40px">
                  <label nz-checkbox [ngModel]="allCheckedOnPage('EMP', empTable.data)"
                         [nzIndeterminate]="someCheckedOnPage('EMP', empTable.data)"
                         (ngModelChange)="toggleAllOnPage('EMP', empTable.data, $event)"></label>
                </th>
                <th class="text-center" nzWidth="50px">{{ 'common.stt' | translate:'No.' }}</th>
                <th nzWidth="200px">{{ 'evs.manage.viewEvsSchedulePanel.col.evsStep' | translate:'Giai \u0111o\u1EA1n th\u1EF1c hi\u1EC7n' }}</th>
                <th class="text-center" nzWidth="110px">{{ 'evs.manage.viewEvsSchedulePanel.col.deptNo' | translate:'M\xE3 ph\xF2ng ban' }}</th>
                <th nzWidth="150px">{{ 'evs.manage.viewEvsSchedulePanel.col.deptName' | translate:'T\xEAn ph\xF2ng ban' }}</th>
                <th class="text-center" nzWidth="110px">{{ 'evs.manage.viewEvsSchedulePanel.col.postGradeNo' | translate:'M\xE3 ch\u1EE9c danh' }}</th>
                <th nzWidth="150px">{{ 'evs.manage.viewEvsSchedulePanel.col.postGradeName' | translate:'T\xEAn ch\u1EE9c danh' }}</th>
                <th class="text-center" nzWidth="120px">{{ 'evs.manage.viewEvsSchedulePanel.col.personId' | translate:'M\xE3 c\xE1 nh\xE2n' }}</th>
                <th class="text-center" nzWidth="130px">{{ 'evs.manage.viewEvsSchedulePanel.col.startDate' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u' }}</th>
                <th class="text-center" nzWidth="130px">{{ 'evs.manage.viewEvsSchedulePanel.col.endDate' | translate:'Ng\xE0y k\u1EBFt th\xFAc' }}</th>
                <th class="text-center" nzWidth="80px">{{ 'evs.manage.viewEvsSchedulePanel.col.active' | translate:'S\u1EED d\u1EE5ng' }}</th>
                <th nzWidth="200px">{{ 'evs.manage.viewEvsSchedulePanel.col.updatedBy' | translate:'Ng\u01B0\u1EDDi thay \u0111\u1ED5i' }}</th>
                <th class="text-center" nzWidth="120px">{{ 'evs.manage.viewEvsSchedulePanel.col.updateDate' | translate:'Th\u1EDDi gian thay \u0111\u1ED5i' }}</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngIf="!emp.loading() && empTable.data.length === 0">
                <td colspan="12" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
              </tr>
              <tr *ngFor="let row of empTable.data; let i = index"
                  [class.esp-row-edit]="row.editing" [class.esp-row-new]="row.isNew" (click)="rowClick('EMP', row)">
                <td class="text-center" (click)="$event.stopPropagation()">
                  <label nz-checkbox [ngModel]="isChecked('EMP', row)" (ngModelChange)="toggleChecked('EMP', row, $event)"></label>
                </td>
                <td class="text-center">{{ i + 1 }}</td>
                <td (click)="$event.stopPropagation()">
                  <nz-select *ngIf="row.editing; else empStepView" class="w-100" [(ngModel)]="row.evsStep"
                             (ngModelChange)="onEvsStepChange(row, $event)"
                             [nzPlaceHolder]="'common.select' | translate:'-- Ch\u1ECDn --'">
                    <nz-option *ngFor="let o of evsStepOptions()" [nzValue]="o.codeNo" [nzLabel]="o.codeName"></nz-option>
                  </nz-select>
                  <ng-template #empStepView>{{ evsStepLabel(row) }}</ng-template>
                </td>
                <td class="text-center" (click)="$event.stopPropagation()">
                  <input *ngIf="row.editing; else empDeptNoView" nz-input [(ngModel)]="row.deptNo" maxlength="20">
                  <ng-template #empDeptNoView>{{ row.deptNo }}</ng-template>
                </td>
                <td (click)="$event.stopPropagation()">
                  <input *ngIf="row.editing; else empDeptNameView" nz-input [(ngModel)]="row.deptName" maxlength="60">
                  <ng-template #empDeptNameView>{{ row.deptName }}</ng-template>
                </td>
                <td class="text-center" (click)="$event.stopPropagation()">
                  <input *ngIf="row.editing; else postGradeNoView" nz-input [(ngModel)]="row.postGradeNo" maxlength="20">
                  <ng-template #postGradeNoView>{{ row.postGradeNo }}</ng-template>
                </td>
                <td (click)="$event.stopPropagation()">
                  <input *ngIf="row.editing; else postGradeNameView" nz-input [(ngModel)]="row.postGradeName" maxlength="60">
                  <ng-template #postGradeNameView>{{ row.postGradeName }}</ng-template>
                </td>
                <td class="text-center" (click)="$event.stopPropagation()">
                  <input *ngIf="row.editing; else personIdView" nz-input [(ngModel)]="row.personId" maxlength="20">
                  <ng-template #personIdView>{{ row.personId }}</ng-template>
                </td>
                <td class="text-center" (click)="$event.stopPropagation()">
                  <nz-date-picker *ngIf="row.editing; else empStartView" [(ngModel)]="row.startDateObj" nzFormat="dd/MM/yyyy"></nz-date-picker>
                  <ng-template #empStartView>{{ toDmy(row.startDate) }}</ng-template>
                </td>
                <td class="text-center" (click)="$event.stopPropagation()">
                  <nz-date-picker *ngIf="row.editing; else empEndView" [(ngModel)]="row.endDateObj" nzFormat="dd/MM/yyyy"></nz-date-picker>
                  <ng-template #empEndView>{{ toDmy(row.endDate) }}</ng-template>
                </td>
                <td class="text-center" (click)="$event.stopPropagation()">
                  <label nz-checkbox [ngModel]="isActive(row)" [nzDisabled]="!row.editing" (ngModelChange)="setActive(row, $event)"></label>
                </td>
                <td class="small">{{ row.updatedBy }}</td>
                <td class="text-center small">{{ toDmy(row.updateDate) }}</td>
              </tr>
            </tbody>
          </nz-table>
        </nz-tab>
      </nz-tabs>
    </nz-card>
  </div>
</div>

<ng-template #espTotalTpl let-total>
  {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
</ng-template>

<!-- Modal x\xE1c nh\u1EADn x\xF3a -->
<nz-modal [nzVisible]="deleteVisible()" [nzTitle]="'evs.manage.viewEvsSchedulePanel.modal.deleteTitle' | translate:'X\xE1c nh\u1EADn x\xF3a'"
          (nzOnCancel)="closeDeleteConfirm()" (nzOnOk)="confirmDelete()" [nzOkLoading]="deleting()"
          [nzOkText]="'common.delete' | translate:'X\xF3a'" nzOkDanger
          [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'">
  <ng-container *nzModalContent>
    <p class="mb-0">
      {{ 'evs.manage.viewEvsSchedulePanel.modal.deletePrefix' | translate:'B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a' }}
      <strong>{{ pendingDeleteCount }}</strong>
      {{ 'evs.manage.viewEvsSchedulePanel.modal.deleteSuffix' | translate:'d\xF2ng \u0111\xE3 ch\u1ECDn?' }}
    </p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/evs-schedule-panel/evs-schedule-panel.component.css */\n::ng-deep .esp-row-edit {\n  background-color: #fffde7 !important;\n  cursor: default;\n}\n::ng-deep tr:not(.esp-row-edit) {\n  cursor: pointer;\n}\n::ng-deep .esp-row-new td {\n  font-style: italic;\n}\n/*# sourceMappingURL=evs-schedule-panel.component.css.map */\n"] }]
  }], () => [{ type: EvsSchedulePanelService }, { type: I18nService }, { type: NzMessageService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EvsSchedulePanelComponent, { className: "EvsSchedulePanelComponent", filePath: "src/app/evs-schedule-panel/evs-schedule-panel.component.ts", lineNumber: 138 });
})();
export {
  EvsSchedulePanelComponent
};
//# debugId=50dcd902-22ba-55d3-8681-14845b0879c4
//# sourceMappingURL=chunk-AFFCG7WW.js.map
