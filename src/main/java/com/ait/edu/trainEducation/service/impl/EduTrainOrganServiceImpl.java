package com.ait.edu.trainEducation.service.impl;

import com.ait.edu.trainEducation.dto.EduTrainOrganDto;
import com.ait.edu.trainEducation.mapper.EduTrainOrganMapper;
import com.ait.edu.trainEducation.service.EduFileService;
import com.ait.edu.trainEducation.service.EduTrainOrganService;
import com.ait.ess.empinfo.dto.EssFileDto;
import com.ait.exception.BusinessException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Đơn vị đào tạo - chuyển từ TrainEducationSerImpl (trainOrgan, addTrainOrganInfo, trainOrganInfo, updateTrainOrgan,
 * deleteTrainOrgan) của dự án Hanwha_HTSV.
 * Khác bản gốc: file đính kèm được upload/xóa riêng qua EduFileService (bản gốc xóa hết rồi thêm lại mỗi lần lưu);
 * danh sách gắn file bằng 1 câu SQL thay vì 1 câu cho mỗi dòng.
 */
@Service
public class EduTrainOrganServiceImpl implements EduTrainOrganService {
    private static final Logger log = LoggerFactory.getLogger(EduTrainOrganServiceImpl.class);

    @Autowired
    private EduTrainOrganMapper mapper;

    @Autowired
    private EduFileService fileService;

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<EduTrainOrganDto> getList(String organName, String address) throws BusinessException {
        log.info("getList - organName={}, address={}", organName, address);
        List<EduTrainOrganDto> rows;
        try {
            rows = mapper.selectList(trimToNull(organName), trimToNull(address));
        } catch (Exception e) {
            log.error("getList failed - organName={}, address={}", organName, address, e);
            throw new BusinessException("EDU_TRAIN_ORGAN_LOAD", "common.loadFail", e);
        }
        Map<String, List<EssFileDto>> files = fileService.getFilesGroupByApplyNo(EduFileService.TYPE_TRAIN_ORGAN);
        rows.forEach(r -> r.setFiles(files.getOrDefault(r.getOrganNo(), new ArrayList<>())));
        log.info("getList - found {} rows", rows.size());
        return rows;
    }

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public EduTrainOrganDto getOne(String organNo) throws BusinessException {
        log.info("getOne - organNo={}", organNo);
        EduTrainOrganDto dto;
        try {
            dto = mapper.selectOne(organNo);
        } catch (Exception e) {
            log.error("getOne failed - organNo={}", organNo, e);
            throw new BusinessException("EDU_TRAIN_ORGAN_LOAD", "common.loadFail", e);
        }
        if (dto == null) {
            throw new BusinessException("EDU_TRAIN_ORGAN_NOT_FOUND", "common.noData");
        }
        dto.setFiles(fileService.getFiles(EduFileService.TYPE_TRAIN_ORGAN, organNo));
        return dto;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public String save(EduTrainOrganDto dto) throws BusinessException {
        boolean isNew = !StringUtils.hasText(dto.getOrganNo());
        log.info("save - isNew={}, organNo={}, organName={}", isNew, dto.getOrganNo(), dto.getOrganName());
        try {
            if (isNew) {
                dto.setOrganNo(mapper.selectNextNo());
                mapper.insert(dto);
            } else if (mapper.update(dto) == 0) {
                throw new BusinessException("EDU_TRAIN_ORGAN_NOT_FOUND", "alert.message.update_fail");
            }
            return dto.getOrganNo();
        } catch (BusinessException e) {
            throw e;
        } catch (Exception e) {
            log.error("save failed - organNo={}", dto.getOrganNo(), e);
            throw new BusinessException("EDU_TRAIN_ORGAN_SAVE", isNew ? "alert.message.add_fail" : "alert.message.update_fail", e);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void delete(String organNo) throws BusinessException {
        log.info("delete - organNo={}", organNo);
        try {
            if (mapper.deactivate(organNo) == 0) {
                throw new BusinessException("EDU_TRAIN_ORGAN_NOT_FOUND", "alert.message.delete_fail");
            }
        } catch (BusinessException e) {
            throw e;
        } catch (Exception e) {
            log.error("delete failed - organNo={}", organNo, e);
            throw new BusinessException("EDU_TRAIN_ORGAN_DELETE", "alert.message.delete_fail", e);
        }
    }

    private String trimToNull(String value) {
        return StringUtils.hasText(value) ? value.trim() : null;
    }
}
