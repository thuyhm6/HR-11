package com.ait.mobile.auth.service;

import com.ait.mobile.auth.dto.MobileChangePasswordRequest;
import com.ait.mobile.auth.dto.MobileLoginRequest;
import com.ait.mobile.auth.dto.MobileRefreshRequest;
import com.ait.mobile.auth.dto.MobileTokenResponse;
import com.ait.sy.sys.service.HrAuthenticationService.HrUserInfo;
import jakarta.servlet.http.HttpServletRequest;

public interface MobileAuthService {

    /** Đăng nhập bằng tài khoản HR, cấp access + refresh token, ghi nhận thiết bị. */
    MobileTokenResponse login(MobileLoginRequest req, HttpServletRequest request);

    /** Đổi refresh token cũ lấy cặp token mới (xoay vòng; phát hiện token bị dùng lại). */
    MobileTokenResponse refresh(MobileRefreshRequest req, HttpServletRequest request);

    /** Thu hồi refresh token của thiết bị hiện tại và ngừng gửi push. */
    void logout(HrUserInfo user, String deviceId);

    /** Đổi mật khẩu; thu hồi phiên ở các thiết bị khác; trả token mới cho thiết bị hiện tại. */
    MobileTokenResponse changePassword(HrUserInfo user, String deviceId, MobileChangePasswordRequest req,
            HttpServletRequest request);

    void registerFcmToken(HrUserInfo user, String deviceId, String fcmToken);
}
