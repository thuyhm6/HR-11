package com.ait.edu.trainEducation.controller;

import com.ait.edu.trainEducation.dto.EduTrainReportSearchDto;
import com.ait.edu.trainEducation.service.EduTrainReportService;
import com.ait.exception.BusinessException;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Báo cáo đào tạo - API JSON cho trang Angular /edu-train-report (thay cho JSP /report/ar/viewTrainReport?menuNo=14014477
 * và các trang /edu/trainreport/*TrainReport của dự án Hanwha_HTSV). Xuất Excel tạo ở frontend (SheetJS, .xlsx).
 */
@RestController
@RequestMapping("/edu/traineducation/api/trainReport")
public class EduTrainReportController extends EduBaseController {

    @Autowired
    private EduTrainReportService service;

    @GetMapping("/types")
    public ResponseEntity<?> getReportTypes() {
        try {
            return ResponseEntity.ok(service.getReportTypes());
        } catch (BusinessException e) {
            return ResponseEntity.internalServerError().body(result(false, e.getUserMessage()));
        }
    }

    @GetMapping("/data")
    public ResponseEntity<?> getReport(@Valid EduTrainReportSearchDto search) {
        try {
            return ResponseEntity.ok(service.getReport(search));
        } catch (BusinessException e) {
            return ResponseEntity.badRequest().body(result(false, e.getUserMessage()));
        }
    }
}
