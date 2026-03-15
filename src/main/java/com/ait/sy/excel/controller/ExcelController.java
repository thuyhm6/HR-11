package com.ait.sy.excel.controller;

import com.ait.ar.attendanceSettings.dto.ArShift010Dto;
import com.ait.ar.attendanceSettings.service.ArShiftService;
import com.ait.sy.basicMaintenance.dto.SyCodeParamDto;
import com.ait.sy.basicMaintenance.service.SyCodeParamService;
import com.ait.sy.excel.service.ExcelService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.*;

@Controller
@RequestMapping("/sy/excel")
public class ExcelController {
    private static final Logger log = LoggerFactory.getLogger(ExcelController.class);
    private static final long MAX_UPLOAD_SIZE_BYTES = 5L * 1024L * 1024L;

    @Autowired
    private ExcelService excelService;

    @Autowired
    private ArShiftService arShiftService;

    @Autowired
    private SyCodeParamService syCodeParamService;

    /**
     * Download file Excel mẫu cho AR_SCHEDULE_HTSV.
     * GET /sy/excel/api/scheduleHtsv/downloadTemplate
     */
    @GetMapping("/api/scheduleHtsv/downloadTemplate")
    public void downloadTemplate(HttpServletRequest request, HttpServletResponse response) throws IOException {

        // Lấy danh sách ca làm việc qua Service (không cần HTTP call)
        List<Map<String, Object>> shiftList = new ArrayList<>();
        try {
            List<ArShift010Dto> shifts = arShiftService.getShiftList(null, null);
            if (shifts != null) {
                for (ArShift010Dto s : shifts) {
                    Map<String, Object> item = new HashMap<>();
                    item.put("shiftNo", s.getShiftNo());
                    // Ưu tiên nameVi, fallback về shiftNo
                    String name = s.getNameVi();
                    if (name == null || name.isBlank()) name = s.getShiftNo();
                    item.put("nameVi", name);
                    shiftList.add(item);
                }
            }
        } catch (Exception e) {
            // Bỏ qua lỗi, tạo template rỗng
        }

        // Lấy danh sách loại ngày (parent-code=1439) qua Service
        List<Map<String, Object>> typeList = new ArrayList<>();
        try {
            List<SyCodeParamDto> types = syCodeParamService.getList("1439", null);
            if (types != null) {
                for (SyCodeParamDto t : types) {
                    Map<String, Object> item = new HashMap<>();
                    item.put("code", t.getCodeNo());
                    // SyCodeParamDto extends SyCodeDto – lấy tên qua nameVi nếu có
                    String name = t.getNameVi();
                    if (name == null || name.isBlank()) name = t.getCodeNo();
                    item.put("name", name);
                    typeList.add(item);
                }
            }
        } catch (Exception e) {
            // Bỏ qua lỗi, tạo template rỗng
        }

        try (Workbook wb = excelService.buildScheduleHtsvTemplate(shiftList, typeList)) {
            response.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
            response.setHeader("Content-Disposition", "attachment; filename*=UTF-8''AR_SCHEDULE_HTSV_Template.xlsx");
            wb.write(response.getOutputStream());
        }
    }

    /**
     * Upload file Excel để import vào AR_SCHEDULE_HTSV.
     * POST /sy/excel/api/scheduleHtsv/upload (multipart)
     */
    @PostMapping("/api/scheduleHtsv/upload")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> upload(@RequestParam("file") MultipartFile file) {
        Map<String, Object> result = new HashMap<>();
        try {
            String validationError = validateUploadFile(file);
            if (validationError != null) {
                result.put("success", false);
                result.put("message", validationError);
                return ResponseEntity.badRequest().body(result);
            }

            List<String> errors = excelService.importScheduleHtsv(file);
            if (errors.isEmpty()) {
                result.put("success", true);
                result.put("message", "Import thành công!");
            } else {
                result.put("success", false);
                result.put("errors", errors);
                result.put("message", "Import hoàn tất nhưng có " + errors.size() + " lỗi.");
            }
        } catch (Exception e) {
            log.error("Failed to import schedule file", e);
            result.put("success", false);
            result.put("message", "Loi he thong khi xu ly file import.");
        }
        return ResponseEntity.ok(result);
    }

    private String validateUploadFile(MultipartFile file) {
        if (file == null || file.isEmpty()) {
            return "Vui long chon file de import.";
        }

        if (file.getSize() > MAX_UPLOAD_SIZE_BYTES) {
            return "File vuot qua kich thuoc toi da 5MB.";
        }

        String originalFilename = file.getOriginalFilename();
        if (originalFilename == null || originalFilename.isBlank()) {
            return "Ten file khong hop le.";
        }

        String normalizedFileName = originalFilename.toLowerCase(Locale.ROOT);
        boolean hasExcelExtension = normalizedFileName.endsWith(".xlsx") || normalizedFileName.endsWith(".xls");
        if (!hasExcelExtension) {
            return "Chi ho tro file Excel .xlsx hoac .xls.";
        }

        String contentType = file.getContentType();
        if (contentType == null || contentType.isBlank()) {
            return "Khong xac dinh duoc dinh dang file upload.";
        }

        Set<String> allowedContentTypes = Set.of(
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                "application/vnd.ms-excel",
                "application/octet-stream"
        );
        if (!allowedContentTypes.contains(contentType.toLowerCase(Locale.ROOT))) {
            return "Dinh dang file upload khong hop le.";
        }

        return null;
    }
}
