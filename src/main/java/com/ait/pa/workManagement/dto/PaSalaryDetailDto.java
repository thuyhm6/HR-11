package com.ait.pa.workManagement.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

/**
 * 1 dòng danh sách bên trái của trang Lương tháng chi tiết / Lương năm chi tiết (PA_SUMMARY_HTSV).
 * Bản gốc: pa/workManagement/detailmonthCountInfoLeft.jsp, detailYearCountInfoLeft.jsp.
 */
@Data
@NoArgsConstructor
public class PaSalaryDetailDto {
    private String payScheduleNo;
    private String personId;
    private String empId;
    private String localName;
    private String deptNo;
    private String deptName;
    private String postFamilyName;
    private String postGradeName;
    private String positionName;
    /** Ngày phát lương DD-MM-YYYY - gửi lại cho procedure PA_FOR_MY_SALARY_DETAIL_PAGE_P (chỉ có ở lương năm). */
    private String payDate;
    /** Ngày phát lương DD/MM/YYYY - để hiển thị. */
    private String payDateFormat;
    private BigDecimal incomeBeforeTax;
    private BigDecimal withholdTotal;
    private BigDecimal realWages;
}
