package com.ait.edu.trainEducation.mapper;

import com.ait.edu.trainEducation.dto.EduTrainBasicSearchDto;
import com.ait.edu.trainEducation.dto.EduTrainCostDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/** Chi phí đào tạo - bảng EDU_COST_MANAGER (cpnyId/lang/adminID/adminIP do LanguageParameterInterceptor inject). */
@Mapper
public interface EduTrainCostMapper {

    List<EduTrainCostDto> selectList(EduTrainBasicSearchDto search);

    EduTrainCostDto selectOne(@Param("costNo") String costNo);

    int update(EduTrainCostDto dto);
}
