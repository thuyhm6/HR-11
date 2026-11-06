package com.ait.hrm.recruitManage.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/** Quá trình làm việc (HR_WORK_EXPERIENCE_RECRUIT) - START_DATE/END_DATE lưu dạng MM/YYYY như bản gốc. */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class HrWorkExperienceRecruitDto {
    private Long seq;
    private String personId;
    private String cpnyName;
    private String deptName;
    private String startDate;
    private String endDate;
    private String duty;
    private String position;
    private String payroll;
    private String remark;
    private String leftReason;
    private String activity;
    /** Người thay đổi: [EMPID]-LOCAL_NAME IP (bản gốc). */
    private String updatedBy;
    private String updateDate;
}
