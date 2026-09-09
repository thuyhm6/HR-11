import {
  ChangeUserService
} from "./chunk-L26I55F6.js";
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTW5U2M5.js";

// src/app/change-user/change-user.component.ts
function ChangeUserComponent_nz_alert_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 19);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r0.warningMessage() ?? "");
  }
}
function ChangeUserComponent_nz_alert_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 20);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r0.errorMessage() ?? "");
  }
}
function ChangeUserComponent_nz_alert_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 21);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r0.successMessage() ?? "");
  }
}
function ChangeUserComponent_ng_container_23_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.deptTreeErrorMessage());
  }
}
function ChangeUserComponent_ng_container_23_nz_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 40);
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r3.codeNo)("nzLabel", c_r3.codeName);
  }
}
function ChangeUserComponent_ng_container_23_nz_alert_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 41);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzMessage", ctx_r0.pickerErrorMessage() ?? "");
  }
}
function ChangeUserComponent_ng_container_23_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 42);
    \u0275\u0275listener("click", function ChangeUserComponent_ng_container_23_tr_52_Template_tr_click_0_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectEmployee(row_r5));
    });
    \u0275\u0275elementStart(1, "td", 43);
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
    const row_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r6 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.empId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.deptName || row_r5.deptNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.position);
  }
}
function ChangeUserComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 22);
    \u0275\u0275listener("ngSubmit", function ChangeUserComponent_ng_container_23_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.pickerSearch());
    });
    \u0275\u0275elementStart(2, "div", 23)(3, "label", 8);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 24);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ChangeUserComponent_ng_container_23_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.pickerKeyword, $event) || (ctx_r0.pickerKeyword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function ChangeUserComponent_ng_container_23_Template_input_keydown_enter_6_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r0.pickerSearch());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 25)(9, "label", 8);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "nz-tree-select", 26);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ChangeUserComponent_ng_container_23_Template_nz_tree_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.pickerDeptNos, $event) || (ctx_r0.pickerDeptNos = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275template(14, ChangeUserComponent_ng_container_23_div_14_Template, 2, 1, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 28)(16, "label", 8);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "nz-select", 29);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ChangeUserComponent_ng_container_23_Template_nz_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.pickerEmpOffice, $event) || (ctx_r0.pickerEmpOffice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(21, ChangeUserComponent_ng_container_23_nz_option_21_Template, 1, 2, "nz-option", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 31)(23, "button", 32);
    \u0275\u0275element(24, "i", 12);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 11);
    \u0275\u0275listener("click", function ChangeUserComponent_ng_container_23_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.pickerClear());
    });
    \u0275\u0275element(28, "i", 33);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(31, ChangeUserComponent_ng_container_23_nz_alert_31_Template, 1, 1, "nz-alert", 34);
    \u0275\u0275elementStart(32, "nz-table", 35, 0)(34, "thead")(35, "tr")(36, "th", 36);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "th", 37);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "th");
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th");
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th");
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "tbody");
    \u0275\u0275template(52, ChangeUserComponent_ng_container_23_tr_52_Template, 11, 5, "tr", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cuTable_r7 = \u0275\u0275reference(33);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 24, "empSearch.field.keyword", "M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pickerKeyword);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(7, 27, "empSearch.placeholder.keyword", "Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 30, "empSearch.field.dept", "Ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzNodes", ctx_r0.deptNodes());
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pickerDeptNos);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(13, 33, "vdp.search.dept.placeholder", "Ch\u1ECDn ph\xF2ng ban"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.deptTreeErrorMessage());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 36, "empSearch.field.empOffice", "Tr\u1EA1ng th\xE1i l\xE0m vi\u1EC7c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pickerEmpOffice);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(20, 39, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.empOfficeOptions());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 42, "common.search", "T\xECm ki\u1EBFm"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(30, 45, "empSearch.btn.clearFilter", "X\xF3a b\u1ED9 l\u1ECDc"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.pickerErrorMessage());
    \u0275\u0275advance();
    \u0275\u0275property("nzData", ctx_r0.pickerRows())("nzLoading", ctx_r0.pickerLoading())("nzPageSize", 10);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(38, 48, "empSearch.col.no", "STT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(41, 51, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(44, 54, "common.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(47, 57, "common.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 60, "epi.field.position", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", cuTable_r7.data);
  }
}
function ChangeUserComponent_ng_container_28_nz_alert_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 41);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzMessage", ctx_r0.confirmErrorMessage() ?? "");
  }
}
function ChangeUserComponent_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ChangeUserComponent_ng_container_28_nz_alert_1_Template, 1, 1, "nz-alert", 34);
    \u0275\u0275elementStart(2, "p", 44);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 45);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.confirmErrorMessage());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 3, "ess.changeUser.confirm", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n thay \u0111\u1ED5i ng\u01B0\u1EDDi d\xF9ng?"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.selectedEmpDisplay);
  }
}
var I18N_KEYS = [
  "ess.changeUser.empSearch",
  "ess.changeUser.changeBtn",
  "ess.changeUser.noEmpSelected",
  "ess.changeUser.confirm",
  "ess.changeUser.success",
  "ess.changeUser.error",
  "empSearch.title",
  "empSearch.field.keyword",
  "empSearch.placeholder.keyword",
  "empSearch.field.dept",
  "empSearch.field.empOffice",
  "empSearch.btn.clearFilter",
  "empSearch.col.no",
  "epi.field.position",
  "common.search",
  "common.cancel",
  "common.confirm",
  "common.selectAll",
  "common.empId",
  "common.empName",
  "common.deptName",
  "common.loadFail",
  "vdp.search.dept.placeholder",
  "mep.msg.loadDeptFailed"
];
var EMP_OFFICE_PARENT_CODE = "15118";
var ChangeUserComponent = class _ChangeUserComponent {
  constructor(api, i18n) {
    this.api = api;
    this.i18n = i18n;
  }
  api;
  i18n;
  deptNodes = signal(
    [],
    ...ngDevMode ? [{ debugName: "deptNodes" }] : (
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
  deptTreeErrorMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "deptTreeErrorMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedEmpDisplay = "";
  selectedPersonId = null;
  changing = signal(
    false,
    ...ngDevMode ? [{ debugName: "changing" }] : (
      /* istanbul ignore next */
      []
    )
  );
  warningMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "warningMessage" }] : (
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
  successMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "successMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
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
  pickerErrorMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "pickerErrorMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  pickerKeyword = "";
  pickerDeptNos = [];
  pickerEmpOffice = null;
  confirmVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "confirmVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  confirmErrorMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "confirmErrorMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** id -> danh sách id con trực tiếp - dùng để mở rộng lựa chọn cây phòng ban khi tìm kiếm (xem
   *  giải thích ở expandDeptSelection, tương tự manage-emp-position-info.component.ts). */
  deptChildrenMap = /* @__PURE__ */ new Map();
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadDeptTree();
    this.api.getCodeList(EMP_OFFICE_PARENT_CODE).subscribe((list) => this.empOfficeOptions.set(list ?? []));
  }
  /** Người dùng gõ lại nội dung ô Mã nhân viên/Họ tên -> bỏ personId đã chọn trước đó vì text
   *  hiển thị không còn khớp với lựa chọn cũ (chỉ được set lại khi search ra đúng nhân viên). */
  onEmpInputChange() {
    this.selectedPersonId = null;
  }
  openPicker() {
    this.warningMessage.set(null);
    this.pickerKeyword = this.selectedEmpDisplay;
    this.pickerDeptNos = [];
    this.pickerEmpOffice = null;
    this.pickerVisible.set(true);
    this.pickerSearch();
  }
  closePicker() {
    this.pickerVisible.set(false);
  }
  pickerSearch() {
    this.pickerLoading.set(true);
    this.pickerErrorMessage.set(null);
    this.api.searchEmployees({
      keyword: this.pickerKeyword.trim(),
      deptCodes: this.expandDeptSelection(this.pickerDeptNos),
      empOffice: this.pickerEmpOffice ?? ""
    }).subscribe({
      next: (rows) => {
        this.pickerLoading.set(false);
        if (rows && rows.length === 1) {
          this.selectEmployee(rows[0]);
          return;
        }
        this.pickerRows.set(rows ?? []);
      },
      error: () => {
        this.pickerErrorMessage.set(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.pickerRows.set([]);
        this.pickerLoading.set(false);
      }
    });
  }
  pickerClear() {
    this.pickerKeyword = "";
    this.pickerDeptNos = [];
    this.pickerEmpOffice = null;
    this.pickerSearch();
  }
  selectEmployee(row) {
    this.selectedPersonId = row.personId;
    this.selectedEmpDisplay = `${row.empId} - ${row.localName}`;
    this.pickerVisible.set(false);
  }
  onChangeClick() {
    this.errorMessage.set(null);
    this.successMessage.set(null);
    if (!this.selectedPersonId) {
      this.warningMessage.set(this.i18n.t("ess.changeUser.noEmpSelected", "Vui l\xF2ng ch\u1ECDn nh\xE2n vi\xEAn!"));
      return;
    }
    this.warningMessage.set(null);
    this.confirmErrorMessage.set(null);
    this.confirmVisible.set(true);
  }
  closeConfirm() {
    this.confirmVisible.set(false);
  }
  confirmChange() {
    if (!this.selectedPersonId)
      return;
    this.changing.set(true);
    this.confirmErrorMessage.set(null);
    this.api.changeUser(this.selectedPersonId).subscribe({
      next: () => {
        this.changing.set(false);
        this.confirmVisible.set(false);
        this.successMessage.set(this.i18n.t("ess.changeUser.success", "Thay \u0111\u1ED5i ng\u01B0\u1EDDi d\xF9ng th\xE0nh c\xF4ng!"));
        setTimeout(() => window.location.reload(), 800);
      },
      error: (err) => {
        this.changing.set(false);
        this.confirmErrorMessage.set(err?.error?.error || this.i18n.t("ess.changeUser.error", "Thay \u0111\u1ED5i ng\u01B0\u1EDDi d\xF9ng th\u1EA5t b\u1EA1i!"));
      }
    });
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
  /** nz-tree-select chỉ trả về key của node được tick trực tiếp - mở rộng xuống các phòng ban con
   *  để backend lọc IN (...) đúng, giống cascade của DeptTree.js gốc (xem giải thích chi tiết ở
   *  manage-emp-position-info.component.ts). */
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
  static \u0275fac = function ChangeUserComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChangeUserComponent)(\u0275\u0275directiveInject(ChangeUserService), \u0275\u0275directiveInject(I18nService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChangeUserComponent, selectors: [["app-change-user"]], decls: 29, vars: 37, consts: [["cuTable", ""], [1, "row"], [1, "col-12"], ["nzType", "warning", "nzShowIcon", "", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], ["nzType", "error", "nzShowIcon", "", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], ["nzType", "success", "nzShowIcon", "", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [1, "row", "g-2", "align-items-end"], [1, "col-auto"], [1, "form-label"], [1, "cu-picker-input"], ["nz-input", "", "name", "cu_empName", 2, "min-width", "260px", 3, "ngModelChange", "keydown.enter", "ngModel", "placeholder"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-search"], [1, "col-auto", "ms-auto"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click", "nzLoading"], [1, "bx", "bx-transfer-alt"], ["nzWidth", "900px", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzFooter"], [4, "nzModalContent"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], ["nzType", "warning", "nzShowIcon", "", 1, "mb-3", 3, "nzMessage"], ["nzType", "error", "nzShowIcon", "", 1, "mb-3", 3, "nzMessage"], ["nzType", "success", "nzShowIcon", "", 1, "mb-3", 3, "nzMessage"], [1, "row", "g-2", "align-items-end", "mb-3", 3, "ngSubmit"], [1, "col-md-5"], ["nz-input", "", "name", "pickerKeyword", 3, "ngModelChange", "keydown.enter", "ngModel", "placeholder"], [1, "col-md-4"], ["name", "pickerDeptNos", "nzCheckable", "", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["class", "text-danger small mt-1", 4, "ngIf"], [1, "col-md-3"], ["name", "pickerEmpOffice", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col-12", "d-flex", "gap-2"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-x"], ["nzType", "error", "class", "mb-2", 3, "nzMessage", 4, "ngIf"], ["nzSize", "small", 3, "nzData", "nzLoading", "nzPageSize"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "110px"], ["class", "cu-row-clickable", 3, "click", 4, "ngFor", "ngForOf"], [1, "text-danger", "small", "mt-1"], [3, "nzValue", "nzLabel"], ["nzType", "error", 1, "mb-2", 3, "nzMessage"], [1, "cu-row-clickable", 3, "click"], [1, "text-center"], [1, "mb-1"], [1, "fw-bold", "mb-0"]], template: function ChangeUserComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "nz-card");
      \u0275\u0275template(3, ChangeUserComponent_nz_alert_3_Template, 1, 1, "nz-alert", 3)(4, ChangeUserComponent_nz_alert_4_Template, 1, 1, "nz-alert", 4)(5, ChangeUserComponent_nz_alert_5_Template, 1, 1, "nz-alert", 5);
      \u0275\u0275elementStart(6, "div", 6)(7, "div", 7)(8, "label", 8);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 9)(12, "input", 10);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ChangeUserComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedEmpDisplay, $event) || (ctx.selectedEmpDisplay = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function ChangeUserComponent_Template_input_ngModelChange_12_listener() {
        return ctx.onEmpInputChange();
      })("keydown.enter", function ChangeUserComponent_Template_input_keydown_enter_12_listener($event) {
        $event.preventDefault();
        return ctx.openPicker();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(14, "button", 11);
      \u0275\u0275listener("click", function ChangeUserComponent_Template_button_click_14_listener() {
        return ctx.openPicker();
      });
      \u0275\u0275element(15, "i", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(16, "div", 13)(17, "button", 14);
      \u0275\u0275listener("click", function ChangeUserComponent_Template_button_click_17_listener() {
        return ctx.onChangeClick();
      });
      \u0275\u0275element(18, "i", 15);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(21, "nz-modal", 16);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275listener("nzOnCancel", function ChangeUserComponent_Template_nz_modal_nzOnCancel_21_listener() {
        return ctx.closePicker();
      });
      \u0275\u0275template(23, ChangeUserComponent_ng_container_23_Template, 53, 63, "ng-container", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "nz-modal", 18);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275listener("nzOnCancel", function ChangeUserComponent_Template_nz_modal_nzOnCancel_24_listener() {
        return ctx.closeConfirm();
      })("nzOnOk", function ChangeUserComponent_Template_nz_modal_nzOnOk_24_listener() {
        return ctx.confirmChange();
      });
      \u0275\u0275template(28, ChangeUserComponent_ng_container_28_Template, 7, 6, "ng-container", 17);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.warningMessage());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 16, "ess.changeUser.empSearch", "M\xE3 nh\xE2n vi\xEAn/H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedEmpDisplay);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(13, 19, "empSearch.placeholder.keyword", "Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275property("nzLoading", ctx.changing());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(20, 22, "ess.changeUser.changeBtn", "Thay \u0111\u1ED5i ng\u01B0\u1EDDi d\xF9ng"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzVisible", ctx.pickerVisible())("nzTitle", \u0275\u0275pipeBind2(22, 25, "empSearch.title", "T\xECm ki\u1EBFm nh\xE2n vi\xEAn"))("nzFooter", null);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.confirmVisible())("nzTitle", \u0275\u0275pipeBind2(25, 28, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.changing())("nzOkText", \u0275\u0275pipeBind2(26, 31, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(27, 34, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzTreeSelectModule, NzTreeSelectComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\n.cu-picker-input[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.cu-row-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.cu-row-clickable[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n/*# sourceMappingURL=change-user.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChangeUserComponent, [{
    type: Component,
    args: [{ selector: "app-change-user", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzSelectModule,
      NzButtonModule,
      NzTreeSelectModule,
      NzModalModule,
      NzAlertModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <nz-card>
      <nz-alert *ngIf="warningMessage()" nzType="warning" [nzMessage]="warningMessage() ?? ''" nzShowIcon class="mb-3"></nz-alert>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" nzShowIcon class="mb-3"></nz-alert>
      <nz-alert *ngIf="successMessage()" nzType="success" [nzMessage]="successMessage() ?? ''" nzShowIcon class="mb-3"></nz-alert>

      <div class="row g-2 align-items-end">
        <div class="col-auto">
          <label class="form-label">{{ 'ess.changeUser.empSearch' | translate:'M\xE3 nh\xE2n vi\xEAn/H\u1ECD t\xEAn' }}</label>
          <div class="cu-picker-input">
            <input nz-input [(ngModel)]="selectedEmpDisplay" name="cu_empName"
                   style="min-width:260px;"
                   [placeholder]="'empSearch.placeholder.keyword' | translate:'Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn'"
                   (ngModelChange)="onEmpInputChange()"
                   (keydown.enter)="$event.preventDefault(); openPicker()">
            <button nz-button type="button" (click)="openPicker()">
              <i class="bx bx-search"></i>
            </button>
          </div>
        </div>
        <div class="col-auto ms-auto">
          <button nz-button nzType="primary" type="button" [nzLoading]="changing()" (click)="onChangeClick()">
            <i class="bx bx-transfer-alt"></i>
            {{ 'ess.changeUser.changeBtn' | translate:'Thay \u0111\u1ED5i ng\u01B0\u1EDDi d\xF9ng' }}
          </button>
        </div>
      </div>
    </nz-card>
  </div>
</div>

<!-- Modal t\xECm ki\u1EBFm nh\xE2n vi\xEAn - thay cho fragment employeeSearchModal.html (jQuery + DataTables). -->
<nz-modal [nzVisible]="pickerVisible()" [nzTitle]="'empSearch.title' | translate:'T\xECm ki\u1EBFm nh\xE2n vi\xEAn'"
          nzWidth="900px" (nzOnCancel)="closePicker()" [nzFooter]="null">
  <ng-container *nzModalContent>
    <form class="row g-2 align-items-end mb-3" (ngSubmit)="pickerSearch()">
      <div class="col-md-5">
        <label class="form-label">{{ 'empSearch.field.keyword' | translate:'M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn' }}</label>
        <input nz-input [(ngModel)]="pickerKeyword" name="pickerKeyword"
               [placeholder]="'empSearch.placeholder.keyword' | translate:'Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn'"
               (keydown.enter)="$event.preventDefault(); pickerSearch()">
      </div>
      <div class="col-md-4">
        <label class="form-label">{{ 'empSearch.field.dept' | translate:'Ph\xF2ng ban' }}</label>
        <nz-tree-select class="w-100" [nzNodes]="deptNodes()" [(ngModel)]="pickerDeptNos" name="pickerDeptNos"
                         nzCheckable nzShowSearch nzAllowClear
                         [nzPlaceHolder]="'vdp.search.dept.placeholder' | translate:'Ch\u1ECDn ph\xF2ng ban'"></nz-tree-select>
        <div *ngIf="deptTreeErrorMessage()" class="text-danger small mt-1">{{ deptTreeErrorMessage() }}</div>
      </div>
      <div class="col-md-3">
        <label class="form-label">{{ 'empSearch.field.empOffice' | translate:'Tr\u1EA1ng th\xE1i l\xE0m vi\u1EC7c' }}</label>
        <nz-select class="w-100" [(ngModel)]="pickerEmpOffice" name="pickerEmpOffice" nzAllowClear
                   [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
          <nz-option *ngFor="let c of empOfficeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
        </nz-select>
      </div>
      <div class="col-12 d-flex gap-2">
        <button nz-button nzType="primary" type="submit">
          <i class="bx bx-search"></i> {{ 'common.search' | translate:'T\xECm ki\u1EBFm' }}
        </button>
        <button nz-button type="button" (click)="pickerClear()">
          <i class="bx bx-x"></i> {{ 'empSearch.btn.clearFilter' | translate:'X\xF3a b\u1ED9 l\u1ECDc' }}
        </button>
      </div>
    </form>

    <nz-alert *ngIf="pickerErrorMessage()" nzType="error" [nzMessage]="pickerErrorMessage() ?? ''" class="mb-2"></nz-alert>

    <nz-table [nzData]="pickerRows()" [nzLoading]="pickerLoading()" [nzPageSize]="10" nzSize="small" #cuTable>
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
        <tr *ngFor="let row of cuTable.data; let i = index" class="cu-row-clickable" (click)="selectEmployee(row)">
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

<!-- Modal x\xE1c nh\u1EADn \u0111\u1ED5i ng\u01B0\u1EDDi d\xF9ng - thay cho window.confirm() g\u1ED1c. -->
<nz-modal [nzVisible]="confirmVisible()" [nzTitle]="'common.confirm' | translate:'X\xE1c nh\u1EADn'"
          (nzOnCancel)="closeConfirm()" (nzOnOk)="confirmChange()" [nzOkLoading]="changing()"
          [nzOkText]="'common.confirm' | translate:'X\xE1c nh\u1EADn'"
          [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'">
  <ng-container *nzModalContent>
    <nz-alert *ngIf="confirmErrorMessage()" nzType="error" [nzMessage]="confirmErrorMessage() ?? ''" class="mb-2"></nz-alert>
    <p class="mb-1">{{ 'ess.changeUser.confirm' | translate:'B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n thay \u0111\u1ED5i ng\u01B0\u1EDDi d\xF9ng?' }}</p>
    <p class="fw-bold mb-0">{{ selectedEmpDisplay }}</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/change-user/change-user.component.css */\n.cu-picker-input {\n  display: flex;\n  gap: 4px;\n}\n.cu-row-clickable {\n  cursor: pointer;\n}\n.cu-row-clickable:hover {\n  background: #fafafa;\n}\n/*# sourceMappingURL=change-user.component.css.map */\n"] }]
  }], () => [{ type: ChangeUserService }, { type: I18nService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChangeUserComponent, { className: "ChangeUserComponent", filePath: "src/app/change-user/change-user.component.ts", lineNumber: 60 });
})();
export {
  ChangeUserComponent
};
//# debugId=68c9dc5d-fea6-524e-a446-adaa51b8e97b
//# sourceMappingURL=chunk-EPE2JOJQ.js.map
