package com.ait.report.ar.service;

import com.ait.exception.BusinessException;
import com.ait.report.ar.dto.ArReportItemDto;

import java.util.List;

/** Trung tâm báo cáo theo menu (lương / nhân sự / chấm công / đào tạo). */
public interface ArReportService {

    List<ArReportItemDto> getReportList(String menuNo) throws BusinessException;
}
