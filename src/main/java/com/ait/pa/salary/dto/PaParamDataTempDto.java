package com.ait.pa.salary.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PaParamDataTempDto {
    private String paramNo;
    private String empId;
    private String returnValue;
    private String startMonth;
    private String endMonth;
    // Ngày hiệu lực (YYYY-MM-DD) - import theo ngày, hoặc package quy đổi từ tháng
    private String startDate;
    private String endDate;
    private String remark;
    private String localName;
    private String uploadErrorMsg;
    private Long   lineId;
    private String resultFlag;
    private String uploadBy;
    private String uploadDate;
    private String paramItemName;

    // Filter
    private String errorOnly;
}
