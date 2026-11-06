package com.ait.mobile.leave.dto;

import com.ait.mobile.common.dto.MobileApproverDto;
import java.util.List;
import lombok.Data;
import lombok.NoArgsConstructor;

/** Chi tiết 1 đơn nghỉ của chính người đăng nhập. */
@Data
@NoArgsConstructor
public class MobileLeaveDetailDto {

    private String applyNo;
    private String leaveTypeCode;
    private String leaveTypeName;
    /** DD/MM/YYYY HH:mm */
    private String leaveFromTime;
    private String leaveToTime;
    private String applyLength;
    private String dayHours;
    private String leaveReason;
    private String affirmFlag;
    private String affirmFlagName;
    private String hrComment;
    private String createDate;
    private boolean cancelable;
    private List<MobileApproverDto> approvals;
    private List<FileItem> files;

    @Data
    @NoArgsConstructor
    public static class FileItem {
        private String fileNo;
        private String fileName;
    }
}
