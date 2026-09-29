package com.ait.hrm.empinfo.controller;

import com.ait.hrm.empinfo.dto.HrInfoSearchCriteriaDto;
import com.ait.hrm.empinfo.dto.HrInfoSearchResultDto;
import com.ait.hrm.empinfo.service.HrInfoSearchService;
import com.ait.sy.sys.dto.ApiResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * API JSON cho 4 trang Angular (thay các trang JSP cùng tên ở Hanwha_HTSV):
 *  /hrm/empinfo/experienceSearch → /experience-search
 *  /hrm/empinfo/retireSearch     → /retire-search
 *  /hrm/empinfo/bidSearch        → /bid-search
 *  /hrm/empinfo/gradeSearch      → /grade-search
 */
@RestController
@RequestMapping("/hrm/empinfo/api/infoSearch")
public class HrInfoSearchController {

    @Autowired
    private HrInfoSearchService service;

    @PostMapping("/experience")
    public ApiResponse<List<HrInfoSearchResultDto>> experienceSearch(@RequestBody HrInfoSearchCriteriaDto criteria) {
        return service.experienceSearch(criteria);
    }

    @PostMapping("/retire")
    public ApiResponse<List<HrInfoSearchResultDto>> retireSearch(@RequestBody HrInfoSearchCriteriaDto criteria) {
        return service.retireSearch(criteria);
    }

    @PostMapping("/bid")
    public ApiResponse<List<HrInfoSearchResultDto>> bidSearch(@RequestBody HrInfoSearchCriteriaDto criteria) {
        return service.bidSearch(criteria);
    }

    @PostMapping("/grade")
    public ApiResponse<List<HrInfoSearchResultDto>> gradeSearch(@RequestBody HrInfoSearchCriteriaDto criteria) {
        return service.gradeSearch(criteria);
    }
}
