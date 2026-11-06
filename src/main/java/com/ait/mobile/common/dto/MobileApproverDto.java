package com.ait.mobile.common.dto;

import com.ait.sy.syAffirm.dto.SyAffirmEmailDto;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Một bước trong tuyến duyệt. Dùng cho cả tuyến duyệt dự kiến (trước khi gửi đơn, findAffirmorList)
 * và lịch sử duyệt của đơn đã gửi (selectApprovalInfo).
 */
@Data
@NoArgsConstructor
public class MobileApproverDto {

    private String affirmLevel;
    private String name;
    private String empId;
    private String deptName;
    private String positionName;
    /** Chỉ có ở lịch sử duyệt. */
    private String affirmFlag;
    private String affirmFlagName;
    private String affirmDate;
    private String affirmContent;

    /** Tuyến duyệt dự kiến (PKG_AFFIRM_EMAIL.GET_AFFIRMOR_LIST_IMPROVE). */
    public static MobileApproverDto fromPreview(SyAffirmEmailDto src) {
        MobileApproverDto dto = new MobileApproverDto();
        dto.setAffirmLevel(src.getAffirmLevel());
        dto.setName(src.getLocalName());
        dto.setEmpId(src.getEmpId());
        dto.setDeptName(src.getDeptName());
        dto.setPositionName(src.getPositionName() != null ? src.getPositionName() : src.getPostionName());
        return dto;
    }

    /** Lịch sử duyệt của đơn (EssLeaveApprovalInfoResultMap). */
    public static MobileApproverDto fromHistory(SyAffirmEmailDto src) {
        MobileApproverDto dto = new MobileApproverDto();
        dto.setAffirmLevel(src.getAffirmLevel());
        dto.setName(src.getAffirmName());
        dto.setDeptName(src.getDeptName());
        dto.setAffirmFlag(src.getAffirmFlag());
        dto.setAffirmFlagName(src.getAffirmFlagName());
        dto.setAffirmDate(src.getUpdateDate());
        dto.setAffirmContent(src.getAffirmContent());
        return dto;
    }
}
