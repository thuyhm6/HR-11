package com.ait.edu.trainEducation.service.impl;

import com.ait.edu.trainEducation.dto.EduTrainArchiveDto;
import com.ait.edu.trainEducation.dto.EduTrainArchiveSearchDto;
import com.ait.edu.trainEducation.mapper.EduTrainArchivesMapper;
import com.ait.edu.trainEducation.service.EduFileService;
import com.ait.edu.trainEducation.service.EduTrainArchivesService;
import com.ait.ess.empinfo.dto.EssFileDto;
import com.ait.exception.BusinessException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Hồ sơ đào tạo. Giống bản gốc: không nhập thời gian thì lấy tháng hiện tại; dữ liệu trước ngày chuyển hệ thống
 * (07/08/2015) nằm ở EDU_TRAIN_BASIC_HISTORY - chỉ truy vấn bảng nào có dữ liệu trong khoảng thời gian tìm.
 */
@Service
public class EduTrainArchivesServiceImpl implements EduTrainArchivesService {

    private static final Logger log = LoggerFactory.getLogger(EduTrainArchivesServiceImpl.class);
    private static final DateTimeFormatter DMY = DateTimeFormatter.ofPattern("dd/MM/yyyy");
    private static final LocalDate HISTORY_DATE = LocalDate.of(2015, 8, 7);

    @Autowired
    private EduTrainArchivesMapper mapper;

    @Autowired
    private EduFileService fileService;

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<EduTrainArchiveDto> getList(EduTrainArchiveSearchDto search) throws BusinessException {
        log.info("getList - search={}", search);
        LocalDate today = LocalDate.now();
        LocalDate start = parse(search.getStartDate(), today.withDayOfMonth(1));
        LocalDate end = parse(search.getEndDate(), today.withDayOfMonth(today.lengthOfMonth()));
        if (start.isAfter(end)) {
            log.info("getList - startDate after endDate, return empty");
            return new ArrayList<>();
        }
        search.setStartDate(start.format(DMY));
        search.setEndDate(end.format(DMY));
        search.setIncludeCurrent(end.isAfter(HISTORY_DATE));
        search.setIncludeHistory(!start.isAfter(HISTORY_DATE));
        search.setKeyword(trimToNull(search.getKeyword()));
        search.setDeptNo(trimToNull(search.getDeptNo()));
        search.setCourseName(trimToNull(search.getCourseName()));
        search.setTrainContent(trimToNull(search.getTrainContent()));
        try {
            List<EduTrainArchiveDto> rows = mapper.selectList(search);
            if (search.isIncludeCurrent() && !rows.isEmpty()) {
                Map<String, List<EssFileDto>> files = fileService.getFilesGroupByApplyNo(EduFileService.TYPE_TRAIN_RESULT);
                for (EduTrainArchiveDto row : rows) {
                    if (row.isHistory()) continue;
                    // Bản gốc upload báo cáo theo RESULT_NO (trainResultInfo) hoặc BASIC_NO (trainResultTSTOInfo)
                    if (row.getResultNo() != null) row.getFiles().addAll(files.getOrDefault(row.getResultNo(), List.of()));
                    if (row.getBasicNo() != null) row.getFiles().addAll(files.getOrDefault(row.getBasicNo(), List.of()));
                }
            }
            log.info("getList - found {} rows", rows.size());
            return rows;
        } catch (BusinessException e) {
            throw e;
        } catch (Exception e) {
            log.error("getList failed - search={}", search, e);
            throw new BusinessException("EDU_ARCHIVES_LOAD", "common.loadFail", e);
        }
    }

    private static LocalDate parse(String value, LocalDate defaultValue) throws BusinessException {
        if (!StringUtils.hasText(value)) return defaultValue;
        try {
            return LocalDate.parse(value.trim(), DMY);
        } catch (DateTimeParseException e) {
            log.warn("getList - invalid date: {}", value);
            throw new BusinessException("EDU_ARCHIVES_INVALID", "common.loadFail", e);
        }
    }

    private static String trimToNull(String value) {
        return StringUtils.hasText(value) ? value.trim() : null;
    }
}
