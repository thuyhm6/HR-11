package com.ait.mobile.security;

import jakarta.servlet.ServletContext;
import jakarta.servlet.http.HttpSession;
import java.util.Collections;
import java.util.Enumeration;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.function.Supplier;

/**
 * HttpSession "ảo" chỉ tồn tại trong 1 request mobile, dựng từ JWT.
 *
 * Mục đích: các Controller / Service / LanguageParameterInterceptor hiện có đều đọc
 * {@code currentHrUser, adminID, cpnyId, adminIP, language...} từ HttpSession. Thay vì sửa toàn bộ code cũ,
 * {@link MobileJwtAuthenticationFilter} bọc request bằng {@link MobileSessionRequestWrapper} trả về session
 * này => code cũ chạy nguyên vẹn, server không tạo session thật (stateless).
 *
 * Hỗ trợ attribute "lười" (lazy) qua {@link #putLazy} cho các giá trị tốn truy vấn mà ít API dùng tới.
 */
public class MobileHttpSession implements HttpSession {

    private final String id = "mobile-" + UUID.randomUUID();
    private final long creationTime = System.currentTimeMillis();
    private final ServletContext servletContext;
    private final Map<String, Object> attributes = new ConcurrentHashMap<>();
    private final Map<String, Supplier<?>> lazyAttributes = new ConcurrentHashMap<>();

    public MobileHttpSession(ServletContext servletContext) {
        this.servletContext = servletContext;
    }

    public void putLazy(String name, Supplier<?> supplier) {
        lazyAttributes.put(name, supplier);
    }

    @Override
    public Object getAttribute(String name) {
        Object value = attributes.get(name);
        if (value == null) {
            Supplier<?> supplier = lazyAttributes.remove(name);
            if (supplier != null) {
                value = supplier.get();
                if (value != null) {
                    attributes.put(name, value);
                }
            }
        }
        return value;
    }

    @Override
    public Enumeration<String> getAttributeNames() {
        Set<String> names = new HashSet<>(attributes.keySet());
        names.addAll(lazyAttributes.keySet());
        return Collections.enumeration(names);
    }

    @Override
    public void setAttribute(String name, Object value) {
        if (value == null) {
            removeAttribute(name);
        } else {
            attributes.put(name, value);
        }
    }

    @Override
    public void removeAttribute(String name) {
        attributes.remove(name);
        lazyAttributes.remove(name);
    }

    @Override
    public void invalidate() {
        attributes.clear();
        lazyAttributes.clear();
    }

    @Override
    public long getCreationTime() {
        return creationTime;
    }

    @Override
    public String getId() {
        return id;
    }

    @Override
    public long getLastAccessedTime() {
        return creationTime;
    }

    @Override
    public ServletContext getServletContext() {
        return servletContext;
    }

    @Override
    public void setMaxInactiveInterval(int interval) {
        // Không áp dụng - vòng đời theo request
    }

    @Override
    public int getMaxInactiveInterval() {
        return 0;
    }

    @Override
    public boolean isNew() {
        return false;
    }
}
