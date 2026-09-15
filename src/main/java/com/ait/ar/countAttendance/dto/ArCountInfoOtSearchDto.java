package com.ait.ar.countAttendance.dto;

import lombok.Data;

/** Tham số tìm kiếm cho tab "Tăng ca" của arCountInfoList. */
@Data
public class ArCountInfoOtSearchDto {
    private String keyword;
    private String deptNos;
    private String empTypeCode;
    private String shiftNo;
    /** Ngày dùng để xác định năm thống kê (định dạng DD/MM/YYYY) - lấy từ ô "Ngày bắt đầu" trên giao diện. */
    private String startTime;
    /** Năm thống kê (YYYY) - service tính sẵn từ startTime, tránh phải TO_CHAR(TO_DATE(...)) lặp lại
     *  gần 100 lần trong câu SELECT (mỗi tháng x mỗi loại tăng ca) của selectOtSummaryList. */
    private String year;
}
