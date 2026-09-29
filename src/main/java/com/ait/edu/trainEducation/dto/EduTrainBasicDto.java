package com.ait.edu.trainEducation.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

/**
 * Thông tin cơ bản đào tạo - bảng EDU_BASIC_INFORMATION (1 lần tổ chức thực tế của 1 kế hoạch đào tạo).
 * Dùng cho danh sách (cả các trang Đánh giá học viên / Đánh giá giảng viên / Kết quả đào tạo), chi tiết và payload lưu
 * (basicNo rỗng = thêm mới từ planNo). Ngày dạng DD/MM/YYYY; impleClassUnit: 0 = tháng, 1 = ngày, 2 = giờ.
 */
@Data
@NoArgsConstructor
public class EduTrainBasicDto {
    private static final String DATE = "^$|^\\d{2}/\\d{2}/\\d{4}$";

    private String basicNo;
    private String planNo;
    private String trainTypeCode;
    private String trainTypeCodeName;
    private String courseNameCode;
    private String trainFormCode;
    private String trainFormCodeName;
    private String trainAddress;
    @Pattern(regexp = DATE, message = "edu.common.msg.invalidDate")
    private String impleStartDate;
    @Pattern(regexp = DATE, message = "edu.common.msg.invalidDate")
    private String impleEndDate;
    @Pattern(regexp = "^$|^\\d+(\\.\\d+)?$", message = "edu.common.msg.invalidNumber")
    private String impleClassHour;
    @Pattern(regexp = "^$|^[012]$", message = "edu.common.msg.invalidNumber")
    private String impleClassUnit;
    @Size(max = 1000, message = "autoExcel.msg.tooLong")
    private String trainContent;
    private String periodTime;
    @Pattern(regexp = DATE, message = "edu.common.msg.invalidDate")
    private String applyEndDate;

    /** Số học viên đã có điểm / số lượt học viên đánh giá giảng viên / số phiếu đánh giá khóa học. */
    private Integer studentEvalCount;
    private Integer teacherEvalCount;
    private Integer resultCount;

    // ---------- Chi tiết (điền ở service từ các cột CLOB / bảng con) ----------
    /** Phòng ban dùng để lọc "Nhân viên tự chọn". */
    private List<String> desDepartments = new ArrayList<>();
    /** Giảng viên của khóa (từ kế hoạch) - không sửa được. */
    private List<EduPersonDto> comTeachers = new ArrayList<>();
    /** Giảng viên đánh giá học viên (chọn trong comTeachers). */
    private List<EduPersonDto> evaTeachers = new ArrayList<>();
    /** Đối tượng đào tạo theo kế hoạch (nhân viên chỉ định của kế hoạch). */
    private List<EduPersonDto> planEmployees = new ArrayList<>();
    /** Nhân viên chỉ định thực tế (EDU_FREE_EMPLOYEE.FLAG = 1, chọn trong planEmployees). */
    private List<EduPersonDto> actEmployees = new ArrayList<>();
    /** Nhân viên tự chọn (FLAG = 2, ngoài kế hoạch). */
    private List<EduPersonDto> freeEmployees = new ArrayList<>();
    /** Nhân viên đăng ký đã được duyệt (FLAG = 3) - chỉ xem. */
    private List<EduPersonDto> applyEmployees = new ArrayList<>();
    /** Đối tượng đào tạo thực tế (EDU_FINAL_STUDENT). */
    private List<EduPersonDto> finalStudents = new ArrayList<>();

    // ---------- Cột CLOB lưu dạng chuỗi phân cách dấu phẩy (giữ nguyên cách lưu của bản gốc) ----------
    @JsonIgnore private String desDepartmentRaw;
    @JsonIgnore private String comTeacherEmpidRaw;
    @JsonIgnore private String comTeacherNameRaw;
    @JsonIgnore private String evaTeacherEmpidRaw;
    @JsonIgnore private String evaTeacherNameRaw;
    @JsonIgnore private String planEmployeeEmpidRaw;
    @JsonIgnore private String planEmployeeNameRaw;
}
