package com.ait.ar.attendanceMintenance.controller;

import com.ait.ar.attendanceMintenance.dto.ArAttendanceSearchDto;
import com.ait.ar.attendanceMintenance.service.ArAttendanceSearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/ar/attendanceMintenance")
public class ArAttendanceSearchController {

    @Autowired
    private ArAttendanceSearchService service;

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

}
