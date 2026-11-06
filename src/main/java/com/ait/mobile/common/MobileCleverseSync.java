package com.ait.mobile.common;

import com.ait.cleverse.service.CleverseApprovalService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * Đẩy đơn mới / kết quả duyệt sang hộp phê duyệt Cleverse - gọi SAU khi transaction lưu đơn đã commit
 * (giống EssInfoApplyAttendanceController / ArOvertimeManagentController ở web).
 * Lỗi đồng bộ không làm hỏng kết quả trả về app; scheduler resend của Cleverse sẽ gửi lại.
 */
@Component
public class MobileCleverseSync {

    private static final Logger log = LoggerFactory.getLogger(MobileCleverseSync.class);

    @Autowired
    private CleverseApprovalService cleverseApprovalService;

    public void sendPendingApprovals() {
        try {
            cleverseApprovalService.sendAffirmInfoEmailApproval();
        } catch (Exception e) {
            log.error("[Mobile] Lỗi đồng bộ phê duyệt sang Cleverse: {}", e.getMessage(), e);
        }
    }
}
