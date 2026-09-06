import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export interface PendingCounts {
  total: number;
  leave: number;
  ot: number;
  anomaly: number;
  personalChange: number;
}

export type NotificationMode = 'ess' | 'hrm';

const ESS_PENDING_COUNTS_URL = '/sy/syAffirm/api/pending-counts';
const HRM_PENDING_COUNTS_URL = '/sy/syAffirm/api/hrm-pending-counts';
const POLL_INTERVAL_MS = 3 * 60 * 1000;

/**
 * Bản Angular của phần "PENDING APPROVAL COUNTS" trong fragments/topbar.html - gọi lại nguyên 2 API
 * đếm số đơn chờ duyệt: /pending-counts (ESS) và /hrm-pending-counts (HRM - xem
 * SyAffirmEmailServiceImpl.getHrmPendingCounts). Chế độ (ess/hrm) do NotificationsDropdownComponent
 * truyền vào qua startPolling(), đồng bộ với sysType hiện tại của AppShellComponent.
 */
@Injectable({ providedIn: 'root' })
export class NotificationService {
  readonly counts = signal<PendingCounts>({ total: 0, leave: 0, ot: 0, anomaly: 0, personalChange: 0 });

  private mode: NotificationMode = 'ess';
  private pollHandle: ReturnType<typeof setInterval> | null = null;

  constructor(private readonly http: HttpClient) {}

  async refresh(): Promise<void> {
    const url = this.mode === 'hrm' ? HRM_PENDING_COUNTS_URL : ESS_PENDING_COUNTS_URL;
    try {
      const data = await firstValueFrom(
        this.http.get<Record<string, number>>(url, { withCredentials: true })
      );
      this.counts.set({
        total: data['total'] ?? 0,
        leave: data['leave'] ?? 0,
        ot: data['ot'] ?? 0,
        // API HRM trả field "anomalous", API ESS trả field "anomaly" - tên khác nhau ở backend
        // (xem SyAffirmEmailServiceImpl.getPendingApprovalCounts/getHrmPendingCounts).
        anomaly: (this.mode === 'hrm' ? data['anomalous'] : data['anomaly']) ?? 0,
        personalChange: data['personalChange'] ?? 0,
      });
    } catch {
      // Không load được số đếm - giữ nguyên giá trị cũ, không chặn UI
    }
  }

  /** Bắt đầu (hoặc đổi) chế độ polling - gọi lại API đúng chế độ ngay lập tức và reset chu kỳ polling. */
  startPolling(mode: NotificationMode): void {
    this.mode = mode;
    this.refresh();
    this.stopPolling();
    this.pollHandle = setInterval(() => this.refresh(), POLL_INTERVAL_MS);
  }

  stopPolling(): void {
    if (this.pollHandle) {
      clearInterval(this.pollHandle);
      this.pollHandle = null;
    }
  }
}
