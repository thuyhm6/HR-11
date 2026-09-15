package com.ait.ar.countAttendance.dto;

import lombok.Data;

import java.math.BigDecimal;

/** Tình hình tăng ca năm của 1 nhân viên - dữ liệu tab "Tăng ca" của arCountInfoList. */
@Data
public class ArCountInfoOtDto {
    private String empId;
    private String localName;
    private String personId;
    private String deptName;
    private String teamName;
    private String postGradeName;
    private String empTypeName;
    private String shiftName;
    private String year;
    /** Tổng tăng ca cả năm (mã GET_AR_OT_TOTAIL '201'). */
    private BigDecimal otTotal;

    private ArCountInfoOtMonthDto january;
    private ArCountInfoOtMonthDto february;
    private ArCountInfoOtMonthDto march;
    private ArCountInfoOtMonthDto april;
    private ArCountInfoOtMonthDto may;
    private ArCountInfoOtMonthDto june;
    private ArCountInfoOtMonthDto july;
    private ArCountInfoOtMonthDto august;
    private ArCountInfoOtMonthDto september;
    private ArCountInfoOtMonthDto october;
    private ArCountInfoOtMonthDto november;
    private ArCountInfoOtMonthDto december;
}
