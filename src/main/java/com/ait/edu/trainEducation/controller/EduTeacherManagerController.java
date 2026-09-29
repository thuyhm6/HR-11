package com.ait.edu.trainEducation.controller;

import com.ait.edu.trainEducation.dto.EduTeacherManagerDto;
import com.ait.edu.trainEducation.service.EduTeacherManagerService;
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

import java.util.Map;

/**
 * Giảng viên - API JSON cho trang Angular /edu-teacher-manager (thay cho các trang JSP /edu/traineducation/teacherManager,
 * addTeacherManager, teacherManagerInfo, queryTeacher của dự án Hanwha_HTSV).
 */
@RestController
@RequestMapping("/edu/traineducation/api/teacherManager")
public class EduTeacherManagerController extends EduBaseController {

    @Autowired
    private EduTeacherManagerService service;

    @GetMapping("/list")
    public ResponseEntity<?> getList(@RequestParam(required = false) String keyword,
                                     @RequestParam(required = false) String teachFieldCode,
                                     @RequestParam(required = false) String teachLevelCode,
                                     @RequestParam(required = false) String teachStatusCode) {
        try {
            return ResponseEntity.ok(service.getList(keyword, teachFieldCode, teachLevelCode, teachStatusCode));
        } catch (BusinessException e) {
            return ResponseEntity.internalServerError().body(result(false, e.getUserMessage()));
        }
    }

    @GetMapping("/{teacherNo}")
    public ResponseEntity<?> getOne(@PathVariable String teacherNo) {
        try {
            return ResponseEntity.ok(service.getOne(teacherNo));
        } catch (BusinessException e) {
            return ResponseEntity.badRequest().body(result(false, e.getUserMessage()));
        }
    }

    @PostMapping("/save")
    public ResponseEntity<Map<String, Object>> save(@Valid @RequestBody EduTeacherManagerDto dto) {
        try {
            return ResponseEntity.ok(result(true, service.save(dto)));
        } catch (BusinessException e) {
            return ResponseEntity.ok(result(false, e.getUserMessage()));
        }
    }

    @PostMapping("/delete")
    public ResponseEntity<Map<String, Object>> delete(@RequestBody Map<String, String> body) {
        try {
            service.delete(body.get("teacherNo"));
            return ResponseEntity.ok(result(true, "alert.message.delete_success"));
        } catch (BusinessException e) {
            return ResponseEntity.ok(result(false, e.getUserMessage()));
        }
    }
}
