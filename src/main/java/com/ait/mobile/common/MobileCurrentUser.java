package com.ait.mobile.common;

import com.ait.mobile.security.MobileSessionKeys;
import com.ait.sy.sys.service.HrAuthenticationService.HrUserInfo;
import jakarta.servlet.http.HttpSession;

/**
 * Lấy người dùng hiện tại từ MobileHttpSession (dựng từ JWT). Mọi API mobile phải lấy personId từ đây,
 * KHÔNG nhận personId từ client (tránh xem / tạo dữ liệu thay người khác).
 */
public final class MobileCurrentUser {

    private MobileCurrentUser() {
    }

    public static HrUserInfo user(HttpSession session) {
        HrUserInfo user = session == null ? null : (HrUserInfo) session.getAttribute("currentHrUser");
        if (user == null) {
            throw new MobileException(MobileErrorCode.UNAUTHORIZED);
        }
        return user;
    }

    public static String personId(HttpSession session) {
        return user(session).getPersonId();
    }

    public static String deviceId(HttpSession session) {
        return session == null ? null : (String) session.getAttribute(MobileSessionKeys.DEVICE_ID);
    }
}
