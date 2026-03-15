package com.ait.sy.excel.service.impl;

import com.ait.sy.excel.mapper.ExcelMapper;
import com.ait.sy.excel.service.ExcelService;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class ExcelServiceImpl implements ExcelService {

    @Autowired
    private ExcelMapper mapper;

    /**
     * Load file mẫu từ classpath, điền dữ liệu thực (shiftList, typeList) vào sheet TemplateCode rồi trả về.
     * File mẫu phải đặt tại: src/main/resources/templates/AR_SCHEDULE_HTSV_Template.xlsx
     * File đã có sẵn: dòng header (dòng 1), 2 sheet Template + TemplateCode.
     */
    @Override
    public Workbook buildScheduleHtsvTemplate(List<Map<String, Object>> shiftList,
                                               List<Map<String, Object>> typeList) {
        try {
            ClassPathResource resource = new ClassPathResource("templates/AR_SCHEDULE_HTSV_Template.xlsx");
            XSSFWorkbook wb = new XSSFWorkbook(resource.getInputStream());

            // Tìm sheet TemplateCode để điền dữ liệu thực
            XSSFSheet codeSheet = wb.getSheet("TemplateCode");
            if (codeSheet != null) {
                // Xoá các dòng dữ liệu cũ (giữ lại dòng 0 = header)
                for (int i = codeSheet.getLastRowNum(); i >= 1; i--) {
                    Row row = codeSheet.getRow(i);
                    if (row != null) codeSheet.removeRow(row);
                }

                // Điền dữ liệu thực
                int maxRows = Math.max(typeList.size(), shiftList.size());
                for (int i = 0; i < maxRows; i++) {
                    Row row = codeSheet.createRow(i + 1);
                    if (i < typeList.size()) {
                        row.createCell(0).setCellValue(str(typeList.get(i).get("name")));   // TypeName
                        row.createCell(1).setCellValue(str(typeList.get(i).get("code")));   // TypeCode
                    }
                    if (i < shiftList.size()) {
                        row.createCell(2).setCellValue(str(shiftList.get(i).get("nameVi"))); // ShiftName
                        row.createCell(3).setCellValue(str(shiftList.get(i).get("shiftNo"))); // ShiftCode
                    }
                }
            }

            return wb;

        } catch (IOException e) {
            throw new RuntimeException("Không thể đọc file mẫu AR_SCHEDULE_HTSV_Template.xlsx từ classpath: " + e.getMessage(), e);
        }
    }

    /**
     * Import dữ liệu từ file Excel vào AR_SCHEDULE_HTSV.
     * Bỏ qua dòng 1 (header). Đọc từ dòng 2 trở đi.
     */
    @Override
    @Transactional
    public List<String> importScheduleHtsv(MultipartFile file) throws IOException {
        List<String> errors = new ArrayList<>();

        try (Workbook wb = WorkbookFactory.create(file.getInputStream())) {
            Sheet sheet = wb.getSheet("Template");
            if (sheet == null) sheet = wb.getSheetAt(0);

            for (int i = 1; i <= sheet.getLastRowNum(); i++) {
                Row row = sheet.getRow(i);
                if (row == null) continue;

                String empId        = getCellStr(row.getCell(0)); // A: Employee ID
                String date         = getCellStr(row.getCell(2)); // C: Date (dd/MM/yyyy)
                String typeCodeRaw  = getCellStr(row.getCell(4)); // E: Date type code
                String shiftCode    = getCellStr(row.getCell(6)); // G: Shift code
                String remark       = getCellStr(row.getCell(7)); // H: Remark

                if (empId.isBlank() && date.isBlank()) continue; // dòng trống, bỏ qua

                if (empId.isBlank())    { errors.add("Dòng " + (i + 1) + ": Thiếu Employee ID"); continue; }
                if (date.isBlank())     { errors.add("Dòng " + (i + 1) + ": Thiếu Date"); continue; }
                if (shiftCode.isBlank()) { errors.add("Dòng " + (i + 1) + ": Thiếu Shift Code (cột G)"); continue; }

                // Lookup PERSON_ID từ EMPID
                String personId = mapper.getPersonIdByEmpId(empId);
                if (personId == null) {
                    errors.add("Dòng " + (i + 1) + ": Không tìm thấy nhân viên với EmpId=" + empId);
                    continue;
                }

                // Format date dd/MM/yyyy -> yyyy/MM/dd
                String arDateStr = formatDateStr(date);
                if (arDateStr == null) {
                    errors.add("Dòng " + (i + 1) + ": Ngày không đúng định dạng dd/MM/yyyy: " + date);
                    continue;
                }

                Long typeid = null;
                if (!typeCodeRaw.isBlank()) {
                    try { typeid = Long.parseLong(typeCodeRaw.replaceAll("\\.0$", "")); }
                    catch (NumberFormatException ignored) {}
                }

                Map<String, Object> rowData = new HashMap<>();
                rowData.put("personId", personId);
                rowData.put("shiftNo",  shiftCode);
                rowData.put("arDateStr", arDateStr);
                rowData.put("typeid",   typeid);
                rowData.put("remark",   remark.isBlank() ? null : remark);

                mapper.insertScheduleHtsv(rowData);
            }
        }
        return errors;
    }

    // ---- helper methods ----

    private String str(Object o) {
        return o == null ? "" : o.toString();
    }

    private String getCellStr(Cell cell) {
        if (cell == null) return "";
        return switch (cell.getCellType()) {
            case STRING  -> cell.getStringCellValue().trim();
            case NUMERIC -> {
                if (DateUtil.isCellDateFormatted(cell)) {
                    yield new SimpleDateFormat("dd/MM/yyyy").format(cell.getDateCellValue());
                }
                double d = cell.getNumericCellValue();
                yield (d == Math.floor(d)) ? String.valueOf((long) d) : String.valueOf(d);
            }
            case FORMULA -> {
                try { yield String.valueOf((long) cell.getNumericCellValue()); }
                catch (Exception e) { yield cell.getStringCellValue(); }
            }
            case BOOLEAN -> String.valueOf(cell.getBooleanCellValue());
            default      -> "";
        };
    }

    private String formatDateStr(String raw) {
        try {
            if (raw.matches("\\d{2}/\\d{2}/\\d{4}")) {
                // dd/MM/yyyy -> yyyy/MM/dd
                String[] p = raw.split("/");
                return p[2] + "/" + p[1] + "/" + p[0];
            } else if (raw.matches("\\d{4}[/-]\\d{2}[/-]\\d{2}")) {
                // yyyy-MM-dd hoặc yyyy/MM/dd -> yyyy/MM/dd
                return raw.replace("-", "/");
            }
        } catch (Exception ignored) {}
        return null;
    }
}
