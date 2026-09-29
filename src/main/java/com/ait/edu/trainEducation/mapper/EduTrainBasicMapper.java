package com.ait.edu.trainEducation.mapper;

import com.ait.edu.trainEducation.dto.EduFreeEmployeeDto;
import com.ait.edu.trainEducation.dto.EduPersonDto;
import com.ait.edu.trainEducation.dto.EduTrainBasicDto;
import com.ait.edu.trainEducation.dto.EduTrainBasicSearchDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Thông tin cơ bản đào tạo - EDU_BASIC_INFORMATION và các bảng con EDU_FREE_EMPLOYEE, EDU_FINAL_STUDENT,
 * EDU_TRAIN_RESULT, EDU_TEACHER_CHECK, EDU_COST_MANAGER (cpnyId/lang/adminID/adminIP do interceptor inject).
 * Xóa dây chuyền dùng lại các câu lệnh của EduPlanManagerMapper.
 */
@Mapper
public interface EduTrainBasicMapper {

    List<EduTrainBasicDto> selectList(EduTrainBasicSearchDto search);

    EduTrainBasicDto selectOne(@Param("basicNo") String basicNo);

    String selectNextNo();

    int insert(EduTrainBasicDto dto);

    int update(EduTrainBasicDto dto);

    /** Kế hoạch đã tạo thông tin cơ bản: ACTIVITY 1 -> 2 (không hiện trong danh sách chọn nữa). */
    int markPlanUsed(@Param("planNo") String planNo);

    /** Xóa thông tin cơ bản: trả kế hoạch về ACTIVITY 1. */
    int releasePlan(@Param("basicNo") String basicNo);

    // ---------- Học viên ----------

    List<EduFreeEmployeeDto> selectFreeEmployees(@Param("basicNo") String basicNo);

    int insertFreeEmployee(@Param("basicNo") String basicNo, @Param("empId") String empId,
                           @Param("localName") String localName, @Param("flag") String flag);

    int deleteFreeEmployee(@Param("basicNo") String basicNo, @Param("empId") String empId);

    int deleteStudentCheckOfStudent(@Param("basicNo") String basicNo, @Param("empId") String empId);

    List<EduPersonDto> selectFinalStudents(@Param("basicNo") String basicNo);

    int deleteFinalStudents(@Param("basicNo") String basicNo);

    int insertFinalStudent(@Param("basicNo") String basicNo, @Param("empId") String empId, @Param("name") String name);

    // ---------- Phiếu đánh giá khóa học / giảng viên, chi phí ----------

    List<String> selectTrainResultEmpIds(@Param("basicNo") String basicNo);

    int insertTrainResult(@Param("basicNo") String basicNo, @Param("empId") String empId, @Param("name") String name);

    /** Các cặp "mã giảng viên|mã học viên" đã có phiếu đánh giá giảng viên. */
    List<String> selectTeacherCheckKeys(@Param("basicNo") String basicNo);

    int insertTeacherCheck(@Param("basicNo") String basicNo, @Param("teaEmpId") String teaEmpId,
                           @Param("teaName") String teaName, @Param("stuEmpId") String stuEmpId,
                           @Param("stuName") String stuName);

    int deleteTeacherCheck(@Param("basicNo") String basicNo, @Param("teaEmpId") String teaEmpId,
                           @Param("stuEmpId") String stuEmpId);

    int insertCostManager(@Param("basicNo") String basicNo);
}
