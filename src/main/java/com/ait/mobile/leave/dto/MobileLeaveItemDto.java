package com.ait.mobile.leave.dto;

import com.ait.ar.attendanceMintenance.dto.EssLeaveApplyDto;
import com.ait.mobile.common.MobileApplyStatus;
import lombok.Data;
import lombok.NoArgsConstructor;

/** Một đơn nghỉ trong danh sách "Đơn của tôi". Ngày dạng DD/MM/YYYY, giờ HH:mm. */
@Data
@NoArgsConstructor
public class MobileLeaveItemDto {

    private String applyNo;
    private String leaveTypeCode;
    private String leaveTypeName;
    private String applyDate;
    private String fromDate;
    private String fromTime;
    private String toDate;
    private String toTime;
    /** Số giờ nghỉ. */
    private String applyLength;
    /** Số giờ / ngày công (quy đổi ra ngày). */
    private String dayHours;
    private String leaveReason;
    private String affirmFlag;
    private String affirmFlagName;
    private String hrComment;
    private boolean cancelable;

    public static MobileLeaveItemDto from(EssLeaveApplyDto src) {
        MobileLeaveItemDto dto = new MobileLeaveItemDto();
        dto.setApplyNo(src.getApplyNo() == null ? null : String.valueOf(src.getApplyNo()));
        dto.setLeaveTypeCode(src.getLeaveTypeCode());
        dto.setLeaveTypeName(src.getLeaveTypeName());
        dto.setApplyDate(src.getApplyDate());
        dto.setFromDate(src.getLeaveFromDate());
        dto.setFromTime(src.getLeaveFromTimeOnly());
        dto.setToDate(src.getLeaveToDate());
        dto.setToTime(src.getLeaveToTimeOnly());
        dto.setApplyLength(src.getApplyLength());
        dto.setDayHours(src.getDayHours());
        dto.setLeaveReason(src.getLeaveReason());
        dto.setAffirmFlag(src.getAffirmFlag());
        dto.setAffirmFlagName(src.getAffirmFlagName());
        dto.setHrComment(src.getHrComment());
        dto.setCancelable(MobileApplyStatus.isCancelable(src.getAffirmFlag()));
        return dto;
    }
}
