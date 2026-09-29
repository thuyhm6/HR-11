package com.ait.sy.syAffirm.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/** Loại phê duyệt - mỗi loại là 1 cột động trên màn hình Phê duyệt đặc biệt. */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AffirmSpecialTypeDto {
    private String codeNo;
    private String content;
}
