package com.ait.ess.deptEmpAtt.controller;

import com.ait.ess.deptEmpAtt.dto.ArShiftGroupManagementDto;
import com.ait.ess.deptEmpAtt.service.ArShiftGroupManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/ess/deptEmpAtt")
public class EssDeptEmpAttController {

    @Autowired
    private ArShiftGroupManagementService service;

    // ===== VIEW =====

    @GetMapping("/viewArShiftGroupList")
    public String viewArShiftGroupList() {
        return "ess/deptEmpAtt/viewArShiftGroupList";
    }

    // ===== API =====

    /** Lấy danh sách lịch sử thay đổi ca */
    @GetMapping("/api/shiftGroup/list")
    @ResponseBody
    public ResponseEntity<List<ArShiftGroupManagementDto>> getList(
            @RequestParam(required = false) String empId,
            @RequestParam(required = false) String empName) {
        ArShiftGroupManagementDto dto = new ArShiftGroupManagementDto();
        dto.setEmpId(empId);
        dto.setLocalName(empName);
        return ResponseEntity.ok(service.getList(dto));
    }

    /** Lưu thay đổi ca — gọi Procedure AR_SHIFTGROUP_CHANGE_P */
    @PostMapping("/api/shiftGroup/save")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> save(@RequestBody Map<String, Object> body) {
        Map<String, Object> response = new HashMap<>();
        try {
            service.saveChange(body);
            response.put("success", true);
            response.put("message", "Lưu thành công");
        } catch (Exception e) {
            response.put("success", false);
            response.put("error", e.getMessage());
        }
        return ResponseEntity.ok(response);
    }
}
