package com.ait.ar.attendanceMintenance.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import lombok.EqualsAndHashCode;

@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class EssLeaveApplyDto extends com.ait.hrm.empinfo.dto.EmployeeNameDto {
    private Long applyNo;
    private String personId;
    private String leaveFromTime; // YYYY-MM-DD HH:mm
    private String leaveToTime;   // YYYY-MM-DD HH:mm
    private String leaveReason;
    private String leaveTypeNo;   // default '21'
    private String leaveTypeCode; // data-parent-code = 21
    private String applyLength;
    private String applyTime;
    private String affirmFlag;
    private String confirmFlag;
    private String createDate;
    private String createdBy;
    private String createdIp;
    private String updateDate;
    private String updatedBy;
    private String updatedIp;
    private String activity;
    private String orderNo;
    private String confirmDate;
    private String confirmIp;
    private String confirmBy;
    private String cpnyId;
    private String batchYn;
    private String detailType;
    private String proofYn;
    private String proofConfirmDate;
    private String proofConfirmBy;
    private String proofConfirmIp;
    private String batchNo;
    private String hrComment;

    private String annualLeaveCount;

    private String affirmStr; // Query phê duyệt 

    // Các biến dùng cho việc tìm kiếm
    private String fromDate;
    private String toDate;
}
