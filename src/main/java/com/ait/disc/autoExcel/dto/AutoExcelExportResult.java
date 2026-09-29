package com.ait.disc.autoExcel.dto;

/** File .xlsx sinh ra khi chạy báo cáo. */
public record AutoExcelExportResult(byte[] content, String fileName, int rowCount) {
}
