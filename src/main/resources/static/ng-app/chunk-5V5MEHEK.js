import {
  NzInputNumberComponent,
  NzInputNumberModule
} from "./chunk-IXCMIWQQ.js";
import {
  ChangeUserService
} from "./chunk-L26I55F6.js";
import {
  TabService
} from "./chunk-DUA22MI5.js";
import {
  NzMessageService
} from "./chunk-XWW7CXU6.js";
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
import {
  NzCheckboxComponent,
  NzCheckboxModule
} from "./chunk-VWYGF7JF.js";
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
import {
  ActivatedRoute
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
  __spreadValues,
  forkJoin,
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

// src/app/view-pa-input-item-data/view-pa-input-item-data.service.ts
var API_BASE = "/pa/salary/inputItemData/api";
var ViewPaInputItemDataService = class _ViewPaInputItemDataService {
  constructor(http) {
    this.http = http;
  }
  http;
  getItemList(itemType) {
    let httpParams = new HttpParams();
    if (itemType)
      httpParams = httpParams.set("itemType", itemType);
    return this.http.get(`${API_BASE}/itemList`, { params: httpParams, withCredentials: true });
  }
  getList(params) {
    let httpParams = new HttpParams().set("draw", params.draw).set("start", params.start).set("length", params.length);
    if (params.paramNo)
      httpParams = httpParams.set("paramNo", params.paramNo);
    if (params.payMonth)
      httpParams = httpParams.set("payMonth", params.payMonth);
    if (params.empOfficeSearch)
      httpParams = httpParams.set("empOfficeSearch", params.empOfficeSearch);
    if (params.deptNos)
      httpParams = httpParams.set("deptNos", params.deptNos);
    if (params.empSearch)
      httpParams = httpParams.set("empSearch", params.empSearch);
    return this.http.get(`${API_BASE}/list`, {
      params: httpParams,
      withCredentials: true
    });
  }
  getOne(paramDataNo) {
    return this.http.get(`${API_BASE}/${paramDataNo}`, { withCredentials: true });
  }
  insert(payload) {
    return this.http.post(`${API_BASE}/insert`, payload, { withCredentials: true });
  }
  update(payload) {
    return this.http.put(`${API_BASE}/update`, payload, { withCredentials: true });
  }
  delete(paramDataNo) {
    return this.http.delete(`${API_BASE}/delete/${paramDataNo}`, { withCredentials: true });
  }
  /** Upload trực tiếp qua multipart (paramNo + file) - đúng PaInputItemDataController#importExcel. */
  importExcel(paramNo, file) {
    const formData = new FormData();
    formData.append("paramNo", paramNo);
    formData.append("file", file);
    return this.http.post(`${API_BASE}/importExcel`, formData, { withCredentials: true });
  }
  downloadTemplateUrl() {
    return "/sy/excel/api/downloadTemplate?templateName=Payroll_Input_Template";
  }
  importResultTabUrl(paramNo) {
    return `/pa/salary/viewImportExcelTempPaParamList?paramNo=${encodeURIComponent(paramNo)}`;
  }
  /** Phòng ban được phân quyền PA (khác /ar/attendanceSettings/api/arSupervisor/authorized-departments
   *  dùng chung toàn hệ thống) - đúng DeptTree.init({ api: '/pa/wagebase/api/supervisor/authorized-departments' })
   *  ở bản gốc, giới hạn đúng phạm vi phòng ban người phụ trách lương hiện tại được quản lý. */
  getAuthorizedDepartments() {
    return this.http.get("/pa/wagebase/api/supervisor/authorized-departments", {
      withCredentials: true
    });
  }
  static \u0275fac = function ViewPaInputItemDataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewPaInputItemDataService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewPaInputItemDataService, factory: _ViewPaInputItemDataService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewPaInputItemDataService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-pa-input-item-data/view-pa-input-item-data.component.ts
var _c0 = () => ({ padding: "0" });
var _c1 = () => ({ x: "1300px", y: "calc(100vh - 480px)" });
var _c2 = () => ({ standalone: true });
function ViewPaInputItemDataComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.itemsErrorMessage());
  }
}
function ViewPaInputItemDataComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "common.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"), " ");
  }
}
function ViewPaInputItemDataComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275listener("click", function ViewPaInputItemDataComponent_div_9_Template_div_click_0_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectItem(item_r4));
    });
    \u0275\u0275element(1, "i", 51);
    \u0275\u0275elementStart(2, "span", 52);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r1.currentParamNo() === item_r4.paramNo);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("title", item_r4.paramName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4.paramName);
  }
}
function ViewPaInputItemDataComponent_nz_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 53);
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r5.codeNo)("nzLabel", c_r5.codeName);
  }
}
function ViewPaInputItemDataComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.deptTreeErrorMessage());
  }
}
function ViewPaInputItemDataComponent_nz_alert_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 55);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r1.errorMessage() ?? "");
  }
}
function ViewPaInputItemDataComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "pa.inputItemData.selectItemFirst", "Vui l\xF2ng ch\u1ECDn h\u1EA1ng m\u1EE5c \u1EDF b\xEAn tr\xE1i tr\u01B0\u1EDBc!"), " ");
  }
}
function ViewPaInputItemDataComponent_nz_table_71_tr_37_Template(rf, ctx) {
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
function ViewPaInputItemDataComponent_nz_table_71_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 71);
    \u0275\u0275listener("click", function ViewPaInputItemDataComponent_nz_table_71_tr_38_Template_tr_click_0_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditModal(row_r9));
    });
    \u0275\u0275elementStart(1, "td", 72);
    \u0275\u0275listener("click", function ViewPaInputItemDataComponent_nz_table_71_tr_38_Template_td_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "label", 73);
    \u0275\u0275listener("ngModelChange", function ViewPaInputItemDataComponent_nz_table_71_tr_38_Template_label_ngModelChange_2_listener($event) {
      const row_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleChecked(row_r9, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 74);
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
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 75);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 74);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 74);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.isChecked(row_r9));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r1.pageIndex - 1) * ctx_r1.pageSize + i_r10 + 1);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r9.empId || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.empId);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r9.localName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.localName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r9.deptName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.deptName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r9.postGradeName || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.postGradeName);
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r9.empOffice || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.empOffice);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.numberFormatter(+row_r9.returnValue));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.toMmSlashYyyy(row_r9.startMonth));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.toMmSlashYyyy(row_r9.endMonth));
    \u0275\u0275advance();
    \u0275\u0275attribute("title", row_r9.remark || null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.remark);
  }
}
function ViewPaInputItemDataComponent_nz_table_71_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const total_r11 = ctx.$implicit;
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, "common.totalRows", "T\u1ED5ng s\u1ED1 d\xF2ng:"), " ", total_r11, " ");
  }
}
function ViewPaInputItemDataComponent_nz_table_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-table", 57, 1);
    \u0275\u0275listener("nzPageIndexChange", function ViewPaInputItemDataComponent_nz_table_71_Template_nz_table_nzPageIndexChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageIndexChange($event));
    })("nzPageSizeChange", function ViewPaInputItemDataComponent_nz_table_71_Template_nz_table_nzPageSizeChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPageSizeChange($event));
    });
    \u0275\u0275elementStart(2, "thead")(3, "tr")(4, "th", 58)(5, "label", 59);
    \u0275\u0275listener("ngModelChange", function ViewPaInputItemDataComponent_nz_table_71_Template_label_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAllChecked($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 60);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 61);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 62);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 63);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 64);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 61);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th", 65);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th", 66);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th", 66);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "th", 67);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "tbody");
    \u0275\u0275template(37, ViewPaInputItemDataComponent_nz_table_71_tr_37_Template, 4, 4, "tr", 68)(38, ViewPaInputItemDataComponent_nz_table_71_tr_38_Template, 23, 17, "tr", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, ViewPaInputItemDataComponent_nz_table_71_ng_template_39_Template, 2, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vpidTable_r12 = \u0275\u0275reference(1);
    const vpidTotalTpl_r13 = \u0275\u0275reference(40);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzData", ctx_r1.rows())("nzFrontPagination", false)("nzLoading", ctx_r1.loading())("nzTotal", ctx_r1.totalRecords())("nzPageIndex", ctx_r1.pageIndex)("nzPageSize", ctx_r1.pageSize)("nzPageSizeOptions", ctx_r1.pageSizeOptions)("nzShowSizeChanger", true)("nzShowTotal", vpidTotalTpl_r13)("nzScroll", \u0275\u0275pureFunction0(54, _c1));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r1.allChecked)("nzIndeterminate", ctx_r1.someChecked);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 24, "pa.inputItemData.no", "STT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 27, "pa.inputItemData.empId", "M\xE3 NV"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 30, "pa.inputItemData.localName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 33, "pa.inputItemData.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 36, "pa.inputItemData.postGrade", "Ch\u1EE9c danh"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 39, "pa.inputItemData.empOfficeName", "Tr\u1EA1ng th\xE1i"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 42, "pa.inputItemData.returnValue", "Gi\xE1 tr\u1ECB"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 45, "pa.inputItemData.startMonth", "Th\xE1ng b\u1EAFt \u0111\u1EA7u"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 48, "pa.inputItemData.endMonth", "Th\xE1ng k\u1EBFt th\xFAc"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 51, "pa.inputItemData.remark", "Ghi ch\xFA"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r1.loading() && ctx_r1.rows().length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", vpidTable_r12.data);
  }
}
function ViewPaInputItemDataComponent_ng_container_76_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function ViewPaInputItemDataComponent_ng_container_76_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openPicker());
    });
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "arSupervisor.btn.select", "Ch\u1ECDn"), " ");
  }
}
function ViewPaInputItemDataComponent_ng_container_76_small_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 89);
    \u0275\u0275element(1, "i", 90);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(3, 2, "arSupervisor.js.empSelected", "\u0110\xE3 ch\u1ECDn NV: "), "", ctx_r1.form.empDisplay, " ");
  }
}
function ViewPaInputItemDataComponent_ng_container_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "nz-alert", 76);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "div", 77)(4, "div", 78)(5, "label", 16);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementStart(8, "span", 79);
    \u0275\u0275text(9, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 80);
    \u0275\u0275element(11, "input", 81);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275template(13, ViewPaInputItemDataComponent_ng_container_76_button_13_Template, 4, 4, "button", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, ViewPaInputItemDataComponent_ng_container_76_small_14_Template, 4, 5, "small", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 84)(16, "label", 16);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementStart(19, "span", 79);
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "nz-input-number", 85);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaInputItemDataComponent_ng_container_76_Template_nz_input_number_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.returnValue, $event) || (ctx_r1.form.returnValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 20)(23, "label", 16);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementStart(26, "span", 79);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "nz-date-picker", 86);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaInputItemDataComponent_ng_container_76_Template_nz_date_picker_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.startMonth, $event) || (ctx_r1.form.startMonth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 20)(30, "label", 16);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "nz-date-picker", 87);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaInputItemDataComponent_ng_container_76_Template_nz_date_picker_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.endMonth, $event) || (ctx_r1.form.endMonth = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 78)(35, "label", 16);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "textarea", 88);
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaInputItemDataComponent_ng_container_76_Template_textarea_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.remark, $event) || (ctx_r1.form.remark = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("nzMessage", \u0275\u0275pipeBind2(2, 17, "pa.inputItemData.configItem", "H\u1EA1ng m\u1EE5c \u0111ang nh\u1EADp:") + " " + (ctx_r1.currentParamName() || ""));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 20, "pa.inputItemData.personId", "M\xE3 nh\xE2n vi\xEAn"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r1.form.empDisplay)("ngModelOptions", \u0275\u0275pureFunction0(38, _c2))("placeholder", \u0275\u0275pipeBind2(12, 23, "arSupervisor.placeholder.selectEmp", "Ch\u1ECDn nh\xE2n vi\xEAn..."));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isNew());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.personId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(18, 26, "pa.inputItemData.returnValue", "Gi\xE1 tr\u1ECB"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.returnValue);
    \u0275\u0275property("nzFormatter", ctx_r1.numberFormatter)("nzParser", ctx_r1.numberParser);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(25, 29, "pa.inputItemData.startMonth", "Th\xE1ng b\u1EAFt \u0111\u1EA7u"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.startMonth);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 32, "pa.inputItemData.endMonth", "Th\xE1ng k\u1EBFt th\xFAc"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.endMonth);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 35, "pa.inputItemData.remark", "Ghi ch\xFA"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.remark);
    \u0275\u0275control();
  }
}
function ViewPaInputItemDataComponent_ng_container_79_nz_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 53);
  }
  if (rf & 2) {
    const c_r17 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r17.codeNo)("nzLabel", c_r17.codeName);
  }
}
function ViewPaInputItemDataComponent_ng_container_79_nz_alert_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 101);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzMessage", ctx_r1.pickerErrorMessage() ?? "");
  }
}
function ViewPaInputItemDataComponent_ng_container_79_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 71);
    \u0275\u0275listener("click", function ViewPaInputItemDataComponent_ng_container_79_tr_51_Template_tr_click_0_listener() {
      const row_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectEmployee(row_r19));
    });
    \u0275\u0275elementStart(1, "td", 74);
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
    const row_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r20 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r19.empId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r19.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r19.deptName || row_r19.deptNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r19.position);
  }
}
function ViewPaInputItemDataComponent_ng_container_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 91);
    \u0275\u0275listener("ngSubmit", function ViewPaInputItemDataComponent_ng_container_79_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pickerSearch());
    });
    \u0275\u0275elementStart(2, "div", 92)(3, "label", 16);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 93);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaInputItemDataComponent_ng_container_79_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pickerKeyword, $event) || (ctx_r1.pickerKeyword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function ViewPaInputItemDataComponent_ng_container_79_Template_input_keydown_enter_6_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r1.pickerSearch());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 94)(9, "label", 16);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "nz-tree-select", 95);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaInputItemDataComponent_ng_container_79_Template_nz_tree_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pickerDeptNos, $event) || (ctx_r1.pickerDeptNos = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 20)(15, "label", 16);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "nz-select", 96);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewPaInputItemDataComponent_ng_container_79_Template_nz_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.pickerEmpOffice, $event) || (ctx_r1.pickerEmpOffice = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(20, ViewPaInputItemDataComponent_ng_container_79_nz_option_20_Template, 1, 2, "nz-option", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 97)(22, "button", 25);
    \u0275\u0275element(23, "i", 26);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 27);
    \u0275\u0275listener("click", function ViewPaInputItemDataComponent_ng_container_79_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pickerClear());
    });
    \u0275\u0275element(27, "i", 28);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(30, ViewPaInputItemDataComponent_ng_container_79_nz_alert_30_Template, 1, 1, "nz-alert", 98);
    \u0275\u0275elementStart(31, "nz-table", 99, 3)(33, "thead")(34, "tr")(35, "th", 100);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "th", 61);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th");
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "th");
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "th");
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "tbody");
    \u0275\u0275template(51, ViewPaInputItemDataComponent_ng_container_79_tr_51_Template, 11, 5, "tr", 69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const vpidPickerTable_r21 = \u0275\u0275reference(32);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 23, "empSearch.field.keyword", "M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pickerKeyword);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(7, 26, "empSearch.placeholder.keyword", "Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 29, "empSearch.field.dept", "Ph\xF2ng ban"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzNodes", ctx_r1.deptNodes());
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pickerDeptNos);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(13, 32, "vdp.search.dept.placeholder", "Ch\u1ECDn ph\xF2ng ban"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 35, "empSearch.field.empOffice", "Tr\u1EA1ng th\xE1i l\xE0m vi\u1EC7c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.pickerEmpOffice);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(19, 38, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.empOfficeOptions());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(25, 41, "common.search", "T\xECm ki\u1EBFm"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(29, 44, "empSearch.btn.clearFilter", "X\xF3a b\u1ED9 l\u1ECDc"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.pickerErrorMessage());
    \u0275\u0275advance();
    \u0275\u0275property("nzData", ctx_r1.pickerRows())("nzLoading", ctx_r1.pickerLoading())("nzPageSize", 10);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 47, "empSearch.col.no", "STT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 50, "pa.inputItemData.empId", "M\xE3 NV"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 53, "pa.inputItemData.localName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 56, "pa.inputItemData.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 59, "epi.field.position", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", vpidPickerTable_r21.data);
  }
}
function ViewPaInputItemDataComponent_ng_container_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 102);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(3, 2, "pa.inputItemData.confirmDelete", "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a b\u1EA3n ghi \u0111\xE3 ch\u1ECDn?"), " (", ctx_r1.selectedCount, ")");
  }
}
var I18N_KEYS = [
  "pa.inputItemData.itemList",
  "pa.inputItemData.dataList",
  "pa.inputItemData.payMonth",
  "pa.inputItemData.empOffice",
  "pa.inputItemData.dept",
  "pa.inputItemData.deptPlaceholder",
  "pa.inputItemData.empSearch",
  "pa.inputItemData.empSearchPlaceholder",
  "pa.inputItemData.addNew",
  "pa.inputItemData.delete",
  "pa.inputItemData.no",
  "pa.inputItemData.empId",
  "pa.inputItemData.localName",
  "pa.inputItemData.deptName",
  "pa.inputItemData.postGrade",
  "pa.inputItemData.empOfficeName",
  "pa.inputItemData.returnValue",
  "pa.inputItemData.startMonth",
  "pa.inputItemData.endMonth",
  "pa.inputItemData.remark",
  "pa.inputItemData.addTitle",
  "pa.inputItemData.editTitle",
  "pa.inputItemData.configItem",
  "pa.inputItemData.personId",
  "pa.inputItemData.selectItemFirst",
  "pa.inputItemData.personIdRequired",
  "pa.inputItemData.valueRequired",
  "pa.inputItemData.startRequired",
  "pa.inputItemData.confirmDelete",
  "pa.inputItemData.selectRequired",
  "pa.inputItemData.startGreaterThanEnd",
  "common.search",
  "common.clearFilter",
  "common.close",
  "common.save",
  "common.confirm",
  "common.cancel",
  "common.action",
  "common.noData",
  "common.totalRows",
  "common.loadFail",
  "common.downloadTemplate",
  "common.importExcel",
  "common.selectAll",
  "common.saveSuccess",
  "common.saveFail",
  "common.deleteSuccess",
  "common.deleteFail",
  "arOtf.importResult",
  "arSupervisor.field.emp",
  "arSupervisor.placeholder.selectEmp",
  "arSupervisor.btn.select",
  "arSupervisor.js.empSelected",
  "empSearch.title",
  "empSearch.field.keyword",
  "empSearch.placeholder.keyword",
  "empSearch.field.dept",
  "empSearch.field.empOffice",
  "empSearch.btn.clearFilter",
  "empSearch.col.no",
  "epi.field.position",
  "vdp.search.dept.placeholder",
  "mep.msg.loadDeptFailed"
];
var EMP_OFFICE_PARENT_CODE = "15118";
var PAGE_SIZE_OPTIONS = [10, 20, 50, 100];
var EMPTY_FORM = {
  paramDataNo: null,
  personId: null,
  empDisplay: "",
  returnValue: null,
  startMonth: null,
  endMonth: null,
  remark: ""
};
var ViewPaInputItemDataComponent = class _ViewPaInputItemDataComponent {
  constructor(api, empApi, route, tabs, i18n, message) {
    this.api = api;
    this.empApi = empApi;
    this.route = route;
    this.tabs = tabs;
    this.i18n = i18n;
    this.message = message;
  }
  api;
  empApi;
  route;
  tabs;
  i18n;
  message;
  pageSizeOptions = PAGE_SIZE_OPTIONS;
  itemType = "";
  items = signal(
    [],
    ...ngDevMode ? [{ debugName: "items" }] : (
      /* istanbul ignore next */
      []
    )
  );
  itemsLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "itemsLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  itemsErrorMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "itemsErrorMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  currentParamNo = signal(
    null,
    ...ngDevMode ? [{ debugName: "currentParamNo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  currentParamName = signal(
    null,
    ...ngDevMode ? [{ debugName: "currentParamName" }] : (
      /* istanbul ignore next */
      []
    )
  );
  rows = signal(
    [],
    ...ngDevMode ? [{ debugName: "rows" }] : (
      /* istanbul ignore next */
      []
    )
  );
  totalRecords = signal(
    0,
    ...ngDevMode ? [{ debugName: "totalRecords" }] : (
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
  pageIndex = 1;
  pageSize = 20;
  draw = 1;
  searchPayMonth = /* @__PURE__ */ new Date();
  searchEmpOffice = null;
  searchDeptNos = [];
  searchEmpSearch = "";
  empOfficeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "empOfficeOptions" }] : (
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
  deptTreeErrorMessage = signal(
    null,
    ...ngDevMode ? [{ debugName: "deptTreeErrorMessage" }] : (
      /* istanbul ignore next */
      []
    )
  );
  deptChildrenMap = /* @__PURE__ */ new Map();
  checkedParamDataNos = signal(
    /* @__PURE__ */ new Set(),
    ...ngDevMode ? [{ debugName: "checkedParamDataNos" }] : (
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
  importingExcel = signal(
    false,
    ...ngDevMode ? [{ debugName: "importingExcel" }] : (
      /* istanbul ignore next */
      []
    )
  );
  // ==================== Popup tìm kiếm nhân viên (tái dùng pattern ChangeUserComponent) ====================
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
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.empApi.getCodeList(EMP_OFFICE_PARENT_CODE).subscribe((list) => this.empOfficeOptions.set(list ?? []));
    this.loadDeptTree();
    this.route.queryParamMap.subscribe((params) => {
      this.itemType = params.get("itemType") ?? "";
      this.loadItemList();
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
  /** nz-tree-select chỉ trả về key của node được tick trực tiếp - mở rộng xuống các phòng ban con để
   *  khớp hành vi cascade của widget DeptTree.js gốc (xem giải thích ở ManageEmpPositionInfoComponent). */
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
  // ==================== Panel trái - danh sách hạng mục tiêu chuẩn ====================
  loadItemList() {
    this.itemsLoading.set(true);
    this.itemsErrorMessage.set(null);
    this.currentParamNo.set(null);
    this.currentParamName.set(null);
    this.rows.set([]);
    this.totalRecords.set(0);
    this.api.getItemList(this.itemType).subscribe({
      next: (list) => {
        this.items.set(list ?? []);
        this.itemsLoading.set(false);
      },
      error: () => {
        this.itemsErrorMessage.set(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.items.set([]);
        this.itemsLoading.set(false);
      }
    });
  }
  selectItem(item) {
    this.currentParamNo.set(item.paramNo);
    this.currentParamName.set(item.paramName);
    this.search();
  }
  // ==================== Tìm kiếm + phân trang server-side ====================
  search() {
    this.pageIndex = 1;
    this.load();
  }
  clearSearch() {
    this.searchPayMonth = /* @__PURE__ */ new Date();
    this.searchEmpOffice = null;
    this.searchDeptNos = [];
    this.searchEmpSearch = "";
    this.search();
  }
  onPageIndexChange(index) {
    this.pageIndex = index;
    this.load();
  }
  onPageSizeChange(size) {
    this.pageSize = size;
    this.pageIndex = 1;
    this.load();
  }
  load() {
    const paramNo = this.currentParamNo();
    if (!paramNo)
      return;
    this.loading.set(true);
    this.errorMessage.set(null);
    this.checkedParamDataNos.set(/* @__PURE__ */ new Set());
    this.draw += 1;
    this.api.getList({
      paramNo,
      payMonth: this.formatMmyyyy(this.searchPayMonth),
      empOfficeSearch: this.searchEmpOffice ?? "",
      deptNos: this.expandDeptSelection(this.searchDeptNos).join(","),
      empSearch: this.searchEmpSearch.trim(),
      draw: this.draw,
      start: (this.pageIndex - 1) * this.pageSize,
      length: this.pageSize
    }).subscribe({
      next: (res) => {
        if (res.error) {
          this.errorMessage.set(res.error);
          this.rows.set([]);
          this.totalRecords.set(0);
        } else {
          this.rows.set(res.data ?? []);
          this.totalRecords.set(res.recordsFiltered ?? 0);
        }
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.rows.set([]);
        this.totalRecords.set(0);
        this.loading.set(false);
      }
    });
  }
  // ==================== Chọn nhiều dòng (checkbox) ====================
  isChecked(row) {
    return this.checkedParamDataNos().has(row.paramDataNo);
  }
  toggleChecked(row, checked) {
    const next = new Set(this.checkedParamDataNos());
    if (checked)
      next.add(row.paramDataNo);
    else
      next.delete(row.paramDataNo);
    this.checkedParamDataNos.set(next);
  }
  get allChecked() {
    const list = this.rows();
    return list.length > 0 && list.every((r) => this.isChecked(r));
  }
  get someChecked() {
    return this.checkedParamDataNos().size > 0 && !this.allChecked;
  }
  toggleAllChecked(checked) {
    const next = new Set(this.checkedParamDataNos());
    this.rows().forEach((r) => checked ? next.add(r.paramDataNo) : next.delete(r.paramDataNo));
    this.checkedParamDataNos.set(next);
  }
  // ==================== Modal Thêm mới / Sửa ====================
  openAddModal() {
    if (!this.currentParamNo()) {
      this.message.warning(this.i18n.t("pa.inputItemData.selectItemFirst", "Vui l\xF2ng ch\u1ECDn h\u1EA1ng m\u1EE5c \u1EDF b\xEAn tr\xE1i tr\u01B0\u1EDBc!"));
      return;
    }
    this.isNew.set(true);
    this.form = __spreadValues({}, EMPTY_FORM);
    this.modalVisible.set(true);
  }
  openEditModal(row) {
    this.api.getOne(row.paramDataNo).subscribe({
      next: (dto) => {
        this.isNew.set(false);
        this.form = {
          paramDataNo: dto.paramDataNo,
          personId: dto.personId,
          empDisplay: `${row.empId || ""} - ${row.localName || ""}`,
          returnValue: dto.returnValue != null ? Number(dto.returnValue) : null,
          startMonth: this.parseMmyyyy(dto.startMonth),
          endMonth: this.parseMmyyyy(dto.endMonth),
          remark: dto.remark || ""
        };
        this.modalVisible.set(true);
      },
      error: () => this.message.error(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"))
    });
  }
  closeModal() {
    this.modalVisible.set(false);
  }
  saveForm() {
    if (!this.form.personId) {
      this.message.warning(this.i18n.t("pa.inputItemData.personIdRequired", "Vui l\xF2ng nh\u1EADp m\xE3 nh\xE2n vi\xEAn!"));
      return;
    }
    if (this.form.returnValue == null) {
      this.message.warning(this.i18n.t("pa.inputItemData.valueRequired", "Vui l\xF2ng nh\u1EADp gi\xE1 tr\u1ECB!"));
      return;
    }
    if (!this.form.startMonth) {
      this.message.warning(this.i18n.t("pa.inputItemData.startRequired", "Vui l\xF2ng nh\u1EADp th\xE1ng b\u1EAFt \u0111\u1EA7u!"));
      return;
    }
    if (this.form.endMonth && this.form.startMonth > this.form.endMonth) {
      this.message.warning(this.i18n.t("pa.inputItemData.startGreaterThanEnd", "Th\xE1ng b\u1EAFt \u0111\u1EA7u kh\xF4ng \u0111\u01B0\u1EE3c l\u1EDBn h\u01A1n th\xE1ng k\u1EBFt th\xFAc!"));
      return;
    }
    const paramNo = this.currentParamNo();
    if (!paramNo)
      return;
    const payload = {
      paramDataNo: this.form.paramDataNo,
      paramNo,
      personId: this.form.personId,
      returnValue: String(this.form.returnValue),
      startMonth: this.formatMmyyyy(this.form.startMonth),
      endMonth: this.formatMmyyyy(this.form.endMonth),
      remark: this.form.remark
    };
    this.saving.set(true);
    const req = this.isNew() ? this.api.insert(payload) : this.api.update(payload);
    req.subscribe({
      next: (res) => {
        this.saving.set(false);
        this.modalVisible.set(false);
        this.message.success(res.message || this.i18n.t("common.saveSuccess", "L\u01B0u th\xE0nh c\xF4ng!"));
        this.load();
      },
      error: (err) => {
        this.saving.set(false);
        this.message.error(err?.error?.error || this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  // ==================== Xóa nhiều dòng ====================
  openDeleteConfirm() {
    if (this.checkedParamDataNos().size === 0) {
      this.message.warning(this.i18n.t("pa.inputItemData.selectRequired", "Vui l\xF2ng ch\u1ECDn \xEDt nh\u1EA5t m\u1ED9t b\u1EA3n ghi!"));
      return;
    }
    this.deleteVisible.set(true);
  }
  closeDeleteConfirm() {
    this.deleteVisible.set(false);
  }
  get selectedCount() {
    return this.checkedParamDataNos().size;
  }
  confirmDelete() {
    const paramDataNos = Array.from(this.checkedParamDataNos());
    if (paramDataNos.length === 0) {
      this.deleteVisible.set(false);
      return;
    }
    this.deleting.set(true);
    forkJoin(paramDataNos.map((no) => this.api.delete(no))).subscribe({
      next: () => {
        this.deleting.set(false);
        this.deleteVisible.set(false);
        this.message.success(this.i18n.t("common.deleteSuccess", "X\xF3a th\xE0nh c\xF4ng!"));
        this.load();
      },
      error: () => {
        this.deleting.set(false);
        this.message.error(this.i18n.t("common.deleteFail", "X\xF3a th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  // ==================== Tải file mẫu / Import Excel ====================
  downloadTemplate() {
    window.location.href = this.api.downloadTemplateUrl();
  }
  onExcelFileSelected(event) {
    const input = event.target;
    const file = input.files?.[0];
    input.value = "";
    if (!file)
      return;
    const paramNo = this.currentParamNo();
    if (!paramNo) {
      this.message.warning(this.i18n.t("pa.inputItemData.selectItemFirst", "Vui l\xF2ng ch\u1ECDn h\u1EA1ng m\u1EE5c \u1EDF b\xEAn tr\xE1i tr\u01B0\u1EDBc!"));
      return;
    }
    this.importingExcel.set(true);
    this.api.importExcel(paramNo, file).subscribe({
      next: (res) => {
        this.importingExcel.set(false);
        if (res.success)
          this.message.success(res.message || this.i18n.t("common.saveSuccess", "L\u01B0u th\xE0nh c\xF4ng!"));
        else
          this.message.warning(res.message || this.i18n.t("common.saveFail", "L\u01B0u th\u1EA5t b\u1EA1i!"));
        this.tabs.openTab(this.api.importResultTabUrl(paramNo), this.i18n.t("arOtf.importResult", "K\u1EBFt qu\u1EA3 nh\u1EADp"), "external");
        this.load();
      },
      error: (err) => {
        this.importingExcel.set(false);
        this.message.error(err?.error?.message || this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  // ==================== Popup tìm kiếm nhân viên ====================
  openPicker() {
    this.pickerKeyword = "";
    this.pickerDeptNos = [];
    this.pickerEmpOffice = null;
    this.pickerRows.set([]);
    this.pickerErrorMessage.set(null);
    this.pickerVisible.set(true);
  }
  closePicker() {
    this.pickerVisible.set(false);
  }
  pickerSearch() {
    this.pickerLoading.set(true);
    this.pickerErrorMessage.set(null);
    this.empApi.searchEmployees({
      keyword: this.pickerKeyword.trim(),
      deptCodes: this.expandDeptSelection(this.pickerDeptNos),
      empOffice: this.pickerEmpOffice ?? ""
    }).subscribe({
      next: (rows) => {
        this.pickerRows.set(rows ?? []);
        this.pickerLoading.set(false);
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
    this.form.personId = row.personId;
    this.form.empDisplay = `${row.empId} - ${row.localName}`;
    this.pickerVisible.set(false);
  }
  // ==================== Helpers ====================
  formatMmyyyy(d) {
    return d ? formatDate(d, "MM", "vi") + formatDate(d, "yyyy", "vi") : "";
  }
  parseMmyyyy(s) {
    if (!s || s.length !== 6)
      return null;
    const mm = parseInt(s.substring(0, 2), 10) - 1;
    const yyyy = parseInt(s.substring(2), 10);
    if (Number.isNaN(mm) || Number.isNaN(yyyy))
      return null;
    return new Date(yyyy, mm, 1);
  }
  /** Chuyển 'MMYYYY' (BE) sang 'MM/yyyy' để hiển thị trong bảng (theo CLAUDE.md). */
  toMmSlashYyyy(mmyyyy) {
    const d = this.parseMmyyyy(mmyyyy);
    return d ? formatDate(d, "MM/yyyy", "vi") : "";
  }
  numberFormatter = (value) => value != null ? `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ".") : "";
  numberParser = (value) => Number(value.replace(/\./g, ""));
  static \u0275fac = function ViewPaInputItemDataComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewPaInputItemDataComponent)(\u0275\u0275directiveInject(ViewPaInputItemDataService), \u0275\u0275directiveInject(ChangeUserService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(TabService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewPaInputItemDataComponent, selectors: [["app-view-pa-input-item-data"]], decls: 85, vars: 107, consts: [["vpidFileInput", ""], ["vpidTable", ""], ["vpidTotalTpl", ""], ["vpidPickerTable", ""], [1, "row", "h-100"], [1, "col-md-3", "mb-3"], [1, "vpid-left-card", 3, "nzBodyStyle"], [1, "px-3", "py-2", "bg-light", "border-bottom", "fw-bold"], [1, "vpid-item-list"], ["class", "p-3 text-danger small", 4, "ngIf"], ["class", "p-3 text-muted small", 4, "ngIf"], ["class", "vpid-item-row d-flex align-items-center px-3 py-2 border-bottom", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "col-md-9", "mb-3"], [1, "mb-3", "sticky-filter-card"], [1, "row", "g-3", 3, "ngSubmit"], [1, "col-md-2"], [1, "form-label"], ["name", "vpidPayMonth", "nzMode", "month", "nzFormat", "MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel", "nzAllowClear"], ["name", "vpidEmpOffice", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col-md-3"], ["name", "vpidDeptNos", "nzCheckable", "", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["class", "text-danger small mt-1", 4, "ngIf"], ["nz-input", "", "name", "vpidEmpSearch", 3, "ngModelChange", "ngModel", "placeholder"], [1, "col-md-2", "d-flex", "align-items-end", "gap-2"], ["nz-button", "", "nzType", "primary", "type", "submit"], [1, "bx", "bx-search"], ["nz-button", "", "type", "button", 3, "click"], [1, "bx", "bx-x"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3", "flex-wrap", "gap-2"], [1, "mb-0", "text-primary", "fw-bold"], [1, "d-flex", "gap-2", "flex-wrap"], ["nz-button", "", "nzType", "primary", "type", "button", 3, "click"], [1, "bx", "bx-plus"], ["nz-button", "", "nzType", "default", "type", "button", 3, "click"], [1, "bx", "bx-download"], ["nz-button", "", "nzType", "default", "type", "button", 3, "click", "nzLoading"], [1, "bx", "bx-upload"], ["type", "file", "hidden", "", "accept", ".xlsx,.xls", 3, "change"], ["nz-button", "", "nzDanger", "", "type", "button", 3, "click"], [1, "bx", "bx-trash"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], ["class", "text-muted p-3 text-center", 4, "ngIf"], [3, "nzData", "nzFrontPagination", "nzLoading", "nzTotal", "nzPageIndex", "nzPageSize", "nzPageSizeOptions", "nzShowSizeChanger", "nzShowTotal", "nzScroll", "nzPageIndexChange", "nzPageSizeChange", 4, "ngIf"], ["nzWidth", "650px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], ["nzWidth", "900px", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzFooter"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [1, "p-3", "text-danger", "small"], [1, "p-3", "text-muted", "small"], [1, "vpid-item-row", "d-flex", "align-items-center", "px-3", "py-2", "border-bottom", 3, "click"], [1, "bx", "bxs-file", "me-2", "text-warning", "flex-shrink-0"], [1, "small", "text-truncate"], [3, "nzValue", "nzLabel"], [1, "text-danger", "small", "mt-1"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], [1, "text-muted", "p-3", "text-center"], [3, "nzPageIndexChange", "nzPageSizeChange", "nzData", "nzFrontPagination", "nzLoading", "nzTotal", "nzPageIndex", "nzPageSize", "nzPageSizeOptions", "nzShowSizeChanger", "nzShowTotal", "nzScroll"], ["nzWidth", "40px", 1, "text-center"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel", "nzIndeterminate"], ["nzWidth", "50px", 1, "text-center"], ["nzWidth", "110px"], ["nzWidth", "150px"], ["nzWidth", "160px"], ["nzWidth", "130px"], ["nzWidth", "120px", 1, "text-end"], ["nzWidth", "110px", 1, "text-center"], ["nzWidth", "180px"], [4, "ngIf"], ["class", "vpid-row-clickable", 3, "click", 4, "ngFor", "ngForOf"], ["colspan", "11", 1, "text-center", "text-muted"], [1, "vpid-row-clickable", 3, "click"], [1, "text-center", 3, "click"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel"], [1, "text-center"], [1, "text-end"], ["nzType", "info", 1, "mb-3", 3, "nzMessage"], [1, "row", "g-3"], [1, "col-12"], [1, "text-danger"], [1, "d-flex", "gap-2"], ["nz-input", "", "name", "vpidEmpDisplay", "readonly", "", 3, "ngModel", "ngModelOptions", "placeholder"], ["nz-button", "", "nzType", "default", "type", "button", 3, "click", 4, "ngIf"], ["class", "text-success d-block mt-1", 4, "ngIf"], [1, "col-md-6"], ["name", "vpidReturnValue", 1, "w-100", 3, "ngModelChange", "ngModel", "nzFormatter", "nzParser"], ["name", "vpidStartMonth", "nzMode", "month", "nzFormat", "MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["name", "vpidEndMonth", "nzMode", "month", "nzFormat", "MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nz-input", "", "name", "vpidRemark", "rows", "2", 3, "ngModelChange", "ngModel"], [1, "text-success", "d-block", "mt-1"], [1, "bx", "bx-check"], [1, "row", "g-2", "align-items-end", "mb-3", 3, "ngSubmit"], [1, "col-md-5"], ["nz-input", "", "name", "vpidPickerKeyword", 3, "ngModelChange", "keydown.enter", "ngModel", "placeholder"], [1, "col-md-4"], ["name", "vpidPickerDeptNos", "nzCheckable", "", "nzShowSearch", "", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "nzNodes", "ngModel", "nzPlaceHolder"], ["name", "vpidPickerEmpOffice", "nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [1, "col-12", "d-flex", "gap-2"], ["nzType", "error", "class", "mb-2", 3, "nzMessage", 4, "ngIf"], ["nzSize", "small", 3, "nzData", "nzLoading", "nzPageSize"], ["nzWidth", "60px", 1, "text-center"], ["nzType", "error", 1, "mb-2", 3, "nzMessage"], [1, "mb-0"]], template: function ViewPaInputItemDataComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "nz-card", 6)(3, "div", 7);
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 8);
      \u0275\u0275template(7, ViewPaInputItemDataComponent_div_7_Template, 2, 1, "div", 9)(8, ViewPaInputItemDataComponent_div_8_Template, 3, 4, "div", 10)(9, ViewPaInputItemDataComponent_div_9_Template, 4, 4, "div", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 12)(11, "nz-card", 13)(12, "form", 14);
      \u0275\u0275listener("ngSubmit", function ViewPaInputItemDataComponent_Template_form_ngSubmit_12_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(13, "div", 15)(14, "label", 16);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "nz-date-picker", 17);
      \u0275\u0275twoWayListener("ngModelChange", function ViewPaInputItemDataComponent_Template_nz_date_picker_ngModelChange_17_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchPayMonth, $event) || (ctx.searchPayMonth = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 15)(19, "label", 16);
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "nz-select", 18);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewPaInputItemDataComponent_Template_nz_select_ngModelChange_22_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchEmpOffice, $event) || (ctx.searchEmpOffice = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(24, ViewPaInputItemDataComponent_nz_option_24_Template, 1, 2, "nz-option", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 20)(26, "label", 16);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "nz-tree-select", 21);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewPaInputItemDataComponent_Template_nz_tree_select_ngModelChange_29_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchDeptNos, $event) || (ctx.searchDeptNos = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275template(31, ViewPaInputItemDataComponent_div_31_Template, 2, 1, "div", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 20)(33, "label", 16);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "input", 23);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ViewPaInputItemDataComponent_Template_input_ngModelChange_36_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchEmpSearch, $event) || (ctx.searchEmpSearch = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275controlCreate();
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 24)(39, "button", 25);
      \u0275\u0275element(40, "i", 26);
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "button", 27);
      \u0275\u0275listener("click", function ViewPaInputItemDataComponent_Template_button_click_43_listener() {
        return ctx.clearSearch();
      });
      \u0275\u0275element(44, "i", 28);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(45, "nz-card")(46, "div", 29)(47, "h6", 30);
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 31)(51, "button", 32);
      \u0275\u0275listener("click", function ViewPaInputItemDataComponent_Template_button_click_51_listener() {
        return ctx.openAddModal();
      });
      \u0275\u0275element(52, "i", 33);
      \u0275\u0275text(53);
      \u0275\u0275pipe(54, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "button", 34);
      \u0275\u0275listener("click", function ViewPaInputItemDataComponent_Template_button_click_55_listener() {
        return ctx.downloadTemplate();
      });
      \u0275\u0275element(56, "i", 35);
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "button", 36);
      \u0275\u0275listener("click", function ViewPaInputItemDataComponent_Template_button_click_59_listener() {
        \u0275\u0275restoreView(_r1);
        const vpidFileInput_r6 = \u0275\u0275reference(64);
        return \u0275\u0275resetView(vpidFileInput_r6.click());
      });
      \u0275\u0275element(60, "i", 37);
      \u0275\u0275text(61);
      \u0275\u0275pipe(62, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "input", 38, 0);
      \u0275\u0275listener("change", function ViewPaInputItemDataComponent_Template_input_change_63_listener($event) {
        return ctx.onExcelFileSelected($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "button", 39);
      \u0275\u0275listener("click", function ViewPaInputItemDataComponent_Template_button_click_65_listener() {
        return ctx.openDeleteConfirm();
      });
      \u0275\u0275element(66, "i", 40);
      \u0275\u0275text(67);
      \u0275\u0275pipe(68, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(69, ViewPaInputItemDataComponent_nz_alert_69_Template, 1, 1, "nz-alert", 41)(70, ViewPaInputItemDataComponent_div_70_Template, 3, 4, "div", 42)(71, ViewPaInputItemDataComponent_nz_table_71_Template, 41, 55, "nz-table", 43);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(72, "nz-modal", 44);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275pipe(74, "translate");
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewPaInputItemDataComponent_Template_nz_modal_nzOnCancel_72_listener() {
        return ctx.closeModal();
      })("nzOnOk", function ViewPaInputItemDataComponent_Template_nz_modal_nzOnOk_72_listener() {
        return ctx.saveForm();
      });
      \u0275\u0275template(76, ViewPaInputItemDataComponent_ng_container_76_Template, 39, 39, "ng-container", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "nz-modal", 46);
      \u0275\u0275pipe(78, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewPaInputItemDataComponent_Template_nz_modal_nzOnCancel_77_listener() {
        return ctx.closePicker();
      });
      \u0275\u0275template(79, ViewPaInputItemDataComponent_ng_container_79_Template, 52, 62, "ng-container", 45);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "nz-modal", 47);
      \u0275\u0275pipe(81, "translate");
      \u0275\u0275pipe(82, "translate");
      \u0275\u0275pipe(83, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewPaInputItemDataComponent_Template_nz_modal_nzOnCancel_80_listener() {
        return ctx.closeDeleteConfirm();
      })("nzOnOk", function ViewPaInputItemDataComponent_Template_nz_modal_nzOnOk_80_listener() {
        return ctx.confirmDelete();
      });
      \u0275\u0275template(84, ViewPaInputItemDataComponent_ng_container_84_Template, 4, 5, "ng-container", 45);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("nzBodyStyle", \u0275\u0275pureFunction0(106, _c0));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 43, "pa.inputItemData.itemList", "H\u1EA1ng m\u1EE5c ti\xEAu chu\u1EA9n"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.itemsErrorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.itemsLoading() && !ctx.itemsErrorMessage() && ctx.items().length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.items());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 46, "pa.inputItemData.payMonth", "Th\xE1ng l\u01B0\u01A1ng"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchPayMonth);
      \u0275\u0275property("nzAllowClear", false);
      \u0275\u0275control();
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 49, "pa.inputItemData.empOffice", "Tr\u1EA1ng th\xE1i l\xE0m vi\u1EC7c"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchEmpOffice);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(23, 52, "common.selectAll", "-- T\u1EA5t c\u1EA3 --"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.empOfficeOptions());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 55, "pa.inputItemData.dept", "Ph\xF2ng ban"));
      \u0275\u0275advance(2);
      \u0275\u0275property("nzNodes", ctx.deptNodes());
      \u0275\u0275twoWayProperty("ngModel", ctx.searchDeptNos);
      \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(30, 58, "pa.inputItemData.deptPlaceholder", "M\xE3 / T\xEAn ph\xF2ng ban"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.deptTreeErrorMessage());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 61, "pa.inputItemData.empSearch", "H\u1ECD t\xEAn / M\xE3 NV"));
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchEmpSearch);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(37, 64, "pa.inputItemData.empSearchPlaceholder", "H\u1ECD t\xEAn ho\u1EB7c m\xE3 nh\xE2n vi\xEAn"));
      \u0275\u0275control();
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(42, 67, "common.search", "T\xECm ki\u1EBFm"), " ");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", ctx.currentParamName() || \u0275\u0275pipeBind2(49, 70, "pa.inputItemData.dataList", "Danh s\xE1ch d\u1EEF li\u1EC7u ti\xEAu chu\u1EA9n"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(54, 73, "pa.inputItemData.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(58, 76, "common.downloadTemplate", "T\u1EA3i File M\u1EABu"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("nzLoading", ctx.importingExcel());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(62, 79, "common.importExcel", "Import Excel"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(68, 82, "pa.inputItemData.delete", "X\xF3a"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.currentParamNo());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentParamNo());
      \u0275\u0275advance();
      \u0275\u0275property("nzVisible", ctx.modalVisible())("nzTitle", \u0275\u0275pipeBind2(73, 85, ctx.isNew() ? "pa.inputItemData.addTitle" : "pa.inputItemData.editTitle", ctx.isNew() ? "Th\xEAm m\u1EDBi d\u1EEF li\u1EC7u ti\xEAu chu\u1EA9n" : "C\u1EADp nh\u1EADt d\u1EEF li\u1EC7u ti\xEAu chu\u1EA9n"))("nzOkLoading", ctx.saving())("nzOkText", \u0275\u0275pipeBind2(74, 88, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(75, 91, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(5);
      \u0275\u0275property("nzVisible", ctx.pickerVisible())("nzTitle", \u0275\u0275pipeBind2(78, 94, "empSearch.title", "T\xECm ki\u1EBFm nh\xE2n vi\xEAn"))("nzFooter", null);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzVisible", ctx.deleteVisible())("nzTitle", \u0275\u0275pipeBind2(81, 97, "common.confirm", "X\xE1c nh\u1EADn"))("nzOkLoading", ctx.deleting())("nzOkText", \u0275\u0275pipeBind2(82, 100, "common.confirm", "X\xE1c nh\u1EADn"))("nzCancelText", \u0275\u0275pipeBind2(83, 103, "common.cancel", "H\u1EE7y"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzCardModule, NzCardComponent, NzInputModule, NzInputDirective, NzInputNumberModule, NzInputNumberComponent, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzCheckboxModule, NzCheckboxComponent, NzDatePickerModule, NzDatePickerComponent, NzTreeSelectModule, NzTreeSelectComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\n.vpid-row-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.vpid-left-card[_ngcontent-%COMP%] {\n  height: calc(100vh - 220px);\n  display: flex;\n  flex-direction: column;\n}\n.vpid-item-list[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  flex: 1;\n}\n.vpid-item-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.vpid-item-row[_ngcontent-%COMP%]:hover {\n  background-color: var(--%NS%bs-light, #f5f5f5);\n}\n.vpid-item-row.active[_ngcontent-%COMP%] {\n  background-color: #1677ff;\n  color: #fff;\n}\n/*# sourceMappingURL=view-pa-input-item-data.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewPaInputItemDataComponent, [{
    type: Component,
    args: [{ selector: "app-view-pa-input-item-data", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzCardModule,
      NzInputModule,
      NzInputNumberModule,
      NzSelectModule,
      NzButtonModule,
      NzCheckboxModule,
      NzDatePickerModule,
      NzTreeSelectModule,
      NzModalModule,
      NzAlertModule,
      TranslatePipe
    ], template: `<div class="row h-100">
  <!-- \u2500\u2500 Panel tr\xE1i: danh s\xE1ch h\u1EA1ng m\u1EE5c ti\xEAu chu\u1EA9n \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="col-md-3 mb-3">
    <nz-card class="vpid-left-card" [nzBodyStyle]="{ padding: '0' }">
      <div class="px-3 py-2 bg-light border-bottom fw-bold">
        {{ 'pa.inputItemData.itemList' | translate:'H\u1EA1ng m\u1EE5c ti\xEAu chu\u1EA9n' }}
      </div>
      <div class="vpid-item-list">
        <div *ngIf="itemsErrorMessage()" class="p-3 text-danger small">{{ itemsErrorMessage() }}</div>
        <div *ngIf="!itemsLoading() && !itemsErrorMessage() && items().length === 0" class="p-3 text-muted small">
          {{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}
        </div>
        <div *ngFor="let item of items()" class="vpid-item-row d-flex align-items-center px-3 py-2 border-bottom"
             [class.active]="currentParamNo() === item.paramNo" (click)="selectItem(item)">
          <i class="bx bxs-file me-2 text-warning flex-shrink-0"></i>
          <span class="small text-truncate" [attr.title]="item.paramName">{{ item.paramName }}</span>
        </div>
      </div>
    </nz-card>
  </div>

  <!-- \u2500\u2500 Panel ph\u1EA3i: danh s\xE1ch d\u1EEF li\u1EC7u ti\xEAu chu\u1EA9n \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="col-md-9 mb-3">
    <nz-card class="mb-3 sticky-filter-card">
      <form class="row g-3" (ngSubmit)="search()">
        <div class="col-md-2">
          <label class="form-label">{{ 'pa.inputItemData.payMonth' | translate:'Th\xE1ng l\u01B0\u01A1ng' }}</label>
          <nz-date-picker class="w-100" [(ngModel)]="searchPayMonth" name="vpidPayMonth"
                           nzMode="month" nzFormat="MM/yyyy" [nzAllowClear]="false"></nz-date-picker>
        </div>
        <div class="col-md-2">
          <label class="form-label">{{ 'pa.inputItemData.empOffice' | translate:'Tr\u1EA1ng th\xE1i l\xE0m vi\u1EC7c' }}</label>
          <nz-select class="w-100" [(ngModel)]="searchEmpOffice" name="vpidEmpOffice" nzAllowClear
                     [nzPlaceHolder]="'common.selectAll' | translate:'-- T\u1EA5t c\u1EA3 --'">
            <nz-option *ngFor="let c of empOfficeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
          </nz-select>
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'pa.inputItemData.dept' | translate:'Ph\xF2ng ban' }}</label>
          <nz-tree-select class="w-100" [nzNodes]="deptNodes()" [(ngModel)]="searchDeptNos" name="vpidDeptNos"
                           nzCheckable nzShowSearch nzAllowClear
                           [nzPlaceHolder]="'pa.inputItemData.deptPlaceholder' | translate:'M\xE3 / T\xEAn ph\xF2ng ban'"></nz-tree-select>
          <div *ngIf="deptTreeErrorMessage()" class="text-danger small mt-1">{{ deptTreeErrorMessage() }}</div>
        </div>
        <div class="col-md-3">
          <label class="form-label">{{ 'pa.inputItemData.empSearch' | translate:'H\u1ECD t\xEAn / M\xE3 NV' }}</label>
          <input nz-input [(ngModel)]="searchEmpSearch" name="vpidEmpSearch"
                 [placeholder]="'pa.inputItemData.empSearchPlaceholder' | translate:'H\u1ECD t\xEAn ho\u1EB7c m\xE3 nh\xE2n vi\xEAn'">
        </div>
        <div class="col-md-2 d-flex align-items-end gap-2">
          <button nz-button nzType="primary" type="submit">
            <i class="bx bx-search"></i> {{ 'common.search' | translate:'T\xECm ki\u1EBFm' }}
          </button>
          <button nz-button type="button" (click)="clearSearch()">
            <i class="bx bx-x"></i>
          </button>
        </div>
      </form>
    </nz-card>

    <nz-card>
      <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
        <h6 class="mb-0 text-primary fw-bold">
          {{ currentParamName() || ('pa.inputItemData.dataList' | translate:'Danh s\xE1ch d\u1EEF li\u1EC7u ti\xEAu chu\u1EA9n') }}
        </h6>
        <div class="d-flex gap-2 flex-wrap">
          <button nz-button nzType="primary" type="button" (click)="openAddModal()">
            <i class="bx bx-plus"></i> {{ 'pa.inputItemData.addNew' | translate:'Th\xEAm m\u1EDBi' }}
          </button>
          <button nz-button nzType="default" type="button" (click)="downloadTemplate()">
            <i class="bx bx-download"></i> {{ 'common.downloadTemplate' | translate:'T\u1EA3i File M\u1EABu' }}
          </button>
          <button nz-button nzType="default" type="button" [nzLoading]="importingExcel()" (click)="vpidFileInput.click()">
            <i class="bx bx-upload"></i> {{ 'common.importExcel' | translate:'Import Excel' }}
          </button>
          <input #vpidFileInput type="file" hidden accept=".xlsx,.xls" (change)="onExcelFileSelected($event)">
          <button nz-button nzDanger type="button" (click)="openDeleteConfirm()">
            <i class="bx bx-trash"></i> {{ 'pa.inputItemData.delete' | translate:'X\xF3a' }}
          </button>
        </div>
      </div>

      <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

      <div *ngIf="!currentParamNo()" class="text-muted p-3 text-center">
        {{ 'pa.inputItemData.selectItemFirst' | translate:'Vui l\xF2ng ch\u1ECDn h\u1EA1ng m\u1EE5c \u1EDF b\xEAn tr\xE1i tr\u01B0\u1EDBc!' }}
      </div>

      <!-- Server-side pagination (draw/start/length -> recordsFiltered), \u0111\xFAng h\xE0nh vi DataTables g\u1ED1c. -->
      <nz-table *ngIf="currentParamNo()" [nzData]="rows()" [nzFrontPagination]="false" [nzLoading]="loading()"
                [nzTotal]="totalRecords()" [nzPageIndex]="pageIndex" [nzPageSize]="pageSize"
                [nzPageSizeOptions]="pageSizeOptions" [nzShowSizeChanger]="true" [nzShowTotal]="vpidTotalTpl"
                (nzPageIndexChange)="onPageIndexChange($event)" (nzPageSizeChange)="onPageSizeChange($event)"
                [nzScroll]="{ x: '1300px', y: 'calc(100vh - 480px)' }" #vpidTable>
        <thead>
          <tr>
            <th class="text-center" nzWidth="40px">
              <label nz-checkbox [ngModel]="allChecked" [nzIndeterminate]="someChecked" (ngModelChange)="toggleAllChecked($event)"></label>
            </th>
            <th class="text-center" nzWidth="50px">{{ 'pa.inputItemData.no' | translate:'STT' }}</th>
            <th nzWidth="110px">{{ 'pa.inputItemData.empId' | translate:'M\xE3 NV' }}</th>
            <th nzWidth="150px">{{ 'pa.inputItemData.localName' | translate:'H\u1ECD t\xEAn' }}</th>
            <th nzWidth="160px">{{ 'pa.inputItemData.deptName' | translate:'Ph\xF2ng ban' }}</th>
            <th nzWidth="130px">{{ 'pa.inputItemData.postGrade' | translate:'Ch\u1EE9c danh' }}</th>
            <th nzWidth="110px">{{ 'pa.inputItemData.empOfficeName' | translate:'Tr\u1EA1ng th\xE1i' }}</th>
            <th class="text-end" nzWidth="120px">{{ 'pa.inputItemData.returnValue' | translate:'Gi\xE1 tr\u1ECB' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'pa.inputItemData.startMonth' | translate:'Th\xE1ng b\u1EAFt \u0111\u1EA7u' }}</th>
            <th class="text-center" nzWidth="110px">{{ 'pa.inputItemData.endMonth' | translate:'Th\xE1ng k\u1EBFt th\xFAc' }}</th>
            <th nzWidth="180px">{{ 'pa.inputItemData.remark' | translate:'Ghi ch\xFA' }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngIf="!loading() && rows().length === 0">
            <td colspan="11" class="text-center text-muted">{{ 'common.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
          </tr>
          <tr *ngFor="let row of vpidTable.data; let i = index" class="vpid-row-clickable" (click)="openEditModal(row)">
            <td class="text-center" (click)="$event.stopPropagation()">
              <label nz-checkbox [ngModel]="isChecked(row)" (ngModelChange)="toggleChecked(row, $event)"></label>
            </td>
            <td class="text-center">{{ (pageIndex - 1) * pageSize + i + 1 }}</td>
            <td [attr.title]="row.empId || null">{{ row.empId }}</td>
            <td [attr.title]="row.localName || null">{{ row.localName }}</td>
            <td [attr.title]="row.deptName || null">{{ row.deptName }}</td>
            <td [attr.title]="row.postGradeName || null">{{ row.postGradeName }}</td>
            <td [attr.title]="row.empOffice || null">{{ row.empOffice }}</td>
            <td class="text-end">{{ numberFormatter(+row.returnValue) }}</td>
            <td class="text-center">{{ toMmSlashYyyy(row.startMonth) }}</td>
            <td class="text-center">{{ toMmSlashYyyy(row.endMonth) }}</td>
            <td [attr.title]="row.remark || null">{{ row.remark }}</td>
          </tr>
        </tbody>
        <ng-template #vpidTotalTpl let-total>
          {{ 'common.totalRows' | translate:'T\u1ED5ng s\u1ED1 d\xF2ng:' }} {{ total }}
        </ng-template>
      </nz-table>
    </nz-card>
  </div>
</div>

<!-- Modal Th\xEAm m\u1EDBi / S\u1EEDa d\u1EEF li\u1EC7u ti\xEAu chu\u1EA9n -->
<nz-modal [nzVisible]="modalVisible()"
          [nzTitle]="(isNew() ? 'pa.inputItemData.addTitle' : 'pa.inputItemData.editTitle') | translate:(isNew() ? 'Th\xEAm m\u1EDBi d\u1EEF li\u1EC7u ti\xEAu chu\u1EA9n' : 'C\u1EADp nh\u1EADt d\u1EEF li\u1EC7u ti\xEAu chu\u1EA9n')"
          nzWidth="650px" (nzOnCancel)="closeModal()" (nzOnOk)="saveForm()" [nzOkLoading]="saving()"
          [nzOkText]="'common.save' | translate:'L\u01B0u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <nz-alert nzType="info" class="mb-3"
              [nzMessage]="('pa.inputItemData.configItem' | translate:'H\u1EA1ng m\u1EE5c \u0111ang nh\u1EADp:') + ' ' + (currentParamName() || '')"></nz-alert>
    <div class="row g-3">
      <div class="col-12">
        <label class="form-label">
          {{ 'pa.inputItemData.personId' | translate:'M\xE3 nh\xE2n vi\xEAn' }} <span class="text-danger">*</span>
        </label>
        <div class="d-flex gap-2">
          <input nz-input [ngModel]="form.empDisplay" name="vpidEmpDisplay" readonly
                 [ngModelOptions]="{ standalone: true }"
                 [placeholder]="'arSupervisor.placeholder.selectEmp' | translate:'Ch\u1ECDn nh\xE2n vi\xEAn...'">
          <button *ngIf="isNew()" nz-button nzType="default" type="button" (click)="openPicker()">
            <i class="bx bx-search"></i> {{ 'arSupervisor.btn.select' | translate:'Ch\u1ECDn' }}
          </button>
        </div>
        <small *ngIf="form.personId" class="text-success d-block mt-1">
          <i class="bx bx-check"></i> {{ 'arSupervisor.js.empSelected' | translate:'\u0110\xE3 ch\u1ECDn NV: ' }}{{ form.empDisplay }}
        </small>
      </div>
      <div class="col-md-6">
        <label class="form-label">
          {{ 'pa.inputItemData.returnValue' | translate:'Gi\xE1 tr\u1ECB' }} <span class="text-danger">*</span>
        </label>
        <nz-input-number class="w-100" [(ngModel)]="form.returnValue" name="vpidReturnValue"
                          [nzFormatter]="numberFormatter" [nzParser]="numberParser"></nz-input-number>
      </div>
      <div class="col-md-3">
        <label class="form-label">
          {{ 'pa.inputItemData.startMonth' | translate:'Th\xE1ng b\u1EAFt \u0111\u1EA7u' }} <span class="text-danger">*</span>
        </label>
        <nz-date-picker class="w-100" [(ngModel)]="form.startMonth" name="vpidStartMonth"
                         nzMode="month" nzFormat="MM/yyyy"></nz-date-picker>
      </div>
      <div class="col-md-3">
        <label class="form-label">{{ 'pa.inputItemData.endMonth' | translate:'Th\xE1ng k\u1EBFt th\xFAc' }}</label>
        <nz-date-picker class="w-100" [(ngModel)]="form.endMonth" name="vpidEndMonth"
                         nzMode="month" nzFormat="MM/yyyy"></nz-date-picker>
      </div>
      <div class="col-12">
        <label class="form-label">{{ 'pa.inputItemData.remark' | translate:'Ghi ch\xFA' }}</label>
        <textarea nz-input [(ngModel)]="form.remark" name="vpidRemark" rows="2"></textarea>
      </div>
    </div>
  </ng-container>
</nz-modal>

<!-- Popup t\xECm ki\u1EBFm nh\xE2n vi\xEAn - t\xE1i d\xF9ng pattern ChangeUserComponent (thay EmployeeSearchModal jQuery) -->
<nz-modal [nzVisible]="pickerVisible()" [nzTitle]="'empSearch.title' | translate:'T\xECm ki\u1EBFm nh\xE2n vi\xEAn'"
          nzWidth="900px" (nzOnCancel)="closePicker()" [nzFooter]="null">
  <ng-container *nzModalContent>
    <form class="row g-2 align-items-end mb-3" (ngSubmit)="pickerSearch()">
      <div class="col-md-5">
        <label class="form-label">{{ 'empSearch.field.keyword' | translate:'M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn' }}</label>
        <input nz-input [(ngModel)]="pickerKeyword" name="vpidPickerKeyword"
               [placeholder]="'empSearch.placeholder.keyword' | translate:'Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn'"
               (keydown.enter)="$event.preventDefault(); pickerSearch()">
      </div>
      <div class="col-md-4">
        <label class="form-label">{{ 'empSearch.field.dept' | translate:'Ph\xF2ng ban' }}</label>
        <nz-tree-select class="w-100" [nzNodes]="deptNodes()" [(ngModel)]="pickerDeptNos" name="vpidPickerDeptNos"
                         nzCheckable nzShowSearch nzAllowClear
                         [nzPlaceHolder]="'vdp.search.dept.placeholder' | translate:'Ch\u1ECDn ph\xF2ng ban'"></nz-tree-select>
      </div>
      <div class="col-md-3">
        <label class="form-label">{{ 'empSearch.field.empOffice' | translate:'Tr\u1EA1ng th\xE1i l\xE0m vi\u1EC7c' }}</label>
        <nz-select class="w-100" [(ngModel)]="pickerEmpOffice" name="vpidPickerEmpOffice" nzAllowClear
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

    <nz-table [nzData]="pickerRows()" [nzLoading]="pickerLoading()" [nzPageSize]="10" nzSize="small" #vpidPickerTable>
      <thead>
        <tr>
          <th class="text-center" nzWidth="60px">{{ 'empSearch.col.no' | translate:'STT' }}</th>
          <th nzWidth="110px">{{ 'pa.inputItemData.empId' | translate:'M\xE3 NV' }}</th>
          <th>{{ 'pa.inputItemData.localName' | translate:'H\u1ECD t\xEAn' }}</th>
          <th>{{ 'pa.inputItemData.deptName' | translate:'Ph\xF2ng ban' }}</th>
          <th>{{ 'epi.field.position' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of vpidPickerTable.data; let i = index" class="vpid-row-clickable" (click)="selectEmployee(row)">
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

<!-- Modal x\xE1c nh\u1EADn x\xF3a nhi\u1EC1u d\xF2ng -->
<nz-modal [nzVisible]="deleteVisible()" [nzTitle]="'common.confirm' | translate:'X\xE1c nh\u1EADn'"
          (nzOnCancel)="closeDeleteConfirm()" (nzOnOk)="confirmDelete()" [nzOkLoading]="deleting()"
          [nzOkText]="'common.confirm' | translate:'X\xE1c nh\u1EADn'" [nzCancelText]="'common.cancel' | translate:'H\u1EE7y'">
  <ng-container *nzModalContent>
    <p class="mb-0">{{ 'pa.inputItemData.confirmDelete' | translate:'B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a b\u1EA3n ghi \u0111\xE3 ch\u1ECDn?' }} ({{ selectedCount }})</p>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/view-pa-input-item-data/view-pa-input-item-data.component.css */\n.vpid-row-clickable {\n  cursor: pointer;\n}\n.vpid-left-card {\n  height: calc(100vh - 220px);\n  display: flex;\n  flex-direction: column;\n}\n.vpid-item-list {\n  overflow-y: auto;\n  flex: 1;\n}\n.vpid-item-row {\n  cursor: pointer;\n}\n.vpid-item-row:hover {\n  background-color: var(--bs-light, #f5f5f5);\n}\n.vpid-item-row.active {\n  background-color: #1677ff;\n  color: #fff;\n}\n/*# sourceMappingURL=view-pa-input-item-data.component.css.map */\n"] }]
  }], () => [{ type: ViewPaInputItemDataService }, { type: ChangeUserService }, { type: ActivatedRoute }, { type: TabService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewPaInputItemDataComponent, { className: "ViewPaInputItemDataComponent", filePath: "src/app/view-pa-input-item-data/view-pa-input-item-data.component.ts", lineNumber: 126 });
})();
export {
  ViewPaInputItemDataComponent
};
//# debugId=5fdc84dc-a861-586f-ae10-d34fc0504611
//# sourceMappingURL=chunk-5V5MEHEK.js.map
