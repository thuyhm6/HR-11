package com.ait.sy.syAffirm.controller;

import com.ait.exception.BusinessException;
import com.ait.sy.syAffirm.dto.AffirmSpecialDeleteDto;
import com.ait.sy.syAffirm.dto.AffirmSpecialDetailDto;
import com.ait.sy.syAffirm.dto.AffirmSpecialDto;
import com.ait.sy.syAffirm.dto.AffirmSpecialSaveDto;
import com.ait.sy.syAffirm.dto.AffirmSpecialTypeDto;
import com.ait.sy.syAffirm.service.AffirmSpecialService;
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
import java.util.List;
import java.util.Map;

/**
 * Phê duyệt đặc biệt - API JSON cho trang Angular /view-affirm-special-list (thay cho các trang JSP
 * /sys/affirmSpecial/viewAffirmSpecialList, addAffirmSpecialView, updateAffirmSpecialView của dự án Hanwha_HTSV).
 * Nằm dưới /sys/api/** nên chỉ ROLE ADMIN/SYS gọi được (xem SecurityConfig).
 */
@RestController
@RequestMapping("/sys/api/affirmSpecial")
public class AffirmSpecialController {
    private static final Logger log = LoggerFactory.getLogger(AffirmSpecialController.class);

    @Autowired
    private AffirmSpecialService service;

    @GetMapping("/types")
    public ResponseEntity<?> getTypes() {
        try {
            List<AffirmSpecialTypeDto> types = service.getTypeList();
            return ResponseEntity.ok(types);
        } catch (BusinessException e) {
            return ResponseEntity.internalServerError().body(result(false, e.getUserMessage()));
        }
    }

    @GetMapping("/list")
    public ResponseEntity<?> getList(@RequestParam(required = false) String keyword) {
        try {
            List<AffirmSpecialDto> rows = service.getList(keyword);
            return ResponseEntity.ok(rows);
        } catch (BusinessException e) {
            return ResponseEntity.internalServerError().body(result(false, e.getUserMessage()));
        }
    }

    @GetMapping("/affirmors")
    public ResponseEntity<?> getAffirmors(@RequestParam String affirmObject, @RequestParam String affirmTypeNo) {
        try {
            List<AffirmSpecialDetailDto> affirmors = service.getAffirmors(affirmObject, affirmTypeNo);
            return ResponseEntity.ok(affirmors);
        } catch (BusinessException e) {
            return ResponseEntity.badRequest().body(result(false, e.getUserMessage()));
        }
    }

    @PostMapping("/save")
    public ResponseEntity<Map<String, Object>> save(@Valid @RequestBody AffirmSpecialSaveDto dto) {
        try {
            service.save(dto);
            return ResponseEntity.ok(result(true, "common.saveSuccess"));
        } catch (BusinessException e) {
            return ResponseEntity.ok(result(false, e.getUserMessage()));
        }
    }

    @PostMapping("/delete")
    public ResponseEntity<Map<String, Object>> delete(@Valid @RequestBody AffirmSpecialDeleteDto dto) {
        try {
            service.delete(dto.getAffirmObject(), dto.getAffirmTypeNo());
            return ResponseEntity.ok(result(true, "common.deleteSuccess"));
        } catch (BusinessException e) {
            return ResponseEntity.ok(result(false, e.getUserMessage()));
        }
    }

    /** Lỗi @Valid trả về cùng định dạng {success, message} để frontend hiển thị trực tiếp. */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, Object>> handleValidation(MethodArgumentNotValidException ex) {
        FieldError error = ex.getBindingResult().getFieldError();
        String key = error != null ? error.getDefaultMessage() : "vasl.msg.saveFail";
        log.warn("AffirmSpecial validation failed: {}", key);
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
