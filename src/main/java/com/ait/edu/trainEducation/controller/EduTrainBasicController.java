package com.ait.edu.trainEducation.controller;

import com.ait.edu.trainEducation.dto.EduTrainBasicDto;
import com.ait.edu.trainEducation.dto.EduTrainBasicSearchDto;
import com.ait.edu.trainEducation.service.EduTrainBasicService;
import com.ait.exception.BusinessException;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * Thông tin cơ bản đào tạo - API JSON cho trang Angular /edu-train-basic (thay cho các trang JSP /edu/traineducation/
 * trainBasicInformation, addTrainBasicInformation, trainBasicInformationInfo, queryBasicInformation, commonTeacher,
 * planEmployee, otherPlanEmployee, finalstudent của dự án Hanwha_HTSV). Tìm nhân viên tự chọn: EduCommonController.
 */
@RestController
@RequestMapping("/edu/traineducation/api/trainBasic")
public class EduTrainBasicController extends EduBaseController {

    @Autowired
    private EduTrainBasicService service;

    @GetMapping("/list")
    public ResponseEntity<?> getList(EduTrainBasicSearchDto search) {
        try {
            search.setEvaluateType(null);
            search.setScope(null);
            return ResponseEntity.ok(service.getList(search));
        } catch (BusinessException e) {
            return ResponseEntity.internalServerError().body(result(false, e.getUserMessage()));
        }
    }

    @GetMapping("/plans")
    public ResponseEntity<?> getAvailablePlans() {
        try {
            return ResponseEntity.ok(service.getAvailablePlans());
        } catch (BusinessException e) {
            return ResponseEntity.internalServerError().body(result(false, e.getUserMessage()));
        }
    }

    @GetMapping("/plans/{planNo}/defaults")
    public ResponseEntity<?> getPlanDefaults(@PathVariable String planNo) {
        try {
            return ResponseEntity.ok(service.getPlanDefaults(planNo));
        } catch (BusinessException e) {
            return ResponseEntity.badRequest().body(result(false, e.getUserMessage()));
        }
    }

    @GetMapping("/{basicNo}")
    public ResponseEntity<?> getOne(@PathVariable String basicNo) {
        try {
            return ResponseEntity.ok(service.getOne(basicNo));
        } catch (BusinessException e) {
            return ResponseEntity.badRequest().body(result(false, e.getUserMessage()));
        }
    }

    @PostMapping("/save")
    public ResponseEntity<Map<String, Object>> save(@Valid @RequestBody EduTrainBasicDto dto) {
        try {
            return ResponseEntity.ok(result(true, service.save(dto)));
        } catch (BusinessException e) {
            return ResponseEntity.ok(result(false, e.getUserMessage()));
        }
    }

    @PostMapping("/delete")
    public ResponseEntity<Map<String, Object>> delete(@RequestBody Map<String, String> body) {
        try {
            service.delete(body.get("basicNo"));
            return ResponseEntity.ok(result(true, "alert.message.delete_success"));
        } catch (BusinessException e) {
            return ResponseEntity.ok(result(false, e.getUserMessage()));
        }
    }
}
