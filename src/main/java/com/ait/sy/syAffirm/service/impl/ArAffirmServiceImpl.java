package com.ait.sy.syAffirm.service.impl;

import com.ait.exception.BusinessException;
import com.ait.sy.syAffirm.dto.AffirmSpecialTypeDto;
import com.ait.sy.syAffirm.dto.ArAffirmDto;
import com.ait.sy.syAffirm.mapper.ArAffirmMapper;
import com.ait.sy.syAffirm.service.ArAffirmService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Quy trình phê duyệt chấm công - chuyển từ ArAffirmCtroller + ArAffirmSerImpl (TYPE = "ar") của dự án Hanwha_HTSV.
 * Không kiểm tra trùng (loại đơn + loại NV + vai trò) như quy trình phê duyệt khác vì cùng 1 tổ hợp được phép có nhiều
 * dòng với khoảng độ dài khác nhau - giống bản gốc.
 * Bổ sung so với bản gốc: kiểm tra độ dài bắt đầu &lt;= kết thúc, cấp thấp nhất &lt;= cấp cao nhất, báo lỗi khi sửa/xóa
 * dòng không còn tồn tại.
 */
@Service
public class ArAffirmServiceImpl implements ArAffirmService {
    private static final Logger log = LoggerFactory.getLogger(ArAffirmServiceImpl.class);

    @Autowired
    private ArAffirmMapper mapper;

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<AffirmSpecialTypeDto> getApplyTypeList() throws BusinessException {
        log.info("getApplyTypeList");
        try {
            return mapper.selectApplyTypeList();
        } catch (Exception e) {
            log.error("getApplyTypeList failed", e);
            throw new BusinessException("AR_AFFIRM_LOAD_TYPE", "common.loadFail", e);
        }
    }

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<ArAffirmDto> getList(String applyType) throws BusinessException {
        log.info("getList - applyType={}", applyType);
        try {
            List<ArAffirmDto> list = mapper.selectList(applyType);
            log.info("getList - found {} rows", list.size());
            return list;
        } catch (Exception e) {
            log.error("getList failed - applyType={}", applyType, e);
            throw new BusinessException("AR_AFFIRM_LOAD", "common.loadFail", e);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void add(ArAffirmDto dto) throws BusinessException {
        log.info("add - {}", dto);
        validate(dto);
        try {
            mapper.insert(dto);
        } catch (Exception e) {
            log.error("add failed - {}", dto, e);
            throw new BusinessException("AR_AFFIRM_SAVE", "vhal.msg.saveFail", e);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void update(ArAffirmDto dto) throws BusinessException {
        log.info("update - {}", dto);
        if (dto.getApplyParamNo() == null) {
            throw new BusinessException("AR_AFFIRM_NOT_FOUND", "vhal.msg.notFound");
        }
        validate(dto);
        int updated;
        try {
            updated = mapper.update(dto);
        } catch (Exception e) {
            log.error("update failed - {}", dto, e);
            throw new BusinessException("AR_AFFIRM_SAVE", "vhal.msg.saveFail", e);
        }
        if (updated == 0) {
            throw new BusinessException("AR_AFFIRM_NOT_FOUND", "vhal.msg.notFound");
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
            throw new BusinessException("AR_AFFIRM_DELETE", "vhal.msg.deleteFail", e);
        }
        if (deleted == 0) {
            throw new BusinessException("AR_AFFIRM_NOT_FOUND", "vhal.msg.notFound");
        }
    }

    private void validate(ArAffirmDto dto) throws BusinessException {
        if (dto.getFromOffset() > dto.getToOffset()) {
            throw new BusinessException("AR_AFFIRM_INVALID", "vaal.msg.lengthRange");
        }
        if (dto.getLowLevel() > dto.getHighLevel()) {
            throw new BusinessException("AR_AFFIRM_INVALID", "vhal.msg.levelRange");
        }
    }
}
