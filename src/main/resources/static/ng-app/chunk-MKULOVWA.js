import {
  NzTagComponent,
  NzTagModule
} from "./chunk-HTQAHYN3.js";
import {
  NzMessageService
} from "./chunk-XWW7CXU6.js";
import {
  NzModalService
} from "./chunk-OEYWCHIN.js";
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
import "./chunk-2QLZSMGV.js";
import "./chunk-2GOAB54B.js";
import "./chunk-TNYKEBYQ.js";
import {
  CommonModule,
  Component,
  HttpClient,
  Injectable,
  NgForOf,
  NgIf,
  NzButtonComponent,
  NzButtonModule,
  NzTransitionPatchDirective,
  NzWaveDirective,
  ViewChild,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-VTW5U2M5.js";

// src/app/photo-import/photo-import.service.ts
var API_BASE = "/hrm/empinfo/api/photo";
var PhotoImportService = class _PhotoImportService {
  constructor(http) {
    this.http = http;
  }
  http;
  previewPhotos(files) {
    return this.http.post(`${API_BASE}/preview`, this.toFormData(files), {
      withCredentials: true
    });
  }
  savePhotos(files) {
    return this.http.post(`${API_BASE}/save`, this.toFormData(files), {
      withCredentials: true
    });
  }
  toFormData(files) {
    const fd = new FormData();
    files.forEach((f) => fd.append("files", f));
    return fd;
  }
  static \u0275fac = function PhotoImportService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PhotoImportService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PhotoImportService, factory: _PhotoImportService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PhotoImportService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/photo-import/photo-import.component.ts
var _c0 = ["fileInput"];
var _c1 = () => ({ padding: "16px" });
var _c2 = () => ({ padding: "10px" });
function PhotoImportComponent_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.selectedFiles().length, " ", \u0275\u0275pipeBind2(2, 2, "hrm.photoImport.selected.count", "file \u0111\xE3 \u0111\u01B0\u1EE3c ch\u1ECDn"), " ");
  }
}
function PhotoImportComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(1, 1, "hrm.photoImport.noFilesSelected", "Ch\u01B0a ch\u1ECDn file n\xE0o"));
  }
}
function PhotoImportComponent_nz_card_39_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function PhotoImportComponent_nz_card_39_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.confirmSave());
    });
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzLoading", ctx_r0.saving());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, "hrm.photoImport.btnConfirm", "X\xE1c nh\u1EADn l\u01B0u"), " ");
  }
}
function PhotoImportComponent_nz_card_39_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 29);
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
    \u0275\u0275elementStart(9, "td", 29)(10, "nz-tag", 30);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 31);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r4 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.fileName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.empId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.localName);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzColor", r_r3.success ? "success" : "error");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 7, r_r3.success ? "hrm.photoImport.status.success" : "hrm.photoImport.status.failed", r_r3.success ? "H\u1EE3p l\u1EC7" : "L\u1ED7i"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r3.success ? "" : r_r3.errorMessage);
  }
}
function PhotoImportComponent_nz_card_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-card", 17)(1, "div", 18)(2, "h6", 19);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "span", 21);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, PhotoImportComponent_nz_card_39_button_13_Template, 4, 5, "button", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "nz-table", 23)(15, "thead")(16, "tr")(17, "th", 24);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 25);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th", 26);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "th");
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "tbody");
    \u0275\u0275template(36, PhotoImportComponent_nz_card_39_tr_36_Template, 15, 10, "tr", 27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("nzBodyStyle", \u0275\u0275pureFunction0(44, _c2));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 17, "hrm.photoImport.result.title", "K\u1EBFt qu\u1EA3 ki\u1EC3m tra"), " \xA0\u2014\xA0 ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.successCount);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 20, "hrm.photoImport.result.valid", " h\u1EE3p l\u1EC7"), " \xA0/\xA0 ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.failCount);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 23, "hrm.photoImport.result.invalid", " l\u1ED7i"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.isSaveResult() && ctx_r0.successCount > 0);
    \u0275\u0275advance();
    \u0275\u0275property("nzData", ctx_r0.results())("nzFrontPagination", false)("nzShowPagination", false);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 26, "hrm.photoImport.col.no", "STT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 29, "hrm.photoImport.col.fileName", "T\xEAn file"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 32, "hrm.photoImport.col.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 35, "hrm.photoImport.col.empName", "T\xEAn nh\xE2n vi\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 38, "hrm.photoImport.col.status", "Tr\u1EA1ng th\xE1i"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 41, "hrm.photoImport.col.errorReason", "L\xFD do l\u1ED7i"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.results());
  }
}
var I18N_KEYS = [
  "hrm.photoImport.title",
  "hrm.photoImport.instruction",
  "hrm.photoImport.filename.rule",
  "hrm.photoImport.accept.formats",
  "hrm.photoImport.max.size",
  "hrm.photoImport.overwrite.note",
  "hrm.photoImport.selectFiles",
  "hrm.photoImport.btnPreview",
  "hrm.photoImport.btnConfirm",
  "hrm.photoImport.btnReset",
  "hrm.photoImport.result.title",
  "hrm.photoImport.result.valid",
  "hrm.photoImport.result.invalid",
  "hrm.photoImport.col.no",
  "hrm.photoImport.col.fileName",
  "hrm.photoImport.col.empId",
  "hrm.photoImport.col.empName",
  "hrm.photoImport.col.status",
  "hrm.photoImport.col.errorReason",
  "hrm.photoImport.status.success",
  "hrm.photoImport.status.failed",
  "hrm.photoImport.noFilesSelected",
  "hrm.photoImport.noValidFiles",
  "hrm.photoImport.confirm.message",
  "hrm.photoImport.saveResult.title",
  "hrm.photoImport.saved.success",
  "hrm.photoImport.selected.count",
  "hrm.photoImport.checking",
  "hrm.photoImport.saving",
  "hrm.photoImport.error.check",
  "hrm.photoImport.error.save"
];
var PhotoImportComponent = class _PhotoImportComponent {
  constructor(api, i18n, message, modal) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
    this.modal = modal;
    this.i18n.loadKeys(I18N_KEYS);
  }
  api;
  i18n;
  message;
  modal;
  fileInputRef;
  selectedFiles = signal(
    [],
    ...ngDevMode ? [{ debugName: "selectedFiles" }] : (
      /* istanbul ignore next */
      []
    )
  );
  results = signal(
    [],
    ...ngDevMode ? [{ debugName: "results" }] : (
      /* istanbul ignore next */
      []
    )
  );
  resultVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "resultVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** true = đang hiển thị kết quả sau khi lưu (ẩn nút "Xác nhận lưu"); false = kết quả kiểm tra. */
  isSaveResult = signal(
    false,
    ...ngDevMode ? [{ debugName: "isSaveResult" }] : (
      /* istanbul ignore next */
      []
    )
  );
  checking = signal(
    false,
    ...ngDevMode ? [{ debugName: "checking" }] : (
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
  t(key, fallback) {
    return this.i18n.t(key, fallback);
  }
  get successCount() {
    return this.results().filter((r) => r.success).length;
  }
  get failCount() {
    return this.results().filter((r) => !r.success).length;
  }
  onFileSelected(event) {
    const input = event.target;
    this.selectedFiles.set(Array.from(input.files ?? []));
    this.resultVisible.set(false);
    this.results.set([]);
  }
  preview() {
    const files = this.selectedFiles();
    if (files.length === 0) {
      this.message.warning(this.t("hrm.photoImport.noFilesSelected", "Ch\u01B0a ch\u1ECDn file n\xE0o"));
      return;
    }
    this.checking.set(true);
    this.api.previewPhotos(files).subscribe({
      next: (res) => {
        this.checking.set(false);
        this.results.set(res ?? []);
        this.isSaveResult.set(false);
        this.resultVisible.set(true);
      },
      error: (err) => {
        this.checking.set(false);
        this.message.error(`${this.t("hrm.photoImport.error.check", "L\u1ED7i khi ki\u1EC3m tra file")}: ${err.message}`);
      }
    });
  }
  confirmSave() {
    const validFiles = this.selectedFiles().filter((f) => this.results().some((r) => r.success && r.fileName === f.name));
    if (validFiles.length === 0) {
      this.message.warning(this.t("hrm.photoImport.noValidFiles", "Kh\xF4ng c\xF3 file h\u1EE3p l\u1EC7 \u0111\u1EC3 l\u01B0u"));
      return;
    }
    this.modal.confirm({
      nzTitle: this.t("hrm.photoImport.confirm.message", "X\xE1c nh\u1EADn l\u01B0u \u1EA3nh h\u1EE3p l\u1EC7 v\xE0o h\u1EC7 th\u1ED1ng?"),
      nzOnOk: () => this.doSave(validFiles)
    });
  }
  doSave(validFiles) {
    this.saving.set(true);
    this.api.savePhotos(validFiles).subscribe({
      next: (res) => {
        this.saving.set(false);
        this.results.set(res ?? []);
        this.isSaveResult.set(true);
        this.resultVisible.set(true);
        const saved = (res ?? []).filter((r) => r.success).length;
        this.message.success(`${saved} ${this.t("hrm.photoImport.saved.success", "\u1EA3nh \u0111\xE3 l\u01B0u th\xE0nh c\xF4ng")}`);
      },
      error: (err) => {
        this.saving.set(false);
        this.message.error(`${this.t("hrm.photoImport.error.save", "L\u1ED7i khi l\u01B0u file")}: ${err.message}`);
      }
    });
  }
  reset() {
    if (this.fileInputRef)
      this.fileInputRef.nativeElement.value = "";
    this.selectedFiles.set([]);
    this.results.set([]);
    this.resultVisible.set(false);
    this.isSaveResult.set(false);
  }
  static \u0275fac = function PhotoImportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PhotoImportComponent)(\u0275\u0275directiveInject(PhotoImportService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService), \u0275\u0275directiveInject(NzModalService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PhotoImportComponent, selectors: [["app-photo-import"]], viewQuery: function PhotoImportComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInputRef = _t.first);
    }
  }, decls: 40, vars: 42, consts: [["fileInput", ""], ["phoImpNoFiles", ""], [3, "nzTitle", "nzBodyStyle"], [1, "alert", "alert-info", "mb-3"], [1, "mb-0", "mt-1"], [1, "row", "g-3", "align-items-end"], [1, "col-md-8"], ["for", "phoImp_fileInput", 1, "form-label", "fw-semibold"], ["type", "file", "id", "phoImp_fileInput", "accept", ".jpg,.jpeg,.png", "multiple", "", 1, "form-control", 3, "change"], [1, "form-text", "text-muted", "mt-1"], [4, "ngIf", "ngIfElse"], [1, "col-md-4", "d-flex", "gap-2"], ["nz-button", "", "nzType", "primary", 3, "click", "nzLoading"], [1, "bx", "bx-search"], ["nz-button", "", 3, "click"], [1, "bx", "bx-undo"], ["class", "mt-3", 3, "nzBodyStyle", 4, "ngIf"], [1, "mt-3", 3, "nzBodyStyle"], [1, "d-flex", "justify-content-between", "align-items-center", "flex-wrap", "gap-2", "mb-2"], ["id", "phoImp_resultTitle", 1, "mb-0"], [1, "text-success", "fw-bold"], [1, "text-danger", "fw-bold"], ["nz-button", "", "nzType", "primary", 3, "nzLoading", "click", 4, "ngIf"], ["nzSize", "small", 3, "nzData", "nzFrontPagination", "nzShowPagination"], ["nzWidth", "50px", 1, "text-center"], ["nzWidth", "120px"], ["nzWidth", "120px", 1, "text-center"], [4, "ngFor", "ngForOf"], [1, "bx", "bx-check"], [1, "text-center"], [3, "nzColor"], [1, "text-danger", "small"]], template: function PhotoImportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nz-card", 2);
      \u0275\u0275pipe(1, "translate");
      \u0275\u0275elementStart(2, "div", 3)(3, "strong");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "ul", 4)(7, "li");
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "li");
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "li");
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "li");
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "div", 5)(20, "div", 6)(21, "label", 7);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "input", 8, 0);
      \u0275\u0275listener("change", function PhotoImportComponent_Template_input_change_24_listener($event) {
        return ctx.onFileSelected($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 9);
      \u0275\u0275template(27, PhotoImportComponent_ng_container_27_Template, 3, 5, "ng-container", 10)(28, PhotoImportComponent_ng_template_28_Template, 2, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 11)(31, "button", 12);
      \u0275\u0275listener("click", function PhotoImportComponent_Template_button_click_31_listener() {
        return ctx.preview();
      });
      \u0275\u0275element(32, "i", 13);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "button", 14);
      \u0275\u0275listener("click", function PhotoImportComponent_Template_button_click_35_listener() {
        return ctx.reset();
      });
      \u0275\u0275element(36, "i", 15);
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(39, PhotoImportComponent_nz_card_39_Template, 37, 45, "nz-card", 16);
    }
    if (rf & 2) {
      const phoImpNoFiles_r5 = \u0275\u0275reference(29);
      \u0275\u0275property("nzTitle", \u0275\u0275pipeBind2(1, 14, "hrm.photoImport.title", "Import \u1EA3nh \u0111\u1EA1i di\u1EC7n nh\xE2n vi\xEAn"))("nzBodyStyle", \u0275\u0275pureFunction0(41, _c1));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 17, "hrm.photoImport.instruction", "H\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng"), ":");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 20, "hrm.photoImport.filename.rule", "T\xEAn file ph\u1EA3i ch\u1EE9a m\xE3 nh\xE2n vi\xEAn (v\xED d\u1EE5: NV001.jpg, nv001_photo.png)"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 23, "hrm.photoImport.accept.formats", "\u0110\u1ECBnh d\u1EA1ng cho ph\xE9p: .jpg, .jpeg, .png"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 26, "hrm.photoImport.max.size", "\u1EA2nh s\u1EBD t\u1EF1 \u0111\u1ED9ng \u0111\u01B0\u1EE3c c\u1EAFt v\u1EC1 k\xEDch th\u01B0\u1EDBc 600x800px khi l\u01B0u"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 29, "hrm.photoImport.overwrite.note", "\u1EA2nh m\u1EDBi s\u1EBD ghi \u0111\xE8 \u1EA3nh c\u0169 c\u1EE7a c\xF9ng nh\xE2n vi\xEAn"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(23, 32, "hrm.photoImport.selectFiles", "Ch\u1ECDn file \u1EA3nh (c\xF3 th\u1EC3 ch\u1ECDn nhi\u1EC1u)"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.selectedFiles().length > 0)("ngIfElse", phoImpNoFiles_r5);
      \u0275\u0275advance(4);
      \u0275\u0275property("nzLoading", ctx.checking());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(34, 35, "hrm.photoImport.btnPreview", "Ki\u1EC3m tra"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(38, 38, "hrm.photoImport.btnReset", "Ch\u1ECDn l\u1EA1i"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.resultVisible());
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzCardModule, NzCardComponent, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzTagModule, NzTagComponent, TranslatePipe], styles: ["\n/*# sourceMappingURL=photo-import.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PhotoImportComponent, [{
    type: Component,
    args: [{ selector: "app-photo-import", standalone: true, imports: [CommonModule, NzButtonModule, NzCardModule, NzTableModule, NzTagModule, TranslatePipe], template: `<nz-card [nzTitle]="'hrm.photoImport.title' | translate:'Import \u1EA3nh \u0111\u1EA1i di\u1EC7n nh\xE2n vi\xEAn'" [nzBodyStyle]="{ padding: '16px' }">
  <div class="alert alert-info mb-3">
    <strong>{{ 'hrm.photoImport.instruction' | translate:'H\u01B0\u1EDBng d\u1EABn s\u1EED d\u1EE5ng' }}:</strong>
    <ul class="mb-0 mt-1">
      <li>{{ 'hrm.photoImport.filename.rule' | translate:'T\xEAn file ph\u1EA3i ch\u1EE9a m\xE3 nh\xE2n vi\xEAn (v\xED d\u1EE5: NV001.jpg, nv001_photo.png)' }}</li>
      <li>{{ 'hrm.photoImport.accept.formats' | translate:'\u0110\u1ECBnh d\u1EA1ng cho ph\xE9p: .jpg, .jpeg, .png' }}</li>
      <li>{{ 'hrm.photoImport.max.size' | translate:'\u1EA2nh s\u1EBD t\u1EF1 \u0111\u1ED9ng \u0111\u01B0\u1EE3c c\u1EAFt v\u1EC1 k\xEDch th\u01B0\u1EDBc 600x800px khi l\u01B0u' }}</li>
      <li>{{ 'hrm.photoImport.overwrite.note' | translate:'\u1EA2nh m\u1EDBi s\u1EBD ghi \u0111\xE8 \u1EA3nh c\u0169 c\u1EE7a c\xF9ng nh\xE2n vi\xEAn' }}</li>
    </ul>
  </div>

  <div class="row g-3 align-items-end">
    <div class="col-md-8">
      <label for="phoImp_fileInput" class="form-label fw-semibold">
        {{ 'hrm.photoImport.selectFiles' | translate:'Ch\u1ECDn file \u1EA3nh (c\xF3 th\u1EC3 ch\u1ECDn nhi\u1EC1u)' }}
      </label>
      <input #fileInput type="file" class="form-control" id="phoImp_fileInput"
             accept=".jpg,.jpeg,.png" multiple (change)="onFileSelected($event)">
      <div class="form-text text-muted mt-1">
        <ng-container *ngIf="selectedFiles().length > 0; else phoImpNoFiles">
          {{ selectedFiles().length }} {{ 'hrm.photoImport.selected.count' | translate:'file \u0111\xE3 \u0111\u01B0\u1EE3c ch\u1ECDn' }}
        </ng-container>
        <ng-template #phoImpNoFiles>{{ 'hrm.photoImport.noFilesSelected' | translate:'Ch\u01B0a ch\u1ECDn file n\xE0o' }}</ng-template>
      </div>
    </div>
    <div class="col-md-4 d-flex gap-2">
      <button nz-button nzType="primary" [nzLoading]="checking()" (click)="preview()">
        <i class="bx bx-search"></i> {{ 'hrm.photoImport.btnPreview' | translate:'Ki\u1EC3m tra' }}
      </button>
      <button nz-button (click)="reset()">
        <i class="bx bx-undo"></i> {{ 'hrm.photoImport.btnReset' | translate:'Ch\u1ECDn l\u1EA1i' }}
      </button>
    </div>
  </div>
</nz-card>

<nz-card *ngIf="resultVisible()" class="mt-3" [nzBodyStyle]="{ padding: '10px' }">
  <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-2">
    <h6 class="mb-0" id="phoImp_resultTitle">
      {{ 'hrm.photoImport.result.title' | translate:'K\u1EBFt qu\u1EA3 ki\u1EC3m tra' }}
      &nbsp;\u2014&nbsp;
      <span class="text-success fw-bold">{{ successCount }}</span>
      {{ 'hrm.photoImport.result.valid' | translate:' h\u1EE3p l\u1EC7' }}
      &nbsp;/&nbsp;
      <span class="text-danger fw-bold">{{ failCount }}</span>
      {{ 'hrm.photoImport.result.invalid' | translate:' l\u1ED7i' }}
    </h6>
    <button *ngIf="!isSaveResult() && successCount > 0" nz-button nzType="primary"
            [nzLoading]="saving()" (click)="confirmSave()">
      <i class="bx bx-check"></i> {{ 'hrm.photoImport.btnConfirm' | translate:'X\xE1c nh\u1EADn l\u01B0u' }}
    </button>
  </div>

  <nz-table [nzData]="results()" [nzFrontPagination]="false" [nzShowPagination]="false" nzSize="small">
    <thead>
      <tr>
        <th class="text-center" nzWidth="50px">{{ 'hrm.photoImport.col.no' | translate:'STT' }}</th>
        <th>{{ 'hrm.photoImport.col.fileName' | translate:'T\xEAn file' }}</th>
        <th nzWidth="120px">{{ 'hrm.photoImport.col.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
        <th>{{ 'hrm.photoImport.col.empName' | translate:'T\xEAn nh\xE2n vi\xEAn' }}</th>
        <th class="text-center" nzWidth="120px">{{ 'hrm.photoImport.col.status' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
        <th>{{ 'hrm.photoImport.col.errorReason' | translate:'L\xFD do l\u1ED7i' }}</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let r of results(); let i = index">
        <td class="text-center">{{ i + 1 }}</td>
        <td>{{ r.fileName }}</td>
        <td>{{ r.empId }}</td>
        <td>{{ r.localName }}</td>
        <td class="text-center">
          <nz-tag [nzColor]="r.success ? 'success' : 'error'">
            {{ (r.success ? 'hrm.photoImport.status.success' : 'hrm.photoImport.status.failed') | translate:(r.success ? 'H\u1EE3p l\u1EC7' : 'L\u1ED7i') }}
          </nz-tag>
        </td>
        <td class="text-danger small">{{ r.success ? '' : r.errorMessage }}</td>
      </tr>
    </tbody>
  </nz-table>
</nz-card>
`, styles: ["/* src/app/photo-import/photo-import.component.css */\n/*# sourceMappingURL=photo-import.component.css.map */\n"] }]
  }], () => [{ type: PhotoImportService }, { type: I18nService }, { type: NzMessageService }, { type: NzModalService }], { fileInputRef: [{
    type: ViewChild,
    args: ["fileInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PhotoImportComponent, { className: "PhotoImportComponent", filePath: "src/app/photo-import/photo-import.component.ts", lineNumber: 41 });
})();
export {
  PhotoImportComponent
};
//# debugId=2077340d-4877-50ed-91ec-d34b0f999948
//# sourceMappingURL=chunk-MKULOVWA.js.map
