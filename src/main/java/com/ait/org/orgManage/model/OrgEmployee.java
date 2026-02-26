package com.ait.org.orgManage.model;

import lombok.Data;
import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;

@Data
public class OrgEmployee {
    private String resumeNo;
    private String empId;
    private String chinesePinyin;
    private String englishName;
    private String positionNo;
    private String dutyNo;
    private String postNo;
    private String statusCode;
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "Asia/Ho_Chi_Minh")
    private Date dateStarted;
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "Asia/Ho_Chi_Minh")
    private Date dateLeft;
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "Asia/Ho_Chi_Minh")
    private Date endProbationDate;
    private String empTypeCode;
    private String cpnyId;
    private String personId;
    private String deptNo;
    private String localName;
    private String workArea;
    private String idCardNo;
    private String shiftNo;
    private String empOffice;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Ho_Chi_Minh")
    private Date createDate;
    private String createdBy;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Asia/Ho_Chi_Minh")
    private Date updateDate;
    private String updatedBy;
    private Integer activity;
    private String mainBusiness;
    private String experience;
    private String incumbency;
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "Asia/Ho_Chi_Minh")
    private String promotionDay; // Defined as VARCHAR2 in schema? "PROMOTION_DAY VARCHAR2(30)" - wait, schema
                                 // says VARCHAR2(30) but name implies Date. I'll stick to String as per schema
                                 // or Date? Schema says VARCHAR2(30). I'll use String.
    private String updatedIp;
    private String createdIp;
    private String koreanName;
    private String standardPosition;
    private String empCommonTypeCode;
    private String affirmWorkAge;
    private String workHourType;
    private String directIndirectDistinction;
    private String recruitType;
    private String insuranceType;
    private String insuranceArea;
    private String fileNumber;
    private String employeeOwned;
    private String wageType;
    private String position;
    private String dateLastUp; // VARCHAR2(50) per schema
    private String postGradeNo;
    private String postFamily;
    private String oldDeptNo;
}
