package com.ait.edu.trainEducation.mapper;

import com.ait.edu.trainEducation.dto.EduTrainArchiveDto;
import com.ait.edu.trainEducation.dto.EduTrainArchiveSearchDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * Hồ sơ đào tạo - EDU_FREE_EMPLOYEE / EDU_BASIC_INFORMATION (+ EDU_TRAIN_BASIC_HISTORY cho dữ liệu cũ).
 * cpnyId / lang do LanguageParameterInterceptor inject.
 */
@Mapper
public interface EduTrainArchivesMapper {

    List<EduTrainArchiveDto> selectList(EduTrainArchiveSearchDto search);
}
