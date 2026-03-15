package com.ait.sy.syRole.controller;

import com.ait.sy.syRole.dto.SyUserDto;
import com.ait.sy.syRole.service.SyUserService;
import com.ait.sy.sys.service.HrAuthenticationService.HrUserInfo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import jakarta.servlet.http.HttpSession;

@Controller
public class SyUserController {

    @Autowired
    private SyUserService syUserService;

    @GetMapping("/sys/syRole/viewLoginUser")
    public String viewLoginUser(Model model, HttpSession session) {
        if (!isAdmin(session)) {
            return "error/403";
        }
        model.addAttribute("title", "Quản lý Người dùng");
        return "sys/syRole/viewLoginUser";
    }

    @GetMapping("/sys/api/user/list")
    @ResponseBody
    public List<SyUserDto> list(@RequestParam(required = false) String keyword, HttpSession session) {
        if (!isAdmin(session)) {
            return List.of();
        }
        return syUserService.searchUsers(keyword);
    }

    @GetMapping("/sys/api/user/detail")
    @ResponseBody
    public SyUserDto getDetail(@RequestParam String userNo, HttpSession session) {
        if (!isAdmin(session)) {
            return null;
        }
        return syUserService.findByUserNo(userNo);
    }

    @PostMapping("/sys/api/user/saveRelations")
    @ResponseBody
    public Map<String, Object> saveRelations(@RequestBody SyUserDto dto, HttpSession session) {
        Map<String, Object> response = new HashMap<>();
        if (!isAdmin(session)) {
            response.put("success", false);
            response.put("message", "Không có quyền truy cập. Chỉ dành cho Admin.");
            return response;
        }

        try {
            syUserService.saveRelations(dto.getUserNo(), dto.getRoleGroupNos());
            response.put("success", true);
            response.put("message", "Lưu phân quyền thành công!");
        } catch (Exception e) {
            e.printStackTrace();
            response.put("success", false);
            response.put("message", "Lỗi: " + e.getMessage());
        }
        return response;
    }

    @PostMapping("/sys/api/user/resetPassword")
    @ResponseBody
    public Map<String, Object> resetPassword(@RequestParam String userNo, @RequestParam String newPassword,
            HttpSession session) {
        Map<String, Object> response = new HashMap<>();
        if (!isAdmin(session)) {
            response.put("success", false);
            response.put("message", "Không có quyền truy cập. Chỉ dành cho Admin.");
            return response;
        }

        try {
            syUserService.resetPassword(userNo, newPassword);
            response.put("success", true);
            response.put("message", "Cập nhật mật khẩu thành công!");
        } catch (Exception e) {
            e.printStackTrace();
            response.put("success", false);
            response.put("message", "Lỗi: " + e.getMessage());
        }
        return response;
    }

    @GetMapping("/sys/api/user/export")
    public ResponseEntity<byte[]> exportExcel(HttpSession session) {
        if (!isAdmin(session)) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }

        try {
            byte[] fileBytes = syUserService.exportExcel();
            String fileName = URLEncoder.encode("DanhSach_NguoiDung.csv", StandardCharsets.UTF_8.toString());

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(
                    new MediaType("text", "csv", StandardCharsets.UTF_8));
            headers.setContentDispositionFormData("attachment", fileName);

            return new ResponseEntity<>(fileBytes, headers, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private boolean isAdmin(HttpSession session) {
        if (session == null) {
            return false;
        }

        HrUserInfo user = (HrUserInfo) session.getAttribute("currentHrUser");
        if (user == null || user.getSyUser() == null) {
            return false;
        }

        String userType = user.getSyUser().getUserType();
        return "ADMIN".equalsIgnoreCase(userType) || "SYS".equalsIgnoreCase(userType);
    }
}
