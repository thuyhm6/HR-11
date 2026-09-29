package com.ait.edu.trainEducation.service.impl;

import com.ait.edu.trainEducation.dto.EduEvaluateImportRowDto;
import com.ait.edu.trainEducation.dto.EduFreeEmployeeDto;
import com.ait.edu.trainEducation.dto.EduScoreDistributionDto;
import com.ait.edu.trainEducation.dto.EduStudentScoreDto;
import com.ait.edu.trainEducation.dto.EduTeacherCheckDto;
import com.ait.edu.trainEducation.dto.EduTrainResultDto;
import com.ait.edu.trainEducation.mapper.EduTrainEvaluateMapper;
import com.ait.edu.trainEducation.service.EduTrainEvaluateService;
import com.ait.exception.BusinessException;
import com.ait.util.I18nUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.function.Function;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

/**
 * Đánh giá học viên / giảng viên / kết quả đào tạo - chuyển từ TrainEducationCtroller + TrainEducationSerImpl
 * (studentEvaluate*, teacherEvaluate*, trainResult*) và ExcelImportCtroller (importStudentEvaluate, teacherEvaluateImport,
 * importTrainResultEV) của dự án Hanwha_HTSV.
 * Khác bản gốc:
 * - Quyền: dùng role quản lý thay cho danh sách mã nhân viên hard-code; import đánh giá giảng viên / kết quả chỉ dành
 *   cho quản lý đào tạo.
 * - Import không qua bảng tạm: kiểm tra từng dòng (mã nhân viên thuộc khóa, điểm hợp lệ), có lỗi thì không lưu dòng nào.
 * - Tỷ lệ các mức điểm tính trong Java; mẫu số là số phiếu có điểm của đúng giảng viên đó (bản gốc chia cho tổng số
 *   phiếu của mọi giảng viên trong khóa).
 * - Import kết quả đào tạo tính luôn ALLSCORE để trang xem chi tiết hiển thị được (bản gốc để trống).
 */
@Service
public class EduTrainEvaluateServiceImpl implements EduTrainEvaluateService {
    private static final Logger log = LoggerFactory.getLogger(EduTrainEvaluateServiceImpl.class);

    private static final Pattern SCORE_100 = Pattern.compile("^(100|[1-9]?\\d)(\\.\\d+)?$");
    private static final Pattern SCORE_5 = Pattern.compile("^[1-5]$");
    private static final int MAX_IMPORT_ROWS = 2000;

    /** Mã tiêu chí kết quả đào tạo (key của EduScoreDistributionDto) - frontend dịch sang nhãn. */
    public static final String CRITERION_SATISFACTION = "DIFFICULTY";
    public static final String CRITERION_GRASP = "CONTENT_RICH";
    public static final String CRITERION_LENGTH = "TIME_MODERATE";
    public static final String CRITERION_PRACTICAL = "PRACTICABILITY";

    @Autowired
    private EduTrainEvaluateMapper mapper;

