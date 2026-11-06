package com.ait.mobile.security;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletRequestWrapper;
import jakarta.servlet.http.HttpSession;

/**
 * Bọc request mobile để mọi lời gọi getSession() trả về {@link MobileHttpSession} dựng từ JWT
 * (không bao giờ tạo session thật trên server).
 */
public class MobileSessionRequestWrapper extends HttpServletRequestWrapper {

    private final MobileHttpSession session;

    public MobileSessionRequestWrapper(HttpServletRequest request, MobileHttpSession session) {
        super(request);
        this.session = session;
    }

    @Override
    public HttpSession getSession(boolean create) {
        return session;
    }

    @Override
    public HttpSession getSession() {
        return session;
    }

    @Override
    public String changeSessionId() {
        return session.getId();
    }

    @Override
    public String getRequestedSessionId() {
        return session.getId();
    }

    @Override
    public boolean isRequestedSessionIdValid() {
        return true;
    }
}
