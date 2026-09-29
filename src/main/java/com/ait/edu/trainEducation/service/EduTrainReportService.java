package com.ait.edu.trainEducation.service;

import com.ait.edu.trainEducation.dto.EduTrainReportRowDto;
import com.ait.edu.trainEducation.dto.EduTrainReportSearchDto;
import com.ait.edu.trainEducation.dto.EduTrainReportTypeDto;
import com.ait.exception.BusinessException;

import java.util.List;

/**
 * Báo cáo đào tạo (chuyển từ ArReportCtroller.viewTrainReport + TrainReportCtroller / TrainReportSerImpl - Hanwha_HTSV).
 */
public interface EduTrainReportService {

    List<EduTrainReportTypeDto> getReportTypes() throws BusinessException;

    List<EduTrainReportRowDto> getReport(EduTrainReportSearchDto search) throws BusinessException;
}
