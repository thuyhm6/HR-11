package com.ait.edu.trainEducation.service.impl;

import com.ait.edu.trainEducation.dto.EduCourseApplyCourseDto;
import com.ait.edu.trainEducation.dto.EduCourseApplyFlagDto;
import com.ait.edu.trainEducation.dto.EduCourseApplyRowDto;
import com.ait.edu.trainEducation.dto.EduCourseApplySearchDto;
import com.ait.edu.trainEducation.dto.EduCourseApplySubmitDto;
import com.ait.edu.trainEducation.dto.EduEmployeeDto;
import com.ait.edu.trainEducation.dto.EduTrainBasicDto;
import com.ait.edu.trainEducation.mapper.EduCourseApplyMapper;
import com.ait.edu.trainEducation.mapper.EduTrainBasicMapper;
import com.ait.edu.trainEducation.service.EduCourseApplyService;
import com.ait.exception.BusinessException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * Quy trình đăng ký khóa đào tạo: nhân viên đăng ký (kèm danh sách người phê duyệt) -> người phê duyệt duyệt / từ chối ->
 * quản lý đào tạo xác nhận (thêm vào học viên của khóa) -> theo dõi / hủy đơn chưa xử lý.
 * Thêm học viên dùng lại EduTrainBasicMapper (EDU_FREE_EMPLOYEE, phiếu kết quả, phiếu đánh giá giảng viên).
 */
@Service
public class EduCourseApplyServiceImpl implements EduCourseApplyService {

    private static final Logger log = LoggerFactory.getLogger(EduCourseApplyServiceImpl.class);
    private static final DateTimeFormatter DMY = DateTimeFormatter.ofPattern("dd/MM/yyyy");
    /** EDU_FREE_EMPLOYEE.FLAG của học viên vào khóa qua đăng ký (bản gốc FLAG = '3'). */
    private static final String FLAG_APPLY = "3";
    private static final String APPROVED = "2";

    @Autowired
    private EduCourseApplyMapper mapper;

    @Autowired
    private EduTrainBasicMapper basicMapper;

