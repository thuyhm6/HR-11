package com.ait.edu.trainEducation.service;

import com.ait.edu.trainEducation.dto.EduTrainArchiveDto;
import com.ait.edu.trainEducation.dto.EduTrainArchiveSearchDto;
import com.ait.exception.BusinessException;

import java.util.List;

/** Hồ sơ đào tạo (chuyển từ TrainEducationSerImpl.trainArchives - dự án Hanwha_HTSV). */
public interface EduTrainArchivesService {

    List<EduTrainArchiveDto> getList(EduTrainArchiveSearchDto search) throws BusinessException;
}
