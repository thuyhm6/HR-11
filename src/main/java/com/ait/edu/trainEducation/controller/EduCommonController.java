package com.ait.edu.trainEducation.controller;

import com.ait.edu.trainEducation.service.EduCommonService;
import com.ait.edu.trainEducation.service.EduFileService;
import com.ait.exception.BusinessException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

/**
 * API dùng chung của module Đào tạo: tìm nhân viên + file đính kèm (ESS_FILE).
 * Tải file: dùng lại /ess/empinfo/api/files/download/{fileNo}.
 */
@RestController
@RequestMapping("/edu/traineducation/api/common")
public class EduCommonController extends EduBaseController {

    @Autowired
    private EduCommonService commonService;

    @Autowired
    private EduFileService fileService;

    @GetMapping("/employees")
    public ResponseEntity<?> searchEmployees(@RequestParam(required = false) String keyword,
                                             @RequestParam(required = false) List<String> deptNos) {
        try {
            return ResponseEntity.ok(commonService.searchEmployees(keyword, deptNos));
        } catch (BusinessException e) {
            return ResponseEntity.internalServerError().body(result(false, e.getUserMessage()));
        }
    }

    @GetMapping("/files/{applyType}/{applyNo}")
    public ResponseEntity<?> getFiles(@PathVariable String applyType, @PathVariable String applyNo) {
        try {
            return ResponseEntity.ok(fileService.getFiles(applyType, applyNo));
        } catch (BusinessException e) {
            return ResponseEntity.badRequest().body(result(false, e.getUserMessage()));
        }
    }

    @PostMapping("/files/upload")
    public ResponseEntity<Map<String, Object>> upload(@RequestParam String applyType, @RequestParam String applyNo,
                                                      @RequestParam(value = "files", required = false) List<MultipartFile> files) {
        try {
            fileService.upload(applyType, applyNo, files);
            return ResponseEntity.ok(result(true, "common.saveSuccess"));
        } catch (BusinessException e) {
            return ResponseEntity.ok(result(false, e.getUserMessage()));
        }
    }

    @PostMapping("/files/delete")
    public ResponseEntity<Map<String, Object>> delete(@RequestBody Map<String, Object> body) {
        try {
            String applyType = String.valueOf(body.get("applyType"));
            String applyNo = String.valueOf(body.get("applyNo"));
            @SuppressWarnings("unchecked")
            List<String> fileNos = (List<String>) body.get("fileNos");
            fileService.delete(applyType, applyNo, fileNos);
            return ResponseEntity.ok(result(true, "alert.message.delete_success"));
        } catch (BusinessException e) {
            return ResponseEntity.ok(result(false, e.getUserMessage()));
        }
    }
}
