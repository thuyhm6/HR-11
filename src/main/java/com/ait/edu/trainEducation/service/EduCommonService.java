package com.ait.edu.trainEducation.service;

import com.ait.edu.trainEducation.dto.EduEmployeeDto;
import com.ait.exception.BusinessException;

import java.util.List;

public interface EduCommonService {

    List<EduEmployeeDto> searchEmployees(String keyword, List<String> deptNos) throws BusinessException;
}
