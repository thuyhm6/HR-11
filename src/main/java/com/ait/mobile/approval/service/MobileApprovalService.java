package com.ait.mobile.approval.service;

import com.ait.mobile.approval.dto.MobileApprovalDetailDto;
import com.ait.mobile.approval.dto.MobileApprovalExecuteRequest;
import com.ait.mobile.approval.dto.MobileApprovalExecuteResult;
import com.ait.mobile.approval.dto.MobileApprovalItemDto;
import java.util.List;
import java.util.Map;

/**
 * Phê duyệt trên app - dùng lại hộp duyệt SY_AFFIRM_EMAIL và PKG_AFFIRM_EMAIL.PR_AFFIRM_EXECUTE của màn
 * "Phê duyệt" (view-approval-email) ở web.
 */
public interface MobileApprovalService {

    /** @param applyTypeCode 21 / 31 / 218197 hoặc null = tất cả */
    List<MobileApprovalItemDto> getPending(String applyTypeCode);

    /** Đơn tôi đã duyệt / từ chối trong tháng này (giống web). */
    List<MobileApprovalItemDto> getHistory(String applyTypeCode);

    /** Số đơn chờ duyệt: total / leave / ot / anomaly. */
    Map<String, Integer> getCounts();

    MobileApprovalDetailDto getDetail(String approverId, String applyNo, String applyType);

    MobileApprovalExecuteResult execute(String approverId, MobileApprovalExecuteRequest req);
}
