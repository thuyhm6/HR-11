package com.ait.edu.trainEducation.mapper;

import com.ait.edu.trainEducation.dto.EduEmployeeDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/** Truy vấn dùng chung của module Đào tạo (cpnyId/lang do LanguageParameterInterceptor inject). */
@Mapper
public interface EduCommonMapper {

    /** Nhân viên đang làm việc (EMP_OFFICE = 15119) theo mã/tên và cây phòng ban (bản gốc queryTeacher/queryPeixun/desEmployee). */
    List<EduEmployeeDto> searchEmployees(@Param("keyword") String keyword,
                                         @Param("deptNos") List<String> deptNos,
                                         @Param("maxRows") int maxRows);

    EduEmployeeDto selectEmployeeByEmpId(@Param("empId") String empId);
}
