package com.ait.edu.trainEducation.service.impl;

import com.ait.edu.trainEducation.dto.EduTrainBasicSearchDto;
import com.ait.edu.trainEducation.dto.EduTrainCostDto;
import com.ait.edu.trainEducation.mapper.EduTrainCostMapper;
import com.ait.edu.trainEducation.service.EduFileService;
import com.ait.edu.trainEducation.service.EduTrainCostService;
import com.ait.exception.BusinessException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.List;

/**
 * Chi phí đào tạo - chuyển từ TrainEducationSerImpl (trainCostManager, trainCostManagerInfo, updateTrainCostManagerInfo)
 * của dự án Hanwha_HTSV. File đính kèm upload/xóa riêng qua EduFileService (APPLY_TYPE = eduCostManager).
 */
@Service
public class EduTrainCostServiceImpl implements EduTrainCostService {
    private static final Logger log = LoggerFactory.getLogger(EduTrainCostServiceImpl.class);

    @Autowired
    private EduTrainCostMapper mapper;

    @Autowired
    private EduFileService fileService;

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<EduTrainCostDto> getList(EduTrainBasicSearchDto search) throws BusinessException {
        log.info("getList - search={}", search);
        try {
            search.setCourseName(StringUtils.hasText(search.getCourseName()) ? search.getCourseName().trim() : null);
            List<EduTrainCostDto> rows = mapper.selectList(search);
            log.info("getList - found {} rows", rows.size());
            return rows;
        } catch (Exception e) {
            log.error("getList failed - search={}", search, e);
            throw new BusinessException("EDU_COST_LOAD", "common.loadFail", e);
        }
    }

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public EduTrainCostDto getOne(String costNo) throws BusinessException {
        log.info("getOne - costNo={}", costNo);
        EduTrainCostDto dto;
        try {
            dto = mapper.selectOne(costNo);
        } catch (Exception e) {
            log.error("getOne failed - costNo={}", costNo, e);
            throw new BusinessException("EDU_COST_LOAD", "common.loadFail", e);
        }
        if (dto == null) {
            throw new BusinessException("EDU_COST_NOT_FOUND", "common.noData");
        }
        dto.setFiles(fileService.getFiles(EduFileService.TYPE_COST_MANAGER, costNo));
        return dto;
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void save(EduTrainCostDto dto) throws BusinessException {
        log.info("save - costNo={}", dto.getCostNo());
        if (!StringUtils.hasText(dto.getCostNo())) {
            throw new BusinessException("EDU_COST_INVALID", "edu.systemManager.QINGXUANZEQIZHONGYIXIANG.a");
        }
        try {
            dto.setRemark(StringUtils.hasText(dto.getRemark()) ? dto.getRemark().trim() : null);
            if (mapper.update(dto) == 0) {
                throw new BusinessException("EDU_COST_NOT_FOUND", "alert.message.update_fail");
            }
        } catch (BusinessException e) {
            throw e;
        } catch (Exception e) {
            log.error("save failed - costNo={}", dto.getCostNo(), e);
            throw new BusinessException("EDU_COST_SAVE", "alert.message.update_fail", e);
        }
    }
}
