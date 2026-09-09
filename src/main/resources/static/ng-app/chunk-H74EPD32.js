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
  __spreadProps,
  __spreadValues,
  computed,
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

// src/app/evs-param-panel/evs-param-panel.service.ts
var API_BASE = "/evs/manage/api";
var EvsParamPanelService = class _EvsParamPanelService {
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
  getList(api, resumeSeq, evsType, paramType) {
    let params = new HttpParams().set("resumeSeq", resumeSeq).set("evsType", evsType);
    if (paramType)
      params = params.set("paramType", paramType);
    return this.http.get(`${API_BASE}/${api}/list`, { params, withCredentials: true });
  }
  saveBatch(api, payload) {
    return this.http.post(`${API_BASE}/${api}/save`, payload, { withCredentials: true });
  }
  deleteBatch(api, seqs) {
    return this.http.post(`${API_BASE}/${api}/delete`, { seqs }, { withCredentials: true });
  }
  /** Combo "Nhóm nhân viên" cho tab Người đánh giá - phụ thuộc resumeSeq đang chọn (chỉ lấy nhóm đã lưu
   *  của đúng đợt đánh giá đó, xem selectGroupOptions trong EvsParamMapper.xml). */
  getGroupOptions(resumeSeq) {
    return this.http.get(`${API_BASE}/evsParam/groupOptions`, {
      params: new HttpParams().set("resumeSeq", resumeSeq),
      withCredentials: true
    });
  }
  /** Combo "Hình thức tiêu chuẩn" dùng chung cho tab Đối tượng đánh giá/Bảng đánh giá/Nhóm nhân viên/
   *  Nhóm chức vụ - load 1 lần, không phụ thuộc resumeSeq. */
  getFormulaOptions() {
    return this.http.get(`${API_BASE}/evsFormula/formulaOptions`, { withCredentials: true });
  }
  /** Combo mã hệ thống dùng chung (Loại ĐG=14015137, Cấp ĐG=14015161, Bước bắt đầu=14015351,
   *  Giai đoạn=14015060, ID quy tắc=14015172 - đúng giá trị hardcode data-parent-code ở bản gốc). */
  getCodeList(parentCodeNo) {
    return this.http.get("/sys/api/getCode/list", {
      params: new HttpParams().set("parentCodeNo", parentCodeNo),
      withCredentials: true
    });
  }
  static \u0275fac = function EvsParamPanelService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EvsParamPanelService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EvsParamPanelService, factory: _EvsParamPanelService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EvsParamPanelService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/evs-param-panel/evs-param-panel.component.ts
var _c0 = () => ({ x: "1100px" });
var _c1 = () => ({ x: "700px" });
var _c2 = () => ({ x: "1150px" });
var _c3 = () => ({ x: "950px" });
function EvsParamPanelComponent_nz_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 72);
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    \u0275\u0275property("nzValue", r_r2.seq)("nzLabel", r_r2.resumeName);
  }
}
function EvsParamPanelComponent_tr_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 73);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function EvsParamPanelComponent_tr_73_nz_select_6_nz_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 72);
  }
  if (rf & 2) {
    const o_r8 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r8.codeNo)("nzLabel", o_r8.codeName);
  }
}
function EvsParamPanelComponent_tr_73_nz_select_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-select", 84);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EvsParamPanelComponent_tr_73_nz_select_6_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const row_r5 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r5.evsType, $event) || (row_r5.evsType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EvsParamPanelComponent_tr_73_nz_select_6_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const row_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onEvsTypeChange(row_r5, $event));
    });
    \u0275\u0275template(2, EvsParamPanelComponent_tr_73_nz_select_6_nz_option_2_Template, 1, 2, "nz-option", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", row_r5.evsType);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(1, 3, "evsParam.js.defaultSelect", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r5.evalTypeOptions());
  }
}
function EvsParamPanelComponent_tr_73_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r5.evsTypeName || row_r5.evsType);
  }
}
function EvsParamPanelComponent_tr_73_nz_select_10_nz_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 72);
  }
  if (rf & 2) {
    const o_r10 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r10.codeNo)("nzLabel", o_r10.description || o_r10.codeName);
  }
}
function EvsParamPanelComponent_tr_73_nz_select_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-select", 84);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EvsParamPanelComponent_tr_73_nz_select_10_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const row_r5 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r5.evsGrade, $event) || (row_r5.evsGrade = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EvsParamPanelComponent_tr_73_nz_select_10_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const row_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onEvsGradeChange(row_r5, $event));
    });
    \u0275\u0275template(2, EvsParamPanelComponent_tr_73_nz_select_10_nz_option_2_Template, 1, 2, "nz-option", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", row_r5.evsGrade);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(1, 3, "evsParam.js.defaultSelect", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r5.evalGradeOptions());
  }
}
function EvsParamPanelComponent_tr_73_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r5.evsGradeName || row_r5.evsGrade);
  }
}
function EvsParamPanelComponent_tr_73_input_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 85);
    \u0275\u0275twoWayListener("ngModelChange", function EvsParamPanelComponent_tr_73_input_16_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const row_r5 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r5.startScore, $event) || (row_r5.startScore = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r5.startScore);
    \u0275\u0275control();
  }
}
function EvsParamPanelComponent_tr_73_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r5.startScore);
  }
}
function EvsParamPanelComponent_tr_73_input_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 85);
    \u0275\u0275twoWayListener("ngModelChange", function EvsParamPanelComponent_tr_73_input_20_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const row_r5 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r5.endScore, $event) || (row_r5.endScore = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r5.endScore);
    \u0275\u0275control();
  }
}
function EvsParamPanelComponent_tr_73_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r5.endScore);
  }
}
function EvsParamPanelComponent_tr_73_input_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 85);
    \u0275\u0275twoWayListener("ngModelChange", function EvsParamPanelComponent_tr_73_input_24_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const row_r5 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r5.score, $event) || (row_r5.score = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r5.score);
    \u0275\u0275control();
  }
}
function EvsParamPanelComponent_tr_73_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r5.score);
  }
}
function EvsParamPanelComponent_tr_73_input_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 86);
    \u0275\u0275twoWayListener("ngModelChange", function EvsParamPanelComponent_tr_73_input_28_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const row_r5 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r5.remark, $event) || (row_r5.remark = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r5.remark);
    \u0275\u0275control();
  }
}
function EvsParamPanelComponent_tr_73_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r5.remark);
  }
}
function EvsParamPanelComponent_tr_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 74);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_73_Template_tr_click_0_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.rowClick("grade", row_r5));
    });
    \u0275\u0275elementStart(1, "td", 75);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_73_Template_td_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "label", 76);
    \u0275\u0275listener("ngModelChange", function EvsParamPanelComponent_tr_73_Template_label_ngModelChange_2_listener($event) {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.toggleChecked("grade", row_r5, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 77);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 74);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_73_Template_td_click_5_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(6, EvsParamPanelComponent_tr_73_nz_select_6_Template, 3, 6, "nz-select", 78)(7, EvsParamPanelComponent_tr_73_ng_template_7_Template, 1, 1, "ng-template", null, 8, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 74);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_73_Template_td_click_9_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(10, EvsParamPanelComponent_tr_73_nz_select_10_Template, 3, 6, "nz-select", 78)(11, EvsParamPanelComponent_tr_73_ng_template_11_Template, 1, 1, "ng-template", null, 9, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 75);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_73_Template_td_click_13_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(14, "label", 79);
    \u0275\u0275listener("ngModelChange", function EvsParamPanelComponent_tr_73_Template_label_ngModelChange_14_listener($event) {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.setIncludeOn(row_r5, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 75);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_73_Template_td_click_15_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(16, EvsParamPanelComponent_tr_73_input_16_Template, 1, 1, "input", 80)(17, EvsParamPanelComponent_tr_73_ng_template_17_Template, 1, 1, "ng-template", null, 10, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 75);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_73_Template_td_click_19_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(20, EvsParamPanelComponent_tr_73_input_20_Template, 1, 1, "input", 80)(21, EvsParamPanelComponent_tr_73_ng_template_21_Template, 1, 1, "ng-template", null, 11, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 75);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_73_Template_td_click_23_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(24, EvsParamPanelComponent_tr_73_input_24_Template, 1, 1, "input", 80)(25, EvsParamPanelComponent_tr_73_ng_template_25_Template, 1, 1, "ng-template", null, 12, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td", 74);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_73_Template_td_click_27_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(28, EvsParamPanelComponent_tr_73_input_28_Template, 1, 1, "input", 81)(29, EvsParamPanelComponent_tr_73_ng_template_29_Template, 1, 1, "ng-template", null, 13, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td", 82);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "td", 83);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const i_r15 = ctx.index;
    const evalTypeView_r16 = \u0275\u0275reference(8);
    const evalGradeView_r17 = \u0275\u0275reference(12);
    const startScoreView_r18 = \u0275\u0275reference(18);
    const endScoreView_r19 = \u0275\u0275reference(22);
    const scoreView_r20 = \u0275\u0275reference(26);
    const remarkView_r21 = \u0275\u0275reference(30);
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("epp-row-edit", row_r5.editing)("epp-row-new", row_r5.isNew);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r5.isChecked("grade", row_r5));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r15 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r5.editing)("ngIfElse", evalTypeView_r16);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r5.editing)("ngIfElse", evalGradeView_r17);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r5.isIncludeOn(row_r5))("nzDisabled", !row_r5.editing);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r5.editing)("ngIfElse", startScoreView_r18);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r5.editing)("ngIfElse", endScoreView_r19);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r5.editing)("ngIfElse", scoreView_r20);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r5.editing)("ngIfElse", remarkView_r21);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r5.updatedBy);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r5.toDmy(row_r5.updateDate));
  }
}
function EvsParamPanelComponent_tr_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 87);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function EvsParamPanelComponent_tr_118_input_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 90);
    \u0275\u0275twoWayListener("ngModelChange", function EvsParamPanelComponent_tr_118_input_6_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r25);
      const row_r24 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r24.codeNo, $event) || (row_r24.codeNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r24.codeNo);
    \u0275\u0275control();
  }
}
function EvsParamPanelComponent_tr_118_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r24.codeNo);
  }
}
function EvsParamPanelComponent_tr_118_input_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 91);
    \u0275\u0275twoWayListener("ngModelChange", function EvsParamPanelComponent_tr_118_input_10_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r26);
      const row_r24 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r24.codeName, $event) || (row_r24.codeName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r24.codeName);
    \u0275\u0275control();
  }
}
function EvsParamPanelComponent_tr_118_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r24.codeName);
  }
}
function EvsParamPanelComponent_tr_118_input_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 85);
    \u0275\u0275twoWayListener("ngModelChange", function EvsParamPanelComponent_tr_118_input_14_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r27);
      const row_r24 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r24.evsScore, $event) || (row_r24.evsScore = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r24.evsScore);
    \u0275\u0275control();
  }
}
function EvsParamPanelComponent_tr_118_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r24.evsScore);
  }
}
function EvsParamPanelComponent_tr_118_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 74);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_118_Template_tr_click_0_listener() {
      const row_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.rowClick("item", row_r24));
    });
    \u0275\u0275elementStart(1, "td", 75);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_118_Template_td_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "label", 76);
    \u0275\u0275listener("ngModelChange", function EvsParamPanelComponent_tr_118_Template_label_ngModelChange_2_listener($event) {
      const row_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.toggleChecked("item", row_r24, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 77);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 74);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_118_Template_td_click_5_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(6, EvsParamPanelComponent_tr_118_input_6_Template, 1, 1, "input", 88)(7, EvsParamPanelComponent_tr_118_ng_template_7_Template, 1, 1, "ng-template", null, 14, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 74);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_118_Template_td_click_9_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(10, EvsParamPanelComponent_tr_118_input_10_Template, 1, 1, "input", 89)(11, EvsParamPanelComponent_tr_118_ng_template_11_Template, 1, 1, "ng-template", null, 15, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 75);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_118_Template_td_click_13_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(14, EvsParamPanelComponent_tr_118_input_14_Template, 1, 1, "input", 80)(15, EvsParamPanelComponent_tr_118_ng_template_15_Template, 1, 1, "ng-template", null, 16, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 82);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 83);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r24 = ctx.$implicit;
    const i_r28 = ctx.index;
    const itemCodeNoView_r29 = \u0275\u0275reference(8);
    const itemCodeNameView_r30 = \u0275\u0275reference(12);
    const itemScoreView_r31 = \u0275\u0275reference(16);
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("epp-row-edit", row_r24.editing)("epp-row-new", row_r24.isNew);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r5.isChecked("item", row_r24));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r28 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r24.editing)("ngIfElse", itemCodeNoView_r29);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r24.editing)("ngIfElse", itemCodeNameView_r30);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r24.editing)("ngIfElse", itemScoreView_r31);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r24.updatedBy);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r5.toDmy(row_r24.updateDate));
  }
}
function EvsParamPanelComponent_tr_168_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 92);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function EvsParamPanelComponent_tr_169_input_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 90);
    \u0275\u0275twoWayListener("ngModelChange", function EvsParamPanelComponent_tr_169_input_6_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r35);
      const row_r34 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r34.codeNo, $event) || (row_r34.codeNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r34 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r34.codeNo);
    \u0275\u0275control();
  }
}
function EvsParamPanelComponent_tr_169_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r34 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r34.codeNo);
  }
}
function EvsParamPanelComponent_tr_169_input_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 91);
    \u0275\u0275twoWayListener("ngModelChange", function EvsParamPanelComponent_tr_169_input_10_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r36);
      const row_r34 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r34.codeName, $event) || (row_r34.codeName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r34 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r34.codeName);
    \u0275\u0275control();
  }
}
function EvsParamPanelComponent_tr_169_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r34 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r34.codeName);
  }
}
function EvsParamPanelComponent_tr_169_nz_select_16_nz_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 72);
  }
  if (rf & 2) {
    const o_r38 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r38.codeNo)("nzLabel", o_r38.description || o_r38.codeName);
  }
}
function EvsParamPanelComponent_tr_169_nz_select_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-select", 84);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EvsParamPanelComponent_tr_169_nz_select_16_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r37);
      const row_r34 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r34.evsGrade, $event) || (row_r34.evsGrade = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EvsParamPanelComponent_tr_169_nz_select_16_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r37);
      const row_r34 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onEvsGradeChange(row_r34, $event));
    });
    \u0275\u0275template(2, EvsParamPanelComponent_tr_169_nz_select_16_nz_option_2_Template, 1, 2, "nz-option", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r34 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", row_r34.evsGrade);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(1, 3, "evsParam.js.defaultSelect", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r5.evalGradeOptions());
  }
}
function EvsParamPanelComponent_tr_169_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r34 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r34.evsGradeName || row_r34.evsGrade);
  }
}
function EvsParamPanelComponent_tr_169_nz_select_20_nz_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 72);
  }
  if (rf & 2) {
    const o_r40 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r40.codeNo)("nzLabel", o_r40.codeName);
  }
}
function EvsParamPanelComponent_tr_169_nz_select_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-select", 84);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EvsParamPanelComponent_tr_169_nz_select_20_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r39);
      const row_r34 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r34.formula, $event) || (row_r34.formula = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EvsParamPanelComponent_tr_169_nz_select_20_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r39);
      const row_r34 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onFormulaChange(row_r34, $event));
    });
    \u0275\u0275template(2, EvsParamPanelComponent_tr_169_nz_select_20_nz_option_2_Template, 1, 2, "nz-option", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r34 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", row_r34.formula);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(1, 3, "evsParam.js.defaultSelect", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r5.formulaOptions());
  }
}
function EvsParamPanelComponent_tr_169_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r34 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate(ctx_r5.formulaLabel(row_r34.formula));
  }
}
function EvsParamPanelComponent_tr_169_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 74);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_169_Template_tr_click_0_listener() {
      const row_r34 = \u0275\u0275restoreView(_r33).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.rowClick("object", row_r34));
    });
    \u0275\u0275elementStart(1, "td", 75);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_169_Template_td_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "label", 76);
    \u0275\u0275listener("ngModelChange", function EvsParamPanelComponent_tr_169_Template_label_ngModelChange_2_listener($event) {
      const row_r34 = \u0275\u0275restoreView(_r33).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.toggleChecked("object", row_r34, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 77);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 74);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_169_Template_td_click_5_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(6, EvsParamPanelComponent_tr_169_input_6_Template, 1, 1, "input", 88)(7, EvsParamPanelComponent_tr_169_ng_template_7_Template, 1, 1, "ng-template", null, 17, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 74);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_169_Template_td_click_9_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(10, EvsParamPanelComponent_tr_169_input_10_Template, 1, 1, "input", 89)(11, EvsParamPanelComponent_tr_169_ng_template_11_Template, 1, 1, "ng-template", null, 18, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 75);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_169_Template_td_click_13_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(14, "label", 79);
    \u0275\u0275listener("ngModelChange", function EvsParamPanelComponent_tr_169_Template_label_ngModelChange_14_listener($event) {
      const row_r34 = \u0275\u0275restoreView(_r33).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.setIncludeOn(row_r34, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 74);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_169_Template_td_click_15_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(16, EvsParamPanelComponent_tr_169_nz_select_16_Template, 3, 6, "nz-select", 78)(17, EvsParamPanelComponent_tr_169_ng_template_17_Template, 1, 1, "ng-template", null, 19, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 74);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_169_Template_td_click_19_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(20, EvsParamPanelComponent_tr_169_nz_select_20_Template, 3, 6, "nz-select", 78)(21, EvsParamPanelComponent_tr_169_ng_template_21_Template, 1, 1, "ng-template", null, 20, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 82);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 83);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r34 = ctx.$implicit;
    const i_r41 = ctx.index;
    const objCodeNoView_r42 = \u0275\u0275reference(8);
    const objCodeNameView_r43 = \u0275\u0275reference(12);
    const objGradeView_r44 = \u0275\u0275reference(18);
    const objFormulaView_r45 = \u0275\u0275reference(22);
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("epp-row-edit", row_r34.editing)("epp-row-new", row_r34.isNew);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r5.isChecked("object", row_r34));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r41 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r34.editing)("ngIfElse", objCodeNoView_r42);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r34.editing)("ngIfElse", objCodeNameView_r43);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r5.isIncludeOn(row_r34))("nzDisabled", !row_r34.editing);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r34.editing)("ngIfElse", objGradeView_r44);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r34.editing)("ngIfElse", objFormulaView_r45);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r34.updatedBy);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r5.toDmy(row_r34.updateDate));
  }
}
function EvsParamPanelComponent_tr_216_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 93);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function EvsParamPanelComponent_tr_217_input_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 90);
    \u0275\u0275twoWayListener("ngModelChange", function EvsParamPanelComponent_tr_217_input_6_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r49);
      const row_r48 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r48.codeNo, $event) || (row_r48.codeNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r48 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r48.codeNo);
    \u0275\u0275control();
  }
}
function EvsParamPanelComponent_tr_217_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r48 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r48.codeNo);
  }
}
function EvsParamPanelComponent_tr_217_input_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 91);
    \u0275\u0275twoWayListener("ngModelChange", function EvsParamPanelComponent_tr_217_input_10_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r50);
      const row_r48 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r48.codeName, $event) || (row_r48.codeName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r48 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r48.codeName);
    \u0275\u0275control();
  }
}
function EvsParamPanelComponent_tr_217_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r48 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r48.codeName);
  }
}
function EvsParamPanelComponent_tr_217_nz_select_14_nz_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 72);
  }
  if (rf & 2) {
    const o_r52 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r52.codeNo)("nzLabel", o_r52.codeName);
  }
}
function EvsParamPanelComponent_tr_217_nz_select_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-select", 84);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EvsParamPanelComponent_tr_217_nz_select_14_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r51);
      const row_r48 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r48.formula, $event) || (row_r48.formula = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EvsParamPanelComponent_tr_217_nz_select_14_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r51);
      const row_r48 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onFormulaChange(row_r48, $event));
    });
    \u0275\u0275template(2, EvsParamPanelComponent_tr_217_nz_select_14_nz_option_2_Template, 1, 2, "nz-option", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r48 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", row_r48.formula);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(1, 3, "evsParam.js.defaultSelect", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r5.formulaOptions());
  }
}
function EvsParamPanelComponent_tr_217_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r48 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate(ctx_r5.formulaLabel(row_r48.formula));
  }
}
function EvsParamPanelComponent_tr_217_nz_select_18_nz_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 72);
  }
  if (rf & 2) {
    const o_r54 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r54.codeNo)("nzLabel", o_r54.codeName);
  }
}
function EvsParamPanelComponent_tr_217_nz_select_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-select", 84);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EvsParamPanelComponent_tr_217_nz_select_18_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r53);
      const row_r48 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r48.startStep, $event) || (row_r48.startStep = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EvsParamPanelComponent_tr_217_nz_select_18_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r53);
      const row_r48 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onStartStepChange(row_r48, $event));
    });
    \u0275\u0275template(2, EvsParamPanelComponent_tr_217_nz_select_18_nz_option_2_Template, 1, 2, "nz-option", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r48 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", row_r48.startStep);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(1, 3, "evsParam.js.defaultSelect", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r5.startStepOptions());
  }
}
function EvsParamPanelComponent_tr_217_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r48 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r48.startStepName || row_r48.startStep);
  }
}
function EvsParamPanelComponent_tr_217_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 74);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_217_Template_tr_click_0_listener() {
      const row_r48 = \u0275\u0275restoreView(_r47).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.rowClick("list", row_r48));
    });
    \u0275\u0275elementStart(1, "td", 75);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_217_Template_td_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "label", 76);
    \u0275\u0275listener("ngModelChange", function EvsParamPanelComponent_tr_217_Template_label_ngModelChange_2_listener($event) {
      const row_r48 = \u0275\u0275restoreView(_r47).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.toggleChecked("list", row_r48, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 77);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 74);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_217_Template_td_click_5_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(6, EvsParamPanelComponent_tr_217_input_6_Template, 1, 1, "input", 88)(7, EvsParamPanelComponent_tr_217_ng_template_7_Template, 1, 1, "ng-template", null, 21, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 74);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_217_Template_td_click_9_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(10, EvsParamPanelComponent_tr_217_input_10_Template, 1, 1, "input", 89)(11, EvsParamPanelComponent_tr_217_ng_template_11_Template, 1, 1, "ng-template", null, 22, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 74);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_217_Template_td_click_13_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(14, EvsParamPanelComponent_tr_217_nz_select_14_Template, 3, 6, "nz-select", 78)(15, EvsParamPanelComponent_tr_217_ng_template_15_Template, 1, 1, "ng-template", null, 23, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 75);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_217_Template_td_click_17_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(18, EvsParamPanelComponent_tr_217_nz_select_18_Template, 3, 6, "nz-select", 78)(19, EvsParamPanelComponent_tr_217_ng_template_19_Template, 1, 1, "ng-template", null, 24, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 82);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 83);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r48 = ctx.$implicit;
    const i_r55 = ctx.index;
    const listCodeNoView_r56 = \u0275\u0275reference(8);
    const listCodeNameView_r57 = \u0275\u0275reference(12);
    const listFormulaView_r58 = \u0275\u0275reference(16);
    const listStartStepView_r59 = \u0275\u0275reference(20);
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("epp-row-edit", row_r48.editing)("epp-row-new", row_r48.isNew);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r5.isChecked("list", row_r48));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r55 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r48.editing)("ngIfElse", listCodeNoView_r56);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r48.editing)("ngIfElse", listCodeNameView_r57);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r48.editing)("ngIfElse", listFormulaView_r58);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r48.editing)("ngIfElse", listStartStepView_r59);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r48.updatedBy);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r5.toDmy(row_r48.updateDate));
  }
}
function EvsParamPanelComponent_tr_261_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 87);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function EvsParamPanelComponent_tr_262_input_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 90);
    \u0275\u0275twoWayListener("ngModelChange", function EvsParamPanelComponent_tr_262_input_6_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r63);
      const row_r62 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r62.codeNo, $event) || (row_r62.codeNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r62 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r62.codeNo);
    \u0275\u0275control();
  }
}
function EvsParamPanelComponent_tr_262_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r62 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r62.codeNo);
  }
}
function EvsParamPanelComponent_tr_262_input_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 91);
    \u0275\u0275twoWayListener("ngModelChange", function EvsParamPanelComponent_tr_262_input_10_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r64);
      const row_r62 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r62.codeName, $event) || (row_r62.codeName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r62 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r62.codeName);
    \u0275\u0275control();
  }
}
function EvsParamPanelComponent_tr_262_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r62 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r62.codeName);
  }
}
function EvsParamPanelComponent_tr_262_nz_select_14_nz_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 72);
  }
  if (rf & 2) {
    const o_r66 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r66.codeNo)("nzLabel", o_r66.codeName);
  }
}
function EvsParamPanelComponent_tr_262_nz_select_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-select", 84);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EvsParamPanelComponent_tr_262_nz_select_14_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r65);
      const row_r62 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r62.formula, $event) || (row_r62.formula = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EvsParamPanelComponent_tr_262_nz_select_14_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r65);
      const row_r62 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onFormulaChange(row_r62, $event));
    });
    \u0275\u0275template(2, EvsParamPanelComponent_tr_262_nz_select_14_nz_option_2_Template, 1, 2, "nz-option", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r62 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", row_r62.formula);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(1, 3, "evsParam.js.defaultSelect", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r5.formulaOptions());
  }
}
function EvsParamPanelComponent_tr_262_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r62 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate(ctx_r5.formulaLabel(row_r62.formula));
  }
}
function EvsParamPanelComponent_tr_262_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 74);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_262_Template_tr_click_0_listener() {
      const row_r62 = \u0275\u0275restoreView(_r61).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.rowClick("group", row_r62));
    });
    \u0275\u0275elementStart(1, "td", 75);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_262_Template_td_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "label", 76);
    \u0275\u0275listener("ngModelChange", function EvsParamPanelComponent_tr_262_Template_label_ngModelChange_2_listener($event) {
      const row_r62 = \u0275\u0275restoreView(_r61).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.toggleChecked("group", row_r62, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 77);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 74);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_262_Template_td_click_5_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(6, EvsParamPanelComponent_tr_262_input_6_Template, 1, 1, "input", 88)(7, EvsParamPanelComponent_tr_262_ng_template_7_Template, 1, 1, "ng-template", null, 25, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 74);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_262_Template_td_click_9_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(10, EvsParamPanelComponent_tr_262_input_10_Template, 1, 1, "input", 89)(11, EvsParamPanelComponent_tr_262_ng_template_11_Template, 1, 1, "ng-template", null, 26, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 74);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_262_Template_td_click_13_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(14, EvsParamPanelComponent_tr_262_nz_select_14_Template, 3, 6, "nz-select", 78)(15, EvsParamPanelComponent_tr_262_ng_template_15_Template, 1, 1, "ng-template", null, 27, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 82);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 83);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r62 = ctx.$implicit;
    const i_r67 = ctx.index;
    const groupCodeNoView_r68 = \u0275\u0275reference(8);
    const groupCodeNameView_r69 = \u0275\u0275reference(12);
    const groupFormulaView_r70 = \u0275\u0275reference(16);
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("epp-row-edit", row_r62.editing)("epp-row-new", row_r62.isNew);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r5.isChecked("group", row_r62));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r67 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r62.editing)("ngIfElse", groupCodeNoView_r68);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r62.editing)("ngIfElse", groupCodeNameView_r69);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r62.editing)("ngIfElse", groupFormulaView_r70);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r62.updatedBy);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r5.toDmy(row_r62.updateDate));
  }
}
function EvsParamPanelComponent_tr_306_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 87);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function EvsParamPanelComponent_tr_307_input_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 90);
    \u0275\u0275twoWayListener("ngModelChange", function EvsParamPanelComponent_tr_307_input_6_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r74);
      const row_r73 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r73.codeNo, $event) || (row_r73.codeNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r73 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r73.codeNo);
    \u0275\u0275control();
  }
}
function EvsParamPanelComponent_tr_307_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r73 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r73.codeNo);
  }
}
function EvsParamPanelComponent_tr_307_input_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 91);
    \u0275\u0275twoWayListener("ngModelChange", function EvsParamPanelComponent_tr_307_input_10_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r75);
      const row_r73 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r73.codeName, $event) || (row_r73.codeName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r73 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r73.codeName);
    \u0275\u0275control();
  }
}
function EvsParamPanelComponent_tr_307_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r73 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r73.codeName);
  }
}
function EvsParamPanelComponent_tr_307_nz_select_14_nz_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 72);
  }
  if (rf & 2) {
    const o_r77 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r77.codeNo)("nzLabel", o_r77.codeName);
  }
}
function EvsParamPanelComponent_tr_307_nz_select_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-select", 84);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EvsParamPanelComponent_tr_307_nz_select_14_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r76);
      const row_r73 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r73.formula, $event) || (row_r73.formula = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EvsParamPanelComponent_tr_307_nz_select_14_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r76);
      const row_r73 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onFormulaChange(row_r73, $event));
    });
    \u0275\u0275template(2, EvsParamPanelComponent_tr_307_nz_select_14_nz_option_2_Template, 1, 2, "nz-option", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r73 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", row_r73.formula);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(1, 3, "evsParam.js.defaultSelect", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r5.formulaOptions());
  }
}
function EvsParamPanelComponent_tr_307_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r73 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate(ctx_r5.formulaLabel(row_r73.formula));
  }
}
function EvsParamPanelComponent_tr_307_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 74);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_307_Template_tr_click_0_listener() {
      const row_r73 = \u0275\u0275restoreView(_r72).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.rowClick("family", row_r73));
    });
    \u0275\u0275elementStart(1, "td", 75);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_307_Template_td_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "label", 76);
    \u0275\u0275listener("ngModelChange", function EvsParamPanelComponent_tr_307_Template_label_ngModelChange_2_listener($event) {
      const row_r73 = \u0275\u0275restoreView(_r72).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.toggleChecked("family", row_r73, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 77);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 74);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_307_Template_td_click_5_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(6, EvsParamPanelComponent_tr_307_input_6_Template, 1, 1, "input", 88)(7, EvsParamPanelComponent_tr_307_ng_template_7_Template, 1, 1, "ng-template", null, 28, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 74);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_307_Template_td_click_9_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(10, EvsParamPanelComponent_tr_307_input_10_Template, 1, 1, "input", 89)(11, EvsParamPanelComponent_tr_307_ng_template_11_Template, 1, 1, "ng-template", null, 29, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 74);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_307_Template_td_click_13_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(14, EvsParamPanelComponent_tr_307_nz_select_14_Template, 3, 6, "nz-select", 78)(15, EvsParamPanelComponent_tr_307_ng_template_15_Template, 1, 1, "ng-template", null, 30, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 82);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 83);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r73 = ctx.$implicit;
    const i_r78 = ctx.index;
    const familyCodeNoView_r79 = \u0275\u0275reference(8);
    const familyCodeNameView_r80 = \u0275\u0275reference(12);
    const familyFormulaView_r81 = \u0275\u0275reference(16);
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("epp-row-edit", row_r73.editing)("epp-row-new", row_r73.isNew);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r5.isChecked("family", row_r73));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r78 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r73.editing)("ngIfElse", familyCodeNoView_r79);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r73.editing)("ngIfElse", familyCodeNameView_r80);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r73.editing)("ngIfElse", familyFormulaView_r81);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r73.updatedBy);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r5.toDmy(row_r73.updateDate));
  }
}
function EvsParamPanelComponent_tr_351_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 87);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function EvsParamPanelComponent_tr_352_nz_select_6_nz_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 72);
  }
  if (rf & 2) {
    const o_r86 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r86.codeNo)("nzLabel", o_r86.codeName);
  }
}
function EvsParamPanelComponent_tr_352_nz_select_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r85 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-select", 84);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EvsParamPanelComponent_tr_352_nz_select_6_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r85);
      const row_r84 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r84.evsStep, $event) || (row_r84.evsStep = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EvsParamPanelComponent_tr_352_nz_select_6_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r85);
      const row_r84 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onEvsStepChange(row_r84, $event));
    });
    \u0275\u0275template(2, EvsParamPanelComponent_tr_352_nz_select_6_nz_option_2_Template, 1, 2, "nz-option", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r84 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", row_r84.evsStep);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(1, 3, "evsParam.js.defaultSelect", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r5.evsStepOptions());
  }
}
function EvsParamPanelComponent_tr_352_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r84 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r84.evsStepName || row_r84.evsStep);
  }
}
function EvsParamPanelComponent_tr_352_nz_select_10_nz_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 72);
  }
  if (rf & 2) {
    const o_r88 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r88.codeNo)("nzLabel", o_r88.codeName);
  }
}
function EvsParamPanelComponent_tr_352_nz_select_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r87 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-select", 84);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EvsParamPanelComponent_tr_352_nz_select_10_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r87);
      const row_r84 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r84.evsGroup, $event) || (row_r84.evsGroup = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EvsParamPanelComponent_tr_352_nz_select_10_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r87);
      const row_r84 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onEvsGroupChange(row_r84, $event));
    });
    \u0275\u0275template(2, EvsParamPanelComponent_tr_352_nz_select_10_nz_option_2_Template, 1, 2, "nz-option", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r84 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", row_r84.evsGroup);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(1, 3, "evsParam.js.defaultSelect", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r5.groupOptions());
  }
}
function EvsParamPanelComponent_tr_352_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r84 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r84.evsGroupName || row_r84.evsGroup);
  }
}
function EvsParamPanelComponent_tr_352_nz_select_14_nz_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 72);
  }
  if (rf & 2) {
    const o_r90 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r90.codeNo)("nzLabel", o_r90.codeName);
  }
}
function EvsParamPanelComponent_tr_352_nz_select_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r89 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-select", 84);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EvsParamPanelComponent_tr_352_nz_select_14_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r89);
      const row_r84 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r84.ruleId, $event) || (row_r84.ruleId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EvsParamPanelComponent_tr_352_nz_select_14_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r89);
      const row_r84 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.onRuleIdChange(row_r84, $event));
    });
    \u0275\u0275template(2, EvsParamPanelComponent_tr_352_nz_select_14_nz_option_2_Template, 1, 2, "nz-option", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r84 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", row_r84.ruleId);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(1, 3, "evsParam.js.defaultSelect", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r5.ruleIdOptions());
  }
}
function EvsParamPanelComponent_tr_352_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r84 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r84.ruleName || row_r84.ruleId);
  }
}
function EvsParamPanelComponent_tr_352_Template(rf, ctx) {
  if (rf & 1) {
    const _r83 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 74);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_352_Template_tr_click_0_listener() {
      const row_r84 = \u0275\u0275restoreView(_r83).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.rowClick("affirm", row_r84));
    });
    \u0275\u0275elementStart(1, "td", 75);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_352_Template_td_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "label", 76);
    \u0275\u0275listener("ngModelChange", function EvsParamPanelComponent_tr_352_Template_label_ngModelChange_2_listener($event) {
      const row_r84 = \u0275\u0275restoreView(_r83).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.toggleChecked("affirm", row_r84, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 77);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 74);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_352_Template_td_click_5_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(6, EvsParamPanelComponent_tr_352_nz_select_6_Template, 3, 6, "nz-select", 78)(7, EvsParamPanelComponent_tr_352_ng_template_7_Template, 1, 1, "ng-template", null, 31, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 74);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_352_Template_td_click_9_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(10, EvsParamPanelComponent_tr_352_nz_select_10_Template, 3, 6, "nz-select", 78)(11, EvsParamPanelComponent_tr_352_ng_template_11_Template, 1, 1, "ng-template", null, 32, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 74);
    \u0275\u0275listener("click", function EvsParamPanelComponent_tr_352_Template_td_click_13_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(14, EvsParamPanelComponent_tr_352_nz_select_14_Template, 3, 6, "nz-select", 78)(15, EvsParamPanelComponent_tr_352_ng_template_15_Template, 1, 1, "ng-template", null, 33, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 82);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 83);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r84 = ctx.$implicit;
    const i_r91 = ctx.index;
    const evsStepView_r92 = \u0275\u0275reference(8);
    const evsGroupView_r93 = \u0275\u0275reference(12);
    const ruleIdView_r94 = \u0275\u0275reference(16);
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275classProp("epp-row-edit", row_r84.editing)("epp-row-new", row_r84.isNew);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r5.isChecked("affirm", row_r84));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r91 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r84.editing)("ngIfElse", evsStepView_r92);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r84.editing)("ngIfElse", evsGroupView_r93);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r84.editing)("ngIfElse", ruleIdView_r94);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r84.updatedBy);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r5.toDmy(row_r84.updateDate));
  }
}
function EvsParamPanelComponent_ng_template_353_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r95 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r95, "\n");
  }
}
function EvsParamPanelComponent_ng_container_359_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 94);
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 3, "evsParam.modal.deleteBodyPrefix", "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r5.pendingDeleteCount);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 6, "evsParam.modal.deleteBodySuffix", "d\xF2ng \u0111\xE3 ch\u1ECDn?"), " ");
  }
}
var TAB_META = {
  grade: { api: "evsGrade", paramType: null },
  item: { api: "evsParam", paramType: "ITEM" },
  object: { api: "evsParamObject", paramType: null },
  list: { api: "evsParam", paramType: "LIST" },
  group: { api: "evsParam", paramType: "GROUP" },
  family: { api: "evsParam", paramType: "FAMILY" },
  affirm: { api: "evsAffirmRule", paramType: null }
};
var EVAL_TYPE_PARENT_CODE = "14015137";
var EVAL_GRADE_PARENT_CODE = "14015161";
var START_STEP_PARENT_CODE = "14015351";
var EVS_STEP_PARENT_CODE = "14015060";
var RULE_ID_PARENT_CODE = "14015172";
var PAGE_SIZE_OPTIONS = [10, 25, 50, 100];
var I18N_KEYS = [
  "evsParam.label.evalName",
  "evsParam.btn.search",
  "evsParam.tab.grade",
  "evsParam.tab.item",
  "evsParam.tab.object",
  "evsParam.tab.list",
  "evsParam.tab.group",
  "evsParam.tab.family",
  "evsParam.tab.affirm",
  "evsParam.label.quickFilter",
  "evsParam.btn.addNew",
  "evsParam.btn.delete",
  "evsParam.btn.save",
  "evsParam.col.evalType",
  "evsParam.col.evalGrade",
  "evsParam.col.include",
  "evsParam.col.startScore",
  "evsParam.col.endScore",
  "evsParam.col.score",
  "evsParam.col.remark",
  "evsParam.col.updatedBy",
  "evsParam.col.updateTime",
  "evsParam.col.code",
  "evsParam.col.name",
  "evsParam.col.defaultGrade",
  "evsParam.col.formula",
  "evsParam.col.initialStatus",
  "evsParam.col.evaluator",
  "evsParam.col.evalGroup",
  "evsParam.col.ruleId",
  "evsParam.modal.deleteTitle",
  "evsParam.modal.deleteBodyPrefix",
  "evsParam.modal.deleteBodySuffix",
  "evsParam.btn.cancel",
  "evsParam.js.selectFirst",
  "evsParam.js.noChanges",
  "evsParam.js.saveError",
  "evsParam.js.selectRow",
  "evsParam.js.deleteError",
  "evsParam.js.defaultSelect",
  "alert.message.update_success",
  "common.select",
  "common.stt",
  "common.noData",
  "common.totalRows"
];
var EvsParamTabState = class {
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
      return list.filter((r) => (r.codeName || r.evsGrade || r.evsGroup || "").toLowerCase().includes(kw) || (r.codeNo || r.evsStep || "").toLowerCase().includes(kw) || (r.remark || "").toLowerCase().includes(kw));
    },
    ...ngDevMode ? [{ debugName: "filteredRows" }] : (
      /* istanbul ignore next */
      []
    )
  );
};
var EvsParamPanelComponent = class _EvsParamPanelComponent {
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
  evalTypeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "evalTypeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  evalGradeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "evalGradeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  startStepOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "startStepOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  evsStepOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "evsStepOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ruleIdOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "ruleIdOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  formulaOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "formulaOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  groupOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "groupOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  grade = new EvsParamTabState();
  item = new EvsParamTabState();
  object = new EvsParamTabState();
  list = new EvsParamTabState();
  group = new EvsParamTabState();
  family = new EvsParamTabState();
  affirm = new EvsParamTabState();
  tabStates = {
    grade: this.grade,
    item: this.item,
    object: this.object,
    list: this.list,
    group: this.group,
    family: this.family,
    affirm: this.affirm
  };
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
  pendingDeleteTab = null;
  pendingDeleteRowIds = [];
  rowIdCounter = 0;
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getFormulaOptions().subscribe({ next: (list) => this.formulaOptions.set(list ?? []), error: () => this.formulaOptions.set([]) });
    this.api.getCodeList(EVAL_TYPE_PARENT_CODE).subscribe({ next: (list) => this.evalTypeOptions.set(list ?? []), error: () => this.evalTypeOptions.set([]) });
    this.api.getCodeList(EVAL_GRADE_PARENT_CODE).subscribe({ next: (list) => this.evalGradeOptions.set(list ?? []), error: () => this.evalGradeOptions.set([]) });
    this.api.getCodeList(START_STEP_PARENT_CODE).subscribe({ next: (list) => this.startStepOptions.set(list ?? []), error: () => this.startStepOptions.set([]) });
    this.api.getCodeList(EVS_STEP_PARENT_CODE).subscribe({ next: (list) => this.evsStepOptions.set(list ?? []), error: () => this.evsStepOptions.set([]) });
    this.api.getCodeList(RULE_ID_PARENT_CODE).subscribe({ next: (list) => this.ruleIdOptions.set(list ?? []), error: () => this.ruleIdOptions.set([]) });
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
    const resumeSeq = this.resumeSeq;
    if (!resumeSeq)
      return;
    this.api.getGroupOptions(resumeSeq).subscribe({ next: (list) => this.groupOptions.set(list ?? []), error: () => this.groupOptions.set([]) });
    Object.keys(TAB_META).forEach((tab) => this.loadTab(tab));
  }
  tabState(tab) {
    return this.tabStates[tab];
  }
  loadTab(tab) {
    const resumeSeq = this.resumeSeq;
    if (!resumeSeq)
      return;
    const state = this.tabState(tab);
    const meta = TAB_META[tab];
    state.loading.set(true);
    this.api.getList(meta.api, resumeSeq, this.evsType, meta.paramType).subscribe({
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
    return __spreadProps(__spreadValues({}, dto), { rowId: dto.seq || this.newRowId(), isNew, editing: isNew, modified: isNew });
  }
  newRowId() {
    return "NEW_" + ++this.rowIdCounter;
  }
  labelOf(options, code) {
    const opt = options.find((o) => o.codeNo === code);
    return opt ? opt.codeName : "";
  }
  gradeLabel(code) {
    const opt = this.evalGradeOptions().find((o) => o.codeNo === code);
    return opt ? opt.description || opt.codeName : "";
  }
  onEvsTypeChange(row, code) {
    row.evsType = code;
    row.evsTypeName = this.labelOf(this.evalTypeOptions(), code);
  }
  onEvsGradeChange(row, code) {
    row.evsGrade = code;
    row.evsGradeName = this.gradeLabel(code);
  }
  onFormulaChange(row, code) {
    row.formula = code;
    row.formulaName = this.labelOf(this.formulaOptions(), code);
  }
  /** Hiển thị tên "Hình thức tiêu chuẩn" luôn tra cứu trực tiếp theo formulaOptions đang tải (đúng
   *  veppFormulaName ở bản gốc - không dùng formulaName trả về từ BE để hiển thị, kể cả khi mới tải
   *  trang xong chưa qua chỉnh sửa dòng nào). */
  formulaLabel(code) {
    return this.labelOf(this.formulaOptions(), code);
  }
  onStartStepChange(row, code) {
    row.startStep = code;
    row.startStepName = this.labelOf(this.startStepOptions(), code);
  }
  onEvsStepChange(row, code) {
    row.evsStep = code;
    row.evsStepName = this.labelOf(this.evsStepOptions(), code);
  }
  onEvsGroupChange(row, code) {
    row.evsGroup = code;
    row.evsGroupName = this.labelOf(this.groupOptions(), code);
  }
  onRuleIdChange(row, code) {
    row.ruleId = code;
    row.ruleName = this.labelOf(this.ruleIdOptions(), code);
  }
  isIncludeOn(row) {
    return row.isInclude === "1" || row.isInclude === "Y";
  }
  setIncludeOn(row, checked) {
    row.isInclude = checked ? "1" : "0";
  }
  // ==================== Lọc nhanh ====================
  onFilterChange(tab, value) {
    this.tabState(tab).filterText.set(value);
  }
  // ==================== Click dòng để sửa inline ====================
  rowClick(tab, row) {
    if (row.editing)
      return;
    const state = this.tabState(tab);
    state.rows().forEach((r) => {
      if (r.editing)
        this.commitEdit(r);
    });
    row.editing = true;
  }
  commitEdit(row) {
    row.editing = false;
    row.modified = true;
  }
  // ==================== Thêm dòng ====================
  emptyRowFields(tab) {
    switch (tab) {
      case "grade":
        return { evsType: "", evsGrade: "", isInclude: "0", startScore: "", endScore: "", score: "", remark: "" };
      case "item":
        return { paramType: "ITEM", codeNo: "", codeName: "", evsScore: "" };
      case "list":
        return { paramType: "LIST", codeNo: "", codeName: "", formula: "", startStep: "" };
      case "group":
        return { paramType: "GROUP", codeNo: "", codeName: "", formula: "" };
      case "family":
        return { paramType: "FAMILY", codeNo: "", codeName: "", formula: "" };
      case "object":
        return { codeNo: "", codeName: "", isInclude: "0", evsGrade: "", formula: "" };
      case "affirm":
        return { evsStep: "", evsGroup: "", ruleId: "" };
    }
  }
  addRow(tab) {
    const state = this.tabState(tab);
    state.rows().forEach((r) => {
      if (r.editing)
        this.commitEdit(r);
    });
    const newRow = __spreadValues({
      seq: "",
      resumeSeq: this.resumeSeq,
      rowId: this.newRowId(),
      isNew: true,
      editing: true,
      modified: true,
      paramType: null,
      evsType: null,
      evsTypeName: null,
      evsGrade: null,
      evsGradeName: null,
      isInclude: null,
      startScore: null,
      endScore: null,
      score: null,
      remark: null,
      codeNo: null,
      codeName: null,
      formula: null,
      formulaName: null,
      startStep: null,
      startStepName: null,
      evsScore: null,
      evsStep: null,
      evsStepName: null,
      evsGroup: null,
      evsGroupName: null,
      ruleId: null,
      ruleName: null,
      activity: null,
      orderNo: null,
      createDate: null,
      createdBy: null,
      updateDate: null,
      updatedBy: null
    }, this.emptyRowFields(tab));
    state.rows.update((rows) => [...rows, newRow]);
  }
  // ==================== Lưu ====================
  buildPayload(tab, r) {
    const base = { seq: r.isNew ? null : r.seq, resumeSeq: this.resumeSeq, evsType: this.evsType };
    switch (tab) {
      case "grade":
        return __spreadProps(__spreadValues({}, base), {
          evsType: r.evsType || "",
          evsGrade: r.evsGrade || "",
          isInclude: r.isInclude || "0",
          startScore: r.startScore || "",
          endScore: r.endScore || "",
          score: r.score || "",
          remark: r.remark || ""
        });
      case "item":
        return __spreadProps(__spreadValues({}, base), { paramType: "ITEM", codeNo: r.codeNo || "", codeName: r.codeName || "", evsScore: r.evsScore || "" });
      case "list":
        return __spreadProps(__spreadValues({}, base), {
          paramType: "LIST",
          codeNo: r.codeNo || "",
          codeName: r.codeName || "",
          formula: r.formula || "",
          startStep: r.startStep || ""
        });
      case "group":
        return __spreadProps(__spreadValues({}, base), { paramType: "GROUP", codeNo: r.codeNo || "", codeName: r.codeName || "", formula: r.formula || "" });
      case "family":
        return __spreadProps(__spreadValues({}, base), { paramType: "FAMILY", codeNo: r.codeNo || "", codeName: r.codeName || "", formula: r.formula || "" });
      case "object":
        return __spreadProps(__spreadValues({}, base), {
          codeNo: r.codeNo || "",
          codeName: r.codeName || "",
          formula: r.formula || "",
          isInclude: r.isInclude || "0",
          evsGrade: r.evsGrade || ""
        });
      case "affirm":
        return __spreadProps(__spreadValues({}, base), { evsStep: r.evsStep || "", evsGroup: r.evsGroup || "", ruleId: r.ruleId || "" });
    }
  }
  saveTab(tab) {
    const state = this.tabState(tab);
    state.rows().forEach((r) => {
      if (r.editing)
        this.commitEdit(r);
    });
    if (!this.resumeSeq) {
      this.message.warning(this.i18n.t("evsParam.js.selectFirst", "Vui l\xF2ng ch\u1ECDn T\xEAn \u0111\xE1nh gi\xE1 tr\u01B0\u1EDBc khi l\u01B0u."));
      return;
    }
    const toSave = state.rows().filter((r) => r.isNew || r.modified);
    if (!toSave.length) {
      this.message.warning(this.i18n.t("evsParam.js.noChanges", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u n\xE0o thay \u0111\u1ED5i \u0111\u1EC3 l\u01B0u."));
      return;
    }
    const meta = TAB_META[tab];
    const payload = toSave.map((r) => this.buildPayload(tab, r));
    state.saving.set(true);
    this.api.saveBatch(meta.api, payload).subscribe({
      next: () => {
        state.saving.set(false);
        this.message.success(this.i18n.t("alert.message.update_success", "S\u1EEDa th\xE0nh c\xF4ng!"));
        this.loadTab(tab);
      },
      error: () => {
        state.saving.set(false);
        this.message.error(this.i18n.t("evsParam.js.saveError", "L\u1ED7i khi l\u01B0u d\u1EEF li\u1EC7u. Vui l\xF2ng th\u1EED l\u1EA1i."));
      }
    });
  }
  // ==================== Chọn nhiều dòng (checkbox) - phạm vi trang hiện tại ====================
  isChecked(tab, row) {
    return this.tabState(tab).checked().has(row.rowId);
  }
  toggleChecked(tab, row, checked) {
    const state = this.tabState(tab);
    const next = new Set(state.checked());
    if (checked)
      next.add(row.rowId);
    else
      next.delete(row.rowId);
    state.checked.set(next);
  }
  allCheckedOnPage(tab, pageRows) {
    return pageRows.length > 0 && pageRows.every((r) => this.isChecked(tab, r));
  }
  someCheckedOnPage(tab, pageRows) {
    return pageRows.some((r) => this.isChecked(tab, r)) && !this.allCheckedOnPage(tab, pageRows);
  }
  toggleAllOnPage(tab, pageRows, checked) {
    const state = this.tabState(tab);
    const next = new Set(state.checked());
    pageRows.forEach((r) => checked ? next.add(r.rowId) : next.delete(r.rowId));
    state.checked.set(next);
  }
  // ==================== Xóa ====================
  openDeleteConfirm(tab) {
    const ids = Array.from(this.tabState(tab).checked());
    if (!ids.length) {
      this.message.warning(this.i18n.t("evsParam.js.selectRow", "Vui l\xF2ng ch\u1ECDn \xEDt nh\u1EA5t m\u1ED9t d\xF2ng \u0111\u1EC3 x\xF3a."));
      return;
    }
    this.pendingDeleteTab = tab;
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
    const tab = this.pendingDeleteTab;
    if (!tab)
      return;
    const state = this.tabState(tab);
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
    this.api.deleteBatch(TAB_META[tab].api, existingSeqs).subscribe({
      next: () => this.deleting.set(false),
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t("evsParam.js.deleteError", "L\u1ED7i khi x\xF3a d\u1EEF li\u1EC7u."));
        this.loadTab(tab);
      }
    });
  }
  // ==================== Hiển thị ====================
  /** Hiển thị ngày phần "Thời gian TĐ" - chỉ lấy phần ngày dd/MM/yyyy, bỏ giờ nếu có (đúng phạm vi hiển
   *  thị veppFmtDate ở bản gốc - chuỗi trả về từ BE là 'YYYY-MM-DD HH24:MI'). */
  toDmy(s) {
    if (!s)
      return "";
    const [y, m, d] = s.substring(0, 10).split("-");
    return y && m && d ? `${d}/${m}/${y}` : s;
  }
  static \u0275fac = function EvsParamPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EvsParamPanelComponent)(\u0275\u0275directiveInject(EvsParamPanelService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EvsParamPanelComponent, selectors: [["app-evs-param-panel"]], decls: 360, vars: 462, consts: [["gradeTable", "nzTable"], ["itemTable", "nzTable"], ["objectTable", "nzTable"], ["listTable", "nzTable"], ["groupTable", "nzTable"], ["familyTable", "nzTable"], ["affirmTable", "nzTable"], ["eppTotalTpl", ""], ["evalTypeView", ""], ["evalGradeView", ""], ["startScoreView", ""], ["endScoreView", ""], ["scoreView", ""], ["remarkView", ""], ["itemCodeNoView", ""], ["itemCodeNameView", ""], ["itemScoreView", ""], ["objCodeNoView", ""], ["objCodeNameView", ""], ["objGradeView", ""], ["objFormulaView", ""], ["listCodeNoView", ""], ["listCodeNameView", ""], ["listFormulaView", ""], ["listStartStepView", ""], ["groupCodeNoView", ""], ["groupCodeNameView", ""], ["groupFormulaView", ""], ["familyCodeNoView", ""], ["familyCodeNameView", ""], ["familyFormulaView", ""], ["evsStepView", ""], ["evsGroupView", ""], ["ruleIdView", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "d-flex", "align-items-end", "gap-3", "flex-wrap", 3, "ngSubmit"], [2, "min-width", "280px"], [1, "form-label"], ["name", "eppResumeSeq", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], [3, "nzTitle"], [1, "d-flex", "align-items-center", "justify-content-between", "mt-2", "mb-2", "flex-wrap", "gap-2"], ["nz-input", "", 2, "width", "200px", 3, "ngModelChange", "ngModel", "placeholder"], [1, "d-flex", "align-items-center", "gap-2"], ["nz-button", "", "nzType", "primary", "nzSize", "small", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzDanger", "", "nzSize", "small", "type", "button", 3, "click"], [1, "bx", "bx-trash"], ["nz-button", "", "nzType", "primary", "nzSize", "small", "type", "button", 3, "click", "nzLoading"], [1, "bx", "bx-save"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "40px", 1, "text-center"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel", "nzIndeterminate"], ["nzWidth", "50px", 1, "text-center"], ["nzWidth", "150px"], ["nzWidth", "140px"], ["nzWidth", "80px", 1, "text-center"], ["nzWidth", "100px", 1, "text-center"], ["nzWidth", "90px", 1, "text-center"], ["nzWidth", "200px"], ["nzWidth", "120px", 1, "text-center"], [4, "ngIf"], [3, "epp-row-edit", "epp-row-new", "click", 4, "ngFor", "ngForOf"], ["nzWidth", "220px"], ["nzWidth", "160px", 1, "text-center"], ["nzWidth", "180px"], ["nzOkDanger", "", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [3, "nzValue", "nzLabel"], ["colspan", "11", 1, "text-center", "text-muted"], [3, "click"], [1, "text-center", 3, "click"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel"], [1, "text-center"], ["class", "w-100", 3, "ngModel", "nzPlaceHolder", "ngModelChange", 4, "ngIf", "ngIfElse"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel", "nzDisabled"], ["nz-input", "", "type", "number", 3, "ngModel", "ngModelChange", 4, "ngIf", "ngIfElse"], ["nz-input", "", 3, "ngModel", "ngModelChange", 4, "ngIf", "ngIfElse"], [1, "small"], [1, "text-center", "small"], [1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["nz-input", "", "type", "number", 3, "ngModelChange", "ngModel"], ["nz-input", "", 3, "ngModelChange", "ngModel"], ["colspan", "7", 1, "text-center", "text-muted"], ["nz-input", "", "maxlength", "20", 3, "ngModel", "ngModelChange", 4, "ngIf", "ngIfElse"], ["nz-input", "", "maxlength", "200", 3, "ngModel", "ngModelChange", 4, "ngIf", "ngIfElse"], ["nz-input", "", "maxlength", "20", 3, "ngModelChange", "ngModel"], ["nz-input", "", "maxlength", "200", 3, "ngModelChange", "ngModel"], ["colspan", "9", 1, "text-center", "text-muted"], ["colspan", "8", 1, "text-center", "text-muted"], [1, "mb-0"]], template: function EvsParamPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "nz-card", 36)(3, "form", 37);
      \u0275\u0275listener("ngSubmit", function EvsParamPanelComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 38)(5, "label", 39);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "nz-select", 40);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function EvsParamPanelComponent_Template_nz_select_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.resumeSeq, $event) || (ctx.resumeSeq = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(10, EvsParamPanelComponent_nz_option_10_Template, 1, 2, "nz-option", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 42);
      \u0275\u0275element(12, "i", 43);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "nz-card")(16, "nz-tabs")(17, "nz-tab", 44);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementStart(19, "div", 45)(20, "input", 46);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275listener("ngModelChange", function EvsParamPanelComponent_Template_input_ngModelChange_20_listener($event) {
        return ctx.onFilterChange("grade", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(22, "div", 47)(23, "button", 48);
      \u0275\u0275listener("click", function EvsParamPanelComponent_Template_button_click_23_listener() {
        return ctx.addRow("grade");
      });
      \u0275\u0275element(24, "i", 49);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "button", 50);
      \u0275\u0275listener("click", function EvsParamPanelComponent_Template_button_click_27_listener() {
        return ctx.openDeleteConfirm("grade");
      });
      \u0275\u0275element(28, "i", 51);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "button", 52);
      \u0275\u0275listener("click", function EvsParamPanelComponent_Template_button_click_31_listener() {
        return ctx.saveTab("grade");
      });
      \u0275\u0275element(32, "i", 53);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "nz-table", 54, 0)(37, "thead")(38, "tr")(39, "th", 55)(40, "label", 56);
      \u0275\u0275listener("ngModelChange", function EvsParamPanelComponent_Template_label_ngModelChange_40_listener($event) {
        \u0275\u0275restoreView(_r1);
        const gradeTable_r3 = \u0275\u0275reference(36);
        return \u0275\u0275resetView(ctx.toggleAllOnPage("grade", gradeTable_r3.data, $event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "th", 57);
      \u0275\u0275text(42);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "th", 58);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "th", 59);
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "th", 60);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "th", 61);
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "th", 61);
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "th", 62);
      \u0275\u0275text(60);
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "th", 63);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "th", 63);
      \u0275\u0275text(66);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "th", 64);
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(71, "tbody");
      \u0275\u0275template(72, EvsParamPanelComponent_tr_72_Template, 4, 4, "tr", 65)(73, EvsParamPanelComponent_tr_73_Template, 35, 22, "tr", 66);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(74, "nz-tab", 44);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275elementStart(76, "div", 45)(77, "input", 46);
      \u0275\u0275pipe(78, "translate");
      \u0275\u0275listener("ngModelChange", function EvsParamPanelComponent_Template_input_ngModelChange_77_listener($event) {
        return ctx.onFilterChange("item", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(79, "div", 47)(80, "button", 48);
      \u0275\u0275listener("click", function EvsParamPanelComponent_Template_button_click_80_listener() {
        return ctx.addRow("item");
      });
      \u0275\u0275element(81, "i", 49);
      \u0275\u0275text(82);
      \u0275\u0275pipe(83, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "button", 50);
      \u0275\u0275listener("click", function EvsParamPanelComponent_Template_button_click_84_listener() {
        return ctx.openDeleteConfirm("item");
      });
      \u0275\u0275element(85, "i", 51);
      \u0275\u0275text(86);
      \u0275\u0275pipe(87, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "button", 52);
      \u0275\u0275listener("click", function EvsParamPanelComponent_Template_button_click_88_listener() {
        return ctx.saveTab("item");
      });
      \u0275\u0275element(89, "i", 53);
      \u0275\u0275text(90);
      \u0275\u0275pipe(91, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(92, "nz-table", 54, 1)(94, "thead")(95, "tr")(96, "th", 55)(97, "label", 56);
      \u0275\u0275listener("ngModelChange", function EvsParamPanelComponent_Template_label_ngModelChange_97_listener($event) {
        \u0275\u0275restoreView(_r1);
        const itemTable_r22 = \u0275\u0275reference(93);
        return \u0275\u0275resetView(ctx.toggleAllOnPage("item", itemTable_r22.data, $event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "th", 57);
      \u0275\u0275text(99);
      \u0275\u0275pipe(100, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "th", 59);
      \u0275\u0275text(102);
      \u0275\u0275pipe(103, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "th", 67);
      \u0275\u0275text(105);
      \u0275\u0275pipe(106, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "th", 61);
      \u0275\u0275text(108);
      \u0275\u0275pipe(109, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "th", 63);
      \u0275\u0275text(111);
      \u0275\u0275pipe(112, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "th", 64);
      \u0275\u0275text(114);
      \u0275\u0275pipe(115, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(116, "tbody");
      \u0275\u0275template(117, EvsParamPanelComponent_tr_117_Template, 4, 4, "tr", 65)(118, EvsParamPanelComponent_tr_118_Template, 21, 14, "tr", 66);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(119, "nz-tab", 44);
      \u0275\u0275pipe(120, "translate");
      \u0275\u0275elementStart(121, "div", 45)(122, "input", 46);
      \u0275\u0275pipe(123, "translate");
      \u0275\u0275listener("ngModelChange", function EvsParamPanelComponent_Template_input_ngModelChange_122_listener($event) {
        return ctx.onFilterChange("object", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(124, "div", 47)(125, "button", 48);
      \u0275\u0275listener("click", function EvsParamPanelComponent_Template_button_click_125_listener() {
        return ctx.addRow("object");
      });
      \u0275\u0275element(126, "i", 49);
      \u0275\u0275text(127);
      \u0275\u0275pipe(128, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "button", 50);
      \u0275\u0275listener("click", function EvsParamPanelComponent_Template_button_click_129_listener() {
        return ctx.openDeleteConfirm("object");
      });
      \u0275\u0275element(130, "i", 51);
      \u0275\u0275text(131);
      \u0275\u0275pipe(132, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "button", 52);
      \u0275\u0275listener("click", function EvsParamPanelComponent_Template_button_click_133_listener() {
        return ctx.saveTab("object");
      });
      \u0275\u0275element(134, "i", 53);
      \u0275\u0275text(135);
      \u0275\u0275pipe(136, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(137, "nz-table", 54, 2)(139, "thead")(140, "tr")(141, "th", 55)(142, "label", 56);
      \u0275\u0275listener("ngModelChange", function EvsParamPanelComponent_Template_label_ngModelChange_142_listener($event) {
        \u0275\u0275restoreView(_r1);
        const objectTable_r32 = \u0275\u0275reference(138);
        return \u0275\u0275resetView(ctx.toggleAllOnPage("object", objectTable_r32.data, $event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "th", 57);
      \u0275\u0275text(144);
      \u0275\u0275pipe(145, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "th", 59);
      \u0275\u0275text(147);
      \u0275\u0275pipe(148, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "th", 67);
      \u0275\u0275text(150);
      \u0275\u0275pipe(151, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "th", 60);
      \u0275\u0275text(153);
      \u0275\u0275pipe(154, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "th", 59);
      \u0275\u0275text(156);
      \u0275\u0275pipe(157, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "th", 67);
      \u0275\u0275text(159);
      \u0275\u0275pipe(160, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "th", 63);
      \u0275\u0275text(162);
      \u0275\u0275pipe(163, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "th", 64);
      \u0275\u0275text(165);
      \u0275\u0275pipe(166, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(167, "tbody");
      \u0275\u0275template(168, EvsParamPanelComponent_tr_168_Template, 4, 4, "tr", 65)(169, EvsParamPanelComponent_tr_169_Template, 27, 18, "tr", 66);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(170, "nz-tab", 44);
      \u0275\u0275pipe(171, "translate");
      \u0275\u0275elementStart(172, "div", 45)(173, "input", 46);
      \u0275\u0275pipe(174, "translate");
      \u0275\u0275listener("ngModelChange", function EvsParamPanelComponent_Template_input_ngModelChange_173_listener($event) {
        return ctx.onFilterChange("list", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(175, "div", 47)(176, "button", 48);
      \u0275\u0275listener("click", function EvsParamPanelComponent_Template_button_click_176_listener() {
        return ctx.addRow("list");
      });
      \u0275\u0275element(177, "i", 49);
      \u0275\u0275text(178);
      \u0275\u0275pipe(179, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "button", 50);
      \u0275\u0275listener("click", function EvsParamPanelComponent_Template_button_click_180_listener() {
        return ctx.openDeleteConfirm("list");
      });
      \u0275\u0275element(181, "i", 51);
      \u0275\u0275text(182);
      \u0275\u0275pipe(183, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "button", 52);
      \u0275\u0275listener("click", function EvsParamPanelComponent_Template_button_click_184_listener() {
        return ctx.saveTab("list");
      });
      \u0275\u0275element(185, "i", 53);
      \u0275\u0275text(186);
      \u0275\u0275pipe(187, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(188, "nz-table", 54, 3)(190, "thead")(191, "tr")(192, "th", 55)(193, "label", 56);
      \u0275\u0275listener("ngModelChange", function EvsParamPanelComponent_Template_label_ngModelChange_193_listener($event) {
        \u0275\u0275restoreView(_r1);
        const listTable_r46 = \u0275\u0275reference(189);
        return \u0275\u0275resetView(ctx.toggleAllOnPage("list", listTable_r46.data, $event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "th", 57);
      \u0275\u0275text(195);
      \u0275\u0275pipe(196, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(197, "th", 59);
      \u0275\u0275text(198);
      \u0275\u0275pipe(199, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "th", 63);
      \u0275\u0275text(201);
      \u0275\u0275pipe(202, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(203, "th", 67);
      \u0275\u0275text(204);
      \u0275\u0275pipe(205, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(206, "th", 68);
      \u0275\u0275text(207);
      \u0275\u0275pipe(208, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(209, "th", 63);
      \u0275\u0275text(210);
      \u0275\u0275pipe(211, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(212, "th", 64);
      \u0275\u0275text(213);
      \u0275\u0275pipe(214, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(215, "tbody");
      \u0275\u0275template(216, EvsParamPanelComponent_tr_216_Template, 4, 4, "tr", 65)(217, EvsParamPanelComponent_tr_217_Template, 25, 16, "tr", 66);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(218, "nz-tab", 44);
      \u0275\u0275pipe(219, "translate");
      \u0275\u0275elementStart(220, "div", 45)(221, "input", 46);
      \u0275\u0275pipe(222, "translate");
      \u0275\u0275listener("ngModelChange", function EvsParamPanelComponent_Template_input_ngModelChange_221_listener($event) {
        return ctx.onFilterChange("group", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(223, "div", 47)(224, "button", 48);
      \u0275\u0275listener("click", function EvsParamPanelComponent_Template_button_click_224_listener() {
        return ctx.addRow("group");
      });
      \u0275\u0275element(225, "i", 49);
      \u0275\u0275text(226);
      \u0275\u0275pipe(227, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "button", 50);
      \u0275\u0275listener("click", function EvsParamPanelComponent_Template_button_click_228_listener() {
        return ctx.openDeleteConfirm("group");
      });
      \u0275\u0275element(229, "i", 51);
      \u0275\u0275text(230);
      \u0275\u0275pipe(231, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(232, "button", 52);
      \u0275\u0275listener("click", function EvsParamPanelComponent_Template_button_click_232_listener() {
        return ctx.saveTab("group");
      });
      \u0275\u0275element(233, "i", 53);
      \u0275\u0275text(234);
      \u0275\u0275pipe(235, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(236, "nz-table", 54, 4)(238, "thead")(239, "tr")(240, "th", 55)(241, "label", 56);
      \u0275\u0275listener("ngModelChange", function EvsParamPanelComponent_Template_label_ngModelChange_241_listener($event) {
        \u0275\u0275restoreView(_r1);
        const groupTable_r60 = \u0275\u0275reference(237);
        return \u0275\u0275resetView(ctx.toggleAllOnPage("group", groupTable_r60.data, $event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(242, "th", 57);
      \u0275\u0275text(243);
      \u0275\u0275pipe(244, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(245, "th", 59);
      \u0275\u0275text(246);
      \u0275\u0275pipe(247, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(248, "th", 63);
      \u0275\u0275text(249);
      \u0275\u0275pipe(250, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(251, "th", 67);
      \u0275\u0275text(252);
      \u0275\u0275pipe(253, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(254, "th", 63);
      \u0275\u0275text(255);
      \u0275\u0275pipe(256, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(257, "th", 64);
      \u0275\u0275text(258);
      \u0275\u0275pipe(259, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(260, "tbody");
      \u0275\u0275template(261, EvsParamPanelComponent_tr_261_Template, 4, 4, "tr", 65)(262, EvsParamPanelComponent_tr_262_Template, 21, 14, "tr", 66);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(263, "nz-tab", 44);
      \u0275\u0275pipe(264, "translate");
      \u0275\u0275elementStart(265, "div", 45)(266, "input", 46);
      \u0275\u0275pipe(267, "translate");
      \u0275\u0275listener("ngModelChange", function EvsParamPanelComponent_Template_input_ngModelChange_266_listener($event) {
        return ctx.onFilterChange("family", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(268, "div", 47)(269, "button", 48);
      \u0275\u0275listener("click", function EvsParamPanelComponent_Template_button_click_269_listener() {
        return ctx.addRow("family");
      });
      \u0275\u0275element(270, "i", 49);
      \u0275\u0275text(271);
      \u0275\u0275pipe(272, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(273, "button", 50);
      \u0275\u0275listener("click", function EvsParamPanelComponent_Template_button_click_273_listener() {
        return ctx.openDeleteConfirm("family");
      });
      \u0275\u0275element(274, "i", 51);
      \u0275\u0275text(275);
      \u0275\u0275pipe(276, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(277, "button", 52);
      \u0275\u0275listener("click", function EvsParamPanelComponent_Template_button_click_277_listener() {
        return ctx.saveTab("family");
      });
      \u0275\u0275element(278, "i", 53);
      \u0275\u0275text(279);
      \u0275\u0275pipe(280, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(281, "nz-table", 54, 5)(283, "thead")(284, "tr")(285, "th", 55)(286, "label", 56);
      \u0275\u0275listener("ngModelChange", function EvsParamPanelComponent_Template_label_ngModelChange_286_listener($event) {
        \u0275\u0275restoreView(_r1);
        const familyTable_r71 = \u0275\u0275reference(282);
        return \u0275\u0275resetView(ctx.toggleAllOnPage("family", familyTable_r71.data, $event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(287, "th", 57);
      \u0275\u0275text(288);
      \u0275\u0275pipe(289, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(290, "th", 59);
      \u0275\u0275text(291);
      \u0275\u0275pipe(292, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(293, "th", 63);
      \u0275\u0275text(294);
      \u0275\u0275pipe(295, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(296, "th", 67);
      \u0275\u0275text(297);
      \u0275\u0275pipe(298, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(299, "th", 63);
      \u0275\u0275text(300);
      \u0275\u0275pipe(301, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(302, "th", 64);
      \u0275\u0275text(303);
      \u0275\u0275pipe(304, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(305, "tbody");
      \u0275\u0275template(306, EvsParamPanelComponent_tr_306_Template, 4, 4, "tr", 65)(307, EvsParamPanelComponent_tr_307_Template, 21, 14, "tr", 66);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(308, "nz-tab", 44);
      \u0275\u0275pipe(309, "translate");
      \u0275\u0275elementStart(310, "div", 45)(311, "input", 46);
      \u0275\u0275pipe(312, "translate");
      \u0275\u0275listener("ngModelChange", function EvsParamPanelComponent_Template_input_ngModelChange_311_listener($event) {
        return ctx.onFilterChange("affirm", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(313, "div", 47)(314, "button", 48);
      \u0275\u0275listener("click", function EvsParamPanelComponent_Template_button_click_314_listener() {
        return ctx.addRow("affirm");
      });
      \u0275\u0275element(315, "i", 49);
      \u0275\u0275text(316);
      \u0275\u0275pipe(317, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(318, "button", 50);
      \u0275\u0275listener("click", function EvsParamPanelComponent_Template_button_click_318_listener() {
        return ctx.openDeleteConfirm("affirm");
      });
      \u0275\u0275element(319, "i", 51);
      \u0275\u0275text(320);
      \u0275\u0275pipe(321, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(322, "button", 52);
      \u0275\u0275listener("click", function EvsParamPanelComponent_Template_button_click_322_listener() {
        return ctx.saveTab("affirm");
      });
      \u0275\u0275element(323, "i", 53);
      \u0275\u0275text(324);
      \u0275\u0275pipe(325, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(326, "nz-table", 54, 6)(328, "thead")(329, "tr")(330, "th", 55)(331, "label", 56);
      \u0275\u0275listener("ngModelChange", function EvsParamPanelComponent_Template_label_ngModelChange_331_listener($event) {
        \u0275\u0275restoreView(_r1);
        const affirmTable_r82 = \u0275\u0275reference(327);
        return \u0275\u0275resetView(ctx.toggleAllOnPage("affirm", affirmTable_r82.data, $event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(332, "th", 57);
      \u0275\u0275text(333);
      \u0275\u0275pipe(334, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(335, "th", 63);
      \u0275\u0275text(336);
      \u0275\u0275pipe(337, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(338, "th", 67);
      \u0275\u0275text(339);
      \u0275\u0275pipe(340, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(341, "th", 69);
      \u0275\u0275text(342);
      \u0275\u0275pipe(343, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(344, "th", 63);
      \u0275\u0275text(345);
      \u0275\u0275pipe(346, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(347, "th", 64);
      \u0275\u0275text(348);
      \u0275\u0275pipe(349, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(350, "tbody");
      \u0275\u0275template(351, EvsParamPanelComponent_tr_351_Template, 4, 4, "tr", 65)(352, EvsParamPanelComponent_tr_352_Template, 21, 14, "tr", 66);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275template(353, EvsParamPanelComponent_ng_template_353_Template, 2, 5, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(355, "nz-modal", 70);
      \u0275\u0275pipe(356, "translate");
      \u0275\u0275pipe(357, "translate");
      \u0275\u0275pipe(358, "translate");
      \u0275\u0275listener("nzOnCancel", function EvsParamPanelComponent_Template_nz_modal_nzOnCancel_355_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function EvsParamPanelComponent_Template_nz_modal_nzOnOk_355_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(359, EvsParamPanelComponent_ng_container_359_Template, 8, 9, "ng-container", 71);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const gradeTable_r3 = \u0275\u0275reference(36);
      const itemTable_r22 = \u0275\u0275reference(93);
      const objectTable_r32 = \u0275\u0275reference(138);
      const listTable_r46 = \u0275\u0275reference(189);
      const groupTable_r60 = \u0275\u0275reference(237);
      const familyTable_r71 = \u0275\u0275reference(282);
      const affirmTable_r82 = \u0275\u0275reference(327);
      const eppTotalTpl_r96 = \u0275\u0275reference(354);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 185, "evsParam.label.evalName", "T\xEAn \u0111\xE1nh gi\xE1"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.resumeSeq);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(9, 188, "common.select", "-- Ch\u1ECDn --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.resumeOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 191, "evsParam.btn.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(18, 194, "evsParam.tab.grade", "C\u1EA5p \u0111\xE1nh gi\xE1"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.grade.filterText())("placeholder", \u0275\u0275pipeBind2(21, 197, "evsParam.label.quickFilter", "L\u1ECDc nhanh"));
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 200, "evsParam.btn.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(30, 203, "evsParam.btn.delete", "X\xF3a"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.grade.saving());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(34, 206, "evsParam.btn.save", "L\u01B0u"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzData", ctx.grade.filteredRows())("nzLoading", ctx.grade.loading())("nzPageSize", 10)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", eppTotalTpl_r96)("nzScroll", \u0275\u0275pureFunction0(455, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.allCheckedOnPage("grade", gradeTable_r3.data))("nzIndeterminate", ctx.someCheckedOnPage("grade", gradeTable_r3.data));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 209, "common.stt", "No."));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 212, "evsParam.col.evalType", "Lo\u1EA1i \u0110G"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 215, "evsParam.col.evalGrade", "C\u1EA5p \u0110G"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(52, 218, "evsParam.col.include", "Bao g\u1ED3m"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(55, 221, "evsParam.col.startScore", "\u0110i\u1EC3m \u0111\u1EA7u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(58, 224, "evsParam.col.endScore", "\u0110i\u1EC3m cu\u1ED1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(61, 227, "evsParam.col.score", "\u0110i\u1EC3m"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(64, 230, "evsParam.col.remark", "Ghi ch\xFA"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(67, 233, "evsParam.col.updatedBy", "Ng\u01B0\u1EDDi thay \u0111\u1ED5i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(70, 236, "evsParam.col.updateTime", "Th\u1EDDi gian T\u0110"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.grade.loading() && gradeTable_r3.data.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", gradeTable_r3.data);
      \u0275\u0275advance();
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(75, 239, "evsParam.tab.item", "C\u1EA5p h\u1EA1ng m\u1EE5c \u0111\xE1nh gi\xE1"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.item.filterText())("placeholder", \u0275\u0275pipeBind2(78, 242, "evsParam.label.quickFilter", "L\u1ECDc nhanh"));
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(83, 245, "evsParam.btn.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(87, 248, "evsParam.btn.delete", "X\xF3a"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.item.saving());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(91, 251, "evsParam.btn.save", "L\u01B0u"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzData", ctx.item.filteredRows())("nzLoading", ctx.item.loading())("nzPageSize", 10)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", eppTotalTpl_r96)("nzScroll", \u0275\u0275pureFunction0(456, _c1));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.allCheckedOnPage("item", itemTable_r22.data))("nzIndeterminate", ctx.someCheckedOnPage("item", itemTable_r22.data));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(100, 254, "common.stt", "No."));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(103, 257, "evsParam.col.code", "M\xE3"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(106, 260, "evsParam.col.name", "T\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(109, 263, "evsParam.col.score", "\u0110i\u1EC3m"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(112, 266, "evsParam.col.updatedBy", "Ng\u01B0\u1EDDi thay \u0111\u1ED5i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(115, 269, "evsParam.col.updateTime", "Th\u1EDDi gian T\u0110"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.item.loading() && itemTable_r22.data.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", itemTable_r22.data);
      \u0275\u0275advance();
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(120, 272, "evsParam.tab.object", "\u0110\u1ED1i t\u01B0\u1EE3ng \u0111\xE1nh gi\xE1"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.object.filterText())("placeholder", \u0275\u0275pipeBind2(123, 275, "evsParam.label.quickFilter", "L\u1ECDc nhanh"));
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(128, 278, "evsParam.btn.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(132, 281, "evsParam.btn.delete", "X\xF3a"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.object.saving());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(136, 284, "evsParam.btn.save", "L\u01B0u"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzData", ctx.object.filteredRows())("nzLoading", ctx.object.loading())("nzPageSize", 10)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", eppTotalTpl_r96)("nzScroll", \u0275\u0275pureFunction0(457, _c2));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.allCheckedOnPage("object", objectTable_r32.data))("nzIndeterminate", ctx.someCheckedOnPage("object", objectTable_r32.data));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(145, 287, "common.stt", "No."));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(148, 290, "evsParam.col.code", "M\xE3"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(151, 293, "evsParam.col.name", "T\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(154, 296, "evsParam.col.include", "Bao g\u1ED3m"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(157, 299, "evsParam.col.defaultGrade", "C\u1EA5p m\u1EB7c \u0111\u1ECBnh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(160, 302, "evsParam.col.formula", "H\xECnh th\u1EE9c ti\xEAu chu\u1EA9n"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(163, 305, "evsParam.col.updatedBy", "Ng\u01B0\u1EDDi thay \u0111\u1ED5i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(166, 308, "evsParam.col.updateTime", "Th\u1EDDi gian T\u0110"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.object.loading() && objectTable_r32.data.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", objectTable_r32.data);
      \u0275\u0275advance();
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(171, 311, "evsParam.tab.list", "B\u1EA3ng \u0111\xE1nh gi\xE1"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.list.filterText())("placeholder", \u0275\u0275pipeBind2(174, 314, "evsParam.label.quickFilter", "L\u1ECDc nhanh"));
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(179, 317, "evsParam.btn.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(183, 320, "evsParam.btn.delete", "X\xF3a"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.list.saving());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(187, 323, "evsParam.btn.save", "L\u01B0u"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzData", ctx.list.filteredRows())("nzLoading", ctx.list.loading())("nzPageSize", 10)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", eppTotalTpl_r96)("nzScroll", \u0275\u0275pureFunction0(458, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.allCheckedOnPage("list", listTable_r46.data))("nzIndeterminate", ctx.someCheckedOnPage("list", listTable_r46.data));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(196, 326, "common.stt", "No."));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(199, 329, "evsParam.col.code", "M\xE3"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(202, 332, "evsParam.col.name", "T\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(205, 335, "evsParam.col.formula", "H\xECnh th\u1EE9c ti\xEAu chu\u1EA9n"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(208, 338, "evsParam.col.initialStatus", "Tr\u1EA1ng th\xE1i ban \u0111\u1EA7u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(211, 341, "evsParam.col.updatedBy", "Ng\u01B0\u1EDDi thay \u0111\u1ED5i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(214, 344, "evsParam.col.updateTime", "Th\u1EDDi gian T\u0110"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.list.loading() && listTable_r46.data.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", listTable_r46.data);
      \u0275\u0275advance();
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(219, 347, "evsParam.tab.group", "Nh\xF3m nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.group.filterText())("placeholder", \u0275\u0275pipeBind2(222, 350, "evsParam.label.quickFilter", "L\u1ECDc nhanh"));
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(227, 353, "evsParam.btn.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(231, 356, "evsParam.btn.delete", "X\xF3a"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.group.saving());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(235, 359, "evsParam.btn.save", "L\u01B0u"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzData", ctx.group.filteredRows())("nzLoading", ctx.group.loading())("nzPageSize", 10)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", eppTotalTpl_r96)("nzScroll", \u0275\u0275pureFunction0(459, _c3));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.allCheckedOnPage("group", groupTable_r60.data))("nzIndeterminate", ctx.someCheckedOnPage("group", groupTable_r60.data));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(244, 362, "common.stt", "No."));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(247, 365, "evsParam.col.code", "M\xE3"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(250, 368, "evsParam.col.name", "T\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(253, 371, "evsParam.col.formula", "H\xECnh th\u1EE9c ti\xEAu chu\u1EA9n"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(256, 374, "evsParam.col.updatedBy", "Ng\u01B0\u1EDDi thay \u0111\u1ED5i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(259, 377, "evsParam.col.updateTime", "Th\u1EDDi gian T\u0110"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.group.loading() && groupTable_r60.data.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", groupTable_r60.data);
      \u0275\u0275advance();
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(264, 380, "evsParam.tab.family", "Nh\xF3m ch\u1EE9c v\u1EE5"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.family.filterText())("placeholder", \u0275\u0275pipeBind2(267, 383, "evsParam.label.quickFilter", "L\u1ECDc nhanh"));
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(272, 386, "evsParam.btn.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(276, 389, "evsParam.btn.delete", "X\xF3a"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.family.saving());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(280, 392, "evsParam.btn.save", "L\u01B0u"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzData", ctx.family.filteredRows())("nzLoading", ctx.family.loading())("nzPageSize", 10)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", eppTotalTpl_r96)("nzScroll", \u0275\u0275pureFunction0(460, _c3));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.allCheckedOnPage("family", familyTable_r71.data))("nzIndeterminate", ctx.someCheckedOnPage("family", familyTable_r71.data));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(289, 395, "common.stt", "No."));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(292, 398, "evsParam.col.code", "M\xE3"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(295, 401, "evsParam.col.name", "T\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(298, 404, "evsParam.col.formula", "H\xECnh th\u1EE9c ti\xEAu chu\u1EA9n"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(301, 407, "evsParam.col.updatedBy", "Ng\u01B0\u1EDDi thay \u0111\u1ED5i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(304, 410, "evsParam.col.updateTime", "Th\u1EDDi gian T\u0110"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.family.loading() && familyTable_r71.data.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", familyTable_r71.data);
      \u0275\u0275advance();
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(309, 413, "evsParam.tab.affirm", "Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.affirm.filterText())("placeholder", \u0275\u0275pipeBind2(312, 416, "evsParam.label.quickFilter", "L\u1ECDc nhanh"));
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(317, 419, "evsParam.btn.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(321, 422, "evsParam.btn.delete", "X\xF3a"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.affirm.saving());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(325, 425, "evsParam.btn.save", "L\u01B0u"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzData", ctx.affirm.filteredRows())("nzLoading", ctx.affirm.loading())("nzPageSize", 10)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", eppTotalTpl_r96)("nzScroll", \u0275\u0275pureFunction0(461, _c3));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.allCheckedOnPage("affirm", affirmTable_r82.data))("nzIndeterminate", ctx.someCheckedOnPage("affirm", affirmTable_r82.data));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(334, 428, "common.stt", "No."));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(337, 431, "evsParam.col.evaluator", "Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(340, 434, "evsParam.col.evalGroup", "Nh\xF3m \u0111\xE1nh gi\xE1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(343, 437, "evsParam.col.ruleId", "ID quy t\u1EAFc"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(346, 440, "evsParam.col.updatedBy", "Ng\u01B0\u1EDDi thay \u0111\u1ED5i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(349, 443, "evsParam.col.updateTime", "Th\u1EDDi gian T\u0110"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.affirm.loading() && affirmTable_r82.data.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", affirmTable_r82.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(356, 446, "evsParam.modal.deleteTitle", "X\xE1c nh\u1EADn x\xF3a"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(357, 449, "evsParam.btn.delete", "X\xF3a"))("nzCancelText", \u0275\u0275pipeBind2(358, 452, "evsParam.btn.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzTabsModule, NzTabsComponent, NzTabComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzCheckboxModule, NzCheckboxComponent, NzModalModule, NzModalComponent, NzModalContentDirective, TranslatePipe], styles: ["\n  .epp-row-edit {\n  background-color: #fffde7 !important;\n  cursor: default;\n}\n  tr:not(.epp-row-edit) {\n  cursor: pointer;\n}\n  .epp-row-new td {\n  font-style: italic;\n}\n/*# sourceMappingURL=evs-param-panel.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EvsParamPanelComponent, [{
    type: Component,
    args: [{ selector: "app-evs-param-panel", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzTabsModule,
      NzInputModule,
      NzSelectModule,
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
          <label class="form-label">{{ 'evsParam.label.evalName' | translate:'T\xEAn \u0111\xE1nh gi\xE1' }}</label>
          <nz-select class="w-100" [(ngModel)]="resumeSeq" name="eppResumeSeq"
                     [nzPlaceHolder]="'common.select' | translate:'-- Ch\u1ECDn --'">
            <nz-option *ngFor="let r of resumeOptions()" [nzValue]="r.seq" [nzLabel]="r.resumeName"></nz-option>
          </nz-select>
        </div>
        <button nz-button nzType="primary" type="submit">
          <i class="bx bx-search"></i> {{ 'evsParam.btn.search' | translate:'Tra c\u1EE9u' }}
        </button>
      </form>
    </nz-card>

    <nz-card>
      <nz-tabs>
        <!-- \u2500\u2500 Tab C\u1EA5p \u0111\xE1nh gi\xE1 \u2500\u2500 -->
        <nz-tab [nzTitle]="'evsParam.tab.grade' | translate:'C\u1EA5p \u0111\xE1nh gi\xE1'">
          <div class="d-flex align-items-center justify-content-between mt-2 mb-2 flex-wrap gap-2">
            <input nz-input style="width:200px;" [ngModel]="grade.filterText()" (ngModelChange)="onFilterChange('grade', $event)"
                   [placeholder]="'evsParam.label.quickFilter' | translate:'L\u1ECDc nhanh'">
            <div class="d-flex align-items-center gap-2">
              <button nz-button nzType="primary" nzSize="small" type="button" (click)="addRow('grade')">
                <i class="bx bx-plus"></i> {{ 'evsParam.btn.addNew' | translate:'Th\xEAm m\u1EDBi' }}
              </button>
              <button nz-button nzDanger nzSize="small" type="button" (click)="openDeleteConfirm('grade')">
                <i class="bx bx-trash"></i> {{ 'evsParam.btn.delete' | translate:'X\xF3a' }}
              </button>
              <button nz-button nzType="primary" nzSize="small" type="button" [nzLoading]="grade.saving()" (click)="saveTab('grade')">
                <i class="bx bx-save"></i> {{ 'evsParam.btn.save' | translate:'L\u01B0u' }}
              </button>
            </div>
          </div>

          <nz-table [nzData]="grade.filteredRows()" [nzLoading]="grade.loading()" [nzPageSize]="10" [nzShowSizeChanger]="true"
                    [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="eppTotalTpl" [nzScroll]="{ x: '1100px' }" #gradeTable="nzTable">
            <thead>
              <tr>
                <th class="text-center" nzWidth="40px">
                  <label nz-checkbox [ngModel]="allCheckedOnPage('grade', gradeTable.data)"
                         [nzIndeterminate]="someCheckedOnPage('grade', gradeTable.data)"
                         (ngModelChange)="toggleAllOnPage('grade', gradeTable.data, $event)"></label>
                </th>
                <th class="text-center" nzWidth="50px">{{ 'common.stt' | translate:'No.' }}</th>
                <th nzWidth="150px">{{ 'evsParam.col.evalType' | translate:'Lo\u1EA1i \u0110G' }}</th>
                <th nzWidth="140px">{{ 'evsParam.col.evalGrade' | translate:'C\u1EA5p \u0110G' }}</th>
                <th class="text-center" nzWidth="80px">{{ 'evsParam.col.include' | translate:'Bao g\u1ED3m' }}</th>
                <th class="text-center" nzWidth="100px">{{ 'evsParam.col.startScore' | translate:'\u0110i\u1EC3m \u0111\u1EA7u' }}</th>
                <th class="text-center" nzWidth="100px">{{ 'evsParam.col.endScore' | translate:'\u0110i\u1EC3m cu\u1ED1i' }}</th>
                <th class="text-center" nzWidth="90px">{{ 'evsParam.col.score' | translate:'\u0110i\u1EC3m' }}</th>
                <th nzWidth="200px">{{ 'evsParam.col.remark' | translate:'Ghi ch\xFA' }}</th>
                <th nzWidth="200px">{{ 'evsParam.col.updatedBy' | translate:'Ng\u01B0\u1EDDi thay \u0111\u1ED5i' }}</th>
                <th class="text-center" nzWidth="120px">{{ 'evsParam.col.updateTime' | translate:'Th\u1EDDi gian T\u0110' }}</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngIf="!grade.loading() && gradeTable.data.length === 0">
                <td colspan="11" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
              </tr>
              <tr *ngFor="let row of gradeTable.data; let i = index"
                  [class.epp-row-edit]="row.editing" [class.epp-row-new]="row.isNew" (click)="rowClick('grade', row)">
                <td class="text-center" (click)="$event.stopPropagation()">
                  <label nz-checkbox [ngModel]="isChecked('grade', row)" (ngModelChange)="toggleChecked('grade', row, $event)"></label>
                </td>
                <td class="text-center">{{ i + 1 }}</td>
                <td (click)="$event.stopPropagation()">
                  <nz-select *ngIf="row.editing; else evalTypeView" class="w-100" [(ngModel)]="row.evsType"
                             (ngModelChange)="onEvsTypeChange(row, $event)" [nzPlaceHolder]="'evsParam.js.defaultSelect' | translate:'-- Ch\u1ECDn --'">
                    <nz-option *ngFor="let o of evalTypeOptions()" [nzValue]="o.codeNo" [nzLabel]="o.codeName"></nz-option>
                  </nz-select>
                  <ng-template #evalTypeView>{{ row.evsTypeName || row.evsType }}</ng-template>
                </td>
                <td (click)="$event.stopPropagation()">
                  <nz-select *ngIf="row.editing; else evalGradeView" class="w-100" [(ngModel)]="row.evsGrade"
                             (ngModelChange)="onEvsGradeChange(row, $event)" [nzPlaceHolder]="'evsParam.js.defaultSelect' | translate:'-- Ch\u1ECDn --'">
                    <nz-option *ngFor="let o of evalGradeOptions()" [nzValue]="o.codeNo" [nzLabel]="o.description || o.codeName"></nz-option>
                  </nz-select>
                  <ng-template #evalGradeView>{{ row.evsGradeName || row.evsGrade }}</ng-template>
                </td>
                <td class="text-center" (click)="$event.stopPropagation()">
                  <label nz-checkbox [ngModel]="isIncludeOn(row)" [nzDisabled]="!row.editing" (ngModelChange)="setIncludeOn(row, $event)"></label>
                </td>
                <td class="text-center" (click)="$event.stopPropagation()">
                  <input *ngIf="row.editing; else startScoreView" nz-input type="number" [(ngModel)]="row.startScore">
                  <ng-template #startScoreView>{{ row.startScore }}</ng-template>
                </td>
                <td class="text-center" (click)="$event.stopPropagation()">
                  <input *ngIf="row.editing; else endScoreView" nz-input type="number" [(ngModel)]="row.endScore">
                  <ng-template #endScoreView>{{ row.endScore }}</ng-template>
                </td>
                <td class="text-center" (click)="$event.stopPropagation()">
                  <input *ngIf="row.editing; else scoreView" nz-input type="number" [(ngModel)]="row.score">
                  <ng-template #scoreView>{{ row.score }}</ng-template>
                </td>
                <td (click)="$event.stopPropagation()">
                  <input *ngIf="row.editing; else remarkView" nz-input [(ngModel)]="row.remark">
                  <ng-template #remarkView>{{ row.remark }}</ng-template>
                </td>
                <td class="small">{{ row.updatedBy }}</td>
                <td class="text-center small">{{ toDmy(row.updateDate) }}</td>
              </tr>
            </tbody>
          </nz-table>
        </nz-tab>

        <!-- \u2500\u2500 Tab C\u1EA5p h\u1EA1ng m\u1EE5c \u0111\xE1nh gi\xE1 \u2500\u2500 -->
        <nz-tab [nzTitle]="'evsParam.tab.item' | translate:'C\u1EA5p h\u1EA1ng m\u1EE5c \u0111\xE1nh gi\xE1'">
          <div class="d-flex align-items-center justify-content-between mt-2 mb-2 flex-wrap gap-2">
            <input nz-input style="width:200px;" [ngModel]="item.filterText()" (ngModelChange)="onFilterChange('item', $event)"
                   [placeholder]="'evsParam.label.quickFilter' | translate:'L\u1ECDc nhanh'">
            <div class="d-flex align-items-center gap-2">
              <button nz-button nzType="primary" nzSize="small" type="button" (click)="addRow('item')">
                <i class="bx bx-plus"></i> {{ 'evsParam.btn.addNew' | translate:'Th\xEAm m\u1EDBi' }}
              </button>
              <button nz-button nzDanger nzSize="small" type="button" (click)="openDeleteConfirm('item')">
                <i class="bx bx-trash"></i> {{ 'evsParam.btn.delete' | translate:'X\xF3a' }}
              </button>
              <button nz-button nzType="primary" nzSize="small" type="button" [nzLoading]="item.saving()" (click)="saveTab('item')">
                <i class="bx bx-save"></i> {{ 'evsParam.btn.save' | translate:'L\u01B0u' }}
              </button>
            </div>
          </div>

          <nz-table [nzData]="item.filteredRows()" [nzLoading]="item.loading()" [nzPageSize]="10" [nzShowSizeChanger]="true"
                    [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="eppTotalTpl" [nzScroll]="{ x: '700px' }" #itemTable="nzTable">
            <thead>
              <tr>
                <th class="text-center" nzWidth="40px">
                  <label nz-checkbox [ngModel]="allCheckedOnPage('item', itemTable.data)"
                         [nzIndeterminate]="someCheckedOnPage('item', itemTable.data)"
                         (ngModelChange)="toggleAllOnPage('item', itemTable.data, $event)"></label>
                </th>
                <th class="text-center" nzWidth="50px">{{ 'common.stt' | translate:'No.' }}</th>
                <th nzWidth="140px">{{ 'evsParam.col.code' | translate:'M\xE3' }}</th>
                <th nzWidth="220px">{{ 'evsParam.col.name' | translate:'T\xEAn' }}</th>
                <th class="text-center" nzWidth="100px">{{ 'evsParam.col.score' | translate:'\u0110i\u1EC3m' }}</th>
                <th nzWidth="200px">{{ 'evsParam.col.updatedBy' | translate:'Ng\u01B0\u1EDDi thay \u0111\u1ED5i' }}</th>
                <th class="text-center" nzWidth="120px">{{ 'evsParam.col.updateTime' | translate:'Th\u1EDDi gian T\u0110' }}</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngIf="!item.loading() && itemTable.data.length === 0">
                <td colspan="7" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
              </tr>
              <tr *ngFor="let row of itemTable.data; let i = index"
                  [class.epp-row-edit]="row.editing" [class.epp-row-new]="row.isNew" (click)="rowClick('item', row)">
                <td class="text-center" (click)="$event.stopPropagation()">
                  <label nz-checkbox [ngModel]="isChecked('item', row)" (ngModelChange)="toggleChecked('item', row, $event)"></label>
                </td>
                <td class="text-center">{{ i + 1 }}</td>
                <td (click)="$event.stopPropagation()">
                  <input *ngIf="row.editing; else itemCodeNoView" nz-input [(ngModel)]="row.codeNo" maxlength="20">
                  <ng-template #itemCodeNoView>{{ row.codeNo }}</ng-template>
                </td>
                <td (click)="$event.stopPropagation()">
                  <input *ngIf="row.editing; else itemCodeNameView" nz-input [(ngModel)]="row.codeName" maxlength="200">
                  <ng-template #itemCodeNameView>{{ row.codeName }}</ng-template>
                </td>
                <td class="text-center" (click)="$event.stopPropagation()">
                  <input *ngIf="row.editing; else itemScoreView" nz-input type="number" [(ngModel)]="row.evsScore">
                  <ng-template #itemScoreView>{{ row.evsScore }}</ng-template>
                </td>
                <td class="small">{{ row.updatedBy }}</td>
                <td class="text-center small">{{ toDmy(row.updateDate) }}</td>
              </tr>
            </tbody>
          </nz-table>
        </nz-tab>

        <!-- \u2500\u2500 Tab \u0110\u1ED1i t\u01B0\u1EE3ng \u0111\xE1nh gi\xE1 \u2500\u2500 -->
        <nz-tab [nzTitle]="'evsParam.tab.object' | translate:'\u0110\u1ED1i t\u01B0\u1EE3ng \u0111\xE1nh gi\xE1'">
          <div class="d-flex align-items-center justify-content-between mt-2 mb-2 flex-wrap gap-2">
            <input nz-input style="width:200px;" [ngModel]="object.filterText()" (ngModelChange)="onFilterChange('object', $event)"
                   [placeholder]="'evsParam.label.quickFilter' | translate:'L\u1ECDc nhanh'">
            <div class="d-flex align-items-center gap-2">
              <button nz-button nzType="primary" nzSize="small" type="button" (click)="addRow('object')">
                <i class="bx bx-plus"></i> {{ 'evsParam.btn.addNew' | translate:'Th\xEAm m\u1EDBi' }}
              </button>
              <button nz-button nzDanger nzSize="small" type="button" (click)="openDeleteConfirm('object')">
                <i class="bx bx-trash"></i> {{ 'evsParam.btn.delete' | translate:'X\xF3a' }}
              </button>
              <button nz-button nzType="primary" nzSize="small" type="button" [nzLoading]="object.saving()" (click)="saveTab('object')">
                <i class="bx bx-save"></i> {{ 'evsParam.btn.save' | translate:'L\u01B0u' }}
              </button>
            </div>
          </div>

          <nz-table [nzData]="object.filteredRows()" [nzLoading]="object.loading()" [nzPageSize]="10" [nzShowSizeChanger]="true"
                    [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="eppTotalTpl" [nzScroll]="{ x: '1150px' }" #objectTable="nzTable">
            <thead>
              <tr>
                <th class="text-center" nzWidth="40px">
                  <label nz-checkbox [ngModel]="allCheckedOnPage('object', objectTable.data)"
                         [nzIndeterminate]="someCheckedOnPage('object', objectTable.data)"
                         (ngModelChange)="toggleAllOnPage('object', objectTable.data, $event)"></label>
                </th>
                <th class="text-center" nzWidth="50px">{{ 'common.stt' | translate:'No.' }}</th>
                <th nzWidth="140px">{{ 'evsParam.col.code' | translate:'M\xE3' }}</th>
                <th nzWidth="220px">{{ 'evsParam.col.name' | translate:'T\xEAn' }}</th>
                <th class="text-center" nzWidth="80px">{{ 'evsParam.col.include' | translate:'Bao g\u1ED3m' }}</th>
                <th nzWidth="140px">{{ 'evsParam.col.defaultGrade' | translate:'C\u1EA5p m\u1EB7c \u0111\u1ECBnh' }}</th>
                <th nzWidth="220px">{{ 'evsParam.col.formula' | translate:'H\xECnh th\u1EE9c ti\xEAu chu\u1EA9n' }}</th>
                <th nzWidth="200px">{{ 'evsParam.col.updatedBy' | translate:'Ng\u01B0\u1EDDi thay \u0111\u1ED5i' }}</th>
                <th class="text-center" nzWidth="120px">{{ 'evsParam.col.updateTime' | translate:'Th\u1EDDi gian T\u0110' }}</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngIf="!object.loading() && objectTable.data.length === 0">
                <td colspan="9" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
              </tr>
              <tr *ngFor="let row of objectTable.data; let i = index"
                  [class.epp-row-edit]="row.editing" [class.epp-row-new]="row.isNew" (click)="rowClick('object', row)">
                <td class="text-center" (click)="$event.stopPropagation()">
                  <label nz-checkbox [ngModel]="isChecked('object', row)" (ngModelChange)="toggleChecked('object', row, $event)"></label>
                </td>
                <td class="text-center">{{ i + 1 }}</td>
                <td (click)="$event.stopPropagation()">
                  <input *ngIf="row.editing; else objCodeNoView" nz-input [(ngModel)]="row.codeNo" maxlength="20">
                  <ng-template #objCodeNoView>{{ row.codeNo }}</ng-template>
                </td>
                <td (click)="$event.stopPropagation()">
                  <input *ngIf="row.editing; else objCodeNameView" nz-input [(ngModel)]="row.codeName" maxlength="200">
                  <ng-template #objCodeNameView>{{ row.codeName }}</ng-template>
                </td>
                <td class="text-center" (click)="$event.stopPropagation()">
                  <label nz-checkbox [ngModel]="isIncludeOn(row)" [nzDisabled]="!row.editing" (ngModelChange)="setIncludeOn(row, $event)"></label>
                </td>
                <td (click)="$event.stopPropagation()">
                  <nz-select *ngIf="row.editing; else objGradeView" class="w-100" [(ngModel)]="row.evsGrade"
                             (ngModelChange)="onEvsGradeChange(row, $event)" [nzPlaceHolder]="'evsParam.js.defaultSelect' | translate:'-- Ch\u1ECDn --'">
                    <nz-option *ngFor="let o of evalGradeOptions()" [nzValue]="o.codeNo" [nzLabel]="o.description || o.codeName"></nz-option>
                  </nz-select>
                  <ng-template #objGradeView>{{ row.evsGradeName || row.evsGrade }}</ng-template>
                </td>
                <td (click)="$event.stopPropagation()">
                  <nz-select *ngIf="row.editing; else objFormulaView" class="w-100" [(ngModel)]="row.formula"
                             (ngModelChange)="onFormulaChange(row, $event)" [nzPlaceHolder]="'evsParam.js.defaultSelect' | translate:'-- Ch\u1ECDn --'">
                    <nz-option *ngFor="let o of formulaOptions()" [nzValue]="o.codeNo" [nzLabel]="o.codeName"></nz-option>
                  </nz-select>
                  <ng-template #objFormulaView>{{ formulaLabel(row.formula) }}</ng-template>
                </td>
                <td class="small">{{ row.updatedBy }}</td>
                <td class="text-center small">{{ toDmy(row.updateDate) }}</td>
              </tr>
            </tbody>
          </nz-table>
        </nz-tab>

        <!-- \u2500\u2500 Tab B\u1EA3ng \u0111\xE1nh gi\xE1 \u2500\u2500 -->
        <nz-tab [nzTitle]="'evsParam.tab.list' | translate:'B\u1EA3ng \u0111\xE1nh gi\xE1'">
          <div class="d-flex align-items-center justify-content-between mt-2 mb-2 flex-wrap gap-2">
            <input nz-input style="width:200px;" [ngModel]="list.filterText()" (ngModelChange)="onFilterChange('list', $event)"
                   [placeholder]="'evsParam.label.quickFilter' | translate:'L\u1ECDc nhanh'">
            <div class="d-flex align-items-center gap-2">
              <button nz-button nzType="primary" nzSize="small" type="button" (click)="addRow('list')">
                <i class="bx bx-plus"></i> {{ 'evsParam.btn.addNew' | translate:'Th\xEAm m\u1EDBi' }}
              </button>
              <button nz-button nzDanger nzSize="small" type="button" (click)="openDeleteConfirm('list')">
                <i class="bx bx-trash"></i> {{ 'evsParam.btn.delete' | translate:'X\xF3a' }}
              </button>
              <button nz-button nzType="primary" nzSize="small" type="button" [nzLoading]="list.saving()" (click)="saveTab('list')">
                <i class="bx bx-save"></i> {{ 'evsParam.btn.save' | translate:'L\u01B0u' }}
              </button>
            </div>
          </div>

          <nz-table [nzData]="list.filteredRows()" [nzLoading]="list.loading()" [nzPageSize]="10" [nzShowSizeChanger]="true"
                    [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="eppTotalTpl" [nzScroll]="{ x: '1100px' }" #listTable="nzTable">
            <thead>
              <tr>
                <th class="text-center" nzWidth="40px">
                  <label nz-checkbox [ngModel]="allCheckedOnPage('list', listTable.data)"
                         [nzIndeterminate]="someCheckedOnPage('list', listTable.data)"
                         (ngModelChange)="toggleAllOnPage('list', listTable.data, $event)"></label>
                </th>
                <th class="text-center" nzWidth="50px">{{ 'common.stt' | translate:'No.' }}</th>
                <th nzWidth="140px">{{ 'evsParam.col.code' | translate:'M\xE3' }}</th>
                <th nzWidth="200px">{{ 'evsParam.col.name' | translate:'T\xEAn' }}</th>
                <th nzWidth="220px">{{ 'evsParam.col.formula' | translate:'H\xECnh th\u1EE9c ti\xEAu chu\u1EA9n' }}</th>
                <th class="text-center" nzWidth="160px">{{ 'evsParam.col.initialStatus' | translate:'Tr\u1EA1ng th\xE1i ban \u0111\u1EA7u' }}</th>
                <th nzWidth="200px">{{ 'evsParam.col.updatedBy' | translate:'Ng\u01B0\u1EDDi thay \u0111\u1ED5i' }}</th>
                <th class="text-center" nzWidth="120px">{{ 'evsParam.col.updateTime' | translate:'Th\u1EDDi gian T\u0110' }}</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngIf="!list.loading() && listTable.data.length === 0">
                <td colspan="8" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
              </tr>
              <tr *ngFor="let row of listTable.data; let i = index"
                  [class.epp-row-edit]="row.editing" [class.epp-row-new]="row.isNew" (click)="rowClick('list', row)">
                <td class="text-center" (click)="$event.stopPropagation()">
                  <label nz-checkbox [ngModel]="isChecked('list', row)" (ngModelChange)="toggleChecked('list', row, $event)"></label>
                </td>
                <td class="text-center">{{ i + 1 }}</td>
                <td (click)="$event.stopPropagation()">
                  <input *ngIf="row.editing; else listCodeNoView" nz-input [(ngModel)]="row.codeNo" maxlength="20">
                  <ng-template #listCodeNoView>{{ row.codeNo }}</ng-template>
                </td>
                <td (click)="$event.stopPropagation()">
                  <input *ngIf="row.editing; else listCodeNameView" nz-input [(ngModel)]="row.codeName" maxlength="200">
                  <ng-template #listCodeNameView>{{ row.codeName }}</ng-template>
                </td>
                <td (click)="$event.stopPropagation()">
                  <nz-select *ngIf="row.editing; else listFormulaView" class="w-100" [(ngModel)]="row.formula"
                             (ngModelChange)="onFormulaChange(row, $event)" [nzPlaceHolder]="'evsParam.js.defaultSelect' | translate:'-- Ch\u1ECDn --'">
                    <nz-option *ngFor="let o of formulaOptions()" [nzValue]="o.codeNo" [nzLabel]="o.codeName"></nz-option>
                  </nz-select>
                  <ng-template #listFormulaView>{{ formulaLabel(row.formula) }}</ng-template>
                </td>
                <td class="text-center" (click)="$event.stopPropagation()">
                  <nz-select *ngIf="row.editing; else listStartStepView" class="w-100" [(ngModel)]="row.startStep"
                             (ngModelChange)="onStartStepChange(row, $event)" [nzPlaceHolder]="'evsParam.js.defaultSelect' | translate:'-- Ch\u1ECDn --'">
                    <nz-option *ngFor="let o of startStepOptions()" [nzValue]="o.codeNo" [nzLabel]="o.codeName"></nz-option>
                  </nz-select>
                  <ng-template #listStartStepView>{{ row.startStepName || row.startStep }}</ng-template>
                </td>
                <td class="small">{{ row.updatedBy }}</td>
                <td class="text-center small">{{ toDmy(row.updateDate) }}</td>
              </tr>
            </tbody>
          </nz-table>
        </nz-tab>

        <!-- \u2500\u2500 Tab Nh\xF3m nh\xE2n vi\xEAn \u2500\u2500 -->
        <nz-tab [nzTitle]="'evsParam.tab.group' | translate:'Nh\xF3m nh\xE2n vi\xEAn'">
          <div class="d-flex align-items-center justify-content-between mt-2 mb-2 flex-wrap gap-2">
            <input nz-input style="width:200px;" [ngModel]="group.filterText()" (ngModelChange)="onFilterChange('group', $event)"
                   [placeholder]="'evsParam.label.quickFilter' | translate:'L\u1ECDc nhanh'">
            <div class="d-flex align-items-center gap-2">
              <button nz-button nzType="primary" nzSize="small" type="button" (click)="addRow('group')">
                <i class="bx bx-plus"></i> {{ 'evsParam.btn.addNew' | translate:'Th\xEAm m\u1EDBi' }}
              </button>
              <button nz-button nzDanger nzSize="small" type="button" (click)="openDeleteConfirm('group')">
                <i class="bx bx-trash"></i> {{ 'evsParam.btn.delete' | translate:'X\xF3a' }}
              </button>
              <button nz-button nzType="primary" nzSize="small" type="button" [nzLoading]="group.saving()" (click)="saveTab('group')">
                <i class="bx bx-save"></i> {{ 'evsParam.btn.save' | translate:'L\u01B0u' }}
              </button>
            </div>
          </div>

          <nz-table [nzData]="group.filteredRows()" [nzLoading]="group.loading()" [nzPageSize]="10" [nzShowSizeChanger]="true"
                    [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="eppTotalTpl" [nzScroll]="{ x: '950px' }" #groupTable="nzTable">
            <thead>
              <tr>
                <th class="text-center" nzWidth="40px">
                  <label nz-checkbox [ngModel]="allCheckedOnPage('group', groupTable.data)"
                         [nzIndeterminate]="someCheckedOnPage('group', groupTable.data)"
                         (ngModelChange)="toggleAllOnPage('group', groupTable.data, $event)"></label>
                </th>
                <th class="text-center" nzWidth="50px">{{ 'common.stt' | translate:'No.' }}</th>
                <th nzWidth="140px">{{ 'evsParam.col.code' | translate:'M\xE3' }}</th>
                <th nzWidth="200px">{{ 'evsParam.col.name' | translate:'T\xEAn' }}</th>
                <th nzWidth="220px">{{ 'evsParam.col.formula' | translate:'H\xECnh th\u1EE9c ti\xEAu chu\u1EA9n' }}</th>
                <th nzWidth="200px">{{ 'evsParam.col.updatedBy' | translate:'Ng\u01B0\u1EDDi thay \u0111\u1ED5i' }}</th>
                <th class="text-center" nzWidth="120px">{{ 'evsParam.col.updateTime' | translate:'Th\u1EDDi gian T\u0110' }}</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngIf="!group.loading() && groupTable.data.length === 0">
                <td colspan="7" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
              </tr>
              <tr *ngFor="let row of groupTable.data; let i = index"
                  [class.epp-row-edit]="row.editing" [class.epp-row-new]="row.isNew" (click)="rowClick('group', row)">
                <td class="text-center" (click)="$event.stopPropagation()">
                  <label nz-checkbox [ngModel]="isChecked('group', row)" (ngModelChange)="toggleChecked('group', row, $event)"></label>
                </td>
                <td class="text-center">{{ i + 1 }}</td>
                <td (click)="$event.stopPropagation()">
                  <input *ngIf="row.editing; else groupCodeNoView" nz-input [(ngModel)]="row.codeNo" maxlength="20">
                  <ng-template #groupCodeNoView>{{ row.codeNo }}</ng-template>
                </td>
                <td (click)="$event.stopPropagation()">
                  <input *ngIf="row.editing; else groupCodeNameView" nz-input [(ngModel)]="row.codeName" maxlength="200">
                  <ng-template #groupCodeNameView>{{ row.codeName }}</ng-template>
                </td>
                <td (click)="$event.stopPropagation()">
                  <nz-select *ngIf="row.editing; else groupFormulaView" class="w-100" [(ngModel)]="row.formula"
                             (ngModelChange)="onFormulaChange(row, $event)" [nzPlaceHolder]="'evsParam.js.defaultSelect' | translate:'-- Ch\u1ECDn --'">
                    <nz-option *ngFor="let o of formulaOptions()" [nzValue]="o.codeNo" [nzLabel]="o.codeName"></nz-option>
                  </nz-select>
                  <ng-template #groupFormulaView>{{ formulaLabel(row.formula) }}</ng-template>
                </td>
                <td class="small">{{ row.updatedBy }}</td>
                <td class="text-center small">{{ toDmy(row.updateDate) }}</td>
              </tr>
            </tbody>
          </nz-table>
        </nz-tab>

        <!-- \u2500\u2500 Tab Nh\xF3m ch\u1EE9c v\u1EE5 \u2500\u2500 -->
        <nz-tab [nzTitle]="'evsParam.tab.family' | translate:'Nh\xF3m ch\u1EE9c v\u1EE5'">
          <div class="d-flex align-items-center justify-content-between mt-2 mb-2 flex-wrap gap-2">
            <input nz-input style="width:200px;" [ngModel]="family.filterText()" (ngModelChange)="onFilterChange('family', $event)"
                   [placeholder]="'evsParam.label.quickFilter' | translate:'L\u1ECDc nhanh'">
            <div class="d-flex align-items-center gap-2">
              <button nz-button nzType="primary" nzSize="small" type="button" (click)="addRow('family')">
                <i class="bx bx-plus"></i> {{ 'evsParam.btn.addNew' | translate:'Th\xEAm m\u1EDBi' }}
              </button>
              <button nz-button nzDanger nzSize="small" type="button" (click)="openDeleteConfirm('family')">
                <i class="bx bx-trash"></i> {{ 'evsParam.btn.delete' | translate:'X\xF3a' }}
              </button>
              <button nz-button nzType="primary" nzSize="small" type="button" [nzLoading]="family.saving()" (click)="saveTab('family')">
                <i class="bx bx-save"></i> {{ 'evsParam.btn.save' | translate:'L\u01B0u' }}
              </button>
            </div>
          </div>

          <nz-table [nzData]="family.filteredRows()" [nzLoading]="family.loading()" [nzPageSize]="10" [nzShowSizeChanger]="true"
                    [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="eppTotalTpl" [nzScroll]="{ x: '950px' }" #familyTable="nzTable">
            <thead>
              <tr>
                <th class="text-center" nzWidth="40px">
                  <label nz-checkbox [ngModel]="allCheckedOnPage('family', familyTable.data)"
                         [nzIndeterminate]="someCheckedOnPage('family', familyTable.data)"
                         (ngModelChange)="toggleAllOnPage('family', familyTable.data, $event)"></label>
                </th>
                <th class="text-center" nzWidth="50px">{{ 'common.stt' | translate:'No.' }}</th>
                <th nzWidth="140px">{{ 'evsParam.col.code' | translate:'M\xE3' }}</th>
                <th nzWidth="200px">{{ 'evsParam.col.name' | translate:'T\xEAn' }}</th>
                <th nzWidth="220px">{{ 'evsParam.col.formula' | translate:'H\xECnh th\u1EE9c ti\xEAu chu\u1EA9n' }}</th>
                <th nzWidth="200px">{{ 'evsParam.col.updatedBy' | translate:'Ng\u01B0\u1EDDi thay \u0111\u1ED5i' }}</th>
                <th class="text-center" nzWidth="120px">{{ 'evsParam.col.updateTime' | translate:'Th\u1EDDi gian T\u0110' }}</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngIf="!family.loading() && familyTable.data.length === 0">
                <td colspan="7" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
              </tr>
              <tr *ngFor="let row of familyTable.data; let i = index"
                  [class.epp-row-edit]="row.editing" [class.epp-row-new]="row.isNew" (click)="rowClick('family', row)">
                <td class="text-center" (click)="$event.stopPropagation()">
                  <label nz-checkbox [ngModel]="isChecked('family', row)" (ngModelChange)="toggleChecked('family', row, $event)"></label>
                </td>
                <td class="text-center">{{ i + 1 }}</td>
                <td (click)="$event.stopPropagation()">
                  <input *ngIf="row.editing; else familyCodeNoView" nz-input [(ngModel)]="row.codeNo" maxlength="20">
                  <ng-template #familyCodeNoView>{{ row.codeNo }}</ng-template>
                </td>
                <td (click)="$event.stopPropagation()">
                  <input *ngIf="row.editing; else familyCodeNameView" nz-input [(ngModel)]="row.codeName" maxlength="200">
                  <ng-template #familyCodeNameView>{{ row.codeName }}</ng-template>
                </td>
                <td (click)="$event.stopPropagation()">
                  <nz-select *ngIf="row.editing; else familyFormulaView" class="w-100" [(ngModel)]="row.formula"
                             (ngModelChange)="onFormulaChange(row, $event)" [nzPlaceHolder]="'evsParam.js.defaultSelect' | translate:'-- Ch\u1ECDn --'">
                    <nz-option *ngFor="let o of formulaOptions()" [nzValue]="o.codeNo" [nzLabel]="o.codeName"></nz-option>
                  </nz-select>
                  <ng-template #familyFormulaView>{{ formulaLabel(row.formula) }}</ng-template>
                </td>
                <td class="small">{{ row.updatedBy }}</td>
                <td class="text-center small">{{ toDmy(row.updateDate) }}</td>
              </tr>
            </tbody>
          </nz-table>
        </nz-tab>

        <!-- \u2500\u2500 Tab Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 \u2500\u2500 -->
        <nz-tab [nzTitle]="'evsParam.tab.affirm' | translate:'Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1'">
          <div class="d-flex align-items-center justify-content-between mt-2 mb-2 flex-wrap gap-2">
            <input nz-input style="width:200px;" [ngModel]="affirm.filterText()" (ngModelChange)="onFilterChange('affirm', $event)"
                   [placeholder]="'evsParam.label.quickFilter' | translate:'L\u1ECDc nhanh'">
            <div class="d-flex align-items-center gap-2">
              <button nz-button nzType="primary" nzSize="small" type="button" (click)="addRow('affirm')">
                <i class="bx bx-plus"></i> {{ 'evsParam.btn.addNew' | translate:'Th\xEAm m\u1EDBi' }}
              </button>
              <button nz-button nzDanger nzSize="small" type="button" (click)="openDeleteConfirm('affirm')">
                <i class="bx bx-trash"></i> {{ 'evsParam.btn.delete' | translate:'X\xF3a' }}
              </button>
              <button nz-button nzType="primary" nzSize="small" type="button" [nzLoading]="affirm.saving()" (click)="saveTab('affirm')">
                <i class="bx bx-save"></i> {{ 'evsParam.btn.save' | translate:'L\u01B0u' }}
              </button>
            </div>
          </div>

          <nz-table [nzData]="affirm.filteredRows()" [nzLoading]="affirm.loading()" [nzPageSize]="10" [nzShowSizeChanger]="true"
                    [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="eppTotalTpl" [nzScroll]="{ x: '950px' }" #affirmTable="nzTable">
            <thead>
              <tr>
                <th class="text-center" nzWidth="40px">
                  <label nz-checkbox [ngModel]="allCheckedOnPage('affirm', affirmTable.data)"
                         [nzIndeterminate]="someCheckedOnPage('affirm', affirmTable.data)"
                         (ngModelChange)="toggleAllOnPage('affirm', affirmTable.data, $event)"></label>
                </th>
                <th class="text-center" nzWidth="50px">{{ 'common.stt' | translate:'No.' }}</th>
                <th nzWidth="200px">{{ 'evsParam.col.evaluator' | translate:'Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1' }}</th>
                <th nzWidth="220px">{{ 'evsParam.col.evalGroup' | translate:'Nh\xF3m \u0111\xE1nh gi\xE1' }}</th>
                <th nzWidth="180px">{{ 'evsParam.col.ruleId' | translate:'ID quy t\u1EAFc' }}</th>
                <th nzWidth="200px">{{ 'evsParam.col.updatedBy' | translate:'Ng\u01B0\u1EDDi thay \u0111\u1ED5i' }}</th>
                <th class="text-center" nzWidth="120px">{{ 'evsParam.col.updateTime' | translate:'Th\u1EDDi gian T\u0110' }}</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngIf="!affirm.loading() && affirmTable.data.length === 0">
                <td colspan="7" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
              </tr>
              <tr *ngFor="let row of affirmTable.data; let i = index"
                  [class.epp-row-edit]="row.editing" [class.epp-row-new]="row.isNew" (click)="rowClick('affirm', row)">
                <td class="text-center" (click)="$event.stopPropagation()">
                  <label nz-checkbox [ngModel]="isChecked('affirm', row)" (ngModelChange)="toggleChecked('affirm', row, $event)"></label>
                </td>
                <td class="text-center">{{ i + 1 }}</td>
                <td (click)="$event.stopPropagation()">
                  <nz-select *ngIf="row.editing; else evsStepView" class="w-100" [(ngModel)]="row.evsStep"
                             (ngModelChange)="onEvsStepChange(row, $event)" [nzPlaceHolder]="'evsParam.js.defaultSelect' | translate:'-- Ch\u1ECDn --'">
                    <nz-option *ngFor="let o of evsStepOptions()" [nzValue]="o.codeNo" [nzLabel]="o.codeName"></nz-option>
                  </nz-select>
                  <ng-template #evsStepView>{{ row.evsStepName || row.evsStep }}</ng-template>
                </td>
                <td (click)="$event.stopPropagation()">
                  <nz-select *ngIf="row.editing; else evsGroupView" class="w-100" [(ngModel)]="row.evsGroup"
                             (ngModelChange)="onEvsGroupChange(row, $event)" [nzPlaceHolder]="'evsParam.js.defaultSelect' | translate:'-- Ch\u1ECDn --'">
                    <nz-option *ngFor="let o of groupOptions()" [nzValue]="o.codeNo" [nzLabel]="o.codeName"></nz-option>
                  </nz-select>
                  <ng-template #evsGroupView>{{ row.evsGroupName || row.evsGroup }}</ng-template>
                </td>
                <td (click)="$event.stopPropagation()">
                  <nz-select *ngIf="row.editing; else ruleIdView" class="w-100" [(ngModel)]="row.ruleId"
                             (ngModelChange)="onRuleIdChange(row, $event)" [nzPlaceHolder]="'evsParam.js.defaultSelect' | translate:'-- Ch\u1ECDn --'">
                    <nz-option *ngFor="let o of ruleIdOptions()" [nzValue]="o.codeNo" [nzLabel]="o.codeName"></nz-option>
                  </nz-select>
                  <ng-template #ruleIdView>{{ row.ruleName || row.ruleId }}</ng-template>
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

<ng-template #eppTotalTpl let-total>
  {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
</ng-template>

<!-- Modal x\xE1c nh\u1EADn x\xF3a -->
<nz-modal [nzVisible]="deleteVisible()" [nzTitle]="'evsParam.modal.deleteTitle' | translate:'X\xE1c nh\u1EADn x\xF3a'"
          (nzOnCancel)="closeDeleteConfirm()" (nzOnOk)="confirmDelete()" [nzOkLoading]="deleting()"
          [nzOkText]="'evsParam.btn.delete' | translate:'X\xF3a'" nzOkDanger
          [nzCancelText]="'evsParam.btn.cancel' | translate:'H\u1EE7y'">
  <ng-container *nzModalContent>
    <p class="mb-0">
      {{ 'evsParam.modal.deleteBodyPrefix' | translate:'B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a' }}
      <strong>{{ pendingDeleteCount }}</strong>
      {{ 'evsParam.modal.deleteBodySuffix' | translate:'d\xF2ng \u0111\xE3 ch\u1ECDn?' }}
    </p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/evs-param-panel/evs-param-panel.component.css */\n::ng-deep .epp-row-edit {\n  background-color: #fffde7 !important;\n  cursor: default;\n}\n::ng-deep tr:not(.epp-row-edit) {\n  cursor: pointer;\n}\n::ng-deep .epp-row-new td {\n  font-style: italic;\n}\n/*# sourceMappingURL=evs-param-panel.component.css.map */\n"] }]
  }], () => [{ type: EvsParamPanelService }, { type: I18nService }, { type: NzMessageService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EvsParamPanelComponent, { className: "EvsParamPanelComponent", filePath: "src/app/evs-param-panel/evs-param-panel.component.ts", lineNumber: 135 });
})();
export {
  EvsParamPanelComponent
};
//# debugId=030abcd3-567d-53a5-ad9c-76e1c731733a
//# sourceMappingURL=chunk-H74EPD32.js.map
