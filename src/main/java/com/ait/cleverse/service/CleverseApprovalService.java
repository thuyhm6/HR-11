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

    /**
     * Port SendEmailSerImpl.synchronizationApprovalStatus (chạy định kỳ từ CleverseApprovalScheduler):
     * lấy trạng thái phê duyệt trên Cleverse của các đơn đã gửi và chưa kết thúc, với mỗi người duyệt
     * đã xử lý trên Cleverse thì gọi PKG_AFFIRM_EMAIL.PR_AFFIRM_EXECUTE để cập nhật vào HR.
     * Đơn nghỉ bắt đầu sau giờ vào ca (TIME_FLAG = 1) được báo mail cho bảo vệ 1 lần.
     * Không ném exception - lỗi được ghi log, 1 đơn lỗi không dừng cả lô.
     *
     * @return số đơn đã xử lý đồng bộ
     */
    int synchronizationApprovalStatus();
}
