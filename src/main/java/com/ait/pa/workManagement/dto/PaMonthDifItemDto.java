package com.ait.pa.workManagement.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

/**
 * Tổng hợp chênh lệch theo hạng mục lương giữa 2 kỳ (bảng tạm PA_MONTH_DIF_ITEM_TEMP):
 * - Xác nhận kết quả tab 2/4 (bản gốc viewResultConfirmSonList3): itemId, itemName, itemType, monthDif, personNum,
 *   monthPro, monthNow.
 * - So sánh lương theo tháng (bản gốc getPaMonthList): thêm các cột số NV / số tiền / bình quân / tăng giảm.
 */
@Data
@NoArgsConstructor
public class PaMonthDifItemDto {
    private String itemId;
    private String itemNo;
    private String itemName;
    private String itemType;
    private String pageType;
    private String monthDif;

    /** Số NV tháng này. */
    private BigDecimal personNum;
    private BigDecimal monthPro;
    private BigDecimal monthNow;

    // ── So sánh lương theo tháng ──────────────────────────────────────────
    private BigDecimal personNumPro;
    private BigDecimal personNumDif;
    private BigDecimal countNum;
    private BigDecimal countNumPro;
    private BigDecimal countNumDif;
    private BigDecimal personNumAvg;
    private BigDecimal personNumAvgPro;
    private BigDecimal personNumAvgDif;
    private BigDecimal countUp;
    private BigDecimal countLow;
    private BigDecimal personUp;
    private BigDecimal personLow;
}
