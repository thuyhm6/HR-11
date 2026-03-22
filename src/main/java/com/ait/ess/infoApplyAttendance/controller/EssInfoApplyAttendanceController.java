package com.ait.ess.infoApplyAttendance.controller;

import com.ait.ar.attendanceMintenance.controller.EssLeaveApplyController;
import com.ait.ess.infoApplyAttendance.dto.EssAttendanceExForBatchDto;
import com.ait.ess.infoApplyAttendance.service.EssAttendanceExForBatchService;

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
@RequestMapping("/ess/infoApplyAttendance")
public class EssInfoApplyAttendanceController {
        private static final Logger log = LoggerFactory.getLogger(EssLeaveApplyController.class);

    @Autowired
    private EssAttendanceExForBatchService service;

    @GetMapping("/viewAttendanceExForBatchInfoList")
    public String viewAttendanceExForBatchInfoList() {
        return "ess/infoApplyAttendance/viewAttendanceExForBatchInfoList";
    }

    @GetMapping("/viewCheckAttencetanceExForBatchList")
    public String viewCheckAttencetanceExForBatchList() {
        return "ess/infoApplyAttendance/viewCheckAttencetanceExForBatchList";
    }

    @GetMapping("/api/attendanceEx/list")
    @ResponseBody
    public ResponseEntity<List<EssAttendanceExForBatchDto>> getAttendanceExForBatchList(
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) String deptNos,
            @RequestParam(required = false) String fromDate,
            @RequestParam(required = false) String toDate,
            @RequestParam(required = false) String postFamily,
            @RequestParam(required = false) String shiftNo,
            @RequestParam(required = false) String itemNo) {
        EssAttendanceExForBatchDto params = new EssAttendanceExForBatchDto();
        params.setKeyword(keyword);
        params.setDeptNos(deptNos);
        params.setFromDate(fromDate);
        params.setToDate(toDate);
        params.setPostFamily(postFamily);
        params.setShiftNo(shiftNo);
        params.setItemNo(itemNo);
        return ResponseEntity.ok(service.getAttendanceExForBatchList(params));
    }

    @GetMapping("/api/checkAttendanceEx/list")
    @ResponseBody
    public ResponseEntity<List<EssAttendanceExForBatchDto>> getCheckAttendanceExForBatchList(
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) String deptNos,
            @RequestParam(required = false) String fromDate,
            @RequestParam(required = false) String toDate,
            @RequestParam(required = false) String postFamily,
            @RequestParam(required = false) String shiftNo,
            @RequestParam(required = false) String itemNo) {
        EssAttendanceExForBatchDto params = new EssAttendanceExForBatchDto();
        params.setKeyword(keyword);
        params.setDeptNos(deptNos);
        params.setFromDate(fromDate);
        params.setToDate(toDate);
        params.setPostFamily(postFamily);
        params.setShiftNo(shiftNo);
        params.setItemNo(itemNo);
        return ResponseEntity.ok(service.getCheckAttendanceExForBatchList(params));
    }

    @GetMapping("/api/checkAttendanceEx/detail")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> getCardApplyDetail(
            @RequestParam(name = "applyNo") String applyNo,
            @RequestParam(name = "applyType", required = false) String applyType) {
        return ResponseEntity.ok(service.getCardApplyDetail(applyNo, applyType));
    }

    @PostMapping("/api/attendanceEx/apply")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> applyAttendanceExForBatch(
            @RequestBody List<EssAttendanceExForBatchDto> selectedRows) {
        Map<String, Object> response = new HashMap<>();
        try {
            int successCount = service.applyAttendanceExForBatch(selectedRows);
            response.put("success", true);
            response.put("count", successCount);
            response.put("message", "Xin phép thành công " + successCount + " dòng.");
        } catch (Exception e) {
            log.error("Failed to save leave application data", e);
            response.put("success", false);
            response.put("error", e.getMessage() == null || e.getMessage().isBlank()
                    ? "Xin phép thất bại."
                    : e.getMessage());
        }
        return ResponseEntity.ok(response);
    }
}
