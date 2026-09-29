package com.ait.disc.autoExcel.service.impl;

import com.ait.disc.autoExcel.dto.AutoExcelExportResult;
import com.ait.disc.autoExcel.dto.AutoExcelMasterDto;
import com.ait.disc.autoExcel.dto.AutoExcelParamDto;
import com.ait.disc.autoExcel.dto.AutoExcelRunDto;
import com.ait.disc.autoExcel.dto.AutoExcelSessionContext;
import com.ait.disc.autoExcel.mapper.AutoExcelMapper;
import com.ait.disc.autoExcel.service.AutoExcelExportService;
import com.ait.disc.autoExcel.util.AutoExcelSqlParser;
import com.ait.disc.autoExcel.util.AutoExcelSqlParser.PreparedSql;
import com.ait.exception.BusinessException;
import jakarta.annotation.PostConstruct;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.FillPatternType;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementSetter;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.RowCallbackHandler;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import javax.sql.DataSource;
import java.io.ByteArrayOutputStream;
import java.math.BigDecimal;
import java.sql.Clob;
import java.sql.ResultSetMetaData;
import java.sql.Types;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * Chạy báo cáo - chuyển phần chung của RetrieveMasterListCtroller.runForSqlWrite + SqlParamSerImpl.writeExcel (dự án
 * Hanwha_HTSV). Không port: template jXLS riêng của báo cáo IS_SPECIAL = 'Y' và các nhánh xử lý hardcode theo mã báo
 * cáo - mọi báo cáo đều xuất dạng bảng chung (tên cột = alias cột SQL, "_" đổi thành khoảng trắng như bản gốc).
 */
@Service
public class AutoExcelExportServiceImpl implements AutoExcelExportService {
    private static final Logger log = LoggerFactory.getLogger(AutoExcelExportServiceImpl.class);

    /** Giới hạn dòng của 1 sheet .xlsx (trừ dòng tiêu đề). Bản gốc (.xls) giới hạn 65.000 dòng. */
    private static final int MAX_ROWS = 1_048_575;
    private static final int QUERY_TIMEOUT_SECONDS = 300;
    private static final int MAX_CELL_LENGTH = 32_767;

    /**
     * Báo cáo mà câu SQL chỉ trả về 1 câu SQL khác (cột đầu tiên, vd SELECT GENERATE_ACCOUNT_REPORT(...) SQLVALUE FROM
     * DUAL) rồi mới chạy câu đó - typecode.properties bản gốc: report.parameter.type.zhixingcunchu.
     */
    private static final Set<String> SQL_RETURNING_REPORTS = Set.of("187");

    @Autowired
    private AutoExcelMapper mapper;

    @Autowired
    private DataSource dataSource;

    private JdbcTemplate jdbcTemplate;

    @PostConstruct
    void init() {
        jdbcTemplate = new JdbcTemplate(dataSource);
        jdbcTemplate.setQueryTimeout(QUERY_TIMEOUT_SECONDS);
        jdbcTemplate.setFetchSize(500);
    }

