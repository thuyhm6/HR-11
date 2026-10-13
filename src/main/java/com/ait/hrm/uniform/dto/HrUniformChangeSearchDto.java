package com.ait.hrm.uniform.dto;

import lombok.Data;

/** Tham số tra cứu danh sách đổi đồng phục theo tháng. */
@Data
public class HrUniformChangeSearchDto {
    private String keyword;
    /** Tháng tra cứu (YYYY-MM). */
    private String month;
    /** Số tháng trước đó cần tổng hợp - service gán = HrUniformServiceImpl.CHANGE_INTERVAL_MONTHS. */
    private Integer intervalMonths;

    private int draw;
    private int start;
    private int length;
}
