package com.ait.sy.sys.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.ait.sy.sys.service.PasswordUpdateService;
import com.ait.sy.sys.service.PasswordUpdateService.UserPasswordInfo;

import jakarta.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

/**
 * PasswordUpdateController - Controller cho cập nhật mật khẩu
 */
@Controller
@RequestMapping("/password")
public class PasswordUpdateController {

    @Autowired
    private PasswordUpdateService passwordUpdateService;

    /**
     * Hiển thị trang cập nhật mật khẩu
     */
    @GetMapping("/update")
    public String showPasswordUpdatePage(Model model, HttpSession session) {
        try {
            // Lấy thông tin user từ session (nếu có)
            Object currentUser = session.getAttribute("currentHrUser");
            String userNo = null;
            UserPasswordInfo userInfo = null;

            if (currentUser != null) {
                // Nếu đã đăng nhập, lấy thông tin user
                userNo = getCurrentUserNo(session);
                System.out.println("Retrieved userNo from session: " + userNo);

                if (userNo != null) {
                    userInfo = passwordUpdateService.getUserPasswordInfo(userNo);
                    System.out.println("Retrieved userInfo: " + (userInfo != null ? "Success" : "Null"));
                }
            } else {
                // Nếu chưa đăng nhập, tạo thông tin user mặc định
                System.out.println("No currentHrUser in session, showing form without user info");
                userInfo = new UserPasswordInfo();
                userInfo.setUserName("Guest User");
                userInfo.setUserNo("GUEST");
                userInfo.setPasswordEncoded(false);
            }

            if (userInfo != null) {
                model.addAttribute("userInfo", userInfo);
            }

            return "password/update-password";
        } catch (Exception e) {
            System.err.println("Error in showPasswordUpdatePage: " + e.getMessage());
            e.printStackTrace();
            // Vẫn hiển thị trang form ngay cả khi có lỗi
            return "password/update-password";
        }
    }

    /**
     * Xử lý cập nhật mật khẩu
     */
    @PostMapping("/update")
    public String updatePassword(
            @RequestParam("oldPassword") String oldPassword,
            @RequestParam("newPassword") String newPassword,
            @RequestParam("confirmPassword") String confirmPassword,
            @RequestParam("userNo") String userNo,
            HttpSession session,
            RedirectAttributes redirectAttributes) {

        try {
            // Lấy thông tin user từ session hoặc từ form input
            String currentUserNo = null;

            if (session.getAttribute("currentHrUser") != null) {
                // Nếu đã đăng nhập, lấy từ session
                currentUserNo = getCurrentUserNo(session);
            } else if (userNo != null && !userNo.trim().isEmpty()) {
                // Nếu chưa đăng nhập, lấy từ form input
                currentUserNo = userNo.trim();
            }

            if (currentUserNo == null || currentUserNo.isEmpty()) {
                redirectAttributes.addFlashAttribute("error", "Vui lòng nhập mã người dùng");
                return "redirect:/password/update";
            }

            // Validation
            if (oldPassword == null || oldPassword.trim().isEmpty()) {
                redirectAttributes.addFlashAttribute("error", "Vui lòng nhập mật khẩu cũ");
                return "redirect:/password/update";
            }

            if (newPassword == null || newPassword.trim().isEmpty()) {
                redirectAttributes.addFlashAttribute("error", "Vui lòng nhập mật khẩu mới");
                return "redirect:/password/update";
            }

            if (!newPassword.equals(confirmPassword)) {
                redirectAttributes.addFlashAttribute("error", "Mật khẩu mới và xác nhận mật khẩu không khớp");
                return "redirect:/password/update";
            }

            if (!passwordUpdateService.isPasswordStrong(newPassword)) {
                redirectAttributes.addFlashAttribute("error",
                        "Mật khẩu mới phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt");
                return "redirect:/password/update";
            }

            // Kiểm tra mật khẩu cũ
            if (!passwordUpdateService.verifyOldPassword(currentUserNo, oldPassword)) {
                redirectAttributes.addFlashAttribute("error", "Mật khẩu cũ không đúng");
                return "redirect:/password/update";
            }

            // Cập nhật mật khẩu mới
            if (passwordUpdateService.updatePassword(currentUserNo, newPassword)) {
                redirectAttributes.addFlashAttribute("success", "Cập nhật mật khẩu thành công");
                return "redirect:/password/update";
            } else {
                redirectAttributes.addFlashAttribute("error", "Có lỗi xảy ra khi cập nhật mật khẩu");
                return "redirect:/password/update";
            }

        } catch (Exception e) {
            redirectAttributes.addFlashAttribute("error", "Lỗi hệ thống: " + e.getMessage());
            return "redirect:/password/update";
        }
    }

    /**
     * API endpoint để kiểm tra mật khẩu cũ
     */
    @PostMapping("/api/verify-old-password")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> verifyOldPassword(
            @RequestParam("oldPassword") String oldPassword,
            HttpSession session) {

        Map<String, Object> response = new HashMap<>();

        try {
            String userNo = getCurrentUserNo(session);
            if (userNo == null) {
                response.put("success", false);
                response.put("message", "Không tìm thấy thông tin người dùng");
                return ResponseEntity.badRequest().body(response);
            }

            boolean isValid = passwordUpdateService.verifyOldPassword(userNo, oldPassword);
            response.put("success", isValid);
            response.put("message", isValid ? "Mật khẩu cũ đúng" : "Mật khẩu cũ không đúng");

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            response.put("success", false);
            response.put("message", "Lỗi hệ thống: " + e.getMessage());
            return ResponseEntity.internalServerError().body(response);
        }
    }

    /**
     * API endpoint để kiểm tra độ mạnh của mật khẩu
     */
    @PostMapping("/api/check-password-strength")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> checkPasswordStrength(
            @RequestParam("password") String password) {

        Map<String, Object> response = new HashMap<>();

        try {
            boolean isStrong = passwordUpdateService.isPasswordStrong(password);
            response.put("isStrong", isStrong);
            response.put("message", isStrong ? "Mật khẩu đủ mạnh"
                    : "Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt");

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            response.put("isStrong", false);
            response.put("message", "Lỗi kiểm tra mật khẩu: " + e.getMessage());
            return ResponseEntity.internalServerError().body(response);
        }
    }

    /**
     * Lấy userNo từ session
     */
    private String getCurrentUserNo(HttpSession session) {
        try {
            Object currentUser = session.getAttribute("currentHrUser");
            if (currentUser != null) {
                // Lấy userNo từ HrUserInfo.getSyUser().getUserNo()
                try {
                    Object syUser = currentUser.getClass().getMethod("getSyUser").invoke(currentUser);
                    if (syUser != null) {
                        return (String) syUser.getClass().getMethod("getUserNo").invoke(syUser);
                    }
                } catch (Exception e) {
                    // Fallback: lấy từ session attribute
                    return (String) session.getAttribute("userNo");
                }
            }
        } catch (Exception e) {
            // Log error but don't throw exception
            System.err.println("Error getting userNo from session: " + e.getMessage());
        }
        return null;
    }
}
