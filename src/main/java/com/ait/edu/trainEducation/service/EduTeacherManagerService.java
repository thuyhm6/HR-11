package com.ait.edu.trainEducation.service;

import com.ait.edu.trainEducation.dto.EduTeacherManagerDto;
import com.ait.exception.BusinessException;

import java.util.List;

public interface EduTeacherManagerService {

    List<EduTeacherManagerDto> getList(String keyword, String teachFieldCode, String teachLevelCode,
                                       String teachStatusCode) throws BusinessException;

    EduTeacherManagerDto getOne(String teacherNo) throws BusinessException;

    /** Trả về key message thành công (thêm mới / cập nhật). */
    String save(EduTeacherManagerDto dto) throws BusinessException;

    void delete(String teacherNo) throws BusinessException;
}
