package com.ait.sy.sys.service.impl;

import com.ait.hrm.empinfo.mapper.HrEmployeeMapper;
import com.ait.hrm.empinfo.mapper.HrPersonalInfoMapper;
import com.ait.hrm.empinfo.model.HrEmployee;
import com.ait.hrm.empinfo.model.HrPersonalInfo;
import com.ait.org.orgManage.mapper.HrDepartmentMapper;
import com.ait.org.orgManage.model.HrDepartment;
import com.ait.sy.syRole.mapper.SyUserMapper;
import com.ait.sy.syRole.model.SyUser;
import com.ait.sy.sys.service.HrAuthenticationService;
import com.ait.sy.sys.service.RateLimitingService;
import com.ait.util.CsrfUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

/**
 * HrAuthenticationServiceImpl - Implementation của HrAuthenticationService
 * Xử lý xác thực đăng nhập với 3 bảng: sy_user, hr_employee, hr_department
 */
@Service
@Transactional
public class HrAuthenticationServiceImpl implements HrAuthenticationService {

    private static final Logger logger = LoggerFactory.getLogger(HrAuthenticationServiceImpl.class);

    @Autowired
    private SyUserMapper syUserMapper;

    @Autowired
    private HrEmployeeMapper hrEmployeeMapper;

    @Autowired
    private HrDepartmentMapper hrDepartmentMapper;

    @Autowired
    private HrPersonalInfoMapper hrPersonalInfoMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private RateLimitingService rateLimitingService;

    @Autowired
    private CsrfUtil csrfUtil;

    @Override
    public HrUserInfo authenticate(String username, String password) {
        return authenticate(username, password, null, null);
    }

    /**
     * Xác thực đăng nhập với bảo mật nâng cao
     */
    public HrUserInfo authenticate(String username, String password, HttpServletRequest request, HttpSession session) {
        try {
            // Bước 1: Kiểm tra rate limiting
            String clientIp = getClientIpAddress(request);
            if (!rateLimitingService.isAllowed(clientIp, "login")) {
                logger.warn("Rate limit exceeded for IP: {}", clientIp);
                throw new SecurityException("Quá nhiều lần đăng nhập thất bại. Vui lòng thử lại sau 15 phút.");
            }

            // Bước 2: Validate input
            if (username == null || username.trim().isEmpty()) {
                recordFailedLogin(clientIp, "login");
                throw new IllegalArgumentException("Tên đăng nhập không được để trống");
            }

            if (password == null || password.trim().isEmpty()) {
                recordFailedLogin(clientIp, "login");
                throw new IllegalArgumentException("Mật khẩu không được để trống");
            }

            // Bước 3: Tìm user trong bảng sy_user theo username
            SyUser syUser = syUserMapper.findByUserName(username.trim());
            if (syUser == null) {
                recordFailedLogin(clientIp, "login");
                logger.warn("Login attempt with non-existent username: {}", username);
                return null; // User không tồn tại
            }

            // Bước 4: Kiểm tra trạng thái hoạt động của user
            if (!syUser.isActive()) {
                recordFailedLogin(clientIp, "login");
                logger.warn("Login attempt with inactive user: {}", username);
                return null; // User không hoạt động
            }

            // Bước 5: Kiểm tra mật khẩu với BCrypt
            if (!syUser.matchesPassword(password, passwordEncoder)) {
                recordFailedLogin(clientIp, "login");
                logger.warn("Invalid password for user: {}", username);
                return null; // Mật khẩu không đúng
            }

            // Bước 6: Tìm thông tin nhân viên theo PERSON_ID
            HrEmployee hrEmployee = hrEmployeeMapper.findByPersonId(syUser.getPersonId());
            if (hrEmployee == null) {
                recordFailedLogin(clientIp, "login");
                logger.warn("No employee found for user: {}", username);
                return null; // Không tìm thấy thông tin nhân viên
            }

            // Bước 7: Kiểm tra trạng thái hoạt động của nhân viên
            if (!hrEmployee.isActive()) {
                recordFailedLogin(clientIp, "login");
                logger.warn("Inactive employee for user: {}", username);
                return null; // Nhân viên không hoạt động
            }

            HrPersonalInfo hrPersonalInfo = hrPersonalInfoMapper.findByPersonId(syUser.getPersonId());
            if (hrPersonalInfo == null) {
                recordFailedLogin(clientIp, "login");
                logger.warn("No personal info found for user: {}", username);
                return null; // Không tìm thấy thông tin nhân viên
            }

            // Bước 8: Tìm thông tin phòng ban theo DEPTNO
            HrDepartment hrDepartment = hrDepartmentMapper.findByDeptNo(hrEmployee.getDeptNo());
            if (hrDepartment == null) {
                recordFailedLogin(clientIp, "login");
                logger.warn("No department found for user: {}", username);
                return null; // Không tìm thấy thông tin phòng ban
            }

            // Bước 9: Kiểm tra trạng thái hoạt động của phòng ban
            if (!hrDepartment.isActive()) {
                recordFailedLogin(clientIp, "login");
                logger.warn("Inactive department for user: {}", username);
                return null; // Phòng ban không hoạt động
            }

            // Bước 10: Cập nhật thời gian đăng nhập cuối
            syUserMapper.updateLastLogin(syUser.getUserNo());

            // Bước 11: Tạo CSRF token cho session
            if (session != null) {
                csrfUtil.saveCsrfToken(session);
            }

            // Bước 12: Reset rate limit cho IP thành công
            rateLimitingService.resetRateLimit(clientIp, "login");

            // Bước 13: Log thành công
            logger.info("Successful login for user: {} from IP: {}", username, clientIp);

            // Bước 14: Tạo và trả về thông tin user đầy đủ
            return new HrUserInfo(syUser, hrEmployee, hrDepartment, hrPersonalInfo);

        } catch (Exception e) {
            throw new RuntimeException("Lỗi xác thực đăng nhập: " + e.getMessage(), e);
        }
    }

