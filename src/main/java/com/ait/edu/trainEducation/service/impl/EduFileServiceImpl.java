package com.ait.edu.trainEducation.service.impl;

import com.ait.edu.trainEducation.service.EduFileService;
import com.ait.ess.empinfo.dto.EssFileDto;
import com.ait.ess.empinfo.mapper.EssFileMapper;
import com.ait.exception.BusinessException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

/**
 * Lưu file vào thư mục app.file.upload.path + ghi ESS_FILE - cùng cách lưu với EssPersonalInfoServiceImpl.saveFile()
 * (hàm đó là private, gắn với luồng đơn xin ESS nên không gọi lại được) để API download dùng chung đọc được file.
 */
@Service
public class EduFileServiceImpl implements EduFileService {
    private static final Logger log = LoggerFactory.getLogger(EduFileServiceImpl.class);

    private static final Set<String> ALLOWED_TYPES = Set.of(TYPE_TRAIN_ORGAN, TYPE_TRAIN_AGREEMENT, TYPE_PLAN_MANAGER,
            TYPE_TRAIN_RESULT, TYPE_COST_MANAGER);
    private static final long MAX_FILE_SIZE = 20L * 1024L * 1024L;

    @Value("${app.file.upload.path:D:/source/VHR/HTSV_HR/resources/fileUpload}")
    private String fileUploadPath;

    @Autowired
    private EssFileMapper essFileMapper;

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<EssFileDto> getFiles(String applyType, String applyNo) throws BusinessException {
        checkApply(applyType, applyNo);
        log.info("getFiles - applyType={}, applyNo={}", applyType, applyNo);
        try {
            return essFileMapper.selectFilesByApply(applyType, applyNo);
        } catch (Exception e) {
            log.error("getFiles failed - applyType={}, applyNo={}", applyType, applyNo, e);
            throw new BusinessException("EDU_FILE_LOAD", "common.loadFail", e);
        }
    }

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public Map<String, List<EssFileDto>> getFilesGroupByApplyNo(String applyType) throws BusinessException {
        if (!ALLOWED_TYPES.contains(applyType)) {
            throw new BusinessException("EDU_FILE_INVALID", "common.loadFail");
        }
        try {
            return essFileMapper.selectFilesByApplyType(applyType).stream()
                    .filter(f -> f.getApplyNo() != null)
                    .collect(Collectors.groupingBy(EssFileDto::getApplyNo));
        } catch (Exception e) {
            log.error("getFilesGroupByApplyNo failed - applyType={}", applyType, e);
            throw new BusinessException("EDU_FILE_LOAD", "common.loadFail", e);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public int upload(String applyType, String applyNo, List<MultipartFile> files) throws BusinessException {
        checkApply(applyType, applyNo);
        log.info("upload - applyType={}, applyNo={}, files={}", applyType, applyNo, files == null ? 0 : files.size());
        if (files == null || files.isEmpty()) {
            return 0;
        }
        try {
            Path uploadDir = Paths.get(fileUploadPath);
            if (!Files.exists(uploadDir)) {
                Files.createDirectories(uploadDir);
            }
            int count = 0;
            for (MultipartFile file : files) {
                if (file == null || file.isEmpty()) {
                    continue;
                }
                if (file.getSize() > MAX_FILE_SIZE) {
                    throw new BusinessException("EDU_FILE_TOO_LARGE", "edu.common.msg.fileTooLarge");
                }
                String rawName = file.getOriginalFilename();
                String originalName = StringUtils.cleanPath(rawName != null ? rawName : "file");
                int dotIdx = originalName.lastIndexOf('.');
                String ext = dotIdx >= 0 ? originalName.substring(dotIdx) : "";
                String storedName = UUID.randomUUID() + ext;
                Files.copy(file.getInputStream(), uploadDir.resolve(storedName), StandardCopyOption.REPLACE_EXISTING);

                EssFileDto dto = new EssFileDto();
                dto.setApplyNo(applyNo);
                dto.setApplyType(applyType);
                dto.setFileUrl(storedName);
                dto.setFileName(originalName);
                essFileMapper.insertEssFile(dto);
                count++;
                log.info("upload - saved {} -> {}", originalName, storedName);
            }
            return count;
        } catch (BusinessException e) {
            throw e;
        } catch (Exception e) {
            log.error("upload failed - applyType={}, applyNo={}", applyType, applyNo, e);
            throw new BusinessException("EDU_FILE_UPLOAD", "edu.common.msg.uploadFail", e);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public int delete(String applyType, String applyNo, List<String> fileNos) throws BusinessException {
        checkApply(applyType, applyNo);
        log.info("delete - applyType={}, applyNo={}, fileNos={}", applyType, applyNo, fileNos);
        if (fileNos == null || fileNos.isEmpty()) {
            return 0;
        }
        try {
            return essFileMapper.deactivateFiles(applyType, applyNo, fileNos);
        } catch (Exception e) {
            log.error("delete failed - applyType={}, applyNo={}", applyType, applyNo, e);
            throw new BusinessException("EDU_FILE_DELETE", "alert.message.delete_fail", e);
        }
    }

    /** Chỉ cho phép các loại file của module Đào tạo - tránh dùng API này đọc/xóa file của phân hệ khác. */
    private void checkApply(String applyType, String applyNo) throws BusinessException {
        if (!ALLOWED_TYPES.contains(applyType) || !StringUtils.hasText(applyNo)) {
            throw new BusinessException("EDU_FILE_INVALID", "common.loadFail");
        }
    }
}
