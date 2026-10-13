package com.ait.hrm.uniform.dto;

import lombok.Data;

/** Size / số lượng 1 loại đồng phục trong 1 lần đổi (HR_UNIFORM_CHANGE_DETAIL). */
@Data
public class HrUniformChangeDetailDto {
    private Long changeNo;
    private Long itemNo;
    private String itemSize;
    private Integer quantity;
}
