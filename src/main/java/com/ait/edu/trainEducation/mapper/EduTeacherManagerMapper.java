package com.ait.edu.trainEducation.mapper;

import com.ait.edu.trainEducation.dto.EduTeacherManagerDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/** Giảng viên - bảng EDU_TEACHER_MANAGER (cpnyId/lang/adminID/adminIP do LanguageParameterInterceptor inject). */
@Mapper
public interface EduTeacherManagerMapper {

    List<EduTeacherManagerDto> selectList(@Param("keyword") String keyword,
                                          @Param("teachFieldCode") String teachFieldCode,
                                          @Param("teachLevelCode") String teachLevelCode,
                                          @Param("teachStatusCode") String teachStatusCode);

    EduTeacherManagerDto selectOne(@Param("teacherNo") String teacherNo);

    String selectNextNo();

    /** Mã nhân viên cho giảng viên bên ngoài (bản gốc querySheWaiEmpid). */
    String selectNextExternalEmpId();

    int countActiveByPersonId(@Param("personId") String personId);

    int insert(EduTeacherManagerDto dto);

    int update(EduTeacherManagerDto dto);

    int deactivate(@Param("teacherNo") String teacherNo);
}
