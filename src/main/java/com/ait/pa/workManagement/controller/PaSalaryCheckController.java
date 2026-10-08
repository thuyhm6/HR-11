package com.ait.pa.workManagement.controller;

import com.ait.exception.BusinessException;
import com.ait.pa.workManagement.dto.PaPersonIdsReqDto;
import com.ait.pa.workManagement.dto.PaSalaryCheckSearchDto;
import com.ait.pa.workManagement.service.PaSalaryCheckService;
import com.ait.util.I18nUtil;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.concurrent.Callable;

/**
 * API JSON cho các trang Angular thay JSP của dự án Hanwha_HTSV (viewPaParamCtroller, PaMonthChainCtroller):
 * - /month-person-count-info-list   (/pa/workManagement/monthPersonCountInfoList)
 * - /view-pa-month-chain            (/pa/paView/viewPaMonthChain)
 * - /view-verification-list         (/pa/workManagement/viewVerificationList)
 * - /detail-person-count-info       (/pa/workManagement/detailPersonCountInfo)
 * - /detail-person-count-info-left  (/pa/workManagement/detailPersonCountInfoLeft) - danh sách bên trái dùng lại
 *   GET /pa/workManagement/api/salaryResult/month
 * - /detail-item-count-info         (/pa/workManagement/detailItemCountInfo)
 * - /detail-item-dif-count-info     (/pa/workManagement/detailItemDifCountInfo)
 * - /view-result-confirm-list       (/pa/workManagement/viewResultConfirmList)
 * Kế hoạch trả lương dùng lại GET /pa/workManagement/api/paySchedule. Xuất Excel làm ở frontend (.xlsx).
 */
@RestController
@RequestMapping("/pa/workManagement/api/salaryCheck")
public class PaSalaryCheckController {

    private static final Logger log = LoggerFactory.getLogger(PaSalaryCheckController.class);

    @Autowired
    private PaSalaryCheckService service;

    /** Hiện trạng lương theo tháng: số NV 2 kỳ + nhóm NV tăng / giảm. */
    @GetMapping("/monthPerson")
    public ResponseEntity<?> getMonthPersonSummary(PaSalaryCheckSearchDto search) {
        return handle("getMonthPersonSummary", () -> service.getMonthPersonSummary(search));
    }

    /** Danh sách NV của 1 nhóm tăng / giảm. */
    @PostMapping("/monthPerson/employees")
    public ResponseEntity<?> getEmployeesByPersonIds(@Valid @RequestBody PaPersonIdsReqDto req) {
        return handle("getEmployeesByPersonIds", () -> service.getEmployeesByPersonIds(req.getPersonIds()));
    }

    /** So sánh lương theo tháng (theo hạng mục). */
    @GetMapping("/monthChain")
    public ResponseEntity<?> getMonthChainList(PaSalaryCheckSearchDto search) {
        return handle("getMonthChainList", () -> service.getMonthChainList(search));
    }

    /** Kiểm tra quyết định nhân sự trong kỳ chấm công. */
    @GetMapping("/verification")
    public ResponseEntity<?> getVerificationList(PaSalaryCheckSearchDto search) {
        return handle("getVerificationList", () -> service.getVerificationList(search));
    }

    /** Thông tin NV của 1 kỳ lương. */
    @GetMapping("/person/info")
    public ResponseEntity<?> getPersonEmpInfo(PaSalaryCheckSearchDto search) {
        return handle("getPersonEmpInfo", () -> service.getPersonEmpInfo(search));
    }

    /** Hạng mục lương (chi trả / khấu trừ / bảo hiểm công ty) + công thức của 1 NV. */
    @GetMapping("/person/items")
    public ResponseEntity<?> getPersonSalaryItems(PaSalaryCheckSearchDto search) {
        return handle("getPersonSalaryItems", () -> service.getPersonSalaryItems(search));
    }

    /** Danh sách hạng mục dùng cho đối chiếu. */
    @GetMapping("/items")
    public ResponseEntity<?> getItemOptions() {
        return handle("getItemOptions", () -> service.getItemOptions());
    }

