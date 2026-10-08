package com.ait.pa.salary.service.impl;

import com.ait.pa.salary.dto.PaItemInputDto;
import com.ait.pa.salary.dto.PaItemInputSaveReqDto;
import com.ait.pa.salary.mapper.PaItemInputMapper;
import com.ait.pa.salary.service.PaItemInputService;
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
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.ByteArrayOutputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

@Service
public class PaItemInputServiceImpl implements PaItemInputService {

    private static final Logger log = LoggerFactory.getLogger(PaItemInputServiceImpl.class);

    @Autowired
    private PaItemInputMapper mapper;

    @Override
    public Map<String, List<PaItemInputDto>> getAllSectionItems() {
        try {
            Map<String, List<PaItemInputDto>> result = new HashMap<>();
            result.put("hrItems",         mapper.selectHrItems());
            result.put("attendanceItems", mapper.selectAttendanceItems());
            result.put("inputItems",      mapper.selectInputItems());
            result.put("computeItems",    mapper.selectComputeItems());
            log.info("Lấy danh sách hạng mục tất cả phần: hr={}, att={}, inp={}, cal={}",
                    result.get("hrItems").size(), result.get("attendanceItems").size(),
                    result.get("inputItems").size(), result.get("computeItems").size());
            return result;
        } catch (Exception e) {
            log.error("Lỗi khi lấy danh sách hạng mục: {}", e.getMessage(), e);
            throw e;
        }
    }

    @Override
    public List<PaItemInputDto> getSavedItems(Integer isUse, Integer itemType) {
        try {
            List<PaItemInputDto> list = mapper.selectSavedItems(isUse, itemType);
            log.info("Lấy PA_ITEM_INPUT isUse={}, itemType={}: count={}", isUse, itemType, list.size());
            return list;
        } catch (Exception e) {
            log.error("Lỗi khi lấy PA_ITEM_INPUT isUse={}, itemType={}: {}", isUse, itemType, e.getMessage(), e);
            throw e;
        }
    }

    @Override
    @Transactional
    public void saveItems(PaItemInputSaveReqDto req) {
        try {
            mapper.deleteByIsUseAndItemType(req.getIsUse(), req.getItemType());
            if (req.getItems() != null && !req.getItems().isEmpty()) {
                for (PaItemInputDto item : req.getItems()) {
                    item.setIsUse(req.getIsUse());
                    item.setItemType(req.getItemType());
                    item.setActivity(1);
                    mapper.insertItem(item);
                }
            }
            log.info("Lưu PA_ITEM_INPUT isUse={}, itemType={}: count={}", req.getIsUse(), req.getItemType(),
                    req.getItems() == null ? 0 : req.getItems().size());
        } catch (Exception e) {
            log.error("Lỗi khi lưu PA_ITEM_INPUT isUse={}, itemType={}: {}", req.getIsUse(), req.getItemType(), e.getMessage(), e);
            throw e;
        }
    }

    @Override
    public byte[] exportSummaryHtsv(String payScheduleNo, List<String> deptNos, List<PaItemInputDto> items) {
        try {
            List<String> itemIds = new ArrayList<>();
            Map<String, String> itemNameMap = new LinkedHashMap<>();
            for (PaItemInputDto it : items) {
                if (it.getItemId() == null || it.getItemId().isBlank()) continue;
                itemIds.add(it.getItemId());
                if (it.getItemName() != null && !it.getItemName().isBlank()) {
                    itemNameMap.put(it.getItemId().toUpperCase(), it.getItemName());
                }
            }
            // Hạng mục FE không gửi tên -> lấy tên đã lưu ở PA_ITEM_INPUT, cuối cùng fallback về itemId
            if (itemNameMap.size() < itemIds.size() && !itemIds.isEmpty()) {
                for (PaItemInputDto d : mapper.selectItemNamesByIds(itemIds)) {
                    if (d.getItemId() != null && d.getItemName() != null) {
                        itemNameMap.putIfAbsent(d.getItemId().toUpperCase(), d.getItemName());
                    }
                }
            }
            for (String id : itemIds) {
                itemNameMap.putIfAbsent(id.toUpperCase(), id);
            }

            List<Map<String, Object>> dataList = mapper.selectSummaryHtsvData(payScheduleNo, deptNos);
            log.info("Xuất Excel PA_SUMMARY_HTSV payScheduleNo={}, deptNos={}, itemIds={}: rows={}",
                    payScheduleNo, deptNos, itemIds, dataList.size());

            try (XSSFWorkbook wb = new XSSFWorkbook()) {
                XSSFSheet sheet = wb.createSheet("PA Summary");

                // Style header
                CellStyle headerStyle = wb.createCellStyle();
                headerStyle.setFillForegroundColor(IndexedColors.LIGHT_CORNFLOWER_BLUE.getIndex());
                headerStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);

                // Chỉ xuất các cột được tick, đúng thứ tự FE gửi lên (giống exportResult bản gốc - không có cột cố định)
                XSSFRow headerRow = sheet.createRow(0);
                int col = 0;
                List<String> upperItemIds = new ArrayList<>();
                for (String id : itemIds) {
                    upperItemIds.add(id.toUpperCase());
                    XSSFCell cell = headerRow.createCell(col++);
                    cell.setCellValue(itemNameMap.getOrDefault(id.toUpperCase(), id));
                    cell.setCellStyle(headerStyle);
                }

                // Hàng dữ liệu
                int rowIdx = 1;
                for (Map<String, Object> row : dataList) {
                    XSSFRow dataRow = sheet.createRow(rowIdx++);
                    int c = 0;
                    for (String itemId : upperItemIds) {
                        Object val = row.get(itemId);
                        XSSFCell cell = dataRow.createCell(c++);
                        if (val instanceof Number) {
                            cell.setCellValue(((Number) val).doubleValue());
                        } else if (NUMERIC_TEXT_COLUMNS.contains(itemId) && isNumeric(val)) {
                            // Mã NV lưu VARCHAR2 nhưng phải ra dạng number trong Excel
                            cell.setCellValue(Double.parseDouble(val.toString().trim()));
                        } else {
                            cell.setCellValue(val != null ? val.toString() : "");
                        }
                    }
                }

                for (int i = 0; i < upperItemIds.size(); i++) {
                    sheet.autoSizeColumn(i);
                }

                ByteArrayOutputStream baos = new ByteArrayOutputStream();
                wb.write(baos);
                return baos.toByteArray();
            }
        } catch (Exception e) {
            log.error("Lỗi khi xuất Excel PA_SUMMARY_HTSV payScheduleNo={}: {}", payScheduleNo, e.getMessage(), e);
            throw new RuntimeException("Lỗi khi xuất Excel: " + e.getMessage(), e);
        }
    }

    /** Cột kiểu chuỗi trong PA_SUMMARY_HTSV nhưng cần ghi ra Excel dạng number. */
    private static final Set<String> NUMERIC_TEXT_COLUMNS = Set.of("EMPID");

    private boolean isNumeric(Object val) {
        return val != null && val.toString().trim().matches("\\d+(\\.\\d+)?");
    }
}
