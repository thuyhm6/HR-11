package com.ait.ess.tempEmp.dto;

import lombok.Data;

/**
 * 1 ngày trong kỳ công (AR_CALENDER, 25 tháng trước -> 24 tháng chọn) - dùng dựng động các cột
 * chi tiết theo ngày trên màn hình viewMonthDetailList (viewFixedDateList bản gốc).
 */
@Data
public class MonthDetailDateDto {

    private String ddateStr;
    private Integer iweek;
    /** Loại ngày: 1440 = ngày làm việc, khác 1440 = ngày nghỉ/lễ (tô xám trên giao diện). */
    private String typeId;
    private String iday;
    /** Tên cột chi tiết công/tăng ca ngày/tăng ca đêm tương ứng trong selectSalaryReport (DATE_x, DAY_OT_x, NIGHT_OT_x). */
    private String dateKey;
    private String dayOtKey;
    private String nightOtKey;
    private String weekTitle;
}
