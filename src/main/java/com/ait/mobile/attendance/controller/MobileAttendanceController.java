package com.ait.mobile.attendance.controller;

import com.ait.mobile.attendance.dto.MobileAttendanceDayDto;
import com.ait.mobile.attendance.service.MobileAttendanceService;
import com.ait.mobile.common.MobileResponse;
import jakarta.validation.constraints.Pattern;
import java.time.YearMonth;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Validated
@RequestMapping("/mobile/api/attendance")
public class MobileAttendanceController {

    @Autowired
    private MobileAttendanceService mobileAttendanceService;

    /** Bảng công tháng. month: yyyy-MM (mặc định tháng hiện tại). */
    @GetMapping
    public MobileResponse<List<MobileAttendanceDayDto>> month(
            @RequestParam(required = false) @Pattern(regexp = "\\d{4}-(0[1-9]|1[0-2])") String month) {
        YearMonth ym = month == null ? YearMonth.now() : YearMonth.parse(month);
        return MobileResponse.ok(mobileAttendanceService.getMonth(ym));
    }
}
