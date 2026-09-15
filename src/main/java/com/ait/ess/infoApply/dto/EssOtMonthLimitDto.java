package com.ait.ess.infoApply.dto;

import lombok.Data;

/** 1 dòng của bảng theo dõi tăng ca tháng (/ess/infoApply/viewOverTimeLimtShenPiList, route Angular
 *  /ot-month-limit-list) - tổng hợp cả năm và từng tháng cho 1 nhân viên. */
@Data
public class EssOtMonthLimitDto {
    private String empId;
    private String localName;

    private EssOtMonthLimitPeriodDto yearTotal;
    private EssOtMonthLimitPeriodDto january;
    private EssOtMonthLimitPeriodDto february;
    private EssOtMonthLimitPeriodDto march;
    private EssOtMonthLimitPeriodDto april;
    private EssOtMonthLimitPeriodDto may;
    private EssOtMonthLimitPeriodDto june;
    private EssOtMonthLimitPeriodDto july;
    private EssOtMonthLimitPeriodDto august;
    private EssOtMonthLimitPeriodDto september;
    private EssOtMonthLimitPeriodDto october;
    private EssOtMonthLimitPeriodDto november;
    private EssOtMonthLimitPeriodDto december;
}
