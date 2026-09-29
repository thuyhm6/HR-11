package com.ait.ess.tempEmp.service;

import com.ait.ess.tempEmp.dto.MonthDetailListDto;
import com.ait.ess.tempEmp.dto.MonthDetailViewDto;
import com.ait.sy.sys.dto.DataTablesResponse;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

public interface MonthDetailListService {

    DataTablesResponse<MonthDetailListDto> getPageList(MonthDetailListDto params);

    MonthDetailViewDto getDetailView(MonthDetailListDto params);

    void exportReport(MonthDetailListDto params, HttpServletResponse response) throws IOException;
}
