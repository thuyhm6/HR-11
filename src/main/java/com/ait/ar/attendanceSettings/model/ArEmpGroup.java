package com.ait.ar.attendanceSettings.model;

import lombok.Data;
import java.util.Date;

@Data
public class ArEmpGroup {
    private String personId;
    private String groupNo;
    private Date createDate;
    private String createdBy;
    private Date updateDate;
    private String updatedBy;
    private Integer activity;
    private Integer orderno;
}
