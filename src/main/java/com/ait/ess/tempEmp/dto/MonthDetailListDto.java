package com.ait.ess.tempEmp.dto;

import lombok.Data;

@Data
public class MonthDetailListDto {

    // Kết quả truy vấn - Thông tin cơ bản (HR_EMPLOYEE, HR_PERSONAL_INFO, HR_DEPARTMENT)
    private String empId;
    private String localName;
    private String deptName;
    private String dob;
    private String dutyName;
    private String dateStarted;
    private String endProbationDate;

    // Kết quả truy vấn - Dữ liệu chấm công (chờ bổ sung câu lệnh/nguồn dữ liệu sau)
    private Integer hcDayOt;
    private Integer hcNightOt;
    private Integer hcNightOt210;
    private Integer restDayOt;
    private Integer restNightOt;
    private Integer holDayOt;
    private Integer holNightOt;
    private Integer adminShiftDays;
    private Integer nightShiftDays;
    private Integer standardWorkDays;

    // Tham số tìm kiếm
    private String keyword;
    private String quickFilter;
    private String deptNos;
    private String empTypeCode;
    private String nationalityCode;
    private String empOffice;
    private String month;
    private String year;
    private String reportType;
    private String reportYear;
    /** Kỳ dữ liệu: rỗng = 25 tháng trước -> 24 tháng này (mặc định), 25_31 = 25 -> cuối tháng này, 01_31 = 01 -> cuối tháng này. */
    private String periodType;

    // Kỳ dữ liệu đã tính từ month/year + periodType (MonthDetailListServiceImpl.applyPeriod tự set, ghi đè giá trị client gửi lên)
    /** Ngày bắt đầu kỳ (YYYY/MM/DD). */
    private String arPeriodFrom;
    /** Ngày kết thúc kỳ (YYYY/MM/DD). */
    private String arPeriodTo;
    /** YYYYMM của các cột ngày 25..31. */
    private String arHiYm;
    /** YYYYMM của các cột ngày 1..24. */
    private String arLoYm;

    // Phân trang
    private int draw;
    private int start;
    private int length;
}
