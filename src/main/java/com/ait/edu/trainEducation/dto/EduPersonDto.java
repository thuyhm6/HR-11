package com.ait.edu.trainEducation.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/** Cặp (mã nhân viên, họ tên) - giảng viên / học viên của thông tin cơ bản đào tạo. */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class EduPersonDto {
    private String empId;
    private String name;
}
