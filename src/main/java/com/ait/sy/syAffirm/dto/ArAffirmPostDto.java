package com.ait.sy.syAffirm.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/** 1 dòng SY_AFFIRM_LEVEL_SETUP: vai trò (DUTY - mã con của 14014036) và cấp duyệt tương ứng. */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ArAffirmPostDto {
    @NotBlank(message = "vaap.msg.chooseDuty")
    private String duty;
    private String dutyName;
    @NotNull(message = "vaap.msg.enterLevel")
    @PositiveOrZero(message = "vaap.msg.invalidLevel")
    @Max(value = 999, message = "vaap.msg.invalidLevel")
    private Integer affirmLevel;
    /** Tên người cập nhật cuối (HR_EMPLOYEE.LOCAL_NAME theo UPDATED_BY). */
    private String updatedByName;
    /** Ngày cập nhật cuối - định dạng DD/MM/YYYY. */
    private String updateDate;
}
