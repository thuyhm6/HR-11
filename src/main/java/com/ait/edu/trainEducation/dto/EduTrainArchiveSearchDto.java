package com.ait.edu.trainEducation.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Điều kiện tìm hồ sơ đào tạo. Ngày DD/MM/YYYY (lọc theo thời gian thực hiện); rỗng = tháng hiện tại (giống bản gốc).
 * includeCurrent / includeHistory do service tính theo mốc chuyển đổi dữ liệu cũ, không nhận từ client.
 */
@Data
@NoArgsConstructor
public class EduTrainArchiveSearchDto {
    /** Mã nhân viên (khớp đúng) hoặc tên (khớp 1 phần, không dấu). */
    private String keyword;
    /** Phòng ban - lấy cả phòng ban con. */
    private String deptNo;
    private String courseName;
    private String startDate;
    private String endDate;
    private String trainContent;

    private boolean includeCurrent;
    private boolean includeHistory;
}
