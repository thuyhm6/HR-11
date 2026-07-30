package com.ait.util;

import jakarta.servlet.http.HttpServletResponse;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.util.CellReference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.expression.MapAccessor;
import org.springframework.expression.Expression;
import org.springframework.expression.ExpressionParser;
import org.springframework.expression.spel.standard.SpelExpressionParser;
import org.springframework.expression.spel.support.StandardEvaluationContext;

import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Engine dùng chung để điền dữ liệu vào file mẫu Excel dùng cú pháp JXLS kiểu
 * {@code <jx:forEach items="${...}" var="reports" varStatus="i">...</jx:forEach>} bao quanh 1 (hoặc nhiều,
 * với {@code <jx:if>}) dòng mẫu chứa biểu thức {@code ${reports.FIELD}} - dòng mẫu được nhân bản cho từng
 * dòng dữ liệu trong kết quả truy vấn. Tách ra dùng chung cho mọi báo cáo xuất Excel theo template
 * (VD: {@code MonthDetailListServiceImpl}, {@code EssOtReportServiceImpl}) để tránh lặp lại code.
 */
public final class ExcelJxForEachUtil {

    private static final Logger log = LoggerFactory.getLogger(ExcelJxForEachUtil.class);

    /** Các trường kết quả có kiểu chuỗi/ngày - khi NULL phải để trống ô, không mặc định 0 như trường số. */
    private static final Set<String> STRING_FIELDS = buildStringFields();

    /** Nhận diện placeholder tổng cột kiểu {@code $[SUM(J8:U8)]} trong file mẫu. */
    private static final Pattern SUM_PATTERN = Pattern.compile("^\\$\\[SUM\\(([A-Za-z]+)\\d+:([A-Za-z]+)\\d+\\)]$");

    /** Nhận diện các cột ngày dạng DATE_&lt;số&gt;/DATE_IN_&lt;số&gt;/DATE_OUT_&lt;số&gt; (luôn là chuỗi). */
    private static final Pattern DATE_FIELD_PATTERN = Pattern.compile("^DATE(_IN|_OUT)?_\\d+$");

    private ExcelJxForEachUtil() {
    }

    /**
     * Engine dùng chung cho mọi template dạng {@code <jx:forEach>...</jx:forEach>}: tự tìm block, nhân bản
     * dòng mẫu cho từng dòng dữ liệu, tính các biểu thức {@code ${reports.FIELD}} bằng SpEL và các ô tổng
     * {@code $[SUM(colStart:colEnd)]} bằng cách cộng lại các cột đã tính trong cùng dòng.
     */
    public static void fillForEachBlock(Sheet sheet, List<Map<String, Object>> rows) {
        DataFormatter fmt = new DataFormatter();
        int[] bounds = findForEachBounds(sheet, fmt);
        int openTagRow = bounds[0];
        int closeTagRow = bounds[1];
        if (openTagRow < 0 || closeTagRow < 0 || closeTagRow <= openTagRow + 1) {
            log.warn("Không tìm thấy block dữ liệu <jx:forEach> hợp lệ trong file mẫu");
            return;
        }

        Row templateRow = sheet.getRow(openTagRow + 1);
        ExpressionParser parser = new SpelExpressionParser();
        RowTemplate rt = parseRowTemplate(templateRow, parser, fmt);

        int blockSize = closeTagRow - openTagRow + 1;
        int n = rows.size();
        int shiftAmount = n - blockSize;
        if (shiftAmount != 0 && closeTagRow + 1 <= sheet.getLastRowNum()) {
            sheet.shiftRows(closeTagRow + 1, sheet.getLastRowNum(), shiftAmount);
        }

        for (int i = 0; i < n; i++) {
            Map<String, Object> reportRow = safeRow(rows.get(i));
            Row targetRow = sheet.getRow(openTagRow + i);
            if (targetRow == null) {
                targetRow = sheet.createRow(openTagRow + i);
            }
            evaluateAndWriteRow(targetRow, rt, reportRow, i);
        }
    }

