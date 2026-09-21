package com.ait.sy.sqlMaster.service.impl;

import com.ait.sy.sqlMaster.dto.SySqlMasterDetailDto;
import com.ait.sy.sqlMaster.mapper.SySqlMasterMapper;
import com.ait.sy.sqlMaster.mapper.SySqlParamMapper;
import com.ait.sy.sqlMaster.model.SySqlMaster;
import com.ait.sy.sqlMaster.model.SySqlParam;
import com.ait.sy.sqlMaster.service.SySqlMasterService;

import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.FillPatternType;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.ByteArrayOutputStream;
import java.math.BigDecimal;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

/**
 * Quản lý truy vấn SQL tự động xuất Excel. Thêm/Sửa/Tham số thao tác qua modal
 * ngay trên màn hình danh sách (xem ViewSqlMasterListComponent bên Angular),
 * không có trang Chi tiết riêng - tương tự disc-sql-master-list (HAE-VHR).
 */
@Service
public class SySqlMasterServiceImpl implements SySqlMasterService {
    private static final Logger log = LoggerFactory.getLogger(SySqlMasterServiceImpl.class);
    private static final DateTimeFormatter INPUT_DATE_FORMAT = DateTimeFormatter.ofPattern("dd/MM/yyyy");

    @Autowired
    private SySqlMasterMapper sqlMasterMapper;

    @Autowired
    private SySqlParamMapper sqlParamMapper;

    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    @Override
    public List<SySqlMaster> findAll(String keyword, String pgmNm) {
        log.info("Tim danh sach truy van SQL, keyword={}, pgmNm={}", keyword, pgmNm);
        return sqlMasterMapper.findAll(keyword, pgmNm);
    }

    @Override
    public SySqlMasterDetailDto getDetail(String sqlSeq) {
        log.info("Lay chi tiet truy van SQL, sqlSeq={}", sqlSeq);
        SySqlMaster master = sqlMasterMapper.findBySqlSeq(sqlSeq);
        if (master == null) {
            return null;
        }
        SySqlMasterDetailDto dto = new SySqlMasterDetailDto();
        dto.setSqlSeq(master.getSqlSeq());
        dto.setPgmNm(master.getPgmNm());
        dto.setSqlNm(master.getSqlNm());
        dto.setSqlDesc(master.getSqlDesc());
        dto.setSqlStmt(master.getSqlStmt());
        dto.setUseYn(master.getUseYn());
        dto.setCreateDate(master.getCreateDate());
        dto.setCreatedBy(master.getCreatedBy());
        dto.setUpdateDate(master.getUpdateDate());
        dto.setUpdatedBy(master.getUpdatedBy());
        dto.setParams(sqlParamMapper.findBySqlSeq(sqlSeq));
        return dto;
    }

    @Override
    @Transactional
    public String save(SySqlMasterDetailDto dto) {
        validateSelectStatement(dto.getSqlStmt());

        String sqlSeq = dto.getSqlSeq();
        boolean isNew = (sqlSeq == null || sqlSeq.isEmpty());

        try {
            if (isNew) {
                sqlSeq = sqlMasterMapper.getNextSqlSeq();
            }

            SySqlMaster master = new SySqlMaster();
            master.setSqlSeq(sqlSeq);
            master.setPgmNm(dto.getPgmNm());
            master.setSqlNm(dto.getSqlNm());
            master.setSqlDesc(dto.getSqlDesc());
            master.setSqlStmt(dto.getSqlStmt());
            master.setUseYn((dto.getUseYn() == null || dto.getUseYn().isEmpty()) ? "Y" : dto.getUseYn());

            if (isNew) {
                sqlMasterMapper.insert(master);
                log.info("Da them moi truy van SQL, sqlSeq={}", sqlSeq);
            } else {
                sqlMasterMapper.update(master);
                log.info("Da cap nhat truy van SQL, sqlSeq={}", sqlSeq);
            }

            // Ghi đè toàn bộ tham số theo danh sách hiện tại (đơn giản, tránh diff phức tạp không cần thiết)
            sqlParamMapper.deleteBySqlSeq(sqlSeq);
            List<SySqlParam> params = dto.getParams();
            if (params != null) {
                int order = 1;
                for (SySqlParam p : params) {
                    if (p.getParam() == null || p.getParam().trim().isEmpty()) {
                        continue;
                    }
                    p.setSqlSeq(sqlSeq);
                    p.setSqlParamNo(String.valueOf(order));
                    p.setSortCd(order);
                    if (p.getUseYn() == null || p.getUseYn().isEmpty()) {
                        p.setUseYn("Y");
                    }
                    sqlParamMapper.insert(p);
                    order++;
                }
            }
            return sqlSeq;
        } catch (IllegalArgumentException e) {
            throw e;
        } catch (Exception e) {
            log.error("Loi khi luu truy van SQL, sqlSeq={}", sqlSeq, e);
            throw new RuntimeException("Loi he thong khi luu truy van SQL.", e);
        }
    }

