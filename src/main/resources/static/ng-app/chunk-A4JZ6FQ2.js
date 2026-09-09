import {
  ContractInfoListService
} from "./chunk-E4QGA4NS.js";
import {
  NzInputNumberComponent,
  NzInputNumberModule
} from "./chunk-IXCMIWQQ.js";
import {
  NzDescriptionsComponent,
  NzDescriptionsItemComponent,
  NzDescriptionsModule
} from "./chunk-Q45A6SWP.js";
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

// src/app/expired-contract-list/expired-contract-list.component.ts
var _c0 = () => ({ x: "1450px" });
var _c1 = () => ({ "max-height": "75vh", "overflow-y": "auto" });
function ExpiredContractListComponent_nz_alert_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 48);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ExpiredContractListComponent_tr_142_Template(rf, ctx) {
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
function ExpiredContractListComponent_tr_143_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 50);
    \u0275\u0275listener("click", function ExpiredContractListComponent_tr_143_Template_tr_click_0_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDetail(row_r4));
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
    \u0275\u0275listener("click", function ExpiredContractListComponent_tr_143_Template_td_click_28_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(29, "button", 55);
    \u0275\u0275listener("click", function ExpiredContractListComponent_tr_143_Template_button_click_29_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDetail(row_r4));
    });
    \u0275\u0275element(30, "i", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 57);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275listener("click", function ExpiredContractListComponent_tr_143_Template_button_click_31_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openExtend(row_r4));
    });
    \u0275\u0275element(33, "i", 58);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
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
    \u0275\u0275textInterpolate1(" ", row_r4.activity === "ACTIVE" ? \u0275\u0275pipeBind2(24, 20, "hrm.editContract.title.active", "Ho\u1EA1t \u0111\u1ED9ng") : \u0275\u0275pipeBind2(25, 23, "hrm.editContract.title.inactive", "Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.formatDisplayDateTime(row_r4.createDate));
    \u0275\u0275advance(4);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(32, 26, "expiredContract.action.extend", "Gia h\u1EA1n"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(35, 29, "expiredContract.action.extend", "Gia h\u1EA1n"), " ");
  }
}
function ExpiredContractListComponent_ng_template_144_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r6 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r6, " ");
  }
}
function ExpiredContractListComponent_ng_container_148_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "nz-descriptions", 59)(2, "nz-descriptions-item", 60);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "nz-descriptions-item", 60);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "nz-descriptions-item", 60);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "nz-descriptions-item", 60);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "nz-descriptions-item", 60);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "nz-descriptions-item", 60);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "nz-descriptions-item", 60);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "nz-descriptions-item", 60);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "nz-descriptions-item", 60);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "nz-descriptions-item", 60);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "nz-descriptions-item", 60);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "nz-descriptions-item", 60);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "nz-descriptions-item", 60);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "nz-descriptions-item", 60);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "nz-descriptions-item", 61);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "nz-descriptions-item", 61);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275text(51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "nz-descriptions-item", 61);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("nzColumn", 2);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(3, 38, "hrm.viewExpiredContract.title.contractNo", "S\u1ED1 h\u1EE3p \u0111\u1ED3ng"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.contractNo);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(6, 41, "hrm.viewContract.title.contractName", "T\xEAn h\u1EE3p \u0111\u1ED3ng"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.contractName);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(9, 44, "hrm.viewExpiredContract.title.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.empId);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(12, 47, "common.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.localName);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(15, 50, "hrm.viewExpiredContract.title.contractType", "Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.contractTypeName);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(18, 53, "hrm.editContract.title.contractTypeCode", "M\xE3 lo\u1EA1i h\u1EE3p \u0111\u1ED3ng"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.contractTypeCode);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(21, 56, "hrm.viewContract.title.startDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDisplayDate(row_r7.startContractDate));
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(24, 59, "hrm.viewContract.title.endDate", "Ng\xE0y k\u1EBFt th\xFAc"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDisplayDate(row_r7.endContractDate));
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(27, 62, "hrm.viewExpiredContract.title.dept", "Ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.deptNo);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(30, 65, "hrm.viewContract.title.position", "V\u1ECB tr\xED"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.workPosition);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(33, 68, "hrm.viewContract.title.salary", "L\u01B0\u01A1ng"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatSalary(row_r7.salary));
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(36, 71, "hrm.editContract.title.workTime", "Th\u1EDDi gian l\xE0m vi\u1EC7c"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.workTime);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(39, 74, "hrm.editContract.title.workHourType", "Lo\u1EA1i gi\u1EDD l\xE0m vi\u1EC7c"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.workHourType);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(42, 77, "hrm.viewExpiredContract.title.activity", "Ho\u1EA1t \u0111\u1ED9ng"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r7.activity === "ACTIVE" ? \u0275\u0275pipeBind2(44, 80, "hrm.editContract.title.active", "Ho\u1EA1t \u0111\u1ED9ng") : \u0275\u0275pipeBind2(45, 83, "hrm.editContract.title.inactive", "Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(47, 86, "hrm.viewContract.title.createDate", "Ng\xE0y t\u1EA1o"))("nzSpan", 2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDisplayDateTime(row_r7.createDate));
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(50, 89, "hrm.editContract.title.workContent", "N\u1ED9i dung c\xF4ng vi\u1EC7c"))("nzSpan", 2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.workContent || "-");
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(53, 92, "hrm.editContract.title.remark", "Ghi ch\xFA"))("nzSpan", 2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.remark || "-");
  }
}
function ExpiredContractListComponent_ng_container_148_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ExpiredContractListComponent_ng_container_148_ng_container_1_Template, 55, 95, "ng-container", 43);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.detailRow());
  }
}
function ExpiredContractListComponent_ng_container_151_div_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "label", 6);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 88);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r9 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "common.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", f_r9.localName);
    \u0275\u0275control();
  }
}
function ExpiredContractListComponent_ng_container_151_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 64)(2, "h6", 65);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 66)(6, "label", 6);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "span", 67);
    \u0275\u0275text(10, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function ExpiredContractListComponent_ng_container_151_div_1_Template_input_ngModelChange_11_listener($event) {
      const f_r9 = \u0275\u0275restoreView(_r8).ngIf;
      \u0275\u0275twoWayBindingSet(f_r9.contractNo, $event) || (f_r9.contractNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 66)(13, "label", 6);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 69);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, ExpiredContractListComponent_ng_container_151_div_1_div_17_Template, 5, 5, "div", 70);
    \u0275\u0275elementStart(18, "div", 66)(19, "label", 6);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementStart(22, "span", 67);
    \u0275\u0275text(23, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "input", 71);
    \u0275\u0275twoWayListener("ngModelChange", function ExpiredContractListComponent_ng_container_151_div_1_Template_input_ngModelChange_24_listener($event) {
      const f_r9 = \u0275\u0275restoreView(_r8).ngIf;
      \u0275\u0275twoWayBindingSet(f_r9.contractName, $event) || (f_r9.contractName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 66)(26, "label", 6);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "nz-select", 72);
    \u0275\u0275twoWayListener("ngModelChange", function ExpiredContractListComponent_ng_container_151_div_1_Template_nz_select_ngModelChange_29_listener($event) {
      const f_r9 = \u0275\u0275restoreView(_r8).ngIf;
      \u0275\u0275twoWayBindingSet(f_r9.contractType, $event) || (f_r9.contractType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(30, "nz-option", 10);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275element(32, "nz-option", 11);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275element(34, "nz-option", 12);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275element(36, "nz-option", 13);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 66)(39, "label", 6);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 73);
    \u0275\u0275twoWayListener("ngModelChange", function ExpiredContractListComponent_ng_container_151_div_1_Template_input_ngModelChange_42_listener($event) {
      const f_r9 = \u0275\u0275restoreView(_r8).ngIf;
      \u0275\u0275twoWayBindingSet(f_r9.contractTypeCode, $event) || (f_r9.contractTypeCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 66)(44, "label", 6);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "nz-date-picker", 74);
    \u0275\u0275twoWayListener("ngModelChange", function ExpiredContractListComponent_ng_container_151_div_1_Template_nz_date_picker_ngModelChange_47_listener($event) {
      const f_r9 = \u0275\u0275restoreView(_r8).ngIf;
      \u0275\u0275twoWayBindingSet(f_r9.startContractDate, $event) || (f_r9.startContractDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 66)(49, "label", 6);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "nz-date-picker", 75);
    \u0275\u0275twoWayListener("ngModelChange", function ExpiredContractListComponent_ng_container_151_div_1_Template_nz_date_picker_ngModelChange_52_listener($event) {
      const f_r9 = \u0275\u0275restoreView(_r8).ngIf;
      \u0275\u0275twoWayBindingSet(f_r9.endContractDate, $event) || (f_r9.endContractDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 64)(54, "h6", 65);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 66)(58, "label", 6);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function ExpiredContractListComponent_ng_container_151_div_1_Template_input_ngModelChange_61_listener($event) {
      const f_r9 = \u0275\u0275restoreView(_r8).ngIf;
      \u0275\u0275twoWayBindingSet(f_r9.deptNo, $event) || (f_r9.deptNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 66)(63, "label", 6);
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function ExpiredContractListComponent_ng_container_151_div_1_Template_input_ngModelChange_66_listener($event) {
      const f_r9 = \u0275\u0275restoreView(_r8).ngIf;
      \u0275\u0275twoWayBindingSet(f_r9.workPosition, $event) || (f_r9.workPosition = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 66)(68, "label", 6);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "input", 78);
    \u0275\u0275twoWayListener("ngModelChange", function ExpiredContractListComponent_ng_container_151_div_1_Template_input_ngModelChange_71_listener($event) {
      const f_r9 = \u0275\u0275restoreView(_r8).ngIf;
      \u0275\u0275twoWayBindingSet(f_r9.positionNo, $event) || (f_r9.positionNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div", 66)(73, "label", 6);
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "input", 79);
    \u0275\u0275twoWayListener("ngModelChange", function ExpiredContractListComponent_ng_container_151_div_1_Template_input_ngModelChange_76_listener($event) {
      const f_r9 = \u0275\u0275restoreView(_r8).ngIf;
      \u0275\u0275twoWayBindingSet(f_r9.postGradeNo, $event) || (f_r9.postGradeNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 66)(78, "label", 6);
    \u0275\u0275text(79);
    \u0275\u0275pipe(80, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "nz-input-number", 80);
    \u0275\u0275twoWayListener("ngModelChange", function ExpiredContractListComponent_ng_container_151_div_1_Template_nz_input_number_ngModelChange_81_listener($event) {
      const f_r9 = \u0275\u0275restoreView(_r8).ngIf;
      \u0275\u0275twoWayBindingSet(f_r9.salary, $event) || (f_r9.salary = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "div", 66)(83, "label", 6);
    \u0275\u0275text(84);
    \u0275\u0275pipe(85, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "input", 81);
    \u0275\u0275twoWayListener("ngModelChange", function ExpiredContractListComponent_ng_container_151_div_1_Template_input_ngModelChange_86_listener($event) {
      const f_r9 = \u0275\u0275restoreView(_r8).ngIf;
      \u0275\u0275twoWayBindingSet(f_r9.workTime, $event) || (f_r9.workTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "div", 66)(88, "label", 6);
    \u0275\u0275text(89);
    \u0275\u0275pipe(90, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "nz-select", 82);
    \u0275\u0275pipe(92, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ExpiredContractListComponent_ng_container_151_div_1_Template_nz_select_ngModelChange_91_listener($event) {
      const f_r9 = \u0275\u0275restoreView(_r8).ngIf;
      \u0275\u0275twoWayBindingSet(f_r9.workHourType, $event) || (f_r9.workHourType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(93, "nz-option", 10);
    \u0275\u0275pipe(94, "translate");
    \u0275\u0275element(95, "nz-option", 11);
    \u0275\u0275pipe(96, "translate");
    \u0275\u0275element(97, "nz-option", 83);
    \u0275\u0275pipe(98, "translate");
    \u0275\u0275element(99, "nz-option", 84);
    \u0275\u0275pipe(100, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "div", 66)(102, "label", 6);
    \u0275\u0275text(103);
    \u0275\u0275pipe(104, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "nz-select", 85);
    \u0275\u0275twoWayListener("ngModelChange", function ExpiredContractListComponent_ng_container_151_div_1_Template_nz_select_ngModelChange_105_listener($event) {
      const f_r9 = \u0275\u0275restoreView(_r8).ngIf;
      \u0275\u0275twoWayBindingSet(f_r9.activity, $event) || (f_r9.activity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(106, "nz-option", 20);
    \u0275\u0275pipe(107, "translate");
    \u0275\u0275element(108, "nz-option", 21);
    \u0275\u0275pipe(109, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(110, "div", 2)(111, "h6", 65);
    \u0275\u0275text(112);
    \u0275\u0275pipe(113, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "div", 66)(115, "label", 6);
    \u0275\u0275text(116);
    \u0275\u0275pipe(117, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "textarea", 86);
    \u0275\u0275pipe(119, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ExpiredContractListComponent_ng_container_151_div_1_Template_textarea_ngModelChange_118_listener($event) {
      const f_r9 = \u0275\u0275restoreView(_r8).ngIf;
      \u0275\u0275twoWayBindingSet(f_r9.workContent, $event) || (f_r9.workContent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "div", 66)(121, "label", 6);
    \u0275\u0275text(122);
    \u0275\u0275pipe(123, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "textarea", 87);
    \u0275\u0275pipe(125, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ExpiredContractListComponent_ng_container_151_div_1_Template_textarea_ngModelChange_124_listener($event) {
      const f_r9 = \u0275\u0275restoreView(_r8).ngIf;
      \u0275\u0275twoWayBindingSet(f_r9.remark, $event) || (f_r9.remark = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const f_r9 = ctx.ngIf;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 52, "hrm.editContract.title.basicInfo", "Th\xF4ng tin c\u01A1 b\u1EA3n"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(8, 55, "hrm.editContract.title.contractNo", "S\u1ED1 h\u1EE3p \u0111\u1ED3ng"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", f_r9.contractNo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 58, "hrm.editContract.title.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", f_r9.empId);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", f_r9.localName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(21, 61, "hrm.editContract.title.contractName", "T\xEAn h\u1EE3p \u0111\u1ED3ng"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", f_r9.contractName);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 64, "hrm.editContract.title.contractType", "Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", f_r9.contractType);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(31, 67, "hrm.editContract.title.fullTime", "To\xE0n th\u1EDDi gian"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(33, 70, "hrm.editContract.title.partTime", "B\xE1n th\u1EDDi gian"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(35, 73, "hrm.editContract.title.intern", "Th\u1EF1c t\u1EADp"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(37, 76, "hrm.editContract.title.consultant", "T\u01B0 v\u1EA5n"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 79, "hrm.editContract.title.contractTypeCode", "M\xE3 lo\u1EA1i h\u1EE3p \u0111\u1ED3ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", f_r9.contractTypeCode);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 82, "hrm.editContract.title.startContractDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u h\u1EE3p \u0111\u1ED3ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", f_r9.startContractDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 85, "hrm.editContract.title.endContractDate", "Ng\xE0y k\u1EBFt th\xFAc h\u1EE3p \u0111\u1ED3ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", f_r9.endContractDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(56, 88, "hrm.editContract.title.workInfo", "Th\xF4ng tin c\xF4ng vi\u1EC7c"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(60, 91, "hrm.editContract.title.dept", "Ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", f_r9.deptNo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(65, 94, "hrm.editContract.title.workPosition", "V\u1ECB tr\xED l\xE0m vi\u1EC7c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", f_r9.workPosition);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(70, 97, "hrm.editContract.title.positionNo", "M\xE3 ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", f_r9.positionNo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(75, 100, "hrm.editContract.title.postGradeNo", "M\xE3 c\u1EA5p b\u1EADc"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", f_r9.postGradeNo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(80, 103, "hrm.editContract.title.salary", "L\u01B0\u01A1ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", f_r9.salary);
    \u0275\u0275property("nzMin", 0);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(85, 106, "hrm.editContract.title.workTime", "Th\u1EDDi gian l\xE0m vi\u1EC7c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", f_r9.workTime);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(90, 109, "hrm.editContract.title.workHourType", "Lo\u1EA1i gi\u1EDD l\xE0m vi\u1EC7c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", f_r9.workHourType);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(92, 112, "hrm.editContract.title.selectWorkHourType", "Ch\u1ECDn lo\u1EA1i gi\u1EDD l\xE0m vi\u1EC7c"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(94, 115, "hrm.editContract.title.fullTime", "To\xE0n th\u1EDDi gian"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(96, 118, "hrm.editContract.title.partTime", "B\xE1n th\u1EDDi gian"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(98, 121, "hrm.editContract.title.overtime", "T\u0103ng ca"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(100, 124, "hrm.editContract.title.flexible", "Linh ho\u1EA1t"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(104, 127, "hrm.editContract.title.activity", "Tr\u1EA1ng th\xE1i ho\u1EA1t \u0111\u1ED9ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", f_r9.activity);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(107, 130, "hrm.editContract.title.active", "Ho\u1EA1t \u0111\u1ED9ng"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(109, 133, "hrm.editContract.title.inactive", "Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(113, 136, "hrm.editContract.title.contentAndRemark", "N\u1ED9i dung v\xE0 ghi ch\xFA"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(117, 139, "hrm.editContract.title.workContent", "N\u1ED9i dung c\xF4ng vi\u1EC7c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", f_r9.workContent);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(119, 142, "hrm.editContract.title.workContentPlaceholder", "M\xF4 t\u1EA3 chi ti\u1EBFt n\u1ED9i dung c\xF4ng vi\u1EC7c..."));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(123, 145, "hrm.editContract.title.remark", "Ghi ch\xFA"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", f_r9.remark);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(125, 148, "hrm.editContract.title.remarkPlaceholder", "Ghi ch\xFA th\xEAm v\u1EC1 h\u1EE3p \u0111\u1ED3ng..."));
    \u0275\u0275control();
  }
}
function ExpiredContractListComponent_ng_container_151_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ExpiredContractListComponent_ng_container_151_div_1_Template, 126, 151, "div", 62);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form);
  }
}
var I18N_KEYS = [
  "hrm.viewExpiredContract.title.contractNo",
  "hrm.viewExpiredContract.title.empId",
  "hrm.viewExpiredContract.title.contractType",
  "hrm.viewExpiredContract.title.dept",
  "hrm.viewExpiredContract.title.activity",
  "hrm.viewExpiredContract.title.workPosition",
  "hrm.viewContract.title.contractNoPlaceholder",
  "hrm.viewContract.title.empIdPlaceholder",
  "hrm.viewContract.title.deptPlaceholder",
  "hrm.viewContract.title.workPositionPlaceholder",
  "hrm.viewContract.title.startDateFrom",
  "hrm.viewContract.title.startDateTo",
  "hrm.viewContract.title.endDateFrom",
  "hrm.viewContract.title.endDateTo",
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
  "hrm.viewContract.title.detailTitle",
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
  "expiredContract.action.extend",
  "expiredContract.js.extendSuccess",
  "expiredContract.js.extendPrefix",
  "common.selectAll",
  "common.stt",
  "common.action",
  "common.export",
  "common.loadFail",
  "common.saveFail",
  "common.noData",
  "common.totalRows",
  "common.empName",
  "hrm.viewContract.title.validateContractNo",
  "hrm.viewContract.title.validateContractName",
  "tempEmp.validateEmp"
];
var PAGE_SIZE_OPTIONS = [10, 25, 50, 100];
var CODE_PROBATION_TRAINING = "14014302";
var CODE_PROBATION = "123204";
var CODE_ONE_YEAR = "14014303";
var CODE_TWO_YEAR = "123203";
var CODE_INDEFINITE = "14014305";
var ExpiredContractListComponent = class _ExpiredContractListComponent {
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
  endDateFrom = this.today();
  endDateTo = this.plusDays(this.today(), 7);
  activity = null;
  workPosition = "";
  salaryFrom = null;
  salaryTo = null;
  detailVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "detailVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  detailRow = signal(
    null,
    ...ngDevMode ? [{ debugName: "detailRow" }] : (
      /* istanbul ignore next */
      []
    )
  );
  extendVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "extendVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  extending = signal(
    false,
    ...ngDevMode ? [{ debugName: "extending" }] : (
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
    this.endDateFrom = this.today();
    this.endDateTo = this.plusDays(this.today(), 7);
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
  // ==================== Xem chi tiết ====================
  openDetail(row) {
    this.detailRow.set(row);
    this.detailVisible.set(true);
  }
  closeDetail() {
    this.detailVisible.set(false);
  }
  // ==================== Gia hạn (mở modal Thêm mới, điền sẵn từ hợp đồng cũ) ====================
  openExtend(row) {
    const { nextTypeCode, startDate, endDate } = this.computeExtension(row);
    this.form = {
      contractNo: "",
      personId: row.personId,
      empId: row.empId || "",
      localName: row.localName || "",
      contractName: this.i18n.t("expiredContract.js.extendPrefix", "Gia h\u1EA1n - ") + (row.contractName || ""),
      contractType: "FULL_TIME",
      contractTypeCode: nextTypeCode,
      startContractDate: startDate,
      endContractDate: endDate,
      changeDate: null,
      deptNo: row.deptNo || "",
      workPosition: row.workPosition || "",
      positionNo: row.positionNo || "",
      postGradeNo: row.postGradeNo || "",
      salary: row.salary,
      workTime: row.workTime || "",
      workHourType: row.workHourType || "",
      totalPeriod: row.totalPeriod || "",
      totalPeriod08: row.totalPeriod08 || "",
      activity: "ACTIVE",
      workContent: "",
      remark: ""
    };
    this.extendVisible.set(true);
  }
  closeExtend() {
    this.extendVisible.set(false);
  }
  saveExtend() {
    if (!this.form)
      return;
    if (!this.form.contractNo.trim()) {
      this.message.error(this.i18n.t("hrm.viewContract.title.validateContractNo", "Vui l\xF2ng nh\u1EADp s\u1ED1 h\u1EE3p \u0111\u1ED3ng!"));
      return;
    }
    if (!this.form.personId) {
      this.message.error(this.i18n.t("tempEmp.validateEmp", "Vui l\xF2ng ch\u1ECDn nh\xE2n vi\xEAn!"));
      return;
    }
    const f = this.form;
    const payload = {
      contractNo: f.contractNo.trim(),
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
    this.extending.set(true);
    this.api.addContract(payload).subscribe({
      next: () => {
        this.extending.set(false);
        this.extendVisible.set(false);
        this.message.success(this.i18n.t("expiredContract.js.extendSuccess", "Gia h\u1EA1n h\u1EE3p \u0111\u1ED3ng th\xE0nh c\xF4ng!"));
        this.loadPage();
      },
      error: () => {
        this.extending.set(false);
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
      this.i18n.t("hrm.viewExpiredContract.title.contractNo", "S\u1ED1 h\u1EE3p \u0111\u1ED3ng"),
      this.i18n.t("hrm.viewExpiredContract.title.empId", "M\xE3 nh\xE2n vi\xEAn"),
      this.i18n.t("hrm.viewContract.title.contractName", "T\xEAn h\u1EE3p \u0111\u1ED3ng"),
      this.i18n.t("hrm.viewExpiredContract.title.contractType", "Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng"),
      this.i18n.t("hrm.viewContract.title.startDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u"),
      this.i18n.t("hrm.viewContract.title.endDate", "Ng\xE0y k\u1EBFt th\xFAc"),
      this.i18n.t("hrm.viewExpiredContract.title.dept", "Ph\xF2ng ban"),
      this.i18n.t("hrm.viewContract.title.position", "V\u1ECB tr\xED"),
      this.i18n.t("hrm.viewContract.title.salary", "L\u01B0\u01A1ng"),
      this.i18n.t("hrm.viewExpiredContract.title.activity", "Ho\u1EA1t \u0111\u1ED9ng"),
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
    utils.book_append_sheet(workbook, worksheet, "HopDongSapHetHan");
    writeFileSync(workbook, "danh_sach_hop_dong_sap_het_han.xlsx");
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
  /** Tính loại hợp đồng kế tiếp + khoảng ngày khi gia hạn - đúng quy tắc ở hàm extendContract() bản gốc:
   *  thử việc/1 năm -> 1 năm (12 tháng) -> 2 năm (24 tháng) -> không xác định thời hạn (không có ngày kết thúc). */
  computeExtension(row) {
    const currentCode = row.contractTypeCode;
    let nextTypeCode = CODE_ONE_YEAR;
    let durationMonths = 12;
    let indefinite = false;
    if (currentCode === CODE_PROBATION_TRAINING || currentCode === CODE_PROBATION) {
      nextTypeCode = CODE_ONE_YEAR;
      durationMonths = 12;
    } else if (currentCode === CODE_ONE_YEAR) {
      nextTypeCode = CODE_TWO_YEAR;
      durationMonths = 24;
    } else if (currentCode === CODE_TWO_YEAR) {
      nextTypeCode = CODE_INDEFINITE;
      indefinite = true;
    }
    const oldEnd = row.endContractDate ? new Date(row.endContractDate) : null;
    const startDate = oldEnd && !isNaN(oldEnd.getTime()) ? this.plusDays(oldEnd, 1) : this.today();
    if (indefinite) {
      return { nextTypeCode, startDate, endDate: null };
    }
    const endDate = this.plusDays(this.plusMonths(startDate, durationMonths), -1);
    return { nextTypeCode, startDate, endDate };
  }
  today() {
    const d = /* @__PURE__ */ new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }
  plusDays(d, days) {
    const result = new Date(d);
    result.setDate(result.getDate() + days);
    return result;
  }
  plusMonths(d, months) {
    const result = new Date(d);
    result.setMonth(result.getMonth() + months);
    return result;
  }
  formatYmd(d) {
    return d ? formatDate(d, "yyyy-MM-dd", "vi") : "";
  }
  static \u0275fac = function ExpiredContractListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExpiredContractListComponent)(\u0275\u0275directiveInject(ContractInfoListService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExpiredContractListComponent, selectors: [["app-expired-contract-list"]], decls: 152, vars: 212, consts: [["eclTotalTpl", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-2"], [1, "form-label"], ["nz-input", "", "name", "eclContractNo", 3, "ngModelChange", "ngModel", "placeholder"], ["nz-input", "", "name", "eclEmpId", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "eclContractType", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["nzValue", "FULL_TIME", 3, "nzLabel"], ["nzValue", "PART_TIME", 3, "nzLabel"], ["nzValue", "INTERN", 3, "nzLabel"], ["nzValue", "CONSULTANT", 3, "nzLabel"], ["nz-input", "", "name", "eclDepartment", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "eclStartDateFrom", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "eclStartDateTo", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "eclEndDateFrom", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "eclEndDateTo", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "eclActivity", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["nzValue", "ACTIVE", 3, "nzLabel"], ["nzValue", "INACTIVE", 3, "nzLabel"], ["nz-input", "", "name", "eclWorkPosition", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "eclSalaryFrom", 1, "w-100", 3, "ngModelChange", "ngModel", "nzMin", "nzPlaceHolder"], ["name", "eclSalaryTo", 1, "w-100", 3, "ngModelChange", "ngModel", "nzMin", "nzPlaceHolder"], [1, "col-12", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], ["nz-button", "", "nzType", "default", "type", "button", 1, "ecl-btn-export", 3, "click", "nzLoading"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], ["nzShowSizeChanger", "", 1, "table-nowrap", 3, "nzPageIndexChange", "nzPageSizeChange", "nzData", "nzFrontPagination", "nzLoading", "nzTotal", "nzPageIndex", "nzPageSize", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "130px"], ["nzWidth", "110px"], ["nzWidth", "180px"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "120px"], ["nzWidth", "140px"], ["nzWidth", "130px", 1, "text-end"], ["nzWidth", "150px", 1, "text-center"], [4, "ngIf"], ["class", "ecl-row-clickable", 3, "click", 4, "ngFor", "ngForOf"], ["nzWidth", "60vw", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzBodyStyle", "nzFooter"], [4, "nzModalContent"], ["nzWidth", "900px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzBodyStyle", "nzOkLoading"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "13", 1, "text-center", "text-muted"], [1, "ecl-row-clickable", 3, "click"], [1, "text-center"], [1, "text-end"], [1, "badge"], [1, "text-center", 3, "click"], ["nz-button", "", "nzType", "text", "nzSize", "small", "title", "Xem chi ti\u1EBFt", 3, "click"], [1, "bx", "bx-show", "text-primary"], ["nz-button", "", "nzType", "text", "nzSize", "small", 3, "click", "title"], [1, "bx", "bx-up-arrow-circle", "text-warning"], ["nzBordered", "", "nzSize", "small", 3, "nzColumn"], [3, "nzTitle"], [3, "nzTitle", "nzSpan"], ["class", "row g-3", 4, "ngIf"], [1, "row", "g-3"], [1, "col-md-6"], [1, "text-primary", "mb-2"], [1, "mb-2"], [1, "text-danger"], ["nz-input", "", "name", "eclFormContractNo", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "eclFormEmpId", "readonly", "", 3, "ngModel"], ["class", "mb-2", 4, "ngIf"], ["nz-input", "", "name", "eclFormContractName", 3, "ngModelChange", "ngModel"], ["name", "eclFormContractType", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "eclFormContractTypeCode", 3, "ngModelChange", "ngModel"], ["name", "eclFormStartContractDate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "eclFormEndContractDate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "eclFormDeptNo", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "eclFormWorkPosition", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "eclFormPositionNo", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "eclFormPostGradeNo", 3, "ngModelChange", "ngModel"], ["name", "eclFormSalary", 1, "w-100", 3, "ngModelChange", "ngModel", "nzMin"], ["nz-input", "", "name", "eclFormWorkTime", 3, "ngModelChange", "ngModel"], ["name", "eclFormWorkHourType", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["nzValue", "OVERTIME", 3, "nzLabel"], ["nzValue", "FLEXIBLE", 3, "nzLabel"], ["name", "eclFormActivity", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "eclFormWorkContent", "rows", "3", 3, "ngModelChange", "ngModel", "placeholder"], ["nz-input", "", "name", "eclFormRemark", "rows", "2", 3, "ngModelChange", "ngModel", "placeholder"], ["nz-input", "", "name", "eclFormLocalName", "readonly", "", 3, "ngModel"]], template: function ExpiredContractListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "nz-card", 3)(3, "form", 4);
      \u0275\u0275listener("ngSubmit", function ExpiredContractListComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 5)(5, "label", 6);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 7);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ExpiredContractListComponent_Template_input_ngModelChange_8_listener($event) {
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
      \u0275\u0275twoWayListener("ngModelChange", function ExpiredContractListComponent_Template_input_ngModelChange_14_listener($event) {
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
      \u0275\u0275twoWayListener("ngModelChange", function ExpiredContractListComponent_Template_nz_select_ngModelChange_20_listener($event) {
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
      \u0275\u0275twoWayListener("ngModelChange", function ExpiredContractListComponent_Template_input_ngModelChange_34_listener($event) {
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
      \u0275\u0275twoWayListener("ngModelChange", function ExpiredContractListComponent_Template_nz_date_picker_ngModelChange_40_listener($event) {
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
      \u0275\u0275twoWayListener("ngModelChange", function ExpiredContractListComponent_Template_nz_date_picker_ngModelChange_45_listener($event) {
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
      \u0275\u0275twoWayListener("ngModelChange", function ExpiredContractListComponent_Template_nz_date_picker_ngModelChange_50_listener($event) {
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
      \u0275\u0275twoWayListener("ngModelChange", function ExpiredContractListComponent_Template_nz_date_picker_ngModelChange_55_listener($event) {
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
      \u0275\u0275twoWayListener("ngModelChange", function ExpiredContractListComponent_Template_nz_select_ngModelChange_60_listener($event) {
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
      \u0275\u0275twoWayListener("ngModelChange", function ExpiredContractListComponent_Template_input_ngModelChange_70_listener($event) {
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
      \u0275\u0275twoWayListener("ngModelChange", function ExpiredContractListComponent_Template_nz_input_number_ngModelChange_76_listener($event) {
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
      \u0275\u0275twoWayListener("ngModelChange", function ExpiredContractListComponent_Template_nz_input_number_ngModelChange_82_listener($event) {
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
      \u0275\u0275listener("click", function ExpiredContractListComponent_Template_button_click_89_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(90, "i", 29);
      \u0275\u0275text(91);
      \u0275\u0275pipe(92, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "button", 30);
      \u0275\u0275listener("click", function ExpiredContractListComponent_Template_button_click_93_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(94, "i", 31);
      \u0275\u0275text(95);
      \u0275\u0275pipe(96, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(97, "nz-card");
      \u0275\u0275template(98, ExpiredContractListComponent_nz_alert_98_Template, 1, 1, "nz-alert", 32);
      \u0275\u0275elementStart(99, "nz-table", 33);
      \u0275\u0275listener("nzPageIndexChange", function ExpiredContractListComponent_Template_nz_table_nzPageIndexChange_99_listener($event) {
        return ctx.onPageIndexChange($event);
      })("nzPageSizeChange", function ExpiredContractListComponent_Template_nz_table_nzPageSizeChange_99_listener($event) {
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
      \u0275\u0275elementStart(138, "th", 42);
      \u0275\u0275text(139);
      \u0275\u0275pipe(140, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(141, "tbody");
      \u0275\u0275template(142, ExpiredContractListComponent_tr_142_Template, 4, 4, "tr", 43)(143, ExpiredContractListComponent_tr_143_Template, 36, 32, "tr", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275template(144, ExpiredContractListComponent_ng_template_144_Template, 2, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(146, "nz-modal", 45);
      \u0275\u0275pipe(147, "translate");
      \u0275\u0275listener("nzOnCancel", function ExpiredContractListComponent_Template_nz_modal_nzOnCancel_146_listener() {
        return ctx.closeDetail();
      });
      \u0275\u0275template(148, ExpiredContractListComponent_ng_container_148_Template, 2, 1, "ng-container", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "nz-modal", 47);
      \u0275\u0275pipe(150, "translate");
      \u0275\u0275listener("nzOnCancel", function ExpiredContractListComponent_Template_nz_modal_nzOnCancel_149_listener() {
        return ctx.closeExtend();
      })("nzOnOk", function ExpiredContractListComponent_Template_nz_modal_nzOnOk_149_listener() {
        return ctx.saveExtend();
      });
      \u0275\u0275template(151, ExpiredContractListComponent_ng_container_151_Template, 2, 1, "ng-container", 46);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const eclTotalTpl_r10 = \u0275\u0275reference(145);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 77, "hrm.viewExpiredContract.title.contractNo", "S\u1ED1 h\u1EE3p \u0111\u1ED3ng"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.contractNo);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 80, "hrm.viewContract.title.contractNoPlaceholder", "Nh\u1EADp s\u1ED1 h\u1EE3p \u0111\u1ED3ng"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 83, "hrm.viewExpiredContract.title.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.empId);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(15, 86, "hrm.viewContract.title.empIdPlaceholder", "Nh\u1EADp m\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 89, "hrm.viewExpiredContract.title.contractType", "Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.contractType);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(21, 92, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(23, 95, "hrm.editContract.title.fullTime", "To\xE0n th\u1EDDi gian"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(25, 98, "hrm.editContract.title.partTime", "B\xE1n th\u1EDDi gian"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(27, 101, "hrm.editContract.title.intern", "Th\u1EF1c t\u1EADp"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(29, 104, "hrm.editContract.title.consultant", "T\u01B0 v\u1EA5n"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 107, "hrm.viewExpiredContract.title.dept", "Ph\xF2ng ban"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.department);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(35, 110, "hrm.viewContract.title.deptPlaceholder", "Nh\u1EADp ph\xF2ng ban"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 113, "hrm.viewContract.title.startDateFrom", "Ng\xE0y b\u1EAFt \u0111\u1EA7u t\u1EEB"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.startDateFrom);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 116, "hrm.viewContract.title.startDateTo", "Ng\xE0y b\u1EAFt \u0111\u1EA7u \u0111\u1EBFn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.startDateTo);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 119, "hrm.viewContract.title.endDateFrom", "Ng\xE0y k\u1EBFt th\xFAc t\u1EEB"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.endDateFrom);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 122, "hrm.viewContract.title.endDateTo", "Ng\xE0y k\u1EBFt th\xFAc \u0111\u1EBFn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.endDateTo);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(59, 125, "hrm.viewExpiredContract.title.activity", "Ho\u1EA1t \u0111\u1ED9ng"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.activity);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(61, 128, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(63, 131, "hrm.editContract.title.active", "Ho\u1EA1t \u0111\u1ED9ng"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(65, 134, "hrm.editContract.title.inactive", "Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 137, "hrm.viewExpiredContract.title.workPosition", "V\u1ECB tr\xED l\xE0m vi\u1EC7c"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.workPosition);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(71, 140, "hrm.viewContract.title.workPositionPlaceholder", "Nh\u1EADp v\u1ECB tr\xED l\xE0m vi\u1EC7c"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(75, 143, "hrm.viewContract.title.salaryFrom", "L\u01B0\u01A1ng t\u1EEB"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.salaryFrom);
      \u0275\u0275property("nzMin", 0)("nzPlaceHolder", \u0275\u0275pipeBind2(77, 146, "hrm.viewContract.title.salaryFromPlaceholder", "Nh\u1EADp l\u01B0\u01A1ng t\u1ED1i thi\u1EC3u"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(81, 149, "hrm.viewContract.title.salaryTo", "L\u01B0\u01A1ng \u0111\u1EBFn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.salaryTo);
      \u0275\u0275property("nzMin", 0)("nzPlaceHolder", \u0275\u0275pipeBind2(83, 152, "hrm.viewContract.title.salaryToPlaceholder", "Nh\u1EADp l\u01B0\u01A1ng t\u1ED1i \u0111a"));
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(88, 155, "hrm.viewContract.title.search", "T\xECm ki\u1EBFm"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(92, 158, "hrm.viewContract.title.clearFilter", "X\xF3a b\u1ED9 l\u1ECDc"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.exporting());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(96, 161, "common.export", "Xu\u1EA5t"), " Excel ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzFrontPagination", false)("nzLoading", ctx.loading())("nzTotal", ctx.recordsFiltered())("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", eclTotalTpl_r10)("nzScroll", \u0275\u0275pureFunction0(209, _c0));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(104, 164, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(107, 167, "hrm.viewExpiredContract.title.contractNo", "S\u1ED1 h\u1EE3p \u0111\u1ED3ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(110, 170, "hrm.viewExpiredContract.title.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(113, 173, "hrm.viewContract.title.contractName", "T\xEAn h\u1EE3p \u0111\u1ED3ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(116, 176, "hrm.viewExpiredContract.title.contractType", "Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(119, 179, "hrm.viewContract.title.startDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(122, 182, "hrm.viewContract.title.endDate", "Ng\xE0y k\u1EBFt th\xFAc"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(125, 185, "hrm.viewExpiredContract.title.dept", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(128, 188, "hrm.viewContract.title.position", "V\u1ECB tr\xED"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(131, 191, "hrm.viewContract.title.salary", "L\u01B0\u01A1ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(134, 194, "hrm.viewExpiredContract.title.activity", "Ho\u1EA1t \u0111\u1ED9ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(137, 197, "hrm.viewContract.title.createDate", "Ng\xE0y t\u1EA1o"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(140, 200, "common.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.rows());
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.detailVisible())("nzTitle", \u0275\u0275pipeBind2(147, 203, "hrm.viewContract.title.detailTitle", "Chi ti\u1EBFt h\u1EE3p \u0111\u1ED3ng"))("nzBodyStyle", \u0275\u0275pureFunction0(210, _c1))("nzFooter", null);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.extendVisible())("nzTitle", \u0275\u0275pipeBind2(150, 206, "expiredContract.action.extend", "Gia h\u1EA1n"))("nzBodyStyle", \u0275\u0275pureFunction0(211, _c1))("nzOkLoading", ctx.extending());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzInputNumberModule, NzInputNumberComponent, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzDatePickerModule, NzDatePickerComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzDescriptionsModule, NzDescriptionsComponent, NzDescriptionsItemComponent, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\n.ecl-row-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.ecl-row-clickable[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.ecl-btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=expired-contract-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpiredContractListComponent, [{
    type: Component,
    args: [{ selector: "app-expired-contract-list", standalone: true, imports: [
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
      NzDescriptionsModule,
      NzAlertModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm - \u0111\u1EE9ng im khi cu\u1ED9n (xem .sticky-filter-card trong styles.css) -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3" (ngSubmit)="search()">
        <div class="col-md-2">
          <label class="form-label">{{ 'hrm.viewExpiredContract.title.contractNo' | translate:'S\u1ED1 h\u1EE3p \u0111\u1ED3ng' }}</label>
          <input nz-input [(ngModel)]="contractNo" name="eclContractNo"
                 [placeholder]="'hrm.viewContract.title.contractNoPlaceholder' | translate:'Nh\u1EADp s\u1ED1 h\u1EE3p \u0111\u1ED3ng'">
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'hrm.viewExpiredContract.title.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</label>
          <input nz-input [(ngModel)]="empId" name="eclEmpId"
                 [placeholder]="'hrm.viewContract.title.empIdPlaceholder' | translate:'Nh\u1EADp m\xE3 nh\xE2n vi\xEAn'">
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'hrm.viewExpiredContract.title.contractType' | translate:'Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng' }}</label>
          <nz-select class="w-100" [(ngModel)]="contractType" name="eclContractType" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option nzValue="FULL_TIME" [nzLabel]="'hrm.editContract.title.fullTime' | translate:'To\xE0n th\u1EDDi gian'"></nz-option>
            <nz-option nzValue="PART_TIME" [nzLabel]="'hrm.editContract.title.partTime' | translate:'B\xE1n th\u1EDDi gian'"></nz-option>
            <nz-option nzValue="INTERN" [nzLabel]="'hrm.editContract.title.intern' | translate:'Th\u1EF1c t\u1EADp'"></nz-option>
            <nz-option nzValue="CONSULTANT" [nzLabel]="'hrm.editContract.title.consultant' | translate:'T\u01B0 v\u1EA5n'"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'hrm.viewExpiredContract.title.dept' | translate:'Ph\xF2ng ban' }}</label>
          <input nz-input [(ngModel)]="department" name="eclDepartment"
                 [placeholder]="'hrm.viewContract.title.deptPlaceholder' | translate:'Nh\u1EADp ph\xF2ng ban'">
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'hrm.viewContract.title.startDateFrom' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u t\u1EEB' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="startDateFrom" name="eclStartDateFrom" nzFormat="dd/MM/yyyy"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'hrm.viewContract.title.startDateTo' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u \u0111\u1EBFn' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="startDateTo" name="eclStartDateTo" nzFormat="dd/MM/yyyy"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'hrm.viewContract.title.endDateFrom' | translate:'Ng\xE0y k\u1EBFt th\xFAc t\u1EEB' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="endDateFrom" name="eclEndDateFrom" nzFormat="dd/MM/yyyy"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'hrm.viewContract.title.endDateTo' | translate:'Ng\xE0y k\u1EBFt th\xFAc \u0111\u1EBFn' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="endDateTo" name="eclEndDateTo" nzFormat="dd/MM/yyyy"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'hrm.viewExpiredContract.title.activity' | translate:'Ho\u1EA1t \u0111\u1ED9ng' }}</label>
          <nz-select class="w-100" [(ngModel)]="activity" name="eclActivity" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option nzValue="ACTIVE" [nzLabel]="'hrm.editContract.title.active' | translate:'Ho\u1EA1t \u0111\u1ED9ng'"></nz-option>
            <nz-option nzValue="INACTIVE" [nzLabel]="'hrm.editContract.title.inactive' | translate:'Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng'"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'hrm.viewExpiredContract.title.workPosition' | translate:'V\u1ECB tr\xED l\xE0m vi\u1EC7c' }}</label>
          <input nz-input [(ngModel)]="workPosition" name="eclWorkPosition"
                 [placeholder]="'hrm.viewContract.title.workPositionPlaceholder' | translate:'Nh\u1EADp v\u1ECB tr\xED l\xE0m vi\u1EC7c'">
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'hrm.viewContract.title.salaryFrom' | translate:'L\u01B0\u01A1ng t\u1EEB' }}</label>
          <nz-input-number class="w-100" [(ngModel)]="salaryFrom" name="eclSalaryFrom" [nzMin]="0"
                            [nzPlaceHolder]="'hrm.viewContract.title.salaryFromPlaceholder' | translate:'Nh\u1EADp l\u01B0\u01A1ng t\u1ED1i thi\u1EC3u'"></nz-input-number>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'hrm.viewContract.title.salaryTo' | translate:'L\u01B0\u01A1ng \u0111\u1EBFn' }}</label>
          <nz-input-number class="w-100" [(ngModel)]="salaryTo" name="eclSalaryTo" [nzMin]="0"
                            [nzPlaceHolder]="'hrm.viewContract.title.salaryToPlaceholder' | translate:'Nh\u1EADp l\u01B0\u01A1ng t\u1ED1i \u0111a'"></nz-input-number>
        </div>
        <div class="col-12 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'hrm.viewContract.title.search' | translate:'T\xECm ki\u1EBFm' }}
          </button>
          <button nz-button type="button" (click)="clearSearch()">
            <i class="bx bx-x"></i> {{ 'hrm.viewContract.title.clearFilter' | translate:'X\xF3a b\u1ED9 l\u1ECDc' }}
          </button>
          <button nz-button nzType="default" type="button" class="ecl-btn-export" [nzLoading]="exporting()" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'common.export' | translate:'Xu\u1EA5t' }} Excel
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <nz-table [nzData]="rows()" [nzFrontPagination]="false" [nzLoading]="loading()"
                [nzTotal]="recordsFiltered()" [nzPageIndex]="pageIndex" [nzPageSize]="pageSize"
                [nzPageSizeOptions]="pageSizeOptions" nzShowSizeChanger [nzShowTotal]="eclTotalTpl"
                (nzPageIndexChange)="onPageIndexChange($event)" (nzPageSizeChange)="onPageSizeChange($event)"
                [nzScroll]="{ x: '1450px' }" class="table-nowrap">
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th nzWidth="130px">{{ 'hrm.viewExpiredContract.title.contractNo' | translate:'S\u1ED1 h\u1EE3p \u0111\u1ED3ng' }}</th>
            <th nzWidth="110px">{{ 'hrm.viewExpiredContract.title.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
            <th nzWidth="180px">{{ 'hrm.viewContract.title.contractName' | translate:'T\xEAn h\u1EE3p \u0111\u1ED3ng' }}</th>
            <th nzWidth="130px">{{ 'hrm.viewExpiredContract.title.contractType' | translate:'Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'hrm.viewContract.title.startDate' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'hrm.viewContract.title.endDate' | translate:'Ng\xE0y k\u1EBFt th\xFAc' }}</th>
            <th nzWidth="120px">{{ 'hrm.viewExpiredContract.title.dept' | translate:'Ph\xF2ng ban' }}</th>
            <th nzWidth="140px">{{ 'hrm.viewContract.title.position' | translate:'V\u1ECB tr\xED' }}</th>
            <th class="text-end" nzWidth="130px">{{ 'hrm.viewContract.title.salary' | translate:'L\u01B0\u01A1ng' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'hrm.viewExpiredContract.title.activity' | translate:'Ho\u1EA1t \u0111\u1ED9ng' }}</th>
            <th class="text-center" nzWidth="150px">{{ 'hrm.viewContract.title.createDate' | translate:'Ng\xE0y t\u1EA1o' }}</th>
            <th class="text-center" nzWidth="150px">{{ 'common.action' | translate:'Thao t\xE1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="13" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of rows(); let i = index" class="ecl-row-clickable" (click)="openDetail(row)">
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
              <button nz-button nzType="text" nzSize="small" title="Xem chi ti\u1EBFt" (click)="openDetail(row)">
                <i class="bx bx-show text-primary"></i>
              </button>
              <button nz-button nzType="text" nzSize="small" [title]="'expiredContract.action.extend' | translate:'Gia h\u1EA1n'" (click)="openExtend(row)">
                <i class="bx bx-up-arrow-circle text-warning"></i> {{ 'expiredContract.action.extend' | translate:'Gia h\u1EA1n' }}
              </button>
            </td>
          </tr>
        </tbody>
        <ng-template #eclTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal xem chi ti\u1EBFt h\u1EE3p \u0111\u1ED3ng -->
<nz-modal [nzVisible]="detailVisible()" [nzTitle]="'hrm.viewContract.title.detailTitle' | translate:'Chi ti\u1EBFt h\u1EE3p \u0111\u1ED3ng'" nzWidth="60vw"
          [nzBodyStyle]="{ 'max-height': '75vh', 'overflow-y': 'auto' }"
          (nzOnCancel)="closeDetail()" [nzFooter]="null">
  <ng-container *nzModalContent>
    <ng-container *ngIf="detailRow() as row">
      <nz-descriptions nzBordered [nzColumn]="2" nzSize="small">
        <nz-descriptions-item [nzTitle]="'hrm.viewExpiredContract.title.contractNo' | translate:'S\u1ED1 h\u1EE3p \u0111\u1ED3ng'">{{ row.contractNo }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'hrm.viewContract.title.contractName' | translate:'T\xEAn h\u1EE3p \u0111\u1ED3ng'">{{ row.contractName }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'hrm.viewExpiredContract.title.empId' | translate:'M\xE3 nh\xE2n vi\xEAn'">{{ row.empId }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'common.empName' | translate:'H\u1ECD t\xEAn'">{{ row.localName }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'hrm.viewExpiredContract.title.contractType' | translate:'Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng'">{{ row.contractTypeName }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'hrm.editContract.title.contractTypeCode' | translate:'M\xE3 lo\u1EA1i h\u1EE3p \u0111\u1ED3ng'">{{ row.contractTypeCode }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'hrm.viewContract.title.startDate' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u'">{{ formatDisplayDate(row.startContractDate) }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'hrm.viewContract.title.endDate' | translate:'Ng\xE0y k\u1EBFt th\xFAc'">{{ formatDisplayDate(row.endContractDate) }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'hrm.viewExpiredContract.title.dept' | translate:'Ph\xF2ng ban'">{{ row.deptNo }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'hrm.viewContract.title.position' | translate:'V\u1ECB tr\xED'">{{ row.workPosition }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'hrm.viewContract.title.salary' | translate:'L\u01B0\u01A1ng'">{{ formatSalary(row.salary) }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'hrm.editContract.title.workTime' | translate:'Th\u1EDDi gian l\xE0m vi\u1EC7c'">{{ row.workTime }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'hrm.editContract.title.workHourType' | translate:'Lo\u1EA1i gi\u1EDD l\xE0m vi\u1EC7c'">{{ row.workHourType }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'hrm.viewExpiredContract.title.activity' | translate:'Ho\u1EA1t \u0111\u1ED9ng'">
          {{ row.activity === 'ACTIVE' ? ('hrm.editContract.title.active' | translate:'Ho\u1EA1t \u0111\u1ED9ng') : ('hrm.editContract.title.inactive' | translate:'Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng') }}
        </nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'hrm.viewContract.title.createDate' | translate:'Ng\xE0y t\u1EA1o'" [nzSpan]="2">{{ formatDisplayDateTime(row.createDate) }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'hrm.editContract.title.workContent' | translate:'N\u1ED9i dung c\xF4ng vi\u1EC7c'" [nzSpan]="2">{{ row.workContent || '-' }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'hrm.editContract.title.remark' | translate:'Ghi ch\xFA'" [nzSpan]="2">{{ row.remark || '-' }}</nz-descriptions-item>
      </nz-descriptions>
    </ng-container>
  </ng-container>
</nz-modal>

<!-- Modal Gia h\u1EA1n h\u1EE3p \u0111\u1ED3ng (Th\xEAm m\u1EDBi h\u1EE3p \u0111\u1ED3ng, \u0111i\u1EC1n s\u1EB5n d\u1EEF li\u1EC7u t\u1EEB h\u1EE3p \u0111\u1ED3ng c\u0169) -->
<nz-modal [nzVisible]="extendVisible()" [nzTitle]="'expiredContract.action.extend' | translate:'Gia h\u1EA1n'" nzWidth="900px"
          [nzBodyStyle]="{ 'max-height': '75vh', 'overflow-y': 'auto' }"
          (nzOnCancel)="closeExtend()" (nzOnOk)="saveExtend()" [nzOkLoading]="extending()">
  <ng-container *nzModalContent>
    <div class="row g-3" *ngIf="form as f">
      <div class="col-md-6">
        <h6 class="text-primary mb-2">{{ 'hrm.editContract.title.basicInfo' | translate:'Th\xF4ng tin c\u01A1 b\u1EA3n' }}</h6>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.contractNo' | translate:'S\u1ED1 h\u1EE3p \u0111\u1ED3ng' }} <span class="text-danger">*</span></label>
          <input nz-input [(ngModel)]="f.contractNo" name="eclFormContractNo">
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</label>
          <input nz-input [ngModel]="f.empId" name="eclFormEmpId" readonly>
        </div>

        <div class="mb-2" *ngIf="f.localName">
          <label class="form-label">{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</label>
          <input nz-input [ngModel]="f.localName" name="eclFormLocalName" readonly>
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.contractName' | translate:'T\xEAn h\u1EE3p \u0111\u1ED3ng' }} <span class="text-danger">*</span></label>
          <input nz-input [(ngModel)]="f.contractName" name="eclFormContractName">
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.contractType' | translate:'Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng' }}</label>
          <nz-select class="w-100" [(ngModel)]="f.contractType" name="eclFormContractType">
            <nz-option nzValue="FULL_TIME" [nzLabel]="'hrm.editContract.title.fullTime' | translate:'To\xE0n th\u1EDDi gian'"></nz-option>
            <nz-option nzValue="PART_TIME" [nzLabel]="'hrm.editContract.title.partTime' | translate:'B\xE1n th\u1EDDi gian'"></nz-option>
            <nz-option nzValue="INTERN" [nzLabel]="'hrm.editContract.title.intern' | translate:'Th\u1EF1c t\u1EADp'"></nz-option>
            <nz-option nzValue="CONSULTANT" [nzLabel]="'hrm.editContract.title.consultant' | translate:'T\u01B0 v\u1EA5n'"></nz-option>
          </nz-select>
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.contractTypeCode' | translate:'M\xE3 lo\u1EA1i h\u1EE3p \u0111\u1ED3ng' }}</label>
          <input nz-input [(ngModel)]="f.contractTypeCode" name="eclFormContractTypeCode">
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.startContractDate' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u h\u1EE3p \u0111\u1ED3ng' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="f.startContractDate" name="eclFormStartContractDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.endContractDate' | translate:'Ng\xE0y k\u1EBFt th\xFAc h\u1EE3p \u0111\u1ED3ng' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="f.endContractDate" name="eclFormEndContractDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
        </div>
      </div>

      <div class="col-md-6">
        <h6 class="text-primary mb-2">{{ 'hrm.editContract.title.workInfo' | translate:'Th\xF4ng tin c\xF4ng vi\u1EC7c' }}</h6>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.dept' | translate:'Ph\xF2ng ban' }}</label>
          <input nz-input [(ngModel)]="f.deptNo" name="eclFormDeptNo">
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.workPosition' | translate:'V\u1ECB tr\xED l\xE0m vi\u1EC7c' }}</label>
          <input nz-input [(ngModel)]="f.workPosition" name="eclFormWorkPosition">
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.positionNo' | translate:'M\xE3 ch\u1EE9c v\u1EE5' }}</label>
          <input nz-input [(ngModel)]="f.positionNo" name="eclFormPositionNo">
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.postGradeNo' | translate:'M\xE3 c\u1EA5p b\u1EADc' }}</label>
          <input nz-input [(ngModel)]="f.postGradeNo" name="eclFormPostGradeNo">
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.salary' | translate:'L\u01B0\u01A1ng' }}</label>
          <nz-input-number class="w-100" [(ngModel)]="f.salary" name="eclFormSalary" [nzMin]="0"></nz-input-number>
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.workTime' | translate:'Th\u1EDDi gian l\xE0m vi\u1EC7c' }}</label>
          <input nz-input [(ngModel)]="f.workTime" name="eclFormWorkTime">
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.workHourType' | translate:'Lo\u1EA1i gi\u1EDD l\xE0m vi\u1EC7c' }}</label>
          <nz-select class="w-100" [(ngModel)]="f.workHourType" name="eclFormWorkHourType" nzAllowClear
                     [nzPlaceHolder]="'hrm.editContract.title.selectWorkHourType' | translate:'Ch\u1ECDn lo\u1EA1i gi\u1EDD l\xE0m vi\u1EC7c'">
            <nz-option nzValue="FULL_TIME" [nzLabel]="'hrm.editContract.title.fullTime' | translate:'To\xE0n th\u1EDDi gian'"></nz-option>
            <nz-option nzValue="PART_TIME" [nzLabel]="'hrm.editContract.title.partTime' | translate:'B\xE1n th\u1EDDi gian'"></nz-option>
            <nz-option nzValue="OVERTIME" [nzLabel]="'hrm.editContract.title.overtime' | translate:'T\u0103ng ca'"></nz-option>
            <nz-option nzValue="FLEXIBLE" [nzLabel]="'hrm.editContract.title.flexible' | translate:'Linh ho\u1EA1t'"></nz-option>
          </nz-select>
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.activity' | translate:'Tr\u1EA1ng th\xE1i ho\u1EA1t \u0111\u1ED9ng' }}</label>
          <nz-select class="w-100" [(ngModel)]="f.activity" name="eclFormActivity">
            <nz-option nzValue="ACTIVE" [nzLabel]="'hrm.editContract.title.active' | translate:'Ho\u1EA1t \u0111\u1ED9ng'"></nz-option>
            <nz-option nzValue="INACTIVE" [nzLabel]="'hrm.editContract.title.inactive' | translate:'Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng'"></nz-option>
          </nz-select>
        </div>
      </div>

      <div class="col-12">
        <h6 class="text-primary mb-2">{{ 'hrm.editContract.title.contentAndRemark' | translate:'N\u1ED9i dung v\xE0 ghi ch\xFA' }}</h6>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.workContent' | translate:'N\u1ED9i dung c\xF4ng vi\u1EC7c' }}</label>
          <textarea nz-input [(ngModel)]="f.workContent" name="eclFormWorkContent" rows="3"
                    [placeholder]="'hrm.editContract.title.workContentPlaceholder' | translate:'M\xF4 t\u1EA3 chi ti\u1EBFt n\u1ED9i dung c\xF4ng vi\u1EC7c...'"></textarea>
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.remark' | translate:'Ghi ch\xFA' }}</label>
          <textarea nz-input [(ngModel)]="f.remark" name="eclFormRemark" rows="2"
                    [placeholder]="'hrm.editContract.title.remarkPlaceholder' | translate:'Ghi ch\xFA th\xEAm v\u1EC1 h\u1EE3p \u0111\u1ED3ng...'"></textarea>
        </div>
      </div>
    </div>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/expired-contract-list/expired-contract-list.component.css */\n.ecl-row-clickable {\n  cursor: pointer;\n}\n.ecl-row-clickable:hover {\n  background: #fafafa;\n}\n.ecl-btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=expired-contract-list.component.css.map */\n"] }]
  }], () => [{ type: ContractInfoListService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExpiredContractListComponent, { className: "ExpiredContractListComponent", filePath: "src/app/expired-contract-list/expired-contract-list.component.ts", lineNumber: 132 });
})();
export {
  ExpiredContractListComponent
};
//# debugId=dc06f47b-b34a-59d2-9f06-3f3be50e3c71
//# sourceMappingURL=chunk-A4JZ6FQ2.js.map
