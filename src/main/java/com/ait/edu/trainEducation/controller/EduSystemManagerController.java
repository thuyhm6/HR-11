package com.ait.edu.trainEducation.controller;

import com.ait.edu.trainEducation.dto.EduSystemManagerDeleteDto;
import com.ait.edu.trainEducation.dto.EduSystemManagerDto;
import com.ait.edu.trainEducation.dto.EduSystemManagerSaveDto;
import com.ait.edu.trainEducation.service.EduSystemManagerService;
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
 * Hệ thống đào tạo - API JSON cho trang Angular /edu-system-manager (thay cho các trang JSP
 * /edu/traineducation/systemManager, addSystemManager, systemManagerInfo của dự án Hanwha_HTSV).
 */
@RestController
@RequestMapping("/edu/traineducation/api/systemManager")
public class EduSystemManagerController extends EduBaseController {

    @Autowired
    private EduSystemManagerService service;

    @GetMapping("/list")
    public ResponseEntity<?> getList(@RequestParam(required = false) String trainDiffCode,
                                     @RequestParam(required = false) String trainTypeCode) {
        try {
            List<EduSystemManagerDto> rows = service.getList(trainDiffCode, trainTypeCode);
            return ResponseEntity.ok(rows);
        } catch (BusinessException e) {
            return ResponseEntity.internalServerError().body(result(false, e.getUserMessage()));
        }
    }

    @GetMapping("/{sysmanaNo}")
    public ResponseEntity<?> getOne(@PathVariable String sysmanaNo) {
        try {
            return ResponseEntity.ok(service.getOne(sysmanaNo));
        } catch (BusinessException e) {
            return ResponseEntity.badRequest().body(result(false, e.getUserMessage()));
        }
    }

    @PostMapping("/save")
    public ResponseEntity<Map<String, Object>> save(@Valid @RequestBody EduSystemManagerSaveDto dto) {
        try {
            String messageKey = service.save(dto);
            return ResponseEntity.ok(result(true, messageKey));
        } catch (BusinessException e) {
            return ResponseEntity.ok(result(false, e.getUserMessage()));
        }
    }

    @PostMapping("/delete")
    public ResponseEntity<Map<String, Object>> delete(@Valid @RequestBody EduSystemManagerDeleteDto dto) {
        try {
            service.delete(dto.getSysmanaNo());
            return ResponseEntity.ok(result(true, "alert.message.delete_success"));
        } catch (BusinessException e) {
            return ResponseEntity.ok(result(false, e.getUserMessage()));
        }
    }
}