    @Override
    @Transactional(readOnly = true, rollbackFor = Exception.class)
    public AutoExcelExportResult export(AutoExcelRunDto dto, AutoExcelSessionContext ctx) throws BusinessException {
        log.info("export - sqlSeq={}, params={}", dto.getSqlSeq(), dto.getParams());
        AutoExcelMasterDto master;
        List<AutoExcelParamDto> paramDefs;
        try {
            master = mapper.selectDetail(dto.getSqlSeq());
            paramDefs = master == null ? List.of() : mapper.selectParamList(dto.getSqlSeq(), true);
        } catch (Exception e) {
            log.error("export - load report failed, sqlSeq={}", dto.getSqlSeq(), e);
            throw new BusinessException("AUTO_EXCEL_LOAD", "common.loadFail", e);
        }
        if (master == null) {
            throw new BusinessException("AUTO_EXCEL_NOT_FOUND", "autoExcel.msg.notFound");
        }
        if (!StringUtils.hasText(master.getSqlStmt())) {
            throw new BusinessException("AUTO_EXCEL_NO_SQL", "autoExcel.msg.noSql");
        }
        if (!AutoExcelSqlParser.isSelectStatement(master.getSqlStmt())) {
            throw new BusinessException("AUTO_EXCEL_INVALID_SQL", "autoExcel.msg.selectOnly");
        }

        PreparedSql prepared;
        try {
            prepared = AutoExcelSqlParser.prepare(master.getSqlStmt(), buildValues(master.getSqlStmt(), paramDefs, dto, ctx));
        } catch (IllegalArgumentException e) {
            log.warn("export - unsafe raw param value, param={}", e.getMessage());
            throw new BusinessException("AUTO_EXCEL_INVALID_PARAM", "autoExcel.msg.invalidParam");
        }

        try {
            if (SQL_RETURNING_REPORTS.contains(master.getSqlSeq())) {
                prepared = resolveGeneratedSql(prepared);
            }
            AutoExcelExportResult result = writeWorkbook(master, prepared);
            log.info("export - sqlSeq={}, rows={}", master.getSqlSeq(), result == null ? 0 : result.rowCount());
            return result;
        } catch (BusinessException e) {
            throw e;
        } catch (TooManyRowsException e) {
            throw new BusinessException("AUTO_EXCEL_TOO_MANY_ROWS", "autoExcel.msg.tooManyRows");
        } catch (Exception e) {
            log.error("export - execute failed, sqlSeq={}", master.getSqlSeq(), e);
            throw new BusinessException("AUTO_EXCEL_EXECUTE", "autoExcel.msg.executeFail", e);
        }
    }

    /**
     * Giá trị tham số: mặc định (DEFAULT_VAL) -> giá trị người dùng nhập (chỉ nhận tham số có trong câu SQL) -> tham số
     * hệ thống lấy từ phiên đăng nhập (luôn ghi đè, không tin giá trị client gửi lên).
     */
    private Map<String, String> buildValues(String sql, List<AutoExcelParamDto> paramDefs, AutoExcelRunDto dto,
                                            AutoExcelSessionContext ctx) {
        Map<String, String> values = new HashMap<>();
        for (AutoExcelParamDto p : paramDefs) {
            if (StringUtils.hasText(p.getDefaultVal())) {
                values.put(p.getParam(), p.getDefaultVal());
            }
        }
        for (String name : AutoExcelSqlParser.extractParams(sql)) {
            String v = dto.getParams().get(name);
            if (v != null && !AutoExcelSqlParser.isSystemParam(name)) {
                values.put(name, v.trim());
            }
        }
        values.put("interLanguage", ctx.lang());
        values.put("interCpnyID", ctx.cpnyId());
        values.put("CPNY_ID", ctx.cpnyId());
        values.put("CPNY", ctx.cpnyId());
        values.put("PERSON_ID", ctx.personId());
        values.put("adminID", ctx.personId());
        values.put("adminId", ctx.personId());
        values.put("supervisorPersonId", ctx.personId());
        values.put("CREATED_BY", ctx.personId());
        values.put("UPDATED_BY", ctx.personId());
        values.put("adminIP", ctx.adminIp());
        values.put("CREATED_IP", ctx.adminIp());
        values.put("UPDATED_IP", ctx.adminIp());
        return values;
    }

    private PreparedSql resolveGeneratedSql(PreparedSql prepared) throws BusinessException {
        String generated = jdbcTemplate.query(prepared.sql(), bind(prepared.args()),
                (ResultSetExtractor<String>) rs -> rs.next() ? rs.getString(1) : null);
        if (!AutoExcelSqlParser.isSelectStatement(generated)) {
            throw new BusinessException("AUTO_EXCEL_INVALID_SQL", "autoExcel.msg.selectOnly");
        }
        return AutoExcelSqlParser.prepare(generated, Map.of());
    }

