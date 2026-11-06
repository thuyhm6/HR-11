package com.ait.mobile.auth.controller;

import com.ait.mobile.auth.dto.MobileChangePasswordRequest;
import com.ait.mobile.auth.dto.MobileLoginRequest;
import com.ait.mobile.auth.dto.MobileRefreshRequest;
import com.ait.mobile.auth.dto.MobileTokenResponse;
import com.ait.mobile.auth.dto.MobileUserDto;
import com.ait.mobile.auth.service.MobileAuthService;
import com.ait.mobile.common.MobileCurrentUser;
import com.ait.mobile.common.MobileErrorCode;
import com.ait.mobile.common.MobileException;
import com.ait.mobile.common.MobileResponse;
import com.ait.sy.sys.service.HrAuthenticationService.HrUserInfo;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Đăng nhập / phiên làm việc cho app mobile.
 * HttpSession ở đây là MobileHttpSession dựng từ JWT (xem MobileJwtAuthenticationFilter).
 */
@RestController
@RequestMapping("/mobile/api/auth")
public class MobileAuthController {

    @Autowired
    private MobileAuthService mobileAuthService;

    /** Public. */
    @PostMapping("/login")
    public MobileResponse<MobileTokenResponse> login(@Valid @RequestBody MobileLoginRequest req,
            HttpServletRequest request) {
        return MobileResponse.ok(mobileAuthService.login(req, request));
    }

    /** Public - app gọi khi access token hết hạn (errorCode TOKEN_EXPIRED). */
    @PostMapping("/refresh")
    public MobileResponse<MobileTokenResponse> refresh(@Valid @RequestBody MobileRefreshRequest req,
            HttpServletRequest request) {
        return MobileResponse.ok(mobileAuthService.refresh(req, request));
    }

    @PostMapping("/logout")
    public MobileResponse<Void> logout(HttpSession session) {
        mobileAuthService.logout(currentUser(session), deviceId(session));
        return MobileResponse.ok(null);
    }

    @GetMapping("/me")
    public MobileResponse<Map<String, Object>> me(HttpSession session) {
        HrUserInfo user = currentUser(session);
        return MobileResponse.ok(Map.of(
                "user", MobileUserDto.from(user),
                "requirePasswordChange", Boolean.TRUE.equals(session.getAttribute("requirePasswordChange"))));
    }

    /** Trả cặp token mới cho thiết bị hiện tại; các thiết bị khác bị đăng xuất. */
    @PostMapping("/change-password")
    public MobileResponse<MobileTokenResponse> changePassword(@Valid @RequestBody MobileChangePasswordRequest req,
            HttpSession session, HttpServletRequest request) {
        return MobileResponse.ok(
                mobileAuthService.changePassword(currentUser(session), deviceId(session), req, request));
    }

    @PostMapping("/fcm-token")
    public MobileResponse<Void> registerFcmToken(@RequestBody Map<String, String> body, HttpSession session) {
        String fcmToken = body.get("fcmToken");
        if (fcmToken == null || fcmToken.isBlank() || fcmToken.length() > 500) {
            throw new MobileException(MobileErrorCode.INVALID_REQUEST);
        }
        mobileAuthService.registerFcmToken(currentUser(session), deviceId(session), fcmToken.trim());
        return MobileResponse.ok(null);
    }

    private static HrUserInfo currentUser(HttpSession session) {
        return MobileCurrentUser.user(session);
    }

    private static String deviceId(HttpSession session) {
        return MobileCurrentUser.deviceId(session);
    }
}
