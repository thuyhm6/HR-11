import {
  ManageEmpPositionInfoService
} from "./chunk-GZZPPOTI.js";
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
  NzModalComponent,
  NzModalContentDirective,
  NzModalModule
} from "./chunk-OEYWCHIN.js";
import {
  NzTreeSelectComponent,
  NzTreeSelectModule
} from "./chunk-2D6TQZG3.js";
import "./chunk-PD7KBOBI.js";
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

// src/app/manage-emp-position-info/manage-emp-position-info.component.ts
var _c0 = () => ({ x: "1480px", y: "calc(100vh - 420px)" });
var _c1 = () => ({ "max-height": "75vh", "overflow-y": "auto" });
function ManageEmpPositionInfoComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.deptTreeErrorMessage());
  }
}
function ManageEmpPositionInfoComponent_nz_option_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 42);
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r3.codeNo)("nzLabel", c_r3.codeName);
  }
}
function ManageEmpPositionInfoComponent_nz_option_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 42);
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r4.codeNo)("nzLabel", c_r4.codeName);
  }
}
function ManageEmpPositionInfoComponent_nz_option_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 42);
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r5.codeNo)("nzLabel", c_r5.codeName);
  }
}
function ManageEmpPositionInfoComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "label", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "nz-date-picker", 43);
    \u0275\u0275twoWayListener("ngModelChange", function ManageEmpPositionInfoComponent_div_48_Template_nz_date_picker_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.asOfDate, $event) || (ctx_r1.asOfDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "mep.field.asOfDate", "Ng\xE0y tra c\u1EE9u"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.asOfDate);
    \u0275\u0275control();
  }
}
function ManageEmpPositionInfoComponent_nz_option_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 42);
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r7.codeNo)("nzLabel", c_r7.codeName);
  }
}
function ManageEmpPositionInfoComponent_nz_alert_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 44);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ManageEmpPositionInfoComponent_tr_115_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 45);
    \u0275\u0275listener("click", function ManageEmpPositionInfoComponent_tr_115_Template_tr_click_0_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDetail(row_r9));
    });
    \u0275\u0275elementStart(1, "td", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 46);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "a", 47);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 46);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 46);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 46);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 46);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 46);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td", 46);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 46);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 46);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r10 + 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r9.empId || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.empId);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r9.localName || null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.localName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r9.deptName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.deptName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r9.postFamilyName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.postFamilyName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r9.empTypeName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.empTypeName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r9.dutyName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.dutyName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r9.postGradeNo || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.postGradeNo);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r9.positionNoName || row_r9.positionName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.positionNoName || row_r9.positionName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r9.nationalityName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.nationalityName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r9.empOfficeName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.empOfficeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.dateStarted);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r9.managerName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.managerName);
  }
}
function ManageEmpPositionInfoComponent_ng_template_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r11 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r11, " ");
  }
}
function ManageEmpPositionInfoComponent_ng_container_120_ng_container_1_img_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 63);
    \u0275\u0275listener("error", function ManageEmpPositionInfoComponent_ng_container_120_ng_container_1_img_3_Template_img_error_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onPhotoError());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const photoUrl_r13 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", photoUrl_r13, \u0275\u0275sanitizeUrl)("hidden", ctx_r1.photoBroken());
  }
}
function ManageEmpPositionInfoComponent_ng_container_120_ng_container_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "mep.detail.noImage", "Kh\xF4ng c\xF3 \u1EA3nh"));
  }
}
function ManageEmpPositionInfoComponent_ng_container_120_ng_container_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "mep.detail.noImage", "Kh\xF4ng c\xF3 \u1EA3nh"));
  }
}
function ManageEmpPositionInfoComponent_ng_container_120_ng_container_1_nz_alert_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 65);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("nzMessage", ctx_r1.insideErrorMessage() ?? "");
  }
}
function ManageEmpPositionInfoComponent_ng_container_120_ng_container_1_tr_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 66);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "mep.msg.noInsideExp", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u qu\xE1 tr\xECnh n\u1ED9i b\u1ED9."));
  }
}
function ManageEmpPositionInfoComponent_ng_container_120_ng_container_1_tr_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 46);
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
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r15 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r14.startDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r14.deptName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r14.mainBusiness);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r14.postGrade);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r14.transCode);
  }
}
function ManageEmpPositionInfoComponent_ng_container_120_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 49)(2, "div", 50);
    \u0275\u0275template(3, ManageEmpPositionInfoComponent_ng_container_120_ng_container_1_img_3_Template, 1, 2, "img", 51)(4, ManageEmpPositionInfoComponent_ng_container_120_ng_container_1_div_4_Template, 3, 4, "div", 52)(5, ManageEmpPositionInfoComponent_ng_container_120_ng_container_1_ng_template_5_Template, 3, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "nz-descriptions", 53)(8, "nz-descriptions-item", 54);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "nz-descriptions-item", 54);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "nz-descriptions-item", 54);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "nz-descriptions-item", 55);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "nz-descriptions-item", 54);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "nz-descriptions-item", 54);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "nz-descriptions-item", 54);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "nz-descriptions-item", 54);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "nz-descriptions-item", 54);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "nz-descriptions-item", 54);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "nz-descriptions-item", 54);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "nz-descriptions-item", 54);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "nz-descriptions-item", 54);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275text(46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "nz-descriptions-item", 54);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "nz-descriptions-item", 54);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "nz-descriptions-item", 54);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "h6", 56);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(59, ManageEmpPositionInfoComponent_ng_container_120_ng_container_1_nz_alert_59_Template, 1, 1, "nz-alert", 57);
    \u0275\u0275elementStart(60, "div", 58)(61, "nz-table", 59)(62, "thead")(63, "tr")(64, "th", 60);
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "th", 61);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "th");
    \u0275\u0275text(71);
    \u0275\u0275pipe(72, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "th");
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "th");
    \u0275\u0275text(77);
    \u0275\u0275pipe(78, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "th");
    \u0275\u0275text(80);
    \u0275\u0275pipe(81, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(82, "tbody");
    \u0275\u0275template(83, ManageEmpPositionInfoComponent_ng_container_120_ng_container_1_tr_83_Template, 4, 4, "tr", 48)(84, ManageEmpPositionInfoComponent_ng_container_120_ng_container_1_tr_84_Template, 13, 6, "tr", 62);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r16 = ctx.ngIf;
    const noPhoto_r17 = \u0275\u0275reference(6);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.resolvePhotoUrl(row_r16.photoPath))("ngIfElse", noPhoto_r17);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.photoBroken());
    \u0275\u0275advance(3);
    \u0275\u0275property("nzColumn", 2);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(9, 50, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r16.empId);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(12, 53, "common.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r16.localName);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(15, 56, "common.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r16.deptName);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(18, 59, "mep.detail.orgNameLocal", "T\xEAn ph\xF2ng local"))("nzSpan", 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r16.orgNameLocal);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(21, 62, "mep.col.duty", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r16.dutyName);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(24, 65, "mep.col.jobTitle", "Ch\u1EE9c danh"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r16.postGradeNo);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(27, 68, "mep.col.positionTitle", "V\u1ECB tr\xED"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r16.positionNoName || row_r16.positionName);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(30, 71, "essDept.empGroup", "Nh\xF3m nh\xE2n vi\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r16.postFamilyName);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(33, 74, "essDept.empType", "Lo\u1EA1i nh\xE2n vi\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r16.empTypeName);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(36, 77, "essDept.status", "Tr\u1EA1ng th\xE1i"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r16.empOfficeName);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(39, 80, "essDept.nationality", "Qu\u1ED1c t\u1ECBch"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r16.nationalityName);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(42, 83, "mep.col.dateJoined", "Ng\xE0y v\xE0o l\xE0m"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r16.dateStarted);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(45, 86, "mep.detail.mainBusiness", "Nghi\u1EC7p v\u1EE5 ch\xEDnh"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r16.mainBusiness);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(48, 89, "mep.detail.employeeOwned", "Kh\u1ED1i s\u1EDF h\u1EEFu"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r16.employeeOwned);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(51, 92, "mep.detail.manager", "Qu\u1EA3n l\xFD hi\u1EC3n th\u1ECB"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r16.managerName);
    \u0275\u0275advance();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(54, 95, "mep.detail.managerEmp", "Qu\u1EA3n l\xFD c\u1EADp nh\u1EADt"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r16.managerEmpName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(58, 98, "mep.section.insideProcess", "Qu\xE1 tr\xECnh n\u1ED9i b\u1ED9"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.insideErrorMessage());
    \u0275\u0275advance(2);
    \u0275\u0275property("nzData", ctx_r1.insideRows())("nzLoading", ctx_r1.insideLoading())("nzShowPagination", false);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(66, 101, "common.stt", "STT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 104, "essDept.attStartDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(72, 107, "common.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(75, 110, "mep.col.mainBusiness", "Nghi\u1EC7p v\u1EE5 ch\xEDnh"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(78, 113, "mep.col.jobTitle", "Ch\u1EE9c danh"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(81, 116, "mep.col.transType", "Lo\u1EA1i \u0111i\u1EC1u chuy\u1EC3n"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.insideLoading() && ctx_r1.insideRows().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.insideRows());
  }
}
function ManageEmpPositionInfoComponent_ng_container_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ManageEmpPositionInfoComponent_ng_container_120_ng_container_1_Template, 85, 119, "ng-container", 48);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.detailRow());
  }
}
var I18N_KEYS = [
  "essDept.keyword",
  "vdp.search.empKeyword.placeholder",
  "essDept.dept",
  "vdp.search.dept.placeholder",
  "essDept.fromDate",
  "essDept.toDate",
  "essDept.empGroup",
  "essDept.empType",
  "essDept.status",
  "mep.field.asOfDate",
  "essDept.nationality",
  "essDept.search",
  "essDept.clearFilter",
  "essDept.exportExcel",
  "common.selectAll",
  "common.stt",
  "common.empId",
  "common.empName",
  "common.deptName",
  "mep.col.duty",
  "mep.col.jobTitle",
  "mep.col.positionTitle",
  "mep.field.nationality",
  "essDept.status",
  "mep.col.dateJoined",
  "mep.col.manager",
  "mep.modal.detailTitle",
  "mep.detail.orgNameLocal",
  "mep.detail.mainBusiness",
  "mep.detail.employeeOwned",
  "mep.detail.manager",
  "mep.detail.managerEmp",
  "mep.section.insideProcess",
  "essDept.attStartDate",
  "mep.col.mainBusiness",
  "mep.col.transType",
  "mep.msg.noData",
  "mep.msg.noInsideExp",
  "mep.msg.loadInsideEmpFailed",
  "mep.detail.noImage",
  "mep.msg.loadDeptFailed",
  "common.loadFail",
  "common.totalRows"
];
var PAGE_SIZE_OPTIONS = [25, 50, 100, 200, 500];
var DEFAULT_EMP_OFFICE = "15119";
var ManageEmpPositionInfoComponent = class _ManageEmpPositionInfoComponent {
  constructor(api, i18n) {
    this.api = api;
    this.i18n = i18n;
  }
  api;
  i18n;
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
  insideErrorMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "insideErrorMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  deptTreeErrorMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "deptTreeErrorMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  deptNodes = signal(
    [],
    ...ngDevMode ? [{ debugName: "deptNodes" }] : (
      /* istanbul ignore next */
      []
    )
  );
  postFamilyOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "postFamilyOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  empTypeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "empTypeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  empOfficeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "empOfficeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  nationalityOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "nationalityOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
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
  insideRows = signal(
    [],
    ...ngDevMode ? [{ debugName: "insideRows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  insideLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "insideLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  photoBroken = signal(
    false,
    ...ngDevMode ? [{ debugName: "photoBroken" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** id -> danh sách id con trực tiếp - dùng để mở rộng lựa chọn cây phòng ban khi tra cứu (xem search()). */
  deptChildrenMap = /* @__PURE__ */ new Map();
  keyword = "";
  deptNos = [];
  fromDate = null;
  toDate = null;
  postFamily = null;
  empTypeCode = null;
  empOffice = DEFAULT_EMP_OFFICE;
  nationalityCode = null;
  asOfDate = null;
  get showAsOfDate() {
    return this.empOffice === DEFAULT_EMP_OFFICE;
  }
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
    this.loadCodeOptions();
    this.search();
  }
  onEmpOfficeChange() {
    if (!this.showAsOfDate)
      this.asOfDate = null;
  }
  search() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.getList({
      keyword: this.keyword,
      deptNos: this.expandDeptSelection(this.deptNos).join(","),
      fromDate: this.formatYmd(this.fromDate),
      toDate: this.formatYmd(this.toDate),
      postFamily: this.postFamily ?? "",
      empTypeCode: this.empTypeCode ?? "",
      empOffice: this.empOffice ?? "",
      nationalityCode: this.nationalityCode ?? "",
      asOfDate: this.formatYmd(this.asOfDate)
    }).subscribe({
      next: (rows) => {
        this.rows.set(rows ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.rows.set([]);
        this.loading.set(false);
      }
    });
  }
  clearSearch() {
    this.keyword = "";
    this.deptNos = [];
    this.fromDate = null;
    this.toDate = null;
    this.asOfDate = null;
    this.postFamily = null;
    this.empTypeCode = null;
    this.empOffice = DEFAULT_EMP_OFFICE;
    this.nationalityCode = null;
    this.search();
  }
  openDetail(row) {
    this.detailRow.set(row);
    this.insideRows.set([]);
    this.insideErrorMessage.set(null);
    this.photoBroken.set(false);
    this.detailVisible.set(true);
    if (!row.personId)
      return;
    this.insideLoading.set(true);
    this.api.getInsideExperience(row.personId).subscribe({
      next: (rows) => {
        this.insideRows.set(rows ?? []);
        this.insideLoading.set(false);
      },
      error: () => {
        this.insideErrorMessage.set(this.i18n.t("mep.msg.loadInsideEmpFailed", "Kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c qu\xE1 tr\xECnh n\u1ED9i b\u1ED9 c\u1EE7a nh\xE2n vi\xEAn."));
        this.insideLoading.set(false);
      }
    });
  }
  closeDetail() {
    this.detailVisible.set(false);
  }
  onPhotoError() {
    this.photoBroken.set(true);
  }
  resolvePhotoUrl(photoPath) {
    if (!photoPath)
      return null;
    const normalized = photoPath.trim();
    if (!normalized)
      return null;
    if (/^(https?:)?\/\//i.test(normalized) || normalized.startsWith("data:"))
      return normalized;
    return normalized.startsWith("/") ? normalized : "/" + normalized.replace(/^\/+/, "");
  }
  /** Xuất excel client-side (giống bản gốc DataTables Buttons, không có endpoint export riêng ở
   *  backend) - dùng thư viện xlsx (SheetJS, bản vá lỗi từ cdn.sheetjs.com vì bản trên npm registry
   *  đang dính lỗi bảo mật chưa được vá) để tạo đúng file .xlsx nhị phân thay vì trick HTML-table. */
  exportExcel() {
    const headers = [
      this.i18n.t("common.stt", "STT"),
      this.i18n.t("common.empId", "M\xE3 nh\xE2n vi\xEAn"),
      this.i18n.t("common.empName", "H\u1ECD t\xEAn"),
      this.i18n.t("common.deptName", "Ph\xF2ng ban"),
      this.i18n.t("essDept.empGroup", "Nh\xF3m nh\xE2n vi\xEAn"),
      this.i18n.t("essDept.empType", "Lo\u1EA1i nh\xE2n vi\xEAn"),
      this.i18n.t("mep.col.duty", "Ch\u1EE9c v\u1EE5"),
      this.i18n.t("mep.col.jobTitle", "Ch\u1EE9c danh"),
      this.i18n.t("mep.col.positionTitle", "V\u1ECB tr\xED"),
      this.i18n.t("essDept.nationality", "Qu\u1ED1c t\u1ECBch"),
      this.i18n.t("essDept.status", "Tr\u1EA1ng th\xE1i"),
      this.i18n.t("mep.col.dateJoined", "Ng\xE0y v\xE0o l\xE0m"),
      this.i18n.t("mep.col.manager", "Qu\u1EA3n l\xFD")
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      r.empId,
      r.localName,
      r.deptName,
      r.postFamilyName,
      r.empTypeName,
      r.dutyName,
      r.postGradeNo,
      r.positionNoName || r.positionName || "",
      r.nationalityName,
      r.empOfficeName,
      r.dateStarted,
      r.managerName
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "DanhSach");
    writeFileSync(workbook, "manage_emp_position_info_list.xlsx");
  }
  formatYmd(d) {
    return d ? formatDate(d, "yyyy-MM-dd", "vi") : "";
  }
  loadDeptTree() {
    this.api.getAuthorizedDepartments().subscribe({
      next: (list) => this.deptNodes.set(this.buildDeptTree(list ?? [])),
      error: () => this.deptTreeErrorMessage.set(this.i18n.t("mep.msg.loadDeptFailed", "L\u1ED7i khi t\u1EA3i danh s\xE1ch ph\xF2ng ban"))
    });
  }
  buildDeptTree(list) {
    const map = /* @__PURE__ */ new Map();
    list.forEach((d) => map.set(d.id, { title: d.text, key: d.id, parent: d.parent, children: [] }));
    this.deptChildrenMap = /* @__PURE__ */ new Map();
    const roots = [];
    map.forEach((node) => {
      if (node.parent && node.parent !== "0" && map.has(node.parent)) {
        map.get(node.parent).children.push(node);
        const siblings = this.deptChildrenMap.get(node.parent) ?? [];
        siblings.push(node.key);
        this.deptChildrenMap.set(node.parent, siblings);
      } else {
        roots.push(node);
      }
    });
    const markLeaf = (nodes) => {
      nodes.forEach((n) => {
        n.isLeaf = !n.children || n.children.length === 0;
        if (n.children?.length)
          markLeaf(n.children);
      });
    };
    markLeaf(roots);
    return roots;
  }
  /** nz-tree-select chỉ trả về key của node được tick trực tiếp - KHÔNG tự cascade xuống phòng ban
   *  con như widget DeptTree.js gốc (hàm checkChildren() đệ quy). Backend lọc theo deptNos IN (...)
   *  đúng từng mã, nên nếu không mở rộng thủ công ở đây, chọn 1 phòng ban cha (VD "HTSV") sẽ chỉ lọc
   *  đúng nhân viên gán trực tiếp vào phòng đó, bỏ sót toàn bộ nhân viên ở các phòng ban con - khiến
   *  kết quả tra cứu trống hoặc thiếu dữ liệu. */
  expandDeptSelection(selected) {
    const result = /* @__PURE__ */ new Set();
    const stack = [...selected];
    while (stack.length) {
      const id = stack.pop();
      if (result.has(id))
        continue;
      result.add(id);
      const children = this.deptChildrenMap.get(id);
      if (children)
        stack.push(...children);
    }
    return Array.from(result);
  }
  loadCodeOptions() {
    this.api.getCodeList("14015812").subscribe((list) => this.postFamilyOptions.set(list ?? []));
    this.api.getCodeList("13864").subscribe((list) => this.empTypeOptions.set(list ?? []));
    this.api.getCodeList("15118").subscribe((list) => this.empOfficeOptions.set(list ?? []));
    this.api.getCodeList("870").subscribe((list) => this.nationalityOptions.set(list ?? []));
  }
  static \u0275fac = function ManageEmpPositionInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ManageEmpPositionInfoComponent)(\u0275\u0275directiveInject(ManageEmpPositionInfoService), \u0275\u0275directiveInject(I18nService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManageEmpPositionInfoComponent, selectors: [["app-manage-emp-position-info"]], decls: 121, vars: 153, consts: [["mepTable", ""], ["mepTotalTpl", ""], ["noPhoto", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["nz-input", "", "name", "keyword", 3, "ngModelChange", "ngModel", "placeholder"], ["name", "deptNos", "nzCheckable", "", "nzShowSearch", "", "nzAllowClear", "", "nzDropdownClassName", "mep-dept-tree-dropdown", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["class", "text-danger small mt-1", 4, "ngIf"], [1, "col-md-2"], ["name", "fromDate", "nzFormat", "yyyy-MM-dd", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "toDate", "nzFormat", "yyyy-MM-dd", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "postFamily", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["name", "empTypeCode", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["name", "empOffice", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], ["class", "col-md-2", 4, "ngIf"], ["name", "nationalityCode", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [1, "col-12", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], ["nz-button", "", "nzType", "default", "type", "button", 1, "btn-export", 3, "click"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [1, "table-nowrap", 3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "90px", 1, "text-center"], ["nzWidth", "140px"], ["nzWidth", "180px"], ["nzWidth", "100px", 1, "text-center"], ["nzWidth", "140px", 1, "text-center"], ["nzWidth", "120px", 1, "text-center"], ["nzWidth", "110px", 1, "text-center"], ["class", "mep-row-clickable", 3, "click", 4, "ngFor", "ngForOf"], ["nzWidth", "60vw", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzBodyStyle", "nzFooter"], [4, "nzModalContent"], [1, "text-danger", "small", "mt-1"], [3, "nzValue", "nzLabel"], ["name", "asOfDate", "nzFormat", "yyyy-MM-dd", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], [1, "mep-row-clickable", 3, "click"], [1, "text-center"], ["href", "javascript:void(0)"], [4, "ngIf"], [1, "d-flex", "gap-3", "mb-3"], [1, "mep-detail-photo-box"], ["class", "mep-detail-photo-img", "alt", "photo", 3, "src", "hidden", "error", 4, "ngIf", "ngIfElse"], ["class", "mep-detail-photo-fallback", 4, "ngIf"], ["nzBordered", "", "nzSize", "small", 1, "flex-grow-1", 3, "nzColumn"], [3, "nzTitle"], [3, "nzTitle", "nzSpan"], [1, "fw-bold", "mb-2"], ["nzType", "error", "class", "mb-2", 3, "nzMessage", 4, "ngIf"], [1, "table-responsive"], ["nzSize", "small", 3, "nzData", "nzLoading", "nzShowPagination"], [1, "text-center", 2, "width", "60px"], [1, "text-center", 2, "width", "140px"], [4, "ngFor", "ngForOf"], ["alt", "photo", 1, "mep-detail-photo-img", 3, "error", "src", "hidden"], [1, "mep-detail-photo-fallback"], ["nzType", "error", 1, "mb-2", 3, "nzMessage"], ["colspan", "6", 1, "text-center", "text-muted"]], template: function ManageEmpPositionInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "nz-card", 5)(3, "form", 6);
      \u0275\u0275listener("ngSubmit", function ManageEmpPositionInfoComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 7)(5, "label", 8);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 9);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ManageEmpPositionInfoComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.keyword, $event) || (ctx.keyword = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7)(11, "label", 8);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "nz-tree-select", 10);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ManageEmpPositionInfoComponent_Template_nz_tree_select_ngModelChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.deptNos, $event) || (ctx.deptNos = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275template(16, ManageEmpPositionInfoComponent_div_16_Template, 2, 1, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 12)(18, "label", 8);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "nz-date-picker", 13);
      \u0275\u0275twoWayListener("ngModelChange", function ManageEmpPositionInfoComponent_Template_nz_date_picker_ngModelChange_21_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.fromDate, $event) || (ctx.fromDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 12)(23, "label", 8);
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "nz-date-picker", 14);
      \u0275\u0275twoWayListener("ngModelChange", function ManageEmpPositionInfoComponent_Template_nz_date_picker_ngModelChange_26_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.toDate, $event) || (ctx.toDate = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 12)(28, "label", 8);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "nz-select", 15);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ManageEmpPositionInfoComponent_Template_nz_select_ngModelChange_31_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.postFamily, $event) || (ctx.postFamily = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(33, ManageEmpPositionInfoComponent_nz_option_33_Template, 1, 2, "nz-option", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 12)(35, "label", 8);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "nz-select", 17);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ManageEmpPositionInfoComponent_Template_nz_select_ngModelChange_38_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.empTypeCode, $event) || (ctx.empTypeCode = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(40, ManageEmpPositionInfoComponent_nz_option_40_Template, 1, 2, "nz-option", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 12)(42, "label", 8);
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "nz-select", 18);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ManageEmpPositionInfoComponent_Template_nz_select_ngModelChange_45_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.empOffice, $event) || (ctx.empOffice = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function ManageEmpPositionInfoComponent_Template_nz_select_ngModelChange_45_listener() {
        return ctx.onEmpOfficeChange();
      });
      \u0275\u0275template(47, ManageEmpPositionInfoComponent_nz_option_47_Template, 1, 2, "nz-option", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275template(48, ManageEmpPositionInfoComponent_div_48_Template, 5, 5, "div", 19);
      \u0275\u0275elementStart(49, "div", 12)(50, "label", 8);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "nz-select", 20);
      \u0275\u0275pipe(54, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ManageEmpPositionInfoComponent_Template_nz_select_ngModelChange_53_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.nationalityCode, $event) || (ctx.nationalityCode = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(55, ManageEmpPositionInfoComponent_nz_option_55_Template, 1, 2, "nz-option", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 21)(57, "button", 22);
      \u0275\u0275element(58, "i", 23);
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "button", 24);
      \u0275\u0275listener("click", function ManageEmpPositionInfoComponent_Template_button_click_61_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(62, "i", 25);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "button", 26);
      \u0275\u0275listener("click", function ManageEmpPositionInfoComponent_Template_button_click_65_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(66, "i", 27);
      \u0275\u0275text(67);
      \u0275\u0275pipe(68, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(69, "nz-card");
      \u0275\u0275template(70, ManageEmpPositionInfoComponent_nz_alert_70_Template, 1, 1, "nz-alert", 28);
      \u0275\u0275elementStart(71, "nz-table", 29, 0)(73, "thead")(74, "tr")(75, "th", 30);
      \u0275\u0275text(76);
      \u0275\u0275pipe(77, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "th", 31);
      \u0275\u0275text(79);
      \u0275\u0275pipe(80, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "th", 32);
      \u0275\u0275text(82);
      \u0275\u0275pipe(83, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "th", 33);
      \u0275\u0275text(85);
      \u0275\u0275pipe(86, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "th", 34);
      \u0275\u0275text(88);
      \u0275\u0275pipe(89, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "th", 35);
      \u0275\u0275text(91);
      \u0275\u0275pipe(92, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "th", 34);
      \u0275\u0275text(94);
      \u0275\u0275pipe(95, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "th", 34);
      \u0275\u0275text(97);
      \u0275\u0275pipe(98, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "th", 36);
      \u0275\u0275text(100);
      \u0275\u0275pipe(101, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "th", 34);
      \u0275\u0275text(103);
      \u0275\u0275pipe(104, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "th", 34);
      \u0275\u0275text(106);
      \u0275\u0275pipe(107, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "th", 37);
      \u0275\u0275text(109);
      \u0275\u0275pipe(110, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "th", 32);
      \u0275\u0275text(112);
      \u0275\u0275pipe(113, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(114, "tbody");
      \u0275\u0275template(115, ManageEmpPositionInfoComponent_tr_115_Template, 28, 24, "tr", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275template(116, ManageEmpPositionInfoComponent_ng_template_116_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(118, "nz-modal", 39);
      \u0275\u0275pipe(119, "translate");
      \u0275\u0275listener("nzOnCancel", function ManageEmpPositionInfoComponent_Template_nz_modal_nzOnCancel_118_listener() {
        return ctx.closeDetail();
      });
      \u0275\u0275template(120, ManageEmpPositionInfoComponent_ng_container_120_Template, 2, 1, "ng-container", 40);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const mepTable_r18 = \u0275\u0275reference(72);
      const mepTotalTpl_r19 = \u0275\u0275reference(117);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 58, "essDept.keyword", "M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.keyword);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 61, "vdp.search.empKeyword.placeholder", "Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 64, "essDept.dept", "Ph\xF2ng ban"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzNodes", ctx.deptNodes());
      \u0275\u0275twoWayProperty("ngModel", ctx.deptNos);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(15, 67, "vdp.search.dept.placeholder", "Ch\u1ECDn ph\xF2ng ban"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.deptTreeErrorMessage());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 70, "essDept.fromDate", "Ng\xE0y v\xE0o l\xE0m t\u1EEB"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.fromDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 73, "essDept.toDate", "Ng\xE0y v\xE0o l\xE0m \u0111\u1EBFn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.toDate);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(30, 76, "essDept.empGroup", "Nh\xF3m nh\xE2n vi\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.postFamily);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(32, 79, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.postFamilyOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 82, "essDept.empType", "Lo\u1EA1i nh\xE2n vi\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.empTypeCode);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(39, 85, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.empTypeOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 88, "essDept.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.empOffice);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(46, 91, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.empOfficeOptions());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showAsOfDate);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(52, 94, "essDept.nationality", "Qu\u1ED1c t\u1ECBch"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.nationalityCode);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(54, 97, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.nationalityOptions());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(60, 100, "essDept.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(64, 103, "essDept.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(68, 106, "essDept.exportExcel", "Xu\u1EA5t excel"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", mepTotalTpl_r19)("nzScroll", \u0275\u0275pureFunction0(151, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(77, 109, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(80, 112, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(83, 115, "common.empName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(86, 118, "common.deptName", "Ph\xF2ng ban"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(89, 121, "essDept.empGroup", "Nh\xF3m nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(92, 124, "essDept.empType", "Lo\u1EA1i nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(95, 127, "mep.col.duty", "Ch\u1EE9c v\u1EE5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(98, 130, "mep.col.jobTitle", "Ch\u1EE9c danh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(101, 133, "mep.col.positionTitle", "V\u1ECB tr\xED"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(104, 136, "essDept.nationality", "Qu\u1ED1c t\u1ECBch"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(107, 139, "essDept.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(110, 142, "mep.col.dateJoined", "Ng\xE0y v\xE0o l\xE0m"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(113, 145, "mep.col.manager", "Qu\u1EA3n l\xFD"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", mepTable_r18.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.detailVisible())("nzTitle", \u0275\u0275pipeBind2(119, 148, "mep.modal.detailTitle", "Chi ti\u1EBFt nh\xE2n vi\xEAn"))("nzBodyStyle", \u0275\u0275pureFunction0(152, _c1))("nzFooter", null);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzDatePickerModule, NzDatePickerComponent, NzTreeSelectModule, NzTreeSelectComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzDescriptionsModule, NzDescriptionsComponent, NzDescriptionsItemComponent, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\n.mep-row-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.mep-row-clickable[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.mep-detail-photo-box[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 150px;\n  flex: 0 0 120px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #f0f0f0;\n  border-radius: 4px;\n  overflow: hidden;\n  background: #fafafa;\n}\n.mep-detail-photo-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.mep-detail-photo-fallback[_ngcontent-%COMP%] {\n  color: #999;\n  font-size: 12px;\n  text-align: center;\n  padding: 8px;\n}\n.btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=manage-emp-position-info.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManageEmpPositionInfoComponent, [{
    type: Component,
    args: [{ selector: "app-manage-emp-position-info", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzSelectModule,
      NzButtonModule,
      NzDatePickerModule,
      NzTreeSelectModule,
      NzModalModule,
      NzDescriptionsModule,
      NzAlertModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm - \u0111\u1EE9ng im khi cu\u1ED9n (xem .sticky-filter-card trong styles.css) -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3" (ngSubmit)="search()">
        <div class="col-md-3">
          <label class="form-label">{{ 'essDept.keyword' | translate:'M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn' }}</label>
          <input nz-input [(ngModel)]="keyword" name="keyword"
                 [placeholder]="'vdp.search.empKeyword.placeholder' | translate:'Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn'">
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'essDept.dept' | translate:'Ph\xF2ng ban' }}</label>
          <nz-tree-select class="w-100" [nzNodes]="deptNodes()" [(ngModel)]="deptNos" name="deptNos"
                           nzCheckable nzShowSearch nzAllowClear
                           [nzPlaceHolder]="'vdp.search.dept.placeholder' | translate:'Ch\u1ECDn ph\xF2ng ban'"
                           nzDropdownClassName="mep-dept-tree-dropdown"></nz-tree-select>
          <div *ngIf="deptTreeErrorMessage()" class="text-danger small mt-1">{{ deptTreeErrorMessage() }}</div>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'essDept.fromDate' | translate:'Ng\xE0y v\xE0o l\xE0m t\u1EEB' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="fromDate" name="fromDate" nzFormat="yyyy-MM-dd"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'essDept.toDate' | translate:'Ng\xE0y v\xE0o l\xE0m \u0111\u1EBFn' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="toDate" name="toDate" nzFormat="yyyy-MM-dd"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'essDept.empGroup' | translate:'Nh\xF3m nh\xE2n vi\xEAn' }}</label>
          <nz-select class="w-100" [(ngModel)]="postFamily" name="postFamily" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let c of postFamilyOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'essDept.empType' | translate:'Lo\u1EA1i nh\xE2n vi\xEAn' }}</label>
          <nz-select class="w-100" [(ngModel)]="empTypeCode" name="empTypeCode" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let c of empTypeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'essDept.status' | translate:'Tr\u1EA1ng th\xE1i' }}</label>
          <nz-select class="w-100" [(ngModel)]="empOffice" name="empOffice" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'" (ngModelChange)="onEmpOfficeChange()">
            <nz-option *ngFor="let c of empOfficeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-2" *ngIf="showAsOfDate">
          <label class="form-label">{{ 'mep.field.asOfDate' | translate:'Ng\xE0y tra c\u1EE9u' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="asOfDate" name="asOfDate" nzFormat="yyyy-MM-dd"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'essDept.nationality' | translate:'Qu\u1ED1c t\u1ECBch' }}</label>
          <nz-select class="w-100" [(ngModel)]="nationalityCode" name="nationalityCode" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let c of nationalityOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-12 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'essDept.search' | translate:'Tra c\u1EE9u' }}
          </button>
          <button nz-button type="button" (click)="clearSearch()">
            <i class="bx bx-x"></i> {{ 'essDept.clearFilter' | translate:'X\xF3a l\u1ECDc' }}
          </button>
          <button nz-button nzType="default" type="button" class="btn-export" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'essDept.exportExcel' | translate:'Xu\u1EA5t excel' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="mepTotalTpl"
                [nzScroll]="{ x: '1480px', y: 'calc(100vh - 420px)' }"
                class="table-nowrap" #mepTable>
        <!-- nzWidth khai b\xE1o cho t\u1EEBng c\u1ED9t \u0111\u1EC3 \u0111\u1ED3ng b\u1ED9 \u0111\u1ED9 r\u1ED9ng header/body khi d\xF9ng nzScroll (xem
             gi\u1EA3i th\xEDch \u1EDF dept-ot-apply-info.component.html). -->
        <thead>
            <tr>
              <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
              <th class="text-center" nzWidth="90px">{{ 'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
              <th nzWidth="140px">{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
              <th nzWidth="180px">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
              <th class="text-center" nzWidth="100px">{{ 'essDept.empGroup' | translate:'Nh\xF3m nh\xE2n vi\xEAn' }}</th>
              <th class="text-center" nzWidth="140px">{{ 'essDept.empType' | translate:'Lo\u1EA1i nh\xE2n vi\xEAn' }}</th>
              <th class="text-center" nzWidth="100px">{{ 'mep.col.duty' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
              <th class="text-center" nzWidth="100px">{{ 'mep.col.jobTitle' | translate:'Ch\u1EE9c danh' }}</th>
              <th class="text-center" nzWidth="120px">{{ 'mep.col.positionTitle' | translate:'V\u1ECB tr\xED' }}</th>
              <th class="text-center" nzWidth="100px">{{ 'essDept.nationality' | translate:'Qu\u1ED1c t\u1ECBch' }}</th>
              <th class="text-center" nzWidth="100px">{{ 'essDept.status' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
              <th class="text-center" nzWidth="110px">{{ 'mep.col.dateJoined' | translate:'Ng\xE0y v\xE0o l\xE0m' }}</th>
              <th nzWidth="140px">{{ 'mep.col.manager' | translate:'Qu\u1EA3n l\xFD' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let row of mepTable.data; let i = index" class="mep-row-clickable" (click)="openDetail(row)">
              <td class="text-center">{{ i + 1 }}</td>
              <td class="text-center" [attr.title]="row.empId || null">{{ row.empId }}</td>
              <td [attr.title]="row.localName || null"><a href="javascript:void(0)">{{ row.localName }}</a></td>
              <td [attr.title]="row.deptName || null">{{ row.deptName }}</td>
              <td class="text-center" [attr.title]="row.postFamilyName || null">{{ row.postFamilyName }}</td>
              <td class="text-center" [attr.title]="row.empTypeName || null">{{ row.empTypeName }}</td>
              <td class="text-center" [attr.title]="row.dutyName || null">{{ row.dutyName }}</td>
              <td class="text-center" [attr.title]="row.postGradeNo || null">{{ row.postGradeNo }}</td>
              <td class="text-center" [attr.title]="row.positionNoName || row.positionName || null">{{ row.positionNoName || row.positionName }}</td>
              <td class="text-center" [attr.title]="row.nationalityName || null">{{ row.nationalityName }}</td>
              <td class="text-center" [attr.title]="row.empOfficeName || null">{{ row.empOfficeName }}</td>
              <td class="text-center">{{ row.dateStarted }}</td>
              <td [attr.title]="row.managerName || null">{{ row.managerName }}</td>
            </tr>
          </tbody>
          <ng-template #mepTotalTpl let-total>
            {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
          </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal chi ti\u1EBFt nh\xE2n vi\xEAn - r\u1ED9ng 60% viewport, n\u1ED9i dung d\xE0i qu\xE1 th\xEC t\u1EF1 cu\u1ED9n d\u1ECDc b\xEAn trong modal
     (thay v\xEC \u0111\u1EA9y chi\u1EC1u cao modal v\u01B0\u1EE3t m\xE0n h\xECnh). -->
<nz-modal [nzVisible]="detailVisible()" [nzTitle]="'mep.modal.detailTitle' | translate:'Chi ti\u1EBFt nh\xE2n vi\xEAn'" nzWidth="60vw"
          [nzBodyStyle]="{ 'max-height': '75vh', 'overflow-y': 'auto' }"
          (nzOnCancel)="closeDetail()" [nzFooter]="null">
  <ng-container *nzModalContent>
    <ng-container *ngIf="detailRow() as row">
      <div class="d-flex gap-3 mb-3">
        <div class="mep-detail-photo-box">
          <img *ngIf="resolvePhotoUrl(row.photoPath) as photoUrl; else noPhoto" [src]="photoUrl"
               [hidden]="photoBroken()" class="mep-detail-photo-img" alt="photo" (error)="onPhotoError()">
          <div *ngIf="photoBroken()" class="mep-detail-photo-fallback">{{ 'mep.detail.noImage' | translate:'Kh\xF4ng c\xF3 \u1EA3nh' }}</div>
          <ng-template #noPhoto>
            <div class="mep-detail-photo-fallback">{{ 'mep.detail.noImage' | translate:'Kh\xF4ng c\xF3 \u1EA3nh' }}</div>
          </ng-template>
        </div>
        <nz-descriptions nzBordered [nzColumn]="2" nzSize="small" class="flex-grow-1">
          <nz-descriptions-item [nzTitle]="'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn'">{{ row.empId }}</nz-descriptions-item>
          <nz-descriptions-item [nzTitle]="'common.empName' | translate:'H\u1ECD t\xEAn'">{{ row.localName }}</nz-descriptions-item>
          <nz-descriptions-item [nzTitle]="'common.deptName' | translate:'Ph\xF2ng ban'">{{ row.deptName }}</nz-descriptions-item>
          <nz-descriptions-item [nzTitle]="'mep.detail.orgNameLocal' | translate:'T\xEAn ph\xF2ng local'" [nzSpan]="1">{{ row.orgNameLocal }}</nz-descriptions-item>
          <nz-descriptions-item [nzTitle]="'mep.col.duty' | translate:'Ch\u1EE9c v\u1EE5'">{{ row.dutyName }}</nz-descriptions-item>
          <nz-descriptions-item [nzTitle]="'mep.col.jobTitle' | translate:'Ch\u1EE9c danh'">{{ row.postGradeNo }}</nz-descriptions-item>
          <nz-descriptions-item [nzTitle]="'mep.col.positionTitle' | translate:'V\u1ECB tr\xED'">{{ row.positionNoName || row.positionName }}</nz-descriptions-item>
          <nz-descriptions-item [nzTitle]="'essDept.empGroup' | translate:'Nh\xF3m nh\xE2n vi\xEAn'">{{ row.postFamilyName }}</nz-descriptions-item>
          <nz-descriptions-item [nzTitle]="'essDept.empType' | translate:'Lo\u1EA1i nh\xE2n vi\xEAn'">{{ row.empTypeName }}</nz-descriptions-item>
          <nz-descriptions-item [nzTitle]="'essDept.status' | translate:'Tr\u1EA1ng th\xE1i'">{{ row.empOfficeName }}</nz-descriptions-item>
          <nz-descriptions-item [nzTitle]="'essDept.nationality' | translate:'Qu\u1ED1c t\u1ECBch'">{{ row.nationalityName }}</nz-descriptions-item>
          <nz-descriptions-item [nzTitle]="'mep.col.dateJoined' | translate:'Ng\xE0y v\xE0o l\xE0m'">{{ row.dateStarted }}</nz-descriptions-item>
          <nz-descriptions-item [nzTitle]="'mep.detail.mainBusiness' | translate:'Nghi\u1EC7p v\u1EE5 ch\xEDnh'">{{ row.mainBusiness }}</nz-descriptions-item>
          <nz-descriptions-item [nzTitle]="'mep.detail.employeeOwned' | translate:'Kh\u1ED1i s\u1EDF h\u1EEFu'">{{ row.employeeOwned }}</nz-descriptions-item>
          <nz-descriptions-item [nzTitle]="'mep.detail.manager' | translate:'Qu\u1EA3n l\xFD hi\u1EC3n th\u1ECB'">{{ row.managerName }}</nz-descriptions-item>
          <nz-descriptions-item [nzTitle]="'mep.detail.managerEmp' | translate:'Qu\u1EA3n l\xFD c\u1EADp nh\u1EADt'">{{ row.managerEmpName }}</nz-descriptions-item>
        </nz-descriptions>
      </div>

      <h6 class="fw-bold mb-2">{{ 'mep.section.insideProcess' | translate:'Qu\xE1 tr\xECnh n\u1ED9i b\u1ED9' }}</h6>
      <nz-alert *ngIf="insideErrorMessage()" nzType="error" [nzMessage]="insideErrorMessage() ?? ''" class="mb-2"></nz-alert>
      <div class="table-responsive">
        <nz-table [nzData]="insideRows()" [nzLoading]="insideLoading()" [nzShowPagination]="false" nzSize="small">
          <thead>
            <tr>
              <th class="text-center" style="width:60px">{{ 'common.stt' | translate:'STT' }}</th>
              <th class="text-center" style="width:140px">{{ 'essDept.attStartDate' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u' }}</th>
              <th>{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
              <th>{{ 'mep.col.mainBusiness' | translate:'Nghi\u1EC7p v\u1EE5 ch\xEDnh' }}</th>
              <th>{{ 'mep.col.jobTitle' | translate:'Ch\u1EE9c danh' }}</th>
              <th>{{ 'mep.col.transType' | translate:'Lo\u1EA1i \u0111i\u1EC1u chuy\u1EC3n' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="!insideLoading() && insideRows().length === 0">
              <td colspan="6" class="text-center text-muted">{{ 'mep.msg.noInsideExp' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u qu\xE1 tr\xECnh n\u1ED9i b\u1ED9.' }}</td>
            </tr>
            <tr *ngFor="let item of insideRows(); let i = index">
              <td class="text-center">{{ i + 1 }}</td>
              <td class="text-center">{{ item.startDate }}</td>
              <td>{{ item.deptName }}</td>
              <td>{{ item.mainBusiness }}</td>
              <td>{{ item.postGrade }}</td>
              <td>{{ item.transCode }}</td>
            </tr>
          </tbody>
        </nz-table>
      </div>
    </ng-container>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/manage-emp-position-info/manage-emp-position-info.component.css */\n.mep-row-clickable {\n  cursor: pointer;\n}\n.mep-row-clickable:hover {\n  background: #fafafa;\n}\n.mep-detail-photo-box {\n  width: 120px;\n  height: 150px;\n  flex: 0 0 120px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #f0f0f0;\n  border-radius: 4px;\n  overflow: hidden;\n  background: #fafafa;\n}\n.mep-detail-photo-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.mep-detail-photo-fallback {\n  color: #999;\n  font-size: 12px;\n  text-align: center;\n  padding: 8px;\n}\n.btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=manage-emp-position-info.component.css.map */\n"] }]
  }], () => [{ type: ManageEmpPositionInfoService }, { type: I18nService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManageEmpPositionInfoComponent, { className: "ManageEmpPositionInfoComponent", filePath: "src/app/manage-emp-position-info/manage-emp-position-info.component.ts", lineNumber: 78 });
})();
export {
  ManageEmpPositionInfoComponent
};
//# debugId=4bf22d26-a9aa-5aff-b1b6-ef6af72d560e
//# sourceMappingURL=chunk-SGGJTMQR.js.map
