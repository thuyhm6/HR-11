package com.ait.edu.trainEducation.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Khóa đào tạo nhân viên đăng nhập được đăng ký (EDU_BASIC_INFORMATION: kế hoạch cho phép đăng ký, còn hạn đăng ký,
 * nhân viên thuộc danh sách chỉ định và chưa đăng ký). applyCount / planCount = số đơn đã đăng ký / số người chỉ định.
 */
@Data
@NoArgsConstructor
public class EduCourseApplyCourseDto {
    private String basicNo;
    private String planNo;
    private Integer syllabusCount;
    private String trainTypeCodeName;
    private String courseNameCode;
    private String periodTime;
    private String impleStartDate;
    private String impleEndDate;
    private String impleClassHour;
    private String impleClassUnit;
    private String applyEndDate;
    private Integer applyCount;
    private Integer planCount;
}
