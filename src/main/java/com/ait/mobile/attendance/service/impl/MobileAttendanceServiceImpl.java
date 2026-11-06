package com.ait.mobile.attendance.service.impl;

import com.ait.ess.infoApplyAttendance.dto.EssAttendancePersonalInfoDto;
import com.ait.ess.infoApplyAttendance.service.EssAttendancePersonalInfoService;
import com.ait.mobile.attendance.dto.MobileAttendanceDayDto;
import com.ait.mobile.attendance.service.MobileAttendanceService;
import java.time.YearMonth;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MobileAttendanceServiceImpl implements MobileAttendanceService {

    private static final Logger log = LoggerFactory.getLogger(MobileAttendanceServiceImpl.class);
    /** selectPersonalAttendanceList nhận startDate/endDate dạng DD/MM/YYYY. */
    private static final DateTimeFormatter DMY = DateTimeFormatter.ofPattern("dd/MM/yyyy");

    @Autowired
    private EssAttendancePersonalInfoService personalInfoService;

    @Override
    public List<MobileAttendanceDayDto> getMonth(YearMonth month) {
        try {
            EssAttendancePersonalInfoDto params = new EssAttendancePersonalInfoDto();
            params.setStartDate(month.atDay(1).format(DMY));
            params.setEndDate(month.atEndOfMonth().format(DMY));
            // Lọc theo #{adminID} trong SQL; đã sắp xếp AR_DATE_STR DESC
            List<EssAttendancePersonalInfoDto> rows = personalInfoService.getPersonalAttendanceList(params);

            Map<String, MobileAttendanceDayDto> byDate = new LinkedHashMap<>();
            for (EssAttendancePersonalInfoDto row : rows) {
                String date = row.getArDateStr() == null ? "" : row.getArDateStr().replace('/', '-');
                MobileAttendanceDayDto day = byDate.computeIfAbsent(date, d -> {
                    MobileAttendanceDayDto dto = new MobileAttendanceDayDto();
                    dto.setDate(d);
                    return dto;
                });
                if (day.getShiftName() == null) {
                    day.setShiftName(row.getShiftName());
                }
                MobileAttendanceDayDto.Item item = new MobileAttendanceDayDto.Item();
                item.setItemNo(row.getItemNo());
                item.setItemName(row.getItemName());
                item.setFromTime(row.getIndoorTime());
                item.setToTime(row.getOutdoorTime());
                item.setQuantity(row.getWorkHour());
                day.getItems().add(item);
            }
            return new ArrayList<>(byDate.values());
        } catch (Exception e) {
            log.error("Lỗi lấy bảng công tháng {}: {}", month, e.getMessage(), e);
            throw e;
        }
    }
}