    // ==================== Đánh giá học viên ====================

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<EduFreeEmployeeDto> getStudents(String basicNo, boolean manager) throws BusinessException {
        log.info("getStudents - basicNo={}, manager={}", basicNo, manager);
        checkEvaTeacher(basicNo, manager);
        try {
            return mapper.selectStudents(basicNo);
        } catch (Exception e) {
            log.error("getStudents failed - basicNo={}", basicNo, e);
            throw new BusinessException("EDU_EVAL_LOAD", "common.loadFail", e);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void saveStudentScores(String basicNo, List<EduStudentScoreDto> rows, boolean manager) throws BusinessException {
        log.info("saveStudentScores - basicNo={}, rows={}", basicNo, rows == null ? 0 : rows.size());
        checkEvaTeacher(basicNo, manager);
        if (rows == null || rows.isEmpty()) {
            throw new BusinessException("EDU_EVAL_EMPTY", "edu.studentEvaluate.QINGXIANTIANJIAKAOSHICHENGJI.a");
        }
        try {
            for (EduStudentScoreDto r : rows) {
                String score = trimToNull(r.getEvaResult());
                if (score != null && !SCORE_100.matcher(score).matches()) {
                    throw new BusinessException("EDU_EVAL_INVALID", "edu.evaluate.msg.invalidScore");
                }
                mapper.updateEvaResult(basicNo, r.getFreeNo(), score);
            }
        } catch (BusinessException e) {
            throw e;
        } catch (Exception e) {
            log.error("saveStudentScores failed - basicNo={}", basicNo, e);
            throw new BusinessException("EDU_EVAL_SAVE", "alert.message.update_fail", e);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public List<String> importStudentScores(String basicNo, List<EduEvaluateImportRowDto> rows, boolean manager)
            throws BusinessException {
        log.info("importStudentScores - basicNo={}, rows={}", basicNo, rows == null ? 0 : rows.size());
        checkEvaTeacher(basicNo, manager);
        checkImportSize(rows);
        try {
            List<String> students = mapper.selectStudents(basicNo).stream().map(EduFreeEmployeeDto::getEmpId).toList();
            List<String> errors = new ArrayList<>();
            for (int i = 0; i < rows.size(); i++) {
                EduEvaluateImportRowDto r = rows.get(i);
                String empId = trimToNull(r.getEmpId());
                String score = trimToNull(r.getScore());
                if (empId == null || !students.contains(empId)) {
                    errors.add(rowError(i, "edu.evaluate.msg.notStudent", r.getEmpId()));
                } else if (score != null && !SCORE_100.matcher(score).matches()) {
                    errors.add(rowError(i, "edu.evaluate.msg.invalidScore", score));
                }
            }
            if (!errors.isEmpty()) {
                return errors;
            }
            rows.forEach(r -> mapper.updateEvaResultByEmp(basicNo, r.getEmpId().trim(), trimToNull(r.getScore())));
            log.info("importStudentScores - updated {} rows", rows.size());
            return errors;
        } catch (Exception e) {
            log.error("importStudentScores failed - basicNo={}", basicNo, e);
            throw new BusinessException("EDU_EVAL_IMPORT", "alert.message.update_fail", e);
        }
    }

    // ==================== Đánh giá giảng viên ====================

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<EduScoreDistributionDto> getTeacherSummary(String basicNo, boolean manager) throws BusinessException {
        log.info("getTeacherSummary - basicNo={}", basicNo);
        checkStudent(basicNo, manager);
        try {
            Map<String, List<EduTeacherCheckDto>> byTeacher = mapper.selectTeacherChecks(basicNo, null).stream()
                    .collect(Collectors.groupingBy(EduTeacherCheckDto::getTeaEmpId, LinkedHashMap::new, Collectors.toList()));
            List<EduScoreDistributionDto> result = new ArrayList<>();
            byTeacher.forEach((teaEmpId, checks) -> {
                EduTeacherCheckDto first = checks.get(0);
                EduScoreDistributionDto d = distribution(checks.stream().map(EduTeacherCheckDto::getGrooming).toList());
                d.setKey(teaEmpId);
                d.setName(first.getTeaLocalName());
                d.setPostGradeName(first.getTeaPostGradeName());
                d.setDeptName(first.getTeaDeptName());
                result.add(d);
            });
            return result;
        } catch (Exception e) {
            log.error("getTeacherSummary failed - basicNo={}", basicNo, e);
            throw new BusinessException("EDU_EVAL_LOAD", "common.loadFail", e);
        }
    }

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<EduTeacherCheckDto> getTeacherScores(String basicNo, String teaEmpId, boolean manager) throws BusinessException {
        log.info("getTeacherScores - basicNo={}, teaEmpId={}", basicNo, teaEmpId);
        checkStudent(basicNo, manager);
        try {
            return mapper.selectTeacherChecks(basicNo, teaEmpId);
        } catch (Exception e) {
            log.error("getTeacherScores failed - basicNo={}", basicNo, e);
            throw new BusinessException("EDU_EVAL_LOAD", "common.loadFail", e);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public List<String> importTeacherScores(String basicNo, String teaEmpId, List<EduEvaluateImportRowDto> rows,
                                            boolean manager) throws BusinessException {
        log.info("importTeacherScores - basicNo={}, teaEmpId={}, rows={}", basicNo, teaEmpId, rows == null ? 0 : rows.size());
        checkManager(manager);
        checkImportSize(rows);
        try {
            List<String> students = mapper.selectTeacherChecks(basicNo, teaEmpId).stream()
                    .map(EduTeacherCheckDto::getStuEmpId).toList();
            List<String> errors = new ArrayList<>();
            for (int i = 0; i < rows.size(); i++) {
                EduEvaluateImportRowDto r = rows.get(i);
                String empId = trimToNull(r.getEmpId());
                String score = trimToNull(r.getScore());
                if (empId == null || !students.contains(empId)) {
                    errors.add(rowError(i, "edu.evaluate.msg.notStudent", r.getEmpId()));
                } else if (score != null && !SCORE_5.matcher(score).matches()) {
                    errors.add(rowError(i, "edu.evaluate.msg.invalidScore5", score));
                }
            }
            if (!errors.isEmpty()) {
                return errors;
            }
            rows.forEach(r -> mapper.updateGrooming(basicNo, teaEmpId, r.getEmpId().trim(), toScore5(r.getScore())));
            log.info("importTeacherScores - updated {} rows", rows.size());
            return errors;
        } catch (Exception e) {
            log.error("importTeacherScores failed - basicNo={}, teaEmpId={}", basicNo, teaEmpId, e);
            throw new BusinessException("EDU_EVAL_IMPORT", "alert.message.update_fail", e);
        }
    }

    // ==================== Kết quả đào tạo ====================

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<EduScoreDistributionDto> getResultSummary(String basicNo, boolean manager) throws BusinessException {
        log.info("getResultSummary - basicNo={}", basicNo);
        checkStudent(basicNo, manager);
        try {
            // Bản gốc: mẫu số = số phiếu có ít nhất 1 tiêu chí đã chấm
            List<EduTrainResultDto> scored = mapper.selectTrainResults(basicNo).stream().filter(this::hasAnyScore).toList();
            List<EduScoreDistributionDto> result = new ArrayList<>();
            result.add(criterion(CRITERION_SATISFACTION, scored, EduTrainResultDto::getDifficulty));
            result.add(criterion(CRITERION_GRASP, scored, EduTrainResultDto::getContentRich));
            result.add(criterion(CRITERION_LENGTH, scored, EduTrainResultDto::getTimeModerate));
            result.add(criterion(CRITERION_PRACTICAL, scored, EduTrainResultDto::getPracticability));
            return result;
        } catch (Exception e) {
            log.error("getResultSummary failed - basicNo={}", basicNo, e);
            throw new BusinessException("EDU_EVAL_LOAD", "common.loadFail", e);
        }
    }

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<EduTrainResultDto> getResultDetails(String basicNo, boolean manager) throws BusinessException {
        log.info("getResultDetails - basicNo={}", basicNo);
        checkStudent(basicNo, manager);
        try {
            return mapper.selectTrainResults(basicNo);
        } catch (Exception e) {
            log.error("getResultDetails failed - basicNo={}", basicNo, e);
            throw new BusinessException("EDU_EVAL_LOAD", "common.loadFail", e);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public List<String> importResults(String basicNo, List<EduEvaluateImportRowDto> rows, boolean manager)
            throws BusinessException {
        log.info("importResults - basicNo={}, rows={}", basicNo, rows == null ? 0 : rows.size());
        checkManager(manager);
        checkImportSize(rows);
        try {
            List<String> students = mapper.selectTrainResults(basicNo).stream().map(EduTrainResultDto::getStuEmpId).toList();
            List<String> errors = new ArrayList<>();
            for (int i = 0; i < rows.size(); i++) {
                EduEvaluateImportRowDto r = rows.get(i);
                String empId = trimToNull(r.getEmpId());
                if (empId == null || !students.contains(empId)) {
                    errors.add(rowError(i, "edu.evaluate.msg.notStudent", r.getEmpId()));
                    continue;
                }
                for (String s : new String[]{r.getDifficulty(), r.getContentRich(), r.getTimeModerate(), r.getPracticability()}) {
                    String v = trimToNull(s);
                    if (v != null && !SCORE_5.matcher(v).matches()) {
                        errors.add(rowError(i, "edu.evaluate.msg.invalidScore5", v));
                        break;
                    }
                }
            }
            if (!errors.isEmpty()) {
                return errors;
            }
            for (EduEvaluateImportRowDto r : rows) {
                EduTrainResultDto dto = new EduTrainResultDto();
                dto.setBasicNo(basicNo);
                dto.setStuEmpId(r.getEmpId().trim());
                dto.setDifficulty(toScore5(r.getDifficulty()));
                dto.setContentRich(toScore5(r.getContentRich()));
                dto.setTimeModerate(toScore5(r.getTimeModerate()));
                dto.setPracticability(toScore5(r.getPracticability()));
                dto.setAllscore(hasAnyScore(dto) ? formatScore(allScore(dto)) : null);
                mapper.updateTrainResultScores(dto);
            }
            log.info("importResults - updated {} rows", rows.size());
            return errors;
        } catch (Exception e) {
            log.error("importResults failed - basicNo={}", basicNo, e);
            throw new BusinessException("EDU_EVAL_IMPORT", "alert.message.update_fail", e);
        }
    }

    // ==================== Hỗ trợ ====================

    private void checkEvaTeacher(String basicNo, boolean manager) throws BusinessException {
        if (!manager && mapper.countEvaTeacher(basicNo) == 0) {
            throw new BusinessException("EDU_EVAL_FORBIDDEN", "edu.evaluate.msg.noPermission");
        }
    }

    private void checkStudent(String basicNo, boolean manager) throws BusinessException {
        if (!manager && mapper.countStudent(basicNo) == 0) {
            throw new BusinessException("EDU_EVAL_FORBIDDEN", "edu.evaluate.msg.noPermission");
        }
    }

    private void checkManager(boolean manager) throws BusinessException {
        if (!manager) {
            throw new BusinessException("EDU_EVAL_FORBIDDEN", "edu.evaluate.msg.noPermission");
        }
    }

    private void checkImportSize(List<EduEvaluateImportRowDto> rows) throws BusinessException {
        if (rows == null || rows.isEmpty()) {
            throw new BusinessException("EDU_EVAL_IMPORT_EMPTY", "common.noData");
        }
        if (rows.size() > MAX_IMPORT_ROWS) {
            throw new BusinessException("EDU_EVAL_IMPORT_TOO_MANY", "autoExcel.msg.tooLong");
        }
    }

    private EduScoreDistributionDto criterion(String key, List<EduTrainResultDto> scored,
                                              Function<EduTrainResultDto, Integer> getter) {
        EduScoreDistributionDto d = distribution(scored.stream().map(getter).toList(), scored.size());
        d.setKey(key);
        return d;
    }

    private EduScoreDistributionDto distribution(List<Integer> scores) {
        return distribution(scores, (int) scores.stream().filter(Objects::nonNull).count());
    }

    /** % mỗi mức điểm = số phiếu mức đó / mẫu số * 100 (làm tròn 2 chữ số); độ hài lòng = % mức 5 + % mức 4. */
    private EduScoreDistributionDto distribution(List<Integer> scores, int total) {
        EduScoreDistributionDto d = new EduScoreDistributionDto();
        d.setCount(total);
        if (total == 0) {
            return d;
        }
        long[] counts = new long[6];
        scores.stream().filter(s -> s != null && s >= 1 && s <= 5).forEach(s -> counts[s]++);
        d.setRev5(percent(counts[5], total));
        d.setRev4(percent(counts[4], total));
        d.setRev3(percent(counts[3], total));
        d.setRev2(percent(counts[2], total));
        d.setRev1(percent(counts[1], total));
        d.setSatisfaction(percent(counts[5] + counts[4], total));
        return d;
    }

    private double percent(long count, int total) {
        return Math.round(count * 10000.0 / total) / 100.0;
    }

    private boolean hasAnyScore(EduTrainResultDto r) {
        return r.getDifficulty() != null || r.getContentRich() != null || r.getPracticability() != null
                || r.getTimeModerate() != null;
    }

    /** Bản gốc jisuanjieguo(): (20*độ hài lòng + 20*dễ nắm bắt + 40*thực dụng + 20*thời lượng) * 0.2. */
    private double allScore(EduTrainResultDto r) {
        return (20 * nz(r.getDifficulty()) + 20 * nz(r.getContentRich()) + 40 * nz(r.getPracticability())
                + 20 * nz(r.getTimeModerate())) * 0.2;
    }

    private int nz(Integer v) {
        return v == null ? 0 : v;
    }

    private String formatScore(double v) {
        return v == Math.rint(v) ? String.valueOf((long) v) : String.valueOf(Math.round(v * 100) / 100.0);
    }

    private Integer toScore5(String value) {
        String v = trimToNull(value);
        return v == null ? null : Integer.valueOf(v);
    }

    private String rowError(int index, String key, String value) {
        return I18nUtil.getMessage("edu.common.msg.row") + " " + (index + 2) + ": " + I18nUtil.getMessage(key)
                + (value == null ? "" : " (" + value + ")");
    }

    private String trimToNull(String value) {
        return StringUtils.hasText(value) ? value.trim() : null;
    }
}
