import {
  TabService
} from "./chunk-DUA22MI5.js";
import {
  NzMessageService
} from "./chunk-XWW7CXU6.js";
import {
  NzModalComponent,
  NzModalContentDirective,
  NzModalModule
} from "./chunk-OEYWCHIN.js";
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
  NzSpinComponent,
  NzSpinModule
} from "./chunk-VWYGF7JF.js";
import "./chunk-JSOAL7UF.js";
import {
  NzOptionComponent,
  NzSelectComponent,
  NzSelectModule
} from "./chunk-2QLZSMGV.js";
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
  HttpClient,
  HttpParams,
  Injectable,
  NgForOf,
  NgIf,
  NzButtonComponent,
  NzButtonModule,
  NzTransitionPatchDirective,
  NzWaveDirective,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTW5U2M5.js";

// src/app/view-pa-work-flow/view-pa-work-flow.service.ts
var API_BASE = "/pa/workManagement/api";
var ViewPaWorkFlowService = class _ViewPaWorkFlowService {
  constructor(http) {
    this.http = http;
  }
  http;
  getPaySchedules() {
    return this.http.get(`${API_BASE}/paySchedule`, { withCredentials: true });
  }
  getWorkFlow(payScheduleNo) {
    const params = new HttpParams().set("payScheduleNo", payScheduleNo);
    return this.http.get(`${API_BASE}/workFlow`, { params, withCredentials: true });
  }
  getRecords(payScheduleNo, flowStep) {
    let params = new HttpParams().set("payScheduleNo", payScheduleNo);
    if (flowStep != null)
      params = params.set("flowStep", flowStep);
    return this.http.get(`${API_BASE}/workFlow/records`, { params, withCredentials: true });
  }
  executeTask(payScheduleNo, type) {
    return this.http.post(`${API_BASE}/workFlow/execute`, { payScheduleNo, type }, { withCredentials: true });
  }
  static \u0275fac = function ViewPaWorkFlowService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewPaWorkFlowService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewPaWorkFlowService, factory: _ViewPaWorkFlowService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewPaWorkFlowService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-pa-work-flow/view-pa-work-flow.component.ts
function ViewPaWorkFlowComponent_nz_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 18);
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275property("nzValue", s_r1.payScheduleNo)("nzLabel", s_r1.payDate + (s_r1.salaryDistinName ? " " + s_r1.salaryDistinName : ""));
  }
}
function ViewPaWorkFlowComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "span", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 21);
    \u0275\u0275text(7, "~");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 22);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 23);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 20);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 21);
    \u0275\u0275text(16, "~");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 22);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 23);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 24);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r2 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 8, "pa.workFlow.hrPeriod", "Th\u1EDDi gian"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.toDmy(data_r2.hrStartDate));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.toDmy(data_r2.hrEndDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 11, "pa.workFlow.arPeriod", "Th\u1EDDi gian"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.toDmy(data_r2.arStartDate));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.toDmy(data_r2.arEndDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 14, "pa.workFlow.empCount", "S\u1ED1 l\u01B0\u1EE3ng"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(data_r2.empCount ?? "--");
  }
}
function ViewPaWorkFlowComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26)(2, "div", 27)(3, "div", 28)(4, "div", 29);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 30)(8, "div", 31)(9, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaWorkFlowComponent_div_24_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.chkObjCreate, $event) || (ctx_r2.chkObjCreate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(10, "label", 33);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 34);
    \u0275\u0275listener("click", function ViewPaWorkFlowComponent_div_24_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openRecordsModal("objCreate"));
    });
    \u0275\u0275element(14, "i");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "div", 35);
    \u0275\u0275element(16, "i", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 28)(18, "div", 29);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 30)(22, "div", 31)(23, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaWorkFlowComponent_div_24_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.chkArMonthCal, $event) || (ctx_r2.chkArMonthCal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(24, "label", 38);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 34);
    \u0275\u0275listener("click", function ViewPaWorkFlowComponent_div_24_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openRecordsModal("arMonthCal"));
    });
    \u0275\u0275element(28, "i");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(29, "div", 39);
    \u0275\u0275element(30, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 27)(32, "div", 28)(33, "div", 29);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 30)(37, "div", 31)(38, "input", 41);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaWorkFlowComponent_div_24_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.chkPaCal, $event) || (ctx_r2.chkPaCal = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(39, "label", 42);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "button", 34);
    \u0275\u0275listener("click", function ViewPaWorkFlowComponent_div_24_Template_button_click_42_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openRecordsModal("paCal"));
    });
    \u0275\u0275element(43, "i");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "div", 35);
    \u0275\u0275element(45, "i", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 28)(47, "div", 29);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 30)(51, "div", 44);
    \u0275\u0275listener("click", function ViewPaWorkFlowComponent_div_24_Template_div_click_51_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openInputItemDataTab("2", "pa.workFlow.step.adjust.pay", "\u0110i\u1EC1u ch\u1EC9nh tr\u1EA3 l\u01B0\u01A1ng"));
    });
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 30)(55, "div", 44);
    \u0275\u0275listener("click", function ViewPaWorkFlowComponent_div_24_Template_div_click_55_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openInputItemDataTab("4", "pa.workFlow.step.adjust.deduct", "\u0110i\u1EC1u ch\u1EC9nh kho\u1EA3n tr\u1EEB"));
    });
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "div", 30)(59, "div", 44);
    \u0275\u0275listener("click", function ViewPaWorkFlowComponent_div_24_Template_div_click_59_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openAccountTab());
    });
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(62, "div", 39);
    \u0275\u0275element(63, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 28)(65, "div", 29);
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 30)(69, "div", 44);
    \u0275\u0275listener("click", function ViewPaWorkFlowComponent_div_24_Template_div_click_69_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openRecordsModal("reconcileEmp"));
    });
    \u0275\u0275text(70);
    \u0275\u0275pipe(71, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 30)(73, "div", 44);
    \u0275\u0275listener("click", function ViewPaWorkFlowComponent_div_24_Template_div_click_73_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openRecordsModal("reconcilePay"));
    });
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 30)(77, "div", 44);
    \u0275\u0275listener("click", function ViewPaWorkFlowComponent_div_24_Template_div_click_77_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openRecordsModal("reconcileDecision"));
    });
    \u0275\u0275text(78);
    \u0275\u0275pipe(79, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 30)(81, "div", 44);
    \u0275\u0275listener("click", function ViewPaWorkFlowComponent_div_24_Template_div_click_81_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openRecordsModal("reconcileDetail"));
    });
    \u0275\u0275text(82);
    \u0275\u0275pipe(83, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 30)(85, "div", 44);
    \u0275\u0275listener("click", function ViewPaWorkFlowComponent_div_24_Template_div_click_85_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openRecordsModal("reconcilePersonal"));
    });
    \u0275\u0275text(86);
    \u0275\u0275pipe(87, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "div", 30)(89, "div", 44);
    \u0275\u0275listener("click", function ViewPaWorkFlowComponent_div_24_Template_div_click_89_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openRecordsModal("reconcileItem"));
    });
    \u0275\u0275text(90);
    \u0275\u0275pipe(91, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "div", 30)(93, "div", 44);
    \u0275\u0275listener("click", function ViewPaWorkFlowComponent_div_24_Template_div_click_93_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openRecordsModal("reconcileChange"));
    });
    \u0275\u0275text(94);
    \u0275\u0275pipe(95, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "div", 30)(97, "div", 44);
    \u0275\u0275listener("click", function ViewPaWorkFlowComponent_div_24_Template_div_click_97_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openRecordsModal("reconcileResult"));
    });
    \u0275\u0275text(98);
    \u0275\u0275pipe(99, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(100, "div", 39);
    \u0275\u0275element(101, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "div", 27)(103, "div", 28)(104, "div", 29);
    \u0275\u0275text(105);
    \u0275\u0275pipe(106, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "div", 30)(108, "div", 31)(109, "input", 45);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaWorkFlowComponent_div_24_Template_input_ngModelChange_109_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.chkPaConfirm, $event) || (ctx_r2.chkPaConfirm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(110, "label", 46);
    \u0275\u0275text(111);
    \u0275\u0275pipe(112, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "button", 34);
    \u0275\u0275listener("click", function ViewPaWorkFlowComponent_div_24_Template_button_click_113_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openRecordsModal("confirm"));
    });
    \u0275\u0275element(114, "i");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(115, "div", 35);
    \u0275\u0275element(116, "i", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "div", 28)(118, "div", 29);
    \u0275\u0275text(119);
    \u0275\u0275pipe(120, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "div", 30)(122, "div", 44);
    \u0275\u0275listener("click", function ViewPaWorkFlowComponent_div_24_Template_div_click_122_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openRecordsModal("reportMonthly"));
    });
    \u0275\u0275text(123);
    \u0275\u0275pipe(124, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(125, "div", 30)(126, "div", 44);
    \u0275\u0275listener("click", function ViewPaWorkFlowComponent_div_24_Template_div_click_126_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openRecordsModal("reportYearly"));
    });
    \u0275\u0275text(127);
    \u0275\u0275pipe(128, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(129, "div", 30)(130, "div", 44);
    \u0275\u0275listener("click", function ViewPaWorkFlowComponent_div_24_Template_div_click_130_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openRecordsModal("reportSlip"));
    });
    \u0275\u0275text(131);
    \u0275\u0275pipe(132, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(133, "div", 30)(134, "div", 44);
    \u0275\u0275listener("click", function ViewPaWorkFlowComponent_div_24_Template_div_click_134_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openRecordsModal("reportTotalEmp"));
    });
    \u0275\u0275text(135);
    \u0275\u0275pipe(136, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(137, "div", 30)(138, "div", 44);
    \u0275\u0275listener("click", function ViewPaWorkFlowComponent_div_24_Template_div_click_138_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openRecordsModal("reportTotalDept"));
    });
    \u0275\u0275text(139);
    \u0275\u0275pipe(140, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(141, "div", 30)(142, "div", 44);
    \u0275\u0275listener("click", function ViewPaWorkFlowComponent_div_24_Template_div_click_142_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openRecordsModal("reportTable"));
    });
    \u0275\u0275text(143);
    \u0275\u0275pipe(144, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(145, "div", 39);
    \u0275\u0275element(146, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(147, "div", 28)(148, "div", 29);
    \u0275\u0275text(149);
    \u0275\u0275pipe(150, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "div", 30)(152, "div", 31)(153, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaWorkFlowComponent_div_24_Template_input_ngModelChange_153_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.chkPaOpen, $event) || (ctx_r2.chkPaOpen = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(154, "label", 48);
    \u0275\u0275text(155);
    \u0275\u0275pipe(156, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(157, "button", 34);
    \u0275\u0275listener("click", function ViewPaWorkFlowComponent_div_24_Template_button_click_157_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openRecordsModal("open"));
    });
    \u0275\u0275element(158, "i");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const data_r5 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 45, "pa.workFlow.step.objCreate", "T\u1EA1o \u0111\u1ED1i t\u01B0\u1EE3ng t\xEDnh l\u01B0\u01A1ng"));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.chkObjCreate);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 48, "pa.workFlow.step.objCreate.label", "T\u1EA1o \u0111\u1ED1i t\u01B0\u1EE3ng"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.iconClass(data_r5.objCreateFlag));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 51, "pa.workFlow.step.arMonthCal", "T\u1EA1o d\u1EEF li\u1EC7u ch\u1EA5m c\xF4ng th\xE1ng"));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.chkArMonthCal);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 54, "pa.workFlow.step.arMonthCal.label", "T\u1ED5ng h\u1EE3p ch\u1EA5m c\xF4ng th\xE1ng"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.iconClass(data_r5.arMonthCalFlag));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 57, "pa.workFlow.step.paCal", "T\u1EA1o d\u1EEF li\u1EC7u l\u01B0\u01A1ng th\xE1ng"));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.chkPaCal);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 60, "pa.workFlow.step.paCal.label", "T\xEDnh l\u01B0\u01A1ng"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.iconClass(data_r5.paCalFlag));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 63, "pa.workFlow.step.adjust", "\u0110i\u1EC1u ch\u1EC9nh ti\u1EC1n l\u01B0\u01A1ng"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(53, 66, "pa.workFlow.step.adjust.pay", "\u0110i\u1EC1u ch\u1EC9nh tr\u1EA3 l\u01B0\u01A1ng"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(57, 69, "pa.workFlow.step.adjust.deduct", "\u0110i\u1EC1u ch\u1EC9nh kho\u1EA3n tr\u1EEB"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(61, 72, "pa.workFlow.step.adjust.account", "Th\xF4ng tin t\xE0i kho\u1EA3n"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(67, 75, "pa.workFlow.step.reconcile", "\u0110\u1ED1i chi\u1EBFu l\u01B0\u01A1ng"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(71, 78, "pa.workFlow.step.reconcile.emp", "NV tham gia t\xEDnh l\u01B0\u01A1ng"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(75, 81, "pa.workFlow.step.reconcile.pay", "C\xE1c kho\u1EA3n chi tr\u1EA3"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(79, 84, "pa.workFlow.step.reconcile.decision", "Quy\u1EBFt \u0111\u1ECBnh th\u1EF1c hi\u1EC7n"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(83, 87, "pa.workFlow.step.reconcile.detail", "Chi ti\u1EBFt l\u01B0\u01A1ng"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(87, 90, "pa.workFlow.step.reconcile.personal", "Ki\u1EC3m tra c\xE1 nh\xE2n"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(91, 93, "pa.workFlow.step.reconcile.item", "\u0110\u1ED1i chi\u1EBFu h\u1EA1ng m\u1EE5c"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(95, 96, "pa.workFlow.step.reconcile.change", "Kho\u1EA3n ti\u1EC1n thay \u0111\u1ED5i"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(99, 99, "pa.workFlow.step.reconcile.result", "\u0110\u1ED1i chi\u1EBFu k\u1EBFt qu\u1EA3"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(106, 102, "pa.workFlow.step.confirm", "Kh\xF3a l\u01B0\u01A1ng tr\xE1nh th\u1EF1c hi\u1EC7n l\u1ED7i"));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.chkPaConfirm);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(112, 105, "pa.workFlow.step.confirm.label", "Ch\u1ED1t l\u01B0\u01A1ng"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.iconClass(data_r5.paConfirmFlag));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(120, 108, "pa.workFlow.step.report", "Tra c\u1EE9u b\u1EA3ng l\u01B0\u01A1ng"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(124, 111, "pa.workFlow.step.report.monthly", "L\u01B0\u01A1ng th\xE1ng chi ti\u1EBFt"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(128, 114, "pa.workFlow.step.report.yearly", "L\u01B0\u01A1ng n\u0103m chi ti\u1EBFt"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(132, 117, "pa.workFlow.step.report.slip", "Phi\u1EBFu l\u01B0\u01A1ng"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(136, 120, "pa.workFlow.step.report.totalEmp", "T\u1ED5ng l\u01B0\u01A1ng (c\xE1 nh\xE2n)"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(140, 123, "pa.workFlow.step.report.totalDept", "T\u1ED5ng l\u01B0\u01A1ng (ph\xF2ng ban)"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(144, 126, "pa.workFlow.step.report.table", "B\u1EA3ng l\u01B0\u01A1ng"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(150, 129, "pa.workFlow.step.open", "M\u1EDF l\u01B0\u01A1ng"));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.chkPaOpen);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(156, 132, "pa.workFlow.step.open.label", "M\u1EDF l\u01B0\u01A1ng"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r2.iconClass(data_r5.paOpenFlag));
  }
}
function ViewPaWorkFlowComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50);
    \u0275\u0275element(2, "nz-spin", 51);
    \u0275\u0275elementStart(3, "div", 52);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 53);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 2, "pa.workFlow.msgExecuting", "\u0110ang th\u1EF1c hi\u1EC7n..."));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.executingStepText());
  }
}
function ViewPaWorkFlowComponent_ng_container_28_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 60);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "pa.workFlow.records.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u l\u1ECBch s\u1EED"));
  }
}
function ViewPaWorkFlowComponent_ng_container_28_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 61);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 61);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const rec_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(rec_r6.rowNum || i_r7 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.stepName(rec_r6.flowStep));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(rec_r6.createDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", rec_r6.createdBy, "", rec_r6.createdIp ? " " + rec_r6.createdIp : "");
  }
}
function ViewPaWorkFlowComponent_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "nz-table", 54)(2, "thead")(3, "tr")(4, "th", 55);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 56);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 57);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275template(17, ViewPaWorkFlowComponent_ng_container_28_tr_17_Template, 4, 4, "tr", 58)(18, ViewPaWorkFlowComponent_ng_container_28_tr_18_Template, 9, 5, "tr", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("nzData", ctx_r2.records())("nzLoading", ctx_r2.recordsLoading())("nzShowPagination", false);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 9, "pa.workFlow.records.no", "No."));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 12, "pa.workFlow.records.step", "B\u01B0\u1EDBc x\u1EED l\xFD"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 15, "pa.workFlow.records.datetime", "Th\u1EDDi gian th\u1EF1c hi\u1EC7n"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 18, "pa.workFlow.records.operator", "Ng\u01B0\u1EDDi thao t\xE1c"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r2.recordsLoading() && ctx_r2.records().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.records());
  }
}
var I18N_KEYS = [
  "pa.workFlow.paySchedule",
  "pa.workFlow.selectSchedule",
  "pa.workFlow.search",
  "pa.workFlow.execute",
  "pa.workFlow.hrPeriod",
  "pa.workFlow.arPeriod",
  "pa.workFlow.empCount",
  "pa.workFlow.step.objCreate",
  "pa.workFlow.step.objCreate.label",
  "pa.workFlow.step.arMonthCal",
  "pa.workFlow.step.arMonthCal.label",
  "pa.workFlow.step.paCal",
  "pa.workFlow.step.paCal.label",
  "pa.workFlow.step.adjust",
  "pa.workFlow.step.adjust.pay",
  "pa.workFlow.step.adjust.deduct",
  "pa.workFlow.step.adjust.account",
  "pa.workFlow.step.reconcile",
  "pa.workFlow.step.reconcile.emp",
  "pa.workFlow.step.reconcile.pay",
  "pa.workFlow.step.reconcile.decision",
  "pa.workFlow.step.reconcile.detail",
  "pa.workFlow.step.reconcile.personal",
  "pa.workFlow.step.reconcile.item",
  "pa.workFlow.step.reconcile.change",
  "pa.workFlow.step.reconcile.result",
  "pa.workFlow.step.confirm",
  "pa.workFlow.step.confirm.label",
  "pa.workFlow.step.report",
  "pa.workFlow.step.report.monthly",
  "pa.workFlow.step.report.yearly",
  "pa.workFlow.step.report.slip",
  "pa.workFlow.step.report.totalEmp",
  "pa.workFlow.step.report.totalDept",
  "pa.workFlow.step.report.table",
  "pa.workFlow.step.open",
  "pa.workFlow.step.open.label",
  "pa.workFlow.msgSelectSchedule",
  "pa.workFlow.msgNoData",
  "pa.workFlow.msgSelectStep",
  "pa.workFlow.records.title",
  "pa.workFlow.records.no",
  "pa.workFlow.records.step",
  "pa.workFlow.records.datetime",
  "pa.workFlow.records.operator",
  "pa.workFlow.records.step.1",
  "pa.workFlow.records.step.2",
  "pa.workFlow.records.step.3",
  "pa.workFlow.records.step.4",
  "pa.workFlow.records.step.5",
  "pa.workFlow.records.step.6",
  "pa.workFlow.records.step.7",
  "pa.workFlow.records.noData",
  "pa.workFlow.msgExecuting",
  "pa.workFlow.msgExecuteSuccess",
  "pa.workFlow.msgObjCreateAlreadyExist",
  "pa.workFlow.msgPayrollConfirmed",
  "common.close",
  "common.loadFail"
];
var STEP_KEY_MAP = {
  objCreate: 1,
  arMonthCal: 2,
  paCal: 3,
  confirm: 4,
  open: 5
};
var TASK_STEP_MAP = {
  createPaObj: 1,
  arMonthCal: 2,
  paMonthCal: 3,
  paConfirm: 4,
  paOpen: 5
};
var ViewPaWorkFlowComponent = class _ViewPaWorkFlowComponent {
  constructor(api, i18n, message, tabs) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
    this.tabs = tabs;
  }
  api;
  i18n;
  message;
  tabs;
  schedules = signal(
    [],
    ...ngDevMode ? [{ debugName: "schedules" }] : (
      /* istanbul ignore next */
      []
    )
  );
  currentData = signal(
    null,
    ...ngDevMode ? [{ debugName: "currentData" }] : (
      /* istanbul ignore next */
      []
    )
  );
  searching = signal(
    false,
    ...ngDevMode ? [{ debugName: "searching" }] : (
      /* istanbul ignore next */
      []
    )
  );
  searched = signal(
    false,
    ...ngDevMode ? [{ debugName: "searched" }] : (
      /* istanbul ignore next */
      []
    )
  );
  payScheduleNo = null;
  chkObjCreate = false;
  chkArMonthCal = false;
  chkPaCal = false;
  chkPaConfirm = false;
  chkPaOpen = false;
  executing = signal(
    false,
    ...ngDevMode ? [{ debugName: "executing" }] : (
      /* istanbul ignore next */
      []
    )
  );
  executingStepText = signal(
    "",
    ...ngDevMode ? [{ debugName: "executingStepText" }] : (
      /* istanbul ignore next */
      []
    )
  );
  recordsModalVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "recordsModalVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  recordsLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "recordsLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  records = signal(
    [],
    ...ngDevMode ? [{ debugName: "records" }] : (
      /* istanbul ignore next */
      []
    )
  );
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadSchedules();
  }
  loadSchedules() {
    this.api.getPaySchedules().subscribe({
      next: (list) => {
        this.schedules.set(list ?? []);
        if (list && list.length > 0) {
          this.payScheduleNo = list[0].payScheduleNo;
          this.search();
        }
      },
      error: () => this.message.warning(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"))
    });
  }
  search() {
    if (!this.payScheduleNo) {
      this.message.warning(this.i18n.t("pa.workFlow.msgSelectSchedule", "Vui l\xF2ng ch\u1ECDn k\u1EBF ho\u1EA1ch tr\u1EA3 l\u01B0\u01A1ng!"));
      return;
    }
    this.searching.set(true);
    this.searched.set(true);
    this.api.getWorkFlow(this.payScheduleNo).subscribe({
      next: (data) => {
        this.searching.set(false);
        if (!data) {
          this.message.warning(this.i18n.t("pa.workFlow.msgNoData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u quy tr\xECnh cho k\u1EBF ho\u1EA1ch n\xE0y!"));
          this.currentData.set(null);
          return;
        }
        this.currentData.set(data);
      },
      error: (err) => {
        this.searching.set(false);
        this.message.error(err?.error?.error || this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  iconClass(flag) {
    return flag === 1 ? "bx bxs-book-open" : "bx bxs-book";
  }
  /** 'DD-MM-YYYY' (BE trả về) -> 'dd/MM/yyyy' theo CLAUDE.md. */
  toDmy(dmy) {
    return dmy ? dmy.replace(/-/g, "/") : "--";
  }
  execute() {
    if (!this.payScheduleNo) {
      this.message.warning(this.i18n.t("pa.workFlow.msgSelectSchedule", "Vui l\xF2ng ch\u1ECDn k\u1EBF ho\u1EA1ch tr\u1EA3 l\u01B0\u01A1ng!"));
      return;
    }
    const tasks = [];
    if (this.chkObjCreate)
      tasks.push("createPaObj");
    if (this.chkArMonthCal)
      tasks.push("arMonthCal");
    if (this.chkPaCal)
      tasks.push("paMonthCal");
    if (this.chkPaConfirm)
      tasks.push("paConfirm");
    if (this.chkPaOpen)
      tasks.push("paOpen");
    if (tasks.length === 0) {
      this.message.warning(this.i18n.t("pa.workFlow.msgSelectStep", "Vui l\xF2ng ch\u1ECDn \xEDt nh\u1EA5t m\u1ED9t b\u01B0\u1EDBc c\u1EA7n th\u1EF1c hi\u1EC7n!"));
      return;
    }
    const data = this.currentData();
    if (this.chkObjCreate && data?.objCreateFlag === 1) {
      this.message.warning(this.i18n.t("pa.workFlow.msgObjCreateAlreadyExist", "\u0110\xE3 t\u1EA1o \u0111\u1ED1i t\u01B0\u1EE3ng nh\u1EADn l\u01B0\u01A1ng, kh\xF4ng th\u1EC3 t\u1EA1o l\u1EA1i!"));
      return;
    }
    if ((this.chkArMonthCal || this.chkPaCal) && data?.paConfirmFlag === 1) {
      this.message.warning(this.i18n.t("pa.workFlow.msgPayrollConfirmed", "L\u01B0\u01A1ng th\xE1ng n\xE0y \u0111\xE3 ch\u1ED1t, kh\xF4ng th\u1EC3 t\xEDnh c\xF4ng!"));
      return;
    }
    this.executing.set(true);
    this.executingStepText.set("");
    this.runNextTask(this.payScheduleNo, tasks, 0);
  }
  runNextTask(payScheduleNo, tasks, index) {
    if (index >= tasks.length) {
      this.executing.set(false);
      this.message.success(this.i18n.t("pa.workFlow.msgExecuteSuccess", "T\u1EA5t c\u1EA3 c\xE1c b\u01B0\u1EDBc \u0111\xE3 ho\xE0n th\xE0nh th\xE0nh c\xF4ng!"));
      this.search();
      return;
    }
    const stepName = this.i18n.t(`pa.workFlow.records.step.${TASK_STEP_MAP[tasks[index]]}`, tasks[index]);
    this.executingStepText.set(`(${index + 1}/${tasks.length}) ${stepName}`);
    this.api.executeTask(payScheduleNo, tasks[index]).subscribe({
      next: () => this.runNextTask(payScheduleNo, tasks, index + 1),
      error: (err) => {
        this.executing.set(false);
        this.message.error(err?.error?.error || this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  /** Mở modal "Lịch sử thao tác" - giống vpwfOpenMenu ở bản gốc (đúng cho cả nút "sổ" cạnh checkbox
   *  lẫn các ô đối chiếu lương/tra cứu bảng lương). */
  openRecordsModal(stepKey) {
    if (!this.payScheduleNo) {
      this.message.warning(this.i18n.t("pa.workFlow.msgSelectSchedule", "Vui l\xF2ng ch\u1ECDn k\u1EBF ho\u1EA1ch tr\u1EA3 l\u01B0\u01A1ng!"));
      return;
    }
    this.recordsModalVisible.set(true);
    this.recordsLoading.set(true);
    this.records.set([]);
    this.api.getRecords(this.payScheduleNo, STEP_KEY_MAP[stepKey]).subscribe({
      next: (list) => {
        this.records.set(list ?? []);
        this.recordsLoading.set(false);
      },
      error: (err) => {
        this.recordsLoading.set(false);
        this.message.error(err?.error?.error || this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  closeRecordsModal() {
    this.recordsModalVisible.set(false);
  }
  stepName(flowStep) {
    return this.i18n.t(`pa.workFlow.records.step.${flowStep}`, String(flowStep));
  }
  /** Mở trang "Điều chỉnh trả lương/khoản trừ" (đã migrate sang Angular route /view-pa-input-item-data,
   *  ViewPaInputItemDataComponent) như 1 tab, giữ nguyên tham số itemType trên query string - trang đó
   *  đọc itemType để lọc đúng nhóm hạng mục ở panel trái (đúng hành vi ?itemType=2/4 ở bản gốc). */
  openInputItemDataTab(itemType, titleKey, fallback) {
    this.tabs.openTab(`/view-pa-input-item-data?itemType=${itemType}`, this.i18n.t(titleKey, fallback), "route");
  }
  /** Mở trang "Thông tin tài khoản" (đã migrate sang Angular route /view-pa-emp-account) như 1 tab. */
  openAccountTab() {
    this.tabs.openTab("/view-pa-emp-account", this.i18n.t("pa.workFlow.step.adjust.account", "Th\xF4ng tin t\xE0i kho\u1EA3n"), "route");
  }
  static \u0275fac = function ViewPaWorkFlowComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewPaWorkFlowComponent)(\u0275\u0275directiveInject(ViewPaWorkFlowService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService), \u0275\u0275directiveInject(TabService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewPaWorkFlowComponent, selectors: [["app-view-pa-work-flow"]], decls: 29, vars: 30, consts: [[1, "row"], [1, "col-12"], [1, "row", "align-items-center", "g-3", "mb-3"], [1, "col-md-auto"], [1, "fw-bold", "text-muted"], [1, "col-md-4"], ["name", "vpwfPayScheduleNo", "nzAllowClear", "", "nzShowSearch", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["class", "col-md-auto", 4, "ngIf"], [1, "col-md", "text-end", "d-flex", "gap-2", "justify-content-end"], ["nz-button", "", "nzType", "primary", "nzSize", "small", "type", "button", 3, "click", "nzLoading"], [1, "bx", "bx-search-alt-2"], ["nz-button", "", "nzType", "default", "nzSize", "small", "type", "button", 3, "click", "disabled", "nzLoading"], [1, "bx", "bx-play-circle"], ["class", "bg-light", 4, "ngIf"], ["class", "vpwf-loading-overlay", 4, "ngIf"], ["nzWidth", "700px", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzFooter"], [4, "nzModalContent"], [3, "nzValue", "nzLabel"], [1, "text-muted", "small"], [1, "fw-semibold", "small", "ms-1"], [1, "text-muted", "mx-1"], [1, "fw-semibold", "small"], [1, "text-muted", "small", "ms-3"], [1, "fw-bold", "text-primary", "small", "ms-1"], [1, "bg-light"], [1, "process-container"], [1, "vertical-groups"], [1, "process-group"], [1, "process-header"], [1, "step-item"], [1, "step-btn", "checkbox-step"], ["type", "checkbox", "id", "vpwfChkObjCreate", "name", "vpwfChkObjCreate", 3, "ngModelChange", "ngModel"], ["for", "vpwfChkObjCreate", 1, "mb-0"], ["type", "button", 1, "btn", "btn-link", "btn-sm", "p-0", "ms-1", "text-warning", 3, "click"], [1, "step-arrow-down"], [1, "bx", "bx-down-arrow-alt"], ["type", "checkbox", "id", "vpwfChkArMonthCal", "name", "vpwfChkArMonthCal", 3, "ngModelChange", "ngModel"], ["for", "vpwfChkArMonthCal", 1, "mb-0"], [1, "group-connector"], [1, "bx", "bx-right-arrow-alt", 2, "font-size", "2rem"], ["type", "checkbox", "id", "vpwfChkPaCal", "name", "vpwfChkPaCal", 3, "ngModelChange", "ngModel"], ["for", "vpwfChkPaCal", 1, "mb-0"], [1, "bx", "bx-up-arrow-alt"], ["role", "button", 1, "step-btn", "active-step", 3, "click"], ["type", "checkbox", "id", "vpwfChkPaConfirm", "name", "vpwfChkPaConfirm", 3, "ngModelChange", "ngModel"], ["for", "vpwfChkPaConfirm", 1, "mb-0"], ["type", "checkbox", "id", "vpwfChkPaOpen", "name", "vpwfChkPaOpen", 3, "ngModelChange", "ngModel"], ["for", "vpwfChkPaOpen", 1, "mb-0"], [1, "vpwf-loading-overlay"], [1, "vpwf-loading-box"], ["nzSize", "large"], [1, "fw-bold", "fs-6", "mt-3"], [1, "text-muted", "small", "mt-1"], ["nzSize", "small", 3, "nzData", "nzLoading", "nzShowPagination"], [1, "text-center", 2, "width", "60px"], [1, "text-center", 2, "width", "170px"], [1, "text-center", 2, "width", "200px"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["colspan", "4", 1, "text-center", "text-muted", "py-3"], [1, "text-center"]], template: function ViewPaWorkFlowComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "nz-card")(3, "div", 2)(4, "div", 3)(5, "label", 4);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 5)(9, "nz-select", 6);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewPaWorkFlowComponent_Template_nz_select_ngModelChange_9_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.payScheduleNo, $event) || (ctx.payScheduleNo = $event);
        return $event;
      });
      \u0275\u0275template(11, ViewPaWorkFlowComponent_nz_option_11_Template, 1, 2, "nz-option", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, ViewPaWorkFlowComponent_div_12_Template, 24, 17, "div", 8);
      \u0275\u0275elementStart(13, "div", 9)(14, "button", 10);
      \u0275\u0275listener("click", function ViewPaWorkFlowComponent_Template_button_click_14_listener() {
        return ctx.search();
      });
      \u0275\u0275element(15, "i", 11);
      \u0275\u0275elementStart(16, "span");
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "button", 12);
      \u0275\u0275listener("click", function ViewPaWorkFlowComponent_Template_button_click_19_listener() {
        return ctx.execute();
      });
      \u0275\u0275element(20, "i", 13);
      \u0275\u0275elementStart(21, "span");
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(24, ViewPaWorkFlowComponent_div_24_Template, 159, 135, "div", 14);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(25, ViewPaWorkFlowComponent_div_25_Template, 8, 5, "div", 15);
      \u0275\u0275elementStart(26, "nz-modal", 16);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewPaWorkFlowComponent_Template_nz_modal_nzOnCancel_26_listener() {
        return ctx.closeRecordsModal();
      });
      \u0275\u0275template(28, ViewPaWorkFlowComponent_ng_container_28_Template, 19, 21, "ng-container", 17);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 15, "pa.workFlow.paySchedule", "K\u1EBF ho\u1EA1ch tr\u1EA3 l\u01B0\u01A1ng"));
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.payScheduleNo);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(10, 18, "pa.workFlow.selectSchedule", "-- Ch\u1ECDn k\u1EBF ho\u1EA1ch --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.schedules());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentData());
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.searching());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 21, "pa.workFlow.search", "Tra c\u1EE9u"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.currentData() || ctx.executing())("nzLoading", ctx.executing());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 24, "pa.workFlow.execute", "Th\u1EF1c hi\u1EC7n"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.currentData());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.executing());
      \u0275\u0275advance();
      \u0275\u0275property("nzVisible", ctx.recordsModalVisible())("nzTitle", \u0275\u0275pipeBind2(27, 27, "pa.workFlow.records.title", "L\u1ECBch s\u1EED thao t\xE1c"))("nzFooter", null);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, CheckboxControlValueAccessor, NgControlStatus, NgModel, NzCardModule, NzCardComponent, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzSpinModule, NzSpinComponent, TranslatePipe], styles: ["\n.vpwf-loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.vpwf-loading-box[_ngcontent-%COMP%] {\n  min-width: 260px;\n  padding: 1.5rem;\n  text-align: center;\n  background: #fff;\n  border-radius: 0.5rem;\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);\n}\n/*# sourceMappingURL=view-pa-work-flow.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewPaWorkFlowComponent, [{
    type: Component,
    args: [{ selector: "app-view-pa-work-flow", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzCardModule,
      NzSelectModule,
      NzButtonModule,
      NzTableModule,
      NzModalModule,
      NzSpinModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <nz-card>
      <!-- Header / Controls -->
      <div class="row align-items-center g-3 mb-3">
        <div class="col-md-auto">
          <label class="fw-bold text-muted">{{ 'pa.workFlow.paySchedule' | translate:'K\u1EBF ho\u1EA1ch tr\u1EA3 l\u01B0\u01A1ng' }}</label>
        </div>
        <div class="col-md-4">
          <nz-select class="w-100" [(ngModel)]="payScheduleNo" name="vpwfPayScheduleNo" nzAllowClear nzShowSearch
                     [nzPlaceHolder]="'pa.workFlow.selectSchedule' | translate:'-- Ch\u1ECDn k\u1EBF ho\u1EA1ch --'">
            <nz-option *ngFor="let s of schedules()" [nzValue]="s.payScheduleNo"
                       [nzLabel]="s.payDate + (s.salaryDistinName ? ' ' + s.salaryDistinName : '')"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-auto" *ngIf="currentData() as data">
          <span class="text-muted small">{{ 'pa.workFlow.hrPeriod' | translate:'Th\u1EDDi gian' }}</span>
          <span class="fw-semibold small ms-1">{{ toDmy(data.hrStartDate) }}</span>
          <span class="text-muted mx-1">~</span>
          <span class="fw-semibold small">{{ toDmy(data.hrEndDate) }}</span>
          <span class="text-muted small ms-3">{{ 'pa.workFlow.arPeriod' | translate:'Th\u1EDDi gian' }}</span>
          <span class="fw-semibold small ms-1">{{ toDmy(data.arStartDate) }}</span>
          <span class="text-muted mx-1">~</span>
          <span class="fw-semibold small">{{ toDmy(data.arEndDate) }}</span>
          <span class="text-muted small ms-3">{{ 'pa.workFlow.empCount' | translate:'S\u1ED1 l\u01B0\u1EE3ng' }}</span>
          <span class="fw-bold text-primary small ms-1">{{ data.empCount ?? '--' }}</span>
        </div>
        <div class="col-md text-end d-flex gap-2 justify-content-end">
          <button nz-button nzType="primary" nzSize="small" type="button" [nzLoading]="searching()" (click)="search()">
            <i class="bx bx-search-alt-2"></i>
            <span>{{ 'pa.workFlow.search' | translate:'Tra c\u1EE9u' }}</span>
          </button>
          <button nz-button nzType="default" nzSize="small" type="button" [disabled]="!currentData() || executing()"
                  [nzLoading]="executing()" (click)="execute()">
            <i class="bx bx-play-circle"></i>
            <span>{{ 'pa.workFlow.execute' | translate:'Th\u1EF1c hi\u1EC7n' }}</span>
          </button>
        </div>
      </div>

      <!-- Process Flow -->
      <div class="bg-light" *ngIf="currentData() as data">
        <div class="process-container">

          <!-- C\u1ED9t 1: T\u1EA1o \u0111\u1ED1i t\u01B0\u1EE3ng + T\u1EA1o d\u1EEF li\u1EC7u ch\u1EA5m c\xF4ng -->
          <div class="vertical-groups">
            <div class="process-group">
              <div class="process-header">{{ 'pa.workFlow.step.objCreate' | translate:'T\u1EA1o \u0111\u1ED1i t\u01B0\u1EE3ng t\xEDnh l\u01B0\u01A1ng' }}</div>
              <div class="step-item">
                <div class="step-btn checkbox-step">
                  <input type="checkbox" id="vpwfChkObjCreate" [(ngModel)]="chkObjCreate" name="vpwfChkObjCreate">
                  <label for="vpwfChkObjCreate" class="mb-0">{{ 'pa.workFlow.step.objCreate.label' | translate:'T\u1EA1o \u0111\u1ED1i t\u01B0\u1EE3ng' }}</label>
                  <button class="btn btn-link btn-sm p-0 ms-1 text-warning" type="button" (click)="openRecordsModal('objCreate')">
                    <i [class]="iconClass(data.objCreateFlag)"></i>
                  </button>
                </div>
              </div>
            </div>

            <div class="step-arrow-down"><i class="bx bx-down-arrow-alt"></i></div>

            <div class="process-group">
              <div class="process-header">{{ 'pa.workFlow.step.arMonthCal' | translate:'T\u1EA1o d\u1EEF li\u1EC7u ch\u1EA5m c\xF4ng th\xE1ng' }}</div>
              <div class="step-item">
                <div class="step-btn checkbox-step">
                  <input type="checkbox" id="vpwfChkArMonthCal" [(ngModel)]="chkArMonthCal" name="vpwfChkArMonthCal">
                  <label for="vpwfChkArMonthCal" class="mb-0">{{ 'pa.workFlow.step.arMonthCal.label' | translate:'T\u1ED5ng h\u1EE3p ch\u1EA5m c\xF4ng th\xE1ng' }}</label>
                  <button class="btn btn-link btn-sm p-0 ms-1 text-warning" type="button" (click)="openRecordsModal('arMonthCal')">
                    <i [class]="iconClass(data.arMonthCalFlag)"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="group-connector"><i class="bx bx-right-arrow-alt" style="font-size:2rem;"></i></div>

          <!-- C\u1ED9t 2: T\u1EA1o d\u1EEF li\u1EC7u l\u01B0\u01A1ng + \u0110i\u1EC1u ch\u1EC9nh ti\u1EC1n l\u01B0\u01A1ng -->
          <div class="vertical-groups">
            <div class="process-group">
              <div class="process-header">{{ 'pa.workFlow.step.paCal' | translate:'T\u1EA1o d\u1EEF li\u1EC7u l\u01B0\u01A1ng th\xE1ng' }}</div>
              <div class="step-item">
                <div class="step-btn checkbox-step">
                  <input type="checkbox" id="vpwfChkPaCal" [(ngModel)]="chkPaCal" name="vpwfChkPaCal">
                  <label for="vpwfChkPaCal" class="mb-0">{{ 'pa.workFlow.step.paCal.label' | translate:'T\xEDnh l\u01B0\u01A1ng' }}</label>
                  <button class="btn btn-link btn-sm p-0 ms-1 text-warning" type="button" (click)="openRecordsModal('paCal')">
                    <i [class]="iconClass(data.paCalFlag)"></i>
                  </button>
                </div>
              </div>
            </div>

            <div class="step-arrow-down"><i class="bx bx-up-arrow-alt"></i></div>

            <div class="process-group">
              <div class="process-header">{{ 'pa.workFlow.step.adjust' | translate:'\u0110i\u1EC1u ch\u1EC9nh ti\u1EC1n l\u01B0\u01A1ng' }}</div>
              <div class="step-item">
                <div class="step-btn active-step" role="button"
                     (click)="openInputItemDataTab('2', 'pa.workFlow.step.adjust.pay', '\u0110i\u1EC1u ch\u1EC9nh tr\u1EA3 l\u01B0\u01A1ng')">
                  {{ 'pa.workFlow.step.adjust.pay' | translate:'\u0110i\u1EC1u ch\u1EC9nh tr\u1EA3 l\u01B0\u01A1ng' }}
                </div>
              </div>
              <div class="step-item">
                <div class="step-btn active-step" role="button"
                     (click)="openInputItemDataTab('4', 'pa.workFlow.step.adjust.deduct', '\u0110i\u1EC1u ch\u1EC9nh kho\u1EA3n tr\u1EEB')">
                  {{ 'pa.workFlow.step.adjust.deduct' | translate:'\u0110i\u1EC1u ch\u1EC9nh kho\u1EA3n tr\u1EEB' }}
                </div>
              </div>
              <div class="step-item">
                <div class="step-btn active-step" role="button"
                     (click)="openAccountTab()">
                  {{ 'pa.workFlow.step.adjust.account' | translate:'Th\xF4ng tin t\xE0i kho\u1EA3n' }}
                </div>
              </div>
            </div>
          </div>

          <div class="group-connector"><i class="bx bx-right-arrow-alt" style="font-size:2rem;"></i></div>

          <!-- C\u1ED9t 3: \u0110\u1ED1i chi\u1EBFu l\u01B0\u01A1ng -->
          <div class="process-group">
            <div class="process-header">{{ 'pa.workFlow.step.reconcile' | translate:'\u0110\u1ED1i chi\u1EBFu l\u01B0\u01A1ng' }}</div>
            <div class="step-item">
              <div class="step-btn active-step" role="button" (click)="openRecordsModal('reconcileEmp')">{{ 'pa.workFlow.step.reconcile.emp' | translate:'NV tham gia t\xEDnh l\u01B0\u01A1ng' }}</div>
            </div>
            <div class="step-item">
              <div class="step-btn active-step" role="button" (click)="openRecordsModal('reconcilePay')">{{ 'pa.workFlow.step.reconcile.pay' | translate:'C\xE1c kho\u1EA3n chi tr\u1EA3' }}</div>
            </div>
            <div class="step-item">
              <div class="step-btn active-step" role="button" (click)="openRecordsModal('reconcileDecision')">{{ 'pa.workFlow.step.reconcile.decision' | translate:'Quy\u1EBFt \u0111\u1ECBnh th\u1EF1c hi\u1EC7n' }}</div>
            </div>
            <div class="step-item">
              <div class="step-btn active-step" role="button" (click)="openRecordsModal('reconcileDetail')">{{ 'pa.workFlow.step.reconcile.detail' | translate:'Chi ti\u1EBFt l\u01B0\u01A1ng' }}</div>
            </div>
            <div class="step-item">
              <div class="step-btn active-step" role="button" (click)="openRecordsModal('reconcilePersonal')">{{ 'pa.workFlow.step.reconcile.personal' | translate:'Ki\u1EC3m tra c\xE1 nh\xE2n' }}</div>
            </div>
            <div class="step-item">
              <div class="step-btn active-step" role="button" (click)="openRecordsModal('reconcileItem')">{{ 'pa.workFlow.step.reconcile.item' | translate:'\u0110\u1ED1i chi\u1EBFu h\u1EA1ng m\u1EE5c' }}</div>
            </div>
            <div class="step-item">
              <div class="step-btn active-step" role="button" (click)="openRecordsModal('reconcileChange')">{{ 'pa.workFlow.step.reconcile.change' | translate:'Kho\u1EA3n ti\u1EC1n thay \u0111\u1ED5i' }}</div>
            </div>
            <div class="step-item">
              <div class="step-btn active-step" role="button" (click)="openRecordsModal('reconcileResult')">{{ 'pa.workFlow.step.reconcile.result' | translate:'\u0110\u1ED1i chi\u1EBFu k\u1EBFt qu\u1EA3' }}</div>
            </div>
          </div>

          <div class="group-connector"><i class="bx bx-right-arrow-alt" style="font-size:2rem;"></i></div>

          <!-- C\u1ED9t 4: Kh\xF3a l\u01B0\u01A1ng + Tra c\u1EE9u b\u1EA3ng l\u01B0\u01A1ng -->
          <div class="vertical-groups">
            <div class="process-group">
              <div class="process-header">{{ 'pa.workFlow.step.confirm' | translate:'Kh\xF3a l\u01B0\u01A1ng tr\xE1nh th\u1EF1c hi\u1EC7n l\u1ED7i' }}</div>
              <div class="step-item">
                <div class="step-btn checkbox-step">
                  <input type="checkbox" id="vpwfChkPaConfirm" [(ngModel)]="chkPaConfirm" name="vpwfChkPaConfirm">
                  <label for="vpwfChkPaConfirm" class="mb-0">{{ 'pa.workFlow.step.confirm.label' | translate:'Ch\u1ED1t l\u01B0\u01A1ng' }}</label>
                  <button class="btn btn-link btn-sm p-0 ms-1 text-warning" type="button" (click)="openRecordsModal('confirm')">
                    <i [class]="iconClass(data.paConfirmFlag)"></i>
                  </button>
                </div>
              </div>
            </div>

            <div class="step-arrow-down"><i class="bx bx-down-arrow-alt"></i></div>

            <div class="process-group">
              <div class="process-header">{{ 'pa.workFlow.step.report' | translate:'Tra c\u1EE9u b\u1EA3ng l\u01B0\u01A1ng' }}</div>
              <div class="step-item">
                <div class="step-btn active-step" role="button" (click)="openRecordsModal('reportMonthly')">{{ 'pa.workFlow.step.report.monthly' | translate:'L\u01B0\u01A1ng th\xE1ng chi ti\u1EBFt' }}</div>
              </div>
              <div class="step-item">
                <div class="step-btn active-step" role="button" (click)="openRecordsModal('reportYearly')">{{ 'pa.workFlow.step.report.yearly' | translate:'L\u01B0\u01A1ng n\u0103m chi ti\u1EBFt' }}</div>
              </div>
              <div class="step-item">
                <div class="step-btn active-step" role="button" (click)="openRecordsModal('reportSlip')">{{ 'pa.workFlow.step.report.slip' | translate:'Phi\u1EBFu l\u01B0\u01A1ng' }}</div>
              </div>
              <div class="step-item">
                <div class="step-btn active-step" role="button" (click)="openRecordsModal('reportTotalEmp')">{{ 'pa.workFlow.step.report.totalEmp' | translate:'T\u1ED5ng l\u01B0\u01A1ng (c\xE1 nh\xE2n)' }}</div>
              </div>
              <div class="step-item">
                <div class="step-btn active-step" role="button" (click)="openRecordsModal('reportTotalDept')">{{ 'pa.workFlow.step.report.totalDept' | translate:'T\u1ED5ng l\u01B0\u01A1ng (ph\xF2ng ban)' }}</div>
              </div>
              <div class="step-item">
                <div class="step-btn active-step" role="button" (click)="openRecordsModal('reportTable')">{{ 'pa.workFlow.step.report.table' | translate:'B\u1EA3ng l\u01B0\u01A1ng' }}</div>
              </div>
            </div>
          </div>

          <div class="group-connector"><i class="bx bx-right-arrow-alt" style="font-size:2rem;"></i></div>

          <!-- C\u1ED9t 5: M\u1EDF l\u01B0\u01A1ng -->
          <div class="process-group">
            <div class="process-header">{{ 'pa.workFlow.step.open' | translate:'M\u1EDF l\u01B0\u01A1ng' }}</div>
            <div class="step-item">
              <div class="step-btn checkbox-step">
                <input type="checkbox" id="vpwfChkPaOpen" [(ngModel)]="chkPaOpen" name="vpwfChkPaOpen">
                <label for="vpwfChkPaOpen" class="mb-0">{{ 'pa.workFlow.step.open.label' | translate:'M\u1EDF l\u01B0\u01A1ng' }}</label>
                <button class="btn btn-link btn-sm p-0 ms-1 text-warning" type="button" (click)="openRecordsModal('open')">
                  <i [class]="iconClass(data.paOpenFlag)"></i>
                </button>
              </div>
            </div>
          </div>

        </div><!-- /.process-container -->
      </div>
    </nz-card>
  </div>
</div>

<!-- Loading Overlay -->
<div class="vpwf-loading-overlay" *ngIf="executing()">
  <div class="vpwf-loading-box">
    <nz-spin nzSize="large"></nz-spin>
    <div class="fw-bold fs-6 mt-3">{{ 'pa.workFlow.msgExecuting' | translate:'\u0110ang th\u1EF1c hi\u1EC7n...' }}</div>
    <div class="text-muted small mt-1">{{ executingStepText() }}</div>
  </div>
</div>

<!-- Modal l\u1ECBch s\u1EED thao t\xE1c -->
<nz-modal [nzVisible]="recordsModalVisible()" [nzTitle]="'pa.workFlow.records.title' | translate:'L\u1ECBch s\u1EED thao t\xE1c'"
          nzWidth="700px" (nzOnCancel)="closeRecordsModal()" [nzFooter]="null">
  <ng-container *nzModalContent>
    <nz-table [nzData]="records()" [nzLoading]="recordsLoading()" [nzShowPagination]="false" nzSize="small">
      <thead>
        <tr>
          <th class="text-center" style="width:60px;">{{ 'pa.workFlow.records.no' | translate:'No.' }}</th>
          <th>{{ 'pa.workFlow.records.step' | translate:'B\u01B0\u1EDBc x\u1EED l\xFD' }}</th>
          <th class="text-center" style="width:170px;">{{ 'pa.workFlow.records.datetime' | translate:'Th\u1EDDi gian th\u1EF1c hi\u1EC7n' }}</th>
          <th class="text-center" style="width:200px;">{{ 'pa.workFlow.records.operator' | translate:'Ng\u01B0\u1EDDi thao t\xE1c' }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngIf="!recordsLoading() && records().length === 0">
          <td colspan="4" class="text-center text-muted py-3">{{ 'pa.workFlow.records.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u l\u1ECBch s\u1EED' }}</td>
        </tr>
        <tr *ngFor="let rec of records(); let i = index">
          <td class="text-center">{{ rec.rowNum || (i + 1) }}</td>
          <td>{{ stepName(rec.flowStep) }}</td>
          <td class="text-center">{{ rec.createDate }}</td>
          <td class="text-center">{{ rec.createdBy }}{{ rec.createdIp ? ' ' + rec.createdIp : '' }}</td>
        </tr>
      </tbody>
    </nz-table>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-pa-work-flow/view-pa-work-flow.component.css */\n.vpwf-loading-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.vpwf-loading-box {\n  min-width: 260px;\n  padding: 1.5rem;\n  text-align: center;\n  background: #fff;\n  border-radius: 0.5rem;\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);\n}\n/*# sourceMappingURL=view-pa-work-flow.component.css.map */\n"] }]
  }], () => [{ type: ViewPaWorkFlowService }, { type: I18nService }, { type: NzMessageService }, { type: TabService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewPaWorkFlowComponent, { className: "ViewPaWorkFlowComponent", filePath: "src/app/view-pa-work-flow/view-pa-work-flow.component.ts", lineNumber: 94 });
})();
export {
  ViewPaWorkFlowComponent
};
//# debugId=4bd56026-690d-53a4-92b6-4725a08ff557
//# sourceMappingURL=chunk-TSODPCNE.js.map
