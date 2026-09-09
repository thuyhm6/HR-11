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

// src/app/evs-item-panel/evs-item-panel.service.ts
var API_BASE = "/evs/manage/api";
var EvsItemPanelService = class _EvsItemPanelService {
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
  getList(api, resumeSeq, groupNo, evsGroup, evsOccGroup) {
    let params = new HttpParams().set("resumeSeq", resumeSeq);
    if (groupNo)
      params = params.set("groupNo", groupNo);
    if (evsGroup)
      params = params.set("evsGroup", evsGroup);
    if (evsOccGroup)
      params = params.set("evsOccGroup", evsOccGroup);
    return this.http.get(`${API_BASE}/${api}/list`, { params, withCredentials: true });
  }
  saveBatch(api, payload) {
    return this.http.post(`${API_BASE}/${api}/save`, payload, { withCredentials: true });
  }
  deleteBatch(api, seqs) {
    return this.http.post(`${API_BASE}/${api}/delete`, { seqs }, { withCredentials: true });
  }
  /** Combo "Nhóm nhân viên"/"Nhóm chức vụ" (EVS_PARAM paramType=GROUP/FAMILY) - dùng chung endpoint
   *  evsParam/list đã có ở EvsParamPanelComponent (trang chị em), không phụ thuộc lẫn nhau về code. */
  getEvsParamOptions(resumeSeq, paramType) {
    return this.http.get(`${API_BASE}/evsParam/list`, {
      params: new HttpParams().set("resumeSeq", resumeSeq).set("paramType", paramType),
      withCredentials: true
    });
  }
  /** Combo mã hệ thống "Nhóm chỉ tiêu" (parentCodeNo=14015376 - đúng giá trị hardcode ở bản gốc). */
  getCodeList(parentCodeNo) {
    return this.http.get("/sys/api/getCode/list", {
      params: new HttpParams().set("parentCodeNo", parentCodeNo),
      withCredentials: true
    });
  }
  static \u0275fac = function EvsItemPanelService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EvsItemPanelService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EvsItemPanelService, factory: _EvsItemPanelService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EvsItemPanelService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/evs-item-panel/evs-item-panel.component.ts
var _c0 = () => [10, 25, 50, 100];
var _c1 = () => ({ x: "1150px" });
var _c2 = () => ({ x: "1450px" });
function EvsItemPanelComponent_nz_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 52);
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    \u0275\u0275property("nzValue", r_r2.seq)("nzLabel", r_r2.resumeName);
  }
}
function EvsItemPanelComponent_nz_option_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 52);
  }
  if (rf & 2) {
    const o_r3 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r3.codeNo)("nzLabel", o_r3.codeName);
  }
}
function EvsItemPanelComponent_nz_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 52);
  }
  if (rf & 2) {
    const o_r4 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r4.codeNo)("nzLabel", o_r4.codeName);
  }
}
function EvsItemPanelComponent_nz_option_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 52);
  }
  if (rf & 2) {
    const o_r5 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r5.codeNo)("nzLabel", o_r5.codeName);
  }
}
function EvsItemPanelComponent_tr_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 53);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function EvsItemPanelComponent_tr_91_nz_select_6_nz_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 52);
  }
  if (rf & 2) {
    const o_r11 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r11.codeNo)("nzLabel", o_r11.codeName);
  }
}
function EvsItemPanelComponent_tr_91_nz_select_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-select", 64);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EvsItemPanelComponent_tr_91_nz_select_6_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const row_r8 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r8.groupNo, $event) || (row_r8.groupNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EvsItemPanelComponent_tr_91_nz_select_6_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const row_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.onGroupNoChange(row_r8, $event));
    });
    \u0275\u0275template(2, EvsItemPanelComponent_tr_91_nz_select_6_nz_option_2_Template, 1, 2, "nz-option", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r8 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", row_r8.groupNo);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(1, 3, "evsParam.js.defaultSelect", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r8.groupNoCodeOptions());
  }
}
function EvsItemPanelComponent_tr_91_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r8.groupName || row_r8.groupNo);
  }
}
function EvsItemPanelComponent_tr_91_input_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function EvsItemPanelComponent_tr_91_input_10_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      const row_r8 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r8.itemCode, $event) || (row_r8.itemCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r8.itemCode);
    \u0275\u0275control();
  }
}
function EvsItemPanelComponent_tr_91_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r8.itemCode);
  }
}
function EvsItemPanelComponent_tr_91_input_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function EvsItemPanelComponent_tr_91_input_14_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r13);
      const row_r8 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r8.itemName, $event) || (row_r8.itemName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r8.itemName);
    \u0275\u0275control();
  }
}
function EvsItemPanelComponent_tr_91_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r8.itemName);
  }
}
function EvsItemPanelComponent_tr_91_input_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function EvsItemPanelComponent_tr_91_input_18_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r14);
      const row_r8 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r8.itemNameKo, $event) || (row_r8.itemNameKo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r8.itemNameKo);
    \u0275\u0275control();
  }
}
function EvsItemPanelComponent_tr_91_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r8.itemNameKo);
  }
}
function EvsItemPanelComponent_tr_91_input_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function EvsItemPanelComponent_tr_91_input_22_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const row_r8 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r8.remark, $event) || (row_r8.remark = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r8.remark);
    \u0275\u0275control();
  }
}
function EvsItemPanelComponent_tr_91_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r8.remark);
  }
}
function EvsItemPanelComponent_tr_91_input_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function EvsItemPanelComponent_tr_91_input_26_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r16);
      const row_r8 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r8.remarkKo, $event) || (row_r8.remarkKo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r8.remarkKo);
    \u0275\u0275control();
  }
}
function EvsItemPanelComponent_tr_91_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r8.remarkKo);
  }
}
function EvsItemPanelComponent_tr_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 54);
    \u0275\u0275listener("click", function EvsItemPanelComponent_tr_91_Template_tr_click_0_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.rowClick("item", row_r8));
    });
    \u0275\u0275elementStart(1, "td", 55);
    \u0275\u0275listener("click", function EvsItemPanelComponent_tr_91_Template_td_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "label", 56);
    \u0275\u0275listener("ngModelChange", function EvsItemPanelComponent_tr_91_Template_label_ngModelChange_2_listener($event) {
      const row_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.toggleChecked("item", row_r8, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 57);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 54);
    \u0275\u0275listener("click", function EvsItemPanelComponent_tr_91_Template_td_click_5_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(6, EvsItemPanelComponent_tr_91_nz_select_6_Template, 3, 6, "nz-select", 58)(7, EvsItemPanelComponent_tr_91_ng_template_7_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 54);
    \u0275\u0275listener("click", function EvsItemPanelComponent_tr_91_Template_td_click_9_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(10, EvsItemPanelComponent_tr_91_input_10_Template, 1, 1, "input", 59)(11, EvsItemPanelComponent_tr_91_ng_template_11_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 54);
    \u0275\u0275listener("click", function EvsItemPanelComponent_tr_91_Template_td_click_13_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(14, EvsItemPanelComponent_tr_91_input_14_Template, 1, 1, "input", 60)(15, EvsItemPanelComponent_tr_91_ng_template_15_Template, 1, 1, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 54);
    \u0275\u0275listener("click", function EvsItemPanelComponent_tr_91_Template_td_click_17_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(18, EvsItemPanelComponent_tr_91_input_18_Template, 1, 1, "input", 60)(19, EvsItemPanelComponent_tr_91_ng_template_19_Template, 1, 1, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 54);
    \u0275\u0275listener("click", function EvsItemPanelComponent_tr_91_Template_td_click_21_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(22, EvsItemPanelComponent_tr_91_input_22_Template, 1, 1, "input", 61)(23, EvsItemPanelComponent_tr_91_ng_template_23_Template, 1, 1, "ng-template", null, 7, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td", 54);
    \u0275\u0275listener("click", function EvsItemPanelComponent_tr_91_Template_td_click_25_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(26, EvsItemPanelComponent_tr_91_input_26_Template, 1, 1, "input", 61)(27, EvsItemPanelComponent_tr_91_ng_template_27_Template, 1, 1, "ng-template", null, 8, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td", 62);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td", 63);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    const i_r17 = ctx.index;
    const groupNoView_r18 = \u0275\u0275reference(8);
    const itemCodeView_r19 = \u0275\u0275reference(12);
    const itemNameView_r20 = \u0275\u0275reference(16);
    const itemNameKoView_r21 = \u0275\u0275reference(20);
    const remarkView_r22 = \u0275\u0275reference(24);
    const remarkKoView_r23 = \u0275\u0275reference(28);
    const ctx_r8 = \u0275\u0275nextContext();
    \u0275\u0275classProp("eip-row-edit", row_r8.editing)("eip-row-new", row_r8.isNew);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r8.isChecked("item", row_r8));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r17 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r8.editing)("ngIfElse", groupNoView_r18);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r8.editing)("ngIfElse", itemCodeView_r19);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r8.editing)("ngIfElse", itemNameView_r20);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r8.editing)("ngIfElse", itemNameKoView_r21);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r8.editing)("ngIfElse", remarkView_r22);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r8.editing)("ngIfElse", remarkKoView_r23);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r8.updatedBy);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r8.dateOnly(row_r8.updateDate));
  }
}
function EvsItemPanelComponent_tr_147_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 68);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function EvsItemPanelComponent_tr_148_nz_select_6_nz_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 52);
  }
  if (rf & 2) {
    const o_r28 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r28.itemCode)("nzLabel", o_r28.itemCode + " - " + o_r28.itemName);
  }
}
function EvsItemPanelComponent_tr_148_nz_select_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-select", 64);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EvsItemPanelComponent_tr_148_nz_select_6_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r27);
      const row_r26 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r26.itemCode, $event) || (row_r26.itemCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EvsItemPanelComponent_tr_148_nz_select_6_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r27);
      const row_r26 = \u0275\u0275nextContext().$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.onItemCodeChange(row_r26, $event));
    });
    \u0275\u0275template(2, EvsItemPanelComponent_tr_148_nz_select_6_nz_option_2_Template, 1, 2, "nz-option", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r26 = \u0275\u0275nextContext().$implicit;
    const ctx_r8 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", row_r26.itemCode);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(1, 3, "evsParam.js.defaultSelect", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r8.itemOptions());
  }
}
function EvsItemPanelComponent_tr_148_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r26 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r26.itemName);
  }
}
function EvsItemPanelComponent_tr_148_nz_select_16_nz_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 52);
  }
  if (rf & 2) {
    const o_r30 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r30.codeNo)("nzLabel", o_r30.codeName);
  }
}
function EvsItemPanelComponent_tr_148_nz_select_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-select", 64);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EvsItemPanelComponent_tr_148_nz_select_16_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r29);
      const row_r26 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r26.evsGroup, $event) || (row_r26.evsGroup = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EvsItemPanelComponent_tr_148_nz_select_16_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r29);
      const row_r26 = \u0275\u0275nextContext().$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.onEvsGroupChange(row_r26, $event));
    });
    \u0275\u0275template(2, EvsItemPanelComponent_tr_148_nz_select_16_nz_option_2_Template, 1, 2, "nz-option", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r26 = \u0275\u0275nextContext().$implicit;
    const ctx_r8 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", row_r26.evsGroup);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(1, 3, "evsParam.js.defaultSelect", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r8.evsGroupOptions());
  }
}
function EvsItemPanelComponent_tr_148_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r26 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r26.evsGroupName || row_r26.evsGroup);
  }
}
function EvsItemPanelComponent_tr_148_nz_select_20_nz_option_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 52);
  }
  if (rf & 2) {
    const o_r32 = ctx.$implicit;
    \u0275\u0275property("nzValue", o_r32.codeNo)("nzLabel", o_r32.codeName);
  }
}
function EvsItemPanelComponent_tr_148_nz_select_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-select", 64);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function EvsItemPanelComponent_tr_148_nz_select_20_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r31);
      const row_r26 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r26.evsOccGroup, $event) || (row_r26.evsOccGroup = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function EvsItemPanelComponent_tr_148_nz_select_20_Template_nz_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r31);
      const row_r26 = \u0275\u0275nextContext().$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.onEvsOccGroupChange(row_r26, $event));
    });
    \u0275\u0275template(2, EvsItemPanelComponent_tr_148_nz_select_20_nz_option_2_Template, 1, 2, "nz-option", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r26 = \u0275\u0275nextContext().$implicit;
    const ctx_r8 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", row_r26.evsOccGroup);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(1, 3, "evsParam.js.defaultSelect", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r8.evsOccGroupOptions());
  }
}
function EvsItemPanelComponent_tr_148_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r26 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r26.evsOccGroupName || row_r26.evsOccGroup);
  }
}
function EvsItemPanelComponent_tr_148_input_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 70);
    \u0275\u0275twoWayListener("ngModelChange", function EvsItemPanelComponent_tr_148_input_24_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r33);
      const row_r26 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r26.itemScore, $event) || (row_r26.itemScore = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r26 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r26.itemScore);
    \u0275\u0275control();
  }
}
function EvsItemPanelComponent_tr_148_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r26 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r26.itemScore);
  }
}
function EvsItemPanelComponent_tr_148_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 54);
    \u0275\u0275listener("click", function EvsItemPanelComponent_tr_148_Template_tr_click_0_listener() {
      const row_r26 = \u0275\u0275restoreView(_r25).$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.rowClick("param", row_r26));
    });
    \u0275\u0275elementStart(1, "td", 55);
    \u0275\u0275listener("click", function EvsItemPanelComponent_tr_148_Template_td_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "label", 56);
    \u0275\u0275listener("ngModelChange", function EvsItemPanelComponent_tr_148_Template_label_ngModelChange_2_listener($event) {
      const row_r26 = \u0275\u0275restoreView(_r25).$implicit;
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.toggleChecked("param", row_r26, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 57);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 54);
    \u0275\u0275listener("click", function EvsItemPanelComponent_tr_148_Template_td_click_5_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(6, EvsItemPanelComponent_tr_148_nz_select_6_Template, 3, 6, "nz-select", 58)(7, EvsItemPanelComponent_tr_148_ng_template_7_Template, 1, 1, "ng-template", null, 9, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 54);
    \u0275\u0275listener("click", function EvsItemPanelComponent_tr_148_Template_td_click_15_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(16, EvsItemPanelComponent_tr_148_nz_select_16_Template, 3, 6, "nz-select", 58)(17, EvsItemPanelComponent_tr_148_ng_template_17_Template, 1, 1, "ng-template", null, 10, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 54);
    \u0275\u0275listener("click", function EvsItemPanelComponent_tr_148_Template_td_click_19_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(20, EvsItemPanelComponent_tr_148_nz_select_20_Template, 3, 6, "nz-select", 58)(21, EvsItemPanelComponent_tr_148_ng_template_21_Template, 1, 1, "ng-template", null, 11, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td", 55);
    \u0275\u0275listener("click", function EvsItemPanelComponent_tr_148_Template_td_click_23_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275template(24, EvsItemPanelComponent_tr_148_input_24_Template, 1, 1, "input", 69)(25, EvsItemPanelComponent_tr_148_ng_template_25_Template, 1, 1, "ng-template", null, 12, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td", 62);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td", 63);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r26 = ctx.$implicit;
    const i_r34 = ctx.index;
    const itemNameSelView_r35 = \u0275\u0275reference(8);
    const evsGroupView_r36 = \u0275\u0275reference(18);
    const evsOccGroupView_r37 = \u0275\u0275reference(22);
    const itemScoreView_r38 = \u0275\u0275reference(26);
    const ctx_r8 = \u0275\u0275nextContext();
    \u0275\u0275classProp("eip-row-edit", row_r26.editing)("eip-row-new", row_r26.isNew);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r8.isChecked("param", row_r26));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r34 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r26.editing)("ngIfElse", itemNameSelView_r35);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r26.itemCodeItem);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r26.groupName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r26.itemRemark || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r26.itemRemark);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r26.editing)("ngIfElse", evsGroupView_r36);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r26.editing)("ngIfElse", evsOccGroupView_r37);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r26.editing)("ngIfElse", itemScoreView_r38);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r26.updatedBy);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r8.dateOnly(row_r26.updateDate));
  }
}
function EvsItemPanelComponent_ng_template_149_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r39 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r39, "\n");
  }
}
function EvsItemPanelComponent_ng_container_155_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 71);
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
    const ctx_r8 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 3, "evsParam.modal.deleteBodyPrefix", "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r8.pendingDeleteCount);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 6, "evsParam.modal.deleteBodySuffix", "d\xF2ng \u0111\xE3 ch\u1ECDn?"), " ");
  }
}
var TAB_META = {
  item: { api: "evsItem" },
  param: { api: "evsItemParam" }
};
var GROUP_NO_PARENT_CODE = "14015376";
var I18N_KEYS = [
  "evs.manage.viewEvsItemPanel.search.evaluationName",
  "evs.manage.viewEvsItemPanel.search.criteriaGroup",
  "evs.manage.viewEvsItemPanel.search.evalGroup",
  "evs.manage.viewEvsItemPanel.search.occGroup",
  "evs.manage.viewEvsItemPanel.search.select",
  "evs.manage.viewEvsItemPanel.tab.item",
  "evs.manage.viewEvsItemPanel.tab.param",
  "evs.manage.viewEvsItemPanel.col.no",
  "evs.manage.viewEvsItemPanel.col.criteriaGroup",
  "evs.manage.viewEvsItemPanel.col.itemCode",
  "evs.manage.viewEvsItemPanel.col.itemName",
  "evs.manage.viewEvsItemPanel.col.itemNameKo",
  "evs.manage.viewEvsItemPanel.col.remark",
  "evs.manage.viewEvsItemPanel.col.remarkKo",
  "evs.manage.viewEvsItemPanel.col.evalGroup",
  "evs.manage.viewEvsItemPanel.col.occGroup",
  "evs.manage.viewEvsItemPanel.col.score",
  "evs.manage.viewEvsItemPanel.col.updatedBy",
  "evs.manage.viewEvsItemPanel.col.updateDate",
  "evsParam.label.quickFilter",
  "evsParam.btn.addNew",
  "evsParam.btn.delete",
  "evsParam.btn.save",
  "evsParam.btn.cancel",
  "evsParam.label.perPage",
  "evsParam.label.records",
  "evsParam.modal.deleteTitle",
  "evsParam.modal.deleteBodyPrefix",
  "evsParam.modal.deleteBodySuffix",
  "evsParam.js.selectFirst",
  "evsParam.js.noChanges",
  "evsParam.js.saveError",
  "evsParam.js.selectRow",
  "evsParam.js.deleteError",
  "evsParam.js.defaultSelect",
  "common.select",
  "common.search",
  "common.stt",
  "common.noData",
  "common.totalRows",
  "common.selectAll"
];
var EvsItemTabState = class {
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
      return list.filter((r) => (r.groupName || r.groupNo || "").toLowerCase().includes(kw) || (r.itemCode || r.itemCodeItem || "").toLowerCase().includes(kw) || (r.itemName || "").toLowerCase().includes(kw) || (r.remark || r.itemRemark || "").toLowerCase().includes(kw));
    },
    ...ngDevMode ? [{ debugName: "filteredRows" }] : (
      /* istanbul ignore next */
      []
    )
  );
};
var EvsItemPanelComponent = class _EvsItemPanelComponent {
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
  evsType = "";
  resumeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "resumeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  resumeSeq = null;
  groupNoCodeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "groupNoCodeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  evsGroupOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "evsGroupOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  evsOccGroupOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "evsOccGroupOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  itemOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "itemOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  searchGroupNo = null;
  searchEvsGroup = null;
  searchEvsOccGroup = null;
  /** Combo "Nhóm chỉ tiêu" trong thanh tìm kiếm - tính từ chính dữ liệu tab "item" đang tải (đúng
   *  veitpUpdateCriteriaGroupDropdown ở bản gốc, không phải danh sách mã hệ thống đầy đủ). */
  criteriaGroupOptions = computed(
    () => {
      const seen = /* @__PURE__ */ new Map();
      this.item.rows().forEach((r) => {
        if (r.groupNo && !seen.has(r.groupNo))
          seen.set(r.groupNo, r.groupName || r.groupNo);
      });
      return Array.from(seen.entries()).map(([codeNo, codeName]) => ({ codeNo, codeName }));
    },
    ...ngDevMode ? [{ debugName: "criteriaGroupOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  item = new EvsItemTabState();
  param = new EvsItemTabState();
  tabStates = { item: this.item, param: this.param };
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
    this.api.getCodeList(GROUP_NO_PARENT_CODE).subscribe({ next: (list) => this.groupNoCodeOptions.set(list ?? []), error: () => this.groupNoCodeOptions.set([]) });
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
    this.loadEvsGroupOptions(resumeSeq);
    this.loadTab("item");
    this.loadTab("param");
  }
  tabState(tab) {
    return this.tabStates[tab];
  }
  loadEvsGroupOptions(resumeSeq) {
    this.api.getEvsParamOptions(resumeSeq, "GROUP").subscribe({ next: (list) => this.evsGroupOptions.set(list ?? []), error: () => this.evsGroupOptions.set([]) });
    this.api.getEvsParamOptions(resumeSeq, "FAMILY").subscribe({ next: (list) => this.evsOccGroupOptions.set(list ?? []), error: () => this.evsOccGroupOptions.set([]) });
  }
  loadItemOptions(resumeSeq) {
    this.api.getList(TAB_META.item.api, resumeSeq, "", "", "").subscribe({
      next: (rows) => this.itemOptions.set((rows ?? []).map((r) => ({
        itemCode: r.itemCode || "",
        itemName: r.itemName || "",
        groupNo: r.groupNo || "",
        groupName: r.groupName || "",
        remark: r.remark || ""
      }))),
      error: () => this.itemOptions.set([])
    });
  }
  loadTab(tab) {
    const resumeSeq = this.resumeSeq;
    if (!resumeSeq)
      return;
    const state = this.tabState(tab);
    const meta = TAB_META[tab];
    const evsGroup = tab === "param" ? this.searchEvsGroup ?? "" : "";
    const evsOccGroup = tab === "param" ? this.searchEvsOccGroup ?? "" : "";
    state.loading.set(true);
    this.api.getList(meta.api, resumeSeq, this.searchGroupNo ?? "", evsGroup, evsOccGroup).subscribe({
      next: (rows) => {
        state.rows.set((rows ?? []).map((r) => this.toRow(r, false)));
        state.filterText.set("");
        state.checked.set(/* @__PURE__ */ new Set());
        state.loading.set(false);
        if (tab === "item")
          this.loadItemOptions(resumeSeq);
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
  groupCodeLabel(code) {
    const opt = this.groupNoCodeOptions().find((o) => o.codeNo === code);
    return opt ? opt.codeName : "";
  }
  onGroupNoChange(row, code) {
    row.groupNo = code;
    row.groupName = this.groupCodeLabel(code);
  }
  labelOf(options, code) {
    const opt = options.find((o) => o.codeNo === code);
    return opt ? opt.codeName : "";
  }
  onEvsGroupChange(row, code) {
    row.evsGroup = code;
    row.evsGroupName = this.labelOf(this.evsGroupOptions(), code);
  }
  onEvsOccGroupChange(row, code) {
    row.evsOccGroup = code;
    row.evsOccGroupName = this.labelOf(this.evsOccGroupOptions(), code);
  }
  onItemCodeChange(row, code) {
    row.itemCode = code;
    const opt = this.itemOptions().find((o) => o.itemCode === code);
    row.itemCodeItem = opt ? opt.itemCode : "";
    row.itemName = opt ? opt.itemName : "";
    row.groupName = opt ? opt.groupName : "";
    row.itemRemark = opt ? opt.remark : "";
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
    if (tab === "item") {
      return { groupNo: "", groupName: "", itemCode: "", itemName: "", itemNameKo: "", remark: "", remarkKo: "" };
    }
    return {
      itemCode: "",
      itemCodeItem: "",
      itemName: "",
      itemRemark: "",
      groupName: "",
      evsGroup: "",
      evsGroupName: "",
      evsOccGroup: "",
      evsOccGroupName: "",
      itemScore: ""
    };
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
      groupNo: null,
      groupName: null,
      itemCode: null,
      itemCodeItem: null,
      itemName: null,
      itemNameKo: null,
      itemRemark: null,
      remark: null,
      remarkKo: null,
      evsGroup: null,
      evsGroupName: null,
      evsOccGroup: null,
      evsOccGroupName: null,
      itemScore: null,
      activity: null,
      orderNo: null,
      updateDate: null,
      updatedBy: null
    }, this.emptyRowFields(tab));
    state.rows.update((rows) => [...rows, newRow]);
  }
  // ==================== Lưu ====================
  buildPayload(tab, r) {
    const base = { seq: r.isNew ? null : r.seq, resumeSeq: this.resumeSeq };
    if (tab === "item") {
      return __spreadProps(__spreadValues({}, base), {
        groupNo: r.groupNo || "",
        itemCode: r.itemCode || "",
        itemName: r.itemName || "",
        itemNameKo: r.itemNameKo || "",
        remark: r.remark || "",
        remarkKo: r.remarkKo || ""
      });
    }
    return __spreadProps(__spreadValues({}, base), {
      itemCode: r.itemCode || "",
      evsGroup: r.evsGroup || "",
      evsOccGroup: r.evsOccGroup || "",
      itemScore: r.itemScore || ""
    });
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
  /** BE đã trả sẵn dd/MM/yyyy HH:mm (đúng CLAUDE.md, khác 2 trang chị em dùng yyyy-MM-dd) - chỉ cần bỏ
   *  phần giờ để hiển thị ở bảng, đúng phạm vi veitpFmtDate ở bản gốc. */
  dateOnly(s) {
    if (!s)
      return "";
    return s.substring(0, 10);
  }
  static \u0275fac = function EvsItemPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EvsItemPanelComponent)(\u0275\u0275directiveInject(EvsItemPanelService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EvsItemPanelComponent, selectors: [["app-evs-item-panel"]], decls: 156, vars: 200, consts: [["itemTable", "nzTable"], ["paramTable", "nzTable"], ["eipTotalTpl", ""], ["groupNoView", ""], ["itemCodeView", ""], ["itemNameView", ""], ["itemNameKoView", ""], ["remarkView", ""], ["remarkKoView", ""], ["itemNameSelView", ""], ["evsGroupView", ""], ["evsOccGroupView", ""], ["itemScoreView", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["name", "eipResumeSeq", 1, "w-100", 3, "ngModelChange", "ngModel"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["name", "eipSearchGroupNo", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["name", "eipSearchEvsGroup", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["name", "eipSearchEvsOccGroup", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], [3, "nzTitle"], [1, "d-flex", "align-items-center", "justify-content-between", "mt-2", "mb-2", "flex-wrap", "gap-2"], ["nz-input", "", 2, "width", "200px", 3, "ngModelChange", "ngModel", "placeholder"], [1, "d-flex", "align-items-center", "gap-2"], ["nz-button", "", "nzType", "primary", "nzSize", "small", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzDanger", "", "nzSize", "small", "type", "button", 3, "click"], [1, "bx", "bx-trash"], ["nz-button", "", "nzType", "primary", "nzSize", "small", "type", "button", 3, "click", "nzLoading"], [1, "bx", "bx-save"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "40px", 1, "text-center"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel", "nzIndeterminate"], ["nzWidth", "50px", 1, "text-center"], ["nzWidth", "150px"], ["nzWidth", "110px"], ["nzWidth", "180px"], ["nzWidth", "200px"], ["nzWidth", "120px", 1, "text-center"], [4, "ngIf"], [3, "eip-row-edit", "eip-row-new", "click", 4, "ngFor", "ngForOf"], ["nzWidth", "220px"], ["nzWidth", "170px"], ["nzWidth", "90px", 1, "text-center"], ["nzOkDanger", "", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [3, "nzValue", "nzLabel"], ["colspan", "9", 1, "text-center", "text-muted"], [3, "click"], [1, "text-center", 3, "click"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel"], [1, "text-center"], ["class", "w-100", 3, "ngModel", "nzPlaceHolder", "ngModelChange", 4, "ngIf", "ngIfElse"], ["nz-input", "", "maxlength", "20", 3, "ngModel", "ngModelChange", 4, "ngIf", "ngIfElse"], ["nz-input", "", "maxlength", "400", 3, "ngModel", "ngModelChange", 4, "ngIf", "ngIfElse"], ["nz-input", "", "maxlength", "4000", 3, "ngModel", "ngModelChange", 4, "ngIf", "ngIfElse"], [1, "small"], [1, "text-center", "small"], [1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["nz-input", "", "maxlength", "20", 3, "ngModelChange", "ngModel"], ["nz-input", "", "maxlength", "400", 3, "ngModelChange", "ngModel"], ["nz-input", "", "maxlength", "4000", 3, "ngModelChange", "ngModel"], ["colspan", "10", 1, "text-center", "text-muted"], ["nz-input", "", "type", "number", 3, "ngModel", "ngModelChange", 4, "ngIf", "ngIfElse"], ["nz-input", "", "type", "number", 3, "ngModelChange", "ngModel"], [1, "mb-0"]], template: function EvsItemPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "nz-card", 15)(3, "form", 16);
      \u0275\u0275listener("ngSubmit", function EvsItemPanelComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 17)(5, "label", 18);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "nz-select", 19);
      \u0275\u0275twoWayListener("ngModelChange", function EvsItemPanelComponent_Template_nz_select_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.resumeSeq, $event) || (ctx.resumeSeq = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(9, EvsItemPanelComponent_nz_option_9_Template, 1, 2, "nz-option", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 17)(11, "label", 18);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "nz-select", 21);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function EvsItemPanelComponent_Template_nz_select_ngModelChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchGroupNo, $event) || (ctx.searchGroupNo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(16, EvsItemPanelComponent_nz_option_16_Template, 1, 2, "nz-option", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 17)(18, "label", 18);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "nz-select", 22);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function EvsItemPanelComponent_Template_nz_select_ngModelChange_21_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchEvsGroup, $event) || (ctx.searchEvsGroup = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(23, EvsItemPanelComponent_nz_option_23_Template, 1, 2, "nz-option", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 17)(25, "label", 18);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "nz-select", 23);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function EvsItemPanelComponent_Template_nz_select_ngModelChange_28_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchEvsOccGroup, $event) || (ctx.searchEvsOccGroup = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(30, EvsItemPanelComponent_nz_option_30_Template, 1, 2, "nz-option", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 14)(32, "button", 24);
      \u0275\u0275element(33, "i", 25);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(36, "nz-card")(37, "nz-tabs")(38, "nz-tab", 26);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementStart(40, "div", 27)(41, "input", 28);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275listener("ngModelChange", function EvsItemPanelComponent_Template_input_ngModelChange_41_listener($event) {
        return ctx.onFilterChange("item", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(43, "div", 29)(44, "button", 30);
      \u0275\u0275listener("click", function EvsItemPanelComponent_Template_button_click_44_listener() {
        return ctx.addRow("item");
      });
      \u0275\u0275element(45, "i", 31);
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "button", 32);
      \u0275\u0275listener("click", function EvsItemPanelComponent_Template_button_click_48_listener() {
        return ctx.openDeleteConfirm("item");
      });
      \u0275\u0275element(49, "i", 33);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "button", 34);
      \u0275\u0275listener("click", function EvsItemPanelComponent_Template_button_click_52_listener() {
        return ctx.saveTab("item");
      });
      \u0275\u0275element(53, "i", 35);
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(56, "nz-table", 36, 0)(58, "thead")(59, "tr")(60, "th", 37)(61, "label", 38);
      \u0275\u0275listener("ngModelChange", function EvsItemPanelComponent_Template_label_ngModelChange_61_listener($event) {
        \u0275\u0275restoreView(_r1);
        const itemTable_r6 = \u0275\u0275reference(57);
        return \u0275\u0275resetView(ctx.toggleAllOnPage("item", itemTable_r6.data, $event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "th", 39);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "th", 40);
      \u0275\u0275text(66);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "th", 41);
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "th", 42);
      \u0275\u0275text(72);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "th", 42);
      \u0275\u0275text(75);
      \u0275\u0275pipe(76, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "th", 42);
      \u0275\u0275text(78);
      \u0275\u0275pipe(79, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "th", 42);
      \u0275\u0275text(81);
      \u0275\u0275pipe(82, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "th", 43);
      \u0275\u0275text(84);
      \u0275\u0275pipe(85, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "th", 44);
      \u0275\u0275text(87);
      \u0275\u0275pipe(88, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(89, "tbody");
      \u0275\u0275template(90, EvsItemPanelComponent_tr_90_Template, 4, 4, "tr", 45)(91, EvsItemPanelComponent_tr_91_Template, 33, 20, "tr", 46);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(92, "nz-tab", 26);
      \u0275\u0275pipe(93, "translate");
      \u0275\u0275elementStart(94, "div", 27)(95, "input", 28);
      \u0275\u0275pipe(96, "translate");
      \u0275\u0275listener("ngModelChange", function EvsItemPanelComponent_Template_input_ngModelChange_95_listener($event) {
        return ctx.onFilterChange("param", $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(97, "div", 29)(98, "button", 30);
      \u0275\u0275listener("click", function EvsItemPanelComponent_Template_button_click_98_listener() {
        return ctx.addRow("param");
      });
      \u0275\u0275element(99, "i", 31);
      \u0275\u0275text(100);
      \u0275\u0275pipe(101, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "button", 32);
      \u0275\u0275listener("click", function EvsItemPanelComponent_Template_button_click_102_listener() {
        return ctx.openDeleteConfirm("param");
      });
      \u0275\u0275element(103, "i", 33);
      \u0275\u0275text(104);
      \u0275\u0275pipe(105, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "button", 34);
      \u0275\u0275listener("click", function EvsItemPanelComponent_Template_button_click_106_listener() {
        return ctx.saveTab("param");
      });
      \u0275\u0275element(107, "i", 35);
      \u0275\u0275text(108);
      \u0275\u0275pipe(109, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(110, "nz-table", 36, 1)(112, "thead")(113, "tr")(114, "th", 37)(115, "label", 38);
      \u0275\u0275listener("ngModelChange", function EvsItemPanelComponent_Template_label_ngModelChange_115_listener($event) {
        \u0275\u0275restoreView(_r1);
        const paramTable_r24 = \u0275\u0275reference(111);
        return \u0275\u0275resetView(ctx.toggleAllOnPage("param", paramTable_r24.data, $event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(116, "th", 39);
      \u0275\u0275text(117);
      \u0275\u0275pipe(118, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "th", 47);
      \u0275\u0275text(120);
      \u0275\u0275pipe(121, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "th", 41);
      \u0275\u0275text(123);
      \u0275\u0275pipe(124, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "th", 40);
      \u0275\u0275text(126);
      \u0275\u0275pipe(127, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "th", 43);
      \u0275\u0275text(129);
      \u0275\u0275pipe(130, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "th", 48);
      \u0275\u0275text(132);
      \u0275\u0275pipe(133, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "th", 48);
      \u0275\u0275text(135);
      \u0275\u0275pipe(136, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "th", 49);
      \u0275\u0275text(138);
      \u0275\u0275pipe(139, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "th", 43);
      \u0275\u0275text(141);
      \u0275\u0275pipe(142, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "th", 44);
      \u0275\u0275text(144);
      \u0275\u0275pipe(145, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(146, "tbody");
      \u0275\u0275template(147, EvsItemPanelComponent_tr_147_Template, 4, 4, "tr", 45)(148, EvsItemPanelComponent_tr_148_Template, 31, 20, "tr", 46);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275template(149, EvsItemPanelComponent_ng_template_149_Template, 2, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(151, "nz-modal", 50);
      \u0275\u0275pipe(152, "translate");
      \u0275\u0275pipe(153, "translate");
      \u0275\u0275pipe(154, "translate");
      \u0275\u0275listener("nzOnCancel", function EvsItemPanelComponent_Template_nz_modal_nzOnCancel_151_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function EvsItemPanelComponent_Template_nz_modal_nzOnOk_151_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(155, EvsItemPanelComponent_ng_container_155_Template, 8, 9, "ng-container", 51);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const itemTable_r6 = \u0275\u0275reference(57);
      const paramTable_r24 = \u0275\u0275reference(111);
      const eipTotalTpl_r40 = \u0275\u0275reference(150);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 76, "evs.manage.viewEvsItemPanel.search.evaluationName", "T\xEAn \u0111\xE1nh gi\xE1"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.resumeSeq);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.resumeOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 79, "evs.manage.viewEvsItemPanel.search.criteriaGroup", "Nh\xF3m ch\u1EC9 ti\xEAu"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchGroupNo);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(15, 82, "evs.manage.viewEvsItemPanel.search.select", "-- L\u1EF1a ch\u1ECDn --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.criteriaGroupOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 85, "evs.manage.viewEvsItemPanel.search.evalGroup", "Nh\xF3m \u0111\xE1nh gi\xE1"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchEvsGroup);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(22, 88, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.evsGroupOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 91, "evs.manage.viewEvsItemPanel.search.occGroup", "Nh\xF3m ch\u1EE9c v\u1EE5"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchEvsOccGroup);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(29, 94, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.evsOccGroupOptions());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(35, 97, "common.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(39, 100, "evs.manage.viewEvsItemPanel.tab.item", "Ch\u1EC9 ti\xEAu \u0111\xE1nh gi\xE1"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.item.filterText())("placeholder", \u0275\u0275pipeBind2(42, 103, "evsParam.label.quickFilter", "L\u1ECDc nhanh"));
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(47, 106, "evsParam.btn.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(51, 109, "evsParam.btn.delete", "X\xF3a"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.item.saving());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(55, 112, "evsParam.btn.save", "L\u01B0u"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzData", ctx.item.filteredRows())("nzLoading", ctx.item.loading())("nzPageSize", 50)("nzShowSizeChanger", true)("nzPageSizeOptions", \u0275\u0275pureFunction0(196, _c0))("nzShowTotal", eipTotalTpl_r40)("nzScroll", \u0275\u0275pureFunction0(197, _c1));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.allCheckedOnPage("item", itemTable_r6.data))("nzIndeterminate", ctx.someCheckedOnPage("item", itemTable_r6.data));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(64, 115, "common.stt", "No."));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(67, 118, "evs.manage.viewEvsItemPanel.col.criteriaGroup", "Nh\xF3m ch\u1EC9 ti\xEAu"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(70, 121, "evs.manage.viewEvsItemPanel.col.itemCode", "M\xE3 ch\u1EC9 ti\xEAu"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(73, 124, "evs.manage.viewEvsItemPanel.col.itemName", "T\xEAn ch\u1EC9 ti\xEAu"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(76, 127, "evs.manage.viewEvsItemPanel.col.itemNameKo", "T\xEAn ch\u1EC9 ti\xEAu (Ti\u1EBFng H\xE0n)"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(79, 130, "evs.manage.viewEvsItemPanel.col.remark", "Gi\u1EA3i th\xEDch"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(82, 133, "evs.manage.viewEvsItemPanel.col.remarkKo", "Gi\u1EA3i th\xEDch (Ti\u1EBFng H\xE0n)"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(85, 136, "evs.manage.viewEvsItemPanel.col.updatedBy", "Ng\u01B0\u1EDDi thay \u0111\u1ED5i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(88, 139, "evs.manage.viewEvsItemPanel.col.updateDate", "Th\u1EDDi gian thay \u0111\u1ED5i"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.item.loading() && itemTable_r6.data.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", itemTable_r6.data);
      \u0275\u0275advance();
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(93, 142, "evs.manage.viewEvsItemPanel.tab.param", "H\u1EA1ng m\u1EE5c ch\u1EC9 ti\xEAu ch\u1EC9 \u0111\u1ECBnh"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.param.filterText())("placeholder", \u0275\u0275pipeBind2(96, 145, "evsParam.label.quickFilter", "L\u1ECDc nhanh"));
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(101, 148, "evsParam.btn.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(105, 151, "evsParam.btn.delete", "X\xF3a"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.param.saving());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(109, 154, "evsParam.btn.save", "L\u01B0u"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzData", ctx.param.filteredRows())("nzLoading", ctx.param.loading())("nzPageSize", 50)("nzShowSizeChanger", true)("nzPageSizeOptions", \u0275\u0275pureFunction0(198, _c0))("nzShowTotal", eipTotalTpl_r40)("nzScroll", \u0275\u0275pureFunction0(199, _c2));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngModel", ctx.allCheckedOnPage("param", paramTable_r24.data))("nzIndeterminate", ctx.someCheckedOnPage("param", paramTable_r24.data));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(118, 157, "common.stt", "No."));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(121, 160, "evs.manage.viewEvsItemPanel.col.itemName", "T\xEAn ch\u1EC9 ti\xEAu"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(124, 163, "evs.manage.viewEvsItemPanel.col.itemCode", "M\xE3 ch\u1EC9 ti\xEAu"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(127, 166, "evs.manage.viewEvsItemPanel.col.criteriaGroup", "Nh\xF3m ch\u1EC9 ti\xEAu"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(130, 169, "evs.manage.viewEvsItemPanel.col.remark", "Gi\u1EA3i th\xEDch"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(133, 172, "evs.manage.viewEvsItemPanel.col.evalGroup", "Nh\xF3m nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(136, 175, "evs.manage.viewEvsItemPanel.col.occGroup", "Nh\xF3m ch\u1EE9c v\u1EE5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(139, 178, "evs.manage.viewEvsItemPanel.col.score", "\u0110i\u1EC3m"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(142, 181, "evs.manage.viewEvsItemPanel.col.updatedBy", "Ng\u01B0\u1EDDi thay \u0111\u1ED5i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(145, 184, "evs.manage.viewEvsItemPanel.col.updateDate", "Th\u1EDDi gian thay \u0111\u1ED5i"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.param.loading() && paramTable_r24.data.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", paramTable_r24.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(152, 187, "evsParam.modal.deleteTitle", "X\xE1c nh\u1EADn x\xF3a"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(153, 190, "evsParam.btn.delete", "X\xF3a"))("nzCancelText", \u0275\u0275pipeBind2(154, 193, "evsParam.btn.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzTabsModule, NzTabsComponent, NzTabComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzCheckboxModule, NzCheckboxComponent, NzModalModule, NzModalComponent, NzModalContentDirective, TranslatePipe], styles: ["\n  .eip-row-edit {\n  background-color: #fffde7 !important;\n  cursor: default;\n}\n  tr:not(.eip-row-edit) {\n  cursor: pointer;\n}\n  .eip-row-new td {\n  font-style: italic;\n}\n/*# sourceMappingURL=evs-item-panel.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EvsItemPanelComponent, [{
    type: Component,
    args: [{ selector: "app-evs-item-panel", standalone: true, imports: [
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
      <form class="row g-3" (ngSubmit)="search()">
        <div class="col-md-3">
          <label class="form-label">{{ 'evs.manage.viewEvsItemPanel.search.evaluationName' | translate:'T\xEAn \u0111\xE1nh gi\xE1' }}</label>
          <nz-select class="w-100" [(ngModel)]="resumeSeq" name="eipResumeSeq">
            <nz-option *ngFor="let r of resumeOptions()" [nzValue]="r.seq" [nzLabel]="r.resumeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'evs.manage.viewEvsItemPanel.search.criteriaGroup' | translate:'Nh\xF3m ch\u1EC9 ti\xEAu' }}</label>
          <nz-select class="w-100" [(ngModel)]="searchGroupNo" name="eipSearchGroupNo" nzAllowClear
                     [nzPlaceHolder]="'evs.manage.viewEvsItemPanel.search.select' | translate:'-- L\u1EF1a ch\u1ECDn --'">
            <nz-option *ngFor="let o of criteriaGroupOptions()" [nzValue]="o.codeNo" [nzLabel]="o.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'evs.manage.viewEvsItemPanel.search.evalGroup' | translate:'Nh\xF3m \u0111\xE1nh gi\xE1' }}</label>
          <nz-select class="w-100" [(ngModel)]="searchEvsGroup" name="eipSearchEvsGroup" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let o of evsGroupOptions()" [nzValue]="o.codeNo" [nzLabel]="o.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'evs.manage.viewEvsItemPanel.search.occGroup' | translate:'Nh\xF3m ch\u1EE9c v\u1EE5' }}</label>
          <nz-select class="w-100" [(ngModel)]="searchEvsOccGroup" name="eipSearchEvsOccGroup" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let o of evsOccGroupOptions()" [nzValue]="o.codeNo" [nzLabel]="o.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-12">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'common.search' | translate:'Tra c\u1EE9u' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-tabs>
        <!-- \u2500\u2500 Tab Ch\u1EC9 ti\xEAu \u0111\xE1nh gi\xE1 \u2500\u2500 -->
        <nz-tab [nzTitle]="'evs.manage.viewEvsItemPanel.tab.item' | translate:'Ch\u1EC9 ti\xEAu \u0111\xE1nh gi\xE1'">
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

          <nz-table [nzData]="item.filteredRows()" [nzLoading]="item.loading()" [nzPageSize]="50" [nzShowSizeChanger]="true"
                    [nzPageSizeOptions]="[10, 25, 50, 100]" [nzShowTotal]="eipTotalTpl" [nzScroll]="{ x: '1150px' }" #itemTable="nzTable">
            <thead>
              <tr>
                <th class="text-center" nzWidth="40px">
                  <label nz-checkbox [ngModel]="allCheckedOnPage('item', itemTable.data)"
                         [nzIndeterminate]="someCheckedOnPage('item', itemTable.data)"
                         (ngModelChange)="toggleAllOnPage('item', itemTable.data, $event)"></label>
                </th>
                <th class="text-center" nzWidth="50px">{{ 'common.stt' | translate:'No.' }}</th>
                <th nzWidth="150px">{{ 'evs.manage.viewEvsItemPanel.col.criteriaGroup' | translate:'Nh\xF3m ch\u1EC9 ti\xEAu' }}</th>
                <th nzWidth="110px">{{ 'evs.manage.viewEvsItemPanel.col.itemCode' | translate:'M\xE3 ch\u1EC9 ti\xEAu' }}</th>
                <th nzWidth="180px">{{ 'evs.manage.viewEvsItemPanel.col.itemName' | translate:'T\xEAn ch\u1EC9 ti\xEAu' }}</th>
                <th nzWidth="180px">{{ 'evs.manage.viewEvsItemPanel.col.itemNameKo' | translate:'T\xEAn ch\u1EC9 ti\xEAu (Ti\u1EBFng H\xE0n)' }}</th>
                <th nzWidth="180px">{{ 'evs.manage.viewEvsItemPanel.col.remark' | translate:'Gi\u1EA3i th\xEDch' }}</th>
                <th nzWidth="180px">{{ 'evs.manage.viewEvsItemPanel.col.remarkKo' | translate:'Gi\u1EA3i th\xEDch (Ti\u1EBFng H\xE0n)' }}</th>
                <th nzWidth="200px">{{ 'evs.manage.viewEvsItemPanel.col.updatedBy' | translate:'Ng\u01B0\u1EDDi thay \u0111\u1ED5i' }}</th>
                <th class="text-center" nzWidth="120px">{{ 'evs.manage.viewEvsItemPanel.col.updateDate' | translate:'Th\u1EDDi gian thay \u0111\u1ED5i' }}</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngIf="!item.loading() && itemTable.data.length === 0">
                <td colspan="9" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
              </tr>
              <tr *ngFor="let row of itemTable.data; let i = index"
                  [class.eip-row-edit]="row.editing" [class.eip-row-new]="row.isNew" (click)="rowClick('item', row)">
                <td class="text-center" (click)="$event.stopPropagation()">
                  <label nz-checkbox [ngModel]="isChecked('item', row)" (ngModelChange)="toggleChecked('item', row, $event)"></label>
                </td>
                <td class="text-center">{{ i + 1 }}</td>
                <td (click)="$event.stopPropagation()">
                  <nz-select *ngIf="row.editing; else groupNoView" class="w-100" [(ngModel)]="row.groupNo"
                             (ngModelChange)="onGroupNoChange(row, $event)" [nzPlaceHolder]="'evsParam.js.defaultSelect' | translate:'-- Ch\u1ECDn --'">
                    <nz-option *ngFor="let o of groupNoCodeOptions()" [nzValue]="o.codeNo" [nzLabel]="o.codeName"></nz-option>
                  </nz-select>
                  <ng-template #groupNoView>{{ row.groupName || row.groupNo }}</ng-template>
                </td>
                <td (click)="$event.stopPropagation()">
                  <input *ngIf="row.editing; else itemCodeView" nz-input [(ngModel)]="row.itemCode" maxlength="20">
                  <ng-template #itemCodeView>{{ row.itemCode }}</ng-template>
                </td>
                <td (click)="$event.stopPropagation()">
                  <input *ngIf="row.editing; else itemNameView" nz-input [(ngModel)]="row.itemName" maxlength="400">
                  <ng-template #itemNameView>{{ row.itemName }}</ng-template>
                </td>
                <td (click)="$event.stopPropagation()">
                  <input *ngIf="row.editing; else itemNameKoView" nz-input [(ngModel)]="row.itemNameKo" maxlength="400">
                  <ng-template #itemNameKoView>{{ row.itemNameKo }}</ng-template>
                </td>
                <td (click)="$event.stopPropagation()">
                  <input *ngIf="row.editing; else remarkView" nz-input [(ngModel)]="row.remark" maxlength="4000">
                  <ng-template #remarkView>{{ row.remark }}</ng-template>
                </td>
                <td (click)="$event.stopPropagation()">
                  <input *ngIf="row.editing; else remarkKoView" nz-input [(ngModel)]="row.remarkKo" maxlength="4000">
                  <ng-template #remarkKoView>{{ row.remarkKo }}</ng-template>
                </td>
                <td class="small">{{ row.updatedBy }}</td>
                <td class="text-center small">{{ dateOnly(row.updateDate) }}</td>
              </tr>
            </tbody>
          </nz-table>
        </nz-tab>

        <!-- \u2500\u2500 Tab H\u1EA1ng m\u1EE5c ch\u1EC9 ti\xEAu ch\u1EC9 \u0111\u1ECBnh \u2500\u2500 -->
        <nz-tab [nzTitle]="'evs.manage.viewEvsItemPanel.tab.param' | translate:'H\u1EA1ng m\u1EE5c ch\u1EC9 ti\xEAu ch\u1EC9 \u0111\u1ECBnh'">
          <div class="d-flex align-items-center justify-content-between mt-2 mb-2 flex-wrap gap-2">
            <input nz-input style="width:200px;" [ngModel]="param.filterText()" (ngModelChange)="onFilterChange('param', $event)"
                   [placeholder]="'evsParam.label.quickFilter' | translate:'L\u1ECDc nhanh'">
            <div class="d-flex align-items-center gap-2">
              <button nz-button nzType="primary" nzSize="small" type="button" (click)="addRow('param')">
                <i class="bx bx-plus"></i> {{ 'evsParam.btn.addNew' | translate:'Th\xEAm m\u1EDBi' }}
              </button>
              <button nz-button nzDanger nzSize="small" type="button" (click)="openDeleteConfirm('param')">
                <i class="bx bx-trash"></i> {{ 'evsParam.btn.delete' | translate:'X\xF3a' }}
              </button>
              <button nz-button nzType="primary" nzSize="small" type="button" [nzLoading]="param.saving()" (click)="saveTab('param')">
                <i class="bx bx-save"></i> {{ 'evsParam.btn.save' | translate:'L\u01B0u' }}
              </button>
            </div>
          </div>

          <nz-table [nzData]="param.filteredRows()" [nzLoading]="param.loading()" [nzPageSize]="50" [nzShowSizeChanger]="true"
                    [nzPageSizeOptions]="[10, 25, 50, 100]" [nzShowTotal]="eipTotalTpl" [nzScroll]="{ x: '1450px' }" #paramTable="nzTable">
            <thead>
              <tr>
                <th class="text-center" nzWidth="40px">
                  <label nz-checkbox [ngModel]="allCheckedOnPage('param', paramTable.data)"
                         [nzIndeterminate]="someCheckedOnPage('param', paramTable.data)"
                         (ngModelChange)="toggleAllOnPage('param', paramTable.data, $event)"></label>
                </th>
                <th class="text-center" nzWidth="50px">{{ 'common.stt' | translate:'No.' }}</th>
                <th nzWidth="220px">{{ 'evs.manage.viewEvsItemPanel.col.itemName' | translate:'T\xEAn ch\u1EC9 ti\xEAu' }}</th>
                <th nzWidth="110px">{{ 'evs.manage.viewEvsItemPanel.col.itemCode' | translate:'M\xE3 ch\u1EC9 ti\xEAu' }}</th>
                <th nzWidth="150px">{{ 'evs.manage.viewEvsItemPanel.col.criteriaGroup' | translate:'Nh\xF3m ch\u1EC9 ti\xEAu' }}</th>
                <th nzWidth="200px">{{ 'evs.manage.viewEvsItemPanel.col.remark' | translate:'Gi\u1EA3i th\xEDch' }}</th>
                <th nzWidth="170px">{{ 'evs.manage.viewEvsItemPanel.col.evalGroup' | translate:'Nh\xF3m nh\xE2n vi\xEAn' }}</th>
                <th nzWidth="170px">{{ 'evs.manage.viewEvsItemPanel.col.occGroup' | translate:'Nh\xF3m ch\u1EE9c v\u1EE5' }}</th>
                <th class="text-center" nzWidth="90px">{{ 'evs.manage.viewEvsItemPanel.col.score' | translate:'\u0110i\u1EC3m' }}</th>
                <th nzWidth="200px">{{ 'evs.manage.viewEvsItemPanel.col.updatedBy' | translate:'Ng\u01B0\u1EDDi thay \u0111\u1ED5i' }}</th>
                <th class="text-center" nzWidth="120px">{{ 'evs.manage.viewEvsItemPanel.col.updateDate' | translate:'Th\u1EDDi gian thay \u0111\u1ED5i' }}</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngIf="!param.loading() && paramTable.data.length === 0">
                <td colspan="10" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
              </tr>
              <tr *ngFor="let row of paramTable.data; let i = index"
                  [class.eip-row-edit]="row.editing" [class.eip-row-new]="row.isNew" (click)="rowClick('param', row)">
                <td class="text-center" (click)="$event.stopPropagation()">
                  <label nz-checkbox [ngModel]="isChecked('param', row)" (ngModelChange)="toggleChecked('param', row, $event)"></label>
                </td>
                <td class="text-center">{{ i + 1 }}</td>
                <td (click)="$event.stopPropagation()">
                  <nz-select *ngIf="row.editing; else itemNameSelView" class="w-100" [(ngModel)]="row.itemCode"
                             (ngModelChange)="onItemCodeChange(row, $event)" [nzPlaceHolder]="'evsParam.js.defaultSelect' | translate:'-- Ch\u1ECDn --'">
                    <nz-option *ngFor="let o of itemOptions()" [nzValue]="o.itemCode" [nzLabel]="o.itemCode + ' - ' + o.itemName"></nz-option>
                  </nz-select>
                  <ng-template #itemNameSelView>{{ row.itemName }}</ng-template>
                </td>
                <td>{{ row.itemCodeItem }}</td>
                <td>{{ row.groupName }}</td>
                <td [attr.title]="row.itemRemark || null">{{ row.itemRemark }}</td>
                <td (click)="$event.stopPropagation()">
                  <nz-select *ngIf="row.editing; else evsGroupView" class="w-100" [(ngModel)]="row.evsGroup"
                             (ngModelChange)="onEvsGroupChange(row, $event)" [nzPlaceHolder]="'evsParam.js.defaultSelect' | translate:'-- Ch\u1ECDn --'">
                    <nz-option *ngFor="let o of evsGroupOptions()" [nzValue]="o.codeNo" [nzLabel]="o.codeName"></nz-option>
                  </nz-select>
                  <ng-template #evsGroupView>{{ row.evsGroupName || row.evsGroup }}</ng-template>
                </td>
                <td (click)="$event.stopPropagation()">
                  <nz-select *ngIf="row.editing; else evsOccGroupView" class="w-100" [(ngModel)]="row.evsOccGroup"
                             (ngModelChange)="onEvsOccGroupChange(row, $event)" [nzPlaceHolder]="'evsParam.js.defaultSelect' | translate:'-- Ch\u1ECDn --'">
                    <nz-option *ngFor="let o of evsOccGroupOptions()" [nzValue]="o.codeNo" [nzLabel]="o.codeName"></nz-option>
                  </nz-select>
                  <ng-template #evsOccGroupView>{{ row.evsOccGroupName || row.evsOccGroup }}</ng-template>
                </td>
                <td class="text-center" (click)="$event.stopPropagation()">
                  <input *ngIf="row.editing; else itemScoreView" nz-input type="number" [(ngModel)]="row.itemScore">
                  <ng-template #itemScoreView>{{ row.itemScore }}</ng-template>
                </td>
                <td class="small">{{ row.updatedBy }}</td>
                <td class="text-center small">{{ dateOnly(row.updateDate) }}</td>
              </tr>
            </tbody>
          </nz-table>
        </nz-tab>
      </nz-tabs>
    </nz-card>
  </div>
</div>

<ng-template #eipTotalTpl let-total>
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
`, styles: ["/* src/app/evs-item-panel/evs-item-panel.component.css */\n::ng-deep .eip-row-edit {\n  background-color: #fffde7 !important;\n  cursor: default;\n}\n::ng-deep tr:not(.eip-row-edit) {\n  cursor: pointer;\n}\n::ng-deep .eip-row-new td {\n  font-style: italic;\n}\n/*# sourceMappingURL=evs-item-panel.component.css.map */\n"] }]
  }], () => [{ type: EvsItemPanelService }, { type: I18nService }, { type: NzMessageService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EvsItemPanelComponent, { className: "EvsItemPanelComponent", filePath: "src/app/evs-item-panel/evs-item-panel.component.ts", lineNumber: 135 });
})();
export {
  EvsItemPanelComponent
};
//# debugId=c037f509-bdf4-51d2-bc3d-3dc9000be17f
//# sourceMappingURL=chunk-YEUTKXNY.js.map
