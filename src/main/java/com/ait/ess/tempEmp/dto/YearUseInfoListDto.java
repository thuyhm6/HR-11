package com.ait.ess.tempEmp.dto;

import lombok.Data;

/**
 * Thông tin nghỉ phép năm của nhân viên (danh sách nhiều nhân viên theo năm) - dùng cho trang HRM
 * /view-year-use-info-list. Công thức tính các cột phép giống hệt YearUseInfoMapper.selectVacationRowsByYear
 * (trang ESS tự xem phép của chính mình) nhưng mở rộng ra nhiều nhân viên + thêm bộ lọc.
 */
@Data
public class YearUseInfoListDto {

    // Kết quả truy vấn - Thông tin nhân viên
    private String empId;
    private String localName;
    private String deptNo;
    private String deptName;
    private String dateStarted;

    // Kết quả truy vấn - Thông tin phép năm (từ AR_VAC_EMP, xem YearUseInfoMapper)
    private String year;
    private String strtDate;
    private String endDate;
    private String totalVac;
    private String addVac;
    private String specialVac;
    private String lastYearVac;
    private String usedVac;
    private String remainVac;

    // Tham số tìm kiếm
    private String keyword;
    private String quickFilter;
    private String deptNos;
    private String empTypeCode;
    private String empOffice;
}
