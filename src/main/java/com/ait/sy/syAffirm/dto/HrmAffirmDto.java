package com.ait.sy.syAffirm.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 1 dòng ESS_LEAVE_APPLY_PARAM có TYPE = 'pa' - quy trình phê duyệt khác: với loại đơn + loại nhân viên + vai trò
 * người đăng ký, xác định độ dài tuyến duyệt và khoảng cấp duyệt (LOW_LEVEL..HIGH_LEVEL theo SY_AFFIRM_LEVEL_SETUP).
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class HrmAffirmDto {
    /** Khóa chính - null khi thêm mới. */
    private Long applyParamNo;

    @NotBlank(message = "alert.message.sys.arAffirm.pleaseChooseApplyType")
    private String applyType;
    private String applyName;

    /** Q = tất cả, G = quản lý, O = khác. */
    @NotBlank(message = "vhal.msg.chooseEmpType")
    @Pattern(regexp = "[QGO]", message = "vhal.msg.chooseEmpType")
    private String empType;

    /** Mã vai trò (con của 14014036) hoặc Q = tất cả. */
    @NotBlank(message = "vhal.msg.chooseDuty")
    private String dutyNo;
    private String dutyName;

    @NotNull(message = "vhal.msg.enterAffirmLength")
    @PositiveOrZero(message = "vhal.msg.invalidAffirmLength")
    @Max(value = 99999, message = "vhal.msg.invalidAffirmLength")
    private Integer affirmLevel;

    @NotNull(message = "vhal.msg.chooseLowLevel")
    private Integer lowLevel;
    /** Tên vai trò ứng với LOW_LEVEL (nhiều vai trò cùng cấp thì nối bằng dấu phẩy). */
    private String lowLevelName;

    @NotNull(message = "vhal.msg.chooseHighLevel")
    private Integer highLevel;
    private String highLevelName;
}
