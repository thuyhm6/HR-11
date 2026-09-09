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
import "./chunk-2GOAB54B.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
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
  ViewChild,
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-VTW5U2M5.js";

// src/app/personal-info/personal-info.service.ts
var API_BASE = "/ess/empinfo/api/personalInfo";
var PersonalInfoService = class _PersonalInfoService {
  constructor(http) {
    this.http = http;
  }
  http;
  getMyInfo() {
    return this.http.get(`${API_BASE}/myInfo`, { withCredentials: true });
  }
  getMyAddresses() {
    return this.http.get(`${API_BASE}/myAddress`, { withCredentials: true });
  }
  getMyFamilies() {
    return this.http.get(`${API_BASE}/myFamily`, { withCredentials: true });
  }
  getMyEmergencies() {
    return this.http.get(`${API_BASE}/myEmergency`, { withCredentials: true });
  }
  getCodeList(parentCodeNo) {
    return this.http.get("/sys/api/getCode/list", {
      params: new HttpParams().set("parentCodeNo", parentCodeNo),
      withCredentials: true
    });
  }
  savePersonal(payload, files) {
    return this.http.post(`${API_BASE}/savePersonal`, this.toFormData(payload, files), {
      withCredentials: true
    });
  }
  saveAddress(payload) {
    return this.http.post(`${API_BASE}/saveAddress`, payload, { withCredentials: true });
  }
  saveFamily(payload, files) {
    return this.http.post(`${API_BASE}/saveFamily`, this.toFormData(payload, files), {
      withCredentials: true
    });
  }
  saveEmergency(payload, files) {
    return this.http.post(`${API_BASE}/saveEmergency`, this.toFormData(payload, files), {
      withCredentials: true
    });
  }
  /** Không set Content-Type thủ công - trình duyệt tự thêm boundary đúng cho multipart/form-data. */
  toFormData(payload, files) {
    const fd = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      if (value !== void 0 && value !== null && value !== "")
        fd.append(key, String(value));
    });
    files.forEach((file) => fd.append("attachFiles", file));
    return fd;
  }
  static \u0275fac = function PersonalInfoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PersonalInfoService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PersonalInfoService, factory: _PersonalInfoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersonalInfoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/personal-info/personal-info.component.ts
