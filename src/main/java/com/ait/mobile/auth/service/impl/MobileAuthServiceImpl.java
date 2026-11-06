package com.ait.mobile.auth.service.impl;

import com.ait.mobile.auth.dto.MobileChangePasswordRequest;
import com.ait.mobile.auth.dto.MobileDeviceDto;
import com.ait.mobile.auth.dto.MobileLoginRequest;
import com.ait.mobile.auth.dto.MobileRefreshRequest;
import com.ait.mobile.auth.dto.MobileRefreshTokenDto;
import com.ait.mobile.auth.dto.MobileTokenResponse;
import com.ait.mobile.auth.dto.MobileUserDto;
import com.ait.mobile.auth.mapper.MobileAuthMapper;
import com.ait.mobile.auth.service.MobileAuthService;
import com.ait.mobile.common.MobileErrorCode;
import com.ait.mobile.common.MobileException;
import com.ait.mobile.common.MobileMessages;
import com.ait.mobile.security.JwtService;
import com.ait.mobile.security.MobileLoginLimiter;
import com.ait.mobile.security.MobileUserContextService;
import com.ait.sy.sys.service.HrAuthenticationService.HrUserInfo;
import com.ait.sy.sys.service.PasswordUpdateService;
import com.ait.sy.sys.service.impl.HrAuthenticationServiceImpl;
import com.ait.util.IpUtil;
import jakarta.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MobileAuthServiceImpl implements MobileAuthService {

    private static final Logger log = LoggerFactory.getLogger(MobileAuthServiceImpl.class);

    @Autowired
    private HrAuthenticationServiceImpl hrAuthenticationService;

    @Autowired
    private PasswordUpdateService passwordUpdateService;

    @Autowired
    private MobileUserContextService userContextService;

    @Autowired
    private MobileAuthMapper mobileAuthMapper;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private MobileLoginLimiter loginLimiter;

    @Override
    @Transactional(rollbackFor = Exception.class)
    public MobileTokenResponse login(MobileLoginRequest req, HttpServletRequest request) {
        String username = req.getUsername().trim();
        String ip = loginLimiter.resolveClientIp(request);
        if (loginLimiter.isBlocked(username, ip)) {
            log.warn("Mobile login bị chặn tạm thời (sai quá nhiều lần) username={} ip={}", username, ip);
            throw new MobileException(MobileErrorCode.TOO_MANY_ATTEMPTS);
        }
        HrUserInfo user;
        try {
            // Dùng lại nguyên luồng xác thực web (BCrypt + fallback plain text, kiểm tra NV/phòng ban còn hoạt động)
            user = hrAuthenticationService.authenticate(username, req.getPassword(), request, null);
        } catch (SecurityException e) {
            throw new MobileException(MobileErrorCode.TOO_MANY_ATTEMPTS);
        }
        if (user == null || !user.isActive()) {
            loginLimiter.recordFailure(username, ip);
            log.warn("Mobile login thất bại username={} ip={}", username, ip);
            throw new MobileException(MobileErrorCode.INVALID_CREDENTIALS);
        }
        loginLimiter.recordSuccess(username);

        try {
            String clientIp = IpUtil.getClientIpAddr(request);
            MobileDeviceDto device = new MobileDeviceDto();
            device.setDeviceId(req.getDeviceId());
            device.setPersonId(user.getPersonId());
            device.setCompanyId(user.getCpnyId());
            device.setPlatform(req.getPlatform());
            device.setAppVersion(req.getAppVersion());
            device.setOsVersion(req.getOsVersion());
            device.setDeviceModel(req.getDeviceModel());
            device.setClientIp(clientIp);
            device.setDeviceLang(MobileMessages.resolveLang(request));
            mobileAuthMapper.mergeDevice(device);

            // 1 thiết bị chỉ giữ 1 phiên: thu hồi token cũ của thiết bị này trước khi cấp mới
            mobileAuthMapper.revokeTokensOfDevice(user.getPersonId(), req.getDeviceId());
            userContextService.evict(username);

            log.info("Mobile login thành công username={} device={} ip={}", username, req.getDeviceId(), clientIp);
            return issueTokens(user, req.getDeviceId(), clientIp).response();
        } catch (Exception e) {
            log.error("Lỗi cấp token mobile username={}: {}", username, e.getMessage(), e);
            throw e;
        }
    }

    /**
     * noRollbackFor: khi phát hiện refresh token bị dùng lại vẫn phải COMMIT việc thu hồi toàn bộ token
     * của thiết bị rồi mới trả lỗi.
     */
    @Override
    @Transactional(rollbackFor = Exception.class, noRollbackFor = MobileException.class)
    public MobileTokenResponse refresh(MobileRefreshRequest req, HttpServletRequest request) {
        try {
            MobileRefreshTokenDto current = mobileAuthMapper.selectRefreshTokenByHash(
                    jwtService.hashToken(req.getRefreshToken()));
            if (current == null || !req.getDeviceId().equals(current.getDeviceId())) {
                throw new MobileException(MobileErrorCode.REFRESH_INVALID);
            }
            if ("Y".equals(current.getRevokedYn())) {
                // Token đã bị xoay vòng mà vẫn được gửi lại => có thể bị đánh cắp: thu hồi toàn bộ phiên của thiết bị
                log.warn("Phát hiện refresh token bị dùng lại personId={} device={}", current.getPersonId(),
                        current.getDeviceId());
                mobileAuthMapper.revokeTokensOfDevice(current.getPersonId(), current.getDeviceId());
                throw new MobileException(MobileErrorCode.REFRESH_INVALID);
            }
            if (current.getExpireDate() == null || current.getExpireDate().isBefore(LocalDateTime.now())) {
                mobileAuthMapper.revokeRefreshToken(current.getTokenNo(), null);
                throw new MobileException(MobileErrorCode.REFRESH_INVALID);
            }

            // Nạp lại thông tin mới nhất (vd. vừa đổi mật khẩu, chuyển phòng ban, nghỉ việc)
            userContextService.evict(current.getUserName());
            HrUserInfo user = userContextService.loadActiveUser(current.getUserName());
            if (user == null) {
                mobileAuthMapper.revokeTokensOfDevice(current.getPersonId(), current.getDeviceId());
                throw new MobileException(MobileErrorCode.USER_INACTIVE);
            }

            // Thu hồi token cũ TRƯỚC: UPDATE ... AND REVOKED_YN='N' khóa dòng nên 2 request refresh song song
            // chỉ 1 request thành công
            if (mobileAuthMapper.revokeRefreshToken(current.getTokenNo(), null) == 0) {
                throw new MobileException(MobileErrorCode.REFRESH_INVALID);
            }
            IssuedTokens issued = issueTokens(user, current.getDeviceId(), IpUtil.getClientIpAddr(request));
            mobileAuthMapper.updateDeviceLang(user.getPersonId(), current.getDeviceId(),
                    MobileMessages.resolveLang(request));
            mobileAuthMapper.updateReplacedBy(current.getTokenNo(), issued.tokenNo());
            return issued.response();
        } catch (MobileException e) {
            throw e;
        } catch (Exception e) {
            log.error("Lỗi refresh token mobile: {}", e.getMessage(), e);
            throw e;
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void logout(HrUserInfo user, String deviceId) {
        try {
            mobileAuthMapper.revokeTokensOfDevice(user.getPersonId(), deviceId);
            mobileAuthMapper.deactivateDevice(user.getPersonId(), deviceId);
            log.info("Mobile logout username={} device={}", user.getUsername(), deviceId);
        } catch (Exception e) {
            log.error("Lỗi đăng xuất mobile username={}: {}", user.getUsername(), e.getMessage(), e);
            throw e;
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public MobileTokenResponse changePassword(HrUserInfo user, String deviceId, MobileChangePasswordRequest req,
            HttpServletRequest request) {
        String userNo = user.getSyUser().getUserNo();
        if (!req.getNewPassword().equals(req.getConfirmPassword())) {
            throw new MobileException(MobileErrorCode.PASSWORD_NOT_MATCH);
        }
        if (!passwordUpdateService.isPasswordStrong(req.getNewPassword())) {
            throw new MobileException(MobileErrorCode.PASSWORD_WEAK);
        }
        if (!passwordUpdateService.verifyOldPassword(userNo, req.getOldPassword())) {
            throw new MobileException(MobileErrorCode.OLD_PASSWORD_WRONG);
        }
        try {
            if (!passwordUpdateService.updatePassword(userNo, req.getNewPassword())) {
                throw new MobileException(MobileErrorCode.SYSTEM_ERROR);
            }
            // Đăng xuất mọi thiết bị khác, cấp lại token (không còn cờ bắt buộc đổi mật khẩu) cho thiết bị hiện tại
            mobileAuthMapper.revokeTokensOfPerson(user.getPersonId(), null);
            userContextService.evict(user.getUsername());
            HrUserInfo refreshed = userContextService.loadActiveUser(user.getUsername());
            log.info("Mobile đổi mật khẩu thành công username={}", user.getUsername());
            return issueTokens(refreshed != null ? refreshed : user, deviceId, IpUtil.getClientIpAddr(request)).response();
        } catch (MobileException e) {
            throw e;
        } catch (Exception e) {
            log.error("Lỗi đổi mật khẩu mobile username={}: {}", user.getUsername(), e.getMessage(), e);
            throw e;
        }
    }

    @Override
    @Transactional(rollbackFor = Exception.class)
    public void registerFcmToken(HrUserInfo user, String deviceId, String fcmToken) {
        try {
            mobileAuthMapper.updateDeviceFcmToken(user.getPersonId(), deviceId, fcmToken);
        } catch (Exception e) {
            log.error("Lỗi lưu FCM token username={}: {}", user.getUsername(), e.getMessage(), e);
            throw e;
        }
    }

    /** Cấp access token + refresh token mới (lưu hash refresh token vào DB). Gọi trong transaction của method public. */
    private IssuedTokens issueTokens(HrUserInfo user, String deviceId, String clientIp) {
        boolean requirePasswordChange = !user.getSyUser().isPasswordEncrypted();
        String refreshToken = jwtService.generateRefreshToken();

        MobileRefreshTokenDto record = new MobileRefreshTokenDto();
        record.setTokenNo(mobileAuthMapper.selectNextRefreshTokenNo());
        record.setTokenHash(jwtService.hashToken(refreshToken));
        record.setUserName(user.getUsername());
        record.setPersonId(user.getPersonId());
        record.setCompanyId(user.getCpnyId());
        record.setDeviceId(deviceId);
        record.setExpireDate(LocalDateTime.now().plusDays(jwtService.getRefreshTokenDays()));
        record.setClientIp(clientIp);
        mobileAuthMapper.insertRefreshToken(record);

        MobileTokenResponse resp = new MobileTokenResponse();
        resp.setAccessToken(jwtService.createAccessToken(user, deviceId, requirePasswordChange));
        resp.setExpiresIn(jwtService.getAccessTokenSeconds());
        resp.setRefreshToken(refreshToken);
        resp.setRequirePasswordChange(requirePasswordChange);
        resp.setUser(MobileUserDto.from(user));
        return new IssuedTokens(resp, record.getTokenNo());
    }

    private record IssuedTokens(MobileTokenResponse response, Long tokenNo) {
    }
}
