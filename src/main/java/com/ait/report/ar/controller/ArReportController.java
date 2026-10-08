package com.ait.report.ar.controller;

import com.ait.exception.BusinessException;
import com.ait.report.ar.service.ArReportService;
import com.ait.util.I18nUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * API JSON cho trang Angular /view-ar-reports-list (thay JSP /report/ar/viewArReportsList?menuNo=... của dự án
 * Hanwha_HTSV). Đặt dưới /report/ar/api để không trùng URL trang cũ /report/ar/viewArReportsList (đã map sang Angular).
 */
@RestController
@RequestMapping("/report/ar/api")
public class ArReportController {

    private static final Logger log = LoggerFactory.getLogger(ArReportController.class);

    @Autowired
    private ArReportService service;

    @GetMapping("/reportList")
    public ResponseEntity<?> getReportList(@RequestParam(required = false) String menuNo) {
        try {
            return ResponseEntity.ok(service.getReportList(menuNo));
        } catch (BusinessException e) {
            log.warn("getReportList - {}: {}", e.getErrorCode(), e.getUserMessage());
            return ResponseEntity.internalServerError()
                    .body(Map.of("success", false, "message", I18nUtil.getMessage(e.getUserMessage())));
        }
    }
}
