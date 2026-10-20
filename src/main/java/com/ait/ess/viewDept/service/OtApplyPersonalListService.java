package com.ait.ess.viewDept.service;

import com.ait.ess.viewDept.dto.OtApplyPersonalListDetailDto;
import com.ait.ess.viewDept.dto.OtApplyPersonalListDto;

import java.util.List;

public interface OtApplyPersonalListService {
    List<OtApplyPersonalListDto> getSummaryList(OtApplyPersonalListDto params);

    List<OtApplyPersonalListDetailDto> getDetailList(OtApplyPersonalListDetailDto params);
}
