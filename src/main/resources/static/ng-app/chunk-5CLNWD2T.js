import {
  NzMessageService
} from "./chunk-XWW7CXU6.js";
import {
  NzModalComponent,
  NzModalContentDirective,
  NzModalModule
} from "./chunk-OEYWCHIN.js";
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
  forkJoin,
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

// src/app/view-personal-info/view-personal-info.service.ts
var API_BASE = "/hrm/empinfo";
var ViewPersonalInfoService = class _ViewPersonalInfoService {
  constructor(http) {
    this.http = http;
  }
  http;
  searchEmployees(keyword) {
    let params = new HttpParams();
    if (keyword)
      params = params.set("keyword", keyword);
    return this.http.get(`${API_BASE}/api/employee/search`, { params, withCredentials: true });
  }
  getPersonalInfo(personId) {
    return this.http.get(`${API_BASE}/api/personalInfo`, {
      params: new HttpParams().set("personId", personId),
      withCredentials: true
    });
  }
  getAddresses(personId) {
    return this.http.get(`${API_BASE}/api/address`, {
      params: new HttpParams().set("personId", personId),
      withCredentials: true
    });
  }
  getFamilies(personId) {
    return this.http.get(`${API_BASE}/api/family`, {
      params: new HttpParams().set("personId", personId),
      withCredentials: true
    });
  }
  getEmergencies(personId) {
    return this.http.get(`${API_BASE}/api/emergency-address`, {
      params: new HttpParams().set("personId", personId),
      withCredentials: true
    });
  }
  static \u0275fac = function ViewPersonalInfoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewPersonalInfoService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewPersonalInfoService, factory: _ViewPersonalInfoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewPersonalInfoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/view-personal-info/view-personal-info.component.ts
function ViewPersonalInfoComponent_nz_alert_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-alert", 17);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("nzMessage", ctx_r0.errorMessage() ?? "");
  }
}
function ViewPersonalInfoComponent_ng_container_16_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 24)(2, "strong");
    \u0275\u0275element(3, "i", 31);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 18)(7, "table", 32)(8, "tbody")(9, "tr")(10, "th", 33);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 33);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 34);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 35);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "td");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "th", 36);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "td");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "tr")(36, "th", 22);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "td");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "th", 22);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "td");
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "th", 22);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "td");
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "th", 22);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "td");
    \u0275\u0275text(55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "th", 22);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "td");
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "translate");
    \u0275\u0275pipe(62, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "tr")(64, "th", 22);
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "td");
    \u0275\u0275text(68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "th", 22);
    \u0275\u0275text(70);
    \u0275\u0275pipe(71, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "td");
    \u0275\u0275text(73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "th", 22);
    \u0275\u0275text(75);
    \u0275\u0275pipe(76, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "td");
    \u0275\u0275text(78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "th", 22);
    \u0275\u0275text(80);
    \u0275\u0275pipe(81, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "td", 37);
    \u0275\u0275text(83);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "tr")(85, "th", 22);
    \u0275\u0275text(86);
    \u0275\u0275pipe(87, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "td");
    \u0275\u0275text(89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "th", 22);
    \u0275\u0275text(91);
    \u0275\u0275pipe(92, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "td");
    \u0275\u0275text(94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "th", 22);
    \u0275\u0275text(96);
    \u0275\u0275pipe(97, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "td");
    \u0275\u0275text(99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "th", 22);
    \u0275\u0275text(101);
    \u0275\u0275pipe(102, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "td", 37);
    \u0275\u0275text(104);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(105, "tr")(106, "th", 22);
    \u0275\u0275text(107);
    \u0275\u0275pipe(108, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "td");
    \u0275\u0275text(110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "th", 22);
    \u0275\u0275text(112);
    \u0275\u0275pipe(113, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "td");
    \u0275\u0275text(115);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "th", 22);
    \u0275\u0275text(117);
    \u0275\u0275pipe(118, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "td");
    \u0275\u0275text(120);
    \u0275\u0275pipe(121, "translate");
    \u0275\u0275pipe(122, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "th", 22);
    \u0275\u0275text(124);
    \u0275\u0275pipe(125, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "td", 37);
    \u0275\u0275text(127);
    \u0275\u0275pipe(128, "translate");
    \u0275\u0275pipe(129, "translate");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const info_r2 = ctx.ngIf;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 45, "epi.section.personal", "C\xE1 nh\xE2n"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 48, "epi.field.dob", "Ng\xE0y sinh"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatDisplayDate(info_r2.dob));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 51, "epi.field.gender", "Gi\u1EDBi t\xEDnh"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.sexName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 54, "epi.field.maritalStatus", "T\xECnh tr\u1EA1ng h\xF4n nh\xE2n"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.maritalStatusName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 57, "epi.field.ethnicity", "D\xE2n t\u1ED9c"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.nationName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(32, 60, "epi.field.houseTp", "H\u1ED9 kh\u1EA9u"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.houseTp);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(38, 63, "epi.field.homePhone", "\u0110T gia \u0111\xECnh"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.homePhone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(43, 66, "epi.field.companyPhone", "\u0110T c\xF4ng ty"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.companyPhone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 69, "epi.field.phone", "\u0110i\u1EC7n tho\u1EA1i"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.cellphone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(53, 72, "epi.field.residence", "Ch\u1ED7 \u1EDF"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.residentialDistinction);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(58, 75, "epi.field.existSingle", "EagleM"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.existSingle === "1" ? \u0275\u0275pipeBind2(61, 78, "common.yes", "Yes") : info_r2.existSingle === "0" ? \u0275\u0275pipeBind2(62, 81, "common.no", "No") : "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(66, 84, "epi.field.email", "Email"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(71, 87, "epi.field.companyEmail", "Email c\xF4ng ty"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.emailSecond);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(76, 90, "epi.field.nationality", "Qu\u1ED1c t\u1ECBch"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.nationalityName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(81, 93, "epi.field.idcardNo", "CMND"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.idcardNo);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(87, 96, "epi.field.idcardDate", "Ng\xE0y c\u1EA5p"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatDisplayDate(info_r2.idcardStartDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(92, 99, "epi.field.issuingAuthority", "N\u01A1i c\u1EA5p"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.issuingAuthority);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(97, 102, "epi.field.education", "Tr\xECnh \u0111\u1ED9 h\u1ECDc v\u1EA5n"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.finalDegreeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(102, 105, "epi.field.religion", "T\xF4n gi\xE1o"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.religion);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(108, 108, "epi.field.politicalStatus", "T\xECnh tr\u1EA1ng ch\xEDnh tr\u1ECB"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.politicalStatus);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(113, 111, "epi.field.weddingDate", "Ng\xE0y k\u1EBFt h\xF4n"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.formatDisplayDate(info_r2.weddingDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(118, 114, "epi.field.militaryService", "Tham gia qu\xE2n \u0111\u1ED9i"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.armyOrNot === "1" ? \u0275\u0275pipeBind2(121, 117, "common.yes", "Yes") : \u0275\u0275pipeBind2(122, 120, "common.no", "No"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(125, 123, "epi.field.disability", "Khuy\u1EBFt t\u1EADt"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(info_r2.obstacleOrNot === "1" ? \u0275\u0275pipeBind2(128, 126, "common.yes", "Yes") : \u0275\u0275pipeBind2(129, 129, "common.no", "No"));
  }
}
function ViewPersonalInfoComponent_ng_container_16_tr_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 38);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "epi.msg.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewPersonalInfoComponent_ng_container_16_tr_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
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
    const row_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.addressTypeName || row_r3.addressType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDisplayDate(row_r3.effectiveStartDate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.addressContent);
  }
}
function ViewPersonalInfoComponent_ng_container_16_tr_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 39);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, "epi.msg.noData", "Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"));
  }
}
function ViewPersonalInfoComponent_ng_container_16_tr_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
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
    const row_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.famTypeName || row_r4.famTypeCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.famName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.genderName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDisplayDate(row_r4.famBorndate));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.famPhone);
  }
}
function ViewPersonalInfoComponent_ng_container_16_tr_115_Template(rf, ctx) {
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
function ViewPersonalInfoComponent_ng_container_16_tr_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
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
    \u0275\u0275elementStart(11, "td", 41);
    \u0275\u0275element(12, "input", 42);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.emerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.emerTypeName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.emerPhone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.emerEmail);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.emerAddress);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", row_r5.isEmergencyAddress === "1" || row_r5.isEmergencyAddress === "Y");
  }
}
function ViewPersonalInfoComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 6)(2, "div", 18)(3, "table", 19)(4, "colgroup");
    \u0275\u0275element(5, "col", 20)(6, "col", 21)(7, "col", 20)(8, "col", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "tbody")(10, "tr")(11, "th", 22);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 22);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "tr")(22, "th", 22);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "td");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th", 22);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "td");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275template(32, ViewPersonalInfoComponent_ng_container_16_div_32_Template, 130, 132, "div", 23);
    \u0275\u0275elementStart(33, "div", 6)(34, "div", 24)(35, "strong");
    \u0275\u0275element(36, "i", 25);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 18)(40, "nz-table", 26, 0)(42, "thead")(43, "tr")(44, "th");
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "th");
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "th");
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(53, "tbody");
    \u0275\u0275template(54, ViewPersonalInfoComponent_ng_container_16_tr_54_Template, 4, 4, "tr", 14)(55, ViewPersonalInfoComponent_ng_container_16_tr_55_Template, 7, 3, "tr", 27);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(56, "div", 6)(57, "div", 24)(58, "strong");
    \u0275\u0275element(59, "i", 28);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 18)(63, "nz-table", 26, 1)(65, "thead")(66, "tr")(67, "th");
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
    \u0275\u0275template(83, ViewPersonalInfoComponent_ng_container_16_tr_83_Template, 4, 4, "tr", 14)(84, ViewPersonalInfoComponent_ng_container_16_tr_84_Template, 11, 5, "tr", 27);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(85, "div", 6)(86, "div", 24)(87, "strong");
    \u0275\u0275element(88, "i", 29);
    \u0275\u0275text(89);
    \u0275\u0275pipe(90, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "div", 18)(92, "nz-table", 26, 2)(94, "thead")(95, "tr")(96, "th");
    \u0275\u0275text(97);
    \u0275\u0275pipe(98, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "th");
    \u0275\u0275text(100);
    \u0275\u0275pipe(101, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "th");
    \u0275\u0275text(103);
    \u0275\u0275pipe(104, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "th");
    \u0275\u0275text(106);
    \u0275\u0275pipe(107, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "th");
    \u0275\u0275text(109);
    \u0275\u0275pipe(110, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "th", 30);
    \u0275\u0275text(112);
    \u0275\u0275pipe(113, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(114, "tbody");
    \u0275\u0275template(115, ViewPersonalInfoComponent_ng_container_16_tr_115_Template, 4, 4, "tr", 14)(116, ViewPersonalInfoComponent_ng_container_16_tr_116_Template, 13, 6, "tr", 27);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const emp_r6 = ctx.ngIf;
    const vpiAddrTable_r7 = \u0275\u0275reference(41);
    const vpiFamTable_r8 = \u0275\u0275reference(64);
    const vpiEmerTable_r9 = \u0275\u0275reference(93);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 41, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(emp_r6.empId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 44, "common.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(emp_r6.localName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 47, "common.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(emp_r6.deptName || emp_r6.deptNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(29, 50, "epi.field.position", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(emp_r6.position);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.personalInfo());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(38, 53, "epi.section.address", "Lo\u1EA1i \u0111\u1ECBa ch\u1EC9"));
    \u0275\u0275advance(3);
    \u0275\u0275property("nzData", ctx_r0.addressList())("nzLoading", ctx_r0.loading())("nzShowPagination", false);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(46, 56, "epi.field.addressType", "Lo\u1EA1i \u0111\u1ECBa ch\u1EC9"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(49, 59, "epi.field.effectiveDate", "Ng\xE0y hi\u1EC7u l\u1EF1c"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(52, 62, "epi.field.address", "\u0110\u1ECBa ch\u1EC9"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r0.loading() && vpiAddrTable_r7.data.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", vpiAddrTable_r7.data);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(61, 65, "epi.section.family", "Th\xF4ng tin gia \u0111\xECnh"));
    \u0275\u0275advance(3);
    \u0275\u0275property("nzData", ctx_r0.familyList())("nzLoading", ctx_r0.loading())("nzShowPagination", false);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(69, 68, "epi.field.relationship", "Quan h\u1EC7"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(72, 71, "epi.field.fullName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(75, 74, "epi.field.gender", "Gi\u1EDBi t\xEDnh"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(78, 77, "epi.field.dob", "Ng\xE0y sinh"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(81, 80, "epi.field.familyPhone", "\u0110i\u1EC7n tho\u1EA1i gia \u0111\xECnh"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r0.loading() && vpiFamTable_r8.data.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", vpiFamTable_r8.data);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(90, 83, "epi.section.emergency", "Ng\u01B0\u1EDDi li\xEAn h\u1EC7 kh\u1EA9n c\u1EA5p"));
    \u0275\u0275advance(3);
    \u0275\u0275property("nzData", ctx_r0.emergencyList())("nzLoading", ctx_r0.loading())("nzShowPagination", false);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(98, 86, "epi.field.fullName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(101, 89, "epi.field.relationship", "Quan h\u1EC7"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(104, 92, "epi.field.phone", "\u0110i\u1EC7n tho\u1EA1i"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(107, 95, "epi.field.email", "Email"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(110, 98, "epi.field.address", "\u0110\u1ECBa ch\u1EC9"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(113, 101, "epi.field.primaryContact", "Li\xEAn h\u1EC7 ch\xEDnh"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r0.loading() && vpiEmerTable_r9.data.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", vpiEmerTable_r9.data);
  }
}
function ViewPersonalInfoComponent_ng_container_19_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 53);
    \u0275\u0275listener("click", function ViewPersonalInfoComponent_ng_container_19_tr_33_Template_tr_click_0_listener() {
      const row_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectPickedEmployee(row_r12));
    });
    \u0275\u0275elementStart(1, "td", 41);
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
    const row_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r13 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r12.empId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r12.localName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r12.deptName || row_r12.deptNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r12.position);
  }
}
function ViewPersonalInfoComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "form", 43);
    \u0275\u0275listener("ngSubmit", function ViewPersonalInfoComponent_ng_container_19_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.pickerSearch());
    });
    \u0275\u0275elementStart(2, "div", 44)(3, "label", 45);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 46);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ViewPersonalInfoComponent_ng_container_19_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.pickerKeyword, $event) || (ctx_r0.pickerKeyword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function ViewPersonalInfoComponent_ng_container_19_Template_input_keydown_enter_6_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r0.pickerSearch());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 47)(9, "button", 48);
    \u0275\u0275element(10, "i", 12);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "nz-table", 49, 3)(15, "thead")(16, "tr")(17, "th", 50);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th", 51);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "th");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "th");
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "tbody");
    \u0275\u0275template(33, ViewPersonalInfoComponent_ng_container_19_tr_33_Template, 11, 5, "tr", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const vpiPickerTable_r14 = \u0275\u0275reference(14);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 13, "empSearch.field.keyword", "M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pickerKeyword);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind2(7, 16, "empSearch.placeholder.keyword", "Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn"));
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 19, "common.search", "T\xECm ki\u1EBFm"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("nzData", ctx_r0.pickerRows())("nzLoading", ctx_r0.pickerLoading())("nzPageSize", 10);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 22, "empSearch.col.no", "STT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 25, "common.empId", "M\xE3 nh\xE2n vi\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(25, 28, "common.empName", "H\u1ECD t\xEAn"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 31, "common.deptName", "Ph\xF2ng ban"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(31, 34, "epi.field.position", "Ch\u1EE9c v\u1EE5"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", vpiPickerTable_r14.data);
  }
}
var I18N_KEYS = [
  "essCommon.empInfo",
  "common.empId",
  "common.empName",
  "common.deptName",
  "epi.field.position",
  "common.close",
  "common.search",
  "common.loadFail",
  "tempEmp.pickEmp",
  "empSearch.title",
  "empSearch.field.keyword",
  "empSearch.placeholder.keyword",
  "empSearch.col.no",
  "epi.section.personal",
  "epi.section.address",
  "epi.section.family",
  "epi.section.emergency",
  "epi.field.dob",
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
  "epi.field.fullName",
  "epi.field.primaryContact",
  "epi.msg.noData",
  "common.yes",
  "common.no",
  "vpi.msg.selectEmployeeHint"
];
var ViewPersonalInfoComponent = class _ViewPersonalInfoComponent {
  constructor(api, i18n, message) {
    this.api = api;
    this.i18n = i18n;
    this.message = message;
  }
  api;
  i18n;
  message;
  selectedEmployee = signal(
    null,
    ...ngDevMode ? [{ debugName: "selectedEmployee" }] : (
      /* istanbul ignore next */
      []
    )
  );
  personalInfo = signal(
    null,
    ...ngDevMode ? [{ debugName: "personalInfo" }] : (
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
  addressList = signal(
    [],
    ...ngDevMode ? [{ debugName: "addressList" }] : (
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
  emergencyList = signal(
    [],
    ...ngDevMode ? [{ debugName: "emergencyList" }] : (
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
  pickerKeyword = "";
  ngOnInit() {
    this.i18n.loadKeys(I18N_KEYS);
  }
  /** ISO date ("yyyy-MM-dd..." từ LocalDate khi Jackson serialize) -> dd/MM/yyyy (xem CLAUDE.md). */
  formatDisplayDate(iso) {
    if (!iso || iso.length < 10)
      return "";
    const [y, m, d] = iso.substring(0, 10).split("-");
    return `${d}/${m}/${y}`;
  }
  // ==================== Modal chọn nhân viên ====================
  openPicker() {
    this.pickerKeyword = "";
    this.pickerRows.set([]);
    this.pickerVisible.set(true);
  }
  closePicker() {
    this.pickerVisible.set(false);
  }
  pickerSearch() {
    this.pickerLoading.set(true);
    this.api.searchEmployees(this.pickerKeyword.trim()).subscribe({
      next: (rows) => {
        this.pickerRows.set(rows ?? []);
        this.pickerLoading.set(false);
      },
      error: () => {
        this.pickerRows.set([]);
        this.pickerLoading.set(false);
        this.message.error(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
      }
    });
  }
  selectPickedEmployee(emp) {
    this.pickerVisible.set(false);
    this.selectedEmployee.set(emp);
    this.loadAll(emp.personId);
  }
  // ==================== Load dữ liệu ====================
  loadAll(personId) {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.personalInfo.set(null);
    this.addressList.set([]);
    this.familyList.set([]);
    this.emergencyList.set([]);
    forkJoin({
      personalInfo: this.api.getPersonalInfo(personId),
      addresses: this.api.getAddresses(personId),
      families: this.api.getFamilies(personId),
      emergencies: this.api.getEmergencies(personId)
    }).subscribe({
      next: ({ personalInfo, addresses, families, emergencies }) => {
        this.personalInfo.set(personalInfo);
        this.addressList.set(addresses ?? []);
        this.familyList.set(families ?? []);
        this.emergencyList.set(emergencies ?? []);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set(this.i18n.t("common.loadFail", "T\u1EA3i d\u1EEF li\u1EC7u th\u1EA5t b\u1EA1i!"));
        this.loading.set(false);
      }
    });
  }
  static \u0275fac = function ViewPersonalInfoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewPersonalInfoComponent)(\u0275\u0275directiveInject(ViewPersonalInfoService), \u0275\u0275directiveInject(I18nService), \u0275\u0275directiveInject(NzMessageService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ViewPersonalInfoComponent, selectors: [["app-view-personal-info"]], decls: 20, vars: 25, consts: [["vpiAddrTable", ""], ["vpiFamTable", ""], ["vpiEmerTable", ""], ["vpiPickerTable", ""], [1, "row"], [1, "col-12"], [1, "card", "mb-3"], [1, "card-body"], [1, "form-label", "fw-semibold"], [1, "input-group"], ["nz-input", "", "readonly", "", 3, "ngModel", "placeholder"], ["nz-button", "", "type", "button", 3, "click", "title"], [1, "bx", "bx-search"], ["nzType", "error", "class", "mb-3", 3, "nzMessage", 4, "ngIf"], [4, "ngIf"], ["nzWidth", "800px", 3, "nzOnCancel", "nzVisible", "nzTitle", "nzFooter"], [4, "nzModalContent"], ["nzType", "error", 1, "mb-3", 3, "nzMessage"], [1, "card-body", "p-0"], [1, "table", "table-bordered", "table-sm", "align-middle", "mb-0", 2, "table-layout", "fixed"], [2, "width", "15%"], [2, "width", "35%"], [1, "table-light", "text-center"], ["class", "card mb-3", 4, "ngIf"], [1, "card-header", "bg-light", "py-2"], [1, "bx", "bx-map", "me-1"], ["nzSize", "small", 3, "nzData", "nzLoading", "nzShowPagination"], [4, "ngFor", "ngForOf"], [1, "bx", "bx-group", "me-1"], [1, "bx", "bx-phone-call", "me-1"], [1, "text-center", 2, "width", "90px"], [1, "bx", "bx-id-card", "me-1"], [1, "table", "table-bordered", "table-sm", "align-middle", "mb-0"], [1, "table-light", "text-center", 2, "width", "150px"], [1, "table-light", "text-center", 2, "width", "170px"], [1, "table-light", "text-center", 2, "width", "100px"], [1, "table-light", "text-center", 2, "width", "80px"], ["colspan", "3"], ["colspan", "3", 1, "text-center", "text-muted"], ["colspan", "5", 1, "text-center", "text-muted"], ["colspan", "6", 1, "text-center", "text-muted"], [1, "text-center"], ["type", "checkbox", "disabled", "", 3, "checked"], [1, "row", "g-2", "align-items-end", "mb-3", 3, "ngSubmit"], [1, "col-md-8"], [1, "form-label"], ["nz-input", "", "name", "vpiPickerKeyword", 3, "ngModelChange", "keydown.enter", "ngModel", "placeholder"], [1, "col-md-4"], ["nz-button", "", "nzType", "primary", "type", "submit"], ["nzSize", "small", 3, "nzData", "nzLoading", "nzPageSize"], ["nzWidth", "60px", 1, "text-center"], ["nzWidth", "110px"], ["class", "vpi-row-clickable", 3, "click", 4, "ngFor", "ngForOf"], [1, "vpi-row-clickable", 3, "click"]], template: function ViewPersonalInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "label", 8);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 9);
      \u0275\u0275element(8, "input", 10);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275controlCreate();
      \u0275\u0275elementStart(10, "button", 11);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275listener("click", function ViewPersonalInfoComponent_Template_button_click_10_listener() {
        return ctx.openPicker();
      });
      \u0275\u0275element(12, "i", 12);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(15, ViewPersonalInfoComponent_nz_alert_15_Template, 1, 1, "nz-alert", 13)(16, ViewPersonalInfoComponent_ng_container_16_Template, 117, 104, "ng-container", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "nz-modal", 15);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275listener("nzOnCancel", function ViewPersonalInfoComponent_Template_nz_modal_nzOnCancel_17_listener() {
        return ctx.closePicker();
      });
      \u0275\u0275template(19, ViewPersonalInfoComponent_ng_container_19_Template, 34, 37, "ng-container", 16);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 10, "essCommon.empInfo", "Th\xF4ng tin nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngModel", ctx.selectedEmployee() ? ctx.selectedEmployee().empId + " - " + ctx.selectedEmployee().localName : "")("placeholder", \u0275\u0275pipeBind2(9, 13, "vpi.msg.selectEmployeeHint", "Vui l\xF2ng ch\u1ECDn nh\xE2n vi\xEAn \u0111\u1EC3 xem th\xF4ng tin c\xE1 nh\xE2n"));
      \u0275\u0275control();
      \u0275\u0275advance(2);
      \u0275\u0275property("title", \u0275\u0275pipeBind2(11, 16, "tempEmp.pickEmp", "Ch\u1ECDn nh\xE2n vi\xEAn"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 19, "tempEmp.pickEmp", "Ch\u1ECDn nh\xE2n vi\xEAn"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMessage());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedEmployee());
      \u0275\u0275advance();
      \u0275\u0275property("nzVisible", ctx.pickerVisible())("nzTitle", \u0275\u0275pipeBind2(18, 22, "empSearch.title", "T\xECm ki\u1EBFm nh\xE2n vi\xEAn"))("nzFooter", null);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, NzTableModule, NzTableComponent, NzTableCellDirective, NzThMeasureDirective, NzTheadComponent, NzTbodyComponent, NzTrDirective, NzInputModule, NzInputDirective, NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, NzWaveDirective, NzModalModule, NzModalComponent, NzModalContentDirective, NzAlertModule, NzAlertComponent, TranslatePipe], styles: ["\n.vpi-row-clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.vpi-row-clickable[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n/*# sourceMappingURL=view-personal-info.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewPersonalInfoComponent, [{
    type: Component,
    args: [{ selector: "app-view-personal-info", standalone: true, imports: [CommonModule, FormsModule, NzTableModule, NzInputModule, NzButtonModule, NzModalModule, NzAlertModule, TranslatePipe], template: `<div class="row">
  <div class="col-12">

    <!-- ===== Ch\u1ECDn nh\xE2n vi\xEAn ===== -->
    <div class="card mb-3">
      <div class="card-body">
        <label class="form-label fw-semibold">{{ 'essCommon.empInfo' | translate:'Th\xF4ng tin nh\xE2n vi\xEAn' }}</label>
        <div class="input-group">
          <input nz-input readonly
                 [ngModel]="selectedEmployee() ? (selectedEmployee()!.empId + ' - ' + selectedEmployee()!.localName) : ''"
                 [placeholder]="'vpi.msg.selectEmployeeHint' | translate:'Vui l\xF2ng ch\u1ECDn nh\xE2n vi\xEAn \u0111\u1EC3 xem th\xF4ng tin c\xE1 nh\xE2n'">
          <button nz-button type="button" [title]="'tempEmp.pickEmp' | translate:'Ch\u1ECDn nh\xE2n vi\xEAn'" (click)="openPicker()">
            <i class="bx bx-search"></i> {{ 'tempEmp.pickEmp' | translate:'Ch\u1ECDn nh\xE2n vi\xEAn' }}
          </button>
        </div>
      </div>
    </div>

    <nz-alert *ngIf="errorMessage()" nzType="error" [nzMessage]="errorMessage() ?? ''" class="mb-3"></nz-alert>

    <ng-container *ngIf="selectedEmployee() as emp">

      <!-- ===== Th\xF4ng tin nh\xE2n vi\xEAn ===== -->
      <div class="card mb-3">
        <div class="card-body p-0">
          <table class="table table-bordered table-sm align-middle mb-0" style="table-layout:fixed;">
            <colgroup>
              <col style="width:15%;"><col style="width:35%;"><col style="width:15%;"><col style="width:35%;">
            </colgroup>
            <tbody>
              <tr>
                <th class="table-light text-center">{{ 'common.empId' | translate:'M\xE3 nh\xE2n vi\xEAn' }}</th>
                <td>{{ emp.empId }}</td>
                <th class="table-light text-center">{{ 'common.empName' | translate:'H\u1ECD t\xEAn' }}</th>
                <td>{{ emp.localName }}</td>
              </tr>
              <tr>
                <th class="table-light text-center">{{ 'common.deptName' | translate:'Ph\xF2ng ban' }}</th>
                <td>{{ emp.deptName || emp.deptNo }}</td>
                <th class="table-light text-center">{{ 'epi.field.position' | translate:'Ch\u1EE9c v\u1EE5' }}</th>
                <td>{{ emp.position }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- ===== C\xE1 nh\xE2n ===== -->
      <div class="card mb-3" *ngIf="personalInfo() as info">
        <div class="card-header bg-light py-2">
          <strong><i class="bx bx-id-card me-1"></i>{{ 'epi.section.personal' | translate:'C\xE1 nh\xE2n' }}</strong>
        </div>
        <div class="card-body p-0">
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
                <th class="table-light text-center">{{ 'epi.field.idcardNo' | translate:'CMND' }}</th>
                <td colspan="3">{{ info.idcardNo }}</td>
              </tr>
              <tr>
                <th class="table-light text-center">{{ 'epi.field.idcardDate' | translate:'Ng\xE0y c\u1EA5p' }}</th>
                <td>{{ formatDisplayDate(info.idcardStartDate) }}</td>
                <th class="table-light text-center">{{ 'epi.field.issuingAuthority' | translate:'N\u01A1i c\u1EA5p' }}</th>
                <td>{{ info.issuingAuthority }}</td>
                <th class="table-light text-center">{{ 'epi.field.education' | translate:'Tr\xECnh \u0111\u1ED9 h\u1ECDc v\u1EA5n' }}</th>
                <td>{{ info.finalDegreeName }}</td>
                <th class="table-light text-center">{{ 'epi.field.religion' | translate:'T\xF4n gi\xE1o' }}</th>
                <td colspan="3">{{ info.religion }}</td>
              </tr>
              <tr>
                <th class="table-light text-center">{{ 'epi.field.politicalStatus' | translate:'T\xECnh tr\u1EA1ng ch\xEDnh tr\u1ECB' }}</th>
                <td>{{ info.politicalStatus }}</td>
                <th class="table-light text-center">{{ 'epi.field.weddingDate' | translate:'Ng\xE0y k\u1EBFt h\xF4n' }}</th>
                <td>{{ formatDisplayDate(info.weddingDate) }}</td>
                <th class="table-light text-center">{{ 'epi.field.militaryService' | translate:'Tham gia qu\xE2n \u0111\u1ED9i' }}</th>
                <td>{{ info.armyOrNot === '1' ? ('common.yes' | translate:'Yes') : ('common.no' | translate:'No') }}</td>
                <th class="table-light text-center">{{ 'epi.field.disability' | translate:'Khuy\u1EBFt t\u1EADt' }}</th>
                <td colspan="3">{{ info.obstacleOrNot === '1' ? ('common.yes' | translate:'Yes') : ('common.no' | translate:'No') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- ===== Lo\u1EA1i \u0111\u1ECBa ch\u1EC9 ===== -->
      <div class="card mb-3">
        <div class="card-header bg-light py-2">
          <strong><i class="bx bx-map me-1"></i>{{ 'epi.section.address' | translate:'Lo\u1EA1i \u0111\u1ECBa ch\u1EC9' }}</strong>
        </div>
        <div class="card-body p-0">
          <nz-table [nzData]="addressList()" [nzLoading]="loading()" [nzShowPagination]="false" nzSize="small" #vpiAddrTable>
            <thead>
              <tr>
                <th>{{ 'epi.field.addressType' | translate:'Lo\u1EA1i \u0111\u1ECBa ch\u1EC9' }}</th>
                <th>{{ 'epi.field.effectiveDate' | translate:'Ng\xE0y hi\u1EC7u l\u1EF1c' }}</th>
                <th>{{ 'epi.field.address' | translate:'\u0110\u1ECBa ch\u1EC9' }}</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngIf="!loading() && vpiAddrTable.data.length === 0">
                <td colspan="3" class="text-center text-muted">{{ 'epi.msg.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
              </tr>
              <tr *ngFor="let row of vpiAddrTable.data">
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
        <div class="card-header bg-light py-2">
          <strong><i class="bx bx-group me-1"></i>{{ 'epi.section.family' | translate:'Th\xF4ng tin gia \u0111\xECnh' }}</strong>
        </div>
        <div class="card-body p-0">
          <nz-table [nzData]="familyList()" [nzLoading]="loading()" [nzShowPagination]="false" nzSize="small" #vpiFamTable>
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
              <tr *ngIf="!loading() && vpiFamTable.data.length === 0">
                <td colspan="5" class="text-center text-muted">{{ 'epi.msg.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
              </tr>
              <tr *ngFor="let row of vpiFamTable.data">
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
        <div class="card-header bg-light py-2">
          <strong><i class="bx bx-phone-call me-1"></i>{{ 'epi.section.emergency' | translate:'Ng\u01B0\u1EDDi li\xEAn h\u1EC7 kh\u1EA9n c\u1EA5p' }}</strong>
        </div>
        <div class="card-body p-0">
          <nz-table [nzData]="emergencyList()" [nzLoading]="loading()" [nzShowPagination]="false" nzSize="small" #vpiEmerTable>
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
              <tr *ngIf="!loading() && vpiEmerTable.data.length === 0">
                <td colspan="6" class="text-center text-muted">{{ 'epi.msg.noData' | translate:'Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u' }}</td>
              </tr>
              <tr *ngFor="let row of vpiEmerTable.data">
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

    </ng-container>

  </div>
</div>

<!-- ===== Modal ch\u1ECDn nh\xE2n vi\xEAn ===== -->
<nz-modal [nzVisible]="pickerVisible()" [nzTitle]="'empSearch.title' | translate:'T\xECm ki\u1EBFm nh\xE2n vi\xEAn'"
          nzWidth="800px" (nzOnCancel)="closePicker()" [nzFooter]="null">
  <ng-container *nzModalContent>
    <form class="row g-2 align-items-end mb-3" (ngSubmit)="pickerSearch()">
      <div class="col-md-8">
        <label class="form-label">{{ 'empSearch.field.keyword' | translate:'M\xE3 nh\xE2n vi\xEAn / H\u1ECD t\xEAn' }}</label>
        <input nz-input [(ngModel)]="pickerKeyword" name="vpiPickerKeyword"
               [placeholder]="'empSearch.placeholder.keyword' | translate:'Nh\u1EADp m\xE3 ho\u1EB7c h\u1ECD t\xEAn'"
               (keydown.enter)="$event.preventDefault(); pickerSearch()">
      </div>
      <div class="col-md-4">
        <button nz-button nzType="primary" type="submit">
          <i class="bx bx-search"></i> {{ 'common.search' | translate:'T\xECm ki\u1EBFm' }}
        </button>
      </div>
    </form>

    <nz-table [nzData]="pickerRows()" [nzLoading]="pickerLoading()" [nzPageSize]="10" nzSize="small" #vpiPickerTable>
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
        <tr *ngFor="let row of vpiPickerTable.data; let i = index" class="vpi-row-clickable" (click)="selectPickedEmployee(row)">
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
`, styles: ["/* src/app/view-personal-info/view-personal-info.component.css */\n.vpi-row-clickable {\n  cursor: pointer;\n}\n.vpi-row-clickable:hover {\n  background: #fafafa;\n}\n/*# sourceMappingURL=view-personal-info.component.css.map */\n"] }]
  }], () => [{ type: ViewPersonalInfoService }, { type: I18nService }, { type: NzMessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ViewPersonalInfoComponent, { className: "ViewPersonalInfoComponent", filePath: "src/app/view-personal-info/view-personal-info.component.ts", lineNumber: 52 });
})();
export {
  ViewPersonalInfoComponent
};
//# debugId=90c40df8-109c-58a9-b49e-13173908d30a
//# sourceMappingURL=chunk-5CLNWD2T.js.map
