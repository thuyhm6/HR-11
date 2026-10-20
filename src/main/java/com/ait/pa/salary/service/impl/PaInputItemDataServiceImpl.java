package com.ait.pa.salary.service.impl;

import com.ait.exception.BusinessException;
import com.ait.pa.salary.dto.PaInputItemDataDto;
import com.ait.pa.salary.dto.PaParamDataTempDto;
import com.ait.pa.salary.mapper.PaInputItemDataMapper;
import com.ait.pa.salary.service.PaInputItemDataService;
import com.ait.sy.sys.dto.DataTablesResponse;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.DateUtil;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.time.format.ResolverStyle;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Service
public class PaInputItemDataServiceImpl implements PaInputItemDataService {

    private static final Logger log = LoggerFactory.getLogger(PaInputItemDataServiceImpl.class);

    /** Hạng mục phân biệt theo nhân viên -> PA_PARAM_DATA; trường phân biệt khác -> PA_PARAM_DATA_OTHER. */
    private static final String DISTINCT_PERSON_ID = "PERSON_ID";

    @Autowired
    private PaInputItemDataMapper mapper;

    @Override
    public List<PaInputItemDataDto> getParamItemList(PaInputItemDataDto dto) {
        try {
            List<PaInputItemDataDto> list = mapper.selectParamItemList(dto);
            log.info("Lấy danh sách hạng mục tiêu chuẩn: count={}", list.size());
            return list;
        } catch (Exception e) {
            log.error("Lỗi khi lấy danh sách hạng mục tiêu chuẩn: {}", e.getMessage(), e);
            throw e;
        }
    }

    @Override
    public DataTablesResponse<PaInputItemDataDto> getPagedParamDataList(PaInputItemDataDto dto) {
        try {
            boolean other = isOtherParam(dto.getParamNo());
            long total = other ? mapper.countParamDataOtherList(dto) : mapper.countParamDataList(dto);
            List<PaInputItemDataDto> data = other
                    ? mapper.selectParamDataOtherListPage(dto)
                    : mapper.selectParamDataListPage(dto);
            log.info("Phân trang dữ liệu tiêu chuẩn: paramNo={}, other={}, total={}", dto.getParamNo(), other, total);
            return new DataTablesResponse<>(dto.getDraw(), total, total, data);
        } catch (Exception e) {
            log.error("Lỗi khi phân trang dữ liệu tiêu chuẩn paramNo={}: {}", dto.getParamNo(), e.getMessage(), e);
            throw e;
        }
    }

