import {
  NzMessageService
} from "./chunk-XWW7CXU6.js";
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
  formatDate,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
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

// src/app/view-ar-shift-group-list/view-ar-shift-group-list.service.ts
var API_BASE = "/ess/deptEmpAtt/api/shiftGroup";
var ViewArShiftGroupListService = class _ViewArShiftGroupListService {
  constructor(http) {
    this.http = http;
  }
  http;
  list(empId, empName) {
    let httpParams = new HttpParams();
    if (empId)
      httpParams = httpParams.set("empId", empId);
    if (empName)
      httpParams = httpParams.set("empName", empName);
    return this.http.get(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
  }
  save(payload) {
    return this.http.post(`${API_BASE}/save`, payload, {
      withCredentials: true
    });
  }
  getCodeList(parentCodeNo) {
    return this.http.get("/sys/api/getCode/list", {
      params: new HttpParams().set("parentCodeNo", parentCodeNo),
      withCredentials: true
    });
  }
  static \u0275fac = function ViewArShiftGroupListService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewArShiftGroupListService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewArShiftGroupListService, factory: _ViewArShiftGroupListService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewArShiftGroupListService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-ar-shift-group-list/view-ar-shift-group-list.component.ts
var _c0 = () => ({ x: "1300px", y: "calc(100vh - 420px)" });
function ViewArShiftGroupListComponent_nz_alert_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 25);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ViewArShiftGroupListComponent_tr_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewArShiftGroupListComponent_tr_57_nz_option_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 34);
  }
  if (rf & 2) {
    const s_r5 = ctx.$implicit;
    \u0275\u0275property("nzValue", s_r5.codeNo)("nzLabel", s_r5.codeName || s_r5.description || s_r5.codeNo);
  }
}
function ViewArShiftGroupListComponent_tr_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 27);
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
    \u0275\u0275elementStart(9, "td")(10, "nz-select", 28);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewArShiftGroupListComponent_tr_57_Template_nz_select_ngModelChange_10_listener($event) {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      \u0275\u0275twoWayBindingSet(row_r4.editShiftNo, $event) || (row_r4.editShiftNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(12, ViewArShiftGroupListComponent_tr_57_nz_option_12_Template, 1, 2, "nz-option", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "nz-date-picker", 30);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArShiftGroupListComponent_tr_57_Template_nz_date_picker_ngModelChange_14_listener($event) {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      \u0275\u0275twoWayBindingSet(row_r4.editStartDate, $event) || (row_r4.editStartDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function ViewArShiftGroupListComponent_tr_57_Template_input_ngModelChange_16_listener($event) {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      \u0275\u0275twoWayBindingSet(row_r4.editRemark, $event) || (row_r4.editRemark = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 27)(18, "button", 32);
    \u0275\u0275listener("click", function ViewArShiftGroupListComponent_tr_57_Template_button_click_18_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveRow(row_r4));
    });
    \u0275\u0275element(19, "i", 33);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r6 + 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.empId || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.empId);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.localName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.localName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.beforShiftName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.beforShiftName);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", row_r4.editShiftNo);
    \u0275\u0275property("name", "vsgShiftNo" + i_r6)("nzPlaceHolder", \u0275\u0275pipeBind2(11, 17, "addShift.selectShift", "-- Ch\u1ECDn ca l\xE0m vi\u1EC7c --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.shiftOptions());
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", row_r4.editStartDate);
    \u0275\u0275property("name", "vsgStartDate" + i_r6);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", row_r4.editRemark);
    \u0275\u0275property("name", "vsgRemark" + i_r6);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLoading", row_r4.saving);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(21, 20, "common.save", "L\u01B0u"), " ");
  }
}
function ViewArShiftGroupListComponent_ng_template_58_Template(rf, ctx) {
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
  "common.empId",
  "common.empName",
  "common.placeholder.empId",
  "common.placeholder.empName",
  "common.search",
  "common.clearFilter",
  "common.stt",
  "ess.shiftGroup.col.beforeShift",
  "ess.shiftGroup.col.afterShift",
  "common.startDate",
  "common.note",
  "common.action",
  "common.noData",
  "common.totalRows",
  "common.loadFail",
  "common.save",
  "common.saveSuccess",
  "common.saveFail",
  "addShift.selectShift",
  "addShift.msg.selectShift",
  "addShift.msg.selectDate",
  "empCal.msg.invalidData"
];
var SHIFT_PARENT_CODE = "400223";
var PAGE_SIZE_OPTIONS = [25, 50, 100, 200];
var ViewArShiftGroupListComponent = class _ViewArShiftGroupListComponent {
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
  shiftOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "shiftOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  searchEmpId = "";
  searchEmpName = "";
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.api.getCodeList(SHIFT_PARENT_CODE).subscribe((list) => this.shiftOptions.set(list ?? []));
    this.search();
  }
  search() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.list(this.searchEmpId.trim(), this.searchEmpName.trim()).subscribe({
      next: (rows) => {
        this.rows.set((rows ?? []).map((r) => __spreadProps(__spreadValues({}, r), {
          editShiftNo: r.shiftNo || null,
          editStartDate: this.parseYmd(r.startDate),
          editRemark: r.remark || "",
          saving: false
        })));
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
    this.searchEmpId = "";
    this.searchEmpName = "";
    this.search();
  }
  saveRow(row) {
    if (!row.personId) {
      this.message.warning(this.i18n.t("empCal.msg.invalidData", "D\u1EEF li\u1EC7u kh\xF4ng h\u1EE3p l\u1EC7!"));
      return;
    }
    if (!row.editShiftNo) {
      this.message.warning(this.i18n.t("addShift.msg.selectShift", "Vui l\xF2ng ch\u1ECDn Ca l\xE0m vi\u1EC7c"));
      return;
    }
    if (!row.editStartDate) {
      this.message.warning(this.i18n.t("addShift.msg.selectDate", "Vui l\xF2ng ch\u1ECDn Ng\xE0y c\xF4ng"));
      return;
    }
    const payload = {
      PERSON_ID: row.personId,
      BEFOR_SHIFT_NO: row.beforShiftNo || "",
      SHIFT_NO: row.editShiftNo,
      START_DATE: formatDate(row.editStartDate, "yyyy-MM-dd", "vi"),
      REMARK: row.editRemark || ""
    };
    row.saving = true;
    this.api.save(payload).subscribe({
      next: (res) => {
        row.saving = false;
        if (!res.success) {
          this.message.error(res.error || this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!"));
          return;
        }
        this.message.success(res.message || this.i18n.t("common.saveSuccess", "L\u01B0u th\xE0nh c\xF4ng!"));
      },
      error: (err) => {
        row.saving = false;
        this.message.error(err?.error?.error || this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  parseYmd(ymd) {
    if (!ymd)
      return null;
    const [y, m, d] = ymd.split("-").map(Number);
    if (!y || !m || !d)
      return null;
    return new Date(y, m - 1, d);
  }
  static \u0275fac = function ViewArShiftGroupListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewArShiftGroupListComponent)(\u0275\u0275directiveInject(ViewArShiftGroupListService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewArShiftGroupListComponent, selectors: [["app-view-ar-shift-group-list"]], decls: 60, vars: 69, consts: [["vsgTable", ""], ["vsgTotalTpl", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["nz-input", "", "name", "vsgSearchEmpId", 3, "ngModelChange", "ngModel", "placeholder"], ["nz-input", "", "name", "vsgSearchEmpName", 3, "ngModelChange", "ngModel", "placeholder"], [1, "col-md-6", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "120px"], ["nzWidth", "180px"], ["nzWidth", "220px"], ["nzWidth", "150px"], ["nzWidth", "110px", 1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "8", 1, "text-center", "text-muted"], [1, "text-center"], [1, "w-100", 3, "ngModelChange", "ngModel", "name", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel", "name"], ["nz-input", "", 3, "ngModelChange", "ngModel", "name"], ["nz-button", "", "nzType", "primary", "nzSize", "small", 3, "click", "nzLoading"], [1, "bx", "bx-save"], [3, "nzValue", "nzLabel"]], template: function ViewArShiftGroupListComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "nz-card", 4)(3, "form", 5);
      \u0275\u0275listener("ngSubmit", function ViewArShiftGroupListComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 6)(5, "label", 7);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "input", 8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewArShiftGroupListComponent_Template_input_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchEmpId, $event) || (ctx.searchEmpId = $event);
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
      \u0275\u0275twoWayListener("ngModelChange", function ViewArShiftGroupListComponent_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchEmpName, $event) || (ctx.searchEmpName = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 10)(17, "button", 11);
      \u0275\u0275element(18, "i", 12);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 13);
      \u0275\u0275listener("click", function ViewArShiftGroupListComponent_Template_button_click_21_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(22, "i", 14);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(25, "nz-card");
      \u0275\u0275template(26, ViewArShiftGroupListComponent_nz_alert_26_Template, 1, 1, "nz-alert", 15);
      \u0275\u0275elementStart(27, "nz-table", 16, 0)(29, "thead")(30, "tr")(31, "th", 17);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "th", 18);
      \u0275\u0275text(35);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th", 19);
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "th", 19);
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "th", 20);
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "th", 21);
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "th", 20);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "th", 22);
      \u0275\u0275text(53);
      \u0275\u0275pipe(54, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "tbody");
      \u0275\u0275template(56, ViewArShiftGroupListComponent_tr_56_Template, 4, 4, "tr", 23)(57, ViewArShiftGroupListComponent_tr_57_Template, 22, 23, "tr", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275template(58, ViewArShiftGroupListComponent_ng_template_58_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const vsgTable_r8 = \u0275\u0275reference(28);
      const vsgTotalTpl_r9 = \u0275\u0275reference(59);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 26, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchEmpId);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(9, 29, "common.placeholder.empId", "Nh\u1EADp m\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 32, "common.empName", "T\xEAn nh\xE2n vi\xEAn"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchEmpName);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(15, 35, "common.placeholder.empName", "Nh\u1EADp t\xEAn nh\xE2n vi\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(20, 38, "common.search", "T\xECm ki\u1EBFm"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(24, 41, "common.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", vsgTotalTpl_r9)("nzScroll", \u0275\u0275pureFunction0(68, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 44, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 47, "common.empId", "M\xE3 NV"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 50, "common.empName", "T\xEAn nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 53, "ess.shiftGroup.col.beforeShift", "Ca tr\u01B0\u1EDBc thay \u0111\u1ED5i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 56, "ess.shiftGroup.col.afterShift", "Ca sau thay \u0111\u1ED5i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 59, "common.startDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 62, "common.note", "Ghi ch\xFA"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 65, "common.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", vsgTable_r8.data);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzDatePickerModule, NzDatePickerComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\n/*# sourceMappingURL=view-ar-shift-group-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewArShiftGroupListComponent, [{
    type: Component,
    args: [{ selector: "app-view-ar-shift-group-list", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzSelectModule,
      NzDatePickerModule,
      NzButtonModule,
      NzAlertModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm - \u0111\u1EE9ng im khi cu\u1ED9n (xem .sticky-filter-card trong styles.css) -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3" (ngSubmit)="search()">
        <div class="col-md-3">
          <label class="form-label">{{ 'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</label>
          <input nz-input [(ngModel)]="searchEmpId" name="vsgSearchEmpId"
                 [placeholder]="'common.placeholder.empId' | translate:'Nh\u1EADp m\xE3 nh\xE2n vi\xEAn'">
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'common.empName' | translate:'T\xEAn nh\xE2n vi\xEAn' }}</label>
          <input nz-input [(ngModel)]="searchEmpName" name="vsgSearchEmpName"
                 [placeholder]="'common.placeholder.empName' | translate:'Nh\u1EADp t\xEAn nh\xE2n vi\xEAn'">
        </div>
        <div class="col-md-6 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'common.search' | translate:'T\xECm ki\u1EBFm' }}
          </button>
          <button nz-button type="button" (click)="clearSearch()">
            <i class="bx bx-x"></i> {{ 'common.clearFilter' | translate:'X\xF3a l\u1ECDc' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="vsgTotalTpl"
                [nzScroll]="{ x: '1300px', y: 'calc(100vh - 420px)' }" #vsgTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th nzWidth="120px">{{ 'common.empId' | translate:'M\xE3 NV' }}</th>
            <th nzWidth="180px">{{ 'common.empName' | translate:'T\xEAn nh\xE2n vi\xEAn' }}</th>
            <th nzWidth="180px">{{ 'ess.shiftGroup.col.beforeShift' | translate:'Ca tr\u01B0\u1EDBc thay \u0111\u1ED5i' }}</th>
            <th nzWidth="220px">{{ 'ess.shiftGroup.col.afterShift' | translate:'Ca sau thay \u0111\u1ED5i' }}</th>
            <th nzWidth="150px">{{ 'common.startDate' | translate:'Ng\xE0y b\u1EAFt \u0111\u1EA7u' }}</th>
            <th nzWidth="220px">{{ 'common.note' | translate:'Ghi ch\xFA' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'common.action' | translate:'Thao t\xE1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="8" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of vsgTable.data; let i = index">
            <td class="text-center">{{ i + 1 }}</td>
            <td [attr.title]="row.empId || null">{{ row.empId }}</td>
            <td [attr.title]="row.localName || null">{{ row.localName }}</td>
            <td [attr.title]="row.beforShiftName || null">{{ row.beforShiftName }}</td>
            <td>
              <nz-select class="w-100" [(ngModel)]="row.editShiftNo" [name]="'vsgShiftNo' + i"
                         [nzPlaceHolder]="'addShift.selectShift' | translate:'-- Ch\u1ECDn ca l\xE0m vi\u1EC7c --'">
                <nz-option *ngFor="let s of shiftOptions()" [nzValue]="s.codeNo"
                           [nzLabel]="s.codeName || s.description || s.codeNo"></nz-option>
              </nz-select>
            </td>
            <td>
              <nz-date-picker class="w-100" [(ngModel)]="row.editStartDate" [name]="'vsgStartDate' + i"
                               nzFormat="dd/MM/yyyy"></nz-date-picker>
            </td>
            <td>
              <input nz-input [(ngModel)]="row.editRemark" [name]="'vsgRemark' + i">
            </td>
            <td class="text-center">
              <button nz-button nzType="primary" nzSize="small" [nzLoading]="row.saving" (click)="saveRow(row)">
                <i class="bx bx-save"></i> {{ 'common.save' | translate:'L\u01B0u' }}
              </button>
            </td>
          </tr>
        </tbody>
        <ng-template #vsgTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>
`, styles: ["/* src/app/view-ar-shift-group-list/view-ar-shift-group-list.component.css */\n/*# sourceMappingURL=view-ar-shift-group-list.component.css.map */\n"] }]
  }], () => [{ type: ViewArShiftGroupListService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewArShiftGroupListComponent, { className: "ViewArShiftGroupListComponent", filePath: "src/app/view-ar-shift-group-list/view-ar-shift-group-list.component.ts", lineNumber: 63 });
})();
export {
  ViewArShiftGroupListComponent
};
//# debugId=667d573a-607d-5ed7-9c8e-9b2be798df37
//# sourceMappingURL=chunk-JDUBEJNM.js.map
