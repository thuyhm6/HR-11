package com.ait.edu.trainEducation.controller;

import com.ait.edu.trainEducation.dto.EduEvaluateImportRowDto;
import com.ait.edu.trainEducation.dto.EduStudentScoreDto;
import com.ait.edu.trainEducation.dto.EduTrainBasicSearchDto;
import com.ait.edu.trainEducation.service.EduTrainBasicService;
import com.ait.edu.trainEducation.service.EduTrainEvaluateService;
import com.ait.exception.BusinessException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Đánh giá học viên / Đánh giá giảng viên / Kết quả đào tạo - API JSON cho các trang Angular /edu-student-evaluate,
 * /edu-teacher-evaluate, /edu-train-result (thay cho các trang JSP studentEvaluate*, teacherEvaluate*, trainResult*,
 * alreadyTrainResult*, checkTrainResultTSTOInfoPer, studentChakan, teacherTSTOChakan của dự án Hanwha_HTSV).
 * Danh sách khóa học dùng lại EduTrainBasicService.getList với loại đánh giá + phạm vi người đăng nhập; thông tin
 * khóa học: /edu/traineducation/api/trainBasic/{basicNo}; báo cáo kết quả: EduCommonController (APPLY_TYPE eduTrainResult).
 */
@RestController
@RequestMapping("/edu/traineducation/api/evaluate")
public class EduTrainEvaluateController extends EduBaseController {

    private static final String TYPE_STUDENT = "1";
    private static final String TYPE_TEACHER = "2";
    private static final String TYPE_RESULT = "3";

    @Autowired
    private EduTrainEvaluateService service;

    @Autowired
    private EduTrainBasicService basicService;

    // ==================== Danh sách khóa học theo loại đánh giá ====================

    @GetMapping("/{type}/list")
    public ResponseEntity<?> getList(@PathVariable String type, EduTrainBasicSearchDto search, HttpServletRequest request) {
        try {
            String evaluateType = switch (type) {
                case "student" -> TYPE_STUDENT;
                case "teacher" -> TYPE_TEACHER;
                case "result" -> TYPE_RESULT;
                default -> null;
            };
            if (evaluateType == null) {
                return ResponseEntity.badRequest().body(result(false, "common.loadFail"));
            }
            boolean manager = isTrainManager(request);
            search.setEvaluateType(evaluateType);
            // Bản gốc: đánh giá học viên -> giảng viên đánh giá; đánh giá giảng viên / kết quả -> học viên của khóa
            search.setScope(manager ? null : TYPE_STUDENT.equals(evaluateType)
                    ? EduTrainBasicSearchDto.SCOPE_EVA_TEACHER : EduTrainBasicSearchDto.SCOPE_STUDENT);
            Map<String, Object> map = new HashMap<>();
            map.put("rows", basicService.getList(search));
            map.put("manager", manager);
            return ResponseEntity.ok(map);
        } catch (BusinessException e) {
            return ResponseEntity.internalServerError().body(result(false, e.getUserMessage()));
        }
    }

    // ==================== Đánh giá học viên ====================

    @GetMapping("/student/{basicNo}")
    public ResponseEntity<?> getStudents(@PathVariable String basicNo, HttpServletRequest request) {
        try {
            return ResponseEntity.ok(service.getStudents(basicNo, isTrainManager(request)));
        } catch (BusinessException e) {
            return ResponseEntity.badRequest().body(result(false, e.getUserMessage()));
        }
    }

    @PostMapping("/student/{basicNo}/save")
    public ResponseEntity<Map<String, Object>> saveStudentScores(@PathVariable String basicNo,
                                                                 @RequestBody List<EduStudentScoreDto> rows,
                                                                 HttpServletRequest request) {
        try {
            service.saveStudentScores(basicNo, rows, isTrainManager(request));
            return ResponseEntity.ok(result(true, "alert.message.update_success"));
        } catch (BusinessException e) {
            return ResponseEntity.ok(result(false, e.getUserMessage()));
        }
    }

    @PostMapping("/student/{basicNo}/import")
    public ResponseEntity<Map<String, Object>> importStudentScores(@PathVariable String basicNo,
                                                                   @RequestBody List<EduEvaluateImportRowDto> rows,
                                                                   HttpServletRequest request) {
        try {
            return importResult(service.importStudentScores(basicNo, rows, isTrainManager(request)));
        } catch (BusinessException e) {
            return ResponseEntity.ok(result(false, e.getUserMessage()));
        }
    }

    // ==================== Đánh giá giảng viên ====================

    @GetMapping("/teacher/{basicNo}")
    public ResponseEntity<?> getTeacherSummary(@PathVariable String basicNo, HttpServletRequest request) {
        try {
            return ResponseEntity.ok(service.getTeacherSummary(basicNo, isTrainManager(request)));
        } catch (BusinessException e) {
            return ResponseEntity.badRequest().body(result(false, e.getUserMessage()));
        }
    }

    @GetMapping("/teacher/{basicNo}/{teaEmpId}")
    public ResponseEntity<?> getTeacherScores(@PathVariable String basicNo, @PathVariable String teaEmpId,
                                              HttpServletRequest request) {
        try {
            return ResponseEntity.ok(service.getTeacherScores(basicNo, teaEmpId, isTrainManager(request)));
        } catch (BusinessException e) {
            return ResponseEntity.badRequest().body(result(false, e.getUserMessage()));
        }
    }

    @PostMapping("/teacher/{basicNo}/{teaEmpId}/import")
    public ResponseEntity<Map<String, Object>> importTeacherScores(@PathVariable String basicNo, @PathVariable String teaEmpId,
                                                                   @RequestBody List<EduEvaluateImportRowDto> rows,
                                                                   HttpServletRequest request) {
        try {
            return importResult(service.importTeacherScores(basicNo, teaEmpId, rows, isTrainManager(request)));
        } catch (BusinessException e) {
            return ResponseEntity.ok(result(false, e.getUserMessage()));
        }
    }

    // ==================== Kết quả đào tạo ====================

    @GetMapping("/result/{basicNo}")
    public ResponseEntity<?> getResultSummary(@PathVariable String basicNo, HttpServletRequest request) {
        try {
            return ResponseEntity.ok(service.getResultSummary(basicNo, isTrainManager(request)));
        } catch (BusinessException e) {
            return ResponseEntity.badRequest().body(result(false, e.getUserMessage()));
        }
    }

    @GetMapping("/result/{basicNo}/details")
    public ResponseEntity<?> getResultDetails(@PathVariable String basicNo, HttpServletRequest request) {
        try {
            return ResponseEntity.ok(service.getResultDetails(basicNo, isTrainManager(request)));
        } catch (BusinessException e) {
            return ResponseEntity.badRequest().body(result(false, e.getUserMessage()));
        }
    }

    @PostMapping("/result/{basicNo}/import")
    public ResponseEntity<Map<String, Object>> importResults(@PathVariable String basicNo,
                                                             @RequestBody List<EduEvaluateImportRowDto> rows,
                                                             HttpServletRequest request) {
        try {
            return importResult(service.importResults(basicNo, rows, isTrainManager(request)));
        } catch (BusinessException e) {
            return ResponseEntity.ok(result(false, e.getUserMessage()));
        }
    }

    private ResponseEntity<Map<String, Object>> importResult(List<String> errors) {
        Map<String, Object> map = result(errors.isEmpty(),
                errors.isEmpty() ? "edu.common.msg.importSuccess" : "edu.common.msg.importHasError");
        map.put("errors", errors);
        return ResponseEntity.ok(map);
    }
}
