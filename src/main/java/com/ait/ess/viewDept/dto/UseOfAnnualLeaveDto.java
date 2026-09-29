package com.ait.ess.viewDept.dto;

import lombok.Data;

/**
 * Tình trạng sử dụng phép năm (年假现状 - dành cho nội vụ và trưởng bộ phận) - chuyển đổi từ trang cũ
 * /ess/viewDept/viewUseOfAnnualLeaveList (Hanwha_HTSV, sqlDeptPer.xml#viewUseOfAnnualLeaveList).
 */
@Data
public class UseOfAnnualLeaveDto {

    // Kết quả truy vấn - Thông tin nhân viên
    private String personId;
    private String empId;
    private String localName;
    private String deptNo;
    private String deptName;
    private String dateStarted;

    // Kết quả truy vấn - Thông tin phép năm (AR_VAC_EMP)
    private String vacId;
    private String strtDate;
    private String endDate;
    /** Tổng phép năm = TOT_VAC_CNT + ADD_VAC + LAST_YEAR_VAC */
    private String totalVac;
    /** Tạo phép năm (生成年假) = TOT_VAC_CNT */
    private String totVacCnt;
    /** Đặc biệt (特殊年假) = ADD_VAC */
    private String addVac;
    /** Còn lại năm ngoái (移年年假) = LAST_YEAR_VAC */
    private String lastYearVac;
    /** Đã nghỉ = USE_VAC(CONFIRM) + AFFIRM_USE_VAC + USE_VAC_CNT */
    private String usedVac;
    /** Còn lại = totalVac - usedVac */
    private String remainVac;

    // Tham số tìm kiếm
    private String keyword;
    private String deptNos;
    private String year;
    private String empTypeCode;
    private String empOffice;
}
