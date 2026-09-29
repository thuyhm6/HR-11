package com.ait.edu.trainEducation.dto;

import com.ait.ess.empinfo.dto.EssFileDto;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * Chi phí đào tạo - bảng EDU_COST_MANAGER (1 dòng / thông tin cơ bản, tạo khi thêm thông tin cơ bản).
 * Danh sách kèm thông tin khóa học + dự tính chi phí của kế hoạch; allCost = tổng 8 khoản, avgCost = allCost / số học viên.
 */
@Data
@NoArgsConstructor
public class EduTrainCostDto {
    private static final String NUMBER = "^$|^\\d+(\\.\\d+)?$";

    private String costNo;
    private String basicNo;
    private String trainTypeCodeName;
    private String courseNameCode;
    private String periodTime;
    private String impleStartDate;
    private String impleEndDate;
    private String budget;
    private String allCost;
    private String avgCost;
    /** Số học viên (tối thiểu 1 - bản gốc TOTAL_COUNT) để tính bình quân. */
    private Integer totalCount;

    @Pattern(regexp = NUMBER, message = "edu.common.msg.invalidNumber")
    private String teacherCost;
    @Pattern(regexp = NUMBER, message = "edu.common.msg.invalidNumber")
    private String materialCost;
    @Pattern(regexp = NUMBER, message = "edu.common.msg.invalidNumber")
    private String fieldCost;
    @Pattern(regexp = NUMBER, message = "edu.common.msg.invalidNumber")
    private String foodCost;
    @Pattern(regexp = NUMBER, message = "edu.common.msg.invalidNumber")
    private String stayCost;
    @Pattern(regexp = NUMBER, message = "edu.common.msg.invalidNumber")
    private String trafficCost;
    @Pattern(regexp = NUMBER, message = "edu.common.msg.invalidNumber")
    private String visaCost;
    @Pattern(regexp = NUMBER, message = "edu.common.msg.invalidNumber")
    private String otherCost;
    @Size(max = 500, message = "autoExcel.msg.tooLong")
    private String remark;

    /** File đính kèm (ESS_FILE, APPLY_TYPE = eduCostManager) - chỉ dùng khi trả về chi tiết. */
    private List<EssFileDto> files;
}
