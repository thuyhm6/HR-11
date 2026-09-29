package com.ait.edu.trainEducation.controller;

import com.ait.edu.trainEducation.dto.EduCourseManagerDto;
import com.ait.edu.trainEducation.dto.EduCourseManagerSaveDto;
import com.ait.edu.trainEducation.service.EduCourseManagerService;
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
 * Quản lý khóa học - API JSON cho trang Angular /edu-course-manager (thay cho các trang JSP
 * /edu/traineducation/courseManager, addCourseManager, courseManagerInfo của dự án Hanwha_HTSV).
 * Danh sách hệ thống đào tạo cho dropdown "Loại hình" dùng lại API /edu/traineducation/api/systemManager/list.
 */
@RestController
@RequestMapping("/edu/traineducation/api/courseManager")
public class EduCourseManagerController extends EduBaseController {

    @Autowired
    private EduCourseManagerService service;

    @GetMapping("/list")
    public ResponseEntity<?> getList(@RequestParam(required = false) String trainDiffCode,
                                     @RequestParam(required = false) String trainTypeCode,
                                     @RequestParam(required = false) String courseNameCode) {
        try {
            List<EduCourseManagerDto> rows = service.getList(trainDiffCode, trainTypeCode, courseNameCode);
            return ResponseEntity.ok(rows);
        } catch (BusinessException e) {
            return ResponseEntity.internalServerError().body(result(false, e.getUserMessage()));
        }
    }

    @GetMapping("/{courseNo}")
    public ResponseEntity<?> getOne(@PathVariable String courseNo) {
        try {
            return ResponseEntity.ok(service.getOne(courseNo));
        } catch (BusinessException e) {
            return ResponseEntity.badRequest().body(result(false, e.getUserMessage()));
        }
    }

    @PostMapping("/save")
    public ResponseEntity<Map<String, Object>> save(@Valid @RequestBody EduCourseManagerSaveDto dto) {
        try {
            String messageKey = service.save(dto);
            return ResponseEntity.ok(result(true, messageKey));
        } catch (BusinessException e) {
            return ResponseEntity.ok(result(false, e.getUserMessage()));
        }
    }
}
