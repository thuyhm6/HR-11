import { Injectable, signal } from '@angular/core';

/** Sidebar Angular (nz-sider) chỉ có 2 trạng thái thật: mở rộng (default) và thu gọn (condensed) -
 * khác với bản Thymeleaf gốc (5 tùy chọn: default/condensed/hidden/sm-hover-active/sm-hover) vốn
 * dựa vào CSS Larkon (app.min.css, chọn theo attribute data-menu-size) mà sidebar NG-ZORRO không
 * dùng tới. */
export type MenuSize = 'default' | 'condensed';

const STORAGE_KEY = '__LARKON_CONFIG__';
const DEFAULT_MENU_SIZE: MenuSize = 'default';

interface LarkonConfig {
  theme: string;
  topbar: { color: string };
  menu: { size: string; color: string };
}

/**
 * Bản Angular của phần "Sidebar Size" trong fragments/rightSidebar.html + app.js (LayoutConfig) -
 * đây là tùy chọn DUY NHẤT còn hoạt động ở bản gốc (Color Scheme/Topbar Color/Menu Color đều bị
 * comment out). Dùng chung key sessionStorage "__LARKON_CONFIG__" với bản Thymeleaf để giữ đồng bộ
 * khi người dùng qua lại giữa trang Angular và trang Thymeleaf chưa migrate. Trang Thymeleaf vẫn có
 * thể ghi 1 trong 5 giá trị cũ vào key này - normalizeMenuSize() quy đổi về 2 trạng thái Angular hỗ trợ.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly menuSize = signal<MenuSize>(DEFAULT_MENU_SIZE);

  private readonly html = document.documentElement;

  constructor() {
    const config = this.readConfig();
    this.applyMenuSize(this.normalizeMenuSize(config.menu.size), false);
  }

  /** Quy đổi giá trị đọc từ storage (có thể do trang Thymeleaf ghi, 1 trong 5 giá trị cũ) về 2
   * trạng thái Angular hỗ trợ - chỉ 'condensed' được giữ nguyên, còn lại (kể cả 'hidden'/'sm-hover*')
   * coi như mở rộng vì sidebar NG-ZORRO không có trạng thái tương ứng. */
  private normalizeMenuSize(size: string): MenuSize {
    return size === 'condensed' ? 'condensed' : 'default';
  }

  setMenuSize(size: MenuSize): void {
    this.applyMenuSize(size, true);
  }

  reset(): void {
    this.applyMenuSize(DEFAULT_MENU_SIZE, true);
  }

  private applyMenuSize(size: MenuSize, save: boolean): void {
    this.html.setAttribute('data-menu-size', size);
    this.menuSize.set(size);
    if (save) {
      const config = this.readConfig();
      config.menu.size = size;
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    }
  }

  private readConfig(): LarkonConfig {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed?.menu?.size) return parsed;
      }
    } catch {
      // sessionStorage không khả dụng hoặc dữ liệu hỏng - dùng mặc định
    }
    return { theme: 'light', topbar: { color: 'light' }, menu: { size: DEFAULT_MENU_SIZE, color: 'dark' } };
  }
}
