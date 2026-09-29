package com.ait.edu.trainEducation.mapper;

import com.ait.edu.trainEducation.dto.EduSystemManagerDto;
import com.ait.edu.trainEducation.dto.EduSystemManagerSaveDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/** Hệ thống đào tạo - bảng EDU_SYSTEM_MANAGER (cpnyId/lang/adminID/adminIP do LanguageParameterInterceptor inject). */
@Mapper
public interface EduSystemManagerMapper {

    List<EduSystemManagerDto> selectList(@Param("trainDiffCode") String trainDiffCode,
                                         @Param("trainTypeCode") String trainTypeCode);

    EduSystemManagerDto selectOne(@Param("sysmanaNo") String sysmanaNo);

    String selectMaxTrainTypeNo(@Param("trainDiffCode") String trainDiffCode);

    int countDuplicate(@Param("trainDiffCode") String trainDiffCode,
                       @Param("trainTypeCode") String trainTypeCode);

    int insert(EduSystemManagerSaveDto dto);

    int updateRemark(EduSystemManagerSaveDto dto);

    int deactivate(@Param("sysmanaNo") String sysmanaNo);
}
