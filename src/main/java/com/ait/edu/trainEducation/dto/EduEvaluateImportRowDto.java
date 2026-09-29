package com.ait.edu.trainEducation.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Dòng import Excel của các trang đánh giá (đọc bằng SheetJS ở frontend):
 * - Đánh giá học viên: empId, name, score (điểm số 0-100) - bản gốc importStudentEvaluate.
 * - Đánh giá giảng viên: empId (người đánh giá), name, score (1-5) - bản gốc teacherEvaluateImport.
 * - Kết quả đào tạo: empId, name, difficulty, contentRich, timeModerate, practicability (1-5) - bản gốc importTrainResultEV.
 */
@Data
@NoArgsConstructor
public class EduEvaluateImportRowDto {
    private String empId;
    private String name;
    private String score;
    private String difficulty;
    private String contentRich;
    private String timeModerate;
    private String practicability;
}
