import {
  HttpClient,
  Injectable,
  __spreadProps,
  __spreadValues,
  firstValueFrom,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTW5U2M5.js";

// src/app/shell/lock-screen.service.ts
var VERIFY_PASSWORD_URL = "/password/api/verify-old-password";
var IDLE_TIMEOUT_MS = 30 * 60 * 1e3;
var ACTIVITY_EVENTS = ["mousemove", "keydown", "click", "scroll", "touchstart", "wheel"];
var STORAGE_KEY = "hr.lockScreen.state";
function readPersistedState() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw)
      return { locked: false, auto: false };
    const parsed = JSON.parse(raw);
    return { locked: !!parsed.locked, auto: !!parsed.auto };
  } catch {
    return { locked: false, auto: false };
  }
}
function clearLockScreenState() {
  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch {
  }
}
var LockScreenService = class _LockScreenService {
  constructor(http) {
    this.http = http;
  }
  http;
  persisted = readPersistedState();
  locked = signal(
    this.persisted.locked,
    ...ngDevMode ? [{ debugName: "locked" }] : (
      /* istanbul ignore next */
      []
    )
  );
  autoLocked = signal(
    this.persisted.auto,
    ...ngDevMode ? [{ debugName: "autoLocked" }] : (
      /* istanbul ignore next */
      []
    )
  );
  idleTimer = null;
  started = false;
  onActivity = () => {
    if (!this.locked())
      this.resetIdleTimer();
  };
  start() {
    if (this.started)
      return;
    this.started = true;
    ACTIVITY_EVENTS.forEach((evt) => document.addEventListener(evt, this.onActivity, { passive: true }));
    if (!this.locked())
      this.resetIdleTimer();
  }
  stop() {
    if (!this.started)
      return;
    this.started = false;
    ACTIVITY_EVENTS.forEach((evt) => document.removeEventListener(evt, this.onActivity));
    this.clearIdleTimer();
  }
  lock(auto = false) {
    if (this.locked())
      return;
    this.clearIdleTimer();
    this.autoLocked.set(auto);
    this.locked.set(true);
    this.persistState(true, auto);
  }
  async unlock(password) {
    const body = new URLSearchParams();
    body.set("oldPassword", password);
    try {
      const res = await firstValueFrom(this.http.post(VERIFY_PASSWORD_URL, body.toString(), {
        withCredentials: true,
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      }));
      if (res.success) {
        this.locked.set(false);
        this.persistState(false, false);
        this.resetIdleTimer();
      }
      return res;
    } catch {
      return { success: false, message: "C\xF3 l\u1ED7i x\u1EA3y ra, vui l\xF2ng th\u1EED l\u1EA1i" };
    }
  }
  resetIdleTimer() {
    this.clearIdleTimer();
    this.idleTimer = setTimeout(() => this.lock(true), IDLE_TIMEOUT_MS);
  }
  clearIdleTimer() {
    if (this.idleTimer) {
      clearTimeout(this.idleTimer);
      this.idleTimer = null;
    }
  }
  persistState(locked, auto) {
    try {
      if (locked) {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ locked, auto }));
      } else {
        sessionStorage.removeItem(STORAGE_KEY);
      }
    } catch {
    }
  }
  static \u0275fac = function LockScreenService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LockScreenService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LockScreenService, factory: _LockScreenService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockScreenService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/auth/auth.service.ts
var CSRF_TOKEN_URL = "/auth/api/csrf-token";
var LOGIN_URL = "/auth/api/login";
var ME_URL = "/auth/api/me";
var MENU_URL = "/auth/api/menu";
var CHANGE_FIRST_PASSWORD_URL = "/api/change-first-password";
var XSRF_PRIME_URL = "/api/csrf-token";
var AuthService = class _AuthService {
  constructor(http) {
    this.http = http;
  }
  http;
  isAuthenticated = signal(
    false,
    ...ngDevMode ? [{ debugName: "isAuthenticated" }] : (
      /* istanbul ignore next */
      []
    )
  );
  currentUser = signal(
    null,
    ...ngDevMode ? [{ debugName: "currentUser" }] : (
      /* istanbul ignore next */
      []
    )
  );
  csrfToken = null;
  async ensureCsrfToken() {
    if (this.csrfToken)
      return this.csrfToken;
    const res = await firstValueFrom(this.http.get(CSRF_TOKEN_URL, { withCredentials: true }));
    this.csrfToken = res.csrfToken;
    return this.csrfToken;
  }
  async login(req) {
    const csrfToken = await this.ensureCsrfToken();
    const res = await firstValueFrom(this.http.post(LOGIN_URL, req, {
      withCredentials: true,
      headers: { "X-CSRF-TOKEN": csrfToken }
    }));
    if (res.success) {
      this.isAuthenticated.set(true);
      clearLockScreenState();
      await this.primeXsrfCookie();
    }
    return res;
  }
  /** Gọi 1 lần để đảm bảo cookie XSRF-TOKEN đã tồn tại TRƯỚC khi bất kỳ trang nào gọi API ghi dữ liệu
   *  đầu tiên - nếu không, request ghi dữ liệu đầu tiên sẽ luôn bị CsrfFilter chặn 403 (xem
   *  AuthController.primeCsrfCookie()). Lỗi khi gọi không chặn luồng đăng nhập/khôi phục phiên - cookie
   *  vẫn có thể được tạo bù bởi chính request ghi dữ liệu đầu tiên như hành vi cũ. */
  async primeXsrfCookie() {
    try {
      await firstValueFrom(this.http.get(XSRF_PRIME_URL, { withCredentials: true }));
    } catch {
    }
  }
  /**
   * Kiểm tra phiên đăng nhập hiện tại qua session cookie (không dựa vào cờ in-memory) -
   * dùng cho authGuard để xác thực đúng cả khi Angular vừa mới load lại (F5).
   */
  async checkSession() {
    try {
      const user = await firstValueFrom(this.http.get(ME_URL, { withCredentials: true }));
      this.currentUser.set(user);
      this.isAuthenticated.set(true);
      await this.primeXsrfCookie();
      return true;
    } catch {
      this.currentUser.set(null);
      this.isAuthenticated.set(false);
      return false;
    }
  }
  /** sysType mặc định '1' (ESS) - AppShellComponent truyền '0' khi route đang active thuộc khu vực
   *  HR Management System, để sidebar lấy đúng bộ menu theo SY_ROLE_GROUP.SYS_TYPE tương ứng. */
  getMenu(sysType = "1") {
    return firstValueFrom(this.http.get(MENU_URL, { params: { sysType }, withCredentials: true }));
  }
  /** Đổi mật khẩu lần đầu (bắt buộc khi password chưa mã hóa) - dùng lại nguyên POST /api/change-first-password. */
  async changeFirstPassword(newPassword, confirmPassword) {
    const body = new URLSearchParams();
    body.set("newPassword", newPassword);
    body.set("confirmPassword", confirmPassword);
    const res = await firstValueFrom(this.http.post(CHANGE_FIRST_PASSWORD_URL, body.toString(), {
      withCredentials: true,
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    }));
    if (res.success) {
      const user = this.currentUser();
      if (user)
        this.currentUser.set(__spreadProps(__spreadValues({}, user), { requirePasswordChange: false }));
    }
    return res;
  }
  logout() {
    this.isAuthenticated.set(false);
    this.currentUser.set(null);
    this.csrfToken = null;
    clearLockScreenState();
    window.location.href = "/logout";
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  LockScreenService,
  AuthService
};
//# debugId=e62d9b7b-af68-5a84-b797-a561723ce258
//# sourceMappingURL=chunk-NF2IPJNZ.js.map
