package com.ait.ar.attendanceSettings.dto;

import lombok.Data;
import java.util.Date;

@Data
public class ArEmpGroupDto {
    private String personId;
    private String groupNo;
    private Date createDate;
    private String createdBy;
    private Date updateDate;
    private String updatedBy;
    private Integer activity;
    private Integer orderno;

    // Join with HR_EMPLOYEE
    private String empId;
    private String localName;
    private String deptNo;
    private String deptName;
}
