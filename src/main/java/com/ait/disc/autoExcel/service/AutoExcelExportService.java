package com.ait.disc.autoExcel.service;

import com.ait.disc.autoExcel.dto.AutoExcelExportResult;
import com.ait.disc.autoExcel.dto.AutoExcelRunDto;
import com.ait.disc.autoExcel.dto.AutoExcelSessionContext;
import com.ait.exception.BusinessException;

/** Chạy báo cáo SQL và xuất Excel (.xlsx) dạng bảng: mỗi cột kết quả SQL là 1 cột Excel. */
public interface AutoExcelExportService {

    /** @return null nếu truy vấn không có dữ liệu */
    AutoExcelExportResult export(AutoExcelRunDto dto, AutoExcelSessionContext ctx) throws BusinessException;
}
