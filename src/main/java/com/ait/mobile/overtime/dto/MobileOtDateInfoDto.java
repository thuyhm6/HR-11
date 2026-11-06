package com.ait.mobile.overtime.dto;

import java.math.BigDecimal;
import java.util.Map;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Thông tin ngày tăng ca (EssOtApplyMapper.selectOtDateInfo): ca làm, giờ quẹt thẻ, loại OT tự xác định,
 * tổng OT tháng / năm và hạn mức - giống khung thông tin ở màn "Đăng ký tăng ca" web.
 */
@Data
@NoArgsConstructor
public class MobileOtDateInfoDto {

    /** Hạn mức giờ OT (sst-ot-apply-info.component.ts: OT_LIMIT_MONTH_HOURS / OT_LIMIT_YEAR_HOURS). */
    public static final BigDecimal MONTH_LIMIT_HOURS = BigDecimal.valueOf(40);
    public static final BigDecimal YEAR_LIMIT_HOURS = BigDecimal.valueOf(300);
    /** OT ngày nghỉ: giờ gợi ý bắt đầu từ cuối ca. */
    public static final String OT_TYPE_HOLIDAY = "32";

    private String shiftName;
    /** yyyy-MM-dd HH:mm */
    private String shiftStartTime;
    private String shiftEndTime;
    private String indoorTime;
    private String outdoorTime;
    private String otTypeCode;
    private String otTypeName;
    private BigDecimal otTotalMonth;
    private BigDecimal otWeekdayTotal;
    private BigDecimal otTotalYear;
    private boolean monthLimitEnabled;
    private boolean yearLimitEnabled;
    private BigDecimal monthLimitHours = MONTH_LIMIT_HOURS;
    private BigDecimal yearLimitHours = YEAR_LIMIT_HOURS;

    public static MobileOtDateInfoDto from(Map<String, Object> map) {
        MobileOtDateInfoDto dto = new MobileOtDateInfoDto();
        if (map == null) {
            return dto;
        }
        dto.setShiftName(str(map.get("SHIFT_NAME")));
        dto.setShiftStartTime(dateTime(map.get("SHIFT_START_TIME")));
        dto.setShiftEndTime(dateTime(map.get("SHIFT_END_TIME")));
        dto.setIndoorTime(str(map.get("INDOOR_TIME")));
        dto.setOutdoorTime(str(map.get("OUTDOOR_TIME")));
        dto.setOtTypeCode(str(map.get("OT_TYPE_CODE")));
        dto.setOtTypeName(str(map.get("OT_TYPE_NAME")));
        dto.setOtTotalMonth(num(map.get("OT_TOTAIL_MONTH")));
        dto.setOtWeekdayTotal(num(map.get("WEEKDAY_OT_TOTAIL")));
        dto.setOtTotalYear(num(map.get("OT_TOTAIL")));
        dto.setMonthLimitEnabled("1".equals(str(map.get("OT_LIMIT"))));
        dto.setYearLimitEnabled("1".equals(str(map.get("OT_LIMIT_100"))));
        return dto;
    }

    static String str(Object value) {
        return value == null ? null : value.toString().trim();
    }

    /** Chuẩn hóa về yyyy-MM-dd HH:mm (bỏ giây). */
    static String dateTime(Object value) {
        String s = str(value);
        return s != null && s.length() > 16 ? s.substring(0, 16) : s;
    }

    static BigDecimal num(Object value) {
        try {
            return value == null || value.toString().isBlank() ? BigDecimal.ZERO
                    : new BigDecimal(value.toString().trim()).stripTrailingZeros();
        } catch (NumberFormatException e) {
            return BigDecimal.ZERO;
        }
    }
}
