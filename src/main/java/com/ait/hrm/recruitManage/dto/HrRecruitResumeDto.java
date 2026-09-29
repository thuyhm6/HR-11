package com.ait.hrm.recruitManage.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Khái quát phát lệnh (bảng HR_RECRUIT_REGISTER_INFO) - dùng cho trang /hrm/recruitManage/viewResumeList.
 * Vừa là tham số tìm kiếm (searchStartDate/searchEndDate/registerType/activity) vừa là dữ liệu lưu/hiển thị.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class HrRecruitResumeDto {

    /** Trạng thái: 0 = Đang xử lý, 1 = Đã hoàn tất (không cho sửa/xóa), 2 = Đã xóa (xóa mềm). */
    public static final String ACTIVITY_IN_PROGRESS = "0";
    public static final String ACTIVITY_COMPLETED = "1";

    private String seq;

    /** Loại phát lệnh - SY_CODE con của 14013956. */
    @NotBlank(message = "REGISTER_TYPE_REQUIRED")
    private String registerType;
    private String registerTypeName;

    /** Ngày hiệu lực (VARCHAR dd/MM/yyyy - giữ nguyên định dạng lưu của hệ thống cũ). */
    @NotBlank(message = "REGISTER_DATE_REQUIRED")
    private String registerDate;

    /** Ngày đăng ký (VARCHAR dd/MM/yyyy - DB tự sinh khi thêm mới). */
    private String registerInfo;

    /** Mã xử lý tự động ('HA' || GET_RESUME_NO) - DB tự sinh khi thêm mới. */
    private String registerCode;

    private String activity;

    @Size(max = 1000, message = "REMARK_TOO_LONG")
    private String remark;

    // ── Tham số tìm kiếm ──
    private String searchStartDate;
    private String searchEndDate;
    private String searchRegisterType;
    private String searchActivity;
}
