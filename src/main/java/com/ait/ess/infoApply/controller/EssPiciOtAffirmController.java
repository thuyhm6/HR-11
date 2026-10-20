package com.ait.ess.infoApply.controller;

import com.ait.cleverse.service.CleverseApprovalService;
import com.ait.ess.infoApply.dto.EssPiciOtAffirmDto;
import com.ait.ess.infoApply.service.EssPiciOtAffirmService;
import com.ait.util.I18nUtil;
import jakarta.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Xin phép tăng ca hàng loạt - API cho Angular route /pici-ot-affirm-batch (thay JSP ess/infoApply/viewPiciOtAffirmLBatchList)
 * và /ot-apply-fast (thay JSP ar/attendanceMintenance/viewArOvertimeManagent_fast, tham số mode=hr) của Hanwha_HTSV.
 */
@Controller
@RequestMapping("/ess/infoApply")
public class EssPiciOtAffirmController {

    private static final Logger log = LoggerFactory.getLogger(EssPiciOtAffirmController.class);

    @Autowired
    private EssPiciOtAffirmService service;

    @Autowired
    private CleverseApprovalService cleverseApprovalService;

    @GetMapping("/api/piciOtAffirm/list")
    @ResponseBody
    public ResponseEntity<?> getList(EssPiciOtAffirmDto search) {
        try {
            return ResponseEntity.ok(service.getList(search));
        } catch (Exception e) {
            log.error("piciOtAffirm list error: {}", e.getMessage(), e);
            return ResponseEntity.internalServerError().body(Map.of("error", I18nUtil.getMessage("common.loadFail")));
        }
    }

    @PostMapping("/api/piciOtAffirm/add")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> addEmptyRow() {
        Map<String, Object> response = new HashMap<>();
        try {
            response.put("success", true);
            response.put("row", service.addEmptyRow());
        } catch (Exception e) {
            log.error("piciOtAffirm add error: {}", e.getMessage(), e);
            response.put("success", false);
            response.put("error", errorMessage(e, "alert.message.add_fail"));
        }
        return ResponseEntity.ok(response);
    }

    @GetMapping("/api/piciOtAffirm/validate-info")
    @ResponseBody
    public ResponseEntity<EssPiciOtAffirmDto> getValidateInfo(EssPiciOtAffirmDto dto) {
        return ResponseEntity.ok(service.getValidateInfo(dto));
    }

    @GetMapping("/api/piciOtAffirm/emp-ot-info")
    @ResponseBody
    public ResponseEntity<EssPiciOtAffirmDto> getEmpOtInfo(@RequestParam String personId, @RequestParam String applyOtDate) {
        return ResponseEntity.ok(service.getEmpOtInfo(personId, applyOtDate));
    }

    @GetMapping("/api/piciOtAffirm/default-time")
    @ResponseBody
    public ResponseEntity<EssPiciOtAffirmDto> getDefaultTime(@RequestParam String applyOtDate) {
        return ResponseEntity.ok(service.getDefaultTime(applyOtDate));
    }

    @GetMapping("/api/piciOtAffirm/affirmor-preview")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> getAffirmorPreview(@RequestParam String personId,
            @RequestParam(required = false) String otTypeCode,
            @RequestParam(required = false) String applyLength) {
        return ResponseEntity.ok(Map.of("affirmStr", service.getAffirmorPreview(personId, otTypeCode, applyLength)));
    }

    @PostMapping("/api/piciOtAffirm/save")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> save(@RequestBody List<EssPiciOtAffirmDto> rows,
            @RequestParam(required = false) String mode, HttpSession session) {
        Map<String, Object> response = new HashMap<>();
        try {
            Object adminId = session.getAttribute("adminID");
            service.saveBatch(rows, adminId == null ? null : adminId.toString(), "hr".equals(mode));
            response.put("success", true);
            response.put("message", I18nUtil.getMessage("alert.message.save_success"));
        } catch (Exception e) {
            log.error("piciOtAffirm save error: {}", e.getMessage(), e);
            response.put("success", false);
            response.put("error", errorMessage(e, "alert.message.add_fail"));
        }
        // Đồng bộ sang hộp phê duyệt Cleverse sau khi transaction lưu đơn đã commit (giống
        // ArOvertimeManagentController.save); lỗi đồng bộ không ảnh hưởng kết quả lưu đơn.
        if (Boolean.TRUE.equals(response.get("success"))) {
            cleverseApprovalService.sendAffirmInfoEmailApproval();
        }
        return ResponseEntity.ok(response);
    }

    @PostMapping("/api/piciOtAffirm/cancel")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> cancel(@RequestBody List<EssPiciOtAffirmDto> rows,
            @RequestParam(required = false) String mode) {
        Map<String, Object> response = new HashMap<>();
        try {
            int count = service.cancelBatch(rows, "hr".equals(mode));
            response.put("success", true);
            response.put("count", count);
        } catch (Exception e) {
            log.error("piciOtAffirm cancel error: {}", e.getMessage(), e);
            response.put("success", false);
            response.put("error", errorMessage(e, "alert.message.delete_fail"));
        }
        return ResponseEntity.ok(response);
    }

    /** Lỗi nghiệp vụ (IllegalArgumentException) trả nguyên thông báo; lỗi hệ thống trả message chung. */
    private String errorMessage(Exception e, String fallbackKey) {
        if (e instanceof IllegalArgumentException && e.getMessage() != null && !e.getMessage().isBlank()) {
            return e.getMessage();
        }
        return I18nUtil.getMessage(fallbackKey);
    }
}
