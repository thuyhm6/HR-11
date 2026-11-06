package com.ait.mobile.common;

/**
 * Lỗi nghiệp vụ của Mobile API - được {@link MobileExceptionHandler} chuyển thành
 * {@link MobileResponse#fail} với HTTP status tương ứng của {@link MobileErrorCode}.
 *
 * Message hiển thị: nếu có {@code messageKey} thì dịch theo ngôn ngữ app (fallback = message của exception),
 * ngược lại dùng message mặc định của {@link MobileErrorCode}; riêng BUSINESS_RULE dùng thẳng message exception.
 */
public class MobileException extends RuntimeException {

    private final MobileErrorCode errorCode;
    private final String messageKey;
    private final transient Object[] messageArgs;

    public MobileException(MobileErrorCode errorCode) {
        this(errorCode, null, errorCode.getDefaultMessage());
    }

    public MobileException(MobileErrorCode errorCode, String message) {
        this(errorCode, null, message);
    }

    /** @param fallback text tiếng Việt khi không tìm thấy {@code messageKey} */
    public MobileException(MobileErrorCode errorCode, String messageKey, String fallback, Object... messageArgs) {
        super(fallback);
        this.errorCode = errorCode;
        this.messageKey = messageKey;
        this.messageArgs = messageArgs;
    }

    /** Lỗi nghiệp vụ có key i18n (dùng lại key của web nếu đã có). */
    public static MobileException rule(String messageKey, String fallback, Object... args) {
        return new MobileException(MobileErrorCode.BUSINESS_RULE, messageKey, fallback, args);
    }

    public MobileErrorCode getErrorCode() {
        return errorCode;
    }

    public String getMessageKey() {
        return messageKey;
    }

    public Object[] getMessageArgs() {
        return messageArgs;
    }
}
