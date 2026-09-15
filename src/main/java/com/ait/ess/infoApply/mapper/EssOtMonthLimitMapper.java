package com.ait.ess.infoApply.mapper;

import com.ait.ess.infoApply.dto.EssOtMonthLimitDto;
import com.ait.ess.infoApply.dto.EssOtMonthLimitSearchDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface EssOtMonthLimitMapper {
    /** Theo dõi tăng ca tháng - tổng hợp cả năm và từng tháng cho từng nhân viên. */
    List<EssOtMonthLimitDto> selectOtMonthLimitList(EssOtMonthLimitSearchDto params);
}
