package com.ait.edu.trainEducation.service.impl;

import com.ait.edu.trainEducation.dto.EduEmployeeDto;
import com.ait.edu.trainEducation.dto.EduTrainAgreementDto;
import com.ait.edu.trainEducation.dto.EduTrainAgreementSearchDto;
import com.ait.edu.trainEducation.mapper.EduCommonMapper;
import com.ait.edu.trainEducation.mapper.EduTrainAgreementMapper;
import com.ait.edu.trainEducation.service.EduFileService;
import com.ait.edu.trainEducation.service.EduTrainAgreementService;
import com.ait.ess.empinfo.dto.EssFileDto;
import com.ait.exception.BusinessException;
import com.ait.util.I18nUtil;
import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * Hợp đồng đào tạo - chuyển từ TrainEducationSerImpl (trainAgreement, addTrainAgreementInfo, trainAgreementInfo,
 * updateTrainAgree, deleteTrainAgreement) và ExcelImportCtroller.importTrainAgreement của dự án Hanwha_HTSV.
 * Khác bản gốc:
 * - Người ký hợp đồng lấy lại PERSON_ID/họ tên từ HR_EMPLOYEE theo mã nhân viên ở BE (bản gốc tin dữ liệu ẩn trên form).
 * - Import không qua bảng tạm EDU_TRAIN_AGREEMENT_TEMP: kiểm tra từng dòng (mã nhân viên tồn tại, ngày/số hợp lệ) rồi
 *   insert trực tiếp, sinh mã hợp đồng TRAxxxxxx cho từng dòng trong cùng transaction.
 */
@Service
public class EduTrainAgreementServiceImpl implements EduTrainAgreementService {
    private static final Logger log = LoggerFactory.getLogger(EduTrainAgreementServiceImpl.class);

    private static final String AGREE_ID_PREFIX = "TRA";
    private static final int MAX_IMPORT_ROWS = 2000;

    @Autowired
    private EduTrainAgreementMapper mapper;

    @Autowired
    private EduCommonMapper commonMapper;

    @Autowired
    private EduFileService fileService;