    @Override
    @Transactional
    public void delete(String sqlSeq) {
        try {
            sqlParamMapper.deleteBySqlSeq(sqlSeq);
            sqlMasterMapper.deleteBySqlSeq(sqlSeq);
            log.info("Da xoa truy van SQL, sqlSeq={}", sqlSeq);
        } catch (Exception e) {
            log.error("Loi khi xoa truy van SQL, sqlSeq={}", sqlSeq, e);
            throw new RuntimeException("Loi he thong khi xoa truy van SQL.", e);
        }
    }

    @Override
    public byte[] exportExcel(String sqlSeq, Map<String, String> paramValues) {
        SySqlMaster master = sqlMasterMapper.findBySqlSeq(sqlSeq);
        if (master == null || master.getSqlStmt() == null || master.getSqlStmt().trim().isEmpty()) {
            throw new IllegalArgumentException("Khong tim thay cau lenh SQL de xuat Excel.");
        }
        validateSelectStatement(master.getSqlStmt());

        List<SySqlParam> paramDefs = sqlParamMapper.findBySqlSeq(sqlSeq);
        MapSqlParameterSource paramSource = new MapSqlParameterSource();
        for (SySqlParam def : paramDefs) {
            if (!"Y".equalsIgnoreCase(def.getUseYn())) {
                continue;
            }
            String raw = (paramValues != null && paramValues.get(def.getParam()) != null && !paramValues.get(def.getParam()).isEmpty())
                    ? paramValues.get(def.getParam())
                    : def.getDefaultVal();
            paramSource.addValue(def.getParam(), convertParamValue(raw, def.getSqlParamTp()));
        }

        try (XSSFWorkbook wb = new XSSFWorkbook()) {
            XSSFSheet sheet = wb.createSheet(sanitizeSheetName(master.getSqlNm()));

            CellStyle headerStyle = wb.createCellStyle();
            headerStyle.setFillForegroundColor(IndexedColors.LIGHT_CORNFLOWER_BLUE.getIndex());
            headerStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);

            int[] colCount = {0};
            int[] rowIdx = {0};

            namedParameterJdbcTemplate.query(master.getSqlStmt(), paramSource, (ResultSet rs) -> {
                ResultSetMetaData meta = rs.getMetaData();
                int columns = meta.getColumnCount();
                if (rowIdx[0] == 0) {
                    XSSFRow headerRow = sheet.createRow(0);
                    for (int c = 1; c <= columns; c++) {
                        XSSFCell cell = headerRow.createCell(c - 1);
                        cell.setCellValue(meta.getColumnLabel(c));
                        cell.setCellStyle(headerStyle);
                    }
                    colCount[0] = columns;
                    rowIdx[0] = 1;
                }
                XSSFRow dataRow = sheet.createRow(rowIdx[0]++);
                for (int c = 1; c <= columns; c++) {
                    Object value = rs.getObject(c);
                    dataRow.createCell(c - 1).setCellValue(value != null ? value.toString() : "");
                }
            });

            if (rowIdx[0] == 0) {
                sheet.createRow(0).createCell(0).setCellValue("Khong co du lieu");
            } else {
                for (int i = 0; i < colCount[0]; i++) {
                    sheet.autoSizeColumn(i);
                }
            }

            ByteArrayOutputStream bos = new ByteArrayOutputStream();
            wb.write(bos);
            return bos.toByteArray();
        } catch (IllegalArgumentException e) {
            throw e;
        } catch (Exception e) {
            log.error("Loi khi xuat Excel cho truy van SQL, sqlSeq={}", sqlSeq, e);
            throw new RuntimeException("Loi he thong khi xuat Excel.", e);
        }
    }

    private Object convertParamValue(String raw, String type) {
        if (raw == null || raw.isEmpty()) {
            return null;
        }
        if (type == null) {
            return raw;
        }
        try {
            switch (type.toUpperCase()) {
                case "NUMBER":
                    return new BigDecimal(raw);
                case "DATE":
                    return java.sql.Date.valueOf(LocalDate.parse(raw, INPUT_DATE_FORMAT));
                default:
                    return raw;
            }
        } catch (Exception e) {
            log.warn("Khong the chuyen doi gia tri tham so '{}' theo kieu {}, giu nguyen chuoi.", raw, type);
            return raw;
        }
    }

    /** Chỉ cho phép câu lệnh SELECT/WITH để tránh rủi ro DML nguy hiểm qua tính năng xuất Excel. */
    private void validateSelectStatement(String sql) {
        if (sql == null || sql.trim().isEmpty()) {
            throw new IllegalArgumentException("Cau lenh SQL khong duoc de trong.");
        }
        String trimmed = sql.trim().toUpperCase();
        if (!(trimmed.startsWith("SELECT") || trimmed.startsWith("WITH"))) {
            throw new IllegalArgumentException("Chi chap nhan cau lenh SELECT/WITH de dam bao an toan du lieu.");
        }
    }

    private String sanitizeSheetName(String name) {
        if (name == null || name.trim().isEmpty()) {
            return "Data";
        }
        String s = name.replaceAll("[\\\\/*?\\[\\]:]", " ").trim();
        if (s.isEmpty()) {
            return "Data";
        }
        return s.length() > 31 ? s.substring(0, 31) : s;
    }
}
