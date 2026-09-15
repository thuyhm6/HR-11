import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';

const MESSAGES_URL = '/api/i18n/messages';
const CURRENT_LANGUAGE_URL = '/api/current-language';

interface CurrentLanguageInfo {
  languageCode: string;
}

/**
 * Lấy text đa ngôn ngữ cho giao diện Angular trực tiếp từ message.properties đã có sẵn ở backend
 * (dùng lại nguyên I18nApiController + I18nUtil.getMessage - resolve đúng locale hiện tại của
 * session, giống hệt cách Thymeleaf #{key} hoạt động) - không tạo bộ file dịch riêng cho Angular.
 * Mỗi component tự khai báo danh sách key nó cần qua loadKeys(), key đã tải rồi sẽ không tải lại.
 */
@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly messages = signal<Record<string, string>>({});
  /** Mã ngôn ngữ hiện tại của session (vi/en/ko/zh) - LanguageSwitcherComponent dùng để tô sáng lựa
   *  chọn đang active. */
  readonly currentLang = signal<string>('vi');

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

  /** Đọc ngôn ngữ đang active của session - dùng lại nguyên API GET /api/current-language đã có sẵn
   *  (LanguageController), gọi 1 lần lúc LanguageSwitcherComponent khởi tạo. */
  async loadCurrentLanguage(): Promise<void> {
    try {
      const result = await firstValueFrom(
        this.http.get<CurrentLanguageInfo>(CURRENT_LANGUAGE_URL, { withCredentials: true })
      );
      this.currentLang.set(result.languageCode);
    } catch {
      // Giữ mặc định 'vi' nếu gọi API lỗi
    }
  }

  /** Đổi ngôn ngữ hiển thị toàn hệ thống. MultilingualConfig.localeChangeInterceptor (chạy cho MỌI
   *  request tới server) tự cập nhật locale của session khi thấy tham số "lang" trên query string,
   *  nên gọi lại đúng API GET /api/current-language kèm ?lang=xx đã có sẵn là đủ để đổi ngôn ngữ -
   *  không cần thêm endpoint backend mới.
   *  LocaleContextHolder chỉ được Spring nạp lại từ session ở ĐẦU mỗi request (trước khi interceptor
   *  cập nhật session), nên chính response của lệnh gọi này vẫn trả về theo locale CŨ - phải
   *  window.location.reload() để toàn bộ dữ liệu phụ thuộc locale (menu, tên cột LOCAL_NAME, text
   *  qua translate pipe...) được tải lại theo đúng ngôn ngữ mới trong các request tiếp theo. */
  async setLanguage(lang: string): Promise<void> {
    await firstValueFrom(
      this.http.get(CURRENT_LANGUAGE_URL, { params: { lang }, withCredentials: true })
    );
    window.location.reload();
  }
}
