package com.ait.report.ar.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 1 báo cáo trong REPORT_CENTER kèm loại báo cáo (mã con của SY_CODE theo menuNo) - danh sách bên trái của trang
 * /view-ar-reports-list (bản gốc report/ar/viewArReportsList.jsp).
 */
@Data
@NoArgsConstructor
public class ArReportItemDto {
    private String reportTypeNo;
    private String typeName;
    private String reportName;
    /** URL trang báo cáo của bản gốc - frontend đổi sang route Angular qua bảng MIGRATED_ROUTES. */
    private String urlJsp;
    private Integer orderNo;
}
