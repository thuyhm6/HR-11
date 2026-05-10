package com.ait.ess.infoApply.mapper;

import com.ait.ess.infoApply.dto.EssOtApplyListDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

@Mapper
public interface EssOtApplyMapper {

    Map<String, Object> selectOtDateInfo(@Param("applyDate") String applyDate);

    List<EssOtApplyListDto> selectMyOtApplyList(EssOtApplyListDto dto);

    int cancelMyOtApplyList(@Param("applyNos") List<String> applyNos);
}
