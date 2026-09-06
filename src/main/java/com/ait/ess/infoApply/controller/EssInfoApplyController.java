package com.ait.ess.infoApply.controller;

import com.ait.ess.infoApply.dto.EssCwaAbnormalDto;
import com.ait.ess.infoApply.dto.EssCoordApplyOtInfoDto;
import com.ait.ess.infoApply.dto.EssDeptOtApplyInfoDto;
import com.ait.ess.infoApply.dto.EssOtApplyListDto;
import com.ait.ess.infoApply.dto.EssOtReportDto;
import com.ait.ess.infoApply.dto.EssPersonOtInfoDto;
import com.ait.ess.infoApply.service.EssCwaAbnormalService;
import com.ait.ess.infoApply.service.EssCoordApplyOtInfoService;
import com.ait.ess.infoApply.service.EssDeptOtApplyInfoService;
import com.ait.ess.infoApply.service.EssOtApplyService;
import com.ait.ess.infoApply.service.EssOtReportService;
import com.ait.ess.infoApply.service.EssPersonOtInfoService;
import com.ait.sy.sys.dto.DataTablesResponse;
import com.ait.sy.syAffirm.dto.SyAffirmEmailDto;
import com.ait.sy.syAffirm.service.SyAffirmEmailService;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/ess/infoApply")
public class EssInfoApplyController {

    private static final Logger log = LoggerFactory.getLogger(EssInfoApplyController.class);

    @Autowired
    private EssOtApplyService essOtApplyService;

    @Autowired
    private EssCwaAbnormalService essCwaAbnormalService;

    @Autowired
    private EssPersonOtInfoService essPersonOtInfoService;

    @Autowired
    private EssCoordApplyOtInfoService essCoordApplyOtInfoService;

    @Autowired
    private SyAffirmEmailService syAffirmEmailService;

    @Autowired
    private EssOtReportService essOtReportService;

    @Autowired
    private EssDeptOtApplyInfoService essDeptOtApplyInfoService;

    // Trang Thymeleaf viewSSTOtApplyInfo.html đã được thay bằng Angular route /sst-ot-apply-info
    // (xem frontend-ng/src/app/sst-ot-apply-info/ và MIGRATED_ROUTES trong app-shell.component.ts) -
    // các API /api/otDateInfo, /api/otDuration bên dưới vẫn giữ nguyên.

    // Trang Thymeleaf viewPOtApplyInfoList.html đã được thay bằng Angular route /ot-apply-info-list
    // (xem frontend-ng/src/app/ot-apply-info-list/ và MIGRATED_ROUTES trong app-shell.component.ts) -
    // các API /api/myOtApply/** bên dưới vẫn giữ nguyên.

    @GetMapping("/api/otDateInfo")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> getOtDateInfo(
            @RequestParam String applyDate) {
        return ResponseEntity.ok(essOtApplyService.getOtDateInfo(applyDate));
    }

    @GetMapping("/api/otDuration")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> getOtDuration(
            @RequestParam String applyOtDate,
            @RequestParam String otFromTime,
            @RequestParam String otToTime,
            @RequestParam(defaultValue = "0") String deductYn) {
        return ResponseEntity.ok(essOtApplyService.getOtDuration(applyOtDate, otFromTime, otToTime, deductYn));
    }

    @GetMapping("/api/myOtApply/list")
    @ResponseBody
    public ResponseEntity<List<EssOtApplyListDto>> getMyOtApplyList(
            @RequestParam(required = false) String otTypeCode,
            @RequestParam(required = false) String affirmFlag,
            @RequestParam(required = false) String fromDate,
            @RequestParam(required = false) String toDate) {
        EssOtApplyListDto dto = new EssOtApplyListDto();
        dto.setOtTypeCodeSearch(otTypeCode);
        dto.setAffirmFlagSearch(affirmFlag);
        dto.setFromDate(fromDate);
        dto.setToDate(toDate);
        return ResponseEntity.ok(essOtApplyService.getMyOtApplyList(dto));
    }

