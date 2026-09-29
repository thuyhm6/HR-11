package com.ait.edu.trainEducation.service;

import com.ait.edu.trainEducation.dto.EduCourseApplyCourseDto;
import com.ait.edu.trainEducation.dto.EduCourseApplyFlagDto;
import com.ait.edu.trainEducation.dto.EduCourseApplyRowDto;
import com.ait.edu.trainEducation.dto.EduCourseApplySearchDto;
import com.ait.edu.trainEducation.dto.EduCourseApplySubmitDto;
import com.ait.edu.trainEducation.dto.EduEmployeeDto;
import com.ait.exception.BusinessException;

import java.util.List;

/**
 * Đăng ký khóa đào tạo (chuyển từ TrainEducationCtroller / TrainEducationSerImpl: courseApply, addCourseApply,
 * courseMaker, updateCourseMaker, courseConfirm, updateCourseConfirm, makerSituation, cancelApply - dự án Hanwha_HTSV).
 */
public interface EduCourseApplyService {

    List<EduCourseApplyCourseDto> getApplyCourses(EduCourseApplySearchDto search) throws BusinessException;

    List<EduEmployeeDto> getDefaultMakers() throws BusinessException;

    /** Gửi đơn đăng ký; trả số khóa đã đăng ký. */
    int submit(EduCourseApplySubmitDto dto) throws BusinessException;

    List<EduCourseApplyRowDto> getMakerRows(EduCourseApplySearchDto search) throws BusinessException;

    /** Phê duyệt: trả số đơn cập nhật được. */
    int updateApplyFlag(EduCourseApplyFlagDto dto) throws BusinessException;

    List<EduCourseApplyRowDto> getConfirmRows(EduCourseApplySearchDto search) throws BusinessException;

    /** Xác nhận (quản lý đào tạo): đồng ý -> thêm học viên vào khóa; chờ / từ chối -> bỏ học viên đã thêm. */
    int updateConfirmFlag(EduCourseApplyFlagDto dto) throws BusinessException;

    List<EduCourseApplyRowDto> getSituationRows(EduCourseApplySearchDto search) throws BusinessException;

    void cancel(String applyNo, boolean manager) throws BusinessException;
}
