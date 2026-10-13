package com.ait.ar.countAttendance.service;

import com.ait.ar.countAttendance.dto.EmpWorkingTimefoDayDto;
import com.ait.ar.countAttendance.dto.EmpWorkingTimefoDto;
import com.ait.ar.countAttendance.dto.EmpWorkingTimefoSearchDto;
import com.ait.sy.sys.dto.DataTablesResponse;

import java.util.List;

public interface EmpWorkingTimefoListService {
    DataTablesResponse<EmpWorkingTimefoDto> getPageList(EmpWorkingTimefoSearchDto params);

    List<EmpWorkingTimefoDayDto> getStreakDayList(String personId, String streakFrom, String streakTo);
}
