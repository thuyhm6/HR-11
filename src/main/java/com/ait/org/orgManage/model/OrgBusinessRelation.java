package com.ait.org.orgManage.model;

import lombok.Data;
import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;

@Data
public class OrgBusinessRelation {
    private String seq;
    private String resumeNo;
    private String cpnyId;
    private String deptNo;
    private String codeNo;
    private String isDefault;
    private String activity;
    private Integer orderNo;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Ho_Chi_Minh")
    private Date createDate;
    private String createdBy;
    private String createdIp;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Ho_Chi_Minh")
    private Date updateDate;
    private String updatedBy;
    private String updatedIp;

    // Virtual fields for display (Mapped in XML ResultMap)
    private String businessName;
    private String deptName;
}
