package com.ait.edu.trainEducation.mapper;

import com.ait.edu.trainEducation.dto.EduTrainAgreementDto;
import com.ait.edu.trainEducation.dto.EduTrainAgreementSearchDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/** Hợp đồng đào tạo - bảng EDU_TRAIN_AGREEMENT (cpnyId/lang/adminID/adminIP do LanguageParameterInterceptor inject). */
@Mapper
public interface EduTrainAgreementMapper {

    List<EduTrainAgreementDto> selectList(EduTrainAgreementSearchDto search);

    EduTrainAgreementDto selectOne(@Param("agreeNo") String agreeNo);

    String selectNextNo();

    /** Số thứ tự lớn nhất của mã hợp đồng TRAxxxxxx trong công ty. */
    Long selectMaxAgreeSeq();

    int insert(EduTrainAgreementDto dto);

    int update(EduTrainAgreementDto dto);

    int deactivate(@Param("agreeNo") String agreeNo);
}
