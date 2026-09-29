package com.ait.edu.trainEducation.service;

import com.ait.edu.trainEducation.dto.EduTrainBasicSearchDto;
import com.ait.edu.trainEducation.dto.EduTrainCostDto;
import com.ait.exception.BusinessException;

import java.util.List;

public interface EduTrainCostService {

    List<EduTrainCostDto> getList(EduTrainBasicSearchDto search) throws BusinessException;

    EduTrainCostDto getOne(String costNo) throws BusinessException;

    void save(EduTrainCostDto dto) throws BusinessException;
}
