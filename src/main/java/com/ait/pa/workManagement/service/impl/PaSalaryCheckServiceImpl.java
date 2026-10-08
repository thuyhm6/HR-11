package com.ait.pa.workManagement.service.impl;

import com.ait.exception.BusinessException;
import com.ait.pa.workManagement.dto.PaMonthDifItemDto;
import com.ait.pa.workManagement.dto.PaMonthPersonSummaryDto;
import com.ait.pa.workManagement.dto.PaResultConfirmSummaryDto;
import com.ait.pa.workManagement.dto.PaSalaryCheckItemDto;
import com.ait.pa.workManagement.dto.PaSalaryCheckRowDto;
import com.ait.pa.workManagement.dto.PaSalaryCheckSearchDto;
import com.ait.pa.workManagement.mapper.PaSalaryCheckMapper;
import com.ait.pa.workManagement.service.PaSalaryCheckService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import java.util.concurrent.Callable;
import java.util.regex.Pattern;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * Nhóm màn hình kiểm tra / đối chiếu lương - thay cho viewPaParamSerImp + PaMonthChainImp của dự án Hanwha_HTSV.
 * Bản gốc thiếu điều kiện thì trả danh sách rỗng - bản mới báo lỗi rõ ràng (BusinessException PA_SALARY_CHECK_REQUIRED).
 * Các API gọi procedure ghi bảng tạm (PA_MONTH_DIF_ITEM_TEMP, PA_SALARY_DETAIL_PAGE_DATA) nên không dùng readOnly.
 */
@Service
public class PaSalaryCheckServiceImpl implements PaSalaryCheckService {

    private static final Logger log = LoggerFactory.getLogger(PaSalaryCheckServiceImpl.class);

    static final String ERR_REQUIRED = "PA_SALARY_CHECK_REQUIRED";

    /** Giới hạn phần tử IN (...) của Oracle là 1000. */
    private static final int IN_CHUNK_SIZE = 900;

    /** ITEM_ID dùng làm tên cột động của PA_SUMMARY_HTSV. */
    private static final Pattern COLUMN_NAME = Pattern.compile("^[A-Za-z][A-Za-z0-9_]{0,29}$");

    private static final Set<String> PAGE_TYPES = Set.of("1", "2", "3");
    private static final Set<String> SELECT_TYPES =
            Set.of("PERSON_NUM", "PERSON_NUM_PRO", "COUNT_UP", "COUNT_LOW", "PERSON_UP", "PERSON_LOW");

    @Autowired
    private PaSalaryCheckMapper mapper;

    // ── Hiện trạng lương theo tháng ──────────────────────────────────────

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public PaMonthPersonSummaryDto getMonthPersonSummary(PaSalaryCheckSearchDto search) throws BusinessException {
        log.info("getMonthPersonSummary - salaryDistinNo={}, payDatePro={}, payDate={}",
                search.getSalaryDistinNo(), search.getPayDatePro(), search.getPayDate());
        requirePeriod(search, true);
        return load("getMonthPersonSummary", "PA_MONTH_PERSON_LOAD", () -> {
            PaMonthPersonSummaryDto result = new PaMonthPersonSummaryDto();
            result.setCounts(mapper.selectMonthPersonCounts(search));
            result.setIncreases(mergePersonIds(mapper.selectMonthPersonIncreases(search)));
            result.setDecreases(mergePersonIds(mapper.selectMonthPersonDecreases(search)));
            log.info("getMonthPersonSummary - counts={}, increases={}, decreases={}",
                    result.getCounts().size(), result.getIncreases().size(), result.getDecreases().size());
            return result;
        });
    }

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<PaSalaryCheckRowDto> getEmployeesByPersonIds(List<String> personIds) throws BusinessException {
        List<String> ids = personIds == null ? Collections.emptyList()
                : personIds.stream().filter(StringUtils::hasText).map(String::trim).distinct().collect(Collectors.toList());
        log.info("getEmployeesByPersonIds - size={}", ids.size());
        if (ids.isEmpty()) {
            return Collections.emptyList();
        }
        return load("getEmployeesByPersonIds", "PA_MONTH_PERSON_EMP_LOAD", () -> {
            List<PaSalaryCheckRowDto> rows = new ArrayList<>();
            for (int i = 0; i < ids.size(); i += IN_CHUNK_SIZE) {
                rows.addAll(mapper.selectEmployeesByPersonIds(ids.subList(i, Math.min(i + IN_CHUNK_SIZE, ids.size()))));
            }
            return rows;
        });
    }

