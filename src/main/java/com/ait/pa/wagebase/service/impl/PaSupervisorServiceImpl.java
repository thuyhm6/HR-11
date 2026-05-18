package com.ait.pa.wagebase.service.impl;

import com.ait.pa.wagebase.dto.PaSupervisorDto;
import com.ait.pa.wagebase.mapper.PaSupervisorMapper;
import com.ait.pa.wagebase.service.PaSupervisorService;
import com.ait.sy.sys.dto.DataTablesResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PaSupervisorServiceImpl implements PaSupervisorService {

    private static final Logger log = LoggerFactory.getLogger(PaSupervisorServiceImpl.class);

    @Autowired
    private PaSupervisorMapper mapper;

    @Override
    public DataTablesResponse<PaSupervisorDto> getPagedList(PaSupervisorDto params) {
        try {
            parseDeptNos(params);
            long total = mapper.countList(params);
            List<PaSupervisorDto> data = mapper.selectListPage(params);
            log.info("Phân trang PA_SUPERVISOR: total={}, start={}, length={}", total, params.getStart(), params.getLength());
            return new DataTablesResponse<>(params.getDraw(), total, total, data);
        } catch (Exception e) {
            log.error("Lỗi khi lấy danh sách người phụ trách lương: {}", e.getMessage(), e);
            throw e;
        }
    }

    @Override
    public PaSupervisorDto getOne(String personId) {
        try {
            return mapper.selectOne(personId);
        } catch (Exception e) {
            log.error("Lỗi khi lấy chi tiết người phụ trách lương personId={}: {}", personId, e.getMessage(), e);
            throw e;
        }
    }

    @Override
    @Transactional
    public void save(PaSupervisorDto dto) {
        try {
            boolean isNew = (mapper.existsByPersonId(dto.getPersonId()) == 0);
            if (isNew) {
                mapper.insert(dto);
                log.info("Thêm mới PA_SUPERVISOR: personId={}", dto.getPersonId());
            } else {
                mapper.update(dto);
                log.info("Cập nhật PA_SUPERVISOR: personId={}", dto.getPersonId());
            }
        } catch (Exception e) {
            log.error("Lỗi khi lưu người phụ trách lương: {}", e.getMessage(), e);
            throw e;
        }
    }

    @Override
    @Transactional
    public void deleteList(List<String> personIds) {
        try {
            for (String personId : personIds) {
                mapper.deleteByPersonId(personId);
                log.info("Xóa PA_SUPERVISOR: personId={}", personId);
            }
        } catch (Exception e) {
            log.error("Lỗi khi xóa danh sách người phụ trách lương: {}", e.getMessage(), e);
            throw e;
        }
    }

    private void parseDeptNos(PaSupervisorDto params) {
        if (params.getDeptNos() != null && !params.getDeptNos().trim().isEmpty()) {
            List<String> list = Arrays.stream(params.getDeptNos().split(","))
                    .map(String::trim)
                    .filter(s -> !s.isEmpty())
                    .collect(Collectors.toList());
            params.setDeptNoList(list.isEmpty() ? null : list);
        } else {
            params.setDeptNoList(null);
        }
    }
}
