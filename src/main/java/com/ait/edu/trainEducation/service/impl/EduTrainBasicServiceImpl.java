package com.ait.edu.trainEducation.service.impl;

import com.ait.edu.trainEducation.dto.EduEmployeeDto;
import com.ait.edu.trainEducation.dto.EduFreeEmployeeDto;
import com.ait.edu.trainEducation.dto.EduPersonDto;
import com.ait.edu.trainEducation.dto.EduPlanManagerRowDto;
import com.ait.edu.trainEducation.dto.EduTrainBasicDto;
import com.ait.edu.trainEducation.dto.EduTrainBasicSearchDto;
import com.ait.edu.trainEducation.mapper.EduPlanManagerMapper;
import com.ait.edu.trainEducation.mapper.EduTrainBasicMapper;
import com.ait.edu.trainEducation.service.EduTrainBasicService;
import com.ait.exception.BusinessException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * Thông tin cơ bản đào tạo - chuyển từ TrainEducationSerImpl (trainBasicInformation, addTrainBasicInformationInfo,
 * trainBasicInformationInfo, updateTrainBasicInformationInfo, deleteTrainBasicInformation, queryAllPlan) của dự án Hanwha_HTSV.
 * Khác bản gốc:
 * - Giảng viên / nhân viên theo kế hoạch lấy lại từ kế hoạch ở BE; giảng viên đánh giá, nhân viên chỉ định thực tế,
 *   đối tượng thực tế chỉ được chọn trong phạm vi hợp lệ (bản gốc tin dữ liệu ẩn trên form).
 * - Phiếu đánh giá giảng viên / kết quả đào tạo được đồng bộ theo danh sách học viên (thêm phiếu còn thiếu, chỉ xóa
 *   phiếu của học viên/giảng viên không còn trong khóa). Bản gốc khi sửa xóa toàn bộ phiếu đánh giá giảng viên rồi tạo
 *   lại (mất điểm đã đánh giá) và không tạo phiếu kết quả đào tạo cho học viên thêm mới.
 * - Học viên của phiếu đánh giá: đối tượng thực tế; nếu chưa chọn thì dùng nhân viên chỉ định + tự chọn + đăng ký
 *   (bản gốc: thêm mới dùng chỉ định + tự chọn, sửa lại dùng đối tượng thực tế).
 */
@Service
public class EduTrainBasicServiceImpl implements EduTrainBasicService {
    private static final Logger log = LoggerFactory.getLogger(EduTrainBasicServiceImpl.class);

    private static final String FLAG_ACT = "1";
    private static final String FLAG_FREE = "2";
    private static final String FLAG_APPLY = "3";

    @Autowired
    private EduTrainBasicMapper mapper;

