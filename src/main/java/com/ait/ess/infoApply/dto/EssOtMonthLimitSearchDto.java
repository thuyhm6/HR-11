package com.ait.ess.infoApply.dto;

import lombok.Data;

/** Tham số tìm kiếm cho bảng theo dõi tăng ca tháng (xem EssOtMonthLimitMapper.xml). */
@Data
public class EssOtMonthLimitSearchDto {
    /** Năm thống kê (YYYY) - bắt buộc. */
    private String year;
    private String keyword;
    private String deptNos;
}
