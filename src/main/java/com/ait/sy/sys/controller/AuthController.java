package com.ait.sy.sys.controller;

import com.ait.sy.basicMaintenance.model.SyMenu;
import com.ait.sy.sys.service.PermissionService;
import com.ait.sy.sys.service.HrAuthenticationService.HrUserInfo;
import com.ait.sy.sys.service.PermissionService.UserPermissionInfo;
import com.ait.sy.sys.service.impl.HrAuthenticationServiceImpl;
import com.ait.util.CsrfUtil;
import com.ait.util.IpUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import java.util.List;

/**
 * AuthController - Controller xử lý đăng nhập và xác thực
 */
@Controller
public class AuthController {

    private static final Logger log = LoggerFactory.getLogger(AuthController.class);

    @Autowired
    private HrAuthenticationServiceImpl hrAuthenticationServiceImpl;

    @Autowired
    private PermissionService permissionService;

    @Autowired
    private CsrfUtil csrfUtil;

    /**
     * Hiển thị trang đăng nhập (main route)
     */
    @GetMapping("/login")
    public String loginPage(Model model, HttpSession session, HttpServletRequest request) {
        // Kiểm tra user đã đăng nhập chưa
        HrUserInfo currentHrUser = (HrUserInfo) session.getAttribute("currentHrUser");
        if (currentHrUser != null) {
            return "redirect:/dashboard";
        }

        // Tạo CSRF token
        csrfUtil.saveCsrfToken(session);
        String csrfToken = csrfUtil.getCsrfToken(session);

        // Thêm thông tin rate limiting
        int remainingAttempts = hrAuthenticationServiceImpl.getRemainingLoginAttempts(request);
        long timeUntilReset = hrAuthenticationServiceImpl.getTimeUntilRateLimitReset(request);

        model.addAttribute("title", "Đăng nhập - HR System");
        model.addAttribute("csrfToken", csrfToken);
        model.addAttribute("remainingAttempts", remainingAttempts);
        model.addAttribute("timeUntilReset", timeUntilReset);

        return "login/login";
    }

    /**
     * Hiển thị trang đăng nhập (alternative route)
     */
    @GetMapping("/auth/login")
    public String authLoginPage(Model model, HttpSession session, HttpServletRequest request) {
        // Kiểm tra user đã đăng nhập chưa
        HrUserInfo currentHrUser = (HrUserInfo) session.getAttribute("currentHrUser");
        if (currentHrUser != null) {
            return "redirect:/dashboard";
        }

        // Tạo CSRF token
        csrfUtil.saveCsrfToken(session);
        String csrfToken = csrfUtil.getCsrfToken(session);

        // Thêm thông tin rate limiting
        int remainingAttempts = hrAuthenticationServiceImpl.getRemainingLoginAttempts(request);
        long timeUntilReset = hrAuthenticationServiceImpl.getTimeUntilRateLimitReset(request);

        model.addAttribute("title", "Đăng nhập - HR System");
        model.addAttribute("csrfToken", csrfToken);
        model.addAttribute("remainingAttempts", remainingAttempts);
        model.addAttribute("timeUntilReset", timeUntilReset);

        return "login/login";
    }

    /**
     * Xử lý đăng nhập với HR system (3 bảng) - Đã được bảo mật
     */
    @PostMapping("/login")
    public String login(@RequestParam String username,
            @RequestParam String password,
            @RequestParam(name = "lang", required = false) String lang,
            @RequestParam(required = false) String csrfToken,
            HttpServletRequest request,
            HttpSession session,
            Model model,
            RedirectAttributes redirectAttributes) {

        try {
            // Kiểm tra CSRF token
            String sessionCsrf = csrfUtil.getCsrfToken(session);
            if (sessionCsrf == null || !sessionCsrf.equals(csrfToken)) {
                log.warn("CSRF token mismatch for login attempt from IP: {}", IpUtil.getClientIpAddr(request));
                model.addAttribute("error", "Phiên làm việc không hợp lệ. Vui lòng thử lại.");
                csrfUtil.saveCsrfToken(session);
                model.addAttribute("csrfToken", csrfUtil.getCsrfToken(session));
                return "login/login";
            }

            // Validate input
            if (username == null || username.trim().isEmpty()) {
                model.addAttribute("error", "Vui lòng nhập tên đăng nhập");
                model.addAttribute("csrfToken", csrfUtil.getCsrfToken(session));
                return "login/login";
            }

            if (password == null || password.trim().isEmpty()) {
                model.addAttribute("error", "Vui lòng nhập mật khẩu");
                model.addAttribute("csrfToken", csrfUtil.getCsrfToken(session));
                return "login/login";
            }

            // Xác thực user với HR system (3 bảng) - với bảo mật nâng cao
            HrUserInfo hrUserInfo = hrAuthenticationServiceImpl.authenticate(username.trim(), password, request,
                    session);

            if (hrUserInfo != null && hrUserInfo.isActive()) {
                // Đăng nhập thành công
                request.changeSessionId();
                session.setAttribute("currentHrUser", hrUserInfo);
                session.setAttribute("isLoggedIn", true);

                // Lưu ngôn ngữ đã chọn vào session (nếu có)
                if (lang != null && !lang.trim().isEmpty()) {
                    session.setAttribute("language", lang.trim());
                }

                // Lưu địa chỉ IP của client vào session
                String clientIp = IpUtil.getClientIpAddr(request);
                session.setAttribute("adminIP", clientIp);

                // Lưu ID cá nhân (PERSON_ID) vào session làm adminID
                String personId = hrUserInfo.getPersonId();
                session.setAttribute("adminID", personId);

                // Lưu Company ID (CPNY_ID) vào session
                String cpnyId = hrUserInfo.getSyUser().getCpnyId();
                session.setAttribute("cpnyId", cpnyId);

                // Lấy thông tin phân quyền đầy đủ
                UserPermissionInfo permissionInfo = permissionService
                        .getUserPermissionInfo(hrUserInfo.getSyUser().getUserNo());
                session.setAttribute("currentPermissionInfo", permissionInfo);

                // Debug logging đã được xóa để tránh log object

                String employeeName = hrUserInfo.getEmployeeName();
                String welcomeMessage = employeeName != null && !employeeName.trim().isEmpty()
                        ? "Đăng nhập thành công! Chào mừng " + employeeName
                        : "Đăng nhập thành công! Chào mừng " + hrUserInfo.getUsername();
                redirectAttributes.addFlashAttribute("success", welcomeMessage);

                return "redirect:/dashboard";
            } else {
                // Đăng nhập thất bại
                int remainingAttempts = hrAuthenticationServiceImpl.getRemainingLoginAttempts(request);
                long timeUntilReset = hrAuthenticationServiceImpl.getTimeUntilRateLimitReset(request);

                String errorMessage = "Tên đăng nhập hoặc mật khẩu không đúng, hoặc tài khoản không có quyền truy cập";
                if (remainingAttempts <= 2) {
                    errorMessage += String.format(". Còn %d lần thử. Sau %d giây mới có thể thử lại.",
                            remainingAttempts, timeUntilReset);
                }

                model.addAttribute("error", errorMessage);
                model.addAttribute("username", username); // Giữ lại username để user không phải nhập lại
                model.addAttribute("csrfToken", csrfUtil.getCsrfToken(session));
                model.addAttribute("remainingAttempts", remainingAttempts);
                model.addAttribute("timeUntilReset", timeUntilReset);
                return "login/login";
            }

        } catch (SecurityException e) {
            // Rate limiting exception
            model.addAttribute("error", e.getMessage());
            model.addAttribute("username", username);
            model.addAttribute("csrfToken", csrfUtil.getCsrfToken(session));
            return "login/login";
        } catch (Exception e) {
            log.error("Login error for user [{}]: {}", username, e.getMessage(), e);
            model.addAttribute("error", "Có lỗi xảy ra. Vui lòng thử lại sau.");
            model.addAttribute("username", username);
            model.addAttribute("csrfToken", csrfUtil.getCsrfToken(session));
            return "login/login";
        }
    }

