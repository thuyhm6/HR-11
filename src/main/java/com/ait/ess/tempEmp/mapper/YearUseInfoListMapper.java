package com.ait.ess.tempEmp.mapper;

import com.ait.ess.tempEmp.dto.YearUseInfoListDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface YearUseInfoListMapper {
    List<YearUseInfoListDto> selectList(YearUseInfoListDto params);
}
