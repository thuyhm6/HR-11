package com.ait.ess.infoApply.service;

import com.ait.ess.infoApply.dto.EssOtReportDto;
import com.ait.sy.sys.dto.DataTablesResponse;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

public interface EssOtReportService {

    DataTablesResponse<EssOtReportDto> getPageList(EssOtReportDto params);

    void exportReport(EssOtReportDto params, HttpServletResponse response) throws IOException;
}
