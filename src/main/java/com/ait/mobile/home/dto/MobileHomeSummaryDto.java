package com.ait.mobile.home.dto;

import com.ait.mobile.leave.dto.MobileVacationDto;
import java.math.BigDecimal;
import lombok.Data;
import lombok.NoArgsConstructor;

/** Số liệu tổng hợp cho trang chủ app. */
@Data
@NoArgsConstructor
public class MobileHomeSummaryDto {

    private MobileVacationDto vacation;
    /** Số đơn nghỉ / OT đang chờ hoặc đang duyệt (trong 6 tháng gần nhất). */
    private int pendingLeaveCount;
    private int pendingOtCount;
    /** Tổng giờ OT tháng này và hạn mức tháng (nếu có áp dụng). */
    private BigDecimal otMonthHours;
    private BigDecimal otMonthLimit;
}
