package com.ait.pa.workManagement.controller;

import com.ait.exception.BusinessException;
import com.ait.pa.workManagement.dto.PaResultSummarySearchDto;
import com.ait.pa.workManagement.dto.PaSalaryDetailSearchDto;
import com.ait.pa.workManagement.service.PaSalaryResultService;
import com.ait.util.I18nUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.concurrent.Callable;

/**
 * API JSON cho các trang Angular thay JSP của dự án Hanwha_HTSV:
 * - /detail-month-count-info     (/pa/workManagement/detailmonthCountInfoLeft)
 * - /detail-year-count-info      (/pa/workManagement/detailYearCountInfoLeft)
 * - /view-pa-result-list         (/pa/workManagement/viewPaResultList)
 * - /view-dept-pa-result-list    (/pa/workManagement/viewDeptPaResultList)
 * Danh sách kế hoạch trả lương dùng lại API sẵn có GET /pa/workManagement/api/paySchedule. Xuất Excel làm ở frontend (.xlsx).
 */
@RestController
@RequestMapping("/pa/workManagement/api/salaryResult")
public class PaSalaryResultController {

    private static final Logger log = LoggerFactory.getLogger(PaSalaryResultController.class);

    @Autowired
    private PaSalaryResultService service;

    /** Lương tháng chi tiết - danh sách nhân viên của 1 kỳ lương. */
    @GetMapping("/month")
    public ResponseEntity<?> getMonthList(PaSalaryDetailSearchDto search) {
        return handle("getMonthList", () -> service.getMonthList(search));
    }

    /** Lương năm chi tiết - các kỳ lương của 1 nhân viên trong khoảng tháng. */
    @GetMapping("/year")
    public ResponseEntity<?> getYearList(PaSalaryDetailSearchDto search) {
        return handle("getYearList", () -> service.getYearList(search));
    }

    /** Chi tiết hạng mục lương bên phải - from = month | year. */
    @GetMapping("/detailItems")
    public ResponseEntity<?> getDetailItems(PaSalaryDetailSearchDto search,
                                            @RequestParam(defaultValue = "month") String from) {
        return handle("getDetailItems", () -> service.getDetailItems(search, from));
    }

    /** Tổng lương (cá nhân). */
    @GetMapping("/emp")
    public ResponseEntity<?> getEmpResultList(PaResultSummarySearchDto search) {
        return handle("getEmpResultList", () -> service.getEmpResultList(search));
    }

    /** Tổng lương (phòng ban). */
    @GetMapping("/dept")
    public ResponseEntity<?> getDeptResultList(PaResultSummarySearchDto search) {
        return handle("getDeptResultList", () -> service.getDeptResultList(search));
    }

    /** BusinessException do thiếu điều kiện -> 400, lỗi tải dữ liệu -> 500; message đã dịch theo ngôn ngữ hiện tại. */
    private ResponseEntity<?> handle(String action, Callable<?> call) {
        try {
            return ResponseEntity.ok(call.call());
        } catch (BusinessException e) {
            log.warn("{} - {}: {}", action, e.getErrorCode(), e.getUserMessage());
            Map<String, Object> body = Map.of("success", false, "message", I18nUtil.getMessage(e.getUserMessage()));
            return "PA_SALARY_RESULT_REQUIRED".equals(e.getErrorCode())
                    ? ResponseEntity.badRequest().body(body)
                    : ResponseEntity.internalServerError().body(body);
        } catch (Exception e) {
            log.error("{} failed", action, e);
            return ResponseEntity.internalServerError()
                    .body(Map.of("success", false, "message", I18nUtil.getMessage("common.loadFail")));
        }
    }
}
