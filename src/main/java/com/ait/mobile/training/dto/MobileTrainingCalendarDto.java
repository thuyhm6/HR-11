package com.ait.mobile.training.dto;

import com.ait.edu.trainEducation.dto.EduCalendarItemDto;
import lombok.Data;
import lombok.NoArgsConstructor;

/** Một buổi học trong lịch đào tạo tháng. */
@Data
@NoArgsConstructor
public class MobileTrainingCalendarDto {

    /** Ngày (định dạng của EduTrainCalendarService, dùng để gom nhóm). */
    private String date;
    private String planNo;
    private String courseName;
    private String startTime;
    private String endTime;

    public static MobileTrainingCalendarDto from(EduCalendarItemDto src, String courseName) {
        MobileTrainingCalendarDto dto = new MobileTrainingCalendarDto();
        dto.setDate(src.getCourseDate() != null ? src.getCourseDate() : src.getDateKey());
        dto.setPlanNo(src.getPlanNo());
        dto.setCourseName(courseName);
        dto.setStartTime(src.getStartTime());
        dto.setEndTime(src.getEndTime());
        return dto;
    }
}
