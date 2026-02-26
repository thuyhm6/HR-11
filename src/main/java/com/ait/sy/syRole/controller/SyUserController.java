package com.ait.sy.syRole.controller;

import com.ait.sy.syRole.dto.SyUserDto;
import com.ait.sy.syRole.service.SyUserService;

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

@Controller
public class SyUserController {

    @Autowired
    private SyUserService syUserService;

    @GetMapping("/sys/syRole/viewLoginUser")
    public String viewLoginUser(Model model) {
        model.addAttribute("title", "Quản lý Người dùng");
        return "sys/syRole/viewLoginUser";
    }

    @GetMapping("/sys/api/user/list")
    @ResponseBody
    public List<SyUserDto> list(@RequestParam(required = false) String keyword) {
        return syUserService.searchUsers(keyword);
    }

    @GetMapping("/sys/api/user/detail")
    @ResponseBody
    public SyUserDto getDetail(@RequestParam String userNo) {
        return syUserService.findByUserNo(userNo);
    }

    @PostMapping("/sys/api/user/saveRelations")
    @ResponseBody
    public Map<String, Object> saveRelations(@RequestBody SyUserDto dto) {
        Map<String, Object> response = new HashMap<>();
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
    public Map<String, Object> resetPassword(@RequestParam String userNo, @RequestParam String newPassword) {
        Map<String, Object> response = new HashMap<>();
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
    public ResponseEntity<byte[]> exportExcel() {
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
}
