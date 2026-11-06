package com.ait.mobile.training.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Khóa đào tạo nhân viên được đăng ký (EduCourseApplyCourseDto) hoặc đơn đăng ký của tôi (EduCourseApplyRowDto).
 * Ngày dạng DD/MM/YYYY. Nhãn trạng thái / đơn vị giờ học đã dịch theo ngôn ngữ app.
 */
@Data
@NoArgsConstructor
public class MobileCourseDto {

    private String basicNo;
    private String planNo;
    private String applyNo;
    private String trainTypeName;
    /** Tên khóa + kỳ (vd. "An toàn lao động (Kỳ thứ 2)"). */
    private String courseName;
    private String startDate;
    private String endDate;
    /** Số giờ học + đơn vị (vd. "16 Tiếng"). */
    private String classHour;
    private String applyEndDate;
    private Integer applyCount;
    private Integer planCount;
    private String applyDate;
    private String applyTask;
    /** 1 = chưa duyệt, 2 = đã duyệt, 0 = từ chối */
    private String applyFlag;
    private String applyFlagName;
    /** 1 = chờ xác nhận, 2 = đã xác nhận, 0 = từ chối (phòng đào tạo) */
    private String confirmFlag;
    private String confirmFlagName;
    private String makerName;
    private boolean cancelable;
}
