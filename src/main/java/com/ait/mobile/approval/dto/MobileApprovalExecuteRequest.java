package com.ait.mobile.approval.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import java.util.List;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Duyệt / từ chối 1 hoặc nhiều đơn. Client chỉ gửi số đơn + loại đơn; cấp duyệt, APPLY_FLAG... server tự lấy
 * từ hộp duyệt của chính người đăng nhập (không tin dữ liệu client như API web).
 */
@Data
@NoArgsConstructor
public class MobileApprovalExecuteRequest {

    @NotEmpty
    @Size(max = 50)
    @Valid
    private List<Item> items;

    /** true = duyệt, false = từ chối. */
    private boolean approve;

    @Size(max = 500)
    private String content;

    @Data
    @NoArgsConstructor
    public static class Item {
        @NotBlank
        private String applyNo;
        @NotBlank
        private String applyType;
    }
}
