package com.ait.hrm.recruitManage.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Nhân viên chờ nhận việc (HR_EMPLOYEE_RECRUIT) - trang /view-recruit-list (bản gốc
 * hrm/recruitManage/viewRecruitList + viewAddRecruitInfo của dự án HTSV). Ngày tháng lưu dạng chuỗi DD/MM/YYYY.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class HrEmployeeRecruitDto {

    // Điều kiện tìm kiếm (bản gốc seach_OBJECT / seach_START_DATE / seach_END_DATE / seach_DATA_SOURCES)
    /** 0 = Quyết định nhận việc (chưa xác nhận), 1 = Đã hoàn thành. */
    private String searchObject;
    private String searchStartDate;
    private String searchEndDate;
    /** 1 = Nhập thủ công, 0 = Tuyển dụng; rỗng = cả hai. */
    private String searchDataSources;

    private String personId;
    private String cpnyId;

    // ── Thông tin cơ bản (tab 0) ──
    private String localName;
    private String empId;
    private String englishName;
    private String isProbation;
    private String joinType;
    private String joinDetailType;
    private String deptNo;
    private String empTypeCode;
    private String dateStarted;
    private String endProbationDate;
    private String timeStarted;
    private String positionConfirmationDate;
    private String mainBusiness;
    private String costCenter;
    private String postFamily;
    private String postGradeNo;
    private String positionNo;
    private String detainLength;
    private String shiftNo;
    private String payStepNo;
    private String personSupplierCompany;

    // ── Thông tin bổ sung (tab 1) ──
    private String idcardNo;
    private String idcardStartDate;
    private String issuingAuthority;
    private String dob;
    private String sexcode;
    private String maritalStatusCode;
    private String nationalityCode;
    private String nationCode;
    private String homePhone;
    private String companyPhone;
    private String existSingle;
    private String singId;
    private String email;
    private String cvUpdateStatus;
    private String religion;
    private String experience;
    private String regPlace;
    private String origin;
    private String height;
    private String weight;
    private String addressType;
    private String effectiveStartDate;
    private String nationality;
    private String addressContent;
    private String hujiaddressType;
    private String hujiyouxiaoStartDate;
    private String hujiguoji;
    private String hujiaddressContent;

    // ── Ảnh (tab 5) ──
    private String photoPath;

    private String dataSources;
    private String activity;
    private String createDate;
    private String updateDate;

    // ── Tên hiển thị ──
    private String deptName;
    private String joinTypeName;
    private String joinDetailName;
    private String empTypeName;
    private String sexName;
    private String nationalityName;
    private String postGradeName;
}
