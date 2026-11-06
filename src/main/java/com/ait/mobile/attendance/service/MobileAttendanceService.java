package com.ait.mobile.attendance.service;

import com.ait.mobile.attendance.dto.MobileAttendanceDayDto;
import java.time.YearMonth;
import java.util.List;

/** Bảng công cá nhân - dùng lại EssAttendancePersonalInfoService (màn attendance-personal-info-list ở web). */
public interface MobileAttendanceService {

    /** Kết quả công trong tháng của người đăng nhập, ngày mới nhất trước. */
    List<MobileAttendanceDayDto> getMonth(YearMonth month);
}
