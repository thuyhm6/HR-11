package com.ait.ess.viewDept.service.impl;

import com.ait.ess.viewDept.dto.UseOfAnnualLeaveDto;
import com.ait.ess.viewDept.mapper.UseOfAnnualLeaveMapper;
import com.ait.ess.viewDept.service.UseOfAnnualLeaveService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Year;
import java.util.List;

@Service
public class UseOfAnnualLeaveServiceImpl implements UseOfAnnualLeaveService {

    private static final Logger log = LoggerFactory.getLogger(UseOfAnnualLeaveServiceImpl.class);

    @Autowired
    private UseOfAnnualLeaveMapper mapper;

    @Override
    @Transactional(readOnly = true)
    public List<UseOfAnnualLeaveDto> getList(UseOfAnnualLeaveDto params) {
        // Giống trang cũ: không chọn năm thì mặc định năm hiện tại
        if (params.getYear() == null || params.getYear().trim().isEmpty()) {
            params.setYear(String.valueOf(Year.now().getValue()));
        }
        log.info("Lấy danh sách tình trạng sử dụng phép năm: year={}, keyword={}, empTypeCode={}, empOffice={}",
                params.getYear(), params.getKeyword(), params.getEmpTypeCode(), params.getEmpOffice());
        try {
            return mapper.selectList(params);
        } catch (Exception e) {
            log.error("Lỗi khi lấy danh sách tình trạng sử dụng phép năm: {}", e.getMessage(), e);
            throw e;
        }
    }
}
