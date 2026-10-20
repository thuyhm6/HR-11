package com.ait.ess.infoApplyAttendance.controller;

import com.ait.cleverse.service.CleverseApprovalService;
import com.ait.ess.infoApplyAttendance.dto.EssPiciLeaveAffirmDto;
import com.ait.ess.infoApplyAttendance.service.EssPiciLeaveAffirmService;
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
 * Xin nghỉ phép hàng loạt - API cho Angular route /pici-leave-affirm-batch (thay JSP
 * ess/infoApplyAttendance/viewApplyAttenanceBatchInfoList) và /leave-apply-manage (thay JSP
 * ar/attendanceMintenance/viewApplyAttenanceManagentInfoList_new, tham số mode=hr) của Hanwha_HTSV.
 */
@Controller
@RequestMapping("/ess/infoApplyAttendance")
public class EssPiciLeaveAffirmController {

    private static final Logger log = LoggerFactory.getLogger(EssPiciLeaveAffirmController.class);

    @Autowired
    private EssPiciLeaveAffirmService service;

    @Autowired
    private CleverseApprovalService cleverseApprovalService;

    @GetMapping("/api/piciLeave/list")
    @ResponseBody
    public ResponseEntity<?> getList(EssPiciLeaveAffirmDto search,
            @RequestParam(required = false) String firstLoad) {
        try {
            return ResponseEntity.ok(service.getList(search, "1".equals(firstLoad)));
        } catch (Exception e) {
            log.error("piciLeave list error: {}", e.getMessage(), e);
            return ResponseEntity.internalServerError().body(Map.of("error", I18nUtil.getMessage("common.loadFail")));
        }
    }

    @PostMapping("/api/piciLeave/add")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> addEmptyRow() {
        Map<String, Object> response = new HashMap<>();
        try {
            response.put("success", true);
            response.put("row", service.addEmptyRow());
        } catch (Exception e) {
            log.error("piciLeave add error: {}", e.getMessage(), e);
            response.put("success", false);
            response.put("error", errorMessage(e, "alert.message.add_fail"));
        }
        return ResponseEntity.ok(response);
    }

    @GetMapping("/api/piciLeave/leave-length")
    @ResponseBody
    public ResponseEntity<EssPiciLeaveAffirmDto> getLeaveLength(EssPiciLeaveAffirmDto dto) {
        return ResponseEntity.ok(service.getLeaveLength(dto));
    }

    @GetMapping("/api/piciLeave/emp-leave-info")
    @ResponseBody
    public ResponseEntity<EssPiciLeaveAffirmDto> getEmpLeaveInfo(@RequestParam String personId, @RequestParam String applyDate) {
        return ResponseEntity.ok(service.getEmpLeaveInfo(personId, applyDate));
    }

    @GetMapping("/api/piciLeave/affirmor-preview")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> getAffirmorPreview(@RequestParam String personId,
            @RequestParam(required = false) String leaveTypeCode,
            @RequestParam(required = false) String applyLength) {
        return ResponseEntity.ok(Map.of("affirmStr", service.getAffirmorPreview(personId, leaveTypeCode, applyLength)));
    }

    @PostMapping("/api/piciLeave/save")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> save(@RequestBody List<EssPiciLeaveAffirmDto> rows,
            @RequestParam(required = false) String mode, HttpSession session) {
        Map<String, Object> response = new HashMap<>();
        try {
            Object adminId = session.getAttribute("adminID");
            service.saveBatch(rows, adminId == null ? null : adminId.toString(), "hr".equals(mode));
            response.put("success", true);
            response.put("message", I18nUtil.getMessage("alert.message.save_success"));
        } catch (Exception e) {
            log.error("piciLeave save error: {}", e.getMessage(), e);
            response.put("success", false);
            response.put("error", errorMessage(e, "alert.message.add_fail"));
        }
        // Đồng bộ sang hộp phê duyệt Cleverse sau khi transaction lưu đơn đã commit; lỗi đồng bộ không ảnh hưởng kết quả lưu.
        if (Boolean.TRUE.equals(response.get("success"))) {
            cleverseApprovalService.sendAffirmInfoEmailApproval();
        }
        return ResponseEntity.ok(response);
    }

    @PostMapping("/api/piciLeave/cancel")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> cancel(@RequestBody List<EssPiciLeaveAffirmDto> rows,
            @RequestParam(required = false) String mode) {
        Map<String, Object> response = new HashMap<>();
        try {
            int count = service.cancelBatch(rows, "hr".equals(mode));
            response.put("success", true);
            response.put("count", count);
            response.put("message", I18nUtil.getMessage("alert.message.delete_success"));
        } catch (Exception e) {
            log.error("piciLeave cancel error: {}", e.getMessage(), e);
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