    /**
     * Trang chủ sau khi đăng nhập
     */
    @GetMapping("/home")
    public String homePage(Model model, HttpSession session) {
        // Lấy thông tin user từ session (đã được kiểm tra bởi interceptor)
        HrUserInfo currentHrUser = (HrUserInfo) session.getAttribute("currentHrUser");
        UserPermissionInfo permissionInfo = (UserPermissionInfo) session.getAttribute("currentPermissionInfo");

        // Thêm thông tin user vào model
        model.addAttribute("currentHrUser", currentHrUser);
        model.addAttribute("permissionInfo", permissionInfo);
        model.addAttribute("title", "Trang chủ - HR System");
        model.addAttribute("message", "Chào mừng " + currentHrUser.getEmployeeName() + " đến với hệ thống HR!");

        return "login/home";
    }

    /**
     * Đăng xuất
     */
    @GetMapping("/logout")
    public String logout(HttpSession session, RedirectAttributes redirectAttributes) {
        // Xóa session
        session.removeAttribute("currentHrUser");
        session.removeAttribute("currentPermissionInfo");
        session.removeAttribute("isLoggedIn");
        session.invalidate();

        redirectAttributes.addFlashAttribute("success", "Đăng xuất thành công!");
        return "redirect:/login";
    }

    /**
     * Trang thông tin cá nhân
     */
    @GetMapping("/profile")
    public String profilePage(Model model, HttpSession session) {
        // Lấy thông tin user từ session (đã được kiểm tra bởi interceptor)
        HrUserInfo currentHrUser = (HrUserInfo) session.getAttribute("currentHrUser");
        UserPermissionInfo permissionInfo = (UserPermissionInfo) session.getAttribute("currentPermissionInfo");

        model.addAttribute("currentHrUser", currentHrUser);
        model.addAttribute("permissionInfo", permissionInfo);
        model.addAttribute("title", "Thông tin cá nhân");

        return "login/profile";
    }

    /**
     * Trang quản lý phân quyền (chỉ admin)
     */
    @GetMapping("/permissions")
    public String permissionsPage(Model model, HttpSession session) {
        // Lấy thông tin user từ session (đã được kiểm tra bởi interceptor)
        HrUserInfo currentHrUser = (HrUserInfo) session.getAttribute("currentHrUser");
        UserPermissionInfo permissionInfo = (UserPermissionInfo) session.getAttribute("currentPermissionInfo");

        // Kiểm tra quyền admin
        if (!permissionInfo.isAdmin()) {
            model.addAttribute("error", "Bạn không có quyền truy cập trang này");
            return "error/403";
        }

        model.addAttribute("currentHrUser", currentHrUser);
        model.addAttribute("permissionInfo", permissionInfo);
        model.addAttribute("title", "Quản lý phân quyền");

        return "admin/permissions";
    }

    /**
     * API lấy menu tree cho user
     */
    /**
     * API lấy menu tree cho user
     */
    @GetMapping("/api/menu-tree")
    @ResponseBody
    public List<SyMenu> getMenuTree(HttpSession session) {
        // Lấy thông tin user từ session (đã được kiểm tra bởi interceptor)
        HrUserInfo currentHrUser = (HrUserInfo) session.getAttribute("currentHrUser");
        return permissionService.getUserMenuTree(currentHrUser.getSyUser().getUserNo());
    }
}
