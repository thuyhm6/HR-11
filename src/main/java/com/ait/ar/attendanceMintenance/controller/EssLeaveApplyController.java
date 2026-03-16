package com.ait.ar.attendanceMintenance.controller;

import com.ait.ar.attendanceMintenance.dto.EssLeaveApplyDto;
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

    @GetMapping("/api/leaveApply/list")
    @ResponseBody
    public ResponseEntity<List<EssLeaveApplyDto>> getList(
            @RequestParam(required = false) String empId,
            @RequestParam(required = false) String localName,
            @RequestParam(required = false) String fromDate,
            @RequestParam(required = false) String toDate) {
        EssLeaveApplyDto dto = new EssLeaveApplyDto();
        dto.setFromDate(fromDate);
        dto.setToDate(toDate);
        return ResponseEntity.ok(service.getList(dto));
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
}
