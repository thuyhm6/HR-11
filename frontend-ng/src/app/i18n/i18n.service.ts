import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';

const MESSAGES_URL = '/api/i18n/messages';

/**
 * Lấy text đa ngôn ngữ cho giao diện Angular trực tiếp từ message.properties đã có sẵn ở backend
 * (dùng lại nguyên I18nApiController + I18nUtil.getMessage - resolve đúng locale hiện tại của
 * session, giống hệt cách Thymeleaf #{key} hoạt động) - không tạo bộ file dịch riêng cho Angular.
 * Mỗi component tự khai báo danh sách key nó cần qua loadKeys(), key đã tải rồi sẽ không tải lại.
 */
@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly messages = signal<Record<string, string>>({});

  private readonly loadedKeys = new Set<string>();
  private pendingLoad: Promise<void> | null = null;

  constructor(private readonly http: HttpClient) {}

  /** Đọc text hiện có theo key - trả về fallback (mặc định tiếng Việt) nếu chưa tải xong hoặc không có key. */
  t(key: string, fallback?: string): string {
    return this.messages()[key] ?? fallback ?? key;
  }

  /** Tải trước danh sách key cho 1 trang - gọi trong ngOnInit của component. */
  async loadKeys(keys: string[]): Promise<void> {
    const missing = keys.filter((k) => !this.loadedKeys.has(k));
    if (missing.length === 0) return;
    missing.forEach((k) => this.loadedKeys.add(k));

    const params = new HttpParams().set('keys', missing.join(','));
    try {
      const result = await firstValueFrom(
        this.http.get<Record<string, string>>(MESSAGES_URL, { params, withCredentials: true })
      );
      this.messages.update((cur) => ({ ...cur, ...result }));
    } catch {
      // Lỗi tải text đa ngôn ngữ - giữ nguyên fallback tiếng Việt hardcode trong template, không chặn UI
    }
  }
}
