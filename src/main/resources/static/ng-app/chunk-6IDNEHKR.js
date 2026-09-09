import {
  NzInputNumberComponent,
  NzInputNumberModule
} from "./chunk-IXCMIWQQ.js";
import {
  NzTagComponent,
  NzTagModule
} from "./chunk-HTQAHYN3.js";
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
  HttpClient,
  HttpParams,
  Injectable,
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

// src/app/view-statutory-holidays/view-statutory-holidays.service.ts
var API_BASE = "/ar/attendanceSettings/api/calender/holidays";
var ViewStatutoryHolidaysService = class _ViewStatutoryHolidaysService {
  constructor(http) {
    this.http = http;
  }
  http;
  search(iyear) {
    let params = new HttpParams();
    if (iyear)
      params = params.set("iyear", iyear);
    return this.http.get(API_BASE, { params, withCredentials: true });
  }
  save(payload) {
    return this.http.post(`${API_BASE}/save`, payload, {
      withCredentials: true
    });
  }
  delete(ddateStr) {
    const params = new HttpParams().set("ddateStr", ddateStr);
    return this.http.delete(`${API_BASE}/delete`, {
      params,
      withCredentials: true
    });
  }
  static \u0275fac = function ViewStatutoryHolidaysService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewStatutoryHolidaysService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewStatutoryHolidaysService, factory: _ViewStatutoryHolidaysService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewStatutoryHolidaysService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-statutory-holidays/view-statutory-holidays.component.ts
var _c0 = () => ({ x: "1700px", y: "calc(100vh - 420px)" });
function ViewStatutoryHolidaysComponent_nz_alert_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 35);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ViewStatutoryHolidaysComponent_tr_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewStatutoryHolidaysComponent_tr_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 37);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 37);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 37);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 37)(18, "nz-tag", 38);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "td", 37)(23, "nz-tag", 38);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "td");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td", 37);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "td", 37)(32, "nz-tag", 38);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "td", 37)(37, "button", 39);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275listener("click", function ViewStatutoryHolidaysComponent_tr_78_Template_button_click_37_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openEditModal(row_r4));
    });
    \u0275\u0275element(39, "i", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 39);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275listener("click", function ViewStatutoryHolidaysComponent_tr_78_Template_button_click_40_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDeleteConfirm(row_r4));
    });
    \u0275\u0275element(42, "i", 41);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r5 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.toDmySlash(row_r4.ddateStr));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.iyear);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.imonth);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.iday);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.companyName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.companyName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.shiftName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.shiftName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r4.typeidName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.typeidName);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColor", row_r4.workdayflag === 1 ? "blue" : "orange");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.workdayflag === 1 ? \u0275\u0275pipeBind2(20, 22, "shl.workday", "L\xE0m vi\u1EC7c") : \u0275\u0275pipeBind2(21, 25, "shl.dayOff", "Ngh\u1EC9"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("nzColor", row_r4.statutoryFlag === 1 ? "red" : "default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.statutoryFlag === 1 ? \u0275\u0275pipeBind2(25, 28, "shl.statutory", "L\u1EC5 ph\xE1p \u0111\u1ECBnh") : \u0275\u0275pipeBind2(26, 31, "common.no", "Kh\xF4ng"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275attribute("title", row_r4.remark || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.remark);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.orderno);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColor", row_r4.activity === 1 ? "success" : "default");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.activity === 1 ? \u0275\u0275pipeBind2(34, 34, "common.active", "Ho\u1EA1t \u0111\u1ED9ng") : \u0275\u0275pipeBind2(35, 37, "common.inactive", "Ng\u1EEBng"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(38, 40, "common.edit", "S\u1EEDa"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind2(41, 43, "common.delete", "X\xF3a"));
  }
}
function ViewStatutoryHolidaysComponent_ng_template_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r6 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r6, " ");
  }
}
function ViewStatutoryHolidaysComponent_ng_container_84_nz_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 54);
  }
  if (rf & 2) {
    const t_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzValue", t_r8.value)("nzLabel", ctx_r1.i18n.t(t_r8.key, t_r8.fallback));
  }
}
function ViewStatutoryHolidaysComponent_ng_container_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 42)(2, "div", 43)(3, "label", 44);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span", 45);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "nz-date-picker", 46);
    \u0275\u0275twoWayListener("ngModelChange", function ViewStatutoryHolidaysComponent_ng_container_84_Template_nz_date_picker_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.ddate, $event) || (ctx_r1.form.ddate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(9, "small", 47);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 43)(13, "label", 48);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "nz-select", 49);
    \u0275\u0275twoWayListener("ngModelChange", function ViewStatutoryHolidaysComponent_ng_container_84_Template_nz_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.typeid, $event) || (ctx_r1.form.typeid = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(17, ViewStatutoryHolidaysComponent_ng_container_84_nz_option_17_Template, 1, 2, "nz-option", 50);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 51)(19, "label", 44);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function ViewStatutoryHolidaysComponent_ng_container_84_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.remark, $event) || (ctx_r1.form.remark = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275element(23, "nz-alert", 53);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 10, "shl.holidayDate", "Ng\xE0y"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.ddate);
    \u0275\u0275property("nzDisabled", !ctx_r1.isNew());
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 13, "shl.dateHint", "\u0110\xE2y l\xE0 ng\xE0y l\u1EC5 ph\xE1p \u0111\u1ECBnh c\u1EA7n thi\u1EBFt l\u1EADp"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 16, "shl.dayType", "Lo\u1EA1i ng\xE0y (TypeID)"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.typeid);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.typeOptions);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 19, "shl.description", "Ghi ch\xFA / T\xEAn ng\xE0y l\u1EC5"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.remark);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("nzMessage", \u0275\u0275pipeBind2(24, 22, "shl.saveNote", "Khi l\u01B0u, h\u1EC7 th\u1ED1ng s\u1EBD t\u1EF1 \u0111\u1ED9ng c\u1EADp nh\u1EADt d\u1EEF li\u1EC7u sang b\u1EA3ng AR_CALENDER_GROUP v\xE0 ghi l\u1ECBch s\u1EED v\xE0o AR_CALENDER_GROUP_HISTORY."));
  }
}
function ViewStatutoryHolidaysComponent_ng_container_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 55);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 56);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, "shl.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a ng\xE0y l\u1EC5 n\xE0y kh\xF4ng?"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.deleteTargetName);
  }
}
var DEFAULT_SHIFT_NO = "14015838";
var TYPE_OPTIONS = [
  { value: "1442", key: "shl.typeHoliday", fallback: "Ng\xE0y l\u1EC5" },
  { value: "1441", key: "shl.typeWeekend", fallback: "Cu\u1ED1i tu\u1EA7n" }
];
var I18N_KEYS = [
  "common.stt",
  "common.action",
  "common.addNew",
  "common.edit",
  "common.delete",
  "common.save",
  "common.close",
  "common.confirm",
  "common.cancel",
  "common.search",
  "common.clearFilter",
  "common.loadFail",
  "common.noData",
  "common.totalRows",
  "common.status",
  "common.active",
  "common.inactive",
  "common.sortOrder",
  "common.no",
  "shl.year",
  "shl.holidayDate",
  "shl.dayType",
  "shl.workday",
  "shl.dayOff",
  "shl.statutory",
  "shl.description",
  "shl.modalAddTitle",
  "shl.modalEditTitle",
  "shl.confirmDelete",
  "shl.saveSuccess",
  "shl.saveFail",
  "shl.deleteSuccess",
  "shl.deleteFail",
  "shl.colMonth",
  "shl.colDay",
  "shl.colCompany",
  "shl.colShift",
  "shl.colWorkdayFlag",
  "shl.colStatutoryFlag",
  "shl.placeholderYear",
  "shl.dateHint",
  "shl.saveNote",
  "shl.typeHoliday",
  "shl.typeWeekend",
  "shl.msg.pleaseEnterDate",
  "essDept.exportExcel"
];
var PAGE_SIZE_OPTIONS = [25, 50, 100, 200];
var EMPTY_FORM = { ddateStr: null, ddate: null, typeid: "1442", remark: "" };
var ViewStatutoryHolidaysComponent = class _ViewStatutoryHolidaysComponent {
  constructor(api, i18n, message) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
  }
  api;
  i18n;
  message;
  pageSizeOptions = PAGE_SIZE_OPTIONS;
  typeOptions = TYPE_OPTIONS;
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
  searchYear = (/* @__PURE__ */ new Date()).getFullYear();
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
    () => this.isNew() ? this.i18n.t("shl.modalAddTitle", "Th\xEAm m\u1EDBi Ng\xE0y l\u1EC5 ph\xE1p \u0111\u1ECBnh") : `${this.i18n.t("shl.modalEditTitle", "C\u1EADp nh\u1EADt ng\xE0y l\u1EC5")}: ${this.form.ddateStr ?? ""}`,
    ...ngDevMode ? [{ debugName: "modalTitle" }] : (
      /* istanbul ignore next */
      []
    )
  );
  form = __spreadValues({}, EMPTY_FORM);
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
    this.loading.set(true);
    this.errorMessage.set(null);
    this.api.search(this.searchYear != null ? String(this.searchYear) : "").subscribe({
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
    this.searchYear = null;
    this.search();
  }
  // ==================== Modal Thêm mới / Cập nhật ====================
  openAddModal() {
    this.isNew.set(true);
    this.form = __spreadValues({}, EMPTY_FORM);
    this.modalVisible.set(true);
  }
  openEditModal(row) {
    this.isNew.set(false);
    this.form = {
      ddateStr: row.ddateStr,
      ddate: this.parseYmdSlash(row.ddateStr),
      typeid: row.typeid || "1442",
      remark: row.remark || ""
    };
    this.modalVisible.set(true);
  }
  closeModal() {
    this.modalVisible.set(false);
  }
  saveForm() {
    const ddateStr = this.isNew() ? this.formatYmdSlash(this.form.ddate) : this.form.ddateStr;
    if (!ddateStr) {
      this.message.warning(this.i18n.t("shl.msg.pleaseEnterDate", "Vui l\xF2ng nh\u1EADp Ng\xE0y!"));
      return;
    }
    const payload = {
      ddateStr,
      shiftNo: DEFAULT_SHIFT_NO,
      typeid: this.form.typeid,
      overtypeid: this.form.typeid,
      typeidDefault: this.form.typeid,
      workdayflag: 0,
      operationId: null,
      remark: this.form.remark || null,
      orderno: 0,
      activity: 1,
      statutoryFlag: 1
    };
    this.saving.set(true);
    this.api.save(payload).subscribe({
      next: (res) => {
        this.saving.set(false);
        if (res.success) {
          this.modalVisible.set(false);
          this.message.success(res.message || this.i18n.t("shl.saveSuccess", "L\u01B0u ng\xE0y l\u1EC5 th\xE0nh c\xF4ng!"));
          this.search();
        } else {
          this.message.error(res.error || this.i18n.t("shl.saveFail", "L\u01B0u ng\xE0y l\u1EC5 th\u1EA5t b\u1EA1i!"));
        }
      },
      error: (err) => {
        this.saving.set(false);
        const msg = err?.error?.error || this.i18n.t("shl.saveFail", "L\u01B0u ng\xE0y l\u1EC5 th\u1EA5t b\u1EA1i!");
        this.message.error(msg);
      }
    });
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
    return this.deleteTarget ? `${this.deleteTarget.ddateStr} - ${this.deleteTarget.remark ?? ""}` : "";
  }
  confirmDelete() {
    if (!this.deleteTarget?.ddateStr)
      return;
    this.deleting.set(true);
    this.api.delete(this.deleteTarget.ddateStr).subscribe({
      next: (res) => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        if (res.success) {
          this.message.success(res.message || this.i18n.t("shl.deleteSuccess", "X\xF3a ng\xE0y l\u1EC5 th\xE0nh c\xF4ng!"));
          this.search();
        } else {
          this.message.error(res.error || this.i18n.t("shl.deleteFail", "X\xF3a ng\xE0y l\u1EC5 th\u1EA5t b\u1EA1i!"));
        }
      },
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t("shl.deleteFail", "X\xF3a ng\xE0y l\u1EC5 th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  // ==================== Xuất Excel ====================
  /** Xuất excel client-side (bản gốc chỉ có nút Buttons của DataTables) - dùng thư viện xlsx (SheetJS)
   *  để tạo đúng file .xlsx nhị phân (xem CLAUDE.md). */
  exportExcel() {
    const headers = [
      this.i18n.t("common.stt", "STT"),
      this.i18n.t("shl.holidayDate", "Ng\xE0y"),
      this.i18n.t("shl.year", "N\u0103m"),
      this.i18n.t("shl.colMonth", "Th\xE1ng"),
      this.i18n.t("shl.colDay", "Ng\xE0y trong th\xE1ng"),
      this.i18n.t("shl.colCompany", "C\xF4ng ty"),
      this.i18n.t("shl.colShift", "Ca l\xE0m vi\u1EC7c"),
      this.i18n.t("shl.dayType", "Lo\u1EA1i ng\xE0y"),
      this.i18n.t("shl.colWorkdayFlag", "C\u1EDD l\xE0m vi\u1EC7c"),
      this.i18n.t("shl.colStatutoryFlag", "C\u1EDD ng\xE0y l\u1EC5 P\u0110"),
      this.i18n.t("shl.description", "Ghi ch\xFA"),
      this.i18n.t("common.sortOrder", "S\u1EAFp x\u1EBFp"),
      this.i18n.t("common.status", "Tr\u1EA1ng th\xE1i")
    ];
    const dataRows = this.rows().map((r, i) => [
      i + 1,
      this.toDmySlash(r.ddateStr),
      r.iyear,
      r.imonth,
      r.iday,
      r.companyName,
      r.shiftName,
      r.typeidName,
      r.workdayflag === 1 ? this.i18n.t("shl.workday", "L\xE0m vi\u1EC7c") : this.i18n.t("shl.dayOff", "Ngh\u1EC9"),
      r.statutoryFlag === 1 ? this.i18n.t("shl.statutory", "L\u1EC5 ph\xE1p \u0111\u1ECBnh") : this.i18n.t("common.no", "Kh\xF4ng"),
      r.remark,
      r.orderno,
      r.activity === 1 ? this.i18n.t("common.active", "Ho\u1EA1t \u0111\u1ED9ng") : this.i18n.t("common.inactive", "Ng\u1EEBng")
    ]);
    const worksheet = utils.aoa_to_sheet([headers, ...dataRows]);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "DanhSach");
    writeFileSync(workbook, "statutory_holidays.xlsx");
  }
  /** Chuyển 'YYYY/MM/DD' (khóa chính DDATE_STR, xem CLAUDE.md quy tắc gọi hạn) sang 'DD/MM/YYYY' để
   *  hiển thị trong bảng. */
  toDmySlash(ymd) {
    if (!ymd)
      return "";
    const [y, m, d] = ymd.split("/");
    return y && m && d ? `${d}/${m}/${y}` : ymd;
  }
  parseYmdSlash(ymd) {
    if (!ymd)
      return null;
    const [y, m, d] = ymd.split("/").map((v) => parseInt(v, 10));
    if (!y || !m || !d)
      return null;
    return new Date(y, m - 1, d);
  }
  formatYmdSlash(d) {
    return d ? formatDate(d, "yyyy/MM/dd", "vi") : null;
  }
  static \u0275fac = function ViewStatutoryHolidaysComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewStatutoryHolidaysComponent)(\u0275\u0275directiveInject(ViewStatutoryHolidaysService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewStatutoryHolidaysComponent, selectors: [["app-view-statutory-holidays"]], decls: 90, vars: 117, consts: [["shlTable", ""], ["shlTotalTpl", ""], [1, "row"], [1, "col-12"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-3"], [1, "form-label"], ["name", "shlSearchYear", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [1, "col-md-9", "d-flex", "align-items-end", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], [1, "col-12", "d-flex", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzType", "default", "type", "button", 1, "shl-btn-export", 3, "click"], [1, "bx", "bx-export"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzShowTotal", "nzScroll"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "80px", 1, "text-center"], ["nzWidth", "120px", 1, "text-center"], ["nzWidth", "150px"], ["nzWidth", "130px"], ["nzWidth", "130px", 1, "text-center"], ["nzWidth", "200px"], ["nzWidth", "90px", 1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["nzWidth", "700px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "14", 1, "text-center", "text-muted"], [1, "text-center"], [3, "nzColor"], ["nz-button", "", "nzType", "text", "nzSize", "small", 3, "click", "title"], [1, "bx", "bx-edit", "text-warning"], [1, "bx", "bx-trash", "text-danger"], [1, "row", "g-3", "mb-3"], [1, "col-md-6"], [1, "form-label", "fw-semibold"], [1, "text-danger"], ["name", "shlFormDdate", "nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel", "nzDisabled"], [1, "text-muted", "d-block", "mt-1"], [1, "form-label", "fw-semibold", "d-block"], ["name", "shlFormTypeid", 1, "w-100", 3, "ngModelChange", "ngModel"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col-md-12"], ["nz-input", "", "name", "shlFormRemark", "placeholder", "VD: T\u1EBFt Nguy\xEAn \u0110\xE1n, Qu\u1ED1c Kh\xE1nh...", 3, "ngModelChange", "ngModel"], ["nzType", "info", 3, "nzMessage"], [3, "nzValue", "nzLabel"], [1, "mb-1"], [1, "fw-bold", "mb-0"]], template: function ViewStatutoryHolidaysComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "nz-card", 4)(3, "form", 5);
      \u0275\u0275listener("ngSubmit", function ViewStatutoryHolidaysComponent_Template_form_ngSubmit_3_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(4, "div", 6)(5, "label", 7);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "nz-input-number", 8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewStatutoryHolidaysComponent_Template_nz_input_number_ngModelChange_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchYear, $event) || (ctx.searchYear = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 9)(11, "button", 10);
      \u0275\u0275element(12, "i", 11);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 12);
      \u0275\u0275listener("click", function ViewStatutoryHolidaysComponent_Template_button_click_15_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(16, "i", 13);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 14)(20, "button", 15);
      \u0275\u0275listener("click", function ViewStatutoryHolidaysComponent_Template_button_click_20_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(21, "i", 16);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 17);
      \u0275\u0275listener("click", function ViewStatutoryHolidaysComponent_Template_button_click_24_listener() {
        return ctx.exportExcel();
      });
      \u0275\u0275element(25, "i", 18);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(28, "nz-card");
      \u0275\u0275template(29, ViewStatutoryHolidaysComponent_nz_alert_29_Template, 1, 1, "nz-alert", 19);
      \u0275\u0275elementStart(30, "nz-table", 20, 0)(32, "thead")(33, "tr")(34, "th", 21);
      \u0275\u0275text(35);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "th", 22);
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "th", 23);
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "th", 23);
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "th", 24);
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "th", 25);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "th", 26);
      \u0275\u0275text(53);
      \u0275\u0275pipe(54, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "th", 26);
      \u0275\u0275text(56);
      \u0275\u0275pipe(57, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "th", 24);
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "th", 27);
      \u0275\u0275text(62);
      \u0275\u0275pipe(63, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "th", 28);
      \u0275\u0275text(65);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "th", 29);
      \u0275\u0275text(68);
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "th", 24);
      \u0275\u0275text(71);
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "th", 29);
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(76, "tbody");
      \u0275\u0275template(77, ViewStatutoryHolidaysComponent_tr_77_Template, 4, 4, "tr", 30)(78, ViewStatutoryHolidaysComponent_tr_78_Template, 43, 46, "tr", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275template(79, ViewStatutoryHolidaysComponent_ng_template_79_Template, 2, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(81, "nz-modal", 32);
      \u0275\u0275pipe(82, "translate");
      \u0275\u0275pipe(83, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewStatutoryHolidaysComponent_Template_nz_modal_nzOnCancel_81_listener() {
        return ctx.closeModal();
      })("nzOnOk", function ViewStatutoryHolidaysComponent_Template_nz_modal_nzOnOk_81_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(84, ViewStatutoryHolidaysComponent_ng_container_84_Template, 25, 25, "ng-container", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "nz-modal", 34);
      \u0275\u0275pipe(86, "translate");
      \u0275\u0275pipe(87, "translate");
      \u0275\u0275pipe(88, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewStatutoryHolidaysComponent_Template_nz_modal_nzOnCancel_85_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function ViewStatutoryHolidaysComponent_Template_nz_modal_nzOnOk_85_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(89, ViewStatutoryHolidaysComponent_ng_container_89_Template, 6, 5, "ng-container", 33);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const shlTable_r9 = \u0275\u0275reference(31);
      const shlTotalTpl_r10 = \u0275\u0275reference(80);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 41, "shl.year", "N\u0103m"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchYear);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(9, 44, "shl.placeholderYear", "VD: 2025"));
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 47, "common.search", "T\xECm ki\u1EBFm"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(18, 50, "common.clearFilter", "X\xF3a l\u1ECDc"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(23, 53, "common.addNew", "Th\xEAm m\u1EDBi ng\xE0y l\u1EC5"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(27, 56, "essDept.exportExcel", "Xu\u1EA5t excel"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.rows())("nzLoading", ctx.loading())("nzPageSize", 25)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzShowTotal", shlTotalTpl_r10)("nzScroll", \u0275\u0275pureFunction0(116, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 59, "common.stt", "STT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 62, "shl.holidayDate", "Ng\xE0y"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 65, "shl.year", "N\u0103m"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 68, "shl.colMonth", "Th\xE1ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 71, "shl.colDay", "Ng\xE0y trong th\xE1ng"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(51, 74, "shl.colCompany", "C\xF4ng ty"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(54, 77, "shl.colShift", "Ca l\xE0m vi\u1EC7c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 80, "shl.dayType", "Lo\u1EA1i ng\xE0y"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(60, 83, "shl.colWorkdayFlag", "C\u1EDD l\xE0m vi\u1EC7c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(63, 86, "shl.colStatutoryFlag", "C\u1EDD ng\xE0y l\u1EC5 P\u0110"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(66, 89, "shl.description", "Ghi ch\xFA"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 92, "common.sortOrder", "S\u1EAFp x\u1EBFp"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(72, 95, "common.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(75, 98, "common.action", "Thao t\xE1c"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && ctx.rows().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", shlTable_r9.data);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", ctx.modalTitle())("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(82, 101, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(83, 104, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(4);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(86, 107, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(87, 110, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(88, 113, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzInputNumberModule, NzInputNumberComponent, NzSelectModule, NzOptionComponent, NzSelectComponent, NzDatePickerModule, NzDatePickerComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, NzTagModule, NzTagComponent, TranslatePipe], styles: ["\n.shl-btn-export[_ngcontent-%COMP%] {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=view-statutory-holidays.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewStatutoryHolidaysComponent, [{
    type: Component,
    args: [{ selector: "app-view-statutory-holidays", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzInputNumberModule,
      NzSelectModule,
      NzDatePickerModule,
      NzButtonModule,
      NzModalModule,
      NzAlertModule,
      NzTagModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">
    <!-- \u0110i\u1EC1u ki\u1EC7n t\xECm ki\u1EBFm - \u0111\u1EE9ng im khi cu\u1ED9n (xem .sticky-filter-card trong styles.css) -->
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3" (ngSubmit)="search()">
        <div class="col-md-3">
          <label class="form-label">{{ 'shl.year' | translate:'N\u0103m' }}</label>
          <nz-input-number class="w-100" [(ngModel)]="searchYear" name="shlSearchYear"
                            [nzPlaceHolder]="'shl.placeholderYear' | translate:'VD: 2025'"></nz-input-number>
        </div>
        <div class="col-md-9 d-flex align-items-end gap-2 flex-wrap">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'common.search' | translate:'T\xECm ki\u1EBFm' }}
          </button>
          <button nz-button type="button" (click)="clearSearch()">
            <i class="bx bx-x"></i> {{ 'common.clearFilter' | translate:'X\xF3a l\u1ECDc' }}
          </button>
        </div>
        <div class="col-12 d-flex gap-2 flex-wrap">
          <button nz-button nzType="primary" type="button" (click)="openAddModal()">
            <i class="bx bx-plus"></i> {{ 'common.addNew' | translate:'Th\xEAm m\u1EDBi ng\xE0y l\u1EC5' }}
          </button>
          <button nz-button nzType="default" type="button" class="shl-btn-export" (click)="exportExcel()">
            <i class="bx bx-export"></i> {{ 'essDept.exportExcel' | translate:'Xu\u1EA5t excel' }}
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <!-- nzWidth khai b\xE1o cho t\u1EEBng c\u1ED9t \u0111\u1EC3 \u0111\u1ED3ng b\u1ED9 \u0111\u1ED9 r\u1ED9ng header/body khi d\xF9ng nzScroll. -->
      <nz-table [nzData]="rows()" [nzLoading]="loading()" [nzPageSize]="25" [nzShowSizeChanger]="true"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowTotal]="shlTotalTpl"
                [nzScroll]="{ x: '1700px', y: 'calc(100vh - 420px)' }" #shlTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="60px">{{ 'common.stt' | translate:'STT' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'shl.holidayDate' | translate:'Ng\xE0y' }}</th>
            <th class="text-center" nzWidth="80px">{{ 'shl.year' | translate:'N\u0103m' }}</th>
            <th class="text-center" nzWidth="80px">{{ 'shl.colMonth' | translate:'Th\xE1ng' }}</th>
            <th class="text-center" nzWidth="120px">{{ 'shl.colDay' | translate:'Ng\xE0y trong th\xE1ng' }}</th>
            <th nzWidth="150px">{{ 'shl.colCompany' | translate:'C\xF4ng ty' }}</th>
            <th nzWidth="130px">{{ 'shl.colShift' | translate:'Ca l\xE0m vi\u1EC7c' }}</th>
            <th nzWidth="130px">{{ 'shl.dayType' | translate:'Lo\u1EA1i ng\xE0y' }}</th>
            <th class="text-center" nzWidth="120px">{{ 'shl.colWorkdayFlag' | translate:'C\u1EDD l\xE0m vi\u1EC7c' }}</th>
            <th class="text-center" nzWidth="130px">{{ 'shl.colStatutoryFlag' | translate:'C\u1EDD ng\xE0y l\u1EC5 P\u0110' }}</th>
            <th nzWidth="200px">{{ 'shl.description' | translate:'Ghi ch\xFA' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'common.sortOrder' | translate:'S\u1EAFp x\u1EBFp' }}</th>
            <th class="text-center" nzWidth="120px">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
            <th class="text-center" nzWidth="90px">{{ 'common.action' | translate:'Thao t\xE1c' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="14" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of shlTable.data; let i = index">
            <td class="text-center">{{ i + 1 }}</td>
            <td class="text-center">{{ toDmySlash(row.ddateStr) }}</td>
            <td class="text-center">{{ row.iyear }}</td>
            <td class="text-center">{{ row.imonth }}</td>
            <td class="text-center">{{ row.iday }}</td>
            <td [attr.title]="row.companyName || null">{{ row.companyName }}</td>
            <td [attr.title]="row.shiftName || null">{{ row.shiftName }}</td>
            <td [attr.title]="row.typeidName || null">{{ row.typeidName }}</td>
            <td class="text-center">
              <nz-tag [nzColor]="row.workdayflag === 1 ? 'blue' : 'orange'">
                {{ row.workdayflag === 1 ? ('shl.workday' | translate:'L\xE0m vi\u1EC7c') : ('shl.dayOff' | translate:'Ngh\u1EC9') }}
              </nz-tag>
            </td>
            <td class="text-center">
              <nz-tag [nzColor]="row.statutoryFlag === 1 ? 'red' : 'default'">
                {{ row.statutoryFlag === 1 ? ('shl.statutory' | translate:'L\u1EC5 ph\xE1p \u0111\u1ECBnh') : ('common.no' | translate:'Kh\xF4ng') }}
              </nz-tag>
            </td>
            <td [attr.title]="row.remark || null">{{ row.remark }}</td>
            <td class="text-center">{{ row.orderno }}</td>
            <td class="text-center">
              <nz-tag [nzColor]="row.activity === 1 ? 'success' : 'default'">
                {{ row.activity === 1 ? ('common.active' | translate:'Ho\u1EA1t \u0111\u1ED9ng') : ('common.inactive' | translate:'Ng\u1EEBng') }}
              </nz-tag>
            </td>
            <td class="text-center">
              <button nz-button nzType="text" nzSize="small" [title]="'common.edit' | translate:'S\u1EEDa'" (click)="openEditModal(row)">
                <i class="bx bx-edit text-warning"></i>
              </button>
              <button nz-button nzType="text" nzSize="small" [title]="'common.delete' | translate:'X\xF3a'" (click)="openDeleteConfirm(row)">
                <i class="bx bx-trash text-danger"></i>
              </button>
            </td>
          </tr>
        </tbody>
        <ng-template #shlTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal Th\xEAm m\u1EDBi / C\u1EADp nh\u1EADt -->
<nz-modal [nzVisible]="modalVisible()" [nzTitle]="modalTitle()" nzWidth="700px"
          (nzOnCancel)="closeModal()" (nzOnOk)="saveForm()" [nzOkLoading]="saving()"
          [nzOkText]="'common.save' | translate:'L\u01B0u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <div class="row g-3 mb-3">
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'shl.holidayDate' | translate:'Ng\xE0y' }} <span class="text-danger">*</span></label>
        <nz-date-picker class="w-100" [(ngModel)]="form.ddate" name="shlFormDdate" nzFormat="dd/MM/yyyy" [nzDisabled]="!isNew()"></nz-date-picker>
        <small class="text-muted d-block mt-1">{{ 'shl.dateHint' | translate:'\u0110\xE2y l\xE0 ng\xE0y l\u1EC5 ph\xE1p \u0111\u1ECBnh c\u1EA7n thi\u1EBFt l\u1EADp' }}</small>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold d-block">{{ 'shl.dayType' | translate:'Lo\u1EA1i ng\xE0y (TypeID)' }}</label>
        <nz-select class="w-100" [(ngModel)]="form.typeid" name="shlFormTypeid">
          <nz-option *ngFor="let t of typeOptions" [nzValue]="t.value" [nzLabel]="i18n.t(t.key, t.fallback)"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-12">
        <label class="form-label fw-semibold">{{ 'shl.description' | translate:'Ghi ch\xFA / T\xEAn ng\xE0y l\u1EC5' }}</label>
        <input nz-input [(ngModel)]="form.remark" name="shlFormRemark" placeholder="VD: T\u1EBFt Nguy\xEAn \u0110\xE1n, Qu\u1ED1c Kh\xE1nh...">
      </div>
    </div>

    <nz-alert nzType="info" [nzMessage]="'shl.saveNote' | translate:'Khi l\u01B0u, h\u1EC7 th\u1ED1ng s\u1EBD t\u1EF1 \u0111\u1ED9ng c\u1EADp nh\u1EADt d\u1EEF li\u1EC7u sang b\u1EA3ng AR_CALENDER_GROUP v\xE0 ghi l\u1ECBch s\u1EED v\xE0o AR_CALENDER_GROUP_HISTORY.'"></nz-alert>
  </ng-container>
</nz-modal>

<!-- Modal x\xE1c nh\u1EADn x\xF3a -->
<nz-modal [nzVisible]="deleteVisible()" [nzTitle]="'common.confirm' | translate:'X\xE1c nh\u1EADn'"
          (nzOnCancel)="closeDeleteConfirm()" (nzOnOk)="confirmDelete()" [nzOkLoading]="deleting()"
          [nzOkText]="'common.confirm' | translate:'X\xE1c nh\u1EADn'" [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'">
  <ng-container *nzModalContent>
    <p class="mb-1">{{ 'shl.confirmDelete' | translate:'B\u1EA1n c\xF3 ch\u1EAFc mu\u1ED1n x\xF3a ng\xE0y l\u1EC5 n\xE0y kh\xF4ng?' }}</p>
    <p class="fw-bold mb-0">{{ deleteTargetName }}</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-statutory-holidays/view-statutory-holidays.component.css */\n.shl-btn-export {\n  color: #52c41a;\n  border-color: #52c41a;\n}\n/*# sourceMappingURL=view-statutory-holidays.component.css.map */\n"] }]
  }], () => [{ type: ViewStatutoryHolidaysService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewStatutoryHolidaysComponent, { className: "ViewStatutoryHolidaysComponent", filePath: "src/app/view-statutory-holidays/view-statutory-holidays.component.ts", lineNumber: 92 });
})();
export {
  ViewStatutoryHolidaysComponent
};
//# debugId=5cf62e1f-9ecd-52a7-a777-f2c05072ac76
//# sourceMappingURL=chunk-6IDNEHKR.js.map
