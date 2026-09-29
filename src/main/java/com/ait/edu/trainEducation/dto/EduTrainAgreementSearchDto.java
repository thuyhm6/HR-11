package com.ait.edu.trainEducation.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

/** Điều kiện tìm kiếm hợp đồng đào tạo (ngày dạng DD/MM/YYYY). */
@Data
@NoArgsConstructor
public class EduTrainAgreementSearchDto {
    private String deptNo;
    private String keyword;
    private String conStartDate;
    private String conEndDate;
}
