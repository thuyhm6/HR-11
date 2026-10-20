package com.ait.ess.viewDept.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.util.List;

/**
 * Chi tiết tăng ca của 1 nhân viên theo 1 nhóm loại tăng ca - chuyển đổi từ popup cũ
 * /ess/viewDept/viewOtApplySingleList (Hanwha_HTSV, sqlDeptPer.xml#viewOtApplySingleList).
 */
@Data
public class OtApplyPersonalListDetailDto {

    // Kết quả truy vấn
    private String personId;
    private String empId;
    private String localName;
    private String shiftNo;
    private String shiftName;
    private String shiftStartTime;
    private String shiftEndTime;
    /** Định dạng DD/MM/YYYY */
    private String arDateStr;
    private String itemNo;
    private String itemName;
    private String indoorTime;
    private String outdoorTime;
    private String fromTime;
    private String toTime;
    private BigDecimal applyLength;

    // Tham số tìm kiếm
    /** Nhóm cột được click: WEEKDAY, WEEKEND, HOLIDAY, MEAL, NIGHT, SATURDAY (xem OtApplyPersonalListServiceImpl) */
    private String otType;
    /** ITEM_NO tương ứng otType - service tự gán, không nhận từ client */
    private List<String> itemNos;
    /** Định dạng DD/MM/YYYY */
    private String startDate;
    /** Định dạng DD/MM/YYYY */
    private String endDate;
}
