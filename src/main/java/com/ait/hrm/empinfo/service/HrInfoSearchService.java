package com.ait.hrm.empinfo.service;

import com.ait.hrm.empinfo.dto.HrInfoSearchCriteriaDto;
import com.ait.hrm.empinfo.dto.HrInfoSearchResultDto;
import com.ait.sy.sys.dto.ApiResponse;

import java.util.List;

/**
 * Tra cứu thông tin nhân sự: kinh nghiệm làm việc / nghỉ việc / chứng chỉ / chức cấp.
 */
public interface HrInfoSearchService {

    ApiResponse<List<HrInfoSearchResultDto>> experienceSearch(HrInfoSearchCriteriaDto criteria);

    ApiResponse<List<HrInfoSearchResultDto>> retireSearch(HrInfoSearchCriteriaDto criteria);

    ApiResponse<List<HrInfoSearchResultDto>> bidSearch(HrInfoSearchCriteriaDto criteria);

    ApiResponse<List<HrInfoSearchResultDto>> gradeSearch(HrInfoSearchCriteriaDto criteria);
}
