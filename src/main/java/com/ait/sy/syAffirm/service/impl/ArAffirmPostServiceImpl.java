package com.ait.sy.syAffirm.service.impl;

import com.ait.exception.BusinessException;
import com.ait.sy.syAffirm.dto.ArAffirmPostDto;
import com.ait.sy.syAffirm.mapper.ArAffirmPostMapper;
import com.ait.sy.syAffirm.service.ArAffirmPostService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Cấu hình vai trò người duyệt - chuyển từ ArAffirmPostSerImpl (dự án Hanwha_HTSV).
 * Khác bản gốc: kiểm tra trùng vai trò trước khi thêm (bản gốc insert thẳng, trùng thì chỉ báo "thêm thất bại")
 * và báo lỗi khi cập nhật/xóa vai trò không còn tồn tại (bản gốc luôn báo thành công).
 */
@Service
public class ArAffirmPostServiceImpl implements ArAffirmPostService {
    private static final Logger log = LoggerFactory.getLogger(ArAffirmPostServiceImpl.class);

    @Autowired
    private ArAffirmPostMapper mapper;

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<ArAffirmPostDto> getList() throws BusinessException {
        log.info("getList");
        try {
            List<ArAffirmPostDto> list = mapper.selectList();
            log.info("getList - found {} rows", list.size());
            return list;
        } catch (Exception e) {
            log.error("getList failed", e);
            throw new BusinessException("AR_AFFIRM_POST_LOAD", "common.loadFail", e);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void add(ArAffirmPostDto dto) throws BusinessException {
        log.info("add - duty={}, affirmLevel={}", dto.getDuty(), dto.getAffirmLevel());
        int existing;
        try {
            existing = mapper.countByDuty(dto.getDuty());
            if (existing == 0) {
                mapper.insert(dto.getDuty(), dto.getAffirmLevel());
            }
        } catch (Exception e) {
            log.error("add failed - duty={}", dto.getDuty(), e);
            throw new BusinessException("AR_AFFIRM_POST_SAVE", "vaap.msg.saveFail", e);
        }
        if (existing > 0) {
            throw new BusinessException("AR_AFFIRM_POST_EXISTS", "vaap.msg.dutyExists");
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void update(ArAffirmPostDto dto) throws BusinessException {
        log.info("update - duty={}, affirmLevel={}", dto.getDuty(), dto.getAffirmLevel());
        int updated;
        try {
            updated = mapper.update(dto.getDuty(), dto.getAffirmLevel());
        } catch (Exception e) {
            log.error("update failed - duty={}", dto.getDuty(), e);
            throw new BusinessException("AR_AFFIRM_POST_SAVE", "vaap.msg.saveFail", e);
        }
        if (updated == 0) {
            throw new BusinessException("AR_AFFIRM_POST_NOT_FOUND", "vaap.msg.notFound");
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void delete(String duty) throws BusinessException {
        log.info("delete - duty={}", duty);
        int deleted;
        try {
            deleted = mapper.delete(duty);
        } catch (Exception e) {
            log.error("delete failed - duty={}", duty, e);
            throw new BusinessException("AR_AFFIRM_POST_DELETE", "vaap.msg.deleteFail", e);
        }
        if (deleted == 0) {
            throw new BusinessException("AR_AFFIRM_POST_NOT_FOUND", "vaap.msg.notFound");
        }
    }
}
