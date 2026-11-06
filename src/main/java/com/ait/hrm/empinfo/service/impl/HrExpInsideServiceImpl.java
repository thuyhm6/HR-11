package com.ait.hrm.empinfo.service.impl;

import com.ait.exception.BusinessException;
import com.ait.hrm.empinfo.dto.HrExpInsideDto;
import com.ait.hrm.empinfo.mapper.HrExpInsideMapper;
import com.ait.hrm.empinfo.service.HrExpInsideService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;

/**
 * Quyết định nhân sự - errorCode của BusinessException là message key (frontend tự dịch). Chuyển từ EmpInfoSerImpl.getStartPointList / editStartPoint / deleteStartPoint
 * (dự án HTSV), giữ nguyên trình tự xử lý dữ liệu và stored procedure.
 */
@Service
public class HrExpInsideServiceImpl implements HrExpInsideService {

    private static final Logger log = LoggerFactory.getLogger(HrExpInsideServiceImpl.class);

    /** Quyết định "Vào công ty" - bản gốc không cho xóa (hrm.empinfo.RUZHI_ORDER_NOT_DELETE.Z). */
    private static final String TRANS_CODE_JOIN = "14015867";

    @Autowired
    private HrExpInsideMapper mapper;

    @Override
    public List<HrExpInsideDto> searchEmployees(String keyword) {
        try {
            return mapper.selectEmployeeList(keyword == null ? null : keyword.trim());
        } catch (Exception e) {
            log.error("Lỗi tìm kiếm nhân viên keyword={}: {}", keyword, e.getMessage(), e);
            return Collections.emptyList();
        }
    }

    @Override
    public HrExpInsideDto getEmployeeInfo(String personId) {
        try {
            return mapper.selectEmployeeInfo(personId);
        } catch (Exception e) {
            log.error("Lỗi lấy thông tin nhân viên personId={}: {}", personId, e.getMessage(), e);
            return null;
        }
    }

    @Override
    public List<HrExpInsideDto> getDecisionList(String personId) {
        try {
            return mapper.selectDecisionList(personId);
        } catch (Exception e) {
            log.error("Lỗi lấy danh sách quyết định personId={}: {}", personId, e.getMessage(), e);
            return Collections.emptyList();
        }
    }

    @Override
    public HrExpInsideDto getDecisionBySeq(Long seq) {
        try {
            return mapper.selectDecisionBySeq(seq);
        } catch (Exception e) {
            log.error("Lỗi lấy chi tiết quyết định seq={}: {}", seq, e.getMessage(), e);
            return null;
        }
    }

    @Override
    public HrExpInsideDto getCurrentHrInfo(String personId) {
        try {
            return mapper.selectCurrentHrInfo(personId);
        } catch (Exception e) {
            log.error("Lỗi lấy thông tin hiện tại của nhân viên personId={}: {}", personId, e.getMessage(), e);
            return null;
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Long saveDecision(HrExpInsideDto dto) throws BusinessException {
        try {
            if (dto.getSeq() == null) {
                // selectKey không gán ngược được vào DTO (LanguageParameterInterceptor copy DTO sang Map) -> lấy SEQ trước
                dto.setSeq(mapper.selectNextSeq());
                mapper.insertDecision(dto);
            } else {
                mapper.updateDecision(dto);
            }
            // Bản gốc (2018/03/13): hủy quyết định chính thức phát sinh sau quyết định nghỉ việc
            mapper.updatePositivePointActivity(dto.getPersonId());
            mapper.callExperienceExecuteSingle();
            log.info("Lưu quyết định nhân sự seq={}, personId={}", dto.getSeq(), dto.getPersonId());
            return dto.getSeq();
        } catch (Exception e) {
            log.error("Lỗi lưu quyết định nhân sự seq={}: {}", dto.getSeq(), e.getMessage(), e);
            throw new BusinessException("alert.message.add_fail", "Lưu thất bại", e);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void deleteDecision(Long seq) throws BusinessException {
        HrExpInsideDto row = mapper.selectDecisionBySeq(seq);
        if (row == null) {
            throw new BusinessException("alert.message.delete_fail", "Không tìm thấy quyết định");
        }
        if (TRANS_CODE_JOIN.equals(row.getTransCode())) {
            throw new BusinessException("hrm.empinfo.RUZHI_ORDER_NOT_DELETE.Z", "Không thể xóa quyết định vào công ty");
        }
        try {
            mapper.deleteDecision(seq);
            mapper.updateActivityAfterDelete(row.getPersonId(), row.getStartDate());
            mapper.callExperienceExecuteSingle();
            log.info("Xóa quyết định nhân sự seq={}, personId={}", seq, row.getPersonId());
        } catch (Exception e) {
            log.error("Lỗi xóa quyết định nhân sự seq={}: {}", seq, e.getMessage(), e);
            throw new BusinessException("alert.message.delete_fail", "Xóa thất bại", e);
        }
    }
}
