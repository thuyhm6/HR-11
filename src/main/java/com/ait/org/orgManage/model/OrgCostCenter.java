package com.ait.org.orgManage.model;

import lombok.Data;
import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;

@Data
public class OrgCostCenter {
    private String seq;
    private String cpnyId;
    private String codeNo;
    private String codeName;
    private String codeEngName;
    private String remark;
    private String startDate; // VARCHAR2(20)
    private String endDate; // VARCHAR2(20)
    private String country;
    private String address;
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

    private String businessScope;
    private String profitCenter;
    private String codeKoreanName;
    private String codeVietnameseName;
}
