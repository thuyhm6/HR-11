package com.ait.org.orgManage.controller;

import com.ait.org.orgManage.model.OrgBusinessRelation;
import com.ait.org.orgManage.service.OrgBusinessService;
import com.ait.sy.sys.service.HrAuthenticationService.HrUserInfo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

@Controller
public class OrgBusinessController {

    @Autowired
    private OrgBusinessService orgBusinessService;

    @GetMapping("/org/orgManage/viewOrgBusiness")
    public String viewOrgBusiness(Model model, HttpSession session) {
        HrUserInfo user = (HrUserInfo) session.getAttribute("currentHrUser");
        if (user == null) {
            return "redirect:/login";
        }
        model.addAttribute("currentHrUser", user);
        model.addAttribute("title", "Quản lý nghiệp vụ phòng ban");
        return "org/orgManage/viewOrgBusiness";
    }

    @GetMapping("/org/api/business/list")
    @ResponseBody
    public org.springframework.http.ResponseEntity<?> getList(
            @RequestParam String resumeNo,
            @RequestParam String deptNo,
            HttpSession session) {
        try {
            List<OrgBusinessRelation> list = orgBusinessService.getList(resumeNo, deptNo);
            return org.springframework.http.ResponseEntity.ok(list);
        } catch (Exception e) {
            return org.springframework.http.ResponseEntity.status(500).body(Map.of("error", e.getMessage()));
        }
    }

    @PostMapping("/org/api/business/save")
    @ResponseBody
    public org.springframework.http.ResponseEntity<?> save(
            @RequestBody OrgBusinessRelation obj,
            HttpSession session) {
        try {
            HrUserInfo user = (HrUserInfo) session.getAttribute("currentHrUser");
            if (user != null) {
                if (obj.getSeq() == null) {
                    obj.setCreatedBy(user.getUsername());
                }
                obj.setUpdatedBy(user.getUsername());
            }
            orgBusinessService.save(obj);
            return org.springframework.http.ResponseEntity.ok(Map.of("message", "Lưu thành công"));
        } catch (Exception e) {
            return org.springframework.http.ResponseEntity.status(500).body(Map.of("error", e.getMessage()));
        }
    }

    @PostMapping("/org/api/business/delete")
    @ResponseBody
    public org.springframework.http.ResponseEntity<?> delete(@RequestParam String seq) {
        try {
            orgBusinessService.delete(seq);
            return org.springframework.http.ResponseEntity.ok(Map.of("message", "Xóa thành công"));
        } catch (Exception e) {
            return org.springframework.http.ResponseEntity.status(500).body(Map.of("error", e.getMessage()));
        }
    }
}
