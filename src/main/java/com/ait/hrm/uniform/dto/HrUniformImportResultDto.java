package com.ait.hrm.uniform.dto;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

/** Kết quả đọc + kiểm tra file Excel đổi đồng phục (bước xem trước, chưa lưu DB). */
@Data
public class HrUniformImportResultDto {
    private List<HrUniformImportRowDto> rows = new ArrayList<>();
    /** Cảnh báo cấp file (vd. cột đồng phục không có trong danh mục). */
    private List<String> warnings = new ArrayList<>();
    private int validCount;
    private int errorCount;
}