    @Override
    public PaInputItemDataDto getParamDataOne(Long paramDataNo, String paramNo) {
        try {
            PaInputItemDataDto dto = isOtherParam(paramNo)
                    ? mapper.selectParamDataOtherOne(paramDataNo)
                    : mapper.selectParamDataOne(paramDataNo);
            log.info("Lấy dữ liệu tiêu chuẩn paramDataNo={}, paramNo={}", paramDataNo, paramNo);
            return dto;
        } catch (Exception e) {
            log.error("Lỗi khi lấy dữ liệu tiêu chuẩn paramDataNo={}: {}", paramDataNo, e.getMessage(), e);
            throw e;
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void insertParamData(PaInputItemDataDto dto) throws BusinessException {
        try {
            if (isOtherParam(dto.getParamNo())) {
                if (dto.getField1Value() == null || dto.getField1Value().isBlank()) {
                    throw new BusinessException("PARAM_DATA_FIELD_REQUIRED", "Vui lòng chọn giá trị hạng mục phân biệt!");
                }
                if (dto.getField2Value() != null && dto.getField2Value().isBlank()) {
                    dto.setField2Value(null);
                }
                validateEffectiveDate(dto, true);
                mapper.insertParamDataOther(dto);
                log.info("Thêm mới dữ liệu tiêu chuẩn (OTHER) paramNo={}, field1={}, field2={}",
                        dto.getParamNo(), dto.getField1Value(), dto.getField2Value());
                return;
            }
            if (dto.getPersonId() == null || dto.getPersonId().isBlank()) {
                throw new BusinessException("PARAM_DATA_PERSON_REQUIRED", "Vui lòng nhập mã nhân viên!");
            }
            validateEffectiveDate(dto, false);
            mapper.insertParamData(dto);
            log.info("Thêm mới dữ liệu tiêu chuẩn paramNo={}, personId={}", dto.getParamNo(), dto.getPersonId());
        } catch (Exception e) {
            log.error("Lỗi khi thêm mới dữ liệu tiêu chuẩn paramNo={}: {}", dto.getParamNo(), e.getMessage(), e);
            throw e;
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void updateParamData(PaInputItemDataDto dto) throws BusinessException {
        try {
            boolean other = isOtherParam(dto.getParamNo());
            // PERSON_ID / FIELD1 / FIELD2 / PARAM_NO không đổi khi sửa -> lấy theo bản ghi gốc để kiểm tra chồng lấn
            PaInputItemDataDto origin = other
                    ? mapper.selectParamDataOtherOne(dto.getParamDataNo())
                    : mapper.selectParamDataOne(dto.getParamDataNo());
            if (origin == null) {
                throw new BusinessException("PARAM_DATA_NOT_FOUND", "Không tìm thấy dữ liệu cần cập nhật!");
            }
            dto.setParamNo(origin.getParamNo());
            if (other) {
                dto.setField1Value(origin.getField1Value());
                dto.setField2Value(origin.getField2Value());
                validateEffectiveDate(dto, true);
                mapper.updateParamDataOther(dto);
                log.info("Cập nhật dữ liệu tiêu chuẩn (OTHER) paramDataNo={}", dto.getParamDataNo());
                return;
            }
            dto.setPersonId(origin.getPersonId());
            validateEffectiveDate(dto, false);
            mapper.updateParamData(dto);
            log.info("Cập nhật dữ liệu tiêu chuẩn paramDataNo={}", dto.getParamDataNo());
        } catch (Exception e) {
            log.error("Lỗi khi cập nhật dữ liệu tiêu chuẩn paramDataNo={}: {}", dto.getParamDataNo(), e.getMessage(), e);
            throw e;
        }
    }

    @Override
    @Transactional
    public void deleteParamData(Long paramDataNo, String paramNo) {
        try {
            if (isOtherParam(paramNo)) {
                mapper.deleteParamDataOther(paramDataNo);
            } else {
                mapper.deleteParamData(paramDataNo);
            }
            log.info("Xóa dữ liệu tiêu chuẩn paramDataNo={}, paramNo={}", paramDataNo, paramNo);
        } catch (Exception e) {
            log.error("Lỗi khi xóa dữ liệu tiêu chuẩn paramDataNo={}: {}", paramDataNo, e.getMessage(), e);
            throw e;
        }
    }

    @Override
    @Transactional
    public List<String> importParamDataExcel(String paramNo, MultipartFile file) {
        List<String> errors = new ArrayList<>();
        try {
            Map<String, Object> delParams = new HashMap<>();
            mapper.deleteParamDataTemp(delParams);
            log.info("Đã xóa dữ liệu temp cũ trước khi import, paramNo={}", paramNo);

            try (Workbook wb = WorkbookFactory.create(file.getInputStream())) {
                Sheet sheet = wb.getSheet("Template");
                if (sheet == null) {
                    sheet = wb.getSheetAt(0);
                }
                DataFormatter formatter = new DataFormatter();

                for (int i = 1; i <= sheet.getLastRowNum(); i++) {
                    Row row = sheet.getRow(i);
                    if (row == null) continue;

                    String empId       = getCellText(row.getCell(0), formatter);
                    String localName   = getCellText(row.getCell(1), formatter);
                    // Ngày bắt đầu/kết thúc: nhập theo ngày (dd/MM/yyyy) hoặc theo tháng (MMYYYY) như cũ
                    String[] start     = getEffectiveCell(row.getCell(2), formatter);
                    String[] end       = getEffectiveCell(row.getCell(3), formatter);
                    String returnValue = getCellText(row.getCell(4), formatter);
                    String remark      = getCellText(row.getCell(5), formatter);
                    boolean startBlank = start[0] == null && start[1] == null;

                    if (empId.isBlank() && startBlank && returnValue.isBlank()) continue;

                    if (empId.isBlank()) {
                        errors.add("Dòng " + (i + 1) + ": Thiếu Mã nhân viên");
                        continue;
                    }
                    if (startBlank) {
                        errors.add("Dòng " + (i + 1) + ": Thiếu Ngày bắt đầu");
                        continue;
                    }
                    if (returnValue.isBlank()) {
                        errors.add("Dòng " + (i + 1) + ": Thiếu Giá trị");
                        continue;
                    }

                    Map<String, Object> rowData = new HashMap<>();
                    rowData.put("paramNo",      paramNo);
                    rowData.put("empId",        empId);
                    rowData.put("localName",     localName.isBlank() ? null : localName);
                    rowData.put("startDate",    start[0]);
                    rowData.put("startMonth",   start[1]);
                    rowData.put("endDate",      end[0]);
                    rowData.put("endMonth",     end[1]);
                    rowData.put("returnValue",  returnValue);
                    rowData.put("remark",       remark.isBlank() ? null : remark);
                    rowData.put("lineId",       (long) i);
                    rowData.put("uploadErrorMsg", null);
                    rowData.put("resultFlag",   "N");

                    try {
                        mapper.insertParamDataTemp(rowData);
                    } catch (Exception ex) {
                        log.error("Lỗi khi insert dòng {} vào PA_PARAM_DATA_TEMP, empId={}: {}", i + 1, empId, ex.getMessage(), ex);
                        errors.add("Dòng " + (i + 1) + ": Lỗi lưu dữ liệu - " + ex.getMessage());
                    }
                }
            }
            log.info("Import Excel PA_PARAM_DATA_TEMP hoàn tất, paramNo={}, errors={}", paramNo, errors.size());
        } catch (IOException e) {
            log.error("Lỗi khi đọc file Excel import PA_PARAM_DATA_TEMP: {}", e.getMessage(), e);
            errors.add("Lỗi đọc file Excel: " + e.getMessage());
        }
        return errors;
    }

    @Override
    public List<PaParamDataTempDto> getParamDataTempList(PaParamDataTempDto dto) {
        try {
            List<PaParamDataTempDto> list = mapper.selectParamDataTempList(dto);
            log.info("Lấy danh sách PA_PARAM_DATA_TEMP, size={}", list.size());
            return list;
        } catch (Exception e) {
            log.error("Lỗi khi lấy danh sách PA_PARAM_DATA_TEMP: {}", e.getMessage(), e);
            throw e;
        }
    }

    @Override
    @Transactional
    public String saveParamDataTemp(String paramNo) {
        try {
            // V_DISTINCT_FIELD của package là DISTINCT_FIELD của hạng mục (PERSON_ID / POST_GRADE_NO), không phải PARAM_NO
            PaInputItemDataDto item = mapper.selectParamItemOne(paramNo);
            String distinctField = item != null && item.getDistinctField() != null ? item.getDistinctField() : DISTINCT_PERSON_ID;
            Map<String, Object> params = new HashMap<>();
            params.put("distinctField", distinctField);
            params.put("message", "");
            mapper.callImportParamDataTemp(params);
            String message = params.get("message") != null ? params.get("message").toString().trim() : "";
            log.info("Gọi PKG_WAGEBASE_EXCEL_TEMP.PR_IMPORT_PAPARAM_DATA, paramNo={}, distinctField={}, message={}",
                    paramNo, distinctField, message);
            // Package trả 'OK' khi thành công, 'NG' khi dữ liệu temp có dòng lỗi, còn lại là lỗi hệ thống
            if ("OK".equals(message)) return "";
            if ("NG".equals(message)) return "Dữ liệu import có dòng lỗi, vui lòng xem cột thông báo lỗi và sửa lại!";
            return message;
        } catch (Exception e) {
            log.error("Lỗi khi gọi stored procedure import PA_PARAM_DATA_TEMP, paramNo={}: {}", paramNo, e.getMessage(), e);
            throw e;
        }
    }

    @Override
    @Transactional
    public Map<String, List<Map<String, String>>> getDistinctValues(String paramNo) {
        Map<String, List<Map<String, String>>> result = new LinkedHashMap<>();
        result.put("field1", new ArrayList<>());
        result.put("field2", new ArrayList<>());
        try {
            PaInputItemDataDto item = mapper.selectParamItemOne(paramNo);
            if (item == null || item.getDistinctField() == null || DISTINCT_PERSON_ID.equals(item.getDistinctField())) {
                return result;
            }
            // Sinh lại PA_PARAM_DATA_LIST cho hạng mục (đúng bản gốc Hanwha_HTSV addPaInputItemDataView)
            mapper.callCreateParamDataList(paramNo);
            result.put("field1", toOptions(mapper.selectDistinctValueList(item.getDistinctField())));
            if (item.getDistinctField2nd() != null && !item.getDistinctField2nd().isBlank()) {
                result.put("field2", toOptions(mapper.selectDistinctValueList(item.getDistinctField2nd())));
            }
            log.info("Lấy giá trị hạng mục phân biệt paramNo={}, field1={}, field2={}",
                    paramNo, result.get("field1").size(), result.get("field2").size());
            return result;
        } catch (Exception e) {
            log.error("Lỗi khi lấy giá trị hạng mục phân biệt paramNo={}: {}", paramNo, e.getMessage(), e);
            throw e;
        }
    }

    private List<Map<String, String>> toOptions(List<PaInputItemDataDto> list) {
        List<Map<String, String>> options = new ArrayList<>();
        for (PaInputItemDataDto d : list) {
            Map<String, String> o = new HashMap<>();
            o.put("value", d.getField1Value());
            o.put("label", d.getField1Name() != null ? d.getField1Name() : d.getField1Value());
            options.add(o);
        }
        return options;
    }

    /** Hạng mục có DISTINCT_FIELD khác PERSON_ID -> dữ liệu nằm ở PA_PARAM_DATA_OTHER (đúng bản gốc). */
    private boolean isOtherParam(String paramNo) {
        if (paramNo == null || paramNo.isBlank()) return false;
        PaInputItemDataDto item = mapper.selectParamItemOne(paramNo);
        return item != null && item.getDistinctField() != null
                && !DISTINCT_PERSON_ID.equals(item.getDistinctField());
    }

    /**
     * Kiểm tra ngày hiệu lực: Ngày bắt đầu <= Ngày kết thúc, và với hạng mục chia theo ngày
     * (PRORATE_TYPE = 2, 3) không được chồng lấn với bản ghi khác của cùng nhân viên / cùng giá trị phân biệt
     * (nếu chồng lấn, giá trị bị cộng 2 lần khi tính lương - PA_CHECK_PARAM_OVERLAP_F cũng chặn lại).
     * Ngày dạng YYYY-MM-DD nên so sánh chuỗi là đủ.
     */
    private void validateEffectiveDate(PaInputItemDataDto dto, boolean other) throws BusinessException {
        String start = dto.getStartDate();
        String end = dto.getEndDate();
        if (end != null && end.isBlank()) {
            dto.setEndDate(null);
            end = null;
        }
        if (end != null && start.compareTo(end) > 0) {
            throw new BusinessException("PARAM_DATA_DATE_RANGE", "Ngày bắt đầu không được lớn hơn ngày kết thúc!");
        }
        long overlap = other ? mapper.countOverlapParamDataOther(dto) : mapper.countOverlapParamData(dto);
        if (overlap > 0) {
            log.warn("Dữ liệu tiêu chuẩn bị chồng lấn ngày hiệu lực: paramNo={}, personId={}, field1={}, field2={}, {} ~ {}",
                    dto.getParamNo(), dto.getPersonId(), dto.getField1Value(), dto.getField2Value(), start, end);
            throw new BusinessException("PARAM_DATA_OVERLAP",
                    "Khoảng ngày hiệu lực bị chồng lấn với dữ liệu đã có (cùng " + (other ? "giá trị phân biệt" : "nhân viên") + "). "
                  + "Vui lòng nhập Ngày kết thúc cho bản ghi cũ trước khi thêm bản ghi mới!");
        }
    }

    private static final DateTimeFormatter DMY = DateTimeFormatter.ofPattern("d/M/uuuu").withResolverStyle(ResolverStyle.STRICT);

    /**
     * Đọc ô Ngày bắt đầu/kết thúc của file import: trả về {ngày 'yyyy-MM-dd', tháng 'MMYYYY'} (chỉ 1 trong 2 có giá trị).
     * - Ô kiểu ngày Excel, chuỗi dd/MM/yyyy hoặc yyyy-MM-dd -> theo ngày (START_DATE/END_DATE).
     * - Chuỗi MMYYYY / MYYYY / MM/YYYY -> theo tháng (START_MONTH/END_MONTH), package quy đổi sang ngày đầu/cuối kỳ lương.
     * - Định dạng khác -> giữ nguyên ở cột tháng để PKG_WAGEBASE_EXCEL_TEMP báo lỗi định dạng.
     */
    private String[] getEffectiveCell(Cell cell, DataFormatter formatter) {
        if (cell == null) return new String[] { null, null };
        if (cell.getCellType() == CellType.NUMERIC && DateUtil.isCellDateFormatted(cell)) {
            return new String[] { new SimpleDateFormat("yyyy-MM-dd").format(cell.getDateCellValue()), null };
        }
        String value = formatter.formatCellValue(cell);
        value = value == null ? "" : value.trim();
        if (value.isEmpty()) return new String[] { null, null };
        try {
            if (value.matches("\\d{1,2}/\\d{1,2}/\\d{4}")) {
                return new String[] { LocalDate.parse(value, DMY).toString(), null };
            }
            if (value.matches("\\d{4}-\\d{2}-\\d{2}")) {
                return new String[] { LocalDate.parse(value).toString(), null };
            }
        } catch (DateTimeParseException e) {
            return new String[] { null, value };
        }
        if (value.matches("\\d{1,2}/\\d{4}")) {
            String[] parts = value.split("/");
            return new String[] { null, (parts[0].length() == 1 ? "0" + parts[0] : parts[0]) + parts[1] };
        }
        if (value.matches("\\d{5}")) return new String[] { null, "0" + value };
        return new String[] { null, value };
    }

    private String getCellText(Cell cell, DataFormatter formatter) {
        if (cell == null) return "";
        if (cell.getCellType() == CellType.NUMERIC && DateUtil.isCellDateFormatted(cell)) {
            return new SimpleDateFormat("MM").format(cell.getDateCellValue())
                 + new SimpleDateFormat("yyyy").format(cell.getDateCellValue());
        }
        String value = formatter.formatCellValue(cell);
        return value == null ? "" : value.trim();
    }
}
