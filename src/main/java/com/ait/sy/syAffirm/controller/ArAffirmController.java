package com.ait.sy.syAffirm.controller;

import com.ait.exception.BusinessException;
import com.ait.sy.syAffirm.dto.ArAffirmDto;
import com.ait.sy.syAffirm.service.ArAffirmService;
import com.ait.util.I18nUtil;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

/**
 * Quy trình phê duyệt chấm công - API JSON cho trang Angular /view-ar-affirm-list (thay cho các trang JSP
 * /sys/arAffirm/viewArAffirmList, addArAffirmView, updateArAffirmView của dự án Hanwha_HTSV).
 * Nằm dưới /sys/api/** nên chỉ ROLE ADMIN/SYS gọi được (xem SecurityConfig).
 */
@RestController
@RequestMapping("/sys/api/arAffirm")
public class ArAffirmController {
    private static final Logger log = LoggerFactory.getLogger(ArAffirmController.class);

    @Autowired
    private ArAffirmService service;

    @GetMapping("/applyTypes")
    public ResponseEntity<?> getApplyTypes() {
        try {
            return ResponseEntity.ok(service.getApplyTypeList());
        } catch (BusinessException e) {
            return ResponseEntity.internalServerError().body(result(false, e.getUserMessage()));
        }
    }

    @GetMapping("/list")
    public ResponseEntity<?> getList(@RequestParam(required = false) String applyType) {
        try {
            return ResponseEntity.ok(service.getList(applyType));
        } catch (BusinessException e) {
            return ResponseEntity.internalServerError().body(result(false, e.getUserMessage()));
        }
    }

    @PostMapping("/add")
    public ResponseEntity<Map<String, Object>> add(@Valid @RequestBody ArAffirmDto dto) {
        try {
            service.add(dto);
            return ResponseEntity.ok(result(true, "common.saveSuccess"));
        } catch (BusinessException e) {
            return ResponseEntity.ok(result(false, e.getUserMessage()));
        }
    }

    @PostMapping("/update")
    public ResponseEntity<Map<String, Object>> update(@Valid @RequestBody ArAffirmDto dto) {
        try {
            service.update(dto);
            return ResponseEntity.ok(result(true, "common.saveSuccess"));
        } catch (BusinessException e) {
            return ResponseEntity.ok(result(false, e.getUserMessage()));
        }
    }

    @PostMapping("/delete")
    public ResponseEntity<Map<String, Object>> delete(@RequestParam Long applyParamNo) {
        try {
            service.delete(applyParamNo);
            return ResponseEntity.ok(result(true, "common.deleteSuccess"));
        } catch (BusinessException e) {
            return ResponseEntity.ok(result(false, e.getUserMessage()));
        }
    }

    /** Lỗi @Valid trả về cùng định dạng {success, message} để frontend hiển thị trực tiếp. */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, Object>> handleValidation(MethodArgumentNotValidException ex) {
        FieldError error = ex.getBindingResult().getFieldError();
        String key = error != null ? error.getDefaultMessage() : "vhal.msg.saveFail";
        log.warn("ArAffirm validation failed: {}", key);
        return ResponseEntity.badRequest().body(result(false, key));
    }

    /** message là key trong messages.properties - dịch theo ngôn ngữ hiện tại của session. */
    private Map<String, Object> result(boolean success, String messageKey) {
        Map<String, Object> map = new HashMap<>();
        map.put("success", success);
        map.put("message", I18nUtil.getMessage(messageKey));
        return map;
    }
}
