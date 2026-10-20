package com.ait.ess.infoApplyAttendance.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Chi tiết 1 đơn xác nhận chấm công (ESS_CARD_APPLY_TB) - tương ứng attendanceExInfo
 * (sqlInfoApply.xml#getAttendanceExList) của /ess/infoApply/viewAttendanceEx bản gốc Hanwha_HTSV.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class EssAttendanceExDetailDto {
    private String applyNo;
    private String personId;
    private String empId;
    private String localName;
    private String deptNo;
    private String deptName;
    private String postGradeName;
    private String itemNo;
    private String itemName;
    /** Ngày công dạng DD/MM/YYYY. */
    private String arDateStr;
    private String applyReason;
    private String applyTime;
    private String affirmFlag;
    private String affirmFlagName;
    private String confirmFlag;
    /** Giờ vào/ra xin xác nhận (IN_TIME/OUT_TIME của đơn) - HH24:MI. */
    private String inTime;
    private String outTime;
    /** Giờ quẹt thẻ thực tế vào/ra trong ngày công (GET_AR_TIME_BY_CPNYID). */
    private String indoorTime;
    private String outdoorTime;
    private String shiftName;
    private String shiftStartTime;
    private String shiftEndTime;
    private String workHour;
}
