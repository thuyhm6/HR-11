package com.ait.mobile.approval.dto;

import com.ait.mobile.common.dto.MobileApproverDto;
import java.util.ArrayList;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Chi tiết đơn cho người duyệt. Nội dung đơn trả dạng danh sách (nhãn, giá trị) đã dịch theo ngôn ngữ app
 * để 1 màn hình hiển thị được cả đơn nghỉ, tăng ca, công bất thường.
 */
@Data
@NoArgsConstructor
public class MobileApprovalDetailDto {

    private String applyNo;
    private String applyType;
    private MobileApprovalCategory category;
    private String title;
    private String applyPersonInfo;
    private String statusName;
    /** Đơn đang chờ chính người đăng nhập duyệt => hiện nút Duyệt / Từ chối. */
    private boolean canApprove;
    private List<Field> fields = new ArrayList<>();
    private List<MobileApproverDto> approvals = new ArrayList<>();

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Field {
        private String label;
        private String value;
    }

    public void addField(String label, String value) {
        if (value != null && !value.isBlank()) {
            fields.add(new Field(label, value.trim()));
        }
    }
}
