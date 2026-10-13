package com.ait.ar.countAttendance.controller;

import com.ait.ar.countAttendance.dto.EmpWorkingTimefoDayDto;
import com.ait.ar.countAttendance.dto.EmpWorkingTimefoDto;
import com.ait.ar.countAttendance.dto.EmpWorkingTimefoSearchDto;
import com.ait.ar.countAttendance.service.EmpWorkingTimefoListService;
import com.ait.sy.sys.dto.DataTablesResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

/**
 * Backend cho giao diện Angular /emp-working-timefo-list (URL menu cũ /ar/countAttendance/empWorkingTimefoList)
 * - Theo dõi tình trạng quẹt thẻ: nhân viên có dữ liệu OUT ở AR_MAC_RECORDS_HTSV liên tiếp từ 13 ngày trở lên
 * và có dữ liệu ở AR_DETAIL_HTSV trong chuỗi ngày đó.
 */
@Controller
@RequestMapping("/ar/countAttendance")
public class EmpWorkingTimefoListController {

    private static final Logger log = LoggerFactory.getLogger(EmpWorkingTimefoListController.class);

    @Autowired
    private EmpWorkingTimefoListService empWorkingTimefoListService;

    @GetMapping("/api/empWorkingTimefoList/list")
    @ResponseBody
    public ResponseEntity<DataTablesResponse<EmpWorkingTimefoDto>> getList(@ModelAttribute EmpWorkingTimefoSearchDto params) {
        log.info("Tra cứu tình trạng quẹt thẻ: fromDate={}, toDate={}, minDays={}, deptNos={}, keyword={}",
                params.getFromDate(), params.getToDate(), params.getMinDays(), params.getDeptNos(), params.getKeyword());
        return ResponseEntity.ok(empWorkingTimefoListService.getPageList(params));
    }

    @GetMapping("/api/empWorkingTimefoList/days")
    @ResponseBody
    public ResponseEntity<?> getStreakDays(@RequestParam String personId,
                                           @RequestParam String streakFrom,
                                           @RequestParam String streakTo) {
        try {
            List<EmpWorkingTimefoDayDto> list = empWorkingTimefoListService.getStreakDayList(personId, streakFrom, streakTo);
            return ResponseEntity.ok(list);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(Map.of("error", String.valueOf(e.getMessage())));
        }
    }
}
