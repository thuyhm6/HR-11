package com.ait.edu.trainEducation.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 1 loại báo cáo đào tạo trên cây bên trái (REPORT_CENTER, REPORT_TYPE_NO là mã con của 14015405).
 * reportKey = chiều thống kê suy ra từ URL_JSP bản gốc (course / postGrade / dept / year / month / form).
 */
@Data
@NoArgsConstructor
public class EduTrainReportTypeDto {
    private String codeNo;
    private String reportName;
    private String reportKey;
    @JsonIgnore
    private String urlJsp;
}
