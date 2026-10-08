package com.ait.pa.workManagement.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Điều kiện tra cứu trang Lương tháng chi tiết / Lương năm chi tiết.
 * - Lương tháng: payScheduleNo (bắt buộc), empSearch, deptNo (lọc cả phòng ban con).
 * - Lương năm: personId, startMonth, endMonth (MM/YYYY, bắt buộc).
 * - Chi tiết bên phải: personId + (payScheduleNo nếu từ lương tháng | payDate + startMonth + endMonth nếu từ lương năm).
 */
@Data
@NoArgsConstructor
public class PaSalaryDetailSearchDto {
    private String payScheduleNo;
    private String empSearch;
    private String deptNo;
    private String personId;
    private String startMonth;
    private String endMonth;
    /** DD-MM-YYYY. */
    private String payDate;
    /** Loại hạng mục truyền cho procedure (1/2/3) - service tự gán. */
    private Integer itemType;
}
