package com.ait.ess.infoApply.service.impl;

import com.ait.ess.infoApply.dto.EssOtReportDto;
import com.ait.ess.infoApply.mapper.EssOtReportMapper;
import com.ait.ess.infoApply.service.EssOtReportService;
import com.ait.sy.sys.dto.DataTablesResponse;
import com.ait.util.ExcelJxForEachUtil;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.util.Collections;
import java.util.List;
import java.util.Map;

@Service
public class EssOtReportServiceImpl implements EssOtReportService {

    private static final Logger log = LoggerFactory.getLogger(EssOtReportServiceImpl.class);

    @Autowired
    private EssOtReportMapper mapper;

    @Override
    public DataTablesResponse<EssOtReportDto> getPageList(EssOtReportDto params) {
        try {
            int total = mapper.countList(params);
            List<EssOtReportDto> list = total > 0 ? mapper.selectListPage(params) : Collections.emptyList();
            return new DataTablesResponse<>(params.getDraw(), total, total, list);
        } catch (Exception e) {
            log.error("Lỗi khi lấy danh sách báo cáo tăng ca: {}", e.getMessage(), e);
            return new DataTablesResponse<>(params.getDraw(), "Lỗi hệ thống khi tải danh sách báo cáo tăng ca.");
        }
    }

    /**
     * Xuất báo cáo "Báo cáo tăng ca": điền dữ liệu vào file mẫu templates/1_OtReport.xlsx.
     * File mẫu dùng cú pháp {@code <jx:forEach items="${viewMonthDetailList}" var="reports" varStatus="i"> ... </jx:forEach>}
     * bao quanh 1 dòng mẫu chứa các biểu thức {@code ${reports.FIELD}} - dòng này được nhân bản cho từng
     * nhân viên trong kết quả truy vấn (cùng cơ chế với {@code MonthDetailListServiceImpl}, xem
     * {@link ExcelJxForEachUtil#fillForEachBlock}).
     */
    @Override
    public void exportReport(EssOtReportDto params, HttpServletResponse response) throws IOException {
        try {
            List<Map<String, Object>> rows = mapper.selectExportReport(params);

            ClassPathResource resource = new ClassPathResource("templates/1_OtReport.xlsx");
            try (InputStream is = resource.getInputStream();
                 Workbook workbook = WorkbookFactory.create(is)) {
                Sheet sheet = workbook.getSheetAt(0);
                ExcelJxForEachUtil.fillForEachBlock(sheet, rows);

                String fileName = "BaoCaoTangCa_" + params.getYear() + params.getMonth() + ".xlsx";
                ExcelJxForEachUtil.writeWorkbook(workbook, response, fileName,
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
            }
        } catch (Exception e) {
            log.error("Lỗi khi xuất báo cáo tăng ca: month={}, year={}: {}", params.getMonth(), params.getYear(), e.getMessage(), e);
            throw e;
        }
    }
}
