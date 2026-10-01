package com.ait.pa.workManagement.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

/**
 * 1 dòng quản lý tổng hợp chấm công (AR_SUMMARY_MANAGE_HTSV) - chuyển từ getPaArSummaryForManageList
 * (sqlWorkManagement.xml - iBatis, dự án Hanwha_HTSV). Dùng chung cho danh sách, payload lưu ngoại lệ
 * và dữ liệu xuất Excel (itemNo/personId/deptNo/exportValue).
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PaArSummaryManageDto {

    private Long arSummaryManageNo;
    private String personId;
    private String empId;
    private String localName;
    private String deptNo;
    private String deptName;
    private String postGrade;
    private String dateStarted;
    private String itemNo;
    private String itemName;
    private String arStartDate;
    private BigDecimal calValue;
    private BigDecimal finalValue;
    private String remark;
    private String updatedBy;
    private String updateDate;

    /** NVL(FINAL_VALUE, CAL_VALUE) - giá trị xuất Excel (đúng DECODE(FINAL_VALUE,'',CAL_VALUE,FINAL_VALUE) bản gốc). */
    private BigDecimal exportValue;
}
