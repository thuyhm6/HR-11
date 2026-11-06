import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

const API_BASE = '/api/iconify';

/** API tĩnh của custom element <iconify-icon> (vendor.js) - chỉ khai báo phần dùng tới */
interface IconifyIconElementClass {
  iconLoaded(name: string): boolean;
  addCollection(data: unknown): boolean;
}

/**
 * Nạp trước dữ liệu SVG cho các icon chưa được gói sẵn trong assets/js/iconify-icons.js (icon menu
 * nhập ở màn "Quản lý Menu", chỉ có trong DB). Gọi API nội bộ IconifyController bằng HttpClient - cùng
 * đường đi với các API khác của hệ thống (vd /auth/api/menu) - rồi addCollection vào <iconify-icon>,
 * nên icon hiển thị được khi không có Internet mà không phụ thuộc cơ chế tự gọi API của iconify-icon.
 */
@Injectable({ providedIn: 'root' })
export class IconifyPreloadService {
  constructor(private readonly http: HttpClient) {}

  async preload(iconNames: (string | null | undefined)[]): Promise<void> {
    const IconifyIcon = customElements.get('iconify-icon') as unknown as IconifyIconElementClass | undefined;
    if (!IconifyIcon?.iconLoaded || !IconifyIcon.addCollection) return;

    // prefix -> tên icon chưa có dữ liệu
    const byPrefix = new Map<string, Set<string>>();
    for (const full of iconNames) {
      const m = /^([a-z0-9-]+):([a-z0-9-]+)$/.exec(full?.trim() ?? '');
      if (!m || IconifyIcon.iconLoaded(m[0])) continue;
      if (!byPrefix.has(m[1])) byPrefix.set(m[1], new Set());
      byPrefix.get(m[1])!.add(m[2]);
    }

    await Promise.all(
      [...byPrefix].map(async ([prefix, names]) => {
        try {
          const data = await firstValueFrom(
            this.http.get(`${API_BASE}/${prefix}`, { params: { icons: [...names].join(',') }, withCredentials: true })
          );
          IconifyIcon.addCollection(data);
        } catch {
          // Bỏ qua - <iconify-icon> tự tải qua iconify-offline.js như cũ
        }
      })
    );
  }
}
