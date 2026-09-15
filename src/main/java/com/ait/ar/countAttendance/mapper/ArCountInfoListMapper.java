package com.ait.ar.countAttendance.mapper;

import com.ait.ar.countAttendance.dto.ArCountInfoOtDto;
import com.ait.ar.countAttendance.dto.ArCountInfoOtSearchDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ArCountInfoListMapper {
    /** Tổng hợp tăng ca theo năm cho từng nhân viên, chi tiết theo từng tháng (12 tháng). */
    List<ArCountInfoOtDto> selectOtSummaryList(ArCountInfoOtSearchDto params);
}