    @Autowired
    private Validator validator;

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<EduTrainAgreementDto> getList(EduTrainAgreementSearchDto search) throws BusinessException {
        log.info("getList - search={}", search);
        List<EduTrainAgreementDto> rows;
        try {
            search.setKeyword(trimToNull(search.getKeyword()));
            rows = mapper.selectList(search);
        } catch (Exception e) {
            log.error("getList failed - search={}", search, e);
            throw new BusinessException("EDU_AGREEMENT_LOAD", "common.loadFail", e);
        }
        Map<String, List<EssFileDto>> files = fileService.getFilesGroupByApplyNo(EduFileService.TYPE_TRAIN_AGREEMENT);
        rows.forEach(r -> r.setFiles(files.getOrDefault(r.getAgreeNo(), new ArrayList<>())));
        log.info("getList - found {} rows", rows.size());
        return rows;
    }

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public EduTrainAgreementDto getOne(String agreeNo) throws BusinessException {
        log.info("getOne - agreeNo={}", agreeNo);
        EduTrainAgreementDto dto;
        try {
            dto = mapper.selectOne(agreeNo);
        } catch (Exception e) {
            log.error("getOne failed - agreeNo={}", agreeNo, e);
            throw new BusinessException("EDU_AGREEMENT_LOAD", "common.loadFail", e);
        }
        if (dto == null) {
            throw new BusinessException("EDU_AGREEMENT_NOT_FOUND", "common.noData");
        }
        dto.setFiles(fileService.getFiles(EduFileService.TYPE_TRAIN_AGREEMENT, agreeNo));
        return dto;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public String save(EduTrainAgreementDto dto) throws BusinessException {
        boolean isNew = !StringUtils.hasText(dto.getAgreeNo());
        log.info("save - isNew={}, agreeNo={}, empId={}", isNew, dto.getAgreeNo(), dto.getEmpId());
        try {
            if (isNew) {
                EduEmployeeDto emp = commonMapper.selectEmployeeByEmpId(dto.getEmpId());
                if (emp == null) {
                    throw new BusinessException("EDU_AGREEMENT_INVALID", "edu.teacherManager.QINGXIANXUANZEYIGEREN.a");
                }
                insert(dto, emp, mapper.selectMaxAgreeSeq() + 1);
            } else if (mapper.update(dto) == 0) {
                throw new BusinessException("EDU_AGREEMENT_NOT_FOUND", "alert.message.update_fail");
            }
            return dto.getAgreeNo();
        } catch (BusinessException e) {
            throw e;
        } catch (Exception e) {
            log.error("save failed - agreeNo={}", dto.getAgreeNo(), e);
            throw new BusinessException("EDU_AGREEMENT_SAVE", isNew ? "alert.message.add_fail" : "alert.message.update_fail", e);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void delete(String agreeNo) throws BusinessException {
        log.info("delete - agreeNo={}", agreeNo);
        try {
            if (mapper.deactivate(agreeNo) == 0) {
                throw new BusinessException("EDU_AGREEMENT_NOT_FOUND", "alert.message.delete_fail");
            }
        } catch (BusinessException e) {
            throw e;
        } catch (Exception e) {
            log.error("delete failed - agreeNo={}", agreeNo, e);
            throw new BusinessException("EDU_AGREEMENT_DELETE", "alert.message.delete_fail", e);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public List<String> importRows(List<EduTrainAgreementDto> rows) throws BusinessException {
        int size = rows == null ? 0 : rows.size();
        log.info("importRows - rows={}", size);
        if (size == 0) {
            throw new BusinessException("EDU_AGREEMENT_IMPORT_EMPTY", "common.noData");
        }
        if (size > MAX_IMPORT_ROWS) {
            throw new BusinessException("EDU_AGREEMENT_IMPORT_TOO_MANY", "autoExcel.msg.tooLong");
        }
        try {
            // Bước 1: kiểm tra toàn bộ các dòng (dòng 1 là tiêu đề nên dòng dữ liệu bắt đầu từ 2)
            List<String> errors = new ArrayList<>();
            List<EduEmployeeDto> employees = new ArrayList<>();
            for (int i = 0; i < size; i++) {
                EduTrainAgreementDto row = rows.get(i);
                int excelRow = i + 2;
                Set<ConstraintViolation<EduTrainAgreementDto>> violations = validator.validate(row);
                for (ConstraintViolation<EduTrainAgreementDto> v : violations) {
                    errors.add(rowError(excelRow, v.getPropertyPath() + ": " + I18nUtil.getMessage(v.getMessage())));
                }
                EduEmployeeDto emp = StringUtils.hasText(row.getEmpId())
                        ? commonMapper.selectEmployeeByEmpId(row.getEmpId().trim()) : null;
                if (StringUtils.hasText(row.getEmpId()) && emp == null) {
                    errors.add(rowError(excelRow, I18nUtil.getMessage("edu.trainAgreement.msg.empNotFound") + " " + row.getEmpId()));
                }
                employees.add(emp);
            }
            if (!errors.isEmpty()) {
                log.warn("importRows - {} errors, nothing saved", errors.size());
                return errors;
            }
            // Bước 2: lưu tất cả
            long seq = mapper.selectMaxAgreeSeq();
            for (int i = 0; i < size; i++) {
                seq++;
                insert(rows.get(i), employees.get(i), seq);
            }
            log.info("importRows - inserted {} rows", size);
            return errors;
        } catch (Exception e) {
            log.error("importRows failed", e);
            throw new BusinessException("EDU_AGREEMENT_IMPORT", "alert.message.add_fail", e);
        }
    }

    private void insert(EduTrainAgreementDto dto, EduEmployeeDto emp, long agreeSeq) {
        dto.setPersonId(emp.getPersonId());
        dto.setEmpId(emp.getEmpId());
        dto.setLocalName(emp.getLocalName());
        dto.setAgreeId(AGREE_ID_PREFIX + String.format("%06d", agreeSeq));
        dto.setAgreeNo(mapper.selectNextNo());
        mapper.insert(dto);
        log.info("insert - agreeNo={}, agreeId={}, empId={}", dto.getAgreeNo(), dto.getAgreeId(), dto.getEmpId());
    }

    private String rowError(int excelRow, String message) {
        return I18nUtil.getMessage("edu.common.msg.row") + " " + excelRow + ": " + message;
    }

    private String trimToNull(String value) {
        return StringUtils.hasText(value) ? value.trim() : null;
    }
}
