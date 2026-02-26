package com.ait.org.orgManage.controller;

import com.ait.org.orgManage.model.OrgEmployee;
import com.ait.org.orgManage.model.OrgInfo;
import com.ait.org.orgManage.service.OrgStructureService;
import com.ait.sy.sys.service.HrAuthenticationService.HrUserInfo;

import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/org")
public class OrgComposeController {

    @Autowired
    private OrgStructureService orgStructureService;

    @GetMapping("/orgManage/viewComposeOrg")
    public String viewComposeOrg(Model model, HttpSession session) {
        HrUserInfo currentHrUser = getAuthenticatedUser(session);
        model.addAttribute("currentHrUser", currentHrUser);
        return "org/orgManage/viewComposeOrg";
    }

    @GetMapping("/orgManage/viewHistoryOrgInfo")
    public String viewHistoryOrgInfo(Model model, HttpSession session) {
        HrUserInfo currentHrUser = getAuthenticatedUser(session);
        model.addAttribute("currentHrUser", currentHrUser);
        return "org/orgManage/viewHistoryOrgInfo";
    }

    @GetMapping("/api/compose/structure")
    @ResponseBody
    public ResponseEntity<List<OrgInfo>> getOrgStructure(@RequestParam String resumeNo, HttpSession session) {
        try {
            getAuthenticatedUser(session);
            List<OrgInfo> list = orgStructureService.getOrgStructure(resumeNo);
            return ResponseEntity.ok(list);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @GetMapping("/api/compose/orgDetail")
    @ResponseBody
    public ResponseEntity<?> getOrgDetail(@RequestParam String resumeNo, @RequestParam String deptNo,
            HttpSession session) {
        try {
            getAuthenticatedUser(session);
            OrgInfo info = orgStructureService.getOrgDetail(resumeNo, deptNo);
            return ResponseEntity.ok(info);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("error", e.getMessage()));
        }
    }

    @GetMapping("/api/compose/employees")
    @ResponseBody
    public ResponseEntity<List<OrgEmployee>> getEmployees(@RequestParam String resumeNo, @RequestParam String deptNo,
            HttpSession session) {
        try {
            getAuthenticatedUser(session);
            List<OrgEmployee> list = orgStructureService.getEmployeesByDept(resumeNo, deptNo);
            return ResponseEntity.ok(list);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @org.springframework.web.bind.annotation.PostMapping("/api/compose/save")
    @ResponseBody
    public ResponseEntity<?> saveOrgInfo(@org.springframework.web.bind.annotation.RequestBody OrgInfo orgInfo,
            @RequestParam boolean isNew, HttpSession session) {
        try {
            getAuthenticatedUser(session);
            orgStructureService.saveOrgInfo(orgInfo, isNew);
            return ResponseEntity.ok(Map.of("message", "Lưu thành công"));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("error", e.getMessage()));
        }
    }

    @org.springframework.web.bind.annotation.PostMapping("/api/compose/delete")
    @ResponseBody
    public ResponseEntity<?> deleteOrgInfo(@RequestParam String resumeNo, @RequestParam String deptNo,
            HttpSession session) {
        try {
            getAuthenticatedUser(session);
            orgStructureService.deleteOrgInfo(resumeNo, deptNo);
            return ResponseEntity.ok(Map.of("message", "Xóa thành công"));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("error", e.getMessage()));
        }
    }

    @org.springframework.web.bind.annotation.PostMapping("/api/compose/transfer")
    @ResponseBody
    public ResponseEntity<?> transferEmployees(
            @org.springframework.web.bind.annotation.RequestBody Map<String, Object> payload,
            HttpSession session) {
        try {
            getAuthenticatedUser(session);
            String resumeNo = (String) payload.get("resumeNo");
            String targetDeptNo = (String) payload.get("targetDeptNo");
            List<String> empIds = (List<String>) payload.get("empIds");

            orgStructureService.transferEmployees(resumeNo, targetDeptNo, empIds);
            return ResponseEntity.ok(Map.of("message", "Điều chuyển thành công"));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("error", e.getMessage()));
        }
    }

    @GetMapping("/orgManage/viewDeptManagerCheck")
    public String viewDeptManagerCheck(Model model, HttpSession session) {
        HrUserInfo currentHrUser = getAuthenticatedUser(session);
        model.addAttribute("currentHrUser", currentHrUser);
        model.addAttribute("title", "Kiểm tra trưởng bộ phận");
        return "org/orgManage/viewDeptManagerCheck";
    }

    @GetMapping("/api/compose/manager-check")
    @ResponseBody
    public ResponseEntity<List<Map<String, Object>>> getDeptManagerCheckList(@RequestParam String resumeNo,
            HttpSession session) {
        try {
            getAuthenticatedUser(session);
            List<Map<String, Object>> list = orgStructureService.getDeptManagerCheckList(resumeNo);
            return ResponseEntity.ok(list);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    @org.springframework.web.bind.annotation.PostMapping("/api/compose/updateManager")
    @ResponseBody
    public ResponseEntity<?> updateOrgManager(
            @org.springframework.web.bind.annotation.RequestBody Map<String, Object> payload,
            HttpSession session) {
        try {
            getAuthenticatedUser(session);
            String resumeNo = (String) payload.get("resumeNo");
            String deptNo = (String) payload.get("deptNo");
            String managerEmpId = (String) payload.get("managerEmpId");
            String isPartTime = (String) payload.get("isPartTime");

            orgStructureService.updateOrgManager(resumeNo, deptNo, managerEmpId, isPartTime);
            return ResponseEntity.ok(Map.of("message", "Cập nhật thành công"));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("error", e.getMessage()));
        }
    }

    private HrUserInfo getAuthenticatedUser(HttpSession session) {
        HrUserInfo user = (HrUserInfo) session.getAttribute("currentHrUser");
        if (user == null) {
            throw new RuntimeException("Chưa đăng nhập");
        }
        return user;
    }
}
