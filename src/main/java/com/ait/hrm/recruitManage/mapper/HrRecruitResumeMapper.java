package com.ait.hrm.recruitManage.mapper;

import com.ait.hrm.recruitManage.dto.HrExperienceListDto;
import com.ait.hrm.recruitManage.dto.HrRecruitResumeDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface HrRecruitResumeMapper {

    // ── HR_RECRUIT_REGISTER_INFO (Khái quát phát lệnh) ──
    List<HrRecruitResumeDto> selectResumeList(HrRecruitResumeDto dto);

    HrRecruitResumeDto selectResumeBySeq(@Param("seq") String seq);

    int insertResume(HrRecruitResumeDto dto);

    int updateResume(HrRecruitResumeDto dto);

    int deleteResume(@Param("seq") String seq);

    // ── HR_EXPERIENCE_INSIDE (Tra cứu phát lệnh) ──
    List<HrExperienceListDto> selectExperienceList(HrExperienceListDto dto);
}
