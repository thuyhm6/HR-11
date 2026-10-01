package com.ait.pa.workManagement.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

/** Điều kiện tìm kiếm màn hình quản lý tổng hợp chấm công (seach_KEY / PAY_SCHEDULE_NO / seach_DEPTNO / ...). */
@Data
@NoArgsConstructor
public class PaArSummaryManageSearchDto {

    private String payScheduleNo;
    /** Mã NV / Họ tên / Tên tiếng Anh. */
    private String key;
    /** Phòng ban - lấy cả phòng ban con (START WITH ... CONNECT BY). */
    private String deptNo;
    /** Hạng mục tổng hợp chấm công (AR_STA_ITEM.ITEM_NO). */
    private List<String> itemNos = new ArrayList<>();
    /** 'Y' = chỉ lấy bản ghi có giá trị ngoại lệ (FINAL_VALUE IS NOT NULL). */
    private String isSpecialFlag;
}
