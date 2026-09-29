package com.ait.edu.trainEducation.controller;

import com.ait.edu.trainEducation.dto.EduPlanManagerDto;
import com.ait.edu.trainEducation.dto.EduTrainSyllabusDto;
import com.ait.edu.trainEducation.service.EduPlanManagerService;
import com.ait.exception.BusinessException;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

/**
 * Kế hoạch đào tạo - API JSON cho trang Angular /edu-plan-manager (thay cho các trang JSP /edu/traineducation/planManager,
 * addPlanManager, planManagerInfo, singlePlanManagerInfo, teacherSearch, desEmployee, queryCourseSyllabus* và import
 * /importTrainPlan của dự án Hanwha_HTSV). Danh sách khóa học: dùng lại /edu/traineducation/api/courseManager/list.
 */
@RestController
@RequestMapping("/edu/traineducation/api/planManager")
public class EduPlanManagerController extends EduBaseController {

    @Autowired
    private EduPlanManagerService service;

    @GetMapping("/list")
    public ResponseEntity<?> getList(@RequestParam(required = false) String trainDiffCode,
                                     @RequestParam(required = false) String trainTypeCode,
                                     @RequestParam(required = false) String courseNameCode) {
        try {
            return ResponseEntity.ok(service.getList(trainDiffCode, trainTypeCode, courseNameCode));
        } catch (BusinessException e) {
            return ResponseEntity.internalServerError().body(result(false, e.getUserMessage()));
        }
    }

    @GetMapping("/teachers")
    public ResponseEntity<?> getTeachers(@RequestParam(required = false) String keyword) {
        try {
            return ResponseEntity.ok(service.getTeachers(keyword));
        } catch (BusinessException e) {
            return ResponseEntity.internalServerError().body(result(false, e.getUserMessage()));
        }
    }

    @GetMapping("/{planNo}")
    public ResponseEntity<?> getOne(@PathVariable String planNo) {
        try {
            return ResponseEntity.ok(service.getOne(planNo));
        } catch (BusinessException e) {
            return ResponseEntity.badRequest().body(result(false, e.getUserMessage()));
        }
    }

    @PostMapping("/save")
    public ResponseEntity<Map<String, Object>> save(@Valid @RequestBody EduPlanManagerDto dto) {
        boolean isNew = dto.getPlanNo() == null || dto.getPlanNo().isBlank();
        try {
            String planNo = service.save(dto);
            Map<String, Object> map = result(true, isNew ? "alert.message.add_success" : "alert.message.update_success");
            map.put("id", planNo);
            return ResponseEntity.ok(map);
        } catch (BusinessException e) {
            return ResponseEntity.ok(result(false, e.getUserMessage()));
        }
    }

    @PostMapping("/delete")
    public ResponseEntity<Map<String, Object>> delete(@RequestBody Map<String, String> body) {
        try {
            service.delete(body.get("planNo"));
            return ResponseEntity.ok(result(true, "alert.message.delete_success"));
        } catch (BusinessException e) {
            return ResponseEntity.ok(result(false, e.getUserMessage()));
        }
    }

    // ==================== Lịch đào tạo ====================

    @GetMapping("/{planNo}/syllabus")
    public ResponseEntity<?> getSyllabus(@PathVariable String planNo) {
        try {
            return ResponseEntity.ok(service.getSyllabus(planNo));
        } catch (BusinessException e) {
            return ResponseEntity.internalServerError().body(result(false, e.getUserMessage()));
        }
    }

    @PostMapping("/{planNo}/syllabus/import")
    public ResponseEntity<Map<String, Object>> importSyllabus(@PathVariable String planNo,
                                                              @RequestBody List<EduTrainSyllabusDto> rows) {
        try {
            List<String> errors = service.importSyllabus(planNo, rows);
            Map<String, Object> map = result(errors.isEmpty(), errors.isEmpty() ? "edu.common.msg.importSuccess"
                    : "edu.common.msg.importHasError");
            map.put("errors", errors);
            return ResponseEntity.ok(map);
        } catch (BusinessException e) {
            return ResponseEntity.ok(result(false, e.getUserMessage()));
        }
    }

    @PostMapping("/{planNo}/syllabus/delete")
    public ResponseEntity<Map<String, Object>> deleteSyllabus(@PathVariable String planNo,
                                                              @RequestBody Map<String, String> body) {
        try {
            service.deleteSyllabus(planNo, body.get("syllNo"));
            return ResponseEntity.ok(result(true, "alert.message.delete_success"));
        } catch (BusinessException e) {
            return ResponseEntity.ok(result(false, e.getUserMessage()));
        }
    }
}
