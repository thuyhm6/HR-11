package com.ait.mobile.security;

import com.ait.sy.sys.service.HrAuthenticationService.HrUserInfo;
import com.ait.sy.sys.service.impl.HrAuthenticationServiceImpl;
import com.github.benmanes.caffeine.cache.Cache;
import com.github.benmanes.caffeine.cache.Caffeine;
import java.time.Duration;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Nạp {@link HrUserInfo} cho request mobile theo username trong JWT.
 * Cache ngắn (5 phút) để không phải truy vấn 4 bảng (SY_USER, HR_EMPLOYEE, HR_PERSONAL_INFO, HR_DEPARTMENT)
 * ở mỗi request; đồng thời đảm bảo tài khoản bị khóa / nghỉ việc mất quyền truy cập trong tối đa 5 phút.
 */
@Service
public class MobileUserContextService {

    private static final Logger log = LoggerFactory.getLogger(MobileUserContextService.class);

    private final Cache<String, HrUserInfo> userCache = Caffeine.newBuilder()
            .maximumSize(5000)
            .expireAfterWrite(Duration.ofMinutes(5))
            .build();

    @Autowired
    private HrAuthenticationServiceImpl hrAuthenticationService;

    /** @return thông tin user nếu còn hoạt động, ngược lại {@code null}. */
    public HrUserInfo loadActiveUser(String username) {
        if (username == null || username.isBlank()) {
            return null;
        }
        HrUserInfo cached = userCache.getIfPresent(username);
        if (cached != null) {
            return cached;
        }
        try {
            HrUserInfo user = hrAuthenticationService.findByUsername(username);
            if (!isActive(user)) {
                log.warn("Mobile user không còn hoạt động username={}", username);
                return null;
            }
            userCache.put(username, user);
            return user;
        } catch (Exception e) {
            log.error("Lỗi nạp thông tin user mobile username={}: {}", username, e.getMessage(), e);
            return null;
        }
    }

    public void evict(String username) {
        if (username != null) {
            userCache.invalidate(username);
        }
    }

    public static boolean isActive(HrUserInfo user) {
        return user != null
                && user.getSyUser() != null && user.getSyUser().isActive()
                && user.getHrEmployee() != null && user.getHrEmployee().isActive()
                && user.getHrDepartment() != null && user.getHrDepartment().isActive();
    }
}
