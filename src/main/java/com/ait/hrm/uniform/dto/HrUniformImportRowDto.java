package com.ait.hrm.uniform.dto;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

/** 1 dòng dữ liệu đọc từ file Excel upload (hoặc 1 bản ghi nhập tay) kèm kết quả kiểm tra. */
@Data
public class HrUniformImportRowDto {
    /** Số dòng trong file Excel (bắt đầu từ 1), null nếu nhập tay. */
    private Integer rowNum;
    private Long changeNo;
    private String empId;
    /** Họ tên trong file (chỉ để đối chiếu). */
    private String fileLocalName;
    private String personId;
    private String localName;
    private String deptName;
    /** DD/MM/YYYY */
    private String changeDate;
    private String reason;
    private String remark;
    private List<HrUniformChangeDetailDto> details = new ArrayList<>();
    private List<String> errors = new ArrayList<>();
}
