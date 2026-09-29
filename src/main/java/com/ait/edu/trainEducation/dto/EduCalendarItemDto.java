package com.ait.edu.trainEducation.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 1 khóa học có buổi học trong ngày của lịch đào tạo (EDU_TRAIN_SYLLABUS gom theo ngày + kế hoạch).
 * dateKey = YYYYMMDD để frontend dựng lưới tháng; courseDate = DD/MM/YYYY để hiển thị.
 */
@Data
@NoArgsConstructor
public class EduCalendarItemDto {
    private String dateKey;
    private String courseDate;
    private String planNo;
    private String courseNameCode;
    private String periodTime;
    /** Giờ bắt đầu sớm nhất / kết thúc muộn nhất trong ngày (HH24:MI). */
    private String startTime;
    private String endTime;
}
