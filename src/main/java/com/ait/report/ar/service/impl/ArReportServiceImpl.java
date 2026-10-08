package com.ait.report.ar.service.impl;

import com.ait.exception.BusinessException;
import com.ait.report.ar.dto.ArReportItemDto;
import com.ait.report.ar.mapper.ArReportMapper;
import com.ait.report.ar.service.ArReportService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Map;

/**
 * Thay cho ArReportCtroller.viewArReportsList + ArReportSerImpl của dự án Hanwha_HTSV.
 */
@Service
public class ArReportServiceImpl implements ArReportService {

    private static final Logger log = LoggerFactory.getLogger(ArReportServiceImpl.class);

    /** Mặc định = menu Bảng lương (menuNo=14013782), giống link "Bảng lương" ở trang quy trình lương. */
    public static final String DEFAULT_MENU_NO = "14013782";

    /** menuNo -> mã cha (SY_CODE) của các loại báo cáo - giữ nguyên bảng if/else của bản gốc. */
    private static final Map<String, String> MENU_TO_PARENT_CODE = Map.of(
            "14013782", "22116",     // Báo cáo lương
            "14013665", "14015311",  // Báo cáo nhân sự
            "14013758", "22114",     // Báo cáo chấm công
            "14014477", "14015405"); // Báo cáo đào tạo

    @Autowired
    private ArReportMapper mapper;

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<ArReportItemDto> getReportList(String menuNo) throws BusinessException {
        String key = StringUtils.hasText(menuNo) ? menuNo.trim() : DEFAULT_MENU_NO;
        String parentCodeNo = MENU_TO_PARENT_CODE.get(key);
        log.info("getReportList - menuNo={}, parentCodeNo={}", key, parentCodeNo);
        if (parentCodeNo == null) {
            log.warn("getReportList - menuNo không được hỗ trợ: {}", key);
            throw new BusinessException("AR_REPORT_MENU_INVALID", "common.loadFail");
        }
        try {
            List<ArReportItemDto> rows = mapper.selectReportList(parentCodeNo);
            log.info("getReportList - found {} rows", rows.size());
            return rows;
        } catch (Exception e) {
            log.error("getReportList failed - menuNo={}", key, e);
            throw new BusinessException("AR_REPORT_LOAD", "common.loadFail", e);
        }
    }
}
