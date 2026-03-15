package com.ait.ar.attendanceSettings.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ArShift020 {
    private Long pkNo;
    private Integer beginDayOffset;
    private Date fromTime;
    private Integer endDayOffset;
    private Date toTime;
    private String shiftNo;
    private String itemNo;
    private Date createDate;
    private String createdBy;
    private Date updateDate;
    private String updatedBy;
    private Integer activity;
    private Integer orderno;
}
