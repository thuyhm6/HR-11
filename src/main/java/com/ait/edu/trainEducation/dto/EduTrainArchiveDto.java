package com.ait.edu.trainEducation.dto;

import com.ait.ess.empinfo.dto.EssFileDto;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

/**
 * 1 dòng hồ sơ đào tạo = 1 học viên của 1 khóa đào tạo (EDU_FREE_EMPLOYEE + EDU_BASIC_INFORMATION), hoặc 1 dòng dữ liệu
 * đào tạo cũ trước khi chuyển hệ thống (EDU_TRAIN_BASIC_HISTORY, history = true).
 */
@Data
@NoArgsConstructor
public class EduTrainArchiveDto {
    private String empId;
    private String localName;
    private String sexName;
    private String deptName;
    private String postGradeName;
    private String dateStarted;
    private String courseNameCode;
    private String periodTime;
    private String trainContent;
    private String impleClassHour;
    /** 0 = tháng, 1 = ngày, 2 = giờ. */
    private String impleClassUnit;
    private String impleStartDate;
    private String impleEndDate;
    private String trainAddress;
    private String departManaCodeName;
    /** Tổng chi phí của khóa (giống bản gốc - không chia theo đầu người). */
    private String allCost;
    /** Điểm tổng hợp = điểm thi * 0.6 + điểm đánh giá bình quân * 0.4 (bản gốc EVA_RESULT). */
    private String evaResult;
    private String basicNo;
    private String resultNo;
    private boolean history;
    /** Báo cáo đào tạo (ESS_FILE, APPLY_TYPE eduTrainResult, APPLY_NO = RESULT_NO hoặc BASIC_NO). */
    private List<EssFileDto> files = new ArrayList<>();
}
