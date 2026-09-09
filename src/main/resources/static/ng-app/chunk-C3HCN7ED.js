import {
  NzDescriptionsComponent,
  NzDescriptionsItemComponent,
  NzDescriptionsModule
} from "./chunk-Q45A6SWP.js";
import {
  NzMessageService
} from "./chunk-XWW7CXU6.js";
import {
  NzModalComponent,
  NzModalContentDirective,
  NzModalModule,
  NzModalService
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
  MaxLengthValidator,
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
  firstValueFrom,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
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

// src/app/reg-personal-target/reg-personal-target.service.ts
var API_BASE = "/evs/manage/api";
var RegPersonalTargetService = class _RegPersonalTargetService {
  constructor(http) {
    this.http = http;
  }
  http;
  getResumeList(evsType, evsLevel) {
    return this.http.get(`${API_BASE}/resume/evsResumeList`, {
      params: new HttpParams().set("evsType", evsType).set("evsLevel", evsLevel),
      withCredentials: true
    });
  }
  getObjectInfo(resumeSeq) {
    return this.http.get(`${API_BASE}/personalTarget/objectInfo`, {
      params: new HttpParams().set("resumeSeq", resumeSeq),
      withCredentials: true
    });
  }
  getItemList(evsObjectSeq) {
    return this.http.get(`${API_BASE}/personalTarget/itemList`, {
      params: new HttpParams().set("evsObjectSeq", evsObjectSeq),
      withCredentials: true
    });
  }
  saveItem(payload) {
    return this.http.post(`${API_BASE}/personalTarget/saveItem`, payload, { withCredentials: true });
  }
  deleteItem(seq) {
    return this.http.post(`${API_BASE}/personalTarget/deleteItem`, { seq }, { withCredentials: true });
  }
  static \u0275fac = function RegPersonalTargetService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegPersonalTargetService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RegPersonalTargetService, factory: _RegPersonalTargetService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegPersonalTargetService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/reg-personal-target/reg-personal-target.component.ts
function RegPersonalTargetComponent_nz_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 18);
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    \u0275\u0275property("nzValue", r_r1.seq)("nzLabel", r_r1.resumeName);
  }
}
function RegPersonalTargetComponent_nz_alert_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 19);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("nzMessage", \u0275\u0275pipeBind2(1, 1, "evs.viewConfirmTarget1.msg.notInEvalPeriod", "Kh\xF4ng trong kho\u1EA3ng th\u1EDDi gian \u0111\xE1nh gi\xE1 ho\u1EB7c b\u1EA1n kh\xF4ng ph\u1EA3i l\xE0 ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1, xin li\xEAn h\u1EC7 Ph\xF2ng nh\xE2n s\u1EF1!"));
  }
}
function RegPersonalTargetComponent_ng_container_17_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "button", 43);
    \u0275\u0275listener("click", function RegPersonalTargetComponent_ng_container_17_div_38_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.saveDraft());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 44);
    \u0275\u0275listener("click", function RegPersonalTargetComponent_ng_container_17_div_38_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.execute());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 44);
    \u0275\u0275listener("click", function RegPersonalTargetComponent_ng_container_17_div_38_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addRow());
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 3, "evs.viewRegPersonalTarget.btnSaveDraft", "L\u01B0u t\u1EA1m th\u1EDDi"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 6, "evs.viewRegPersonalTarget.btnExecute", "Th\u1EF1c hi\u1EC7n"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 9, "evs.viewRegPersonalTarget.btnAddNew", "Th\xEAm m\u1EDBi(+)"), " ");
  }
}
function RegPersonalTargetComponent_ng_container_17_tr_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 45);
    \u0275\u0275text(2, "0");
    \u0275\u0275elementEnd()();
  }
}
function RegPersonalTargetComponent_ng_container_17_tr_60_input_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function RegPersonalTargetComponent_ng_container_17_tr_60_input_4_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const row_r5 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r5.itemName, $event) || (row_r5.itemName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("click", function RegPersonalTargetComponent_ng_container_17_tr_60_input_4_Template_input_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r5.itemName);
    \u0275\u0275control();
  }
}
function RegPersonalTargetComponent_ng_container_17_tr_60_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r5.itemName);
  }
}
function RegPersonalTargetComponent_ng_container_17_tr_60_textarea_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "textarea", 54);
    \u0275\u0275twoWayListener("ngModelChange", function RegPersonalTargetComponent_ng_container_17_tr_60_textarea_8_Template_textarea_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const row_r5 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r5.itemContent, $event) || (row_r5.itemContent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("click", function RegPersonalTargetComponent_ng_container_17_tr_60_textarea_8_Template_textarea_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r5.itemContent);
    \u0275\u0275control();
  }
}
function RegPersonalTargetComponent_ng_container_17_tr_60_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 55);
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("innerHTML", row_r5.itemContent, \u0275\u0275sanitizeHtml);
  }
}
function RegPersonalTargetComponent_ng_container_17_tr_60_input_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function RegPersonalTargetComponent_ng_container_17_tr_60_input_12_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const row_r5 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(row_r5.itemScore, $event) || (row_r5.itemScore = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RegPersonalTargetComponent_ng_container_17_tr_60_input_12_Template_input_ngModelChange_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onScoreInput());
    })("click", function RegPersonalTargetComponent_ng_container_17_tr_60_input_12_Template_input_click_0_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275twoWayProperty("ngModel", row_r5.itemScore);
    \u0275\u0275control();
  }
}
function RegPersonalTargetComponent_ng_container_17_tr_60_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(row_r5.itemScore);
  }
}
function RegPersonalTargetComponent_ng_container_17_tr_60_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 57);
    \u0275\u0275listener("click", function RegPersonalTargetComponent_ng_container_17_tr_60_button_16_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const row_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.cancelEdit(row_r5));
    });
    \u0275\u0275element(1, "i", 58);
    \u0275\u0275elementEnd();
  }
}
function RegPersonalTargetComponent_ng_container_17_tr_60_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function RegPersonalTargetComponent_ng_container_17_tr_60_button_17_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const row_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.requestDelete(row_r5));
    });
    \u0275\u0275element(1, "i", 60);
    \u0275\u0275elementEnd();
  }
}
function RegPersonalTargetComponent_ng_container_17_tr_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 46);
    \u0275\u0275listener("click", function RegPersonalTargetComponent_ng_container_17_tr_60_Template_tr_click_0_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.rowClick(row_r5));
    });
    \u0275\u0275elementStart(1, "td", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275template(4, RegPersonalTargetComponent_ng_container_17_tr_60_input_4_Template, 1, 1, "input", 48)(5, RegPersonalTargetComponent_ng_container_17_tr_60_ng_template_5_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275template(8, RegPersonalTargetComponent_ng_container_17_tr_60_textarea_8_Template, 1, 1, "textarea", 49)(9, RegPersonalTargetComponent_ng_container_17_tr_60_ng_template_9_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 47);
    \u0275\u0275template(12, RegPersonalTargetComponent_ng_container_17_tr_60_input_12_Template, 1, 1, "input", 50)(13, RegPersonalTargetComponent_ng_container_17_tr_60_ng_template_13_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 47);
    \u0275\u0275template(16, RegPersonalTargetComponent_ng_container_17_tr_60_button_16_Template, 2, 0, "button", 51)(17, RegPersonalTargetComponent_ng_container_17_tr_60_button_17_Template, 2, 0, "button", 52);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const i_r11 = ctx.index;
    const nameView_r12 = \u0275\u0275reference(6);
    const contentView_r13 = \u0275\u0275reference(10);
    const scoreView_r14 = \u0275\u0275reference(14);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("rpt-edit-row", row_r5.editing)("rpt-clickable", ctx_r2.isEditable && !row_r5.editing);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r11 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r5.editing)("ngIfElse", nameView_r12);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r5.editing)("ngIfElse", contentView_r13);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r5.editing)("ngIfElse", scoreView_r14);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r5.editing && !row_r5.isNew);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isEditable);
  }
}
function RegPersonalTargetComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "nz-card", 5)(2, "div", 20)(3, "div", 21)(4, "nz-descriptions", 22);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "nz-descriptions-item", 23);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "nz-descriptions-item", 23);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "nz-descriptions-item", 23);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "nz-descriptions-item", 23);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 21)(19, "nz-descriptions", 22);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementStart(21, "nz-descriptions-item", 23);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "nz-descriptions-item", 23);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "nz-descriptions-item", 23);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "nz-descriptions-item", 23);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(33, "nz-card", 5)(34, "div", 24)(35, "span", 25);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, RegPersonalTargetComponent_ng_container_17_div_38_Template, 10, 12, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 27)(40, "nz-table", 28)(41, "thead")(42, "tr")(43, "th", 29);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "th", 30);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "th");
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "th", 31);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "th", 32);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "tbody");
    \u0275\u0275template(59, RegPersonalTargetComponent_ng_container_17_tr_59_Template, 3, 0, "tr", 15)(60, RegPersonalTargetComponent_ng_container_17_tr_60_Template, 18, 13, "tr", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "tfoot")(62, "tr")(63, "td", 34);
    \u0275\u0275text(64, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "td", 35);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd();
    \u0275\u0275element(67, "td");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(68, "nz-card")(69, "div", 36);
    \u0275\u0275text(70);
    \u0275\u0275pipe(71, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "table", 37)(73, "thead", 38)(74, "tr");
    \u0275\u0275element(75, "th", 39);
    \u0275\u0275elementStart(76, "th");
    \u0275\u0275text(77);
    \u0275\u0275pipe(78, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(79, "tbody")(80, "tr")(81, "td", 40);
    \u0275\u0275text(82);
    \u0275\u0275pipe(83, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "td")(85, "textarea", 41);
    \u0275\u0275text(86);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(87, "tr")(88, "td", 40);
    \u0275\u0275text(89);
    \u0275\u0275pipe(90, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "td")(92, "textarea", 41);
    \u0275\u0275text(93);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const info_r15 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("nzColumn", 1)("nzTitle", \u0275\u0275pipeBind2(5, 43, "evs.viewRegPersonalTarget.basicInfo", "Th\xF4ng tin c\u01A1 b\u1EA3n"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(7, 46, "evs.viewRegPersonalTarget.fullName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r15.localName);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(10, 49, "evs.viewRegPersonalTarget.position", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r15.postGradeName);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(13, 52, "evs.viewRegPersonalTarget.dept", "Ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r15.deptname);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(16, 55, "evs.viewRegPersonalTarget.hireDate", "Ng\xE0y v\xE0o l\xE0m"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r15.dateStarted);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColumn", 1)("nzTitle", \u0275\u0275pipeBind2(20, 58, "evs.viewRegPersonalTarget.evalCategory", "H\u1EA1ng m\u1EE5c \u0111\xE1nh gi\xE1"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(22, 61, "evs.viewRegPersonalTarget.evalYear", "N\u0103m \u0111\xE1nh gi\xE1"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r15.evsYear);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(25, 64, "evs.viewRegPersonalTarget.period", "Th\u1EDDi gian"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", info_r15.evsStartDate, "", info_r15.evsEndDate ? "~" + info_r15.evsEndDate : "");
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(28, 67, "evs.viewRegPersonalTarget.appraiser1", "Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 l\u1EA7n 1"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r15.localName1);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(31, 70, "evs.viewRegPersonalTarget.appraiser2", "Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 l\u1EA7n 2"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(info_r15.localName2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 73, "evs.viewRegPersonalTarget.objectiveConfirm", "Objective Confirm"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.isEditable);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzData", ctx_r2.rows())("nzShowPagination", false);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 76, "evs.viewRegPersonalTarget.col.no", "No"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 79, "evs.viewRegPersonalTarget.col.evalCategory", "H\u1EA1ng m\u1EE5c \u0111\xE1nh gi\xE1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 82, "evs.viewRegPersonalTarget.col.target", "M\u1EE5c ti\xEAu"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 85, "evs.viewRegPersonalTarget.col.ratio", "T\u1EF7 l\u1EC7(%)"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 88, "evs.viewRegPersonalTarget.col.action", "Thao t\xE1c"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.rows().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.rows());
    \u0275\u0275advance(5);
    \u0275\u0275classProp("rpt-total-ok", ctx_r2.totalOk)("rpt-total-err", !ctx_r2.totalOk);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.totalScore());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(71, 91, "evs.viewRegPersonalTarget.part2", "Ph\u1EA7n 2"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(78, 94, "evs.viewRegPersonalTarget.col.opinion", "\xDD ki\u1EBFn"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(83, 97, "evs.viewRegPersonalTarget.appraiser1Comment", "Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 c\u1EA5p 1"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(info_r15.affirmComment1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(90, 100, "evs.viewRegPersonalTarget.appraiser2Comment", "Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 c\u1EA5p 2"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(info_r15.affirmComment2);
  }
}
function RegPersonalTargetComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "evs.viewRegPersonalTarget.msg.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a m\u1EE5c ti\xEAu n\xE0y kh\xF4ng?"), " ");
  }
}
var I18N_KEYS = [
  "evs.viewRegPersonalTarget.evalName",
  "evs.viewRegPersonalTarget.btnSearch",
  "evs.viewRegPersonalTarget.personalInfo",
  "evs.viewRegPersonalTarget.basicInfo",
  "evs.viewRegPersonalTarget.evalCategory",
  "evs.viewRegPersonalTarget.fullName",
  "evs.viewRegPersonalTarget.position",
  "evs.viewRegPersonalTarget.dept",
  "evs.viewRegPersonalTarget.hireDate",
  "evs.viewRegPersonalTarget.evalYear",
  "evs.viewRegPersonalTarget.period",
  "evs.viewRegPersonalTarget.appraiser1",
  "evs.viewRegPersonalTarget.appraiser2",
  "evs.viewRegPersonalTarget.objectiveConfirm",
  "evs.viewRegPersonalTarget.btnSaveDraft",
  "evs.viewRegPersonalTarget.btnExecute",
  "evs.viewRegPersonalTarget.btnAddNew",
  "evs.viewRegPersonalTarget.col.no",
  "evs.viewRegPersonalTarget.col.evalCategory",
  "evs.viewRegPersonalTarget.col.target",
  "evs.viewRegPersonalTarget.col.ratio",
  "evs.viewRegPersonalTarget.col.action",
  "evs.viewRegPersonalTarget.part2",
  "evs.viewRegPersonalTarget.col.opinion",
  "evs.viewRegPersonalTarget.appraiser1Comment",
  "evs.viewRegPersonalTarget.appraiser2Comment",
  "evs.viewRegPersonalTarget.msg.selectEvalFirst",
  "evs.viewRegPersonalTarget.msg.noData",
  "evs.viewRegPersonalTarget.msg.saveDraftSuccess",
  "evs.viewRegPersonalTarget.msg.executeSuccess",
  "evs.viewRegPersonalTarget.msg.saveFail",
  "evs.viewRegPersonalTarget.msg.deleteFail",
  "evs.viewRegPersonalTarget.msg.confirmDelete",
  "evs.viewRegPersonalTarget.msg.confirmExecute",
  "evs.viewRegPersonalTarget.msg.itemNameRequired",
  "evs.viewRegPersonalTarget.msg.itemContentRequired",
  "evs.viewRegPersonalTarget.msg.totalNot100",
  "evs.viewRegPersonalTarget.msg.unsavedRows",
  "evs.viewRegPersonalTarget.msg.itemScoreZero",
  "evs.viewConfirmTarget1.msg.notInEvalPeriod",
  "common.select",
  "common.confirm",
  "common.cancel",
  "common.stt",
  "common.action",
  "common.loadFail"
];
var EVS_LEVEL_REG = "14015066";
var EDITABLE_ACTIVITIES = ["14015362", "14015354"];
var RegPersonalTargetComponent = class _RegPersonalTargetComponent {
  constructor(api, i18n, message, modal, route) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
    this.modal = modal;
    this.route = route;
  }
  api;
  i18n;
  message;
  modal;
  route;
  resumeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "resumeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  noticeVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "noticeVisible" }] : (
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
  personalInfo = signal(
    null,
    ...ngDevMode ? [{ debugName: "personalInfo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  rows = signal(
    [],
    ...ngDevMode ? [{ debugName: "rows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  totalScore = signal(
    0,
    ...ngDevMode ? [{ debugName: "totalScore" }] : (
      /* istanbul ignore next */
      []
    )
  );
  resumeSeq = null;
  evsType = "";
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.route.queryParamMap.subscribe((params) => {
      this.evsType = params.get("evsType") ?? "";
      this.loadResumeList();
    });
  }
  get isEditable() {
    return EDITABLE_ACTIVITIES.includes(String(this.personalInfo()?.activity ?? ""));
  }
  get totalOk() {
    return this.totalScore() === 100;
  }
  loadResumeList() {
    this.api.getResumeList(this.evsType, EVS_LEVEL_REG).subscribe({
      next: (rows) => {
        if (!rows || rows.length === 0) {
          this.noticeVisible.set(true);
          this.resumeOptions.set([]);
          return;
        }
        this.noticeVisible.set(false);
        this.resumeOptions.set(rows);
        this.resumeSeq = rows[0].seq;
        this.search();
      },
      error: () => this.message.error(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"))
    });
  }
  search() {
    if (!this.resumeSeq) {
      this.message.warning(this.i18n.t("evs.viewRegPersonalTarget.msg.selectEvalFirst", "Vui l\xF2ng ch\u1ECDn t\xEAn \u0111\xE1nh gi\xE1 tr\u01B0\u1EDBc."));
      return;
    }
    this.loading.set(true);
    this.api.getObjectInfo(this.resumeSeq).subscribe({
      next: (data) => {
        this.loading.set(false);
        if (!data || !data.seq) {
          this.hideAll();
          this.message.warning(this.i18n.t("evs.viewRegPersonalTarget.msg.noData", "Kh\xF4ng t\xECm th\u1EA5y th\xF4ng tin."));
          return;
        }
        this.personalInfo.set(data);
        this.loadItems(data.seq);
      },
      error: () => {
        this.loading.set(false);
        this.hideAll();
      }
    });
  }
  hideAll() {
    this.personalInfo.set(null);
    this.rows.set([]);
    this.totalScore.set(0);
  }
  loadItems(evsObjectSeq) {
    this.api.getItemList(evsObjectSeq).subscribe({
      next: (list) => {
        this.rows.set((list ?? []).map((r) => ({
          seq: r.seq,
          itemName: r.itemName,
          itemContent: r.itemContent || "",
          itemScore: Number(r.itemScore) || 0,
          isNew: false,
          editing: false
        })));
        this.recalcTotal();
      }
    });
  }
  recalcTotal() {
    const total = this.rows().reduce((sum, r) => sum + (Number(r.itemScore) || 0), 0);
    this.totalScore.set(Math.round(total * 100) / 100);
  }
  onScoreInput() {
    this.recalcTotal();
  }
  // ==================== Thêm mới / sửa inline / xóa dòng ====================
  addRow() {
    this.rows.update((rows) => [...rows, { seq: null, itemName: "", itemContent: "", itemScore: 0, isNew: true, editing: true }]);
    this.recalcTotal();
  }
  rowClick(row) {
    if (!this.isEditable || row.isNew || row.editing)
      return;
    this.startEdit(row);
  }
  editSnapshots = /* @__PURE__ */ new Map();
  startEdit(row) {
    this.editSnapshots.set(row, { itemName: row.itemName, itemContent: row.itemContent, itemScore: row.itemScore });
    row.editing = true;
  }
  cancelEdit(row) {
    if (row.isNew) {
      this.removeRow(row);
      return;
    }
    const snapshot = this.editSnapshots.get(row);
    if (snapshot) {
      row.itemName = snapshot.itemName;
      row.itemContent = snapshot.itemContent;
      row.itemScore = snapshot.itemScore;
      this.editSnapshots.delete(row);
    }
    row.editing = false;
    this.recalcTotal();
  }
  removeRow(row) {
    this.rows.update((rows) => rows.filter((r) => r !== row));
    this.recalcTotal();
  }
  pendingDeleteRow = null;
  deleteModalVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "deleteModalVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  requestDelete(row) {
    if (row.isNew) {
      this.removeRow(row);
      return;
    }
    this.pendingDeleteRow = row;
    this.deleteModalVisible.set(true);
  }
  cancelDelete() {
    this.pendingDeleteRow = null;
    this.deleteModalVisible.set(false);
  }
  confirmDelete() {
    const row = this.pendingDeleteRow;
    if (!row?.seq)
      return;
    this.api.deleteItem(row.seq).subscribe({
      next: (res) => {
        this.deleteModalVisible.set(false);
        this.pendingDeleteRow = null;
        if (res.success) {
          this.loadItems(this.personalInfo().seq);
        } else {
          this.message.error(res.message || this.i18n.t("evs.viewRegPersonalTarget.msg.deleteFail", "L\u1ED7i khi x\xF3a d\u1EEF li\u1EC7u. Vui l\xF2ng th\u1EED l\u1EA1i."));
        }
      },
      error: () => {
        this.deleteModalVisible.set(false);
        this.pendingDeleteRow = null;
        this.message.error(this.i18n.t("evs.viewRegPersonalTarget.msg.deleteFail", "L\u1ED7i khi x\xF3a d\u1EEF li\u1EC7u. Vui l\xF2ng th\u1EED l\u1EA1i."));
      }
    });
  }
  // ==================== Lưu tạm thời / Thực hiện ====================
  async saveDraft() {
    const t = (key, fallback) => this.i18n.t(key, fallback);
    if (this.totalScore() !== 100) {
      this.message.warning(t("evs.viewRegPersonalTarget.msg.totalNot100", "T\u1ED5ng t\u1EF7 l\u1EC7 (%) ph\u1EA3i b\u1EB1ng 100. Hi\u1EC7n t\u1EA1i: ") + this.totalScore());
      return;
    }
    const dirtyRows = this.rows().filter((r) => r.isNew || r.editing);
    const objectSeq = this.personalInfo()?.seq;
    if (!objectSeq)
      return;
    if (dirtyRows.length === 0) {
      this.loadItems(objectSeq);
      this.message.success(t("evs.viewRegPersonalTarget.msg.saveDraftSuccess", "L\u01B0u t\u1EA1m th\u1EDDi th\xE0nh c\xF4ng!"));
      return;
    }
    for (const row of dirtyRows) {
      const itemName = row.itemName.trim();
      if (!itemName) {
        this.message.warning(t("evs.viewRegPersonalTarget.msg.itemNameRequired", "Vui l\xF2ng nh\u1EADp H\u1EA1ng m\u1EE5c \u0111\xE1nh gi\xE1."));
        return;
      }
      const itemContent = row.itemContent.trim();
      if (!itemContent) {
        this.message.warning(t("evs.viewRegPersonalTarget.msg.itemContentRequired", "Vui l\xF2ng nh\u1EADp N\u1ED9i dung m\u1EE5c ti\xEAu."));
        return;
      }
      if (!(row.itemScore > 0)) {
        this.message.warning(t("evs.viewRegPersonalTarget.msg.itemScoreZero", "T\u1EF7 l\u1EC7 (%) ph\u1EA3i l\u1EDBn h\u01A1n 0."));
        return;
      }
    }
    for (const row of dirtyRows) {
      try {
        const res = await firstValueFrom(this.api.saveItem({
          seq: row.seq ?? void 0,
          evsObjectSeq: objectSeq,
          resumeSeq: this.resumeSeq ?? void 0,
          itemName: row.itemName.trim(),
          itemContent: row.itemContent,
          itemScore: String(row.itemScore),
          flag: "0"
        }));
        if (!res.success) {
          this.message.error(res.message || t("evs.viewRegPersonalTarget.msg.saveFail", "L\u1ED7i khi l\u01B0u d\u1EEF li\u1EC7u."));
          return;
        }
      } catch {
        this.message.error(t("evs.viewRegPersonalTarget.msg.saveFail", "L\u1ED7i khi l\u01B0u d\u1EEF li\u1EC7u. Vui l\xF2ng th\u1EED l\u1EA1i."));
        return;
      }
    }
    this.loadItems(objectSeq);
    this.message.success(t("evs.viewRegPersonalTarget.msg.saveDraftSuccess", "L\u01B0u t\u1EA1m th\u1EDDi th\xE0nh c\xF4ng!"));
  }
  execute() {
    const t = (key, fallback) => this.i18n.t(key, fallback);
    const objectSeq = this.personalInfo()?.seq;
    if (!objectSeq)
      return;
    if (this.rows().some((r) => r.isNew || r.editing)) {
      this.message.warning(t("evs.viewRegPersonalTarget.msg.unsavedRows", "Vui l\xF2ng l\u01B0u t\u1EA1m th\u1EDDi tr\u01B0\u1EDBc khi th\u1EF1c hi\u1EC7n."));
      return;
    }
    if (this.totalScore() !== 100) {
      this.message.warning(t("evs.viewRegPersonalTarget.msg.totalNot100", "T\u1ED5ng t\u1EF7 l\u1EC7 (%) ph\u1EA3i b\u1EB1ng 100. Hi\u1EC7n t\u1EA1i: ") + this.totalScore());
      return;
    }
    if (this.rows().some((r) => r.itemScore <= 0)) {
      this.message.warning(t("evs.viewRegPersonalTarget.msg.itemScoreZero", "T\u1EF7 l\u1EC7 (%) ph\u1EA3i l\u1EDBn h\u01A1n 0."));
      return;
    }
    this.modal.confirm({
      nzTitle: t("common.confirm", "X\xE1c nh\u1EADn"),
      nzContent: t("evs.viewRegPersonalTarget.msg.confirmExecute", "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n th\u1EF1c hi\u1EC7n?"),
      nzOnOk: () => this.doExecute(objectSeq)
    });
  }
  doExecute(objectSeq) {
    const t = (key, fallback) => this.i18n.t(key, fallback);
    this.api.saveItem({ evsObjectSeq: objectSeq, flag: "1" }).subscribe({
      next: (res) => {
        if (res.success) {
          this.message.success(t("evs.viewRegPersonalTarget.msg.executeSuccess", "Th\u1EF1c hi\u1EC7n th\xE0nh c\xF4ng!"));
          this.search();
        } else {
          this.message.error(res.message || t("evs.viewRegPersonalTarget.msg.saveFail", "L\u1ED7i khi th\u1EF1c hi\u1EC7n."));
        }
      },
      error: () => this.message.error(t("evs.viewRegPersonalTarget.msg.saveFail", "L\u1ED7i khi th\u1EF1c hi\u1EC7n. Vui l\xF2ng th\u1EED l\u1EA1i."))
    });
  }
  static \u0275fac = function RegPersonalTargetComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegPersonalTargetComponent)(\u0275\u0275directiveInject(RegPersonalTargetService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService), \u0275\u0275directiveInject(NzModalService), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegPersonalTargetComponent, selectors: [["app-reg-personal-target"]], decls: 23, vars: 30, consts: [["nameView", ""], ["contentView", ""], ["scoreView", ""], [1, "row"], [1, "col-12"], [1, "mb-3"], [1, "row", "g-3", "align-items-end", 3, "ngSubmit"], [1, "col-md-4"], [1, "form-label"], ["name", "resumeSeq", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col-md-2"], ["nz-button", "", "nzType", "primary", "type", "submit", 3, "nzLoading"], [1, "bx", "bx-search"], ["nzType", "warning", "nzShowIcon", "", 3, "nzMessage", 4, "ngIf"], [4, "ngIf"], ["nzOkType", "primary", "nzOkDanger", "", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [3, "nzValue", "nzLabel"], ["nzType", "warning", "nzShowIcon", "", 3, "nzMessage"], [1, "row", "g-3"], [1, "col-md-6"], ["nzBordered", "", "nzSize", "small", 3, "nzColumn", "nzTitle"], [3, "nzTitle"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-2"], [1, "fw-bold"], ["class", "d-flex gap-1", 4, "ngIf"], [1, "table-responsive"], ["nzSize", "small", 1, "rpt-item-table", 3, "nzData", "nzShowPagination"], [1, "text-center", 2, "width", "48px"], [2, "width", "220px"], [1, "text-center", 2, "width", "90px"], [1, "text-center", 2, "width", "80px"], [3, "rpt-edit-row", "rpt-clickable", "click", 4, "ngFor", "ngForOf"], ["colspan", "3", 1, "text-end", "fw-bold", "small"], [1, "text-center", "fw-bold"], [1, "fw-bold", "mb-2", "border-bottom", "pb-1"], [1, "table", "table-bordered", "table-sm", "mb-0"], [1, "table-light", "text-center"], [2, "width", "160px"], [1, "text-muted", "small", "align-middle"], ["rows", "4", "readonly", "", 1, "form-control", "form-control-sm", 2, "resize", "none"], [1, "d-flex", "gap-1"], ["nz-button", "", "nzSize", "small", "type", "button", 3, "click"], ["nz-button", "", "nzType", "primary", "nzSize", "small", "type", "button", 3, "click"], ["colspan", "5", 1, "text-center", "text-muted"], [3, "click"], [1, "text-center"], ["nz-input", "", "maxlength", "200", 3, "ngModel", "ngModelChange", "click", 4, "ngIf", "ngIfElse"], ["nz-input", "", "rows", "3", 3, "ngModel", "ngModelChange", "click", 4, "ngIf", "ngIfElse"], ["nz-input", "", "type", "number", "min", "0", "max", "100", "step", "1", 3, "ngModel", "ngModelChange", "click", 4, "ngIf", "ngIfElse"], ["nz-button", "", "nzSize", "small", "nzShape", "circle", "type", "button", "title", "H\u1EE7y s\u1EEDa", 3, "click", 4, "ngIf"], ["nz-button", "", "nzDanger", "", "nzSize", "small", "nzShape", "circle", "type", "button", "title", "X\xF3a", 3, "click", 4, "ngIf"], ["nz-input", "", "maxlength", "200", 3, "ngModelChange", "click", "ngModel"], ["nz-input", "", "rows", "3", 3, "ngModelChange", "click", "ngModel"], [3, "innerHTML"], ["nz-input", "", "type", "number", "min", "0", "max", "100", "step", "1", 3, "ngModelChange", "click", "ngModel"], ["nz-button", "", "nzSize", "small", "nzShape", "circle", "type", "button", "title", "H\u1EE7y s\u1EEDa", 3, "click"], [1, "bx", "bx-x"], ["nz-button", "", "nzDanger", "", "nzSize", "small", "nzShape", "circle", "type", "button", "title", "X\xF3a", 3, "click"], [1, "bx", "bx-trash"]], template: function RegPersonalTargetComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "nz-card", 5)(3, "form", 6);
      \u0275\u0275listener("ngSubmit", function RegPersonalTargetComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 7)(5, "label", 8);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "nz-select", 9);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function RegPersonalTargetComponent_Template_nz_select_ngModelChange_8_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.resumeSeq, $event) || (ctx.resumeSeq = $event);
        return $event;
      });
      \u0275\u0275template(10, RegPersonalTargetComponent_nz_option_10_Template, 1, 2, "nz-option", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 11)(12, "button", 12);
      \u0275\u0275element(13, "i", 13);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(16, RegPersonalTargetComponent_nz_alert_16_Template, 2, 4, "nz-alert", 14)(17, RegPersonalTargetComponent_ng_container_17_Template, 94, 103, "ng-container", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "nz-modal", 16);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275listener("nzOnCancel", function RegPersonalTargetComponent_Template_nz_modal_nzOnCancel_18_listener() {
        return ctx.cancelDelete();
      })("nzOnOk", function RegPersonalTargetComponent_Template_nz_modal_nzOnOk_18_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(22, RegPersonalTargetComponent_ng_container_22_Template, 3, 4, "ng-container", 17);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 12, "evs.viewRegPersonalTarget.evalName", "T\xEAn \u0111\xE1nh gi\xE1"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.resumeSeq);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(9, 15, "common.select", "Ch\u1ECDn"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.resumeOptions());
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.loading());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(15, 18, "evs.viewRegPersonalTarget.btnSearch", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.noticeVisible());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.noticeVisible() && ctx.personalInfo());
      \u0275\u0275advance();
      \u0275\u0275property("nzVisible", ctx.deleteModalVisible())("nzTitle", \u0275\u0275pipeBind2(19, 21, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkText", \u0275\u0275pipeBind2(20, 24, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(21, 27, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, MinValidator, MaxValidator, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, NzDescriptionsModule, NzDescriptionsComponent, NzDescriptionsItemComponent, TranslatePipe], styles: ["\n.rpt-item-table[_ngcontent-%COMP%]   :where(td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]) {\n  vertical-align: middle;\n}\n.rpt-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.rpt-clickable[_ngcontent-%COMP%]:hover {\n  background-color: #f0f4ff;\n}\n.rpt-edit-row[_ngcontent-%COMP%] {\n  background-color: #fff9e6 !important;\n}\n.rpt-total-ok[_ngcontent-%COMP%] {\n  color: #198754 !important;\n}\n.rpt-total-err[_ngcontent-%COMP%] {\n  color: #dc3545 !important;\n}\n/*# sourceMappingURL=reg-personal-target.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegPersonalTargetComponent, [{
    type: Component,
    args: [{ selector: "app-reg-personal-target", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzSelectModule,
      NzButtonModule,
      NzModalModule,
      NzAlertModule,
      NzDescriptionsModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm -->
    <nz-card class="mb-3">
      <form class="row g-3 align-items-end" (ngSubmit)="search()">
        <div class="col-md-4">
          <label class="form-label">{{ 'evs.viewRegPersonalTarget.evalName' | translate:'T\xEAn \u0111\xE1nh gi\xE1' }}</label>
          <nz-select class="w-100" [(ngModel)]="resumeSeq" name="resumeSeq"
                     [nzPlaceHolder]="'common.select' | translate:'Ch\u1ECDn'">
            <nz-option *ngFor="let r of resumeOptions()" [nzValue]="r.seq" [nzLabel]="r.resumeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-2">
          <button nz-button nzType="primary" type="submit" [nzLoading]="loading()">
            <i class="bx bx-search"></i> {{ 'evs.viewRegPersonalTarget.btnSearch' | translate:'Tra c\u1EE9u' }}
          </button>
        </div>
      </form>
    </nz-card>

    <!-- Kh\xF4ng c\xF3 quy\u1EC1n \u0111\xE1nh gi\xE1 / kh\xF4ng c\xF3 d\u1EEF li\u1EC7u \u0111\u0103ng k\xFD -->
    <nz-alert *ngIf="noticeVisible()" nzType="warning" nzShowIcon
              [nzMessage]="'evs.viewConfirmTarget1.msg.notInEvalPeriod' | translate:'Kh\xF4ng trong kho\u1EA3ng th\u1EDDi gian \u0111\xE1nh gi\xE1 ho\u1EB7c b\u1EA1n kh\xF4ng ph\u1EA3i l\xE0 ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1, xin li\xEAn h\u1EC7 Ph\xF2ng nh\xE2n s\u1EF1!'">
    </nz-alert>

    <ng-container *ngIf="!noticeVisible() && personalInfo() as info">
      <!-- Th\xF4ng tin c\xE1 nh\xE2n -->
      <nz-card class="mb-3">
        <div class="row g-3">
          <div class="col-md-6">
            <nz-descriptions nzBordered nzSize="small" [nzColumn]="1"
                              [nzTitle]="'evs.viewRegPersonalTarget.basicInfo' | translate:'Th\xF4ng tin c\u01A1 b\u1EA3n'">
              <nz-descriptions-item [nzTitle]="'evs.viewRegPersonalTarget.fullName' | translate:'H\u1ECD t\xEAn'">{{ info.localName }}</nz-descriptions-item>
              <nz-descriptions-item [nzTitle]="'evs.viewRegPersonalTarget.position' | translate:'Ch\u1EE9c v\u1EE5'">{{ info.postGradeName }}</nz-descriptions-item>
              <nz-descriptions-item [nzTitle]="'evs.viewRegPersonalTarget.dept' | translate:'Ph\xF2ng ban'">{{ info.deptname }}</nz-descriptions-item>
              <nz-descriptions-item [nzTitle]="'evs.viewRegPersonalTarget.hireDate' | translate:'Ng\xE0y v\xE0o l\xE0m'">{{ info.dateStarted }}</nz-descriptions-item>
            </nz-descriptions>
          </div>
          <div class="col-md-6">
            <nz-descriptions nzBordered nzSize="small" [nzColumn]="1"
                              [nzTitle]="'evs.viewRegPersonalTarget.evalCategory' | translate:'H\u1EA1ng m\u1EE5c \u0111\xE1nh gi\xE1'">
              <nz-descriptions-item [nzTitle]="'evs.viewRegPersonalTarget.evalYear' | translate:'N\u0103m \u0111\xE1nh gi\xE1'">{{ info.evsYear }}</nz-descriptions-item>
              <nz-descriptions-item [nzTitle]="'evs.viewRegPersonalTarget.period' | translate:'Th\u1EDDi gian'">{{ info.evsStartDate }}{{ info.evsEndDate ? '~' + info.evsEndDate : '' }}</nz-descriptions-item>
              <nz-descriptions-item [nzTitle]="'evs.viewRegPersonalTarget.appraiser1' | translate:'Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 l\u1EA7n 1'">{{ info.localName1 }}</nz-descriptions-item>
              <nz-descriptions-item [nzTitle]="'evs.viewRegPersonalTarget.appraiser2' | translate:'Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 l\u1EA7n 2'">{{ info.localName2 }}</nz-descriptions-item>
            </nz-descriptions>
          </div>
        </div>
      </nz-card>

      <!-- Objective Confirm -->
      <nz-card class="mb-3">
        <div class="d-flex align-items-center justify-content-between mb-2">
          <span class="fw-bold">{{ 'evs.viewRegPersonalTarget.objectiveConfirm' | translate:'Objective Confirm' }}</span>
          <div class="d-flex gap-1" *ngIf="isEditable">
            <button nz-button nzSize="small" type="button" (click)="saveDraft()">
              {{ 'evs.viewRegPersonalTarget.btnSaveDraft' | translate:'L\u01B0u t\u1EA1m th\u1EDDi' }}
            </button>
            <button nz-button nzType="primary" nzSize="small" type="button" (click)="execute()">
              {{ 'evs.viewRegPersonalTarget.btnExecute' | translate:'Th\u1EF1c hi\u1EC7n' }}
            </button>
            <button nz-button nzType="primary" nzSize="small" type="button" (click)="addRow()">
              {{ 'evs.viewRegPersonalTarget.btnAddNew' | translate:'Th\xEAm m\u1EDBi(+)' }}
            </button>
          </div>
        </div>

        <div class="table-responsive">
          <nz-table [nzData]="rows()" [nzShowPagination]="false" nzSize="small" class="rpt-item-table">
            <thead>
              <tr>
                <th class="text-center" style="width:48px;">{{ 'evs.viewRegPersonalTarget.col.no' | translate:'No' }}</th>
                <th style="width:220px;">{{ 'evs.viewRegPersonalTarget.col.evalCategory' | translate:'H\u1EA1ng m\u1EE5c \u0111\xE1nh gi\xE1' }}</th>
                <th>{{ 'evs.viewRegPersonalTarget.col.target' | translate:'M\u1EE5c ti\xEAu' }}</th>
                <th class="text-center" style="width:90px;">{{ 'evs.viewRegPersonalTarget.col.ratio' | translate:'T\u1EF7 l\u1EC7(%)' }}</th>
                <th class="text-center" style="width:80px;">{{ 'evs.viewRegPersonalTarget.col.action' | translate:'Thao t\xE1c' }}</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngIf="rows().length === 0">
                <td colspan="5" class="text-center text-muted">0</td>
              </tr>
              <tr *ngFor="let row of rows(); let i = index"
                  [class.rpt-edit-row]="row.editing" [class.rpt-clickable]="isEditable && !row.editing"
                  (click)="rowClick(row)">
                <td class="text-center">{{ i + 1 }}</td>
                <td>
                  <input *ngIf="row.editing; else nameView" nz-input maxlength="200" [(ngModel)]="row.itemName"
                         (click)="$event.stopPropagation()">
                  <ng-template #nameView>{{ row.itemName }}</ng-template>
                </td>
                <td>
                  <textarea *ngIf="row.editing; else contentView" nz-input rows="3" [(ngModel)]="row.itemContent"
                            (click)="$event.stopPropagation()"></textarea>
                  <ng-template #contentView><div [innerHTML]="row.itemContent"></div></ng-template>
                </td>
                <td class="text-center">
                  <input *ngIf="row.editing; else scoreView" nz-input type="number" min="0" max="100" step="1"
                         [(ngModel)]="row.itemScore" (ngModelChange)="onScoreInput()" (click)="$event.stopPropagation()">
                  <ng-template #scoreView>{{ row.itemScore }}</ng-template>
                </td>
                <td class="text-center">
                  <button *ngIf="row.editing && !row.isNew" nz-button nzSize="small" nzShape="circle" type="button"
                          (click)="$event.stopPropagation(); cancelEdit(row)" title="H\u1EE7y s\u1EEDa">
                    <i class="bx bx-x"></i>
                  </button>
                  <button *ngIf="isEditable" nz-button nzDanger nzSize="small" nzShape="circle" type="button"
                          (click)="$event.stopPropagation(); requestDelete(row)" title="X\xF3a">
                    <i class="bx bx-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-end fw-bold small">Total</td>
                <td class="text-center fw-bold" [class.rpt-total-ok]="totalOk" [class.rpt-total-err]="!totalOk">{{ totalScore() }}</td>
                <td></td>
              </tr>
            </tfoot>
          </nz-table>
        </div>
      </nz-card>

      <!-- Ph\u1EA7n 2: \xDD ki\u1EBFn ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 -->
      <nz-card>
        <div class="fw-bold mb-2 border-bottom pb-1">{{ 'evs.viewRegPersonalTarget.part2' | translate:'Ph\u1EA7n 2' }}</div>
        <table class="table table-bordered table-sm mb-0">
          <thead class="table-light text-center">
            <tr>
              <th style="width:160px;"></th>
              <th>{{ 'evs.viewRegPersonalTarget.col.opinion' | translate:'\xDD ki\u1EBFn' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-muted small align-middle">{{ 'evs.viewRegPersonalTarget.appraiser1Comment' | translate:'Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 c\u1EA5p 1' }}</td>
              <td><textarea class="form-control form-control-sm" rows="4" readonly style="resize:none;">{{ info.affirmComment1 }}</textarea></td>
            </tr>
            <tr>
              <td class="text-muted small align-middle">{{ 'evs.viewRegPersonalTarget.appraiser2Comment' | translate:'Ng\u01B0\u1EDDi \u0111\xE1nh gi\xE1 c\u1EA5p 2' }}</td>
              <td><textarea class="form-control form-control-sm" rows="4" readonly style="resize:none;">{{ info.affirmComment2 }}</textarea></td>
            </tr>
          </tbody>
        </table>
      </nz-card>
    </ng-container>
  </div>
</div>

<!-- Modal x\xE1c nh\u1EADn x\xF3a -->
<nz-modal [nzVisible]="deleteModalVisible()" [nzTitle]="'common.confirm' | translate:'X\xE1c nh\u1EADn'"
          (nzOnCancel)="cancelDelete()" (nzOnOk)="confirmDelete()"
          [nzOkText]="'common.confirm' | translate:'X\xE1c nh\u1EADn'" nzOkType="primary" nzOkDanger
          [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'">
  <ng-container *nzModalContent>
    {{ 'evs.viewRegPersonalTarget.msg.confirmDelete' | translate:'B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a m\u1EE5c ti\xEAu n\xE0y kh\xF4ng?' }}
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/reg-personal-target/reg-personal-target.component.css */\n.rpt-item-table :where(td, th) {\n  vertical-align: middle;\n}\n.rpt-clickable {\n  cursor: pointer;\n}\n.rpt-clickable:hover {\n  background-color: #f0f4ff;\n}\n.rpt-edit-row {\n  background-color: #fff9e6 !important;\n}\n.rpt-total-ok {\n  color: #198754 !important;\n}\n.rpt-total-err {\n  color: #dc3545 !important;\n}\n/*# sourceMappingURL=reg-personal-target.component.css.map */\n"] }]
  }], () => [{ type: RegPersonalTargetService }, { type: I18nService }, { type: NzMessageService }, { type: NzModalService }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegPersonalTargetComponent, { className: "RegPersonalTargetComponent", filePath: "src/app/reg-personal-target/reg-personal-target.component.ts", lineNumber: 92 });
})();
export {
  RegPersonalTargetComponent
};
//# debugId=a6879a76-3c92-57b6-9678-b6d4f490c1c1
//# sourceMappingURL=chunk-C3HCN7ED.js.map
