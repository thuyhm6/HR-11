package com.ait.edu.trainEducation.dto;

import com.ait.ess.empinfo.dto.EssFileDto;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * Kế hoạch đào tạo - bảng EDU_PLAN_MANAGER. Dùng cho danh sách, chi tiết và payload lưu (planNo rỗng = thêm mới).
 * Ngày dạng DD/MM/YYYY. classUnit: 0 = tháng, 1 = ngày, 2 = giờ. isnotEvaluate: "1,2,3" (học viên/giảng viên/khóa học) hoặc "0".
 */
@Data
@NoArgsConstructor
public class EduPlanManagerDto {
    private static final String DATE = "^\\d{2}/\\d{2}/\\d{4}$";
    private static final String NUMBER = "^$|^\\d+(\\.\\d+)?$";

    private String planNo;
    private String courseNo;
    private String trainDiffCode;
    private String trainDiffName;
    private String trainTypeCode;
    private String trainTypeCodeName;
    private String courseNameCode;
    private String courseNumber;
    private String periodTime;

    @NotBlank(message = "edu.planManager.msg.required")
    @Pattern(regexp = DATE, message = "edu.common.msg.invalidDate")
    private String planStartdate;
    @NotBlank(message = "edu.planManager.msg.required")
    @Pattern(regexp = DATE, message = "edu.common.msg.invalidDate")
    private String planEnddate;
    @NotBlank(message = "edu.planManager.msg.required")
    @Pattern(regexp = NUMBER, message = "edu.common.msg.invalidNumber")
    private String classHour;
    @Pattern(regexp = "^[012]$", message = "edu.common.msg.invalidNumber")
    private String classUnit;
    private String trainFormCode;
    private String trainFormCodeName;
    private String isnotTest;
    @Pattern(regexp = "^[YN]$", message = "edu.planManager.msg.required")
    private String isnotApply;

    /** Phòng ban chỉ định (DEPTNO). */
    private List<String> desDepartments;
    /** Nhân viên chỉ định (mã nhân viên) - rỗng + có phòng ban chỉ định thì BE tự lấy toàn bộ nhân viên thuộc phòng ban. */
    private List<String> desEmployees;
    /** Họ tên nhân viên chỉ định (cùng thứ tự desEmployees) - chỉ dùng khi trả về. */
    private List<String> desEmployeeNames;

    @Pattern(regexp = NUMBER, message = "edu.common.msg.invalidNumber")
    private String budget;
    private String budgetShow;
    private String departManaCode;
    private String departManaCodeName;
    /** Mã nhân viên giảng viên (chọn từ danh sách giảng viên) - rỗng nếu nhập tên tự do. */
    private String teacherEmpId;
    @Size(max = 100, message = "autoExcel.msg.tooLong")
    private String teacherName;
    @Size(max = 200, message = "autoExcel.msg.tooLong")
    private String trainAddress;
    @NotBlank(message = "edu.planManager.msg.required")
    @Pattern(regexp = NUMBER, message = "edu.common.msg.invalidNumber")
    private String trainPersonCount;
    @Size(max = 500, message = "autoExcel.msg.tooLong")
    private String trainPersonRemark;
    private String isnotEvaluate;
    private String isnotReport;
    private String isnotAgreement;

    /** Số buổi trong lịch đào tạo (EDU_TRAIN_SYLLABUS). */
    private Integer syllabusCount;
    /** File đính kèm (ESS_FILE, APPLY_TYPE = eduPlanManager) - chỉ dùng khi trả về chi tiết. */
    private List<EssFileDto> files;
}
