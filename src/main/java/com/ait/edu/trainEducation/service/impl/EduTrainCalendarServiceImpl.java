package com.ait.edu.trainEducation.service.impl;

import com.ait.edu.trainEducation.dto.EduCalendarItemDto;
import com.ait.edu.trainEducation.mapper.EduTrainCalendarMapper;
import com.ait.edu.trainEducation.service.EduTrainCalendarService;
import com.ait.exception.BusinessException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.YearMonth;
import java.util.List;

/**
 * Lịch đào tạo. Bản gốc dựng sẵn HTML lưới tháng ở server (join AR_CALENDER để có đủ ngày trong tháng); bản mới chỉ trả
 * danh sách buổi học, lưới tháng do frontend dựng.
 */
@Service
public class EduTrainCalendarServiceImpl implements EduTrainCalendarService {

    private static final Logger log = LoggerFactory.getLogger(EduTrainCalendarServiceImpl.class);

    @Autowired
    private EduTrainCalendarMapper mapper;

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<EduCalendarItemDto> getMonth(Integer year, Integer month) throws BusinessException {
        log.info("getMonth - year={}, month={}", year, month);
        YearMonth ym;
        try {
            ym = (year == null || month == null) ? YearMonth.now() : YearMonth.of(year, month);
        } catch (Exception e) {
            log.warn("getMonth - invalid year/month: {}/{}", year, month);
            throw new BusinessException("EDU_CALENDAR_INVALID", "common.loadFail", e);
        }
        try {
            List<EduCalendarItemDto> rows = mapper.selectMonth(String.format("%04d%02d", ym.getYear(), ym.getMonthValue()));
            log.info("getMonth - {} found {} rows", ym, rows.size());
            return rows;
        } catch (Exception e) {
            log.error("getMonth failed - {}", ym, e);
            throw new BusinessException("EDU_CALENDAR_LOAD", "common.loadFail", e);
        }
    }
}
