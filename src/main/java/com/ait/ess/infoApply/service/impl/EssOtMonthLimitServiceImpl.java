package com.ait.ess.infoApply.service.impl;

import com.ait.ess.infoApply.dto.EssOtMonthLimitDto;
import com.ait.ess.infoApply.dto.EssOtMonthLimitSearchDto;
import com.ait.ess.infoApply.mapper.EssOtMonthLimitMapper;
import com.ait.ess.infoApply.service.EssOtMonthLimitService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EssOtMonthLimitServiceImpl implements EssOtMonthLimitService {

    private static final Logger log = LoggerFactory.getLogger(EssOtMonthLimitServiceImpl.class);

    @Autowired
    private EssOtMonthLimitMapper mapper;

    @Override
    public List<EssOtMonthLimitDto> getOtMonthLimitList(EssOtMonthLimitSearchDto params) {
        log.info("Tra cứu theo dõi tăng ca tháng: year={}, keyword={}, deptNos={}",
                params.getYear(), params.getKeyword(), params.getDeptNos());
        try {
            return mapper.selectOtMonthLimitList(params);
        } catch (Exception e) {
            log.error("Lỗi khi tra cứu theo dõi tăng ca tháng (year={}): {}", params.getYear(), e.getMessage(), e);
            throw e;
        }
    }
}
