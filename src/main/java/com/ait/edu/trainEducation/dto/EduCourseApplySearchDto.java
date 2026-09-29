package com.ait.edu.trainEducation.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Điều kiện tìm của các trang Đăng ký / Phê duyệt / Xác nhận / Tình hình đăng ký khóa đào tạo. Ngày DD/MM/YYYY.
 * flag: trạng thái phê duyệt (Phê duyệt, Tình hình) hoặc trạng thái xác nhận (Xác nhận).
 * allApplicants do controller đặt (quản lý đào tạo xem đơn của mọi người ở trang Tình hình), không nhận từ client.
 */
@Data
@NoArgsConstructor
public class EduCourseApplySearchDto {
    private String keyword;
    private String deptNo;
    private String courseName;
    private String startDate;
    private String endDate;
    private String flag;

    private boolean allApplicants;
}
