package com.ait.edu.trainEducation.mapper;

import com.ait.edu.trainEducation.dto.EduCalendarItemDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/** Lịch đào tạo - bảng EDU_TRAIN_SYLLABUS + EDU_PLAN_MANAGER (cpnyId do LanguageParameterInterceptor inject). */
@Mapper
public interface EduTrainCalendarMapper {

    /** Các buổi học trong tháng yearMonth (YYYYMM), 1 dòng / ngày + kế hoạch. */
    List<EduCalendarItemDto> selectMonth(@Param("yearMonth") String yearMonth);
}
