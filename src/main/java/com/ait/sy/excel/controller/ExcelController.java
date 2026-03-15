package com.ait.sy.excel.controller;

import com.ait.ar.attendanceSettings.dto.ArShift010Dto;
import com.ait.ar.attendanceSettings.service.ArShiftService;
import com.ait.sy.basicMaintenance.dto.SyCodeParamDto;
import com.ait.sy.basicMaintenance.service.SyCodeParamService;
import com.ait.sy.excel.service.ExcelService;
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
            result.put("success", false);
            result.put("message", "Lỗi xử lý file: " + e.getMessage());
        }
        return ResponseEntity.ok(result);
    }
}
