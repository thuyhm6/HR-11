package com.ait.mobile.home.service.impl;

import com.ait.mobile.common.MobileApplyStatus;
import com.ait.mobile.home.dto.MobileHomeSummaryDto;
import com.ait.mobile.home.service.MobileHomeService;
import com.ait.mobile.leave.service.MobileLeaveService;
import com.ait.mobile.overtime.dto.MobileOtDateInfoDto;
import com.ait.mobile.overtime.service.MobileOvertimeService;
import java.time.LocalDate;
import java.util.Set;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Trang chủ: phép năm, số đơn đang chờ duyệt, giờ OT tháng. Mỗi phần lỗi độc lập - phần nào lỗi thì bỏ trống,
 * không làm hỏng cả trang chủ.
 */
@Service
public class MobileHomeServiceImpl implements MobileHomeService {

    private static final Logger log = LoggerFactory.getLogger(MobileHomeServiceImpl.class);
    private static final Set<String> WAITING = Set.of(MobileApplyStatus.PENDING, MobileApplyStatus.IN_PROGRESS);

    @Autowired
    private MobileLeaveService mobileLeaveService;

    @Autowired
    private MobileOvertimeService mobileOvertimeService;

    @Override
    public MobileHomeSummaryDto getSummary(String personId) {
        MobileHomeSummaryDto dto = new MobileHomeSummaryDto();
        LocalDate today = LocalDate.now();
        String from = today.minusMonths(6).toString();
        String to = today.plusMonths(6).toString();

        try {
            dto.setVacation(mobileLeaveService.getVacation(personId));
        } catch (Exception e) {
            log.warn("Trang chủ mobile: lỗi lấy phép năm personId={}: {}", personId, e.getMessage());
        }
        try {
            dto.setPendingLeaveCount((int) mobileLeaveService.getMyList(from, to, null).stream()
                    .filter(i -> WAITING.contains(i.getAffirmFlag())).count());
        } catch (Exception e) {
            log.warn("Trang chủ mobile: lỗi đếm đơn nghỉ personId={}: {}", personId, e.getMessage());
        }
        try {
            dto.setPendingOtCount((int) mobileOvertimeService.getMyList(from, to, null).stream()
                    .filter(i -> WAITING.contains(i.getAffirmFlag())).count());
        } catch (Exception e) {
            log.warn("Trang chủ mobile: lỗi đếm đơn OT personId={}: {}", personId, e.getMessage());
        }
        try {
            MobileOtDateInfoDto ot = mobileOvertimeService.getDateInfo(today.toString());
            dto.setOtMonthHours(ot.getOtTotalMonth());
            dto.setOtMonthLimit(ot.isMonthLimitEnabled() ? ot.getMonthLimitHours() : null);
        } catch (Exception e) {
            log.warn("Trang chủ mobile: lỗi lấy giờ OT tháng personId={}: {}", personId, e.getMessage());
        }
        return dto;
    }
}
