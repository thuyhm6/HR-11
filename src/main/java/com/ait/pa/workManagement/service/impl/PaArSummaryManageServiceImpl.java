package com.ait.pa.workManagement.service.impl;

import com.ait.exception.BusinessException;
import com.ait.pa.workManagement.dto.PaArSummaryManageDto;
import com.ait.pa.workManagement.dto.PaArSummaryManageSaveDto;
import com.ait.pa.workManagement.dto.PaArSummaryManageSearchDto;
import com.ait.pa.workManagement.dto.PaArSummaryOptionDto;
import com.ait.pa.workManagement.mapper.PaArSummaryManageMapper;
import com.ait.pa.workManagement.service.PaArSummaryManageService;
import com.ait.util.I18nUtil;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.FillPatternType;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.io.ByteArrayOutputStream;
import java.math.BigDecimal;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Service
public class PaArSummaryManageServiceImpl implements PaArSummaryManageService {

    private static final Logger log = LoggerFactory.getLogger(PaArSummaryManageServiceImpl.class);

    @Autowired
    private PaArSummaryManageMapper mapper;

    @Override
    @Transactional(readOnly = true)
    public List<PaArSummaryOptionDto> getPayScheduleList() {
        try {
            return mapper.selectPayScheduleList();
        } catch (Exception e) {
            log.error("Lỗi khi lấy danh sách kế hoạch trả lương (quản lý tổng hợp chấm công): {}", e.getMessage(), e);
            throw e;
        }
    }

    @Override
    @Transactional(readOnly = true)
    public List<PaArSummaryOptionDto> getSummaryItemList() {
        try {
            return mapper.selectSummaryItemList();
        } catch (Exception e) {
            log.error("Lỗi khi lấy danh sách hạng mục tổng hợp chấm công: {}", e.getMessage(), e);
            throw e;
        }
    }

