package com.ait.hrm.uniform.dto;

import lombok.Data;

/** Danh mục đồng phục (HR_UNIFORM_ITEM) - mỗi item là 1 nhóm cột (Size / Số lượng) trong file Excel. */
@Data
public class HrUniformItemDto {
    private Long itemNo;
    /** Tên đồng phục - phải trùng tiêu đề cột nhóm trong file Excel upload (so khớp không dấu, không phân biệt hoa thường). */
    private String itemName;
    /** Y/N - có cột Size hay không. */
    private String hasSize;
    /** Y/N - có cột Số lượng hay không (N => số lượng mặc định 1 khi có Size). */
    private String hasQuantity;
    private Integer orderNo;
    private String remark;
    private Integer activity;
}
