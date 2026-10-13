package com.ait.ar.countAttendance.service.impl;

import com.ait.ar.countAttendance.dto.EmpWorkingTimefoDayDto;
import com.ait.ar.countAttendance.dto.EmpWorkingTimefoDto;
import com.ait.ar.countAttendance.dto.EmpWorkingTimefoSearchDto;
import com.ait.ar.countAttendance.mapper.EmpWorkingTimefoListMapper;
import com.ait.ar.countAttendance.service.EmpWorkingTimefoListService;
import com.ait.sy.sys.dto.DataTablesResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Collections;
import java.util.List;

@Service
public class EmpWorkingTimefoListServiceImpl implements EmpWorkingTimefoListService {

    private static final Logger log = LoggerFactory.getLogger(EmpWorkingTimefoListServiceImpl.class);
    private static final DateTimeFormatter YMD = DateTimeFormatter.ofPattern("yyyy-MM-dd");

    /** Yêu cầu nghiệp vụ: chỉ lấy nhân viên có dữ liệu OUT liên tiếp từ 13 ngày trở lên. */
    public static final int MIN_CONSECUTIVE_DAYS = 13;

    @Autowired
    private EmpWorkingTimefoListMapper mapper;

    @Override
    public DataTablesResponse<EmpWorkingTimefoDto> getPageList(EmpWorkingTimefoSearchDto params) {
        try {
            applyDefaults(params);
            int total = mapper.countStreakList(params);
            List<EmpWorkingTimefoDto> data = total > 0
                    ? mapper.selectStreakListPage(params)
                    : Collections.emptyList();
            return new DataTablesResponse<>(params.getDraw(), total, total, data);
        } catch (Exception e) {
            log.error("Lỗi khi tra cứu tình trạng quẹt thẻ OUT liên tiếp (fromDate={}, toDate={}, minDays={}): {}",
                    params.getFromDate(), params.getToDate(), params.getMinDays(), e.getMessage(), e);
            return new DataTablesResponse<>(params.getDraw(), e.getMessage());
        }
    }

    @Override
    public List<EmpWorkingTimefoDayDto> getStreakDayList(String personId, String streakFrom, String streakTo) {
        try {
            return mapper.selectStreakDayList(personId, streakFrom, streakTo);
        } catch (Exception e) {
            log.error("Lỗi khi lấy chi tiết quẹt thẻ (personId={}, {} - {}): {}",
                    personId, streakFrom, streakTo, e.getMessage(), e);
            throw e;
        }
    }

    /** Mặc định quét 2 tháng gần nhất (đủ rộng để bắt chuỗi 13+ ngày vắt qua đầu tháng) và ép minDays >= 13. */
    private void applyDefaults(EmpWorkingTimefoSearchDto params) {
        LocalDate today = LocalDate.now();
        if (params.getToDate() == null || params.getToDate().isBlank()) {
            params.setToDate(today.format(YMD));
        }
        if (params.getFromDate() == null || params.getFromDate().isBlank()) {
            params.setFromDate(today.minusMonths(2).format(YMD));
        }
        if (params.getMinDays() == null || params.getMinDays() < MIN_CONSECUTIVE_DAYS) {
            params.setMinDays(MIN_CONSECUTIVE_DAYS);
        }
        if (params.getLength() <= 0) {
            params.setLength(25);
        }
    }
}
