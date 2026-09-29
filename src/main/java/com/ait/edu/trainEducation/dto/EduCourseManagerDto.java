package com.ait.edu.trainEducation.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

/** Quản lý khóa học - 1 dòng bảng EDU_COURSE_MANAGER (kèm tên loại hình theo ngôn ngữ hiện tại). */
@Data
@NoArgsConstructor
public class EduCourseManagerDto {
    private String courseNo;
    private String sysmanaNo;
    private String trainTypeCode;
    private String trainTypeCodeName;
    private String trainTypeNo;
    private String courseNameCode;
    private String courseNumber;
    private String remark;
}
