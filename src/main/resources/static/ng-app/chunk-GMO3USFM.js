import {
  ContractInfoListService
} from "./chunk-E4QGA4NS.js";
import {
  NzInputNumberComponent,
  NzInputNumberModule
} from "./chunk-IXCMIWQQ.js";
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
import "./chunk-2GOAB54B.js";
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
  NgForOf,
  NgIf,
  NzButtonComponent,
  NzButtonModule,
  NzTransitionPatchDirective,
  NzWaveDirective,
  formatDate,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
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

// src/app/contract-change-list/contract-change-list.component.ts
var _c0 = () => ({ x: "1400px" });
var _c1 = () => ({ "max-height": "75vh", "overflow-y": "auto" });
function ContractChangeListComponent_nz_alert_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 48);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ContractChangeListComponent_tr_142_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 49);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ContractChangeListComponent_tr_143_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 50);
    \u0275\u0275listener("click", function ContractChangeListComponent_tr_143_Template_tr_click_0_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEdit(row_r4));
    });
    \u0275\u0275elementStart(1, "td", 51);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
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
    \u0275\u0275elementStart(11, "td", 51);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 51);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 52);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 51)(22, "span", 53);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td", 51);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "td", 54);
    \u0275\u0275listener("click", function ContractChangeListComponent_tr_143_Template_td_click_28_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(29, "button", 55);
    \u0275\u0275listener("click", function ContractChangeListComponent_tr_143_Template_button_click_29_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEdit(row_r4));
    });
    \u0275\u0275element(30, "i", 56);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r1.pageIndex - 1) * ctx_r1.pageSize + i_r5 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.contractNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.empId);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.contractName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.contractName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.contractTypeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDisplayDate(row_r4.startContractDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDisplayDate(row_r4.endContractDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.deptNo);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.workPosition || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.workPosition);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatSalary(row_r4.salary));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success", row_r4.activity === "ACTIVE")("bg-secondary", row_r4.activity !== "ACTIVE");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.activity === "ACTIVE" ? \u0275\u0275pipeBind2(24, 18, "hrm.editContract.title.active", "Ho\u1EA1t \u0111\u1ED9ng") : \u0275\u0275pipeBind2(25, 21, "hrm.editContract.title.inactive", "Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatDisplayDateTime(row_r4.createDate));
  }
}
function ContractChangeListComponent_ng_template_144_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r6 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r6, " ");
  }
}
function ContractChangeListComponent_ng_container_150_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61)(1, "label", 6);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 86);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r8 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "common.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", f_r8.localName);
    \u0275\u0275control();
  }
}
function ContractChangeListComponent_ng_container_150_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 59)(2, "h6", 60);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 61)(6, "label", 6);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 62);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 61)(11, "label", 6);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 63);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, ContractChangeListComponent_ng_container_150_div_1_div_15_Template, 5, 5, "div", 64);
    \u0275\u0275elementStart(16, "div", 61)(17, "label", 6);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementStart(20, "span", 65);
    \u0275\u0275text(21, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function ContractChangeListComponent_ng_container_150_div_1_Template_input_ngModelChange_22_listener($event) {
      const f_r8 = \u0275\u0275restoreView(_r7).ngIf;
      \u0275\u0275twoWayBindingSet(f_r8.contractName, $event) || (f_r8.contractName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 61)(24, "label", 6);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "nz-select", 67);
    \u0275\u0275twoWayListener("ngModelChange", function ContractChangeListComponent_ng_container_150_div_1_Template_nz_select_ngModelChange_27_listener($event) {
      const f_r8 = \u0275\u0275restoreView(_r7).ngIf;
      \u0275\u0275twoWayBindingSet(f_r8.contractType, $event) || (f_r8.contractType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(28, "nz-option", 10);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275element(30, "nz-option", 11);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275element(32, "nz-option", 12);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275element(34, "nz-option", 13);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 61)(37, "label", 6);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function ContractChangeListComponent_ng_container_150_div_1_Template_input_ngModelChange_40_listener($event) {
      const f_r8 = \u0275\u0275restoreView(_r7).ngIf;
      \u0275\u0275twoWayBindingSet(f_r8.contractTypeCode, $event) || (f_r8.contractTypeCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 61)(42, "label", 6);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "nz-date-picker", 69);
    \u0275\u0275twoWayListener("ngModelChange", function ContractChangeListComponent_ng_container_150_div_1_Template_nz_date_picker_ngModelChange_45_listener($event) {
      const f_r8 = \u0275\u0275restoreView(_r7).ngIf;
      \u0275\u0275twoWayBindingSet(f_r8.startContractDate, $event) || (f_r8.startContractDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 61)(47, "label", 6);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "nz-date-picker", 70);
    \u0275\u0275twoWayListener("ngModelChange", function ContractChangeListComponent_ng_container_150_div_1_Template_nz_date_picker_ngModelChange_50_listener($event) {
      const f_r8 = \u0275\u0275restoreView(_r7).ngIf;
      \u0275\u0275twoWayBindingSet(f_r8.endContractDate, $event) || (f_r8.endContractDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 61)(52, "label", 6);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "nz-date-picker", 71);
    \u0275\u0275twoWayListener("ngModelChange", function ContractChangeListComponent_ng_container_150_div_1_Template_nz_date_picker_ngModelChange_55_listener($event) {
      const f_r8 = \u0275\u0275restoreView(_r7).ngIf;
      \u0275\u0275twoWayBindingSet(f_r8.changeDate, $event) || (f_r8.changeDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 59)(57, "h6", 60);
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 61)(61, "label", 6);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "input", 72);
    \u0275\u0275twoWayListener("ngModelChange", function ContractChangeListComponent_ng_container_150_div_1_Template_input_ngModelChange_64_listener($event) {
      const f_r8 = \u0275\u0275restoreView(_r7).ngIf;
      \u0275\u0275twoWayBindingSet(f_r8.deptNo, $event) || (f_r8.deptNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 61)(66, "label", 6);
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "input", 73);
    \u0275\u0275twoWayListener("ngModelChange", function ContractChangeListComponent_ng_container_150_div_1_Template_input_ngModelChange_69_listener($event) {
      const f_r8 = \u0275\u0275restoreView(_r7).ngIf;
      \u0275\u0275twoWayBindingSet(f_r8.workPosition, $event) || (f_r8.workPosition = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "div", 61)(71, "label", 6);
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "input", 74);
    \u0275\u0275twoWayListener("ngModelChange", function ContractChangeListComponent_ng_container_150_div_1_Template_input_ngModelChange_74_listener($event) {
      const f_r8 = \u0275\u0275restoreView(_r7).ngIf;
      \u0275\u0275twoWayBindingSet(f_r8.positionNo, $event) || (f_r8.positionNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 61)(76, "label", 6);
    \u0275\u0275text(77);
    \u0275\u0275pipe(78, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "input", 75);
    \u0275\u0275twoWayListener("ngModelChange", function ContractChangeListComponent_ng_container_150_div_1_Template_input_ngModelChange_79_listener($event) {
      const f_r8 = \u0275\u0275restoreView(_r7).ngIf;
      \u0275\u0275twoWayBindingSet(f_r8.postGradeNo, $event) || (f_r8.postGradeNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "div", 61)(81, "label", 6);
    \u0275\u0275text(82);
    \u0275\u0275pipe(83, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "nz-input-number", 76);
    \u0275\u0275twoWayListener("ngModelChange", function ContractChangeListComponent_ng_container_150_div_1_Template_nz_input_number_ngModelChange_84_listener($event) {
      const f_r8 = \u0275\u0275restoreView(_r7).ngIf;
      \u0275\u0275twoWayBindingSet(f_r8.salary, $event) || (f_r8.salary = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "div", 61)(86, "label", 6);
    \u0275\u0275text(87);
    \u0275\u0275pipe(88, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function ContractChangeListComponent_ng_container_150_div_1_Template_input_ngModelChange_89_listener($event) {
      const f_r8 = \u0275\u0275restoreView(_r7).ngIf;
      \u0275\u0275twoWayBindingSet(f_r8.workTime, $event) || (f_r8.workTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "div", 61)(91, "label", 6);
    \u0275\u0275text(92);
    \u0275\u0275pipe(93, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "nz-select", 78);
    \u0275\u0275pipe(95, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ContractChangeListComponent_ng_container_150_div_1_Template_nz_select_ngModelChange_94_listener($event) {
      const f_r8 = \u0275\u0275restoreView(_r7).ngIf;
      \u0275\u0275twoWayBindingSet(f_r8.workHourType, $event) || (f_r8.workHourType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(96, "nz-option", 10);
    \u0275\u0275pipe(97, "translate");
    \u0275\u0275element(98, "nz-option", 11);
    \u0275\u0275pipe(99, "translate");
    \u0275\u0275element(100, "nz-option", 79);
    \u0275\u0275pipe(101, "translate");
    \u0275\u0275element(102, "nz-option", 80);
    \u0275\u0275pipe(103, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "div", 61)(105, "label", 6);
    \u0275\u0275text(106);
    \u0275\u0275pipe(107, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "input", 81);
    \u0275\u0275twoWayListener("ngModelChange", function ContractChangeListComponent_ng_container_150_div_1_Template_input_ngModelChange_108_listener($event) {
      const f_r8 = \u0275\u0275restoreView(_r7).ngIf;
      \u0275\u0275twoWayBindingSet(f_r8.totalPeriod, $event) || (f_r8.totalPeriod = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "div", 61)(110, "label", 6);
    \u0275\u0275text(111);
    \u0275\u0275pipe(112, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "input", 82);
    \u0275\u0275twoWayListener("ngModelChange", function ContractChangeListComponent_ng_container_150_div_1_Template_input_ngModelChange_113_listener($event) {
      const f_r8 = \u0275\u0275restoreView(_r7).ngIf;
      \u0275\u0275twoWayBindingSet(f_r8.totalPeriod08, $event) || (f_r8.totalPeriod08 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "div", 61)(115, "label", 6);
    \u0275\u0275text(116);
    \u0275\u0275pipe(117, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "nz-select", 83);
    \u0275\u0275twoWayListener("ngModelChange", function ContractChangeListComponent_ng_container_150_div_1_Template_nz_select_ngModelChange_118_listener($event) {
      const f_r8 = \u0275\u0275restoreView(_r7).ngIf;
      \u0275\u0275twoWayBindingSet(f_r8.activity, $event) || (f_r8.activity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(119, "nz-option", 20);
    \u0275\u0275pipe(120, "translate");
    \u0275\u0275element(121, "nz-option", 21);
    \u0275\u0275pipe(122, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(123, "div", 2)(124, "h6", 60);
    \u0275\u0275text(125);
    \u0275\u0275pipe(126, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "div", 61)(128, "label", 6);
    \u0275\u0275text(129);
    \u0275\u0275pipe(130, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "textarea", 84);
    \u0275\u0275pipe(132, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ContractChangeListComponent_ng_container_150_div_1_Template_textarea_ngModelChange_131_listener($event) {
      const f_r8 = \u0275\u0275restoreView(_r7).ngIf;
      \u0275\u0275twoWayBindingSet(f_r8.workContent, $event) || (f_r8.workContent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(133, "div", 61)(134, "label", 6);
    \u0275\u0275text(135);
    \u0275\u0275pipe(136, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "textarea", 85);
    \u0275\u0275pipe(138, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ContractChangeListComponent_ng_container_150_div_1_Template_textarea_ngModelChange_137_listener($event) {
      const f_r8 = \u0275\u0275restoreView(_r7).ngIf;
      \u0275\u0275twoWayBindingSet(f_r8.remark, $event) || (f_r8.remark = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r8 = ctx.ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 58, "hrm.editContract.title.basicInfo", "Th\xF4ng tin c\u01A1 b\u1EA3n"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 61, "hrm.editContract.title.contractNo", "S\u1ED1 h\u1EE3p \u0111\u1ED3ng"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", f_r8.contractNo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 64, "hrm.editContract.title.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", f_r8.empId);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r8.localName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(19, 67, "hrm.editContract.title.contractName", "T\xEAn h\u1EE3p \u0111\u1ED3ng"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", f_r8.contractName);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 70, "hrm.editContract.title.contractType", "Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", f_r8.contractType);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(29, 73, "hrm.editContract.title.fullTime", "To\xE0n th\u1EDDi gian"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(31, 76, "hrm.editContract.title.partTime", "B\xE1n th\u1EDDi gian"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(33, 79, "hrm.editContract.title.intern", "Th\u1EF1c t\u1EADp"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(35, 82, "hrm.editContract.title.consultant", "T\u01B0 v\u1EA5n"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 85, "hrm.editContract.title.contractTypeCode", "M\xE3 lo\u1EA1i h\u1EE3p \u0111\u1ED3ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", f_r8.contractTypeCode);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 88, "hrm.editContract.title.startContractDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u h\u1EE3p \u0111\u1ED3ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", f_r8.startContractDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 91, "hrm.editContract.title.endContractDate", "Ng\xE0y k\u1EBFt th\xFAc h\u1EE3p \u0111\u1ED3ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", f_r8.endContractDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 94, "hrm.editContract.title.changeDate", "Ng\xE0y thay \u0111\u1ED5i"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", f_r8.changeDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(59, 97, "hrm.editContract.title.workInfo", "Th\xF4ng tin c\xF4ng vi\u1EC7c"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(63, 100, "hrm.editContract.title.dept", "Ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", f_r8.deptNo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(68, 103, "hrm.editContract.title.workPosition", "V\u1ECB tr\xED l\xE0m vi\u1EC7c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", f_r8.workPosition);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(73, 106, "hrm.editContract.title.positionNo", "M\xE3 ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", f_r8.positionNo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(78, 109, "hrm.editContract.title.postGradeNo", "M\xE3 c\u1EA5p b\u1EADc"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", f_r8.postGradeNo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(83, 112, "hrm.editContract.title.salary", "L\u01B0\u01A1ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", f_r8.salary);
    \u0275\u0275property("nzMin", 0);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(88, 115, "hrm.editContract.title.workTime", "Th\u1EDDi gian l\xE0m vi\u1EC7c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", f_r8.workTime);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(93, 118, "hrm.editContract.title.workHourType", "Lo\u1EA1i gi\u1EDD l\xE0m vi\u1EC7c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", f_r8.workHourType);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(95, 121, "hrm.editContract.title.selectWorkHourType", "Ch\u1ECDn lo\u1EA1i gi\u1EDD l\xE0m vi\u1EC7c"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(97, 124, "hrm.editContract.title.fullTime", "To\xE0n th\u1EDDi gian"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(99, 127, "hrm.editContract.title.partTime", "B\xE1n th\u1EDDi gian"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(101, 130, "hrm.editContract.title.overtime", "T\u0103ng ca"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(103, 133, "hrm.editContract.title.flexible", "Linh ho\u1EA1t"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(107, 136, "hrm.editContract.title.totalPeriod", "T\u1ED5ng th\u1EDDi gian"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", f_r8.totalPeriod);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(112, 139, "hrm.editContract.title.totalPeriod08", "T\u1ED5ng th\u1EDDi gian 08"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", f_r8.totalPeriod08);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(117, 142, "hrm.editContract.title.activity", "Tr\u1EA1ng th\xE1i ho\u1EA1t \u0111\u1ED9ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", f_r8.activity);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(120, 145, "hrm.editContract.title.active", "Ho\u1EA1t \u0111\u1ED9ng"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(122, 148, "hrm.editContract.title.inactive", "Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(126, 151, "hrm.editContract.title.contentAndRemark", "N\u1ED9i dung v\xE0 ghi ch\xFA"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(130, 154, "hrm.editContract.title.workContent", "N\u1ED9i dung c\xF4ng vi\u1EC7c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", f_r8.workContent);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(132, 157, "hrm.editContract.title.workContentPlaceholder", "M\xF4 t\u1EA3 chi ti\u1EBFt n\u1ED9i dung c\xF4ng vi\u1EC7c..."));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(136, 160, "hrm.editContract.title.remark", "Ghi ch\xFA"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", f_r8.remark);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(138, 163, "hrm.editContract.title.remarkPlaceholder", "Ghi ch\xFA th\xEAm v\u1EC1 h\u1EE3p \u0111\u1ED3ng..."));
    \u0275\u0275control();
  }
}
function ContractChangeListComponent_ng_container_150_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ContractChangeListComponent_ng_container_150_div_1_Template, 139, 166, "div", 57);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form);
  }
}
var I18N_KEYS = [
  "hrm.viewContract.title.contractNo",
  "hrm.viewContract.title.contractNoPlaceholder",
  "hrm.viewContract.title.empId",
  "hrm.viewContract.title.empIdPlaceholder",
  "hrm.viewContract.title.contractType",
  "hrm.viewContract.title.dept",
  "hrm.viewContract.title.deptPlaceholder",
  "hrm.viewContract.title.startDateFrom",
  "hrm.viewContract.title.startDateTo",
  "hrm.viewContract.title.endDateFrom",
  "hrm.viewContract.title.endDateTo",
  "hrm.viewContract.title.activity",
  "hrm.viewContract.title.workPosition",
  "hrm.viewContract.title.workPositionPlaceholder",
  "hrm.viewContract.title.salaryFrom",
  "hrm.viewContract.title.salaryFromPlaceholder",
  "hrm.viewContract.title.salaryTo",
  "hrm.viewContract.title.salaryToPlaceholder",
  "hrm.viewContract.title.search",
  "hrm.viewContract.title.clearFilter",
  "hrm.viewContract.title.contractName",
  "hrm.viewContract.title.startDate",
  "hrm.viewContract.title.endDate",
  "hrm.viewContract.title.position",
  "hrm.viewContract.title.salary",
  "hrm.viewContract.title.createDate",
  "hrm.editContract.title.editTitle",
  "hrm.editContract.title.basicInfo",
  "hrm.editContract.title.workInfo",
  "hrm.editContract.title.contentAndRemark",
  "hrm.editContract.title.contractNo",
  "hrm.editContract.title.empId",
  "hrm.editContract.title.contractName",
  "hrm.editContract.title.contractType",
  "hrm.editContract.title.contractTypeCode",
  "hrm.editContract.title.startContractDate",
  "hrm.editContract.title.endContractDate",
  "hrm.editContract.title.changeDate",
  "hrm.editContract.title.dept",
  "hrm.editContract.title.workPosition",
  "hrm.editContract.title.positionNo",
  "hrm.editContract.title.postGradeNo",
  "hrm.editContract.title.salary",
  "hrm.editContract.title.workTime",
  "hrm.editContract.title.workHourType",
  "hrm.editContract.title.selectWorkHourType",
  "hrm.editContract.title.totalPeriod",
  "hrm.editContract.title.totalPeriod08",
  "hrm.editContract.title.activity",
  "hrm.editContract.title.workContent",
  "hrm.editContract.title.workContentPlaceholder",
  "hrm.editContract.title.remark",
  "hrm.editContract.title.remarkPlaceholder",
  "hrm.editContract.title.fullTime",
  "hrm.editContract.title.partTime",
  "hrm.editContract.title.intern",
  "hrm.editContract.title.consultant",
  "hrm.editContract.title.overtime",
  "hrm.editContract.title.flexible",
  "hrm.editContract.title.active",
  "hrm.editContract.title.inactive",
  "hrm.editContract.title.cancel",
  "hrm.editContract.title.saveChanges",
  "hrm.viewContract.title.validateContractName",
  "common.selectAll",
  "common.stt",
  "common.action",
  "common.export",
  "common.loadFail",
  "common.saveFail",
  "common.noData",
  "common.totalRows",
  "common.empName",
  "alert.message.update_success"
];
var PAGE_SIZE_OPTIONS = [10, 25, 50, 100];
var ContractChangeListComponent = class _ContractChangeListComponent {
  constructor(api, i18n, message) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
  }
  api;
  i18n;
  message;
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
  recordsFiltered = signal(
    0,
    ...ngDevMode ? [{ debugName: "recordsFiltered" }] : (
      /* istanbul ignore next */
      []
    )
  );
  exporting = signal(
    false,
    ...ngDevMode ? [{ debugName: "exporting" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pageIndex = 1;
  pageSize = 25;
  contractNo = "";
  empId = "";
  contractType = null;
  department = "";
  startDateFrom = null;
  startDateTo = null;
  endDateFrom = null;
  endDateTo = null;
  activity = null;
  workPosition = "";
  salaryFrom = null;
  salaryTo = null;
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
  form = null;
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.search();
  }
  search() {
    this.pageIndex = 1;
    this.loadPage();
  }
  clearSearch() {
    this.contractNo = "";
    this.empId = "";
    this.contractType = null;
    this.department = "";
    this.startDateFrom = null;
    this.startDateTo = null;
    this.endDateFrom = null;
    this.endDateTo = null;
    this.activity = null;
    this.workPosition = "";
    this.salaryFrom = null;
    this.salaryTo = null;
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
  formatDisplayDate(dateStr) {
    if (!dateStr)
      return "";
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? dateStr : formatDate(d, "dd/MM/yyyy", "vi");
  }
  formatDisplayDateTime(dateStr) {
    if (!dateStr)
      return "";
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? dateStr : formatDate(d, "dd/MM/yyyy HH:mm", "vi");
  }
  formatSalary(salary) {
    return salary != null ? new Intl.NumberFormat("vi-VN").format(salary) + " VN\u0110" : "";
  }
  // ==================== Modal Chỉnh sửa ====================
  openEdit(row) {
    this.form = {
      contractNo: row.contractNo,
      personId: row.personId,
      empId: row.empId || "",
      localName: row.localName || "",
      contractName: row.contractName || "",
      contractType: row.contractType || "FULL_TIME",
      contractTypeCode: row.contractTypeCode || "",
      startContractDate: this.toDate(row.startContractDate),
      endContractDate: this.toDate(row.endContractDate),
      changeDate: this.toDate(row.changeDate),
      deptNo: row.deptNo || "",
      workPosition: row.workPosition || "",
      positionNo: row.positionNo || "",
      postGradeNo: row.postGradeNo || "",
      salary: row.salary,
      workTime: row.workTime || "",
      workHourType: row.workHourType || "",
      totalPeriod: row.totalPeriod || "",
      totalPeriod08: row.totalPeriod08 || "",
      activity: row.activity || "ACTIVE",
      workContent: row.workContent || "",
      remark: row.remark || ""
    };
    this.modalVisible.set(true);
  }
  closeModal() {
    this.modalVisible.set(false);
  }
  saveForm() {
    if (!this.form)
      return;
    if (!this.form.contractName.trim()) {
      this.message.error(this.i18n.t("hrm.viewContract.title.validateContractName", "Vui l\xF2ng nh\u1EADp t\xEAn h\u1EE3p \u0111\u1ED3ng!"));
      return;
    }
    const f = this.form;
    const payload = {
      contractNo: f.contractNo,
      personId: f.personId,
      contractTypeCode: f.contractTypeCode,
      contractType: f.contractType,
      startContractDate: this.formatYmd(f.startContractDate),
      endContractDate: this.formatYmd(f.endContractDate),
      changeDate: this.formatYmd(f.changeDate),
      deptNo: f.deptNo,
      workPosition: f.workPosition,
      positionNo: f.positionNo,
      postGradeNo: f.postGradeNo,
      salary: f.salary,
      workTime: f.workTime,
      workHourType: f.workHourType,
      totalPeriod: f.totalPeriod,
      totalPeriod08: f.totalPeriod08,
      activity: f.activity,
      workContent: f.workContent,
      remark: f.remark
    };
    this.saving.set(true);
    this.api.updateContract(payload).subscribe({
      next: () => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.message.success(this.i18n.t("alert.message.update_success", "C\u1EADp nh\u1EADt th\xE0nh c\xF4ng!"));
        this.loadPage();
      },
      error: () => {
        this.saving.set(false);
        this.message.error(this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  // ==================== Xuất Excel ====================
  exportExcel() {
    this.exporting.set(true);
    const payload = this.buildRequestPayload(0, Math.max(this.recordsFiltered(), 1));
    this.api.getPageList(payload).subscribe({
      next: (res) => {
        this.exporting.set(false);
        this.downloadXlsx(res.data ?? []);
      },
      error: () => {
        this.exporting.set(false);
        this.message.error(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  downloadXlsx(list) {
    const headers = [
      this.i18n.t("common.stt", "STT"),
      this.i18n.t("hrm.viewContract.title.contractNo", "S\u1ED1 h\u1EE3p \u0111\u1ED3ng"),
      this.i18n.t("hrm.viewContract.title.empId", "M\xE3 nh\xE2n vi\xEAn"),
      this.i18n.t("hrm.viewContract.title.contractName", "T\xEAn h\u1EE3p \u0111\u1ED3ng"),
      this.i18n.t("hrm.viewContract.title.contractType", "Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng"),
      this.i18n.t("hrm.viewContract.title.startDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u"),
      this.i18n.t("hrm.viewContract.title.endDate", "Ng\xE0y k\u1EBFt th\xFAc"),
      this.i18n.t("hrm.viewContract.title.dept", "Ph\xF2ng ban"),
      this.i18n.t("hrm.viewContract.title.position", "V\u1ECB tr\xED"),
      this.i18n.t("hrm.viewContract.title.salary", "L\u01B0\u01A1ng"),
      this.i18n.t("hrm.viewContract.title.activity", "Ho\u1EA1t \u0111\u1ED9ng"),
      this.i18n.t("hrm.viewContract.title.createDate", "Ng\xE0y t\u1EA1o")
    ];
    const dataRows = list.map((r, i) => [
      i + 1,
      r.contractNo,
      r.empId,
      r.contractName,
      r.contractTypeName,
      this.formatDisplayDate(r.startContractDate),
      this.formatDisplayDate(r.endContractDate),
      r.deptNo,
      r.workPosition,
      r.salary,
      r.activity === "ACTIVE" ? this.i18n.t("hrm.editContract.title.active", "Ho\u1EA1t \u0111\u1ED9ng") : this.i18n.t("hrm.editContract.title.inactive", "Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng"),
      this.formatDisplayDateTime(r.createDate)
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "ChinhSuaHopDong");
    writeFileSync(workbook, "danh_sach_chinh_sua_hop_dong.xlsx");
  }
  // ==================== Helpers ====================
  loadPage() {
    this.loading.set(true);
    this.errorMessage.set(null);
    const payload = this.buildRequestPayload((this.pageIndex - 1) * this.pageSize, this.pageSize);
    this.api.getPageList(payload).subscribe({
      next: (res) => {
        if (res.error) {
          this.errorMessage.set(res.error);
          this.rows.set([]);
          this.recordsFiltered.set(0);
        } else {
          this.rows.set(res.data ?? []);
          this.recordsFiltered.set(res.recordsFiltered ?? 0);
        }
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.rows.set([]);
        this.recordsFiltered.set(0);
        this.loading.set(false);
      }
    });
  }
  buildRequestPayload(start, length) {
    return {
      draw: this.pageIndex,
      start,
      length,
      searchParams: {
        contractNo: this.contractNo,
        empId: this.empId,
        contractType: this.contractType ?? "",
        department: this.department,
        startDateFrom: this.formatYmd(this.startDateFrom),
        startDateTo: this.formatYmd(this.startDateTo),
        endDateFrom: this.formatYmd(this.endDateFrom),
        endDateTo: this.formatYmd(this.endDateTo),
        activity: this.activity ?? "",
        workPosition: this.workPosition,
        salaryFrom: this.salaryFrom != null ? String(this.salaryFrom) : "",
        salaryTo: this.salaryTo != null ? String(this.salaryTo) : ""
      }
    };
  }
  toDate(dateStr) {
    if (!dateStr)
      return null;
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? null : d;
  }
  formatYmd(d) {
    return d ? formatDate(d, "yyyy-MM-dd", "vi") : "";
  }
  static \u0275fac = function ContractChangeListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContractChangeListComponent)(\u0275\u0275directiveInject(ContractInfoListService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContractChangeListComponent, selectors: [["app-contract-change-list"]], decls: 151, vars: 212, consts: [["cclTotalTpl", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-2"], [1, "form-label"], ["nz-input", "", "name", "cclContractNo", 3, "ngModelChange", "ngModel", "placeholder"], ["nz-input", "", "name", "cclEmpId", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "cclContractType", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["nzValue", "FULL_TIME", 3, "nzLabel"], ["nzValue", "PART_TIME", 3, "nzLabel"], ["nzValue", "INTERN", 3, "nzLabel"], ["nzValue", "CONSULTANT", 3, "nzLabel"], ["nz-input", "", "name", "cclDepartment", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "cclStartDateFrom", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "cclStartDateTo", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "cclEndDateFrom", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "cclEndDateTo", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "cclActivity", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["nzValue", "ACTIVE", 3, "nzLabel"], ["nzValue", "INACTIVE", 3, "nzLabel"], ["nz-input", "", "name", "cclWorkPosition", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "cclSalaryFrom", 1, "w-100", 3, "ngModelChange", "ngModel", "nzMin", "nzPlaceHolder"], ["name", "cclSalaryTo", 1, "w-100", 3, "ngModelChange", "ngModel", "nzMin", "nzPlaceHolder"], [1, "col-12", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], ["nz-button", "", "nzType", "default", "type", "button", 1, "ccl-btn-export", 3, "click", "nzLoading"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], ["nzShowSizeChanger", "", 1, "table-nowrap", 3, "nzPageIndexChange", "nzPageSizeChange", "nzData", "nzFrontPagination", "nzLoading", "nzTotal", "nzPageIndex", "nzPageSize", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "130px"], ["nzWidth", "110px"], ["nzWidth", "180px"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "120px"], ["nzWidth", "140px"], ["nzWidth", "130px", 1, "text-end"], ["nzWidth", "150px", 1, "text-center"], ["nzWidth", "90px", 1, "text-center"], [4, "ngIf"], ["class", "ccl-row-clickable", 3, "click", 4, "ngFor", "ngForOf"], ["nzWidth", "900px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzBodyStyle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "13", 1, "text-center", "text-muted"], [1, "ccl-row-clickable", 3, "click"], [1, "text-center"], [1, "text-end"], [1, "badge"], [1, "text-center", 3, "click"], ["nz-button", "", "nzType", "text", "nzSize", "small", "title", "Ch\u1EC9nh s\u1EEDa", 3, "click"], [1, "bx", "bx-edit", "text-warning"], ["class", "row g-3", 4, "ngIf"], [1, "row", "g-3"], [1, "col-md-6"], [1, "text-primary", "mb-2"], [1, "mb-2"], ["nz-input", "", "name", "cclFormContractNo", "readonly", "", 3, "ngModel"], ["nz-input", "", "name", "cclFormEmpId", "readonly", "", 3, "ngModel"], ["class", "mb-2", 4, "ngIf"], [1, "text-danger"], ["nz-input", "", "name", "cclFormContractName", 3, "ngModelChange", "ngModel"], ["name", "cclFormContractType", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "cclFormContractTypeCode", 3, "ngModelChange", "ngModel"], ["name", "cclFormStartContractDate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "cclFormEndContractDate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "cclFormChangeDate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "cclFormDeptNo", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "cclFormWorkPosition", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "cclFormPositionNo", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "cclFormPostGradeNo", 3, "ngModelChange", "ngModel"], ["name", "cclFormSalary", 1, "w-100", 3, "ngModelChange", "ngModel", "nzMin"], ["nz-input", "", "name", "cclFormWorkTime", 3, "ngModelChange", "ngModel"], ["name", "cclFormWorkHourType", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["nzValue", "OVERTIME", 3, "nzLabel"], ["nzValue", "FLEXIBLE", 3, "nzLabel"], ["nz-input", "", "name", "cclFormTotalPeriod", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "cclFormTotalPeriod08", 3, "ngModelChange", "ngModel"], ["name", "cclFormActivity", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "cclFormWorkContent", "rows", "3", 3, "ngModelChange", "ngModel", "placeholder"], ["nz-input", "", "name", "cclFormRemark", "rows", "2", 3, "ngModelChange", "ngModel", "placeholder"], ["nz-input", "", "name", "cclFormLocalName", "readonly", "", 3, "ngModel"]], template: function ContractChangeListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "nz-card", 3)(3, "form", 4);
      \u0275\u0275listener("ngSubmit", function ContractChangeListComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 5)(5, "label", 6);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 7);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ContractChangeListComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.contractNo, $event) || (ctx.contractNo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 5)(11, "label", 6);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "input", 8);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ContractChangeListComponent_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.empId, $event) || (ctx.empId = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 5)(17, "label", 6);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "nz-select", 9);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ContractChangeListComponent_Template_nz_select_ngModelChange_20_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.contractType, $event) || (ctx.contractType = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275element(22, "nz-option", 10);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275element(24, "nz-option", 11);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275element(26, "nz-option", 12);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275element(28, "nz-option", 13);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 5)(31, "label", 6);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "input", 14);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ContractChangeListComponent_Template_input_ngModelChange_34_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.department, $event) || (ctx.department = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 5)(37, "label", 6);
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "nz-date-picker", 15);
      \u0275\u0275twoWayListener("ngModelChange", function ContractChangeListComponent_Template_nz_date_picker_ngModelChange_40_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.startDateFrom, $event) || (ctx.startDateFrom = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 5)(42, "label", 6);
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "nz-date-picker", 16);
      \u0275\u0275twoWayListener("ngModelChange", function ContractChangeListComponent_Template_nz_date_picker_ngModelChange_45_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.startDateTo, $event) || (ctx.startDateTo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 5)(47, "label", 6);
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "nz-date-picker", 17);
      \u0275\u0275twoWayListener("ngModelChange", function ContractChangeListComponent_Template_nz_date_picker_ngModelChange_50_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.endDateFrom, $event) || (ctx.endDateFrom = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 5)(52, "label", 6);
      \u0275\u0275text(53);
      \u0275\u0275pipe(54, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "nz-date-picker", 18);
      \u0275\u0275twoWayListener("ngModelChange", function ContractChangeListComponent_Template_nz_date_picker_ngModelChange_55_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.endDateTo, $event) || (ctx.endDateTo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 5)(57, "label", 6);
      \u0275\u0275text(58);
      \u0275\u0275pipe(59, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "nz-select", 19);
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ContractChangeListComponent_Template_nz_select_ngModelChange_60_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.activity, $event) || (ctx.activity = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275element(62, "nz-option", 20);
      \u0275\u0275pipe(63, "translate");
      \u0275\u0275element(64, "nz-option", 21);
      \u0275\u0275pipe(65, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 5)(67, "label", 6);
      \u0275\u0275text(68);
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "input", 22);
      \u0275\u0275pipe(71, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ContractChangeListComponent_Template_input_ngModelChange_70_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.workPosition, $event) || (ctx.workPosition = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div", 5)(73, "label", 6);
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "nz-input-number", 23);
      \u0275\u0275pipe(77, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ContractChangeListComponent_Template_nz_input_number_ngModelChange_76_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.salaryFrom, $event) || (ctx.salaryFrom = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "div", 5)(79, "label", 6);
      \u0275\u0275text(80);
      \u0275\u0275pipe(81, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "nz-input-number", 24);
      \u0275\u0275pipe(83, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ContractChangeListComponent_Template_nz_input_number_ngModelChange_82_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.salaryTo, $event) || (ctx.salaryTo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 25)(85, "button", 26);
      \u0275\u0275element(86, "i", 27);
      \u0275\u0275text(87);
      \u0275\u0275pipe(88, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "button", 28);
      \u0275\u0275listener("click", function ContractChangeListComponent_Template_button_click_89_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(90, "i", 29);
      \u0275\u0275text(91);
      \u0275\u0275pipe(92, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "button", 30);
      \u0275\u0275listener("click", function ContractChangeListComponent_Template_button_click_93_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(94, "i", 31);
      \u0275\u0275text(95);
      \u0275\u0275pipe(96, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(97, "nz-card");
      \u0275\u0275template(98, ContractChangeListComponent_nz_alert_98_Template, 1, 1, "nz-alert", 32);
      \u0275\u0275elementStart(99, "nz-table", 33);
      \u0275\u0275listener("nzPageIndexChange", function ContractChangeListComponent_Template_nz_table_nzPageIndexChange_99_listener($event) {
        return ctx.onPageIndexChange($event);
      })("nzPageSizeChange", function ContractChangeListComponent_Template_nz_table_nzPageSizeChange_99_listener($event) {
        return ctx.onPageSizeChange($event);
      });
      \u0275\u0275elementStart(100, "thead")(101, "tr")(102, "th", 34);
      \u0275\u0275text(103);
      \u0275\u0275pipe(104, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "th", 35);
      \u0275\u0275text(106);
      \u0275\u0275pipe(107, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "th", 36);
      \u0275\u0275text(109);
      \u0275\u0275pipe(110, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "th", 37);
      \u0275\u0275text(112);
      \u0275\u0275pipe(113, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "th", 35);
      \u0275\u0275text(115);
      \u0275\u0275pipe(116, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "th", 38);
      \u0275\u0275text(118);
      \u0275\u0275pipe(119, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "th", 38);
      \u0275\u0275text(121);
      \u0275\u0275pipe(122, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "th", 39);
      \u0275\u0275text(124);
      \u0275\u0275pipe(125, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "th", 40);
      \u0275\u0275text(127);
      \u0275\u0275pipe(128, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "th", 41);
      \u0275\u0275text(130);
      \u0275\u0275pipe(131, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(132, "th", 38);
      \u0275\u0275text(133);
      \u0275\u0275pipe(134, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "th", 42);
      \u0275\u0275text(136);
      \u0275\u0275pipe(137, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "th", 43);
      \u0275\u0275text(139);
      \u0275\u0275pipe(140, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(141, "tbody");
      \u0275\u0275template(142, ContractChangeListComponent_tr_142_Template, 4, 4, "tr", 44)(143, ContractChangeListComponent_tr_143_Template, 31, 24, "tr", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275template(144, ContractChangeListComponent_ng_template_144_Template, 2, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(146, "nz-modal", 46);
      \u0275\u0275pipe(147, "translate");
      \u0275\u0275pipe(148, "translate");
      \u0275\u0275pipe(149, "translate");
      \u0275\u0275listener("nzOnCancel", function ContractChangeListComponent_Template_nz_modal_nzOnCancel_146_listener() {
        return ctx.closeModal();
      })("nzOnOk", function ContractChangeListComponent_Template_nz_modal_nzOnOk_146_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(150, ContractChangeListComponent_ng_container_150_Template, 2, 1, "ng-container", 47);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const cclTotalTpl_r9 = \u0275\u0275reference(145);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 75, "hrm.viewContract.title.contractNo", "S\u1ED1 h\u1EE3p \u0111\u1ED3ng"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.contractNo);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 78, "hrm.viewContract.title.contractNoPlaceholder", "Nh\u1EADp s\u1ED1 h\u1EE3p \u0111\u1ED3ng"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 81, "hrm.viewContract.title.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.empId);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(15, 84, "hrm.viewContract.title.empIdPlaceholder", "Nh\u1EADp m\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 87, "hrm.viewContract.title.contractType", "Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.contractType);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(21, 90, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(23, 93, "hrm.editContract.title.fullTime", "To\xE0n th\u1EDDi gian"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(25, 96, "hrm.editContract.title.partTime", "B\xE1n th\u1EDDi gian"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(27, 99, "hrm.editContract.title.intern", "Th\u1EF1c t\u1EADp"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(29, 102, "hrm.editContract.title.consultant", "T\u01B0 v\u1EA5n"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 105, "hrm.viewContract.title.dept", "Ph\xF2ng ban"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.department);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(35, 108, "hrm.viewContract.title.deptPlaceholder", "Nh\u1EADp ph\xF2ng ban"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 111, "hrm.viewContract.title.startDateFrom", "Ng\xE0y b\u1EAFt \u0111\u1EA7u t\u1EEB"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.startDateFrom);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 114, "hrm.viewContract.title.startDateTo", "Ng\xE0y b\u1EAFt \u0111\u1EA7u \u0111\u1EBFn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.startDateTo);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 117, "hrm.viewContract.title.endDateFrom", "Ng\xE0y k\u1EBFt th\xFAc t\u1EEB"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.endDateFrom);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 120, "hrm.viewContract.title.endDateTo", "Ng\xE0y k\u1EBFt th\xFAc \u0111\u1EBFn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.endDateTo);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(59, 123, "hrm.viewContract.title.activity", "Ho\u1EA1t \u0111\u1ED9ng"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.activity);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(61, 126, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(63, 129, "hrm.editContract.title.active", "Ho\u1EA1t \u0111\u1ED9ng"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(65, 132, "hrm.editContract.title.inactive", "Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 135, "hrm.viewContract.title.workPosition", "V\u1ECB tr\xED l\xE0m vi\u1EC7c"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.workPosition);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(71, 138, "hrm.viewContract.title.workPositionPlaceholder", "Nh\u1EADp v\u1ECB tr\xED l\xE0m vi\u1EC7c"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(75, 141, "hrm.viewContract.title.salaryFrom", "L\u01B0\u01A1ng t\u1EEB"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.salaryFrom);
      \u0275\u0275property("nzMin", 0)("nzPlaceHolder", \u0275\u0275pipeBind2(77, 144, "hrm.viewContract.title.salaryFromPlaceholder", "Nh\u1EADp l\u01B0\u01A1ng t\u1ED1i thi\u1EC3u"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(81, 147, "hrm.viewContract.title.salaryTo", "L\u01B0\u01A1ng \u0111\u1EBFn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.salaryTo);
      \u0275\u0275property("nzMin", 0)("nzPlaceHolder", \u0275\u0275pipeBind2(83, 150, "hrm.viewContract.title.salaryToPlaceholder", "Nh\u1EADp l\u01B0\u01A1ng t\u1ED1i \u0111a"));
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(88, 153, "hrm.viewContract.title.search", "T\xECm ki\u1EBFm"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(92, 156, "hrm.viewContract.title.clearFilter", "X\xF3a b\u1ED9 l\u1ECDc"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.exporting());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(96, 159, "common.export", "Xu\u1EA5t"), " Excel ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzFrontPagination", false)("nzLoading", ctx.loading())("nzTotal", ctx.recordsFiltered())("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", cclTotalTpl_r9)("nzScroll", \u0275\u0275pureFunction0(210, _c0));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(104, 162, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(107, 165, "hrm.viewContract.title.contractNo", "S\u1ED1 h\u1EE3p \u0111\u1ED3ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(110, 168, "hrm.viewContract.title.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(113, 171, "hrm.viewContract.title.contractName", "T\xEAn h\u1EE3p \u0111\u1ED3ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(116, 174, "hrm.viewContract.title.contractType", "Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(119, 177, "hrm.viewContract.title.startDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(122, 180, "hrm.viewContract.title.endDate", "Ng\xE0y k\u1EBFt th\xFAc"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(125, 183, "hrm.viewContract.title.dept", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(128, 186, "hrm.viewContract.title.position", "V\u1ECB tr\xED"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(131, 189, "hrm.viewContract.title.salary", "L\u01B0\u01A1ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(134, 192, "hrm.viewContract.title.activity", "Ho\u1EA1t \u0111\u1ED9ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(137, 195, "hrm.viewContract.title.createDate", "Ng\xE0y t\u1EA1o"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(140, 198, "common.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.rows());
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", \u0275\u0275pipeBind2(147, 201, "hrm.editContract.title.editTitle", "Ch\u1EC9nh s\u1EEDa th\xF4ng tin h\u1EE3p \u0111\u1ED3ng"))("nzBodyStyle", \u0275\u0275pureFunction0(211, _c1))("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(148, 204, "hrm.editContract.title.saveChanges", "L\u01B0u thay \u0111\u1ED5i"))("nzCancelText", \u0275\u0275pipeBind2(149, 207, "hrm.editContract.title.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzInputNumberModule, NzInputNumberComponent, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzDatePickerModule, NzDatePickerComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\n.ccl-row-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.ccl-row-clickable[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.ccl-btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=contract-change-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContractChangeListComponent, [{
    type: Component,
    args: [{ selector: "app-contract-change-list", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzInputNumberModule,
      NzSelectModule,
      NzButtonModule,
      NzDatePickerModule,
      NzModalModule,
      NzAlertModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm - \u0111\u1EE9ng im khi cu\u1ED9n (xem .sticky-filter-card trong styles.css) -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3" (ngSubmit)="search()">
        <div class="col-md-2">
          <label class="form-label">{{ 'hrm.viewContract.title.contractNo' | translate:'S\u1ED1 h\u1EE3p \u0111\u1ED3ng' }}</label>
          <input nz-input [(ngModel)]="contractNo" name="cclContractNo"
                 [placeholder]="'hrm.viewContract.title.contractNoPlaceholder' | translate:'Nh\u1EADp s\u1ED1 h\u1EE3p \u0111\u1ED3ng'">
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'hrm.viewContract.title.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</label>
          <input nz-input [(ngModel)]="empId" name="cclEmpId"
                 [placeholder]="'hrm.viewContract.title.empIdPlaceholder' | translate:'Nh\u1EADp m\xE3 nh\xE2n vi\xEAn'">
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'hrm.viewContract.title.contractType' | translate:'Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng' }}</label>
          <nz-select class="w-100" [(ngModel)]="contractType" name="cclContractType" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option nzValue="FULL_TIME" [nzLabel]="'hrm.editContract.title.fullTime' | translate:'To\xE0n th\u1EDDi gian'"></nz-option>
            <nz-option nzValue="PART_TIME" [nzLabel]="'hrm.editContract.title.partTime' | translate:'B\xE1n th\u1EDDi gian'"></nz-option>
            <nz-option nzValue="INTERN" [nzLabel]="'hrm.editContract.title.intern' | translate:'Th\u1EF1c t\u1EADp'"></nz-option>
            <nz-option nzValue="CONSULTANT" [nzLabel]="'hrm.editContract.title.consultant' | translate:'T\u01B0 v\u1EA5n'"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'hrm.viewContract.title.dept' | translate:'Ph\xF2ng ban' }}</label>
          <input nz-input [(ngModel)]="department" name="cclDepartment"
                 [placeholder]="'hrm.viewContract.title.deptPlaceholder' | translate:'Nh\u1EADp ph\xF2ng ban'">
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'hrm.viewContract.title.startDateFrom' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u t\u1EEB' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="startDateFrom" name="cclStartDateFrom" nzFormat="dd/MM/yyyy"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'hrm.viewContract.title.startDateTo' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u \u0111\u1EBFn' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="startDateTo" name="cclStartDateTo" nzFormat="dd/MM/yyyy"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'hrm.viewContract.title.endDateFrom' | translate:'Ng\xE0y k\u1EBFt th\xFAc t\u1EEB' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="endDateFrom" name="cclEndDateFrom" nzFormat="dd/MM/yyyy"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'hrm.viewContract.title.endDateTo' | translate:'Ng\xE0y k\u1EBFt th\xFAc \u0111\u1EBFn' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="endDateTo" name="cclEndDateTo" nzFormat="dd/MM/yyyy"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'hrm.viewContract.title.activity' | translate:'Ho\u1EA1t \u0111\u1ED9ng' }}</label>
          <nz-select class="w-100" [(ngModel)]="activity" name="cclActivity" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option nzValue="ACTIVE" [nzLabel]="'hrm.editContract.title.active' | translate:'Ho\u1EA1t \u0111\u1ED9ng'"></nz-option>
            <nz-option nzValue="INACTIVE" [nzLabel]="'hrm.editContract.title.inactive' | translate:'Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng'"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'hrm.viewContract.title.workPosition' | translate:'V\u1ECB tr\xED l\xE0m vi\u1EC7c' }}</label>
          <input nz-input [(ngModel)]="workPosition" name="cclWorkPosition"
                 [placeholder]="'hrm.viewContract.title.workPositionPlaceholder' | translate:'Nh\u1EADp v\u1ECB tr\xED l\xE0m vi\u1EC7c'">
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'hrm.viewContract.title.salaryFrom' | translate:'L\u01B0\u01A1ng t\u1EEB' }}</label>
          <nz-input-number class="w-100" [(ngModel)]="salaryFrom" name="cclSalaryFrom" [nzMin]="0"
                            [nzPlaceHolder]="'hrm.viewContract.title.salaryFromPlaceholder' | translate:'Nh\u1EADp l\u01B0\u01A1ng t\u1ED1i thi\u1EC3u'"></nz-input-number>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'hrm.viewContract.title.salaryTo' | translate:'L\u01B0\u01A1ng \u0111\u1EBFn' }}</label>
          <nz-input-number class="w-100" [(ngModel)]="salaryTo" name="cclSalaryTo" [nzMin]="0"
                            [nzPlaceHolder]="'hrm.viewContract.title.salaryToPlaceholder' | translate:'Nh\u1EADp l\u01B0\u01A1ng t\u1ED1i \u0111a'"></nz-input-number>
        </div>
        <div class="col-12 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'hrm.viewContract.title.search' | translate:'T\xECm ki\u1EBFm' }}
          </button>
          <button nz-button type="button" (click)="clearSearch()">
            <i class="bx bx-x"></i> {{ 'hrm.viewContract.title.clearFilter' | translate:'X\xF3a b\u1ED9 l\u1ECDc' }}
          </button>
          <button nz-button nzType="default" type="button" class="ccl-btn-export" [nzLoading]="exporting()" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'common.export' | translate:'Xu\u1EA5t' }} Excel
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <nz-table [nzData]="rows()" [nzFrontPagination]="false" [nzLoading]="loading()"
                [nzTotal]="recordsFiltered()" [nzPageIndex]="pageIndex" [nzPageSize]="pageSize"
                [nzPageSizeOptions]="pageSizeOptions" nzShowSizeChanger [nzShowTotal]="cclTotalTpl"
                (nzPageIndexChange)="onPageIndexChange($event)" (nzPageSizeChange)="onPageSizeChange($event)"
                [nzScroll]="{ x: '1400px' }" class="table-nowrap">
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th nzWidth="130px">{{ 'hrm.viewContract.title.contractNo' | translate:'S\u1ED1 h\u1EE3p \u0111\u1ED3ng' }}</th>
            <th nzWidth="110px">{{ 'hrm.viewContract.title.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
            <th nzWidth="180px">{{ 'hrm.viewContract.title.contractName' | translate:'T\xEAn h\u1EE3p \u0111\u1ED3ng' }}</th>
            <th nzWidth="130px">{{ 'hrm.viewContract.title.contractType' | translate:'Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'hrm.viewContract.title.startDate' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'hrm.viewContract.title.endDate' | translate:'Ng\xE0y k\u1EBFt th\xFAc' }}</th>
            <th nzWidth="120px">{{ 'hrm.viewContract.title.dept' | translate:'Ph\xF2ng ban' }}</th>
            <th nzWidth="140px">{{ 'hrm.viewContract.title.position' | translate:'V\u1ECB tr\xED' }}</th>
            <th class="text-end" nzWidth="130px">{{ 'hrm.viewContract.title.salary' | translate:'L\u01B0\u01A1ng' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'hrm.viewContract.title.activity' | translate:'Ho\u1EA1t \u0111\u1ED9ng' }}</th>
            <th class="text-center" nzWidth="150px">{{ 'hrm.viewContract.title.createDate' | translate:'Ng\xE0y t\u1EA1o' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'common.action' | translate:'Thao t\xE1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="13" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of rows(); let i = index" class="ccl-row-clickable" (click)="openEdit(row)">
            <td class="text-center">{{ (pageIndex - 1) * pageSize + i + 1 }}</td>
            <td>{{ row.contractNo }}</td>
            <td>{{ row.empId }}</td>
            <td [attr.title]="row.contractName || null">{{ row.contractName }}</td>
            <td>{{ row.contractTypeName }}</td>
            <td class="text-center">{{ formatDisplayDate(row.startContractDate) }}</td>
            <td class="text-center">{{ formatDisplayDate(row.endContractDate) }}</td>
            <td>{{ row.deptNo }}</td>
            <td [attr.title]="row.workPosition || null">{{ row.workPosition }}</td>
            <td class="text-end">{{ formatSalary(row.salary) }}</td>
            <td class="text-center">
              <span class="badge" [class.bg-success]="row.activity === 'ACTIVE'" [class.bg-secondary]="row.activity !== 'ACTIVE'">
                {{ row.activity === 'ACTIVE' ? ('hrm.editContract.title.active' | translate:'Ho\u1EA1t \u0111\u1ED9ng') : ('hrm.editContract.title.inactive' | translate:'Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng') }}
              </span>
            </td>
            <td class="text-center">{{ formatDisplayDateTime(row.createDate) }}</td>
            <td class="text-center" (click)="$event.stopPropagation()">
              <button nz-button nzType="text" nzSize="small" title="Ch\u1EC9nh s\u1EEDa" (click)="openEdit(row)">
                <i class="bx bx-edit text-warning"></i>
              </button>
            </td>
          </tr>
        </tbody>
        <ng-template #cclTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal Ch\u1EC9nh s\u1EEDa h\u1EE3p \u0111\u1ED3ng -->
<nz-modal [nzVisible]="modalVisible()" [nzTitle]="'hrm.editContract.title.editTitle' | translate:'Ch\u1EC9nh s\u1EEDa th\xF4ng tin h\u1EE3p \u0111\u1ED3ng'" nzWidth="900px"
          [nzBodyStyle]="{ 'max-height': '75vh', 'overflow-y': 'auto' }"
          (nzOnCancel)="closeModal()" (nzOnOk)="saveForm()" [nzOkLoading]="saving()"
          [nzOkText]="'hrm.editContract.title.saveChanges' | translate:'L\u01B0u thay \u0111\u1ED5i'"
          [nzCancelText]="'hrm.editContract.title.cancel' | translate:'H\u1EE7y'">
  <ng-container *nzModalContent>
    <div class="row g-3" *ngIf="form as f">
      <div class="col-md-6">
        <h6 class="text-primary mb-2">{{ 'hrm.editContract.title.basicInfo' | translate:'Th\xF4ng tin c\u01A1 b\u1EA3n' }}</h6>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.contractNo' | translate:'S\u1ED1 h\u1EE3p \u0111\u1ED3ng' }}</label>
          <input nz-input [ngModel]="f.contractNo" name="cclFormContractNo" readonly>
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</label>
          <input nz-input [ngModel]="f.empId" name="cclFormEmpId" readonly>
        </div>

        <div class="mb-2" *ngIf="f.localName">
          <label class="form-label">{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</label>
          <input nz-input [ngModel]="f.localName" name="cclFormLocalName" readonly>
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.contractName' | translate:'T\xEAn h\u1EE3p \u0111\u1ED3ng' }} <span class="text-danger">*</span></label>
          <input nz-input [(ngModel)]="f.contractName" name="cclFormContractName">
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.contractType' | translate:'Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng' }}</label>
          <nz-select class="w-100" [(ngModel)]="f.contractType" name="cclFormContractType">
            <nz-option nzValue="FULL_TIME" [nzLabel]="'hrm.editContract.title.fullTime' | translate:'To\xE0n th\u1EDDi gian'"></nz-option>
            <nz-option nzValue="PART_TIME" [nzLabel]="'hrm.editContract.title.partTime' | translate:'B\xE1n th\u1EDDi gian'"></nz-option>
            <nz-option nzValue="INTERN" [nzLabel]="'hrm.editContract.title.intern' | translate:'Th\u1EF1c t\u1EADp'"></nz-option>
            <nz-option nzValue="CONSULTANT" [nzLabel]="'hrm.editContract.title.consultant' | translate:'T\u01B0 v\u1EA5n'"></nz-option>
          </nz-select>
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.contractTypeCode' | translate:'M\xE3 lo\u1EA1i h\u1EE3p \u0111\u1ED3ng' }}</label>
          <input nz-input [(ngModel)]="f.contractTypeCode" name="cclFormContractTypeCode">
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.startContractDate' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u h\u1EE3p \u0111\u1ED3ng' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="f.startContractDate" name="cclFormStartContractDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.endContractDate' | translate:'Ng\xE0y k\u1EBFt th\xFAc h\u1EE3p \u0111\u1ED3ng' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="f.endContractDate" name="cclFormEndContractDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.changeDate' | translate:'Ng\xE0y thay \u0111\u1ED5i' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="f.changeDate" name="cclFormChangeDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
        </div>
      </div>

      <div class="col-md-6">
        <h6 class="text-primary mb-2">{{ 'hrm.editContract.title.workInfo' | translate:'Th\xF4ng tin c\xF4ng vi\u1EC7c' }}</h6>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.dept' | translate:'Ph\xF2ng ban' }}</label>
          <input nz-input [(ngModel)]="f.deptNo" name="cclFormDeptNo">
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.workPosition' | translate:'V\u1ECB tr\xED l\xE0m vi\u1EC7c' }}</label>
          <input nz-input [(ngModel)]="f.workPosition" name="cclFormWorkPosition">
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.positionNo' | translate:'M\xE3 ch\u1EE9c v\u1EE5' }}</label>
          <input nz-input [(ngModel)]="f.positionNo" name="cclFormPositionNo">
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.postGradeNo' | translate:'M\xE3 c\u1EA5p b\u1EADc' }}</label>
          <input nz-input [(ngModel)]="f.postGradeNo" name="cclFormPostGradeNo">
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.salary' | translate:'L\u01B0\u01A1ng' }}</label>
          <nz-input-number class="w-100" [(ngModel)]="f.salary" name="cclFormSalary" [nzMin]="0"></nz-input-number>
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.workTime' | translate:'Th\u1EDDi gian l\xE0m vi\u1EC7c' }}</label>
          <input nz-input [(ngModel)]="f.workTime" name="cclFormWorkTime">
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.workHourType' | translate:'Lo\u1EA1i gi\u1EDD l\xE0m vi\u1EC7c' }}</label>
          <nz-select class="w-100" [(ngModel)]="f.workHourType" name="cclFormWorkHourType" nzAllowClear
                     [nzPlaceHolder]="'hrm.editContract.title.selectWorkHourType' | translate:'Ch\u1ECDn lo\u1EA1i gi\u1EDD l\xE0m vi\u1EC7c'">
            <nz-option nzValue="FULL_TIME" [nzLabel]="'hrm.editContract.title.fullTime' | translate:'To\xE0n th\u1EDDi gian'"></nz-option>
            <nz-option nzValue="PART_TIME" [nzLabel]="'hrm.editContract.title.partTime' | translate:'B\xE1n th\u1EDDi gian'"></nz-option>
            <nz-option nzValue="OVERTIME" [nzLabel]="'hrm.editContract.title.overtime' | translate:'T\u0103ng ca'"></nz-option>
            <nz-option nzValue="FLEXIBLE" [nzLabel]="'hrm.editContract.title.flexible' | translate:'Linh ho\u1EA1t'"></nz-option>
          </nz-select>
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.totalPeriod' | translate:'T\u1ED5ng th\u1EDDi gian' }}</label>
          <input nz-input [(ngModel)]="f.totalPeriod" name="cclFormTotalPeriod">
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.totalPeriod08' | translate:'T\u1ED5ng th\u1EDDi gian 08' }}</label>
          <input nz-input [(ngModel)]="f.totalPeriod08" name="cclFormTotalPeriod08">
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.activity' | translate:'Tr\u1EA1ng th\xE1i ho\u1EA1t \u0111\u1ED9ng' }}</label>
          <nz-select class="w-100" [(ngModel)]="f.activity" name="cclFormActivity">
            <nz-option nzValue="ACTIVE" [nzLabel]="'hrm.editContract.title.active' | translate:'Ho\u1EA1t \u0111\u1ED9ng'"></nz-option>
            <nz-option nzValue="INACTIVE" [nzLabel]="'hrm.editContract.title.inactive' | translate:'Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng'"></nz-option>
          </nz-select>
        </div>
      </div>

      <div class="col-12">
        <h6 class="text-primary mb-2">{{ 'hrm.editContract.title.contentAndRemark' | translate:'N\u1ED9i dung v\xE0 ghi ch\xFA' }}</h6>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.workContent' | translate:'N\u1ED9i dung c\xF4ng vi\u1EC7c' }}</label>
          <textarea nz-input [(ngModel)]="f.workContent" name="cclFormWorkContent" rows="3"
                    [placeholder]="'hrm.editContract.title.workContentPlaceholder' | translate:'M\xF4 t\u1EA3 chi ti\u1EBFt n\u1ED9i dung c\xF4ng vi\u1EC7c...'"></textarea>
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.remark' | translate:'Ghi ch\xFA' }}</label>
          <textarea nz-input [(ngModel)]="f.remark" name="cclFormRemark" rows="2"
                    [placeholder]="'hrm.editContract.title.remarkPlaceholder' | translate:'Ghi ch\xFA th\xEAm v\u1EC1 h\u1EE3p \u0111\u1ED3ng...'"></textarea>
        </div>
      </div>
    </div>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/contract-change-list/contract-change-list.component.css */\n.ccl-row-clickable {\n  cursor: pointer;\n}\n.ccl-row-clickable:hover {\n  background: #fafafa;\n}\n.ccl-btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=contract-change-list.component.css.map */\n"] }]
  }], () => [{ type: ContractInfoListService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContractChangeListComponent, { className: "ContractChangeListComponent", filePath: "src/app/contract-change-list/contract-change-list.component.ts", lineNumber: 118 });
})();
export {
  ContractChangeListComponent
};
//# debugId=abf2305c-ec3f-5639-9dc4-15ec619ecce3
//# sourceMappingURL=chunk-GMO3USFM.js.map
