package com.ait.edu.trainEducation.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Payload thêm mới / cập nhật khóa học.
 * courseNo rỗng = thêm mới (bắt buộc sysmanaNo - hệ thống đào tạo, kiểm tra ở service);
 * courseNo có giá trị = cập nhật (bản gốc cho sửa tên khóa học + ghi chú).
 */
@Data
@NoArgsConstructor
public class EduCourseManagerSaveDto {
    private String courseNo;
    private String sysmanaNo;
    @NotBlank(message = "edu.courseManager.msg.required")
    @Size(max = 200, message = "autoExcel.msg.tooLong")
    private String courseNameCode;
    @Size(max = 200, message = "autoExcel.msg.tooLong")
    private String remark;

    /** Lấy từ hệ thống đào tạo + tự sinh ở service khi thêm mới. */
    private String trainTypeCode;
    private String trainTypeNo;
    private String courseNumber;
}
