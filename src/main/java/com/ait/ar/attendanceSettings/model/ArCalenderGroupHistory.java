package com.ait.ar.attendanceSettings.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ArCalenderGroupHistory {
    private Date ddate;
    private Integer iyear;
    private Integer imonth;
    private Integer iday;
    private Integer iweek;
    private Integer workdayflag;
    private Integer typeid;
    private Integer overtypeid;
    private Integer typeidDefault;
    private String groupId;
    private Integer shiftNo;
    private String arDateStr; // AR_DATE_STR: YYYY/MM/DD
    private String cpnyId;
    private Date createDate;
    private String createdBy;
    private Date updateDate;
    private String updatedBy;
    private Integer activity;
    private Integer orderno;
    private String operationId;
    private String updatedIp;
    private String createdIp;
}
