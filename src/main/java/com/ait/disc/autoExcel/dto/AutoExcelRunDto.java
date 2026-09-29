package com.ait.disc.autoExcel.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashMap;
import java.util.Map;

/** Payload chạy báo cáo + xuất Excel: giá trị người dùng nhập theo tên tham số (tham số hệ thống bị bỏ qua). */
@Data
@NoArgsConstructor
public class AutoExcelRunDto {
    @NotBlank(message = "autoExcel.msg.notFound")
    private String sqlSeq;

    private Map<String, String> params = new HashMap<>();
}
