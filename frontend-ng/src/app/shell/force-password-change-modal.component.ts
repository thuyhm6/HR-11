import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { AuthService } from '../auth/auth.service';

/**
 * Bản Angular của modal "forceChangePasswordModal" trong login/dashboard.html (Thymeleaf) - hiện ra
 * khi session có requirePasswordChange=true (password cũ chưa mã hóa), bắt buộc đổi mật khẩu trước
 * khi dùng tiếp hệ thống. Dùng nz-modal, không cho đóng bằng Esc/click ra ngoài (giống backdrop
 * static của bản Bootstrap gốc). Gọi lại nguyên POST /api/change-first-password qua AuthService.
 */
@Component({
  selector: 'app-force-password-change-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, NzModalModule, NzInputModule, NzButtonModule, NzAlertModule],
  templateUrl: './force-password-change-modal.component.html',
  styleUrl: './force-password-change-modal.component.css',
})
export class ForcePasswordChangeModalComponent {
  newPassword = '';
  confirmPassword = '';
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);
  readonly successMessage = signal<string | null>(null);

  constructor(private readonly auth: AuthService) {}

  async onSubmit(): Promise<void> {
    this.errorMessage.set(null);
    this.successMessage.set(null);

    const pwd = this.newPassword.trim();
    const confirm = this.confirmPassword.trim();
    if (!pwd || !confirm) { this.errorMessage.set('Vui lòng nhập đủ mật khẩu mới và xác nhận.'); return; }
    if (pwd.length < 8) { this.errorMessage.set('Mật khẩu phải có ít nhất 8 ký tự.'); return; }
    if (!/[A-Z]/.test(pwd)) { this.errorMessage.set('Mật khẩu phải chứa ít nhất 1 chữ hoa (A-Z).'); return; }
    if (!/[a-z]/.test(pwd)) { this.errorMessage.set('Mật khẩu phải chứa ít nhất 1 chữ thường (a-z).'); return; }
    if (!/[0-9]/.test(pwd)) { this.errorMessage.set('Mật khẩu phải chứa ít nhất 1 chữ số (0-9).'); return; }
    if (!/[^A-Za-z0-9]/.test(pwd)) { this.errorMessage.set('Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt (!@#$%...).'); return; }
    if (pwd !== confirm) { this.errorMessage.set('Mật khẩu xác nhận không khớp. Vui lòng nhập lại.'); return; }

    this.loading.set(true);
    try {
      const res = await this.auth.changeFirstPassword(pwd, confirm);
      if (res.success) {
        this.successMessage.set('Đổi mật khẩu thành công! Trang sẽ tự động tải lại...');
        setTimeout(() => window.location.reload(), 1500);
      } else {
        this.errorMessage.set(res.message || 'Có lỗi xảy ra.');
      }
    } catch (err: any) {
      this.errorMessage.set(err?.error?.message || 'Lỗi hệ thống.');
    } finally {
      this.loading.set(false);
    }
  }
}
