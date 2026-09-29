package com.ait.sy.syAffirm.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;

/** Xóa thiết lập người duyệt của 1 ô (đối tượng x loại phê duyệt). */
@Data
@NoArgsConstructor
public class AffirmSpecialDeleteDto {
    @NotBlank(message = "vasl.msg.selectCell")
    private String affirmObject;
    @NotBlank(message = "vasl.msg.selectCell")
    private String affirmTypeNo;
}
