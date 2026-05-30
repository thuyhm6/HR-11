package com.ait.ar.attendanceMintenance.controller;

import com.ait.ar.attendanceMintenance.dto.ArAttendanceSearchDto;
import com.ait.ar.attendanceMintenance.dto.ArCardRecordDto;
import com.ait.ar.attendanceMintenance.service.ArAttendanceSearchService;
import com.ait.ar.attendanceMintenance.service.ArCardRecordService;
import com.ait.sy.sys.dto.DataTablesResponse;
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

import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/ar/attendanceMintenance")
public class ArAttendanceSearchController {

    private static final Logger log = LoggerFactory.getLogger(ArAttendanceSearchController.class);

    @Autowired
    private ArAttendanceSearchService service;

    @Autowired
    private ArCardRecordService arCardRecordService;

    @GetMapping("/viewAttendanceManagentForSerchInfoList")
    public String viewAttendanceManagentForSerchInfoList() {
        return "ar/attendanceMintenance/viewAttendanceManagentForSerchInfoList";
    }

    @GetMapping("/viewSearchApplyOtInfoList")
    public String viewSearchApplyOtInfoList() {
        return "ar/attendanceMintenance/viewSearchApplyOtInfoList";
    }

    @GetMapping("/api/attendanceSearch/list")
    @ResponseBody
    public ResponseEntity<List<ArAttendanceSearchDto>> getAttendanceSearchList(
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) String deptNos,
            @RequestParam(required = false) String fromDate,
            @RequestParam(required = false) String toDate,
            @RequestParam(required = false) String postFamily,
            @RequestParam(required = false) String shiftNo,
            @RequestParam(required = false) String itemNo) {
        ArAttendanceSearchDto params = new ArAttendanceSearchDto();
        params.setKeyword(keyword);
        params.setDeptNos(deptNos);
        params.setFromDate(fromDate);
        params.setToDate(toDate);
        params.setPostFamily(postFamily);
        params.setShiftNo(shiftNo);
        params.setItemNo(itemNo);
        return ResponseEntity.ok(service.getAttendanceSearchList(params));
    }

    @GetMapping("/api/attendanceSearch/otList")
    @ResponseBody
    public ResponseEntity<List<ArAttendanceSearchDto>> getAttendanceOtSearchList(
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) String deptNos,
            @RequestParam(required = false) String fromDate,
            @RequestParam(required = false) String toDate,
            @RequestParam(required = false) String postFamily,
            @RequestParam(required = false) String shiftNo,
            @RequestParam(required = false) String itemNo) {
        ArAttendanceSearchDto params = new ArAttendanceSearchDto();
        params.setKeyword(keyword);
        params.setDeptNos(deptNos);
        params.setFromDate(fromDate);
        params.setToDate(toDate);
        params.setPostFamily(postFamily);
        params.setShiftNo(shiftNo);
        params.setItemNo(itemNo);
        return ResponseEntity.ok(service.getAttendanceOtSearchList(params));
    }

    @GetMapping("/viewArCardRecord")
    public String viewArCardRecord() {
        return "ar/attendanceMintenance/viewArCardRecord";
    }

    @GetMapping("/api/cardRecord/list")
    @ResponseBody
    public ResponseEntity<DataTablesResponse<ArCardRecordDto>> getCardRecordList(
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) String deptNos,
            @RequestParam(required = false) String fromDate,
            @RequestParam(required = false) String toDate,
            @RequestParam(required = false) String shiftNo,
            @RequestParam(defaultValue = "1") int draw,
            @RequestParam(defaultValue = "0") int start,
            @RequestParam(defaultValue = "25") int length) {
        ArCardRecordDto dto = new ArCardRecordDto();
        dto.setKeyword(keyword);
        dto.setDeptNos(deptNos);
        dto.setFromDate(fromDate);
        dto.setToDate(toDate);
        dto.setShiftNo(shiftNo);
        dto.setDraw(draw);
        dto.setStart(start);
        dto.setLength(length);
        return ResponseEntity.ok(arCardRecordService.getPageList(dto));
    }

    @GetMapping("/api/cardRecord/detail")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> getCardRecordDetail(@RequestParam Long recordNo) {
        Map<String, Object> result = new java.util.HashMap<>();
        try {
            ArCardRecordDto dto = arCardRecordService.getByRecordNo(recordNo);
            if (dto != null) {
                result.put("success", true);
                result.put("data", dto);
            } else {
                result.put("success", false);
                result.put("message", "Không tìm thấy bản ghi.");
            }
        } catch (Exception e) {
            log.error("[CardRecord] getDetail error recordNo={}", recordNo, e);
            result.put("success", false);
            result.put("message", "Lỗi hệ thống khi lấy thông tin bản ghi.");
        }
        return ResponseEntity.ok(result);
    }

    @PostMapping("/api/cardRecord/insert")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> insertCardRecord(@RequestBody ArCardRecordDto dto) {
        return ResponseEntity.ok(arCardRecordService.insertRecord(dto));
    }

    @PostMapping("/api/cardRecord/update")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> updateCardRecord(@RequestBody ArCardRecordDto dto) {
        return ResponseEntity.ok(arCardRecordService.updateRecord(dto));
    }

    @PostMapping("/api/cardRecord/delete")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> deleteCardRecord(@RequestBody ArCardRecordDto dto) {
        Map<String, Object> result = new java.util.HashMap<>();
        if (dto == null || dto.getRecordNo() == null) {
            result.put("success", false);
            result.put("message", "Thiếu thông tin bản ghi cần xóa.");
            return ResponseEntity.ok(result);
        }
        return ResponseEntity.ok(arCardRecordService.deleteByRecordNo(dto.getRecordNo()));
    }

    @PostMapping("/api/cardRecord/importFromDevice")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> importCardRecordFromDevice(
            @RequestParam String fromDate,
            @RequestParam String toDate) {
        if (fromDate == null || fromDate.isBlank() || toDate == null || toDate.isBlank()) {
            Map<String, Object> err = new java.util.HashMap<>();
            err.put("success", false);
            err.put("message", "Vui lòng nhập khoảng thời gian cần đọc dữ liệu.");
            return ResponseEntity.ok(err);
        }
        log.info("[importFromDevice] fromDate={}, toDate={}", fromDate, toDate);
        return ResponseEntity.ok(arCardRecordService.importFromDevice(fromDate, toDate));
    }

}
