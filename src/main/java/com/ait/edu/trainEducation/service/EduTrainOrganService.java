package com.ait.edu.trainEducation.service;

import com.ait.edu.trainEducation.dto.EduTrainOrganDto;
import com.ait.exception.BusinessException;

import java.util.List;

public interface EduTrainOrganService {

    List<EduTrainOrganDto> getList(String organName, String address) throws BusinessException;

    EduTrainOrganDto getOne(String organNo) throws BusinessException;

    /** Trả về ORGAN_NO đã lưu (để frontend upload file đính kèm theo đúng mã). */
    String save(EduTrainOrganDto dto) throws BusinessException;

    void delete(String organNo) throws BusinessException;
}
