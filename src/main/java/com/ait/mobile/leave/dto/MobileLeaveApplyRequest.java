package com.ait.mobile.leave.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;

/** Đơn xin nghỉ gửi từ app. Thời lượng KHÔNG nhận từ client - server tự tính theo ca làm việc. */
@Data
@NoArgsConstructor
public class MobileLeaveApplyRequest {

    public static final String DATE_TIME_PATTERN = "\\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}";

    @NotBlank
    private String leaveTypeCode;

    /** yyyy-MM-dd HH:mm */
    @NotBlank
    @Pattern(regexp = DATE_TIME_PATTERN)
    private String leaveFromTime;

    /** yyyy-MM-dd HH:mm */
    @NotBlank
    @Pattern(regexp = DATE_TIME_PATTERN)
    private String leaveToTime;

    @Size(max = 1000)
    private String leaveReason;
}
