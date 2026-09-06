package com.ait.ess.tempEmp.service.impl;

import com.ait.ess.tempEmp.dto.YearUseInfoListDto;
import com.ait.ess.tempEmp.mapper.YearUseInfoListMapper;
import com.ait.ess.tempEmp.service.YearUseInfoListService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class YearUseInfoListServiceImpl implements YearUseInfoListService {

    private static final Logger log = LoggerFactory.getLogger(YearUseInfoListServiceImpl.class);

    @Autowired
    private YearUseInfoListMapper mapper;

    @Override
    public List<YearUseInfoListDto> getList(YearUseInfoListDto params) {
        try {
            return mapper.selectList(params);
        } catch (Exception e) {
            log.error("Lỗi khi lấy danh sách thông tin nghỉ phép năm: {}", e.getMessage(), e);
            throw e;
        }
    }
}
