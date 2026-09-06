package com.ait.ess.infoApply.service.impl;

import com.ait.ess.infoApply.dto.EssDeptOtApplyInfoDto;
import com.ait.ess.infoApply.mapper.EssDeptOtApplyInfoMapper;
import com.ait.ess.infoApply.service.EssDeptOtApplyInfoService;
import com.ait.sy.sys.dto.DataTablesResponse;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.poi.ss.usermodel.BorderStyle;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.FillPatternType;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.HorizontalAlignment;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.VerticalAlignment;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.List;

@Service
public class EssDeptOtApplyInfoServiceImpl implements EssDeptOtApplyInfoService {

    private static final Logger log = LoggerFactory.getLogger(EssDeptOtApplyInfoServiceImpl.class);

    private static final String[] MONTH_LABELS = {
            "Tháng 01", "Tháng 02", "Tháng 03", "Tháng 04", "Tháng 05", "Tháng 06",
            "Tháng 07", "Tháng 08", "Tháng 09", "Tháng 10", "Tháng 11", "Tháng 12"
    };

    @Autowired
    private EssDeptOtApplyInfoMapper mapper;

    @Override
    public DataTablesResponse<EssDeptOtApplyInfoDto> getPageList(EssDeptOtApplyInfoDto params) {
        try {
            int total = mapper.countList(params);
            List<EssDeptOtApplyInfoDto> list = total > 0 ? mapper.selectListPage(params) : List.of();
            return new DataTablesResponse<>(params.getDraw(), total, total, list);
        } catch (Exception e) {
            log.error("Lỗi khi lấy danh sách tổng hợp OT theo bộ phận, year={}: {}", params.getYear(), e.getMessage(), e);
            return new DataTablesResponse<>(params.getDraw(), "Lỗi hệ thống khi tải danh sách tổng hợp OT.");
        }
    }

    /**
     * Xuất báo cáo tổng hợp OT (Đã duyệt / Xin phép theo từng tháng) ra Excel. Bảng không có file mẫu cố
     * định (số cột phụ thuộc 12 tháng x 2 trạng thái) nên dựng workbook trực tiếp bằng Apache POI, cùng kỹ
     * thuật merge header với {@code WeeklyHrReportServiceImpl}.
     */
    @Override
    public void exportReport(EssDeptOtApplyInfoDto params, HttpServletResponse response) throws IOException {
        try {
            List<EssDeptOtApplyInfoDto> rows = mapper.selectExportList(params);
            writeExcel(response, params.getYear(), rows);
        } catch (Exception e) {
            log.error("Lỗi khi xuất báo cáo tổng hợp OT theo bộ phận, year={}: {}", params.getYear(), e.getMessage(), e);
            throw e;
        }
    }

