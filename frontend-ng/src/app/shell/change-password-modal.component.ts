import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';

const CHANGE_PASSWORD_URL = '/password/api/change-password';

interface ChangePasswordResponse {
  success: boolean;
  message: string;
  code?: string;
}

const I18N_KEYS = [
  'topbar.changePassword',
  'pwd.oldPassword',
  'pwd.newPassword',
  'pwd.confirmPassword',
  'pwd.placeholder.oldPassword',
  'pwd.placeholder.confirmPassword',
  'fcp.newPassword.placeholder',
  'fcp.requirements',
  'common.cancel',
  'pwd.update',
];

/**
 * Modal tự đổi mật khẩu (khác ForcePasswordChangeModalComponent - modal BẮT BUỘC đổi mật khẩu lần
 * đầu) - bản Angular của modal "topbarCpwdModal" trong fragments/topbar.html (Thymeleaf), mở từ menu
 * user dropdown trên topbar (xem AppShellComponent.openChangePasswordModal). Gọi lại nguyên
 * POST /password/api/change-password (PasswordUpdateController) - không đổi backend.
 */
@Component({
  selector: 'app-change-password-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, NzModalModule, NzInputModule, NzButtonModule, NzAlertModule, TranslatePipe],
  templateUrl: './change-password-modal.component.html',
  styleUrl: './change-password-modal.component.css',
})
export class ChangePasswordModalComponent {
  readonly visible = signal(false);
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly successMessage = signal<string | null>(null);

  oldPassword = '';
  newPassword = '';
  confirmPassword = '';

  constructor(private readonly http: HttpClient, readonly i18n: I18nService) {
    this.i18n.loadKeys(I18N_KEYS);
  }

  open(): void {
    this.oldPassword = '';
    this.newPassword = '';
    this.confirmPassword = '';
    this.errorMessage.set(null);
    this.successMessage.set(null);
    this.visible.set(true);
  }

  close(): void {
    this.visible.set(false);
  }

  async onSubmit(): Promise<void> {
    this.errorMessage.set(null);
    this.successMessage.set(null);

    const oldPwd = this.oldPassword.trim();
    const newPwd = this.newPassword.trim();
    const confirmPwd = this.confirmPassword.trim();

    if (!oldPwd || !newPwd || !confirmPwd) {
      this.errorMessage.set(
        this.i18n.t('topbar.cpwd.js.emptyFields', 'Vui lòng nhập đầy đủ thông tin (mật khẩu hiện tại, mật khẩu mới và xác nhận).')
      );
      return;
    }
    if (newPwd.length < 8) {
      this.errorMessage.set(this.i18n.t('fcp.js.minLength', 'Mật khẩu phải có ít nhất 8 ký tự.'));
      return;
    }
    if (!/[A-Z]/.test(newPwd)) {
      this.errorMessage.set(this.i18n.t('fcp.js.noUppercase', 'Mật khẩu phải chứa ít nhất 1 chữ hoa (A-Z).'));
      return;
    }
    if (!/[a-z]/.test(newPwd)) {
      this.errorMessage.set(this.i18n.t('fcp.js.noLowercase', 'Mật khẩu phải chứa ít nhất 1 chữ thường (a-z).'));
      return;
    }
    if (!/[0-9]/.test(newPwd)) {
      this.errorMessage.set(this.i18n.t('fcp.js.noDigit', 'Mật khẩu phải chứa ít nhất 1 chữ số (0-9).'));
      return;
    }
    if (!/[^A-Za-z0-9]/.test(newPwd)) {
      this.errorMessage.set(this.i18n.t('fcp.js.noSpecial', 'Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt (!@#$%...).'));
      return;
    }
    if (newPwd !== confirmPwd) {
      this.errorMessage.set(this.i18n.t('fcp.js.notMatch', 'Mật khẩu xác nhận không khớp. Vui lòng nhập lại.'));
      return;
    }

    this.loading.set(true);
    try {
      const body = new URLSearchParams();
      body.set('oldPassword', oldPwd);
      body.set('newPassword', newPwd);
      body.set('confirmPassword', confirmPwd);
      await firstValueFrom(
        this.http.post<ChangePasswordResponse>(CHANGE_PASSWORD_URL, body.toString(), {
          withCredentials: true,
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        })
      );
      this.successMessage.set(this.i18n.t('topbar.cpwd.js.success', 'Cập nhật mật khẩu thành công!'));
      this.oldPassword = '';
      this.newPassword = '';
      this.confirmPassword = '';
      setTimeout(() => this.close(), 2000);
    } catch (err: any) {
      const body = err?.error;
      let msg = (body && body.message) || this.i18n.t('fcp.js.error', 'Có lỗi xảy ra.');
      if (body?.code === 'OLD_PASSWORD_INCORRECT') msg = this.i18n.t('hrm.login.OLD_PASSWORD_INCORRECT', 'Mật khẩu cũ không đúng!');
      if (body?.code === 'SAME_AS_OLD') msg = this.i18n.t('hrm.login.MATCH_OLD_PASSWORD', 'Không được trùng với mật khẩu cũ!');
      this.errorMessage.set(msg);
    } finally {
      this.loading.set(false);
    }
  }
}
