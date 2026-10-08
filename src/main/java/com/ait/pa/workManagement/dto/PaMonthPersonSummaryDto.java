package com.ait.pa.workManagement.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

/**
 * Kết quả trang Hiện trạng lương theo tháng (bản gốc monthPersonCountInfoList.jsp): bảng số NV tháng trước/tháng này theo
 * phân loại lương + 2 bảng NV tăng / giảm theo nhóm.
 */
@Data
@NoArgsConstructor
public class PaMonthPersonSummaryDto {

    private List<CountRow> counts = new ArrayList<>();
    private List<ChangeRow> increases = new ArrayList<>();
    private List<ChangeRow> decreases = new ArrayList<>();

    /** Số NV của 1 phân loại lương ở 2 kỳ (bản gốc PASSTIME / NOWTIME). */
    @Data
    @NoArgsConstructor
    public static class CountRow {
        private String salaryDistinName;
        private BigDecimal prevCount;
        private BigDecimal curCount;
    }

    /**
     * 1 nhóm NV tăng/giảm. category: RECRUIT (tuyển mới trong kỳ) | RESIGN (thôi việc trong kỳ) | OTHER - bản gốc trả về
     * chuỗi tiếng Việt cố định trong SQL, bản mới trả mã để frontend dịch đa ngôn ngữ.
     * personIds: danh sách PERSON_ID của nhóm - service gộp từ 3 cột ZH_CONCAT của bản gốc (mỗi cột tối đa 300 NV để
     * không vượt giới hạn VARCHAR2), frontend gửi lại để xem danh sách NV.
     */
    @Data
    @NoArgsConstructor
    public static class ChangeRow {
        private String category;
        private BigDecimal count;
        private List<String> personIds = new ArrayList<>();
        @JsonIgnore
        private String personIdPart1;
        @JsonIgnore
        private String personIdPart2;
        @JsonIgnore
        private String personIdPart3;
    }
}
