package com.ait.mobile.common.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/** Mục danh mục (SY_CODE) rút gọn cho app: mã + tên theo ngôn ngữ hiện tại. */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MobileCodeDto {

    private String codeNo;
    private String codeName;
}
