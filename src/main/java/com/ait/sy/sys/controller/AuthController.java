package com.ait.sy.sys.controller;

import com.ait.sy.basicMaintenance.model.SyMenu;
import com.ait.sy.sys.dto.LoginApiRequest;
import com.ait.sy.sys.dto.MenuDTO;
import com.ait.sy.sys.service.MenuService;
import com.ait.sy.sys.service.PasswordUpdateService;
import com.ait.sy.sys.service.PermissionService;
import com.ait.sy.sys.service.HrAuthenticationService.HrUserInfo;
import com.ait.sy.sys.service.PermissionService.UserPermissionInfo;
import com.ait.sy.sys.service.impl.HrAuthenticationServiceImpl;
import com.ait.util.CsrfUtil;
import com.ait.util.I18nUtil;
import com.ait.util.IpUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.support.RequestContextUtils;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.util.Locale;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
    private MenuService menuService;

    @Autowired
    private CsrfUtil csrfUtil;

    @Autowired
    private PasswordUpdateService passwordUpdateService;

    /**
     * Ghi chú: GET /login, GET /auth/login, và POST /login (form Thymeleaf cũ) đã được gỡ bỏ hoàn
     * toàn - path /login giờ KHÔNG còn @Controller nào claim, để AngularSpaConfig fallback đúng về
     * index.html cho MỌI method. (Trước đó chỉ xóa GET nhưng còn sót POST /login, khiến Spring vẫn
     * coi path này "đã có mapping" và trả lỗi 405 cho GET thay vì fallback sang Angular.)
     * Đăng nhập giờ chỉ còn 1 đường: JSON POST /auth/api/login bên dưới (Angular gọi).
     */

    /**
     * Thiết lập session sau khi xác thực thành công - dùng cho JSON POST /auth/api/login (Angular).
     */
    private String applySuccessfulLogin(HrUserInfo hrUserInfo, String lang,
            HttpServletRequest request, HttpServletResponse response, HttpSession session) {
        request.changeSessionId();
        session.setAttribute("currentHrUser", hrUserInfo);
        session.setAttribute("isLoggedIn", true);

        // Lưu ngôn ngữ đã chọn vào session (nếu có)
        if (lang != null && !lang.trim().isEmpty()) {
            session.setAttribute("language", lang.trim());
            // Đồng bộ Spring LocaleResolver để Thymeleaf dùng đúng locale (vi_VN, en_US...)
            // LocaleChangeInterceptor chỉ tạo Locale("vi") không có country code,
            // nên messages_vi_VN.properties sẽ không được tìm thấy nếu không override ở đây.
            Locale locale = I18nUtil.createLocale(lang.trim());
            LocaleResolver localeResolver = RequestContextUtils.getLocaleResolver(request);
            if (localeResolver != null) {
                localeResolver.setLocale(request, response, locale);
            }
        }

        // Lưu địa chỉ IP của client vào session
        String clientIp = IpUtil.getClientIpAddr(request);
        session.setAttribute("adminIP", clientIp);

        // Lưu ID cá nhân (PERSON_ID) vào session làm adminID
        session.setAttribute("adminID", hrUserInfo.getPersonId());

        // Lưu Company ID (CPNY_ID) vào session
        session.setAttribute("cpnyId", hrUserInfo.getSyUser().getCpnyId());

        // Lấy thông tin phân quyền đầy đủ
        UserPermissionInfo permissionInfo = permissionService
                .getUserPermissionInfo(hrUserInfo.getSyUser().getUserNo());
        session.setAttribute("currentPermissionInfo", permissionInfo);
        session.setAttribute("hasSysTypeZeroMenus",
                permissionService.hasRoleGroupWithSysType(hrUserInfo.getSyUser().getUserNo(), 0));

        String employeeName = hrUserInfo.getEmployeeName();
        return employeeName != null && !employeeName.trim().isEmpty()
                ? "Đăng nhập thành công! Chào mừng " + employeeName
                : "Đăng nhập thành công! Chào mừng " + hrUserInfo.getUsername();
    }

    /**
     * API lấy CSRF token dạng JSON - dùng cho Angular SPA (thay vì lấy từ model của trang login/login).
     */
    @GetMapping("/auth/api/csrf-token")
    @ResponseBody
    public Map<String, Object> getCsrfTokenApi(HttpSession session) {
        csrfUtil.saveCsrfToken(session);
        Map<String, Object> resp = new HashMap<>();
        resp.put("csrfToken", csrfUtil.getCsrfToken(session));
        return resp;
    }

    /**
     * API "mồi" CSRF token dạng cookie cho Angular SPA - KHÁC với /auth/api/csrf-token ở trên (endpoint
     * đó dùng cơ chế CsrfUtil riêng lưu trong session, chỉ phục vụ đúng 1 request POST /auth/api/login).
     * Endpoint này thuộc cơ chế Spring Security chuẩn (CookieCsrfTokenRepository, xem SecurityConfig)
     * bảo vệ TẤT CẢ các API ghi dữ liệu còn lại (POST/PUT/DELETE) của toàn bộ Angular SPA.
     *
     * Lý do cần thiết: dù SecurityConfig đã cấu hình CsrfTokenRequestAttributeHandler để resolve token
     * "ngay từ request đầu tiên", trên thực tế cookie XSRF-TOKEN KHÔNG được ghi cho các request GET
     * thông thường (đã kiểm chứng bằng test) - cookie chỉ xuất hiện như tác dụng phụ của chính request
     * ghi dữ liệu ĐẦU TIÊN bị CsrfFilter chặn 403 (vì chưa có cookie để đọc). Hệ quả: mọi thao tác ghi
     * dữ liệu đầu tiên của người dùng sau khi đăng nhập luôn thất bại 403 dù dữ liệu hợp lệ.
     *
     * Cách khắc phục (theo đúng khuyến nghị chính thức của Spring Security cho SPA - xem
     * https://docs.spring.io/spring-security/reference/servlet/exploits/csrf.html#csrf-integration-javascript-spa):
     * khai báo tham số kiểu CsrfToken để Spring MVC (CsrfTokenArgumentResolver) ép resolve/ghi cookie
     * NGAY khi controller này được gọi, không cần đợi request ghi dữ liệu đầu tiên thất bại trước.
     * Angular gọi endpoint này 1 lần ngay sau khi đăng nhập/khôi phục phiên (xem AuthService).
     */
    @GetMapping("/api/csrf-token")
    @ResponseBody
    public Map<String, Object> primeCsrfCookie(CsrfToken csrfToken) {
        Map<String, Object> resp = new HashMap<>();
        resp.put("headerName", csrfToken.getHeaderName());
        resp.put("parameterName", csrfToken.getParameterName());
        return resp;
    }

    /**
     * API kiểm tra phiên đăng nhập hiện tại - dùng cho Angular (route guard, hiển thị thông tin
     * user trên dashboard). Trả 401 nếu chưa đăng nhập thay vì redirect HTML như luồng Thymeleaf cũ.
     */
    @GetMapping("/auth/api/me")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> getCurrentUserApi(HttpSession session) {
        HrUserInfo currentHrUser = (HrUserInfo) session.getAttribute("currentHrUser");
        Map<String, Object> resp = new HashMap<>();
        if (currentHrUser == null) {
            resp.put("authenticated", false);
            return ResponseEntity.status(401).body(resp);
        }
        resp.put("authenticated", true);
        resp.put("username", currentHrUser.getUsername());
        resp.put("personId", currentHrUser.getPersonId());
        resp.put("employeeName", currentHrUser.getEmployeeName());
        resp.put("deptName", currentHrUser.getDepartmentName());
        resp.put("photoUrl", currentHrUser.getPhotoUrl());
        resp.put("requirePasswordChange", Boolean.TRUE.equals(session.getAttribute("requirePasswordChange")));
        // Dùng để hiện/ẩn menu "HR Management System" trên topbar Angular - tái sử dụng đúng cờ
        // hasSysTypeZeroMenus đã được set ở applySuccessfulLogin/LayoutModelAttributeAdvice.
        resp.put("hasSysTypeZeroMenus", Boolean.TRUE.equals(session.getAttribute("hasSysTypeZeroMenus")));
        return ResponseEntity.ok(resp);
    }

    /**
     * API lấy menu phân cấp theo quyền của user hiện tại - dùng cho sidebar Angular (AppShellComponent).
     * Tái sử dụng nguyên {@link MenuService#getMenusByUserPermissionBySysType}. Mặc định sysType="1"
     * (ESS) - AppShellComponent gọi lại với sysType="0" khi route đang active thuộc khu vực HR
     * Management System (xem AppShellComponent.resolveMenuSysType), để sidebar đổi đúng bộ menu theo
     * SY_ROLE_GROUP.SYS_TYPE của "chế độ" đang xem thay vì luôn cố định menu ESS.
     */
    @GetMapping("/auth/api/menu")
    @ResponseBody
    public ResponseEntity<List<MenuDTO>> getMenuApi(
            @RequestParam(value = "sysType", defaultValue = "1") String sysType,
            HttpSession session) {
        HrUserInfo currentHrUser = (HrUserInfo) session.getAttribute("currentHrUser");
        if (currentHrUser == null || currentHrUser.getSyUser() == null) {
            return ResponseEntity.status(401).build();
        }
        List<MenuDTO> menus = menuService.getMenusByUserPermissionBySysType(currentHrUser.getSyUser().getUserNo(), sysType);
        return ResponseEntity.ok(menus);
    }

    /**
     * API đăng nhập dạng JSON - dùng cho Angular SPA. Tái sử dụng nguyên
     * {@link HrAuthenticationServiceImpl#authenticate} và {@link #applySuccessfulLogin}
     * giống hệt luồng form POST /login, chỉ khác ở định dạng phản hồi (JSON thay vì redirect/view).
     */
    @PostMapping("/auth/api/login")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> apiLogin(
            @RequestBody LoginApiRequest body,
            HttpServletRequest request,
            HttpServletResponse response,
            HttpSession session) {

        Map<String, Object> resp = new HashMap<>();
        String username = body.getUsername();

        if (!csrfUtil.validateCsrfToken(request)) {
            log.warn("CSRF token mismatch for API login attempt from IP: {}", IpUtil.getClientIpAddr(request));
            resp.put("success", false);
            resp.put("message", "Phiên làm việc không hợp lệ. Vui lòng tải lại trang.");
            return ResponseEntity.status(403).body(resp);
        }

        if (username == null || username.trim().isEmpty()) {
            resp.put("success", false);
            resp.put("message", "Vui lòng nhập tên đăng nhập");
            return ResponseEntity.badRequest().body(resp);
        }
        if (body.getPassword() == null || body.getPassword().trim().isEmpty()) {
            resp.put("success", false);
            resp.put("message", "Vui lòng nhập mật khẩu");
            return ResponseEntity.badRequest().body(resp);
        }

        try {
            HrUserInfo hrUserInfo = hrAuthenticationServiceImpl.authenticate(username.trim(), body.getPassword(),
                    request, session);

            if (hrUserInfo != null && hrUserInfo.isActive()) {
                String welcomeMessage = applySuccessfulLogin(hrUserInfo, body.getLang(), request, response, session);
                resp.put("success", true);
                resp.put("message", welcomeMessage);
                resp.put("requirePasswordChange", Boolean.TRUE.equals(session.getAttribute("requirePasswordChange")));
                resp.put("redirectUrl", "/dashboard");
                return ResponseEntity.ok(resp);
            }

            int remainingAttempts = hrAuthenticationServiceImpl.getRemainingLoginAttempts(request);
            long timeUntilReset = hrAuthenticationServiceImpl.getTimeUntilRateLimitReset(request);
            String errorMessage = "Tên đăng nhập hoặc mật khẩu không đúng, hoặc tài khoản không có quyền truy cập";
            if (remainingAttempts <= 2) {
                errorMessage += String.format(". Còn %d lần thử. Sau %d giây mới có thể thử lại.",
                        remainingAttempts, timeUntilReset);
            }
            resp.put("success", false);
            resp.put("message", errorMessage);
            resp.put("remainingAttempts", remainingAttempts);
            resp.put("timeUntilReset", timeUntilReset);
            return ResponseEntity.status(401).body(resp);
        } catch (SecurityException e) {
            resp.put("success", false);
            resp.put("message", "Quá nhiều lần đăng nhập thất bại. Vui lòng thử lại sau.");
            return ResponseEntity.status(429).body(resp);
        } catch (Exception e) {
            log.error("API login error for user [{}]", username, e);
            resp.put("success", false);
            resp.put("message", "Có lỗi xảy ra. Vui lòng thử lại sau.");
            return ResponseEntity.internalServerError().body(resp);
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
        session.removeAttribute("hasSysTypeZeroMenus");
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
    @GetMapping("/api/menu-tree")
    @ResponseBody
    public List<SyMenu> getMenuTree(HttpSession session) {
        // Lấy thông tin user từ session (đã được kiểm tra bởi interceptor)
        HrUserInfo currentHrUser = (HrUserInfo) session.getAttribute("currentHrUser");
        return permissionService.getUserMenuTree(currentHrUser.getSyUser().getUserNo());
    }

    /**
     * API đổi mật khẩu lần đầu (bắt buộc khi mật khẩu chưa mã hóa)
     */
    @PostMapping("/api/change-first-password")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> changeFirstPassword(
            @RequestParam("newPassword") String newPassword,
            @RequestParam("confirmPassword") String confirmPassword,
            HttpSession session) {

        Map<String, Object> resp = new HashMap<>();
        try {
            HrUserInfo currentUser = (HrUserInfo) session.getAttribute("currentHrUser");
            if (currentUser == null) {
                resp.put("success", false);
                resp.put("message", "Hết phiên làm việc, vui lòng đăng nhập lại.");
                return ResponseEntity.status(401).body(resp);
            }

            if (!newPassword.equals(confirmPassword)) {
                resp.put("success", false);
                resp.put("message", "Mật khẩu xác nhận không khớp.");
                return ResponseEntity.badRequest().body(resp);
            }

            if (!passwordUpdateService.isPasswordStrong(newPassword)) {
                resp.put("success", false);
                resp.put("message", "Mật khẩu phải ít nhất 8 ký tự, gồm chữ hoa, chữ thường, số và ký tự đặc biệt.");
                return ResponseEntity.badRequest().body(resp);
            }

            String userNo = currentUser.getSyUser().getUserNo();
            boolean updated = passwordUpdateService.updatePassword(userNo, newPassword);
            if (updated) {
                session.removeAttribute("requirePasswordChange");
                log.info("First-time password changed for userNo={}", userNo);
                resp.put("success", true);
                resp.put("message", "Đổi mật khẩu thành công!");
                return ResponseEntity.ok(resp);
            } else {
                resp.put("success", false);
                resp.put("message", "Không thể cập nhật mật khẩu. Vui lòng thử lại.");
                return ResponseEntity.internalServerError().body(resp);
            }
        } catch (Exception e) {
            log.error("Error changing first password", e);
            resp.put("success", false);
            resp.put("message", "Lỗi hệ thống.");
            return ResponseEntity.internalServerError().body(resp);
        }
    }
}
