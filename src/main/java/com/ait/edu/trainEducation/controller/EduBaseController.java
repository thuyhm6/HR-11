package com.ait.edu.trainEducation.controller;

import com.ait.util.I18nUtil;
import jakarta.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.HashMap;
import java.util.Map;

/**
 * Phần dùng chung cho các controller API của module Đào tạo: định dạng kết quả {success, message, ...} (message là key
 * messages.properties, dịch theo ngôn ngữ session) và xử lý lỗi @Valid trả về cùng định dạng.
 */
public abstract class EduBaseController {
    private static final Logger log = LoggerFactory.getLogger(EduBaseController.class);

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, Object>> handleValidation(MethodArgumentNotValidException ex) {
        FieldError error = ex.getBindingResult().getFieldError();
        String key = error != null ? error.getDefaultMessage() : "alert.message.add_fail";
        log.warn("{} validation failed: field={}, key={}", getClass().getSimpleName(),
                error != null ? error.getField() : null, key);
        return ResponseEntity.badRequest().body(result(false, key));
    }

    /**
     * Người quản lý đào tạo được xem/đánh giá tất cả khóa học - thay cho danh sách mã nhân viên hard-code của bản gốc
     * ("11111111", "11111112", "30100104", "40110008").
     */
    protected boolean isTrainManager(HttpServletRequest request) {
        return request.isUserInRole("ADMIN") || request.isUserInRole("SYS") || request.isUserInRole("HRM");
    }

    protected Map<String, Object> result(boolean success, String messageKey) {
        Map<String, Object> map = new HashMap<>();
        map.put("success", success);
        map.put("message", I18nUtil.getMessage(messageKey));
        return map;
    }
}