    /**
     * Engine cho template có nhiều khối {@code <jx:if test="${reports.FIELD == 'VALUE'}">...</jx:if>} lồng
     * trong 1 {@code <jx:forEach>} (VD báo cáo Công + Tăng ca): mỗi dòng dữ liệu có 1 trường phân loại
     * (VD TYPE) quyết định dùng dòng mẫu nào trong số nhiều dòng mẫu khai báo sẵn, các khối còn lại bị bỏ qua.
     */
    public static void fillForEachWithIfBlocks(Sheet sheet, List<Map<String, Object>> rows) {
        DataFormatter fmt = new DataFormatter();
        int[] bounds = findForEachBounds(sheet, fmt);
        int openTagRow = bounds[0];
        int closeTagRow = bounds[1];
        if (openTagRow < 0 || closeTagRow < 0 || closeTagRow <= openTagRow + 1) {
            log.warn("Không tìm thấy block dữ liệu <jx:forEach> hợp lệ trong file mẫu");
            return;
        }

        ExpressionParser parser = new SpelExpressionParser();
        Pattern ifPattern = Pattern.compile("^<jx:if test=\"\\$\\{reports\\.(\\w+) == '([^']*)'\\}\">$");
        List<IfBranch> branches = new ArrayList<>();
        int r = openTagRow + 1;
        while (r < closeTagRow) {
            Row tagRow = sheet.getRow(r);
            String tagText = tagRow == null ? "" : fmt.formatCellValue(tagRow.getCell(0));
            Matcher m = ifPattern.matcher(tagText == null ? "" : tagText.trim());
            if (m.matches()) {
                int templateRowIdx = r + 1;
                int endIfRow = templateRowIdx + 1;
                while (endIfRow < closeTagRow) {
                    Row endRow = sheet.getRow(endIfRow);
                    String endText = endRow == null ? "" : fmt.formatCellValue(endRow.getCell(0));
                    if ("</jx:if>".equals(endText == null ? "" : endText.trim())) {
                        break;
                    }
                    endIfRow++;
                }
                Row templateRow = sheet.getRow(templateRowIdx);
                if (templateRow != null) {
                    branches.add(new IfBranch(m.group(1), m.group(2), parseRowTemplate(templateRow, parser, fmt)));
                }
                r = endIfRow + 1;
            } else {
                r++;
            }
        }
        if (branches.isEmpty()) {
            log.warn("Không tìm thấy khối <jx:if> nào trong block <jx:forEach> của file mẫu");
            return;
        }

        int blockSize = closeTagRow - openTagRow + 1;
        int n = rows.size();
        int shiftAmount = n - blockSize;
        if (shiftAmount != 0 && closeTagRow + 1 <= sheet.getLastRowNum()) {
            sheet.shiftRows(closeTagRow + 1, sheet.getLastRowNum(), shiftAmount);
        }

        for (int i = 0; i < n; i++) {
            Map<String, Object> reportRow = safeRow(rows.get(i));
            IfBranch matched = null;
            for (IfBranch branch : branches) {
                if (branch.value.equals(reportRow.get(branch.field))) {
                    matched = branch;
                    break;
                }
            }

            int targetIdx = openTagRow + i;
            Row existing = sheet.getRow(targetIdx);
            if (existing != null) {
                // Xoá sạch dòng cũ (có thể đang mang style/nội dung của 1 khối <jx:if> khác) trước khi ghi đè,
                // tránh lẫn dữ liệu giữa các loại dòng khác nhau.
                sheet.removeRow(existing);
            }
            Row targetRow = sheet.createRow(targetIdx);
            if (matched == null) {
                log.warn("Không tìm thấy khối <jx:if> khớp với dữ liệu dòng thứ {} (TYPE={})", i, reportRow.get("TYPE"));
                continue;
            }
            evaluateAndWriteRow(targetRow, matched.rowTemplate, reportRow, i);
        }

        // Khi số dòng dữ liệu ít hơn số dòng vật lý gốc của block (do block gốc gồm nhiều dòng
        // <jx:if>/mẫu/</jx:if> cho các nhánh không dùng tới), phần dòng scaffolding còn sót lại
        // (tag <jx:if>, </jx:if>, </jx:forEach>...) nằm ngoài shiftRows nên phải xoá thủ công.
        for (int idx = openTagRow + n; idx <= closeTagRow; idx++) {
            Row leftover = sheet.getRow(idx);
            if (leftover != null) {
                sheet.removeRow(leftover);
            }
        }
    }

    public static void writeWorkbook(Workbook workbook, HttpServletResponse response, String fileName) throws IOException {
        writeWorkbook(workbook, response, fileName, "application/vnd.ms-excel");
    }

