import {
  HttpClient,
  HttpParams,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTW5U2M5.js";

// src/app/change-user/change-user.service.ts
var ChangeUserService = class _ChangeUserService {
  constructor(http) {
    this.http = http;
  }
  http;
  searchEmployees(params) {
    let httpParams = new HttpParams();
    if (params.keyword)
      httpParams = httpParams.set("keyword", params.keyword);
    if (params.empOffice)
      httpParams = httpParams.set("empOffice", params.empOffice);
    for (const code of params.deptCodes) {
      httpParams = httpParams.append("deptCodes", code);
    }
    return this.http.get("/hrm/empinfo/api/employee/search", {
      params: httpParams,
      withCredentials: true
    });
  }
  getAuthorizedDepartments() {
    return this.http.get("/ar/attendanceSettings/api/arSupervisor/authorized-departments", {
      withCredentials: true
    });
  }
  getCodeList(parentCodeNo) {
    return this.http.get("/sys/api/getCode/list", {
      params: new HttpParams().set("parentCodeNo", parentCodeNo),
      withCredentials: true
    });
  }
  /** Gọi lại nguyên POST /ess/change/api/changeUser (form-urlencoded, giống ajax jQuery bản gốc). */
  changeUser(personId) {
    const body = new URLSearchParams();
    body.set("personId", personId);
    return this.http.post("/ess/change/api/changeUser", body.toString(), {
      withCredentials: true,
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    });
  }
  static \u0275fac = function ChangeUserService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChangeUserService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChangeUserService, factory: _ChangeUserService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChangeUserService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ChangeUserService
};
//# debugId=815b3602-a662-5d0a-869f-621772242027
//# sourceMappingURL=chunk-L26I55F6.js.map
