package com.ait.edu.trainEducation.mapper;

import com.ait.edu.trainEducation.dto.EduCourseManagerDto;
import com.ait.edu.trainEducation.dto.EduCourseManagerSaveDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/** Quản lý khóa học - bảng EDU_COURSE_MANAGER (cpnyId/lang/adminID/adminIP do LanguageParameterInterceptor inject). */
@Mapper
public interface EduCourseManagerMapper {

    List<EduCourseManagerDto> selectList(@Param("trainDiffCode") String trainDiffCode,
                                         @Param("trainTypeCode") String trainTypeCode,
                                         @Param("courseNameCode") String courseNameCode);

    EduCourseManagerDto selectOne(@Param("courseNo") String courseNo);

    String selectMaxCourseNumber(@Param("trainTypeNo") String trainTypeNo);

    int insert(EduCourseManagerSaveDto dto);

    int update(EduCourseManagerSaveDto dto);

    /** Đồng bộ tên khóa học sang kế hoạch đào tạo (EDU_PLAN_MANAGER). */
    int updatePlanCourseName(EduCourseManagerSaveDto dto);

    /** Đồng bộ tên khóa học sang thông tin cơ bản đào tạo (EDU_BASIC_INFORMATION). */
    int updateBasicInfoCourseName(EduCourseManagerSaveDto dto);
}
