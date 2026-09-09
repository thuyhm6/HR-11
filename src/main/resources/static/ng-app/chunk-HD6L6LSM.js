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
  __spreadValues,
  computed,
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

// src/app/contract-info-list/contract-info-list.component.ts
var _c0 = () => ({ x: "1500px" });
var _c1 = () => ({ "max-height": "75vh", "overflow-y": "auto" });
function ContractInfoListComponent_nz_alert_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 53);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ContractInfoListComponent_tr_146_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 54);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ContractInfoListComponent_tr_147_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 55);
    \u0275\u0275listener("click", function ContractInfoListComponent_tr_147_Template_tr_click_0_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDetail(row_r4));
    });
    \u0275\u0275elementStart(1, "td", 56);
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
    \u0275\u0275elementStart(11, "td", 56);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 56);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 57);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 56)(22, "span", 58);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "td", 56);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "td", 59);
    \u0275\u0275listener("click", function ContractInfoListComponent_tr_147_Template_td_click_28_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(29, "button", 60);
    \u0275\u0275listener("click", function ContractInfoListComponent_tr_147_Template_button_click_29_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditModal(row_r4));
    });
    \u0275\u0275element(30, "i", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 62);
    \u0275\u0275listener("click", function ContractInfoListComponent_tr_147_Template_button_click_31_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDeleteConfirm(row_r4));
    });
    \u0275\u0275element(32, "i", 63);
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
function ContractInfoListComponent_ng_template_148_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r6 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r6, " ");
  }
}
function ContractInfoListComponent_ng_container_152_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "nz-descriptions", 64)(2, "nz-descriptions-item", 65);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "nz-descriptions-item", 65);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "nz-descriptions-item", 65);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "nz-descriptions-item", 65);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "nz-descriptions-item", 65);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "nz-descriptions-item", 65);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "nz-descriptions-item", 65);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "nz-descriptions-item", 65);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "nz-descriptions-item", 65);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "nz-descriptions-item", 65);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "nz-descriptions-item", 65);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "nz-descriptions-item", 65);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "nz-descriptions-item", 65);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "nz-descriptions-item", 65);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "nz-descriptions-item", 66);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "nz-descriptions-item", 66);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275text(51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "nz-descriptions-item", 66);
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
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(3, 38, "hrm.viewContract.title.contractNo", "S\u1ED1 h\u1EE3p \u0111\u1ED3ng"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.contractNo);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(6, 41, "hrm.viewContract.title.contractName", "T\xEAn h\u1EE3p \u0111\u1ED3ng"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.contractName);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(9, 44, "hrm.viewContract.title.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.empId);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(12, 47, "common.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.localName);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(15, 50, "hrm.viewContract.title.contractType", "Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng"));
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
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(27, 62, "hrm.viewContract.title.dept", "Ph\xF2ng ban"));
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
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(42, 77, "hrm.viewContract.title.activity", "Ho\u1EA1t \u0111\u1ED9ng"));
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
function ContractInfoListComponent_ng_container_152_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ContractInfoListComponent_ng_container_152_ng_container_1_Template, 55, 95, "ng-container", 46);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.detailRow());
  }
}
function ContractInfoListComponent_ng_container_154_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 71);
    \u0275\u0275text(1, "*");
    \u0275\u0275elementEnd();
  }
}
function ContractInfoListComponent_ng_container_154_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 98);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ContractInfoListComponent_ng_container_154_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openPicker());
    });
    \u0275\u0275element(2, "i", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind2(1, 1, "tempEmp.pickEmp", "Ch\u1ECDn nh\xE2n vi\xEAn"));
  }
}
function ContractInfoListComponent_ng_container_154_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "label", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 99);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "common.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.localName);
    \u0275\u0275control();
  }
}
function ContractInfoListComponent_ng_container_154_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 67)(2, "div", 68)(3, "h6", 69);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 70)(7, "label", 7);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementStart(10, "span", 71);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "input", 72);
    \u0275\u0275twoWayListener("ngModelChange", function ContractInfoListComponent_ng_container_154_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.contractNo, $event) || (ctx_r1.form.contractNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 70)(14, "label", 7);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275template(17, ContractInfoListComponent_ng_container_154_span_17_Template, 2, 0, "span", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 74);
    \u0275\u0275element(19, "input", 75);
    \u0275\u0275controlCreate();
    \u0275\u0275template(20, ContractInfoListComponent_ng_container_154_button_20_Template, 3, 4, "button", 76);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, ContractInfoListComponent_ng_container_154_div_21_Template, 5, 5, "div", 77);
    \u0275\u0275elementStart(22, "div", 70)(23, "label", 7);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementStart(26, "span", 71);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "input", 78);
    \u0275\u0275twoWayListener("ngModelChange", function ContractInfoListComponent_ng_container_154_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.contractName, $event) || (ctx_r1.form.contractName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 70)(30, "label", 7);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "nz-select", 79);
    \u0275\u0275twoWayListener("ngModelChange", function ContractInfoListComponent_ng_container_154_Template_nz_select_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.contractType, $event) || (ctx_r1.form.contractType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(34, "nz-option", 11);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275element(36, "nz-option", 12);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275element(38, "nz-option", 13);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275element(40, "nz-option", 14);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 70)(43, "label", 7);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function ContractInfoListComponent_ng_container_154_Template_input_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.contractTypeCode, $event) || (ctx_r1.form.contractTypeCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 70)(48, "label", 7);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "nz-date-picker", 81);
    \u0275\u0275twoWayListener("ngModelChange", function ContractInfoListComponent_ng_container_154_Template_nz_date_picker_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.startContractDate, $event) || (ctx_r1.form.startContractDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 70)(53, "label", 7);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "nz-date-picker", 82);
    \u0275\u0275twoWayListener("ngModelChange", function ContractInfoListComponent_ng_container_154_Template_nz_date_picker_ngModelChange_56_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.endContractDate, $event) || (ctx_r1.form.endContractDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 70)(58, "label", 7);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "nz-date-picker", 83);
    \u0275\u0275twoWayListener("ngModelChange", function ContractInfoListComponent_ng_container_154_Template_nz_date_picker_ngModelChange_61_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.changeDate, $event) || (ctx_r1.form.changeDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 68)(63, "h6", 69);
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 70)(67, "label", 7);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "input", 84);
    \u0275\u0275twoWayListener("ngModelChange", function ContractInfoListComponent_ng_container_154_Template_input_ngModelChange_70_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.deptNo, $event) || (ctx_r1.form.deptNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 70)(72, "label", 7);
    \u0275\u0275text(73);
    \u0275\u0275pipe(74, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "input", 85);
    \u0275\u0275twoWayListener("ngModelChange", function ContractInfoListComponent_ng_container_154_Template_input_ngModelChange_75_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.workPosition, $event) || (ctx_r1.form.workPosition = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 70)(77, "label", 7);
    \u0275\u0275text(78);
    \u0275\u0275pipe(79, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "input", 86);
    \u0275\u0275twoWayListener("ngModelChange", function ContractInfoListComponent_ng_container_154_Template_input_ngModelChange_80_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.positionNo, $event) || (ctx_r1.form.positionNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "div", 70)(82, "label", 7);
    \u0275\u0275text(83);
    \u0275\u0275pipe(84, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "input", 87);
    \u0275\u0275twoWayListener("ngModelChange", function ContractInfoListComponent_ng_container_154_Template_input_ngModelChange_85_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.postGradeNo, $event) || (ctx_r1.form.postGradeNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "div", 70)(87, "label", 7);
    \u0275\u0275text(88);
    \u0275\u0275pipe(89, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "nz-input-number", 88);
    \u0275\u0275twoWayListener("ngModelChange", function ContractInfoListComponent_ng_container_154_Template_nz_input_number_ngModelChange_90_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.salary, $event) || (ctx_r1.form.salary = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "div", 70)(92, "label", 7);
    \u0275\u0275text(93);
    \u0275\u0275pipe(94, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "input", 89);
    \u0275\u0275twoWayListener("ngModelChange", function ContractInfoListComponent_ng_container_154_Template_input_ngModelChange_95_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.workTime, $event) || (ctx_r1.form.workTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "div", 70)(97, "label", 7);
    \u0275\u0275text(98);
    \u0275\u0275pipe(99, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "nz-select", 90);
    \u0275\u0275pipe(101, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ContractInfoListComponent_ng_container_154_Template_nz_select_ngModelChange_100_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.workHourType, $event) || (ctx_r1.form.workHourType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(102, "nz-option", 11);
    \u0275\u0275pipe(103, "translate");
    \u0275\u0275element(104, "nz-option", 12);
    \u0275\u0275pipe(105, "translate");
    \u0275\u0275element(106, "nz-option", 91);
    \u0275\u0275pipe(107, "translate");
    \u0275\u0275element(108, "nz-option", 92);
    \u0275\u0275pipe(109, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "div", 70)(111, "label", 7);
    \u0275\u0275text(112);
    \u0275\u0275pipe(113, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "input", 93);
    \u0275\u0275twoWayListener("ngModelChange", function ContractInfoListComponent_ng_container_154_Template_input_ngModelChange_114_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.totalPeriod, $event) || (ctx_r1.form.totalPeriod = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "div", 70)(116, "label", 7);
    \u0275\u0275text(117);
    \u0275\u0275pipe(118, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "input", 94);
    \u0275\u0275twoWayListener("ngModelChange", function ContractInfoListComponent_ng_container_154_Template_input_ngModelChange_119_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.totalPeriod08, $event) || (ctx_r1.form.totalPeriod08 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "div", 70)(121, "label", 7);
    \u0275\u0275text(122);
    \u0275\u0275pipe(123, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "nz-select", 95);
    \u0275\u0275twoWayListener("ngModelChange", function ContractInfoListComponent_ng_container_154_Template_nz_select_ngModelChange_124_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.activity, $event) || (ctx_r1.form.activity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(125, "nz-option", 21);
    \u0275\u0275pipe(126, "translate");
    \u0275\u0275element(127, "nz-option", 22);
    \u0275\u0275pipe(128, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(129, "div", 3)(130, "h6", 69);
    \u0275\u0275text(131);
    \u0275\u0275pipe(132, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(133, "div", 70)(134, "label", 7);
    \u0275\u0275text(135);
    \u0275\u0275pipe(136, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "textarea", 96);
    \u0275\u0275pipe(138, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ContractInfoListComponent_ng_container_154_Template_textarea_ngModelChange_137_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.workContent, $event) || (ctx_r1.form.workContent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "div", 70)(140, "label", 7);
    \u0275\u0275text(141);
    \u0275\u0275pipe(142, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(143, "textarea", 97);
    \u0275\u0275pipe(144, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ContractInfoListComponent_ng_container_154_Template_textarea_ngModelChange_143_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.remark, $event) || (ctx_r1.form.remark = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 61, "hrm.editContract.title.basicInfo", "Th\xF4ng tin c\u01A1 b\u1EA3n"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(9, 64, "hrm.editContract.title.contractNo", "S\u1ED1 h\u1EE3p \u0111\u1ED3ng"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.contractNo);
    \u0275\u0275property("readOnly", !ctx_r1.isNew());
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(16, 67, "hrm.editContract.title.empId", "M\xE3 nh\xE2n vi\xEAn"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isNew());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form.empId);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isNew());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.localName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(25, 70, "hrm.editContract.title.contractName", "T\xEAn h\u1EE3p \u0111\u1ED3ng"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.contractName);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 73, "hrm.editContract.title.contractType", "Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.contractType);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(35, 76, "hrm.editContract.title.fullTime", "To\xE0n th\u1EDDi gian"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(37, 79, "hrm.editContract.title.partTime", "B\xE1n th\u1EDDi gian"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(39, 82, "hrm.editContract.title.intern", "Th\u1EF1c t\u1EADp"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(41, 85, "hrm.editContract.title.consultant", "T\u01B0 v\u1EA5n"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 88, "hrm.editContract.title.contractTypeCode", "M\xE3 lo\u1EA1i h\u1EE3p \u0111\u1ED3ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.contractTypeCode);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 91, "hrm.editContract.title.startContractDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u h\u1EE3p \u0111\u1ED3ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.startContractDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(55, 94, "hrm.editContract.title.endContractDate", "Ng\xE0y k\u1EBFt th\xFAc h\u1EE3p \u0111\u1ED3ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.endContractDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(60, 97, "hrm.editContract.title.changeDate", "Ng\xE0y thay \u0111\u1ED5i"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.changeDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(65, 100, "hrm.editContract.title.workInfo", "Th\xF4ng tin c\xF4ng vi\u1EC7c"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 103, "hrm.editContract.title.dept", "Ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.deptNo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(74, 106, "hrm.editContract.title.workPosition", "V\u1ECB tr\xED l\xE0m vi\u1EC7c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.workPosition);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(79, 109, "hrm.editContract.title.positionNo", "M\xE3 ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.positionNo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(84, 112, "hrm.editContract.title.postGradeNo", "M\xE3 c\u1EA5p b\u1EADc"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.postGradeNo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(89, 115, "hrm.editContract.title.salary", "L\u01B0\u01A1ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.salary);
    \u0275\u0275property("nzMin", 0);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(94, 118, "hrm.editContract.title.workTime", "Th\u1EDDi gian l\xE0m vi\u1EC7c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.workTime);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(99, 121, "hrm.editContract.title.workHourType", "Lo\u1EA1i gi\u1EDD l\xE0m vi\u1EC7c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.workHourType);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(101, 124, "hrm.editContract.title.selectWorkHourType", "Ch\u1ECDn lo\u1EA1i gi\u1EDD l\xE0m vi\u1EC7c"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(103, 127, "hrm.editContract.title.fullTime", "To\xE0n th\u1EDDi gian"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(105, 130, "hrm.editContract.title.partTime", "B\xE1n th\u1EDDi gian"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(107, 133, "hrm.editContract.title.overtime", "T\u0103ng ca"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(109, 136, "hrm.editContract.title.flexible", "Linh ho\u1EA1t"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(113, 139, "hrm.editContract.title.totalPeriod", "T\u1ED5ng th\u1EDDi gian"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.totalPeriod);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(118, 142, "hrm.editContract.title.totalPeriod08", "T\u1ED5ng th\u1EDDi gian 08"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.totalPeriod08);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(123, 145, "hrm.editContract.title.activity", "Tr\u1EA1ng th\xE1i ho\u1EA1t \u0111\u1ED9ng"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.activity);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(126, 148, "hrm.editContract.title.active", "Ho\u1EA1t \u0111\u1ED9ng"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(128, 151, "hrm.editContract.title.inactive", "Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(132, 154, "hrm.editContract.title.contentAndRemark", "N\u1ED9i dung v\xE0 ghi ch\xFA"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(136, 157, "hrm.editContract.title.workContent", "N\u1ED9i dung c\xF4ng vi\u1EC7c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.workContent);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(138, 160, "hrm.editContract.title.workContentPlaceholder", "M\xF4 t\u1EA3 chi ti\u1EBFt n\u1ED9i dung c\xF4ng vi\u1EC7c..."));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(142, 163, "hrm.editContract.title.remark", "Ghi ch\xFA"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.remark);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(144, 166, "hrm.editContract.title.remarkPlaceholder", "Ghi ch\xFA th\xEAm v\u1EC1 h\u1EE3p \u0111\u1ED3ng..."));
    \u0275\u0275control();
  }
}
function ContractInfoListComponent_ng_container_157_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 55);
    \u0275\u0275listener("click", function ContractInfoListComponent_ng_container_157_tr_33_Template_tr_click_0_listener() {
      const row_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectPickedEmployee(row_r12));
    });
    \u0275\u0275elementStart(1, "td", 56);
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
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r13 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r12.empId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r12.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r12.deptName || row_r12.deptNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r12.position);
  }
}
function ContractInfoListComponent_ng_container_157_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 100);
    \u0275\u0275listener("ngSubmit", function ContractInfoListComponent_ng_container_157_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pickerSearch());
    });
    \u0275\u0275elementStart(2, "div", 101)(3, "label", 7);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 102);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ContractInfoListComponent_ng_container_157_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pickerKeyword, $event) || (ctx_r1.pickerKeyword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function ContractInfoListComponent_ng_container_157_Template_input_keydown_enter_6_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r1.pickerSearch());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 103)(9, "button", 104);
    \u0275\u0275element(10, "i", 30);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "nz-table", 105, 1)(15, "thead")(16, "tr")(17, "th", 37);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 39);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "tbody");
    \u0275\u0275template(33, ContractInfoListComponent_ng_container_157_tr_33_Template, 11, 5, "tr", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cilPickerTable_r14 = \u0275\u0275reference(14);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 13, "empSearch.field.keyword", "M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pickerKeyword);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(7, 16, "empSearch.placeholder.keyword", "Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn"));
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 19, "hrm.viewContract.title.search", "T\xECm ki\u1EBFm"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("nzData", ctx_r1.pickerRows())("nzLoading", ctx_r1.pickerLoading())("nzPageSize", 10);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 22, "empSearch.col.no", "STT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 25, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 28, "common.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 31, "common.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 34, "epi.field.position", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", cilPickerTable_r14.data);
  }
}
function ContractInfoListComponent_ng_container_162_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 106);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 107);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "hrm.viewContract.title.deleteConfirmContent", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a h\u1EE3p \u0111\u1ED3ng n\xE0y? H\xE0nh \u0111\u1ED9ng n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c!"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.deleteTargetName);
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
  "hrm.viewContract.title.deleteConfirmContent",
  "hrm.viewContract.title.validateContractNo",
  "hrm.viewContract.title.validateContractName",
  "hrm.viewContract.title.detailTitle",
  "hrm.editContract.title.editTitle",
  "hrm.editContract.title.addTitle",
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
  "hrm.editContract.title.addNew",
  "hrm.editContract.title.search",
  "common.selectAll",
  "common.stt",
  "common.action",
  "common.confirm",
  "common.cancel",
  "common.close",
  "common.export",
  "common.loadFail",
  "common.saveFail",
  "common.deleteFail",
  "common.noData",
  "common.totalRows",
  "common.empId",
  "common.empName",
  "common.deptName",
  "alert.message.add_success",
  "alert.message.update_success",
  "alert.message.delete_success",
  "tempEmp.validateEmp",
  "tempEmp.pickEmp",
  "empSearch.title",
  "empSearch.field.keyword",
  "empSearch.placeholder.keyword",
  "empSearch.col.no",
  "epi.field.position"
];
var PAGE_SIZE_OPTIONS = [10, 25, 50, 100];
var EMPTY_FORM = {
  contractNo: "",
  personId: "",
  empId: "",
  localName: "",
  contractName: "",
  contractType: "FULL_TIME",
  contractTypeCode: "",
  startContractDate: null,
  endContractDate: null,
  changeDate: null,
  deptNo: "",
  workPosition: "",
  positionNo: "",
  postGradeNo: "",
  salary: null,
  workTime: "",
  workHourType: "",
  totalPeriod: "",
  totalPeriod08: "",
  activity: "ACTIVE",
  workContent: "",
  remark: ""
};
var ContractInfoListComponent = class _ContractInfoListComponent {
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
    () => this.isNew() ? this.i18n.t("hrm.editContract.title.addTitle", "Th\xEAm m\u1EDBi h\u1EE3p \u0111\u1ED3ng") : this.i18n.t("hrm.editContract.title.editTitle", "Ch\u1EC9nh s\u1EEDa th\xF4ng tin h\u1EE3p \u0111\u1ED3ng"),
    ...ngDevMode ? [{ debugName: "modalTitle" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = __spreadValues({}, EMPTY_FORM);
  pickerVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "pickerVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pickerRows = signal(
    [],
    ...ngDevMode ? [{ debugName: "pickerRows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pickerLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "pickerLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pickerKeyword = "";
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
  // ==================== Xem chi tiết ====================
  openDetail(row) {
    this.detailRow.set(row);
    this.detailVisible.set(true);
  }
  closeDetail() {
    this.detailVisible.set(false);
  }
  // ==================== Modal Thêm mới / Chỉnh sửa ====================
  openAddModal() {
    this.isNew.set(true);
    this.form = __spreadValues({}, EMPTY_FORM);
    this.modalVisible.set(true);
  }
  openEditModal(row) {
    this.isNew.set(false);
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
    if (!this.form.contractNo.trim()) {
      this.message.error(this.i18n.t("hrm.viewContract.title.validateContractNo", "Vui l\xF2ng nh\u1EADp s\u1ED1 h\u1EE3p \u0111\u1ED3ng!"));
      return;
    }
    if (!this.form.contractName.trim()) {
      this.message.error(this.i18n.t("hrm.viewContract.title.validateContractName", "Vui l\xF2ng nh\u1EADp t\xEAn h\u1EE3p \u0111\u1ED3ng!"));
      return;
    }
    if (this.isNew() && !this.form.personId) {
      this.message.error(this.i18n.t("tempEmp.validateEmp", "Vui l\xF2ng ch\u1ECDn nh\xE2n vi\xEAn!"));
      return;
    }
    const payload = {
      contractNo: this.form.contractNo.trim(),
      personId: this.form.personId,
      contractTypeCode: this.form.contractTypeCode,
      contractType: this.form.contractType,
      startContractDate: this.formatYmd(this.form.startContractDate),
      endContractDate: this.formatYmd(this.form.endContractDate),
      changeDate: this.formatYmd(this.form.changeDate),
      deptNo: this.form.deptNo,
      workPosition: this.form.workPosition,
      positionNo: this.form.positionNo,
      postGradeNo: this.form.postGradeNo,
      salary: this.form.salary,
      workTime: this.form.workTime,
      workHourType: this.form.workHourType,
      totalPeriod: this.form.totalPeriod,
      totalPeriod08: this.form.totalPeriod08,
      activity: this.form.activity,
      workContent: this.form.workContent,
      remark: this.form.remark
    };
    this.saving.set(true);
    const request$ = this.isNew() ? this.api.addContract(payload) : this.api.updateContract(payload);
    request$.subscribe({
      next: () => this.onSaveSuccess(this.isNew() ? this.i18n.t("alert.message.add_success", "Th\xEAm m\u1EDBi th\xE0nh c\xF4ng!") : this.i18n.t("alert.message.update_success", "C\u1EADp nh\u1EADt th\xE0nh c\xF4ng!")),
      error: () => this.onSaveError()
    });
  }
  onSaveSuccess(msg) {
    this.saving.set(false);
    this.modalVisible.set(false);
    this.message.success(msg);
    this.loadPage();
  }
  onSaveError() {
    this.saving.set(false);
    this.message.error(this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!"));
  }
  // ==================== Modal chọn nhân viên (chỉ dùng khi thêm mới) ====================
  openPicker() {
    this.pickerKeyword = "";
    this.pickerRows.set([]);
    this.pickerVisible.set(true);
  }
  closePicker() {
    this.pickerVisible.set(false);
  }
  pickerSearch() {
    this.pickerLoading.set(true);
    this.api.searchEmployees(this.pickerKeyword.trim()).subscribe({
      next: (rows) => {
        this.pickerRows.set(rows ?? []);
        this.pickerLoading.set(false);
      },
      error: () => {
        this.pickerRows.set([]);
        this.pickerLoading.set(false);
        this.message.error(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  selectPickedEmployee(emp) {
    this.form.personId = emp.personId;
    this.form.empId = emp.empId;
    this.form.localName = emp.localName;
    if (!this.form.deptNo)
      this.form.deptNo = emp.deptNo;
    if (!this.form.workPosition)
      this.form.workPosition = emp.position;
    this.pickerVisible.set(false);
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
    return this.deleteTarget ? `${this.deleteTarget.contractNo} - ${this.deleteTarget.contractName || ""}` : "";
  }
  confirmDelete() {
    if (!this.deleteTarget)
      return;
    this.deleting.set(true);
    this.api.deleteContract(this.deleteTarget.contractNo).subscribe({
      next: () => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.message.success(this.i18n.t("alert.message.delete_success", "X\xF3a th\xE0nh c\xF4ng!"));
        this.loadPage();
      },
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t("common.deleteFail", "X\xF3a th\u1EA5t b\u1EA1i!"));
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
    utils.book_append_sheet(workbook, worksheet, "DanhSachHopDong");
    writeFileSync(workbook, "danh_sach_hop_dong.xlsx");
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
  static \u0275fac = function ContractInfoListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContractInfoListComponent)(\u0275\u0275directiveInject(ContractInfoListService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContractInfoListComponent, selectors: [["app-contract-info-list"]], decls: 163, vars: 233, consts: [["cilTotalTpl", ""], ["cilPickerTable", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-2"], [1, "form-label"], ["nz-input", "", "name", "cilContractNo", 3, "ngModelChange", "ngModel", "placeholder"], ["nz-input", "", "name", "cilEmpId", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "cilContractType", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["nzValue", "FULL_TIME", 3, "nzLabel"], ["nzValue", "PART_TIME", 3, "nzLabel"], ["nzValue", "INTERN", 3, "nzLabel"], ["nzValue", "CONSULTANT", 3, "nzLabel"], ["nz-input", "", "name", "cilDepartment", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "cilStartDateFrom", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "cilStartDateTo", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "cilEndDateFrom", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "cilEndDateTo", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "cilActivity", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["nzValue", "ACTIVE", 3, "nzLabel"], ["nzValue", "INACTIVE", 3, "nzLabel"], ["nz-input", "", "name", "cilWorkPosition", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "cilSalaryFrom", 1, "w-100", 3, "ngModelChange", "ngModel", "nzMin", "nzPlaceHolder"], ["name", "cilSalaryTo", 1, "w-100", 3, "ngModelChange", "ngModel", "nzMin", "nzPlaceHolder"], [1, "col-12", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzType", "default", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], ["nz-button", "", "nzType", "default", "type", "button", 1, "cil-btn-export", 3, "click", "nzLoading"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], ["nzShowSizeChanger", "", 1, "table-nowrap", 3, "nzPageIndexChange", "nzPageSizeChange", "nzData", "nzFrontPagination", "nzLoading", "nzTotal", "nzPageIndex", "nzPageSize", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "130px"], ["nzWidth", "110px"], ["nzWidth", "180px"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "120px"], ["nzWidth", "140px"], ["nzWidth", "130px", 1, "text-end"], ["nzWidth", "150px", 1, "text-center"], [4, "ngIf"], ["class", "cil-row-clickable", 3, "click", 4, "ngFor", "ngForOf"], ["nzWidth", "60vw", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzBodyStyle", "nzFooter"], [4, "nzModalContent"], ["nzWidth", "900px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzBodyStyle", "nzOkLoading"], ["nzWidth", "800px", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzFooter"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "13", 1, "text-center", "text-muted"], [1, "cil-row-clickable", 3, "click"], [1, "text-center"], [1, "text-end"], [1, "badge"], [1, "text-center", 3, "click"], ["nz-button", "", "nzType", "text", "nzSize", "small", "title", "Ch\u1EC9nh s\u1EEDa", 3, "click"], [1, "bx", "bx-edit", "text-warning"], ["nz-button", "", "nzType", "text", "nzSize", "small", "title", "X\xF3a", 3, "click"], [1, "bx", "bx-trash", "text-danger"], ["nzBordered", "", "nzSize", "small", 3, "nzColumn"], [3, "nzTitle"], [3, "nzTitle", "nzSpan"], [1, "row", "g-3"], [1, "col-md-6"], [1, "text-primary", "mb-2"], [1, "mb-2"], [1, "text-danger"], ["nz-input", "", "name", "cilFormContractNo", 3, "ngModelChange", "ngModel", "readOnly"], ["class", "text-danger", 4, "ngIf"], [1, "input-group"], ["nz-input", "", "name", "cilFormEmpId", "readonly", "", 3, "ngModel"], ["nz-button", "", "type", "button", 3, "title", "click", 4, "ngIf"], ["class", "mb-2", 4, "ngIf"], ["nz-input", "", "name", "cilFormContractName", 3, "ngModelChange", "ngModel"], ["name", "cilFormContractType", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "cilFormContractTypeCode", 3, "ngModelChange", "ngModel"], ["name", "cilFormStartContractDate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "cilFormEndContractDate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "cilFormChangeDate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "cilFormDeptNo", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "cilFormWorkPosition", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "cilFormPositionNo", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "cilFormPostGradeNo", 3, "ngModelChange", "ngModel"], ["name", "cilFormSalary", 1, "w-100", 3, "ngModelChange", "ngModel", "nzMin"], ["nz-input", "", "name", "cilFormWorkTime", 3, "ngModelChange", "ngModel"], ["name", "cilFormWorkHourType", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["nzValue", "OVERTIME", 3, "nzLabel"], ["nzValue", "FLEXIBLE", 3, "nzLabel"], ["nz-input", "", "name", "cilFormTotalPeriod", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "cilFormTotalPeriod08", 3, "ngModelChange", "ngModel"], ["name", "cilFormActivity", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "cilFormWorkContent", "rows", "3", 3, "ngModelChange", "ngModel", "placeholder"], ["nz-input", "", "name", "cilFormRemark", "rows", "2", 3, "ngModelChange", "ngModel", "placeholder"], ["nz-button", "", "type", "button", 3, "click", "title"], ["nz-input", "", "name", "cilFormLocalName", "readonly", "", 3, "ngModel"], [1, "row", "g-2", "align-items-end", "mb-3", 3, "ngSubmit"], [1, "col-md-8"], ["nz-input", "", "name", "cilPickerKeyword", 3, "ngModelChange", "keydown.enter", "ngModel", "placeholder"], [1, "col-md-4"], ["nz-button", "", "nzType", "primary", "type", "submit"], ["nzSize", "small", 3, "nzData", "nzLoading", "nzPageSize"], [1, "mb-1"], [1, "fw-bold", "mb-0"]], template: function ContractInfoListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "nz-card", 4)(3, "form", 5);
      \u0275\u0275listener("ngSubmit", function ContractInfoListComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 6)(5, "label", 7);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ContractInfoListComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.contractNo, $event) || (ctx.contractNo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 6)(11, "label", 7);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "input", 9);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ContractInfoListComponent_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.empId, $event) || (ctx.empId = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 6)(17, "label", 7);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "nz-select", 10);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ContractInfoListComponent_Template_nz_select_ngModelChange_20_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.contractType, $event) || (ctx.contractType = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275element(22, "nz-option", 11);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275element(24, "nz-option", 12);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275element(26, "nz-option", 13);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275element(28, "nz-option", 14);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 6)(31, "label", 7);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "input", 15);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ContractInfoListComponent_Template_input_ngModelChange_34_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.department, $event) || (ctx.department = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 6)(37, "label", 7);
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "nz-date-picker", 16);
      \u0275\u0275twoWayListener("ngModelChange", function ContractInfoListComponent_Template_nz_date_picker_ngModelChange_40_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.startDateFrom, $event) || (ctx.startDateFrom = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 6)(42, "label", 7);
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "nz-date-picker", 17);
      \u0275\u0275twoWayListener("ngModelChange", function ContractInfoListComponent_Template_nz_date_picker_ngModelChange_45_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.startDateTo, $event) || (ctx.startDateTo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 6)(47, "label", 7);
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "nz-date-picker", 18);
      \u0275\u0275twoWayListener("ngModelChange", function ContractInfoListComponent_Template_nz_date_picker_ngModelChange_50_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.endDateFrom, $event) || (ctx.endDateFrom = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 6)(52, "label", 7);
      \u0275\u0275text(53);
      \u0275\u0275pipe(54, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "nz-date-picker", 19);
      \u0275\u0275twoWayListener("ngModelChange", function ContractInfoListComponent_Template_nz_date_picker_ngModelChange_55_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.endDateTo, $event) || (ctx.endDateTo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 6)(57, "label", 7);
      \u0275\u0275text(58);
      \u0275\u0275pipe(59, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "nz-select", 20);
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ContractInfoListComponent_Template_nz_select_ngModelChange_60_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.activity, $event) || (ctx.activity = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275element(62, "nz-option", 21);
      \u0275\u0275pipe(63, "translate");
      \u0275\u0275element(64, "nz-option", 22);
      \u0275\u0275pipe(65, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 6)(67, "label", 7);
      \u0275\u0275text(68);
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "input", 23);
      \u0275\u0275pipe(71, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ContractInfoListComponent_Template_input_ngModelChange_70_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.workPosition, $event) || (ctx.workPosition = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div", 6)(73, "label", 7);
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "nz-input-number", 24);
      \u0275\u0275pipe(77, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ContractInfoListComponent_Template_nz_input_number_ngModelChange_76_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.salaryFrom, $event) || (ctx.salaryFrom = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "div", 6)(79, "label", 7);
      \u0275\u0275text(80);
      \u0275\u0275pipe(81, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "nz-input-number", 25);
      \u0275\u0275pipe(83, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ContractInfoListComponent_Template_nz_input_number_ngModelChange_82_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.salaryTo, $event) || (ctx.salaryTo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 26)(85, "button", 27);
      \u0275\u0275listener("click", function ContractInfoListComponent_Template_button_click_85_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(86, "i", 28);
      \u0275\u0275text(87);
      \u0275\u0275pipe(88, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "button", 29);
      \u0275\u0275element(90, "i", 30);
      \u0275\u0275text(91);
      \u0275\u0275pipe(92, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "button", 31);
      \u0275\u0275listener("click", function ContractInfoListComponent_Template_button_click_93_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(94, "i", 32);
      \u0275\u0275text(95);
      \u0275\u0275pipe(96, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "button", 33);
      \u0275\u0275listener("click", function ContractInfoListComponent_Template_button_click_97_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(98, "i", 34);
      \u0275\u0275text(99);
      \u0275\u0275pipe(100, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(101, "nz-card");
      \u0275\u0275template(102, ContractInfoListComponent_nz_alert_102_Template, 1, 1, "nz-alert", 35);
      \u0275\u0275elementStart(103, "nz-table", 36);
      \u0275\u0275listener("nzPageIndexChange", function ContractInfoListComponent_Template_nz_table_nzPageIndexChange_103_listener($event) {
        return ctx.onPageIndexChange($event);
      })("nzPageSizeChange", function ContractInfoListComponent_Template_nz_table_nzPageSizeChange_103_listener($event) {
        return ctx.onPageSizeChange($event);
      });
      \u0275\u0275elementStart(104, "thead")(105, "tr")(106, "th", 37);
      \u0275\u0275text(107);
      \u0275\u0275pipe(108, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "th", 38);
      \u0275\u0275text(110);
      \u0275\u0275pipe(111, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "th", 39);
      \u0275\u0275text(113);
      \u0275\u0275pipe(114, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "th", 40);
      \u0275\u0275text(116);
      \u0275\u0275pipe(117, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "th", 38);
      \u0275\u0275text(119);
      \u0275\u0275pipe(120, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "th", 41);
      \u0275\u0275text(122);
      \u0275\u0275pipe(123, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "th", 41);
      \u0275\u0275text(125);
      \u0275\u0275pipe(126, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "th", 42);
      \u0275\u0275text(128);
      \u0275\u0275pipe(129, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "th", 43);
      \u0275\u0275text(131);
      \u0275\u0275pipe(132, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "th", 44);
      \u0275\u0275text(134);
      \u0275\u0275pipe(135, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "th", 41);
      \u0275\u0275text(137);
      \u0275\u0275pipe(138, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "th", 45);
      \u0275\u0275text(140);
      \u0275\u0275pipe(141, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "th", 41);
      \u0275\u0275text(143);
      \u0275\u0275pipe(144, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(145, "tbody");
      \u0275\u0275template(146, ContractInfoListComponent_tr_146_Template, 4, 4, "tr", 46)(147, ContractInfoListComponent_tr_147_Template, 33, 24, "tr", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275template(148, ContractInfoListComponent_ng_template_148_Template, 2, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(150, "nz-modal", 48);
      \u0275\u0275pipe(151, "translate");
      \u0275\u0275listener("nzOnCancel", function ContractInfoListComponent_Template_nz_modal_nzOnCancel_150_listener() {
        return ctx.closeDetail();
      });
      \u0275\u0275template(152, ContractInfoListComponent_ng_container_152_Template, 2, 1, "ng-container", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "nz-modal", 50);
      \u0275\u0275listener("nzOnCancel", function ContractInfoListComponent_Template_nz_modal_nzOnCancel_153_listener() {
        return ctx.closeModal();
      })("nzOnOk", function ContractInfoListComponent_Template_nz_modal_nzOnOk_153_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(154, ContractInfoListComponent_ng_container_154_Template, 145, 169, "ng-container", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "nz-modal", 51);
      \u0275\u0275pipe(156, "translate");
      \u0275\u0275listener("nzOnCancel", function ContractInfoListComponent_Template_nz_modal_nzOnCancel_155_listener() {
        return ctx.closePicker();
      });
      \u0275\u0275template(157, ContractInfoListComponent_ng_container_157_Template, 34, 37, "ng-container", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "nz-modal", 52);
      \u0275\u0275pipe(159, "translate");
      \u0275\u0275pipe(160, "translate");
      \u0275\u0275pipe(161, "translate");
      \u0275\u0275listener("nzOnCancel", function ContractInfoListComponent_Template_nz_modal_nzOnCancel_158_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function ContractInfoListComponent_Template_nz_modal_nzOnOk_158_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(162, ContractInfoListComponent_ng_container_162_Template, 6, 5, "ng-container", 49);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const cilTotalTpl_r15 = \u0275\u0275reference(149);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 86, "hrm.viewContract.title.contractNo", "S\u1ED1 h\u1EE3p \u0111\u1ED3ng"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.contractNo);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 89, "hrm.viewContract.title.contractNoPlaceholder", "Nh\u1EADp s\u1ED1 h\u1EE3p \u0111\u1ED3ng"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 92, "hrm.viewContract.title.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.empId);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(15, 95, "hrm.viewContract.title.empIdPlaceholder", "Nh\u1EADp m\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 98, "hrm.viewContract.title.contractType", "Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.contractType);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(21, 101, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(23, 104, "hrm.editContract.title.fullTime", "To\xE0n th\u1EDDi gian"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(25, 107, "hrm.editContract.title.partTime", "B\xE1n th\u1EDDi gian"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(27, 110, "hrm.editContract.title.intern", "Th\u1EF1c t\u1EADp"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(29, 113, "hrm.editContract.title.consultant", "T\u01B0 v\u1EA5n"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 116, "hrm.viewContract.title.dept", "Ph\xF2ng ban"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.department);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(35, 119, "hrm.viewContract.title.deptPlaceholder", "Nh\u1EADp ph\xF2ng ban"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 122, "hrm.viewContract.title.startDateFrom", "Ng\xE0y b\u1EAFt \u0111\u1EA7u t\u1EEB"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.startDateFrom);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 125, "hrm.viewContract.title.startDateTo", "Ng\xE0y b\u1EAFt \u0111\u1EA7u \u0111\u1EBFn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.startDateTo);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 128, "hrm.viewContract.title.endDateFrom", "Ng\xE0y k\u1EBFt th\xFAc t\u1EEB"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.endDateFrom);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 131, "hrm.viewContract.title.endDateTo", "Ng\xE0y k\u1EBFt th\xFAc \u0111\u1EBFn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.endDateTo);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(59, 134, "hrm.viewContract.title.activity", "Ho\u1EA1t \u0111\u1ED9ng"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.activity);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(61, 137, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(63, 140, "hrm.editContract.title.active", "Ho\u1EA1t \u0111\u1ED9ng"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(65, 143, "hrm.editContract.title.inactive", "Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 146, "hrm.viewContract.title.workPosition", "V\u1ECB tr\xED l\xE0m vi\u1EC7c"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.workPosition);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(71, 149, "hrm.viewContract.title.workPositionPlaceholder", "Nh\u1EADp v\u1ECB tr\xED l\xE0m vi\u1EC7c"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(75, 152, "hrm.viewContract.title.salaryFrom", "L\u01B0\u01A1ng t\u1EEB"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.salaryFrom);
      \u0275\u0275property("nzMin", 0)("nzPlaceHolder", \u0275\u0275pipeBind2(77, 155, "hrm.viewContract.title.salaryFromPlaceholder", "Nh\u1EADp l\u01B0\u01A1ng t\u1ED1i thi\u1EC3u"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(81, 158, "hrm.viewContract.title.salaryTo", "L\u01B0\u01A1ng \u0111\u1EBFn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.salaryTo);
      \u0275\u0275property("nzMin", 0)("nzPlaceHolder", \u0275\u0275pipeBind2(83, 161, "hrm.viewContract.title.salaryToPlaceholder", "Nh\u1EADp l\u01B0\u01A1ng t\u1ED1i \u0111a"));
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(88, 164, "hrm.editContract.title.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(92, 167, "hrm.viewContract.title.search", "T\xECm ki\u1EBFm"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(96, 170, "hrm.viewContract.title.clearFilter", "X\xF3a b\u1ED9 l\u1ECDc"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.exporting());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(100, 173, "common.export", "Xu\u1EA5t"), " Excel ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzFrontPagination", false)("nzLoading", ctx.loading())("nzTotal", ctx.recordsFiltered())("nzPageIndex", ctx.pageIndex)("nzPageSize", ctx.pageSize)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", cilTotalTpl_r15)("nzScroll", \u0275\u0275pureFunction0(230, _c0));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(108, 176, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(111, 179, "hrm.viewContract.title.contractNo", "S\u1ED1 h\u1EE3p \u0111\u1ED3ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(114, 182, "hrm.viewContract.title.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(117, 185, "hrm.viewContract.title.contractName", "T\xEAn h\u1EE3p \u0111\u1ED3ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(120, 188, "hrm.viewContract.title.contractType", "Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(123, 191, "hrm.viewContract.title.startDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(126, 194, "hrm.viewContract.title.endDate", "Ng\xE0y k\u1EBFt th\xFAc"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(129, 197, "hrm.viewContract.title.dept", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(132, 200, "hrm.viewContract.title.position", "V\u1ECB tr\xED"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(135, 203, "hrm.viewContract.title.salary", "L\u01B0\u01A1ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(138, 206, "hrm.viewContract.title.activity", "Ho\u1EA1t \u0111\u1ED9ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(141, 209, "hrm.viewContract.title.createDate", "Ng\xE0y t\u1EA1o"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(144, 212, "common.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.rows());
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.detailVisible())("nzTitle", \u0275\u0275pipeBind2(151, 215, "hrm.viewContract.title.detailTitle", "Chi ti\u1EBFt h\u1EE3p \u0111\u1ED3ng"))("nzBodyStyle", \u0275\u0275pureFunction0(231, _c1))("nzFooter", null);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", ctx.modalTitle())("nzBodyStyle", \u0275\u0275pureFunction0(232, _c1))("nzOkLoading", ctx.saving());
      \u0275\u0275advance(2);
      \u0275\u0275property("nzVisible", ctx.pickerVisible())("nzTitle", \u0275\u0275pipeBind2(156, 218, "empSearch.title", "T\xECm ki\u1EBFm nh\xE2n vi\xEAn"))("nzFooter", null);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(159, 221, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(160, 224, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(161, 227, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzInputNumberModule, NzInputNumberComponent, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzDatePickerModule, NzDatePickerComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzDescriptionsModule, NzDescriptionsComponent, NzDescriptionsItemComponent, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\n.cil-row-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.cil-row-clickable[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.cil-btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=contract-info-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContractInfoListComponent, [{
    type: Component,
    args: [{ selector: "app-contract-info-list", standalone: true, imports: [
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
          <label class="form-label">{{ 'hrm.viewContract.title.contractNo' | translate:'S\u1ED1 h\u1EE3p \u0111\u1ED3ng' }}</label>
          <input nz-input [(ngModel)]="contractNo" name="cilContractNo"
                 [placeholder]="'hrm.viewContract.title.contractNoPlaceholder' | translate:'Nh\u1EADp s\u1ED1 h\u1EE3p \u0111\u1ED3ng'">
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'hrm.viewContract.title.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</label>
          <input nz-input [(ngModel)]="empId" name="cilEmpId"
                 [placeholder]="'hrm.viewContract.title.empIdPlaceholder' | translate:'Nh\u1EADp m\xE3 nh\xE2n vi\xEAn'">
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'hrm.viewContract.title.contractType' | translate:'Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng' }}</label>
          <nz-select class="w-100" [(ngModel)]="contractType" name="cilContractType" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option nzValue="FULL_TIME" [nzLabel]="'hrm.editContract.title.fullTime' | translate:'To\xE0n th\u1EDDi gian'"></nz-option>
            <nz-option nzValue="PART_TIME" [nzLabel]="'hrm.editContract.title.partTime' | translate:'B\xE1n th\u1EDDi gian'"></nz-option>
            <nz-option nzValue="INTERN" [nzLabel]="'hrm.editContract.title.intern' | translate:'Th\u1EF1c t\u1EADp'"></nz-option>
            <nz-option nzValue="CONSULTANT" [nzLabel]="'hrm.editContract.title.consultant' | translate:'T\u01B0 v\u1EA5n'"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'hrm.viewContract.title.dept' | translate:'Ph\xF2ng ban' }}</label>
          <input nz-input [(ngModel)]="department" name="cilDepartment"
                 [placeholder]="'hrm.viewContract.title.deptPlaceholder' | translate:'Nh\u1EADp ph\xF2ng ban'">
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'hrm.viewContract.title.startDateFrom' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u t\u1EEB' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="startDateFrom" name="cilStartDateFrom" nzFormat="dd/MM/yyyy"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'hrm.viewContract.title.startDateTo' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u \u0111\u1EBFn' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="startDateTo" name="cilStartDateTo" nzFormat="dd/MM/yyyy"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'hrm.viewContract.title.endDateFrom' | translate:'Ng\xE0y k\u1EBFt th\xFAc t\u1EEB' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="endDateFrom" name="cilEndDateFrom" nzFormat="dd/MM/yyyy"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'hrm.viewContract.title.endDateTo' | translate:'Ng\xE0y k\u1EBFt th\xFAc \u0111\u1EBFn' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="endDateTo" name="cilEndDateTo" nzFormat="dd/MM/yyyy"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'hrm.viewContract.title.activity' | translate:'Ho\u1EA1t \u0111\u1ED9ng' }}</label>
          <nz-select class="w-100" [(ngModel)]="activity" name="cilActivity" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option nzValue="ACTIVE" [nzLabel]="'hrm.editContract.title.active' | translate:'Ho\u1EA1t \u0111\u1ED9ng'"></nz-option>
            <nz-option nzValue="INACTIVE" [nzLabel]="'hrm.editContract.title.inactive' | translate:'Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng'"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'hrm.viewContract.title.workPosition' | translate:'V\u1ECB tr\xED l\xE0m vi\u1EC7c' }}</label>
          <input nz-input [(ngModel)]="workPosition" name="cilWorkPosition"
                 [placeholder]="'hrm.viewContract.title.workPositionPlaceholder' | translate:'Nh\u1EADp v\u1ECB tr\xED l\xE0m vi\u1EC7c'">
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'hrm.viewContract.title.salaryFrom' | translate:'L\u01B0\u01A1ng t\u1EEB' }}</label>
          <nz-input-number class="w-100" [(ngModel)]="salaryFrom" name="cilSalaryFrom" [nzMin]="0"
                            [nzPlaceHolder]="'hrm.viewContract.title.salaryFromPlaceholder' | translate:'Nh\u1EADp l\u01B0\u01A1ng t\u1ED1i thi\u1EC3u'"></nz-input-number>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'hrm.viewContract.title.salaryTo' | translate:'L\u01B0\u01A1ng \u0111\u1EBFn' }}</label>
          <nz-input-number class="w-100" [(ngModel)]="salaryTo" name="cilSalaryTo" [nzMin]="0"
                            [nzPlaceHolder]="'hrm.viewContract.title.salaryToPlaceholder' | translate:'Nh\u1EADp l\u01B0\u01A1ng t\u1ED1i \u0111a'"></nz-input-number>
        </div>
        <div class="col-12 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="button" (click)="openAddModal()">
            <i class="bx bx-plus"></i> {{ 'hrm.editContract.title.addNew' | translate:'Th\xEAm m\u1EDBi' }}
          </button>
          <button nz-button nzType="default" type="submit">
            <i class="bx bx-search"></i> {{ 'hrm.viewContract.title.search' | translate:'T\xECm ki\u1EBFm' }}
          </button>
          <button nz-button type="button" (click)="clearSearch()">
            <i class="bx bx-x"></i> {{ 'hrm.viewContract.title.clearFilter' | translate:'X\xF3a b\u1ED9 l\u1ECDc' }}
          </button>
          <button nz-button nzType="default" type="button" class="cil-btn-export" [nzLoading]="exporting()" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'common.export' | translate:'Xu\u1EA5t' }} Excel
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <nz-table [nzData]="rows()" [nzFrontPagination]="false" [nzLoading]="loading()"
                [nzTotal]="recordsFiltered()" [nzPageIndex]="pageIndex" [nzPageSize]="pageSize"
                [nzPageSizeOptions]="pageSizeOptions" nzShowSizeChanger [nzShowTotal]="cilTotalTpl"
                (nzPageIndexChange)="onPageIndexChange($event)" (nzPageSizeChange)="onPageSizeChange($event)"
                [nzScroll]="{ x: '1500px' }" class="table-nowrap">
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
            <th class="text-center" nzWidth="110px">{{ 'common.action' | translate:'Thao t\xE1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="13" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of rows(); let i = index" class="cil-row-clickable" (click)="openDetail(row)">
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
              <button nz-button nzType="text" nzSize="small" title="Ch\u1EC9nh s\u1EEDa" (click)="openEditModal(row)">
                <i class="bx bx-edit text-warning"></i>
              </button>
              <button nz-button nzType="text" nzSize="small" title="X\xF3a" (click)="openDeleteConfirm(row)">
                <i class="bx bx-trash text-danger"></i>
              </button>
            </td>
          </tr>
        </tbody>
        <ng-template #cilTotalTpl let-total>
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
        <nz-descriptions-item [nzTitle]="'hrm.viewContract.title.contractNo' | translate:'S\u1ED1 h\u1EE3p \u0111\u1ED3ng'">{{ row.contractNo }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'hrm.viewContract.title.contractName' | translate:'T\xEAn h\u1EE3p \u0111\u1ED3ng'">{{ row.contractName }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'hrm.viewContract.title.empId' | translate:'M\xE3 nh\xE2n vi\xEAn'">{{ row.empId }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'common.empName' | translate:'H\u1ECD t\xEAn'">{{ row.localName }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'hrm.viewContract.title.contractType' | translate:'Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng'">{{ row.contractTypeName }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'hrm.editContract.title.contractTypeCode' | translate:'M\xE3 lo\u1EA1i h\u1EE3p \u0111\u1ED3ng'">{{ row.contractTypeCode }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'hrm.viewContract.title.startDate' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u'">{{ formatDisplayDate(row.startContractDate) }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'hrm.viewContract.title.endDate' | translate:'Ng\xE0y k\u1EBFt th\xFAc'">{{ formatDisplayDate(row.endContractDate) }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'hrm.viewContract.title.dept' | translate:'Ph\xF2ng ban'">{{ row.deptNo }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'hrm.viewContract.title.position' | translate:'V\u1ECB tr\xED'">{{ row.workPosition }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'hrm.viewContract.title.salary' | translate:'L\u01B0\u01A1ng'">{{ formatSalary(row.salary) }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'hrm.editContract.title.workTime' | translate:'Th\u1EDDi gian l\xE0m vi\u1EC7c'">{{ row.workTime }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'hrm.editContract.title.workHourType' | translate:'Lo\u1EA1i gi\u1EDD l\xE0m vi\u1EC7c'">{{ row.workHourType }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'hrm.viewContract.title.activity' | translate:'Ho\u1EA1t \u0111\u1ED9ng'">
          {{ row.activity === 'ACTIVE' ? ('hrm.editContract.title.active' | translate:'Ho\u1EA1t \u0111\u1ED9ng') : ('hrm.editContract.title.inactive' | translate:'Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng') }}
        </nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'hrm.viewContract.title.createDate' | translate:'Ng\xE0y t\u1EA1o'" [nzSpan]="2">{{ formatDisplayDateTime(row.createDate) }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'hrm.editContract.title.workContent' | translate:'N\u1ED9i dung c\xF4ng vi\u1EC7c'" [nzSpan]="2">{{ row.workContent || '-' }}</nz-descriptions-item>
        <nz-descriptions-item [nzTitle]="'hrm.editContract.title.remark' | translate:'Ghi ch\xFA'" [nzSpan]="2">{{ row.remark || '-' }}</nz-descriptions-item>
      </nz-descriptions>
    </ng-container>
  </ng-container>
</nz-modal>

<!-- Modal Th\xEAm m\u1EDBi / Ch\u1EC9nh s\u1EEDa -->
<nz-modal [nzVisible]="modalVisible()" [nzTitle]="modalTitle()" nzWidth="900px"
          [nzBodyStyle]="{ 'max-height': '75vh', 'overflow-y': 'auto' }"
          (nzOnCancel)="closeModal()" (nzOnOk)="saveForm()" [nzOkLoading]="saving()">
  <ng-container *nzModalContent>
    <div class="row g-3">
      <div class="col-md-6">
        <h6 class="text-primary mb-2">{{ 'hrm.editContract.title.basicInfo' | translate:'Th\xF4ng tin c\u01A1 b\u1EA3n' }}</h6>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.contractNo' | translate:'S\u1ED1 h\u1EE3p \u0111\u1ED3ng' }} <span class="text-danger">*</span></label>
          <input nz-input [(ngModel)]="form.contractNo" name="cilFormContractNo" [readOnly]="!isNew()">
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }} <span *ngIf="isNew()" class="text-danger">*</span></label>
          <div class="input-group">
            <input nz-input [ngModel]="form.empId" name="cilFormEmpId" readonly>
            <button *ngIf="isNew()" nz-button type="button" [title]="'tempEmp.pickEmp' | translate:'Ch\u1ECDn nh\xE2n vi\xEAn'" (click)="openPicker()">
              <i class="bx bx-search"></i>
            </button>
          </div>
        </div>

        <div class="mb-2" *ngIf="form.localName">
          <label class="form-label">{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</label>
          <input nz-input [ngModel]="form.localName" name="cilFormLocalName" readonly>
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.contractName' | translate:'T\xEAn h\u1EE3p \u0111\u1ED3ng' }} <span class="text-danger">*</span></label>
          <input nz-input [(ngModel)]="form.contractName" name="cilFormContractName">
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.contractType' | translate:'Lo\u1EA1i h\u1EE3p \u0111\u1ED3ng' }}</label>
          <nz-select class="w-100" [(ngModel)]="form.contractType" name="cilFormContractType">
            <nz-option nzValue="FULL_TIME" [nzLabel]="'hrm.editContract.title.fullTime' | translate:'To\xE0n th\u1EDDi gian'"></nz-option>
            <nz-option nzValue="PART_TIME" [nzLabel]="'hrm.editContract.title.partTime' | translate:'B\xE1n th\u1EDDi gian'"></nz-option>
            <nz-option nzValue="INTERN" [nzLabel]="'hrm.editContract.title.intern' | translate:'Th\u1EF1c t\u1EADp'"></nz-option>
            <nz-option nzValue="CONSULTANT" [nzLabel]="'hrm.editContract.title.consultant' | translate:'T\u01B0 v\u1EA5n'"></nz-option>
          </nz-select>
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.contractTypeCode' | translate:'M\xE3 lo\u1EA1i h\u1EE3p \u0111\u1ED3ng' }}</label>
          <input nz-input [(ngModel)]="form.contractTypeCode" name="cilFormContractTypeCode">
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.startContractDate' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u h\u1EE3p \u0111\u1ED3ng' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="form.startContractDate" name="cilFormStartContractDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.endContractDate' | translate:'Ng\xE0y k\u1EBFt th\xFAc h\u1EE3p \u0111\u1ED3ng' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="form.endContractDate" name="cilFormEndContractDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.changeDate' | translate:'Ng\xE0y thay \u0111\u1ED5i' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="form.changeDate" name="cilFormChangeDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
        </div>
      </div>

      <div class="col-md-6">
        <h6 class="text-primary mb-2">{{ 'hrm.editContract.title.workInfo' | translate:'Th\xF4ng tin c\xF4ng vi\u1EC7c' }}</h6>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.dept' | translate:'Ph\xF2ng ban' }}</label>
          <input nz-input [(ngModel)]="form.deptNo" name="cilFormDeptNo">
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.workPosition' | translate:'V\u1ECB tr\xED l\xE0m vi\u1EC7c' }}</label>
          <input nz-input [(ngModel)]="form.workPosition" name="cilFormWorkPosition">
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.positionNo' | translate:'M\xE3 ch\u1EE9c v\u1EE5' }}</label>
          <input nz-input [(ngModel)]="form.positionNo" name="cilFormPositionNo">
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.postGradeNo' | translate:'M\xE3 c\u1EA5p b\u1EADc' }}</label>
          <input nz-input [(ngModel)]="form.postGradeNo" name="cilFormPostGradeNo">
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.salary' | translate:'L\u01B0\u01A1ng' }}</label>
          <nz-input-number class="w-100" [(ngModel)]="form.salary" name="cilFormSalary" [nzMin]="0"></nz-input-number>
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.workTime' | translate:'Th\u1EDDi gian l\xE0m vi\u1EC7c' }}</label>
          <input nz-input [(ngModel)]="form.workTime" name="cilFormWorkTime">
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.workHourType' | translate:'Lo\u1EA1i gi\u1EDD l\xE0m vi\u1EC7c' }}</label>
          <nz-select class="w-100" [(ngModel)]="form.workHourType" name="cilFormWorkHourType" nzAllowClear
                     [nzPlaceHolder]="'hrm.editContract.title.selectWorkHourType' | translate:'Ch\u1ECDn lo\u1EA1i gi\u1EDD l\xE0m vi\u1EC7c'">
            <nz-option nzValue="FULL_TIME" [nzLabel]="'hrm.editContract.title.fullTime' | translate:'To\xE0n th\u1EDDi gian'"></nz-option>
            <nz-option nzValue="PART_TIME" [nzLabel]="'hrm.editContract.title.partTime' | translate:'B\xE1n th\u1EDDi gian'"></nz-option>
            <nz-option nzValue="OVERTIME" [nzLabel]="'hrm.editContract.title.overtime' | translate:'T\u0103ng ca'"></nz-option>
            <nz-option nzValue="FLEXIBLE" [nzLabel]="'hrm.editContract.title.flexible' | translate:'Linh ho\u1EA1t'"></nz-option>
          </nz-select>
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.totalPeriod' | translate:'T\u1ED5ng th\u1EDDi gian' }}</label>
          <input nz-input [(ngModel)]="form.totalPeriod" name="cilFormTotalPeriod">
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.totalPeriod08' | translate:'T\u1ED5ng th\u1EDDi gian 08' }}</label>
          <input nz-input [(ngModel)]="form.totalPeriod08" name="cilFormTotalPeriod08">
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.activity' | translate:'Tr\u1EA1ng th\xE1i ho\u1EA1t \u0111\u1ED9ng' }}</label>
          <nz-select class="w-100" [(ngModel)]="form.activity" name="cilFormActivity">
            <nz-option nzValue="ACTIVE" [nzLabel]="'hrm.editContract.title.active' | translate:'Ho\u1EA1t \u0111\u1ED9ng'"></nz-option>
            <nz-option nzValue="INACTIVE" [nzLabel]="'hrm.editContract.title.inactive' | translate:'Kh\xF4ng ho\u1EA1t \u0111\u1ED9ng'"></nz-option>
          </nz-select>
        </div>
      </div>

      <div class="col-12">
        <h6 class="text-primary mb-2">{{ 'hrm.editContract.title.contentAndRemark' | translate:'N\u1ED9i dung v\xE0 ghi ch\xFA' }}</h6>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.workContent' | translate:'N\u1ED9i dung c\xF4ng vi\u1EC7c' }}</label>
          <textarea nz-input [(ngModel)]="form.workContent" name="cilFormWorkContent" rows="3"
                    [placeholder]="'hrm.editContract.title.workContentPlaceholder' | translate:'M\xF4 t\u1EA3 chi ti\u1EBFt n\u1ED9i dung c\xF4ng vi\u1EC7c...'"></textarea>
        </div>

        <div class="mb-2">
          <label class="form-label">{{ 'hrm.editContract.title.remark' | translate:'Ghi ch\xFA' }}</label>
          <textarea nz-input [(ngModel)]="form.remark" name="cilFormRemark" rows="2"
                    [placeholder]="'hrm.editContract.title.remarkPlaceholder' | translate:'Ghi ch\xFA th\xEAm v\u1EC1 h\u1EE3p \u0111\u1ED3ng...'"></textarea>
        </div>
      </div>
    </div>
  </ng-container>
</nz-modal>

<!-- Modal ch\u1ECDn nh\xE2n vi\xEAn (ch\u1EC9 d\xF9ng khi th\xEAm m\u1EDBi) -->
<nz-modal [nzVisible]="pickerVisible()" [nzTitle]="'empSearch.title' | translate:'T\xECm ki\u1EBFm nh\xE2n vi\xEAn'"
          nzWidth="800px" (nzOnCancel)="closePicker()" [nzFooter]="null">
  <ng-container *nzModalContent>
    <form class="row g-2 align-items-end mb-3" (ngSubmit)="pickerSearch()">
      <div class="col-md-8">
        <label class="form-label">{{ 'empSearch.field.keyword' | translate:'M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn' }}</label>
        <input nz-input [(ngModel)]="pickerKeyword" name="cilPickerKeyword"
               [placeholder]="'empSearch.placeholder.keyword' | translate:'Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn'"
               (keydown.enter)="$event.preventDefault(); pickerSearch()">
      </div>
      <div class="col-md-4">
        <button nz-button nzType="primary" type="submit">
          <i class="bx bx-search"></i> {{ 'hrm.viewContract.title.search' | translate:'T\xECm ki\u1EBFm' }}
        </button>
      </div>
    </form>

    <nz-table [nzData]="pickerRows()" [nzLoading]="pickerLoading()" [nzPageSize]="10" nzSize="small" #cilPickerTable>
      <thead>
        <tr>
          <th class="text-center" nzWidth="60px">{{ 'empSearch.col.no' | translate:'STT' }}</th>
          <th nzWidth="110px">{{ 'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
          <th>{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
          <th>{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
          <th>{{ 'epi.field.position' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of cilPickerTable.data; let i = index" class="cil-row-clickable" (click)="selectPickedEmployee(row)">
          <td class="text-center">{{ i + 1 }}</td>
          <td>{{ row.empId }}</td>
          <td>{{ row.localName }}</td>
          <td>{{ row.deptName || row.deptNo }}</td>
          <td>{{ row.position }}</td>
        </tr>
      </tbody>
    </nz-table>
  </ng-container>
</nz-modal>

<!-- Modal x\xE1c nh\u1EADn x\xF3a -->
<nz-modal [nzVisible]="deleteVisible()" [nzTitle]="'common.confirm' | translate:'X\xE1c nh\u1EADn'"
          (nzOnCancel)="closeDeleteConfirm()" (nzOnOk)="confirmDelete()" [nzOkLoading]="deleting()"
          [nzOkText]="'common.confirm' | translate:'X\xE1c nh\u1EADn'" [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'">
  <ng-container *nzModalContent>
    <p class="mb-1">{{ 'hrm.viewContract.title.deleteConfirmContent' | translate:'B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a h\u1EE3p \u0111\u1ED3ng n\xE0y? H\xE0nh \u0111\u1ED9ng n\xE0y kh\xF4ng th\u1EC3 ho\xE0n t\xE1c!' }}</p>
    <p class="fw-bold mb-0">{{ deleteTargetName }}</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/contract-info-list/contract-info-list.component.css */\n.cil-row-clickable {\n  cursor: pointer;\n}\n.cil-row-clickable:hover {\n  background: #fafafa;\n}\n.cil-btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=contract-info-list.component.css.map */\n"] }]
  }], () => [{ type: ContractInfoListService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContractInfoListComponent, { className: "ContractInfoListComponent", filePath: "src/app/contract-info-list/contract-info-list.component.ts", lineNumber: 141 });
})();
export {
  ContractInfoListComponent
};
//# debugId=3281d8a0-6242-5bdc-9ae6-19947c9a34cc
//# sourceMappingURL=chunk-HD6L6LSM.js.map
