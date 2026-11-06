package com.ait.mobile.approval.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

/** Dòng SY_AFFIRM_EMAIL đang chờ người đăng nhập duyệt - nguồn tham số cho PKG_AFFIRM_EMAIL.PR_AFFIRM_EXECUTE. */
@Data
@NoArgsConstructor
public class MobileAffirmRowDto {

    private String applyNo;
    private String applyType;
    private String applyTypeCode;
    private String applyFlag;
    private String affirmLevel;
    private String applyPersonId;
    private String title;
    private String applyPersonInfo;
    private String statusName;
}
