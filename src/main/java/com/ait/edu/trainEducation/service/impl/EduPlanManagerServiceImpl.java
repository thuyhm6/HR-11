package com.ait.edu.trainEducation.service.impl;

import com.ait.edu.trainEducation.dto.EduCourseManagerDto;
import com.ait.edu.trainEducation.dto.EduEmployeeDto;
import com.ait.edu.trainEducation.dto.EduPlanManagerDto;
import com.ait.edu.trainEducation.dto.EduPlanManagerRowDto;
import com.ait.edu.trainEducation.dto.EduPlanTeacherDto;
import com.ait.edu.trainEducation.dto.EduTrainSyllabusDto;
import com.ait.edu.trainEducation.mapper.EduCourseManagerMapper;
import com.ait.edu.trainEducation.mapper.EduPlanManagerMapper;
import com.ait.edu.trainEducation.service.EduFileService;
import com.ait.edu.trainEducation.service.EduPlanManagerService;
import com.ait.exception.BusinessException;
import com.ait.util.I18nUtil;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * Kế hoạch đào tạo - chuyển từ TrainEducationSerImpl (planManager, addPlanManagerInfo, planManagerInfo, updatePlanManager,
 * deletePlanManager, teacherSearch, queryCourseSyllabus, deleteCourseSyllabus) và ExcelImportCtroller.importTrainPlan
 * của dự án Hanwha_HTSV.
 * Khác bản gốc:
 * - Không chọn nhân viên + không chọn phòng ban: để trống nhân viên chỉ định (bản gốc gán TOÀN BỘ nhân viên công ty vào
 *   chuỗi DES_EMPLOYEE, dễ vượt độ dài cột). Có phòng ban mà không chọn nhân viên: lấy nhân viên cả phòng ban con.
 * - Sửa kế hoạch ghi UPDATE_DATE/UPDATED_BY thay vì ghi đè CREATE_DATE/CREATED_BY.
 * - Import lịch đào tạo không qua bảng tạm EDU_TRAIN_SYLLABUS_TEMP; kiểm tra từng dòng trước khi thay lịch cũ.
 */
@Service
public class EduPlanManagerServiceImpl implements EduPlanManagerService {
    private static final Logger log = LoggerFactory.getLogger(EduPlanManagerServiceImpl.class);

    private static final int MAX_IMPORT_ROWS = 1000;

    @Autowired
    private EduPlanManagerMapper mapper;

    /** Dùng lại để lấy khóa học (loại hình, mã khóa học, tên) khi thêm kế hoạch. */
    @Autowired
    private EduCourseManagerMapper courseMapper;

    @Autowired
    private EduFileService fileService;

