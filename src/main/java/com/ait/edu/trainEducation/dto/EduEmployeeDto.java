package com.ait.edu.trainEducation.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

/** Nhân viên dùng cho các ô tìm kiếm của module Đào tạo (giảng viên, người ký hợp đồng, nhân viên chỉ định). */
@Data
@NoArgsConstructor
public class EduEmployeeDto {
    private String personId;
    private String empId;
    private String localName;
    private String deptNo;
    private String deptName;
    private String postGradeName;
    private String positionName;
}
