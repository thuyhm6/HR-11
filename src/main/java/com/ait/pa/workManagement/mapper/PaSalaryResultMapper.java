package com.ait.pa.workManagement.mapper;

import com.ait.pa.workManagement.dto.PaResultSummaryDto;
import com.ait.pa.workManagement.dto.PaResultSummarySearchDto;
import com.ait.pa.workManagement.dto.PaSalaryDetailDto;
import com.ait.pa.workManagement.dto.PaSalaryDetailItemDto;
import com.ait.pa.workManagement.dto.PaSalaryDetailSearchDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Báo cáo kết quả lương (PA_SUMMARY_HTSV): Lương tháng/năm chi tiết, Tổng lương cá nhân/phòng ban.
 * Port từ sqlViewPaParam.xml (detailPersonCountInfoLeft, detailYearCountInfoLeft, callDetail*CountInfoRight,
 * detailMonthYearCountInfoRight, viewPaResultList, viewDeptPaResultList) của dự án Hanwha_HTSV.
 */
@Mapper
public interface PaSalaryResultMapper {

    List<PaSalaryDetailDto> selectMonthList(PaSalaryDetailSearchDto params);

    List<PaSalaryDetailDto> selectYearList(PaSalaryDetailSearchDto params);

    void callMonthDetailPage(PaSalaryDetailSearchDto params);

    void callYearDetailPage(PaSalaryDetailSearchDto params);

    List<PaSalaryDetailItemDto> selectDetailItems(@Param("personId") String personId);

    List<PaResultSummaryDto> selectEmpResultList(PaResultSummarySearchDto params);

    List<PaResultSummaryDto> selectDeptResultList(PaResultSummarySearchDto params);
}
