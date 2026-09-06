import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi, withXsrfConfiguration } from '@angular/common/http';
import { provideRouter, RouteReuseStrategy } from '@angular/router';
import { routes } from './app.routes';
import { TabRouteReuseStrategy } from './shell/tab-route-reuse.strategy';
import { vi_VN, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';
import { provideNzDateFnsAdapter } from 'ng-zorro-antd/core/time';

// Ngôn ngữ mặc định của toàn dự án là tiếng Việt (xem CLAUDE.md) - NG-ZORRO cần locale riêng cho
// i18n nội bộ của các component (DatePicker, Pagination...) và Angular cần locale data cho pipe.
registerLocaleData(vi);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // Backend lưu CSRF token vào cookie "XSRF-TOKEN" (xem SecurityConfig.java) - Angular tự đọc cookie
    // này và gắn header "X-XSRF-TOKEN" vào mọi request POST/PUT/PATCH/DELETE cùng origin, không cần
    // code thủ công ở từng service. Tên cookie/header khai báo tường minh dù trùng default của Angular
    // để rõ ràng đây là quy ước bắt buộc khớp với backend, không phải giá trị mặc định tình cờ.
    provideHttpClient(withInterceptorsFromDi(), withXsrfConfiguration({ cookieName: 'XSRF-TOKEN', headerName: 'X-XSRF-TOKEN' })),
    provideRouter(routes),
    { provide: RouteReuseStrategy, useClass: TabRouteReuseStrategy },
    provideNzI18n(vi_VN),
    provideNzDateFnsAdapter(),
  ],
};
