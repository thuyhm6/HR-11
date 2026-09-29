package com.ait.edu.trainEducation.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Dòng đọc/ghi thô của EDU_PLAN_MANAGER - giữ nguyên cách lưu của bản gốc: DES_DEPARTMENT / DES_EMPLOYEE /
 * DES_EMPLOYEE_NAME là chuỗi phân cách dấu phẩy; TEACHER_NAME = mã nhân viên giảng viên (nếu chọn từ danh sách) hoặc
 * tên nhập tự do, TEACHER_NAME_EMPID = tên hiển thị khi đã chọn giảng viên. Service chuyển đổi sang EduPlanManagerDto.
 */
@Data
@NoArgsConstructor
public class EduPlanManagerRowDto {
    private String planNo;
    private String courseNo;
    private String trainDiffCode;
    private String trainDiffName;
    private String trainTypeCode;
    private String trainTypeCodeName;
    private String courseNameCode;
    private String courseNumber;
    private String periodTime;
    private String planStartdate;
    private String planEnddate;
    private String classHour;
    private String classUnit;
    private String trainFormCode;
    private String trainFormCodeName;
    private String isnotTest;
    private String isnotApply;
    private String desDepartment;
    private String desEmployee;
    private String desEmployeeName;
    private String budget;
    private String budgetShow;
    private String departManaCode;
    private String departManaCodeName;
    private String teacherName;
    private String teacherNameEmpid;
    private String trainAddress;
    private String trainPersonCount;
    private String trainPersonRemark;
    private String isnotEvaluate;
    private String isnotReport;
    private String isnotAgreement;
    private Integer syllabusCount;
}
