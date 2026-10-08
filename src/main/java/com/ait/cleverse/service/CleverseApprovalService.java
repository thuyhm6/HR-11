package com.ait.cleverse.service;

/**
 * Đồng bộ đơn xin phép (nghỉ phép, tăng ca, OT over, quẹt thẻ, đào tạo) sang hộp phê duyệt Cleverse.
 * Port từ Hanwha_HAE: MailSendApprovalManager.sendAffirmInfoEmailApproval
 * + SendEmailSerImpl.getAffirmInfoEmailApproval.
 */
public interface CleverseApprovalService {

    /**
     * Lấy toàn bộ đơn chờ duyệt chưa gửi (SEND_EMAIL_FLAG = 0) của công ty hiện tại, gửi từng đơn
     * sang Cleverse (ApprovalService.submitApproval) và đánh dấu SEND_EMAIL_FLAG = 1 nếu gửi thành công.
     * Không ném exception - lỗi chỉ được ghi log để không ảnh hưởng nghiệp vụ lưu đơn.
     *
     * @return số đơn gửi thành công
     */
    int sendAffirmInfoEmailApproval();
}
