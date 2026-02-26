package com.ait.sy.sys.controller;

import com.ait.util.I18nUtil;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.support.RequestContextUtils;

import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

/**
 * Controller để xử lý thay đổi ngôn ngữ
 */
@Controller
public class LanguageController {

    /**
     * Thay đổi ngôn ngữ của ứng dụng
     *
     * @param lang     Mã ngôn ngữ (vi, en, zh, ko)
     * @param request  HTTP request
     * @param response HTTP response
     * @return Redirect về trang trước đó hoặc trang chủ
     */
    @GetMapping("/change-language")
    public String changeLanguage(@RequestParam String lang,
            HttpServletRequest request,
            HttpServletResponse response) {

        // Kiểm tra xem ngôn ngữ có được hỗ trợ không
        if (!I18nUtil.isLanguageSupported(lang)) {
            lang = "vi"; // Mặc định về tiếng Việt nếu không hỗ trợ
        }

        // Tạo Locale từ mã ngôn ngữ
        Locale locale = I18nUtil.createLocale(lang);

        // Lấy LocaleResolver và set locale mới
        LocaleResolver localeResolver = RequestContextUtils.getLocaleResolver(request);
        if (localeResolver != null) {
            localeResolver.setLocale(request, response, locale);
        }

        // Lấy URL trước đó để redirect về
        String referer = request.getHeader("Referer");
        if (referer != null && !referer.isEmpty()) {
            return "redirect:" + referer;
        }

        // Nếu không có referer, redirect về trang chủ
        return "redirect:/";
    }

    /**
     * API endpoint để lấy thông tin ngôn ngữ hiện tại
     *
     * @param request HTTP request
     * @return Map chứa thông tin ngôn ngữ
     */
    /**
     * API endpoint để lấy thông tin ngôn ngữ hiện tại
     *
     * @param request HTTP request
     * @return Map chứa thông tin ngôn ngữ
     */
    @GetMapping("/api/current-language")
    @org.springframework.web.bind.annotation.ResponseBody
    public Map<String, Object> getCurrentLanguage(HttpServletRequest request) {
        Map<String, Object> result = new HashMap<>();

        Locale currentLocale = I18nUtil.getCurrentLocale();
        String currentLanguageCode = I18nUtil.getCurrentLanguageCode();
        String currentLanguageName = I18nUtil.getCurrentLanguageName();

        result.put("locale", currentLocale.toString());
        result.put("languageCode", currentLanguageCode);
        result.put("languageName", currentLanguageName);
        result.put("supportedLanguages", I18nUtil.getSupportedLanguages());

        // Thêm thông tin về các ngôn ngữ được hỗ trợ
        Map<String, String> supportedLanguagesMap = new HashMap<>();
        for (String langCode : I18nUtil.getSupportedLanguages()) {
            supportedLanguagesMap.put(langCode, I18nUtil.getLanguageName(langCode));
        }
        result.put("supportedLanguagesMap", supportedLanguagesMap);

        return result;
    }

    /**
     * API endpoint để lấy danh sách các ngôn ngữ được hỗ trợ
     *
     * @return Map chứa danh sách ngôn ngữ được hỗ trợ
     */
    @GetMapping("/api/supported-languages")
    @org.springframework.web.bind.annotation.ResponseBody
    public Map<String, String> getSupportedLanguages() {
        Map<String, String> supportedLanguages = new HashMap<>();

        for (String langCode : I18nUtil.getSupportedLanguages()) {
            supportedLanguages.put(langCode, I18nUtil.getLanguageName(langCode));
        }

        return supportedLanguages;
    }
}
