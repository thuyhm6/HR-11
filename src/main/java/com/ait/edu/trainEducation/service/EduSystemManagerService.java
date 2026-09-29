package com.ait.edu.trainEducation.service;

import com.ait.edu.trainEducation.dto.EduSystemManagerDto;
import com.ait.edu.trainEducation.dto.EduSystemManagerSaveDto;
import com.ait.exception.BusinessException;

import java.util.List;

public interface EduSystemManagerService {

    List<EduSystemManagerDto> getList(String trainDiffCode, String trainTypeCode) throws BusinessException;

    EduSystemManagerDto getOne(String sysmanaNo) throws BusinessException;

    /** Trả về key message thành công (thêm mới / cập nhật) để controller dịch theo ngôn ngữ hiện tại. */
    String save(EduSystemManagerSaveDto dto) throws BusinessException;

    void delete(String sysmanaNo) throws BusinessException;
}
