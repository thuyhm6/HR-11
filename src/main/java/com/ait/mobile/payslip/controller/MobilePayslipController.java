package com.ait.mobile.payslip.controller;

import com.ait.mobile.common.MobileCurrentUser;
import com.ait.mobile.common.MobileMessages;
import com.ait.mobile.common.MobileResponse;
import com.ait.mobile.payslip.dto.MobilePayScheduleDto;
import com.ait.mobile.payslip.dto.MobilePayslipDto;
import com.ait.mobile.payslip.service.MobilePayslipService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.constraints.Pattern;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.CacheControl;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/** Phiếu lương của chính người đăng nhập. */
@RestController
@Validated
@RequestMapping("/mobile/api/payslip")
public class MobilePayslipController {

    public static final String TOKEN_HEADER = "X-Payslip-Token";

    @Autowired
    private MobilePayslipService payslipService;

    @GetMapping("/schedules")
    public MobileResponse<List<MobilePayScheduleDto>> schedules() {
        return MobileResponse.ok(payslipService.getOpenSchedules());
    }

    /** Body: { "password": "..." } -> { payslipToken, expiresIn } */
    @PostMapping("/unlock")
    public MobileResponse<Map<String, Object>> unlock(@RequestBody Map<String, String> body, HttpSession session) {
        String token = payslipService.unlock(MobileCurrentUser.user(session), MobileCurrentUser.deviceId(session),
                body == null ? null : body.get("password"));
        return MobileResponse.ok(Map.of("payslipToken", token, "expiresIn", MobilePayslipService.TOKEN_SECONDS));
    }

    /** Header X-Payslip-Token bắt buộc. Không cho trình duyệt / WebView lưu cache dữ liệu lương. */
    @GetMapping("/{payScheduleNo}")
    public ResponseEntity<MobileResponse<MobilePayslipDto>> payslip(
            @PathVariable @Pattern(regexp = "[\\w\\-]{1,30}") String payScheduleNo,
            @RequestHeader(value = TOKEN_HEADER, required = false) String payslipToken,
            HttpSession session, HttpServletRequest request) {
        MobilePayslipDto dto = payslipService.getPayslip(MobileCurrentUser.user(session),
                MobileCurrentUser.deviceId(session), payslipToken, payScheduleNo, MobileMessages.resolveLang(request));
        return ResponseEntity.ok().cacheControl(CacheControl.noStore()).body(MobileResponse.ok(dto));
    }
}
