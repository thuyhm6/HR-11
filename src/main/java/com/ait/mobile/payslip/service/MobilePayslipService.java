package com.ait.mobile.payslip.service;

import com.ait.mobile.payslip.dto.MobilePayScheduleDto;
import com.ait.mobile.payslip.dto.MobilePayslipDto;
import com.ait.sy.sys.service.HrAuthenticationService.HrUserInfo;
import java.util.List;

/**
 * Phiếu lương trên app. Xem phiếu lương cần xác thực lại bằng mật khẩu để lấy "payslip token" ngắn hạn
 * (gắn với user + thiết bị), tránh người khác cầm máy đang đăng nhập xem được lương.
 */
public interface MobilePayslipService {

    long TOKEN_SECONDS = 600;

    /** Các kỳ lương HR đã mở. */
    List<MobilePayScheduleDto> getOpenSchedules();

    /** Xác thực lại bằng mật khẩu (giới hạn số lần sai) -> payslip token. */
    String unlock(HrUserInfo user, String deviceId, String password);

    MobilePayslipDto getPayslip(HrUserInfo user, String deviceId, String payslipToken, String payScheduleNo,
            String lang);
}
