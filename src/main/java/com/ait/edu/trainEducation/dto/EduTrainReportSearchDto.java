package com.ait.edu.trainEducation.dto;

import jakarta.validation.constraints.Pattern;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Điều kiện báo cáo đào tạo. type = chiều thống kê (service kiểm tra); mỗi loại báo cáo chỉ dùng các điều kiện tương ứng
 * của trang JSP gốc: course (chương trình / loại hình / tên khóa học), postGrade (tên chức vụ), dept (phòng ban),
 * year (YYYY), month (YYYYMM), form (hình thức đào tạo).
 */
@Data
@NoArgsConstructor
public class EduTrainReportSearchDto {
    private String type;
    private String trainDiffCode;
    private String trainTypeCode;
    private String courseName;
    private String postGradeName;
    private String deptNo;
    @Pattern(regexp = "^$|^\\d{4}$", message = "common.loadFail")
    private String year;
    @Pattern(regexp = "^$|^\\d{6}$", message = "common.loadFail")
    private String month;
    private String trainFormCode;
}
