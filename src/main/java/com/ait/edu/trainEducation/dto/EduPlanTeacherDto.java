package com.ait.edu.trainEducation.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

/** Giảng viên để chọn cho kế hoạch đào tạo (bản gốc teacherSearch - EDU_TEACHER_MANAGER đang hoạt động). */
@Data
@NoArgsConstructor
public class EduPlanTeacherDto {
    private String empId;
    private String teacherName;
    private String deptName;
}
