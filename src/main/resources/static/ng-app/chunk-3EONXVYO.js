import {
  NzTagComponent,
  NzTagModule
} from "./chunk-HTQAHYN3.js";
import {
  NzDatePickerComponent,
  NzDatePickerModule,
  NzRangePickerComponent
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
import "./chunk-2QLZSMGV.js";
import {
  NzAlertComponent,
  NzAlertModule
} from "./chunk-BYJYXGGS.js";
import {
  NzRadioComponent,
  NzRadioGroupComponent,
  NzRadioModule
} from "./chunk-2GOAB54B.js";
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
  computed,
  formatDate,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-VTW5U2M5.js";

// src/app/apply-info/apply-info.service.ts
var API_BASE = "/ess/empinfo/api/apply";
var ApplyInfoService = class _ApplyInfoService {
  constructor(http) {
    this.http = http;
  }
  http;
  getMyApplyList(params) {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      httpParams = httpParams.set(key, String(value));
    }
    return this.http.get(`${API_BASE}/myApplyList`, {
      params: httpParams,
      withCredentials: true
    });
  }
  getApplyDetail(applyNo, applyTableType) {
    return this.http.get(`${API_BASE}/detail`, {
      params: new HttpParams().set("applyNo", applyNo).set("applyTableType", applyTableType),
      withCredentials: true
    });
  }
  static \u0275fac = function ApplyInfoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApplyInfoService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApplyInfoService, factory: _ApplyInfoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApplyInfoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/apply-info/apply-info.component.ts
var _c0 = () => ({ y: "calc(100vh - 400px)" });
function ApplyInfoComponent_nz_alert_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 36);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ApplyInfoComponent_tr_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 37);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ApplyInfoComponent_tr_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 38);
    \u0275\u0275listener("click", function ApplyInfoComponent_tr_71_Template_tr_click_0_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDetail(row_r4));
    });
    \u0275\u0275elementStart(1, "td", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 27);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 27)(8, "nz-tag", 41);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 42);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("ai-row-active", ctx_r1.selectedRow() === row_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.typeLabel(row_r4.applyTableType));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.createDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.distinctionLabel(row_r4.applyType));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColor", ctx_r1.activityColor(row_r4.activity));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.activityLabel(row_r4.activity));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.managerInfo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.callback);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.earror);
  }
}
function ApplyInfoComponent_nz_tag_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-tag", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.typeLabel(row_r5.applyTableType));
  }
}
function ApplyInfoComponent_div_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "i", 45);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 1, "veai.detail.placeholder", "Ch\u1ECDn m\u1ED9t thay \u0111\u1ED5i \u0111\u1EC3 xem chi ti\u1EBFt"));
  }
}
function ApplyInfoComponent_ng_container_82_nz_alert_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 56);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzMessage", ctx_r1.detailError() ?? "");
  }
}
function ApplyInfoComponent_ng_container_82_tr_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 57);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ApplyInfoComponent_ng_container_82_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 58);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r6.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r6.value);
  }
}
function ApplyInfoComponent_ng_container_82_li_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 59);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "veai.msg.noFile", "Kh\xF4ng c\xF3 file \u0111\xEDnh k\xE8m"), " ");
  }
}
function ApplyInfoComponent_ng_container_82_li_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 60);
    \u0275\u0275element(1, "i", 61);
    \u0275\u0275elementStart(2, "a", 62);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("href", "/ess/empinfo/api/files/download/" + f_r7.fileNo, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r7.fileName);
  }
}
function ApplyInfoComponent_ng_container_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ApplyInfoComponent_ng_container_82_nz_alert_1_Template, 1, 1, "nz-alert", 46);
    \u0275\u0275elementStart(2, "div", 47)(3, "table", 48)(4, "tbody");
    \u0275\u0275template(5, ApplyInfoComponent_ng_container_82_tr_5_Template, 4, 4, "tr", 28)(6, ApplyInfoComponent_ng_container_82_tr_6_Template, 5, 2, "tr", 49);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 50)(8, "h6", 51);
    \u0275\u0275element(9, "i", 52);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ul", 53);
    \u0275\u0275template(13, ApplyInfoComponent_ng_container_82_li_13_Template, 3, 4, "li", 54)(14, ApplyInfoComponent_ng_container_82_li_14_Template, 4, 2, "li", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.detailError());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.detailLoading() && ctx_r1.detailRows().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.detailRows());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 6, "epi.field.attachFiles", "File \u0111\xEDnh k\xE8m"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.detailLoading() && ctx_r1.detailFiles().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.detailFiles());
  }
}
var I18N_KEYS = [
  "common.time",
  "common.status",
  "common.search",
  "common.reset",
  "common.loading",
  "common.noData",
  "veai.filter.all",
  "veai.filter.quickFilter",
  "veai.perPage",
  "veai.dataUnit",
  "veai.col.content",
  "veai.col.distinction",
  "veai.col.manager",
  "veai.col.feedback",
  "veai.col.error",
  "veai.type.personal",
  "veai.type.address",
  "veai.type.family",
  "veai.type.emergency",
  "veai.type.workExp",
  "veai.type.education",
  "veai.type.qualification",
  "veai.distinction.new",
  "veai.distinction.update",
  "veai.status.submitted",
  "veai.status.approved",
  "veai.status.rejected",
  "veai.detail.title",
  "veai.detail.placeholder",
  "veai.msg.loadFailed",
  "veai.msg.noFile",
  "veai.field.mobile",
  "veai.field.workPhone",
  "epi.field.fullName",
  "epi.field.gender",
  "epi.field.dob",
  "epi.field.ethnicity",
  "epi.field.nationality",
  "epi.field.maritalStatus",
  "epi.field.weddingDate",
  "epi.field.idcardNo",
  "epi.field.idcardDate",
  "epi.field.issuingAuthority",
  "epi.field.email",
  "epi.field.phone",
  "epi.field.religion",
  "epi.field.education",
  "epi.field.addressType",
  "epi.field.effectiveDate",
  "epi.field.address",
  "epi.field.relationship",
  "epi.field.familyPhone",
  "epi.field.cpnyName",
  "epi.field.department",
  "epi.field.position",
  "epi.field.startDate",
  "epi.field.endDate",
  "epi.field.resignReason",
  "epi.field.remark",
  "epi.field.attachFiles",
  "qi.field.subject",
  "qi.field.educLevel",
  "qi.field.institution",
  "qi.field.startDate",
  "qi.field.endDate",
  "qi.field.qualName",
  "qi.field.dateObtained",
  "qi.field.qualCardNo",
  "qi.field.qualInstitute",
  "qi.field.validityDate",
  "qi.field.qualLevel",
  "wi.field.companyName"
];
var PAGE_SIZE_OPTIONS = [25, 50, 100];
var TYPE_LABEL_KEYS = {
  PERSONAL: ["veai.type.personal", "Th\xF4ng tin c\xE1 nh\xE2n"],
  ADDRESS: ["veai.type.address", "Lo\u1EA1i \u0111\u1ECBa ch\u1EC9"],
  FAMILY: ["veai.type.family", "Th\xF4ng tin gia \u0111\xECnh"],
  EMERGENCY: ["veai.type.emergency", "Ng\u01B0\u1EDDi li\xEAn h\u1EC7 kh\u1EA9n c\u1EA5p"],
  WORK_EXP: ["veai.type.workExp", "Kinh nghi\u1EC7m l\xE0m vi\u1EC7c"],
  EDUCATION: ["veai.type.education", "Tr\xECnh \u0111\u1ED9 h\u1ECDc v\u1EA5n"],
  QUALIFICATION: ["veai.type.qualification", "Ch\u1EE9ng ch\u1EC9"]
};
var ACTIVITY_LABEL_KEYS = {
  1: ["veai.status.submitted", "G\u1EEDi"],
  2: ["veai.status.approved", "Duy\u1EC7t"],
  3: ["veai.status.rejected", "T\u1EEB ch\u1ED1i"]
};
var ACTIVITY_TAG_COLOR = { 1: "default", 2: "success", 3: "error" };
var DISTINCTION_LABEL_KEYS = {
  1: ["veai.distinction.new", "Th\xEAm m\u1EDBi"],
  2: ["veai.distinction.update", "S\u1EEDa"]
};
var ApplyInfoComponent = class _ApplyInfoComponent {
  constructor(api, i18n) {
    this.api = api;
    this.i18n = i18n;
  }
  api;
  i18n;
  pageSizeOptions = PAGE_SIZE_OPTIONS;
  allData = signal(
    [],
    ...ngDevMode ? [{ debugName: "allData" }] : (
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
  filteredData = computed(
    () => {
      const kw = this.quickFilter.trim().toLowerCase();
      const rows = this.allData();
      if (!kw)
        return rows;
      return rows.filter((r) => {
        const label = this.typeLabel(r.applyTableType).toLowerCase();
        return label.includes(kw) || (r.managerInfo || "").toLowerCase().includes(kw) || (r.callback || "").toLowerCase().includes(kw) || (r.earror || "").toLowerCase().includes(kw);
      });
    },
    ...ngDevMode ? [{ debugName: "filteredData" }] : (
      /* istanbul ignore next */
      []
    )
  );
  selectedRow = signal(
    null,
    ...ngDevMode ? [{ debugName: "selectedRow" }] : (
      /* istanbul ignore next */
      []
    )
  );
  detailLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "detailLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  detailError = signal(
    null,
    ...ngDevMode ? [{ debugName: "detailError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  detailRows = signal(
    [],
    ...ngDevMode ? [{ debugName: "detailRows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  detailFiles = signal(
    [],
    ...ngDevMode ? [{ debugName: "detailFiles" }] : (
      /* istanbul ignore next */
      []
    )
  );
  dateRange = null;
  activityFilter = "1";
  quickFilter = "";
  pageSize = 50;
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadData();
  }
  search() {
    this.loadData();
  }
  reset() {
    this.dateRange = null;
    this.activityFilter = "1";
    this.quickFilter = "";
    this.loadData();
  }
  typeLabel(type) {
    const entry = TYPE_LABEL_KEYS[type];
    return entry ? this.i18n.t(entry[0], entry[1]) : type;
  }
  activityLabel(activity) {
    const entry = ACTIVITY_LABEL_KEYS[activity];
    return entry ? this.i18n.t(entry[0], entry[1]) : String(activity);
  }
  activityColor(activity) {
    return ACTIVITY_TAG_COLOR[activity] || "default";
  }
  distinctionLabel(applyType) {
    const entry = DISTINCTION_LABEL_KEYS[applyType];
    return entry ? this.i18n.t(entry[0], entry[1]) : "";
  }
  openDetail(row) {
    this.selectedRow.set(row);
    this.detailError.set(null);
    this.detailRows.set([]);
    this.detailFiles.set([]);
    this.detailLoading.set(true);
    this.api.getApplyDetail(row.applyNo, row.applyTableType).subscribe({
      next: (res) => {
        this.detailRows.set(this.buildDetailRows(row.applyTableType, res.detail ?? {}));
        this.detailFiles.set(res.files ?? []);
        this.detailLoading.set(false);
      },
      error: () => {
        this.detailError.set(this.i18n.t("veai.msg.loadFailed", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i"));
        this.detailLoading.set(false);
      }
    });
  }
  loadData() {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.selectedRow.set(null);
    this.detailRows.set([]);
    this.detailFiles.set([]);
    this.api.getMyApplyList({
      fromDate: this.formatYmd(this.dateRange?.[0] ?? null),
      toDate: this.formatYmd(this.dateRange?.[1] ?? null),
      activitySearch: this.activityFilter,
      draw: 1,
      start: 0,
      length: 9999
    }).subscribe({
      next: (res) => {
        this.allData.set(res.data ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("veai.msg.loadFailed", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i"));
        this.allData.set([]);
        this.loading.set(false);
      }
    });
  }
  /** Xây danh sách dòng nhãn/giá trị cho panel chi tiết - tương ứng veaiBuildRows() bản gốc, giá trị
   *  giữ nguyên chuỗi thô từ backend (không format lại ngày) - đúng hành vi bản gốc. */
  buildDetailRows(type, d) {
    const t = (key, fallback) => this.i18n.t(key, fallback);
    switch (type) {
      case "PERSONAL":
        return [
          { label: t("epi.field.fullName", "H\u1ECD t\xEAn"), value: d["name"] || d["lastname"] },
          { label: t("epi.field.gender", "Gi\u1EDBi t\xEDnh"), value: d["sexName"] },
          { label: t("epi.field.dob", "Ng\xE0y sinh"), value: d["dob"] },
          { label: t("epi.field.ethnicity", "D\xE2n t\u1ED9c"), value: d["nationName"] },
          { label: t("epi.field.nationality", "Qu\u1ED1c t\u1ECBch"), value: d["nationalityName"] },
          { label: t("epi.field.maritalStatus", "T\xECnh tr\u1EA1ng h\xF4n nh\xE2n"), value: d["maritalStatusName"] },
          { label: t("epi.field.weddingDate", "Ng\xE0y k\u1EBFt h\xF4n"), value: d["weddingDate"] },
          { label: t("epi.field.idcardNo", "CMND/CCCD"), value: d["idcardNo"] },
          { label: t("epi.field.idcardDate", "Ng\xE0y c\u1EA5p"), value: d["idcardStartDate"] },
          { label: t("epi.field.issuingAuthority", "N\u01A1i c\u1EA5p"), value: d["issuingAuthority"] },
          { label: t("epi.field.email", "Email"), value: d["email"] },
          { label: t("epi.field.phone", "\u0110i\u1EC7n tho\u1EA1i"), value: d["cellphone"] },
          { label: t("epi.field.religion", "T\xF4n gi\xE1o"), value: d["religion"] },
          { label: t("epi.field.education", "Tr\xECnh \u0111\u1ED9 h\u1ECDc v\u1EA5n"), value: d["finalDegreeName"] }
        ];
      case "ADDRESS":
        return [
          { label: t("epi.field.addressType", "Lo\u1EA1i \u0111\u1ECBa ch\u1EC9"), value: d["addressTypeName"] },
          { label: t("epi.field.effectiveDate", "Ng\xE0y hi\u1EC7u l\u1EF1c"), value: d["effectiveStartDate"] },
          { label: t("epi.field.address", "N\u1ED9i dung \u0111\u1ECBa ch\u1EC9"), value: d["addressContent"] },
          { label: t("epi.field.nationality", "Qu\u1ED1c t\u1ECBch"), value: d["nationalityName"] }
        ];
      case "FAMILY":
        return [
          { label: t("epi.field.fullName", "H\u1ECD t\xEAn"), value: d["famName"] },
          { label: t("epi.field.relationship", "Quan h\u1EC7"), value: d["famTypeName"] },
          { label: t("epi.field.dob", "Ng\xE0y sinh"), value: d["famBorndate"] },
          { label: t("epi.field.idcardNo", "CMND"), value: d["famIdcard"] },
          { label: t("epi.field.familyPhone", "\u0110i\u1EC7n tho\u1EA1i"), value: d["famFamilyPhone"] },
          { label: t("veai.field.mobile", "Di \u0111\u1ED9ng"), value: d["mobilePhone"] },
          { label: t("wi.field.companyName", "C\xF4ng ty"), value: d["famCompanyName"] },
          { label: t("epi.field.address", "\u0110\u1ECBa ch\u1EC9"), value: d["famAddress"] },
          { label: t("epi.field.email", "Email"), value: d["famEmail"] },
          { label: t("epi.field.gender", "Gi\u1EDBi t\xEDnh"), value: d["gender"] }
        ];
      case "EMERGENCY":
        return [
          { label: t("epi.field.fullName", "H\u1ECD t\xEAn"), value: d["emerName"] },
          { label: t("epi.field.relationship", "Lo\u1EA1i li\xEAn h\u1EC7"), value: d["emerTypeName"] },
          { label: t("epi.field.phone", "\u0110i\u1EC7n tho\u1EA1i"), value: d["emerPhone"] },
          { label: t("veai.field.mobile", "Di \u0111\u1ED9ng"), value: d["emerCellphone"] },
          { label: t("veai.field.workPhone", "\u0110i\u1EC7n tho\u1EA1i c\u01A1 quan"), value: d["emerWorkPhone"] },
          { label: t("epi.field.email", "Email"), value: d["emerEmail"] },
          { label: t("epi.field.address", "\u0110\u1ECBa ch\u1EC9"), value: d["emerAddress"] }
        ];
      case "WORK_EXP":
        return [
          { label: t("epi.field.cpnyName", "T\xEAn c\xF4ng ty"), value: d["cpnyName"] },
          { label: t("epi.field.department", "Ph\xF2ng ban"), value: d["deptName"] },
          { label: t("epi.field.position", "V\u1ECB tr\xED"), value: d["position"] },
          { label: t("epi.field.startDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u"), value: d["startDate"] || d["startMonth"] },
          { label: t("epi.field.endDate", "Ng\xE0y k\u1EBFt th\xFAc"), value: d["endDate"] || d["endMonth"] },
          { label: t("epi.field.resignReason", "L\xFD do ngh\u1EC9"), value: d["resignReason"] },
          { label: t("epi.field.remark", "Ghi ch\xFA"), value: d["remark"] }
        ];
      case "EDUCATION":
        return [
          { label: t("qi.field.subject", "Chuy\xEAn ng\xE0nh"), value: d["subject"] },
          { label: t("qi.field.educLevel", "Tr\xECnh \u0111\u1ED9"), value: d["degreeName"] },
          { label: t("qi.field.institution", "Tr\u01B0\u1EDDng"), value: d["institutionName"] },
          { label: t("qi.field.startDate", "Ng\xE0y b\u1EAFt \u0111\u1EA7u"), value: d["startDate"] || d["startDatess"] },
          { label: t("qi.field.endDate", "Ng\xE0y k\u1EBFt th\xFAc"), value: d["endDate"] || d["endDatess"] },
          { label: "GPA", value: d["gpa"] },
          { label: t("epi.field.remark", "Ghi ch\xFA"), value: d["remark"] || d["remarks"] }
        ];
      case "QUALIFICATION":
        return [
          { label: t("qi.field.qualName", "T\xEAn ch\u1EE9ng ch\u1EC9"), value: d["qualName"] },
          { label: t("qi.field.dateObtained", "Ng\xE0y c\u1EA5p"), value: d["dateObtained"] },
          { label: t("qi.field.qualCardNo", "S\u1ED1 ch\u1EE9ng ch\u1EC9"), value: d["qualCardNo"] },
          { label: t("qi.field.qualInstitute", "N\u01A1i c\u1EA5p"), value: d["qualInstitute"] },
          { label: t("qi.field.validityDate", "Ng\xE0y h\u1EBFt h\u1EA1n"), value: d["validityDate"] },
          { label: t("qi.field.qualLevel", "C\u1EA5p \u0111\u1ED9"), value: d["qualLevel"] },
          { label: t("epi.field.remark", "Ghi ch\xFA"), value: d["qualRemark"] }
        ];
      default:
        return [];
    }
  }
  formatYmd(d) {
    return d ? formatDate(d, "yyyy-MM-dd", "vi") : "";
  }
  static \u0275fac = function ApplyInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApplyInfoComponent)(\u0275\u0275directiveInject(ApplyInfoService), \u0275\u0275directiveInject(I18nService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApplyInfoComponent, selectors: [["app-apply-info"]], decls: 83, vars: 85, consts: [["aiTable", ""], [1, "card", "mb-3"], [1, "card-body", "py-2"], [1, "row", "g-2", "align-items-end", 3, "ngSubmit"], [1, "col-auto", "d-flex", "align-items-center", "gap-2", "flex-wrap"], [1, "form-label", "mb-0", "fw-semibold"], ["name", "dateRange", "nzFormat", "dd/MM/yyyy", 3, "ngModelChange", "ngModel"], [1, "col-auto", "d-flex", "align-items-center", "gap-3"], ["name", "activityFilter", 3, "ngModelChange", "ngModel"], ["nz-radio-button", "", "nzValue", ""], ["nz-radio-button", "", "nzValue", "1"], ["nz-radio-button", "", "nzValue", "2"], ["nz-radio-button", "", "nzValue", "3"], [1, "col-auto", "ms-auto"], ["nz-button", "", "nzType", "primary", "nzSize", "small", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "nzSize", "small", "type", "button", 1, "ms-1", 3, "click"], [1, "bx", "bx-x"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [1, "row", "g-3"], [1, "col-xl-5", "col-lg-6"], [1, "card", "h-100"], [1, "card-body", "p-0"], [1, "p-2", "border-bottom", "d-flex", "align-items-center", "gap-2"], [1, "mb-0", "text-muted", "small"], ["nz-input", "", 2, "max-width", "200px", 3, "ngModelChange", "ngModel", "nzSize"], ["nzSize", "small", 3, "nzData", "nzLoading", "nzPageSize", "nzShowSizeChanger", "nzPageSizeOptions", "nzScroll"], [1, "text-center"], [4, "ngIf"], ["class", "ai-row-clickable", 3, "ai-row-active", "click", 4, "ngFor", "ngForOf"], [1, "col-xl-7", "col-lg-6"], [1, "card-header", "py-2", "d-flex", "align-items-center", "gap-2"], [1, "bx", "bx-info-circle", "text-primary"], ["class", "ms-auto", 4, "ngIf"], [1, "card-body", 2, "min-height", "300px", "overflow-y", "auto", "max-height", "calc(100vh - 220px)"], ["class", "text-center text-muted py-5", 4, "ngIf"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], ["colspan", "7", 1, "text-center", "text-muted"], [1, "ai-row-clickable", 3, "click"], [1, "text-primary", "fw-medium"], [1, "text-center", "text-nowrap"], [3, "nzColor"], [1, "text-nowrap"], [1, "ms-auto"], [1, "text-center", "text-muted", "py-5"], [1, "bx", "bx-select-multiple", "fs-1", "d-block", "mb-2"], ["nzType", "error", "class", "mb-2", 3, "nzMessage", 4, "ngIf"], [1, "table-responsive"], [1, "table", "table-bordered", "table-sm"], [4, "ngFor", "ngForOf"], [1, "mt-3"], [1, "fw-bold", "text-secondary", "border-bottom", "pb-1"], [1, "bx", "bx-paperclip", "me-1"], [1, "list-group", "list-group-flush"], ["class", "list-group-item text-muted small", 4, "ngIf"], ["class", "list-group-item py-1 px-2 d-flex align-items-center gap-2", 4, "ngFor", "ngForOf"], ["nzType", "error", 1, "mb-2", 3, "nzMessage"], [1, "text-muted", "text-center"], [1, "table-light", "text-nowrap", 2, "width", "38%"], [1, "list-group-item", "text-muted", "small"], [1, "list-group-item", "py-1", "px-2", "d-flex", "align-items-center", "gap-2"], [1, "bx", "bx-file", "text-primary"], ["target", "_blank", 1, "text-truncate", 3, "href"]], template: function ApplyInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "form", 3);
      \u0275\u0275listener("ngSubmit", function ApplyInfoComponent_Template_form_ngSubmit_2_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(3, "div", 4)(4, "label", 5);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "nz-range-picker", 6);
      \u0275\u0275twoWayListener("ngModelChange", function ApplyInfoComponent_Template_nz_range_picker_ngModelChange_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.dateRange, $event) || (ctx.dateRange = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 7)(9, "label", 5);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "nz-radio-group", 8);
      \u0275\u0275twoWayListener("ngModelChange", function ApplyInfoComponent_Template_nz_radio_group_ngModelChange_12_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.activityFilter, $event) || (ctx.activityFilter = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(13, "label", 9);
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "label", 10);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "label", 11);
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "label", 12);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 13)(26, "button", 14);
      \u0275\u0275element(27, "i", 15);
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "button", 16);
      \u0275\u0275listener("click", function ApplyInfoComponent_Template_button_click_30_listener() {
        return ctx.reset();
      });
      \u0275\u0275element(31, "i", 17);
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(34, ApplyInfoComponent_nz_alert_34_Template, 1, 1, "nz-alert", 18);
      \u0275\u0275elementStart(35, "div", 19)(36, "div", 20)(37, "div", 21)(38, "div", 22)(39, "div", 23)(40, "label", 24);
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "input", 25);
      \u0275\u0275twoWayListener("ngModelChange", function ApplyInfoComponent_Template_input_ngModelChange_43_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.quickFilter, $event) || (ctx.quickFilter = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "nz-table", 26, 0)(46, "thead")(47, "tr")(48, "th");
      \u0275\u0275text(49);
      \u0275\u0275pipe(50, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "th", 27);
      \u0275\u0275text(52);
      \u0275\u0275pipe(53, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "th", 27);
      \u0275\u0275text(55);
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "th", 27);
      \u0275\u0275text(58);
      \u0275\u0275pipe(59, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "th");
      \u0275\u0275text(61);
      \u0275\u0275pipe(62, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "th");
      \u0275\u0275text(64);
      \u0275\u0275pipe(65, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "th");
      \u0275\u0275text(67);
      \u0275\u0275pipe(68, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(69, "tbody");
      \u0275\u0275template(70, ApplyInfoComponent_tr_70_Template, 4, 4, "tr", 28)(71, ApplyInfoComponent_tr_71_Template, 16, 10, "tr", 29);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(72, "div", 30)(73, "div", 21)(74, "div", 31);
      \u0275\u0275element(75, "i", 32);
      \u0275\u0275elementStart(76, "strong");
      \u0275\u0275text(77);
      \u0275\u0275pipe(78, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(79, ApplyInfoComponent_nz_tag_79_Template, 2, 1, "nz-tag", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "div", 34);
      \u0275\u0275template(81, ApplyInfoComponent_div_81_Template, 5, 4, "div", 35)(82, ApplyInfoComponent_ng_container_82_Template, 15, 9, "ng-container", 28);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const aiTable_r8 = \u0275\u0275reference(45);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 33, "common.time", "Th\u1EDDi gian"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.dateRange);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 36, "common.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.activityFilter);
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 39, "veai.filter.all", "T\u1EA5t c\u1EA3"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 42, "veai.status.submitted", "G\u1EEDi"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 45, "veai.status.approved", "Duy\u1EC7t"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 48, "veai.status.rejected", "T\u1EEB ch\u1ED1i"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(29, 51, "common.search", "Tra c\u1EE9u"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(33, 54, "common.reset", "\u0110\u1EB7t l\u1EA1i"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 57, "veai.filter.quickFilter", "L\u1ECDc nhanh"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.quickFilter);
      \u0275\u0275property("nzSize", "small");
      \u0275\u0275control();
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.filteredData())("nzLoading", ctx.loading())("nzPageSize", ctx.pageSize)("nzShowSizeChanger", true)("nzPageSizeOptions", ctx.pageSizeOptions)("nzScroll", \u0275\u0275pureFunction0(84, _c0));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 60, "veai.col.content", "N\u1ED9i dung"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(53, 63, "common.time", "Th\u1EDDi gian"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(56, 66, "veai.col.distinction", "Ph\xE2n bi\u1EC7t"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(59, 69, "common.status", "Tr\u1EA1ng th\xE1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(62, 72, "veai.col.manager", "Ng\u01B0\u1EDDi qu\u1EA3n l\xFD"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(65, 75, "veai.col.feedback", "Ph\u1EA3n h\u1ED3i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(68, 78, "veai.col.error", "N\u1ED9i dung l\u1ED7i"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.loading() && aiTable_r8.data.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", aiTable_r8.data);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(78, 81, "veai.detail.title", "Chi ti\u1EBFt thay \u0111\u1ED5i"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.selectedRow());
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.selectedRow());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedRow());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzInputModule, NzInputDirective, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzDatePickerModule, NzDatePickerComponent, NzRangePickerComponent, NzRadioModule, NzRadioComponent, NzRadioGroupComponent, NzTagModule, NzTagComponent, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\n.ai-row-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.ai-row-clickable[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.ai-row-active[_ngcontent-%COMP%] {\n  background: #e6f4ff;\n}\n/*# sourceMappingURL=apply-info.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApplyInfoComponent, [{
    type: Component,
    args: [{ selector: "app-apply-info", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzInputModule,
      NzButtonModule,
      NzDatePickerModule,
      NzRadioModule,
      NzTagModule,
      NzAlertModule,
      TranslatePipe
    ], template: `<!-- ===== Thanh t\xECm ki\u1EBFm ===== -->
<div class="card mb-3">
  <div class="card-body py-2">
    <form class="row g-2 align-items-end" (ngSubmit)="search()">
      <div class="col-auto d-flex align-items-center gap-2 flex-wrap">
        <label class="form-label mb-0 fw-semibold">{{ 'common.time' | translate:'Th\u1EDDi gian' }}</label>
        <nz-range-picker [(ngModel)]="dateRange" name="dateRange" nzFormat="dd/MM/yyyy"></nz-range-picker>
      </div>
      <div class="col-auto d-flex align-items-center gap-3">
        <label class="form-label mb-0 fw-semibold">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</label>
        <nz-radio-group [(ngModel)]="activityFilter" name="activityFilter">
          <label nz-radio-button nzValue="">{{ 'veai.filter.all' | translate:'T\u1EA5t c\u1EA3' }}</label>
          <label nz-radio-button nzValue="1">{{ 'veai.status.submitted' | translate:'G\u1EEDi' }}</label>
          <label nz-radio-button nzValue="2">{{ 'veai.status.approved' | translate:'Duy\u1EC7t' }}</label>
          <label nz-radio-button nzValue="3">{{ 'veai.status.rejected' | translate:'T\u1EEB ch\u1ED1i' }}</label>
        </nz-radio-group>
      </div>
      <div class="col-auto ms-auto">
        <button nz-button nzType="primary" nzSize="small" type="submit">
          <i class="bx bx-search"></i> {{ 'common.search' | translate:'Tra c\u1EE9u' }}
        </button>
        <button nz-button nzSize="small" type="button" class="ms-1" (click)="reset()">
          <i class="bx bx-x"></i> {{ 'common.reset' | translate:'\u0110\u1EB7t l\u1EA1i' }}
        </button>
      </div>
    </form>
  </div>
</div>

<nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

<!-- ===== Split panel: Danh s\xE1ch | Chi ti\u1EBFt ===== -->
<div class="row g-3">

  <!-- == C\u1ED8T TR\xC1I: Danh s\xE1ch == -->
  <div class="col-xl-5 col-lg-6">
    <div class="card h-100">
      <div class="card-body p-0">
        <div class="p-2 border-bottom d-flex align-items-center gap-2">
          <label class="mb-0 text-muted small">{{ 'veai.filter.quickFilter' | translate:'L\u1ECDc nhanh' }}</label>
          <input nz-input [(ngModel)]="quickFilter" style="max-width:200px;" [nzSize]="'small'">
        </div>

        <nz-table [nzData]="filteredData()" [nzLoading]="loading()" [nzPageSize]="pageSize"
                  [nzShowSizeChanger]="true" [nzPageSizeOptions]="pageSizeOptions" nzSize="small"
                  [nzScroll]="{ y: 'calc(100vh - 400px)' }" #aiTable>
          <thead>
            <tr>
              <th>{{ 'veai.col.content' | translate:'N\u1ED9i dung' }}</th>
              <th class="text-center">{{ 'common.time' | translate:'Th\u1EDDi gian' }}</th>
              <th class="text-center">{{ 'veai.col.distinction' | translate:'Ph\xE2n bi\u1EC7t' }}</th>
              <th class="text-center">{{ 'common.status' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
              <th>{{ 'veai.col.manager' | translate:'Ng\u01B0\u1EDDi qu\u1EA3n l\xFD' }}</th>
              <th>{{ 'veai.col.feedback' | translate:'Ph\u1EA3n h\u1ED3i' }}</th>
              <th>{{ 'veai.col.error' | translate:'N\u1ED9i dung l\u1ED7i' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="!loading() && aiTable.data.length === 0">
              <td colspan="7" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
            </tr>
            <tr *ngFor="let row of aiTable.data" class="ai-row-clickable"
                [class.ai-row-active]="selectedRow() === row" (click)="openDetail(row)">
              <td class="text-primary fw-medium">{{ typeLabel(row.applyTableType) }}</td>
              <td class="text-center text-nowrap">{{ row.createDate }}</td>
              <td class="text-center">{{ distinctionLabel(row.applyType) }}</td>
              <td class="text-center"><nz-tag [nzColor]="activityColor(row.activity)">{{ activityLabel(row.activity) }}</nz-tag></td>
              <td class="text-nowrap">{{ row.managerInfo }}</td>
              <td>{{ row.callback }}</td>
              <td>{{ row.earror }}</td>
            </tr>
          </tbody>
        </nz-table>
      </div>
    </div>
  </div>

  <!-- == C\u1ED8T PH\u1EA2I: Chi ti\u1EBFt == -->
  <div class="col-xl-7 col-lg-6">
    <div class="card h-100">
      <div class="card-header py-2 d-flex align-items-center gap-2">
        <i class="bx bx-info-circle text-primary"></i>
        <strong>{{ 'veai.detail.title' | translate:'Chi ti\u1EBFt thay \u0111\u1ED5i' }}</strong>
        <nz-tag *ngIf="selectedRow() as row" class="ms-auto">{{ typeLabel(row.applyTableType) }}</nz-tag>
      </div>
      <div class="card-body" style="min-height:300px; overflow-y:auto; max-height:calc(100vh - 220px);">
        <div class="text-center text-muted py-5" *ngIf="!selectedRow()">
          <i class="bx bx-select-multiple fs-1 d-block mb-2"></i>
          <span>{{ 'veai.detail.placeholder' | translate:'Ch\u1ECDn m\u1ED9t thay \u0111\u1ED5i \u0111\u1EC3 xem chi ti\u1EBFt' }}</span>
        </div>

        <ng-container *ngIf="selectedRow()">
          <nz-alert *ngIf="detailError()" nzType="error" [nzMessage]="detailError() ?? ''" class="mb-2"></nz-alert>

          <div class="table-responsive">
            <table class="table table-bordered table-sm">
              <tbody>
                <tr *ngIf="!detailLoading() && detailRows().length === 0">
                  <td class="text-muted text-center">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
                </tr>
                <tr *ngFor="let r of detailRows()">
                  <th class="table-light text-nowrap" style="width:38%;">{{ r.label }}</th>
                  <td>{{ r.value }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="mt-3">
            <h6 class="fw-bold text-secondary border-bottom pb-1">
              <i class="bx bx-paperclip me-1"></i>{{ 'epi.field.attachFiles' | translate:'File \u0111\xEDnh k\xE8m' }}
            </h6>
            <ul class="list-group list-group-flush">
              <li class="list-group-item text-muted small" *ngIf="!detailLoading() && detailFiles().length === 0">
                {{ 'veai.msg.noFile' | translate:'Kh\xF4ng c\xF3 file \u0111\xEDnh k\xE8m' }}
              </li>
              <li class="list-group-item py-1 px-2 d-flex align-items-center gap-2" *ngFor="let f of detailFiles()">
                <i class="bx bx-file text-primary"></i>
                <a [href]="'/ess/empinfo/api/files/download/' + f.fileNo" target="_blank" class="text-truncate">{{ f.fileName }}</a>
              </li>
            </ul>
          </div>
        </ng-container>
      </div>
    </div>
  </div>
</div>
`, styles: ["/* src/app/apply-info/apply-info.component.css */\n.ai-row-clickable {\n  cursor: pointer;\n}\n.ai-row-clickable:hover {\n  background: #fafafa;\n}\n.ai-row-active {\n  background: #e6f4ff;\n}\n/*# sourceMappingURL=apply-info.component.css.map */\n"] }]
  }], () => [{ type: ApplyInfoService }, { type: I18nService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApplyInfoComponent, { className: "ApplyInfoComponent", filePath: "src/app/apply-info/apply-info.component.ts", lineNumber: 94 });
})();
export {
  ApplyInfoComponent
};
//# debugId=85e11210-8796-5aa6-bdac-eabb0a70c04e
//# sourceMappingURL=chunk-3EONXVYO.js.map
