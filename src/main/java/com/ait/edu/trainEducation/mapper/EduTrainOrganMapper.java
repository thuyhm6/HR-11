package com.ait.edu.trainEducation.mapper;

import com.ait.edu.trainEducation.dto.EduTrainOrganDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/** Đơn vị đào tạo - bảng EDU_TRAIN_ORGAN (cpnyId/lang/adminID/adminIP do LanguageParameterInterceptor inject). */
@Mapper
public interface EduTrainOrganMapper {

    List<EduTrainOrganDto> selectList(@Param("organName") String organName, @Param("address") String address);

    EduTrainOrganDto selectOne(@Param("organNo") String organNo);

    String selectNextNo();

    int insert(EduTrainOrganDto dto);

    int update(EduTrainOrganDto dto);

    int deactivate(@Param("organNo") String organNo);
}
