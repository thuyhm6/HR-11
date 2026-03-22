package com.ait.ar.attendanceMintenance.controller;

import com.ait.ar.attendanceMintenance.dto.EssLeaveApplyDto;
import com.ait.ar.attendanceMintenance.dto.EssLeaveApplyImportTempDto;
import com.ait.sy.syAffirm.dto.SyAffirmEmailDto;
import com.ait.ar.attendanceMintenance.service.EssLeaveApplyService;
import com.ait.sy.syAffirm.service.SyAffirmEmailService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/ar/attendanceMintenance")
public class EssLeaveApplyController {
    private static final Logger log = LoggerFactory.getLogger(EssLeaveApplyController.class);

    @Autowired
    private EssLeaveApplyService service;

    @Autowired
    private SyAffirmEmailService affirmorService;

    @GetMapping("/viewApplyAttenanceManagentInfoList_new")
    public String view() {
        return "ar/attendanceMintenance/viewApplyAttenanceManagentInfoList_new";
    }

    @GetMapping("/viewImportAttendanceTempList")
    public String viewImportAttendanceTempList() {
        return "ar/attendanceMintenance/viewImportAttendanceTempList";
    }

    @GetMapping("/api/leaveApply/list")
    @ResponseBody
    public ResponseEntity<List<EssLeaveApplyDto>> getList(
            @RequestParam(required = false) String empId,
            @RequestParam(required = false) String localName,
            @RequestParam(required = false) String fromDate,
            @RequestParam(required = false) String toDate) {
        EssLeaveApplyDto dto = new EssLeaveApplyDto();
        dto.setEmpId(empId);
        dto.setLocalName(localName);
        dto.setFromDate(fromDate);
        dto.setToDate(toDate);
        return ResponseEntity.ok(service.getList(dto));
    }

    @GetMapping("/api/leaveApply/detail")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> getLeaveApplyDetail(
            @RequestParam(name = "applyNo") String applyNo,
            @RequestParam(name = "applyType", required = false) String applyType) {
        return ResponseEntity.ok(service.getLeaveApplyDetail(applyNo, applyType));
    }

    @PostMapping("/api/leaveApply/approvers")
    @ResponseBody
    public ResponseEntity<List<SyAffirmEmailDto>> getApprovers(@RequestParam(name = "applyTypeNo") String applyTypeNo,
            @RequestParam(name = "personId") String personId,
            // Các tham số này có thể null/rỗng theo logic trong DB
            @RequestParam(name = "applyTypeCode", required = false) String applyTypeCode,
            @RequestParam(name = "applyLength", required = false, defaultValue = "0") String applyLength
    ) {
        
        // Gọi phương thức từ tầng Service
        List<SyAffirmEmailDto> affirmorList = affirmorService.findAffirmorList(
                applyTypeNo, 
                personId, 
                applyTypeCode, 
                applyLength
        );

        // 2. Trả về kết quả với HTTP Status 200 (OK)
        return ResponseEntity.ok(affirmorList);
    }

    @PostMapping("/api/leaveApply/save")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> save(@RequestBody Map<String, Object> params) {
        Map<String, Object> response = new HashMap<>();
        try {
            service.saveLeaveApply(params);
            response.put("success", true);
            response.put("message", "Lưu thành công");
        } catch (Exception e) {
            log.error("Failed to save leave application payloadKeys={}",
                    params != null ? params.keySet() : null, e);
            response.put("success", false);
            response.put("error", "Loi he thong khi luu don nghi phep.");
        }
        return ResponseEntity.ok(response);
    }

    @GetMapping("/api/leaveApply/importTemp/list")
    @ResponseBody
    public ResponseEntity<List<EssLeaveApplyImportTempDto>> getImportTempList(
            @RequestParam(name = "errorOnly", required = false) String errorOnly) {
        return ResponseEntity.ok(service.getImportTempList(errorOnly));
    }

    @PostMapping("/api/leaveApply/importTemp/save")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> importTempToOfficial() {
        Map<String, Object> response = new HashMap<>();
        try {
            String message = service.importTempToOfficial();
            response.put("success", true);
            response.put("message", message.isBlank() ? "Luu thanh cong" : message);
        } catch (Exception e) {
            log.error("Failed to import attendance apply temp data", e);
            response.put("success", false);
            response.put("error", e.getMessage() == null || e.getMessage().isBlank()
                    ? "Loi he thong khi luu du lieu import."
                    : e.getMessage());
        }
        return ResponseEntity.ok(response);
    }
}
