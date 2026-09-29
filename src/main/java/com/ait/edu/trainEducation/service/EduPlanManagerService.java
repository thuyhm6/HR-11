package com.ait.edu.trainEducation.service;

import com.ait.edu.trainEducation.dto.EduPlanManagerDto;
import com.ait.edu.trainEducation.dto.EduPlanTeacherDto;
import com.ait.edu.trainEducation.dto.EduTrainSyllabusDto;
import com.ait.exception.BusinessException;

import java.util.List;

public interface EduPlanManagerService {

    List<EduPlanManagerDto> getList(String trainDiffCode, String trainTypeCode, String courseNameCode) throws BusinessException;

    EduPlanManagerDto getOne(String planNo) throws BusinessException;

    /** Trả về PLAN_NO đã lưu (để frontend upload file đính kèm / import lịch đào tạo theo đúng mã). */
    String save(EduPlanManagerDto dto) throws BusinessException;

    void delete(String planNo) throws BusinessException;

    List<EduPlanTeacherDto> getTeachers(String keyword) throws BusinessException;

    List<EduTrainSyllabusDto> getSyllabus(String planNo) throws BusinessException;

    /** Thay toàn bộ lịch đào tạo của kế hoạch bằng các dòng import (bản gốc importTrainPlan). Trả về lỗi theo dòng. */
    List<String> importSyllabus(String planNo, List<EduTrainSyllabusDto> rows) throws BusinessException;

    void deleteSyllabus(String planNo, String syllNo) throws BusinessException;
}