    public static void writeWorkbook(Workbook workbook, HttpServletResponse response, String fileName, String contentType) throws IOException {
        response.setContentType(contentType);
        response.setHeader("Content-Disposition", "attachment; filename=\"" +
                URLEncoder.encode(fileName, StandardCharsets.UTF_8) + "\"");
        workbook.write(response.getOutputStream());
    }

    /** Tìm dòng chứa {@code <jx:forEach>} và {@code </jx:forEach>} trong sheet. */
    private static int[] findForEachBounds(Sheet sheet, DataFormatter fmt) {
        int openTagRow = -1;
        int closeTagRow = -1;
        for (int r = 0; r <= sheet.getLastRowNum(); r++) {
            Row row = sheet.getRow(r);
            if (row == null) {
                continue;
            }
            for (Cell cell : row) {
                String v = fmt.formatCellValue(cell);
                if (v.contains("<jx:forEach")) {
                    openTagRow = r;
                }
                if (v.contains("</jx:forEach>")) {
                    closeTagRow = r;
                }
            }
        }
        return new int[]{openTagRow, closeTagRow};
    }

    /** Phân tích 1 dòng mẫu: lấy style + biểu thức SpEL {@code ${reports.FIELD}} hoặc tổng {@code $[SUM(a:b)]} từng cột. */
    private static RowTemplate parseRowTemplate(Row templateRow, ExpressionParser parser, DataFormatter fmt) {
        int lastCol = templateRow.getLastCellNum();
        Expression[] expressions = new Expression[lastCol];
        CellStyle[] cellStyles = new CellStyle[lastCol];
        int[] sumStartCol = new int[lastCol];
        int[] sumEndCol = new int[lastCol];
        for (int c = 0; c < lastCol; c++) {
            sumStartCol[c] = -1;
            sumEndCol[c] = -1;
            Cell cell = templateRow.getCell(c);
            if (cell == null) {
                continue;
            }
            cellStyles[c] = cell.getCellStyle();
            String text = fmt.formatCellValue(cell);
            if (text == null) {
                continue;
            }
            Matcher sumMatcher = SUM_PATTERN.matcher(text);
            if (sumMatcher.matches()) {
                sumStartCol[c] = CellReference.convertColStringToIndex(sumMatcher.group(1));
                sumEndCol[c] = CellReference.convertColStringToIndex(sumMatcher.group(2));
            } else if (text.startsWith("${") && text.endsWith("}")) {
                String expr = text.substring(2, text.length() - 1)
                        .replace("i.index", "#i.index")
                        .replace("reports.", "#reports.");
                try {
                    expressions[c] = parser.parseExpression(expr);
                } catch (Exception e) {
                    log.warn("Không parse được biểu thức cột {} trong file mẫu: {}", c, text, e);
                }
            }
        }
        return new RowTemplate(lastCol, expressions, cellStyles, sumStartCol, sumEndCol);
    }

    /** Tính giá trị từng cột (SpEL + tổng SUM) của 1 dòng mẫu đã phân tích rồi ghi vào dòng đích. */
    private static void evaluateAndWriteRow(Row targetRow, RowTemplate rt, Map<String, Object> reportRow, int loopIndex) {
        StandardEvaluationContext ctx = new StandardEvaluationContext();
        ctx.addPropertyAccessor(new MapAccessor());
        ctx.setVariable("reports", reportRow);
        ctx.setVariable("i", new LoopIndexHolder(loopIndex));

        Object[] rowValues = new Object[rt.lastCol];
        for (int c = 0; c < rt.lastCol; c++) {
            if (rt.expressions[c] == null) {
                continue;
            }
            try {
                rowValues[c] = rt.expressions[c].getValue(ctx);
            } catch (Exception e) {
                rowValues[c] = null;
            }
        }
        for (int c = 0; c < rt.lastCol; c++) {
            if (rt.sumStartCol[c] < 0) {
                continue;
            }
            double sum = 0;
            for (int s = rt.sumStartCol[c]; s <= rt.sumEndCol[c]; s++) {
                if (rowValues[s] instanceof Number) {
                    sum += ((Number) rowValues[s]).doubleValue();
                }
            }
            rowValues[c] = sum;
        }

        for (int c = 0; c < rt.lastCol; c++) {
            if (rt.cellStyles[c] == null) {
                continue;
            }
            Cell cell = targetRow.getCell(c);
            if (cell == null) {
                cell = targetRow.createCell(c);
            }
            cell.setCellStyle(rt.cellStyles[c]);
            if (rt.expressions[c] == null && rt.sumStartCol[c] < 0) {
                continue;
            }
            setCellObjectValue(cell, rowValues[c]);
        }
    }

