package com.ait.mobile.common;

import jakarta.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * Xử lý lỗi tập trung cho các controller thuộc com.ait.mobile - ưu tiên cao hơn
 * GlobalApiExceptionHandler để app luôn nhận đúng định dạng {@link MobileResponse}.
 */
@RestControllerAdvice(basePackages = "com.ait.mobile")
@Order(Ordered.HIGHEST_PRECEDENCE)
public class MobileExceptionHandler {

    private static final Logger log = LoggerFactory.getLogger(MobileExceptionHandler.class);

    @ExceptionHandler(MobileException.class)
    public ResponseEntity<MobileResponse<Void>> handleMobile(MobileException ex, HttpServletRequest request) {
        MobileErrorCode code = ex.getErrorCode();
        log.warn("Mobile API error uri={} code={} msg={}", request.getRequestURI(), code, ex.getMessage());
        String message;
        if (ex.getMessageKey() != null) {
            message = MobileMessages.get(ex.getMessageKey(), ex.getMessage(), MobileMessages.resolveLocale(request),
                    ex.getMessageArgs());
        } else if (code == MobileErrorCode.BUSINESS_RULE) {
            message = ex.getMessage();
        } else {
            message = MobileMessages.get(code, request);
        }
        return ResponseEntity.status(code.getStatus()).body(MobileResponse.fail(code.name(), message));
    }

    /**
     * Service nghiệp vụ dùng chung với web ném IllegalArgumentException / IllegalStateException kèm message
     * hiển thị cho người dùng (trùng lịch, đã chốt công, vượt hạn mức...) - trả nguyên message đó.
     */
    @ExceptionHandler({ IllegalArgumentException.class, IllegalStateException.class })
    public ResponseEntity<MobileResponse<Void>> handleBusinessRule(RuntimeException ex, HttpServletRequest request) {
        log.warn("Mobile API business rule uri={} msg={}", request.getRequestURI(), ex.getMessage());
        MobileErrorCode code = MobileErrorCode.BUSINESS_RULE;
        String message = ex.getMessage() == null || ex.getMessage().isBlank()
                ? MobileMessages.get(code, request) : ex.getMessage();
        return ResponseEntity.status(code.getStatus()).body(MobileResponse.fail(code.name(), message));
    }

    @ExceptionHandler({ MethodArgumentNotValidException.class, HttpMessageNotReadableException.class,
            jakarta.validation.ConstraintViolationException.class,
            org.springframework.web.method.annotation.HandlerMethodValidationException.class,
            org.springframework.web.bind.MissingServletRequestParameterException.class,
            org.springframework.web.multipart.support.MissingServletRequestPartException.class,
            org.springframework.web.method.annotation.MethodArgumentTypeMismatchException.class })
    public ResponseEntity<MobileResponse<Void>> handleBadRequest(Exception ex, HttpServletRequest request) {
        log.warn("Mobile API bad request uri={} msg={}", request.getRequestURI(), ex.getMessage());
        MobileErrorCode code = MobileErrorCode.INVALID_REQUEST;
        return ResponseEntity.status(code.getStatus())
                .body(MobileResponse.fail(code.name(), MobileMessages.get(code, request)));
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<MobileResponse<Void>> handleUnexpected(Exception ex, HttpServletRequest request) {
        log.error("Mobile API unexpected error uri={} msg={}", request.getRequestURI(), ex.getMessage(), ex);
        MobileErrorCode code = MobileErrorCode.SYSTEM_ERROR;
        return ResponseEntity.status(code.getStatus())
                .body(MobileResponse.fail(code.name(), MobileMessages.get(code, request)));
    }
}
