package com.ait.edu.trainEducation.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Tỷ lệ (%) các mức điểm 5 (Rất tốt) ... 1 (Kém) và độ hài lòng (= % điểm 5 + % điểm 4) - thay cho các cột REV_05..REV_TOTAL
 * mà bản gốc tính bằng SQL DECODE lồng nhau (queryEvaAllTSTOTeacher / trainResultInfoEveList).
 * key: mã giảng viên (đánh giá giảng viên) hoặc mã tiêu chí (kết quả đào tạo).
 */
@Data
@NoArgsConstructor
public class EduScoreDistributionDto {
    private String key;
    private String name;
    private String postGradeName;
    private String deptName;
    /** Số phiếu đã có điểm. */
    private int count;
    private double rev5;
    private double rev4;
    private double rev3;
    private double rev2;
    private double rev1;
    private double satisfaction;
}
