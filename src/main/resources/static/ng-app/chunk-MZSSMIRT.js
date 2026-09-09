import {
  HttpClient,
  HttpParams,
  Injectable,
  Pipe,
  __spreadValues,
  firstValueFrom,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵinject
} from "./chunk-VTW5U2M5.js";

// src/app/i18n/i18n.service.ts
var MESSAGES_URL = "/api/i18n/messages";
var I18nService = class _I18nService {
  constructor(http) {
    this.http = http;
  }
  http;
  messages = signal(
    {},
    ...ngDevMode ? [{ debugName: "messages" }] : (
      /* istanbul ignore next */
      []
    )
  );
  loadedKeys = /* @__PURE__ */ new Set();
  pendingLoad = null;
  /** Đọc text hiện có theo key - trả về fallback (mặc định tiếng Việt) nếu chưa tải xong hoặc không có key. */
  t(key, fallback) {
    return this.messages()[key] ?? fallback ?? key;
  }
  /** Tải trước danh sách key cho 1 trang - gọi trong ngOnInit của component. */
  async loadKeys(keys) {
    const missing = keys.filter((k) => !this.loadedKeys.has(k));
    if (missing.length === 0)
      return;
    missing.forEach((k) => this.loadedKeys.add(k));
    const params = new HttpParams().set("keys", missing.join(","));
    try {
      const result = await firstValueFrom(this.http.get(MESSAGES_URL, { params, withCredentials: true }));
      this.messages.update((cur) => __spreadValues(__spreadValues({}, cur), result));
    } catch {
    }
  }
  static \u0275fac = function I18nService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _I18nService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _I18nService, factory: _I18nService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(I18nService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/i18n/translate.pipe.ts
var TranslatePipe = class _TranslatePipe {
  i18n = inject(I18nService);
  transform(key, fallback) {
    return this.i18n.t(key, fallback);
  }
  static \u0275fac = function TranslatePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TranslatePipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "translate", type: _TranslatePipe, pure: false });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslatePipe, [{
    type: Pipe,
    args: [{ name: "translate", standalone: true, pure: false }]
  }], null, null);
})();

export {
  I18nService,
  TranslatePipe
};
//# debugId=8a505f6f-e3b8-5698-ba26-1365f40b172d
//# sourceMappingURL=chunk-MZSSMIRT.js.map
