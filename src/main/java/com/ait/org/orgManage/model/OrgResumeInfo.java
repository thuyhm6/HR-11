package com.ait.org.orgManage.model;

import lombok.Data;
import java.util.Date;

@Data
public class OrgResumeInfo {
    private String seq;
    private String no;
    @com.fasterxml.jackson.annotation.JsonFormat(pattern = "yyyy-MM-dd", timezone = "Asia/Ho_Chi_Minh")
    private Date changeDate;
    private String resumeName;
    private String isCurrentOrg;
    private String changeReason;
    private Date createDate;
    private String createdBy;
    private Date updateDate;
    private String updatedBy;
    private String activity;
    private String cpnyId;
    private String updatedIp;
    private String fromNo;
    private String remark;
    private String createdIp;
    private String experienceType;

    // Additional fields for display if needed (e.g. formatted dates)
}
