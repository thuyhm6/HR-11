package com.ait.sy.syAffirm.service.impl;

import com.ait.exception.BusinessException;
import com.ait.sy.syAffirm.dto.HrmAffirmDto;
import com.ait.sy.syAffirm.mapper.HrmAffirmMapper;
import com.ait.sy.syAffirm.service.HrmAffirmService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Quy trình phê duyệt khác - chuyển từ HrmAffirmCtroller + ArAffirmSerImpl (TYPE = "pa") + HrmAffirmSerImpl
 * (validateExistsDutyApplyTypeCpnyId) của dự án Hanwha_HTSV.
 * Bổ sung so với bản gốc: kiểm tra cấp duyệt thấp nhất không lớn hơn cấp cao nhất, báo lỗi khi sửa/xóa dòng không còn tồn tại.
 */
@Service
public class HrmAffirmServiceImpl implements HrmAffirmService {
    private static final Logger log = LoggerFactory.getLogger(HrmAffirmServiceImpl.class);

    @Autowired
    private HrmAffirmMapper mapper;

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<HrmAffirmDto> getList(String applyType) throws BusinessException {
        log.info("getList - applyType={}", applyType);
        try {
            List<HrmAffirmDto> list = mapper.selectList(applyType);
            log.info("getList - found {} rows", list.size());
            return list;
        } catch (Exception e) {
            log.error("getList failed - applyType={}", applyType, e);
            throw new BusinessException("HRM_AFFIRM_LOAD", "common.loadFail", e);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void add(HrmAffirmDto dto) throws BusinessException {
        log.info("add - {}", dto);
        validateLevelRange(dto);
        int duplicated;
        try {
            duplicated = mapper.countDuplicate(dto.getApplyType(), dto.getEmpType(), dto.getDutyNo(), null);
            if (duplicated == 0) {
                mapper.insert(dto);
            }
        } catch (Exception e) {
            log.error("add failed - {}", dto, e);
            throw new BusinessException("HRM_AFFIRM_SAVE", "vhal.msg.saveFail", e);
        }
        if (duplicated > 0) {
            throw new BusinessException("HRM_AFFIRM_EXISTS", "vhal.msg.exists");
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void update(HrmAffirmDto dto) throws BusinessException {
        log.info("update - {}", dto);
        if (dto.getApplyParamNo() == null) {
            throw new BusinessException("HRM_AFFIRM_NOT_FOUND", "vhal.msg.notFound");
        }
        validateLevelRange(dto);
        int duplicated;
        int updated = 0;
        try {
            duplicated = mapper.countDuplicate(dto.getApplyType(), dto.getEmpType(), dto.getDutyNo(), dto.getApplyParamNo());
            if (duplicated == 0) {
                updated = mapper.update(dto);
            }
        } catch (Exception e) {
            log.error("update failed - {}", dto, e);
            throw new BusinessException("HRM_AFFIRM_SAVE", "vhal.msg.saveFail", e);
        }
        if (duplicated > 0) {
            throw new BusinessException("HRM_AFFIRM_EXISTS", "vhal.msg.exists");
        }
        if (updated == 0) {
            throw new BusinessException("HRM_AFFIRM_NOT_FOUND", "vhal.msg.notFound");
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void delete(Long applyParamNo) throws BusinessException {
        log.info("delete - applyParamNo={}", applyParamNo);
        int deleted;
        try {
            deleted = mapper.delete(applyParamNo);
        } catch (Exception e) {
            log.error("delete failed - applyParamNo={}", applyParamNo, e);
            throw new BusinessException("HRM_AFFIRM_DELETE", "vhal.msg.deleteFail", e);
        }
        if (deleted == 0) {
            throw new BusinessException("HRM_AFFIRM_NOT_FOUND", "vhal.msg.notFound");
        }
    }

    private void validateLevelRange(HrmAffirmDto dto) throws BusinessException {
        if (dto.getLowLevel() > dto.getHighLevel()) {
            throw new BusinessException("HRM_AFFIRM_INVALID", "vhal.msg.levelRange");
        }
    }
}
