package com.ait.edu.trainEducation.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

/**
 * 1 dòng báo cáo đào tạo = 1 nhóm (theo chiều thống kê + hình thức đào tạo). Giờ đào tạo quy đổi: 1 ngày = 8 giờ,
 * 1 tháng = 30 ngày.
 */
@Data
@NoArgsConstructor
public class EduTrainReportRowDto {
    private String dimKey;
    /** Tên nhóm: loại hình (course) / chức vụ / phòng ban / năm / tháng MM/YYYY / hình thức. */
    private String dimName;
    /** Chương trình đào tạo (chỉ báo cáo course). */
    private String trainDiffName;
    /** Tên khóa học (chỉ báo cáo course). */
    private String courseNameCode;
    private String trainFormName;
    /** Số khóa học (khác nhau). */
    private Integer courseCount;
    /** Số lần đào tạo (số lớp = thông tin cơ bản). */
    private Integer classCount;
    /** Số lượt học viên. */
    private Integer numb;
    /** Số học viên (khác nhau). */
    private Integer personCount;
    /** Số lần đào tạo bình quân / học viên = numb / personCount. */
    private BigDecimal avgCount;
    /** Tổng thời gian đào tạo (giờ) của các lớp. */
    private BigDecimal allTime;
    /** Thời gian * số người (giờ công đào tạo). */
    private BigDecimal totalPt;
    /** Thời gian bình quân / lượt = totalPt / numb. */
    private BigDecimal avgTime;
    private BigDecimal allCost;
    private BigDecimal directCost;
    private BigDecimal indirectCost;
    /** Chi phí bình quân / lượt = allCost / numb. */
    private BigDecimal avgCost;
}
