package com.ait.mobile.notification.mapper;

import com.ait.mobile.notification.dto.MobileNotiTargetDto;
import com.ait.mobile.notification.dto.MobileNotificationDto;
import com.ait.mobile.notification.dto.MobilePushTokenDto;
import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

/** MB_NOTIFICATION / MB_DEVICE - xem resources/sql/create_mobile_tables.sql + alter_mobile_tables_phase4.sql */
@Mapper
public interface MobileNotificationMapper {

    Long selectNextNotiNo();

    /** Ném DuplicateKeyException nếu (PERSON_ID, DEDUP_KEY) đã tồn tại. */
    int insertNotification(MobileNotificationDto dto);

    List<MobileNotificationDto> selectMyNotifications(@Param("recipientId") String recipientId,
            @Param("offset") int offset, @Param("limit") int limit);

    int countUnread(@Param("recipientId") String recipientId);

    int markRead(@Param("recipientId") String recipientId, @Param("notiNo") Long notiNo);

    int markAllRead(@Param("recipientId") String recipientId);

    int markPushed(@Param("notiNo") Long notiNo);

    /** Dòng duyệt đang chờ người có cài app mà chưa được thông báo. */
    List<MobileNotiTargetDto> selectApprovalRequestTargets(@Param("lookbackDays") int lookbackDays);

    /** Đơn nghỉ / OT vừa có kết quả cuối (duyệt / từ chối) mà người gửi chưa được thông báo. */
    List<MobileNotiTargetDto> selectApplyResultTargets(@Param("lookbackDays") int lookbackDays);

    List<MobilePushTokenDto> selectPushTokens(@Param("recipientId") String recipientId);

    /** FCM báo token không còn hợp lệ (gỡ app / đổi máy). */
    int clearFcmToken(@Param("deviceId") String deviceId, @Param("fcmToken") String fcmToken);
}
