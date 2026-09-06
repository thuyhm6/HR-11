package com.ait.ess.infoApply.service;

import com.ait.ess.infoApply.dto.EssDeptOtApplyInfoDto;
import com.ait.sy.sys.dto.DataTablesResponse;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

public interface EssDeptOtApplyInfoService {

    DataTablesResponse<EssDeptOtApplyInfoDto> getPageList(EssDeptOtApplyInfoDto params);

    void exportReport(EssDeptOtApplyInfoDto params, HttpServletResponse response) throws IOException;
}
