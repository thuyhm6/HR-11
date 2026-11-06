package com.ait.hrm.recruitManage.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/** Thông tin gia đình (HR_FAMILY_RECRUIT) - FAM_BORNDATE lưu dạng DD/MM/YYYY như bản gốc. */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class HrFamilyRecruitDto {
    private Long seq;
    private String personId;
    private String famName;
    private String famTypeCode;
    private String gender;
    private String famBorndate;
    private String emergencyContactYn;
    private String famAddress;
    private String famFamilyPhone;
    private String famEmail;
    private String famPhone;
    private String workPhone;
    private String occupation;
    private String workUnit;
    private String remark;
    private String activity;
    /** Người thay đổi: [EMPID]-LOCAL_NAME IP (bản gốc). */
    private String updatedBy;
    private String updateDate;
    // Display
    private String famTypeName;
    private String genderName;
}
