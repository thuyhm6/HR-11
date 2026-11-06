package com.ait.mobile.overtime.service;

import com.ait.mobile.common.dto.MobileApproverDto;
import com.ait.mobile.overtime.dto.MobileOtApplyRequest;
import com.ait.mobile.overtime.dto.MobileOtDateInfoDto;
import com.ait.mobile.overtime.dto.MobileOtItemDto;
import com.ait.sy.sys.service.HrAuthenticationService.HrUserInfo;
import java.math.BigDecimal;
import java.util.List;

/**
 * Tăng ca trên app - bọc lại nghiệp vụ của màn "Đăng ký tăng ca" (sst-ot-apply-info) và
 * "Danh sách đơn tăng ca của tôi" (ot-apply-info-list) ở web.
 */
public interface MobileOvertimeService {

    /** @param applyDate yyyy-MM-dd */
    MobileOtDateInfoDto getDateInfo(String applyDate);

    /** Số giờ OT do DB tính (trừ giờ nghỉ / giờ ăn nếu chọn). */
    BigDecimal calcDuration(String applyOtDate, String otFromTime, String otToTime, boolean deductMeal);

    List<MobileApproverDto> getApprovers(String personId, String otTypeCode, String applyLength);

    /** @return applyNo của đơn vừa tạo */
    String apply(HrUserInfo user, MobileOtApplyRequest req);

    List<MobileOtItemDto> getMyList(String fromDate, String toDate, String affirmFlag);

    int cancel(List<String> applyNos);
}
