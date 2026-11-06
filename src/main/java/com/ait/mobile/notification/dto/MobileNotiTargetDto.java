package com.ait.mobile.notification.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

/** Một thông báo cần tạo (kết quả quét SY_AFFIRM_EMAIL / bảng đơn). */
@Data
@NoArgsConstructor
public class MobileNotiTargetDto {

    private String recipientId;
    private String companyId;
    /** Ngôn ngữ app của người nhận. */
    private String deviceLang;
    private String applyNo;
    private String applyType;
    /** 21 / 31 / 218197 (đơn cần duyệt) hoặc LEAVE / OT (kết quả đơn). */
    private String category;
    private String affirmLevel;
    private String affirmFlag;
    private String applicantName;
    private String typeName;
    /** Ngày / giờ của đơn đã định dạng (DD/MM/YYYY [HH:mm]). */
    private String period;
}
