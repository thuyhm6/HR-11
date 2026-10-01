package com.ait.pa.workManagement.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

/** Payload lưu giá trị ngoại lệ / ghi chú các dòng đã chọn (updatePaArSummaryForManageInfo bản gốc). */
@Data
@NoArgsConstructor
public class PaArSummaryManageSaveDto {

    @NotBlank(message = "pa.workFlow.msgSelectSchedule")
    private String payScheduleNo;

    @NotEmpty(message = "ar.viewPaArSummaryForManageList.QINGXUANZEBAOCUNSHUJU.b")
    @Valid
    private List<Item> items = new ArrayList<>();

    @Data
    @NoArgsConstructor
    public static class Item {
        @NotNull(message = "ar.viewPaArSummaryForManageList.QINGXUANZEBAOCUNSHUJU.b")
        private Long arSummaryManageNo;
        private BigDecimal finalValue;
        private String remark;
    }
}
