package com.ait.pa.workManagement.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Option cho dropdown của màn hình quản lý tổng hợp chấm công:
 * - Kế hoạch trả lương (getPayScheduleAllWithPaConfirmList bản gốc) - kèm paConfirmFlag để chặn lưu/tính khi lương đã chốt.
 * - Hạng mục tổng hợp chấm công (getSelectCodeMultiArSummaryList bản gốc) - paConfirmFlag = null.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PaArSummaryOptionDto {

    private String code;
    private String name;
    private Integer paConfirmFlag;
}
