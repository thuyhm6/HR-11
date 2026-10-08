package com.ait.pa.workManagement.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/** Điều kiện tra cứu tổng lương (cá nhân / phòng ban). payScheduleNo bắt buộc - service kiểm tra. */
@Data
@NoArgsConstructor
public class PaResultSummarySearchDto {

    private String payScheduleNo;

    /** Mã nhân viên / họ tên - chỉ dùng ở bảng theo cá nhân. */
    private String empSearch;

    /** Danh sách phòng ban (đã mở rộng xuống phòng ban con ở frontend). */
    private List<String> deptNos;
}
