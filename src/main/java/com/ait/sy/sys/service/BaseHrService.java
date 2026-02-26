package com.ait.sy.sys.service;

import com.ait.sy.sys.dto.DataTablesRequest;
import com.ait.sy.sys.dto.DataTablesResponse;
import com.ait.sy.sys.service.HrAuthenticationService.HrUserInfo;

import org.springframework.stereotype.Service;

import jakarta.servlet.http.HttpSession;
import java.time.LocalDateTime;
import java.util.Map;

/**
 * Base service class for common HR operations
 * Provides reusable functionality for all HR services
 */
@Service
public abstract class BaseHrService {

    /**
     * Check if user is authenticated
     */
    public boolean isUserAuthenticated(HttpSession session) {
        HrUserInfo currentHrUser = (HrUserInfo) session.getAttribute("currentHrUser");
        return currentHrUser != null;
    }

    /**
     * Get current user from session
     */
    public HrUserInfo getCurrentUser(HttpSession session) {
        return (HrUserInfo) session.getAttribute("currentHrUser");
    }

    /**
     * Get client IP address (simplified implementation)
     */
    public String getClientIpAddress(HttpSession session) {
        // This is a simplified implementation
        // In a real application, you would get the actual client IP from request
        return "127.0.0.1";
    }

    /**
     * Set audit fields for create operation
     */
    public void setCreateAuditFields(Object entity, HrUserInfo user, String clientIp) {
        try {
            // Use reflection to set common audit fields
            if (entity.getClass().getMethod("setCreateDate", LocalDateTime.class) != null) {
                entity.getClass().getMethod("setCreateDate", LocalDateTime.class)
                        .invoke(entity, LocalDateTime.now());
            }
            if (entity.getClass().getMethod("setCreatedBy", String.class) != null) {
                entity.getClass().getMethod("setCreatedBy", String.class)
                        .invoke(entity, user.getUsername());
            }
            if (entity.getClass().getMethod("setCreatedIp", String.class) != null) {
                entity.getClass().getMethod("setCreatedIp", String.class)
                        .invoke(entity, clientIp);
            }
            if (entity.getClass().getMethod("setUpdateDate", LocalDateTime.class) != null) {
                entity.getClass().getMethod("setUpdateDate", LocalDateTime.class)
                        .invoke(entity, LocalDateTime.now());
            }
            if (entity.getClass().getMethod("setUpdatedBy", String.class) != null) {
                entity.getClass().getMethod("setUpdatedBy", String.class)
                        .invoke(entity, user.getUsername());
            }
            if (entity.getClass().getMethod("setUpdatedIp", String.class) != null) {
                entity.getClass().getMethod("setUpdatedIp", String.class)
                        .invoke(entity, clientIp);
            }
        } catch (Exception e) {
            System.err.println("Error setting create audit fields: " + e.getMessage());
        }
    }

    /**
     * Set audit fields for update operation
     */
    public void setUpdateAuditFields(Object entity, HrUserInfo user, String clientIp) {
        try {
            // Use reflection to set common audit fields
            if (entity.getClass().getMethod("setUpdateDate", LocalDateTime.class) != null) {
                entity.getClass().getMethod("setUpdateDate", LocalDateTime.class)
                        .invoke(entity, LocalDateTime.now());
            }
            if (entity.getClass().getMethod("setUpdatedBy", String.class) != null) {
                entity.getClass().getMethod("setUpdatedBy", String.class)
                        .invoke(entity, user.getUsername());
            }
            if (entity.getClass().getMethod("setUpdatedIp", String.class) != null) {
                entity.getClass().getMethod("setUpdatedIp", String.class)
                        .invoke(entity, clientIp);
            }
        } catch (Exception e) {
            System.err.println("Error setting update audit fields: " + e.getMessage());
        }
    }

    /**
     * Create error response for DataTables
     */
    public <T> DataTablesResponse<T> createErrorResponse(DataTablesRequest request, String errorMessage) {
        DataTablesResponse<T> errorResponse = new DataTablesResponse<>();
        errorResponse.setDraw(request.getDraw());
        errorResponse.setError(errorMessage);
        return errorResponse;
    }

    /**
     * Create success response for DataTables
     */
    public <T> DataTablesResponse<T> createSuccessResponse(DataTablesRequest request,
            java.util.List<T> data,
            int totalRecords,
            int filteredRecords) {
        DataTablesResponse<T> response = new DataTablesResponse<>();
        response.setDraw(request.getDraw());
        response.setRecordsTotal(totalRecords);
        response.setRecordsFiltered(filteredRecords);
        response.setData(data);
        return response;
    }

    /**
     * Create error response for REST API
     */
    public Map<String, String> createErrorResponse(String errorMessage) {
        return Map.of("error", errorMessage);
    }

    /**
     * Create success response for REST API
     */
    public Map<String, Object> createSuccessResponse(String message, Object data) {
        return Map.of("message", message, "data", data);
    }

    /**
     * Create success response for REST API (message only)
     */
    public Map<String, String> createSuccessResponse(String message) {
        return Map.of("message", message);
    }

    /**
     * Validate required fields
     */
    public String validateRequiredFields(Map<String, Object> fields) {
        for (Map.Entry<String, Object> entry : fields.entrySet()) {
            if (entry.getValue() == null ||
                    (entry.getValue() instanceof String && ((String) entry.getValue()).trim().isEmpty())) {
                return "Trường " + entry.getKey() + " không được để trống";
            }
        }
        return null;
    }

    /**
     * Generate unique ID with prefix
     */
    public String generateUniqueId(String prefix) {
        return prefix + System.currentTimeMillis();
    }

    /**
     * Log operation for debugging
     */
    public void logOperation(String operation, String details) {
        System.out.println("=== " + operation + " ===");
        System.out.println("Details: " + details);
        System.out.println("Timestamp: " + LocalDateTime.now());
    }

    /**
     * Handle exception and return error message
     */
    public String handleException(Exception e, String operation) {
        System.err.println("Error in " + operation + ": " + e.getMessage());
        e.printStackTrace();
        return "Lỗi " + operation + ": " + e.getMessage();
    }
}
