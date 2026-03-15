package com.ait.ar.attendanceSettings.model;

import java.util.Date;
import lombok.Data;

@Data
public class ArSupervisorInfo {
    private Long arSupervisorNo;
    private String personId;
    private String deptno;
    private Date createDate;
    private String createdBy;
    private Date updateDate;
    private String updatedBy;
    private Integer activity;
    private Integer orderno;
    private String createdIp;
    private String updatedIp;
}
