import {
  HttpClient,
  HttpParams,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTW5U2M5.js";

// src/app/view-ar-item-param-list/view-ar-item-param-list.service.ts
var API_BASE = "/ar/attendanceSettings/api/arItemParam";
var ViewArItemParamListService = class _ViewArItemParamListService {
  constructor(http) {
    this.http = http;
  }
  http;
  search(itemNo) {
    let httpParams = new HttpParams();
    if (itemNo)
      httpParams = httpParams.set("itemNo", itemNo);
    return this.http.get(API_BASE, { params: httpParams, withCredentials: true });
  }
  save(payload) {
    return this.http.post(`${API_BASE}/save`, payload, { withCredentials: true });
  }
  delete(arParamNo) {
    return this.http.delete(`${API_BASE}/delete/${arParamNo}`, { withCredentials: true });
  }
  /** Combo chọn hạng mục - dùng lại nguyên API danh sách hạng mục ở trang viewArItem
   *  (GET /ar/attendanceSettings/api/arItem, xem ViewArItemService). */
  getItemOptions() {
    return this.http.get("/ar/attendanceSettings/api/arItem", { withCredentials: true });
  }
  static \u0275fac = function ViewArItemParamListService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ViewArItemParamListService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ViewArItemParamListService, factory: _ViewArItemParamListService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ViewArItemParamListService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ViewArItemParamListService
};
//# debugId=6854e887-b8b1-5c68-9813-e9952a5d7b89
//# sourceMappingURL=chunk-C7O5SMUP.js.map
