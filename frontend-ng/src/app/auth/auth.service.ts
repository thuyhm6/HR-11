import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { CurrentUser, LoginRequest, LoginResponse, MenuItem } from './auth.model';
import { clearLockScreenState } from '../shell/lock-screen.service';

const CSRF_TOKEN_URL = '/auth/api/csrf-token';
const LOGIN_URL = '/auth/api/login';
const ME_URL = '/auth/api/me';
const MENU_URL = '/auth/api/menu';
const CHANGE_FIRST_PASSWORD_URL = '/api/change-first-password';
/** Endpoint "mồi" cookie XSRF-TOKEN chuẩn của Spring Security (khác CSRF_TOKEN_URL - endpoint đó chỉ
 *  phục vụ riêng request đăng nhập). Xem giải thích đầy đủ ở AuthController.primeCsrfCookie(). */
const XSRF_PRIME_URL = '/api/csrf-token';

/**
 * Backend dùng session cookie (JSESSIONID) + CSRF token riêng lưu trong session
 * (không phải Spring CSRF mặc định) - xem CsrfUtil.java. Vì vậy phải gọi
 * /auth/api/csrf-token lấy token trước, rồi gửi lại qua header X-CSRF-TOKEN khi login.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  readonly isAuthenticated = signal(false);
  readonly currentUser = signal<CurrentUser | null>(null);

  private csrfToken: string | null = null;

  constructor(private readonly http: HttpClient) {}

  private async ensureCsrfToken(): Promise<string> {
    if (this.csrfToken) return this.csrfToken;
    const res = await firstValueFrom(
      this.http.get<{ csrfToken: string }>(CSRF_TOKEN_URL, { withCredentials: true })
    );
    this.csrfToken = res.csrfToken;
    return this.csrfToken;
  }

  async login(req: LoginRequest): Promise<LoginResponse> {
    const csrfToken = await this.ensureCsrfToken();
    const res = await firstValueFrom(
      this.http.post<LoginResponse>(LOGIN_URL, req, {
        withCredentials: true,
        headers: { 'X-CSRF-TOKEN': csrfToken },
      })
    );
    if (res.success) {
      this.isAuthenticated.set(true);
      // Đăng nhập mới (vd: phiên cũ hết hạn khi đang khóa) - xoá cờ khóa cũ, không mang sang phiên mới.
      clearLockScreenState();
      await this.primeXsrfCookie();
    }
    return res;
  }

  /** Gọi 1 lần để đảm bảo cookie XSRF-TOKEN đã tồn tại TRƯỚC khi bất kỳ trang nào gọi API ghi dữ liệu
   *  đầu tiên - nếu không, request ghi dữ liệu đầu tiên sẽ luôn bị CsrfFilter chặn 403 (xem
   *  AuthController.primeCsrfCookie()). Lỗi khi gọi không chặn luồng đăng nhập/khôi phục phiên - cookie
   *  vẫn có thể được tạo bù bởi chính request ghi dữ liệu đầu tiên như hành vi cũ. */
  private async primeXsrfCookie(): Promise<void> {
    try {
      await firstValueFrom(this.http.get(XSRF_PRIME_URL, { withCredentials: true }));
    } catch {
      // Bỏ qua - không chặn luồng đăng nhập chỉ vì bước mồi cookie thất bại.
    }
  }

  /**
   * Kiểm tra phiên đăng nhập hiện tại qua session cookie (không dựa vào cờ in-memory) -
   * dùng cho authGuard để xác thực đúng cả khi Angular vừa mới load lại (F5).
   */
  async checkSession(): Promise<boolean> {
    try {
      const user = await firstValueFrom(
        this.http.get<CurrentUser>(ME_URL, { withCredentials: true })
      );
      this.currentUser.set(user);
      this.isAuthenticated.set(true);
      // Khôi phục phiên khi tải lại trang (F5) - cookie XSRF-TOKEN của phiên trước có thể đã hết hạn
      // hoặc chưa từng được tạo (vd: phiên tạo trước khi có cơ chế mồi này) nên mồi lại cho chắc.
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
  getMenu(sysType: string = '1'): Promise<MenuItem[]> {
    return firstValueFrom(
      this.http.get<MenuItem[]>(MENU_URL, { params: { sysType }, withCredentials: true })
    );
  }

  /** Đổi mật khẩu lần đầu (bắt buộc khi password chưa mã hóa) - dùng lại nguyên POST /api/change-first-password. */
  async changeFirstPassword(newPassword: string, confirmPassword: string): Promise<{ success: boolean; message: string }> {
    const body = new URLSearchParams();
    body.set('newPassword', newPassword);
    body.set('confirmPassword', confirmPassword);
    const res = await firstValueFrom(
      this.http.post<{ success: boolean; message: string }>(CHANGE_FIRST_PASSWORD_URL, body.toString(), {
        withCredentials: true,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      })
    );
    if (res.success) {
      const user = this.currentUser();
      if (user) this.currentUser.set({ ...user, requirePasswordChange: false });
    }
    return res;
  }

  logout(): void {
    this.isAuthenticated.set(false);
    this.currentUser.set(null);
    this.csrfToken = null;
    clearLockScreenState();
    window.location.href = '/logout';
  }
}
