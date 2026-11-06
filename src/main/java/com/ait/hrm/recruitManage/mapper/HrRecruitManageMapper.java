package com.ait.hrm.recruitManage.mapper;

import com.ait.hrm.recruitManage.dto.HrEmployeeRecruitDto;
import com.ait.hrm.recruitManage.dto.HrEducationRecruitDto;
import com.ait.hrm.recruitManage.dto.HrWorkExperienceRecruitDto;
import com.ait.hrm.recruitManage.dto.HrFamilyRecruitDto;
import com.ait.hrm.recruitManage.dto.HrExpInsideBatchDto;
import com.ait.hrm.recruitManage.dto.HrRecruitBatchDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/**
 * Lưu ý: LanguageParameterInterceptor copy DTO sang Map nên selectKey không gán ngược được khóa vào DTO -
 * các khóa mới (PERSON_ID, SEQ...) được lấy trước bằng các câu selectNext...() rồi set vào DTO.
 */
@Mapper
public interface HrRecruitManageMapper {

    // ── HR_EMPLOYEE_RECRUIT (bản gốc recruit.manage.viewRecruitList / addEmployeeInfo / updateEmployeeInfo...) ──

    List<HrEmployeeRecruitDto> selectEmployeeList(HrEmployeeRecruitDto dto);

    HrEmployeeRecruitDto selectEmployeeById(@Param("personId") String personId);

    String selectNextPersonId();

    int insertEmployee(HrEmployeeRecruitDto dto);

    int updateEmployee(HrEmployeeRecruitDto dto);

    int updatePersonalInfo(HrEmployeeRecruitDto dto);

    int updatePhotoPath(@Param("personId") String personId, @Param("photoPath") String photoPath);

    int deleteEmployee(@Param("personId") String personId);

    /** Đếm EMPID đã tồn tại ở HR_EMPLOYEE / HR_EMPLOYEE_RECRUIT (bỏ qua chính nhân viên đang sửa). */
    int countExistingEmpId(@Param("empId") String empId, @Param("personId") String personId);

    /** Công ty cung ứng lao động (HR_PERSON_SUPPLIER) - bản gốc viewPersonSupplier. */
    List<String> selectPersonSupplierNames();

    // ── HR_EDUCATION_RECRUIT ─────────────────────────────────────────────────

    List<HrEducationRecruitDto> selectEducationList(@Param("personId") String personId);

    int insertEducation(HrEducationRecruitDto dto);

    int updateEducation(HrEducationRecruitDto dto);

    int deleteEducation(@Param("seq") Long seq);

    // ── HR_WORK_EXPERIENCE_RECRUIT ───────────────────────────────────────────

    List<HrWorkExperienceRecruitDto> selectWorkExpList(@Param("personId") String personId);

    int insertWorkExp(HrWorkExperienceRecruitDto dto);

    int updateWorkExp(HrWorkExperienceRecruitDto dto);

    int deleteWorkExp(@Param("seq") Long seq);

    // ── HR_FAMILY_RECRUIT ────────────────────────────────────────────────────

    List<HrFamilyRecruitDto> selectFamilyList(@Param("personId") String personId);

    int insertFamily(HrFamilyRecruitDto dto);

    int updateFamily(HrFamilyRecruitDto dto);

    int deleteFamily(@Param("seq") Long seq);

    // ── Stored procedure ─────────────────────────────────────────────────────

    /**
     * Truyền Map (không dùng DTO) để đọc được tham số OUT "message": với DTO, interceptor copy sang Map mới nên
     * giá trị OUT không gán ngược về DTO. adminID/adminIP/cpnyId do interceptor tự bổ sung từ session.
     */
    void callRecruitExecute(Map<String, Object> params);

    // ── HR_RECRUIT_REGISTER_INFO (đăng ký đợt) ───────────────────────────────

    String selectNextRegisterSeq();

    /** registerType: 14014410 = nhận việc hàng loạt, 80000057 = quyết định hàng loạt. */
    void insertRegister(@Param("registerSeq") String registerSeq, @Param("registerType") String registerType,
                        @Param("registerDate") String registerDate);

    // ── HR_RECRUIT_REGISTER_INFO (REGISTER_TYPE='80000057') ──────────────────
    List<HrExpInsideBatchDto> selectRegisterList(HrExpInsideBatchDto dto);

    // ── HR_EXPERIENCE_INSIDE_BATCH ───────────────────────────────────────────
    int countBatchList(HrExpInsideBatchDto dto);
    int countUnprocessedBatch(HrExpInsideBatchDto dto);
    List<HrExpInsideBatchDto> selectBatchListPage(HrExpInsideBatchDto dto);
    void insertBatchItem(HrExpInsideBatchDto dto);
    void deleteBatchItem(@Param("seq") String seq);
    /** Bản gốc deleteExperienceInfo: dọn các dòng rỗng (LOCAL_NAME null) khi mở trang. */
    void deleteEmptyBatchItems();
    String selectPersonIdByEmpId(@Param("empId") String empId);

    HrExpInsideBatchDto selectCurrentEmpByEmpId(@Param("empId") String empId);

    // ── HR_RECRUIT_REGISTER_INFO (REGISTER_TYPE='14014410') ──────────────────
    List<HrRecruitBatchDto> selectRblRegisterList(HrRecruitBatchDto dto);

    // ── HR_EMPLOYEE_RECRUIT_BATCH ────────────────────────────────────────────
    int countRblBatchList(HrRecruitBatchDto dto);
    int countUnprocessedRblBatch(HrRecruitBatchDto dto);
    List<HrRecruitBatchDto> selectRblBatchListPage(HrRecruitBatchDto dto);
    String selectNextRblBatchSeq();
    void insertRblBatchItem(HrRecruitBatchDto dto);
    /** Bản gốc addEmptyRecruitInfo: thêm 1 dòng trống vào đợt đăng ký để nhập tay. */
    void insertEmptyRblBatchItem(@Param("seq") String seq, @Param("registerSeq") String registerSeq);
    void updateRblBatchItem(HrRecruitBatchDto dto);
    void deleteRblBatchItem(@Param("seq") String seq);
    /** Bản gốc deleteEmptyRecruitInfo: dọn các dòng rỗng (VIETNAM_NAME, KOREAN_NAME null) khi mở trang. */
    void deleteEmptyRblBatchItems();
    /** Đếm EMPID trùng ở HR_EMPLOYEE / HR_EMPLOYEE_RECRUIT / dòng chưa xử lý khác của HR_EMPLOYEE_RECRUIT_BATCH. */
    int countExistingRblEmpId(@Param("empId") String empId, @Param("seq") String seq);

    // ── Check EMPID tồn tại trước khi Xác nhận ───────────────────────────────
    List<String> selectEmpIdsByPersonIds(@Param("personIds") List<String> personIds);
    List<String> selectEmpIdsByRegisterSeq(@Param("registerSeq") String registerSeq);
    List<String> selectExistingEmpIds(@Param("empIds") List<String> empIds);
}
