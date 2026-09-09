import {
  HttpClient,
  HttpParams,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTW5U2M5.js";

// src/app/manage-emp-position-info/manage-emp-position-info.service.ts
var API_BASE = "/ess/viewDept/api/manageEmpPositionInfo";
var ManageEmpPositionInfoService = class _ManageEmpPositionInfoService {
  constructor(http) {
    this.http = http;
  }
  http;
  getList(params) {
    let httpParams = new HttpParams();
    for (const [key, value] of Object.entries(params)) {
      if (value)
        httpParams = httpParams.set(key, value);
    }
    return this.http.get(`${API_BASE}/list`, { params: httpParams, withCredentials: true });
  }
  getInsideExperience(personId) {
    return this.http.get(`${API_BASE}/insideExperience`, {
      params: new HttpParams().set("personId", personId),
      withCredentials: true
    });
  }
  getCodeList(parentCodeNo) {
    return this.http.get("/sys/api/getCode/list", {
      params: new HttpParams().set("parentCodeNo", parentCodeNo),
      withCredentials: true
    });
  }
  getAuthorizedDepartments() {
    return this.http.get("/ar/attendanceSettings/api/arSupervisor/authorized-departments", {
      withCredentials: true
    });
  }
  static \u0275fac = function ManageEmpPositionInfoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ManageEmpPositionInfoService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ManageEmpPositionInfoService, factory: _ManageEmpPositionInfoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManageEmpPositionInfoService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ManageEmpPositionInfoService
};
//# debugId=2c5ac9eb-0956-5b2e-889d-54f9ca46525f
//# sourceMappingURL=chunk-GZZPPOTI.js.map