var _c0 = ["personalFileInput"];
var _c1 = ["familyFileInput"];
var _c2 = ["emergencyFileInput"];
var _c3 = () => ({ "max-height": "72vh", "overflow-y": "auto" });
function PersonalInfoComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 18)(2, "table", 29)(3, "colgroup");
    \u0275\u0275element(4, "col", 30)(5, "col", 31)(6, "col", 30)(7, "col", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "tbody")(9, "tr")(10, "th", 32);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 32);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "tr")(21, "th", 32);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th", 32);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "td");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "tr")(32, "th", 32);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "td");
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "th", 32);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "td");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "tr")(43, "th", 32);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "td");
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "th", 32);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "td");
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const info_r1 = ctx.ngIf;
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 16, "essEmpCard.localName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r1.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 19, "essEmpCard.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r1.empId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 22, "essEmpCard.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r1.deptName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 25, "essEmpCard.headDept", "Tr\u01B0\u1EDFng ph\xF2ng"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r1.headDepartment);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(34, 28, "essEmpCard.postFamily", "Nh\xF3m nh\xE2n vi\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r1.postFamilyName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 31, "essEmpCard.postGrade", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r1.postGradeName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 34, "essEmpCard.positionName", "Ch\u1EE9c danh"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r1.positionNoName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 37, "essEmpCard.dateStarted", "Ng\xE0y v\xE0o l\xE0m"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r1.dateStarted);
  }
}
function PersonalInfoComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "table", 33)(2, "tbody")(3, "tr")(4, "th", 34);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 34);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 35);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 36);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th", 37);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "tr")(30, "th", 32);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "td");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "th", 32);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "td");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th", 32);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "td");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "th", 32);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "td");
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "th", 32);
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "td");
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "tr")(58, "th", 32);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "td");
    \u0275\u0275text(62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "th", 32);
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "td");
    \u0275\u0275text(67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "th", 32);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "td");
    \u0275\u0275text(72);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "th", 32);
    \u0275\u0275text(74, "EagleM ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "td", 38);
    \u0275\u0275text(76);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const info_r2 = ctx.ngIf;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 27, "epi.field.dob", "Ng\xE0y sinh"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.formatDisplayDate(info_r2.dob));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 30, "epi.field.gender", "Gi\u1EDBi t\xEDnh"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.sexName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 33, "epi.field.maritalStatus", "T\xECnh tr\u1EA1ng h\xF4n nh\xE2n"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.maritalStatusName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 36, "epi.field.ethnicity", "D\xE2n t\u1ED9c"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.nationName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 39, "epi.field.houseTp", "H\u1ED9 kh\u1EA9u"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.houseTp);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 42, "epi.field.homePhone", "\u0110T gia \u0111\xECnh"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.homePhone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(37, 45, "epi.field.companyPhone", "\u0110T c\xF4ng ty"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.companyPhone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 48, "epi.field.phone", "\u0110i\u1EC7n tho\u1EA1i"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.cellphone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(47, 51, "epi.field.residence", "Ch\u1ED7 \u1EDF"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.residentialDistinction);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(52, 54, "epi.field.existSingle", "EagleM"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.existSingle === "1" ? \u0275\u0275pipeBind2(55, 57, "common.yes", "Yes") : info_r2.existSingle === "0" ? \u0275\u0275pipeBind2(56, 60, "common.no", "No") : "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(60, 63, "epi.field.email", "Email"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(65, 66, "epi.field.companyEmail", "Email c\xF4ng ty"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.emailSecond);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(70, 69, "epi.field.nationality", "Qu\u1ED1c t\u1ECBch"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.nationalityName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(info_r2.singId);
  }
}
function PersonalInfoComponent_nz_alert_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 39);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r2.addressError() ?? "");
  }
}
function PersonalInfoComponent_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 40);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "epi.msg.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function PersonalInfoComponent_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 41);
    \u0275\u0275listener("click", function PersonalInfoComponent_tr_41_Template_tr_click_0_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openAddressModal(row_r5));
    });
    \u0275\u0275elementStart(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.addressTypeName || row_r5.addressType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDisplayDate(row_r5.effectiveStartDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.addressContent);
  }
}
function PersonalInfoComponent_nz_alert_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 39);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r2.familyError() ?? "");
  }
}
function PersonalInfoComponent_tr_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 42);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "epi.msg.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function PersonalInfoComponent_tr_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 41);
    \u0275\u0275listener("click", function PersonalInfoComponent_tr_75_Template_tr_click_0_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openFamilyModal(row_r7));
    });
    \u0275\u0275elementStart(1, "td");
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
    const row_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.famTypeName || row_r7.famTypeCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.famName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.genderName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDisplayDate(row_r7.famBorndate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7.famPhone);
  }
}
function PersonalInfoComponent_nz_alert_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 39);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r2.emergencyError() ?? "");
  }
}
function PersonalInfoComponent_tr_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 43);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "epi.msg.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function PersonalInfoComponent_tr_112_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 41);
    \u0275\u0275listener("click", function PersonalInfoComponent_tr_112_Template_tr_click_0_listener() {
      const row_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openEmergencyModal(row_r9));
    });
    \u0275\u0275elementStart(1, "td");
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
    \u0275\u0275elementStart(11, "td", 44);
    \u0275\u0275element(12, "input", 45);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.emerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.emerTypeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.emerPhone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.emerEmail);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.emerAddress);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", row_r9.isEmergencyAddress === "1" || row_r9.isEmergencyAddress === "Y");
  }
}
function PersonalInfoComponent_ng_container_117_nz_option_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 63);
  }
  if (rf & 2) {
    const c_r11 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r11.codeNo)("nzLabel", c_r11.codeName);
  }
}
function PersonalInfoComponent_ng_container_117_nz_option_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 63);
  }
  if (rf & 2) {
    const c_r12 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r12.codeNo)("nzLabel", c_r12.codeName);
  }
}
function PersonalInfoComponent_ng_container_117_nz_option_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 63);
  }
  if (rf & 2) {
    const c_r13 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r13.codeNo)("nzLabel", c_r13.codeName);
  }
}
function PersonalInfoComponent_ng_container_117_nz_option_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 63);
  }
  if (rf & 2) {
    const c_r14 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r14.codeNo)("nzLabel", c_r14.codeName);
  }
}
function PersonalInfoComponent_ng_container_117_nz_option_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 63);
  }
  if (rf & 2) {
    const c_r15 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r15.codeNo)("nzLabel", c_r15.codeName);
  }
}
function PersonalInfoComponent_ng_container_117_nz_option_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 63);
  }
  if (rf & 2) {
    const c_r16 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r16.codeNo)("nzLabel", c_r16.codeName);
  }
}
function PersonalInfoComponent_ng_container_117_nz_option_138_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 63);
  }
  if (rf & 2) {
    const c_r17 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r17.codeNo)("nzLabel", c_r17.codeName);
  }
}
function PersonalInfoComponent_ng_container_117_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 46)(2, "div", 47)(3, "label", 48);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 49);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 47)(8, "label", 48);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 49);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 50)(13, "label", 51);
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_117_Template_label_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.personalForm.armyOrNot, $event) || (ctx_r2.personalForm.armyOrNot = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 50)(17, "label", 51);
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_117_Template_label_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.personalForm.obstacleOrNot, $event) || (ctx_r2.personalForm.obstacleOrNot = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 47)(21, "label", 48);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_117_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.personalForm.idcardNo, $event) || (ctx_r2.personalForm.idcardNo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 47)(26, "label", 48);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "nz-date-picker", 53);
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_117_Template_nz_date_picker_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.personalForm.idcardStartDate, $event) || (ctx_r2.personalForm.idcardStartDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 47)(31, "label", 48);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_117_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.personalForm.issuingAuthority, $event) || (ctx_r2.personalForm.issuingAuthority = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 47)(36, "label", 48);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "nz-select", 54);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_117_Template_nz_select_ngModelChange_39_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.personalForm.cvUpdateStatus, $event) || (ctx_r2.personalForm.cvUpdateStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(41, PersonalInfoComponent_ng_container_117_nz_option_41_Template, 1, 2, "nz-option", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 47)(43, "label", 48);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "nz-date-picker", 53);
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_117_Template_nz_date_picker_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.personalForm.dob, $event) || (ctx_r2.personalForm.dob = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function PersonalInfoComponent_ng_container_117_Template_nz_date_picker_ngModelChange_46_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.calcAge());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 47)(48, "label", 48);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(51, "input", 49);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 47)(53, "label", 48);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_117_Template_input_ngModelChange_56_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.personalForm.regPlace, $event) || (ctx_r2.personalForm.regPlace = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 47)(58, "label", 48);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "nz-select", 54);
    \u0275\u0275pipe(62, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_117_Template_nz_select_ngModelChange_61_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.personalForm.sexCode, $event) || (ctx_r2.personalForm.sexCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(63, PersonalInfoComponent_ng_container_117_nz_option_63_Template, 1, 2, "nz-option", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 47)(65, "label", 48);
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "nz-select", 54);
    \u0275\u0275pipe(69, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_117_Template_nz_select_ngModelChange_68_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.personalForm.finalDegreeCode, $event) || (ctx_r2.personalForm.finalDegreeCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(70, PersonalInfoComponent_ng_container_117_nz_option_70_Template, 1, 2, "nz-option", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 47)(72, "label", 48);
    \u0275\u0275text(73);
    \u0275\u0275pipe(74, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "nz-select", 54);
    \u0275\u0275pipe(76, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_117_Template_nz_select_ngModelChange_75_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.personalForm.nationalityCode, $event) || (ctx_r2.personalForm.nationalityCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(77, PersonalInfoComponent_ng_container_117_nz_option_77_Template, 1, 2, "nz-option", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "div", 47)(79, "label", 48);
    \u0275\u0275text(80);
    \u0275\u0275pipe(81, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "nz-select", 54);
    \u0275\u0275pipe(83, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_117_Template_nz_select_ngModelChange_82_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.personalForm.nationCode, $event) || (ctx_r2.personalForm.nationCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(84, PersonalInfoComponent_ng_container_117_nz_option_84_Template, 1, 2, "nz-option", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "div", 47)(86, "label", 48);
    \u0275\u0275text(87);
    \u0275\u0275pipe(88, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_117_Template_input_ngModelChange_89_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.personalForm.religion, $event) || (ctx_r2.personalForm.religion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "div", 47)(91, "label", 48);
    \u0275\u0275text(92);
    \u0275\u0275pipe(93, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_117_Template_input_ngModelChange_94_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.personalForm.cellphone, $event) || (ctx_r2.personalForm.cellphone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div", 47)(96, "label", 48);
    \u0275\u0275text(97);
    \u0275\u0275pipe(98, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "nz-select", 54);
    \u0275\u0275pipe(100, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_117_Template_nz_select_ngModelChange_99_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.personalForm.maritalStatusCode, $event) || (ctx_r2.personalForm.maritalStatusCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(101, PersonalInfoComponent_ng_container_117_nz_option_101_Template, 1, 2, "nz-option", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "div", 47)(103, "label", 48);
    \u0275\u0275text(104);
    \u0275\u0275pipe(105, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "nz-date-picker", 53);
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_117_Template_nz_date_picker_ngModelChange_106_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.personalForm.weddingDate, $event) || (ctx_r2.personalForm.weddingDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "div", 47)(108, "label", 48);
    \u0275\u0275text(109);
    \u0275\u0275pipe(110, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_117_Template_input_ngModelChange_111_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.personalForm.politicalStatus, $event) || (ctx_r2.personalForm.politicalStatus = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "div", 47)(113, "label", 48);
    \u0275\u0275text(114);
    \u0275\u0275pipe(115, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "nz-select", 54);
    \u0275\u0275pipe(117, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_117_Template_nz_select_ngModelChange_116_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.personalForm.existSingle, $event) || (ctx_r2.personalForm.existSingle = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(118, "nz-option", 56);
    \u0275\u0275pipe(119, "translate");
    \u0275\u0275element(120, "nz-option", 57);
    \u0275\u0275pipe(121, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "div", 47)(123, "label", 48);
    \u0275\u0275text(124);
    \u0275\u0275pipe(125, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_117_Template_input_ngModelChange_126_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.personalForm.homePhone, $event) || (ctx_r2.personalForm.homePhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "div", 47)(128, "label", 48);
    \u0275\u0275text(129);
    \u0275\u0275pipe(130, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_117_Template_input_ngModelChange_131_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.personalForm.companyPhone, $event) || (ctx_r2.personalForm.companyPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "div", 47)(133, "label", 48);
    \u0275\u0275text(134);
    \u0275\u0275pipe(135, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "nz-select", 54);
    \u0275\u0275pipe(137, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_117_Template_nz_select_ngModelChange_136_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.personalForm.residentialDistinction, $event) || (ctx_r2.personalForm.residentialDistinction = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(138, PersonalInfoComponent_ng_container_117_nz_option_138_Template, 1, 2, "nz-option", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "div", 47)(140, "label", 48);
    \u0275\u0275text(141, "EagleM ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_117_Template_input_ngModelChange_142_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.personalForm.singId, $event) || (ctx_r2.personalForm.singId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(143, "div", 47)(144, "label", 48);
    \u0275\u0275text(145);
    \u0275\u0275pipe(146, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(147, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_117_Template_input_ngModelChange_147_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.personalForm.houseTp, $event) || (ctx_r2.personalForm.houseTp = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(148, "div", 47)(149, "label", 48);
    \u0275\u0275text(150);
    \u0275\u0275pipe(151, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(152, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_117_Template_input_ngModelChange_152_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.personalForm.email, $event) || (ctx_r2.personalForm.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(153, "div", 47)(154, "label", 48);
    \u0275\u0275text(155);
    \u0275\u0275pipe(156, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(157, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_117_Template_input_ngModelChange_157_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.personalForm.emailSecond, $event) || (ctx_r2.personalForm.emailSecond = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(158, "div", 59);
    \u0275\u0275element(159, "nz-alert", 60);
    \u0275\u0275pipe(160, "translate");
    \u0275\u0275elementStart(161, "label", 48);
    \u0275\u0275text(162);
    \u0275\u0275pipe(163, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(164, "input", 61, 3);
    \u0275\u0275listener("change", function PersonalInfoComponent_ng_container_117_Template_input_change_164_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPersonalFilesChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(166, "div", 62);
    \u0275\u0275text(167);
    \u0275\u0275pipe(168, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 75, "epi.field.fullName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r2.personalForm.localName);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 78, "epi.field.engName", "T\xEAn ti\u1EBFng Anh"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r2.personalForm.engName);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.personalForm.armyOrNot);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 81, "epi.field.militaryService", "Tham gia qu\xE2n \u0111\u1ED9i"));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.personalForm.obstacleOrNot);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 84, "epi.field.disability", "Khuy\u1EBFt t\u1EADt"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 87, "epi.field.idcardNo", "CMND"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.personalForm.idcardNo);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 90, "epi.field.idcardDate", "Ng\xE0y c\u1EA5p"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.personalForm.idcardStartDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 93, "epi.field.issuingAuthority", "N\u01A1i c\u1EA5p"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.personalForm.issuingAuthority);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(38, 96, "epi.field.cvUpdateStatus", "CV update status"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.personalForm.cvUpdateStatus);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(40, 99, "epi.select.choose", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.cvUpdateStatusOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 102, "epi.field.dob", "Ng\xE0y sinh"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.personalForm.dob);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(50, 105, "epi.field.age", "\u0110\u1ED9 tu\u1ED5i"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r2.personalForm.age);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(55, 108, "epi.field.birthPlace", "N\u01A1i sinh"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.personalForm.regPlace);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(60, 111, "epi.field.gender", "Gi\u1EDBi t\xEDnh"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.personalForm.sexCode);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(62, 114, "epi.select.choose", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.sexOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(67, 117, "epi.field.education", "Tr\xECnh \u0111\u1ED9 h\u1ECDc v\u1EA5n"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.personalForm.finalDegreeCode);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(69, 120, "epi.select.choose", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.finalDegreeOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(74, 123, "epi.field.nationality", "Qu\u1ED1c t\u1ECBch"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.personalForm.nationalityCode);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(76, 126, "epi.select.choose", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.nationalityOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(81, 129, "epi.field.ethnicity", "D\xE2n t\u1ED9c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.personalForm.nationCode);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(83, 132, "epi.select.choose", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.nationOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(88, 135, "epi.field.religion", "T\xF4n gi\xE1o"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.personalForm.religion);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(93, 138, "epi.field.phone", "\u0110i\u1EC7n tho\u1EA1i"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.personalForm.cellphone);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(98, 141, "epi.field.maritalStatus", "T\xECnh tr\u1EA1ng h\xF4n nh\xE2n"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.personalForm.maritalStatusCode);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(100, 144, "epi.select.choose", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.maritalStatusOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(105, 147, "epi.field.weddingDate", "Ng\xE0y k\u1EBFt h\xF4n"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.personalForm.weddingDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(110, 150, "epi.field.politicalStatus", "T\xECnh tr\u1EA1ng ch\xEDnh tr\u1ECB"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.personalForm.politicalStatus);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(115, 153, "epi.field.existSingle", "EagleM"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.personalForm.existSingle);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(117, 156, "epi.select.choose", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(119, 159, "common.yes", "Yes"));
    \u0275\u0275advance(2);
    \u0275\u0275property("nzLabel", \u0275\u0275pipeBind2(121, 162, "common.no", "No"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(125, 165, "epi.field.homePhone", "\u0110T gia \u0111\xECnh"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.personalForm.homePhone);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(130, 168, "epi.field.companyPhone", "\u0110T c\xF4ng ty"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.personalForm.companyPhone);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(135, 171, "epi.field.residence", "Ch\u1ED7 \u1EDF"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.personalForm.residentialDistinction);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(137, 174, "epi.select.choose", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.residentialDistinctionOptions());
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.personalForm.singId);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(146, 177, "epi.field.houseTp", "H\u1ED9 kh\u1EA9u"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.personalForm.houseTp);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(151, 180, "epi.field.email", "Email"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.personalForm.email);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(156, 183, "epi.field.companyEmail", "Email c\xF4ng ty"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.personalForm.emailSecond);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("nzMessage", \u0275\u0275pipeBind2(160, 186, "epi.msg.applyNote", "Y\xEAu c\u1EA7u s\u1EBD \u0111\u01B0\u1EE3c g\u1EEDi \u0111\u1EBFn ng\u01B0\u1EDDi qu\u1EA3n l\xFD \u0111\u1EC3 x\xE9t duy\u1EC7t, kh\xF4ng c\u1EADp nh\u1EADt tr\u1EF1c ti\u1EBFp h\u1ED3 s\u01A1."));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(163, 189, "epi.field.attachFiles", "File \u0111\xEDnh k\xE8m"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(168, 192, "epi.msg.uploadHint", "H\u1ED7 tr\u1EE3: PDF, Word, Excel, h\xECnh \u1EA3nh. C\xF3 th\u1EC3 ch\u1ECDn nhi\u1EC1u file."));
  }
}
function PersonalInfoComponent_ng_container_121_nz_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 63);
  }
  if (rf & 2) {
    const c_r19 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r19.codeNo)("nzLabel", c_r19.codeName);
  }
}
function PersonalInfoComponent_ng_container_121_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 64)(2, "label", 48);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span", 65);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "nz-select", 54);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_121_Template_nz_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.addressForm.addressType, $event) || (ctx_r2.addressForm.addressType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(9, PersonalInfoComponent_ng_container_121_nz_option_9_Template, 1, 2, "nz-option", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 64)(11, "label", 48);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "nz-date-picker", 53);
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_121_Template_nz_date_picker_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.addressForm.effectiveStartDate, $event) || (ctx_r2.addressForm.effectiveStartDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 64)(16, "label", 48);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "textarea", 66);
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_121_Template_textarea_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.addressForm.addressContent, $event) || (ctx_r2.addressForm.addressContent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(4, 8, "epi.field.addressType", "Lo\u1EA1i \u0111\u1ECBa ch\u1EC9"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.addressForm.addressType);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(8, 11, "epi.select.chooseAddressType", "-- Ch\u1ECDn lo\u1EA1i \u0111\u1ECBa ch\u1EC9 --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.addressTypeOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 14, "epi.field.effectiveDate", "Ng\xE0y hi\u1EC7u l\u1EF1c"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.addressForm.effectiveStartDate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 17, "epi.field.address", "\u0110\u1ECBa ch\u1EC9"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.addressForm.addressContent);
    \u0275\u0275control();
  }
}
function PersonalInfoComponent_ng_container_125_nz_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 63);
  }
  if (rf & 2) {
    const c_r21 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r21.codeNo)("nzLabel", c_r21.codeName);
  }
}
function PersonalInfoComponent_ng_container_125_nz_option_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 63);
  }
  if (rf & 2) {
    const c_r22 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r22.codeNo)("nzLabel", c_r22.codeName);
  }
}
function PersonalInfoComponent_ng_container_125_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 46)(2, "div", 67)(3, "label", 48);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span", 65);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "nz-select", 54);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_125_Template_nz_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.familyForm.famTypeCode, $event) || (ctx_r2.familyForm.famTypeCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(10, PersonalInfoComponent_ng_container_125_nz_option_10_Template, 1, 2, "nz-option", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 67)(12, "label", 48);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementStart(15, "span", 65);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_125_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.familyForm.famName, $event) || (ctx_r2.familyForm.famName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 68)(19, "label", 48);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "nz-select", 54);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_125_Template_nz_select_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.familyForm.gender, $event) || (ctx_r2.familyForm.gender = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(24, PersonalInfoComponent_ng_container_125_nz_option_24_Template, 1, 2, "nz-option", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 68)(26, "label", 48);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "nz-date-picker", 53);
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_125_Template_nz_date_picker_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.familyForm.famBorndate, $event) || (ctx_r2.familyForm.famBorndate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 68)(31, "label", 48);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_125_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.familyForm.famPhone, $event) || (ctx_r2.familyForm.famPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 69);
    \u0275\u0275element(36, "nz-alert", 60);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementStart(38, "label", 48);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 61, 4);
    \u0275\u0275listener("change", function PersonalInfoComponent_ng_container_125_Template_input_change_41_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onFamilyFilesChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 62);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 17, "epi.field.relationship", "Quan h\u1EC7"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.familyForm.famTypeCode);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(9, 20, "epi.select.chooseRelationship", "-- Ch\u1ECDn quan h\u1EC7 --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.famTypeOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(14, 23, "epi.field.fullName", "H\u1ECD t\xEAn"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.familyForm.famName);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 26, "epi.field.gender", "Gi\u1EDBi t\xEDnh"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.familyForm.gender);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(23, 29, "epi.select.choose", "-- Ch\u1ECDn --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.sexOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 32, "epi.field.dob", "Ng\xE0y sinh"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.familyForm.famBorndate);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 35, "epi.field.phone", "\u0110i\u1EC7n tho\u1EA1i"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.familyForm.famPhone);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("nzMessage", \u0275\u0275pipeBind2(37, 38, "epi.msg.applyNote", "Y\xEAu c\u1EA7u s\u1EBD \u0111\u01B0\u1EE3c g\u1EEDi \u0111\u1EBFn ng\u01B0\u1EDDi qu\u1EA3n l\xFD \u0111\u1EC3 x\xE9t duy\u1EC7t, kh\xF4ng c\u1EADp nh\u1EADt tr\u1EF1c ti\u1EBFp h\u1ED3 s\u01A1."));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 41, "epi.field.attachFiles", "File \u0111\xEDnh k\xE8m"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 44, "epi.msg.uploadHint", "H\u1ED7 tr\u1EE3: PDF, Word, Excel, h\xECnh \u1EA3nh. C\xF3 th\u1EC3 ch\u1ECDn nhi\u1EC1u file."));
  }
}
function PersonalInfoComponent_ng_container_129_nz_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 63);
  }
  if (rf & 2) {
    const c_r24 = ctx.$implicit;
    \u0275\u0275property("nzValue", c_r24.codeNo)("nzLabel", c_r24.codeName);
  }
}
function PersonalInfoComponent_ng_container_129_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 46)(2, "div", 67)(3, "label", 48);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span", 65);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_129_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.emergencyForm.emerName, $event) || (ctx_r2.emergencyForm.emerName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 67)(10, "label", 48);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "nz-select", 54);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_129_Template_nz_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.emergencyForm.emerTypeCode, $event) || (ctx_r2.emergencyForm.emerTypeCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(15, PersonalInfoComponent_ng_container_129_nz_option_15_Template, 1, 2, "nz-option", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 67)(17, "label", 48);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_129_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.emergencyForm.emerPhone, $event) || (ctx_r2.emergencyForm.emerPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 67)(22, "label", 48);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_129_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.emergencyForm.emerEmail, $event) || (ctx_r2.emergencyForm.emerEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 7)(27, "label", 48);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 52);
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_129_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.emergencyForm.emerAddress, $event) || (ctx_r2.emergencyForm.emerAddress = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 7)(32, "label", 70);
    \u0275\u0275twoWayListener("ngModelChange", function PersonalInfoComponent_ng_container_129_Template_label_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.emergencyForm.isEmergencyAddress, $event) || (ctx_r2.emergencyForm.isEmergencyAddress = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 71);
    \u0275\u0275element(36, "nz-alert", 60);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementStart(38, "label", 48);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 61, 5);
    \u0275\u0275listener("change", function PersonalInfoComponent_ng_container_129_Template_input_change_41_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onEmergencyFilesChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 62);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 17, "epi.field.fullName", "H\u1ECD t\xEAn"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.emergencyForm.emerName);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 20, "epi.field.relationship", "Quan h\u1EC7"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.emergencyForm.emerTypeCode);
    \u0275\u0275property("nzPlaceHolder", \u0275\u0275pipeBind2(14, 23, "epi.select.chooseRelationship", "-- Ch\u1ECDn quan h\u1EC7 --"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.emerTypeOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 26, "epi.field.phone", "\u0110i\u1EC7n tho\u1EA1i"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.emergencyForm.emerPhone);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 29, "epi.field.email", "Email"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.emergencyForm.emerEmail);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 32, "epi.field.address", "\u0110\u1ECBa ch\u1EC9"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.emergencyForm.emerAddress);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.emergencyForm.isEmergencyAddress);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(34, 35, "epi.field.isPrimaryContact", "L\xE0 li\xEAn h\u1EC7 ch\xEDnh"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("nzMessage", \u0275\u0275pipeBind2(37, 38, "epi.msg.applyNote", "Y\xEAu c\u1EA7u s\u1EBD \u0111\u01B0\u1EE3c g\u1EEDi \u0111\u1EBFn ng\u01B0\u1EDDi qu\u1EA3n l\xFD \u0111\u1EC3 x\xE9t duy\u1EC7t, kh\xF4ng c\u1EADp nh\u1EADt tr\u1EF1c ti\u1EBFp h\u1ED3 s\u01A1."));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(40, 41, "epi.field.attachFiles", "File \u0111\xEDnh k\xE8m"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(45, 44, "epi.msg.uploadHint", "H\u1ED7 tr\u1EE3: PDF, Word, Excel, h\xECnh \u1EA3nh. C\xF3 th\u1EC3 ch\u1ECDn nhi\u1EC1u file."));
  }
}
var I18N_KEYS = [
  "essEmpCard.localName",
  "essEmpCard.empId",
  "essEmpCard.deptName",
  "essEmpCard.headDept",
  "essEmpCard.postFamily",
  "essEmpCard.postGrade",
  "essEmpCard.positionName",
  "essEmpCard.dateStarted",
  "epi.section.personal",
  "epi.section.address",
  "epi.section.family",
  "epi.section.emergency",
  "epi.field.fullName",
  "epi.field.engName",
  "epi.field.empId",
  "epi.field.department",
  "epi.field.position",
  "epi.field.dob",
  "epi.field.age",
  "epi.field.birthPlace",
  "epi.field.gender",
  "epi.field.maritalStatus",
  "epi.field.weddingDate",
  "epi.field.ethnicity",
  "epi.field.houseTp",
  "epi.field.homePhone",
  "epi.field.companyPhone",
  "epi.field.phone",
  "epi.field.residence",
  "epi.field.existSingle",
  "epi.field.email",
  "epi.field.companyEmail",
  "epi.field.nationality",
  "epi.field.idcardNo",
  "epi.field.idcardDate",
  "epi.field.issuingAuthority",
  "epi.field.cvUpdateStatus",
  "epi.field.education",
  "epi.field.religion",
  "epi.field.politicalStatus",
  "epi.field.militaryService",
  "epi.field.disability",
  "epi.field.addressType",
  "epi.field.effectiveDate",
  "epi.field.address",
  "epi.field.relationship",
  "epi.field.familyPhone",
  "epi.field.primaryContact",
  "epi.field.isPrimaryContact",
  "epi.field.attachFiles",
  "epi.btn.addNew",
  "epi.btn.edit",
  "epi.btn.submitRequest",
  "epi.modal.editPersonal",
  "epi.modal.address",
  "epi.modal.addAddress",
  "epi.modal.editAddress",
  "epi.modal.addFamily",
  "epi.modal.editFamily",
  "epi.modal.addEmergency",
  "epi.modal.editEmergency",
  "epi.msg.noData",
  "epi.msg.loadError.address",
  "epi.msg.loadError.family",
  "epi.msg.loadError.emergency",
  "epi.msg.saveSuccess",
  "epi.msg.addSuccess",
  "epi.msg.saveError.personal",
  "epi.msg.saveError.address",
  "epi.msg.saveError.family",
  "epi.msg.saveError.emergency",
  "epi.msg.validate.addressType",
  "epi.msg.validate.familyRequired",
  "epi.msg.validate.emergencyName",
  "epi.select.choose",
  "epi.select.chooseAddressType",
  "epi.select.chooseRelationship",
  "epi.msg.uploadHint",
  "epi.msg.applyNote",
  "epi.msg.applySuccess",
  "common.yes",
  "common.no",
  "common.close",
  "common.loadFail"
];
var EMPTY_PERSONAL_FORM = {
  localName: "",
  engName: "",
  armyOrNot: false,
  obstacleOrNot: false,
  idcardNo: "",
  idcardStartDate: null,
  issuingAuthority: "",
  cvUpdateStatus: null,
  dob: null,
  age: "",
  regPlace: "",
  sexCode: null,
  finalDegreeCode: null,
  nationalityCode: null,
  nationCode: null,
  religion: "",
  maritalStatusCode: null,
  weddingDate: null,
  politicalStatus: "",
  existSingle: null,
  homePhone: "",
  companyPhone: "",
  residentialDistinction: null,
  singId: "",
  houseTp: "",
  email: "",
  emailSecond: "",
  cellphone: ""
};
var EMPTY_ADDRESS_FORM = { updateAddressNo: null, addressType: null, effectiveStartDate: null, addressContent: "" };
var EMPTY_FAMILY_FORM = { familyNo: null, famTypeCode: null, famName: "", gender: null, famBorndate: null, famPhone: "" };
var EMPTY_EMERGENCY_FORM = {
  emergencyNo: null,
  emerName: "",
  emerTypeCode: null,
  emerPhone: "",
  emerEmail: "",
  emerAddress: "",
  isEmergencyAddress: false
};
var PersonalInfoComponent = class _PersonalInfoComponent {
  constructor(api, i18n, message) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
  }
  api;
  i18n;
  message;
  personalFileInputRef;
  familyFileInputRef;
  emergencyFileInputRef;
  basicInfo = signal(
    null,
    ...ngDevMode ? [{ debugName: "basicInfo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  addressList = signal(
    [],
    ...ngDevMode ? [{ debugName: "addressList" }] : (
      /* istanbul ignore next */
      []
    )
  );
  addressLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "addressLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  addressError = signal(
    null,
    ...ngDevMode ? [{ debugName: "addressError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  familyList = signal(
    [],
    ...ngDevMode ? [{ debugName: "familyList" }] : (
      /* istanbul ignore next */
      []
    )
  );
  familyLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "familyLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  familyError = signal(
    null,
    ...ngDevMode ? [{ debugName: "familyError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  emergencyList = signal(
    [],
    ...ngDevMode ? [{ debugName: "emergencyList" }] : (
      /* istanbul ignore next */
      []
    )
  );
  emergencyLoading = signal(
    false,
    ...ngDevMode ? [{ debugName: "emergencyLoading" }] : (
      /* istanbul ignore next */
      []
    )
  );
  emergencyError = signal(
    null,
    ...ngDevMode ? [{ debugName: "emergencyError" }] : (
      /* istanbul ignore next */
      []
    )
  );
  maritalStatusOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "maritalStatusOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  nationOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "nationOptions" }] : (
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
  sexOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "sexOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  finalDegreeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "finalDegreeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  cvUpdateStatusOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "cvUpdateStatusOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  residentialDistinctionOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "residentialDistinctionOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  addressTypeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "addressTypeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  famTypeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "famTypeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  emerTypeOptions = signal(
    [],
    ...ngDevMode ? [{ debugName: "emerTypeOptions" }] : (
      /* istanbul ignore next */
      []
    )
  );
  personalModalVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "personalModalVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  personalSaving = signal(
    false,
    ...ngDevMode ? [{ debugName: "personalSaving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  personalForm = __spreadValues({}, EMPTY_PERSONAL_FORM);
  personalFiles = [];
  addressModalVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "addressModalVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  addressSaving = signal(
    false,
    ...ngDevMode ? [{ debugName: "addressSaving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  addressIsNew = signal(
    true,
    ...ngDevMode ? [{ debugName: "addressIsNew" }] : (
      /* istanbul ignore next */
      []
    )
  );
  addressModalTitle = computed(
    () => this.addressIsNew() ? this.i18n.t("epi.modal.addAddress", "Th\xEAm m\u1EDBi \u0111\u1ECBa ch\u1EC9") : this.i18n.t("epi.modal.editAddress", "C\u1EADp nh\u1EADt \u0111\u1ECBa ch\u1EC9"),
    ...ngDevMode ? [{ debugName: "addressModalTitle" }] : (
      /* istanbul ignore next */
      []
    )
  );
  addressForm = __spreadValues({}, EMPTY_ADDRESS_FORM);
  familyModalVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "familyModalVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  familySaving = signal(
    false,
    ...ngDevMode ? [{ debugName: "familySaving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  familyIsNew = signal(
    true,
    ...ngDevMode ? [{ debugName: "familyIsNew" }] : (
      /* istanbul ignore next */
      []
    )
  );
  familyModalTitle = computed(
    () => this.familyIsNew() ? this.i18n.t("epi.modal.addFamily", "Th\xEAm m\u1EDBi th\xE0nh vi\xEAn gia \u0111\xECnh") : this.i18n.t("epi.modal.editFamily", "C\u1EADp nh\u1EADt th\xE0nh vi\xEAn gia \u0111\xECnh"),
    ...ngDevMode ? [{ debugName: "familyModalTitle" }] : (
      /* istanbul ignore next */
      []
    )
  );
  familyForm = __spreadValues({}, EMPTY_FAMILY_FORM);
  familyFiles = [];
  emergencyModalVisible = signal(
    false,
    ...ngDevMode ? [{ debugName: "emergencyModalVisible" }] : (
      /* istanbul ignore next */
      []
    )
  );
  emergencySaving = signal(
    false,
    ...ngDevMode ? [{ debugName: "emergencySaving" }] : (
      /* istanbul ignore next */
      []
    )
  );
  emergencyIsNew = signal(
    true,
    ...ngDevMode ? [{ debugName: "emergencyIsNew" }] : (
      /* istanbul ignore next */
      []
    )
  );
  emergencyModalTitle = computed(
    () => this.emergencyIsNew() ? this.i18n.t("epi.modal.addEmergency", "Th\xEAm m\u1EDBi li\xEAn h\u1EC7 kh\u1EA9n c\u1EA5p") : this.i18n.t("epi.modal.editEmergency", "C\u1EADp nh\u1EADt li\xEAn h\u1EC7 kh\u1EA9n c\u1EA5p"),
    ...ngDevMode ? [{ debugName: "emergencyModalTitle" }] : (
      /* istanbul ignore next */
      []
    )
  );
  emergencyForm = __spreadValues({}, EMPTY_EMERGENCY_FORM);
  emergencyFiles = [];
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
    this.loadCodeOptions();
    this.loadBasicInfo();
    this.loadAddress();
    this.loadFamily();
    this.loadEmergency();
  }
  /** Định dạng ngày hiển thị theo DD/MM/YYYY (xem CLAUDE.md) - dữ liệu từ API là chuỗi yyyy-MM-dd. */
  formatDisplayDate(dateStr) {
    const d = this.toDate(dateStr);
    return d ? formatDate(d, "dd/MM/yyyy", "vi") : "";
  }
  // ==================== Load dữ liệu ====================
  loadBasicInfo() {
    this.api.getMyInfo().subscribe({
      next: (data) => this.basicInfo.set(data)
    });
  }
  loadAddress() {
    this.addressLoading.set(true);
    this.addressError.set(null);
    this.api.getMyAddresses().subscribe({
      next: (list) => {
        this.addressList.set(list ?? []);
        this.addressLoading.set(false);
      },
      error: () => {
        this.addressError.set(this.i18n.t("epi.msg.loadError.address", "L\u1ED7i t\u1EA3i d\u1EEF li\u1EC7u \u0111\u1ECBa ch\u1EC9"));
        this.addressList.set([]);
        this.addressLoading.set(false);
      }
    });
  }
  loadFamily() {
    this.familyLoading.set(true);
    this.familyError.set(null);
    this.api.getMyFamilies().subscribe({
      next: (list) => {
        this.familyList.set(list ?? []);
        this.familyLoading.set(false);
      },
      error: () => {
        this.familyError.set(this.i18n.t("epi.msg.loadError.family", "L\u1ED7i t\u1EA3i d\u1EEF li\u1EC7u gia \u0111\xECnh"));
        this.familyList.set([]);
        this.familyLoading.set(false);
      }
    });
  }
  loadEmergency() {
    this.emergencyLoading.set(true);
    this.emergencyError.set(null);
    this.api.getMyEmergencies().subscribe({
      next: (list) => {
        this.emergencyList.set(list ?? []);
        this.emergencyLoading.set(false);
      },
      error: () => {
        this.emergencyError.set(this.i18n.t("epi.msg.loadError.emergency", "L\u1ED7i t\u1EA3i d\u1EEF li\u1EC7u kh\u1EA9n c\u1EA5p"));
        this.emergencyList.set([]);
        this.emergencyLoading.set(false);
      }
    });
  }
  loadCodeOptions() {
    this.api.getCodeList("1709").subscribe((list) => this.maritalStatusOptions.set(list ?? []));
    this.api.getCodeList("210942").subscribe((list) => this.nationOptions.set(list ?? []));
    this.api.getCodeList("870").subscribe((list) => this.nationalityOptions.set(list ?? []));
    this.api.getCodeList("1324").subscribe((list) => this.sexOptions.set(list ?? []));
    this.api.getCodeList("13769").subscribe((list) => this.finalDegreeOptions.set(list ?? []));
    this.api.getCodeList("90000302").subscribe((list) => this.cvUpdateStatusOptions.set(list ?? []));
    this.api.getCodeList("14013865").subscribe((list) => this.residentialDistinctionOptions.set(list ?? []));
    this.api.getCodeList("14013840").subscribe((list) => this.addressTypeOptions.set(list ?? []));
    this.api.getCodeList("950").subscribe((list) => this.famTypeOptions.set(list ?? []));
    this.api.getCodeList("1693").subscribe((list) => this.emerTypeOptions.set(list ?? []));
  }
  // ==================== Modal: Cá nhân ====================
  openPersonalModal() {
    const d = this.basicInfo();
    if (!d)
      return;
    this.personalForm = {
      localName: d.localName || "",
      engName: d.englishName || "",
      armyOrNot: this.toBool(d.armyOrNot),
      obstacleOrNot: this.toBool(d.obstacleOrNot),
      idcardNo: d.idcardNo || "",
      idcardStartDate: this.toDate(d.idcardStartDate),
      issuingAuthority: d.issuingAuthority || "",
      cvUpdateStatus: d.cvUpdateStatus || null,
      dob: this.toDate(d.dob),
      age: "",
      regPlace: d.regPlace || "",
      sexCode: d.sexCode || null,
      finalDegreeCode: d.finalDegreeCode || null,
      nationalityCode: d.nationalityCode || null,
      nationCode: d.nationCode || null,
      religion: d.religion || "",
      maritalStatusCode: d.maritalStatusCode || null,
      weddingDate: this.toDate(d.weddingDate),
      politicalStatus: d.politicalStatus || "",
      existSingle: d.existSingle || null,
      homePhone: d.homePhone || "",
      companyPhone: d.companyPhone || "",
      residentialDistinction: d.residentialDistinction || null,
      singId: d.singId || "",
      houseTp: d.houseTp || "",
      email: d.email || "",
      emailSecond: d.emailSecond || "",
      cellphone: d.cellphone || ""
    };
    this.personalFiles = [];
    if (this.personalFileInputRef)
      this.personalFileInputRef.nativeElement.value = "";
    this.calcAge();
    this.personalModalVisible.set(true);
  }
  closePersonalModal() {
    this.personalModalVisible.set(false);
  }
  calcAge() {
    if (!this.personalForm.dob) {
      this.personalForm.age = "";
      return;
    }
    const dob = this.personalForm.dob;
    const now = /* @__PURE__ */ new Date();
    let years = now.getFullYear() - dob.getFullYear();
    const beforeBirthday = now.getMonth() < dob.getMonth() || now.getMonth() === dob.getMonth() && now.getDate() < dob.getDate();
    if (beforeBirthday)
      years--;
    this.personalForm.age = String(Math.max(years, 0));
  }
  onPersonalFilesChange(event) {
    const input = event.target;
    this.personalFiles = input.files ? Array.from(input.files) : [];
  }
  savePersonal() {
    const f = this.personalForm;
    const payload = {
      dob: this.formatYmd(f.dob),
      sexCode: f.sexCode ?? void 0,
      maritalStatusCode: f.maritalStatusCode ?? void 0,
      weddingDate: this.formatYmd(f.weddingDate),
      nationCode: f.nationCode ?? void 0,
      nationalityCode: f.nationalityCode ?? void 0,
      finalDegreeCode: f.finalDegreeCode ?? void 0,
      religion: f.religion,
      politicalOutlook: f.politicalStatus,
      armyOrNot: f.armyOrNot ? "1" : "0",
      obstacleOrNot: f.obstacleOrNot ? "1" : "0",
      idcardNo: f.idcardNo,
      idcardStartDate: this.formatYmd(f.idcardStartDate),
      issuingAuthority: f.issuingAuthority,
      cvUpdateStatus: f.cvUpdateStatus ?? void 0,
      regPlace: f.regPlace,
      houseTp: f.houseTp,
      homePhone: f.homePhone,
      companyPhone: f.companyPhone,
      cellphone: f.cellphone,
      email: f.email,
      emailSecond: f.emailSecond,
      residentialDistinction: f.residentialDistinction ?? void 0,
      existSingle: f.existSingle ?? void 0,
      singId: f.singId
    };
    this.personalSaving.set(true);
    this.api.savePersonal(payload, this.personalFiles).subscribe({
      next: () => {
        this.personalSaving.set(false);
        this.personalModalVisible.set(false);
        this.message.success(this.i18n.t("epi.msg.applySuccess", "G\u1EEDi y\xEAu c\u1EA7u th\xE0nh c\xF4ng! Ch\u1EDD ng\u01B0\u1EDDi qu\u1EA3n l\xFD x\xE9t duy\u1EC7t."));
        this.loadBasicInfo();
      },
      error: () => {
        this.personalSaving.set(false);
        this.message.error(this.i18n.t("epi.msg.saveError.personal", "L\u1ED7i khi l\u01B0u th\xF4ng tin c\xE1 nh\xE2n!"));
      }
    });
  }
  // ==================== Modal: Địa chỉ ====================
  openAddressModal(row) {
    this.addressIsNew.set(!row);
    this.addressForm = row ? {
      updateAddressNo: row.addressNo,
      addressType: row.addressType || null,
      effectiveStartDate: this.toDate(row.effectiveStartDate),
      addressContent: row.addressContent || ""
    } : __spreadValues({}, EMPTY_ADDRESS_FORM);
    this.addressModalVisible.set(true);
  }
  closeAddressModal() {
    this.addressModalVisible.set(false);
  }
  saveAddress() {
    const f = this.addressForm;
    if (!f.addressType) {
      this.message.error(this.i18n.t("epi.msg.validate.addressType", "Vui l\xF2ng ch\u1ECDn Lo\u1EA1i \u0111\u1ECBa ch\u1EC9!"));
      return;
    }
    const payload = {
      updateAddressNo: f.updateAddressNo,
      addressType: f.addressType,
      effectiveStartDate: this.formatYmd(f.effectiveStartDate) || null,
      addressContent: f.addressContent || null
    };
    this.addressSaving.set(true);
    this.api.saveAddress(payload).subscribe({
      next: () => {
        this.addressSaving.set(false);
        this.addressModalVisible.set(false);
        this.message.success(f.updateAddressNo ? this.i18n.t("epi.msg.saveSuccess", "C\u1EADp nh\u1EADt th\xE0nh c\xF4ng!") : this.i18n.t("epi.msg.addSuccess", "Th\xEAm m\u1EDBi th\xE0nh c\xF4ng!"));
        this.loadAddress();
      },
      error: () => {
        this.addressSaving.set(false);
        this.message.error(this.i18n.t("epi.msg.saveError.address", "L\u1ED7i khi l\u01B0u \u0111\u1ECBa ch\u1EC9!"));
      }
    });
  }
  // ==================== Modal: Gia đình ====================
  openFamilyModal(row) {
    this.familyIsNew.set(!row);
    this.familyForm = row ? {
      familyNo: row.familyNo,
      famTypeCode: row.famTypeCode || null,
      famName: row.famName || "",
      gender: row.gender || null,
      famBorndate: this.toDate(row.famBorndate),
      famPhone: row.famPhone || ""
    } : __spreadValues({}, EMPTY_FAMILY_FORM);
    this.familyFiles = [];
    if (this.familyFileInputRef)
      this.familyFileInputRef.nativeElement.value = "";
    this.familyModalVisible.set(true);
  }
  closeFamilyModal() {
    this.familyModalVisible.set(false);
  }
  onFamilyFilesChange(event) {
    const input = event.target;
    this.familyFiles = input.files ? Array.from(input.files) : [];
  }
  saveFamily() {
    const f = this.familyForm;
    if (!f.famTypeCode || !f.famName) {
      this.message.error(this.i18n.t("epi.msg.validate.familyRequired", "Vui l\xF2ng ch\u1ECDn Quan h\u1EC7 v\xE0 nh\u1EADp H\u1ECD t\xEAn!"));
      return;
    }
    const payload = {
      famTypeCode: f.famTypeCode,
      famName: f.famName,
      gender: f.gender ?? void 0,
      famBorndate: this.formatYmd(f.famBorndate),
      famPhone: f.famPhone,
      updateFamilyNo: f.familyNo ?? void 0
    };
    this.familySaving.set(true);
    this.api.saveFamily(payload, this.familyFiles).subscribe({
      next: () => {
        this.familySaving.set(false);
        this.familyModalVisible.set(false);
        this.message.success(this.i18n.t("epi.msg.applySuccess", "G\u1EEDi y\xEAu c\u1EA7u th\xE0nh c\xF4ng! Ch\u1EDD ng\u01B0\u1EDDi qu\u1EA3n l\xFD x\xE9t duy\u1EC7t."));
        this.loadFamily();
      },
      error: () => {
        this.familySaving.set(false);
        this.message.error(this.i18n.t("epi.msg.saveError.family", "L\u1ED7i khi l\u01B0u th\xF4ng tin gia \u0111\xECnh!"));
      }
    });
  }
  // ==================== Modal: Liên hệ khẩn cấp ====================
  openEmergencyModal(row) {
    this.emergencyIsNew.set(!row);
    this.emergencyForm = row ? {
      emergencyNo: row.emergencyNo,
      emerName: row.emerName || "",
      emerTypeCode: row.emerTypeCode || null,
      emerPhone: row.emerPhone || "",
      emerEmail: row.emerEmail || "",
      emerAddress: row.emerAddress || "",
      isEmergencyAddress: this.toBool(row.isEmergencyAddress)
    } : __spreadValues({}, EMPTY_EMERGENCY_FORM);
    this.emergencyFiles = [];
    if (this.emergencyFileInputRef)
      this.emergencyFileInputRef.nativeElement.value = "";
    this.emergencyModalVisible.set(true);
  }
  closeEmergencyModal() {
    this.emergencyModalVisible.set(false);
  }
  onEmergencyFilesChange(event) {
    const input = event.target;
    this.emergencyFiles = input.files ? Array.from(input.files) : [];
  }
  saveEmergency() {
    const f = this.emergencyForm;
    if (!f.emerName) {
      this.message.error(this.i18n.t("epi.msg.validate.emergencyName", "Vui l\xF2ng nh\u1EADp H\u1ECD t\xEAn!"));
      return;
    }
    const payload = {
      emerName: f.emerName,
      emerTypeCode: f.emerTypeCode ?? void 0,
      emerPhone: f.emerPhone,
      emerEmail: f.emerEmail,
      emerAddress: f.emerAddress,
      isEmergencyAddress: f.isEmergencyAddress ? "1" : "0",
      updateEmergencyNo: f.emergencyNo ?? void 0
    };
    this.emergencySaving.set(true);
    this.api.saveEmergency(payload, this.emergencyFiles).subscribe({
      next: () => {
        this.emergencySaving.set(false);
        this.emergencyModalVisible.set(false);
        this.message.success(this.i18n.t("epi.msg.applySuccess", "G\u1EEDi y\xEAu c\u1EA7u th\xE0nh c\xF4ng! Ch\u1EDD ng\u01B0\u1EDDi qu\u1EA3n l\xFD x\xE9t duy\u1EC7t."));
        this.loadEmergency();
      },
      error: () => {
        this.emergencySaving.set(false);
        this.message.error(this.i18n.t("epi.msg.saveError.emergency", "L\u1ED7i khi l\u01B0u li\xEAn h\u1EC7 kh\u1EA9n c\u1EA5p!"));
      }
    });
  }
  // ==================== Helpers ====================
  toBool(v) {
    return v === "1" || v === "Y";
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
  static \u0275fac = function PersonalInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PersonalInfoComponent)(\u0275\u0275directiveInject(PersonalInfoService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PersonalInfoComponent, selectors: [["app-personal-info"]], viewQuery: function PersonalInfoComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5)(_c1, 5)(_c2, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.personalFileInputRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.familyFileInputRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.emergencyFileInputRef = _t.first);
    }
  }, decls: 130, vars: 158, consts: [["piAddrTable", ""], ["piFamTable", ""], ["piEmerTable", ""], ["personalFileInput", ""], ["familyFileInput", ""], ["emergencyFileInput", ""], [1, "row"], [1, "col-12"], ["class", "card mb-3", 4, "ngIf"], [1, "card", "mb-3"], [1, "card-header", "bg-light", "py-2", "d-flex", "justify-content-between", "align-items-center"], [1, "bx", "bx-id-card", "me-1"], ["nz-button", "", "nzType", "default", "nzSize", "small", 3, "click", "disabled"], [1, "bx", "bx-edit", "me-1"], ["class", "card-body p-0", 4, "ngIf"], [1, "bx", "bx-map", "me-1"], ["nz-button", "", "nzType", "primary", "nzSize", "small", 3, "click"], [1, "bx", "bx-plus", "me-1"], [1, "card-body", "p-0"], ["nzType", "error", "class", "m-2", 3, "nzMessage", 4, "ngIf"], ["nzSize", "small", 3, "nzData", "nzLoading", "nzShowPagination"], [4, "ngIf"], ["class", "pi-row-clickable", 3, "click", 4, "ngFor", "ngForOf"], [1, "bx", "bx-group", "me-1"], [1, "bx", "bx-phone-call", "me-1"], [1, "text-center", 2, "width", "90px"], ["nzWidth", "1100px", 3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzBodyStyle", "nzOkLoading", "nzOkText", "nzCancelText"], [4, "nzModalContent"], [3, "nzOnCancel", "nzOnOk", "nzVisible", "nzTitle", "nzOkLoading", "nzOkText", "nzCancelText"], [1, "table", "table-bordered", "table-sm", "align-middle", "mb-0", 2, "table-layout", "fixed"], [2, "width", "15%"], [2, "width", "35%"], [1, "table-light", "text-center"], [1, "table", "table-bordered", "table-sm", "align-middle", "mb-0"], [1, "table-light", "text-center", 2, "width", "150px"], [1, "table-light", "text-center", 2, "width", "170px"], [1, "table-light", "text-center", 2, "width", "100px"], [1, "table-light", "text-center", 2, "width", "80px"], ["colspan", "3"], ["nzType", "error", 1, "m-2", 3, "nzMessage"], ["colspan", "3", 1, "text-center", "text-muted"], [1, "pi-row-clickable", 3, "click"], ["colspan", "5", 1, "text-center", "text-muted"], ["colspan", "6", 1, "text-center", "text-muted"], [1, "text-center"], ["type", "checkbox", "disabled", "", 3, "checked"], [1, "row", "g-2"], [1, "col-md-3"], [1, "form-label", "fw-semibold"], ["nz-input", "", "readonly", "", 3, "ngModel"], [1, "col-md-3", "d-flex", "align-items-end", "pb-1"], ["nz-checkbox", "", 3, "ngModelChange", "ngModel"], ["nz-input", "", 3, "ngModelChange", "ngModel"], ["nzFormat", "dd/MM/yyyy", 1, "w-100", 3, "ngModelChange", "ngModel"], ["nzAllowClear", "", 1, "w-100", 3, "ngModelChange", "ngModel", "nzPlaceHolder"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["value", "1", 3, "nzLabel"], ["value", "0", 3, "nzLabel"], ["nz-input", "", "type", "email", 3, "ngModelChange", "ngModel"], [1, "mt-2"], ["nzType", "info", 1, "mb-2", 3, "nzMessage"], ["type", "file", "multiple", "", "accept", ".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg", 1, "form-control", "form-control-sm", 3, "change"], [1, "form-text"], [3, "nzValue", "nzLabel"], [1, "mb-2"], [1, "text-danger"], ["nz-input", "", "rows", "3", 3, "ngModelChange", "ngModel"], [1, "col-md-6"], [1, "col-md-4"], [1, "col-12", "mt-1"], ["nz-checkbox", "", 1, "mt-1", 3, "ngModelChange", "ngModel"], [1, "col-12", "mt-2"]], template: function PersonalInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 6)(1, "div", 7);
      \u0275\u0275template(2, PersonalInfoComponent_div_2_Template, 53, 40, "div", 8);
      \u0275\u0275elementStart(3, "div", 9)(4, "div", 10)(5, "strong");
      \u0275\u0275element(6, "i", 11);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "button", 12);
      \u0275\u0275listener("click", function PersonalInfoComponent_Template_button_click_9_listener() {
        return ctx.openPersonalModal();
      });
      \u0275\u0275element(10, "i", 13);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(13, PersonalInfoComponent_div_13_Template, 77, 72, "div", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 9)(15, "div", 10)(16, "strong");
      \u0275\u0275element(17, "i", 15);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "button", 16);
      \u0275\u0275listener("click", function PersonalInfoComponent_Template_button_click_20_listener() {
        return ctx.openAddressModal(null);
      });
      \u0275\u0275element(21, "i", 17);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 18);
      \u0275\u0275template(25, PersonalInfoComponent_nz_alert_25_Template, 1, 1, "nz-alert", 19);
      \u0275\u0275elementStart(26, "nz-table", 20, 0)(28, "thead")(29, "tr")(30, "th");
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th");
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "th");
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "tbody");
      \u0275\u0275template(40, PersonalInfoComponent_tr_40_Template, 4, 4, "tr", 21)(41, PersonalInfoComponent_tr_41_Template, 7, 3, "tr", 22);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(42, "div", 9)(43, "div", 10)(44, "strong");
      \u0275\u0275element(45, "i", 23);
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "button", 16);
      \u0275\u0275listener("click", function PersonalInfoComponent_Template_button_click_48_listener() {
        return ctx.openFamilyModal(null);
      });
      \u0275\u0275element(49, "i", 17);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 18);
      \u0275\u0275template(53, PersonalInfoComponent_nz_alert_53_Template, 1, 1, "nz-alert", 19);
      \u0275\u0275elementStart(54, "nz-table", 20, 1)(56, "thead")(57, "tr")(58, "th");
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "th");
      \u0275\u0275text(62);
      \u0275\u0275pipe(63, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "th");
      \u0275\u0275text(65);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "th");
      \u0275\u0275text(68);
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "th");
      \u0275\u0275text(71);
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(73, "tbody");
      \u0275\u0275template(74, PersonalInfoComponent_tr_74_Template, 4, 4, "tr", 21)(75, PersonalInfoComponent_tr_75_Template, 11, 5, "tr", 22);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(76, "div", 9)(77, "div", 10)(78, "strong");
      \u0275\u0275element(79, "i", 24);
      \u0275\u0275text(80);
      \u0275\u0275pipe(81, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "button", 16);
      \u0275\u0275listener("click", function PersonalInfoComponent_Template_button_click_82_listener() {
        return ctx.openEmergencyModal(null);
      });
      \u0275\u0275element(83, "i", 17);
      \u0275\u0275text(84);
      \u0275\u0275pipe(85, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "div", 18);
      \u0275\u0275template(87, PersonalInfoComponent_nz_alert_87_Template, 1, 1, "nz-alert", 19);
      \u0275\u0275elementStart(88, "nz-table", 20, 2)(90, "thead")(91, "tr")(92, "th");
      \u0275\u0275text(93);
      \u0275\u0275pipe(94, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "th");
      \u0275\u0275text(96);
      \u0275\u0275pipe(97, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "th");
      \u0275\u0275text(99);
      \u0275\u0275pipe(100, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "th");
      \u0275\u0275text(102);
      \u0275\u0275pipe(103, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "th");
      \u0275\u0275text(105);
      \u0275\u0275pipe(106, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "th", 25);
      \u0275\u0275text(108);
      \u0275\u0275pipe(109, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(110, "tbody");
      \u0275\u0275template(111, PersonalInfoComponent_tr_111_Template, 4, 4, "tr", 21)(112, PersonalInfoComponent_tr_112_Template, 13, 6, "tr", 22);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(113, "nz-modal", 26);
      \u0275\u0275pipe(114, "translate");
      \u0275\u0275pipe(115, "translate");
      \u0275\u0275pipe(116, "translate");
      \u0275\u0275listener("nzOnCancel", function PersonalInfoComponent_Template_nz_modal_nzOnCancel_113_listener() {
        return ctx.closePersonalModal();
      })("nzOnOk", function PersonalInfoComponent_Template_nz_modal_nzOnOk_113_listener() {
        return ctx.savePersonal();
      });
      \u0275\u0275template(117, PersonalInfoComponent_ng_container_117_Template, 169, 195, "ng-container", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "nz-modal", 28);
      \u0275\u0275pipe(119, "translate");
      \u0275\u0275pipe(120, "translate");
      \u0275\u0275listener("nzOnCancel", function PersonalInfoComponent_Template_nz_modal_nzOnCancel_118_listener() {
        return ctx.closeAddressModal();
      })("nzOnOk", function PersonalInfoComponent_Template_nz_modal_nzOnOk_118_listener() {
        return ctx.saveAddress();
      });
      \u0275\u0275template(121, PersonalInfoComponent_ng_container_121_Template, 20, 20, "ng-container", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "nz-modal", 28);
      \u0275\u0275pipe(123, "translate");
      \u0275\u0275pipe(124, "translate");
      \u0275\u0275listener("nzOnCancel", function PersonalInfoComponent_Template_nz_modal_nzOnCancel_122_listener() {
        return ctx.closeFamilyModal();
      })("nzOnOk", function PersonalInfoComponent_Template_nz_modal_nzOnOk_122_listener() {
        return ctx.saveFamily();
      });
      \u0275\u0275template(125, PersonalInfoComponent_ng_container_125_Template, 46, 47, "ng-container", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "nz-modal", 28);
      \u0275\u0275pipe(127, "translate");
      \u0275\u0275pipe(128, "translate");
      \u0275\u0275listener("nzOnCancel", function PersonalInfoComponent_Template_nz_modal_nzOnCancel_126_listener() {
        return ctx.closeEmergencyModal();
      })("nzOnOk", function PersonalInfoComponent_Template_nz_modal_nzOnOk_126_listener() {
        return ctx.saveEmergency();
      });
      \u0275\u0275template(129, PersonalInfoComponent_ng_container_129_Template, 46, 47, "ng-container", 27);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      const piAddrTable_r25 = \u0275\u0275reference(27);
      const piFamTable_r26 = \u0275\u0275reference(55);
      const piEmerTable_r27 = \u0275\u0275reference(89);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.basicInfo());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 64, "epi.section.personal", "C\xE1 nh\xE2n"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.basicInfo());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(12, 67, "epi.btn.edit", "Ch\u1EC9nh s\u1EEDa"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.basicInfo());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 70, "epi.section.address", "Lo\u1EA1i \u0111\u1ECBa ch\u1EC9"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(23, 73, "epi.btn.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.addressError());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.addressList())("nzLoading", ctx.addressLoading())("nzShowPagination", false);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 76, "epi.field.addressType", "Lo\u1EA1i \u0111\u1ECBa ch\u1EC9"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 79, "epi.field.effectiveDate", "Ng\xE0y hi\u1EC7u l\u1EF1c"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(38, 82, "epi.field.address", "\u0110\u1ECBa ch\u1EC9"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.addressLoading() && piAddrTable_r25.data.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", piAddrTable_r25.data);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(47, 85, "epi.section.family", "Th\xF4ng tin gia \u0111\xECnh"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(51, 88, "epi.btn.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.familyError());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.familyList())("nzLoading", ctx.familyLoading())("nzShowPagination", false);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(60, 91, "epi.field.relationship", "Quan h\u1EC7"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(63, 94, "epi.field.fullName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(66, 97, "epi.field.gender", "Gi\u1EDBi t\xEDnh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 100, "epi.field.dob", "Ng\xE0y sinh"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(72, 103, "epi.field.familyPhone", "\u0110i\u1EC7n tho\u1EA1i gia \u0111\xECnh"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.familyLoading() && piFamTable_r26.data.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", piFamTable_r26.data);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(81, 106, "epi.section.emergency", "Ng\u01B0\u1EDDi li\xEAn h\u1EC7 kh\u1EA9n c\u1EA5p"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(85, 109, "epi.btn.addNew", "Th\xEAm m\u1EDBi"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.emergencyError());
      \u0275\u0275advance();
      \u0275\u0275property("nzData", ctx.emergencyList())("nzLoading", ctx.emergencyLoading())("nzShowPagination", false);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(94, 112, "epi.field.fullName", "H\u1ECD t\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(97, 115, "epi.field.relationship", "Quan h\u1EC7"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(100, 118, "epi.field.phone", "\u0110i\u1EC7n tho\u1EA1i"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(103, 121, "epi.field.email", "Email"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(106, 124, "epi.field.address", "\u0110\u1ECBa ch\u1EC9"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(109, 127, "epi.field.primaryContact", "Li\xEAn h\u1EC7 ch\xEDnh"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", !ctx.emergencyLoading() && piEmerTable_r27.data.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", piEmerTable_r27.data);
      \u0275\u0275advance();
      \u0275\u0275property("nzVisible", ctx.personalModalVisible())("nzTitle", \u0275\u0275pipeBind2(114, 130, "epi.modal.editPersonal", "Ch\u1EC9nh s\u1EEDa th\xF4ng tin c\xE1 nh\xE2n"))("nzBodyStyle", \u0275\u0275pureFunction0(157, _c3))("nzOkLoading", ctx.personalSaving())("nzOkText", \u0275\u0275pipeBind2(115, 133, "epi.btn.submitRequest", "G\u1EEDi y\xEAu c\u1EA7u"))("nzCancelText", \u0275\u0275pipeBind2(116, 136, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(5);
      \u0275\u0275property("nzVisible", ctx.addressModalVisible())("nzTitle", ctx.addressModalTitle())("nzOkLoading", ctx.addressSaving())("nzOkText", \u0275\u0275pipeBind2(119, 139, "common.save", "L\u01B0u"))("nzCancelText", \u0275\u0275pipeBind2(120, 142, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(4);
      \u0275\u0275property("nzVisible", ctx.familyModalVisible())("nzTitle", ctx.familyModalTitle())("nzOkLoading", ctx.familySaving())("nzOkText", \u0275\u0275pipeBind2(123, 145, "epi.btn.submitRequest", "G\u1EEDi y\xEAu c\u1EA7u"))("nzCancelText", \u0275\u0275pipeBind2(124, 148, "common.close", "\u0110\xF3ng"));
      \u0275\u0275advance(4);
      \u0275\u0275property("nzVisible", ctx.emergencyModalVisible())("nzTitle", ctx.emergencyModalTitle())("nzOkLoading", ctx.emergencySaving())("nzOkText", \u0275\u0275pipeBind2(127, 151, "epi.btn.submitRequest", "G\u1EEDi y\xEAu c\u1EA7u"))("nzCancelText", \u0275\u0275pipeBind2(128, 154, "common.close", "\u0110\xF3ng"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzInputModule, NzInputDirective, NzSelectModule, NzOptionComponent, NzSelectComponent, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzDatePickerModule, NzDatePickerComponent, NzCheckboxModule, NzCheckboxComponent, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\n.pi-row-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.pi-row-clickable[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n/*# sourceMappingURL=personal-info.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PersonalInfoComponent, [{
    type: Component,
    args: [{ selector: "app-personal-info", standalone: true, imports: [
      CommonModule,
      FormsModule,
      NzTableModule,
      NzInputModule,
      NzSelectModule,
      NzButtonModule,
      NzDatePickerModule,
      NzCheckboxModule,
      NzModalModule,
      NzAlertModule,
      TranslatePipe
    ], template: `<div class="row">
  <div class="col-12">

    <!-- ===== Th\xF4ng tin nh\xE2n vi\xEAn (t\u01B0\u01A1ng \u0111\u01B0\u01A1ng fragments/essEmpInfoCard.html - d\xF9ng l\u1EA1i data \u0111\xE3 t\u1EA3i t\u1EEB myInfo) ===== -->
    <div class="card mb-3" *ngIf="basicInfo() as info">
      <div class="card-body p-0">
        <table class="table table-bordered table-sm align-middle mb-0" style="table-layout:fixed;">
          <colgroup>
            <col style="width:15%;"><col style="width:35%;"><col style="width:15%;"><col style="width:35%;">
          </colgroup>
          <tbody>
            <tr>
              <th class="table-light text-center">{{ 'essEmpCard.localName' | translate:'H\u1ECD t\xEAn' }}</th>
              <td>{{ info.localName }}</td>
              <th class="table-light text-center">{{ 'essEmpCard.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
              <td>{{ info.empId }}</td>
            </tr>
            <tr>
              <th class="table-light text-center">{{ 'essEmpCard.deptName' | translate:'Ph\xF2ng ban' }}</th>
              <td>{{ info.deptName }}</td>
              <th class="table-light text-center">{{ 'essEmpCard.headDept' | translate:'Tr\u01B0\u1EDFng ph\xF2ng' }}</th>
              <td>{{ info.headDepartment }}</td>
            </tr>
            <tr>
              <th class="table-light text-center">{{ 'essEmpCard.postFamily' | translate:'Nh\xF3m nh\xE2n vi\xEAn' }}</th>
              <td>{{ info.postFamilyName }}</td>
              <th class="table-light text-center">{{ 'essEmpCard.postGrade' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
              <td>{{ info.postGradeName }}</td>
            </tr>
            <tr>
              <th class="table-light text-center">{{ 'essEmpCard.positionName' | translate:'Ch\u1EE9c danh' }}</th>
              <td>{{ info.positionNoName }}</td>
              <th class="table-light text-center">{{ 'essEmpCard.dateStarted' | translate:'Ng\xE0y v\xE0o l\xE0m' }}</th>
              <td>{{ info.dateStarted }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- ===== C\xE1 nh\xE2n ===== -->
    <div class="card mb-3">
      <div class="card-header bg-light py-2 d-flex justify-content-between align-items-center">
        <strong><i class="bx bx-id-card me-1"></i>{{ 'epi.section.personal' | translate:'C\xE1 nh\xE2n' }}</strong>
        <button nz-button nzType="default" nzSize="small" [disabled]="!basicInfo()" (click)="openPersonalModal()">
          <i class="bx bx-edit me-1"></i>{{ 'epi.btn.edit' | translate:'Ch\u1EC9nh s\u1EEDa' }}
        </button>
      </div>
      <div class="card-body p-0" *ngIf="basicInfo() as info">
        <table class="table table-bordered table-sm align-middle mb-0">
          <tbody>
            <tr>
              <th class="table-light text-center" style="width:150px;">{{ 'epi.field.dob' | translate:'Ng\xE0y sinh' }}</th>
              <td>{{ formatDisplayDate(info.dob) }}</td>
              <th class="table-light text-center" style="width:150px;">{{ 'epi.field.gender' | translate:'Gi\u1EDBi t\xEDnh' }}</th>
              <td>{{ info.sexName }}</td>
              <th class="table-light text-center" style="width:170px;">{{ 'epi.field.maritalStatus' | translate:'T\xECnh tr\u1EA1ng h\xF4n nh\xE2n' }}</th>
              <td>{{ info.maritalStatusName }}</td>
              <th class="table-light text-center" style="width:100px;">{{ 'epi.field.ethnicity' | translate:'D\xE2n t\u1ED9c' }}</th>
              <td>{{ info.nationName }}</td>
              <th class="table-light text-center" style="width:80px;">{{ 'epi.field.houseTp' | translate:'H\u1ED9 kh\u1EA9u' }}</th>
              <td>{{ info.houseTp }}</td>
            </tr>
            <tr>
              <th class="table-light text-center">{{ 'epi.field.homePhone' | translate:'\u0110T gia \u0111\xECnh' }}</th>
              <td>{{ info.homePhone }}</td>
              <th class="table-light text-center">{{ 'epi.field.companyPhone' | translate:'\u0110T c\xF4ng ty' }}</th>
              <td>{{ info.companyPhone }}</td>
              <th class="table-light text-center">{{ 'epi.field.phone' | translate:'\u0110i\u1EC7n tho\u1EA1i' }}</th>
              <td>{{ info.cellphone }}</td>
              <th class="table-light text-center">{{ 'epi.field.residence' | translate:'Ch\u1ED7 \u1EDF' }}</th>
              <td>{{ info.residentialDistinction }}</td>
              <th class="table-light text-center">{{ 'epi.field.existSingle' | translate:'EagleM' }}</th>
              <td>{{ info.existSingle === '1' ? ('common.yes' | translate:'Yes') : (info.existSingle === '0' ? ('common.no' | translate:'No') : '') }}</td>
            </tr>
            <tr>
              <th class="table-light text-center">{{ 'epi.field.email' | translate:'Email' }}</th>
              <td>{{ info.email }}</td>
              <th class="table-light text-center">{{ 'epi.field.companyEmail' | translate:'Email c\xF4ng ty' }}</th>
              <td>{{ info.emailSecond }}</td>
              <th class="table-light text-center">{{ 'epi.field.nationality' | translate:'Qu\u1ED1c t\u1ECBch' }}</th>
              <td>{{ info.nationalityName }}</td>
              <th class="table-light text-center">EagleM ID</th>
              <td colspan="3">{{ info.singId }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- ===== Lo\u1EA1i \u0111\u1ECBa ch\u1EC9 ===== -->
    <div class="card mb-3">
      <div class="card-header bg-light py-2 d-flex justify-content-between align-items-center">
        <strong><i class="bx bx-map me-1"></i>{{ 'epi.section.address' | translate:'Lo\u1EA1i \u0111\u1ECBa ch\u1EC9' }}</strong>
        <button nz-button nzType="primary" nzSize="small" (click)="openAddressModal(null)">
          <i class="bx bx-plus me-1"></i>{{ 'epi.btn.addNew' | translate:'Th\xEAm m\u1EDBi' }}
        </button>
      </div>
      <div class="card-body p-0">
        <nz-alert *ngIf="addressError()" nzType="error" [nzMessage]="addressError() ?? ''" class="m-2"></nz-alert>
        <nz-table [nzData]="addressList()" [nzLoading]="addressLoading()" [nzShowPagination]="false" nzSize="small" #piAddrTable>
          <thead>
            <tr>
              <th>{{ 'epi.field.addressType' | translate:'Lo\u1EA1i \u0111\u1ECBa ch\u1EC9' }}</th>
              <th>{{ 'epi.field.effectiveDate' | translate:'Ng\xE0y hi\u1EC7u l\u1EF1c' }}</th>
              <th>{{ 'epi.field.address' | translate:'\u0110\u1ECBa ch\u1EC9' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="!addressLoading() && piAddrTable.data.length === 0">
              <td colspan="3" class="text-center text-muted">{{ 'epi.msg.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
            </tr>
            <tr *ngFor="let row of piAddrTable.data" class="pi-row-clickable" (click)="openAddressModal(row)">
              <td>{{ row.addressTypeName || row.addressType }}</td>
              <td>{{ formatDisplayDate(row.effectiveStartDate) }}</td>
              <td>{{ row.addressContent }}</td>
            </tr>
          </tbody>
        </nz-table>
      </div>
    </div>

    <!-- ===== Th\xF4ng tin gia \u0111\xECnh ===== -->
    <div class="card mb-3">
      <div class="card-header bg-light py-2 d-flex justify-content-between align-items-center">
        <strong><i class="bx bx-group me-1"></i>{{ 'epi.section.family' | translate:'Th\xF4ng tin gia \u0111\xECnh' }}</strong>
        <button nz-button nzType="primary" nzSize="small" (click)="openFamilyModal(null)">
          <i class="bx bx-plus me-1"></i>{{ 'epi.btn.addNew' | translate:'Th\xEAm m\u1EDBi' }}
        </button>
      </div>
      <div class="card-body p-0">
        <nz-alert *ngIf="familyError()" nzType="error" [nzMessage]="familyError() ?? ''" class="m-2"></nz-alert>
        <nz-table [nzData]="familyList()" [nzLoading]="familyLoading()" [nzShowPagination]="false" nzSize="small" #piFamTable>
          <thead>
            <tr>
              <th>{{ 'epi.field.relationship' | translate:'Quan h\u1EC7' }}</th>
              <th>{{ 'epi.field.fullName' | translate:'H\u1ECD t\xEAn' }}</th>
              <th>{{ 'epi.field.gender' | translate:'Gi\u1EDBi t\xEDnh' }}</th>
              <th>{{ 'epi.field.dob' | translate:'Ng\xE0y sinh' }}</th>
              <th>{{ 'epi.field.familyPhone' | translate:'\u0110i\u1EC7n tho\u1EA1i gia \u0111\xECnh' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="!familyLoading() && piFamTable.data.length === 0">
              <td colspan="5" class="text-center text-muted">{{ 'epi.msg.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
            </tr>
            <tr *ngFor="let row of piFamTable.data" class="pi-row-clickable" (click)="openFamilyModal(row)">
              <td>{{ row.famTypeName || row.famTypeCode }}</td>
              <td>{{ row.famName }}</td>
              <td>{{ row.genderName }}</td>
              <td>{{ formatDisplayDate(row.famBorndate) }}</td>
              <td>{{ row.famPhone }}</td>
            </tr>
          </tbody>
        </nz-table>
      </div>
    </div>

    <!-- ===== Ng\u01B0\u1EDDi li\xEAn h\u1EC7 kh\u1EA9n c\u1EA5p ===== -->
    <div class="card mb-3">
      <div class="card-header bg-light py-2 d-flex justify-content-between align-items-center">
        <strong><i class="bx bx-phone-call me-1"></i>{{ 'epi.section.emergency' | translate:'Ng\u01B0\u1EDDi li\xEAn h\u1EC7 kh\u1EA9n c\u1EA5p' }}</strong>
        <button nz-button nzType="primary" nzSize="small" (click)="openEmergencyModal(null)">
          <i class="bx bx-plus me-1"></i>{{ 'epi.btn.addNew' | translate:'Th\xEAm m\u1EDBi' }}
        </button>
      </div>
      <div class="card-body p-0">
        <nz-alert *ngIf="emergencyError()" nzType="error" [nzMessage]="emergencyError() ?? ''" class="m-2"></nz-alert>
        <nz-table [nzData]="emergencyList()" [nzLoading]="emergencyLoading()" [nzShowPagination]="false" nzSize="small" #piEmerTable>
          <thead>
            <tr>
              <th>{{ 'epi.field.fullName' | translate:'H\u1ECD t\xEAn' }}</th>
              <th>{{ 'epi.field.relationship' | translate:'Quan h\u1EC7' }}</th>
              <th>{{ 'epi.field.phone' | translate:'\u0110i\u1EC7n tho\u1EA1i' }}</th>
              <th>{{ 'epi.field.email' | translate:'Email' }}</th>
              <th>{{ 'epi.field.address' | translate:'\u0110\u1ECBa ch\u1EC9' }}</th>
              <th class="text-center" style="width:90px;">{{ 'epi.field.primaryContact' | translate:'Li\xEAn h\u1EC7 ch\xEDnh' }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngIf="!emergencyLoading() && piEmerTable.data.length === 0">
              <td colspan="6" class="text-center text-muted">{{ 'epi.msg.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
            </tr>
            <tr *ngFor="let row of piEmerTable.data" class="pi-row-clickable" (click)="openEmergencyModal(row)">
              <td>{{ row.emerName }}</td>
              <td>{{ row.emerTypeName }}</td>
              <td>{{ row.emerPhone }}</td>
              <td>{{ row.emerEmail }}</td>
              <td>{{ row.emerAddress }}</td>
              <td class="text-center"><input type="checkbox" [checked]="row.isEmergencyAddress === '1' || row.isEmergencyAddress === 'Y'" disabled></td>
            </tr>
          </tbody>
        </nz-table>
      </div>
    </div>

  </div>
</div>

<!-- ===== Modal: Ch\u1EC9nh s\u1EEDa C\xE1 nh\xE2n ===== -->
<nz-modal [nzVisible]="personalModalVisible()" [nzTitle]="'epi.modal.editPersonal' | translate:'Ch\u1EC9nh s\u1EEDa th\xF4ng tin c\xE1 nh\xE2n'"
          nzWidth="1100px" [nzBodyStyle]="{ 'max-height': '72vh', 'overflow-y': 'auto' }"
          (nzOnCancel)="closePersonalModal()" (nzOnOk)="savePersonal()" [nzOkLoading]="personalSaving()"
          [nzOkText]="'epi.btn.submitRequest' | translate:'G\u1EEDi y\xEAu c\u1EA7u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <div class="row g-2">
      <div class="col-md-3">
        <label class="form-label fw-semibold">{{ 'epi.field.fullName' | translate:'H\u1ECD t\xEAn' }}</label>
        <input nz-input [ngModel]="personalForm.localName" readonly>
      </div>
      <div class="col-md-3">
        <label class="form-label fw-semibold">{{ 'epi.field.engName' | translate:'T\xEAn ti\u1EBFng Anh' }}</label>
        <input nz-input [ngModel]="personalForm.engName" readonly>
      </div>
      <div class="col-md-3 d-flex align-items-end pb-1">
        <label nz-checkbox [(ngModel)]="personalForm.armyOrNot">{{ 'epi.field.militaryService' | translate:'Tham gia qu\xE2n \u0111\u1ED9i' }}</label>
      </div>
      <div class="col-md-3 d-flex align-items-end pb-1">
        <label nz-checkbox [(ngModel)]="personalForm.obstacleOrNot">{{ 'epi.field.disability' | translate:'Khuy\u1EBFt t\u1EADt' }}</label>
      </div>

      <div class="col-md-3">
        <label class="form-label fw-semibold">{{ 'epi.field.idcardNo' | translate:'CMND' }}</label>
        <input nz-input [(ngModel)]="personalForm.idcardNo">
      </div>
      <div class="col-md-3">
        <label class="form-label fw-semibold">{{ 'epi.field.idcardDate' | translate:'Ng\xE0y c\u1EA5p' }}</label>
        <nz-date-picker class="w-100" [(ngModel)]="personalForm.idcardStartDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
      </div>
      <div class="col-md-3">
        <label class="form-label fw-semibold">{{ 'epi.field.issuingAuthority' | translate:'N\u01A1i c\u1EA5p' }}</label>
        <input nz-input [(ngModel)]="personalForm.issuingAuthority">
      </div>
      <div class="col-md-3">
        <label class="form-label fw-semibold">{{ 'epi.field.cvUpdateStatus' | translate:'CV update status' }}</label>
        <nz-select class="w-100" [(ngModel)]="personalForm.cvUpdateStatus" nzAllowClear [nzPlaceHolder]="'epi.select.choose' | translate:'-- Ch\u1ECDn --'">
          <nz-option *ngFor="let c of cvUpdateStatusOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
        </nz-select>
      </div>

      <div class="col-md-3">
        <label class="form-label fw-semibold">{{ 'epi.field.dob' | translate:'Ng\xE0y sinh' }}</label>
        <nz-date-picker class="w-100" [(ngModel)]="personalForm.dob" nzFormat="dd/MM/yyyy" (ngModelChange)="calcAge()"></nz-date-picker>
      </div>
      <div class="col-md-3">
        <label class="form-label fw-semibold">{{ 'epi.field.age' | translate:'\u0110\u1ED9 tu\u1ED5i' }}</label>
        <input nz-input [ngModel]="personalForm.age" readonly>
      </div>
      <div class="col-md-3">
        <label class="form-label fw-semibold">{{ 'epi.field.birthPlace' | translate:'N\u01A1i sinh' }}</label>
        <input nz-input [(ngModel)]="personalForm.regPlace">
      </div>
      <div class="col-md-3">
        <label class="form-label fw-semibold">{{ 'epi.field.gender' | translate:'Gi\u1EDBi t\xEDnh' }}</label>
        <nz-select class="w-100" [(ngModel)]="personalForm.sexCode" nzAllowClear [nzPlaceHolder]="'epi.select.choose' | translate:'-- Ch\u1ECDn --'">
          <nz-option *ngFor="let c of sexOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
        </nz-select>
      </div>

      <div class="col-md-3">
        <label class="form-label fw-semibold">{{ 'epi.field.education' | translate:'Tr\xECnh \u0111\u1ED9 h\u1ECDc v\u1EA5n' }}</label>
        <nz-select class="w-100" [(ngModel)]="personalForm.finalDegreeCode" nzAllowClear [nzPlaceHolder]="'epi.select.choose' | translate:'-- Ch\u1ECDn --'">
          <nz-option *ngFor="let c of finalDegreeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-3">
        <label class="form-label fw-semibold">{{ 'epi.field.nationality' | translate:'Qu\u1ED1c t\u1ECBch' }}</label>
        <nz-select class="w-100" [(ngModel)]="personalForm.nationalityCode" nzAllowClear [nzPlaceHolder]="'epi.select.choose' | translate:'-- Ch\u1ECDn --'">
          <nz-option *ngFor="let c of nationalityOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-3">
        <label class="form-label fw-semibold">{{ 'epi.field.ethnicity' | translate:'D\xE2n t\u1ED9c' }}</label>
        <nz-select class="w-100" [(ngModel)]="personalForm.nationCode" nzAllowClear [nzPlaceHolder]="'epi.select.choose' | translate:'-- Ch\u1ECDn --'">
          <nz-option *ngFor="let c of nationOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-3">
        <label class="form-label fw-semibold">{{ 'epi.field.religion' | translate:'T\xF4n gi\xE1o' }}</label>
        <input nz-input [(ngModel)]="personalForm.religion">
      </div>

      <div class="col-md-3">
        <label class="form-label fw-semibold">{{ 'epi.field.phone' | translate:'\u0110i\u1EC7n tho\u1EA1i' }}</label>
        <input nz-input [(ngModel)]="personalForm.cellphone">
      </div>
      <div class="col-md-3">
        <label class="form-label fw-semibold">{{ 'epi.field.maritalStatus' | translate:'T\xECnh tr\u1EA1ng h\xF4n nh\xE2n' }}</label>
        <nz-select class="w-100" [(ngModel)]="personalForm.maritalStatusCode" nzAllowClear [nzPlaceHolder]="'epi.select.choose' | translate:'-- Ch\u1ECDn --'">
          <nz-option *ngFor="let c of maritalStatusOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-3">
        <label class="form-label fw-semibold">{{ 'epi.field.weddingDate' | translate:'Ng\xE0y k\u1EBFt h\xF4n' }}</label>
        <nz-date-picker class="w-100" [(ngModel)]="personalForm.weddingDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
      </div>
      <div class="col-md-3">
        <label class="form-label fw-semibold">{{ 'epi.field.politicalStatus' | translate:'T\xECnh tr\u1EA1ng ch\xEDnh tr\u1ECB' }}</label>
        <input nz-input [(ngModel)]="personalForm.politicalStatus">
      </div>

      <div class="col-md-3">
        <label class="form-label fw-semibold">{{ 'epi.field.existSingle' | translate:'EagleM' }}</label>
        <nz-select class="w-100" [(ngModel)]="personalForm.existSingle" nzAllowClear [nzPlaceHolder]="'epi.select.choose' | translate:'-- Ch\u1ECDn --'">
          <nz-option value="1" [nzLabel]="'common.yes' | translate:'Yes'"></nz-option>
          <nz-option value="0" [nzLabel]="'common.no' | translate:'No'"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-3">
        <label class="form-label fw-semibold">{{ 'epi.field.homePhone' | translate:'\u0110T gia \u0111\xECnh' }}</label>
        <input nz-input [(ngModel)]="personalForm.homePhone">
      </div>
      <div class="col-md-3">
        <label class="form-label fw-semibold">{{ 'epi.field.companyPhone' | translate:'\u0110T c\xF4ng ty' }}</label>
        <input nz-input [(ngModel)]="personalForm.companyPhone">
      </div>
      <div class="col-md-3">
        <label class="form-label fw-semibold">{{ 'epi.field.residence' | translate:'Ch\u1ED7 \u1EDF' }}</label>
        <nz-select class="w-100" [(ngModel)]="personalForm.residentialDistinction" nzAllowClear [nzPlaceHolder]="'epi.select.choose' | translate:'-- Ch\u1ECDn --'">
          <nz-option *ngFor="let c of residentialDistinctionOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
        </nz-select>
      </div>

      <div class="col-md-3">
        <label class="form-label fw-semibold">EagleM ID</label>
        <input nz-input [(ngModel)]="personalForm.singId">
      </div>
      <div class="col-md-3">
        <label class="form-label fw-semibold">{{ 'epi.field.houseTp' | translate:'H\u1ED9 kh\u1EA9u' }}</label>
        <input nz-input [(ngModel)]="personalForm.houseTp">
      </div>
      <div class="col-md-3">
        <label class="form-label fw-semibold">{{ 'epi.field.email' | translate:'Email' }}</label>
        <input nz-input type="email" [(ngModel)]="personalForm.email">
      </div>
      <div class="col-md-3">
        <label class="form-label fw-semibold">{{ 'epi.field.companyEmail' | translate:'Email c\xF4ng ty' }}</label>
        <input nz-input type="email" [(ngModel)]="personalForm.emailSecond">
      </div>
    </div>

    <div class="mt-2">
      <nz-alert nzType="info" [nzMessage]="'epi.msg.applyNote' | translate:'Y\xEAu c\u1EA7u s\u1EBD \u0111\u01B0\u1EE3c g\u1EEDi \u0111\u1EBFn ng\u01B0\u1EDDi qu\u1EA3n l\xFD \u0111\u1EC3 x\xE9t duy\u1EC7t, kh\xF4ng c\u1EADp nh\u1EADt tr\u1EF1c ti\u1EBFp h\u1ED3 s\u01A1.'" class="mb-2"></nz-alert>
      <label class="form-label fw-semibold">{{ 'epi.field.attachFiles' | translate:'File \u0111\xEDnh k\xE8m' }}</label>
      <input #personalFileInput type="file" class="form-control form-control-sm" multiple
             accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg" (change)="onPersonalFilesChange($event)">
      <div class="form-text">{{ 'epi.msg.uploadHint' | translate:'H\u1ED7 tr\u1EE3: PDF, Word, Excel, h\xECnh \u1EA3nh. C\xF3 th\u1EC3 ch\u1ECDn nhi\u1EC1u file.' }}</div>
    </div>
  </ng-container>
</nz-modal>

<!-- ===== Modal: Th\xEAm/S\u1EEDa \u0110\u1ECBa ch\u1EC9 ===== -->
<nz-modal [nzVisible]="addressModalVisible()" [nzTitle]="addressModalTitle()"
          (nzOnCancel)="closeAddressModal()" (nzOnOk)="saveAddress()" [nzOkLoading]="addressSaving()"
          [nzOkText]="'common.save' | translate:'L\u01B0u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <div class="mb-2">
      <label class="form-label fw-semibold">{{ 'epi.field.addressType' | translate:'Lo\u1EA1i \u0111\u1ECBa ch\u1EC9' }} <span class="text-danger">*</span></label>
      <nz-select class="w-100" [(ngModel)]="addressForm.addressType" nzAllowClear [nzPlaceHolder]="'epi.select.chooseAddressType' | translate:'-- Ch\u1ECDn lo\u1EA1i \u0111\u1ECBa ch\u1EC9 --'">
        <nz-option *ngFor="let c of addressTypeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
      </nz-select>
    </div>
    <div class="mb-2">
      <label class="form-label fw-semibold">{{ 'epi.field.effectiveDate' | translate:'Ng\xE0y hi\u1EC7u l\u1EF1c' }}</label>
      <nz-date-picker class="w-100" [(ngModel)]="addressForm.effectiveStartDate" nzFormat="dd/MM/yyyy"></nz-date-picker>
    </div>
    <div class="mb-2">
      <label class="form-label fw-semibold">{{ 'epi.field.address' | translate:'\u0110\u1ECBa ch\u1EC9' }}</label>
      <textarea nz-input [(ngModel)]="addressForm.addressContent" rows="3"></textarea>
    </div>
  </ng-container>
</nz-modal>

<!-- ===== Modal: Th\xEAm/S\u1EEDa Gia \u0111\xECnh ===== -->
<nz-modal [nzVisible]="familyModalVisible()" [nzTitle]="familyModalTitle()"
          (nzOnCancel)="closeFamilyModal()" (nzOnOk)="saveFamily()" [nzOkLoading]="familySaving()"
          [nzOkText]="'epi.btn.submitRequest' | translate:'G\u1EEDi y\xEAu c\u1EA7u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <div class="row g-2">
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'epi.field.relationship' | translate:'Quan h\u1EC7' }} <span class="text-danger">*</span></label>
        <nz-select class="w-100" [(ngModel)]="familyForm.famTypeCode" nzAllowClear [nzPlaceHolder]="'epi.select.chooseRelationship' | translate:'-- Ch\u1ECDn quan h\u1EC7 --'">
          <nz-option *ngFor="let c of famTypeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'epi.field.fullName' | translate:'H\u1ECD t\xEAn' }} <span class="text-danger">*</span></label>
        <input nz-input [(ngModel)]="familyForm.famName">
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'epi.field.gender' | translate:'Gi\u1EDBi t\xEDnh' }}</label>
        <nz-select class="w-100" [(ngModel)]="familyForm.gender" nzAllowClear [nzPlaceHolder]="'epi.select.choose' | translate:'-- Ch\u1ECDn --'">
          <nz-option *ngFor="let c of sexOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'epi.field.dob' | translate:'Ng\xE0y sinh' }}</label>
        <nz-date-picker class="w-100" [(ngModel)]="familyForm.famBorndate" nzFormat="dd/MM/yyyy"></nz-date-picker>
      </div>
      <div class="col-md-4">
        <label class="form-label fw-semibold">{{ 'epi.field.phone' | translate:'\u0110i\u1EC7n tho\u1EA1i' }}</label>
        <input nz-input [(ngModel)]="familyForm.famPhone">
      </div>
      <div class="col-12 mt-1">
        <nz-alert nzType="info" [nzMessage]="'epi.msg.applyNote' | translate:'Y\xEAu c\u1EA7u s\u1EBD \u0111\u01B0\u1EE3c g\u1EEDi \u0111\u1EBFn ng\u01B0\u1EDDi qu\u1EA3n l\xFD \u0111\u1EC3 x\xE9t duy\u1EC7t, kh\xF4ng c\u1EADp nh\u1EADt tr\u1EF1c ti\u1EBFp h\u1ED3 s\u01A1.'" class="mb-2"></nz-alert>
        <label class="form-label fw-semibold">{{ 'epi.field.attachFiles' | translate:'File \u0111\xEDnh k\xE8m' }}</label>
        <input #familyFileInput type="file" class="form-control form-control-sm" multiple
               accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg" (change)="onFamilyFilesChange($event)">
        <div class="form-text">{{ 'epi.msg.uploadHint' | translate:'H\u1ED7 tr\u1EE3: PDF, Word, Excel, h\xECnh \u1EA3nh. C\xF3 th\u1EC3 ch\u1ECDn nhi\u1EC1u file.' }}</div>
      </div>
    </div>
  </ng-container>
</nz-modal>

<!-- ===== Modal: Th\xEAm/S\u1EEDa Li\xEAn h\u1EC7 kh\u1EA9n c\u1EA5p ===== -->
<nz-modal [nzVisible]="emergencyModalVisible()" [nzTitle]="emergencyModalTitle()"
          (nzOnCancel)="closeEmergencyModal()" (nzOnOk)="saveEmergency()" [nzOkLoading]="emergencySaving()"
          [nzOkText]="'epi.btn.submitRequest' | translate:'G\u1EEDi y\xEAu c\u1EA7u'" [nzCancelText]="'common.close' | translate:'\u0110\xF3ng'">
  <ng-container *nzModalContent>
    <div class="row g-2">
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'epi.field.fullName' | translate:'H\u1ECD t\xEAn' }} <span class="text-danger">*</span></label>
        <input nz-input [(ngModel)]="emergencyForm.emerName">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'epi.field.relationship' | translate:'Quan h\u1EC7' }}</label>
        <nz-select class="w-100" [(ngModel)]="emergencyForm.emerTypeCode" nzAllowClear [nzPlaceHolder]="'epi.select.chooseRelationship' | translate:'-- Ch\u1ECDn quan h\u1EC7 --'">
          <nz-option *ngFor="let c of emerTypeOptions()" [nzValue]="c.codeNo" [nzLabel]="c.codeName"></nz-option>
        </nz-select>
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'epi.field.phone' | translate:'\u0110i\u1EC7n tho\u1EA1i' }}</label>
        <input nz-input [(ngModel)]="emergencyForm.emerPhone">
      </div>
      <div class="col-md-6">
        <label class="form-label fw-semibold">{{ 'epi.field.email' | translate:'Email' }}</label>
        <input nz-input type="email" [(ngModel)]="emergencyForm.emerEmail">
      </div>
      <div class="col-12">
        <label class="form-label fw-semibold">{{ 'epi.field.address' | translate:'\u0110\u1ECBa ch\u1EC9' }}</label>
        <input nz-input [(ngModel)]="emergencyForm.emerAddress">
      </div>
      <div class="col-12">
        <label nz-checkbox class="mt-1" [(ngModel)]="emergencyForm.isEmergencyAddress">
          {{ 'epi.field.isPrimaryContact' | translate:'L\xE0 li\xEAn h\u1EC7 ch\xEDnh' }}
        </label>
      </div>
      <div class="col-12 mt-2">
        <nz-alert nzType="info" [nzMessage]="'epi.msg.applyNote' | translate:'Y\xEAu c\u1EA7u s\u1EBD \u0111\u01B0\u1EE3c g\u1EEDi \u0111\u1EBFn ng\u01B0\u1EDDi qu\u1EA3n l\xFD \u0111\u1EC3 x\xE9t duy\u1EC7t, kh\xF4ng c\u1EADp nh\u1EADt tr\u1EF1c ti\u1EBFp h\u1ED3 s\u01A1.'" class="mb-2"></nz-alert>
        <label class="form-label fw-semibold">{{ 'epi.field.attachFiles' | translate:'File \u0111\xEDnh k\xE8m' }}</label>
        <input #emergencyFileInput type="file" class="form-control form-control-sm" multiple
               accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg" (change)="onEmergencyFilesChange($event)">
        <div class="form-text">{{ 'epi.msg.uploadHint' | translate:'H\u1ED7 tr\u1EE3: PDF, Word, Excel, h\xECnh \u1EA3nh. C\xF3 th\u1EC3 ch\u1ECDn nhi\u1EC1u file.' }}</div>
      </div>
    </div>
  </ng-container>
</nz-modal>
`, styles: ["/* src/app/personal-info/personal-info.component.css */\n.pi-row-clickable {\n  cursor: pointer;\n}\n.pi-row-clickable:hover {\n  background: #fafafa;\n}\n/*# sourceMappingURL=personal-info.component.css.map */\n"] }]
  }], () => [{ type: PersonalInfoService }, { type: I18nService }, { type: NzMessageService }], { personalFileInputRef: [{
    type: ViewChild,
    args: ["personalFileInput"]
  }], familyFileInputRef: [{
    type: ViewChild,
    args: ["familyFileInput"]
  }], emergencyFileInputRef: [{
    type: ViewChild,
    args: ["emergencyFileInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PersonalInfoComponent, { className: "PersonalInfoComponent", filePath: "src/app/personal-info/personal-info.component.ts", lineNumber: 156 });
})();
export {
  PersonalInfoComponent
};
//# debugId=9e08ee89-65fe-5686-90f7-54d512dff05f
//# sourceMappingURL=chunk-6GEUA4UC.js.map
