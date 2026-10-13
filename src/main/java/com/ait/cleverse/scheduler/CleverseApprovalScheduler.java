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
 * cleverse.approval.sync-cron (mặc định 5 phút/lần như bản gốc).
 */
@Component
public class CleverseApprovalScheduler {

    private static final Logger log = LoggerFactory.getLogger(CleverseApprovalScheduler.class);

    // Chống chạy đồng thời nếu lần trước chưa xong (gọi WS cho nhiều đơn có thể quá 5 phút)
    private final AtomicBoolean running = new AtomicBoolean(false);

    @Autowired
    private CleverseApprovalService cleverseApprovalService;

    /** 1: chạy đồng bộ, 0: không chạy */
    @Value("${cleverse.approval.sync-flag:1}")
    private String syncFlag;

    @Scheduled(cron = "${cleverse.approval.sync-cron:0 0/5 * * * *}")
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
