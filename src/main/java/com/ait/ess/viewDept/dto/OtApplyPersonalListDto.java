package com.ait.ess.viewDept.dto;

import lombok.Data;

import java.math.BigDecimal;

/**
 * Tình hình tăng ca nhân viên (个人加班现状 - trưởng bộ phận / phụ trách chấm công) - chuyển đổi từ trang cũ
 * /ess/viewDept/viewOtApplyPersonalList (Hanwha_HTSV, sqlDeptPer.xml#viewOtApplyPersonalList).
 */
@Data
public class OtApplyPersonalListDto {

    // Kết quả truy vấn - Thông tin nhân viên
    private String personId;
    private String empId;
    private String localName;
    private String deptNo;
    private String deptName;
    private String postGradeNo;
    private String postName;
    private String shiftName;

    // Kết quả truy vấn - Tổng hợp tăng ca (GET_AR_OT_TOTAIL_INTERVAL)
    /** Tổng giờ tăng ca (loại '200') */
    private BigDecimal otTotal;
    /** Tăng ca ngày thường (loại '141444') */
    private BigDecimal weekdayOtTotal;
    /** Tăng ca cuối tuần (loại '141445') */
    private BigDecimal weekendOtTotal;
    /** Tăng ca ngày lễ (loại '141446') */
    private BigDecimal holidayOtTotal;
    /** Hỗ trợ ăn ca (loại '315') */
    private BigDecimal mealOtIncen;
    /** Hỗ trợ làm đêm (loại '316') */
    private BigDecimal nightIncen;
    /** Hỗ trợ làm thứ 7 (loại '317') */
    private BigDecimal saturdayIncen;

    // Tham số tìm kiếm
    private String keyword;
    /** Danh sách DEPTNO phân cách dấu phẩy (frontend đã mở rộng xuống phòng ban con) */
    private String deptNos;
    private String empTypeCode;
    /** Tổ ca (HR_EMPLOYEE.SHIFT_NO, danh mục 400223) */
    private String shiftNo;
    /** Định dạng DD/MM/YYYY - giống JSP cũ */
    private String startDate;
    /** Định dạng DD/MM/YYYY - giống JSP cũ */
    private String endDate;
}
