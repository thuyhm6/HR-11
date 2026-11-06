package com.ait.ess.tempEmp.service.impl;

import com.ait.ess.tempEmp.dto.MonthDetailDateDto;
import com.ait.ess.tempEmp.dto.MonthDetailListDto;
import com.ait.ess.tempEmp.dto.MonthDetailViewDto;
import com.ait.ess.tempEmp.mapper.MonthDetailListMapper;
import com.ait.ess.tempEmp.service.MonthDetailListService;
import com.ait.sy.sys.dto.DataTablesResponse;
import com.ait.util.ExcelJxForEachUtil;
import com.ait.util.I18nUtil;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.time.LocalDate;
import java.time.YearMonth;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class MonthDetailListServiceImpl implements MonthDetailListService {

    private static final Logger log = LoggerFactory.getLogger(MonthDetailListServiceImpl.class);

    /** Kỳ dữ liệu (periodType): 25 -> cuối tháng / 01 -> cuối tháng. Rỗng = 25 tháng trước -> 24 tháng này. */
    private static final String PERIOD_25_END = "25_31";
    private static final String PERIOD_01_END = "01_31";
    private static final int MAX_PERIOD_DAYS = 31;
    private static final DateTimeFormatter DAY_FMT = DateTimeFormatter.ofPattern("yyyy/MM/dd");
    private static final DateTimeFormatter YM_FMT = DateTimeFormatter.ofPattern("yyyyMM");
    private static final DateTimeFormatter SHOW_FMT = DateTimeFormatter.ofPattern("dd/MM/yyyy");

    @Autowired
    private MonthDetailListMapper mapper;

    @Override
    public DataTablesResponse<MonthDetailListDto> getPageList(MonthDetailListDto params) {
        try {
            int total = mapper.countList(params);
            List<MonthDetailListDto> list = mapper.selectListPage(params);
            return new DataTablesResponse<>(params.getDraw(), total, total, list);
        } catch (Exception e) {
            log.error("Lỗi khi lấy danh sách chi tiết chấm công tháng: {}", e.getMessage(), e);
            throw e;
        }
    }

    /**
     * Dữ liệu màn hình viewMonthDetailList (bản gốc TempEmpCtroller.viewMonthDetailList): lịch ngày trong kỳ công
     * (viewFixedDateList) + danh sách nhân viên (getMonthDetailRealTimeList = selectSalaryReport, dùng chung với
     * báo cáo 305 để số liệu trên màn hình và file Excel luôn khớp nhau).
     */
    @Override
    @Transactional(readOnly = true)
    public MonthDetailViewDto getDetailView(MonthDetailListDto params) {
        log.info("Tra cứu chi tiết chấm công tháng: month={}, year={}, periodType={}, deptNos={}",
                params.getMonth(), params.getYear(), params.getPeriodType(), params.getDeptNos());
        try {
            applyPeriod(params);
            List<MonthDetailDateDto> dates = mapper.selectFixedDateList(params);
            List<Map<String, Object>> rows = mapper.selectSalaryReport(params);
            log.info("Tra cứu chi tiết chấm công tháng: {} ngày, {} nhân viên", dates.size(), rows.size());
            return new MonthDetailViewDto(dates, rows);
        } catch (Exception e) {
            log.error("Lỗi khi tra cứu chi tiết chấm công tháng: {}", e.getMessage(), e);
            throw e;
        }
    }

    @Override
    public void exportReport(MonthDetailListDto params, HttpServletResponse response) throws IOException {
        log.info("Yêu cầu xuất báo cáo chấm công tháng: reportType={}, month={}, year={}, reportYear={}",
                params.getReportType(), params.getMonth(), params.getYear(), params.getReportYear());
        if ("305".equals(params.getReportType())) {
            exportSalaryReport(params, response);
            return;
        }
        if ("3294".equals(params.getReportType())) {
            exportBonus13thReport(params, response);
            return;
        }
        if ("3293".equals(params.getReportType())) {
            exportReferralBonusReport(params, response);
            return;
        }
        if ("3292".equals(params.getReportType())) {
            exportWorkDurationReport(params, response);
            return;
        }
        if ("3291".equals(params.getReportType())) {
            exportWorkOtPrintReport(params, response);
            return;
        }
        if ("3296".equals(params.getReportType())) {
            exportDiligenceReport(params, response);
            return;
        }
        if ("306".equals(params.getReportType())) {
            exportPrintTotalOtReport(params, response);
            return;
        }
        if ("3277".equals(params.getReportType())) {
            exportMonthAttPrintReport(params, response);
            return;
        }
        if ("3286".equals(params.getReportType())) {
            exportMonthOtOverReport(params, response);
            return;
        }
        if ("3289".equals(params.getReportType())) {
            exportMonthAttTotalDayReport(params, response);
            return;
        }
        // Câu lệnh truy vấn và file mẫu cho các loại báo cáo còn lại sẽ được bổ sung thủ công sau
        exportPendingReport(params, response);
    }

    /**
     * Xuất báo cáo "Công tính lương": điền dữ liệu vào file mẫu templates/305.xlsx.
     * File mẫu dùng cú pháp {@code <jx:forEach items="${viewMonthDetailList}" var="reports" varStatus="i"> ... </jx:forEach>}
     * bao quanh 1 dòng mẫu chứa các biểu thức {@code ${reports.FIELD}} (có thể kèm phép toán) - dòng này
     * được nhân bản cho từng nhân viên trong kết quả truy vấn.
     */
    private void exportSalaryReport(MonthDetailListDto params, HttpServletResponse response) throws IOException {
        try {
            applyPeriod(params);
            List<Map<String, Object>> rows = mapper.selectSalaryReport(params);
            Map<String, String> headerValues = putPeriodExcelData(rows, params);

            ClassPathResource resource = new ClassPathResource("templates/305.xlsx");
            try (InputStream is = resource.getInputStream();
                 Workbook workbook = WorkbookFactory.create(is)) {
                Sheet sheet = workbook.getSheetAt(0);
                replaceHeaderTokens(sheet, headerValues);
                ExcelJxForEachUtil.fillForEachBlock(sheet, rows);
                fillSalaryHeaderPlaceholders(sheet, params);

                String suffix = params.getPeriodType().isEmpty() ? "" : "_" + params.getPeriodType();
                ExcelJxForEachUtil.writeWorkbook(workbook, response,
                        "305_" + params.getMonth() + params.getYear() + suffix + ".xlsx");
            }
        } catch (Exception e) {
            log.error("Lỗi khi xuất báo cáo công tính lương: {}", e.getMessage(), e);
            throw e;
        }
    }

    /**
     * Xuất báo cáo "Công tính thưởng tháng 13": điền dữ liệu vào file mẫu templates/3294.xls.
     * Cùng cơ chế {@code <jx:forEach>} như báo cáo công tính lương, nhưng dữ liệu tổng hợp theo năm
     * (12 cột/tháng cho mỗi chỉ số) và có thêm các ô tổng dạng {@code $[SUM(J8:U8)]}.
     * Báo cáo này tính theo năm nên lấy năm từ dropdown "Năm" (reportYear), không dùng năm trong ô "Tháng".
     */
    private void exportBonus13thReport(MonthDetailListDto params, HttpServletResponse response) throws IOException {
        try {
            if (params.getReportYear() != null && !params.getReportYear().isBlank()) {
                params.setYear(params.getReportYear());
            }
            List<Map<String, Object>> rows = mapper.selectBonus13thReport(params);

            ClassPathResource resource = new ClassPathResource("templates/3294.xls");
            try (InputStream is = resource.getInputStream();
                 Workbook workbook = WorkbookFactory.create(is)) {
                Sheet sheet = workbook.getSheetAt(0);
                ExcelJxForEachUtil.fillForEachBlock(sheet, rows);
                fillBonus13thHeaderPlaceholders(sheet, params);

                ExcelJxForEachUtil.writeWorkbook(workbook, response, "3294_" + params.getYear() + ".xls");
            }
        } catch (Exception e) {
            log.error("Lỗi khi xuất báo cáo công tính thưởng tháng 13: {}", e.getMessage(), e);
            throw e;
        }
    }

    /**
     * Xuất báo cáo "Công tính thưởng giới thiệu 01.11.2025": điền dữ liệu vào file mẫu templates/3293.xlsx (2 sheet).
     * Sheet 0 ("01,11,2025" - nhân viên mới) dùng ngày cố định, không phụ thuộc Tháng/Năm trên giao diện.
     * Sheet 1 ("CHUYÊN CẦN") tham số hoá theo Tháng (giá trị MMYYYY từ ô Tháng, giống báo cáo Công tính lương).
     */
    private void exportReferralBonusReport(MonthDetailListDto params, HttpServletResponse response) throws IOException {
        try {
            List<Map<String, Object>> newEmpRows = mapper.selectReferralBonusNewEmpReport(params);
            List<Map<String, Object>> diligenceRows = mapper.selectReferralBonusDiligenceReport(params);

            ClassPathResource resource = new ClassPathResource("templates/3293.xlsx");
            try (InputStream is = resource.getInputStream();
                 Workbook workbook = WorkbookFactory.create(is)) {
                ExcelJxForEachUtil.fillForEachBlock(workbook.getSheetAt(0), newEmpRows);
                ExcelJxForEachUtil.fillForEachBlock(workbook.getSheetAt(1), diligenceRows);

                ExcelJxForEachUtil.writeWorkbook(workbook, response, "3293_" + params.getMonth() + params.getYear() + ".xlsx",
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
            }
        } catch (Exception e) {
            log.error("Lỗi khi xuất báo cáo công tính thưởng giới thiệu: {}", e.getMessage(), e);
            throw e;
        }
    }

    /**
     * Xuất báo cáo "Công tính chuyên cần 01.03.2026": điền dữ liệu vào file mẫu templates/3296.xlsx (2 sheet).
     * Sheet 0 ("CHUYÊN CẦN") tham số hoá theo Tháng (ô Tháng trên giao diện, giống báo cáo Công tính lương).
     * Sheet 1 ("01.03.2026") dùng ngày cố định theo DATE_STARTED của nhân viên mới, không phụ thuộc Tháng/Năm.
     */
    private void exportDiligenceReport(MonthDetailListDto params, HttpServletResponse response) throws IOException {
        try {
            List<Map<String, Object>> continuingRows = mapper.selectDiligenceContinuingReport(params);
            List<Map<String, Object>> newEmpRows = mapper.selectDiligenceNewEmpReport(params);

            ClassPathResource resource = new ClassPathResource("templates/3296.xlsx");
            try (InputStream is = resource.getInputStream();
                 Workbook workbook = WorkbookFactory.create(is)) {
                ExcelJxForEachUtil.fillForEachBlock(workbook.getSheetAt(0), continuingRows);
                ExcelJxForEachUtil.fillForEachBlock(workbook.getSheetAt(1), newEmpRows);

                ExcelJxForEachUtil.writeWorkbook(workbook, response, "3296_" + params.getMonth() + params.getYear() + ".xlsx",
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
            }
        } catch (Exception e) {
            log.error("Lỗi khi xuất báo cáo công tính chuyên cần: {}", e.getMessage(), e);
            throw e;
        }
    }

    /**
     * Xuất báo cáo "Công thời lượng đi làm trong tháng": điền dữ liệu vào file mẫu templates/3292.xls.
     * Cùng cơ chế {@code <jx:forEach>} như báo cáo công tính lương, tham số hoá theo Tháng (ô Tháng trên giao diện).
     */
    private void exportWorkDurationReport(MonthDetailListDto params, HttpServletResponse response) throws IOException {
        try {
            List<Map<String, Object>> rows = mapper.selectWorkDurationReport(params);

            ClassPathResource resource = new ClassPathResource("templates/3292.xls");
            try (InputStream is = resource.getInputStream();
                 Workbook workbook = WorkbookFactory.create(is)) {
                Sheet sheet = workbook.getSheetAt(0);
                ExcelJxForEachUtil.fillForEachBlock(sheet, rows);
                fillWorkDurationHeaderPlaceholders(sheet, params);

                ExcelJxForEachUtil.writeWorkbook(workbook, response, "3292_" + params.getMonth() + params.getYear() + ".xls");
            }
        } catch (Exception e) {
            log.error("Lỗi khi xuất báo cáo công thời lượng đi làm trong tháng: {}", e.getMessage(), e);
            throw e;
        }
    }

    /**
     * Xuất báo cáo "Công + Tăng ca tháng (Print)": điền dữ liệu vào file mẫu templates/3291.xls.
     * Mỗi nhân viên ứng với 3 dòng dữ liệu (TYPE = 'Công'/'Tăng ca ngày'/'Tăng ca đêm'), file mẫu có 3 khối
     * {@code <jx:if test="${reports.TYPE == '...'}">} lồng trong {@code <jx:forEach>} - mỗi dòng dữ liệu chỉ
     * dùng đúng 1 khối tương ứng với TYPE của nó (xem {@link ExcelJxForEachUtil#fillForEachWithIfBlocks}).
     */
    private void exportWorkOtPrintReport(MonthDetailListDto params, HttpServletResponse response) throws IOException {
        try {
            List<Map<String, Object>> rows = mapper.selectWorkOtPrintReport(params);

            ClassPathResource resource = new ClassPathResource("templates/3291.xls");
            try (InputStream is = resource.getInputStream();
                 Workbook workbook = WorkbookFactory.create(is)) {
                Sheet sheet = workbook.getSheetAt(0);
                ExcelJxForEachUtil.fillForEachWithIfBlocks(sheet, rows);
                fillWorkOtPrintHeaderPlaceholders(sheet, params);

                ExcelJxForEachUtil.writeWorkbook(workbook, response, "3291_" + params.getMonth() + params.getYear() + ".xls");
            }
        } catch (Exception e) {
            log.error("Lỗi khi xuất báo cáo công + tăng ca tháng (print): {}", e.getMessage(), e);
            throw e;
        }
    }

    /**
     * Xuất báo cáo nhanh "(Print)Total OT": điền dữ liệu vào file mẫu templates/306.xls.
     * Cùng cấu trúc 3 khối {@code <jx:if>} như báo cáo Công + Tăng ca tháng (3291), có thêm các cột
     * ngày công/đi muộn về sớm chi tiết hơn (WORK_SCHEDULE_DAYS, LATE_PRO_ARRIVE_HOURS...).
     */
    private void exportPrintTotalOtReport(MonthDetailListDto params, HttpServletResponse response) throws IOException {
        try {
            List<Map<String, Object>> rows = mapper.selectPrintTotalOtReport(params);

            ClassPathResource resource = new ClassPathResource("templates/306.xls");
            try (InputStream is = resource.getInputStream();
                 Workbook workbook = WorkbookFactory.create(is)) {
                Sheet sheet = workbook.getSheetAt(0);
                ExcelJxForEachUtil.fillForEachWithIfBlocks(sheet, rows);
                fillWorkOtPrintHeaderPlaceholders(sheet, params);

                ExcelJxForEachUtil.writeWorkbook(workbook, response, "306_" + params.getMonth() + params.getYear() + ".xls");
            }
        } catch (Exception e) {
            log.error("Lỗi khi xuất báo cáo (Print)Total OT: {}", e.getMessage(), e);
            throw e;
        }
    }

    /**
     * Xuất báo cáo nhanh "Month attendance (Print)": điền dữ liệu vào file mẫu templates/3277.xls.
     * Cùng cấu trúc 3 khối {@code <jx:if>} như 306/3291, nhánh "Công" có thêm nhiều cột chi tiết loại
     * nghỉ phép (SICK_LEAVE_DAYS, ANNUAL_LEAVE_DAYS, COVID_LEAVE_DAYS...).
     */
    private void exportMonthAttPrintReport(MonthDetailListDto params, HttpServletResponse response) throws IOException {
        try {
            List<Map<String, Object>> rows = mapper.selectMonthAttPrintReport(params);

            ClassPathResource resource = new ClassPathResource("templates/3277.xls");
            try (InputStream is = resource.getInputStream();
                 Workbook workbook = WorkbookFactory.create(is)) {
                Sheet sheet = workbook.getSheetAt(0);
                ExcelJxForEachUtil.fillForEachWithIfBlocks(sheet, rows);
                fillWorkOtPrintHeaderPlaceholders(sheet, params);

                ExcelJxForEachUtil.writeWorkbook(workbook, response, "3277_" + params.getMonth() + params.getYear() + ".xls");
            }
        } catch (Exception e) {
            log.error("Lỗi khi xuất báo cáo Month attendance (Print): {}", e.getMessage(), e);
            throw e;
        }
    }

    /**
     * Xuất báo cáo nhanh "Month OT Over": điền dữ liệu vào file mẫu templates/3286.xls.
     * Không có {@code <jx:if>} (1 dòng mẫu/nhân viên), dùng {@link ExcelJxForEachUtil#fillForEachBlock} như báo cáo lương.
     */
    private void exportMonthOtOverReport(MonthDetailListDto params, HttpServletResponse response) throws IOException {
        try {
            List<Map<String, Object>> rows = mapper.selectMonthOtOverReport(params);

            ClassPathResource resource = new ClassPathResource("templates/3286.xls");
            try (InputStream is = resource.getInputStream();
                 Workbook workbook = WorkbookFactory.create(is)) {
                Sheet sheet = workbook.getSheetAt(0);
                ExcelJxForEachUtil.fillForEachBlock(sheet, rows);
                fillMonthOtOverHeaderPlaceholders(sheet, params);

                ExcelJxForEachUtil.writeWorkbook(workbook, response, "3286_" + params.getMonth() + params.getYear() + ".xls");
            }
        } catch (Exception e) {
            log.error("Lỗi khi xuất báo cáo Month OT Over: {}", e.getMessage(), e);
            throw e;
        }
    }

    /**
     * Xuất báo cáo nhanh "Month Att Total Day": điền dữ liệu vào file mẫu templates/3289.xls.
     * Không có {@code <jx:if>} (1 dòng mẫu/nhân viên), dùng {@link ExcelJxForEachUtil#fillForEachBlock}.
     */
    private void exportMonthAttTotalDayReport(MonthDetailListDto params, HttpServletResponse response) throws IOException {
        try {
            List<Map<String, Object>> rows = mapper.selectMonthAttTotalDayReport(params);

            ClassPathResource resource = new ClassPathResource("templates/3289.xls");
            try (InputStream is = resource.getInputStream();
                 Workbook workbook = WorkbookFactory.create(is)) {
                Sheet sheet = workbook.getSheetAt(0);
                ExcelJxForEachUtil.fillForEachBlock(sheet, rows);
                fillMonthAttTotalDayHeaderPlaceholders(sheet, params);

                ExcelJxForEachUtil.writeWorkbook(workbook, response, "3289_" + params.getMonth() + params.getYear() + ".xls");
            }
        } catch (Exception e) {
            log.error("Lỗi khi xuất báo cáo Month Att Total Day: {}", e.getMessage(), e);
            throw e;
        }
    }

    /**
     * Điền các ô placeholder ở phần tiêu đề (không lặp theo dòng). Đối chiếu với báo cáo mẫu đã xuất
     * thực tế (314_out.xls) cho thấy tên biến trong file mẫu bị đặt ngược: {@code ${year}} thực chất
     * nhận giá trị tháng, còn {@code ${month}}/{@code ${month-1}} nhận giá trị năm/năm-1.
     */
    private void fillSalaryHeaderPlaceholders(Sheet sheet, MonthDetailListDto params) {
        String month = params.getMonth();
        String year = params.getYear();
        // String prevYear = year;
        // try {
        //     prevYear = String.valueOf(Integer.parseInt(year) - 1);
        // } catch (Exception ignored) {
        //     // Giữ nguyên year nếu không parse được
        // }
        // String curYearDate = "20/01/" + year;
        // String prevYearDate = "21/12/" + prevYear;

        setCellIfExists(sheet, 0, 0, month);          // A1: Tháng
        setCellIfExists(sheet, 0, 3, year);   // D1: Năm
    }

    /**
     * Tính kỳ dữ liệu theo Tháng (month/year) + periodType - bản gốc TempEmpSerImpl.putArPeriodParam (Hanwha_HTSV),
     * dùng cho selectFixedDateList / selectSalaryReport (màn hình viewMonthDetailList và báo cáo 305):
     * <ul>
     *   <li>periodType rỗng: 25 tháng trước -> 24 tháng này (mặc định, như cũ)</li>
     *   <li>25_31: 25 tháng này -> ngày cuối tháng này</li>
     *   <li>01_31: 01 tháng này -> ngày cuối tháng này</li>
     * </ul>
     * Kết quả: arPeriodFrom/arPeriodTo (YYYY/MM/DD), arHiYm (YYYYMM của các cột ngày 25..31), arLoYm (YYYYMM của
     * các cột ngày 1..24). Tháng không hợp lệ thì lấy tháng trước tháng hiện tại (giống nhánh SYSDATE bản gốc).
     */
    private void applyPeriod(MonthDetailListDto params) {
        String periodType = params.getPeriodType() == null ? "" : params.getPeriodType().trim();
        if (!PERIOD_25_END.equals(periodType) && !PERIOD_01_END.equals(periodType)) {
            periodType = "";
        }
        params.setPeriodType(periodType);

        YearMonth cur;
        try {
            cur = YearMonth.of(Integer.parseInt(params.getYear()), Integer.parseInt(params.getMonth()));
        } catch (Exception e) {
            cur = YearMonth.now().minusMonths(1);
            log.warn("Tháng/năm không hợp lệ (month={}, year={}), dùng mặc định {}", params.getMonth(), params.getYear(), cur);
            params.setMonth(String.format("%02d", cur.getMonthValue()));
            params.setYear(String.valueOf(cur.getYear()));
        }

        LocalDate from;
        LocalDate to;
        YearMonth hiYm;
        if (periodType.isEmpty()) {
            YearMonth prev = cur.minusMonths(1);
            from = prev.atDay(25);
            to = cur.atDay(24);
            hiYm = prev;
        } else {
            from = cur.atDay(PERIOD_25_END.equals(periodType) ? 25 : 1);
            to = cur.atEndOfMonth();
            hiYm = cur;
        }
        params.setArPeriodFrom(from.format(DAY_FMT));
        params.setArPeriodTo(to.format(DAY_FMT));
        params.setArHiYm(hiYm.format(YM_FMT));
        params.setArLoYm(cur.format(YM_FMT));
    }

    /**
     * Báo cáo 305: sắp xếp cột ngày theo thứ tự thực của kỳ dữ liệu (bản gốc RetrieveMasterListCtroller.putArPeriodExcelData).
     * SQL trả key theo số ngày (DATE_25, DAY_OT_1...), file mẫu dùng key theo vị trí cột:
     * P_DATE_k / P_DAY_OT_k / P_NIGHT_OT_k (k = 1..31) = ngày thứ k của kỳ; vị trí vượt quá số ngày của kỳ để trống.
     *
     * @return giá trị header: H_k = nhãn ngày (dd), periodStr = "dd/MM/yyyy - dd/MM/yyyy"
     */
    private Map<String, String> putPeriodExcelData(List<Map<String, Object>> rows, MonthDetailListDto params) {
        LocalDate from = LocalDate.parse(params.getArPeriodFrom(), DAY_FMT);
        LocalDate to = LocalDate.parse(params.getArPeriodTo(), DAY_FMT);

        Map<String, String> header = new HashMap<>();
        header.put("periodStr", from.format(SHOW_FMT) + " - " + to.format(SHOW_FMT));
        int[] days = new int[MAX_PERIOD_DAYS];
        int n = 0;
        for (LocalDate d = from; n < MAX_PERIOD_DAYS && !d.isAfter(to); d = d.plusDays(1)) {
            days[n] = d.getDayOfMonth();
            header.put("H_" + (n + 1), String.format("%02d", days[n]));
            n++;
        }
        for (int k = n; k < MAX_PERIOD_DAYS; k++) {
            header.put("H_" + (k + 1), "");
        }

        for (Map<String, Object> row : rows) {
            for (int k = 0; k < MAX_PERIOD_DAYS; k++) {
                row.put("P_DATE_" + (k + 1), k < n ? row.get("DATE_" + days[k]) : null);
                row.put("P_DAY_OT_" + (k + 1), k < n ? row.get("DAY_OT_" + days[k]) : null);
                row.put("P_NIGHT_OT_" + (k + 1), k < n ? row.get("NIGHT_OT_" + days[k]) : null);
            }
        }
        return header;
    }

    /** Thay các ô có nội dung đúng bằng {@code ${KEY}} (KEY có trong values) - dùng cho header ngoài block jx:forEach. */
    private void replaceHeaderTokens(Sheet sheet, Map<String, String> values) {
        for (Row row : sheet) {
            for (Cell cell : row) {
                if (cell.getCellType() != CellType.STRING) {
                    continue;
                }
                String text = cell.getStringCellValue();
                if (text != null && text.startsWith("${") && text.endsWith("}")) {
                    String value = values.get(text.substring(2, text.length() - 1));
                    if (value != null) {
                        cell.setCellValue(value);
                    }
                }
            }
        }
    }

    /** Thay token {@code ${item.YEAR}} trong tiêu đề báo cáo bằng năm đang xuất. */
    private void fillBonus13thHeaderPlaceholders(Sheet sheet, MonthDetailListDto params) {
        replaceTextInCell(sheet, 2, 0, "${item.YEAR}", params.getYear());
    }

    /** Thay các token {@code ${month}}/{@code ${year}} ở ô tiêu đề "Month: ${month}-${year}". */
    private void fillWorkDurationHeaderPlaceholders(Sheet sheet, MonthDetailListDto params) {
        replaceTextInCell(sheet, 4, 3, "${month}", params.getMonth());
        replaceTextInCell(sheet, 4, 3, "${year}", params.getYear());
    }

    /**
     * Thay các token {@code ${month}}/{@code ${year}} ở 3 ô tiêu đề: "Month ${month}", "year ${year}"
     * và dải ngày "01/${month}/${year} ~ 31/${month}/${year}".
     */
    private void fillWorkOtPrintHeaderPlaceholders(Sheet sheet, MonthDetailListDto params) {
        replaceTextInCell(sheet, 4, 3, "${month}", params.getMonth());
        replaceTextInCell(sheet, 4, 5, "${year}", params.getYear());
        replaceTextInCell(sheet, 5, 2, "${month}", params.getMonth());
        replaceTextInCell(sheet, 5, 2, "${year}", params.getYear());
        replaceTextInCell(sheet, 5, 4, "${month}", params.getMonth());
        replaceTextInCell(sheet, 5, 4, "${year}", params.getYear());
    }

    /**
     * Thay token tiêu đề cho báo cáo "Month OT Over": tên biến trong file mẫu bị đặt ngược giống báo cáo
     * Công tính lương - ô {@code ${year}} thực chất cần nhận giá trị Tháng, ô {@code ${month}} cần nhận giá
     * trị Năm. Dải ngày "21/${year - 1}/${month} ~ 20/${year}/${month}" hiển thị kỳ chấm công từ ngày 21
     * tháng trước đến ngày 20 tháng hiện tại, nên token {@code ${year - 1}} cần nhận giá trị (Tháng - 1).
     */
    private void fillMonthOtOverHeaderPlaceholders(Sheet sheet, MonthDetailListDto params) {
        String month = params.getMonth();
        String year = params.getYear();
        String prevMonth = month;
        try {
            int m = Integer.parseInt(month);
            prevMonth = String.format("%02d", m == 1 ? 12 : m - 1);
        } catch (Exception ignored) {
            // Giữ nguyên month nếu không parse được
        }

        replaceTextInCell(sheet, 4, 3, "${year}", month);
        replaceTextInCell(sheet, 4, 5, "${month}", year);

        replaceTextInCell(sheet, 5, 2, "${year - 1}", prevMonth);
        replaceTextInCell(sheet, 5, 2, "${month}", year);
        replaceTextInCell(sheet, 5, 4, "${year}", month);
        replaceTextInCell(sheet, 5, 4, "${month}", year);
    }

    /**
     * Thay token tiêu đề cho báo cáo "Month Att Total Day": tên biến bị đặt ngược giống 314/3286 - ô
     * {@code ${year}} (ngay sau nhãn "Month") thực chất cần nhận giá trị Tháng.
     */
    private void fillMonthAttTotalDayHeaderPlaceholders(Sheet sheet, MonthDetailListDto params) {
        replaceTextInCell(sheet, 4, 3, "${year}", params.getMonth());
    }

    private void setCellIfExists(Sheet sheet, int rowIdx, int colIdx, String value) {
        Row row = sheet.getRow(rowIdx);
        if (row == null) {
            return;
        }
        Cell cell = row.getCell(colIdx);
        if (cell == null) {
            cell = row.createCell(colIdx);
        }
        cell.setCellValue(value);
    }

    private void replaceTextInCell(Sheet sheet, int rowIdx, int colIdx, String token, String value) {
        Row row = sheet.getRow(rowIdx);
        if (row == null) {
            return;
        }
        Cell cell = row.getCell(colIdx);
        if (cell == null) {
            return;
        }
        String text = new DataFormatter().formatCellValue(cell);
        if (text != null && text.contains(token)) {
            cell.setCellValue(text.replace(token, value == null ? "" : value));
        }
    }

    private void exportPendingReport(MonthDetailListDto params, HttpServletResponse response) throws IOException {
        try {
            String message = I18nUtil.getMessage("ess.viewMonthDetailList.msg.exportPending",
                    new Object[]{params.getReportType()});
            byte[] bytes = message.getBytes(StandardCharsets.UTF_8);
            response.setContentType("text/plain;charset=UTF-8");
            response.setHeader("Content-Disposition", "attachment; filename=\"thong_bao_bao_cao.txt\"");
            response.setContentLength(bytes.length);
            response.getOutputStream().write(bytes);
        } catch (Exception e) {
            log.error("Lỗi khi xuất báo cáo chấm công tháng: {}", e.getMessage(), e);
            throw e;
        }
    }
}
