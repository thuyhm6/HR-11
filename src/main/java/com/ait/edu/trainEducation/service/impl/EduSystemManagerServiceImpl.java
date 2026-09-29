package com.ait.edu.trainEducation.service.impl;

import com.ait.edu.trainEducation.dto.EduSystemManagerDto;
import com.ait.edu.trainEducation.dto.EduSystemManagerSaveDto;
import com.ait.edu.trainEducation.mapper.EduSystemManagerMapper;
import com.ait.edu.trainEducation.service.EduSystemManagerService;
import com.ait.exception.BusinessException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Hệ thống đào tạo - chuyển từ TrainEducationSerImpl (systemManager, addSystemManagerInfo, updateSystemManager,
 * deleteSystemMan) của dự án Hanwha_HTSV.
 * Khác bản gốc:
 * - Bản gốc nuốt exception và luôn trả "thành công" khi thêm mới; ở đây ném BusinessException để rollback + báo lỗi.
 * - Bản gốc có kiểm tra trùng loại hình (đã comment); ở đây kiểm tra trùng (chương trình + loại hình) trước khi thêm.
 */
@Service
public class EduSystemManagerServiceImpl implements EduSystemManagerService {
    private static final Logger log = LoggerFactory.getLogger(EduSystemManagerServiceImpl.class);

    /** Tiền tố mã loại hình theo chương trình đào tạo (giữ nguyên bản gốc). */
    private static final Map<String, String> TRAIN_TYPE_NO_PREFIX = Map.of(
            "14014481", "SVP",
            "14014482", "SLP",
            "14014483", "SEP",
            "14014484", "SGP");
    private static final Pattern TRAILING_DIGITS = Pattern.compile("(\\d+)$");

    @Autowired
    private EduSystemManagerMapper mapper;

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<EduSystemManagerDto> getList(String trainDiffCode, String trainTypeCode) throws BusinessException {
        log.info("getList - trainDiffCode={}, trainTypeCode={}", trainDiffCode, trainTypeCode);
        try {
            List<EduSystemManagerDto> rows = mapper.selectList(trimToNull(trainDiffCode), trimToNull(trainTypeCode));
            log.info("getList - found {} rows", rows.size());
            return rows;
        } catch (Exception e) {
            log.error("getList failed - trainDiffCode={}, trainTypeCode={}", trainDiffCode, trainTypeCode, e);
            throw new BusinessException("EDU_SYSTEM_MANAGER_LOAD", "common.loadFail", e);
        }
    }

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public EduSystemManagerDto getOne(String sysmanaNo) throws BusinessException {
        log.info("getOne - sysmanaNo={}", sysmanaNo);
        EduSystemManagerDto dto;
        try {
            dto = mapper.selectOne(sysmanaNo);
        } catch (Exception e) {
            log.error("getOne failed - sysmanaNo={}", sysmanaNo, e);
            throw new BusinessException("EDU_SYSTEM_MANAGER_LOAD", "common.loadFail", e);
        }
        if (dto == null) {
            throw new BusinessException("EDU_SYSTEM_MANAGER_NOT_FOUND", "common.noData");
        }
        return dto;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public String save(EduSystemManagerSaveDto dto) throws BusinessException {
        dto.setRemark(dto.getRemark() == null ? null : dto.getRemark().trim());
        if (StringUtils.hasText(dto.getSysmanaNo())) {
            return update(dto);
        }
        return insert(dto);
    }

    private String insert(EduSystemManagerSaveDto dto) throws BusinessException {
        log.info("insert - trainDiffCode={}, trainTypeCode={}", dto.getTrainDiffCode(), dto.getTrainTypeCode());
        if (!StringUtils.hasText(dto.getTrainDiffCode()) || !StringUtils.hasText(dto.getTrainTypeCode())) {
            throw new BusinessException("EDU_SYSTEM_MANAGER_INVALID", "edu.systemManager.msg.required");
        }
        try {
            if (mapper.countDuplicate(dto.getTrainDiffCode(), dto.getTrainTypeCode()) > 0) {
                throw new BusinessException("EDU_SYSTEM_MANAGER_DUPLICATE", "alert.message.add_fail_repart");
            }
            dto.setTrainTypeNo(nextTrainTypeNo(dto.getTrainDiffCode()));
            mapper.insert(dto);
            log.info("insert - trainTypeNo={}", dto.getTrainTypeNo());
            return "alert.message.add_success";
        } catch (BusinessException e) {
            throw e;
        } catch (Exception e) {
            log.error("insert failed - trainDiffCode={}, trainTypeCode={}", dto.getTrainDiffCode(), dto.getTrainTypeCode(), e);
            throw new BusinessException("EDU_SYSTEM_MANAGER_SAVE", "alert.message.add_fail", e);
        }
    }

    private String update(EduSystemManagerSaveDto dto) throws BusinessException {
        log.info("update - sysmanaNo={}", dto.getSysmanaNo());
        try {
            int updated = mapper.updateRemark(dto);
            if (updated == 0) {
                throw new BusinessException("EDU_SYSTEM_MANAGER_NOT_FOUND", "alert.message.update_fail");
            }
            return "alert.message.update_success";
        } catch (BusinessException e) {
            throw e;
        } catch (Exception e) {
            log.error("update failed - sysmanaNo={}", dto.getSysmanaNo(), e);
            throw new BusinessException("EDU_SYSTEM_MANAGER_SAVE", "alert.message.update_fail", e);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void delete(String sysmanaNo) throws BusinessException {
        log.info("delete - sysmanaNo={}", sysmanaNo);
        try {
            int deleted = mapper.deactivate(sysmanaNo);
            if (deleted == 0) {
                throw new BusinessException("EDU_SYSTEM_MANAGER_NOT_FOUND", "alert.message.delete_fail");
            }
        } catch (BusinessException e) {
            throw e;
        } catch (Exception e) {
            log.error("delete failed - sysmanaNo={}", sysmanaNo, e);
            throw new BusinessException("EDU_SYSTEM_MANAGER_DELETE", "alert.message.delete_fail", e);
        }
    }

    /** Tiền tố theo chương trình + 6 chữ số tăng dần (SVP000001, SVP000002...), giống bản gốc. */
    private String nextTrainTypeNo(String trainDiffCode) {
        String prefix = TRAIN_TYPE_NO_PREFIX.getOrDefault(trainDiffCode, "");
        String maxNo = mapper.selectMaxTrainTypeNo(trainDiffCode);
        long next = 1;
        if (StringUtils.hasText(maxNo)) {
            Matcher m = TRAILING_DIGITS.matcher(maxNo.trim());
            if (m.find()) {
                next = Long.parseLong(m.group(1)) + 1;
            }
        }
        return prefix + String.format("%06d", next);
    }

    private String trimToNull(String value) {
        return StringUtils.hasText(value) ? value.trim() : null;
    }
}
