package com.ait.pa.workManagement.service.impl;

import com.ait.exception.BusinessException;
import com.ait.pa.workManagement.dto.PaResultSummaryDto;
import com.ait.pa.workManagement.dto.PaResultSummarySearchDto;
import com.ait.pa.workManagement.dto.PaSalaryDetailDto;
import com.ait.pa.workManagement.dto.PaSalaryDetailItemDto;
import com.ait.pa.workManagement.dto.PaSalaryDetailSearchDto;
import com.ait.pa.workManagement.mapper.PaSalaryResultMapper;
import com.ait.pa.workManagement.service.PaSalaryResultService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.Collections;
import java.util.List;

/**
 * Báo cáo kết quả lương - thay cho viewPaParamSerImp (detailPersonCountInfoLeft, detailYearCountInfoLeft,
 * detailMonth/YearCountInfoRight, viewPaResultList, viewDeptPaResultList) của dự án Hanwha_HTSV.
 * Bản gốc không có kế hoạch trả lương / tháng thì trả danh sách rỗng - giữ nguyên, nhưng báo lỗi rõ ràng cho frontend.
 */
@Service
public class PaSalaryResultServiceImpl implements PaSalaryResultService {

    private static final Logger log = LoggerFactory.getLogger(PaSalaryResultServiceImpl.class);

    /** 3 loại hạng mục procedure PA_FOR_MY_SALARY_DETAIL_PAGE_P sinh ra (= 3 bảng bên phải của bản gốc). */
    private static final int[] DETAIL_ITEM_TYPES = {1, 2, 3};

    @Autowired
    private PaSalaryResultMapper mapper;

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<PaSalaryDetailDto> getMonthList(PaSalaryDetailSearchDto search) throws BusinessException {
        log.info("getMonthList - payScheduleNo={}, empSearch={}, deptNo={}",
                search.getPayScheduleNo(), search.getEmpSearch(), search.getDeptNo());
        requireText(search.getPayScheduleNo(), "pa.result.msgSelectPaySchedule");
        try {
            search.setEmpSearch(trim(search.getEmpSearch()));
            List<PaSalaryDetailDto> rows = mapper.selectMonthList(search);
            log.info("getMonthList - found {} rows", rows.size());
            return rows;
        } catch (Exception e) {
            log.error("getMonthList failed - payScheduleNo={}", search.getPayScheduleNo(), e);
            throw new BusinessException("PA_SALARY_MONTH_LOAD", "common.loadFail", e);
        }
    }

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<PaSalaryDetailDto> getYearList(PaSalaryDetailSearchDto search) throws BusinessException {
        log.info("getYearList - personId={}, startMonth={}, endMonth={}",
                search.getPersonId(), search.getStartMonth(), search.getEndMonth());
        requireText(search.getPersonId(), "hrm.empinfo.pleaseSelectEmp");
        requireText(search.getStartMonth(), "pa.salaryDetail.msgSelectPeriod");
        requireText(search.getEndMonth(), "pa.salaryDetail.msgSelectPeriod");
        try {
            List<PaSalaryDetailDto> rows = mapper.selectYearList(search);
            log.info("getYearList - found {} rows", rows.size());
            return rows;
        } catch (Exception e) {
            log.error("getYearList failed - personId={}", search.getPersonId(), e);
            throw new BusinessException("PA_SALARY_YEAR_LOAD", "common.loadFail", e);
        }
    }

    /**
     * Gọi procedure 3 lần (ITEM_TYPE 1/2/3) để sinh PA_MY_SALARY_PAGE_DATA rồi đọc lại - đúng như
     * viewPaParamDaoImpl.detailMonthCountInfoRight / detailYearCountInfoRight bản gốc. Procedure ghi dữ liệu nên
     * không dùng readOnly.
     */
    @Override
    @Transactional(rollbackFor = Exception.class)
    public List<PaSalaryDetailItemDto> getDetailItems(PaSalaryDetailSearchDto search, String from) throws BusinessException {
        boolean isMonth = "month".equals(from);
        log.info("getDetailItems - from={}, personId={}, payScheduleNo={}, payDate={}, startMonth={}, endMonth={}",
                from, search.getPersonId(), search.getPayScheduleNo(), search.getPayDate(),
                search.getStartMonth(), search.getEndMonth());
        if (!StringUtils.hasText(search.getPersonId())) {
            return Collections.emptyList();
        }
        if (isMonth) {
            requireText(search.getPayScheduleNo(), "pa.result.msgSelectPaySchedule");
        } else {
            requireText(search.getPayDate(), "pa.salaryDetail.msgSelectPeriod");
            requireText(search.getStartMonth(), "pa.salaryDetail.msgSelectPeriod");
            requireText(search.getEndMonth(), "pa.salaryDetail.msgSelectPeriod");
        }
        try {
            for (int itemType : DETAIL_ITEM_TYPES) {
                search.setItemType(itemType);
                if (isMonth) {
                    mapper.callMonthDetailPage(search);
                } else {
                    mapper.callYearDetailPage(search);
                }
            }
            List<PaSalaryDetailItemDto> items = mapper.selectDetailItems(search.getPersonId());
            log.info("getDetailItems - found {} items", items.size());
            return items;
        } catch (Exception e) {
            log.error("getDetailItems failed - personId={}", search.getPersonId(), e);
            throw new BusinessException("PA_SALARY_DETAIL_LOAD", "common.loadFail", e);
        }
    }

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<PaResultSummaryDto> getEmpResultList(PaResultSummarySearchDto search) throws BusinessException {
        log.info("getEmpResultList - payScheduleNo={}, empSearch={}, deptNos={}",
                search.getPayScheduleNo(), search.getEmpSearch(), sizeOf(search.getDeptNos()));
        requireText(search.getPayScheduleNo(), "pa.result.msgSelectPaySchedule");
        try {
            search.setEmpSearch(trim(search.getEmpSearch()));
            List<PaResultSummaryDto> rows = mapper.selectEmpResultList(search);
            log.info("getEmpResultList - found {} rows", rows.size());
            return rows;
        } catch (Exception e) {
            log.error("getEmpResultList failed - payScheduleNo={}", search.getPayScheduleNo(), e);
            throw new BusinessException("PA_RESULT_EMP_LOAD", "common.loadFail", e);
        }
    }

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<PaResultSummaryDto> getDeptResultList(PaResultSummarySearchDto search) throws BusinessException {
        log.info("getDeptResultList - payScheduleNo={}, deptNos={}", search.getPayScheduleNo(), sizeOf(search.getDeptNos()));
        requireText(search.getPayScheduleNo(), "pa.result.msgSelectPaySchedule");
        try {
            List<PaResultSummaryDto> rows = mapper.selectDeptResultList(search);
            log.info("getDeptResultList - found {} rows", rows.size());
            return rows;
        } catch (Exception e) {
            log.error("getDeptResultList failed - payScheduleNo={}", search.getPayScheduleNo(), e);
            throw new BusinessException("PA_RESULT_DEPT_LOAD", "common.loadFail", e);
        }
    }

    private void requireText(String value, String messageKey) throws BusinessException {
        if (!StringUtils.hasText(value)) {
            log.warn("Thiếu tham số bắt buộc - messageKey={}", messageKey);
            throw new BusinessException("PA_SALARY_RESULT_REQUIRED", messageKey);
        }
    }

    private static String trim(String value) {
        return value == null ? null : value.trim();
    }

    private static int sizeOf(List<String> list) {
        return list == null ? 0 : list.size();
    }
}
