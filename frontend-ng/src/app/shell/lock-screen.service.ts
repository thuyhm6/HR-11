import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';

const VERIFY_PASSWORD_URL = '/password/api/verify-old-password';
const IDLE_TIMEOUT_MS = 30 * 60 * 1000;
const ACTIVITY_EVENTS = ['mousemove', 'keydown', 'click', 'scroll', 'touchstart', 'wheel'] as const;
/** Lưu trạng thái khóa vào sessionStorage để F5 không "quên khóa" - reload lại vẫn phải nhập mật khẩu. */
const STORAGE_KEY = 'hr.lockScreen.state';

interface PersistedState {
  locked: boolean;
  auto: boolean;
}

function readPersistedState(): PersistedState {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return { locked: false, auto: false };
    const parsed = JSON.parse(raw);
    return { locked: !!parsed.locked, auto: !!parsed.auto };
  } catch {
    return { locked: false, auto: false };
  }
}

/**
 * Xoá cờ khóa đã lưu - gọi khi logout (AuthService.logout) để tránh phiên đăng nhập MỚI (cùng tab,
 * sau khi logout rồi login lại) bị hiện overlay khóa ngay dù chưa hề bị khóa ở phiên mới này.
 */
export function clearLockScreenState(): void {
  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    // bỏ qua nếu sessionStorage bị chặn
  }
}

/**
 * Bản Angular của "LOCK SCREEN" trong fragments/topbar.html - tính năng này bị comment out (chưa
 * bật) ở bản Thymeleaf gốc nên đây là lần đầu được kích hoạt, không phải port 1:1 hành vi đã chạy.
 * Idle timer 30 phút; xác thực mở khóa dùng lại nguyên POST /password/api/verify-old-password.
 * Trạng thái khóa được lưu ở sessionStorage: nếu người dùng F5/mở lại tab khi đang khóa, session
 * (cookie) vẫn còn hiệu lực nhưng overlay khóa phải hiện lại ngay, không được vào thẳng ứng dụng.
 */
@Injectable({ providedIn: 'root' })
export class LockScreenService {
  private readonly persisted = readPersistedState();

  readonly locked = signal(this.persisted.locked);
  readonly autoLocked = signal(this.persisted.auto);

  private idleTimer: ReturnType<typeof setTimeout> | null = null;
  private started = false;
  private readonly onActivity = () => {
    if (!this.locked()) this.resetIdleTimer();
  };

  constructor(private readonly http: HttpClient) {}

  start(): void {
    if (this.started) return;
    this.started = true;
    ACTIVITY_EVENTS.forEach((evt) => document.addEventListener(evt, this.onActivity, { passive: true }));
    if (!this.locked()) this.resetIdleTimer();
  }

  stop(): void {
    if (!this.started) return;
    this.started = false;
    ACTIVITY_EVENTS.forEach((evt) => document.removeEventListener(evt, this.onActivity));
    this.clearIdleTimer();
  }

  lock(auto = false): void {
    if (this.locked()) return;
    this.clearIdleTimer();
    this.autoLocked.set(auto);
    this.locked.set(true);
    this.persistState(true, auto);
  }

  async unlock(password: string): Promise<{ success: boolean; message?: string }> {
    const body = new URLSearchParams();
    body.set('oldPassword', password);
    try {
      const res = await firstValueFrom(
        this.http.post<{ success: boolean; message?: string }>(VERIFY_PASSWORD_URL, body.toString(), {
          withCredentials: true,
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        })
      );
      if (res.success) {
        this.locked.set(false);
        this.persistState(false, false);
        this.resetIdleTimer();
      }
      return res;
    } catch {
      return { success: false, message: 'Có lỗi xảy ra, vui lòng thử lại' };
    }
  }

  private resetIdleTimer(): void {
    this.clearIdleTimer();
    this.idleTimer = setTimeout(() => this.lock(true), IDLE_TIMEOUT_MS);
  }

  private clearIdleTimer(): void {
    if (this.idleTimer) {
      clearTimeout(this.idleTimer);
      this.idleTimer = null;
    }
  }

  private persistState(locked: boolean, auto: boolean): void {
    try {
      if (locked) {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ locked, auto }));
      } else {
        sessionStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // sessionStorage có thể bị chặn (chế độ ẩn danh nghiêm ngặt...) - bỏ qua, không ảnh hưởng luồng khóa trong bộ nhớ.
    }
  }
}
