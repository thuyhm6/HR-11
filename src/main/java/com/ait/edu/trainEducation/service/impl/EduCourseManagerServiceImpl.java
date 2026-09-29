package com.ait.edu.trainEducation.service.impl;

import com.ait.edu.trainEducation.dto.EduCourseManagerDto;
import com.ait.edu.trainEducation.dto.EduCourseManagerSaveDto;
import com.ait.edu.trainEducation.dto.EduSystemManagerDto;
import com.ait.edu.trainEducation.mapper.EduCourseManagerMapper;
import com.ait.edu.trainEducation.mapper.EduSystemManagerMapper;
import com.ait.edu.trainEducation.service.EduCourseManagerService;
import com.ait.exception.BusinessException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Quản lý khóa học - chuyển từ TrainEducationSerImpl (courseManager, addCourseManagerInfo, courseManagerInfo,
 * updateCourseManager) của dự án Hanwha_HTSV.
 * Khác bản gốc:
 * - Bản gốc NullPointerException khi hệ thống đào tạo không tồn tại / trả "thất bại" chung chung; ở đây báo lỗi rõ ràng.
 * - Trùng tên khóa học (unique key UK_EDU_COURSE_MANAGER) được báo lỗi riêng cả khi thêm mới lẫn khi sửa.
 */
@Service
public class EduCourseManagerServiceImpl implements EduCourseManagerService {
    private static final Logger log = LoggerFactory.getLogger(EduCourseManagerServiceImpl.class);

    private static final Pattern TRAILING_DIGITS = Pattern.compile("(\\d+)$");
    private static final String MSG_DUPLICATE = "edu.courseManager.msg.duplicate";

    @Autowired
    private EduCourseManagerMapper mapper;

    /** Dùng lại để lấy loại hình / mã loại hình của hệ thống đào tạo được chọn khi thêm khóa học. */
    @Autowired
    private EduSystemManagerMapper systemManagerMapper;

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<EduCourseManagerDto> getList(String trainDiffCode, String trainTypeCode, String courseNameCode)
            throws BusinessException {
        log.info("getList - trainDiffCode={}, trainTypeCode={}, courseNameCode={}", trainDiffCode, trainTypeCode, courseNameCode);
        try {
            List<EduCourseManagerDto> rows = mapper.selectList(trimToNull(trainDiffCode), trimToNull(trainTypeCode),
                    trimToNull(courseNameCode));
            log.info("getList - found {} rows", rows.size());
            return rows;
        } catch (Exception e) {
            log.error("getList failed - trainDiffCode={}, trainTypeCode={}, courseNameCode={}",
                    trainDiffCode, trainTypeCode, courseNameCode, e);
            throw new BusinessException("EDU_COURSE_MANAGER_LOAD", "common.loadFail", e);
        }
    }

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public EduCourseManagerDto getOne(String courseNo) throws BusinessException {
        log.info("getOne - courseNo={}", courseNo);
        EduCourseManagerDto dto;
        try {
            dto = mapper.selectOne(courseNo);
        } catch (Exception e) {
            log.error("getOne failed - courseNo={}", courseNo, e);
            throw new BusinessException("EDU_COURSE_MANAGER_LOAD", "common.loadFail", e);
        }
        if (dto == null) {
            throw new BusinessException("EDU_COURSE_MANAGER_NOT_FOUND", "common.noData");
        }
        return dto;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public String save(EduCourseManagerSaveDto dto) throws BusinessException {
        dto.setCourseNameCode(trimToNull(dto.getCourseNameCode()));
        dto.setRemark(dto.getRemark() == null ? null : dto.getRemark().trim());
        if (StringUtils.hasText(dto.getCourseNo())) {
            return update(dto);
        }
        return insert(dto);
    }

    private String insert(EduCourseManagerSaveDto dto) throws BusinessException {
        log.info("insert - sysmanaNo={}, courseNameCode={}", dto.getSysmanaNo(), dto.getCourseNameCode());
        if (!StringUtils.hasText(dto.getSysmanaNo()) || dto.getCourseNameCode() == null) {
            throw new BusinessException("EDU_COURSE_MANAGER_INVALID", "edu.courseManager.msg.required");
        }
        try {
            EduSystemManagerDto system = systemManagerMapper.selectOne(dto.getSysmanaNo());
            if (system == null || !StringUtils.hasText(system.getTrainTypeNo())) {
                throw new BusinessException("EDU_COURSE_MANAGER_INVALID", "edu.courseManager.msg.required");
            }
            dto.setTrainTypeCode(system.getTrainTypeCode());
            dto.setTrainTypeNo(system.getTrainTypeNo());
            dto.setCourseNumber(nextCourseNumber(system.getTrainTypeNo()));
            mapper.insert(dto);
            log.info("insert - courseNumber={}", dto.getCourseNumber());
            return "alert.message.add_success";
        } catch (BusinessException e) {
            throw e;
        } catch (DataIntegrityViolationException e) {
            log.warn("insert duplicate - courseNameCode={}: {}", dto.getCourseNameCode(), e.getMessage());
            throw new BusinessException("EDU_COURSE_MANAGER_DUPLICATE", MSG_DUPLICATE, e);
        } catch (Exception e) {
            log.error("insert failed - sysmanaNo={}, courseNameCode={}", dto.getSysmanaNo(), dto.getCourseNameCode(), e);
            throw new BusinessException("EDU_COURSE_MANAGER_SAVE", "alert.message.add_fail", e);
        }
    }

    /** Bản gốc: sửa tên + ghi chú khóa học rồi đồng bộ tên sang kế hoạch và thông tin cơ bản đào tạo. */
    private String update(EduCourseManagerSaveDto dto) throws BusinessException {
        log.info("update - courseNo={}, courseNameCode={}", dto.getCourseNo(), dto.getCourseNameCode());
        try {
            int updated = mapper.update(dto);
            if (updated == 0) {
                throw new BusinessException("EDU_COURSE_MANAGER_NOT_FOUND", "alert.message.update_fail");
            }
            int plans = mapper.updatePlanCourseName(dto);
            int basics = mapper.updateBasicInfoCourseName(dto);
            log.info("update - synced course name to {} plans, {} basic infos", plans, basics);
            return "alert.message.update_success";
        } catch (BusinessException e) {
            throw e;
        } catch (DataIntegrityViolationException e) {
            log.warn("update duplicate - courseNameCode={}: {}", dto.getCourseNameCode(), e.getMessage());
            throw new BusinessException("EDU_COURSE_MANAGER_DUPLICATE", MSG_DUPLICATE, e);
        } catch (Exception e) {
            log.error("update failed - courseNo={}", dto.getCourseNo(), e);
            throw new BusinessException("EDU_COURSE_MANAGER_SAVE", "alert.message.update_fail", e);
        }
    }

    /** Mã loại hình + "-" + 4 chữ số tăng dần (SVP000001-0001...), giống bản gốc. */
    private String nextCourseNumber(String trainTypeNo) {
        String maxNo = mapper.selectMaxCourseNumber(trainTypeNo);
        long next = 1;
        if (StringUtils.hasText(maxNo)) {
            Matcher m = TRAILING_DIGITS.matcher(maxNo.trim());
            if (m.find()) {
                next = Long.parseLong(m.group(1)) + 1;
            }
        }
        return trainTypeNo + "-" + String.format("%04d", next);
    }

    private String trimToNull(String value) {
        return StringUtils.hasText(value) ? value.trim() : null;
    }
}
