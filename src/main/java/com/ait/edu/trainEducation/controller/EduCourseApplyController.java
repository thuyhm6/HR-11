package com.ait.edu.trainEducation.controller;

import com.ait.edu.trainEducation.dto.EduCourseApplyFlagDto;
import com.ait.edu.trainEducation.dto.EduCourseApplySearchDto;
import com.ait.edu.trainEducation.dto.EduCourseApplySubmitDto;
import com.ait.edu.trainEducation.service.EduCourseApplyService;
import com.ait.exception.BusinessException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

/**
 * Đăng ký khóa đào tạo - API JSON cho các trang Angular /edu-course-apply, /edu-course-maker, /edu-course-confirm,
 * /edu-maker-situation (thay cho JSP /edu/traineducation/courseApply, courseMaker, courseConfirm, makerSituation của dự án
 * Hanwha_HTSV). Lịch học của khóa dùng lại API /edu/traineducation/api/planManager/{planNo}/syllabus.
 */
@RestController
@RequestMapping("/edu/traineducation/api/courseApply")
public class EduCourseApplyController extends EduBaseController {

    @Autowired
    private EduCourseApplyService service;

    // ==================== Đăng ký ====================

    @GetMapping("/courses")
    public ResponseEntity<?> getApplyCourses(EduCourseApplySearchDto search) {
        try {
            return ResponseEntity.ok(service.getApplyCourses(search));
        } catch (BusinessException e) {
            return ResponseEntity.internalServerError().body(result(false, e.getUserMessage()));
        }
    }

    @GetMapping("/defaultMakers")
    public ResponseEntity<?> getDefaultMakers() {
        try {
            return ResponseEntity.ok(service.getDefaultMakers());
        } catch (BusinessException e) {
            return ResponseEntity.internalServerError().body(result(false, e.getUserMessage()));
        }
    }

    @PostMapping("/submit")
    public ResponseEntity<Map<String, Object>> submit(@Valid @RequestBody EduCourseApplySubmitDto dto) {
        try {
            int count = service.submit(dto);
            Map<String, Object> map = result(true, "alert.message.add_success");
            map.put("count", count);
            return ResponseEntity.ok(map);
        } catch (BusinessException e) {
            return ResponseEntity.ok(result(false, e.getUserMessage()));
        }
    }

    // ==================== Phê duyệt ====================

    @GetMapping("/maker/list")
    public ResponseEntity<?> getMakerRows(EduCourseApplySearchDto search) {
        try {
            return ResponseEntity.ok(service.getMakerRows(search));
        } catch (BusinessException e) {
            return ResponseEntity.internalServerError().body(result(false, e.getUserMessage()));
        }
    }

    @PostMapping("/maker/update")
    public ResponseEntity<Map<String, Object>> updateApplyFlag(@Valid @RequestBody EduCourseApplyFlagDto dto) {
        try {
            service.updateApplyFlag(dto);
            return ResponseEntity.ok(result(true, "pa.salary.canShu.caozuo_success"));
        } catch (BusinessException e) {
            return ResponseEntity.ok(result(false, e.getUserMessage()));
        }
    }

    // ==================== Xác nhận (quản lý đào tạo) ====================

    @GetMapping("/confirm/list")
    public ResponseEntity<?> getConfirmRows(EduCourseApplySearchDto search, HttpServletRequest request) {
        if (!isTrainManager(request)) {
            return ResponseEntity.status(403).body(result(false, "edu.courseApply.msg.noPermission"));
        }
        try {
            return ResponseEntity.ok(service.getConfirmRows(search));
        } catch (BusinessException e) {
            return ResponseEntity.internalServerError().body(result(false, e.getUserMessage()));
        }
    }

    @PostMapping("/confirm/update")
    public ResponseEntity<Map<String, Object>> updateConfirmFlag(@Valid @RequestBody EduCourseApplyFlagDto dto,
                                                                 HttpServletRequest request) {
        if (!isTrainManager(request)) {
            return ResponseEntity.ok(result(false, "edu.courseApply.msg.noPermission"));
        }
        try {
            service.updateConfirmFlag(dto);
            return ResponseEntity.ok(result(true, "alert.message.update_success"));
        } catch (BusinessException e) {
            return ResponseEntity.ok(result(false, e.getUserMessage()));
        }
    }

    // ==================== Tình hình ====================

    /** Quản lý đào tạo xem đơn của mọi người (thay mã PERSON_ID hard-code của bản gốc), nhân viên chỉ xem đơn của mình. */
    @GetMapping("/situation/list")
    public ResponseEntity<?> getSituationRows(EduCourseApplySearchDto search, HttpServletRequest request) {
        try {
            boolean manager = isTrainManager(request);
            search.setAllApplicants(manager);
            Map<String, Object> body = new HashMap<>();
            body.put("manager", manager);
            body.put("rows", service.getSituationRows(search));
            return ResponseEntity.ok(body);
        } catch (BusinessException e) {
            return ResponseEntity.internalServerError().body(result(false, e.getUserMessage()));
        }
    }

    @PostMapping("/situation/cancel")
    public ResponseEntity<Map<String, Object>> cancel(@RequestBody Map<String, String> body, HttpServletRequest request) {
        try {
            service.cancel(body.get("applyNo"), isTrainManager(request));
            return ResponseEntity.ok(result(true, "alert.message.delete_success"));
        } catch (BusinessException e) {
            return ResponseEntity.ok(result(false, e.getUserMessage()));
        }
    }
}