    @Override
    @Transactional(readOnly = true)
    public List<PaArSummaryManageDto> getList(PaArSummaryManageSearchDto params) throws BusinessException {
        log.info("Tra cứu quản lý tổng hợp chấm công payScheduleNo={}, key={}, deptNo={}, itemNos={}, isSpecialFlag={}",
                params.getPayScheduleNo(), params.getKey(), params.getDeptNo(), params.getItemNos(), params.getIsSpecialFlag());
        requireSchedule(params.getPayScheduleNo());
        // Tránh truy vấn quá nhiều dữ liệu - bắt buộc có ít nhất 1 điều kiện (đúng bản gốc).
        boolean hasFilter = StringUtils.hasText(params.getKey())
                || StringUtils.hasText(params.getDeptNo())
                || (params.getItemNos() != null && !params.getItemNos().isEmpty())
                || StringUtils.hasText(params.getIsSpecialFlag());
        if (!hasFilter) {
            throw new BusinessException("AR_SUMMARY_NO_FILTER",
                    I18nUtil.getMessage("ar.viewPaArSummaryForManageList.QINGXUANZERENYUANXIANGMUBUMEN.b"));
        }
        try {
            List<PaArSummaryManageDto> list = mapper.selectList(params);
            log.info("Tra cứu quản lý tổng hợp chấm công payScheduleNo={}: rows={}", params.getPayScheduleNo(), list.size());
            return list;
        } catch (Exception e) {
            log.error("Lỗi khi tra cứu quản lý tổng hợp chấm công payScheduleNo={}: {}",
                    params.getPayScheduleNo(), e.getMessage(), e);
            throw new BusinessException("AR_SUMMARY_LOAD", I18nUtil.getMessage("common.loadFail"), e);
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public int save(PaArSummaryManageSaveDto dto) throws BusinessException {
        log.info("Lưu ngoại lệ tổng hợp chấm công payScheduleNo={}, rows={}", dto.getPayScheduleNo(), dto.getItems().size());
        requireSchedule(dto.getPayScheduleNo());
        if (isPayConfirmed(dto.getPayScheduleNo())) {
            throw new BusinessException("AR_SUMMARY_CONFIRMED",
                    I18nUtil.getMessage("pa.arSummaryManage.msgConfirmedCannotEdit"));
        }
        try {
            int count = 0;
            for (PaArSummaryManageSaveDto.Item item : dto.getItems()) {
                count += mapper.update(dto.getPayScheduleNo(), item);
            }
            log.info("Lưu ngoại lệ tổng hợp chấm công payScheduleNo={}: updated={}", dto.getPayScheduleNo(), count);
            return count;
        } catch (Exception e) {
            log.error("Lỗi khi lưu ngoại lệ tổng hợp chấm công payScheduleNo={}: {}",
                    dto.getPayScheduleNo(), e.getMessage(), e);
            throw new BusinessException("AR_SUMMARY_SAVE", I18nUtil.getMessage("alert.message.update_fail"), e);
        }
    }

    @Override
    @Transactional(readOnly = true)
    public byte[] exportExcel(PaArSummaryManageSearchDto params) throws BusinessException {
        log.info("Xuất Excel quản lý tổng hợp chấm công payScheduleNo={}, key={}, deptNo={}",
                params.getPayScheduleNo(), params.getKey(), params.getDeptNo());
        requireSchedule(params.getPayScheduleNo());
        try {
            List<PaArSummaryOptionDto> items = mapper.selectSummaryItemList();
            List<PaArSummaryManageDto> data = mapper.selectExportList(params);

            // Pivot: 1 dòng / nhân viên, 1 cột / hạng mục (giữ thứ tự DEPTNO, EMPID từ SQL).
            Map<String, PaArSummaryManageDto> empMap = new LinkedHashMap<>();
            Map<String, Map<String, BigDecimal>> valueMap = new HashMap<>();
            for (PaArSummaryManageDto d : data) {
                empMap.putIfAbsent(d.getPersonId(), d);
                if (d.getItemNo() != null && d.getExportValue() != null) {
                    valueMap.computeIfAbsent(d.getPersonId(), k -> new HashMap<>())
                            .merge(d.getItemNo(), d.getExportValue(), BigDecimal::max);
                }
            }

            try (XSSFWorkbook wb = new XSSFWorkbook(); ByteArrayOutputStream out = new ByteArrayOutputStream()) {
                Sheet sheet = wb.createSheet("ArSummary");
                CellStyle headerStyle = createHeaderStyle(wb);

                Row header = sheet.createRow(0);
                int col = 0;
                col = headerCell(header, col, I18nUtil.getMessage("ess.infoApply.EMP_ID"), headerStyle);
                col = headerCell(header, col, I18nUtil.getMessage("ess.infoApply.NAME"), headerStyle);
                col = headerCell(header, col, I18nUtil.getMessage("ess.infoApply.DEPT"), headerStyle);
                for (PaArSummaryOptionDto item : items) {
                    col = headerCell(header, col, item.getName() != null ? item.getName() : item.getCode(), headerStyle);
                }

                int rowIdx = 1;
                for (Map.Entry<String, PaArSummaryManageDto> e : empMap.entrySet()) {
                    PaArSummaryManageDto emp = e.getValue();
                    Map<String, BigDecimal> values = valueMap.getOrDefault(e.getKey(), Map.of());
                    Row row = sheet.createRow(rowIdx++);
                    int c = 0;
                    row.createCell(c++).setCellValue(nvl(emp.getEmpId()));
                    row.createCell(c++).setCellValue(nvl(emp.getLocalName()));
                    row.createCell(c++).setCellValue(nvl(emp.getDeptName()));
                    for (PaArSummaryOptionDto item : items) {
                        BigDecimal v = values.get(item.getCode());
                        row.createCell(c++).setCellValue(v != null ? v.doubleValue() : 0d);
                    }
                }
                for (int i = 0; i < 3; i++) {
                    sheet.autoSizeColumn(i);
                }
                for (int i = 3; i < col; i++) {
                    sheet.setColumnWidth(i, 14 * 256);
                }
                sheet.createFreezePane(3, 1);

                wb.write(out);
                log.info("Xuất Excel quản lý tổng hợp chấm công payScheduleNo={}: employees={}",
                        params.getPayScheduleNo(), empMap.size());
                return out.toByteArray();
            }
        } catch (Exception e) {
            log.error("Lỗi khi xuất Excel quản lý tổng hợp chấm công payScheduleNo={}: {}",
                    params.getPayScheduleNo(), e.getMessage(), e);
            throw new BusinessException("AR_SUMMARY_EXPORT", I18nUtil.getMessage("common.loadFail"), e);
        }
    }

    // ==================== Helpers ====================

    private void requireSchedule(String payScheduleNo) throws BusinessException {
        if (!StringUtils.hasText(payScheduleNo)) {
            throw new BusinessException("AR_SUMMARY_NO_SCHEDULE", I18nUtil.getMessage("pa.workFlow.msgSelectSchedule"));
        }
    }

    private boolean isPayConfirmed(String payScheduleNo) {
        Integer flag = mapper.selectPaConfirmFlag(payScheduleNo);
        return flag != null && flag == 1;
    }

    private int headerCell(Row row, int col, String text, CellStyle style) {
        Cell cell = row.createCell(col);
        cell.setCellValue(text);
        cell.setCellStyle(style);
        return col + 1;
    }

    private CellStyle createHeaderStyle(XSSFWorkbook wb) {
        CellStyle style = wb.createCellStyle();
        style.setFillForegroundColor(IndexedColors.LIGHT_CORNFLOWER_BLUE.getIndex());
        style.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        Font font = wb.createFont();
        font.setBold(true);
        style.setFont(font);
        return style;
    }

    private String nvl(String s) {
        return s != null ? s : "";
    }
}
