package com.ait.ar.countAttendance.dto;

import lombok.Data;

import java.math.BigDecimal;

/**
 * Chi tiết tăng ca của 1 tháng cho 1 nhân viên - dùng lại cho cả 12 tháng trong
 * {@link ArCountInfoOtDto} thay vì khai 12*8 field phẳng, mapping qua resultMap
 * (association) trong ArCountInfoListMapper.xml.
 */
@Data
public class ArCountInfoOtMonthDto {
    /** Tổng tăng ca trong tháng (mã GET_AR_OT_TOTAIL dạng 3x). */
    private BigDecimal total;
    private BigDecimal normalWork;
    private BigDecimal saturday;
    private BigDecimal weeklyHoliday;
    private BigDecimal publicHoliday;
    private BigDecimal mealOtIncen;
    private BigDecimal nightIncen;
    private BigDecimal saturdayIncen;
}
