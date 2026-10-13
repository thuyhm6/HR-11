package com.ait.ar.countAttendance.dto;

import lombok.Data;

/** Tham số tìm kiếm cho trang Theo dõi tình trạng quẹt thẻ (empWorkingTimefoList). */
@Data
public class EmpWorkingTimefoSearchDto {
    private String keyword;
    /** Danh sách mã phòng ban, phân tách bằng dấu phẩy (frontend đã mở rộng xuống phòng ban con). */
    private String deptNos;
    /** Khoảng ngày công cần quét (YYYY-MM-DD). */
    private String fromDate;
    private String toDate;
    /** Số ngày OUT liên tiếp tối thiểu - không nhỏ hơn EmpWorkingTimefoListServiceImpl.MIN_CONSECUTIVE_DAYS. */
    private Integer minDays;

    private int draw;
    private int start;
    private int length;
}
