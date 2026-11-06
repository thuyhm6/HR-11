package com.ait.mobile.common;

import org.springframework.http.HttpStatus;

/**
 * Mã lỗi của Mobile API. {@code messageKey} là key trong messages*.properties,
 * {@code defaultMessage} là fallback tiếng Việt khi không tìm thấy key.
 */
public enum MobileErrorCode {

    INVALID_REQUEST(HttpStatus.BAD_REQUEST, "mobile.error.invalidRequest", "Dữ liệu gửi lên không hợp lệ"),
    /** Vi phạm quy tắc nghiệp vụ (trùng lịch, vượt hạn mức, đã chốt công...) - message cụ thể đi kèm exception. */
    BUSINESS_RULE(HttpStatus.UNPROCESSABLE_ENTITY, "mobile.error.businessRule", "Dữ liệu không hợp lệ"),
    INVALID_CREDENTIALS(HttpStatus.UNAUTHORIZED, "mobile.error.invalidCredentials",
            "Tên đăng nhập hoặc mật khẩu không đúng, hoặc tài khoản không có quyền truy cập"),
    TOO_MANY_ATTEMPTS(HttpStatus.TOO_MANY_REQUESTS, "mobile.error.tooManyAttempts",
            "Quá nhiều lần đăng nhập thất bại. Vui lòng thử lại sau"),
    UNAUTHORIZED(HttpStatus.UNAUTHORIZED, "mobile.error.unauthorized", "Bạn chưa đăng nhập"),
    TOKEN_EXPIRED(HttpStatus.UNAUTHORIZED, "mobile.error.tokenExpired", "Phiên đăng nhập đã hết hạn"),
    TOKEN_INVALID(HttpStatus.UNAUTHORIZED, "mobile.error.tokenInvalid", "Phiên đăng nhập không hợp lệ"),
    REFRESH_INVALID(HttpStatus.UNAUTHORIZED, "mobile.error.refreshInvalid",
            "Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại"),
    USER_INACTIVE(HttpStatus.UNAUTHORIZED, "mobile.error.userInactive", "Tài khoản đã bị khóa hoặc ngừng hoạt động"),
    FORBIDDEN(HttpStatus.FORBIDDEN, "mobile.error.forbidden", "Bạn không có quyền thực hiện chức năng này"),
    PASSWORD_CHANGE_REQUIRED(HttpStatus.FORBIDDEN, "mobile.error.passwordChangeRequired",
            "Bạn cần đổi mật khẩu trước khi tiếp tục"),
    OLD_PASSWORD_WRONG(HttpStatus.BAD_REQUEST, "mobile.error.oldPasswordWrong", "Mật khẩu hiện tại không đúng"),
    PASSWORD_NOT_MATCH(HttpStatus.BAD_REQUEST, "mobile.error.passwordNotMatch", "Mật khẩu xác nhận không khớp"),
    PASSWORD_WEAK(HttpStatus.BAD_REQUEST, "mobile.error.passwordWeak",
            "Mật khẩu phải ít nhất 8 ký tự, gồm chữ hoa, chữ thường, số và ký tự đặc biệt"),
    /** Thao tác nhạy cảm (xem phiếu lương) cần nhập lại mật khẩu - payslip token thiếu / hết hạn. */
    REAUTH_REQUIRED(HttpStatus.FORBIDDEN, "mobile.error.reauthRequired", "Vui lòng nhập lại mật khẩu để tiếp tục"),
    NOT_FOUND(HttpStatus.NOT_FOUND, "mobile.error.notFound", "Không tìm thấy dữ liệu"),
    SYSTEM_ERROR(HttpStatus.INTERNAL_SERVER_ERROR, "mobile.error.system", "Có lỗi xảy ra. Vui lòng thử lại sau");

    private final HttpStatus status;
    private final String messageKey;
    private final String defaultMessage;

    MobileErrorCode(HttpStatus status, String messageKey, String defaultMessage) {
        this.status = status;
        this.messageKey = messageKey;
        this.defaultMessage = defaultMessage;
    }

    public HttpStatus getStatus() {
        return status;
    }

    public String getMessageKey() {
        return messageKey;
    }

    public String getDefaultMessage() {
        return defaultMessage;
    }
}
