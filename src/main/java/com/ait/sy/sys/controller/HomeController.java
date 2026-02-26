package com.ait.sy.sys.controller;

import com.ait.sy.sys.dto.MenuDTO;
import com.ait.sy.sys.service.MenuService;
import com.ait.sy.sys.service.HrAuthenticationService.HrUserInfo;
import com.ait.sy.sys.service.PermissionService.UserPermissionInfo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import jakarta.servlet.http.HttpSession;
import java.util.List;

/**
 * HomeController - Controller xử lý navigation và trang chủ
 */
@Controller
public class HomeController {

    @Autowired
    private MenuService menuService;

    @Autowired
    private com.ait.hrm.contract.service.HrContractService hrContractService;

    /**
     * Trang chủ - redirect dựa trên trạng thái đăng nhập
     */
    @GetMapping("/")
    public String home(Model model, HttpSession session) {
        // Kiểm tra user đã đăng nhập chưa
        HrUserInfo currentHrUser = (HrUserInfo) session.getAttribute("currentHrUser");
        if (currentHrUser != null) {
            return "redirect:/dashboard";
        }

        // Redirect đến trang login
        return "redirect:/login";
    }

    /**
     * Trang dashboard chính
     */
    @GetMapping("/dashboard")
    public String dashboard(Model model, HttpSession session) {
        // Lấy thông tin user từ session (đã được kiểm tra bởi interceptor)
        HrUserInfo currentHrUser = (HrUserInfo) session.getAttribute("currentHrUser");
        UserPermissionInfo permissionInfo = (UserPermissionInfo) session.getAttribute("currentPermissionInfo");

        // Lấy menu theo quyền của user
        List<MenuDTO> userMenus = menuService.getMenusByUserPermission(currentHrUser.getSyUser().getUserNo());

        // Lấy số lượng hợp đồng sắp hết hạn trong 7 ngày
        int expiringContractsCount = hrContractService.countExpiringContracts(7);

        model.addAttribute("currentHrUser", currentHrUser);
        model.addAttribute("permissionInfo", permissionInfo);
        model.addAttribute("userMenus", userMenus);
        model.addAttribute("title", "Dashboard - HR System");
        model.addAttribute("message", "Chào mừng " + currentHrUser.getEmployeeName() + " đến với hệ thống HR!");
        model.addAttribute("expiringContractsCount", expiringContractsCount);

        return "login/dashboard";
    }

}
