package com.ait.edu.trainEducation.service.impl;

import com.ait.edu.trainEducation.dto.EduTrainReportRowDto;
import com.ait.edu.trainEducation.dto.EduTrainReportSearchDto;
import com.ait.edu.trainEducation.dto.EduTrainReportTypeDto;
import com.ait.edu.trainEducation.mapper.EduTrainReportMapper;
import com.ait.edu.trainEducation.service.EduTrainReportService;
import com.ait.exception.BusinessException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Map;

/**
 * Báo cáo đào tạo. Bản gốc có 6 trang điều kiện + 6 câu SQL riêng xuất file .xls (HTML); bản mới gộp thành 1 câu SQL theo
 * chiều thống kê, hiển thị bảng và xuất .xlsx ở frontend. Danh sách loại báo cáo lấy từ REPORT_CENTER như bản gốc.
 */
@Service
public class EduTrainReportServiceImpl implements EduTrainReportService {

    private static final Logger log = LoggerFactory.getLogger(EduTrainReportServiceImpl.class);

    /** Trang JSP gốc (URL_JSP trong REPORT_CENTER) -> chiều thống kê. */
    private static final Map<String, String> URL_TO_KEY = Map.of(
            "courseTrainReport", "course",
            "postGradeTrainReport", "postGrade",
            "deptTrainReport", "dept",
            "yearTrainReport", "year",
            "monthTrainReport", "month",
            "formTrainReport", "form");

    @Autowired
    private EduTrainReportMapper mapper;

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<EduTrainReportTypeDto> getReportTypes() throws BusinessException {
        log.info("getReportTypes");
        try {
            List<EduTrainReportTypeDto> rows = mapper.selectReportTypes();
            rows.forEach(r -> {
                String url = r.getUrlJsp() == null ? "" : r.getUrlJsp().trim();
                r.setReportKey(URL_TO_KEY.get(url.substring(url.lastIndexOf('/') + 1)));
            });
            rows.removeIf(r -> r.getReportKey() == null);
            log.info("getReportTypes - found {} rows", rows.size());
            return rows;
        } catch (Exception e) {
            log.error("getReportTypes failed", e);
            throw new BusinessException("EDU_REPORT_LOAD", "common.loadFail", e);
        }
    }

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<EduTrainReportRowDto> getReport(EduTrainReportSearchDto search) throws BusinessException {
        log.info("getReport - search={}", search);
        if (search.getType() == null || !URL_TO_KEY.containsValue(search.getType())) {
            throw new BusinessException("EDU_REPORT_INVALID", "common.loadFail");
        }
        search.setTrainDiffCode(trimToNull(search.getTrainDiffCode()));
        search.setTrainTypeCode(trimToNull(search.getTrainTypeCode()));
        search.setCourseName(trimToNull(search.getCourseName()));
        search.setPostGradeName(trimToNull(search.getPostGradeName()));
        search.setDeptNo(trimToNull(search.getDeptNo()));
        search.setYear(trimToNull(search.getYear()));
        search.setMonth(trimToNull(search.getMonth()));
        search.setTrainFormCode(trimToNull(search.getTrainFormCode()));
        try {
            List<EduTrainReportRowDto> rows = mapper.selectReport(search);
            log.info("getReport - type={} found {} rows", search.getType(), rows.size());
            return rows;
        } catch (Exception e) {
            log.error("getReport failed - search={}", search, e);
            throw new BusinessException("EDU_REPORT_LOAD", "common.loadFail", e);
        }
    }

    private static String trimToNull(String value) {
        return StringUtils.hasText(value) ? value.trim() : null;
    }
}
