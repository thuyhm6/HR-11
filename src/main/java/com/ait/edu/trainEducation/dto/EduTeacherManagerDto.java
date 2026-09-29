package com.ait.edu.trainEducation.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Giảng viên - bảng EDU_TEACHER_MANAGER. Dùng cho cả danh sách và payload lưu (teacherNo rỗng = thêm mới).
 * Ngày dạng DD/MM/YYYY.
 */
@Data
@NoArgsConstructor
public class EduTeacherManagerDto {
    private String teacherNo;
    private String personId;
    private String empId;
    @Size(max = 100, message = "autoExcel.msg.tooLong")
    private String teacherName;
    private String deptName;
    private String postGradeName;
    private String positionName;
    private String teachFieldCode;
    private String teachFieldCodeName;
    private String teachLevelCode;
    private String teachLevelCodeName;
    private String teachStatusCode;
    private String teachStatusCodeName;
    @Pattern(regexp = "^$|^\\d{2}/\\d{2}/\\d{4}$", message = "edu.common.msg.invalidDate")
    private String hireTime;
    @Pattern(regexp = "^$|^\\d{2}/\\d{2}/\\d{4}$", message = "edu.common.msg.invalidDate")
    private String firingTime;
    /** Kinh nghiệm (tháng) nhập lúc thêm mới = năm * 12 + tháng (bản gốc BUSINESS_ACT_TIME). */
    @Min(value = 0, message = "edu.common.msg.invalidNumber")
    @Max(value = 1200, message = "edu.common.msg.invalidNumber")
    private Integer businessActTime;
    /** Tổng kinh nghiệm (tháng) = số tháng từ ngày làm việc tới nay + businessActTime (bản gốc ALLTIME). */
    private Integer allTime;
    @Size(max = 500, message = "autoExcel.msg.tooLong")
    private String remark;
    /** true = giảng viên bên ngoài (không có trong HR_EMPLOYEE) - mã nhân viên tự sinh. */
    private Boolean external;
}
