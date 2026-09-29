package com.ait.edu.trainEducation.controller;

import com.ait.edu.trainEducation.service.EduTrainCalendarService;
import com.ait.exception.BusinessException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Lịch đào tạo - API JSON cho trang Angular /edu-train-calendar (thay cho JSP /edu/trainfile/trainCalendar của dự án
 * Hanwha_HTSV). Chi tiết kế hoạch + lịch học khi bấm vào khóa học dùng lại API /edu/traineducation/api/planManager.
 */
@RestController
@RequestMapping("/edu/traineducation/api/trainCalendar")
public class EduTrainCalendarController extends EduBaseController {

    @Autowired
    private EduTrainCalendarService service;

    @GetMapping("/month")
    public ResponseEntity<?> getMonth(@RequestParam(required = false) Integer year,
                                      @RequestParam(required = false) Integer month) {
        try {
            return ResponseEntity.ok(service.getMonth(year, month));
        } catch (BusinessException e) {
            return ResponseEntity.internalServerError().body(result(false, e.getUserMessage()));
        }
    }
}