    @Autowired
    private Validator validator;

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<EduPlanManagerDto> getList(String trainDiffCode, String trainTypeCode, String courseNameCode)
            throws BusinessException {
        log.info("getList - trainDiffCode={}, trainTypeCode={}, courseNameCode={}", trainDiffCode, trainTypeCode, courseNameCode);
        try {
            List<EduPlanManagerDto> rows = mapper.selectList(trimToNull(trainDiffCode), trimToNull(trainTypeCode),
                    trimToNull(courseNameCode)).stream().map(this::toDto).collect(Collectors.toList());
            log.info("getList - found {} rows", rows.size());
            return rows;
        } catch (Exception e) {
            log.error("getList failed", e);
            throw new BusinessException("EDU_PLAN_LOAD", "common.loadFail", e);
        }
    }

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public EduPlanManagerDto getOne(String planNo) throws BusinessException {
        log.info("getOne - planNo={}", planNo);
        EduPlanManagerRowDto row;
        try {
            row = mapper.selectOne(planNo);
        } catch (Exception e) {
            log.error("getOne failed - planNo={}", planNo, e);
            throw new BusinessException("EDU_PLAN_LOAD", "common.loadFail", e);
        }
        if (row == null) {
            throw new BusinessException("EDU_PLAN_NOT_FOUND", "common.noData");
        }
        EduPlanManagerDto dto = toDto(row);
        dto.setFiles(fileService.getFiles(EduFileService.TYPE_PLAN_MANAGER, planNo));
        return dto;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public String save(EduPlanManagerDto dto) throws BusinessException {
        boolean isNew = !StringUtils.hasText(dto.getPlanNo());
        log.info("save - isNew={}, planNo={}, courseNo={}", isNew, dto.getPlanNo(), dto.getCourseNo());
        try {
            EduPlanManagerRowDto row = toRow(dto);
            if (isNew) {
                EduCourseManagerDto course = StringUtils.hasText(dto.getCourseNo()) ? courseMapper.selectOne(dto.getCourseNo()) : null;
                if (course == null) {
                    throw new BusinessException("EDU_PLAN_INVALID", "edu.planManager.msg.required");
                }
                row.setCourseNo(course.getCourseNo());
                row.setTrainTypeCode(course.getTrainTypeCode());
                row.setCourseNameCode(course.getCourseNameCode());
                row.setCourseNumber(course.getCourseNumber());
                String typeNo = course.getTrainTypeNo();
                row.setTrainDiffCode(typeNo != null && typeNo.length() >= 4 ? typeNo.substring(0, 4) : typeNo);
                String maxPeriod = mapper.selectMaxPeriodTime(course.getCourseNumber());
                row.setPeriodTime(String.valueOf(StringUtils.hasText(maxPeriod) ? Long.parseLong(maxPeriod) + 1 : 1));
                row.setPlanNo(mapper.selectNextNo());
                mapper.insert(row);
                log.info("save - inserted planNo={}, periodTime={}", row.getPlanNo(), row.getPeriodTime());
            } else {
                if (mapper.update(row) == 0) {
                    throw new BusinessException("EDU_PLAN_NOT_FOUND", "alert.message.update_fail");
                }
                int basics = mapper.updateBasicInformation(row);
                log.info("save - updated planNo={}, synced {} basic infos", row.getPlanNo(), basics);
            }
            return row.getPlanNo();
        } catch (BusinessException e) {
            throw e;
        } catch (Exception e) {
            log.error("save failed - planNo={}", dto.getPlanNo(), e);
            throw new BusinessException("EDU_PLAN_SAVE", isNew ? "alert.message.add_fail" : "alert.message.update_fail", e);
        }
    }

    /** Bản gốc: xóa lịch đào tạo + vô hiệu kế hoạch + dữ liệu phát sinh từ thông tin cơ bản tham chiếu kế hoạch. */
    @Override
    @Transactional(rollbackFor = Exception.class)
    public void delete(String planNo) throws BusinessException {
        log.info("delete - planNo={}", planNo);
        try {
            mapper.deleteSyllabusByPlan(planNo);
            if (mapper.deactivate(planNo) == 0) {
                throw new BusinessException("EDU_PLAN_NOT_FOUND", "alert.message.delete_fail");
            }
            for (String basicNo : mapper.selectBasicNos(planNo)) {
                mapper.deactivateBasicInformation(basicNo);
                mapper.deleteFreeEmployee(basicNo);
                mapper.deleteStudentCheck(basicNo);
                mapper.deleteTeacherCheck(basicNo);
                mapper.deleteTrainResult(basicNo);
                mapper.deleteCostManager(basicNo);
                mapper.deleteFinalStudent(basicNo);
                mapper.deleteTrainMaker(basicNo);
                mapper.deleteStudentApply(basicNo);
                log.info("delete - cleaned basicNo={}", basicNo);
            }
        } catch (BusinessException e) {
            throw e;
        } catch (Exception e) {
            log.error("delete failed - planNo={}", planNo, e);
            throw new BusinessException("EDU_PLAN_DELETE", "alert.message.delete_fail", e);
        }
    }

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<EduPlanTeacherDto> getTeachers(String keyword) throws BusinessException {
        log.info("getTeachers - keyword={}", keyword);
        try {
            return mapper.selectTeachers(trimToNull(keyword));
        } catch (Exception e) {
            log.error("getTeachers failed - keyword={}", keyword, e);
            throw new BusinessException("EDU_PLAN_LOAD", "common.loadFail", e);
        }
    }

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<EduTrainSyllabusDto> getSyllabus(String planNo) throws BusinessException {
        log.info("getSyllabus - planNo={}", planNo);
        try {
            return mapper.selectSyllabus(planNo);
        } catch (Exception e) {
            log.error("getSyllabus failed - planNo={}", planNo, e);
            throw new BusinessException("EDU_PLAN_LOAD", "common.loadFail", e);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public List<String> importSyllabus(String planNo, List<EduTrainSyllabusDto> rows) throws BusinessException {
        int size = rows == null ? 0 : rows.size();
        log.info("importSyllabus - planNo={}, rows={}", planNo, size);
        if (!StringUtils.hasText(planNo) || size == 0) {
            throw new BusinessException("EDU_PLAN_IMPORT_EMPTY", "common.noData");
        }
        if (size > MAX_IMPORT_ROWS) {
            throw new BusinessException("EDU_PLAN_IMPORT_TOO_MANY", "autoExcel.msg.tooLong");
        }
        try {
            if (mapper.selectOne(planNo) == null) {
                throw new BusinessException("EDU_PLAN_NOT_FOUND", "common.noData");
            }
            List<String> errors = new ArrayList<>();
            for (int i = 0; i < size; i++) {
                for (ConstraintViolation<EduTrainSyllabusDto> v : validator.validate(rows.get(i))) {
                    errors.add(I18nUtil.getMessage("edu.common.msg.row") + " " + (i + 2) + ": "
                            + v.getPropertyPath() + " - " + I18nUtil.getMessage(v.getMessage()));
                }
            }
            if (!errors.isEmpty()) {
                log.warn("importSyllabus - {} errors, nothing saved", errors.size());
                return errors;
            }
            int deleted = mapper.deleteSyllabusByPlan(planNo);
            for (EduTrainSyllabusDto row : rows) {
                row.setPlanNo(planNo);
                mapper.insertSyllabus(row);
            }
            log.info("importSyllabus - replaced {} old rows by {} rows", deleted, size);
            return errors;
        } catch (BusinessException e) {
            throw e;
        } catch (Exception e) {
            log.error("importSyllabus failed - planNo={}", planNo, e);
            throw new BusinessException("EDU_PLAN_IMPORT", "alert.message.add_fail", e);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void deleteSyllabus(String planNo, String syllNo) throws BusinessException {
        log.info("deleteSyllabus - planNo={}, syllNo={}", planNo, syllNo);
        try {
            if (mapper.deleteSyllabus(planNo, syllNo) == 0) {
                throw new BusinessException("EDU_PLAN_SYLLABUS_NOT_FOUND", "alert.message.delete_fail");
            }
        } catch (BusinessException e) {
            throw e;
        } catch (Exception e) {
            log.error("deleteSyllabus failed - syllNo={}", syllNo, e);
            throw new BusinessException("EDU_PLAN_SYLLABUS_DELETE", "alert.message.delete_fail", e);
        }
    }

    // ==================== Chuyển đổi DTO <-> dòng lưu trữ ====================

    private EduPlanManagerRowDto toRow(EduPlanManagerDto dto) {
        EduPlanManagerRowDto row = new EduPlanManagerRowDto();
        row.setPlanNo(dto.getPlanNo());
        row.setPlanStartdate(dto.getPlanStartdate());
        row.setPlanEnddate(dto.getPlanEnddate());
        row.setClassHour(dto.getClassHour());
        row.setClassUnit(StringUtils.hasText(dto.getClassUnit()) ? dto.getClassUnit() : "2");
        row.setTrainFormCode(dto.getTrainFormCode());
        row.setIsnotTest(dto.getIsnotTest());
        row.setIsnotApply(StringUtils.hasText(dto.getIsnotApply()) ? dto.getIsnotApply() : "Y");
        row.setBudget(dto.getBudget());
        row.setBudgetShow("Y".equals(dto.getBudgetShow()) ? "Y" : "N");
        row.setDepartManaCode(dto.getDepartManaCode());
        row.setTrainAddress(dto.getTrainAddress());
        row.setTrainPersonCount(dto.getTrainPersonCount());
        row.setTrainPersonRemark(dto.getTrainPersonRemark());
        row.setIsnotEvaluate(StringUtils.hasText(dto.getIsnotEvaluate()) ? dto.getIsnotEvaluate() : "0");
        row.setIsnotReport(dto.getIsnotReport());
        row.setIsnotAgreement(dto.getIsnotAgreement());

        // Giảng viên: chọn từ danh sách -> TEACHER_NAME = mã nhân viên, TEACHER_NAME_EMPID = tên; nhập tự do -> chỉ TEACHER_NAME
        String teacherName = trimToNull(dto.getTeacherName());
        if (StringUtils.hasText(dto.getTeacherEmpId())) {
            row.setTeacherName(dto.getTeacherEmpId().trim());
            row.setTeacherNameEmpid(teacherName);
        } else {
            row.setTeacherName(teacherName);
            row.setTeacherNameEmpid(null);
        }

        List<String> depts = nonBlank(dto.getDesDepartments());
        row.setDesDepartment(depts.isEmpty() ? null : String.join(",", depts));
        Map<String, String> employees = new LinkedHashMap<>();
        List<String> empIds = nonBlank(dto.getDesEmployees());
        List<String> empNames = dto.getDesEmployeeNames() == null ? Collections.emptyList() : dto.getDesEmployeeNames();
        for (int i = 0; i < empIds.size(); i++) {
            employees.put(empIds.get(i), i < empNames.size() && empNames.get(i) != null ? empNames.get(i) : "");
        }
        if (employees.isEmpty() && !depts.isEmpty()) {
            for (EduEmployeeDto e : mapper.selectEmployeesInDepts(depts)) {
                employees.put(e.getEmpId(), e.getLocalName());
            }
        }
        row.setDesEmployee(employees.isEmpty() ? null : String.join(",", employees.keySet()));
        row.setDesEmployeeName(employees.isEmpty() ? null : String.join(",", employees.values()));
        return row;
    }

    private EduPlanManagerDto toDto(EduPlanManagerRowDto row) {
        EduPlanManagerDto dto = new EduPlanManagerDto();
        dto.setPlanNo(row.getPlanNo());
        dto.setCourseNo(row.getCourseNo());
        dto.setTrainDiffCode(row.getTrainDiffCode());
        dto.setTrainDiffName(StringUtils.hasText(row.getTrainDiffName()) ? row.getTrainDiffName() : row.getTrainDiffCode());
        dto.setTrainTypeCode(row.getTrainTypeCode());
        dto.setTrainTypeCodeName(row.getTrainTypeCodeName());
        dto.setCourseNameCode(row.getCourseNameCode());
        dto.setCourseNumber(row.getCourseNumber());
        dto.setPeriodTime(row.getPeriodTime());
        dto.setPlanStartdate(row.getPlanStartdate());
        dto.setPlanEnddate(row.getPlanEnddate());
        dto.setClassHour(row.getClassHour());
        dto.setClassUnit(row.getClassUnit());
        dto.setTrainFormCode(row.getTrainFormCode());
        dto.setTrainFormCodeName(row.getTrainFormCodeName());
        dto.setIsnotTest(row.getIsnotTest());
        dto.setIsnotApply(row.getIsnotApply());
        dto.setDesDepartments(split(row.getDesDepartment()));
        dto.setDesEmployees(split(row.getDesEmployee()));
        dto.setDesEmployeeNames(split(row.getDesEmployeeName()));
        dto.setBudget(row.getBudget());
        dto.setBudgetShow(row.getBudgetShow());
        dto.setDepartManaCode(row.getDepartManaCode());
        // Bản gốc: nếu mã phòng ban không dịch được tên thì hiển thị nguyên giá trị đã nhập
        dto.setDepartManaCodeName(StringUtils.hasText(row.getDepartManaCodeName()) ? row.getDepartManaCodeName() : row.getDepartManaCode());
        if (StringUtils.hasText(row.getTeacherNameEmpid())) {
            dto.setTeacherEmpId(row.getTeacherName());
            dto.setTeacherName(row.getTeacherNameEmpid());
        } else {
            dto.setTeacherName(row.getTeacherName());
        }
        dto.setTrainAddress(row.getTrainAddress());
        dto.setTrainPersonCount(row.getTrainPersonCount());
        dto.setTrainPersonRemark(row.getTrainPersonRemark());
        dto.setIsnotEvaluate(row.getIsnotEvaluate());
        dto.setIsnotReport(row.getIsnotReport());
        dto.setIsnotAgreement(row.getIsnotAgreement());
        dto.setSyllabusCount(row.getSyllabusCount());
        return dto;
    }

    private List<String> split(String value) {
        if (!StringUtils.hasText(value)) {
            return new ArrayList<>();
        }
        return Arrays.stream(value.split(",")).map(String::trim).collect(Collectors.toList());
    }

    private List<String> nonBlank(List<String> values) {
        if (values == null) {
            return new ArrayList<>();
        }
        return values.stream().filter(StringUtils::hasText).map(String::trim).distinct().collect(Collectors.toList());
    }

    private String trimToNull(String value) {
        return StringUtils.hasText(value) ? value.trim() : null;
    }
}
