package com.ait.sy.syAffirm.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * 1 dòng ESS_LEAVE_APPLY_PARAM có TYPE = 'ar' - quy trình phê duyệt chấm công. Giống HrmAffirmDto (TYPE = 'pa') và có
 * thêm khoảng độ dài đơn (REFERENCN_FROM_OFFSET &lt; độ dài &lt;= REFERENCN_TO_OFFSET) để chọn tuyến duyệt theo độ dài.
 */
@Data
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
@ToString(callSuper = true)
public class ArAffirmDto extends HrmAffirmDto {
    @NotNull(message = "vaal.msg.enterStartLength")
    @PositiveOrZero(message = "vaal.msg.invalidLength")
    @Max(value = 99999, message = "vaal.msg.invalidLength")
    private Integer fromOffset;

    @NotNull(message = "vaal.msg.enterEndLength")
    @PositiveOrZero(message = "vaal.msg.invalidLength")
    @Max(value = 99999, message = "vaal.msg.invalidLength")
    private Integer toOffset;
}
