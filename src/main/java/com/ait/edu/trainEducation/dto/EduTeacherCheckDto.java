package com.ait.edu.trainEducation.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

/** Phiếu học viên đánh giá giảng viên - bảng EDU_TEACHER_CHECK. grooming = điểm 1-5 (bản TSTO chỉ dùng cột này). */
@Data
@NoArgsConstructor
public class EduTeacherCheckDto {
    private String checkNo;
    private String basicNo;
    private String teaEmpId;
    private String teaLocalName;
    private String teaPostGradeName;
    private String teaDeptName;
    private String stuEmpId;
    private String stuLocalName;
    private Integer grooming;
    private String allscore;
    private String otherAdvise;
}
