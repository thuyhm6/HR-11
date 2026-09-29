package com.ait.hrm.recruitManage.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * Tra cứu phát lệnh (HR_EXPERIENCE_INSIDE) - dùng cho trang /hrm/recruitManage/viewExperienceList.
 * Các trường search* là điều kiện tìm kiếm, các trường còn lại là dữ liệu 1 dòng kết quả.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class HrExperienceListDto {

    // ── Điều kiện tìm kiếm ──
    private String keyword;
    private String startDate;
    private String endDate;
    private List<String> transCodes;
    private List<String> transReasons;
    private String deptNo;
    private Boolean includeSubDept;
    private List<String> postFamilies;
    private List<String> empTypeCodes;
    private List<String> empOffices;
    private String startDateJoin;
    private String endDateJoin;

    // ── Dữ liệu kết quả ──
    private String personId;
    private String empId;
    private String localName;
    private String orderDate;
    private String transCodeName;
    private String transResourceName;
    private String deptName;
    private String empTypeName;
    private String postGradeName;
    private String postFamilyName;
    private String mainBusinessName;
    private String positionName;
    private String empOfficeName;
    private String dateStarted;
    private String remark;
}