    private void writeExcel(HttpServletResponse response, String year, List<EssDeptOtApplyInfoDto> rows) throws IOException {
        Workbook wb = new XSSFWorkbook();
        Sheet sheet = wb.createSheet("OT Report");

        CellStyle headerStyle = createHeaderStyle(wb);
        CellStyle dataCenterStyle = createDataStyle(wb, true);
        CellStyle dataLeftStyle = createDataStyle(wb, false);

        final int colStt = 0;
        final int colEmpId = 1;
        final int colLocalName = 2;
        final int colDeptName = 3;
        final int colFirstMonth = 4;
        final int lastCol = colFirstMonth + 12 * 2 - 1;

        Row headerRow1 = sheet.createRow(0);
        Row headerRow2 = sheet.createRow(1);
        Row headerRow3 = sheet.createRow(2);

        setCell(headerRow1, colStt, "STT", headerStyle);
        setCell(headerRow1, colEmpId, "Mã nhân viên", headerStyle);
        setCell(headerRow1, colLocalName, "Họ tên", headerStyle);
        setCell(headerRow1, colDeptName, "Bộ phận", headerStyle);
        setCell(headerRow1, colFirstMonth, "Năm " + year, headerStyle);

        for (int m = 0; m < 12; m++) {
            int monthCol = colFirstMonth + m * 2;
            setCell(headerRow2, monthCol, MONTH_LABELS[m], headerStyle);
            setCell(headerRow3, monthCol, "Đã duyệt", headerStyle);
            setCell(headerRow3, monthCol + 1, "Xin phép", headerStyle);
        }

        styleRegion(sheet, headerStyle, 0, 2, colStt, colStt);
        styleRegion(sheet, headerStyle, 0, 2, colEmpId, colEmpId);
        styleRegion(sheet, headerStyle, 0, 2, colLocalName, colLocalName);
        styleRegion(sheet, headerStyle, 0, 2, colDeptName, colDeptName);
        styleRegion(sheet, headerStyle, 0, 0, colFirstMonth, lastCol);
        styleRegion(sheet, headerStyle, 1, 1, colFirstMonth, lastCol);

        sheet.addMergedRegion(new CellRangeAddress(0, 2, colStt, colStt));
        sheet.addMergedRegion(new CellRangeAddress(0, 2, colEmpId, colEmpId));
        sheet.addMergedRegion(new CellRangeAddress(0, 2, colLocalName, colLocalName));
        sheet.addMergedRegion(new CellRangeAddress(0, 2, colDeptName, colDeptName));
        sheet.addMergedRegion(new CellRangeAddress(0, 0, colFirstMonth, lastCol));
        for (int m = 0; m < 12; m++) {
            int monthCol = colFirstMonth + m * 2;
            sheet.addMergedRegion(new CellRangeAddress(1, 1, monthCol, monthCol + 1));
        }

        int rowIdx = 3;
        int stt = 1;
        for (EssDeptOtApplyInfoDto dto : rows) {
            Row row = sheet.createRow(rowIdx++);
            setCell(row, colStt, (double) stt++, dataCenterStyle);
            setCell(row, colEmpId, dto.getEmpId(), dataCenterStyle);
            setCell(row, colLocalName, dto.getLocalName(), dataLeftStyle);
            setCell(row, colDeptName, dto.getDeptName(), dataLeftStyle);

            Double[] approved = {
                    dto.getM01Approved(), dto.getM02Approved(), dto.getM03Approved(), dto.getM04Approved(),
                    dto.getM05Approved(), dto.getM06Approved(), dto.getM07Approved(), dto.getM08Approved(),
                    dto.getM09Approved(), dto.getM10Approved(), dto.getM11Approved(), dto.getM12Approved()
            };
            Double[] apply = {
                    dto.getM01Apply(), dto.getM02Apply(), dto.getM03Apply(), dto.getM04Apply(),
                    dto.getM05Apply(), dto.getM06Apply(), dto.getM07Apply(), dto.getM08Apply(),
                    dto.getM09Apply(), dto.getM10Apply(), dto.getM11Apply(), dto.getM12Apply()
            };
            for (int m = 0; m < 12; m++) {
                int monthCol = colFirstMonth + m * 2;
                setCell(row, monthCol, approved[m] == null ? 0d : approved[m], dataCenterStyle);
                setCell(row, monthCol + 1, apply[m] == null ? 0d : apply[m], dataCenterStyle);
            }
        }

        for (int c = 0; c <= lastCol; c++) {
            sheet.autoSizeColumn(c);
        }

        String filename = "BaoCaoTangCaBoPhan_" + (year == null ? "" : year) + ".xlsx";
        response.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        response.setHeader("Content-Disposition", "attachment; filename=\"" +
                URLEncoder.encode(filename, StandardCharsets.UTF_8) + "\"");
        wb.write(response.getOutputStream());
        wb.close();
    }

    private void styleRegion(Sheet sheet, CellStyle style, int firstRow, int lastRow, int firstCol, int lastCol) {
        for (int r = firstRow; r <= lastRow; r++) {
            Row row = sheet.getRow(r);
            if (row == null) row = sheet.createRow(r);
            for (int c = firstCol; c <= lastCol; c++) {
                Cell cell = row.getCell(c);
                if (cell == null) cell = row.createCell(c);
                cell.setCellStyle(style);
            }
        }
    }

    private void setCell(Row row, int col, String value, CellStyle style) {
        Cell cell = row.createCell(col);
        cell.setCellValue(value == null ? "" : value);
        cell.setCellStyle(style);
    }

    private void setCell(Row row, int col, double value, CellStyle style) {
        Cell cell = row.createCell(col);
        cell.setCellValue(value);
        cell.setCellStyle(style);
    }

    private CellStyle createHeaderStyle(Workbook wb) {
        CellStyle style = wb.createCellStyle();
        Font font = wb.createFont();
        font.setBold(true);
        style.setFont(font);
        style.setFillForegroundColor(IndexedColors.LIGHT_BLUE.getIndex());
        style.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        style.setBorderTop(BorderStyle.THIN);
        style.setBorderBottom(BorderStyle.THIN);
        style.setBorderLeft(BorderStyle.THIN);
        style.setBorderRight(BorderStyle.THIN);
        style.setAlignment(HorizontalAlignment.CENTER);
        style.setVerticalAlignment(VerticalAlignment.CENTER);
        style.setWrapText(true);
        return style;
    }

    private CellStyle createDataStyle(Workbook wb, boolean center) {
        CellStyle style = wb.createCellStyle();
        style.setBorderTop(BorderStyle.THIN);
        style.setBorderBottom(BorderStyle.THIN);
        style.setBorderLeft(BorderStyle.THIN);
        style.setBorderRight(BorderStyle.THIN);
        style.setVerticalAlignment(VerticalAlignment.CENTER);
        if (center) {
            style.setAlignment(HorizontalAlignment.CENTER);
        }
        return style;
    }
}
