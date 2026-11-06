package com.ait.mobile.notification.scheduler;

import com.ait.mobile.notification.service.MobileNotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

/**
 * Quét định kỳ để tạo thông báo cho thao tác ngoài app (duyệt trên web, đồng bộ trạng thái từ Cleverse...).
 * Tắt bằng mobile.notification.scan-enabled=false (vd. khi chạy nhiều instance, chỉ bật ở 1 instance - dù trùng
 * cũng không gửi 2 lần nhờ unique index DEDUP_KEY).
 */
@Component
@ConditionalOnProperty(name = "mobile.notification.scan-enabled", havingValue = "true", matchIfMissing = true)
public class MobileNotificationScheduler {

    @Autowired
    private MobileNotificationService notificationService;

    @Scheduled(initialDelayString = "${mobile.notification.scan-delay-ms:60000}",
            fixedDelayString = "${mobile.notification.scan-delay-ms:60000}")
    public void scan() {
        notificationService.scan();
    }
}
