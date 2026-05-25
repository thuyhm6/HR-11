package com.ait.sy.sys.controller;

import com.ait.hrm.empinfo.dto.EmpMonthlyStatsDto;
import com.ait.hrm.empinfo.service.HrEmployeeService;
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
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * HomeController - Controller xu ly navigation va trang chu
 */
@Controller
public class HomeController {

    @Autowired
    private MenuService menuService;

    @Autowired
    private com.ait.hrm.contract.service.HrContractService hrContractService;

    @Autowired
    private HrEmployeeService hrEmployeeService;

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
     * Trang chu HRM mo trong tab moi voi bo menu SYS_TYPE = 0
     */
    @GetMapping("/sys/hrm")
    public String dashboardSysTypeZero(Model model, HttpSession session) {
        return buildHrmPage(model, session);
    }

    @GetMapping("/sys/viewSysTypeZeroMenuList")
    public String redirectLegacySysTypeZeroPage() {
        return "redirect:/sys/hrm";
    }

    @GetMapping("/hrm/api/empMonthlyStats")
    @ResponseBody
    public List<EmpMonthlyStatsDto> getEmpMonthlyStats() {
        return hrEmployeeService.getEmpMonthlyStats();
    }

    private String buildHrmPage(Model model, HttpSession session) {
        HrUserInfo currentHrUser = (HrUserInfo) session.getAttribute("currentHrUser");
        UserPermissionInfo permissionInfo = (UserPermissionInfo) session.getAttribute("currentPermissionInfo");

        if (currentHrUser == null || currentHrUser.getSyUser() == null) {
            return "redirect:/login";
        }

        List<MenuDTO> userMenus = menuService.getMenusByUserPermissionBySysType(currentHrUser.getSyUser().getUserNo(), "0");
        int expiringContractsCount = hrContractService.countExpiringContracts(7);

        model.addAttribute("currentHrUser", currentHrUser);
        model.addAttribute("permissionInfo", permissionInfo);
        model.addAttribute("userMenus", userMenus);
        model.addAttribute("title", "HR Management System");
        model.addAttribute("message", "Chào mừng " + currentHrUser.getEmployeeName() + " đến với hệ thống HR!");
        model.addAttribute("expiringContractsCount", expiringContractsCount);

        return "login/hrm";
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
