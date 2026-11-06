package com.ait.mobile.overtime.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;

/** Đơn tăng ca gửi từ app. Loại OT và số giờ do server tự xác định (không nhận từ client). */
@Data
@NoArgsConstructor
public class MobileOtApplyRequest {

    public static final String DATE_PATTERN = "\\d{4}-\\d{2}-\\d{2}";
    public static final String DATE_TIME_PATTERN = "\\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}";

    /** yyyy-MM-dd */
    @NotBlank
    @Pattern(regexp = DATE_PATTERN)
    private String applyOtDate;

    /** yyyy-MM-dd HH:mm */
    @NotBlank
    @Pattern(regexp = DATE_TIME_PATTERN)
    private String otFromTime;

    /** yyyy-MM-dd HH:mm */
    @NotBlank
    @Pattern(regexp = DATE_TIME_PATTERN)
    private String otToTime;

    /** Trừ giờ ăn ca. */
    private boolean deductMeal;

    @Size(max = 1000)
    private String applyOtRemark;
}
