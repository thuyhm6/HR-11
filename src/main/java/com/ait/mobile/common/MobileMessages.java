package com.ait.mobile.common;

import com.ait.util.I18nUtil;
import jakarta.servlet.http.HttpServletRequest;
import java.util.Locale;

/**
 * Lấy text đa ngôn ngữ cho Mobile API. Ngôn ngữ do app gửi qua header {@code X-Lang}
 * (vi / en / ko / zh), mặc định tiếng Việt.
 */
public final class MobileMessages {

    public static final String LANG_HEADER = "X-Lang";

    private MobileMessages() {
    }

    public static String resolveLang(HttpServletRequest request) {
        String lang = request != null ? request.getHeader(LANG_HEADER) : null;
        return normalizeLang(lang);
    }

    public static String normalizeLang(String lang) {
        if (lang == null || lang.isBlank()) {
            return "vi";
        }
        String code = lang.trim().toLowerCase();
        return switch (code) {
            case "vi", "en", "ko", "zh" -> code;
            default -> "vi";
        };
    }

    public static Locale resolveLocale(HttpServletRequest request) {
        return I18nUtil.createLocale(resolveLang(request));
    }

    /** Trả message theo key; không có key thì trả {@code fallback}. */
    public static String get(String key, String fallback, Locale locale) {
        return get(key, fallback, locale, (Object[]) null);
    }

    /** Như {@link #get(String, String, Locale)} nhưng có tham số {0}, {1}... (áp dụng cả cho fallback). */
    public static String get(String key, String fallback, Locale locale, Object... args) {
        boolean hasArgs = args != null && args.length > 0;
        String msg = key == null ? null : I18nUtil.getMessage(key, hasArgs ? args : null, locale);
        if (msg == null || msg.isBlank() || msg.equals(key)) {
            return hasArgs && fallback != null ? java.text.MessageFormat.format(fallback.replace("'", "''"), args)
                    : fallback;
        }
        return msg;
    }

    public static String get(MobileErrorCode code, HttpServletRequest request) {
        return get(code.getMessageKey(), code.getDefaultMessage(), resolveLocale(request));
    }
}
