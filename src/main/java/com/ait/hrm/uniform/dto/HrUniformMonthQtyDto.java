package com.ait.hrm.uniform.dto;

import lombok.Data;

/** Tổng số lượng đồng phục 1 nhân viên đã đổi trong 1 tháng (dùng cho các cột 6 tháng trước). */
@Data
public class HrUniformMonthQtyDto {
    private String personId;
    /** YYYY-MM */
    private String changeMonth;
    private Integer totalQty;
}
