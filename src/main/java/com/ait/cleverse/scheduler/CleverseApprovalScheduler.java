package com.ait.cleverse.scheduler;

import com.ait.cleverse.service.CleverseApprovalService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.concurrent.atomic.AtomicBoolean;

/**
 * Port SendEmailTask.SynchronizationApprovalStatus (Hanwha_HAE): định kỳ đồng bộ trạng thái
 * phê duyệt từ hộp phê duyệt Cleverse về HR.
 * Bật/tắt bằng cleverse.approval.sync-flag (bản gốc: APPROVAL_SEND_FLAG), lịch chạy bằng
 * cleverse.approval.sync-cron (10 phút/lần). Ngoài ra gửi lại đơn chờ theo cleverse.approval.resend-cron (30 phút/lần).
 */
@Component
public class CleverseApprovalScheduler {

    private static final Logger log = LoggerFactory.getLogger(CleverseApprovalScheduler.class);

    // Chống chạy đồng thời nếu lần trước chưa xong (gọi WS cho nhiều đơn có thể lâu)
    private final AtomicBoolean running = new AtomicBoolean(false);
    private final AtomicBoolean resending = new AtomicBoolean(false);

    @Autowired
    private CleverseApprovalService cleverseApprovalService;

    /** 1: chạy đồng bộ, 0: không chạy */
    @Value("${cleverse.approval.sync-flag:1}")
    private String syncFlag;

    /**
     * Gửi lại các đơn còn SEND_EMAIL_FLAG = 0 (vd. lúc lưu đơn mất kết nối Cleverse do DNS/VPN).
     * Mặc định 30 phút/lần ở giây 0; lịch đồng bộ chạy ở giây 30 nên cùng phút thì gửi lại chạy trước.
     */
    //@Scheduled(cron = "${cleverse.approval.resend-cron:0 0/30 * * * *}")
    public void resendPendingApply() {
        if (!"1".equals(syncFlag)) {
            return;
        }
        if (!resending.compareAndSet(false, true)) {
            log.warn("[Cleverse-Resend] Lần chạy trước chưa hoàn tất, bỏ qua lần này.");
            return;
        }
        try {
            log.info("[Cleverse-Resend] Bắt đầu gửi lại các đơn chờ sang Cleverse");
            int resent = cleverseApprovalService.sendAffirmInfoEmailApproval();
            log.info("[Cleverse-Resend] Hoàn tất, số đơn đã gửi: {}", resent);
        } catch (Exception e) {
            log.error("[Cleverse-Resend] Lỗi khi gửi lại đơn chờ sang Cleverse", e);
        } finally {
            resending.set(false);
        }
    }

    //@Scheduled(cron = "${cleverse.approval.sync-cron:30 0/10 * * * *}")
    public void synchronizationApprovalStatus() {
        if (!"1".equals(syncFlag)) {
            return;
        }
        if (!running.compareAndSet(false, true)) {
            log.warn("[Cleverse-Sync] Lần chạy trước chưa hoàn tất, bỏ qua lần này.");
            return;
        }
        try {
            log.info("[Cleverse-Sync] Bắt đầu đồng bộ trạng thái phê duyệt từ Cleverse");
            int processed = cleverseApprovalService.synchronizationApprovalStatus();
            log.info("[Cleverse-Sync] Hoàn tất, số đơn xử lý: {}", processed);
        } catch (Exception e) {
            log.error("[Cleverse-Sync] Lỗi không mong đợi khi đồng bộ trạng thái phê duyệt", e);
        } finally {
            running.set(false);
        }
    }
}
