package com.ait.mobile.notification.service;

import com.ait.mobile.notification.dto.MobileNotificationDto;
import java.util.List;

/** Thông báo trong app + push. */
public interface MobileNotificationService {

    List<MobileNotificationDto> getMyNotifications(String personId, int offset, int limit);

    int countUnread(String personId);

    void markRead(String personId, Long notiNo);

    void markAllRead(String personId);

    /**
     * Quét đơn cần duyệt / đơn đã có kết quả và tạo thông báo + push. Chạy định kỳ (scheduler) và ngay sau khi có
     * thao tác trên app; thao tác trên web / Cleverse được bắt ở lần quét định kỳ kế tiếp.
     * @return số thông báo đã tạo
     */
    int scan();

    /** Chạy {@link #scan()} ở nền (không chặn request); gộp các lần gọi dồn dập thành 1 lần quét. */
    void scanAsync();
}
