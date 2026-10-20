package com.ait.ess.infoApplyAttendance.dto;

import lombok.Data;

/**
 * Xin nghỉ phép hàng loạt (bản gốc Hanwha_HTSV: ess/infoApplyAttendance/viewApplyAttenanceBatchInfoList.jsp -
 * trang quản lý, ar/attendanceMintenance/viewApplyAttenanceManagentInfoList_new.jsp - trang HR).
 * Dùng chung cho: 1 dòng danh sách (getNullBatchLeaveAffirmInfoList), tham số tìm kiếm và dữ liệu Lưu/Hủy.
 * Ngày dạng 'DD/MM/YYYY', giờ dạng 'HH:MI' - đúng định dạng bản gốc.
 */
@Data
public class EssPiciLeaveAffirmDto {
    // ===== Dữ liệu dòng =====
    private String applyNo;
    private String personId;
    private String empId;
    private String localName;
    private String deptName;
    private String shiftName;
    private String postFamily;
    private String dutyNo;
    /** Ngày xin phép (APPLY_TIME) dạng DD/MM/YYYY. */
    private String applyTime;
    private String leaveTypeCode;
    private String leaveTypeName;
    private String fromDate;
    private String fromTime;
    private String toDate;
    private String toTime;
    /** Số giờ nghỉ (APPLY_LENGTH / GET_AR_LEAVE_LENGTH). */
    private String applyLength;
    /** Số giờ 1 ngày công (AR_GET_DAY_HOURS) - dùng đổi giờ -> ngày khi hiển thị. */
    private String dayHours;
    private String leaveReason;
    private String hrComment;
    private String affirmFlag;
    private String affirmFlagName;
    private String confirmFlag;
    /** Tổng phép năm (ngày). */
    private String totVacCnt;
    /** Phép năm còn lại (ngày). */
    private String remainVacCnt;
    /** Danh sách người duyệt dạng "1 [EMPID]Tên<br>...". */
    private String affirmStr;
    private String createdBy;
    private String createDate;
    private String updatedBy;
    private String updateDate;
    /** Khóa tài liệu Cleverse - chỉ dùng nội bộ khi Lưu. */
    private String misDocId;

    // ===== Tham số tìm kiếm =====
    private String keyword;
    /** Danh sách mã phòng ban, phân tách bởi dấu phẩy. */
    private String deptNos;
    private String startDate;
    private String endDate;
    private String shiftNo;
    private String searchLeaveTypeCode;
    private String searchAffirmFlag;
    private String searchConfirmFlag;
    private String searchPostFamily;
    /** "1" = ẩn đơn đã hủy (checkbox CANCEL_FLAG bản gốc). */
    private String cancelFlag;
}
