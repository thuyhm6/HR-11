package com.ait.ar.countAttendance.dto;

import lombok.Data;

/** 1 chuỗi ngày có dữ liệu quẹt thẻ OUT liên tiếp của 1 nhân viên (1 nhân viên có thể có nhiều chuỗi). */
@Data
public class EmpWorkingTimefoDto {
    private String personId;
    private String empId;
    private String localName;
    private String deptNo;
    private String deptName;
    private String postGradeName;
    /** Ngày bắt đầu / kết thúc chuỗi (DD/MM/YYYY). */
    private String streakFrom;
    private String streakTo;
    /** Số ngày OUT liên tiếp. */
    private Integer dayCount;
    /** Số ngày trong chuỗi có dữ liệu ở AR_DETAIL_HTSV. */
    private Integer detailDayCount;
}
