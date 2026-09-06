package com.ait.ess.infoApply.dto;

import lombok.Data;

/**
 * Tổng hợp OT (đã duyệt / xin phép) theo tháng trong năm của từng nhân viên trong bộ phận quản lý.
 * Dữ liệu Đã duyệt / Xin phép lấy từ function GET_AR_OT_TOTAIL với statusCode lần lượt là '200'/'400'.
 */
@Data
public class EssDeptOtApplyInfoDto {

    // Kết quả truy vấn - Thông tin cơ bản (HR_EMPLOYEE, HR_DEPARTMENT)
    private String empId;
    private String localName;
    private String deptName;

    // Kết quả truy vấn - Tổng OT Đã duyệt (GET_AR_OT_TOTAIL... '200') / Xin phép (GET_AR_OT_TOTAIL... '400') theo từng tháng
    private Double m01Approved;
    private Double m01Apply;
    private Double m02Approved;
    private Double m02Apply;
    private Double m03Approved;
    private Double m03Apply;
    private Double m04Approved;
    private Double m04Apply;
    private Double m05Approved;
    private Double m05Apply;
    private Double m06Approved;
    private Double m06Apply;
    private Double m07Approved;
    private Double m07Apply;
    private Double m08Approved;
    private Double m08Apply;
    private Double m09Approved;
    private Double m09Apply;
    private Double m10Approved;
    private Double m10Apply;
    private Double m11Approved;
    private Double m11Apply;
    private Double m12Approved;
    private Double m12Apply;

    // Tham số tìm kiếm
    private String keyword;
    private String deptNos;
    private String year;

    // Phân trang
    private int draw;
    private int start;
    private int length;
}
