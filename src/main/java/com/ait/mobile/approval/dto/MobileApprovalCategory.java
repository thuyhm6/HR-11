package com.ait.mobile.approval.dto;

/** Nhóm đơn theo SY_AFFIRM_EMAIL.APPLY_TYPE_CODE. */
public enum MobileApprovalCategory {

    LEAVE("21"),
    OT("31"),
    /** Công bất thường / quên quẹt thẻ (ESS_CARD_APPLY_TB). */
    ANOMALY("218197"),
    OTHER("");

    private final String code;

    MobileApprovalCategory(String code) {
        this.code = code;
    }

    public String getCode() {
        return code;
    }

    public static MobileApprovalCategory of(String applyTypeCode) {
        for (MobileApprovalCategory c : values()) {
            if (!c.code.isEmpty() && c.code.equals(applyTypeCode)) {
                return c;
            }
        }
        return OTHER;
    }
}
