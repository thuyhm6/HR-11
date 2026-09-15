package com.ait.ar.countAttendance.service.impl;

import com.ait.ar.countAttendance.dto.ArCountInfoOtDto;
import com.ait.ar.countAttendance.dto.ArCountInfoOtSearchDto;
import com.ait.ar.countAttendance.mapper.ArCountInfoListMapper;
import com.ait.ar.countAttendance.service.ArCountInfoListService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class ArCountInfoListServiceImpl implements ArCountInfoListService {

    private static final Logger log = LoggerFactory.getLogger(ArCountInfoListServiceImpl.class);
    private static final DateTimeFormatter START_TIME_FORMAT = DateTimeFormatter.ofPattern("dd/MM/yyyy");

    @Autowired
    private ArCountInfoListMapper mapper;

    @Override
    public List<ArCountInfoOtDto> getOtSummaryList(ArCountInfoOtSearchDto params) {
        try {
            // Tính sẵn năm thống kê từ startTime (DD/MM/YYYY) để mapper.xml không phải
            // TO_CHAR(TO_DATE(#{startTime},'DD/MM/YYYY'),'YYYY') lặp lại ở gần 100 cột GET_AR_OT_TOTAIL.
            LocalDate startDate = LocalDate.parse(params.getStartTime(), START_TIME_FORMAT);
            params.setYear(String.valueOf(startDate.getYear()));
            return mapper.selectOtSummaryList(params);
        } catch (Exception e) {
            log.error("Lỗi khi lấy tổng hợp tình hình tăng ca (startTime={}): {}", params.getStartTime(), e.getMessage(), e);
            throw e;
        }
    }
}
