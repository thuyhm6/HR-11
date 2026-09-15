package com.ait.ar.countAttendance.service;

import com.ait.ar.countAttendance.dto.ArCountInfoOtDto;
import com.ait.ar.countAttendance.dto.ArCountInfoOtSearchDto;

import java.util.List;

public interface ArCountInfoListService {
    /** Tổng hợp tăng ca theo năm cho từng nhân viên, chi tiết theo từng tháng. */
    List<ArCountInfoOtDto> getOtSummaryList(ArCountInfoOtSearchDto params);
}
