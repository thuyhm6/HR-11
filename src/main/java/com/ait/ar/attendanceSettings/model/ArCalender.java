package com.ait.ar.attendanceSettings.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ArCalender {
    private Date ddate;
    private Integer iyear;
    private Integer imonth;
    private Integer iday;
    private Integer iweek;
    private Integer workdayflag;
    private String ddateStr; // DDATE_STR: YYYY/MM/DD
    private String cpnyId;
    private String shiftNo;
    private String typeid;
    private String overtypeid;
    private String typeidDefault;
    private String operationId;
    private Date createDate;
    private String createdBy;
    private Date updateDate;
    private String updatedBy;
    private Integer activity;
    private Integer orderno;
    private String updatedIp;
    private String createdIp;
    private Integer statutoryFlag;
    private String remark;
}
