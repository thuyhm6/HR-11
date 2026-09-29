package com.ait.disc.autoExcel.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

/** Payload cập nhật mô tả/loại/thứ tự các tham số của 1 báo cáo (thay form updateSqlParamList.jsp). */
@Data
@NoArgsConstructor
public class AutoExcelParamUpdateDto {
    @NotBlank(message = "autoExcel.msg.notFound")
    private String sqlSeq;

    @Valid
    private List<AutoExcelParamDto> params = new ArrayList<>();
}
