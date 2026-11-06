package com.ait.mobile.common;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Định dạng phản hồi thống nhất cho toàn bộ /mobile/api/**.
 * App chỉ cần kiểm tra {@code success}; khi lỗi đọc {@code errorCode} (xem {@link MobileErrorCode})
 * để xử lý theo logic (vd. TOKEN_EXPIRED => refresh token) và {@code message} để hiển thị.
 */
@Data
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class MobileResponse<T> {

    private boolean success;
    private T data;
    private String message;
    private String errorCode;

    public static <T> MobileResponse<T> ok(T data) {
        return ok(data, null);
    }

    public static <T> MobileResponse<T> ok(T data, String message) {
        MobileResponse<T> resp = new MobileResponse<>();
        resp.success = true;
        resp.data = data;
        resp.message = message;
        return resp;
    }

    public static <T> MobileResponse<T> fail(String errorCode, String message) {
        MobileResponse<T> resp = new MobileResponse<>();
        resp.success = false;
        resp.errorCode = errorCode;
        resp.message = message;
        return resp;
    }
}
