import {
  NavigationEnd,
  Router
} from "./chunk-2GOAB54B.js";
import {
  Injectable,
  __spreadProps,
  __spreadValues,
  computed,
  filter,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-VTW5U2M5.js";

// src/app/shell/tab.service.ts
var HOME_TAB = { path: "/dashboard", title: "Trang ch\u1EE7", closable: false, kind: "route", reloadToken: 0 };
var TabService = class _TabService {
  constructor(router) {
    this.router = router;
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e) => {
      this.activePath.set(e.urlAfterRedirects);
    });
  }
  router;
  tabs = signal(
    [HOME_TAB],
    ...ngDevMode ? [{ debugName: "tabs" }] : (
      /* istanbul ignore next */
      []
    )
  );
  activePath = signal(
    HOME_TAB.path,
    ...ngDevMode ? [{ debugName: "activePath" }] : (
      /* istanbul ignore next */
      []
    )
  );
  externalTabs = computed(
    () => this.tabs().filter((t) => t.kind === "external"),
    ...ngDevMode ? [{ debugName: "externalTabs" }] : (
      /* istanbul ignore next */
      []
    )
  );
  activeTabKind = computed(
    () => {
      const active = this.tabs().find((t) => t.path === this.activePath());
      return active?.kind ?? "route";
    },
    ...ngDevMode ? [{ debugName: "activeTabKind" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** menuNo của tab đang active - AppShellComponent theo dõi giá trị này để đồng bộ lại menu ngữ cảnh
   *  trên topbar mỗi khi người dùng chuyển qua lại giữa các tab đã mở (không chỉ lúc mới bấm menu). */
  activeMenuNo = computed(
    () => this.tabs().find((t) => t.path === this.activePath())?.menuNo ?? null,
    ...ngDevMode ? [{ debugName: "activeMenuNo" }] : (
      /* istanbul ignore next */
      []
    )
  );
  /** Mở tab từ menu - nếu tab 'external' đã mở sẵn thì load lại nội dung mới nhất (giống hành vi gốc).
   *  Giữ nguyên query string (nếu có) trong key của tab 'route' - 1 số trang đọc tham số bắt buộc từ
   *  URL (vd evsType ở RegPersonalTargetComponent), mất tham số này khi so khớp tab sẽ khiến trang
   *  không tải được dữ liệu (xem giải thích ở AppShellComponent.angularRouteFor). */
  openTab(path, title, kind, menuNo) {
    const key = path;
    const existing = this.tabs().find((t) => t.path === key);
    if (!existing) {
      this.tabs.update((tabs) => [...tabs, { path: key, title, closable: true, kind, reloadToken: 0, menuNo }]);
    } else if (kind === "external") {
      this.tabs.update((tabs) => tabs.map((t) => t.path === key ? __spreadProps(__spreadValues({}, t), { reloadToken: t.reloadToken + 1, menuNo: menuNo ?? t.menuNo }) : t));
    } else if (menuNo && menuNo !== existing.menuNo) {
      this.tabs.update((tabs) => tabs.map((t) => t.path === key ? __spreadProps(__spreadValues({}, t), { menuNo }) : t));
    }
    this.switchTab(key);
  }
  /**
   * Chuyển sang tab đã mở sẵn - KHÔNG load lại nội dung (giống bấm vào tab-header ở bản gốc).
   * dùng skipLocationChange để router điều hướng nội bộ (giữ state, kích hoạt component) mà KHÔNG
   * ghi URL của route lên thanh địa chỉ trình duyệt - đồng nhất với hành vi tab 'external'.
   */
  switchTab(path) {
    const tab = this.tabs().find((t) => t.path === path);
    if (!tab)
      return;
    if (tab.kind === "route") {
      this.router.navigateByUrl(tab.path, { skipLocationChange: true });
    } else {
      this.activePath.set(tab.path);
    }
  }
  closeTab(path) {
    const tabs = this.tabs();
    const idx = tabs.findIndex((t) => t.path === path);
    if (idx === -1 || !tabs[idx].closable)
      return;
    const next = tabs.filter((t) => t.path !== path);
    this.tabs.set(next);
    if (this.activePath() === path) {
      const fallback = next[Math.max(0, idx - 1)] ?? HOME_TAB;
      this.switchTab(fallback.path);
    }
  }
  /** Đóng tất cả tab (trừ tab Trang chủ không đóng được). */
  closeAllTabs() {
    const activeClosing = this.tabs().find((t) => t.path === this.activePath())?.closable ?? false;
    this.tabs.update((tabs) => tabs.filter((t) => !t.closable));
    if (activeClosing)
      this.switchTab(HOME_TAB.path);
  }
  /** Đóng tất cả tab (đóng được) nằm bên trái tab `path`. */
  closeTabsToLeft(path) {
    const tabs = this.tabs();
    const idx = tabs.findIndex((t) => t.path === path);
    if (idx <= 0)
      return;
    const toClose = new Set(tabs.slice(0, idx).filter((t) => t.closable).map((t) => t.path));
    if (toClose.size === 0)
      return;
    this.tabs.set(tabs.filter((t) => !toClose.has(t.path)));
    if (toClose.has(this.activePath()))
      this.switchTab(path);
  }
  /** Đóng tất cả tab (đóng được) nằm bên phải tab `path`. */
  closeTabsToRight(path) {
    const tabs = this.tabs();
    const idx = tabs.findIndex((t) => t.path === path);
    if (idx === -1)
      return;
    const toClose = new Set(tabs.slice(idx + 1).filter((t) => t.closable).map((t) => t.path));
    if (toClose.size === 0)
      return;
    this.tabs.set(tabs.filter((t) => !toClose.has(t.path)));
    if (toClose.has(this.activePath()))
      this.switchTab(path);
  }
  static \u0275fac = function TabService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TabService)(\u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TabService, factory: _TabService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: Router }], null);
})();

export {
  TabService
};
//# debugId=6d17a353-866d-5fad-8ec5-b1a77713b50e
//# sourceMappingURL=chunk-DUA22MI5.js.map
