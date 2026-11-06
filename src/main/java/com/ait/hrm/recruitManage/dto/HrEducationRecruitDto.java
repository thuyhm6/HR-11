package com.ait.hrm.recruitManage.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/** Quá trình học tập (HR_EDUCATION_RECRUIT) - START_DATE/END_DATE lưu dạng MM/YYYY như bản gốc. */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class HrEducationRecruitDto {
    private Long seq;
    private String personId;
    private String degreeCode;
    private String finalDegreeWhether;
    private String institutionName;
    private String subject;
    private String startDate;
    private String endDate;
    private String subjectSecond;
    private String eduDegNum;
    private String siteCountry;
    private String address;
    private String schoolLength;
    private String remark;
    private String activity;
    /** Người thay đổi: [EMPID]-LOCAL_NAME IP (bản gốc). */
    private String updatedBy;
    private String updateDate;
    // Display
    private String degreeName;
}
