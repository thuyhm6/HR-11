package com.ait.edu.trainEducation.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Học viên của thông tin cơ bản - bảng EDU_FREE_EMPLOYEE. flag: 1 = chỉ định, 2 = tự chọn, 3 = đăng ký đã duyệt.
 * Các cột điểm dùng cho trang Đánh giá học viên (evaResult = điểm số 0-100).
 */
@Data
@NoArgsConstructor
public class EduFreeEmployeeDto {
    private String freeNo;
    private String basicNo;
    private String empId;
    private String localName;
    private String flag;
    private String deptName;
    private String postGradeName;
    private String evaResult;
}
