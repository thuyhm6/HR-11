package com.ait.org.orgManage.controller;

import com.ait.org.orgManage.model.OrgCostCenter;
import com.ait.org.orgManage.service.OrgCostCenterService;
import com.ait.sy.sys.service.HrAuthenticationService.HrUserInfo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

@Controller
public class OrgCostCenterController {

    @Autowired
    private OrgCostCenterService service;

    @GetMapping("/org/orgManage/viewOrgCostCenter")
    public String viewOrgCostCenter(Model model, HttpSession session) {
        HrUserInfo user = (HrUserInfo) session.getAttribute("currentHrUser");
        if (user == null) {
            return "redirect:/login";
        }
        model.addAttribute("currentHrUser", user);
        model.addAttribute("title", "Quản lý trung tâm chi phí");
        return "org/orgManage/viewOrgCostCenter";
    }

    @PostMapping("/org/api/costCenter/list")
    @ResponseBody
    public org.springframework.http.ResponseEntity<?> getList(@RequestBody Map<String, String> payload) {
        try {
            String codeNo = payload.get("codeNo");
            String codeName = payload.get("codeName");
            List<OrgCostCenter> list = service.getList(codeNo, codeName);
            return org.springframework.http.ResponseEntity.ok(Map.of("data", list));
        } catch (Exception e) {
            e.printStackTrace();
            return org.springframework.http.ResponseEntity.status(500).body(Map.of("error", e.getMessage()));
        }
    }

    @PostMapping("/org/api/costCenter/save")
    @ResponseBody
    public org.springframework.http.ResponseEntity<?> save(
            @RequestBody OrgCostCenter obj, HttpSession session) {
        try {
            HrUserInfo user = (HrUserInfo) session.getAttribute("currentHrUser");
            if (user != null) {
                if (obj.getSeq() == null || obj.getSeq().isEmpty()) {
                    obj.setCreatedBy(user.getUsername());
                    // obj.setCreatedIp(user.getIpAddress());
                }
                obj.setUpdatedBy(user.getUsername());
                // obj.setUpdatedIp(user.getIpAddress());
            }
            service.save(obj);
            return org.springframework.http.ResponseEntity.ok(Map.of("message", "Lưu thành công"));
        } catch (Exception e) {
            return org.springframework.http.ResponseEntity.status(500).body(Map.of("error", e.getMessage()));
        }
    }

    @PostMapping("/org/api/costCenter/delete")
    @ResponseBody
    public org.springframework.http.ResponseEntity<?> delete(@RequestParam String seq) {
        try {
            service.delete(seq);
            return org.springframework.http.ResponseEntity.ok(Map.of("message", "Xóa thành công"));
        } catch (Exception e) {
            return org.springframework.http.ResponseEntity.status(500).body(Map.of("error", e.getMessage()));
        }
    }
}
