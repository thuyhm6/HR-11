package com.ait.mobile.leave.dto;

import java.math.BigDecimal;
import java.util.Map;
import lombok.Data;
import lombok.NoArgsConstructor;

/** Phép năm của nhân viên (EssLeaveApplyMapper.selectMyVacationInfo), đơn vị: ngày. */
@Data
@NoArgsConstructor
public class MobileVacationDto {

    /** Tổng phép = phép năm + đặc biệt + còn lại năm ngoái. */
    private BigDecimal totalVac;
    private BigDecimal yearVac;
    private BigDecimal lastYearVac;
    private BigDecimal addVac;
    /** Đã dùng (đã duyệt + đang chờ duyệt). */
    private BigDecimal useVac;
    private BigDecimal remainVac;

    public static MobileVacationDto from(Map<String, Object> map) {
        MobileVacationDto dto = new MobileVacationDto();
        if (map == null) {
            return dto;
        }
        dto.setTotalVac(num(map.get("TOT_VAC_CNT")));
        dto.setYearVac(num(map.get("YEAR_VAC_CNT")));
        dto.setLastYearVac(num(map.get("LAST_YEAR_VAC")));
        dto.setAddVac(num(map.get("ADD_VAC")));
        dto.setUseVac(num(map.get("USE_VAC")));
        BigDecimal remain = num(map.get("REMAIN_VAC"));
        dto.setRemainVac(map.get("REMAIN_VAC") != null ? remain : dto.getTotalVac().subtract(dto.getUseVac()));
        return dto;
    }

    static BigDecimal num(Object value) {
        if (value == null || value.toString().isBlank()) {
            return BigDecimal.ZERO;
        }
        try {
            return new BigDecimal(value.toString().trim()).stripTrailingZeros();
        } catch (NumberFormatException e) {
            return BigDecimal.ZERO;
        }
    }
}