    // ==================== Đăng ký ====================

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<EduCourseApplyCourseDto> getApplyCourses(EduCourseApplySearchDto search) throws BusinessException {
        log.info("getApplyCourses - search={}", search);
        normalize(search, false);
        try {
            List<EduCourseApplyCourseDto> rows = mapper.selectApplyCourses(search, null);
            log.info("getApplyCourses - found {} rows", rows.size());
            return rows;
        } catch (Exception e) {
            log.error("getApplyCourses failed - search={}", search, e);
            throw new BusinessException("EDU_APPLY_LOAD", "common.loadFail", e);
        }
    }

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<EduEmployeeDto> getDefaultMakers() throws BusinessException {
        log.info("getDefaultMakers");
        try {
            return mapper.selectDefaultMakers();
        } catch (Exception e) {
            log.error("getDefaultMakers failed", e);
            throw new BusinessException("EDU_APPLY_LOAD", "common.loadFail", e);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public int submit(EduCourseApplySubmitDto dto) throws BusinessException {
        List<String> basicNos = dto.getCourses().stream().map(c -> c.getBasicNo().trim()).distinct().collect(Collectors.toList());
        List<String> makers = new ArrayList<>(new LinkedHashSet<>(dto.getMakerPersonIds().stream()
                .filter(StringUtils::hasText).map(String::trim).collect(Collectors.toList())));
        log.info("submit - basicNos={}, makers={}", basicNos, makers);
        if (makers.isEmpty()) {
            throw new BusinessException("EDU_APPLY_INVALID", "edu.courseApply.msg.selectMaker");
        }
        try {
            // Kiểm tra lại quyền đăng ký (còn hạn, thuộc danh sách chỉ định, chưa đăng ký) - không tin dữ liệu client
            Set<String> allowed = mapper.selectApplyCourses(null, basicNos).stream()
                    .map(EduCourseApplyCourseDto::getBasicNo).collect(Collectors.toSet());
            if (!allowed.containsAll(basicNos)) {
                throw new BusinessException("EDU_APPLY_NOT_ALLOWED", "edu.courseApply.msg.notAllowed");
            }
            Set<String> done = new HashSet<>();
            for (EduCourseApplySubmitDto.Item item : dto.getCourses()) {
                String basicNo = item.getBasicNo().trim();
                if (!done.add(basicNo)) continue;
                String applyNo = mapper.selectNextApplyNo();
                String task = StringUtils.hasText(item.getApplyTask()) ? item.getApplyTask().trim() : null;
                mapper.insertApply(applyNo, basicNo, task);
                // Bản gốc: người phê duyệt cuối có MAKER_LEVEL = số cấp, các cấp trước = 0
                for (int i = 0; i < makers.size(); i++) {
                    int level = i == makers.size() - 1 ? makers.size() : 0;
                    if (mapper.insertMaker(applyNo, makers.get(i), level) == 0) {
                        throw new BusinessException("EDU_APPLY_INVALID", "edu.courseApply.msg.selectMaker");
                    }
                }
            }
            log.info("submit - applied {} courses", done.size());
            return done.size();
        } catch (BusinessException e) {
            throw e;
        } catch (Exception e) {
            log.error("submit failed - basicNos={}", basicNos, e);
            throw new BusinessException("EDU_APPLY_SAVE", "alert.message.add_fail", e);
        }
    }

    // ==================== Phê duyệt ====================

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<EduCourseApplyRowDto> getMakerRows(EduCourseApplySearchDto search) throws BusinessException {
        log.info("getMakerRows - search={}", search);
        normalize(search, false);
        try {
            return mapper.selectMakerRows(search);
        } catch (Exception e) {
            log.error("getMakerRows failed - search={}", search, e);
            throw new BusinessException("EDU_APPLY_LOAD", "common.loadFail", e);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public int updateApplyFlag(EduCourseApplyFlagDto dto) throws BusinessException {
        log.info("updateApplyFlag - applyNos={}, flag={}", dto.getApplyNos(), dto.getFlag());
        try {
            int count = 0;
            for (String applyNo : distinct(dto.getApplyNos())) {
                if (mapper.updateApplyFlag(applyNo, dto.getFlag()) > 0) count++;
            }
            if (count == 0) {
                throw new BusinessException("EDU_APPLY_NOT_ALLOWED", "pa.salary.canShu.caozuo_fail");
            }
            log.info("updateApplyFlag - updated {} applies", count);
            return count;
        } catch (BusinessException e) {
            throw e;
        } catch (Exception e) {
            log.error("updateApplyFlag failed - applyNos={}", dto.getApplyNos(), e);
            throw new BusinessException("EDU_APPLY_SAVE", "pa.salary.canShu.caozuo_fail", e);
        }
    }

    // ==================== Xác nhận ====================

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<EduCourseApplyRowDto> getConfirmRows(EduCourseApplySearchDto search) throws BusinessException {
        log.info("getConfirmRows - search={}", search);
        normalize(search, true);
        try {
            return mapper.selectConfirmRows(search);
        } catch (Exception e) {
            log.error("getConfirmRows failed - search={}", search, e);
            throw new BusinessException("EDU_APPLY_LOAD", "common.loadFail", e);
        }
    }

    /**
     * Bản gốc updateCourseConfirm. Khác bản gốc: đồng ý chỉ thêm học viên (FLAG 3) khi nhân viên chưa là học viên của khóa
     * (bản gốc xóa dòng FLAG 1 rồi thêm FLAG 3 - khi đổi lại "chờ" thì nhân viên mất hẳn khỏi khóa); chờ / từ chối chỉ bỏ
     * dòng FLAG 3, phiếu kết quả / đánh giá chỉ xóa khi nhân viên không còn là học viên.
     */
    @Override
    @Transactional(rollbackFor = Exception.class)
    public int updateConfirmFlag(EduCourseApplyFlagDto dto) throws BusinessException {
        log.info("updateConfirmFlag - applyNos={}, flag={}", dto.getApplyNos(), dto.getFlag());
        try {
            int count = 0;
            for (String applyNo : distinct(dto.getApplyNos())) {
                EduCourseApplyRowDto row = mapper.selectApprovedApply(applyNo);
                if (row == null || !StringUtils.hasText(row.getEmpId())) {
                    log.warn("updateConfirmFlag - applyNo={} not approved / employee not found, skip", applyNo);
                    continue;
                }
                mapper.updateConfirmFlag(applyNo, dto.getFlag());
                if (APPROVED.equals(dto.getFlag())) {
                    addStudent(row);
                } else {
                    removeStudent(row);
                }
                count++;
            }
            if (count == 0) {
                throw new BusinessException("EDU_APPLY_NOT_ALLOWED", "alert.message.update_fail");
            }
            log.info("updateConfirmFlag - updated {} applies", count);
            return count;
        } catch (BusinessException e) {
            throw e;
        } catch (Exception e) {
            log.error("updateConfirmFlag failed - applyNos={}", dto.getApplyNos(), e);
            throw new BusinessException("EDU_APPLY_SAVE", "alert.message.update_fail", e);
        }
    }

    private void addStudent(EduCourseApplyRowDto row) {
        String basicNo = row.getBasicNo();
        String empId = row.getEmpId();
        String name = row.getStuLocalName();
        if (mapper.countFreeEmployee(basicNo, empId, null) == 0) {
            basicMapper.insertFreeEmployee(basicNo, empId, name, FLAG_APPLY);
        }
        // Phiếu kết quả đào tạo + phiếu đánh giá từng giảng viên của khóa cho học viên (bản gốc insertEduTrainResult,
        // insertEduTeacherCheck)
        if (!basicMapper.selectTrainResultEmpIds(basicNo).contains(empId)) {
            basicMapper.insertTrainResult(basicNo, empId, name);
        }
        EduTrainBasicDto basic = basicMapper.selectOne(basicNo);
        if (basic == null) return;
        List<String> teacherIds = split(basic.getComTeacherEmpidRaw());
        List<String> teacherNames = split(basic.getComTeacherNameRaw());
        Set<String> existing = new HashSet<>(basicMapper.selectTeacherCheckKeys(basicNo));
        for (int i = 0; i < teacherIds.size(); i++) {
            String teaId = teacherIds.get(i);
            if (existing.add(teaId + "|" + empId)) {
                basicMapper.insertTeacherCheck(basicNo, teaId, i < teacherNames.size() ? teacherNames.get(i) : "", empId, name);
            }
        }
    }

    private void removeStudent(EduCourseApplyRowDto row) {
        String basicNo = row.getBasicNo();
        String empId = row.getEmpId();
        mapper.deleteFreeEmployeeByFlag(basicNo, empId, FLAG_APPLY);
        if (mapper.countFreeEmployee(basicNo, empId, null) == 0) {
            mapper.deleteTrainResultOfStudent(basicNo, empId);
            mapper.deleteTeacherCheckOfStudent(basicNo, empId);
            basicMapper.deleteStudentCheckOfStudent(basicNo, empId);
        }
    }

    // ==================== Tình hình ====================

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<EduCourseApplyRowDto> getSituationRows(EduCourseApplySearchDto search) throws BusinessException {
        log.info("getSituationRows - search={}", search);
        normalize(search, true);
        if (!search.isAllApplicants()) {
            // Nhân viên thường chỉ xem đơn của mình (bản gốc ẩn điều kiện phòng ban / nhân viên)
            search.setDeptNo(null);
            search.setKeyword(null);
        }
        try {
            return mapper.selectSituationRows(search);
        } catch (Exception e) {
            log.error("getSituationRows failed - search={}", search, e);
            throw new BusinessException("EDU_APPLY_LOAD", "common.loadFail", e);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void cancel(String applyNo, boolean manager) throws BusinessException {
        log.info("cancel - applyNo={}, manager={}", applyNo, manager);
        if (!StringUtils.hasText(applyNo)) {
            throw new BusinessException("EDU_APPLY_INVALID", "edu.systemManager.QINGXUANZEQIZHONGYIXIANG.a");
        }
        try {
            if (mapper.countCancelable(applyNo.trim(), manager) == 0) {
                throw new BusinessException("EDU_APPLY_NOT_ALLOWED", "edu.courseApply.msg.cannotCancel");
            }
            mapper.deleteMakersOfApply(applyNo.trim());
            mapper.deleteApply(applyNo.trim());
        } catch (BusinessException e) {
            throw e;
        } catch (Exception e) {
            log.error("cancel failed - applyNo={}", applyNo, e);
            throw new BusinessException("EDU_APPLY_DELETE", "alert.message.delete_fail", e);
        }
    }

    // ==================== Hỗ trợ ====================

    /**
     * Chuẩn hóa điều kiện tìm; defaultMonth = true: không nhập thời gian thì lấy tháng hiện tại (bản gốc courseConfirm,
     * makerSituation).
     */
    private void normalize(EduCourseApplySearchDto search, boolean defaultMonth) throws BusinessException {
        search.setKeyword(trimToNull(search.getKeyword()));
        search.setDeptNo(trimToNull(search.getDeptNo()));
        search.setCourseName(trimToNull(search.getCourseName()));
        search.setFlag(trimToNull(search.getFlag()));
        if (search.getFlag() != null && !search.getFlag().matches("^[012]$")) {
            search.setFlag(null);
        }
        LocalDate today = LocalDate.now();
        search.setStartDate(checkDate(search.getStartDate(), defaultMonth ? today.withDayOfMonth(1) : null));
        search.setEndDate(checkDate(search.getEndDate(), defaultMonth ? today.withDayOfMonth(today.lengthOfMonth()) : null));
    }

    private static String checkDate(String value, LocalDate defaultValue) throws BusinessException {
        if (!StringUtils.hasText(value)) {
            return defaultValue == null ? null : defaultValue.format(DMY);
        }
        try {
            return LocalDate.parse(value.trim(), DMY).format(DMY);
        } catch (DateTimeParseException e) {
            log.warn("invalid date: {}", value);
            throw new BusinessException("EDU_APPLY_INVALID", "common.loadFail", e);
        }
    }

    private static List<String> distinct(List<String> values) {
        return values.stream().filter(StringUtils::hasText).map(String::trim).distinct().collect(Collectors.toList());
    }

    private static List<String> split(String value) {
        if (!StringUtils.hasText(value)) return new ArrayList<>();
        return Arrays.stream(value.split(",")).map(String::trim).filter(StringUtils::hasText).collect(Collectors.toList());
    }

    private static String trimToNull(String value) {
        return StringUtils.hasText(value) ? value.trim() : null;
    }
}
