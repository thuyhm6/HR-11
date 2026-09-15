package com.ait.ess.infoApply.dto;

import lombok.Data;

import java.math.BigDecimal;

/** 1 kỳ (cả năm hoặc 1 tháng) trong bảng theo dõi tăng ca tháng (viewOverTimeLimtShenPiList) -
 *  5 giá trị lấy từ GET_AR_OT_TOTAIL với mã loại khác nhau (xem EssOtMonthLimitMapper.xml). */
@Data
public class EssOtMonthLimitPeriodDto {
    /** Tổng tăng ca (mã '5001' cả năm / '500' theo tháng). */
    private BigDecimal total;
    /** Tăng ca đã duyệt (mã '6001'/'600'). */
    private BigDecimal approval;
    /** Phụ cấp thứ 7 đã duyệt (mã '9001'/'900'). */
    private BigDecimal satApproval;
    /** Tăng ca đăng ký (mã '8001'/'800'). */
    private BigDecimal request;
    /** Phụ cấp thứ 7 đăng ký (mã '7001'/'700'). */
    private BigDecimal satRequest;
}
