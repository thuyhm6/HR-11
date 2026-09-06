import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CurrentUser } from '../auth/auth.model';
import { LockScreenService } from './lock-screen.service';

/** Bản Angular của "Lock Screen Overlay" trong fragments/topbar.html. */
@Component({
  selector: 'app-lock-screen-overlay',
  standalone: true,
  imports: [CommonModule, FormsModule, NzInputModule, NzButtonModule],
  templateUrl: './lock-screen-overlay.component.html',
  styleUrl: './lock-screen-overlay.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LockScreenOverlayComponent {
  @ViewChild('pwdInput') pwdInput?: ElementRef<HTMLInputElement>;
  @Input() user: CurrentUser | null = null;

  password = '';
  showPassword = false;
  readonly loading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  constructor(readonly lockScreen: LockScreenService) {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  async onUnlock(): Promise<void> {
    const pwd = this.password.trim();
    if (!pwd) {
      this.errorMessage.set('Mật khẩu không đúng, vui lòng thử lại');
      this.pwdInput?.nativeElement.focus();
      return;
    }

    this.loading.set(true);
    this.errorMessage.set(null);
    try {
      const res = await this.lockScreen.unlock(pwd);
      if (res.success) {
        this.password = '';
      } else {
        this.errorMessage.set('Mật khẩu không đúng, vui lòng thử lại');
        this.password = '';
        this.pwdInput?.nativeElement.focus();
      }
    } finally {
      this.loading.set(false);
    }
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter') this.onUnlock();
  }
}