    /** Dùng lại: thông tin kế hoạch, nhân viên theo phòng ban, xóa dây chuyền dữ liệu phát sinh của thông tin cơ bản. */
    @Autowired
    private EduPlanManagerMapper planMapper;

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<EduTrainBasicDto> getList(EduTrainBasicSearchDto search) throws BusinessException {
        log.info("getList - search={}", search);
        try {
            search.setCourseName(trimToNull(search.getCourseName()));
            List<EduTrainBasicDto> rows = mapper.selectList(search);
            log.info("getList - found {} rows", rows.size());
            return rows;
        } catch (Exception e) {
            log.error("getList failed - search={}", search, e);
            throw new BusinessException("EDU_BASIC_LOAD", "common.loadFail", e);
        }
    }

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public EduTrainBasicDto getOne(String basicNo) throws BusinessException {
        log.info("getOne - basicNo={}", basicNo);
        try {
            EduTrainBasicDto dto = mapper.selectOne(basicNo);
            if (dto == null) {
                throw new BusinessException("EDU_BASIC_NOT_FOUND", "common.noData");
            }
            fillDetail(dto);
            return dto;
        } catch (BusinessException e) {
            throw e;
        } catch (Exception e) {
            log.error("getOne failed - basicNo={}", basicNo, e);
            throw new BusinessException("EDU_BASIC_LOAD", "common.loadFail", e);
        }
    }

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<EduPlanManagerRowDto> getAvailablePlans() throws BusinessException {
        log.info("getAvailablePlans");
        try {
            return planMapper.selectAvailableForBasic();
        } catch (Exception e) {
            log.error("getAvailablePlans failed", e);
            throw new BusinessException("EDU_BASIC_LOAD", "common.loadFail", e);
        }
    }

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public EduTrainBasicDto getPlanDefaults(String planNo) throws BusinessException {
        log.info("getPlanDefaults - planNo={}", planNo);
        try {
            EduPlanManagerRowDto plan = planMapper.selectOne(planNo);
            if (plan == null) {
                throw new BusinessException("EDU_BASIC_INVALID", "edu.trainBasicInformation.XINGWEIBUTIANXIANG.a");
            }
            EduTrainBasicDto dto = new EduTrainBasicDto();
            applyPlan(dto, plan);
            dto.setImpleStartDate(plan.getPlanStartdate());
            dto.setImpleEndDate(plan.getPlanEnddate());
            dto.setImpleClassHour(plan.getClassHour());
            dto.setImpleClassUnit(plan.getClassUnit());
            dto.setTrainFormCodeName(plan.getTrainFormCodeName());
            dto.setTrainTypeCodeName(plan.getTrainTypeCodeName());
            dto.setEvaTeachers(new ArrayList<>(dto.getComTeachers()));
            // Bản gốc: nhân viên chỉ định thực tế mặc định = toàn bộ nhân viên theo kế hoạch
            dto.setActEmployees(new ArrayList<>(dto.getPlanEmployees()));
            return dto;
        } catch (BusinessException e) {
            throw e;
        } catch (Exception e) {
            log.error("getPlanDefaults failed - planNo={}", planNo, e);
            throw new BusinessException("EDU_BASIC_LOAD", "common.loadFail", e);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public String save(EduTrainBasicDto dto) throws BusinessException {
        boolean isNew = !StringUtils.hasText(dto.getBasicNo());
        try {
            return isNew ? insert(dto) : update(dto);
        } catch (BusinessException e) {
            throw e;
        } catch (Exception e) {
            log.error("save failed - basicNo={}, planNo={}", dto.getBasicNo(), dto.getPlanNo(), e);
            throw new BusinessException("EDU_BASIC_SAVE", isNew ? "alert.message.add_fail" : "alert.message.update_fail", e);
        }
    }

    private String insert(EduTrainBasicDto dto) throws BusinessException {
        log.info("insert - planNo={}", dto.getPlanNo());
        EduPlanManagerRowDto plan = StringUtils.hasText(dto.getPlanNo()) ? planMapper.selectOne(dto.getPlanNo()) : null;
        if (plan == null) {
            throw new BusinessException("EDU_BASIC_INVALID", "edu.trainBasicInformation.XINGWEIBUTIANXIANG.a");
        }
        EduTrainBasicDto row = new EduTrainBasicDto();
        applyPlan(row, plan);
        copyEditable(dto, row);
        row.setEvaTeachers(restrict(dto.getEvaTeachers(), row.getComTeachers()));
        row.setActEmployees(restrict(dto.getActEmployees(), row.getPlanEmployees()));
        row.setFreeEmployees(clean(dto.getFreeEmployees()));
        row.setFinalStudents(restrict(dto.getFinalStudents(), union(row.getActEmployees(), row.getFreeEmployees())));
        writeRaw(row);

        if (mapper.markPlanUsed(plan.getPlanNo()) == 0) {
            // Kế hoạch đã được tạo thông tin cơ bản ở phiên khác
            throw new BusinessException("EDU_BASIC_PLAN_USED", "edu.trainBasic.msg.planUsed");
        }
        row.setBasicNo(mapper.selectNextNo());
        mapper.insert(row);
        row.getActEmployees().forEach(p -> mapper.insertFreeEmployee(row.getBasicNo(), p.getEmpId(), p.getName(), FLAG_ACT));
        row.getFreeEmployees().forEach(p -> mapper.insertFreeEmployee(row.getBasicNo(), p.getEmpId(), p.getName(), FLAG_FREE));
        row.getFinalStudents().forEach(p -> mapper.insertFinalStudent(row.getBasicNo(), p.getEmpId(), p.getName()));
        syncEvaluationSheets(row.getBasicNo(), row.getComTeachers(),
                participants(row.getFinalStudents(), union(row.getActEmployees(), row.getFreeEmployees())));
        mapper.insertCostManager(row.getBasicNo());
        log.info("insert - basicNo={}, act={}, free={}, final={}", row.getBasicNo(), row.getActEmployees().size(),
                row.getFreeEmployees().size(), row.getFinalStudents().size());
        return "alert.message.add_success";
    }

    private String update(EduTrainBasicDto dto) throws BusinessException {
        log.info("update - basicNo={}", dto.getBasicNo());
        EduTrainBasicDto row = mapper.selectOne(dto.getBasicNo());
        if (row == null) {
            throw new BusinessException("EDU_BASIC_NOT_FOUND", "alert.message.update_fail");
        }
        fillDetail(row);
        String basicNo = row.getBasicNo();
        copyEditable(dto, row);
        row.setEvaTeachers(restrict(dto.getEvaTeachers(), row.getComTeachers()));
        writeRaw(row);
        mapper.update(row);

        // Nhân viên chỉ định (chỉ trong phạm vi kế hoạch) và tự chọn: xóa người bị bỏ, thêm người mới (bản gốc)
        List<EduPersonDto> newAct = restrict(dto.getActEmployees(), row.getPlanEmployees());
        List<EduPersonDto> newFree = clean(dto.getFreeEmployees());
        syncStudents(basicNo, row.getActEmployees(), newAct, FLAG_ACT);
        syncStudents(basicNo, row.getFreeEmployees(), newFree, FLAG_FREE);

        // Đối tượng thực tế: xóa hết rồi thêm lại (bản gốc)
        List<EduPersonDto> allowedFinal = union(union(newAct, newFree), union(row.getApplyEmployees(), row.getPlanEmployees()));
        List<EduPersonDto> newFinal = restrict(dto.getFinalStudents(), allowedFinal);
        mapper.deleteFinalStudents(basicNo);
        newFinal.forEach(p -> mapper.insertFinalStudent(basicNo, p.getEmpId(), p.getName()));

        syncEvaluationSheets(basicNo, row.getComTeachers(),
                participants(newFinal, union(union(newAct, newFree), row.getApplyEmployees())));
        log.info("update - basicNo={}, act={}, free={}, final={}", basicNo, newAct.size(), newFree.size(), newFinal.size());
        return "alert.message.update_success";
    }

    /** Bản gốc deleteTrainBasicInformation: trả kế hoạch về chưa dùng + xóa dữ liệu phát sinh (dùng lại EduPlanManagerMapper). */
    @Override
    @Transactional(rollbackFor = Exception.class)
    public void delete(String basicNo) throws BusinessException {
        log.info("delete - basicNo={}", basicNo);
        try {
            if (mapper.selectOne(basicNo) == null) {
                throw new BusinessException("EDU_BASIC_NOT_FOUND", "alert.message.delete_fail");
            }
            mapper.releasePlan(basicNo);
            planMapper.deactivateBasicInformation(basicNo);
            planMapper.deleteFreeEmployee(basicNo);
            planMapper.deleteStudentCheck(basicNo);
            planMapper.deleteTeacherCheck(basicNo);
            planMapper.deleteTrainResult(basicNo);
            planMapper.deleteCostManager(basicNo);
            planMapper.deleteFinalStudent(basicNo);
            planMapper.deleteTrainMaker(basicNo);
            planMapper.deleteStudentApply(basicNo);
        } catch (BusinessException e) {
            throw e;
        } catch (Exception e) {
            log.error("delete failed - basicNo={}", basicNo, e);
            throw new BusinessException("EDU_BASIC_DELETE", "alert.message.delete_fail", e);
        }
    }

    // ==================== Hỗ trợ ====================

    /** Thông tin lấy từ kế hoạch: loại hình, tên khóa học, hình thức, địa điểm, kỳ, giảng viên, nhân viên chỉ định. */
    private void applyPlan(EduTrainBasicDto dto, EduPlanManagerRowDto plan) {
        dto.setPlanNo(plan.getPlanNo());
        dto.setTrainTypeCode(plan.getTrainTypeCode());
        dto.setCourseNameCode(plan.getCourseNameCode());
        dto.setTrainFormCode(plan.getTrainFormCode());
        dto.setTrainAddress(plan.getTrainAddress());
        dto.setPeriodTime(plan.getPeriodTime());
        // Kế hoạch: TEACHER_NAME = mã giảng viên khi chọn từ danh sách, TEACHER_NAME_EMPID = tên (xem EduPlanManagerRowDto)
        List<EduPersonDto> teachers = new ArrayList<>();
        if (StringUtils.hasText(plan.getTeacherNameEmpid()) && StringUtils.hasText(plan.getTeacherName())) {
            teachers.add(new EduPersonDto(plan.getTeacherName(), plan.getTeacherNameEmpid()));
        }
        dto.setComTeachers(teachers);
        List<EduPersonDto> planEmployees = pair(plan.getDesEmployee(), plan.getDesEmployeeName());
        if (planEmployees.isEmpty() && StringUtils.hasText(plan.getDesDepartment())) {
            // Bản gốc queryAllPlan: kế hoạch chỉ chọn phòng ban -> lấy nhân viên đang làm việc của các phòng ban đó
            for (EduEmployeeDto e : planMapper.selectEmployeesInDepts(split(plan.getDesDepartment()))) {
                planEmployees.add(new EduPersonDto(e.getEmpId(), e.getLocalName()));
            }
        }
        dto.setPlanEmployees(planEmployees);
    }

    private void copyEditable(EduTrainBasicDto from, EduTrainBasicDto to) {
        to.setImpleStartDate(from.getImpleStartDate());
        to.setImpleEndDate(from.getImpleEndDate());
        to.setImpleClassHour(trimToNull(from.getImpleClassHour()));
        to.setImpleClassUnit(trimToNull(from.getImpleClassUnit()));
        to.setTrainContent(trimToNull(from.getTrainContent()));
        to.setApplyEndDate(from.getApplyEndDate());
        to.setDesDepartments(from.getDesDepartments() == null ? new ArrayList<>()
                : from.getDesDepartments().stream().filter(StringUtils::hasText).distinct().collect(Collectors.toList()));
    }

    /** Ghi các danh sách vào cột CLOB dạng "a,b,c" (giữ nguyên cách lưu bản gốc). */
    private void writeRaw(EduTrainBasicDto row) {
        row.setDesDepartmentRaw(String.join(",", row.getDesDepartments()));
        row.setComTeacherEmpidRaw(joinIds(row.getComTeachers()));
        row.setComTeacherNameRaw(joinNames(row.getComTeachers()));
        row.setEvaTeacherEmpidRaw(joinIds(row.getEvaTeachers()));
        row.setEvaTeacherNameRaw(joinNames(row.getEvaTeachers()));
        row.setPlanEmployeeEmpidRaw(joinIds(row.getPlanEmployees()));
        row.setPlanEmployeeNameRaw(joinNames(row.getPlanEmployees()));
    }

    private void fillDetail(EduTrainBasicDto dto) {
        dto.setDesDepartments(split(dto.getDesDepartmentRaw()));
        dto.setComTeachers(pair(dto.getComTeacherEmpidRaw(), dto.getComTeacherNameRaw()));
        dto.setEvaTeachers(pair(dto.getEvaTeacherEmpidRaw(), dto.getEvaTeacherNameRaw()));
        dto.setPlanEmployees(pair(dto.getPlanEmployeeEmpidRaw(), dto.getPlanEmployeeNameRaw()));
        List<EduFreeEmployeeDto> students = mapper.selectFreeEmployees(dto.getBasicNo());
        dto.setActEmployees(byFlag(students, FLAG_ACT));
        dto.setFreeEmployees(byFlag(students, FLAG_FREE));
        dto.setApplyEmployees(byFlag(students, FLAG_APPLY));
        dto.setFinalStudents(mapper.selectFinalStudents(dto.getBasicNo()));
    }

    private void syncStudents(String basicNo, List<EduPersonDto> oldList, List<EduPersonDto> newList, String flag) {
        Set<String> oldIds = ids(oldList);
        Set<String> newIds = ids(newList);
        for (EduPersonDto p : oldList) {
            if (!newIds.contains(p.getEmpId())) {
                mapper.deleteFreeEmployee(basicNo, p.getEmpId());
                mapper.deleteStudentCheckOfStudent(basicNo, p.getEmpId());
            }
        }
        for (EduPersonDto p : newList) {
            if (!oldIds.contains(p.getEmpId())) {
                mapper.insertFreeEmployee(basicNo, p.getEmpId(), p.getName(), flag);
            }
        }
    }

    /** Phiếu kết quả đào tạo (mỗi học viên 1 phiếu) + phiếu đánh giá giảng viên (mỗi cặp giảng viên x học viên). */
    private void syncEvaluationSheets(String basicNo, List<EduPersonDto> teachers, List<EduPersonDto> students) {
        Set<String> resultIds = new HashSet<>(mapper.selectTrainResultEmpIds(basicNo));
        for (EduPersonDto s : students) {
            if (resultIds.add(s.getEmpId())) {
                mapper.insertTrainResult(basicNo, s.getEmpId(), s.getName());
            }
        }
        Set<String> existing = new HashSet<>(mapper.selectTeacherCheckKeys(basicNo));
        Set<String> wanted = new HashSet<>();
        for (EduPersonDto t : teachers) {
            for (EduPersonDto s : students) {
                String key = t.getEmpId() + "|" + s.getEmpId();
                wanted.add(key);
                if (!existing.contains(key)) {
                    mapper.insertTeacherCheck(basicNo, t.getEmpId(), t.getName(), s.getEmpId(), s.getName());
                }
            }
        }
        for (String key : existing) {
            if (!wanted.contains(key)) {
                String[] parts = key.split("\\|", -1);
                mapper.deleteTeacherCheck(basicNo, parts[0], parts[1]);
            }
        }
    }

    private List<EduPersonDto> participants(List<EduPersonDto> finals, List<EduPersonDto> fallback) {
        return finals.isEmpty() ? fallback : finals;
    }

    /** Chỉ giữ người có trong danh sách cho phép (tên lấy theo danh sách cho phép). */
    private List<EduPersonDto> restrict(List<EduPersonDto> selected, List<EduPersonDto> allowed) {
        Map<String, EduPersonDto> allowedMap = new LinkedHashMap<>();
        allowed.forEach(p -> allowedMap.putIfAbsent(p.getEmpId(), p));
        Set<String> seen = new HashSet<>();
        List<EduPersonDto> result = new ArrayList<>();
        for (EduPersonDto p : clean(selected)) {
            EduPersonDto a = allowedMap.get(p.getEmpId());
            if (a != null && seen.add(a.getEmpId())) {
                result.add(a);
            }
        }
        return result;
    }

    private List<EduPersonDto> clean(List<EduPersonDto> list) {
        if (list == null) {
            return new ArrayList<>();
        }
        Set<String> seen = new HashSet<>();
        return list.stream()
                .filter(p -> p != null && StringUtils.hasText(p.getEmpId()) && seen.add(p.getEmpId().trim()))
                .map(p -> new EduPersonDto(p.getEmpId().trim(), p.getName() == null ? "" : p.getName().replace(",", " ").trim()))
                .collect(Collectors.toList());
    }

    private List<EduPersonDto> union(List<EduPersonDto> a, List<EduPersonDto> b) {
        Map<String, EduPersonDto> map = new LinkedHashMap<>();
        a.forEach(p -> map.putIfAbsent(p.getEmpId(), p));
        b.forEach(p -> map.putIfAbsent(p.getEmpId(), p));
        return new ArrayList<>(map.values());
    }

    private List<EduPersonDto> byFlag(List<EduFreeEmployeeDto> students, String flag) {
        return students.stream().filter(s -> flag.equals(s.getFlag()))
                .map(s -> new EduPersonDto(s.getEmpId(), s.getLocalName())).collect(Collectors.toList());
    }

    private List<EduPersonDto> pair(String empIds, String names) {
        List<String> idList = split(empIds);
        List<String> nameList = split(names);
        List<EduPersonDto> result = new ArrayList<>();
        for (int i = 0; i < idList.size(); i++) {
            result.add(new EduPersonDto(idList.get(i), i < nameList.size() ? nameList.get(i) : ""));
        }
        return result;
    }

    private List<String> split(String value) {
        if (!StringUtils.hasText(value)) {
            return new ArrayList<>();
        }
        return Arrays.stream(value.split(",")).map(String::trim).filter(StringUtils::hasText).collect(Collectors.toList());
    }

    private Set<String> ids(List<EduPersonDto> list) {
        return list.stream().map(EduPersonDto::getEmpId).collect(Collectors.toSet());
    }

    private String joinIds(List<EduPersonDto> list) {
        return list.stream().map(EduPersonDto::getEmpId).collect(Collectors.joining(","));
    }

    private String joinNames(List<EduPersonDto> list) {
        return list.stream().map(EduPersonDto::getName).collect(Collectors.joining(","));
    }

    private String trimToNull(String value) {
        return StringUtils.hasText(value) ? value.trim() : null;
    }
}
