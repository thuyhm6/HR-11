package com.ait.ar.countAttendance.mapper;

import com.ait.ar.countAttendance.dto.EmpWorkingTimefoDayDto;
import com.ait.ar.countAttendance.dto.EmpWorkingTimefoDto;
import com.ait.ar.countAttendance.dto.EmpWorkingTimefoSearchDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface EmpWorkingTimefoListMapper {
    /** Đếm số chuỗi ngày OUT liên tiếp thỏa điều kiện. */
    int countStreakList(EmpWorkingTimefoSearchDto params);

    /** Danh sách chuỗi ngày OUT liên tiếp (phân trang ROWNUM). */
    List<EmpWorkingTimefoDto> selectStreakListPage(EmpWorkingTimefoSearchDto params);

    /** Chi tiết quẹt thẻ theo ngày của 1 nhân viên trong khoảng [streakFrom, streakTo] (DD/MM/YYYY). */
    List<EmpWorkingTimefoDayDto> selectStreakDayList(@Param("personId") String personId,
                                                     @Param("streakFrom") String streakFrom,
                                                     @Param("streakTo") String streakTo);
}
