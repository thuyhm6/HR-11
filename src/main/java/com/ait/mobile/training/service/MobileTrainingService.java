package com.ait.mobile.training.service;

import com.ait.mobile.training.dto.MobileCourseApplyRequest;
import com.ait.mobile.training.dto.MobileCourseDto;
import com.ait.mobile.training.dto.MobileTrainingCalendarDto;
import com.ait.mobile.training.dto.MobileTrainingMakerDto;
import java.util.List;

/**
 * Đào tạo trên app - dùng lại EduCourseApplyService (màn "Đăng ký khóa đào tạo", "Tình hình đăng ký") và
 * EduTrainCalendarService (lịch đào tạo) ở web. Luôn ở vai trò nhân viên (không có chức năng quản lý đào tạo).
 */
public interface MobileTrainingService {

    /** Khóa nhân viên được đăng ký (còn hạn, thuộc danh sách chỉ định, chưa đăng ký). */
    List<MobileCourseDto> getAvailableCourses();

    List<MobileTrainingMakerDto> getMakers();

    /** @return số khóa đã đăng ký */
    int apply(MobileCourseApplyRequest req);

    /** Đơn đăng ký đào tạo của tôi. fromDate/toDate: DD/MM/YYYY (trống = tháng hiện tại). */
    List<MobileCourseDto> getMyApplies(String fromDate, String toDate);

    void cancel(String applyNo);

    List<MobileTrainingCalendarDto> getCalendar(Integer year, Integer month);
}
