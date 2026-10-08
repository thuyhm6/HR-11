package com.ait.pa.workManagement.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

/**
 * 1 hạng mục lương chi tiết bên phải (PA_MY_SALARY_PAGE_DATA) - itemType 1/2/3 tương ứng 3 bảng của bản gốc
 * detailYearCountInfoRight.jsp.
 */
@Data
@NoArgsConstructor
public class PaSalaryDetailItemDto {
    private String personId;
    private Integer itemType;
    private String itemNo;
    private String itemName;
    private BigDecimal itemValue;
    private BigDecimal itemYearValue;
}
