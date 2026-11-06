package com.ait.mobile.approval.controller;

import com.ait.mobile.approval.dto.MobileApprovalDetailDto;
import com.ait.mobile.approval.dto.MobileApprovalExecuteRequest;
import com.ait.mobile.approval.dto.MobileApprovalExecuteResult;
import com.ait.mobile.approval.dto.MobileApprovalItemDto;
import com.ait.mobile.approval.service.MobileApprovalService;
import com.ait.mobile.common.MobileCleverseSync;
import com.ait.mobile.common.MobileCurrentUser;
import com.ait.mobile.common.MobileResponse;
import com.ait.mobile.notification.service.MobileNotificationService;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Pattern;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/** Phê duyệt đơn trên app (người duyệt = người đăng nhập). */
@RestController
@Validated
@RequestMapping("/mobile/api/approval")
public class MobileApprovalController {

    private static final String TYPE_CODE = "21|31|218197";

    @Autowired
    private MobileApprovalService approvalService;

    @Autowired
    private MobileCleverseSync cleverseSync;

    @Autowired
    private MobileNotificationService notificationService;

    /** Đơn đang chờ tôi duyệt. type: 21 nghỉ phép / 31 tăng ca / 218197 công bất thường. */
    @GetMapping("/pending")
    public MobileResponse<List<MobileApprovalItemDto>> pending(
            @RequestParam(required = false) @Pattern(regexp = TYPE_CODE) String type) {
        return MobileResponse.ok(approvalService.getPending(type));
    }

    /** Đơn tôi đã xử lý trong tháng này. */
    @GetMapping("/history")
    public MobileResponse<List<MobileApprovalItemDto>> history(
            @RequestParam(required = false) @Pattern(regexp = TYPE_CODE) String type) {
        return MobileResponse.ok(approvalService.getHistory(type));
    }

    @GetMapping("/counts")
    public MobileResponse<Map<String, Integer>> counts() {
        return MobileResponse.ok(approvalService.getCounts());
    }

    @GetMapping("/detail")
    public MobileResponse<MobileApprovalDetailDto> detail(@RequestParam @Pattern(regexp = "\\d{1,20}") String applyNo,
            @RequestParam String applyType, HttpSession session) {
        return MobileResponse.ok(approvalService.getDetail(MobileCurrentUser.personId(session), applyNo, applyType));
    }

    /** Duyệt / từ chối 1 hoặc nhiều đơn. Đơn lỗi trả trong failures, đơn khác vẫn được xử lý. */
    @PostMapping("/execute")
    public MobileResponse<MobileApprovalExecuteResult> execute(@Valid @RequestBody MobileApprovalExecuteRequest req,
            HttpSession session) {
        MobileApprovalExecuteResult result = approvalService.execute(MobileCurrentUser.personId(session), req);
        if (result.getSuccessCount() > 0) {
            // Gửi tiếp cấp duyệt kế tiếp sang Cleverse + báo người gửi đơn / người duyệt kế tiếp
            cleverseSync.sendPendingApprovals();
            notificationService.scanAsync();
        }
        return MobileResponse.ok(result);
    }
}