    @PostMapping("/api/myOtApply/cancel")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> cancelMyOtApplyList(
            @RequestBody List<String> applyNos) {
        Map<String, Object> response = new HashMap<>();
        try {
            int count = essOtApplyService.cancelMyOtApplyList(applyNos);
            response.put("success", true);
            response.put("count", count);
            response.put("message", "Hủy bỏ thành công " + count + " dòng.");
        } catch (Exception e) {
            log.error("Failed to cancel OT applications", e);
            response.put("success", false);
            response.put("error", e.getMessage() == null || e.getMessage().isBlank()
                    ? "Hủy bỏ thất bại." : e.getMessage());
        }
        return ResponseEntity.ok(response);
    }

    // Trang Thymeleaf viewPersonOtApplyInfoList.html đã được thay bằng Angular route
    // /person-ot-apply-info-list (xem frontend-ng/src/app/person-ot-apply-info-list/ và
    // MIGRATED_ROUTES trong app-shell.component.ts) - các API /api/personOt/** bên dưới vẫn giữ nguyên
    // (DashboardService cũng đang gọi chung /api/personOt/list cho biểu đồ).

    @GetMapping("/api/personOt/list")
    @ResponseBody
    public ResponseEntity<List<EssPersonOtInfoDto>> getPersonOtList(
            @RequestParam(required = false) String startDate,
            @RequestParam(required = false) String endDate,
            @RequestParam(required = false) String itemNoSearch,
            @RequestParam(required = false) String minQuantity) {
        EssPersonOtInfoDto params = new EssPersonOtInfoDto();
        params.setStartDate(startDate);
        params.setEndDate(endDate);
        params.setItemNoSearch(itemNoSearch);
        params.setMinQuantity(minQuantity);
        return ResponseEntity.ok(essPersonOtInfoService.getPersonOtList(params));
    }

    @GetMapping("/api/personOt/items")
    @ResponseBody
    public ResponseEntity<List<EssPersonOtInfoDto>> getOtItemList() {
        return ResponseEntity.ok(essPersonOtInfoService.getOtItemList());
    }

    // Trang Thymeleaf viewPiciOtAffirmLBatchList.html đã được thay bằng Angular route /ot-apply-batch-info

    // Trang Thymeleaf viewApprovalEmail.html đã được thay bằng Angular route /view-approval-email

    @GetMapping("/api/approvalEmail/list")
    @ResponseBody
    public ResponseEntity<List<SyAffirmEmailDto>> getApprovalEmailList(SyAffirmEmailDto dto) {
        return ResponseEntity.ok(syAffirmEmailService.getApprovalEmailList(dto));
    }

    // Trang Thymeleaf viewApprovaledEmail.html đã được thay bằng Angular route /view-approvaled-email

    @GetMapping("/api/approvaledEmail/list")
    @ResponseBody
    public ResponseEntity<List<SyAffirmEmailDto>> getApprovaledEmailList(SyAffirmEmailDto dto) {
        return ResponseEntity.ok(syAffirmEmailService.getApprovaledEmailList(dto));
    }

    @PostMapping("/api/approvalEmail/execute")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> executeApproval(@RequestBody Map<String, Object> request) {
        Map<String, Object> response = new HashMap<>();
        try {
            @SuppressWarnings("unchecked")
            List<Map<String, Object>> items = (List<Map<String, Object>>) request.get("items");
            if (items == null || items.isEmpty()) {
                response.put("success", false);
                response.put("message", "Không có đơn nào được chọn.");
                return ResponseEntity.ok(response);
            }
            String errors = syAffirmEmailService.executeAffirm(items);
            if (errors.isEmpty()) {
                response.put("success", true);
            } else {
                response.put("success", false);
                response.put("message", errors.trim());
            }
        } catch (Exception e) {
            log.error("Failed to execute approval", e);
            response.put("success", false);
            response.put("message", e.getMessage());
        }
        return ResponseEntity.ok(response);
    }

    // Trang Thymeleaf viewNoticeedEmail.html đã được thay bằng Angular route /view-noticeed-email

