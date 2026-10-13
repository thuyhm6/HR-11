package com.ait.ar.countAttendance.dto;

import lombok.Data;

/** Chi tiết quẹt thẻ theo từng ngày trong 1 chuỗi ngày OUT liên tiếp. */
@Data
public class EmpWorkingTimefoDayDto {
    /** Ngày công (DD/MM/YYYY). */
    private String arDate;
    /** Ca làm việc theo lịch (AR_SCHEDULE_HTSV) của ngày đó. */
    private String shiftName;
    private String inTime;
    private String outTime;
    private Integer swipeCount;
    /** 'Y' nếu ngày đó có dữ liệu ở AR_DETAIL_HTSV. */
    private String hasDetail;
}
