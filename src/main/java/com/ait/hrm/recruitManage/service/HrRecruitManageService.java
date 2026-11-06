package com.ait.hrm.recruitManage.service;

import com.ait.exception.BusinessException;
import com.ait.hrm.recruitManage.dto.HrEmployeeRecruitDto;
import com.ait.hrm.recruitManage.dto.HrEducationRecruitDto;
import com.ait.hrm.recruitManage.dto.HrWorkExperienceRecruitDto;
import com.ait.hrm.recruitManage.dto.HrFamilyRecruitDto;
import com.ait.hrm.recruitManage.dto.HrExpInsideBatchDto;
import com.ait.hrm.recruitManage.dto.HrRecruitBatchDto;
import com.ait.sy.sys.dto.DataTablesResponse;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

/**
 * Quản lý nhận việc (bản gốc RecruitManageSerImpl - dự án HTSV). Các method ném BusinessException dùng
 * errorCode = message key (messages*.properties) để frontend tự dịch thông báo.
 */
public interface HrRecruitManageService {

    // ── Danh sách nhận việc (HR_EMPLOYEE_RECRUIT) ──
    List<HrEmployeeRecruitDto> getEmployeeList(HrEmployeeRecruitDto search);

    HrEmployeeRecruitDto getEmployeeById(String personId);

    /** Tab Thông tin cơ bản: thêm mới / cập nhật. @return PERSON_ID */
    String saveEmployeeBasic(HrEmployeeRecruitDto dto) throws BusinessException;

    /** Tab Thông tin bổ sung. */
    void saveEmployeePersonal(HrEmployeeRecruitDto dto) throws BusinessException;

    void deleteEmployee(String personId) throws BusinessException;

    /** Danh sách tên công ty cung ứng lao động. */
    List<String> getPersonSupplierNames();

    /** Tab Hình ảnh: lưu file vào &lt;thư mục ảnh&gt;/&lt;cpnyId&gt;/&lt;EMPID&gt;.&lt;ext&gt; và cập nhật PHOTO_PATH. @return PHOTO_PATH */
    String uploadPhoto(String personId, MultipartFile file) throws BusinessException;

    // ── Giáo dục / Kinh nghiệm / Gia đình ──
    List<HrEducationRecruitDto> getEducationList(String personId);

    void saveEducation(HrEducationRecruitDto dto) throws BusinessException;

    void deleteEducation(Long seq) throws BusinessException;

    List<HrWorkExperienceRecruitDto> getWorkExpList(String personId);

    void saveWorkExp(HrWorkExperienceRecruitDto dto) throws BusinessException;

    void deleteWorkExp(Long seq) throws BusinessException;

    List<HrFamilyRecruitDto> getFamilyList(String personId);

    void saveFamily(HrFamilyRecruitDto dto) throws BusinessException;

    void deleteFamily(Long seq) throws BusinessException;

    /**
     * Xác nhận / kéo lại quyết định nhận việc (PKG_RECRUIT_MANAGE.PR_RECRUIT_EXECUTE).
     * type = CONFIRM | CANCEL (ids = danh sách PERSON_ID, phân cách dấu phẩy) hoặc CONFIRM_BATCH | EXP_BATCH (ids = SEQ đợt đăng ký).
     */
    Map<String, Object> executeRecruit(String ids, String type);

    // ── Quyết định hàng loạt ──
    List<HrExpInsideBatchDto> getRegisterList();
    Map<String, Object> saveRegister(HrExpInsideBatchDto dto);
    DataTablesResponse<HrExpInsideBatchDto> getBatchList(HrExpInsideBatchDto dto);
    Map<String, Object> deleteBatchItem(String seq);
    Map<String, Object> importBatchExcel(MultipartFile file, String registerSeq);

    // ── Nhận việc hàng loạt ──
    List<HrRecruitBatchDto> getRblRegisterList();
    Map<String, Object> saveRblRegister(HrRecruitBatchDto dto);
    DataTablesResponse<HrRecruitBatchDto> getRblBatchList(HrRecruitBatchDto dto);
    /** Thêm 1 dòng trống vào đợt (nút "Thêm" bản gốc). @return SEQ dòng mới */
    String addEmptyRblBatchItem(String registerSeq) throws BusinessException;
    void updateRblBatchItem(HrRecruitBatchDto dto) throws BusinessException;
    Map<String, Object> deleteRblBatchItem(String seq);
    Map<String, Object> importRblBatchExcel(MultipartFile file, String registerSeq);
}
