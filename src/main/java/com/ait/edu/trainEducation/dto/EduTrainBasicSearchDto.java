package com.ait.edu.trainEducation.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Điều kiện tìm thông tin cơ bản đào tạo - dùng chung cho các trang Thông tin cơ bản, Đánh giá học viên (evaluateType 1),
 * Đánh giá giảng viên (2), Kết quả đào tạo (3). Ngày DD/MM/YYYY.
 */
@Data
@NoArgsConstructor
public class EduTrainBasicSearchDto {
    public static final String SCOPE_EVA_TEACHER = "EVA_TEACHER";
    public static final String SCOPE_STUDENT = "STUDENT";

    private String courseName;
    private String startDate;
    private String endDate;
    /** Loại đánh giá kế hoạch yêu cầu (EDU_PLAN_MANAGER.ISNOT_EVALUATE chứa giá trị này). */
    private String evaluateType;
    /** Giới hạn theo người đăng nhập: EVA_TEACHER = là giảng viên đánh giá; STUDENT = là học viên; null = tất cả. */
    private String scope;
}
