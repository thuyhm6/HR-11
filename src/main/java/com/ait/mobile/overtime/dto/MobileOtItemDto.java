package com.ait.mobile.overtime.dto;

import com.ait.ess.infoApply.dto.EssOtApplyListDto;
import com.ait.mobile.common.MobileApplyStatus;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import lombok.Data;
import lombok.NoArgsConstructor;

/** Một đơn tăng ca trong danh sách "Đơn của tôi". */
@Data
@NoArgsConstructor
public class MobileOtItemDto {

    private static final Pattern TIME = Pattern.compile("(\\d{2}:\\d{2})(?::\\d{2}(?:\\.\\d+)?)?$");

    private String applyNo;
    private String otTypeCode;
    private String otTypeName;
    /** DD/MM/YYYY */
    private String applyOtDate;
    /** HH:mm */
    private String fromTime;
    private String toTime;
    private String otApplyHour;
    private boolean deductMeal;
    private String applyOtRemark;
    private String affirmFlag;
    private String affirmFlagName;
    private boolean cancelable;

    public static MobileOtItemDto from(EssOtApplyListDto src) {
        MobileOtItemDto dto = new MobileOtItemDto();
        dto.setApplyNo(src.getApplyNo());
        dto.setOtTypeCode(src.getOtTypeCode());
        dto.setOtTypeName(src.getOtTypeName());
        dto.setApplyOtDate(src.getApplyOtDate());
        dto.setFromTime(timeOnly(src.getOtFromTime()));
        dto.setToTime(timeOnly(src.getOtToTime()));
        dto.setOtApplyHour(src.getOtApplyHour());
        dto.setDeductMeal("1".equals(src.getDeductYn()));
        dto.setApplyOtRemark(src.getApplyOtRemark());
        dto.setAffirmFlag(src.getAffirmFlag());
        dto.setAffirmFlagName(src.getAffirmFlagName());
        dto.setCancelable(MobileApplyStatus.isCancelable(src.getAffirmFlag()));
        return dto;
    }

    /** OT_FROM_TIME có thể là "2026-11-02 18:00:00.0" hoặc "18:00" - lấy phần HH:mm. */
    static String timeOnly(String value) {
        if (value == null) {
            return null;
        }
        Matcher m = TIME.matcher(value.trim());
        return m.find() ? m.group(1) : value;
    }
}
