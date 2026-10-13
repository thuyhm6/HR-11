package com.ait.hrm.uniform.service.impl;

import com.ait.exception.BusinessException;
import com.ait.hrm.uniform.dto.HrUniformChangeDetailDto;
import com.ait.hrm.uniform.dto.HrUniformChangeDto;
import com.ait.hrm.uniform.dto.HrUniformChangeSearchDto;
import com.ait.hrm.uniform.dto.HrUniformEmpInfoDto;
import com.ait.hrm.uniform.dto.HrUniformImportResultDto;
import com.ait.hrm.uniform.dto.HrUniformImportRowDto;
import com.ait.hrm.uniform.dto.HrUniformItemDto;
import com.ait.hrm.uniform.dto.HrUniformMonthQtyDto;
import com.ait.hrm.uniform.mapper.HrUniformMapper;
import com.ait.hrm.uniform.service.HrUniformService;
import com.ait.sy.sys.dto.DataTablesResponse;
import com.ait.util.I18nUtil;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.apache.poi.ss.util.CellRangeAddress;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.text.Normalizer;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class HrUniformServiceImpl implements HrUniformService {

    private static final Logger log = LoggerFactory.getLogger(HrUniformServiceImpl.class);

    /** Quy định: mỗi nhân viên chỉ được đổi đồng phục 6 tháng / 1 lần. */
    public static final int CHANGE_INTERVAL_MONTHS = 6;

    private static final DateTimeFormatter DMY = DateTimeFormatter.ofPattern("dd/MM/yyyy");
    private static final DateTimeFormatter YM = DateTimeFormatter.ofPattern("yyyy-MM");
    /** Các định dạng ngày chấp nhận trong file Excel (file mẫu dùng dd.MM.yyyy). */
    private static final List<DateTimeFormatter> DATE_PARSERS = List.of(
            DateTimeFormatter.ofPattern("d.M.yyyy"),
            DateTimeFormatter.ofPattern("d/M/yyyy"),
            DateTimeFormatter.ofPattern("d-M-yyyy"),
            DateTimeFormatter.ofPattern("yyyy-M-d"),
            DateTimeFormatter.ofPattern("yyyy/M/d"));

    /** Số dòng đầu file dùng để dò dòng tiêu đề. */
    private static final int HEADER_SCAN_ROWS = 10;
    private static final int MAX_IMPORT_ROWS = 5000;

    /** Tiêu đề (đã bỏ dấu, viết hoa) nhận diện các cột cố định trong file upload. */
    private static final Map<String, List<String>> FIXED_HEADER_ALIASES = Map.of(
            "empId", List.of("MA", "MA NV", "MA NHAN VIEN", "EMP ID", "EMPID", "EMPLOYEE ID"),
            "localName", List.of("HO TEN", "HO VA TEN", "TEN NHAN VIEN", "NAME", "FULL NAME", "EMPLOYEE NAME"),
            "changeDate", List.of("NGAY DOI", "NGAY DOI DONG PHUC", "CHANGE DATE"),
            "reason", List.of("LI DO", "LY DO", "REASON"),
            "remark", List.of("GHI CHU", "REMARK", "NOTE"));
    /** Message key tương ứng từng cột cố định - dùng thêm tiêu đề theo ngôn ngữ hiện tại (file mẫu xuất từ giao diện). */
    private static final Map<String, String> FIXED_HEADER_KEYS = Map.of(
            "empId", "common.empId",
            "localName", "common.empName",
            "changeDate", "hrm.uniform.changeDate",
            "reason", "common.reason",
            "remark", "common.remark");

    @Autowired
    private HrUniformMapper mapper;

    @Override
    public int getChangeIntervalMonths() {
        return CHANGE_INTERVAL_MONTHS;
    }

    // ==================== Danh mục đồng phục ====================

    @Override
    public List<HrUniformItemDto> getItemList(boolean activeOnly) {
        try {
            return mapper.selectItemList(activeOnly);
        } catch (Exception e) {
            log.error("Lỗi khi lấy danh mục đồng phục: {}", e.getMessage(), e);
            throw e;
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void saveItem(HrUniformItemDto dto) throws BusinessException {
        try {
            if (dto.getItemName() == null || dto.getItemName().isBlank()) {
                throw new BusinessException("HR_UNIFORM", I18nUtil.getMessage("hrm.uniform.msg.itemNameRequired"));
            }
            dto.setItemName(dto.getItemName().trim());
            if (mapper.countItemByName(dto.getItemName(), dto.getItemNo()) > 0) {
                throw new BusinessException("HR_UNIFORM", I18nUtil.getMessage("hrm.uniform.msg.itemNameDuplicate",
                        new Object[]{dto.getItemName()}));
            }
            dto.setHasSize("N".equals(dto.getHasSize()) ? "N" : "Y");
            dto.setHasQuantity("N".equals(dto.getHasQuantity()) ? "N" : "Y");
            if ("N".equals(dto.getHasSize()) && "N".equals(dto.getHasQuantity())) {
                throw new BusinessException("HR_UNIFORM", I18nUtil.getMessage("hrm.uniform.msg.itemNeedColumn"));
            }
            if (dto.getOrderNo() == null) dto.setOrderNo(0);
            if (dto.getActivity() == null || dto.getActivity() != 0) dto.setActivity(1);

            if (dto.getItemNo() == null) {
                dto.setItemNo(mapper.selectNextItemNo());
                mapper.insertItem(dto);
            } else {
                mapper.updateItem(dto);
            }
        } catch (BusinessException e) {
            throw e;
        } catch (Exception e) {
            log.error("Lỗi khi lưu danh mục đồng phục (itemNo={}, itemName={}): {}",
                    dto.getItemNo(), dto.getItemName(), e.getMessage(), e);
            throw e;
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void deleteItem(Long itemNo) {
        try {
            mapper.deleteItem(itemNo);
        } catch (Exception e) {
            log.error("Lỗi khi xóa danh mục đồng phục itemNo={}: {}", itemNo, e.getMessage(), e);
            throw e;
        }
    }

    // ==================== Danh sách đổi đồng phục ====================

    @Override
    public DataTablesResponse<HrUniformChangeDto> getChangePageList(HrUniformChangeSearchDto params) {
        try {
            if (params.getMonth() == null || params.getMonth().isBlank()) {
                params.setMonth(LocalDate.now().format(YM));
            }
            params.setIntervalMonths(CHANGE_INTERVAL_MONTHS);
            if (params.getLength() <= 0) params.setLength(25);

            int total = mapper.countChangeList(params);
            if (total == 0) {
                return new DataTablesResponse<>(params.getDraw(), 0, 0, Collections.emptyList());
            }
            List<HrUniformChangeDto> data = mapper.selectChangeListPage(params);
            attachDetails(data);
            attachPrevMonthQty(data, params.getMonth());
            return new DataTablesResponse<>(params.getDraw(), total, total, data);
        } catch (Exception e) {
            log.error("Lỗi khi tra cứu danh sách đổi đồng phục (month={}, keyword={}): {}",
                    params.getMonth(), params.getKeyword(), e.getMessage(), e);
            return new DataTablesResponse<>(params.getDraw(), e.getMessage());
        }
    }

    /** Lấy chi tiết từng loại đồng phục cho cả trang trong 1 câu SQL (tránh N+1). */
    private void attachDetails(List<HrUniformChangeDto> data) {
        if (data == null || data.isEmpty()) return;
        List<Long> changeNos = data.stream().map(HrUniformChangeDto::getChangeNo).collect(Collectors.toList());
        Map<Long, List<HrUniformChangeDetailDto>> byChange = mapper.selectChangeDetailList(changeNos).stream()
                .collect(Collectors.groupingBy(HrUniformChangeDetailDto::getChangeNo));
        data.forEach(c -> c.setDetails(byChange.getOrDefault(c.getChangeNo(), new ArrayList<>())));
    }

    /** Tổng số lượng đã đổi theo từng tháng trong 6 tháng trước tháng tra cứu của các nhân viên trên trang. */
    private void attachPrevMonthQty(List<HrUniformChangeDto> data, String month) {
        if (data == null || data.isEmpty()) return;
        List<String> personIds = data.stream().map(HrUniformChangeDto::getPersonId).distinct().collect(Collectors.toList());
        Map<String, Map<String, Integer>> byPerson = new HashMap<>();
        for (HrUniformMonthQtyDto q : mapper.selectPrevMonthQty(personIds, month, CHANGE_INTERVAL_MONTHS)) {
            byPerson.computeIfAbsent(q.getPersonId(), k -> new HashMap<>()).put(q.getChangeMonth(), q.getTotalQty());
        }
        data.forEach(c -> c.setPrevMonthQty(byPerson.getOrDefault(c.getPersonId(), new HashMap<>())));
    }

    @Override
    public List<HrUniformChangeDto> getPersonMonthChanges(String personId, String month) {
        try {
            List<HrUniformChangeDto> list = mapper.selectPersonMonthChanges(personId, month, CHANGE_INTERVAL_MONTHS);
            attachDetails(list);
            return list;
        } catch (Exception e) {
            log.error("Lỗi khi lấy chi tiết đổi đồng phục personId={}, month={}: {}", personId, month, e.getMessage(), e);
            throw e;
        }
    }

    @Override
    public HrUniformEmpInfoDto getEmpInfo(String empId) {
        try {
            return mapper.selectEmpInfo(empId, CHANGE_INTERVAL_MONTHS);
        } catch (Exception e) {
            log.error("Lỗi khi lấy thông tin nhân viên empId={}: {}", empId, e.getMessage(), e);
            throw e;
        }
    }

    // ==================== Thêm / sửa / xóa ====================

    @Override
    @Transactional(rollbackFor = Exception.class)
    public List<String> saveChange(HrUniformImportRowDto row) {
        try {
            Map<Long, HrUniformItemDto> items = itemMap(mapper.selectItemList(false));
            validateRow(row, items, new HashMap<>());
            if (!row.getErrors().isEmpty()) {
                return row.getErrors();
            }
            persistRow(row);
            return Collections.emptyList();
        } catch (Exception e) {
            log.error("Lỗi khi lưu đổi đồng phục (changeNo={}, empId={}, changeDate={}): {}",
                    row.getChangeNo(), row.getEmpId(), row.getChangeDate(), e.getMessage(), e);
            throw e;
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void deleteChange(Long changeNo) {
        try {
            mapper.deleteChange(changeNo);
        } catch (Exception e) {
            log.error("Lỗi khi xóa đổi đồng phục changeNo={}: {}", changeNo, e.getMessage(), e);
            throw e;
        }
    }

    private void persistRow(HrUniformImportRowDto row) {
        Long changeNo = row.getChangeNo();
        if (changeNo == null) {
            changeNo = mapper.selectNextChangeNo();
            mapper.insertChange(changeNo, row.getPersonId(), row.getChangeDate(), row.getReason(), row.getRemark());
        } else {
            mapper.updateChange(changeNo, row.getChangeDate(), row.getReason(), row.getRemark());
            mapper.deleteChangeDetail(changeNo);
        }
        for (HrUniformChangeDetailDto d : row.getDetails()) {
            d.setChangeNo(changeNo);
            mapper.insertChangeDetail(d);
        }
        row.setChangeNo(changeNo);
    }

    // ==================== Kiểm tra dữ liệu (dùng chung nhập tay + upload) ====================

    /**
     * Kiểm tra 1 dòng: nhân viên tồn tại, ngày đổi hợp lệ, có ít nhất 1 loại đồng phục và quy tắc 6 tháng/1 lần
     * (so với DB và với các dòng khác cùng nhân viên trong cùng file - batchDates).
     */
    private void validateRow(HrUniformImportRowDto row, Map<Long, HrUniformItemDto> items,
                             Map<String, List<LocalDate>> batchDates) {
        List<String> errors = row.getErrors();
        errors.clear();

        // Nhân viên
        if (row.getEmpId() == null || row.getEmpId().isBlank()) {
            errors.add(I18nUtil.getMessage("hrm.uniform.msg.empIdRequired"));
        } else {
            row.setEmpId(row.getEmpId().trim());
            HrUniformEmpInfoDto emp = mapper.selectEmpInfo(row.getEmpId(), CHANGE_INTERVAL_MONTHS);
            if (emp == null) {
                errors.add(I18nUtil.getMessage("hrm.uniform.msg.empNotFound", new Object[]{row.getEmpId()}));
            } else {
                row.setPersonId(emp.getPersonId());
                row.setEmpId(emp.getEmpId());
                row.setLocalName(emp.getLocalName());
                row.setDeptName(emp.getDeptName());
            }
        }

        // Ngày đổi
        LocalDate changeDate = parseDate(row.getChangeDate());
        if (changeDate == null) {
            errors.add(I18nUtil.getMessage(row.getChangeDate() == null || row.getChangeDate().isBlank()
                    ? "hrm.uniform.msg.changeDateRequired" : "hrm.uniform.msg.changeDateInvalid",
                    new Object[]{row.getChangeDate()}));
        } else {
            row.setChangeDate(changeDate.format(DMY));
        }

        // Chi tiết đồng phục: bỏ dòng trống, số lượng mặc định 1 khi chỉ nhập Size
        List<HrUniformChangeDetailDto> details = new ArrayList<>();
        for (HrUniformChangeDetailDto d : row.getDetails()) {
            String size = d.getItemSize() == null ? null : d.getItemSize().trim();
            d.setItemSize(size == null || size.isEmpty() ? null : size);
            if (d.getItemSize() == null && (d.getQuantity() == null || d.getQuantity() == 0)) continue;
            HrUniformItemDto item = items.get(d.getItemNo());
            if (item == null) {
                errors.add(I18nUtil.getMessage("hrm.uniform.msg.itemNotFound", new Object[]{d.getItemNo()}));
                continue;
            }
            if (d.getQuantity() == null) d.setQuantity(1);
            if (d.getQuantity() < 0) {
                errors.add(I18nUtil.getMessage("hrm.uniform.msg.quantityInvalid",
                        new Object[]{item.getItemName(), d.getQuantity()}));
            }
            details.add(d);
        }
        row.setDetails(details);
        if (details.isEmpty()) {
            errors.add(I18nUtil.getMessage("hrm.uniform.msg.noItem"));
        }

        // Quy tắc 6 tháng / 1 lần
        if (row.getPersonId() != null && changeDate != null) {
            String conflict = mapper.selectConflictChangeDate(row.getPersonId(), row.getChangeDate(),
                    CHANGE_INTERVAL_MONTHS, row.getChangeNo());
            if (conflict != null) {
                errors.add(I18nUtil.getMessage("hrm.uniform.msg.within6Months",
                        new Object[]{conflict, CHANGE_INTERVAL_MONTHS}));
            }
            List<LocalDate> sameEmp = batchDates.computeIfAbsent(row.getPersonId(), k -> new ArrayList<>());
            for (LocalDate other : sameEmp) {
                if (changeDate.isAfter(other.minusMonths(CHANGE_INTERVAL_MONTHS))
                        && changeDate.isBefore(other.plusMonths(CHANGE_INTERVAL_MONTHS))) {
                    errors.add(I18nUtil.getMessage("hrm.uniform.msg.duplicateInFile",
                            new Object[]{other.format(DMY), CHANGE_INTERVAL_MONTHS}));
                    break;
                }
            }
            if (errors.isEmpty()) {
                sameEmp.add(changeDate);
            }
        }
    }

    // ==================== Upload Excel ====================

    @Override
    public HrUniformImportResultDto previewImport(MultipartFile file) throws BusinessException {
        HrUniformImportResultDto result = new HrUniformImportResultDto();
        try (Workbook wb = WorkbookFactory.create(file.getInputStream())) {
            List<HrUniformItemDto> activeItems = mapper.selectItemList(true);
            Sheet sheet = wb.getSheetAt(0);
            DataFormatter formatter = new DataFormatter();

            int headerRowIdx = findHeaderRow(sheet, formatter);
            if (headerRowIdx < 0) {
                throw new BusinessException("HR_UNIFORM", I18nUtil.getMessage("hrm.uniform.msg.headerNotFound"));
            }
            Row headerRow = sheet.getRow(headerRowIdx);
            Row subHeaderRow = sheet.getRow(headerRowIdx + 1);

            Map<String, Integer> fixedCols = new HashMap<>();
            Map<Long, int[]> itemCols = new LinkedHashMap<>(); // itemNo -> [sizeCol, qtyCol] (-1 = không có)
            boolean hasSubHeader = mapHeaderColumns(sheet, headerRow, subHeaderRow, formatter, activeItems,
                    fixedCols, itemCols, result.getWarnings());

            if (!fixedCols.containsKey("empId") || !fixedCols.containsKey("changeDate")) {
                throw new BusinessException("HR_UNIFORM", I18nUtil.getMessage("hrm.uniform.msg.headerNotFound"));
            }

            Map<Long, HrUniformItemDto> items = itemMap(activeItems);
            Map<String, List<LocalDate>> batchDates = new HashMap<>();
            int firstDataRow = headerRowIdx + (hasSubHeader ? 2 : 1);
            for (int r = firstDataRow; r <= sheet.getLastRowNum(); r++) {
                Row row = sheet.getRow(r);
                if (row == null) continue;
                String empId = cellText(row, fixedCols.get("empId"), formatter);
                if (empId.isEmpty()) continue;
                if (result.getRows().size() >= MAX_IMPORT_ROWS) {
                    result.getWarnings().add(I18nUtil.getMessage("hrm.uniform.msg.tooManyRows",
                            new Object[]{MAX_IMPORT_ROWS}));
                    break;
                }

                HrUniformImportRowDto dto = new HrUniformImportRowDto();
                dto.setRowNum(r + 1);
                dto.setEmpId(empId);
                dto.setFileLocalName(cellText(row, fixedCols.get("localName"), formatter));
                dto.setChangeDate(cellDateText(row, fixedCols.get("changeDate"), formatter));
                dto.setReason(emptyToNull(cellText(row, fixedCols.get("reason"), formatter)));
                dto.setRemark(emptyToNull(cellText(row, fixedCols.get("remark"), formatter)));

                List<String> parseErrors = new ArrayList<>();
                for (Map.Entry<Long, int[]> e : itemCols.entrySet()) {
                    String size = e.getValue()[0] >= 0 ? cellText(row, e.getValue()[0], formatter) : "";
                    String qtyText = e.getValue()[1] >= 0 ? cellText(row, e.getValue()[1], formatter) : "";
                    if (size.isEmpty() && qtyText.isEmpty()) continue;
                    HrUniformChangeDetailDto d = new HrUniformChangeDetailDto();
                    d.setItemNo(e.getKey());
                    d.setItemSize(size);
                    if (!qtyText.isEmpty()) {
                        Integer qty = parseQuantity(qtyText);
                        if (qty == null) {
                            parseErrors.add(I18nUtil.getMessage("hrm.uniform.msg.quantityInvalid",
                                    new Object[]{items.get(e.getKey()).getItemName(), qtyText}));
                            continue;
                        }
                        d.setQuantity(qty);
                    }
                    dto.getDetails().add(d);
                }

                validateRow(dto, items, batchDates);
                dto.getErrors().addAll(0, parseErrors);
                result.getRows().add(dto);
            }
            countResult(result);
            return result;
        } catch (BusinessException e) {
            throw e;
        } catch (Exception e) {
            log.error("Lỗi khi đọc file Excel đổi đồng phục {}: {}", file.getOriginalFilename(), e.getMessage(), e);
            throw new BusinessException("HR_UNIFORM", I18nUtil.getMessage("hrm.uniform.msg.readFileFail"));
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public HrUniformImportResultDto saveImport(List<HrUniformImportRowDto> rows) {
        HrUniformImportResultDto result = new HrUniformImportResultDto();
        try {
            Map<Long, HrUniformItemDto> items = itemMap(mapper.selectItemList(false));
            Map<String, List<LocalDate>> batchDates = new HashMap<>();
            for (HrUniformImportRowDto row : rows) {
                row.setChangeNo(null); // upload luôn là thêm mới
                validateRow(row, items, batchDates);
                result.getRows().add(row);
            }
            countResult(result);
            if (result.getErrorCount() > 0) {
                return result;
            }
            for (HrUniformImportRowDto row : rows) {
                persistRow(row);
            }
            log.info("Upload đổi đồng phục: đã lưu {} dòng", rows.size());
            return result;
        } catch (Exception e) {
            log.error("Lỗi khi lưu dữ liệu upload đổi đồng phục ({} dòng): {}", rows.size(), e.getMessage(), e);
            throw e;
        }
    }

    private void countResult(HrUniformImportResultDto result) {
        int errorCount = (int) result.getRows().stream().filter(r -> !r.getErrors().isEmpty()).count();
        result.setErrorCount(errorCount);
        result.setValidCount(result.getRows().size() - errorCount);
    }

    /** Dòng tiêu đề = dòng đầu tiên trong HEADER_SCAN_ROWS dòng có ô tiêu đề Mã nhân viên. */
    private int findHeaderRow(Sheet sheet, DataFormatter formatter) {
        Set<String> empAliases = aliasesOf("empId");
        int last = Math.min(sheet.getLastRowNum(), HEADER_SCAN_ROWS);
        for (int r = sheet.getFirstRowNum(); r <= last; r++) {
            Row row = sheet.getRow(r);
            if (row == null) continue;
            for (int c = row.getFirstCellNum(); c >= 0 && c < row.getLastCellNum(); c++) {
                if (empAliases.contains(normalize(cellText(row, c, formatter)))) return r;
            }
        }
        return -1;
    }

    /**
     * Xác định vị trí cột: cột cố định theo tiêu đề dòng 1; mỗi nhóm đồng phục là 1 ô (thường merge 2 cột) ở dòng 1
     * khớp tên trong danh mục, cột con Size / Số lượng xác định theo dòng 2.
     *
     * @return true nếu file có dòng tiêu đề phụ (Size / Số lượng)
     */
    private boolean mapHeaderColumns(Sheet sheet, Row headerRow, Row subHeaderRow, DataFormatter formatter,
                                     List<HrUniformItemDto> activeItems, Map<String, Integer> fixedCols,
                                     Map<Long, int[]> itemCols, List<String> warnings) {
        Map<String, HrUniformItemDto> itemByName = new HashMap<>();
        activeItems.forEach(i -> itemByName.put(normalize(i.getItemName()), i));
        Map<String, Set<String>> fixedAliases = new HashMap<>();
        FIXED_HEADER_ALIASES.keySet().forEach(k -> fixedAliases.put(k, aliasesOf(k)));

        boolean hasSubHeader = false;
        int reasonCol = -1;
        for (int c = headerRow.getFirstCellNum(); c >= 0 && c < headerRow.getLastCellNum(); c++) {
            String text = normalize(cellText(headerRow, c, formatter));
            if (text.isEmpty()) continue;

            String fixedKey = fixedAliases.entrySet().stream()
                    .filter(e -> e.getValue().contains(text)).map(Map.Entry::getKey).findFirst().orElse(null);
            if (fixedKey != null) {
                fixedCols.putIfAbsent(fixedKey, c);
                if ("reason".equals(fixedKey)) reasonCol = c;
                continue;
            }

            HrUniformItemDto item = itemByName.get(text);
            int lastCol = mergedLastCol(sheet, headerRow.getRowNum(), c);
            if (item == null) {
                // Các cột sau "Lí do" là cột đồng phục - báo cho người dùng biết cột nào bị bỏ qua
                if (reasonCol >= 0 && c > reasonCol) {
                    warnings.add(I18nUtil.getMessage("hrm.uniform.msg.unknownItemColumn",
                            new Object[]{cellText(headerRow, c, formatter)}));
                }
                c = lastCol;
                continue;
            }

            int sizeCol = -1;
            int qtyCol = -1;
            for (int sc = c; sc <= lastCol; sc++) {
                String sub = subHeaderRow == null ? "" : normalize(cellText(subHeaderRow, sc, formatter));
                // "contains" để nhận cả tiêu đề xuất từ giao diện ngôn ngữ khác (vd. "수량 (Qty)")
                if (sub.contains("SIZE") || sub.equals("KICH CO") || sub.equals("CO")) {
                    sizeCol = sc;
                    hasSubHeader = true;
                } else if (sub.contains("SO LUONG") || sub.equals("SL") || sub.contains("QTY") || sub.contains("QUANTITY")) {
                    qtyCol = sc;
                    hasSubHeader = true;
                }
            }
            if (sizeCol < 0 && qtyCol < 0) {
                // Không có dòng tiêu đề phụ: 1 cột -> theo cấu hình item, 2 cột -> Size + Số lượng
                if (lastCol > c) {
                    sizeCol = c;
                    qtyCol = c + 1;
                } else if ("Y".equals(item.getHasSize())) {
                    sizeCol = c;
                } else {
                    qtyCol = c;
                }
            }
            itemCols.put(item.getItemNo(), new int[]{sizeCol, qtyCol});
            c = lastCol;
        }
        return hasSubHeader;
    }

    private int mergedLastCol(Sheet sheet, int rowIdx, int colIdx) {
        for (CellRangeAddress range : sheet.getMergedRegions()) {
            if (range.isInRange(rowIdx, colIdx)) return range.getLastColumn();
        }
        return colIdx;
    }

    private Set<String> aliasesOf(String fixedKey) {
        Set<String> aliases = new HashSet<>(FIXED_HEADER_ALIASES.get(fixedKey));
        String key = FIXED_HEADER_KEYS.get(fixedKey);
        if (key != null && I18nUtil.hasMessage(key)) {
            aliases.add(normalize(I18nUtil.getMessage(key)));
        }
        return aliases;
    }

    private Map<Long, HrUniformItemDto> itemMap(List<HrUniformItemDto> list) {
        Map<Long, HrUniformItemDto> map = new HashMap<>();
        list.forEach(i -> map.put(i.getItemNo(), i));
        return map;
    }

    // ==================== Tiện ích đọc ô Excel ====================

    private String cellText(Row row, Integer col, DataFormatter formatter) {
        if (row == null || col == null || col < 0) return "";
        Cell cell = row.getCell(col);
        if (cell == null) return "";
        String value = formatter.formatCellValue(cell);
        return value == null ? "" : value.trim();
    }

    /** Ô ngày dạng Date của Excel -> DD/MM/YYYY; còn lại giữ nguyên chuỗi để parseDate xử lý. */
    private String cellDateText(Row row, Integer col, DataFormatter formatter) {
        if (row == null || col == null) return "";
        Cell cell = row.getCell(col);
        if (cell != null && cell.getCellType() == CellType.NUMERIC && DateUtil.isCellDateFormatted(cell)) {
            return cell.getDateCellValue().toInstant().atZone(ZoneId.systemDefault()).toLocalDate().format(DMY);
        }
        return cellText(row, col, formatter);
    }

    private LocalDate parseDate(String text) {
        if (text == null || text.isBlank()) return null;
        String value = text.trim();
        try {
            return LocalDate.parse(value, DMY);
        } catch (DateTimeParseException ignore) {
            // thử các định dạng khác
        }
        for (DateTimeFormatter f : DATE_PARSERS) {
            try {
                return LocalDate.parse(value, f);
            } catch (DateTimeParseException ignore) {
                // thử định dạng tiếp theo
            }
        }
        return null;
    }

    /** Chấp nhận số nguyên (kể cả "1.0" do Excel format); không phải số -> null. */
    private Integer parseQuantity(String text) {
        try {
            double v = Double.parseDouble(text.replace(",", "."));
            if (v != Math.floor(v) || v < 0 || v > 999) return null;
            return (int) v;
        } catch (NumberFormatException e) {
            return null;
        }
    }

    private String emptyToNull(String s) {
        return s == null || s.isEmpty() ? null : s;
    }

    /** Bỏ dấu tiếng Việt, viết hoa, gộp khoảng trắng - dùng so khớp tiêu đề cột. */
    static String normalize(String text) {
        if (text == null) return "";
        String s = Normalizer.normalize(text, Normalizer.Form.NFD).replaceAll("\\p{M}", "");
        s = s.replace('đ', 'd').replace('Đ', 'D');
        return s.toUpperCase().replaceAll("\\s+", " ").trim();
    }
}
