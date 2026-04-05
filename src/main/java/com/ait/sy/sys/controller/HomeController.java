package com.ait.sy.sys.controller;

import com.ait.sy.sys.dto.MenuDTO;
import com.ait.sy.sys.service.HrAuthenticationService.HrUserInfo;
import com.ait.sy.sys.service.MenuService;
import com.ait.sy.sys.service.PermissionService.UserPermissionInfo;
import jakarta.servlet.http.HttpSession;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * HomeController - Controller xu ly navigation va trang chu
 */
@Controller
public class HomeController {

    @Autowired
    private MenuService menuService;

    @Autowired
    private com.ait.hrm.contract.service.HrContractService hrContractService;

    /**
     * Trang chu - redirect dua tren trang thai dang nhap
     */
    @GetMapping("/")
    public String home(Model model, HttpSession session) {
        HrUserInfo currentHrUser = (HrUserInfo) session.getAttribute("currentHrUser");
        if (currentHrUser != null) {
            return "redirect:/dashboard";
        }

        return "redirect:/login";
    }

    /**
     * Dashboard mac dinh cua he thong
     */
    @GetMapping("/dashboard")
    public String dashboard(Model model, HttpSession session) {
        return buildDashboardPage(model, session, "1", "Dashboard - HR System");
    }

    /**
     * Dashboard mo trong tab trinh duyet moi voi bo menu SYS_TYPE = 0
     */
    @GetMapping("/sys/hrm")
    public String dashboardSysTypeZero(Model model, HttpSession session) {
        return buildDashboardPage(model, session, "0", "HR Management System");
    }

    @GetMapping("/sys/viewSysTypeZeroMenuList")
    public String redirectLegacySysTypeZeroPage() {
        return "redirect:/sys/hrm";
    }

    private String buildDashboardPage(Model model, HttpSession session, String sysType, String title) {
        HrUserInfo currentHrUser = (HrUserInfo) session.getAttribute("currentHrUser");
        UserPermissionInfo permissionInfo = (UserPermissionInfo) session.getAttribute("currentPermissionInfo");

        if (currentHrUser == null || currentHrUser.getSyUser() == null) {
            return "redirect:/login";
        }

        List<MenuDTO> userMenus = menuService.getMenusByUserPermissionBySysType(currentHrUser.getSyUser().getUserNo(),
                sysType);
        int expiringContractsCount = hrContractService.countExpiringContracts(7);

        model.addAttribute("currentHrUser", currentHrUser);
        model.addAttribute("permissionInfo", permissionInfo);
        model.addAttribute("userMenus", userMenus);
        model.addAttribute("title", title);
        model.addAttribute("message", "Chào mừng " + currentHrUser.getEmployeeName() + " đến với hệ thống HR!");
        model.addAttribute("expiringContractsCount", expiringContractsCount);

        return "login/dashboard";
    }
}
