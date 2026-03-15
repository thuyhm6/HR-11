package com.ait.sy.sys.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ait.sy.sys.service.HrAuthenticationService.HrUserInfo;
import com.ait.sy.sys.service.PasswordMigrationService;

import jakarta.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

/**
 * PasswordMigrationController - REST API cho password migration
 * WARNING: Chỉ sử dụng trong môi trường development hoặc với quyền admin!
 */
@RestController
@RequestMapping("/api/admin/password-migration")
public class PasswordMigrationController {

    @Autowired
    private PasswordMigrationService passwordMigrationService;

    /**
     * Kiểm tra trạng thái migration
     */
    @GetMapping("/status")
    public ResponseEntity<Map<String, Object>> getMigrationStatus(HttpSession session) {
        Map<String, Object> response = new HashMap<>();
        ResponseEntity<Map<String, Object>> authError = checkAdminAccess(session);
        if (authError != null) {
            return authError;
        }

        try {
            boolean isCompleted = passwordMigrationService.isMigrationCompleted();
            int usersNeedingMigration = passwordMigrationService.getUsersNeedingMigration();

            response.put("migrationCompleted", isCompleted);
            response.put("usersNeedingMigration", usersNeedingMigration);
            response.put("status", isCompleted ? "COMPLETED" : "PENDING");
            response.put("message", isCompleted ? "Password migration đã hoàn thành"
                    : "Có " + usersNeedingMigration + " users cần migration");

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            response.put("error", "Lỗi kiểm tra trạng thái migration: " + e.getMessage());
            return ResponseEntity.internalServerError().body(response);
        }
    }

    /**
     * Thực hiện migration cho tất cả users
     * WARNING: Chỉ chạy một lần duy nhất!
     */
    @PostMapping("/migrate-all")
    public ResponseEntity<Map<String, Object>> migrateAllPasswords(HttpSession session) {
        Map<String, Object> response = new HashMap<>();
        ResponseEntity<Map<String, Object>> authError = checkAdminAccess(session);
        if (authError != null) {
            return authError;
        }

        try {
            // Kiểm tra xem migration đã hoàn thành chưa
            if (passwordMigrationService.isMigrationCompleted()) {
                response.put("message", "Password migration đã hoàn thành trước đó");
                response.put("status", "ALREADY_COMPLETED");
                return ResponseEntity.ok(response);
            }

            // Thực hiện migration
            passwordMigrationService.migrateAllPasswords();

            // Kiểm tra kết quả
            boolean isCompleted = passwordMigrationService.isMigrationCompleted();
            int remainingUsers = passwordMigrationService.getUsersNeedingMigration();

            response.put("message", "Password migration hoàn thành");
            response.put("status", isCompleted ? "SUCCESS" : "PARTIAL_SUCCESS");
            response.put("migrationCompleted", isCompleted);
            response.put("remainingUsers", remainingUsers);

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            response.put("error", "Lỗi thực hiện password migration: " + e.getMessage());
            response.put("status", "ERROR");
            return ResponseEntity.internalServerError().body(response);
        }
    }

    /**
     * Thực hiện migration cho một user cụ thể
     */
    @PostMapping("/migrate-user/{userNo}")
    public ResponseEntity<Map<String, Object>> migrateUserPassword(@PathVariable String userNo, HttpSession session) {
        Map<String, Object> response = new HashMap<>();
        ResponseEntity<Map<String, Object>> authError = checkAdminAccess(session);
        if (authError != null) {
            return authError;
        }

        try {
            boolean success = passwordMigrationService.migrateUserPassword(userNo);

            if (success) {
                response.put("message", "Password migration thành công cho user: " + userNo);
                response.put("status", "SUCCESS");
            } else {
                response.put("message", "Password migration thất bại cho user: " + userNo);
                response.put("status", "FAILED");
            }

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            response.put("error", "Lỗi migration password cho user " + userNo + ": " + e.getMessage());
            response.put("status", "ERROR");
            return ResponseEntity.internalServerError().body(response);
        }
    }

    /**
     * Kiểm tra password của một user có được mã hóa chưa
     */
    @GetMapping("/check-user/{userNo}")
    public ResponseEntity<Map<String, Object>> checkUserPassword(@PathVariable String userNo, HttpSession session) {
        Map<String, Object> response = new HashMap<>();
        ResponseEntity<Map<String, Object>> authError = checkAdminAccess(session);
        if (authError != null) {
            return authError;
        }

        try {
            // Kiểm tra xem user có cần migration không
            boolean needsMigration = !passwordMigrationService.isMigrationCompleted();

            response.put("userNo", userNo);
            response.put("needsMigration", needsMigration);
            response.put("message", needsMigration ? "User cần migration" : "User đã được migration");

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            response.put("error", "Lỗi kiểm tra user " + userNo + ": " + e.getMessage());
            return ResponseEntity.internalServerError().body(response);
        }
    }

    private ResponseEntity<Map<String, Object>> checkAdminAccess(HttpSession session) {
        if (session == null) {
            return ResponseEntity.status(401).body(Map.of("error", "Chưa đăng nhập"));
        }

        HrUserInfo user = (HrUserInfo) session.getAttribute("currentHrUser");
        if (user == null || user.getSyUser() == null) {
            return ResponseEntity.status(401).body(Map.of("error", "Chưa đăng nhập"));
        }

        String userType = user.getSyUser().getUserType();
        boolean isAdmin = "ADMIN".equalsIgnoreCase(userType) || "SYS".equalsIgnoreCase(userType);
        if (!isAdmin) {
            return ResponseEntity.status(403).body(Map.of("error", "Không có quyền truy cập. Chỉ dành cho Admin."));
        }

        return null;
    }
}
