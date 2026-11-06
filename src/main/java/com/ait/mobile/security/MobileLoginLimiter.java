package com.ait.mobile.security;

import com.github.benmanes.caffeine.cache.Cache;
import com.github.benmanes.caffeine.cache.Caffeine;
import java.time.Duration;
import java.util.Locale;
import java.util.concurrent.atomic.AtomicInteger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

/**
 * Chống dò mật khẩu cho /mobile/api/auth/login (chức năng khóa của luồng web đang bị tắt trong
 * HrAuthenticationServiceImpl). Đếm lần sai trong cửa sổ 15 phút:
 * - theo tài khoản: vượt ngưỡng => khóa đăng nhập app tài khoản đó tới hết cửa sổ
 * - theo IP: ngưỡng cao hơn (nhiều người có thể chung IP NAT công ty / reverse proxy)
 * Lưu trong bộ nhớ từng instance - đủ cho 1 server; chạy nhiều instance thì cần chuyển sang bộ đếm dùng chung.
 */
@Component
public class MobileLoginLimiter {

    @Value("${mobile.login.max-failed-per-user:5}")
    private int maxPerUser;

    @Value("${mobile.login.max-failed-per-ip:30}")
    private int maxPerIp;

    /**
     * true khi backend đứng sau reverse proxy GHI ĐÈ header X-Forwarded-For bằng IP client thật
     * (vd. nginx: proxy_set_header X-Forwarded-For $remote_addr). Không bật khi chạy trực tiếp: header do client
     * tự gửi được nên có thể giả mạo. Không bật mà đứng sau proxy => mọi request cùng IP proxy, giới hạn theo IP
     * sẽ chặn chung - khi đó nên tăng max-failed-per-ip.
     */
    @Value("${mobile.login.trust-forwarded-for:false}")
    private boolean trustForwardedFor;

    public String resolveClientIp(jakarta.servlet.http.HttpServletRequest request) {
        if (trustForwardedFor) {
            String xff = request.getHeader("X-Forwarded-For");
            if (xff != null && !xff.isBlank()) {
                return xff.split(",")[0].trim();
            }
        }
        return request.getRemoteAddr();
    }

    private final Cache<String, AtomicInteger> failures = Caffeine.newBuilder()
            .expireAfterWrite(Duration.ofMinutes(15))
            .maximumSize(50_000)
            .build();

    public boolean isBlocked(String username, String ip) {
        return count(userKey(username)) >= maxPerUser || count(ipKey(ip)) >= maxPerIp;
    }

    public void recordFailure(String username, String ip) {
        failures.asMap().computeIfAbsent(userKey(username), k -> new AtomicInteger()).incrementAndGet();
        failures.asMap().computeIfAbsent(ipKey(ip), k -> new AtomicInteger()).incrementAndGet();
    }

    /** Đăng nhập đúng: xóa bộ đếm của tài khoản (không xóa bộ đếm IP). */
    public void recordSuccess(String username) {
        failures.invalidate(userKey(username));
    }

    private int count(String key) {
        AtomicInteger c = failures.getIfPresent(key);
        return c == null ? 0 : c.get();
    }

    private static String userKey(String username) {
        return "u:" + (username == null ? "" : username.trim().toLowerCase(Locale.ROOT));
    }

    private static String ipKey(String ip) {
        return "ip:" + (ip == null ? "" : ip);
    }
}
