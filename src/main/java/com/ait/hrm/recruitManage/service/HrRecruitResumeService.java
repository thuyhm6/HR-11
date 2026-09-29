package com.ait.hrm.recruitManage.service;

import com.ait.hrm.recruitManage.dto.HrExperienceListDto;
import com.ait.hrm.recruitManage.dto.HrRecruitResumeDto;
import com.ait.sy.sys.dto.ApiResponse;

import java.util.List;

/**
 * Khái quát phát lệnh (viewResumeList) + Tra cứu phát lệnh (viewExperienceList).
 */
public interface HrRecruitResumeService {

    ApiResponse<List<HrRecruitResumeDto>> getResumeList(HrRecruitResumeDto criteria);

    ApiResponse<HrRecruitResumeDto> getResumeDetail(String seq);

    ApiResponse<Void> saveResume(HrRecruitResumeDto dto);

    ApiResponse<Void> deleteResume(String seq);

    ApiResponse<List<HrExperienceListDto>> getExperienceList(HrExperienceListDto criteria);
}
