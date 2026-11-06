package com.ait.mobile.notification.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

/** Thiết bị đang đăng nhập có FCM token. */
@Data
@NoArgsConstructor
public class MobilePushTokenDto {

    private String deviceId;
    private String fcmToken;
}
