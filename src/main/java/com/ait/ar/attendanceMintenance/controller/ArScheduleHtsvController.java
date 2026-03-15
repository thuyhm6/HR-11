package com.ait.ar.attendanceMintenance.controller;

import com.ait.ar.attendanceMintenance.dto.ArScheduleHtsvDto;
import com.ait.ar.attendanceMintenance.model.ArScheduleHtsv;
import com.ait.ar.attendanceMintenance.service.ArScheduleHtsvService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/ar/attendanceMintenance")
public class ArScheduleHtsvController {

    @Autowired
    private ArScheduleHtsvService service;

    @GetMapping("/addEmpShiftView")
    public String addEmpShiftView() {
        return "ar/attendanceMintenance/addEmpShiftView";
    }

    @GetMapping("/api/scheduleHtsv/list")
    public ResponseEntity<List<ArScheduleHtsvDto>> getList(
            @RequestParam(required = false) String empId,
            @RequestParam(required = false) String month) {

        Map<String, Object> params = new HashMap<>();
        params.put("empId", empId);

        // Mặc định hiển thị theo tháng hiện tại nếu không truyền lên
        if (month == null || month.isEmpty()) {
            month = LocalDate.now().format(DateTimeFormatter.ofPattern("yyyy-MM"));
        }
        params.put("month", month);

        return ResponseEntity.ok(service.getList(params));
    }

    @GetMapping("/api/scheduleHtsv/{pkNo}")
    public ResponseEntity<ArScheduleHtsvDto> getById(@PathVariable Long pkNo) {
        return ResponseEntity.ok(service.getByPkNo(pkNo));
    }

    @PostMapping("/api/scheduleHtsv/save")
    public ResponseEntity<Map<String, Object>> save(@RequestBody ArScheduleHtsv model) {
        Map<String, Object> response = new HashMap<>();
        try {
            service.save(model);
            response.put("success", true);
            response.put("message", "Lưu thành công");
        } catch (Exception e) {
            response.put("success", false);
            response.put("error", e.getMessage());
        }
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/api/scheduleHtsv/delete/{pkNo}")
    public ResponseEntity<Map<String, Object>> delete(@PathVariable Long pkNo) {
        Map<String, Object> response = new HashMap<>();
        try {
            service.delete(pkNo);
            response.put("success", true);
            response.put("message", "Xóa thành công");
        } catch (Exception e) {
            response.put("success", false);
            response.put("error", e.getMessage());
        }
        return ResponseEntity.ok(response);
    }
}
