package com.ait.pa.workManagement.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

/** Xác nhận kết quả - tab Thay đổi chi tiết (bản gốc viewResultConfirmSonList0): tổng hợp tháng trước / tháng này / chênh lệch. */
@Data
@NoArgsConstructor
public class PaResultConfirmSummaryDto {
    private String payDatePro;
    private String payDateCur;

    private BigDecimal personNumPro;
    private BigDecimal salaryTotalPro;
    private BigDecimal withholdTotalPro;
    private BigDecimal netPayPro;

    private BigDecimal personNumCur;
    private BigDecimal salaryTotalCur;
    private BigDecimal withholdTotalCur;
    private BigDecimal netPayCur;

    private BigDecimal personNumDif;
    private BigDecimal salaryTotalDif;
    private BigDecimal withholdTotalDif;
    private BigDecimal netPayDif;
}
