package com.ait.ar.attendanceSettings.model;

import java.util.Date;
import lombok.Data;

@Data
public class ArSupervisor {
    private String personId;
    private Date createDate;
    private String createdBy;
    private Date updateDate;
    private String updatedBy;
    private Integer activity;
    private Integer orderno;
    private Integer modifyYn;
    private String createdIp;
    private String updatedIp;
}
