package com.ait.ess.tempEmp.controller;

import com.ait.ess.tempEmp.dto.MonthDetailListDto;
import com.ait.ess.tempEmp.dto.YearUseInfoListDto;
import com.ait.ess.tempEmp.service.MonthDetailListService;
import com.ait.ess.tempEmp.service.YearUseInfoListService;
import com.ait.sy.sys.dto.DataTablesResponse;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("/ess/tempEmp")
public class EssTempEmpController {

    @Autowired
    private MonthDetailListService monthDetailListService;

    @Autowired
    private YearUseInfoListService yearUseInfoListService;

    // Trang view đã migrate sang Angular (/view-month-detail-list) - xem MIGRATED_ROUTES trong
    // app-shell.component.ts. API JSON bên dưới vẫn giữ nguyên vì Angular gọi lại nguyên backend.

    @GetMapping("/api/monthDetailList/list")
    @ResponseBody
    public DataTablesResponse<MonthDetailListDto> getMonthDetailList(MonthDetailListDto params) {
        return monthDetailListService.getPageList(params);
    }

    @GetMapping("/api/monthDetailList/export")
    public void exportMonthDetailList(MonthDetailListDto params, HttpServletResponse response) throws IOException {
        monthDetailListService.exportReport(params, response);
    }

    // Trang Angular thuần (/view-year-use-info-list) - không có template Thymeleaf tương ứng vì đây
    // là giao diện tạo mới, không phải chuyển đổi trang cũ.

    @GetMapping("/api/yearUseInfoList/list")
    @ResponseBody
    public List<YearUseInfoListDto> getYearUseInfoList(YearUseInfoListDto params) {
        return yearUseInfoListService.getList(params);
    }
}
