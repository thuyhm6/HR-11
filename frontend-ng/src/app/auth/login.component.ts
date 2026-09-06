import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { LoginResponse } from './auth.model';

const STORAGE_USERNAME = 'hr_remembered_username';
const STORAGE_PASSWORD = 'hr_remembered_password';
const STORAGE_REMEMBER = 'hr_remember_me';

/** Bản Angular của login/login.html (Thymeleaf). Gọi POST /auth/api/login thay vì form-post /login. */
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username = '';
  password = '';
  rememberMe = false;

  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly successMessage = signal<string | null>(null);

  constructor(private readonly auth: AuthService, private readonly router: Router) {
    this.loadSavedCredentials();
  }

  async onSubmit(): Promise<void> {
    this.errorMessage.set(null);
    this.successMessage.set(null);

    if (!this.username.trim()) {
      this.errorMessage.set('Vui lòng nhập tên đăng nhập!');
      return;
    }
    if (!this.password.trim()) {
      this.errorMessage.set('Vui lòng nhập mật khẩu!');
      return;
    }

    this.loading.set(true);
    try {
      const res = await this.auth.login({
        username: this.username.trim(),
        password: this.password,
        lang: 'vi',
      });

      if (this.rememberMe) {
        localStorage.setItem(STORAGE_USERNAME, this.username.trim());
        localStorage.setItem(STORAGE_PASSWORD, this.password);
        localStorage.setItem(STORAGE_REMEMBER, 'true');
      } else {
        this.clearSavedCredentials();
      }

      this.successMessage.set(res.message);
      this.router.navigateByUrl(res.redirectUrl || '/dashboard');
    } catch (err) {
      const body = (err as HttpErrorResponse)?.error as LoginResponse | undefined;
      this.errorMessage.set(body?.message ?? 'Có lỗi xảy ra. Vui lòng thử lại sau.');
    } finally {
      this.loading.set(false);
    }
  }

  onRememberMeChange(): void {
    if (!this.rememberMe) {
      this.clearSavedCredentials();
    }
  }

  private loadSavedCredentials(): void {
    try {
      const savedUsername = localStorage.getItem(STORAGE_USERNAME);
      const savedPassword = localStorage.getItem(STORAGE_PASSWORD);
      const remembered = localStorage.getItem(STORAGE_REMEMBER);
      if (savedUsername && remembered === 'true') {
        this.username = savedUsername;
        this.password = savedPassword ?? '';
        this.rememberMe = true;
        this.successMessage.set('Đã khôi phục thông tin đăng nhập đã lưu');
      }
    } catch {
      // localStorage không khả dụng (private mode...) - bỏ qua
    }
  }

  private clearSavedCredentials(): void {
    localStorage.removeItem(STORAGE_USERNAME);
    localStorage.removeItem(STORAGE_PASSWORD);
    localStorage.removeItem(STORAGE_REMEMBER);
  }
}
