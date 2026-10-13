package com.ait.hrm.uniform.dto;

import lombok.Data;

/** Thông tin nhân viên + lần đổi đồng phục gần nhất (dùng khi thêm mới / kiểm tra file upload). */
@Data
public class HrUniformEmpInfoDto {
    private String personId;
    private String empId;
    private String localName;
    private String deptName;
    private String postGradeName;
    private String sexName;
    private String dateStarted;
    /** Ngày đổi gần nhất (DD/MM/YYYY), null nếu chưa đổi lần nào. */
    private String lastChangeDate;
    /** Ngày sớm nhất được đổi tiếp (DD/MM/YYYY), null nếu chưa đổi lần nào. */
    private String nextEligibleDate;
}
