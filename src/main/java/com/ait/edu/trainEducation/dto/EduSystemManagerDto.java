package com.ait.edu.trainEducation.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

/** Hệ thống đào tạo - 1 dòng bảng EDU_SYSTEM_MANAGER (kèm tên mã theo ngôn ngữ hiện tại). */
@Data
@NoArgsConstructor
public class EduSystemManagerDto {
    private String sysmanaNo;
    private String trainDiffCode;
    private String trainDiffCodeName;
    private String trainTypeCode;
    private String trainTypeCodeName;
    private String trainTypeNo;
    private String remark;
}
