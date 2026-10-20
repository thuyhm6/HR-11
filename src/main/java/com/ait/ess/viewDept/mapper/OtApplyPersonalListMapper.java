package com.ait.ess.viewDept.mapper;

import com.ait.ess.viewDept.dto.OtApplyPersonalListDetailDto;
import com.ait.ess.viewDept.dto.OtApplyPersonalListDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface OtApplyPersonalListMapper {
    List<OtApplyPersonalListDto> selectSummaryList(OtApplyPersonalListDto params);

    List<OtApplyPersonalListDetailDto> selectDetailList(OtApplyPersonalListDetailDto params);
}
