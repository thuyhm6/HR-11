package com.ait.mobile.payslip.service.impl;

import com.ait.mobile.common.MobileErrorCode;
import com.ait.mobile.common.MobileException;
import com.ait.mobile.payslip.dto.MobilePayScheduleDto;
import com.ait.mobile.payslip.dto.MobilePayslipDto;
import com.ait.mobile.payslip.service.MobilePayslipService;
import com.ait.mobile.security.JwtService;
import com.ait.pa.workManagement.dto.PaPayScheduleDto;
import com.ait.pa.workManagement.dto.PaPayStubDto;
import com.ait.pa.workManagement.service.PaPayScheduleService;
import com.ait.pa.workManagement.service.PaPayStubService;
import com.ait.sy.sys.service.HrAuthenticationService.HrUserInfo;
import com.ait.sy.sys.service.PasswordUpdateService;
import com.github.benmanes.caffeine.cache.Cache;
import com.github.benmanes.caffeine.cache.Caffeine;
import java.time.Duration;
import java.util.List;
import java.util.Objects;
import java.util.concurrent.atomic.AtomicInteger;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MobilePayslipServiceImpl implements MobilePayslipService {

    private static final Logger log = LoggerFactory.getLogger(MobilePayslipServiceImpl.class);
    private static final String SCOPE = "payslip";
    /** Sai mật khẩu quá 5 lần trong 15 phút => khóa mở phiếu lương 15 phút (theo user). */
    private static final int MAX_FAILED = 5;

    private final Cache<String, AtomicInteger> failedAttempts = Caffeine.newBuilder()
            .expireAfterWrite(Duration.ofMinutes(15))
            .maximumSize(10_000)
            .build();

    @Autowired
    private PaPayScheduleService paPayScheduleService;

    @Autowired
    private PaPayStubService paPayStubService;

    @Autowired
    private PasswordUpdateService passwordUpdateService;

    @Autowired
    private JwtService jwtService;

    @Override
    public List<MobilePayScheduleDto> getOpenSchedules() {
        try {
            // getOpenList lọc theo #{cpnyId} và PA_OPEN_FLAG = 1 (HR đã mở cho nhân viên xem)
            return paPayScheduleService.getOpenList().stream().filter(Objects::nonNull)
                    .map(MobilePayScheduleDto::from).toList();
        } catch (Exception e) {
            log.error("Lỗi lấy kỳ lương đã mở: {}", e.getMessage(), e);
            throw e;
        }
    }

    @Override
    public String unlock(HrUserInfo user, String deviceId, String password) {
        String username = user.getUsername();
        AtomicInteger failed = failedAttempts.getIfPresent(username);
        if (failed != null && failed.get() >= MAX_FAILED) {
            log.warn("Mobile payslip unlock bị khóa tạm thời username={}", username);
            throw new MobileException(MobileErrorCode.TOO_MANY_ATTEMPTS);
        }
        boolean ok;
        try {
            ok = password != null && !password.isEmpty()
                    && passwordUpdateService.verifyOldPassword(user.getSyUser().getUserNo(), password);
        } catch (Exception e) {
            log.error("Lỗi xác thực lại mở phiếu lương username={}: {}", username, e.getMessage(), e);
            throw new MobileException(MobileErrorCode.SYSTEM_ERROR);
        }
        if (!ok) {
            failedAttempts.asMap().computeIfAbsent(username, k -> new AtomicInteger()).incrementAndGet();
            log.warn("Mobile payslip unlock sai mật khẩu username={}", username);
            throw new MobileException(MobileErrorCode.OLD_PASSWORD_WRONG);
        }
        failedAttempts.invalidate(username);
        log.info("Mobile mở phiếu lương username={} device={}", username, deviceId);
        return jwtService.createScopedToken(username, deviceId, SCOPE, TOKEN_SECONDS);
    }

    @Override
    public MobilePayslipDto getPayslip(HrUserInfo user, String deviceId, String payslipToken, String payScheduleNo,
            String lang) {
        if (!jwtService.verifyScopedToken(payslipToken, SCOPE, user.getUsername(), deviceId)) {
            throw new MobileException(MobileErrorCode.REAUTH_REQUIRED);
        }
        // API web nhận payScheduleNo bất kỳ (chỉ dropdown lọc kỳ đã mở) => mobile chặn kỳ HR chưa mở
        boolean open = getOpenSchedules().stream().anyMatch(s -> payScheduleNo.equals(s.getPayScheduleNo()));
        if (!open) {
            throw new MobileException(MobileErrorCode.NOT_FOUND);
        }
        try {
            PaPayStubDto params = new PaPayStubDto();
            params.setPayScheduleNo(payScheduleNo);
            // selectSelfEmployee lọc PERSON_ID = #{adminID}
            List<PaPayStubDto> list = paPayStubService.loadSelfPayStub(params, lang);
            if (list == null || list.isEmpty()) {
                throw MobileException.rule("mobile.payslip.notFound", "Chưa có phiếu lương của bạn trong kỳ này");
            }
            log.info("Mobile xem phiếu lương username={} payScheduleNo={}", user.getUsername(), payScheduleNo);
            return MobilePayslipDto.from(list.get(0));
        } catch (MobileException e) {
            throw e;
        } catch (Exception e) {
            log.error("Lỗi tải phiếu lương mobile username={} payScheduleNo={}: {}", user.getUsername(), payScheduleNo,
                    e.getMessage(), e);
            throw e;
        }
    }
}
