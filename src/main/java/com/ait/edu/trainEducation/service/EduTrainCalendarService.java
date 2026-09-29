package com.ait.edu.trainEducation.service;

import com.ait.edu.trainEducation.dto.EduCalendarItemDto;
import com.ait.exception.BusinessException;

import java.util.List;

/** Lịch đào tạo (chuyển từ TrainFileCtroller.trainCalendar / CompanyCalendarSerImp.getCalendarViewHtml - Hanwha_HTSV). */
public interface EduTrainCalendarService {

    /** Các khóa học có buổi học trong tháng; year/month rỗng = tháng hiện tại (giống bản gốc). */
    List<EduCalendarItemDto> getMonth(Integer year, Integer month) throws BusinessException;
}
