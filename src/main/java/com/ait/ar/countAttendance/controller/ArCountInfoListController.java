package com.ait.ar.countAttendance.controller;

import com.ait.ar.countAttendance.dto.ArCountInfoOtDto;
import com.ait.ar.countAttendance.dto.ArCountInfoOtSearchDto;
import com.ait.ar.countAttendance.service.ArCountInfoListService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Backend cho giao diện Angular /ar-count-info-list (URL menu cũ /ar/countAttendance/arCountInfoList).
 * Tab "Nghỉ phép" tái sử dụng nguyên API sẵn có của ArPersonalListService
 * (xem EssViewDeptController#getArPersonalListItems/Summary/Detail) - không tạo mới ở đây.
 * Tab "Tăng ca" dùng API riêng bên dưới vì SQL tổng hợp theo tháng khác với ArPersonalList.
 */
@Controller
@RequestMapping("/ar/countAttendance")
public class ArCountInfoListController {

    private static final Logger log = LoggerFactory.getLogger(ArCountInfoListController.class);

    @Autowired
    private ArCountInfoListService arCountInfoListService;

    @GetMapping("/api/arCountInfoList/otSummary")
    @ResponseBody
    public ResponseEntity<List<ArCountInfoOtDto>> getOtSummary(
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) String deptNos,
            @RequestParam(required = false) String empTypeCode,
            @RequestParam(required = false) String shiftNo,
            @RequestParam String startTime) {
        log.info("Tra cứu tổng hợp tăng ca năm: startTime={}, deptNos={}, empTypeCode={}, shiftNo={}, keyword={}",
                startTime, deptNos, empTypeCode, shiftNo, keyword);
        ArCountInfoOtSearchDto params = new ArCountInfoOtSearchDto();
        params.setKeyword(keyword);
        params.setDeptNos(deptNos);
        params.setEmpTypeCode(empTypeCode);
        params.setShiftNo(shiftNo);
        params.setStartTime(startTime);
        return ResponseEntity.ok(arCountInfoListService.getOtSummaryList(params));
    }
}
