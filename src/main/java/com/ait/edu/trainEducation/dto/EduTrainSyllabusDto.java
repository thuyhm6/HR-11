package com.ait.edu.trainEducation.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;

/** Lịch đào tạo của kế hoạch - bảng EDU_TRAIN_SYLLABUS. courseDate DD/MM/YYYY, giờ HH24:MI. */
@Data
@NoArgsConstructor
public class EduTrainSyllabusDto {
    private String syllNo;
    private String planNo;
    @Size(max = 200, message = "autoExcel.msg.tooLong")
    private String courseNameCode;
    @NotBlank(message = "edu.common.msg.invalidDate")
    @Pattern(regexp = "^\\d{2}/\\d{2}/\\d{4}$", message = "edu.common.msg.invalidDate")
    private String courseDate;
    @NotBlank(message = "edu.common.msg.invalidTime")
    @Pattern(regexp = "^([01]?\\d|2[0-3]):[0-5]\\d$", message = "edu.common.msg.invalidTime")
    private String courseStartTime;
    @NotBlank(message = "edu.common.msg.invalidTime")
    @Pattern(regexp = "^([01]?\\d|2[0-3]):[0-5]\\d$", message = "edu.common.msg.invalidTime")
    private String courseEndTime;
    @Size(max = 200, message = "autoExcel.msg.tooLong")
    private String detailAddress;
}
