package com.ait.pa.workManagement.service;

import com.ait.exception.BusinessException;
import com.ait.pa.workManagement.dto.PaResultSummaryDto;
import com.ait.pa.workManagement.dto.PaResultSummarySearchDto;
import com.ait.pa.workManagement.dto.PaSalaryDetailDto;
import com.ait.pa.workManagement.dto.PaSalaryDetailItemDto;
import com.ait.pa.workManagement.dto.PaSalaryDetailSearchDto;

import java.util.List;

/** Báo cáo kết quả lương: Lương tháng/năm chi tiết, Tổng lương cá nhân/phòng ban. */
public interface PaSalaryResultService {

    List<PaSalaryDetailDto> getMonthList(PaSalaryDetailSearchDto search) throws BusinessException;

    List<PaSalaryDetailDto> getYearList(PaSalaryDetailSearchDto search) throws BusinessException;

    /** from = "month" (theo kỳ lương) | "year" (luỹ kế theo khoảng tháng). */
    List<PaSalaryDetailItemDto> getDetailItems(PaSalaryDetailSearchDto search, String from) throws BusinessException;

    List<PaResultSummaryDto> getEmpResultList(PaResultSummarySearchDto search) throws BusinessException;

    List<PaResultSummaryDto> getDeptResultList(PaResultSummarySearchDto search) throws BusinessException;
}
