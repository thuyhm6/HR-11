import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

/**
 * Guard xác thực qua session cookie thật (gọi GET /auth/api/me) thay vì chỉ dựa vào cờ in-memory -
 * nhờ vậy vẫn hoạt động đúng khi Angular reload (F5) miễn session BE còn hiệu lực.
 */
export const authGuard: CanActivateFn = async () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isAuthenticated()) return true;

  const ok = await auth.checkSession();
  if (ok) return true;

  router.navigate(['/login']);
  return false;
};
