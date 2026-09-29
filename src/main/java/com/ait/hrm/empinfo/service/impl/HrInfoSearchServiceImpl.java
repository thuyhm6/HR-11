package com.ait.hrm.empinfo.service.impl;

import com.ait.hrm.empinfo.dto.HrInfoSearchCriteriaDto;
import com.ait.hrm.empinfo.dto.HrInfoSearchResultDto;
import com.ait.hrm.empinfo.mapper.HrInfoSearchMapper;
import com.ait.hrm.empinfo.service.HrInfoSearchService;
import com.ait.sy.sys.dto.ApiResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.function.Function;

/**
 * Chuyển từ EmpInfoSerImpl.experienceSearch/retireSearch/bidSearch/gradeSearch (Hanwha_HTSV).
 * Bỏ phần ghép SQL động lưu vào SQL master (tiquziliao_new) - trang Angular xuất Excel .xlsx trực tiếp
 * ở client từ dữ liệu đang hiển thị.
 */
@Service
public class HrInfoSearchServiceImpl implements HrInfoSearchService {

    private static final Logger log = LoggerFactory.getLogger(HrInfoSearchServiceImpl.class);

    @Autowired
    private HrInfoSearchMapper mapper;

    @Override
    @Transactional(readOnly = true)
    public ApiResponse<List<HrInfoSearchResultDto>> experienceSearch(HrInfoSearchCriteriaDto criteria) {
        return runSearch("experienceSearch", criteria, mapper::selectExperienceSearch);
    }

    @Override
    @Transactional(readOnly = true)
    public ApiResponse<List<HrInfoSearchResultDto>> retireSearch(HrInfoSearchCriteriaDto criteria) {
        return runSearch("retireSearch", criteria, mapper::selectRetireSearch);
    }

    @Override
    @Transactional(readOnly = true)
    public ApiResponse<List<HrInfoSearchResultDto>> bidSearch(HrInfoSearchCriteriaDto criteria) {
        return runSearch("bidSearch", criteria, mapper::selectBidSearch);
    }

    @Override
    @Transactional(readOnly = true)
    public ApiResponse<List<HrInfoSearchResultDto>> gradeSearch(HrInfoSearchCriteriaDto criteria) {
        return runSearch("gradeSearch", criteria, mapper::selectGradeSearch);
    }

    /** Khung chung: log điều kiện, gọi mapper, bắt lỗi và trả về ApiResponse. */
    private ApiResponse<List<HrInfoSearchResultDto>> runSearch(String name, HrInfoSearchCriteriaDto criteria,
            Function<HrInfoSearchCriteriaDto, List<HrInfoSearchResultDto>> query) {
        log.info("{} - criteria={}", name, criteria);
        try {
            List<HrInfoSearchResultDto> list = query.apply(criteria);
            log.info("{} - {} dòng", name, list.size());
            return ApiResponse.success(list);
        } catch (Exception e) {
            log.error("Lỗi {} - criteria={}", name, criteria, e);
            return ApiResponse.error("SYSTEM_ERROR", e.getMessage());
        }
    }
}
