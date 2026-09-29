package com.ait.edu.trainEducation.service.impl;

import com.ait.edu.trainEducation.dto.EduEmployeeDto;
import com.ait.edu.trainEducation.dto.EduTeacherManagerDto;
import com.ait.edu.trainEducation.mapper.EduCommonMapper;
import com.ait.edu.trainEducation.mapper.EduTeacherManagerMapper;
import com.ait.edu.trainEducation.service.EduTeacherManagerService;
import com.ait.exception.BusinessException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.List;

/**
 * Giảng viên - chuyển từ TrainEducationSerImpl (teacherManager, addTeacherManagerInfo, teacherManagerInfo,
 * updateTeacherManager, deleteTeacherManager) của dự án Hanwha_HTSV.
 * Khác bản gốc:
 * - Giảng viên nội bộ: lấy lại mã/tên nhân viên từ HR_EMPLOYEE theo personId ở BE (bản gốc tin dữ liệu ẩn trên form)
 *   và chặn thêm trùng 1 nhân viên đang là giảng viên.
 * - Thiếu tên giảng viên: báo lỗi rõ ràng (bản gốc bắt lỗi ORA-01400 của Oracle).
 */
@Service
public class EduTeacherManagerServiceImpl implements EduTeacherManagerService {
    private static final Logger log = LoggerFactory.getLogger(EduTeacherManagerServiceImpl.class);

    @Autowired
    private EduTeacherManagerMapper mapper;

    @Autowired
    private EduCommonMapper commonMapper;

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<EduTeacherManagerDto> getList(String keyword, String teachFieldCode, String teachLevelCode,
                                              String teachStatusCode) throws BusinessException {
        log.info("getList - keyword={}, field={}, level={}, status={}", keyword, teachFieldCode, teachLevelCode, teachStatusCode);
        try {
            List<EduTeacherManagerDto> rows = mapper.selectList(trimToNull(keyword), trimToNull(teachFieldCode),
                    trimToNull(teachLevelCode), trimToNull(teachStatusCode));
            log.info("getList - found {} rows", rows.size());
            return rows;
        } catch (Exception e) {
            log.error("getList failed - keyword={}", keyword, e);
            throw new BusinessException("EDU_TEACHER_LOAD", "common.loadFail", e);
        }
    }

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public EduTeacherManagerDto getOne(String teacherNo) throws BusinessException {
        log.info("getOne - teacherNo={}", teacherNo);
        EduTeacherManagerDto dto;
        try {
            dto = mapper.selectOne(teacherNo);
        } catch (Exception e) {
            log.error("getOne failed - teacherNo={}", teacherNo, e);
            throw new BusinessException("EDU_TEACHER_LOAD", "common.loadFail", e);
        }
        if (dto == null) {
            throw new BusinessException("EDU_TEACHER_NOT_FOUND", "common.noData");
        }
        return dto;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public String save(EduTeacherManagerDto dto) throws BusinessException {
        dto.setRemark(dto.getRemark() == null ? null : dto.getRemark().trim());
        if (StringUtils.hasText(dto.getTeacherNo())) {
            return update(dto);
        }
        return insert(dto);
    }

    private String insert(EduTeacherManagerDto dto) throws BusinessException {
        boolean external = Boolean.TRUE.equals(dto.getExternal());
        log.info("insert - external={}, personId={}, teacherName={}", external, dto.getPersonId(), dto.getTeacherName());
        try {
            if (external) {
                if (!StringUtils.hasText(dto.getTeacherName())) {
                    throw new BusinessException("EDU_TEACHER_INVALID", "edu.teacherManager.QINGXIANXUANZEYIGEREN.a");
                }
                dto.setTeacherName(dto.getTeacherName().trim());
                dto.setPersonId(null);
                dto.setEmpId(mapper.selectNextExternalEmpId());
            } else {
                EduEmployeeDto emp = StringUtils.hasText(dto.getEmpId()) ? commonMapper.selectEmployeeByEmpId(dto.getEmpId()) : null;
                if (emp == null) {
                    throw new BusinessException("EDU_TEACHER_INVALID", "edu.teacherManager.QINGXIANXUANZEYIGEREN.a");
                }
                if (mapper.countActiveByPersonId(emp.getPersonId()) > 0) {
                    throw new BusinessException("EDU_TEACHER_DUPLICATE", "edu.teacherManager.msg.duplicate");
                }
                dto.setPersonId(emp.getPersonId());
                dto.setEmpId(emp.getEmpId());
                dto.setTeacherName(emp.getLocalName());
            }
            if (dto.getBusinessActTime() == null) {
                dto.setBusinessActTime(0);
            }
            dto.setTeacherNo(mapper.selectNextNo());
            mapper.insert(dto);
            log.info("insert - teacherNo={}, empId={}", dto.getTeacherNo(), dto.getEmpId());
            return "alert.message.add_success";
        } catch (BusinessException e) {
            throw e;
        } catch (Exception e) {
            log.error("insert failed - personId={}, teacherName={}", dto.getPersonId(), dto.getTeacherName(), e);
            throw new BusinessException("EDU_TEACHER_SAVE", "alert.message.add_fail", e);
        }
    }

    private String update(EduTeacherManagerDto dto) throws BusinessException {
        log.info("update - teacherNo={}", dto.getTeacherNo());
        try {
            if (mapper.update(dto) == 0) {
                throw new BusinessException("EDU_TEACHER_NOT_FOUND", "alert.message.update_fail");
            }
            return "alert.message.update_success";
        } catch (BusinessException e) {
            throw e;
        } catch (Exception e) {
            log.error("update failed - teacherNo={}", dto.getTeacherNo(), e);
            throw new BusinessException("EDU_TEACHER_SAVE", "alert.message.update_fail", e);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void delete(String teacherNo) throws BusinessException {
        log.info("delete - teacherNo={}", teacherNo);
        try {
            if (mapper.deactivate(teacherNo) == 0) {
                throw new BusinessException("EDU_TEACHER_NOT_FOUND", "alert.message.delete_fail");
            }
        } catch (BusinessException e) {
            throw e;
        } catch (Exception e) {
            log.error("delete failed - teacherNo={}", teacherNo, e);
            throw new BusinessException("EDU_TEACHER_DELETE", "alert.message.delete_fail", e);
        }
    }

    private String trimToNull(String value) {
        return StringUtils.hasText(value) ? value.trim() : null;
    }
}
