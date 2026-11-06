package com.ait.mobile.auth.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

/** Bản ghi MB_DEVICE (xem ghi chú tên field ở {@link MobileRefreshTokenDto}). */
@Data
@NoArgsConstructor
public class MobileDeviceDto {

    private String deviceId;
    private String personId;
    private String companyId;
    private String platform;
    private String fcmToken;
    private String appVersion;
    private String osVersion;
    private String deviceModel;
    private String clientIp;
    /** Ngôn ngữ app (vi/en/ko/zh) - dùng soạn nội dung thông báo. */
    private String deviceLang;
}