    /** Lương theo hạng mục. */
    @GetMapping("/itemCount")
    public ResponseEntity<?> getItemCountList(PaSalaryCheckSearchDto search) {
        return handle("getItemCountList", () -> service.getItemCountList(search));
    }

    /** Tổng hợp chênh lệch hạng mục (gọi procedure trước). */
    @GetMapping("/monthDif/groups")
    public ResponseEntity<?> getMonthDifGroups(PaSalaryCheckSearchDto search) {
        return handle("getMonthDifGroups", () -> service.getMonthDifGroups(search));
    }

    /** Danh sách NV chênh lệch hạng mục; refresh = true để gọi lại procedure. */
    @GetMapping("/monthDif/details")
    public ResponseEntity<?> getMonthDifDetails(PaSalaryCheckSearchDto search,
                                                @RequestParam(defaultValue = "false") boolean refresh) {
        return handle("getMonthDifDetails", () -> service.getMonthDifDetails(search, refresh));
    }

    /** Xác nhận kết quả - Thay đổi chi tiết. */
    @GetMapping("/resultConfirm/summary")
    public ResponseEntity<?> getResultConfirmSummary(PaSalaryCheckSearchDto search) {
        return handle("getResultConfirmSummary", () -> service.getResultConfirmSummary(search));
    }

    /** Xác nhận kết quả - Thống kê tăng ca. */
    @GetMapping("/resultConfirm/ot")
    public ResponseEntity<?> getResultConfirmOtList(PaSalaryCheckSearchDto search) {
        return handle("getResultConfirmOtList", () -> service.getResultConfirmOtList(search));
    }

    /** Xác nhận kết quả - Chi tiết tăng ca của 1 NV. */
    @GetMapping("/resultConfirm/otDetails")
    public ResponseEntity<?> getResultConfirmOtDetails(PaSalaryCheckSearchDto search) {
        return handle("getResultConfirmOtDetails", () -> service.getResultConfirmOtDetails(search));
    }

    /** Xác nhận kết quả - Chi tiết bảo hiểm. */
    @GetMapping("/resultConfirm/insurance")
    public ResponseEntity<?> getResultConfirmInsuranceList(PaSalaryCheckSearchDto search) {
        return handle("getResultConfirmInsuranceList", () -> service.getResultConfirmInsuranceList(search));
    }

    /** Xác nhận kết quả - Thuế. */
    @GetMapping("/resultConfirm/tax")
    public ResponseEntity<?> getResultConfirmTaxList(PaSalaryCheckSearchDto search) {
        return handle("getResultConfirmTaxList", () -> service.getResultConfirmTaxList(search));
    }

    /** Lỗi @Valid - message là key messages.properties, dịch rồi trả về {success:false, message}. */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, Object>> handleValidation(MethodArgumentNotValidException ex) {
        FieldError error = ex.getBindingResult().getFieldError();
        String key = error != null ? error.getDefaultMessage() : "common.loadFail";
        log.warn("PaSalaryCheck validation failed: {}", key);
        return ResponseEntity.badRequest().body(Map.of("success", false, "message", I18nUtil.getMessage(key)));
    }

    /** BusinessException do thiếu/sai điều kiện -> 400, lỗi tải dữ liệu -> 500; message đã dịch theo ngôn ngữ hiện tại. */
    private ResponseEntity<?> handle(String action, Callable<?> call) {
        try {
            Object result = call.call();
            return ResponseEntity.ok(result == null ? Map.of() : result);
        } catch (BusinessException e) {
            log.warn("{} - {}: {}", action, e.getErrorCode(), e.getUserMessage());
            Map<String, Object> body = Map.of("success", false, "message", I18nUtil.getMessage(e.getUserMessage()));
            return "PA_SALARY_CHECK_REQUIRED".equals(e.getErrorCode())
                    ? ResponseEntity.badRequest().body(body)
                    : ResponseEntity.internalServerError().body(body);
        } catch (Exception e) {
            log.error("{} failed", action, e);
            return ResponseEntity.internalServerError()
                    .body(Map.of("success", false, "message", I18nUtil.getMessage("common.loadFail")));
        }
    }
}
