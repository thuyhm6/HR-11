package com.ait.mobile.common;

/**
 * Trạng thái duyệt đơn (AFFIRM_FLAG, nhóm mã cha 14014304) - dùng chung cho đơn nghỉ phép và tăng ca.
 */
public final class MobileApplyStatus {

    public static final String PENDING = "14014306";
    public static final String IN_PROGRESS = "14014307";
    public static final String APPROVED = "14014308";
    public static final String REJECTED = "14014309";
    public static final String CANCELED = "14014310";

    private MobileApplyStatus() {
    }

    /** Câu SQL hủy đơn (cancelMyLeaveApplyList / cancelMyOtApplyList) chỉ hủy đơn chưa ai duyệt. */
    public static boolean isCancelable(String affirmFlag) {
        return PENDING.equals(affirmFlag);
    }
}
