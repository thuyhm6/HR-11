package com.ait.edu.trainEducation.mapper;

import com.ait.edu.trainEducation.dto.EduTrainReportRowDto;
import com.ait.edu.trainEducation.dto.EduTrainReportSearchDto;
import com.ait.edu.trainEducation.dto.EduTrainReportTypeDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/** Báo cáo đào tạo - REPORT_CENTER + thống kê EDU_BASIC_INFORMATION (cpnyId / lang do LanguageParameterInterceptor inject). */
@Mapper
public interface EduTrainReportMapper {

    List<EduTrainReportTypeDto> selectReportTypes();

    List<EduTrainReportRowDto> selectReport(EduTrainReportSearchDto search);
}
