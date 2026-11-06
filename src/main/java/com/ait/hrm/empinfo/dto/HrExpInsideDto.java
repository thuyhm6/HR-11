package com.ait.hrm.empinfo.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

/**
 * Quyết định nhân sự (HR_EXPERIENCE_INSIDE) - trang /view-start-point (bản gốc hrm/empinfo/viewStartPoint
 * + viewSingleStartPoint của dự án HTSV). Cũng dùng làm DTO thông tin nhân viên (header + kết quả tìm kiếm).
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class HrExpInsideDto {

    // Search employee
    private String searchKeyword;

    // PK
    private Long seq;

    // HR_EXPERIENCE_INSIDE fields
    private String personId;
    private String transCode;
    private String startDate;
    private String deptno;
    private String empTypeCode;
    private String empOffice;
    private String postGradeNo;
    private String postFamily;
    private String remark;
    private String activity;
    private String positionNo;
    private String mainBusiness;
    /** Cột TRANS_RESOURCE (bản gốc gửi lên với tên TRANS_REASON - "Lý do quyết định"). */
    private String transResource;
    private String costCenter;
    private String payStepNo;
    private String position;

    // Audit (UPDATED_BY = GET_UPDATED_INFO(UPDATED_BY) || ' ' || UPDATED_IP như bản gốc)
    private String updateDate;
    private String updatedBy;

    // Joined display fields
    private String empId;
    private String localName;
    private String deptName;
    private String transCodeName;
    private String transResourceName;
    private String empTypeName;
    private String empOfficeName;
    private String postFamilyName;
    private String postGradeName;
    private String positionName;
    private String positionNoName;
    private String mainBusinessName;
    private String costCenterName;
    /** Trạng thái quyết định: Có hiệu lực (ACTIVITY=1) / Chưa hiệu lực. */
    private String activityName;
    private String dateLeft;
}
