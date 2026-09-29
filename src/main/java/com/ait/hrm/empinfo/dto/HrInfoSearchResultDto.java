package com.ait.hrm.empinfo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 1 dòng kết quả của 4 trang tra cứu thông tin nhân sự (experience/retire/bid/grade).
 * Các trường chung ở đầu, các trường riêng từng trang được nhóm theo comment.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class HrInfoSearchResultDto {

    // ── Chung ──
    private String personId;
    private String empId;
    private String localName;
    private String deptName;
    private String postGradeName;
    private String dateStarted;

    // ── experienceSearch (HR_WORK_EXPERIENCE) ──
    private String expStartDate;
    private String expEndDate;
    private String companyName;
    private String position;
    private String payYear;

    // ── retireSearch ──
    private String dateLeft;
    private String cellphone;
    private String mainBusinessName;
    private String leaveReasonName;

    // ── bidSearch (HR_QUALIFICATION) ──
    private String qualName;
    private String dateObtained;
    private String validityDate;
    private String qualLevel;
    private String qualInstitute;

    // ── gradeSearch ──
    private String positionName;
    private String promotionDay;
}