    @Override
    public HrUserInfo findByUsername(String username) {
        try {
            // Tìm user theo username
            SyUser syUser = syUserMapper.findByUserName(username);
            if (syUser == null) {
                return null;
            }

            // Tìm thông tin nhân viên
            HrEmployee hrEmployee = hrEmployeeMapper.findByPersonId(syUser.getPersonId());
            if (hrEmployee == null) {
                return null;
            }

            HrPersonalInfo hrPersonalInfo = hrPersonalInfoMapper.findByPersonId(syUser.getPersonId());
            if (hrPersonalInfo == null) {
                return null; // Không tìm thấy thông tin nhân viên
            }

            // Tìm thông tin phòng ban
            HrDepartment hrDepartment = hrDepartmentMapper.findByDeptNo(hrEmployee.getDeptNo());
            if (hrDepartment == null) {
                return null;
            }

            return new HrUserInfo(syUser, hrEmployee, hrDepartment, hrPersonalInfo);

        } catch (Exception e) {
            throw new RuntimeException("Lỗi tìm thông tin user: " + e.getMessage(), e);
        }
    }

    @Override
    public HrUserInfo findByPersonId(String personId) {
        try {
            // Tìm user theo personId
            SyUser syUser = syUserMapper.findByPersonId(personId);
            if (syUser == null) {
                return null;
            }

            // Tìm thông tin nhân viên
            HrEmployee hrEmployee = hrEmployeeMapper.findByPersonId(personId);
            if (hrEmployee == null) {
                return null;
            }

            HrPersonalInfo hrPersonalInfo = hrPersonalInfoMapper.findByPersonId(syUser.getPersonId());
            if (hrPersonalInfo == null) {
                return null; // Không tìm thấy thông tin nhân viên
            }

            // Tìm thông tin phòng ban
            HrDepartment hrDepartment = hrDepartmentMapper.findByDeptNo(hrEmployee.getDeptNo());
            if (hrDepartment == null) {
                return null;
            }

            return new HrUserInfo(syUser, hrEmployee, hrDepartment, hrPersonalInfo);

        } catch (Exception e) {
            throw new RuntimeException("Lỗi tìm thông tin user theo personId: " + e.getMessage(), e);
        }
    }

    @Override
    public boolean updateLastLogin(String userNo) {
        try {
            int result = syUserMapper.updateLastLogin(userNo);
            return result > 0;
        } catch (Exception e) {
            throw new RuntimeException("Lỗi cập nhật thời gian đăng nhập: " + e.getMessage(), e);
        }
    }

    @Override
    public boolean existsByUsername(String username) {
        try {
            return syUserMapper.existsByUserName(username);
        } catch (Exception e) {
            throw new RuntimeException("Lỗi kiểm tra username: " + e.getMessage(), e);
        }
    }

    /**
     * Ghi nhận login thất bại
     */
    private void recordFailedLogin(String clientIp, String operation) {
        rateLimitingService.recordRequest(clientIp, operation);
    }

    /**
     * Lấy IP address của client
     */
    private String getClientIpAddress(HttpServletRequest request) {
        if (request == null) {
            return "unknown";
        }

        String xForwardedFor = request.getHeader("X-Forwarded-For");
        if (xForwardedFor != null && !xForwardedFor.isEmpty()) {
            return xForwardedFor.split(",")[0].trim();
        }

        String xRealIp = request.getHeader("X-Real-IP");
        if (xRealIp != null && !xRealIp.isEmpty()) {
            return xRealIp;
        }

        return request.getRemoteAddr();
    }

    /**
     * Kiểm tra CSRF token
     */
    public boolean validateCsrfToken(HttpServletRequest request) {
        return csrfUtil.validateCsrfToken(request);
    }

    /**
     * Lấy thông tin rate limiting
     */
    public int getRemainingLoginAttempts(HttpServletRequest request) {
        String clientIp = getClientIpAddress(request);
        return rateLimitingService.getRemainingAttempts(clientIp, "login");
    }

    /**
     * Lấy thời gian còn lại cho rate limiting
     */
    public long getTimeUntilRateLimitReset(HttpServletRequest request) {
        String clientIp = getClientIpAddress(request);
        return rateLimitingService.getTimeUntilReset(clientIp, "login");
    }
}
