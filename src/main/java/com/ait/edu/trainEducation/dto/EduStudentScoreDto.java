package com.ait.edu.trainEducation.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.Data;
import lombok.NoArgsConstructor;

/** Điểm số 1 học viên khi lưu trang Đánh giá học viên (bản gốc updateStudentEvaluateInfo: arrayfreeno / arrayevaresult). */
@Data
@NoArgsConstructor
public class EduStudentScoreDto {
    @NotBlank(message = "common.loadFail")
    private String freeNo;
    @Pattern(regexp = "^$|^(100|[1-9]?\\d)(\\.\\d+)?$", message = "edu.evaluate.msg.invalidScore")
    private String evaResult;
}