    @GetMapping("/api/noticeedEmail/list")
    @ResponseBody
    public ResponseEntity<List<SyAffirmEmailDto>> getNoticeedEmailList(SyAffirmEmailDto dto) {
        return ResponseEntity.ok(syAffirmEmailService.getNoticeedEmailList(dto));
    }

    // Trang Thymeleaf viewCoordApplyOtInfoList.html đã được thay bằng Angular route /coord-apply-ot-info-list

    @GetMapping("/api/coordOt/list")
    @ResponseBody
    public ResponseEntity<DataTablesResponse<EssCoordApplyOtInfoDto>> getCoordApplyOtList(
            @RequestParam(required = false) String keyword,
            @RequestParam(required = false) String deptNos,
            @RequestParam(required = false) String startDate,
            @RequestParam(required = false) String endDate,
            @RequestParam(required = false) String shiftNo,
            @RequestParam(required = false) String itemNoSearch,
            @RequestParam(required = false) String statusCode,
            @RequestParam(required = false) String postFamily,
            @RequestParam(defaultValue = "1") int draw,
            @RequestParam(defaultValue = "0") int start,
            @RequestParam(defaultValue = "25") int length) {
        EssCoordApplyOtInfoDto dto = new EssCoordApplyOtInfoDto();
        dto.setKeyword(keyword);
        dto.setDeptNos(deptNos);
        dto.setStartDate(startDate);
        dto.setEndDate(endDate);
        dto.setShiftNo(shiftNo);
        dto.setItemNoSearch(itemNoSearch);
        dto.setStatusCode(statusCode);
        dto.setPostFamily(postFamily);
        dto.setDraw(draw);
        dto.setStart(start);
        dto.setLength(length);
        return ResponseEntity.ok(essCoordApplyOtInfoService.getPageList(dto));
    }

    @GetMapping("/api/coordOt/items")
    @ResponseBody
    public ResponseEntity<List<EssCoordApplyOtInfoDto>> getCoordOtItemList() {
        return ResponseEntity.ok(essCoordApplyOtInfoService.getOtItemList());
    }

    // Trang Thymeleaf viewShowCwaAbnormalApply.html đã được thay bằng Angular route /cwa-abnormal-apply
    // (xem frontend-ng/src/app/cwa-abnormal-apply/ và MIGRATED_ROUTES trong app-shell.component.ts) -
    // API /api/myCwaAbnormal/list bên dưới vẫn giữ nguyên.

    @GetMapping("/api/myCwaAbnormal/list")
    @ResponseBody
    public ResponseEntity<List<EssCwaAbnormalDto>> getMyCwaAbnormalList(
            @RequestParam(required = false) String startDate,
            @RequestParam(required = false) String endDate) {
        EssCwaAbnormalDto dto = new EssCwaAbnormalDto();
        dto.setStartDate(startDate);
        dto.setEndDate(endDate);
        return ResponseEntity.ok(essCwaAbnormalService.getMyList(dto));
    }

    // Trang Thymeleaf viewOtReport.html đã được thay bằng Angular route /view-ot-report

    @GetMapping("/api/otReport/list")
    @ResponseBody
    public DataTablesResponse<EssOtReportDto> getOtReportList(EssOtReportDto params) {
        return essOtReportService.getPageList(params);
    }

    @GetMapping("/api/otReport/export")
    public void exportOtReport(EssOtReportDto params, HttpServletResponse response) throws IOException {
        essOtReportService.exportReport(params, response);
    }

    // Trang Thymeleaf viewDeptOtApplyInfo.html đã được thay bằng Angular route /dept-ot-apply-info

    @GetMapping("/api/deptOtApplyInfo/list")
    @ResponseBody
    public DataTablesResponse<EssDeptOtApplyInfoDto> getDeptOtApplyInfoList(EssDeptOtApplyInfoDto params) {
        return essDeptOtApplyInfoService.getPageList(params);
    }

    @GetMapping("/api/deptOtApplyInfo/export")
    public void exportDeptOtApplyInfo(EssDeptOtApplyInfoDto params, HttpServletResponse response) throws IOException {
        essDeptOtApplyInfoService.exportReport(params, response);
    }
}
