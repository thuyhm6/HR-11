package com.ait.mobile.leave.controller;

import com.ait.mobile.common.MobileCleverseSync;
import com.ait.mobile.common.MobileCurrentUser;
import com.ait.mobile.common.MobileResponse;
import com.ait.mobile.notification.service.MobileNotificationService;
import com.ait.mobile.common.dto.MobileApproverDto;
import com.ait.mobile.common.dto.MobileCancelRequest;
import com.ait.mobile.leave.dto.MobileLeaveApplyRequest;
import com.ait.mobile.leave.dto.MobileLeaveDetailDto;
import com.ait.mobile.leave.dto.MobileLeaveFormDto;
import com.ait.mobile.leave.dto.MobileLeaveItemDto;
import com.ait.mobile.leave.dto.MobileLeaveLengthDto;
import com.ait.mobile.leave.service.MobileLeaveService;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Pattern;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

/** Nghỉ phép của chính người đăng nhập (personId lấy từ token). */
@RestController
@Validated
@RequestMapping("/mobile/api/leave")
public class MobileLeaveController {

    private static final String DATE = "\\d{4}-\\d{2}-\\d{2}";

    @Autowired
    private MobileLeaveService mobileLeaveService;

    @Autowired
    private MobileCleverseSync cleverseSync;

    @Autowired
    private MobileNotificationService notificationService;

    /** Danh sách loại nghỉ + phép năm. */
    @GetMapping("/form")
    public MobileResponse<MobileLeaveFormDto> form(HttpSession session) {
        return MobileResponse.ok(mobileLeaveService.getFormInfo(MobileCurrentUser.personId(session)));
    }

    /** Thời lượng nghỉ theo ca làm việc. fromTime/toTime: yyyy-MM-dd HH:mm */
    @GetMapping("/length")
    public MobileResponse<MobileLeaveLengthDto> length(
            @RequestParam @Pattern(regexp = MobileLeaveApplyRequest.DATE_TIME_PATTERN) String fromTime,
            @RequestParam @Pattern(regexp = MobileLeaveApplyRequest.DATE_TIME_PATTERN) String toTime,
            @RequestParam(required = false) String leaveTypeCode) {
        return MobileResponse.ok(mobileLeaveService.calcLength(fromTime, toTime, leaveTypeCode));
    }

    /** Kiểm tra loại nghỉ có áp dụng cho nhân viên (giới tính) - lỗi trả BUSINESS_RULE. */
    @GetMapping("/check-type")
    public MobileResponse<Void> checkType(@RequestParam String leaveTypeCode, HttpSession session) {
        mobileLeaveService.checkLeaveType(MobileCurrentUser.personId(session), leaveTypeCode);
        return MobileResponse.ok(null);
    }

    /** Tuyến duyệt dự kiến theo loại nghỉ + số giờ nghỉ. */
    @GetMapping("/approvers")
    public MobileResponse<List<MobileApproverDto>> approvers(@RequestParam(required = false) String leaveTypeCode,
            @RequestParam(defaultValue = "0") String applyLength, HttpSession session) {
        return MobileResponse.ok(
                mobileLeaveService.getApprovers(MobileCurrentUser.personId(session), leaveTypeCode, applyLength));
    }

    /** Gửi đơn: multipart gồm part "data" (JSON MobileLeaveApplyRequest) + "files" (ảnh / PDF, không bắt buộc). */
    @PostMapping(value = "/apply", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public MobileResponse<Map<String, String>> apply(@Valid @RequestPart("data") MobileLeaveApplyRequest req,
            @RequestPart(value = "files", required = false) List<MultipartFile> files, HttpSession session) {
        String applyNo = mobileLeaveService.apply(MobileCurrentUser.personId(session), req, files);
        cleverseSync.sendPendingApprovals();
        notificationService.scanAsync();
        return MobileResponse.ok(Map.of("applyNo", applyNo));
    }

    /** Đơn nghỉ của tôi. fromDate/toDate: yyyy-MM-dd (lọc theo ngày bắt đầu nghỉ). */
    @GetMapping("/list")
    public MobileResponse<List<MobileLeaveItemDto>> list(
            @RequestParam(required = false) @Pattern(regexp = DATE) String fromDate,
            @RequestParam(required = false) @Pattern(regexp = DATE) String toDate,
            @RequestParam(required = false) String affirmFlag) {
        return MobileResponse.ok(mobileLeaveService.getMyList(fromDate, toDate, affirmFlag));
    }

    @GetMapping("/{applyNo}")
    public MobileResponse<MobileLeaveDetailDto> detail(@PathVariable @Pattern(regexp = "\\d{1,20}") String applyNo,
            HttpSession session) {
        return MobileResponse.ok(mobileLeaveService.getDetail(MobileCurrentUser.personId(session), applyNo));
    }

    /** Hủy đơn đang chờ duyệt. */
    @PostMapping("/cancel")
    public MobileResponse<Map<String, Integer>> cancel(@Valid @RequestBody MobileCancelRequest req) {
        int count = mobileLeaveService.cancel(req.getApplyNos());
        cleverseSync.sendPendingApprovals();
        return MobileResponse.ok(Map.of("count", count));
    }
}