    private static void setCellObjectValue(Cell cell, Object value) {
        if (value == null) {
            cell.setBlank();
        } else if (value instanceof Number) {
            cell.setCellValue(((Number) value).doubleValue());
        } else {
            cell.setCellValue(value.toString());
        }
    }

    /**
     * Bọc dữ liệu 1 dòng: trường số chưa có trong kết quả truy vấn (chưa bổ sung câu lệnh) mặc định 0
     * để biểu thức tính toán trong template không lỗi; trường chuỗi/ngày vẫn giữ nguyên null để hiển thị trống.
     */
    private static Map<String, Object> safeRow(Map<String, Object> row) {
        return new HashMap<>(row) {
            @Override
            public boolean containsKey(Object key) {
                // Luôn báo "có" để MapAccessor (SpEL) cho phép đọc property, kể cả trường chưa có
                // trong kết quả truy vấn - get() bên dưới sẽ tự quyết định giá trị mặc định.
                return true;
            }

            @Override
            public Object get(Object key) {
                if (!super.containsKey(key)) {
                    return isStringField(key) ? null : 0;
                }
                return super.get(key);
            }
        };
    }

    /**
     * Trường chuỗi/ngày cần để trống khi thiếu, thay vì mặc định 0. Ngoài danh sách tên cố định
     * ({@link #STRING_FIELDS}), các cột dạng {@code DATE_<số>}, {@code DATE_IN_<số>}, {@code DATE_OUT_<số>}
     * (ngày+tháng ghép, VD DATE_111, DATE_IN_3006...) cũng luôn là chuỗi - dùng regex vì số lượng hậu tố
     * quá nhiều để liệt kê hết.
     */
    private static boolean isStringField(Object key) {
        if (!(key instanceof String)) {
            return false;
        }
        String name = (String) key;
        return STRING_FIELDS.contains(name) || DATE_FIELD_PATTERN.matcher(name).matches();
    }

    private static Set<String> buildStringFields() {
        Set<String> fields = new HashSet<>();
        fields.add("EMPID");
        fields.add("PERSON_ID");
        fields.add("LOCAL_NAME");
        fields.add("DEPTNO");
        fields.add("DEPT_NAME");
        fields.add("DEPT_TYPE");
        fields.add("POSITION_NAME");
        fields.add("DATE_STARTED");
        fields.add("END_PROBATION_DATE");
        fields.add("DATE_LEFT");
        fields.add("EMPLOYEE_TYPE");
        fields.add("FROM_TIME");
        fields.add("TO_TIME");
        fields.add("YEAR");
        fields.add("EMP_TYPE_CODE");
        fields.add("EMP_TYPE_NAME");
        fields.add("POST_FAMILY");
        fields.add("POST_FAMILY_NAME");
        fields.add("POST_GRADE_NO");
        fields.add("POST_GRADE_NAME");
        fields.add("POSITION_NO");
        fields.add("DATE_STARTED1");
        fields.add("DATE_STARTED2");
        fields.add("DATE_STARTED3");
        fields.add("DATE_STARTED4");
        for (int d = 1; d <= 31; d++) {
            fields.add("DATE_" + d);
            fields.add("DAY_OT_" + d);
            fields.add("NIGHT_OT_" + d);
        }
        return fields;
    }

    private static class RowTemplate {
        final int lastCol;
        final Expression[] expressions;
        final CellStyle[] cellStyles;
        final int[] sumStartCol;
        final int[] sumEndCol;

        RowTemplate(int lastCol, Expression[] expressions, CellStyle[] cellStyles, int[] sumStartCol, int[] sumEndCol) {
            this.lastCol = lastCol;
            this.expressions = expressions;
            this.cellStyles = cellStyles;
            this.sumStartCol = sumStartCol;
            this.sumEndCol = sumEndCol;
        }
    }

    private static class IfBranch {
        final String field;
        final String value;
        final RowTemplate rowTemplate;

        IfBranch(String field, String value, RowTemplate rowTemplate) {
            this.field = field;
            this.value = value;
            this.rowTemplate = rowTemplate;
        }
    }

    private static class LoopIndexHolder {
        private final int index;

        LoopIndexHolder(int index) {
            this.index = index;
        }

        public int getIndex() {
            return index;
        }
    }
}
