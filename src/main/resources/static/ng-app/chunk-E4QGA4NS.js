import {
  HttpClient,
  HttpParams,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTW5U2M5.js";

// src/app/contract-info-list/contract-info-list.service.ts
var API_BASE = "/hrm/contractInfo";
var ContractInfoListService = class _ContractInfoListService {
  constructor(http) {
    this.http = http;
  }
  http;
  getPageList(payload) {
    return this.http.post(`${API_BASE}/contracts`, payload, {
      withCredentials: true
    });
  }
  getContract(contractNo) {
    return this.http.get(`${API_BASE}/api/contract/${encodeURIComponent(contractNo)}`, {
      withCredentials: true
    });
  }
  addContract(payload) {
    return this.http.post(`${API_BASE}/api/contract/add`, payload, { withCredentials: true });
  }
  updateContract(payload) {
    return this.http.post(`${API_BASE}/api/contract/update`, payload, { withCredentials: true });
  }
  deleteContract(contractNo) {
    return this.http.delete(`${API_BASE}/api/contract/delete/${encodeURIComponent(contractNo)}`, {
      withCredentials: true
    });
  }
  /** Dùng chung endpoint tìm kiếm nhân viên mà changeUser.html (bản gốc) và ChangeUserComponent/
   *  ViewTempEmpInfoListComponent đang dùng - cho modal chọn nhân viên khi thêm mới hợp đồng. */
  searchEmployees(keyword) {
    let params = new HttpParams();
    if (keyword)
      params = params.set("keyword", keyword);
    return this.http.get("/hrm/empinfo/api/employee/search", {
      params,
      withCredentials: true
    });
  }
  static \u0275fac = function ContractInfoListService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContractInfoListService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ContractInfoListService, factory: _ContractInfoListService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContractInfoListService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ContractInfoListService
};
//# debugId=fef82b22-0d04-51e3-87f4-d58b0e55464a
//# sourceMappingURL=chunk-E4QGA4NS.js.map
