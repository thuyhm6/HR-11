package com.ait.edu.trainEducation.service;

import com.ait.edu.trainEducation.dto.EduPlanManagerRowDto;
import com.ait.edu.trainEducation.dto.EduTrainBasicDto;
import com.ait.edu.trainEducation.dto.EduTrainBasicSearchDto;
import com.ait.exception.BusinessException;

import java.util.List;

public interface EduTrainBasicService {

    List<EduTrainBasicDto> getList(EduTrainBasicSearchDto search) throws BusinessException;

    EduTrainBasicDto getOne(String basicNo) throws BusinessException;

    /** Kế hoạch chưa tạo thông tin cơ bản. */
    List<EduPlanManagerRowDto> getAvailablePlans() throws BusinessException;

    /** Giá trị mặc định khi chọn kế hoạch trên form thêm mới (bản gốc queryAllPlan). */
    EduTrainBasicDto getPlanDefaults(String planNo) throws BusinessException;

    /** Trả về key message thành công (thêm mới / cập nhật). */
    String save(EduTrainBasicDto dto) throws BusinessException;

    void delete(String basicNo) throws BusinessException;
}
