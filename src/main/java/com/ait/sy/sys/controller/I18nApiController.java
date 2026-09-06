package com.ait.sy.sys.controller;

import com.ait.util.I18nUtil;
import java.util.LinkedHashMap;
import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * API dùng chung cho các trang Angular lấy text đa ngôn ngữ trực tiếp từ message.properties đã có
 * sẵn (dùng lại I18nUtil.getMessage - resolve đúng locale hiện tại của session, giống hệt cách
 * Thymeleaf #{key} hoạt động) - tránh phải viết riêng 1 bộ file dịch mới cho Angular.
 */
@RestController
public class I18nApiController {

    @GetMapping("/api/i18n/messages")
    @ResponseBody
    public Map<String, String> getMessages(@RequestParam String keys) {
        Map<String, String> result = new LinkedHashMap<>();
        for (String key : keys.split(",")) {
            String trimmed = key.trim();
            if (!trimmed.isEmpty()) {
                result.put(trimmed, I18nUtil.getMessage(trimmed));
            }
        }
        return result;
    }
}
