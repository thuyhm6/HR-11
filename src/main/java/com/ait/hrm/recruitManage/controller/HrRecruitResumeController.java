package com.ait.hrm.recruitManage.controller;

import com.ait.hrm.recruitManage.dto.HrExperienceListDto;
import com.ait.hrm.recruitManage.dto.HrRecruitResumeDto;
import com.ait.hrm.recruitManage.service.HrRecruitResumeService;
import com.ait.sy.sys.dto.ApiResponse;

import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

/**
 * API JSON cho 2 trang Angular:
 *  - /hrm/recruitManage/viewResumeList     → route Angular /recruit-resume-list
 *  - /hrm/recruitManage/viewExperienceList → route Angular /view-experience-list
 */
@RestController
@RequestMapping("/hrm/recruitManage/api")
public class HrRecruitResumeController {

    private static final Logger log = LoggerFactory.getLogger(HrRecruitResumeController.class);

    @Autowired
    private HrRecruitResumeService service;

    // ── Khái quát phát lệnh (HR_RECRUIT_REGISTER_INFO) ──

    @PostMapping("/resume/list")
    public ApiResponse<List<HrRecruitResumeDto>> getResumeList(@RequestBody HrRecruitResumeDto criteria) {
        return service.getResumeList(criteria);
    }

    @GetMapping("/resume/detail")
    public ApiResponse<HrRecruitResumeDto> getResumeDetail(@RequestParam("seq") String seq) {
        return service.getResumeDetail(seq);
    }

    @PostMapping("/resume/save")
    public ApiResponse<Void> saveResume(@Valid @RequestBody HrRecruitResumeDto dto) {
        return service.saveResume(dto);
    }

    @PostMapping("/resume/delete")
    public ApiResponse<Void> deleteResume(@RequestParam("seq") String seq) {
        return service.deleteResume(seq);
    }

    // ── Tra cứu phát lệnh (HR_EXPERIENCE_INSIDE) ──

    @PostMapping("/experience/list")
    public ApiResponse<List<HrExperienceListDto>> getExperienceList(@RequestBody HrExperienceListDto criteria) {
        return service.getExperienceList(criteria);
    }

    /** Lỗi @Valid → 400 + mã lỗi (message của constraint) để frontend tự dịch, thay vì rơi vào handler 500 chung. */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiResponse<Void>> handleValidation(MethodArgumentNotValidException ex) {
        String codes = ex.getBindingResult().getFieldErrors().stream()
                .map(FieldError::getDefaultMessage)
                .collect(Collectors.joining(","));
        log.warn("Dữ liệu khái quát phát lệnh không hợp lệ: {}", codes);
        return ResponseEntity.badRequest().body(ApiResponse.error("VALIDATION_ERROR", codes));
    }
}
