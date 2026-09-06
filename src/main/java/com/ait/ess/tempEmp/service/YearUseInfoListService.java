package com.ait.ess.tempEmp.service;

import com.ait.ess.tempEmp.dto.YearUseInfoListDto;

import java.util.List;

public interface YearUseInfoListService {

    List<YearUseInfoListDto> getList(YearUseInfoListDto params);
}
