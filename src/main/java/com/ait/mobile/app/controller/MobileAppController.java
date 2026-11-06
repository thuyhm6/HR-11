package com.ait.mobile.app.controller;

import com.ait.mobile.app.dto.MobileAppVersionDto;
import com.ait.mobile.app.mapper.MobileAppMapper;
import com.ait.mobile.common.MobileErrorCode;
import com.ait.mobile.common.MobileException;
import com.ait.mobile.common.MobileMessages;
import com.ait.mobile.common.MobileResponse;
import com.ait.util.I18nUtil;
import java.util.LinkedHashMap;
import java.util.Locale;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/** API public phục vụ khởi động app: kiểm tra phiên bản, text đa ngôn ngữ (cần có trước khi đăng nhập). */
@RestController
@RequestMapping("/mobile/api")
public class MobileAppController {

    private static final Logger log = LoggerFactory.getLogger(MobileAppController.class);
    private static final int MAX_KEYS = 500;

    @Autowired
    private MobileAppMapper mobileAppMapper;

    @GetMapping("/app/version")
    public MobileResponse<MobileAppVersionDto> version(@RequestParam(defaultValue = "android") String platform) {
        try {
            MobileAppVersionDto dto = mobileAppMapper.selectAppVersion(platform.trim().toLowerCase());
            if (dto == null) {
                throw new MobileException(MobileErrorCode.NOT_FOUND);
            }
            return MobileResponse.ok(dto);
        } catch (MobileException e) {
            throw e;
        } catch (Exception e) {
            log.error("Lỗi lấy phiên bản app platform={}: {}", platform, e.getMessage(), e);
            throw e;
        }
    }

    /**
     * Giống GET /api/i18n/messages của web (dùng chung messages*.properties) nhưng ngôn ngữ lấy theo
     * tham số {@code lang} (vi/en/ko/zh) thay vì session. Key không tồn tại sẽ không có trong kết quả
     * để app dùng text fallback.
     */
    @GetMapping("/i18n/messages")
    public MobileResponse<Map<String, String>> messages(@RequestParam String keys,
            @RequestParam(required = false) String lang) {
        Locale locale = I18nUtil.createLocale(MobileMessages.normalizeLang(lang));
        String[] keyArr = keys.split(",");
        if (keyArr.length > MAX_KEYS) {
            throw new MobileException(MobileErrorCode.INVALID_REQUEST);
        }
        Map<String, String> result = new LinkedHashMap<>();
        for (String key : keyArr) {
            String trimmed = key.trim();
            if (trimmed.isEmpty()) {
                continue;
            }
            String msg = I18nUtil.getMessage(trimmed, null, locale);
            if (msg != null && !msg.equals(trimmed)) {
                result.put(trimmed, msg);
            }
        }
        return MobileResponse.ok(result);
    }
}
