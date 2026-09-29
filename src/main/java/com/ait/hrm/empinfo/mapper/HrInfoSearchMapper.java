package com.ait.hrm.empinfo.mapper;

import com.ait.hrm.empinfo.dto.HrInfoSearchCriteriaDto;
import com.ait.hrm.empinfo.dto.HrInfoSearchResultDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface HrInfoSearchMapper {

    List<HrInfoSearchResultDto> selectExperienceSearch(HrInfoSearchCriteriaDto criteria);

    List<HrInfoSearchResultDto> selectRetireSearch(HrInfoSearchCriteriaDto criteria);

    List<HrInfoSearchResultDto> selectBidSearch(HrInfoSearchCriteriaDto criteria);

    List<HrInfoSearchResultDto> selectGradeSearch(HrInfoSearchCriteriaDto criteria);
}
