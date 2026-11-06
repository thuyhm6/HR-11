package com.ait.mobile.approval.dto;

import com.ait.sy.syAffirm.dto.SyAffirmEmailDto;
import lombok.Data;
import lombok.NoArgsConstructor;

/** Một đơn trong hộp duyệt (đang chờ tôi duyệt / tôi đã duyệt). */
@Data
@NoArgsConstructor
public class MobileApprovalItemDto {

    private String applyNo;
    private String applyType;
    private String applyTypeCode;
    private MobileApprovalCategory category;
    private String title;
    /** Thông tin người gửi đơn (tên / phòng ban...). */
    private String applyPersonInfo;
    private String affirmLevel;
    /** Trạng thái chung của đơn (tên). */
    private String statusName;
    /** DD/MM/YYYY HH:mm */
    private String updateDate;
    private boolean read;

    public static MobileApprovalItemDto from(SyAffirmEmailDto src) {
        MobileApprovalItemDto dto = new MobileApprovalItemDto();
        dto.setApplyNo(src.getApplyNo());
        dto.setApplyType(src.getApplyType());
        dto.setApplyTypeCode(src.getApplyTypeCode());
        dto.setCategory(MobileApprovalCategory.of(src.getApplyTypeCode()));
        dto.setTitle(src.getTitle());
        dto.setApplyPersonInfo(src.getApplyPersonInfo());
        dto.setAffirmLevel(src.getAffirmLevel());
        dto.setStatusName(src.getApplyAffirmFlag());
        dto.setUpdateDate(normalizeDate(src.getUpdateDate()));
        dto.setRead("1".equals(src.getReadFlag()) || "Y".equalsIgnoreCase(src.getReadFlag()));
        return dto;
    }

    /** "YYYY.MM.DD HH24:MI:SS" (chờ duyệt) hoặc "DD.MM.YYYY HH24:MI:SS" (đã duyệt) -> "DD/MM/YYYY HH:mm". */
    static String normalizeDate(String value) {
        if (value == null || value.length() < 16) {
            return value;
        }
        if (value.matches("\\d{4}\\.\\d{2}\\.\\d{2} .*")) {
            return value.substring(8, 10) + "/" + value.substring(5, 7) + "/" + value.substring(0, 4) + " "
                    + value.substring(11, 16);
        }
        if (value.matches("\\d{2}\\.\\d{2}\\.\\d{4} .*")) {
            return value.substring(0, 10).replace('.', '/') + " " + value.substring(11, 16);
        }
        return value;
    }
}
