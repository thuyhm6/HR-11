package com.ait.sy.sys.controller;

import com.ait.sy.sys.service.IconifyService;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.CacheControl;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.Duration;
import java.util.Arrays;
import java.util.List;

/**
 * IconifyController - API icon nội bộ, tương thích định dạng Iconify API (api.iconify.design).
 *
 * <iconify-icon> gửi request dạng: GET /assets/iconify/{prefix}.json?icons=ten-1,ten-2
 * (cấu hình trong /assets/js/iconify-offline.js). Đặt dưới /assets/** để dùng chung rule public
 * sẵn có (SecurityConfig + AuthenticationInterceptor) - icon cần tải được cả ở trang /login khi
 * chưa có session. Controller mapping được ưu tiên hơn resource handler /assets/** nên không bị
 * FrontendConfig chặn mất.
 */
@RestController
public class IconifyController {

    @Autowired
    private IconifyService iconifyService;

    @GetMapping(value = "/assets/iconify/{prefix}.json", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ObjectNode> getIcons(@PathVariable("prefix") String prefix,
            @RequestParam(value = "icons", defaultValue = "") String icons) {
        List<String> iconNames = Arrays.stream(icons.split(","))
                .map(String::trim)
                .filter(s -> !s.isEmpty())
                .toList();
        ObjectNode result = iconifyService.getIcons(prefix, iconNames);
        if (result == null) {
            // Iconify API trả 404 khi không có bộ icon - <iconify-icon> sẽ coi icon là "không tồn tại"
            return ResponseEntity.notFound().build();
        }
        // Dữ liệu icon cố định theo tên -> cho trình duyệt cache lâu, giảm request lặp lại
        return ResponseEntity.ok()
                .cacheControl(CacheControl.maxAge(Duration.ofDays(7)).cachePublic())
                .body(result);
    }
}
