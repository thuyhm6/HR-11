package com.ait.mobile.notification.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

/** Bản ghi MB_NOTIFICATION. */
@Data
@NoArgsConstructor
public class MobileNotificationDto {

    public static final String TYPE_APPROVAL_REQUEST = "APPROVAL_REQUEST";
    public static final String TYPE_APPLY_RESULT = "APPLY_RESULT";

    private Long notiNo;
    /** Dùng tên recipientId (không dùng personId/cpnyId) để LanguageParameterInterceptor không ghi đè. */
    private String recipientId;
    private String companyId;
    private String notiType;
    private String title;
    private String body;
    /** LEAVE / OT / ANOMALY */
    private String refType;
    /** Số đơn */
    private String refId;
    /** APPROVAL_REQUEST: APPLY_TYPE (để mở chi tiết đơn); APPLY_RESULT: AFFIRM_FLAG cuối (duyệt / từ chối) */
    private String refExtra;
    private String dedupKey;
    private boolean read;
    /** DD/MM/YYYY HH:mm */
    private String createDate;
}
