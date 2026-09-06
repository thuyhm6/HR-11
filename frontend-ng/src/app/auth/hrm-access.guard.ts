import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { I18nService } from '../i18n/i18n.service';
import { AuthService } from './auth.service';

/**
 * Chặn điều hướng vào /hrm-dashboard nếu user không thuộc role group nào có SY_ROLE_GROUP.SYS_TYPE = 0
 * (xem PermissionServiceImpl.hasRoleGroupWithSysType ở BE) - phòng vệ bổ sung cho trường hợp gõ thẳng
 * URL, độc lập với việc ẩn link "HR Management System" trên topbar (AppShellComponent). Đặt sau
 * authGuard (route cha) nên currentUser() đã có sẵn, không cần gọi lại checkSession().
 */
export const hrmAccessGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const message = inject(NzMessageService);
  const i18n = inject(I18nService);

  if (auth.currentUser()?.hasSysTypeZeroMenus) {
    return true;
  }

  message.error(i18n.t('topbar.hrmAccessDenied', 'Bạn không có quyền truy cập vào HR Management System'));
  return router.parseUrl('/dashboard');
};
