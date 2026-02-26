package com.ait.org.orgManage.model;

import lombok.Data;
import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;

@Data
public class OrgInfo {
    private String resumeNo;
    private String deptId;
    private String cpnyId;
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "Asia/Ho_Chi_Minh")
    private Date dateCreated;
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "Asia/Ho_Chi_Minh")
    private Date dateEnded;
    private Integer deptLevel;
    private String managerEmpId;
    private String deptNo;
    private String parentDeptNo;
    private String workArea;
    private String deptType;
    private String orgNameEng;
    private String orgNameLocal;
    private Integer orgLevel;
    private String costCenter;
    private String isDept;
    private String isPartTime;
    private String productType;
    private String useYn;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Ho_Chi_Minh")
    private Date createDate;
    private String createdBy;
    private String createdIp;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Ho_Chi_Minh")
    private Date updateDate;
    private String updatedBy;
    private String updatedIp;
    private Integer orderNo;
    private Integer activity;
    private String changeType;
    private String feeStandard;
    private String deptDistinguishStandard;
    private String orgNameKo;
    private String orgNameVi;
}
