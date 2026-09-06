import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, effect, input, OnDestroy, OnInit } from '@angular/core';
import { NzDropdownModule } from 'ng-zorro-antd/dropdown';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { I18nService } from '../i18n/i18n.service';
import { TranslatePipe } from '../i18n/translate.pipe';
import { NotificationMode, NotificationService } from './notification.service';
import { TabService } from './tab.service';

/** Key message.properties dùng cho cả 2 chế độ ESS/HRM - đã có sẵn (topbar.html Thymeleaf dùng chung),
 *  tải trước ở constructor để không hardcode text hiển thị. */
const I18N_KEYS = [
  'topbar.notifications',
  'topbar.notification.leave',
  'topbar.notification.ot',
  'topbar.notification.anomaly',
  'topbar.notification.personalChange',
  'topbar.viewAllNotification',
];

/** Bản Angular của dropdown "Notification" trong fragments/topbar.html, dùng nz-dropdown + nz-badge -
 *  hỗ trợ cả chế độ ESS (Nghỉ phép/Tăng ca/Nghỉ bất thường chờ phê duyệt) lẫn HRM (Chi tiết thay đổi
 *  thông tin/Nghỉ phép/Nghỉ bất thường chờ xác nhận). `mode` do AppShellComponent truyền vào theo đúng
 *  sysType hiện tại (xem AppShellComponent.menuSysType) - đổi mode sẽ tự load lại đúng API đếm
 *  (NotificationService.startPolling) nhờ effect() theo dõi input signal.
 *  Mở trang đã migrate (/view-approval-email, /leave-confirm, /attendance-ex-confirm,
 *  /hrm-approve-apply-info) qua TabService kind 'route' - đúng cách các menu khác đang mở tab (xem
 *  AppShellComponent.openMenuTab). */
@Component({
  selector: 'app-notifications-dropdown',
  standalone: true,
  imports: [CommonModule, NzDropdownModule, NzBadgeModule, NzButtonModule, TranslatePipe],
  templateUrl: './notifications-dropdown.component.html',
  styleUrl: './notifications-dropdown.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NotificationsDropdownComponent implements OnInit, OnDestroy {
  readonly mode = input<NotificationMode>('ess');

  constructor(
    readonly notifications: NotificationService,
    private readonly tabs: TabService,
    private readonly i18n: I18nService,
  ) {
    effect(() => {
      this.notifications.startPolling(this.mode());
    });
  }

  ngOnInit(): void {
    this.i18n.loadKeys(I18N_KEYS);
  }

  ngOnDestroy(): void {
    this.notifications.stopPolling();
  }

  /** applyTypeCode: 21=Nghỉ phép, 31=Tăng ca, 218197=Nghỉ bất thường - không truyền thì mở trang "xem tất cả". */
  openApprovalEmail(applyTypeCode?: string): void {
    const path = applyTypeCode ? `/view-approval-email?applyTypeCode=${applyTypeCode}` : '/view-approval-email';
    const titleByCode: Record<string, string> = {
      '21': this.i18n.t('topbar.notification.leave', 'Nghỉ phép'),
      '31': this.i18n.t('topbar.notification.ot', 'Tăng ca'),
      '218197': this.i18n.t('topbar.notification.anomaly', 'Nghỉ bất thường'),
    };
    const title = applyTypeCode ? (titleByCode[applyTypeCode] ?? 'Thông báo') : this.i18n.t('topbar.viewAllNotification', 'Xem tất cả thông báo');
    this.tabs.openTab(path, title, 'route');
  }

  openLeaveConfirm(): void {
    this.tabs.openTab('/leave-confirm', this.i18n.t('topbar.notification.leave', 'Nghỉ phép'), 'route');
  }

  openAttendanceExConfirm(): void {
    this.tabs.openTab('/attendance-ex-confirm', this.i18n.t('topbar.notification.anomaly', 'Nghỉ bất thường'), 'route');
  }

  openPersonalChangeApproval(): void {
    this.tabs.openTab(
      '/hrm-approve-apply-info',
      this.i18n.t('topbar.notification.personalChange', 'Chi tiết thay đổi thông tin'),
      'route'
    );
  }
}
