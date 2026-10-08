package com.ait.report.ar.mapper;

import com.ait.report.ar.dto.ArReportItemDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/** Trung tâm báo cáo (REPORT_CENTER) - port từ sqlArReport.xml (getCodeListByParentCode + getreportList). */
@Mapper
public interface ArReportMapper {

    List<ArReportItemDto> selectReportList(@Param("parentCodeNo") String parentCodeNo);
}
