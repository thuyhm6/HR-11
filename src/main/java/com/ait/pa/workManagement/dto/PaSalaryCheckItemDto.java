package com.ait.pa.workManagement.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

/**
 * Hạng mục lương:
 * - Danh sách chọn hạng mục (bản gốc itemValueInfo - PA_ITEM_INPUT IS_USE = 4): itemId, itemName, itemType.
 * - Hạng mục lương của 1 NV (bản gốc getPaDetailInfoList - PA_SALARY_DETAIL_PAGE_DATA): thêm itemNo, itemValue, itemFormular.
 */
@Data
@NoArgsConstructor
public class PaSalaryCheckItemDto {
    private String itemId;
    private String itemNo;
    private String itemName;
    private String itemType;
    private BigDecimal itemValue;
    private String itemFormular;
}
