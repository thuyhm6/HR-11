package com.ait.edu.trainEducation.mapper;

import com.ait.edu.trainEducation.dto.EduEmployeeDto;
import com.ait.edu.trainEducation.dto.EduPlanManagerRowDto;
import com.ait.edu.trainEducation.dto.EduPlanTeacherDto;
import com.ait.edu.trainEducation.dto.EduTrainSyllabusDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/** Kế hoạch đào tạo - bảng EDU_PLAN_MANAGER + EDU_TRAIN_SYLLABUS (cpnyId/lang/adminID/adminIP do interceptor inject). */
@Mapper
public interface EduPlanManagerMapper {

    List<EduPlanManagerRowDto> selectList(@Param("trainDiffCode") String trainDiffCode,
                                          @Param("trainTypeCode") String trainTypeCode,
                                          @Param("courseNameCode") String courseNameCode);

    EduPlanManagerRowDto selectOne(@Param("planNo") String planNo);

    /** Kế hoạch chưa tạo thông tin cơ bản (ACTIVITY = 1) - dropdown "Chương trình đào tạo" khi thêm thông tin cơ bản. */
    List<EduPlanManagerRowDto> selectAvailableForBasic();

    String selectNextNo();

    String selectMaxPeriodTime(@Param("courseNumber") String courseNumber);

    /** Nhân viên đang làm việc thuộc các phòng ban chỉ định (kể cả phòng ban con). */
    List<EduEmployeeDto> selectEmployeesInDepts(@Param("deptNos") List<String> deptNos);

    List<EduPlanTeacherDto> selectTeachers(@Param("keyword") String keyword);

    int insert(EduPlanManagerRowDto row);

    int update(EduPlanManagerRowDto row);

    /** Đồng bộ ngày thực hiện / hình thức / địa điểm sang EDU_BASIC_INFORMATION (bản gốc updateBasicInformation). */
    int updateBasicInformation(EduPlanManagerRowDto row);

    int deactivate(@Param("planNo") String planNo);

    // ---------- Xóa dây chuyền dữ liệu phát sinh từ kế hoạch (bản gốc deletePlanManager) ----------

    List<String> selectBasicNos(@Param("planNo") String planNo);

    int deactivateBasicInformation(@Param("basicNo") String basicNo);

    int deleteFreeEmployee(@Param("basicNo") String basicNo);

    int deleteStudentCheck(@Param("basicNo") String basicNo);

    int deleteTeacherCheck(@Param("basicNo") String basicNo);

    int deleteTrainResult(@Param("basicNo") String basicNo);

    int deleteCostManager(@Param("basicNo") String basicNo);

    int deleteFinalStudent(@Param("basicNo") String basicNo);

    int deleteTrainMaker(@Param("basicNo") String basicNo);

    int deleteStudentApply(@Param("basicNo") String basicNo);

    // ---------- Lịch đào tạo ----------

    List<EduTrainSyllabusDto> selectSyllabus(@Param("planNo") String planNo);

    int deleteSyllabusByPlan(@Param("planNo") String planNo);

    int deleteSyllabus(@Param("planNo") String planNo, @Param("syllNo") String syllNo);

    int insertSyllabus(EduTrainSyllabusDto dto);
}