    private AutoExcelExportResult writeWorkbook(AutoExcelMasterDto master, PreparedSql prepared) throws Exception {
        try (SXSSFWorkbook wb = new SXSSFWorkbook(200)) {
            Sheet sheet = wb.createSheet(sanitizeSheetName(master.getSqlNm()));
            CellStyle headerStyle = createHeaderStyle(wb);
            SimpleDateFormat dateFmt = new SimpleDateFormat("dd/MM/yyyy");
            SimpleDateFormat dateTimeFmt = new SimpleDateFormat("dd/MM/yyyy HH:mm");
            int[] rowIdx = {0};

            jdbcTemplate.query(prepared.sql(), bind(prepared.args()), (RowCallbackHandler) rs -> {
                ResultSetMetaData meta = rs.getMetaData();
                int columns = meta.getColumnCount();
                if (rowIdx[0] == 0) {
                    Row header = sheet.createRow(0);
                    for (int c = 1; c <= columns; c++) {
                        String label = meta.getColumnLabel(c).replace("_", " ");
                        Cell cell = header.createCell(c - 1);
                        cell.setCellValue(label);
                        cell.setCellStyle(headerStyle);
                        sheet.setColumnWidth(c - 1, Math.min(Math.max(label.length() + 4, 12), 60) * 256);
                    }
                    rowIdx[0] = 1;
                }
                if (rowIdx[0] > MAX_ROWS) {
                    throw new TooManyRowsException();
                }
                Row row = sheet.createRow(rowIdx[0]++);
                for (int c = 1; c <= columns; c++) {
                    writeCell(row.createCell(c - 1), rs.getObject(c), dateFmt, dateTimeFmt);
                }
            });

            if (rowIdx[0] <= 1) {
                return null;
            }
            ByteArrayOutputStream bos = new ByteArrayOutputStream();
            wb.write(bos);
            wb.dispose();
            // Tên file giống bản gốc: <mã báo cáo>_<tên báo cáo>
            String fileName = master.getSqlSeq() + "_" + master.getSqlNm() + ".xlsx";
            return new AutoExcelExportResult(bos.toByteArray(), fileName, rowIdx[0] - 1);
        }
    }

    private void writeCell(Cell cell, Object value, SimpleDateFormat dateFmt, SimpleDateFormat dateTimeFmt)
            throws java.sql.SQLException {
        if (value == null) {
            return;
        }
        if (value instanceof BigDecimal bd) {
            // Số > 15 chữ số (mã, số tài khoản...) ghi dạng chuỗi để Excel không làm tròn
            if (bd.precision() - bd.scale() > 15 || bd.precision() > 15) {
                cell.setCellValue(bd.toPlainString());
            } else {
                cell.setCellValue(bd.doubleValue());
            }
        } else if (value instanceof Number n) {
            cell.setCellValue(n.doubleValue());
        } else if (value instanceof java.util.Date d) {
            cell.setCellValue(hasTime(d) ? dateTimeFmt.format(d) : dateFmt.format(d));
        } else if (value instanceof Clob clob) {
            cell.setCellValue(clob.getSubString(1, (int) Math.min(clob.length(), MAX_CELL_LENGTH)));
        } else {
            String s = value.toString();
            cell.setCellValue(s.length() > MAX_CELL_LENGTH ? s.substring(0, MAX_CELL_LENGTH) : s);
        }
    }

    private boolean hasTime(java.util.Date d) {
        Calendar cal = Calendar.getInstance();
        cal.setTime(d);
        return cal.get(Calendar.HOUR_OF_DAY) != 0 || cal.get(Calendar.MINUTE) != 0 || cal.get(Calendar.SECOND) != 0;
    }

    /** Mọi tham số bind dạng chuỗi (bản gốc cũng đưa vào SQL dưới dạng '...'); NULL bind kiểu VARCHAR cho Oracle. */
    private PreparedStatementSetter bind(List<Object> args) {
        return ps -> {
            for (int i = 0; i < args.size(); i++) {
                Object v = args.get(i);
                if (v == null) {
                    ps.setNull(i + 1, Types.VARCHAR);
                } else {
                    ps.setString(i + 1, v.toString());
                }
            }
        };
    }

    private CellStyle createHeaderStyle(SXSSFWorkbook wb) {
        CellStyle style = wb.createCellStyle();
        style.setFillForegroundColor(IndexedColors.LIGHT_CORNFLOWER_BLUE.getIndex());
        style.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        Font font = wb.createFont();
        font.setBold(true);
        style.setFont(font);
        return style;
    }

    private String sanitizeSheetName(String name) {
        String s = name == null ? "" : name.replaceAll("[\\\\/*?\\[\\]:]", " ").trim();
        if (s.isEmpty()) {
            return "Data";
        }
        return s.length() > 31 ? s.substring(0, 31) : s;
    }

    /** Dừng đọc ResultSet khi vượt giới hạn dòng của .xlsx. */
    private static class TooManyRowsException extends RuntimeException {
        TooManyRowsException() {
            super(null, null, false, false);
        }
    }
}
