package com.ait.mobile.overtime.controller;

import com.ait.mobile.common.MobileCleverseSync;
import com.ait.mobile.common.MobileCurrentUser;
import com.ait.mobile.common.MobileResponse;
import com.ait.mobile.notification.service.MobileNotificationService;
import com.ait.mobile.common.dto.MobileApproverDto;
import com.ait.mobile.common.dto.MobileCancelRequest;
import com.ait.mobile.overtime.dto.MobileOtApplyRequest;
import com.ait.mobile.overtime.dto.MobileOtDateInfoDto;
import com.ait.mobile.overtime.dto.MobileOtItemDto;
import com.ait.mobile.overtime.service.MobileOvertimeService;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Pattern;
import java.math.BigDecimal;
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

/** Tăng ca của chính người đăng nhập (personId lấy từ token). */
@RestController
@Validated
@RequestMapping("/mobile/api/overtime")
public class MobileOvertimeController {

    @Autowired
    private MobileOvertimeService mobileOvertimeService;

    @Autowired
    private MobileCleverseSync cleverseSync;

    @Autowired
    private MobileNotificationService notificationService;

    /** Ca làm, giờ quẹt thẻ, loại OT, tổng OT tháng/năm của ngày applyDate (yyyy-MM-dd). */
    @GetMapping("/date-info")
    public MobileResponse<MobileOtDateInfoDto> dateInfo(
            @RequestParam @Pattern(regexp = MobileOtApplyRequest.DATE_PATTERN) String applyDate) {
        return MobileResponse.ok(mobileOvertimeService.getDateInfo(applyDate));
    }

    /** Số giờ OT. otFromTime/otToTime: yyyy-MM-dd HH:mm */
    @GetMapping("/duration")
    public MobileResponse<Map<String, BigDecimal>> duration(
            @RequestParam @Pattern(regexp = MobileOtApplyRequest.DATE_PATTERN) String applyOtDate,
            @RequestParam @Pattern(regexp = MobileOtApplyRequest.DATE_TIME_PATTERN) String otFromTime,
            @RequestParam @Pattern(regexp = MobileOtApplyRequest.DATE_TIME_PATTERN) String otToTime,
            @RequestParam(defaultValue = "false") boolean deductMeal) {
        return MobileResponse.ok(Map.of("otLength",
                mobileOvertimeService.calcDuration(applyOtDate, otFromTime, otToTime, deductMeal)));
    }

    @GetMapping("/approvers")
    public MobileResponse<List<MobileApproverDto>> approvers(@RequestParam(required = false) String otTypeCode,
            @RequestParam(defaultValue = "0") String applyLength, HttpSession session) {
        return MobileResponse.ok(
                mobileOvertimeService.getApprovers(MobileCurrentUser.personId(session), otTypeCode, applyLength));
    }

    @PostMapping("/apply")
    public MobileResponse<Map<String, String>> apply(@Valid @RequestBody MobileOtApplyRequest req,
            HttpSession session) {
        String applyNo = mobileOvertimeService.apply(MobileCurrentUser.user(session), req);
        cleverseSync.sendPendingApprovals();
        notificationService.scanAsync();
        return MobileResponse.ok(Map.of("applyNo", applyNo == null ? "" : applyNo));
    }

    /** Đơn tăng ca của tôi. fromDate/toDate: yyyy-MM-dd (lọc theo ngày tăng ca). */
    @GetMapping("/list")
    public MobileResponse<List<MobileOtItemDto>> list(
            @RequestParam(required = false) @Pattern(regexp = MobileOtApplyRequest.DATE_PATTERN) String fromDate,
            @RequestParam(required = false) @Pattern(regexp = MobileOtApplyRequest.DATE_PATTERN) String toDate,
            @RequestParam(required = false) String affirmFlag) {
        return MobileResponse.ok(mobileOvertimeService.getMyList(fromDate, toDate, affirmFlag));
    }

    @PostMapping("/cancel")
    public MobileResponse<Map<String, Integer>> cancel(@Valid @RequestBody MobileCancelRequest req) {
        int count = mobileOvertimeService.cancel(req.getApplyNos());
        cleverseSync.sendPendingApprovals();
        return MobileResponse.ok(Map.of("count", count));
    }
}
