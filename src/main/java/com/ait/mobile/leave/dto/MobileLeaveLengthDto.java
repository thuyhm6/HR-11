package com.ait.mobile.leave.dto;

import java.math.BigDecimal;
import java.util.Map;
import lombok.Data;
import lombok.NoArgsConstructor;

/** Thời lượng nghỉ do DB tính theo ca làm việc (EssLeaveApplyMapper.selectLeaveLength). */
@Data
@NoArgsConstructor
public class MobileLeaveLengthDto {

    /** Số giờ nghỉ (APPLY_LENGTH). */
    private BigDecimal leaveLength;
    /** Số giờ của 1 ngày công - để app hiển thị "x ngày y giờ". */
    private BigDecimal dayHour;

    public static MobileLeaveLengthDto from(Map<String, Object> map) {
        MobileLeaveLengthDto dto = new MobileLeaveLengthDto();
        dto.setLeaveLength(MobileVacationDto.num(map == null ? null : map.get("LEAVE_LENGTH")));
        dto.setDayHour(MobileVacationDto.num(map == null ? null : map.get("DAY_HOUR")));
        return dto;
    }
}
