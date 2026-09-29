package com.ait.edu.trainEducation.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 1 đơn đăng ký khóa đào tạo kèm 1 dòng phê duyệt (EDU_STUDENT_APPLY + EDU_TRAIN_MAKER) - dùng cho các trang Phê duyệt,
 * Xác nhận, Tình hình đăng ký.
 * applyFlag (phê duyệt): 1 = chưa duyệt, 2 = đã duyệt, 0 = từ chối; confirmFlag (xác nhận): 1 = chờ, 2 = đã xác nhận, 0 = từ chối.
 */
@Data
@NoArgsConstructor
public class EduCourseApplyRowDto {
    private String makerNo;
    private String applyNo;
    private String basicNo;
    private String planNo;
    private Integer syllabusCount;
    private String empId;
    private String stuLocalName;
    private String deptName;
    private String postGradeName;
    private String trainTypeCodeName;
    private String courseNameCode;
    private String periodTime;
    private String impleStartDate;
    private String impleEndDate;
    private String impleClassHour;
    private String impleClassUnit;
    private String applyDate;
    private String applyTask;
    private String applyFlag;
    private String confirmFlag;
    private String makerLocalName;
    private String makerLevel;
    private Integer applyCount;
    private Integer planCount;
    /** Đơn của chính người đăng nhập (trang Tình hình - được hủy khi chưa phê duyệt). */
    private boolean mine;
}
