import {
  ViewComposeOrgService
} from "./chunk-JDNGCHNT.js";
import {
  buildOrgTree,
  collectAllKeys
} from "./chunk-OSMPNKLW.js";
import {
  NzInputNumberComponent,
  NzInputNumberModule
} from "./chunk-IXCMIWQQ.js";
import {
  NzMessageService
} from "./chunk-XWW7CXU6.js";
import {
  NzModalComponent,
  NzModalContentDirective,
  NzModalModule
} from "./chunk-OEYWCHIN.js";
import {
  NzTreeComponent,
  NzTreeModule
} from "./chunk-PD7KBOBI.js";
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
  __spreadProps,
  __spreadValues,
  computed,
  formatDate,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpureFunction1,
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

// src/app/view-compose-org/view-compose-org.component.ts
var _c0 = () => ({ padding: "12px" });
var _c1 = (a0) => [a0];
var _c2 = () => [];
function ViewComposeOrgComponent_nz_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 55);
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzValue", r_r2.no)("nzLabel", ctx_r2.resumeLabel(r_r2));
  }
}
function ViewComposeOrgComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "orgCompose.msg.noOrgData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u t\u1ED5 ch\u1EE9c"), " ");
  }
}
function ViewComposeOrgComponent_ng_template_27_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 57);
    \u0275\u0275listener("click", function ViewComposeOrgComponent_ng_template_27_ng_container_0_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.startNew());
    });
    \u0275\u0275element(2, "i", 58);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 59);
    \u0275\u0275listener("click", function ViewComposeOrgComponent_ng_template_27_ng_container_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.startEdit());
    });
    \u0275\u0275element(6, "i", 60);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 61);
    \u0275\u0275listener("click", function ViewComposeOrgComponent_ng_template_27_ng_container_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openDeleteConfirm());
    });
    \u0275\u0275element(10, "i", 62);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 5, "common.addNew", "Th\xEAm m\u1EDBi"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.form.deptNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 8, "common.edit", "S\u1EEDa"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r2.form.deptNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 11, "common.delete", "X\xF3a"), " ");
  }
}
function ViewComposeOrgComponent_ng_template_27_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 63);
    \u0275\u0275listener("click", function ViewComposeOrgComponent_ng_template_27_ng_container_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275element(2, "i", 64);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 65);
    \u0275\u0275listener("click", function ViewComposeOrgComponent_ng_template_27_ng_container_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.cancelEdit());
    });
    \u0275\u0275element(6, "i", 66);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("nzLoading", ctx_r2.saving());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 3, "common.save", "L\u01B0u"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 6, "common.cancel", "H\u1EE7y"), " ");
  }
}
function ViewComposeOrgComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ViewComposeOrgComponent_ng_template_27_ng_container_0_Template, 13, 14, "ng-container", 50)(1, ViewComposeOrgComponent_ng_template_27_ng_container_1_Template, 9, 9, "ng-container", 50);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r2.mode() === "VIEW");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.mode() !== "VIEW");
  }
}
function ViewComposeOrgComponent_nz_option_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 55);
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r6.codeNo)("nzLabel", c_r6.codeNo + " - " + (c_r6.codeName ?? ""));
  }
}
function ViewComposeOrgComponent_ng_template_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 68);
    \u0275\u0275listener("click", function ViewComposeOrgComponent_ng_template_97_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openTransferModal());
    });
    \u0275\u0275element(4, "i", 69);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 3, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", ctx_r2.employees().length, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 6, "orgCompose.btnTransfer", "\u0110i\u1EC1u chuy\u1EC3n"), " ");
  }
}
function ViewComposeOrgComponent_tr_127_Template(rf, ctx) {
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
function ViewComposeOrgComponent_tr_128_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 49);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 49)(4, "input", 71);
    \u0275\u0275listener("change", function ViewComposeOrgComponent_tr_128_Template_input_change_4_listener($event) {
      const emp_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleEmpCheck(emp_r9.empId, $event.target.checked));
    });
    \u0275\u0275elementEnd()();
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
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 49);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const emp_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r10 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.isEmpChecked(emp_r9.empId));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r9.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r9.empId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r9.dutyNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r9.postNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r9.empTypeCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r9.statusCode);
  }
}
function ViewComposeOrgComponent_ng_template_129_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r11 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r11, " ");
  }
}
function ViewComposeOrgComponent_ng_container_135_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "input", 72);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewComposeOrgComponent_ng_container_135_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.parentSearchValue, $event) || (ctx_r2.parentSearchValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(3, "div", 73)(4, "nz-tree", 74);
    \u0275\u0275listener("nzClick", function ViewComposeOrgComponent_ng_container_135_Template_nz_tree_nzClick_4_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onParentTreeClick($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.parentSearchValue);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(2, 5, "orgCompose.searchPlaceholder", "T\xECm ki\u1EBFm..."));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("nzData", ctx_r2.treeNodes())("nzSearchValue", ctx_r2.parentSearchValue)("nzSelectedKeys", ctx_r2.pendingParentKey ? \u0275\u0275pureFunction1(8, _c1, ctx_r2.pendingParentKey) : \u0275\u0275pureFunction0(10, _c2));
  }
}
function ViewComposeOrgComponent_ng_container_140_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "input", 75);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewComposeOrgComponent_ng_container_140_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.targetSearchValue, $event) || (ctx_r2.targetSearchValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(3, "div", 73)(4, "nz-tree", 74);
    \u0275\u0275listener("nzClick", function ViewComposeOrgComponent_ng_container_140_Template_nz_tree_nzClick_4_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onTargetTreeClick($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.targetSearchValue);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(2, 5, "orgCompose.searchPlaceholder", "T\xECm ki\u1EBFm..."));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("nzData", ctx_r2.treeNodes())("nzSearchValue", ctx_r2.targetSearchValue)("nzSelectedKeys", ctx_r2.pendingTargetKey ? \u0275\u0275pureFunction1(8, _c1, ctx_r2.pendingTargetKey) : \u0275\u0275pureFunction0(10, _c2));
  }
}
function ViewComposeOrgComponent_ng_container_145_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 76);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 77);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "orgCompose.msg.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a ph\xF2ng ban n\xE0y?"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.form.deptNo);
  }
}
var I18N_KEYS = [
  "org.orgManage.viewComposeOrg.title",
  "orgResumeProcess.versionName",
  "orgResumeProcess.selectPlaceholder",
  "orgCompose.searchTreePlaceholder",
  "orgCompose.expandAll",
  "orgCompose.collapseAll",
  "orgCompose.orgInfoTitle",
  "orgCompose.orgNameLocal",
  "orgCompose.isPartTime",
  "orgCompose.costCenter",
  "orgCompose.employeeListTitle",
  "orgCompose.btnTransfer",
  "orgCompose.selectParentTitle",
  "orgCompose.selectTargetTitle",
  "orgCompose.searchPlaceholder",
  "orgCompose.confirmTransfer",
  "orgCompose.msg.pleaseSelectResume",
  "orgCompose.msg.pleaseEnterDeptNo",
  "orgCompose.msg.confirmDelete",
  "orgCompose.msg.pleaseSelectEmployee",
  "orgCompose.msg.pleaseSelectParent",
  "orgCompose.msg.pleaseSelectTarget",
  "orgCompose.msg.noOrgData",
  "org.orgManage.title.deptNo",
  "org.orgManage.title.parentDept",
  "org.orgManage.title.deptEnglishName",
  "org.orgManage.title.deptType",
  "org.orgManage.ORGANIZATIONAL_LEVEL.Z",
  "org.orgManage.DEPARTMENT_INFORMATION.Z",
  "org.title.LOCAL_NAME",
  "org.title.EMPID",
  "org.title.BUSINESS_NAME",
  "org.title.POSITION_NO",
  "hrm.empinfo.hrcard.empGroup",
  "common.stt",
  "common.addNew",
  "common.edit",
  "common.save",
  "common.delete",
  "common.cancel",
  "common.close",
  "common.confirm",
  "common.status",
  "common.noData",
  "common.totalRows",
  "common.createDate",
  "common.loadFail",
  "common.saveFail",
  "common.deleteFail"
];
var PAGE_SIZE_OPTIONS = [10, 25, 50, 100];
var EMPTY_FORM = {
  deptNo: "",
  parentDeptNo: null,
  orgNameEng: null,
  orgNameLocal: null,
  deptType: "TEAM",
  deptLevel: null,
  managerEmpId: null,
  dateCreated: null,
  isPartTime: false,
  costCenter: null
};
var ViewComposeOrgComponent = class _ViewComposeOrgComponent {
  constructor(api, i18n, message) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
  }
  api;
  i18n;
  message;
  pageSizeOptions = PAGE_SIZE_OPTIONS;
  resumeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "resumeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loadingResume = signal(
    false,
    ...ngDevMode ? [{ debugName: "loadingResume" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedResumeNo = null;
  orgList = signal(
    [],
    ...ngDevMode ? [{ debugName: "orgList" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loadingTree = signal(
    false,
    ...ngDevMode ? [{ debugName: "loadingTree" }] : (
      /* istanbul ignore next */
      []
    )
  );
  treeNodes = computed(
    () => buildOrgTree(this.orgList()),
    ...ngDevMode ? [{ debugName: "treeNodes" }] : (
      /* istanbul ignore next */
      []
    )
  );
  expandedKeys = signal(
    [],
    ...ngDevMode ? [{ debugName: "expandedKeys" }] : (
      /* istanbul ignore next */
      []
    )
  );
  treeSearchValue = "";
  selectedDeptKey = null;
  mode = signal(
    "VIEW",
    ...ngDevMode ? [{ debugName: "mode" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = __spreadValues({}, EMPTY_FORM);
  saving = signal(
    false,
    ...ngDevMode ? [{ debugName: "saving" }] : (
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
  deleteConfirmVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "deleteConfirmVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  employees = signal(
    [],
    ...ngDevMode ? [{ debugName: "employees" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loadingEmployees = signal(
    false,
    ...ngDevMode ? [{ debugName: "loadingEmployees" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedEmpIds = signal(
    /* @__PURE__ */ new Set(),
    ...ngDevMode ? [{ debugName: "selectedEmpIds" }] : (
      /* istanbul ignore next */
      []
    )
  );
  allEmpChecked = computed(
    () => this.employees().length > 0 && this.employees().every((e) => this.selectedEmpIds().has(e.empId)),
    ...ngDevMode ? [{ debugName: "allEmpChecked" }] : (
      /* istanbul ignore next */
      []
    )
  );
  costCenterOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "costCenterOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  parentModalVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "parentModalVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pendingParentKey = null;
  parentSearchValue = "";
  targetModalVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "targetModalVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  transferring = signal(
    false,
    ...ngDevMode ? [{ debugName: "transferring" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pendingTargetKey = null;
  targetSearchValue = "";
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadResumeDropdown();
    this.api.getCostCenters().subscribe({
      next: (res) => this.costCenterOptions.set(res.data ?? []),
      error: () => this.costCenterOptions.set([])
    });
  }
  resumeLabel(r) {
    return r.no ? `${r.no} ${r.resumeName ?? ""}` : r.resumeName ?? "";
  }
  loadResumeDropdown() {
    this.loadingResume.set(true);
    this.api.getResumeDropdown().subscribe({
      next: (list) => {
        this.resumeOptions.set(list ?? []);
        this.loadingResume.set(false);
        if (list?.length) {
          this.selectedResumeNo = list[0].no;
          this.onResumeChange(list[0].no);
        }
      },
      error: () => {
        this.resumeOptions.set([]);
        this.loadingResume.set(false);
        this.message.error(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  onResumeChange(resumeNo) {
    this.selectedResumeNo = resumeNo;
    this.selectedDeptKey = null;
    this.mode.set("VIEW");
    this.form = __spreadValues({}, EMPTY_FORM);
    this.employees.set([]);
    if (resumeNo)
      this.loadOrgTree(resumeNo);
    else
      this.orgList.set([]);
  }
  loadOrgTree(resumeNo) {
    this.loadingTree.set(true);
    this.api.getOrgStructure(resumeNo).subscribe({
      next: (list) => {
        this.orgList.set(list ?? []);
        this.expandedKeys.set(collectAllKeys(buildOrgTree(list ?? [])));
        this.loadingTree.set(false);
      },
      error: () => {
        this.orgList.set([]);
        this.loadingTree.set(false);
        this.message.error(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  expandAllNodes() {
    this.expandedKeys.set(collectAllKeys(this.treeNodes()));
  }
  collapseAllNodes() {
    this.expandedKeys.set([]);
  }
  onTreeClick(event) {
    const data = event.node?.origin?.data;
    if (!data)
      return;
    this.selectedDeptKey = data.deptNo;
    this.loadOrgDetails(data);
  }
  loadOrgDetails(item) {
    this.mode.set("VIEW");
    this.form = {
      deptNo: item.deptNo,
      parentDeptNo: item.parentDeptNo,
      orgNameEng: item.orgNameEng,
      orgNameLocal: item.orgNameLocal,
      deptType: item.deptType,
      deptLevel: item.deptLevel,
      managerEmpId: item.managerEmpId,
      dateCreated: this.toDate(item.dateCreated),
      isPartTime: item.isPartTime === "Y",
      costCenter: item.costCenter
    };
    this.loadEmployees();
  }
  loadEmployees() {
    if (!this.selectedResumeNo || !this.form.deptNo) {
      this.employees.set([]);
      return;
    }
    this.loadingEmployees.set(true);
    this.selectedEmpIds.set(/* @__PURE__ */ new Set());
    this.api.getEmployees(this.selectedResumeNo, this.form.deptNo).subscribe({
      next: (list) => {
        this.employees.set(list ?? []);
        this.loadingEmployees.set(false);
      },
      error: () => {
        this.employees.set([]);
        this.loadingEmployees.set(false);
      }
    });
  }
  // ==================== Thêm mới / Sửa / Hủy ====================
  startNew() {
    if (!this.selectedResumeNo) {
      this.message.warning(this.i18n.t("orgCompose.msg.pleaseSelectResume", "Vui l\xF2ng ch\u1ECDn phi\xEAn b\u1EA3n thay \u0111\u1ED5i t\u1ED5 ch\u1EE9c!"));
      return;
    }
    this.mode.set("NEW");
    this.form = __spreadProps(__spreadValues({}, EMPTY_FORM), { parentDeptNo: this.selectedDeptKey, dateCreated: /* @__PURE__ */ new Date() });
    this.employees.set([]);
  }
  startEdit() {
    if (!this.form.deptNo)
      return;
    this.mode.set("EDIT");
  }
  cancelEdit() {
    const current = this.selectedDeptKey ? this.orgList().find((o) => o.deptNo === this.selectedDeptKey) : void 0;
    if (current) {
      this.loadOrgDetails(current);
    } else {
      this.mode.set("VIEW");
      this.form = __spreadValues({}, EMPTY_FORM);
    }
  }
  save() {
    if (!this.form.deptNo) {
      this.message.warning(this.i18n.t("orgCompose.msg.pleaseEnterDeptNo", "Vui l\xF2ng nh\u1EADp M\xE3 ph\xF2ng ban!"));
      return;
    }
    const isNew = this.mode() === "NEW";
    const payload = {
      resumeNo: this.selectedResumeNo,
      deptNo: this.form.deptNo,
      parentDeptNo: this.form.parentDeptNo,
      orgNameEng: this.form.orgNameEng,
      orgNameLocal: this.form.orgNameLocal,
      deptType: this.form.deptType,
      deptLevel: this.form.deptLevel,
      managerEmpId: this.form.managerEmpId,
      dateCreated: this.formatYmd(this.form.dateCreated),
      isPartTime: this.form.isPartTime ? "Y" : "N",
      costCenter: this.form.costCenter,
      activity: null
    };
    this.saving.set(true);
    this.api.saveOrgInfo(payload, isNew).subscribe({
      next: (res) => {
        this.saving.set(false);
        this.message.success(res.message);
        this.selectedDeptKey = this.form.deptNo;
        this.mode.set("VIEW");
        if (this.selectedResumeNo)
          this.loadOrgTree(this.selectedResumeNo);
      },
      error: (err) => {
        this.saving.set(false);
        const msg = err?.error?.error || this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!");
        this.message.error(msg);
      }
    });
  }
  // ==================== Xóa ====================
  openDeleteConfirm() {
    if (!this.form.deptNo)
      return;
    this.deleteConfirmVisible.set(true);
  }
  closeDeleteConfirm() {
    this.deleteConfirmVisible.set(false);
  }
  confirmDelete() {
    if (!this.selectedResumeNo || !this.form.deptNo)
      return;
    this.deleting.set(true);
    this.api.deleteOrgInfo(this.selectedResumeNo, this.form.deptNo).subscribe({
      next: (res) => {
        this.deleting.set(false);
        this.deleteConfirmVisible.set(false);
        this.message.success(res.message);
        this.selectedDeptKey = null;
        this.mode.set("VIEW");
        this.form = __spreadValues({}, EMPTY_FORM);
        this.employees.set([]);
        if (this.selectedResumeNo)
          this.loadOrgTree(this.selectedResumeNo);
      },
      error: (err) => {
        this.deleting.set(false);
        const msg = err?.error?.error || this.i18n.t("common.deleteFail", "X\xF3a th\u1EA5t b\u1EA1i!");
        this.message.error(msg);
      }
    });
  }
  // ==================== Modal chọn phòng ban trên ====================
  openParentModal() {
    this.pendingParentKey = this.form.parentDeptNo;
    this.parentSearchValue = "";
    this.parentModalVisible.set(true);
  }
  closeParentModal() {
    this.parentModalVisible.set(false);
  }
  onParentTreeClick(event) {
    const data = event.node?.origin?.data;
    this.pendingParentKey = data?.deptNo ?? null;
  }
  confirmParent() {
    if (!this.pendingParentKey) {
      this.message.warning(this.i18n.t("orgCompose.msg.pleaseSelectParent", "Vui l\xF2ng ch\u1ECDn ph\xF2ng ban!"));
      return;
    }
    this.form.parentDeptNo = this.pendingParentKey;
    this.parentModalVisible.set(false);
  }
  // ==================== Danh sách nhân viên / điều chuyển ====================
  isEmpChecked(empId) {
    return this.selectedEmpIds().has(empId);
  }
  toggleEmpCheck(empId, checked) {
    const next = new Set(this.selectedEmpIds());
    if (checked)
      next.add(empId);
    else
      next.delete(empId);
    this.selectedEmpIds.set(next);
  }
  toggleAllEmp(checked) {
    this.selectedEmpIds.set(checked ? new Set(this.employees().map((e) => e.empId)) : /* @__PURE__ */ new Set());
  }
  openTransferModal() {
    if (this.selectedEmpIds().size === 0) {
      this.message.warning(this.i18n.t("orgCompose.msg.pleaseSelectEmployee", "Vui l\xF2ng ch\u1ECDn nh\xE2n vi\xEAn c\u1EA7n \u0111i\u1EC1u chuy\u1EC3n!"));
      return;
    }
    this.pendingTargetKey = null;
    this.targetSearchValue = "";
    this.targetModalVisible.set(true);
  }
  closeTransferModal() {
    this.targetModalVisible.set(false);
  }
  onTargetTreeClick(event) {
    const data = event.node?.origin?.data;
    this.pendingTargetKey = data?.deptNo ?? null;
  }
  confirmTransfer() {
    if (!this.pendingTargetKey) {
      this.message.warning(this.i18n.t("orgCompose.msg.pleaseSelectTarget", "Vui l\xF2ng ch\u1ECDn ph\xF2ng ban \u0111\u1EBFn!"));
      return;
    }
    if (!this.selectedResumeNo)
      return;
    this.transferring.set(true);
    this.api.transferEmployees({
      resumeNo: this.selectedResumeNo,
      targetDeptNo: this.pendingTargetKey,
      empIds: Array.from(this.selectedEmpIds())
    }).subscribe({
      next: (res) => {
        this.transferring.set(false);
        this.targetModalVisible.set(false);
        this.message.success(res.message);
        this.loadEmployees();
      },
      error: (err) => {
        this.transferring.set(false);
        const msg = err?.error?.error || this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!");
        this.message.error(msg);
      }
    });
  }
  toDate(dateStr) {
    if (!dateStr)
      return null;
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? null : d;
  }
  formatYmd(d) {
    return d ? formatDate(d, "yyyy-MM-dd", "vi") : null;
  }
  static \u0275fac = function ViewComposeOrgComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewComposeOrgComponent)(\u0275\u0275directiveInject(ViewComposeOrgService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewComposeOrgComponent, selectors: [["app-view-compose-org"]], decls: 146, vars: 188, consts: [["vcoOrgActions", ""], ["vcoEmpActions", ""], ["vcoEmpTable", ""], ["vcoEmpTotalTpl", ""], [1, "row"], [1, "col-md-3", "mb-3"], [3, "nzTitle", "nzBodyStyle"], [1, "mb-2"], [1, "form-label", "fw-bold"], ["id", "vcoResumeSelect", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzLoading", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nz-input", "", "id", "vcoTreeSearch", "name", "vcoTreeSearch", 1, "mb-2", 3, "ngModelChange", "ngModel", "placeholder"], [1, "mb-2", "btn-group"], ["nz-button", "", "nzSize", "small", "type", "button", "id", "vcoBtnExpandAll", 3, "click"], ["nz-button", "", "nzSize", "small", "type", "button", "id", "vcoBtnCollapseAll", 3, "click"], [3, "nzSpinning"], [1, "vco-tree-scroll"], ["nzSelectMode", "", 3, "nzExpandedKeysChange", "nzClick", "nzData", "nzSearchValue", "nzExpandedKeys", "nzSelectedKeys"], ["class", "text-muted fst-italic p-2", 4, "ngIf"], [1, "col-md-9", "mb-3"], [1, "mb-3", 3, "nzTitle", "nzExtra"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label"], [1, "text-danger"], ["nz-input", "", "id", "vcoDeptNo", "name", "vcoDeptNo", 3, "ngModelChange", "ngModel", "readOnly"], [1, "input-group"], ["nz-input", "", "id", "vcoParentDeptNo", "name", "vcoParentDeptNo", "readonly", "", 3, "ngModel"], ["nz-button", "", "type", "button", "id", "vcoBtnSelectParent", 3, "click", "disabled"], [1, "bx", "bxs-folder-open"], ["nz-input", "", "id", "vcoOrgNameEng", "name", "vcoOrgNameEng", 3, "ngModelChange", "ngModel", "readOnly"], ["nz-input", "", "id", "vcoOrgNameLocal", "name", "vcoOrgNameLocal", 3, "ngModelChange", "ngModel", "readOnly"], ["id", "vcoDeptType", "name", "vcoDeptType", 1, "w-100", 3, "ngModelChange", "ngModel", "nzDisabled"], ["nzValue", "TEAM", "nzLabel", "TEAM"], ["nzValue", "DEPT", "nzLabel", "DEPT"], ["nzValue", "DIV", "nzLabel", "DIV"], ["nzValue", "PART", "nzLabel", "PART"], ["id", "vcoDeptLevel", "name", "vcoDeptLevel", 1, "w-100", 3, "ngModelChange", "ngModel", "nzDisabled"], ["nz-input", "", "id", "vcoManagerEmpId", "name", "vcoManagerEmpId", 3, "ngModelChange", "ngModel", "readOnly"], ["id", "vcoDateCreated", "name", "vcoDateCreated", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel", "nzDisabled"], [1, "col-md-6", "d-flex", "align-items-center"], [1, "form-check-label", "vco-inline-checkbox"], ["type", "checkbox", "name", "vcoIsPartTime", 3, "ngModelChange", "ngModel", "disabled"], ["id", "vcoCostCenter", "name", "vcoCostCenter", "nzAllowClear", "", "nzShowSearch", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzDisabled"], [3, "nzTitle", "nzExtra"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "50px", 1, "text-center"], ["type", "checkbox", "id", "vcoCheckAllEmps", 3, "change", "checked"], [1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [3, "nzValue", "nzLabel"], [1, "text-muted", "fst-italic", "p-2"], ["nz-button", "", "nzSize", "small", "nzType", "primary", "type", "button", "id", "vcoBtnNew", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzSize", "small", "type", "button", "id", "vcoBtnEdit", 3, "click", "disabled"], [1, "bx", "bx-edit"], ["nz-button", "", "nzSize", "small", "nzDanger", "", "type", "button", "id", "vcoBtnDelete", 3, "click", "disabled"], [1, "bx", "bx-trash"], ["nz-button", "", "nzSize", "small", "nzType", "primary", "type", "button", "id", "vcoBtnSave", 3, "click", "nzLoading"], [1, "bx", "bx-save"], ["nz-button", "", "nzSize", "small", "type", "button", "id", "vcoBtnCancel", 3, "click"], [1, "bx", "bx-x"], ["id", "vcoTotalEmployees", 1, "badge", "bg-primary", "me-2"], ["nz-button", "", "nzSize", "small", "type", "button", "id", "vcoBtnTransfer", 3, "click"], [1, "bx", "bx-transfer"], ["colspan", "8", 1, "text-center", "text-muted"], ["type", "checkbox", 3, "change", "checked"], ["nz-input", "", "id", "vcoParentSearch", "name", "vcoParentSearch", 1, "mb-2", 3, "ngModelChange", "ngModel", "placeholder"], [1, "vco-modal-tree-scroll"], ["nzSelectMode", "", "nzExpandAll", "", 3, "nzClick", "nzData", "nzSearchValue", "nzSelectedKeys"], ["nz-input", "", "id", "vcoTargetSearch", "name", "vcoTargetSearch", 1, "mb-2", 3, "ngModelChange", "ngModel", "placeholder"], [1, "mb-1"], [1, "fw-bold", "mb-0"]], template: function ViewComposeOrgComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "nz-card", 6);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementStart(4, "div", 7)(5, "label", 8);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "nz-select", 9);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewComposeOrgComponent_Template_nz_select_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedResumeNo, $event) || (ctx.selectedResumeNo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function ViewComposeOrgComponent_Template_nz_select_ngModelChange_8_listener($event) {
        return ctx.onResumeChange($event);
      });
      \u0275\u0275template(10, ViewComposeOrgComponent_nz_option_10_Template, 1, 2, "nz-option", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "input", 11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewComposeOrgComponent_Template_input_ngModelChange_11_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.treeSearchValue, $event) || (ctx.treeSearchValue = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(13, "div", 12)(14, "button", 13);
      \u0275\u0275listener("click", function ViewComposeOrgComponent_Template_button_click_14_listener() {
        return ctx.expandAllNodes();
      });
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 14);
      \u0275\u0275listener("click", function ViewComposeOrgComponent_Template_button_click_17_listener() {
        return ctx.collapseAllNodes();
      });
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "nz-spin", 15)(21, "div", 16)(22, "nz-tree", 17);
      \u0275\u0275twoWayListener("nzExpandedKeysChange", function ViewComposeOrgComponent_Template_nz_tree_nzExpandedKeysChange_22_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.expandedKeys, $event) || (ctx.expandedKeys = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("nzClick", function ViewComposeOrgComponent_Template_nz_tree_nzClick_22_listener($event) {
        return ctx.onTreeClick($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, ViewComposeOrgComponent_div_23_Template, 3, 4, "div", 18);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(24, "div", 19)(25, "nz-card", 20);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275template(27, ViewComposeOrgComponent_ng_template_27_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(29, "form")(30, "div", 21)(31, "div", 22)(32, "label", 23);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementStart(35, "span", 24);
      \u0275\u0275text(36, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "input", 25);
      \u0275\u0275twoWayListener("ngModelChange", function ViewComposeOrgComponent_Template_input_ngModelChange_37_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.deptNo, $event) || (ctx.form.deptNo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 22)(39, "label", 23);
      \u0275\u0275text(40);
      \u0275\u0275pipe(41, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 26);
      \u0275\u0275element(43, "input", 27);
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(44, "button", 28);
      \u0275\u0275listener("click", function ViewComposeOrgComponent_Template_button_click_44_listener() {
        return ctx.openParentModal();
      });
      \u0275\u0275element(45, "i", 29);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "div", 22)(47, "label", 23);
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "input", 30);
      \u0275\u0275twoWayListener("ngModelChange", function ViewComposeOrgComponent_Template_input_ngModelChange_50_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.orgNameEng, $event) || (ctx.form.orgNameEng = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 22)(52, "label", 23);
      \u0275\u0275text(53);
      \u0275\u0275pipe(54, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "input", 31);
      \u0275\u0275twoWayListener("ngModelChange", function ViewComposeOrgComponent_Template_input_ngModelChange_55_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.orgNameLocal, $event) || (ctx.form.orgNameLocal = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 22)(57, "label", 23);
      \u0275\u0275text(58);
      \u0275\u0275pipe(59, "translate");
      \u0275\u0275elementStart(60, "span", 24);
      \u0275\u0275text(61, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "nz-select", 32);
      \u0275\u0275twoWayListener("ngModelChange", function ViewComposeOrgComponent_Template_nz_select_ngModelChange_62_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.deptType, $event) || (ctx.form.deptType = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275element(63, "nz-option", 33)(64, "nz-option", 34)(65, "nz-option", 35)(66, "nz-option", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div", 22)(68, "label", 23);
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "nz-input-number", 37);
      \u0275\u0275twoWayListener("ngModelChange", function ViewComposeOrgComponent_Template_nz_input_number_ngModelChange_71_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.deptLevel, $event) || (ctx.form.deptLevel = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div", 22)(73, "label", 23);
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "input", 38);
      \u0275\u0275twoWayListener("ngModelChange", function ViewComposeOrgComponent_Template_input_ngModelChange_76_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.managerEmpId, $event) || (ctx.form.managerEmpId = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 22)(78, "label", 23);
      \u0275\u0275text(79);
      \u0275\u0275pipe(80, "translate");
      \u0275\u0275elementStart(81, "span", 24);
      \u0275\u0275text(82, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "nz-date-picker", 39);
      \u0275\u0275twoWayListener("ngModelChange", function ViewComposeOrgComponent_Template_nz_date_picker_ngModelChange_83_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.dateCreated, $event) || (ctx.form.dateCreated = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 40)(85, "label", 41)(86, "input", 42);
      \u0275\u0275twoWayListener("ngModelChange", function ViewComposeOrgComponent_Template_input_ngModelChange_86_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.isPartTime, $event) || (ctx.form.isPartTime = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275text(87);
      \u0275\u0275pipe(88, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "div", 22)(90, "label", 23);
      \u0275\u0275text(91);
      \u0275\u0275pipe(92, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "nz-select", 43);
      \u0275\u0275twoWayListener("ngModelChange", function ViewComposeOrgComponent_Template_nz_select_ngModelChange_93_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.form.costCenter, $event) || (ctx.form.costCenter = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(94, ViewComposeOrgComponent_nz_option_94_Template, 1, 2, "nz-option", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(95, "nz-card", 44);
      \u0275\u0275pipe(96, "translate");
      \u0275\u0275template(97, ViewComposeOrgComponent_ng_template_97_Template, 7, 9, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(99, "nz-table", 45, 2)(101, "thead")(102, "tr")(103, "th", 46);
      \u0275\u0275text(104);
      \u0275\u0275pipe(105, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "th", 47)(107, "input", 48);
      \u0275\u0275listener("change", function ViewComposeOrgComponent_Template_input_change_107_listener($event) {
        return ctx.toggleAllEmp($event.target.checked);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "th");
      \u0275\u0275text(109);
      \u0275\u0275pipe(110, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "th");
      \u0275\u0275text(112);
      \u0275\u0275pipe(113, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "th");
      \u0275\u0275text(115);
      \u0275\u0275pipe(116, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "th");
      \u0275\u0275text(118);
      \u0275\u0275pipe(119, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "th");
      \u0275\u0275text(121);
      \u0275\u0275pipe(122, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "th", 49);
      \u0275\u0275text(124);
      \u0275\u0275pipe(125, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(126, "tbody");
      \u0275\u0275template(127, ViewComposeOrgComponent_tr_127_Template, 4, 4, "tr", 50)(128, ViewComposeOrgComponent_tr_128_Template, 17, 8, "tr", 51);
      \u0275\u0275elementEnd();
      \u0275\u0275template(129, ViewComposeOrgComponent_ng_template_129_Template, 2, 5, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(131, "nz-modal", 52);
      \u0275\u0275pipe(132, "translate");
      \u0275\u0275pipe(133, "translate");
      \u0275\u0275pipe(134, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewComposeOrgComponent_Template_nz_modal_nzOnCancel_131_listener() {
        return ctx.closeParentModal();
      })("nzOnOk", function ViewComposeOrgComponent_Template_nz_modal_nzOnOk_131_listener() {
        return ctx.confirmParent();
      });
      \u0275\u0275template(135, ViewComposeOrgComponent_ng_container_135_Template, 5, 11, "ng-container", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "nz-modal", 54);
      \u0275\u0275pipe(137, "translate");
      \u0275\u0275pipe(138, "translate");
      \u0275\u0275pipe(139, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewComposeOrgComponent_Template_nz_modal_nzOnCancel_136_listener() {
        return ctx.closeTransferModal();
      })("nzOnOk", function ViewComposeOrgComponent_Template_nz_modal_nzOnOk_136_listener() {
        return ctx.confirmTransfer();
      });
      \u0275\u0275template(140, ViewComposeOrgComponent_ng_container_140_Template, 5, 11, "ng-container", 53);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "nz-modal", 54);
      \u0275\u0275pipe(142, "translate");
      \u0275\u0275pipe(143, "translate");
      \u0275\u0275pipe(144, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewComposeOrgComponent_Template_nz_modal_nzOnCancel_141_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function ViewComposeOrgComponent_Template_nz_modal_nzOnOk_141_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(145, ViewComposeOrgComponent_ng_container_145_Template, 6, 5, "ng-container", 53);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const vcoOrgActions_r14 = \u0275\u0275reference(28);
      const vcoEmpActions_r15 = \u0275\u0275reference(98);
      const vcoEmpTable_r16 = \u0275\u0275reference(100);
      const vcoEmpTotalTpl_r17 = \u0275\u0275reference(130);
      \u0275\u0275advance(2);
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(3, 82, "org.orgManage.viewComposeOrg.title", "C\u1EA5u tr\xFAc t\u1ED5 ch\u1EE9c"))("nzBodyStyle", \u0275\u0275pureFunction0(184, _c0));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 85, "orgResumeProcess.versionName", "T\xEAn phi\xEAn b\u1EA3n"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedResumeNo);
      \u0275\u0275property("nzLoading", ctx.loadingResume())("nzPlaceHolder", \u0275\u0275pipeBind2(9, 88, "orgResumeProcess.selectPlaceholder", "-- Ch\u1ECDn phi\xEAn b\u1EA3n thay \u0111\u1ED5i --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.resumeOptions());
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.treeSearchValue);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(12, 91, "orgCompose.searchTreePlaceholder", "T\xECm ki\u1EBFm ph\xF2ng ban..."));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(16, 94, "orgCompose.expandAll", "M\u1EDF t\u1EA5t c\u1EA3"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(19, 97, "orgCompose.collapseAll", "\u0110\xF3ng t\u1EA5t c\u1EA3"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzSpinning", ctx.loadingTree());
      \u0275\u0275advance(2);
      \u0275\u0275property("nzData", ctx.treeNodes())("nzSearchValue", ctx.treeSearchValue);
      \u0275\u0275twoWayProperty("nzExpandedKeys", ctx.expandedKeys);
      \u0275\u0275property("nzSelectedKeys", ctx.selectedDeptKey ? \u0275\u0275pureFunction1(185, _c1, ctx.selectedDeptKey) : \u0275\u0275pureFunction0(187, _c2));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingTree() && ctx.treeNodes().length === 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(26, 100, "orgCompose.orgInfoTitle", "Th\xF4ng tin t\u1ED5 ch\u1EE9c"))("nzExtra", vcoOrgActions_r14);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(34, 103, "org.orgManage.title.deptNo", "M\xE3 ph\xF2ng ban"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.deptNo);
      \u0275\u0275property("readOnly", ctx.mode() !== "NEW");
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 106, "org.orgManage.title.parentDept", "Ph\xF2ng ban tr\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.form.parentDeptNo);
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.mode() === "VIEW");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 109, "org.orgManage.title.deptEnglishName", "Ph\xF2ng ban ti\u1EBFng Anh"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.orgNameEng);
      \u0275\u0275property("readOnly", ctx.mode() === "VIEW");
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 112, "orgCompose.orgNameLocal", "T\xEAn \u0111\u1ECBa ph\u01B0\u01A1ng"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.orgNameLocal);
      \u0275\u0275property("readOnly", ctx.mode() === "VIEW");
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(59, 115, "org.orgManage.title.deptType", "Lo\u1EA1i h\xECnh ph\xF2ng ban"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.deptType);
      \u0275\u0275property("nzDisabled", ctx.mode() === "VIEW");
      \u0275\u0275control();
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(70, 118, "org.orgManage.ORGANIZATIONAL_LEVEL.Z", "C\u1EA5p"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.deptLevel);
      \u0275\u0275property("nzDisabled", ctx.mode() === "VIEW");
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(75, 121, "org.orgManage.DEPARTMENT_INFORMATION.Z", "Tr\u01B0\u1EDFng ph\xF2ng"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.managerEmpId);
      \u0275\u0275property("readOnly", ctx.mode() === "VIEW");
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(80, 124, "common.createDate", "Ng\xE0y t\u1EA1o"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.dateCreated);
      \u0275\u0275property("nzDisabled", ctx.mode() === "VIEW");
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.isPartTime);
      \u0275\u0275property("disabled", ctx.mode() === "VIEW");
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(88, 127, "orgCompose.isPartTime", "Ki\xEAm nhi\u1EC7m"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(92, 130, "orgCompose.costCenter", "M\xE3 chi ph\xED"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.form.costCenter);
      \u0275\u0275property("nzDisabled", ctx.mode() === "VIEW");
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.costCenterOptions());
      \u0275\u0275advance();
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(96, 133, "orgCompose.employeeListTitle", "Danh s\xE1ch nh\xE2n vi\xEAn"))("nzExtra", vcoEmpActions_r15);
      \u0275\u0275advance(4);
      \u0275\u0275property("nzData", ctx.employees())("nzLoading", ctx.loadingEmployees())("nzPageSize", 10)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", vcoEmpTotalTpl_r17);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(105, 136, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275property("checked", ctx.allEmpChecked());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(110, 139, "org.title.LOCAL_NAME", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(113, 142, "org.title.EMPID", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(116, 145, "org.title.BUSINESS_NAME", "Ch\u1EE9c v\u1EE5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(119, 148, "org.title.POSITION_NO", "Ch\u1EE9c danh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(122, 151, "hrm.empinfo.hrcard.empGroup", "Nh\xF3m nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(125, 154, "common.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loadingEmployees() && ctx.employees().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", vcoEmpTable_r16.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.parentModalVisible())("nzTitle", \u0275\u0275pipeBind2(132, 157, "orgCompose.selectParentTitle", "Ch\u1ECDn Ph\xF2ng Ban Tr\u1EF1c Thu\u1ED9c"))("nzOkText", \u0275\u0275pipeBind2(133, 160, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(134, 163, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(5);
      \u0275\u0275property("nzVisible", ctx.targetModalVisible())("nzTitle", \u0275\u0275pipeBind2(137, 166, "orgCompose.selectTargetTitle", "Ch\u1ECDn Ph\xF2ng Ban \u0110i\u1EC1u Chuy\u1EC3n \u0110\u1EBFn"))("nzOkLoading", ctx.transferring())("nzOkText", \u0275\u0275pipeBind2(138, 169, "orgCompose.confirmTransfer", "X\xE1c nh\u1EADn chuy\u1EC3n"))("nzCancelText", \u0275\u0275pipeBind2(139, 172, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(5);
      \u0275\u0275property("nzVisible", ctx.deleteConfirmVisible())("nzTitle", \u0275\u0275pipeBind2(142, 175, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(143, 178, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(144, 181, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzCardModule, NzCardComponent, NzDatePickerModule, NzDatePickerComponent, NzInputModule, NzInputDirective, NzInputNumberModule, NzInputNumberComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzSpinModule, NzSpinComponent, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzTreeModule, NzTreeComponent, TranslatePipe], styles: ["\n.vco-tree-scroll[_ngcontent-%COMP%] {\n  max-height: 600px;\n  overflow-y: auto;\n}\n.vco-modal-tree-scroll[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow-y: auto;\n}\n.vco-inline-checkbox[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n/*# sourceMappingURL=view-compose-org.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewComposeOrgComponent, [{
    type: Component,
    args: [{ selector: "app-view-compose-org", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzButtonModule,
      NzCardModule,
      NzDatePickerModule,
      NzInputModule,
      NzInputNumberModule,
      NzModalModule,
      NzSelectModule,
      NzSpinModule,
      NzTableModule,
      NzTreeModule,
      TranslatePipe
    ], template: `<div class="row">
  <!-- C\xE2y t\u1ED5 ch\u1EE9c b\xEAn tr\xE1i -->
  <div class="col-md-3 mb-3">
    <nz-card [nzTitle]="'org.orgManage.viewComposeOrg.title' | translate:'C\u1EA5u tr\xFAc t\u1ED5 ch\u1EE9c'" [nzBodyStyle]="{ padding: '12px' }">
      <div class="mb-2">
        <label class="form-label fw-bold">{{ 'orgResumeProcess.versionName' | translate:'T\xEAn phi\xEAn b\u1EA3n' }}</label>
        <nz-select class="w-100" id="vcoResumeSelect" [(ngModel)]="selectedResumeNo" (ngModelChange)="onResumeChange($event)"
                   [nzLoading]="loadingResume()" nzShowSearch nzAllowClear
                   [nzPlaceHolder]="'orgResumeProcess.selectPlaceholder' | translate:'-- Ch\u1ECDn phi\xEAn b\u1EA3n thay \u0111\u1ED5i --'">
          <nz-option *ngFor="let r of resumeOptions()" [nzValue]="r.no" [nzLabel]="resumeLabel(r)"></nz-option>
        </nz-select>
      </div>

      <input nz-input class="mb-2" id="vcoTreeSearch" [(ngModel)]="treeSearchValue" name="vcoTreeSearch"
             [placeholder]="'orgCompose.searchTreePlaceholder' | translate:'T\xECm ki\u1EBFm ph\xF2ng ban...'">

      <div class="mb-2 btn-group">
        <button nz-button nzSize="small" type="button" id="vcoBtnExpandAll" (click)="expandAllNodes()">
          {{ 'orgCompose.expandAll' | translate:'M\u1EDF t\u1EA5t c\u1EA3' }}
        </button>
        <button nz-button nzSize="small" type="button" id="vcoBtnCollapseAll" (click)="collapseAllNodes()">
          {{ 'orgCompose.collapseAll' | translate:'\u0110\xF3ng t\u1EA5t c\u1EA3' }}
        </button>
      </div>

      <nz-spin [nzSpinning]="loadingTree()">
        <div class="vco-tree-scroll">
          <nz-tree [nzData]="treeNodes()" [nzSearchValue]="treeSearchValue" nzSelectMode
                   [(nzExpandedKeys)]="expandedKeys" [nzSelectedKeys]="selectedDeptKey ? [selectedDeptKey] : []"
                   (nzClick)="onTreeClick($event)"></nz-tree>
          <div *ngIf="!loadingTree() && treeNodes().length === 0" class="text-muted fst-italic p-2">
            {{ 'orgCompose.msg.noOrgData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u t\u1ED5 ch\u1EE9c' }}
          </div>
        </div>
      </nz-spin>
    </nz-card>
  </div>

  <!-- Chi ti\u1EBFt t\u1ED5 ch\u1EE9c + danh s\xE1ch nh\xE2n vi\xEAn b\xEAn ph\u1EA3i -->
  <div class="col-md-9 mb-3">
    <nz-card class="mb-3" [nzTitle]="'orgCompose.orgInfoTitle' | translate:'Th\xF4ng tin t\u1ED5 ch\u1EE9c'" [nzExtra]="vcoOrgActions">
      <ng-template #vcoOrgActions>
        <ng-container *ngIf="mode() === 'VIEW'">
          <button nz-button nzSize="small" nzType="primary" type="button" id="vcoBtnNew" (click)="startNew()">
            <i class="bx bx-plus"></i> {{ 'common.addNew' | translate:'Th\xEAm m\u1EDBi' }}
          </button>
          <button nz-button nzSize="small" type="button" id="vcoBtnEdit" [disabled]="!form.deptNo" (click)="startEdit()">
            <i class="bx bx-edit"></i> {{ 'common.edit' | translate:'S\u1EEDa' }}
          </button>
          <button nz-button nzSize="small" nzDanger type="button" id="vcoBtnDelete" [disabled]="!form.deptNo" (click)="openDeleteConfirm()">
            <i class="bx bx-trash"></i> {{ 'common.delete' | translate:'X\xF3a' }}
          </button>
        </ng-container>
        <ng-container *ngIf="mode() !== 'VIEW'">
          <button nz-button nzSize="small" nzType="primary" type="button" id="vcoBtnSave" [nzLoading]="saving()" (click)="save()">
            <i class="bx bx-save"></i> {{ 'common.save' | translate:'L\u01B0u' }}
          </button>
          <button nz-button nzSize="small" type="button" id="vcoBtnCancel" (click)="cancelEdit()">
            <i class="bx bx-x"></i> {{ 'common.cancel' | translate:'H\u1EE7y' }}
          </button>
        </ng-container>
      </ng-template>

      <form>
        <div class="row g-3">
          <div class="col-md-6">
            <label class="form-label">{{ 'org.orgManage.title.deptNo' | translate:'M\xE3 ph\xF2ng ban' }} <span class="text-danger">*</span></label>
            <input nz-input id="vcoDeptNo" [(ngModel)]="form.deptNo" name="vcoDeptNo" [readOnly]="mode() !== 'NEW'">
          </div>
          <div class="col-md-6">
            <label class="form-label">{{ 'org.orgManage.title.parentDept' | translate:'Ph\xF2ng ban tr\xEAn' }}</label>
            <div class="input-group">
              <input nz-input id="vcoParentDeptNo" [ngModel]="form.parentDeptNo" name="vcoParentDeptNo" readonly>
              <button nz-button type="button" id="vcoBtnSelectParent" [disabled]="mode() === 'VIEW'" (click)="openParentModal()">
                <i class="bx bxs-folder-open"></i>
              </button>
            </div>
          </div>

          <div class="col-md-6">
            <label class="form-label">{{ 'org.orgManage.title.deptEnglishName' | translate:'Ph\xF2ng ban ti\u1EBFng Anh' }}</label>
            <input nz-input id="vcoOrgNameEng" [(ngModel)]="form.orgNameEng" name="vcoOrgNameEng" [readOnly]="mode() === 'VIEW'">
          </div>
          <div class="col-md-6">
            <label class="form-label">{{ 'orgCompose.orgNameLocal' | translate:'T\xEAn \u0111\u1ECBa ph\u01B0\u01A1ng' }}</label>
            <input nz-input id="vcoOrgNameLocal" [(ngModel)]="form.orgNameLocal" name="vcoOrgNameLocal" [readOnly]="mode() === 'VIEW'">
          </div>

          <div class="col-md-6">
            <label class="form-label">{{ 'org.orgManage.title.deptType' | translate:'Lo\u1EA1i h\xECnh ph\xF2ng ban' }} <span class="text-danger">*</span></label>
            <nz-select class="w-100" id="vcoDeptType" [(ngModel)]="form.deptType" name="vcoDeptType" [nzDisabled]="mode() === 'VIEW'">
              <nz-option nzValue="TEAM" nzLabel="TEAM"></nz-option>
              <nz-option nzValue="DEPT" nzLabel="DEPT"></nz-option>
              <nz-option nzValue="DIV" nzLabel="DIV"></nz-option>
              <nz-option nzValue="PART" nzLabel="PART"></nz-option>
            </nz-select>
          </div>
          <div class="col-md-6">
            <label class="form-label">{{ 'org.orgManage.ORGANIZATIONAL_LEVEL.Z' | translate:'C\u1EA5p' }}</label>
            <nz-input-number class="w-100" id="vcoDeptLevel" [(ngModel)]="form.deptLevel" name="vcoDeptLevel" [nzDisabled]="mode() === 'VIEW'"></nz-input-number>
          </div>

          <div class="col-md-6">
            <label class="form-label">{{ 'org.orgManage.DEPARTMENT_INFORMATION.Z' | translate:'Tr\u01B0\u1EDFng ph\xF2ng' }}</label>
            <input nz-input id="vcoManagerEmpId" [(ngModel)]="form.managerEmpId" name="vcoManagerEmpId" [readOnly]="mode() === 'VIEW'">
          </div>
          <div class="col-md-6">
            <label class="form-label">{{ 'common.createDate' | translate:'Ng\xE0y t\u1EA1o' }} <span class="text-danger">*</span></label>
            <nz-date-picker class="w-100" id="vcoDateCreated" [(ngModel)]="form.dateCreated" name="vcoDateCreated"
                            nzFormat="dd/MM/yyyy" [nzDisabled]="mode() === 'VIEW'"></nz-date-picker>
          </div>

          <div class="col-md-6 d-flex align-items-center">
            <label class="form-check-label vco-inline-checkbox">
              <input type="checkbox" [(ngModel)]="form.isPartTime" name="vcoIsPartTime" [disabled]="mode() === 'VIEW'">
              {{ 'orgCompose.isPartTime' | translate:'Ki\xEAm nhi\u1EC7m' }}
            </label>
          </div>
          <div class="col-md-6">
            <label class="form-label">{{ 'orgCompose.costCenter' | translate:'M\xE3 chi ph\xED' }}</label>
            <nz-select class="w-100" id="vcoCostCenter" [(ngModel)]="form.costCenter" name="vcoCostCenter"
                       [nzDisabled]="mode() === 'VIEW'" nzAllowClear nzShowSearch>
              <nz-option *ngFor="let c of costCenterOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeNo + ' - ' + (c.codeName ?? '')"></nz-option>
            </nz-select>
          </div>
        </div>
      </form>
    </nz-card>

    <nz-card [nzTitle]="'orgCompose.employeeListTitle' | translate:'Danh s\xE1ch nh\xE2n vi\xEAn'" [nzExtra]="vcoEmpActions">
      <ng-template #vcoEmpActions>
        <span class="badge bg-primary me-2" id="vcoTotalEmployees">
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ employees().length }}
        </span>
        <button nz-button nzSize="small" type="button" id="vcoBtnTransfer" (click)="openTransferModal()">
          <i class="bx bx-transfer"></i> {{ 'orgCompose.btnTransfer' | translate:'\u0110i\u1EC1u chuy\u1EC3n' }}
        </button>
      </ng-template>

      <nz-table [nzData]="employees()" [nzLoading]="loadingEmployees()" [nzPageSize]="10" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="vcoEmpTotalTpl" #vcoEmpTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th class="text-center" nzWidth="50px">
              <input type="checkbox" id="vcoCheckAllEmps" [checked]="allEmpChecked()" (change)="toggleAllEmp($any($event.target).checked)">
            </th>
            <th>{{ 'org.title.LOCAL_NAME' | translate:'H\u1ECD t\xEAn' }}</th>
            <th>{{ 'org.title.EMPID' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
            <th>{{ 'org.title.BUSINESS_NAME' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
            <th>{{ 'org.title.POSITION_NO' | translate:'Ch\u1EE9c danh' }}</th>
            <th>{{ 'hrm.empinfo.hrcard.empGroup' | translate:'Nh\xF3m nh\xE2n vi\xEAn' }}</th>
            <th class="text-center">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loadingEmployees() && employees().length === 0">
            <td colspan="8" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let emp of vcoEmpTable.data; let i = index">
            <td class="text-center">{{ i + 1 }}</td>
            <td class="text-center">
              <input type="checkbox" [checked]="isEmpChecked(emp.empId)" (change)="toggleEmpCheck(emp.empId, $any($event.target).checked)">
            </td>
            <td>{{ emp.localName }}</td>
            <td>{{ emp.empId }}</td>
            <td>{{ emp.dutyNo }}</td>
            <td>{{ emp.postNo }}</td>
            <td>{{ emp.empTypeCode }}</td>
            <td class="text-center">{{ emp.statusCode }}</td>
          </tr>
        </tbody>
        <ng-template #vcoEmpTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal ch\u1ECDn ph\xF2ng ban tr\xEAn -->
<nz-modal [nzVisible]="parentModalVisible()" [nzTitle]="'orgCompose.selectParentTitle' | translate:'Ch\u1ECDn Ph\xF2ng Ban Tr\u1EF1c Thu\u1ED9c'"
          (nzOnCancel)="closeParentModal()" (nzOnOk)="confirmParent()"
          [nzOkText]="'common.confirm' | translate:'X\xE1c nh\u1EADn'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <input nz-input class="mb-2" id="vcoParentSearch" [(ngModel)]="parentSearchValue" name="vcoParentSearch"
           [placeholder]="'orgCompose.searchPlaceholder' | translate:'T\xECm ki\u1EBFm...'">
    <div class="vco-modal-tree-scroll">
      <nz-tree [nzData]="treeNodes()" [nzSearchValue]="parentSearchValue" nzSelectMode nzExpandAll
               [nzSelectedKeys]="pendingParentKey ? [pendingParentKey] : []"
               (nzClick)="onParentTreeClick($event)"></nz-tree>
    </div>
  </ng-container>
</nz-modal>

<!-- Modal ch\u1ECDn ph\xF2ng ban \u0111i\u1EC1u chuy\u1EC3n \u0111\u1EBFn -->
<nz-modal [nzVisible]="targetModalVisible()" [nzTitle]="'orgCompose.selectTargetTitle' | translate:'Ch\u1ECDn Ph\xF2ng Ban \u0110i\u1EC1u Chuy\u1EC3n \u0110\u1EBFn'"
          (nzOnCancel)="closeTransferModal()" (nzOnOk)="confirmTransfer()" [nzOkLoading]="transferring()"
          [nzOkText]="'orgCompose.confirmTransfer' | translate:'X\xE1c nh\u1EADn chuy\u1EC3n'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <input nz-input class="mb-2" id="vcoTargetSearch" [(ngModel)]="targetSearchValue" name="vcoTargetSearch"
           [placeholder]="'orgCompose.searchPlaceholder' | translate:'T\xECm ki\u1EBFm...'">
    <div class="vco-modal-tree-scroll">
      <nz-tree [nzData]="treeNodes()" [nzSearchValue]="targetSearchValue" nzSelectMode nzExpandAll
               [nzSelectedKeys]="pendingTargetKey ? [pendingTargetKey] : []"
               (nzClick)="onTargetTreeClick($event)"></nz-tree>
    </div>
  </ng-container>
</nz-modal>

<!-- Modal x\xE1c nh\u1EADn x\xF3a -->
<nz-modal [nzVisible]="deleteConfirmVisible()" [nzTitle]="'common.confirm' | translate:'X\xE1c nh\u1EADn'"
          (nzOnCancel)="closeDeleteConfirm()" (nzOnOk)="confirmDelete()" [nzOkLoading]="deleting()"
          [nzOkText]="'common.confirm' | translate:'X\xE1c nh\u1EADn'" [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'">
  <ng-container *nzModalContent>
    <p class="mb-1">{{ 'orgCompose.msg.confirmDelete' | translate:'B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a ph\xF2ng ban n\xE0y?' }}</p>
    <p class="fw-bold mb-0">{{ form.deptNo }}</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-compose-org/view-compose-org.component.css */\n.vco-tree-scroll {\n  max-height: 600px;\n  overflow-y: auto;\n}\n.vco-modal-tree-scroll {\n  max-height: 400px;\n  overflow-y: auto;\n}\n.vco-inline-checkbox {\n  margin-top: 28px;\n}\n/*# sourceMappingURL=view-compose-org.component.css.map */\n"] }]
  }], () => [{ type: ViewComposeOrgService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewComposeOrgComponent, { className: "ViewComposeOrgComponent", filePath: "src/app/view-compose-org/view-compose-org.component.ts", lineNumber: 112 });
})();
export {
  ViewComposeOrgComponent
};
//# debugId=348fcfa7-8d44-5dde-8314-ab85d7e2028c
//# sourceMappingURL=chunk-WRMUG35Z.js.map
