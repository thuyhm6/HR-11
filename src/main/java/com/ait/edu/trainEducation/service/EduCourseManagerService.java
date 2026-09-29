package com.ait.edu.trainEducation.service;

import com.ait.edu.trainEducation.dto.EduCourseManagerDto;
import com.ait.edu.trainEducation.dto.EduCourseManagerSaveDto;
import com.ait.exception.BusinessException;

import java.util.List;

public interface EduCourseManagerService {

    List<EduCourseManagerDto> getList(String trainDiffCode, String trainTypeCode, String courseNameCode)
            throws BusinessException;

    EduCourseManagerDto getOne(String courseNo) throws BusinessException;

    /** Trả về key message thành công (thêm mới / cập nhật) để controller dịch theo ngôn ngữ hiện tại. */
    String save(EduCourseManagerSaveDto dto) throws BusinessException;
}
