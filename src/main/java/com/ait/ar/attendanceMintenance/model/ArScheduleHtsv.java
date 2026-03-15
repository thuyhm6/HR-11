package com.ait.ar.attendanceMintenance.model;

import lombok.Data;
import java.util.Date;

@Data
public class ArScheduleHtsv {
    private Long pkNo;
    private String personId;
    private String shiftNo;
    private String arDateStr;
    private String lockYn;
    private Date createDate;
    private String createdBy;
    private Date updateDate;
    private String updatedBy;
    private Integer activity;
    private Integer orderno;
    private String addFlag;
    private String updatedIp;
    private String createdIp;
    private Long typeid;
    private String remark;
}
