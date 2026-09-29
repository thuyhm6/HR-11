package com.ait.ess.tempEmp.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Map;

/**
 * Dữ liệu màn hình viewMonthDetailList: danh sách ngày trong kỳ công (header động) + danh sách nhân viên.
 * rows giữ dạng Map vì mỗi dòng có ~190 cột, trong đó 3 nhóm cột theo ngày (DATE_x, DAY_OT_x, NIGHT_OT_x)
 * phụ thuộc số ngày của kỳ công - dùng chung kết quả với báo cáo 305 (selectSalaryReport).
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MonthDetailViewDto {

    private List<MonthDetailDateDto> dates;
    private List<Map<String, Object>> rows;
}
