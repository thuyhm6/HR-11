import {
  HttpClient,
  HttpParams,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTW5U2M5.js";

// src/app/view-compose-org/view-compose-org.service.ts
var API_BASE = "/org/api";
var ViewComposeOrgService = class _ViewComposeOrgService {
  constructor(http) {
    this.http = http;
  }
  http;
  getResumeDropdown() {
    return this.http.get(`${API_BASE}/resume/dropdown`, { withCredentials: true });
  }
  getOrgStructure(resumeNo) {
    return this.http.get(`${API_BASE}/compose/structure`, {
      params: new HttpParams().set("resumeNo", resumeNo),
      withCredentials: true
    });
  }
  getEmployees(resumeNo, deptNo) {
    return this.http.get(`${API_BASE}/compose/employees`, {
      params: new HttpParams().set("resumeNo", resumeNo).set("deptNo", deptNo),
      withCredentials: true
    });
  }
  saveOrgInfo(orgInfo, isNew) {
    return this.http.post(`${API_BASE}/compose/save`, orgInfo, {
      params: new HttpParams().set("isNew", String(isNew)),
      withCredentials: true
    });
  }
  deleteOrgInfo(resumeNo, deptNo) {
    return this.http.post(`${API_BASE}/compose/delete`, null, {
      params: new HttpParams().set("resumeNo", resumeNo).set("deptNo", deptNo),
      withCredentials: true
    });
  }
  transferEmployees(payload) {
    return this.http.post(`${API_BASE}/compose/transfer`, payload, { withCredentials: true });
  }
  /** POST /org/api/costCenter/list - controller nhận Map<String,String> nên gửi object rỗng để lấy full
   *  danh sách (codeNo/codeName rỗng nghĩa là không lọc). */
  getCostCenters() {
    return this.http.post("/org/api/costCenter/list", {}, { withCredentials: true });
  }
  static \u0275fac = function ViewComposeOrgService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewComposeOrgService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewComposeOrgService, factory: _ViewComposeOrgService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewComposeOrgService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ViewComposeOrgService
};
//# debugId=72674fcd-fe3a-57ce-aec2-ecf48563cddd
//# sourceMappingURL=chunk-JDNGCHNT.js.map