    // ── So sánh lương theo tháng ─────────────────────────────────────────

    @Override
    @Transactional(rollbackFor = Exception.class)
    public List<PaMonthDifItemDto> getMonthChainList(PaSalaryCheckSearchDto search) throws BusinessException {
        log.info("getMonthChainList - salaryDistinNo={}, payDatePro={}, payDate={}",
                search.getSalaryDistinNo(), search.getPayDatePro(), search.getPayDate());
        requirePeriod(search, true);
        return load("getMonthChainList", "PA_MONTH_CHAIN_LOAD", () -> {
            mapper.callMonthDifItemCompare(search);
            return mapper.selectMonthChainList();
        });
    }

    // ── Kiểm tra quyết định nhân sự ──────────────────────────────────────

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<PaSalaryCheckRowDto> getVerificationList(PaSalaryCheckSearchDto search) throws BusinessException {
        log.info("getVerificationList - payScheduleNo={}, empSearch={}", search.getPayScheduleNo(), search.getEmpSearch());
        requireText(search.getPayScheduleNo(), "pa.result.msgSelectPaySchedule");
        search.setEmpSearch(trim(search.getEmpSearch()));
        return load("getVerificationList", "PA_VERIFICATION_LOAD", () -> mapper.selectVerificationList(search));
    }

    // ── Chi tiết lương cá nhân ───────────────────────────────────────────

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public PaSalaryCheckRowDto getPersonEmpInfo(PaSalaryCheckSearchDto search) throws BusinessException {
        log.info("getPersonEmpInfo - personId={}, payScheduleNo={}", search.getPersonId(), search.getPayScheduleNo());
        requireText(search.getPersonId(), "hrm.empinfo.pleaseSelectEmp");
        requireText(search.getPayScheduleNo(), "pa.result.msgSelectPaySchedule");
        return load("getPersonEmpInfo", "PA_PERSON_EMP_LOAD", () -> mapper.selectPersonEmpInfo(search));
    }

    /** Gọi PA_FOR_SALARY_DETAIL_PAGE_P sinh PA_SALARY_DETAIL_PAGE_DATA rồi đọc lại - đúng như getPaDetailInfoList bản gốc. */
    @Override
    @Transactional(rollbackFor = Exception.class)
    public List<PaSalaryCheckItemDto> getPersonSalaryItems(PaSalaryCheckSearchDto search) throws BusinessException {
        log.info("getPersonSalaryItems - personId={}, payScheduleNo={}", search.getPersonId(), search.getPayScheduleNo());
        requireText(search.getPersonId(), "hrm.empinfo.pleaseSelectEmp");
        requireText(search.getPayScheduleNo(), "pa.result.msgSelectPaySchedule");
        return load("getPersonSalaryItems", "PA_PERSON_ITEMS_LOAD", () -> {
            mapper.callSalaryDetailPage(search);
            return mapper.selectPersonSalaryItems(search);
        });
    }

    // ── Hạng mục ─────────────────────────────────────────────────────────

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<PaSalaryCheckItemDto> getItemOptions() throws BusinessException {
        log.info("getItemOptions");
        return load("getItemOptions", "PA_ITEM_OPTION_LOAD", () -> mapper.selectItemOptions());
    }

    /** Bản gốc chỉ hiển thị dòng PAY_NUMBER > 0 (lọc ở JSP) - lọc tại service. */
    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<PaSalaryCheckRowDto> getItemCountList(PaSalaryCheckSearchDto search) throws BusinessException {
        log.info("getItemCountList - payScheduleNo={}, itemId={}", search.getPayScheduleNo(), search.getItemId());
        requireText(search.getPayScheduleNo(), "pa.result.msgSelectPaySchedule");
        requireText(search.getItemId(), "pa.salaryCheck.msgSelectItem");
        String itemColumn = validateItemColumn(search.getItemId());
        return load("getItemCountList", "PA_ITEM_COUNT_LOAD", () ->
                mapper.selectItemCountList(search.getPayScheduleNo(), search.getItemId(), itemColumn).stream()
                        .filter(r -> r.getPayNumber() != null && r.getPayNumber().compareTo(BigDecimal.ZERO) > 0)
                        .collect(Collectors.toList()));
    }

