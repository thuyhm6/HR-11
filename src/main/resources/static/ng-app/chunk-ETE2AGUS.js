import {
  ViewComposeOrgService
} from "./chunk-JDNGCHNT.js";
import {
  buildOrgTree,
  collectAllKeys
} from "./chunk-OSMPNKLW.js";
import {
  NzMessageService
} from "./chunk-XWW7CXU6.js";
import {
  NzTreeComponent,
  NzTreeModule
} from "./chunk-PD7KBOBI.js";
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
  NgModel
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

// src/app/view-history-org-info/view-history-org-info.component.ts
var _c0 = () => ({ padding: "12px" });
var _c1 = (a0) => [a0];
var _c2 = () => [];
function ViewHistoryOrgInfoComponent_nz_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 26);
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzValue", r_r2.no)("nzLabel", ctx_r2.resumeLabel(r_r2));
  }
}
function ViewHistoryOrgInfoComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "orgCompose.msg.noOrgData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u t\u1ED5 ch\u1EE9c"), " ");
  }
}
function ViewHistoryOrgInfoComponent_nz_card_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-card", 28);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "div", 29)(3, "div", 30)(4, "label", 31);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 32);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 30)(9, "label", 31);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 33);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 30)(14, "label", 31);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 34);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 30)(19, "label", 31);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 35);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 30)(24, "label", 31);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 36);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 30)(29, "label", 31);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 37);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 30)(34, "label", 31);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "input", 38);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 30)(39, "label", 31);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "input", 39);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 40)(44, "label", 41);
    \u0275\u0275element(45, "input", 42);
    \u0275\u0275controlCreate();
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 30)(49, "label", 31);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(52, "input", 43);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const dept_r4 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(1, 21, "orgCompose.orgInfoTitle", "Th\xF4ng tin t\u1ED5 ch\u1EE9c"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 24, "org.orgManage.title.deptNo", "M\xE3 ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", dept_r4.deptNo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 27, "org.orgManage.title.parentDept", "Ph\xF2ng ban tr\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", dept_r4.parentDeptNo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 30, "org.orgManage.title.deptEnglishName", "Ph\xF2ng ban ti\u1EBFng Anh"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", dept_r4.orgNameEng);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 33, "orgCompose.orgNameLocal", "T\xEAn \u0111\u1ECBa ph\u01B0\u01A1ng"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", dept_r4.orgNameLocal);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 36, "org.orgManage.title.deptType", "Lo\u1EA1i h\xECnh ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", dept_r4.deptType);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 39, "org.orgManage.ORGANIZATIONAL_LEVEL.Z", "C\u1EA5p"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", dept_r4.deptLevel);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 42, "org.orgManage.DEPARTMENT_INFORMATION.Z", "Tr\u01B0\u1EDFng ph\xF2ng"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", dept_r4.managerEmpId);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 45, "common.createDate", "Ng\xE0y t\u1EA1o"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r2.dateCreatedDisplay(dept_r4));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", dept_r4.isPartTime === "Y");
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(47, 48, "orgCompose.isPartTime", "Ki\xEAm nhi\u1EC7m"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 51, "orgCompose.costCenter", "M\xE3 chi ph\xED"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", dept_r4.costCenter);
    \u0275\u0275control();
  }
}
function ViewHistoryOrgInfoComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", ctx_r2.employees().length, " ");
  }
}
function ViewHistoryOrgInfoComponent_tr_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 45);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewHistoryOrgInfoComponent_tr_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 23);
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
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 23);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const emp_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r6 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r5.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r5.empId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r5.dutyNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r5.postNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r5.empTypeCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(emp_r5.statusCode);
  }
}
function ViewHistoryOrgInfoComponent_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r7 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r7, " ");
  }
}
var I18N_KEYS = [
  "org.orgManage.viewHistoryOrgInfo.title",
  "orgResumeProcess.versionName",
  "orgResumeProcess.selectPlaceholder",
  "orgCompose.searchTreePlaceholder",
  "orgCompose.expandAll",
  "orgCompose.collapseAll",
  "orgCompose.msg.noOrgData",
  "orgCompose.orgInfoTitle",
  "orgCompose.orgNameLocal",
  "orgCompose.isPartTime",
  "orgCompose.costCenter",
  "orgCompose.employeeListTitle",
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
  "common.status",
  "common.noData",
  "common.totalRows",
  "common.createDate",
  "common.loadFail"
];
var PAGE_SIZE_OPTIONS = [10, 25, 50, 100];
var ViewHistoryOrgInfoComponent = class _ViewHistoryOrgInfoComponent {
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
  selectedOrgInfo = signal(
    null,
    ...ngDevMode ? [{ debugName: "selectedOrgInfo" }] : (
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
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadResumeDropdown();
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
    this.selectedOrgInfo.set(null);
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
    this.selectedOrgInfo.set(data);
    this.loadEmployees(data.deptNo);
  }
  loadEmployees(deptNo) {
    if (!this.selectedResumeNo) {
      this.employees.set([]);
      return;
    }
    this.loadingEmployees.set(true);
    this.api.getEmployees(this.selectedResumeNo, deptNo).subscribe({
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
  dateCreatedDisplay(item) {
    if (!item.dateCreated)
      return "";
    const d = new Date(item.dateCreated);
    return isNaN(d.getTime()) ? "" : formatDate(d, "dd/MM/yyyy", "vi");
  }
  static \u0275fac = function ViewHistoryOrgInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewHistoryOrgInfoComponent)(\u0275\u0275directiveInject(ViewComposeOrgService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewHistoryOrgInfoComponent, selectors: [["app-view-history-org-info"]], decls: 60, vars: 81, consts: [["histOrgEmpExtra", ""], ["histOrgEmpTable", ""], ["histOrgEmpTotalTpl", ""], [1, "row"], [1, "col-md-3", "mb-3"], [3, "nzTitle", "nzBodyStyle"], [1, "mb-2"], [1, "form-label", "fw-bold"], ["id", "histOrgResumeSelect", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzLoading", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nz-input", "", "id", "histOrgTreeSearch", "name", "histOrgTreeSearch", 1, "mb-2", 3, "ngModelChange", "ngModel", "placeholder"], [1, "mb-2", "btn-group"], ["nz-button", "", "nzSize", "small", "type", "button", "id", "histOrgBtnExpandAll", 3, "click"], ["nz-button", "", "nzSize", "small", "type", "button", "id", "histOrgBtnCollapseAll", 3, "click"], [3, "nzSpinning"], [1, "hist-org-tree-scroll"], ["nzSelectMode", "", 3, "nzExpandedKeysChange", "nzClick", "nzData", "nzSearchValue", "nzExpandedKeys", "nzSelectedKeys"], ["class", "text-muted fst-italic p-2", 4, "ngIf"], [1, "col-md-9", "mb-3"], ["class", "mb-3", 3, "nzTitle", 4, "ngIf"], [3, "nzTitle", "nzExtra"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal"], ["nzWidth", "60px", 1, "text-center"], [1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"], [1, "text-muted", "fst-italic", "p-2"], [1, "mb-3", 3, "nzTitle"], [1, "row", "g-3"], [1, "col-md-6"], [1, "form-label"], ["nz-input", "", "name", "histOrgDeptNo", "readonly", "", 3, "ngModel"], ["nz-input", "", "name", "histOrgParentDeptNo", "readonly", "", 3, "ngModel"], ["nz-input", "", "name", "histOrgOrgNameEng", "readonly", "", 3, "ngModel"], ["nz-input", "", "name", "histOrgOrgNameLocal", "readonly", "", 3, "ngModel"], ["nz-input", "", "name", "histOrgDeptType", "readonly", "", 3, "ngModel"], ["nz-input", "", "name", "histOrgDeptLevel", "readonly", "", 3, "ngModel"], ["nz-input", "", "name", "histOrgManagerEmpId", "readonly", "", 3, "ngModel"], ["nz-input", "", "name", "histOrgDateCreated", "readonly", "", 3, "ngModel"], [1, "col-md-6", "d-flex", "align-items-center"], [1, "form-check-label", "hist-org-inline-checkbox"], ["type", "checkbox", "name", "histOrgIsPartTime", "disabled", "", 3, "ngModel"], ["nz-input", "", "name", "histOrgCostCenter", "readonly", "", 3, "ngModel"], ["id", "histOrgTotalEmployees", 1, "badge", "bg-primary"], ["colspan", "7", 1, "text-center", "text-muted"]], template: function ViewHistoryOrgInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "nz-card", 5);
      \u0275\u0275pipe(3, "translate");
      \u0275\u0275elementStart(4, "div", 6)(5, "label", 7);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "nz-select", 8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewHistoryOrgInfoComponent_Template_nz_select_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.selectedResumeNo, $event) || (ctx.selectedResumeNo = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("ngModelChange", function ViewHistoryOrgInfoComponent_Template_nz_select_ngModelChange_8_listener($event) {
        return ctx.onResumeChange($event);
      });
      \u0275\u0275template(10, ViewHistoryOrgInfoComponent_nz_option_10_Template, 1, 2, "nz-option", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "input", 10);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewHistoryOrgInfoComponent_Template_input_ngModelChange_11_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.treeSearchValue, $event) || (ctx.treeSearchValue = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(13, "div", 11)(14, "button", 12);
      \u0275\u0275listener("click", function ViewHistoryOrgInfoComponent_Template_button_click_14_listener() {
        return ctx.expandAllNodes();
      });
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 13);
      \u0275\u0275listener("click", function ViewHistoryOrgInfoComponent_Template_button_click_17_listener() {
        return ctx.collapseAllNodes();
      });
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "nz-spin", 14)(21, "div", 15)(22, "nz-tree", 16);
      \u0275\u0275twoWayListener("nzExpandedKeysChange", function ViewHistoryOrgInfoComponent_Template_nz_tree_nzExpandedKeysChange_22_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.expandedKeys, $event) || (ctx.expandedKeys = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("nzClick", function ViewHistoryOrgInfoComponent_Template_nz_tree_nzClick_22_listener($event) {
        return ctx.onTreeClick($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, ViewHistoryOrgInfoComponent_div_23_Template, 3, 4, "div", 17);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(24, "div", 18);
      \u0275\u0275template(25, ViewHistoryOrgInfoComponent_nz_card_25_Template, 53, 54, "nz-card", 19);
      \u0275\u0275elementStart(26, "nz-card", 20);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275template(28, ViewHistoryOrgInfoComponent_ng_template_28_Template, 3, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementStart(30, "nz-table", 21, 1)(32, "thead")(33, "tr")(34, "th", 22);
      \u0275\u0275text(35);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th");
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "th");
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "th");
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "th");
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "th");
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "th", 23);
      \u0275\u0275text(53);
      \u0275\u0275pipe(54, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "tbody");
      \u0275\u0275template(56, ViewHistoryOrgInfoComponent_tr_56_Template, 4, 4, "tr", 24)(57, ViewHistoryOrgInfoComponent_tr_57_Template, 15, 7, "tr", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275template(58, ViewHistoryOrgInfoComponent_ng_template_58_Template, 2, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const histOrgEmpExtra_r8 = \u0275\u0275reference(29);
      const histOrgEmpTable_r9 = \u0275\u0275reference(31);
      const histOrgEmpTotalTpl_r10 = \u0275\u0275reference(59);
      \u0275\u0275advance(2);
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(3, 35, "org.orgManage.viewHistoryOrgInfo.title", "L\u1ECBch s\u1EED thay \u0111\u1ED5i c\u01A1 c\u1EA5u t\u1ED5 ch\u1EE9c"))("nzBodyStyle", \u0275\u0275pureFunction0(77, _c0));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 38, "orgResumeProcess.versionName", "T\xEAn phi\xEAn b\u1EA3n"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedResumeNo);
      \u0275\u0275property("nzLoading", ctx.loadingResume())("nzPlaceHolder", \u0275\u0275pipeBind2(9, 41, "orgResumeProcess.selectPlaceholder", "-- Ch\u1ECDn phi\xEAn b\u1EA3n thay \u0111\u1ED5i --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.resumeOptions());
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.treeSearchValue);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(12, 44, "orgCompose.searchTreePlaceholder", "T\xECm ki\u1EBFm ph\xF2ng ban..."));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(16, 47, "orgCompose.expandAll", "M\u1EDF t\u1EA5t c\u1EA3"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(19, 50, "orgCompose.collapseAll", "\u0110\xF3ng t\u1EA5t c\u1EA3"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzSpinning", ctx.loadingTree());
      \u0275\u0275advance(2);
      \u0275\u0275property("nzData", ctx.treeNodes())("nzSearchValue", ctx.treeSearchValue);
      \u0275\u0275twoWayProperty("nzExpandedKeys", ctx.expandedKeys);
      \u0275\u0275property("nzSelectedKeys", ctx.selectedDeptKey ? \u0275\u0275pureFunction1(78, _c1, ctx.selectedDeptKey) : \u0275\u0275pureFunction0(80, _c2));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loadingTree() && ctx.treeNodes().length === 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.selectedOrgInfo());
      \u0275\u0275advance();
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(27, 53, "orgCompose.employeeListTitle", "Danh s\xE1ch nh\xE2n vi\xEAn"))("nzExtra", histOrgEmpExtra_r8);
      \u0275\u0275advance(4);
      \u0275\u0275property("nzData", ctx.employees())("nzLoading", ctx.loadingEmployees())("nzPageSize", 10)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", histOrgEmpTotalTpl_r10);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 56, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 59, "org.title.LOCAL_NAME", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 62, "org.title.EMPID", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 65, "org.title.BUSINESS_NAME", "Ch\u1EE9c v\u1EE5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 68, "org.title.POSITION_NO", "Ch\u1EE9c danh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 71, "hrm.empinfo.hrcard.empGroup", "Nh\xF3m nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 74, "common.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loadingEmployees() && ctx.employees().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", histOrgEmpTable_r9.data);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgModel, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzSpinModule, NzSpinComponent, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzTreeModule, NzTreeComponent, TranslatePipe], styles: ["\n.hist-org-tree-scroll[_ngcontent-%COMP%] {\n  max-height: 600px;\n  overflow-y: auto;\n}\n.hist-org-inline-checkbox[_ngcontent-%COMP%] {\n  margin-top: 28px;\n}\n/*# sourceMappingURL=view-history-org-info.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewHistoryOrgInfoComponent, [{
    type: Component,
    args: [{ selector: "app-view-history-org-info", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzButtonModule,
      NzCardModule,
      NzInputModule,
      NzSelectModule,
      NzSpinModule,
      NzTableModule,
      NzTreeModule,
      TranslatePipe
    ], template: `<div class="row">
  <!-- C\xE2y t\u1ED5 ch\u1EE9c b\xEAn tr\xE1i -->
  <div class="col-md-3 mb-3">
    <nz-card [nzTitle]="'org.orgManage.viewHistoryOrgInfo.title' | translate:'L\u1ECBch s\u1EED thay \u0111\u1ED5i c\u01A1 c\u1EA5u t\u1ED5 ch\u1EE9c'" [nzBodyStyle]="{ padding: '12px' }">
      <div class="mb-2">
        <label class="form-label fw-bold">{{ 'orgResumeProcess.versionName' | translate:'T\xEAn phi\xEAn b\u1EA3n' }}</label>
        <nz-select class="w-100" id="histOrgResumeSelect" [(ngModel)]="selectedResumeNo" (ngModelChange)="onResumeChange($event)"
                   [nzLoading]="loadingResume()" nzShowSearch nzAllowClear
                   [nzPlaceHolder]="'orgResumeProcess.selectPlaceholder' | translate:'-- Ch\u1ECDn phi\xEAn b\u1EA3n thay \u0111\u1ED5i --'">
          <nz-option *ngFor="let r of resumeOptions()" [nzValue]="r.no" [nzLabel]="resumeLabel(r)"></nz-option>
        </nz-select>
      </div>

      <input nz-input class="mb-2" id="histOrgTreeSearch" [(ngModel)]="treeSearchValue" name="histOrgTreeSearch"
             [placeholder]="'orgCompose.searchTreePlaceholder' | translate:'T\xECm ki\u1EBFm ph\xF2ng ban...'">

      <div class="mb-2 btn-group">
        <button nz-button nzSize="small" type="button" id="histOrgBtnExpandAll" (click)="expandAllNodes()">
          {{ 'orgCompose.expandAll' | translate:'M\u1EDF t\u1EA5t c\u1EA3' }}
        </button>
        <button nz-button nzSize="small" type="button" id="histOrgBtnCollapseAll" (click)="collapseAllNodes()">
          {{ 'orgCompose.collapseAll' | translate:'\u0110\xF3ng t\u1EA5t c\u1EA3' }}
        </button>
      </div>

      <nz-spin [nzSpinning]="loadingTree()">
        <div class="hist-org-tree-scroll">
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

  <!-- Th\xF4ng tin t\u1ED5 ch\u1EE9c + danh s\xE1ch nh\xE2n vi\xEAn b\xEAn ph\u1EA3i (ch\u1EC9 xem) -->
  <div class="col-md-9 mb-3">
    <nz-card class="mb-3" [nzTitle]="'orgCompose.orgInfoTitle' | translate:'Th\xF4ng tin t\u1ED5 ch\u1EE9c'" *ngIf="selectedOrgInfo() as dept">
      <div class="row g-3">
        <div class="col-md-6">
          <label class="form-label">{{ 'org.orgManage.title.deptNo' | translate:'M\xE3 ph\xF2ng ban' }}</label>
          <input nz-input [ngModel]="dept.deptNo" name="histOrgDeptNo" readonly>
        </div>
        <div class="col-md-6">
          <label class="form-label">{{ 'org.orgManage.title.parentDept' | translate:'Ph\xF2ng ban tr\xEAn' }}</label>
          <input nz-input [ngModel]="dept.parentDeptNo" name="histOrgParentDeptNo" readonly>
        </div>

        <div class="col-md-6">
          <label class="form-label">{{ 'org.orgManage.title.deptEnglishName' | translate:'Ph\xF2ng ban ti\u1EBFng Anh' }}</label>
          <input nz-input [ngModel]="dept.orgNameEng" name="histOrgOrgNameEng" readonly>
        </div>
        <div class="col-md-6">
          <label class="form-label">{{ 'orgCompose.orgNameLocal' | translate:'T\xEAn \u0111\u1ECBa ph\u01B0\u01A1ng' }}</label>
          <input nz-input [ngModel]="dept.orgNameLocal" name="histOrgOrgNameLocal" readonly>
        </div>

        <div class="col-md-6">
          <label class="form-label">{{ 'org.orgManage.title.deptType' | translate:'Lo\u1EA1i h\xECnh ph\xF2ng ban' }}</label>
          <input nz-input [ngModel]="dept.deptType" name="histOrgDeptType" readonly>
        </div>
        <div class="col-md-6">
          <label class="form-label">{{ 'org.orgManage.ORGANIZATIONAL_LEVEL.Z' | translate:'C\u1EA5p' }}</label>
          <input nz-input [ngModel]="dept.deptLevel" name="histOrgDeptLevel" readonly>
        </div>

        <div class="col-md-6">
          <label class="form-label">{{ 'org.orgManage.DEPARTMENT_INFORMATION.Z' | translate:'Tr\u01B0\u1EDFng ph\xF2ng' }}</label>
          <input nz-input [ngModel]="dept.managerEmpId" name="histOrgManagerEmpId" readonly>
        </div>
        <div class="col-md-6">
          <label class="form-label">{{ 'common.createDate' | translate:'Ng\xE0y t\u1EA1o' }}</label>
          <input nz-input [ngModel]="dateCreatedDisplay(dept)" name="histOrgDateCreated" readonly>
        </div>

        <div class="col-md-6 d-flex align-items-center">
          <label class="form-check-label hist-org-inline-checkbox">
            <input type="checkbox" [ngModel]="dept.isPartTime === 'Y'" name="histOrgIsPartTime" disabled>
            {{ 'orgCompose.isPartTime' | translate:'Ki\xEAm nhi\u1EC7m' }}
          </label>
        </div>
        <div class="col-md-6">
          <label class="form-label">{{ 'orgCompose.costCenter' | translate:'M\xE3 chi ph\xED' }}</label>
          <input nz-input [ngModel]="dept.costCenter" name="histOrgCostCenter" readonly>
        </div>
      </div>
    </nz-card>

    <nz-card [nzTitle]="'orgCompose.employeeListTitle' | translate:'Danh s\xE1ch nh\xE2n vi\xEAn'" [nzExtra]="histOrgEmpExtra">
      <ng-template #histOrgEmpExtra>
        <span class="badge bg-primary" id="histOrgTotalEmployees">
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ employees().length }}
        </span>
      </ng-template>

      <nz-table [nzData]="employees()" [nzLoading]="loadingEmployees()" [nzPageSize]="10" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="histOrgEmpTotalTpl" #histOrgEmpTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
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
            <td colspan="7" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let emp of histOrgEmpTable.data; let i = index">
            <td class="text-center">{{ i + 1 }}</td>
            <td>{{ emp.localName }}</td>
            <td>{{ emp.empId }}</td>
            <td>{{ emp.dutyNo }}</td>
            <td>{{ emp.postNo }}</td>
            <td>{{ emp.empTypeCode }}</td>
            <td class="text-center">{{ emp.statusCode }}</td>
          </tr>
        </tbody>
        <ng-template #histOrgEmpTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>
`, styles: ["/* src/app/view-history-org-info/view-history-org-info.component.css */\n.hist-org-tree-scroll {\n  max-height: 600px;\n  overflow-y: auto;\n}\n.hist-org-inline-checkbox {\n  margin-top: 28px;\n}\n/*# sourceMappingURL=view-history-org-info.component.css.map */\n"] }]
  }], () => [{ type: ViewComposeOrgService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewHistoryOrgInfoComponent, { className: "ViewHistoryOrgInfoComponent", filePath: "src/app/view-history-org-info/view-history-org-info.component.ts", lineNumber: 69 });
})();
export {
  ViewHistoryOrgInfoComponent
};
//# debugId=d27a8683-e413-502c-acb3-b85197f345b7
//# sourceMappingURL=chunk-ETE2AGUS.js.map
