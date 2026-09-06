package com.ait.ess.infoApply.dto;

import lombok.Data;

/**
 * Báo cáo tăng ca theo tháng, dữ liệu lấy từ view V_HR_OT_REPORT kết hợp HR_EMPLOYEE.
 */
@Data
public class EssOtReportDto {

    // Kết quả truy vấn - Thông tin cơ bản (HR_EMPLOYEE)
    private String empId;
    private String localName;
    private String deptName;

    // Kết quả truy vấn - Tổng tăng ca
    private Double totalOtMonth;
    private Double preMonthlyTotalQty;
    private Double totalOtYear;

    // Kết quả truy vấn - Tăng ca theo tháng
    private Double otRegular150Month;
    private Double otRegular200Month;
    private Double otRegular210Month;
    private Double otSaturday200Month;
    private Double otSaturday270Month;
    private Double otWeekend200Month;
    private Double otWeekend270Month;
    private Double otHoliday300Month;
    private Double otHoliday390Month;

    // Kết quả truy vấn - Tăng ca vượt / Chính thức
    private Double otRegular150ExcessOfficial;
    private Double otRegular200ExcessOfficial;
    private Double otRegular210ExcessOfficial;
    private Double otSaturday200ExcessOfficial;
    private Double otSaturday270ExcessOfficial;
    private Double otWeekend200ExcessOfficial;
    private Double otWeekend270ExcessOfficial;
    private Double otHoliday300ExcessOfficial;
    private Double otHoliday390ExcessOfficial;

    // Kết quả truy vấn - Tăng ca vượt / Thử việc
    private Double otRegular150ExcessProbation;
    private Double otRegular200ExcessProbation;
    private Double otRegular210ExcessProbation;
    private Double otSaturday200ExcessProbation;
    private Double otSaturday270ExcessProbation;
    private Double otWeekend200ExcessProbation;
    private Double otWeekend270ExcessProbation;
    private Double otHoliday300ExcessProbation;
    private Double otHoliday390ExcessProbation;

    // Tham số tìm kiếm
    private String keyword;
    private String deptNos;
    private String month;
    private String year;

    // Phân trang
    private int draw;
    private int start;
    private int length;
}