    // ── Chênh lệch hạng mục giữa 2 kỳ ────────────────────────────────────

    @Override
    @Transactional(rollbackFor = Exception.class)
    public List<PaMonthDifItemDto> getMonthDifGroups(PaSalaryCheckSearchDto search) throws BusinessException {
        log.info("getMonthDifGroups - salaryDistinNo={}, payDate={}, itemType={}, pageType={}",
                search.getSalaryDistinNo(), search.getPayDate(), search.getItemType(), search.getPageType());
        requirePeriod(search, false);
        validateMonthDif(search);
        return load("getMonthDifGroups", "PA_MONTH_DIF_LOAD", () -> {
            mapper.callMonthDifItem(search);
            return mapper.selectMonthDifGroups(search);
        });
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public List<PaSalaryCheckRowDto> getMonthDifDetails(PaSalaryCheckSearchDto search, boolean refresh) throws BusinessException {
        log.info("getMonthDifDetails - refresh={}, payDate={}, itemType={}, pageType={}, itemId={}, monthDif={}, selectType={}",
                refresh, search.getPayDate(), search.getItemType(), search.getPageType(), search.getItemId(),
                search.getMonthDif(), search.getSelectType());
        if (refresh) {
            requirePeriod(search, false);
        } else {
            requireText(search.getPayDate(), "pa.salaryCheck.msgSelectPayDate");
        }
        validateMonthDif(search);
        if (StringUtils.hasText(search.getSelectType()) && !SELECT_TYPES.contains(search.getSelectType())) {
            log.warn("getMonthDifDetails - selectType không hợp lệ: {}", search.getSelectType());
            search.setSelectType(null);
        }
        return load("getMonthDifDetails", "PA_MONTH_DIF_DETAIL_LOAD", () -> {
            if (refresh) {
                mapper.callMonthDifItem(search);
            }
            return mapper.selectMonthDifDetails(search);
        });
    }

    // ── Xác nhận kết quả ─────────────────────────────────────────────────

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public PaResultConfirmSummaryDto getResultConfirmSummary(PaSalaryCheckSearchDto search) throws BusinessException {
        log.info("getResultConfirmSummary - salaryDistinNo={}, payDatePro={}, payDate={}",
                search.getSalaryDistinNo(), search.getPayDatePro(), search.getPayDate());
        requirePeriod(search, true);
        return load("getResultConfirmSummary", "PA_RESULT_CONFIRM_LOAD", () -> mapper.selectResultConfirmSummary(search));
    }

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<PaSalaryCheckRowDto> getResultConfirmOtList(PaSalaryCheckSearchDto search) throws BusinessException {
        log.info("getResultConfirmOtList - salaryDistinNo={}, payDate={}, deptNo={}",
                search.getSalaryDistinNo(), search.getPayDate(), search.getDeptNo());
        requirePeriod(search, false);
        return load("getResultConfirmOtList", "PA_RESULT_CONFIRM_LOAD", () -> mapper.selectResultConfirmOtList(search));
    }

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<PaSalaryCheckRowDto> getResultConfirmOtDetails(PaSalaryCheckSearchDto search) throws BusinessException {
        log.info("getResultConfirmOtDetails - personId={}, arStartDate={}, arEndDate={}",
                search.getPersonId(), search.getArStartDate(), search.getArEndDate());
        requireText(search.getPersonId(), "hrm.empinfo.pleaseSelectEmp");
        return load("getResultConfirmOtDetails", "PA_RESULT_CONFIRM_LOAD", () -> mapper.selectResultConfirmOtDetails(search));
    }

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<PaSalaryCheckRowDto> getResultConfirmInsuranceList(PaSalaryCheckSearchDto search) throws BusinessException {
        log.info("getResultConfirmInsuranceList - salaryDistinNo={}, payDate={}, deptNo={}",
                search.getSalaryDistinNo(), search.getPayDate(), search.getDeptNo());
        requirePeriod(search, false);
        return load("getResultConfirmInsuranceList", "PA_RESULT_CONFIRM_LOAD",
                () -> mapper.selectResultConfirmInsuranceList(search));
    }

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public List<PaSalaryCheckRowDto> getResultConfirmTaxList(PaSalaryCheckSearchDto search) throws BusinessException {
        log.info("getResultConfirmTaxList - salaryDistinNo={}, payDate={}, deptNo={}",
                search.getSalaryDistinNo(), search.getPayDate(), search.getDeptNo());
        requirePeriod(search, false);
        return load("getResultConfirmTaxList", "PA_RESULT_CONFIRM_LOAD", () -> mapper.selectResultConfirmTaxList(search));
    }

    // ── Helpers ──────────────────────────────────────────────────────────

    /** Chạy truy vấn, bọc lỗi DB thành BusinessException (message common.loadFail) và ghi log chi tiết. */
    private <T> T load(String action, String errorCode, Callable<T> call) throws BusinessException {
        try {
            T result = call.call();
            if (result instanceof List<?> list) {
                log.info("{} - found {} rows", action, list.size());
            }
            return result;
        } catch (BusinessException e) {
            throw e;
        } catch (Exception e) {
            log.error("{} failed", action, e);
            throw new BusinessException(errorCode, "common.loadFail", e);
        }
    }

    /** Phân loại lương + ngày phát tháng này (+ tháng trước nếu withPro) là bắt buộc. */
    private void requirePeriod(PaSalaryCheckSearchDto search, boolean withPro) throws BusinessException {
        requireText(search.getSalaryDistinNo(), "pa.salaryCheck.msgSelectPayDate");
        requireText(search.getPayDate(), "pa.salaryCheck.msgSelectPayDate");
        if (withPro) {
            requireText(search.getPayDatePro(), "pa.salaryCheck.msgSelectPayDate");
        }
    }

    private void validateMonthDif(PaSalaryCheckSearchDto search) throws BusinessException {
        if (search.getItemType() == null || search.getItemType() < 1 || search.getItemType() > 3) {
            throw required("liang.public.title.ItemDistinguish");
        }
        if (!PAGE_TYPES.contains(search.getPageType())) {
            throw required("pa.salaryCheck.msgInvalidItem");
        }
        if (StringUtils.hasText(search.getItemId())) {
            validateItemColumn(search.getItemId());
        }
    }

    /** ITEM_ID phải nằm trong danh sách hạng mục IS_USE = 4 và là tên cột hợp lệ (chống SQL injection với ${}). */
    private String validateItemColumn(String itemId) throws BusinessException {
        String id = itemId.trim();
        boolean known = getItemOptions().stream().anyMatch(o -> id.equalsIgnoreCase(o.getItemId()));
        if (!known || !COLUMN_NAME.matcher(id).matches()) {
            log.warn("ITEM_ID không hợp lệ: {}", itemId);
            throw required("pa.salaryCheck.msgInvalidItem");
        }
        return id.toUpperCase();
    }

    private void requireText(String value, String messageKey) throws BusinessException {
        if (!StringUtils.hasText(value)) {
            throw required(messageKey);
        }
    }

    private BusinessException required(String messageKey) {
        log.warn("Thiếu/sai tham số - messageKey={}", messageKey);
        return new BusinessException(ERR_REQUIRED, messageKey);
    }

    /** Gộp 3 cột ZH_CONCAT (PERSON_ID_PART1..3) thành danh sách PERSON_ID. */
    private static List<PaMonthPersonSummaryDto.ChangeRow> mergePersonIds(List<PaMonthPersonSummaryDto.ChangeRow> rows) {
        for (PaMonthPersonSummaryDto.ChangeRow row : rows) {
            Set<String> ids = new LinkedHashSet<>();
            Stream.of(row.getPersonIdPart1(), row.getPersonIdPart2(), row.getPersonIdPart3())
                    .filter(StringUtils::hasText)
                    .flatMap(s -> Arrays.stream(s.split(",")))
                    .map(String::trim)
                    .filter(StringUtils::hasText)
                    .forEach(ids::add);
            row.setPersonIds(new ArrayList<>(ids));
        }
        return rows;
    }

    private static String trim(String value) {
        return value == null ? null : value.trim();
    }
}
