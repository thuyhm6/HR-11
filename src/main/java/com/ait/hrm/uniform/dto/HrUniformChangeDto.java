package com.ait.hrm.uniform.dto;

import lombok.Data;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/** 1 lần đổi đồng phục của 1 nhân viên (HR_UNIFORM_CHANGE) kèm thông tin nhân viên và chi tiết từng loại. */
@Data
public class HrUniformChangeDto {
    private Long changeNo;
    private String personId;
    private String empId;
    private String localName;
    private String deptName;
    private String postGradeName;
    private String sexName;
    /** Ngày vào công ty (DD/MM/YYYY). */
    private String dateStarted;
    /** Ngày đổi (DD/MM/YYYY). */
    private String changeDate;
    /** Tháng đổi (MM/YYYY). */
    private String changeMonth;
    private String reason;
    private String remark;
    /** Ngày sớm nhất được đổi lần tiếp theo = ngày đổi + 6 tháng (DD/MM/YYYY). */
    private String nextEligibleDate;
    private List<HrUniformChangeDetailDto> details = new ArrayList<>();
    /** Tổng số lượng đồng phục đã đổi trong từng tháng của 6 tháng trước tháng tra cứu (key YYYY-MM). */
    private Map<String, Integer> prevMonthQty = new HashMap<>();
}
