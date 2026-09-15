package com.ait.ess.infoApply.service;

import com.ait.ess.infoApply.dto.EssOtMonthLimitDto;
import com.ait.ess.infoApply.dto.EssOtMonthLimitSearchDto;

import java.util.List;

public interface EssOtMonthLimitService {
    /** Theo dõi tăng ca tháng - tổng hợp cả năm và từng tháng cho từng nhân viên. */
    List<EssOtMonthLimitDto> getOtMonthLimitList(EssOtMonthLimitSearchDto params);
}
