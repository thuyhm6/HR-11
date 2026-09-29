package com.ait.edu.trainEducation.mapper;

import com.ait.edu.trainEducation.dto.EduFreeEmployeeDto;
import com.ait.edu.trainEducation.dto.EduTeacherCheckDto;
import com.ait.edu.trainEducation.dto.EduTrainResultDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Đánh giá học viên (EDU_FREE_EMPLOYEE.EVA_RESULT), đánh giá giảng viên (EDU_TEACHER_CHECK), kết quả đào tạo
 * (EDU_TRAIN_RESULT) - cpnyId/lang/adminID/adminIP do interceptor inject.
 */
@Mapper
public interface EduTrainEvaluateMapper {

    /** Người đăng nhập là giảng viên đánh giá của khóa (EVA_TEACHER_EMPID chứa mã nhân viên). */
    int countEvaTeacher(@Param("basicNo") String basicNo);

    /** Người đăng nhập là học viên của khóa. */
    int countStudent(@Param("basicNo") String basicNo);

    // ---------- Đánh giá học viên ----------

    List<EduFreeEmployeeDto> selectStudents(@Param("basicNo") String basicNo);

    int updateEvaResult(@Param("basicNo") String basicNo, @Param("freeNo") String freeNo,
                        @Param("evaResult") String evaResult);

    int updateEvaResultByEmp(@Param("basicNo") String basicNo, @Param("empId") String empId,
                             @Param("evaResult") String evaResult);

    // ---------- Đánh giá giảng viên ----------

    List<EduTeacherCheckDto> selectTeacherChecks(@Param("basicNo") String basicNo, @Param("teaEmpId") String teaEmpId);

    int updateGrooming(@Param("basicNo") String basicNo, @Param("teaEmpId") String teaEmpId,
                       @Param("stuEmpId") String stuEmpId, @Param("grooming") Integer grooming);

    // ---------- Kết quả đào tạo ----------

    List<EduTrainResultDto> selectTrainResults(@Param("basicNo") String basicNo);

    int updateTrainResultScores(EduTrainResultDto dto);
}
