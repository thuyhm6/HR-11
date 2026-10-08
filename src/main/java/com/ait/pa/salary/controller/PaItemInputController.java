package com.ait.pa.salary.controller;

import com.ait.pa.salary.dto.PaItemInputSaveReqDto;
import com.ait.pa.salary.dto.PaResultExportReqDto;
import com.ait.pa.salary.service.PaItemInputService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Collections;
import java.util.HashMap;
import java.util.Set;
import java.util.List;

import java.util.Map;

@Controller
@RequestMapping("/pa/salary")
public class PaItemInputController {

    private static final Logger log = LoggerFactory.getLogger(PaItemInputController.class);

    /** Chỉ các adminID này được lưu cấu hình hạng mục - giữ nguyên điều kiện LoginUser.adminID của viewPaResult.jsp gốc. */
    public static final Set<String> SAVE_ADMIN_IDS =
            Set.of("11111111", "11111112", "11111113", "11111114", "11111115", "11111116");

    /** Set.of().contains(null) ném NPE nên kiểm tra null trước. */
    private static boolean canSave(HttpSession session) {
        Object adminId = session.getAttribute("adminID");
        return adminId != null && SAVE_ADMIN_IDS.contains(adminId.toString());
    }

    @Autowired
    private PaItemInputService paItemInputService;

    @GetMapping("/result/api/sectionItems")
    @ResponseBody
    public ResponseEntity<?> getSectionItems(HttpSession session) {
        try {
            Map<String, Object> result = new HashMap<>(paItemInputService.getAllSectionItems());
            result.put("canSave", canSave(session));
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            log.error("Lỗi khi lấy danh sách hạng mục phần: {}", e.getMessage(), e);
            return ResponseEntity.internalServerError().body(Map.of("error", e.getMessage()));
        }
    }

    @GetMapping("/result/api/savedItems")
    @ResponseBody
    public ResponseEntity<?> getSavedItems(
            @RequestParam(required = false) Integer isUse,
            @RequestParam(required = false) Integer itemType) {
        try {
            return ResponseEntity.ok(paItemInputService.getSavedItems(isUse, itemType));
        } catch (Exception e) {
            log.error("Lỗi khi lấy PA_ITEM_INPUT isUse={}, itemType={}: {}", isUse, itemType, e.getMessage(), e);
            return ResponseEntity.internalServerError().body(Map.of("error", e.getMessage()));
        }
    }

    @PostMapping("/result/api/save")
    @ResponseBody
    public ResponseEntity<?> save(@RequestBody PaItemInputSaveReqDto req, HttpSession session) {
        try {
            if (!canSave(session)) {
                log.warn("Từ chối lưu PA_ITEM_INPUT - adminID={} không có quyền", session.getAttribute("adminID"));
                return ResponseEntity.status(HttpStatus.FORBIDDEN).body(Map.of("error", "Không có quyền lưu cấu hình"));
            }
            if (req.getIsUse() == null) {
                return ResponseEntity.badRequest().body(Map.of("error", "Vui lòng chọn Hạng mục tích chọn!"));
            }
            if (req.getItemType() == null) {
                return ResponseEntity.badRequest().body(Map.of("error", "Vui lòng chọn Phân biệt hạng mục!"));
            }
            paItemInputService.saveItems(req);
            return ResponseEntity.ok(Map.of("success", true, "message", "Lưu thành công"));
        } catch (Exception e) {
            log.error("Lỗi khi lưu PA_ITEM_INPUT: {}", e.getMessage(), e);
            return ResponseEntity.internalServerError().body(Map.of("error", e.getMessage()));
        }
    }

    /** POST JSON (thay cho GET query string) để gửi kèm tên hạng mục làm header Excel - tên có thể chứa dấu phẩy. */
    @PostMapping("/result/api/exportExcel")
    public ResponseEntity<byte[]> exportExcel(@RequestBody PaResultExportReqDto req) {
        try {
            if (req.getPayScheduleNo() == null || req.getPayScheduleNo().isBlank()) {
                return ResponseEntity.badRequest().build();
            }
            if (req.getItems() == null || req.getItems().isEmpty()) {
                return ResponseEntity.badRequest().build();
            }
            List<String> deptList = req.getDeptNos() == null ? Collections.emptyList() : req.getDeptNos();

            byte[] data = paItemInputService.exportSummaryHtsv(req.getPayScheduleNo(), deptList, req.getItems());

            String filename = URLEncoder.encode("PaSummary_" + req.getPayScheduleNo() + ".xlsx", StandardCharsets.UTF_8);
            return ResponseEntity.ok()
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename*=UTF-8''" + filename)
                    .contentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                    .body(data);
        } catch (Exception e) {
            log.error("Lỗi khi xuất Excel PA_SUMMARY_HTSV payScheduleNo={}: {}", req.getPayScheduleNo(), e.getMessage(), e);
            return ResponseEntity.internalServerError().build();
        }
    }
}
