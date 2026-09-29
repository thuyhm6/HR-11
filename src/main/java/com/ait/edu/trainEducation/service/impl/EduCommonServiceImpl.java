package com.ait.edu.trainEducation.service.impl;

import com.ait.edu.trainEducation.dto.EduEmployeeDto;
import com.ait.edu.trainEducation.mapper.EduCommonMapper;
import com.ait.edu.trainEducation.service.EduCommonService;
import com.ait.exception.BusinessException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.List;

/**
 * Tìm nhân viên cho module Đào tạo. Không dùng lại /hrm/empinfo/api/employee/search vì API đó chỉ trả nhân viên thuộc phòng
 * ban mà người đăng nhập làm quản lý/supervisor, còn bản gốc (queryTeacher/queryPeixun/desEmployee) cho chọn toàn công ty.
 */
@Service
public class EduCommonServiceImpl implements EduCommonService {
    private static final Logger log = LoggerFactory.getLogger(EduCommonServiceImpl.class);

    /** Giới hạn số dòng trả về để tránh tải toàn bộ nhân viên khi không nhập điều kiện. */
    private static final int MAX_ROWS = 500;

    @Autowired
    private EduCommonMapper mapper;

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<EduEmployeeDto> searchEmployees(String keyword, List<String> deptNos) throws BusinessException {
        log.info("searchEmployees - keyword={}, deptNos={}", keyword, deptNos);
        try {
            String kw = StringUtils.hasText(keyword) ? keyword.trim() : null;
            List<EduEmployeeDto> rows = mapper.searchEmployees(kw, deptNos, MAX_ROWS);
            log.info("searchEmployees - found {} rows", rows.size());
            return rows;
        } catch (Exception e) {
            log.error("searchEmployees failed - keyword={}", keyword, e);
            throw new BusinessException("EDU_EMPLOYEE_SEARCH", "common.loadFail", e);
        }
    }
}
